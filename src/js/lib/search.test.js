import { LR_TYPE_COURSE } from "./constants"

import {
  buildSearchQuery,
  buildSuggestQuery,
  LEARN_SUGGEST_FIELDS,
  RESOURCE_QUERY_NESTED_FIELDS,
  searchFields
} from "./search"

describe("search library", () => {
  it("form a basic text query", () => {
    const { query } = buildSearchQuery({ text: "Dogs are the best" })
    const repeatedPart = {
      should: [
        {
          multi_match: {
            query:  "Dogs are the best",
            fields: searchFields(LR_TYPE_COURSE)
          }
        },
        {
          nested: {
            path:  "runs",
            query: {
              multi_match: {
                query:  "Dogs are the best",
                fields: RESOURCE_QUERY_NESTED_FIELDS
              }
            }
          }
        },
        {
          has_child: {
            type:  "resourcefile",
            query: {
              multi_match: {
                query:  "Dogs are the best",
                fields: ["content", "title", "short_description"]
              }
            },
            score_mode: "avg"
          }
        }
      ]
    }

    expect(query).toStrictEqual({
      bool: {
        should: [
          {
            bool: {
              filter: {
                bool: {
                  must: [
                    {
                      term: {
                        object_type: LR_TYPE_COURSE
                      }
                    },
                    {
                      bool: repeatedPart
                    }
                  ]
                }
              },
              ...repeatedPart
            }
          }
        ]
      }
    })
  })

  it("should include suggest query, if text", () => {
    expect(buildSearchQuery({ text: "text!" }).suggest).toStrictEqual(
      buildSuggestQuery("text!", LEARN_SUGGEST_FIELDS)
    )
    expect(buildSearchQuery({}).suggest).toBeUndefined()
  })

  it("should set from, size values", () => {
    const query = buildSearchQuery({ from: 10, size: 100 })
    expect(query.from).toBe(10)
    expect(query.size).toBe(100)
  })
})
