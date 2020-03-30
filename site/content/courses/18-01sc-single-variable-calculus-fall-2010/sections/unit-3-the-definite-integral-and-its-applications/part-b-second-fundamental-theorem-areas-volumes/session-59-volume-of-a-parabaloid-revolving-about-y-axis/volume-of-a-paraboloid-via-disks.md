---
title: Volume of a Paraboloid via Disks
uid: 14d0939ef44e8035ad39e06108d3285f
parent_uid: 2a892d50ed0126e15d3603ad2d218d9e
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-59-volume-of-a-parabaloid-revolving-about-y-axis/volume-of-a-paraboloid-via-disks
short_url: volume-of-a-paraboloid-via-disks
inline_embed_id: 17170810volumeofaparaboloidviadisks49106890
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7120'>PROFESSOR: Welcome</span> <span m='7540'>back</span> <span
  m='7710'>to</span> <span m='7800'>recitation.</span> <span
  m='9370'>Today</span> <span m='9720'>in</span> <span m='9880'>this</span>
  <span m='10010'>video,</span> <span m='10290'>what</span> <span
  m='10400'>I'd</span> <span m='10500'>like</span> <span m='10700'>us</span>
  <span m='10830'>to</span> <span m='10950'>do</span> <span m='11320'>is</span>
  <span m='11900'>work</span> <span m='12170'>on</span> <span
  m='12390'>some</span> <span m='12760'>solid</span> <span m='13100'>of</span>
  <span m='13230'>revolution</span> <span m='13750'>problems.</span> <span
  m='14350'>Well,</span> <span m='14670'>one</span> <span m='15020'>solid</span>
  <span m='15340'>of</span> <span m='15430'>revolution</span> <span
  m='15980'>problem.</span> <span m='16820'>So</span> <span
  m='17040'>what</span> <span m='17200'>I</span> <span m='17250'>want us</span>
  <span m='17490'>to</span> <span m='17610'>do</span> <span m='18160'>in</span>
  <span m='18440'>this</span> <span m='18620'>one</span> <span
  m='18810'>is,</span> <span m='19510'>find</span> <span m='19810'>the</span>
  <span m='19880'>volume</span> <span m='20080'>of</span> <span
  m='20150'>the</span> <span m='20240'>solid</span> <span
  m='21170'>generated</span> <span m='21700'>by</span> <span
  m='21830'>rotating</span> <span m='22320'>the</span> <span
  m='22420'>region</span> <span m='22820'>bounded</span> <span
  m='23230'>by</span> <span m='23740'>these</span> <span m='23900'>three</span>
  <span m='24160'>curves,</span> <span m='24690'>x equals</span> <span
  m='25160'>0,</span> <span m='26450'>y</span> <span m='26900'>equals</span>
  <span m='27080'>5,</span> <span m='28350'>and</span> <span m='28550'>y
  equals</span> <span m='29250'>x squared</span> <span m='29410'>plus</span>
  <span m='29650'>1,</span> <span m='30660'>about</span> <span
  m='31190'>the</span> <span m='31300'>y-axis.</span> <span m='33090'>And</span>
  <span m='33660'>I'm</span> <span m='34240'>forcing</span> <span
  m='34660'>you--</span> <span m='34890'>or</span> <span m='35150'>I'm</span>
  <span m='35320'>requesting--</span> <span m='36250'>that</span> <span
  m='36490'>you</span> <span m='36630'>use</span> <span m='36920'>the</span>
  <span m='37030'>disk</span> <span m='37270'>method.</span> <span
  m='37950'>So</span> <span m='38130'>I</span> <span m='38170'>want</span> <span
  m='38350'>us</span> <span m='38430'>to</span> <span m='38530'>work</span>
  <span m='38680'>on</span> <span m='38790'>the</span> <span
  m='38860'>disk</span> <span m='39100'>method</span> <span m='39400'>in</span>
  <span m='39520'>this</span> <span m='39680'>case.</span> <span
  m='40770'>So</span> <span m='41010'>why</span> <span m='41170'>don't</span>
  <span m='41350'>you</span> <span m='41650'>take</span> <span
  m='41870'>a</span> <span m='41910'>crack</span> <span m='42190'>at</span>
  <span m='42270'>the</span> <span m='42340'>problem?</span> <span
  m='42960'>And</span> <span m='43230'>then</span> <span m='43370'>I'll</span>
  <span m='43470'>be</span> <span m='43580'>back.</span> </p><p><span
  m='52100'>OK,</span> <span m='52360'>welcome</span> <span
  m='52680'>back.</span> <span m='53460'>So</span> <span m='53710'>what</span>
  <span m='53840'>we're</span> <span m='53940'>going</span> <span
  m='54140'>to</span> <span m='54220'>do</span> <span m='54780'>is</span> <span
  m='54960'>we're</span> <span m='55100'>going</span> <span m='55310'>to</span>
  <span m='55410'>work</span> <span m='55660'>on</span> <span
  m='55990'>finding</span> <span m='56330'>the</span> <span
  m='56400'>volume</span> <span m='56770'>of</span> <span m='56850'>a</span>
  <span m='56940'>solid</span> <span m='57360'>generated</span> <span
  m='58380'>by</span> <span m='58500'>rotating</span> <span
  m='59040'>this</span> <span m='59190'>region</span> <span
  m='59940'>that's</span> <span m='60090'>bounded</span> <span
  m='60380'>by</span> <span m='60490'>the</span> <span m='60640'>three</span>
  <span m='60880'>curves</span> <span m='61200'>mentioned</span> <span
  m='62090'>about</span> <span m='62380'>the</span> <span
  m='62450'>y-axis.</span> <span m='63310'>And</span> <span m='63490'>as</span>
  <span m='63640'>I</span> <span m='63740'>said</span> <span
  m='63960'>before,</span> <span m='64470'>we're</span> <span
  m='64620'>going</span> <span m='64830'>to</span> <span m='64930'>use</span>
  <span m='65130'>the</span> <span m='65220'>disk</span> <span
  m='65480'>method.</span> <span m='66660'>So</span> <span m='66880'>when</span>
  <span m='67000'>you're</span> <span m='67130'>solving</span> <span
  m='67550'>these</span> <span m='67720'>problems,</span> <span
  m='68120'>the</span> <span m='68220'>first</span> <span m='68470'>thing</span>
  <span m='68600'>you</span> <span m='68670'>want to</span> <span
  m='68900'>do</span> <span m='69650'>is</span> <span m='70210'>give</span>
  <span m='70430'>yourself</span> <span m='70800'>at</span> <span
  m='70900'>least</span> <span m='71140'>a</span> <span m='71210'>rough</span>
  <span m='71490'>sketch of</span> <span m='73010'>what</span> <span
  m='73230'>this</span> <span m='73400'>region</span> <span
  m='73740'>looks</span> <span m='73960'>like,</span> <span m='74520'>of</span>
  <span m='74660'>with</span> <span m='74800'>the</span> <span
  m='74880'>region</span> <span m='75170'>bounded</span> <span
  m='75480'>by</span> <span m='75590'>these</span> <span m='75790'>three</span>
  <span m='75950'>curves</span> <span m='76260'>actually</span> <span
  m='76620'>looks</span> <span m='76810'>like.</span> </p><p><span
  m='77440'>So</span> <span m='77590'>the</span> <span m='77680'>first</span>
  <span m='77990'>thing</span> <span m='78150'>I'm</span> <span
  m='78270'>going</span> <span m='78460'>to</span> <span m='78550'>do</span>
  <span m='78680'>before</span> <span m='79010'>I</span> <span
  m='79060'>do</span> <span m='79180'>anything</span> <span
  m='79500'>else,</span> <span m='79750'>is</span> <span m='79890'>at</span>
  <span m='80010'>least</span> <span m='80360'>get</span> <span
  m='80500'>a</span> <span m='80530'>rough</span> <span m='80780'>sketch</span>
  <span m='81620'>of</span> <span m='81750'>what</span> <span
  m='81940'>that</span> <span m='82080'>region</span> <span
  m='82330'>looks</span> <span m='82500'>like.</span> <span m='82690'>And</span>
  <span m='82790'>I'll</span> <span m='82890'>do</span> <span
  m='83020'>that</span> <span m='83390'>over</span> <span m='83580'>here</span>
  <span m='83750'>on</span> <span m='83850'>the</span> <span
  m='83930'>right.</span> <span m='86010'>So,</span> <span
  m='86510'>let's</span> <span m='86880'>see.</span> <span m='88090'>We</span>
  <span m='88390'>know</span> <span m='88860'>we've</span> <span
  m='89040'>got</span> <span m='89280'>the</span> <span
  m='89360'>region--</span> <span m='89990'>let</span> <span m='90130'>me</span>
  <span m='90230'>actually</span> <span m='90660'>even</span> <span
  m='91220'>use</span> <span m='91450'>some</span> <span
  m='91670'>different</span> <span m='91980'>colored</span> <span
  m='92240'>chalk.</span> <span m='93480'>We'll</span> <span
  m='93720'>say</span> <span m='93900'>the</span> <span m='94210'>x</span> <span
  m='94330'>equals</span> <span m='94580'>0</span> <span m='95370'>is</span>
  <span m='95550'>actually</span> <span m='96020'>the</span> <span
  m='96110'>y-axis.</span> <span m='97130'>That's x</span> <span
  m='97510'>equals</span> <span m='97750'>0.</span> <span m='99900'>And</span>
  <span m='100140'>then</span> <span m='100780'>y</span> <span
  m='101100'>equals</span> <span m='101440'>5--</span> <span
  m='102500'>actually</span> <span m='102860'>we'll</span> <span
  m='102980'>put</span> <span m='103180'>that</span> <span m='103390'>in</span>
  <span m='103840'>last.</span> <span m='105100'>But</span> <span
  m='105380'>y</span> <span m='105660'>equals</span> <span m='105760'>x</span>
  <span m='105970'>squared</span> <span m='106140'>plus</span> <span
  m='106390'>1</span> <span m='106910'>is</span> <span m='107170'>the</span>
  <span m='107500'>parabola</span> <span m='108440'>y</span> <span
  m='108730'>equals</span> <span m='109040'>x squared</span> <span
  m='109260'>shifted</span> <span m='109620'>up</span> <span
  m='109750'>by</span> <span m='109900'>1.</span> <span m='110720'>So if</span>
  <span m='110930'>this</span> <span m='111110'>is</span> <span
  m='111230'>y</span> <span m='111440'>equals</span> <span m='111640'>1,</span>
  <span m='112620'>then</span> <span m='112820'>it's</span> <span
  m='113730'>just</span> <span m='114020'>roughly</span> <span
  m='114610'>something</span> <span m='114980'>like</span> <span
  m='115180'>this.</span> <span m='116300'>That</span> <span
  m='116420'>might</span> <span m='116650'>not</span> <span
  m='116840'>look</span> <span m='117000'>like</span> <span
  m='117160'>the</span> <span m='117250'>best</span> <span
  m='117500'>parabola</span> <span m='117830'>I've</span> <span
  m='118160'>ever</span> <span m='118640'>seen,</span> <span
  m='119120'>but</span> <span m='119600'>well.</span> <span
  m='120650'>Something</span> <span m='120900'>roughly</span> <span
  m='121240'>like</span> <span m='121430'>that.</span> <span m='123120'>Maybe,
  as</span> <span m='123290'>I</span> <span m='123380'>said,</span> <span
  m='123610'>rough</span> <span m='123810'>sketch.</span> <span
  m='124160'>Maybe</span> <span m='124390'>more</span> <span
  m='124600'>like</span> <span m='124800'>that.</span> </p><p><span
  m='127540'>And</span> <span m='127750'>then,</span> <span m='128400'>we</span>
  <span m='128570'>want to</span> <span m='128840'>also</span> <span
  m='129150'>put</span> <span m='129330'>in</span> <span m='129410'>the</span>
  <span m='129500'>y</span> <span m='129750'>equals</span> <span
  m='129920'>5,</span> <span m='130750'>which</span> <span
  m='131030'>I'll</span> <span m='131150'>say</span> <span m='131420'>is</span>
  <span m='131560'>roughly</span> <span m='131960'>about</span> <span
  m='132240'>here.</span> <span m='135950'>So</span> <span m='136340'>I</span>
  <span m='136530'>could--</span> <span m='137310'>notice</span> <span
  m='137850'>I've</span> <span m='138030'>got</span> <span
  m='138290'>these</span> <span m='138710'>three</span> <span
  m='139050'>curves.</span> <span m='140280'>This</span> <span
  m='140510'>curve,</span> <span m='141210'>this</span> <span
  m='141440'>curve,</span> <span m='142350'>this</span> <span m='142670'>curve.
  So</span> <span m='143030'>I'm</span> <span m='143180'>interested</span> <span
  m='143650'>in</span> <span m='143760'>this</span> <span
  m='143940'>region</span> <span m='144270'>right</span> <span m='144460'>here.
  Right?</span> <span m='147820'>Notice</span> <span m='148210'>that</span>
  <span m='148360'>if</span> <span m='148480'>I</span> <span
  m='148560'>also</span> <span m='148870'>include</span> <span
  m='149160'>this</span> <span m='149340'>region,</span> <span
  m='149700'>when</span> <span m='149850'>I</span> <span
  m='149900'>rotated</span> <span m='150470'>that</span> <span
  m='150660'>around,</span> <span m='151010'>I'd</span> <span
  m='151120'>actually</span> <span m='151560'>get</span> <span
  m='151750'>the</span> <span m='151840'>same</span> <span
  m='152210'>solid,</span> <span m='153380'>whether</span> <span
  m='153700'>I</span> <span m='153800'>included</span> <span
  m='154180'>this</span> <span m='154330'>region</span> <span
  m='154620'>or</span> <span m='154720'>not.</span> <span m='155490'>But</span>
  <span m='155720'>in</span> <span m='155860'>terms</span> <span
  m='156230'>of</span> <span m='156540'>doing the</span> <span
  m='156860'>integration,</span> <span m='158200'>I</span> <span
  m='158340'>want</span> <span m='158520'>to</span> <span m='158580'>make</span>
  <span m='158700'>sure</span> <span m='158850'>I</span> <span
  m='158910'>don't</span> <span m='159100'>count</span> <span
  m='159360'>anything</span> <span m='159690'>doubly.</span> <span
  m='160090'>So</span> <span m='160260'>I'm</span> <span m='160420'>just</span>
  <span m='160620'>looking</span> <span m='160900'>at</span> <span
  m='161000'>what</span> <span m='161160'>happens</span> <span
  m='161490'>when</span> <span m='161590'>I</span> <span m='161670'>take</span>
  <span m='161860'>this</span> <span m='162090'>piece</span> <span
  m='162710'>and</span> <span m='162940'>I</span> <span m='163010'>rotate
  it</span> <span m='163530'>around</span> <span m='164240'>the</span> <span
  m='164380'>y-axis.</span> </p><p><span m='166260'>So</span> <span
  m='166420'>what</span> <span m='166530'>do</span> <span m='166590'>we</span>
  <span m='166700'>want to</span> <span m='166930'>do?</span> <span
  m='167080'>We</span> <span m='167240'>said</span> <span m='167520'>we</span>
  <span m='167610'>want</span> <span m='167760'>to</span> <span
  m='167820'>use</span> <span m='168050'>the</span> <span m='168160'>disk</span>
  <span m='168430'>method.</span> <span m='169750'>Which</span> <span
  m='170060'>means</span> <span m='170290'>ultimately,</span> <span
  m='170810'>I'm</span> <span m='170980'>looking</span> <span
  m='171360'>for</span> <span m='172600'>finding</span> <span
  m='172930'>out</span> <span m='173060'>what</span> <span m='173560'>the</span>
  <span m='173650'>radius</span> <span m='174280'>is. Right?</span> <span
  m='175390'>I'm</span> <span m='175510'>doing</span> <span m='175760'>pi</span>
  <span m='176030'>r</span> <span m='176210'>squared</span> <span
  m='177260'>when</span> <span m='178000'>I</span> <span
  m='178100'>integrate.</span> <span m='178570'>So</span> <span
  m='178740'>I'm</span> <span m='179040'>interested</span> <span
  m='179570'>in</span> <span m='180530'>finding</span> <span
  m='182650'>this</span> <span m='182870'>length--</span> <span
  m='183690'>that's</span> <span m='183910'>going</span> <span
  m='184080'>to</span> <span m='184170'>be</span> <span m='184270'>our</span>
  <span m='184400'>radius--</span> <span m='185790'>and</span> <span
  m='186010'>then</span> <span m='186130'>we</span> <span
  m='186260'>rotate--</span> <span m='187330'>you</span> <span
  m='187470'>probably</span> <span m='187770'>can't</span> <span
  m='187980'>see</span> <span m='188150'>that,</span> <span m='188500'>so
  let</span> <span m='188660'>me</span> <span m='188770'>just</span> <span
  m='188980'>say</span> <span m='189720'>that's</span> <span
  m='189910'>going</span> <span m='190080'>to</span> <span
  m='190140'>represent</span> <span m='190510'>our</span> <span
  m='190610'>radius.</span> <span m='191840'>And</span> <span
  m='192010'>then</span> <span m='192200'>when</span> <span m='192420'>we</span>
  <span m='192540'>rotate</span> <span m='193130'>that</span> <span
  m='193370'>around</span> <span m='193790'>the</span> <span
  m='193850'>y-axis</span> <span m='194550'>we</span> <span
  m='194670'>get</span> <span m='194810'>our</span> <span m='194910'>disk.
  Right?</span> <span m='196570'>We've</span> <span m='196740'>seen</span> <span
  m='197010'>some</span> <span m='197200'>pictures</span> <span
  m='197540'>of</span> <span m='197640'>this</span> <span
  m='197810'>before.</span> <span m='198170'>So I'm</span> <span
  m='198410'>interested</span> <span m='198950'>in</span> <span
  m='199220'>this</span> <span m='200280'>length</span> <span
  m='200620'>here.</span> </p><p><span m='201305'>And</span> <span
  m='201670'>because</span> <span m='202100'>I</span> <span
  m='202160'>want</span> <span m='202290'>to</span> <span m='202370'>use</span>
  <span m='202610'>the</span> <span m='202710'>disk</span> <span
  m='202960'>method,</span> <span m='203440'>I'm</span> <span
  m='203570'>forcing</span> <span m='204040'>us</span> <span
  m='204160'>to</span> <span m='204250'>figure</span> <span
  m='204590'>out</span> <span m='205610'>what</span> <span m='205990'>is</span>
  <span m='206260'>this</span> <span m='206820'>value</span> <span
  m='207470'>in</span> <span m='207630'>terms</span> <span m='207940'>of</span>
  <span m='208040'>y?</span> <span m='210040'>So</span> <span
  m='210250'>we</span> <span m='210410'>know we have, well we know</span> <span
  m='211800'>that</span> <span m='211960'>y</span> <span
  m='212220'>equals</span> <span m='212540'>x</span> <span
  m='212690'>squared</span> <span m='212920'>plus</span> <span
  m='213110'>1</span> <span m='213370'>there.</span> <span m='216300'>So</span>
  <span m='216540'>in</span> <span m='216680'>terms</span> <span
  m='217050'>of</span> <span m='217180'>y,</span> <span m='218900'>this
  is</span> <span m='219330'>y</span> <span m='219670'>minus</span> <span
  m='219960'>1</span> <span m='220210'>equals</span> <span m='220650'>x
  squared.</span> <span m='221556'>So</span> <span m='222010'>the</span> <span
  m='222170'>square</span> <span m='222490'>root</span> <span
  m='222720'>of</span> <span m='222810'>y</span> <span m='223010'>minus</span>
  <span m='223350'>1</span> <span m='224050'>is</span> <span
  m='224400'>equal</span> <span m='224750'>to</span> <span m='224830'>x.</span>
  <span m='225920'>So</span> <span m='226090'>this</span> <span
  m='226320'>is</span> <span m='226480'>the</span> <span
  m='226590'>expression</span> <span m='227020'>I'm</span> <span
  m='227160'>interested</span> <span m='227610'>in</span> <span
  m='227980'>as</span> <span m='228200'>our</span> <span
  m='228320'>radius,</span> <span m='228820'>as</span> <span
  m='228940'>my</span> <span m='229070'>radius. Right?</span> </p><p><span
  m='231260'>And</span> <span m='231440'>now,</span> <span
  m='231690'>what</span> <span m='231850'>I</span> <span m='231910'>need</span>
  <span m='232130'>to</span> <span m='232230'>do</span> <span
  m='232440'>is</span> <span m='232600'>figure</span> <span
  m='232910'>out,</span> <span m='234110'>I</span> <span m='234330'>know</span>
  <span m='234660'>if</span> <span m='234900'>this</span> <span
  m='235080'>is</span> <span m='235240'>the</span> <span
  m='235320'>radius</span> <span m='236430'>I</span> <span
  m='236560'>need</span> <span m='236740'>to</span> <span
  m='236820'>figure</span> <span m='237140'>out,</span> <span
  m='237780'>since</span> <span m='238040'>I'm</span> <span
  m='238180'>doing</span> <span m='238400'>this</span> <span
  m='238540'>in</span> <span m='238650'>terms</span> <span m='238890'>of</span>
  <span m='238970'>y,</span> <span m='239680'>what</span> <span
  m='240100'>this</span> <span m='240780'>lower</span> <span
  m='241150'>bound</span> <span m='241500'>is</span> <span m='241640'>for</span>
  <span m='241800'>y</span> <span m='242255'>and</span> <span
  m='242710'>what</span> <span m='242900'>the</span> <span
  m='243010'>upper</span> <span m='243220'>bound</span> <span
  m='243480'>is</span> <span m='243600'>for</span> <span m='243730'>y.</span>
  <span m='244470'>And</span> <span m='244600'>then</span> <span
  m='244710'>I'm</span> <span m='244800'>going</span> <span m='244970'>to</span>
  <span m='245040'>be</span> <span m='245150'>integrating</span> <span
  m='246350'>pi</span> <span m='246730'>times</span> <span m='246960'>the</span>
  <span m='247070'>radius</span> <span m='247330'>squared</span> <span
  m='248620'>over</span> <span m='249840'>y,</span> <span m='250300'>over</span>
  <span m='250680'>the</span> <span m='250820'>changes</span> <span
  m='251220'>in</span> <span m='251350'>y.</span> </p><p><span
  m='252930'>Now</span> <span m='253080'>let's</span> <span
  m='253210'>see.</span> <span m='253350'>This</span> <span
  m='253570'>one's</span> <span m='253770'>easy.</span> <span
  m='254200'>y</span> <span m='254460'>equals</span> <span m='254620'>5</span>
  <span m='254910'>up</span> <span m='255040'>here.</span> <span
  m='256240'>And</span> <span m='256580'>what</span> <span m='256730'>is</span>
  <span m='256860'>this</span> <span m='257030'>value</span> <span
  m='257320'>here?</span> <span m='257570'>Well,</span> <span
  m='257720'>the</span> <span m='258210'>function</span> <span
  m='259870'>that</span> <span m='260030'>I</span> <span m='260430'>had</span>
  <span m='260680'>here</span> <span m='260870'>was</span> <span
  m='261020'>y</span> <span m='261410'>equals</span> <span m='261560'>x</span>
  <span m='261720'>squared</span> <span m='261970'>plus</span> <span
  m='262160'>1.</span> <span m='263040'>So</span> <span m='263410'>when</span>
  <span m='263610'>x is</span> <span m='263950'>0,</span> <span
  m='264380'>y</span> <span m='264650'>is</span> <span m='264800'>1.</span>
  <span m='265290'>So</span> <span m='265420'>this</span> <span
  m='265620'>is</span> <span m='265750'>the</span> <span m='265850'>value</span>
  <span m='266140'>where</span> <span m='266280'>y</span> <span
  m='266620'>equals</span> <span m='266750'>1.</span> <span m='268660'>So</span>
  <span m='268880'>I</span> <span m='268930'>know</span> <span
  m='269100'>what</span> <span m='269220'>I'm</span> <span
  m='269330'>interested</span> <span m='269680'>in</span> <span
  m='269810'>doing.</span> <span m='270590'>Again,</span> <span
  m='270920'>let</span> <span m='271010'>me</span> <span m='271090'>write</span>
  <span m='271280'>it</span> <span m='271380'>down.</span> <span m='272125'>Is
  I'm</span> <span m='272700'>integrating</span> <span m='273220'>from</span>
  <span m='273430'>1</span> <span m='274370'>to</span> <span m='274520'>5</span>
  <span m='275820'>of</span> <span m='277250'>pi</span> <span
  m='277740'>r</span> <span m='278020'>squared</span> <span
  m='279250'>dy.</span> <span m='280730'>And</span> <span m='280920'>now,</span>
  <span m='281060'>I</span> <span m='281140'>need</span> <span
  m='281330'>to</span> <span m='281420'>write</span> <span m='281690'>r</span>
  <span m='282120'>as</span> <span m='282270'>a</span> <span
  m='282330'>function</span> <span m='282650'>of</span> <span
  m='282730'>y.</span> </p><p><span m='284440'>So</span> <span
  m='284740'>r</span> <span m='285130'>is</span> <span m='285490'>square root
  of</span> <span m='285980'>y</span> <span m='286190'>minus</span> <span
  m='286510'>1.</span> <span m='287270'>When</span> <span m='287450'>I</span>
  <span m='287520'>square</span> <span m='287850'>that,</span> <span
  m='288070'>I</span> <span m='288140'>just</span> <span m='288370'>get</span>
  <span m='288740'>y</span> <span m='288930'>minus</span> <span
  m='289240'>1.</span> <span m='290190'>So</span> <span m='290370'>what</span>
  <span m='290510'>I'm</span> <span m='290620'>really</span> <span
  m='290930'>interested</span> <span m='291270'>in</span> <span
  m='291330'>integrating</span> <span m='291890'>is,</span> <span
  m='293970'>the</span> <span m='294070'>integral</span> <span
  m='294320'>from</span> <span m='294510'>1</span> <span m='294650'>to</span>
  <span m='294760'>5 of--</span> <span m='296320'>let me put</span> <span
  m='296400'>the</span> <span m='296520'>pi</span> <span
  m='296790'>outside,</span> <span m='297370'>because</span> <span
  m='297550'>who</span> <span m='297690'>cares--</span> <span
  m='298990'>pi</span> <span m='299410'>times</span> <span
  m='300290'>that</span> <span m='300600'>integral,</span> <span
  m='300970'>y</span> <span m='301140'>minus</span> <span m='301460'>1</span>
  <span m='302520'>dy.</span> <span m='304460'>And</span> <span
  m='304980'>if</span> <span m='305200'>I</span> <span
  m='305360'>actually</span> <span m='305760'>evaluate</span> <span
  m='306240'>this, figure out,</span> <span m='308670'>if</span> <span
  m='308840'>I</span> <span m='308900'>actually</span> <span
  m='309140'>take</span> <span m='309370'>the</span> <span
  m='309460'>integral,</span> <span m='309930'>use</span> <span
  m='310190'>my</span> <span m='311330'>rules</span> <span m='311710'>for</span>
  <span m='311830'>polynomials,</span> <span m='313120'>I</span> <span
  m='313290'>can</span> <span m='313480'>get</span> <span m='313990'>a</span>
  <span m='314120'>numerical</span> <span m='314610'>value.</span> <span
  m='315360'>I'm</span> <span m='315570'>going</span> <span m='315700'>to</span>
  <span m='315790'>stop</span> <span m='316610'>evaluating</span> <span
  m='317170'>here,</span> <span m='317470'>because</span> <span
  m='317690'>from</span> <span m='317880'>here</span> <span m='318070'>on</span>
  <span m='318220'>I</span> <span m='318290'>know</span> <span
  m='318450'>you</span> <span m='318620'>guys</span> <span m='318860'>can</span>
  <span m='319010'>do</span> <span m='319160'>it.</span> </p><p><span
  m='319800'>But,</span> <span m='320080'>the</span> <span
  m='320170'>point</span> <span m='320530'>of</span> <span
  m='320610'>this</span> <span m='320820'>problem,</span> <span
  m='321820'>what</span> <span m='322030'>I</span> <span m='322090'>want</span>
  <span m='322280'>to</span> <span m='322340'>mention,</span> <span
  m='322690'>the</span> <span m='322760'>point</span> <span m='322970'>of</span>
  <span m='323030'>this</span> <span m='323140'>problem</span> <span
  m='323600'>is</span> <span m='323800'>the</span> <span m='323890'>main</span>
  <span m='324210'>thing</span> <span m='324390'>we</span> <span
  m='324480'>had</span> <span m='324620'>to</span> <span m='324720'>do</span>
  <span m='324930'>is</span> <span m='325130'>figure</span> <span
  m='325500'>out</span> <span m='326290'>what</span> <span m='326730'>is</span>
  <span m='326920'>the</span> <span m='327030'>radius</span> <span
  m='329210'>in</span> <span m='329390'>terms</span> <span m='329640'>of</span>
  <span m='329730'>y.</span> <span m='330190'>That</span> <span
  m='330340'>was</span> <span m='330470'>the</span> <span m='330540'>main</span>
  <span m='330880'>thing</span> <span m='331110'>we</span> <span
  m='331220'>had</span> <span m='331390'>to</span> <span
  m='331470'>figure</span> <span m='331760'>out</span> <span
  m='331890'>in</span> <span m='331960'>order</span> <span m='332150'>to</span>
  <span m='332210'>do</span> <span m='332320'>this</span> <span
  m='332480'>problem.</span> <span m='333120'>I</span> <span
  m='333290'>said</span> <span m='333640'>you</span> <span m='333750'>had</span>
  <span m='333900'>to</span> <span m='333970'>use</span> <span
  m='334230'>disks.</span> <span m='335890'>So</span> <span m='336070'>we</span>
  <span m='336160'>had</span> <span m='336360'>to</span> <span
  m='336430'>figure</span> <span m='336700'>out</span> <span
  m='336790'>what</span> <span m='336890'>the</span> <span
  m='336970'>radius</span> <span m='337360'>was</span> <span
  m='337620'>in</span> <span m='337710'>terms</span> <span m='337970'>of</span>
  <span m='338060'>y.</span> <span m='338520'>And</span> <span
  m='338700'>then</span> <span m='338850'>we</span> <span m='339010'>had</span>
  <span m='339260'>to</span> <span m='339810'>figure</span> <span
  m='340120'>out</span> <span m='340210'>what</span> <span m='340340'>the</span>
  <span m='340430'>bounds</span> <span m='340820'>were</span> <span
  m='341020'>in</span> <span m='341150'>terms</span> <span m='341410'>of</span>
  <span m='341500'>y.</span> <span m='342150'>And</span> <span
  m='342430'>once</span> <span m='342620'>we</span> <span m='342760'>do</span>
  <span m='342960'>that,</span> <span m='343480'>it's</span> <span
  m='343660'>a</span> <span m='343730'>simple</span> <span
  m='344100'>matter</span> <span m='344930'>of</span> <span
  m='345270'>evaluating</span> <span m='346370'>this</span> <span
  m='346600'>integral,</span> <span m='346920'>or</span> <span
  m='347040'>finding</span> <span m='347400'>the</span> <span
  m='347500'>actual</span> <span m='347790'>value</span> <span
  m='348100'>for</span> <span m='348260'>what</span> <span
  m='348410'>this</span> <span m='348580'>integral</span> <span
  m='348930'>is.</span> <span m='350060'>So</span> <span m='350250'>I</span>
  <span m='350370'>think</span> <span m='351860'>that</span> <span
  m='352140'>is</span> <span m='352250'>where</span> <span
  m='352400'>I'll</span> <span m='352530'>stop.</span> </p>
