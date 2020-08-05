---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xglWbWk_swE
    parent_uid: de12cf90981345672c6e7ded970619da
    title: Video-YouTube-Stream
    type: Video
    uid: 2a90a67efa526cd2aff8281321f89b50
  - id: 3Play-3Play YouTube id-Stream
    media_location: xglWbWk_swE
    parent_uid: de12cf90981345672c6e7ded970619da
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6bf87533877d3c6bad333e877463b6c2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xglWbWk_swE/default.jpg'
    parent_uid: de12cf90981345672c6e7ded970619da
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 003e69ef3d2e74ecc9bfbb55990ea21f
  - id: xglWbWk_swE.srt
    parent_uid: de12cf90981345672c6e7ded970619da
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-7-the-roc-curve/video-7-the-roc-curve-0/xglWbWk_swE.srt
    title: 3play caption file
    type: null
    uid: 490625c73f5e5f7ba790f9be9d512219
  - id: xglWbWk_swE.pdf
    parent_uid: de12cf90981345672c6e7ded970619da
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-7-the-roc-curve/video-7-the-roc-curve-0/xglWbWk_swE.pdf
    title: 3play pdf file
    type: null
    uid: 820eb421a563568d21038392c04bec44
  - id: Caption-3Play YouTube id-SRT
    parent_uid: de12cf90981345672c6e7ded970619da
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 632ef11bb9d64964f43ee57ac6a492fd
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: de12cf90981345672c6e7ded970619da
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e41f6f380d743da6460594d8758bc340
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.08_300k.mp4
    parent_uid: de12cf90981345672c6e7ded970619da
    title: Video-Internet Archive-MP4
    type: Video
    uid: d3ee4795ca8d14720f2d590f345abb29
