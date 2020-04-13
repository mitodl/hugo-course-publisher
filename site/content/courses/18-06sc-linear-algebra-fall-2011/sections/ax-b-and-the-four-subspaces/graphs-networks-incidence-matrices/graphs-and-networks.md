---
title: Graphs and Networks
uid: 5b238858f5183c527f6930c22eead0a5
parent_uid: 8be90057938141d7712d45f0e42d1cfc
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/graphs-networks-incidence-matrices/graphs-and-networks
short_url: graphs-and-networks
inline_embed_id: 63580259graphsandnetworks61012402
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6150'>NIKOLA KAMBUROV: Hi,</span> <span m='6320'>guys.</span>
  <span m='7720'>Today</span> <span m='8230'>we're</span> <span
  m='8520'>going</span> <span m='8630'>to</span> <span m='8700'>see</span> <span
  m='9080'>how</span> <span m='9860'>one</span> <span m='10200'>can</span> <span
  m='10320'>use</span> <span m='10940'>linear</span> <span
  m='11260'>algebra</span> <span m='11700'>to</span> <span
  m='11810'>describe</span> <span m='12550'>graphs</span> <span
  m='13360'>and</span> <span m='13700'>networks.</span> <span
  m='14620'>In</span> <span m='14780'>particular,</span> <span
  m='15370'>we'll</span> <span m='15560'>do</span> <span m='15660'>the</span>
  <span m='15770'>following</span> <span m='16149'>problem.</span> </p><p><span
  m='17260'>We're</span> <span m='17450'>given</span> <span
  m='17730'>this</span> <span m='17870'>very</span> <span
  m='18090'>simple</span> <span m='18530'>graph</span> <span
  m='19860'>here</span> <span m='20550'>with</span> <span m='21290'>five</span>
  <span m='21580'>nodes</span> <span m='21970'>and</span> <span
  m='22140'>six</span> <span m='22430'>edges.</span> <span
  m='23270'>We've</span> <span m='23450'>already</span> <span
  m='23790'>labeled</span> <span m='24150'>them,</span> <span
  m='24660'>and</span> <span m='25120'>we've</span> <span m='25410'>put</span>
  <span m='25560'>directions</span> <span m='26080'>on</span> <span
  m='26190'>the</span> <span m='26470'>edges.</span> <span m='27620'>And</span>
  <span m='28140'>we are</span> <span m='28410'>asked</span> <span
  m='28680'>to</span> <span m='28790'>write</span> <span m='29040'>down</span>
  <span m='29410'>the</span> <span m='29680'>incidence</span> <span
  m='30160'>matrix</span> <span m='30790'>A,</span> <span m='31840'>and</span>
  <span m='32180'>then</span> <span m='32479'>to</span> <span
  m='32619'>compute</span> <span m='33510'>its</span> <span
  m='33750'>kernel</span> <span m='34310'>and</span> <span m='34460'>the</span>
  <span m='34530'>kernel</span> <span m='34890'>of</span> <span
  m='35010'>A</span> <span m='35160'>transpose.</span> <span
  m='36340'>And</span> <span m='36500'>finally,</span> <span
  m='37150'>we're</span> <span m='37350'>asked</span> <span m='37560'>to</span>
  <span m='37640'>compute</span> <span m='38010'>the</span> <span
  m='38120'>trace</span> <span m='38520'>of</span> <span m='38620'>A</span>
  <span m='38720'>transpose</span> <span m='39290'>A.</span> </p><p><span
  m='39860'>I'll</span> <span m='40100'>give</span> <span m='40330'>you</span>
  <span m='40920'>a</span> <span m='41000'>few</span> <span
  m='41180'>moments</span> <span m='41640'>to</span> <span m='42370'>try</span>
  <span m='42910'>the</span> <span m='43440'>problem</span> <span
  m='43770'>on</span> <span m='43860'>your</span> <span m='44050'>own.</span>
  <span m='44700'>And</span> <span m='45060'>then</span> <span
  m='45510'>you'll</span> <span m='45660'>see</span> <span m='45830'>my</span>
  <span m='46010'>take</span> <span m='46270'>on</span> <span
  m='46350'>it.</span> </p><p><span m='53740'>Hello</span> <span
  m='53930'>again.</span> <span m='55060'>OK,</span> <span m='55440'>so</span>
  <span m='55630'>let's</span> <span m='55980'>first</span> <span
  m='56270'>recall</span> <span m='56670'>what</span> <span m='57180'>an</span>
  <span m='57330'>incidence</span> <span m='57850'>matrix</span> <span
  m='58660'>is.</span> <span m='59520'>So</span> <span m='59680'>an</span> <span
  m='59820'>incidence</span> <span m='60180'>matrix</span> <span
  m='60600'>is</span> <span m='60660'>supposed</span> <span m='60975'>to</span>
  <span m='61290'>encode</span> <span m='62120'>how</span> <span
  m='62590'>the</span> <span m='62740'>nodes</span> <span
  m='63560'>connect</span> <span m='63940'>to</span> <span m='64019'>the</span>
  <span m='64180'>edges.</span> <span m='65580'>In</span> <span
  m='65730'>particular,</span> <span m='67070'>it</span> <span
  m='67260'>has</span> <span m='67630'>as</span> <span m='67790'>many</span>
  <span m='68240'>rows</span> <span m='68710'>as</span> <span m='68860'>there
  are</span> <span m='69170'>edges</span> <span m='70150'>and</span> <span
  m='70600'>as</span> <span m='70710'>many</span> <span m='70920'>columns</span>
  <span m='71310'>as</span> <span m='71440'>there</span> <span
  m='71610'>are</span> <span m='71670'>nodes.</span> </p><p><span
  m='73030'>And</span> <span m='76510'>we're</span> <span m='76730'>going</span>
  <span m='76840'>to</span> <span m='77320'>fill</span> <span
  m='77500'>in</span> <span m='77610'>the</span> <span m='77700'>rows.</span>
  <span m='79120'>And</span> <span m='79660'>we'll</span> <span
  m='80190'>fill</span> <span m='80650'>them</span> <span m='80960'>out</span>
  <span m='81190'>as</span> <span m='81400'>follows.</span> <span
  m='82270'>So</span> <span m='83510'>we're</span> <span m='83870'>going</span>
  <span m='83980'>to</span> <span m='84020'>use</span> <span
  m='84250'>only</span> <span m='84750'>negative</span> <span
  m='85150'>1,</span> <span m='85380'>1,</span> <span m='85660'>and</span> <span
  m='85820'>0.</span> <span m='87340'>And</span> <span m='87970'>we're</span>
  <span m='88200'>going</span> <span m='88300'>to</span> <span
  m='88360'>put</span> <span m='88610'>a</span> <span m='88720'>negative</span>
  <span m='89270'>1</span> <span m='91090'>in</span> <span
  m='92020'>entry</span> <span m='92500'>i</span> <span m='93370'>and</span>
  <span m='93610'>1</span> <span m='94070'>in</span> <span
  m='94290'>entry</span> <span m='94690'>j</span> <span m='95500'>if</span>
  <span m='96050'>the</span> <span m='97540'>corresponding</span> <span
  m='98210'>edge</span> <span m='99030'>connects</span> <span
  m='99800'>node</span> <span m='100230'>i</span> <span m='100930'>to</span>
  <span m='101050'>node</span> <span m='101200'>j.</span> </p><p><span
  m='102420'>OK,</span> <span m='102770'>let</span> <span m='102950'>me</span>
  <span m='103130'>just</span> <span m='103340'>do it</span> <span
  m='103530'>concretely.</span> <span m='104440'>So</span> <span
  m='106200'>let's</span> <span m='106410'>look</span> <span
  m='106570'>at</span> <span m='107090'>edge</span> <span
  m='107530'>number</span> <span m='107780'>1.</span> <span m='108160'>So</span>
  <span m='108350'>it</span> <span m='108490'>corresponds</span> <span
  m='109210'>to</span> <span m='109600'>the</span> <span m='109760'>first</span>
  <span m='110120'>row.</span> <span m='110850'>It</span> <span
  m='111030'>connects</span> <span m='111820'>1</span> <span
  m='112130'>to</span> <span m='112290'>2.</span> <span m='112560'>So</span>
  <span m='113090'>we</span> <span m='113320'>have</span> <span
  m='113740'>a</span> <span m='113860'>negative</span> <span m='114380'>1</span>
  <span m='115150'>and a</span> <span m='115330'>1.</span> </p><p><span
  m='118040'>Then</span> <span m='118390'>edge</span> <span
  m='119650'>number</span> <span m='119980'>2,</span> <span m='120370'>it</span>
  <span m='120540'>connects</span> <span m='121040'>node</span> <span
  m='121300'>2</span> <span m='121630'>to</span> <span m='121740'>3,</span>
  <span m='122420'>so</span> <span m='122610'>negative</span> <span
  m='123190'>1,</span> <span m='124100'>1.</span> <span m='126910'>Edge</span>
  <span m='127160'>number</span> <span m='127400'>3</span> <span
  m='127720'>connects</span> <span m='128680'>node</span> <span
  m='129060'>1</span> <span m='129600'>to</span> <span m='129750'>3,</span>
  <span m='130169'>so</span> <span m='130919'>negative</span> <span
  m='131310'>1,</span> <span m='132240'>1.</span> <span m='133150'>And</span>
  <span m='133800'>I</span> <span m='133950'>believe</span> <span
  m='134210'>you</span> <span m='134300'>get</span> <span m='134470'>the</span>
  <span m='134540'>picture,</span> <span m='135060'>right?</span> </p><p><span
  m='135350'>So</span> <span m='135620'>I'm</span> <span m='135770'>just</span>
  <span m='135930'>going</span> <span m='136030'>to</span> <span
  m='136490'>fill</span> <span m='136620'>out</span> <span m='137270'>the</span>
  <span m='137320'>rest</span> <span m='137540'>of</span> <span
  m='137580'>the</span> <span m='137730'>entries.</span> <span
  m='139104'>All</span> <span m='139521'>right,</span> <span m='139940'>4</span>
  <span m='140690'>is:</span> <span m='142361'>negative 1,</span> <span
  m='143640'>to</span> <span m='146660'>1.</span> <span m='147450'>5</span>
  <span m='148480'>is:</span> <span m='151260'>well,</span> <span
  m='152260'>4,</span> <span m='154210'>well,</span> <span
  m='154640'>negative</span> <span m='155020'>1,</span> <span
  m='155290'>1</span> <span m='155560'>here.</span> <span m='155980'>And</span>
  <span m='156400'>6</span> <span m='157820'>is:</span> <span
  m='162454'>negative 1</span> <span m='162937'>and</span> <span
  m='163910'>1.</span> </p><p><span m='165240'>OK.</span> <span
  m='166090'>So</span> <span m='167000'>we've</span> <span
  m='167190'>constructed</span> <span m='167890'>the</span> <span
  m='168040'>matrix</span> <span m='168520'>A.</span> <span
  m='169990'>Now,</span> <span m='170660'>we'll</span> <span
  m='170970'>compute</span> <span m='172580'>its</span> <span
  m='172810'>null</span> <span m='173000'>space.</span> <span
  m='173700'>And</span> <span m='173880'>we're</span> <span
  m='174040'>going</span> <span m='174160'>to</span> <span m='174240'>do</span>
  <span m='174400'>it</span> <span m='174590'>without</span> <span
  m='174980'>performing</span> <span m='175810'>any</span> <span
  m='176410'>row</span> <span m='176750'>operations</span> <span
  m='177420'>whatsoever.</span> </p><p><span m='179260'>So</span> <span
  m='180620'>in</span> <span m='180790'>order</span> <span m='180980'>to</span>
  <span m='181100'>do</span> <span m='181340'>this,</span> <span
  m='182360'>it's</span> <span m='182630'>helpful</span> <span
  m='183140'>to</span> <span m='184400'>look</span> <span m='184620'>at</span>
  <span m='184700'>the</span> <span m='184760'>graph</span> <span
  m='185080'>as</span> <span m='185240'>an</span> <span
  m='185460'>electric</span> <span m='185870'>circuit</span> <span
  m='187670'>and</span> <span m='188900'>to</span> <span
  m='189160'>assign</span> <span m='189570'>to</span> <span
  m='190700'>each</span> <span m='190970'>of</span> <span m='191060'>the</span>
  <span m='191170'>nodes</span> <span m='192170'>an</span> <span
  m='192280'>electric</span> <span m='192630'>potential.</span> <span
  m='194310'>If</span> <span m='194500'>we</span> <span
  m='194610'>collect</span> <span m='195180'>all</span> <span
  m='195560'>the</span> <span m='196030'>electric</span> <span
  m='196470'>potentials</span> <span m='198380'>in</span> <span
  m='198670'>a</span> <span m='198740'>vector</span> <span m='199090'>x,</span>
  <span m='200670'>then</span> <span m='201220'>A</span> <span
  m='201840'>times</span> <span m='202310'>x</span> <span m='203890'>is</span>
  <span m='205050'>a</span> <span m='205170'>vector</span> <span
  m='206700'>with</span> <span m='207280'>as</span> <span m='207750'>many</span>
  <span m='208110'>entries</span> <span m='208660'>as</span> <span
  m='208840'>there</span> <span m='209110'>are</span> <span
  m='209380'>edges</span> <span m='210880'>and</span> <span
  m='211550'>gives</span> <span m='212150'>precisely</span> <span
  m='213170'>the</span> <span m='214610'>potential</span> <span
  m='215140'>differences</span> <span m='216350'>across</span> <span
  m='217040'>the</span> <span m='217270'>edges</span> <span m='217570'>of</span>
  <span m='217650'>the</span> <span m='217730'>graph.</span> <span
  m='219080'>OK,</span> <span m='219760'>so</span> <span m='220280'>then</span>
  <span m='221210'>if</span> <span m='221630'>A*x</span> <span
  m='221890'>is</span> <span m='222030'>to</span> <span m='222120'>be</span>
  <span m='222280'>0,</span> <span m='224080'>this</span> <span
  m='224410'>means</span> <span m='224840'>that</span> <span
  m='225680'>across</span> <span m='225930'>the</span> <span
  m='226180'>graph,</span> <span m='228460'>across</span> <span
  m='228790'>all</span> <span m='229010'>the</span> <span
  m='229140'>edges</span> <span m='229400'>of</span> <span m='229480'>the</span>
  <span m='229570'>graph,</span> <span m='229920'>all</span> <span
  m='230920'>potential</span> <span m='231520'>differences</span> <span
  m='232480'>are</span> <span m='232630'>0.</span> </p><p><span
  m='233740'>Therefore,</span> <span m='235820'>all</span> <span
  m='236640'>the</span> <span m='237100'>potentials</span> <span
  m='239500'>at</span> <span m='240920'>all</span> <span m='241080'>the</span>
  <span m='241200'>nodes</span> <span m='242700'>need</span> <span
  m='242880'>to</span> <span m='242960'>be</span> <span m='243040'>equal</span>
  <span m='243320'>to</span> <span m='243420'>a</span> <span
  m='243530'>constant</span> <span m='244180'>number.</span> <span
  m='245000'>So</span> <span m='246930'>therefore,</span> <span
  m='248000'>we</span> <span m='248180'>conclude</span> <span
  m='248910'>that</span> <span m='249960'>the</span> <span
  m='250370'>null</span> <span m='250620'>space</span> <span
  m='251240'>of</span> <span m='251410'>A</span> <span m='254690'>is</span>
  <span m='254930'>spanned</span> <span m='256149'>by</span> <span
  m='258350'>constant</span> <span m='260329'>1.</span> <span
  m='262980'>OK?</span> <span m='264260'>There</span> <span
  m='264640'>are</span> <span m='264690'>five</span> <span m='265750'>1's</span>
  <span m='266080'>here,</span> <span m='266760'>corresponding</span> <span
  m='267320'>to</span> <span m='267420'>the</span> <span m='267500'>five</span>
  <span m='268000'>nodes.</span> </p><p><span m='269820'>Now</span> <span
  m='270830'>what</span> <span m='271170'>about</span> <span
  m='271840'>the</span> <span m='272050'>null</span> <span
  m='272270'>space</span> <span m='272760'>of</span> <span m='272920'>A</span>
  <span m='273030'>transpose?</span> <span m='276120'>Adopt</span> <span
  m='276900'>this</span> <span m='277330'>analogy</span> <span
  m='277960'>with</span> <span m='278220'>electric</span> <span
  m='279260'>circuits.</span> <span m='280250'>But</span> <span
  m='280580'>this</span> <span m='280780'>time,</span> <span
  m='281000'>we're</span> <span m='281130'>going</span> <span
  m='281240'>to</span> <span m='281350'>look</span> <span m='281680'>at</span>
  <span m='282430'>currents</span> <span m='282900'>flowing</span> <span
  m='284930'>across</span> <span m='285450'>the</span> <span
  m='285670'>edges</span> <span m='286150'>of</span> <span m='286300'>the</span>
  <span m='286380'>graph.</span> <span m='289830'>Oh,</span> <span
  m='290050'>and</span> <span m='290640'>we</span> <span m='290920'>are</span>
  <span m='291000'>going</span> <span m='291120'>to</span> <span
  m='291360'>adopt the</span> <span m='291440'>following</span> <span
  m='291780'>convention</span> <span m='292320'>for</span> <span
  m='292470'>the</span> <span m='292580'>currents.</span> <span
  m='293270'>So</span> <span m='294140'>a</span> <span m='294280'>current</span>
  <span m='294920'>is</span> <span m='295280'>going</span> <span
  m='295380'>to</span> <span m='295440'>be</span> <span
  m='295580'>positive</span> <span m='299330'>if</span> <span
  m='299790'>it</span> <span m='299940'>flows</span> <span m='300710'>in</span>
  <span m='300870'>the</span> <span m='300970'>direction</span> <span
  m='301820'>of</span> <span m='301910'>the</span> <span m='302070'>edge</span>
  <span m='302680'>and</span> <span m='303000'>negative</span> <span
  m='303295'>if</span> <span m='303590'>it</span> <span m='303710'>flows</span>
  <span m='303960'>in</span> <span m='304040'>the</span> <span
  m='304140'>opposite</span> <span m='304460'>direction.</span> </p><p><span
  m='305950'>Right.</span> <span m='306620'>So</span> <span
  m='307170'>then,</span> <span m='307560'>what</span> <span
  m='308000'>is</span> <span m='309360'>A</span> <span
  m='310920'>transpose</span> <span m='311680'>y,</span> <span
  m='312770'>where</span> <span m='313820'>y</span> <span m='314380'>is</span>
  <span m='316260'>a</span> <span m='316400'>vector,</span> <span
  m='320720'>each</span> <span m='320970'>of</span> <span
  m='321920'>whose</span> <span m='322140'>entries</span> <span
  m='322980'>is</span> <span m='323330'>a</span> <span m='323460'>current</span>
  <span m='324460'>on</span> <span m='324850'>the</span> <span
  m='325010'>edge?</span> <span m='325690'>Well,</span> <span
  m='328730'>the</span> <span m='329090'>entries</span> <span
  m='329450'>of</span> <span m='329550'>A</span> <span
  m='329640'>transpose</span> <span m='330230'>y</span> <span
  m='330945'>are</span> <span m='331320'>precisely</span> <span
  m='333400'>equal</span> <span m='333870'>to</span> <span m='333970'>the</span>
  <span m='334100'>total</span> <span m='334560'>current</span> <span
  m='335280'>flowing</span> <span m='335940'>through</span> <span
  m='336260'>each</span> <span m='336530'>of</span> <span m='336610'>the</span>
  <span m='336720'>nodes</span> <span m='337090'>of</span> <span
  m='337190'>the</span> <span m='337270'>graph.</span> <span
  m='338270'>So</span> <span m='339770'>A</span> <span
  m='339900'>transpose</span> <span m='340380'>y</span> <span
  m='340620'>being</span> <span m='340920'>equal</span> <span
  m='341190'>to</span> <span m='341290'>0</span> <span m='341690'>means</span>
  <span m='342160'>that</span> <span m='342850'>there</span> <span
  m='343060'>is</span> <span m='343170'>a</span> <span m='343220'>balance</span>
  <span m='344020'>in</span> <span m='344140'>the</span> <span
  m='344230'>circuit,</span> <span m='345020'>that</span> <span
  m='346770'>the</span> <span m='346930'>currents</span> <span
  m='347280'>that</span> <span m='347390'>flow</span> <span
  m='348490'>into</span> <span m='348830'>each</span> <span
  m='349140'>node</span> <span m='349560'>equal</span> <span
  m='350070'>the</span> <span m='350210'>currents</span> <span
  m='351050'>that</span> <span m='351160'>flow</span> <span
  m='351280'>out</span> <span m='351760'>of</span> <span m='351830'>it.</span>
  </p><p><span m='354210'>Right.</span> <span m='356190'>And</span> <span
  m='356480'>it's</span> <span m='357040'>fairly</span> <span
  m='357550'>easy</span> <span m='357870'>to</span> <span m='358010'>find</span>
  <span m='358380'>such a</span> <span m='358610'>configuration</span> <span
  m='360520'>of</span> <span m='360690'>currents</span> <span
  m='363790'>that</span> <span m='364120'>satisfies</span> <span
  m='364950'>this</span> <span m='366020'>balance</span> <span
  m='366370'>equation.</span> <span m='368340'>We</span> <span
  m='368510'>do</span> <span m='368680'>it</span> <span m='368860'>by</span>
  <span m='369030'>flowing</span> <span m='370020'>around</span> <span
  m='370640'>loops</span> <span m='371200'>of</span> <span m='371320'>the</span>
  <span m='371400'>graph.</span> </p><p><span m='372370'>So</span> <span
  m='373190'>you</span> <span m='373320'>see,</span> <span
  m='376200'>this</span> <span m='376910'>graph</span> <span
  m='377220'>has</span> <span m='377960'>three</span> <span
  m='378220'>loops.</span> <span m='379830'>The</span> <span
  m='379910'>first</span> <span m='380320'>one</span> <span m='380610'>is</span>
  <span m='381970'>this</span> <span m='383810'>triangle</span> <span
  m='385270'>up</span> <span m='385480'>there.</span> <span
  m='386800'>The</span> <span m='387130'>second</span> <span
  m='387480'>one</span> <span m='387760'>is</span> <span m='387940'>this</span>
  <span m='388030'>square.</span> </p><p><span m='389720'>And</span> <span
  m='390020'>I'm</span> <span m='390180'>just,</span> <span m='392776'>by</span>
  <span m='393240'>this</span> <span m='393580'>curled</span> <span
  m='394400'>direction,</span> <span m='395330'>I'm</span> <span
  m='395710'>signifying</span> <span m='397320'>in</span> <span
  m='397630'>which</span> <span m='397820'>way</span> <span
  m='398010'>I'm</span> <span m='398100'>going</span> <span m='398240'>to</span>
  <span m='399760'>trace</span> <span m='400030'>the</span> <span
  m='400150'>loop.</span> <span m='402050'>And</span> <span
  m='402350'>there</span> <span m='402550'>is</span> <span
  m='402730'>third</span> <span m='403030'>loop,</span> <span
  m='403520'>is</span> <span m='405900'>along</span> <span m='406350'>the</span>
  <span m='406850'>outer</span> <span m='407220'>contour</span> <span
  m='407790'>of</span> <span m='407880'>the</span> <span
  m='407960'>graph.</span> <span m='409340'>But</span> <span
  m='410900'>in</span> <span m='411290'>fact,</span> <span m='411880'>the</span>
  <span m='412020'>third</span> <span m='412330'>one</span> <span
  m='413470'>can</span> <span m='413620'>be</span> <span
  m='413780'>thought</span> <span m='414050'>of</span> <span
  m='414200'>as</span> <span m='414320'>a</span> <span
  m='414390'>superposition</span> <span m='416030'>of</span> <span
  m='417060'>these</span> <span m='417420'>two,</span> <span
  m='417850'>and</span> <span m='418030'>I'll</span> <span
  m='418770'>explain</span> <span m='419350'>why</span> <span
  m='420200'>in</span> <span m='420320'>a</span> <span m='420370'>second.</span>
  </p><p><span m='422630'>So</span> <span m='423140'>let's</span> <span
  m='423840'>figure</span> <span m='424210'>out</span> <span
  m='426970'>the</span> <span m='427060'>configuration</span> <span
  m='427730'>of</span> <span m='427990'>currents</span> <span
  m='428580'>that</span> <span m='429320'>balances</span> <span
  m='429850'>these</span> <span m='430050'>loops.</span> <span
  m='430990'>So</span> <span m='431310'>if</span> <span m='431480'>we</span>
  <span m='431610'>flow</span> <span m='432150'>a</span> <span
  m='432430'>current</span> <span m='434570'>1</span> <span
  m='435810'>from</span> <span m='436100'>1</span> <span m='436590'>to</span>
  <span m='436730'>2</span> <span m='438120'>and</span> <span
  m='438390'>then</span> <span m='438920'>flow</span> <span m='439180'>a</span>
  <span m='439545'>current</span> <span m='440280'>of</span> <span
  m='440460'>1</span> <span m='441080'>along</span> <span m='442300'>edge</span>
  <span m='442630'>2,</span> <span m='442955'>from</span> <span m='443280'>2
  to</span> <span m='443560'>3,</span> <span m='444940'>and</span> <span
  m='445190'>then</span> <span m='445560'>we</span> <span m='445720'>flow</span>
  <span m='446280'>a</span> <span m='446430'>current</span> <span
  m='447150'>of</span> <span m='447600'>negative</span> <span
  m='448040'>1,</span> <span m='448580'>mind</span> <span m='448875'>that</span>
  <span m='449170'>the</span> <span m='449340'>direction</span> <span
  m='449750'>is</span> <span m='449890'>opposite</span> <span m='450160'>to
  the</span> <span m='450430'>direction</span> <span m='450880'>of</span> <span
  m='450960'>the</span> <span m='451060'>loop,</span> <span
  m='451860'>then</span> <span m='452280'>we're</span> <span
  m='452430'>going</span> <span m='452610'>to</span> <span
  m='452820'>have</span> <span m='454150'>a</span> <span
  m='454290'>balanced</span> <span m='454680'>configuration</span> <span
  m='455440'>of</span> <span m='455560'>currents.</span> <span
  m='456400'>So</span> <span m='458430'>let</span> <span m='458560'>me</span>
  <span m='458700'>write</span> <span m='458940'>this</span> <span
  m='459190'>down.</span> <span m='462060'>The</span> <span
  m='462120'>following</span> <span m='462500'>configuration,</span> <span
  m='465590'>so</span> <span m='466720'>1</span> <span m='468490'>along</span>
  <span m='468870'>edge</span> <span m='469130'>1,</span> <span
  m='470220'>1</span> <span m='471020'>along</span> <span m='471470'>edge</span>
  <span m='471880'>2,</span> <span m='472430'>and</span> <span
  m='472820'>negative</span> <span m='473350'>1</span> <span
  m='473970'>along</span> <span m='474300'>edge</span> <span
  m='474660'>3,</span> <span m='475600'>and</span> <span m='475810'>the</span>
  <span m='475920'>rest</span> <span m='476920'>0,</span> <span
  m='479160'>is</span> <span m='479340'>a</span> <span
  m='479390'>solution</span> <span m='479790'>to</span> <span
  m='480110'>A</span> <span m='480230'>transpose</span> <span
  m='480780'>y.</span> </p><p><span m='483770'>Let's</span> <span
  m='486970'>see</span> <span m='487280'>what</span> <span
  m='488380'>solution</span> <span m='488830'>we</span> <span
  m='488970'>get</span> <span m='489270'>by</span> <span
  m='489900'>flowing</span> <span m='490310'>around</span> <span
  m='491170'>the</span> <span m='491340'>loop</span> <span m='491880'>in</span>
  <span m='492040'>the</span> <span m='492130'>square.</span> <span
  m='493080'>Well,</span> <span m='499130'>we</span> <span
  m='499350'>flow</span> <span m='499630'>a</span> <span
  m='499840'>current</span> <span m='500160'>of</span> <span m='500270'>1</span>
  <span m='500540'>along</span> <span m='501010'>edge</span> <span
  m='501150'>4,</span> <span m='503170'>current</span> <span
  m='503460'>of</span> <span m='503620'>1</span> <span m='503780'>along</span>
  <span m='504040'>edge</span> <span m='504360'>5,</span> <span
  m='505480'>current</span> <span m='505800'>of</span> <span m='505990'>1</span>
  <span m='506180'>along</span> <span m='506530'>edge</span> <span
  m='506690'>6,</span> <span m='507820'>and</span> <span
  m='508140'>current</span> <span m='508530'>of</span> <span
  m='509000'>negative</span> <span m='509340'>1</span> <span
  m='509730'>along</span> <span m='510010'>edge</span> <span
  m='510220'>2.</span> <span m='510980'>So</span> <span m='512039'>let's</span>
  <span m='512280'>be</span> <span m='512419'>careful.</span> </p><p><span
  m='513929'>So</span> <span m='514640'>it</span> <span m='514710'>was</span>
  <span m='515039'>0,</span> <span m='516250'>then</span> <span
  m='517190'>along</span> <span m='517440'>edge</span> <span m='517700'>2</span>
  <span m='517960'>was</span> <span m='518110'>negative</span> <span
  m='518520'>1.</span> <span m='520496'>Along</span> <span m='520990'>3:</span>
  <span m='521978'>0;</span> <span m='522472'>along</span> <span
  m='522966'>4:</span> <span m='523460'>1;</span> <span m='523954'>along</span>
  <span m='524448'>5:</span> <span m='524942'>1;</span> <span
  m='525436'>along</span> <span m='525930'>6:</span> <span m='526424'>1.</span>
  </p><p><span m='529610'>Now</span> <span m='529820'>we</span> <span
  m='529920'>can</span> <span m='530050'>do</span> <span m='530130'>the</span>
  <span m='530230'>same</span> <span m='530680'>thing</span> <span
  m='531060'>with</span> <span m='532390'>the</span> <span m='532540'>big</span>
  <span m='533050'>loop</span> <span m='534260'>and</span> <span
  m='534550'>produce</span> <span m='536310'>a</span> <span
  m='536440'>vector</span> <span m='536800'>corresponding</span> <span
  m='537330'>to</span> <span m='537490'>it.</span> <span m='538330'>And</span>
  <span m='540070'>I</span> <span m='540270'>prompt</span> <span
  m='540550'>you</span> <span m='540650'>to</span> <span m='540750'>do</span>
  <span m='540940'>it.</span> <span m='541770'>But</span> <span
  m='541940'>what</span> <span m='542110'>you'll</span> <span
  m='542300'>see</span> <span m='542860'>is</span> <span m='543190'>that</span>
  <span m='544820'>the</span> <span m='545150'>vector</span> <span
  m='545450'>that</span> <span m='545670'>you</span> <span m='545800'>get</span>
  <span m='546110'>is</span> <span m='546320'>precisely</span> <span
  m='547070'>a</span> <span m='547420'>sum</span> <span m='547750'>of</span>
  <span m='547870'>these</span> <span m='548070'>two</span> <span
  m='548190'>vectors.</span> <span m='550350'>In</span> <span
  m='550500'>a</span> <span m='550560'>way,</span> <span m='551040'>the</span>
  <span m='551160'>big</span> <span m='551370'>loop</span> <span
  m='551550'>is</span> <span m='551670'>a</span> <span
  m='551730'>superposition</span> <span m='552880'>of</span> <span
  m='553350'>the</span> <span m='553470'>small</span> <span
  m='553810'>loops.</span> </p><p><span m='555380'>OK,</span> <span
  m='556510'>so</span> <span m='558010'>we</span> <span
  m='558150'>figured</span> <span m='558480'>out</span> <span
  m='558680'>what</span> <span m='559220'>the</span> <span
  m='559840'>null</span> <span m='560030'>space</span> <span
  m='560380'>of</span> <span m='560480'>A</span> <span
  m='560580'>transpose</span> <span m='561300'>is.</span> <span
  m='561740'>And</span> <span m='561990'>now,</span> <span
  m='562170'>let's</span> <span m='563580'>concentrate</span> <span
  m='564150'>our</span> <span m='564250'>attention</span> <span
  m='564680'>on</span> <span m='565550'>finding</span> <span
  m='565820'>the</span> <span m='565910'>trace</span> <span m='566430'>of</span>
  <span m='566550'>A</span> <span m='566660'>transpose</span> <span
  m='567550'>A.</span> <span m='568890'>We're</span> <span
  m='568950'>going</span> <span m='569040'>to</span> <span m='569110'>do</span>
  <span m='569210'>it</span> <span m='569570'>right</span> <span
  m='569750'>here.</span> </p><p><span m='572480'>So</span> <span
  m='573790'>the</span> <span m='574010'>trace</span> <span m='574500'>of</span>
  <span m='574650'>a</span> <span m='574710'>matrix</span> <span
  m='575160'>is</span> <span m='575250'>the</span> <span m='575330'>sum</span>
  <span m='575540'>of</span> <span m='575640'>its</span> <span
  m='575780'>diagonal</span> <span m='576230'>entries.</span> <span
  m='578240'>And</span> <span m='581620'>we've</span> <span
  m='581790'>seen</span> <span m='582060'>this</span> <span
  m='582350'>many</span> <span m='582610'>times</span> <span
  m='582940'>already,</span> <span m='584690'>that</span> <span
  m='585720'>the</span> <span m='585890'>diagonal</span> <span
  m='588390'>entries</span> <span m='588880'>of</span> <span m='589050'>A</span>
  <span m='589210'>transpose</span> <span m='589840'>A</span> <span
  m='590550'>are</span> <span m='590900'>precisely</span> <span
  m='592220'>the</span> <span m='592960'>magnitudes</span> <span
  m='594290'>squared</span> <span m='595240'>of</span> <span
  m='595410'>the</span> <span m='595520'>columns</span> <span
  m='596300'>of</span> <span m='596500'>A.</span> <span m='596730'>OK?</span>
  <span m='599090'>So</span> <span m='600270'>the</span> <span
  m='600530'>(1,</span> <span m='600890'>1)</span> <span m='601200'>entry</span>
  <span m='602230'>is</span> <span m='602670'>the</span> <span
  m='603350'>magnitude</span> <span m='603870'>squared</span> <span
  m='604350'>of</span> <span m='604440'>the</span> <span m='604520'>first</span>
  <span m='604840'>column.</span> <span m='605490'>The</span> <span
  m='605830'>(2, 2)</span> <span m='606050'>entry</span> <span
  m='606980'>is</span> <span m='607080'>the</span> <span
  m='607160'>magnitude</span> <span m='607520'>squared</span> <span
  m='607790'>of</span> <span m='607830'>the</span> <span
  m='607950'>second</span> <span m='608360'>column,</span> <span
  m='608810'>and</span> <span m='608990'>so</span> <span m='609180'>on.</span>
  </p><p><span m='610460'>Now</span> <span m='611940'>what</span> <span
  m='612210'>is</span> <span m='612340'>the</span> <span
  m='612440'>magnitude</span> <span m='612880'>squared</span> <span
  m='613860'>of</span> <span m='614020'>a</span> <span m='614100'>column</span>
  <span m='615030'>of</span> <span m='615360'>an</span> <span
  m='615620'>incidence</span> <span m='615880'>matrix?</span> <span
  m='617040'>Well,</span> <span m='619220'>each</span> <span
  m='623650'>entry</span> <span m='624570'>in</span> <span m='624760'>a</span>
  <span m='624830'>column</span> <span m='625440'>of</span> <span
  m='625590'>an</span> <span m='625680'>incidence</span> <span
  m='626130'>matrix</span> <span m='626940'>is</span> <span
  m='627160'>either</span> <span m='627470'>1,</span> <span
  m='628570'>negative</span> <span m='629040'>1,</span> <span
  m='629630'>or</span> <span m='629690'>0.</span> <span m='630970'>So</span>
  <span m='631120'>when</span> <span m='631300'>we</span> <span
  m='631390'>square</span> <span m='631850'>these</span> <span
  m='632150'>entries,</span> <span m='632590'>we</span> <span
  m='632710'>get</span> <span m='633920'>1's</span> <span m='634310'>or</span>
  <span m='634630'>0's.</span> <span m='635630'>And</span> <span
  m='636460'>when</span> <span m='636650'>we</span> <span m='636810'>add</span>
  <span m='637000'>them</span> <span m='637190'>up,</span> <span
  m='638210'>we</span> <span m='638400'>get</span> <span
  m='638630'>precisely</span> <span m='639140'>a</span> <span
  m='639210'>number</span> <span m='639580'>which</span> <span
  m='639920'>is</span> <span m='640610'>the</span> <span
  m='640740'>nontrivial</span> <span m='641430'>entries</span> <span
  m='643230'>in</span> <span m='643380'>that</span> <span
  m='643540'>column.</span> <span m='644430'>OK?</span> </p><p><span
  m='645450'>So</span> <span m='645670'>the</span> <span
  m='645790'>magnitude</span> <span m='646310'>squared</span> <span
  m='647200'>of</span> <span m='647320'>the</span> <span
  m='647430'>column</span> <span m='647770'>is</span> <span
  m='647860'>the</span> <span m='647930'>number</span> <span
  m='648200'>of</span> <span m='648270'>nontrivial</span> <span
  m='648770'>entries</span> <span m='649140'>in</span> <span
  m='649240'>it.</span> <span m='649970'>But</span> <span m='651290'>if</span>
  <span m='651460'>we</span> <span m='651860'>go</span> <span
  m='652090'>back</span> <span m='652340'>to</span> <span m='652430'>the</span>
  <span m='652520'>matrix</span> <span m='652930'>A,</span> <span
  m='653210'>and</span> <span m='654060'>we</span> <span m='654660'>count</span>
  <span m='655020'>the</span> <span m='655130'>number</span> <span
  m='655510'>of</span> <span m='657660'>non-zero</span> <span
  m='658410'>entries,</span> <span m='661230'>this</span> <span
  m='661490'>is</span> <span m='661620'>precisely</span> <span
  m='662490'>the</span> <span m='662700'>number</span> <span
  m='663540'>of</span> <span m='663840'>edges</span> <span
  m='664680'>that</span> <span m='664980'>connect</span> <span
  m='665580'>with</span> <span m='665740'>a</span> <span m='665900'>node.</span>
  <span m='667220'>OK,</span> <span m='668200'>so</span> <span
  m='669190'>the</span> <span m='669280'>number</span> <span
  m='669520'>of</span> <span m='669590'>edges</span> <span
  m='669840'>that</span> <span m='670310'>connects</span> <span
  m='670860'>with</span> <span m='671340'>each node</span> <span
  m='671440'>is</span> <span m='671640'>called</span> <span
  m='671760'>the</span> <span m='671900'>degree</span> <span
  m='672460'>of</span> <span m='672580'>the</span> <span m='672690'>node.</span>
  <span m='674580'>In</span> <span m='674710'>this</span> <span
  m='674940'>way,</span> <span m='675680'>trace</span> <span
  m='677190'>of</span> <span m='677510'>A</span> <span
  m='677760'>transpose</span> <span m='679524'>A</span> <span
  m='680440'>will</span> <span m='680640'>be</span> <span m='681740'>just</span>
  <span m='682140'>the</span> <span m='682310'>sum</span> <span
  m='683180'>of</span> <span m='683340'>the</span> <span
  m='683440'>degrees</span> <span m='685440'>of</span> <span
  m='685620'>the</span> <span m='685700'>graph</span> <span m='687670'>in</span>
  <span m='687790'>the</span> <span m='687870'>picture.</span> </p><p><span
  m='688600'>So</span> <span m='689540'>we</span> <span m='689720'>have</span>
  <span m='693720'>there</span> <span m='694070'>are 2</span> <span
  m='694220'>edges</span> <span m='694360'>connecting</span> <span
  m='694910'>to</span> <span m='695040'>1,</span> <span m='696130'>so</span>
  <span m='696440'>2,</span> <span m='697410'>plus</span> <span
  m='702700'>3</span> <span m='703070'>edges</span> <span
  m='703950'>connecting</span> <span m='704765'>to</span> <span
  m='705050'>2,</span> <span m='705900'>3</span> <span m='706290'>edges</span>
  <span m='707200'>connecting</span> <span m='707600'>to</span> <span
  m='708000'>3.</span> <span m='708940'>And</span> <span m='709570'>we've</span>
  <span m='709913'>got</span> <span m='710256'>a</span> <span
  m='710600'>2</span> <span m='711630'>for</span> <span m='712410'>the</span>
  <span m='712530'>number</span> <span m='712730'>of</span> <span
  m='712800'>edges</span> <span m='713050'>connecting</span> <span
  m='713510'>to</span> <span m='714040'>4,</span> <span m='714560'>and</span>
  <span m='714820'>2</span> <span m='715470'>for</span> <span
  m='715600'>the</span> <span m='715680'>number</span> <span m='715920'>of
  edges</span> <span m='716060'>connecting</span> <span m='716335'>to</span>
  <span m='716610'>5.</span> <span m='717040'>So</span> <span
  m='717420'>altogether,</span> <span m='720150'>we</span> <span
  m='720280'>get</span> <span m='721320'>12.</span> </p><p><span
  m='724600'>So</span> <span m='725540'>you</span> <span m='725680'>see,</span>
  <span m='726390'>in</span> <span m='726510'>this</span> <span
  m='726640'>problem,</span> <span m='727900'>we</span> <span
  m='728320'>computed</span> <span m='730150'>certain</span> <span
  m='731390'>linear</span> <span m='731800'>algebra</span> <span
  m='732440'>objects</span> <span m='733540'>without</span> <span
  m='734000'>performing</span> <span m='734840'>the</span> <span
  m='735810'>usual</span> <span m='736580'>algebraic</span> <span
  m='737110'>operations,</span> <span m='737980'>but</span> <span
  m='738270'>just</span> <span m='738590'>by</span> <span
  m='739480'>looking</span> <span m='740100'>at</span> <span
  m='740540'>the</span> <span m='740690'>graph</span> <span
  m='741110'>and</span> <span m='741690'>seeing</span> <span
  m='742360'>how</span> <span m='742740'>the</span> <span
  m='742870'>linear</span> <span m='743180'>algebra</span> <span
  m='743850'>is</span> <span m='744110'>encoded</span> <span
  m='744485'>in</span> <span m='744860'>it.</span> <span m='745520'>I</span>
  <span m='745640'>hope</span> <span m='746000'>it</span> <span
  m='746170'>was</span> <span m='746540'>most</span> <span
  m='746720'>illuminating.</span> <span m='748260'>I'll</span> <span
  m='748490'>see</span> <span m='748630'>you</span> <span m='748680'>next</span>
  <span m='748980'>time.</span> </p>
embedded_media:
  - uid: 8141f792821bd4937054023b6ac07fc8
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: h0m2tsmSPTI
  - uid: 68bfdde2dc3c0a462218bcf285e3898b
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: h0m2tsmSPTI
  - uid: 42bb991de9b504873a0d214805139d1d
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/graphs-and-networks/id488155309?i=108454302
  - uid: eda0f7fc352cbbbe879d227a01249a16
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110711_N1_300k.mp4
  - uid: 5f230569e4ee01f8bceca4e7e2cb4f12
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/h0m2tsmSPTI/default.jpg'
  - uid: bbc314fdb0edc68ee5d909e06bc026f0
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: h0m2tsmSPTI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/graphs-networks-incidence-matrices/graphs-and-networks/h0m2tsmSPTI.srt
  - uid: 789f87ed894d05254c8bb49f122d57e4
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: h0m2tsmSPTI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/graphs-networks-incidence-matrices/graphs-and-networks/h0m2tsmSPTI.pdf
  - uid: 99930e5a32a5f461a9975cfc24892b2b
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0830784f10febb462bac412e8d1ce62e
    parent_uid: 5b238858f5183c527f6930c22eead0a5
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
