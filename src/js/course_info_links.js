import { serializeSearchParams } from "@mitodl/course-search-utils/dist/url_utils"
import { SEARCH_URL } from "./lib/constants"

const INFO_LINK_MANIFEST = [
  // see https://github.com/mitodl/hugo-course-publisher/pull/281#issuecomment-719547924
  // [".course-info-topic", "topics"],
  [".course-info-level", "level"],
  [".course-info-department", "department_name"]
]

export const rewriteCourseInfoLinks = () => {
  INFO_LINK_MANIFEST.forEach(([className, searchParam]) => {
    document.querySelectorAll(className).forEach(el => {
      const value = el.textContent.trim()
      const url = `${SEARCH_URL}?${serializeSearchParams({
        activeFacets: {
          [searchParam]: value
        }
      })}`
      el.setAttribute("href", url)
    })
  })
}
