---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: nqqYjtK1zIk
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: Video-YouTube-Stream
    type: Video
    uid: b723fc21d67ad54c6ebb5de18d95e4c6
  - id: 3Play-3Play YouTube id-Stream
    media_location: nqqYjtK1zIk
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 08514c0e63ec0ae3b73fa0b92ad0ce71
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/nqqYjtK1zIk/default.jpg'
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3108d988c06e1c2f1cc1571efbd9bcd7
  - id: nqqYjtK1zIk.srt
    parent_uid: ec8877568a36275343d135184b2ec59e
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/visualizing-the-world-an-introduction-to-visualization/video-4-basic-scatterplots-using-ggplot/video-4-basic-scatterplots-using-ggplot-0/nqqYjtK1zIk.srt
    title: 3play caption file
    type: null
    uid: 6c9935c9067eae356bc335325dfe5366
  - id: nqqYjtK1zIk.pdf
    parent_uid: ec8877568a36275343d135184b2ec59e
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/visualizing-the-world-an-introduction-to-visualization/video-4-basic-scatterplots-using-ggplot/video-4-basic-scatterplots-using-ggplot-0/nqqYjtK1zIk.pdf
    title: 3play pdf file
    type: null
    uid: a26e69bb30e0216bf8b9446e5124f451
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ee9b91d4c2156fef36b8a407ee43235b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4d76bf76b439ba77c36e2c62c5dabc85
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_7.2.07_300k.mp4
    parent_uid: ec8877568a36275343d135184b2ec59e
    title: Video-Internet Archive-MP4
    type: Video
    uid: 070b468bf4da2603a747397a15dbd218
