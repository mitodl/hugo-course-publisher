---
title: Potentials of Gradient Fields
uid: 5a3ddda222486dbe2ef8334fbef0d0e8
parent_uid: d4f09bad1bc504b82a719aa7c3f72168
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-63-potential-functions/potentials-of-gradient-fields
short_url: potentials-of-gradient-fields
inline_embed_id: 47690204potentialsofgradientfields64882132
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>CHRISTINE BREINER:</span> <span m='6990'>Welcome</span> <span
  m='7330'>back to</span> <span m='7530'>recitation.</span> <span
  m='8402'>In</span> <span m='8840'>this</span> <span m='9100'>video</span>
  <span m='9450'>I'd</span> <span m='9610'>like</span> <span m='9840'>us</span>
  <span m='9980'>to</span> <span m='10080'>work</span> <span m='10280'>on</span>
  <span m='10410'>the</span> <span m='10490'>following</span> <span
  m='10850'>problem.</span> <span m='12460'>What</span> <span
  m='12700'>values</span> <span m='13040'>of</span> <span m='13170'>b</span>
  <span m='13640'>will</span> <span m='13810'>make</span> <span
  m='14310'>this</span> <span m='14430'>vector</span> <span
  m='14750'>field</span> <span m='15030'>F</span> <span m='15520'>a</span> <span
  m='15570'>gradient</span> <span m='16010'>field,</span> <span
  m='16690'>where</span> <span m='16980'>F</span> <span m='17300'>is</span>
  <span m='17430'>determined</span> <span m='17910'>by</span> <span
  m='18630'>e</span> <span m='18820'>to</span> <span m='18900'>the</span> <span
  m='19160'>x plus</span> <span m='19370'>y</span> <span m='20290'>times</span>
  <span m='20560'>x</span> <span m='20640'>plus</span> <span m='21020'>b</span>
  <span m='21220'>i</span> <span m='22320'>plus</span> <span
  m='22940'>x*j?</span> <span m='23480'>So</span> <span m='23560'>the</span>
  <span m='23670'>e to</span> <span m='23870'>the</span> <span m='23970'>x
  plus</span> <span m='24290'>y</span> <span m='24730'>is in</span> <span
  m='24860'>both</span> <span m='25110'>the</span> <span m='25690'>i</span>
  <span m='26030'>component</span> <span m='26480'>and</span> <span
  m='26730'>the</span> <span m='26850'>j</span> <span
  m='27060'>component.</span> <span m='28640'>And</span> <span
  m='28780'>then</span> <span m='28890'>once</span> <span
  m='29110'>you've</span> <span m='29270'>determined</span> <span
  m='29820'>what</span> <span m='30020'>values</span> <span m='30480'>b</span>
  <span m='30680'>will</span> <span m='30820'>make</span> <span
  m='31080'>that</span> <span m='31240'>a</span> <span m='31290'>gradient</span>
  <span m='31680'>field,</span> <span m='32970'>for</span> <span
  m='33250'>this</span> <span m='33440'>b--</span> <span m='33680'>or</span>
  <span m='33850'>I</span> <span m='33930'>should've</span> <span
  m='34200'>said</span> <span m='34390'>these</span> <span
  m='34650'>b's--</span> <span m='35800'>find</span> <span m='36130'>a</span>
  <span m='36170'>potential</span> <span m='36570'>function</span> <span
  m='36910'>f</span> <span m='37180'>using</span> <span m='37450'>both</span>
  <span m='37700'>methods</span> <span m='38160'>from</span> <span
  m='38380'>the</span> <span m='38460'>lecture.</span> <span m='39590'>So</span>
  <span m='40390'>why</span> <span m='40570'>don't</span> <span
  m='40740'>you</span> <span m='41140'>pause the</span> <span
  m='41500'>video,</span> <span m='41790'>work</span> <span m='42010'>on</span>
  <span m='42160'>this,</span> <span m='42510'>and</span> <span
  m='42730'>then</span> <span m='42910'>when</span> <span m='43090'>you</span>
  <span m='43210'>are</span> <span m='43440'>ready</span> <span
  m='43810'>to</span> <span m='44820'>look</span> <span m='45010'>at</span>
  <span m='45100'>how</span> <span m='45290'>I</span> <span m='45390'>do</span>
  <span m='45560'>it</span> <span m='45780'>bring</span> <span
  m='45960'>the</span> <span m='46030'>video</span> <span m='46260'>back</span>
  <span m='46480'>up.</span> </p><p><span m='55440'>OK.</span> <span
  m='55700'>Welcome</span> <span m='55970'>back.</span> <span
  m='56680'>So</span> <span m='57070'>I'm</span> <span m='57260'>going</span>
  <span m='57460'>to</span> <span m='57560'>start</span> <span
  m='57950'>off</span> <span m='58380'>working</span> <span m='58710'>on</span>
  <span m='58830'>the</span> <span m='58910'>first</span> <span
  m='59180'>part</span> <span m='59340'>of</span> <span m='59410'>this</span>
  <span m='59540'>problem,</span> <span m='59980'>which</span> <span
  m='60200'>is</span> <span m='60430'>to find</span> <span m='60800'>the</span>
  <span m='61050'>values of</span> <span m='61210'>b</span> <span
  m='61450'>that</span> <span m='61600'>will</span> <span m='61700'>make</span>
  <span m='61920'>this</span> <span m='62050'>vector</span> <span
  m='62410'>field F</span> <span m='62670'>a</span> <span
  m='63020'>gradient</span> <span m='63420'>field.</span> <span
  m='64310'>And</span> <span m='64680'>to</span> <span m='65490'>clarify</span>
  <span m='65910'>things for</span> <span m='66160'>myself,</span> <span
  m='66550'>I'm</span> <span m='66650'>going</span> <span m='66850'>to</span>
  <span m='66920'>write</span> <span m='67170'>down</span> <span
  m='67480'>what</span> <span m='67660'>M</span> <span m='68190'>and</span>
  <span m='68350'>what</span> <span m='68550'>N</span> <span
  m='68880'>are</span> <span m='69310'>based</span> <span m='69630'>on</span>
  <span m='70870'>F.</span> <span m='71710'>So</span> <span
  m='71870'>just</span> <span m='72090'>to have</span> <span m='72300'>it</span>
  <span m='72370'>clear,</span> <span m='73250'>M</span> <span
  m='73930'>is</span> <span m='74130'>equal</span> <span m='74400'>to</span>
  <span m='74770'>e</span> <span m='74910'>to the x</span> <span
  m='74990'>plus</span> <span m='75550'>y</span> <span m='77940'>times</span>
  <span m='79400'>x</span> <span m='80160'>plus</span> <span m='80570'>b</span>
  <span m='81820'>and</span> <span m='82220'>N</span> <span m='83110'>is</span>
  <span m='83310'>equal</span> <span m='83570'>to</span> <span
  m='84350'>x</span> <span m='85110'>times</span> <span m='85390'>e</span> <span
  m='85560'>to the</span> <span m='85750'>x plus</span> <span
  m='86220'>y.</span> <span m='87170'>So</span> <span m='87360'>those</span>
  <span m='87620'>are our</span> <span m='87800'>values</span> <span
  m='88170'>for</span> <span m='88320'>M</span> <span m='88590'>and</span> <span
  m='88750'>N.</span> </p><p><span m='89360'>And</span> <span
  m='89570'>now</span> <span m='89840'>if I</span> <span m='89930'>want</span>
  <span m='90260'>f</span> <span m='90530'>to</span> <span m='90620'>be</span>
  <span m='90720'>a</span> <span m='90780'>gradient</span> <span
  m='91220'>field,</span> <span m='91520'>what</span> <span m='91650'>I</span>
  <span m='91710'>have</span> <span m='91940'>to</span> <span
  m='92070'>do</span> <span m='92660'>is</span> <span m='92870'>I</span> <span
  m='92950'>have</span> <span m='93130'>to</span> <span m='93220'>have</span>
  <span m='93470'>M</span> <span m='93730'>sub</span> <span m='93920'>y</span>
  <span m='94490'>equal</span> <span m='94810'>N</span> <span
  m='95100'>sub</span> <span m='95290'>x.</span> <span m='96670'>So</span> <span
  m='96920'>I'm</span> <span m='97080'>going</span> <span m='97310'>to</span>
  <span m='97450'>determine</span> <span m='98380'>M</span> <span
  m='98560'>sub</span> <span m='98670'>y</span> <span m='98940'>and I'm</span>
  <span m='99090'>going</span> <span m='99360'>to</span> <span
  m='99530'>determine</span> <span m='100030'>N</span> <span
  m='100270'>sub</span> <span m='100360'>x</span> <span m='100750'>and</span>
  <span m='100890'>I'm</span> <span m='100990'>going</span> <span
  m='101180'>to</span> <span m='101260'>compare</span> <span
  m='101600'>them</span> <span m='102320'>and</span> <span m='102500'>see</span>
  <span m='102750'>what</span> <span m='102960'>value</span> <span
  m='103160'>of</span> <span m='103510'>b</span> <span m='103710'>I</span> <span
  m='103810'>get.</span> <span m='104130'>So</span> <span m='104350'>M</span>
  <span m='104570'>sub</span> <span m='104700'>y,</span> <span
  m='106920'>fairly</span> <span m='107220'>straightforward</span> <span
  m='107860'>because</span> <span m='108130'>this</span> <span
  m='108280'>is</span> <span m='108370'>a</span> <span
  m='108450'>constant</span> <span m='108990'>in</span> <span
  m='109120'>y.</span> <span m='110390'>And</span> <span m='110570'>the</span>
  <span m='110640'>derivative</span> <span m='111000'>of</span> <span
  m='111200'>this</span> <span m='111510'>in</span> <span
  m='111620'>terms</span> <span m='111890'>of</span> <span m='111970'>y</span>
  <span m='112340'>is</span> <span m='112500'>just</span> <span
  m='112770'>this</span> <span m='112900'>back.</span> <span
  m='113380'>Right?</span> <span m='113570'>It's</span> <span
  m='113680'>an</span> <span m='113790'>exponential</span> <span
  m='114320'>function</span> <span m='115020'>with</span> <span
  m='115840'>the</span> <span m='115950'>value</span> <span
  m='116280'>that</span> <span m='116340'>it</span> <span m='116510'>has</span>
  <span m='116720'>in</span> <span m='116820'>y is</span> <span
  m='117220'>linear.</span> <span m='117620'>So</span> <span
  m='117760'>you</span> <span m='117860'>get</span> <span
  m='117990'>exactly</span> <span m='118410'>that</span> <span
  m='118580'>thing</span> <span m='118760'>back.</span> <span
  m='119120'>So</span> <span m='119290'>it</span> <span
  m='119360'>actually</span> <span m='120440'>is</span> <span
  m='120830'>just</span> <span m='121170'>e to</span> <span
  m='121450'>the</span> <span m='121580'>x</span> <span m='121790'>plus</span>
  <span m='122020'>y</span> <span m='123050'>times</span> <span
  m='123380'>x</span> <span m='123440'>plus</span> <span m='123690'>b.</span>
  <span m='124450'>So the</span> <span m='124690'>derivative</span> <span
  m='125020'>of</span> <span m='125230'>M</span> <span m='125440'>sub</span>
  <span m='125530'>y</span> <span m='125850'>is</span> <span
  m='126080'>just</span> <span m='126370'>itself.</span> <span
  m='127850'>The</span> <span m='127960'>derivative</span> <span
  m='128190'>of</span> <span m='128290'>M</span> <span m='128520'>with</span>
  <span m='128660'>respect</span> <span m='128990'>to y,</span> <span
  m='129220'>sorry.</span> <span m='129510'>Not</span> <span
  m='129710'>the</span> <span m='129850'>derivative</span> <span
  m='130164'>of</span> <span m='130480'>M</span> <span m='130660'>sub</span>
  <span m='130980'>y.</span> <span m='132140'>OK.</span> <span
  m='132760'>That's</span> <span m='133010'>an</span> <span m='133150'>x.</span>
  <span m='133680'>Let me just</span> <span m='133890'>rewrite</span> <span
  m='134220'>that.</span> </p><p><span m='135930'>OK,</span> <span
  m='136070'>now</span> <span m='136400'>N</span> <span m='136730'>sub</span>
  <span m='136930'>x</span> <span m='137540'>is</span> <span m='137640'>going
  to</span> <span m='137890'>have</span> <span m='138080'>two</span> <span
  m='138330'>parts.</span> <span m='139940'>N</span> <span m='140150'>sub</span>
  <span m='140210'>x,</span> <span m='140570'>the</span> <span
  m='140770'>derivative</span> <span m='141400'>with</span> <span
  m='141550'>respect</span> <span m='141910'>to</span> <span m='142263'>x</span>
  <span m='142970'>of</span> <span m='143590'>this</span> <span
  m='143940'>is</span> <span m='144070'>1.</span> <span m='144720'>And</span>
  <span m='144900'>so</span> <span m='145040'>I</span> <span m='145160'>have
  an</span> <span m='145410'>e to</span> <span m='145580'>the</span> <span
  m='145860'>x plus</span> <span m='146050'>y.</span> <span
  m='149120'>And</span> <span m='149360'>the</span> <span
  m='149560'>derivative</span> <span m='149750'>with</span> <span
  m='149890'>respect</span> <span m='150070'>to</span> <span m='150755'>x</span>
  <span m='151140'>of</span> <span m='151540'>e to the</span> <span
  m='151690'>x</span> <span m='151750'>plus</span> <span m='151860'>y</span>
  <span m='152110'>is</span> <span m='152580'>just</span> <span
  m='152680'>e</span> <span m='152830'>to the</span> <span
  m='153040'>plus</span> <span m='153370'>y,</span> <span m='154310'>for</span>
  <span m='154480'>the</span> <span m='154590'>same</span> <span
  m='154820'>reason</span> <span m='155230'>as</span> <span
  m='155635'>the</span> <span m='156040'>derivative</span> <span
  m='156305'>with</span> <span m='156570'>respect</span> <span m='156950'>to
  y</span> <span m='157300'>was</span> <span m='157540'>the</span> <span
  m='157650'>same.</span> <span m='158400'>So</span> <span
  m='158630'>then</span> <span m='158790'>I'm</span> <span
  m='158890'>just</span> <span m='159050'>going</span> <span
  m='159220'>to</span> <span m='159280'>get</span> <span m='159430'>a</span>
  <span m='159690'>plus</span> <span m='159940'>x</span> <span m='160380'>e
  to</span> <span m='160620'>the</span> <span m='161110'>x plus</span> <span
  m='161370'>y.</span> <span m='162690'>So</span> <span m='162940'>that</span>
  <span m='163220'>means</span> <span m='163710'>if</span> <span
  m='163820'>I</span> <span m='163910'>factor</span> <span
  m='164390'>that</span> <span m='164620'>out,</span> <span m='164870'>I</span>
  <span m='164930'>get</span> <span m='165090'>an</span> <span m='165660'>e to
  the</span> <span m='165880'>x</span> <span m='166170'>plus</span> <span
  m='166440'>y</span> <span m='167680'>times</span> <span m='167970'>1</span>
  <span m='168200'>plus</span> <span m='168470'>x.</span> <span
  m='169360'>And</span> <span m='169490'>we</span> <span m='169600'>see</span>
  <span m='170000'>that</span> <span m='170160'>if</span> <span
  m='170600'>F</span> <span m='170960'>is going</span> <span
  m='171170'>to</span> <span m='171240'>be</span> <span m='171320'>a</span>
  <span m='171400'>gradient</span> <span m='171810'>field</span> <span
  m='172130'>then</span> <span m='172290'>b</span> <span m='172540'>has
  to</span> <span m='172910'>equal</span> <span m='173190'>1.</span> <span
  m='173700'>Because</span> <span m='173840'>it</span> <span
  m='173920'>can</span> <span m='174020'>only</span> <span
  m='174220'>have</span> <span m='174390'>one</span> <span
  m='174600'>value,</span> <span m='175370'>and</span> <span
  m='175590'>so</span> <span m='175700'>b</span> <span m='175930'>has to</span>
  <span m='176330'>equal</span> <span m='176470'>1.</span> <span
  m='178830'>To</span> <span m='178950'>get</span> <span m='179230'>N</span>
  <span m='179520'>sub</span> <span m='179720'>x</span> <span
  m='180170'>to</span> <span m='180290'>equal</span> <span m='180540'>M</span>
  <span m='180680'>sub</span> <span m='180810'>y,</span> <span
  m='181780'>b</span> <span m='181940'>has to</span> <span
  m='182390'>equal</span> <span m='182873'>1.</span> <span m='183840'>So</span>
  <span m='184020'>now</span> <span m='184140'>what</span> <span
  m='184240'>I'm</span> <span m='184310'>going to</span> <span
  m='184490'>do</span> <span m='184680'>is</span> <span m='184790'>I'm</span>
  <span m='184890'>going</span> <span m='185090'>to</span> <span
  m='185180'>erase</span> <span m='185540'>that</span> <span
  m='185770'>b,</span> <span m='186870'>put</span> <span m='187050'>in</span>
  <span m='187150'>a</span> <span m='187220'>1,</span> <span
  m='188350'>so</span> <span m='188510'>that</span> <span m='188670'>the</span>
  <span m='188760'>rest</span> <span m='188990'>of</span> <span
  m='189050'>my</span> <span m='189150'>calculations</span> <span
  m='189960'>refer</span> <span m='190330'>to</span> <span
  m='190470'>that.</span> </p><p><span m='191510'>So</span> <span
  m='191810'>now</span> <span m='192190'>the</span> <span
  m='192310'>second</span> <span m='192610'>part</span> <span
  m='193440'>said</span> <span m='193700'>for</span> <span
  m='193910'>this</span> <span m='194170'>b</span> <span m='195100'>find</span>
  <span m='195390'>a</span> <span m='195420'>potential</span> <span
  m='195830'>function</span> <span m='196150'>f</span> <span
  m='196350'>using</span> <span m='196620'>both</span> <span
  m='196850'>methods</span> <span m='197180'>from</span> <span
  m='197350'>the</span> <span m='197430'>lecture.</span> <span m='198530'>So
  we're</span> <span m='198670'>going</span> <span m='198890'>to</span> <span
  m='198960'>go</span> <span m='199070'>through</span> <span
  m='199290'>both</span> <span m='199550'>methods</span> <span
  m='200100'>and</span> <span m='200930'>hopefully</span> <span
  m='201290'>we</span> <span m='201370'>get</span> <span m='201510'>the</span>
  <span m='201580'>same</span> <span m='201830'>answer</span> <span
  m='202110'>both</span> <span m='202370'>times.</span> <span
  m='203220'>So</span> <span m='203360'>let</span> <span m='203520'>me</span>
  <span m='204180'>come</span> <span m='204360'>back</span> <span
  m='204560'>here.</span> <span m='208220'>The</span> <span
  m='208360'>first</span> <span m='208610'>method</span> <span
  m='208940'>is</span> <span m='209050'>where</span> <span m='209190'>I'm</span>
  <span m='209330'>integrating</span> <span m='210210'>along</span> <span
  m='210540'>a</span> <span m='210620'>curve</span> <span m='211540'>from</span>
  <span m='211830'>(0,</span> <span m='212160'>0)</span> <span
  m='212960'>to</span> <span m='213100'>(x_1,</span> <span
  m='213490'>y_1).</span> <span m='214460'>So</span> <span m='214710'>I'm</span>
  <span m='214900'>going</span> <span m='215180'>to</span> <span
  m='215790'>do</span> <span m='215970'>it</span> <span m='216210'>in</span>
  <span m='216330'>the</span> <span m='216410'>following</span> <span
  m='216810'>way.</span> <span m='217440'>I'm</span> <span
  m='217700'>going</span> <span m='217890'>to</span> <span m='218000'>let</span>
  <span m='218250'>C_1--</span> <span m='219620'>so</span> <span
  m='219810'>here's</span> <span m='220050'>(0, 0)--</span> <span
  m='221446'>I'm</span> <span m='221790'>going to</span> <span
  m='222030'>let</span> <span m='222250'>C_1</span> <span m='223560'>be</span>
  <span m='223730'>the</span> <span m='224195'>curve</span> <span
  m='224660'>from</span> <span m='224970'>(0,</span> <span m='225250'>0)</span>
  <span m='225640'>up</span> <span m='225830'>to</span> <span
  m='225930'>(0,</span> <span m='226290'>y_1).</span> <span
  m='228110'>And</span> <span m='228310'>then</span> <span m='228510'>C_2</span>
  <span m='229130'>be</span> <span m='229250'>the</span> <span
  m='229360'>curve--</span> <span m='230010'>so</span> <span
  m='230460'>it's</span> <span m='230610'>parameterized</span> <span
  m='230790'>in that direction--</span> <span m='231240'>C_2</span> <span
  m='231700'>be</span> <span m='231810'>the</span> <span m='231920'>curve</span>
  <span m='233810'>from</span> <span m='234170'>(0,</span> <span
  m='234500'>y_1)</span> <span m='235540'>to</span> <span
  m='235680'>(x_1,</span> <span m='236090'>y_1).</span> <span
  m='238600'>OK?</span> <span m='240460'>So</span> <span
  m='240650'>that's</span> <span m='241240'>what</span> <span
  m='241450'>I'm</span> <span m='241550'>going</span> <span m='241740'>to</span>
  <span m='241820'>do,</span> <span m='241970'>and</span> <span
  m='242090'>I'm</span> <span m='242170'>going</span> <span m='242360'>to</span>
  <span m='242430'>let</span> <span m='242670'>C</span> <span
  m='243080'>equal</span> <span m='243580'>the curve</span> <span
  m='244080'>C_1</span> <span m='244500'>plus</span> <span
  m='244845'>C_2.</span> <span m='245190'>So I'm</span> <span
  m='245320'>going</span> <span m='245490'>to</span> <span
  m='245580'>have</span> <span m='245760'>C</span> <span m='246000'>be</span>
  <span m='246110'>the</span> <span m='246230'>full</span> <span
  m='246420'>curve.</span> <span m='247160'>And</span> <span
  m='247330'>what</span> <span m='247450'>I'm</span> <span
  m='247540'>interested</span> <span m='248020'>in</span> <span
  m='248140'>doing</span> <span m='250070'>is</span> <span
  m='250390'>finding</span> <span m='250990'>f</span> <span m='251210'>of</span>
  <span m='251320'>x_1,</span> <span m='251770'>y_1,</span> <span
  m='253120'>which</span> <span m='253290'>will</span> <span
  m='253410'>just</span> <span m='253710'>equal</span> <span
  m='255070'>the</span> <span m='255220'>integral</span> <span
  m='256000'>along</span> <span m='256360'>C</span> <span m='257760'>of</span>
  <span m='257970'>F</span> <span m='258340'>dot</span> <span
  m='258560'>dr.</span> </p><p><span m='261720'>So</span> <span
  m='261900'>now</span> <span m='262070'>we</span> <span m='262160'>need</span>
  <span m='262290'>to</span> <span m='262370'>figure</span> <span
  m='262700'>out</span> <span m='262870'>some</span> <span
  m='262990'>important</span> <span m='263370'>things</span> <span
  m='263670'>about</span> <span m='264750'>C_1</span> <span
  m='265380'>and</span> <span m='265550'>C_2.</span> <span
  m='265900'>What's</span> <span m='266090'>happening</span> <span
  m='266470'>on</span> <span m='266630'>C_1</span> <span m='267040'>and</span>
  <span m='267130'>what's</span> <span m='267270'>happening</span> <span
  m='267600'>on</span> <span m='267730'>C_2.</span> <span m='268620'>And</span>
  <span m='268990'>the</span> <span m='269150'>first</span> <span
  m='269440'>thing</span> <span m='269590'>I</span> <span m='269640'>want</span>
  <span m='269790'>to</span> <span m='269850'>point</span> <span
  m='270040'>out--</span> <span m='270220'>actually,</span> <span
  m='270560'>before</span> <span m='270820'>I</span> <span m='270870'>do</span>
  <span m='270980'>that,</span> <span m='271250'>let me</span> <span
  m='271460'>remind</span> <span m='271960'>you that this</span> <span
  m='272090'>is</span> <span m='272170'>going</span> <span m='272340'>to</span>
  <span m='272420'>be</span> <span m='272590'>the</span> <span
  m='272690'>integral</span> <span m='273880'>on</span> <span
  m='274070'>C</span> <span m='274880'>of</span> <span m='275490'>M*dx</span>
  <span m='276335'>plus</span> <span m='277080'>N*dy.</span> <span
  m='279260'>So</span> <span m='279460'>this</span> <span m='279670'>will</span>
  <span m='279770'>be</span> <span m='279870'>helpful to</span> <span
  m='280200'>refer</span> <span m='280520'>back</span> <span
  m='280750'>to.</span> <span m='281010'>That's</span> <span
  m='281260'>really</span> <span m='281510'>what</span> <span
  m='281600'>we're</span> <span m='281730'>also</span> <span
  m='282970'>doing</span> <span m='283300'>here.</span> <span
  m='284830'>So</span> <span m='285050'>on</span> <span m='285300'>C_1,</span>
  <span m='285860'>what</span> <span m='286000'>do</span> <span
  m='286080'>I</span> <span m='286190'>notice?</span> <span m='287390'>On</span>
  <span m='287610'>C_1,</span> <span m='289390'>x is</span> <span
  m='289760'>0</span> <span m='291750'>and</span> <span m='291890'>dx</span>
  <span m='292080'>is</span> <span m='292360'>0.</span> <span
  m='294050'>And</span> <span m='294270'>y</span> <span m='295330'>goes</span>
  <span m='295570'>between</span> <span m='295950'>0</span> <span
  m='296290'>and</span> <span m='296450'>y_1.</span> <span m='299280'>And</span>
  <span m='299460'>then</span> <span m='299600'>on</span> <span
  m='299790'>C_2,</span> <span m='301700'>y</span> <span m='304070'>is</span>
  <span m='304220'>equal</span> <span m='304320'>to</span> <span
  m='304520'>y_1.</span> <span m='305740'>So</span> <span m='305940'>dy</span>
  <span m='306550'>is</span> <span m='306680'>equal</span> <span
  m='306890'>to</span> <span m='307000'>0</span> <span m='308030'>and</span>
  <span m='308300'>x</span> <span m='308555'>is</span> <span
  m='308810'>going</span> <span m='309100'>between</span> <span
  m='309480'>0</span> <span m='310890'>and</span> <span m='311180'>x_1.</span>
  <span m='312770'>So</span> <span m='312910'>those</span> <span
  m='313830'>are</span> <span m='313890'>the</span> <span
  m='313970'>values</span> <span m='314350'>that</span> <span
  m='314470'>are</span> <span m='314560'>important</span> <span
  m='314930'>to</span> <span m='315040'>me.</span> </p><p><span
  m='316220'>So</span> <span m='316460'>if</span> <span m='316550'>you</span>
  <span m='316650'>notice</span> <span m='317090'>from</span> <span
  m='317820'>this</span> <span m='318050'>fact</span> <span
  m='318380'>and</span> <span m='318490'>this</span> <span
  m='318710'>fact,</span> <span m='319370'>we</span> <span m='319650'>see</span>
  <span m='319950'>that</span> <span m='320370'>if</span> <span
  m='320550'>we</span> <span m='320670'>look</span> <span m='320970'>at</span>
  <span m='321110'>the</span> <span m='321260'>integral</span> <span
  m='322490'>just</span> <span m='322830'>along</span> <span
  m='323150'>C_1,</span> <span m='324550'>there's</span> <span
  m='324770'>going</span> <span m='324960'>to</span> <span m='325020'>be</span>
  <span m='325130'>no</span> <span m='325390'>M*dx</span> <span
  m='326120'>term.</span> <span m='326840'>And</span> <span m='327020'>if
  we</span> <span m='327100'>look</span> <span m='327310'>at the</span> <span
  m='327520'>integral</span> <span m='328470'>along</span> <span
  m='329050'>C_2,</span> <span m='330670'>there's</span> <span m='330850'>going
  to</span> <span m='331090'>be</span> <span m='331190'>no</span> <span
  m='331350'>dy</span> <span m='331900'>term</span> <span
  m='332440'>because</span> <span m='332760'>of</span> <span
  m='332840'>that.</span> <span m='333580'>So</span> <span m='333810'>let</span>
  <span m='333950'>me</span> <span m='334060'>write</span> <span
  m='334400'>down</span> <span m='334960'>the</span> <span
  m='335090'>terms</span> <span m='335450'>that</span> <span
  m='335840'>do</span> <span m='336140'>exist,</span> <span
  m='336350'>and</span> <span m='336430'>we'll</span> <span
  m='336570'>see</span> <span m='336690'>some</span> <span
  m='336850'>other</span> <span m='337020'>things</span> <span
  m='337250'>drop</span> <span m='337530'>out</span> <span
  m='337700'>also.</span> <span m='340990'>If</span> <span m='341140'>I</span>
  <span m='341230'>look</span> <span m='341510'>along</span> <span
  m='341940'>first</span> <span m='342410'>just</span> <span
  m='342870'>C_1,</span> <span m='343970'>I'm</span> <span
  m='344120'>only</span> <span m='344400'>going</span> <span
  m='344640'>to</span> <span m='344750'>get--</span> <span m='345510'>I</span>
  <span m='345640'>said</span> <span m='345950'>the</span> <span
  m='346050'>dy</span> <span m='346530'>term,</span> <span
  m='347930'>which--</span> <span m='348980'>let</span> <span
  m='349110'>me</span> <span m='349200'>just</span> <span m='349410'>make</span>
  <span m='349570'>sure--</span> <span m='349790'>dx</span> <span
  m='350160'>is</span> <span m='350300'>0.</span> <span m='350470'>I'm</span>
  <span m='350600'>only</span> <span m='350780'>going</span> <span
  m='350910'>to</span> <span m='350970'>get</span> <span m='351090'>the</span>
  <span m='351170'>dy</span> <span m='351780'>term,</span> <span
  m='352040'>which</span> <span m='352220'>is--</span> <span
  m='352890'>well,</span> <span m='353130'>x is</span> <span m='353490'>0</span>
  <span m='353860'>there.</span> <span m='354100'>So</span> <span m='354250'>I'm
  going</span> <span m='354370'>to</span> <span m='354530'>get</span> <span
  m='354790'>0</span> <span m='354920'>times</span> <span m='355280'>e to</span>
  <span m='355570'>the</span> <span m='355690'>0</span> <span
  m='356140'>plus</span> <span m='356950'>y,</span> <span m='358310'>dy.</span>
  <span m='359270'>From</span> <span m='359580'>0</span> <span
  m='359900'>to</span> <span m='359980'>y_1.</span> <span m='360930'>Well</span>
  <span m='361140'>that's</span> <span m='361340'>nice</span> <span
  m='361650'>and</span> <span m='361760'>easy</span> <span m='361970'>to</span>
  <span m='362030'>calculate,</span> <span m='362570'>thank</span> <span
  m='362770'>goodness.</span> <span m='363110'>That's</span> <span
  m='363310'>just</span> <span m='363490'>0.</span> </p><p><span
  m='364620'>So</span> <span m='364850'>all</span> <span m='365100'>I</span>
  <span m='365200'>have</span> <span m='365340'>to</span> <span
  m='365430'>do</span> <span m='365540'>for</span> <span m='365690'>this</span>
  <span m='365860'>one</span> <span m='366040'>is</span> <span
  m='366230'>just</span> <span m='366460'>leave</span> <span
  m='366700'>it</span> <span m='366780'>at</span> <span m='366880'>0.</span>
  <span m='368440'>That's</span> <span m='368630'>everything</span> <span
  m='369030'>that</span> <span m='369140'>happens</span> <span
  m='369460'>along</span> <span m='369750'>C_1.</span> <span
  m='370690'>That's</span> <span m='370920'>what</span> <span
  m='371030'>I'm</span> <span m='371160'>interested</span> <span
  m='371580'>in.</span> <span m='372220'>I</span> <span m='372340'>just</span>
  <span m='372550'>get</span> <span m='372710'>0</span> <span
  m='372960'>there.</span> <span m='373840'>And</span> <span
  m='374050'>if</span> <span m='374160'>I</span> <span
  m='374250'>integrate</span> <span m='374590'>along</span> <span
  m='374820'>C_2,</span> <span m='375990'>as</span> <span m='376220'>I</span>
  <span m='376290'>mentioned,</span> <span m='376730'>dy</span> <span
  m='377260'>is</span> <span m='377350'>0.</span> <span m='377940'>So</span>
  <span m='378130'>we</span> <span m='378240'>don't</span> <span
  m='378470'>have</span> <span m='379290'>any</span> <span
  m='379490'>component</span> <span m='380190'>with</span> <span
  m='380500'>N*dy.</span> <span m='381490'>We</span> <span
  m='381800'>just</span> <span m='382100'>have</span> <span
  m='382270'>the</span> <span m='382350'>component</span> <span
  m='382850'>M*dx</span> <span m='383680'>that</span> <span
  m='383810'>we're</span> <span m='383920'>integrating.</span> <span
  m='385530'>OK,</span> <span m='385740'>so</span> <span m='385890'>if</span>
  <span m='385960'>I</span> <span m='386080'>integrate</span> <span
  m='386610'>along</span> <span m='386940'>C_2,</span> <span m='387810'>I</span>
  <span m='387920'>just</span> <span m='388150'>have</span> <span
  m='388270'>M*dx</span> <span m='389080'>and</span> <span m='389530'>M</span>
  <span m='389680'>is e</span> <span m='389930'>to the</span> <span
  m='390040'>x</span> <span m='390450'>plus y</span> <span
  m='390730'>times</span> <span m='390980'>x</span> <span m='391150'>plus</span>
  <span m='391380'>1.</span> <span m='392610'>And</span> <span
  m='392800'>y</span> <span m='393180'>is</span> <span m='393340'>fixed</span>
  <span m='393690'>at</span> <span m='393820'>y_1.</span> <span
  m='394660'>So</span> <span m='394780'>it's</span> <span m='394870'>e to</span>
  <span m='395070'>the</span> <span m='395440'>x plus</span> <span
  m='396140'>y1</span> <span m='397220'>times x</span> <span
  m='397680'>plus</span> <span m='397910'>1</span> <span m='398790'>dx.</span>
  <span m='400620'>And</span> <span m='400780'>I'm</span> <span
  m='400890'>going</span> <span m='401220'>from</span> <span m='401440'>0</span>
  <span m='401905'>to</span> <span m='402370'>x_1.</span> <span
  m='404540'>I'm</span> <span m='404670'>going</span> <span m='404810'>to</span>
  <span m='404870'>make</span> <span m='405020'>sure I</span> <span
  m='405180'>didn't</span> <span m='405360'>make</span> <span
  m='405510'>any</span> <span m='405620'>mistakes.</span> <span
  m='406210'>I'm</span> <span m='406290'>going to</span> <span
  m='406470'>check</span> <span m='406740'>my</span> <span
  m='406910'>work</span> <span m='407170'>here.</span> <span
  m='408130'>Yes,</span> <span m='408450'>I'm</span> <span
  m='408550'>looking</span> <span m='408880'>good.</span> </p><p><span
  m='409520'>OK.</span> <span m='410020'>So</span> <span m='410270'>this</span>
  <span m='410510'>one</span> <span m='410670'>is</span> <span
  m='410850'>0.</span> <span m='411550'>So</span> <span m='411840'>all I</span>
  <span m='411990'>have</span> <span m='412180'>to</span> <span
  m='412280'>do</span> <span m='412440'>is</span> <span m='412590'>find</span>
  <span m='412830'>an</span> <span m='412910'>antiderivative</span> <span
  m='413650'>of</span> <span m='413770'>this.</span> <span m='414800'>And</span>
  <span m='415810'>the</span> <span m='416060'>term--</span> <span
  m='416450'>if</span> <span m='416560'>I</span> <span
  m='416720'>multiply</span> <span m='417040'>through,</span> <span
  m='417340'>I</span> <span m='417440'>see</span> <span m='417670'>that</span>
  <span m='417840'>here</span> <span m='418550'>I</span> <span
  m='418680'>get</span> <span m='418830'>exactly</span> <span
  m='419250'>the</span> <span m='419350'>same</span> <span
  m='419620'>thing</span> <span m='419800'>when</span> <span m='419930'>I</span>
  <span m='419990'>look</span> <span m='420160'>for</span> <span
  m='420460'>an</span> <span m='420700'>antiderivative.</span> <span
  m='421610'>And</span> <span m='421820'>here</span> <span m='422520'>I</span>
  <span m='422660'>get,</span> <span m='423080'>I</span> <span
  m='423180'>believe,</span> <span m='423580'>two</span> <span
  m='423820'>terms</span> <span m='424250'>when</span> <span m='424430'>I</span>
  <span m='424580'>look for</span> <span m='424880'>an</span> <span
  m='424960'>antiderivative.</span> <span m='425420'>But</span> <span
  m='427010'>I'm</span> <span m='427070'>going to</span> <span
  m='427220'>get</span> <span m='427350'>some</span> <span
  m='427470'>cancellation.</span> <span m='428180'>And</span> <span
  m='428290'>ultimately,</span> <span m='429270'>when</span> <span
  m='429420'>I'm</span> <span m='429530'>all</span> <span m='429750'>done</span>
  <span m='430110'>I'm</span> <span m='430260'>going</span> <span
  m='430450'>to</span> <span m='430510'>get</span> <span m='430670'>this.</span>
  <span m='431280'>x</span> <span m='431600'>e</span> <span m='432030'>to</span>
  <span m='432250'>the</span> <span m='432570'>x</span> <span
  m='432820'>plus</span> <span m='433080'>y_1</span> <span
  m='434140'>evaluated</span> <span m='434800'>at</span> <span
  m='434930'>0</span> <span m='435650'>and</span> <span m='436020'>x_1.</span>
  <span m='436660'>You</span> <span m='436890'>could</span> <span
  m='437600'>do</span> <span m='437780'>this.</span> <span
  m='438050'>This</span> <span m='438210'>is</span> <span
  m='438320'>really</span> <span m='438570'>now a</span> <span
  m='438780'>single</span> <span m='439140'>variable</span> <span
  m='439530'>problem.</span> <span m='439900'>So</span> <span
  m='440040'>I'm</span> <span m='440220'>not</span> <span
  m='440390'>going</span> <span m='440610'>to</span> <span
  m='441230'>work</span> <span m='441420'>out</span> <span m='441550'>all</span>
  <span m='441630'>the</span> <span m='441720'>details,</span> <span
  m='442680'>but</span> <span m='442900'>you</span> <span
  m='442990'>might</span> <span m='443210'>want to</span> <span
  m='443410'>do</span> <span m='443970'>an</span> <span
  m='444100'>integration</span> <span m='444520'>by</span> <span
  m='444630'>parts</span> <span m='444980'>on</span> <span
  m='445110'>that</span> <span m='445300'>first</span> <span
  m='445630'>part</span> <span m='445830'>of</span> <span m='445930'>it,</span>
  <span m='446170'>if that</span> <span m='446340'>helps.</span> <span
  m='446740'>Or an</span> <span m='446930'>integration</span> <span
  m='447320'>by</span> <span m='447410'>parts</span> <span m='447680'>on</span>
  <span m='447780'>the</span> <span m='447850'>whole</span> <span
  m='448010'>thing.</span> <span m='449260'>That</span> <span
  m='449420'>would</span> <span m='449530'>also</span> <span
  m='450550'>do</span> <span m='450710'>the</span> <span
  m='450810'>trick.</span> </p><p><span m='451820'>So</span> <span
  m='452180'>what</span> <span m='452320'>do</span> <span m='452380'>I</span>
  <span m='452460'>get</span> <span m='452610'>here?</span> <span
  m='452790'>Then</span> <span m='452940'>I</span> <span m='452990'>get</span>
  <span m='453420'>x_1</span> <span m='454280'>e to</span> <span
  m='454580'>the</span> <span m='455010'>x_1</span> <span m='456530'>plus</span>
  <span m='456880'>y_1.</span> <span m='457800'>And</span> <span
  m='457960'>then</span> <span m='458060'>when</span> <span m='458180'>I</span>
  <span m='458220'>put</span> <span m='458410'>in</span> <span
  m='458520'>0</span> <span m='458820'>for</span> <span m='459190'>x</span>
  <span m='459370'>here, I</span> <span m='459440'>get</span> <span
  m='459590'>0,</span> <span m='459930'>so</span> <span m='460070'>that's</span>
  <span m='460290'>it.</span> <span m='460800'>So</span> <span
  m='461020'>this,</span> <span m='462720'>plus</span> <span
  m='463190'>possibly</span> <span m='463730'>a</span> <span
  m='463820'>constant,</span> <span m='464850'>is</span> <span
  m='465010'>equal</span> <span m='465270'>to</span> <span m='465380'>my</span>
  <span m='465570'>f.</span> <span m='467430'>So</span> <span
  m='467620'>I</span> <span m='467740'>see</span> <span m='468020'>that</span>
  <span m='468350'>in</span> <span m='468610'>general</span> <span
  m='468950'>I</span> <span m='469020'>get</span> <span m='469160'>f</span>
  <span m='469230'>of</span> <span m='469610'>x, y</span> <span
  m='469960'>is</span> <span m='470100'>equal</span> <span m='470310'>to</span>
  <span m='470805'>x</span> <span m='471690'>e</span> <span m='471910'>to
  the</span> <span m='472280'>x</span> <span m='472460'>plus</span> <span
  m='472580'>y</span> <span m='473580'>plus</span> <span m='473850'>a</span>
  <span m='473930'>constant.</span> <span m='475080'>So</span> <span
  m='475230'>that's</span> <span m='475440'>what</span> <span
  m='475570'>I</span> <span m='475630'>get</span> <span m='475930'>in</span>
  <span m='476130'>the</span> <span m='476230'>first</span> <span
  m='476850'>method.</span> <span m='478060'>So</span> <span
  m='478180'>now</span> <span m='478380'>let's</span> <span
  m='478600'>use</span> <span m='478930'>the</span> <span
  m='479040'>second</span> <span m='479350'>method.</span> <span
  m='481594'>So</span> <span m='482070'>I should</span> <span
  m='482430'>say</span> <span m='482740'>f of</span> <span
  m='483050'>x_1,</span> <span m='483860'>y_1.</span> </p><p><span
  m='485770'>In</span> <span m='485870'>the</span> <span
  m='485960'>second</span> <span m='486310'>method,</span> <span
  m='487090'>what</span> <span m='487370'>I</span> <span m='487440'>do</span>
  <span m='487660'>is--</span> <span m='487940'>M,</span> <span
  m='488220'>remember,</span> <span m='488740'>is</span> <span
  m='488900'>equal</span> <span m='489150'>to</span> <span m='489550'>f</span>
  <span m='489950'>sub</span> <span m='490320'>x.</span> <span
  m='493890'>So</span> <span m='494060'>f</span> <span m='494390'>sub</span>
  <span m='494740'>x is equal</span> <span m='494980'>to</span> <span
  m='495120'>M</span> <span m='496410'>which</span> <span m='496580'>is</span>
  <span m='496690'>equal</span> <span m='496940'>to</span> <span
  m='497910'>e</span> <span m='498100'>to</span> <span m='498180'>the</span>
  <span m='498550'>x plus</span> <span m='498860'>y</span> <span
  m='503020'>times</span> <span m='503395'>x</span> <span m='503770'>plus</span>
  <span m='504050'>1.</span> <span m='506350'>So</span> <span
  m='506720'>if</span> <span m='506880'>I</span> <span m='506980'>want to</span>
  <span m='507290'>find</span> <span m='507700'>an</span> <span
  m='507780'>antiderivative--</span> <span m='508440'>if</span> <span
  m='508640'>I</span> <span m='508700'>want to</span> <span
  m='508880'>find</span> <span m='509210'>f,</span> <span m='509740'>I</span>
  <span m='509800'>should</span> <span m='510030'>take</span> <span
  m='510250'>an</span> <span m='510320'>antiderivative,</span> <span
  m='511530'>right?</span> <span m='512230'>With</span> <span
  m='512410'>respect</span> <span m='512790'>to</span> <span
  m='512990'>x.</span> <span m='513930'>And</span> <span m='514120'>so</span>
  <span m='514220'>notice</span> <span m='514570'>I</span> <span
  m='514620'>already</span> <span m='514840'>did</span> <span
  m='515060'>that,</span> <span m='515360'>actually.</span> <span
  m='515820'>If</span> <span m='515930'>I</span> <span m='516010'>just</span>
  <span m='516270'>put</span> <span m='516510'>this</span> <span
  m='516690'>as</span> <span m='516810'>y,</span> <span m='517140'>I
  already</span> <span m='517370'>did</span> <span m='517570'>that</span> <span
  m='517770'>here.</span> <span m='518450'>And</span> <span m='518640'>so</span>
  <span m='518790'>I</span> <span m='518880'>should</span> <span
  m='519120'>get</span> <span m='519490'>something</span> <span
  m='519860'>that</span> <span m='520000'>looks</span> <span
  m='520210'>like</span> <span m='520430'>this:</span> <span m='520720'>x</span>
  <span m='521851'>e to</span> <span m='522480'>the</span> <span m='522820'>x
  plus</span> <span m='523110'>y</span> <span m='524360'>plus</span> <span
  m='524800'>possibly</span> <span m='525500'>a</span> <span
  m='525570'>function</span> <span m='526030'>that</span> <span
  m='526200'>only</span> <span m='526490'>depends</span> <span
  m='526870'>on</span> <span m='527020'>y.</span> </p><p><span
  m='527880'>And</span> <span m='528000'>the</span> <span
  m='528070'>reason</span> <span m='528420'>is</span> <span
  m='528680'>when</span> <span m='528820'>I</span> <span m='528890'>take</span>
  <span m='529100'>a</span> <span m='529160'>derivative with</span> <span
  m='529620'>respect</span> <span m='529990'>to x</span> <span m='530400'>of
  this,</span> <span m='530660'>obviously</span> <span m='531430'>this</span>
  <span m='531610'>would</span> <span m='531730'>be</span> <span
  m='531840'>0.</span> <span m='532500'>So</span> <span m='532690'>it</span>
  <span m='532760'>doesn't</span> <span m='533010'>show</span> <span
  m='533210'>up</span> <span m='533340'>over</span> <span
  m='533490'>here.</span> <span m='533680'>So</span> <span
  m='534320'>this,</span> <span m='534760'>we</span> <span
  m='535300'>make</span> <span m='535480'>sure</span> <span
  m='535740'>that--</span> <span m='537850'>oh,</span> <span
  m='538270'>that,</span> <span m='538510'>I</span> <span
  m='538600'>shouldn't</span> <span m='538860'>write</span> <span
  m='539000'>equals.</span> <span m='539660'>Sorry.</span> <span
  m='540610'>That,</span> <span m='540790'>I</span> <span
  m='540830'>shouldn't</span> <span m='541110'>write</span> <span
  m='541280'>equals.</span> <span m='542260'>OK?</span> <span
  m='543110'>This</span> <span m='543290'>would</span> <span
  m='543420'>imply</span> <span m='544340'>that</span> <span
  m='544540'>this</span> <span m='544800'>is</span> <span
  m='544910'>equal</span> <span m='545170'>to</span> <span m='545290'>f.</span>
  <span m='546030'>Sorry</span> <span m='546360'>about</span> <span
  m='546580'>that.</span> <span m='547310'>f</span> <span m='547640'>sub</span>
  <span m='547870'>x</span> <span m='547990'>was</span> <span
  m='548120'>equal</span> <span m='548240'>to</span> <span m='548390'>M
  was</span> <span m='548600'>equal</span> <span m='548770'>to</span> <span
  m='548860'>this.</span> <span m='549790'>That</span> <span
  m='550040'>implies--</span> <span m='550560'>when</span> <span
  m='550660'>I</span> <span m='550740'>take</span> <span m='550920'>an</span>
  <span m='551010'>antiderivative</span> <span m='551380'>of</span> <span
  m='551460'>an</span> <span m='551530'>x--</span> <span m='552530'>that</span>
  <span m='552700'>x</span> <span m='553030'>e</span> <span m='553140'>to
  the</span> <span m='553240'>x plus</span> <span m='553560'>y</span> <span
  m='554130'>plus</span> <span m='554550'>g</span> <span m='554820'>of y</span>
  <span m='554920'>is</span> <span m='555260'>equal</span> <span
  m='555480'>to</span> <span m='555760'>f.</span> <span m='556520'>So</span>
  <span m='556750'>I</span> <span m='556820'>apologize.</span> <span
  m='557670'>That</span> <span m='557840'>wouldn't</span> <span m='558110'>have
  been</span> <span m='558230'>an</span> <span m='558310'>equals</span> <span
  m='558760'>because</span> <span m='559020'>obviously</span> <span
  m='559470'>those</span> <span m='559740'>two</span> <span
  m='559880'>things</span> <span m='560170'>are</span> <span
  m='560300'>not</span> <span m='560540'>equal.</span> <span
  m='560860'>That</span> <span m='560960'>would</span> <span
  m='561060'>imply,</span> <span m='561410'>I</span> <span
  m='561450'>think--</span> <span m='562720'>yeah,</span> <span
  m='563150'>that</span> <span m='563280'>would</span> <span
  m='563370'>imply</span> <span m='563640'>something</span> <span
  m='563900'>very</span> <span m='564150'>bad</span> <span
  m='565130'>mathematically.</span> <span m='566530'>So</span> <span
  m='567120'>make</span> <span m='567350'>sure</span> <span
  m='567530'>you</span> <span m='567640'>understand</span> <span
  m='568360'>I</span> <span m='568540'>put</span> <span m='568720'>an</span>
  <span m='568790'>equals</span> <span m='569010'>sign</span> <span
  m='569190'>where I</span> <span m='569330'>should</span> <span
  m='569460'>not</span> <span m='569720'>have.</span> <span
  m='570950'>This</span> <span m='571410'>is</span> <span
  m='571540'>actually</span> <span m='571850'>a derivative</span> <span
  m='572240'>of</span> <span m='572360'>that.</span> <span m='572600'>So</span>
  <span m='572710'>this</span> <span m='572900'>is</span> <span
  m='573630'>antiderivative</span> <span m='574230'>of</span> <span
  m='574370'>this.</span> </p><p><span m='575790'>So</span> <span
  m='576000'>now</span> <span m='576160'>I</span> <span m='576250'>have</span>
  <span m='576560'>a</span> <span m='576830'>candidate</span> <span
  m='577370'>for</span> <span m='577500'>f.</span> <span m='578690'>And</span>
  <span m='578830'>so</span> <span m='578920'>now</span> <span m='579200'>I'm
  going</span> <span m='579520'>to</span> <span m='579610'>take</span> <span
  m='579990'>the</span> <span m='580060'>derivative</span> <span
  m='580180'>of</span> <span m='580310'>that.</span> <span m='580680'>And</span>
  <span m='580810'>what's</span> <span m='580990'>the</span> <span
  m='581080'>derivative</span> <span m='581540'>of that</span> <span
  m='581730'>with</span> <span m='581850'>respect</span> <span
  m='582200'>to</span> <span m='582290'>y?</span> <span m='584700'>So</span>
  <span m='584850'>f sub</span> <span m='585220'>y</span> <span
  m='586920'>based</span> <span m='587320'>on</span> <span
  m='587580'>this</span> <span m='588570'>is</span> <span
  m='588830'>going</span> <span m='589060'>to</span> <span m='589150'>be</span>
  <span m='589280'>equal</span> <span m='589580'>to</span> <span
  m='590460'>x</span> <span m='590875'>e</span> <span m='591290'>to</span> <span
  m='591530'>the</span> <span m='591920'>x plus</span> <span m='592180'>y</span>
  <span m='593510'>plus</span> <span m='593870'>g</span> <span
  m='594120'>prime</span> <span m='594410'>of</span> <span m='594700'>y.</span>
  <span m='595650'>So</span> <span m='595810'>the</span> <span
  m='595920'>prime</span> <span m='596250'>here</span> <span
  m='596420'>indicates</span> <span m='597050'>it's</span> <span
  m='597190'>in</span> <span m='598100'>a</span> <span
  m='598250'>derivative</span> <span m='598710'>in</span> <span
  m='598950'>y.</span> <span m='600060'>And</span> <span m='600290'>now</span>
  <span m='600470'>that</span> <span m='600880'>f</span> <span m='601300'>sub
  y</span> <span m='601560'>should</span> <span m='601770'>also</span> <span
  m='602130'>equal</span> <span m='602400'>N.</span> <span m='604940'>And</span>
  <span m='605180'>N</span> <span m='606690'>equals</span> <span
  m='607050'>x</span> <span m='607470'>e to</span> <span m='607690'>the</span>
  <span m='607810'>x</span> <span m='607950'>plus</span> <span
  m='608120'>y.</span> </p><p><span m='609820'>So</span> <span
  m='610010'>what</span> <span m='610130'>do</span> <span m='610200'>I</span>
  <span m='610310'>get</span> <span m='610500'>here?</span> <span
  m='611270'>I</span> <span m='611410'>see</span> <span m='611660'>x</span>
  <span m='612110'>e to the</span> <span m='612240'>x</span> <span
  m='612530'>plus y</span> <span m='612840'>has</span> <span
  m='613030'>to</span> <span m='613120'>equal</span> <span m='613370'>x</span>
  <span m='613680'>e to</span> <span m='613840'>the</span> <span m='614080'>x
  plus</span> <span m='614230'>y</span> <span m='614930'>plus</span> <span
  m='615670'>g</span> <span m='615930'>prime</span> <span m='616350'>of</span>
  <span m='616700'>y.</span> <span m='617050'>Which</span> <span
  m='617260'>means</span> <span m='617520'>g</span> <span m='617730'>prime
  of</span> <span m='618200'>y</span> <span m='618630'>is</span> <span
  m='618760'>equal</span> <span m='618990'>to</span> <span m='619070'>0.</span>
  <span m='621300'>Which</span> <span m='621520'>means</span> <span
  m='622490'>when</span> <span m='622730'>I</span> <span m='622810'>take</span>
  <span m='623100'>an</span> <span m='623240'>antiderivative</span> <span
  m='623360'>of</span> <span m='623820'>that</span> <span m='624110'>I</span>
  <span m='624160'>just</span> <span m='624460'>get</span> <span
  m='624570'>a</span> <span m='624610'>constant.</span> <span
  m='627620'>That</span> <span m='627810'>means</span> <span m='628070'>g
  of</span> <span m='628290'>y</span> <span m='628480'>was</span> <span
  m='628630'>a</span> <span m='628700'>constant.</span> <span
  m='629590'>So</span> <span m='629780'>that</span> <span
  m='629940'>implies</span> <span m='630410'>that</span> <span
  m='631410'>this</span> <span m='632170'>boxed</span> <span
  m='632640'>expression</span> <span m='633110'>right</span> <span
  m='633350'>here</span> <span m='634630'>is</span> <span m='637390'>f</span>
  <span m='637670'>of</span> <span m='637850'>x, y</span> <span
  m='639090'>if</span> <span m='639410'>g of</span> <span m='639570'>y</span>
  <span m='639830'>is</span> <span m='639950'>just</span> <span
  m='640150'>a</span> <span m='640220'>constant.</span> </p><p><span
  m='641350'>So</span> <span m='641610'>let</span> <span m='641730'>me</span>
  <span m='641810'>go</span> <span m='641930'>through</span> <span
  m='642110'>that</span> <span m='642260'>logic</span> <span m='642620'>one
  more</span> <span m='642770'>time.</span> <span m='643640'>I</span> <span
  m='643740'>had</span> <span m='644020'>f sub</span> <span m='644230'>x.</span>
  <span m='645190'>I</span> <span m='645310'>took</span> <span
  m='645540'>an</span> <span m='645610'>antiderivative</span> <span
  m='646360'>to</span> <span m='646460'>get</span> <span m='646620'>f</span>
  <span m='647450'>but</span> <span m='647660'>it involved</span> <span
  m='648010'>a</span> <span m='648360'>constant</span> <span
  m='648910'>in</span> <span m='649030'>x</span> <span m='649330'>that</span>
  <span m='649450'>was</span> <span m='649570'>a</span> <span
  m='649620'>function</span> <span m='649940'>of</span> <span
  m='650030'>y.</span> <span m='650960'>I</span> <span m='651070'>take</span>
  <span m='651350'>a</span> <span m='651400'>derivative</span> <span
  m='651840'>of</span> <span m='651990'>that</span> <span m='653320'>in</span>
  <span m='653510'>y.</span> <span m='654650'>I</span> <span
  m='654750'>compare</span> <span m='655210'>that</span> <span
  m='655450'>to</span> <span m='655550'>what</span> <span m='655730'>I</span>
  <span m='655800'>know</span> <span m='656090'>the</span> <span
  m='656280'>derivative</span> <span m='656390'>is</span> <span
  m='656500'>in</span> <span m='656960'>y.</span> <span m='657890'>That</span>
  <span m='658050'>gives</span> <span m='658240'>me</span> <span
  m='658380'>that</span> <span m='658550'>this</span> <span m='658740'>is</span>
  <span m='658860'>0.</span> <span m='659770'>So</span> <span
  m='660010'>its</span> <span m='660190'>antiderivative,</span> <span
  m='661090'>which</span> <span m='661280'>is</span> <span m='661410'>g</span>
  <span m='661640'>of y,</span> <span m='661940'>is</span> <span
  m='662040'>just</span> <span m='662210'>a</span> <span
  m='662260'>constant.</span> <span m='663090'>And</span> <span
  m='663220'>so</span> <span m='663330'>altogether</span> <span
  m='663880'>this</span> <span m='664060'>implies</span> <span
  m='665200'>that</span> <span m='665330'>f</span> <span m='666260'>of</span>
  <span m='666410'>x, y</span> <span m='668060'>is</span> <span
  m='668220'>equal</span> <span m='668420'>to</span> <span m='668610'>x</span>
  <span m='669070'>e</span> <span m='669670'>to</span> <span
  m='669910'>the</span> <span m='670040'>x</span> <span m='670240'>plus</span>
  <span m='670500'>y</span> <span m='671540'>plus</span> <span m='671980'>a
  constant.</span> <span m='672970'>Which</span> <span m='673120'>is</span>
  <span m='673210'>exactly</span> <span m='673620'>what</span> <span
  m='673720'>I</span> <span m='673770'>got</span> <span
  m='673940'>before.</span> <span m='675060'>Fortunately,</span> <span
  m='675670'>I</span> <span m='675730'>got</span> <span m='675950'>two</span>
  <span m='676140'>answers</span> <span m='676580'>that</span> <span
  m='676730'>are</span> <span m='676850'>the</span> <span
  m='676990'>same.</span> <span m='678410'>So</span> <span
  m='678550'>that's</span> <span m='679370'>it.</span> <span m='679700'>I'll
  stop there.</span> </p>
embedded_media:
  - uid: 50331b0c6a31a52eb07ba0caec21c584
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Tgk9wURblAw
  - uid: 3cadaa91095c2b53981a56233a763a1a
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Tgk9wURblAw/default.jpg'
  - uid: db63b5498279b009522b4d3ef91511bc
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_44_300k.mp4'
  - uid: 1ae205033aa7ed3fcdb6ae758318cfe4
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/potentials-gradient-fields/id414355340?i=90322840
  - uid: 3656ef7eb22d3355c46e9ba3f8a33a0a
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Tgk9wURblAw
  - uid: 280968ff51741cee7d8f03934f0e5c9e
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Tgk9wURblAw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-63-potential-functions/potentials-of-gradient-fields/Tgk9wURblAw.srt
  - uid: f3036912b84068107c24ff28236761fe
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Tgk9wURblAw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-63-potential-functions/potentials-of-gradient-fields/Tgk9wURblAw.pdf
  - uid: 0f9338dd1898715351c932e9ba658125
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: bafe958f2ded0a9584093cfe44b2c6b3
    parent_uid: 5a3ddda222486dbe2ef8334fbef0d0e8
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
