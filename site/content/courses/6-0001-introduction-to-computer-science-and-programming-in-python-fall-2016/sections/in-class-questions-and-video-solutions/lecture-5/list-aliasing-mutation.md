---
about_this_resource_text: "<p><strong>Description:</strong> This in-class exercise demonstrates list how aliasing affects other list operations in Python.</p>\r\n<p><strong>Instructor:</strong> Dr. Ana Bell</p>"
embedded_media:
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: FKp-6sojt9A
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 935f65b96773f260a487777b107ea20a
  - id: FKp-6sojt9A.srt
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5/list-aliasing-mutation/FKp-6sojt9A.srt
    title: 3play caption file
    type: null
    uid: b4d330ce51f717c7817d6f233d8c39ee
  - id: FKp-6sojt9A.pdf
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5/list-aliasing-mutation/FKp-6sojt9A.pdf
    title: 3play pdf file
    type: null
    uid: a4a712663fab1d42f16f73bc5eb61a22
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 34aba14307674f5dfebc60bfa1e42ffc
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 268735cef0537a851005573bd2e2ece6
  - id: Video-YouTube-Stream
    media_location: FKp-6sojt9A
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Video-YouTube-Stream
    type: Video
    uid: d113e3ef909b3dce9d4cefea23d93d00
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/FKp-6sojt9A/default.jpg'
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a18808ae5708d2db0b1f9aef3a62021b
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Video-iTunes U-MP4
    type: Video
    uid: 8e62049f932afeec834ff6d6129e37d9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_05_exercise_04_300k.mp4
    parent_uid: 22a6fadbe4f1343ae332e2313ecf66fe
    title: Video-Internet Archive-MP4
    type: Video
    uid: 692ffbad0b22fd6fdef2919ac1043174
