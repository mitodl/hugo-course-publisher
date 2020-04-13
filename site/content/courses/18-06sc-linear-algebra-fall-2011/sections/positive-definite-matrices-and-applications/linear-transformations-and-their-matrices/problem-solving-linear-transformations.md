---
title: 'Problem Solving: Linear Transformations'
uid: c42458bf080365d87384374b7e7b3a38
parent_uid: 9b3392d99bebd11047c36d07bc404bbc
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/problem-solving-linear-transformations
short_url: problem-solving-linear-transformations
inline_embed_id: '35903247problemsolving:lineartransformations70655354'
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6460'>PROFESSOR: Hi,</span> <span m='6710'>everyone.</span> <span
  m='7370'>Today,</span> <span m='7750'>we're</span> <span m='7940'>going</span>
  <span m='8029'>to</span> <span m='8119'>talk</span> <span
  m='8320'>about</span> <span m='8580'>linear</span> <span
  m='8950'>transformations.</span> <span m='10460'>So,</span> <span
  m='10980'>we've</span> <span m='11170'>seen</span> <span
  m='11470'>linear</span> <span m='11760'>transformations</span> <span
  m='13280'>incognito</span> <span m='14500'>all</span> <span
  m='15280'>the</span> <span m='15490'>time</span> <span m='15810'>until</span>
  <span m='16120'>now.</span> <span m='17290'>We've</span> <span
  m='18410'>played</span> <span m='18800'>around</span> <span
  m='18990'>with</span> <span m='19140'>matrices.</span> <span
  m='19980'>Matrices</span> <span m='20460'>multiplying</span> <span
  m='21310'>vectors,</span> <span m='21710'>say,</span> <span
  m='21950'>in</span> <span m='22890'>R^n</span> <span m='23700'>and</span>
  <span m='24210'>producing</span> <span m='25210'>vectors</span> <span
  m='25680'>in</span> <span m='25840'>R^m.</span> </p><p><span
  m='28030'>So</span> <span m='28680'>really,</span> <span m='29280'>the</span>
  <span m='29800'>language</span> <span m='30220'>of</span> <span
  m='30800'>linear</span> <span m='31070'>transformations</span> <span
  m='32870'>only</span> <span m='33140'>provides</span> <span m='34080'>a</span>
  <span m='34270'>nicer</span> <span m='34650'>framework</span> <span
  m='35020'>when</span> <span m='35390'>we</span> <span m='35580'>want</span>
  <span m='35810'>to</span> <span m='36090'>analyze</span> <span
  m='37350'>linear</span> <span m='38470'>operations</span> <span
  m='39110'>on</span> <span m='39240'>more</span> <span
  m='39410'>abstract</span> <span m='39800'>vector</span> <span
  m='40070'>spaces,</span> <span m='40970'>like</span> <span
  m='41700'>the</span> <span m='41880'>one</span> <span m='42360'>we</span>
  <span m='42620'>have</span> <span m='43010'>in</span> <span
  m='43140'>this</span> <span m='43320'>problem</span> <span
  m='43600'>here.</span> <span m='44950'>We're</span> <span
  m='45260'>going</span> <span m='45360'>to</span> <span m='45440'>work</span>
  <span m='45900'>with</span> <span m='47560'>the</span> <span
  m='48250'>space</span> <span m='48660'>of</span> <span m='48870'>two</span>
  <span m='49030'>by</span> <span m='49210'>two</span> <span
  m='49570'>matrices.</span> <span m='51290'>And</span> <span
  m='51570'>we're</span> <span m='51760'>going</span> <span m='51900'>to</span>
  <span m='51940'>analyze</span> <span m='53030'>the</span> <span
  m='53200'>operation,</span> <span m='54730'>have</span> <span
  m='54940'>the</span> <span m='55040'>matrix</span> <span m='55440'>A,</span>
  <span m='56170'>and</span> <span m='56460'>we</span> <span
  m='56560'>produce</span> <span m='56930'>its</span> <span
  m='58020'>transpose.</span> <span m='59260'>OK.</span> <span
  m='60060'>So</span> <span m='60970'>please</span> <span m='61250'>take</span>
  <span m='61450'>a</span> <span m='61540'>few</span> <span
  m='62430'>minutes</span> <span m='62880'>to</span> <span m='63380'>try</span>
  <span m='63580'>the</span> <span m='64060'>problem</span> <span
  m='64500'>on</span> <span m='64636'>your own</span> <span m='65160'>and</span>
  <span m='65410'>come</span> <span m='65560'>back.</span> </p><p><span
  m='75260'>Hi,</span> <span m='75500'>again.</span> <span m='76650'>OK.</span>
  <span m='78080'>So</span> <span m='78270'>the</span> <span
  m='78440'>first</span> <span m='78620'>question</span> <span
  m='78970'>we</span> <span m='79050'>need</span> <span m='79200'>to</span>
  <span m='79330'>ask</span> <span m='79580'>ourselves</span> <span
  m='80500'>is,</span> <span m='81280'>indeed,</span> <span m='81600'>why is
  T</span> <span m='82650'>a</span> <span m='82690'>linear</span> <span
  m='83070'>operator?</span> <span m='84170'>So</span> <span
  m='86190'>what</span> <span m='87170'>are</span> <span m='87580'>the</span>
  <span m='87950'>abstract</span> <span m='88400'>properties</span> <span
  m='88890'>that</span> <span m='88960'>a</span> <span m='89090'>linear</span>
  <span m='89410'>operator</span> <span m='89850'>satisfies?</span> <span
  m='90800'>Well,</span> <span m='93370'>what</span> <span
  m='93610'>happens</span> <span m='94550'>when</span> <span m='95380'>T</span>
  <span m='95700'>acts</span> <span m='97040'>on</span> <span
  m='98290'>the</span> <span m='98440'>sum</span> <span m='98730'>of</span>
  <span m='98880'>two</span> <span m='99120'>matrices,</span> <span
  m='100170'>A</span> <span m='100330'>and</span> <span m='100500'>B?</span>
  </p><p><span m='101760'>So</span> <span m='101990'>it</span> <span
  m='102140'>produces</span> <span m='103610'>the</span> <span
  m='104020'>matrix</span> <span m='105560'>the</span> <span
  m='105640'>transpose</span> <span m='106370'>of</span> <span
  m='106650'>A</span> <span m='106800'>plus</span> <span m='107040'>B.</span>
  <span m='108180'>But</span> <span m='108380'>we</span> <span
  m='108500'>know</span> <span m='108780'>that this</span> <span
  m='109040'>is</span> <span m='110200'>A</span> <span
  m='110440'>transpose,</span> <span m='112140'>B</span> <span
  m='112320'>transpose.</span> <span m='113890'>And</span> <span
  m='114140'>so,</span> <span m='115580'>this</span> <span m='115730'>is</span>
  <span m='115850'>exactly</span> <span m='116940'>T(A)</span> <span
  m='118260'>plus</span> <span m='119070'>T(B).</span> <span
  m='121390'>So</span> <span m='123360'>the</span> <span
  m='124270'>transformation</span> <span m='124940'>that we're</span> <span
  m='125030'>analyzing</span> <span m='125770'>takes</span> <span
  m='126930'>the</span> <span m='127090'>sum</span> <span m='127840'>of</span>
  <span m='128650'>two</span> <span m='129320'>matrices</span> <span
  m='130639'>into</span> <span m='131420'>the</span> <span m='132390'>sum</span>
  <span m='132870'>of</span> <span m='134330'>their</span> <span
  m='134500'>transformations.</span> <span m='135620'>OK.</span> <span
  m='136900'>Similarly,</span> <span m='138520'>it</span> <span
  m='138770'>takes</span> <span m='139980'>a</span> <span
  m='140080'>multiple</span> <span m='140710'>of</span> <span
  m='140830'>a</span> <span m='140900'>transformation</span> <span
  m='144570'>into</span> <span m='146330'>the</span> <span
  m='146890'>multiple</span> <span m='149140'>of</span> <span
  m='149620'>the</span> <span m='149870'>transformations.</span> <span
  m='153650'>So</span> <span m='154790'>it</span> <span m='154930'>takes</span>
  <span m='155560'>the</span> <span m='155760'>matrix</span> <span
  m='156210'>c</span> <span m='156390'>times</span> <span m='156780'>A</span>
  <span m='157030'>to</span> <span m='157630'>c</span> <span
  m='157860'>times</span> <span m='158190'>A</span> <span
  m='158300'>transpose,</span> <span m='159280'>which</span> <span
  m='159680'>is</span> <span m='159980'>c</span> <span m='160460'>T</span> <span
  m='160845'>of</span> <span m='161230'>A.</span> </p><p><span
  m='163090'>OK.</span> <span m='163850'>So</span> <span m='164840'>it</span>
  <span m='165000'>is</span> <span m='165450'>a</span> <span
  m='165520'>linear</span> <span m='165860'>operator.</span> <span
  m='167760'>Now,</span> <span m='168560'>can</span> <span m='168720'>we</span>
  <span m='168820'>figure</span> <span m='169040'>out</span> <span
  m='169200'>what</span> <span m='170150'>its</span> <span
  m='170390'>inverse</span> <span m='170800'>is?</span> <span
  m='172190'>Well,</span> <span m='173200'>what</span> <span
  m='174180'>does</span> <span m='175120'>the</span> <span
  m='175230'>transpose</span> <span m='175930'>do?</span> <span
  m='177480'>It</span> <span m='177690'>takes</span> <span m='178340'>a</span>
  <span m='178510'>column</span> <span m='179870'>and</span> <span
  m='180410'>flips</span> <span m='180730'>it</span> <span
  m='181160'>into</span> <span m='182570'>a</span> <span m='182690'>row.</span>
  <span m='183700'>So</span> <span m='183850'>what</span> <span
  m='184000'>happens</span> <span m='184390'>if</span> <span
  m='184560'>we</span> <span m='184760'>apply</span> <span m='185090'>the</span>
  <span m='185220'>operation</span> <span m='185700'>once</span> <span
  m='185920'>again?</span> <span m='186810'>Well,</span> <span
  m='187430'>it's</span> <span m='187640'>going</span> <span
  m='187740'>to</span> <span m='187820'>take</span> <span m='188090'>the</span>
  <span m='188170'>row</span> <span m='189040'>and</span> <span
  m='189270'>turn</span> <span m='189510'>it</span> <span m='189860'>back</span>
  <span m='190460'>down</span> <span m='190790'>to</span> <span
  m='191220'>the</span> <span m='191350'>column.</span> </p><p><span
  m='191820'>So</span> <span m='192770'>applying</span> <span
  m='193170'>the</span> <span m='195090'>transformation</span> <span
  m='195980'>twice,</span> <span m='198140'>we</span> <span
  m='198910'>come</span> <span m='199130'>back</span> <span m='199390'>to</span>
  <span m='199490'>the</span> <span m='200400'>original</span> <span
  m='200830'>situation.</span> <span m='201810'>So</span> <span
  m='203440'>therefore,</span> <span m='204680'>T</span> <span
  m='204850'>squared</span> <span m='205730'>is</span> <span
  m='206470'>the</span> <span m='206710'>identity.</span> <span
  m='208870'>And</span> <span m='209100'>from</span> <span
  m='209620'>this,</span> <span m='209900'>we</span> <span
  m='210110'>infer</span> <span m='210560'>that</span> <span
  m='210660'>the</span> <span m='210860'>inverse</span> <span
  m='212240'>is</span> <span m='212540'>the</span> <span
  m='212640'>transformation</span> <span m='213530'>itself.</span> </p><p><span
  m='216720'>Now,</span> <span m='218030'>this</span> <span
  m='218250'>was</span> <span m='218310'>part</span> <span
  m='218810'>one.</span> <span m='220160'>Part</span> <span
  m='220760'>two,</span> <span m='224170'>we'll</span> <span
  m='224420'>compute</span> <span m='225170'>the</span> <span
  m='225340'>matrix</span> <span m='225780'>of</span> <span
  m='225900'>the</span> <span m='226000'>linear</span> <span
  m='226250'>transformation</span> <span m='227670'>in</span> <span
  m='228380'>the</span> <span m='228540'>following</span> <span
  m='229820'>two</span> <span m='230180'>bases.</span> <span
  m='231210'>So</span> <span m='231370'>the</span> <span m='231550'>first</span>
  <span m='232510'>basis</span> <span m='232815'>is,</span> <span
  m='234040'>in</span> <span m='234240'>fact--</span> <span m='234930'>it</span>
  <span m='235130'>is</span> <span m='235230'>the</span> <span
  m='235320'>standard</span> <span m='235740'>basis</span> <span
  m='236620'>for</span> <span m='237050'>the</span> <span
  m='237740'>space</span> <span m='238110'>of</span> <span m='238230'>two</span>
  <span m='238390'>by</span> <span m='238550'>two</span> <span
  m='238690'>matrices.</span> <span m='241260'>And</span> <span
  m='241420'>the</span> <span m='241510'>way</span> <span m='241760'>we</span>
  <span m='242000'>compute</span> <span m='244610'>the</span> <span
  m='244870'>matrix,</span> <span m='245910'>we</span> <span
  m='246370'>first</span> <span m='247180'>compute</span> <span
  m='248490'>what</span> <span m='248890'>T</span> <span m='249200'>does</span>
  <span m='250010'>to</span> <span m='250150'>each</span> <span
  m='250390'>of</span> <span m='250460'>the</span> <span m='250560'>basis</span>
  <span m='250970'>elements.</span> <span m='252690'>So</span> <span
  m='252930'>T</span> <span m='253330'>of</span> <span m='253780'>v_1.</span>
  <span m='255640'>Let's</span> <span m='256399'>go</span> <span
  m='256529'>back.</span> <span m='257160'>So</span> <span
  m='257750'>here.</span> </p><p><span m='261350'>So</span> <span
  m='262140'>T</span> <span m='262260'>takes</span> <span m='262460'>the</span>
  <span m='262790'>transpose</span> <span m='263350'>of</span> <span
  m='263450'>this</span> <span m='263630'>matrix.</span> <span
  m='265020'>And</span> <span m='265760'>we</span> <span m='265900'>see</span>
  <span m='266030'>that the</span> <span m='266250'>transpose</span> <span
  m='266800'>of</span> <span m='266910'>[1,</span> <span m='267090'>0;</span>
  <span m='267270'>0,</span> <span m='267510'>0]</span> <span
  m='267810'>is</span> <span m='268640'>[1,</span> <span m='268820'>0;</span>
  <span m='269060'>0,</span> <span m='269380'>0].</span> <span m='269620'>So
  it's a</span> <span m='269900'>symmetric</span> <span
  m='270370'>matrix.</span> <span m='271290'>So</span> <span m='271450'>T</span>
  <span m='271710'>of</span> <span m='271780'>v_1</span> <span
  m='273560'>is</span> <span m='273810'>v_1.</span> <span m='276000'>What</span>
  <span m='276380'>about</span> <span m='276640'>T</span> <span
  m='277110'>of</span> <span m='277550'>v_2?</span> <span m='278960'>Come</span>
  <span m='279160'>back</span> <span m='279360'>here.</span> <span
  m='281630'>So</span> <span m='281900'>this</span> <span m='282290'>1</span>
  <span m='283660'>comes</span> <span m='283930'>here.</span> <span
  m='284540'>0</span> <span m='284860'>comes</span> <span
  m='285140'>here.</span> <span m='285880'>And</span> <span m='286080'>so</span>
  <span m='286310'>we</span> <span m='286470'>actually</span> <span
  m='286810'>get</span> <span m='287470'>v_3.</span> <span m='289300'>So</span>
  <span m='289480'>T</span> <span m='290000'>of</span> <span
  m='290440'>v_2</span> <span m='290915'>is</span> <span m='291390'>v_3.</span>
  <span m='294740'>Similarly,</span> <span m='295950'>T</span> <span
  m='296205'>of</span> <span m='296460'>v_3</span> <span m='297155'>is</span>
  <span m='297410'>v_2.</span> </p><p><span m='300810'>And</span> <span
  m='301710'>finally,</span> <span m='302240'>T</span> <span
  m='302680'>of</span> <span m='303180'>v_4.</span> <span
  m='303890'>Well,</span> <span m='304730'>v_4</span> <span m='305700'>is</span>
  <span m='305940'>a symmetric</span> <span m='306650'>matrix</span> <span
  m='307070'>as</span> <span m='307220'>well.</span> <span m='308050'>So</span>
  <span m='309200'>the</span> <span m='309330'>transpose</span> <span
  m='309960'>doesn't</span> <span m='310250'>change</span> <span
  m='310750'>it.</span> <span m='312650'>OK.</span> <span m='317940'>Now,</span>
  <span m='320280'>we</span> <span m='321340'>encode</span> <span
  m='321720'>this</span> <span m='322690'>into</span> <span m='323330'>a</span>
  <span m='323410'>matrix</span> <span m='324200'>in</span> <span
  m='324270'>the</span> <span m='324350'>following</span> <span
  m='324770'>way.</span> <span m='332240'>Essentially,</span> <span
  m='334320'>the</span> <span m='334420'>first</span> <span
  m='334810'>column</span> <span m='335890'>will</span> <span
  m='339520'>tell</span> <span m='339760'>us</span> <span m='339990'>how</span>
  <span m='341220'>T</span> <span m='341500'>of</span> <span
  m='341870'>v_1</span> <span m='343460'>is</span> <span
  m='343630'>expressed</span> <span m='344150'>as</span> <span
  m='344360'>a</span> <span m='344400'>linear</span> <span
  m='344710'>combination</span> <span m='345380'>of</span> <span
  m='346260'>the</span> <span m='346420'>basis</span> <span
  m='346820'>elements.</span> </p><p><span m='349340'>Well,</span> <span
  m='349520'>in</span> <span m='349650'>this</span> <span
  m='349790'>case,</span> <span m='350080'>it's</span> <span
  m='350240'>just</span> <span m='350700'>v_1.</span> <span m='351010'>So</span>
  <span m='351210'>it's</span> <span m='351330'>going</span> <span
  m='351420'>to</span> <span m='351460'>be</span> <span m='352100'>1</span>
  <span m='352590'>times</span> <span m='353060'>v_1</span> <span
  m='353290'>plus</span> <span m='353500'>0*v_2</span> <span
  m='354760'>plus</span> <span m='354900'>0*v_3</span> <span
  m='355350'>plus</span> <span m='356080'>0*v_4.</span> <span
  m='358430'>T</span> <span m='358540'>of</span> <span m='358730'>v_2</span>
  <span m='359000'>is</span> <span m='359420'>v_3.</span> <span
  m='360270'>So</span> <span m='362030'>we</span> <span m='362190'>have</span>
  <span m='362700'>0,</span> <span m='364170'>0,</span> <span
  m='364760'>1,</span> <span m='366000'>0.</span> <span m='368795'>T</span>
  <span m='369270'>of</span> <span m='369360'>v_3</span> <span
  m='370930'>is</span> <span m='372460'>0*v_1,</span> <span
  m='374820'>1*v_2,</span> <span m='376030'>0*v_3,</span> <span
  m='377410'>0*v_4.</span> <span m='379300'>And</span> <span m='379640'>T</span>
  <span m='379820'>of</span> <span m='380020'>v4</span> <span
  m='381700'>is</span> <span m='382110'>0*v_1,</span> <span
  m='383310'>0*v_2,</span> <span m='384790'>0*v_3,</span> <span
  m='385540'>plus</span> <span m='386110'>1*v_4.</span> </p><p><span
  m='387260'>OK.</span> <span m='388420'>So</span> <span m='388750'>we've</span>
  <span m='390080'>written</span> <span m='390450'>down</span> <span
  m='390780'>the</span> <span m='391130'>matrix</span> <span
  m='391720'>of</span> <span m='392030'>the</span> <span
  m='392140'>linear</span> <span m='392400'>transformation</span> <span
  m='393220'>T</span> <span m='394010'>in</span> <span m='394340'>the</span>
  <span m='394440'>standard</span> <span m='394780'>basis.</span> <span
  m='395820'>And</span> <span m='397580'>you</span> <span m='397720'>can</span>
  <span m='397900'>check</span> <span m='399230'>that</span> <span
  m='399700'>this</span> <span m='399930'>is</span> <span
  m='400030'>exactly</span> <span m='400530'>what</span> <span
  m='400780'>we</span> <span m='400880'>want.</span> <span m='410960'>The</span>
  <span m='411040'>representation</span> <span m='411870'>of</span> <span
  m='412900'>some</span> <span m='413130'>matrix,</span> <span
  m='413630'>say,</span> <span m='413730'>[1,</span> <span m='414050'>2;</span>
  <span m='414720'>3,</span> <span m='415020'>4]</span> <span
  m='416030'>in</span> <span m='416360'>this</span> <span
  m='417630'>standard</span> <span m='417930'>basis</span> <span
  m='418370'>is,</span> <span m='418660'>it's</span> <span m='419020'>the</span>
  <span m='419150'>vector</span> <span m='420340'>[1,</span> <span
  m='421130'>2,</span> <span m='421860'>3,</span> <span m='422630'>4].</span>
  <span m='427560'>T takes</span> <span m='427780'>this</span> <span
  m='428580'>to</span> <span m='428830'>its</span> <span
  m='431590'>transpose,</span> <span m='432450'>[1,</span> <span
  m='433140'>3;</span> <span m='433830'>2,</span> <span m='434420'>4].</span>
  </p><p><span m='435690'>So</span> <span m='435960'>this</span> <span
  m='436760'>in</span> <span m='436920'>the</span> <span m='437020'>basis</span>
  <span m='438820'>is</span> <span m='439300'>represented</span> <span
  m='440000'>as</span> <span m='440540'>[1,</span> <span m='442270'>3,</span>
  <span m='442970'>2,</span> <span m='443590'>4].</span> <span
  m='444990'>Right?</span> <span m='446670'>And</span> <span
  m='446860'>it's</span> <span m='447000'>not</span> <span
  m='447170'>hard</span> <span m='447440'>to</span> <span m='447540'>see</span>
  <span m='447860'>that</span> <span m='451400'>when</span> <span
  m='451843'>M_T</span> <span m='453480'>multiplies</span> <span
  m='454880'>this</span> <span m='455190'>vector,</span> <span
  m='456610'>we</span> <span m='456810'>get</span> <span
  m='457300'>exactly</span> <span m='457640'>this</span> <span
  m='457810'>vector.</span> <span m='461550'>So</span> <span
  m='462550'>we'll</span> <span m='462840'>pause</span> <span
  m='463140'>for</span> <span m='463270'>a</span> <span m='463310'>bit,</span>
  <span m='463770'>so</span> <span m='464430'>that I</span> <span
  m='464830'>erase</span> <span m='465020'>the</span> <span
  m='465200'>board.</span> <span m='465810'>And</span> <span
  m='466550'>we're</span> <span m='466760'>going</span> <span
  m='466890'>to</span> <span m='466930'>return</span> <span
  m='467450'>with</span> <span m='468420'>the</span> <span
  m='468670'>representation</span> <span m='470040'>of</span> <span
  m='470170'>T</span> <span m='470820'>in</span> <span m='470980'>the</span>
  <span m='471070'>basis</span> <span m='472720'>w_1,</span> <span
  m='472890'>w_2,</span> <span m='473260'>w_3,</span> <span
  m='473570'>and</span> <span m='474031'>w_4.</span> </p><p><span
  m='477260'>OK.</span> <span m='477740'>So</span> <span m='478590'>let's</span>
  <span m='478910'>now</span> <span m='479355'>compute</span> <span
  m='479800'>the</span> <span m='479980'>matrix</span> <span m='481720'>T</span>
  <span m='482230'>in</span> <span m='482540'>the</span> <span
  m='482630'>basis</span> <span m='483690'>w_1,</span> <span
  m='484030'>w_2,</span> <span m='484350'>w_3,</span> <span
  m='485300'>and</span> <span m='485440'>w_4.</span> <span m='486650'>We</span>
  <span m='486860'>played</span> <span m='487420'>the</span> <span
  m='487490'>same</span> <span m='487780'>game.</span> <span
  m='488680'>We</span> <span m='489670'>look</span> <span m='489920'>at</span>
  <span m='490020'>how</span> <span m='491250'>T</span> <span
  m='491635'>acts</span> <span m='492020'>on</span> <span m='492220'>each</span>
  <span m='492400'>of</span> <span m='492490'>the</span> <span
  m='492570'>basis</span> <span m='493000'>vectors.</span> <span
  m='494460'>So</span> <span m='495570'>T</span> <span m='495850'>of</span>
  <span m='496180'>w_1--</span> <span m='497250'>well,</span> <span
  m='497750'>w_1</span> <span m='497920'>is</span> <span m='498070'>a
  symmetric</span> <span m='498510'>matrix.</span> <span m='499040'>So</span>
  <span m='500030'>T</span> <span m='500190'>of</span> <span m='500770'>w_1
  is</span> <span m='501100'>w_1.</span> <span m='503170'>Similarly,</span>
  <span m='503940'>with</span> <span m='504440'>w_2</span> <span
  m='505710'>and</span> <span m='505930'>w_3.</span> <span
  m='507380'>They're</span> <span m='507550'>all</span> <span
  m='507670'>symmetric.</span> </p><p><span m='509040'>What</span> <span
  m='509230'>about</span> <span m='509440'>w_4?</span> <span
  m='510730'>Well,</span> <span m='512860'>we</span> <span m='513059'>see</span>
  <span m='513309'>that</span> <span m='514460'>the</span> <span
  m='514610'>1</span> <span m='514850'>comes</span> <span m='515120'>down</span>
  <span m='515340'>here,</span> <span m='515929'>the</span> <span
  m='516030'>negative</span> <span m='516340'>one</span> <span
  m='516500'>comes</span> <span m='516760'>up</span> <span
  m='517010'>here,</span> <span m='517590'>and</span> <span m='518100'>in</span>
  <span m='518270'>the end,</span> <span m='518770'>we</span> <span
  m='519045'>just get</span> <span m='519320'>the</span> <span
  m='519500'>negative</span> <span m='519919'>of</span> <span
  m='520350'>w_4.</span> <span m='520789'>So,</span> <span m='521480'>let</span>
  <span m='521590'>me</span> <span m='521679'>just</span> <span
  m='522290'>write</span> <span m='522640'>this</span> <span
  m='523120'>out.</span> <span m='523820'>We</span> <span m='523940'>had</span>
  <span m='524520'>T</span> <span m='524710'>of</span> <span
  m='524800'>w_1</span> <span m='525270'>equal</span> <span m='525740'>to</span>
  <span m='526210'>w_1,</span> <span m='526940'>T</span> <span
  m='527220'>of</span> <span m='527650'>w_2</span> <span m='528570'>equal</span>
  <span m='529060'>to</span> <span m='529520'>w_2,</span> <span
  m='530580'>T</span> <span m='530840'>of</span> <span m='531370'>w_3</span>
  <span m='531770'>equal</span> <span m='532440'>to</span> <span
  m='532860'>w_3,</span> <span m='533670'>and</span> <span m='533950'>T</span>
  <span m='534330'>of</span> <span m='534730'>w_4,</span> <span
  m='536200'>was</span> <span m='537370'>negative</span> <span
  m='538460'>of</span> <span m='538880'>w_4.</span> </p><p><span
  m='540910'>So</span> <span m='542780'>therefore,</span> <span
  m='543330'>the</span> <span m='543490'>matrix</span> <span m='545270'>of
  the</span> <span m='545470'>linear</span> <span
  m='546330'>transformation</span> <span m='547860'>T,</span> <span
  m='548130'>in</span> <span m='548280'>this</span> <span
  m='548460'>basis--</span> <span m='548880'>I'm</span> <span
  m='549010'>going</span> <span m='549130'>to</span> <span
  m='549250'>call</span> <span m='549510'>the</span> <span
  m='549590'>matrix</span> <span m='550030'>M</span> <span
  m='550320'>prime</span> <span m='551460'>T--</span> <span
  m='555530'>has</span> <span m='555720'>a</span> <span m='555770'>fairly</span>
  <span m='556080'>simple</span> <span m='556380'>expression.</span> <span
  m='559660'>The</span> <span m='559840'>only</span> <span
  m='560030'>non-zero</span> <span m='560610'>entries</span> <span
  m='560900'>are</span> <span m='561150'>on</span> <span m='561600'>a</span>
  <span m='561700'>diagonal.</span> <span m='561890'>And</span> <span
  m='562060'>they're</span> <span m='562220'>precisely</span> <span
  m='562790'>1,</span> <span m='563680'>1,</span> <span m='564550'>1,</span>
  <span m='565320'>and</span> <span m='565410'>negative</span> <span
  m='565870'>1.</span> </p><p><span m='572700'>And</span> <span
  m='572880'>finally,</span> <span m='573740'>let's</span> <span
  m='574000'>tackle</span> <span m='574420'>the</span> <span
  m='576260'>eigenvalues slash</span> <span m='576610'>eigenvectors</span> <span
  m='577090'>issue.</span> <span m='578270'>Well,</span> <span
  m='582130'>you've</span> <span m='582360'>seen</span> <span
  m='582600'>what</span> <span m='583190'>an</span> <span
  m='583430'>eigenvector</span> <span m='584100'>for</span> <span
  m='584410'>a</span> <span m='584440'>matrix</span> <span m='585310'>is.</span>
  <span m='586440'>And</span> <span m='586640'>the</span> <span
  m='586800'>idea</span> <span m='587460'>for</span> <span m='587920'>an</span>
  <span m='588710'>eigenvalue,</span> <span m='589350'>eigenvector</span> <span
  m='590080'>for</span> <span m='590700'>a</span> <span m='590770'>linear</span>
  <span m='591070'>transformation</span> <span m='591790'>is</span> <span
  m='591930'>virtually</span> <span m='592380'>the</span> <span
  m='592480'>same.</span> </p><p><span m='593630'>And</span> <span
  m='593990'>we</span> <span m='594130'>are</span> <span
  m='594180'>looking</span> <span m='594500'>for</span> <span
  m='594700'>the</span> <span m='594820'>vectors</span> <span
  m='595220'>v</span> <span m='597170'>and</span> <span
  m='597540'>scalars</span> <span m='597910'>lambda</span> <span
  m='598330'>such</span> <span m='598460'>that</span> <span m='599720'>T</span>
  <span m='599930'>of</span> <span m='600130'>v</span> <span
  m='600560'>is</span> <span m='601010'>lambda*v.</span> <span
  m='603470'>But</span> <span m='604050'>if</span> <span m='604380'>you</span>
  <span m='604500'>guys</span> <span m='606470'>look</span> <span
  m='606710'>back</span> <span m='607200'>to</span> <span m='607710'>what</span>
  <span m='607990'>we</span> <span m='608130'>just</span> <span
  m='608540'>did</span> <span m='609050'>with</span> <span
  m='610100'>w_1,</span> <span m='610260'>w_2,</span> <span
  m='610540'>w_3,</span> <span m='611120'>and</span> <span
  m='611250'>w_4,</span> <span m='612660'>you'll see</span> <span
  m='612840'>precisely</span> <span m='613450'>that</span> <span
  m='614890'>w_1,</span> <span m='615510'>w_2,</span> <span
  m='616460'>and</span> <span m='616680'>w_3</span> <span m='618080'>are</span>
  <span m='618780'>eigenvectors</span> <span m='619330'>for</span> <span
  m='619590'>T</span> <span m='620060'>with</span> <span
  m='620590'>eigenvalue</span> <span m='620910'>1.</span> <span
  m='622540'>And</span> <span m='622990'>w_4</span> <span m='624120'>is</span>
  <span m='624490'>an</span> <span m='624590'>eigenvector</span> <span
  m='625120'>for</span> <span m='625290'>T</span> <span m='625460'>with</span>
  <span m='625910'>eigenvalue</span> <span m='626420'>negative</span> <span
  m='626810'>1.</span> </p><p><span m='627640'>So</span> <span
  m='629000'>yeah,</span> <span m='629590'>we</span> <span
  m='630830'>essentially</span> <span m='632650'>have</span> <span
  m='633920'>solved</span> <span m='635320'>the</span> <span
  m='635490'>problem</span> <span m='636570'>knowing</span> <span
  m='637170'>a</span> <span m='637260'>very,</span> <span m='637580'>very</span>
  <span m='637830'>nice</span> <span m='638170'>basis</span> <span
  m='638960'>in</span> <span m='639160'>which</span> <span m='640030'>we</span>
  <span m='640300'>computed</span> <span m='641170'>the</span> <span
  m='641610'>linear</span> <span m='641910'>transformation</span> <span
  m='642590'>T.</span> <span m='643380'>So</span> <span m='643580'>I'll</span>
  <span m='643750'>leave</span> <span m='643940'>it</span> <span
  m='644040'>at</span> <span m='644160'>that.</span> </p>
embedded_media:
  - uid: 6460c9546800ef993d482418682312f3
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 2uDvRUowBzg
  - uid: c54167e306c30d07e4413633dbdc25bb
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 2uDvRUowBzg
  - uid: f685154af82f2f1ac06b133b7b47c664
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/linear-transformations/id488155309?i=108454333
  - uid: c855492c97d0ce10c25bf7bddae311c6
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110714_N2_300k.mp4
  - uid: 3b5c9e011f40074c476a654625da7622
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/2uDvRUowBzg/default.jpg'
  - uid: 6fb918c656018cce4d12ff9ca351376f
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: 2uDvRUowBzg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/problem-solving-linear-transformations/2uDvRUowBzg.srt
  - uid: e70c3934dc6123a02195e95efe70cffa
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: 2uDvRUowBzg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/positive-definite-matrices-and-applications/linear-transformations-and-their-matrices/problem-solving-linear-transformations/2uDvRUowBzg.pdf
  - uid: 74376d5303b6502797a92100875ef8ae
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 4d5a8563cf1ca9fb231bf6b0addcc1a6
    parent_uid: c42458bf080365d87384374b7e7b3a38
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
