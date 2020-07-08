---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: JvtqThS69bw
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: Video-YouTube-Stream
    type: Video
    uid: 2beaa350d7cdbdd23f624f069e5d40b0
  - id: 3Play-3Play YouTube id-Stream
    media_location: JvtqThS69bw
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b4ee33e09f07b39b963e602fff2e7984
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/JvtqThS69bw/default.jpg'
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2ed4bca2f85c525652dc936f6a615509
  - id: JvtqThS69bw.srt
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-4-cart-in-r/video-4-cart-in-r-0/JvtqThS69bw.srt
    title: 3play caption file
    type: null
    uid: 35e6e6ba49e9ea7c8c74f7f83ba4d25a
  - id: JvtqThS69bw.pdf
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-4-cart-in-r/video-4-cart-in-r-0/JvtqThS69bw.pdf
    title: 3play pdf file
    type: null
    uid: 58b6a1b208500e577d8b75940f671f72
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a2bc412b50f08d3a03d11f7df64e9d3e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 79e10149429eeb846fb6d9e4ddfadea0
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.2.07_300k.mp4
    parent_uid: 13d0a88f2d9e1869793a8c4b8af412c5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 816a8de9b9a4c6636d8f8241e461f318
inline_embed_id: 67198611video4cartinr57799948
order_index: 800
parent_uid: a0af0b83fff43d634dfe02e15106f92d
related_resources_text: ''
short_url: video-4-cart-in-r-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-4-cart-in-r/video-4-cart-in-r-0
title: 'Video 4: CART in R'
transcript: >-
  <p><span m='4490'>In</span> <span m='4810'>this</span> <span
  m='5130'>video,</span> <span m='5450'>we'll</span> <span m='5770'>see</span>
  <span m='6090'>how</span> <span m='6410'>to</span> <span m='6730'>build</span>
  <span m='7050'>a</span> <span m='7370'>CART</span> <span m='7690'>model</span>
  <span m='8010'>in</span> <span m='8330'>R.</span> <span m='8650'>Let's</span>
  <span m='8970'>start</span> <span m='9497'>by</span> <span
  m='10025'>reading</span> <span m='10552'>in</span> <span m='11080'>the</span>
  <span m='11607'>data</span> <span m='12135'>file</span> <span
  m='12662'>"stevens.csv".</span> </p><p><span m='13190'>We'll</span> <span
  m='13778'>call</span> <span m='14366'>our</span> <span m='14955'>data</span>
  <span m='15543'>frame</span> <span m='16131'>stevens</span> <span
  m='16720'>and</span> <span m='17192'>use</span> <span m='17665'>the</span>
  <span m='18138'>read.csv</span> <span m='18610'>function</span> <span
  m='19083'>to</span> <span m='19556'>read</span> <span m='20029'>in</span>
  <span m='20501'>the</span> <span m='20974'>data</span> <span
  m='21447'>file</span> <span m='21920'>"stevens.csv".</span> </p><p><span
  m='26350'>Remember</span> <span m='26666'>to</span> <span
  m='26983'>navigate</span> <span m='27300'>to</span> <span m='27616'>the</span>
  <span m='27933'>directory</span> <span m='28250'>on</span> <span
  m='28908'>your</span> <span m='29567'>computer</span> <span
  m='30226'>containing</span> <span m='30885'>the</span> <span
  m='31543'>file</span> <span m='32202'>"stevens.csv"</span> <span
  m='32861'>first.</span> </p><p><span m='33520'>Now,</span> <span
  m='33821'>let's</span> <span m='34123'>take</span> <span m='34425'>a</span>
  <span m='34726'>look</span> <span m='35028'>at</span> <span
  m='35330'>our</span> <span m='35631'>data</span> <span m='35933'>using</span>
  <span m='36235'>the</span> <span m='36536'>str</span> <span
  m='36838'>function.</span> </p><p><span m='40290'>We</span> <span
  m='40995'>have</span> <span m='41700'>566</span> <span
  m='42405'>observations,</span> <span m='43110'>or</span> <span
  m='43815'>Supreme</span> <span m='44520'>Court</span> <span
  m='45225'>cases,</span> <span m='45930'>and</span> <span m='46580'>nine</span>
  <span m='47230'>different</span> <span m='47880'>variables.</span>
  </p><p><span m='48530'>Docket</span> <span m='48917'>is</span> <span
  m='49305'>just</span> <span m='49693'>a</span> <span m='50081'>unique</span>
  <span m='50468'>identifier</span> <span m='50856'>for</span> <span
  m='51244'>each</span> <span m='51632'>case,</span> <span m='52020'>and</span>
  <span m='52391'>Term</span> <span m='52762'>is</span> <span
  m='53133'>the</span> <span m='53505'>year</span> <span m='53876'>of</span>
  <span m='54247'>the</span> <span m='54618'>case.</span> </p><p><span
  m='54990'>Then</span> <span m='55404'>we</span> <span m='55818'>have</span>
  <span m='56233'>our</span> <span m='56647'>six</span> <span
  m='57062'>independent</span> <span m='57476'>variables:</span> <span
  m='57891'>the</span> <span m='58305'>circuit</span> <span
  m='58720'>court</span> <span m='59150'>of</span> <span
  m='59580'>origin,</span> <span m='60010'>the</span> <span
  m='60440'>issue</span> <span m='60870'>area</span> <span m='61300'>of</span>
  <span m='61730'>the</span> <span m='62160'>case,</span> <span
  m='62590'>the</span> <span m='63051'>type</span> <span m='63513'>of</span>
  <span m='63975'>petitioner,</span> <span m='64437'>the</span> <span
  m='64899'>type</span> <span m='65360'>of</span> <span
  m='65822'>respondent,</span> <span m='66284'>the</span> <span
  m='66746'>lower</span> <span m='67208'>court</span> <span
  m='67670'>direction,</span> <span m='68153'>and</span> <span
  m='68637'>whether</span> <span m='69120'>or</span> <span m='69604'>not</span>
  <span m='70088'>the</span> <span m='70571'>petitioner</span> <span
  m='71055'>argued</span> <span m='71539'>that</span> <span m='72073'>a</span>
  <span m='72607'>law</span> <span m='73142'>or</span> <span
  m='73676'>practice</span> <span m='74211'>was</span> <span
  m='74745'>unconstitutional.</span> </p><p><span m='75280'>The</span> <span
  m='75748'>last</span> <span m='76217'>variable</span> <span
  m='76685'>is</span> <span m='77154'>our</span> <span
  m='77622'>dependent</span> <span m='78091'>variable,</span> <span
  m='78560'>whether</span> <span m='78928'>or</span> <span m='79296'>not</span>
  <span m='79665'>Justice</span> <span m='80033'>Stevens</span> <span
  m='80401'>voted</span> <span m='80770'>to</span> <span
  m='81296'>reverse</span> <span m='81822'>the</span> <span
  m='82349'>case:</span> <span m='82875'>1</span> <span m='83401'>for</span>
  <span m='83928'>reverse,</span> <span m='84454'>and</span> <span
  m='84980'>0</span> <span m='85507'>for</span> <span m='86033'>affirm.</span>
  </p><p><span m='86560'>Now</span> <span m='86871'>before</span> <span
  m='87183'>building</span> <span m='87495'>models,</span> <span
  m='87806'>we</span> <span m='88118'>need</span> <span m='88430'>to</span>
  <span m='88802'>split</span> <span m='89175'>our</span> <span
  m='89547'>data</span> <span m='89920'>into</span> <span m='90292'>a</span>
  <span m='90665'>training</span> <span m='91037'>set</span> <span
  m='91410'>and</span> <span m='91782'>a</span> <span m='92155'>testing</span>
  <span m='92527'>set.</span> </p><p><span m='92900'>We'll</span> <span
  m='93350'>do</span> <span m='93800'>this</span> <span m='94250'>using</span>
  <span m='94700'>the</span> <span m='95150'>sample.split</span> <span
  m='95600'>function,</span> <span m='96050'>like</span> <span
  m='96480'>we</span> <span m='96910'>did</span> <span m='97340'>last</span>
  <span m='97770'>week</span> <span m='98200'>for</span> <span
  m='98630'>logistic</span> <span m='99060'>regression.</span> </p><p><span
  m='99490'>First,</span> <span m='99902'>we</span> <span m='100314'>need</span>
  <span m='100727'>to</span> <span m='101139'>load</span> <span
  m='101551'>the</span> <span m='101964'>package</span> <span
  m='102376'>caTools</span> <span m='102789'>with</span> <span
  m='103249'>library(caTools).</span> </p><p><span m='109990'>Now,</span> <span
  m='110282'>so</span> <span m='110574'>that</span> <span m='110866'>we</span>
  <span m='111158'>all</span> <span m='111450'>get</span> <span
  m='111742'>the</span> <span m='112034'>same</span> <span
  m='112326'>split,</span> <span m='112618'>we</span> <span
  m='112910'>need</span> <span m='113202'>to</span> <span m='113494'>set</span>
  <span m='113786'>the</span> <span m='114078'>seed.</span> </p><p><span
  m='114370'>Remember</span> <span m='114630'>that</span> <span
  m='114891'>this</span> <span m='115152'>can</span> <span m='115413'>be</span>
  <span m='115674'>any</span> <span m='115935'>number,</span> <span
  m='116195'>as</span> <span m='116456'>long</span> <span m='116717'>as</span>
  <span m='116978'>we</span> <span m='117239'>all</span> <span
  m='117500'>use</span> <span m='118009'>the</span> <span m='118519'>same</span>
  <span m='119029'>number.</span> </p><p><span m='119539'>Let's</span> <span
  m='120689'>set</span> <span m='121839'>the</span> <span m='122989'>seed</span>
  <span m='124139'>to</span> <span m='125289'>3000.</span> </p><p><span
  m='126440'>Now,</span> <span m='126834'>let's</span> <span
  m='127228'>create</span> <span m='127622'>our</span> <span
  m='128016'>split.</span> </p><p><span m='128410'>We'll</span> <span
  m='129125'>call</span> <span m='129840'>it</span> <span m='130555'>spl,</span>
  <span m='131270'>and</span> <span m='131985'>we'll</span> <span
  m='132700'>use</span> <span m='133415'>the</span> <span
  m='134130'>sample.split</span> <span m='134845'>function,</span> <span
  m='135560'>where</span> <span m='135930'>the</span> <span
  m='136300'>first</span> <span m='136670'>argument</span> <span
  m='137040'>needs</span> <span m='137410'>to</span> <span m='137780'>be</span>
  <span m='138150'>our</span> <span m='138520'>outcome</span> <span
  m='138890'>variable,</span> <span m='139260'>stevens$Reverse,</span> <span
  m='140272'>and</span> <span m='141285'>then</span> <span m='142298'>the</span>
  <span m='143311'>second</span> <span m='144324'>argument</span> <span
  m='145337'>is</span> <span m='146350'>the</span> <span
  m='146697'>SplitRatio,</span> <span m='147045'>or</span> <span
  m='147393'>the</span> <span m='147741'>percentage</span> <span
  m='148089'>of</span> <span m='148437'>data</span> <span m='148785'>that</span>
  <span m='149133'>we</span> <span m='149481'>want</span> <span
  m='149829'>to</span> <span m='150189'>put</span> <span m='150549'>in</span>
  <span m='150909'>the</span> <span m='151269'>training</span> <span
  m='151629'>set.</span> </p><p><span m='151990'>In</span> <span
  m='152443'>this</span> <span m='152896'>case,</span> <span
  m='153349'>we'll</span> <span m='153802'>put</span> <span
  m='154255'>70%</span> <span m='154708'>of</span> <span m='155161'>the</span>
  <span m='155614'>data</span> <span m='156067'>in</span> <span
  m='156520'>the</span> <span m='156973'>training</span> <span
  m='157426'>set.</span> </p><p><span m='157880'>Now,</span> <span
  m='158214'>let's</span> <span m='158548'>create</span> <span
  m='158882'>our</span> <span m='159217'>training</span> <span
  m='159551'>and</span> <span m='159885'>testing</span> <span
  m='160220'>sets</span> <span m='160858'>using</span> <span
  m='161496'>the</span> <span m='162134'>subset</span> <span
  m='162772'>function.</span> </p><p><span m='163410'>We'll</span> <span
  m='163993'>call</span> <span m='164576'>our</span> <span
  m='165160'>training</span> <span m='165743'>set</span> <span
  m='166326'>Train,</span> <span m='166910'>and</span> <span
  m='167694'>we'll</span> <span m='168478'>take</span> <span m='169262'>a</span>
  <span m='170047'>subset</span> <span m='170831'>of</span> <span
  m='171615'>stevens,</span> <span m='172400'>only</span> <span
  m='172914'>taking</span> <span m='173429'>the</span> <span
  m='173943'>observations</span> <span m='174458'>for</span> <span
  m='174972'>which</span> <span m='175487'>spl</span> <span m='176001'>is</span>
  <span m='176516'>equal</span> <span m='177030'>to</span> <span
  m='177545'>TRUE.</span> </p><p><span m='178060'>We'll</span> <span
  m='178517'>call</span> <span m='178975'>our</span> <span
  m='179432'>testing</span> <span m='179890'>set</span> <span
  m='180347'>Test,</span> <span m='180805'>and</span> <span
  m='181262'>here</span> <span m='181720'>take</span> <span m='182177'>a</span>
  <span m='182635'>subset</span> <span m='183092'>of</span> <span
  m='183550'>stevens,</span> <span m='184007'>but</span> <span
  m='184465'>this</span> <span m='184922'>time,</span> <span
  m='185380'>taking</span> <span m='185799'>the</span> <span
  m='186218'>observations</span> <span m='186637'>for</span> <span
  m='187056'>which</span> <span m='187475'>spl</span> <span m='187894'>is</span>
  <span m='188313'>equal</span> <span m='188732'>to</span> <span
  m='189151'>FALSE.</span> </p><p><span m='192360'>Now,</span> <span
  m='192676'>we're</span> <span m='192992'>ready</span> <span
  m='193308'>to</span> <span m='193625'>build</span> <span m='193941'>our</span>
  <span m='194257'>CART</span> <span m='194573'>model.</span> </p><p><span
  m='194890'>First</span> <span m='195211'>we</span> <span
  m='195532'>need</span> <span m='195854'>to</span> <span
  m='196175'>install</span> <span m='196497'>and</span> <span
  m='196818'>load</span> <span m='197140'>the</span> <span
  m='197742'>rpart</span> <span m='198345'>package</span> <span
  m='198947'>and</span> <span m='199550'>the</span> <span
  m='200152'>rpart</span> <span m='200755'>plotting</span> <span
  m='201357'>package.</span> </p><p><span m='201960'>Remember</span> <span
  m='202358'>that</span> <span m='202757'>to</span> <span
  m='203155'>install</span> <span m='203554'>a</span> <span
  m='203952'>new</span> <span m='204351'>package,</span> <span
  m='204750'>we</span> <span m='205640'>use</span> <span m='206530'>the</span>
  <span m='207420'>install.packages</span> <span m='208310'>function,</span>
  <span m='209200'>and</span> <span m='209553'>then</span> <span
  m='209906'>in</span> <span m='210260'>parentheses</span> <span
  m='210613'>and</span> <span m='210966'>quotes,</span> <span
  m='211320'>give</span> <span m='211584'>the</span> <span
  m='211848'>name</span> <span m='212112'>of</span> <span m='212376'>the</span>
  <span m='212640'>package</span> <span m='212904'>we</span> <span
  m='213168'>want</span> <span m='213432'>to</span> <span
  m='213696'>install.</span> </p><p><span m='213960'>In</span> <span
  m='214675'>this</span> <span m='215390'>case,</span> <span
  m='216105'>rpart.</span> </p><p><span m='216820'>After</span> <span
  m='217137'>you</span> <span m='217454'>hit</span> <span
  m='217771'>Enter,</span> <span m='218088'>a</span> <span
  m='218405'>CRAN</span> <span m='218722'>mirror</span> <span
  m='219040'>should</span> <span m='219442'>pop</span> <span
  m='219845'>up</span> <span m='220248'>asking</span> <span
  m='220650'>you</span> <span m='221053'>to</span> <span m='221456'>pick</span>
  <span m='221859'>a</span> <span m='222261'>location</span> <span
  m='222664'>near</span> <span m='223067'>you.</span> </p><p><span
  m='223470'>Go</span> <span m='223910'>ahead</span> <span m='224350'>and</span>
  <span m='224790'>pick</span> <span m='225230'>the</span> <span
  m='225670'>appropriate</span> <span m='226110'>location.</span> </p><p><span
  m='226550'>In</span> <span m='226929'>my</span> <span m='227309'>case,</span>
  <span m='227689'>I'll</span> <span m='228069'>pick</span> <span
  m='228449'>Pennsylvania</span> <span m='228829'>in</span> <span
  m='229364'>the</span> <span m='229900'>United</span> <span
  m='230436'>States,</span> <span m='230971'>and</span> <span
  m='231507'>hit</span> <span m='232043'>OK.</span> </p><p><span
  m='232579'>You</span> <span m='232908'>should</span> <span
  m='233237'>see</span> <span m='233566'>some</span> <span
  m='233895'>lines</span> <span m='234224'>run</span> <span
  m='234553'>your</span> <span m='234882'>R</span> <span
  m='235211'>Console,</span> <span m='235540'>and</span> <span
  m='235841'>then,</span> <span m='236142'>when</span> <span
  m='236443'>you're</span> <span m='236744'>back</span> <span
  m='237045'>to</span> <span m='237346'>the</span> <span
  m='237647'>blinking</span> <span m='237948'>cursor,</span> <span
  m='238250'>load</span> <span m='238696'>the</span> <span
  m='239142'>package</span> <span m='239588'>with</span> <span
  m='240034'>library(rpart).</span> </p><p><span m='245030'>Now,</span> <span
  m='246273'>let's</span> <span m='247516'>install</span> <span
  m='248760'>the</span> <span m='250003'>package</span> <span
  m='251246'>rpart.plot.</span> </p><p><span m='259110'>Again,</span> <span
  m='259424'>some</span> <span m='259738'>lines</span> <span
  m='260053'>should</span> <span m='260367'>run</span> <span
  m='260682'>in</span> <span m='260996'>your</span> <span m='261311'>R</span>
  <span m='261625'>Console,</span> <span m='261940'>and</span> <span
  m='262193'>when</span> <span m='262447'>you're</span> <span
  m='262701'>back</span> <span m='262955'>to</span> <span m='263208'>the</span>
  <span m='263462'>blinking</span> <span m='263716'>cursor,</span> <span
  m='263970'>load</span> <span m='264438'>the</span> <span
  m='264906'>package</span> <span m='265374'>with</span> <span
  m='265842'>library(rpart.plot).</span> </p><p><span m='271340'>Now</span>
  <span m='271732'>we</span> <span m='272125'>can</span> <span
  m='272517'>create</span> <span m='272910'>our</span> <span
  m='273303'>CART</span> <span m='273695'>model</span> <span
  m='274088'>using</span> <span m='274481'>the</span> <span
  m='274873'>rpart</span> <span m='275266'>function.</span> </p><p><span
  m='275659'>We'll</span> <span m='276435'>call</span> <span
  m='277211'>our</span> <span m='277987'>model</span> <span
  m='278763'>StevensTree,</span> <span m='279540'>and</span> <span
  m='279845'>we'll</span> <span m='280151'>use</span> <span
  m='280457'>the</span> <span m='280762'>rpart</span> <span
  m='281068'>function,</span> <span m='281374'>where</span> <span
  m='281680'>the</span> <span m='281959'>first</span> <span
  m='282238'>argument</span> <span m='282517'>is</span> <span
  m='282796'>the</span> <span m='283075'>same</span> <span m='283354'>as</span>
  <span m='283633'>if</span> <span m='283912'>we</span> <span
  m='284191'>were</span> <span m='284470'>building</span> <span
  m='284750'>a</span> <span m='285196'>linear</span> <span m='285643'>or</span>
  <span m='286090'>logistic</span> <span m='286536'>regression</span> <span
  m='286983'>model.</span> </p><p><span m='287430'>We</span> <span
  m='287727'>give</span> <span m='288025'>our</span> <span
  m='288322'>dependent</span> <span m='288620'>variable--</span> <span
  m='288917'>in</span> <span m='289215'>our</span> <span m='289512'>case,</span>
  <span m='289810'>Reverse--</span> <span m='290348'>followed</span> <span
  m='290886'>by</span> <span m='291425'>a</span> <span m='291963'>tilde</span>
  <span m='292501'>sign,</span> <span m='293040'>and</span> <span
  m='293388'>then</span> <span m='293736'>the</span> <span
  m='294084'>independent</span> <span m='294432'>variables</span> <span
  m='294780'>separated</span> <span m='295320'>by</span> <span
  m='295860'>plus</span> <span m='296400'>signs.</span> </p><p><span
  m='296940'>So</span> <span m='298183'>Circuit</span> <span m='299427'>+</span>
  <span m='300671'>Issue</span> <span m='301915'>+</span> <span
  m='303158'>Petitioner</span> <span m='304402'>+</span> <span
  m='305646'>Respondent</span> <span m='306890'>+</span> <span
  m='308607'>LowerCourt</span> <span m='310325'>+</span> <span
  m='312042'>Unconst.</span> </p><p><span m='313760'>We</span> <span
  m='313972'>also</span> <span m='314185'>need</span> <span m='314397'>to</span>
  <span m='314610'>give</span> <span m='314822'>our</span> <span
  m='315035'>data</span> <span m='315247'>set</span> <span
  m='315460'>that</span> <span m='315695'>should</span> <span
  m='315930'>be</span> <span m='316165'>used</span> <span m='316400'>to</span>
  <span m='316635'>build</span> <span m='316870'>our</span> <span
  m='317105'>model,</span> <span m='317340'>which</span> <span
  m='317575'>in</span> <span m='317810'>our</span> <span m='318045'>case</span>
  <span m='318280'>is</span> <span m='319215'>Train.</span> </p><p><span
  m='320150'>Now</span> <span m='320535'>we'll</span> <span
  m='320921'>give</span> <span m='321307'>two</span> <span
  m='321692'>additional</span> <span m='322078'>arguments</span> <span
  m='322464'>here.</span> </p><p><span m='322850'>The</span> <span
  m='323522'>first</span> <span m='324195'>one</span> <span m='324868'>is</span>
  <span m='325541'>method</span> <span m='326214'>=</span> <span
  m='326887'>"class".</span> </p><p><span m='327560'>This</span> <span
  m='327906'>tells</span> <span m='328252'>rpart</span> <span
  m='328598'>to</span> <span m='328944'>build</span> <span m='329290'>a</span>
  <span m='329636'>classification</span> <span m='329982'>tree,</span> <span
  m='330328'>instead</span> <span m='330674'>of</span> <span m='331020'>a</span>
  <span m='331623'>regression</span> <span m='332226'>tree.</span> </p><p><span
  m='332830'>You'll</span> <span m='333252'>see</span> <span
  m='333674'>how</span> <span m='334096'>we</span> <span m='334518'>can</span>
  <span m='334940'>create</span> <span m='335362'>regression</span> <span
  m='335784'>trees</span> <span m='336206'>in</span> <span
  m='336628'>recitation.</span> </p><p><span m='337050'>The</span> <span
  m='337702'>last</span> <span m='338354'>argument</span> <span
  m='339006'>we'll</span> <span m='339658'>give</span> <span
  m='340311'>is</span> <span m='340963'>minbucket</span> <span
  m='341615'>=</span> <span m='342267'>25.</span> </p><p><span
  m='342920'>This</span> <span m='343186'>limits</span> <span
  m='343452'>the</span> <span m='343718'>tree</span> <span m='343985'>so</span>
  <span m='344251'>that</span> <span m='344517'>it</span> <span
  m='344783'>doesn't</span> <span m='345050'>overfit</span> <span
  m='345518'>to</span> <span m='345986'>our</span> <span
  m='346454'>training</span> <span m='346922'>set.</span> </p><p><span
  m='347390'>We</span> <span m='347677'>selected</span> <span
  m='347965'>a</span> <span m='348252'>value</span> <span m='348540'>of</span>
  <span m='348827'>25,</span> <span m='349115'>but</span> <span
  m='349402'>we</span> <span m='349690'>could</span> <span
  m='350065'>pick</span> <span m='350441'>a</span> <span
  m='350817'>smaller</span> <span m='351192'>or</span> <span
  m='351568'>larger</span> <span m='351944'>value.</span> </p><p><span
  m='352320'>We'll</span> <span m='352739'>see</span> <span
  m='353158'>another</span> <span m='353577'>way</span> <span
  m='353996'>to</span> <span m='354415'>limit</span> <span m='354835'>the</span>
  <span m='355254'>tree</span> <span m='355673'>later</span> <span
  m='356092'>in</span> <span m='356511'>this</span> <span
  m='356930'>lecture.</span> </p><p><span m='357350'>Now</span> <span
  m='357743'>let's</span> <span m='358136'>plot</span> <span
  m='358530'>our</span> <span m='358923'>tree</span> <span
  m='359316'>using</span> <span m='359710'>the</span> <span
  m='360103'>prp</span> <span m='360496'>function,</span> <span
  m='360890'>where</span> <span m='361194'>the</span> <span
  m='361499'>only</span> <span m='361803'>argument</span> <span
  m='362108'>is</span> <span m='362412'>the</span> <span m='362717'>name</span>
  <span m='363021'>of</span> <span m='363326'>our</span> <span
  m='363630'>model,</span> <span m='363935'>StevensTree.</span> </p><p><span
  m='367990'>You</span> <span m='368325'>should</span> <span
  m='368660'>see</span> <span m='368996'>the</span> <span m='369331'>tree</span>
  <span m='369667'>pop</span> <span m='370002'>up</span> <span
  m='370338'>in</span> <span m='370673'>the</span> <span
  m='371009'>graphics</span> <span m='371344'>window.</span> </p><p><span
  m='371680'>The</span> <span m='371928'>first</span> <span
  m='372176'>split</span> <span m='372424'>of</span> <span m='372672'>our</span>
  <span m='372920'>tree</span> <span m='373168'>is</span> <span
  m='373416'>whether</span> <span m='373664'>or</span> <span
  m='373912'>not</span> <span m='374160'>the</span> <span
  m='374701'>lower</span> <span m='375243'>court</span> <span
  m='375785'>decision</span> <span m='376326'>is</span> <span
  m='376868'>liberal.</span> </p><p><span m='377410'>If</span> <span
  m='377648'>it</span> <span m='377886'>is,</span> <span m='378125'>then</span>
  <span m='378363'>we</span> <span m='378601'>move</span> <span
  m='378840'>to</span> <span m='379078'>the</span> <span m='379316'>left</span>
  <span m='379555'>in</span> <span m='379793'>the</span> <span
  m='380031'>tree.</span> </p><p><span m='380270'>And</span> <span
  m='380718'>we</span> <span m='381166'>check</span> <span m='381614'>the</span>
  <span m='382062'>respondent.</span> </p><p><span m='382510'>If</span> <span
  m='382985'>the</span> <span m='383461'>respondent</span> <span
  m='383936'>is</span> <span m='384412'>a</span> <span
  m='384887'>criminal</span> <span m='385363'>defendant,</span> <span
  m='385838'>injured</span> <span m='386314'>person,</span> <span
  m='386790'>politician,</span> <span m='387405'>state,</span> <span
  m='388020'>or</span> <span m='388635'>the</span> <span
  m='389250'>United</span> <span m='389865'>States,</span> <span
  m='390480'>we</span> <span m='391082'>predict</span> <span
  m='391684'>0,</span> <span m='392286'>or</span> <span
  m='392888'>affirm.</span> </p><p><span m='393490'>You</span> <span
  m='393867'>can</span> <span m='394245'>see</span> <span m='394623'>here</span>
  <span m='395001'>that</span> <span m='395378'>the</span> <span
  m='395756'>prp</span> <span m='396134'>function</span> <span
  m='396512'>abbreviates</span> <span m='396890'>the</span> <span
  m='397370'>values</span> <span m='397850'>of</span> <span
  m='398330'>the</span> <span m='398810'>independent</span> <span
  m='399290'>variables.</span> </p><p><span m='399770'>If</span> <span
  m='400137'>you're</span> <span m='400505'>not</span> <span
  m='400872'>sure</span> <span m='401240'>what</span> <span
  m='401607'>the</span> <span m='401975'>abbreviations</span> <span
  m='402342'>are,</span> <span m='402710'>you</span> <span
  m='403011'>could</span> <span m='403312'>create</span> <span
  m='403613'>a</span> <span m='403915'>table</span> <span m='404216'>of</span>
  <span m='404517'>the</span> <span m='404818'>variable</span> <span
  m='405120'>to</span> <span m='405527'>see</span> <span m='405934'>all</span>
  <span m='406341'>of</span> <span m='406748'>the</span> <span
  m='407155'>possible</span> <span m='407562'>values.</span> </p><p><span
  m='407970'>prp</span> <span m='408371'>will</span> <span
  m='408773'>select</span> <span m='409175'>the</span> <span
  m='409576'>abbreviation</span> <span m='409978'>so</span> <span
  m='410380'>that</span> <span m='411037'>they're</span> <span
  m='411695'>uniquely</span> <span m='412352'>identifiable.</span> </p><p><span
  m='413010'>So</span> <span m='413267'>if</span> <span m='413525'>you</span>
  <span m='413782'>made</span> <span m='414040'>a</span> <span
  m='414297'>table,</span> <span m='414555'>you</span> <span
  m='414812'>could</span> <span m='415070'>see</span> <span
  m='415582'>that</span> <span m='416095'>CRI</span> <span
  m='416608'>stands</span> <span m='417120'>for</span> <span
  m='417633'>criminal</span> <span m='418146'>defendant,</span> <span
  m='418659'>INJ</span> <span m='419387'>stands</span> <span
  m='420116'>for</span> <span m='420844'>injured</span> <span
  m='421573'>person,</span> <span m='422301'>etc.</span> </p><p><span
  m='423030'>So</span> <span m='423334'>now</span> <span
  m='423638'>moving</span> <span m='423942'>on</span> <span m='424246'>in</span>
  <span m='424550'>our</span> <span m='424855'>tree,</span> <span
  m='425159'>if</span> <span m='425463'>the</span> <span
  m='425767'>respondent</span> <span m='426071'>is</span> <span
  m='426375'>not</span> <span m='426680'>one</span> <span m='426974'>of</span>
  <span m='427269'>these</span> <span m='427563'>types,</span> <span
  m='427858'>we</span> <span m='428152'>move</span> <span m='428447'>on</span>
  <span m='428741'>to</span> <span m='429036'>the</span> <span
  m='429330'>next</span> <span m='429625'>split,</span> <span
  m='429920'>and</span> <span m='430340'>we</span> <span m='430760'>check</span>
  <span m='431180'>the</span> <span m='431600'>petitioner.</span> </p><p><span
  m='432020'>If</span> <span m='432595'>the</span> <span
  m='433170'>petitioner</span> <span m='433745'>is</span> <span
  m='434320'>a</span> <span m='434895'>city,</span> <span
  m='435470'>employee,</span> <span m='436045'>employer,</span> <span
  m='436620'>government</span> <span m='437290'>official,</span> <span
  m='437960'>or</span> <span m='438630'>politician,</span> <span
  m='439300'>then</span> <span m='439775'>we</span> <span
  m='440250'>predict</span> <span m='440725'>0,</span> <span
  m='441200'>or</span> <span m='441675'>affirm.</span> </p><p><span
  m='442150'>If</span> <span m='442500'>not,</span> <span m='442850'>then</span>
  <span m='443200'>we</span> <span m='443550'>check</span> <span
  m='443900'>the</span> <span m='444250'>circuit</span> <span
  m='444600'>court</span> <span m='444950'>of</span> <span
  m='445300'>origin.</span> </p><p><span m='445650'>If</span> <span
  m='446269'>it's</span> <span m='446888'>the</span> <span
  m='447507'>10th,</span> <span m='448126'>1st,</span> <span
  m='448745'>3rd,</span> <span m='449364'>4th,</span> <span m='449983'>DC</span>
  <span m='450602'>or</span> <span m='451221'>Federal</span> <span
  m='451840'>Court,</span> <span m='452460'>then</span> <span
  m='452915'>we</span> <span m='453370'>predict</span> <span
  m='453825'>0.</span> </p><p><span m='454280'>Otherwise,</span> <span
  m='454935'>we</span> <span m='455590'>predict</span> <span
  m='456245'>1,</span> <span m='456900'>or</span> <span
  m='457555'>reverse.</span> </p><p><span m='458210'>We</span> <span
  m='458513'>can</span> <span m='458817'>repeat</span> <span
  m='459121'>this</span> <span m='459425'>same</span> <span
  m='459728'>process</span> <span m='460032'>on</span> <span
  m='460336'>the</span> <span m='460640'>other</span> <span
  m='460943'>side</span> <span m='461247'>of</span> <span m='461551'>the</span>
  <span m='461855'>tree</span> <span m='462159'>if</span> <span
  m='462620'>the</span> <span m='463081'>lower</span> <span
  m='463543'>court</span> <span m='464004'>decision</span> <span
  m='464465'>is</span> <span m='464927'>not</span> <span
  m='465388'>liberal.</span> </p><p><span m='465850'>Comparing</span> <span
  m='466251'>this</span> <span m='466652'>to</span> <span m='467053'>a</span>
  <span m='467455'>logistic</span> <span m='467856'>regression</span> <span
  m='468257'>model,</span> <span m='468659'>we</span> <span
  m='469057'>can</span> <span m='469456'>see</span> <span m='469855'>that</span>
  <span m='470253'>it's</span> <span m='470652'>very</span> <span
  m='471051'>interpretable.</span> </p><p><span m='471450'>A</span> <span
  m='471783'>CART</span> <span m='472116'>tree</span> <span m='472450'>is</span>
  <span m='472783'>a</span> <span m='473116'>series</span> <span
  m='473450'>of</span> <span m='473783'>decision</span> <span
  m='474116'>rules</span> <span m='474450'>which</span> <span
  m='475024'>can</span> <span m='475598'>easily</span> <span
  m='476172'>be</span> <span m='476746'>explained.</span> </p><p><span
  m='477320'>Now</span> <span m='477573'>let's</span> <span
  m='477827'>see</span> <span m='478081'>how</span> <span m='478335'>well</span>
  <span m='478588'>our</span> <span m='478842'>CART</span> <span
  m='479096'>model</span> <span m='479350'>does</span> <span
  m='479800'>at</span> <span m='480250'>making</span> <span
  m='480700'>predictions</span> <span m='481150'>for</span> <span
  m='481600'>the</span> <span m='482050'>test</span> <span
  m='482500'>set.</span> </p><p><span m='482950'>So</span> <span
  m='483314'>back</span> <span m='483678'>in</span> <span m='484042'>our</span>
  <span m='484406'>R</span> <span m='484770'>Console,</span> <span
  m='485134'>we'll</span> <span m='485498'>call</span> <span
  m='485862'>our</span> <span m='486226'>predictions</span> <span
  m='486590'>PredictCART,</span> <span m='487345'>and</span> <span
  m='488100'>we'll</span> <span m='488855'>use</span> <span
  m='489610'>the</span> <span m='490365'>predict</span> <span
  m='491120'>function,</span> <span m='491875'>where</span> <span
  m='492630'>the</span> <span m='492939'>first</span> <span
  m='493248'>argument</span> <span m='493557'>is</span> <span
  m='493866'>the</span> <span m='494175'>name</span> <span m='494484'>of</span>
  <span m='494793'>our</span> <span m='495102'>model,</span> <span
  m='495411'>StevensTree.</span> </p><p><span m='500210'>The</span> <span
  m='500538'>second</span> <span m='500867'>argument</span> <span
  m='501195'>is</span> <span m='501524'>the</span> <span m='501852'>new</span>
  <span m='502181'>data</span> <span m='502510'>we</span> <span
  m='503168'>want</span> <span m='503827'>to</span> <span m='504485'>make</span>
  <span m='505144'>predictions</span> <span m='505802'>for,</span> <span
  m='506461'>Test.</span> </p><p><span m='507120'>And</span> <span
  m='507598'>we'll</span> <span m='508076'>add</span> <span m='508555'>a</span>
  <span m='509033'>third</span> <span m='509511'>argument</span> <span
  m='509990'>here,</span> <span m='510468'>which</span> <span
  m='510946'>is</span> <span m='511425'>type</span> <span m='511903'>=</span>
  <span m='512381'>"class".</span> </p><p><span m='512860'>We</span> <span
  m='513157'>need</span> <span m='513455'>to</span> <span m='513753'>give</span>
  <span m='514050'>this</span> <span m='514348'>argument</span> <span
  m='514646'>when</span> <span m='514943'>making</span> <span
  m='515241'>predictions</span> <span m='515539'>for</span> <span
  m='515950'>our</span> <span m='516362'>CART</span> <span
  m='516774'>model</span> <span m='517186'>if</span> <span m='517598'>we</span>
  <span m='518010'>want</span> <span m='518422'>the</span> <span
  m='518834'>majority</span> <span m='519246'>class</span> <span
  m='519658'>predictions.</span> </p><p><span m='520070'>This</span> <span
  m='520446'>is</span> <span m='520822'>like</span> <span
  m='521198'>using</span> <span m='521575'>a</span> <span
  m='521951'>threshold</span> <span m='522327'>of</span> <span
  m='522703'>0.5.</span> </p><p><span m='523080'>We'll</span> <span
  m='523311'>see</span> <span m='523543'>in</span> <span m='523774'>a</span>
  <span m='524006'>few</span> <span m='524237'>minutes</span> <span
  m='524469'>how</span> <span m='524700'>we</span> <span m='524932'>can</span>
  <span m='525163'>leave</span> <span m='525395'>this</span> <span
  m='525626'>argument</span> <span m='525858'>out</span> <span
  m='526090'>and</span> <span m='526571'>still</span> <span
  m='527052'>get</span> <span m='527533'>probabilities</span> <span
  m='528015'>from</span> <span m='528496'>our</span> <span
  m='528977'>CART</span> <span m='529458'>model.</span> </p><p><span
  m='529940'>Now</span> <span m='530242'>let's</span> <span
  m='530545'>compute</span> <span m='530847'>the</span> <span
  m='531150'>accuracy</span> <span m='531452'>of</span> <span
  m='531755'>our</span> <span m='532057'>model</span> <span m='532360'>by</span>
  <span m='532836'>building</span> <span m='533312'>a</span> <span
  m='533788'>confusion</span> <span m='534264'>matrix.</span> </p><p><span
  m='534740'>So</span> <span m='535095'>we'll</span> <span m='535450'>use</span>
  <span m='535805'>the</span> <span m='536160'>table</span> <span
  m='536515'>function,</span> <span m='536870'>and</span> <span
  m='537225'>first</span> <span m='537580'>give</span> <span
  m='537935'>the</span> <span m='538290'>true</span> <span
  m='538645'>outcome</span> <span m='539000'>values--</span> <span
  m='539912'>Test$Reverse,</span> <span m='540825'>and</span> <span
  m='541738'>then</span> <span m='542651'>our</span> <span
  m='543564'>predictions,</span> <span m='544477'>PredictCART.</span>
  </p><p><span m='549120'>To</span> <span m='549371'>compute</span> <span
  m='549622'>the</span> <span m='549873'>accuracy,</span> <span
  m='550124'>we</span> <span m='550375'>need</span> <span m='550626'>to</span>
  <span m='550877'>add</span> <span m='551128'>up</span> <span
  m='551380'>the</span> <span m='551936'>observations</span> <span
  m='552493'>we</span> <span m='553050'>got</span> <span
  m='553606'>correct,</span> <span m='554163'>41</span> <span
  m='554720'>plus</span> <span m='555276'>71,</span> <span
  m='555833'>divided</span> <span m='556390'>by</span> <span
  m='556702'>the</span> <span m='557014'>total</span> <span
  m='557326'>number</span> <span m='557638'>of</span> <span
  m='557951'>observations</span> <span m='558263'>in</span> <span
  m='558575'>the</span> <span m='558887'>table,</span> <span
  m='559200'>or</span> <span m='559603'>the</span> <span m='560006'>total</span>
  <span m='560409'>number</span> <span m='560812'>of</span> <span
  m='561215'>observations</span> <span m='561618'>in</span> <span
  m='562021'>our</span> <span m='562424'>test</span> <span
  m='562827'>set.</span> </p><p><span m='563230'>So</span> <span
  m='563737'>the</span> <span m='564245'>accuracy</span> <span
  m='564753'>of</span> <span m='565261'>our</span> <span m='565768'>CART</span>
  <span m='566276'>model</span> <span m='566784'>is</span> <span
  m='567292'>0.659.</span> </p><p><span m='567800'>If</span> <span
  m='568072'>you</span> <span m='568344'>were</span> <span m='568616'>to</span>
  <span m='568888'>build</span> <span m='569161'>a</span> <span
  m='569433'>logistic</span> <span m='569705'>regression</span> <span
  m='569977'>model,</span> <span m='570250'>you</span> <span
  m='570721'>would</span> <span m='571192'>get</span> <span m='571664'>an</span>
  <span m='572135'>accuracy</span> <span m='572607'>of</span> <span
  m='573078'>0.665</span> <span m='573550'>and</span> <span m='573848'>a</span>
  <span m='574147'>baseline</span> <span m='574445'>model</span> <span
  m='574744'>that</span> <span m='575042'>always</span> <span
  m='575341'>predicts</span> <span m='575640'>Reverse,</span> <span
  m='576138'>the</span> <span m='576636'>most</span> <span
  m='577134'>common</span> <span m='577632'>outcome,</span> <span
  m='578130'>has</span> <span m='578800'>an</span> <span
  m='579470'>accuracy</span> <span m='580140'>of</span> <span
  m='580810'>0.547.</span> </p><p><span m='581480'>So</span> <span
  m='581898'>our</span> <span m='582317'>CART</span> <span
  m='582736'>model</span> <span m='583155'>significantly</span> <span
  m='583573'>beats</span> <span m='583992'>the</span> <span
  m='584411'>baseline</span> <span m='584830'>and</span> <span
  m='585346'>is</span> <span m='585863'>competitive</span> <span
  m='586380'>with</span> <span m='586896'>logistic</span> <span
  m='587413'>regression.</span> </p><p><span m='587930'>It's</span> <span
  m='588340'>also</span> <span m='588750'>much</span> <span
  m='589160'>more</span> <span m='589570'>interpretable</span> <span
  m='589980'>than</span> <span m='590485'>a</span> <span
  m='590991'>logistic</span> <span m='591497'>regression</span> <span
  m='592002'>model</span> <span m='592508'>would</span> <span
  m='593014'>be.</span> </p><p><span m='593520'>Lastly,</span> <span
  m='593902'>to</span> <span m='594284'>evaluate</span> <span
  m='594666'>our</span> <span m='595048'>model,</span> <span
  m='595430'>let's</span> <span m='595812'>generate</span> <span
  m='596194'>an</span> <span m='596576'>ROC</span> <span m='596958'>curve</span>
  <span m='597340'>for</span> <span m='597805'>our</span> <span
  m='598270'>CART</span> <span m='598735'>model</span> <span
  m='599200'>using</span> <span m='599665'>the</span> <span
  m='600130'>ROCR</span> <span m='600595'>package.</span> </p><p><span
  m='601060'>First,</span> <span m='601370'>we</span> <span
  m='601680'>need</span> <span m='601990'>to</span> <span m='602300'>load</span>
  <span m='602610'>the</span> <span m='602920'>package</span> <span
  m='603230'>with</span> <span m='603540'>the</span> <span
  m='603850'>library</span> <span m='604160'>function,</span> <span
  m='604708'>and</span> <span m='605256'>then</span> <span m='605804'>we</span>
  <span m='606352'>need</span> <span m='606900'>to</span> <span
  m='607448'>generate</span> <span m='607996'>our</span> <span
  m='608544'>predictions</span> <span m='609092'>again,</span> <span
  m='609640'>this</span> <span m='610062'>time</span> <span
  m='610485'>without</span> <span m='610907'>the</span> <span
  m='611330'>type</span> <span m='611752'>=</span> <span
  m='612175'>"class"</span> <span m='612597'>argument.</span> </p><p><span
  m='613020'>We'll</span> <span m='613673'>call</span> <span
  m='614326'>them</span> <span m='614980'>PredictROC,</span> <span
  m='615633'>and</span> <span m='616286'>we'll</span> <span
  m='616940'>use</span> <span m='617341'>the</span> <span
  m='617743'>predict</span> <span m='618145'>function,</span> <span
  m='618546'>giving</span> <span m='618948'>just</span> <span
  m='619350'>as</span> <span m='620080'>the</span> <span m='620810'>two</span>
  <span m='621540'>arguments</span> <span m='622270'>StevensTree</span> <span
  m='623000'>and</span> <span m='623730'>newdata</span> <span
  m='624460'>=</span> <span m='625190'>Test.</span> </p><p><span
  m='625920'>Let's</span> <span m='626125'>take</span> <span m='626330'>a</span>
  <span m='626535'>look</span> <span m='626740'>at</span> <span
  m='626945'>what</span> <span m='627150'>this</span> <span
  m='627355'>looks</span> <span m='627560'>like</span> <span
  m='628280'>by</span> <span m='629000'>just</span> <span
  m='629720'>typing</span> <span m='630440'>PredictROC</span> <span
  m='631160'>and</span> <span m='631880'>hitting</span> <span
  m='632600'>Enter.</span> </p><p><span m='633320'>For</span> <span
  m='633685'>each</span> <span m='634051'>observation</span> <span
  m='634417'>in</span> <span m='634782'>the</span> <span m='635148'>test</span>
  <span m='635514'>set,</span> <span m='635880'>it</span> <span
  m='636146'>gives</span> <span m='636412'>two</span> <span
  m='636678'>numbers</span> <span m='636945'>which</span> <span
  m='637211'>can</span> <span m='637477'>be</span> <span
  m='637743'>thought</span> <span m='638010'>of</span> <span
  m='638427'>as</span> <span m='638844'>the</span> <span
  m='639261'>probability</span> <span m='639678'>of</span> <span
  m='640095'>outcome</span> <span m='640512'>0</span> <span
  m='640930'>and</span> <span m='641371'>the</span> <span
  m='641813'>probability</span> <span m='642255'>of</span> <span
  m='642696'>outcome</span> <span m='643138'>1.</span> </p><p><span
  m='643580'>More</span> <span m='644030'>concretely,</span> <span
  m='644480'>each</span> <span m='644930'>test</span> <span
  m='645380'>set</span> <span m='645830'>observation</span> <span
  m='646280'>is</span> <span m='646672'>classified</span> <span
  m='647065'>into</span> <span m='647458'>a</span> <span
  m='647850'>subset,</span> <span m='648243'>or</span> <span
  m='648636'>bucket,</span> <span m='649029'>of</span> <span
  m='649421'>our</span> <span m='649814'>CART</span> <span
  m='650207'>tree.</span> </p><p><span m='650600'>These</span> <span
  m='650925'>numbers</span> <span m='651251'>give</span> <span
  m='651577'>the</span> <span m='651902'>percentage</span> <span
  m='652228'>of</span> <span m='652554'>training</span> <span
  m='652880'>set</span> <span m='653358'>data</span> <span m='653837'>in</span>
  <span m='654316'>that</span> <span m='654795'>subset</span> <span
  m='655273'>with</span> <span m='655752'>outcome</span> <span
  m='656231'>0</span> <span m='656710'>and</span> <span m='656992'>the</span>
  <span m='657274'>percentage</span> <span m='657556'>of</span> <span
  m='657838'>data</span> <span m='658121'>in</span> <span m='658403'>the</span>
  <span m='658685'>training</span> <span m='658967'>set</span> <span
  m='659250'>in</span> <span m='659700'>that</span> <span
  m='660150'>subset</span> <span m='660600'>with</span> <span
  m='661050'>outcome</span> <span m='661500'>1.</span> </p><p><span
  m='661950'>We'll</span> <span m='662321'>use</span> <span
  m='662692'>the</span> <span m='663063'>second</span> <span
  m='663435'>column</span> <span m='663806'>as</span> <span
  m='664177'>our</span> <span m='664548'>probabilities</span> <span
  m='664920'>to</span> <span m='665474'>generate</span> <span
  m='666028'>an</span> <span m='666582'>ROC</span> <span
  m='667136'>curve.</span> </p><p><span m='667690'>So</span> <span
  m='668009'>just</span> <span m='668328'>like</span> <span m='668647'>we</span>
  <span m='668966'>did</span> <span m='669285'>last</span> <span
  m='669604'>week</span> <span m='669923'>for</span> <span
  m='670242'>logistic</span> <span m='670561'>regression,</span> <span
  m='670880'>we'll</span> <span m='671284'>start</span> <span
  m='671688'>by</span> <span m='672092'>using</span> <span m='672497'>the</span>
  <span m='672901'>prediction</span> <span m='673305'>function.</span>
  </p><p><span m='673710'>We'll</span> <span m='674188'>call</span> <span
  m='674667'>the</span> <span m='675146'>output</span> <span
  m='675625'>pred,</span> <span m='676104'>and</span> <span
  m='676583'>then</span> <span m='677062'>use</span> <span
  m='677541'>prediction,</span> <span m='678020'>where</span> <span
  m='678472'>the</span> <span m='678924'>first</span> <span
  m='679376'>argument</span> <span m='679828'>is</span> <span
  m='680280'>the</span> <span m='680732'>second</span> <span
  m='681184'>column</span> <span m='681636'>of</span> <span
  m='682088'>PredictROC,</span> <span m='682540'>which</span> <span
  m='682937'>we</span> <span m='683334'>can</span> <span
  m='683731'>access</span> <span m='684128'>with</span> <span
  m='684525'>square</span> <span m='684922'>brackets,</span> <span
  m='685320'>and</span> <span m='685675'>the</span> <span
  m='686031'>second</span> <span m='686386'>argument</span> <span
  m='686742'>is</span> <span m='687097'>the</span> <span m='687453'>true</span>
  <span m='687808'>outcome</span> <span m='688164'>values,</span> <span
  m='688520'>Test$Reverse.</span> </p><p><span m='690780'>Now</span> <span
  m='691382'>we</span> <span m='691984'>need</span> <span m='692586'>to</span>
  <span m='693188'>use</span> <span m='693791'>the</span> <span
  m='694393'>performance</span> <span m='694995'>function,</span> <span
  m='695597'>where</span> <span m='696200'>the</span> <span
  m='696487'>first</span> <span m='696775'>argument</span> <span
  m='697063'>is</span> <span m='697351'>the</span> <span
  m='697638'>outcome</span> <span m='697926'>of</span> <span
  m='698214'>the</span> <span m='698502'>prediction</span> <span
  m='698790'>function,</span> <span m='699217'>and</span> <span
  m='699644'>then</span> <span m='700071'>the</span> <span
  m='700498'>next</span> <span m='700925'>two</span> <span
  m='701352'>arguments</span> <span m='701780'>are</span> <span
  m='702195'>true</span> <span m='702611'>positive</span> <span
  m='703026'>rate</span> <span m='703442'>and</span> <span
  m='703857'>false</span> <span m='704273'>positive</span> <span
  m='704688'>rate,</span> <span m='705104'>what</span> <span
  m='705520'>we</span> <span m='705904'>want</span> <span m='706289'>on</span>
  <span m='706673'>the</span> <span m='707058'>x</span> <span
  m='707442'>and</span> <span m='707827'>y-axes</span> <span
  m='708211'>of</span> <span m='708596'>our</span> <span m='708980'>ROC</span>
  <span m='709365'>curve.</span> </p><p><span m='709750'>Now</span> <span
  m='710028'>we</span> <span m='710306'>can</span> <span m='710584'>just</span>
  <span m='710862'>plot</span> <span m='711140'>our</span> <span
  m='711419'>ROC</span> <span m='711697'>curve</span> <span m='711975'>by</span>
  <span m='712253'>typing</span> <span m='712531'>plot(perf).</span>
  </p><p><span m='716070'>If</span> <span m='716398'>you</span> <span
  m='716727'>switch</span> <span m='717056'>back</span> <span
  m='717385'>to</span> <span m='717713'>your</span> <span
  m='718042'>graphics</span> <span m='718371'>window,</span> <span
  m='718700'>you</span> <span m='719053'>should</span> <span
  m='719406'>see</span> <span m='719760'>the</span> <span m='720113'>ROC</span>
  <span m='720466'>curve</span> <span m='720820'>for</span> <span
  m='721173'>our</span> <span m='721526'>model.</span> </p><p><span
  m='721880'>In</span> <span m='722223'>the</span> <span m='722566'>next</span>
  <span m='722910'>quick</span> <span m='723253'>question,</span> <span
  m='723596'>we'll</span> <span m='723940'>ask</span> <span
  m='724352'>you</span> <span m='724765'>to</span> <span
  m='725178'>compute</span> <span m='725590'>the</span> <span
  m='726003'>test</span> <span m='726416'>set</span> <span m='726829'>AUC</span>
  <span m='727241'>of</span> <span m='727654'>this</span> <span
  m='728067'>model.</span> </p>
uid: 13d0a88f2d9e1869793a8c4b8af412c5
type: courses
layout: video
---
