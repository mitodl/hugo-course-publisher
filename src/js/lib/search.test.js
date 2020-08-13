import { LR_TYPE_COURSE } from "./constants"

import {
  buildSearchQuery,
  buildSuggestQuery,
  LEARN_SUGGEST_FIELDS,
  searchFields
} from "./search"

describe("search library", () => {
  it("form a basic text query", () => {
    const { query } = buildSearchQuery({ text: "Dogs are the best" })
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
                      bool: {
                        should: [
                          {
                            multi_match: {
                              query:  "Dogs are the best",
                              fields: searchFields(LR_TYPE_COURSE)
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              should: [
                {
                  multi_match: {
                    query:  "Dogs are the best",
                    fields: searchFields(LR_TYPE_COURSE)
                  }
                }
              ]
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
