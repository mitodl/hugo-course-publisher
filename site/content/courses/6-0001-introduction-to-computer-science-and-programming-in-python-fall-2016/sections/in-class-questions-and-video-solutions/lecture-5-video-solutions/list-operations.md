---
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class exercise demonstrates more
  simple list operations in Python, including indexing, extending, sorting, and
  deleting.</p> <p><strong>Instructor:</strong> Dr. Ana Bell</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: SrkqbLOQcEo
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 010ce9533878ed692f7455b546f5fb08
  - id: SrkqbLOQcEo.srt
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5-video-solutions/list-operations/SrkqbLOQcEo.srt
    title: 3play caption file
    type: null
    uid: a643c362e0d6f2c6292733b3933b6213
  - id: SrkqbLOQcEo.pdf
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5-video-solutions/list-operations/SrkqbLOQcEo.pdf
    title: 3play pdf file
    type: null
    uid: fa4700cda2b934b3f58b0cd212a97e7f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7ef741e08ab8156990fd1cccef563614
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e9e3aed81457fca8fe842248e5b29a25
  - id: Video-YouTube-Stream
    media_location: SrkqbLOQcEo
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Video-YouTube-Stream
    type: Video
    uid: c7cafe96d82090c37ec10ee61c375b09
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/SrkqbLOQcEo/default.jpg'
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bc658af18885f22435e2ed68cb39d396
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Video-iTunes U-MP4
    type: Video
    uid: 609d3fa6c5e2208d4457cf9a9928db45
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_05_exercise_03_300k.mp4
    parent_uid: ec9758c22da965c3657e4c75de77a9d6
    title: Video-Internet Archive-MP4
    type: Video
    uid: 208c5ce89e5368492d8470e383bcaf53
