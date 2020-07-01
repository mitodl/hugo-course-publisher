---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: iJvEgQkLjow
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: Video-YouTube-Stream
    type: Video
    uid: 2d79ed84819e071caacc6d9daaec5422
  - id: 3Play-3Play YouTube id-Stream
    media_location: iJvEgQkLjow
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 92caf85625bb4a183dc43d2fa4b39bed
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/iJvEgQkLjow/default.jpg'
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6c6e442dff22a6a078bdd658b9a0614d
  - id: iJvEgQkLjow.srt
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r/video-8-predicting-healthcare-costs-in-r/iJvEgQkLjow.srt
    title: 3play caption file
    type: null
    uid: 39fe3dc1da8ac0702f02c4c4dace83eb
  - id: iJvEgQkLjow.pdf
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r/video-8-predicting-healthcare-costs-in-r/iJvEgQkLjow.pdf
    title: 3play pdf file
    type: null
    uid: 3a7b16d69be991a0bbab097d12ac4535
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4a223d944839d52c78c34d509ac84248
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a351f2bb06bf01bb26dcbc85fb397d79
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.3.15_300k.mp4
    parent_uid: 3f95c5adb13cf1d6c97b2ee6e111992a
    title: Video-Internet Archive-MP4
    type: Video
    uid: a9f74f7cea24f202e05305f18f1eb172
