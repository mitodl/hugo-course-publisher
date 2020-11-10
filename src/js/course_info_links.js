import { serializeSearchParams } from "@mitodl/course-search-utils/dist/url_utils"
import { SEARCH_URL } from "./lib/constants"

const INFO_LINK_MANIFEST = [
  // see https://github.com/mitodl/hugo-course-publisher/pull/281#issuecomment-719547924
  // [".course-info-topic", "topics"],
  [".course-info-level", "level", null],
  [".course-info-department", "department_name", null],
  [".course-info-instructor", "q", "Prof."]
]

export const rewriteCourseInfoLinks = () => {
  INFO_LINK_MANIFEST.forEach(([className, searchParam, replaceText]) => {
    document.querySelectorAll(className).forEach(el => {
      const value = el.textContent.replace(replaceText, "").trim()
      const url = `${SEARCH_URL}?${serializeSearchParams(
        searchParam === "q" ?
          {
            text: `"${value}"`
          } :
          {
            activeFacets: {
              [searchParam]: value
            }
          }
      )}`
      el.setAttribute("href", url)
    })
  })
}
