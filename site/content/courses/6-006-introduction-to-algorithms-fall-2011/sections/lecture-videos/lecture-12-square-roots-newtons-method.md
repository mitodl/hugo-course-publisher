---
title: 'Lecture 12: Square Roots, Newton''s Method'
uid: 1a241368a91359d13bc6f1475f93ca85
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-12-square-roots-newtons-method
short_url: lecture-12-square-roots-newtons-method
inline_embed_id: '14723068lecture12:squareroots,newton''smethod53165212'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture begins with error analysis of
  Newton's method and a comparison of multiplication algorithms. It then covers
  high-precision division, which is required for Newton's method, and discusses
  the complexity of division and computing square roots.</p>
  <p><strong>Instructor:</strong> Srini Devadas</p>
related_resources_text: ''
transcript: >-
  <p><span m='60'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13320'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15560'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='21896'>PROFESSOR: Good</span> <span m='22350'>morning</span> <span
  m='22630'>everyone.</span> <span m='24520'>Morning.</span> <span
  m='26470'>Let's</span> <span m='26680'>get</span> <span
  m='26800'>started.</span> <span m='28910'>So</span> <span m='30440'>the</span>
  <span m='30550'>second</span> <span m='30980'>of</span> <span
  m='31090'>two</span> <span m='31230'>lectures</span> <span m='31800'>on</span>
  <span m='32200'>numerics.</span> <span m='33420'>Last</span> <span
  m='33780'>time</span> <span m='34970'>we</span> <span m='35940'>had</span>
  <span m='36200'>this</span> <span m='36320'>motivating</span> <span
  m='36780'>question</span> <span m='37210'>of</span> <span
  m='38470'>finding</span> <span m='38940'>the</span> <span
  m='39040'>millionth</span> <span m='39470'>digit</span> <span m='39880'>of
  the</span> <span m='40380'>square</span> <span m='40760'>root</span> <span
  m='40870'>of</span> <span m='41000'>2,</span> <span m='41280'>or the</span>
  <span m='41740'>square</span> <span m='42190'>root</span> <span
  m='42350'>of</span> <span m='43550'>quantities</span> <span
  m='44030'>that</span> <span m='44530'>end</span> <span m='44760'>up</span>
  <span m='45210'>becoming</span> <span m='46050'>irrational.</span> <span
  m='47510'>And</span> <span m='48300'>we</span> <span m='48470'>talked</span>
  <span m='48700'>about</span> <span m='49080'>high-precision</span> <span
  m='49830'>arithmetic,</span> <span m='51060'>and</span> <span
  m='51290'>we</span> <span m='51410'>use</span> <span m='51730'>Newton's</span>
  <span m='52100'>method</span> <span m='53180'>to</span> <span
  m='53570'>compute</span> <span m='53950'>the</span> <span
  m='54020'>square</span> <span m='54310'>roots.</span> </p><p><span
  m='55960'>You</span> <span m='56150'>saw a</span> <span m='56370'>demo</span>
  <span m='57430'>of</span> <span m='57610'>computing</span> <span
  m='58210'>square</span> <span m='58580'>roots,</span> <span
  m='59010'>but</span> <span m='60320'>there's</span> <span m='60630'>a</span>
  <span m='60710'>few</span> <span m='60880'>things</span> <span
  m='61110'>missing.</span> <span m='62100'>We</span> <span
  m='62240'>don't</span> <span m='62420'>quite</span> <span
  m='62770'>know</span> <span m='63670'>how</span> <span m='63930'>to</span>
  <span m='64099'>do</span> <span m='64590'>division,</span> <span
  m='65590'>which</span> <span m='65840'>is</span> <span
  m='65960'>required</span> <span m='66430'>for</span> <span
  m='66530'>the</span> <span m='66640'>Newton's</span> <span
  m='67010'>method,</span> <span m='68040'>and</span> <span m='69110'>we</span>
  <span m='69330'>didn't</span> <span m='69490'>really</span> <span
  m='69700'>talk</span> <span m='70100'>at</span> <span m='70180'>all</span>
  <span m='71020'>about</span> <span m='71390'>algorithmic</span> <span
  m='71940'>complexity</span> <span m='73680'>beyond</span> <span
  m='74670'>talking</span> <span m='74970'>about</span> <span
  m='75360'>the</span> <span m='75440'>complexity</span> <span
  m='75930'>of</span> <span m='76000'>multiplication.</span> <span
  m='77520'>So</span> <span m='77650'>multiplication</span> <span
  m='78280'>is</span> <span m='78390'>a</span> <span m='78460'>primitive</span>
  <span m='79020'>that</span> <span m='79800'>at</span> <span
  m='79930'>this</span> <span m='80080'>point</span> <span m='80370'>we</span>
  <span m='80460'>know</span> <span m='80620'>how</span> <span
  m='80740'>to</span> <span m='80850'>do</span> <span m='81560'>in</span> <span
  m='81730'>a</span> <span m='81930'>couple</span> <span m='82110'>of</span>
  <span m='82190'>different</span> <span m='82470'>ways,</span> <span
  m='84180'>including</span> <span m='84490'>the</span> <span
  m='84610'>naive</span> <span m='85240'>order</span> <span m='85550'>n</span>
  <span m='85680'>squared</span> <span m='86050'>algorithm</span> <span
  m='86540'>and</span> <span m='86670'>the</span> <span
  m='86760'>Karatsuba</span> <span m='87290'>algorithm,</span> <span
  m='87930'>which</span> <span m='88020'>is</span> <span
  m='88590'>something</span> <span m='88900'>like</span> <span
  m='89130'>n</span> <span m='89360'>raised</span> <span m='89620'>to</span>
  <span m='89720'>1.58.</span> </p><p><span m='91370'>But</span> <span
  m='92000'>how</span> <span m='92170'>many</span> <span m='92380'>times</span>
  <span m='92940'>is</span> <span m='93120'>multiplication</span> <span
  m='94040'>called</span> <span m='95420'>when</span> <span m='95570'>you</span>
  <span m='95680'>compute</span> <span m='96040'>square</span> <span
  m='96380'>roots?</span> <span m='97500'>In</span> <span m='97630'>fact,</span>
  <span m='98170'>multiplication</span> <span m='99040'>is</span> <span
  m='99460'>called</span> <span m='100310'>when</span> <span
  m='100420'>you</span> <span m='100520'>call</span> <span m='101110'>the</span>
  <span m='101310'>division</span> <span m='102510'>operator</span> <span
  m='103290'>when</span> <span m='103400'>you</span> <span
  m='103500'>compute</span> <span m='103830'>square</span> <span
  m='104120'>roots.</span> <span m='104390'>So</span> <span
  m='104600'>there's</span> <span m='104830'>really</span> <span
  m='105200'>two</span> <span m='105330'>levels</span> <span
  m='106430'>off</span> <span m='106860'>a</span> <span
  m='107010'>computation</span> <span m='107680'>going</span> <span
  m='107890'>on</span> <span m='108070'>here</span> <span m='108510'>and</span>
  <span m='108710'>we</span> <span m='108790'>need</span> <span
  m='108950'>to</span> <span m='109020'>open</span> <span m='109290'>this</span>
  <span m='109480'>up,</span> <span m='110090'>and</span> <span
  m='110290'>look</span> <span m='110450'>at</span> <span m='110520'>in</span>
  <span m='110780'>detail,</span> <span m='111850'>and</span> <span
  m='112010'>figure</span> <span m='112280'>out</span> <span
  m='112670'>what</span> <span m='112950'>our</span> <span
  m='113170'>overall</span> <span m='113790'>algorithmic</span> <span
  m='114290'>complexity</span> <span m='114880'>is.</span> <span
  m='115500'>So</span> <span m='115620'>that's</span> <span
  m='115840'>really</span> <span m='116100'>the</span> <span
  m='117920'>meat</span> <span m='118190'>of</span> <span
  m='118290'>today's</span> <span m='118580'>lecture.</span> <span
  m='120800'>Getting</span> <span m='121140'>to</span> <span
  m='121250'>the</span> <span m='121370'>point</span> <span
  m='121670'>where</span> <span m='121910'>we</span> <span
  m='122020'>know</span> <span m='124020'>what</span> <span m='124230'>we</span>
  <span m='124350'>have</span> <span m='125030'>with</span> <span
  m='125200'>respect</span> <span m='125550'>to</span> <span
  m='125620'>asymptotic</span> <span m='126240'>complexity</span> <span
  m='127580'>of</span> <span m='127950'>computing</span> <span
  m='128740'>the</span> <span m='128840'>square</span> <span
  m='129160'>root</span> <span m='129270'>of</span> <span m='129370'>a</span>
  <span m='129419'>number.</span> </p><p><span m='130979'>So</span> <span
  m='131150'>let</span> <span m='131250'>me</span> <span m='131350'>start</span>
  <span m='131650'>with</span> <span m='131780'>a</span> <span
  m='131810'>review</span> <span m='134580'>of</span> <span
  m='134710'>what</span> <span m='134860'>we</span> <span
  m='134990'>covered</span> <span m='135260'>last</span> <span
  m='135520'>time.</span> <span m='138460'>We</span> <span
  m='138580'>decided</span> <span m='139030'>that</span> <span
  m='139340'>we</span> <span m='139460'>wanted</span> <span
  m='141240'>the</span> <span m='141360'>millionth</span> <span
  m='143196'>digit</span> <span m='144230'>of</span> <span
  m='144660'>square</span> <span m='145070'>root</span> <span
  m='145170'>of</span> <span m='145280'>2.</span> <span m='146350'>And</span>
  <span m='146640'>the</span> <span m='146710'>way we're</span> <span
  m='146940'>going</span> <span m='147070'>to</span> <span m='147430'>do</span>
  <span m='147560'>this</span> <span m='147870'>is</span> <span
  m='148020'>by</span> <span m='148180'>working</span> <span
  m='148550'>with</span> <span m='148710'>integers</span> <span
  m='150270'>and</span> <span m='152370'>computing</span> <span
  m='154040'>the</span> <span m='154210'>floor,</span> <span
  m='155280'>since</span> <span m='155500'>we</span> <span
  m='155600'>needed</span> <span m='155880'>to</span> <span m='155950'>be</span>
  <span m='156100'>an</span> <span m='156190'>integer,</span> <span
  m='158670'>of</span> <span m='159620'>2</span> <span m='159870'>times</span>
  <span m='161280'>10</span> <span m='161540'>raised</span> <span
  m='161810'>to</span> <span m='161960'>2d,</span> <span m='163470'>where</span>
  <span m='163960'>d</span> <span m='164530'>is</span> <span
  m='164750'>the</span> <span m='164890'>number</span> <span
  m='165160'>of</span> <span m='165270'>digits</span> <span m='165710'>of</span>
  <span m='165830'>precision.</span> <span m='173940'>N</span> <span
  m='174270'>over</span> <span m='174440'>there.</span> </p><p><span
  m='176570'>So</span> <span m='179090'>we'll</span> <span
  m='179260'>take</span> <span m='179410'>a</span> <span m='179450'>look</span>
  <span m='179580'>at</span> <span m='180100'>an</span> <span
  m='180320'>example</span> <span m='180850'>or</span> <span
  m='180940'>two</span> <span m='181080'>here</span> <span m='181580'>as</span>
  <span m='181740'>to</span> <span m='181830'>how</span> <span
  m='182020'>this</span> <span m='182190'>works</span> <span
  m='182780'>with</span> <span m='183390'>integers.</span> <span
  m='184510'>But</span> <span m='184810'>what</span> <span m='185020'>we</span>
  <span m='185150'>do</span> <span m='185540'>is</span> <span
  m='185910'>compute</span> <span m='190290'>essentially</span> <span
  m='190720'>the</span> <span m='190820'>floor</span> <span m='192180'>of</span>
  <span m='192310'>some</span> <span m='193330'>quantity</span> <span
  m='193770'>a,</span> <span m='193890'>the</span> <span
  m='194010'>square</span> <span m='194300'>root</span> <span
  m='194400'>of</span> <span m='194470'>some</span> <span
  m='194640'>quantity</span> <span m='195100'>a,</span> <span
  m='195930'>via</span> <span m='196470'>Newton's</span> <span
  m='196870'>method.</span> <span m='207170'>And</span> <span
  m='207730'>the</span> <span m='207810'>way</span> <span
  m='207950'>Newton's</span> <span m='208280'>method</span> <span
  m='208570'>works</span> <span m='209220'>is</span> <span m='210130'>you</span>
  <span m='210260'>go</span> <span m='210400'>through</span> <span
  m='210560'>an</span> <span m='210670'>iteration.</span> <span
  m='212280'>You</span> <span m='212390'>start</span> <span
  m='212750'>with</span> <span m='212920'>x0</span> <span
  m='213550'>being</span> <span m='213960'>one,</span> <span
  m='215030'>which</span> <span m='215200'>is</span> <span
  m='215350'>your</span> <span m='215470'>initial</span> <span
  m='215880'>guess,</span> <span m='219460'>and</span> <span
  m='220830'>compute</span> <span m='221340'>xi</span> <span
  m='221760'>plus</span> <span m='222010'>1</span> <span
  m='223240'>equals</span> <span m='224860'>xi</span> <span
  m='225920'>plus</span> <span m='226240'>a</span> <span
  m='226800'>divided</span> <span m='227150'>by</span> <span
  m='227330'>xi</span> <span m='228620'>over</span> <span m='228890'>2.</span>
  <span m='230980'>And</span> <span m='231360'>as</span> <span
  m='231440'>you</span> <span m='231530'>can</span> <span m='231610'>see,</span>
  <span m='231780'>this</span> <span m='231950'>requires</span> <span
  m='232320'>division,</span> <span m='232740'>because</span> <span
  m='233010'>we're</span> <span m='233140'>computing</span> <span
  m='233590'>a</span> <span m='233760'>divided</span> <span m='234070'>by</span>
  <span m='234240'>xi.</span> <span m='235130'>That's</span> <span
  m='235420'>the</span> <span m='235940'>outer</span> <span
  m='236890'>Newton</span> <span m='237250'>iteration.</span> </p><p><span
  m='238380'>And</span> <span m='243510'>I</span> <span m='243610'>said</span>
  <span m='243780'>a</span> <span m='243820'>couple</span> <span
  m='244060'>of</span> <span m='244140'>things</span> <span
  m='244480'>that's</span> <span m='244680'>said</span> <span
  m='245870'>you</span> <span m='246640'>are</span> <span
  m='246850'>going</span> <span m='247040'>to</span> <span
  m='247090'>have</span> <span m='247520'>a</span> <span
  m='247620'>quadratic</span> <span m='248350'>rate</span> <span
  m='248720'>of</span> <span m='248840'>convergence.</span> <span
  m='251260'>The</span> <span m='253690'>precision</span> <span
  m='254570'>with</span> <span m='254730'>respect</span> <span
  m='255060'>to</span> <span m='255120'>the</span> <span
  m='255200'>number</span> <span m='255460'>of</span> <span
  m='255620'>digits</span> <span m='257000'>is</span> <span
  m='257250'>going</span> <span m='257570'>to</span> <span
  m='257910'>increase</span> <span m='258870'>by</span> <span
  m='259070'>a</span> <span m='259140'>factor</span> <span m='259490'>of</span>
  <span m='259589'>2</span> <span m='260079'>every</span> <span
  m='260399'>iteration.</span> <span m='262680'>And</span> <span
  m='262870'>so</span> <span m='262980'>if you</span> <span
  m='263160'>started</span> <span m='263470'>out</span> <span
  m='263680'>with</span> <span m='264050'>one</span> <span
  m='264290'>digit</span> <span m='264450'>of</span> <span
  m='264550'>precision,</span> <span m='264960'>you</span> <span
  m='265050'>go</span> <span m='265160'>to</span> <span m='265510'>two,
  then</span> <span m='265700'>four,</span> <span m='267100'>eight,</span> <span
  m='267370'>et</span> <span m='267550'>cetera.</span> <span
  m='268320'>And</span> <span m='268460'>so</span> <span
  m='268530'>that's</span> <span m='268730'>a</span> <span
  m='268780'>geometric</span> <span m='269250'>progression.</span> <span
  m='270290'>And</span> <span m='272030'>that</span> <span
  m='272270'>means</span> <span m='272560'>that</span> <span
  m='273120'>we're</span> <span m='273230'>going</span> <span
  m='273350'>to</span> <span m='273390'>have</span> <span m='275250'>a</span>
  <span m='275310'>logarithmic</span> <span m='275960'>number</span> <span
  m='276210'>of</span> <span m='276300'>iterations,</span> <span
  m='277070'>which</span> <span m='277250'>is</span> <span
  m='277370'>nice.</span> <span m='279550'>And</span> <span m='281040'>we</span>
  <span m='281160'>were</span> <span m='281270'>all</span> <span
  m='281370'>happy</span> <span m='281620'>about</span> <span
  m='281810'>that,</span> <span m='282910'>and</span> <span
  m='283060'>you</span> <span m='283160'>believed</span> <span
  m='283500'>me.</span> <span m='285340'>I</span> <span m='285490'>gave</span>
  <span m='285680'>you</span> <span m='285760'>an</span> <span
  m='285820'>example</span> <span m='286450'>and</span> <span
  m='286840'>it</span> <span m='286970'>looked</span> <span
  m='287140'>pretty</span> <span m='287330'>good,</span> <span
  m='287740'>but</span> <span m='287970'>didn't</span> <span
  m='288190'>really</span> <span m='288410'>prove</span> <span
  m='290170'>anything</span> <span m='290650'>about</span> <span
  m='291010'>the</span> <span m='291350'>rate</span> <span m='291600'>of</span>
  <span m='291680'>convergence.</span> </p><p><span m='292890'>What</span> <span
  m='293030'>I'd</span> <span m='293100'>like</span> <span m='293260'>to</span>
  <span m='293340'>do</span> <span m='293460'>now</span> <span
  m='293690'>is</span> <span m='293990'>take</span> <span m='294170'>a</span>
  <span m='294220'>look</span> <span m='294460'>at</span> <span
  m='295230'>this</span> <span m='295520'>particular</span> <span
  m='299480'>iterative</span> <span m='299910'>computation,</span> <span
  m='300245'>where</span> <span m='300580'>we're</span> <span
  m='300870'>computing</span> <span m='301310'>xi</span> <span
  m='301680'>plus</span> <span m='301920'>1</span> <span m='302220'>given</span>
  <span m='302450'>xi ,</span> <span m='303390'>and</span> <span
  m='303560'>argue</span> <span m='304550'>that</span> <span
  m='304760'>this,</span> <span m='304910'>in</span> <span
  m='305040'>fact,</span> <span m='305990'>has</span> <span m='306200'>a</span>
  <span m='306290'>quadratic</span> <span m='306820'>rate</span> <span
  m='307030'>of</span> <span m='307120'>convergence.</span> <span
  m='310060'>So</span> <span m='311550'>you</span> <span m='311650'>can</span>
  <span m='311750'>think</span> <span m='311890'>of</span> <span
  m='312020'>this</span> <span m='312280'>as</span> <span
  m='312790'>doing</span> <span m='313110'>an</span> <span
  m='313310'>error</span> <span m='313640'>analysis</span> <span
  m='317530'>of</span> <span m='318020'>Newton's</span> <span
  m='318410'>method.</span> </p><p><span m='326310'>And</span> <span
  m='327570'>let's</span> <span m='327750'>say</span> <span
  m='327910'>that</span> <span m='329360'>xn</span> <span
  m='329990'>equals</span> <span m='330450'>square</span> <span
  m='330780'>root</span> <span m='330920'>of</span> <span m='331080'>a</span>
  <span m='332000'>1</span> <span m='332360'>plus</span> <span
  m='334410'>epsilon</span> <span m='334960'>n,</span> <span
  m='336040'>where</span> <span m='336320'>epsilon</span> <span m='336820'>may
  be</span> <span m='339360'>positive</span> <span m='339830'>or</span> <span
  m='340020'>negative.</span> <span m='342370'>So</span> <span
  m='343720'>we</span> <span m='343880'>have</span> <span m='344550'>an</span>
  <span m='344730'>error</span> <span m='345090'>associated</span> <span
  m='345730'>with</span> <span m='347290'>xn</span> <span m='348080'>in
  the</span> <span m='348230'>n-th</span> <span m='348310'>iteration</span>
  <span m='349350'>with</span> <span m='349500'>respect</span> <span
  m='349800'>to</span> <span m='349890'>what</span> <span m='350090'>we</span>
  <span m='350180'>want,</span> <span m='350710'>which</span> <span
  m='350790'>is</span> <span m='351180'>the</span> <span
  m='351260'>square</span> <span m='351610'>root</span> <span
  m='351690'>of</span> <span m='351820'>a.</span> <span m='352800'>And</span>
  <span m='353090'>it's</span> <span m='353220'>off</span> <span
  m='353450'>by</span> <span m='354180'>something.</span> <span
  m='354570'>It</span> <span m='354640'>may</span> <span m='354750'>be a</span>
  <span m='354890'>large</span> <span m='355210'>quantity</span> <span
  m='355700'>in</span> <span m='355750'>the</span> <span
  m='355820'>beginning.</span> <span m='356720'>We</span> <span
  m='356970'>want</span> <span m='357070'>to</span> <span m='357110'>show</span>
  <span m='357300'>convergence,</span> <span m='358200'>so</span> <span
  m='358330'>obviously</span> <span m='358650'>we</span> <span
  m='358740'>want</span> <span m='359360'>epsilon</span> <span
  m='360100'>n,</span> <span m='360500'>as</span> <span m='360740'>n</span>
  <span m='361510'>becomes</span> <span m='361880'>large,</span> <span
  m='362800'>do</span> <span m='362920'>tend</span> <span m='363200'>to</span>
  <span m='363260'>0.</span> <span m='364210'>How</span> <span
  m='364400'>fast</span> <span m='364830'>does</span> <span
  m='364970'>this</span> <span m='365180'>approach</span> <span
  m='365500'>0?</span> <span m='366620'>That's</span> <span
  m='366820'>the</span> <span m='366900'>question.</span> </p><p><span
  m='368900'>And</span> <span m='369070'>so</span> <span m='369150'>if</span>
  <span m='369230'>you</span> <span m='369780'>take</span> <span
  m='370080'>this</span> <span m='370240'>equation</span> <span
  m='371820'>and</span> <span m='372750'>plug</span> <span
  m='373160'>this</span> <span m='373410'>into</span> <span
  m='373600'>that,</span> <span m='374130'>and</span> <span
  m='374280'>say,</span> <span m='374560'>what</span> <span m='374850'>is</span>
  <span m='375090'>xn</span> <span m='375570'>plus</span> <span
  m='375780'>1?</span> <span m='377410'>xn</span> <span m='377890'>plus</span>
  <span m='377980'>1</span> <span m='380320'>would</span> <span
  m='380500'>be</span> <span m='384170'>square</span> <span
  m='384520'>root</span> <span m='384630'>of</span> <span m='384790'>a</span>
  <span m='386260'>times</span> <span m='386590'>1</span> <span
  m='386840'>plus</span> <span m='387020'>epsilon</span> <span
  m='387420'>n</span> <span m='389040'>plus</span> <span m='389490'>a</span>
  <span m='389740'>divided</span> <span m='390180'>by</span> <span
  m='391830'>square</span> <span m='392200'>root</span> <span
  m='392320'>of</span> <span m='392450'>a</span> <span m='392940'>1</span> <span
  m='393150'>plus</span> <span m='393390'>epsilon</span> <span
  m='393760'>n</span> <span m='396270'>divided</span> <span m='396710'>by</span>
  <span m='398510'>2.</span> <span m='399990'>Just</span> <span
  m='400260'>plugging</span> <span m='400590'>it</span> <span
  m='400650'>in,</span> <span m='401360'>the</span> <span
  m='401510'>value</span> <span m='401850'>of</span> <span m='401960'>xn.</span>
  <span m='403130'>And</span> <span m='403280'>then</span> <span
  m='403690'>some</span> <span m='404936'>a</span> <span
  m='405360'>couple</span> <span m='405650'>of</span> <span
  m='405710'>steps</span> <span m='405980'>of</span> <span
  m='406090'>algebraic</span> <span m='406530'>simplification,</span> <span
  m='407990'>you</span> <span m='408130'>can</span> <span m='408250'>pull</span>
  <span m='408560'>out</span> <span m='408890'>the</span> <span
  m='408950'>square</span> <span m='409260'>root</span> <span
  m='409360'>of</span> <span m='409480'>a</span> <span m='409650'>here,</span>
  <span m='410830'>then</span> <span m='410950'>you</span> <span
  m='411070'>have</span> <span m='411230'>1</span> <span m='411440'>plus</span>
  <span m='411650'>epsilon</span> <span m='412020'>n,</span> <span
  m='416070'>1</span> <span m='416290'>divided</span> <span m='416700'>by</span>
  <span m='418030'>1</span> <span m='418260'>plus</span> <span
  m='418310'>epsilon</span> <span m='418500'>n</span> <span
  m='419060'>over</span> <span m='419210'>here.</span> <span
  m='421170'>The</span> <span m='421260'>whole</span> <span
  m='421450'>thing</span> <span m='422470'>divided</span> <span
  m='422760'>by</span> <span m='422910'>2.</span> </p><p><span
  m='424650'>And</span> <span m='427090'>if</span> <span m='427220'>you</span>
  <span m='427310'>keep</span> <span m='427520'>going--</span> <span
  m='430080'>there's</span> <span m='430260'>one</span> <span
  m='430460'>step</span> <span m='430800'>that</span> <span
  m='430910'>I'm</span> <span m='430990'>skipping</span> <span
  m='431330'>here</span> <span m='432730'>in</span> <span
  m='432860'>terms</span> <span m='433070'>of</span> <span
  m='433160'>simplification,</span> <span m='434470'>but</span> <span
  m='436670'>let</span> <span m='436750'>me</span> <span m='436850'>write</span>
  <span m='437080'>this</span> <span m='438200'>last</span> <span
  m='438670'>result</span> <span m='439080'>out.</span> <span
  m='444590'>Which</span> <span m='444760'>is</span> <span m='444900'>xn</span>
  <span m='445090'>plus</span> <span m='445380'>1</span> <span
  m='446090'>is</span> <span m='446250'>square</span> <span
  m='446530'>root</span> <span m='446600'>of</span> <span m='446740'>a</span>
  <span m='451460'>times</span> <span m='452180'>1</span> <span
  m='452560'>plus</span> <span m='455230'>epsilon</span> <span
  m='456140'>n</span> <span m='456420'>squared</span> <span
  m='456920'>divided</span> <span m='457220'>by</span> <span m='457900'>2</span>
  <span m='459160'>times</span> <span m='459560'>1</span> <span
  m='459760'>plus</span> <span m='460470'>epsilon</span> <span
  m='460930'>n</span> <span m='461370'>down</span> <span m='461560'>at</span>
  <span m='461610'>the</span> <span m='461680'>bottom.</span> </p><p><span
  m='463370'>So</span> <span m='464040'>what</span> <span m='464240'>do</span>
  <span m='464290'>we</span> <span m='464400'>have</span> <span
  m='464650'>here</span> <span m='465510'>in</span> <span
  m='465740'>terms</span> <span m='466060'>of</span> <span m='466290'>the</span>
  <span m='466400'>overall</span> <span m='471070'>observation</span> <span
  m='471990'>for</span> <span m='472900'>epsilon</span> <span
  m='473330'>n</span> <span m='473580'>plus</span> <span m='473840'>1,</span>
  <span m='474780'>which</span> <span m='474970'>is</span> <span
  m='475090'>the</span> <span m='475170'>error</span> <span m='475580'>in</span>
  <span m='475730'>the</span> <span m='475800'>n</span> <span
  m='475980'>plus</span> <span m='476230'>1-th</span> <span
  m='476560'>iteration</span> <span m='477510'>given</span> <span
  m='478490'>that</span> <span m='478620'>you</span> <span
  m='478710'>have</span> <span m='478880'>an</span> <span
  m='478960'>epsilon</span> <span m='479380'>n</span> <span
  m='479700'>error</span> <span m='480090'>in</span> <span m='480360'>the</span>
  <span m='480620'>n-th</span> <span m='480880'>iteration?</span> <span
  m='482100'>You</span> <span m='482240'>have</span> <span m='483600'>a</span>
  <span m='484030'>relationship</span> <span m='484900'>like</span> <span
  m='485170'>so</span> <span m='488120'>where</span> <span
  m='488520'>epsilon</span> <span m='488990'>n</span> <span
  m='489190'>plus</span> <span m='489400'>1</span> <span m='489920'>is</span>
  <span m='490450'>related</span> <span m='490900'>to</span> <span
  m='491540'>epsilon</span> <span m='491980'>n</span> <span
  m='492320'>whole</span> <span m='492620'>square.</span> <span
  m='493630'>And</span> <span m='493900'>this</span> <span
  m='494060'>part</span> <span m='494300'>here,</span> <span
  m='495210'>as</span> <span m='496730'>n</span> <span m='496920'>becomes</span>
  <span m='497210'>large,</span> <span m='497920'>epsilon</span> <span
  m='498180'>n</span> <span m='499160'>is</span> <span m='500010'>going</span>
  <span m='500180'>to</span> <span m='500220'>go</span> <span
  m='500350'>to</span> <span m='500420'>0</span> <span
  m='501010'>assuming</span> <span m='501720'>a</span> <span
  m='501810'>decent</span> <span m='502130'>initial</span> <span
  m='502510'>guess.</span> </p><p><span m='504140'>And</span> <span
  m='504330'>so</span> <span m='505130'>you</span> <span m='505280'>can</span>
  <span m='505400'>say</span> <span m='505640'>that</span> <span
  m='505820'>this</span> <span m='506040'>is</span> <span
  m='506550'>essentially</span> <span m='507020'>1,</span> <span
  m='508660'>which</span> <span m='508810'>means</span> <span
  m='509520'>you</span> <span m='509630'>have</span> <span
  m='510000'>this</span> <span m='510180'>quadratic</span> <span
  m='511360'>rate</span> <span m='511610'>of</span> <span
  m='511690'>convergence</span> <span m='512789'>where</span> <span
  m='513750'>the</span> <span m='513880'>error,</span> <span
  m='515659'>which</span> <span m='515870'>is</span> <span m='515990'>a</span>
  <span m='516049'>small</span> <span m='516360'>quantity,</span> <span
  m='517340'>is</span> <span m='517630'>getting</span> <span
  m='517820'>squared</span> <span m='518490'>at</span> <span
  m='518710'>every</span> <span m='518860'>iteration.</span> <span
  m='520159'>And</span> <span m='520340'>so</span> <span m='520460'>if</span>
  <span m='520510'>you</span> <span m='520610'>have</span> <span
  m='520770'>something</span> <span m='521080'>like</span> <span
  m='521350'>a</span> <span m='521440'>0.01</span> <span m='523200'>error</span>
  <span m='523530'>at</span> <span m='523640'>the</span> <span
  m='523700'>beginning</span> <span m='524190'>for</span> <span
  m='524380'>epsilon</span> <span m='524780'>n,</span> <span
  m='525580'>epsilon</span> <span m='526000'>n</span> <span
  m='526190'>squared</span> <span m='526640'>is</span> <span
  m='526750'>going</span> <span m='526880'>to</span> <span m='526930'>be</span>
  <span m='527100'>0.0001.</span> <span m='535040'>So</span> <span
  m='535190'>that's</span> <span m='535790'>where</span> <span
  m='535950'>you</span> <span m='536050'>get</span> <span m='536220'>the</span>
  <span m='536310'>quadratic</span> <span m='536730'>rate</span> <span
  m='536900'>of</span> <span m='536990'>convergence.</span> <span
  m='538840'>So</span> <span m='538980'>it</span> <span m='539090'>really</span>
  <span m='539290'>comes</span> <span m='539580'>from</span> <span
  m='540430'>this</span> <span m='540710'>relationship,</span> <span
  m='541890'>the</span> <span m='542040'>relationship</span> <span
  m='542560'>epsilon</span> <span m='543040'>n</span> <span
  m='543270'>squared</span> <span m='544160'>to</span> <span
  m='544660'>epsilon</span> <span m='545070'>n</span> <span
  m='545180'>plus</span> <span m='545390'>1,</span> <span m='546530'>Any</span>
  <span m='546720'>questions</span> <span m='547070'>about</span> <span
  m='547280'>this?</span> </p><p><span m='552010'>Great.</span> <span
  m='552780'>So</span> <span m='554780'>if</span> <span m='554920'>you</span>
  <span m='555010'>have</span> <span m='555220'>the</span> <span
  m='555290'>quadratic</span> <span m='555680'>rate of</span> <span
  m='555920'>convergence,</span> <span m='557160'>if</span> <span
  m='557290'>you</span> <span m='557390'>want</span> <span m='557580'>to</span>
  <span m='557650'>go</span> <span m='558000'>to</span> <span
  m='558280'>d</span> <span m='558560'>digits</span> <span m='558960'>of</span>
  <span m='559040'>precision</span> <span m='559550'>like</span> <span
  m='559770'>I</span> <span m='559830'>have</span> <span m='560090'>here,</span>
  <span m='567610'>you</span> <span m='567700'>can</span> <span
  m='567820'>argue</span> <span m='568170'>that</span> <span
  m='568670'>you</span> <span m='568800'>need</span> <span m='569080'>to</span>
  <span m='570090'>log</span> <span m='570470'>d</span> <span
  m='571370'>iterations.</span> <span m='575670'>So</span> <span
  m='575820'>that's</span> <span m='576000'>kind</span> <span
  m='576110'>of</span> <span m='576170'>nice,</span> <span m='576580'>you
  have</span> <span m='577030'>a</span> <span m='577100'>logarithmic</span>
  <span m='577580'>number</span> <span m='577820'>of</span> <span
  m='577870'>iterations.</span> <span m='578650'>I'm</span> <span
  m='578750'>going</span> <span m='578840'>to</span> <span m='578880'>get</span>
  <span m='579020'>back</span> <span m='579220'>to</span> <span
  m='579290'>that.</span> <span m='580540'>There's</span> <span
  m='580720'>one</span> <span m='580970'>little</span> <span
  m='581210'>subtlety</span> <span m='581770'>that</span> <span
  m='582710'>is</span> <span m='584510'>associated</span> <span
  m='585030'>with</span> <span m='585350'>asymptotic</span> <span
  m='585910'>analysis</span> <span m='586440'>that</span> <span
  m='586590'>goes</span> <span m='586820'>beyond</span> <span
  m='587700'>simply</span> <span m='588610'>the</span> <span
  m='588700'>number</span> <span m='588920'>of</span> <span
  m='589010'>iterations</span> <span m='590160'>that</span> <span
  m='590310'>you</span> <span m='590430'>have</span> <span m='591510'>and</span>
  <span m='591770'>the</span> <span m='591890'>digits</span> <span
  m='592330'>of</span> <span m='592430'>precision.</span> <span
  m='593300'>But</span> <span m='593890'>so</span> <span m='594060'>far</span>
  <span m='594230'>so</span> <span m='594380'>good.</span> </p><p><span
  m='595370'>We're</span> <span m='595750'>happy</span> <span
  m='596090'>with</span> <span m='596860'>this</span> <span
  m='597050'>logarithmic</span> <span m='597520'>number</span> <span
  m='597730'>of</span> <span m='597810'>iterations.</span> <span
  m='598490'>And</span> <span m='598700'>if</span> <span m='598800'>we</span>
  <span m='598900'>can</span> <span m='599040'>now</span> <span
  m='600110'>compute</span> <span m='601700'>the</span> <span
  m='601870'>complexity</span> <span m='603570'>of</span> <span
  m='603960'>the</span> <span m='604070'>division,</span> <span
  m='608020'>then</span> <span m='609220'>obviously</span> <span
  m='609570'>we</span> <span m='609660'>need</span> <span m='609790'>an</span>
  <span m='609960'>algorithm</span> <span m='610200'>for</span> <span
  m='610320'>that.</span> <span m='610930'>But</span> <span m='611200'>if</span>
  <span m='611300'>you</span> <span m='611360'>have</span> <span
  m='611510'>an</span> <span m='611570'>algorithm</span> <span
  m='612100'>and</span> <span m='612120'>we</span> <span
  m='612780'>figure</span> <span m='613020'>out</span> <span
  m='613130'>what</span> <span m='613260'>the</span> <span
  m='613340'>complexity</span> <span m='613910'>of</span> <span
  m='614230'>the</span> <span m='614380'>division</span> <span
  m='614760'>algorithm</span> <span m='615140'>is,</span> <span
  m='615990'>then</span> <span m='616910'>we</span> <span m='617070'>have</span>
  <span m='617230'>complexity</span> <span m='617730'>for</span> <span
  m='618700'>the</span> <span m='618830'>square</span> <span
  m='619130'>root</span> <span m='619220'>of</span> <span m='620290'>2</span>
  <span m='620520'>or</span> <span m='620630'>square</span> <span
  m='620850'>root</span> <span m='620970'>of</span> <span m='621090'>a</span>
  <span m='621816'>using</span> <span m='622180'>Newton's</span> <span
  m='622490'>method.</span> </p><p><span m='625540'>So</span> <span
  m='627250'>just</span> <span m='627410'>justified</span> <span
  m='628650'>what</span> <span m='628870'>I</span> <span m='628940'>said</span>
  <span m='629190'>last</span> <span m='629460'>time</span> <span
  m='629940'>with</span> <span m='630060'>respect</span> <span
  m='630450'>to</span> <span m='631110'>quadratic</span> <span
  m='631580'>rate</span> <span m='631770'>of</span> <span
  m='631860'>convergence.</span> <span m='633000'>And</span> <span
  m='633050'>then</span> <span m='633650'>we</span> <span
  m='633780'>talked</span> <span m='633990'>about</span> <span
  m='634170'>multiplication</span> <span m='634840'>last</span> <span
  m='635120'>time.</span> <span m='636140'>I</span> <span m='636280'>want</span>
  <span m='636470'>to</span> <span m='637150'>revisit</span> <span
  m='637700'>that.</span> <span m='639460'>You</span> <span
  m='639610'>have</span> <span m='645097'>multiplication</span> <span
  m='646050'>algorithms,</span> <span m='650090'>and</span> <span
  m='650250'>we</span> <span m='650360'>want</span> <span m='650760'>to</span>
  <span m='650820'>be</span> <span m='650960'>able</span> <span
  m='651140'>to</span> <span m='652020'>multiply</span> <span
  m='654110'>d</span> <span m='654470'>digit</span> <span
  m='654870'>numbers.</span> <span m='659090'>And</span> <span
  m='659430'>the</span> <span m='659560'>naive</span> <span
  m='660125'>algorithm.</span> <span m='661560'>And</span> <span
  m='661680'>you</span> <span m='661780'>could</span> <span
  m='661870'>imagine</span> <span m='662220'>doing</span> <span
  m='665170'>divide</span> <span m='665440'>and</span> <span
  m='665590'>conquer.</span> <span m='670690'>So</span> <span
  m='671690'>you</span> <span m='671850'>take</span> <span m='672190'>x1,</span>
  <span m='672890'>x0;</span> <span m='674550'>y1,</span> <span
  m='675260'>y0</span> <span m='676970'>where</span> <span m='677330'>x1</span>
  <span m='677870'>is</span> <span m='678090'>the</span> <span
  m='678190'>most</span> <span m='678470'>significant</span> <span
  m='679020'>half</span> <span m='679880'>of</span> <span m='680100'>x.</span>
  <span m='681170'>You're</span> <span m='681350'>trying</span> <span
  m='681530'>to</span> <span m='681580'>multiply</span> <span
  m='682040'>x</span> <span m='682340'>times</span> <span m='682640'>y.</span>
  <span m='687880'>And</span> <span m='688300'>same</span> <span
  m='688530'>thing</span> <span m='688700'>for</span> <span m='688870'>y1</span>
  <span m='689340'>and</span> <span m='689430'>y0.</span> <span
  m='690970'>So</span> <span m='691160'>each</span> <span m='691370'>of</span>
  <span m='691440'>these</span> <span m='691650'>will</span> <span
  m='691760'>have</span> <span m='692020'>d</span> <span m='692150'>by</span>
  <span m='692420'>2,</span> <span m='694160'>digits</span> <span
  m='694300'>of</span> <span m='694550'>precision.</span> <span
  m='696100'>And</span> <span m='697060'>if</span> <span m='697220'>you</span>
  <span m='698030'>implement</span> <span m='699560'>the</span> <span
  m='699940'>naive</span> <span m='700270'>algorithm</span> <span
  m='700710'>that</span> <span m='700870'>looks</span> <span
  m='701170'>like</span> <span m='703890'>tn</span> <span
  m='704130'>equals</span> <span m='704480'>4</span> <span m='705690'>tn</span>
  <span m='705980'>by</span> <span m='706150'>2</span> <span
  m='706480'>plus</span> <span m='706980'>theta</span> <span
  m='707190'>n,</span> <span m='708730'>you</span> <span m='708850'>end</span>
  <span m='709050'>up</span> <span m='709220'>with</span> <span
  m='709430'>theta</span> <span m='709640'>n</span> <span
  m='709830'>squared</span> <span m='710220'>complexity</span> <span
  m='711410'>out</span> <span m='712940'>so</span> <span m='713070'>you</span>
  <span m='713220'>have</span> <span m='713380'>to</span> <span
  m='713480'>do</span> <span m='714080'>four</span> <span
  m='714400'>multiplications</span> <span m='715150'>corresponding</span> <span
  m='715690'>to</span> <span m='716500'>x1</span> <span m='716940'>times</span>
  <span m='717210'>Y1</span> <span m='717820'>x1</span> <span
  m='718010'>times</span> <span m='718250'>y0,</span> <span m='718720'>et</span>
  <span m='718850'>cetera.</span> </p><p><span m='719960'>And</span> <span
  m='720900'>at</span> <span m='721110'>each</span> <span
  m='721350'>level</span> <span m='721610'>in</span> <span m='721670'>the</span>
  <span m='721740'>recursive</span> <span m='722130'>tree,</span> <span
  m='722790'>you're</span> <span m='724710'>breaking</span> <span
  m='725160'>things</span> <span m='725400'>down</span> <span m='725650'>by
  a</span> <span m='725790'>factor</span> <span m='726100'>of</span> <span
  m='726180'>2</span> <span m='726530'>respect</span> <span m='726870'>to</span>
  <span m='726930'>the</span> <span m='727080'>digits</span> <span
  m='727510'>of</span> <span m='727620'>precision</span> <span
  m='728620'>that</span> <span m='728760'>you</span> <span
  m='728850'>need</span> <span m='729010'>to</span> <span
  m='729070'>multiply</span> <span m='729590'>on</span> <span
  m='730230'>as</span> <span m='730440'>you're</span> <span
  m='730860'>going</span> <span m='731080'>down</span> <span
  m='731330'>the</span> <span m='731430'>tree.</span> <span
  m='732140'>And</span> <span m='732530'>this</span> <span m='732710'>is</span>
  <span m='732830'>the</span> <span m='732920'>four</span> <span
  m='733110'>multiplications.</span> <span m='734200'>You</span> <span
  m='734310'>get</span> <span m='734460'>your</span> <span
  m='734550'>theta</span> <span m='734750'>n</span> <span
  m='734860'>squared</span> <span m='735140'>complexity.</span> <span
  m='736740'>This</span> <span m='736930'>gentleman</span> <span
  m='737280'>by</span> <span m='737410'>the</span> <span m='737710'>name</span>
  <span m='737920'>of</span> <span m='738000'>Karatsuba</span> <span
  m='739760'>recognized</span> <span m='740460'>that</span> <span
  m='741190'>you</span> <span m='741370'>could</span> <span
  m='741530'>play</span> <span m='741740'>a</span> <span m='741800'>few</span>
  <span m='742020'>mathematical</span> <span m='742590'>tricks,</span> <span
  m='744890'>which</span> <span m='745070'>I</span> <span
  m='745130'>won't</span> <span m='745370'>go</span> <span
  m='745470'>over</span> <span m='745690'>again,</span> <span
  m='746650'>but</span> <span m='747130'>reduce</span> <span
  m='749730'>to</span> <span m='750610'>three</span> <span
  m='750860'>multiplications.</span> <span m='752340'>And</span> <span
  m='752470'>you</span> <span m='752560'>do</span> <span m='754300'>a</span>
  <span m='754400'>few</span> <span m='754640'>more</span> <span
  m='754910'>additions,</span> <span m='756730'>but</span> <span
  m='757280'>given</span> <span m='757510'>that</span> <span
  m='757700'>the</span> <span m='757780'>additions</span> <span
  m='758240'>have</span> <span m='759250'>theta</span> <span m='759490'>n</span>
  <span m='759660'>complexity,</span> <span m='760820'>the</span> <span
  m='762360'>recurrence</span> <span m='762910'>relationship</span> <span
  m='764870'>turns</span> <span m='765420'>into</span> <span
  m='766790'>tn</span> <span m='767100'>equals</span> <span m='767830'>3t</span>
  <span m='769240'>of</span> <span m='769420'>n</span> <span
  m='769610'>over</span> <span m='769850'>2</span> <span m='770860'>plus</span>
  <span m='771100'>theta</span> <span m='771320'>n.</span> <span
  m='772920'>And</span> <span m='773260'>this</span> <span
  m='773410'>ends</span> <span m='773640'>up</span> <span
  m='774370'>having</span> <span m='775690'>1.58</span> <span m='778760'>dot
  dot</span> <span m='778920'>dot</span> <span m='779540'>complexity.</span>
  </p><p><span m='783030'>No</span> <span m='783210'>reason</span> <span
  m='783530'>to</span> <span m='783630'>stop</span> <span m='784120'>with</span>
  <span m='785710'>breaking</span> <span m='786160'>things</span> <span
  m='786430'>up</span> <span m='786720'>into</span> <span m='787030'>two</span>
  <span m='787250'>parts.</span> <span m='789470'>You</span> <span
  m='789640'>could</span> <span m='790490'>imagine</span> <span
  m='790910'>generalizing</span> <span m='791420'>Karatsuba</span> <span
  m='792960'>and</span> <span m='793190'>people</span> <span
  m='793470'>have</span> <span m='793770'>done</span> <span
  m='793980'>this.</span> <span m='798200'>Two</span> <span
  m='798300'>different</span> <span m='799810'>researchers,</span> <span
  m='800420'>Toom</span> <span m='800680'>and</span> <span
  m='800960'>Cook,</span> <span m='802860'>generalized</span> <span
  m='803490'>Karatsuba</span> <span m='805450'>for</span> <span
  m='805790'>the</span> <span m='805910'>case</span> <span
  m='806230'>where</span> <span m='807160'>k</span> <span m='807310'>is</span>
  <span m='807620'>greater</span> <span m='807820'>than</span> <span
  m='808440'>or</span> <span m='808550'>equal</span> <span m='808780'>to</span>
  <span m='809160'>2,</span> <span m='809220'>where you're</span> <span
  m='809340'>breaking</span> <span m='809690'>it</span> <span
  m='809820'>into</span> <span m='810030'>k</span> <span
  m='810240'>parts.</span> <span m='812020'>So</span> <span
  m='812210'>the</span> <span m='812350'>Toom-Cook</span> <span
  m='813830'>2</span> <span m='814040'>algorithm</span> <span
  m='814930'>is</span> <span m='815070'>basically</span> <span
  m='815700'>Karatsuba,</span> <span m='816800'>but</span> <span
  m='816960'>you</span> <span m='817060'>have</span> <span
  m='817310'>Toom</span> <span m='817590'>3,</span> <span m='817900'>Toom</span>
  <span m='818150'>4,</span> <span m='818500'>and</span> <span
  m='818610'>so</span> <span m='818830'>on.</span> <span m='819720'>And</span>
  <span m='820740'>I'm</span> <span m='820890'>not</span> <span
  m='821040'>going</span> <span m='821130'>to</span> <span
  m='821170'>give</span> <span m='821310'>you</span> <span m='822330'>a</span>
  <span m='822390'>lot</span> <span m='822590'>of</span> <span
  m='822670'>details</span> <span m='823060'>on</span> <span
  m='823456'>this.</span> <span m='824520'>We</span> <span
  m='824830'>don't</span> <span m='825450'>expect</span> <span
  m='825760'>you</span> <span m='826220'>to</span> <span m='827710'>work</span>
  <span m='827880'>on</span> <span m='828010'>this,</span> <span
  m='828180'>at</span> <span m='828290'>least</span> <span m='828460'>in</span>
  <span m='828550'>6006.</span> </p><p><span m='830190'>But</span> <span
  m='831610'>just</span> <span m='831980'>to</span> <span m='832060'>give</span>
  <span m='832190'>you</span> <span m='832310'>a</span> <span
  m='832370'>sense</span> <span m='832760'>of</span> <span
  m='833570'>what</span> <span m='833710'>happens,</span> <span
  m='835500'>the</span> <span m='835600'>Toom</span> <span m='836080'>3</span>
  <span m='836350'>method,</span> <span m='837690'>or</span> <span
  m='837840'>the</span> <span m='838840'>Toom-Cook</span> <span
  m='839230'>3</span> <span m='839530'>method,</span> <span
  m='840750'>breaks</span> <span m='842090'>and</span> <span
  m='842210'>number</span> <span m='842500'>up</span> <span
  m='842700'>into</span> <span m='842880'>three</span> <span
  m='843140'>parts.</span> <span m='844190'>So</span> <span
  m='844400'>each</span> <span m='844670'>of</span> <span
  m='844780'>these</span> <span m='845830'>would</span> <span
  m='845960'>have</span> <span m='846270'>d</span> <span m='846400'>by</span>
  <span m='847170'>3</span> <span m='848190'>digits</span> <span
  m='849680'>of</span> <span m='849985'>precision.</span> <span
  m='850290'>So</span> <span m='850400'>this</span> <span m='850490'>is</span>
  <span m='850570'>what</span> <span m='850720'>you're</span> <span
  m='850840'>starting</span> <span m='851200'>out</span> <span
  m='851400'>with.</span> <span m='852540'>You're</span> <span
  m='852680'>starting</span> <span m='852940'>out</span> <span
  m='853040'>with</span> <span m='853170'>a</span> <span m='853220'>d
  digit</span> <span m='853660'>number.</span> <span m='853980'>But</span> <span
  m='854130'>the</span> <span m='854190'>very</span> <span
  m='854400'>first</span> <span m='854710'>level</span> <span
  m='854990'>of</span> <span m='855060'>recursion,</span> <span
  m='855950'>you're</span> <span m='856070'>going</span> <span
  m='856160'>to</span> <span m='856200'>break</span> <span
  m='856450'>things</span> <span m='856680'>up</span> <span
  m='857200'>into</span> <span m='858800'>three</span> <span
  m='859370'>xi</span> <span m='859890'>numbers</span> <span
  m='860630'>that</span> <span m='860810'>are</span> <span m='860870'>d</span>
  <span m='861030'>by</span> <span m='861180'>3</span> <span
  m='861410'>digits</span> <span m='861760'>long.</span> <span m='862370'>Same
  thing</span> <span m='862730'>for</span> <span m='862840'>y.</span> <span
  m='863980'>And</span> <span m='864760'>if</span> <span m='864880'>you</span>
  <span m='864960'>did</span> <span m='865120'>a</span> <span
  m='865190'>naive</span> <span m='866110'>multiplication</span> <span
  m='866790'>of</span> <span m='866910'>this,</span> <span m='867820'>how</span>
  <span m='867930'>many</span> <span m='868080'>multiplications</span> <span
  m='868390'>do</span> <span m='868700'>I need?</span> <span m='871170'>If
  I</span> <span m='871240'>just</span> <span m='871780'>forget</span> <span
  m='872040'>about</span> <span m='872320'>any</span> <span
  m='873120'>mathematical</span> <span m='873380'>tricks,</span> <span
  m='874000'>if I</span> <span m='874120'>just</span> <span m='874320'>tried
  to</span> <span m='874510'>multiply</span> <span m='875450'>these</span> <span
  m='875860'>things</span> <span m='876090'>out,</span> <span
  m='878740'>how</span> <span m='878840'>many</span> <span m='879260'>d</span>
  <span m='879470'>by</span> <span m='879780'>3</span> <span
  m='881150'>by</span> <span m='881310'>d</span> <span m='881460'>by</span>
  <span m='881640'>3</span> <span m='882650'>multiplications</span> <span
  m='883160'>do I need?</span> </p><p><span m='883680'>AUDIENCE: Nine.</span>
  </p><p><span m='884740'>PROFESSOR: Nine.</span> <span m='886520'>So</span>
  <span m='886750'>if</span> <span m='886890'>you</span> <span
  m='887000'>can</span> <span m='887210'>beat</span> <span
  m='887470'>nine</span> <span m='888600'>using</span> <span
  m='888910'>mathematical</span> <span m='889510'>tricks,</span> <span
  m='890390'>you</span> <span m='890520'>have</span> <span m='891480'>a</span>
  <span m='891560'>better</span> <span m='892200'>divide</span> <span
  m='892550'>and</span> <span m='892670'>conquer</span> <span
  m='893060'>algorithm.</span> <span m='894730'>And</span> <span
  m='894910'>it</span> <span m='895000'>turns</span> <span m='895280'>out</span>
  <span m='895540'>that</span> <span m='896150'>Toom 3</span> <span
  m='900340'>plays</span> <span m='900580'>some</span> <span
  m='901430'>arithmetic</span> <span m='901830'>games</span> <span
  m='902970'>and</span> <span m='904110'>ends</span> <span m='904400'>up</span>
  <span m='905220'>with</span> <span m='905820'>a</span> <span
  m='906080'>recurrence</span> <span m='906570'>relationship</span> <span
  m='907930'>that</span> <span m='913780'>looks</span> <span
  m='913990'>like</span> <span m='914210'>this.</span> <span
  m='915790'>Where</span> <span m='916140'>you</span> <span
  m='916390'>reduce</span> <span m='916770'>the</span> <span
  m='916850'>nine</span> <span m='917230'>multiplications</span> <span
  m='918490'>down</span> <span m='918740'>to</span> <span
  m='918820'>five.</span> <span m='921020'>So</span> <span
  m='922160'>that's</span> <span m='923030'>a</span> <span
  m='923100'>win.</span> <span m='924110'>And</span> <span
  m='926550'>that</span> <span m='926760'>ends</span> <span m='926960'>up</span>
  <span m='927110'>being</span> <span m='927430'>theta</span> <span
  m='927860'>of</span> <span m='929160'>n</span> <span m='929410'>raised</span>
  <span m='929820'>to</span> <span m='930380'>what?</span> <span
  m='933070'>Someone?</span> <span m='935030'>Someone</span> <span
  m='935240'>loudly.</span> <span m='937640'>Log--</span> </p><p><span
  m='938660'>AUDIENCE: Base</span> <span m='938740'>3.</span> </p><p><span
  m='940780'>PROFESSOR: Log</span> <span m='941260'>with a base 3</span> <span
  m='941750'>of</span> <span m='942030'>5.</span> <span
  m='943550'>Another</span> <span m='943890'>irrational</span> <span
  m='944370'>number.</span> <span m='946440'>And</span> <span
  m='946850'>this</span> <span m='947020'>ends</span> <span m='947220'>up</span>
  <span m='947360'>being</span> <span m='948180'>n</span> <span
  m='948400'>raised</span> <span m='948710'>to</span> <span
  m='948800'>1.465.</span> <span m='951940'>So</span> <span
  m='952100'>you</span> <span m='952240'>won.</span> <span m='953400'>If</span>
  <span m='953500'>you</span> <span m='953570'>use</span> <span
  m='953890'>Toom</span> <span m='954120'>3,</span> <span
  m='954400'>assuming</span> <span m='954780'>the</span> <span
  m='954880'>constants</span> <span m='956030'>worked</span> <span
  m='956320'>out--</span> <span m='956850'>and</span> <span
  m='957950'>Victor</span> <span m='958320'>can</span> <span
  m='958430'>say</span> <span m='958550'>a little</span> <span
  m='958690'>bit</span> <span m='958830'>more</span> <span
  m='958990'>about</span> <span m='959210'>that,</span> <span
  m='960180'>because</span> <span m='960640'>we're</span> <span
  m='961150'>having</span> <span m='961410'>a little</span> <span
  m='961650'>trouble</span> <span m='963060'>justifying</span> <span
  m='964290'>this</span> <span m='964560'>particular</span> <span
  m='964880'>problem</span> <span m='965170'>set</span> <span
  m='965400'>question</span> <span m='965810'>that</span> <span
  m='965930'>we</span> <span m='966040'>want</span> <span m='966190'>to</span>
  <span m='966240'>give</span> <span m='966420'>you,</span> <span
  m='967430'>given</span> <span m='967650'>the</span> <span
  m='967740'>constant</span> <span m='968180'>factors</span> <span
  m='968590'>involved.</span> <span m='969670'>So</span> <span
  m='970240'>the</span> <span m='970740'>issue</span> <span
  m='971060'>really</span> <span m='971290'>here</span> <span
  m='971580'>is</span> <span m='972660'>this</span> <span m='973390'>is</span>
  <span m='973580'>correct.</span> <span m='974400'>It's</span> <span
  m='974610'>n</span> <span m='974790'>raised</span> <span m='974990'>to</span>
  <span m='975090'>1.46.</span> <span m='976550'>That's</span> <span
  m='976810'>n</span> <span m='976990'>raised</span> <span m='977230'>to</span>
  <span m='977330'>1.5.</span> <span m='978640'>And</span> <span
  m='978790'>then</span> <span m='978940'>the</span> <span
  m='979020'>naive</span> <span m='979390'>algorithm</span> <span
  m='979800'>is</span> <span m='979900'>n</span> <span m='980080'>square.</span>
  </p><p><span m='980980'>But</span> <span m='981750'>how</span> <span
  m='982090'>big</span> <span m='982560'>does</span> <span m='982780'>n</span>
  <span m='983010'>have</span> <span m='983240'>to</span> <span
  m='983350'>be</span> <span m='984210'>in order</span> <span
  m='984470'>for</span> <span m='984580'>the</span> <span m='985150'>n</span>
  <span m='985350'>raised</span> <span m='985570'>to</span> <span
  m='985670'>1.58</span> <span m='986500'>algorithm</span> <span
  m='987440'>to</span> <span m='987560'>beat</span> <span m='987810'>the</span>
  <span m='988040'>n square</span> <span m='988590'>algorithm,</span> <span
  m='989390'>and</span> <span m='990300'>for</span> <span m='990380'>the</span>
  <span m='990480'>n</span> <span m='990640'>raised</span> <span
  m='990850'>to</span> <span m='990930'>1.46</span> <span
  m='991970'>algorithm</span> <span m='992400'>to</span> <span
  m='992470'>beat</span> <span m='992620'>the</span> <span m='992740'>n</span>
  <span m='992910'>raised</span> <span m='993130'>to</span> <span
  m='993200'>1.58</span> <span m='994330'>algorithm,</span> <span
  m='994740'>et</span> <span m='994820'>cetera.</span> <span
  m='995450'>And</span> <span m='995620'>it turns</span> <span
  m='995860'>out</span> <span m='996060'>n</span> <span m='996210'>needs</span>
  <span m='996440'>to</span> <span m='996510'>be</span> <span
  m='996670'>really,</span> <span m='997160'>really</span> <span
  m='997350'>large</span> <span m='998010'>if</span> <span m='998180'>you</span>
  <span m='998320'>implement</span> <span m='998700'>these</span> <span
  m='998900'>in</span> <span m='999010'>Python.</span> <span
  m='999980'>So</span> <span m='1000740'>if</span> <span
  m='1001020'>you're</span> <span m='1001230'>having</span> <span
  m='1001460'>a</span> <span m='1001830'>little</span> <span
  m='1002090'>trouble</span> <span m='1002410'>here,</span> <span
  m='1002960'>giving</span> <span m='1003190'>you</span> <span
  m='1003320'>this</span> <span m='1004180'>pristine</span> <span
  m='1004770'>problem</span> <span m='1005110'>set</span> <span
  m='1005900'>that</span> <span m='1006100'>you</span> <span
  m='1006200'>can</span> <span m='1006310'>go</span> <span
  m='1006430'>off</span> <span m='1006700'>and</span> <span
  m='1008960'>learn</span> <span m='1009260'>about</span> <span
  m='1009880'>multiplication,</span> <span m='1010550'>and</span> <span
  m='1010650'>also</span> <span m='1011130'>appreciate</span> <span
  m='1011960'>asymptotic</span> <span m='1012480'>complexity.</span> <span
  m='1015310'>So</span> <span m='1015400'>that's</span> <span
  m='1015690'>a</span> <span m='1016010'>bit</span> <span m='1016150'>of</span>
  <span m='1016210'>a</span> <span m='1016270'>catch-22.</span> </p><p><span
  m='1018010'>Anyway,</span> <span m='1019160'>for</span> <span
  m='1019360'>the</span> <span m='1019420'>purposes</span> <span
  m='1019840'>of</span> <span m='1019970'>theory,</span> <span
  m='1020830'>this</span> <span m='1021040'>is</span> <span
  m='1021170'>great.</span> <span m='1022600'>It</span> <span
  m='1022750'>turns</span> <span m='1023000'>people</span> <span
  m='1023460'>have</span> <span m='1023600'>done</span> <span
  m='1023890'>even</span> <span m='1024200'>better.</span> <span
  m='1024980'>Multiplication</span> <span m='1025710'>is</span> <span
  m='1025849'>just</span> <span m='1026099'>this</span> <span
  m='1029079'>obviously</span> <span m='1029470'>incredibly</span> <span
  m='1029940'>important</span> <span m='1030359'>primitive</span> <span
  m='1031210'>that</span> <span m='1031369'>you</span> <span
  m='1031460'>would</span> <span m='1031599'>need</span> <span
  m='1032780'>for</span> <span m='1033490'>doing</span> <span
  m='1034220'>any</span> <span m='1034650'>reasonable</span> <span
  m='1035140'>computation.</span> <span m='1036240'>And</span> <span
  m='1036440'>so</span> <span m='1036990'>people</span> <span
  m='1037220'>have</span> <span m='1037280'>worked</span> <span
  m='1037560'>on</span> <span m='1038890'>using</span> <span
  m='1041640'>things</span> <span m='1041869'>like</span> <span
  m='1042060'>fast</span> <span m='1042329'>Fourier</span> <span
  m='1042619'>transforms</span> <span m='1045480'>and</span> <span
  m='1045690'>other</span> <span m='1045869'>techniques</span> <span
  m='1046490'>improve</span> <span m='1046900'>the</span> <span
  m='1046980'>complexity</span> <span m='1047470'>of</span> <span
  m='1047540'>multiplication.</span> <span m='1049010'>And</span> <span
  m='1055700'>best</span> <span m='1055980'>scheme</span> <span
  m='1056240'>until</span> <span m='1056940'>a</span> <span
  m='1057030'>few</span> <span m='1057190'>years</span> <span
  m='1057480'>ago</span> <span m='1058590'>was</span> <span
  m='1058970'>this</span> <span m='1059160'>scheme</span> <span
  m='1059390'>called</span> <span m='1059990'>Schonhage-Strassen</span> <span
  m='1061190'>scheme,</span> <span m='1062420'>which</span> <span
  m='1062680'>is</span> <span m='1062840'>almost</span> <span
  m='1063320'>linear</span> <span m='1063680'>in</span> <span
  m='1063800'>complexity.</span> <span m='1064920'>It's</span> <span
  m='1065990'>n</span> <span m='1067150'>log</span> <span m='1067550'>n</span>
  <span m='1068940'>log</span> <span m='1069310'>log</span> <span
  m='1070160'>n</span> <span m='1071360'>time.</span> <span
  m='1073480'>And</span> <span m='1074840'>this</span> <span
  m='1075030'>uses</span> <span m='1075730'>the</span> <span
  m='1075860'>fast</span> <span m='1076120'>Fourier</span> <span
  m='1076390'>transform,</span> <span m='1076910'>FFT.</span> </p><p><span
  m='1079420'>And</span> <span m='1079580'>you</span> <span
  m='1079660'>can</span> <span m='1079760'>play</span> <span
  m='1079940'>with</span> <span m='1080070'>all</span> <span
  m='1080190'>of</span> <span m='1080270'>these</span> <span
  m='1080450'>things.</span> <span m='1080690'>You</span> <span
  m='1080790'>can</span> <span m='1080890'>play</span> <span
  m='1081120'>with</span> <span m='1082440'>Karatsuba</span> <span
  m='1083750'>the</span> <span m='1083950'>naive</span> <span
  m='1084240'>algorithm,</span> <span m='1085140'>Toom</span> <span
  m='1085430'>3,</span> <span m='1086210'>et</span> <span
  m='1086390'>cetera</span> <span m='1087160'>in</span> <span
  m='1087340'>the</span> <span m='1087730'>gmpy</span> <span
  m='1088550'>package</span> <span m='1091800'>in</span> <span
  m='1091960'>Python.</span> <span m='1093220'>And</span> <span
  m='1093490'>you</span> <span m='1093590'>can</span> <span
  m='1093680'>see</span> <span m='1096240'>as</span> <span m='1096470'>to</span>
  <span m='1096560'>what</span> <span m='1096880'>the</span> <span
  m='1096970'>value</span> <span m='1097370'>of</span> <span
  m='1097500'>n</span> <span m='1097710'>needs</span> <span
  m='1097970'>to</span> <span m='1098060'>be</span> <span m='1098330'>in</span>
  <span m='1098430'>order</span> <span m='1098620'>for</span> <span
  m='1098730'>one</span> <span m='1098890'>of</span> <span
  m='1098950'>these</span> <span m='1099120'>algorithms</span> <span
  m='1099540'>to</span> <span m='1099630'>beat</span> <span
  m='1099790'>the</span> <span m='1099920'>other.</span> <span
  m='1101510'>This</span> <span m='1101750'>is</span> <span
  m='1101850'>not</span> <span m='1102030'>something</span> <span
  m='1102280'>that</span> <span m='1102790'>you're</span> <span
  m='1103020'>going</span> <span m='1103130'>to</span> <span
  m='1103180'>do</span> <span m='1103320'>specifically</span> <span
  m='1103820'>in</span> <span m='1103890'>the</span> <span
  m='1103960'>problem</span> <span m='1104260'>set,</span> <span
  m='1104840'>but</span> <span m='1105370'>I</span> <span m='1105480'>say</span>
  <span m='1105630'>that</span> <span m='1105780'>as</span> <span
  m='1105860'>an</span> <span m='1105960'>aside.</span> <span
  m='1106840'>These</span> <span m='1107200'>algorithms</span> <span
  m='1107610'>are</span> <span m='1107770'>implemented,</span> <span
  m='1108230'>and</span> <span m='1108470'>they're</span> <span
  m='1108690'>used</span> <span m='1109790'>in</span> <span
  m='1110040'>real</span> <span m='1110220'>life.</span> <span
  m='1110440'>Eric?</span> </p><p><span m='1110800'>ERIC: It may be worth</span>
  <span m='1111286'>mentioning</span> <span m='1111772'>that Python</span> <span
  m='1112258'>itself</span> <span m='1112744'>for long</span> <span
  m='1113230'>integers</span> <span m='1113716'>uses</span> <span
  m='1114202'>Karatsuba.</span> </p><p><span m='1115660'>PROFESSOR: Yeah,</span>
  <span m='1116110'>so Python</span> <span m='1116400'>uses--</span> <span
  m='1117400'>beyond</span> <span m='1117860'>a</span> <span
  m='1118030'>certain</span> <span m='1118940'>n,</span> <span
  m='1120070'>you</span> <span m='1120900'>are</span> <span
  m='1121080'>going</span> <span m='1121260'>to</span> <span
  m='1121350'>have</span> <span m='1121870'>decisions</span> <span
  m='1122370'>that</span> <span m='1122480'>are</span> <span
  m='1122540'>made</span> <span m='1123400'>within</span> <span
  m='1123810'>the</span> <span m='1123910'>package.</span> <span
  m='1124790'>And</span> <span m='1125250'>Python</span> <span
  m='1126300'>shifts</span> <span m='1126870'>to</span> <span
  m='1127110'>Karatsuba</span> <span m='1128380'>after</span> <span
  m='1128950'>n</span> <span m='1129170'>becomes</span> <span
  m='1129470'>large.</span> <span m='1130210'>But</span> <span
  m='1130330'>if</span> <span m='1130410'>n</span> <span m='1130560'>is</span>
  <span m='1130640'>small,</span> <span m='1131410'>then</span> <span
  m='1131800'>it's</span> <span m='1132230'>going</span> <span
  m='1132370'>to</span> <span m='1132430'>run</span> <span
  m='1132650'>the</span> <span m='1132950'>naive</span> <span
  m='1133240'>algorithm.</span> <span m='1133670'>Now</span> <span
  m='1133820'>if</span> <span m='1133890'>you</span> <span
  m='1134030'>write</span> <span m='1134270'>your</span> <span
  m='1134450'>own</span> <span m='1134580'>multiplication,</span> <span
  m='1135180'>you</span> <span m='1135290'>can</span> <span
  m='1135380'>do</span> <span m='1135490'>whatever</span> <span
  m='1135730'>you</span> <span m='1135860'>want.</span> <span m='1136600'>You
  can</span> <span m='1136660'>have</span> <span m='1136860'>your</span> <span
  m='1137000'>own</span> <span m='1137150'>adaptive</span> <span
  m='1137550'>scheme,</span> <span m='1138280'>assuming</span> <span
  m='1138830'>you</span> <span m='1138910'>have</span> <span
  m='1139630'>many</span> <span m='1139980'>of</span> <span
  m='1140050'>these</span> <span m='1140220'>algorithms</span> <span
  m='1140640'>implemented,</span> <span m='1141380'>or</span> <span
  m='1141510'>you're</span> <span m='1141660'>calling</span> <span
  m='1142000'>them</span> <span m='1142620'>using</span> <span
  m='1142940'>the</span> <span m='1143040'>gmpy</span> <span
  m='1143800'>package.</span> </p><p><span m='1146600'>So</span> <span
  m='1147110'>lastly,</span> <span m='1148340'>this</span> <span
  m='1148810'>looked</span> <span m='1148950'>pretty</span> <span
  m='1149120'>good</span> <span m='1149390'>for</span> <span m='1149510'>a
  while.</span> <span m='1150600'>And</span> <span m='1151410'>from</span> <span
  m='1151560'>a</span> <span m='1153560'>theoretical</span> <span
  m='1154050'>standpoint</span> <span m='1154660'>there</span> <span
  m='1154780'>was</span> <span m='1155190'>a</span> <span
  m='1155280'>breakthrough.</span> <span m='1157102'>Guy</span> <span
  m='1157450'>by</span> <span m='1157570'>the</span> <span
  m='1157670'>name</span> <span m='1157880'>of</span> <span
  m='1158540'>Furer</span> <span m='1159990'>came</span> <span
  m='1160240'>up</span> <span m='1160410'>with</span> <span
  m='1160920'>this</span> <span m='1161150'>algorithm</span> <span
  m='1162960'>that</span> <span m='1164620'>is</span> <span m='1164910'>n</span>
  <span m='1165120'>log</span> <span m='1165420'>n--</span> <span
  m='1166020'>and</span> <span m='1166370'>let</span> <span
  m='1166530'>me</span> <span m='1166610'>write</span> <span
  m='1166790'>this</span> <span m='1166950'>carefully--</span> <span
  m='1170110'>2</span> <span m='1170460'>raised</span> <span
  m='1172140'>big</span> <span m='1172520'>O--</span> <span
  m='1172970'>that's</span> <span m='1173200'>an</span> <span
  m='1173300'>upper</span> <span m='1173610'>bound--</span> <span
  m='1175030'>of</span> <span m='1176970'>log</span> <span
  m='1177600'>star</span> <span m='1179280'>n.</span> <span
  m='1181620'>That</span> <span m='1181710'>makes</span> <span
  m='1181900'>sense?</span> <span m='1182730'>No.</span> <span
  m='1183563'>I'll</span> <span m='1183916'>have</span> <span
  m='1184270'>to</span> <span m='1184640'>explain it.</span> </p><p><span
  m='1185690'>OK,</span> <span m='1185980'>so</span> <span
  m='1186090'>what</span> <span m='1186210'>does</span> <span
  m='1186310'>this</span> <span m='1186500'>mean?</span> <span
  m='1187310'>This</span> <span m='1187680'>part</span> <span
  m='1187940'>is</span> <span m='1188060'>clear.</span> <span
  m='1188790'>This</span> <span m='1188970'>is</span> <span
  m='1189090'>like</span> <span m='1189250'>sorting.</span> <span
  m='1190260'>It</span> <span m='1190380'>doesn't</span> <span m='1190570'>need
  to really use</span> <span m='1191030'>sorting,</span> <span
  m='1191550'>but</span> <span m='1191980'>that's</span> <span
  m='1192200'>n</span> <span m='1192330'>log</span> <span m='1192580'>n.</span>
  <span m='1193280'>And</span> <span m='1193420'>then</span> <span
  m='1193550'>you</span> <span m='1193650'>have</span> <span
  m='1193870'>this</span> <span m='1194060'>2</span> <span
  m='1194280'>raised</span> <span m='1194640'>to</span> <span
  m='1194770'>big</span> <span m='1195100'>O</span> <span m='1195360'>log</span>
  <span m='1195830'>star</span> <span m='1196270'>n.</span> <span
  m='1196940'>I</span> <span m='1197010'>need</span> <span m='1197200'>to</span>
  <span m='1197270'>define</span> <span m='1197690'>what</span> <span
  m='1197870'>log</span> <span m='1198100'>star</span> <span m='1198460'>n
  is.</span> <span m='1198930'>And</span> <span m='1199210'>log</span> <span
  m='1199640'>star</span> <span m='1199860'>n</span> <span m='1201320'>is</span>
  <span m='1201550'>what's</span> <span m='1201690'>called</span> <span
  m='1201900'>the</span> <span m='1202400'>iterative</span> <span
  m='1202980'>algorithm--</span> <span m='1206460'>logarithm,</span> <span
  m='1206880'>rather.</span> <span m='1210080'>I</span> <span
  m='1210200'>guess</span> <span m='1210370'>it's</span> <span
  m='1210560'>an</span> <span m='1210890'>iterative</span> <span
  m='1211310'>algorithm,</span> <span m='1211740'>but</span> <span
  m='1211900'>it</span> <span m='1212000'>computes</span> <span
  m='1213120'>logs.</span> <span m='1214060'>And</span> <span
  m='1214240'>the</span> <span m='1214320'>iterative</span> <span
  m='1214810'>logarithm</span> <span m='1216260'>is</span> <span
  m='1217130'>the</span> <span m='1217230'>number</span> <span
  m='1217640'>of</span> <span m='1217820'>times</span> <span
  m='1221160'>log</span> <span m='1222920'>needs</span> <span
  m='1223310'>to</span> <span m='1223380'>be</span> <span
  m='1223530'>applied</span> <span m='1232400'>to</span> <span
  m='1232620'>get</span> <span m='1232750'>a</span> <span
  m='1232800'>result</span> <span m='1237110'>that</span> <span
  m='1237420'>is</span> <span m='1237660'>less</span> <span
  m='1237900'>than</span> <span m='1238010'>or</span> <span
  m='1238120'>equal</span> <span m='1238360'>to</span> <span
  m='1238440'>1.</span> </p><p><span m='1241170'>So</span> <span
  m='1242590'>this</span> <span m='1242850'>thing</span> <span
  m='1243640'>really</span> <span m='1244080'>cuts</span> <span m='1244160'>you
  down</span> <span m='1244310'>to size</span> <span m='1245140'>really</span>
  <span m='1245520'>fast.</span> <span m='1246790'>So</span> <span
  m='1246980'>it</span> <span m='1247430'>doesn't</span> <span
  m='1247670'>matter.</span> <span m='1248110'>You</span> <span
  m='1248220'>could</span> <span m='1248360'>be</span> <span
  m='1249000'>a</span> <span m='1249170'>10</span> <span
  m='1249370'>raised</span> <span m='1249630'>to</span> <span
  m='1250370'>24,</span> <span m='1251250'>or</span> <span m='1251720'>2</span>
  <span m='1251840'>raised</span> <span m='1252070'>to</span> <span
  m='1252150'>50,</span> <span m='1252520'>let's</span> <span
  m='1252690'>say,</span> <span m='1252870'>if</span> <span m='1253080'>you
  were</span> <span m='1253250'>doing</span> <span m='1254170'>binary</span>
  <span m='1255280'>logs.</span> <span m='1256000'>And</span> <span
  m='1256180'>in the</span> <span m='1256240'>very</span> <span
  m='1256440'>first</span> <span m='1256680'>iteration</span> <span
  m='1257610'>you</span> <span m='1257760'>go</span> <span
  m='1257860'>down</span> <span m='1258050'>to</span> <span
  m='1258120'>50,</span> <span m='1259130'>right?</span> <span
  m='1259690'>And</span> <span m='1259830'>then</span> <span
  m='1260200'>you</span> <span m='1260330'>take</span> <span
  m='1260520'>a</span> <span m='1260570'>log</span> <span m='1260900'>of</span>
  <span m='1260990'>50</span> <span m='1262050'>and</span> <span
  m='1262640'>you</span> <span m='1262790'>go</span> <span
  m='1262880'>down</span> <span m='1263140'>to about</span> <span m='1263430'>7
  or</span> <span m='1263860'>something.</span> <span m='1264990'>And</span>
  <span m='1265120'>then</span> <span m='1265320'>you</span> <span
  m='1265470'>take</span> <span m='1265680'>the</span> <span
  m='1265760'>log</span> <span m='1265980'>of</span> <span m='1266050'>7.</span>
  <span m='1267210'>And</span> <span m='1267810'>if</span> <span
  m='1267980'>you're</span> <span m='1268100'>talking</span> <span
  m='1268410'>about</span> <span m='1270010'>base</span> <span
  m='1270370'>2,</span> <span m='1270500'>like</span> <span
  m='1270720'>we</span> <span m='1270810'>were,</span> <span
  m='1271470'>you're</span> <span m='1271620'>down</span> <span
  m='1271840'>to</span> <span m='1272310'>less</span> <span
  m='1272580'>than</span> <span m='1273370'>3.</span> <span
  m='1274110'>And</span> <span m='1274250'>so</span> <span m='1274480'>four
  or</span> <span m='1274760'>five</span> <span m='1275100'>iterations,</span>
  <span m='1277010'>you're</span> <span m='1277160'>down</span> <span
  m='1277540'>to</span> <span m='1278340'>less</span> <span
  m='1278640'>than</span> <span m='1278790'>or</span> <span
  m='1278890'>equal</span> <span m='1279110'>to</span> <span
  m='1279190'>1.</span> <span m='1280370'>And</span> <span
  m='1280650'>that's</span> <span m='1281670'>what</span> <span
  m='1282110'>log</span> <span m='1282500'>star</span> <span
  m='1282680'>n</span> <span m='1282870'>computes.</span> <span
  m='1284280'>It's</span> <span m='1285420'>not</span> <span
  m='1285900'>the</span> <span m='1285980'>logarithm</span> <span
  m='1286490'>as</span> <span m='1286590'>much</span> <span
  m='1286790'>as</span> <span m='1287080'>the</span> <span
  m='1287160'>number</span> <span m='1287400'>of</span> <span
  m='1287930'>times</span> <span m='1288720'>so</span> <span
  m='1288830'>you</span> <span m='1288890'>have</span> <span
  m='1289040'>to</span> <span m='1289140'>apply</span> <span
  m='1289530'>log</span> <span m='1290230'>to</span> <span
  m='1290780'>get</span> <span m='1291060'>the</span> <span
  m='1291190'>result</span> <span m='1291810'>that's</span> <span
  m='1292020'>less</span> <span m='1292200'>than</span> <span
  m='1292290'>or</span> <span m='1292380'>equal</span> <span
  m='1292600'>to</span> <span m='1292670'>1.</span> </p><p><span
  m='1293690'>So</span> <span m='1293770'>you</span> <span
  m='1293880'>have</span> <span m='1294050'>these</span> <span
  m='1294280'>giant</span> <span m='1294760'>numbers,</span> <span
  m='1295600'>and</span> <span m='1295790'>it's</span> <span
  m='1295920'>only</span> <span m='1296110'>like</span> <span
  m='1296320'>five,</span> <span m='1296710'>six,</span> <span
  m='1297440'>eight</span> <span m='1297840'>times</span> <span
  m='1298600'>do</span> <span m='1298680'>you</span> <span
  m='1298750'>apply</span> <span m='1299020'>log</span> <span
  m='1299710'>and</span> <span m='1299840'>you're</span> <span
  m='1299940'>down</span> <span m='1300170'>to</span> <span
  m='1300250'>one.</span> <span m='1301310'>So</span> <span
  m='1301450'>for</span> <span m='1301620'>all</span> <span
  m='1301830'>practical</span> <span m='1302290'>purposes,</span> <span
  m='1303490'>you</span> <span m='1303650'>can</span> <span
  m='1303780'>think</span> <span m='1303970'>of--</span> <span
  m='1304060'>and</span> <span m='1304160'>this</span> <span
  m='1304280'>is</span> <span m='1304390'>upper</span> <span
  m='1304650'>bound--</span> <span m='1305990'>you</span> <span
  m='1306110'>can</span> <span m='1306240'>think</span> <span
  m='1306420'>of</span> <span m='1306510'>this,</span> <span
  m='1306680'>even</span> <span m='1306880'>though</span> <span
  m='1307010'>this</span> <span m='1307160'>is</span> <span m='1307320'>2</span>
  <span m='1307490'>raised</span> <span m='1307750'>to</span> <span
  m='1307850'>something,</span> <span m='1308550'>it's</span> <span
  m='1308720'>2</span> <span m='1308870'>raised</span> <span
  m='1309160'>to</span> <span m='1309230'>a</span> <span
  m='1309310'>pretty</span> <span m='1309570'>small</span> <span
  m='1309940'>number.</span> <span m='1311320'>2 raised to</span> <span
  m='1311740'>10,</span> <span m='1312000'>that</span> <span
  m='1312260'>would</span> <span m='1312410'>be</span> <span
  m='1312530'>1,000.</span> <span m='1313470'>And</span> <span
  m='1313710'>so</span> <span m='1314500'>from</span> <span
  m='1314750'>an</span> <span m='1314900'>asymptotic</span> <span
  m='1315410'>complexity</span> <span m='1315870'>standpoint,</span> <span
  m='1316390'>this</span> <span m='1316530'>is</span> <span
  m='1316670'>the</span> <span m='1316760'>winner.</span> <span
  m='1318340'>From</span> <span m='1318570'>a</span> <span
  m='1318760'>practical</span> <span m='1319420'>standpoint,</span> <span
  m='1320400'>Schonhage-Strassen</span> <span m='1322490'>is</span> <span
  m='1322690'>really</span> <span m='1323390'>what</span> <span
  m='1324270'>you</span> <span m='1324410'>probably</span> <span
  m='1324800'>want</span> <span m='1324960'>to</span> <span
  m='1325000'>use</span> <span m='1325480'>when</span> <span
  m='1325740'>n</span> <span m='1325950'>becomes</span> <span
  m='1327040'>very</span> <span m='1327350'>large,</span> <span m='1327740'>to
  the</span> <span m='1327820'>billions</span> <span m='1328220'>and</span>
  <span m='1328340'>so</span> <span m='1328470'>on</span> <span
  m='1328580'>and</span> <span m='1328660'>so</span> <span
  m='1328790'>forth.</span> </p><p><span m='1329780'>And</span> <span
  m='1330830'>as</span> <span m='1331060'>of</span> <span
  m='1331150'>now,</span> <span m='1331720'>to</span> <span
  m='1332210'>the</span> <span m='1332330'>best</span> <span
  m='1332510'>of</span> <span m='1332550'>my</span> <span
  m='1332670'>knowledge</span> <span m='1333020'>this</span> <span
  m='1333330'>hasn't</span> <span m='1333670'>been</span> <span
  m='1333780'>implemented</span> <span m='1334540'>in</span> <span
  m='1334670'>the</span> <span m='1334780'>gmpy</span> <span
  m='1335410'>package.</span> <span m='1336310'>So</span> <span
  m='1336920'>if</span> <span m='1337060'>you</span> <span
  m='1337150'>actually</span> <span m='1337380'>want</span> <span
  m='1337520'>to</span> <span m='1337560'>use</span> <span
  m='1338130'>gmpy,</span> <span m='1339800'>this</span> <span
  m='1340040'>is</span> <span m='1340130'>where</span> <span
  m='1340260'>you</span> <span m='1340390'>stop.</span> </p><p><span
  m='1343110'>So</span> <span m='1343290'>that's</span> <span
  m='1344010'>multiplication.</span> <span m='1344820'>So we</span> <span
  m='1344960'>have</span> <span m='1345370'>a</span> <span
  m='1345420'>bunch</span> <span m='1345650'>of</span> <span
  m='1345710'>different</span> <span m='1346090'>ways</span> <span
  m='1346480'>that</span> <span m='1346580'>you</span> <span
  m='1346680'>could</span> <span m='1346770'>do</span> <span
  m='1346880'>multiplication.</span> <span m='1349000'>What</span> <span
  m='1349220'>I'd</span> <span m='1349310'>like</span> <span
  m='1349470'>to</span> <span m='1349560'>do</span> <span m='1349820'>is</span>
  <span m='1350730'>give</span> <span m='1351370'>you</span> <span
  m='1351600'>a</span> <span m='1351680'>sense</span> <span
  m='1352080'>of</span> <span m='1353540'>assuming</span> <span
  m='1354400'>a</span> <span m='1354590'>given</span> <span
  m='1354860'>complexity</span> <span m='1355660'>of</span> <span
  m='1355820'>multiplication,</span> <span m='1357900'>how</span> <span
  m='1358120'>long</span> <span m='1358450'>would</span> <span
  m='1358640'>division</span> <span m='1359090'>take?</span> <span
  m='1360270'>So</span> <span m='1360530'>we</span> <span m='1361490'>are</span>
  <span m='1362610'>1</span> <span m='1362880'>and</span> <span
  m='1363140'>1/2</span> <span m='1365020'>lectures</span> <span
  m='1365520'>in,</span> <span m='1366170'>and</span> <span m='1366560'>I</span>
  <span m='1366690'>haven't</span> <span m='1367010'>really</span> <span
  m='1367150'>told</span> <span m='1367510'>you</span> <span
  m='1368610'>how</span> <span m='1368860'>we're</span> <span
  m='1368980'>going</span> <span m='1369110'>to</span> <span
  m='1369190'>do</span> <span m='1369310'>division,</span> <span
  m='1369870'>which</span> <span m='1370020'>is</span> <span
  m='1370140'>what</span> <span m='1370360'>we</span> <span
  m='1370450'>have</span> <span m='1370590'>to</span> <span
  m='1370690'>do</span> <span m='1370860'>when</span> <span
  m='1371530'>we</span> <span m='1371670'>compute</span> <span
  m='1373260'>a</span> <span m='1373440'>divided</span> <span
  m='1373800'>by</span> <span m='1373940'>xi,</span> <span
  m='1374960'>which</span> <span m='1375140'>is</span> <span
  m='1375270'>the</span> <span m='1375580'>basic</span> <span
  m='1375970'>integration</span> <span m='1376640'>in</span> <span
  m='1376800'>the</span> <span m='1377010'>Newton</span> <span
  m='1377200'>method.</span> <span m='1378350'>So</span> <span
  m='1378390'>let's</span> <span m='1378580'>get</span> <span
  m='1378720'>to</span> <span m='1378790'>that.</span> </p><p><span
  m='1399430'>So</span> <span m='1400790'>finally</span> <span
  m='1401470'>high-precision</span> <span m='1405020'>division.</span> <span
  m='1410630'>So</span> <span m='1410980'>we</span> <span
  m='1411120'>want</span> <span m='1414618'>a</span> <span
  m='1415080'>high-precision</span> <span m='1417460'>rep</span> <span
  m='1419270'>off</span> <span m='1420710'>a</span> <span
  m='1421060'>divided</span> <span m='1421380'>by</span> <span
  m='1421520'>b.</span> <span m='1422600'>And</span> <span
  m='1423430'>we're</span> <span m='1423500'>going</span> <span
  m='1423700'>to</span> <span m='1423770'>compute</span> <span
  m='1425760'>a</span> <span m='1425840'>high-precision</span> <span
  m='1426480'>rep</span> <span m='1427500'>off</span> <span m='1427850'>1</span>
  <span m='1428260'>divided</span> <span m='1428620'>by</span> <span
  m='1428750'>b</span> <span m='1429890'>first.</span> <span
  m='1432430'>And</span> <span m='1433350'>what</span> <span
  m='1433550'>we</span> <span m='1433680'>mean</span> <span
  m='1433880'>by</span> <span m='1434030'>that</span> <span
  m='1435740'>is</span> <span m='1436210'>that</span> <span
  m='1439130'>we'll</span> <span m='1439440'>compute</span> <span
  m='1444100'>r</span> <span m='1444450'>divided</span> <span
  m='1444800'>by</span> <span m='1444960'>b</span> <span
  m='1445320'>floor</span> <span m='1448090'>where</span> <span
  m='1450640'>r</span> <span m='1452765'>is</span> <span m='1453190'>a</span>
  <span m='1453500'>really</span> <span m='1453940'>large</span> <span
  m='1454330'>value.</span> <span m='1458030'>And</span> <span
  m='1458390'>more</span> <span m='1458620'>importantly,</span> <span
  m='1460170'>it's</span> <span m='1460450'>easy</span> <span
  m='1460860'>to</span> <span m='1460970'>divide</span> <span
  m='1468250'>by</span> <span m='1468410'>r</span> <span m='1469850'>in</span>
  <span m='1470010'>a</span> <span m='1470060'>particular</span> <span
  m='1470440'>base.</span> <span m='1471310'>So</span> <span
  m='1471470'>for</span> <span m='1471560'>example,</span> <span
  m='1472450'>r</span> <span m='1472780'>equals</span> <span
  m='1473140'>2</span> <span m='1473260'>raised</span> <span
  m='1473500'>to</span> <span m='1473610'>k,</span> <span m='1474820'>when
  we</span> <span m='1475310'>use</span> <span m='1476890'>base</span> <span
  m='1477220'>2,</span> <span m='1477870'>you</span> <span
  m='1478030'>can</span> <span m='1478300'>easily</span> <span
  m='1478650'>divide</span> <span m='1479060'>through</span> <span
  m='1479200'>a</span> <span m='1479250'>shift</span> <span
  m='1479550'>operator.</span> </p><p><span m='1481240'>So</span> <span
  m='1481450'>if</span> <span m='1481530'>I</span> <span m='1481610'>give</span>
  <span m='1481850'>you</span> <span m='1482130'>r</span> <span
  m='1482370'>divided</span> <span m='1482670'>by</span> <span
  m='1482810'>b</span> <span m='1483600'>and</span> <span m='1483720'>I</span>
  <span m='1483770'>give</span> <span m='1483940'>you</span> <span
  m='1484060'>this</span> <span m='1484970'>long</span> <span
  m='1486010'>computer</span> <span m='1486420'>word</span> <span
  m='1486840'>that's</span> <span m='1487590'>in</span> <span
  m='1487730'>base</span> <span m='1488050'>2,</span> <span
  m='1488620'>which</span> <span m='1488810'>typically</span> <span
  m='1489230'>could</span> <span m='1489380'>have</span> <span
  m='1489850'>millions</span> <span m='1490610'>of</span> <span
  m='1490720'>digits</span> <span m='1491630'>in</span> <span
  m='1491780'>its</span> <span m='1491900'>representation,</span> <span
  m='1493110'>I</span> <span m='1493240'>can</span> <span
  m='1493390'>shift</span> <span m='1493790'>that</span> <span
  m='1494570'>by</span> <span m='1494700'>the</span> <span
  m='1494790'>appropriate</span> <span m='1495250'>amount</span> <span
  m='1496107'>to</span> <span m='1497540'>a</span> <span
  m='1497620'>given</span> <span m='1497940'>r</span> <span
  m='1498140'>divided</span> <span m='1498420'>by</span> <span
  m='1498530'>b.</span> <span m='1498900'>I can</span> <span
  m='1499020'>get</span> <span m='1499160'>1</span> <span
  m='1499410'>over</span> <span m='1499670'>b</span> <span m='1500310'>by</span>
  <span m='1500420'>shifting</span> <span m='1500830'>that</span> <span
  m='1501020'>quantity.</span> <span m='1502440'>So</span> <span
  m='1502580'>it</span> <span m='1502680'>feels</span> <span
  m='1502930'>like,</span> <span m='1503195'>hey wait</span> <span
  m='1503700'>a</span> <span m='1503730'>minute.</span> <span
  m='1503970'>Why</span> <span m='1504260'>are</span> <span
  m='1504360'>we</span> <span m='1504490'>dividing</span> <span
  m='1504920'>by</span> <span m='1505080'>r?</span> </p><p><span
  m='1505800'>Well</span> <span m='1505990'>remember</span> <span
  m='1506320'>that</span> <span m='1506520'>you</span> <span
  m='1506630'>want</span> <span m='1507380'>1</span> <span
  m='1507590'>over</span> <span m='1507820'>b.</span> <span
  m='1508740'>And</span> <span m='1509510'>if</span> <span
  m='1509650'>you're</span> <span m='1509780'>computing</span> <span
  m='1510230'>r</span> <span m='1510520'>divided</span> <span
  m='1510840'>by</span> <span m='1510960'>b</span> <span
  m='1511200'>floor,</span> <span m='1511980'>and</span> <span
  m='1512100'>you</span> <span m='1512160'>actually</span> <span
  m='1512510'>want</span> <span m='1513030'>1</span> <span
  m='1513260'>over</span> <span m='1513470'>b,</span> <span
  m='1514780'>which</span> <span m='1515060'>then</span> <span
  m='1515270'>you</span> <span m='1515400'>could</span> <span
  m='1515630'>use</span> <span m='1515940'>to</span> <span
  m='1516030'>multiply</span> <span m='1516440'>by</span> <span
  m='1516680'>a</span> <span m='1517450'>so</span> <span m='1517600'>you</span>
  <span m='1517700'>can</span> <span m='1517840'>run</span> <span
  m='1518050'>your</span> <span m='1518340'>Newton</span> <span
  m='1518740'>iteration,</span> <span m='1519430'>then</span> <span
  m='1519780'>you</span> <span m='1519900'>want</span> <span
  m='1520010'>to</span> <span m='1520060'>divide</span> <span
  m='1520380'>by</span> <span m='1520550'>r.</span> <span m='1522370'>And</span>
  <span m='1522490'>that</span> <span m='1522650'>division</span> <span
  m='1524060'>is</span> <span m='1524240'>essentially</span> <span
  m='1524630'>going</span> <span m='1524750'>to</span> <span
  m='1524790'>be</span> <span m='1524890'>something</span> <span
  m='1525840'>that</span> <span m='1526300'>shifts</span> <span
  m='1526660'>things</span> <span m='1526920'>to</span> <span
  m='1527780'>the</span> <span m='1527900'>right.</span> <span
  m='1528740'>So</span> <span m='1528850'>the</span> <span
  m='1529220'>most</span> <span m='1529410'>significant</span> <span
  m='1529880'>bits</span> <span m='1530610'>move</span> <span
  m='1530870'>to</span> <span m='1530930'>the</span> <span
  m='1531030'>right,</span> <span m='1531400'>and</span> <span
  m='1531580'>you</span> <span m='1531670'>get</span> <span m='1531780'>a</span>
  <span m='1531830'>smaller</span> <span m='1532140'>number.</span> <span
  m='1533950'>That</span> <span m='1534390'>make</span> <span
  m='1534580'>sense?</span> </p><p><span m='1535810'>So</span> <span
  m='1536270'>we</span> <span m='1536410'>all</span> <span
  m='1536500'>know</span> <span m='1536650'>how</span> <span
  m='1536740'>to</span> <span m='1536830'>divide</span> <span
  m='1537380'>by</span> <span m='1538420'>using</span> <span
  m='1538680'>shifting</span> <span m='1539280'>assuming</span> <span
  m='1539650'>the</span> <span m='1539750'>bases</span> <span
  m='1540360'>work</span> <span m='1540580'>out</span> <span
  m='1540850'>right.</span> <span m='1541730'>And</span> <span
  m='1542150'>if</span> <span m='1542200'>you</span> <span
  m='1542290'>had</span> <span m='1542470'>a</span> <span
  m='1542490'>representation</span> <span m='1543130'>that</span> <span
  m='1543240'>was</span> <span m='1543380'>decimal,</span> <span
  m='1544390'>suddenly</span> <span m='1545390'>you</span> <span
  m='1545560'>could</span> <span m='1545840'>certainly</span> <span
  m='1546220'>divide</span> <span m='1546590'>by</span> <span
  m='1546740'>10</span> <span m='1547000'>raised</span> <span
  m='1547300'>to</span> <span m='1547950'>k.</span> <span
  m='1548830'>That's</span> <span m='1549020'>easy.</span> <span
  m='1550330'>You've</span> <span m='1550430'>done</span> <span
  m='1550600'>this</span> <span m='1550770'>many</span> <span
  m='1550970'>times.</span> <span m='1551770'>But</span> <span
  m='1551920'>you</span> <span m='1552040'>just</span> <span
  m='1552230'>changed</span> <span m='1552450'>the</span> <span
  m='1552540'>decimal</span> <span m='1552930'>point</span> <span
  m='1553660'>when</span> <span m='1553780'>you're</span> <span
  m='1553880'>working</span> <span m='1554190'>with</span> <span
  m='1554310'>decimal</span> <span m='1554730'>arithmetic.</span> <span
  m='1555170'>When</span> <span m='1555570'>you</span> <span
  m='1555730'>divide</span> <span m='1556400'>72</span> <span
  m='1556930'>by</span> <span m='1557950'>100</span> <span
  m='1558370'>and</span> <span m='1558450'>you</span> <span
  m='1558540'>get</span> <span m='1558700'>0.72.</span> <span
  m='1559740'>And</span> <span m='1559850'>that's</span> <span
  m='1560020'>a</span> <span m='1560060'>very</span> <span
  m='1560250'>similar</span> <span m='1560620'>notion</span> <span
  m='1560960'>here.</span> <span m='1562550'>It</span> <span
  m='1562650'>doesn't</span> <span m='1562850'>really</span> <span
  m='1562990'>matter</span> <span m='1563250'>what</span> <span
  m='1563410'>base</span> <span m='1564540'>you're</span> <span
  m='1564690'>talking</span> <span m='1564940'>about.</span> </p><p><span
  m='1566310'>So</span> <span m='1566500'>that's</span> <span
  m='1567180'>the</span> <span m='1567310'>setup.</span> <span
  m='1568270'>That's</span> <span m='1568850'>how</span> <span
  m='1569090'>are</span> <span m='1569190'>we</span> <span
  m='1569220'>going</span> <span m='1569390'>to</span> <span
  m='1569460'>try</span> <span m='1569760'>and</span> <span
  m='1569930'>tackle</span> <span m='1570290'>this</span> <span
  m='1570680'>division</span> <span m='1571080'>problem.</span> <span
  m='1572350'>But</span> <span m='1573400'>we</span> <span
  m='1573580'>still</span> <span m='1573810'>have</span> <span
  m='1574040'>this</span> <span m='1574180'>problem</span> <span
  m='1574610'>of</span> <span m='1574750'>computing</span> <span
  m='1575940'>r</span> <span m='1576190'>divided</span> <span
  m='1576520'>by</span> <span m='1576650'>b.</span> <span m='1578460'>So</span>
  <span m='1578860'>how are we</span> <span m='1578940'>going</span> <span
  m='1579100'>to</span> <span m='1579620'>compute</span> <span
  m='1580640'>r</span> <span m='1580880'>divided</span> <span
  m='1581210'>by</span> <span m='1581360'>b?</span> <span m='1585430'>And</span>
  <span m='1585680'>we</span> <span m='1585760'>want</span> <span
  m='1585970'>this</span> <span m='1586140'>to</span> <span
  m='1586220'>be</span> <span m='1586910'>a</span> <span
  m='1586970'>large</span> <span m='1587370'>number</span> <span
  m='1587580'>of</span> <span m='1587670'>digits</span> <span
  m='1588010'>of</span> <span m='1588080'>precision.</span> <span
  m='1589740'>So</span> <span m='1590760'>we're going</span> <span
  m='1590880'>to</span> <span m='1591150'>use</span> <span
  m='1591310'>Newton's</span> <span m='1591450'>method</span> <span
  m='1591710'>again.</span> <span m='1596160'>You've got</span> <span
  m='1596360'>some</span> <span m='1596400'>non-linearity</span> <span
  m='1597250'>here</span> <span m='1599150'>with</span> <span
  m='1599300'>respect</span> <span m='1599610'>to</span> <span
  m='1599720'>1</span> <span m='1600100'>over</span> <span m='1600360'>x.</span>
  <span m='1602850'>And</span> <span m='1603625'>we're</span> <span
  m='1603900'>gonna</span> <span m='1603990'>use</span> <span
  m='1604260'>Newton's</span> <span m='1604540'>method</span> <span
  m='1604800'>again.</span> <span m='1606380'>And</span> <span
  m='1607220'>we'll</span> <span m='1607400'>have</span> <span
  m='1607560'>to</span> <span m='1607620'>hope</span> <span
  m='1607890'>that</span> <span m='1608030'>this</span> <span
  m='1608170'>works</span> <span m='1608460'>out,</span> <span
  m='1608830'>that</span> <span m='1609030'>we</span> <span
  m='1609230'>can</span> <span m='1611200'>get</span> <span
  m='1611350'>Newton's</span> <span m='1611670'>method,</span> <span
  m='1612310'>it'll</span> <span m='1612540'>converge,</span> <span
  m='1613830'>and</span> <span m='1614320'>it'll</span> <span
  m='1615610'>require</span> <span m='1616820'>operations</span> <span
  m='1617370'>that</span> <span m='1617500'>we</span> <span
  m='1617580'>know</span> <span m='1617810'>how</span> <span
  m='1617940'>to</span> <span m='1618060'>do.</span> <span
  m='1619830'>And</span> <span m='1619980'>all</span> <span
  m='1620120'>of</span> <span m='1620210'>this</span> <span
  m='1620390'>is</span> <span m='1620510'>going</span> <span
  m='1620630'>to</span> <span m='1620680'>work</span> <span
  m='1620900'>out</span> <span m='1621270'>really</span> <span
  m='1621470'>well.</span> </p><p><span m='1622420'>I'm</span> <span
  m='1622540'>going</span> <span m='1622650'>to</span> <span
  m='1622700'>set</span> <span m='1622890'>up</span> <span m='1623020'>a</span>
  <span m='1623100'>function,</span> <span m='1624280'>f</span> <span
  m='1624460'>of</span> <span m='1624600'>x</span> <span
  m='1626320'>equals</span> <span m='1628640'>1</span> <span
  m='1629680'>divided</span> <span m='1630030'>by</span> <span
  m='1630190'>x</span> <span m='1630540'>minus</span> <span m='1630920'>b</span>
  <span m='1631300'>divided</span> <span m='1632000'>by</span> <span
  m='1632180'>r.</span> <span m='1634550'>So</span> <span
  m='1634800'>what</span> <span m='1635010'>this</span> <span
  m='1635190'>means</span> <span m='1635490'>is</span> <span
  m='1635710'>that</span> <span m='1636390'>this</span> <span
  m='1636530'>function</span> <span m='1636980'>has</span> <span
  m='1637230'>a</span> <span m='1637290'>0</span> <span m='1638920'>at</span>
  <span m='1639900'>x</span> <span m='1640180'>equals</span> <span
  m='1640970'>r</span> <span m='1641290'>divided</span> <span
  m='1641620'>by</span> <span m='1641770'>b.</span> <span m='1643790'>So</span>
  <span m='1643960'>if</span> <span m='1644050'>I</span> <span
  m='1644120'>try</span> <span m='1644370'>and</span> <span
  m='1644470'>find</span> <span m='1644800'>the</span> <span
  m='1644860'>0</span> <span m='1646050'>of</span> <span m='1646170'>this</span>
  <span m='1646540'>function,</span> <span m='1648470'>and</span> <span
  m='1648990'>I</span> <span m='1649310'>start out</span> <span
  m='1649650'>with</span> <span m='1649780'>a</span> <span
  m='1649840'>decent</span> <span m='1650180'>initial</span> <span
  m='1650510'>guess,</span> <span m='1651230'>I'm</span> <span
  m='1651340'>going</span> <span m='1651440'>to</span> <span
  m='1651480'>end</span> <span m='1651720'>up</span> <span
  m='1651910'>with</span> <span m='1652110'>r</span> <span
  m='1652360'>divided</span> <span m='1652680'>by</span> <span
  m='1652800'>b.</span> <span m='1653100'>And</span> <span m='1653400'>if</span>
  <span m='1653520'>I'm</span> <span m='1653620'>working</span> <span
  m='1653900'>with</span> <span m='1654050'>integers,</span> <span
  m='1655000'>effectively</span> <span m='1655940'>that's</span> <span
  m='1656200'>the</span> <span m='1656310'>floor</span> <span
  m='1656760'>that</span> <span m='1656900'>I</span> <span
  m='1656940'>have</span> <span m='1657260'>for</span> <span
  m='1657470'>r</span> <span m='1657660'>divided</span> <span
  m='1657960'>by</span> <span m='1658080'>b.</span> <span m='1658710'>And</span>
  <span m='1658820'>then</span> <span m='1658930'>I</span> <span
  m='1658980'>do</span> <span m='1659150'>my</span> <span
  m='1659270'>shift</span> <span m='1660160'>and I</span> <span
  m='1660290'>end</span> <span m='1660540'>up</span> <span
  m='1660670'>with</span> <span m='1660790'>1</span> <span
  m='1660960'>over</span> <span m='1661130'>b.</span> </p><p><span
  m='1663800'>So</span> <span m='1665240'>someone</span> <span
  m='1665540'>who</span> <span m='1665990'>remembers</span> <span
  m='1668230'>differentiation,</span> <span m='1669812'>if you're</span> <span
  m='1670180'>gonna</span> <span m='1670390'>apply</span> <span
  m='1670620'>Newton's</span> <span m='1670980'>method,</span> <span
  m='1672260'>tell</span> <span m='1672430'>me</span> <span
  m='1672830'>what</span> <span m='1674860'>the</span> <span
  m='1674970'>derivative</span> <span m='1675650'>of</span> <span
  m='1676020'>f</span> <span m='1676180'>of x</span> <span
  m='1676330'>is.</span> <span m='1679590'>Somebody's</span> <span
  m='1679900'>stretching</span> <span m='1680310'>at</span> <span
  m='1680370'>the</span> <span m='1680440'>back,</span> <span
  m='1680870'>but</span> <span m='1681190'>I</span> <span
  m='1681210'>don't</span> <span m='1681350'>think</span> <span
  m='1681470'>that</span> <span m='1681540'>was</span> <span
  m='1682830'>an</span> <span m='1682890'>answer.</span> <span
  m='1683720'>Someone at</span> <span m='1683960'>the</span> <span
  m='1684040'>back?</span> <span m='1686870'>Too</span> <span
  m='1687020'>easy</span> <span m='1687310'>a</span> <span
  m='1687370'>question?</span> <span m='1688580'>For</span> <span
  m='1688740'>the</span> <span m='1688830'>cushion.</span> </p><p><span
  m='1690472'>AUDIENCE: 1 over</span> <span m='1690963'>negative</span> <span
  m='1691454'>x squared.</span> </p><p><span m='1691945'>PROFESSOR: 1
  over</span> <span m='1692436'>negative x</span> <span
  m='1692930'>squared.</span> <span m='1693440'>Who's</span> <span
  m='1693610'>that?</span> <span m='1694710'>All</span> <span
  m='1694860'>right.</span> <span m='1695370'>You can</span> <span
  m='1695670'>come pick</span> <span m='1695760'>this</span> <span
  m='1696070'>up.</span> <span m='1697650'>Whatever.</span> <span
  m='1699280'>Cut</span> <span m='1699430'>the</span> <span
  m='1699490'>monotony</span> <span m='1699870'>here.</span> <span
  m='1702720'>Just</span> <span m='1702890'>veered</span> <span
  m='1703140'>to</span> <span m='1703210'>the</span> <span
  m='1703250'>left.</span> <span m='1703570'>I</span> <span
  m='1703640'>think</span> <span m='1703780'>next time</span> <span
  m='1704010'>I'm</span> <span m='1704190'>going</span> <span
  m='1704300'>to</span> <span m='1704580'>weight</span> <span
  m='1704960'>them</span> <span m='1705050'>or</span> <span
  m='1705160'>something.</span> <span m='1706590'>Let's</span> <span
  m='1706740'>just</span> <span m='1706840'>do</span> <span
  m='1706970'>frisbees</span> <span m='1707420'>next</span> <span
  m='1707630'>time.</span> <span m='1707910'>Let's</span> <span
  m='1708060'>just</span> <span m='1708190'>do</span> <span
  m='1708300'>frisbees</span> <span m='1708730'>next</span> <span
  m='1708950'>time.</span> <span m='1710230'>It</span> <span
  m='1710530'>makes</span> <span m='1710750'>it</span> <span
  m='1710840'>easy.</span> <span m='1711370'>Forget</span> <span
  m='1711670'>cushions.</span> <span m='1713450'>No?</span> <span
  m='1714870'>Frisbees</span> <span m='1715490'>or</span> <span
  m='1715560'>cushions?</span> <span m='1717050'>How</span> <span
  m='1717090'>many want</span> <span m='1717340'>frisbees?</span> <span
  m='1719300'>How</span> <span m='1719440'>many</span> <span
  m='1719580'>want</span> <span m='1719750'>cushions?</span> <span
  m='1721530'>Frisbees</span> <span m='1721970'>win.</span> </p><p><span
  m='1724470'>So</span> <span m='1724680'>you</span> <span
  m='1724800'>got</span> <span m='1726300'>derivative</span> <span
  m='1727040'>of</span> <span m='1727250'>x</span> <span m='1727460'>is</span>
  <span m='1727790'>minus</span> <span m='1728140'>1</span> <span
  m='1728400'>divided</span> <span m='1728680'>by</span> <span
  m='1728820'>x</span> <span m='1729020'>squared.</span> <span
  m='1729870'>And</span> <span m='1730000'>then</span> <span
  m='1730150'>if</span> <span m='1730220'>you</span> <span m='1730310'>go</span>
  <span m='1730470'>off</span> <span m='1731270'>and</span> <span
  m='1733380'>apply</span> <span m='1733730'>Newton's</span> <span
  m='1734080'>method--</span> <span m='1734480'>and</span> <span m='1734690'>I'm
  not</span> <span m='1734800'>going</span> <span m='1734890'>to</span> <span
  m='1734940'>go</span> <span m='1735110'>through</span> <span
  m='1736070'>the</span> <span m='1736770'>symbolic</span> <span
  m='1737410'>equations</span> <span m='1737970'>here</span> <span
  m='1738400'>associated</span> <span m='1738820'>with</span> <span
  m='1739000'>Newton's</span> <span m='1739310'>method--</span> <span
  m='1739950'>but</span> <span m='1740070'>that's</span> <span
  m='1740580'>basically</span> <span m='1741120'>the</span> <span
  m='1741210'>same</span> <span m='1741490'>as</span> <span
  m='1741580'>we</span> <span m='1741670'>did</span> <span
  m='1741840'>before.</span> <span m='1742780'>You</span> <span
  m='1742890'>are</span> <span m='1742980'>computing</span> <span
  m='1743500'>a</span> <span m='1743610'>tangent,</span> <span
  m='1745070'>and</span> <span m='1745900'>the</span> <span
  m='1746040'>new</span> <span m='1747060'>value</span> <span
  m='1747590'>of</span> <span m='1748030'>xi</span> <span
  m='1748450'>plus</span> <span m='1748720'>1</span> <span
  m='1749380'>given</span> <span m='1749620'>the</span> <span
  m='1749690'>value</span> <span m='1750030'>of</span> <span
  m='1750140'>xi</span> <span m='1751010'>is</span> <span m='1751160'>the</span>
  <span m='1751260'>x-intercept.</span> <span m='1752860'>And</span> <span
  m='1753360'>we</span> <span m='1753500'>needed</span> <span
  m='1754550'>the</span> <span m='1754630'>derivative</span> <span
  m='1755270'>to</span> <span m='1755410'>compute</span> <span
  m='1755750'>that.</span> </p><p><span m='1756740'>But</span> <span
  m='1757170'>bottom</span> <span m='1757430'>line,</span> <span
  m='1758300'>you</span> <span m='1758410'>have</span> <span
  m='1758810'>xi</span> <span m='1759320'>plus</span> <span m='1759600'>1</span>
  <span m='1760560'>equals</span> <span m='1761590'>xi</span> <span
  m='1762230'>minus</span> <span m='1765160'>f</span> <span
  m='1765400'>of</span> <span m='1765510'>xi</span> <span
  m='1767310'>divided</span> <span m='1767830'>by</span> <span
  m='1768740'>f</span> <span m='1768940'>prime</span> <span
  m='1769310'>of</span> <span m='1769420'>xi.</span> <span m='1770830'>So</span>
  <span m='1770920'>that's</span> <span m='1771630'>the</span> <span
  m='1771800'>Newton</span> <span m='1772120'>iteration.</span> <span
  m='1774000'>And</span> <span m='1775940'>it's</span> <span
  m='1776130'>worth</span> <span m='1777270'>plugging</span> <span
  m='1777830'>in</span> <span m='1780950'>the</span> <span
  m='1781060'>various</span> <span m='1781390'>values</span> <span
  m='1781810'>here.</span> <span m='1782130'>1</span> <span
  m='1782680'>divided</span> <span m='1783010'>by</span> <span
  m='1783270'>xi</span> <span m='1783670'>minus</span> <span
  m='1783970'>b</span> <span m='1784250'>divided</span> <span
  m='1784620'>by</span> <span m='1784840'>r.</span> <span
  m='1785740'>That's</span> <span m='1785940'>f</span> <span m='1786080'>of
  x</span> <span m='1786480'>on</span> <span m='1786640'>top</span> <span
  m='1787540'>divided</span> <span m='1787880'>by</span> <span
  m='1789340'>minus</span> <span m='1789670'>1</span> <span
  m='1790330'>divided</span> <span m='1790740'>by</span> <span
  m='1790990'>xi</span> <span m='1791450'>square.</span> <span
  m='1792810'>So</span> <span m='1792880'>that's</span> <span
  m='1793100'>the</span> <span m='1793170'>derivative</span> <span
  m='1793630'>over</span> <span m='1793800'>here.</span> <span
  m='1794610'>So</span> <span m='1794630'>all</span> <span
  m='1794730'>I'm</span> <span m='1794820'>doing</span> <span
  m='1795020'>is</span> <span m='1795130'>plugging</span> <span
  m='1795440'>things</span> <span m='1795690'>in.</span> <span
  m='1796260'>But</span> <span m='1796420'>you</span> <span
  m='1796510'>want</span> <span m='1796630'>to</span> <span
  m='1796670'>visualize</span> <span m='1797190'>this</span> <span
  m='1798250'>because</span> <span m='1799210'>this</span> <span
  m='1799470'>is</span> <span m='1799940'>really</span> <span
  m='1800140'>what</span> <span m='1800330'>we</span> <span
  m='1800410'>need</span> <span m='1800550'>to</span> <span
  m='1800600'>compute.</span> <span m='1801620'>And</span> <span
  m='1802160'>we</span> <span m='1802260'>have</span> <span
  m='1802440'>xi</span> <span m='1802820'>plus</span> <span m='1803080'>1</span>
  <span m='1804140'>equals</span> <span m='1804510'>xi</span> <span
  m='1806030'>plus</span> <span m='1806380'>xi</span> <span
  m='1806770'>square</span> <span m='1810230'>times</span> <span
  m='1810820'>1</span> <span m='1811080'>over</span> <span m='1813090'>xi</span>
  <span m='1813620'>minus b</span> <span m='1814000'>divided</span> <span
  m='1814550'>by</span> <span m='1814730'>r.</span> <span m='1816050'>And</span>
  <span m='1816460'>finally</span> <span m='1817560'>I</span> <span
  m='1817660'>get</span> <span m='1818050'>2xi</span> <span
  m='1819640'>minus</span> <span m='1820720'>b</span> <span
  m='1821130'>xi</span> <span m='1821550'>square</span> <span
  m='1822710'>divided</span> <span m='1823040'>by</span> <span
  m='1823200'>r.</span> <span m='1824800'>That</span> <span
  m='1825010'>is</span> <span m='1825420'>key.</span> <span
  m='1826800'>This</span> <span m='1827410'>is</span> <span
  m='1827610'>pretty</span> <span m='1827790'>important.</span> </p><p><span
  m='1829690'>So</span> <span m='1830290'>let's</span> <span
  m='1830470'>us</span> <span m='1830600'>look</span> <span
  m='1831110'>all</span> <span m='1831320'>the</span> <span
  m='1831400'>way</span> <span m='1831520'>to</span> <span
  m='1831590'>the</span> <span m='1831700'>left,</span> <span
  m='1832340'>which</span> <span m='1832380'>is</span> <span
  m='1832470'>xi</span> <span m='1833370'>plus</span> <span
  m='1833710'>1,</span> <span m='1834500'>all</span> <span
  m='1834690'>the</span> <span m='1834760'>way</span> <span
  m='1834880'>to</span> <span m='1834960'>the</span> <span
  m='1835070'>right,</span> <span m='1836060'>2</span> <span
  m='1836330'>times</span> <span m='1836710'>xi.</span> <span
  m='1837620'>That</span> <span m='1837770'>doesn't</span> <span
  m='1837930'>scare</span> <span m='1838250'>us,</span> <span
  m='1839220'>2</span> <span m='1839400'>times</span> <span
  m='1839770'>something.</span> <span m='1840610'>Especially</span> <span
  m='1840970'>base</span> <span m='1841300'>2,</span> <span
  m='1841510'>pretty</span> <span m='1841760'>easy.</span> <span
  m='1843070'>That's</span> <span m='1843230'>a</span> <span
  m='1843270'>multiply.</span> <span m='1843910'>Multiplies</span> <span
  m='1844330'>don't</span> <span m='1844510'>scare</span> <span
  m='1844810'>us</span> <span m='1844990'>because</span> <span
  m='1845240'>we</span> <span m='1845340'>know</span> <span
  m='1845540'>how</span> <span m='1845640'>to</span> <span m='1845710'>do</span>
  <span m='1845830'>multiplies</span> <span m='1846300'>anyway.</span> <span
  m='1847090'>This</span> <span m='1847250'>is</span> <span m='1847510'>a</span>
  <span m='1847600'>simple</span> <span m='1848020'>multiply.</span> <span
  m='1849810'>And</span> <span m='1849990'>then</span> <span
  m='1850630'>I</span> <span m='1850750'>got</span> <span m='1850900'>a</span>
  <span m='1850950'>square</span> <span m='1851450'>here.</span> <span
  m='1852390'>Square.</span> <span m='1852560'>Not</span> <span
  m='1853020'>a</span> <span m='1853040'>square</span> <span
  m='1853390'>root.</span> <span m='1854130'>Squares</span> <span
  m='1854910'>don't</span> <span m='1855110'>scare</span> <span
  m='1855420'>us</span> <span m='1855620'>because</span> <span
  m='1856000'>that's</span> <span m='1856330'>a</span> <span
  m='1856380'>multiply,</span> <span m='1857240'>just</span> <span
  m='1857390'>multiplying</span> <span m='1857830'>the</span> <span
  m='1857920'>same</span> <span m='1858140'>number</span> <span
  m='1858710'>to</span> <span m='1858820'>itself.</span> <span
  m='1859700'>And</span> <span m='1859950'>this</span> <span
  m='1860120'>doesn't</span> <span m='1860400'>scare</span> <span
  m='1860690'>us</span> <span m='1860870'>because</span> <span
  m='1861120'>we</span> <span m='1861230'>know</span> <span
  m='1861400'>that</span> <span m='1861850'>we've</span> <span
  m='1862040'>chosen</span> <span m='1862490'>r</span> <span
  m='1863340'>to</span> <span m='1863410'>be</span> <span m='1863580'>an</span>
  <span m='1863680'>easy</span> <span m='1864040'>division.</span> </p><p><span
  m='1866620'>So</span> <span m='1866890'>all</span> <span m='1867140'>of</span>
  <span m='1867220'>the</span> <span m='1867290'>operations</span> <span
  m='1867800'>here</span> <span m='1868720'>are</span> <span
  m='1870640'>either</span> <span m='1870940'>easy,</span> <span
  m='1872140'>or</span> <span m='1872660'>they</span> <span
  m='1872770'>require</span> <span m='1873080'>a</span> <span
  m='1873130'>multiply.</span> <span m='1875720'>So</span> <span
  m='1876860'>remember</span> <span m='1877210'>I'm</span> <span
  m='1877320'>going</span> <span m='1877430'>to</span> <span
  m='1877480'>put</span> <span m='1877600'>a</span> <span
  m='1877660'>picture</span> <span m='1877970'>up</span> <span
  m='1878140'>towards</span> <span m='1878260'>the</span> <span
  m='1878430'>end</span> <span m='1878670'>here</span> <span
  m='1879290'>that</span> <span m='1879480'>tells</span> <span
  m='1879750'>you</span> <span m='1880570'>the</span> <span
  m='1880940'>overall</span> <span m='1881420'>structure</span> <span
  m='1882090'>for</span> <span m='1882430'>computing</span> <span
  m='1883280'>square</span> <span m='1883650'>root</span> <span
  m='1883740'>of</span> <span m='1883870'>a or</span> <span
  m='1884110'>square</span> <span m='1884510'>root</span> <span
  m='1884600'>of</span> <span m='1884700'>2.</span> <span m='1885400'>But</span>
  <span m='1885540'>we've</span> <span m='1885680'>just</span> <span
  m='1885950'>sort</span> <span m='1886120'>of</span> <span
  m='1886940'>sold</span> <span m='1887370'>out</span> <span
  m='1887570'>to</span> <span m='1887650'>Newton,</span> <span
  m='1888040'>if</span> <span m='1888140'>you</span> <span
  m='1888260'>will.</span> <span m='1889010'>Because</span> <span
  m='1889620'>we</span> <span m='1889870'>said</span> <span
  m='1890230'>that</span> <span m='1890350'>we're going</span> <span
  m='1890460'>to</span> <span m='1890500'>use</span> <span
  m='1890960'>Newton's</span> <span m='1891540'>method</span> <span
  m='1892360'>to</span> <span m='1892450'>compute</span> <span
  m='1896740'>essentially,</span> <span m='1897990'>iteratively,</span> <span
  m='1898680'>square</span> <span m='1899020'>root</span> <span
  m='1899170'>of</span> <span m='1899300'>a.</span> <span m='1899960'>And</span>
  <span m='1900190'>within</span> <span m='1900460'>the</span> <span
  m='1900550'>Newton</span> <span m='1900700'>method,</span> <span
  m='1902470'>the</span> <span m='1902610'>first</span> <span
  m='1902920'>iteration,</span> <span m='1903350'>if</span> <span
  m='1903430'>you</span> <span m='1903550'>will,</span> <span
  m='1903830'>of</span> <span m='1903920'>the</span> <span
  m='1904000'>Newton</span> <span m='1904220'>method,</span> <span
  m='1904890'>we</span> <span m='1905000'>had</span> <span m='1905120'>to</span>
  <span m='1905190'>compute</span> <span m='1905820'>a</span> <span
  m='1906310'>reciprocal.</span> <span m='1907750'>We</span> <span
  m='1907960'>had to</span> <span m='1908020'>compute</span> <span
  m='1908310'>1</span> <span m='1908490'>over</span> <span
  m='1908820'>xi.</span> <span m='1909730'>And</span> <span
  m='1910230'>in</span> <span m='1910360'>order</span> <span
  m='1910480'>to</span> <span m='1910560'>compute</span> <span
  m='1910850'>1</span> <span m='1911000'>over</span> <span
  m='1911270'>xi,</span> <span m='1912070'>we're</span> <span
  m='1912160'>going</span> <span m='1912250'>to</span> <span
  m='1912290'>apply</span> <span m='1914060'>Newton's</span> <span
  m='1914400'>method</span> <span m='1914670'>again</span> <span
  m='1915740'>like</span> <span m='1915910'>I</span> <span
  m='1915960'>showed</span> <span m='1916170'>over</span> <span
  m='1916320'>here</span> <span m='1916570'>and</span> <span
  m='1916710'>over</span> <span m='1916850'>there.</span> </p><p><span
  m='1918270'>And</span> <span m='1918500'>so</span> <span
  m='1919130'>that</span> <span m='1919340'>division</span> <span
  m='1920280'>is</span> <span m='1920500'>going</span> <span
  m='1920750'>to</span> <span m='1921040'>require</span> <span
  m='1922920'>iteration.</span> <span m='1923920'>But</span> <span
  m='1924110'>the</span> <span m='1924170'>iteration</span> <span
  m='1925500'>at</span> <span m='1925680'>the</span> <span
  m='1925780'>second</span> <span m='1926120'>level</span> <span
  m='1926890'>is</span> <span m='1927220'>one</span> <span m='1927440'>of</span>
  <span m='1927520'>multiplication.</span> <span m='1929150'>You're gonna</span>
  <span m='1929360'>repeatedly</span> <span m='1929830'>apply</span> <span
  m='1930120'>multiplication</span> <span m='1931180'>because</span> <span
  m='1931350'>you're</span> <span m='1931440'>going</span> <span
  m='1931530'>to</span> <span m='1931580'>go</span> <span m='1932260'>xi</span>
  <span m='1932610'>plus</span> <span m='1932840'>1</span> <span
  m='1933480'>based</span> <span m='1933950'>on</span> <span
  m='1934070'>xi</span> <span m='1934510'>using</span> <span
  m='1934830'>multiplication</span> <span m='1935520'>and</span> <span
  m='1935630'>some</span> <span m='1935830'>easy</span> <span
  m='1936930'>operations.</span> <span m='1937890'>And</span> <span
  m='1938010'>then</span> <span m='1938120'>you</span> <span
  m='1938240'>go</span> <span m='1938380'>xi</span> <span
  m='1938670'>plus</span> <span m='1938930'>2,</span> <span
  m='1939230'>xi</span> <span m='1939530'>plus</span> <span
  m='1939750'>3,</span> <span m='1940520'>and</span> <span m='1940670'>so</span>
  <span m='1940790'>on</span> <span m='1940910'>and</span> <span
  m='1940990'>so</span> <span m='1941130'>forth.</span> <span
  m='1942070'>That</span> <span m='1942890'>make</span> <span
  m='1943020'>sense?</span> <span m='1944062'>I'll</span> <span m='1944410'>try
  and</span> <span m='1944550'>put</span> <span m='1944710'>this</span> <span
  m='1944870'>up</span> <span m='1945480'>to</span> <span
  m='1946060'>give</span> <span m='1946210'>you</span> <span
  m='1946270'>the</span> <span m='1946570'>complete</span> <span
  m='1946920'>picture</span> <span m='1947590'>once</span> <span
  m='1947790'>we're</span> <span m='1947930'>done</span> <span
  m='1949250'>talking</span> <span m='1949570'>about</span> <span
  m='1950770'>the</span> <span m='1951910'>division</span> <span
  m='1952250'>algorithm</span> <span m='1953880'>and</span> <span
  m='1954100'>its</span> <span m='1954240'>complexity.</span> </p><p><span
  m='1955820'>But</span> <span m='1956140'>before</span> <span
  m='1956350'>I</span> <span m='1956410'>do</span> <span
  m='1956550'>that,</span> <span m='1956880'>I</span> <span
  m='1956980'>just</span> <span m='1956990'>want</span> <span
  m='1957110'>to</span> <span m='1957150'>give</span> <span
  m='1957270'>you</span> <span m='1957370'>a</span> <span
  m='1957430'>sense</span> <span m='1957800'>of</span> <span
  m='1959890'>the</span> <span m='1960030'>convergence</span> <span
  m='1960580'>of</span> <span m='1960710'>this</span> <span
  m='1960970'>scheme.</span> <span m='1961440'>Again,</span> <span
  m='1962400'>I</span> <span m='1962510'>want</span> <span m='1962630'>to</span>
  <span m='1962670'>give</span> <span m='1962780'>you</span> <span
  m='1962850'>an</span> <span m='1962910'>example</span> <span
  m='1963360'>first,</span> <span m='1963820'>and</span> <span
  m='1963920'>then</span> <span m='1964040'>I'll</span> <span
  m='1964200'>argue</span> <span m='1964610'>about</span> <span
  m='1965490'>the</span> <span m='1965610'>convergence.</span> <span
  m='1970330'>You</span> <span m='1970490'>have</span> <span
  m='1970650'>to</span> <span m='1970990'>run</span> <span
  m='1971170'>this</span> <span m='1971300'>iteratively.</span> <span
  m='1972230'>You've</span> <span m='1972340'>got</span> <span
  m='1972460'>to</span> <span m='1972510'>make</span> <span m='1973140'>i</span>
  <span m='1974100'>to</span> <span m='1974190'>get</span> <span
  m='1974380'>to</span> <span m='1974440'>the</span> <span
  m='1974530'>point</span> <span m='1974820'>where</span> <span
  m='1975280'>it's</span> <span m='1975460'>large</span> <span
  m='1975780'>enough</span> <span m='1976090'>that</span> <span
  m='1976230'>you</span> <span m='1976340'>have</span> <span
  m='1976600'>your</span> <span m='1977280'>digits</span> <span
  m='1977590'>of</span> <span m='1977680'>precision.</span> <span
  m='1979230'>And</span> <span m='1979550'>just</span> <span
  m='1979700'>as</span> <span m='1979800'>an</span> <span
  m='1979880'>example,</span> <span m='1981020'>let's</span> <span
  m='1981190'>say</span> <span m='1981340'>we</span> <span
  m='1981480'>want</span> <span m='1983230'>r</span> <span
  m='1983500'>divided</span> <span m='1983830'>by</span> <span
  m='1983980'>b</span> <span m='1985290'>equals</span> <span
  m='1986270'>2</span> <span m='1986450'>raised</span> <span
  m='1986680'>to</span> <span m='1986760'>16</span> <span
  m='1987250'>divided</span> <span m='1987560'>by</span> <span
  m='1987710'>5.</span> <span m='1988520'>So</span> <span
  m='1988610'>this</span> <span m='1988750'>is</span> <span m='1988860'>a</span>
  <span m='1988930'>fairly</span> <span m='1989320'>straightforward</span> <span
  m='1989780'>example.</span> <span m='1990220'>But</span> <span
  m='1990700'>when</span> <span m='1990800'>you</span> <span
  m='1990880'>get</span> <span m='1991010'>up</span> <span m='1991150'>to</span>
  <span m='1991220'>integers,</span> <span m='1992180'>it</span> <span
  m='1992480'>turns</span> <span m='1992730'>out</span> <span
  m='1992880'>it's</span> <span m='1993350'>evocative.</span> </p><p><span
  m='1994660'>So</span> <span m='1997870'>r</span> <span m='1998210'>was</span>
  <span m='1998350'>selected</span> <span m='1998760'>to</span> <span
  m='1998810'>be</span> <span m='1998930'>2</span> <span m='1999060'>raised
  to</span> <span m='1999270'>k</span> <span m='1999720'>to</span> <span
  m='1999790'>make</span> <span m='1999980'>for</span> <span
  m='2000140'>easy</span> <span m='2000450'>division.</span> <span
  m='2001760'>And</span> <span m='2003700'>what</span> <span
  m='2003890'>I</span> <span m='2003920'>really</span> <span
  m='2004150'>want</span> <span m='2005120'>is</span> <span
  m='2005300'>that.</span> <span m='2006780'>And</span> <span
  m='2007290'>I</span> <span m='2007390'>want</span> <span m='2007530'>to</span>
  <span m='2007590'>see</span> <span m='2007870'>how</span> <span
  m='2008040'>I</span> <span m='2008140'>get</span> <span m='2008450'>to</span>
  <span m='2008540'>that</span> <span m='2009670'>using</span> <span
  m='2010020'>Newton's</span> <span m='2010360'>method.</span> <span
  m='2011540'>And</span> <span m='2012520'>our</span> <span
  m='2012690'>initial</span> <span m='2013150'>guess,</span> <span
  m='2019880'>let's</span> <span m='2020090'>say</span> <span
  m='2021720'>we</span> <span m='2022180'>try</span> <span m='2022450'>2</span>
  <span m='2022590'>raised</span> <span m='2022790'>to</span> <span
  m='2022880'>16</span> <span m='2023250'>divided</span> <span
  m='2023510'>by</span> <span m='2023650'>4,</span> <span
  m='2024690'>because</span> <span m='2025010'>we</span> <span
  m='2025110'>know</span> <span m='2026630'>how to</span> <span
  m='2026670'>divide</span> <span m='2027090'>by</span> <span
  m='2027590'>a</span> <span m='2027680'>power</span> <span
  m='2027970'>of</span> <span m='2028110'>two.</span> <span
  m='2029010'>And</span> <span m='2029430'>so</span> <span
  m='2029570'>that's</span> <span m='2029800'>2</span> <span
  m='2029910'>raised</span> <span m='2030120'>to</span> <span
  m='2030190'>14.</span> <span m='2030600'>And</span> <span
  m='2030680'>that's</span> <span m='2030820'>our</span> <span
  m='2030940'>initial</span> <span m='2031310'>guess.</span> <span
  m='2031890'>So</span> <span m='2032020'>think</span> <span
  m='2032160'>of</span> <span m='2032250'>that</span> <span
  m='2032410'>as</span> <span m='2032540'>being</span> <span
  m='2033740'>x0.</span> <span m='2036400'>That is</span> <span
  m='2036540'>x0.</span> <span m='2038160'>And</span> <span
  m='2039670'>that</span> <span m='2040150'>16384.</span> <span
  m='2042834'>x1</span> <span m='2044690'>is</span> <span
  m='2044870'>going</span> <span m='2045090'>to</span> <span
  m='2045190'>be</span> <span m='2046160'>2</span> <span
  m='2046400'>times</span> <span m='2046940'>16384,</span> <span
  m='2048969'>which</span> <span m='2049100'>is</span> <span
  m='2049199'>exactly</span> <span m='2049610'>that,</span> <span
  m='2050679'>minus</span> <span m='2052020'>5</span> <span
  m='2052590'>times</span> <span m='2054020'>16384</span> <span
  m='2054850'>whole</span> <span m='2056280'>square.</span> </p><p><span
  m='2056850'>So</span> <span m='2056949'>now</span> <span
  m='2057010'>you're</span> <span m='2057139'>starting</span> <span
  m='2057370'>to</span> <span m='2057440'>square</span> <span
  m='2058360'>a</span> <span m='2058420'>fairly</span> <span
  m='2058719'>big</span> <span m='2058949'>number.</span> <span
  m='2059610'>And</span> <span m='2059870'>obviously</span> <span
  m='2060190'>if</span> <span m='2060260'>you'd</span> <span
  m='2060370'>started</span> <span m='2060710'>with</span> <span
  m='2060870'>an</span> <span m='2061050'>even</span> <span
  m='2061300'>bigger</span> <span m='2061639'>r,</span> <span
  m='2062159'>this</span> <span m='2062330'>would</span> <span
  m='2062440'>be</span> <span m='2062590'>a</span> <span
  m='2063130'>large</span> <span m='2063550'>number.</span> <span
  m='2066920'>You</span> <span m='2067050'>go</span> <span
  m='2067270'>65536</span> <span m='2070860'>equals--</span> <span
  m='2071510'>and</span> <span m='2071639'>this</span> <span
  m='2071780'>is</span> <span m='2071909'>12288.</span> <span
  m='2075661'>So</span> <span m='2076040'>you</span> <span
  m='2076170'>really</span> <span m='2076550'>have</span> <span
  m='2076790'>one</span> <span m='2077350'>digit</span> <span
  m='2077639'>of</span> <span m='2077730'>precision</span> <span
  m='2078190'>there.</span> <span m='2078989'>But</span> <span
  m='2079139'>the</span> <span m='2079190'>next</span> <span
  m='2079460'>time</span> <span m='2079690'>around,</span> <span
  m='2080750'>you</span> <span m='2080929'>get</span> <span m='2081420'>2</span>
  <span m='2081670'>times</span> <span m='2083020'>12288</span> <span
  m='2085610'>minus</span> <span m='2086010'>5</span> <span
  m='2086440'>times</span> <span m='2087449'>12288</span> <span
  m='2089659'>square</span> <span m='2090900'>divided</span> <span
  m='2091219'>by</span> <span m='2091389'>65536.</span> <span
  m='2093159'>And</span> <span m='2093310'>this</span> <span
  m='2093600'>division</span> <span m='2093960'>is</span> <span
  m='2094080'>easy.</span> <span m='2095239'>It's a</span> <span
  m='2095330'>shift.</span> <span m='2095780'>You</span> <span
  m='2095880'>get</span> <span m='2096060'>to</span> <span
  m='2096159'>13056.</span> <span m='2099810'>And</span> <span
  m='2100430'>I</span> <span m='2100530'>won't</span> <span
  m='2100700'>write</span> <span m='2100920'>this</span> <span
  m='2101040'>whole</span> <span m='2101240'>thing</span> <span
  m='2101410'>out,</span> <span m='2101640'>but</span> <span
  m='2101770'>if</span> <span m='2101850'>you</span> <span
  m='2101950'>take</span> <span m='2102200'>that,</span> <span
  m='2103040'>the</span> <span m='2103130'>next</span> <span
  m='2103340'>thing</span> <span m='2103440'>you'll</span> <span
  m='2103550'>get</span> <span m='2103780'>is</span> <span
  m='2103960'>13107.</span> </p><p><span m='2107080'>So</span> <span
  m='2107350'>as</span> <span m='2107530'>you</span> <span
  m='2107610'>can</span> <span m='2107730'>see,</span> <span
  m='2108900'>there's</span> <span m='2109630'>rapid</span> <span
  m='2110060'>convergence</span> <span m='2110700'>here.</span> <span
  m='2111710'>And</span> <span m='2113170'>you</span> <span
  m='2113400'>can</span> <span m='2113560'>actually</span> <span
  m='2113890'>do</span> <span m='2114190'>a</span> <span m='2114240'>very</span>
  <span m='2114590'>similar</span> <span m='2114950'>analysis</span> <span
  m='2115690'>to</span> <span m='2115980'>the</span> <span
  m='2116150'>epsilon</span> <span m='2116660'>analysis--</span> <span
  m='2117490'>and I'll</span> <span m='2117940'>put</span> <span
  m='2118050'>it</span> <span m='2118130'>in</span> <span m='2118220'>the</span>
  <span m='2118280'>notes,</span> <span m='2118620'>but</span> <span
  m='2118770'>I</span> <span m='2118800'>won't</span> <span
  m='2119000'>do</span> <span m='2119120'>it</span> <span
  m='2119200'>here--</span> <span m='2119950'>that</span> <span
  m='2120100'>I</span> <span m='2120160'>did</span> <span m='2120590'>for</span>
  <span m='2120940'>the</span> <span m='2121060'>square</span> <span
  m='2121440'>root</span> <span m='2122220'>iteration</span> <span
  m='2123180'>to</span> <span m='2123260'>show</span> <span
  m='2123500'>that</span> <span m='2123650'>you</span> <span
  m='2123740'>have</span> <span m='2123890'>a</span> <span
  m='2123960'>quadratic</span> <span m='2124580'>the</span> <span
  m='2124660'>rate</span> <span m='2124860'>of</span> <span
  m='2124950'>convergence</span> <span m='2129270'>when</span> <span
  m='2129380'>you</span> <span m='2129460'>apply</span> <span
  m='2129910'>Newton's</span> <span m='2130260'>method</span> <span
  m='2131100'>to</span> <span m='2131210'>division</span> <span
  m='2131680'>as</span> <span m='2131800'>well.</span> </p><p><span
  m='2133700'>So</span> <span m='2134010'>you</span> <span
  m='2134410'>can</span> <span m='2134510'>prove</span> <span
  m='2134780'>that</span> <span m='2135150'>using</span> <span
  m='2136060'>the</span> <span m='2137000'>symbolic</span> <span
  m='2137440'>analysis</span> <span m='2137960'>than</span> <span
  m='2138080'>we</span> <span m='2138190'>did</span> <span
  m='2138730'>very</span> <span m='2138930'>similar</span> <span
  m='2139340'>to</span> <span m='2139400'>the</span> <span
  m='2139490'>epsilon</span> <span m='2140380'>n</span> <span
  m='2141100'>relationship</span> <span m='2141420'>to</span> <span
  m='2141740'>epsilon</span> <span m='2142140'>n</span> <span
  m='2142280'>plus</span> <span m='2142480'>1.</span> <span
  m='2143240'>I'd</span> <span m='2143420'>suggest</span> <span
  m='2143740'>that</span> <span m='2143860'>it's</span> <span
  m='2144000'>a</span> <span m='2144070'>difference</span> <span
  m='2144320'>equation</span> <span m='2144740'>here</span> <span
  m='2145290'>so</span> <span m='2145430'>that</span> <span
  m='2145580'>analysis</span> <span m='2146790'>is</span> <span
  m='2146920'>not</span> <span m='2147040'>exactly</span> <span
  m='2147490'>the</span> <span m='2147580'>same.</span> <span
  m='2148230'>But</span> <span m='2148360'>you</span> <span
  m='2148450'>can</span> <span m='2148750'>run</span> <span
  m='2148910'>through</span> <span m='2149060'>that,</span> <span
  m='2149750'>and</span> <span m='2150190'>you</span> <span
  m='2150330'>can</span> <span m='2150430'>read</span> <span
  m='2150590'>that</span> <span m='2151060'>in</span> <span
  m='2151190'>the</span> <span m='2151280'>notes.</span> </p><p><span
  m='2153200'>So</span> <span m='2153740'>we're</span> <span
  m='2153880'>in</span> <span m='2154090'>business.</span> <span
  m='2154700'>Finally</span> <span m='2155630'>things</span> <span
  m='2155830'>are</span> <span m='2155870'>looking</span> <span
  m='2156140'>up</span> <span m='2156690'>with</span> <span
  m='2156900'>respect</span> <span m='2157250'>to</span> <span
  m='2157330'>being</span> <span m='2157540'>able</span> <span
  m='2157740'>to</span> <span m='2158010'>actually</span> <span
  m='2158360'>implement</span> <span m='2158750'>this</span> <span
  m='2158950'>in</span> <span m='2159060'>practice.</span> <span
  m='2160850'>I</span> <span m='2160960'>want</span> <span m='2161110'>to</span>
  <span m='2161160'>talk</span> <span m='2161360'>about</span> <span
  m='2161890'>complexity.</span> <span m='2162850'>And</span> <span
  m='2163160'>I</span> <span m='2163240'>promise</span> <span
  m='2163640'>that</span> <span m='2163800'>there</span> <span
  m='2163910'>was</span> <span m='2164630'>a</span> <span
  m='2164700'>subtlety</span> <span m='2165210'>associated</span> <span
  m='2165720'>with</span> <span m='2167020'>the</span> <span
  m='2167180'>complexity</span> <span m='2167710'>of</span> <span
  m='2167800'>division</span> <span m='2168750'>in</span> <span
  m='2168890'>relation</span> <span m='2169270'>to</span> <span
  m='2169350'>multiplication,</span> <span m='2171400'>but</span> <span
  m='2172550'>let</span> <span m='2172710'>me</span> <span
  m='2172820'>just</span> <span m='2173010'>go</span> <span
  m='2173150'>over</span> <span m='2174130'>and</span> <span
  m='2174290'>write</span> <span m='2174520'>down</span> <span
  m='2174750'>what</span> <span m='2174870'>I</span> <span
  m='2174920'>just</span> <span m='2175160'>told</span> <span
  m='2175420'>you</span> <span m='2176490'>with</span> <span
  m='2176650'>respect</span> <span m='2176960'>to</span> <span
  m='2177030'>the</span> <span m='2178130'>number</span> <span
  m='2178460'>of</span> <span m='2178550'>iterations</span> <span
  m='2179220'>that</span> <span m='2181150'>division</span> <span
  m='2181510'>requires.</span> </p><p><span m='2183150'>So</span> <span
  m='2183450'>division,</span> <span m='2187460'>quadratic</span> <span
  m='2190430'>convergence.</span> <span m='2195020'>So</span> <span
  m='2195370'>number</span> <span m='2195680'>of</span> <span
  m='2195790'>digits</span> <span m='2198040'>doubles</span> <span
  m='2200670'>at</span> <span m='2200890'>each</span> <span
  m='2201060'>step.</span> <span m='2203470'>Good</span> <span
  m='2203590'>news.</span> <span m='2204730'>So</span> <span
  m='2205990'>d</span> <span m='2207800'>digits</span> <span
  m='2207970'>of</span> <span m='2208790'>precision,</span> <span
  m='2214300'>log</span> <span m='2214720'>d</span> <span
  m='2216280'>iterations.</span> <span m='2220130'>Now</span> <span
  m='2220390'>let's</span> <span m='2220620'>say</span> <span
  m='2220790'>that</span> <span m='2221840'>we</span> <span
  m='2222030'>have</span> <span m='2224050'>a</span> <span
  m='2224180'>particular</span> <span m='2224810'>algorithm</span> <span
  m='2225320'>for</span> <span m='2225530'>multiplication</span> <span
  m='2227590'>that</span> <span m='2227940'>I'm</span> <span
  m='2228110'>just</span> <span m='2228290'>going</span> <span
  m='2228410'>to</span> <span m='2228480'>say,</span> <span
  m='2228820'>since</span> <span m='2229020'>we</span> <span
  m='2229110'>have</span> <span m='2229270'>so</span> <span
  m='2229490'>many</span> <span m='2229670'>different</span> <span
  m='2229930'>algorithms,</span> <span m='2233330'>I'm</span> <span
  m='2233540'>going</span> <span m='2233660'>to</span> <span
  m='2233720'>say</span> <span m='2235110'>multiplication</span> <span
  m='2235920'>in</span> <span m='2237020'>theta</span> <span
  m='2238140'>n</span> <span m='2238330'>raised</span> <span m='2238660'>to
  alpha</span> <span m='2240070'>time,</span> <span m='2240550'>where
  alpha</span> <span m='2240880'>is</span> <span m='2241500'>greater</span>
  <span m='2241700'>than</span> <span m='2241820'>or</span> <span
  m='2241910'>equal</span> <span m='2242140'>to</span> <span
  m='2242220'>1.</span> <span m='2244290'>I</span> <span m='2244460'>just</span>
  <span m='2244620'>want</span> <span m='2244740'>to</span> <span
  m='2244780'>be</span> <span m='2245160'>general</span> <span
  m='2245570'>about</span> <span m='2245820'>it.</span> </p><p><span
  m='2246750'>And</span> <span m='2247000'>so</span> <span
  m='2247370'>assuming</span> <span m='2248380'>that</span> <span
  m='2248530'>I</span> <span m='2248620'>have</span> <span m='2249480'>a</span>
  <span m='2249530'>multiplication</span> <span m='2250150'>algorithm,</span>
  <span m='2252440'>that</span> <span m='2252640'>can</span> <span
  m='2252760'>run</span> <span m='2252970'>in</span> <span
  m='2253080'>theta</span> <span m='2253380'>n</span> <span m='2253590'>raised
  to</span> <span m='2253940'>alpha,</span> <span m='2255150'>where</span> <span
  m='2256910'>clearly</span> <span m='2257130'>you</span> <span
  m='2257260'>know</span> <span m='2257410'>alpha</span> <span
  m='2257800'>can</span> <span m='2257910'>be</span> <span
  m='2258000'>1.46</span> <span m='2258974'>for</span> <span m='2259461'>Toom
  3,</span> <span m='2259950'>et</span> <span m='2260050'>cetera.</span> <span
  m='2260950'>And</span> <span m='2262640'>it's</span> <span
  m='2262830'>not</span> <span m='2263020'>quite</span> <span
  m='2263370'>that</span> <span m='2263990'>for</span> <span
  m='2264310'>Schonhage-Strassen,</span> <span m='2265360'>but</span> <span
  m='2265870'>I</span> <span m='2266130'>just</span> <span
  m='2266270'>want</span> <span m='2266400'>to</span> <span
  m='2266440'>be</span> <span m='2268420'>working</span> <span
  m='2268790'>with</span> <span m='2268940'>one</span> <span
  m='2269160'>particular</span> <span m='2269520'>complexity.</span> <span
  m='2270450'>So I'll</span> <span m='2270610'>parameterize</span> <span
  m='2271220'>it</span> <span m='2271340'>in</span> <span
  m='2271430'>this</span> <span m='2271590'>fashion.</span> <span
  m='2272340'>And</span> <span m='2272640'>everything</span> <span
  m='2272960'>I</span> <span m='2273010'>say</span> <span m='2273280'>is</span>
  <span m='2273610'>going</span> <span m='2273740'>to</span> <span
  m='2273780'>be</span> <span m='2273890'>true</span> <span
  m='2275210'>for</span> <span m='2275380'>Schonhage-Strassen</span> <span
  m='2276620'>and</span> <span m='2276800'>Furer</span> <span
  m='2277160'>as</span> <span m='2277280'>well.</span> </p><p><span
  m='2278090'>But</span> <span m='2279410'>first,</span> <span
  m='2279780'>easy</span> <span m='2280030'>question.</span> <span
  m='2280890'>What</span> <span m='2281150'>is</span> <span
  m='2281670'>the</span> <span m='2281790'>complexity</span> <span
  m='2282340'>of</span> <span m='2282440'>division</span> <span
  m='2283890'>using</span> <span m='2285150'>the</span> <span
  m='2285350'>analysis</span> <span m='2286170'>that</span> <span
  m='2286360'>I've</span> <span m='2286440'>put</span> <span
  m='2286650'>on</span> <span m='2286760'>the</span> <span
  m='2286830'>board</span> <span m='2287100'>so</span> <span
  m='2287250'>far?</span> <span m='2289610'>n</span> <span
  m='2289920'>digit</span> <span m='2290190'>numbers</span> <span
  m='2291220'>it's</span> <span m='2291350'>going</span> <span
  m='2291480'>to</span> <span m='2291530'>be?</span> <span m='2294120'>I
  wanna</span> <span m='2294320'>hear</span> <span m='2294550'>from</span> <span
  m='2294730'>you.</span> <span m='2297630'>How</span> <span
  m='2297730'>many</span> <span m='2300340'>hard</span> <span
  m='2300620'>multipliers</span> <span m='2301060'>do</span> <span m='2301170'>I
  have?</span> <span m='2304520'>Log of?</span> </p><p><span
  m='2305476'>AUDIENCE: n.</span> </p><p><span m='2306270'>PROFESSOR: Log of
  n,</span> <span m='2306890'>right?</span> <span m='2307530'>It</span> <span
  m='2307670'>wasn't</span> <span m='2307860'>a</span> <span
  m='2307900'>hard</span> <span m='2308070'>question.</span> <span
  m='2310400'>So</span> <span m='2310540'>division</span> <span
  m='2310970'>would</span> <span m='2311120'>be</span> <span
  m='2311660'>theta</span> <span m='2314210'>log</span> <span
  m='2314830'>n</span> <span m='2315680'>times</span> <span m='2316190'>n</span>
  <span m='2316400'>raised</span> <span m='2316680'>to</span> <span
  m='2316770'>alpha.</span> <span m='2320060'>Everybody</span> <span
  m='2320380'>buy</span> <span m='2320550'>that?</span> <span
  m='2324760'>No?</span> <span m='2330260'>Ask</span> <span m='2330470'>a</span>
  <span m='2330530'>question</span> <span m='2330870'>if</span> <span
  m='2330950'>you're</span> <span m='2331060'>confused.</span> <span
  m='2335610'>Maybe</span> <span m='2335910'>I</span> <span
  m='2335950'>should</span> <span m='2336140'>say</span> <span
  m='2339840'>everybody</span> <span m='2340160'>buy</span> <span
  m='2340330'>that?</span> <span m='2344910'>How</span> <span
  m='2345050'>many</span> <span m='2345200'>people</span> <span
  m='2345380'>agree</span> <span m='2345580'>with</span> <span
  m='2345680'>that?</span> <span m='2346130'>Big</span> <span
  m='2346270'>O?</span> <span m='2347960'>How</span> <span
  m='2348030'>many</span> <span m='2348170'>people agree</span> <span
  m='2348540'>with</span> <span m='2348630'>that?</span> <span
  m='2352340'>Yeah,</span> <span m='2352520'>that's</span> <span
  m='2352700'>right.</span> <span m='2352890'>Big</span> <span
  m='2352960'>O.</span> <span m='2353560'>I'm</span> <span
  m='2354170'>hedging</span> <span m='2354480'>my</span> <span
  m='2354580'>bets</span> <span m='2354820'>here.</span> <span
  m='2356170'>I'm</span> <span m='2356320'>just</span> <span
  m='2356460'>saying</span> <span m='2356760'>big</span> <span
  m='2356870'>O.</span> <span m='2357550'>I</span> <span
  m='2357620'>could</span> <span m='2357750'>say</span> <span
  m='2357980'>big</span> <span m='2358070'>O</span> <span m='2358280'>of</span>
  <span m='2358780'>n</span> <span m='2359030'>cubed</span> <span
  m='2359680'>and</span> <span m='2359800'>you</span> <span m='2359960'>should
  all</span> <span m='2360130'>agree</span> <span m='2360350'>with</span> <span
  m='2360490'>me.</span> <span m='2361370'>Or</span> <span
  m='2361550'>big</span> <span m='2361650'>O</span> <span m='2361890'>of</span>
  <span m='2361980'>whatever.</span> <span m='2362780'>You had</span> <span
  m='2362900'>a</span> <span m='2362970'>question?</span> </p><p><span
  m='2364093'>AUDIENCE: What's the</span> <span m='2364556'>longest</span> <span
  m='2365019'>[INAUDIBLE]</span> <span m='2365482'>number of</span> <span
  m='2365945'>[INAUDIBLE]</span> <span m='2366408'>we</span> <span
  m='2366871'>need to</span> <span m='2367334'>get a</span> <span
  m='2367797'>certain</span> <span m='2368260'>level</span> <span
  m='2368723'>of</span> <span m='2369186'>[INAUDIBLE]?</span> </p><p><span
  m='2369660'>PROFESSOR: That's</span> <span m='2369700'>right.</span> <span
  m='2370310'>So</span> <span m='2370550'>if</span> <span m='2371014'>you</span>
  <span m='2371478'>want</span> <span m='2374020'>d</span> <span
  m='2374365'>digits of</span> <span m='2374710'>precision,</span> <span
  m='2375990'>then</span> <span m='2376980'>according</span> <span
  m='2377820'>to</span> <span m='2377920'>this</span> <span
  m='2379140'>argument--</span> <span m='2379820'>and</span> <span
  m='2380430'>I</span> <span m='2381140'>think</span> <span
  m='2381310'>you</span> <span m='2381390'>guys</span> <span
  m='2381590'>are</span> <span m='2381640'>a little</span> <span
  m='2381860'>doubtful</span> <span m='2382260'>here</span> <span
  m='2382460'>because</span> <span m='2382660'>I</span> <span
  m='2382710'>kept</span> <span m='2382960'>talking</span> <span
  m='2383190'>about</span> <span m='2383360'>subtleties,</span> <span
  m='2384260'>and</span> <span m='2384400'>in</span> <span
  m='2384500'>fact</span> <span m='2384800'>there's</span> <span
  m='2384990'>a</span> <span m='2385070'>subtlety</span> <span
  m='2385480'>here,</span> <span m='2386490'>which</span> <span
  m='2386550'>I</span> <span m='2386590'>want</span> <span m='2386750'>to</span>
  <span m='2387340'>get</span> <span m='2387530'>to--</span> <span
  m='2388080'>but</span> <span m='2388400'>this</span> <span m='2388550'>big
  O</span> <span m='2388910'>thing</span> <span m='2389140'>is</span> <span
  m='2389510'>perfectly</span> <span m='2389870'>correct.</span> <span
  m='2390260'>But</span> <span m='2390400'>to</span> <span
  m='2390490'>answer</span> <span m='2390760'>your</span> <span
  m='2390890'>question,</span> <span m='2391610'>yes.</span> <span
  m='2392010'>Let's</span> <span m='2392200'>assume</span> <span
  m='2392510'>that</span> <span m='2392640'>it's</span> <span
  m='2392760'>n</span> <span m='2393010'>digits</span> <span
  m='2393260'>of</span> <span m='2393340'>precision.</span> <span
  m='2393980'>That's</span> <span m='2394180'>what</span> <span m='2394340'>we
  assume</span> <span m='2394870'>whether</span> <span m='2395280'>it's</span>
  <span m='2395430'>n</span> <span m='2395670'>or d.</span> <span
  m='2396530'>You</span> <span m='2396620'>can</span> <span m='2396740'>plug
  in</span> <span m='2397030'>the</span> <span m='2397100'>appropriate</span>
  <span m='2397520'>symbol</span> <span m='2397820'>here.</span> </p><p><span
  m='2398520'>And</span> <span m='2398850'>we're</span> <span
  m='2398970'>saying</span> <span m='2399290'>that,</span> <span
  m='2399450'>look,</span> <span m='2399740'>every</span> <span
  m='2400020'>iteration</span> <span m='2401070'>is</span> <span
  m='2401670'>bounded</span> <span m='2402130'>by</span> <span
  m='2403730'>n</span> <span m='2403910'>raised</span> <span
  m='2404160'>to</span> <span m='2404240'>alpha</span> <span
  m='2404940'>complexity</span> <span m='2405690'>for</span> <span
  m='2405840'>the</span> <span m='2405950'>multiply.</span> <span
  m='2407050'>And</span> <span m='2407400'>I'm</span> <span
  m='2407480'>going</span> <span m='2407610'>to</span> <span
  m='2407680'>do</span> <span m='2407990'>a</span> <span
  m='2408060'>logarithmic</span> <span m='2408650'>number</span> <span
  m='2408860'>of</span> <span m='2408930'>iterations.</span> <span
  m='2409770'>So I end</span> <span m='2410160'>up</span> <span
  m='2410320'>getting</span> <span m='2411280'>log</span> <span
  m='2411630'>n</span> <span m='2411800'>times</span> <span m='2412070'>n</span>
  <span m='2412190'>raised to</span> <span m='2412490'>alpha.</span> <span
  m='2413150'>So</span> <span m='2413440'>that</span> <span
  m='2413580'>is</span> <span m='2413690'>correct,</span> <span
  m='2414220'>in</span> <span m='2414350'>fact.</span> <span m='2415220'>Big
  O</span> <span m='2415550'>is</span> <span m='2415690'>correct.</span>
  </p><p><span m='2416450'>So</span> <span m='2416690'>now</span> <span
  m='2416810'>it</span> <span m='2417150'>comes</span> <span
  m='2417490'>to</span> <span m='2418370'>the</span> <span
  m='2418580'>interesting</span> <span m='2418980'>question,</span> <span
  m='2419810'>which</span> <span m='2420040'>is</span> <span
  m='2420950'>can</span> <span m='2421180'>you</span> <span
  m='2421560'>do</span> <span m='2421740'>a</span> <span
  m='2421800'>better</span> <span m='2422250'>analysis?</span> <span
  m='2423050'>So</span> <span m='2423140'>this</span> <span m='2423240'>sort
  of</span> <span m='2423440'>hearkens</span> <span m='2423930'>back</span>
  <span m='2424310'>to</span> <span m='2425800'>three</span> <span
  m='2425990'>weeks</span> <span m='2426250'>ago,</span> <span
  m='2426910'>maybe</span> <span m='2427220'>you've</span> <span
  m='2427320'>forgotten.</span> <span m='2427750'>Maybe</span> <span
  m='2427990'>you've</span> <span m='2428030'>blanked it</span> <span
  m='2428480'>out of</span> <span m='2428670'>your</span> <span
  m='2428780'>memory,</span> <span m='2429560'>but</span> <span
  m='2430460'>I</span> <span m='2430520'>thought</span> <span
  m='2430760'>I</span> <span m='2431630'>described</span> <span
  m='2432170'>to</span> <span m='2432425'>you</span> <span
  m='2433220'>build</span> <span m='2433720'>max-heap.</span> <span
  m='2434670'>And</span> <span m='2434820'>we</span> <span
  m='2434910'>had</span> <span m='2435150'>this</span> <span
  m='2435270'>straightforward</span> <span m='2435990'>analysis</span> <span
  m='2436540'>of</span> <span m='2436640'>build</span> <span
  m='2436930'>max-heap</span> <span m='2437450'>that</span> <span
  m='2437590'>was</span> <span m='2437760'>n</span> <span m='2438030'>log</span>
  <span m='2438450'>n complexity.</span> <span m='2439400'>And</span> <span
  m='2439520'>then</span> <span m='2439640'>we</span> <span
  m='2440140'>looked</span> <span m='2440390'>at it a</span> <span
  m='2440410'>little</span> <span m='2440730'>more</span> <span
  m='2440900'>carefully,</span> <span m='2441420'>and</span> <span
  m='2441480'>we</span> <span m='2441570'>started</span> <span
  m='2441880'>adding</span> <span m='2442280'>things</span> <span
  m='2442560'>up</span> <span m='2443070'>much</span> <span
  m='2443320'>more</span> <span m='2443500'>carefully.</span> <span
  m='2444160'>We</span> <span m='2444230'>turned</span> <span
  m='2444420'>into</span> <span m='2444590'>bank</span> <span
  m='2444860'>accountants.</span> <span m='2445940'>And</span> <span
  m='2446010'>then</span> <span m='2446150'>we</span> <span
  m='2446240'>decided</span> <span m='2446630'>that</span> <span
  m='2446730'>it</span> <span m='2446800'>was</span> <span
  m='2447350'>theta</span> <span m='2447830'>n</span> <span
  m='2448050'>complexity.</span> <span m='2449370'>People</span> <span
  m='2449580'>remember</span> <span m='2449870'>that?</span> <span
  m='2450680'>Right?</span> </p><p><span m='2451090'>So</span> <span
  m='2451290'>I</span> <span m='2451360'>want</span> <span m='2451530'>you
  to</span> <span m='2451720'>turn</span> <span m='2451980'>into</span> <span
  m='2452060'>bank</span> <span m='2452290'>accountants</span> <span
  m='2452760'>again,</span> <span m='2454030'>and</span> <span
  m='2454190'>then</span> <span m='2454400'>tell</span> <span
  m='2454610'>me</span> <span m='2455730'>first,</span> <span
  m='2456740'>there's</span> <span m='2457030'>a</span> <span
  m='2457070'>nice</span> <span m='2457340'>observation</span> <span
  m='2457920'>that</span> <span m='2458040'>you</span> <span
  m='2458150'>can</span> <span m='2458280'>make</span> <span
  m='2458490'>here</span> <span m='2459780'>that</span> <span
  m='2460650'>we</span> <span m='2460800'>haven't</span> <span
  m='2461060'>made</span> <span m='2461320'>yet</span> <span
  m='2462110'>with</span> <span m='2462280'>respect</span> <span
  m='2462630'>to</span> <span m='2462700'>the</span> <span
  m='2462820'>size</span> <span m='2463320'>of</span> <span
  m='2463430'>these</span> <span m='2463660'>numbers.</span> <span
  m='2465680'>We</span> <span m='2465840'>know</span> <span
  m='2465990'>what</span> <span m='2466120'>we</span> <span
  m='2466220'>want</span> <span m='2466450'>to</span> <span
  m='2466490'>eventually,</span> <span m='2467000'>but</span> <span
  m='2467300'>there's</span> <span m='2467510'>a</span> <span
  m='2467550'>nice</span> <span m='2467770'>observation</span> <span
  m='2468300'>we</span> <span m='2468390'>can</span> <span
  m='2468500'>make</span> <span m='2468730'>it</span> <span
  m='2468870'>with</span> <span m='2469010'>respect</span> <span
  m='2469300'>to</span> <span m='2469360'>the</span> <span
  m='2469480'>size</span> <span m='2469900'>of</span> <span
  m='2470000'>these</span> <span m='2470200'>numbers.</span> <span
  m='2470930'>And</span> <span m='2471030'>then</span> <span
  m='2471160'>we</span> <span m='2471270'>want</span> <span
  m='2471390'>to</span> <span m='2471460'>exploit</span> <span
  m='2471950'>that</span> <span m='2472100'>observation</span> <span
  m='2474290'>to</span> <span m='2474420'>do</span> <span m='2474600'>a</span>
  <span m='2474660'>better</span> <span m='2474920'>analysis</span> <span
  m='2475720'>of</span> <span m='2475890'>the</span> <span
  m='2475980'>theta</span> <span m='2476430'>complexity</span> <span
  m='2477420'>of</span> <span m='2477570'>division.</span> </p><p><span
  m='2479830'>So</span> <span m='2480160'>who</span> <span
  m='2480380'>wants</span> <span m='2480570'>to</span> <span
  m='2480660'>tell</span> <span m='2480830'>me</span> <span
  m='2481200'>what</span> <span m='2481370'>the</span> <span
  m='2481430'>observation</span> <span m='2481690'>is.</span> <span
  m='2482962'>This</span> <span m='2483310'>is</span> <span
  m='2483800'>definitely</span> <span m='2484250'>worth</span> <span
  m='2484420'>a</span> <span m='2484520'>cushion.</span> <span
  m='2485260'>What's</span> <span m='2485680'>the</span> <span
  m='2485750'>observation?</span> <span m='2486680'>I</span> <span
  m='2486740'>want</span> <span m='2486860'>to</span> <span
  m='2486970'>end</span> <span m='2487230'>up</span> <span
  m='2487560'>with</span> <span m='2488065'>d</span> <span
  m='2488470'>digits</span> <span m='2488810'>of</span> <span
  m='2488910'>precision.</span> <span m='2492930'>If</span> <span
  m='2493420'>I</span> <span m='2493470'>give</span> <span
  m='2493610'>you</span> <span m='2493680'>another</span> <span
  m='2493900'>hint,</span> <span m='2494350'>I'm gonna</span> <span
  m='2494470'>give</span> <span m='2494620'>it</span> <span
  m='2494670'>away.</span> <span m='2495440'>Someone</span> <span
  m='2495725'>tell</span> <span m='2496010'>me.</span> </p><p><span
  m='2498690'>This</span> <span m='2498870'>is</span> <span m='2498980'>a</span>
  <span m='2499050'>dynamic</span> <span m='2499540'>process,</span> <span
  m='2500550'>OK?</span> <span m='2502630'>So</span> <span
  m='2503740'>what</span> <span m='2503870'>do</span> <span m='2503950'>I</span>
  <span m='2504030'>start</span> <span m='2504400'>with?</span> <span
  m='2506160'>What do</span> <span m='2506260'>I</span> <span
  m='2506490'>start</span> <span m='2506770'>with?</span> <span
  m='2509230'>If</span> <span m='2509700'>I</span> <span m='2509740'>want</span>
  <span m='2509870'>to</span> <span m='2509910'>compute</span> <span
  m='2510270'>something</span> <span m='2511130'>and</span> <span
  m='2511320'>you</span> <span m='2511460'>want</span> <span
  m='2511600'>to</span> <span m='2511640'>use</span> <span
  m='2511850'>Newton's</span> <span m='2512190'>method,</span> <span
  m='2512570'>what</span> <span m='2512680'>do</span> <span
  m='2512720'>you</span> <span m='2512820'>start</span> <span
  m='2513150'>with?</span> <span m='2513320'>Yeah?</span> </p><p><span
  m='2514242'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2515930'>PROFESSOR:
  You</span> <span m='2516080'>start</span> <span m='2516360'>with one</span>
  <span m='2516730'>digit of</span> <span m='2517070'>precision.</span> <span
  m='2517790'>That's</span> <span m='2518660'>fantastic.</span> <span
  m='2520190'>I</span> <span m='2520330'>don't know if</span> <span
  m='2520490'>you</span> <span m='2520570'>already</span> <span
  m='2520750'>have</span> <span m='2520890'>a</span> <span
  m='2520940'>cushion</span> <span m='2521200'>or</span> <span
  m='2521490'>not,</span> <span m='2521590'>but</span> <span m='2521650'>here's
  the</span> <span m='2521760'>second</span> <span m='2522030'>one.</span> <span
  m='2523140'>So</span> <span m='2523270'>you</span> <span
  m='2523370'>start</span> <span m='2523760'>with</span> <span
  m='2523970'>a</span> <span m='2524030'>small</span> <span
  m='2524500'>number</span> <span m='2524780'>of</span> <span
  m='2524880'>digits</span> <span m='2525270'>of</span> <span
  m='2525370'>precision.</span> <span m='2527830'>And</span> <span
  m='2528010'>then</span> <span m='2528150'>you</span> <span
  m='2528250'>end</span> <span m='2528560'>up</span> <span
  m='2528920'>with</span> <span m='2530000'>a</span> <span
  m='2530100'>large</span> <span m='2530540'>million,</span> <span
  m='2531280'>whatever,</span> <span m='2531860'>number,</span> <span
  m='2532550'>which</span> <span m='2532710'>is</span> <span
  m='2532840'>your</span> <span m='2533200'>d.</span> <span
  m='2535100'>So</span> <span m='2535730'>what</span> <span
  m='2535890'>does</span> <span m='2535970'>that</span> <span
  m='2536120'>mean?</span> </p><p><span m='2537340'>So</span> <span
  m='2537460'>now</span> <span m='2537610'>somebody</span> <span
  m='2537970'>take</span> <span m='2538200'>that</span> <span
  m='2538360'>and</span> <span m='2538460'>run</span> <span
  m='2538680'>with</span> <span m='2538820'>it.</span> <span
  m='2539780'>Somebody</span> <span m='2540100'>take</span> <span
  m='2540290'>that</span> <span m='2540450'>and</span> <span
  m='2540540'>run</span> <span m='2540720'>with</span> <span
  m='2540880'>it.</span> <span m='2542770'>You</span> <span
  m='2542850'>already</span> <span m='2543000'>have</span> <span
  m='2543130'>a</span> <span m='2543180'>cushion.</span> <span
  m='2544380'>Like</span> <span m='2544620'>many?</span> <span
  m='2548510'>You</span> <span m='2548640'>guys,</span> <span
  m='2548920'>usual</span> <span m='2549290'>suspects.</span> <span
  m='2551720'>So</span> <span m='2552350'>someone</span> <span
  m='2552710'>take</span> <span m='2552870'>that</span> <span
  m='2553000'>and</span> <span m='2553080'>run</span> <span
  m='2553260'>with</span> <span m='2553420'>it.</span> <span
  m='2553620'>What</span> <span m='2553940'>can</span> <span
  m='2554260'>I</span> <span m='2554410'>do</span> <span m='2554570'>now?</span>
  <span m='2554880'>What</span> <span m='2555030'>does</span> <span
  m='2555130'>it</span> <span m='2555220'>mean</span> <span
  m='2555570'>if</span> <span m='2555690'>I</span> <span
  m='2555770'>start</span> <span m='2556050'>with</span> <span
  m='2556170'>a</span> <span m='2556220'>small</span> <span
  m='2556460'>number</span> <span m='2556690'>of</span> <span
  m='2556750'>digits</span> <span m='2557030'>of</span> <span
  m='2557110'>precision?</span> <span m='2558520'>My</span> <span
  m='2558600'>initial</span> <span m='2558910'>guess</span> <span
  m='2559180'>was</span> <span m='2559240'>one,</span> <span
  m='2559780'>right?</span> <span m='2560230'>I</span> <span
  m='2560290'>mean,</span> <span m='2560400'>that</span> <span
  m='2560780'>had</span> <span m='2560940'>one</span> <span m='2561350'>digit
  of</span> <span m='2561430'>precision.</span> <span m='2562270'>And</span>
  <span m='2562400'>then</span> <span m='2562840'>the</span> <span
  m='2562980'>number</span> <span m='2563200'>of</span> <span
  m='2563270'>digits</span> <span m='2563770'>doubles</span> <span
  m='2564490'>with</span> <span m='2564650'>each</span> <span
  m='2564910'>step.</span> <span m='2566330'>So</span> <span
  m='2566470'>is</span> <span m='2566600'>there</span> <span
  m='2566820'>any</span> <span m='2567050'>reason</span> <span
  m='2567410'>why</span> <span m='2568970'>I'm</span> <span
  m='2569160'>doing,</span> <span m='2570270'>if</span> <span
  m='2570420'>I</span> <span m='2570500'>had</span> <span m='2570840'>d</span>
  <span m='2571030'>digits</span> <span m='2571370'>of</span> <span
  m='2571460'>precision,</span> <span m='2571930'>eventually</span> <span
  m='2572450'>that</span> <span m='2572610'>I'll</span> <span
  m='2572650'>have</span> <span m='2572780'>to</span> <span
  m='2572880'>do</span> <span m='2573175'>d</span> <span
  m='2573470'>digit</span> <span m='2573610'>multiplies</span> <span
  m='2575150'>in</span> <span m='2576800'>each</span> <span
  m='2577760'>iteration?</span> <span m='2580550'>Any</span> <span
  m='2580740'>reason</span> <span m='2580960'>why?</span> <span
  m='2581740'>Yeah.</span> </p><p><span m='2582564'>AUDIENCE: You don't</span>
  <span m='2583048'>have to,</span> <span m='2583532'>because</span> <span
  m='2584016'>[INAUDIBLE]</span> <span m='2584500'>multiplies</span> <span
  m='2584984'>are going to be trivial.</span> <span m='2585468'>And</span> <span
  m='2585952'>[INAUDIBLE]</span> <span m='2586436'>then you're</span> <span
  m='2586920'>going to eventually</span> <span m='2587404'>approach the d
  to</span> <span m='2587888'>the alpha</span> <span
  m='2588372'>iteration.</span> </p><p><span m='2588856'>PROFESSOR:
  That's</span> <span m='2589340'>exactly</span> <span m='2589730'>right.</span>
  <span m='2589910'>Exactly</span> <span m='2590400'>right.</span> <span
  m='2590620'>That's</span> <span m='2591340'>worth</span> <span
  m='2591500'>a</span> <span m='2591590'>cushion.</span> <span
  m='2592400'>But</span> <span m='2592740'>now</span> <span m='2592920'>I</span>
  <span m='2593030'>want</span> <span m='2593290'>you</span> <span
  m='2594270'>or</span> <span m='2594460'>someone</span> <span
  m='2594740'>else,</span> <span m='2595490'>tell</span> <span
  m='2595690'>me</span> <span m='2596260'>what</span> <span
  m='2596590'>the</span> <span m='2597890'>iteration</span> <span
  m='2598670'>looks</span> <span m='2598910'>like.</span> <span
  m='2599540'>So</span> <span m='2599620'>this</span> <span
  m='2599810'>is</span> <span m='2599960'>the</span> <span
  m='2600050'>key</span> <span m='2600230'>observation.</span> <span
  m='2601250'>The</span> <span m='2601360'>key</span> <span
  m='2601540'>observation</span> <span m='2602110'>is</span> <span
  m='2602250'>that</span> <span m='2603430'>if</span> <span m='2603610'>I</span>
  <span m='2603740'>want</span> <span m='2604210'>d</span> <span
  m='2604350'>digits</span> <span m='2604690'>of</span> <span
  m='2604790'>precision,</span> <span m='2620390'>I'm</span> <span
  m='2620550'>going</span> <span m='2620660'>to</span> <span
  m='2620710'>start</span> <span m='2620970'>with</span> <span
  m='2621090'>maybe</span> <span m='2621310'>one</span> <span
  m='2621620'>digit</span> <span m='2621880'>of</span> <span
  m='2621990'>precision.</span> <span m='2622960'>So</span> <span
  m='2623070'>this</span> <span m='2623260'>is</span> <span m='2624140'>d</span>
  <span m='2624410'>of</span> <span m='2624590'>p,</span> <span
  m='2625970'>or</span> <span m='2626390'>dig</span> <span m='2626810'>of</span>
  <span m='2627220'>p,</span> <span m='2627620'>not</span> <span
  m='2627830'>to</span> <span m='2627880'>be</span> <span
  m='2627970'>confused.</span> <span m='2629120'>I</span> <span
  m='2629230'>start</span> <span m='2629460'>with</span> <span
  m='2629540'>1,</span> <span m='2629940'>2,</span> <span m='2630260'>4,</span>
  <span m='2631330'>and</span> <span m='2631460'>I</span> <span
  m='2631480'>end</span> <span m='2631730'>up</span> <span
  m='2631860'>with</span> <span m='2632070'>d.</span> <span
  m='2632810'>And</span> <span m='2633170'>our</span> <span
  m='2633350'>claim</span> <span m='2633650'>was</span> <span
  m='2633850'>that</span> <span m='2634020'>this</span> <span
  m='2634190'>was</span> <span m='2634400'>log</span> <span m='2634840'>d</span>
  <span m='2635840'>iterations,</span> <span m='2637000'>right?</span> <span
  m='2637460'>So</span> <span m='2637620'>the</span> <span
  m='2637740'>initial</span> <span m='2638180'>multiplies</span> <span
  m='2642140'>are</span> <span m='2642640'>easy.</span> <span
  m='2645460'>Initially</span> <span m='2646080'>you're</span> <span
  m='2646130'>doing</span> <span m='2646690'>constant</span> <span
  m='2647160'>work</span> <span m='2647580'>if</span> <span
  m='2647790'>you</span> <span m='2647900'>have</span> <span
  m='2648550'>really</span> <span m='2648800'>small</span> <span
  m='2649120'>numbers</span> <span m='2650090'>associated</span> <span
  m='2650530'>with</span> <span m='2650630'>these</span> <span
  m='2650790'>multiplies.</span> <span m='2651840'>It's</span> <span
  m='2651980'>only</span> <span m='2652250'>towards</span> <span
  m='2652390'>the</span> <span m='2652550'>end</span> <span
  m='2653450'>that</span> <span m='2653600'>you</span> <span
  m='2653680'>end</span> <span m='2653820'>up</span> <span
  m='2653940'>doing</span> <span m='2654730'>a</span> <span
  m='2654820'>lot</span> <span m='2655030'>more</span> <span
  m='2655200'>work,</span> <span m='2656030'>right?</span> </p><p><span
  m='2656720'>So</span> <span m='2658350'>someone</span> <span
  m='2658720'>tell</span> <span m='2658900'>me</span> <span
  m='2660890'>if</span> <span m='2661010'>I</span> <span m='2661090'>have</span>
  <span m='2661850'>n</span> <span m='2662060'>raised</span> <span
  m='2662330'>to</span> <span m='2662420'>alpha,</span> <span
  m='2664510'>and</span> <span m='2665760'>if</span> <span m='2665900'>I</span>
  <span m='2665990'>say</span> <span m='2668520'>I</span> <span
  m='2668610'>want</span> <span m='2668800'>to</span> <span
  m='2668850'>write</span> <span m='2669580'>an</span> <span
  m='2669710'>equation.</span> <span m='2670440'>And</span> <span
  m='2671210'>I</span> <span m='2671340'>don't</span> <span m='2671580'>want to
  use</span> <span m='2671790'>theta</span> <span m='2672050'>here.</span> <span
  m='2672970'>I'm</span> <span m='2673110'>going</span> <span
  m='2673210'>to</span> <span m='2673250'>use</span> <span
  m='2673490'>constants</span> <span m='2674060'>because</span> <span
  m='2674290'>I</span> <span m='2674340'>want</span> <span m='2674470'>to</span>
  <span m='2674520'>add</span> <span m='2674750'>up</span> <span
  m='2675530'>constants,</span> <span m='2676050'>and</span> <span
  m='2676830'>it's</span> <span m='2677170'>a</span> <span
  m='2677240'>little</span> <span m='2677470'>iffy</span> <span
  m='2678060'>then</span> <span m='2678200'>you</span> <span
  m='2678570'>add</span> <span m='2678780'>up</span> <span
  m='2679020'>thetas.</span> <span m='2680400'>You</span> <span
  m='2680660'>need</span> <span m='2681750'>to</span> <span
  m='2681820'>be</span> <span m='2681910'>looking</span> <span
  m='2682120'>at</span> <span m='2682500'>constants.</span> <span
  m='2683630'>Now</span> <span m='2684010'>I</span> <span m='2684120'>can</span>
  <span m='2684250'>imagine</span> <span m='2686000'>that</span> <span
  m='2686780'>for</span> <span m='2688090'>this</span> <span
  m='2689840'>iteration,</span> <span m='2691290'>the</span> <span
  m='2691410'>very first</span> <span m='2691910'>one,</span> <span
  m='2692330'>that</span> <span m='2692450'>I</span> <span
  m='2692490'>have</span> <span m='2692620'>something</span> <span
  m='2692900'>like</span> <span m='2693100'>c times</span> <span
  m='2694180'>1</span> <span m='2694450'>raised</span> <span m='2694790'>to
  alpha,</span> <span m='2695850'>because</span> <span m='2696070'>it's</span>
  <span m='2696200'>just</span> <span m='2696370'>a</span> <span
  m='2696420'>single</span> <span m='2696720'>digit</span> <span
  m='2697010'>of</span> <span m='2697100'>precision.</span> <span
  m='2698070'>OK</span> <span m='2698950'>And</span> <span
  m='2699680'>the</span> <span m='2699740'>next</span> <span
  m='2699950'>one,</span> <span m='2700640'>I'm</span> <span
  m='2700760'>using</span> <span m='2700970'>the</span> <span
  m='2701060'>same</span> <span m='2701280'>algorithm.</span> <span
  m='2702210'>This is c</span> <span m='2702400'>times</span> <span
  m='2703470'>2</span> <span m='2703600'>raised</span> <span
  m='2703860'>to</span> <span m='2703930'>alpha,</span> <span
  m='2704930'>c</span> <span m='2705190'>times</span> <span m='2705510'>4 raised
  to</span> <span m='2705920'>alpha.</span> </p><p><span m='2709910'>And</span>
  <span m='2710060'>then</span> <span m='2710360'>out</span> <span
  m='2710560'>here</span> <span m='2710990'>I'm</span> <span
  m='2711100'>going</span> <span m='2711220'>to</span> <span
  m='2711290'>have</span> <span m='2712890'>c</span> <span
  m='2713260'>times</span> <span m='2713890'>d</span> <span
  m='2714080'>by</span> <span m='2714310'>4</span> <span
  m='2715450'>raised</span> <span m='2715780'>to</span> <span
  m='2715860'>alpha</span> <span m='2716580'>plus</span> <span
  m='2717050'>c</span> <span m='2717250'>times</span> <span m='2717640'>d</span>
  <span m='2717800'>by</span> <span m='2717990'>2</span> <span
  m='2719000'>raised</span> <span m='2719300'>to</span> <span
  m='2719370'>alpha</span> <span m='2720030'>plus</span> <span
  m='2720420'>finally</span> <span m='2720860'>c</span> <span
  m='2721130'>times</span> <span m='2722320'>d</span> <span
  m='2722440'>raised</span> <span m='2722690'>to</span> <span
  m='2722780'>alpha.</span> <span m='2724120'>And</span> <span
  m='2727170'>someone</span> <span m='2727430'>give</span> <span
  m='2727520'>me</span> <span m='2727650'>a</span> <span
  m='2727710'>bound.</span> <span m='2729022'>Who</span> <span m='2729450'>wants
  to</span> <span m='2729750'>give</span> <span m='2729840'>me</span> <span
  m='2729950'>a</span> <span m='2729990'>bound</span> <span
  m='2730290'>on</span> <span m='2730430'>this?</span> <span
  m='2733882'>Who</span> <span m='2734350'>wants</span> <span m='2734690'>to
  give</span> <span m='2734920'>me</span> <span m='2735020'>a</span> <span
  m='2735120'>bound</span> <span m='2735220'>on this?</span> <span
  m='2737370'>Less</span> <span m='2737690'>than</span> <span
  m='2738920'>or</span> <span m='2739080'>equal</span> <span
  m='2739350'>to.</span> <span m='2740320'>Let's</span> <span
  m='2740470'>just</span> <span m='2740560'>make it</span> <span
  m='2740750'>less</span> <span m='2740950'>than.</span> <span
  m='2742130'>What?</span> <span m='2743160'>Someone?</span> <span
  m='2747500'>Just</span> <span m='2747650'>plug in</span> <span
  m='2747960'>a</span> <span m='2748000'>value</span> <span
  m='2748350'>of</span> <span m='2748470'>alpha.</span> <span
  m='2749650'>And</span> <span m='2750680'>remember</span> <span
  m='2751000'>your</span> <span m='2752190'>convergent</span> <span
  m='2752780'>geometric</span> <span m='2753280'>series</span> <span
  m='2753720'>and</span> <span m='2753840'>things</span> <span
  m='2754020'>like</span> <span m='2754190'>that.</span> <span
  m='2755160'>What</span> <span m='2755290'>is</span> <span
  m='2755340'>that?</span> <span m='2758300'>Someone?</span> <span
  m='2759890'>Yeah.</span> </p><p><span m='2760550'>AUDIENCE: Just</span> <span
  m='2761041'>some constant</span> <span m='2761532'>times</span> <span
  m='2762023'>d to the alpha?</span> </p><p><span m='2763005'>PROFESSOR: That's
  exactly right.</span> <span m='2763500'>Just</span> <span
  m='2763670'>some</span> <span m='2763860'>constant</span> <span
  m='2764260'>times</span> <span m='2765996'>d</span> <span m='2766468'>to
  the</span> <span m='2766940'>alpha.</span> <span m='2767710'>And</span> <span
  m='2767840'>in</span> <span m='2767910'>fact,</span> <span
  m='2768170'>you</span> <span m='2768980'>can</span> <span
  m='2769200'>say,</span> <span m='2769810'>it's</span> <span
  m='2770090'>2c</span> <span m='2771690'>d to the</span> <span
  m='2771920'>alpha.</span> <span m='2776100'>Keep</span> <span
  m='2776240'>a</span> <span m='2776300'>question</span> <span
  m='2776570'>for</span> <span m='2776680'>you</span> <span
  m='2776820'>aside.</span> <span m='2777840'>So</span> <span m='2778210'>that'
  sit.</span> <span m='2778500'>That's</span> <span m='2778810'>the</span> <span
  m='2778850'>little</span> <span m='2779190'>careful</span> <span
  m='2779740'>analysis</span> <span m='2780860'>that</span> <span
  m='2781060'>we</span> <span m='2781200'>had</span> <span m='2781400'>to</span>
  <span m='2781500'>do,</span> <span m='2782280'>which</span> <span
  m='2782670'>basically</span> <span m='2783580'>without</span> <span
  m='2783880'>changing</span> <span m='2785440'>your</span> <span
  m='2785550'>code,</span> <span m='2785920'>really,</span> <span
  m='2786610'>suddenly</span> <span m='2787050'>gave</span> <span
  m='2787340'>you</span> <span m='2787580'>a</span> <span
  m='2787640'>better</span> <span m='2787860'>complexity.</span> <span
  m='2788810'>Isn't</span> <span m='2789080'>that</span> <span
  m='2789250'>fun?</span> <span m='2790000'>That's</span> <span
  m='2790070'>always</span> <span m='2790320'>fun.</span> <span
  m='2791270'>You</span> <span m='2791390'>had</span> <span
  m='2791670'>this</span> <span m='2791830'>neat</span> <span
  m='2792020'>algorithm</span> <span m='2792380'>to</span> <span
  m='2792460'>begin</span> <span m='2792720'>with.</span> <span
  m='2794760'>And</span> <span m='2795760'>bottom</span> <span
  m='2795990'>line</span> <span m='2796240'>is</span> <span
  m='2796410'>you're</span> <span m='2796530'>just</span> <span
  m='2797150'>computing</span> <span m='2797570'>things</span> <span
  m='2797840'>a</span> <span m='2797890'>little</span> <span
  m='2798030'>more</span> <span m='2798200'>accurately,</span> <span
  m='2799290'>than</span> <span m='2800390'>essentially</span> <span
  m='2800780'>saying</span> <span m='2801130'>that</span> <span
  m='2801280'>you</span> <span m='2801820'>had</span> <span
  m='2802080'>to</span> <span m='2802170'>do</span> <span m='2803680'>all</span>
  <span m='2803940'>of</span> <span m='2804030'>this</span> <span
  m='2804170'>work</span> <span m='2804540'>with</span> <span
  m='2804830'>large</span> <span m='2805440'>number</span> <span
  m='2805690'>of</span> <span m='2805770'>digits</span> <span
  m='2806080'>of</span> <span m='2806150'>precision</span> <span
  m='2806910'>at</span> <span m='2807090'>every</span> <span
  m='2807350'>iteration.</span> <span m='2808360'>The</span> <span
  m='2808440'>number</span> <span m='2808650'>of</span> <span
  m='2808720'>digits</span> <span m='2809080'>actually</span> <span
  m='2809430'>increases.</span> </p><p><span m='2811250'>So</span> <span
  m='2811480'>what</span> <span m='2811600'>does</span> <span
  m='2811700'>this</span> <span m='2811830'>mean?</span> <span
  m='2812840'>I</span> <span m='2813120'>guess</span> <span
  m='2813280'>ultimately,</span> <span m='2814910'>the</span> <span
  m='2815050'>complexity</span> <span m='2815540'>of</span> <span
  m='2815620'>division</span> <span m='2816000'>is</span> <span
  m='2816110'>now</span> <span m='2816590'>what?</span> <span
  m='2817930'>It's</span> <span m='2818320'>the</span> <span
  m='2818490'>same</span> <span m='2818980'>as</span> <span
  m='2819480'>the</span> <span m='2819560'>complexity</span> <span
  m='2819820'>of</span> <span m='2821320'>multiplication,</span> <span
  m='2822080'>right?</span> <span m='2823650'>So</span> <span
  m='2825410'>regardless</span> <span m='2825830'>of</span> <span
  m='2825930'>whether</span> <span m='2826260'>we</span> <span
  m='2826370'>did</span> <span m='2826540'>a</span> <span
  m='2826670'>Newton</span> <span m='2826820'>iteration</span> <span
  m='2827400'>or</span> <span m='2827480'>not,</span> <span
  m='2828570'>the</span> <span m='2829080'>complexity</span> <span
  m='2832190'>of</span> <span m='2832640'>division.</span> <span
  m='2844940'>You</span> <span m='2845080'>are</span> <span
  m='2845210'>doing</span> <span m='2845390'>a</span> <span
  m='2845440'>logarithmic</span> <span m='2845920'>number</span> <span
  m='2846150'>of</span> <span m='2846490'>iterations,</span> <span
  m='2847270'>but</span> <span m='2848400'>since</span> <span
  m='2848750'>eventually</span> <span m='2849210'>all</span> <span
  m='2849430'>of</span> <span m='2849510'>the</span> <span
  m='2849590'>work</span> <span m='2849870'>is</span> <span
  m='2849980'>going</span> <span m='2850100'>to</span> <span
  m='2850140'>get</span> <span m='2850320'>done</span> <span
  m='2852020'>at</span> <span m='2852170'>the</span> <span
  m='2852270'>end</span> <span m='2852600'>here.</span> <span
  m='2853300'>Most</span> <span m='2853540'>of</span> <span
  m='2853590'>the</span> <span m='2853660'>work</span> <span
  m='2853860'>is</span> <span m='2853970'>getting</span> <span
  m='2854140'>done</span> <span m='2854440'>at the end</span> <span
  m='2854680'>when you</span> <span m='2854850'>have</span> <span
  m='2855010'>these</span> <span m='2855190'>long</span> <span
  m='2855680'>numbers.</span> <span m='2856740'>That's</span> <span
  m='2856920'>basically</span> <span m='2857840'>the</span> <span
  m='2858630'>essence</span> <span m='2858960'>of</span> <span
  m='2859040'>the</span> <span m='2859110'>argument.</span> </p><p><span
  m='2860250'>So</span> <span m='2860920'>let</span> <span m='2861010'>me</span>
  <span m='2861100'>finish</span> <span m='2861350'>up</span> <span
  m='2862520'>and</span> <span m='2862710'>talk</span> <span
  m='2862900'>about</span> <span m='2863100'>the</span> <span
  m='2863180'>complexity</span> <span m='2864430'>of</span> <span
  m='2864640'>computing</span> <span m='2865070'>square</span> <span
  m='2865500'>roots.</span> <span m='2871000'>And</span> <span
  m='2873750'>as</span> <span m='2873900'>you</span> <span
  m='2873990'>can</span> <span m='2874080'>imagine,</span> <span
  m='2875550'>even</span> <span m='2875790'>though</span> <span
  m='2875930'>you</span> <span m='2876030'>have</span> <span
  m='2876300'>two</span> <span m='2876580'>nested</span> <span
  m='2877190'>Newton</span> <span m='2877400'>iterations</span> <span
  m='2878080'>here,</span> <span m='2878830'>you</span> <span
  m='2878950'>can</span> <span m='2879050'>make</span> <span
  m='2879270'>basically</span> <span m='2879690'>the</span> <span
  m='2879790'>same</span> <span m='2880010'>argument.</span> <span
  m='2881850'>So</span> <span m='2882180'>let's</span> <span
  m='2882360'>recall</span> <span m='2883350'>what</span> <span
  m='2883830'>we're</span> <span m='2884000'>doing</span> <span
  m='2884350'>in</span> <span m='2884430'>terms</span> <span
  m='2884690'>of</span> <span m='2884940'>computing</span> <span
  m='2885330'>square</span> <span m='2885660'>roots.</span> <span
  m='2886400'>We</span> <span m='2886490'>want</span> <span
  m='2886630'>to</span> <span m='2886680'>compute</span> <span
  m='2887090'>square</span> <span m='2887420'>root</span> <span
  m='2887530'>of</span> <span m='2887650'>a.</span> <span m='2889320'>And</span>
  <span m='2889680'>we</span> <span m='2889770'>said,</span> <span
  m='2890100'>well</span> <span m='2890380'>we</span> <span
  m='2890500'>don't</span> <span m='2890680'>quite</span> <span
  m='2890910'>know</span> <span m='2891030'>how</span> <span
  m='2891130'>to</span> <span m='2891210'>do</span> <span
  m='2891350'>this.</span> <span m='2892270'>We're going to</span> <span
  m='2892440'>end</span> <span m='2892690'>up</span> <span
  m='2894540'>doing</span> <span m='2895575'>10</span> <span
  m='2895840'>raised</span> <span m='2896060'>to</span> <span
  m='2896140'>2d</span> <span m='2897460'>times</span> <span
  m='2897730'>a,</span> <span m='2898370'>and</span> <span
  m='2898530'>we're</span> <span m='2898610'>going to</span> <span
  m='2898770'>run</span> <span m='2899000'>Newton's</span> <span
  m='2899330'>method</span> <span m='2899640'>on</span> <span
  m='2899810'>it.</span> <span m='2900710'>So</span> <span
  m='2901040'>you've</span> <span m='2901190'>got</span> <span
  m='2901500'>one</span> <span m='2901790'>level</span> <span
  m='2902150'>of</span> <span m='2903230'>Newton's</span> <span
  m='2903560'>method.</span> <span m='2906590'>And</span> <span
  m='2906930'>the</span> <span m='2907000'>iteration</span> <span
  m='2907500'>here</span> <span m='2907980'>with</span> <span
  m='2908120'>respect</span> <span m='2908380'>to</span> <span
  m='2909070'>Newton's</span> <span m='2909400'>method</span> <span
  m='2909730'>is</span> <span m='2909850'>something</span> <span
  m='2910150'>like</span> <span m='2915630'>xi</span> <span
  m='2915930'>plus</span> <span m='2916140'>1</span> <span
  m='2916480'>equals</span> <span m='2918170'>xi</span> <span
  m='2918530'>plus</span> <span m='2918720'>a</span> <span
  m='2918880'>divided</span> <span m='2919130'>by</span> <span
  m='2919360'>xi.</span> </p><p><span m='2920100'>Now</span> <span
  m='2922200'>every</span> <span m='2922460'>time</span> <span
  m='2922730'>you</span> <span m='2922830'>do</span> <span
  m='2922970'>that</span> <span m='2923370'>for</span> <span
  m='2923500'>a</span> <span m='2923530'>particular</span> <span
  m='2923880'>xi,</span> <span m='2924970'>you're</span> <span
  m='2925110'>going</span> <span m='2925330'>to</span> <span
  m='2925570'>end</span> <span m='2925750'>up</span> <span
  m='2925850'>having</span> <span m='2926160'>to</span> <span
  m='2926260'>call</span> <span m='2926950'>a</span> <span
  m='2927060'>division.</span> <span m='2929320'>So</span> <span
  m='2929520'>you're</span> <span m='2929630'>going</span> <span
  m='2929720'>to</span> <span m='2929770'>call</span> <span m='2930000'>a</span>
  <span m='2930100'>division</span> <span m='2930510'>here,</span> <span
  m='2932940'>and</span> <span m='2933190'>then</span> <span
  m='2933340'>you're</span> <span m='2933430'>going</span> <span
  m='2933540'>to</span> <span m='2933590'>call</span> <span m='2933810'>a</span>
  <span m='2933890'>division</span> <span m='2934240'>here.</span> <span
  m='2936050'>For</span> <span m='2936270'>each</span> <span
  m='2936510'>iteration</span> <span m='2936940'>you</span> <span
  m='2937020'>have</span> <span m='2937120'>to</span> <span
  m='2937190'>call</span> <span m='2937390'>a</span> <span
  m='2937470'>division.</span> <span m='2938430'>And</span> <span
  m='2938720'>what</span> <span m='2938820'>we're</span> <span
  m='2938950'>saying</span> <span m='2939250'>is,</span> <span
  m='2939830'>well</span> <span m='2940180'>we're</span> <span
  m='2940300'>going</span> <span m='2940420'>to</span> <span
  m='2940460'>end</span> <span m='2940600'>up</span> <span
  m='2940720'>having</span> <span m='2941040'>to</span> <span
  m='2941120'>call</span> <span m='2942140'>for</span> <span
  m='2942340'>each</span> <span m='2942560'>of</span> <span
  m='2942650'>these</span> <span m='2942830'>division</span> <span
  m='2943990'>methods</span> <span m='2944380'>we're going to</span> <span
  m='2944640'>call</span> <span m='2944890'>Newton's</span> <span
  m='2945210'>method.</span> <span m='2949260'>And</span> <span
  m='2950390'>what</span> <span m='2950720'>that</span> <span
  m='2951100'>is</span> <span m='2951230'>something</span> <span
  m='2951510'>like</span> <span m='2955150'>2xi</span> <span
  m='2956830'>minus</span> <span m='2958500'>b</span> <span
  m='2959100'>xi</span> <span m='2959543'>square</span> <span
  m='2960650'>divided</span> <span m='2960990'>by</span> <span
  m='2961170'>r.</span> <span m='2962520'>And</span> <span
  m='2963140'>that's</span> <span m='2963450'>going</span> <span
  m='2963590'>to</span> <span m='2964820'>be</span> <span m='2965080'>a</span>
  <span m='2965130'>bunch</span> <span m='2965430'>of</span> <span
  m='2965590'>multiplications.</span> </p><p><span m='2968600'>And</span> <span
  m='2968990'>what</span> <span m='2969160'>we</span> <span
  m='2969290'>argued</span> <span m='2969750'>up</span> <span
  m='2969900'>until</span> <span m='2970090'>this</span> <span
  m='2970290'>point</span> <span m='2970640'>was</span> <span
  m='2970970'>that</span> <span m='2971600'>the</span> <span
  m='2971720'>complexity</span> <span m='2972240'>of</span> <span
  m='2972320'>the</span> <span m='2972420'>division,</span> <span
  m='2973460'>even</span> <span m='2973730'>though</span> <span
  m='2974160'>we</span> <span m='2974290'>had</span> <span m='2974590'>a</span>
  <span m='2974650'>bunch</span> <span m='2974900'>of</span> <span
  m='2974990'>iterations</span> <span m='2975460'>here,</span> <span
  m='2975640'>a</span> <span m='2975730'>logarithmic</span> <span
  m='2976200'>number</span> <span m='2976400'>of</span> <span
  m='2976460'>iterations,</span> <span m='2977460'>the</span> <span
  m='2977560'>complexity</span> <span m='2977920'>of</span> <span
  m='2978010'>the</span> <span m='2978090'>division</span> <span
  m='2978860'>was</span> <span m='2979010'>the</span> <span
  m='2979090'>same</span> <span m='2979380'>as</span> <span
  m='2979460'>the</span> <span m='2979540'>complexity</span> <span
  m='2980000'>of</span> <span m='2980070'>the</span> <span
  m='2980140'>multiplication</span> <span m='2981280'>because</span> <span
  m='2981600'>the</span> <span m='2981880'>numbers</span> <span
  m='2982240'>started</span> <span m='2982530'>out</span> <span
  m='2982710'>small</span> <span m='2983480'>and grew</span> <span
  m='2983910'>big.</span> <span m='2984690'>All</span> <span
  m='2984780'>right?</span> <span m='2985200'>Everybody</span> <span
  m='2985490'>buy</span> <span m='2985640'>that?</span> </p><p><span
  m='2986960'>I'm</span> <span m='2987090'>going</span> <span
  m='2987180'>to</span> <span m='2987220'>use</span> <span
  m='2987400'>exactly</span> <span m='2987810'>the</span> <span
  m='2987880'>same</span> <span m='2988130'>argument</span> <span
  m='2989250'>for</span> <span m='2989830'>this</span> <span
  m='2990140'>level</span> <span m='2990400'>of</span> <span
  m='2990490'>iteration</span> <span m='2990920'>as</span> <span
  m='2991040'>well.</span> <span m='2992500'>And</span> <span
  m='2992950'>again,</span> <span m='2993940'>when</span> <span
  m='2994040'>you</span> <span m='2994130'>start</span> <span
  m='2994390'>out</span> <span m='2994610'>with</span> <span
  m='2995770'>the</span> <span m='2996100'>digits</span> <span
  m='2996230'>of</span> <span m='2996340'>precision</span> <span
  m='2997010'>corresponding</span> <span m='2997320'>to</span> <span
  m='2997860'>square</span> <span m='2998210'>root</span> <span
  m='2998360'>of</span> <span m='2998480'>2,</span> <span
  m='2999180'>you're</span> <span m='2999290'>going</span> <span
  m='2999380'>to</span> <span m='2999430'>start</span> <span
  m='2999670'>out</span> <span m='2999890'>guessing</span> <span
  m='3000230'>1.5,</span> <span m='3001630'>which</span> <span
  m='3001700'>is</span> <span m='3002730'>your</span> <span
  m='3002970'>initial</span> <span m='3003280'>guess</span> <span
  m='3003530'>for</span> <span m='3003610'>the</span> <span
  m='3003710'>square</span> <span m='3003960'>root</span> <span
  m='3004030'>of</span> <span m='3004150'>2,</span> <span m='3004435'>and</span>
  <span m='3004720'>it's</span> <span m='3004860'>going</span> <span
  m='3004970'>to</span> <span m='3005010'>be</span> <span m='3005090'>a</span>
  <span m='3005150'>small</span> <span m='3005430'>number</span> <span
  m='3005970'>of</span> <span m='3006140'>digits</span> <span
  m='3006430'>of</span> <span m='3006500'>precision.</span> <span
  m='3007270'>And</span> <span m='3007400'>eventually</span> <span
  m='3007740'>you'll</span> <span m='3007870'>get</span> <span
  m='3008120'>to</span> <span m='3008270'>a</span> <span
  m='3008320'>million</span> <span m='3008600'>digits.</span> <span
  m='3009560'>So</span> <span m='3011390'>using</span> <span
  m='3012030'>essentially</span> <span m='3012480'>the</span> <span
  m='3012590'>same</span> <span m='3013580'>equation</span> <span
  m='3014020'>summing,</span> <span m='3014840'>you</span> <span
  m='3015320'>can</span> <span m='3015430'>argue</span> <span
  m='3015770'>that</span> <span m='3016600'>the</span> <span
  m='3016730'>complexity</span> <span m='3017180'>of</span> <span
  m='3017270'>computing</span> <span m='3017610'>square</span> <span
  m='3017950'>roots</span> <span m='3018840'>is</span> <span
  m='3019040'>the</span> <span m='3019150'>complexity</span> <span
  m='3022570'>of</span> <span m='3023120'>division,</span> <span
  m='3024470'>which</span> <span m='3024620'>of</span> <span
  m='3024710'>course</span> <span m='3024940'>is</span> <span
  m='3025060'>the</span> <span m='3025150'>complexity</span> <span
  m='3027570'>of</span> <span m='3027840'>multiplication.</span> </p><p><span
  m='3032500'>And</span> <span m='3033080'>that's</span> <span
  m='3033750'>the</span> <span m='3033840'>story.</span> <span
  m='3034880'>So</span> <span m='3035570'>obviously</span> <span
  m='3035890'>the</span> <span m='3036000'>code</span> <span
  m='3036360'>would</span> <span m='3036480'>be</span> <span
  m='3036610'>a</span> <span m='3036660'>little</span> <span
  m='3036820'>more</span> <span m='3036990'>complicated</span> <span
  m='3037990'>than</span> <span m='3038240'>a</span> <span
  m='3038280'>multiplication</span> <span m='3038980'>code,</span> <span
  m='3039620'>because</span> <span m='3039770'>you have all this</span> <span
  m='3040250'>control</span> <span m='3040650'>structure</span> <span
  m='3041650'>outside</span> <span m='3042040'>of</span> <span
  m='3042170'>it.</span> <span m='3042360'>It's</span> <span
  m='3042740'>really</span> <span m='3042980'>two</span> <span
  m='3043180'>nested</span> <span m='3043640'>loops.</span> <span
  m='3044920'>The</span> <span m='3044980'>multiply</span> <span
  m='3045285'>is</span> <span m='3045590'>getting</span> <span
  m='3045810'>called</span> <span m='3046180'>a</span> <span
  m='3046220'>bunch</span> <span m='3046460'>of</span> <span
  m='3046540'>times</span> <span m='3047320'>to</span> <span
  m='3047400'>do</span> <span m='3047550'>the</span> <span
  m='3047670'>divide,</span> <span m='3048430'>and</span> <span
  m='3048580'>the</span> <span m='3048650'>divide</span> <span
  m='3049000'>is</span> <span m='3049100'>getting</span> <span
  m='3049300'>called</span> <span m='3049580'>a</span> <span
  m='3049620'>bunch</span> <span m='3049830'>of</span> <span
  m='3049920'>times</span> <span m='3050370'>to</span> <span
  m='3050500'>compute</span> <span m='3050810'>the</span> <span
  m='3050890'>square</span> <span m='3051190'>root.</span> <span
  m='3051840'>But</span> <span m='3052140'>ultimately,</span> <span
  m='3052670'>because</span> <span m='3052910'>the</span> <span
  m='3052970'>numbers</span> <span m='3053300'>are</span> <span
  m='3053380'>growing</span> <span m='3054460'>and</span> <span
  m='3054680'>you</span> <span m='3054830'>start</span> <span m='3055020'>out
  with</span> <span m='3055170'>small</span> <span m='3055500'>numbers,</span>
  <span m='3056000'>most</span> <span m='3056290'>of</span> <span
  m='3056370'>the</span> <span m='3056440'>work</span> <span
  m='3056690'>is</span> <span m='3056850'>done</span> <span
  m='3057530'>when</span> <span m='3057620'>you</span> <span
  m='3057700'>get</span> <span m='3057850'>to</span> <span
  m='3057910'>the</span> <span m='3058000'>millions</span> <span
  m='3058390'>of</span> <span m='3058490'>digits</span> <span
  m='3058820'>of</span> <span m='3058910'>precision.</span> <span
  m='3059760'>And</span> <span m='3060070'>you</span> <span
  m='3060200'>basically</span> <span m='3060690'>have</span> <span
  m='3062630'>theta</span> <span m='3063270'>n</span> <span
  m='3063430'>raised</span> <span m='3063760'>to alpha</span> <span
  m='3064110'>complexity</span> <span m='3065080'>for</span> <span
  m='3065220'>computing</span> <span m='3065600'>square</span> <span
  m='3065960'>roots.</span> <span m='3066940'>If</span> <span
  m='3067050'>you</span> <span m='3067150'>have</span> <span
  m='3068100'>n</span> <span m='3068460'>raised to</span> <span
  m='3068710'>alpha</span> <span m='3069030'>multiply,</span> <span
  m='3069940'>and</span> <span m='3070110'>you want</span> <span
  m='3070460'>n</span> <span m='3071160'>digits</span> <span
  m='3071850'>of</span> <span m='3072080'>precision.</span> <span
  m='3073060'>All</span> <span m='3073140'>right?</span> <span
  m='3073990'>See</span> <span m='3074160'>you</span> <span
  m='3074230'>next</span> <span m='3074460'>time.</span> <span
  m='3074970'>Stick</span> <span m='3075190'>around</span> <span
  m='3075360'>for</span> <span m='3075430'>questions.</span> </p>
embedded_media:
  - uid: 5e1616bbfdf9328b044d13278cbe68d8
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 2YeJ-5UAke8
  - uid: f2af46abd34d754065f66017eea1be80
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/2YeJ-5UAke8/default.jpg'
  - uid: d9d8f5ee2f2205aa1fd69b6b7e39280e
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-12-square-roots-newtons/id585700718?i=126127765
  - uid: b4d2081a4da252e635da53ed64e90f45
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec12_300k.mp4'
  - uid: bf3df2f17c0b99478b974a1539c61a7a
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 2YeJ-5UAke8
  - uid: 002795ec367dc36225256df3efe022fa
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: 2YeJ-5UAke8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-12-square-roots-newtons-method/2YeJ-5UAke8.srt
  - uid: d2545d3aa5b240dc8e7ba6ec33f02496
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: 2YeJ-5UAke8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-12-square-roots-newtons-method/2YeJ-5UAke8.pdf
  - uid: 2deeb66d8bd43a2e9279cbba94473713
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ddf205f15f19bbbc76139c93bf9c34cd
    parent_uid: 1a241368a91359d13bc6f1475f93ca85
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
