import bodybuilder from "bodybuilder"

import { emptyOrNil } from "./util"
import {
  LR_TYPE_COURSE,
  LR_TYPE_VIDEO,
  LR_TYPE_PODCAST,
  LR_TYPE_PODCAST_EPISODE,
  LR_TYPE_RESOURCEFILE,
  OCW_PLATFORM
} from "./constants"

export const LEARN_SUGGEST_FIELDS = [
  "title.trigram",
  "short_description.trigram"
]

const OBJECT_TYPE = "type"

export const RESOURCE_QUERY_NESTED_FIELDS = [
  "runs.year",
  "runs.semester",
  "runs.level",
  "runs.instructors^5"
]

export const LR_TYPE_ALL = [
  LR_TYPE_COURSE,
  LR_TYPE_VIDEO,
  LR_TYPE_PODCAST,
  LR_TYPE_PODCAST_EPISODE,
  LR_TYPE_RESOURCEFILE
]

export const searchFields = type => {
  if (type === LR_TYPE_COURSE) {
    return COURSE_QUERY_FIELDS
  } else if (type === LR_TYPE_VIDEO) {
    return VIDEO_QUERY_FIELDS
  } else if (type === LR_TYPE_PODCAST) {
    return PODCAST_QUERY_FIELDS
  } else if (type === LR_TYPE_PODCAST_EPISODE) {
    return PODCAST_EPISODE_QUERY_FIELDS
  } else if (type === LR_TYPE_RESOURCEFILE) {
    return ["content", "title", "short_description"]
  } else {
    return LIST_QUERY_FIELDS
  }
}

const PODCAST_QUERY_FIELDS = [
  "title.english^3",
  "short_description.english^2",
  "full_description.english",
  "topics"
]

const PODCAST_EPISODE_QUERY_FIELDS = [
  "title.english^3",
  "short_description.english^2",
  "full_description.english",
  "topics",
  "series_title^2"
]

const COURSE_QUERY_FIELDS = [
  "title.english^3",
  "short_description.english^2",
  "full_description.english",
  "topics",
  "platform",
  "course_id",
  "coursenum^5",
  "offered_by"
]
const VIDEO_QUERY_FIELDS = [
  "title.english^3",
  "short_description.english^2",
  "full_description.english",
  "transcript.english^2",
  "topics",
  "platform",
  "video_id",
  "offered_by"
]

const LIST_QUERY_FIELDS = [
  "title.english^3",
  "short_description.english^2",
  "topics"
]

export const isDoubleQuoted = string => /^".+"$/.test(string)

export const buildSearchQuery = ({ text, from, size, sort, activeFacets }) => {
  let builder = bodybuilder()

  if (from !== undefined) {
    builder = builder.from(from)
  }
  if (size !== undefined) {
    builder = builder.size(size)
  }
  if (sort !== undefined) {
    const { field, option } = sort
    builder.sort(field, option)
  }

  for (const type of [LR_TYPE_COURSE]) {
    const queryType = isDoubleQuoted(text) ? "query_string" : "multi_match"
    const textQuery = emptyOrNil(text) ?
      {} :
      {
        should: [
          {
            [queryType]: {
              query:  text,
              fields: searchFields(type)
            }
          },
          type === LR_TYPE_COURSE ?
            [
              {
                nested: {
                  path:  "runs",
                  query: {
                    [queryType]: {
                      query:  text,
                      fields: RESOURCE_QUERY_NESTED_FIELDS
                    }
                  }
                }
              },
              {
                has_child: {
                  type:  "resourcefile",
                  query: {
                    [queryType]: {
                      query:  text,
                      fields: ["content", "title", "short_description"]
                    }
                  },
                  score_mode: "avg"
                }
              }
            ] :
            null
        ]
          .flat()
          .filter(clause => clause !== null)
      }

    // buildFacetSubQuery
    const facets = {
      ...activeFacets,
      offered_by: [OCW_PLATFORM]
    }

    const facetClauses = buildFacetSubQuery(facets, builder)

    // buildOrQuery
    builder = buildOrQuery(builder, type, textQuery, [])
    builder = builder.rawOption("post_filter", {
      bool: {
        must: [...facetClauses]
      }
    })

    // Include suggest if search test is not null/empty
    if (!emptyOrNil(text)) {
      builder = builder.rawOption(
        "suggest",
        // $FlowFixMe: if we get this far, text is not null
        buildSuggestQuery(text, LEARN_SUGGEST_FIELDS)
      )
    } else if (facetClauses.length === 0) {
      builder = builder.rawOption("sort", buildDefaultSort())
    }
  }

  return builder.build()
}

