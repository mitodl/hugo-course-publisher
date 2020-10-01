import { INITIAL_FACET_STATE } from "@mitodl/course-search-utils/dist/constants"
import {
  CONTENT_TYPE_PAGE,
  CONTENT_TYPE_PDF,
  CONTENT_TYPE_VIDEO,
  LR_TYPE_COURSE,
  LR_TYPE_RESOURCEFILE
} from "./constants"

import {
  buildSearchQuery,
  buildSuggestQuery,
  getCoverImageUrl,
  getResourceUrl,
  getResultUrl,
  LEARN_SUGGEST_FIELDS,
  RESOURCE_QUERY_NESTED_FIELDS,
  RESOURCEFILE_QUERY_FIELDS,
  searchFields
} from "./search"
import { makeLearningResourceResult } from "../factories/search"

const activeFacets = {
  ...INITIAL_FACET_STATE,
  type: [LR_TYPE_COURSE]
}

describe("search library", () => {
  it("form a basic text query", () => {
    const { query } = buildSearchQuery({
      text: "Dogs are the best",
      activeFacets
    })
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
                fields: RESOURCEFILE_QUERY_FIELDS
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
    expect(
      buildSearchQuery({ text: "text!", activeFacets }).suggest
    ).toStrictEqual(buildSuggestQuery("text!", LEARN_SUGGEST_FIELDS))
    expect(buildSearchQuery({ activeFacets }).suggest).toBeUndefined()
  })

  it("should set from, size values", () => {
    const query = buildSearchQuery({ from: 10, size: 100, activeFacets })
    expect(query.from).toBe(10)
    expect(query.size).toBe(100)
  })

  //
  ;[true, false].forEach(hasImageSrc => {
    [CONTENT_TYPE_PAGE, CONTENT_TYPE_VIDEO, CONTENT_TYPE_PDF].forEach(
      contentType => {
        const fakeImgSrc = "http://fake/img.jpg"
        const result = {
          image_src:    hasImageSrc ? fakeImgSrc : null,
          content_type: contentType
        }
        it(`should return correct image for result w/content type ${contentType}, image_src ${result.image_src}`, () => {
          const expectedSrc = hasImageSrc ?
            result.image_src :
            `/images/${result.content_type}_thumbnail.png`
          expect(getCoverImageUrl(result)).toBe(expectedSrc)
        })
      }
    )
  })

  //
  ;[
    [
      CONTENT_TYPE_PAGE,
      "18-23",
      "mech_engineering",
      false,
      "/courses/18-23/sections/mech_engineering/"
    ],
    [
      CONTENT_TYPE_PAGE,
      "18-23",
      "mech_engineering",
      true,
      "/courses/18-23/sections/mech_engineering/"
    ],
    [
      CONTENT_TYPE_PDF,
      "https://s3.amazonaws.com/18-23/test.pdf",
      "shortlink1",
      false,
      "https://s3.amazonaws.com/18-23/test.pdf"
    ],
    [
      CONTENT_TYPE_PDF,
      "https://s3.amazonaws.com/18-23/test.pdf",
      "shortlink1",
      true,
      "/coursemedia/18-23/test.pdf"
    ],
    [
      CONTENT_TYPE_VIDEO,
      "https://youtube.com/?s=2335",
      null,
      false,
      "https://youtube.com/?s=2335"
    ],
    [
      CONTENT_TYPE_VIDEO,
      "https://youtube.com/?s=2335",
      null,
      true,
      "https://youtube.com/?s=2335"
    ],
    [CONTENT_TYPE_VIDEO, "/relative/url", null, false, "/relative/url"],
    [CONTENT_TYPE_VIDEO, "/relative/url", null, true, "/relative/url"]
  ].forEach(([contentType, url, shortUrl, hasCdn, expectedUrl]) => {
    it(`should return correct url for content type ${contentType} if the cdn is ${
      hasCdn ? "" : "not "
    }set`, () => {
      process.env["CDN_PREFIX"] = hasCdn ? "https://cdn.example.com" : null
      const result = {
        url,
        short_url:    shortUrl,
        run_slug:     url,
        content_type: contentType
      }
      expect(getResourceUrl(result)).toBe(expectedUrl)
    })
  })

  //
  ;[LR_TYPE_COURSE, LR_TYPE_RESOURCEFILE].forEach(objectType => {
    it(`should return correct url for object type ${objectType}`, () => {
      const isCourse = objectType === LR_TYPE_COURSE
      const result = makeLearningResourceResult(objectType)
      if (!isCourse) {
        result.content_type = CONTENT_TYPE_PAGE
      }
      const expected = isCourse ?
        `/courses/${result.runs[0].slug}/` :
        `/courses/${result.run_slug}/sections/${result.short_url}/`
      expect(getResultUrl(result)).toBe(expected)
    })
  })
})
