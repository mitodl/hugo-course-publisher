---
title: 'Video 6: The CP Parameter'
uid: f9cbbfc8e55567a7e230811e9fd7c2e6
parent_uid: 14da7d12ae8a4e886ad3ec1166945b9c
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-6-the-cp-parameter/video-6-the-cp-parameter-0
short_url: video-6-the-cp-parameter-0
inline_embed_id: 62326559video6thecpparameter51737652
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4490'>The</span> <span m='5206'>cp</span> <span
  m='5922'>parameter--</span> <span m='6638'>cp</span> <span
  m='7355'>stands</span> <span m='8071'>for</span> <span
  m='8787'>complexity</span> <span m='9503'>parameter.</span> </p><p><span
  m='10220'>Recall</span> <span m='10500'>that</span> <span m='10780'>the</span>
  <span m='11060'>first</span> <span m='11340'>tree</span> <span
  m='11620'>we</span> <span m='11900'>made</span> <span m='12180'>using</span>
  <span m='12611'>latitude</span> <span m='13042'>and</span> <span
  m='13473'>longitude</span> <span m='13905'>only</span> <span
  m='14336'>had</span> <span m='14767'>many</span> <span
  m='15198'>splits,</span> <span m='15630'>but</span> <span m='15970'>we</span>
  <span m='16310'>were</span> <span m='16650'>able</span> <span
  m='16990'>to</span> <span m='17330'>trim</span> <span m='17670'>it</span>
  <span m='18010'>without</span> <span m='18350'>losing</span> <span
  m='18690'>much</span> <span m='19030'>accuracy.</span> </p><p><span
  m='19370'>The</span> <span m='19663'>intuition</span> <span
  m='19956'>we</span> <span m='20250'>gain</span> <span m='20543'>is,</span>
  <span m='20836'>having</span> <span m='21130'>too</span> <span
  m='21423'>many</span> <span m='21716'>splits</span> <span m='22010'>is</span>
  <span m='22377'>bad</span> <span m='22744'>for</span> <span
  m='23111'>generalization--</span> <span m='23478'>that</span> <span
  m='23845'>is,</span> <span m='24212'>performance</span> <span
  m='24579'>on</span> <span m='24946'>the</span> <span m='25313'>test</span>
  <span m='25680'>set--</span> <span m='26001'>so</span> <span
  m='26322'>we</span> <span m='26644'>should</span> <span
  m='26965'>penalize</span> <span m='27287'>the</span> <span
  m='27608'>complexity.</span> </p><p><span m='30710'>Let</span> <span
  m='31134'>us</span> <span m='31558'>define</span> <span m='31982'>RSS</span>
  <span m='32406'>to</span> <span m='32830'>be</span> <span m='33255'>the</span>
  <span m='33679'>residual</span> <span m='34103'>sum</span> <span
  m='34527'>of</span> <span m='34951'>squares,</span> <span
  m='35375'>also</span> <span m='35800'>known</span> <span m='36390'>as</span>
  <span m='36980'>the</span> <span m='37570'>sum</span> <span
  m='38160'>of</span> <span m='38750'>square</span> <span
  m='39340'>differences.</span> </p><p><span m='39930'>Our</span> <span
  m='40188'>goal</span> <span m='40447'>when</span> <span
  m='40705'>building</span> <span m='40964'>the</span> <span
  m='41222'>tree</span> <span m='41481'>is</span> <span m='41740'>to</span>
  <span m='42152'>minimize</span> <span m='42565'>the</span> <span
  m='42978'>RSS</span> <span m='43391'>by</span> <span m='43804'>making</span>
  <span m='44217'>splits,</span> <span m='44630'>but</span> <span
  m='45045'>we</span> <span m='45460'>want</span> <span m='45875'>to</span>
  <span m='46290'>penalize</span> <span m='46705'>having</span> <span
  m='47120'>too</span> <span m='47535'>many</span> <span m='47950'>splits</span>
  <span m='48365'>now.</span> </p><p><span m='48780'>Define</span> <span
  m='49083'>S</span> <span m='49387'>to</span> <span m='49691'>be</span> <span
  m='49995'>the</span> <span m='50298'>number</span> <span m='50602'>of</span>
  <span m='50906'>splits,</span> <span m='51210'>and</span> <span
  m='51658'>lambda</span> <span m='52106'>to</span> <span m='52555'>be</span>
  <span m='53003'>our</span> <span m='53451'>penalty.</span> </p><p><span
  m='53900'>Our</span> <span m='54138'>new</span> <span m='54377'>goal</span>
  <span m='54616'>is</span> <span m='54855'>to</span> <span
  m='55094'>find</span> <span m='55333'>a</span> <span m='55572'>tree</span>
  <span m='55811'>that</span> <span m='56050'>minimizes</span> <span
  m='56497'>the</span> <span m='56945'>sum</span> <span m='57393'>of</span>
  <span m='57841'>the</span> <span m='58288'>RSS</span> <span
  m='58736'>at</span> <span m='59184'>each</span> <span m='59632'>leaf,</span>
  <span m='60080'>plus</span> <span m='60596'>lambda,</span> <span
  m='61113'>times</span> <span m='61630'>S,</span> <span m='62146'>for</span>
  <span m='62663'>the</span> <span m='63180'>number</span> <span
  m='63696'>of</span> <span m='64213'>splits.</span> </p><p><span
  m='64730'>Let</span> <span m='65323'>us</span> <span m='65916'>consider</span>
  <span m='66509'>this</span> <span m='67102'>following</span> <span
  m='67695'>example.</span> </p><p><span m='68289'>Here</span> <span
  m='68688'>we</span> <span m='69087'>have</span> <span m='69486'>set</span>
  <span m='69885'>lambda</span> <span m='70284'>to</span> <span
  m='70683'>be</span> <span m='71082'>equal</span> <span m='71481'>to</span>
  <span m='71880'>0.5.</span> </p><p><span m='72280'>Initially,</span> <span
  m='72600'>we</span> <span m='72920'>have</span> <span m='73240'>a</span> <span
  m='73560'>tree</span> <span m='73880'>with</span> <span m='74200'>no</span>
  <span m='74520'>splits.</span> </p><p><span m='74840'>We</span> <span
  m='75155'>simply</span> <span m='75470'>take</span> <span m='75785'>the</span>
  <span m='76100'>average</span> <span m='76415'>of</span> <span
  m='76730'>the</span> <span m='77045'>data.</span> </p><p><span
  m='77360'>The</span> <span m='77776'>RSS</span> <span m='78192'>in</span>
  <span m='78609'>this</span> <span m='79025'>case</span> <span
  m='79442'>is</span> <span m='79858'>5,</span> <span m='80275'>thus</span>
  <span m='80691'>our</span> <span m='81107'>total</span> <span
  m='81524'>penalty</span> <span m='81940'>is</span> <span m='82357'>also</span>
  <span m='82773'>5.</span> </p><p><span m='83190'>If</span> <span
  m='83586'>we</span> <span m='83982'>make</span> <span m='84378'>one</span>
  <span m='84774'>split,</span> <span m='85170'>we</span> <span
  m='85566'>now</span> <span m='85962'>have</span> <span m='86358'>two</span>
  <span m='86754'>leaves.</span> </p><p><span m='87150'>At</span> <span
  m='87539'>each</span> <span m='87928'>of</span> <span m='88317'>these</span>
  <span m='88707'>leaves,</span> <span m='89096'>say,</span> <span
  m='89485'>we</span> <span m='89875'>have</span> <span m='90264'>an</span>
  <span m='90653'>error,</span> <span m='91042'>or</span> <span
  m='91432'>RSS</span> <span m='91821'>of</span> <span m='92210'>2.</span>
  </p><p><span m='92600'>The</span> <span m='93234'>total</span> <span
  m='93868'>RSS</span> <span m='94502'>error</span> <span m='95136'>is</span>
  <span m='95770'>then</span> <span m='96404'>2+2=4.</span> </p><p><span
  m='97039'>And</span> <span m='97672'>the</span> <span m='98305'>total</span>
  <span m='98938'>penalty</span> <span m='99571'>is</span> <span
  m='100204'>4+0.5*1,</span> <span m='100837'>the</span> <span
  m='101470'>number</span> <span m='102103'>of</span> <span
  m='102736'>splits.</span> </p><p><span m='103370'>Our</span> <span
  m='103875'>total</span> <span m='104380'>penalty</span> <span
  m='104885'>in</span> <span m='105390'>this</span> <span m='105895'>case</span>
  <span m='106400'>is</span> <span m='106905'>4.5.</span> </p><p><span
  m='107410'>If</span> <span m='107718'>we</span> <span m='108027'>split</span>
  <span m='108336'>again</span> <span m='108645'>on</span> <span
  m='108954'>one</span> <span m='109263'>of</span> <span m='109572'>our</span>
  <span m='109881'>leaves,</span> <span m='110190'>we</span> <span
  m='110545'>now</span> <span m='110900'>have</span> <span m='111256'>a</span>
  <span m='111611'>total</span> <span m='111967'>of</span> <span
  m='112322'>three</span> <span m='112678'>leaves</span> <span
  m='113033'>for</span> <span m='113389'>two</span> <span
  m='113744'>splits.</span> </p><p><span m='114100'>The</span> <span
  m='114455'>error</span> <span m='114810'>at</span> <span m='115165'>our</span>
  <span m='115520'>left-most</span> <span m='115875'>leaf</span> <span
  m='116230'>is</span> <span m='116585'>1.</span> </p><p><span
  m='116940'>The</span> <span m='117272'>next</span> <span
  m='117605'>leaf</span> <span m='117937'>has</span> <span m='118270'>an</span>
  <span m='118602'>error</span> <span m='118935'>of</span> <span
  m='119267'>0.8.</span> </p><p><span m='119600'>And</span> <span
  m='119916'>the</span> <span m='120232'>next</span> <span
  m='120548'>leaf</span> <span m='120864'>has</span> <span m='121180'>an</span>
  <span m='121496'>error</span> <span m='121812'>of</span> <span
  m='122128'>2,</span> <span m='122444'>for</span> <span m='122760'>a</span>
  <span m='123076'>total</span> <span m='123392'>error</span> <span
  m='123708'>of</span> <span m='124024'>3.8.</span> </p><p><span
  m='124340'>The</span> <span m='125221'>total</span> <span
  m='126103'>penalty</span> <span m='126985'>is</span> <span
  m='127866'>thus</span> <span m='128748'>3.8+0.5*2,</span> <span
  m='129630'>for</span> <span m='130395'>a</span> <span m='131160'>total</span>
  <span m='131925'>penalty</span> <span m='132690'>of</span> <span
  m='133455'>4.8.</span> </p><p><span m='134220'>Notice</span> <span
  m='134493'>that</span> <span m='134766'>if</span> <span m='135039'>we</span>
  <span m='135312'>pick</span> <span m='135585'>a</span> <span
  m='135858'>large</span> <span m='136131'>value</span> <span
  m='136404'>of</span> <span m='136677'>lambda,</span> <span
  m='136950'>we</span> <span m='137238'>won't</span> <span
  m='137527'>make</span> <span m='137815'>many</span> <span
  m='138104'>splits,</span> <span m='138392'>because</span> <span
  m='138681'>you</span> <span m='138970'>pay</span> <span m='139237'>a</span>
  <span m='139505'>big</span> <span m='139773'>price</span> <span
  m='140041'>for</span> <span m='140308'>every</span> <span
  m='140576'>additional</span> <span m='140844'>split</span> <span
  m='141112'>that</span> <span m='141380'>will</span> <span
  m='141895'>outweigh</span> <span m='142410'>the</span> <span
  m='142925'>decrease</span> <span m='143440'>in</span> <span
  m='143955'>error.</span> </p><p><span m='144470'>If</span> <span
  m='144727'>we</span> <span m='144984'>pick</span> <span m='145241'>a</span>
  <span m='145498'>small,</span> <span m='145755'>or</span> <span
  m='146012'>0</span> <span m='146269'>value</span> <span m='146526'>of</span>
  <span m='146783'>lambda,</span> <span m='147040'>it</span> <span
  m='147305'>will</span> <span m='147570'>make</span> <span
  m='147836'>splits</span> <span m='148101'>until</span> <span
  m='148367'>it</span> <span m='148632'>no</span> <span m='148898'>longer</span>
  <span m='149163'>decreases</span> <span m='149429'>the</span> <span
  m='149694'>error.</span> </p><p><span m='152650'>You</span> <span
  m='152926'>may</span> <span m='153202'>be</span> <span
  m='153479'>wondering</span> <span m='153755'>at</span> <span
  m='154031'>this</span> <span m='154308'>point,</span> <span
  m='154584'>the</span> <span m='154860'>definition</span> <span
  m='155137'>of</span> <span m='155413'>cp</span> <span m='155690'>is</span>
  <span m='156376'>what,</span> <span m='157063'>exactly?</span> </p><p><span
  m='157750'>Well,</span> <span m='158242'>it's</span> <span
  m='158735'>very</span> <span m='159228'>closely</span> <span
  m='159721'>related</span> <span m='160214'>to</span> <span
  m='160707'>lambda.</span> </p><p><span m='161200'>Considering</span> <span
  m='161670'>a</span> <span m='162140'>tree</span> <span m='162610'>with</span>
  <span m='163080'>no</span> <span m='163550'>splits,</span> <span
  m='164020'>we</span> <span m='164360'>simply</span> <span
  m='164700'>take</span> <span m='165040'>the</span> <span
  m='165380'>average</span> <span m='165720'>of</span> <span
  m='166060'>our</span> <span m='166400'>data,</span> <span
  m='166740'>calculate</span> <span m='167098'>RSS</span> <span
  m='167456'>for</span> <span m='167815'>that</span> <span
  m='168173'>so-called</span> <span m='168531'>tree,</span> <span
  m='168890'>and</span> <span m='169295'>let</span> <span m='169701'>us</span>
  <span m='170106'>call</span> <span m='170512'>that</span> <span
  m='170917'>RSS</span> <span m='171323'>for</span> <span m='171728'>no</span>
  <span m='172134'>splits.</span> </p><p><span m='172540'>Then</span> <span
  m='172845'>we</span> <span m='173150'>can</span> <span
  m='173455'>define</span> <span m='173760'>cp=lambda/RSS(no</span> <span
  m='174065'>splits).</span> </p><p><span m='178950'>When</span> <span
  m='179275'>you're</span> <span m='179601'>actually</span> <span
  m='179926'>using</span> <span m='180252'>cp</span> <span m='180577'>in</span>
  <span m='180903'>your</span> <span m='181228'>R</span> <span
  m='181554'>code,</span> <span m='181880'>you</span> <span
  m='182192'>don't</span> <span m='182504'>need</span> <span
  m='182816'>to</span> <span m='183128'>think</span> <span
  m='183440'>exactly</span> <span m='183752'>what</span> <span
  m='184064'>it</span> <span m='184376'>means--</span> <span
  m='184688'>just</span> <span m='185000'>that</span> <span
  m='185427'>small</span> <span m='185855'>numbers</span> <span
  m='186282'>of</span> <span m='186710'>cp</span> <span
  m='187137'>encourage</span> <span m='187565'>large</span> <span
  m='187992'>trees,</span> <span m='188420'>and</span> <span
  m='188917'>large</span> <span m='189415'>values</span> <span
  m='189912'>of</span> <span m='190410'>cp</span> <span
  m='190907'>encourage</span> <span m='191405'>small</span> <span
  m='191902'>trees.</span> </p><p><span m='192400'>Let's</span> <span
  m='192738'>go</span> <span m='193077'>back</span> <span m='193416'>to</span>
  <span m='193755'>R</span> <span m='194094'>now,</span> <span
  m='194433'>and</span> <span m='194772'>apply</span> <span
  m='195111'>cross-validation</span> <span m='195450'>to</span> <span
  m='196017'>our</span> <span m='196585'>training</span> <span
  m='197152'>data.</span> </p>
embedded_media:
  - uid: 9e2aa104fed3b035a784aa2a00abc956
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 5CExAUWzHEQ
  - uid: b7af7166059811095d15ae81ea230053
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 5CExAUWzHEQ
  - uid: ad017a2de5b6a31ef3654632a60eae60
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/5CExAUWzHEQ/default.jpg'
  - uid: 1105b086a9fe60228b54d8edbe15ffc8
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: 5CExAUWzHEQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-6-the-cp-parameter/video-6-the-cp-parameter-0/5CExAUWzHEQ.srt
  - uid: bc784b8d2ed8cadb18b6e89fdcb3fd75
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: 5CExAUWzHEQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-6-the-cp-parameter/video-6-the-cp-parameter-0/5CExAUWzHEQ.pdf
  - uid: 9993b1d20fb1cdb824bedc8be2418259
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ec81a2e67a0f2ccd84e5086446e20936
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 4a765890ce1f2b9f41ca7c2e38f89ba6
    parent_uid: f9cbbfc8e55567a7e230811e9fd7c2e6
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.4.07_300k.mp4
type: courses
layout: video
---
