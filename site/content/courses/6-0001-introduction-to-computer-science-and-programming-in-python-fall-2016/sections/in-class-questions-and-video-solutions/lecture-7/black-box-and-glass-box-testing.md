---
title: Black Box and Glass Box Testing
uid: 2c04fb25912179e0e60bf9336bd802d6
parent_uid: f61732313f529164402d295ceb4706e8
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/black-box-and-glass-box-testing
short_url: black-box-and-glass-box-testing
inline_embed_id: 27886125blackboxandglassboxtesting24421320
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question explains aspects of
  testing, including path-completeness and boundary conditions.</p>
  <p><strong>Instructor:</strong> Dr. Ana Bell</p>
related_resources_text: ''
transcript: >-
  <p><span m='790'>The</span> <span m='880'>following</span> <span
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
  m='17860'>at</span> <span m='17990'>ocw.mit.edu.</span> </p><p><span
  m='23860'>ANA BELL:</span> <span m='23950'>Let's</span> <span
  m='24040'>look</span> <span m='24220'>at</span> <span m='24340'>this</span>
  <span m='24520'>exercise.</span> <span m='32460'>So</span> <span
  m='32610'>we</span> <span m='32700'>have</span> <span m='33410'>this</span>
  <span m='33600'>function</span> <span m='34110'>is</span> <span
  m='34350'>even,</span> <span m='35720'>same</span> <span m='35970'>one
  as</span> <span m='36210'>before,</span> <span m='36660'>except</span> <span
  m='36810'>now</span> <span m='37130'>I'm</span> <span m='37200'>giving</span>
  <span m='37470'>you</span> <span m='37590'>this</span> <span
  m='37770'>implementation.</span> <span m='40270'>If</span> <span
  m='40550'>n</span> <span m='40680'>is</span> <span m='40860'>positive</span>
  <span m='42060'>and</span> <span m='45720'>n</span> <span
  m='46050'>divided</span> <span m='46350'>by</span> <span m='46470'>2's</span>
  <span m='46800'>remainder</span> <span m='47220'>is</span> <span
  m='47270'>0,</span> <span m='48120'>return</span> <span m='48450'>true.</span>
  <span m='48990'>So</span> <span m='49170'>if</span> <span m='49290'>n</span>
  <span m='49400'>is</span> <span m='49530'>even</span> <span
  m='49800'>and</span> <span m='49890'>positive</span> <span
  m='50370'>return</span> <span m='50700'>true.</span> <span
  m='51600'>The</span> <span m='51690'>next</span> <span m='51930'>one,</span>
  <span m='52320'>if</span> <span m='52500'>n</span> <span m='52680'>is</span>
  <span m='52830'>negative</span> <span m='53610'>and</span> <span
  m='54390'>divisible</span> <span m='54870'>by</span> <span m='55050'>2</span>
  <span m='55350'>return</span> <span m='55740'>true.</span> <span
  m='56370'>OK,</span> <span m='56580'>so</span> <span m='57090'>far.</span>
  <span m='57940'>And</span> <span m='58040'>otherwise</span> <span
  m='58620'>return</span> <span m='59040'>false.</span> </p><p><span
  m='61440'>Question</span> <span m='61890'>being,</span> <span
  m='63240'>with</span> <span m='63470'>that</span> <span
  m='63630'>implementation</span> <span m='64620'>is</span> <span
  m='64800'>this</span> <span m='65010'>test</span> <span m='65319'>set</span>
  <span m='67590'>n</span> <span m='67740'>is</span> <span m='67860'>4,</span>
  <span m='68060'>n</span> <span m='68160'>is</span> <span
  m='68260'>minus</span> <span m='68540'>4</span> <span m='68720'>path</span>
  <span m='69000'>complete?</span> <span m='71070'>And</span> <span
  m='71340'>the</span> <span m='71460'>answer</span> <span m='71910'>is,</span>
  <span m='72750'>yes.</span> <span m='73920'>Because</span> <span
  m='74280'>4</span> <span m='74970'>is</span> <span m='77520'>a</span> <span
  m='77580'>positive</span> <span m='78030'>number</span> <span
  m='78440'>and</span> <span m='78630'>divisible</span> <span
  m='79050'>by</span> <span m='79200'>2.</span> <span m='83620'>Minus</span>
  <span m='83970'>4</span> <span m='84540'>is</span> <span m='85020'>a</span>
  <span m='85110'>negative</span> <span m='85530'>number</span> <span
  m='85920'>and</span> <span m='86100'>divisible</span> <span
  m='86520'>by</span> <span m='86700'>2.</span> <span m='87600'>And</span> <span
  m='87780'>5</span> <span m='88230'>would</span> <span m='88380'>hit</span>
  <span m='88530'>upon</span> <span m='88800'>the</span> <span
  m='88950'>else.</span> <span m='93510'>So</span> <span m='93530'>the</span>
  <span m='93650'>answer</span> <span m='93920'>is</span> <span
  m='94010'>actually</span> <span m='94310'>yes</span> <span
  m='94760'>for</span> <span m='95000'>that</span> <span m='95180'>first</span>
  <span m='95450'>question.</span> <span m='96830'>Perfect.</span> </p><p><span
  m='100360'>Second</span> <span m='100750'>question,</span> <span
  m='101980'>with</span> <span m='102200'>that</span> <span
  m='102340'>implementation,</span> <span m='103090'>which</span> <span
  m='103310'>value</span> <span m='103600'>for</span> <span m='103840'>n</span>
  <span m='104080'>is</span> <span m='104670'>incorrectly</span> <span
  m='105310'>labeled</span> <span m='105700'>by</span> <span
  m='105880'>that</span> <span m='106060'>program?</span> <span
  m='108550'>Well,</span> <span m='108850'>n</span> <span m='108970'>is</span>
  <span m='109090'>very</span> <span m='109270'>large</span> <span
  m='109870'>still</span> <span m='110140'>works,</span> <span
  m='110590'>and</span> <span m='110710'>is</span> <span m='110800'>very</span>
  <span m='110950'>small</span> <span m='111190'>still</span> <span
  m='111370'>works.</span> <span m='111790'>And</span> <span
  m='111890'>remember,</span> <span m='112060'>I</span> <span
  m='112150'>said</span> <span m='112360'>you</span> <span
  m='112480'>have</span> <span m='112630'>to</span> <span m='112750'>test</span>
  <span m='112960'>boundary</span> <span m='113320'>conditions.</span> <span
  m='114310'>In</span> <span m='114400'>this</span> <span
  m='114550'>case,</span> <span m='114790'>boundary</span> <span
  m='115150'>conditions</span> <span m='115600'>for</span> <span
  m='115750'>this</span> <span m='115900'>program</span> <span
  m='116290'>being</span> <span m='116560'>when</span> <span m='116690'>n</span>
  <span m='116860'>is</span> <span m='116980'>equal</span> <span
  m='117190'>to</span> <span m='117310'>zero.</span> <span m='118570'>So</span>
  <span m='118690'>I</span> <span m='118780'>think</span> <span
  m='119410'>the</span> <span m='119530'>orange</span> <span
  m='119980'>is</span> <span m='120370'>n</span> <span m='120490'>is</span>
  <span m='120610'>equal</span> <span m='120950'>to</span> <span
  m='121230'>0.</span> <span m='121450'>Perfect.</span> </p>
embedded_media:
  - uid: 0b70ef0bbb62bfbfcddda1d258071413
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 5McjE8e5gIg
  - uid: 8f01f9c16ce0d3402fd98b689be69b06
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: 5McjE8e5gIg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/black-box-and-glass-box-testing/5McjE8e5gIg.srt
  - uid: 48fd374fa4658f73ac6bc3839ea389ad
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: 5McjE8e5gIg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/black-box-and-glass-box-testing/5McjE8e5gIg.pdf
  - uid: f4212175582d8912b012d11889efded6
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dc495fdbb73d8ff038cf8ced3a34c96e
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a82f03217df016d5aae6e8a431f3f7f7
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 5McjE8e5gIg
  - uid: 388b0174a06e0e1ba1323932d6d23148
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/5McjE8e5gIg/default.jpg'
  - uid: 1fada4fd3cf238044e94ea81eedf696e
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: fcc2c8f7f400e30d537822dc94a7478d
    parent_uid: 2c04fb25912179e0e60bf9336bd802d6
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_07_exercise_01_300k.mp4
type: courses
layout: video
---
