---
title: Taylor's Series for sec(x)
uid: 4990e98d2e927c32672131168dd8010c
parent_uid: 9714534fbc6217589e4ab69f5ad147a4
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-5-exploring-the-infinite/part-b-taylor-series/session-99-taylors-series-continued/taylors-series-for-sec-x
short_url: taylors-series-for-sec-x
inline_embed_id: 99301824taylor'sseriesforsec(x)65479649
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6930'>Hi.</span> <span m='7460'>Welcome</span> <span
  m='7780'>back</span> <span m='7980'>to</span> <span
  m='8080'>recitation.</span> <span m='8960'>We've</span> <span
  m='9190'>been</span> <span m='9330'>talking</span> <span m='9700'>about</span>
  <span m='9960'>Taylor</span> <span m='10250'>series</span> <span
  m='10630'>for</span> <span m='10760'>a</span> <span m='10820'>number</span>
  <span m='11090'>of</span> <span m='11190'>functions</span> <span
  m='11620'>and</span> <span m='11820'>rules</span> <span m='12200'>by</span>
  <span m='12340'>which</span> <span m='12570'>you</span> <span
  m='12660'>can</span> <span m='12800'>compute</span> <span
  m='13190'>Taylor</span> <span m='13500'>series.</span> <span
  m='14190'>I</span> <span m='14320'>have</span> <span m='14640'>here</span>
  <span m='14840'>an</span> <span m='14920'>example</span> <span
  m='15330'>that</span> <span m='15450'>I</span> <span m='15490'>don't</span>
  <span m='15680'>think</span> <span m='15850'>we</span> <span
  m='15950'>did</span> <span m='16150'>in</span> <span m='16260'>lecture.</span>
  <span m='16860'>So</span> <span m='17080'>this</span> <span
  m='17270'>is</span> <span m='17500'>the</span> <span m='18750'>function</span>
  <span m='19340'>f</span> <span m='19520'>of x</span> <span
  m='19850'>equals</span> <span m='20160'>secant</span> <span m='20650'>of
  x.</span> <span m='20980'>Now,</span> <span m='21380'>unlike</span> <span
  m='21780'>some</span> <span m='21920'>of</span> <span m='22020'>the</span>
  <span m='22100'>other</span> <span m='22270'>ones</span> <span
  m='22460'>you've</span> <span m='22590'>seen,</span> <span
  m='23200'>there's</span> <span m='23390'>not</span> <span m='23610'>a</span>
  <span m='23650'>really</span> <span m='24040'>simple</span> <span
  m='24440'>formula</span> <span m='24930'>for</span> <span m='25070'>the</span>
  <span m='25520'>whole</span> <span m='25790'>Taylor</span> <span
  m='26110'>series</span> <span m='26410'>of</span> <span
  m='26520'>secant</span> <span m='26650'>x.</span> </p><p><span
  m='27060'>So</span> <span m='27150'>what</span> <span m='27250'>I'd</span>
  <span m='27340'>like</span> <span m='27520'>you</span> <span
  m='27610'>to</span> <span m='27710'>do</span> <span m='28180'>is</span> <span
  m='28340'>not</span> <span m='28560'>to</span> <span m='28660'>find, you
  know,</span> <span m='29940'>a</span> <span m='30160'>formula</span> <span
  m='30600'>for</span> <span m='30890'>the</span> <span m='31070'>general</span>
  <span m='31460'>term,</span> <span m='31970'>but</span> <span
  m='32160'>rather,</span> <span m='32490'>just</span> <span m='33050'>to</span>
  <span m='33600'>use</span> <span m='33930'>some</span> <span
  m='34110'>of</span> <span m='34240'>the</span> <span m='35150'>tools</span>
  <span m='35490'>that</span> <span m='35580'>we've</span> <span
  m='35670'>learned</span> <span m='35940'>to</span> <span
  m='36040'>compute</span> <span m='36660'>the</span> <span
  m='36770'>first</span> <span m='37080'>few</span> <span m='37320'>terms</span>
  <span m='37750'>of</span> <span m='37880'>the</span> <span
  m='37970'>Taylor</span> <span m='38270'>series</span> <span
  m='38680'>for</span> <span m='38940'>f of x</span> <span
  m='39430'>equals</span> <span m='39660'>secant</span> <span
  m='39860'>x.</span> <span m='40180'>Say,</span> <span m='40940'>up</span>
  <span m='41190'>through</span> <span m='41350'>the</span> <span
  m='41460'>x</span> <span m='41730'>to</span> <span m='41850'>the</span> <span
  m='41960'>fourth</span> <span m='42430'>term,</span> <span m='42800'>if</span>
  <span m='42950'>you</span> <span m='43050'>wanted,</span> <span
  m='43390'>or</span> <span m='43540'>even</span> <span m='43810'>a</span> <span
  m='43870'>little</span> <span m='44110'>further</span> <span
  m='44530'>if</span> <span m='44660'>you</span> <span m='44730'>were</span>
  <span m='44830'>feeling</span> <span m='45180'>ambitious.</span> </p><p><span
  m='46210'>So</span> <span m='46330'>why</span> <span m='46430'>don't</span>
  <span m='46560'>you</span> <span m='46640'>pause the</span> <span
  m='47020'>video,</span> <span m='47620'>have</span> <span m='47810'>a</span>
  <span m='47870'>go</span> <span m='47980'>at</span> <span
  m='48120'>that,</span> <span m='48590'>come</span> <span
  m='48810'>back,</span> <span m='49060'>and</span> <span m='49160'>we</span>
  <span m='49260'>can</span> <span m='49580'>do</span> <span m='49720'>it</span>
  <span m='49810'>together.</span> </p><p><span m='58830'>So</span> <span
  m='58970'>welcome</span> <span m='59280'>back.</span> <span m='59910'>I</span>
  <span m='60060'>asked</span> <span m='60280'>you</span> <span
  m='60370'>to</span> <span m='60450'>compute</span> <span m='61190'>the</span>
  <span m='61300'>first</span> <span m='61590'>few</span> <span
  m='61800'>terms</span> <span m='62200'>of</span> <span m='62300'>a</span>
  <span m='62360'>Taylor</span> <span m='62700'>series.</span> <span
  m='63690'>One</span> <span m='63990'>thing</span> <span m='64230'>you</span>
  <span m='64330'>can</span> <span m='64640'>always</span> <span
  m='65180'>do</span> <span m='65330'>in</span> <span m='65440'>this</span>
  <span m='65570'>case,</span> <span m='65840'>is</span> <span
  m='65940'>you</span> <span m='66070'>can</span> <span m='66250'>go</span>
  <span m='66510'>and</span> <span m='66630'>you</span> <span
  m='66710'>can</span> <span m='67010'>apply</span> <span m='67460'>the</span>
  <span m='67590'>general</span> <span m='68000'>formula</span> <span
  m='68470'>that</span> <span m='68600'>we</span> <span m='68720'>have</span>
  <span m='69320'>for</span> <span m='69440'>Taylor</span> <span
  m='69780'>series,</span> <span m='70160'>and</span> <span m='70600'>use</span>
  <span m='70810'>it</span> <span m='70970'>to</span> <span
  m='71880'>compute</span> <span m='72260'>the</span> <span
  m='72360'>series</span> <span m='72740'>that</span> <span
  m='72960'>way.</span> <span m='73330'>So</span> <span m='73720'>in</span>
  <span m='73910'>order</span> <span m='74120'>to do</span> <span
  m='74410'>that,</span> <span m='74690'>you</span> <span m='74770'>just</span>
  <span m='74920'>need</span> <span m='75060'>to</span> <span m='75130'>compute
  a</span> <span m='75440'>few</span> <span m='75620'>derivatives</span> <span
  m='76170'>of</span> <span m='76290'>your</span> <span
  m='76380'>function.</span> </p><p><span m='77540'>So</span> <span
  m='77730'>remember</span> <span m='78170'>that</span> <span
  m='78350'>the</span> <span m='78450'>general</span> <span
  m='78800'>formula</span> <span m='79540'>for</span> <span m='79700'>a</span>
  <span m='79790'>Taylor</span> <span m='80100'>series</span> <span
  m='80480'>is</span> <span m='80620'>the</span> <span m='80740'>Taylor</span>
  <span m='81070'>series</span> <span m='81430'>for</span> <span m='81510'>f
  of</span> <span m='81700'>x</span> <span m='83780'>is</span> <span
  m='83930'>equal</span> <span m='84160'>to</span> <span m='84300'>the</span>
  <span m='84420'>sum</span> <span m='86480'>from</span> <span
  m='86700'>n</span> <span m='87590'>equals</span> <span m='88880'>0</span>
  <span m='89215'>to</span> <span m='89550'>infinity</span> <span
  m='90810'>of</span> <span m='92190'>the</span> <span m='92390'>nth</span>
  <span m='92690'>derivative</span> <span m='93070'>of</span> <span
  m='93350'>f</span> <span m='94360'>taken</span> <span m='94680'>at</span>
  <span m='94790'>zero</span> <span m='95980'>divided</span> <span
  m='96420'>by</span> <span m='96580'>n</span> <span m='96850'>factorial</span>
  <span m='97840'>times</span> <span m='98115'>x</span> <span
  m='98390'>to</span> <span m='98510'>the</span> <span m='98610'>n.</span> <span
  m='99280'>And</span> <span m='99400'>since</span> <span m='99570'>we're</span>
  <span m='99690'>only</span> <span m='99900'>interested</span> <span
  m='100320'>in</span> <span m='100390'>the</span> <span m='100480'>first</span>
  <span m='100720'>few</span> <span m='100910'>terms,</span> <span
  m='101680'>this</span> <span m='101920'>is</span> <span m='103400'>f</span>
  <span m='103660'>of</span> <span m='103810'>0</span> <span
  m='105200'>plus</span> <span m='106890'>f</span> <span m='107260'>prime</span>
  <span m='107660'>of</span> <span m='107800'>0</span> <span m='108410'>x</span>
  <span m='109650'>plus</span> <span m='110980'>f</span> <span
  m='111340'>double</span> <span m='111700'>prime</span> <span
  m='112210'>of</span> <span m='112320'>0</span> <span m='113400'>over</span>
  <span m='113730'>2</span> <span m='114110'>x</span> <span
  m='114350'>squared,</span> <span m='115000'>plus</span> <span m='115550'>dot
  dot dot.</span> <span m='116220'>I'm</span> <span m='116360'>not</span> <span
  m='116500'>going to</span> <span m='116650'>write</span> <span
  m='116850'>out</span> <span m='117360'>the</span> <span m='117460'>next</span>
  <span m='117770'>few</span> <span m='117920'>terms.</span> </p><p><span
  m='118340'>And</span> <span m='118560'>if</span> <span m='118620'>you</span>
  <span m='118720'>want</span> <span m='118890'>to</span> <span
  m='119040'>apply</span> <span m='119480'>this</span> <span
  m='119670'>formula</span> <span m='120070'>to</span> <span
  m='120150'>secant</span> <span m='120600'>of x,</span> <span
  m='121100'>what</span> <span m='121310'>you</span> <span
  m='121380'>would</span> <span m='121500'>have</span> <span
  m='121700'>to</span> <span m='121790'>do,</span> <span m='122170'>is</span>
  <span m='122370'>you</span> <span m='122450'>would</span> <span
  m='122560'>have</span> <span m='122730'>to</span> <span
  m='122830'>compute</span> <span m='123510'>these</span> <span
  m='123730'>derivatives.</span> <span m='124490'>And</span> <span
  m='124660'>so</span> <span m='124770'>we</span> <span m='125250'>could</span>
  <span m='125400'>try</span> <span m='125630'>doing</span> <span
  m='125910'>that.</span> <span m='126180'>So</span> <span m='127430'>in</span>
  <span m='127560'>our</span> <span m='127700'>case,</span> <span m='127940'>f
  of</span> <span m='128090'>x is</span> <span m='128490'>equal</span> <span
  m='128700'>to</span> <span m='128770'>secant</span> <span m='129190'>of</span>
  <span m='129280'>x.</span> <span m='129830'>So</span> <span m='130040'>f
  of</span> <span m='130310'>0</span> <span m='131080'>is</span> <span
  m='131260'>secant</span> <span m='131460'>of</span> <span m='131790'>0,</span>
  <span m='133340'>which</span> <span m='133520'>is</span> <span
  m='133650'>just</span> <span m='133900'>1.</span> <span m='134670'>So</span>
  <span m='134770'>then</span> <span m='134910'>we</span> <span
  m='135020'>need</span> <span m='135170'>to</span> <span m='135240'>know</span>
  <span m='135460'>f</span> <span m='135780'>prime</span> <span
  m='136120'>of</span> <span m='136220'>x,</span> <span m='136910'>so</span>
  <span m='137030'>that's</span> <span m='137270'>the</span> <span
  m='137370'>derivative</span> <span m='138050'>of</span> <span
  m='138180'>secant</span> <span m='138430'>of</span> <span m='138810'>x.</span>
  <span m='139150'>So</span> <span m='139490'>this</span> <span
  m='139720'>is</span> <span m='139850'>one</span> <span m='140020'>you</span>
  <span m='140110'>should</span> <span m='140290'>remember.</span> <span
  m='140990'>This</span> <span m='141180'>is</span> <span
  m='141300'>equal</span> <span m='141550'>to</span> <span
  m='142020'>secant</span> <span m='143370'>x</span> <span
  m='144200'>times</span> <span m='145340'>tan</span> <span m='145840'>x.</span>
  <span m='146800'>And</span> <span m='147030'>when</span> <span
  m='147120'>you</span> <span m='147210'>plug</span> <span m='147510'>in</span>
  <span m='147610'>x</span> <span m='147890'>equal to</span> <span
  m='148130'>0,</span> <span m='148830'>well,</span> <span m='149000'>the</span>
  <span m='149090'>tan</span> <span m='149410'>x is</span> <span
  m='149770'>0.</span> <span m='150390'>So</span> <span m='150560'>f</span>
  <span m='150780'>prime</span> <span m='151060'>of</span> <span
  m='151240'>0</span> <span m='153110'>is equal</span> <span
  m='153390'>to</span> <span m='153670'>0.</span> </p><p><span
  m='154440'>And</span> <span m='154590'>then</span> <span m='154700'>you</span>
  <span m='154800'>could</span> <span m='154970'>keep</span> <span
  m='155130'>going.</span> <span m='155470'>So</span> <span
  m='155570'>you</span> <span m='155680'>could</span> <span
  m='155800'>compute</span> <span m='156140'>f</span> <span
  m='156360'>double</span> <span m='156640'>prime</span> <span m='157020'>of
  x.</span> <span m='157650'>So</span> <span m='157820'>we</span> <span
  m='157920'>would</span> <span m='158020'>have</span> <span
  m='158160'>to</span> <span m='158260'>compute</span> <span
  m='158680'>the</span> <span m='158780'>derivative</span> <span
  m='159060'>of</span> <span m='159400'>secant</span> <span m='159520'>x</span>
  <span m='160060'>tan</span> <span m='160290'>x.</span> <span m='160720'>And
  you</span> <span m='160900'>would</span> <span m='161000'>do</span> <span
  m='161140'>that</span> <span m='161360'>by</span> <span m='161500'>the</span>
  <span m='161610'>product</span> <span m='162060'>rule.</span> <span
  m='162490'>You</span> <span m='162640'>know,</span> <span
  m='162760'>you</span> <span m='163120'>take</span> <span
  m='163430'>derivative</span> <span m='163910'>of</span> <span
  m='164020'>secant</span> <span m='164570'>of</span> <span m='164690'>x,</span>
  <span m='165270'>and</span> <span m='165510'>that</span> <span
  m='165650'>gives</span> <span m='165870'>you</span> <span
  m='166780'>secant</span> <span m='166940'>x</span> <span m='168840'>tan</span>
  <span m='169250'>x</span> <span m='171000'>times</span> <span
  m='171430'>tan</span> <span m='171846'>x</span> <span m='173930'>plus--</span>
  <span m='174820'>and</span> <span m='174970'>then</span> <span
  m='175080'>you,</span> <span m='175230'>OK.</span> <span m='175460'>So you
  leave</span> <span m='175880'>secant</span> <span m='176150'>of x,</span>
  <span m='178130'>and</span> <span m='178300'>you</span> <span
  m='178380'>multiply</span> <span m='178670'>it</span> <span
  m='178960'>by</span> <span m='179340'>the</span> <span
  m='179410'>derivative</span> <span m='179710'>of</span> <span
  m='180010'>tangent,</span> <span m='181110'>which</span> <span
  m='181290'>is</span> <span m='181500'>secant</span> <span
  m='181900'>squared</span> <span m='183320'>x.</span> <span
  m='184260'>And</span> <span m='184460'>now</span> <span m='184530'>when</span>
  <span m='184660'>you</span> <span m='184740'>put</span> <span
  m='184920'>in</span> <span m='185020'>0</span> <span m='185440'>here,</span>
  <span m='186520'>you get</span> <span m='186720'>f</span> <span
  m='186990'>double</span> <span m='187250'>prime</span> <span
  m='188250'>of</span> <span m='188460'>0.</span> <span m='189160'>Well,</span>
  <span m='189590'>OK.</span> <span m='189780'>So</span> <span
  m='189910'>this</span> <span m='190100'>has</span> <span m='190270'>a</span>
  <span m='190330'>tan</span> <span m='190720'>x in it,</span> <span
  m='191170'>so</span> <span m='191260'>that</span> <span
  m='191450'>part's</span> <span m='191660'>going to</span> <span
  m='191820'>give</span> <span m='191950'>you</span> <span m='192040'>0.</span>
  <span m='192550'>And</span> <span m='192750'>here</span> <span
  m='192910'>we</span> <span m='193020'>end</span> <span m='193140'>up</span>
  <span m='193210'>with</span> <span m='193370'>secant</span> <span
  m='193530'>of</span> <span m='193840'>0</span> <span m='194200'>times</span>
  <span m='194470'>secant</span> <span m='194840'>squared</span> <span
  m='195160'>of</span> <span m='195270'>0,</span> <span m='195650'>so</span>
  <span m='195810'>that's</span> <span m='196240'>1</span> <span
  m='196770'>times</span> <span m='197150'>1</span> <span
  m='197400'>times</span> <span m='197850'>1.</span> <span m='198070'>So that's
  just</span> <span m='198280'>1.</span> <span m='199000'>So f</span> <span
  m='199290'>double</span> <span m='199540'>prime</span> <span
  m='199750'>of</span> <span m='199820'>0</span> <span m='200420'>is</span>
  <span m='200640'>1,</span> <span m='200970'>and</span> <span
  m='201190'>you</span> <span m='201270'>could</span> <span
  m='201400'>keep</span> <span m='201660'>doing</span> <span
  m='201920'>this.</span> </p><p><span m='202040'>Now</span> <span
  m='202140'>one</span> <span m='202340'>thing</span> <span
  m='202720'>you'll</span> <span m='202940'>notice</span> <span
  m='203220'>is</span> <span m='203350'>that</span> <span m='203470'>this</span>
  <span m='203630'>is</span> <span m='203720'>getting</span> <span
  m='203970'>more</span> <span m='204200'>and</span> <span
  m='204300'>more</span> <span m='204450'>complicated.</span> <span
  m='204970'>I</span> <span m='205030'>mean,</span> <span m='205500'>we</span>
  <span m='205610'>can</span> <span m='205740'>simplify</span> <span
  m='206210'>this</span> <span m='206360'>expression</span> <span
  m='206800'>a</span> <span m='206860'>little</span> <span
  m='207070'>bit.</span> <span m='207230'>We</span> <span
  m='207330'>could</span> <span m='207490'>write</span> <span
  m='207700'>it</span> <span m='207790'>as</span> <span m='208440'>secant</span>
  <span m='208700'>x</span> <span m='209320'>tan</span> <span
  m='209660'>squared</span> <span m='210110'>x</span> <span
  m='210730'>plus</span> <span m='211110'>secant</span> <span
  m='211460'>cubed</span> <span m='211740'>x,</span> <span m='212250'>and there
  are,</span> <span m='212850'>you</span> <span m='212950'>know,</span> <span
  m='213050'>all</span> <span m='213190'>sorts</span> <span m='213430'>of</span>
  <span m='213630'>trig</span> <span m='214020'>manipulations</span> <span
  m='214720'>you</span> <span m='214790'>could</span> <span
  m='214950'>do,</span> <span m='215150'>if</span> <span m='215300'>you</span>
  <span m='215380'>wanted</span> <span m='215620'>to</span> <span
  m='215710'>try</span> <span m='215910'>and</span> <span
  m='216040'>rewrite</span> <span m='216400'>that</span> <span
  m='216570'>in</span> <span m='216680'>some</span> <span
  m='216910'>simpler</span> <span m='217290'>form.</span> <span
  m='219120'>But</span> <span m='220540'>fundamentally,</span> <span
  m='221170'>it's</span> <span m='221500'>more</span> <span
  m='221730'>complicated</span> <span m='222330'>than</span> <span
  m='222500'>the</span> <span m='222940'>first</span> <span
  m='223200'>derivative</span> <span m='223620'>was,</span> <span
  m='223970'>and</span> <span m='224750'>that's</span> <span
  m='224900'>more</span> <span m='225060'>complicated</span> <span
  m='225550'>in</span> <span m='225610'>the</span> <span
  m='225690'>function.</span> <span m='226010'>And</span> <span m='226120'>it
  will</span> <span m='226230'>keep</span> <span m='226470'>getting</span> <span
  m='226730'>more</span> <span m='226870'>complicated</span> <span
  m='227430'>as</span> <span m='227540'>you</span> <span
  m='227660'>compute</span> <span m='228010'>more</span> <span
  m='228180'>derivatives.</span> <span m='229610'>So</span> <span
  m='229780'>we</span> <span m='229900'>can</span> <span m='230030'>do</span>
  <span m='230180'>this.</span> </p><p><span m='231570'>So</span> <span
  m='231790'>so</span> <span m='232150'>far</span> <span m='232390'>this</span>
  <span m='232480'>shows</span> <span m='232880'>us,</span> <span
  m='233380'>by</span> <span m='233510'>the</span> <span m='233610'>way,</span>
  <span m='233770'>that</span> <span m='233920'>this</span> <span
  m='234060'>is</span> <span m='234200'>equal</span> <span m='234420'>to</span>
  <span m='234510'>1</span> <span m='235410'>plus</span> <span
  m='235800'>0x</span> <span m='236690'>plus</span> <span m='237710'>x</span>
  <span m='237950'>squared</span> <span m='239070'>over</span> <span
  m='239280'>2</span> <span m='239570'>plus</span> <span m='239920'>dot dot
  dot.</span> <span m='240810'>And</span> <span m='241030'>if</span> <span
  m='241090'>you</span> <span m='241190'>wanted</span> <span
  m='241450'>to</span> <span m='241530'>compute, you know,</span> <span
  m='242220'>up</span> <span m='242360'>through</span> <span
  m='242520'>the</span> <span m='242610'>fourth</span> <span
  m='243170'>degree</span> <span m='243560'>term</span> <span
  m='243960'>or</span> <span m='244080'>something</span> <span
  m='244430'>like</span> <span m='244650'>this,</span> <span
  m='245040'>that's</span> <span m='245630'>something</span> <span
  m='246030'>that's</span> <span m='246310'>manageable.</span> <span
  m='247760'>But</span> <span m='247930'>I</span> <span m='247980'>want</span>
  <span m='248140'>to</span> <span m='248200'>suggest</span> <span
  m='248570'>that</span> <span m='248670'>there</span> <span
  m='248770'>are</span> <span m='248870'>maybe</span> <span
  m='249130'>some</span> <span m='249300'>nicer</span> <span
  m='249700'>ways</span> <span m='250020'>to</span> <span m='250160'>do</span>
  <span m='250300'>it.</span> </p><p><span m='251610'>So</span> <span
  m='251760'>one</span> <span m='252120'>thing</span> <span m='252360'>to</span>
  <span m='252470'>notice</span> <span m='254010'>is</span> <span
  m='254250'>that</span> <span m='254370'>secant</span> <span
  m='254880'>of</span> <span m='254960'>x is</span> <span
  m='255340'>closely</span> <span m='256030'>related</span> <span
  m='256400'>to</span> <span m='256480'>the</span> <span
  m='256570'>function</span> <span m='256880'>cosine</span> <span
  m='257139'>of</span> <span m='257400'>x.</span> <span m='258570'>And</span>
  <span m='258720'>you</span> <span m='258810'>know</span> <span
  m='259130'>the</span> <span m='259270'>Taylor</span> <span
  m='259590'>series</span> <span m='259900'>for</span> <span m='260010'>cosine
  of</span> <span m='260480'>x.</span> <span m='261120'>So</span> <span
  m='261310'>one</span> <span m='261570'>thing</span> <span
  m='261730'>you</span> <span m='261820'>could</span> <span
  m='262010'>think</span> <span m='262230'>to</span> <span m='262320'>do,</span>
  <span m='262670'>is</span> <span m='262910'>to</span> <span
  m='263040'>leverage</span> <span m='263590'>the</span> <span
  m='263710'>information</span> <span m='264230'>that</span> <span
  m='264320'>you</span> <span m='264400'>have</span> <span
  m='264610'>about</span> <span m='264840'>cosine</span> <span
  m='265280'>of</span> <span m='265340'>x</span> <span m='265680'>in</span>
  <span m='265890'>order</span> <span m='266090'>to</span> <span
  m='266200'>use</span> <span m='266510'>it</span> <span m='266850'>to</span>
  <span m='266980'>get</span> <span m='267180'>some</span> <span
  m='267310'>information</span> <span m='267850'>about</span> <span
  m='268150'>secant of</span> <span m='268320'>x.</span> <span
  m='269350'>So</span> <span m='269510'>one</span> <span
  m='269800'>simple</span> <span m='270300'>way</span> <span
  m='270470'>to</span> <span m='270590'>do</span> <span m='270760'>that,</span>
  <span m='272090'>is</span> <span m='272280'>that</span> <span
  m='272390'>you</span> <span m='272550'>know</span> <span
  m='275650'>that</span> <span m='277390'>cosine of</span> <span
  m='278050'>x</span> <span m='279660'>is</span> <span m='279860'>even.</span>
  <span m='280490'>It's</span> <span m='280600'>an</span> <span
  m='280760'>even</span> <span m='281060'>function.</span> <span
  m='282170'>Cosine</span> <span m='282660'>of</span> <span
  m='282770'>minus</span> <span m='283100'>x is</span> <span
  m='283440'>equal</span> <span m='283620'>to</span> <span m='283710'>cosine
  of</span> <span m='284130'>x.</span> <span m='284760'>So</span> <span
  m='284930'>that</span> <span m='285090'>means</span> <span
  m='285420'>secant</span> <span m='285790'>of</span> <span m='285870'>x
  is</span> <span m='286160'>also</span> <span m='286560'>even.</span>
  </p><p><span m='294880'>Secant</span> <span m='295280'>of</span> <span
  m='295360'>x</span> <span m='295560'>is</span> <span m='295670'>an</span>
  <span m='295790'>even</span> <span m='296150'>function.</span> <span
  m='296840'>And</span> <span m='297060'>you've</span> <span
  m='297170'>seen</span> <span m='297810'>that</span> <span
  m='298140'>even</span> <span m='298520'>functions,</span> <span
  m='299280'>their</span> <span m='299450'>Taylor</span> <span
  m='299870'>series,</span> <span m='300950'>all</span> <span
  m='301290'>the</span> <span m='301540'>odd</span> <span
  m='301920'>powers</span> <span m='302720'>have</span> <span
  m='303480'>coefficient</span> <span m='303990'>0.</span> <span
  m='305320'>So</span> <span m='305490'>what</span> <span m='305610'>that</span>
  <span m='305770'>means</span> <span m='306040'>is</span> <span
  m='306170'>without</span> <span m='306550'>ever</span> <span
  m='306800'>computing</span> <span m='307310'>the</span> <span
  m='307390'>third</span> <span m='307680'>derivative,</span> <span
  m='308410'>we</span> <span m='308600'>can</span> <span m='308750'>know</span>
  <span m='308930'>already</span> <span m='309630'>that</span> <span
  m='309770'>the</span> <span m='309850'>next</span> <span
  m='310250'>term</span> <span m='310490'>in</span> <span m='310570'>this</span>
  <span m='310710'>Taylor</span> <span m='311030'>series</span> <span
  m='311580'>is</span> <span m='311690'>going to</span> <span
  m='311860'>be</span> <span m='312000'>0 x</span> <span m='312480'>cubed</span>
  <span m='313130'>over</span> <span m='313350'>6.</span> <span
  m='314800'>OK?</span> <span m='315280'>So</span> <span
  m='315720'>that's</span> <span m='316020'>nice.</span> <span
  m='318350'>So</span> <span m='321190'>the</span> <span m='321360'>odd</span>
  <span m='323300'>terms</span> <span m='326780'>of</span> <span
  m='326970'>the</span> <span m='327080'>Taylor</span> <span
  m='327410'>series</span> <span m='330020'>for</span> <span
  m='331250'>secant</span> <span m='331730'>of</span> <span m='331800'>x</span>
  <span m='333350'>are</span> <span m='333690'>0.</span> </p><p><span
  m='334740'>OK.</span> <span m='335000'>So</span> <span
  m='335120'>that's</span> <span m='335320'>one</span> <span
  m='335570'>thing</span> <span m='335730'>you</span> <span
  m='335820'>can</span> <span m='335970'>get</span> <span
  m='336120'>right</span> <span m='336300'>away.</span> <span
  m='336480'>So</span> <span m='336600'>that</span> <span
  m='336750'>gives</span> <span m='336950'>you,</span> <span
  m='337440'>if</span> <span m='337760'>you</span> <span m='337870'>like,</span>
  <span m='338520'>that gives you half</span> <span m='338810'>of</span> <span
  m='338930'>the</span> <span m='339040'>terms</span> <span m='339450'>of</span>
  <span m='339570'>the</span> <span m='339680'>Taylor</span> <span
  m='339970'>series.</span> <span m='340280'>It's</span> <span
  m='340590'>a</span> <span m='340680'>little</span> <span m='340900'>bit</span>
  <span m='341020'>of</span> <span m='341100'>a</span> <span
  m='341180'>joke,</span> <span m='341630'>but.</span> </p><p><span
  m='343920'>OK, so</span> <span m='344550'>then</span> <span
  m='344720'>you</span> <span m='344840'>only</span> <span
  m='345250'>need</span> <span m='345460'>to</span> <span
  m='345540'>figure</span> <span m='345840'>out</span> <span
  m='345970'>the</span> <span m='346080'>even</span> <span
  m='346390'>terms.</span> <span m='347110'>That's</span> <span
  m='347640'>one</span> <span m='348000'>way</span> <span m='348180'>we</span>
  <span m='348320'>can</span> <span m='348460'>leverage</span> <span
  m='348940'>the</span> <span m='349060'>relationship</span> <span
  m='349620'>between</span> <span m='349910'>secant</span> <span m='350400'>and
  cosine.</span> <span m='351150'>The</span> <span m='351430'>other</span> <span
  m='351690'>way</span> <span m='352090'>is</span> <span m='352300'>that</span>
  <span m='352400'>we</span> <span m='352500'>can</span> <span
  m='352640'>remember</span> <span m='352970'>that</span> <span
  m='353180'>Taylor</span> <span m='353550'>series</span> <span
  m='353930'>multiply</span> <span m='354810'>just</span> <span
  m='355090'>like</span> <span m='355290'>polynomials</span> <span
  m='356080'>do.</span> <span m='356540'>So</span> <span m='356740'>if</span>
  <span m='358890'>secant</span> <span m='359410'>is</span> <span
  m='359570'>1</span> <span m='359870'>over</span> <span
  m='360120'>cosine,</span> <span m='360940'>that</span> <span
  m='361130'>means</span> <span m='361490'>secant</span> <span
  m='362040'>times</span> <span m='362610'>cosine</span> <span
  m='363360'>is</span> <span m='363580'>equal</span> <span m='363830'>to</span>
  <span m='363910'>1.</span> <span m='364810'>OK?</span> <span
  m='367450'>So</span> <span m='369540'>idea,</span> <span
  m='371530'>secant</span> <span m='371910'>of</span> <span m='372200'>x</span>
  <span m='373270'>times</span> <span m='374830'>cosine of</span> <span
  m='375360'>x</span> <span m='376300'>is</span> <span m='376470'>equal</span>
  <span m='376590'>to</span> <span m='376800'>1.</span> </p><p><span
  m='377870'>Now,</span> <span m='378730'>that</span> <span
  m='379030'>means</span> <span m='379260'>that</span> <span
  m='379390'>the</span> <span m='379500'>Taylor</span> <span
  m='379900'>series</span> <span m='380360'>for</span> <span
  m='380550'>secant</span> <span m='380730'>of x</span> <span
  m='381220'>times</span> <span m='381570'>the</span> <span
  m='381670'>Taylor</span> <span m='382030'>series</span> <span
  m='382470'>for</span> <span m='382590'>cosine of</span> <span
  m='383010'>x</span> <span m='383440'>has</span> <span m='383680'>to</span>
  <span m='383780'>simplify</span> <span m='384290'>just</span> <span
  m='384570'>to</span> <span m='384670'>1.</span> <span m='385380'>So</span>
  <span m='385600'>we</span> <span m='385710'>can</span> <span
  m='385930'>write</span> <span m='386270'>down</span> <span
  m='386560'>that</span> <span m='386740'>product</span> <span
  m='387360'>as</span> <span m='387540'>a</span> <span m='387590'>product</span>
  <span m='388040'>of</span> <span m='388150'>two</span> <span
  m='388370'>infinite</span> <span m='388800'>polynomials,</span> <span
  m='389580'>and</span> <span m='389800'>we</span> <span m='389870'>can</span>
  <span m='389990'>start</span> <span m='390280'>multiplying</span> <span
  m='390940'>term</span> <span m='391230'>by</span> <span
  m='391410'>term.</span> <span m='391880'>And</span> <span
  m='392150'>that'll</span> <span m='392430'>allow</span> <span
  m='392790'>us</span> <span m='392930'>to</span> <span m='393030'>solve</span>
  <span m='393760'>for</span> <span m='393930'>a</span> <span
  m='394020'>bunch</span> <span m='394290'>of</span> <span
  m='394430'>terms,</span> <span m='395670'>just</span> <span
  m='395950'>by</span> <span m='396080'>solving</span> <span
  m='396830'>some</span> <span m='397030'>simple</span> <span
  m='397390'>linear</span> <span m='397720'>equations.</span> <span
  m='398130'>So</span> <span m='398330'>let</span> <span m='398450'>me</span>
  <span m='398520'>show</span> <span m='398710'>you</span> <span
  m='398830'>what</span> <span m='398940'>I</span> <span m='399030'>mean.</span>
  <span m='399530'>So</span> <span m='399690'>we</span> <span
  m='399810'>know--</span> <span m='401040'>let</span> <span
  m='401170'>me</span> <span m='401370'>write</span> <span m='401600'>it</span>
  <span m='401690'>as</span> <span m='401840'>cosine</span> <span
  m='402320'>times</span> <span m='402630'>secant.</span> <span
  m='403200'>So</span> <span m='403410'>we</span> <span m='403530'>know</span>
  <span m='403780'>that</span> <span m='403950'>cosine of x</span> <span
  m='405290'>is</span> <span m='406050'>1</span> <span m='407350'>minus</span>
  <span m='408030'>x</span> <span m='408290'>squared</span> <span
  m='409290'>over</span> <span m='409590'>2</span> <span m='411050'>plus</span>
  <span m='412490'>x</span> <span m='412830'>to</span> <span
  m='412910'>the</span> <span m='413020'>fourth</span> <span
  m='414120'>over</span> <span m='414370'>24--</span> <span
  m='415450'>that's</span> <span m='415720'>4</span> <span
  m='415970'>factorial--</span> <span m='417150'>minus</span> <span
  m='417800'>x</span> <span m='418120'>to</span> <span m='418200'>the</span>
  <span m='418310'>sixth</span> <span m='419480'>over</span> <span
  m='419760'>720,</span> <span m='420990'>which</span> <span
  m='421150'>is</span> <span m='421260'>6</span> <span
  m='421530'>factorial,</span> <span m='421960'>plus</span> <span m='422240'>dot
  dot dot.</span> </p><p><span m='423980'>And</span> <span m='424220'>so</span>
  <span m='424320'>we</span> <span m='424450'>know</span> <span
  m='424610'>that</span> <span m='424710'>if</span> <span m='424790'>we</span>
  <span m='424900'>multiply</span> <span m='425500'>this</span> <span
  m='425680'>by</span> <span m='425880'>the</span> <span
  m='426470'>series</span> <span m='426940'>for</span> <span
  m='427080'>secant</span> <span m='427340'>of x--</span> <span
  m='427670'>well,</span> <span m='427950'>what</span> <span
  m='428130'>is</span> <span m='428240'>the</span> <span
  m='428330'>series</span> <span m='428630'>for</span> <span m='428740'>secant
  of x?</span> <span m='428890'>Well, we've</span> <span
  m='429240'>already</span> <span m='429620'>computed</span> <span
  m='430050'>a</span> <span m='430120'>few</span> <span m='430340'>terms.</span>
  <span m='431000'>We</span> <span m='431240'>know</span> <span
  m='431420'>that</span> <span m='431590'>it's</span> <span m='432700'>1</span>
  <span m='434280'>plus</span> <span m='435470'>x</span> <span
  m='435930'>squared</span> <span m='436240'>over</span> <span
  m='436500'>2,</span> <span m='437260'>we</span> <span
  m='437430'>computed</span> <span m='437820'>that</span> <span
  m='438070'>already.</span> <span m='438370'>And</span> <span
  m='438460'>we</span> <span m='438560'>know</span> <span m='438720'>that</span>
  <span m='438860'>the</span> <span m='438970'>third</span> <span
  m='439280'>degree</span> <span m='439530'>term is</span> <span
  m='439860'>0.</span> <span m='440225'>So</span> <span
  m='440590'>there's</span> <span m='440870'>some</span> <span
  m='441610'>fourth</span> <span m='442040'>degree</span> <span
  m='442300'>coefficient,</span> <span m='442620'>a_4,</span> <span m='444440'>x
  to</span> <span m='444850'>the</span> <span m='444960'>fourth,</span> <span
  m='445970'>or</span> <span m='446230'>4</span> <span
  m='446530'>factorial.</span> <span m='448300'>And</span> <span
  m='448510'>there's</span> <span m='448650'>some--</span> <span
  m='449380'>well,</span> <span m='450050'>we know, we</span> <span
  m='450200'>said</span> <span m='450400'>it's</span> <span
  m='450560'>even,</span> <span m='450940'>so</span> <span m='451070'>we</span>
  <span m='451170'>know</span> <span m='451270'>the</span> <span
  m='451360'>fifth</span> <span m='451640'>degree</span> <span
  m='451890'>coefficient</span> <span m='452100'>is</span> <span
  m='452410'>0.</span> <span m='453360'>So</span> <span m='453560'>then</span>
  <span m='453810'>the</span> <span m='454020'>sixth</span> <span
  m='454520'>degree</span> <span m='454790'>coefficient</span> <span
  m='455210'>we</span> <span m='455320'>don't</span> <span
  m='455530'>know</span> <span m='455680'>yet.</span> <span m='455950'>So</span>
  <span m='456070'>this</span> <span m='456220'>is</span> <span
  m='456680'>plus</span> <span m='457820'>a sub</span> <span m='458380'>6</span>
  <span m='458870'>times</span> <span m='459710'>x</span> <span
  m='459980'>to</span> <span m='460060'>the</span> <span m='460160'>sixth</span>
  <span m='460640'>over</span> <span m='460850'>6</span> <span
  m='461230'>factorial,</span> <span m='462400'>plus dot dot dot.</span>
  </p><p><span m='463920'>So</span> <span m='464080'>we</span> <span
  m='464200'>know</span> <span m='464440'>that</span> <span
  m='464570'>when</span> <span m='464690'>we</span> <span
  m='464810'>multiply</span> <span m='465480'>these</span> <span
  m='465730'>two</span> <span m='465870'>things</span> <span
  m='466180'>together,</span> <span m='466460'>it</span> <span
  m='466740'>has</span> <span m='467040'>to</span> <span m='467140'>give</span>
  <span m='467260'>us</span> <span m='467370'>just</span> <span
  m='467560'>1.</span> <span m='468280'>All</span> <span m='468500'>the</span>
  <span m='468860'>higher-order</span> <span m='469420'>terms</span> <span
  m='469800'>have</span> <span m='469970'>to</span> <span
  m='470070'>cancel,</span> <span m='470620'>because</span> <span
  m='470870'>over</span> <span m='471100'>here</span> <span m='471320'>we</span>
  <span m='471440'>have a</span> <span m='471600'>1.</span> </p><p><span
  m='472590'>So</span> <span m='472770'>what</span> <span m='472940'>you</span>
  <span m='473030'>can</span> <span m='473180'>do,</span> <span
  m='473500'>is</span> <span m='473700'>you</span> <span m='473780'>can</span>
  <span m='473900'>actually</span> <span m='474290'>try</span> <span
  m='474510'>multiplying</span> <span m='475150'>these</span> <span
  m='475350'>things</span> <span m='475580'>out.</span> <span
  m='475850'>So</span> <span m='476220'>it's</span> <span m='476400'>easy</span>
  <span m='476675'>to see,</span> <span m='476950'>for</span> <span
  m='477070'>example,</span> <span m='477350'>that  the</span> <span
  m='477490'>constant</span> <span m='477900'>term of</span> <span
  m='478370'>this</span> <span m='478500'>product</span> <span
  m='478850'>is</span> <span m='478930'>just</span> <span m='479140'>1</span>
  <span m='479340'>times</span> <span m='479630'>1,</span> <span
  m='479870'>which is</span> <span m='480190'>1.</span> <span
  m='480700'>Which</span> <span m='480890'>is</span> <span
  m='481020'>good.</span> <span m='481250'>So</span> <span
  m='481380'>that's</span> <span m='481560'>a</span> <span
  m='481610'>check</span> <span m='481980'>on</span> <span
  m='482070'>what</span> <span m='482240'>we've</span> <span
  m='482400'>done</span> <span m='482610'>so</span> <span m='482760'>far.</span>
  <span m='483360'>And</span> <span m='484120'>there</span> <span
  m='484290'>is</span> <span m='484500'>no</span> <span
  m='484760'>x-term,</span> <span m='485360'>because</span> <span
  m='485610'>there</span> <span m='485700'>are</span> <span m='485870'>no</span>
  <span m='486020'>x's.</span> <span m='486320'>The</span> <span
  m='486470'>x</span> <span m='486710'>squared</span> <span
  m='487270'>term</span> <span m='487610'>here</span> <span m='488090'>is</span>
  <span m='488410'>1</span> <span m='488890'>times</span> <span
  m='489280'>x</span> <span m='489520'>squared</span> <span
  m='489830'>over</span> <span m='490020'>2</span> <span m='490820'>minus</span>
  <span m='491255'>x</span> <span m='491690'>squared</span> <span
  m='491910'>over</span> <span m='492090'>2</span> <span m='492280'>times</span>
  <span m='492560'>1.</span> <span m='493400'>Well,</span> <span
  m='493580'>that</span> <span m='493720'>gives</span> <span
  m='493910'>us</span> <span m='493990'>0,</span> <span m='494560'>so</span>
  <span m='494690'>that's</span> <span m='494890'>good.</span> <span
  m='495100'>So</span> <span m='495230'>this</span> <span
  m='495870'>product</span> <span m='496250'>is</span> <span
  m='496340'>equal</span> <span m='496580'>to--</span> <span m='496770'>well,
  it's</span> <span m='497150'>1,</span> <span m='497850'>plus</span> <span
  m='498180'>we</span> <span m='498290'>saw</span> <span m='498450'>0x,</span>
  <span m='499510'>plus</span> <span m='499770'>0</span> <span
  m='500060'>x</span> <span m='500300'>squared.</span> <span
  m='501030'>How</span> <span m='501170'>about</span> <span
  m='501280'>the</span> <span m='501370'>x cubed</span> <span
  m='501890'>term?</span> <span m='502200'>Well,</span> <span
  m='502550'>there</span> <span m='502700'>are</span> <span m='502820'>no</span>
  <span m='502970'>odd</span> <span m='503270'>terms</span> <span
  m='503560'>in</span> <span m='503650'>this</span> <span m='503770'>product,
  so</span> <span m='504190'>there's</span> <span m='504340'>no</span> <span
  m='504470'>x cubed.</span> <span m='504990'>How</span> <span
  m='505110'>about</span> <span m='505230'>the</span> <span m='505600'>x
  to</span> <span m='505700'>the</span> <span m='505790'>fourth</span> <span
  m='506170'>term?</span> <span m='506540'>Well,</span> <span
  m='506910'>OK.</span> <span m='507150'>So</span> <span m='507300'>how</span>
  <span m='507420'>do</span> <span m='507500'>we</span> <span
  m='507580'>get</span> <span m='507710'>an x</span> <span m='507970'>to</span>
  <span m='508030'>the</span> <span m='508130'>fourth?</span> <span
  m='508550'>We</span> <span m='508740'>could</span> <span
  m='508840'>have</span> <span m='508940'>an x</span> <span m='509280'>to</span>
  <span m='509370'>the</span> <span m='509470'>fourth</span> <span
  m='509760'>here</span> <span m='509930'>times</span> <span m='510140'>a</span>
  <span m='510200'>constant.</span> <span m='511140'>So</span> <span
  m='511360'>that's</span> <span m='511820'>x</span> <span m='512280'>to</span>
  <span m='512380'>the</span> <span m='512490'>fourth</span> <span
  m='513510'>over</span> <span m='513820'>24.</span> <span m='515580'>Or,</span>
  <span m='516110'>we</span> <span m='516250'>could</span> <span
  m='516360'>have</span> <span m='516450'>an</span> <span m='516550'>x</span>
  <span m='516810'>squared</span> <span m='517170'>times</span> <span
  m='517420'>an</span> <span m='517530'>x</span> <span
  m='517780'>squared.</span> <span m='518520'>So</span> <span
  m='518710'>in</span> <span m='518770'>this</span> <span
  m='518890'>case,</span> <span m='519100'>that</span> <span m='519180'>gives
  us</span> <span m='519440'>minus</span> <span m='519700'>x squared</span>
  <span m='520170'>over</span> <span m='520340'>2</span> <span
  m='520540'>times</span> <span m='520780'>x squared</span> <span
  m='521140'>over</span> <span m='521280'>2,</span> <span
  m='521910'>which</span> <span m='522050'>is</span> <span
  m='522160'>minus</span> <span m='522520'>x</span> <span m='522820'>to</span>
  <span m='522890'>the</span> <span m='522990'>fourth</span> <span
  m='523850'>over</span> <span m='524060'>4.</span> <span m='524600'>Or</span>
  <span m='524860'>we</span> <span m='524990'>could</span> <span
  m='525090'>have</span> <span m='525200'>a</span> <span
  m='525250'>constant</span> <span m='525720'>times</span> <span
  m='525930'>an</span> <span m='526250'>x to</span> <span m='526350'>the</span>
  <span m='526450'>fourth.</span> <span m='526790'>So</span> <span
  m='527220'>this</span> <span m='527400'>is</span> <span m='528210'>plus</span>
  <span m='529440'>a_4</span> <span m='531090'>x</span> <span
  m='531420'>to</span> <span m='531500'>the</span> <span
  m='531580'>fourth</span> <span m='532700'>over</span> <span
  m='533010'>24.</span> <span m='535430'>And</span> <span m='535580'>then</span>
  <span m='535690'>we'll</span> <span m='535965'>have</span> <span
  m='536240'>a</span> <span m='536400'>sixth-degree</span> <span
  m='536795'>term,</span> <span m='537190'>and</span> <span m='537370'>so
  on.</span> </p><p><span m='537850'>Notice</span> <span m='538270'>that</span>
  <span m='538390'>there's</span> <span m='538610'>never</span> <span
  m='538910'>any</span> <span m='539110'>involvement</span> <span
  m='539710'>from</span> <span m='539850'>the</span> <span
  m='539920'>higher-order</span> <span m='540560'>terms</span> <span
  m='541190'>in</span> <span m='541400'>the</span> <span
  m='541480'>fourth</span> <span m='541820'>power</span> <span
  m='542140'>here.</span> <span m='542540'>Right?</span> <span
  m='542860'>If</span> <span m='543060'>you</span> <span m='543160'>ever</span>
  <span m='543330'>took</span> <span m='543520'>an</span> <span
  m='543610'>x</span> <span m='543890'>to</span> <span m='543970'>the</span>
  <span m='544070'>sixth</span> <span m='544480'>here,</span> <span
  m='544790'>well</span> <span m='545040'>then</span> <span
  m='545170'>everything</span> <span m='546020'>you</span> <span
  m='546120'>multiply</span> <span m='546550'>it</span> <span
  m='546630'>by</span> <span m='547150'>has</span> <span m='547370'>at</span>
  <span m='547460'>least</span> <span m='547740'>an</span> <span
  m='547820'>x</span> <span m='548100'>to</span> <span m='548170'>the</span>
  <span m='548270'>sixth</span> <span m='548660'>power.</span> <span
  m='549400'>So</span> <span m='549510'>we</span> <span m='549580'>don't</span>
  <span m='549710'>have</span> <span m='549800'>to</span> <span
  m='549870'>worry</span> <span m='550140'>about</span> <span
  m='550350'>that</span> <span m='550500'>showing</span> <span
  m='550840'>up</span> <span m='550960'>in the</span> <span m='551030'>x</span>
  <span m='551410'>to</span> <span m='551480'>the</span> <span
  m='551570'>fourth</span> <span m='551900'>term.</span> </p><p><span
  m='553030'>Well,</span> <span m='553380'>OK.</span> <span m='553780'>We</span>
  <span m='554000'>know</span> <span m='554190'>this</span> <span
  m='554410'>is</span> <span m='554880'>actually</span> <span
  m='555370'>equal</span> <span m='555610'>to</span> <span m='555690'>1,</span>
  <span m='556270'>so</span> <span m='556470'>we</span> <span
  m='556580'>know</span> <span m='556740'>that</span> <span
  m='556980'>this</span> <span m='557240'>thing</span> <span
  m='557830'>has</span> <span m='558080'>to</span> <span m='558170'>be</span>
  <span m='558310'>0.</span> <span m='558670'>This</span> <span
  m='558810'>is</span> <span m='559220'>x to the</span> <span
  m='559410'>fourth</span> <span m='559750'>term.</span> <span
  m='560130'>It</span> <span m='560320'>has</span> <span m='560550'>to</span>
  <span m='560640'>be</span> <span m='560780'>0.</span> <span
  m='561420'>So</span> <span m='561630'>that</span> <span
  m='561870'>means</span> <span m='562210'>that</span> <span m='562740'>1</span>
  <span m='563230'>over</span> <span m='563360'>24</span> <span
  m='565480'>minus</span> <span m='565735'>1</span> <span m='565990'>over</span>
  <span m='566330'>4</span> <span m='567610'>plus</span> <span
  m='568180'>a_4</span> <span m='569450'>over</span> <span m='569780'>24</span>
  <span m='571000'>equals</span> <span m='571950'>0.</span> <span
  m='572450'>So</span> <span m='573850'>OK.</span> <span m='574270'>So</span>
  <span m='574510'>now</span> <span m='574630'>you</span> <span
  m='574760'>can</span> <span m='574910'>multiply</span> <span
  m='575430'>everything</span> <span m='575890'>through</span> <span
  m='576170'>by</span> <span m='576320'>24</span> <span m='577090'>and</span>
  <span m='577340'>rearrange</span> <span m='578120'>to</span> <span
  m='578250'>figure</span> <span m='578540'>out</span> <span
  m='578700'>that</span> <span m='578870'>a_4</span> <span m='580000'>is</span>
  <span m='580170'>equal</span> <span m='580400'>to</span> <span
  m='580480'>5.</span> <span m='582110'>So</span> <span m='582270'>I've</span>
  <span m='582370'>done</span> <span m='582550'>that</span> <span
  m='582730'>correctly.</span> </p><p><span m='583650'>And</span> <span
  m='583980'>then</span> <span m='584130'>if</span> <span m='584270'>you</span>
  <span m='584360'>wanted,</span> <span m='584850'>it</span> <span
  m='585000'>would</span> <span m='585110'>be</span> <span
  m='585200'>fairly</span> <span m='585560'>easy</span> <span
  m='585780'>to</span> <span m='585870'>go</span> <span m='586050'>back</span>
  <span m='586400'>up</span> <span m='586550'>and</span> <span
  m='586660'>then</span> <span m='586770'>you</span> <span
  m='586970'>look</span> <span m='587150'>at</span> <span m='587230'>the</span>
  <span m='587660'>x to</span> <span m='587770'>the</span> <span
  m='587860'>sixth</span> <span m='588350'>term.</span> <span
  m='588920'>And</span> <span m='589110'>from</span> <span
  m='589270'>there,</span> <span m='589480'>you</span> <span
  m='589580'>could</span> <span m='589730'>figure</span> <span
  m='590050'>out</span> <span m='590460'>that</span> <span m='590580'>a_6</span>
  <span m='591340'>was</span> <span m='591530'>equal</span> <span
  m='591820'>to,</span> <span m='591910'>say,</span> <span m='592810'>61</span>
  <span m='593500'>or</span> <span m='593640'>something</span> <span
  m='593960'>like</span> <span m='594130'>that.</span> <span m='594500'>I</span>
  <span m='594630'>think</span> <span m='594820'>61.</span> <span
  m='596250'>And</span> <span m='596420'>you</span> <span
  m='596490'>could</span> <span m='596640'>keep</span> <span
  m='596880'>doing</span> <span m='597200'>this.</span> </p><p><span
  m='597520'>So</span> <span m='597690'>this</span> <span m='597860'>is</span>
  <span m='597990'>one</span> <span m='598230'>way</span> <span
  m='598800'>to</span> <span m='599230'>compute</span> <span
  m='599600'>more</span> <span m='599870'>terms</span> <span
  m='600230'>of</span> <span m='600330'>the</span> <span
  m='600420'>series</span> <span m='600800'>for</span> <span m='601310'>secant
  of</span> <span m='601480'>x.</span> <span m='603700'>Another</span> <span
  m='604110'>thing</span> <span m='604300'>you</span> <span
  m='604420'>could</span> <span m='604600'>do--</span> <span
  m='605040'>which</span> <span m='605320'>I'll</span> <span
  m='605400'>just</span> <span m='605580'>mention</span> <span
  m='605910'>very</span> <span m='606170'>briefly,</span> <span
  m='606540'>I'm</span> <span m='606630'>not</span> <span
  m='606760'>going</span> <span m='606880'>to</span> <span
  m='606940'>show</span> <span m='607130'>you</span> <span m='607250'>how</span>
  <span m='607360'>to</span> <span m='607460'>do</span> <span
  m='607610'>it--</span> <span m='607860'>is</span> <span m='608080'>that</span>
  <span m='608170'>you</span> <span m='608280'>can</span> <span
  m='608430'>do</span> <span m='609080'>long</span> <span
  m='609370'>division</span> <span m='609850'>on</span> <span
  m='610090'>power</span> <span m='610400'>series.</span> <span
  m='611050'>So</span> <span m='611170'>it</span> <span
  m='611250'>actually</span> <span m='611610'>works</span> <span m='611910'>out
  very--</span> <span m='612785'>it</span> <span m='613230'>works</span> <span
  m='613380'>out</span> <span m='613790'>just</span> <span
  m='614000'>like</span> <span m='614260'>this.</span> <span
  m='614540'>It's</span> <span m='615300'>mathematically</span> <span
  m='616120'>equivalent.</span> <span m='616950'>The</span> <span
  m='617780'>way</span> <span m='618180'>you</span> <span
  m='618450'>actually</span> <span m='618820'>do</span> <span
  m='618950'>it</span> <span m='619060'>looks</span> <span
  m='619370'>different.</span> <span m='619630'>It</span> <span
  m='619720'>looks</span> <span m='619940'>like</span> <span
  m='620130'>long</span> <span m='620390'>division.</span> <span
  m='621990'>When</span> <span m='622170'>you</span> <span m='622260'>do</span>
  <span m='622380'>long</span> <span m='622620'>division</span> <span
  m='622890'>with</span> <span m='623050'>polynomials,</span> <span
  m='623920'>you</span> <span m='624110'>start</span> <span
  m='624460'>with</span> <span m='624600'>the</span> <span
  m='624670'>highest-order</span> <span m='625330'>term.</span> <span
  m='625910'>Of</span> <span m='626040'>course,</span> <span m='626210'>power
  series</span> <span m='626750'>don't</span> <span m='626950'>have</span> <span
  m='628170'>highest-order</span> <span m='628760'>terms.</span> <span
  m='629000'>What</span> <span m='629160'>you</span> <span
  m='629240'>actually</span> <span m='629490'>do</span> <span
  m='629580'>with</span> <span m='629690'>a</span> <span m='629730'>power</span>
  <span m='629950'>series,</span> <span m='630220'>is</span> <span
  m='630350'>you</span> <span m='630460'>start</span> <span
  m='630710'>with</span> <span m='630840'>the</span> <span
  m='630930'>lowest-order</span> <span m='631580'>term.</span> <span
  m='632090'>So</span> <span m='632490'>to</span> <span m='632620'>divide</span>
  <span m='633560'>this</span> <span m='634060'>into</span> <span
  m='634390'>1,</span> <span m='635130'>you'd</span> <span
  m='635470'>say,</span> <span m='635710'>oh,</span> <span m='635910'>you</span>
  <span m='636070'>need</span> <span m='636260'>a</span> <span
  m='636590'>factor</span> <span m='636960'>of</span> <span m='637070'>1,</span>
  <span m='637720'>and</span> <span m='637930'>then</span> <span
  m='638040'>you'll</span> <span m='638150'>have</span> <span
  m='638360'>a--</span> <span m='638780'>you</span> <span
  m='638920'>know,</span> <span m='639030'>you</span> <span
  m='639190'>subtract</span> <span m='639780'>off</span> <span
  m='640000'>1</span> <span m='640320'>times</span> <span
  m='640700'>this,</span> <span m='640930'>and</span> <span
  m='641020'>that</span> <span m='641150'>gives</span> <span
  m='641300'>you</span> <span m='641390'>an</span> <span m='641480'>x
  squared</span> <span m='641930'>plus</span> <span m='642190'>2.</span> <span
  m='642450'>And</span> <span m='642630'>so,</span> <span m='642820'>OK,</span>
  <span m='643000'>so</span> <span m='643160'>you</span> <span
  m='643300'>say,</span> <span m='643440'>I</span> <span m='643540'>need</span>
  <span m='643730'>a</span> <span m='645060'>plus</span> <span m='645460'>an
  x</span> <span m='645530'>squared</span> <span m='645800'>plus</span> <span
  m='646070'>2,</span> <span m='646280'>and</span> <span m='646730'>so
  on.</span> </p><p><span m='647060'>So</span> <span m='648180'>that</span>
  <span m='648340'>was</span> <span m='648610'>too</span> <span
  m='648770'>brief</span> <span m='649040'>for</span> <span
  m='649170'>you</span> <span m='649260'>to</span> <span
  m='649360'>understand</span> <span m='649820'>it</span> <span
  m='649900'>properly,</span> <span m='650530'>but</span> <span
  m='651770'>you</span> <span m='651890'>can</span> <span m='652540'>go</span>
  <span m='652720'>and</span> <span m='652840'>look</span> <span
  m='653040'>up</span> <span m='653220'>somewhere</span> <span
  m='654210'>the</span> <span m='654910'>method</span> <span
  m='655310'>of</span> <span m='655500'>long</span> <span
  m='655770'>division</span> <span m='656120'>on</span> <span
  m='656250'>power</span> <span m='656540'>series.</span> </p><p><span
  m='657420'>So</span> <span m='658560'>just</span> <span m='658820'>to</span>
  <span m='659440'>recap,</span> <span m='660700'>we</span> <span
  m='660890'>talked</span> <span m='661230'>about</span> <span
  m='661870'>three</span> <span m='662140'>methods</span> <span
  m='662530'>for</span> <span m='662650'>computing</span> <span
  m='663500'>the</span> <span m='663680'>coefficients</span> <span
  m='664140'>of</span> <span m='664350'>a</span> <span m='664440'>power</span>
  <span m='664740'>series.</span> <span m='665420'>There's</span> <span
  m='665700'>the</span> <span m='666270'>formula</span> <span
  m='666840'>that</span> <span m='666970'>you</span> <span
  m='667080'>were</span> <span m='667990'>given,</span> <span
  m='669330'>which</span> <span m='669540'>works,</span> <span
  m='670360'>and</span> <span m='670570'>which</span> <span
  m='670710'>you</span> <span m='670800'>could</span> <span
  m='670970'>use.</span> <span m='671300'>In</span> <span m='671450'>this</span>
  <span m='671590'>case,</span> <span m='671840'>it's</span> <span
  m='671970'>a</span> <span m='672050'>little</span> <span
  m='672240'>complicated.</span> <span m='673710'>Then</span> <span
  m='674100'>there's</span> <span m='674510'>the</span> <span
  m='674630'>method</span> <span m='674980'>of</span> <span
  m='675180'>using</span> <span m='675740'>a</span> <span
  m='675820'>relationship</span> <span m='676410'>between</span> <span
  m='676680'>your</span> <span m='676920'>power</span> <span
  m='677210'>series</span> <span m='677780'>and</span> <span
  m='678030'>other</span> <span m='678280'>known</span> <span
  m='678730'>power</span> <span m='679040'>series.</span> <span
  m='679570'>In</span> <span m='679760'>this</span> <span
  m='679930'>case,</span> <span m='680330'>we</span> <span m='680540'>can</span>
  <span m='680660'>use</span> <span m='680980'>the</span> <span
  m='681070'>relationship</span> <span m='681940'>that</span> <span
  m='682430'>we</span> <span m='682640'>know</span> <span m='682800'>our</span>
  <span m='682950'>power</span> <span m='683230'>series</span> <span
  m='683790'>satisfies</span> <span m='684430'>a</span> <span
  m='684500'>certain</span> <span m='684840'>product.</span> <span
  m='685530'>We</span> <span m='685680'>know</span> <span m='685790'>that</span>
  <span m='685980'>our</span> <span m='686160'>power</span> <span
  m='686430'>series</span> <span m='686740'>times</span> <span m='686960'>cosine
  of</span> <span m='687340'>x</span> <span m='687490'>equals</span> <span
  m='687810'>to</span> <span m='687940'>1,</span> <span m='688380'>and</span>
  <span m='688600'>we</span> <span m='688680'>can</span> <span
  m='688850'>use</span> <span m='689090'>that</span> <span m='689240'>to</span>
  <span m='689340'>solve</span> <span m='689720'>for</span> <span
  m='689850'>some</span> <span m='690050'>of</span> <span m='690140'>the</span>
  <span m='690240'>coefficients.</span> <span m='691180'>Or</span> <span
  m='691540'>you</span> <span m='691670'>can</span> <span
  m='691880'>also,</span> <span m='692580'>similarly,</span> <span
  m='693480'>when</span> <span m='693640'>you</span> <span
  m='693720'>have</span> <span m='693930'>that</span> <span
  m='694100'>situation,</span> <span m='694540'>you</span> <span
  m='694600'>can</span> <span m='694740'>also</span> <span m='694970'>use</span>
  <span m='695220'>long</span> <span m='695470'>division</span> <span
  m='696120'>to</span> <span m='696250'>compute</span> <span
  m='696550'>the</span> <span m='696650'>coefficients.</span> </p><p><span
  m='697690'>I'll</span> <span m='697850'>end</span> <span
  m='698090'>there.</span> </p>
