Release Notes
=============

Version 1.4.0 (Released November 23, 2020)
-------------

- carousel image should be a link too
- Fix course description title (#404)
- Implement collapse/expand for course info (#396)
- fix topic link styling
- remove small arrow on home page
- make course banner into a link to course home
- fix image caption confusion
- two small design tweaks
- expand example_courses.json

Version 1.3.0 (Released November 20, 2020)
-------------

- Use material-design-icons (#359)
- Add back check for course_info params (#387)
- Adjust border radius of carousel card to match image (#386)
- add corporate sponsor logos
- add header_placeholder to the header block template and call course_banner.html with chp_partial.html (#376)
- course page content text style (#364)
- update homepage background image
- decrease header height to 70px
- remove 'theme engine'
- Style updates to course home page (#347)
- updates to home page, site header, etc
- fix two style oopsies
- go back to using display-4 with an override for the course banner text so responsive font sizing works
- rather than overriding the style for display-4 in bootstrap, just set the font size on the text directly
- reduce font size of course banner and remove bottom red border
- Update topics partials to use new data structure (#346)
- fmt
- move subheader block outside of the max-content-width container so background color and border can flow to the edge of the screen while inner container has the max width, override display-4 font size to be 3 rem and set weight to bold on the course title
- adjust vertical padding and h1 font size of course banner
- restructure html and styles so course_banner styles are isolated to the course_banner.html partial
- rename partial to course_banner.html
- uppercase the text in the course title
- use the same course title subheader for the course home page for now
- create a new block called "subheader" and place the course title there instead of inside the main block
- Don't activate desktop toggle for other pages (#348)
- upgrade ocw-to-hugo, add support for simplecast
- fix filter text-wrapping issue
- update styling of the home page to match designs
- Update markdown file to match ocw-to-hugo boilerplate (#342)
- set a static width on course info toggles for firefox compat and consolidate styles
- add a toggle button for the desktop course info column
- add back in topics and features in the mobile course info drawer

Version 1.2.0 (Released November 13, 2020)
-------------

- Set page titles (#327)
- enable topic search again (#332)
- Instructor search links (#325)
- remove links from Course no., "As Taught In" in course info
- break out course_info into 3 separate partials: course_info, course_features and topics
- remove "download course materials" buttons and update the readme
- Update ocw-to-hugo (#315)
- Implement Mailchimp signup (#298)
- switch from Travis to Github actions
- Update ocw-to-hugo (#320)
- Link to the most recent published course run url (#305)
- Enable static/hash.txt for CI deployment (#300)

Version 1.1.3 (Released November 06, 2020)
-------------

- Import bootstrap JS to fix carousel buttons (#297)
- Adjustments for social and signup link cards (#293)

Version 1.1.2 (Released November 05, 2020)
-------------

- add suggestions UI

Version 1.1.1 (Released November 04, 2020)
-------------

- Tweak course cards to be 300px wide on desktop view (#289)
- slightly reduce bundle size, style tables correctly

Version 1.1.0 (Released November 02, 2020)
-------------

- link from course info to search

Version 1.0.1 (Released October 30, 2020)
-------------

- Add static/hash.txt to build (#286)