inline_embed_id: 23357306video8predictinghealthcarecostsinr28566615
order_index: 923
parent_uid: 42af8e9a43f3ab0e231be7ab1d08c0ca
related_resources_text: ''
short_url: video-8-predicting-healthcare-costs-in-r
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-8-predicting-healthcare-cost-in-r/video-8-predicting-healthcare-costs-in-r
title: 'Video 8: Predicting Healthcare Costs in R'
transcript: >-
  <p><span m='4500'>In</span> <span m='4777'>this</span> <span
  m='5055'>video,</span> <span m='5332'>we'll</span> <span m='5610'>build</span>
  <span m='5887'>a</span> <span m='6165'>CART</span> <span m='6442'>model</span>
  <span m='6720'>to</span> <span m='7292'>predict</span> <span
  m='7865'>healthcare</span> <span m='8437'>cost.</span> </p><p><span
  m='9010'>First,</span> <span m='9568'>let's</span> <span m='10127'>make</span>
  <span m='10686'>sure</span> <span m='11245'>the</span> <span
  m='11804'>packages</span> <span m='12363'>rpart</span> <span
  m='12922'>and</span> <span m='13481'>rpart.plot</span> <span
  m='14040'>are</span> <span m='14423'>loaded</span> <span m='14806'>with</span>
  <span m='15190'>the</span> <span m='15573'>library</span> <span
  m='15956'>function.</span> </p><p><span m='19440'>You</span> <span
  m='19761'>should</span> <span m='20083'>have</span> <span
  m='20405'>already</span> <span m='20726'>installed</span> <span
  m='21048'>them</span> <span m='21370'>in</span> <span m='21746'>the</span>
  <span m='22122'>previous</span> <span m='22498'>lecture</span> <span
  m='22875'>on</span> <span m='23251'>predicting</span> <span
  m='23627'>Supreme</span> <span m='24003'>Court</span> <span
  m='24380'>decisions.</span> </p><p><span m='29020'>Now,</span> <span
  m='29390'>let's</span> <span m='29760'>build</span> <span m='30130'>our</span>
  <span m='30500'>CART</span> <span m='30870'>model.</span> </p><p><span
  m='31240'>We'll</span> <span m='32230'>call</span> <span m='33220'>it</span>
  <span m='34210'>ClaimsTree.</span> </p><p><span m='35200'>And</span> <span
  m='35908'>we'll</span> <span m='36617'>use</span> <span m='37326'>the</span>
  <span m='38035'>rpart</span> <span m='38744'>function</span> <span
  m='39453'>to</span> <span m='40162'>predict</span> <span
  m='40871'>bucket2009,</span> <span m='41580'>using</span> <span
  m='43432'>as</span> <span m='45285'>independent</span> <span
  m='47138'>variables:</span> <span m='48991'>age,</span> <span
  m='50844'>arthritis,</span> <span m='52697'>alzheimers,</span> <span
  m='54550'>cancer,</span> <span m='57778'>copd,</span> <span
  m='61006'>depression,</span> <span m='64235'>diabetes,</span> <span
  m='67463'>heart.failure,</span> <span m='70691'>ihd,</span> <span
  m='73920'>kidney,</span> <span m='76352'>osteoporosis,</span> <span
  m='78785'>and</span> <span m='81217'>stroke.</span> </p><p><span
  m='83650'>We'll</span> <span m='85323'>also</span> <span m='86996'>use</span>
  <span m='88670'>bucket2008</span> <span m='90343'>and</span> <span
  m='92016'>reimbursement2008.</span> </p><p><span m='93690'>The</span> <span
  m='94074'>data</span> <span m='94459'>set</span> <span m='94843'>we'll</span>
  <span m='95228'>use</span> <span m='95612'>to</span> <span
  m='95997'>build</span> <span m='96381'>our</span> <span m='96766'>model</span>
  <span m='97150'>is</span> <span m='97535'>ClaimsTrain.</span> </p><p><span
  m='103440'>And</span> <span m='104102'>then</span> <span
  m='104764'>we'll</span> <span m='105426'>add</span> <span
  m='106088'>the</span> <span m='106751'>arguments,</span> <span
  m='107413'>method</span> <span m='108075'>=</span> <span
  m='108737'>"class",</span> <span m='109400'>since</span> <span
  m='110306'>we</span> <span m='111212'>have</span> <span m='112119'>a</span>
  <span m='113025'>classification</span> <span m='113931'>problem</span> <span
  m='114838'>here,</span> <span m='115744'>and</span> <span m='116650'>cp</span>
  <span m='117557'>=</span> <span m='118463'>0.00005.</span> </p><p><span
  m='119370'>Note</span> <span m='119704'>that</span> <span
  m='120038'>even</span> <span m='120373'>though</span> <span
  m='120707'>we</span> <span m='121042'>have</span> <span m='121376'>a</span>
  <span m='121711'>multi-class</span> <span m='122045'>classification</span>
  <span m='122380'>problem</span> <span m='122769'>here,</span> <span
  m='123158'>we</span> <span m='123547'>build</span> <span m='123936'>our</span>
  <span m='124325'>tree</span> <span m='124714'>in</span> <span
  m='125103'>the</span> <span m='125492'>same</span> <span m='125881'>way</span>
  <span m='126270'>as</span> <span m='127017'>a</span> <span
  m='127765'>binary</span> <span m='128513'>classification</span> <span
  m='129261'>problem.</span> </p><p><span m='130009'>So</span> <span
  m='130394'>go</span> <span m='130779'>ahead</span> <span m='131164'>and</span>
  <span m='131549'>hit</span> <span m='131934'>Enter.</span> </p><p><span
  m='132320'>The</span> <span m='132772'>cp</span> <span m='133225'>value</span>
  <span m='133678'>we're</span> <span m='134131'>using</span> <span
  m='134584'>here</span> <span m='135037'>was</span> <span
  m='135490'>selected</span> <span m='136160'>through</span> <span
  m='136830'>cross-validation</span> <span m='137500'>on</span> <span
  m='137985'>the</span> <span m='138470'>training</span> <span
  m='138955'>set.</span> </p><p><span m='139440'>We</span> <span
  m='139895'>won't</span> <span m='140350'>perform</span> <span
  m='140805'>the</span> <span m='141260'>cross-validation</span> <span
  m='141715'>here,</span> <span m='142170'>because</span> <span
  m='142526'>it</span> <span m='142882'>takes</span> <span m='143238'>a</span>
  <span m='143595'>significant</span> <span m='143951'>amount</span> <span
  m='144307'>of</span> <span m='144663'>time</span> <span m='145020'>on</span>
  <span m='145407'>a</span> <span m='145794'>data</span> <span
  m='146181'>set</span> <span m='146568'>of</span> <span m='146955'>this</span>
  <span m='147342'>size.</span> </p><p><span m='147730'>Remember</span> <span
  m='148538'>that</span> <span m='149347'>we</span> <span m='150155'>have</span>
  <span m='150964'>almost</span> <span m='151772'>275,000</span> <span
  m='152581'>observations</span> <span m='153390'>in</span> <span
  m='153920'>our</span> <span m='154450'>training</span> <span
  m='154980'>set.</span> </p><p><span m='155510'>But</span> <span
  m='155791'>keep</span> <span m='156072'>in</span> <span m='156353'>mind</span>
  <span m='156635'>that</span> <span m='156916'>the</span> <span
  m='157197'>R</span> <span m='157478'>commands</span> <span
  m='157760'>needed</span> <span m='158191'>for</span> <span
  m='158622'>cross-validation</span> <span m='159053'>here</span> <span
  m='159484'>are</span> <span m='159915'>the</span> <span m='160346'>same</span>
  <span m='160777'>as</span> <span m='161208'>those</span> <span
  m='161639'>used</span> <span m='162070'>in</span> <span m='162420'>the</span>
  <span m='162770'>previous</span> <span m='163120'>lecture</span> <span
  m='163470'>on</span> <span m='163820'>predicting</span> <span
  m='164170'>Supreme</span> <span m='164520'>Court</span> <span
  m='164870'>decisions.</span> </p><p><span m='166780'>So</span> <span
  m='167075'>now</span> <span m='167371'>that</span> <span m='167667'>our</span>
  <span m='167962'>model's</span> <span m='168258'>done,</span> <span
  m='168554'>let's</span> <span m='168850'>take</span> <span m='169151'>a</span>
  <span m='169452'>look</span> <span m='169753'>at</span> <span
  m='170054'>our</span> <span m='170355'>tree</span> <span
  m='170656'>with</span> <span m='170957'>the</span> <span m='171258'>prp</span>
  <span m='171559'>function.</span> </p><p><span m='177510'>It</span> <span
  m='177750'>might</span> <span m='177990'>take</span> <span m='178230'>a</span>
  <span m='178470'>while</span> <span m='178710'>to</span> <span
  m='178950'>load,</span> <span m='179190'>because</span> <span
  m='179430'>we</span> <span m='179670'>have</span> <span m='180122'>a</span>
  <span m='180574'>huge</span> <span m='181026'>tree</span> <span
  m='181478'>here.</span> </p><p><span m='181930'>This</span> <span
  m='182330'>makes</span> <span m='182730'>sense</span> <span
  m='183130'>for</span> <span m='183530'>a</span> <span m='183930'>few</span>
  <span m='184330'>reasons.</span> </p><p><span m='184730'>One</span> <span
  m='185031'>is</span> <span m='185332'>the</span> <span m='185633'>large</span>
  <span m='185934'>number</span> <span m='186235'>of</span> <span
  m='186536'>observations</span> <span m='186837'>in</span> <span
  m='187138'>our</span> <span m='187439'>training</span> <span
  m='187740'>set.</span> </p><p><span m='188980'>Another</span> <span
  m='189353'>is</span> <span m='189727'>that</span> <span m='190101'>we</span>
  <span m='190475'>have</span> <span m='190848'>a</span> <span
  m='191222'>five-class</span> <span m='191596'>classification</span> <span
  m='191970'>problem,</span> <span m='192444'>so</span> <span
  m='192918'>the</span> <span m='193392'>classification</span> <span
  m='193866'>is</span> <span m='194340'>more</span> <span
  m='194840'>complex</span> <span m='195340'>than</span> <span
  m='195840'>a</span> <span m='196340'>binary</span> <span
  m='196840'>classification</span> <span m='197340'>case,</span> <span
  m='197840'>like</span> <span m='198155'>the</span> <span m='198471'>one</span>
  <span m='198786'>we</span> <span m='199102'>saw</span> <span
  m='199417'>in</span> <span m='199733'>the</span> <span
  m='200048'>previous</span> <span m='200364'>lecture.</span> </p><p><span
  m='200680'>The</span> <span m='201120'>trees</span> <span
  m='201561'>used</span> <span m='202002'>by</span> <span
  m='202443'>D2Hawkeye</span> <span m='202884'>were</span> <span
  m='203325'>also</span> <span m='203766'>very</span> <span
  m='204207'>large</span> <span m='204648'>CART</span> <span
  m='205089'>trees.</span> </p><p><span m='205530'>While</span> <span
  m='205875'>this</span> <span m='206220'>hurts</span> <span
  m='206565'>the</span> <span m='206910'>interpretability</span> <span
  m='207255'>of</span> <span m='207600'>the</span> <span
  m='207945'>model,</span> <span m='208290'>it's</span> <span
  m='208586'>still</span> <span m='208883'>possible</span> <span
  m='209180'>to</span> <span m='209476'>describe</span> <span
  m='209773'>each</span> <span m='210070'>of</span> <span m='210366'>the</span>
  <span m='210663'>buckets</span> <span m='210960'>of</span> <span
  m='211256'>the</span> <span m='211553'>tree</span> <span
  m='211850'>according</span> <span m='212452'>to</span> <span
  m='213055'>the</span> <span m='213657'>splits.</span> </p><p><span
  m='214260'>So</span> <span m='214651'>now,</span> <span
  m='215042'>let's</span> <span m='215433'>make</span> <span
  m='215824'>predictions</span> <span m='216215'>on</span> <span
  m='216606'>the</span> <span m='216997'>test</span> <span
  m='217388'>set.</span> </p><p><span m='217780'>So</span> <span
  m='218388'>go</span> <span m='218996'>back</span> <span m='219604'>to</span>
  <span m='220213'>your</span> <span m='220821'>R</span> <span
  m='221429'>console,</span> <span m='222037'>and</span> <span
  m='222646'>we'll</span> <span m='223254'>call</span> <span
  m='223862'>our</span> <span m='224470'>predictions</span> <span
  m='225079'>PredictTest,</span> <span m='225815'>where</span> <span
  m='226551'>we'll</span> <span m='227287'>use</span> <span
  m='228023'>the</span> <span m='228759'>predict</span> <span
  m='229495'>function</span> <span m='230231'>for</span> <span
  m='230967'>our</span> <span m='231703'>model</span> <span
  m='232440'>ClaimsTree,</span> <span m='233343'>and</span> <span
  m='234246'>our</span> <span m='235150'>newdata</span> <span
  m='236053'>is</span> <span m='236956'>ClaimsTest.</span> </p><p><span
  m='242680'>And</span> <span m='243008'>we</span> <span m='243337'>want</span>
  <span m='243666'>to</span> <span m='243995'>add</span> <span
  m='244323'>type</span> <span m='244652'>=</span> <span
  m='244981'>"class"</span> <span m='245310'>to</span> <span
  m='245670'>get</span> <span m='246030'>class</span> <span
  m='246390'>predictions.</span> </p><p><span m='249270'>And</span> <span
  m='249587'>we</span> <span m='249904'>can</span> <span m='250221'>make</span>
  <span m='250538'>our</span> <span m='250855'>classification</span> <span
  m='251172'>matrix</span> <span m='251490'>on</span> <span
  m='251848'>the</span> <span m='252207'>test</span> <span m='252566'>set</span>
  <span m='252925'>to</span> <span m='253283'>compute</span> <span
  m='253642'>the</span> <span m='254001'>accuracy.</span> </p><p><span
  m='254360'>So</span> <span m='254747'>we'll</span> <span m='255134'>use</span>
  <span m='255521'>the</span> <span m='255909'>table</span> <span
  m='256296'>function,</span> <span m='256683'>where</span> <span
  m='257070'>the</span> <span m='257458'>actual</span> <span
  m='257845'>outcomes</span> <span m='258232'>are</span> <span
  m='258620'>ClaimsTest$bucket2009,</span> <span m='259818'>and</span> <span
  m='261016'>our</span> <span m='262215'>predictions</span> <span
  m='263413'>are</span> <span m='264611'>PredictTest.</span> </p><p><span
  m='269100'>So</span> <span m='269380'>to</span> <span
  m='269660'>compute</span> <span m='269940'>the</span> <span
  m='270220'>accuracy,</span> <span m='270500'>we</span> <span
  m='270780'>need</span> <span m='271060'>to</span> <span m='271346'>add</span>
  <span m='271632'>up</span> <span m='271918'>the</span> <span
  m='272205'>numbers</span> <span m='272491'>on</span> <span
  m='272777'>the</span> <span m='273063'>diagonal</span> <span
  m='273350'>and</span> <span m='273645'>divide</span> <span
  m='273940'>by</span> <span m='274236'>the</span> <span m='274531'>total</span>
  <span m='274827'>number</span> <span m='275122'>of</span> <span
  m='275418'>observations</span> <span m='275713'>in</span> <span
  m='276009'>our</span> <span m='276304'>test</span> <span
  m='276600'>set.</span> </p><p><span m='277790'>So</span> <span
  m='279174'>we</span> <span m='280559'>have</span> <span
  m='281944'>114141</span> <span m='283329'>+</span> <span
  m='284714'>16102</span> <span m='286099'>+</span> <span m='287484'>118</span>
  <span m='288869'>+</span> <span m='290254'>201</span> <span
  m='291639'>+</span> <span m='293024'>0.</span> </p><p><span
  m='294409'>And</span> <span m='294804'>we'll</span> <span
  m='295199'>divide</span> <span m='295594'>by</span> <span
  m='295989'>the</span> <span m='296384'>number</span> <span
  m='296779'>of</span> <span m='297174'>rows</span> <span m='297569'>in</span>
  <span m='297964'>ClaimsTest.</span> </p><p><span m='301220'>So</span> <span
  m='301871'>the</span> <span m='302522'>accuracy</span> <span
  m='303173'>of</span> <span m='303825'>our</span> <span m='304476'>model</span>
  <span m='305127'>is</span> <span m='305778'>0.713.</span> </p><p><span
  m='306430'>For</span> <span m='306729'>the</span> <span
  m='307028'>penalty</span> <span m='307327'>error,</span> <span
  m='307626'>we</span> <span m='307925'>can</span> <span m='308224'>use</span>
  <span m='308523'>our</span> <span m='308822'>penalty</span> <span
  m='309121'>matrix</span> <span m='309420'>like</span> <span
  m='309741'>we</span> <span m='310062'>did</span> <span m='310384'>in</span>
  <span m='310705'>the</span> <span m='311027'>previous</span> <span
  m='311348'>video.</span> </p><p><span m='311670'>So</span> <span
  m='312141'>scroll</span> <span m='312612'>up</span> <span m='313083'>to</span>
  <span m='313555'>the</span> <span m='314026'>classification</span> <span
  m='314497'>matrix</span> <span m='314968'>command</span> <span
  m='315440'>and</span> <span m='316231'>surround</span> <span
  m='317022'>the</span> <span m='317813'>table</span> <span
  m='318604'>function</span> <span m='319395'>by</span> <span
  m='320186'>the</span> <span m='320977'>as.matrix</span> <span
  m='321768'>function,</span> <span m='322560'>and</span> <span
  m='323028'>then</span> <span m='323496'>we'll</span> <span
  m='323965'>multiply</span> <span m='324433'>by</span> <span
  m='324901'>PenaltyMatrix.</span> </p><p><span m='330090'>So</span> <span
  m='330482'>remember</span> <span m='330874'>that</span> <span
  m='331266'>this</span> <span m='331658'>takes</span> <span
  m='332050'>each</span> <span m='332442'>entry</span> <span
  m='332834'>in</span> <span m='333226'>our</span> <span
  m='333618'>classification</span> <span m='334010'>matrix</span> <span
  m='334480'>and</span> <span m='334950'>multiplies</span> <span
  m='335420'>it</span> <span m='335890'>by</span> <span m='336360'>the</span>
  <span m='336830'>corresponding</span> <span m='337300'>number</span> <span
  m='337770'>in</span> <span m='338405'>the</span> <span
  m='339040'>penalty</span> <span m='339675'>matrix.</span> </p><p><span
  m='340310'>So</span> <span m='340518'>now</span> <span m='340727'>we</span>
  <span m='340936'>just</span> <span m='341145'>need</span> <span
  m='341354'>to</span> <span m='341563'>add</span> <span m='341772'>up</span>
  <span m='341981'>all</span> <span m='342190'>of</span> <span
  m='342657'>the</span> <span m='343125'>numbers</span> <span
  m='343592'>in</span> <span m='344060'>this</span> <span
  m='344527'>matrix</span> <span m='344995'>by</span> <span
  m='345462'>surrounding</span> <span m='345930'>it</span> <span
  m='346397'>by</span> <span m='346865'>the</span> <span m='347332'>sum</span>
  <span m='347800'>function</span> <span m='348305'>and</span> <span
  m='348810'>then</span> <span m='349315'>dividing</span> <span
  m='349820'>by</span> <span m='350325'>the</span> <span m='350830'>total</span>
  <span m='351335'>number</span> <span m='351840'>of</span> <span
  m='352226'>observations</span> <span m='352612'>in</span> <span
  m='352998'>our</span> <span m='353385'>test</span> <span
  m='353771'>set,</span> <span m='354157'>or</span> <span
  m='354543'>nrow(ClaimsTest).</span> </p><p><span m='359700'>So</span> <span
  m='360345'>our</span> <span m='360990'>penalty</span> <span
  m='361635'>error</span> <span m='362280'>is</span> <span
  m='362925'>0.758.</span> </p><p><span m='363570'>In</span> <span
  m='363853'>the</span> <span m='364136'>previous</span> <span
  m='364419'>video,</span> <span m='364702'>we</span> <span
  m='364985'>saw</span> <span m='365268'>that</span> <span m='365551'>our</span>
  <span m='365834'>baseline</span> <span m='366117'>method</span> <span
  m='366400'>had</span> <span m='366939'>an</span> <span
  m='367478'>accuracy</span> <span m='368017'>of</span> <span
  m='368556'>68%</span> <span m='369095'>and</span> <span m='369634'>a</span>
  <span m='370173'>penalty</span> <span m='370712'>error</span> <span
  m='371251'>of</span> <span m='371790'>0.74.</span> </p><p><span
  m='372330'>So</span> <span m='372693'>while</span> <span m='373056'>we</span>
  <span m='373420'>increased</span> <span m='373783'>the</span> <span
  m='374146'>accuracy,</span> <span m='374510'>the</span> <span
  m='374886'>penalty</span> <span m='375263'>error</span> <span
  m='375640'>also</span> <span m='376016'>went</span> <span
  m='376393'>up.</span> </p><p><span m='376770'>Why?</span> </p><p><span
  m='378100'>By</span> <span m='378577'>default,</span> <span
  m='379054'>rpart</span> <span m='379531'>will</span> <span
  m='380008'>try</span> <span m='380485'>to</span> <span
  m='380962'>maximize</span> <span m='381439'>the</span> <span
  m='381916'>overall</span> <span m='382393'>accuracy,</span> <span
  m='382870'>and</span> <span m='383201'>every</span> <span
  m='383533'>type</span> <span m='383864'>of</span> <span
  m='384196'>error</span> <span m='384527'>is</span> <span
  m='384859'>seen</span> <span m='385190'>as</span> <span
  m='385522'>having</span> <span m='385853'>a</span> <span
  m='386185'>penalty</span> <span m='386516'>of</span> <span
  m='386848'>one.</span> </p><p><span m='387180'>Our</span> <span
  m='387598'>CART</span> <span m='388016'>model</span> <span
  m='388434'>predicts</span> <span m='388852'>3,</span> <span
  m='389270'>4,</span> <span m='389688'>and</span> <span m='390106'>5</span>
  <span m='390524'>so</span> <span m='390942'>rarely</span> <span
  m='391360'>because</span> <span m='391814'>there</span> <span
  m='392268'>are</span> <span m='392723'>very</span> <span m='393177'>few</span>
  <span m='393632'>observations</span> <span m='394086'>in</span> <span
  m='394541'>these</span> <span m='394995'>classes.</span> </p><p><span
  m='395450'>So</span> <span m='395747'>we</span> <span m='396044'>don't</span>
  <span m='396341'>really</span> <span m='396638'>expect</span> <span
  m='396935'>this</span> <span m='397232'>model</span> <span
  m='397530'>to</span> <span m='397893'>do</span> <span m='398257'>better</span>
  <span m='398620'>on</span> <span m='398984'>the</span> <span
  m='399348'>penalty</span> <span m='399711'>error</span> <span
  m='400075'>than</span> <span m='400439'>the</span> <span
  m='400802'>baseline</span> <span m='401166'>method.</span> </p><p><span
  m='401530'>So</span> <span m='401881'>how</span> <span m='402233'>can</span>
  <span m='402585'>we</span> <span m='402936'>fix</span> <span
  m='403288'>this?</span> </p><p><span m='403640'>The</span> <span
  m='404012'>rpart</span> <span m='404385'>function</span> <span
  m='404758'>allows</span> <span m='405131'>us</span> <span m='405504'>to</span>
  <span m='405877'>specify</span> <span m='406250'>a</span> <span
  m='406812'>parameter</span> <span m='407375'>called</span> <span
  m='407937'>loss.</span> </p><p><span m='408500'>This</span> <span
  m='408761'>is</span> <span m='409022'>the</span> <span
  m='409284'>penalty</span> <span m='409545'>matrix</span> <span
  m='409807'>we</span> <span m='410068'>want</span> <span m='410330'>to</span>
  <span m='410716'>use</span> <span m='411103'>when</span> <span
  m='411490'>building</span> <span m='411876'>our</span> <span
  m='412263'>model.</span> </p><p><span m='412650'>So</span> <span
  m='413006'>let's</span> <span m='413363'>scroll</span> <span
  m='413720'>back</span> <span m='414076'>up</span> <span m='414433'>to</span>
  <span m='414790'>where</span> <span m='415146'>we</span> <span
  m='415503'>built</span> <span m='415860'>our</span> <span
  m='416216'>CART</span> <span m='416573'>model.</span> </p><p><span
  m='416930'>At</span> <span m='417245'>the</span> <span m='417561'>end</span>
  <span m='417877'>of</span> <span m='418192'>the</span> <span
  m='418508'>rpart</span> <span m='418824'>function,</span> <span
  m='419140'>we'll</span> <span m='419805'>add</span> <span
  m='420471'>the</span> <span m='421137'>argument</span> <span
  m='421802'>params</span> <span m='422468'>=</span> <span
  m='423134'>list(loss=PenaltyMatrix).</span> </p><p><span
  m='433120'>This</span> <span m='433455'>is</span> <span m='433790'>the</span>
  <span m='434125'>name</span> <span m='434460'>of</span> <span
  m='434795'>the</span> <span m='435130'>penalty</span> <span
  m='435465'>matrix</span> <span m='435800'>we</span> <span
  m='436135'>created.</span> </p><p><span m='436470'>Close</span> <span
  m='437250'>the</span> <span m='438030'>parentheses</span> <span
  m='438810'>and</span> <span m='439590'>hit</span> <span
  m='440370'>Enter.</span> </p><p><span m='441150'>So</span> <span
  m='441551'>while</span> <span m='441952'>our</span> <span
  m='442354'>model</span> <span m='442755'>is</span> <span
  m='443157'>being</span> <span m='443558'>built,</span> <span
  m='443960'>let's</span> <span m='444373'>think</span> <span
  m='444787'>about</span> <span m='445201'>what</span> <span
  m='445615'>we</span> <span m='446028'>expect</span> <span m='446442'>to</span>
  <span m='446856'>happen.</span> </p><p><span m='447270'>If</span> <span
  m='447660'>the</span> <span m='448050'>rpart</span> <span
  m='448440'>function</span> <span m='448830'>knows</span> <span
  m='449220'>that</span> <span m='449610'>we'll</span> <span
  m='450000'>be</span> <span m='450307'>giving</span> <span m='450614'>a</span>
  <span m='450921'>higher</span> <span m='451228'>penalty</span> <span
  m='451535'>to</span> <span m='451842'>some</span> <span
  m='452149'>types</span> <span m='452456'>of</span> <span
  m='452763'>errors</span> <span m='453070'>over</span> <span
  m='453558'>others,</span> <span m='454047'>it</span> <span
  m='454535'>might</span> <span m='455024'>choose</span> <span
  m='455512'>different</span> <span m='456001'>splits</span> <span
  m='456490'>when</span> <span m='456871'>building</span> <span
  m='457253'>the</span> <span m='457635'>model</span> <span m='458016'>to</span>
  <span m='458398'>minimize</span> <span m='458780'>the</span> <span
  m='459278'>worst</span> <span m='459776'>types</span> <span
  m='460274'>of</span> <span m='460772'>errors.</span> </p><p><span
  m='461270'>We'll</span> <span m='461682'>probably</span> <span
  m='462095'>get</span> <span m='462508'>a</span> <span m='462920'>lower</span>
  <span m='463333'>overall</span> <span m='463746'>accuracy</span> <span
  m='464159'>with</span> <span m='464581'>this</span> <span
  m='465004'>new</span> <span m='465427'>model.</span> </p><p><span
  m='465850'>But</span> <span m='466171'>hopefully,</span> <span
  m='466492'>the</span> <span m='466813'>penalty</span> <span
  m='467134'>error</span> <span m='467455'>will</span> <span
  m='467776'>be</span> <span m='468097'>much</span> <span
  m='468418'>lower</span> <span m='468739'>too.</span> </p><p><span
  m='473850'>So</span> <span m='474170'>now</span> <span m='474491'>that</span>
  <span m='474812'>our</span> <span m='475133'>model</span> <span
  m='475454'>is</span> <span m='475775'>done,</span> <span
  m='476096'>let's</span> <span m='476417'>regenerate</span> <span
  m='476738'>our</span> <span m='477059'>test</span> <span m='477380'>set</span>
  <span m='477851'>predictions</span> <span m='478322'>by</span> <span
  m='478793'>scrolling</span> <span m='479264'>up</span> <span
  m='479735'>to</span> <span m='480206'>where</span> <span m='480677'>we</span>
  <span m='481148'>created</span> <span m='481619'>PredictTest</span> <span
  m='482090'>and</span> <span m='482620'>hitting</span> <span
  m='483150'>Enter,</span> <span m='483680'>and</span> <span
  m='484210'>then</span> <span m='484740'>recreating</span> <span
  m='485270'>our</span> <span m='485800'>classification</span> <span
  m='486330'>matrix</span> <span m='486813'>by</span> <span
  m='487297'>scrolling</span> <span m='487781'>up</span> <span
  m='488265'>to</span> <span m='488748'>the</span> <span m='489232'>table</span>
  <span m='489716'>function</span> <span m='490200'>and</span> <span
  m='491127'>hitting</span> <span m='492055'>Enter</span> <span
  m='492982'>again.</span> </p><p><span m='493910'>Now</span> <span
  m='494688'>let's</span> <span m='495466'>add</span> <span m='496245'>up</span>
  <span m='497023'>the</span> <span m='497801'>numbers</span> <span
  m='498580'>on</span> <span m='499358'>the</span> <span
  m='500136'>diagonal,</span> <span m='500915'>94310</span> <span
  m='501693'>+</span> <span m='502471'>18942</span> <span m='503250'>+</span>
  <span m='504159'>4692</span> <span m='505068'>+</span> <span
  m='505977'>636</span> <span m='506886'>+</span> <span m='507796'>2,</span>
  <span m='508705'>and</span> <span m='509614'>divide</span> <span
  m='510523'>by</span> <span m='511433'>the</span> <span
  m='512342'>number</span> <span m='513251'>of</span> <span
  m='514160'>rows</span> <span m='515070'>in</span> <span
  m='515450'>ClaimsTest.</span> </p><p><span m='518870'>And</span> <span
  m='519376'>hit</span> <span m='519883'>Enter.</span> </p><p><span
  m='520390'>So</span> <span m='520918'>the</span> <span
  m='521447'>accuracy</span> <span m='521976'>of</span> <span
  m='522505'>this</span> <span m='523033'>model</span> <span
  m='523562'>is</span> <span m='524091'>0.647.</span> </p><p><span
  m='524620'>And</span> <span m='525025'>we</span> <span m='525430'>can</span>
  <span m='525836'>scroll</span> <span m='526241'>up</span> <span
  m='526647'>and</span> <span m='527052'>compute</span> <span
  m='527458'>the</span> <span m='527863'>penalty</span> <span
  m='528269'>error</span> <span m='528674'>here</span> <span
  m='529080'>by</span> <span m='529529'>going</span> <span
  m='529978'>back</span> <span m='530427'>to</span> <span m='530876'>the</span>
  <span m='531325'>sum</span> <span m='531774'>command</span> <span
  m='532223'>and</span> <span m='532672'>hitting</span> <span
  m='533121'>Enter.</span> </p><p><span m='533570'>So</span> <span
  m='534002'>the</span> <span m='534434'>penalty</span> <span
  m='534866'>error</span> <span m='535298'>of</span> <span m='535730'>our</span>
  <span m='536162'>new</span> <span m='536594'>model</span> <span
  m='537026'>is</span> <span m='537458'>0.642.</span> </p><p><span
  m='537890'>Our</span> <span m='538254'>accuracy</span> <span
  m='538618'>is</span> <span m='538983'>now</span> <span m='539347'>lower</span>
  <span m='539712'>than</span> <span m='540076'>the</span> <span
  m='540441'>baseline</span> <span m='540805'>method,</span> <span
  m='541170'>but</span> <span m='541611'>our</span> <span
  m='542052'>penalty</span> <span m='542493'>error</span> <span
  m='542935'>is</span> <span m='543376'>also</span> <span m='543817'>much</span>
  <span m='544258'>lower.</span> </p><p><span m='544700'>Note</span> <span
  m='545120'>that</span> <span m='545540'>we</span> <span m='545960'>have</span>
  <span m='546380'>significantly</span> <span m='546800'>fewer</span> <span
  m='547220'>independent</span> <span m='547640'>variables</span> <span
  m='548060'>than</span> <span m='548696'>D2Hawkeye</span> <span
  m='549333'>had.</span> </p><p><span m='549970'>If</span> <span
  m='550256'>we</span> <span m='550542'>had</span> <span m='550828'>the</span>
  <span m='551114'>hundreds</span> <span m='551400'>of</span> <span
  m='551686'>codes</span> <span m='551972'>and</span> <span
  m='552258'>risk</span> <span m='552544'>factors</span> <span
  m='552830'>available</span> <span m='553318'>to</span> <span
  m='553807'>D2Hawkeye,</span> <span m='554296'>we</span> <span
  m='554785'>would</span> <span m='555274'>hopefully</span> <span
  m='555763'>do</span> <span m='556252'>even</span> <span
  m='556741'>better.</span> </p><p><span m='557230'>In</span> <span
  m='557531'>the</span> <span m='557833'>next</span> <span
  m='558135'>video,</span> <span m='558437'>we'll</span> <span
  m='558739'>discuss</span> <span m='559040'>the</span> <span
  m='559342'>accuracy</span> <span m='559644'>of</span> <span
  m='559946'>the</span> <span m='560248'>models</span> <span
  m='560550'>used</span> <span m='561067'>by</span> <span
  m='561584'>D2Hawkeye</span> <span m='562101'>and</span> <span
  m='562618'>how</span> <span m='563135'>analytics</span> <span
  m='563652'>can</span> <span m='564169'>provide</span> <span
  m='564686'>an</span> <span m='565203'>edge.</span> </p>
uid: 3f95c5adb13cf1d6c97b2ee6e111992a
type: courses
layout: video
---
