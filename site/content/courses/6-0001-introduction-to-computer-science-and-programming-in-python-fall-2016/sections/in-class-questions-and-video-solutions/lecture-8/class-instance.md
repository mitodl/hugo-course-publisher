---
title: Class Instance
uid: 34ab63b82a9d3db412f7efbf3523f7f2
parent_uid: ffd17f7bb2323aab9bf41b8697c77ccd
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/class-instance
short_url: class-instance
inline_embed_id: 57376487classinstance59359049
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question explains the how a
  class instance is initialized in Python.</p> <p><strong>Instructor:</strong>
  Dr. Ana Bell</p>
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
  m='11650'>donation</span> <span m='12370'>or</span> <span
  m='12610'>view</span> <span m='13060'>additional</span> <span
  m='13480'>materials</span> <span m='13990'>from</span> <span
  m='14200'>hundreds</span> <span m='14590'>of</span> <span m='14710'>MIT</span>
  <span m='15130'>courses,</span> <span m='16219'>visit</span> <span
  m='16450'>MIT</span> <span m='16870'>OpenCourseWare</span> <span
  m='17890'>at</span> <span m='18110'>ocw.mit.edu.</span> </p><p><span
  m='23638'>PROFESSOR:</span> <span m='23800'>We</span> <span
  m='23962'>have</span> <span m='26080'>this</span> <span
  m='26260'>definition</span> <span m='26830'>for</span> <span
  m='27340'>the</span> <span m='27430'>class</span> <span
  m='28600'>object.</span> <span m='29470'>I've</span> <span
  m='31180'>created</span> <span m='31420'>the</span> <span
  m='31570'>init</span> <span m='31780'>for</span> <span m='31990'>you.</span>
  <span m='33100'>And</span> <span m='33250'>here</span> <span
  m='33450'>I'm</span> <span m='33550'>giving it</span> <span
  m='33820'>"self,"</span> <span m='34540'>which</span> <span
  m='34690'>is</span> <span m='34810'>the</span> <span m='34870'>first</span>
  <span m='35110'>thing</span> <span m='35290'>that</span> <span
  m='35410'>you</span> <span m='35590'>have</span> <span m='35800'>to</span>
  <span m='35920'>give</span> <span m='36100'>it,</span> <span
  m='36610'>and</span> <span m='36700'>then</span> <span m='36850'>two</span>
  <span m='37000'>parameters--</span> <span m='37600'>w</span> <span
  m='38080'>and</span> <span m='38230'>d.</span> <span m='40200'>And</span>
  <span m='40440'>for</span> <span m='42320'>an</span> <span
  m='42440'>instance</span> <span m='42950'>of</span> <span m='43520'>a</span>
  <span m='43580'>car,</span> <span m='44090'>I'm</span> <span
  m='44240'>going</span> <span m='44510'>to</span> <span m='44690'>assign</span>
  <span m='45230'>the</span> <span m='45320'>data</span> <span
  m='45590'>attribute</span> <span m='46040'>named</span> <span
  m='46310'>wheels</span> <span m='47270'>to</span> <span
  m='47420'>whatever</span> <span m='48050'>is</span> <span
  m='48200'>passed</span> <span m='48590'>in</span> <span m='48760'>for</span>
  <span m='48920'>w.</span> <span m='49790'>So</span> <span
  m='50000'>notice</span> <span m='50300'>that</span> <span
  m='50420'>they're</span> <span m='50510'>not</span> <span m='50750'>the</span>
  <span m='50870'>same</span> <span m='51440'>name.</span> </p><p><span
  m='52840'>And</span> <span m='53020'>the</span> <span m='53110'>data</span>
  <span m='53350'>attribute</span> <span m='53860'>for</span> <span
  m='54100'>"doors"</span> <span m='54610'>is</span> <span
  m='54790'>going</span> <span m='55060'>to</span> <span m='55120'>be</span>
  <span m='55510'>the</span> <span m='55840'>value</span> <span
  m='56230'>that's</span> <span m='56470'>passed</span> <span
  m='56800'>in</span> <span m='56950'>for</span> <span m='57130'>d</span> <span
  m='57493'>OK?</span> <span m='58760'>And</span> <span m='59050'>also</span>
  <span m='59410'>notice</span> <span m='59770'>that</span> <span
  m='60040'>inside</span> <span m='60370'>init,</span> <span m='60820'>I</span>
  <span m='60910'>can</span> <span m='61060'>do</span> <span
  m='61240'>any</span> <span m='61450'>other</span> <span m='61690'>sort</span>
  <span m='61840'>of</span> <span m='61960'>initializations</span> <span
  m='62770'>that</span> <span m='62860'>I'd</span> <span m='63040'>like.</span>
  <span m='63550'>So</span> <span m='63670'>it's</span> <span
  m='63820'>not</span> <span m='64090'>just</span> <span
  m='64540'>assigning</span> <span m='65140'>variables</span> <span
  m='66160'>from</span> <span m='66430'>the</span> <span
  m='66550'>parameters</span> <span m='67240'>to</span> <span
  m='68650'>variables</span> <span m='69270'>for</span> <span
  m='70510'>my</span> <span m='70690'>objects.</span> <span m='71720'>So</span>
  <span m='71770'>in</span> <span m='71830'>this</span> <span
  m='72010'>case</span> <span m='72280'>I'm</span> <span
  m='72880'>creating</span> <span m='73270'>a</span> <span m='73300'>new</span>
  <span m='73480'>data</span> <span m='73690'>attribute</span> <span
  m='74620'>named</span> <span m='74830'>"color,"</span> <span
  m='75340'>and</span> <span m='75490'>I'm</span> <span m='75580'>going</span>
  <span m='75850'>to</span> <span m='75970'>just</span> <span
  m='76390'>create</span> <span m='76630'>it</span> <span m='76750'>to</span>
  <span m='76880'>be</span> <span m='76990'>an</span> <span
  m='77080'>empty</span> <span m='77350'>string</span> <span
  m='77980'>OK,</span> <span m='80082'>even</span> <span m='80460'>though</span>
  <span m='80560'>I</span> <span m='80650'>didn't</span> <span
  m='80950'>pass</span> <span m='81300'>in</span> <span m='81610'>any</span>
  <span m='81790'>color</span> <span m='82120'>to</span> <span
  m='82870'>my</span> <span m='83290'>object.</span> </p><p><span
  m='84730'>So</span> <span m='84830'>the</span> <span m='84930'>question</span>
  <span m='85180'>says,</span> <span m='85390'>"Using</span> <span
  m='85660'>the</span> <span m='85750'>class</span> <span
  m='85990'>definition</span> <span m='86410'>above,</span> <span
  m='86710'>which</span> <span m='86920'>line</span> <span
  m='87160'>creates</span> <span m='87430'>a</span> <span m='87490'>new</span>
  <span m='87700'>Car</span> <span m='87910'>object</span> <span
  m='88330'>with</span> <span m='88510'>4</span> <span m='88780'>wheels</span>
  <span m='89140'>and</span> <span m='89320'>2</span> <span
  m='89500'>doors?"</span> <span m='89930'>OK?</span> <span m='91180'>So</span>
  <span m='91330'>this</span> <span m='94270'>first</span> <span
  m='94890'>one</span> <span m='96560'>is</span> <span m='98030'>not</span>
  <span m='98330'>right,</span> <span m='98870'>because</span> <span
  m='99200'>it's</span> <span m='99410'>trying</span> <span m='99770'>to</span>
  <span m='99890'>call</span> <span m='100250'>the</span> <span
  m='100370'>class</span> <span m='101570'>with a</span> <span
  m='102050'>variable</span> <span m='103400'>mycar</span> <span
  m='105020'>for</span> <span m='105200'>self,</span> <span
  m='105920'>which</span> <span m='106190'>isn't</span> <span
  m='106460'>quite</span> <span m='106730'>right.</span> <span
  m='107760'>So</span> <span m='108860'>when</span> <span
  m='109040'>you're</span> <span m='109130'>creating</span> <span
  m='109460'>your</span> <span m='109580'>object,</span> <span
  m='109970'>you</span> <span m='110030'>have</span> <span m='110180'>to</span>
  <span m='110300'>give</span> <span m='110480'>it</span> <span
  m='110630'>one</span> <span m='110960'>less</span> <span
  m='112010'>parameter</span> <span m='112490'>than</span> <span
  m='112700'>what</span> <span m='112820'>you</span> <span
  m='112940'>have.</span> <span m='113960'>So</span> <span
  m='114140'>here</span> <span m='114410'>we're</span> <span
  m='114530'>just</span> <span m='114710'>going</span> <span
  m='114920'>to</span> <span m='114980'>have</span> <span m='115190'>to</span>
  <span m='115310'>create</span> <span m='115550'>it</span> <span
  m='115640'>with</span> <span m='116210'>the</span> <span m='116330'>w</span>
  <span m='116720'>and</span> <span m='116840'>the</span> <span
  m='116960'>d.</span> </p><p><span m='118624'>So</span> <span
  m='119040'>we're</span> <span m='119100'>going</span> <span
  m='119220'>to</span> <span m='119280'>create</span> <span
  m='121770'>this</span> <span m='121920'>variable</span> <span
  m='122280'>mycar</span> <span m='124020'>and</span> <span
  m='124260'>we're</span> <span m='124380'>going</span> <span
  m='124590'>to</span> <span m='124680'>assign</span> <span m='124980'>it</span>
  <span m='125860'>4</span> <span m='126170'>for</span> <span
  m='126480'>the</span> <span m='126600'>number</span> <span
  m='126930'>of</span> <span m='127770'>wheels</span> <span
  m='128160'>and</span> <span m='128250'>2</span> <span m='128400'>for</span>
  <span m='128550'>the</span> <span m='128639'>number</span> <span
  m='128910'>of</span> <span m='128970'>doors.</span> <span
  m='129870'>And</span> <span m='129960'>the</span> <span
  m='130050'>number</span> <span m='130289'>of</span> <span
  m='130380'>wheels</span> <span m='130650'>is</span> <span
  m='130770'>the</span> <span m='130860'>first</span> <span
  m='131100'>parameter,</span> <span m='131910'>and</span> <span
  m='132000'>the</span> <span m='132060'>number</span> <span
  m='132330'>of</span> <span m='132420'>doors</span> <span m='132660'>is</span>
  <span m='132780'>the</span> <span m='132870'>second</span> <span
  m='133230'>one,</span> <span m='134010'>so it</span> <span
  m='134190'>should</span> <span m='134370'>be</span> <span
  m='134530'>this</span> <span m='134730'>one</span> <span
  m='134910'>here--</span> <span m='135930'>Car</span> <span m='136230'>4</span>
  <span m='136500'>comma</span> <span m='136790'>2.</span> <span
  m='137880'>So</span> <span m='138030'>that's</span> <span
  m='138640'>this</span> <span m='138840'>one.</span> <span
  m='139170'>Perfect.</span> </p>
embedded_media:
  - uid: 1e15ba58d41048bb86cb16bb465e468c
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 2__KumJsGXc
  - uid: b0c6a10d950fde539afc3c52b48c9878
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: 2__KumJsGXc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/class-instance/2__KumJsGXc.srt
  - uid: 4af66bdbb6c972292dbeeccb437d1738
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: 2__KumJsGXc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-8/class-instance/2__KumJsGXc.pdf
  - uid: 7ad4fe5534d9ae33ab2d934be7b245d5
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 29c225cad551df7baaebae9d3e212e56
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 1841b4b97d8af2ad9d52200c61b75f95
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 2__KumJsGXc
  - uid: 831653553ce9a4c54e5a7af109f293dc
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/2__KumJsGXc/default.jpg'
  - uid: 28a16be4fd60f7499dd3587fe52556eb
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: a61eac86e6a34a82e84d5842b751741f
    parent_uid: 34ab63b82a9d3db412f7efbf3523f7f2
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_08_exercise_02_300k.mp4
type: courses
layout: video
---
