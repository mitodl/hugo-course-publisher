---
title: Method Call
uid: 8c95d63975bf95ad3e09a57e07dfae48
parent_uid: c194b3a46abc5e09e9503ce3c8d6e987
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8-video-solutions/method-call
short_url: method-call
inline_embed_id: 68282448methodcall55501315
about_this_resource_text: >-
  <p><strong>Description:</strong> This question explains the how a class method
  changes a attribute is altered in Python.</p> <p><strong>Instructor:</strong>
  Dr. Ana Bell</p>
related_resources_text: ''
transcript: >-
  <p><span m='790'>The</span> <span m='850'>following</span> <span
  m='1300'>content</span> <span m='1870'>is</span> <span
  m='1990'>provided</span> <span m='2440'>under</span> <span m='2710'>a</span>
  <span m='2770'>Creative</span> <span m='3190'>Commons</span> <span
  m='3580'>license.</span> <span m='4730'>Your</span> <span
  m='4870'>support</span> <span m='5380'>will</span> <span m='5530'>help</span>
  <span m='5770'>MIT</span> <span m='6220'>OpenCourseWare</span> <span
  m='7030'>continue</span> <span m='7540'>to</span> <span m='7630'>offer</span>
  <span m='8050'>high</span> <span m='8290'>quality</span> <span
  m='8770'>educational</span> <span m='9400'>resources</span> <span
  m='10030'>for</span> <span m='10210'>free.</span> <span m='11390'>To</span>
  <span m='11410'>make</span> <span m='11620'>a</span> <span
  m='11650'>donation,</span> <span m='12370'>or</span> <span
  m='12610'>view</span> <span m='13060'>additional</span> <span
  m='13480'>materials</span> <span m='13990'>from</span> <span
  m='14200'>hundreds</span> <span m='14590'>of</span> <span m='14710'>MIT</span>
  <span m='15130'>courses,</span> <span m='16219'>visit</span> <span
  m='16450'>MIT</span> <span m='16870'>OpenCourseWare</span> <span
  m='17880'>at</span> <span m='18110'>ocw.mit.edu.</span> </p><p><span
  m='23710'>ANA BELL:</span> <span m='23785'>This</span> <span
  m='23860'>is</span> <span m='23980'>my</span> <span
  m='24100'>definition,</span> <span m='25480'>including</span> <span
  m='26950'>the</span> <span m='27160'>method</span> <span m='27790'>to</span>
  <span m='28660'>paint</span> <span m='28930'>the</span> <span
  m='29050'>car,</span> <span m='29440'>so</span> <span m='29590'>to</span>
  <span m='29680'>change</span> <span m='29980'>its</span> <span
  m='30130'>color.</span> <span m='31570'>And</span> <span m='31750'>the</span>
  <span m='31840'>question</span> <span m='32229'>says</span> <span
  m='32439'>you</span> <span m='32530'>create</span> <span m='32770'>a</span>
  <span m='32830'>car</span> <span m='33100'>with</span> <span
  m='33550'>this</span> <span m='33790'>line</span> <span m='34120'>here.</span>
  <span m='35350'>So</span> <span m='35440'>you're</span> <span
  m='35560'>initializing</span> <span m='36160'>it</span> <span
  m='36220'>with</span> <span m='36370'>4</span> <span m='36680'>comma</span>
  <span m='36990'>2.</span> <span m='37780'>What's</span> <span
  m='37980'>a</span> <span m='38020'>line</span> <span m='38230'>of</span> <span
  m='38320'>code</span> <span m='38560'>that</span> <span
  m='38680'>changes</span> <span m='39010'>the</span> <span
  m='39100'>color</span> <span m='39430'>from</span> <span
  m='40750'>whatever</span> <span m='41050'>it</span> <span
  m='41350'>initially</span> <span m='41860'>is</span> <span m='42220'>to</span>
  <span m='42440'>red?</span> </p><p><span m='44600'>The</span> <span
  m='44690'>first</span> <span m='45050'>one,</span> <span
  m='45960'>car.paintred,</span> <span m='46820'>is</span> <span
  m='47270'>sort</span> <span m='47540'>of</span> <span
  m='47660'>attempting</span> <span m='48170'>to</span> <span
  m='48290'>do</span> <span m='48650'>the</span> <span m='49880'>way</span>
  <span m='50030'>that</span> <span m='50150'>we</span> <span
  m='50300'>saw</span> <span m='50480'>in</span> <span m='50570'>the</span>
  <span m='50660'>right</span> <span m='50930'>in</span> <span
  m='51020'>the</span> <span m='51110'>slides</span> <span
  m='51650'>where</span> <span m='51770'>you</span> <span
  m='51890'>calling</span> <span m='52220'>the</span> <span
  m='52340'>class</span> <span m='52730'>name</span> <span m='53070'>dot.</span>
  <span m='53930'>But</span> <span m='54140'>it's</span> <span
  m='54290'>missing</span> <span m='54620'>the</span> <span
  m='54710'>self.</span> <span m='55220'>So</span> <span m='55340'>we</span>
  <span m='55430'>don't</span> <span m='55550'>know</span> <span
  m='55730'>what</span> <span m='55970'>object</span> <span m='56300'>to</span>
  <span m='56450'>call</span> <span m='56660'>it</span> <span
  m='56750'>on.</span> <span m='57290'>So</span> <span m='57410'>that</span>
  <span m='57530'>one's</span> <span m='57710'>out</span> <span
  m='57860'>of</span> <span m='57950'>the</span> <span m='58010'>running.</span>
  <span m='59720'>The</span> <span m='59810'>second</span> <span
  m='60230'>one</span> <span m='60860'>is</span> <span m='61070'>closer,</span>
  <span m='61850'>but</span> <span m='62510'>we</span> <span
  m='62690'>have</span> <span m='62900'>red</span> <span m='63110'>here</span>
  <span m='63320'>as</span> <span m='63440'>a</span> <span
  m='63500'>variable</span> <span m='64010'>as</span> <span
  m='64160'>opposed</span> <span m='64519'>to</span> <span m='64700'>a</span>
  <span m='64760'>string.</span> <span m='66640'>So</span> <span
  m='66760'>that</span> <span m='66880'>one's</span> <span m='67030'>not</span>
  <span m='67630'>going</span> <span m='67780'>to</span> <span
  m='67870'>work.</span> <span m='69040'>The</span> <span m='69160'>third</span>
  <span m='69430'>one</span> <span m='69580'>looks</span> <span
  m='69820'>good.</span> </p><p><span m='71140'>And</span> <span
  m='71260'>the</span> <span m='71380'>fourth</span> <span m='71710'>one</span>
  <span m='72040'>is</span> <span m='72340'>just</span> <span
  m='73480'>weird.</span> <span m='74390'>I</span> <span m='74490'>don't</span>
  <span m='74590'>think</span> <span m='74950'>that</span> <span
  m='75100'>one</span> <span m='75250'>will</span> <span m='75400'>work.</span>
  <span m='76240'>It's</span> <span m='76400'>attempting</span> <span
  m='76930'>to</span> <span m='77050'>put</span> <span m='77230'>a</span> <span
  m='77290'>value</span> <span m='77620'>for</span> <span m='77830'>self.</span>
  <span m='78250'>But</span> <span m='78430'>you've</span> <span
  m='78610'>already</span> <span m='78940'>called</span> <span
  m='79300'>mycar</span> <span m='79540'>dot</span> <span
  m='83260'>instead</span> <span m='83560'>of</span> <span m='83680'>the</span>
  <span m='84100'>class</span> <span m='85310'>name</span> <span
  m='85500'>dot.</span> <span m='86410'>So</span> <span m='86590'>here,</span>
  <span m='88360'>this</span> <span m='88570'>isn't</span> <span
  m='88750'>going</span> <span m='88930'>to</span> <span m='89020'>work.</span>
  <span m='91160'>So</span> <span m='91240'>since</span> <span
  m='91510'>you</span> <span m='91590'>already</span> <span
  m='91780'>called</span> <span m='95970'>the</span> <span
  m='96090'>object</span> <span m='96480'>name</span> <span m='96780'>dot</span>
  <span m='97530'>method</span> <span m='97860'>name,</span> <span
  m='98460'>you</span> <span m='98580'>just</span> <span m='98760'>have</span>
  <span m='98910'>to</span> <span m='99030'>give</span> <span
  m='99180'>it</span> <span m='99300'>the</span> <span m='99420'>other</span>
  <span m='99600'>parameter</span> <span m='100110'>that</span> <span
  m='100260'>it</span> <span m='100320'>needs,</span> <span
  m='100620'>which</span> <span m='100770'>is</span> <span m='100890'>the</span>
  <span m='100980'>color.</span> <span m='102370'>I</span> <span
  m='102450'>think</span> <span m='102630'>the</span> <span
  m='102690'>majority</span> <span m='103650'>have</span> <span
  m='103740'>gotten</span> <span m='103980'>it</span> <span
  m='104070'>right.</span> </p>
embedded_media:
  - uid: fffdbf66e8edf0e7c173c6c63d48d3ae
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: _ax4eNMI9Dw
  - uid: 9f9ec469c7ca4ad91fd18591246b7a5a
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: ax4eNMI9Dw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8-video-solutions/method-call/ax4eNMI9Dw.srt
  - uid: 6e53e02a6872483e30753c34209e3edd
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: ax4eNMI9Dw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8-video-solutions/method-call/ax4eNMI9Dw.pdf
  - uid: b390e2ccc3eb85fc0ff414c29bbd6e15
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 1822fe8f099f355c5a7ebf10ff74ee50
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 877b1caf522ef3c686a77d2c98c517ed
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: _ax4eNMI9Dw
  - uid: 49d17cf8152d1d5592284fb6c8c75b63
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/_ax4eNMI9Dw/default.jpg'
  - uid: 1021fc03dbd849eaa3e5bf5dd1f623a5
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: 54345b89561336dc92f5bdf1b156b29b
    parent_uid: 8c95d63975bf95ad3e09a57e07dfae48
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_08_exercise_04_300k.mp4
type: courses
layout: video
---
