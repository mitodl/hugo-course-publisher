---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 3cN7bSffVm4
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: Video-YouTube-Stream
    type: Video
    uid: bd15b912d65d341bcef9a2a1786d3eea
  - id: 3Play-3Play YouTube id-Stream
    media_location: 3cN7bSffVm4
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 027fe117b1f4b7d18f768721c8137fa8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/3cN7bSffVm4/default.jpg'
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 69931b00060c06a3b38b6fabffc63ab4
  - id: 3cN7bSffVm4.srt
    parent_uid: c184fec72119efd87eed2e021c080c71
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-3-splitting-and-predictions/video-3-splitting-and-predictions-0/3cN7bSffVm4.srt
    title: 3play caption file
    type: null
    uid: 87dafe2b1b4aaa6df038d744778acef2
  - id: 3cN7bSffVm4.pdf
    parent_uid: c184fec72119efd87eed2e021c080c71
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-3-splitting-and-predictions/video-3-splitting-and-predictions-0/3cN7bSffVm4.pdf
    title: 3play pdf file
    type: null
    uid: d38d40bed13972f6c63e8f5bfc1983f4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4984b2178c38cd1065e14a03206bf127
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0e8f44800d75ef2ee080ede6c1a8e949
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.2.05_300k.mp4
    parent_uid: c184fec72119efd87eed2e021c080c71
    title: Video-Internet Archive-MP4
    type: Video
    uid: f73556d457b9fb53b4dc31eee939e952
