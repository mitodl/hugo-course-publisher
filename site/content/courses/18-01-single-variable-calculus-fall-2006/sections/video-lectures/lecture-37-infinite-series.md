---
title: 'Lecture 37: Infinite Series'
uid: 683b9253cbbf4999519046ff05e10658
parent_uid: eb1d53c3c4c145f03327e4698375e766
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-37-infinite-series
short_url: lecture-37-infinite-series
inline_embed_id: '79611879lecture37:infiniteseries77834575'
about_this_resource_text: >-
  <div class="vidpad"><p><strong>Topics covered:</strong> Infinite series and
  convergence tests</p>  <p>Note: This video lecture was recorded in the Fall of
  2007 and corresponds to the lecture notes for lecture 36 taught in the Fall of
  2006.</p> <p><strong>Instructor:</strong> Prof. David Jerison</p></div>
related_resources_text: >-
  <div class="vidpad"><p>Lecture Notes (<a
  href="./resolveuid/ba5ce991638cf6285e431937132e5b32">PDF -
  1.4MB</a>)</p></div>
transcript: >-
  <p><span m='0'>The</span> <span m='1270'>following</span> <span
  m='1420'>content</span> <span m='1680'>is</span> <span
  m='1727'>provided</span> <span m='1775'>under</span> <span m='1822'>a</span>
  <span m='1870'>Creative</span> <span m='2330'>Commons</span> <span
  m='2730'>license.</span> <span m='3144'>Your</span> <span
  m='3558'>support</span> <span m='3972'>will</span> <span m='4386'>help</span>
  <span m='4800'>MIT</span> <span m='5200'>OpenCourseWare</span> <span
  m='5460'>continue</span> <span m='5770'>to</span> <span m='6255'>offer</span>
  <span m='6910'>high</span> <span m='7130'>quality</span> <span
  m='7620'>educational</span> <span m='8270'>resources</span> <span
  m='8555'>for</span> <span m='8840'>free.</span> <span m='9646'>To</span> <span
  m='10050'>make</span> <span m='10250'>a</span> <span m='10330'>donation</span>
  <span m='10650'>or</span> <span m='11070'>to</span> <span
  m='11240'>view</span> <span m='11560'>additional</span> <span
  m='11980'>materials</span> <span m='12260'>from</span> <span
  m='12540'>hundreds</span> <span m='13022'>of</span> <span m='13504'>MIT</span>
  <span m='13986'>courses</span> <span m='14468'>visit</span> <span
  m='14950'>MIT</span> <span m='15432'>OpenCourseWare</span> <span
  m='16150'>at</span> <span m='16620'>ocw.mit.edu.</span> </p><p><span
  m='21570'>PROFESSOR: Today</span> <span m='21850'>we</span> <span
  m='21980'>are</span> <span m='22140'>continuing</span> <span
  m='22760'>with</span> <span m='23040'>improper</span> <span
  m='23510'>integrals.</span> <span m='24730'>I</span> <span
  m='24810'>still</span> <span m='25090'>have</span> <span m='25480'>a</span>
  <span m='25570'>little</span> <span m='25770'>bit</span> <span
  m='25890'>more</span> <span m='26090'>to</span> <span m='26250'>tell</span>
  <span m='26470'>you</span> <span m='26600'>about</span> <span
  m='26920'>them.</span> <span m='30080'>What</span> <span m='30230'>we</span>
  <span m='30350'>were</span> <span m='30480'>discussing</span> <span
  m='31170'>at</span> <span m='31280'>the</span> <span m='31360'>very</span>
  <span m='31640'>end</span> <span m='31800'>of</span> <span
  m='31870'>last</span> <span m='32310'>time</span> <span m='33510'>was</span>
  <span m='35250'>improper</span> <span m='35890'>integrals.</span> </p><p><span
  m='41560'>Now</span> <span m='41820'>and</span> <span m='42160'>these</span>
  <span m='42360'>are</span> <span m='42480'>going</span> <span
  m='42545'>to</span> <span m='42610'>be</span> <span m='43410'>improper</span>
  <span m='43725'>integrals</span> <span m='44570'>of</span> <span
  m='44730'>the</span> <span m='44850'>second</span> <span
  m='45500'>kind.</span> <span m='48220'>By</span> <span m='48680'>second</span>
  <span m='49010'>kind</span> <span m='49270'>I</span> <span
  m='49350'>mean</span> <span m='49570'>that</span> <span m='49680'>they</span>
  <span m='49770'>have</span> <span m='49980'>a</span> <span
  m='50040'>singularity</span> <span m='50990'>at</span> <span
  m='51200'>a</span> <span m='51270'>finite</span> <span m='51680'>place.</span>
  <span m='54800'>That</span> <span m='54970'>would</span> <span
  m='55080'>be</span> <span m='55230'>something</span> <span
  m='55610'>like</span> <span m='55860'>this.</span> <span m='57260'>So</span>
  <span m='57450'>here's</span> <span m='57760'>the</span> <span
  m='57840'>definition</span> <span m='58560'>if</span> <span
  m='58710'>you</span> <span m='58860'>like.</span> <span m='60140'>Same</span>
  <span m='61110'>sort</span> <span m='61400'>of</span> <span
  m='61550'>thing</span> <span m='61830'>as</span> <span m='61970'>we</span>
  <span m='62080'>did</span> <span m='62480'>when</span> <span
  m='62680'>the</span> <span m='62800'>singularity</span> <span
  m='63380'>was</span> <span m='63540'>at</span> <span
  m='63630'>infinity.</span> <span m='64120'>So</span> <span m='64280'>if</span>
  <span m='64350'>you</span> <span m='64440'>have</span> <span
  m='64620'>the</span> <span m='64720'>integral</span> <span
  m='65080'>from</span> <span m='65260'>0</span> <span m='65520'>to</span> <span
  m='65610'>1</span> <span m='66810'>of</span> <span m='67083'>f(x).</span>
  <span m='69440'>This</span> <span m='69610'>is</span> <span
  m='69720'>going</span> <span m='69910'>to</span> <span m='69980'>be</span>
  <span m='70060'>the</span> <span m='70190'>same</span> <span
  m='70510'>thing</span> <span m='70780'>as</span> <span m='70890'>the</span>
  <span m='71000'>limit,</span> <span m='72600'>as</span> <span
  m='72880'>a</span> <span m='73270'>goes</span> <span m='73670'>to</span> <span
  m='73770'>0</span> <span m='74150'>from</span> <span m='74390'>above,</span>
  <span m='75790'>the</span> <span m='75920'>integral</span> <span
  m='76270'>from</span> <span m='76500'>a</span> <span m='76700'>to</span> <span
  m='76800'>1</span> <span m='77780'>of</span> <span m='78310'>f(x)</span> <span
  m='78615'>dx.</span> </p><p><span m='81150'>And the</span> <span
  m='81320'>idea</span> <span m='81840'>here</span> <span m='83510'>is</span>
  <span m='84020'>the</span> <span m='84260'>same</span> <span
  m='84540'>one</span> <span m='84720'>that</span> <span m='84830'>we</span>
  <span m='84980'>had</span> <span m='85250'>at</span> <span
  m='85340'>infinity.</span> <span m='85920'>Let</span> <span
  m='86070'>me</span> <span m='86170'>draw</span> <span m='86450'>a</span> <span
  m='86490'>picture</span> <span m='86890'>of</span> <span m='87010'>it.</span>
  <span m='87320'>You</span> <span m='87520'>have,</span> <span
  m='87810'>imagine</span> <span m='88250'>a</span> <span
  m='88320'>function</span> <span m='88770'>which</span> <span
  m='88950'>is</span> <span m='89080'>coming</span> <span m='89380'>down</span>
  <span m='89590'>like</span> <span m='89820'>this</span> <span
  m='90030'>and</span> <span m='90160'>here's</span> <span m='90410'>the</span>
  <span m='90490'>point</span> <span m='90850'>1.</span> <span
  m='92020'>And</span> <span m='92430'>we</span> <span m='92550'>don't</span>
  <span m='92890'>know</span> <span m='93690'>whether</span> <span
  m='93960'>the</span> <span m='94120'>area</span> <span
  m='94530'>enclosed</span> <span m='95080'>is</span> <span
  m='95180'>going</span> <span m='95390'>to</span> <span m='95460'>be</span>
  <span m='95630'>infinite</span> <span m='95840'>or</span> <span
  m='96210'>finite</span> <span m='97430'>and so</span> <span
  m='97670'>we</span> <span m='97780'>cut</span> <span m='98060'>it</span> <span
  m='98150'>off</span> <span m='99040'>at</span> <span m='99210'>some
  place</span> <span m='99830'>a.</span> <span m='100680'>And</span> <span
  m='100820'>we</span> <span m='100930'>let</span> <span m='101220'>a</span>
  <span m='101470'>go</span> <span m='101660'>to</span> <span
  m='101760'>0</span> <span m='103390'>from</span> <span
  m='103580'>above.</span> <span m='104220'>So</span> <span
  m='104340'>really</span> <span m='104620'>it's</span> <span
  m='105360'>0+.</span> <span m='106800'>So</span> <span m='107070'>we're</span>
  <span m='107230'>coming</span> <span m='107520'>in</span> <span
  m='107660'>from</span> <span m='107880'>the</span> <span
  m='107970'>right</span> <span m='108790'>here.</span> <span
  m='109820'>And</span> <span m='110140'>we're</span> <span
  m='110360'>counting</span> <span m='110750'>up</span> <span
  m='110900'>the</span> <span m='111040'>area</span> <span m='111500'>in</span>
  <span m='111680'>this</span> <span m='111880'>chunk.</span> <span
  m='112810'>And</span> <span m='112940'>we're</span> <span
  m='113050'>seeing</span> <span m='113640'>as</span> <span m='113800'>it</span>
  <span m='113980'>expands</span> <span m='114840'>whether</span> <span
  m='115550'>it</span> <span m='115780'>goes</span> <span m='116060'>to</span>
  <span m='116180'>infinity</span> <span m='116520'>or</span> <span
  m='116790'>whether</span> <span m='117080'>it</span> <span
  m='117170'>tends</span> <span m='117440'>to</span> <span
  m='117530'>some</span> <span m='117750'>finite</span> <span
  m='118240'>limit.</span> </p><p><span m='119290'>Right,</span> <span
  m='119490'>so</span> <span m='119600'>this</span> <span m='119810'>is</span>
  <span m='119950'>the</span> <span m='120550'>example</span> <span
  m='121090'>and</span> <span m='121220'>this</span> <span m='121360'>is</span>
  <span m='121630'>the</span> <span m='121880'>definition.</span> <span
  m='122990'>And</span> <span m='123360'>just</span> <span m='123780'>as</span>
  <span m='123960'>we</span> <span m='124100'>did</span> <span
  m='124300'>for</span> <span m='125310'>the</span> <span
  m='125510'>other</span> <span m='125680'>kind</span> <span
  m='125870'>of</span> <span m='125950'>improper</span> <span
  m='126420'>integral,</span> <span m='127000'>we</span> <span
  m='127210'>say</span> <span m='127380'>that</span> <span
  m='127530'>this</span> <span m='127700'>converges --</span> <span
  m='131160'>so</span> <span m='131310'>that's</span> <span
  m='131540'>the</span> <span m='131640'>key</span> <span m='131860'>word</span>
  <span m='132270'>here</span> <span m='133610'>-- if</span> <span
  m='134160'>the</span> <span m='134240'>limit</span> <span m='134490'>is</span>
  <span m='134640'>finite,</span> <span m='139980'>exists</span> <span
  m='140770'>maybe</span> <span m='141140'>I</span> <span
  m='141250'>should</span> <span m='141360'>just</span> <span
  m='141470'>say</span> <span m='144220'>and</span> <span
  m='148825'>diverges</span> <span m='149799'>if</span> <span
  m='150286'>not.</span> </p><p><span m='155650'>Let's</span> <span
  m='155920'>just</span> <span m='156140'>take</span> <span
  m='156350'>care</span> <span m='156690'>of</span> <span m='156880'>the</span>
  <span m='158090'>basic</span> <span m='158470'>examples.</span> <span
  m='162110'>First</span> <span m='162440'>of</span> <span m='162540'>all</span>
  <span m='162980'>I</span> <span m='163090'>wrote</span> <span
  m='163430'>this</span> <span m='163620'>one</span> <span
  m='163790'>down</span> <span m='164040'>last</span> <span
  m='164410'>time.</span> <span m='164740'>We're</span> <span
  m='164850'>going</span> <span m='165065'>to</span> <span
  m='165710'>evaluate</span> <span m='166290'>this</span> <span
  m='166530'>one.</span> <span m='167390'>The</span> <span
  m='167570'>integral</span> <span m='168750'>from</span> <span
  m='168930'>0</span> <span m='169110'>to</span> <span m='169180'>1</span> <span
  m='169910'>of</span> <span m='170280'>1</span> <span m='170480'>over</span>
  <span m='170620'>the</span> <span m='170710'>square</span> <span
  m='170980'>root</span> <span m='171280'>of</span> <span m='171422'>x.</span>
  <span m='175740'>And this just, you</span> <span m='175850'>almost</span>
  <span m='176160'>don't</span> <span m='176420'>notice</span> <span
  m='176920'>the</span> <span m='177030'>fact</span> <span
  m='177360'>that</span> <span m='177460'>it</span> <span m='177690'>goes</span>
  <span m='178020'>to</span> <span m='178160'>infinity.</span> <span
  m='179920'>This</span> <span m='180120'>goes</span> <span m='180370'>to</span>
  <span m='180470'>infinity</span> <span m='180880'>as</span> <span
  m='180990'>x</span> <span m='181270'>goes</span> <span m='181530'>to</span>
  <span m='181650'>0.</span> <span m='182570'>But</span> <span
  m='182830'>if</span> <span m='182930'>you</span> <span
  m='183150'>evaluate</span> <span m='183345'>it</span> <span
  m='183540'>--</span> <span m='184320'>first</span> <span m='184570'>of</span>
  <span m='184660'>all</span> <span m='185020'>we</span> <span
  m='185190'>always</span> <span m='185450'>write</span> <span
  m='185700'>this</span> <span m='185860'>as</span> <span m='185970'>a</span>
  <span m='186030'>power.</span> <span m='186860'>Right?</span> <span
  m='188010'>To</span> <span m='188420'>get the</span> <span
  m='188610'>evaluation.</span> <span m='189870'>And</span> <span
  m='190060'>then</span> <span m='190960'>I'm</span> <span m='191140'>not</span>
  <span m='191310'>even</span> <span m='191530'>going</span> <span
  m='191700'>to</span> <span m='191770'>replace</span> <span
  m='192260'>the</span> <span m='192380'>0</span> <span m='192710'>by</span>
  <span m='192940'>an</span> <span m='193000'>a.</span> <span
  m='193060'>I'm</span> <span m='193390'>just</span> <span m='193520'>going
  to</span> <span m='193670'>leave</span> <span m='193890'>it</span> <span
  m='193960'>as</span> <span m='194090'>0.</span> <span m='194490'>The</span>
  <span m='195010'>antiderivative</span> <span m='195720'>here</span> <span
  m='196020'>is</span> <span m='196832'>x^(1/2)</span> <span
  m='197740'>times</span> <span m='198180'>2.</span> <span m='201540'>And</span>
  <span m='201850'>then</span> <span m='202200'>I</span> <span
  m='202340'>evaluate</span> <span m='202680'>that</span> <span
  m='202990'>at</span> <span m='203090'>0</span> <span m='203360'>and</span>
  <span m='203510'>1.</span> <span m='203750'>And</span> <span
  m='204310'>I</span> <span m='204370'>get</span> <span m='204590'>2.</span>
  <span m='205080'>2</span> <span m='205250'>minus</span> <span
  m='205610'>0,</span> <span m='205946'>which</span> <span m='206620'>is</span>
  <span m='206940'>2.</span> </p><p><span m='209090'>All</span> <span
  m='209205'>right</span> <span m='209320'>so</span> <span
  m='209430'>this</span> <span m='209670'>one</span> <span m='209860'>is</span>
  <span m='210000'>convergent.</span> <span m='211330'>And</span> <span
  m='211850'>not</span> <span m='212110'>only</span> <span m='212340'>is</span>
  <span m='212460'>it</span> <span m='212570'>convergent</span> <span
  m='212730'>but</span> <span m='213200'>we</span> <span m='213330'>can</span>
  <span m='213480'>evaluate</span> <span m='213830'>it.</span> </p><p><span
  m='218310'>The</span> <span m='218420'>second</span> <span
  m='218760'>example,</span> <span m='220550'>being</span> <span
  m='221250'>not</span> <span m='221500'>systematic</span> <span
  m='222140'>but</span> <span m='222340'>really</span> <span
  m='222650'>giving</span> <span m='222940'>you</span> <span
  m='223010'>the</span> <span m='223120'>principal</span> <span
  m='223670'>examples</span> <span m='224300'>that</span> <span
  m='224410'>we'll</span> <span m='224520'>be</span> <span
  m='224660'>thinking</span> <span m='225010'>about,</span> <span
  m='226990'>is</span> <span m='227410'>this</span> <span m='227640'>one</span>
  <span m='227880'>here,</span> <span m='229400'>dx / x.</span> <span
  m='231650'>And</span> <span m='231840'>this</span> <span m='232040'>one</span>
  <span m='232970'>gives</span> <span m='233270'>you</span> <span
  m='233770'>the</span> <span m='233920'>antiderivative</span> <span
  m='234200'>as</span> <span m='234350'>the</span> <span
  m='234760'>logarithm.</span> <span m='236070'>Evaluated</span> <span
  m='236410'>at</span> <span m='236650'>0</span> <span m='236990'>and</span>
  <span m='237110'>1.</span> <span m='238180'>And</span> <span
  m='238330'>now</span> <span m='238520'>again</span> <span
  m='238940'>you</span> <span m='239040'>have</span> <span m='239220'>to</span>
  <span m='239310'>have</span> <span m='239530'>this</span> <span
  m='240100'>thought</span> <span m='240190'>process</span> <span
  m='240690'>in</span> <span m='240780'>your</span> <span m='240910'>mind</span>
  <span m='241240'>that</span> <span m='241305'>you're</span> <span
  m='241370'>really</span> <span m='241580'>taking</span> <span
  m='241920'>the</span> <span m='242000'>limit.</span> <span
  m='242770'>But</span> <span m='242990'>this</span> <span m='243150'>is</span>
  <span m='243270'>going</span> <span m='243360'>to</span> <span
  m='243450'>be</span> <span m='243550'>the</span> <span m='243650'>log</span>
  <span m='243980'>of</span> <span m='244090'>1</span> <span
  m='244770'>minus</span> <span m='245140'>the</span> <span
  m='245330'>log</span> <span m='245900'>of</span> <span m='246100'>0.</span>
  <span m='246440'>Really</span> <span m='246740'>the</span> <span
  m='246935'>log</span> <span m='247130'>of</span> <span m='247235'>0</span>
  <span m='247340'>from</span> <span m='247530'>above.</span> <span
  m='247830'>There</span> <span m='247940'>is</span> <span m='248120'>no</span>
  <span m='248260'>such</span> <span m='248580'>thing</span> <span
  m='248800'>as</span> <span m='248940'>the</span> <span m='249040'>log
  of</span> <span m='249390'>0</span> <span m='249650'>from</span> <span
  m='249890'>below.</span> </p><p><span m='250970'>And</span> <span
  m='251210'>this</span> <span m='251530'>is</span> <span
  m='251760'>minus</span> <span m='252220'>infinity.</span> <span
  m='252820'>So</span> <span m='253080'>it's</span> <span m='253240'>0</span>
  <span m='253800'>minus</span> <span m='254520'>minus</span> <span
  m='254920'>infinity,</span> <span m='256000'>which</span> <span
  m='256230'>is</span> <span m='256320'>plus</span> <span
  m='256670'>infinity.</span> <span m='259020'>And</span> <span
  m='259130'>so</span> <span m='259260'>this</span> <span m='259470'>one</span>
  <span m='259870'>diverges.</span> </p><p><span m='269710'>All</span> <span
  m='269882'>right</span> <span m='270400'>so</span> <span
  m='270640'>what's</span> <span m='271190'>the</span> <span
  m='271330'>general--</span> <span m='272750'>So</span> <span
  m='273100'>more</span> <span m='273270'>or</span> <span m='273330'>less</span>
  <span m='273550'>in</span> <span m='273690'>general, let's just,</span> <span
  m='277470'>for</span> <span m='277660'>powers</span> <span
  m='278190'>anyway,</span> <span m='279070'>if</span> <span
  m='279330'>you</span> <span m='279440'>work</span> <span m='279700'>out</span>
  <span m='280410'>this</span> <span m='280620'>thing</span> <span
  m='280920'>for</span> <span m='282480'>dx</span> <span m='282700'>/</span>
  <span m='282965'>x^p</span> <span m='284110'>from</span> <span
  m='284320'>0</span> <span m='284550'>to</span> <span m='284630'>1.</span>
  <span m='285220'>What</span> <span m='285390'>you're</span> <span
  m='285520'>going to</span> <span m='285690'>find</span> <span
  m='286660'>is</span> <span m='287310'>that</span> <span m='287620'>it's</span>
  <span m='288550'>1/(1-p)</span> <span m='290150'>when</span> <span
  m='291370'>p</span> <span m='291690'>is</span> <span m='291820'>less
  than</span> <span m='292240'>1.</span> <span m='293020'>And</span> <span
  m='293190'>it</span> <span m='293340'>diverges</span> <span
  m='298450'>for</span> <span m='299470'>p</span> <span m='299560'>&gt;=</span>
  <span m='300000'>1.</span> <span m='302750'>Now</span> <span
  m='302950'>that's</span> <span m='303890'>the</span> <span
  m='304010'>final</span> <span m='304280'>result.</span> <span
  m='305310'>If</span> <span m='305500'>you</span> <span m='305660'>carry</span>
  <span m='306070'>out</span> <span m='306350'>this</span> <span
  m='306630'>integration</span> <span m='307880'>it's</span> <span
  m='309050'>not</span> <span m='309400'>difficult.</span> </p><p><span
  m='310920'>All</span> <span m='311330'>right</span> <span m='312660'>so</span>
  <span m='312900'>now</span> <span m='313470'>I</span> <span
  m='313600'>just</span> <span m='314050'>want</span> <span m='314430'>to</span>
  <span m='314650'>try</span> <span m='314850'>to</span> <span
  m='314920'>help</span> <span m='315170'>you</span> <span m='315310'>to</span>
  <span m='315500'>remember</span> <span m='316190'>this.</span> <span
  m='317270'>And</span> <span m='317560'>to</span> <span m='317780'>think</span>
  <span m='318100'>about</span> <span m='318810'>how</span> <span
  m='319210'>you</span> <span m='319380'>should</span> <span
  m='319590'>think</span> <span m='319810'>about</span> <span
  m='320130'>it.</span> <span m='320500'>So</span> <span m='320800'>I'm</span>
  <span m='320900'>going to</span> <span m='321090'>say</span> <span
  m='321480'>it</span> <span m='321590'>in</span> <span m='321830'>a</span>
  <span m='321900'>few</span> <span m='322210'>more</span> <span
  m='322510'>ways.</span> <span m='323890'>All</span> <span
  m='324250'>right</span> <span m='324810'>just</span> <span
  m='325030'>repeat</span> <span m='325390'>what</span> <span
  m='325520'>I've</span> <span m='325730'>said</span> <span
  m='325940'>already</span> <span m='326850'>but</span> <span
  m='327480'>try</span> <span m='327780'>to</span> <span m='327890'>get</span>
  <span m='328050'>it</span> <span m='328220'>to</span> <span
  m='329440'>percolate</span> <span m='330490'>and</span> <span
  m='330770'>absorb</span> <span m='331260'>itself.</span> <span
  m='332020'>And</span> <span m='332600'>in</span> <span m='332750'>order</span>
  <span m='332970'>to</span> <span m='333100'>do</span> <span
  m='333280'>that</span> <span m='333560'>I</span> <span m='333640'>have</span>
  <span m='333890'>to</span> <span m='334010'>make</span> <span
  m='334270'>the</span> <span m='334340'>contrast</span> <span
  m='335740'>between</span> <span m='336190'>the</span> <span
  m='336280'>kind</span> <span m='336650'>of</span> <span
  m='336970'>improper</span> <span m='337450'>integral</span> <span
  m='337750'>that</span> <span m='337810'>I</span> <span m='337870'>was</span>
  <span m='338070'>dealing</span> <span m='338370'>with</span> <span
  m='338570'>before.</span> <span m='339410'>Which</span> <span
  m='339750'>was</span> <span m='340020'>not</span> <span m='340810'>as</span>
  <span m='341090'>x</span> <span m='341370'>goes</span> <span
  m='341510'>to</span> <span m='341730'>0</span> <span m='341860'>here</span>
  <span m='342310'>but</span> <span m='342490'>as</span> <span
  m='342665'>x</span> <span m='342840'>goes</span> <span m='343090'>to</span>
  <span m='343230'>infinity,</span> <span m='343720'>the</span> <span
  m='343880'>other</span> <span m='344080'>side.</span> <span
  m='345920'>Let's</span> <span m='346240'>make</span> <span
  m='346490'>this</span> <span m='346660'>contrast.</span> </p><p><span
  m='352470'>First</span> <span m='352850'>of</span> <span
  m='352970'>all,</span> <span m='354310'>if</span> <span m='354480'>I</span>
  <span m='354560'>look</span> <span m='354790'>at</span> <span
  m='354910'>the</span> <span m='355410'>angle</span> <span
  m='355730'>that</span> <span m='355840'>we</span> <span m='355950'>have</span>
  <span m='356070'>been</span> <span m='356190'>paying</span> <span
  m='356410'>attention</span> <span m='356780'>to</span> <span
  m='356910'>right</span> <span m='357170'>now.</span> <span
  m='357610'>We've</span> <span m='357910'>just</span> <span
  m='358130'>considered</span> <span m='359610'>things</span> <span
  m='359950'>like</span> <span m='360250'>this.</span> <span m='360580'>1</span>
  <span m='360720'>over</span> <span m='360790'>x</span> <span
  m='361070'>to</span> <span m='361155'>the</span> <span m='361390'>1/2.</span>
  <span m='362520'>Which</span> <span m='362890'>is</span> <span
  m='364270'>a</span> <span m='364370'>lot</span> <span
  m='364660'>smaller</span> <span m='365440'>than</span> <span
  m='365640'>1/x.</span> <span m='366600'>Which</span> <span
  m='366740'>is</span> <span m='366840'>a</span> <span m='366900'>lot</span>
  <span m='367150'>smaller</span> <span m='367820'>than</span> <span
  m='368140'>say</span> <span m='368950'>1/x^2.</span> <span
  m='370740'>Which</span> <span m='370940'>would</span> <span
  m='371030'>be</span> <span m='371140'>another</span> <span
  m='371400'>example.</span> <span m='372050'>This</span> <span
  m='372290'>is</span> <span m='372510'>as</span> <span m='373350'>x</span>
  <span m='373770'>goes</span> <span m='374090'>to</span> <span
  m='374190'>0.</span> <span m='379990'>So</span> <span m='380750'>this</span>
  <span m='381100'>one's</span> <span m='381380'>the</span> <span
  m='381470'>smallest</span> <span m='382050'>one.</span> <span
  m='382280'>This</span> <span m='382450'>one's the</span> <span
  m='382600'>next</span> <span m='382980'>smallest</span> <span
  m='383145'>one.</span> <span m='383310'>And</span> <span
  m='383410'>this</span> <span m='383540'>one</span> <span m='383700'>is</span>
  <span m='383830'>very</span> <span m='384150'>large.</span> </p><p><span
  m='386820'>On</span> <span m='387060'>the</span> <span m='387170'>other</span>
  <span m='387410'>hand</span> <span m='389210'>it</span> <span
  m='389425'>goes</span> <span m='389640'>the</span> <span
  m='389830'>other</span> <span m='390060'>way</span> <span m='390530'>at</span>
  <span m='390650'>infinity.</span> <span m='396670'>As</span> <span
  m='397000'>x</span> <span m='397330'>tends</span> <span m='397470'>to</span>
  <span m='397800'>infinity.</span> <span m='399936'>All</span> <span
  m='400390'>right</span> <span m='401030'>so</span> <span m='401640'>try</span>
  <span m='401920'>to</span> <span m='402000'>keep</span> <span
  m='402280'>that</span> <span m='402470'>in</span> <span
  m='402610'>mind.</span> </p><p><span m='403140'>And</span> <span
  m='403630'>now</span> <span m='404970'>I'm</span> <span
  m='405130'>going</span> <span m='405235'>to</span> <span m='405340'>put</span>
  <span m='405740'>a</span> <span m='405790'>little</span> <span
  m='405990'>box</span> <span m='406630'>around</span> <span
  m='407910'>the</span> <span m='408030'>bad</span> <span m='408360'>guys</span>
  <span m='408760'>here.</span> <span m='410100'>This</span> <span
  m='410450'>one</span> <span m='412710'>is</span> <span
  m='413300'>divergent.</span> <span m='414710'>And</span> <span
  m='414910'>this</span> <span m='415160'>one</span> <span m='416080'>is</span>
  <span m='416290'>divergent.</span> <span m='417870'>And</span> <span
  m='418100'>this</span> <span m='418440'>one</span> <span m='419010'>is</span>
  <span m='419240'>divergent.</span> <span m='419950'>And</span> <span
  m='420090'>this</span> <span m='420270'>one</span> <span m='420440'>is</span>
  <span m='420550'>divergent.</span> <span m='421610'>The</span> <span
  m='422180'>crossover</span> <span m='422380'>point</span> <span
  m='422670'>is</span> <span m='422980'>1/x.</span> <span m='423510'>When</span>
  <span m='423620'>we</span> <span m='423700'>get</span> <span
  m='423880'>smaller</span> <span m='424480'>than</span> <span
  m='424680'>that,</span> <span m='425500'>we</span> <span m='425680'>get</span>
  <span m='425860'>to</span> <span m='425950'>things</span> <span
  m='426190'>which</span> <span m='426340'>are</span> <span
  m='426410'>convergent.</span> <span m='427390'>When</span> <span
  m='427640'>we</span> <span m='427730'>get</span> <span
  m='427880'>smaller</span> <span m='428460'>than</span> <span
  m='428740'>it</span> <span m='428850'>on</span> <span m='429030'>this</span>
  <span m='429210'>other</span> <span m='429430'>scale,</span> <span
  m='430590'>it's</span> <span m='430820'>convergent.</span> </p><p><span
  m='432680'>All</span> <span m='432820'>right</span> <span m='432960'>so</span>
  <span m='433070'>these</span> <span m='433360'>guys</span> <span
  m='433630'>are</span> <span m='433720'>divergent.</span> <span
  m='440300'>So</span> <span m='440570'>they're</span> <span
  m='441240'>associated</span> <span m='441730'>with</span> <span
  m='441860'>divergent</span> <span m='442330'>integrals.</span> <span
  m='443430'>The</span> <span m='443610'>functions</span> <span
  m='444080'>themselves</span> <span m='444900'>are</span> <span
  m='445100'>just</span> <span m='445390'>tending</span> <span
  m='445790'>towards--</span> <span m='446250'>well</span> <span
  m='446390'>these</span> <span m='446910'>tend</span> <span
  m='447170'>to</span> <span m='447290'>infinity,</span> <span
  m='447585'>and</span> <span m='447732'>these</span> <span
  m='447880'>tend</span> <span m='448350'>toward</span> <span
  m='448610'>0.</span> <span m='449310'>So</span> <span m='449660'>I'm</span>
  <span m='449770'>not</span> <span m='449930'>talking</span> <span
  m='450310'>about</span> <span m='452750'>the</span> <span
  m='452860'>functions</span> <span m='453320'>themselves</span> <span
  m='453830'>but</span> <span m='453980'>the</span> <span
  m='454140'>integrals.</span> </p><p><span m='455190'>Now</span> <span
  m='455420'>I</span> <span m='455530'>want</span> <span m='455740'>to</span>
  <span m='455800'>draw</span> <span m='456040'>this</span> <span
  m='456210'>again</span> <span m='458190'>here,</span> <span
  m='459150'>not</span> <span m='459410'>small</span> <span
  m='459740'>enough.</span> <span m='463810'>I</span> <span m='463980'>want
  to</span> <span m='464180'>draw</span> <span m='464360'>this</span> <span
  m='464540'>again.</span> <span m='468980'>And, so</span> <span
  m='469220'>I'm</span> <span m='469300'>just</span> <span
  m='469366'>going</span> <span m='469433'>to</span> <span
  m='469500'>draw</span> <span m='469635'>a</span> <span
  m='469770'>picture</span> <span m='470150'>of</span> <span
  m='470560'>what</span> <span m='470710'>it</span> <span m='470800'>is</span>
  <span m='470960'>that</span> <span m='471060'>I</span> <span
  m='471130'>have</span> <span m='471370'>here.</span> <span
  m='471760'>But</span> <span m='471900'>I'm</span> <span
  m='471990'>going</span> <span m='472055'>to</span> <span
  m='472120'>combine</span> <span m='472650'>these</span> <span
  m='472890'>two</span> <span m='473050'>pictures.</span> <span
  m='474850'>So</span> <span m='475140'>here's</span> <span
  m='476110'>the</span> <span m='476210'>picture</span> <span
  m='476610'>for</span> <span m='476860'>example</span> <span
  m='477970'>of</span> <span m='481050'>y = 1/x.</span> <span
  m='484714'>All</span> <span m='485180'>right.</span> <span
  m='486700'>That's</span> <span m='486940'>y</span> <span m='487560'>y =
  1/x.</span> <span m='488770'>And</span> <span m='489060'>that</span> <span
  m='489280'>picture</span> <span m='489580'>is</span> <span
  m='489660'>very</span> <span m='489960'>balanced.</span> <span
  m='490470'>It's</span> <span m='490670'>symmetric</span> <span
  m='491160'>on</span> <span m='491310'>the</span> <span m='491390'>two</span>
  <span m='491660'>ends.</span> </p><p><span m='492600'>If</span> <span
  m='492800'>I</span> <span m='492890'>cut</span> <span m='493210'>it</span>
  <span m='493320'>in</span> <span m='493430'>half</span> <span
  m='495010'>then</span> <span m='495180'>what</span> <span m='495330'>I</span>
  <span m='495390'>get</span> <span m='495780'>here</span> <span
  m='496500'>is</span> <span m='496740'>two</span> <span
  m='496990'>halves.</span> <span m='497660'>And</span> <span
  m='498000'>this</span> <span m='498220'>one</span> <span m='498880'>has</span>
  <span m='500760'>infinite</span> <span m='501200'>area.</span> <span
  m='503700'>That</span> <span m='503980'>corresponds</span> <span
  m='505130'>to</span> <span m='505270'>the</span> <span
  m='505400'>integral</span> <span m='505780'>from</span> <span
  m='505950'>1</span> <span m='506270'>to</span> <span
  m='506440'>infinity,</span> <span m='507730'>dx / x</span> <span
  m='508540'>being</span> <span m='509050'>infinite.</span> <span
  m='510530'>And</span> <span m='510680'>the</span> <span
  m='510770'>other</span> <span m='510980'>piece,</span> <span m='512940'>which
  --</span> <span m='513350'>this</span> <span m='513580'>one</span> <span
  m='513710'>we</span> <span m='513820'>calculated</span> <span
  m='514400'>last</span> <span m='514810'>time,</span> <span
  m='515310'>this</span> <span m='515480'>is</span> <span m='515600'>the</span>
  <span m='515680'>one</span> <span m='515810'>that</span> <span
  m='515900'>we</span> <span m='516000'>just</span> <span
  m='516270'>calculated</span> <span m='516850'>over</span> <span
  m='517030'>here</span> <span m='517230'>at</span> <span
  m='517300'>Example</span> <span m='517850'>2 --</span> <span
  m='520510'>has</span> <span m='520840'>the</span> <span m='521980'>same</span>
  <span m='522280'>property.</span> <span m='522719'>It's</span> <span
  m='523160'>infinite.</span> <span m='525720'>And</span> <span
  m='525910'>that's</span> <span m='526310'>the</span> <span
  m='526450'>fact</span> <span m='526800'>that</span> <span
  m='526900'>the</span> <span m='526980'>integral</span> <span
  m='527290'>from</span> <span m='527480'>0</span> <span m='527720'>to</span>
  <span m='527850'>1 of dx / x</span> <span m='530046'>is</span> <span
  m='530490'>infinite.</span> <span m='532100'>Right, so both,</span> <span
  m='533580'>we</span> <span m='533720'>lose</span> <span m='534080'>on</span>
  <span m='534260'>both</span> <span m='534520'>ends.</span> </p><p><span
  m='536570'>On</span> <span m='536860'>the</span> <span m='536960'>other</span>
  <span m='537180'>hand</span> <span m='538450'>if</span> <span
  m='538630'>I</span> <span m='538720'>take</span> <span
  m='540350'>something</span> <span m='540740'>like --</span> <span
  m='542390'>I'm</span> <span m='542660'>drawing</span> <span
  m='542950'>it</span> <span m='543040'>the</span> <span m='543140'>same</span>
  <span m='543440'>way</span> <span m='543580'>but</span> <span
  m='543730'>it's</span> <span m='543850'>really</span> <span
  m='544100'>not</span> <span m='544490'>the</span> <span m='544560'>same</span>
  <span m='545340'>-- y</span> <span m='545620'>=</span> <span
  m='546100'>1</span> <span m='546370'>over</span> <span m='546570'>the</span>
  <span m='546670'>square</span> <span m='546970'>root</span> <span
  m='547140'>of</span> <span m='547365'>x.</span> <span m='548490'>y</span>
  <span m='548660'>=</span> <span m='549100'>1 / x^(1/2).</span> <span
  m='551010'>And</span> <span m='551200'>if</span> <span m='551300'>I</span>
  <span m='551380'>cut</span> <span m='551670'>that</span> <span
  m='551910'>in</span> <span m='552060'>half</span> <span m='553010'>here</span>
  <span m='555040'>then</span> <span m='556580'>the</span> <span
  m='557310'>x^(1/2)</span> <span m='557567'>is</span> <span
  m='557620'>actually</span> <span m='557980'>bigger</span> <span
  m='558460'>than</span> <span m='558640'>this</span> <span
  m='558910'>guy.</span> <span m='559890'>So</span> <span m='560080'>this</span>
  <span m='560590'>piece</span> <span m='561080'>is</span> <span
  m='561410'>infinite.</span> <span m='566830'>And</span> <span
  m='567240'>this</span> <span m='567470'>part</span> <span
  m='567750'>over</span> <span m='567930'>here</span> <span
  m='568460'>actually</span> <span m='569130'>is</span> <span m='569470'>going
  to</span> <span m='569640'>give</span> <span m='569810'>us</span> <span
  m='569930'>an</span> <span m='570040'>honest</span> <span
  m='570450'>number.</span> <span m='571310'>In</span> <span
  m='571430'>fact</span> <span m='572570'>this</span> <span
  m='572770'>one</span> <span m='572940'>is</span> <span
  m='573070'>finite.</span> <span m='574810'>And</span> <span
  m='574980'>we</span> <span m='575090'>just</span> <span
  m='575420'>checked</span> <span m='575800'>what</span> <span
  m='575980'>the</span> <span m='576070'>number</span> <span
  m='576410'>is.</span> <span m='576550'>It</span> <span
  m='576620'>actually</span> <span m='577020'>happens</span> <span
  m='577340'>to</span> <span m='577430'>have</span> <span m='577600'>area</span>
  <span m='577980'>2.</span> <span m='586250'>And</span> <span
  m='586530'>what's</span> <span m='586710'>happening</span> <span
  m='587230'>here</span> <span m='587610'>is</span> <span m='588120'>if</span>
  <span m='588310'>you</span> <span m='588400'>would</span> <span
  m='588620'>superimpose</span> <span m='589210'>this</span> <span
  m='589570'>graph</span> <span m='589970'>on</span> <span m='590150'>the</span>
  <span m='590290'>other</span> <span m='590490'>graph</span> <span
  m='591350'>what</span> <span m='591620'>you</span> <span
  m='591710'>would</span> <span m='591870'>see</span> <span m='592130'>is</span>
  <span m='592340'>that</span> <span m='592500'>they</span> <span
  m='592660'>cross.</span> <span m='594580'>And</span> <span
  m='596950'>this</span> <span m='597250'>one</span> <span
  m='597500'>sits</span> <span m='597940'>on</span> <span m='598200'>top.</span>
  <span m='598970'>So</span> <span m='600320'>if</span> <span
  m='600520'>I</span> <span m='600600'>drew</span> <span m='600800'>this</span>
  <span m='600990'>one</span> <span m='601230'>in</span> <span
  m='601630'>let's</span> <span m='602090'>have</span> <span
  m='602270'>another</span> <span m='602510'>color</span> <span
  m='602860'>here,</span> <span m='604660'>orange</span> <span
  m='605160'>let's</span> <span m='605400'>say.</span> <span
  m='605840'>If</span> <span m='606010'>this</span> <span m='606190'>were</span>
  <span m='606360'>orange</span> <span m='606910'>if</span> <span
  m='607040'>I</span> <span m='607120'>set</span> <span m='607420'>it</span>
  <span m='607510'>on</span> <span m='607690'>top</span> <span
  m='608060'>here</span> <span m='608630'>it</span> <span
  m='608790'>would</span> <span m='608950'>go</span> <span
  m='609680'>this</span> <span m='609950'>way.</span> <span m='611130'>OK</span>
  <span m='611830'>and</span> <span m='612270'>underneath</span> <span
  m='612680'>the</span> <span m='612740'>orange</span> <span
  m='612980'>is</span> <span m='613080'>still</span> <span
  m='613410'>infinite.</span> <span m='614790'>So</span> <span
  m='614950'>both</span> <span m='615220'>of</span> <span
  m='615310'>these</span> <span m='615500'>are</span> <span
  m='615610'>infinite.</span> <span m='616070'>On</span> <span
  m='616190'>here</span> <span m='616580'>on</span> <span m='616710'>the</span>
  <span m='616800'>other</span> <span m='616970'>hand</span> <span
  m='617180'>underneath</span> <span m='617540'>the</span> <span
  m='617620'>orange</span> <span m='617850'>is</span> <span
  m='618250'>infinite</span> <span m='618370'>but</span> <span
  m='618750'>underneath</span> <span m='619220'>where</span> <span
  m='619340'>the</span> <span m='619440'>green</span> <span m='620100'>is
  is</span> <span m='620530'>finite.</span> <span m='621700'>That's</span> <span
  m='621960'>a</span> <span m='622010'>smaller</span> <span
  m='622490'>quantity.</span> <span m='623770'>Infinity</span> <span
  m='624120'>is</span> <span m='624360'>a</span> <span m='624440'>lot</span>
  <span m='624640'>bigger</span> <span m='624810'>than</span> <span
  m='624980'>2.</span> <span m='625290'>2</span> <span m='625460'>is</span>
  <span m='625630'>a</span> <span m='625700'>lot</span> <span
  m='625910'>less</span> <span m='626160'>than</span> <span
  m='626490'>infinity.</span> <span m='627826'>All</span> <span
  m='628210'>right</span> <span m='628480'>so</span> <span
  m='628610'>that's</span> <span m='628850'>reflected</span> <span
  m='629420'>in</span> <span m='629510'>these</span> <span
  m='629720'>comparisons</span> <span m='630460'>here.</span> </p><p><span
  m='630835'>Now</span> <span m='631210'>if</span> <span m='631370'>you</span>
  <span m='631490'>like</span> <span m='631800'>if</span> <span
  m='631900'>I</span> <span m='631970'>want</span> <span m='632050'>to</span>
  <span m='632130'>do</span> <span m='632210'>these</span> <span
  m='632630'>in</span> <span m='632875'>green.</span> <span
  m='633610'>This</span> <span m='633860'>guy is</span> <span
  m='634360'>good</span> <span m='635830'>and</span> <span
  m='635990'>this</span> <span m='636140'>guy</span> <span m='636565'>is</span>
  <span m='636990'>good.</span> <span m='639900'>Well</span> <span
  m='640140'>let</span> <span m='640240'>me</span> <span m='640310'>just</span>
  <span m='640540'>repeat</span> <span m='640960'>that</span> <span
  m='641150'>idea</span> <span m='641590'>over</span> <span
  m='641850'>here</span> <span m='642540'>in</span> <span m='642700'>this</span>
  <span m='642810'>sort</span> <span m='642960'>of</span> <span
  m='643050'>reversed</span> <span m='643530'>picture</span> <span
  m='643890'>with</span> <span m='644580'>y</span> <span m='646090'>=</span>
  <span m='646320'>1/x^2.</span> <span m='647930'>If</span> <span
  m='648120'>I</span> <span m='648220'>chop</span> <span m='648650'>that</span>
  <span m='648900'>in</span> <span m='649020'>half</span> <span
  m='650180'>then</span> <span m='650500'>the</span> <span
  m='650590'>good</span> <span m='650910'>part</span> <span m='651910'>is</span>
  <span m='652180'>this</span> <span m='652370'>end</span> <span
  m='652590'>here.</span> <span m='653640'>This is</span> <span
  m='653940'>finite.</span> <span m='656990'>And</span> <span
  m='657510'>the</span> <span m='657690'>bad</span> <span m='658070'>part</span>
  <span m='658520'>is</span> <span m='658970'>this</span> <span
  m='659170'>part</span> <span m='659350'>of</span> <span m='659430'>here</span>
  <span m='659570'>which</span> <span m='659730'>is</span> <span
  m='659830'>way</span> <span m='660150'>more</span> <span
  m='660380'>singular.</span> <span m='661480'>And</span> <span
  m='661700'>it's</span> <span m='661860'>infinite.</span> </p><p><span
  m='667070'>All</span> <span m='667530'>right</span> <span m='667730'>so</span>
  <span m='667920'>again</span> <span m='668480'>what</span> <span
  m='668650'>I've</span> <span m='668780'>just</span> <span
  m='669060'>tried</span> <span m='669350'>to</span> <span m='669440'>do</span>
  <span m='670080'>is</span> <span m='670430'>to</span> <span
  m='670540'>give</span> <span m='670750'>you</span> <span
  m='670910'>some</span> <span m='674710'>geometric</span> <span
  m='675380'>sense</span> <span m='675700'>and</span> <span
  m='675820'>also</span> <span m='676710'>some</span> <span
  m='677310'>visceral</span> <span m='677870'>sense.</span> <span
  m='678580'>This</span> <span m='678950'>guy,</span> <span
  m='679790'>its</span> <span m='680000'>tail</span> <span m='680420'>as</span>
  <span m='680520'>it</span> <span m='680590'>goes</span> <span
  m='680820'>out</span> <span m='681140'>to</span> <span
  m='681300'>infinity</span> <span m='681860'>is</span> <span
  m='681990'>much</span> <span m='682320'>lower.</span> <span
  m='683040'>It's</span> <span m='683270'>much</span> <span
  m='683560'>smaller</span> <span m='684090'>than</span> <span
  m='684640'>1/x.</span> <span m='685470'>And</span> <span
  m='685710'>these</span> <span m='685950'>guys</span> <span
  m='686250'>trapped</span> <span m='686980'>an</span> <span
  m='687100'>infinite</span> <span m='687510'>amount</span> <span
  m='687750'>of</span> <span m='687810'>area.</span> <span
  m='688080'>This</span> <span m='688290'>one</span> <span
  m='688430'>traps</span> <span m='688810'>only</span> <span m='689090'>a</span>
  <span m='689150'>finite</span> <span m='689550'>amount</span> <span
  m='689810'>of</span> <span m='689900'>area.</span> </p><p><span
  m='696676'>All</span> <span m='697145'>right</span> <span m='697620'>so</span>
  <span m='697700'>now</span> <span m='697960'>I'm</span> <span
  m='698090'>just</span> <span m='698280'>going to</span> <span
  m='698410'>give</span> <span m='698660'>one</span> <span
  m='698860'>last</span> <span m='700080'>example</span> <span
  m='700650'>which</span> <span m='700880'>combines</span> <span
  m='701420'>these</span> <span m='701620'>two</span> <span
  m='701790'>types</span> <span m='702160'>of</span> <span
  m='702640'>pictures.</span> <span m='703090'>It's</span> <span
  m='703230'>really</span> <span m='703600'>practically</span> <span
  m='704220'>the</span> <span m='704350'>same</span> <span m='705060'>as</span>
  <span m='705240'>what</span> <span m='705420'>I've</span> <span
  m='705480'>said</span> <span m='705810'>before</span> <span
  m='706790'>but</span> <span m='707150'>I--</span> <span m='710340'>oh</span>
  <span m='711860'>have</span> <span m='712200'>to</span> <span
  m='712330'>erase</span> <span m='712460'>this</span> <span
  m='712720'>one</span> <span m='712900'>too.</span> </p><p><span
  m='721340'>So</span> <span m='721550'>here's</span> <span
  m='721770'>another</span> <span m='722080'>example:</span> <span
  m='723600'>if</span> <span m='723770'>you're</span> <span
  m='723940'>in--</span> <span m='725020'>So</span> <span
  m='725510'>let's</span> <span m='725770'>take</span> <span
  m='727160'>the</span> <span m='727330'>following</span> <span
  m='727690'>example.</span> <span m='728160'>This</span> <span
  m='728310'>is</span> <span m='728440'>somewhat</span> <span
  m='728730'>related</span> <span m='729100'>to</span> <span
  m='729210'>the</span> <span m='729320'>first</span> <span
  m='729700'>one</span> <span m='729840'>that</span> <span m='729960'>I</span>
  <span m='730010'>gave</span> <span m='730270'>last</span> <span
  m='730700'>time.</span> <span m='731600'>If</span> <span m='731820'>you</span>
  <span m='731940'>take</span> <span m='732350'>a</span> <span
  m='733130'>function</span> <span m='734020'>y</span> <span m='734280'>=</span>
  <span m='735700'>1/(x-3)^2.</span> <span m='738770'>And</span> <span
  m='739240'>you</span> <span m='739480'>think</span> <span
  m='739670'>about</span> <span m='739910'>its</span> <span
  m='740110'>integral.</span> </p><p><span m='741160'>So</span> <span
  m='741370'>let's</span> <span m='741640'>think</span> <span
  m='741840'>about</span> <span m='742170'>the</span> <span
  m='742500'>integral</span> <span m='742940'>from</span> <span
  m='743110'>0</span> <span m='743430'>to</span> <span
  m='743570'>infinity,</span> <span m='744750'>dx</span> <span
  m='745330'>/</span> <span m='745590'>(x-3)^2.</span> <span
  m='747090'>And</span> <span m='747216'>suppose</span> <span
  m='747343'>you</span> <span m='747470'>were</span> <span
  m='747630'>faced</span> <span m='748070'>with</span> <span
  m='748220'>this</span> <span m='748320'>integral.</span> <span
  m='750420'>In</span> <span m='750580'>order</span> <span m='750780'>to</span>
  <span m='750930'>understand</span> <span m='751450'>what</span> <span
  m='751580'>it's</span> <span m='751710'>doing</span> <span
  m='752630'>you</span> <span m='752810'>have</span> <span m='752910'>to</span>
  <span m='753010'>pay</span> <span m='753210'>attention</span> <span
  m='753690'>to</span> <span m='753920'>two</span> <span
  m='754110'>places</span> <span m='754850'>where</span> <span
  m='755005'>it</span> <span m='755160'>can</span> <span m='755360'>go</span>
  <span m='755520'>wrong.</span> <span m='756310'>We're</span> <span
  m='756490'>going</span> <span m='756620'>to</span> <span
  m='756690'>split</span> <span m='757120'>into</span> <span
  m='757360'>two</span> <span m='757620'>pieces.</span> <span
  m='759530'>I'm</span> <span m='759680'>going</span> <span
  m='759810'>say</span> <span m='760660'>break</span> <span m='761120'>it</span>
  <span m='761190'>up</span> <span m='761380'>into</span> <span
  m='761660'>this</span> <span m='761960'>one</span> <span
  m='762270'>here</span> <span m='762960'>up</span> <span m='763170'>to</span>
  <span m='763260'>5,</span> <span m='764540'>for</span> <span
  m='764620'>the</span> <span m='764730'>sake</span> <span m='764970'>of</span>
  <span m='765070'>argument.</span> <span m='768090'>And</span> <span
  m='768320'>say</span> <span m='768550'>from</span> <span m='768740'>5</span>
  <span m='769220'>to</span> <span m='769390'>infinity.</span> <span
  m='773672'>All</span> <span m='774130'>right.</span> <span
  m='774960'>So</span> <span m='775070'>these</span> <span m='775260'>are</span>
  <span m='775360'>the</span> <span m='775490'>two</span> <span
  m='775670'>chunks.</span> </p><p><span m='776260'>Now</span> <span
  m='776380'>why</span> <span m='776610'>did</span> <span m='776750'>I</span>
  <span m='776820'>break</span> <span m='777100'>it</span> <span
  m='777180'>up</span> <span m='777300'>into</span> <span
  m='777500'>those</span> <span m='777790'>two</span> <span
  m='777910'>pieces?</span> <span m='778810'>Because</span> <span
  m='779230'>what's</span> <span m='779430'>happening</span> <span
  m='779870'>with</span> <span m='780030'>this</span> <span
  m='780190'>function</span> <span m='780670'>is</span> <span
  m='781620'>that</span> <span m='781740'>it's</span> <span
  m='781890'>going</span> <span m='782220'>up</span> <span
  m='782370'>like</span> <span m='782650'>this</span> <span m='783820'>at</span>
  <span m='784020'>3.</span> <span m='785250'>And</span> <span
  m='785430'>so</span> <span m='785570'>if</span> <span m='785710'>I</span>
  <span m='785840'>look</span> <span m='786850'>at</span> <span
  m='787010'>the</span> <span m='787120'>two</span> <span
  m='787340'>halves</span> <span m='788040'>here.</span> <span
  m='788470'>I'm</span> <span m='788590'>going</span> <span m='788710'>to</span>
  <span m='788780'>draw</span> <span m='789110'>them</span> <span
  m='789230'>again</span> <span m='789520'>and</span> <span
  m='789620'>I'm</span> <span m='789710'>going to</span> <span
  m='790000'>illustrate them</span> <span m='790640'>with</span> <span
  m='790890'>the</span> <span m='791310'>colors</span> <span
  m='791830'>we've</span> <span m='792030'>chosen,</span> <span
  m='792560'>which</span> <span m='792780'>are</span> <span m='793600'>I</span>
  <span m='793690'>guess</span> <span m='793900'>red</span> <span
  m='794120'>and</span> <span m='794280'>green.</span> <span
  m='795350'>What</span> <span m='795590'>you'll</span> <span
  m='795750'>discover</span> <span m='796350'>is</span> <span
  m='797390'>that</span> <span m='800090'>this</span> <span
  m='800420'>one</span> <span m='800660'>here,</span> <span
  m='804060'>which</span> <span m='804420'>corresponds</span> <span
  m='805100'>to</span> <span m='805250'>this</span> <span
  m='805590'>piece</span> <span m='807010'>here,</span> <span
  m='808350'>is</span> <span m='808530'>infinite.</span> <span
  m='810540'>And</span> <span m='810810'>it's</span> <span
  m='810950'>infinite</span> <span m='811650'>because</span> <span
  m='812080'>there's</span> <span m='812320'>a</span> <span
  m='812410'>square</span> <span m='813070'>in</span> <span
  m='813180'>the</span> <span m='813250'>denominator.</span> <span
  m='814270'>And</span> <span m='816000'>as</span> <span m='816330'>x</span>
  <span m='816660'>goes</span> <span m='816990'>to</span> <span
  m='817120'>3</span> <span m='817690'>this</span> <span m='817890'>is</span>
  <span m='818020'>very</span> <span m='818320'>much</span> <span
  m='818610'>like</span> <span m='818900'>if we</span> <span
  m='819190'>shifted</span> <span m='819560'>the</span> <span
  m='819660'>3</span> <span m='819840'>to</span> <span m='820020'>0.</span>
  <span m='820670'>Very</span> <span m='820880'>much</span> <span
  m='821070'>like</span> <span m='821230'>this</span> <span
  m='821770'>1/x^2</span> <span m='822400'>here.</span> <span
  m='822560'>But</span> <span m='822720'>not</span> <span m='823170'>in</span>
  <span m='823280'>this</span> <span m='823490'>context.</span> <span
  m='824250'>In</span> <span m='824460'>the</span> <span m='824630'>other</span>
  <span m='824950'>context</span> <span m='825480'>where</span> <span
  m='825660'>it's</span> <span m='825810'>going</span> <span
  m='826090'>to</span> <span m='826180'>infinity.</span> <span
  m='829460'>This</span> <span m='829610'>is</span> <span m='829720'>the</span>
  <span m='829820'>same</span> <span m='830760'>as</span> <span
  m='831800'>at</span> <span m='831950'>the</span> <span
  m='832050'>picture</span> <span m='832360'>directly</span> <span
  m='832870'>above</span> <span m='834130'>with</span> <span
  m='834320'>the</span> <span m='834470'>infinite</span> <span
  m='834960'>part</span> <span m='835220'>in</span> <span m='835360'>red.</span>
  <span m='837398'>All</span> <span m='837800'>right.</span> <span
  m='839650'>And</span> <span m='840290'>this</span> <span
  m='840520'>part</span> <span m='840870'>here,</span> <span
  m='843620'>this</span> <span m='843810'>part</span> <span m='844050'>is</span>
  <span m='844200'>finite.</span> <span m='844915'>All</span> <span
  m='845330'>right.</span> <span m='846240'>So</span> <span
  m='846680'>since</span> <span m='846910'>we</span> <span
  m='847020'>have</span> <span m='847400'>an</span> <span
  m='847530'>infinite</span> <span m='847880'>part</span> <span
  m='848200'>plus</span> <span m='848255'>a</span> <span
  m='848310'>finite</span> <span m='848650'>part</span> <span
  m='848960'>the</span> <span m='849050'>conclusion</span> <span
  m='849560'>is</span> <span m='849710'>that</span> <span m='850930'>this thing,
  well this</span> <span m='851160'>guy</span> <span
  m='852670'>converges.</span> <span m='855070'>And</span> <span
  m='855490'>this</span> <span m='855920'>one</span> <span
  m='858490'>diverges.</span> <span m='861470'>But</span> <span
  m='861700'>the</span> <span m='861800'>total</span> <span
  m='862510'>unfortunately</span> <span m='863260'>diverges.</span> <span
  m='863930'>Right,</span> <span m='864180'>because</span> <span
  m='864390'>it's</span> <span m='864510'>got</span> <span m='864780'>one</span>
  <span m='864950'>infinity</span> <span m='865470'>in</span> <span
  m='865610'>it.</span> <span m='865760'>So</span> <span m='866600'>this</span>
  <span m='866800'>thing</span> <span m='867980'>diverges.</span> <span
  m='871990'>And</span> <span m='872230'>that's</span> <span
  m='872430'>what</span> <span m='872590'>happened</span> <span
  m='872990'>last</span> <span m='873260'>time</span> <span
  m='873380'>when</span> <span m='873480'>we</span> <span m='873580'>got</span>
  <span m='873720'>a</span> <span m='873770'>crazy</span> <span
  m='874370'>number.</span> <span m='874870'>If</span> <span
  m='875040'>you</span> <span m='875160'>integrated</span> <span
  m='875660'>this</span> <span m='875790'>you</span> <span
  m='875890'>would</span> <span m='876000'>get</span> <span
  m='876150'>some</span> <span m='876350'>negative</span> <span
  m='876730'>number.</span> <span m='877480'>If</span> <span
  m='877610'>you</span> <span m='877960'>wrote</span> <span
  m='878180'>down</span> <span m='878380'>the</span> <span
  m='878460'>formulas</span> <span m='878970'>carelessly.</span> <span
  m='879850'>And</span> <span m='880070'>the</span> <span
  m='880130'>reason</span> <span m='880450'>is</span> <span
  m='880990'>that</span> <span m='881210'>the</span> <span
  m='881320'>calculation</span> <span m='881920'>actually</span> <span
  m='882250'>is</span> <span m='882350'>nonsense.</span> <span
  m='884710'>So</span> <span m='885160'>you've</span> <span
  m='885340'>gotta</span> <span m='885570'>be</span> <span
  m='885690'>aware,</span> <span m='886920'>if</span> <span
  m='887110'>you</span> <span m='887230'>encounter</span> <span
  m='887890'>a</span> <span m='887980'>singularity</span> <span
  m='888520'>in</span> <span m='888590'>the</span> <span
  m='888660'>middle,</span> <span m='889440'>not</span> <span
  m='889700'>to</span> <span m='889840'>ignore</span> <span
  m='890220'>it.</span> <span m='891840'>Yeah.</span> <span
  m='892100'>Question.</span> </p><p><span m='892620'>AUDIENCE: [INAUDIBLE
  PHRASE]</span> </p><p><span m='896430'>PROFESSOR: Why</span> <span
  m='896730'>do</span> <span m='896805'>we</span> <span m='896880'>say</span>
  <span m='897050'>that</span> <span m='897190'>the</span> <span
  m='897280'>whole</span> <span m='897450'>thing</span> <span
  m='897760'>diverges?</span> <span m='899710'>The</span> <span
  m='899840'>reason</span> <span m='900190'>why</span> <span
  m='900330'>we</span> <span m='900450'>say</span> <span m='900650'>that</span>
  <span m='900860'>is</span> <span m='901060'>the</span> <span
  m='901210'>area</span> <span m='901490'>under</span> <span
  m='901710'>the</span> <span m='901790'>whole</span> <span
  m='902060'>curve</span> <span m='902490'>is</span> <span
  m='902690'>infinite.</span> <span m='903690'>It's</span> <span
  m='903950'>the</span> <span m='904070'>sum</span> <span m='904310'>of</span>
  <span m='904410'>this</span> <span m='904650'>piece</span> <span
  m='904860'>plus</span> <span m='905150'>this</span> <span
  m='905440'>piece.</span> <span m='906130'>And</span> <span
  m='906300'>so</span> <span m='906490'>the</span> <span m='906630'>total</span>
  <span m='907210'>is</span> <span m='907350'>infinite.</span> </p><p><span
  m='908886'>AUDIENCE: [INAUDIBLE PHRASE]</span> </p><p><span
  m='917370'>PROFESSOR: We're</span> <span m='917600'>stuck.</span> <span
  m='917990'>This</span> <span m='918120'>is</span> <span m='918250'>an</span>
  <span m='918500'>ill-defined</span> <span m='918900'>integral.</span> <span
  m='919270'>It's</span> <span m='919440'>one</span> <span
  m='919660'>where</span> <span m='920140'>your</span> <span
  m='920360'>red</span> <span m='920800'>flashing</span> <span
  m='921370'>warning</span> <span m='921720'>sign</span> <span
  m='922050'>should</span> <span m='922260'>be</span> <span
  m='922390'>on.</span> <span m='922560'>Because</span> <span
  m='922850'>you're</span> <span m='922970'>not</span> <span
  m='923170'>going</span> <span m='923340'>to</span> <span m='923400'>get</span>
  <span m='923540'>the</span> <span m='923620'>right</span> <span
  m='923800'>answer</span> <span m='924040'>by</span> <span
  m='924140'>computing</span> <span m='924325'>it.</span> <span
  m='924510'>You'll</span> <span m='924780'>never</span> <span
  m='925030'>get</span> <span m='925210'>an</span> <span
  m='925300'>answer.</span> <span m='926860'>Similarly</span> <span
  m='927400'>you'll</span> <span m='927520'>never</span> <span
  m='927760'>get</span> <span m='927930'>an</span> <span
  m='928010'>answer</span> <span m='928300'>with</span> <span
  m='928450'>this.</span> <span m='929230'>And</span> <span
  m='929390'>you</span> <span m='929480'>will</span> <span m='929690'>get</span>
  <span m='929870'>an</span> <span m='929940'>answer</span> <span
  m='930260'>with</span> <span m='930430'>that.</span> <span
  m='932730'>OK?</span> <span m='937220'>Yeah</span> <span
  m='937480'>another</span> <span m='937740'>question.</span> </p><p><span
  m='939640'>AUDIENCE: [INAUDIBLE PHRASE]</span> </p><p><span
  m='945760'>PROFESSOR: So</span> <span m='945910'>the</span> <span
  m='946010'>question</span> <span m='946410'>is,</span> <span
  m='947460'>if</span> <span m='947600'>you</span> <span m='947690'>have</span>
  <span m='947830'>a</span> <span m='947870'>little</span> <span
  m='948100'>glance</span> <span m='949320'>at</span> <span m='949480'>an</span>
  <span m='949570'>integral,</span> <span m='950010'>how</span> <span
  m='950280'>are</span> <span m='950400'>you</span> <span
  m='950530'>going</span> <span m='950730'>to</span> <span
  m='950800'>decide</span> <span m='952540'>where</span> <span
  m='952930'>you</span> <span m='953030'>should</span> <span
  m='953250'>be</span> <span m='953360'>heading?</span> <span
  m='954750'>So</span> <span m='955680'>I'm</span> <span m='955870'>going
  to</span> <span m='956040'>answer</span> <span m='956630'>that</span> <span
  m='956900'>orally.</span> <span m='958280'>Although</span> <span
  m='959480'>you</span> <span m='959620'>know,</span> <span
  m='960790'>but</span> <span m='961190'>I'll</span> <span m='961310'>say</span>
  <span m='961650'>one</span> <span m='962750'>little</span> <span
  m='963080'>hint</span> <span m='963320'>here.</span> <span
  m='964010'>So</span> <span m='964470'>you</span> <span
  m='964700'>always</span> <span m='965110'>have</span> <span
  m='965330'>to</span> <span m='965430'>check</span> <span m='965850'>x</span>
  <span m='966270'>going</span> <span m='966520'>to</span> <span
  m='966760'>infinity</span> <span m='967710'>and</span> <span
  m='967890'>x</span> <span m='968070'>going</span> <span m='968290'>to</span>
  <span m='968380'>minus</span> <span m='968650'>infinity,</span> <span
  m='969730'>if</span> <span m='969920'>they're</span> <span
  m='970100'>in</span> <span m='970230'>there.</span> <span
  m='970740'>And</span> <span m='970970'>you</span> <span m='971080'>also</span>
  <span m='971420'>have</span> <span m='971570'>to</span> <span
  m='971660'>check</span> <span m='972100'>any</span> <span
  m='973260'>singularity,</span> <span m='974210'>like</span> <span
  m='974420'>x</span> <span m='974615'>going</span> <span m='974810'>to</span>
  <span m='974972'>3</span> <span m='975460'>for</span> <span
  m='975660'>sure</span> <span m='976160'>in</span> <span m='976300'>this</span>
  <span m='976490'>case.</span> <span m='976780'>You</span> <span
  m='976880'>have</span> <span m='976990'>to</span> <span m='977080'>pay</span>
  <span m='977250'>attention</span> <span m='977620'>to all</span> <span
  m='977800'>the</span> <span m='977890'>places</span> <span
  m='978210'>where</span> <span m='978330'>the</span> <span
  m='978420'>thing</span> <span m='978580'>is</span> <span
  m='978680'>infinite.</span> <span m='979350'>And</span> <span
  m='979640'>then</span> <span m='979730'>you</span> <span m='979800'>want
  to</span> <span m='980020'>focus</span> <span m='980430'>in</span> <span
  m='980630'>on</span> <span m='980850'>each</span> <span m='981060'>one</span>
  <span m='981400'>separately.</span> <span m='982330'>And</span> <span
  m='982510'>decide</span> <span m='982960'>what's</span> <span
  m='983150'>going</span> <span m='983410'>on</span> <span m='983590'>it</span>
  <span m='983800'>at</span> <span m='983960'>that</span> <span
  m='984190'>particular</span> <span m='984690'>place.</span> <span
  m='986920'>When</span> <span m='987950'>it's</span> <span m='988340'>a</span>
  <span m='988460'>negative</span> <span m='988910'>power--</span> <span
  m='989590'>So</span> <span m='989810'>remember</span> <span m='990780'>dx /
  x</span> <span m='992420'>as</span> <span m='992560'>x</span> <span
  m='992830'>goes</span> <span m='993110'>to</span> <span m='993220'>0</span>
  <span m='994530'>is</span> <span m='994770'>bad.</span> <span
  m='996980'>And</span> <span m='998280'>dx / x^2</span> <span
  m='998610'>is</span> <span m='998770'>bad.</span> <span m='999510'>dx /
  x^3</span> <span m='999840'>is</span> <span m='1000170'>bad.</span> <span
  m='1000490'>All</span> <span m='1000630'>of</span> <span
  m='1000710'>them</span> <span m='1000830'>are</span> <span
  m='1000960'>even</span> <span m='1001260'>worse.</span> <span
  m='1002600'>So</span> <span m='1002970'>anything</span> <span
  m='1003480'>of</span> <span m='1003580'>this</span> <span
  m='1003840'>form</span> <span m='1004750'>is</span> <span
  m='1004960'>bad:</span> <span m='1005550'>n</span> <span m='1005890'>=</span>
  <span m='1006170'>1,</span> <span m='1006850'>2,</span> <span
  m='1007970'>3.</span> <span m='1009650'>These</span> <span
  m='1009900'>are</span> <span m='1009960'>the</span> <span
  m='1010050'>red</span> <span m='1010350'>box</span> <span
  m='1010710'>kinds.</span> <span m='1011980'>All</span> <span
  m='1012470'>right.</span> </p><p><span m='1015030'>That</span> <span
  m='1015260'>means</span> <span m='1015490'>that</span> <span
  m='1015800'>any</span> <span m='1016170'>of</span> <span
  m='1016330'>the</span> <span m='1016420'>integrals</span> <span
  m='1016940'>that</span> <span m='1017050'>we</span> <span
  m='1017210'>did</span> <span m='1017980'>in</span> <span
  m='1018220'>partial</span> <span m='1018600'>fractions</span> <span
  m='1019710'>which</span> <span m='1019990'>had</span> <span
  m='1020140'>a</span> <span m='1020180'>root,</span> <span
  m='1020530'>which</span> <span m='1020690'>had</span> <span
  m='1021020'>a</span> <span m='1021370'>factor</span> <span
  m='1021800'>of</span> <span m='1021890'>something in</span> <span
  m='1022270'>the</span> <span m='1022380'>denominator.</span> <span
  m='1023160'>Those</span> <span m='1023370'>are</span> <span
  m='1023590'>all</span> <span m='1023910'>divergent</span> <span
  m='1024340'>integrals</span> <span m='1024790'>if</span> <span
  m='1024880'>you</span> <span m='1024980'>cross</span> <span
  m='1025390'>the</span> <span m='1025480'>singularly.</span> <span
  m='1026670'>Not</span> <span m='1027110'>a</span> <span
  m='1027160'>single</span> <span m='1027600'>one</span> <span
  m='1027910'>of</span> <span m='1028010'>them</span> <span
  m='1028140'>makes</span> <span m='1028370'>sense</span> <span
  m='1028820'>across</span> <span m='1029005'>the</span> <span
  m='1029190'>singularity. Right?</span> </p><p><span m='1032750'>If</span>
  <span m='1032890'>you</span> <span m='1032980'>have</span> <span
  m='1033270'>square</span> <span m='1033510'>roots</span> <span
  m='1033820'>and</span> <span m='1033950'>things</span> <span
  m='1034150'>like</span> <span m='1034310'>that</span> <span
  m='1034510'>then</span> <span m='1034620'>you</span> <span
  m='1034710'>can</span> <span m='1034850'>repair</span> <span
  m='1035600'>things</span> <span m='1035790'>like</span> <span
  m='1035950'>that.</span> <span m='1036100'>And</span> <span
  m='1036190'>there's</span> <span m='1036340'>some</span> <span
  m='1036490'>interesting</span> <span m='1036940'>examples</span> <span
  m='1037440'>of</span> <span m='1037540'>that.</span> <span
  m='1038030'>Such</span> <span m='1038260'>as</span> <span
  m='1038340'>with</span> <span m='1038480'>the</span> <span
  m='1038950'>arcsine</span> <span m='1039240'>function</span> <span
  m='1040320'>and</span> <span m='1040410'>so</span> <span
  m='1040570'>forth.</span> <span m='1041080'>Where</span> <span
  m='1041210'>you</span> <span m='1041290'>have</span> <span
  m='1041970'>an</span> <span m='1042150'>improper</span> <span
  m='1042610'>integral</span> <span m='1042940'>which</span> <span
  m='1043140'>is</span> <span m='1043230'>really</span> <span
  m='1043490'>OK.</span> <span m='1045940'>All</span> <span
  m='1046050'>right.</span> <span m='1046730'>So</span> <span
  m='1048080'>that's</span> <span m='1048250'>the</span> <span
  m='1048330'>best</span> <span m='1048590'>I</span> <span
  m='1048630'>can</span> <span m='1048810'>do.</span> <span
  m='1049880'>It's</span> <span m='1050150'>obviously</span> <span
  m='1050630'>something</span> <span m='1050790'>you</span> <span
  m='1050950'>get</span> <span m='1051080'>experience</span> <span
  m='1051640'>with.</span> <span m='1052260'>All</span> <span
  m='1052500'>right.</span> </p><p><span m='1054110'>Now</span> <span
  m='1055820'>I'm</span> <span m='1056080'>going to</span> <span
  m='1056220'>move</span> <span m='1056470'>on</span> <span
  m='1057620'>and</span> <span m='1057820'>this</span> <span
  m='1057970'>is</span> <span m='1058220'>more</span> <span
  m='1058490'>or</span> <span m='1058550'>less</span> <span
  m='1059350'>our</span> <span m='1059490'>last</span> <span
  m='1060040'>topic.</span> <span m='1062150'>Yay,</span> <span
  m='1062940'>but</span> <span m='1063150'>not</span> <span
  m='1063420'>quite.</span> <span m='1063900'>Well, so I should say</span> <span
  m='1065105'>it's</span> <span m='1065580'>our</span> <span
  m='1065680'>penultimate</span> <span m='1066300'>topic.</span> <span
  m='1066730'>Right</span> <span m='1067000'>because</span> <span
  m='1067210'>we</span> <span m='1067300'>have</span> <span
  m='1067460'>one</span> <span m='1067650'>more</span> <span
  m='1067840'>lecture.</span> <span m='1069430'>All</span> <span
  m='1069550'>right.</span> </p><p><span m='1072010'>So</span> <span
  m='1072150'>that</span> <span m='1072730'>our</span> <span
  m='1072870'>next</span> <span m='1073230'>topic</span> <span
  m='1073750'>is</span> <span m='1073920'>series.</span> <span
  m='1074750'>Now</span> <span m='1074880'>we'll</span> <span
  m='1075060'>do</span> <span m='1075280'>it</span> <span m='1075760'>in</span>
  <span m='1075930'>a</span> <span m='1076630'>sort</span> <span
  m='1076830'>of</span> <span m='1076900'>a</span> <span
  m='1076990'>concrete</span> <span m='1077670'>way</span> <span
  m='1078020'>today.</span> <span m='1078810'>And</span> <span
  m='1079240'>then</span> <span m='1080240'>we'll</span> <span
  m='1080360'>do</span> <span m='1080620'>what</span> <span
  m='1080713'>are</span> <span m='1080806'>known</span> <span
  m='1080970'>as</span> <span m='1081140'>power</span> <span
  m='1081560'>series</span> <span m='1082440'>tomorrow.</span> </p><p><span
  m='1085400'>So</span> <span m='1085560'>let</span> <span m='1085690'>me</span>
  <span m='1085820'>tell</span> <span m='1086010'>you</span> <span
  m='1086130'>about</span> <span m='1086480'>series.</span> <span
  m='1100490'>Remember</span> <span m='1100950'>we're</span> <span
  m='1101070'>talking</span> <span m='1101540'>about</span> <span
  m='1101790'>infinity</span> <span m='1102630'>and</span> <span
  m='1102790'>dealing</span> <span m='1103070'>with</span> <span
  m='1103240'>infinity.</span> <span m='1106820'>So</span> <span
  m='1106980'>we're</span> <span m='1107070'>not</span> <span
  m='1107250'>just</span> <span m='1107440'>talking</span> <span
  m='1107750'>about</span> <span m='1108020'>any</span> <span
  m='1108200'>old</span> <span m='1108390'>series.</span> <span
  m='1108730'>We're</span> <span m='1108820'>talking</span> <span
  m='1109080'>about</span> <span m='1109360'>infinite</span> <span
  m='1109790'>series.</span> </p><p><span m='1112650'>There</span> <span
  m='1112900'>is</span> <span m='1113130'>one</span> <span
  m='1113490'>infinite</span> <span m='1114000'>series</span> <span
  m='1115010'>which</span> <span m='1115560'>is</span> <span
  m='1115850'>probably,</span> <span m='1117400'>which</span> <span
  m='1117600'>is</span> <span m='1117690'>without</span> <span
  m='1118060'>question</span> <span m='1118560'>the</span> <span
  m='1118630'>most</span> <span m='1119000'>important</span> <span
  m='1119480'>and</span> <span m='1119650'>useful</span> <span
  m='1120620'>series.</span> <span m='1121980'>And</span> <span
  m='1122300'>that's</span> <span m='1122620'>the</span> <span
  m='1122710'>geometric</span> <span m='1123310'>series</span> <span
  m='1124450'>but</span> <span m='1124600'>I'm</span> <span m='1124690'>going
  to</span> <span m='1124870'>introduce</span> <span m='1125410'>it</span> <span
  m='1126150'>concretely</span> <span m='1126850'>first</span> <span
  m='1127350'>in</span> <span m='1127470'>a</span> <span
  m='1127530'>particular</span> <span m='1128050'>case.</span> <span
  m='1131990'>If</span> <span m='1132140'>I</span> <span m='1132230'>draw</span>
  <span m='1132570'>a</span> <span m='1132620'>picture</span> <span
  m='1133300'>of</span> <span m='1133420'>this</span> <span
  m='1133810'>sum.</span> <span m='1134260'>Which</span> <span
  m='1134690'>in</span> <span m='1134840'>principle</span> <span
  m='1135290'>goes</span> <span m='1135550'>on</span> <span
  m='1135780'>forever.</span> <span m='1136480'>You</span> <span
  m='1136720'>can</span> <span m='1136850'>see</span> <span
  m='1137050'>that</span> <span m='1137210'>it</span> <span
  m='1137360'>goes</span> <span m='1137660'>someplace</span> <span
  m='1138470'>fairly</span> <span m='1138830'>easily</span> <span
  m='1139670'>by</span> <span m='1139920'>marking</span> <span
  m='1140530'>out</span> <span m='1140760'>what's</span> <span
  m='1140980'>happening</span> <span m='1141360'>on</span> <span
  m='1141500'>the</span> <span m='1141560'>number</span> <span
  m='1141890'>line.</span> <span m='1142730'>The</span> <span
  m='1142840'>first</span> <span m='1143180'>step</span> <span
  m='1143480'>takes</span> <span m='1143790'>us</span> <span
  m='1143980'>to</span> <span m='1144110'>1</span> <span m='1144850'>from</span>
  <span m='1145170'>0.</span> <span m='1146630'>And</span> <span
  m='1146920'>then</span> <span m='1147010'>if</span> <span m='1147110'>I</span>
  <span m='1147240'>add</span> <span m='1147590'>this</span> <span
  m='1147790'>half,</span> <span m='1148970'>I</span> <span
  m='1149130'>get</span> <span m='1149340'>to</span> <span
  m='1149460'>3/2.</span> <span m='1151790'>Right,</span> <span
  m='1152530'>so</span> <span m='1152760'>the</span> <span
  m='1152850'>first</span> <span m='1153130'>step</span> <span
  m='1153390'>was</span> <span m='1153560'>1</span> <span m='1153880'>and</span>
  <span m='1154070'>the</span> <span m='1154130'>second</span> <span
  m='1154450'>step</span> <span m='1154750'>was</span> <span
  m='1154920'>1/2.</span> </p><p><span m='1156240'>Now</span> <span
  m='1156610'>if</span> <span m='1156710'>I</span> <span m='1156910'>add</span>
  <span m='1157200'>this</span> <span m='1157400'>quarter</span> <span
  m='1157940'>in,</span> <span m='1158680'>which</span> <span
  m='1158830'>is</span> <span m='1158940'>the</span> <span
  m='1159050'>next</span> <span m='1159470'>piece</span> <span
  m='1160510'>then</span> <span m='1160940'>I</span> <span
  m='1161060'>get</span> <span m='1161390'>some</span> <span
  m='1161590'>place</span> <span m='1161910'>here.</span> <span
  m='1162400'>But</span> <span m='1162630'>what</span> <span
  m='1162880'>I</span> <span m='1162930'>want</span> <span m='1163120'>to</span>
  <span m='1163210'>observe</span> <span m='1163900'>is</span> <span
  m='1164350'>that</span> <span m='1168360'>I got, I</span> <span
  m='1168480'>can</span> <span m='1168630'>look</span> <span
  m='1168770'>at</span> <span m='1168890'>it</span> <span
  m='1169000'>from</span> <span m='1169120'>the</span> <span
  m='1169210'>other</span> <span m='1169390'>point</span> <span
  m='1169640'>of</span> <span m='1169700'>view.</span> <span m='1171130'>I got,
  when</span> <span m='1171320'>I</span> <span m='1171360'>move</span> <span
  m='1171590'>this</span> <span m='1171790'>quarter</span> <span
  m='1172170'>I</span> <span m='1172270'>got</span> <span
  m='1172500'>half</span> <span m='1172960'>way</span> <span
  m='1173230'>to</span> <span m='1173350'>2</span> <span
  m='1174230'>here.</span> </p><p><span m='1176240'>I'm</span> <span
  m='1176690'>putting</span> <span m='1177030'>2</span> <span
  m='1177250'>in</span> <span m='1177430'>green</span> <span
  m='1177960'>because</span> <span m='1178550'>I</span> <span
  m='1178690'>want</span> <span m='1178920'>you</span> <span
  m='1179000'>to</span> <span m='1179100'>think</span> <span
  m='1179420'>of</span> <span m='1179520'>it</span> <span m='1180040'>as</span>
  <span m='1180300'>being</span> <span m='1181980'>the</span> <span
  m='1182100'>good</span> <span m='1182330'>kind.</span> <span
  m='1182950'>Right.</span> <span m='1183970'>The</span> <span
  m='1184070'>kind</span> <span m='1184400'>that</span> <span
  m='1184490'>has</span> <span m='1184690'>a</span> <span
  m='1184730'>number.</span> <span m='1185420'>And</span> <span
  m='1185565'>not</span> <span m='1185710'>one</span> <span
  m='1185820'>of</span> <span m='1185920'>the</span> <span
  m='1185990'>red</span> <span m='1186300'>kinds.</span> <span
  m='1187280'>We're</span> <span m='1187410'>getting</span> <span
  m='1187770'>there</span> <span m='1188650'>and</span> <span
  m='1188770'>we're</span> <span m='1188870'>almost</span> <span
  m='1189300'>there.</span> <span m='1189920'>So</span> <span
  m='1190620'>the</span> <span m='1190800'>next</span> <span
  m='1191140'>stage</span> <span m='1191380'>we</span> <span
  m='1191560'>get</span> <span m='1191710'>half</span> <span
  m='1192060'>way</span> <span m='1192290'>again.</span> <span
  m='1192620'>That's</span> <span m='1192870'>the</span> <span
  m='1193060'>eighth</span> <span m='1193760'>and</span> <span
  m='1193950'>so</span> <span m='1194180'>forth.</span> <span
  m='1194605'>And</span> <span m='1195030'>eventually</span> <span
  m='1195570'>we</span> <span m='1195680'>get</span> <span m='1195900'>to</span>
  <span m='1196010'>2.</span> <span m='1196490'>So</span> <span
  m='1196750'>this</span> <span m='1197130'>sum</span> <span
  m='1197520'>we</span> <span m='1197660'>write</span> <span
  m='1198090'>equals</span> <span m='1198700'>two.</span> </p><p><span
  m='1200476'>All</span> <span m='1200960'>right</span> <span
  m='1201170'>that's</span> <span m='1201750'>kind</span> <span
  m='1201980'>of</span> <span m='1202040'>a</span> <span
  m='1202100'>paradox</span> <span m='1202590'>because</span> <span
  m='1202840'>we</span> <span m='1202940'>never</span> <span
  m='1203150'>get</span> <span m='1203510'>to</span> <span m='1203820'>2.</span>
  <span m='1204130'>This</span> <span m='1204290'>is</span> <span
  m='1204410'>the</span> <span m='1204490'>paradox</span> <span
  m='1205140'>that</span> <span m='1205610'>Zeno</span> <span
  m='1207020'>fussed</span> <span m='1207400'>with.</span> <span
  m='1208080'>And</span> <span m='1208300'>his</span> <span
  m='1208520'>conclusion, you know,</span> <span m='1210730'>with</span> <span
  m='1210960'>the</span> <span m='1211070'>rabbit</span> <span
  m='1211750'>and</span> <span m='1211910'>the</span> <span
  m='1211980'>hare.</span> <span m='1213050'>No,</span> <span
  m='1213280'>the</span> <span m='1213370'>rabbit</span> <span
  m='1213630'>and</span> <span m='1213700'>the</span> <span
  m='1213770'>tortoise.</span> <span m='1214140'>Sorry</span> <span
  m='1215180'>hare</span> <span m='1215460'>chasing--</span> <span
  m='1216120'>anyway,</span> <span m='1216970'>the</span> <span
  m='1217050'>rabbit</span> <span m='1217460'>chasing</span> <span
  m='1218020'>the</span> <span m='1218170'>tortoise.</span> <span
  m='1218890'>His</span> <span m='1219100'>conclusion-- you know,</span> <span
  m='1220790'>I</span> <span m='1220890'>don't</span> <span
  m='1221050'>know</span> <span m='1221130'>if</span> <span
  m='1221240'>you're</span> <span m='1221350'>aware</span> <span
  m='1221620'>of</span> <span m='1221720'>this,</span> <span
  m='1222250'>but</span> <span m='1222470'>he</span> <span
  m='1222740'>understood</span> <span m='1223290'>this</span> <span
  m='1223500'>paradox.</span> <span m='1223770'>And</span> <span
  m='1224040'>he</span> <span m='1224150'>said</span> <span
  m='1224330'>you</span> <span m='1224420'>know</span> <span
  m='1224520'>it</span> <span m='1224610'>doesn't</span> <span
  m='1224850'>look</span> <span m='1224980'>like</span> <span
  m='1225150'>it</span> <span m='1225230'>ever</span> <span
  m='1225390'>gets</span> <span m='1225740'>there</span> <span
  m='1225920'>because</span> <span m='1226180'>they're</span> <span
  m='1226360'>infinitely</span> <span m='1226910'>many</span> <span
  m='1227590'>times</span> <span m='1229180'>between</span> <span
  m='1229670'>the</span> <span m='1229750'>time--</span> <span
  m='1230160'>you</span> <span m='1230270'>know</span> <span
  m='1230360'>that</span> <span m='1230610'>the</span> <span
  m='1231230'>tortoise</span> <span m='1231710'>is</span> <span
  m='1231820'>always</span> <span m='1232220'>behind,</span> <span
  m='1232330'>always</span> <span m='1232600'>behind,</span> <span
  m='1232900'>always</span> <span m='1233110'>behind,</span> <span
  m='1233450'>always</span> <span m='1233660'>behind.</span> <span
  m='1234580'>So</span> <span m='1235160'>therefore</span> <span
  m='1235660'>it's</span> <span m='1235780'>impossible</span> <span
  m='1236340'>that</span> <span m='1236440'>the</span> <span
  m='1236570'>tortoise</span> <span m='1236970'>catches</span> <span
  m='1237430'>up</span> <span m='1237690'>right.</span> <span
  m='1238710'>So</span> <span m='1238910'>do</span> <span m='1238990'>you</span>
  <span m='1239050'>know</span> <span m='1239160'>what</span> <span
  m='1239260'>his</span> <span m='1239410'>conclusion</span> <span
  m='1239890'>was?</span> <span m='1241600'>Time</span> <span
  m='1242060'>does</span> <span m='1242230'>not</span> <span
  m='1242470'>exist.</span> <span m='1245280'>That</span> <span
  m='1245460'>was</span> <span m='1245600'>actually</span> <span
  m='1246020'>literally</span> <span m='1246390'>his</span> <span
  m='1246550'>conclusion.</span> <span m='1248260'>Because</span> <span
  m='1248430'>he</span> <span m='1248510'>didn't</span> <span
  m='1248720'>understand</span> <span m='1249160'>the</span> <span
  m='1249240'>possibility</span> <span m='1249840'>of</span> <span
  m='1249920'>a</span> <span m='1249950'>continuum</span> <span
  m='1250620'>of</span> <span m='1250710'>time.</span> <span
  m='1251030'>Because</span> <span m='1251200'>there</span> <span
  m='1251270'>were</span> <span m='1251340'>infinitely</span> <span
  m='1251930'>many</span> <span m='1252230'>things</span> <span
  m='1252580'>that</span> <span m='1252690'>happened</span> <span
  m='1253090'>before</span> <span m='1253485'>the</span> <span
  m='1253880'>tortoise</span> <span m='1254340'>caught</span> <span
  m='1254630'>up.</span> <span m='1256610'>So</span> <span
  m='1257170'>that</span> <span m='1257320'>was</span> <span
  m='1257490'>the</span> <span m='1257640'>reasoning.</span> <span
  m='1257790'>I</span> <span m='1257830'>mean</span> <span
  m='1257980'>it's</span> <span m='1258060'>a</span> <span
  m='1258140'>long</span> <span m='1258350'>time</span> <span
  m='1258570'>ago</span> <span m='1258760'>but</span> <span
  m='1259490'>you</span> <span m='1259670'>know people didn't--</span> <span
  m='1260340'>he</span> <span m='1260430'>didn't</span> <span
  m='1260610'>believe</span> <span m='1260840'>in</span> <span
  m='1260940'>continuum.</span> </p><p><span m='1262430'>All</span> <span
  m='1262605'>right.</span> <span m='1263480'>So</span> <span
  m='1264660'>anyway</span> <span m='1265000'>that's</span> <span
  m='1265220'>a</span> <span m='1265300'>small</span> <span
  m='1265730'>point.</span> <span m='1266940'>Now</span> <span
  m='1268200'>the</span> <span m='1268340'>general</span> <span
  m='1268870'>case</span> <span m='1269480'>here</span> <span m='1269940'>of
  a</span> <span m='1270140'>geometric</span> <span m='1270640'>series</span>
  <span m='1279410'>is</span> <span m='1279630'>where</span> <span
  m='1279840'>I</span> <span m='1279890'>put</span> <span m='1280040'>in</span>
  <span m='1280140'>a</span> <span m='1280210'>number</span> <span
  m='1280570'>a</span> <span m='1280820'>instead</span> <span
  m='1281200'>of</span> <span m='1281620'>1/2</span> <span
  m='1282020'>here.</span> <span m='1282820'>So</span> <span
  m='1282935'>what</span> <span m='1283050'>we</span> <span
  m='1283230'>had</span> <span m='1283450'>before.</span> <span
  m='1283870'>So</span> <span m='1284010'>that's</span> <span
  m='1284200'>1</span> <span m='1284445'>+</span> <span m='1284690'>a</span>
  <span m='1285290'>+</span> <span m='1285840'>a^2...</span> <span
  m='1286890'>Isn't</span> <span m='1287150'>quite</span> <span
  m='1287430'>the</span> <span m='1287570'>most</span> <span
  m='1287710'>general</span> <span m='1288020'>but</span> <span
  m='1288140'>anyway</span> <span m='1288390'>I'll</span> <span
  m='1288500'>write</span> <span m='1288700'>this</span> <span
  m='1290130'>down.</span> <span m='1291900'>And</span> <span
  m='1292990'>you're</span> <span m='1293200'>certainly</span> <span
  m='1293600'>going</span> <span m='1293680'>to</span> <span
  m='1293760'>want</span> <span m='1293870'>to</span> <span
  m='1293980'>remember</span> <span m='1294480'>that</span> <span
  m='1294630'>the</span> <span m='1294720'>formula</span> <span
  m='1295200'>for</span> <span m='1295280'>this</span> <span
  m='1295870'>in</span> <span m='1295960'>the</span> <span
  m='1296050'>limit</span> <span m='1297460'>is</span> <span
  m='1298190'>1/(1-a).</span> </p><p><span m='1299510'>And</span> <span
  m='1299760'>I</span> <span m='1299830'>remind</span> <span
  m='1300330'>you</span> <span m='1300750'>that</span> <span
  m='1300950'>this</span> <span m='1301140'>only</span> <span
  m='1301580'>works</span> <span m='1302460'>when</span> <span
  m='1302780'>the</span> <span m='1302980'>absolute</span> <span
  m='1303470'>value</span> <span m='1304000'>is</span> <span
  m='1304150'>strictly</span> <span m='1304540'>less</span> <span
  m='1304860'>than</span> <span m='1304990'>1.</span> <span
  m='1305810'>In</span> <span m='1305940'>other</span> <span
  m='1306090'>words</span> <span m='1306310'>when</span> <span
  m='1306830'>-1</span> <span m='1307030'>is</span> <span
  m='1307130'>strictly</span> <span m='1307440'>less</span> <span
  m='1307660'>than</span> <span m='1307810'>a</span> <span m='1307970'>is</span>
  <span m='1308110'>less</span> <span m='1308330'>than</span> <span
  m='1308500'>1.</span> <span m='1311130'>And</span> <span
  m='1311390'>that's</span> <span m='1311780'>really</span> <span
  m='1312060'>the</span> <span m='1312270'>issue</span> <span
  m='1312780'>that</span> <span m='1312880'>we're</span> <span m='1313010'>going
  to</span> <span m='1313170'>want</span> <span m='1313370'>to</span> <span
  m='1313430'>worry</span> <span m='1313780'>about</span> <span
  m='1314160'>now.</span> <span m='1314310'>What</span> <span
  m='1314500'>we're</span> <span m='1314680'>worrying</span> <span
  m='1315050'>about</span> <span m='1315840'>is</span> <span
  m='1316380'>this</span> <span m='1316570'>notion</span> <span
  m='1316950'>of</span> <span m='1317040'>convergence.</span> <span
  m='1318270'>And</span> <span m='1318550'>what</span> <span
  m='1318710'>goes</span> <span m='1319000'>wrong</span> <span
  m='1324140'>when</span> <span m='1324430'>there</span> <span
  m='1324570'>isn't</span> <span m='1324830'>convergence,</span> <span
  m='1325300'>when</span> <span m='1326130'>there's</span> <span
  m='1326270'>a</span> <span m='1326350'>divergence.</span> </p><p><span
  m='1327360'>So</span> <span m='1327730'>let</span> <span m='1327940'>me</span>
  <span m='1328100'>illustrate</span> <span m='1328760'>the divergences</span>
  <span m='1331650'>before</span> <span m='1332750'>going</span> <span
  m='1333000'>on.</span> <span m='1333220'>And</span> <span
  m='1333340'>this</span> <span m='1333480'>is</span> <span
  m='1333610'>what</span> <span m='1334380'>we</span> <span
  m='1334520'>have</span> <span m='1334700'>to</span> <span
  m='1334870'>avoid</span> <span m='1335610'>if</span> <span
  m='1335810'>we're</span> <span m='1335900'>going to</span> <span
  m='1336090'>understand</span> <span m='1336700'>series.</span> <span
  m='1338990'>So</span> <span m='1339260'>here's</span> <span
  m='1339590'>an</span> <span m='1339670'>example</span> <span
  m='1340250'>when</span> <span m='1340930'>a = 1.</span> <span
  m='1341890'>You</span> <span m='1342150'>get</span> <span m='1342540'>1</span>
  <span m='1342950'>+</span> <span m='1343300'>1</span> <span
  m='1343650'>+</span> <span m='1344000'>1</span> <span m='1344410'>plus</span>
  <span m='1345440'>et</span> <span m='1345636'>cetera.</span> <span
  m='1346620'>And</span> <span m='1346940'>that's</span> <span
  m='1347170'>equal</span> <span m='1347410'>to</span> <span
  m='1347970'>1/(1-1).</span> <span m='1349990'>Which</span> <span
  m='1350350'>is</span> <span m='1351510'>1</span> <span m='1351780'>over</span>
  <span m='1352030'>0.</span> <span m='1352370'>So</span> <span
  m='1352590'>this</span> <span m='1352800'>is</span> <span
  m='1353010'>not</span> <span m='1353310'>bad.</span> <span
  m='1353760'>It's</span> <span m='1354130'>almost</span> <span
  m='1354800'>right. Right?</span> <span m='1355360'>It's</span> <span
  m='1355490'>sort</span> <span m='1355640'>of</span> <span
  m='1355740'>infinity</span> <span m='1356240'>equals</span> <span
  m='1356650'>infinity.</span> </p><p><span m='1357750'>At</span> <span
  m='1357930'>the</span> <span m='1358090'>edge</span> <span
  m='1358360'>here</span> <span m='1358690'>we</span> <span
  m='1358830'>managed</span> <span m='1359180'>to</span> <span
  m='1359260'>get</span> <span m='1359440'>something</span> <span
  m='1359850'>which</span> <span m='1360010'>is</span> <span
  m='1360110'>sort</span> <span m='1360370'>of</span> <span
  m='1360560'>almost</span> <span m='1361000'>right.</span> <span
  m='1362340'>But</span> <span m='1362780'>you</span> <span
  m='1362880'>know,</span> <span m='1363230'>it's,</span> <span
  m='1363700'>we</span> <span m='1363960'>don't</span> <span
  m='1364180'>consider</span> <span m='1364630'>this</span> <span
  m='1364900'>to</span> <span m='1365030'>be</span> <span
  m='1365280'>logically</span> <span m='1366100'>to</span> <span
  m='1366230'>make</span> <span m='1366720'>complete</span> <span
  m='1367140'>sense.</span> <span m='1367540'>So</span> <span
  m='1369600'>it's</span> <span m='1369780'>a</span> <span
  m='1369840'>little</span> <span m='1370050'>dangerous.</span> <span
  m='1371200'>And</span> <span m='1371440'>so</span> <span m='1371590'>we</span>
  <span m='1371780'>just</span> <span m='1372030'>say</span> <span
  m='1372190'>that</span> <span m='1372340'>it</span> <span
  m='1372410'>diverges.</span> <span m='1372960'>And</span> <span
  m='1373050'>we</span> <span m='1373140'>get</span> <span
  m='1373340'>rid</span> <span m='1373490'>of</span> <span
  m='1373560'>this.</span> <span m='1374100'>So</span> <span
  m='1374250'>we're</span> <span m='1374380'>still</span> <span
  m='1374620'>putting</span> <span m='1374950'>it</span> <span
  m='1375040'>in</span> <span m='1375180'>red.</span> <span
  m='1375990'>All</span> <span m='1376140'>right.</span> <span
  m='1378540'>The</span> <span m='1378620'>bad</span> <span
  m='1378900'>guy</span> <span m='1379340'>here.</span> <span
  m='1380110'>So</span> <span m='1380230'>this</span> <span
  m='1380420'>one</span> <span m='1380580'>diverges.</span> <span
  m='1384670'>Similarly</span> <span m='1385820'>if</span> <span
  m='1385940'>I</span> <span m='1386030'>take</span> <span m='1386350'>a</span>
  <span m='1386700'>equals</span> <span m='1386890'>-1,</span> <span
  m='1389020'>I</span> <span m='1389190'>get</span> <span m='1389490'>1</span>
  <span m='1389730'>-</span> <span m='1390160'>1</span> <span
  m='1390350'>+</span> <span m='1390710'>1</span> <span m='1391010'>-</span>
  <span m='1391360'>1</span> <span m='1391590'>+</span> <span
  m='1391940'>1...</span> <span m='1392650'>Because</span> <span
  m='1392930'>the</span> <span m='1393030'>odd</span> <span m='1393320'>and
  the</span> <span m='1393450'>even</span> <span m='1393800'>powers</span> <span
  m='1394490'>in</span> <span m='1394610'>that</span> <span
  m='1394780'>formula</span> <span m='1395450'>alternate</span> <span
  m='1396100'>sign.</span> </p><p><span m='1397270'>And</span> <span
  m='1397740'>this</span> <span m='1398010'>bounces</span> <span
  m='1398540'>back</span> <span m='1398850'>and</span> <span
  m='1399000'>forth.</span> <span m='1399750'>It</span> <span
  m='1399920'>never</span> <span m='1400170'>settles</span> <span
  m='1400610'>down.</span> <span m='1401640'>It</span> <span
  m='1401830'>starts</span> <span m='1402850'>at</span> <span
  m='1403030'>1.</span> <span m='1403560'>And</span> <span
  m='1403690'>then</span> <span m='1403780'>it</span> <span
  m='1403840'>gets</span> <span m='1404050'>down</span> <span
  m='1404240'>to</span> <span m='1404310'>0</span> <span m='1404570'>and</span>
  <span m='1404660'>then it</span> <span m='1404770'>goes</span> <span
  m='1404970'>back</span> <span m='1405200'>up</span> <span
  m='1405320'>to</span> <span m='1405420'>1,</span> <span
  m='1405720'>down</span> <span m='1405950'>to</span> <span
  m='1406020'>0,</span> <span m='1406640'>back</span> <span
  m='1406860'>up</span> <span m='1406990'>to</span> <span m='1407100'>1.</span>
  <span m='1408400'>It</span> <span m='1408530'>doesn't</span> <span
  m='1408820'>settle</span> <span m='1409160'>down.</span> <span
  m='1409570'>It</span> <span m='1409800'>bounces</span> <span
  m='1410030'>back</span> <span m='1410260'>and</span> <span
  m='1410370'>forth.</span> <span m='1410600'>It</span> <span
  m='1410650'>oscillates.</span> <span m='1411580'>On</span> <span
  m='1411750'>the</span> <span m='1411830'>other</span> <span
  m='1411990'>hand</span> <span m='1412160'>if</span> <span
  m='1412230'>you</span> <span m='1412320'>compare</span> <span
  m='1412780'>the</span> <span m='1412890'>right</span> <span
  m='1413300'>hand</span> <span m='1413590'>side.</span> <span
  m='1414740'>What's</span> <span m='1415050'>the</span> <span
  m='1415130'>right</span> <span m='1415360'>hand</span> <span
  m='1415560'>side?</span> <span m='1415980'>It's</span> <span m='1416720'>1 /
  (1-(-1)).</span> <span m='1419730'>Which</span> <span m='1420080'>is</span>
  <span m='1420610'>1/2.</span> <span m='1421515'>All</span> <span
  m='1421900'>right.</span> <span m='1422460'>So</span> <span
  m='1422830'>if</span> <span m='1423000'>you</span> <span
  m='1423110'>just</span> <span m='1423420'>paid</span> <span
  m='1423640'>attention</span> <span m='1424060'>to</span> <span
  m='1424180'>the</span> <span m='1424300'>formula,</span> <span
  m='1425120'>which</span> <span m='1425300'>is</span> <span
  m='1425380'>what</span> <span m='1425520'>we</span> <span
  m='1425620'>were</span> <span m='1425740'>doing</span> <span
  m='1426110'>when</span> <span m='1426240'>we</span> <span
  m='1426460'>integrated</span> <span m='1426930'>without</span> <span
  m='1427240'>thinking</span> <span m='1427570'>too</span> <span
  m='1427710'>hard</span> <span m='1427950'>about</span> <span
  m='1428280'>this,</span> <span m='1429240'>you</span> <span
  m='1429490'>get</span> <span m='1429670'>a</span> <span
  m='1429710'>number</span> <span m='1430100'>here</span> <span
  m='1430330'>but</span> <span m='1430500'>in</span> <span
  m='1430610'>fact</span> <span m='1430860'>that's</span> <span
  m='1431040'>wrong.</span> <span m='1431320'>Actually</span> <span
  m='1431720'>it's</span> <span m='1431860'>kind</span> <span
  m='1432050'>of</span> <span m='1432110'>an</span> <span
  m='1432180'>interesting</span> <span m='1432560'>number.</span> <span
  m='1432830'>It's</span> <span m='1433130'>halfway</span> <span
  m='1433610'>between</span> <span m='1434060'>the</span> <span
  m='1434160'>two,</span> <span m='1434910'>between</span> <span
  m='1435240'>0</span> <span m='1435550'>and 1.</span> <span
  m='1436380'>So</span> <span m='1436640'>again</span> <span
  m='1436980'>there's</span> <span m='1437180'>some</span> <span
  m='1437450'>sort</span> <span m='1437630'>of</span> <span
  m='1437770'>vague</span> <span m='1438130'>sense</span> <span
  m='1438505'>in</span> <span m='1438880'>which</span> <span
  m='1439240'>this</span> <span m='1439400'>is</span> <span
  m='1439570'>trying</span> <span m='1440170'>to</span> <span
  m='1440300'>be</span> <span m='1440970'>this</span> <span
  m='1441260'>answer.</span> <span m='1441966'>All</span> <span
  m='1442320'>right.</span> <span m='1444580'>It's</span> <span
  m='1444750'>not</span> <span m='1445000'>so</span> <span
  m='1445230'>bad</span> <span m='1445720'>but</span> <span
  m='1445960'>we're</span> <span m='1446080'>still</span> <span
  m='1446380'>going to</span> <span m='1446520'>put</span> <span
  m='1446730'>this</span> <span m='1446900'>in</span> <span m='1447070'>a</span>
  <span m='1447140'>red</span> <span m='1447380'>box.</span> <span
  m='1448744'>All</span> <span m='1449166'>right.</span> <span
  m='1450030'>because</span> <span m='1450290'>this</span> <span
  m='1450460'>is</span> <span m='1450820'>what</span> <span
  m='1451060'>we</span> <span m='1451160'>called</span> <span
  m='1451510'>divergence.</span> <span m='1452710'>So</span> <span
  m='1452860'>both</span> <span m='1453150'>of</span> <span
  m='1453230'>these</span> <span m='1454680'>cases</span> <span
  m='1455520'>are</span> <span m='1455620'>divergent.</span> <span
  m='1456130'>It</span> <span m='1456300'>only</span> <span
  m='1456560'>really</span> <span m='1456860'>works</span> <span
  m='1458330'>when</span> <span m='1458500'>alpha--</span> <span
  m='1458770'>when</span> <span m='1459110'>a is less than</span> <span
  m='1459260'>1.</span> <span m='1460490'>I'm</span> <span
  m='1460640'>going</span> <span m='1460775'>to</span> <span
  m='1460910'>add</span> <span m='1461360'>one</span> <span
  m='1461530'>more</span> <span m='1461830'>case</span> <span
  m='1462660'>just</span> <span m='1463480'>to</span> <span
  m='1463850'>see</span> <span m='1464740'>that</span> <span
  m='1465170'>mathematicians</span> <span m='1465920'>are</span> <span
  m='1466040'>slightly</span> <span m='1468550'>curious</span> <span
  m='1469160'>about</span> <span m='1469420'>what</span> <span
  m='1470040'>goes</span> <span m='1470370'>on</span> <span
  m='1470630'>in</span> <span m='1471550'>other</span> <span
  m='1471740'>cases.</span> </p><p><span m='1472020'>So</span> <span
  m='1472150'>this</span> <span m='1472320'>is</span> <span m='1472430'>1</span>
  <span m='1472640'>+</span> <span m='1472910'>2</span> <span
  m='1473190'>+</span> <span m='1473460'>2^2</span> <span m='1474630'>+</span>
  <span m='1474890'>2^3</span> <span m='1476300'>plus</span> <span
  m='1476940'>etc..</span> <span m='1477570'>And</span> <span
  m='1477990'>that</span> <span m='1478230'>should</span> <span
  m='1478430'>be</span> <span m='1478580'>equal</span> <span m='1479000'>to
  --</span> <span m='1479960'>according</span> <span m='1480310'>to</span> <span
  m='1480400'>this</span> <span m='1480580'>formula</span> <span
  m='1481440'>--</span> <span m='1481980'>1/(1-2).</span> <span
  m='1484750'>Which</span> <span m='1485030'>is</span> <span
  m='1485850'>-1.</span> <span m='1488242'>All</span> <span
  m='1488740'>right.</span> <span m='1489860'>Now</span> <span
  m='1490070'>this</span> <span m='1490410'>one</span> <span
  m='1490720'>is</span> <span m='1491080'>clearly</span> <span
  m='1491860'>wrong,</span> <span m='1492320'>right?</span> <span
  m='1493460'>This</span> <span m='1493690'>one</span> <span
  m='1494390'>is</span> <span m='1494710'>totally</span> <span
  m='1495250'>wrong.</span> <span m='1498170'>It</span> <span
  m='1498340'>certainly</span> <span m='1498730'>diverges.</span> <span
  m='1499465'>The</span> <span m='1501020'>left</span> <span
  m='1501270'>hand</span> <span m='1501400'>side</span> <span
  m='1501550'>is</span> <span m='1501630'>obviously</span> <span
  m='1502080'>infinite.</span> <span m='1502370'>The</span> <span
  m='1502780'>right</span> <span m='1502990'>hand</span> <span
  m='1503145'>side</span> <span m='1503300'>is</span> <span
  m='1503400'>way</span> <span m='1503560'>off.</span> <span
  m='1504070'>It's</span> <span m='1504230'>-1.</span> </p><p><span
  m='1505960'>On</span> <span m='1506260'>the</span> <span
  m='1506360'>other</span> <span m='1506550'>hand</span> <span
  m='1509190'>it</span> <span m='1509390'>turns</span> <span
  m='1509720'>out</span> <span m='1509900'>actually</span> <span
  m='1510350'>that</span> <span m='1510700'>mathematicians</span> <span
  m='1511330'>have</span> <span m='1511490'>ways</span> <span
  m='1511760'>of</span> <span m='1511840'>making</span> <span
  m='1512140'>sense</span> <span m='1512460'>out</span> <span
  m='1512580'>of</span> <span m='1512670'>these.</span> <span
  m='1513360'>In</span> <span m='1513540'>number</span> <span
  m='1513820'>theory</span> <span m='1514180'>there's</span> <span
  m='1514380'>a</span> <span m='1514440'>strange</span> <span
  m='1515000'>system</span> <span m='1515590'>where</span> <span
  m='1515810'>this</span> <span m='1515980'>is</span> <span
  m='1516110'>actually</span> <span m='1516530'>true.</span> <span
  m='1518160'>And</span> <span m='1519240'>what</span> <span
  m='1519370'>happens</span> <span m='1519780'>in</span> <span
  m='1519880'>that</span> <span m='1520350'>system</span> <span
  m='1521130'>is</span> <span m='1521530'>that</span> <span
  m='1521660'>what</span> <span m='1521800'>you</span> <span
  m='1521890'>have</span> <span m='1522070'>to</span> <span
  m='1522170'>throw</span> <span m='1522600'>out</span> <span
  m='1522960'>is</span> <span m='1523100'>the</span> <span
  m='1523230'>idea</span> <span m='1524030'>that</span> <span
  m='1524780'>0</span> <span m='1525260'>is</span> <span m='1525430'>less</span>
  <span m='1525740'>than</span> <span m='1525980'>1.</span> <span
  m='1527050'>There</span> <span m='1527450'>is</span> <span
  m='1527640'>no</span> <span m='1527760'>such</span> <span
  m='1528040'>thing</span> <span m='1528220'>as</span> <span
  m='1528340'>negative</span> <span m='1528660'>numbers.</span> <span
  m='1529980'>So</span> <span m='1530630'>this</span> <span
  m='1530870'>number</span> <span m='1531450'>exists.</span> <span
  m='1532090'>And</span> <span m='1532670'>it's</span> <span
  m='1533390'>the</span> <span m='1534350'>additive</span> <span
  m='1534760'>inverse</span> <span m='1535180'>of</span> <span
  m='1535280'>1.</span> <span m='1535700'>It</span> <span m='1535830'>has</span>
  <span m='1536080'>this</span> <span m='1536460'>arithmetic</span> <span
  m='1537040'>property</span> <span m='1537870'>but</span> <span
  m='1539010'>the</span> <span m='1539250'>statement</span> <span
  m='1539780'>that this is, that</span> <span m='1540970'>1</span> <span
  m='1541250'>is</span> <span m='1541370'>bigger</span> <span
  m='1541580'>than</span> <span m='1541740'>0</span> <span
  m='1541990'>does</span> <span m='1542170'>not</span> <span
  m='1542410'>make</span> <span m='1542620'>sense.</span> </p><p><span
  m='1543330'>So</span> <span m='1543530'>you</span> <span
  m='1543650'>have</span> <span m='1543820'>your</span> <span
  m='1543930'>choice,</span> <span m='1544420'>either</span> <span
  m='1544640'>this</span> <span m='1544930'>diverges</span> <span
  m='1545440'>or</span> <span m='1545530'>you</span> <span
  m='1545620'>have</span> <span m='1545740'>to</span> <span
  m='1545830'>throw</span> <span m='1546170'>out</span> <span
  m='1547190'>something</span> <span m='1547550'>like</span> <span
  m='1547770'>this.</span> <span m='1548630'>So</span> <span
  m='1548860'>that's</span> <span m='1549020'>a</span> <span
  m='1549100'>very</span> <span m='1549380'>curious</span> <span
  m='1550070'>thing</span> <span m='1550340'>in</span> <span
  m='1550430'>higher</span> <span m='1550730'>mathematics.</span> <span
  m='1551510'>Which</span> <span m='1552070'>if</span> <span
  m='1552360'>you</span> <span m='1552480'>get</span> <span
  m='1552700'>to</span> <span m='1552790'>number</span> <span
  m='1553040'>theory</span> <span m='1554070'>there's</span> <span
  m='1554930'>fun</span> <span m='1555270'>stuff</span> <span
  m='1555710'>there.</span> <span m='1556410'>All</span> <span
  m='1556760'>right.</span> <span m='1558920'>OK</span> <span
  m='1559560'>but</span> <span m='1559940'>for</span> <span
  m='1560100'>our</span> <span m='1560260'>purposes</span> <span
  m='1561010'>these</span> <span m='1561330'>things</span> <span
  m='1561530'>are</span> <span m='1561660'>all</span> <span
  m='1561950'>out.</span> <span m='1562740'>All</span> <span
  m='1562880'>right.</span> <span m='1563300'>They're</span> <span
  m='1563430'>gone.</span> <span m='1564010'>We're</span> <span
  m='1564350'>not</span> <span m='1564520'>considering</span> <span
  m='1565010'>them.</span> <span m='1565160'>Only</span> <span
  m='1565500'>a</span> <span m='1566190'>between</span> <span
  m='1567470'>-1</span> <span m='1567640'>and</span> <span m='1567750'>1.</span>
  <span m='1569550'>All</span> <span m='1569790'>right.</span> </p><p><span
  m='1573910'>Now</span> <span m='1576400'>I</span> <span
  m='1576520'>want</span> <span m='1576740'>to</span> <span
  m='1576800'>do</span> <span m='1576930'>something</span> <span
  m='1577330'>systematic.</span> <span m='1578190'>And</span> <span
  m='1578510'>it's</span> <span m='1578680'>more</span> <span
  m='1578940'>or</span> <span m='1579020'>less</span> <span
  m='1579350'>on</span> <span m='1579490'>the</span> <span
  m='1579560'>lines</span> <span m='1580070'>of</span> <span
  m='1580220'>the</span> <span m='1580320'>powers</span> <span
  m='1581530'>that</span> <span m='1581760'>I'm</span> <span
  m='1581870'>erasing</span> <span m='1582400'>right</span> <span
  m='1582680'>now.</span> <span m='1586630'>I</span> <span
  m='1586720'>want</span> <span m='1586910'>to</span> <span
  m='1586980'>tell</span> <span m='1587210'>you</span> <span
  m='1587320'>about</span> <span m='1587940'>series</span> <span
  m='1588360'>which</span> <span m='1588520'>are</span> <span
  m='1588590'>kind</span> <span m='1588800'>of</span> <span
  m='1588880'>borderline</span> <span m='1589550'>convergent.</span> <span
  m='1590420'>And</span> <span m='1590670'>then</span> <span
  m='1591020'>next</span> <span m='1591400'>time</span> <span
  m='1591730'>when</span> <span m='1591840'>we</span> <span
  m='1591950'>talk</span> <span m='1592250'>about</span> <span
  m='1592600'>powers</span> <span m='1593010'>series</span> <span
  m='1593580'>we'll</span> <span m='1593720'>come</span> <span
  m='1593930'>back</span> <span m='1594150'>to</span> <span
  m='1594280'>this</span> <span m='1594410'>very</span> <span
  m='1594760'>important</span> <span m='1595240'>series</span> <span
  m='1595600'>which</span> <span m='1595810'>is</span> <span
  m='1595910'>the</span> <span m='1596080'>most</span> <span
  m='1596370'>important</span> <span m='1596820'>one.</span> </p><p><span
  m='1600680'>So</span> <span m='1600820'>now</span> <span
  m='1601220'>let's</span> <span m='1601530'>talk</span> <span
  m='1601830'>about</span> <span m='1603210'>some</span> <span
  m='1603500'>series-- er,</span> <span m='1605550'>general</span> <span
  m='1605940'>notations.</span> <span m='1607400'>And</span> <span
  m='1607760'>this</span> <span m='1607910'>will</span> <span
  m='1608060'>help</span> <span m='1608330'>you</span> <span
  m='1608830'>with</span> <span m='1609080'>the</span> <span
  m='1609330'>last</span> <span m='1609780'>bit.</span> <span
  m='1613810'>This</span> <span m='1614030'>is</span> <span
  m='1614140'>going</span> <span m='1614260'>to</span> <span
  m='1614320'>be</span> <span m='1614420'>pretty</span> <span
  m='1614700'>much</span> <span m='1614970'>the</span> <span
  m='1615110'>same</span> <span m='1616390'>as</span> <span
  m='1616600'>what</span> <span m='1616760'>we</span> <span
  m='1616890'>did</span> <span m='1617210'>for</span> <span
  m='1618270'>improper</span> <span m='1618820'>integrals.</span> <span
  m='1620890'>Namely, first</span> <span m='1621200'>of</span> <span
  m='1621270'>all</span> <span m='1621390'>I'm</span> <span m='1621490'>going
  to</span> <span m='1621630'>have</span> <span m='1622360'>S_N</span> <span
  m='1624070'>which</span> <span m='1624320'>is</span> <span
  m='1624430'>the</span> <span m='1624560'>sum</span> <span
  m='1625810'>of</span> <span m='1626120'>a_n,</span> <span m='1627240'>n</span>
  <span m='1627460'>equals</span> <span m='1628000'>0</span> <span
  m='1628245'>to</span> <span m='1628490'>capital</span> <span
  m='1629000'>N.</span> <span m='1629760'>And</span> <span
  m='1630130'>this</span> <span m='1630260'>is</span> <span
  m='1630380'>what</span> <span m='1630610'>we're</span> <span
  m='1630730'>calling</span> <span m='1631130'>a</span> <span
  m='1631200'>partial</span> <span m='1631800'>sum.</span> </p><p><span
  m='1638050'>And</span> <span m='1638310'>then</span> <span
  m='1639590'>the</span> <span m='1639750'>full</span> <span
  m='1640180'>limit,</span> <span m='1641470'>which</span> <span
  m='1641640'>is</span> <span m='1641750'>capital</span> <span
  m='1642220'>S,</span> <span m='1642710'>if</span> <span m='1642955'>you</span>
  <span m='1643200'>like.</span> <span m='1643980'>a_n,</span> <span
  m='1644670'>n</span> <span m='1644940'>equals</span> <span
  m='1645310'>0</span> <span m='1645690'>to</span> <span
  m='1645770'>infinity,</span> <span m='1647120'>is</span> <span
  m='1647320'>just</span> <span m='1647670'>the</span> <span
  m='1647740'>limit</span> <span m='1649460'>as</span> <span
  m='1649660'>N</span> <span m='1649720'>goes</span> <span m='1649980'>to</span>
  <span m='1650130'>infinity</span> <span m='1651330'>of</span> <span
  m='1651460'>the</span> <span m='1651550'>S_N's.</span> <span
  m='1656240'>And</span> <span m='1656480'>then</span> <span
  m='1656620'>we</span> <span m='1656740'>have</span> <span
  m='1656930'>the</span> <span m='1657040'>same</span> <span
  m='1657450'>kind</span> <span m='1657670'>of</span> <span
  m='1657750'>notation</span> <span m='1658350'>that</span> <span
  m='1658450'>we</span> <span m='1658590'>had</span> <span
  m='1658880'>before.</span> <span m='1659770'>Which</span> <span
  m='1659940'>is</span> <span m='1660060'>there are</span> <span
  m='1660340'>these</span> <span m='1660570'>two</span> <span
  m='1660770'>choices</span> <span m='1662450'>which</span> <span
  m='1662860'>is</span> <span m='1663460'>that</span> <span
  m='1665020'>if</span> <span m='1665180'>the</span> <span
  m='1665250'>limit</span> <span m='1665510'>exists.</span> <span
  m='1670450'>That's</span> <span m='1670690'>the</span> <span
  m='1670790'>green</span> <span m='1671130'>choice.</span> <span
  m='1671830'>And</span> <span m='1671970'>we</span> <span
  m='1672070'>say</span> <span m='1672250'>it</span> <span
  m='1672430'>converges.</span> <span m='1674460'>So</span> <span
  m='1674630'>we</span> <span m='1674750'>say</span> <span
  m='1675130'>the</span> <span m='1679400'>series</span> <span
  m='1679820'>converges.</span> </p><p><span m='1680830'>And</span> <span
  m='1681060'>then</span> <span m='1681400'>the</span> <span
  m='1681540'>other</span> <span m='1681740'>case</span> <span
  m='1682610'>which</span> <span m='1682980'>is the</span> <span
  m='1683490'>limit</span> <span m='1685680'>does</span> <span
  m='1685880'>not</span> <span m='1686140'>exist.</span> <span
  m='1690900'>And</span> <span m='1691100'>we</span> <span
  m='1691190'>can</span> <span m='1691330'>say</span> <span
  m='1691530'>the</span> <span m='1691650'>series</span> <span
  m='1691980'>diverges.</span> <span m='1700560'>Question.</span> </p><p><span
  m='1702026'>AUDIENCE: [INAUDIBLE PHRASE]</span> </p><p><span
  m='1706480'>PROFESSOR: The</span> <span m='1706580'>question</span> <span
  m='1707050'>was</span> <span m='1707790'>how</span> <span
  m='1707950'>did</span> <span m='1708040'>I</span> <span m='1708140'>get</span>
  <span m='1708360'>to</span> <span m='1708480'>this?</span> <span
  m='1709290'>And</span> <span m='1709610'>I</span> <span
  m='1709750'>will</span> <span m='1709900'>do</span> <span
  m='1710010'>that</span> <span m='1710250'>next</span> <span
  m='1710560'>time</span> <span m='1711030'>but</span> <span
  m='1711220'>in</span> <span m='1711340'>fact</span> <span
  m='1711570'>of</span> <span m='1711640'>course</span> <span
  m='1711840'>you've</span> <span m='1711960'>seen</span> <span m='1712180'>it
  in</span> <span m='1712340'>high</span> <span m='1712530'>school.</span> <span
  m='1713240'>Right</span> <span m='1713740'>this</span> <span
  m='1714185'>is--</span> <span m='1714630'>Yeah.</span> <span
  m='1715930'>Yeah.</span> <span m='1716860'>We'll</span> <span
  m='1716990'>do</span> <span m='1717100'>that</span> <span
  m='1717290'>next</span> <span m='1717560'>time.</span> <span
  m='1720000'>The</span> <span m='1720110'>question</span> <span
  m='1720480'>was</span> <span m='1720970'>how</span> <span
  m='1721210'>did</span> <span m='1721360'>we</span> <span
  m='1721530'>arrive--</span> <span m='1722180'>sorry</span> <span
  m='1722460'>I</span> <span m='1722610'>didn't</span> <span
  m='1722850'>tell</span> <span m='1722990'>you</span> <span
  m='1723060'>the</span> <span m='1723150'>question.</span> <span
  m='1723430'>The</span> <span m='1723490'>question</span> <span
  m='1723740'>was</span> <span m='1723820'>how</span> <span
  m='1723930'>do</span> <span m='1724000'>we</span> <span
  m='1724080'>arrive</span> <span m='1724360'>at</span> <span
  m='1724480'>this</span> <span m='1724620'>formula</span> <span
  m='1724880'>on</span> <span m='1725000'>the</span> <span
  m='1725060'>right</span> <span m='1725240'>hand</span> <span
  m='1725430'>side</span> <span m='1725816'>here.</span> <span
  m='1726590'>But</span> <span m='1727010'>we'll</span> <span
  m='1727170'>talk</span> <span m='1727390'>about</span> <span
  m='1727610'>that</span> <span m='1727770'>next</span> <span
  m='1728020'>time.</span> <span m='1733060'>All</span> <span
  m='1733300'>right.</span> </p><p><span m='1734020'>So</span> <span
  m='1734220'>here's</span> <span m='1734640'>the</span> <span
  m='1735360'>basic</span> <span m='1738220'>definition</span> <span
  m='1739540'>and</span> <span m='1739770'>what</span> <span
  m='1739930'>we're</span> <span m='1740030'>going to</span> <span
  m='1740170'>recognize</span> <span m='1740740'>about</span> <span
  m='1741080'>series.</span> <span m='1742430'>And</span> <span
  m='1745170'>I'm</span> <span m='1745410'>going</span> <span
  m='1745472'>to</span> <span m='1745535'>give</span> <span
  m='1745597'>you</span> <span m='1745660'>a</span> <span m='1745740'>few</span>
  <span m='1745940'>examples</span> <span m='1746990'>and</span> <span
  m='1747320'>then</span> <span m='1747430'>we'll</span> <span
  m='1747530'>do</span> <span m='1747690'>something</span> <span
  m='1748110'>systematic.</span> </p><p><span m='1752070'>So</span> <span
  m='1752190'>the</span> <span m='1752280'>first</span> <span
  m='1752610'>example--</span> <span m='1753750'>well</span> <span
  m='1753950'>the</span> <span m='1754030'>first</span> <span
  m='1754220'>example</span> <span m='1754495'>is</span> <span
  m='1754770'>the</span> <span m='1754860'>geometric</span> <span
  m='1755380'>series.</span> <span m='1756290'>But</span> <span
  m='1756960'>the</span> <span m='1757110'>first</span> <span
  m='1757330'>example</span> <span m='1757730'>that</span> <span
  m='1757840'>I'm</span> <span m='1757970'>going</span> <span
  m='1758120'>to</span> <span m='1758190'>discuss</span> <span
  m='1759100'>now</span> <span m='1759430'>and</span> <span
  m='1759610'>in</span> <span m='1759730'>a</span> <span
  m='1759780'>little</span> <span m='1759990'>bit</span> <span
  m='1760110'>of</span> <span m='1760210'>detail</span> <span
  m='1761070'>is</span> <span m='1761300'>this</span> <span
  m='1761450'>sum</span> <span m='1761840'>1/n^2,</span> <span m='1763390'>n
  equals</span> <span m='1763830'>1</span> <span m='1764030'>to</span> <span
  m='1764180'>infinity.</span> <span m='1768580'>It</span> <span
  m='1768900'>turns</span> <span m='1769290'>out</span> <span
  m='1770390'>that</span> <span m='1770810'>this</span> <span
  m='1771630'>series</span> <span m='1772530'>is</span> <span
  m='1772930'>very</span> <span m='1773410'>analogous --</span> <span
  m='1774050'>and</span> <span m='1774150'>we'll</span> <span
  m='1774560'>develop</span> <span m='1775060'>this</span> <span
  m='1775200'>analogy</span> <span m='1775650'>carefully</span> <span
  m='1776610'>-- the</span> <span m='1777680'>integral</span> <span
  m='1778380'>from</span> <span m='1778640'>1</span> <span m='1778790'>to</span>
  <span m='1778890'>x,</span> <span m='1779480'>dx / x^2.</span> <span
  m='1781065'>And</span> <span m='1781400'>we're</span> <span
  m='1781650'>going</span> <span m='1781840'>to</span> <span
  m='1781930'>develop</span> <span m='1782430'>this</span> <span
  m='1782610'>analogy</span> <span m='1784970'>in</span> <span
  m='1785150'>detail</span> <span m='1785880'>later</span> <span
  m='1786220'>in</span> <span m='1786300'>this</span> <span
  m='1786470'>lecture.</span> <span m='1787920'>And</span> <span
  m='1788330'>this</span> <span m='1788530'>one</span> <span
  m='1788880'>is</span> <span m='1789070'>one</span> <span m='1789270'>of</span>
  <span m='1789340'>the</span> <span m='1789410'>ones--</span> <span
  m='1789770'>so</span> <span m='1789980'>now</span> <span
  m='1790110'>you</span> <span m='1790210'>have</span> <span
  m='1790350'>to</span> <span m='1790440'>go</span> <span
  m='1790610'>back</span> <span m='1790980'>and</span> <span
  m='1791080'>actually</span> <span m='1791400'>remember,</span> <span
  m='1791890'>this</span> <span m='1792080'>is</span> <span
  m='1792240'>one</span> <span m='1792410'>of</span> <span
  m='1792470'>the</span> <span m='1792530'>ones</span> <span
  m='1792720'>you</span> <span m='1792840'>really</span> <span
  m='1793180'>want</span> <span m='1793370'>to</span> <span
  m='1793430'>memorize.</span> <span m='1794510'>And</span> <span
  m='1794760'>you</span> <span m='1794840'>should</span> <span
  m='1794980'>especially</span> <span m='1795530'>pay</span> <span
  m='1795680'>attention</span> <span m='1796040'>to</span> <span
  m='1796110'>the</span> <span m='1796200'>ones</span> <span
  m='1796460'>with</span> <span m='1796630'>an</span> <span
  m='1796720'>infinity</span> <span m='1797270'>in</span> <span
  m='1797410'>them.</span> <span m='1798570'>This</span> <span
  m='1798730'>one</span> <span m='1798890'>is</span> <span
  m='1798990'>convergent.</span> <span m='1803270'>And</span> <span
  m='1803410'>this</span> <span m='1803580'>series is</span> <span
  m='1804060'>convergent.</span> <span m='1804520'>Now</span> <span
  m='1805790'>it</span> <span m='1805940'>turns</span> <span
  m='1806310'>out</span> <span m='1806980'>that</span> <span
  m='1807250'>evaluating</span> <span m='1808150'>this</span> <span
  m='1808600'>is</span> <span m='1808950'>very</span> <span
  m='1809390'>easy.</span> <span m='1811070'>This</span> <span
  m='1811250'>is</span> <span m='1811480'>1.</span> <span
  m='1812820'>It's</span> <span m='1813310'>easy</span> <span
  m='1813550'>to</span> <span m='1813620'>calculate.</span> <span
  m='1815310'>Evaluating</span> <span m='1815920'>this</span> <span
  m='1816230'>is</span> <span m='1816650'>very</span> <span
  m='1817120'>tricky.</span> <span m='1819500'>And</span> <span
  m='1819940'>Euler</span> <span m='1820590'>did</span> <span
  m='1820850'>it.</span> <span m='1821610'>And</span> <span
  m='1821940'>the</span> <span m='1822160'>answer</span> <span
  m='1822670'>is</span> <span m='1823770'>pi^2 /</span> <span
  m='1823960'>6.</span> <span m='1826440'>That's an</span> <span
  m='1826890'>amazing</span> <span m='1827580'>calculation.</span> <span
  m='1829050'>And</span> <span m='1829210'>it</span> <span
  m='1829270'>was</span> <span m='1829400'>done</span> <span
  m='1829600'>very</span> <span m='1829880'>early</span> <span
  m='1830540'>in</span> <span m='1830895'>the</span> <span
  m='1831250'>history</span> <span m='1831660'>of</span> <span
  m='1831730'>mathematics.</span> <span m='1833570'>If</span> <span
  m='1833760'>you</span> <span m='1833890'>look</span> <span
  m='1834530'>at</span> <span m='1835010'>another</span> <span
  m='1835500'>example--</span> <span m='1836450'>so</span> <span
  m='1836660'>maybe</span> <span m='1836980'>example</span> <span
  m='1837400'>two</span> <span m='1837580'>here,</span> <span
  m='1838110'>if</span> <span m='1838260'>you</span> <span
  m='1838370'>look</span> <span m='1838590'>at</span> <span
  m='1840800'>1/n^3,</span> <span m='1842300'>n</span> <span
  m='1842450'>equals--</span> <span m='1842850'>well</span> <span
  m='1843030'>you</span> <span m='1843160'>can't</span> <span
  m='1843540'>start</span> <span m='1844040'>here</span> <span
  m='1844630'>at</span> <span m='1844990'>0</span> <span m='1845790'>by</span>
  <span m='1845910'>the</span> <span m='1846010'>way.</span> <span
  m='1846580'>I</span> <span m='1846730'>get</span> <span m='1846880'>to</span>
  <span m='1846970'>start</span> <span m='1847240'>wherever</span> <span
  m='1847510'>I</span> <span m='1847590'>want</span> <span m='1848150'>in</span>
  <span m='1848300'>these</span> <span m='1848420'>series.</span> <span
  m='1848930'>Here</span> <span m='1849200'>I</span> <span
  m='1849280'>start</span> <span m='1849530'>with</span> <span
  m='1849750'>0.</span> <span m='1849920'>Here</span> <span m='1850100'>I</span>
  <span m='1850180'>started</span> <span m='1850510'>with</span> <span
  m='1850680'>1.</span> </p><p><span m='1851220'>And</span> <span
  m='1851550'>notice</span> <span m='1851860'>the</span> <span
  m='1851950'>reason</span> <span m='1852300'>why I started--</span> <span
  m='1852880'>it</span> <span m='1852980'>was</span> <span m='1853175'>a</span>
  <span m='1853370'>bad</span> <span m='1853680'>idea</span> <span
  m='1853940'>to</span> <span m='1854030'>start</span> <span
  m='1854300'>with</span> <span m='1854420'>0</span> <span
  m='1855340'>was</span> <span m='1855670'>that</span> <span
  m='1855800'>1</span> <span m='1856010'>over</span> <span m='1856190'>0</span>
  <span m='1856650'>is</span> <span m='1856970'>undefined.</span> <span
  m='1858130'>Right?</span> <span m='1858360'>So</span> <span
  m='1858470'>I'm</span> <span m='1858560'>just</span> <span
  m='1858740'>starting</span> <span m='1859070'>where</span> <span
  m='1859200'>it's</span> <span m='1859340'>convenient</span> <span
  m='1859840'>for</span> <span m='1860010'>me.</span> <span
  m='1860430'>And</span> <span m='1860720'>since</span> <span
  m='1860920'>I'm</span> <span m='1861120'>interested</span> <span
  m='1861580'>mostly</span> <span m='1862040'>in</span> <span
  m='1862130'>the</span> <span m='1862220'>tail</span> <span
  m='1862790'>behavior</span> <span m='1863560'>it</span> <span
  m='1863800'>doesn't</span> <span m='1864080'>matter</span> <span
  m='1864380'>to</span> <span m='1864520'>me</span> <span m='1864620'>so</span>
  <span m='1864850'>much</span> <span m='1865160'>where</span> <span
  m='1865380'>I</span> <span m='1865480'>start.</span> <span
  m='1866150'>Although</span> <span m='1866320'>if</span> <span
  m='1866410'>I</span> <span m='1866490'>want</span> <span m='1866740'>an</span>
  <span m='1866800'>exact</span> <span m='1867340'>answer</span> <span
  m='1867800'>I</span> <span m='1867870'>need</span> <span m='1868050'>to</span>
  <span m='1868120'>start</span> <span m='1868370'>exactly</span> <span
  m='1868890'>at</span> <span m='1868980'>n</span> <span m='1869200'>=</span>
  <span m='1869420'>1.</span> <span m='1870165'>All</span> <span
  m='1870620'>right.</span> <span m='1870890'>This</span> <span
  m='1871170'>one</span> <span m='1872320'>is</span> <span
  m='1872600'>similar</span> <span m='1873600'>to</span> <span
  m='1875390'>this</span> <span m='1876020'>integral</span> <span
  m='1876510'>here.</span> <span m='1877932'>All</span> <span
  m='1878390'>right.</span> <span m='1878700'>Which</span> <span
  m='1878880'>is</span> <span m='1879090'>convergent</span> <span
  m='1879700'>again.</span> <span m='1880440'>So</span> <span
  m='1880590'>there's</span> <span m='1880770'>a</span> <span
  m='1880820'>number</span> <span m='1881200'>that</span> <span
  m='1881310'>you</span> <span m='1881670'>get.</span> <span
  m='1882390'>And</span> <span m='1883570'>let's</span> <span
  m='1883790'>see</span> <span m='1885290'>what</span> <span
  m='1885410'>is</span> <span m='1885530'>it</span> <span
  m='1885620'>something</span> <span m='1885830'>like</span> <span
  m='1886170'>2/3</span> <span m='1886740'>or</span> <span
  m='1886840'>something</span> <span m='1887180'>like</span> <span
  m='1887390'>that, all right,</span> <span m='1888370'>for</span> <span
  m='1888470'>this</span> <span m='1889220'>for</span> <span
  m='1889330'>this</span> <span m='1889500'>number.</span> <span
  m='1890190'>Or</span> <span m='1890650'>1/3.</span> <span
  m='1892440'>What</span> <span m='1892640'>is</span> <span
  m='1892930'>it?</span> <span m='1893110'>No</span> <span
  m='1893303'>1/2.</span> <span m='1893690'>I</span> <span
  m='1893790'>guess</span> <span m='1893960'>it's</span> <span
  m='1894000'>1/2.</span> <span m='1895000'>This</span> <span
  m='1895200'>one</span> <span m='1895320'>is</span> <span
  m='1895355'>1/2.</span> <span m='1897110'>You</span> <span
  m='1897250'>check</span> <span m='1897560'>that,</span> <span
  m='1897780'>I'm</span> <span m='1897900'>not</span> <span
  m='1898230'>positive,</span> <span m='1898780'>but</span> <span
  m='1898900'>anyway</span> <span m='1899190'>just</span> <span
  m='1899430'>doing</span> <span m='1899630'>it</span> <span
  m='1899700'>in</span> <span m='1899790'>my</span> <span
  m='1899910'>head</span> <span m='1900210'>quickly</span> <span
  m='1900600'>it</span> <span m='1900700'>seems</span> <span
  m='1900980'>to</span> <span m='1901080'>be</span> <span
  m='1901200'>1/2.</span> <span m='1902150'>Anyway</span> <span
  m='1902440'>it's</span> <span m='1902570'>an</span> <span
  m='1902740'>easy</span> <span m='1903140'>number</span> <span
  m='1903270'>to</span> <span m='1903330'>calculate.</span> </p><p><span
  m='1904100'>This</span> <span m='1904430'>one</span> <span
  m='1904640'>over</span> <span m='1904890'>here</span> <span
  m='1906490'>stumped</span> <span m='1906860'>mathematicians</span> <span
  m='1908940'>basically</span> <span m='1909710'>for</span> <span
  m='1909910'>all</span> <span m='1910160'>time.</span> <span
  m='1911870'>It</span> <span m='1912010'>doesn't</span> <span
  m='1912290'>have</span> <span m='1912860'>any</span> <span
  m='1913120'>kind</span> <span m='1913370'>of</span> <span
  m='1913570'>elementary</span> <span m='1914060'>form</span> <span
  m='1914370'>like</span> <span m='1914590'>this.</span> <span
  m='1916250'>And</span> <span m='1916490'>it</span> <span
  m='1916620'>was</span> <span m='1916810'>only</span> <span
  m='1917110'>very</span> <span m='1917520'>recently</span> <span
  m='1917980'>proved</span> <span m='1918310'>to</span> <span
  m='1918400'>be</span> <span m='1918520'>rational.</span> <span
  m='1919910'>People</span> <span m='1920180'>couldn't</span> <span
  m='1920660'>even</span> <span m='1920810'>couldn't</span> <span
  m='1921040'>even</span> <span m='1921170'>decide</span> <span
  m='1921550'>whether</span> <span m='1921750'>this</span> <span
  m='1921920'>was</span> <span m='1922050'>a</span> <span
  m='1922110'>rational</span> <span m='1922570'>number</span> <span
  m='1923030'>or</span> <span m='1923253'>not.</span> <span
  m='1925260'>But</span> <span m='1925440'>anyway</span> <span
  m='1925700'>that's</span> <span m='1925970'>been</span> <span
  m='1926130'>resolved;</span> <span m='1926580'>it</span> <span
  m='1926660'>is</span> <span m='1926840'>an</span> <span
  m='1926940'>irrational</span> <span m='1927050'>number</span> <span
  m='1927830'>which</span> <span m='1927970'>is</span> <span
  m='1928060'>what</span> <span m='1928250'>people</span> <span
  m='1928530'>suspected.</span> <span m='1929540'>Yeah</span> <span
  m='1930100'>question.</span> </p><p><span m='1930650'>AUDIENCE: [INAUDIBLE
  PHRASE]</span> </p><p><span m='1934360'>PROFESSOR: Yeah</span> <span
  m='1935070'>sorry.</span> <span m='1936350'>OK.</span> <span
  m='1939820'>I</span> <span m='1940050'>violated</span> <span
  m='1943600'>a</span> <span m='1943890'>rule</span> <span m='1944045'>of</span>
  <span m='1944200'>mathematics--</span> <span m='1945070'>you</span> <span
  m='1945220'>said</span> <span m='1945440'>why</span> <span
  m='1945690'>is</span> <span m='1945820'>this</span> <span
  m='1945920'>similar?</span> <span m='1946720'>I</span> <span
  m='1946910'>thought</span> <span m='1947270'>that</span> <span
  m='1947560'>similar</span> <span m='1948020'>was</span> <span
  m='1948200'>something</span> <span m='1948530'>else.</span> <span
  m='1949140'>And</span> <span m='1949390'>you're</span> <span
  m='1949520'>absolutely</span> <span m='1949970'>right.</span> <span
  m='1950380'>And</span> <span m='1950520'>I</span> <span
  m='1950580'>violated</span> <span m='1950890'>a</span> <span
  m='1951200'>rule</span> <span m='1951670'>of</span> <span
  m='1952510'>mathematics.</span> <span m='1953520'>Which</span> <span
  m='1953860'>is</span> <span m='1954020'>that</span> <span m='1954065'>I</span>
  <span m='1954110'>used</span> <span m='1954860'>this</span> <span
  m='1955100'>symbol</span> <span m='1955960'>for</span> <span
  m='1956930'>two</span> <span m='1957180'>different</span> <span
  m='1957560'>things.</span> <span m='1961210'>I</span> <span
  m='1961330'>should</span> <span m='1961540'>have</span> <span
  m='1961710'>written</span> <span m='1962020'>this</span> <span
  m='1962160'>symbol</span> <span m='1962500'>here.</span> <span
  m='1962820'>All</span> <span m='1962997'>right.</span> <span
  m='1963530'>I'll</span> <span m='1963760'>create</span> <span
  m='1964080'>a</span> <span m='1964110'>new</span> <span
  m='1964260'>symbol</span> <span m='1964610'>here.</span> <span
  m='1965260'>The</span> <span m='1965430'>question</span> <span
  m='1965940'>of</span> <span m='1966020'>whether</span> <span
  m='1966270'>this</span> <span m='1966490'>converges</span> <span
  m='1967390'>or</span> <span m='1967630'>this</span> <span
  m='1967900'>converges.</span> <span m='1968920'>These</span> <span
  m='1969180'>are</span> <span m='1969310'>the</span> <span
  m='1970120'>the</span> <span m='1970290'>same</span> <span
  m='1970720'>type</span> <span m='1971020'>of</span> <span
  m='1971120'>question.</span> <span m='1971920'>And</span> <span
  m='1972120'>we'll</span> <span m='1972300'>see</span> <span
  m='1972570'>why</span> <span m='1972890'>they're</span> <span
  m='1972990'>the</span> <span m='1973060'>same</span> <span
  m='1973380'>question</span> <span m='1973980'>it</span> <span
  m='1974090'>in</span> <span m='1974230'>a</span> <span m='1974270'>few</span>
  <span m='1974460'>minutes.</span> <span m='1975000'>But</span> <span
  m='1975240'>in</span> <span m='1975340'>fact</span> <span
  m='1975950'>the</span> <span m='1976630'>wiggle</span> <span
  m='1977140'>I</span> <span m='1977250'>used,</span> <span
  m='1977590'>"similar",</span> <span m='1978190'>I</span> <span
  m='1978280'>used</span> <span m='1979590'>for</span> <span
  m='1979710'>the</span> <span m='1979780'>connection</span> <span
  m='1980140'>between</span> <span m='1980440'>functions.</span> <span
  m='1982360'>The</span> <span m='1982510'>things</span> <span
  m='1982780'>that</span> <span m='1982890'>are</span> <span
  m='1982950'>really</span> <span m='1983230'>similar</span> <span
  m='1983690'>are</span> <span m='1983890'>that</span> <span
  m='1984580'>1/n</span> <span m='1985240'>resembles</span> <span
  m='1989070'>1/x^2.</span> <span m='1990230'>So</span> <span
  m='1990420'>I</span> <span m='1990530'>apologize</span> <span
  m='1991290'>I</span> <span m='1991700'>didn't--</span> </p><p><span
  m='1992790'>AUDIENCE: [INAUDIBLE PHRASE]</span> </p><p><span
  m='1995890'>PROFESSOR: Oh</span> <span m='1996270'>you</span> <span
  m='1996380'>thought</span> <span m='1997450'>that</span> <span
  m='1997670'>this</span> <span m='1997890'>was</span> <span
  m='1998040'>the</span> <span m='1998140'>definition</span> <span
  m='1998690'>of</span> <span m='1998790'>that.</span> <span
  m='1999290'>That's</span> <span m='1999550'>actually</span> <span
  m='1999950'>the</span> <span m='2000040'>reason</span> <span
  m='2000410'>why</span> <span m='2000570'>these</span> <span
  m='2000700'>things</span> <span m='2000950'>correspond</span> <span
  m='2001460'>so</span> <span m='2001580'>closely.</span> <span
  m='2001990'>That</span> <span m='2002160'>is</span> <span
  m='2002320'>that</span> <span m='2003010'>the</span> <span
  m='2003170'>Riemann</span> <span m='2003650'>sum</span> <span
  m='2004230'>is</span> <span m='2004450'>close</span> <span
  m='2004850'>to</span> <span m='2004960'>this.</span> <span
  m='2005560'>But</span> <span m='2005800'>that</span> <span
  m='2005930'>doesn't</span> <span m='2006130'>mean</span> <span
  m='2006250'>they're</span> <span m='2006370'>equal.</span> <span
  m='2007520'>The</span> <span m='2007740'>Riemann</span> <span
  m='2008090'>sum</span> <span m='2008210'>only</span> <span
  m='2008530'>works</span> <span m='2008860'>when</span> <span
  m='2009030'>the</span> <span m='2009120'>delta</span> <span
  m='2009410'>x</span> <span m='2009700'>goes</span> <span m='2010000'>to</span>
  <span m='2010100'>0.</span> <span m='2011950'>The</span> <span
  m='2012070'>way</span> <span m='2012250'>that</span> <span
  m='2012340'>we're</span> <span m='2012460'>going to</span> <span
  m='2012600'>get</span> <span m='2012720'>a</span> <span
  m='2012760'>connection</span> <span m='2013210'>between</span> <span
  m='2013520'>these</span> <span m='2013700'>two,</span> <span
  m='2013870'>as</span> <span m='2014050'>we</span> <span
  m='2014160'>will</span> <span m='2014390'>just</span> <span
  m='2014610'>a</span> <span m='2014660'>second,</span> <span
  m='2015080'>is</span> <span m='2015480'>with</span> <span m='2016250'>a</span>
  <span m='2016380'>Riemann</span> <span m='2016790'>sum</span> <span
  m='2017080'>with--</span> <span m='2018490'>What</span> <span
  m='2018710'>we're</span> <span m='2018810'>going to</span> <span
  m='2019220'>use</span> <span m='2020470'>is</span> <span m='2020680'>a</span>
  <span m='2020825'>Riemann</span> <span m='2020970'>sum</span> <span
  m='2024180'>with</span> <span m='2024780'>delta</span> <span
  m='2024960'>x</span> <span m='2025250'>=</span> <span m='2025540'>1.</span>
  <span m='2027180'>All</span> <span m='2027590'>right</span> <span
  m='2028000'>and</span> <span m='2028130'>then</span> <span
  m='2028340'>that</span> <span m='2028520'>will</span> <span
  m='2028720'>be</span> <span m='2028840'>the</span> <span
  m='2028940'>connection</span> <span m='2029410'>between. All</span> <span
  m='2030240'>right</span> <span m='2030450'>that's</span> <span
  m='2030640'>absolutely</span> <span m='2031100'>right.</span> <span
  m='2033480'>All</span> <span m='2033610'>right.</span> </p><p><span
  m='2037020'>So</span> <span m='2037280'>in</span> <span
  m='2037400'>order</span> <span m='2037670'>to</span> <span
  m='2037810'>illustrate</span> <span m='2038450'>exactly</span> <span
  m='2038940'>this</span> <span m='2039140'>idea</span> <span
  m='2040280'>that</span> <span m='2040400'>you've</span> <span
  m='2040520'>just</span> <span m='2040800'>come</span> <span
  m='2041020'>up</span> <span m='2041180'>with,</span> <span
  m='2041520'>and</span> <span m='2041650'>in</span> <span
  m='2041740'>fact</span> <span m='2042110'>that</span> <span
  m='2042210'>we're</span> <span m='2042330'>going</span> <span
  m='2042580'>to</span> <span m='2042690'>use,</span> <span
  m='2043110'>we'll</span> <span m='2043520'>do</span> <span
  m='2043670'>the</span> <span m='2043840'>same</span> <span
  m='2044200'>thing</span> <span m='2044490'>but</span> <span
  m='2044640'>we're</span> <span m='2044730'>going to</span> <span
  m='2044910'>do</span> <span m='2045080'>it</span> <span m='2045270'>on</span>
  <span m='2045820'>the</span> <span m='2046150'>example</span> <span
  m='2046990'>sum</span> <span m='2047510'>1/n.</span> <span
  m='2053380'>So</span> <span m='2053470'>here's</span> <span
  m='2053710'>Example</span> <span m='2054230'>3</span> <span
  m='2056940'>and</span> <span m='2057180'>it's</span> <span
  m='2057310'>going</span> <span m='2057510'>to</span> <span
  m='2057570'>be</span> <span m='2058030'>sum</span> <span
  m='2059130'>1/n,</span> <span m='2060170'>n</span> <span
  m='2060630'>equals</span> <span m='2060775'>1</span> <span
  m='2060920'>to</span> <span m='2061080'>infinity.</span> <span
  m='2064090'>And</span> <span m='2064440'>what</span> <span
  m='2064560'>we're</span> <span m='2064680'>now</span> <span
  m='2064970'>going</span> <span m='2065190'>to</span> <span
  m='2065280'>see</span> <span m='2066240'>is</span> <span
  m='2067040'>that</span> <span m='2067210'>it</span> <span
  m='2067320'>corresponds</span> <span m='2068290'>to</span> <span
  m='2068420'>this</span> <span m='2068790'>integral</span> <span
  m='2069090'>here.</span> <span m='2072620'>And</span> <span
  m='2072840'>we're</span> <span m='2072960'>going</span> <span
  m='2073210'>to</span> <span m='2073620'>show</span> <span
  m='2074370'>therefore</span> <span m='2074850'>that this</span> <span
  m='2074960'>thing</span> <span m='2075360'>diverges.</span> <span
  m='2077870'>But</span> <span m='2078080'>we're</span> <span
  m='2078210'>going</span> <span m='2078410'>to</span> <span m='2078490'>do
  this</span> <span m='2079410'>more</span> <span m='2079690'>carefully.</span>
  <span m='2080300'>We're</span> <span m='2080400'>going</span> <span
  m='2080520'>to</span> <span m='2080600'>do</span> <span
  m='2080730'>this</span> <span m='2081850'>in</span> <span
  m='2081990'>some</span> <span m='2082290'>detail</span> <span
  m='2082750'>so</span> <span m='2082900'>that</span> <span
  m='2083000'>you</span> <span m='2083100'>see</span> <span m='2083340'>what it
  is, that</span> <span m='2084410'>the</span> <span
  m='2084520'>correspondence</span> <span m='2085540'>is</span> <span
  m='2085880'>between</span> <span m='2086460'>these</span> <span
  m='2086780'>quantities.</span> <span m='2087390'>And</span> <span
  m='2087600'>the</span> <span m='2087690'>same</span> <span
  m='2088020'>sort</span> <span m='2088230'>of</span> <span
  m='2088310'>reasoning</span> <span m='2088860'>applies</span> <span
  m='2089890'>to</span> <span m='2090030'>these</span> <span
  m='2090290'>other</span> <span m='2090900'>examples.</span> </p><p><span
  m='2095820'>So</span> <span m='2096020'>here</span> <span
  m='2096210'>we</span> <span m='2096360'>go.</span> <span
  m='2099180'>I'm</span> <span m='2099430'>going</span> <span
  m='2099550'>to</span> <span m='2099630'>take</span> <span
  m='2100670'>the</span> <span m='2101490'>integral</span> <span
  m='2103740'>and</span> <span m='2104050'>draw</span> <span
  m='2104290'>the</span> <span m='2104370'>picture</span> <span
  m='2105340'>of</span> <span m='2105510'>the</span> <span
  m='2105600'>Riemann</span> <span m='2106270'>sum.</span> <span
  m='2107220'>So</span> <span m='2107350'>here's</span> <span
  m='2107600'>the</span> <span m='2107690'>level</span> <span
  m='2107990'>1</span> <span m='2109750'>and</span> <span
  m='2109920'>here's</span> <span m='2110170'>the</span> <span
  m='2110270'>function</span> <span m='2110840'>y</span> <span
  m='2111200'>=</span> <span m='2111490'>1/x.</span> <span
  m='2113840'>And</span> <span m='2114360'>I'm</span> <span
  m='2114450'>going</span> <span m='2114590'>to</span> <span
  m='2114650'>take</span> <span m='2114970'>the</span> <span
  m='2115100'>Riemann</span> <span m='2115230'>sum.</span> <span
  m='2121980'>With</span> <span m='2122790'>delta</span> <span
  m='2123150'>x</span> <span m='2124070'>=</span> <span m='2124490'>1.</span>
  <span m='2125200'>And</span> <span m='2125360'>that's</span> <span
  m='2125570'>going</span> <span m='2125780'>to</span> <span
  m='2125860'>be</span> <span m='2126000'>closely</span> <span
  m='2126520'>connected</span> <span m='2126970'>to</span> <span
  m='2127070'>the</span> <span m='2127190'>series</span> <span
  m='2128820'>that</span> <span m='2129040'>I</span> <span
  m='2129140'>have.</span> <span m='2132160'>But</span> <span
  m='2132400'>now</span> <span m='2132900'>I</span> <span
  m='2133030'>have</span> <span m='2133260'>to</span> <span
  m='2133380'>decide</span> <span m='2134480'>whether</span> <span
  m='2134720'>I</span> <span m='2134830'>want a</span> <span
  m='2135140'>lower</span> <span m='2135510'>Riemann</span> <span
  m='2135670'>sum</span> <span m='2136350'>or</span> <span m='2136500'>an</span>
  <span m='2136620'>upper</span> <span m='2136870'>Riemann</span> <span
  m='2137340'>sum.</span> <span m='2137820'>And</span> <span
  m='2138060'>actually</span> <span m='2138390'>I'm</span> <span
  m='2138510'>going to</span> <span m='2138670'>check</span> <span
  m='2139000'>both</span> <span m='2139380'>of</span> <span
  m='2139470'>them</span> <span m='2139630'>because</span> <span
  m='2139920'>both</span> <span m='2140180'>of</span> <span
  m='2140290'>them</span> <span m='2140430'>are</span> <span
  m='2140730'>illuminating.</span> </p><p><span m='2144620'>First</span> <span
  m='2145010'>we'll</span> <span m='2145110'>do</span> <span
  m='2145230'>the</span> <span m='2145420'>upper</span> <span
  m='2145730'>Riemann's</span> <span m='2146045'>sum.</span> <span
  m='2147000'>Now</span> <span m='2147120'>that's</span> <span
  m='2147390'>this</span> <span m='2147520'>staircase</span> <span
  m='2148340'>here.</span> <span m='2151780'>So</span> <span
  m='2152020'>we'll</span> <span m='2152160'>call</span> <span
  m='2152410'>this</span> <span m='2153220'>the</span> <span
  m='2153390'>upper</span> <span m='2153640'>Riemann's</span> <span
  m='2154140'>sum.</span> <span m='2158130'>And</span> <span
  m='2158550'>let's</span> <span m='2158750'>check</span> <span
  m='2158990'>what</span> <span m='2159110'>its</span> <span
  m='2159240'>levels</span> <span m='2159560'>are.</span> <span
  m='2159710'>This</span> <span m='2159870'>is</span> <span
  m='2160000'>not</span> <span m='2160320'>to</span> <span
  m='2160440'>scale.</span> <span m='2161560'>This</span> <span
  m='2161790'>level</span> <span m='2162060'>should</span> <span
  m='2162270'>be</span> <span m='2162450'>1/2.</span> <span
  m='2163250'>So</span> <span m='2163330'>if</span> <span
  m='2163410'>this</span> <span m='2163540'>is</span> <span m='2163670'>1</span>
  <span m='2163870'>and</span> <span m='2163980'>this</span> <span
  m='2164090'>is</span> <span m='2164230'>2</span> <span m='2164850'>and</span>
  <span m='2164950'>that</span> <span m='2165190'>level</span> <span
  m='2165245'>was</span> <span m='2165300'>supposed</span> <span
  m='2165540'>to</span> <span m='2165610'>be</span> <span m='2165690'>1/2</span>
  <span m='2166300'>and</span> <span m='2166480'>this</span> <span
  m='2166600'>next</span> <span m='2166940'>level</span> <span
  m='2167470'>should</span> <span m='2167710'>be</span> <span
  m='2167840'>1/3.</span> <span m='2170340'>That's</span> <span
  m='2170580'>how</span> <span m='2170740'>the</span> <span
  m='2171240'>Riemann</span> <span m='2171380'>sums</span> <span
  m='2171950'>are</span> <span m='2172020'>working</span> <span
  m='2172390'>out.</span> </p><p><span m='2177040'>And</span> <span
  m='2177360'>now</span> <span m='2178990'>I</span> <span
  m='2179130'>have</span> <span m='2179390'>the</span> <span
  m='2179470'>following</span> <span m='2179980'>phenomenon.</span> <span
  m='2181770'>Let's</span> <span m='2182180'>cut</span> <span
  m='2182380'>it</span> <span m='2182490'>off</span> <span m='2182780'>at</span>
  <span m='2182930'>the</span> <span m='2183140'>nth stage.</span> <span
  m='2184640'>So</span> <span m='2184880'>that</span> <span
  m='2185160'>means</span> <span m='2185760'>that I'm going,</span> <span
  m='2186650'>the</span> <span m='2186790'>integral</span> <span
  m='2187095'>is</span> <span m='2187400'>from</span> <span m='2187540'>1</span>
  <span m='2187830'>to</span> <span m='2188012'>n,</span> <span m='2189000'>dx /
  x.</span> <span m='2190760'>And</span> <span m='2191060'>the</span> <span
  m='2191120'>Riemann</span> <span m='2191475'>sum</span> <span
  m='2192320'>is</span> <span m='2192460'>something</span> <span
  m='2192780'>that's</span> <span m='2192960'>bigger</span> <span
  m='2193270'>than</span> <span m='2193550'>it.</span> <span
  m='2193690'>Because</span> <span m='2194390'>the</span> <span
  m='2194550'>areas</span> <span m='2194980'>are</span> <span
  m='2195180'>enclosing</span> <span m='2196530'>the</span> <span
  m='2197260'>area</span> <span m='2197630'>of</span> <span
  m='2197730'>the</span> <span m='2197820'>curved</span> <span
  m='2198550'>region.</span> <span m='2200300'>And</span> <span
  m='2200550'>that's</span> <span m='2200810'>going</span> <span
  m='2201060'>to</span> <span m='2201150'>be</span> <span m='2201820'>the</span>
  <span m='2201930'>area</span> <span m='2202150'>of</span> <span
  m='2202240'>the</span> <span m='2202320'>first</span> <span
  m='2202730'>box</span> <span m='2203310'>which</span> <span
  m='2203510'>is</span> <span m='2203610'>1,</span> <span
  m='2204720'>plus</span> <span m='2205210'>the</span> <span
  m='2205430'>area</span> <span m='2205800'>of</span> <span
  m='2205920'>the</span> <span m='2206000'>second</span> <span
  m='2206440'>box</span> <span m='2208130'>which</span> <span
  m='2208340'>is</span> <span m='2209390'>1/2,</span> <span
  m='2210330'>plus</span> <span m='2210730'>the</span> <span
  m='2210826'>area</span> <span m='2210923'>of</span> <span
  m='2211020'>the</span> <span m='2211090'>third</span> <span
  m='2211370'>box</span> <span m='2211750'>which</span> <span
  m='2211940'>is</span> <span m='2212100'>1/3.</span> <span
  m='2214150'>All</span> <span m='2214490'>the</span> <span
  m='2214580'>way</span> <span m='2214720'>up</span> <span
  m='2214980'>the</span> <span m='2215090'>last</span> <span
  m='2215580'>one,</span> <span m='2215950'>but</span> <span
  m='2216120'>the</span> <span m='2216190'>last</span> <span
  m='2216640'>one</span> <span m='2218940'>starts</span> <span
  m='2219310'>at</span> <span m='2219620'>N-1.</span> <span
  m='2220840'>So</span> <span m='2221380'>it</span> <span m='2221540'>has</span>
  <span m='2222370'>1/(N-1).</span> <span m='2223450'>There</span> <span
  m='2223680'>are</span> <span m='2223860'>not</span> <span m='2224450'>N</span>
  <span m='2224770'>boxes</span> <span m='2225330'>here.</span> <span
  m='2225780'>There</span> <span m='2225960'>are</span> <span
  m='2226300'>only</span> <span m='2226440'>N-1</span> <span
  m='2227040'>boxes.</span> <span m='2227960'>Because</span> <span
  m='2228440'>the</span> <span m='2228590'>distance</span> <span
  m='2229110'>between</span> <span m='2229500'>1 and</span> <span
  m='2229740'>N</span> <span m='2229880'>is</span> <span m='2230260'>N-1.</span>
  <span m='2231830'>Right</span> <span m='2232050'>so</span> <span
  m='2232170'>this</span> <span m='2232330'>is</span> <span
  m='2232460'>N-1</span> <span m='2233240'>terms.</span> </p><p><span
  m='2237330'>However,</span> <span m='2240530'>if</span> <span
  m='2240780'>I</span> <span m='2240880'>use</span> <span m='2241350'>the</span>
  <span m='2241420'>notation</span> <span m='2242070'>for</span> <span
  m='2242200'>partial</span> <span m='2242680'>sum.</span> <span
  m='2245140'>Which</span> <span m='2245440'>is</span> <span
  m='2246260'>1</span> <span m='2246600'>+</span> <span m='2247150'>1/2</span>
  <span m='2247830'>plus</span> <span m='2248920'>all</span> <span
  m='2249070'>the</span> <span m='2249140'>way</span> <span
  m='2249250'>up</span> <span m='2249350'>to</span> <span
  m='2249765'>1/(n-1)</span> <span m='2250300'>1</span> <span
  m='2250920'>+</span> <span m='2251290'>1/n.</span> <span m='2253530'>In</span>
  <span m='2253630'>other</span> <span m='2253730'>words</span> <span
  m='2253900'>I</span> <span m='2253960'>go</span> <span m='2254160'>out</span>
  <span m='2254370'>to</span> <span m='2254470'>the</span> <span
  m='2254600'>Nth</span> <span m='2254850'>one</span> <span
  m='2255020'>which</span> <span m='2255200'>is</span> <span
  m='2255310'>what</span> <span m='2255480'>I</span> <span
  m='2255590'>would</span> <span m='2255750'>ordinarily</span> <span
  m='2256380'>do.</span> <span m='2257370'>Then</span> <span
  m='2258050'>this</span> <span m='2258260'>sum</span> <span
  m='2258750'>that</span> <span m='2258850'>I</span> <span
  m='2258920'>have</span> <span m='2259130'>here</span> <span
  m='2259330'>certainly</span> <span m='2259776'>is</span> <span
  m='2260670'>less</span> <span m='2261120'>than</span> <span
  m='2262550'>S_N.</span> <span m='2262900'>Because</span> <span
  m='2263130'>there's</span> <span m='2263280'>one</span> <span
  m='2263500'>more</span> <span m='2263700'>term</span> <span
  m='2265400'>there.</span> <span m='2267850'>And</span> <span
  m='2268010'>so</span> <span m='2268150'>here</span> <span m='2268420'>I</span>
  <span m='2268500'>have</span> <span m='2268740'>an</span> <span
  m='2269000'>integral</span> <span m='2269990'>which</span> <span
  m='2270430'>is</span> <span m='2271070'>underneath</span> <span
  m='2272210'>this</span> <span m='2272660'>sum</span> <span
  m='2273115'>S_N.</span> </p><p><span m='2281700'>Now</span> <span
  m='2281880'>this</span> <span m='2282070'>is</span> <span
  m='2282400'>going</span> <span m='2282580'>to</span> <span
  m='2282680'>allow</span> <span m='2283160'>us</span> <span
  m='2287340'>to</span> <span m='2299570'>prove</span> <span
  m='2299780'>conclusively</span> <span m='2300840'>that</span> <span
  m='2301000'>the-- So I'm just going to rewrite this,</span> <span
  m='2301090'>prove conclusively that the sum</span> <span
  m='2301420'>diverges.</span> <span m='2302350'>Why</span> <span
  m='2302630'>is</span> <span m='2302910'>that?</span> <span
  m='2303340'>Because</span> <span m='2303700'>this</span> <span
  m='2304010'>term</span> <span m='2304320'>here</span> <span
  m='2304560'>we</span> <span m='2304680'>can</span> <span
  m='2304820'>calculate.</span> <span m='2306000'>This</span> <span
  m='2306160'>is</span> <span m='2306380'>log</span> <span m='2306870'>x</span>
  <span m='2307520'>evaluated</span> <span m='2307870'>at</span> <span
  m='2308220'>1</span> <span m='2308430'>and</span> <span m='2308610'>n.</span>
  <span m='2309470'>Which</span> <span m='2309810'>is</span> <span
  m='2309890'>the</span> <span m='2310000'>same</span> <span
  m='2310330'>thing</span> <span m='2310690'>as</span> <span
  m='2310910'>log</span> <span m='2311350'>N</span> <span
  m='2312280'>minus</span> <span m='2313490'>0.</span> <span
  m='2314850'>All</span> <span m='2314900'>right,</span> <span
  m='2314950'>the</span> <span m='2315200'>quantity</span> <span
  m='2315510'>log</span> <span m='2315720'>N</span> <span m='2315930'>-</span>
  <span m='2317030'>log</span> <span m='2317290'>1</span> <span
  m='2317520'>which</span> <span m='2317710'>is</span> <span
  m='2317830'>0.</span> <span m='2319270'>And</span> <span m='2319520'>so</span>
  <span m='2319670'>what</span> <span m='2319820'>we</span> <span
  m='2319960'>have</span> <span m='2320360'>here</span> <span
  m='2321140'>is</span> <span m='2322310'>that</span> <span
  m='2322540'>log</span> <span m='2322920'>N</span> <span m='2324210'>is</span>
  <span m='2324360'>less</span> <span m='2324650'>than</span> <span
  m='2324980'>S_N.</span> <span m='2326892'>All</span> <span
  m='2327370'>right</span> <span m='2328370'>and</span> <span
  m='2329140'>clearly</span> <span m='2329910'>this</span> <span
  m='2330130'>goes</span> <span m='2330370'>to</span> <span
  m='2330500'>infinity</span> <span m='2330980'>right.</span> <span
  m='2331455'>As</span> <span m='2331930'>N</span> <span m='2332210'>goes</span>
  <span m='2332360'>to</span> <span m='2332580'>infinity</span> <span
  m='2335180'>this</span> <span m='2335370'>thing</span> <span
  m='2335500'>goes</span> <span m='2335720'>to</span> <span
  m='2335840'>infinity.</span> <span m='2337830'>So</span> <span
  m='2337980'>we're</span> <span m='2338100'>done.</span> <span
  m='2338435'>All</span> <span m='2338770'>right</span> <span
  m='2339250'>we've</span> <span m='2339640'>shown</span> <span
  m='2340060'>divergence.</span> <span m='2348730'>Now the</span> <span
  m='2348890'>way</span> <span m='2349040'>I'm</span> <span
  m='2349190'>going</span> <span m='2349350'>to</span> <span
  m='2349410'>use</span> <span m='2352780'>the</span> <span
  m='2352970'>lower</span> <span m='2353240'>Riemann's</span> <span
  m='2353525'>sum</span> <span m='2355040'>is</span> <span m='2355840'>to</span>
  <span m='2356000'>recognize</span> <span m='2357710'>that</span> <span
  m='2359090'>we've</span> <span m='2359340'>captured</span> <span
  m='2360010'>the</span> <span m='2360100'>rate</span> <span
  m='2360750'>appropriately.</span> <span m='2361960'>That</span> <span
  m='2362130'>is</span> <span m='2362670'>not</span> <span
  m='2362980'>only</span> <span m='2363170'>do I</span> <span
  m='2363280'>have</span> <span m='2363460'>a</span> <span
  m='2363520'>lower</span> <span m='2363800'>bound</span> <span
  m='2364030'>like</span> <span m='2364210'>this</span> <span
  m='2364400'>but</span> <span m='2364520'>I</span> <span
  m='2364560'>have</span> <span m='2364740'>an</span> <span
  m='2364850'>upper</span> <span m='2365110'>bound</span> <span
  m='2365400'>which</span> <span m='2365550'>is</span> <span
  m='2365660'>very</span> <span m='2365930'>similar.</span> </p><p><span
  m='2367860'>So</span> <span m='2368030'>if</span> <span m='2368120'>I</span>
  <span m='2368190'>use</span> <span m='2368450'>the</span> <span
  m='2368630'>upper</span> <span m='2369170'>Riemann--</span> <span
  m='2369670'>oh</span> <span m='2369820'>sorry,</span> <span
  m='2370440'>lower</span> <span m='2370760'>Riemann</span> <span
  m='2371170'>sum</span> <span m='2378250'>again</span> <span
  m='2378680'>with</span> <span m='2378833'>delta</span> <span
  m='2378986'>x</span> <span m='2379140'>=</span> <span m='2379270'>1.</span>
  <span m='2383760'>Then</span> <span m='2389200'>I</span> <span
  m='2389350'>have</span> <span m='2390080'>that</span> <span
  m='2390380'>the</span> <span m='2390600'>integral</span> <span
  m='2391660'>from</span> <span m='2391920'>1</span> <span m='2392280'>to</span>
  <span m='2392410'>n</span> <span m='2393220'>of</span> <span m='2393840'>dx /
  x</span> <span m='2395330'>is</span> <span m='2395530'>bigger</span> <span
  m='2395900'>than--</span> <span m='2396840'>Well</span> <span
  m='2397060'>what</span> <span m='2397300'>are</span> <span
  m='2397370'>the</span> <span m='2397480'>terms</span> <span
  m='2397810'>going</span> <span m='2397970'>to</span> <span
  m='2398030'>be</span> <span m='2398140'>if</span> <span m='2398260'>fit</span>
  <span m='2398610'>them</span> <span m='2398760'>underneath?</span> <span
  m='2400640'>If</span> <span m='2400790'>I</span> <span m='2400860'>fit</span>
  <span m='2401120'>them</span> <span m='2401280'>underneath</span> <span
  m='2401870'>I'm</span> <span m='2401940'>missing</span> <span
  m='2402500'>the</span> <span m='2402590'>first</span> <span
  m='2402960'>term.</span> <span m='2403210'>That</span> <span
  m='2403350'>is</span> <span m='2403480'>the</span> <span
  m='2403580'>box</span> <span m='2403950'>is</span> <span
  m='2404060'>going</span> <span m='2404270'>to</span> <span
  m='2404330'>be</span> <span m='2405080'>half</span> <span
  m='2405420'>height.</span> <span m='2405600'>It's</span> <span
  m='2405820'>going to</span> <span m='2405990'>be</span> <span
  m='2407120'>this</span> <span m='2407310'>lower</span> <span
  m='2407640'>piece.</span> <span m='2408300'>So</span> <span
  m='2408680'>I'm</span> <span m='2408780'>missing</span> <span
  m='2409190'>this</span> <span m='2409360'>first</span> <span
  m='2409830'>term.</span> <span m='2410480'>So</span> <span
  m='2410730'>it'll</span> <span m='2410860'>be</span> <span
  m='2410990'>a</span> <span m='2411050'>1/2</span> <span m='2412200'>+</span>
  <span m='2413850'>1/3</span> <span m='2414430'>plus...</span> <span
  m='2416765'>All right, it</span> <span m='2417110'>will</span> <span
  m='2417240'>keep</span> <span m='2417460'>on</span> <span
  m='2417590'>going.</span> <span m='2418150'>But</span> <span
  m='2418450'>now</span> <span m='2419260'>the</span> <span
  m='2419410'>last</span> <span m='2419950'>one</span> <span
  m='2420450'>instead</span> <span m='2420840'>of</span> <span
  m='2420910'>being</span> <span m='2421440'>1/(N-1),</span> <span
  m='2422150'>it's</span> <span m='2422330'>going</span> <span
  m='2422490'>to</span> <span m='2422550'>be</span> <span m='2422630'>1</span>
  <span m='2422810'>over</span> <span m='2423020'>N.</span> <span
  m='2423840'>This</span> <span m='2423980'>is</span> <span
  m='2424100'>again</span> <span m='2424360'>a</span> <span
  m='2424450'>total</span> <span m='2424840'>of</span> <span
  m='2424920'>the</span> <span m='2425570'>N-1</span> <span
  m='2425850'>terms.</span> <span m='2427050'>This</span> <span
  m='2427320'>is</span> <span m='2427450'>the</span> <span
  m='2427540'>lower</span> <span m='2427820'>Riemann</span> <span
  m='2428125'>sum.</span> </p><p><span m='2431190'>And</span> <span
  m='2431400'>now</span> <span m='2431590'>we</span> <span
  m='2431820'>can</span> <span m='2432030'>recognize</span> <span
  m='2432840'>that</span> <span m='2432980'>this</span> <span
  m='2433150'>is</span> <span m='2433320'>exactly</span> <span
  m='2439990'>equal</span> <span m='2440210'>to-- well so I'll put it over
  here--</span> <span m='2440390'>this is exactly equal to</span> <span
  m='2440670'>S_N</span> <span m='2441250'>minus</span> <span
  m='2441710'>1,</span> <span m='2441970'>minus</span> <span
  m='2442330'>the</span> <span m='2442420'>first</span> <span
  m='2442810'>term.</span> <span m='2443520'>So</span> <span
  m='2443820'>we</span> <span m='2443990'>missed</span> <span
  m='2444280'>the</span> <span m='2444360'>first</span> <span
  m='2444660'>term</span> <span m='2444850'>but</span> <span
  m='2444960'>we</span> <span m='2445070'>got</span> <span
  m='2445260'>all</span> <span m='2445400'>the</span> <span
  m='2445470'>rest</span> <span m='2445780'>of</span> <span
  m='2445940'>them.</span> <span m='2447110'>So</span> <span
  m='2447290'>if</span> <span m='2447380'>I</span> <span m='2447450'>put</span>
  <span m='2447720'>this</span> <span m='2447940'>to</span> <span
  m='2448040'>the</span> <span m='2448210'>other</span> <span
  m='2448450'>side</span> <span m='2449360'>remember</span> <span
  m='2449700'>this</span> <span m='2449900'>is</span> <span
  m='2450100'>log</span> <span m='2450500'>N.</span> <span
  m='2452432'>All</span> <span m='2452840'>right.</span> <span
  m='2453770'>If</span> <span m='2453900'>I</span> <span m='2453970'>put</span>
  <span m='2454180'>this</span> <span m='2454390'>to</span> <span
  m='2454470'>the</span> <span m='2454580'>other</span> <span
  m='2454760'>side</span> <span m='2455050'>I</span> <span
  m='2455120'>have</span> <span m='2455370'>the</span> <span
  m='2455510'>other</span> <span m='2455730'>side</span> <span
  m='2456080'>of</span> <span m='2456170'>this</span> <span
  m='2456370'>bound.</span> <span m='2457130'>I</span> <span
  m='2457220'>have</span> <span m='2457440'>that</span> <span
  m='2457600'>S</span> <span m='2457880'>S_N</span> <span m='2459340'>is</span>
  <span m='2460420'>less</span> <span m='2460685'>than,</span> <span
  m='2461200'>if</span> <span m='2461320'>I</span> <span
  m='2461430'>reverse</span> <span m='2461950'>it,</span> <span m='2465230'>log
  N + 1.</span> <span m='2467010'>And</span> <span m='2467250'>so</span> <span
  m='2467380'>I've</span> <span m='2467520'>trapped</span> <span
  m='2468080'>it</span> <span m='2468180'>on</span> <span m='2468400'>the</span>
  <span m='2468510'>other</span> <span m='2468700'>side.</span> <span
  m='2469040'>And</span> <span m='2469380'>here</span> <span
  m='2469650'>I</span> <span m='2469720'>have</span> <span
  m='2469870'>the</span> <span m='2469950'>lower</span> <span
  m='2470270'>bound.</span> <span m='2470950'>So</span> <span
  m='2471160'>I'm</span> <span m='2471270'>going</span> <span
  m='2471420'>to</span> <span m='2471480'>combine</span> <span
  m='2471960'>those</span> <span m='2472570'>together.</span> </p><p><span
  m='2473170'>So</span> <span m='2473540'>all</span> <span
  m='2473830'>told</span> <span m='2474440'>I</span> <span
  m='2474530'>have</span> <span m='2476390'>this</span> <span
  m='2476560'>correspondence</span> <span m='2477350'>here.</span> <span
  m='2478030'>It</span> <span m='2478520'>is</span> <span m='2478790'>the</span>
  <span m='2478890'>size</span> <span m='2479320'>of</span> <span
  m='2479450'>log</span> <span m='2479760'>N</span> <span m='2480640'>is</span>
  <span m='2481350'>trapped</span> <span m='2481800'>between</span> <span
  m='2483090'>the-- sorry, the</span> <span m='2483180'>size</span> <span
  m='2483430'>of</span> <span m='2483500'>S_N,</span> <span
  m='2484520'>which</span> <span m='2484810'>is</span> <span
  m='2484970'>relatively</span> <span m='2485470'>hard</span> <span
  m='2485750'>to</span> <span m='2485830'>calculate</span> <span
  m='2486150'>and</span> <span m='2486470'>understand</span> <span
  m='2487640'>exactly,</span> <span m='2488690'>is</span> <span
  m='2488860'>trapped</span> <span m='2489310'>between</span> <span
  m='2489800'>log</span> <span m='2490360'>N</span> <span m='2490780'>and</span>
  <span m='2491700'>log</span> <span m='2491860'>N</span> <span
  m='2492020'>+</span> <span m='2492340'>1.</span> <span m='2494260'>Yeah</span>
  <span m='2494590'>question.</span> </p><p><span m='2495160'>AUDIENCE:
  [INAUDIBLE PHRASE]</span> </p><p><span m='2506280'>PROFESSOR: This</span>
  <span m='2506580'>step</span> <span m='2506820'>here</span> <span
  m='2507020'>is</span> <span m='2507190'>the</span> <span
  m='2507290'>step</span> <span m='2507580'>that</span> <span
  m='2507670'>you're</span> <span m='2508100'>concerned</span> <span
  m='2508540'>about.</span> <span m='2509550'>So</span> <span
  m='2509740'>this</span> <span m='2510160'>step</span> <span
  m='2510910'>is</span> <span m='2512220'>a</span> <span
  m='2512320'>geometric</span> <span m='2512950'>argument</span> <span
  m='2513770'>which</span> <span m='2514160'>is</span> <span
  m='2514580'>analogous</span> <span m='2515720'>to</span> <span
  m='2516340'>this</span> <span m='2516620'>step.</span> <span
  m='2517070'>All</span> <span m='2517450'>right</span> <span
  m='2518470'>it's</span> <span m='2518700'>the</span> <span
  m='2518780'>same</span> <span m='2519830'>type</span> <span
  m='2520120'>of</span> <span m='2520410'>argument.</span> <span
  m='2521320'>And</span> <span m='2521630'>in</span> <span
  m='2521870'>this</span> <span m='2522080'>case</span> <span
  m='2522500'>it's</span> <span m='2522810'>that</span> <span
  m='2522980'>the</span> <span m='2523090'>rectangles</span> <span
  m='2523410'>are</span> <span m='2523730'>on</span> <span
  m='2523930'>top</span> <span m='2524720'>and</span> <span
  m='2524980'>so</span> <span m='2525100'>the</span> <span
  m='2525280'>area</span> <span m='2525860'>represented</span> <span
  m='2526400'>on</span> <span m='2526520'>the</span> <span
  m='2526580'>right</span> <span m='2526820'>hand</span> <span
  m='2527010'>side</span> <span m='2527270'>is</span> <span
  m='2527380'>less</span> <span m='2527740'>than</span> <span
  m='2527820'>the</span> <span m='2527940'>area</span> <span
  m='2528170'>represented</span> <span m='2528880'>on</span> <span
  m='2529040'>this</span> <span m='2529220'>side.</span> <span
  m='2529840'>And</span> <span m='2530030'>this</span> <span
  m='2530180'>is</span> <span m='2530300'>the</span> <span
  m='2530380'>same</span> <span m='2530720'>type</span> <span
  m='2530960'>of</span> <span m='2531110'>thing</span> <span
  m='2531560'>except</span> <span m='2532040'>that</span> <span
  m='2532085'>the</span> <span m='2532130'>rectangles</span> <span
  m='2532630'>are</span> <span m='2532790'>underneath.</span> <span
  m='2534400'>So</span> <span m='2535320'>the</span> <span
  m='2535450'>sum</span> <span m='2535660'>of</span> <span
  m='2535750'>the</span> <span m='2535860'>areas</span> <span
  m='2536170'>of</span> <span m='2536250'>the</span> <span
  m='2536320'>rectangles</span> <span m='2537310'>is</span> <span
  m='2537510'>less</span> <span m='2537930'>than</span> <span
  m='2538020'>the</span> <span m='2538150'>area</span> <span
  m='2538520'>under</span> <span m='2538700'>the</span> <span
  m='2538820'>curve.</span> </p><p><span m='2543840'>All</span> <span
  m='2544040'>right.</span> <span m='2544240'>So</span> <span
  m='2544600'>I've</span> <span m='2544750'>now</span> <span
  m='2544950'>trapped</span> <span m='2545980'>this</span> <span
  m='2546230'>quantity.</span> <span m='2547380'>And</span> <span
  m='2550850'>I'm</span> <span m='2551000'>now</span> <span
  m='2551180'>going</span> <span m='2551270'>to</span> <span
  m='2551360'>state</span> <span m='2552380'>the</span> <span
  m='2552580'>sort</span> <span m='2552770'>of</span> <span
  m='2552850'>general</span> <span m='2554080'>results.</span> <span
  m='2558420'>So</span> <span m='2558630'>here's</span> <span
  m='2558930'>what's</span> <span m='2559130'>known</span> <span
  m='2559390'>as</span> <span m='2559590'>integral</span> <span
  m='2560070'>comparison.</span> <span m='2562230'>It's</span> <span
  m='2562510'>this</span> <span m='2562790'>double</span> <span
  m='2563240'>arrow</span> <span m='2563550'>correspondence</span> <span
  m='2564900'>in</span> <span m='2565150'>the</span> <span
  m='2565220'>general</span> <span m='2565710'>case,</span> <span
  m='2572780'>for</span> <span m='2573210'>a</span> <span
  m='2573590'>very</span> <span m='2573860'>general</span> <span
  m='2574240'>case.</span> <span m='2574580'>There</span> <span
  m='2574685'>are</span> <span m='2574790'>actually</span> <span
  m='2575140'>even</span> <span m='2575330'>more</span> <span
  m='2575560'>cases</span> <span m='2576005'>where</span> <span
  m='2576450'>it</span> <span m='2576740'>works.</span> <span
  m='2577130'>But</span> <span m='2577520'>this</span> <span
  m='2577690'>is</span> <span m='2577800'>a</span> <span m='2577850'>good</span>
  <span m='2578060'>case</span> <span m='2580180'>and</span> <span
  m='2580480'>convenient.</span> </p><p><span m='2581510'>Now</span> <span
  m='2581613'>this</span> <span m='2581716'>is</span> <span
  m='2581820'>called</span> <span m='2582100'>integral</span> <span
  m='2582480'>comparison.</span> <span m='2587060'>And</span> <span
  m='2587300'>it</span> <span m='2588490'>comes</span> <span
  m='2588730'>with</span> <span m='2588880'>hypotheses</span> <span
  m='2590540'>but</span> <span m='2590770'>it</span> <span
  m='2591020'>follows</span> <span m='2591260'>the</span> <span
  m='2591440'>same</span> <span m='2591720'>argument</span> <span
  m='2592030'>that</span> <span m='2592120'>I</span> <span
  m='2592180'>just</span> <span m='2592400'>gave.</span> <span
  m='2593495'>If</span> <span m='2595040'>f(x)</span> <span
  m='2596580'>is</span> <span m='2597310'>decreasing</span> <span
  m='2601970'>and</span> <span m='2602260'>it's</span> <span
  m='2602440'>positive,</span> <span m='2607540'>then</span> <span
  m='2612590'>the</span> <span m='2612993'>sum</span> <span
  m='2614130'>f(n),</span> <span m='2615290'>n</span> <span
  m='2615550'>equals</span> <span m='2615810'>1</span> <span
  m='2616080'>to</span> <span m='2616240'>infinity,</span> <span
  m='2617520'>minus</span> <span m='2618050'>the</span> <span
  m='2618150'>integral</span> <span m='2618800'>from</span> <span
  m='2618980'>1</span> <span m='2619180'>to</span> <span
  m='2619320'>infinity</span> <span m='2619615'>of</span> <span
  m='2620696'>f(x)</span> <span m='2621090'>dx</span> <span
  m='2624570'>is</span> <span m='2624740'>less</span> <span
  m='2625030'>than</span> <span m='2625300'>f(1).</span> <span
  m='2630060'>That's</span> <span m='2630350'>basically</span> <span
  m='2630800'>what</span> <span m='2630950'>we</span> <span
  m='2631060'>showed.</span> <span m='2631590'>We</span> <span
  m='2631710'>showed</span> <span m='2631940'>that</span> <span
  m='2632120'>the</span> <span m='2632220'>difference</span> <span
  m='2632850'>between</span> <span m='2633520'>S_N</span> <span
  m='2633670'>and</span> <span m='2633780'>log</span> <span m='2634140'>N</span>
  <span m='2634570'>was</span> <span m='2635050'>at</span> <span
  m='2635250'>most</span> <span m='2635570'>1.</span> <span
  m='2639660'>All</span> <span m='2639780'>right. Now if both of them
  are--</span> <span m='2643790'>And</span> <span m='2647340'>the</span> <span
  m='2647460'>sum</span> <span m='2651590'>and</span> <span
  m='2651820'>the</span> <span m='2651940'>integral</span> <span
  m='2657730'>converge</span> <span m='2660350'>or</span> <span
  m='2660900'>diverge</span> <span m='2663420'>together.</span> <span
  m='2665380'>That</span> <span m='2665540'>is</span> <span
  m='2665690'>they</span> <span m='2665865'>either</span> <span
  m='2666040'>both</span> <span m='2666410'>converge</span> <span
  m='2666890'>or</span> <span m='2666950'>both</span> <span
  m='2667270'>diverge.</span> <span m='2667750'>This</span> <span
  m='2667920'>is</span> <span m='2668050'>the</span> <span
  m='2668140'>type</span> <span m='2668410'>of</span> <span
  m='2668540'>test</span> <span m='2668900'>that</span> <span
  m='2669000'>we</span> <span m='2669100'>like</span> <span
  m='2669840'>because</span> <span m='2670170'>then</span> <span
  m='2670360'>we</span> <span m='2670460'>can</span> <span
  m='2670570'>just</span> <span m='2670780'>convert</span> <span
  m='2671200'>the</span> <span m='2671280'>question</span> <span
  m='2672070'>of</span> <span m='2672180'>convergence</span> <span
  m='2672620'>over</span> <span m='2672790'>here</span> <span
  m='2673000'>to</span> <span m='2673130'>this</span> <span
  m='2673860'>question</span> <span m='2674070'>of</span> <span
  m='2674280'>convergence</span> <span m='2674770'>over</span> <span
  m='2674980'>on</span> <span m='2675100'>the</span> <span
  m='2675200'>other</span> <span m='2675370'>side.</span> </p><p><span
  m='2677770'>Now</span> <span m='2677920'>I</span> <span
  m='2678020'>remind</span> <span m='2678600'>you</span> <span
  m='2679450'>that</span> <span m='2679740'>it's</span> <span
  m='2680030'>incredibly</span> <span m='2681150'>hard</span> <span
  m='2681590'>to</span> <span m='2681690'>calculate</span> <span
  m='2682430'>these</span> <span m='2682630'>numbers.</span> <span
  m='2684870'>Whereas</span> <span m='2685410'>these</span> <span
  m='2685720'>numbers</span> <span m='2686070'>are</span> <span
  m='2686200'>easier</span> <span m='2686600'>to</span> <span
  m='2686690'>calculate.</span> <span m='2687220'>Our</span> <span
  m='2687340'>goal</span> <span m='2687780'>is</span> <span
  m='2688570'>to</span> <span m='2688680'>reduce</span> <span
  m='2689160'>things</span> <span m='2689430'>to</span> <span
  m='2689540'>simpler</span> <span m='2690000'>things.</span> <span
  m='2690390'>And in</span> <span m='2690560'>this</span> <span
  m='2690740'>case</span> <span m='2691270'>sums,</span> <span
  m='2692190'>infinite</span> <span m='2692540'>sums</span> <span
  m='2692910'>are</span> <span m='2693030'>much</span> <span
  m='2693280'>harder</span> <span m='2693960'>than</span> <span
  m='2694110'>infinite</span> <span m='2694415'>integrals.</span> </p><p><span
  m='2700080'>All</span> <span m='2700250'>right</span> <span
  m='2700420'>so</span> <span m='2700580'>that's</span> <span
  m='2700820'>the</span> <span m='2700970'>integral</span> <span
  m='2701300'>comparison.</span> <span m='2703150'>And</span> <span
  m='2703360'>now</span> <span m='2704840'>I</span> <span
  m='2704930'>have</span> <span m='2705130'>one</span> <span
  m='2705400'>last</span> <span m='2707790'>bit</span> <span
  m='2708040'>on</span> <span m='2708590'>comparisons</span> <span
  m='2712140'>that</span> <span m='2712290'>I</span> <span
  m='2712340'>need</span> <span m='2712580'>to</span> <span
  m='2713030'>tell</span> <span m='2713270'>you</span> <span
  m='2713450'>about.</span> <span m='2713840'>And</span> <span
  m='2713960'>this</span> <span m='2714100'>is</span> <span
  m='2714390'>very</span> <span m='2714650'>much</span> <span
  m='2714930'>like</span> <span m='2715170'>what</span> <span
  m='2715300'>we</span> <span m='2715410'>did</span> <span
  m='2715580'>with</span> <span m='2715790'>integrals.</span> <span
  m='2716310'>Which</span> <span m='2716510'>is a</span> <span
  m='2717130'>so</span> <span m='2717290'>called</span> <span
  m='2717570'>limit</span> <span m='2717930'>comparison.</span> <span
  m='2729200'>The</span> <span m='2729480'>limit</span> <span
  m='2729780'>comparison</span> <span m='2730350'>says</span> <span
  m='2730580'>the</span> <span m='2730660'>following:</span> <span
  m='2731190'>if</span> <span m='2734210'>f(n)</span> <span
  m='2736730'>is</span> <span m='2736950'>similar</span> <span
  m='2737570'>to</span> <span m='2737990'>g(n) --</span> <span
  m='2739050'>recall</span> <span m='2739830'>that</span> <span
  m='2740060'>means</span> <span m='2742660'>f(n)</span> <span
  m='2743300'>/</span> <span m='2743660'>g(n)</span> <span
  m='2745210'>tends</span> <span m='2745530'>to</span> <span
  m='2745670'>1</span> <span m='2746690'>as</span> <span m='2746880'>n</span>
  <span m='2747110'>goes</span> <span m='2747350'>to</span> <span
  m='2747590'>infinity --</span> <span m='2751760'>and</span> <span
  m='2753680'>we're</span> <span m='2753960'>in</span> <span
  m='2754050'>the</span> <span m='2754130'>positive</span> <span
  m='2754395'>case.</span> <span m='2755000'>So</span> <span
  m='2755220'>let's</span> <span m='2755490'>just</span> <span
  m='2755760'>say</span> <span m='2756383'>g(n)</span> <span
  m='2756816'>is</span> <span m='2757250'>positive.</span> <span
  m='2763920'>Then-- that doesn't even, well-- then</span> <span
  m='2765490'>sum</span> <span m='2767110'>f(n),</span> <span
  m='2770610'>sum</span> <span m='2770915'>g(n)</span> <span m='2771220'>either
  both--</span> <span m='2774490'>same</span> <span m='2774990'>thing</span>
  <span m='2775055'>as</span> <span m='2775120'>above,</span> <span
  m='2775540'>either</span> <span m='2775840'>both</span> <span
  m='2778090'>converge</span> <span m='2780350'>or</span> <span
  m='2780460'>both</span> <span m='2781417'>diverge.</span> <span
  m='2787488'>All</span> <span m='2787960'>right.</span> <span
  m='2788770'>This</span> <span m='2788970'>is</span> <span
  m='2789100'>just</span> <span m='2789280'>saying</span> <span
  m='2789560'>that</span> <span m='2789660'>if</span> <span
  m='2790170'>they</span> <span m='2790330'>behave</span> <span
  m='2790730'>the</span> <span m='2790830'>same</span> <span
  m='2791050'>way</span> <span m='2791160'>in</span> <span
  m='2791240'>the</span> <span m='2791340'>tail,</span> <span
  m='2791840'>which</span> <span m='2792000'>is</span> <span
  m='2792090'>all</span> <span m='2792240'>we</span> <span
  m='2792350'>really</span> <span m='2792580'>care</span> <span
  m='2792860'>about,</span> <span m='2793920'>then</span> <span
  m='2795980'>they</span> <span m='2796320'>have</span> <span
  m='2796630'>similar</span> <span m='2796950'>behavior,</span> <span
  m='2799700'>similar</span> <span m='2800030'>convergence</span> <span
  m='2800440'>properties.</span> </p><p><span m='2804620'>And</span> <span
  m='2804750'>let</span> <span m='2804840'>me</span> <span
  m='2804900'>give</span> <span m='2804970'>you</span> <span
  m='2805040'>a</span> <span m='2805090'>couple</span> <span
  m='2805370'>examples.</span> <span m='2810370'>So</span> <span
  m='2810600'>here's</span> <span m='2812220'>one</span> <span
  m='2812510'>example:</span> <span m='2813040'>if</span> <span
  m='2813130'>you</span> <span m='2813230'>take</span> <span
  m='2813560'>the</span> <span m='2813660'>sum</span> <span m='2814610'>1</span>
  <span m='2814800'>over</span> <span m='2815040'>n^2 + 1,</span> <span
  m='2816660'>square</span> <span m='2816820'>root.</span> <span
  m='2821890'>This</span> <span m='2822100'>is</span> <span
  m='2822210'>going</span> <span m='2822470'>to</span> <span
  m='2822540'>be</span> <span m='2822670'>replaced</span> <span
  m='2824130'>by</span> <span m='2824370'>something</span> <span
  m='2824780'>simpler.</span> <span m='2825350'>Which</span> <span
  m='2825610'>is</span> <span m='2825710'>the</span> <span
  m='2825810'>main</span> <span m='2826170'>term</span> <span
  m='2826550'>here.</span> <span m='2827240'>Which</span> <span
  m='2827720'>is</span> <span m='2827860'>1</span> <span m='2828150'>over</span>
  <span m='2828370'>square</span> <span m='2828580'>root</span> <span
  m='2828790'>of</span> <span m='2828980'>n^2,</span> <span
  m='2830460'>which</span> <span m='2830770'>we</span> <span
  m='2830890'>recognize</span> <span m='2832370'>as</span> <span
  m='2832580'>sum</span> <span m='2833280'>1/n,</span> <span
  m='2834370'>which</span> <span m='2834630'>diverges.</span> <span
  m='2837920'>So</span> <span m='2838140'>this</span> <span
  m='2838410'>guy</span> <span m='2838810'>is</span> <span
  m='2839520'>one</span> <span m='2839760'>of</span> <span
  m='2839830'>the</span> <span m='2839900'>red</span> <span
  m='2840160'>guys.</span> <span m='2844300'>On</span> <span
  m='2844470'>the</span> <span m='2844530'>red</span> <span
  m='2844780'>team.</span> <span m='2846410'>Now</span> <span
  m='2849320'>we</span> <span m='2849590'>have</span> <span
  m='2849740'>another</span> <span m='2849990'>example.</span> <span
  m='2853370'>Which</span> <span m='2853820'>is</span> <span
  m='2854290'>let's</span> <span m='2854640'>say</span> <span
  m='2855120'>the</span> <span m='2855600'>square</span> <span
  m='2856020'>root</span> <span m='2856910'>of</span> <span m='2857180'>n, I
  don't know,</span> <span m='2858960'>to</span> <span m='2859180'>the</span>
  <span m='2859370'>fifth</span> <span m='2860190'>minus</span> <span
  m='2860900'>n^2.</span> <span m='2863080'>Now</span> <span
  m='2863540'>if</span> <span m='2863720'>you</span> <span
  m='2863830'>have</span> <span m='2864110'>something</span> <span
  m='2864480'>where</span> <span m='2864620'>it's</span> <span
  m='2864830'>negative</span> <span m='2865330'>in</span> <span
  m='2865560'>the</span> <span m='2865710'>denominator</span> <span
  m='2865805'>you</span> <span m='2865900'>kind</span> <span
  m='2866210'>of</span> <span m='2866290'>do</span> <span
  m='2866440'>have</span> <span m='2866640'>to</span> <span
  m='2866740'>watch</span> <span m='2867170'>out</span> <span
  m='2868280'>that</span> <span m='2868400'>denominator</span> <span
  m='2868910'>makes</span> <span m='2869180'>sense.</span> <span
  m='2869540'>It</span> <span m='2869650'>isn't</span> <span
  m='2869910'>0.</span> <span m='2870570'>So</span> <span
  m='2870830'>we're</span> <span m='2870940'>going to</span> <span
  m='2871100'>be</span> <span m='2871260'>careful</span> <span
  m='2871810'>and</span> <span m='2871990'>start</span> <span
  m='2872380'>this</span> <span m='2872490'>at</span> <span m='2872600'>n</span>
  <span m='2872790'>=</span> <span m='2872980'>2. In which case, the first
  term,</span> <span m='2879340'>I</span> <span m='2879370'>don't</span> <span
  m='2879500'>like</span> <span m='2879970'>1/0</span> <span
  m='2880370'>as</span> <span m='2880500'>a</span> <span m='2880570'>term</span>
  <span m='2880820'>in</span> <span m='2880920'>my</span> <span
  m='2881270'>series.</span> <span m='2881720'>So</span> <span
  m='2881810'>I'm</span> <span m='2881900'>just</span> <span m='2882070'>going
  to</span> <span m='2882200'>be</span> <span m='2882270'>a</span> <span
  m='2882310'>little</span> <span m='2882530'>careful</span> <span
  m='2883500'>about</span> <span m='2883990'>how--</span> <span
  m='2884130'>as</span> <span m='2884380'>I</span> <span m='2884440'>said</span>
  <span m='2884600'>I</span> <span m='2884660'>was</span> <span
  m='2884720'>kind</span> <span m='2884780'>of</span> <span
  m='2884840'>lazy</span> <span m='2885230'>here.</span> <span
  m='2885710'>I</span> <span m='2885840'>could</span> <span
  m='2885960'>have</span> <span m='2886080'>started</span> <span
  m='2886400'>this</span> <span m='2886580'>one</span> <span
  m='2886720'>at</span> <span m='2886820'>0</span> <span m='2887140'>for</span>
  <span m='2887530'>instance.</span> <span m='2889930'>All</span> <span
  m='2890410'>right.</span> <span m='2890810'>So</span> <span
  m='2893340'>here's</span> <span m='2893470'>the</span> <span
  m='2893550'>picture.</span> </p><p><span m='2894110'>Now</span> <span
  m='2894270'>this</span> <span m='2895900'>I</span> <span
  m='2895960'>just</span> <span m='2896210'>replace</span> <span
  m='2896690'>by</span> <span m='2896890'>its</span> <span
  m='2897110'>main</span> <span m='2897410'>term</span> <span
  m='2897610'>which</span> <span m='2897770'>is</span> <span
  m='2897870'>1</span> <span m='2898040'>over</span> <span
  m='2898240'>n^5,</span> <span m='2899070'>square</span> <span
  m='2899290'>root.</span> <span m='2900340'>Which</span> <span
  m='2900836'>is</span> <span m='2901830'>sum</span> <span
  m='2903010'>1/n^(5/2),</span> <span m='2905310'>which</span> <span
  m='2905600'>converges.</span> <span m='2908705'>All</span> <span
  m='2909180'>right.</span> <span m='2909520'>The</span> <span
  m='2909650'>power</span> <span m='2909780'>is</span> <span
  m='2909910'>bigger</span> <span m='2910220'>than</span> <span
  m='2910430'>1.</span> <span m='2910800'>1</span> <span m='2911180'>is</span>
  <span m='2911300'>the</span> <span m='2911420'>divider</span> <span
  m='2912360'>for</span> <span m='2912460'>these</span> <span
  m='2912690'>things</span> <span m='2913170'>and</span> <span
  m='2913270'>it</span> <span m='2913400'>just</span> <span
  m='2913650'>misses.</span> <span m='2913960'>This</span> <span
  m='2915680'>one</span> <span m='2916517'>converges.</span> <span
  m='2918752'>All</span> <span m='2919200'>right</span> <span
  m='2919400'>so</span> <span m='2919540'>these</span> <span
  m='2919790'>are</span> <span m='2919850'>the</span> <span
  m='2919960'>typical</span> <span m='2920420'>ways</span> <span
  m='2921800'>in</span> <span m='2921980'>which</span> <span
  m='2925050'>these</span> <span m='2925620'>convergence</span> <span
  m='2926030'>processes</span> <span m='2926660'>are</span> <span
  m='2926940'>used.</span> <span m='2927355'>All</span> <span
  m='2927660'>right.</span> </p><p><span m='2927870'>So</span> <span
  m='2928010'>I</span> <span m='2928090'>have</span> <span
  m='2928310'>one</span> <span m='2928520'>more</span> <span
  m='2928710'>thing</span> <span m='2928940'>for</span> <span
  m='2929190'>you.</span> <span m='2929930'>Which</span> <span
  m='2930150'>is</span> <span m='2930760'>an</span> <span
  m='2930960'>advertisement</span> <span m='2931580'>for</span> <span
  m='2931700'>next</span> <span m='2931990'>time.</span> <span
  m='2932600'>And</span> <span m='2932830'>I</span> <span
  m='2932860'>have</span> <span m='2933030'>this</span> <span
  m='2933210'>demo</span> <span m='2933750'>here</span> <span
  m='2934040'>which</span> <span m='2934230'>I</span> <span
  m='2934255'>will</span> <span m='2934280'>grab.</span> <span
  m='2936360'>But</span> <span m='2936560'>you</span> <span
  m='2936680'>will</span> <span m='2936780'>see</span> <span
  m='2936990'>this</span> <span m='2937190'>next</span> <span
  m='2937510'>time.</span> </p><p><span m='2938300'>So</span> <span
  m='2938560'>here's</span> <span m='2938810'>a</span> <span
  m='2938870'>question</span> <span m='2939360'>for</span> <span
  m='2939450'>you</span> <span m='2939530'>to</span> <span
  m='2939630'>think</span> <span m='2939820'>about</span> <span
  m='2940180'>overnight</span> <span m='2940880'>but</span> <span
  m='2941120'>don't</span> <span m='2941500'>ask</span> <span
  m='2942970'>friends,</span> <span m='2943320'>you</span> <span
  m='2943390'>have</span> <span m='2943500'>to</span> <span
  m='2943590'>think</span> <span m='2943750'>about it</span> <span
  m='2943910'>yourself.</span> <span m='2944240'>So</span> <span
  m='2944400'>here's</span> <span m='2944720'>the</span> <span
  m='2944800'>problem.</span> <span m='2945492'>Here</span> <span
  m='2945840'>are</span> <span m='2946040'>some</span> <span
  m='2946230'>blocks</span> <span m='2946760'>which</span> <span
  m='2947350'>I</span> <span m='2947570'>acquired</span> <span
  m='2948000'>when</span> <span m='2948180'>my</span> <span
  m='2948320'>kids</span> <span m='2948680'>left</span> <span
  m='2948980'>home.</span> <span m='2952190'>Anyway</span> <span
  m='2954300'>yeah</span> <span m='2956430'>that'll</span> <span
  m='2956670'>happen</span> <span m='2956980'>to</span> <span
  m='2957100'>you</span> <span m='2957270'>too</span> <span
  m='2957600'>in</span> <span m='2957700'>about</span> <span
  m='2958770'>four</span> <span m='2959010'>years.</span> <span
  m='2960550'>So</span> <span m='2960970'>now</span> <span
  m='2962730'>here</span> <span m='2962970'>you</span> <span
  m='2963110'>are,</span> <span m='2965150'>these</span> <span
  m='2965350'>are</span> <span m='2965450'>blocks.</span> <span
  m='2966100'>So</span> <span m='2966240'>now</span> <span
  m='2966400'>here's</span> <span m='2966710'>the</span> <span
  m='2966790'>question</span> <span m='2967250'>that</span> <span
  m='2967340'>we're</span> <span m='2967470'>going</span> <span
  m='2967690'>to</span> <span m='2967930'>deal</span> <span
  m='2968220'>with</span> <span m='2968470'>next</span> <span
  m='2968800'>time.</span> <span m='2969860'>I'm</span> <span m='2970050'>going
  to</span> <span m='2970200'>build</span> <span m='2970530'>it,</span> <span
  m='2970640'>maybe</span> <span m='2970820'>I'll</span> <span
  m='2970920'>put</span> <span m='2971080'>it</span> <span
  m='2971180'>over</span> <span m='2971370'>here</span> <span
  m='2972030'>because</span> <span m='2972250'>I</span> <span m='2972310'>want
  to</span> <span m='2972490'>have</span> <span m='2972620'>some</span> <span
  m='2972750'>room</span> <span m='2972960'>to</span> <span
  m='2973030'>head</span> <span m='2973210'>this</span> <span
  m='2973410'>way.</span> <span m='2974890'>I</span> <span
  m='2974950'>want</span> <span m='2975065'>to</span> <span
  m='2975180'>stack</span> <span m='2975620'>them</span> <span
  m='2975790'>up</span> <span m='2976640'>so</span> <span
  m='2976990'>that--</span> <span m='2978990'>oh</span> <span
  m='2979660'>didn't</span> <span m='2979860'>work.</span> <span
  m='2981320'>Going</span> <span m='2981435'>to</span> <span
  m='2981550'>stack</span> <span m='2981970'>them</span> <span
  m='2982140'>up</span> <span m='2983300'>in</span> <span m='2983430'>the</span>
  <span m='2983510'>following</span> <span m='2983960'>way.</span> <span
  m='2984430'>I</span> <span m='2984540'>want</span> <span m='2984750'>to</span>
  <span m='2984820'>do</span> <span m='2985000'>it</span> <span
  m='2985240'>so</span> <span m='2985410'>that</span> <span
  m='2985560'>the</span> <span m='2985650'>top</span> <span
  m='2986090'>one</span> <span m='2986590'>is</span> <span
  m='2986810'>completely</span> <span m='2988280'>to</span> <span
  m='2988430'>the</span> <span m='2988530'>right</span> <span
  m='2989320'>of</span> <span m='2989480'>the</span> <span
  m='2989570'>bottom</span> <span m='2989930'>one.</span> <span
  m='2991540'>That's</span> <span m='2991770'>the</span> <span
  m='2991850'>question</span> <span m='2992530'>can</span> <span
  m='2992750'>I</span> <span m='2992850'>do</span> <span m='2993060'>that? Can I
  get--</span> <span m='2995840'>Can</span> <span m='2996020'>I</span> <span
  m='2996080'>build</span> <span m='2996360'>this</span> <span
  m='2996620'>up?</span> <span m='2997870'>So</span> <span
  m='2998520'>let's</span> <span m='2998800'>see</span> <span
  m='2999050'>here.</span> <span m='3001980'>I</span> <span
  m='3002040'>just</span> <span m='3002250'>seem</span> <span
  m='3002380'>to</span> <span m='3002480'>be</span> <span
  m='3002580'>missing--</span> <span m='3003140'>but</span> <span
  m='3003250'>anyway</span> <span m='3004050'>what</span> <span
  m='3004230'>I'm</span> <span m='3004300'>going to</span> <span
  m='3004460'>do</span> <span m='3004590'>is</span> <span m='3004690'>I'm</span>
  <span m='3004800'>going</span> <span m='3004870'>to</span> <span
  m='3004940'>try</span> <span m='3005220'>to</span> <span
  m='3005310'>build</span> <span m='3005530'>this</span> <span
  m='3005720'>and</span> <span m='3005820'>we're</span> <span m='3005910'>going
  to</span> <span m='3006090'>see</span> <span m='3006640'>how</span> <span
  m='3006880'>far</span> <span m='3007120'>we</span> <span
  m='3007240'>can</span> <span m='3007420'>get</span> <span
  m='3008270'>with</span> <span m='3008460'>this</span> <span
  m='3009350'>next</span> <span m='3009630'>time.</span> </p>