inline_embed_id: 14162501listaliasingmutation75058522
parent_uid: 2d1ecaeaf49e8ee7cac3ea3ce9cbe081
related_resources_text: ''
short_url: list-aliasing-mutation
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5/list-aliasing-mutation
title: List Aliasing / Mutation
transcript: >-
  <p><span m='790'>The</span> <span m='850'>following</span> <span
  m='1300'>content</span> <span m='1870'>is</span> <span
  m='1990'>provided</span> <span m='2440'>under</span> <span m='2710'>a</span>
  <span m='2770'>Creative</span> <span m='3190'>Commons</span> <span
  m='3580'>license.</span> <span m='4730'>Your</span> <span
  m='4870'>support</span> <span m='5380'>will</span> <span m='5530'>help</span>
  <span m='5770'>MIT</span> <span m='6220'>OpenCourseWare</span> <span
  m='7030'>continue</span> <span m='7540'>to</span> <span m='7630'>offer</span>
  <span m='8050'>high-quality</span> <span m='8770'>educational</span> <span
  m='9400'>resources</span> <span m='10030'>for</span> <span
  m='10210'>free.</span> <span m='11390'>To</span> <span m='11410'>make</span>
  <span m='11620'>a</span> <span m='11650'>donation</span> <span
  m='12370'>or</span> <span m='12610'>view</span> <span
  m='13060'>additional</span> <span m='13480'>materials</span> <span
  m='13990'>from</span> <span m='14200'>hundreds</span> <span
  m='14590'>of</span> <span m='14710'>MIT</span> <span m='15130'>courses,</span>
  <span m='16219'>visit</span> <span m='16450'>MIT</span> <span
  m='16870'>OpenCourseWare</span> <span m='17870'>at</span> <span
  m='18110'>ocw.mit.edu.</span> </p><p><span m='22760'>ANA BELL:</span> <span
  m='22805'>All</span> <span m='22850'>right,</span> <span m='23060'>so</span>
  <span m='23180'>let's</span> <span m='23390'>see.</span> <span
  m='26520'>So</span> <span m='26790'>first</span> <span m='27210'>we</span>
  <span m='27360'>have</span> <span m='27720'>L1</span> <span
  m='28200'>is</span> <span m='28350'>equal</span> <span m='28620'>to</span>
  <span m='29250'>bacon,</span> <span m='30420'>eggs.</span> <span
  m='31170'>I'm</span> <span m='31260'>going</span> <span m='31380'>to</span>
  <span m='31470'>short</span> <span m='31650'>form--</span> <span
  m='32600'>shorthand</span> <span m='33000'>this.</span> <span
  m='34140'>L2</span> <span m='34650'>is</span> <span m='34800'>equal</span>
  <span m='35100'>to</span> <span m='36090'>toast</span> <span
  m='36840'>and</span> <span m='37290'>jam.</span> <span
  m='39750'>Brunch--</span> <span m='41570'>I</span> <span
  m='41680'>should</span> <span m='41780'>actually</span> <span
  m='42020'>make</span> <span m='42170'>these</span> <span
  m='42350'>arrows--</span> <span m='44080'>brunch</span> <span
  m='44500'>is</span> <span m='44620'>equal</span> <span m='44830'>to</span>
  <span m='45040'>L1.</span> </p><p><span m='45340'>So</span> <span
  m='45640'>this</span> <span m='45820'>is</span> <span m='45910'>just</span>
  <span m='46150'>aliasing,</span> <span m='46880'>which</span> <span
  m='46990'>means</span> <span m='47200'>brunch</span> <span m='47490'>is</span>
  <span m='47590'>going</span> <span m='47770'>to</span> <span
  m='47860'>point</span> <span m='48130'>to</span> <span
  m='48250'>whatever</span> <span m='48620'>L1</span> <span
  m='49000'>object</span> <span m='49510'>points</span> <span
  m='49840'>to.</span> <span m='52290'>And</span> <span m='52470'>if</span>
  <span m='52620'>I</span> <span m='52680'>do</span> <span
  m='52940'>L1.append</span> <span m='53920'>juice,</span> <span
  m='54540'>L1</span> <span m='55080'>is</span> <span m='55230'>now</span> <span
  m='55470'>going</span> <span m='55740'>to</span> <span m='55830'>be</span>
  <span m='56670'>bacon,</span> <span m='57990'>eggs,</span> <span
  m='58770'>and</span> <span m='59310'>juice.</span> <span m='62530'>OK?</span>
  </p><p><span m='63720'>This</span> <span m='64040'>L1</span> <span
  m='64739'>has</span> <span m='64920'>been</span> <span
  m='65099'>mutated</span> <span m='65550'>to</span> <span m='65670'>be</span>
  <span m='65820'>that.</span> <span m='66240'>And since</span> <span
  m='66660'>brunch</span> <span m='67170'>still</span> <span
  m='67440'>points</span> <span m='67740'>to</span> <span m='67890'>the</span>
  <span m='67950'>same</span> <span m='68190'>object</span> <span
  m='68610'>that</span> <span m='68760'>L1</span> <span m='69150'>points</span>
  <span m='69510'>to,</span> <span m='69660'>brunch</span> <span
  m='69980'>is</span> <span m='70140'>now</span> <span m='70320'>going</span>
  <span m='70530'>to</span> <span m='70620'>point</span> <span
  m='70920'>to</span> <span m='71130'>there.</span> <span m='72256'>OK?</span>
  <span m='74920'>So</span> <span m='75070'>when</span> <span m='75190'>I</span>
  <span m='75280'>do</span> <span m='75430'>brunch.extend</span> <span
  m='76590'>L2,</span> <span m='77230'>I'm</span> <span m='77380'>going</span>
  <span m='77650'>to</span> <span m='77770'>take</span> <span
  m='78070'>whatever</span> <span m='78400'>brunch</span> <span
  m='78790'>is,</span> <span m='79590'>which</span> <span m='79990'>is</span>
  <span m='80140'>this</span> <span m='80350'>part</span> <span
  m='80620'>here,</span> <span m='82724'>and</span> <span m='85540'>I'm</span>
  <span m='85660'>going</span> <span m='85870'>to</span> <span
  m='85930'>extend</span> <span m='86410'>it</span> <span m='86560'>by</span>
  <span m='87470'>L2,</span> <span m='88060'>which</span> <span
  m='88330'>is</span> <span m='88570'>toast</span> <span m='89770'>and</span>
  <span m='90130'>jam.</span> <span m='91344'>OK?</span> </p><p><span
  m='92140'>So</span> <span m='92270'>it's</span> <span m='92350'>just</span>
  <span m='92500'>going</span> <span m='92640'>to contain</span> <span
  m='93100'>a</span> <span m='93160'>large</span> <span m='93550'>list</span>
  <span m='94240'>of</span> <span m='94360'>those</span> <span
  m='94570'>five</span> <span m='94840'>elements</span> <span
  m='98225'>because</span> <span m='98720'>of</span> <span m='98840'>this</span>
  <span m='99380'>side</span> <span m='99650'>effect</span> <span
  m='100010'>issue,</span> <span m='100490'>where</span> <span
  m='100610'>brunch</span> <span m='101255'>was</span> <span
  m='102170'>pointing</span> <span m='102470'>to</span> <span
  m='102590'>the</span> <span m='102680'>same</span> <span
  m='102920'>thing</span> <span m='103100'>that</span> <span
  m='103400'>L1</span> <span m='103610'>was</span> <span
  m='103760'>pointing</span> <span m='104300'>to,</span> <span
  m='105839'>OK?</span> <span m='107200'>So</span> <span m='108130'>it's</span>
  <span m='108280'>close,</span> <span m='109120'>but</span> <span
  m='109510'>I</span> <span m='109630'>think--</span> <span
  m='110830'>perfect.</span> <span m='111430'>Yes,</span> <span
  m='112450'>that's</span> <span m='112660'>the</span> <span
  m='112750'>right</span> <span m='112900'>answer.</span> </p>
uid: 22a6fadbe4f1343ae332e2313ecf66fe
type: courses
layout: video
---
