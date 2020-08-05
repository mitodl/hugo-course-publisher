---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mw0jJm_3KXs
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: Video-YouTube-Stream
    type: Video
    uid: 8cc080aa03d0b2b95f3cfeedbcca61f7
  - id: 3Play-3Play YouTube id-Stream
    media_location: mw0jJm_3KXs
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 44b3454e8c2155542dbcec1c3f75bc28
  - id: mw0jJm_3KXs.srt
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-5-test-set-predictions/video-5-test-set-predictions-0/mw0jJm_3KXs.srt
    title: 3play caption file
    type: null
    uid: d8abfd8301ab13046605a7056195d169
  - id: mw0jJm_3KXs.pdf
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-5-test-set-predictions/video-5-test-set-predictions-0/mw0jJm_3KXs.pdf
    title: 3play pdf file
    type: null
    uid: e82535069420683bd5c8cdad0d6f7760
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c8736cf02d19488f2bb7b928831207a0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f669a1b60c75776ffd90d9609ed33524
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/mw0jJm_3KXs/default.jpg'
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 91e91efd3686848260596a5523f30201
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.4.06_300k.mp4
    parent_uid: b17dd6c88f73c200ec7c729b17c6f6d6
    title: Video-Internet Archive-MP4
    type: Video
    uid: d428cdc60a04b3096aef7ad38d54663d
