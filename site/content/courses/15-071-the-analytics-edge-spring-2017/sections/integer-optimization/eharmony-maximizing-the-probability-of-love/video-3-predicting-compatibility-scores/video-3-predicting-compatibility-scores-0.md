---
title: 'Video 3: Predicting Compatibility Scores'
uid: a45eec02d316afae45fb3041650e1173
parent_uid: 4ee865af69155a39e352d98aad5670d0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores/video-3-predicting-compatibility-scores-0
short_url: video-3-predicting-compatibility-scores-0
inline_embed_id: 25184388video3predictingcompatibilityscores36544408
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9500'>In</span> <span m='9808'>the</span> <span
  m='10116'>optimization</span> <span m='10425'>problem,</span> <span
  m='10733'>we</span> <span m='11041'>assumed</span> <span m='11350'>the</span>
  <span m='11776'>compatibility</span> <span m='12202'>scores</span> <span
  m='12628'>were</span> <span m='13054'>data</span> <span m='13480'>that</span>
  <span m='13858'>we</span> <span m='14237'>could</span> <span
  m='14616'>input</span> <span m='14995'>directly</span> <span
  m='15374'>into</span> <span m='15753'>the</span> <span
  m='16132'>optimization</span> <span m='16511'>model.</span> </p><p><span
  m='16890'>But</span> <span m='17212'>where</span> <span m='17535'>do</span>
  <span m='17858'>these</span> <span m='18181'>scores</span> <span
  m='18504'>come</span> <span m='18827'>from?</span> </p><p><span
  m='19150'>In</span> <span m='19559'>the</span> <span m='19968'>words</span>
  <span m='20377'>of</span> <span m='20786'>the</span> <span
  m='21195'>founder--</span> <span m='21604'>Neil</span> <span
  m='22013'>Clark</span> <span m='22422'>Warren</span> <span
  m='22831'>--opposites</span> <span m='23240'>attract,</span> <span
  m='23760'>then</span> <span m='24280'>they</span> <span
  m='24800'>attack.</span> </p><p><span m='25320'>eHarmony's</span> <span
  m='25785'>compatibility</span> <span m='26250'>match</span> <span
  m='26715'>score</span> <span m='27180'>is</span> <span m='27592'>based</span>
  <span m='28005'>on</span> <span m='28418'>similarity</span> <span
  m='28831'>between</span> <span m='29244'>users'</span> <span
  m='29657'>answers</span> <span m='30070'>to</span> <span m='30826'>the</span>
  <span m='31583'>questionnaire.</span> </p><p><span m='32340'>Let</span> <span
  m='32772'>us</span> <span m='33205'>attempt</span> <span m='33638'>to</span>
  <span m='34071'>demonstrate</span> <span m='34504'>an</span> <span
  m='34937'>approach</span> <span m='35370'>to</span> <span
  m='35965'>develop</span> <span m='36560'>compatibility</span> <span
  m='37155'>scores.</span> </p><p><span m='37750'>We</span> <span
  m='38196'>utilize</span> <span m='38642'>public</span> <span
  m='39088'>data</span> <span m='39535'>from</span> <span
  m='39981'>eHarmony</span> <span m='40427'>containing</span> <span
  m='40873'>features</span> <span m='41320'>for</span> <span
  m='42110'>275,000</span> <span m='42900'>users</span> <span
  m='43690'>and</span> <span m='44480'>binary</span> <span
  m='45270'>compatibility.</span> </p><p><span m='46060'>Feature</span> <span
  m='46395'>names</span> <span m='46730'>and</span> <span m='47065'>exact</span>
  <span m='47400'>values</span> <span m='47735'>are</span> <span
  m='48070'>masked</span> <span m='48640'>to</span> <span
  m='49210'>protect</span> <span m='49780'>users'</span> <span
  m='50350'>privacy.</span> </p><p><span m='50920'>Correspondingly</span> <span
  m='51337'>we</span> <span m='51755'>won't</span> <span m='52172'>be</span>
  <span m='52590'>able</span> <span m='53007'>to</span> <span
  m='53425'>directly</span> <span m='53842'>interpret</span> <span
  m='54260'>which</span> <span m='54527'>features</span> <span
  m='54795'>are</span> <span m='55062'>important</span> <span
  m='55330'>as</span> <span m='55597'>we</span> <span m='55865'>do</span> <span
  m='56132'>not</span> <span m='56400'>know</span> <span m='56875'>the</span>
  <span m='57350'>identity</span> <span m='57825'>of</span> <span
  m='58300'>these</span> <span m='58775'>features.</span> </p><p><span
  m='59250'>We</span> <span m='59781'>used</span> <span
  m='60312'>logistic</span> <span m='60843'>regression</span> <span
  m='61374'>on</span> <span m='61905'>pairs</span> <span m='62436'>of</span>
  <span m='62967'>users'</span> <span m='63498'>differences</span> <span
  m='64030'>to</span> <span m='64380'>predict</span> <span
  m='64730'>compatibility.</span> </p><p><span m='67840'>To</span> <span
  m='68080'>reduce</span> <span m='68320'>the</span> <span m='68560'>size</span>
  <span m='68800'>of</span> <span m='69040'>the</span> <span
  m='69280'>problem,</span> <span m='69520'>we</span> <span
  m='69915'>filtered</span> <span m='70310'>the</span> <span
  m='70705'>data</span> <span m='71100'>to</span> <span m='71495'>include</span>
  <span m='71890'>only</span> <span m='72285'>users</span> <span
  m='72680'>in</span> <span m='73075'>the</span> <span m='73470'>Boston</span>
  <span m='73865'>area</span> <span m='74260'>who</span> <span
  m='74643'>have</span> <span m='75026'>compatibility</span> <span
  m='75410'>scores</span> <span m='75793'>listed</span> <span
  m='76176'>in</span> <span m='76560'>the</span> <span m='76943'>data</span>
  <span m='77326'>set.</span> </p><p><span m='77710'>We</span> <span
  m='78411'>computed</span> <span m='79112'>absolute</span> <span
  m='79813'>difference</span> <span m='80514'>in</span> <span
  m='81215'>features</span> <span m='81916'>for</span> <span
  m='82617'>these</span> <span m='83318'>1,475</span> <span
  m='84020'>pairs</span> <span m='84435'>and</span> <span
  m='84851'>trained</span> <span m='85267'>a</span> <span
  m='85682'>logistic</span> <span m='86098'>regression</span> <span
  m='86514'>model</span> <span m='86930'>on</span> <span m='87770'>these</span>
  <span m='88610'>differences.</span> </p><p><span m='89450'>Let</span> <span
  m='89918'>us</span> <span m='90387'>observe</span> <span m='90856'>the</span>
  <span m='91325'>results</span> <span m='91793'>of</span> <span
  m='92262'>this</span> <span m='92731'>experiment.</span> </p><p><span
  m='93200'>If</span> <span m='93485'>we</span> <span m='93770'>use</span> <span
  m='94056'>a</span> <span m='94341'>low</span> <span m='94627'>threshold</span>
  <span m='94912'>in</span> <span m='95198'>the</span> <span
  m='95483'>logistic</span> <span m='95769'>regression</span> <span
  m='96054'>model,</span> <span m='96340'>we</span> <span
  m='96788'>predict</span> <span m='97237'>more</span> <span
  m='97686'>false</span> <span m='98135'>positives</span> <span
  m='98583'>but</span> <span m='99032'>also</span> <span m='99481'>get</span>
  <span m='99930'>more</span> <span m='100333'>true</span> <span
  m='100736'>positives.</span> </p><p><span m='101140'>For</span> <span
  m='101532'>example,</span> <span m='101924'>the</span> <span
  m='102316'>classification</span> <span m='102708'>matrix</span> <span
  m='103100'>for</span> <span m='103557'>threshold</span> <span
  m='104014'>equal</span> <span m='104472'>to</span> <span m='104929'>0.2</span>
  <span m='105386'>is</span> <span m='105844'>as</span> <span
  m='106301'>follows.</span> </p><p><span m='110820'>Note</span> <span
  m='111396'>that</span> <span m='111972'>we</span> <span
  m='112548'>found</span> <span m='113124'>1,030</span> <span
  m='113700'>pairs</span> <span m='114276'>that</span> <span
  m='114852'>are</span> <span m='115428'>not</span> <span
  m='116004'>compatible</span> <span m='116580'>and</span> <span
  m='117081'>92</span> <span m='117582'>pairs</span> <span
  m='118084'>that</span> <span m='118585'>are</span> <span
  m='119087'>compatible</span> <span m='119588'>correctly.</span> </p><p><span
  m='120090'>Note</span> <span m='120690'>that</span> <span m='121291'>92</span>
  <span m='121892'>out</span> <span m='122493'>of</span> <span
  m='123093'>319--</span> <span m='123694'>which</span> <span
  m='124295'>is</span> <span m='124896'>227</span> <span m='125496'>plus</span>
  <span m='126097'>92</span> <span m='126698'>--of</span> <span
  m='127299'>these</span> <span m='127900'>were</span> <span
  m='128860'>correctly</span> <span m='129820'>identified.</span> </p><p><span
  m='130780'>That</span> <span m='131191'>is,</span> <span m='131602'>29%</span>
  <span m='132013'>percent</span> <span m='132424'>of</span> <span
  m='132835'>the</span> <span m='133246'>matches</span> <span
  m='133657'>we</span> <span m='134068'>recommend</span> <span
  m='134480'>would</span> <span m='134930'>be</span> <span
  m='135381'>successful,</span> <span m='135832'>a</span> <span
  m='136283'>very</span> <span m='136734'>high</span> <span
  m='137185'>success</span> <span m='137636'>rate</span> <span
  m='138087'>for</span> <span m='138538'>online</span> <span
  m='138989'>dating.</span> </p><p><span m='147310'>Clearly,</span> <span
  m='147574'>there</span> <span m='147838'>is</span> <span m='148102'>a</span>
  <span m='148367'>potential</span> <span m='148631'>for</span> <span
  m='148895'>using</span> <span m='149160'>many</span> <span
  m='149662'>other</span> <span m='150165'>analytic</span> <span
  m='150667'>methods.</span> </p><p><span m='151170'>Specifically</span> <span
  m='151751'>trees,</span> <span m='152333'>which</span> <span
  m='152915'>are</span> <span m='153497'>especially</span> <span
  m='154079'>useful</span> <span m='154531'>for</span> <span
  m='154984'>predicting</span> <span m='155437'>compatibility</span> <span
  m='155890'>if</span> <span m='156258'>there</span> <span m='156626'>are</span>
  <span m='156994'>nonlinear</span> <span m='157362'>relationships</span> <span
  m='157730'>between</span> <span m='158910'>variables.</span> </p><p><span
  m='160090'>Clustering</span> <span m='160504'>is</span> <span
  m='160918'>another</span> <span m='161332'>potential</span> <span
  m='161746'>approach</span> <span m='162160'>with</span> <span
  m='162478'>the</span> <span m='162797'>idea</span> <span m='163115'>of</span>
  <span m='163434'>segmenting</span> <span m='163752'>the</span> <span
  m='164071'>users.</span> </p><p><span m='164390'>Finally,</span> <span
  m='164857'>text</span> <span m='165324'>analytics</span> <span
  m='165791'>is</span> <span m='166258'>yet</span> <span
  m='166725'>another</span> <span m='167192'>approach</span> <span
  m='167660'>with</span> <span m='168104'>the</span> <span
  m='168548'>idea</span> <span m='168992'>of</span> <span
  m='169436'>analyzing</span> <span m='169880'>the</span> <span
  m='170324'>text</span> <span m='170768'>of</span> <span
  m='171212'>users'</span> <span m='171656'>profiles.</span> </p><p><span
  m='172100'>Of</span> <span m='172678'>course,</span> <span
  m='173257'>many</span> <span m='173835'>other</span> <span
  m='174414'>techniques</span> <span m='174992'>are</span> <span
  m='175571'>possible.</span> </p><p><span m='176150'>To</span> <span
  m='176504'>give</span> <span m='176858'>some</span> <span
  m='177212'>intuition</span> <span m='177567'>of</span> <span
  m='177921'>various</span> <span m='178275'>features,</span> <span
  m='178630'>let</span> <span m='178917'>us</span> <span m='179205'>see</span>
  <span m='179493'>how</span> <span m='179781'>the</span> <span
  m='180068'>probability</span> <span m='180356'>of</span> <span
  m='180644'>a</span> <span m='180932'>match</span> <span
  m='181220'>changes</span> <span m='181692'>with</span> <span
  m='182165'>the</span> <span m='182637'>distance</span> <span
  m='183110'>between</span> <span m='183582'>the</span> <span
  m='184055'>two</span> <span m='184527'>adults.</span> </p><p><span
  m='185000'>It</span> <span m='185492'>is</span> <span
  m='185984'>interesting</span> <span m='186476'>to</span> <span
  m='186968'>note</span> <span m='187461'>that</span> <span
  m='187953'>the</span> <span m='188445'>probability</span> <span
  m='188937'>drops</span> <span m='189430'>with</span> <span
  m='189690'>distance,</span> <span m='189950'>and</span> <span
  m='190210'>then</span> <span m='190470'>for</span> <span m='190730'>a</span>
  <span m='190990'>very</span> <span m='191250'>long</span> <span
  m='191510'>distance,</span> <span m='191770'>the</span> <span
  m='192802'>probability</span> <span m='193835'>increases</span> <span
  m='194867'>again.</span> </p><p><span m='195900'>Also</span> <span
  m='196281'>interesting</span> <span m='196663'>is</span> <span
  m='197045'>this</span> <span m='197426'>graph</span> <span
  m='197808'>that</span> <span m='198190'>shows</span> <span
  m='198526'>that</span> <span m='198862'>if</span> <span m='199199'>the</span>
  <span m='199535'>attractiveness</span> <span m='199871'>is</span> <span
  m='200208'>too</span> <span m='200544'>high</span> <span m='200880'>or</span>
  <span m='201217'>too</span> <span m='201553'>low,</span> <span
  m='201890'>the</span> <span m='202214'>probability</span> <span
  m='202538'>of</span> <span m='202862'>a</span> <span
  m='203187'>successful</span> <span m='203511'>match</span> <span
  m='203835'>decreases.</span> </p><p><span m='206990'>Finally,</span> <span
  m='207368'>if</span> <span m='207746'>the</span> <span
  m='208125'>difference</span> <span m='208503'>in</span> <span
  m='208881'>height</span> <span m='209260'>is</span> <span
  m='209638'>too</span> <span m='210016'>high</span> <span m='210395'>or</span>
  <span m='210773'>too</span> <span m='211151'>low,</span> <span
  m='211530'>the</span> <span m='212025'>probability</span> <span
  m='212521'>of</span> <span m='213017'>the</span> <span m='213512'>match</span>
  <span m='214008'>also</span> <span m='214504'>drops.</span> </p><p><span
  m='215000'>It</span> <span m='215348'>seems</span> <span m='215696'>the</span>
  <span m='216044'>sweet</span> <span m='216392'>spot</span> <span
  m='216740'>is</span> <span m='217088'>a</span> <span
  m='217436'>difference</span> <span m='217784'>in</span> <span
  m='218132'>height</span> <span m='218480'>between</span> <span
  m='219058'>four</span> <span m='219636'>and</span> <span
  m='220214'>eight</span> <span m='220792'>inches.</span> </p>
embedded_media:
  - uid: 4fed0484b2381de13264babe4fe36e2e
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: pelPpuYUAho
  - uid: c0987381088dab617d5f2d2a6b456a79
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: pelPpuYUAho
  - uid: f919e17c428b46ff19a638e9415c3e59
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/pelPpuYUAho/default.jpg'
  - uid: c5080ce6832631c4130c14f488a97269
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: pelPpuYUAho.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores/video-3-predicting-compatibility-scores-0/pelPpuYUAho.srt
  - uid: 2f948d5500c8c0f4798f92410ee293ef
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: pelPpuYUAho.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/eharmony-maximizing-the-probability-of-love/video-3-predicting-compatibility-scores/video-3-predicting-compatibility-scores-0/pelPpuYUAho.pdf
  - uid: 85e70f82b7d91024f06cd60637c89d97
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0c2996d31bba2bc0c062c9a928bffe6c
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 53ed72f558fdd901679e5fe376cff303
    parent_uid: a45eec02d316afae45fb3041650e1173
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_9.3.05_300k.mp4
type: courses
layout: video
---
