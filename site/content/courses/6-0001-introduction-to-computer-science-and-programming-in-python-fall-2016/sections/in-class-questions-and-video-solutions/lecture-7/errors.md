---
title: Errors
uid: 383972c51db0a96ce2221024b1e78b21
parent_uid: f61732313f529164402d295ceb4706e8
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/errors
short_url: errors
inline_embed_id: 19553875errors86197052
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question demonstrates error
  codes in Python.</p> <p><strong>Instructor:</strong> Dr. Ana Bell</p>
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
  <span m='8050'>high-quality</span> <span m='8770'>educational</span> <span
  m='9400'>resources</span> <span m='10030'>for</span> <span
  m='10210'>free.</span> <span m='11390'>To</span> <span m='11410'>make</span>
  <span m='11620'>a</span> <span m='11650'>donation</span> <span
  m='12370'>or</span> <span m='12610'>view</span> <span
  m='13060'>additional</span> <span m='13480'>materials</span> <span
  m='13990'>from</span> <span m='14200'>hundreds</span> <span
  m='14590'>of</span> <span m='14710'>MIT</span> <span m='15130'>courses,</span>
  <span m='16219'>visit</span> <span m='16450'>MIT</span> <span
  m='16870'>OpenCourseWare</span> <span m='17860'>at</span> <span
  m='17990'>ocw.mit.edu.</span> </p><p><span m='23320'>ANA BELL:</span> <span
  m='23425'>So</span> <span m='23530'>let's</span> <span m='23680'>see</span>
  <span m='23800'>if</span> <span m='23890'>you</span> <span
  m='23950'>can</span> <span m='24100'>figure</span> <span m='24370'>out</span>
  <span m='24550'>this</span> <span m='24850'>next</span> <span
  m='25180'>error.</span> <span m='29790'>Oh,</span> <span
  m='29910'>nice.</span> <span m='31140'>Looks</span> <span
  m='31320'>like</span> <span m='31480'>100%</span> <span m='32280'>are</span>
  <span m='32369'>getting</span> <span m='32610'>it</span> <span
  m='32729'>right</span> <span m='33000'>so</span> <span m='33210'>far.</span>
  <span m='34620'>So</span> <span m='35220'>we</span> <span
  m='35340'>have</span> <span m='35550'>L is</span> <span m='35780'>equal</span>
  <span m='36010'>to</span> <span m='36090'>3</span> <span m='36480'>for</span>
  <span m='36750'>i in</span> <span m='36990'>range</span> <span
  m='37290'>length</span> <span m='37620'>L</span> <span m='37830'>print</span>
  <span m='38290'>i.</span> <span m='38490'>And</span> <span
  m='38610'>this</span> <span m='38760'>is</span> <span m='38850'>the</span>
  <span m='38970'>error</span> <span m='39060'>message</span> <span
  m='40260'>telling</span> <span m='40530'>me</span> <span m='40650'>the</span>
  <span m='40740'>file,</span> <span m='42685'>the</span> <span
  m='42950'>line</span> <span m='43140'>number,</span> <span
  m='43410'>and</span> <span m='43500'>the</span> <span m='43590'>actual</span>
  <span m='43860'>line</span> <span m='44100'>that</span> <span
  m='44180'>was</span> <span m='44310'>wrong</span> <span m='45330'>and</span>
  <span m='45450'>then</span> <span m='45780'>a</span> <span
  m='45810'>description</span> <span m='46350'>of</span> <span
  m='46440'>the</span> <span m='46560'>error</span> <span m='46740'>type</span>
  <span m='47000'>error.</span> <span m='47390'>OK?</span> </p><p><span
  m='48420'>And</span> <span m='48570'>everyone's</span> <span
  m='49050'>getting</span> <span m='49320'>it</span> <span
  m='49410'>right,</span> <span m='50320'>which</span> <span
  m='50430'>is,</span> <span m='50820'>what's</span> <span m='51030'>the</span>
  <span m='51120'>problem</span> <span m='51540'>here?</span> <span
  m='58880'>We're</span> <span m='59030'>not</span> <span
  m='59180'>allowed</span> <span m='59360'>to</span> <span m='59480'>call</span>
  <span m='59690'>length</span> <span m='59930'>on</span> <span
  m='60020'>an</span> <span m='60140'>integer.</span> <span m='63326'>OK?</span>
  <span m='65190'>If</span> <span m='65340'>you</span> <span m='65430'>go</span>
  <span m='65610'>through</span> <span m='66165'>the</span> <span
  m='66540'>other</span> <span m='66690'>choices,</span> <span
  m='67140'>you'll</span> <span m='67290'>see</span> <span m='67470'>that</span>
  <span m='67650'>those</span> <span m='67920'>you</span> <span
  m='68070'>can</span> <span m='68190'>actually</span> <span
  m='68520'>do.</span> <span m='68670'>And</span> <span m='68760'>you</span>
  <span m='68850'>can</span> <span m='68970'>even</span> <span
  m='69210'>test</span> <span m='69480'>those</span> <span m='69660'>out</span>
  <span m='69900'>yourself</span> <span m='71490'>before</span> <span
  m='71760'>you</span> <span m='71850'>settle</span> <span m='73710'>on</span>
  <span m='73830'>the</span> <span m='73920'>right</span> <span
  m='74100'>answer.</span> </p>
embedded_media:
  - uid: 0b4f1db8c2e342b0785ab8e523217d2d
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: '-wz4iU2V-Yo'
  - uid: a937d2111280132465b83e25eb35f37e
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: '-wz4iU2V-Yo.srt'
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/errors/-wz4iU2V-Yo.srt
  - uid: ec99cb58aa1bcfd99ffd99ea011de854
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: '-wz4iU2V-Yo.pdf'
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-7/errors/-wz4iU2V-Yo.pdf
  - uid: d6c3bca206ca46f92a92afc8464a522f
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: afa6fcd8f042fdf7db34968aedd0e08a
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 21ef9870e4b420a91e710f9245ab6f30
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: '-wz4iU2V-Yo'
  - uid: 03a70def4ef49f37b4e57da6ef4bf745
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/-wz4iU2V-Yo/default.jpg'
  - uid: a28c9da6da1dc5cc34331c33cbca701f
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: feee0eb2ea73d85dc8813c2b2167be0f
    parent_uid: 383972c51db0a96ce2221024b1e78b21
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_07_exercise_02_300k.mp4
type: courses
layout: video
---
