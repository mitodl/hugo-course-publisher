---
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question demonstrates how a
  custom class method can be constructed in Python.</p>
  <p><strong>Instructor:</strong> Dr. Ana Bell</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: qq7I2MQNrtU
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 99aafeb4c01a5fb2cd411edded472f28
  - id: qq7I2MQNrtU.srt
    parent_uid: a51a0e4432611cef4e80e8543993142c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/special-methods/qq7I2MQNrtU.srt
    title: 3play caption file
    type: null
    uid: e7b4b94bc46b81dd85926fac918e74ee
  - id: qq7I2MQNrtU.pdf
    parent_uid: a51a0e4432611cef4e80e8543993142c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/special-methods/qq7I2MQNrtU.pdf
    title: 3play pdf file
    type: null
    uid: 13a7a20e33d6cf30bedf5622c894fd17
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 637be205adbd2d58fe1a960c8e238b52
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c6b3b0a087931015d69e22eb0e1d076f
  - id: Video-YouTube-Stream
    media_location: qq7I2MQNrtU
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Video-YouTube-Stream
    type: Video
    uid: 34f82cd332694d406bd705e888cebfd3
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/qq7I2MQNrtU/default.jpg'
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 34f416f962e61f4f66cefd7eaf1e6731
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Video-iTunes U-MP4
    type: Video
    uid: b4ab50e059905a31913e69cf470ddea8
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_08_exercise_05_300k.mp4
    parent_uid: a51a0e4432611cef4e80e8543993142c
    title: Video-Internet Archive-MP4
    type: Video
    uid: e833adf87bb8c935ae92946a46e5f651