inline_embed_id: 63143767video5testsetpredictions29507762
order_index: 739
parent_uid: bafc7d5602f9e47a53ea0d210aa17805
related_resources_text: ''
short_url: video-5-test-set-predictions-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-5-test-set-predictions/video-5-test-set-predictions-0
title: 'Video 5: Test Set Predictions'
transcript: >-
  <p><span m='4490'>Now</span> <span m='4919'>it's</span> <span
  m='5348'>time</span> <span m='5777'>to</span> <span m='6206'>evaluate</span>
  <span m='6635'>our</span> <span m='7064'>models</span> <span
  m='7493'>on</span> <span m='7922'>the</span> <span m='8351'>testing</span>
  <span m='8780'>set.</span> </p><p><span m='9210'>So</span> <span
  m='9424'>the</span> <span m='9639'>first</span> <span m='9853'>model</span>
  <span m='10068'>we're</span> <span m='10282'>going</span> <span
  m='10497'>to</span> <span m='10711'>want</span> <span m='10926'>to</span>
  <span m='11140'>look</span> <span m='11355'>at</span> <span
  m='11570'>is</span> <span m='11898'>that</span> <span m='12227'>smart</span>
  <span m='12556'>baseline</span> <span m='12885'>model</span> <span
  m='13214'>that</span> <span m='13543'>basically</span> <span
  m='13872'>just</span> <span m='14201'>took</span> <span m='14530'>a</span>
  <span m='14865'>look</span> <span m='15200'>at</span> <span
  m='15535'>the</span> <span m='15870'>polling</span> <span
  m='16205'>results</span> <span m='16540'>from</span> <span
  m='16875'>the</span> <span m='17210'>Rasmussen</span> <span
  m='17545'>poll</span> <span m='17880'>and</span> <span m='18130'>used</span>
  <span m='18380'>those</span> <span m='18630'>to</span> <span
  m='18880'>determine</span> <span m='19130'>who</span> <span
  m='19380'>was</span> <span m='19630'>predicted</span> <span
  m='20116'>to</span> <span m='20602'>win</span> <span m='21088'>the</span>
  <span m='21574'>election.</span> </p><p><span m='22060'>So</span> <span
  m='22408'>it's</span> <span m='22757'>very</span> <span m='23106'>easy</span>
  <span m='23455'>to</span> <span m='23803'>compute</span> <span
  m='24152'>the</span> <span m='24501'>outcome</span> <span m='24850'>for</span>
  <span m='25241'>this</span> <span m='25632'>simple</span> <span
  m='26023'>baseline</span> <span m='26415'>on</span> <span m='26806'>the</span>
  <span m='27197'>testing</span> <span m='27588'>set.</span> </p><p><span
  m='27980'>We're</span> <span m='28344'>going</span> <span m='28708'>to</span>
  <span m='29072'>want</span> <span m='29436'>to</span> <span
  m='29800'>table</span> <span m='30164'>the</span> <span
  m='30528'>testing</span> <span m='30892'>set</span> <span
  m='31256'>outcome</span> <span m='31620'>variable,</span> <span
  m='32348'>Republican,</span> <span m='33076'>and</span> <span
  m='33804'>we're</span> <span m='34532'>going</span> <span m='35260'>to</span>
  <span m='35664'>compare</span> <span m='36068'>that</span> <span
  m='36472'>against</span> <span m='36877'>the</span> <span
  m='37281'>actual</span> <span m='37685'>outcome</span> <span
  m='38090'>of</span> <span m='38342'>the</span> <span m='38595'>smart</span>
  <span m='38847'>baseline,</span> <span m='39100'>which</span> <span
  m='39352'>as</span> <span m='39605'>you</span> <span m='39857'>recall</span>
  <span m='40110'>would</span> <span m='40548'>be</span> <span
  m='40986'>the</span> <span m='41424'>sign</span> <span m='41862'>of</span>
  <span m='42300'>the</span> <span m='42738'>testing</span> <span
  m='43176'>set's</span> <span m='43614'>Rasmussen</span> <span
  m='44052'>variables.</span> </p><p><span m='47770'>And</span> <span
  m='48196'>we</span> <span m='48622'>can</span> <span m='49048'>see</span>
  <span m='49475'>that</span> <span m='49901'>for</span> <span
  m='50327'>these</span> <span m='50753'>results,</span> <span
  m='51180'>there</span> <span m='51592'>are</span> <span m='52004'>18</span>
  <span m='52416'>times</span> <span m='52828'>where</span> <span
  m='53241'>the</span> <span m='53653'>smart</span> <span
  m='54065'>baseline</span> <span m='54477'>predicted</span> <span
  m='54890'>that</span> <span m='55193'>the</span> <span
  m='55497'>Democrat</span> <span m='55801'>would</span> <span
  m='56105'>win</span> <span m='56408'>and</span> <span m='56712'>it's</span>
  <span m='57016'>correct,</span> <span m='57320'>21</span> <span
  m='57765'>where</span> <span m='58210'>it</span> <span
  m='58655'>predicted</span> <span m='59100'>the</span> <span
  m='59545'>Republican</span> <span m='59990'>would</span> <span
  m='60435'>win</span> <span m='60880'>and</span> <span m='61323'>was</span>
  <span m='61766'>correct,</span> <span m='62210'>two</span> <span
  m='62653'>times</span> <span m='63096'>when</span> <span m='63540'>it</span>
  <span m='63983'>was</span> <span m='64426'>inconclusive,</span> <span
  m='64870'>and</span> <span m='65235'>four</span> <span m='65601'>times</span>
  <span m='65967'>where</span> <span m='66332'>it</span> <span
  m='66698'>predicted</span> <span m='67064'>Republican</span> <span
  m='67430'>but</span> <span m='67874'>the</span> <span
  m='68318'>Democrat</span> <span m='68762'>actually</span> <span
  m='69206'>won.</span> </p><p><span m='69650'>So</span> <span
  m='70075'>that's</span> <span m='70500'>four</span> <span
  m='70925'>mistakes</span> <span m='71350'>and</span> <span
  m='71775'>two</span> <span m='72200'>inconclusive</span> <span
  m='72625'>results</span> <span m='73050'>on</span> <span m='73422'>the</span>
  <span m='73794'>testing</span> <span m='74166'>set.</span> </p><p><span
  m='74539'>So</span> <span m='74711'>this</span> <span m='74884'>is</span>
  <span m='75056'>going</span> <span m='75229'>to</span> <span
  m='75402'>be</span> <span m='75574'>what</span> <span m='75747'>we're</span>
  <span m='75920'>going</span> <span m='76491'>to</span> <span
  m='77062'>compare</span> <span m='77633'>our</span> <span
  m='78205'>logistic</span> <span m='78776'>regression-based</span> <span
  m='79347'>model</span> <span m='79918'>against.</span> </p><p><span
  m='80490'>So</span> <span m='81003'>we</span> <span m='81516'>need</span>
  <span m='82030'>to</span> <span m='82543'>obtain</span> <span
  m='83056'>final</span> <span m='83570'>testing</span> <span
  m='84083'>set</span> <span m='84596'>prediction</span> <span
  m='85110'>from</span> <span m='85383'>our</span> <span m='85656'>model.</span>
  </p><p><span m='85930'>So</span> <span m='86340'>we</span> <span
  m='86750'>selected</span> <span m='87160'>mod2,</span> <span
  m='87570'>which</span> <span m='87980'>was</span> <span m='88390'>the</span>
  <span m='88800'>two</span> <span m='89210'>variable</span> <span
  m='89620'>model.</span> </p><p><span m='90030'>So</span> <span
  m='90626'>we'll</span> <span m='91223'>say,</span> <span
  m='91820'>TestPrediction</span> <span m='92416'>is</span> <span
  m='93013'>equal</span> <span m='93610'>to</span> <span m='94206'>the</span>
  <span m='94803'>predict</span> <span m='95400'>of</span> <span
  m='95750'>that</span> <span m='96100'>model</span> <span m='96450'>that</span>
  <span m='96800'>we</span> <span m='97150'>selected.</span> </p><p><span
  m='97500'>Now,</span> <span m='97868'>since</span> <span
  m='98237'>we're</span> <span m='98606'>actually</span> <span
  m='98975'>making</span> <span m='99343'>testing</span> <span
  m='99712'>set</span> <span m='100081'>predictions,</span> <span
  m='100450'>we'll</span> <span m='100955'>pass</span> <span
  m='101460'>in</span> <span m='101965'>newdata</span> <span m='102470'>=</span>
  <span m='102975'>Test,</span> <span m='103480'>and</span> <span
  m='103985'>again,</span> <span m='104490'>since</span> <span
  m='104884'>we</span> <span m='105278'>want</span> <span
  m='105672'>probabilities</span> <span m='106067'>to</span> <span
  m='106461'>be</span> <span m='106855'>returned,</span> <span
  m='107250'>we're</span> <span m='107550'>going</span> <span
  m='107850'>to</span> <span m='108150'>pass</span> <span
  m='108450'>type="response".</span> </p><p><span m='114280'>And</span> <span
  m='114659'>the</span> <span m='115038'>moment</span> <span
  m='115417'>of</span> <span m='115796'>truth,</span> <span
  m='116175'>we're</span> <span m='116554'>finally</span> <span
  m='116933'>going</span> <span m='117312'>to</span> <span
  m='117691'>table</span> <span m='118070'>the</span> <span
  m='118822'>test</span> <span m='119574'>set</span> <span
  m='120326'>Republican</span> <span m='121078'>value</span> <span
  m='121831'>against</span> <span m='122583'>the</span> <span
  m='123335'>test</span> <span m='124087'>prediction</span> <span
  m='124840'>being</span> <span m='125221'>greater</span> <span
  m='125603'>than</span> <span m='125984'>or</span> <span
  m='126366'>equal</span> <span m='126747'>to</span> <span
  m='127129'>0.5,</span> <span m='127511'>at</span> <span
  m='127892'>least</span> <span m='128274'>a</span> <span m='128655'>50%</span>
  <span m='129037'>probability</span> <span m='129419'>of</span> <span
  m='130041'>the</span> <span m='130664'>Republican</span> <span
  m='131287'>winning.</span> </p><p><span m='131910'>And</span> <span
  m='132237'>we</span> <span m='132565'>see</span> <span m='132892'>that</span>
  <span m='133220'>for</span> <span m='133547'>this</span> <span
  m='133875'>particular</span> <span m='134202'>case,</span> <span
  m='134530'>in</span> <span m='134857'>all</span> <span m='135185'>but</span>
  <span m='135512'>one</span> <span m='135840'>of</span> <span
  m='136261'>the</span> <span m='136682'>45</span> <span
  m='137103'>observations</span> <span m='137524'>in</span> <span
  m='137945'>the</span> <span m='138366'>testing</span> <span
  m='138787'>set,</span> <span m='139208'>we're</span> <span
  m='139629'>correct.</span> </p><p><span m='140050'>Now,</span> <span
  m='140340'>we</span> <span m='140630'>could</span> <span
  m='140920'>have</span> <span m='141210'>tried</span> <span
  m='141500'>changing</span> <span m='141790'>this</span> <span
  m='142080'>threshold</span> <span m='142370'>from</span> <span
  m='142813'>0.5</span> <span m='143257'>to</span> <span m='143700'>other</span>
  <span m='144144'>values</span> <span m='144588'>and</span> <span
  m='145031'>computed</span> <span m='145475'>out</span> <span
  m='145919'>an</span> <span m='146362'>ROC</span> <span
  m='146806'>curve,</span> <span m='147250'>but</span> <span
  m='147473'>that</span> <span m='147697'>doesn't</span> <span
  m='147920'>quite</span> <span m='148144'>make</span> <span
  m='148368'>as</span> <span m='148591'>much</span> <span
  m='148815'>sense</span> <span m='149039'>in</span> <span
  m='149262'>this</span> <span m='149486'>setting</span> <span
  m='149710'>where</span> <span m='149985'>we're</span> <span
  m='150261'>just</span> <span m='150537'>trying</span> <span
  m='150812'>to</span> <span m='151088'>accurately</span> <span
  m='151364'>predict</span> <span m='151640'>the</span> <span
  m='151920'>outcome</span> <span m='152200'>of</span> <span
  m='152480'>each</span> <span m='152760'>state</span> <span
  m='153040'>and</span> <span m='153320'>we</span> <span m='153600'>don't</span>
  <span m='153880'>care</span> <span m='154160'>more</span> <span
  m='154440'>about</span> <span m='154728'>one</span> <span
  m='155017'>sort</span> <span m='155306'>of</span> <span
  m='155595'>error--</span> <span m='155884'>when</span> <span
  m='156173'>we</span> <span m='156462'>predicted</span> <span
  m='156751'>Republican</span> <span m='157040'>and</span> <span
  m='157348'>it</span> <span m='157657'>was</span> <span
  m='157966'>actually</span> <span m='158275'>Democrat--</span> <span
  m='158583'>than</span> <span m='158892'>the</span> <span
  m='159201'>other,</span> <span m='159510'>where</span> <span
  m='159846'>we</span> <span m='160183'>predicted</span> <span
  m='160520'>Democrat</span> <span m='160856'>and</span> <span
  m='161193'>it</span> <span m='161530'>was</span> <span
  m='161866'>actually</span> <span m='162203'>Republican.</span> </p><p><span
  m='162540'>So</span> <span m='162863'>in</span> <span m='163186'>this</span>
  <span m='163510'>particular</span> <span m='163833'>case,</span> <span
  m='164156'>we</span> <span m='164480'>feel</span> <span m='164803'>OK</span>
  <span m='165126'>just</span> <span m='165450'>using</span> <span
  m='166085'>the</span> <span m='166721'>cutoff</span> <span
  m='167356'>of</span> <span m='167992'>0.5</span> <span m='168627'>to</span>
  <span m='169263'>evaluate</span> <span m='169898'>our</span> <span
  m='170534'>model.</span> </p><p><span m='171170'>So</span> <span
  m='171428'>let's</span> <span m='171686'>take</span> <span m='171944'>a</span>
  <span m='172202'>look</span> <span m='172460'>now</span> <span
  m='172719'>at</span> <span m='172977'>the</span> <span
  m='173235'>mistake</span> <span m='173493'>we</span> <span
  m='173751'>made</span> <span m='174010'>and</span> <span m='174325'>see</span>
  <span m='174641'>if</span> <span m='174956'>we</span> <span
  m='175272'>can</span> <span m='175587'>understand</span> <span
  m='175903'>what's</span> <span m='176218'>going</span> <span
  m='176534'>on.</span> </p><p><span m='176850'>So</span> <span
  m='177215'>to</span> <span m='177581'>actually</span> <span
  m='177946'>pull</span> <span m='178312'>out</span> <span m='178677'>the</span>
  <span m='179043'>mistake</span> <span m='179408'>we</span> <span
  m='179774'>made,</span> <span m='180140'>we</span> <span m='180521'>can</span>
  <span m='180902'>just</span> <span m='181283'>take</span> <span
  m='181664'>a</span> <span m='182045'>subset</span> <span m='182426'>of</span>
  <span m='182807'>the</span> <span m='183188'>testing</span> <span
  m='183569'>set</span> <span m='183950'>and</span> <span
  m='184346'>limit</span> <span m='184742'>it</span> <span m='185138'>to</span>
  <span m='185535'>when</span> <span m='185931'>we</span> <span
  m='186327'>predicted</span> <span m='186723'>true,</span> <span
  m='187120'>but</span> <span m='187450'>actually</span> <span
  m='187780'>the</span> <span m='188110'>Democrat</span> <span
  m='188440'>won,</span> <span m='188770'>which</span> <span
  m='189100'>is</span> <span m='189504'>the</span> <span m='189908'>case</span>
  <span m='190312'>when</span> <span m='190717'>that</span> <span
  m='191121'>one</span> <span m='191525'>failed.</span> </p><p><span
  m='191930'>So</span> <span m='192588'>this</span> <span
  m='193246'>would</span> <span m='193905'>be</span> <span
  m='194563'>when</span> <span m='195221'>TestPrediction</span> <span
  m='195880'>is</span> <span m='196327'>greater</span> <span
  m='196775'>than</span> <span m='197223'>or</span> <span
  m='197670'>equal</span> <span m='198118'>to</span> <span
  m='198566'>0.5,</span> <span m='199013'>and</span> <span m='199461'>it</span>
  <span m='199909'>was</span> <span m='200356'>not</span> <span
  m='200804'>a</span> <span m='201252'>Republican.</span> </p><p><span
  m='201700'>So</span> <span m='202580'>Republican</span> <span
  m='203460'>was</span> <span m='204340'>equal</span> <span m='205220'>to</span>
  <span m='206100'>zero.</span> </p><p><span m='206980'>So</span> <span
  m='207290'>here</span> <span m='207600'>is</span> <span m='207910'>that</span>
  <span m='208220'>subset,</span> <span m='208530'>which</span> <span
  m='208840'>just</span> <span m='209150'>has</span> <span m='209485'>one</span>
  <span m='209821'>observation</span> <span m='210156'>since</span> <span
  m='210492'>we</span> <span m='210827'>made</span> <span m='211163'>just</span>
  <span m='211498'>one</span> <span m='211834'>mistake.</span> </p><p><span
  m='212170'>So</span> <span m='212412'>this</span> <span m='212655'>was</span>
  <span m='212898'>for</span> <span m='213140'>the</span> <span
  m='213383'>year</span> <span m='213626'>2012,</span> <span
  m='213869'>the</span> <span m='214111'>testing</span> <span
  m='214354'>set</span> <span m='214597'>year.</span> </p><p><span
  m='214840'>This</span> <span m='215188'>was</span> <span m='215536'>the</span>
  <span m='215885'>state</span> <span m='216233'>of</span> <span
  m='216581'>Florida.</span> </p><p><span m='216930'>And</span> <span
  m='217353'>looking</span> <span m='217776'>through</span> <span
  m='218200'>these</span> <span m='218623'>predictor</span> <span
  m='219046'>variables,</span> <span m='219470'>we</span> <span
  m='219841'>see</span> <span m='220212'>why</span> <span m='220584'>we</span>
  <span m='220955'>made</span> <span m='221327'>the</span> <span
  m='221698'>mistake.</span> </p><p><span m='222070'>The</span> <span
  m='222453'>Rasmussen</span> <span m='222836'>poll</span> <span
  m='223220'>gave</span> <span m='223603'>the</span> <span
  m='223986'>Republican</span> <span m='224370'>a</span> <span
  m='224753'>two</span> <span m='225136'>percentage</span> <span
  m='225520'>point</span> <span m='226100'>lead,</span> <span
  m='226680'>SurveyUSA</span> <span m='227260'>called</span> <span
  m='227840'>a</span> <span m='228420'>tie,</span> <span
  m='229000'>DiffCount</span> <span m='229300'>said</span> <span
  m='229600'>there</span> <span m='229900'>were</span> <span
  m='230200'>six</span> <span m='230500'>more</span> <span
  m='230800'>polls</span> <span m='231100'>that</span> <span
  m='231400'>predicted</span> <span m='231880'>Republican</span> <span
  m='232360'>than</span> <span m='232840'>Democrat,</span> <span
  m='233320'>and</span> <span m='233575'>two</span> <span
  m='233831'>thirds</span> <span m='234087'>of</span> <span
  m='234342'>the</span> <span m='234598'>polls</span> <span
  m='234854'>predicted</span> <span m='235110'>the</span> <span
  m='235405'>Republican</span> <span m='235700'>was</span> <span
  m='235995'>going</span> <span m='236290'>to</span> <span
  m='236585'>win.</span> </p><p><span m='236880'>But</span> <span
  m='237125'>actually</span> <span m='237371'>in</span> <span
  m='237616'>this</span> <span m='237862'>case,</span> <span
  m='238107'>the</span> <span m='238353'>Republican</span> <span
  m='238598'>didn't</span> <span m='238844'>win.</span> </p><p><span
  m='239090'>Barack</span> <span m='239545'>Obama</span> <span
  m='240001'>won</span> <span m='240457'>the</span> <span
  m='240912'>state</span> <span m='241368'>of</span> <span
  m='241824'>Florida</span> <span m='242280'>in</span> <span
  m='242714'>2012</span> <span m='243148'>over</span> <span
  m='243582'>Mitt</span> <span m='244016'>Romney.</span> </p><p><span
  m='244450'>So</span> <span m='244812'>the</span> <span
  m='245175'>models</span> <span m='245538'>here</span> <span
  m='245901'>are</span> <span m='246264'>not</span> <span
  m='246627'>magic,</span> <span m='246990'>and</span> <span
  m='247438'>given</span> <span m='247887'>this</span> <span
  m='248336'>sort</span> <span m='248785'>of</span> <span
  m='249234'>data,</span> <span m='249683'>it's</span> <span
  m='250132'>pretty</span> <span m='250581'>unsurprising</span> <span
  m='251030'>that</span> <span m='251312'>our</span> <span
  m='251595'>model</span> <span m='251878'>actually</span> <span
  m='252161'>didn't</span> <span m='252444'>get</span> <span
  m='252727'>Florida</span> <span m='253010'>correct</span> <span
  m='253293'>in</span> <span m='253577'>this</span> <span m='253861'>case</span>
  <span m='254145'>and</span> <span m='254428'>made</span> <span
  m='254712'>the</span> <span m='254996'>mistake.</span> </p><p><span
  m='255280'>However,</span> <span m='255624'>overall,</span> <span
  m='255968'>it</span> <span m='256312'>seems</span> <span m='256657'>to</span>
  <span m='257001'>be</span> <span m='257345'>outperforming</span> <span
  m='257690'>the</span> <span m='258031'>smart</span> <span
  m='258373'>baseline</span> <span m='258715'>that</span> <span
  m='259056'>we</span> <span m='259398'>selected,</span> <span
  m='259740'>and</span> <span m='259960'>so</span> <span m='260180'>we</span>
  <span m='260400'>think</span> <span m='260620'>that</span> <span
  m='260840'>maybe</span> <span m='261060'>this</span> <span
  m='261280'>would</span> <span m='261500'>be</span> <span m='261720'>a</span>
  <span m='261940'>nice</span> <span m='262160'>model</span> <span
  m='262380'>to</span> <span m='262841'>use</span> <span m='263303'>in</span>
  <span m='263765'>the</span> <span m='264226'>election</span> <span
  m='264688'>prediction.</span> </p>
uid: b17dd6c88f73c200ec7c729b17c6f6d6
type: course
layout: video
---