embedded_media:
  - uid: 585bc2edd0dd024fab5a40d1618efd2a
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: FK1n3TVQIhc
  - uid: d14f6b83a91d27cccb2738f159dd8ddd
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/FK1n3TVQIhc/default.jpg'
  - uid: 7c74b1895713c33b8fcfb3acdb0d1321
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: FK1n3TVQIhc
  - uid: ad4834267849daf6da7e5e5fd1c57e64
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: FK1n3TVQIhc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-5-exploring-the-infinite/part-b-taylor-series/session-99-taylors-series-continued/taylors-series-for-sec-x/FK1n3TVQIhc.srt
  - uid: 3eb1ed4926038376071292571b97d4e7
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: FK1n3TVQIhc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-5-exploring-the-infinite/part-b-taylor-series/session-99-taylors-series-continued/taylors-series-for-sec-x/FK1n3TVQIhc.pdf
  - uid: c13f3d185e424805c983d6a8a876d9f0
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 001164a2c3e8bcd0f78961718cf61b33
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 3941704fdddcb84dc27973bfc92555cf
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_81_300k.mp4'
  - uid: e73d0a9d07adc191bda79f86213797e9
    parent_uid: 4990e98d2e927c32672131168dd8010c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/taylors-series-for-sec-x/id414308064?i=90320231
type: courses
layout: video
---