inline_embed_id: 25437844listoperations60196519
parent_uid: a57c778604ec07438250f01957eb34b1
related_resources_text: ''
short_url: list-operations
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-5-video-solutions/list-operations
title: List Operations
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
  m='16870'>OpenCourseWare</span> <span m='17860'>at</span> <span
  m='17990'>ocw.mit.edu.</span> </p><p><span m='24090'>ANA BELL:</span> <span
  m='24340'>Let's</span> <span m='24590'>walk</span> <span
  m='24800'>through</span> <span m='24950'>it.</span> <span m='29560'>We</span>
  <span m='29710'>have</span> <span m='30130'>three</span> <span
  m='30370'>lists.</span> <span m='30780'>L1</span> <span m='31070'>is</span>
  <span m='31360'>equal</span> <span m='31600'>to</span> <span
  m='31810'>[re].</span> <span m='33220'>L2</span> <span m='33670'>is</span>
  <span m='33850'>equal</span> <span m='34120'>to</span> <span
  m='34330'>[mi].</span> <span m='36630'>L3</span> <span m='37050'>is</span>
  <span m='37200'>equal</span> <span m='37440'>to</span> <span
  m='37740'>[do].</span> <span m='40570'>L4</span> <span m='41890'>is</span>
  <span m='42010'>equal</span> <span m='42340'>to--</span> <span
  m='42880'>let's</span> <span m='43060'>just</span> <span m='43240'>do</span>
  <span m='43390'>what</span> <span m='43990'>it</span> <span
  m='44050'>says</span> <span m='44320'>here--</span> <span m='44620'>L1</span>
  <span m='44920'>plus</span> <span m='45290'>L2.</span> <span
  m='46120'>So</span> <span m='46210'>it's</span> <span m='46300'>going</span>
  <span m='46480'>to</span> <span m='46570'>be</span> <span m='46660'>the</span>
  <span m='46780'>list</span> <span m='47080'>[re, mi]--</span> <span
  m='48525'>uh,</span> <span m='48930'>yeah,</span> <span m='49924'>mi.</span>
  </p><p><span m='53410'>Now,</span> <span m='53890'>extend()</span> <span
  m='54550'>is</span> <span m='54700'>going</span> <span m='54910'>to</span>
  <span m='54970'>mutate</span> <span m='56080'>the</span> <span
  m='56170'>list.</span> <span m='57250'>So</span> <span m='57370'>that</span>
  <span m='57490'>means</span> <span m='57730'>L3</span> <span
  m='59020'>is</span> <span m='59200'>going</span> <span m='59470'>to</span>
  <span m='59560'>be</span> <span m='59950'>extended</span> <span
  m='60490'>by</span> <span m='60760'>whatever</span> <span m='61150'>L4</span>
  <span m='61660'>is.</span> <span m='63040'>So</span> <span m='63220'>L3</span>
  <span m='63760'>is</span> <span m='63880'>going</span> <span
  m='64090'>to</span> <span m='64180'>be--</span> <span m='64540'>OK,</span>
  <span m='64780'>what</span> <span m='64930'>did</span> <span
  m='65050'>it</span> <span m='65140'>have</span> <span
  m='65379'>originally?</span> <span m='65704'>It</span> <span
  m='66030'>had</span> <span m='67030'>do.</span> <span m='68670'>And</span>
  <span m='68820'>then,</span> <span m='68940'>it's</span> <span
  m='69030'>going</span> <span m='69180'>to</span> <span m='69240'>be</span>
  <span m='69300'>extended</span> <span m='69750'>by</span> <span
  m='70050'>all</span> <span m='70260'>of</span> <span m='70350'>the</span>
  <span m='70470'>elements</span> <span m='70920'>inside</span> <span
  m='71420'>L4,</span> <span m='72310'>which</span> <span m='72550'>is</span>
  <span m='72790'>re,</span> <span m='73670'>mi,</span> <span
  m='74680'>like</span> <span m='74850'>that.</span> <span m='76050'>And</span>
  <span m='76140'>once</span> <span m='76350'>I've</span> <span
  m='76500'>mutated</span> <span m='77040'>it,</span> <span m='79020'>the</span>
  <span m='79110'>old</span> <span m='79290'>version</span> <span
  m='79590'>of</span> <span m='79710'>L3</span> <span m='80030'>is</span> <span
  m='80160'>gone,</span> <span m='80790'>right?</span> <span
  m='81210'>This</span> <span m='81900'>is</span> <span m='82020'>the</span>
  <span m='82110'>L3</span> <span m='82650'>down</span> <span
  m='82890'>here</span> <span m='83100'>that</span> <span m='83220'>I'm</span>
  <span m='83310'>going</span> <span m='83430'>to</span> <span
  m='83490'>work</span> <span m='83730'>with.</span> </p><p><span
  m='85350'>L3.sort()</span> <span m='86460'>is</span> <span
  m='86610'>going</span> <span m='86790'>to</span> <span m='86850'>sort</span>
  <span m='87120'>alphabetically.</span> <span m='88380'>So</span> <span
  m='88530'>that's</span> <span m='89530'>[do, mi, re].</span> <span
  m='94090'>Yep.</span> <span m='95640'>And</span> <span m='96060'>sort()</span>
  <span m='96450'>also</span> <span m='96840'>mutates</span> <span
  m='97260'>the</span> <span m='97380'>list.</span> <span m='97740'>So</span>
  <span m='97980'>the</span> <span m='98130'>old</span> <span
  m='98280'>version</span> <span m='98580'>of</span> <span m='98670'>the</span>
  <span m='98760'>list</span> <span m='98970'>I</span> <span
  m='99030'>have</span> <span m='99180'>is</span> <span m='99300'>gone.</span>
  <span m='104420'>del</span> <span m='104870'>is</span> <span
  m='105080'>going</span> <span m='105380'>to</span> <span
  m='105560'>also</span> <span m='105890'>mutate</span> <span
  m='106250'>the</span> <span m='106340'>list.</span> <span m='107250'>So</span>
  <span m='107300'>it's</span> <span m='107390'>going</span> <span
  m='107600'>to</span> <span m='107810'>look</span> <span m='108080'>in</span>
  <span m='108250'>L3,</span> <span m='110030'>look</span> <span
  m='110300'>at</span> <span m='110420'>index</span> <span m='110810'>0,</span>
  <span m='112440'>and</span> <span m='112460'>it's</span> <span
  m='112550'>going</span> <span m='112760'>to</span> <span
  m='112820'>delete</span> <span m='113120'>that--</span> <span
  m='114500'>it's</span> <span m='114620'>going</span> <span
  m='114770'>to</span> <span m='114830'>delete</span> <span
  m='115130'>that</span> <span m='115850'>element.</span> <span
  m='117380'>So</span> <span m='117800'>it's</span> <span
  m='117920'>going</span> <span m='118100'>to</span> <span
  m='118160'>mutate</span> <span m='118550'>L3.</span> <span
  m='119240'>And</span> <span m='119360'>it's</span> <span
  m='119510'>going</span> <span m='119690'>to</span> <span m='119780'>be</span>
  <span m='119990'>[mi, re],</span> <span m='122640'>OK?</span> <span
  m='123140'>And</span> <span m='123260'>once</span> <span
  m='123470'>again,</span> <span m='123800'>I've</span> <span
  m='123950'>mutated</span> <span m='124370'>the</span> <span
  m='124460'>list.</span> <span m='124760'>So</span> <span m='125270'>the</span>
  <span m='125360'>old</span> <span m='125510'>version's</span> <span
  m='125870'>gone.</span> </p><p><span m='128000'>And</span> <span
  m='128150'>lastly--</span> <span m='129380'>this</span> <span
  m='129530'>is</span> <span m='129650'>a</span> <span m='129740'>tricky</span>
  <span m='130100'>part--</span> <span m='131120'>I'm</span> <span
  m='131270'>going</span> <span m='131510'>to</span> <span
  m='131690'>append,</span> <span m='132500'>to</span> <span
  m='133190'>my</span> <span m='133790'>current</span> <span
  m='134120'>L3,</span> <span m='135305'>which</span> <span
  m='135680'>looks</span> <span m='135860'>like</span> <span
  m='136040'>this,</span> <span m='137600'>another</span> <span
  m='138590'>list.</span> <span m='140350'>So</span> <span m='140540'>to</span>
  <span m='140660'>L3,</span> <span m='141140'>I'm</span> <span
  m='141320'>appending</span> <span m='141680'>another</span> <span
  m='142070'>list.</span> <span m='144050'>So</span> <span
  m='145250'>this</span> <span m='145430'>is</span> <span
  m='145520'>going</span> <span m='145670'>to</span> <span m='145760'>be</span>
  <span m='145940'>the</span> <span m='146060'>list</span> <span m='146570'>[fa,
  la],</span> <span m='149261'>OK?</span> </p><p><span m='153240'>So</span>
  <span m='153430'>[mi, re],</span> <span m='154030'>and</span> <span
  m='154180'>then</span> <span m='154270'>the</span> <span
  m='154360'>list</span> <span m='154630'>[fa, la]</span> <span
  m='155200'>is</span> <span m='155410'>the</span> <span
  m='155620'>answer,</span> <span m='156380'>which</span> <span
  m='156670'>is</span> <span m='158840'>red--</span> <span m='160130'>no,</span>
  <span m='160790'>sorry,</span> <span m='161200'>blue.</span> <span
  m='162445'>Good,</span> <span m='163190'>you had</span> <span
  m='163370'>me</span> <span m='163490'>scared.</span> <span
  m='164160'>OK.</span> <span m='166120'>Perfect.</span> <span
  m='168430'>So</span> <span m='168520'>if</span> <span m='168580'>you</span>
  <span m='168670'>didn't</span> <span m='168880'>get</span> <span
  m='169060'>this,</span> <span m='169480'>I</span> <span
  m='169600'>would</span> <span m='169750'>suggest</span> <span
  m='170350'>you</span> <span m='170560'>go</span> <span
  m='170890'>through</span> <span m='171700'>the</span> <span
  m='171820'>Python</span> <span m='172300'>tutor</span> <span
  m='173140'>or</span> <span m='173260'>you</span> <span m='173380'>just</span>
  <span m='173530'>trace</span> <span m='173770'>it</span> <span
  m='173830'>out</span> <span m='173950'>by</span> <span m='174100'>hand,</span>
  <span m='174340'>just</span> <span m='174490'>like</span> <span
  m='174640'>I</span> <span m='174730'>just</span> <span m='174940'>did.</span>
  <span m='178130'>And</span> <span m='178230'>hopefully</span> <span
  m='178600'>it'll</span> <span m='178750'>be</span> <span
  m='179790'>apparent,</span> <span m='180970'>the</span> <span
  m='181390'>more</span> <span m='181850'>exercises</span> <span
  m='182410'>you</span> <span m='182500'>do</span> <span m='182650'>with</span>
  <span m='182830'>lists,</span> <span m='183370'>what</span> <span
  m='183550'>exactly</span> <span m='183940'>is</span> <span
  m='184060'>going</span> <span m='184390'>on.</span> <span
  m='184960'>OK.</span> </p>
uid: ec9758c22da965c3657e4c75de77a9d6
type: courses
layout: video
---
