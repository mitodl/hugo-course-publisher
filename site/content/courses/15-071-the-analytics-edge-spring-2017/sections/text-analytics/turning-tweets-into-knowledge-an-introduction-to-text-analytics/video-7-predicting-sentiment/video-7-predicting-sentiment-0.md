---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CaLv-IWX5vo
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: Video-YouTube-Stream
    type: Video
    uid: f3309c74184764f6406693a741c93625
  - id: 3Play-3Play YouTube id-Stream
    media_location: CaLv-IWX5vo
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c191559b682f52823c65cabe938a7417
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CaLv-IWX5vo/default.jpg'
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: dd2e5493977380c19ac6f025acc2f5ab
  - id: CaLv-IWX5vo.srt
    parent_uid: dd79612c793ade86be8b59116072ba4c
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment/video-7-predicting-sentiment-0/CaLv-IWX5vo.srt
    title: 3play caption file
    type: null
    uid: 3f065d6069eb48d6b0c252ba7e1dcc72
  - id: CaLv-IWX5vo.pdf
    parent_uid: dd79612c793ade86be8b59116072ba4c
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment/video-7-predicting-sentiment-0/CaLv-IWX5vo.pdf
    title: 3play pdf file
    type: null
    uid: 520e51606d7438adc3fc0d78e8211543
  - id: Caption-3Play YouTube id-SRT
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ba526e94aaf4c3254c800c0fbae042cd
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6f675dcaa40fee3b3d9c3befa4c5b630
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.2.12_300k.mp4
    parent_uid: dd79612c793ade86be8b59116072ba4c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5b0f03a926c37d0b1b0954f47dd3252e
