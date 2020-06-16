---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Cks6Wn29TLg
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: Video-YouTube-Stream
    type: Video
    uid: 59f5882de50acbca4a530743cf6c18dd
  - id: 3Play-3Play YouTube id-Stream
    media_location: Cks6Wn29TLg
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: cada79db53bd9fd1037e91489f72de64
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Cks6Wn29TLg/default.jpg'
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6865310426fb3de1fc3a04e3edef8f3f
  - id: Cks6Wn29TLg.srt
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-5-building-models/video-5-building-models-0/Cks6Wn29TLg.srt
    title: 3play caption file
    type: null
    uid: 427fe7c6954db32ebb55546284f8874f
  - id: Cks6Wn29TLg.pdf
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-5-building-models/video-5-building-models-0/Cks6Wn29TLg.pdf
    title: 3play pdf file
    type: null
    uid: 0dd65ffe13de10dd60e7903935931c3e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5b7a939adc05e6cacbf9eb4383748ef3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9c5ef2d09d495f16dc050eedca69a956
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.06_300k.mp4
    parent_uid: 44f2c8d2bfd23ac14fedf07e81c827a7
    title: Video-Internet Archive-MP4
    type: Video
    uid: e8a396ed3ec76567b52c987651f7b907
inline_embed_id: 63317524video5buildingmodels85244881
parent_uid: bfe9f6891834528bfc4766f67aa144c6
related_resources_text: ''
short_url: video-5-building-models-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-5-building-models/video-5-building-models-0
title: 'Video 5: Building Models'
transcript: >-
  <p><span m='4570'>At</span> <span m='4812'>long</span> <span
  m='5055'>last,</span> <span m='5297'>we're</span> <span m='5540'>ready</span>
  <span m='5782'>to</span> <span m='6025'>split</span> <span m='6267'>our</span>
  <span m='6510'>data</span> <span m='6752'>into</span> <span m='6995'>a</span>
  <span m='7237'>training</span> <span m='7480'>and</span> <span
  m='7824'>testing</span> <span m='8168'>set,</span> <span m='8513'>and</span>
  <span m='8857'>to</span> <span m='9202'>actually</span> <span
  m='9546'>build</span> <span m='9891'>a</span> <span m='10235'>model.</span>
  </p><p><span m='10580'>So</span> <span m='10874'>we'll</span> <span
  m='11168'>start</span> <span m='11463'>by</span> <span
  m='11757'>loading</span> <span m='12052'>the</span> <span m='12346'>ca</span>
  <span m='12641'>tools</span> <span m='12935'>package,</span> <span
  m='13230'>so</span> <span m='13450'>that</span> <span m='13670'>we</span>
  <span m='13890'>can</span> <span m='14110'>split</span> <span
  m='14330'>our</span> <span m='14550'>data.</span> </p><p><span
  m='14770'>So</span> <span m='15072'>we'll</span> <span m='15375'>do</span>
  <span m='15677'>library(caTools).</span> </p><p><span m='19010'>And</span>
  <span m='19235'>then,</span> <span m='19461'>as</span> <span
  m='19687'>usual,</span> <span m='19913'>we're</span> <span
  m='20139'>going</span> <span m='20365'>to</span> <span m='20590'>set</span>
  <span m='20816'>our</span> <span m='21042'>random</span> <span
  m='21268'>seeds</span> <span m='21494'>so</span> <span m='21720'>that</span>
  <span m='22165'>everybody</span> <span m='22610'>has</span> <span
  m='23055'>the</span> <span m='23500'>same</span> <span
  m='23945'>results.</span> </p><p><span m='24390'>So</span> <span
  m='24830'>use</span> <span m='25270'>set.seed</span> <span
  m='25710'>and</span> <span m='26150'>we'll</span> <span m='26590'>pick</span>
  <span m='27030'>the</span> <span m='27470'>number</span> <span
  m='27910'>144.</span> </p><p><span m='28350'>Again,</span> <span
  m='28690'>the</span> <span m='29030'>number</span> <span
  m='29370'>isn't</span> <span m='29710'>particularly</span> <span
  m='30050'>important.</span> </p><p><span m='30390'>The</span> <span
  m='30702'>important</span> <span m='31015'>thing</span> <span
  m='31328'>is</span> <span m='31640'>that</span> <span m='31953'>we</span>
  <span m='32266'>all</span> <span m='32579'>use</span> <span
  m='32891'>the</span> <span m='33204'>same</span> <span m='33517'>one.</span>
  </p><p><span m='33830'>So</span> <span m='34152'>as</span> <span
  m='34474'>usual,</span> <span m='34796'>we're</span> <span
  m='35118'>going</span> <span m='35440'>to</span> <span m='35762'>obtain</span>
  <span m='36084'>the</span> <span m='36406'>split</span> <span
  m='36728'>variable.</span> </p><p><span m='37050'>We'll</span> <span
  m='37782'>call</span> <span m='38515'>it</span> <span m='39248'>spl,</span>
  <span m='39981'>using</span> <span m='40714'>the</span> <span
  m='41447'>sample.split.</span> </p><p><span m='42180'>The</span> <span
  m='42562'>outcome</span> <span m='42945'>variable</span> <span
  m='43328'>that</span> <span m='43711'>we</span> <span m='44094'>pass</span>
  <span m='44477'>is</span> <span m='44860'>labeledTerms$responsive.</span>
  </p><p><span m='47580'>And</span> <span m='47918'>we'll</span> <span
  m='48256'>do</span> <span m='48595'>a</span> <span m='48933'>70/30</span>
  <span m='49271'>split.</span> </p><p><span m='49610'>So</span> <span
  m='50126'>we'll</span> <span m='50642'>pass</span> <span m='51158'>0.7</span>
  <span m='51674'>here.</span> </p><p><span m='52190'>So</span> <span
  m='52602'>then</span> <span m='53015'>train,</span> <span m='53428'>the</span>
  <span m='53841'>training</span> <span m='54254'>data</span> <span
  m='54667'>frame,</span> <span m='55080'>can</span> <span m='55682'>be</span>
  <span m='56284'>obtained</span> <span m='56886'>using</span> <span
  m='57488'>subset</span> <span m='58090'>on</span> <span m='58692'>the</span>
  <span m='59294'>labeled</span> <span m='59896'>terms</span> <span
  m='60498'>where</span> <span m='61100'>spl</span> <span m='61783'>is</span>
  <span m='62466'>true.</span> </p><p><span m='63150'>And</span> <span
  m='63986'>test</span> <span m='64823'>is</span> <span m='65660'>the</span>
  <span m='66496'>subset</span> <span m='67333'>when</span> <span
  m='68170'>spl</span> <span m='69006'>is</span> <span m='69843'>false.</span>
  </p><p><span m='73690'>So</span> <span m='73951'>now</span> <span
  m='74212'>we're</span> <span m='74473'>ready</span> <span m='74735'>to</span>
  <span m='74996'>build</span> <span m='75257'>the</span> <span
  m='75518'>model.</span> </p><p><span m='75780'>And</span> <span
  m='76044'>we'll</span> <span m='76308'>build</span> <span m='76572'>a</span>
  <span m='76837'>simple</span> <span m='77101'>cart</span> <span
  m='77365'>model</span> <span m='77630'>using</span> <span m='78042'>the</span>
  <span m='78455'>default</span> <span m='78867'>parameters.</span> </p><p><span
  m='79280'>But</span> <span m='79576'>a</span> <span m='79873'>random</span>
  <span m='80170'>forest</span> <span m='80466'>would</span> <span
  m='80763'>be</span> <span m='81060'>another</span> <span m='81356'>good</span>
  <span m='81653'>choice</span> <span m='81950'>from</span> <span
  m='82463'>our</span> <span m='82976'>toolset.</span> </p><p><span
  m='83490'>So</span> <span m='83776'>we'll</span> <span m='84063'>start</span>
  <span m='84350'>by</span> <span m='84636'>loading</span> <span
  m='84923'>up</span> <span m='85210'>the</span> <span m='85496'>packages</span>
  <span m='85783'>for</span> <span m='86070'>the</span> <span
  m='86356'>cart</span> <span m='86643'>model.</span> </p><p><span
  m='86930'>We'll</span> <span m='87263'>do</span> <span
  m='87596'>library(rpart).</span> </p><p><span m='90480'>And</span> <span
  m='91203'>we'll</span> <span m='91926'>also</span> <span m='92650'>load</span>
  <span m='93373'>up</span> <span m='94096'>the</span> <span
  m='94820'>rpart.plot</span> <span m='95543'>package,</span> <span
  m='96266'>so</span> <span m='96990'>that</span> <span m='97508'>we</span>
  <span m='98026'>can</span> <span m='98545'>plot</span> <span
  m='99063'>the</span> <span m='99581'>outcome.</span> </p><p><span
  m='100100'>So</span> <span m='100643'>we'll</span> <span
  m='101187'>create</span> <span m='101731'>a</span> <span
  m='102275'>model</span> <span m='102818'>called</span> <span
  m='103362'>email</span> <span m='103906'>cart,</span> <span
  m='104450'>using</span> <span m='104822'>the</span> <span m='105194'>r</span>
  <span m='105566'>part</span> <span m='105938'>function.</span> </p><p><span
  m='106310'>We're</span> <span m='107226'>predicting</span> <span
  m='108143'>responsive.</span> </p><p><span m='109060'>And</span> <span
  m='109381'>we're</span> <span m='109703'>predicting</span> <span
  m='110025'>it</span> <span m='110346'>using</span> <span m='110668'>all</span>
  <span m='110990'>of</span> <span m='111282'>the</span> <span
  m='111575'>additional</span> <span m='111867'>variables.</span> </p><p><span
  m='112160'>All</span> <span m='112472'>the</span> <span
  m='112784'>frequencies</span> <span m='113096'>of</span> <span
  m='113408'>the</span> <span m='113721'>terms</span> <span
  m='114033'>that</span> <span m='114345'>are</span> <span
  m='114657'>included.</span> </p><p><span m='114970'>Obviously</span> <span
  m='115345'>tilde</span> <span m='115720'>period</span> <span
  m='116095'>is</span> <span m='116470'>important</span> <span
  m='116845'>here,</span> <span m='117220'>because</span> <span
  m='117698'>there</span> <span m='118176'>are</span> <span
  m='118654'>788</span> <span m='119132'>terms.</span> </p><p><span
  m='119610'>Way</span> <span m='120025'>too</span> <span m='120441'>many</span>
  <span m='120857'>to</span> <span m='121272'>actually</span> <span
  m='121688'>type</span> <span m='122104'>out.</span> </p><p><span
  m='122520'>The</span> <span m='122742'>data</span> <span
  m='122964'>that</span> <span m='123186'>we're</span> <span
  m='123408'>using</span> <span m='123631'>to</span> <span
  m='123853'>train</span> <span m='124075'>the</span> <span
  m='124297'>model</span> <span m='124520'>is</span> <span
  m='125000'>just</span> <span m='125480'>our</span> <span
  m='125960'>training</span> <span m='126440'>dataframe,</span> <span
  m='126920'>train.</span> </p><p><span m='127400'>And</span> <span
  m='127706'>then</span> <span m='128012'>the</span> <span
  m='128318'>method</span> <span m='128625'>is</span> <span
  m='128931'>class,</span> <span m='129237'>since</span> <span
  m='129543'>we</span> <span m='129850'>have</span> <span m='130506'>a</span>
  <span m='131162'>classification</span> <span m='131818'>problem</span> <span
  m='132474'>here.</span> </p><p><span m='133130'>And</span> <span
  m='133464'>once</span> <span m='133798'>we've</span> <span
  m='134132'>trained</span> <span m='134467'>the</span> <span
  m='134801'>cart</span> <span m='135135'>model,</span> <span
  m='135470'>we</span> <span m='135692'>can</span> <span m='135915'>plot</span>
  <span m='136138'>it</span> <span m='136361'>out</span> <span
  m='136584'>using</span> <span m='136807'>prp.</span> </p><p><span
  m='141020'>There</span> <span m='141413'>we</span> <span m='141806'>go.</span>
  </p><p><span m='142200'>So</span> <span m='142521'>we</span> <span
  m='142843'>can</span> <span m='143165'>see</span> <span m='143486'>at</span>
  <span m='143808'>the</span> <span m='144130'>very</span> <span
  m='144451'>top</span> <span m='144773'>is</span> <span m='145095'>the</span>
  <span m='145416'>word</span> <span m='145738'>California.</span> </p><p><span
  m='146060'>If</span> <span m='146347'>California</span> <span
  m='146635'>appears</span> <span m='146923'>at</span> <span
  m='147211'>least</span> <span m='147498'>twice</span> <span
  m='147786'>in</span> <span m='148074'>an</span> <span m='148362'>email,</span>
  <span m='148650'>we're</span> <span m='149070'>going</span> <span
  m='149490'>to</span> <span m='149910'>take</span> <span m='150330'>the</span>
  <span m='150750'>right</span> <span m='151170'>part</span> <span
  m='151590'>over</span> <span m='152010'>here</span> <span
  m='152430'>and</span> <span m='152850'>predict</span> <span
  m='153270'>that</span> <span m='153684'>a</span> <span
  m='154098'>document</span> <span m='154512'>is</span> <span
  m='154926'>responsive.</span> </p><p><span m='155340'>It's</span> <span
  m='155744'>somewhat</span> <span m='156148'>unsurprising</span> <span
  m='156552'>that</span> <span m='156957'>California</span> <span
  m='157361'>shows</span> <span m='157765'>up,</span> <span
  m='158170'>because</span> <span m='158491'>we</span> <span
  m='158812'>know</span> <span m='159133'>that</span> <span
  m='159454'>Enron</span> <span m='159775'>had</span> <span m='160096'>a</span>
  <span m='160417'>heavy</span> <span m='160738'>involvement</span> <span
  m='161060'>in</span> <span m='161582'>the</span> <span
  m='162104'>California</span> <span m='162626'>energy</span> <span
  m='163148'>markets.</span> </p><p><span m='163670'>So</span> <span
  m='163892'>further</span> <span m='164115'>down</span> <span
  m='164337'>the</span> <span m='164560'>tree,</span> <span m='164782'>we</span>
  <span m='165005'>see</span> <span m='165227'>a</span> <span
  m='165450'>number</span> <span m='165672'>of</span> <span
  m='165895'>other</span> <span m='166117'>terms</span> <span
  m='166340'>that</span> <span m='166775'>we</span> <span
  m='167210'>could</span> <span m='167645'>plausibly</span> <span
  m='168080'>expect</span> <span m='168515'>to</span> <span m='168950'>be</span>
  <span m='169385'>related</span> <span m='169820'>to</span> <span
  m='170265'>energy</span> <span m='170710'>bids</span> <span
  m='171155'>and</span> <span m='171600'>energy</span> <span
  m='172045'>scheduling,</span> <span m='172490'>like</span> <span
  m='173190'>system,</span> <span m='173890'>demand,</span> <span
  m='174590'>bid,</span> <span m='175290'>and</span> <span
  m='175990'>gas.</span> </p><p><span m='176690'>Down</span> <span
  m='176942'>here</span> <span m='177194'>at</span> <span m='177446'>the</span>
  <span m='177698'>bottom</span> <span m='177950'>is</span> <span
  m='178202'>Jeff,</span> <span m='178454'>which</span> <span
  m='178706'>is</span> <span m='178958'>perhaps</span> <span m='179210'>a</span>
  <span m='179529'>reference</span> <span m='179848'>to</span> <span
  m='180167'>Enron's</span> <span m='180486'>CEO,</span> <span
  m='180805'>Jeff</span> <span m='181124'>Skillings,</span> <span
  m='181443'>who</span> <span m='181762'>ended</span> <span m='182081'>up</span>
  <span m='182400'>actually</span> <span m='182706'>being</span> <span
  m='183013'>jailed</span> <span m='183320'>for</span> <span
  m='183626'>his</span> <span m='183933'>involvement</span> <span
  m='184240'>in</span> <span m='184630'>the</span> <span m='185020'>fraud</span>
  <span m='185410'>at</span> <span m='185800'>the</span> <span
  m='186190'>company.</span> </p>
uid: 44f2c8d2bfd23ac14fedf07e81c827a7
type: courses
layout: video
---