embedded_media:
  - uid: 76981c98cd5f249fc188fcdd9dcdbe7e
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: lec37.jpg
    title: Lecture 37
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-37-infinite-series/lec37.jpg
  - uid: d90f56c095fca7cdc562de48665f1367
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: MK_0QHbUnIA
  - uid: 11a65732cf140a1cd55475aaa8c79deb
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/MK_0QHbUnIA/default.jpg'
  - uid: 3c90b42d6fb2e03bdc86b6355b27caef
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/single-variable-calculus/id354869053?mt=10
  - uid: 8971813341f336c0e249073136814bb9
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.01JF07/ocw-18.01-f07-lec37_300k.mp4'
  - uid: 545128da5b1480277a3e856a262c85c7
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Video-VideoLecturesnet-Stream
    title: Video-VideoLectures.net-Stream
    type: Video
    media_location: 'http://videolectures.net/mit1801f06_single_variable_calculus/'
  - uid: 9f4171b200e1aa6fe7685142bee6e585
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Thumbnail-OCW-JPG
    title: Thumbnail-OCW-JPG
    type: Thumbnail
  - uid: f16967823ca90bac4552859ac9d0748e
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: MK_0QHbUnIA
  - uid: 607448bf0c97829a0236cb1aecfc17c2
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: MK_0QHbUnIA.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-37-infinite-series/MK_0QHbUnIA.srt
  - uid: 4c94bc71ca3950ce8909675e367d6a5c
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: MK_0QHbUnIA.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-37-infinite-series/MK_0QHbUnIA.pdf
  - uid: 082203b0247e95b7ffc73fb6700cf6ac
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: fa9e126e5a3a2a6006aa623b49a56aa6
    parent_uid: 683b9253cbbf4999519046ff05e10658
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