inline_embed_id: 40073371specialmethods54238751
parent_uid: ffd17f7bb2323aab9bf41b8697c77ccd
related_resources_text: ''
short_url: special-methods
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/special-methods
title: Special Methods
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
  m='16870'>OpenCourseWare</span> <span m='17880'>at</span> <span
  m='18110'>ocw.mit.edu.</span> </p><p><span m='23542'>ANA BELL:</span> <span
  m='23778'>OK.</span> <span m='27330'>We</span> <span m='27450'>have</span>
  <span m='28680'>our</span> <span m='28830'>class.</span> <span
  m='30570'>We've</span> <span m='30870'>done</span> <span
  m='33000'>pretty</span> <span m='33150'>much</span> <span
  m='33450'>everything</span> <span m='34140'>up</span> <span
  m='34260'>until</span> <span m='34530'>here,</span> <span m='35730'>and</span>
  <span m='35880'>we're</span> <span m='36000'>going</span> <span
  m='36210'>to</span> <span m='36300'>add</span> <span m='38300'>this</span>
  <span m='38460'>special</span> <span m='38870'>function</span> <span
  m='39320'>here.</span> <span m='40530'>So</span> <span m='40580'>we're</span>
  <span m='40730'>implementing</span> <span m='41390'>this</span> <span
  m='41660'>underscore</span> <span m='41915'>underscore</span> <span
  m='42480'>eq</span> <span m='42790'>underscore</span> <span
  m='43740'>underscore.</span> <span m='45650'>And</span> <span
  m='45770'>implementing</span> <span m='46400'>this</span> <span
  m='47580'>is</span> <span m='47960'>going</span> <span m='48200'>to</span>
  <span m='48380'>allow</span> <span m='48800'>us</span> <span
  m='49700'>to</span> <span m='50030'>compare</span> <span m='50690'>two</span>
  <span m='50960'>types</span> <span m='51560'>of</span> <span
  m='51680'>cars.</span> </p><p><span m='55200'>So</span> <span
  m='55380'>the</span> <span m='55490'>way</span> <span m='55650'>I've</span>
  <span m='55770'>decided</span> <span m='56160'>to</span> <span
  m='56280'>compare</span> <span m='56580'>two</span> <span
  m='56700'>types</span> <span m='57000'>of</span> <span m='57120'>cars</span>
  <span m='57570'>is</span> <span m='57840'>I'm</span> <span
  m='58020'>saying</span> <span m='59370'>the</span> <span m='59460'>two</span>
  <span m='59610'>cars</span> <span m='59910'>are</span> <span
  m='59970'>going</span> <span m='60180'>to</span> <span m='60270'>be</span>
  <span m='60420'>equal</span> <span m='60900'>if</span> <span
  m='61170'>they</span> <span m='61290'>have</span> <span m='61440'>the</span>
  <span m='61530'>same</span> <span m='61710'>number</span> <span
  m='61950'>of</span> <span m='62010'>wheels,</span> <span m='62370'>they</span>
  <span m='62490'>have</span> <span m='62610'>the</span> <span
  m='62700'>same</span> <span m='62910'>color,</span> <span m='63300'>and</span>
  <span m='63420'>if</span> <span m='63540'>they</span> <span
  m='63660'>have</span> <span m='63870'>the</span> <span m='63990'>same</span>
  <span m='66000'>number</span> <span m='66270'>of</span> <span
  m='66390'>doors.</span> <span m='68542'>OK?</span> <span m='69410'>So</span>
  <span m='69710'>if</span> <span m='71200'>all</span> <span m='71350'>of</span>
  <span m='71440'>these</span> <span m='71620'>are</span> <span
  m='71710'>equal,</span> <span m='72200'>then</span> <span
  m='72250'>return</span> <span m='72640'>true</span> <span m='73540'>and</span>
  <span m='73780'>else</span> <span m='74050'>return</span> <span
  m='74410'>false.</span> </p><p><span m='78440'>Inside</span> <span
  m='79310'>the</span> <span m='79430'>actual</span> <span
  m='79670'>program</span> <span m='80060'>here,</span> <span
  m='80300'>I'm</span> <span m='80390'>creating</span> <span
  m='80750'>one</span> <span m='80960'>car,</span> <span m='82030'>four</span>
  <span m='82280'>wheels,</span> <span m='82580'>two</span> <span
  m='82760'>doors.</span> <span m='83300'>I'm</span> <span
  m='83480'>changing</span> <span m='83870'>its</span> <span
  m='84020'>color</span> <span m='84290'>to</span> <span m='84410'>red.</span>
  <span m='85280'>I'm</span> <span m='85400'>creating</span> <span
  m='85730'>another</span> <span m='86060'>car--</span> <span
  m='86510'>four</span> <span m='86810'>wheels,</span> <span
  m='87080'>two</span> <span m='87260'>doors.</span> <span m='89420'>By</span>
  <span m='89600'>default,</span> <span m='90350'>this</span> <span
  m='90620'>new</span> <span m='90830'>car,</span> <span m='91145'>or</span>
  <span m='91460'>your</span> <span m='91700'>car,</span> <span
  m='93020'>is</span> <span m='93140'>going</span> <span m='93320'>to</span>
  <span m='93380'>have</span> <span m='93590'>the</span> <span
  m='93680'>color</span> <span m='94010'>empty</span> <span
  m='94310'>string,</span> <span m='94850'>because</span> <span
  m='95090'>that's</span> <span m='95330'>how</span> <span m='95720'>a</span>
  <span m='95810'>new</span> <span m='96050'>car</span> <span
  m='96350'>gets</span> <span m='96590'>initialized,</span> <span
  m='98206'>right?</span> </p><p><span m='101640'>So</span> <span
  m='102440'>between</span> <span m='102800'>my</span> <span
  m='103040'>car</span> <span m='103280'>and</span> <span m='103400'>your</span>
  <span m='103640'>car,</span> <span m='104240'>the</span> <span
  m='104360'>difference</span> <span m='104810'>is</span> <span
  m='105110'>going</span> <span m='105320'>to</span> <span m='105410'>be</span>
  <span m='105560'>the</span> <span m='105680'>color.</span> <span
  m='106020'>OK?</span> <span m='106760'>So</span> <span m='106880'>the</span>
  <span m='106970'>color</span> <span m='107250'>is</span> <span
  m='107340'>not</span> <span m='107480'>going</span> <span m='107630'>to</span>
  <span m='107690'>be</span> <span m='107750'>the</span> <span m='107840'>same,
  but</span> <span m='108230'>they</span> <span m='108320'>have</span> <span
  m='108410'>the</span> <span m='108500'>same</span> <span
  m='108680'>number</span> <span m='108920'>of</span> <span
  m='109010'>wheels</span> <span m='109280'>and the</span> <span
  m='109410'>same</span> <span m='109580'>number</span> <span
  m='109820'>of</span> <span m='109940'>doors.</span> </p><p><span
  m='112810'>So</span> <span m='112930'>because</span> <span m='113260'>I</span>
  <span m='113320'>implemented</span> <span m='113830'>the</span> <span
  m='114010'>equal</span> <span m='115270'>method</span> <span
  m='115600'>in</span> <span m='115720'>my</span> <span m='116170'>code,</span>
  <span m='117220'>this</span> <span m='117430'>does</span> <span
  m='117640'>not</span> <span m='117940'>throw</span> <span m='118210'>an</span>
  <span m='118300'>error.</span> <span m='119200'>This</span> <span
  m='119350'>lets</span> <span m='119530'>me</span> <span
  m='119620'>proceed.</span> <span m='120580'>It</span> <span
  m='120670'>compares</span> <span m='121600'>four</span> <span
  m='121870'>with</span> <span m='122050'>four,</span> <span
  m='122410'>which</span> <span m='122620'>is</span> <span
  m='122740'>good,</span> <span m='123000'>two</span> <span
  m='123220'>with</span> <span m='123400'>two,</span> <span
  m='123580'>which</span> <span m='123760'>is</span> <span
  m='123880'>good.</span> <span m='124250'>And</span> <span
  m='124270'>then</span> <span m='124390'>the</span> <span
  m='124480'>colors</span> <span m='124810'>don't</span> <span
  m='124990'>match,</span> <span m='125860'>so</span> <span
  m='125980'>it's</span> <span m='126100'>going</span> <span
  m='126280'>to</span> <span m='126340'>say</span> <span
  m='126580'>false,</span> <span m='128400'>which</span> <span
  m='128880'>most</span> <span m='129090'>of</span> <span m='129150'>the</span>
  <span m='129240'>guys</span> <span m='129479'>are</span> <span
  m='129539'>getting</span> <span m='129780'>it</span> <span
  m='129870'>right.</span> </p>
uid: a51a0e4432611cef4e80e8543993142c
type: courses
layout: video
---
