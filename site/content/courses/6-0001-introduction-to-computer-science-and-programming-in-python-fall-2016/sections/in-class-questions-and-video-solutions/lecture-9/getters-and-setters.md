---
title: Getters and Setters
uid: c4e79febd329f6202a0b250ea3c746aa
parent_uid: d168b144bfeb0cd9daf8c345966e90d4
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters
short_url: getters-and-setters
inline_embed_id: 59923403gettersandsetters86021802
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question explains how and why
  class attribute getters and setters are important in Python.</p>
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
  m='18110'>ocw.mit.edu.</span> </p><p><span m='23520'>ANA BELL:</span> <span
  m='23580'>So</span> <span m='23640'>we</span> <span m='23730'>have</span>
  <span m='23850'>a</span> <span m='23910'>class</span> <span
  m='24240'>Car</span> <span m='24540'>here,</span> <span
  m='27120'>object</span> <span m='27855'>as</span> <span
  m='28170'>usual.</span> <span m='29520'>The</span> <span m='29670'>init</span>
  <span m='29910'>method</span> <span m='30240'>here</span> <span
  m='30930'>takes</span> <span m='31230'>in</span> <span m='31470'>self</span>
  <span m='31770'>as</span> <span m='31950'>usual,</span> <span
  m='32800'>a</span> <span m='33200'>w,</span> <span m='33485'>and</span> <span
  m='33770'>a d.</span> <span m='35260'>So</span> <span m='35460'>Car</span>
  <span m='35670'>gets</span> <span m='35880'>initialized</span> <span
  m='36480'>with</span> <span m='36690'>two</span> <span
  m='37530'>parameters.</span> <span m='39470'>And</span> <span
  m='39950'>we</span> <span m='40100'>assign</span> <span m='40430'>the</span>
  <span m='40520'>wheels</span> <span m='40820'>data</span> <span
  m='41000'>attribute</span> <span m='41420'>to</span> <span
  m='41540'>the</span> <span m='41660'>first</span> <span m='41990'>one</span>
  <span m='42260'>and</span> <span m='42410'>the</span> <span
  m='42530'>doors</span> <span m='42830'>data</span> <span
  m='43070'>attribute</span> <span m='43460'>to</span> <span
  m='43550'>the</span> <span m='43640'>second</span> <span m='43970'>one.</span>
  <span m='44990'>And</span> <span m='45170'>then</span> <span
  m='45560'>we're</span> <span m='45710'>going</span> <span m='45920'>to</span>
  <span m='46010'>also</span> <span m='46280'>assign</span> <span
  m='46700'>the</span> <span m='46790'>color data</span> <span
  m='47240'>attribute</span> <span m='48680'>to</span> <span m='48830'>be</span>
  <span m='48950'>the</span> <span m='49070'>empty</span> <span
  m='49310'>string.</span> </p><p><span m='50460'>So</span> <span
  m='50560'>I'm</span> <span m='50660'>giving</span> <span m='50750'>you</span>
  <span m='50840'>four</span> <span m='51110'>choices</span> <span
  m='51590'>here.</span> <span m='52280'>And</span> <span m='52400'>the</span>
  <span m='52460'>question</span> <span m='52820'>says,</span> <span
  m='53060'>which</span> <span m='53240'>of</span> <span m='53360'>the</span>
  <span m='53450'>above</span> <span m='53750'>is</span> <span
  m='53930'>a</span> <span m='53960'>getter</span> <span m='54200'>method</span>
  <span m='54530'>for</span> <span m='54740'>the</span> <span
  m='54860'>number</span> <span m='55130'>of</span> <span
  m='55280'>wheels?</span> <span m='57140'>So</span> <span
  m='57290'>getter</span> <span m='57530'>method</span> <span
  m='59180'>is</span> <span m='59390'>something</span> <span
  m='59690'>that's</span> <span m='59840'>going</span> <span m='59990'>to</span>
  <span m='60080'>get</span> <span m='60260'>a</span> <span
  m='60320'>data</span> <span m='60530'>attribute.</span> <span
  m='62250'>A</span> <span m='62370'>method</span> <span m='62730'>is</span>
  <span m='62910'>really</span> <span m='63180'>just</span> <span
  m='63360'>a</span> <span m='63430'>function.</span> </p><p><span
  m='63900'>So</span> <span m='65040'>of</span> <span m='65160'>course,</span>
  <span m='65500'>we're</span> <span m='65519'>going</span> <span
  m='65640'>to</span> <span m='65700'>have</span> <span m='65850'>def.</span>
  <span m='67110'>get_wheels</span> <span m='67920'>is</span> <span
  m='68310'>a</span> <span m='68370'>good</span> <span m='68550'>name</span>
  <span m='68760'>for</span> <span m='69000'>it.</span> <span m='70040'>Since
  it's</span> <span m='70290'>a</span> <span m='70440'>method</span> <span
  m='70770'>for</span> <span m='70920'>this</span> <span m='71100'>class,</span>
  <span m='71610'>we</span> <span m='71760'>have</span> <span
  m='71940'>to</span> <span m='72060'>have</span> <span m='72210'>self</span>
  <span m='72840'>in</span> <span m='72990'>the</span> <span
  m='73620'>parameters.</span> <span m='74520'>So</span> <span
  m='74730'>we</span> <span m='74790'>know</span> <span m='74910'>it's</span>
  <span m='75000'>going</span> <span m='75210'>to</span> <span
  m='75270'>be</span> <span m='75390'>between</span> <span m='75720'>C</span>
  <span m='75930'>and</span> <span m='76080'>D.</span> </p><p><span
  m='77790'>And</span> <span m='78390'>so</span> <span m='78570'>then</span>
  <span m='78720'>what</span> <span m='78870'>are</span> <span
  m='78930'>we</span> <span m='79020'>going</span> <span m='79140'>to</span>
  <span m='79230'>return?</span> <span m='79950'>The</span> <span
  m='80040'>first</span> <span m='80340'>one's</span> <span
  m='80440'>going</span> <span m='80550'>to</span> <span m='80760'>return</span>
  <span m='81090'>wheels,</span> <span m='83300'>which,</span> <span
  m='83600'>in</span> <span m='83720'>this</span> <span
  m='83810'>particular</span> <span m='84320'>case,</span> <span
  m='84650'>is</span> <span m='84770'>just</span> <span m='84950'>going</span>
  <span m='85130'>to</span> <span m='85220'>be</span> <span m='85310'>a</span>
  <span m='85400'>variable</span> <span m='86660'>that</span> <span
  m='86780'>we</span> <span m='86900'>haven't</span> <span
  m='87140'>defined,</span> <span m='87530'>but</span> <span
  m='87650'>it's</span> <span m='87770'>a</span> <span
  m='87830'>variable.</span> <span m='89080'>A</span> <span
  m='89370'>getter</span> <span m='89750'>returns</span> <span
  m='90470'>a</span> <span m='90530'>data</span> <span
  m='90800'>attribute</span> <span m='91310'>of</span> <span m='91470'>a</span>
  <span m='91520'>particular</span> <span m='92030'>instance.</span>
  </p><p><span m='93270'>So</span> <span m='93800'>we</span> <span
  m='93980'>actually</span> <span m='94280'>have</span> <span
  m='94430'>to</span> <span m='94520'>say</span> <span m='94700'>self dot</span>
  <span m='95990'>if</span> <span m='96140'>we</span> <span
  m='96230'>want</span> <span m='96380'>to</span> <span m='96440'>return</span>
  <span m='96860'>a</span> <span m='96890'>data</span> <span
  m='97160'>attribute</span> <span m='97610'>of</span> <span m='97730'>an</span>
  <span m='97850'>instance,</span> <span m='98400'>as</span> <span
  m='98450'>opposed</span> <span m='98720'>to</span> <span m='98810'>just</span>
  <span m='99110'>a</span> <span m='99530'>regular</span> <span
  m='99920'>variable.</span> <span m='100370'>So</span> <span
  m='100520'>the</span> <span m='100610'>correct</span> <span
  m='100880'>answer</span> <span m='101210'>is</span> <span m='102060'>D.</span>
  <span m='103260'>Great job.</span> </p>
embedded_media:
  - uid: def4123ff9f0df7fc5fb15af0d0e7aa1
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: C_pgH5QhIZ8
  - uid: f6c6c8fe7c89637132beb4805f09446c
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: C_pgH5QhIZ8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters/C_pgH5QhIZ8.srt
  - uid: 6208f7b5a17dc17a4205347ea23457bd
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: C_pgH5QhIZ8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9/getters-and-setters/C_pgH5QhIZ8.pdf
  - uid: 7d177407c09d0b0d051e0f90999f4933
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 6b09e00ab7b6b8f2dcbafbd84a509595
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 10a19d17fb8b88952a60390a3c850253
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: C_pgH5QhIZ8
  - uid: 818ff00dad0d1424dcd414fd5bcf9cd2
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/C_pgH5QhIZ8/default.jpg'
  - uid: 03278e280ae95e76e2b378b30cc7c515
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: 89f4153c81d87809adf33ffde3d26d00
    parent_uid: c4e79febd329f6202a0b250ea3c746aa
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_09_exercise_01_300k.mp4
type: courses
layout: video
---