export const buildFacetSubQuery = (facets, builder) => {
  const facetClauses = []
  if (facets) {
    Object.entries(facets).forEach(([key, values]) => {
      const facetClausesForFacet = []

      if (values && values.length > 0) {
        addFacetClauseToArray(facetClauses, key, values)
      }

      // $FlowFixMe: we check for null facets earlier
      Object.entries(facets).forEach(([otherKey, otherValues]) => {
        if (otherKey !== key && otherValues && otherValues.length > 0) {
          addFacetClauseToArray(facetClausesForFacet, otherKey, otherValues)
        }
      })

      if (facetClausesForFacet.length > 0) {
        const filter = {
          filter: {
            bool: {
              must: [...facetClausesForFacet]
            }
          }
        }

        builder.agg("filter", key, aggregation => {
          return aggregation
            .orFilter("bool", filter)
            .agg(
              "terms",
              key === OBJECT_TYPE ? "object_type.keyword" : key,
              { size: 10000 },
              key
            )
        })
      } else {
        builder.agg(
          "terms",
          key === OBJECT_TYPE ? "object_type.keyword" : key,
          { size: 10000 },
          key
        )
      }
    })
  }
  return facetClauses
}

export const buildOrQuery = (builder, searchType, textQuery, extraClauses) => {
  const textFilter = emptyOrNil(textQuery) ? [] : [{ bool: textQuery }]
  builder = builder.orQuery("bool", {
    filter: {
      bool: {
        must: [
          {
            term: {
              object_type: searchType
            }
          },
          ...extraClauses,
          // Add multimatch text query here to filter out non-matching results
          ...textFilter
        ]
      }
    },
    // Add multimatch text query here again to score results based on match
    ...textQuery
  })
  return builder
}

const addFacetClauseToArray = (facetClauses, facet, values) => {
  if (
    facet === OBJECT_TYPE &&
    values.toString() === buildSearchQuery.toString()
  ) {
    return
  }

  const filterKey = facet === OBJECT_TYPE ? "object_type.keyword" : facet

  facetClauses.push({
    bool: {
      should: values.map(value => ({
        term: {
          [filterKey]: value
        }
      }))
    }
  })
}

export const buildSuggestQuery = (text, suggestFields) => {
  const suggest = {
    text
  }
  suggestFields.forEach(
    field =>
      // $FlowFixMe: yes the fields are missing and I'm adding them
      (suggest[field] = {
        phrase: {
          field:      `${field}`,
          size:       5,
          gram_size:  1,
          confidence: 0.0001,
          max_errors: 3,
          collate:    {
            query: {
              source: {
                match_phrase: {
                  "{{field_name}}": "{{suggestion}}"
                }
              }
            },
            params: { field_name: `${field}` },
            prune:  true
          }
        }
      })
  )
  return suggest
}

export const buildDefaultSort = () => {
  return [
    { minimum_price: { order: "asc" } },
    { default_search_priority: { order: "desc" } },
    { created: { order: "desc" } }
  ]
}

export const SEARCH_GRID_UI = "grid"
export const SEARCH_LIST_UI = "list"

export const searchResultToLearningResource = result => ({
  id:            result.id,
  title:         result.title,
  image_src:     result.image_src,
  object_type:   result.object_type,
  platform:      "platform" in result ? result.platform : null,
  topics:        result.topics ? result.topics.map(topic => ({ name: topic })) : [],
  runs:          "runs" in result ? result.runs : [],
  audience:      result.audience,
  certification: result.certification
})
