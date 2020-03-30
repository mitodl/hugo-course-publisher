---
title: 'Video 6: Sensitivity Analysis'
uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
parent_uid: f20e206f20f79b3c410bc053183afdbb
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis/video-6-sensitivity-analysis-0
short_url: video-6-sensitivity-analysis-0
inline_embed_id: 72873272video6sensitivityanalysis9268083
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='5270'>Often,</span> <span m='5837'>in</span> <span
  m='6405'>linear</span> <span m='6973'>optimization</span> <span
  m='7541'>problems,</span> <span m='8109'>we've</span> <span
  m='8459'>estimated</span> <span m='8809'>the</span> <span m='9159'>data</span>
  <span m='9509'>we're</span> <span m='9859'>using</span> <span
  m='10209'>in</span> <span m='10559'>the</span> <span m='10909'>problem,</span>
  <span m='11260'>but</span> <span m='11736'>it's</span> <span
  m='12212'>subject</span> <span m='12688'>to</span> <span
  m='13164'>change.</span> </p><p><span m='13640'>Understanding</span> <span
  m='14045'>how</span> <span m='14451'>the</span> <span
  m='14856'>solution</span> <span m='15262'>changes</span> <span
  m='15667'>when</span> <span m='16073'>the</span> <span m='16478'>data</span>
  <span m='16884'>changes</span> <span m='17290'>is</span> <span
  m='18040'>called</span> <span m='18790'>sensitivity</span> <span
  m='19540'>analysis.</span> </p><p><span m='20290'>One</span> <span
  m='20611'>way</span> <span m='20932'>that</span> <span m='21254'>the</span>
  <span m='21575'>data</span> <span m='21897'>could</span> <span
  m='22218'>change</span> <span m='22540'>is</span> <span
  m='23090'>through</span> <span m='23640'>marketing</span> <span
  m='24190'>decisions.</span> </p><p><span m='24740'>Suppose</span> <span
  m='25252'>that</span> <span m='25764'>American</span> <span
  m='26276'>Airlines'</span> <span m='26788'>management</span> <span
  m='27300'>is</span> <span m='27557'>trying</span> <span m='27815'>to</span>
  <span m='28072'>figure</span> <span m='28330'>out</span> <span
  m='28587'>whether</span> <span m='28845'>or</span> <span m='29102'>not</span>
  <span m='29360'>it</span> <span m='29809'>would</span> <span
  m='30258'>be</span> <span m='30707'>beneficial</span> <span
  m='31156'>to</span> <span m='31605'>invest</span> <span m='32054'>in</span>
  <span m='32503'>marketing</span> <span m='32952'>its</span> <span
  m='33401'>fares.</span> </p><p><span m='33850'>They</span> <span
  m='34256'>forecast</span> <span m='34663'>that</span> <span
  m='35070'>the</span> <span m='35476'>marketing</span> <span
  m='35883'>effort</span> <span m='36290'>is</span> <span
  m='36645'>likely</span> <span m='37001'>to</span> <span
  m='37357'>attract</span> <span m='37713'>one</span> <span
  m='38069'>more</span> <span m='38425'>unit</span> <span m='38780'>of</span>
  <span m='39136'>demand,</span> <span m='39492'>of</span> <span
  m='39848'>each</span> <span m='40204'>type,</span> <span m='40560'>for</span>
  <span m='41155'>every</span> <span m='41750'>$200</span> <span
  m='42345'>spent.</span> </p><p><span m='42940'>So</span> <span
  m='43383'>for</span> <span m='43826'>the</span> <span
  m='44269'>discount</span> <span m='44712'>fare,</span> <span
  m='45155'>the</span> <span m='45598'>marketing</span> <span
  m='46041'>cost</span> <span m='46484'>per</span> <span m='46927'>unit</span>
  <span m='47370'>is</span> <span m='47841'>$200,</span> <span
  m='48312'>and</span> <span m='48784'>for</span> <span m='49255'>the</span>
  <span m='49727'>regular</span> <span m='50198'>fare,</span> <span
  m='50670'>the</span> <span m='51172'>marketing</span> <span
  m='51675'>cost</span> <span m='52177'>per</span> <span m='52680'>unit</span>
  <span m='53182'>is</span> <span m='53685'>also</span> <span
  m='54187'>$200.</span> </p><p><span m='54690'>We</span> <span
  m='54974'>want</span> <span m='55258'>to</span> <span m='55543'>know</span>
  <span m='55827'>how</span> <span m='56112'>much</span> <span
  m='56396'>this</span> <span m='56681'>will</span> <span
  m='56965'>increase</span> <span m='57250'>our</span> <span
  m='57917'>marginal</span> <span m='58585'>revenue</span> <span
  m='59252'>for</span> <span m='59920'>each</span> <span m='60587'>type</span>
  <span m='61255'>of</span> <span m='61922'>fare.</span> </p><p><span
  m='62590'>This</span> <span m='62963'>graph</span> <span
  m='63336'>shows</span> <span m='63710'>our</span> <span
  m='64083'>current</span> <span m='64456'>feasible</span> <span
  m='64830'>space</span> <span m='65203'>and</span> <span
  m='65576'>optimal</span> <span m='65950'>solution.</span> </p><p><span
  m='67240'>What</span> <span m='67617'>would</span> <span
  m='67995'>happen</span> <span m='68372'>if</span> <span m='68750'>we</span>
  <span m='69127'>increased</span> <span m='69505'>the</span> <span
  m='69882'>marketing</span> <span m='70260'>for</span> <span
  m='70910'>discount</span> <span m='71560'>fares?</span> </p><p><span
  m='72210'>The</span> <span m='72617'>demand</span> <span m='73024'>for</span>
  <span m='73431'>discount</span> <span m='73838'>fares</span> <span
  m='74245'>would</span> <span m='74652'>increase.</span> </p><p><span
  m='75060'>But</span> <span m='75338'>since</span> <span m='75616'>we're</span>
  <span m='75894'>not</span> <span m='76172'>even</span> <span
  m='76450'>meeting</span> <span m='76729'>the</span> <span
  m='77007'>current</span> <span m='77285'>demand</span> <span
  m='77563'>for</span> <span m='77841'>discount</span> <span
  m='78120'>fares</span> <span m='78545'>with</span> <span m='78970'>the</span>
  <span m='79395'>optimal</span> <span m='79820'>solution,</span> <span
  m='80245'>this</span> <span m='80670'>doesn't</span> <span
  m='81200'>give</span> <span m='81730'>us</span> <span m='82260'>any</span>
  <span m='82790'>extra</span> <span m='83320'>revenue.</span> </p><p><span
  m='83850'>So</span> <span m='84318'>we</span> <span m='84787'>shouldn't</span>
  <span m='85256'>add</span> <span m='85725'>any</span> <span
  m='86194'>marketing</span> <span m='86663'>for</span> <span
  m='87132'>discount</span> <span m='87601'>fares.</span> </p><p><span
  m='88070'>Actually,</span> <span m='88665'>American</span> <span
  m='89261'>Airlines</span> <span m='89857'>could</span> <span
  m='90452'>decrease</span> <span m='91048'>their</span> <span
  m='91644'>budget</span> <span m='92240'>to</span> <span
  m='92597'>market</span> <span m='92954'>discount</span> <span
  m='93311'>fares,</span> <span m='93668'>and</span> <span m='94025'>even</span>
  <span m='94382'>if</span> <span m='94739'>the</span> <span
  m='95096'>demand</span> <span m='95453'>decreases,</span> <span
  m='95810'>it</span> <span m='96252'>wouldn't</span> <span
  m='96694'>change</span> <span m='97136'>our</span> <span
  m='97578'>revenue.</span> </p><p><span m='98020'>The</span> <span
  m='98306'>demand</span> <span m='98592'>could</span> <span m='98878'>go</span>
  <span m='99164'>all</span> <span m='99450'>the</span> <span
  m='99736'>way</span> <span m='100022'>down</span> <span m='100308'>to</span>
  <span m='100594'>66</span> <span m='100880'>without</span> <span
  m='101605'>affecting</span> <span m='102330'>our</span> <span
  m='103055'>decisions.</span> </p><p><span m='103780'>In</span> <span
  m='104280'>sensitivity</span> <span m='104780'>analysis</span> <span
  m='105280'>like</span> <span m='105780'>this,</span> <span
  m='106280'>we're</span> <span m='106723'>often</span> <span
  m='107166'>concerned</span> <span m='107609'>with</span> <span
  m='108052'>the</span> <span m='108495'>shadow</span> <span
  m='108938'>price</span> <span m='109381'>of</span> <span m='109824'>a</span>
  <span m='110267'>constraint.</span> </p><p><span m='110710'>For</span> <span
  m='111158'>a</span> <span m='111606'>discount</span> <span
  m='112054'>demand</span> <span m='112502'>constraint,</span> <span
  m='112950'>this</span> <span m='113395'>is</span> <span m='113840'>the</span>
  <span m='114285'>marginal</span> <span m='114730'>revenue</span> <span
  m='115175'>gained</span> <span m='115620'>by</span> <span
  m='116050'>increasing</span> <span m='116480'>the</span> <span
  m='116910'>demand</span> <span m='117340'>by</span> <span
  m='117770'>one</span> <span m='118200'>unit.</span> </p><p><span
  m='118630'>In</span> <span m='118961'>this</span> <span
  m='119292'>case,</span> <span m='119623'>the</span> <span
  m='119954'>shadow</span> <span m='120285'>price</span> <span
  m='120616'>is</span> <span m='120947'>0</span> <span m='121278'>for</span>
  <span m='121609'>demand</span> <span m='121940'>greater</span> <span
  m='122561'>than</span> <span m='123183'>or</span> <span
  m='123805'>equal</span> <span m='124426'>to</span> <span m='125048'>66.</span>
  </p><p><span m='125670'>Now,</span> <span m='126084'>let's</span> <span
  m='126498'>look</span> <span m='126913'>at</span> <span m='127327'>what</span>
  <span m='127742'>happens</span> <span m='128156'>when</span> <span
  m='128571'>we</span> <span m='128985'>market</span> <span
  m='129400'>regular</span> <span m='129814'>fares.</span> </p><p><span
  m='130229'>If</span> <span m='130590'>we</span> <span
  m='130951'>increase</span> <span m='131313'>the</span> <span
  m='131674'>demand</span> <span m='132035'>for</span> <span
  m='132397'>regular</span> <span m='132758'>fares,</span> <span
  m='133120'>our</span> <span m='134086'>revenue</span> <span
  m='135053'>increases.</span> </p><p><span m='136020'>If</span> <span
  m='136398'>we</span> <span m='136777'>increase</span> <span
  m='137156'>by</span> <span m='137535'>25</span> <span m='137913'>units</span>
  <span m='138292'>of</span> <span m='138671'>demand,</span> <span
  m='139050'>our</span> <span m='140116'>revenue</span> <span
  m='141182'>increases</span> <span m='142248'>to</span> <span
  m='143314'>$86,883.</span> </p><p><span m='144380'>If</span> <span
  m='144774'>we</span> <span m='145168'>increase</span> <span
  m='145563'>by</span> <span m='145957'>another</span> <span
  m='146352'>25</span> <span m='146746'>units</span> <span m='147141'>of</span>
  <span m='147535'>demand,</span> <span m='147930'>our</span> <span
  m='149032'>revenue</span> <span m='150134'>increases</span> <span
  m='151236'>to</span> <span m='152338'>$96,358.</span> </p><p><span
  m='153440'>So</span> <span m='153841'>what's</span> <span
  m='154242'>the</span> <span m='154643'>shadow</span> <span
  m='155045'>price</span> <span m='155446'>in</span> <span
  m='155847'>this</span> <span m='156248'>case?</span> </p><p><span
  m='156650'>Remember</span> <span m='156991'>that</span> <span
  m='157333'>the</span> <span m='157675'>shadow</span> <span
  m='158016'>price</span> <span m='158358'>is</span> <span m='158700'>the</span>
  <span m='159127'>marginal</span> <span m='159555'>revenue</span> <span
  m='159983'>for</span> <span m='160411'>a</span> <span m='160838'>unit</span>
  <span m='161266'>increase</span> <span m='161694'>in</span> <span
  m='162122'>demand,</span> <span m='162550'>in</span> <span
  m='163031'>this</span> <span m='163513'>case,</span> <span
  m='163995'>of</span> <span m='164476'>regular</span> <span
  m='164958'>seats.</span> </p><p><span m='165440'>From</span> <span
  m='166061'>100</span> <span m='166682'>to</span> <span m='167304'>125,</span>
  <span m='167925'>the</span> <span m='168547'>revenue</span> <span
  m='169168'>increased</span> <span m='169790'>by</span> <span
  m='171311'>$86,883</span> <span m='172832'>minus</span> <span
  m='174353'>$77,408,</span> <span m='175874'>which</span> <span
  m='177395'>is</span> <span m='178916'>equal</span> <span m='180437'>to</span>
  <span m='181958'>$9,475.</span> </p><p><span m='183480'>Since</span> <span
  m='183857'>this</span> <span m='184234'>was</span> <span m='184611'>an</span>
  <span m='184988'>increase</span> <span m='185365'>of</span> <span
  m='185742'>25</span> <span m='186119'>units</span> <span m='186496'>of</span>
  <span m='186873'>demand,</span> <span m='187250'>the</span> <span
  m='188048'>shadow</span> <span m='188846'>price</span> <span
  m='189645'>is</span> <span m='190443'>9,475</span> <span
  m='191241'>divided</span> <span m='192040'>by</span> <span
  m='192940'>25,</span> <span m='193840'>which</span> <span
  m='194740'>equals</span> <span m='195640'>379.</span> </p><p><span
  m='196540'>We</span> <span m='196812'>can</span> <span
  m='197084'>calculate</span> <span m='197356'>that</span> <span
  m='197628'>this</span> <span m='197901'>is</span> <span m='198173'>the</span>
  <span m='198445'>same</span> <span m='198717'>shadow</span> <span
  m='198990'>price</span> <span m='199836'>from</span> <span
  m='200682'>125</span> <span m='201528'>to</span> <span m='202374'>150.</span>
  </p><p><span m='203220'>So</span> <span m='203566'>the</span> <span
  m='203912'>marginal</span> <span m='204258'>revenue</span> <span
  m='204605'>for</span> <span m='204951'>every</span> <span
  m='205297'>extra</span> <span m='205643'>unit</span> <span
  m='205990'>of</span> <span m='206843'>regular</span> <span
  m='207696'>demand</span> <span m='208550'>from</span> <span
  m='209403'>100</span> <span m='210256'>to</span> <span m='211110'>166</span>
  <span m='211963'>is</span> <span m='212816'>$379.</span> </p><p><span
  m='213670'>So</span> <span m='214020'>given</span> <span
  m='214370'>this</span> <span m='214720'>analysis,</span> <span
  m='215070'>how</span> <span m='215420'>can</span> <span m='215770'>we</span>
  <span m='216120'>help</span> <span m='216591'>the</span> <span
  m='217062'>marketing</span> <span m='217534'>department</span> <span
  m='218005'>make</span> <span m='218477'>their</span> <span
  m='218948'>decisions?</span> </p><p><span m='219420'>The</span> <span
  m='219886'>forecast</span> <span m='220353'>was</span> <span
  m='220820'>an</span> <span m='221286'>extra</span> <span
  m='221753'>unit</span> <span m='222220'>of</span> <span
  m='222686'>demand</span> <span m='223153'>for</span> <span
  m='223620'>every</span> <span m='224086'>$200</span> <span
  m='224553'>spent.</span> </p><p><span m='225020'>For</span> <span
  m='225322'>discount</span> <span m='225624'>fares,</span> <span
  m='225926'>this</span> <span m='226228'>isn't</span> <span
  m='226530'>worth</span> <span m='226832'>it,</span> <span
  m='227134'>since</span> <span m='227436'>the</span> <span
  m='227738'>shadow</span> <span m='228040'>price,</span> <span
  m='228618'>or</span> <span m='229196'>marginal</span> <span
  m='229775'>revenue,</span> <span m='230353'>is</span> <span
  m='230931'>0.</span> </p><p><span m='231510'>But</span> <span
  m='231824'>for</span> <span m='232138'>the</span> <span
  m='232453'>regular</span> <span m='232767'>fares,</span> <span
  m='233082'>this</span> <span m='233396'>is</span> <span
  m='233711'>worth</span> <span m='234025'>it,</span> <span
  m='234340'>since</span> <span m='234980'>the</span> <span
  m='235620'>shadow</span> <span m='236260'>price</span> <span
  m='236900'>is</span> <span m='237540'>$379.</span> </p><p><span
  m='238180'>So</span> <span m='238548'>the</span> <span
  m='238916'>marketing</span> <span m='239284'>department</span> <span
  m='239652'>should</span> <span m='240020'>invest</span> <span
  m='240534'>in</span> <span m='241048'>marketing</span> <span
  m='241562'>regular</span> <span m='242076'>fares</span> <span
  m='242590'>to</span> <span m='242935'>increase</span> <span
  m='243281'>the</span> <span m='243627'>demand</span> <span
  m='243972'>by</span> <span m='244318'>66</span> <span m='244664'>units.</span>
  </p><p><span m='247850'>Another</span> <span m='248358'>sensitivity</span>
  <span m='248867'>analysis</span> <span m='249375'>question</span> <span
  m='249884'>in</span> <span m='250392'>our</span> <span
  m='250901'>problem</span> <span m='251410'>is</span> <span
  m='251689'>whether</span> <span m='251968'>or</span> <span
  m='252247'>not</span> <span m='252526'>it</span> <span m='252805'>would</span>
  <span m='253085'>be</span> <span m='253364'>beneficial</span> <span
  m='253643'>to</span> <span m='253922'>allocate</span> <span
  m='254201'>a</span> <span m='254480'>bigger</span> <span
  m='254760'>aircraft</span> <span m='255332'>for</span> <span
  m='255905'>this</span> <span m='256477'>flight.</span> </p><p><span
  m='257050'>This</span> <span m='257423'>would</span> <span
  m='257796'>change</span> <span m='258170'>the</span> <span
  m='258543'>capacity</span> <span m='258916'>constraint,</span> <span
  m='259290'>which</span> <span m='259875'>currently</span> <span
  m='260461'>limits</span> <span m='261047'>the</span> <span
  m='261632'>capacity</span> <span m='262218'>to</span> <span
  m='262804'>166.</span> </p><p><span m='263390'>With</span> <span
  m='263801'>our</span> <span m='264213'>current</span> <span
  m='264625'>aircraft,</span> <span m='265036'>the</span> <span
  m='265448'>management</span> <span m='265860'>knows</span> <span
  m='266496'>that</span> <span m='267132'>the</span> <span
  m='267768'>cost</span> <span m='268405'>per</span> <span
  m='269041'>hour</span> <span m='269677'>is</span> <span
  m='270313'>$12,067.</span> </p><p><span m='270950'>So</span> <span
  m='271623'>the</span> <span m='272296'>total</span> <span
  m='272969'>cost</span> <span m='273642'>of</span> <span m='274315'>the</span>
  <span m='274988'>six-hour</span> <span m='275661'>flight</span> <span
  m='276334'>is</span> <span m='277007'>$72,402.</span> </p><p><span
  m='277680'>With</span> <span m='278098'>the</span> <span m='278517'>166</span>
  <span m='278936'>seats</span> <span m='279355'>filled,</span> <span
  m='279774'>we</span> <span m='280193'>get</span> <span m='280612'>a</span>
  <span m='281031'>revenue</span> <span m='281450'>of</span> <span
  m='282296'>$77,408</span> <span m='283143'>from</span> <span
  m='283990'>our</span> <span m='284836'>optimal</span> <span
  m='285683'>solution.</span> </p><p><span m='286530'>If</span> <span
  m='286980'>we</span> <span m='287431'>increase</span> <span
  m='287882'>the</span> <span m='288333'>capacity</span> <span
  m='288784'>of</span> <span m='289235'>the</span> <span
  m='289686'>aircraft</span> <span m='290137'>to</span> <span
  m='290588'>176</span> <span m='291039'>seats,</span> <span
  m='291490'>the</span> <span m='292281'>total</span> <span
  m='293072'>cost</span> <span m='293864'>would</span> <span
  m='294655'>increase</span> <span m='295447'>to</span> <span
  m='296238'>$76,590.</span> </p><p><span m='297030'>But</span> <span
  m='297440'>how</span> <span m='297850'>much</span> <span
  m='298260'>would</span> <span m='298670'>this</span> <span
  m='299080'>increase</span> <span m='299490'>our</span> <span
  m='299900'>revenue?</span> </p><p><span m='300310'>And</span> <span
  m='300743'>if</span> <span m='301177'>we</span> <span
  m='301610'>increase</span> <span m='302044'>the</span> <span
  m='302478'>capacity</span> <span m='302911'>of</span> <span
  m='303345'>the</span> <span m='303779'>aircraft</span> <span
  m='304212'>to</span> <span m='304646'>$218,</span> <span m='305080'>the</span>
  <span m='305815'>total</span> <span m='306551'>cost</span> <span
  m='307287'>would</span> <span m='308022'>increase</span> <span
  m='308758'>to</span> <span m='309494'>$87,342.</span> </p><p><span
  m='310230'>But</span> <span m='310661'>how</span> <span m='311092'>much</span>
  <span m='311523'>would</span> <span m='311955'>this</span> <span
  m='312386'>increase</span> <span m='312817'>our</span> <span
  m='313248'>revenue?</span> </p><p><span m='313680'>For</span> <span
  m='314020'>our</span> <span m='314360'>analysis,</span> <span
  m='314700'>let's</span> <span m='315040'>assume</span> <span
  m='315380'>that</span> <span m='315720'>the</span> <span
  m='316060'>demand</span> <span m='316400'>does</span> <span
  m='316740'>not</span> <span m='317080'>change.</span> </p><p><span
  m='318590'>If</span> <span m='319151'>we</span> <span
  m='319712'>increase</span> <span m='320274'>our</span> <span
  m='320835'>capacity</span> <span m='321397'>to</span> <span
  m='321958'>176,</span> <span m='322520'>the</span> <span
  m='322961'>capacity</span> <span m='323403'>constraint</span> <span
  m='323845'>will</span> <span m='324286'>move</span> <span
  m='324728'>right.</span> </p><p><span m='325170'>And</span> <span
  m='325511'>our</span> <span m='325852'>optimal</span> <span
  m='326193'>solution</span> <span m='326535'>will</span> <span
  m='326876'>move</span> <span m='327217'>right</span> <span
  m='327558'>too.</span> </p><p><span m='327900'>We</span> <span
  m='328702'>now</span> <span m='329505'>get</span> <span m='330308'>a</span>
  <span m='331111'>revenue</span> <span m='331914'>of</span> <span
  m='332717'>$79,788.</span> </p><p><span m='333520'>If</span> <span
  m='333960'>we</span> <span m='334400'>then</span> <span
  m='334840'>increase</span> <span m='335280'>the</span> <span
  m='335720'>capacity</span> <span m='336160'>to</span> <span
  m='336600'>218</span> <span m='337040'>seats,</span> <span
  m='337480'>the</span> <span m='337860'>capacity</span> <span
  m='338240'>constraint</span> <span m='338620'>will</span> <span
  m='339000'>move</span> <span m='339380'>right</span> <span
  m='339760'>again,</span> <span m='340140'>and</span> <span
  m='340961'>our</span> <span m='341782'>revenue</span> <span
  m='342604'>will</span> <span m='343425'>increase</span> <span
  m='344247'>to</span> <span m='345068'>$89,784.</span> </p><p><span
  m='345890'>So</span> <span m='346177'>let's</span> <span
  m='346464'>look</span> <span m='346751'>at</span> <span m='347038'>our</span>
  <span m='347325'>extra</span> <span m='347612'>profit</span> <span
  m='347900'>from</span> <span m='348273'>increasing</span> <span
  m='348646'>the</span> <span m='349019'>capacity</span> <span
  m='349392'>to</span> <span m='349765'>see</span> <span m='350138'>if</span>
  <span m='350511'>it's</span> <span m='350884'>worth</span> <span
  m='351257'>it.</span> </p><p><span m='351630'>With</span> <span
  m='352261'>our</span> <span m='352892'>current</span> <span
  m='353523'>costs</span> <span m='354154'>and</span> <span
  m='354785'>revenue,</span> <span m='355416'>the</span> <span
  m='356047'>profit</span> <span m='356678'>is</span> <span
  m='357309'>$5,006.</span> </p><p><span m='357940'>If</span> <span
  m='358410'>we</span> <span m='358880'>increase</span> <span
  m='359350'>the</span> <span m='359820'>capacity</span> <span
  m='360290'>to</span> <span m='360760'>176</span> <span
  m='361230'>seats,</span> <span m='361700'>our</span> <span
  m='362641'>profit</span> <span m='363583'>actually</span> <span
  m='364525'>decreases</span> <span m='365466'>to</span> <span
  m='366408'>$3,198.</span> </p><p><span m='367350'>And</span> <span
  m='367798'>if</span> <span m='368247'>we</span> <span
  m='368696'>increase</span> <span m='369145'>the</span> <span
  m='369594'>capacity</span> <span m='370043'>to</span> <span
  m='370492'>218</span> <span m='370941'>seats,</span> <span
  m='371390'>our</span> <span m='372131'>profit</span> <span
  m='372872'>decreases</span> <span m='373614'>even</span> <span
  m='374355'>more</span> <span m='375097'>to</span> <span
  m='375838'>$2,442.</span> </p><p><span m='376580'>So</span> <span
  m='376992'>even</span> <span m='377405'>though</span> <span
  m='377818'>our</span> <span m='378231'>revenue</span> <span
  m='378644'>is</span> <span m='379057'>increasing,</span> <span
  m='379470'>the</span> <span m='379905'>cost</span> <span
  m='380340'>increases</span> <span m='380775'>too.</span> </p><p><span
  m='381210'>So</span> <span m='381536'>it's</span> <span m='381862'>not</span>
  <span m='382188'>profitable</span> <span m='382515'>for</span> <span
  m='382841'>us</span> <span m='383167'>to</span> <span
  m='383493'>increase</span> <span m='383820'>the</span> <span
  m='384378'>capacity</span> <span m='384936'>of</span> <span
  m='385494'>our</span> <span m='386052'>aircraft.</span> </p><p><span
  m='386610'>You</span> <span m='386966'>can</span> <span m='387322'>also</span>
  <span m='387678'>see</span> <span m='388034'>this</span> <span
  m='388390'>by</span> <span m='388746'>using</span> <span
  m='389102'>LibreOffice,</span> <span m='389458'>which</span> <span
  m='389814'>we'll</span> <span m='390170'>ask</span> <span
  m='390527'>you</span> <span m='390885'>to</span> <span m='391243'>do</span>
  <span m='391601'>in</span> <span m='391958'>the</span> <span
  m='392316'>next</span> <span m='392674'>quick</span> <span
  m='393032'>question.</span> </p>
embedded_media:
  - uid: 2289ab5d6649a9e736fc925f6c678c28
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: aDdkt8rRWGs
  - uid: 954ff45d69776b48278cbd107042af5b
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: aDdkt8rRWGs
  - uid: 6d098c9fb99f2f8f4582430b81ae514e
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/aDdkt8rRWGs/default.jpg'
  - uid: e95c24ef0d6b82f398a0dab813f4d5f1
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: aDdkt8rRWGs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis/video-6-sensitivity-analysis-0/aDdkt8rRWGs.srt
  - uid: 78552b8bfe538f2496938d46c90b09f9
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: aDdkt8rRWGs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/airline-revenue-management-an-introduction-to-linear-optimization/video-6-sensitivity-analysis/video-6-sensitivity-analysis-0/aDdkt8rRWGs.pdf
  - uid: 6011bd91f37cc97e452c150cbbf8936c
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: e290bfb9af4447239b7786772ff02e5d
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: c692a7d2a05a292fbda8ccf401401767
    parent_uid: 3d54bcf2ef1dd7517d8a1496d9cbd0a0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_8.2.10_300k.mp4
type: courses
layout: video
---