inline_embed_id: 48305729video7predictingsentiment94947110
order_index: 1109
parent_uid: 6faa3dc62c17bf81844bb5d994e997d9
related_resources_text: ''
short_url: video-7-predicting-sentiment-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-7-predicting-sentiment/video-7-predicting-sentiment-0
title: 'Video 7: Predicting Sentiment'
transcript: >-
  <p><span m='4490'>Now</span> <span m='4741'>that</span> <span
  m='4992'>we've</span> <span m='5244'>prepared</span> <span m='5495'>our</span>
  <span m='5747'>data</span> <span m='5998'>set,</span> <span
  m='6250'>let's</span> <span m='6566'>use</span> <span m='6882'>CART</span>
  <span m='7198'>to</span> <span m='7515'>build</span> <span m='7831'>a</span>
  <span m='8147'>predictive</span> <span m='8463'>model.</span> </p><p><span
  m='8780'>First,</span> <span m='9066'>we</span> <span m='9352'>need</span>
  <span m='9639'>to</span> <span m='9925'>load</span> <span m='10211'>the</span>
  <span m='10498'>necessary</span> <span m='10784'>packages</span> <span
  m='11070'>in</span> <span m='11357'>our</span> <span m='11643'>R</span> <span
  m='11930'>Console</span> <span m='13272'>by</span> <span
  m='14615'>typing</span> <span m='15957'>library(rpart),</span> <span
  m='17300'>and</span> <span m='17703'>then</span> <span
  m='18106'>library(rpart.plot).</span> </p><p><span m='25950'>Now</span> <span
  m='26332'>let's</span> <span m='26714'>build</span> <span m='27096'>our</span>
  <span m='27478'>model.</span> </p><p><span m='27860'>We'll</span> <span
  m='28550'>call</span> <span m='29240'>it</span> <span
  m='29930'>tweetCART,</span> <span m='30620'>and</span> <span
  m='31310'>we'll</span> <span m='32000'>use</span> <span m='32690'>the</span>
  <span m='33380'>rpart</span> <span m='34070'>function</span> <span
  m='34760'>to</span> <span m='35281'>predict</span> <span
  m='35802'>Negative</span> <span m='36323'>using</span> <span
  m='36844'>all</span> <span m='37365'>of</span> <span m='37886'>the</span>
  <span m='38407'>other</span> <span m='38928'>variables</span> <span
  m='39450'>as</span> <span m='40165'>our</span> <span
  m='40881'>independent</span> <span m='41596'>variables</span> <span
  m='42312'>and</span> <span m='43027'>the</span> <span m='43743'>data</span>
  <span m='44458'>set</span> <span m='45174'>trainSparse.</span> </p><p><span
  m='45890'>We'll</span> <span m='46343'>add</span> <span m='46797'>one</span>
  <span m='47250'>more</span> <span m='47704'>argument</span> <span
  m='48158'>here,</span> <span m='48611'>which</span> <span m='49065'>is</span>
  <span m='49519'>method</span> <span m='49972'>=</span> <span
  m='50426'>"class"</span> <span m='50880'>so</span> <span m='51197'>that</span>
  <span m='51514'>the</span> <span m='51831'>rpart</span> <span
  m='52148'>function</span> <span m='52465'>knows</span> <span
  m='52782'>to</span> <span m='53099'>build</span> <span m='53416'>a</span>
  <span m='53733'>classification</span> <span m='54050'>model.</span>
  </p><p><span m='55320'>We're</span> <span m='55654'>just</span> <span
  m='55988'>using</span> <span m='56322'>the</span> <span
  m='56657'>default</span> <span m='56991'>parameter</span> <span
  m='57325'>settings</span> <span m='57660'>so</span> <span m='58133'>we</span>
  <span m='58606'>won't</span> <span m='59080'>add</span> <span
  m='59553'>anything</span> <span m='60026'>for</span> <span
  m='60500'>minbucket</span> <span m='60973'>or</span> <span
  m='61446'>cp.</span> </p><p><span m='61920'>Now</span> <span
  m='62257'>let's</span> <span m='62595'>plot</span> <span m='62933'>the</span>
  <span m='63270'>tree</span> <span m='63608'>using</span> <span
  m='63946'>the</span> <span m='64283'>prp</span> <span
  m='64621'>function.</span> </p><p><span m='70960'>Our</span> <span
  m='71274'>tree</span> <span m='71588'>says</span> <span m='71902'>that</span>
  <span m='72216'>if</span> <span m='72530'>the</span> <span
  m='72845'>word</span> <span m='73159'>"freak"</span> <span m='73473'>is</span>
  <span m='73787'>in</span> <span m='74101'>the</span> <span
  m='74415'>tweet,</span> <span m='74730'>then</span> <span
  m='75246'>predict</span> <span m='75763'>TRUE,</span> <span
  m='76280'>or</span> <span m='76796'>negative</span> <span
  m='77313'>sentiment.</span> </p><p><span m='77830'>If</span> <span
  m='78056'>the</span> <span m='78283'>word</span> <span
  m='78510'>"freak"</span> <span m='78736'>is</span> <span m='78963'>not</span>
  <span m='79190'>in</span> <span m='79416'>the</span> <span
  m='79643'>tweet,</span> <span m='79870'>but</span> <span m='80356'>the</span>
  <span m='80842'>word</span> <span m='81328'>"hate"</span> <span
  m='81815'>is,</span> <span m='82301'>again</span> <span
  m='82787'>predict</span> <span m='83273'>TRUE.</span> </p><p><span
  m='83760'>If</span> <span m='83993'>neither</span> <span m='84226'>of</span>
  <span m='84459'>these</span> <span m='84692'>two</span> <span
  m='84925'>words</span> <span m='85158'>are</span> <span m='85391'>in</span>
  <span m='85624'>the</span> <span m='85857'>tweet,</span> <span
  m='86090'>but</span> <span m='86505'>the</span> <span m='86920'>word</span>
  <span m='87335'>"wtf"</span> <span m='87750'>is,</span> <span
  m='88165'>also</span> <span m='88580'>predict</span> <span
  m='88995'>TRUE,</span> <span m='89410'>or</span> <span
  m='89825'>negative</span> <span m='90240'>sentiment.</span> </p><p><span
  m='91650'>If</span> <span m='91930'>none</span> <span m='92210'>of</span>
  <span m='92490'>these</span> <span m='92770'>three</span> <span
  m='93050'>words</span> <span m='93330'>are</span> <span m='93610'>in</span>
  <span m='93890'>the</span> <span m='94170'>tweet,</span> <span
  m='94450'>then</span> <span m='95125'>predict</span> <span
  m='95800'>FALSE,</span> <span m='96475'>or</span> <span
  m='97150'>non-negative</span> <span m='97825'>sentiment.</span> </p><p><span
  m='98500'>This</span> <span m='98900'>tree</span> <span m='99300'>makes</span>
  <span m='99700'>sense</span> <span m='100100'>intuitively</span> <span
  m='100500'>since</span> <span m='100800'>these</span> <span
  m='101100'>three</span> <span m='101400'>words</span> <span
  m='101700'>are</span> <span m='102000'>generally</span> <span
  m='102300'>seen</span> <span m='103030'>as</span> <span
  m='103760'>negative</span> <span m='104490'>words.</span> </p><p><span
  m='105220'>Now,</span> <span m='105573'>let's</span> <span
  m='105927'>go</span> <span m='106281'>back</span> <span m='106635'>to</span>
  <span m='106988'>our</span> <span m='107342'>R</span> <span
  m='107696'>Console</span> <span m='108050'>and</span> <span
  m='108466'>evaluate</span> <span m='108882'>the</span> <span
  m='109298'>numerical</span> <span m='109715'>performance</span> <span
  m='110131'>of</span> <span m='110547'>our</span> <span m='110963'>model</span>
  <span m='111380'>by</span> <span m='111852'>making</span> <span
  m='112325'>predictions</span> <span m='112798'>on</span> <span
  m='113271'>the</span> <span m='113744'>test</span> <span
  m='114217'>set.</span> </p><p><span m='114690'>We'll</span> <span
  m='115150'>call</span> <span m='115610'>our</span> <span
  m='116070'>predictions</span> <span m='116530'>predictCART.</span>
  </p><p><span m='119729'>And</span> <span m='120159'>we'll</span> <span
  m='120589'>use</span> <span m='121019'>the</span> <span
  m='121449'>predict</span> <span m='121879'>function</span> <span
  m='122310'>to</span> <span m='123096'>predict</span> <span
  m='123882'>using</span> <span m='124669'>our</span> <span
  m='125455'>model</span> <span m='126241'>tweetCART</span> <span
  m='127028'>on</span> <span m='127814'>the</span> <span m='128600'>new</span>
  <span m='129387'>data</span> <span m='130173'>set</span> <span
  m='130960'>testSparse.</span> </p><p><span m='133970'>We'll</span> <span
  m='134460'>add</span> <span m='134950'>one</span> <span m='135440'>more</span>
  <span m='135930'>argument,</span> <span m='136420'>which</span> <span
  m='136910'>is</span> <span m='137400'>type</span> <span m='137890'>=</span>
  <span m='138380'>"class"</span> <span m='138870'>to</span> <span
  m='139311'>make</span> <span m='139752'>sure</span> <span m='140194'>we</span>
  <span m='140635'>get</span> <span m='141077'>class</span> <span
  m='141518'>predictions.</span> </p><p><span m='141960'>Now</span> <span
  m='142371'>let's</span> <span m='142783'>make</span> <span
  m='143195'>our</span> <span m='143606'>confusion</span> <span
  m='144018'>matrix</span> <span m='144430'>using</span> <span
  m='144952'>the</span> <span m='145475'>table</span> <span
  m='145997'>function.</span> </p><p><span m='146520'>We'll</span> <span
  m='146911'>give</span> <span m='147302'>as</span> <span m='147693'>the</span>
  <span m='148084'>first</span> <span m='148475'>argument</span> <span
  m='148866'>the</span> <span m='149257'>actual</span> <span
  m='149648'>outcomes,</span> <span m='150040'>testSparse$Negative,</span> <span
  m='150670'>and</span> <span m='151300'>then</span> <span m='151930'>as</span>
  <span m='152560'>the</span> <span m='153190'>second</span> <span
  m='153820'>argument,</span> <span m='154450'>our</span> <span
  m='155066'>predictions,</span> <span m='155683'>predictCART.</span>
  </p><p><span m='161020'>To</span> <span m='161340'>compute</span> <span
  m='161660'>the</span> <span m='161980'>accuracy</span> <span
  m='162300'>of</span> <span m='162620'>our</span> <span
  m='162940'>model,</span> <span m='163260'>we</span> <span
  m='163749'>add</span> <span m='164238'>up</span> <span m='164727'>the</span>
  <span m='165216'>numbers</span> <span m='165705'>on</span> <span
  m='166194'>the</span> <span m='166683'>diagonal,</span> <span
  m='167172'>294</span> <span m='167661'>plus</span> <span
  m='168150'>18--</span> <span m='168640'>these</span> <span
  m='169061'>are</span> <span m='169482'>the</span> <span
  m='169904'>observations</span> <span m='170325'>we</span> <span
  m='170747'>predicted</span> <span m='171168'>correctly--</span> <span
  m='171590'>and</span> <span m='171910'>divide</span> <span
  m='172231'>by</span> <span m='172552'>the</span> <span m='172873'>total</span>
  <span m='173194'>number</span> <span m='173515'>of</span> <span
  m='173836'>observations</span> <span m='174157'>in</span> <span
  m='174478'>the</span> <span m='174799'>table,</span> <span
  m='175120'>or</span> <span m='175444'>the</span> <span m='175768'>total</span>
  <span m='176092'>number</span> <span m='176416'>of</span> <span
  m='176740'>observations</span> <span m='177064'>in</span> <span
  m='177388'>our</span> <span m='177712'>test</span> <span
  m='178036'>set.</span> </p><p><span m='181000'>So</span> <span
  m='181394'>the</span> <span m='181788'>accuracy</span> <span
  m='182182'>of</span> <span m='182576'>our</span> <span m='182970'>CART</span>
  <span m='183364'>model</span> <span m='183758'>is</span> <span
  m='184152'>about</span> <span m='184546'>0.88.</span> </p><p><span
  m='184940'>Let's</span> <span m='185272'>compare</span> <span
  m='185605'>this</span> <span m='185937'>to</span> <span m='186270'>a</span>
  <span m='186602'>simple</span> <span m='186935'>baseline</span> <span
  m='187267'>model</span> <span m='187600'>that</span> <span
  m='188240'>always</span> <span m='188880'>predicts</span> <span
  m='189520'>non-negative.</span> </p><p><span m='190160'>To</span> <span
  m='190506'>compute</span> <span m='190852'>the</span> <span
  m='191198'>accuracy</span> <span m='191545'>of</span> <span
  m='191891'>the</span> <span m='192237'>baseline</span> <span
  m='192583'>model,</span> <span m='192930'>let's</span> <span
  m='193313'>make</span> <span m='193696'>a</span> <span m='194079'>table</span>
  <span m='194462'>of</span> <span m='194845'>just</span> <span
  m='195228'>the</span> <span m='195611'>outcome</span> <span
  m='195994'>variable</span> <span m='196377'>Negative.</span> </p><p><span
  m='196760'>So</span> <span m='197201'>we'll</span> <span
  m='197642'>type</span> <span m='198083'>table,</span> <span
  m='198525'>and</span> <span m='198966'>then</span> <span m='199407'>in</span>
  <span m='199848'>parentheses,</span> <span
  m='200290'>testSparse$Negative.</span> </p><p><span m='208150'>This</span>
  <span m='208396'>tells</span> <span m='208642'>us</span> <span
  m='208888'>that</span> <span m='209135'>in</span> <span m='209381'>our</span>
  <span m='209627'>test</span> <span m='209873'>set</span> <span
  m='210120'>we</span> <span m='210642'>have</span> <span m='211165'>300</span>
  <span m='211688'>observations</span> <span m='212211'>with</span> <span
  m='212734'>non-negative</span> <span m='213257'>sentiment</span> <span
  m='213780'>and</span> <span m='214391'>55</span> <span
  m='215003'>observations</span> <span m='215615'>with</span> <span
  m='216226'>negative</span> <span m='216838'>sentiment.</span> </p><p><span
  m='217450'>So</span> <span m='217735'>the</span> <span
  m='218021'>accuracy</span> <span m='218307'>of</span> <span
  m='218592'>a</span> <span m='218878'>baseline</span> <span
  m='219164'>model</span> <span m='219450'>that</span> <span
  m='220027'>always</span> <span m='220605'>predicts</span> <span
  m='221182'>non-negative</span> <span m='221760'>would</span> <span
  m='222582'>be</span> <span m='223405'>300</span> <span
  m='224227'>divided</span> <span m='225050'>by</span> <span
  m='225872'>355,</span> <span m='226695'>or</span> <span
  m='227517'>0.845.</span> </p><p><span m='228340'>So</span> <span
  m='228705'>our</span> <span m='229070'>CART</span> <span
  m='229436'>model</span> <span m='229801'>does</span> <span
  m='230167'>better</span> <span m='230532'>than</span> <span
  m='230898'>the</span> <span m='231263'>simple</span> <span
  m='231629'>baseline</span> <span m='231994'>model.</span> </p><p><span
  m='232360'>How</span> <span m='232666'>about</span> <span m='232973'>a</span>
  <span m='233280'>random</span> <span m='233586'>forest</span> <span
  m='233893'>model?</span> </p><p><span m='234200'>How</span> <span
  m='234548'>well</span> <span m='234896'>would</span> <span
  m='235244'>that</span> <span m='235592'>do?</span> </p><p><span
  m='235940'>Let's</span> <span m='236431'>first</span> <span
  m='236922'>load</span> <span m='237414'>the</span> <span
  m='237905'>random</span> <span m='238397'>forest</span> <span
  m='238888'>package</span> <span m='239380'>with</span> <span
  m='240640'>library(randomForest),</span> <span m='241900'>and</span> <span
  m='243160'>then</span> <span m='244420'>we'll</span> <span
  m='245680'>set</span> <span m='246168'>the</span> <span m='246657'>seed</span>
  <span m='247146'>to</span> <span m='247635'>123</span> <span
  m='248124'>so</span> <span m='248613'>that</span> <span m='249102'>we</span>
  <span m='249591'>can</span> <span m='250080'>replicate</span> <span
  m='250461'>our</span> <span m='250842'>model</span> <span m='251224'>if</span>
  <span m='251605'>we</span> <span m='251987'>want</span> <span
  m='252368'>to.</span> </p><p><span m='252750'>Keep</span> <span
  m='253037'>in</span> <span m='253325'>mind</span> <span m='253612'>that</span>
  <span m='253900'>even</span> <span m='254187'>if</span> <span
  m='254475'>you</span> <span m='254762'>set</span> <span m='255050'>the</span>
  <span m='255337'>seed</span> <span m='255625'>to</span> <span
  m='255912'>123,</span> <span m='256200'>you</span> <span
  m='256460'>might</span> <span m='256720'>get</span> <span m='256980'>a</span>
  <span m='257240'>different</span> <span m='257500'>random</span> <span
  m='257760'>forest</span> <span m='258020'>model</span> <span
  m='258280'>than</span> <span m='258540'>me</span> <span
  m='258800'>depending</span> <span m='259404'>on</span> <span
  m='260008'>your</span> <span m='260612'>operating</span> <span
  m='261216'>system.</span> </p><p><span m='261820'>Now,</span> <span
  m='262220'>let's</span> <span m='262620'>create</span> <span
  m='263020'>our</span> <span m='263420'>model.</span> </p><p><span
  m='263820'>We'll</span> <span m='264570'>call</span> <span
  m='265320'>it</span> <span m='266070'>tweetRF</span> <span
  m='266820'>and</span> <span m='267570'>use</span> <span m='268320'>the</span>
  <span m='269070'>randomForest</span> <span m='269820'>function</span> <span
  m='270570'>to</span> <span m='270999'>predict</span> <span
  m='271428'>Negative</span> <span m='271857'>again</span> <span
  m='272286'>using</span> <span m='272715'>all</span> <span m='273144'>of</span>
  <span m='273573'>our</span> <span m='274002'>other</span> <span
  m='274431'>variables</span> <span m='274860'>as</span> <span
  m='275381'>independent</span> <span m='275902'>variables</span> <span
  m='276423'>and</span> <span m='276945'>the</span> <span m='277466'>data</span>
  <span m='277987'>set</span> <span m='278508'>trainSparse.</span> </p><p><span
  m='282070'>We'll</span> <span m='282547'>again</span> <span
  m='283024'>use</span> <span m='283501'>the</span> <span
  m='283978'>default</span> <span m='284455'>parameter</span> <span
  m='284932'>settings.</span> </p><p><span m='285409'>The</span> <span
  m='285770'>random</span> <span m='286132'>forest</span> <span
  m='286493'>model</span> <span m='286855'>takes</span> <span
  m='287216'>significantly</span> <span m='287578'>longer</span> <span
  m='287940'>to</span> <span m='288273'>build</span> <span
  m='288606'>than</span> <span m='288940'>the</span> <span
  m='289273'>CART</span> <span m='289606'>model.</span> </p><p><span
  m='289940'>We've</span> <span m='290195'>seen</span> <span
  m='290450'>this</span> <span m='290705'>before</span> <span
  m='290960'>when</span> <span m='291215'>building</span> <span
  m='291470'>CART</span> <span m='291725'>and</span> <span
  m='291980'>random</span> <span m='292235'>forest</span> <span
  m='292490'>models,</span> <span m='292807'>but</span> <span
  m='293124'>in</span> <span m='293441'>this</span> <span
  m='293758'>case,</span> <span m='294075'>the</span> <span
  m='294392'>difference</span> <span m='294710'>is</span> <span
  m='295406'>particularly</span> <span m='296103'>drastic.</span> </p><p><span
  m='296800'>This</span> <span m='297120'>is</span> <span
  m='297440'>because</span> <span m='297760'>we</span> <span
  m='298080'>have</span> <span m='298400'>so</span> <span m='298720'>many</span>
  <span m='299040'>independent</span> <span m='299360'>variables,</span> <span
  m='299680'>about</span> <span m='300347'>300</span> <span
  m='301015'>different</span> <span m='301682'>words.</span> </p><p><span
  m='302350'>So</span> <span m='302612'>far</span> <span m='302874'>in</span>
  <span m='303136'>this</span> <span m='303398'>course,</span> <span
  m='303660'>we</span> <span m='303922'>haven't</span> <span
  m='304184'>seen</span> <span m='304446'>data</span> <span
  m='304708'>sets</span> <span m='304970'>with</span> <span
  m='305494'>this</span> <span m='306018'>many</span> <span
  m='306542'>independent</span> <span m='307066'>variables.</span> </p><p><span
  m='307590'>So</span> <span m='307933'>keep</span> <span m='308276'>in</span>
  <span m='308620'>mind</span> <span m='308963'>that</span> <span
  m='309306'>for</span> <span m='309650'>text</span> <span
  m='309993'>analytics</span> <span m='310336'>problems,</span> <span
  m='310680'>building</span> <span m='311022'>a</span> <span
  m='311364'>random</span> <span m='311706'>forest</span> <span
  m='312048'>model</span> <span m='312391'>will</span> <span
  m='312733'>take</span> <span m='313075'>significantly</span> <span
  m='313417'>longer</span> <span m='313760'>than</span> <span
  m='314204'>building</span> <span m='314648'>a</span> <span
  m='315092'>CART</span> <span m='315536'>model.</span> </p><p><span
  m='315980'>So</span> <span m='316275'>now</span> <span m='316570'>that</span>
  <span m='316865'>our</span> <span m='317160'>model's</span> <span
  m='317455'>finished,</span> <span m='317750'>let's</span> <span
  m='318118'>make</span> <span m='318487'>predictions</span> <span
  m='318855'>on</span> <span m='319224'>our</span> <span m='319592'>test</span>
  <span m='319961'>set.</span> </p><p><span m='320330'>We'll</span> <span
  m='320915'>call</span> <span m='321501'>them</span> <span
  m='322087'>predictRF,</span> <span m='322672'>and</span> <span
  m='323258'>again,</span> <span m='323844'>we'll</span> <span
  m='324430'>use</span> <span m='324878'>the</span> <span
  m='325327'>predict</span> <span m='325775'>function</span> <span
  m='326224'>to</span> <span m='326672'>make</span> <span
  m='327121'>predictions</span> <span m='327570'>using</span> <span
  m='328295'>the</span> <span m='329020'>model</span> <span
  m='329745'>tweetRF</span> <span m='330470'>this</span> <span
  m='331195'>time,</span> <span m='331920'>and</span> <span
  m='332230'>again,</span> <span m='332540'>the</span> <span
  m='332850'>new</span> <span m='333160'>data</span> <span m='333470'>set</span>
  <span m='333780'>testSparse.</span> </p><p><span m='338080'>Now</span> <span
  m='338398'>let's</span> <span m='338717'>make</span> <span
  m='339036'>our</span> <span m='339355'>confusion</span> <span
  m='339674'>matrix</span> <span m='339993'>using</span> <span
  m='340312'>the</span> <span m='340631'>table</span> <span
  m='340950'>function,</span> <span m='341590'>first</span> <span
  m='342230'>giving</span> <span m='342870'>the</span> <span
  m='343510'>actual</span> <span m='344150'>outcomes,</span> <span
  m='344790'>testSparse$Negative,</span> <span m='345746'>and</span> <span
  m='346703'>then</span> <span m='347660'>giving</span> <span
  m='348616'>our</span> <span m='349573'>predictions,</span> <span
  m='350530'>predictRF.</span> </p><p><span m='353780'>To</span> <span
  m='354103'>compute</span> <span m='354426'>the</span> <span
  m='354750'>accuracy</span> <span m='355073'>of</span> <span
  m='355396'>the</span> <span m='355720'>random</span> <span
  m='356043'>forest</span> <span m='356366'>model,</span> <span
  m='356690'>we</span> <span m='357155'>again</span> <span m='357621'>sum</span>
  <span m='358087'>up</span> <span m='358553'>the</span> <span
  m='359019'>cases</span> <span m='359485'>we</span> <span m='359950'>got</span>
  <span m='360416'>right,</span> <span m='360882'>293</span> <span
  m='361348'>plus</span> <span m='361814'>21,</span> <span m='362280'>and</span>
  <span m='362575'>divide</span> <span m='362870'>by</span> <span
  m='363166'>the</span> <span m='363461'>total</span> <span
  m='363757'>number</span> <span m='364052'>of</span> <span
  m='364348'>observations</span> <span m='364643'>in</span> <span
  m='364939'>the</span> <span m='365234'>table.</span> </p><p><span
  m='369970'>So</span> <span m='370410'>our</span> <span
  m='370850'>random</span> <span m='371290'>forest</span> <span
  m='371730'>model</span> <span m='372170'>has</span> <span m='372610'>an</span>
  <span m='373050'>accuracy</span> <span m='373490'>of</span> <span
  m='373930'>0.885.</span> </p><p><span m='374370'>This</span> <span
  m='374586'>is</span> <span m='374803'>a</span> <span m='375020'>little</span>
  <span m='375236'>better</span> <span m='375453'>than</span> <span
  m='375670'>our</span> <span m='375886'>CART</span> <span
  m='376103'>model,</span> <span m='376320'>but</span> <span
  m='376610'>due</span> <span m='376900'>to</span> <span m='377190'>the</span>
  <span m='377480'>interpretability</span> <span m='377770'>of</span> <span
  m='378060'>our</span> <span m='378350'>CART</span> <span
  m='378640'>model,</span> <span m='378930'>I'd</span> <span
  m='379305'>probably</span> <span m='379681'>prefer</span> <span
  m='380056'>it</span> <span m='380432'>over</span> <span m='380807'>the</span>
  <span m='381183'>random</span> <span m='381558'>forest</span> <span
  m='381934'>model.</span> </p><p><span m='382310'>If</span> <span
  m='382588'>you</span> <span m='382866'>were</span> <span m='383144'>to</span>
  <span m='383422'>use</span> <span m='383700'>cross-validation</span> <span
  m='383978'>to</span> <span m='384256'>pick</span> <span m='384534'>the</span>
  <span m='384812'>cp</span> <span m='385090'>parameter</span> <span
  m='385472'>for</span> <span m='385855'>the</span> <span m='386238'>CART</span>
  <span m='386621'>model,</span> <span m='387004'>the</span> <span
  m='387387'>accuracy</span> <span m='387770'>would</span> <span
  m='388138'>increase</span> <span m='388506'>to</span> <span
  m='388874'>about</span> <span m='389242'>the</span> <span
  m='389610'>same</span> <span m='389979'>as</span> <span m='390347'>the</span>
  <span m='390715'>random</span> <span m='391083'>forest</span> <span
  m='391451'>model.</span> </p><p><span m='391820'>So</span> <span
  m='392204'>by</span> <span m='392588'>using</span> <span m='392973'>a</span>
  <span m='393357'>bag-of-words</span> <span m='393742'>approach</span> <span
  m='394126'>and</span> <span m='394511'>these</span> <span
  m='394895'>models,</span> <span m='395280'>we</span> <span
  m='395718'>can</span> <span m='396156'>reasonably</span> <span
  m='396594'>predict</span> <span m='397032'>sentiment</span> <span
  m='397470'>even</span> <span m='397909'>with</span> <span m='398356'>a</span>
  <span m='398804'>relatively</span> <span m='399251'>small</span> <span
  m='399699'>data</span> <span m='400147'>set</span> <span m='400594'>of</span>
  <span m='401042'>tweets.</span> </p>
uid: dd79612c793ade86be8b59116072ba4c
type: courses
layout: video
---