embedded_media:
  - uid: 2080f4dcc938c11bf9ee9d97b3d15ca7
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: ksAdC6Z99dE
  - uid: bd45fc4d90a68a9a93d8033528735257
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/ksAdC6Z99dE/default.jpg'
  - uid: 9b812ad1e0899d5d55df9e34ed373b2c
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: ksAdC6Z99dE
  - uid: 0179bea4cde8a61703db3338b182d70b
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: ksAdC6Z99dE.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-59-volume-of-a-parabaloid-revolving-about-y-axis/volume-of-a-paraboloid-via-disks/ksAdC6Z99dE.srt
  - uid: 389631b71459c1847536a0fb1448b216
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: ksAdC6Z99dE.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-59-volume-of-a-parabaloid-revolving-about-y-axis/volume-of-a-paraboloid-via-disks/ksAdC6Z99dE.pdf
  - uid: 55470f843071d4ba49aec61ce6a964d1
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: c91b9dd2b1a3480b9ad4b0ae032e8fcd
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: bab05fbe48684df132553b3c31b2ea20
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_44_300k.mp4'
  - uid: b4a7f2dffe471dd5419440fdfa8564a8
    parent_uid: 14d0939ef44e8035ad39e06108d3285f
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/volume-paraboloid-via-disks/id414308064?i=90319644
type: courses
layout: video
---
