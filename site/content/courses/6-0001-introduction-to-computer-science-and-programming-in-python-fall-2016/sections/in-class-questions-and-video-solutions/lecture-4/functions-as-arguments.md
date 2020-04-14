---
title: Functions as Arguments
uid: 116b77d972856a45a5404ffe27132bd5
parent_uid: 828237fdefb50c6943b83bf16ff40267
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-4/functions-as-arguments
short_url: functions-as-arguments
inline_embed_id: 76919519functionsasarguments47303806
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question demonstrates how
  functions can be used as arguments in other functions in Python.</p>
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
  m='16870'>OpenCourseWare</span> <span m='17880'>at</span> <span
  m='18000'>ocw.mit.edu.</span> </p><p><span m='23330'>ANA BELL:</span> <span
  m='23420'>So</span> <span m='24310'>here's</span> <span m='24710'>some</span>
  <span m='24950'>code.</span> <span m='26590'>I'm</span> <span
  m='26840'>defining</span> <span m='27230'>a</span> <span
  m='28280'>function</span> <span m='28640'>named</span> <span
  m='28910'>sq,</span> <span m='30800'>and</span> <span m='31010'>it</span>
  <span m='31070'>takes</span> <span m='31340'>in</span> <span
  m='31430'>two</span> <span m='31610'>parameters.</span> <span
  m='33410'>I'm</span> <span m='33560'>defining</span> <span m='33980'>a</span>
  <span m='34070'>function</span> <span m='34460'>named</span> <span
  m='34700'>f,</span> <span m='35570'>takes</span> <span m='35810'>in</span>
  <span m='35930'>one</span> <span m='36140'>parameter,</span> <span
  m='37580'>and</span> <span m='37760'>then</span> <span m='38150'>I'm</span>
  <span m='38270'>doing</span> <span m='38570'>these</span> <span
  m='38780'>two</span> <span m='38990'>lines.</span> <span m='40460'>The</span>
  <span m='40550'>first</span> <span m='40820'>one</span> <span
  m='41000'>is</span> <span m='41120'>just</span> <span m='41300'>calling</span>
  <span m='41720'>function</span> <span m='42150'>sq,</span> <span
  m='43640'>and</span> <span m='43850'>the</span> <span m='43940'>next</span>
  <span m='44150'>one</span> <span m='44300'>is</span> <span
  m='44390'>just</span> <span m='44630'>printing</span> <span
  m='45140'>the</span> <span m='45260'>value.</span> </p><p><span
  m='48710'>So</span> <span m='48760'>let's</span> <span m='49000'>first</span>
  <span m='49270'>see</span> <span m='51230'>what--</span> <span
  m='52400'>nice.</span> <span m='53080'>OK.</span> <span m='55850'>Let's</span>
  <span m='56090'>work</span> <span m='56270'>through</span> <span
  m='56570'>it.</span> <span m='61491'>So</span> <span m='65489'>The</span>
  <span m='65590'>first</span> <span m='65750'>things</span> <span
  m='65990'>we</span> <span m='66110'>see</span> <span m='66290'>here</span>
  <span m='66620'>is</span> <span m='66830'>two</span> <span
  m='67010'>function</span> <span m='67400'>definitions,</span> <span
  m='68390'>right?</span> <span m='68630'>So</span> <span m='68780'>we</span>
  <span m='68840'>don't</span> <span m='69020'>currently</span> <span
  m='69380'>care</span> <span m='69800'>about</span> <span
  m='70010'>what's</span> <span m='70220'>inside</span> <span
  m='70580'>them</span> <span m='70760'>right</span> <span m='70910'>now</span>
  <span m='71660'>because</span> <span m='71960'>we</span> <span
  m='72080'>haven't</span> <span m='72350'>made</span> <span m='72500'>a</span>
  <span m='72560'>function</span> <span m='72920'>call</span> <span
  m='73100'>yet.</span> </p><p><span m='74100'>So</span> <span
  m='74150'>the</span> <span m='74240'>first</span> <span m='74480'>thing</span>
  <span m='74660'>we</span> <span m='74810'>do</span> <span m='75140'>is</span>
  <span m='75380'>we</span> <span m='75530'>have</span> <span
  m='76370'>the</span> <span m='76460'>function</span> <span
  m='76880'>call</span> <span m='78350'>calc</span> <span m='78740'>equal</span>
  <span m='79240'>sq</span> <span m='79860'>f</span> <span m='80320'>and</span>
  <span m='80450'>2.</span> <span m='81250'>OK?</span> <span m='82070'>So</span>
  <span m='82280'>inside</span> <span m='82760'>sq,</span> <span
  m='85160'>we're</span> <span m='85640'>going</span> <span m='85760'>to</span>
  <span m='85850'>have</span> <span m='86690'>func</span> <span
  m='88840'>and</span> <span m='89200'>x.</span> <span m='92640'>And</span>
  <span m='92860'>func</span> <span m='93340'>is</span> <span
  m='93520'>going</span> <span m='93820'>to</span> <span m='94510'>get</span>
  <span m='94660'>mapped</span> <span m='94955'>to</span> <span
  m='95250'>f,</span> <span m='95700'>and</span> <span m='95920'>x</span> <span
  m='96220'>is</span> <span m='96340'>going</span> <span m='96580'>to</span>
  <span m='96670'>get</span> <span m='96850'>mapped</span> <span
  m='97390'>to</span> <span m='97826'>2,</span> <span m='98920'>right?</span>
  <span m='99670'>So</span> <span m='99730'>we're</span> <span
  m='99820'>taking</span> <span m='100630'>the</span> <span
  m='100720'>variables</span> <span m='101140'>in</span> <span
  m='101260'>order</span> <span m='101530'>and</span> <span
  m='101620'>mapping</span> <span m='101980'>them</span> <span
  m='102130'>to</span> <span m='102220'>those.</span> <span m='103210'>Func
  is</span> <span m='103600'>f,</span> <span m='103960'>and x</span> <span
  m='104140'>is</span> <span m='104500'>2.</span> </p><p><span
  m='106560'>First</span> <span m='106860'>thing</span> <span
  m='107040'>the</span> <span m='107130'>function</span> <span
  m='107520'>does,</span> <span m='107950'>sq,</span> <span m='108690'>is</span>
  <span m='108930'>create</span> <span m='109170'>this</span> <span
  m='109320'>variable</span> <span m='109830'>y</span> <span
  m='110460'>is</span> <span m='110610'>equal</span> <span m='110820'>to</span>
  <span m='110940'>x</span> <span m='111120'>squared.</span> <span
  m='112690'>So</span> <span m='112740'>we're</span> <span
  m='112800'>going</span> <span m='112920'>to</span> <span
  m='113010'>have</span> <span m='113250'>y</span> <span m='113610'>is</span>
  <span m='113820'>equal</span> <span m='114150'>to</span> <span
  m='115860'>4.</span> <span m='119490'>And</span> <span m='119610'>then</span>
  <span m='119760'>we're</span> <span m='119850'>going</span> <span
  m='119970'>to</span> <span m='120060'>return</span> <span
  m='120770'>func</span> <span m='121260'>y.</span> <span m='122970'>So</span>
  <span m='124350'>func</span> <span m='125070'>of</span> <span
  m='125280'>y,</span> <span m='126450'>this</span> <span m='126720'>is</span>
  <span m='126840'>going</span> <span m='127080'>to</span> <span
  m='127170'>be--</span> <span m='127860'>we're</span> <span
  m='127980'>just</span> <span m='128160'>replacing</span> <span
  m='129030'>the</span> <span m='129120'>parameters</span> <span
  m='129900'>f</span> <span m='130350'>of</span> <span m='130870'>4,</span>
  <span m='132590'>right?</span> </p><p><span m='134980'>So</span> <span
  m='135130'>now</span> <span m='135310'>this</span> <span m='135460'>is</span>
  <span m='135580'>another</span> <span m='135880'>function</span> <span
  m='136300'>call.</span> <span m='138840'>We</span> <span
  m='138970'>know</span> <span m='139090'>what</span> <span m='139260'>f
  is.</span> <span m='140710'>This</span> <span m='140890'>program</span> <span
  m='141220'>knows</span> <span m='141430'>what f</span> <span
  m='141690'>is.</span> <span m='142516'>f is</span> <span
  m='142930'>going</span> <span m='143140'>to</span> <span m='143230'>be</span>
  <span m='143950'>this</span> <span m='144100'>part</span> <span
  m='144310'>right</span> <span m='144460'>here,</span> <span
  m='145390'>which</span> <span m='145600'>returns</span> <span
  m='146740'>x</span> <span m='147250'>squared.</span> <span
  m='149300'>OK?</span> <span m='150250'>So</span> <span m='151180'>in</span>
  <span m='151360'>f,</span> <span m='156210'>x</span> <span
  m='156630'>gets</span> <span m='156900'>mapped</span> <span
  m='157260'>to</span> <span m='157500'>whatever</span> <span
  m='157860'>variable</span> <span m='158310'>we</span> <span
  m='158490'>put</span> <span m='158700'>in,</span> <span
  m='159315'>which</span> <span m='159670'>in</span> <span
  m='159890'>this</span> <span m='160010'>case</span> <span m='160180'>is</span>
  <span m='160410'>4.</span> <span m='165450'>And</span> <span
  m='165810'>we're</span> <span m='165930'>going</span> <span
  m='166050'>to</span> <span m='166140'>return</span> <span m='167910'>to</span>
  <span m='168060'>whoever</span> <span m='168390'>called</span> <span
  m='168750'>us,</span> <span m='168990'>which</span> <span m='169140'>is</span>
  <span m='169230'>over</span> <span m='169440'>here,</span> <span
  m='170070'>4</span> <span m='170320'>squared,</span> <span
  m='171670'>which</span> <span m='171720'>is</span> <span m='171780'>16.</span>
  <span m='174520'>OK?</span> </p><p><span m='175330'>So</span> <span
  m='175510'>f</span> <span m='175710'>of</span> <span m='175800'>4</span> <span
  m='176200'>gets</span> <span m='176440'>replaced</span> <span
  m='177010'>with</span> <span m='177160'>16.</span> <span m='182260'>And</span>
  <span m='184120'>f</span> <span m='184330'>of</span> <span m='184450'>4</span>
  <span m='184960'>was</span> <span m='185230'>up</span> <span
  m='185390'>here,</span> <span m='186610'>right?</span> <span
  m='186870'>We're</span> <span m='187000'>just</span> <span
  m='187270'>popping</span> <span m='187660'>out</span> <span
  m='187810'>of</span> <span m='187930'>scopes</span> <span
  m='188290'>now.</span> <span m='189040'>So</span> <span m='189220'>f</span>
  <span m='189440'>of</span> <span m='189520'>4</span> <span
  m='189790'>was</span> <span m='189970'>up</span> <span m='190120'>here.</span>
  <span m='191090'>So</span> <span m='191150'>then</span> <span
  m='192145'>that</span> <span m='192580'>line</span> <span
  m='192850'>there,</span> <span m='193090'>return</span> <span
  m='193540'>func</span> <span m='193900'>y,</span> <span m='194920'>is</span>
  <span m='195040'>going</span> <span m='195280'>to</span> <span
  m='195340'>return</span> <span m='195790'>16.</span> <span
  m='197710'>And</span> <span m='198040'>whoever</span> <span
  m='198370'>called</span> <span m='198730'>us</span> <span
  m='198910'>was</span> <span m='199090'>down</span> <span
  m='199390'>here,</span> <span m='200100'>calc</span> <span
  m='200470'>is</span> <span m='200650'>equal</span> <span m='200920'>to</span>
  <span m='201290'>16.</span> <span m='201910'>And</span> <span
  m='202030'>then</span> <span m='202120'>we're</span> <span
  m='202210'>just</span> <span m='202390'>printing</span> <span
  m='202700'>calc.</span> <span m='207000'>So</span> <span m='207160'>16</span>
  <span m='207550'>was</span> <span m='207730'>right.</span> <span
  m='209990'>Yay.</span> </p>
embedded_media:
  - uid: 7cb403568f979e11aab12eb46c340876
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: QaOHeMnpnmU
  - uid: 424af00ccc660535fc3c5422ee28cff4
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: QaOHeMnpnmU.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-4/functions-as-arguments/QaOHeMnpnmU.srt
  - uid: 4857d741e66fd5ec411662b431b5f3fd
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: QaOHeMnpnmU.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-4/functions-as-arguments/QaOHeMnpnmU.pdf
  - uid: 1c82194163286f63c64c49aa771a52f5
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 6f00111051cd5ad5931ec2b44d9b274e
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 0afd1e33a67eab81cb23ed79ad9be494
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: QaOHeMnpnmU
  - uid: f4f5359b491a217f1ace25e96e5f8427
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/QaOHeMnpnmU/default.jpg'
  - uid: 419f93bc16b7a679523bef83100da9fa
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: ca122e722bfeff9e093bb067a32c1233
    parent_uid: 116b77d972856a45a5404ffe27132bd5
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_04_exercise_02_300k.mp4
type: courses
layout: video
---