inline_embed_id: 78837450video4basicscatterplotsusingggplot12801726
parent_uid: bcd276c54387e04d4149dfe97b763b3f
related_resources_text: ''
short_url: video-4-basic-scatterplots-using-ggplot-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/visualizing-the-world-an-introduction-to-visualization/video-4-basic-scatterplots-using-ggplot/video-4-basic-scatterplots-using-ggplot-0
title: 'Video 4: Basic Scatterplots Using ggplot'
transcript: >-
  <p><span m='4500'>In</span> <span m='5045'>this</span> <span
  m='5590'>video,</span> <span m='6135'>we'll</span> <span
  m='6680'>create</span> <span m='7225'>a</span> <span m='7770'>basic</span>
  <span m='8315'>scatterplot</span> <span m='8860'>using</span> <span
  m='9405'>ggplot.</span> </p><p><span m='9950'>Let's</span> <span
  m='10324'>start</span> <span m='10698'>by</span> <span
  m='11072'>reading</span> <span m='11447'>in</span> <span m='11821'>our</span>
  <span m='12195'>data.</span> </p><p><span m='12570'>We'll</span> <span
  m='12811'>be</span> <span m='13052'>using</span> <span m='13293'>the</span>
  <span m='13535'>same</span> <span m='13776'>data</span> <span
  m='14017'>set</span> <span m='14258'>we</span> <span m='14500'>used</span>
  <span m='15274'>during</span> <span m='16048'>week</span> <span
  m='16822'>one,</span> <span m='17596'>WHO.csv.</span> </p><p><span
  m='18370'>So</span> <span m='18818'>let's</span> <span m='19266'>call</span>
  <span m='19714'>it</span> <span m='20162'>WHO</span> <span
  m='20610'>and</span> <span m='21058'>use</span> <span m='21506'>the</span>
  <span m='21954'>read.csv</span> <span m='22402'>function</span> <span
  m='22850'>to</span> <span m='23378'>read</span> <span m='23907'>in</span>
  <span m='24435'>the</span> <span m='24964'>data</span> <span
  m='25492'>file</span> <span m='26021'>WHO.csv.</span> </p><p><span
  m='26550'>Make</span> <span m='26852'>sure</span> <span
  m='27155'>you're</span> <span m='27458'>in</span> <span m='27761'>the</span>
  <span m='28064'>directory</span> <span m='28367'>containing</span> <span
  m='28670'>this</span> <span m='29416'>file</span> <span
  m='30163'>first.</span> </p><p><span m='30910'>Now,</span> <span
  m='31155'>let's</span> <span m='31400'>take</span> <span m='31646'>a</span>
  <span m='31891'>look</span> <span m='32137'>at</span> <span
  m='32382'>the</span> <span m='32628'>structure</span> <span
  m='32873'>of</span> <span m='33119'>the</span> <span m='33364'>data</span>
  <span m='33610'>using</span> <span m='34467'>the</span> <span
  m='35325'>str</span> <span m='36182'>function.</span> </p><p><span
  m='37040'>We</span> <span m='37547'>can</span> <span m='38054'>see</span>
  <span m='38561'>that</span> <span m='39068'>we</span> <span
  m='39575'>have</span> <span m='40082'>194</span> <span
  m='40589'>observations,</span> <span m='41096'>or</span> <span
  m='41603'>countries,</span> <span m='42110'>and</span> <span
  m='42562'>13</span> <span m='43015'>different</span> <span
  m='43468'>variables--</span> <span m='43920'>the</span> <span
  m='44373'>name</span> <span m='44826'>of</span> <span m='45279'>the</span>
  <span m='45731'>country,</span> <span m='46184'>the</span> <span
  m='46637'>region</span> <span m='47090'>the</span> <span
  m='47612'>country's</span> <span m='48135'>in,</span> <span
  m='48658'>the</span> <span m='49181'>population</span> <span
  m='49704'>in</span> <span m='50227'>thousands,</span> <span
  m='50750'>the</span> <span m='51225'>percentage</span> <span
  m='51700'>of</span> <span m='52175'>the</span> <span
  m='52650'>population</span> <span m='53125'>under</span> <span
  m='53600'>15</span> <span m='54075'>or</span> <span m='54550'>over</span>
  <span m='55025'>60,</span> <span m='55500'>the</span> <span
  m='55969'>fertility</span> <span m='56438'>rate</span> <span
  m='56907'>or</span> <span m='57376'>average</span> <span
  m='57845'>number</span> <span m='58314'>of</span> <span
  m='58783'>children</span> <span m='59252'>per</span> <span
  m='59721'>woman,</span> <span m='60190'>the</span> <span m='60718'>life</span>
  <span m='61247'>expectancy</span> <span m='61776'>in</span> <span
  m='62305'>years,</span> <span m='62834'>the</span> <span
  m='63363'>child</span> <span m='63892'>mortality</span> <span
  m='64421'>rate,</span> <span m='64950'>which</span> <span m='65249'>is</span>
  <span m='65548'>the</span> <span m='65847'>number</span> <span
  m='66146'>of</span> <span m='66446'>children</span> <span m='66745'>who</span>
  <span m='67044'>die</span> <span m='67343'>by</span> <span
  m='67643'>age</span> <span m='67942'>five</span> <span m='68241'>per</span>
  <span m='68540'>1,000</span> <span m='68840'>births,</span> <span
  m='69612'>the</span> <span m='70384'>number</span> <span m='71156'>of</span>
  <span m='71928'>cellular</span> <span m='72700'>subscribers</span> <span
  m='73472'>per</span> <span m='74244'>100</span> <span
  m='75016'>population,</span> <span m='75789'>the</span> <span
  m='76310'>literacy</span> <span m='76831'>rate</span> <span
  m='77353'>among</span> <span m='77874'>adults</span> <span
  m='78395'>older</span> <span m='78917'>than</span> <span m='79438'>15,</span>
  <span m='79960'>the</span> <span m='80516'>gross</span> <span
  m='81073'>national</span> <span m='81630'>income</span> <span
  m='82186'>per</span> <span m='82743'>capita,</span> <span m='83300'>the</span>
  <span m='83720'>percentage</span> <span m='84140'>of</span> <span
  m='84560'>male</span> <span m='84980'>children</span> <span
  m='85400'>enrolled</span> <span m='85820'>in</span> <span
  m='86240'>primary</span> <span m='86660'>school,</span> <span
  m='87080'>and</span> <span m='87421'>the</span> <span
  m='87762'>percentage</span> <span m='88104'>of</span> <span
  m='88445'>female</span> <span m='88787'>children</span> <span
  m='89128'>enrolled</span> <span m='89470'>in</span> <span
  m='90186'>primary</span> <span m='90903'>school.</span> </p><p><span
  m='91620'>In</span> <span m='91921'>week</span> <span m='92223'>one,</span>
  <span m='92525'>the</span> <span m='92827'>very</span> <span
  m='93129'>first</span> <span m='93430'>plot</span> <span m='93732'>we</span>
  <span m='94034'>made</span> <span m='94336'>in</span> <span m='94638'>R</span>
  <span m='94940'>was</span> <span m='95408'>a</span> <span
  m='95876'>scatterplot</span> <span m='96345'>of</span> <span
  m='96813'>fertility</span> <span m='97281'>rate</span> <span
  m='97750'>versus</span> <span m='98392'>gross</span> <span
  m='99035'>national</span> <span m='99677'>income.</span> </p><p><span
  m='100320'>Let's</span> <span m='100620'>make</span> <span
  m='100920'>this</span> <span m='101220'>plot</span> <span
  m='101520'>again,</span> <span m='101820'>just</span> <span
  m='102120'>like</span> <span m='102420'>we</span> <span m='102720'>did</span>
  <span m='103020'>in</span> <span m='103320'>week</span> <span
  m='103620'>one.</span> </p><p><span m='103920'>So</span> <span
  m='104274'>we'll</span> <span m='104628'>use</span> <span
  m='104982'>the</span> <span m='105336'>plot</span> <span
  m='105690'>function</span> <span m='106045'>and</span> <span
  m='106399'>give</span> <span m='106753'>as</span> <span m='107107'>the</span>
  <span m='107461'>first</span> <span m='107815'>variable</span> <span
  m='108170'>WHO$GNI,</span> <span m='108733'>and</span> <span
  m='109297'>then</span> <span m='109861'>give</span> <span m='110425'>as</span>
  <span m='110988'>the</span> <span m='111552'>second</span> <span
  m='112116'>variable,</span> <span m='112680'>WHO$FertilityRate.</span>
  </p><p><span m='118750'>This</span> <span m='119126'>plot</span> <span
  m='119503'>shows</span> <span m='119880'>us</span> <span
  m='120256'>that</span> <span m='120633'>a</span> <span
  m='121010'>higher</span> <span m='121386'>fertility</span> <span
  m='121763'>rate</span> <span m='122140'>is</span> <span
  m='122703'>correlated</span> <span m='123266'>with</span> <span
  m='123830'>a</span> <span m='124393'>lower</span> <span
  m='124956'>income.</span> </p><p><span m='125520'>Now,</span> <span
  m='126092'>let's</span> <span m='126664'>redo</span> <span
  m='127236'>this</span> <span m='127808'>scatterplot,</span> <span
  m='128380'>but</span> <span m='128926'>this</span> <span
  m='129472'>time</span> <span m='130018'>using</span> <span
  m='130564'>ggplot.</span> </p><p><span m='131110'>We'll</span> <span
  m='131397'>see</span> <span m='131684'>how</span> <span
  m='131971'>ggplot</span> <span m='132259'>can</span> <span
  m='132546'>be</span> <span m='132833'>used</span> <span m='133120'>to</span>
  <span m='133408'>make</span> <span m='133695'>more</span> <span
  m='133982'>visually</span> <span m='134270'>appealing</span> <span
  m='135145'>and</span> <span m='136020'>complex</span> <span
  m='136895'>scatterplots.</span> </p><p><span m='137770'>First,</span> <span
  m='138298'>we</span> <span m='138826'>need</span> <span m='139354'>to</span>
  <span m='139882'>install</span> <span m='140410'>and</span> <span
  m='140938'>load</span> <span m='141466'>the</span> <span
  m='141994'>ggplot2</span> <span m='142522'>package.</span> </p><p><span
  m='143050'>So</span> <span m='143525'>first</span> <span
  m='144000'>type</span> <span m='144475'>install.packages("ggplot2").</span>
  </p><p><span m='152570'>When</span> <span m='152895'>the</span> <span
  m='153221'>CRAN</span> <span m='153547'>mirror</span> <span
  m='153872'>window</span> <span m='154198'>pops</span> <span
  m='154524'>up,</span> <span m='154850'>make</span> <span
  m='155098'>sure</span> <span m='155347'>to</span> <span m='155596'>pick</span>
  <span m='155845'>a</span> <span m='156093'>location</span> <span
  m='156342'>near</span> <span m='156591'>you.</span> </p><p><span
  m='160500'>Then,</span> <span m='160785'>as</span> <span
  m='161071'>soon</span> <span m='161356'>as</span> <span m='161642'>the</span>
  <span m='161927'>package</span> <span m='162213'>is</span> <span
  m='162498'>done</span> <span m='162784'>installing</span> <span
  m='163070'>and</span> <span m='163382'>you're</span> <span
  m='163695'>back</span> <span m='164008'>at</span> <span m='164321'>the</span>
  <span m='164634'>blinking</span> <span m='164947'>cursor,</span> <span
  m='165260'>load</span> <span m='165532'>the</span> <span
  m='165805'>package</span> <span m='166078'>with</span> <span
  m='166351'>the</span> <span m='166624'>library</span> <span
  m='166897'>function.</span> </p><p><span m='171110'>Now,</span> <span
  m='171446'>remember</span> <span m='171782'>we</span> <span
  m='172118'>need</span> <span m='172455'>at</span> <span
  m='172791'>least</span> <span m='173127'>three</span> <span
  m='173463'>things</span> <span m='173800'>to</span> <span
  m='174288'>create</span> <span m='174776'>a</span> <span
  m='175264'>plot</span> <span m='175752'>using</span> <span
  m='176240'>ggplot--</span> <span m='176728'>data,</span> <span
  m='177216'>an</span> <span m='177704'>aesthetic</span> <span
  m='178192'>mapping</span> <span m='178680'>of</span> <span
  m='179051'>variables</span> <span m='179422'>in</span> <span
  m='179793'>the</span> <span m='180164'>data</span> <span
  m='180535'>frame</span> <span m='180906'>to</span> <span
  m='181277'>visual</span> <span m='181648'>output,</span> <span
  m='182020'>and</span> <span m='182642'>a</span> <span
  m='183265'>geometric</span> <span m='183887'>object.</span> </p><p><span
  m='184510'>So</span> <span m='184948'>first,</span> <span
  m='185386'>let's</span> <span m='185825'>create</span> <span
  m='186263'>the</span> <span m='186701'>ggplot</span> <span
  m='187140'>object</span> <span m='187577'>with</span> <span
  m='188015'>the</span> <span m='188452'>data</span> <span m='188890'>and</span>
  <span m='189327'>the</span> <span m='189765'>aesthetic</span> <span
  m='190202'>mapping.</span> </p><p><span m='190640'>We'll</span> <span
  m='191171'>save</span> <span m='191702'>it</span> <span m='192234'>to</span>
  <span m='192765'>the</span> <span m='193297'>variable</span> <span
  m='193828'>scatterplot,</span> <span m='194360'>and</span> <span
  m='194784'>then</span> <span m='195208'>use</span> <span m='195632'>the</span>
  <span m='196056'>ggplot</span> <span m='196480'>function,</span> <span
  m='196904'>where</span> <span m='197329'>the</span> <span
  m='197705'>first</span> <span m='198081'>argument</span> <span
  m='198458'>is</span> <span m='198834'>the</span> <span m='199211'>name</span>
  <span m='199587'>of</span> <span m='199964'>our</span> <span
  m='200340'>data</span> <span m='200717'>set,</span> <span
  m='201093'>WHO,</span> <span m='201470'>which</span> <span
  m='201882'>specifies</span> <span m='202294'>the</span> <span
  m='202706'>data</span> <span m='203118'>to</span> <span m='203530'>use,</span>
  <span m='203942'>and</span> <span m='204354'>the</span> <span
  m='204766'>second</span> <span m='205178'>argument</span> <span
  m='205590'>is</span> <span m='206222'>the</span> <span
  m='206854'>aesthetic</span> <span m='207486'>mapping,</span> <span
  m='208118'>aes.</span> </p><p><span m='208750'>In</span> <span
  m='209136'>parentheses,</span> <span m='209523'>we</span> <span
  m='209910'>have</span> <span m='210296'>to</span> <span
  m='210683'>decide</span> <span m='211070'>what</span> <span
  m='211369'>we</span> <span m='211668'>want</span> <span m='211967'>on</span>
  <span m='212266'>the</span> <span m='212566'>x-axis</span> <span
  m='212865'>and</span> <span m='213164'>what</span> <span m='213463'>we</span>
  <span m='213763'>want</span> <span m='214062'>on</span> <span
  m='214361'>the</span> <span m='214660'>y-axis.</span> </p><p><span
  m='214960'>We</span> <span m='215340'>want</span> <span m='215720'>the</span>
  <span m='216100'>x-axis</span> <span m='216480'>to</span> <span
  m='216860'>be</span> <span m='217240'>GNI,</span> <span m='217620'>and</span>
  <span m='218000'>we</span> <span m='218380'>want</span> <span
  m='219118'>the</span> <span m='219856'>y-axis</span> <span
  m='220595'>to</span> <span m='221333'>be</span> <span
  m='222071'>FertilityRate.</span> </p><p><span m='222810'>Go</span> <span
  m='223227'>ahead</span> <span m='223644'>and</span> <span
  m='224061'>close</span> <span m='224479'>both</span> <span
  m='224896'>sets</span> <span m='225313'>of</span> <span
  m='225730'>parentheses,</span> <span m='226148'>and</span> <span
  m='226565'>hit</span> <span m='226982'>Enter.</span> </p><p><span
  m='227400'>Now,</span> <span m='227780'>we</span> <span m='228160'>need</span>
  <span m='228540'>to</span> <span m='228920'>tell</span> <span
  m='229300'>ggplot</span> <span m='229680'>what</span> <span
  m='230060'>geometric</span> <span m='230440'>objects</span> <span
  m='230780'>to</span> <span m='231120'>put</span> <span m='231460'>in</span>
  <span m='231800'>the</span> <span m='232140'>plot.</span> </p><p><span
  m='232480'>We</span> <span m='232988'>could</span> <span m='233497'>use</span>
  <span m='234006'>bars,</span> <span m='234515'>lines,</span> <span
  m='235024'>points,</span> <span m='235533'>or</span> <span
  m='236042'>something</span> <span m='236551'>else.</span> </p><p><span
  m='237060'>This</span> <span m='237410'>is</span> <span m='237760'>a</span>
  <span m='238110'>big</span> <span m='238460'>difference</span> <span
  m='238810'>between</span> <span m='239160'>ggplot</span> <span
  m='239510'>and</span> <span m='239860'>regular</span> <span
  m='240210'>plotting</span> <span m='240560'>in</span> <span
  m='240907'>R.</span> <span m='241255'>You</span> <span m='241603'>can</span>
  <span m='241951'>build</span> <span m='242298'>different</span> <span
  m='242646'>types</span> <span m='242994'>of</span> <span
  m='243342'>graphs</span> <span m='243690'>by</span> <span
  m='244186'>using</span> <span m='244683'>the</span> <span
  m='245180'>same</span> <span m='245676'>ggplot</span> <span
  m='246173'>object.</span> </p><p><span m='246670'>There's</span> <span
  m='246908'>no</span> <span m='247147'>need</span> <span m='247386'>to</span>
  <span m='247625'>learn</span> <span m='247864'>one</span> <span
  m='248103'>function</span> <span m='248342'>for</span> <span
  m='248581'>bar</span> <span m='248820'>graphs,</span> <span
  m='249427'>a</span> <span m='250035'>completely</span> <span
  m='250643'>different</span> <span m='251251'>function</span> <span
  m='251858'>for</span> <span m='252466'>line</span> <span
  m='253074'>graphs,</span> <span m='253682'>etc.</span> </p><p><span
  m='254290'>So</span> <span m='254858'>first,</span> <span
  m='255427'>let's</span> <span m='255995'>just</span> <span
  m='256564'>create</span> <span m='257133'>a</span> <span
  m='257701'>straightforward</span> <span m='258270'>scatterplot.</span>
  </p><p><span m='258839'>So</span> <span m='259240'>the</span> <span
  m='259641'>geometry</span> <span m='260042'>we</span> <span
  m='260443'>want</span> <span m='260845'>to</span> <span m='261246'>add</span>
  <span m='261647'>is</span> <span m='262048'>points.</span> </p><p><span
  m='262450'>We</span> <span m='262781'>can</span> <span m='263113'>do</span>
  <span m='263445'>this</span> <span m='263776'>by</span> <span
  m='264108'>typing</span> <span m='264440'>the</span> <span
  m='264771'>name</span> <span m='265103'>of</span> <span m='265435'>our</span>
  <span m='265766'>ggplot</span> <span m='266098'>object,</span> <span
  m='266430'>scatterplot,</span> <span m='267038'>and</span> <span
  m='267647'>then</span> <span m='268255'>adding</span> <span
  m='268864'>the</span> <span m='269472'>function,</span> <span
  m='270081'>geom_point().</span> </p><p><span m='274750'>If</span> <span
  m='275009'>you</span> <span m='275268'>hit</span> <span
  m='275527'>Enter,</span> <span m='275786'>you</span> <span
  m='276046'>should</span> <span m='276305'>see</span> <span m='276564'>a</span>
  <span m='276823'>new</span> <span m='277083'>plot</span> <span
  m='277342'>in</span> <span m='277601'>the</span> <span
  m='277860'>Graphics</span> <span m='278120'>window</span> <span
  m='278490'>that</span> <span m='278860'>looks</span> <span
  m='279230'>similar</span> <span m='279600'>to</span> <span
  m='279970'>our</span> <span m='280340'>original</span> <span
  m='280710'>plot,</span> <span m='281080'>but</span> <span
  m='281442'>there</span> <span m='281805'>are</span> <span
  m='282167'>already</span> <span m='282530'>a</span> <span
  m='282892'>few</span> <span m='283255'>nice</span> <span
  m='283617'>improvements.</span> </p><p><span m='283980'>One</span> <span
  m='284233'>is</span> <span m='284486'>that</span> <span m='284739'>we</span>
  <span m='284992'>don't</span> <span m='285245'>have</span> <span
  m='285498'>the</span> <span m='285751'>data</span> <span m='286004'>set</span>
  <span m='286257'>name</span> <span m='286510'>with</span> <span
  m='286763'>a</span> <span m='287016'>dollar</span> <span
  m='287270'>sign</span> <span m='287657'>in</span> <span
  m='288044'>front</span> <span m='288431'>of</span> <span m='288818'>the</span>
  <span m='289205'>label</span> <span m='289592'>on</span> <span
  m='289979'>each</span> <span m='290366'>axis,</span> <span
  m='290753'>just</span> <span m='291140'>the</span> <span
  m='291770'>variable</span> <span m='292400'>name.</span> </p><p><span
  m='293030'>Another</span> <span m='293272'>is</span> <span
  m='293515'>that</span> <span m='293757'>we</span> <span m='294000'>have</span>
  <span m='294242'>these</span> <span m='294485'>nice</span> <span
  m='294727'>grid</span> <span m='294970'>lines</span> <span
  m='295351'>in</span> <span m='295732'>the</span> <span
  m='296114'>background</span> <span m='296495'>and</span> <span
  m='296877'>solid</span> <span m='297258'>points</span> <span
  m='297640'>that</span> <span m='298180'>pop</span> <span m='298720'>out</span>
  <span m='299260'>from</span> <span m='299800'>the</span> <span
  m='300340'>background.</span> </p><p><span m='300880'>We</span> <span
  m='301161'>could</span> <span m='301442'>have</span> <span
  m='301723'>made</span> <span m='302004'>a</span> <span m='302285'>line</span>
  <span m='302566'>graph</span> <span m='302847'>just</span> <span
  m='303128'>as</span> <span m='303409'>easily</span> <span m='303690'>by</span>
  <span m='304108'>changing</span> <span m='304526'>point</span> <span
  m='304944'>to</span> <span m='305362'>line.</span> </p><p><span
  m='305780'>So</span> <span m='306110'>in</span> <span m='306441'>your</span>
  <span m='306772'>R</span> <span m='307103'>console,</span> <span
  m='307434'>hit</span> <span m='307765'>the</span> <span m='308095'>up</span>
  <span m='308426'>arrow,</span> <span m='308757'>and</span> <span
  m='309088'>then</span> <span m='309419'>just</span> <span
  m='309750'>delete</span> <span m='310207'>"point"</span> <span
  m='310665'>and</span> <span m='311122'>type</span> <span
  m='311580'>"line"</span> <span m='312037'>and</span> <span
  m='312495'>hit</span> <span m='312952'>Enter.</span> </p><p><span
  m='313410'>Now,</span> <span m='313738'>you</span> <span m='314066'>can</span>
  <span m='314394'>see</span> <span m='314722'>a</span> <span
  m='315050'>line</span> <span m='315379'>graph</span> <span
  m='315707'>in</span> <span m='316035'>the</span> <span
  m='316363'>Graphics</span> <span m='316691'>window.</span> </p><p><span
  m='317020'>However,</span> <span m='317344'>a</span> <span
  m='317668'>line</span> <span m='317992'>doesn't</span> <span
  m='318317'>really</span> <span m='318641'>make</span> <span
  m='318965'>sense</span> <span m='319290'>for</span> <span
  m='319613'>this</span> <span m='319937'>particular</span> <span
  m='320261'>plot,</span> <span m='320585'>so</span> <span
  m='320908'>let's</span> <span m='321232'>switch</span> <span
  m='321556'>back</span> <span m='321880'>to</span> <span m='322156'>our</span>
  <span m='322433'>points,</span> <span m='322710'>just</span> <span
  m='322986'>by</span> <span m='323263'>hitting</span> <span
  m='323540'>the</span> <span m='323816'>up</span> <span m='324093'>arrow</span>
  <span m='324370'>twice</span> <span m='324646'>and</span> <span
  m='324923'>hitting</span> <span m='325200'>Enter.</span> </p><p><span
  m='327890'>In</span> <span m='328230'>addition</span> <span
  m='328570'>to</span> <span m='328910'>specifying</span> <span
  m='329250'>that</span> <span m='329590'>the</span> <span
  m='329930'>geometry</span> <span m='330270'>we</span> <span
  m='330610'>want</span> <span m='330950'>is</span> <span
  m='331290'>points,</span> <span m='331630'>we</span> <span
  m='332005'>can</span> <span m='332381'>add</span> <span
  m='332756'>other</span> <span m='333132'>options,</span> <span
  m='333507'>like</span> <span m='333883'>the</span> <span
  m='334258'>color,</span> <span m='334634'>shape,</span> <span
  m='335010'>and</span> <span m='335424'>size</span> <span m='335838'>of</span>
  <span m='336252'>the</span> <span m='336666'>points.</span> </p><p><span
  m='337080'>Let's</span> <span m='337518'>redo</span> <span
  m='337956'>our</span> <span m='338394'>plot</span> <span
  m='338832'>with</span> <span m='339270'>blue</span> <span
  m='339708'>triangles</span> <span m='340146'>instead</span> <span
  m='340584'>of</span> <span m='341022'>circles.</span> </p><p><span
  m='341460'>To</span> <span m='341730'>do</span> <span m='342000'>that,</span>
  <span m='342270'>go</span> <span m='342540'>ahead</span> <span
  m='342810'>and</span> <span m='343080'>hit</span> <span m='343350'>the</span>
  <span m='343620'>up</span> <span m='343890'>arrow</span> <span
  m='344160'>in</span> <span m='344430'>your</span> <span m='344700'>R</span>
  <span m='344970'>console,</span> <span m='345240'>and</span> <span
  m='345665'>then</span> <span m='346090'>in</span> <span m='346515'>the</span>
  <span m='346940'>empty</span> <span m='347365'>parentheses</span> <span
  m='347790'>for</span> <span m='348215'>geom_point,</span> <span
  m='348640'>we're</span> <span m='348996'>going</span> <span
  m='349353'>to</span> <span m='349710'>specify</span> <span
  m='350066'>some</span> <span m='350423'>properties</span> <span
  m='350780'>of</span> <span m='351136'>the</span> <span
  m='351493'>points.</span> </p><p><span m='351850'>We</span> <span
  m='352283'>want</span> <span m='352717'>the</span> <span
  m='353150'>color</span> <span m='353584'>to</span> <span m='354017'>be</span>
  <span m='354451'>equal</span> <span m='354885'>to</span> <span
  m='355318'>"blue",</span> <span m='355752'>the</span> <span
  m='356185'>size</span> <span m='356619'>to</span> <span
  m='357052'>equal</span> <span m='357486'>3--</span> <span
  m='357920'>we'll</span> <span m='358193'>make</span> <span
  m='358467'>the</span> <span m='358741'>points</span> <span m='359015'>a</span>
  <span m='359288'>little</span> <span m='359562'>bigger</span> <span
  m='359836'>--</span> <span m='360110'>and</span> <span m='360726'>the</span>
  <span m='361342'>shape</span> <span m='361958'>equals</span> <span
  m='362574'>17.</span> </p><p><span m='363190'>This</span> <span
  m='363636'>is</span> <span m='364082'>the</span> <span m='364528'>shape</span>
  <span m='364975'>number</span> <span m='365421'>corresponding</span> <span
  m='365867'>to</span> <span m='366313'>triangles.</span> </p><p><span
  m='366760'>If</span> <span m='367032'>you</span> <span m='367305'>hit</span>
  <span m='367578'>Enter,</span> <span m='367850'>you</span> <span
  m='368123'>should</span> <span m='368396'>now</span> <span
  m='368669'>see</span> <span m='368941'>in</span> <span m='369214'>your</span>
  <span m='369487'>plot</span> <span m='369760'>blue</span> <span
  m='370353'>triangles</span> <span m='370946'>instead</span> <span
  m='371540'>of</span> <span m='372133'>black</span> <span
  m='372726'>dots.</span> </p><p><span m='373320'>Let's</span> <span
  m='373770'>try</span> <span m='374220'>another</span> <span
  m='374670'>option.</span> </p><p><span m='375120'>Hit</span> <span
  m='375739'>the</span> <span m='376358'>up</span> <span m='376977'>arrow</span>
  <span m='377596'>again,</span> <span m='378215'>and</span> <span
  m='378834'>change</span> <span m='379453'>"blue"</span> <span
  m='380072'>to</span> <span m='380691'>"darkred",</span> <span
  m='381310'>and</span> <span m='381940'>change</span> <span
  m='382570'>shape</span> <span m='383200'>to</span> <span m='383830'>8.</span>
  </p><p><span m='384460'>Now,</span> <span m='384925'>you</span> <span
  m='385391'>should</span> <span m='385857'>see</span> <span
  m='386322'>dark</span> <span m='386788'>red</span> <span
  m='387254'>stars.</span> </p><p><span m='387720'>There</span> <span
  m='388022'>are</span> <span m='388325'>many</span> <span
  m='388628'>different</span> <span m='388931'>colors</span> <span
  m='389234'>and</span> <span m='389537'>shapes</span> <span
  m='389840'>that</span> <span m='390250'>you</span> <span m='390660'>can</span>
  <span m='391070'>specify.</span> </p><p><span m='391480'>We've</span> <span
  m='391964'>provided</span> <span m='392448'>some</span> <span
  m='392932'>information</span> <span m='393416'>in</span> <span
  m='393900'>the</span> <span m='394384'>text</span> <span
  m='394868'>below</span> <span m='395352'>this</span> <span
  m='395836'>video.</span> </p><p><span m='396320'>Now,</span> <span
  m='396583'>let's</span> <span m='396847'>add</span> <span m='397111'>a</span>
  <span m='397375'>title</span> <span m='397638'>to</span> <span
  m='397902'>the</span> <span m='398166'>plot.</span> </p><p><span
  m='398430'>You</span> <span m='398716'>can</span> <span m='399003'>do</span>
  <span m='399290'>that</span> <span m='399576'>by</span> <span
  m='399863'>hitting</span> <span m='400150'>the</span> <span
  m='400436'>up</span> <span m='400723'>arrow,</span> <span
  m='401010'>and</span> <span m='401483'>then</span> <span m='401956'>at</span>
  <span m='402429'>the</span> <span m='402902'>very</span> <span
  m='403375'>end</span> <span m='403848'>of</span> <span
  m='404321'>everything,</span> <span m='404794'>add</span> <span
  m='405267'>ggtitle,</span> <span m='405740'>and</span> <span
  m='406048'>then</span> <span m='406357'>in</span> <span
  m='406666'>parentheses</span> <span m='406975'>in</span> <span
  m='407283'>quotes,</span> <span m='407592'>the</span> <span
  m='407901'>title</span> <span m='408210'>you</span> <span
  m='408466'>want</span> <span m='408723'>to</span> <span m='408980'>give</span>
  <span m='409236'>your</span> <span m='409493'>plot.</span> </p><p><span
  m='409750'>In</span> <span m='410181'>our</span> <span m='410612'>case,</span>
  <span m='411043'>we'll</span> <span m='411475'>call</span> <span
  m='411906'>it</span> <span m='412337'>"Fertility</span> <span
  m='412768'>Rate</span> <span m='413200'>vs.</span> <span
  m='413960'>Gross</span> <span m='414720'>National</span> <span
  m='415480'>Income".</span> </p><p><span m='419610'>If</span> <span
  m='419792'>you</span> <span m='419975'>look</span> <span m='420157'>at</span>
  <span m='420340'>your</span> <span m='420522'>plot</span> <span
  m='420705'>again,</span> <span m='420887'>you</span> <span
  m='421070'>should</span> <span m='421448'>now</span> <span
  m='421826'>see</span> <span m='422205'>that</span> <span m='422583'>it</span>
  <span m='422961'>has</span> <span m='423340'>a</span> <span
  m='423718'>nice</span> <span m='424096'>title</span> <span
  m='424475'>at</span> <span m='424853'>the</span> <span m='425231'>top.</span>
  </p><p><span m='425610'>Now,</span> <span m='425928'>let's</span> <span
  m='426247'>save</span> <span m='426566'>our</span> <span
  m='426885'>plot</span> <span m='427203'>to</span> <span m='427522'>a</span>
  <span m='427841'>file.</span> </p><p><span m='428160'>We</span> <span
  m='428517'>can</span> <span m='428875'>do</span> <span m='429232'>this</span>
  <span m='429590'>by</span> <span m='429947'>first</span> <span
  m='430305'>saving</span> <span m='430662'>our</span> <span
  m='431020'>plot</span> <span m='431377'>to</span> <span m='431735'>a</span>
  <span m='432092'>variable.</span> </p><p><span m='432450'>So</span> <span
  m='432754'>in</span> <span m='433058'>your</span> <span m='433363'>R</span>
  <span m='433667'>console,</span> <span m='433972'>hit</span> <span
  m='434276'>the</span> <span m='434581'>up</span> <span
  m='434885'>arrow,</span> <span m='435190'>and</span> <span
  m='435595'>scroll</span> <span m='436000'>to</span> <span
  m='436405'>the</span> <span m='436810'>beginning</span> <span
  m='437215'>of</span> <span m='437620'>the</span> <span m='438025'>line.</span>
  </p><p><span m='438430'>Before</span> <span m='439137'>scatterplot,</span>
  <span m='439845'>type</span> <span m='440552'>fertilityGNIplot</span> <span
  m='441260'>=</span> <span m='442824'>and</span> <span m='444388'>then</span>
  <span m='445952'>everything</span> <span m='447516'>else.</span> </p><p><span
  m='449080'>This</span> <span m='449372'>will</span> <span
  m='449665'>save</span> <span m='449957'>our</span> <span
  m='450250'>scatterplot</span> <span m='450542'>to</span> <span
  m='450835'>the</span> <span m='451127'>variable,</span> <span
  m='451420'>fertilityGNIplot.</span> </p><p><span m='455190'>Now,</span> <span
  m='455493'>let's</span> <span m='455796'>create</span> <span
  m='456100'>a</span> <span m='456403'>file</span> <span m='456706'>we</span>
  <span m='457010'>want</span> <span m='457313'>to</span> <span
  m='457616'>save</span> <span m='457920'>our</span> <span
  m='458223'>plot</span> <span m='458526'>to.</span> </p><p><span
  m='458830'>We</span> <span m='459116'>can</span> <span m='459402'>do</span>
  <span m='459688'>that</span> <span m='459975'>with</span> <span
  m='460261'>the</span> <span m='460547'>PDF</span> <span
  m='460833'>function.</span> </p><p><span m='461120'>And</span> <span
  m='461406'>then</span> <span m='461693'>in</span> <span
  m='461980'>parentheses</span> <span m='462266'>and</span> <span
  m='462553'>quotes,</span> <span m='462840'>type</span> <span
  m='463126'>the</span> <span m='463413'>name</span> <span m='463700'>you</span>
  <span m='463930'>want</span> <span m='464160'>your</span> <span
  m='464390'>file</span> <span m='464620'>to</span> <span
  m='464850'>have.</span> </p><p><span m='465080'>We'll</span> <span
  m='465355'>call</span> <span m='465630'>it</span> <span
  m='465905'>MyPlot.pdf.</span> </p><p><span m='470159'>Now,</span> <span
  m='470404'>let's</span> <span m='470649'>just</span> <span
  m='470894'>print</span> <span m='471139'>our</span> <span
  m='471384'>plot</span> <span m='471629'>to</span> <span m='471874'>that</span>
  <span m='472119'>file</span> <span m='472364'>with</span> <span
  m='472609'>the</span> <span m='472854'>print</span> <span
  m='473100'>function</span> <span m='473507'>--</span> <span
  m='473915'>so</span> <span m='474322'>print(fertilityGNIplot).</span>
  </p><p><span m='479930'>And</span> <span m='480593'>lastly,</span> <span
  m='481256'>we</span> <span m='481920'>just</span> <span m='482583'>have</span>
  <span m='483246'>to</span> <span m='483910'>type</span> <span
  m='484573'>dev.off()</span> <span m='485236'>to</span> <span
  m='485900'>close</span> <span m='486563'>the</span> <span
  m='487226'>file.</span> </p><p><span m='487890'>Now,</span> <span
  m='488268'>if</span> <span m='488646'>you</span> <span m='489024'>look</span>
  <span m='489402'>at</span> <span m='489780'>the</span> <span
  m='490158'>folder</span> <span m='490536'>where</span> <span
  m='490914'>WHO.csv</span> <span m='491292'>is,</span> <span
  m='491670'>you</span> <span m='492192'>should</span> <span
  m='492715'>see</span> <span m='493238'>another</span> <span
  m='493761'>file</span> <span m='494284'>called</span> <span
  m='494807'>MyPlot.pdf,</span> <span m='495330'>containing</span> <span
  m='495834'>the</span> <span m='496338'>plot</span> <span m='496842'>we</span>
  <span m='497346'>made.</span> </p><p><span m='497850'>In</span> <span
  m='498127'>the</span> <span m='498405'>next</span> <span
  m='498683'>video,</span> <span m='498961'>we'll</span> <span
  m='499238'>see</span> <span m='499516'>how</span> <span m='499794'>to</span>
  <span m='500072'>create</span> <span m='500350'>more</span> <span
  m='501078'>advanced</span> <span m='501806'>scatterplots</span> <span
  m='502534'>using</span> <span m='503262'>ggplot.</span> </p>
uid: ec8877568a36275343d135184b2ec59e
type: courses
layout: video
---
