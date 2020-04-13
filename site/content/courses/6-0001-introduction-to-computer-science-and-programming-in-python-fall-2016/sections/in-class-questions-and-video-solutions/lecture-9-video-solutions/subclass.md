---
title: Subclass
uid: 4873fb919730e84a6d45d0bfd84e8c3a
parent_uid: a105f0a220696d6d2ecbc3a529f3eeaa
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9-video-solutions/subclass
short_url: subclass
inline_embed_id: 35632708subclass19639471
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question demonstrates how
  subclasses are constructed in Python.</p> <p><strong>Instructor:</strong> Dr.
  Ana Bell</p>
related_resources_text: ''
transcript: >-
  <p><span m='790'>ANA BELL:</span> <span m='835'>The</span> <span
  m='880'>following</span> <span m='1300'>content</span> <span
  m='1870'>is</span> <span m='1990'>provided</span> <span m='2440'>under</span>
  <span m='2710'>a</span> <span m='2770'>Creative</span> <span
  m='3190'>Commons</span> <span m='3580'>license.</span> <span
  m='4730'>Your</span> <span m='4870'>support</span> <span m='5380'>will</span>
  <span m='5530'>help</span> <span m='5770'>MIT</span> <span
  m='6220'>OpenCourseWare</span> <span m='7030'>continue</span> <span
  m='7540'>to</span> <span m='7630'>offer</span> <span
  m='8050'>high-quality</span> <span m='8770'>educational</span> <span
  m='9400'>resources</span> <span m='10030'>for</span> <span
  m='10210'>free.</span> <span m='11390'>To</span> <span m='11410'>make</span>
  <span m='11620'>a</span> <span m='11650'>donation</span> <span
  m='12370'>or</span> <span m='12610'>view</span> <span
  m='13060'>additional</span> <span m='13480'>materials</span> <span
  m='13990'>from</span> <span m='14200'>hundreds</span> <span
  m='14590'>of</span> <span m='14710'>MIT</span> <span m='15130'>courses,</span>
  <span m='16219'>visit</span> <span m='16450'>MIT</span> <span
  m='16870'>OpenCourseWare</span> <span m='17860'>at</span> <span
  m='17990'>ocw.mit.edu.</span> </p><p><span m='23760'>ANA BELL:</span> <span
  m='23910'>So</span> <span m='24360'>I</span> <span m='24510'>have</span> <span
  m='24720'>here--</span> <span m='26430'>first</span> <span
  m='26640'>part</span> <span m='26880'>is</span> <span m='27000'>just</span>
  <span m='27210'>the</span> <span m='27300'>top</span> <span
  m='27540'>part,</span> <span m='27930'>so</span> <span m='28110'>I</span>
  <span m='28170'>have</span> <span m='28340'>some</span> <span
  m='28830'>blank</span> <span m='29130'>line</span> <span m='29610'>and</span>
  <span m='29700'>then I'm</span> <span m='29910'>defining</span> <span
  m='31710'>a</span> <span m='31770'>method</span> <span m='32159'>name</span>
  <span m='32350'>speak.</span> <span m='34030'>So</span> <span m='34180'>write
  a</span> <span m='34390'>line</span> <span m='34630'>to</span> <span
  m='34750'>replace</span> <span m='35140'>blank</span> <span
  m='35500'>that</span> <span m='35650'>creates</span> <span m='35980'>a</span>
  <span m='36010'>class</span> <span m='36370'>for</span> <span
  m='36500'>a</span> <span m='36520'>Dog</span> <span m='37150'>that</span>
  <span m='37300'>inherits</span> <span m='37690'>from</span> <span
  m='37930'>Animal.</span> <span m='40030'>So</span> <span m='40240'>the</span>
  <span m='40330'>first</span> <span m='40600'>thing</span> <span
  m='40780'>I</span> <span m='40870'>notice</span> <span m='41260'>is</span>
  <span m='41410'>that</span> <span m='41650'>I</span> <span
  m='41740'>need</span> <span m='41920'>to</span> <span m='42190'>write</span>
  <span m='42960'>a</span> <span m='43090'>definition</span> <span
  m='43600'>for</span> <span m='43750'>a</span> <span m='43810'>class</span>
  <span m='44650'>whose</span> <span m='44860'>name</span> <span
  m='45040'>is</span> <span m='45190'>Dog.</span> </p><p><span
  m='48360'>So</span> <span m='48480'>my</span> <span m='48580'>choices</span>
  <span m='48970'>are</span> <span m='49060'>these.</span> <span
  m='51010'>So</span> <span m='51490'>I</span> <span m='52480'>can</span> <span
  m='52630'>tell</span> <span m='52810'>it's</span> <span
  m='52930'>either</span> <span m='53170'>the</span> <span
  m='53260'>first</span> <span m='53560'>or</span> <span m='53680'>the</span>
  <span m='53720'>third</span> <span m='54010'>one.</span> <span
  m='54790'>And</span> <span m='54940'>then</span> <span m='55090'>I</span>
  <span m='55150'>want</span> <span m='55300'>to</span> <span
  m='55360'>inherit</span> <span m='55750'>from</span> <span
  m='55930'>Animal,</span> <span m='56950'>so</span> <span m='58120'>I</span>
  <span m='58180'>don't</span> <span m='58390'>want</span> <span
  m='58570'>to</span> <span m='58630'>inherit</span> <span m='58930'>from</span>
  <span m='59110'>object</span> <span m='59530'>but</span> <span
  m='59650'>I</span> <span m='59710'>want</span> <span m='59830'>to</span> <span
  m='59890'>inherit</span> <span m='60190'>from</span> <span
  m='60370'>Animal,</span> <span m='60990'>right?</span> <span
  m='61420'>So</span> <span m='61540'>that's</span> <span
  m='62050'>perfect.</span> </p><p><span m='64599'>Next</span> <span
  m='64870'>question</span> <span m='65319'>says,</span> <span
  m='65710'>with</span> <span m='65860'>this</span> <span
  m='66010'>definition</span> <span m='66520'>of</span> <span
  m='66610'>Dog,</span> <span m='66970'>you</span> <span m='67120'>run</span>
  <span m='67570'>a</span> <span m='67690'>program</span> <span
  m='68110'>with</span> <span m='68350'>those</span> <span
  m='68590'>three</span> <span m='68770'>lines.</span> <span
  m='69460'>What</span> <span m='69610'>happens?</span> <span
  m='71900'>So</span> <span m='72170'>this</span> <span m='72350'>is</span>
  <span m='72440'>my</span> <span m='72590'>definition</span> <span
  m='73160'>and</span> <span m='73280'>I</span> <span m='73370'>have</span>
  <span m='73550'>these</span> <span m='73700'>three</span> <span
  m='73950'>lines.</span> <span m='75630'>Let's</span> <span m='75800'>go
  down</span> <span m='76140'>here.</span> <span m='77900'>Nice.</span> <span
  m='78600'>OK.</span> </p><p><span m='82010'>So</span> <span
  m='82160'>with</span> <span m='82280'>these</span> <span
  m='82460'>three</span> <span m='82640'>lines,</span> <span
  m='83525'>this</span> <span m='83990'>first</span> <span m='84230'>line</span>
  <span m='84440'>says,</span> <span m='84830'>d</span> <span
  m='85000'>is</span> <span m='85130'>equal</span> <span m='85340'>to</span>
  <span m='85430'>Dog</span> <span m='85700'>7.</span> <span m='86180'>So</span>
  <span m='86420'>I'm</span> <span m='86630'>creating</span> <span
  m='87080'>a</span> <span m='87140'>Dog</span> <span m='87500'>object</span>
  <span m='88910'>with</span> <span m='89090'>age</span> <span
  m='89380'>7.</span> <span m='91980'>Is</span> <span m='92190'>this</span>
  <span m='92460'>line</span> <span m='92780'>going</span> <span
  m='93030'>to</span> <span m='93120'>throw</span> <span m='93300'>an</span>
  <span m='93450'>error?</span> <span m='94470'>Well,</span> <span
  m='94770'>this</span> <span m='94980'>line</span> <span
  m='95190'>actually</span> <span m='95430'>looks</span> <span
  m='95640'>for</span> <span m='95760'>an</span> <span m='95850'>init</span>
  <span m='96090'>method.</span> </p><p><span m='97950'>This</span> <span
  m='98130'>particular</span> <span m='98760'>class</span> <span
  m='99210'>definition</span> <span m='99780'>doesn't</span> <span
  m='100170'>have</span> <span m='100570'>a</span> <span m='100865'>init</span>
  <span m='101160'>method,</span> <span m='101990'>but</span> <span
  m='103000'>hey,</span> <span m='103200'>I'm</span> <span
  m='103350'>inheriting</span> <span m='103890'>from</span> <span
  m='104070'>someone.</span> <span m='104930'>I'm</span> <span
  m='105030'>inheriting</span> <span m='105450'>from</span> <span
  m='105630'>Animal.</span> <span m='106530'>Does</span> <span
  m='106710'>Animal</span> <span m='107100'>have</span> <span
  m='107280'>an</span> <span m='107400'>init</span> <span
  m='107580'>method?</span> <span m='108570'>And</span> <span
  m='108720'>it</span> <span m='108780'>does,</span> <span m='110040'>as</span>
  <span m='110220'>we</span> <span m='110310'>saw</span> <span
  m='110440'>in</span> <span m='110550'>the</span> <span
  m='110640'>slides.</span> <span m='114120'>OK,</span> <span
  m='114540'>so</span> <span m='114750'>we're</span> <span
  m='114870'>creating</span> <span m='115260'>a</span> <span
  m='115320'>new</span> <span m='115440'>Dog</span> <span m='115770'>with</span>
  <span m='116520'>age</span> <span m='116760'>7</span> <span
  m='117270'>and</span> <span m='117600'>name</span> <span
  m='117840'>none.</span> <span m='119940'>So</span> <span
  m='120090'>that</span> <span m='120300'>line</span> <span
  m='120510'>doesn't</span> <span m='120750'>throw</span> <span
  m='120960'>an</span> <span m='121050'>error.</span> </p><p><span
  m='121390'>The</span> <span m='121410'>next</span> <span
  m='121640'>line</span> <span m='121890'>sets</span> <span
  m='122160'>the</span> <span m='122250'>name</span> <span m='122430'>to</span>
  <span m='122550'>Ruffles.</span> <span m='123720'>And</span> <span
  m='123900'>again,</span> <span m='124290'>I</span> <span
  m='124380'>don't</span> <span m='124650'>have</span> <span m='124860'>a</span>
  <span m='124930'>set name</span> <span m='125340'>method</span> <span
  m='125670'>inside</span> <span m='126030'>this</span> <span
  m='126270'>particular</span> <span m='127740'>class,</span> <span
  m='128190'>but</span> <span m='128400'>does</span> <span m='128669'>my</span>
  <span m='128820'>Animal</span> <span m='129180'>class--</span> <span
  m='130160'>my</span> <span m='130289'>parent</span> <span
  m='130590'>class--</span> <span m='130919'>have</span> <span
  m='131070'>a</span> <span m='131130'>set</span> <span m='131340'>name</span>
  <span m='131540'>method?</span> <span m='131880'>And</span> <span
  m='132030'>yes</span> <span m='132240'>it</span> <span
  m='132330'>does--</span> <span m='133310'>right</span> <span
  m='133500'>here.</span> <span m='134430'>So</span> <span m='134580'>I</span>
  <span m='134670'>call</span> <span m='134940'>that</span> <span
  m='135150'>one.</span> <span m='136710'>So</span> <span m='136890'>that</span>
  <span m='137070'>line</span> <span m='137280'>does</span> <span
  m='137430'>not</span> <span m='137670'>throw</span> <span m='137880'>an</span>
  <span m='137970'>error.</span> </p><p><span m='138690'>And</span> <span
  m='138810'>the</span> <span m='138900'>third</span> <span
  m='139110'>line</span> <span m='139380'>says</span> <span
  m='139620'>d.speak,</span> <span m='141290'>which</span> <span
  m='142020'>is</span> <span m='142110'>going</span> <span m='142260'>to</span>
  <span m='142320'>cause</span> <span m='142530'>Python</span> <span
  m='142890'>to</span> <span m='143010'>look</span> <span m='143280'>in</span>
  <span m='143850'>this</span> <span m='144000'>current</span> <span
  m='144210'>class</span> <span m='144450'>definition.</span> <span
  m='145020'>And</span> <span m='145110'>it</span> <span m='145200'>says,</span>
  <span m='145540'>hey,</span> <span m='145720'>I</span> <span
  m='145820'>have</span> <span m='145920'>a</span> <span
  m='146100'>method</span> <span m='146490'>here</span> <span
  m='146830'>named</span> <span m='146990'>speak,</span> <span
  m='147420'>so</span> <span m='147540'>I'm</span> <span m='147600'>going</span>
  <span m='147750'>to</span> <span m='147810'>use</span> <span
  m='148020'>this</span> <span m='148230'>one.</span> <span
  m='149340'>And</span> <span m='149520'>it's</span> <span
  m='149610'>going</span> <span m='149790'>to</span> <span
  m='149880'>print</span> <span m='150120'>ruff</span> <span
  m='150390'>ruff,</span> <span m='150720'>because</span> <span
  m='151200'>it's</span> <span m='151350'>a</span> <span
  m='151410'>method,</span> <span m='151800'>so</span> <span
  m='156210'>you</span> <span m='156360'>can</span> <span
  m='157080'>just--</span> <span m='158070'>it's</span> <span
  m='158220'>like</span> <span m='158400'>a</span> <span
  m='158460'>function.</span> <span m='158880'>You</span> <span
  m='159000'>can</span> <span m='159120'>just</span> <span
  m='159270'>print</span> <span m='159510'>things.</span> <span
  m='159780'>You</span> <span m='159870'>don't</span> <span
  m='159990'>need</span> <span m='160110'>to</span> <span
  m='160230'>return</span> <span m='160530'>anything.</span> <span
  m='161920'>So,</span> <span m='162750'>perfect,</span> <span
  m='163140'>most</span> <span m='163320'>of</span> <span m='163440'>you</span>
  <span m='163500'>are</span> <span m='163590'>getting</span> <span
  m='163830'>that</span> <span m='163950'>right.</span> </p>
embedded_media:
  - uid: 7a262003debe2d65ef2fe4753d52fb80
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 8s0d87sjy1A
  - uid: 7e19ebcb29817e0e6048cd7e42949aa8
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: 8s0d87sjy1A.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9-video-solutions/subclass/8s0d87sjy1A.srt
  - uid: 6cb860523df7e08392ab4556b4ef651a
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: 8s0d87sjy1A.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-9-video-solutions/subclass/8s0d87sjy1A.pdf
  - uid: a530848d32f70ef948a7355bd7175090
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dcb5a6dc168c3e8357111a2b1601894d
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 1b1e748051a6d7368f3b16c627260218
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 8s0d87sjy1A
  - uid: 51c266fee5677b8d53fdaa0b54fee0f9
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/8s0d87sjy1A/default.jpg'
  - uid: c23f5cab7d918bec6635689347fce426
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: ebcb2bbacabe879333770a2c0a482c56
    parent_uid: 4873fb919730e84a6d45d0bfd84e8c3a
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_09_exercise_02_300k.mp4
type: courses
layout: video
---
