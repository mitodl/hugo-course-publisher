import { rewriteCourseInfoLinks } from "./course_info_links"

describe("course_info_links functions", () => {
  [
    [
      ".course-info-instructor",
      "Prof. Margaret Hamilton",
      "q=%22Margaret%20Hamilton%22"
    ],
    [".course-info-department", "Biology ", "d=Biology"],
    [".course-info-level", " Graduate", "l=Graduate"]
  ].forEach(([className, text, linkParam]) => {
    it("rewriteCourseInfoLinks adds correct url to element", async () => {
      const itemLink = document.createElement("a")
      itemLink.setAttribute("class", className.substring(1))
      itemLink.innerHTML = text

      jest.spyOn(document, "querySelectorAll").mockImplementation(selector => {
        return selector === className ? [itemLink] : []
      })

      rewriteCourseInfoLinks()
      expect(itemLink.getAttribute("href")).toEqual(`/search/?${linkParam}`)
    })
  })
})
