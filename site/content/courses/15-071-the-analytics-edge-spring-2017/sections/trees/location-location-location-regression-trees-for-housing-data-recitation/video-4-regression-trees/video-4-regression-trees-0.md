---
title: 'Video 4: Regression Trees'
uid: 2244ce66f5a3367720fa84bbc2133104
parent_uid: df4bdc23f257ab7073f970896028e009
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-4-regression-trees/video-4-regression-trees-0
short_url: video-4-regression-trees-0
inline_embed_id: 68575228video4regressiontrees41465132
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='5040'>Let's</span> <span m='5520'>see</span> <span
  m='6000'>how</span> <span m='6480'>regression</span> <span
  m='6960'>trees</span> <span m='7440'>do.</span> </p><p><span
  m='7920'>We'll</span> <span m='8508'>first</span> <span m='9096'>load</span>
  <span m='9685'>the</span> <span m='10273'>rpart</span> <span
  m='10861'>library</span> <span m='11450'>and</span> <span
  m='12178'>also</span> <span m='12907'>load</span> <span m='13635'>the</span>
  <span m='14364'>rpart</span> <span m='15092'>plotting</span> <span
  m='15821'>library.</span> </p><p><span m='16550'>We</span> <span
  m='16800'>build</span> <span m='17050'>a</span> <span
  m='17300'>regression</span> <span m='17550'>tree</span> <span
  m='17800'>in</span> <span m='18050'>the</span> <span m='18300'>same</span>
  <span m='18550'>way</span> <span m='18800'>we</span> <span
  m='19160'>would</span> <span m='19520'>build</span> <span m='19880'>a</span>
  <span m='20240'>classification</span> <span m='20600'>tree,</span> <span
  m='20960'>using</span> <span m='21320'>the</span> <span m='21680'>rpart</span>
  <span m='22040'>command.</span> </p><p><span m='25390'>We</span> <span
  m='25808'>predict</span> <span m='26226'>MEDV</span> <span m='26644'>as</span>
  <span m='27062'>a</span> <span m='27480'>function</span> <span
  m='27898'>of</span> <span m='28316'>latitude</span> <span m='28734'>and</span>
  <span m='29152'>longitude,</span> <span m='29570'>using</span> <span
  m='29832'>the</span> <span m='30095'>Boston</span> <span
  m='30357'>dataset.</span> </p><p><span m='33950'>If</span> <span
  m='34306'>we</span> <span m='34662'>now</span> <span m='35019'>plot</span>
  <span m='35375'>the</span> <span m='35731'>tree</span> <span
  m='36088'>using</span> <span m='36444'>the</span> <span m='36800'>prp</span>
  <span m='37157'>command,</span> <span m='37513'>which</span> <span
  m='37870'>is</span> <span m='38280'>to</span> <span m='38691'>find</span>
  <span m='39102'>an</span> <span m='39512'>rpart.plot,</span> <span
  m='39923'>we</span> <span m='40334'>can</span> <span m='40745'>see</span>
  <span m='41155'>it</span> <span m='41566'>makes</span> <span
  m='41977'>a</span> <span m='42387'>lot</span> <span m='42798'>of</span> <span
  m='43209'>splits</span> <span m='43620'>and</span> <span m='43898'>is</span>
  <span m='44177'>a</span> <span m='44456'>little</span> <span
  m='44735'>bit</span> <span m='45013'>hard</span> <span m='45292'>to</span>
  <span m='45571'>interpret.</span> </p><p><span m='45850'>But</span> <span
  m='46237'>the</span> <span m='46625'>important</span> <span
  m='47013'>thing</span> <span m='47401'>is</span> <span m='47788'>look</span>
  <span m='48176'>at</span> <span m='48564'>the</span> <span
  m='48952'>leaves.</span> </p><p><span m='49340'>In</span> <span
  m='49616'>a</span> <span m='49893'>classification</span> <span
  m='50170'>tree,</span> <span m='50446'>the</span> <span
  m='50723'>leaves</span> <span m='51000'>would</span> <span m='51613'>be</span>
  <span m='52226'>the</span> <span m='52840'>classification</span> <span
  m='53453'>we</span> <span m='54066'>assign</span> <span m='54680'>that</span>
  <span m='55233'>these</span> <span m='55786'>splits</span> <span
  m='56340'>would</span> <span m='56893'>apply</span> <span m='57446'>to.</span>
  </p><p><span m='58000'>But</span> <span m='58547'>in</span> <span
  m='59095'>regression</span> <span m='59643'>trees,</span> <span
  m='60191'>we</span> <span m='60738'>instead</span> <span
  m='61286'>predict</span> <span m='61834'>a</span> <span
  m='62382'>number.</span> </p><p><span m='62930'>That</span> <span
  m='63296'>number</span> <span m='63663'>is</span> <span m='64030'>the</span>
  <span m='64396'>average</span> <span m='64763'>of</span> <span
  m='65130'>the</span> <span m='65496'>median</span> <span
  m='65863'>house</span> <span m='66230'>prices</span> <span m='67038'>in</span>
  <span m='67846'>that</span> <span m='68655'>bucket</span> <span
  m='69463'>or</span> <span m='70271'>leaf.</span> </p><p><span
  m='71080'>So</span> <span m='71465'>let's</span> <span m='71850'>see</span>
  <span m='72235'>what</span> <span m='72620'>that</span> <span
  m='73005'>means</span> <span m='73390'>in</span> <span
  m='73775'>practice.</span> </p><p><span m='74160'>So</span> <span
  m='74697'>we'll</span> <span m='75235'>plot</span> <span
  m='75772'>again</span> <span m='76310'>the</span> <span
  m='76847'>latitude--</span> <span m='77385'>the</span> <span
  m='77922'>points.</span> </p><p><span m='82910'>And</span> <span
  m='83578'>we'll</span> <span m='84246'>again</span> <span
  m='84914'>plot</span> <span m='85582'>the</span> <span m='86250'>points</span>
  <span m='86918'>with</span> <span m='87586'>above</span> <span
  m='88254'>median</span> <span m='88922'>prices.</span> </p><p><span
  m='89590'>I</span> <span m='89916'>just</span> <span m='90242'>scrolled</span>
  <span m='90569'>up</span> <span m='90895'>from</span> <span
  m='91221'>my</span> <span m='91548'>command</span> <span
  m='91874'>history</span> <span m='92200'>to</span> <span m='92527'>do</span>
  <span m='92853'>that.</span> </p><p><span m='93180'>Now</span> <span
  m='93454'>we</span> <span m='93728'>want</span> <span m='94003'>to</span>
  <span m='94277'>predict</span> <span m='94552'>what</span> <span
  m='94826'>the</span> <span m='95101'>tree</span> <span m='95375'>thinks</span>
  <span m='95650'>is</span> <span m='95916'>above</span> <span
  m='96182'>median,</span> <span m='96448'>just</span> <span
  m='96714'>like</span> <span m='96980'>we</span> <span m='97246'>did</span>
  <span m='97512'>with</span> <span m='97778'>linear</span> <span
  m='98044'>regression.</span> </p><p><span m='98310'>So</span> <span
  m='98841'>we'll</span> <span m='99372'>say</span> <span m='99904'>the</span>
  <span m='100435'>fitted</span> <span m='100967'>values</span> <span
  m='101498'>we</span> <span m='102030'>can</span> <span m='102315'>get</span>
  <span m='102601'>from</span> <span m='102887'>using</span> <span
  m='103173'>the</span> <span m='103459'>predict</span> <span
  m='103745'>command</span> <span m='104030'>on</span> <span
  m='104316'>the</span> <span m='104602'>tree</span> <span m='104888'>we</span>
  <span m='105174'>just</span> <span m='105460'>built.</span> </p><p><span
  m='109070'>And</span> <span m='109402'>we</span> <span m='109735'>can</span>
  <span m='110068'>do</span> <span m='110401'>another</span> <span
  m='110734'>points</span> <span m='111067'>command,</span> <span
  m='111400'>just</span> <span m='111862'>like</span> <span m='112324'>we</span>
  <span m='112786'>did</span> <span m='113248'>before.</span> </p><p><span
  m='113710'>The</span> <span m='115175'>fitted</span> <span
  m='116640'>values</span> <span m='118106'>are</span> <span
  m='119571'>greater</span> <span m='121037'>than</span> <span
  m='122502'>21.2</span> <span m='123968'>The</span> <span
  m='125433'>color</span> <span m='126899'>is</span> <span
  m='128364'>blue.</span> </p><p><span m='129830'>And</span> <span
  m='130438'>the</span> <span m='131047'>character</span> <span
  m='131655'>is</span> <span m='132264'>a</span> <span m='132872'>dollar</span>
  <span m='133481'>sign.</span> </p><p><span m='137210'>Now</span> <span
  m='137462'>we</span> <span m='137714'>see</span> <span m='137966'>that</span>
  <span m='138218'>we've</span> <span m='138470'>done</span> <span
  m='138722'>a</span> <span m='138974'>much</span> <span
  m='139226'>better</span> <span m='139478'>job</span> <span
  m='139730'>than</span> <span m='140044'>linear</span> <span
  m='140358'>regression</span> <span m='140672'>was</span> <span
  m='140987'>able</span> <span m='141301'>to</span> <span m='141615'>do.</span>
  </p><p><span m='141930'>We've</span> <span m='142364'>correctly</span> <span
  m='142798'>left</span> <span m='143233'>the</span> <span m='143667'>low</span>
  <span m='144102'>value</span> <span m='144536'>area</span> <span
  m='144971'>in</span> <span m='145405'>Boston</span> <span
  m='145840'>and</span> <span m='146385'>below</span> <span
  m='146930'>out,</span> <span m='147475'>and</span> <span
  m='148020'>we've</span> <span m='148565'>correctly</span> <span
  m='149110'>managed</span> <span m='149348'>to</span> <span
  m='149587'>classify</span> <span m='149825'>some</span> <span
  m='150064'>of</span> <span m='150302'>those</span> <span
  m='150541'>points</span> <span m='150780'>in</span> <span
  m='151182'>the</span> <span m='151585'>bottom</span> <span
  m='151988'>right</span> <span m='152391'>and</span> <span
  m='152794'>top</span> <span m='153197'>right.</span> </p><p><span
  m='153600'>We're</span> <span m='154045'>still</span> <span
  m='154490'>making</span> <span m='154935'>mistakes,</span> <span
  m='155380'>but</span> <span m='155825'>we're</span> <span
  m='156270'>able</span> <span m='156681'>to</span> <span m='157093'>make</span>
  <span m='157505'>a</span> <span m='157916'>nonlinear</span> <span
  m='158328'>prediction</span> <span m='158740'>on</span> <span
  m='159455'>latitude</span> <span m='160170'>and</span> <span
  m='160885'>longitude.</span> </p><p><span m='161600'>So</span> <span
  m='162071'>that's</span> <span m='162542'>interesting,</span> <span
  m='163013'>but</span> <span m='163484'>the</span> <span m='163955'>tree</span>
  <span m='164426'>was</span> <span m='164897'>very</span> <span
  m='165368'>complicated.</span> </p><p><span m='165840'>So</span> <span
  m='166556'>maybe</span> <span m='167272'>it's</span> <span
  m='167988'>drastically</span> <span m='168704'>overfitting.</span>
  </p><p><span m='169420'>Can</span> <span m='169737'>we</span> <span
  m='170055'>get</span> <span m='170372'>most</span> <span m='170690'>of</span>
  <span m='171007'>this</span> <span m='171325'>effect</span> <span
  m='171642'>with</span> <span m='171960'>a</span> <span m='172277'>much</span>
  <span m='172595'>simpler</span> <span m='172912'>tree?</span> </p><p><span
  m='173230'>We</span> <span m='173585'>can.</span> </p><p><span
  m='173940'>We</span> <span m='174258'>would</span> <span
  m='174577'>just</span> <span m='174895'>change</span> <span
  m='175214'>the</span> <span m='175532'>minbucket</span> <span
  m='175851'>size.</span> </p><p><span m='176170'>So</span> <span
  m='176693'>let's</span> <span m='177217'>build</span> <span
  m='177740'>a</span> <span m='178264'>new</span> <span m='178788'>tree</span>
  <span m='179311'>using</span> <span m='179835'>the</span> <span
  m='180359'>rpart</span> <span m='180882'>command</span> <span
  m='181406'>again:</span> <span m='181930'>MEDV</span> <span
  m='182617'>as</span> <span m='183304'>a</span> <span
  m='183991'>function</span> <span m='184678'>of</span> <span
  m='185365'>LAT</span> <span m='186052'>and</span> <span m='186739'>LON,</span>
  <span m='187426'>the</span> <span m='188113'>data=boston.</span> </p><p><span
  m='188800'>But</span> <span m='189076'>this</span> <span
  m='189352'>time</span> <span m='189629'>we'll</span> <span
  m='189905'>say</span> <span m='190181'>the</span> <span
  m='190458'>minbucket</span> <span m='190734'>size</span> <span
  m='191010'>must</span> <span m='191287'>be</span> <span m='191563'>50.</span>
  </p><p><span m='194620'>We'll</span> <span m='195247'>use</span> <span
  m='195875'>the</span> <span m='196503'>other</span> <span
  m='197131'>way</span> <span m='197758'>of</span> <span
  m='198386'>plotting</span> <span m='199014'>trees,</span> <span
  m='199642'>plot,</span> <span m='200270'>and</span> <span
  m='200500'>we'll</span> <span m='200730'>add</span> <span
  m='200960'>text</span> <span m='201190'>to</span> <span m='201420'>the</span>
  <span m='201650'>text</span> <span m='201880'>command.</span> </p><p><span
  m='205820'>And</span> <span m='206056'>we</span> <span m='206292'>see</span>
  <span m='206528'>we</span> <span m='206765'>have</span> <span
  m='207001'>far</span> <span m='207237'>fewer</span> <span
  m='207473'>splits,</span> <span m='207710'>and</span> <span
  m='208176'>it's</span> <span m='208642'>far</span> <span
  m='209108'>more</span> <span m='209574'>interpretable.</span> </p><p><span
  m='210040'>The</span> <span m='210404'>first</span> <span
  m='210768'>split</span> <span m='211132'>says</span> <span
  m='211497'>if</span> <span m='211861'>the</span> <span
  m='212225'>longitude</span> <span m='212590'>is</span> <span
  m='212887'>greater</span> <span m='213185'>than</span> <span
  m='213482'>or</span> <span m='213780'>equal</span> <span m='214077'>to</span>
  <span m='214375'>negative</span> <span m='214672'>71.07--</span> <span
  m='214970'>so</span> <span m='215162'>if</span> <span m='215354'>you're</span>
  <span m='215546'>on</span> <span m='215738'>the</span> <span
  m='215930'>right</span> <span m='216122'>side</span> <span
  m='216314'>of</span> <span m='216506'>the</span> <span
  m='216698'>picture.</span> </p><p><span m='219510'>So</span> <span
  m='219732'>the</span> <span m='219954'>left-hand</span> <span
  m='220176'>branch</span> <span m='220398'>is</span> <span m='220621'>on</span>
  <span m='220843'>the</span> <span m='221065'>left-hand</span> <span
  m='221287'>side</span> <span m='221510'>of</span> <span m='221751'>the</span>
  <span m='221993'>picture</span> <span m='222235'>and</span> <span
  m='222476'>the</span> <span m='222718'>right-hand--</span> <span
  m='222960'>So</span> <span m='223224'>the</span> <span
  m='223488'>left-hand</span> <span m='223752'>side</span> <span
  m='224017'>of</span> <span m='224281'>the</span> <span m='224545'>tree</span>
  <span m='224810'>corresponds</span> <span m='225218'>to</span> <span
  m='225627'>the</span> <span m='226035'>right-hand</span> <span
  m='226444'>side</span> <span m='226853'>of</span> <span m='227261'>the</span>
  <span m='227670'>map.</span> </p><p><span m='228079'>And</span> <span
  m='228297'>the</span> <span m='228516'>right</span> <span
  m='228735'>side</span> <span m='228954'>of</span> <span m='229172'>the</span>
  <span m='229391'>tree</span> <span m='229610'>corresponds</span> <span
  m='229829'>to</span> <span m='230106'>the</span> <span m='230383'>left</span>
  <span m='230660'>side</span> <span m='230938'>of</span> <span
  m='231215'>the</span> <span m='231492'>map.</span> </p><p><span
  m='231770'>That's</span> <span m='232137'>a</span> <span
  m='232504'>little</span> <span m='232871'>bit</span> <span
  m='233238'>of</span> <span m='233605'>a</span> <span
  m='233972'>mouthful.</span> </p><p><span m='234340'>Let's</span> <span
  m='234615'>see</span> <span m='234890'>what</span> <span m='235165'>it</span>
  <span m='235440'>means</span> <span m='235715'>visually.</span> </p><p><span
  m='235990'>So</span> <span m='236822'>we'll</span> <span
  m='237655'>remember</span> <span m='238488'>these</span> <span
  m='239321'>values,</span> <span m='240154'>and</span> <span
  m='240987'>we'll</span> <span m='241820'>plot</span> <span
  m='242760'>the</span> <span m='243700'>longitude</span> <span
  m='244640'>and</span> <span m='245580'>latitude</span> <span
  m='246520'>again.</span> </p><p><span m='247460'>So</span> <span
  m='247722'>here's</span> <span m='247985'>our</span> <span
  m='248247'>map.</span> </p><p><span m='248510'>OK.</span> </p><p><span
  m='249120'>So</span> <span m='249628'>the</span> <span m='250137'>first</span>
  <span m='250645'>split</span> <span m='251154'>was</span> <span
  m='251662'>on</span> <span m='252171'>longitude,</span> <span
  m='252680'>and</span> <span m='253344'>it</span> <span m='254008'>was</span>
  <span m='254672'>negative</span> <span m='255336'>71.07.</span> </p><p><span
  m='256000'>So</span> <span m='256510'>there's</span> <span m='257020'>a</span>
  <span m='257530'>very</span> <span m='258040'>handy</span> <span
  m='258550'>command,</span> <span m='259060'>"abline,"</span> <span
  m='259570'>which</span> <span m='260082'>can</span> <span
  m='260595'>put</span> <span m='261107'>horizontal</span> <span
  m='261620'>or</span> <span m='262132'>vertical</span> <span
  m='262645'>lines</span> <span m='263157'>easily.</span> </p><p><span
  m='263670'>So</span> <span m='264010'>we're</span> <span
  m='264350'>going</span> <span m='264690'>to</span> <span m='265030'>put</span>
  <span m='265370'>a</span> <span m='265710'>vertical</span> <span
  m='266050'>line,</span> <span m='266390'>so</span> <span m='266730'>v,</span>
  <span m='267070'>and</span> <span m='267625'>we</span> <span
  m='268181'>wanted</span> <span m='268736'>to</span> <span
  m='269292'>plot</span> <span m='269847'>it</span> <span m='270403'>at</span>
  <span m='270958'>negative</span> <span m='271514'>71.07.</span> </p><p><span
  m='272070'>OK.</span> </p><p><span m='272850'>So</span> <span
  m='273088'>that's</span> <span m='273327'>that</span> <span
  m='273566'>first</span> <span m='273805'>split</span> <span
  m='274043'>from</span> <span m='274282'>the</span> <span
  m='274521'>tree.</span> </p><p><span m='274760'>It</span> <span
  m='274999'>corresponds</span> <span m='275239'>to</span> <span
  m='275479'>being</span> <span m='275719'>on</span> <span
  m='275959'>either</span> <span m='276199'>the</span> <span
  m='276439'>left</span> <span m='276679'>or</span> <span
  m='276919'>right-hand</span> <span m='277159'>side</span> <span
  m='278096'>of</span> <span m='279034'>this</span> <span
  m='279971'>tree.</span> </p><p><span m='280909'>We'll</span> <span
  m='281432'>plot</span> <span m='281956'>the--</span> <span
  m='282479'>what</span> <span m='283003'>we</span> <span m='283527'>want</span>
  <span m='284050'>to</span> <span m='284574'>do</span> <span
  m='285098'>is,</span> <span m='285621'>we'll</span> <span
  m='286145'>focus</span> <span m='286669'>on</span> <span m='287192'>one</span>
  <span m='287716'>area.</span> </p><p><span m='288240'>We'll</span> <span
  m='288840'>focus</span> <span m='289440'>on</span> <span m='290040'>the</span>
  <span m='290640'>lowest</span> <span m='291240'>price</span> <span
  m='291840'>prediction,</span> <span m='292440'>which</span> <span
  m='293040'>is</span> <span m='293263'>in</span> <span m='293486'>the</span>
  <span m='293710'>bottom</span> <span m='293933'>left</span> <span
  m='294156'>corner</span> <span m='294380'>of</span> <span
  m='294603'>the</span> <span m='294826'>tree,</span> <span
  m='295050'>right</span> <span m='295282'>down</span> <span
  m='295514'>the</span> <span m='295746'>bottom</span> <span
  m='295978'>left</span> <span m='296211'>after</span> <span
  m='296443'>all</span> <span m='296675'>those</span> <span
  m='296907'>splits.</span> </p><p><span m='297140'>So</span> <span
  m='297316'>that's</span> <span m='297492'>where</span> <span
  m='297668'>we</span> <span m='297845'>want</span> <span m='298021'>to</span>
  <span m='298197'>get</span> <span m='298373'>to.</span> </p><p><span
  m='298550'>So</span> <span m='299065'>let's</span> <span
  m='299580'>plot</span> <span m='300095'>again</span> <span
  m='300610'>the</span> <span m='301125'>points.</span> </p><p><span
  m='301640'>Plot</span> <span m='302080'>a</span> <span
  m='302520'>vertical</span> <span m='302960'>line.</span> </p><p><span
  m='303400'>The</span> <span m='303726'>next</span> <span
  m='304053'>split</span> <span m='304380'>down</span> <span
  m='304706'>towards</span> <span m='305033'>that</span> <span
  m='305360'>bottom</span> <span m='305686'>left</span> <span
  m='306013'>corner</span> <span m='306340'>was</span> <span m='307433'>a</span>
  <span m='308526'>horizontal</span> <span m='309620'>line</span> <span
  m='310713'>at</span> <span m='311806'>42.21.</span> </p><p><span
  m='312900'>So</span> <span m='313314'>I</span> <span m='313728'>put</span>
  <span m='314142'>that</span> <span m='314556'>in.</span> </p><p><span
  m='314970'>That's</span> <span m='315370'>interesting.</span> </p><p><span
  m='315770'>So</span> <span m='316048'>that</span> <span m='316327'>line</span>
  <span m='316606'>corresponds</span> <span m='316885'>pretty</span> <span
  m='317163'>much</span> <span m='317442'>to</span> <span
  m='317721'>where</span> <span m='318000'>the</span> <span
  m='318490'>Charles</span> <span m='318980'>River</span> <span
  m='319470'>was</span> <span m='319960'>from</span> <span
  m='320450'>before.</span> </p><p><span m='320940'>The</span> <span
  m='321144'>final</span> <span m='321349'>split</span> <span
  m='321553'>you</span> <span m='321758'>need</span> <span m='321963'>to</span>
  <span m='322167'>get</span> <span m='322372'>to</span> <span
  m='322576'>that</span> <span m='322781'>bottom</span> <span
  m='322986'>left</span> <span m='323190'>corner</span> <span
  m='323395'>I</span> <span m='323600'>was</span> <span
  m='324448'>pointing</span> <span m='325296'>out</span> <span
  m='326144'>is</span> <span m='326992'>42.17.</span> </p><p><span
  m='327840'>It</span> <span m='328524'>was</span> <span m='329208'>above</span>
  <span m='329892'>this</span> <span m='330576'>line.</span> </p><p><span
  m='331260'>And</span> <span m='331647'>now</span> <span
  m='332035'>that's</span> <span m='332422'>interesting.</span> </p><p><span
  m='332810'>If</span> <span m='333052'>we</span> <span m='333294'>look</span>
  <span m='333536'>at</span> <span m='333779'>the</span> <span
  m='334021'>right</span> <span m='334263'>side</span> <span
  m='334506'>of</span> <span m='334748'>the</span> <span
  m='334990'>middle</span> <span m='335233'>of</span> <span
  m='335475'>the</span> <span m='335717'>three</span> <span
  m='335960'>rectangles</span> <span m='336295'>on</span> <span
  m='336630'>the</span> <span m='336965'>right</span> <span
  m='337300'>side,</span> <span m='337635'>that</span> <span
  m='337970'>is</span> <span m='338198'>the</span> <span
  m='338426'>bucket</span> <span m='338655'>we</span> <span
  m='338883'>were</span> <span m='339111'>predicting.</span> </p><p><span
  m='339340'>And</span> <span m='339775'>it</span> <span
  m='340210'>corresponds</span> <span m='340645'>to</span> <span
  m='341080'>that</span> <span m='341515'>rectangle,</span> <span
  m='341950'>those</span> <span m='342385'>areas.</span> </p><p><span
  m='342820'>That's</span> <span m='343327'>the</span> <span
  m='343834'>South</span> <span m='344341'>Boston</span> <span
  m='344848'>low</span> <span m='345355'>price</span> <span
  m='345862'>area</span> <span m='346369'>we</span> <span m='346876'>saw</span>
  <span m='347383'>before.</span> </p><p><span m='347890'>So</span> <span
  m='348296'>maybe</span> <span m='348702'>we</span> <span m='349109'>can</span>
  <span m='349515'>make</span> <span m='349921'>that</span> <span
  m='350328'>more</span> <span m='350734'>clear</span> <span
  m='351140'>by</span> <span m='351547'>plotting,</span> <span
  m='351953'>now,</span> <span m='352360'>the</span> <span
  m='352745'>high</span> <span m='353130'>value</span> <span
  m='353515'>prices.</span> </p><p><span m='353900'>So</span> <span
  m='354308'>let's</span> <span m='354716'>go</span> <span
  m='355125'>back</span> <span m='355533'>up</span> <span m='355942'>to</span>
  <span m='356350'>where</span> <span m='356759'>we</span> <span
  m='357167'>plotted</span> <span m='357576'>all</span> <span
  m='357984'>the</span> <span m='358393'>red</span> <span m='358801'>dots</span>
  <span m='359210'>and</span> <span m='359706'>overlay</span> <span
  m='360203'>it.</span> </p><p><span m='360700'>So</span> <span
  m='360952'>this</span> <span m='361205'>makes</span> <span
  m='361458'>it</span> <span m='361711'>even</span> <span m='361964'>more</span>
  <span m='362217'>clear.</span> </p><p><span m='362470'>We've</span> <span
  m='362918'>correctly</span> <span m='363367'>shown</span> <span
  m='363816'>how</span> <span m='364265'>the</span> <span
  m='364714'>regression</span> <span m='365163'>tree</span> <span
  m='365612'>carves</span> <span m='366061'>out</span> <span
  m='366510'>that</span> <span m='366882'>rectangle</span> <span
  m='367255'>in</span> <span m='367628'>the</span> <span
  m='368001'>bottom</span> <span m='368374'>of</span> <span
  m='368747'>Boston</span> <span m='369120'>and</span> <span
  m='369662'>says</span> <span m='370205'>that</span> <span m='370747'>is</span>
  <span m='371290'>a</span> <span m='371832'>low</span> <span
  m='372375'>value</span> <span m='372917'>area.</span> </p><p><span
  m='373460'>So</span> <span m='373896'>that's</span> <span
  m='374332'>actually</span> <span m='374768'>very</span> <span
  m='375204'>interesting.</span> </p><p><span m='375640'>It's</span> <span
  m='375896'>shown</span> <span m='376152'>us</span> <span
  m='376408'>something</span> <span m='376665'>that</span> <span
  m='376921'>regression</span> <span m='377177'>trees</span> <span
  m='377433'>can</span> <span m='377690'>do</span> <span m='377910'>that</span>
  <span m='378130'>we</span> <span m='378350'>would</span> <span
  m='378570'>never</span> <span m='378790'>expect</span> <span
  m='379010'>linear</span> <span m='379230'>regression</span> <span
  m='379450'>to</span> <span m='379670'>be</span> <span m='379890'>able</span>
  <span m='380220'>to</span> <span m='380550'>do.</span> </p><p><span
  m='380880'>So</span> <span m='381089'>the</span> <span
  m='381298'>question</span> <span m='381507'>we're</span> <span
  m='381716'>going</span> <span m='381925'>to</span> <span
  m='382134'>answer</span> <span m='382343'>in</span> <span
  m='382552'>the</span> <span m='382761'>next</span> <span
  m='382970'>video</span> <span m='383180'>is</span> <span
  m='383522'>given</span> <span m='383864'>that</span> <span
  m='384206'>regression</span> <span m='384548'>trees</span> <span
  m='384890'>can</span> <span m='385232'>do</span> <span m='385574'>these</span>
  <span m='385916'>fancy</span> <span m='386258'>things</span> <span
  m='386600'>with</span> <span m='386836'>latitude</span> <span
  m='387073'>and</span> <span m='387310'>longitude,</span> <span
  m='387546'>is</span> <span m='387783'>it</span> <span
  m='388020'>actually</span> <span m='388207'>going</span> <span
  m='388394'>to</span> <span m='388581'>help</span> <span m='388768'>us</span>
  <span m='388955'>to</span> <span m='389142'>be</span> <span
  m='389329'>able</span> <span m='389516'>to</span> <span
  m='389703'>build</span> <span m='389890'>predictive</span> <span
  m='390356'>models,</span> <span m='390822'>predicting</span> <span
  m='391288'>house</span> <span m='391754'>prices?</span> </p><p><span
  m='392220'>Well,</span> <span m='392652'>we'll</span> <span
  m='393084'>have</span> <span m='393516'>to</span> <span m='393948'>see.</span>
  </p>
embedded_media:
  - uid: c1c7059b914c30e0c766a641893424f4
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: IZ0qGEZkTIw
  - uid: 1181e37d06f37f3b5626c0fc6f717ce3
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: IZ0qGEZkTIw
  - uid: 2959fb9d04b0251da1d2929c1c0f82d3
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/IZ0qGEZkTIw/default.jpg'
  - uid: a09d966080262df20c0f2679a1904c2c
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: IZ0qGEZkTIw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-4-regression-trees/video-4-regression-trees-0/IZ0qGEZkTIw.srt
  - uid: 0fb34b1a2c34e0e8543661df03536d9b
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: IZ0qGEZkTIw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-4-regression-trees/video-4-regression-trees-0/IZ0qGEZkTIw.pdf
  - uid: f3834e9e7dd76e96262af1589108495c
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0b3cbed977e9f07671ff819aedc39672
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 97530eeb54555ad41fa7de3784c60bb0
    parent_uid: 2244ce66f5a3367720fa84bbc2133104
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.4.05_300k.mp4
type: courses
layout: video
---
