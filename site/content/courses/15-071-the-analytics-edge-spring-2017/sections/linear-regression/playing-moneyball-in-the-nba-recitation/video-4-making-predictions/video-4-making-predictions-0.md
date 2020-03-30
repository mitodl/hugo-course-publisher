---
title: 'Video 4: Making Predictions'
uid: e4c6aeb7d0116de1e848b554e11656ed
parent_uid: 4a72056c6bbe0c01489fb7068637be07
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/playing-moneyball-in-the-nba-recitation/video-4-making-predictions/video-4-making-predictions-0
short_url: video-4-making-predictions-0
inline_embed_id: 13646506video4makingpredictions71301215
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>In</span> <span m='4846'>this</span> <span
  m='5192'>video</span> <span m='5539'>we'll</span> <span m='5885'>try</span>
  <span m='6231'>to</span> <span m='6578'>make</span> <span
  m='6924'>predictions</span> <span m='7270'>for</span> <span
  m='7617'>the</span> <span m='7963'>2012-2013</span> <span
  m='8310'>season.</span> </p><p><span m='9560'>We'll</span> <span
  m='9848'>need</span> <span m='10136'>to</span> <span m='10425'>load</span>
  <span m='10713'>our</span> <span m='11001'>test</span> <span
  m='11290'>set</span> <span m='11578'>because</span> <span m='11866'>our</span>
  <span m='12155'>training</span> <span m='12443'>set</span> <span
  m='12731'>only</span> <span m='13020'>included</span> <span
  m='13670'>data</span> <span m='14320'>from</span> <span m='14970'>1980</span>
  <span m='15620'>up</span> <span m='16270'>until</span> <span
  m='16920'>the</span> <span m='17570'>2011-2012</span> <span
  m='18220'>season.</span> </p><p><span m='18870'>So</span> <span
  m='19088'>let's</span> <span m='19306'>call</span> <span m='19524'>it</span>
  <span m='19742'>NBA_test.</span> </p><p><span m='25470'>And</span> <span
  m='25678'>we'll</span> <span m='25886'>read</span> <span m='26094'>it</span>
  <span m='26302'>in</span> <span m='26510'>the</span> <span
  m='26718'>same</span> <span m='26926'>way</span> <span m='27134'>as</span>
  <span m='27342'>always,</span> <span
  m='27550'>read.csv("NBA_test.csv").</span> </p><p><span m='36220'>All</span>
  <span m='36578'>right,</span> <span m='36936'>so</span> <span
  m='37294'>now</span> <span m='37652'>let's</span> <span m='38010'>try</span>
  <span m='38369'>to</span> <span m='38727'>predict</span> <span
  m='39085'>using</span> <span m='39443'>our</span> <span m='39801'>model</span>
  <span m='40160'>that</span> <span m='40426'>we</span> <span
  m='40692'>made</span> <span m='40959'>in</span> <span m='41225'>the</span>
  <span m='41491'>previous</span> <span m='41758'>video,</span> <span
  m='42024'>how</span> <span m='42290'>many</span> <span m='42557'>points</span>
  <span m='42823'>we'll</span> <span m='43090'>see</span> <span
  m='43835'>in</span> <span m='44580'>2012-2013</span> <span
  m='45325'>season.</span> </p><p><span m='46070'>Let's</span> <span
  m='46415'>call</span> <span m='46760'>this</span> <span
  m='47105'>PointsPrediction.</span> </p><p><span m='54120'>And</span> <span
  m='54536'>so</span> <span m='54952'>we</span> <span m='55368'>use</span> <span
  m='55785'>the</span> <span m='56201'>predict</span> <span
  m='56617'>command</span> <span m='57033'>here.</span> </p><p><span
  m='57450'>And</span> <span m='57704'>we</span> <span m='57958'>give</span>
  <span m='58212'>it</span> <span m='58466'>the</span> <span
  m='58720'>previous</span> <span m='58974'>model</span> <span
  m='59228'>that</span> <span m='59482'>we</span> <span m='59736'>made.</span>
  </p><p><span m='62770'>We'll</span> <span m='63245'>give</span> <span
  m='63720'>it</span> <span m='64195'>PointsReg4,</span> <span
  m='64670'>because</span> <span m='65145'>that</span> <span
  m='65620'>was</span> <span m='65882'>the</span> <span m='66144'>model</span>
  <span m='66406'>we</span> <span m='66669'>determined</span> <span
  m='66931'>at</span> <span m='67193'>the</span> <span m='67456'>end</span>
  <span m='67718'>to</span> <span m='67980'>be</span> <span m='68243'>the</span>
  <span m='68505'>best</span> <span m='68767'>one.</span> </p><p><span
  m='69030'>And</span> <span m='69437'>the</span> <span m='69844'>new</span>
  <span m='70251'>data</span> <span m='70658'>which</span> <span
  m='71065'>is</span> <span m='71472'>NBA_test.</span> </p><p><span
  m='76150'>OK,</span> <span m='76590'>so</span> <span m='77030'>now</span>
  <span m='77470'>that</span> <span m='77910'>we</span> <span
  m='78350'>have</span> <span m='78790'>our</span> <span
  m='79230'>prediction,</span> <span m='79670'>how</span> <span
  m='80110'>good</span> <span m='80550'>is</span> <span m='80990'>it?</span>
  </p><p><span m='81430'>We</span> <span m='81822'>can</span> <span
  m='82215'>compute</span> <span m='82607'>the</span> <span m='83000'>out</span>
  <span m='83392'>of</span> <span m='83785'>sample</span> <span
  m='84177'>r-squared.</span> </p><p><span m='84570'>This</span> <span
  m='84771'>is</span> <span m='84972'>a</span> <span
  m='85174'>measurement</span> <span m='85375'>of</span> <span
  m='85577'>how</span> <span m='85778'>well</span> <span m='85980'>the</span>
  <span m='86413'>model</span> <span m='86846'>predicts</span> <span
  m='87280'>on</span> <span m='87713'>test</span> <span m='88146'>data.</span>
  </p><p><span m='88580'>The</span> <span m='88842'>r</span> <span
  m='89104'>squared</span> <span m='89366'>value</span> <span
  m='89628'>we</span> <span m='89890'>had</span> <span m='90152'>before</span>
  <span m='90414'>from</span> <span m='90676'>our</span> <span
  m='90938'>model,</span> <span m='91200'>the</span> <span
  m='91712'>0.8991,</span> <span m='92225'>you</span> <span
  m='92737'>might</span> <span m='93250'>remember,</span> <span
  m='93762'>is</span> <span m='94275'>the</span> <span m='94787'>measure</span>
  <span m='95300'>of</span> <span m='95685'>an</span> <span
  m='96070'>in-sample</span> <span m='96455'>r-squared,</span> <span
  m='96840'>which</span> <span m='97225'>is</span> <span m='97610'>how</span>
  <span m='97981'>well</span> <span m='98352'>the</span> <span
  m='98723'>model</span> <span m='99095'>fits</span> <span m='99466'>the</span>
  <span m='99837'>training</span> <span m='100208'>data.</span> </p><p><span
  m='100580'>But</span> <span m='100844'>to</span> <span m='101109'>get</span>
  <span m='101373'>a</span> <span m='101638'>measure</span> <span
  m='101902'>of</span> <span m='102167'>the</span> <span
  m='102431'>predictions</span> <span m='102696'>goodness</span> <span
  m='102960'>of</span> <span m='103225'>fit,</span> <span m='103490'>we</span>
  <span m='103851'>need</span> <span m='104212'>to</span> <span
  m='104573'>calculate</span> <span m='104934'>the</span> <span
  m='105295'>out</span> <span m='105656'>of</span> <span
  m='106017'>sample</span> <span m='106378'>r-squared.</span> </p><p><span
  m='106740'>So</span> <span m='107054'>let's</span> <span m='107368'>do</span>
  <span m='107682'>that</span> <span m='107996'>here.</span> </p><p><span
  m='108310'>We</span> <span m='108518'>need</span> <span m='108727'>to</span>
  <span m='108936'>compute</span> <span m='109145'>the</span> <span
  m='109354'>sum</span> <span m='109563'>of</span> <span
  m='109772'>squared</span> <span m='109981'>errors.</span> </p><p><span
  m='115240'>And</span> <span m='115834'>so</span> <span m='116428'>this</span>
  <span m='117022'>here</span> <span m='117616'>is</span> <span
  m='118210'>just</span> <span m='118805'>the</span> <span m='119399'>sum</span>
  <span m='119993'>of</span> <span m='120587'>the</span> <span
  m='121181'>predicted</span> <span m='121775'>amount</span> <span
  m='122370'>minus</span> <span m='123381'>the</span> <span
  m='124392'>actual</span> <span m='125403'>amount</span> <span
  m='126414'>of</span> <span m='127425'>points</span> <span
  m='128436'>squared</span> <span m='129447'>and</span> <span
  m='130458'>summed.</span> </p><p><span m='131470'>And</span> <span
  m='131995'>we</span> <span m='132520'>need</span> <span m='133045'>the</span>
  <span m='133570'>total</span> <span m='134095'>sums</span> <span
  m='134620'>of</span> <span m='135145'>squares,</span> <span
  m='135670'>which</span> <span m='136508'>is</span> <span
  m='137346'>just</span> <span m='138184'>the</span> <span m='139022'>sum</span>
  <span m='139860'>of</span> <span m='140699'>the</span> <span
  m='141537'>average</span> <span m='142375'>number</span> <span
  m='143213'>of</span> <span m='144051'>points</span> <span
  m='144890'>minus</span> <span m='145288'>the</span> <span
  m='145687'>test</span> <span m='146085'>actual</span> <span
  m='146484'>number</span> <span m='146882'>of</span> <span
  m='147281'>points.</span> </p><p><span m='158380'>So</span> <span
  m='158830'>the</span> <span m='159280'>r-squared</span> <span
  m='159730'>here</span> <span m='160180'>then</span> <span m='160630'>is</span>
  <span m='161080'>calculated</span> <span m='161530'>as</span> <span
  m='161940'>usual,</span> <span m='162350'>1</span> <span
  m='162760'>minus</span> <span m='163170'>the</span> <span
  m='163580'>sum</span> <span m='163990'>of</span> <span
  m='164400'>squared</span> <span m='164810'>errors</span> <span
  m='165220'>divided</span> <span m='165630'>by</span> <span
  m='166204'>total</span> <span m='166778'>sums</span> <span
  m='167352'>of</span> <span m='167926'>squares.</span> </p><p><span
  m='168500'>And</span> <span m='168883'>we</span> <span m='169266'>see</span>
  <span m='169650'>that</span> <span m='170033'>we</span> <span
  m='170416'>have</span> <span m='170800'>an</span> <span m='171183'>r</span>
  <span m='171566'>squared</span> <span m='171950'>value</span> <span
  m='172333'>of</span> <span m='172716'>0.8127.</span> </p><p><span
  m='173100'>We</span> <span m='173409'>can</span> <span m='173718'>also</span>
  <span m='174027'>calculate</span> <span m='174336'>the</span> <span
  m='174645'>root</span> <span m='174955'>mean</span> <span
  m='175264'>square</span> <span m='175573'>error</span> <span
  m='175882'>the</span> <span m='176191'>same</span> <span m='176500'>way</span>
  <span m='176810'>as</span> <span m='177165'>before,</span> <span
  m='177520'>root</span> <span m='177875'>mean</span> <span
  m='178230'>squared</span> <span m='178585'>error</span> <span
  m='178940'>is</span> <span m='179258'>going</span> <span m='179576'>to</span>
  <span m='179895'>be</span> <span m='180213'>the</span> <span
  m='180532'>square</span> <span m='180850'>root</span> <span
  m='181169'>of</span> <span m='181487'>the</span> <span m='181806'>sum</span>
  <span m='182124'>of</span> <span m='182443'>squared</span> <span
  m='182761'>errors</span> <span m='183080'>divided</span> <span
  m='183315'>by</span> <span m='183550'>n,</span> <span m='183786'>which</span>
  <span m='184021'>is</span> <span m='184256'>the</span> <span
  m='184492'>number</span> <span m='184727'>of</span> <span
  m='184963'>rows</span> <span m='185198'>in</span> <span m='185433'>our</span>
  <span m='185669'>test</span> <span m='185904'>data</span> <span
  m='186140'>set.</span> </p><p><span m='193810'>OK</span> <span
  m='194557'>and</span> <span m='195304'>the</span> <span m='196051'>root</span>
  <span m='196798'>mean</span> <span m='197545'>squared</span> <span
  m='198292'>error</span> <span m='199039'>here</span> <span
  m='199786'>is</span> <span m='200533'>196.37.</span> </p><p><span
  m='201280'>So</span> <span m='201510'>it's</span> <span m='201740'>a</span>
  <span m='201970'>little</span> <span m='202200'>bit</span> <span
  m='202430'>higher</span> <span m='202660'>than</span> <span
  m='202890'>before.</span> </p><p><span m='203120'>But</span> <span
  m='203376'>it's</span> <span m='203632'>not</span> <span m='203888'>too</span>
  <span m='204144'>bad.</span> </p><p><span m='204400'>We're</span> <span
  m='204986'>making</span> <span m='205573'>an</span> <span
  m='206160'>average</span> <span m='206746'>error</span> <span
  m='207333'>of</span> <span m='207920'>about</span> <span m='208506'>196</span>
  <span m='209093'>points.</span> </p><p><span m='209680'>We'll</span> <span
  m='209988'>stop</span> <span m='210296'>here</span> <span
  m='210604'>for</span> <span m='210912'>now.</span> </p><p><span
  m='211220'>Good</span> <span m='211620'>luck</span> <span
  m='212020'>with</span> <span m='212420'>the</span> <span
  m='212820'>homework.</span> </p>
embedded_media:
  - uid: c1051a5fc583dc9d0b28088918a6d241
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: E16wcCKx89w
  - uid: 5837ea7c8b4b372303d3090ffe4cc8ed
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: E16wcCKx89w
  - uid: a0e197923bd7553ff4e9d52727d48f2e
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/E16wcCKx89w/default.jpg'
  - uid: bd4b41dfd4837687dba5cecd3ddb255f
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: E16wcCKx89w.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/playing-moneyball-in-the-nba-recitation/video-4-making-predictions/video-4-making-predictions-0/E16wcCKx89w.srt
  - uid: d075b370b2f00645f530d08bc8f3b472
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: E16wcCKx89w.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/playing-moneyball-in-the-nba-recitation/video-4-making-predictions/video-4-making-predictions-0/E16wcCKx89w.pdf
  - uid: dd92676602b1e1b247f30fddb10409b4
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: d3d3c3e53ca8f34c86e9a36238ccf84c
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 486fc859471133e4c26c8a43fd6f625f
    parent_uid: e4c6aeb7d0116de1e848b554e11656ed
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_2.4.05_300k.mp4
type: courses
layout: video
---