inline_embed_id: 315976video7theroccurve52985046
order_index: 1268
parent_uid: 19c7a1c6b044e1b2c2b1916f5be9f51f
related_resources_text: ''
short_url: video-7-the-roc-curve-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-7-the-roc-curve/video-7-the-roc-curve-0
title: 'Video 7: The ROC Curve'
transcript: >-
  <p><span m='4500'>Now</span> <span m='4715'>let's</span> <span
  m='4931'>look</span> <span m='5146'>at</span> <span m='5362'>the</span> <span
  m='5577'>ROC</span> <span m='5793'>curve</span> <span m='6008'>so</span> <span
  m='6224'>we</span> <span m='6440'>can</span> <span m='6758'>understand</span>
  <span m='7077'>the</span> <span m='7395'>performance</span> <span
  m='7714'>of</span> <span m='8032'>our</span> <span m='8351'>model</span> <span
  m='8670'>at</span> <span m='9233'>different</span> <span
  m='9796'>cutoffs.</span> </p><p><span m='10360'>We'll</span> <span
  m='10688'>first</span> <span m='11017'>need</span> <span m='11346'>to</span>
  <span m='11675'>load</span> <span m='12003'>the</span> <span
  m='12332'>ROCR</span> <span m='12661'>package</span> <span
  m='12990'>with</span> <span m='13283'>a</span> <span
  m='13576'>library(ROCR).</span> </p><p><span m='19110'>Next,</span> <span
  m='19561'>we'll</span> <span m='20012'>build</span> <span m='20464'>our</span>
  <span m='20915'>ROCR</span> <span m='21367'>prediction</span> <span
  m='21818'>object.</span> </p><p><span m='22270'>So</span> <span
  m='22484'>we'll</span> <span m='22698'>call</span> <span m='22912'>this</span>
  <span m='23127'>object</span> <span m='23341'>predROCR</span> <span
  m='23555'>=</span> <span m='23770'>prediction(pred.prob,</span> <span
  m='24585'>test$responsive).</span> </p><p><span m='47910'>All</span> <span
  m='48160'>right.</span> </p><p><span m='48410'>So</span> <span
  m='48744'>now</span> <span m='49078'>we</span> <span m='49413'>want</span>
  <span m='49747'>to</span> <span m='50082'>plot</span> <span
  m='50416'>the</span> <span m='50751'>ROC</span> <span m='51085'>curve</span>
  <span m='51420'>so</span> <span m='51846'>we'll</span> <span
  m='52272'>use</span> <span m='52698'>the</span> <span
  m='53125'>performance</span> <span m='53551'>function</span> <span
  m='53977'>to</span> <span m='54403'>extract</span> <span m='54830'>the</span>
  <span m='55258'>true</span> <span m='55687'>positive</span> <span
  m='56116'>rate</span> <span m='56545'>and</span> <span m='56973'>false</span>
  <span m='57402'>positive</span> <span m='57831'>rate.</span> </p><p><span
  m='58260'>So</span> <span m='58568'>create</span> <span
  m='58876'>something</span> <span m='59185'>called</span> <span
  m='59493'>perfROCR</span> <span m='59801'>=</span> <span
  m='60110'>performance(predROCR,</span> <span m='60610'>"tpr",</span> <span
  m='61110'>"fpr").</span> </p><p><span m='71170'>And</span> <span
  m='72874'>then</span> <span m='74578'>we'll</span> <span
  m='76282'>plot(perfROCR,</span> <span m='77986'>colorize=TRUE),</span> <span
  m='79690'>so</span> <span m='79950'>that</span> <span m='80211'>we</span>
  <span m='80472'>can</span> <span m='80733'>see</span> <span
  m='80994'>the</span> <span m='81255'>colors</span> <span m='81516'>for</span>
  <span m='81777'>the</span> <span m='82038'>different</span> <span
  m='82299'>cutoff</span> <span m='82560'>thresholds.</span> </p><p><span
  m='85170'>All</span> <span m='85670'>right.</span> </p><p><span
  m='86170'>Now,</span> <span m='86466'>of</span> <span m='86762'>course,</span>
  <span m='87058'>the</span> <span m='87354'>best</span> <span
  m='87650'>cutoff</span> <span m='87946'>to</span> <span
  m='88242'>select</span> <span m='88539'>is</span> <span
  m='88907'>entirely</span> <span m='89275'>dependent</span> <span
  m='89643'>on</span> <span m='90011'>the</span> <span m='90379'>costs</span>
  <span m='90747'>assigned</span> <span m='91115'>by</span> <span
  m='91483'>the</span> <span m='91851'>decision</span> <span
  m='92220'>maker</span> <span m='92685'>to</span> <span m='93151'>false</span>
  <span m='93616'>positives</span> <span m='94082'>and</span> <span
  m='94547'>true</span> <span m='95013'>positives.</span> </p><p><span
  m='95479'>However,</span> <span m='96092'>again,</span> <span
  m='96706'>we</span> <span m='97319'>do</span> <span m='97933'>favor</span>
  <span m='98546'>cutoffs</span> <span m='99160'>that</span> <span
  m='99596'>give</span> <span m='100033'>us</span> <span m='100470'>a</span>
  <span m='100906'>high</span> <span m='101343'>sensitivity.</span> </p><p><span
  m='101780'>We</span> <span m='102099'>want</span> <span m='102418'>to</span>
  <span m='102737'>identify</span> <span m='103056'>a</span> <span
  m='103375'>large</span> <span m='103694'>number</span> <span
  m='104013'>of</span> <span m='104332'>the</span> <span
  m='104651'>responsive</span> <span m='104970'>documents.</span> </p><p><span
  m='106180'>So</span> <span m='106495'>something</span> <span
  m='106810'>that</span> <span m='107125'>might</span> <span
  m='107440'>look</span> <span m='107755'>promising</span> <span
  m='108070'>might</span> <span m='108375'>be</span> <span m='108681'>a</span>
  <span m='108987'>point</span> <span m='109292'>right</span> <span
  m='109598'>around</span> <span m='109904'>here,</span> <span
  m='110210'>in</span> <span m='110535'>this</span> <span m='110860'>part</span>
  <span m='111185'>of</span> <span m='111510'>the</span> <span
  m='111835'>curve,</span> <span m='112160'>where</span> <span
  m='112485'>we</span> <span m='112810'>have</span> <span m='113207'>a</span>
  <span m='113605'>true</span> <span m='114002'>positive</span> <span
  m='114400'>rate</span> <span m='114797'>of</span> <span
  m='115195'>around</span> <span m='115592'>70%,</span> <span
  m='115990'>meaning</span> <span m='116383'>that</span> <span
  m='116776'>we're</span> <span m='117170'>getting</span> <span
  m='117563'>about</span> <span m='117956'>70%</span> <span m='118350'>of</span>
  <span m='118678'>all</span> <span m='119006'>the</span> <span
  m='119334'>responsive</span> <span m='119662'>documents,</span> <span
  m='119990'>and</span> <span m='120318'>a</span> <span m='120646'>false</span>
  <span m='120974'>positive</span> <span m='121302'>rate</span> <span
  m='121630'>of</span> <span m='122078'>about</span> <span
  m='122527'>20%,</span> <span m='122976'>meaning</span> <span
  m='123425'>that</span> <span m='123873'>we're</span> <span
  m='124322'>making</span> <span m='124771'>mistakes</span> <span
  m='125220'>and</span> <span m='125883'>accidentally</span> <span
  m='126546'>identifying</span> <span m='127209'>as</span> <span
  m='127872'>responsive</span> <span m='128535'>20%</span> <span
  m='129199'>of</span> <span m='129784'>the</span> <span
  m='130369'>non-responsive</span> <span m='130954'>documents.</span>
  </p><p><span m='131540'>Now,</span> <span m='131871'>since,</span> <span
  m='132202'>typically,</span> <span m='132533'>the</span> <span
  m='132865'>vast</span> <span m='133196'>majority</span> <span
  m='133527'>of</span> <span m='133858'>documents</span> <span
  m='134190'>are</span> <span m='134860'>non-responsive,</span> <span
  m='135530'>operating</span> <span m='136200'>at</span> <span
  m='136870'>this</span> <span m='137540'>cutoff</span> <span
  m='138210'>would</span> <span m='138481'>result,</span> <span
  m='138752'>perhaps,</span> <span m='139024'>in</span> <span
  m='139295'>a</span> <span m='139567'>large</span> <span
  m='139838'>decrease</span> <span m='140110'>in</span> <span
  m='140414'>the</span> <span m='140718'>amount</span> <span
  m='141022'>of</span> <span m='141327'>manual</span> <span
  m='141631'>effort</span> <span m='141935'>needed</span> <span
  m='142240'>in</span> <span m='142802'>the</span> <span
  m='143365'>e-discovery</span> <span m='143927'>process.</span> </p><p><span
  m='144490'>And</span> <span m='144777'>we</span> <span m='145065'>can</span>
  <span m='145352'>see</span> <span m='145640'>from</span> <span
  m='145927'>the</span> <span m='146215'>blue</span> <span
  m='146502'>color</span> <span m='146790'>of</span> <span m='147154'>the</span>
  <span m='147518'>plot</span> <span m='147882'>at</span> <span
  m='148247'>this</span> <span m='148611'>particular</span> <span
  m='148975'>location</span> <span m='149340'>that</span> <span
  m='149814'>we're</span> <span m='150288'>looking</span> <span
  m='150763'>at</span> <span m='151237'>a</span> <span
  m='151712'>threshold</span> <span m='152186'>around</span> <span
  m='152661'>maybe</span> <span m='153135'>0.15</span> <span
  m='153610'>or</span> <span m='154074'>so,</span> <span
  m='154538'>significantly</span> <span m='155003'>lower</span> <span
  m='155467'>than</span> <span m='155932'>50%,</span> <span
  m='156396'>which</span> <span m='156861'>is</span> <span
  m='157325'>definitely</span> <span m='157790'>what</span> <span
  m='158144'>we</span> <span m='158498'>would</span> <span
  m='158852'>expect</span> <span m='159207'>since</span> <span
  m='159561'>we</span> <span m='159915'>favor</span> <span
  m='160270'>false</span> <span m='161130'>positives</span> <span
  m='161990'>to</span> <span m='162850'>false</span> <span
  m='163710'>negatives.</span> </p><p><span m='164570'>So</span> <span
  m='164962'>lastly,</span> <span m='165355'>we</span> <span
  m='165747'>can</span> <span m='166140'>use</span> <span m='166532'>the</span>
  <span m='166925'>ROCR</span> <span m='167317'>package</span> <span
  m='167710'>to</span> <span m='168306'>compute</span> <span
  m='168902'>our</span> <span m='169498'>auc</span> <span
  m='170094'>value.</span> </p><p><span m='170690'>So,</span> <span
  m='171226'>again,</span> <span m='171763'>call</span> <span
  m='172300'>the</span> <span m='172836'>performance</span> <span
  m='173373'>function</span> <span m='173910'>with</span> <span
  m='174480'>our</span> <span m='175050'>prediction</span> <span
  m='175620'>object,</span> <span m='176190'>this</span> <span
  m='176760'>time</span> <span m='177330'>extracting</span> <span
  m='177900'>the</span> <span m='178470'>auc</span> <span
  m='179040'>value</span> <span m='179610'>and</span> <span
  m='180097'>just</span> <span m='180585'>grabbing</span> <span
  m='181073'>the</span> <span m='181561'>y</span> <span m='182048'>value</span>
  <span m='182536'>slot</span> <span m='183024'>of</span> <span
  m='183512'>it.</span> </p><p><span m='184000'>We</span> <span
  m='184385'>can</span> <span m='184770'>see</span> <span m='185156'>that</span>
  <span m='185541'>we</span> <span m='185926'>have</span> <span
  m='186312'>an</span> <span m='186697'>auc</span> <span m='187082'>in</span>
  <span m='187468'>the</span> <span m='187853'>test</span> <span
  m='188238'>set</span> <span m='188624'>of</span> <span
  m='189009'>79.4%,</span> <span m='189394'>which</span> <span
  m='189780'>means</span> <span m='190101'>that</span> <span
  m='190423'>our</span> <span m='190745'>model</span> <span
  m='191066'>can</span> <span m='191388'>differentiate</span> <span
  m='191710'>between</span> <span m='192211'>a</span> <span
  m='192712'>randomly</span> <span m='193214'>selected</span> <span
  m='193715'>responsive</span> <span m='194217'>and</span> <span
  m='194718'>non-responsive</span> <span m='195220'>document</span> <span
  m='195878'>about</span> <span m='196536'>80%</span> <span m='197195'>of</span>
  <span m='197853'>the</span> <span m='198511'>time.</span> </p>
uid: de12cf90981345672c6e7ded970619da
type: course
layout: video
---
