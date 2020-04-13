---
title: Lagrange Multipliers (3 Variables)
uid: f1908be4ad3f5c171840a903edfbb545
parent_uid: 9ebd1d32024e0a868958b6ad334b76ad
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-41-advanced-example/lagrange-multipliers-3-variables
short_url: lagrange-multipliers-3-variables
inline_embed_id: 30366752lagrangemultipliers(3variables)82048566
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7200'>JOEL LEWIS: Hi.</span> <span m='7660'>Welcome</span> <span
  m='7970'>back</span> <span m='8190'>to</span> <span
  m='8363'>recitation.</span> <span m='9230'>In</span> <span
  m='9570'>lecture,</span> <span m='9720'>you've</span> <span
  m='9920'>been</span> <span m='10040'>learning</span> <span
  m='10330'>about</span> <span m='10560'>using</span> <span m='10850'>the</span>
  <span m='10950'>method</span> <span m='11220'>of</span> <span
  m='11300'>Lagrange</span> <span m='11780'>multipliers</span> <span
  m='12750'>to</span> <span m='13120'>optimize</span> <span
  m='13340'>functions</span> <span m='13860'>of</span> <span
  m='13970'>several</span> <span m='14270'>variables</span> <span
  m='14800'>given</span> <span m='15030'>a</span> <span
  m='15090'>constraint.</span> <span m='15950'>So</span> <span
  m='16390'>here's</span> <span m='16680'>a</span> <span
  m='16750'>problem</span> <span m='17220'>that</span> <span
  m='17930'>you</span> <span m='18030'>can</span> <span
  m='18340'>practice</span> <span m='18615'>this</span> <span
  m='18890'>method</span> <span m='19160'>on.</span> </p><p><span
  m='19630'>So</span> <span m='20240'>I've</span> <span m='20410'>got</span>
  <span m='20540'>a</span> <span m='20590'>function</span> <span
  m='21060'>f</span> <span m='21300'>of</span> <span m='21400'>x,</span> <span
  m='21670'>y,</span> <span m='21920'>z</span> <span m='22310'>equals</span>
  <span m='22700'>x</span> <span m='22940'>squared</span> <span
  m='23310'>plus</span> <span m='23590'>x</span> <span m='24290'>plus</span>
  <span m='24570'>2</span> <span m='24800'>y</span> <span
  m='25060'>squared</span> <span m='25550'>plus</span> <span m='25790'>3</span>
  <span m='26000'>z</span> <span m='26290'>squared.</span> <span
  m='26970'>And</span> <span m='27200'>what</span> <span m='27290'>I'd</span>
  <span m='27380'>like</span> <span m='27570'>you</span> <span
  m='27670'>to</span> <span m='27760'>do</span> <span m='27960'>is</span> <span
  m='28120'>find</span> <span m='28340'>the</span> <span
  m='28400'>maximum</span> <span m='28980'>and</span> <span
  m='29150'>minimum</span> <span m='29490'>values</span> <span
  m='29990'>that</span> <span m='30080'>this</span> <span
  m='30170'>function</span> <span m='30540'>takes</span> <span
  m='31120'>as</span> <span m='31310'>the</span> <span m='31390'>point</span>
  <span m='31700'>(x,</span> <span m='31950'>y,</span> <span m='32240'>z)</span>
  <span m='32850'>moves</span> <span m='33260'>around</span> <span
  m='33590'>the</span> <span m='33690'>unit</span> <span m='34100'>sphere</span>
  <span m='34690'>x</span> <span m='34980'>squared</span> <span
  m='35100'>plus</span> <span m='35400'>y</span> <span m='35690'>squared</span>
  <span m='36050'>plus</span> <span m='36110'>z</span> <span
  m='36190'>squared</span> <span m='36480'>equals</span> <span
  m='36790'>1.</span> <span m='37720'>So</span> <span m='37815'>to</span> <span
  m='37910'>optimize</span> <span m='38520'>this</span> <span
  m='38700'>function</span> <span m='39440'>given</span> <span
  m='39670'>the</span> <span m='39750'>constraint</span> <span
  m='40200'>x</span> <span m='40415'>squared</span> <span m='40630'>plus</span>
  <span m='40830'>y</span> <span m='41000'>squared</span> <span
  m='41280'>plus</span> <span m='41410'>z</span> <span m='41560'>squared</span>
  <span m='41810'>equals</span> <span m='42070'>1.</span> </p><p><span
  m='42435'>So</span> <span m='42800'>why</span> <span m='42935'>don't</span>
  <span m='43070'>you</span> <span m='43140'>pause</span> <span
  m='43290'>the</span> <span m='43440'>video,</span> <span m='43920'>take</span>
  <span m='44150'>some</span> <span m='44290'>time</span> <span
  m='44570'>to</span> <span m='44660'>work</span> <span m='44890'>that</span>
  <span m='45070'>out,</span> <span m='45570'>come</span> <span
  m='45770'>back,</span> <span m='46000'>and</span> <span m='46090'>we</span>
  <span m='46190'>can</span> <span m='46310'>work</span> <span
  m='46490'>it</span> <span m='46560'>out</span> <span
  m='46750'>together.</span> </p><p><span m='55410'>Hopefully</span> <span
  m='55770'>you</span> <span m='55840'>had</span> <span m='56020'>some</span>
  <span m='56160'>luck</span> <span m='56400'>working</span> <span
  m='56680'>on</span> <span m='56810'>this</span> <span
  m='56960'>problem.</span> <span m='57660'>Let's</span> <span
  m='57900'>have</span> <span m='58060'>a</span> <span m='58130'>go</span> <span
  m='58330'>at</span> <span m='58500'>it.</span> </p><p><span
  m='58910'>So</span> <span m='59620'>remember</span> <span
  m='60150'>that</span> <span m='60400'>the</span> <span m='60480'>method</span>
  <span m='60820'>of</span> <span m='60910'>Lagrange</span> <span
  m='61340'>multipliers--</span> <span m='62100'>in</span> <span
  m='62210'>order</span> <span m='62410'>to</span> <span m='62540'>apply</span>
  <span m='62910'>it--</span> <span m='63240'>what</span> <span
  m='63420'>it</span> <span m='63560'>says</span> <span m='63800'>is</span>
  <span m='63920'>that</span> <span m='64020'>when</span> <span
  m='64140'>you</span> <span m='64220'>have</span> <span m='64520'>a</span>
  <span m='64690'>function</span> <span m='65990'>being</span> <span
  m='66380'>optimized</span> <span m='67000'>on</span> <span
  m='67320'>some</span> <span m='67690'>constraint</span> <span
  m='68520'>condition,</span> <span m='69600'>what</span> <span
  m='70000'>you</span> <span m='70100'>do</span> <span m='70330'>to</span> <span
  m='70472'>find</span> <span m='70900'>the</span> <span m='71020'>points</span>
  <span m='71510'>where</span> <span m='71690'>the</span> <span
  m='71800'>function</span> <span m='72230'>could</span> <span
  m='72400'>be</span> <span m='72520'>maximum</span> <span m='73070'>or</span>
  <span m='73180'>minimum</span> <span m='74010'>is</span> <span
  m='74690'>that</span> <span m='74860'>first</span> <span m='75610'>you</span>
  <span m='75820'>look</span> <span m='76070'>for</span> <span
  m='76230'>points</span> <span m='76870'>where</span> <span
  m='77500'>the</span> <span m='77640'>gradient</span> <span m='78310'>of</span>
  <span m='78430'>your</span> <span m='78570'>objective</span> <span
  m='79110'>function</span> <span m='79860'>is</span> <span
  m='80140'>parallel</span> <span m='80560'>to</span> <span m='80640'>the</span>
  <span m='80770'>gradient</span> <span m='81410'>of</span> <span
  m='81680'>your</span> <span m='82350'>constraint</span> <span
  m='82850'>function.</span> </p><p><span m='83380'>So</span> <span
  m='83570'>what</span> <span m='83700'>that</span> <span m='83860'>means</span>
  <span m='84020'>is</span> <span m='84180'>you</span> <span
  m='84300'>take</span> <span m='84840'>the</span> <span
  m='85060'>partial</span> <span m='85460'>derivatives</span> <span
  m='86020'>f_x,</span> <span m='86580'>f_y,</span> <span m='87110'>f_z,</span>
  <span m='87910'>and</span> <span m='88130'>you</span> <span
  m='88230'>say</span> <span m='88560'>f_x</span> <span m='88940'>has</span>
  <span m='89090'>to</span> <span m='89170'>be</span> <span
  m='89240'>equal</span> <span m='89420'>to</span> <span m='89510'>lambda</span>
  <span m='90030'>times</span> <span m='90370'>g_x,</span> <span
  m='90770'>f_y</span> <span m='91210'>has</span> <span m='91360'>to</span>
  <span m='91496'>be</span> <span m='91633'>equal</span> <span
  m='91770'>to</span> <span m='91870'>lambda</span> <span m='92280'>times</span>
  <span m='92550'>g_y,</span> <span m='93120'>and</span> <span
  m='93320'>f_z</span> <span m='93660'>has</span> <span m='93840'>to</span>
  <span m='93910'>be</span> <span m='94030'>equal</span> <span
  m='94220'>to</span> <span m='94290'>lambda</span> <span m='94720'>times</span>
  <span m='95020'>g_z,</span> <span m='95590'>for</span> <span
  m='95780'>some</span> <span m='96070'>lambda.</span> <span
  m='97000'>And</span> <span m='97280'>then</span> <span m='97380'>you</span>
  <span m='97560'>solve</span> <span m='97770'>that</span> <span
  m='97970'>system</span> <span m='98280'>together</span> <span
  m='99000'>with</span> <span m='99190'>the</span> <span
  m='99310'>constraint</span> <span m='99870'>equation.</span> <span
  m='100720'>And</span> <span m='100890'>so</span> <span m='100990'>the</span>
  <span m='101080'>points</span> <span m='103040'>that</span> <span
  m='103150'>are</span> <span m='103250'>the</span> <span
  m='103440'>solutions</span> <span m='104260'>of</span> <span
  m='104380'>that</span> <span m='104580'>system</span> <span
  m='104870'>of</span> <span m='104960'>equations,</span> <span
  m='105880'>those</span> <span m='106230'>points</span> <span
  m='106750'>are</span> <span m='107020'>your</span> <span
  m='107670'>points</span> <span m='107950'>that</span> <span
  m='108050'>you</span> <span m='108140'>have</span> <span m='108250'>to</span>
  <span m='108340'>check</span> <span m='108670'>for</span> <span
  m='108830'>whether</span> <span m='109110'>they're</span> <span
  m='109280'>the</span> <span m='109330'>maximum</span> <span
  m='109810'>or</span> <span m='109900'>the</span> <span
  m='110020'>minimum.</span> </p><p><span m='110570'>And</span> <span
  m='110800'>also,</span> <span m='111310'>sometimes</span> <span
  m='111870'>you</span> <span m='111960'>have</span> <span
  m='112440'>some</span> <span m='112680'>boundary</span> <span
  m='112965'>to</span> <span m='113250'>your</span> <span
  m='113410'>region</span> <span m='113760'>and</span> <span
  m='113810'>you</span> <span m='113860'>have</span> <span m='113980'>to</span>
  <span m='114070'>check</span> <span m='114340'>that</span> <span
  m='114520'>as</span> <span m='114620'>well.</span> <span m='114940'>So</span>
  <span m='115090'>in</span> <span m='115150'>this</span> <span
  m='115310'>case,</span> <span m='115770'>the</span> <span
  m='115990'>sphere</span> <span m='116840'>doesn't</span> <span
  m='117130'>have</span> <span m='117290'>boundary.</span> <span
  m='117850'>Right?</span> <span m='118670'>So</span> <span m='118820'>we</span>
  <span m='118950'>don't</span> <span m='119130'>have</span> <span
  m='119260'>any</span> <span m='119420'>boundary</span> <span
  m='119780'>conditions</span> <span m='120280'>to</span> <span
  m='120455'>check.</span> <span m='120710'>So</span> <span
  m='120900'>we're</span> <span m='121090'>going</span> <span
  m='121300'>to</span> <span m='121360'>have</span> <span m='121470'>a</span>
  <span m='121530'>really</span> <span m='121740'>straightforward</span> <span
  m='122410'>problem</span> <span m='122770'>to</span> <span
  m='122880'>solve</span> <span m='123340'>where</span> <span
  m='123550'>we</span> <span m='123670'>just</span> <span m='123880'>have</span>
  <span m='124020'>to</span> <span m='124120'>look</span> <span
  m='124760'>at</span> <span m='124900'>the</span> <span
  m='124990'>partial</span> <span m='125320'>derivatives.</span> <span
  m='125970'>So</span> <span m='126150'>let's</span> <span
  m='126340'>write</span> <span m='126610'>down</span> <span
  m='126870'>that</span> <span m='127010'>system</span> <span
  m='127185'>of</span> <span m='127360'>equations</span> <span
  m='127920'>that</span> <span m='128010'>we</span> <span m='128100'>have</span>
  <span m='128220'>to</span> <span m='128330'>solve.</span> </p><p><span
  m='129070'>So</span> <span m='129220'>the</span> <span
  m='129330'>partial</span> <span m='129660'>derivative</span> <span
  m='130120'>of</span> <span m='130240'>f</span> <span m='130500'>with</span>
  <span m='130620'>respect</span> <span m='131010'>to</span> <span
  m='131080'>x</span> <span m='131710'>is</span> <span m='132100'>going</span>
  <span m='132195'>to</span> <span m='132290'>be</span> <span
  m='132430'>2x</span> <span m='133030'>plus</span> <span m='133330'>1.</span>
  <span m='134810'>So</span> <span m='134940'>we</span> <span
  m='135040'>have</span> <span m='135170'>to</span> <span
  m='135260'>solve</span> <span m='135560'>the</span> <span
  m='135640'>system</span> <span m='136430'>2x</span> <span
  m='137140'>plus</span> <span m='137420'>1 equals--</span> <span
  m='139090'>and</span> <span m='139270'>the</span> <span
  m='139330'>partial</span> <span m='139720'>derivative</span> <span
  m='140560'>of</span> <span m='140730'>our</span> <span
  m='140870'>constraint</span> <span m='142720'>with</span> <span
  m='142970'>respect</span> <span m='143330'>to</span> <span m='143457'>x</span>
  <span m='143585'>is</span> <span m='143840'>2x,</span> <span
  m='144610'>so</span> <span m='145460'>2x</span> <span m='145760'>plus</span>
  <span m='145910'>1</span> <span m='146110'>has</span> <span m='146300'>to
  equal</span> <span m='146650'>lambda</span> <span m='147470'>times</span>
  <span m='147820'>2x.</span> <span m='148660'>That's</span> <span
  m='148900'>what</span> <span m='149020'>we</span> <span m='149120'>get</span>
  <span m='149760'>from</span> <span m='149910'>the</span> <span
  m='149980'>x-partial</span> <span m='150860'>derivatives.</span> </p><p><span
  m='151700'>How</span> <span m='151810'>about</span> <span
  m='151960'>from</span> <span m='152090'>the</span> <span
  m='152190'>y-partial</span> <span m='152890'>derivatives?</span> <span
  m='153760'>The</span> <span m='153910'>y-partial</span> <span
  m='154640'>derivative</span> <span m='154730'>of</span> <span
  m='155200'>f</span> <span m='155780'>is</span> <span m='156040'>going</span>
  <span m='156170'>to</span> <span m='156230'>be</span> <span
  m='156630'>4y.</span> <span m='159550'>So</span> <span m='159700'>that</span>
  <span m='159870'>has</span> <span m='160040'>to</span> <span
  m='160130'>be</span> <span m='160220'>equal</span> <span m='160370'>to</span>
  <span m='160560'>lambda</span> <span m='161450'>and</span> <span
  m='161710'>the</span> <span m='161770'>y-partial</span> <span
  m='162580'>derivative</span> <span m='163510'>of</span> <span
  m='164300'>the</span> <span m='164450'>constraint</span> <span
  m='165000'>equation</span> <span m='165395'>which</span> <span
  m='165790'>is</span> <span m='166560'>2y.</span> </p><p><span
  m='169750'>And</span> <span m='170020'>the</span> <span
  m='170090'>z-partial</span> <span m='170840'>derivative</span> <span
  m='170930'>of</span> <span m='171310'>f</span> <span m='172170'>is</span>
  <span m='172380'>6z.</span> <span m='176110'>So</span> <span
  m='176270'>6z</span> <span m='176980'>has</span> <span m='177200'>to</span>
  <span m='177300'>be</span> <span m='177430'>equal</span> <span
  m='177620'>to</span> <span m='177710'>lambda</span> <span
  m='178690'>times,</span> <span m='179145'>well,</span> <span
  m='180280'>the</span> <span m='180615'>z-partial</span> <span
  m='181360'>derivative</span> <span m='181810'>of</span> <span
  m='181930'>the</span> <span m='182060'>constraint</span> <span
  m='182530'>function,</span> <span m='182820'>which</span> <span
  m='183110'>is</span> <span m='183330'>2z.</span> <span m='186150'>And</span>
  <span m='187450'>we</span> <span m='187620'>have</span> <span
  m='187750'>the</span> <span m='187840'>last</span> <span
  m='188210'>equation</span> <span m='188370'>x</span> <span
  m='188510'>squared</span> <span m='189480'>plus</span> <span
  m='189760'>y</span> <span m='190160'>squared</span> <span
  m='190960'>plus</span> <span m='191340'>z</span> <span
  m='191670'>squared</span> <span m='192710'>equals</span> <span
  m='193070'>1.</span> </p><p><span m='193780'>So</span> <span
  m='193900'>we</span> <span m='194010'>get</span> <span m='194160'>four</span>
  <span m='194450'>equations</span> <span m='195090'>in</span> <span
  m='195260'>our</span> <span m='195570'>variables</span> <span
  m='196250'>x,</span> <span m='196480'>y,</span> <span m='196700'>and</span>
  <span m='196850'>z,</span> <span m='197150'>plus</span> <span
  m='197380'>this</span> <span m='197570'>new</span> <span
  m='197710'>parameter</span> <span m='198250'>lambda</span> <span
  m='198540'>that</span> <span m='198820'>we</span> <span
  m='198920'>introduced.</span> <span m='199750'>And</span> <span
  m='199890'>we</span> <span m='199990'>want</span> <span m='200120'>to</span>
  <span m='200180'>solve</span> <span m='200540'>these</span> <span
  m='200730'>to</span> <span m='200820'>find</span> <span m='201080'>the</span>
  <span m='201140'>points</span> <span m='201520'>x,</span> <span
  m='201770'>y,</span> <span m='201990'>and</span> <span m='202130'>z</span>
  <span m='202630'>at</span> <span m='202810'>which</span> <span
  m='203260'>these</span> <span m='203690'>equations</span> <span
  m='204200'>are</span> <span m='204280'>all</span> <span
  m='204500'>satisfied.</span> <span m='205240'>And</span> <span
  m='205480'>then,</span> <span m='205720'>once</span> <span
  m='205970'>we</span> <span m='206090'>get</span> <span m='206290'>those</span>
  <span m='206550'>points,</span> <span m='207120'>we</span> <span
  m='207270'>have</span> <span m='207360'>to</span> <span m='207470'>test</span>
  <span m='207880'>them</span> <span m='208260'>to</span> <span
  m='208370'>see</span> <span m='208600'>whether</span> <span
  m='208900'>they</span> <span m='208985'>are</span> <span m='209070'>the</span>
  <span m='209130'>maximum</span> <span m='209650'>or</span> <span
  m='209770'>the</span> <span m='209870'>minimum</span> <span
  m='210260'>or</span> <span m='210770'>neither.</span> </p><p><span
  m='213000'>So</span> <span m='213650'>OK.</span> <span m='213960'>So</span>
  <span m='214070'>we</span> <span m='214180'>have</span> <span
  m='214340'>this</span> <span m='214440'>system</span> <span
  m='214800'>of</span> <span m='214870'>equations.</span> <span
  m='215350'>Now,</span> <span m='215520'>this</span> <span m='215670'>is</span>
  <span m='215740'>a</span> <span m='215810'>little</span> <span
  m='216020'>bit</span> <span m='216200'>complicated.</span> <span
  m='216720'>It's</span> <span m='216840'>not</span> <span m='217200'>a</span>
  <span m='217260'>system</span> <span m='217600'>of</span> <span
  m='217720'>linear</span> <span m='218100'>equations.</span> <span
  m='219500'>So</span> <span m='219750'>we</span> <span m='219850'>need</span>
  <span m='219895'>to</span> <span m='219940'>think</span> <span
  m='220260'>about</span> <span m='220490'>ways</span> <span
  m='220900'>that</span> <span m='221010'>we</span> <span m='221130'>can</span>
  <span m='221300'>solve</span> <span m='221640'>it.</span> <span
  m='221880'>And</span> <span m='222290'>one</span> <span
  m='222680'>thing</span> <span m='222940'>that</span> <span m='223070'>I</span>
  <span m='223150'>think</span> <span m='223340'>we</span> <span
  m='223450'>can</span> <span m='223570'>do</span> <span m='223680'>here,</span>
  <span m='224000'>is</span> <span m='224070'>if</span> <span
  m='224160'>you</span> <span m='224280'>look</span> <span m='224480'>at</span>
  <span m='224560'>the</span> <span m='224650'>second</span> <span
  m='225040'>and</span> <span m='225210'>third</span> <span
  m='225450'>equations,</span> <span m='226660'>you</span> <span
  m='226920'>see</span> <span m='227240'>that</span> <span m='227430'>in</span>
  <span m='227560'>the</span> <span m='227650'>second</span> <span
  m='228020'>equation,</span> <span m='228780'>everything</span> <span
  m='229290'>has</span> <span m='229460'>a</span> <span m='229540'>factor</span>
  <span m='230020'>of</span> <span m='230180'>y</span> <span
  m='230700'>in</span> <span m='230850'>it.</span> <span m='231310'>So</span>
  <span m='232010'>either</span> <span m='232820'>y</span> <span
  m='233090'>is</span> <span m='233360'>equal</span> <span m='233620'>to</span>
  <span m='233700'>0,</span> <span m='234220'>or</span> <span
  m='234460'>we</span> <span m='234590'>can</span> <span
  m='234760'>divide</span> <span m='235220'>by</span> <span
  m='235600'>it.</span> </p><p><span m='235980'>So</span> <span
  m='236120'>from</span> <span m='236260'>the</span> <span
  m='236350'>second</span> <span m='236700'>equation,</span> <span
  m='242390'>we</span> <span m='242500'>have</span> <span m='242880'>that</span>
  <span m='243060'>either</span> <span m='243840'>y</span> <span
  m='244310'>is</span> <span m='244445'>equal</span> <span m='244580'>to</span>
  <span m='244670'>0,</span> <span m='245660'>or</span> <span
  m='246000'>we</span> <span m='246110'>can</span> <span
  m='246270'>divide</span> <span m='246780'>by</span> <span m='247010'>y,</span>
  <span m='250220'>in</span> <span m='250330'>which</span> <span
  m='250530'>case</span> <span m='250730'>we</span> <span m='250810'>get</span>
  <span m='250970'>lambda</span> <span m='251290'>is</span> <span
  m='251420'>equal</span> <span m='251620'>to</span> <span m='251710'>2.</span>
  <span m='252590'>Similarly,</span> <span m='253220'>from</span> <span
  m='253380'>the</span> <span m='253460'>third</span> <span
  m='253770'>equation,</span> <span m='254400'>we</span> <span
  m='254580'>have</span> <span m='254730'>that</span> <span
  m='255000'>either</span> <span m='255360'>z</span> <span m='255690'>is</span>
  <span m='255820'>equal</span> <span m='256050'>to</span> <span
  m='256130'>0,</span> <span m='257100'>or</span> <span m='257330'>we</span>
  <span m='257470'>can</span> <span m='257620'>divide</span> <span
  m='258060'>by</span> <span m='258270'>z</span> <span m='258610'>and</span>
  <span m='258760'>we</span> <span m='258840'>get</span> <span
  m='259010'>lambda</span> <span m='259310'>is</span> <span
  m='259440'>equal</span> <span m='259650'>to</span> <span m='259740'>3.</span>
  <span m='261000'>So</span> <span m='261090'>from</span> <span
  m='261882'>the</span> <span m='262500'>third</span> <span
  m='263304'>equation,</span> <span m='264110'>we</span> <span
  m='264510'>have</span> <span m='265080'>z</span> <span
  m='265485'>equals</span> <span m='266180'>0</span> <span m='267316'>or</span>
  <span m='269111'>lambda</span> <span m='269570'>equals</span> <span
  m='269870'>3.</span> </p><p><span m='271750'>So</span> <span
  m='271950'>now</span> <span m='272100'>we</span> <span m='272250'>have</span>
  <span m='272950'>a</span> <span m='273080'>bunch</span> <span
  m='273300'>of</span> <span m='273400'>possibilities,</span> <span
  m='274260'>right?</span> <span m='274570'>So</span> <span
  m='274760'>either</span> <span m='275390'>we</span> <span
  m='275640'>have</span> <span m='276260'>y</span> <span
  m='276810'>equals</span> <span m='276985'>z</span> <span
  m='277160'>equals</span> <span m='277670'>0,</span> <span m='278470'>or</span>
  <span m='278780'>we</span> <span m='278910'>have</span> <span
  m='279130'>y</span> <span m='279380'>equals</span> <span m='279720'>0</span>
  <span m='280110'>and</span> <span m='280230'>lambda</span> <span
  m='280500'>equals</span> <span m='280850'>3,</span> <span m='281980'>or</span>
  <span m='282250'>we</span> <span m='282420'>have</span> <span
  m='283290'>lambda</span> <span m='283680'>equals</span> <span
  m='284100'>2</span> <span m='284370'>and</span> <span m='284475'>z</span>
  <span m='284580'>equals</span> <span m='285000'>0.</span> <span m='285980'>Or,
  well,</span> <span m='286830'>the</span> <span m='287060'>other</span> <span
  m='287260'>possibility</span> <span m='287800'>would</span> <span
  m='287940'>be</span> <span m='288030'>lambda</span> <span
  m='288320'>equals</span> <span m='288580'>2</span> <span m='288810'>and</span>
  <span m='289060'>lambda</span> <span m='289340'>equals</span> <span
  m='289660'>3,</span> <span m='289910'>but</span> <span m='290070'>that</span>
  <span m='290270'>can't</span> <span m='290450'>happen.</span> <span
  m='290800'>So</span> <span m='290930'>we</span> <span m='291040'>have</span>
  <span m='291180'>three</span> <span m='291430'>possibilities.</span> <span
  m='292490'>Three</span> <span m='292700'>different</span> <span
  m='292980'>ways</span> <span m='293175'>that</span> <span
  m='293370'>this</span> <span m='293510'>could</span> <span
  m='293650'>be</span> <span m='293770'>satisfied.</span> <span
  m='294570'>So</span> <span m='294770'>let's</span> <span m='295230'>go</span>
  <span m='295410'>over</span> <span m='295570'>here</span> <span
  m='295970'>and</span> <span m='296290'>write</span> <span
  m='296520'>down</span> <span m='296730'>what</span> <span
  m='296940'>those</span> <span m='297840'>possibilities</span> <span
  m='298490'>are.</span> </p><p><span m='298750'>So</span> <span m='300550'>case
  one, or maybe I'll call it case a. So the case</span> <span
  m='300920'>a</span> <span m='302820'>is</span> <span m='302970'>when</span>
  <span m='303570'>y</span> <span m='304090'>is</span> <span
  m='304210'>equal</span> <span m='304460'>to</span> <span m='304660'>z</span>
  <span m='305570'>is</span> <span m='305700'>equal</span> <span
  m='305815'>to</span> <span m='305930'>0.</span> <span m='306190'>So</span>
  <span m='306450'>when</span> <span m='306836'>y</span> <span
  m='307222'>is</span> <span m='307610'>equal</span> <span m='307790'>to</span>
  <span m='307910'>z</span> <span m='308250'>is</span> <span
  m='308480'>equal</span> <span m='308820'>to</span> <span m='309070'>0--</span>
  <span m='309210'>OK,</span> <span m='309460'>we</span> <span
  m='309680'>need</span> <span m='310000'>to</span> <span m='310070'>find</span>
  <span m='310370'>x</span> <span m='310770'>still.</span> <span
  m='311360'>So</span> <span m='311520'>let's</span> <span
  m='311700'>look</span> <span m='311980'>back</span> <span m='312230'>at</span>
  <span m='312300'>our</span> <span m='312460'>equations.</span> </p><p><span
  m='313690'>And</span> <span m='313930'>when</span> <span m='314040'>y</span>
  <span m='314460'>is</span> <span m='314576'>equal</span> <span
  m='314693'>to</span> <span m='314810'>z</span> <span m='315100'>is</span>
  <span m='315200'>equal</span> <span m='315300'>to</span> <span m='315400'>0,
  well,</span> <span m='316110'>we</span> <span m='316220'>can</span> <span
  m='316370'>solve</span> <span m='316810'>our</span> <span
  m='316940'>constraint</span> <span m='317490'>equation</span> <span
  m='317920'>for</span> <span m='318080'>x.</span> <span m='318670'>When</span>
  <span m='318910'>y</span> <span m='319170'>equals</span> <span
  m='319340'>z</span> <span m='319510'>equals</span> <span m='319870'>0,</span>
  <span m='320450'>we</span> <span m='320620'>have</span> <span
  m='320695'>that</span> <span m='320770'>x</span> <span
  m='321110'>squared</span> <span m='321400'>equals</span> <span
  m='321690'>1.</span> <span m='322220'>So</span> <span m='322410'>there</span>
  <span m='322520'>are</span> <span m='322580'>two</span> <span
  m='322820'>possibilities.</span> <span m='323460'>The</span> <span
  m='323550'>point</span> <span m='324430'>(1,</span> <span m='324780'>0,</span>
  <span m='325070'>0),</span> <span m='325430'>and</span> <span
  m='325580'>the</span> <span m='325650'>point</span> <span
  m='326290'>minus</span> <span m='326630'>1,</span> <span m='326860'>0,</span>
  <span m='327130'>0.</span> <span m='327410'>So this gives us,</span> <span
  m='330030'>in</span> <span m='330130'>this</span> <span
  m='330310'>case,</span> <span m='330640'>we</span> <span
  m='330730'>have</span> <span m='331440'>x</span> <span
  m='331900'>equals</span> <span m='332210'>1</span> <span m='333490'>or</span>
  <span m='333720'>x</span> <span m='334080'>equals</span> <span
  m='334510'>minus</span> <span m='334930'>1.</span> <span m='336160'>So</span>
  <span m='336326'>that</span> <span m='336493'>gives</span> <span
  m='336660'>us</span> <span m='336820'>the</span> <span
  m='336920'>points</span> <span m='337720'>(1,</span> <span
  m='338100'>0,</span> <span m='338560'>0)</span> <span m='339600'>and</span>
  <span m='339930'>minus</span> <span m='340410'>1,</span> <span
  m='340980'>0,</span> <span m='341400'>0</span> <span m='341715'>that</span>
  <span m='342030'>we're</span> <span m='342210'>going</span> <span
  m='342290'>to</span> <span m='342370'>have</span> <span m='342520'>to</span>
  <span m='342600'>check</span> <span m='342910'>at</span> <span
  m='342990'>the</span> <span m='343090'>end.</span> <span m='343960'>All</span>
  <span m='344115'>right.</span> </p><p><span m='344270'>So</span> <span
  m='344350'>the</span> <span m='344420'>second</span> <span
  m='344820'>case</span> <span m='345890'>is</span> <span m='346080'>we</span>
  <span m='346190'>could</span> <span m='346365'>have</span> <span
  m='346540'>y</span> <span m='347330'>equal</span> <span m='347600'>to</span>
  <span m='347670'>0</span> <span m='349540'>and</span> <span
  m='349730'>lambda</span> <span m='351080'>equal</span> <span
  m='351360'>to</span> <span m='351460'>3.</span> <span m='352880'>So</span>
  <span m='353050'>in</span> <span m='353110'>this</span> <span
  m='353270'>case,</span> <span m='353480'>let's</span> <span
  m='353680'>go</span> <span m='353780'>back</span> <span m='354510'>to</span>
  <span m='354670'>our</span> <span m='355120'>equations</span> <span
  m='355670'>again.</span> <span m='356240'>So</span> <span
  m='357890'>from</span> <span m='358120'>lambda</span> <span
  m='358460'>equals</span> <span m='359030'>3,</span> <span m='360030'>we</span>
  <span m='360260'>have</span> <span m='360480'>in</span> <span
  m='360540'>our</span> <span m='360670'>first</span> <span
  m='361150'>equation</span> <span m='362020'>that</span> <span
  m='362230'>2x</span> <span m='362680'>plus</span> <span m='362960'>1</span>
  <span m='363550'>equals</span> <span m='363930'>6x.</span> <span
  m='365250'>So</span> <span m='365460'>1</span> <span m='365880'>equals</span>
  <span m='366270'>4x</span> <span m='366990'>or</span> <span
  m='367110'>x</span> <span m='367400'>equals</span> <span
  m='367710'>1/4.</span> <span m='369180'>So</span> <span m='369290'>this</span>
  <span m='369450'>implies</span> <span m='370590'>over</span> <span
  m='370850'>here</span> <span m='371090'>that</span> <span m='371270'>x</span>
  <span m='372000'>equals</span> <span m='372420'>1/4.</span> </p><p><span
  m='373600'>And</span> <span m='373920'>now,</span> <span m='374670'>we</span>
  <span m='374840'>still</span> <span m='375060'>need</span> <span
  m='375210'>to</span> <span m='375290'>find</span> <span m='375790'>z.</span>
  <span m='376510'>So</span> <span m='376625'>if</span> <span
  m='376740'>we</span> <span m='376880'>go</span> <span m='377050'>back</span>
  <span m='377380'>to</span> <span m='378870'>our</span> <span
  m='379520'>constraint</span> <span m='380200'>equation</span> <span
  m='380720'>here,</span> <span m='381190'>we</span> <span
  m='381420'>have</span> <span m='381590'>that</span> <span m='381727'>x</span>
  <span m='381865'>is</span> <span m='382140'>a</span> <span
  m='382260'>quarter</span> <span m='383270'>and</span> <span
  m='383540'>y</span> <span m='383800'>is</span> <span m='384060'>0.</span>
  <span m='385400'>So</span> <span m='385640'>that</span> <span
  m='385860'>means</span> <span m='386470'>1/16</span> <span
  m='387440'>plus</span> <span m='387700'>z</span> <span
  m='387870'>squared</span> <span m='388240'>equals</span> <span
  m='388520'>1.</span> <span m='389290'>So</span> <span m='389480'>z</span>
  <span m='389640'>has</span> <span m='389880'>to</span> <span
  m='389980'>be</span> <span m='390470'>the</span> <span
  m='390590'>square</span> <span m='390930'>root</span> <span
  m='391170'>of</span> <span m='391310'>15/16,</span> <span
  m='392260'>plus</span> <span m='392490'>or</span> <span
  m='392590'>minus.</span> <span m='395170'>And</span> <span m='395550'>z</span>
  <span m='396650'>is</span> <span m='396793'>equal</span> <span
  m='396936'>to</span> <span m='397080'>plus</span> <span m='397290'>or</span>
  <span m='397500'>minus--</span> <span m='397930'>so that</span> <span
  m='398300'>we</span> <span m='398410'>can</span> <span m='398530'>also</span>
  <span m='398760'>write</span> <span m='398886'>that</span> <span
  m='399013'>as</span> <span m='399140'>the</span> <span
  m='399290'>square</span> <span m='399440'>root</span> <span
  m='399590'>of</span> <span m='399740'>15</span> <span m='400640'>over</span>
  <span m='400910'>4.</span> </p><p><span m='401470'>So</span> <span
  m='401650'>this</span> <span m='401810'>also</span> <span
  m='402100'>gives</span> <span m='402330'>us</span> <span m='402490'>two</span>
  <span m='402640'>points</span> <span m='403010'>to</span> <span
  m='403110'>check.</span> <span m='403780'>The</span> <span
  m='404020'>points</span> <span m='404350'>are</span> <span
  m='404550'>1/4,</span> <span m='406070'>0,</span> <span m='407306'>the</span>
  <span m='407720'>square</span> <span m='407910'>root</span> <span
  m='408005'>of</span> <span m='408100'>15</span> <span m='409440'>over</span>
  <span m='409660'>4.</span> <span m='410930'>And</span> <span
  m='412410'>1/4,</span> <span m='413930'>0,</span> <span
  m='415230'>minus</span> <span m='415620'>square</span> <span
  m='416025'>root</span> <span m='416430'>of</span> <span m='416835'>15</span>
  <span m='417240'>over</span> <span m='417530'>4.</span> </p><p><span
  m='418520'>And</span> <span m='419170'>finally,</span> <span
  m='420100'>we</span> <span m='420230'>have</span> <span m='420340'>our</span>
  <span m='420450'>third</span> <span m='420890'>case.</span> <span
  m='421250'>So</span> <span m='421440'>our</span> <span m='421630'>third</span>
  <span m='421960'>case</span> <span m='422620'>is</span> <span
  m='422910'>when</span> <span m='423790'>lambda</span> <span
  m='424850'>is</span> <span m='424970'>equal</span> <span m='425180'>to</span>
  <span m='425350'>2</span> <span m='426500'>and</span> <span
  m='426870'>z</span> <span m='427230'>is</span> <span m='427420'>equal</span>
  <span m='427620'>to</span> <span m='427670'>0.</span> <span
  m='429300'>So</span> <span m='429510'>again,</span> <span
  m='430730'>let's</span> <span m='430960'>go</span> <span
  m='431090'>back</span> <span m='431390'>over</span> <span m='431940'>to</span>
  <span m='432090'>our</span> <span m='432320'>equation.</span> <span
  m='432810'>So</span> <span m='432945'>when</span> <span
  m='433080'>lambda</span> <span m='433480'>equals</span> <span
  m='433820'>2</span> <span m='434620'>in</span> <span m='434770'>the</span>
  <span m='434850'>first</span> <span m='435170'>equation,</span> <span
  m='435590'>we</span> <span m='435720'>have</span> <span m='436180'>2x</span>
  <span m='436610'>plus</span> <span m='436930'>1</span> <span
  m='437280'>equals</span> <span m='437670'>4x.</span> <span
  m='438690'>So</span> <span m='439040'>2x</span> <span m='439490'>equals</span>
  <span m='439810'>1</span> <span m='440060'>or</span> <span m='440190'>x</span>
  <span m='440325'>is</span> <span m='440730'>1/2.</span> <span
  m='441930'>So</span> <span m='442060'>this</span> <span
  m='442230'>gives</span> <span m='442640'>us</span> <span m='443066'>x</span>
  <span m='443920'>equals</span> <span m='444260'>a</span> <span
  m='444320'>half.</span> </p><p><span m='444940'>And</span> <span
  m='445160'>now</span> <span m='445270'>if</span> <span m='445370'>you</span>
  <span m='445460'>take</span> <span m='446420'>z</span> <span
  m='446560'>equals</span> <span m='447060'>0</span> <span m='447450'>and</span>
  <span m='447520'>x</span> <span m='447780'>equals</span> <span
  m='448060'>1/2,</span> <span m='448530'>we</span> <span m='448650'>can</span>
  <span m='448800'>take</span> <span m='449050'>that</span> <span
  m='449250'>down</span> <span m='449450'>to</span> <span m='449550'>our</span>
  <span m='449650'>constraint</span> <span m='450120'>equation.</span> <span
  m='450810'>And</span> <span m='451000'>we</span> <span m='451080'>get</span>
  <span m='451180'>a</span> <span m='451220'>quarter</span> <span
  m='451650'>plus</span> <span m='451910'>y</span> <span
  m='452170'>squared</span> <span m='452760'>equals</span> <span
  m='453100'>1,</span> <span m='453740'>so</span> <span m='453980'>y</span>
  <span m='454400'>is</span> <span m='454510'>a</span> <span
  m='454620'>square</span> <span m='454960'>root</span> <span
  m='455160'>of</span> <span m='455270'>3/4.</span> <span m='456820'>So</span>
  <span m='457020'>y</span> <span m='457940'>equals</span> <span
  m='458920'>plus</span> <span m='459110'>or</span> <span
  m='459270'>minus</span> <span m='459850'>square</span> <span
  m='460090'>root</span> <span m='460225'>of</span> <span m='460360'>3</span>
  <span m='461310'>over</span> <span m='461550'>2.</span> </p><p><span
  m='462120'>And</span> <span m='462300'>this</span> <span
  m='462450'>gives</span> <span m='462680'>us</span> <span m='462820'>two</span>
  <span m='462990'>points.</span> <span m='463820'>1/2,</span> <span
  m='465830'>square</span> <span m='466090'>root</span> <span
  m='466160'>of</span> <span m='466230'>3</span> <span m='466500'>over</span>
  <span m='466710'>2,</span> <span m='467810'>0.</span> <span
  m='470230'>And</span> <span m='470490'>1/2,</span> <span
  m='471920'>minus</span> <span m='472276'>square</span> <span
  m='472454'>root</span> <span m='472632'>of</span> <span m='472811'>3</span>
  <span m='472990'>over</span> <span m='473180'>2,</span> <span
  m='474390'>0.</span> </p><p><span m='476580'>Those</span> <span
  m='476850'>were</span> <span m='477070'>our</span> <span
  m='477195'>three</span> <span m='477320'>cases.</span> <span
  m='477980'>We've</span> <span m='478170'>solved</span> <span
  m='478630'>each</span> <span m='478820'>of</span> <span
  m='478920'>them.</span> <span m='479160'>We've</span> <span
  m='479340'>solved</span> <span m='479710'>each</span> <span
  m='479910'>of</span> <span m='480030'>them</span> <span m='480970'>all</span>
  <span m='481290'>the</span> <span m='481380'>way</span> <span
  m='481510'>down</span> <span m='481740'>to</span> <span
  m='481820'>finding</span> <span m='483080'>the</span> <span
  m='483190'>points</span> <span m='483640'>that</span> <span
  m='484340'>they</span> <span m='484640'>lead</span> <span
  m='484890'>to.</span> <span m='485280'>Now</span> <span
  m='485570'>remember,</span> <span m='486010'>we</span> <span
  m='486100'>said</span> <span m='486320'>already</span> <span
  m='486640'>that</span> <span m='486810'>there's</span> <span
  m='487010'>no</span> <span m='487200'>boundary</span> <span
  m='487750'>to</span> <span m='487850'>this</span> <span
  m='488020'>region.</span> <span m='488400'>It's</span> <span
  m='488590'>just</span> <span m='488880'>the</span> <span
  m='489030'>sphere.</span> <span m='490670'>It</span> <span
  m='490770'>has</span> <span m='490970'>no</span> <span
  m='491360'>edges.</span> </p><p><span m='492930'>So</span> <span
  m='493100'>these</span> <span m='493350'>are</span> <span
  m='493430'>the</span> <span m='493600'>only</span> <span
  m='493900'>points</span> <span m='494180'>we</span> <span
  m='494260'>have</span> <span m='494360'>to</span> <span
  m='494440'>check.</span> <span m='494670'>We</span> <span
  m='494840'>have</span> <span m='494875'>to</span> <span
  m='494910'>check</span> <span m='495230'>these</span> <span
  m='495440'>six</span> <span m='495710'>points.</span> <span
  m='496170'>What</span> <span m='496360'>do</span> <span m='496420'>we</span>
  <span m='496480'>have</span> <span m='496580'>to</span> <span
  m='496660'>check</span> <span m='496910'>them</span> <span
  m='497040'>for?</span> <span m='497190'>Well,</span> <span
  m='497330'>we</span> <span m='497420'>have</span> <span m='497530'>to</span>
  <span m='497620'>look</span> <span m='497880'>at</span> <span
  m='497970'>the</span> <span m='498080'>value</span> <span m='498490'>of</span>
  <span m='498690'>f</span> <span m='499600'>at</span> <span
  m='499840'>each</span> <span m='499995'>of</span> <span
  m='500150'>these</span> <span m='500400'>six</span> <span
  m='500780'>points.</span> <span m='502560'>And</span> <span
  m='503300'>we</span> <span m='503450'>want</span> <span m='503600'>to</span>
  <span m='503660'>figure</span> <span m='503890'>out</span> <span
  m='503990'>where</span> <span m='504250'>f</span> <span m='504470'>is</span>
  <span m='504610'>maximized</span> <span m='505220'>and</span> <span
  m='505340'>where</span> <span m='505520'>f</span> <span m='505620'>is</span>
  <span m='505760'>minimized,</span> <span m='506390'>and</span> <span
  m='506650'>these</span> <span m='506760'>six</span> <span
  m='507050'>points</span> <span m='507300'>are</span> <span
  m='507720'>the</span> <span m='507890'>only</span> <span
  m='508230'>points</span> <span m='508530'>where</span> <span
  m='508740'>that</span> <span m='508900'>could</span> <span
  m='509060'>happen,</span> <span m='509600'>where</span> <span
  m='509830'>f</span> <span m='510040'>could</span> <span m='510180'>be</span>
  <span m='510300'>maximized</span> <span m='510900'>or</span> <span
  m='511030'>minimized.</span> </p><p><span m='512020'>So</span> <span
  m='512140'>we</span> <span m='512230'>just</span> <span m='512360'>have</span>
  <span m='512450'>to</span> <span m='512530'>evaluate</span> <span
  m='513340'>our</span> <span m='513500'>objective</span> <span
  m='513930'>function</span> <span m='514240'>f</span> <span
  m='514420'>at</span> <span m='514490'>these</span> <span m='514650'>six</span>
  <span m='514860'>points</span> <span m='515200'>and</span> <span
  m='515440'>find</span> <span m='515680'>the</span> <span
  m='515740'>largest</span> <span m='516220'>value</span> <span
  m='516800'>and</span> <span m='516960'>the</span> <span
  m='517020'>smallest</span> <span m='517520'>value.</span> <span
  m='518430'>So</span> <span m='518590'>let's</span> <span m='518810'>do</span>
  <span m='518950'>that.</span> <span m='519340'>So</span> <span
  m='519540'>our</span> <span m='519800'>objective</span> <span
  m='520280'>function,</span> <span m='520610'>remember,</span> <span
  m='520894'>it's</span> <span m='521180'>all</span> <span m='521320'>the</span>
  <span m='521390'>way</span> <span m='521490'>back</span> <span
  m='521750'>over</span> <span m='521920'>here.</span> <span
  m='522880'>It's</span> <span m='523110'>this</span> <span
  m='523320'>function</span> <span m='523810'>x</span> <span
  m='524030'>squared</span> <span m='524330'>plus</span> <span
  m='524600'>x</span> <span m='525000'>plus</span> <span m='525540'>2</span>
  <span m='525730'>y</span> <span m='526010'>squared</span> <span
  m='526720'>plus</span> <span m='526980'>3</span> <span m='527180'>z</span>
  <span m='527420'>squared.</span> <span m='529210'>OK.</span> <span
  m='529570'>So</span> <span m='530540'>let's</span> <span
  m='530980'>look</span> <span m='531230'>at</span> <span m='531340'>the</span>
  <span m='531430'>value</span> <span m='531620'>of</span> <span
  m='531810'>that</span> <span m='531980'>function</span> <span
  m='532310'>at</span> <span m='532400'>these</span> <span
  m='532610'>point.</span> </p><p><span m='532850'>So</span> <span
  m='533430'>x</span> <span m='533640'>squared</span> <span
  m='533910'>plus</span> <span m='534130'>x</span> <span m='534510'>plus</span>
  <span m='534710'>2</span> <span m='534830'>y</span> <span
  m='535130'>squared</span> <span m='535370'>plus</span> <span m='535580'>3
  z</span> <span m='535940'>squared</span> <span m='536640'>at</span> <span
  m='536770'>the</span> <span m='536840'>point</span> <span m='537160'>1,</span>
  <span m='537470'>0,</span> <span m='538370'>that's</span> <span
  m='538640'>just</span> <span m='538840'>equal</span> <span
  m='539100'>to</span> <span m='539170'>2.</span> <span m='539710'>So</span>
  <span m='540200'>I'm</span> <span m='540340'>going</span> <span
  m='540415'>to</span> <span m='540490'>write</span> <span m='540830'>the</span>
  <span m='540930'>function</span> <span m='541310'>values just</span> <span
  m='542160'>off</span> <span m='542440'>to</span> <span m='542540'>the</span>
  <span m='542640'>side</span> <span m='544120'>of</span> <span
  m='544280'>the</span> <span m='544370'>points</span> <span
  m='545270'>here.</span> <span m='546980'>So</span> <span
  m='547110'>this</span> <span m='547340'>gives</span> <span
  m='547590'>me</span> <span m='548140'>the</span> <span m='548240'>value</span>
  <span m='548550'>2.</span> <span m='548700'>And</span> <span
  m='548810'>I'm</span> <span m='548870'>going</span> <span m='549010'>to</span>
  <span m='549520'>circle</span> <span m='549985'>them.</span> <span
  m='550450'>So</span> <span m='550560'>the</span> <span m='550810'>point</span>
  <span m='551110'>(1,</span> <span m='551370'>0,</span> <span
  m='551620'>0)</span> <span m='551930'>gives</span> <span m='552100'>me</span>
  <span m='552190'>the</span> <span m='552290'>value</span> <span
  m='552630'>2.</span> </p><p><span m='553730'>The</span> <span
  m='553850'>point</span> <span m='554120'>minus</span> <span
  m='554750'>1,</span> <span m='555020'>0,</span> <span m='555360'>0--</span>
  <span m='555970'>so</span> <span m='556160'>that's</span> <span
  m='556590'>x</span> <span m='556880'>squared</span> <span m='557420'>is</span>
  <span m='557540'>1,</span> <span m='558150'>plus</span> <span
  m='558490'>x</span> <span m='558825'>is</span> <span m='559160'>minus</span>
  <span m='559630'>1--</span> <span m='560015'>so</span> <span
  m='560400'>that's</span> <span m='560650'>1</span> <span
  m='560910'>minus</span> <span m='561270'>1</span> <span m='561500'>is</span>
  <span m='561670'>0--</span> <span m='562450'>and</span> <span
  m='562580'>then</span> <span m='562690'>the</span> <span m='562780'>y</span>
  <span m='563040'>and</span> <span m='563190'>z</span> <span
  m='563370'>terms</span> <span m='563690'>are</span> <span
  m='563800'>both</span> <span m='564050'>0.</span> <span m='564750'>So</span>
  <span m='565760'>at</span> <span m='565910'>the</span> <span
  m='566010'>point</span> <span m='566220'>minus</span> <span
  m='566540'>1,</span> <span m='566700'>0,</span> <span m='566890'>0,</span>
  <span m='567130'>the</span> <span m='567230'>function</span> <span
  m='567590'>value</span> <span m='568430'>is</span> <span m='568790'>0.</span>
  <span m='569230'>I'm</span> <span m='569376'>going</span> <span
  m='569523'>to</span> <span m='569670'>circle</span> <span
  m='570100'>that.</span> <span m='572360'>Oh</span> <span
  m='572560'>boy.</span> </p><p><span m='572970'>OK,</span> <span
  m='573250'>so</span> <span m='573440'>at</span> <span m='573620'>these</span>
  <span m='574110'>points--</span> <span m='575240'>at</span> <span
  m='575470'>the</span> <span m='575570'>point</span> <span
  m='576060'>1/4,</span> <span m='576780'>0,</span> <span
  m='577660'>square</span> <span m='578030'>root</span> <span
  m='578075'>of</span> <span m='578120'>15</span> <span m='578490'>over</span>
  <span m='578660'>4,</span> <span m='579050'>and</span> <span
  m='579440'>1/4,</span> <span m='580130'>0,</span> <span
  m='580920'>minus</span> <span m='581350'>square</span> <span
  m='581600'>root</span> <span m='581640'>of</span> <span m='581680'>15</span>
  <span m='582050'>over</span> <span m='582220'>4--</span> <span
  m='583350'>I'm</span> <span m='583510'>going</span> <span m='583590'>to</span>
  <span m='583670'>cheat</span> <span m='584120'>and</span> <span
  m='584310'>look</span> <span m='584460'>at</span> <span m='584530'>what</span>
  <span m='584680'>I</span> <span m='584730'>wrote</span> <span
  m='584970'>down</span> <span m='585180'>already.</span> <span
  m='585520'>So</span> <span m='585650'>you</span> <span m='585800'>could</span>
  <span m='585910'>do</span> <span m='586020'>the</span> <span
  m='586130'>arithmetic</span> <span m='586990'>yourself,</span> <span
  m='588730'>but</span> <span m='588960'>I</span> <span m='589040'>think</span>
  <span m='589200'>it's</span> <span m='589310'>not</span> <span
  m='589530'>that</span> <span m='589710'>hard</span> <span m='590190'>to</span>
  <span m='590330'>work</span> <span m='590600'>out</span> <span
  m='591270'>that</span> <span m='591700'>in</span> <span m='591880'>both</span>
  <span m='592130'>of</span> <span m='592210'>these</span> <span
  m='592430'>cases,</span> <span m='593360'>the</span> <span
  m='593480'>function</span> <span m='593880'>value</span> <span
  m='594190'>that</span> <span m='594320'>you</span> <span m='594420'>get</span>
  <span m='594600'>out</span> <span m='595230'>is</span> <span
  m='595490'>25</span> <span m='595830'>over</span> <span m='596200'>8.</span>
  <span m='597510'>I'm</span> <span m='597690'>not</span> <span
  m='597860'>going</span> <span m='597990'>to</span> <span m='598060'>do</span>
  <span m='598170'>the</span> <span m='598280'>arithmetic</span> <span
  m='600160'>right</span> <span m='600390'>now.</span> <span
  m='603520'>But</span> <span m='603950'>you</span> <span m='604070'>can</span>
  <span m='604450'>double-check</span> <span m='604920'>that</span> <span
  m='605110'>for</span> <span m='605190'>yourself.</span> </p><p><span
  m='605830'>And</span> <span m='606060'>at</span> <span m='606140'>these</span>
  <span m='606530'>last</span> <span m='606970'>two</span> <span
  m='607130'>points--</span> <span m='607480'>the</span> <span
  m='607590'>points</span> <span m='608180'>1/2,</span> <span
  m='608870'>root</span> <span m='609010'>3</span> <span m='609200'>over</span>
  <span m='609390'>2,</span> <span m='609600'>0,</span> <span
  m='609980'>and</span> <span m='610090'>1/2,</span> <span
  m='610810'>minus</span> <span m='611150'>root</span> <span m='611330'>3</span>
  <span m='611920'>over</span> <span m='612200'>2,</span> <span
  m='612810'>0--</span> <span m='615800'>the</span> <span
  m='615930'>function</span> <span m='616290'>has</span> <span
  m='616450'>the</span> <span m='616520'>same</span> <span
  m='616750'>value</span> <span m='617010'>at</span> <span
  m='617175'>both</span> <span m='617257'>of</span> <span
  m='617340'>those</span> <span m='617560'>points.</span> <span
  m='618120'>That</span> <span m='618450'>value</span> <span
  m='618800'>is</span> <span m='619000'>9/4.</span> <span
  m='623250'>Yeah,</span> <span m='623450'>so</span> <span m='623540'>25</span>
  <span m='624020'>over</span> <span m='624150'>8</span> <span
  m='624370'>was</span> <span m='624530'>the</span> <span
  m='624610'>value</span> <span m='624950'>at</span> <span
  m='625040'>both</span> <span m='625260'>of</span> <span
  m='625350'>these</span> <span m='625540'>points,</span> <span
  m='626000'>and</span> <span m='626270'>9/4</span> <span m='627140'>is</span>
  <span m='627310'>the</span> <span m='627370'>value</span> <span
  m='627630'>of</span> <span m='627890'>both</span> <span m='628102'>of</span>
  <span m='628315'>these</span> <span m='628527'>points.</span> </p><p><span
  m='628740'>So</span> <span m='628910'>now,</span> <span m='630220'>to</span>
  <span m='630310'>find</span> <span m='630560'>the</span> <span
  m='630620'>maximum</span> <span m='631120'>value</span> <span
  m='631430'>of</span> <span m='631500'>the</span> <span
  m='631590'>function</span> <span m='631930'>and</span> <span
  m='632000'>the</span> <span m='632080'>minimum</span> <span
  m='632400'>value</span> <span m='632650'>of</span> <span m='632725'>the</span>
  <span m='632800'>function,</span> <span m='633280'>we</span> <span
  m='633490'>just</span> <span m='633650'>look</span> <span m='633840'>at</span>
  <span m='633920'>the</span> <span m='634000'>values</span> <span
  m='634340'>that</span> <span m='634440'>we</span> <span m='634540'>got</span>
  <span m='634750'>and</span> <span m='634800'>say,</span> <span
  m='634850'>which</span> <span m='635050'>of</span> <span
  m='635130'>these</span> <span m='635280'>is</span> <span
  m='635430'>biggest</span> <span m='635780'>and</span> <span
  m='635840'>which</span> <span m='636000'>of</span> <span
  m='636070'>these</span> <span m='636250'>is</span> <span
  m='636320'>smallest?</span> <span m='636685'>And</span> <span
  m='637050'>in</span> <span m='637320'>our</span> <span m='637510'>case,</span>
  <span m='637970'>it's</span> <span m='638280'>easy</span> <span
  m='638510'>to</span> <span m='638630'>see</span> <span m='639130'>that</span>
  <span m='639300'>0</span> <span m='640110'>is</span> <span
  m='640330'>the</span> <span m='640420'>minimum.</span> <span m='642610'>You
  know, all</span> <span m='642760'>the</span> <span m='642880'>other</span>
  <span m='643060'>values</span> <span m='643640'>are</span> <span
  m='643800'>positive,</span> <span m='644320'>so</span> <span
  m='644480'>0</span> <span m='644770'>is</span> <span m='644900'>the</span>
  <span m='644980'>minimum.</span> <span m='645600'>So</span> <span
  m='645820'>our</span> <span m='648720'>minimum</span> <span
  m='649150'>value</span> <span m='650000'>of</span> <span m='650270'>f</span>
  <span m='651270'>is</span> <span m='651770'>0</span> <span
  m='653530'>at</span> <span m='653750'>the</span> <span m='653870'>point</span>
  <span m='654500'>minus</span> <span m='654840'>1,</span> <span
  m='655330'>0,</span> <span m='656130'>0.</span> </p><p><span
  m='656740'>And</span> <span m='657620'>if</span> <span m='657790'>you</span>
  <span m='657890'>just</span> <span m='658080'>compare</span> <span
  m='658390'>the</span> <span m='658480'>values</span> <span m='658700'>2</span>
  <span m='659090'>and</span> <span m='659230'>25/8</span> <span
  m='660100'>and</span> <span m='660280'>9/4,</span> <span
  m='661480'>25/8</span> <span m='662550'>is</span> <span m='662730'>the</span>
  <span m='662860'>largest.</span> <span m='663560'>This</span> <span
  m='663770'>is</span> <span m='663880'>bigger</span> <span
  m='664120'>than</span> <span m='664300'>3,</span> <span
  m='665190'>whereas</span> <span m='665600'>both</span> <span
  m='665683'>of</span> <span m='665766'>those</span> <span m='665850'>are</span>
  <span m='665950'>less</span> <span m='666180'>than</span> <span
  m='666310'>3,</span> <span m='666680'>for</span> <span
  m='666810'>example.</span> <span m='667280'>This</span> <span
  m='667420'>is</span> <span m='667490'>one</span> <span m='667560'>easy</span>
  <span m='667710'>way</span> <span m='667775'>to</span> <span
  m='667840'>see</span> <span m='668010'>that.</span> <span m='668540'>So</span>
  <span m='668720'>the</span> <span m='668830'>max</span> <span
  m='672550'>of</span> <span m='672820'>f</span> <span m='674310'>is</span>
  <span m='675670'>25/8,</span> <span m='677740'>and</span> <span
  m='677900'>that's</span> <span m='678100'>achieved</span> <span
  m='679160'>at</span> <span m='679360'>the</span> <span
  m='679470'>points</span> <span m='680780'>1/4,</span> <span
  m='682330'>0,</span> <span m='683400'>plus</span> <span m='683730'>or</span>
  <span m='683820'>minus</span> <span m='684095'>square</span> <span
  m='684370'>root</span> <span m='684660'>of</span> <span m='684760'>15</span>
  <span m='685860'>over</span> <span m='686330'>4.</span> </p><p><span
  m='688680'>So</span> <span m='688880'>there</span> <span m='689040'>you</span>
  <span m='689130'>have</span> <span m='689475'>it.</span> <span
  m='689820'>The</span> <span m='689940'>method</span> <span
  m='690220'>of</span> <span m='690280'>Lagrange</span> <span
  m='690680'>multipliers.</span> <span m='691860'>We</span> <span
  m='692160'>just</span> <span m='692530'>followed</span> <span
  m='693410'>exactly</span> <span m='694790'>the</span> <span
  m='695070'>strategy</span> <span m='696570'>that</span> <span
  m='696780'>we</span> <span m='696900'>have.</span> </p><p><span
  m='697220'>So</span> <span m='697980'>you</span> <span m='698200'>start</span>
  <span m='698530'>out</span> <span m='698840'>and</span> <span
  m='698970'>you</span> <span m='699040'>have</span> <span m='699200'>an</span>
  <span m='699280'>objective</span> <span m='699740'>function</span> <span
  m='701420'>and</span> <span m='701640'>a</span> <span
  m='701750'>constraint</span> <span m='702210'>function.</span> <span
  m='702770'>And</span> <span m='703010'>so</span> <span m='703100'>what</span>
  <span m='703220'>do</span> <span m='703280'>you</span> <span
  m='703380'>do?</span> <span m='703710'>You</span> <span
  m='704010'>write</span> <span m='704310'>down</span> <span
  m='704500'>their</span> <span m='704600'>partial</span> <span
  m='704940'>derivatives</span> <span m='705610'>and</span> <span
  m='705840'>you</span> <span m='705900'>come</span> <span m='706120'>up</span>
  <span m='706240'>with</span> <span m='706360'>this</span> <span
  m='706470'>system</span> <span m='706830'>of</span> <span
  m='706930'>equations.</span> <span m='707780'>So</span> <span
  m='707910'>this</span> <span m='708010'>system</span> <span
  m='708340'>of</span> <span m='708570'>equations</span> <span
  m='708800'>that</span> <span m='708920'>you</span> <span m='709030'>get</span>
  <span m='709220'>by</span> <span m='709400'>setting, you know,</span> <span
  m='710420'>f_x</span> <span m='710940'>equal</span> <span m='711115'>to</span>
  <span m='711290'>lambda</span> <span m='711710'>g_x,</span> <span
  m='712180'>f_y</span> <span m='712620'>equal</span> <span m='712750'>to</span>
  <span m='712880'>lambda</span> <span m='713210'>g_y,</span> <span
  m='714100'>f_z</span> <span m='714430'>equals</span> <span
  m='714890'>lambda</span> <span m='715360'>g_z,</span> <span
  m='715890'>and</span> <span m='716140'>your</span> <span
  m='716240'>constraint</span> <span m='716760'>equation</span> <span
  m='717240'>g</span> <span m='717550'>equals</span> <span
  m='718270'>some</span> <span m='718510'>constant.</span> </p><p><span
  m='719940'>So</span> <span m='720160'>then</span> <span m='721380'>the</span>
  <span m='721560'>one</span> <span m='721830'>part</span> <span
  m='722070'>of</span> <span m='722180'>this</span> <span
  m='722560'>procedure</span> <span m='723100'>that</span> <span
  m='723300'>isn't</span> <span m='723660'>just</span> <span m='724100'>a</span>
  <span m='724310'>recipe</span> <span m='725010'>is</span> <span
  m='725170'>that</span> <span m='725280'>you</span> <span
  m='725370'>need</span> <span m='725520'>to</span> <span
  m='725600'>solve</span> <span m='726370'>this</span> <span
  m='726640'>system</span> <span m='727020'>of</span> <span
  m='727120'>equations,</span> <span m='727510'>but</span> <span
  m='727700'>sometimes</span> <span m='728120'>that</span> <span
  m='728280'>can</span> <span m='728410'>be</span> <span m='728510'>hard.</span>
  <span m='729110'>So</span> <span m='729350'>in</span> <span
  m='729430'>this</span> <span m='729600'>case,</span> <span
  m='730090'>there</span> <span m='730210'>were</span> <span m='730630'>a</span>
  <span m='730720'>couple</span> <span m='731030'>of</span> <span
  m='731110'>observations</span> <span m='731790'>that</span> <span
  m='731900'>we</span> <span m='732020'>could</span> <span
  m='732150'>make</span> <span m='732690'>from</span> <span
  m='732830'>the</span> <span m='732930'>second</span> <span
  m='733280'>and</span> <span m='733380'>third</span> <span
  m='733600'>equations</span> <span m='734100'>that</span> <span
  m='734240'>made</span> <span m='734430'>it</span> <span
  m='734570'>relatively</span> <span m='735100'>straightforward</span> <span
  m='735770'>to</span> <span m='735910'>do.</span> <span m='736810'>And</span>
  <span m='736930'>that</span> <span m='737080'>gave</span> <span
  m='737270'>us</span> <span m='737380'>some</span> <span
  m='737510'>cases.</span> </p><p><span m='738460'>And</span> <span
  m='738720'>then</span> <span m='739030'>in</span> <span m='739240'>each</span>
  <span m='739540'>of</span> <span m='739630'>those</span> <span
  m='739860'>cases,</span> <span m='740700'>we</span> <span
  m='740970'>were</span> <span m='741100'>able</span> <span m='741240'>to</span>
  <span m='741380'>completely</span> <span m='741870'>solve</span> <span
  m='742480'>for</span> <span m='742590'>the</span> <span
  m='742680'>points</span> <span m='742990'>x,</span> <span m='743200'>y,</span>
  <span m='743380'>and</span> <span m='743490'>z.</span> <span
  m='743890'>Now</span> <span m='744020'>we</span> <span m='744260'>also</span>
  <span m='744590'>could</span> <span m='744800'>solve</span> <span
  m='745090'>for</span> <span m='745190'>the</span> <span
  m='745290'>associated</span> <span m='745750'>values</span> <span
  m='746040'>of</span> <span m='746400'>lambda,</span> <span
  m='746760'>but</span> <span m='747590'>lambda</span> <span
  m='748090'>isn't</span> <span m='748200'>important</span> <span
  m='748630'>to</span> <span m='748760'>us.</span> <span m='749380'>It</span>
  <span m='749510'>doesn't</span> <span m='750040'>affect</span> <span
  m='750760'>f.</span> <span m='751690'>We</span> <span m='751840'>can</span>
  <span m='752000'>forget</span> <span m='752310'>about</span> <span
  m='752550'>it as soon as we found it,</span> <span m='754330'>once</span>
  <span m='754540'>we</span> <span m='754670'>found</span> <span
  m='754990'>x,</span> <span m='755180'>y,</span> <span m='755400'>and</span>
  <span m='755550'>z.</span> <span m='756320'>So</span> <span
  m='756510'>we</span> <span m='756600'>were</span> <span m='756670'>able</span>
  <span m='756870'>to</span> <span m='756940'>solve.</span> </p><p><span
  m='757490'>In</span> <span m='757670'>this</span> <span
  m='757800'>case,</span> <span m='758010'>we</span> <span m='758090'>got</span>
  <span m='758270'>six</span> <span m='758640'>points</span> <span
  m='758930'>of</span> <span m='759030'>interest.</span> <span
  m='760020'>And</span> <span m='760240'>then</span> <span m='760330'>you</span>
  <span m='760420'>just</span> <span m='760630'>look</span> <span
  m='760870'>at</span> <span m='760960'>the</span> <span m='761210'>value</span>
  <span m='761440'>of</span> <span m='761670'>your</span> <span
  m='761810'>objective</span> <span m='762240'>function</span> <span
  m='762600'>at</span> <span m='762690'>those</span> <span
  m='762930'>points.</span> <span m='763470'>So</span> <span
  m='763740'>that</span> <span m='763930'>was</span> <span
  m='764040'>what</span> <span m='764200'>I</span> <span m='764250'>wrote</span>
  <span m='764490'>down</span> <span m='764750'>in</span> <span
  m='764850'>these</span> <span m='764940'>circles.</span> <span
  m='766280'>So</span> <span m='766460'>you</span> <span m='766610'>look</span>
  <span m='767360'>at</span> <span m='767540'>the</span> <span
  m='768020'>value</span> <span m='768300'>of</span> <span m='768510'>the</span>
  <span m='768640'>objective</span> <span m='768930'>function.</span> <span
  m='769440'>And</span> <span m='769585'>to</span> <span m='769730'>find</span>
  <span m='770060'>the</span> <span m='770120'>maximum</span> <span
  m='770580'>value</span> <span m='770710'>of</span> <span m='770840'>the</span>
  <span m='770960'>function,</span> <span m='771280'>you</span> <span
  m='771370'>just</span> <span m='771570'>look</span> <span m='771810'>at</span>
  <span m='771920'>which</span> <span m='772090'>of</span> <span
  m='772170'>those</span> <span m='772410'>is</span> <span
  m='772560'>largest.</span> </p><p><span m='773300'>Now</span> <span
  m='773400'>sometimes--</span> <span m='774220'>not</span> <span
  m='774450'>in</span> <span m='774540'>this</span> <span
  m='774720'>problem,</span> <span m='775140'>but</span> <span
  m='775270'>in</span> <span m='775410'>other</span> <span
  m='775610'>problems,</span> <span m='775895'>you'll</span> <span
  m='776180'>also</span> <span m='776380'>have</span> <span m='776680'>to</span>
  <span m='776890'>check--</span> <span m='777640'>if</span> <span
  m='777840'>the</span> <span m='777920'>region</span> <span
  m='778270'>has</span> <span m='778450'>a</span> <span
  m='778510'>boundary,</span> <span m='779200'>you'll</span> <span
  m='779430'>also</span> <span m='779560'>have</span> <span m='779690'>to</span>
  <span m='779820'>check</span> <span m='780180'>for</span> <span
  m='780420'>possible</span> <span m='780900'>maxima</span> <span
  m='781210'>and</span> <span m='781425'>minima</span> <span
  m='781640'>on</span> <span m='781980'>the</span> <span
  m='782070'>boundary</span> <span m='782325'>of</span> <span
  m='782580'>the</span> <span m='782680'>region.</span> <span
  m='783180'>But</span> <span m='783370'>a</span> <span m='783490'>sphere</span>
  <span m='783850'>doesn't</span> <span m='784160'>have</span> <span
  m='784330'>any</span> <span m='784520'>edges,</span> <span
  m='784890'>so</span> <span m='785080'>it</span> <span
  m='785160'>doesn't</span> <span m='785410'>have</span> <span
  m='785550'>any</span> <span m='785690'>boundary.</span> <span
  m='786070'>So</span> <span m='786210'>we</span> <span m='786310'>don't</span>
  <span m='786430'>have</span> <span m='786520'>to</span> <span
  m='786630'>worry</span> <span m='786840'>about</span> <span
  m='787110'>that.</span> </p><p><span m='788020'>So</span> <span
  m='788230'>that's</span> <span m='788460'>how</span> <span
  m='788570'>we</span> <span m='788840'>apply</span> <span m='789240'>the</span>
  <span m='789400'>method</span> <span m='789690'>of</span> <span
  m='789770'>Lagrange</span> <span m='790150'>multipliers</span> <span
  m='790770'>to</span> <span m='790870'>this</span> <span
  m='791050'>problem.</span> <span m='791690'>And</span> <span
  m='791860'>how</span> <span m='791960'>you</span> <span m='792110'>can</span>
  <span m='792230'>apply</span> <span m='792395'>it</span> <span
  m='792560'>to</span> <span m='792680'>other</span> <span
  m='793280'>problems</span> <span m='793750'>as</span> <span
  m='793890'>well.</span> <span m='794370'>I'll</span> <span
  m='794600'>end</span> <span m='794830'>there.</span> </p>
embedded_media:
  - uid: 88adf0c8a46315d3244591263db2efe5
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: nDuS5uQ7-lo
  - uid: 05638f52bc3c20f688677a7912506ded
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/nDuS5uQ7-lo/default.jpg'
  - uid: ad8503a929fcdb6aa3e0b9bf3538fb8c
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: nDuS5uQ7-lo
  - uid: 6b18c54817ecbff64139f497ed50fc0b
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: nDuS5uQ7-lo.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-41-advanced-example/lagrange-multipliers-3-variables/nDuS5uQ7-lo.srt
  - uid: aed05433c53a3400c6c200d2e0f819b8
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: nDuS5uQ7-lo.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-41-advanced-example/lagrange-multipliers-3-variables/nDuS5uQ7-lo.pdf
  - uid: b9b003d5bb82fb4ca931a25120f39e4b
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dadba2e58634ed3f8b61629a334bd9f3
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: ecbcff91f77c3266f5d9f4caae819509
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_29_300k.mp4'
  - uid: c661a273eb3fb80c9a50514d4dd71f22
    parent_uid: f1908be4ad3f5c171840a903edfbb545
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/lagrange-multipliers-3-variables/id414355340?i=90322861
type: courses
layout: video
---