inline_embed_id: 23796505video3splittingandpredictions72402399
order_index: 787
parent_uid: ca1564b0917866a3a00e801c8c9fdbbc
related_resources_text: ''
short_url: video-3-splitting-and-predictions-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-3-splitting-and-predictions/video-3-splitting-and-predictions-0
title: 'Video 3: Splitting and Predictions'
transcript: >-
  <p><span m='4730'>In</span> <span m='5101'>the</span> <span
  m='5473'>previous</span> <span m='5845'>video,</span> <span m='6216'>we</span>
  <span m='6588'>generated</span> <span m='6960'>a</span> <span
  m='7343'>CART</span> <span m='7727'>tree</span> <span m='8111'>with</span>
  <span m='8495'>three</span> <span m='8878'>splits,</span> <span
  m='9262'>but</span> <span m='9646'>why</span> <span m='10030'>not</span> <span
  m='10594'>two,</span> <span m='11158'>or</span> <span m='11722'>four,</span>
  <span m='12287'>or</span> <span m='12851'>even</span> <span
  m='13415'>five?</span> </p><p><span m='13980'>There</span> <span
  m='14286'>are</span> <span m='14593'>different</span> <span
  m='14900'>ways</span> <span m='15206'>to</span> <span m='15513'>control</span>
  <span m='15820'>how</span> <span m='16298'>many</span> <span
  m='16776'>splits</span> <span m='17254'>are</span> <span
  m='17732'>generated.</span> </p><p><span m='18210'>One</span> <span
  m='18463'>way</span> <span m='18717'>is</span> <span m='18971'>by</span> <span
  m='19225'>setting</span> <span m='19479'>a</span> <span m='19733'>lower</span>
  <span m='19986'>bound</span> <span m='20240'>for</span> <span
  m='20494'>the</span> <span m='20748'>number</span> <span m='21002'>of</span>
  <span m='21256'>data</span> <span m='21510'>points</span> <span
  m='22082'>in</span> <span m='22655'>each</span> <span m='23227'>subset.</span>
  </p><p><span m='23800'>In</span> <span m='24257'>R,</span> <span
  m='24715'>this</span> <span m='25172'>is</span> <span m='25630'>called</span>
  <span m='26087'>the</span> <span m='26545'>minbucket</span> <span
  m='27002'>parameter,</span> <span m='27460'>for</span> <span
  m='27868'>the</span> <span m='28276'>minimum</span> <span
  m='28685'>number</span> <span m='29093'>of</span> <span
  m='29501'>observations</span> <span m='29910'>in</span> <span
  m='30442'>each</span> <span m='30974'>bucket</span> <span m='31506'>or</span>
  <span m='32038'>subset.</span> </p><p><span m='32570'>The</span> <span
  m='32949'>smaller</span> <span m='33328'>minbucket</span> <span
  m='33707'>is,</span> <span m='34086'>the</span> <span m='34465'>more</span>
  <span m='34844'>splits</span> <span m='35223'>will</span> <span
  m='35602'>be</span> <span m='35981'>generated.</span> </p><p><span
  m='36360'>But</span> <span m='36925'>if</span> <span m='37490'>it's</span>
  <span m='38055'>too</span> <span m='38620'>small,</span> <span
  m='39185'>overfitting</span> <span m='39750'>will</span> <span
  m='40315'>occur.</span> </p><p><span m='40880'>This</span> <span
  m='41138'>means</span> <span m='41397'>that</span> <span m='41656'>CART</span>
  <span m='41915'>will</span> <span m='42174'>fit</span> <span
  m='42433'>the</span> <span m='42692'>training</span> <span
  m='42951'>set</span> <span m='43210'>almost</span> <span
  m='44270'>perfectly.</span> </p><p><span m='45330'>But</span> <span
  m='45612'>this</span> <span m='45895'>is</span> <span m='46178'>bad</span>
  <span m='46460'>because</span> <span m='46743'>then</span> <span
  m='47026'>the</span> <span m='47309'>model</span> <span m='47591'>will</span>
  <span m='47874'>probably</span> <span m='48157'>not</span> <span
  m='48440'>perform</span> <span m='48864'>well</span> <span m='49288'>on</span>
  <span m='49713'>test</span> <span m='50137'>set</span> <span
  m='50562'>data</span> <span m='50986'>or</span> <span m='51411'>new</span>
  <span m='51835'>data.</span> </p><p><span m='52260'>On</span> <span
  m='52583'>the</span> <span m='52907'>other</span> <span m='53231'>hand,</span>
  <span m='53555'>if</span> <span m='53878'>the</span> <span
  m='54202'>minbucket</span> <span m='54526'>parameter</span> <span
  m='54850'>is</span> <span m='55188'>too</span> <span m='55527'>large,</span>
  <span m='55866'>the</span> <span m='56205'>model</span> <span
  m='56544'>will</span> <span m='56883'>be</span> <span m='57222'>too</span>
  <span m='57561'>simple</span> <span m='57900'>and</span> <span
  m='58336'>the</span> <span m='58773'>accuracy</span> <span
  m='59210'>will</span> <span m='59646'>be</span> <span m='60083'>poor.</span>
  </p><p><span m='60520'>Later</span> <span m='60768'>in</span> <span
  m='61016'>the</span> <span m='61264'>lecture,</span> <span m='61512'>we</span>
  <span m='61760'>will</span> <span m='62009'>learn</span> <span
  m='62257'>about</span> <span m='62505'>a</span> <span m='62753'>nice</span>
  <span m='63001'>method</span> <span m='63250'>for</span> <span
  m='63575'>selecting</span> <span m='63901'>the</span> <span
  m='64227'>stopping</span> <span m='64553'>parameter.</span> </p><p><span
  m='68000'>In</span> <span m='68280'>each</span> <span m='68560'>subset</span>
  <span m='68840'>of</span> <span m='69120'>a</span> <span m='69400'>CART</span>
  <span m='69680'>tree,</span> <span m='69960'>we</span> <span
  m='70240'>have</span> <span m='70621'>a</span> <span m='71003'>bucket</span>
  <span m='71385'>of</span> <span m='71766'>observations,</span> <span
  m='72148'>which</span> <span m='72530'>may</span> <span
  m='73196'>contain</span> <span m='73862'>both</span> <span
  m='74528'>possible</span> <span m='75194'>outcomes.</span> </p><p><span
  m='75860'>In</span> <span m='76193'>the</span> <span m='76526'>small</span>
  <span m='76859'>example</span> <span m='77192'>we</span> <span
  m='77525'>showed</span> <span m='77858'>in</span> <span m='78191'>the</span>
  <span m='78524'>previous</span> <span m='78857'>video,</span> <span
  m='79190'>we</span> <span m='79526'>have</span> <span
  m='79862'>classified</span> <span m='80198'>each</span> <span
  m='80534'>subset</span> <span m='80870'>as</span> <span
  m='81206'>either</span> <span m='81542'>red</span> <span m='81878'>or</span>
  <span m='82214'>gray</span> <span m='82550'>depending</span> <span
  m='83007'>on</span> <span m='83464'>the</span> <span m='83921'>majority</span>
  <span m='84378'>in</span> <span m='84835'>that</span> <span
  m='85292'>subset.</span> </p><p><span m='85750'>In</span> <span
  m='86135'>the</span> <span m='86521'>Supreme</span> <span
  m='86906'>Court</span> <span m='87292'>case,</span> <span
  m='87677'>we'll</span> <span m='88063'>be</span> <span
  m='88448'>classifying</span> <span m='88834'>observations</span> <span
  m='89220'>as</span> <span m='89870'>either</span> <span
  m='90520'>affirm</span> <span m='91170'>or</span> <span
  m='91820'>reverse.</span> </p><p><span m='92470'>Instead</span> <span
  m='92825'>of</span> <span m='93181'>just</span> <span m='93537'>taking</span>
  <span m='93892'>the</span> <span m='94248'>majority</span> <span
  m='94604'>outcome</span> <span m='94960'>to</span> <span m='95302'>be</span>
  <span m='95644'>the</span> <span m='95986'>prediction,</span> <span
  m='96328'>we</span> <span m='96670'>can</span> <span m='97012'>compute</span>
  <span m='97354'>the</span> <span m='97696'>percentage</span> <span
  m='98039'>of</span> <span m='98443'>data</span> <span m='98847'>in</span>
  <span m='99251'>a</span> <span m='99655'>subset</span> <span
  m='100059'>of</span> <span m='100463'>each</span> <span m='100867'>type</span>
  <span m='101271'>of</span> <span m='101675'>outcome.</span> </p><p><span
  m='102080'>As</span> <span m='102406'>an</span> <span
  m='102732'>example,</span> <span m='103058'>if</span> <span
  m='103385'>we</span> <span m='103711'>have</span> <span m='104037'>a</span>
  <span m='104363'>subset</span> <span m='104690'>with</span> <span
  m='105240'>10</span> <span m='105791'>affirms</span> <span
  m='106342'>and</span> <span m='106893'>two</span> <span
  m='107444'>reverses,</span> <span m='107995'>then</span> <span
  m='108546'>87%</span> <span m='109097'>of</span> <span m='109648'>the</span>
  <span m='110199'>data</span> <span m='110750'>is</span> <span
  m='111700'>affirm.</span> </p><p><span m='112650'>Then,</span> <span
  m='113156'>just</span> <span m='113663'>like</span> <span m='114170'>in</span>
  <span m='114676'>logistic</span> <span m='115183'>regression,</span> <span
  m='115690'>we</span> <span m='116090'>can</span> <span m='116490'>use</span>
  <span m='116890'>a</span> <span m='117290'>threshold</span> <span
  m='117690'>value</span> <span m='118090'>to</span> <span
  m='118490'>obtain</span> <span m='118890'>our</span> <span
  m='119290'>prediction.</span> </p><p><span m='119690'>For</span> <span
  m='120135'>this</span> <span m='120581'>example,</span> <span
  m='121027'>we</span> <span m='121472'>would</span> <span
  m='121918'>predict</span> <span m='122364'>affirm</span> <span
  m='122810'>with</span> <span m='123263'>a</span> <span
  m='123716'>threshold</span> <span m='124169'>of</span> <span
  m='124622'>0.5</span> <span m='125075'>since</span> <span
  m='125528'>the</span> <span m='125981'>majority</span> <span
  m='126434'>is</span> <span m='126887'>affirm.</span> </p><p><span
  m='127340'>But</span> <span m='127736'>if</span> <span m='128132'>we</span>
  <span m='128528'>increase</span> <span m='128924'>that</span> <span
  m='129320'>threshold</span> <span m='129716'>to</span> <span
  m='130112'>0.9,</span> <span m='130509'>we</span> <span
  m='130854'>would</span> <span m='131200'>predict</span> <span
  m='131546'>reverse</span> <span m='131892'>for</span> <span
  m='132238'>this</span> <span m='132584'>example.</span> </p><p><span
  m='135860'>Then</span> <span m='136285'>by</span> <span
  m='136710'>varying</span> <span m='137135'>the</span> <span
  m='137560'>threshold</span> <span m='137985'>value,</span> <span
  m='138410'>we</span> <span m='138825'>can</span> <span
  m='139240'>compute</span> <span m='139655'>an</span> <span
  m='140070'>ROC</span> <span m='140485'>curve</span> <span
  m='140900'>and</span> <span m='141315'>compute</span> <span
  m='141730'>an</span> <span m='142284'>AUC</span> <span m='142838'>value</span>
  <span m='143392'>to</span> <span m='143947'>evaluate</span> <span
  m='144501'>our</span> <span m='145055'>model.</span> </p><p><span
  m='145610'>In</span> <span m='145870'>the</span> <span m='146131'>next</span>
  <span m='146392'>video,</span> <span m='146653'>we'll</span> <span
  m='146914'>build</span> <span m='147175'>a</span> <span m='147436'>CART</span>
  <span m='147697'>tree</span> <span m='147958'>in</span> <span
  m='148219'>R</span> <span m='148480'>to</span> <span m='148895'>predict</span>
  <span m='149311'>the</span> <span m='149727'>decisions</span> <span
  m='150142'>of</span> <span m='150558'>Justice</span> <span
  m='150974'>Stevens</span> <span m='151390'>and</span> <span
  m='151882'>evaluate</span> <span m='152374'>our</span> <span
  m='152867'>model</span> <span m='153359'>using</span> <span
  m='153851'>a</span> <span m='154344'>ROC</span> <span m='154836'>curve.</span>
  </p>
uid: c184fec72119efd87eed2e021c080c71
type: course
layout: video
---
