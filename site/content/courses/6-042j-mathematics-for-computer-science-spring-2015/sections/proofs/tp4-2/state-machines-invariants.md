---
about_this_resource_text: ''
embedded_media:
  - id: background-image-ocw-jpg
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Background Image-OCW-JPG
    type: Background Image
    uid: cbc43e08ade5c1213452b5e8e5af1995
  - id: Video-iTunes U-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Video-iTunes U-MP4
    type: Video
    uid: fb3c9b544628d90338c0eb93a9eae347
  - id: Video-Internet Archive-MP4
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_statemachines_ipod.mp4
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Video-Internet Archive-MP4
    type: Video
    uid: b1c5374fde8c54972057ffeb833922c5
  - id: Video-YouTube-Stream
    media_location: VuG2JNcRXYg
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Video-YouTube-Stream
    type: Video
    uid: b2028491b4cd74b976f79678e3a502ed
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/VuG2JNcRXYg/default.jpg'
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 37877177d71561fd3a33a61b7eb4b9f8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: VuG2JNcRXYg
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f771345e59f87e350edee0fbbaffa07b
  - id: VuG2JNcRXYg.srt
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/state-machines-invariants/VuG2JNcRXYg.srt
    title: 3play caption file
    type: null
    uid: 3871c6ba0950e708ad8a46cb43c81aed
  - id: VuG2JNcRXYg.pdf
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/state-machines-invariants/VuG2JNcRXYg.pdf
    title: 3play pdf file
    type: null
    uid: 46a368e2323f181f77c1bbbba6fd4639
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 72f744a8427448c3504fa83333307802
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 893cbbfeccf5130ecd64f525d69cd901
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 29d9315d7b050f8b9eaec09896133261
inline_embed_id: 91053964statemachinesinvariants54481980
order_index: 529
parent_uid: 470546ac81246c938505a0f7571765aa
related_resources_text: ''
short_url: state-machines-invariants
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-2/state-machines-invariants
title: State Machines Invariants
transcript: >-
  <p><span m='730'>PROFESSOR: So</span> <span m='860'>we're</span> <span
  m='950'>going</span> <span m='1070'>to</span> <span m='1120'>talk</span> <span
  m='1320'>about</span> <span m='1540'>state</span> <span
  m='1840'>machines,</span> <span m='2610'>which</span> <span m='2890'>is</span>
  <span m='3010'>a</span> <span m='3090'>topic</span> <span m='3560'>that
  you're</span> <span m='3820'>going</span> <span m='3960'>to</span> <span
  m='4030'>see</span> <span m='4890'>in</span> <span m='5310'>many</span> <span
  m='5890'>further</span> <span m='6270'>courses,</span> <span
  m='6780'>because</span> <span m='7200'>state</span> <span
  m='7570'>machines</span> <span m='8140'>model</span> <span
  m='8580'>step</span> <span m='8910'>by</span> <span m='9020'>step</span> <span
  m='9340'>processes.</span> <span m='11530'>And</span> <span
  m='12230'>of</span> <span m='12310'>course,</span> <span m='12500'>if</span>
  <span m='12590'>you</span> <span m='12740'>think</span> <span m='12920'>about
  a</span> <span m='13200'>computation,</span> <span m='14220'>normally</span>
  <span m='14540'>the way you</span> <span m='14860'>think</span> <span
  m='15060'>about</span> <span m='15320'>it</span> <span m='15410'>is</span>
  <span m='15640'>that</span> <span m='15770'>it's</span> <span
  m='16000'>doing</span> <span m='16490'>instructions,</span> <span
  m='17500'>step</span> <span m='17930'>by</span> <span m='18050'>step,</span>
  <span m='18420'>one</span> <span m='18590'>after</span> <span
  m='18840'>another,</span> <span m='19110'>until</span> <span
  m='19340'>it</span> <span m='19430'>finally</span> <span
  m='19700'>reaches</span> <span m='20040'>termination.</span> <span
  m='21660'>Likewise,</span> <span m='23320'>various</span> <span
  m='24200'>digital</span> <span m='24510'>circuits</span> <span
  m='25030'>move</span> <span m='25300'>through</span> <span
  m='25770'>stages</span> <span m='26340'>or</span> <span
  m='26440'>states</span> <span m='27460'>until</span> <span
  m='27870'>they</span> <span m='28180'>produce</span> <span m='28600'>a</span>
  <span m='28650'>final</span> <span m='29090'>answer.</span> <span
  m='30800'>So</span> <span m='30980'>state</span> <span
  m='31260'>machines</span> <span m='31580'>come</span> <span
  m='31760'>up</span> <span m='31900'>in</span> <span m='32009'>at</span> <span
  m='32110'>least</span> <span m='32380'>those</span> <span
  m='32590'>circumstances</span> <span m='33390'>and in</span> <span
  m='33400'>many</span> <span m='33670'>others.</span> </p><p><span
  m='34350'>And</span> <span m='34480'>the</span> <span m='34550'>general</span>
  <span m='34880'>model</span> <span m='35130'>of</span> <span
  m='35200'>state</span> <span m='35440'>machine</span> <span
  m='35740'>involves</span> <span m='36350'>the</span> <span
  m='36530'>idea</span> <span m='36900'>that</span> <span m='37050'>you</span>
  <span m='37160'>can</span> <span m='37380'>give</span> <span
  m='37490'>it</span> <span m='37560'>input</span> <span m='38050'>and it</span>
  <span m='38280'>responds</span> <span m='38750'>to</span> <span
  m='38900'>them,</span> <span m='39070'>but</span> <span m='39620'>we</span>
  <span m='39750'>don't</span> <span m='39930'>really</span> <span
  m='40110'>need</span> <span m='40350'>that</span> <span m='40530'>for</span>
  <span m='40690'>our</span> <span m='40790'>purposes.</span> <span
  m='42870'>So</span> <span m='43730'>let's</span> <span m='44110'>look</span>
  <span m='44340'>at</span> <span m='44420'>our</span> <span
  m='44650'>example</span> <span m='45060'>of</span> <span m='45160'>a</span>
  <span m='45210'>state</span> <span m='45530'>machine.</span> <span
  m='45850'>Here's</span> <span m='46150'>maybe</span> <span m='46840'>a</span>
  <span m='46920'>particular</span> <span m='47450'>simple</span> <span
  m='47820'>one.</span> </p><p><span m='48640'>This</span> <span
  m='48910'>is</span> <span m='49100'>a</span> <span
  m='50120'>description</span> <span m='50940'>of</span> <span
  m='51110'>a</span> <span m='51160'>state</span> <span m='51520'>machine</span>
  <span m='52160'>that</span> <span m='52740'>counts</span> <span
  m='53090'>to</span> <span m='53200'>99.</span> <span m='54600'>So</span> <span
  m='54820'>the</span> <span m='54960'>circles</span> <span m='55510'>are</span>
  <span m='55690'>indicating</span> <span m='56330'>what</span> <span
  m='56540'>its</span> <span m='56660'>states</span> <span m='57080'>are,</span>
  <span m='57450'>and we've</span> <span m='57660'>named</span> <span
  m='58030'>them</span> <span m='58990'>from</span> <span m='59290'>0</span>
  <span m='59940'>through</span> <span m='60200'>99.</span> <span
  m='60930'>And</span> <span m='61040'>then</span> <span
  m='61180'>there's</span> <span m='61380'>a</span> <span m='61430'>final</span>
  <span m='61790'>state</span> <span m='62060'>called</span> <span
  m='62330'>overflow,</span> <span m='63460'>and</span> <span
  m='63660'>that</span> <span m='63880'>funny</span> <span m='65230'>arc</span>
  <span m='65670'>is</span> <span m='65890'>an</span> <span
  m='65980'>indication</span> <span m='66700'>that</span> <span
  m='67260'>if</span> <span m='67520'>you're</span> <span m='69380'>in</span>
  <span m='69530'>overflow</span> <span m='70190'>mode</span> <span
  m='70660'>and</span> <span m='70870'>you</span> <span m='70980'>make</span>
  <span m='71220'>another</span> <span m='71620'>step</span> <span
  m='72060'>by</span> <span m='72200'>following</span> <span
  m='72670'>the</span> <span m='72820'>arc,</span> <span m='73040'>you</span>
  <span m='73130'>get</span> <span m='73340'>back</span> <span
  m='73590'>to</span> <span m='73700'>overflow</span> <span
  m='74280'>mode.</span> <span m='74910'>But</span> <span m='75040'>if</span>
  <span m='75150'>you're</span> <span m='75340'>in</span> <span
  m='75440'>0,</span> <span m='76050'>you</span> <span m='76180'>can</span>
  <span m='76330'>make</span> <span m='76790'>a</span> <span m='77250'>step
  to</span> <span m='77360'>1.</span> <span m='77710'>And</span> <span
  m='77960'>if you're</span> <span m='78230'>in 1,</span> <span
  m='78470'>you</span> <span m='78590'>can</span> <span m='78720'>make a</span>
  <span m='79010'>step</span> <span m='79300'>to</span> <span
  m='79440'>2,</span> <span m='79730'>and</span> <span m='79850'>so</span> <span
  m='80110'>on.</span> </p><p><span m='80560'>So</span> <span
  m='80750'>starting</span> <span m='81230'>off</span> <span m='82430'>at</span>
  <span m='82660'>the</span> <span m='82740'>start</span> <span
  m='83140'>state,</span> <span m='84920'>which</span> <span m='85070'>is</span>
  <span m='85200'>generally</span> <span m='85680'>indicated</span> <span
  m='86700'>by</span> <span m='88290'>that</span> <span m='88760'>double</span>
  <span m='90110'>mark.</span> <span m='90810'>So</span> <span
  m='91060'>to</span> <span m='91190'>indicate</span> <span
  m='91600'>where</span> <span m='91750'>to</span> <span m='91840'>start.</span>
  <span m='92880'>Then</span> <span m='93170'>the</span> <span
  m='93260'>description</span> <span m='93770'>of</span> <span
  m='93860'>this</span> <span m='94350'>machine,</span> <span
  m='95800'>consistent</span> <span m='96390'>in</span> <span
  m='96700'>complete</span> <span m='97390'>description</span> <span
  m='97900'>is</span> <span m='98100'>a</span> <span m='98160'>set</span> <span
  m='98370'>of</span> <span m='98450'>states</span> <span m='99290'>which</span>
  <span m='99600'>are</span> <span m='99680'>pictured</span> <span
  m='100120'>as</span> <span m='100250'>0</span> <span m='100560'>through</span>
  <span m='100750'>99</span> <span m='101330'>plus</span> <span
  m='101650'>overflow,</span> <span m='103060'>a</span> <span
  m='103200'>set</span> <span m='103430'>of</span> <span
  m='103530'>transitions</span> <span m='104340'>which</span> <span
  m='104570'>are</span> <span m='104630'>indicated</span> <span
  m='105240'>by</span> <span m='105370'>the</span> <span
  m='105550'>arrows,</span> <span m='106380'>which</span> <span
  m='106660'>is</span> <span m='106770'>how</span> <span m='106980'>one</span>
  <span m='107210'>state</span> <span m='107720'>can</span> <span
  m='107900'>move</span> <span m='108190'>to</span> <span
  m='108330'>another</span> <span m='108660'>state.</span> </p><p><span
  m='110340'>And</span> <span m='110840'>the</span> <span
  m='110990'>transitions</span> <span m='111640'>can</span> <span
  m='111780'>be</span> <span m='111900'>summarised</span> <span
  m='112550'>by</span> <span m='112700'>saying</span> <span
  m='113130'>that</span> <span m='113340'>there</span> <span
  m='113550'>of</span> <span m='113670'>the</span> <span m='113750'>form</span>
  <span m='114110'>of</span> <span m='114310'>i</span> <span m='114520'>to
  i</span> <span m='114620'>plus</span> <span m='114920'>1</span> <span
  m='115200'>for</span> <span m='116120'>i</span> <span
  m='116250'>between</span> <span m='116670'>0</span> <span
  m='117020'>and</span> <span m='117140'>99.</span> <span m='118260'>And</span>
  <span m='118460'>then</span> <span m='118810'>there's</span> <span
  m='119040'>a</span> <span m='119470'>99</span> <span
  m='120790'>transition</span> <span m='121340'>to</span> <span
  m='121470'>overflow,</span> <span m='122090'>and</span> <span
  m='122260'>once</span> <span m='122470'>you're</span> <span
  m='122600'>in</span> <span m='122680'>overflow,</span> <span
  m='123330'>you</span> <span m='123470'>stay</span> <span m='123740'>in</span>
  <span m='123880'>overflow.</span> <span m='124840'>So</span> <span
  m='124990'>the</span> <span m='125110'>picture</span> <span m='125410'>at
  the</span> <span m='125500'>top</span> <span m='126350'>is</span> <span
  m='126550'>saying</span> <span m='126930'>exactly</span> <span
  m='127400'>the</span> <span m='127510'>same</span> <span
  m='127790'>thing</span> <span m='128090'>as</span> <span
  m='128190'>we've</span> <span m='128400'>said</span> <span
  m='128639'>here</span> <span m='129750'>in</span> <span
  m='129979'>mathematical</span> <span m='130590'>notation,</span> <span
  m='131190'>explicitly</span> <span m='131810'>describing</span> <span
  m='132330'>what</span> <span m='132510'>the</span> <span
  m='132630'>transitions</span> <span m='133310'>are.</span> </p><p><span
  m='134930'>So</span> <span m='135130'>this</span> <span m='135340'>is</span>
  <span m='135480'>a</span> <span m='135540'>machine</span> <span
  m='135880'>that</span> <span m='136050'>if</span> <span m='136730'>you</span>
  <span m='136830'>really</span> <span m='137020'>build</span> <span
  m='137260'>something</span> <span m='137560'>to</span> <span
  m='137640'>behave</span> <span m='138000'>this</span> <span
  m='138200'>way,</span> <span m='138380'>it wouldn't</span> <span
  m='138590'>be</span> <span m='138720'>much</span> <span m='138920'>use,</span>
  <span m='139170'>because</span> <span m='139360'>once</span> <span
  m='139610'>it's</span> <span m='139780'>overflowed,</span> <span
  m='140330'>it's</span> <span m='140490'>dead,</span> <span
  m='141180'>because</span> <span m='141390'>it</span> <span
  m='141500'>stays</span> <span m='141900'>there.</span> <span
  m='143020'>Real</span> <span m='143270'>machine</span> <span
  m='143680'>to</span> <span m='143760'>be</span> <span m='143880'>useful</span>
  <span m='144260'>would</span> <span m='144380'>have</span> <span
  m='144520'>a</span> <span m='144600'>reset</span> <span
  m='145270'>transition,</span> <span m='145840'>which</span> <span
  m='146050'>took</span> <span m='146220'>overflow</span> <span
  m='146700'>back</span> <span m='146960'>to</span> <span
  m='147050'>zero.</span> <span m='147870'>But</span> <span
  m='148740'>this</span> <span m='149010'>illustrates</span> <span
  m='150280'>the</span> <span m='150510'>basic</span> <span
  m='150910'>idea.</span> </p><p><span m='152660'>So</span> <span
  m='152720'>let's</span> <span m='152920'>look</span> <span
  m='153090'>at</span> <span m='153150'>a</span> <span m='153210'>fun</span>
  <span m='153420'>example</span> <span m='154040'>from</span> <span
  m='154360'>a</span> <span m='155110'>Die</span> <span m='155300'>Hard</span>
  <span m='155630'>movie.</span> <span m='156620'>I've</span> <span
  m='156740'>forgotten</span> <span m='157120'>which</span> <span
  m='157320'>one</span> <span m='157480'>it</span> <span m='157560'>was.</span>
  <span m='158920'>But</span> <span m='159150'>there</span> <span
  m='159240'>was</span> <span m='159340'>one</span> <span m='159530'>with</span>
  <span m='159680'>Bruce</span> <span m='159920'>Willis</span> <span
  m='160390'>and</span> <span m='161040'>Samuel</span> <span
  m='161470'>Jackson</span> <span m='161970'>playing</span> <span
  m='162555'>a</span> <span m='162820'>detective</span> <span
  m='163926'>and</span> <span m='164392'>a</span> <span m='164860'>friend</span>
  <span m='165090'>that he</span> <span m='165520'>meets</span> <span
  m='165840'>who</span> <span m='165980'>helps</span> <span
  m='166270'>him</span> <span m='166980'>deal</span> <span
  m='167440'>with</span> <span m='167850'>a</span> <span m='168600'>bad</span>
  <span m='168890'>man,</span> <span m='169680'>as</span> <span
  m='169820'>is</span> <span m='170260'>the</span> <span m='170340'>case</span>
  <span m='170610'>in</span> <span m='170670'>all</span> <span
  m='170810'>these</span> <span m='170970'>movies.</span> <span
  m='171740'>This</span> <span m='171900'>time,</span> <span m='172330'>the
  bad</span> <span m='172580'>man's</span> <span m='172820'>name</span> <span
  m='173010'>is</span> <span m='173100'>Simon.</span> </p><p><span
  m='173920'>And</span> <span m='174300'>what</span> <span
  m='174530'>Simon</span> <span m='174890'>says</span> <span
  m='175170'>to</span> <span m='175270'>them</span> <span m='175440'>as</span>
  <span m='175560'>they</span> <span m='175720'>stand</span> <span
  m='176170'>behind</span> <span m='176620'>the</span> <span
  m='176870'>fountain</span> <span m='177310'>in</span> <span
  m='177470'>the</span> <span m='177560'>park</span> <span
  m='177920'>shown</span> <span m='178200'>on</span> <span m='178280'>the</span>
  <span m='178360'>previous</span> <span m='178810'>slide</span> <span
  m='179210'>is</span> <span m='180100'>that</span> <span m='180310'>on</span>
  <span m='180510'>the</span> <span m='180600'>foundation,</span> <span
  m='180905'>there</span> <span m='181210'>should</span> <span m='181360'>be
  two</span> <span m='181570'>jugs,</span> <span m='181990'>do</span> <span
  m='182060'>you</span> <span m='182120'>see</span> <span
  m='182320'>them?</span> <span m='183140'>A</span> <span m='183250'>five</span>
  <span m='183600'>gallon</span> <span m='184010'>and</span> <span
  m='184140'>a</span> <span m='184200'>three</span> <span
  m='184450'>gallon.</span> <span m='185250'>Fill</span> <span
  m='185520'>one</span> <span m='185710'>of</span> <span m='185810'>these</span>
  <span m='186020'>jugs</span> <span m='186300'>with</span> <span
  m='186470'>exactly</span> <span m='186980'>four</span> <span
  m='187230'>gallons</span> <span m='187630'>of</span> <span
  m='187740'>water</span> <span m='188310'>and</span> <span
  m='188470'>place</span> <span m='188740'>it</span> <span m='188820'>on</span>
  <span m='188940'>the</span> <span m='189020'>scale,</span> <span
  m='189840'>and</span> <span m='190020'>the</span> <span
  m='190090'>timer</span> <span m='190460'>will</span> <span
  m='190620'>stop.</span> <span m='191500'>The</span> <span
  m='191630'>timer</span> <span m='191990'>and the</span> <span m='192130'>scale
  are</span> <span m='192470'>not</span> <span m='192700'>shown</span> <span
  m='192940'>in</span> <span m='193010'>that</span> <span
  m='193190'>picture,</span> <span m='193490'>but</span> <span
  m='193680'>there's</span> <span m='193890'>a</span> <span
  m='194010'>scale</span> <span m='194440'>and</span> <span m='194590'>a</span>
  <span m='194660'>timer</span> <span m='195240'>nearby.</span> <span
  m='196490'>You</span> <span m='196640'>must</span> <span m='196850'>be</span>
  <span m='196980'>precise,</span> <span m='197690'>one</span> <span
  m='198020'>ounce</span> <span m='198320'>more</span> <span
  m='198630'>or</span> <span m='198660'>less</span> <span m='198950'>will</span>
  <span m='199090'>result</span> <span m='199480'>in</span> <span
  m='199580'>detonation.</span> <span m='200550'>If</span> <span
  m='200720'>you're</span> <span m='200830'>still</span> <span
  m='201060'>alive</span> <span m='201460'>in</span> <span
  m='201650'>five</span> <span m='202040'>minutes,</span> <span
  m='202910'>we'll</span> <span m='203180'>speak.</span> </p><p><span
  m='204790'>OK.</span> <span m='205610'>So</span> <span m='205810'>let's</span>
  <span m='206070'>think</span> <span m='206260'>about</span> <span
  m='206780'>formalizing</span> <span m='207720'>this</span> <span
  m='208080'>as</span> <span m='208320'>a</span> <span m='208370'>state</span>
  <span m='208730'>machine</span> <span m='209050'>to</span> <span
  m='209140'>see</span> <span m='209280'>what's</span> <span
  m='209500'>going</span> <span m='209810'>on.</span> <span m='210160'>So</span>
  <span m='211460'>but</span> <span m='211660'>first of</span> <span
  m='211860'>all, to</span> <span m='212020'>understand</span> <span
  m='214410'>the</span> <span m='214530'>specification</span> <span
  m='215360'>informally.</span> <span m='216460'>What</span> <span
  m='216730'>there</span> <span m='216990'>is</span> <span m='217450'>a</span>
  <span m='217860'>three</span> <span m='218210'>gallon</span> <span
  m='218660'>jug</span> <span m='219110'>and</span> <span m='219290'>a</span>
  <span m='219350'>five</span> <span m='219710'>gallon</span> <span
  m='220090'>jug</span> <span m='221190'>that's</span> <span
  m='221760'>capable</span> <span m='222070'>of</span> <span
  m='222140'>holding</span> <span m='222430'>water,</span> <span
  m='222770'>and</span> <span m='222940'>an</span> <span
  m='223080'>unlimited</span> <span m='223720'>supply</span> <span
  m='224160'>of</span> <span m='224300'>water</span> <span
  m='224650'>that</span> <span m='224810'>you</span> <span m='224930'>can</span>
  <span m='225150'>get</span> <span m='225750'>from</span> <span
  m='226130'>the</span> <span m='226230'>fountain.</span> <span
  m='227700'>And</span> <span m='228810'>the</span> <span
  m='229090'>basic</span> <span m='229570'>moves</span> <span
  m='229960'>that</span> <span m='230120'>you</span> <span m='230250'>can</span>
  <span m='230470'>make--</span> </p><p><span m='231760'>So</span> <span
  m='231940'>with</span> <span m='232090'>this</span> <span
  m='232320'>set</span> <span m='232520'>up,</span> <span m='232980'>the</span>
  <span m='233120'>kind</span> <span m='233460'>of</span> <span
  m='233550'>moves</span> <span m='233930'>that</span> <span
  m='234090'>you</span> <span m='234220'>can</span> <span m='234420'>make</span>
  <span m='234800'>would</span> <span m='235040'>be,</span> <span
  m='236010'>say</span> <span m='236290'>you</span> <span m='236420'>fill</span>
  <span m='236720'>up</span> <span m='236890'>the</span> <span
  m='236990'>three</span> <span m='237220'>gallon</span> <span
  m='237580'>jug</span> <span m='237860'>with</span> <span
  m='238010'>water,</span> <span m='239060'>and</span> <span
  m='239380'>then</span> <span m='239630'>you</span> <span
  m='239780'>could</span> <span m='239980'>pour</span> <span
  m='240260'>the</span> <span m='240400'>three</span> <span
  m='240680'>gallon</span> <span m='241010'>jug</span> <span
  m='241350'>into</span> <span m='241510'>the</span> <span
  m='241590'>five</span> <span m='241880'>gallon</span> <span
  m='242210'>jugs.</span> <span m='242600'>And</span> <span
  m='242680'>the</span> <span m='242760'>three</span> <span
  m='242960'>gallon</span> <span m='243220'>jug</span> <span
  m='243440'>was</span> <span m='243600'>empty</span> <span m='243880'>and
  the</span> <span m='243980'>five</span> <span m='244250'>gallon</span> <span
  m='244540'>jug</span> <span m='244770'>you knew</span> <span
  m='245110'>had</span> <span m='245260'>exactly</span> <span
  m='246240'>three</span> <span m='246500'>gallons</span> <span
  m='246990'>in</span> <span m='247130'>it.</span> <span m='249960'>And</span>
  <span m='250280'>then</span> <span m='250400'>you</span> <span
  m='250510'>can</span> <span m='250640'>do</span> <span m='250760'>other</span>
  <span m='250940'>things</span> <span m='251280'>like</span> <span
  m='251490'>empty</span> <span m='251850'>a jug</span> <span
  m='252140'>and</span> <span m='252230'>fill</span> <span m='252490'>a</span>
  <span m='252550'>jug</span> <span m='254440'>and</span> <span
  m='254620'>empty</span> <span m='254850'>them</span> <span
  m='254980'>into</span> <span m='255220'>each</span> <span
  m='255390'>other.</span> </p><p><span m='255820'>So</span> <span
  m='256149'>let's</span> <span m='256760'>model</span> <span
  m='257300'>this</span> <span m='258200'>as</span> <span m='258380'>a</span>
  <span m='258440'>state</span> <span m='258779'>machine.</span> <span
  m='259250'>And</span> <span m='259260'>the</span> <span
  m='259329'>first</span> <span m='259660'>decision</span> <span
  m='260060'>we</span> <span m='260209'>need</span> <span m='260420'>to</span>
  <span m='260500'>make</span> <span m='260829'>is</span> <span
  m='261079'>what's</span> <span m='261339'>the</span> <span
  m='261420'>state</span> <span m='261790'>going</span> <span
  m='261950'>to</span> <span m='262010'>be.</span> <span m='263020'>Well,</span>
  <span m='263410'>the</span> <span m='263630'>state--</span> <span
  m='264260'>the</span> <span m='264650'>obvious</span> <span
  m='265090'>model</span> <span m='265380'>for</span> <span
  m='265470'>the</span> <span m='265580'>state</span> <span m='265950'>is</span>
  <span m='266200'>the</span> <span m='266300'>amount</span> <span
  m='266520'>of</span> <span m='266640'>water</span> <span m='267290'>in
  each</span> <span m='267620'>of the</span> <span m='267720'>jugs.</span> <span
  m='268050'>So</span> <span m='268280'>b</span> <span m='269060'>is</span>
  <span m='269370'>the</span> <span m='269490'>amount</span> <span
  m='269740'>in</span> <span m='269820'>the</span> <span m='269890'>big</span>
  <span m='270130'>jug</span> <span m='270480'>and</span> <span
  m='270620'>l</span> <span m='270900'>is</span> <span m='271030'>the</span>
  <span m='271150'>amount</span> <span m='271420'>the</span> <span
  m='271570'>little</span> <span m='271850'>jug.</span> <span
  m='272210'>And</span> <span m='272290'>what</span> <span m='272440'>we</span>
  <span m='272540'>know</span> <span m='272760'>about</span> <span m='273060'>b
  and</span> <span m='273350'>l</span> <span m='273840'>is</span> <span
  m='274630'>that</span> <span m='274830'>they're</span> <span
  m='274990'>going</span> <span m='275150'>to</span> <span m='275230'>be</span>
  <span m='275430'>some</span> <span m='275680'>amount</span> <span
  m='276040'>between</span> <span m='276420'>0</span> <span
  m='276770'>and</span> <span m='276900'>5</span> <span m='277260'>for</span>
  <span m='277420'>b,</span> <span m='278090'>and</span> <span
  m='278320'>0</span> <span m='278680'>and</span> <span m='278780'>3</span>
  <span m='279080'>for</span> <span m='279280'>l.</span> </p><p><span
  m='281560'>We're</span> <span m='281700'>going</span> <span
  m='281840'>to</span> <span m='282190'>quickly</span> <span
  m='282530'>realize</span> <span m='282910'>that</span> <span
  m='283000'>we</span> <span m='283120'>need them</span> <span
  m='283440'>to</span> <span m='283510'>be</span> <span
  m='283640'>integers,</span> <span m='284150'>but</span> <span
  m='284320'>off</span> <span m='284610'>hand</span> <span m='285060'>we</span>
  <span m='285230'>can</span> <span m='285390'>allow</span> <span
  m='285650'>them</span> <span m='285840'>to</span> <span m='285940'>be</span>
  <span m='286080'>real</span> <span m='286320'>numbers.</span> <span
  m='287420'>Because</span> <span m='288700'>after</span> <span
  m='289000'>all,</span> <span m='289330'>you</span> <span
  m='289490'>could</span> <span m='289660'>just</span> <span
  m='289930'>pour</span> <span m='290180'>some</span> <span
  m='290470'>arbitrary</span> <span m='290980'>amount</span> <span
  m='291820'>of</span> <span m='292040'>water</span> <span
  m='292450'>into</span> <span m='292720'>the</span> <span m='292820'>big</span>
  <span m='293020'>jug,</span> <span m='293300'>any</span> <span
  m='293480'>amount</span> <span m='293840'>that</span> <span
  m='293940'>it'll</span> <span m='294030'>hold</span> <span
  m='294320'>between</span> <span m='294680'>0</span> <span
  m='295000'>and</span> <span m='295110'>5.</span> <span
  m='296440'>Although,</span> <span m='297170'>that'll</span> <span
  m='297470'>be</span> <span m='297600'>dangerous,</span> <span
  m='298210'>because</span> <span m='298550'>as</span> <span
  m='298640'>soon</span> <span m='298830'>as</span> <span m='298900'>you</span>
  <span m='298990'>do</span> <span m='299180'>that,</span> <span
  m='300280'>you're</span> <span m='300340'>going</span> <span
  m='300450'>to</span> <span m='300500'>lose</span> <span
  m='300750'>track</span> <span m='301010'>of</span> <span
  m='301080'>exactly</span> <span m='301500'>how</span> <span
  m='301620'>much</span> <span m='301880'>is</span> <span m='301980'>in</span>
  <span m='302150'>there and</span> <span m='302390'>you</span> <span
  m='302540'>won't</span> <span m='302780'>know</span> <span
  m='303490'>when</span> <span m='303700'>you</span> <span
  m='303770'>have</span> <span m='304010'>four</span> <span
  m='304270'>gallons</span> <span m='304750'>or</span> <span
  m='304830'>not.</span> </p><p><span m='306000'>So</span> <span
  m='306620'>let's</span> <span m='307200'>formalize</span> <span
  m='307950'>the</span> <span m='308060'>possible</span> <span
  m='308890'>moves</span> <span m='309350'>that</span> <span
  m='309490'>we</span> <span m='309630'>can</span> <span m='309830'>have.</span>
  <span m='310180'>So</span> <span m='310360'>first</span> <span
  m='310640'>of</span> <span m='310760'>all,</span> <span m='310930'>the</span>
  <span m='311010'>start</span> <span m='311330'>state</span> <span
  m='311570'>is</span> <span m='311690'>0,0,</span> <span
  m='312290'>because</span> <span m='312390'>we</span> <span
  m='312500'>start</span> <span m='312740'>with</span> <span
  m='312880'>both</span> <span m='313170'>jugs</span> <span
  m='313590'>empty.</span> <span m='314700'>And</span> <span
  m='315010'>then</span> <span m='315350'>what</span> <span
  m='315600'>are</span> <span m='315710'>the</span> <span
  m='315850'>possible</span> <span m='316430'>transitions</span> <span
  m='317960'>of</span> <span m='318270'>how</span> <span m='318570'>b and</span>
  <span m='318940'>l</span> <span m='319220'>moves?</span> <span
  m='319500'>Well,</span> <span m='320180'>let's</span> <span
  m='320560'>see.</span> <span m='321260'>The</span> <span
  m='321420'>fill</span> <span m='321740'>the</span> <span
  m='321840'>little</span> <span m='322150'>jug</span> <span
  m='322460'>move</span> <span m='322850'>amounts</span> <span
  m='323320'>to</span> <span m='323430'>saying</span> <span
  m='323900'>that</span> <span m='324600'>if</span> <span m='324840'>you</span>
  <span m='324990'>have</span> <span m='325210'>an</span> <span
  m='325300'>amount</span> <span m='326120'>of</span> <span m='326290'>b</span>
  <span m='326560'>in</span> <span m='326720'>big</span> <span
  m='327160'>and</span> <span m='327360'>l in</span> <span
  m='327670'>little,</span> <span m='328140'>then</span> <span
  m='328300'>you</span> <span m='328450'>can</span> <span m='328590'>make</span>
  <span m='328810'>a</span> <span m='328850'>transition</span> <span
  m='329770'>called</span> <span m='330020'>fill</span> <span
  m='330260'>the</span> <span m='330350'>little</span> <span
  m='330630'>jug</span> <span m='331290'>into</span> <span m='331760'>b,</span>
  <span m='332620'>and</span> <span m='333010'>big is</span> <span
  m='333360'>still</span> <span m='333640'>unchanged,</span> <span
  m='334260'>and</span> <span m='334420'>3</span> <span m='334890'>in</span>
  <span m='335010'>little</span> <span m='335840'>for</span> <span
  m='336300'>l</span> <span m='336700'>less</span> <span m='337020'>than</span>
  <span m='337190'>3.</span> </p><p><span m='337890'>I'm</span> <span
  m='338090'>going</span> <span m='338260'>to</span> <span
  m='338360'>forbid</span> <span m='338850'>the</span> <span
  m='338920'>vacuous</span> <span m='339490'>move</span> <span
  m='339840'>where</span> <span m='340740'>the</span> <span
  m='341210'>little</span> <span m='341480'>jug</span> <span
  m='341770'>is</span> <span m='341870'>already</span> <span
  m='342240'>full</span> <span m='342700'>and</span> <span m='343140'>you</span>
  <span m='343260'>try</span> <span m='343420'>to</span> <span
  m='343510'>fill</span> <span m='343820'>it.</span> <span
  m='343950'>That</span> <span m='344400'>doesn't</span> <span
  m='344690'>count,</span> <span m='344990'>so</span> <span m='345210'>l</span>
  <span m='345380'>has</span> <span m='345580'>to</span> <span
  m='345650'>be</span> <span m='345750'>less</span> <span m='346010'>than</span>
  <span m='346120'>3,</span> <span m='346920'>you</span> <span
  m='347070'>can</span> <span m='347250'>make</span> <span m='347490'>it</span>
  <span m='347620'>3</span> <span m='347970'>by</span> <span
  m='348120'>filling</span> <span m='348470'>the</span> <span
  m='348580'>little</span> <span m='348850'>jug.</span> <span
  m='349390'>Similarly,</span> <span m='349830'>you could</span> <span
  m='349980'>fill</span> <span m='350260'>the</span> <span m='350330'>big</span>
  <span m='350590'>jug</span> <span m='351250'>if</span> <span
  m='351530'>b</span> <span m='351700'>is</span> <span m='351830'>less</span>
  <span m='352060'>than</span> <span m='352180'>5.</span> <span
  m='352610'>Then</span> <span m='352740'>you</span> <span m='352900'>can</span>
  <span m='353090'>turn</span> <span m='353290'>it</span> <span
  m='353380'>into</span> <span m='353610'>5</span> <span m='354060'>by</span>
  <span m='354190'>filling</span> <span m='354630'>it.</span> </p><p><span
  m='355470'>And</span> <span m='355640'>then</span> <span m='355750'>you</span>
  <span m='355890'>can</span> <span m='356230'>empty</span> <span
  m='356360'>the</span> <span m='356460'>little</span> <span
  m='356790'>jug,</span> <span m='357480'>which</span> <span
  m='357690'>is</span> <span m='357800'>easy.</span> <span m='358170'>If</span>
  <span m='358330'>you</span> <span m='358470'>go</span> <span
  m='358650'>from</span> <span m='358840'>b, l</span> <span
  m='359240'>you</span> <span m='359380'>go</span> <span m='359570'>to</span>
  <span m='359940'>b,</span> <span m='360110'>0.</span> <span
  m='361080'>And</span> <span m='361360'>likewise,</span> <span
  m='361740'>you</span> <span m='361840'>can</span> <span
  m='362120'>empty</span> <span m='362210'>the</span> <span
  m='362300'>big</span> <span m='362520'>jug.</span> <span
  m='362700'>Those</span> <span m='362920'>are</span> <span
  m='362950'>the</span> <span m='363160'>easy</span> <span
  m='363390'>moves.</span> <span m='364610'>A</span> <span
  m='364690'>slightly</span> <span m='365220'>more</span> <span
  m='365400'>complicated</span> <span m='366020'>move</span> <span
  m='366340'>is</span> <span m='366630'>pour</span> <span m='366880'>the</span>
  <span m='366920'>big</span> <span m='367160'>jug</span> <span
  m='367450'>into</span> <span m='367670'>the</span> <span
  m='367780'>little</span> <span m='368070'>jug.</span> <span
  m='369190'>Well</span> <span m='369420'>if</span> <span
  m='369570'>there's</span> <span m='369740'>no</span> <span
  m='369940'>overflow,</span> <span m='370740'>what</span> <span
  m='370960'>that</span> <span m='371180'>means</span> <span
  m='371500'>is</span> <span m='371830'>that</span> <span
  m='372300'>there's</span> <span m='372590'>l in</span> <span
  m='372940'>the</span> <span m='373020'>little</span> <span
  m='373310'>jug</span> <span m='373640'>and</span> <span m='373750'>b</span>
  <span m='373910'>in</span> <span m='374000'>the</span> <span
  m='374070'>big</span> <span m='374320'>job.</span> <span m='374810'>And
  after</span> <span m='375080'>you've</span> <span m='375310'>poured</span>
  <span m='376320'>the</span> <span m='376460'>big</span> <span
  m='376710'>jug</span> <span m='377050'>into</span> <span m='377290'>the</span>
  <span m='377390'>little</span> <span m='377620'>jug,</span> <span
  m='377900'>there's</span> <span m='378040'>b</span> <span
  m='378240'>plus</span> <span m='378540'>l</span> <span m='379100'>in</span>
  <span m='379190'>the</span> <span m='379280'>little</span> <span
  m='379570'>one,</span> <span m='379730'>and</span> <span
  m='379850'>nothing</span> <span m='380480'>in</span> <span
  m='380640'>the</span> <span m='380720'>big</span> <span m='380960'>one.</span>
  </p><p><span m='381930'>But</span> <span m='382210'>let's</span> <span
  m='382540'>be</span> <span m='382820'>careful</span> <span
  m='383190'>here</span> <span m='383370'>about</span> <span
  m='383610'>what</span> <span m='383710'>exactly--</span> <span
  m='384300'>we're</span> <span m='384460'>doing</span> <span
  m='384650'>math,</span> <span m='385120'>we're</span> <span
  m='385250'>not</span> <span m='385660'>sort</span> <span
  m='385890'>of--</span> <span m='386640'>we're</span> <span
  m='386840'>trying</span> <span m='386970'>to</span> <span
  m='387010'>get</span> <span m='387130'>away</span> <span
  m='387350'>from</span> <span m='387460'>the</span> <span
  m='387480'>metaphor.</span> <span m='388200'>So</span> <span
  m='388320'>what</span> <span m='388460'>is</span> <span m='388610'>no</span>
  <span m='388810'>overflow</span> <span m='389320'>means?</span> <span
  m='389580'>It</span> <span m='389730'>simply</span> <span
  m='389990'>means</span> <span m='390170'>that</span> <span m='390260'>b</span>
  <span m='390440'>plus</span> <span m='390680'>l</span> <span
  m='390870'>will</span> <span m='391040'>fit.</span> <span m='391630'>b</span>
  <span m='391810'>plus</span> <span m='392090'>l</span> <span
  m='392230'>is</span> <span m='392330'>less than</span> <span m='392560'>or
  equal</span> <span m='392950'>to</span> <span m='393080'>3.</span>
  </p><p><span m='394390'>All</span> <span m='394530'>right.</span> <span
  m='395140'>What's</span> <span m='395440'>the</span> <span
  m='395570'>other</span> <span m='395770'>case</span> <span
  m='396300'>of</span> <span m='397180'>pouring</span> <span
  m='397610'>the</span> <span m='397700'>big</span> <span m='397920'>jug</span>
  <span m='398210'>into</span> <span m='398390'>the</span> <span
  m='398490'>little</span> <span m='398770'>jug?</span> <span
  m='399230'>Well</span> <span m='399600'>that's</span> <span
  m='399840'>when</span> <span m='400340'>b</span> <span m='400530'>plus</span>
  <span m='400840'>l</span> <span m='401000'>won't</span> <span
  m='401290'>fit,</span> <span m='402380'>in</span> <span
  m='402510'>which</span> <span m='402790'>case,</span> <span
  m='403670'>you</span> <span m='403810'>pour</span> <span
  m='404290'>into</span> <span m='404510'>the</span> <span
  m='404620'>little</span> <span m='404960'>jug.</span> <span
  m='405900'>It's</span> <span m='406110'>got</span> <span m='406310'>l,</span>
  <span m='406580'>so</span> <span m='406850'>you</span> <span
  m='407030'>pour</span> <span m='407420'>in</span> <span m='407630'>3</span>
  <span m='407910'>minus</span> <span m='408360'>l</span> <span m='408710'>to
  fill</span> <span m='408910'>it</span> <span m='408980'>up.</span> <span
  m='409880'>And</span> <span m='410260'>then</span> <span
  m='410490'>what's</span> <span m='410790'>left</span> <span
  m='411240'>in</span> <span m='411460'>b</span> <span m='412300'>is</span>
  <span m='412720'>b</span> <span m='412910'>minus</span> <span
  m='413310'>the</span> <span m='413410'>3</span> <span m='413790'>minus</span>
  <span m='414070'>little</span> <span m='414420'>l</span> <span m='414740'>that
  you</span> <span m='415060'>poured.</span> <span m='415240'>So that</span>
  <span m='416060'>the</span> <span m='416470'>other</span> <span
  m='416765'>wise</span> <span m='417060'>case,</span> <span
  m='417360'>when</span> <span m='417540'>there</span> <span
  m='417770'>is</span> <span m='418050'>overflow.</span> <span
  m='419290'>And</span> <span m='419740'>similarly,</span> <span
  m='420510'>there</span> <span m='420820'>are</span> <span
  m='420900'>moves</span> <span m='421270'>for</span> <span
  m='421430'>pouring</span> <span m='421745'>the</span> <span
  m='422060'>little</span> <span m='422330'>jug</span> <span
  m='423040'>into</span> <span m='423320'>the</span> <span m='423560'>big</span>
  <span m='423940'>jug.</span> </p><p><span m='424590'>So</span> <span
  m='424840'>that</span> <span m='425300'>then</span> <span m='426100'>is</span>
  <span m='426550'>a</span> <span m='426640'>formal</span> <span
  m='427100'>specification</span> <span m='427786'>of</span> <span
  m='428470'>the</span> <span m='428590'>Die</span> <span m='428910'>Hard</span>
  <span m='429230'>machine</span> <span m='430160'>and</span> <span
  m='430450'>the</span> <span m='430510'>moves</span> <span
  m='430890'>that</span> <span m='431030'>we're</span> <span
  m='431170'>going</span> <span m='431300'>to</span> <span
  m='431360'>allow.</span> <span m='431640'>Now,</span> <span
  m='431920'>you</span> <span m='432050'>could</span> <span
  m='432200'>allow</span> <span m='432470'>other</span> <span
  m='432720'>moves</span> <span m='432950'>like</span> <span
  m='433110'>randomly</span> <span m='433880'>pouring</span> <span
  m='434190'>out</span> <span m='434290'>a</span> <span m='434350'>little</span>
  <span m='434580'>water,</span> <span m='434940'>or</span> <span
  m='435110'>randomly</span> <span m='435720'>filling</span> <span
  m='436070'>up</span> <span m='436200'>a</span> <span m='436250'>little</span>
  <span m='436510'>water.</span> <span m='437030'>But</span> <span
  m='437240'>if</span> <span m='437340'>you</span> <span m='437420'>did</span>
  <span m='437670'>that,</span> <span m='437820'>again,</span> <span
  m='438060'>you</span> <span m='438200'>lose</span> <span
  m='438470'>track</span> <span m='438800'>of</span> <span m='438880'>how</span>
  <span m='438990'>much</span> <span m='439200'>water</span> <span
  m='439970'>is</span> <span m='440180'>in</span> <span m='440320'>the</span>
  <span m='440400'>jug.</span> <span m='440730'>So</span> <span
  m='440880'>these</span> <span m='441120'>are</span> <span
  m='441170'>the</span> <span m='441310'>only</span> <span
  m='442050'>safe</span> <span m='442430'>moves.</span> <span
  m='442910'>And</span> <span m='443200'>they're</span> <span
  m='443410'>the</span> <span m='443540'>only</span> <span
  m='443790'>ones</span> <span m='444060'>we're</span> <span
  m='444190'>going</span> <span m='444320'>to</span> <span
  m='444370'>model.</span> </p><p><span m='445770'>All</span> <span
  m='445840'>right.</span> <span m='446070'>So</span> <span
  m='446180'>let's</span> <span m='446400'>go</span> <span
  m='446510'>back</span> <span m='446770'>to</span> <span
  m='446880'>Simon's</span> <span m='447360'>challenge.</span> <span
  m='448320'>He</span> <span m='448460'>wants</span> <span m='448760'>to</span>
  <span m='448890'>disarm</span> <span m='449380'>the</span> <span
  m='449470'>bomb</span> <span m='450020'>by</span> <span
  m='450170'>getting</span> <span m='450540'>exactly</span> <span
  m='451230'>four</span> <span m='451500'>gallons</span> <span
  m='451910'>of</span> <span m='452040'>water</span> <span m='454030'>in</span>
  <span m='454150'>the</span> <span m='454240'>jug</span> <span
  m='454720'>and</span> <span m='454920'>measure</span> <span
  m='455250'>it</span> <span m='455300'>on</span> <span m='455460'>the</span>
  <span m='455550'>scale,</span> <span m='456250'>or</span> <span
  m='456680'>things</span> <span m='457030'>will</span> <span
  m='457210'>blow</span> <span m='457520'>up.</span> <span m='458640'>And</span>
  <span m='459410'>how</span> <span m='459690'>do</span> <span
  m='459760'>you</span> <span m='459880'>do</span> <span m='460140'>it?</span>
  <span m='461030'>Well,</span> <span m='462080'>why</span> <span
  m='462260'>don't</span> <span m='462430'>you</span> <span
  m='463160'>take</span> <span m='463410'>a</span> <span
  m='463470'>moment</span> <span m='464670'>to</span> <span
  m='464740'>think</span> <span m='464990'>about</span> <span
  m='465310'>it</span> <span m='465670'>before</span> <span m='466280'>I</span>
  <span m='467350'>proceed</span> <span m='467800'>to</span> <span
  m='467900'>the</span> <span m='468020'>next</span> <span m='468260'>set</span>
  <span m='468410'>of</span> <span m='468470'>slides</span> <span
  m='468810'>or</span> <span m='468860'>before</span> <span
  m='469160'>you</span> <span m='469260'>let</span> <span m='469460'>me</span>
  <span m='469600'>proceed.</span> <span m='470510'>But</span> <span
  m='471120'>just</span> <span m='471350'>to</span> <span
  m='471420'>understand</span> <span m='472010'>the</span> <span
  m='472080'>rules</span> <span m='472350'>again,</span> <span
  m='472680'>watch</span> <span m='472970'>the</span> <span
  m='473050'>work</span> <span m='473660'>here's</span> <span
  m='473990'>how.</span> </p><p><span m='475770'>We're</span> <span
  m='475870'>going</span> <span m='475990'>to</span> <span
  m='476050'>start</span> <span m='476410'>off</span> <span
  m='476850'>with</span> <span m='478290'>both</span> <span
  m='478560'>jugs</span> <span m='478880'>empty.</span> <span
  m='479800'>So</span> <span m='480030'>we</span> <span m='480140'>start</span>
  <span m='480460'>off</span> <span m='480670'>in</span> <span
  m='480790'>state</span> <span m='481270'>0,0,</span> <span
  m='482190'>and</span> <span m='482350'>the</span> <span
  m='482430'>first</span> <span m='482760'>move</span> <span
  m='482970'>is</span> <span m='483070'>going</span> <span m='483210'>to</span>
  <span m='483280'>be</span> <span m='483810'>to</span> <span
  m='483960'>fill</span> <span m='484280'>the</span> <span m='484360'>big</span>
  <span m='484610'>jug,</span> <span m='485140'>which</span> <span
  m='485360'>takes</span> <span m='485660'>us</span> <span m='485810'>to</span>
  <span m='485920'>state</span> <span m='486520'>5, 0.</span> <span
  m='488170'>Where</span> <span m='488610'>the</span> <span m='488820'>big
  jug</span> <span m='489300'>has 5</span> <span m='489680'>and</span> <span
  m='490090'>the little</span> <span m='490350'>jug is</span> <span
  m='490430'>still</span> <span m='490680'>empty.</span> </p><p><span
  m='491850'>Then</span> <span m='492230'>we're</span> <span
  m='492400'>going</span> <span m='492520'>to</span> <span
  m='492590'>pour</span> <span m='493000'>from</span> <span
  m='493230'>the</span> <span m='493300'>big</span> <span m='493930'>into</span>
  <span m='494210'>the</span> <span m='494320'>little.</span> <span
  m='495340'>So</span> <span m='495570'>now,</span> <span m='496550'>the</span>
  <span m='496690'>little</span> <span m='496960'>jug</span> <span
  m='497150'>has</span> <span m='497990'>3.</span> <span m='498460'>We're</span>
  <span m='498600'>filling</span> <span m='498970'>up</span> <span
  m='499170'>the</span> <span m='499240'>little</span> <span
  m='499500'>one.</span> <span m='500000'>That</span> <span
  m='500220'>leaves</span> <span m='500480'>two</span> <span
  m='500790'>in</span> <span m='500860'>the</span> <span m='500940'>big</span>
  <span m='501140'>jug.</span> </p><p><span m='503410'>Now</span> <span
  m='503570'>we're</span> <span m='503660'>going</span> <span
  m='503770'>to</span> <span m='504010'>empty</span> <span m='504120'>the</span>
  <span m='504230'>little</span> <span m='504520'>one,</span> <span
  m='504770'>we</span> <span m='504890'>still</span> <span
  m='505120'>have</span> <span m='505340'>2</span> <span m='505540'>left</span>
  <span m='505960'>in</span> <span m='506070'>the</span> <span
  m='506150'>big</span> <span m='506340'>one.</span> <span m='507750'>And</span>
  <span m='508520'>now</span> <span m='508780'>we're</span> <span
  m='508900'>going</span> <span m='509010'>to</span> <span
  m='509080'>pour</span> <span m='509440'>from</span> <span
  m='509620'>the</span> <span m='509680'>big</span> <span m='509960'>one</span>
  <span m='510180'>into</span> <span m='510420'>the</span> <span
  m='510530'>little</span> <span m='510820'>one,</span> <span
  m='511690'>so</span> <span m='511930'>the</span> <span
  m='512059'>little</span> <span m='512370'>one</span> <span
  m='512549'>has</span> <span m='512830'>2</span> <span
  m='513010'>gallons</span> <span m='513539'>and</span> <span
  m='513700'>the</span> <span m='513750'>big</span> <span m='513980'>one</span>
  <span m='514140'>is</span> <span m='514340'>empty.</span> </p><p><span
  m='515860'>Now,</span> <span m='516169'>we</span> <span m='516360'>fill</span>
  <span m='516659'>the</span> <span m='516740'>big</span> <span
  m='516980'>jug,</span> <span m='518030'>and</span> <span
  m='518520'>there's</span> <span m='519409'>still</span> <span
  m='519750'>2</span> <span m='519909'>gallons</span> <span m='520340'>in</span>
  <span m='520429'>the</span> <span m='520510'>little</span> <span
  m='520770'>one</span> <span m='520940'>and</span> <span m='521070'>5</span>
  <span m='521500'>gallons</span> <span m='521909'>of</span> <span
  m='521990'>the</span> <span m='522049'>big</span> <span m='522289'>one.</span>
  <span m='523010'>Now</span> <span m='523250'>we</span> <span
  m='523510'>pour</span> <span m='524059'>off</span> <span
  m='524930'>from</span> <span m='525270'>the</span> <span
  m='525420'>five</span> <span m='525820'>gallon</span> <span
  m='526200'>jug</span> <span m='526700'>until</span> <span
  m='527550'>the</span> <span m='527660'>one</span> <span
  m='527920'>gallon</span> <span m='528240'>jug</span> <span m='528490'>is
  full,</span> <span m='529120'>that's</span> <span m='529360'>removing</span>
  <span m='530560'>the</span> <span m='530730'>1</span> <span
  m='531040'>gallon</span> <span m='531570'>that</span> <span
  m='531730'>the</span> <span m='531840'>3</span> <span m='532090'>gallon</span>
  <span m='532480'>jug</span> <span m='532820'>still</span> <span
  m='533100'>has</span> <span m='533290'>capacity</span> <span
  m='533920'>for.</span> <span m='534610'>We</span> <span
  m='534830'>reduced</span> <span m='535330'>to</span> <span
  m='535630'>full</span> <span m='536140'>2</span> <span
  m='536530'>gallons</span> <span m='536890'>in the little</span> <span
  m='537280'>jug,</span> <span m='537600'>and</span> <span
  m='537770'>four</span> <span m='538180'>gallons,</span> <span
  m='538620'>our</span> <span m='538760'>target</span> <span
  m='539660'>in</span> <span m='539810'>the</span> <span m='539880'>big</span>
  <span m='540130'>jug.</span> <span m='542000'>So</span> <span
  m='542630'>we've</span> <span m='542980'>accomplished</span> <span
  m='543550'>it.</span> <span m='544430'>And</span> <span
  m='544860'>we're</span> <span m='545030'>done.</span> <span
  m='545730'>So</span> <span m='546090'>the</span> <span m='546180'>bomb</span>
  <span m='546430'>doesn't</span> <span m='546690'>go</span> <span
  m='547040'>off.</span> </p><p><span m='547310'>All</span> <span
  m='547400'>right.</span> <span m='548140'>So</span> <span
  m='548280'>the</span> <span m='548380'>point</span> <span m='548630'>of</span>
  <span m='548710'>this</span> <span m='549650'>exercise</span> <span
  m='550230'>is</span> <span m='550320'>really</span> <span
  m='550530'>just</span> <span m='550730'>to</span> <span
  m='550810'>practice</span> <span m='551310'>how</span> <span
  m='551460'>the</span> <span m='551570'>moves</span> <span
  m='551970'>work</span> <span m='552190'>and</span> <span
  m='552280'>what</span> <span m='552450'>the</span> <span
  m='552540'>states</span> <span m='552980'>are,</span> <span
  m='553690'>but</span> <span m='554300'>the</span> <span
  m='554410'>questions</span> <span m='554840'>I</span> <span
  m='554970'>want</span> <span m='555170'>to</span> <span
  m='555260'>raise</span> <span m='555700'>is</span> <span
  m='557230'>suppose</span> <span m='557670'>that</span> <span
  m='557790'>we</span> <span m='557930'>want</span> <span m='558140'>to</span>
  <span m='558770'>have</span> <span m='559200'>a</span> <span
  m='559560'>Die</span> <span m='559850'>Hard</span> <span
  m='560350'>once</span> <span m='560600'>and</span> <span m='560710'>for</span>
  <span m='560860'>all</span> <span m='561080'>scenario,</span> <span
  m='561880'>in</span> <span m='562230'>which</span> <span
  m='562500'>we're</span> <span m='562640'>tired</span> <span m='562930'>of
  the</span> <span m='563220'>remakes</span> <span m='563650'>of</span> <span
  m='563710'>these</span> <span m='563870'>movies.</span> <span
  m='564960'>And</span> <span m='565360'>we</span> <span
  m='565620'>proposed</span> <span m='566290'>that</span> <span
  m='566430'>in</span> <span m='566530'>the</span> <span m='566630'>next</span>
  <span m='566900'>movie,</span> <span m='568450'>that</span> <span
  m='568730'>Simon,</span> <span m='569450'>if</span> <span
  m='569680'>he's</span> <span m='569770'>still</span> <span
  m='570010'>around,</span> <span m='570730'>offers</span> <span
  m='571450'>an</span> <span m='571620'>alternative</span> <span
  m='572150'>challenge,</span> <span m='573070'>where</span> <span
  m='573220'>instead</span> <span m='573470'>of</span> <span m='573570'>a</span>
  <span m='573620'>three</span> <span m='573850'>gallon</span> <span
  m='574230'>and</span> <span m='574330'>a</span> <span m='574380'>five</span>
  <span m='574690'>gallon</span> <span m='575010'>jug,</span> <span
  m='575700'>there's</span> <span m='575890'>a</span> <span
  m='575950'>three</span> <span m='576220'>gallon</span> <span
  m='576580'>jug</span> <span m='577530'>and</span> <span m='577710'>a</span>
  <span m='577760'>nine</span> <span m='578150'>gallon</span> <span
  m='578530'>jug.</span> </p><p><span m='579620'>And</span> <span
  m='579860'>now</span> <span m='580100'>the</span> <span
  m='580220'>question</span> <span m='580760'>is,</span> <span
  m='582010'>can</span> <span m='582300'>you</span> <span m='582460'>get</span>
  <span m='582770'>four</span> <span m='583120'>gallons</span> <span
  m='584020'>into</span> <span m='584390'>the</span> <span m='585620'>big</span>
  <span m='585830'>jug</span> <span m='586750'>by</span> <span
  m='586900'>pouring</span> <span m='587250'>back</span> <span
  m='587490'>and</span> <span m='587610'>forth</span> <span
  m='587900'>with</span> <span m='588060'>rules</span> <span
  m='588340'>like</span> <span m='588580'>these,</span> <span
  m='589650'>or</span> <span m='589850'>can't</span> <span
  m='590160'>you?</span> <span m='590910'>And</span> <span m='591600'>can</span>
  <span m='591810'>you</span> <span m='591920'>prove</span> <span
  m='592280'>it?</span> <span m='593430'>Well</span> <span m='593700'>my</span>
  <span m='593860'>guess</span> <span m='594220'>is</span> <span
  m='594870'>that</span> <span m='595150'>you</span> <span
  m='595260'>probably</span> <span m='595880'>can</span> <span
  m='596070'>figure</span> <span m='596410'>out</span> <span
  m='596550'>what's</span> <span m='596780'>going</span> <span
  m='597090'>on,</span> <span m='598240'>because</span> <span
  m='599600'>what's</span> <span m='599840'>happening</span> <span
  m='600450'>is</span> <span m='600860'>if</span> <span m='601070'>you</span>
  <span m='601200'>start</span> <span m='601560'>off</span> <span
  m='602090'>with</span> <span m='602600'>nothing</span> <span
  m='603020'>in</span> <span m='603090'>either</span> <span
  m='603390'>jug,</span> <span m='604050'>and</span> <span m='604380'>you</span>
  <span m='605050'>do</span> <span m='605190'>these</span> <span
  m='605480'>moves</span> <span m='605890'>of</span> <span
  m='606030'>filling</span> <span m='606430'>up</span> <span m='606560'>a</span>
  <span m='606640'>jug</span> <span m='606990'>and</span> <span
  m='607080'>pouring</span> <span m='607390'>one</span> <span
  m='607600'>jug</span> <span m='607860'>into</span> <span
  m='608110'>another,</span> <span m='609130'>you'll</span> <span
  m='609320'>discover</span> <span m='610370'>that</span> <span
  m='611080'>the</span> <span m='611550'>amount</span> <span
  m='611990'>of</span> <span m='612110'>water</span> <span m='612510'>in</span>
  <span m='612620'>any</span> <span m='612830'>jug</span> <span
  m='613650'>is</span> <span m='613940'>always</span> <span
  m='614460'>divisible</span> <span m='615030'>by</span> <span
  m='615210'>3.</span> <span m='616340'>This</span> <span m='616540'>is</span>
  <span m='616670'>a</span> <span m='617050'>preserved</span> <span
  m='617750'>invariant.</span> </p><p><span m='618540'>Any</span> <span
  m='618790'>state</span> <span m='619170'>that</span> <span
  m='619280'>you</span> <span m='619420'>can</span> <span m='619600'>get</span>
  <span m='619830'>to,</span> <span m='620050'>starting</span> <span
  m='620520'>off</span> <span m='620760'>from</span> <span
  m='621030'>0,0,</span> <span m='622340'>3</span> <span m='622830'>will</span>
  <span m='623020'>divide</span> <span m='623520'>the</span> <span
  m='623580'>number</span> <span m='623980'>of</span> <span
  m='624110'>gallons</span> <span m='624960'>in</span> <span
  m='625090'>each</span> <span m='625470'>jug.</span> <span m='626550'>We</span>
  <span m='626640'>could</span> <span m='626760'>state</span> <span
  m='627040'>it</span> <span m='627170'>this</span> <span m='627410'>way.</span>
  <span m='627650'>There's</span> <span m='627890'>a</span> <span
  m='627970'>property</span> <span m='628540'>of</span> <span
  m='628620'>states,</span> <span m='629230'>property</span> <span
  m='629830'>of</span> <span m='630200'>b</span> <span m='630590'>and</span>
  <span m='630980'>l,</span> <span m='631230'>which</span> <span
  m='631820'>is</span> <span m='631950'>the</span> <span
  m='632050'>state,</span> <span m='632760'>which</span> <span
  m='633020'>is</span> <span m='633190'>that</span> <span m='633370'>3</span>
  <span m='633720'>divides</span> <span m='634240'>b--</span> <span
  m='634420'>that</span> <span m='634640'>vertical</span> <span
  m='635860'>line</span> <span m='636340'>is</span> <span m='636490'>a</span>
  <span m='637040'>shorthand</span> <span m='637540'>for</span> <span
  m='637630'>the</span> <span m='637740'>symbol</span> <span
  m='638070'>divides.</span> <span m='638990'>So</span> <span
  m='639240'>three</span> <span m='639500'>divides</span> <span
  m='639940'>b,</span> <span m='640120'>or</span> <span m='640180'>b</span>
  <span m='640350'>is</span> <span m='640460'>a</span> <span
  m='640500'>multiple</span> <span m='640980'>of</span> <span
  m='641130'>3.</span> <span m='641630'>3</span> <span m='642130'>divides</span>
  <span m='642550'>l.</span> <span m='642990'>Synonym,</span> <span m='643570'>l
  is a</span> <span m='643960'>multiple</span> <span m='644440'>of</span> <span
  m='644610'>3.</span> <span m='645110'>And</span> <span m='645340'>the</span>
  <span m='645420'>claim</span> <span m='645750'>is</span> <span
  m='645930'>that</span> <span m='646100'>that's</span> <span
  m='646510'>always</span> <span m='646920'>going</span> <span
  m='647080'>to</span> <span m='647150'>be</span> <span m='647320'>true.</span>
  </p><p><span m='649390'>So</span> <span m='649570'>in</span> <span
  m='649620'>case</span> <span m='649900'>that's</span> <span
  m='650160'>not</span> <span m='650400'>obvious,</span> <span
  m='651270'>you</span> <span m='651470'>might</span> <span
  m='651730'>not</span> <span m='651900'>have</span> <span m='652120'>all</span>
  <span m='652250'>the</span> <span m='652360'>rules</span> <span
  m='652650'>in</span> <span m='652750'>your</span> <span
  m='652890'>head.</span> <span m='653450'>Let's</span> <span
  m='653640'>just</span> <span m='653860'>take</span> <span m='654050'>a</span>
  <span m='654730'>look</span> <span m='654950'>at</span> <span
  m='655050'>one</span> <span m='655220'>of</span> <span m='655290'>the</span>
  <span m='655370'>more</span> <span m='655540'>complicated</span> <span
  m='656060'>rules.</span> <span m='656300'>This</span> <span
  m='656490'>was</span> <span m='656660'>the</span> <span m='656790'>rule</span>
  <span m='657090'>where</span> <span m='657240'>you're</span> <span
  m='658000'>pouring</span> <span m='658730'>the</span> <span
  m='658840'>big</span> <span m='659100'>jug</span> <span m='659440'>into</span>
  <span m='659680'>the</span> <span m='659780'>little</span> <span
  m='660070'>jug</span> <span m='660740'>up</span> <span m='661370'>until</span>
  <span m='661640'>the</span> <span m='661730'>little</span> <span
  m='661980'>jug is</span> <span m='662340'>full.</span> <span
  m='664420'>And</span> <span m='665310'>that</span> <span
  m='665550'>transition</span> <span m='666130'>is</span> <span
  m='666400'>that</span> <span m='666720'>if</span> <span
  m='666920'>you're</span> <span m='667090'>in</span> <span
  m='667170'>state</span> <span m='667650'>b, l,</span> <span
  m='668145'>you</span> <span m='668640'>move</span> <span m='669020'>to</span>
  <span m='669310'>b</span> <span m='669510'>minus</span> <span
  m='670000'>3</span> <span m='670160'>minus</span> <span m='670580'>l,</span>
  <span m='671030'>and</span> <span m='671220'>3.</span> </p><p><span
  m='672550'>And</span> <span m='673500'>if</span> <span m='673710'>you</span>
  <span m='673810'>look</span> <span m='673990'>at</span> <span
  m='674100'>this</span> <span m='674340'>now,</span> <span
  m='674530'>clearly</span> <span m='675120'>if</span> <span m='676300'>3</span>
  <span m='676680'>divides</span> <span m='677140'>both</span> <span
  m='677410'>b</span> <span m='677660'>and</span> <span m='677770'>l,</span>
  <span m='678116'>both</span> <span m='678810'>components</span> <span
  m='679310'>of</span> <span m='679410'>the</span> <span m='679490'>state</span>
  <span m='679820'>you're</span> <span m='680000'>at,</span> <span
  m='680530'>then</span> <span m='680780'>in</span> <span m='680940'>the</span>
  <span m='681010'>new</span> <span m='681240'>state,</span> <span
  m='681730'>well</span> <span m='681890'>3</span> <span
  m='682150'>obviously</span> <span m='682690'>divides</span> <span
  m='683060'>the</span> <span m='683150'>contents</span> <span
  m='683600'>of</span> <span m='683680'>the</span> <span
  m='683750'>little</span> <span m='684110'>jug,</span> <span
  m='684370'>which</span> <span m='684540'>is</span> <span m='684680'>3.</span>
  <span m='685590'>But</span> <span m='685980'>three</span> <span
  m='686330'>also</span> <span m='686720'>divides</span> <span
  m='687210'>the</span> <span m='687300'>contents</span> <span
  m='687810'>of</span> <span m='687880'>the</span> <span m='687970'>big</span>
  <span m='688210'>jug,</span> <span m='688520'>which</span> <span
  m='688770'>is</span> <span m='689320'>a</span> <span
  m='689430'>multiple</span> <span m='689890'>of</span> <span
  m='690040'>3,</span> <span m='690300'>namely</span> <span m='690670'>b</span>
  <span m='691160'>minus</span> <span m='691760'>3,</span> <span
  m='692220'>which</span> <span m='692420'>is</span> <span m='692500'>a</span>
  <span m='692540'>multiple</span> <span m='692980'>of</span> <span
  m='693110'>3</span> <span m='693340'>minus</span> <span m='693720'>w,</span>
  <span m='694120'>which</span> <span m='694290'>is</span> <span
  m='694390'>a</span> <span m='694450'>multiple</span> <span
  m='694950'>of</span> <span m='695090'>3.</span> </p><p><span
  m='695760'>When</span> <span m='695900'>you</span> <span
  m='696030'>take</span> <span m='696290'>a</span> <span
  m='696360'>linear</span> <span m='696700'>combination</span> <span
  m='697460'>of</span> <span m='698060'>multiples</span> <span
  m='698560'>of</span> <span m='698710'>3,</span> <span m='698940'>you</span>
  <span m='699020'>get</span> <span m='699200'>a</span> <span
  m='699240'>multiple</span> <span m='699730'>of</span> <span
  m='699850'>3.</span> <span m='700310'>And</span> <span m='700470'>you</span>
  <span m='700600'>look</span> <span m='700790'>at</span> <span
  m='700850'>all</span> <span m='701020'>the</span> <span
  m='701140'>other</span> <span m='701290'>transitions,</span> <span
  m='701920'>and</span> <span m='702030'>they</span> <span
  m='702130'>check</span> <span m='702430'>equally</span> <span
  m='702850'>well.</span> <span m='703580'>If</span> <span
  m='703790'>you're</span> <span m='704110'>in</span> <span m='704290'>a</span>
  <span m='704360'>state</span> <span m='704820'>b, l,</span> <span
  m='705450'>and</span> <span m='705570'>you</span> <span m='705670'>move</span>
  <span m='705940'>to</span> <span m='706090'>a</span> <span
  m='706140'>new</span> <span m='706320'>state</span> <span m='706740'>b</span>
  <span m='706930'>prime,</span> <span m='707230'>l</span> <span
  m='707410'>prime,</span> <span m='709130'>if</span> <span m='709790'>3</span>
  <span m='710080'>divides</span> <span m='710490'>b and</span> <span
  m='710780'>l,</span> <span m='711340'>then</span> <span m='711610'>3</span>
  <span m='711910'>divides</span> <span m='712820'>b</span> <span
  m='713020'>prime and</span> <span m='713500'>l</span> <span
  m='713710'>prime.</span> <span m='714310'>So</span> <span
  m='714460'>this</span> <span m='714680'>is</span> <span
  m='714800'>what's</span> <span m='715080'>called</span> <span
  m='715820'>a</span> <span m='716000'>preserved</span> <span
  m='716870'>invariant.</span> </p><p><span m='720050'>And</span> <span
  m='720240'>of</span> <span m='720290'>course</span> <span
  m='720500'>the</span> <span m='720580'>corollary</span> <span
  m='721230'>is</span> <span m='721810'>that</span> <span m='722460'>in</span>
  <span m='722770'>the</span> <span m='722910'>Die</span> <span
  m='723090'>Hard</span> <span m='723270'>once</span> <span
  m='723480'>and</span> <span m='723580'>for</span> <span m='723720'>all</span>
  <span m='723870'>game</span> <span m='724100'>with</span> <span
  m='724210'>the</span> <span m='725200'>3</span> <span m='725450'>gallon</span>
  <span m='725750'>jug</span> <span m='725990'>and</span> <span
  m='726070'>the</span> <span m='726120'>9</span> <span m='726370'>gallon</span>
  <span m='726700'>jug,</span> <span m='728040'>you</span> <span
  m='728100'>can't</span> <span m='728460'>get</span> <span m='728660'>to</span>
  <span m='728740'>any</span> <span m='728990'>state</span> <span m='729330'>of
  the</span> <span m='729450'>form</span> <span m='729780'>4, x,</span> <span
  m='730380'>because</span> <span m='730780'>4</span> <span m='731180'>is</span>
  <span m='731320'>not</span> <span m='731540'>divisible</span> <span
  m='732040'>by</span> <span m='732230'>3,</span> <span m='733000'>and</span>
  <span m='733340'>therefore</span> <span m='734140'>Bruce</span> <span
  m='734610'>is</span> <span m='734790'>going</span> <span m='734930'>to</span>
  <span m='735010'>die.</span> </p><p><span m='737110'>Now</span> <span
  m='737290'>what</span> <span m='737470'>we've</span> <span
  m='737710'>illustrated</span> <span m='738290'>here</span> <span
  m='739060'>is</span> <span m='739380'>an</span> <span
  m='739500'>argument</span> <span m='740070'>that's</span> <span
  m='740310'>known</span> <span m='740610'>as</span> <span
  m='740860'>Floyd's</span> <span m='741360'>Invariant</span> <span
  m='742060'>Principle,</span> <span m='743020'>and</span> <span
  m='743240'>it's</span> <span m='743380'>really</span> <span
  m='743620'>nothing</span> <span m='743920'>but</span> <span
  m='744090'>induction</span> <span m='744660'>reformulated</span> <span
  m='745440'>for</span> <span m='745550'>state</span> <span
  m='745900'>machines.</span> <span m='746930'>The</span> <span
  m='747960'>statement</span> <span m='748350'>of</span> <span
  m='748480'>what</span> <span m='748640'>is</span> <span
  m='748720'>invariant</span> <span m='749210'>principle</span> <span
  m='749760'>is</span> <span m='750230'>that</span> <span
  m='750800'>we're</span> <span m='751020'>going</span> <span
  m='751180'>to</span> <span m='751280'>define</span> <span m='751870'>a</span>
  <span m='751990'>preserved</span> <span m='752700'>invariant</span> <span
  m='753400'>as</span> <span m='753620'>a</span> <span
  m='753700'>property</span> <span m='754250'>of</span> <span
  m='754330'>states.</span> <span m='755450'>And</span> <span
  m='755590'>a</span> <span m='755650'>preserved</span> <span
  m='756070'>invariants</span> <span m='756520'>means</span> <span
  m='756760'>it</span> <span m='756830'>has</span> <span m='757080'>the</span>
  <span m='757180'>property</span> <span m='757475'>that</span> <span
  m='757770'>if</span> <span m='758060'>you're</span> <span m='758230'>in</span>
  <span m='758320'>a</span> <span m='758380'>state</span> <span
  m='758770'>that</span> <span m='758880'>has</span> <span
  m='759680'>property</span> <span m='760030'>p,</span> <span
  m='760820'>and</span> <span m='761040'>it's</span> <span
  m='761200'>possible</span> <span m='761760'>to</span> <span
  m='761850'>make</span> <span m='762400'>a</span> <span
  m='762500'>single</span> <span m='762840'>transition</span> <span
  m='764120'>to</span> <span m='764460'>state</span> <span m='764810'>r,</span>
  <span m='765740'>then</span> <span m='766100'>r</span> <span
  m='766490'>will</span> <span m='766780'>also</span> <span
  m='767140'>have</span> <span m='767370'>property</span> <span
  m='767890'>p.</span> <span m='768290'>This</span> <span m='768450'>is</span>
  <span m='768550'>just</span> <span m='768720'>like</span> <span
  m='768880'>the</span> <span m='769010'>induction</span> <span
  m='769440'>step.</span> <span m='769990'>We</span> <span
  m='770150'>have</span> <span m='770320'>to</span> <span
  m='770450'>prove</span> <span m='771150'>that</span> <span m='771300'>p</span>
  <span m='771600'>n</span> <span m='771750'>implies</span> <span
  m='772130'>p</span> <span m='772320'>of</span> <span m='772420'>n</span> <span
  m='772540'>plus</span> <span m='772840'>1.</span> </p><p><span
  m='774000'>So</span> <span m='774520'>if</span> <span m='774680'>you</span>
  <span m='774790'>have</span> <span m='775190'>a</span> <span
  m='775370'>preserved</span> <span m='775990'>invariant,</span> <span
  m='778080'>then</span> <span m='779750'>if</span> <span m='781100'>the</span>
  <span m='781290'>property</span> <span m='781740'>holds</span> <span
  m='782080'>at</span> <span m='782180'>the</span> <span m='782250'>start</span>
  <span m='782620'>state,</span> <span m='783700'>then</span> <span
  m='784170'>it's</span> <span m='784720'>obvious</span> <span
  m='786070'>that</span> <span m='786560'>the</span> <span
  m='786730'>property</span> <span m='787170'>will</span> <span
  m='787350'>hold</span> <span m='787720'>for</span> <span m='788070'>all</span>
  <span m='788370'>of</span> <span m='788420'>the</span> <span
  m='788510'>states</span> <span m='788880'>that</span> <span
  m='789000'>you</span> <span m='789120'>can</span> <span
  m='789280'>possibly</span> <span m='789780'>get</span> <span
  m='790035'>to.</span> <span m='791100'>That</span> <span m='791440'>p
  of</span> <span m='791715'>r</span> <span m='791990'>will</span> <span
  m='792170'>hold</span> <span m='792430'>for</span> <span m='792600'>all</span>
  <span m='792880'>reachable</span> <span m='793290'>states.</span> <span
  m='793790'>And you can</span> <span m='794040'>prove this</span> <span
  m='794190'>by</span> <span m='794310'>induction</span> <span
  m='794710'>on</span> <span m='794790'>the</span> <span
  m='794830'>number</span> <span m='795090'>of</span> <span
  m='795160'>states,</span> <span m='795520'>but</span> <span
  m='795640'>I</span> <span m='795710'>think</span> <span m='795960'>it's</span>
  <span m='796100'>clear</span> <span m='796360'>that</span> <span
  m='796910'>if</span> <span m='797000'>you</span> <span m='797070'>have</span>
  <span m='797250'>a</span> <span m='797330'>property</span> <span
  m='797820'>that</span> <span m='798610'>you</span> <span
  m='798720'>begin</span> <span m='799060'>with,</span> <span
  m='799320'>and</span> <span m='799420'>it</span> <span
  m='799500'>doesn't</span> <span m='799760'>change</span> <span
  m='800050'>making</span> <span m='800570'>a</span> <span
  m='800660'>step,</span> <span m='801060'>it's</span> <span
  m='801310'>never</span> <span m='801500'>going</span> <span
  m='801590'>to</span> <span m='801650'>change.</span> <span
  m='802670'>And</span> <span m='802870'>that's</span> <span
  m='803100'>all</span> <span m='803360'>that</span> <span
  m='803470'>Floyd's</span> <span m='803980'>invariant</span> <span
  m='804550'>principle</span> <span m='805020'>states.</span> </p><p><span
  m='805960'>So</span> <span m='806310'>in</span> <span
  m='806450'>particular,</span> <span m='808130'>since</span> <span
  m='808830'>the</span> <span m='808950'>property</span> <span
  m='809390'>p</span> <span m='809620'>holds</span> <span m='810000'>in
  all</span> <span m='810440'>reachable</span> <span m='810860'>states,</span>
  <span m='811320'>if</span> <span m='811490'>there</span> <span
  m='811690'>is</span> <span m='811780'>any</span> <span m='811980'>final</span>
  <span m='812440'>state</span> <span m='813160'>which</span> <span
  m='813380'>the</span> <span m='813460'>machine</span> <span
  m='814000'>reaches,</span> <span m='814990'>then</span> <span
  m='815830'>p</span> <span m='816180'>is</span> <span m='816330'>going</span>
  <span m='816470'>to</span> <span m='816510'>hold</span> <span
  m='817140'>in</span> <span m='817310'>that</span> <span
  m='817570'>state.</span> <span m='818010'>And</span> <span
  m='818530'>what</span> <span m='818700'>we</span> <span m='818830'>saw</span>
  <span m='819160'>was--</span> <span m='820820'>we're</span> <span
  m='820920'>using</span> <span m='821190'>the</span> <span
  m='821270'>word</span> <span m='821460'>preserved</span> <span
  m='822010'>invariant</span> <span m='822690'>to</span> <span
  m='822850'>distinguish</span> <span m='823630'>the</span> <span
  m='823780'>definition</span> <span m='824430'>here</span> <span
  m='825260'>from</span> <span m='825850'>another</span> <span
  m='826620'>usage</span> <span m='827230'>that's</span> <span
  m='827790'>co-opted</span> <span m='828450'>the</span> <span
  m='828530'>word</span> <span m='828770'>invariant</span> <span
  m='829660'>to</span> <span m='829900'>mean</span> <span m='830225'>a</span>
  <span m='830550'>property</span> <span m='831270'>that's</span> <span
  m='831490'>true</span> <span m='831760'>in</span> <span m='831840'>all</span>
  <span m='832040'>states.</span> </p><p><span m='833580'>And</span> <span
  m='833790'>while</span> <span m='834470'>it's</span> <span
  m='834690'>nice</span> <span m='834900'>to</span> <span m='834990'>know</span>
  <span m='835150'>that</span> <span m='835270'>some</span> <span
  m='835470'>property</span> <span m='835930'>is</span> <span
  m='836010'>true</span> <span m='836220'>in</span> <span m='836270'>all</span>
  <span m='836450'>states,</span> <span m='837420'>the</span> <span
  m='837790'>way</span> <span m='837960'>you</span> <span
  m='838070'>prove</span> <span m='838450'>that</span> <span
  m='838690'>is</span> <span m='838810'>by</span> <span m='838940'>having</span>
  <span m='839260'>a</span> <span m='839310'>preserved</span> <span
  m='839790'>invariance.</span> <span m='840360'>You</span> <span
  m='840480'>want</span> <span m='840580'>to</span> <span
  m='840670'>distinguish</span> <span m='841160'>the</span> <span
  m='841290'>two.</span> <span m='841750'>Technically</span> <span
  m='842220'>if</span> <span m='842320'>you</span> <span m='842430'>look</span>
  <span m='842630'>at</span> <span m='842730'>this,</span> <span
  m='843460'>the</span> <span m='843740'>predicate</span> <span
  m='844005'>that's</span> <span m='844270'>always</span> <span
  m='844690'>false</span> <span m='845570'>is</span> <span m='845810'>a</span>
  <span m='845870'>preserved</span> <span m='846360'>invariant.</span> <span
  m='847150'>Because</span> <span m='848256'>of</span> <span
  m='848610'>the</span> <span m='848760'>condition,</span> <span
  m='849330'>as</span> <span m='849490'>usual</span> <span m='849980'>the</span>
  <span m='850090'>way</span> <span m='850250'>implication</span> <span
  m='850910'>works.</span> <span m='851290'>If</span> <span
  m='851420'>the</span> <span m='851560'>antecedent</span> <span
  m='852200'>is</span> <span m='852340'>false,</span> <span
  m='853290'>then</span> <span m='853500'>the</span> <span
  m='853650'>entire</span> <span m='854120'>implication</span> <span
  m='854760'>is</span> <span m='854870'>true.</span> <span m='855490'>So</span>
  <span m='855740'>if</span> <span m='855920'>you're</span> <span
  m='856060'>always</span> <span m='856430'>false,</span> <span
  m='857290'>then</span> <span m='857450'>it's</span> <span
  m='857630'>always</span> <span m='857970'>the</span> <span
  m='858060'>case</span> <span m='858750'>that</span> <span m='859650'>if</span>
  <span m='860370'>false</span> <span m='860830'>held</span> <span
  m='861170'>in</span> <span m='861260'>a</span> <span m='861310'>state,</span>
  <span m='861620'>which</span> <span m='861780'>it</span> <span
  m='861870'>never</span> <span m='862100'>does,</span> <span
  m='862710'>then</span> <span m='862860'>it</span> <span m='862950'>has</span>
  <span m='863190'>to</span> <span m='863270'>hold</span> <span
  m='863610'>in</span> <span m='863840'>any</span> <span m='864080'>state</span>
  <span m='864340'>you</span> <span m='864560'>can get</span> <span
  m='864800'>to,</span> <span m='865030'>so</span> <span m='865160'>that</span>
  <span m='865830'>implication</span> <span m='866540'>is</span> <span
  m='866670'>true.</span> </p><p><span m='867450'>So</span> <span
  m='867890'>just</span> <span m='868220'>remember</span> <span
  m='868690'>that</span> <span m='869150'>preserved</span> <span
  m='869590'>invariants</span> <span m='870150'>that</span> <span
  m='870260'>are</span> <span m='870370'>constantly</span> <span
  m='870970'>false</span> <span m='872420'>exist,</span> <span
  m='873430'>they</span> <span m='873600'>are</span> <span
  m='873750'>good</span> <span m='873980'>preserved</span> <span
  m='874370'>in</span> <span m='874440'>variance.</span> <span
  m='874960'>But</span> <span m='875060'>they're</span> <span
  m='875210'>not</span> <span m='875550'>what</span> <span
  m='875800'>other</span> <span m='876010'>people</span> <span
  m='876350'>would</span> <span m='876510'>call</span> <span
  m='876810'>an</span> <span m='876910'>invariant.</span> <span
  m='877790'>We</span> <span m='877900'>use</span> <span
  m='878200'>preserved</span> <span m='878790'>invariance</span> <span
  m='879440'>to</span> <span m='879560'>prove</span> <span
  m='880160'>that</span> <span m='880330'>a</span> <span
  m='880430'>property</span> <span m='881390'>is</span> <span
  m='881630'>true</span> <span m='882270'>in</span> <span m='882450'>all</span>
  <span m='882730'>states.</span> <span m='883220'>It's</span> <span
  m='883430'>a</span> <span m='883480'>methodology.</span> </p><p><span
  m='887350'>So</span> <span m='887550'>let's</span> <span m='887740'>do</span>
  <span m='887850'>one</span> <span m='888040'>more</span> <span
  m='888230'>example</span> <span m='888700'>to</span> <span
  m='889020'>wrap</span> <span m='889280'>this</span> <span
  m='889490'>up.</span> <span m='889770'>Suppose</span> <span
  m='890240'>I</span> <span m='890310'>have</span> <span m='890570'>a</span>
  <span m='890740'>robot</span> <span m='891280'>on</span> <span
  m='891520'>a</span> <span m='891580'>grid,</span> <span m='893030'>the</span>
  <span m='893160'>integer</span> <span m='893560'>grid,</span> <span
  m='894180'>and</span> <span m='894410'>we</span> <span m='894530'>can</span>
  <span m='894680'>think</span> <span m='894930'>then of</span> <span
  m='895140'>the</span> <span m='895240'>coordinates</span> <span
  m='895910'>of</span> <span m='895990'>the</span> <span
  m='896120'>integer</span> <span m='896570'>as</span> <span m='896690'>a</span>
  <span m='896770'>pair</span> <span m='897450'>of--</span> <span
  m='897570'>the</span> <span m='897700'>coordinates</span> <span
  m='898240'>of</span> <span m='898300'>the</span> <span m='898430'>robot</span>
  <span m='899240'>as</span> <span m='899780'>the</span> <span
  m='899910'>coordinates</span> <span m='900430'>of</span> <span
  m='900510'>the</span> <span m='900600'>square</span> <span
  m='900990'>that</span> <span m='901140'>it's</span> <span
  m='901350'>in,</span> <span m='902080'>a</span> <span m='902220'>pair</span>
  <span m='902710'>of</span> <span m='902860'>non-negative</span> <span
  m='903510'>integers.</span> <span m='904950'>Now</span> <span
  m='905490'>the</span> <span m='905610'>way</span> <span m='905750'>that</span>
  <span m='906060'>this</span> <span m='906270'>robot</span> <span
  m='906770'>can</span> <span m='906960'>move</span> <span m='907440'>is</span>
  <span m='907700'>we</span> <span m='907810'>can</span> <span
  m='908010'>make</span> <span m='908210'>a</span> <span
  m='908280'>diagonal</span> <span m='908810'>move</span> <span
  m='909080'>in</span> <span m='909350'>one</span> <span m='909590'>step.</span>
  <span m='910100'>So</span> <span m='910410'>it</span> <span
  m='910510'>could</span> <span m='910660'>move</span> <span
  m='910900'>one</span> <span m='911080'>step</span> <span m='911440'>to</span>
  <span m='911550'>the</span> <span m='912240'>northeast</span> <span
  m='912700'>or</span> <span m='913520'>southeast</span> <span
  m='914190'>or</span> <span m='914270'>northwest</span> <span
  m='914565'>or</span> <span m='914860'>southwest</span> <span
  m='915550'>and</span> <span m='915650'>that's</span> <span
  m='915930'>it.</span> </p><p><span m='916365'>And</span> <span
  m='916800'>the</span> <span m='916910'>question</span> <span
  m='917350'>I</span> <span m='917380'>want</span> <span m='917580'>to</span>
  <span m='917660'>ask</span> <span m='918090'>is,</span> <span
  m='918960'>suppose</span> <span m='919360'>you</span> <span
  m='919450'>start</span> <span m='919770'>the</span> <span
  m='919860'>robot</span> <span m='920220'>off</span> <span m='920450'>at</span>
  <span m='920530'>the</span> <span m='920680'>origin,</span> <span
  m='921025'>at</span> <span m='921370'>0,0.</span> <span m='923030'>Is</span>
  <span m='923310'>there</span> <span m='923450'>some</span> <span
  m='923760'>way</span> <span m='923970'>that it</span> <span
  m='924200'>can</span> <span m='924420'>wander</span> <span
  m='924920'>around,</span> <span m='925310'>following</span> <span
  m='925790'>its</span> <span m='925940'>moves,</span> <span
  m='926330'>and</span> <span m='926510'>get</span> <span m='927480'>to</span>
  <span m='927660'>a</span> <span m='927770'>next</span> <span
  m='927990'>state</span> <span m='928380'>where</span> <span
  m='928520'>it's</span> <span m='928640'>moved</span> <span m='928920'>1</span>
  <span m='929100'>square</span> <span m='929500'>over?</span> <span
  m='929780'>That</span> <span m='930020'>is,</span> <span m='930260'>it</span>
  <span m='930400'>gets</span> <span m='931170'>to</span> <span
  m='931360'>the</span> <span m='931490'>square</span> <span
  m='933000'>0,1.</span> </p><p><span m='936860'>The</span> <span
  m='937050'>answer to</span> <span m='937300'>that</span> <span
  m='937530'>is</span> <span m='937620'>settled</span> <span
  m='938050'>again</span> <span m='938350'>by</span> <span m='938570'>a</span>
  <span m='938660'>preserved</span> <span m='939210'>invariant.</span> <span
  m='940080'>I</span> <span m='940210'>don't</span> <span m='940420'>know</span>
  <span m='940550'>whether</span> <span m='941400'>it's</span> <span
  m='941600'>obvious</span> <span m='942030'>to</span> <span
  m='942150'>you</span> <span m='942340'>yet,</span> <span m='942740'>but</span>
  <span m='942760'>it</span> <span m='942830'>will</span> <span
  m='943040'>be</span> <span m='943190'>in</span> <span m='943270'>a</span>
  <span m='943320'>moment.</span> <span m='944400'>I'm</span> <span
  m='944620'>claiming</span> <span m='945160'>you</span> <span
  m='945340'>can't</span> <span m='945820'>get</span> <span m='946200'>to
  the</span> <span m='946290'>square</span> <span m='946650'>0,1,</span> <span
  m='947390'>and</span> <span m='947540'>the</span> <span
  m='947630'>reason</span> <span m='948060'>is</span> <span
  m='949070'>that</span> <span m='950020'>there's</span> <span
  m='950340'>are</span> <span m='950410'>preserved</span> <span
  m='950990'>invariant</span> <span m='951650'>of</span> <span
  m='951750'>that</span> <span m='951970'>set</span> <span m='952180'>of</span>
  <span m='952310'>robot</span> <span m='952750'>moves,</span> <span
  m='953200'>namely</span> <span m='954260'>the</span> <span
  m='954380'>sum</span> <span m='954790'>of</span> <span m='955000'>the</span>
  <span m='955120'>coordinates</span> <span m='956630'>is</span> <span
  m='956890'>even</span> <span m='957360'>is</span> <span m='957610'>an</span>
  <span m='957690'>invariant.</span> <span m='958105'>If</span> <span
  m='958520'>the</span> <span m='958610'>sum</span> <span m='958880'>of</span>
  <span m='958920'>the</span> <span m='959000'>coordinates</span> <span
  m='959530'>is</span> <span m='959660'>even,</span> <span m='960220'>it</span>
  <span m='960440'>stays</span> <span m='960970'>even.</span> </p><p><span
  m='961910'>And</span> <span m='962060'>why</span> <span m='962310'>is</span>
  <span m='962490'>that?</span> <span m='962940'>Well,</span> <span
  m='963760'>any</span> <span m='964040'>move</span> <span
  m='965470'>adds</span> <span m='966350'>plus</span> <span m='966940'>or</span>
  <span m='967000'>minus</span> <span m='967380'>1</span> <span
  m='967960'>to</span> <span m='968130'>the</span> <span
  m='968830'>coordinates</span> <span m='969630'>of</span> <span
  m='969810'>both</span> <span m='970260'>x</span> <span m='970500'>and</span>
  <span m='970600'>y.</span> <span m='972410'>Maybe</span> <span
  m='973370'>x</span> <span m='973670'>and</span> <span m='973760'>y</span>
  <span m='974900'>both</span> <span m='975280'>go</span> <span
  m='975480'>up</span> <span m='975740'>by</span> <span m='975900'>1,</span>
  <span m='976230'>in</span> <span m='976320'>which</span> <span
  m='976560'>case,</span> <span m='977230'>the</span> <span
  m='977310'>sum</span> <span m='977610'>of</span> <span m='977730'>x</span>
  <span m='977970'>and</span> <span m='978070'>y</span> <span
  m='978290'>increases</span> <span m='978740'>by</span> <span
  m='978880'>2.</span> <span m='979170'>So</span> <span m='979350'>if</span>
  <span m='979440'>it</span> <span m='979510'>was</span> <span
  m='979720'>even,</span> <span m='980080'>it stays</span> <span
  m='980410'>even,</span> <span m='980690'>or</span> <span
  m='980830'>they</span> <span m='980970'>both</span> <span m='981270'>go</span>
  <span m='981390'>down</span> <span m='981700'>by</span> <span
  m='981860'>1,</span> <span m='982410'>or</span> <span m='982540'>maybe</span>
  <span m='982780'>one</span> <span m='982980'>goes</span> <span
  m='983240'>up</span> <span m='983370'>and</span> <span m='983440'>the</span>
  <span m='983560'>other</span> <span m='983710'>goes</span> <span
  m='983950'>down,</span> <span m='984310'>in</span> <span
  m='984410'>which</span> <span m='984460'>case,</span> <span
  m='985080'>the</span> <span m='985180'>sum</span> <span
  m='985460'>doesn't</span> <span m='985800'>change</span> <span
  m='986630'>in</span> <span m='986820'>every</span> <span
  m='987200'>case.</span> <span m='989060'>If</span> <span m='989450'>x</span>
  <span m='989680'>plus</span> <span m='989930'>y</span> <span
  m='990160'>was</span> <span m='990340'>even,</span> <span m='990600'>it</span>
  <span m='990700'>stays</span> <span m='991020'>even.</span> <span
  m='991250'>As</span> <span m='991450'>a</span> <span m='991500'>matter</span>
  <span m='991760'>of</span> <span m='991830'>fact,</span> <span
  m='992460'>if</span> <span m='992550'>it</span> <span m='992640'>was</span>
  <span m='992850'>odd,</span> <span m='993200'>it</span> <span
  m='993360'>stays</span> <span m='993780'>odd.</span> <span
  m='994550'>Moves</span> <span m='995090'>actually</span> <span
  m='995500'>preserve</span> <span m='995920'>the</span> <span
  m='996000'>parity</span> <span m='996480'>of</span> <span m='996570'>x</span>
  <span m='996770'>plus</span> <span m='997040'>y.</span> <span
  m='997280'>But</span> <span m='997480'>the</span> <span
  m='997620'>invariant</span> <span m='998290'>is</span> <span
  m='998950'>that</span> <span m='999340'>x</span> <span m='999680'>plus</span>
  <span m='1000040'>y</span> <span m='1000470'>is</span> <span
  m='1000750'>even.</span> </p><p><span m='1002020'>Now,</span> <span
  m='1002350'>what</span> <span m='1002520'>else</span> <span
  m='1002780'>is</span> <span m='1002910'>the</span> <span
  m='1003010'>case.</span> <span m='1003850'>Well</span> <span
  m='1004790'>0,0--</span> <span m='1007110'>0</span> <span
  m='1007350'>plus</span> <span m='1007590'>0</span> <span m='1007930'>is</span>
  <span m='1008130'>0,</span> <span m='1008410'>which</span> <span
  m='1008580'>is</span> <span m='1008690'>even.</span> <span
  m='1009740'>And</span> <span m='1009950'>so</span> <span
  m='1010150'>we're</span> <span m='1010290'>in</span> <span
  m='1010890'>Floyd</span> <span m='1011270'>invariant</span> <span
  m='1011820'>principal</span> <span m='1012300'>case,</span> <span
  m='1013220'>where</span> <span m='1014900'>all</span> <span
  m='1015170'>the</span> <span m='1015290'>positions</span> <span
  m='1015820'>you</span> <span m='1015940'>can</span> <span
  m='1016120'>get</span> <span m='1016360'>to</span> <span
  m='1016530'>from</span> <span m='1017170'>the</span> <span
  m='1017350'>origin</span> <span m='1017770'>0,0,</span> <span
  m='1018450'>which</span> <span m='1018710'>has</span> <span
  m='1018950'>an</span> <span m='1019050'>even</span> <span
  m='1019370'>sum,</span> <span m='1020160'>have</span> <span
  m='1020480'>to</span> <span m='1020560'>have</span> <span
  m='1020820'>an</span> <span m='1020900'>even</span> <span
  m='1021280'>sum.</span> <span m='1022360'>And</span> <span
  m='1022590'>since</span> <span m='1024000'>1</span> <span
  m='1024410'>plus</span> <span m='1024829'>0</span> <span m='1025290'>is</span>
  <span m='1025829'>odd,</span> <span m='1026900'>you</span> <span
  m='1027109'>can't</span> <span m='1027569'>get</span> <span
  m='1027970'>to</span> <span m='1028170'>that</span> <span
  m='1028560'>square,</span> <span m='1029700'>1,0.</span> <span
  m='1030740'>It's</span> <span m='1031359'>not</span> <span
  m='1032260'>reachable.</span> </p><p><span m='1035390'>So</span> <span
  m='1035579'>the</span> <span m='1035680'>parity</span> <span
  m='1036060'>invariant</span> <span m='1036660'>of</span> <span
  m='1036819'>the</span> <span m='1037369'>diagonally</span> <span
  m='1037960'>moving</span> <span m='1038450'>robot</span> <span
  m='1038910'>will</span> <span m='1039079'>set</span> <span
  m='1039300'>us</span> <span m='1039490'>up</span> <span m='1039670'>for</span>
  <span m='1041300'>an</span> <span m='1041480'>analysis</span> <span
  m='1042530'>of</span> <span m='1042780'>the</span> <span m='1042880'>15</span>
  <span m='1043290'>puzzle</span> <span m='1043640'>game.</span> <span
  m='1044369'>That's</span> <span m='1044670'>this</span> <span
  m='1045050'>logo</span> <span m='1045520'>that</span> <span
  m='1045740'>we've</span> <span m='1045910'>had</span> <span
  m='1046119'>on</span> <span m='1046260'>every</span> <span
  m='1046490'>slide</span> <span m='1046819'>in</span> <span
  m='1046900'>6042</span> <span m='1047740'>so</span> <span
  m='1047990'>far</span> <span m='1048329'>with</span> <span
  m='1048569'>6</span> <span m='1048970'>blank,</span> <span
  m='1049380'>4,</span> <span m='1049670'>2,</span> <span m='1049930'>on</span>
  <span m='1050050'>the</span> <span m='1050130'>diagonal.</span> <span
  m='1051490'>This</span> <span m='1051760'>is</span> <span m='1051870'>a</span>
  <span m='1051910'>game</span> <span m='1052420'>where</span> <span
  m='1052980'>there</span> <span m='1053160'>are</span> <span
  m='1053230'>these</span> <span m='1053470'>little</span> <span
  m='1053690'>numbered</span> <span m='1054660'>tiles</span> <span
  m='1055170'>that</span> <span m='1055370'>slide</span> <span
  m='1055850'>into</span> <span m='1056300'>the</span> <span
  m='1056400'>blank</span> <span m='1056750'>square,</span> <span
  m='1057390'>and</span> <span m='1057620'>the</span> <span
  m='1057700'>question</span> <span m='1058080'>is</span> <span
  m='1058170'>how</span> <span m='1058270'>to</span> <span
  m='1058410'>permute--</span> <span m='1059960'>how</span> <span
  m='1060060'>to</span> <span m='1060110'>get</span> <span
  m='1060270'>from</span> <span m='1060460'>one</span> <span
  m='1060720'>permutations</span> <span m='1061320'>of</span> <span
  m='1061370'>the</span> <span m='1061460'>numbers</span> <span
  m='1061830'>to</span> <span m='1061990'>another.</span> </p><p><span
  m='1064140'>It</span> <span m='1064280'>turns</span> <span
  m='1064560'>out</span> <span m='1064760'>that</span> <span
  m='1064920'>the</span> <span m='1065030'>analysis</span> <span
  m='1065590'>of</span> <span m='1065670'>that</span> <span
  m='1065920'>game</span> <span m='1066150'>depends</span> <span
  m='1066620'>on</span> <span m='1066750'>a</span> <span
  m='1066790'>parity</span> <span m='1067250'>invariant</span> <span
  m='1068350'>reminiscent</span> <span m='1069010'>of</span> <span
  m='1069240'>a</span> <span m='1069330'>slightly</span> <span
  m='1069610'>more</span> <span m='1069750'>sophisticated</span> <span
  m='1070980'>than the</span> <span m='1071390'>diagonally</span> <span
  m='1072210'>moving</span> <span m='1072540'>robot.</span> </p><p><span
  m='1074100'>Let's</span> <span m='1074400'>look</span> <span
  m='1074620'>at</span> <span m='1074770'>one</span> <span
  m='1075020'>more</span> <span m='1075330'>example</span> <span
  m='1076570'>of</span> <span m='1077450'>using</span> <span
  m='1077820'>the</span> <span m='1077940'>invariant</span> <span
  m='1078480'>to</span> <span m='1078560'>verify</span> <span
  m='1079270'>a</span> <span m='1079390'>little</span> <span
  m='1079700'>algorithm</span> <span m='1079970'>that</span> <span
  m='1080240'>actually</span> <span m='1080640'>will</span> <span
  m='1080770'>be</span> <span m='1080910'>quite</span> <span
  m='1081170'>important</span> <span m='1082400'>as</span> <span
  m='1082720'>the</span> <span m='1082810'>course</span> <span
  m='1083070'>progresses,</span> <span m='1083610'>and</span> <span
  m='1083700'>that</span> <span m='1083850'>is</span> <span
  m='1083990'>fast</span> <span m='1084310'>exponentiation.</span> <span
  m='1085720'>So</span> <span m='1085890'>in</span> <span
  m='1085970'>this</span> <span m='1086190'>set</span> <span
  m='1086370'>up,</span> <span m='1087150'>a</span> <span m='1087320'>is</span>
  <span m='1087470'>a</span> <span m='1087530'>real</span> <span
  m='1087730'>number</span> <span m='1088060'>and b</span> <span
  m='1088300'>is</span> <span m='1088440'>a</span> <span
  m='1089080'>non-negative</span> <span m='1089600'>integer.</span> <span
  m='1090020'>I</span> <span m='1090080'>want</span> <span m='1090250'>to</span>
  <span m='1090310'>compute</span> <span m='1090830'>the</span> <span
  m='1091070'>b power</span> <span m='1091410'>of</span> <span
  m='1091510'>a.</span> </p><p><span m='1091750'>Let's</span> <span
  m='1092000'>say</span> <span m='1093150'>b</span> <span m='1093400'>was</span>
  <span m='1094890'>128,</span> <span m='1095980'>and</span> <span
  m='1096160'>I</span> <span m='1096190'>want</span> <span m='1096390'>to</span>
  <span m='1096460'>compute</span> <span m='1096910'>the</span> <span
  m='1096990'>128th</span> <span m='1097860'>power</span> <span
  m='1098250'>of</span> <span m='1098370'>some</span> <span
  m='1098630'>real</span> <span m='1098850'>number</span> <span
  m='1099260'>a.</span> <span m='1100350'>Well,</span> <span
  m='1100700'>I</span> <span m='1100780'>can</span> <span
  m='1100970'>multiply</span> <span m='1101500'>a</span> <span
  m='1101670'>by</span> <span m='1101880'>itself</span> <span
  m='1102240'>127</span> <span m='1103190'>times,</span> <span
  m='1103860'>that</span> <span m='1104020'>would</span> <span
  m='1104130'>work</span> <span m='1104330'>fine.</span> <span
  m='1105230'>But</span> <span m='1105580'>you</span> <span
  m='1105690'>think</span> <span m='1105990'>about</span> <span
  m='1106270'>it,</span> <span m='1106500'>suppose</span> <span
  m='1107010'>I</span> <span m='1107150'>square</span> <span
  m='1107750'>a</span> <span m='1108180'>and then</span> <span
  m='1108610'>I</span> <span m='1108670'>square</span> <span
  m='1109070'>it</span> <span m='1109120'>again,</span> <span
  m='1110080'>and</span> <span m='1110240'>I</span> <span
  m='1110320'>square</span> <span m='1110670'>it</span> <span
  m='1110720'>again,</span> <span m='1111910'>then</span> <span
  m='1112340'>in</span> <span m='1112490'>about</span> <span
  m='1112770'>eight</span> <span m='1112970'>squarings,</span> <span
  m='1113930'>instead</span> <span m='1114250'>of</span> <span
  m='1114670'>99</span> <span m='1115120'>multiplications,</span> <span
  m='1116510'>I'm</span> <span m='1116680'>going</span> <span
  m='1116860'>to</span> <span m='1116910'>get</span> <span m='1117280'>to</span>
  <span m='1117750'>8 of the</span> <span m='1118152'>128th.</span> <span
  m='1120310'>Now</span> <span m='1120610'>if</span> <span m='1120850'>b</span>
  <span m='1121100'>is</span> <span m='1121230'>not</span> <span
  m='1121390'>a</span> <span m='1121460'>power</span> <span
  m='1121740'>of</span> <span m='1121850'>two,</span> <span
  m='1122000'>you</span> <span m='1122160'>adjust</span> <span
  m='1122580'>it</span> <span m='1122680'>slightly,</span> <span
  m='1124040'>and</span> <span m='1124720'>using</span> <span
  m='1125100'>that</span> <span m='1125360'>idea,</span> <span
  m='1126010'>you</span> <span m='1126230'>can</span> <span
  m='1126510'>compute</span> <span m='1127230'>the</span> <span
  m='1128130'>bth</span> <span m='1128620'>power</span> <span m='1129040'>of
  a</span> <span m='1129150'>much</span> <span m='1130220'>more</span> <span
  m='1130440'>rapidly</span> <span m='1130805'>than</span> <span
  m='1131170'>if</span> <span m='1131310'>you</span> <span
  m='1131410'>just</span> <span m='1131670'>naively</span> <span
  m='1132180'>multiplied</span> <span m='1132720'>out</span> <span
  m='1132940'>b</span> <span m='1133090'>minus</span> <span m='1133430'>1</span>
  <span m='1133690'>times.</span> </p><p><span m='1134490'>So</span> <span
  m='1134630'>let's</span> <span m='1134840'>look</span> <span
  m='1135000'>at</span> <span m='1135080'>the</span> <span
  m='1135170'>pseudocode</span> <span m='1135910'>for</span> <span
  m='1136020'>this</span> <span m='1136250'>algorithm.</span> <span
  m='1137640'>Here,</span> <span m='1138720'>XYZ</span> <span
  m='1139390'>in</span> <span m='1139510'>our</span> <span
  m='1139760'>temporary</span> <span m='1140160'>registers</span> <span
  m='1142170'>y</span> <span m='1142490'>and</span> <span m='1142670'>z,</span>
  <span m='1143110'>hold--</span> <span m='1144810'>y,</span> <span
  m='1145115'>z,</span> <span m='1145420'>and r</span> <span
  m='1145620'>all</span> <span m='1145830'>hold</span> <span
  m='1146070'>integers.</span> <span m='1146560'>And x</span> <span
  m='1146780'>holds</span> <span m='1147200'>this</span> <span
  m='1147380'>real</span> <span m='1147680'>number</span> <span
  m='1148160'>a.</span> <span m='1149430'>And</span> <span
  m='1149800'>you</span> <span m='1149940'>can</span> <span
  m='1150110'>read</span> <span m='1150350'>the</span> <span
  m='1150460'>code</span> <span m='1151850'>if</span> <span
  m='1152040'>you</span> <span m='1152170'>wish</span> <span
  m='1152610'>but</span> <span m='1152750'>in</span> <span
  m='1152840'>fact,</span> <span m='1153340'>I'm</span> <span
  m='1153470'>going</span> <span m='1153610'>to</span> <span
  m='1153730'>immediately</span> <span m='1154480'>jump</span> <span
  m='1154840'>to</span> <span m='1155000'>the</span> <span
  m='1155450'>slightly</span> <span m='1155820'>more</span> <span
  m='1156000'>abstract</span> <span m='1156460'>and</span> <span
  m='1156540'>easier</span> <span m='1156850'>to</span> <span
  m='1156900'>understand</span> <span m='1157400'>version</span> <span
  m='1157740'>of</span> <span m='1157860'>it</span> <span m='1157920'>as</span>
  <span m='1158050'>a</span> <span m='1158090'>state</span> <span
  m='1158430'>machine.</span> </p><p><span m='1159540'>So</span> <span
  m='1159810'>what</span> <span m='1160050'>matters</span> <span
  m='1160460'>about</span> <span m='1160820'>this</span> <span
  m='1161160'>fast</span> <span m='1161480'>exponentiation</span> <span
  m='1162330'>algorithm</span> <span m='1162900'>as</span> <span
  m='1163010'>a</span> <span m='1163060'>state</span> <span
  m='1163390'>machine</span> <span m='1163760'>is</span> <span
  m='1164520'>that</span> <span m='1164660'>first</span> <span
  m='1164950'>of</span> <span m='1165070'>all,</span> <span
  m='1166240'>there</span> <span m='1166340'>are</span> <span
  m='1166380'>three</span> <span m='1166690'>states</span> <span
  m='1167810'>to</span> <span m='1168240'>real</span> <span
  m='1168530'>numbers,</span> <span m='1169670'>and</span> <span
  m='1171770'>a</span> <span m='1172190'>non-negative</span> <span
  m='1172830'>integer.</span> <span m='1174830'>And</span> <span
  m='1175140'>the</span> <span m='1175220'>start</span> <span
  m='1175540'>state</span> <span m='1175840'>is</span> <span
  m='1175990'>going</span> <span m='1176150'>to</span> <span
  m='1176210'>be</span> <span m='1176960'>that</span> <span
  m='1177330'>the</span> <span m='1177530'>number</span> <span
  m='1178070'>a</span> <span m='1178580'>is</span> <span m='1178850'>in</span>
  <span m='1179760'>the</span> <span m='1179880'>first</span> <span
  m='1180220'>register,</span> <span m='1181270'>or</span> <span m='1181410'>in
  the</span> <span m='1181530'>first</span> <span m='1181800'>location,</span>
  <span m='1182300'>first</span> <span m='1182520'>coordinate</span> <span
  m='1183100'>of</span> <span m='1183200'>the</span> <span
  m='1183270'>states.</span> <span m='1184150'>1</span> <span
  m='1184820'>is</span> <span m='1185040'>the</span> <span
  m='1185160'>real</span> <span m='1185380'>number</span> <span
  m='1185690'>in</span> <span m='1185780'>the</span> <span
  m='1185850'>second</span> <span m='1186180'>coordinate,</span> <span
  m='1186920'>and</span> <span m='1187150'>b</span> <span m='1187900'>the</span>
  <span m='1188050'>target</span> <span m='1188500'>exponent,</span> <span
  m='1189990'>is</span> <span m='1190170'>the</span> <span
  m='1190300'>non-negative</span> <span m='1190870'>integer</span> <span
  m='1191320'>in</span> <span m='1191480'>the</span> <span
  m='1191590'>third</span> <span m='1191930'>component.</span> </p><p><span
  m='1194600'>The</span> <span m='1194730'>transitions</span> <span
  m='1195260'>are</span> <span m='1195360'>going</span> <span
  m='1195500'>to</span> <span m='1195550'>be</span> <span m='1195690'>as</span>
  <span m='1195820'>follows.</span> <span m='1196460'>Here's</span> <span
  m='1196640'>a</span> <span m='1196690'>simple</span> <span
  m='1197060'>one.</span> <span m='1198240'>If</span> <span m='1198600'>I</span>
  <span m='1198750'>have</span> <span m='1199560'>an</span> <span
  m='1199750'>amount</span> <span m='1200120'>x</span> <span
  m='1200740'>in</span> <span m='1201410'>the</span> <span
  m='1201660'>first</span> <span m='1201940'>location,</span> <span
  m='1202420'>y</span> <span m='1202700'>in</span> <span m='1202800'>the</span>
  <span m='1202870'>second</span> <span m='1203180'>location,</span> <span
  m='1203810'>z</span> <span m='1204030'>in</span> <span m='1204160'>the</span>
  <span m='1204270'>third,</span> <span m='1205300'>then</span> <span
  m='1206170'>if</span> <span m='1206500'>z</span> <span m='1206740'>is</span>
  <span m='1206890'>positive</span> <span m='1208430'>and</span> <span
  m='1208570'>even,</span> <span m='1210110'>then</span> <span
  m='1210910'>I'm</span> <span m='1211070'>going to</span> <span
  m='1211090'>square</span> <span m='1211630'>x,</span> <span
  m='1212630'>leave</span> <span m='1212950'>y</span> <span
  m='1213210'>alone,</span> <span m='1213930'>and</span> <span
  m='1214510'>divide</span> <span m='1215020'>z</span> <span
  m='1215230'>by</span> <span m='1215390'>2.</span> <span m='1217170'>And</span>
  <span m='1217370'>that's</span> <span m='1217640'>the</span> <span
  m='1217730'>new</span> <span m='1217910'>state</span> <span
  m='1218260'>that</span> <span m='1218390'>I</span> <span
  m='1218460'>get.</span> <span m='1218930'>On</span> <span
  m='1219100'>the</span> <span m='1219230'>other</span> <span
  m='1219360'>hand,</span> <span m='1219760'>if</span> <span
  m='1219860'>z</span> <span m='1220050'>is</span> <span m='1220240'>odd</span>
  <span m='1221490'>and</span> <span m='1221670'>positive,</span> <span
  m='1222830'>then</span> <span m='1223240'>I'm</span> <span
  m='1223380'>going</span> <span m='1223510'>to</span> <span
  m='1223580'>square</span> <span m='1224080'>x,</span> <span
  m='1225080'>multiply</span> <span m='1225720'>y</span> <span
  m='1226700'>by</span> <span m='1227010'>x,</span> <span m='1227840'>and</span>
  <span m='1228020'>again</span> <span m='1228740'>take</span> <span
  m='1229180'>the</span> <span m='1229290'>quotient</span> <span
  m='1229750'>of</span> <span m='1229810'>z,</span> <span
  m='1229990'>divide</span> <span m='1230360'>z</span> <span
  m='1230570'>by</span> <span m='1230750'>2.</span> </p><p><span
  m='1233010'>OK.</span> <span m='1233930'>Why</span> <span
  m='1234090'>does</span> <span m='1234250'>this</span> <span
  m='1234670'>state</span> <span m='1235020'>machine</span> <span
  m='1235790'>do</span> <span m='1236180'>fast</span> <span
  m='1236520'>exponentiation,</span> <span m='1236955'>why</span> <span
  m='1237390'>is it</span> <span m='1237720'>correct?</span> <span
  m='1238280'>And</span> <span m='1238380'>the</span> <span
  m='1238480'>insight</span> <span m='1238940'>is</span> <span
  m='1239230'>that</span> <span m='1239440'>there's</span> <span
  m='1239730'>a</span> <span m='1239880'>preserved</span> <span
  m='1240510'>invariant</span> <span m='1241130'>of</span> <span
  m='1241230'>this</span> <span m='1241430'>machine.</span> <span
  m='1242290'>And</span> <span m='1242460'>the</span> <span
  m='1242550'>preserved</span> <span m='1242990'>invariant</span> <span
  m='1243650'>is</span> <span m='1244400'>that</span> <span m='1244650'>y</span>
  <span m='1245200'>times</span> <span m='1245640'>x</span> <span
  m='1245930'>to</span> <span m='1246030'>the</span> <span m='1246200'>z</span>
  <span m='1246500'>is</span> <span m='1246800'>always</span> <span
  m='1247510'>a</span> <span m='1247860'>to</span> <span m='1247940'>the</span>
  <span m='1248050'>b.</span> <span m='1249240'>SO</span> <span
  m='1249600'>let's</span> <span m='1249870'>see</span> <span
  m='1249990'>how</span> <span m='1250140'>to</span> <span
  m='1250220'>verify</span> <span m='1250750'>that,</span> <span
  m='1251250'>that</span> <span m='1251930'>yx</span> <span
  m='1252900'>to</span> <span m='1253000'>the</span> <span m='1253160'>z</span>
  <span m='1253900'>is</span> <span m='1254270'>equal</span> <span
  m='1254600'>to</span> <span m='1254880'>a to</span> <span
  m='1254980'>the</span> <span m='1255110'>b.</span> </p><p><span
  m='1256900'>Let's</span> <span m='1257160'>just</span> <span
  m='1257380'>look</span> <span m='1257610'>at</span> <span
  m='1259030'>maybe</span> <span m='1259250'>the</span> <span
  m='1259370'>slightly</span> <span m='1259650'>more</span> <span
  m='1259860'>interesting</span> <span m='1260290'>of</span> <span
  m='1260380'>the two</span> <span m='1260490'>transition</span> <span
  m='1261230'>rules,</span> <span m='1261590'>which</span> <span
  m='1261900'>is</span> <span m='1262080'>when</span> <span m='1262280'>z</span>
  <span m='1262510'>is</span> <span m='1262660'>positive</span> <span
  m='1263180'>and</span> <span m='1263310'>odd,</span> <span
  m='1264790'>the</span> <span m='1265270'>xyz</span> <span
  m='1266640'>state</span> <span m='1267060'>moves</span> <span
  m='1267310'>to</span> <span m='1267430'>a</span> <span m='1267480'>new</span>
  <span m='1267650'>state,</span> <span m='1268830'>indicated</span> <span
  m='1269310'>in</span> <span m='1269400'>green.</span> <span
  m='1270040'>Where</span> <span m='1270240'>the</span> <span
  m='1270260'>new</span> <span m='1270450'>value</span> <span
  m='1270850'>of</span> <span m='1270980'>x</span> <span m='1271220'>is</span>
  <span m='1271330'>x</span> <span m='1271520'>squared,</span> <span
  m='1271940'>the</span> <span m='1272010'>new</span> <span
  m='1272190'>value</span> <span m='1272550'>of</span> <span
  m='1272680'>y</span> <span m='1272950'>is</span> <span m='1273090'>xy,</span>
  <span m='1274050'>and</span> <span m='1274310'>the new</span> <span
  m='1274470'>value</span> <span m='1274850'>of</span> <span
  m='1274950'>z</span> <span m='1275950'>is</span> <span m='1276380'>z</span>
  <span m='1276570'>minus</span> <span m='1276910'>1</span> <span
  m='1277120'>over</span> <span m='1277360'>2.</span> <span
  m='1277560'>Remember,</span> <span m='1277900'>you</span> <span
  m='1278000'>went</span> <span m='1278180'>to</span> <span
  m='1278270'>the</span> <span m='1278370'>quotient</span> <span
  m='1279080'>of</span> <span m='1279240'>z</span> <span
  m='1279610'>divided</span> <span m='1279950'>by</span> <span
  m='1280090'>2,</span> <span m='1280400'>and</span> <span
  m='1280490'>when</span> <span m='1280670'>z</span> <span m='1280870'>is</span>
  <span m='1281050'>odd,</span> <span m='1281840'>that</span> <span
  m='1282050'>means</span> <span m='1282450'>z minus--</span> <span
  m='1282710'>it's</span> <span m='1282910'>literally</span> <span
  m='1283360'>z</span> <span m='1283560'>minus</span> <span m='1283900'>1</span>
  <span m='1284120'>over</span> <span m='1284410'>2.</span> </p><p><span
  m='1285130'>Well,</span> <span m='1285710'>do</span> <span
  m='1285840'>the</span> <span m='1285970'>new</span> <span
  m='1286240'>values</span> <span m='1287060'>satisfy</span> <span
  m='1287670'>the</span> <span m='1287850'>invariant</span> <span
  m='1288480'>if</span> <span m='1288640'>I</span> <span
  m='1288730'>plug-in</span> <span m='1289270'>the</span> <span
  m='1289360'>green</span> <span m='1289670'>values</span> <span
  m='1291010'>of</span> <span m='1291210'>x</span> <span
  m='1291430'>squared</span> <span m='1291730'>for</span> <span
  m='1291890'>y</span> <span m='1292243'>and</span> <span m='1292596'>xy</span>
  <span m='1292950'>for</span> <span m='1293550'>x--</span> <span
  m='1294680'>I'm</span> <span m='1294940'>sorry,</span> <span
  m='1295400'>x</span> <span m='1295670'>squared</span> <span
  m='1296190'>for</span> <span m='1296780'>x,</span> <span m='1297586'>xy</span>
  <span m='1297990'>for</span> <span m='1298160'>y,</span> <span
  m='1298650'>and</span> <span m='1298790'>z</span> <span
  m='1298920'>minus</span> <span m='1299210'>1</span> <span
  m='1299400'>over</span> <span m='1299620'>2</span> <span
  m='1299820'>for</span> <span m='1299990'>z?</span> <span
  m='1300210'>Well</span> <span m='1300340'>let's</span> <span
  m='1300530'>see</span> <span m='1300630'>what</span> <span
  m='1300800'>happens.</span> <span m='1302700'>If</span> <span
  m='1302960'>I</span> <span m='1304620'>take</span> <span
  m='1306380'>the</span> <span m='1306580'>new</span> <span
  m='1306770'>value</span> <span m='1307070'>of</span> <span
  m='1307160'>y,</span> <span m='1307410'>which</span> <span
  m='1307500'>is</span> <span m='1307580'>xy,</span> <span
  m='1309060'>and</span> <span m='1309240'>I</span> <span
  m='1309290'>multiply</span> <span m='1309890'>it</span> <span
  m='1310050'>by</span> <span m='1310220'>the</span> <span
  m='1310340'>new</span> <span m='1310550'>value</span> <span
  m='1310990'>of</span> <span m='1311100'>x,</span> <span
  m='1311790'>which</span> <span m='1311910'>is</span> <span
  m='1312010'>x</span> <span m='1312230'>squared,</span> <span
  m='1313020'>raised</span> <span m='1313310'>to</span> <span
  m='1313400'>the</span> <span m='1313500'>new</span> <span
  m='1313650'>value</span> <span m='1314030'>of</span> <span
  m='1314130'>z,</span> <span m='1314390'>which</span> <span
  m='1314610'>is</span> <span m='1314750'>z</span> <span
  m='1314880'>minus</span> <span m='1315230'>1</span> <span
  m='1315700'>over</span> <span m='1315930'>2.</span> </p><p><span
  m='1317420'>Let's</span> <span m='1317780'>do</span> <span
  m='1317890'>a</span> <span m='1317950'>little</span> <span
  m='1318220'>algebraic</span> <span m='1318770'>simplification</span> <span
  m='1319530'>of</span> <span m='1319620'>that.</span> <span
  m='1320420'>Well,</span> <span m='1320820'>the</span> <span
  m='1321060'>x</span> <span m='1321320'>squared</span> <span
  m='1321740'>to</span> <span m='1321830'>the z</span> <span
  m='1321980'>minus</span> <span m='1322410'>1</span> <span
  m='1322570'>over</span> <span m='1322750'>2</span> <span
  m='1322930'>becomes</span> <span m='1323320'>x</span> <span
  m='1323560'>to</span> <span m='1323650'>the</span> <span m='1323750'>z</span>
  <span m='1323910'>minus</span> <span m='1324250'>1.</span> <span
  m='1325520'>And</span> <span m='1326030'>I'm</span> <span
  m='1326220'>just</span> <span m='1326450'>carrying</span> <span
  m='1326840'>over</span> <span m='1327050'>the</span> <span
  m='1327200'>xy.</span> <span m='1328600'>And</span> <span
  m='1328830'>then</span> <span m='1329120'>that</span> <span
  m='1329410'>simplifies</span> <span m='1330120'>to</span> <span
  m='1330250'>simply</span> <span m='1331490'>y</span> <span
  m='1332000'>times</span> <span m='1332780'>x</span> <span
  m='1333140'>times</span> <span m='1333790'>x</span> <span
  m='1334020'>to</span> <span m='1334100'>the</span> <span m='1334190'>z</span>
  <span m='1334340'>minus</span> <span m='1334650'>1,</span> <span
  m='1334990'>or</span> <span m='1335170'>yz</span> <span m='1335680'>to</span>
  <span m='1335780'>the</span> <span m='1335940'>z,</span> <span
  m='1336752'>which</span> <span m='1337550'>we</span> <span
  m='1337730'>assumed</span> <span m='1338180'>was</span> <span
  m='1338320'>equal</span> <span m='1338580'>to</span> <span
  m='1338690'>a</span> <span m='1338860'>to</span> <span m='1338940'>the</span>
  <span m='1339020'>b,</span> <span m='1339300'>so</span> <span
  m='1339400'>sure</span> <span m='1339710'>enough,</span> <span
  m='1340500'>the</span> <span m='1340620'>new</span> <span
  m='1341000'>values</span> <span m='1341520'>of</span> <span
  m='1341610'>x,</span> <span m='1341710'>y,</span> <span m='1342050'>and</span>
  <span m='1342190'>z</span> <span m='1342710'>satisfy</span> <span
  m='1343280'>the</span> <span m='1343460'>invariant.</span> <span
  m='1344170'>It's</span> <span m='1344640'>a</span> <span
  m='1344720'>preserved</span> <span m='1345220'>invariant,</span> <span
  m='1345920'>and</span> <span m='1346220'>an even</span> <span
  m='1346430'>simpler</span> <span m='1346880'>argument</span> <span
  m='1347260'>applies</span> <span m='1348140'>to</span> <span
  m='1348280'>the</span> <span m='1348420'>other</span> <span
  m='1348640'>transition,</span> <span m='1349520'>when</span> <span
  m='1349780'>z</span> <span m='1349990'>is</span> <span
  m='1350150'>positive</span> <span m='1350470'>and</span> <span
  m='1350790'>even.</span> <span m='1351910'>So</span> <span
  m='1352530'>we</span> <span m='1352730'>verified</span> <span
  m='1353490'>that</span> <span m='1353630'>this</span> <span
  m='1353810'>is</span> <span m='1353940'>a</span> <span
  m='1354010'>preserved</span> <span m='1354490'>invariant.</span> </p><p><span
  m='1355740'>Now</span> <span m='1355880'>at</span> <span
  m='1355990'>the</span> <span m='1356080'>start,</span> <span
  m='1357590'>remember,</span> <span m='1358340'>we</span> <span
  m='1358560'>start</span> <span m='1358900'>off</span> <span
  m='1359260'>with</span> <span m='1360790'>the</span> <span
  m='1361250'>real</span> <span m='1361470'>number</span> <span m='1361900'>a
  in</span> <span m='1362250'>register</span> <span m='1362710'>x,</span> <span
  m='1363070'>the</span> <span m='1363170'>real</span> <span
  m='1363350'>number</span> <span m='1363620'>b</span> <span
  m='1364080'>in</span> <span m='1364760'>z,</span> <span m='1365300'>and</span>
  <span m='1365460'>the</span> <span m='1365540'>real</span> <span
  m='1365750'>number</span> <span m='1366060'>1</span> <span
  m='1366480'>in</span> <span m='1366820'>y,</span> <span
  m='1368010'>which</span> <span m='1368330'>is</span> <span
  m='1368420'>the</span> <span m='1368550'>accumulator.</span> <span
  m='1369840'>And</span> <span m='1370950'>1</span> <span
  m='1371320'>times</span> <span m='1371630'>a</span> <span
  m='1371730'>to</span> <span m='1371920'>b</span> <span m='1372090'>is</span>
  <span m='1372200'>equal</span> <span m='1372430'>to</span> <span
  m='1372530'>a</span> <span m='1372610'>to</span> <span m='1372800'>b.</span>
  <span m='1372990'>So</span> <span m='1373160'>this</span> <span
  m='1373380'>is</span> <span m='1373550'>a--</span> <span
  m='1374120'>this</span> <span m='1374360'>preserved</span> <span
  m='1374790'>invariant</span> <span m='1375260'>is</span> <span
  m='1375400'>true</span> <span m='1375680'>of</span> <span
  m='1375780'>the</span> <span m='1375840'>start</span> <span
  m='1376180'>state.</span> </p><p><span m='1377420'>That</span> <span
  m='1377680'>means</span> <span m='1377950'>by</span> <span
  m='1378110'>Floyd's</span> <span m='1378450'>Invariant</span> <span
  m='1378950'>Principle,</span> <span m='1380020'>that</span> <span
  m='1380630'>it</span> <span m='1380840'>is</span> <span
  m='1381320'>true</span> <span m='1381900'>at</span> <span
  m='1382240'>this</span> <span m='1382650'>the</span> <span
  m='1382760'>final</span> <span m='1383110'>state,</span> <span
  m='1383550'>if</span> <span m='1383740'>and</span> <span
  m='1383840'>when</span> <span m='1384020'>the</span> <span
  m='1384130'>thing</span> <span m='1384360'>stops.</span> <span
  m='1385410'>Well,</span> <span m='1386360'>when</span> <span
  m='1386550'>does</span> <span m='1386700'>this</span> <span
  m='1386880'>machine</span> <span m='1387220'>stop?</span> <span
  m='1387670'>As</span> <span m='1387800'>long</span> <span m='1387990'>as
  z</span> <span m='1388240'>is</span> <span m='1388380'>positive,</span> <span
  m='1388890'>it</span> <span m='1388970'>can</span> <span
  m='1389100'>keep</span> <span m='1389290'>moving.</span> <span
  m='1390400'>So</span> <span m='1390730'>it</span> <span
  m='1390880'>gets</span> <span m='1391180'>stuck</span> <span
  m='1391600'>when</span> <span m='1391820'>z</span> <span m='1392060'>is</span>
  <span m='1392240'>0?</span> </p><p><span m='1393610'>What</span> <span
  m='1393810'>happens</span> <span m='1394340'>if</span> <span
  m='1394480'>it</span> <span m='1394570'>ever</span> <span
  m='1394770'>gets</span> <span m='1395100'>to</span> <span m='1395210'>z
  is</span> <span m='1395470'>0?</span> <span m='1396710'>If</span> <span
  m='1396860'>it</span> <span m='1396980'>gets</span> <span
  m='1397200'>stuck,</span> <span m='1397990'>then</span> <span
  m='1398600'>the</span> <span m='1398820'>invariant</span> <span
  m='1399410'>says</span> <span m='1399870'>that</span> <span
  m='1400520'>yx</span> <span m='1401770'>to</span> <span m='1401890'>the</span>
  <span m='1401990'>0</span> <span m='1402490'>has</span> <span
  m='1402770'>to</span> <span m='1402890'>equal</span> <span
  m='1403220'>a</span> <span m='1403470'>to</span> <span m='1403570'>the</span>
  <span m='1403700'>b.</span> <span m='1404640'>But</span> <span
  m='1404780'>of</span> <span m='1404840'>course,</span> <span
  m='1405090'>yx</span> <span m='1405750'>to</span> <span m='1405850'>the</span>
  <span m='1405940'>0</span> <span m='1406330'>is</span> <span
  m='1406440'>nothing</span> <span m='1406710'>but</span> <span
  m='1406920'>y.</span> <span m='1407940'>And</span> <span
  m='1408140'>what</span> <span m='1408320'>we</span> <span
  m='1408470'>conclude</span> <span m='1409190'>is,</span> <span
  m='1409560'>that</span> <span m='1409730'>sure</span> <span
  m='1410030'>enough,</span> <span m='1410630'>this</span> <span
  m='1410850'>machine</span> <span m='1411440'>leaves</span> <span
  m='1411830'>the</span> <span m='1411950'>desired</span> <span
  m='1412660'>exponential</span> <span m='1413430'>value</span> <span
  m='1414310'>in</span> <span m='1414840'>the</span> <span
  m='1414980'>register</span> <span m='1415440'>y,</span> <span
  m='1416130'>which</span> <span m='1416370'>is</span> <span
  m='1416450'>where</span> <span m='1416600'>we</span> <span
  m='1416700'>get</span> <span m='1416920'>the</span> <span
  m='1417060'>answer.</span> <span m='1417850'>And</span> <span
  m='1418010'>that's</span> <span m='1418240'>why</span> <span
  m='1418980'>this</span> <span m='1419170'>algorithm</span> <span
  m='1420040'>is</span> <span m='1420220'>correct.</span> </p><p><span
  m='1422970'>Now</span> <span m='1423140'>another</span> <span
  m='1423510'>aspect</span> <span m='1424380'>of</span> <span
  m='1426410'>what's</span> <span m='1426650'>going</span> <span
  m='1426880'>on</span> <span m='1427080'>here</span> <span
  m='1427720'>is</span> <span m='1428170'>proving</span> <span
  m='1428790'>that</span> <span m='1428950'>the</span> <span
  m='1429070'>algorithm</span> <span m='1429600'>does</span> <span
  m='1429860'>terminate.</span> <span m='1430430'>So</span> <span
  m='1430590'>let</span> <span m='1430740'>me</span> <span
  m='1430830'>just</span> <span m='1431020'>say</span> <span
  m='1431180'>a</span> <span m='1431270'>word</span> <span
  m='1431950'>that</span> <span m='1432380'>Floyd</span> <span
  m='1434270'>distinguished</span> <span m='1435080'>sort</span> <span
  m='1435360'>of</span> <span m='1435430'>these</span> <span
  m='1435610'>two</span> <span m='1435840'>aspects</span> <span
  m='1436360'>of</span> <span m='1436460'>program</span> <span
  m='1436880'>correctness</span> <span m='1437400'>that</span> <span
  m='1437520'>typically</span> <span m='1437950'>come</span> <span
  m='1438210'>up.</span> <span m='1438390'>One</span> <span
  m='1438670'>is</span> <span m='1438760'>showing</span> <span
  m='1439060'>that</span> <span m='1439360'>if</span> <span
  m='1439540'>you</span> <span m='1439680'>get</span> <span
  m='1439850'>an</span> <span m='1439980'>answer,</span> <span
  m='1440510'>it's</span> <span m='1440690'>correct,</span> <span
  m='1441140'>and</span> <span m='1441220'>that's</span> <span
  m='1441410'>what</span> <span m='1441520'>we</span> <span
  m='1441630'>just</span> <span m='1441890'>did.</span> <span
  m='1442690'>If</span> <span m='1442990'>this</span> <span
  m='1443210'>machine</span> <span m='1443630'>stops,</span> <span
  m='1444250'>if</span> <span m='1444370'>it</span> <span
  m='1444460'>ever</span> <span m='1444650'>gets</span> <span
  m='1445040'>to</span> <span m='1445660'>the</span> <span
  m='1445760'>case</span> <span m='1446080'>where</span> <span
  m='1446210'>z</span> <span m='1446470'>is</span> <span m='1446620'>0,</span>
  <span m='1447400'>then</span> <span m='1447790'>y</span> <span
  m='1448180'>has</span> <span m='1448460'>the</span> <span
  m='1448560'>right</span> <span m='1448820'>answer.</span> <span
  m='1449700'>But</span> <span m='1449820'>we</span> <span
  m='1449900'>haven't</span> <span m='1450200'>proved</span> <span
  m='1450530'>that it</span> <span m='1450630'>stops.</span> </p><p><span
  m='1451790'>So</span> <span m='1451890'>we've</span> <span
  m='1452070'>shown</span> <span m='1452430'>that</span> <span
  m='1452590'>it's</span> <span m='1453420'>partially</span> <span
  m='1454020'>correct</span> <span m='1454620'>like</span> <span
  m='1454820'>a</span> <span m='1454900'>partial</span> <span
  m='1455370'>function.</span> <span m='1456770'>It</span> <span
  m='1456970'>might</span> <span m='1457180'>not</span> <span
  m='1457340'>be</span> <span m='1457470'>defined</span> <span
  m='1457900'>everywhere,</span> <span m='1458230'>we</span> <span
  m='1458560'>haven't</span> <span m='1458760'>shown</span> <span
  m='1459030'>that</span> <span m='1459250'>yet,</span> <span
  m='1459490'>but</span> <span m='1459620'>when</span> <span
  m='1459750'>it</span> <span m='1459840'>is</span> <span
  m='1459970'>defined,</span> <span m='1460260'>if</span> <span
  m='1460440'>gives the</span> <span m='1460530'>right</span> <span
  m='1460750'>answer.</span> </p><p><span m='1461520'>The</span> <span
  m='1461800'>other</span> <span m='1462050'>aspect</span> <span
  m='1462590'>of</span> <span m='1462690'>correctness</span> <span
  m='1463250'>is</span> <span m='1463440'>termination,</span> <span
  m='1464580'>showing</span> <span m='1465090'>in</span> <span
  m='1465220'>effect,</span> <span m='1465640'>that</span> <span
  m='1465750'>the</span> <span m='1465830'>function</span> <span
  m='1466190'>is</span> <span m='1466290'>total,</span> <span
  m='1467050'>that</span> <span m='1467230'>the</span> <span
  m='1467320'>program</span> <span m='1467810'>always</span> <span
  m='1468250'>does</span> <span m='1468480'>stop.</span> <span
  m='1469280'>Well</span> <span m='1469520'>in</span> <span
  m='1469620'>this</span> <span m='1469830'>case,</span> <span
  m='1470240'>there's</span> <span m='1470350'>an</span> <span
  m='1470440'>easy</span> <span m='1470730'>way</span> <span
  m='1470920'>to</span> <span m='1471020'>see</span> <span
  m='1471230'>why</span> <span m='1471490'>it</span> <span
  m='1471600'>always</span> <span m='1471910'>stops.</span> <span
  m='1472780'>Because</span> <span m='1473210'>at</span> <span
  m='1473310'>every</span> <span m='1473600'>transition,</span> <span
  m='1475390'>z</span> <span m='1475640'>is</span> <span
  m='1475840'>being</span> <span m='1476770'>halved</span> <span
  m='1477320'>or</span> <span m='1477530'>more.</span> <span
  m='1477875'>z</span> <span m='1478220'>is</span> <span m='1478690'>a</span>
  <span m='1480650'>non-negative</span> <span m='1481300'>integer</span> <span
  m='1482100'>valued</span> <span m='1482490'>variable.</span> </p><p><span
  m='1484080'>And</span> <span m='1485610'>since</span> <span
  m='1485900'>we're</span> <span m='1486110'>halving</span> <span
  m='1486670'>it,</span> <span m='1486860'>or</span> <span
  m='1487050'>making</span> <span m='1487260'>it</span> <span
  m='1487350'>even</span> <span m='1487610'>smaller</span> <span
  m='1488030'>than</span> <span m='1488180'>half</span> <span
  m='1488510'>of</span> <span m='1488660'>it</span> <span m='1488810'>at</span>
  <span m='1488960'>every</span> <span m='1489320'>step,</span> <span
  m='1490460'>it</span> <span m='1490690'>means</span> <span
  m='1491190'>that</span> <span m='1491370'>since</span> <span
  m='1491630'>it</span> <span m='1491760'>starts</span> <span
  m='1492140'>with</span> <span m='1492300'>the</span> <span
  m='1492370'>value</span> <span m='1493720'>z,</span> <span
  m='1495100'>it</span> <span m='1495860'>can't</span> <span
  m='1496280'>get</span> <span m='1496510'>smaller,</span> <span
  m='1497010'>more</span> <span m='1497220'>than</span> <span
  m='1497390'>log</span> <span m='1497680'>to</span> <span
  m='1497790'>the</span> <span m='1497900'>base</span> <span
  m='1498220'>2</span> <span m='1498610'>of b</span> <span
  m='1498820'>times,</span> <span m='1499300'>because</span> <span
  m='1499750'>by</span> <span m='1500050'>then,</span> <span
  m='1500210'>it</span> <span m='1500330'>would</span> <span
  m='1500440'>have</span> <span m='1500530'>hit</span> <span
  m='1500720'>0.</span> <span m='1501500'>And</span> <span m='1501730'>so</span>
  <span m='1501930'>we</span> <span m='1502080'>can</span> <span
  m='1502230'>be</span> <span m='1502350'>sure</span> <span
  m='1502860'>that</span> <span m='1503110'>this</span> <span
  m='1503370'>machine</span> <span m='1503870'>makes</span> <span
  m='1504160'>it</span> <span m='1504280'>most</span> <span
  m='1505000'>log</span> <span m='1505310'>to</span> <span
  m='1505420'>the</span> <span m='1505530'>base</span> <span
  m='1505880'>2</span> <span m='1506110'>of</span> <span m='1506240'>b</span>
  <span m='1506430'>transitions.</span> <span m='1508000'>And</span> <span
  m='1508250'>then</span> <span m='1508570'>it</span> <span
  m='1508720'>has</span> <span m='1509060'>to</span> <span
  m='1509170'>get</span> <span m='1509380'>stuck</span> <span
  m='1510120'>at</span> <span m='1510380'>the</span> <span
  m='1510480'>only</span> <span m='1510520'>place</span> <span
  m='1510810'>it</span> <span m='1511000'>can</span> <span
  m='1511250'>get</span> <span m='1511560'>stuck,</span> <span
  m='1511870'>which</span> <span m='1512150'>is</span> <span
  m='1512440'>when</span> <span m='1512640'>z</span> <span
  m='1512790'>equals</span> <span m='1513140'>0.</span> </p><p><span
  m='1514620'>And</span> <span m='1514840'>there</span> <span
  m='1515020'>is</span> <span m='1515120'>a</span> <span
  m='1515190'>picture</span> <span m='1515730'>of</span> <span
  m='1515980'>my</span> <span m='1518400'>friend,</span> <span
  m='1518830'>an</span> <span m='1518990'>early</span> <span
  m='1519280'>colleague,</span> <span m='1519950'>Bob</span> <span
  m='1520210'>Floyd,</span> <span m='1521680'>whom</span> <span
  m='1521960'>I</span> <span m='1522040'>met</span> <span m='1522390'>at</span>
  <span m='1522550'>the</span> <span m='1522620'>very</span> <span
  m='1522860'>beginning</span> <span m='1523250'>of</span> <span
  m='1523360'>my</span> <span m='1523490'>career</span> <span
  m='1524290'>at</span> <span m='1524940'>Carnegie</span> <span
  m='1525320'>Mellon</span> <span m='1525600'>University.</span> <span
  m='1526820'>We</span> <span m='1526990'>worked</span> <span
  m='1527220'>together</span> <span m='1527570'>for</span> <span
  m='1527700'>about</span> <span m='1527920'>one</span> <span
  m='1528170'>year</span> <span m='1528390'>before</span> <span
  m='1528730'>he</span> <span m='1528830'>went</span> <span
  m='1528990'>off</span> <span m='1529170'>to</span> <span
  m='1529300'>Stanford.</span> <span m='1530330'>And</span> <span
  m='1530490'>you</span> <span m='1530620'>can</span> <span
  m='1530800'>read</span> <span m='1532700'>much</span> <span
  m='1532910'>more</span> <span m='1533070'>about</span> <span
  m='1533240'>his</span> <span m='1533410'>life</span> <span
  m='1533730'>in</span> <span m='1534550'>a</span> <span m='1534880'>warm</span>
  <span m='1535380'>and</span> <span m='1537240'>detailed</span> <span
  m='1537850'>eulogy</span> <span m='1538370'>written</span> <span
  m='1538620'>by</span> <span m='1538810'>his</span> <span
  m='1539370'>best</span> <span m='1539610'>friend,</span> <span
  m='1540270'>Don</span> <span m='1540750'>Knuth.</span> <span
  m='1542030'>Floyd</span> <span m='1542580'>won</span> <span
  m='1542820'>the</span> <span m='1542900'>Turing</span> <span
  m='1543220'>Award</span> <span m='1544840'>for</span> <span
  m='1545120'>his</span> <span m='1545340'>major</span> <span
  m='1545680'>contributions,</span> <span m='1546820'>both</span> <span
  m='1547140'>to</span> <span m='1547740'>program</span> <span
  m='1548110'>correctness</span> <span m='1548780'>and</span> <span
  m='1549100'>to</span> <span m='1549970'>programming</span> <span
  m='1550500'>language</span> <span m='1551100'>parsing.</span> </p>
uid: 893cbbfeccf5130ecd64f525d69cd901
type: course
layout: video
---
