---
title: 'Lecture 16: Differential Equations'
uid: 8e7d73ab39d18888c91496878d778e29
parent_uid: eb1d53c3c4c145f03327e4698375e766
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-16-differential-equations
short_url: lecture-16-differential-equations
inline_embed_id: '78530023lecture16:differentialequations86573767'
about_this_resource_text: >-
  <div class="vidpad"><p><em>Note: There is no video for lecture 17 because
  students took an exam during this session.</em></p><p><strong>Topics
  covered:</strong> Differential equations, separation of variables</p>
  <p><strong>Instructor:</strong> Prof. David Jerison</p></div>
related_resources_text: >-
  <div class="vidpad"><p>Lecture Notes (<a
  href="./resolveuid/991e10d17c527483d3d41d83a7313536">PDF</a>)</p></div>
transcript: >-
  <p><span m='50'>The following</span> <span m='520'>content</span> <span
  m='1000'>is</span> <span m='1310'>provided</span> <span m='1420'>under</span>
  <span m='1680'>a</span> <span m='1870'>Creative</span> <span
  m='2330'>Commons</span> <span m='2730'>license.</span> <span
  m='3610'>Your</span> <span m='3810'>support</span> <span m='4330'>will</span>
  <span m='4460'>help</span> <span m='4730'>MIT</span> <span
  m='5190'>OpenCourseWare</span> <span m='5980'>continue</span> <span
  m='6450'>to</span> <span m='6580'>offer</span> <span m='6890'>high</span>
  <span m='7140'>quality</span> <span m='7620'>educational</span> <span
  m='8250'>resources</span> <span m='8840'>for</span> <span m='8980'>free.
  To</span> <span m='10010'>make</span> <span m='10250'>a</span> <span
  m='10320'>donation</span> <span m='11070'>or</span> <span m='11240'>to</span>
  <span m='11410'>view</span> <span m='11550'>additional</span> <span
  m='11980'>materials</span> <span m='12540'>from hundreds</span> <span
  m='13040'>of</span> <span m='13150'>MIT</span> <span m='13580'>courses,</span>
  <span m='15050'>visit</span> <span m='15250'>MIT</span> <span
  m='15340'>OpenCourseWare</span> <span m='15610'>at</span> <span
  m='15870'>ocw.mit.edu.</span> </p><p><span m='21170'>PROFESSOR: And</span>
  <span m='21420'>this</span> <span m='21540'>last</span> <span
  m='22040'>little</span> <span m='22250'>bit</span> <span m='23070'>is</span>
  <span m='23240'>something</span> <span m='23550'>which</span> <span
  m='23720'>is</span> <span m='23830'>not</span> <span m='24160'>yet</span>
  <span m='24340'>on</span> <span m='24490'>the</span> <span
  m='24580'>Web.</span> <span m='25050'>But,</span> <span
  m='25180'>anyway,</span> <span m='25670'>when</span> <span m='25820'>I</span>
  <span m='25880'>was</span> <span m='26030'>walking</span> <span
  m='26390'>out</span> <span m='26520'>of</span> <span m='26580'>the</span>
  <span m='26640'>room</span> <span m='26860'>last</span> <span
  m='27180'>time,</span> <span m='27370'>I</span> <span m='27430'>noticed</span>
  <span m='28200'>that</span> <span m='28360'>I'd</span> <span
  m='28500'>written</span> <span m='28780'>down</span> <span
  m='29740'>the</span> <span m='29840'>wrong</span> <span
  m='30240'>formula</span> <span m='30680'>for</span> <span m='30820'>c_1</span>
  <span m='31250'>-</span> <span m='31670'>c_2.</span> <span
  m='32070'>There's</span> <span m='32280'>a</span> <span
  m='32450'>misprint,</span> <span m='33180'>there's a</span> <span
  m='33260'>minus</span> <span m='33640'>sign</span> <span
  m='33940'>that's</span> <span m='34110'>wrong.</span> <span m='35380'>I</span>
  <span m='35580'>claimed</span> <span m='36100'>last</span> <span
  m='36400'>time</span> <span m='36560'>that</span> <span m='36650'>c_1</span>
  <span m='36810'>-</span> <span m='37130'>c_2</span> <span m='37490'>was</span>
  <span m='38090'>+1/2.</span> <span m='39180'>But,</span> <span
  m='39430'>actually,</span> <span m='39760'>it's</span> <span
  m='40270'>-1/2.</span> <span m='40580'>If</span> <span m='40690'>you</span>
  <span m='40790'>go</span> <span m='40940'>through</span> <span
  m='41130'>the</span> <span m='41220'>calculation</span> <span
  m='42080'>that</span> <span m='42180'>we</span> <span m='42310'>did</span>
  <span m='42660'>with</span> <span m='42810'>the</span> <span
  m='42960'>antiderivative</span> <span m='43250'>of</span> <span m='43360'>sin
  x</span> <span m='43590'>cos</span> <span m='44200'>x,</span> <span
  m='45780'>we</span> <span m='45860'>get</span> <span m='46080'>these</span>
  <span m='46390'>two</span> <span m='46550'>possible</span> <span
  m='47130'>answers.</span> <span m='48500'>And</span> <span m='48790'>if</span>
  <span m='48910'>they're</span> <span m='49090'>to</span> <span
  m='49270'>be</span> <span m='49480'>equal,</span> <span m='50540'>then</span>
  <span m='50750'>if</span> <span m='50860'>we</span> <span
  m='50970'>just</span> <span m='51210'>subtract</span> <span
  m='51920'>them</span> <span m='52900'>we</span> <span m='53070'>get</span>
  <span m='53380'>c_1</span> <span m='53700'>-</span> <span m='54180'>c_2</span>
  <span m='54390'>+</span> <span m='54850'>1/2</span> <span m='55540'>=</span>
  <span m='55940'>0.</span> <span m='56300'>So</span> <span m='56840'>c_1</span>
  <span m='57220'>-</span> <span m='57510'>c_2</span> <span m='58570'>=</span>
  <span m='59250'>1/2.</span> <span m='61740'>So,</span> <span
  m='61960'>those</span> <span m='62140'>are</span> <span m='62250'>all</span>
  <span m='62550'>of</span> <span m='62700'>the</span> <span
  m='63490'>corrections.</span> <span m='63930'>Again,</span> <span
  m='64210'>everything</span> <span m='64700'>here</span> <span
  m='64920'>will</span> <span m='65100'>be</span> <span m='65220'>on</span>
  <span m='65400'>the</span> <span m='65460'>Web.</span> <span
  m='66530'>But</span> <span m='68430'>just</span> <span m='68690'>wanted</span>
  <span m='68900'>to</span> <span m='69000'>make</span> <span
  m='69180'>it</span> <span m='69270'>all</span> <span m='69430'>clear</span>
  <span m='69730'>to</span> <span m='69910'>you.</span> </p><p><span
  m='74660'>So</span> <span m='74880'>here</span> <span m='75040'>we</span>
  <span m='75160'>are.</span> <span m='75410'>This</span> <span
  m='75590'>is</span> <span m='75820'>our</span> <span m='76000'>last</span>
  <span m='76490'>day</span> <span m='77080'>of</span> <span
  m='77930'>the</span> <span m='78630'>second</span> <span
  m='78990'>unit,</span> <span m='79210'>Applications</span> <span
  m='79900'>of</span> <span m='79980'>Differentiation.</span> <span
  m='82010'>And</span> <span m='82950'>I</span> <span m='83100'>have</span>
  <span m='85060'>one</span> <span m='85280'>of</span> <span
  m='85380'>the</span> <span m='86790'>most</span> <span m='87170'>fun</span>
  <span m='87440'>topics</span> <span m='87960'>to</span> <span
  m='88470'>introduce</span> <span m='89070'>to</span> <span
  m='89230'>you.</span> <span m='90210'>Which</span> <span m='90440'>is</span>
  <span m='90680'>differential</span> <span m='91270'>equations.</span> <span
  m='92530'>Now, we</span> <span m='92690'>have</span> <span m='92830'>a</span>
  <span m='92880'>whole</span> <span m='93110'>course</span> <span
  m='93550'>on</span> <span m='93720'>differential</span> <span
  m='94220'>equations,</span> <span m='95410'>which</span> <span
  m='95590'>is</span> <span m='95680'>called</span> <span
  m='95940'>18.03.</span> <span m='98140'>And</span> <span m='98400'>so</span>
  <span m='98670'>we're</span> <span m='98900'>only</span> <span m='99130'>going
  to</span> <span m='99290'>do</span> <span m='99440'>just</span> <span
  m='99660'>a</span> <span m='99710'>little</span> <span m='99980'>bit.</span>
  <span m='103840'>But</span> <span m='105400'>I'm</span> <span m='105650'>going
  to</span> <span m='105820'>teach</span> <span m='106120'>you</span> <span
  m='106230'>one</span> <span m='106610'>technique.</span> <span
  m='112600'>Which</span> <span m='112860'>fits</span> <span
  m='113150'>in</span> <span m='115230'>precisely</span> <span
  m='115920'>with</span> <span m='116100'>what</span> <span
  m='116310'>we've</span> <span m='116450'>been</span> <span
  m='117620'>doing</span> <span m='117880'>already.</span> <span
  m='118250'>Which</span> <span m='118440'>is</span> <span
  m='118600'>differentials.</span> <span m='125280'>The</span> <span
  m='125410'>first</span> <span m='125810'>and</span> <span
  m='125970'>simplest</span> <span m='126610'>kind</span> <span
  m='126940'>of</span> <span m='127370'>differential</span> <span
  m='127950'>equation is</span> <span m='129010'>the</span> <span
  m='130800'>rate of</span> <span m='130980'>change</span> <span
  m='131190'>of</span> <span m='131860'>x</span> <span m='132000'>with respect
  to</span> <span m='132310'>y</span> <span m='132770'>is</span> <span
  m='133080'>equal</span> <span m='133340'>to</span> <span
  m='133470'>some</span> <span m='133730'>function</span> <span
  m='134770'>f(x).</span> <span m='136770'>Now, that's</span> <span
  m='137030'>a</span> <span m='137090'>perfectly</span> <span
  m='137480'>good</span> <span m='137650'>differential</span> <span
  m='138150'>equation.</span> <span m='139020'>And</span> <span
  m='139170'>we</span> <span m='139280'>already</span> <span
  m='139690'>discussed</span> <span m='140190'>last</span> <span
  m='140610'>time</span> <span m='141420'>that</span> <span
  m='141900'>the</span> <span m='144450'>solution,</span> <span
  m='145050'>that</span> <span m='145200'>is,</span> <span m='145310'>the</span>
  <span m='145420'>function</span> <span m='145870'>y,</span> <span
  m='146620'>is</span> <span m='146820'>going</span> <span m='147020'>to</span>
  <span m='147080'>be</span> <span m='147170'>the</span> <span
  m='147280'>antiderivative,</span> <span m='147620'>or</span> <span
  m='148760'>the</span> <span m='149110'>integral,</span> <span
  m='150890'>of</span> <span m='151010'>x.</span> <span m='153100'>Now,</span>
  <span m='153400'>for</span> <span m='153590'>the</span> <span
  m='153680'>purposes</span> <span m='154300'>of</span> <span
  m='154430'>today,</span> <span m='155560'>we're</span> <span
  m='155880'>going</span> <span m='156040'>to</span> <span
  m='156120'>consider</span> <span m='156580'>this</span> <span
  m='156800'>problem</span> <span m='157250'>to</span> <span
  m='157380'>be</span> <span m='157550'>solved.</span> <span
  m='160610'>That</span> <span m='160770'>is,</span> <span m='160860'>you</span>
  <span m='160980'>can</span> <span m='161100'>always</span> <span
  m='161500'>do</span> <span m='161690'>this.</span> <span m='161930'>You</span>
  <span m='162040'>can</span> <span m='162130'>always</span> <span
  m='162450'>take</span> <span m='162690'>antiderivatives.</span> <span
  m='164200'>And</span> <span m='167060'>for</span> <span m='167390'>our</span>
  <span m='167550'>purposes</span> <span m='168200'>now,</span> <span
  m='168530'>that</span> <span m='168770'>is</span> <span m='169590'>for</span>
  <span m='170580'>now,</span> <span m='171560'>we</span> <span
  m='171680'>only</span> <span m='171890'>have</span> <span
  m='172070'>one</span> <span m='172320'>technique</span> <span
  m='179180'>to</span> <span m='179310'>find antiderivatives.</span> <span
  m='188380'>And</span> <span m='188690'>that's</span> <span
  m='188750'>called</span> <span m='189350'>substitution.</span> </p><p><span
  m='195170'>It</span> <span m='195310'>has</span> <span m='195610'>a</span>
  <span m='195750'>very</span> <span m='196040'>small</span> <span
  m='196430'>variant,</span> <span m='198090'>which</span> <span
  m='198750'>we</span> <span m='198920'>called</span> <span
  m='200450'>advanced</span> <span m='201050'>guessing.</span> <span
  m='207940'>And</span> <span m='208170'>that</span> <span
  m='208320'>works</span> <span m='208580'>just</span> <span
  m='208830'>as</span> <span m='208930'>well.</span> <span m='209820'>And
  that's</span> <span m='210120'>basically</span> <span m='210590'>all</span>
  <span m='211130'>that</span> <span m='211240'>you'll</span> <span
  m='211390'>ever</span> <span m='211620'>need</span> <span m='211810'>to</span>
  <span m='211930'>do.</span> <span m='212490'>As</span> <span
  m='212640'>a</span> <span m='212710'>practical</span> <span
  m='213290'>matter,</span> <span m='214700'>these</span> <span
  m='214880'>are</span> <span m='214940'>the</span> <span m='215020'>ones</span>
  <span m='215240'>you'll</span> <span m='215360'>face</span> <span
  m='215740'>for</span> <span m='215900'>now.</span> <span
  m='216560'>Ones</span> <span m='216890'>that</span> <span
  m='216990'>you</span> <span m='217090'>can</span> <span
  m='217230'>actually</span> <span m='217590'>see</span> <span
  m='217820'>what</span> <span m='217980'>the</span> <span
  m='218100'>answer</span> <span m='218400'>is,</span> <span
  m='218540'>or</span> <span m='218780'>you'll</span> <span
  m='218910'>have</span> <span m='219070'>to</span> <span m='219160'>make</span>
  <span m='219330'>a</span> <span m='219400'>substitution.</span> <span
  m='222640'>Now,</span> <span m='224090'>the</span> <span
  m='224250'>first</span> <span m='225700'>tricky</span> <span
  m='226110'>example,</span> <span m='226750'>or</span> <span
  m='226870'>the</span> <span m='226970'>first</span> <span
  m='227330'>maybe</span> <span m='227640'>interesting</span> <span
  m='228120'>example</span> <span m='228720'>of</span> <span m='228820'>a</span>
  <span m='228910'>differential</span> <span m='229430'>equation,</span> <span
  m='230190'>which</span> <span m='230380'>I'll</span> <span
  m='230490'>call</span> <span m='230710'>Example</span> <span
  m='231190'>2,</span> <span m='236010'>is</span> <span m='236980'>going</span>
  <span m='237180'>to</span> <span m='237240'>be</span> <span
  m='237340'>the</span> <span m='237450'>following.</span> <span m='240750'>d/dx
  + x</span> <span m='241180'>acting</span> <span m='241700'>on</span> <span
  m='242230'>y is</span> <span m='246620'>equal to</span> <span
  m='247160'>0.</span> <span m='247510'>So</span> <span m='247780'>that's</span>
  <span m='248010'>our</span> <span m='248400'>first</span> <span
  m='249760'>differential</span> <span m='250200'>equation</span> <span
  m='250520'>that</span> <span m='250580'>were</span> <span
  m='250690'>going</span> <span m='250860'>to</span> <span m='250940'>try</span>
  <span m='251150'>to</span> <span m='251250'>solve.</span> <span
  m='252780'>Apart</span> <span m='253470'>from</span> <span
  m='253640'>this</span> <span m='253740'>standard</span> <span
  m='254220'>antiderivative</span> <span m='254870'>approach.</span> <span
  m='258630'>This</span> <span m='259980'>operation</span> <span
  m='260750'>here</span> <span m='262300'>has</span> <span m='262950'>a</span>
  <span m='263000'>name.</span> <span m='264350'>This</span> <span
  m='264690'>actually</span> <span m='265160'>has a name,</span> <span
  m='265900'>it's</span> <span m='266060'>called</span> <span
  m='266390'>the</span> <span m='266550'>annihilation</span> <span
  m='267490'>operator.</span> <span m='273460'>And</span> <span
  m='274370'>it's</span> <span m='274690'>called</span> <span
  m='275000'>that</span> <span m='275620'>in</span> <span
  m='275760'>quantum</span> <span m='276210'>mechanics.</span> <span
  m='283780'>And</span> <span m='283980'>there's</span> <span
  m='284150'>a</span> <span m='284230'>corresponding</span> <span
  m='284900'>creation</span> <span m='285400'>operator</span> <span
  m='285950'>where</span> <span m='286160'>you</span> <span
  m='286800'>change</span> <span m='287180'>the</span> <span
  m='287250'>sign</span> <span m='287580'>from</span> <span
  m='287740'>plus</span> <span m='288660'>to</span> <span
  m='288800'>minus.</span> <span m='290780'>And</span> <span m='291500'>this
  is</span> <span m='292210'>one</span> <span m='292370'>of</span> <span
  m='292440'>the simplest</span> <span m='292900'>differential</span> <span
  m='293210'>equations.</span> <span m='293660'>The</span> <span
  m='293750'>reason</span> <span m='294000'>why</span> <span
  m='294590'>it's</span> <span m='295170'>studied in</span> <span
  m='295470'>quantum</span> <span m='295550'>mechanics</span> <span
  m='295930'>all</span> <span m='296110'>it</span> <span m='296240'>that</span>
  <span m='296360'>it</span> <span m='296430'>has</span> <span
  m='297160'>very</span> <span m='297450'>simple</span> <span
  m='297770'>solutions</span> <span m='298360'>that</span> <span
  m='298470'>you</span> <span m='298580'>can</span> <span m='298690'>just</span>
  <span m='298910'>write</span> <span m='299150'>out.</span> <span
  m='300500'>So</span> <span m='300720'>we're</span> <span
  m='300880'>going</span> <span m='301060'>to</span> <span
  m='301140'>solve</span> <span m='301940'>this</span> <span
  m='302150'>equation.</span> <span m='302920'>It's</span> <span
  m='303190'>the</span> <span m='303280'>one</span> <span m='303480'>that</span>
  <span m='304260'>governs</span> <span m='304710'>the</span> <span
  m='304810'>ground</span> <span m='305210'>state</span> <span
  m='305680'>of</span> <span m='305780'>the</span> <span
  m='306120'>harmonic</span> <span m='306700'>oscillator.</span> <span
  m='308670'>So</span> <span m='308820'>it</span> <span m='308890'>has</span>
  <span m='309030'>a</span> <span m='309070'>lot</span> <span
  m='309210'>of</span> <span m='309290'>fancy</span> <span
  m='309680'>words</span> <span m='309970'>associated</span> <span
  m='310510'>with</span> <span m='310690'>it,</span> <span m='310790'>but</span>
  <span m='310910'>it's</span> <span m='311030'>a</span> <span
  m='311110'>fairly</span> <span m='311480'>simple</span> <span
  m='311800'>differential</span> <span m='312250'>equation</span> <span
  m='312620'>and</span> <span m='312720'>it works</span> <span
  m='313290'>perfectly</span> <span m='313850'>by</span> <span
  m='314000'>the</span> <span m='314100'>method</span> <span
  m='314430'>that</span> <span m='314530'>we're</span> <span
  m='314650'>going</span> <span m='314890'>to</span> <span
  m='315900'>propose.</span> </p><p><span m='317270'>So</span> <span
  m='317540'>the</span> <span m='317750'>first</span> <span
  m='318130'>step</span> <span m='319010'>in</span> <span m='319170'>this</span>
  <span m='319260'>solution</span> <span m='320820'>is</span> <span
  m='321960'>just</span> <span m='322240'>to</span> <span
  m='322320'>rewrite</span> <span m='322910'>the</span> <span
  m='323080'>equation</span> <span m='324080'>by</span> <span
  m='324220'>putting</span> <span m='326800'>one</span> <span
  m='327050'>of</span> <span m='327120'>the</span> <span m='327190'>terms</span>
  <span m='327520'>on</span> <span m='327670'>the</span> <span
  m='327740'>right-hand</span> <span m='328190'>side.</span> <span m='329090'>So
  this is</span> <span m='329500'>dy/dx</span> <span m='329660'>=</span> <span
  m='331820'>-xy.</span> <span m='335700'>Now,</span> <span
  m='335910'>here</span> <span m='336170'>is</span> <span
  m='336290'>where</span> <span m='336450'>you</span> <span
  m='336610'>see</span> <span m='336930'>the</span> <span
  m='337070'>difference</span> <span m='337700'>between</span> <span
  m='338160'>this</span> <span m='338360'>type</span> <span m='338630'>of</span>
  <span m='338720'>equation</span> <span m='339530'>and</span> <span
  m='339930'>the</span> <span m='340000'>previous</span> <span
  m='340580'>type.</span> <span m='341210'>In</span> <span m='341460'>the</span>
  <span m='341530'>previous</span> <span m='342070'>equation,</span> <span
  m='342770'>we</span> <span m='342900'>just</span> <span m='343130'>had</span>
  <span m='343480'>a</span> <span m='343580'>function</span> <span
  m='343960'>of</span> <span m='344050'>x</span> <span m='344510'>on</span>
  <span m='344640'>the</span> <span m='344710'>right-hand</span> <span
  m='345120'>side.</span> <span m='345660'>But</span> <span
  m='345900'>here,</span> <span m='346550'>the</span> <span
  m='346660'>rate</span> <span m='346870'>of</span> <span
  m='347010'>change</span> <span m='347350'>depends</span> <span
  m='347890'>on</span> <span m='348090'>both</span> <span m='348390'>x</span>
  <span m='348770'>and</span> <span m='349030'>y.</span> <span
  m='350260'>So</span> <span m='350490'>it's</span> <span m='350610'>not</span>
  <span m='350890'>clear</span> <span m='351230'>at</span> <span
  m='351300'>all</span> <span m='351480'>that</span> <span m='351570'>we</span>
  <span m='351700'>can</span> <span m='351830'>solve</span> <span
  m='352260'>this</span> <span m='352430'>kind</span> <span m='352670'>of</span>
  <span m='352740'>equation.</span> <span m='355110'>But</span> <span
  m='355380'>there</span> <span m='355540'>is</span> <span m='355870'>a</span>
  <span m='356220'>remarkable</span> <span m='356810'>trick</span> <span
  m='357200'>which</span> <span m='357370'>works</span> <span
  m='357720'>very</span> <span m='358120'>well</span> <span m='358370'>in</span>
  <span m='358470'>this</span> <span m='358640'>case.</span> <span
  m='359420'>Which</span> <span m='359980'>is</span> <span m='360880'>to</span>
  <span m='361150'>use</span> <span m='361750'>multiplication.</span> <span
  m='362710'>To</span> <span m='362870'>use</span> <span m='363190'>this</span>
  <span m='363390'>idea of</span> <span m='363890'>differential</span> <span
  m='364570'>that</span> <span m='364680'>we</span> <span
  m='364790'>talked</span> <span m='365090'>about</span> <span
  m='365330'>last</span> <span m='365690'>time.</span> <span
  m='366340'>Namely,</span> <span m='367040'>we</span> <span
  m='367280'>divide</span> <span m='367700'>by</span> <span m='367860'>y</span>
  <span m='369150'>and</span> <span m='369310'>multiply</span> <span
  m='369800'>by</span> <span m='369950'>dx.</span> <span m='374700'>So</span>
  <span m='374940'>now</span> <span m='375390'>we've</span> <span
  m='375550'>separated</span> <span m='376320'>the</span> <span
  m='376480'>equation.</span> <span m='377660'>We've</span> <span
  m='378360'>separated</span> <span m='378940'>out</span> <span
  m='379120'>the</span> <span m='379200'>differentials.</span> <span
  m='380750'>And</span> <span m='381030'>what's</span> <span
  m='381200'>going</span> <span m='381350'>to</span> <span m='381420'>be</span>
  <span m='381520'>important</span> <span m='382020'>for</span> <span
  m='382220'>us</span> <span m='382960'>is</span> <span m='383420'>that</span>
  <span m='383590'>the</span> <span m='383690'>left-hand</span> <span
  m='384150'>side</span> <span m='384850'>is</span> <span
  m='385000'>expressed</span> <span m='385500'>solely</span> <span
  m='385900'>in</span> <span m='386000'>terms</span> <span m='386300'>of</span>
  <span m='386400'>y</span> <span m='387410'>and</span> <span
  m='387560'>the</span> <span m='387620'>right-hand</span> <span
  m='388060'>side</span> <span m='388340'>is</span> <span
  m='388450'>expressed</span> <span m='388920'>solely</span> <span
  m='389250'>in</span> <span m='389350'>terms</span> <span m='389660'>of</span>
  <span m='389830'>x.</span> <span m='390170'>And</span> <span
  m='390780'>we'll</span> <span m='390980'>go</span> <span
  m='391140'>through</span> <span m='391370'>this</span> <span
  m='392020'>in</span> <span m='392170'>careful</span> <span
  m='392580'>detail.</span> </p><p><span m='393400'>So</span> <span
  m='393610'>now,</span> <span m='393740'>the</span> <span
  m='393880'>idea</span> <span m='394370'>is</span> <span m='394800'>if</span>
  <span m='394950'>you've</span> <span m='395030'>set</span> <span
  m='395300'>up</span> <span m='395400'>the</span> <span
  m='395500'>equation</span> <span m='396070'>in</span> <span
  m='396190'>terms</span> <span m='396410'>of</span> <span
  m='396500'>differentials</span> <span m='397200'>as</span> <span
  m='397320'>opposed</span> <span m='397680'>to</span> <span
  m='398160'>ratios</span> <span m='398860'>of</span> <span
  m='398950'>differentials,</span> <span m='399680'>or</span> <span
  m='400520'>rates</span> <span m='400800'>of</span> <span
  m='400910'>change,</span> <span m='401960'>now</span> <span
  m='402430'>I</span> <span m='402530'>can</span> <span m='402720'>use</span>
  <span m='402990'>Leibniz's</span> <span m='403680'>notation</span> <span
  m='404680'>and</span> <span m='404870'>integrate</span> <span
  m='405670'>these</span> <span m='405940'>differentials.</span> <span
  m='407600'>Take</span> <span m='407840'>their</span> <span
  m='407990'>antiderivatives.</span> <span m='415420'>And</span> <span
  m='416280'>we</span> <span m='416530'>know</span> <span m='417700'>what</span>
  <span m='418130'>each</span> <span m='418390'>of</span> <span
  m='418490'>these</span> <span m='418760'>is.</span> <span
  m='422070'>Namely,</span> <span m='426570'>the</span> <span
  m='426750'>left-hand</span> <span m='427350'>side</span> <span
  m='428790'>is</span> <span m='429020'>just--</span> <span
  m='431270'>Ah,</span> <span m='433010'>well,</span> <span
  m='436470'>that's</span> <span m='436760'>tough.</span> <span
  m='437920'>OK.</span> <span m='444250'>I</span> <span m='444350'>had</span>
  <span m='444770'>an</span> <span m='445130'>au</span> <span
  m='445360'>pair</span> <span m='445660'>who</span> <span
  m='445900'>actually</span> <span m='446800'>did</span> <span
  m='446950'>a</span> <span m='447010'>lot</span> <span m='447160'>of</span>
  <span m='447240'>Tae Kwan Do.</span> <span m='449410'>She</span> <span
  m='449650'>could</span> <span m='449780'>definitely</span> <span
  m='450390'>defeat</span> <span m='450830'>any</span> <span
  m='451050'>of</span> <span m='451150'>you</span> <span m='451430'>in</span>
  <span m='451550'>any</span> <span m='451800'>encounter,</span> <span
  m='452870'>I</span> <span m='452990'>promise.</span> <span
  m='455020'>OK.</span> <span m='455440'>Anyway.</span> <span
  m='457870'>So,</span> <span m='458110'>let's</span> <span m='458400'>go</span>
  <span m='458540'>back.</span> <span m='458970'>We</span> <span
  m='459690'>want</span> <span m='459870'>to</span> <span m='460250'>take</span>
  <span m='460470'>the</span> <span m='460570'>antiderivative</span> <span
  m='461090'>of</span> <span m='461340'>this.</span> <span m='461970'>So</span>
  <span m='462140'>remember,</span> <span m='465980'>this</span> <span
  m='466150'>is</span> <span m='466260'>the</span> <span
  m='467670'>function</span> <span m='468130'>whose</span> <span
  m='468220'>derivative</span> <span m='468310'>is</span> <span
  m='469100'>1/y.</span> <span m='470140'>And</span> <span m='470370'>now</span>
  <span m='470620'>there's</span> <span m='470900'>a</span> <span
  m='470990'>slight</span> <span m='471320'>novelty</span> <span
  m='471860'>here.</span> <span m='472320'>Here</span> <span
  m='472650'>we're</span> <span m='472780'>differentiating</span> <span
  m='473460'>the</span> <span m='473540'>variable as</span> <span
  m='474110'>x,</span> <span m='474860'>and</span> <span m='475150'>here</span>
  <span m='475330'>we're</span> <span m='475880'>differentiating</span> <span
  m='476420'>the</span> <span m='476500'>variable</span> <span
  m='476940'>as</span> <span m='477100'>y.</span> <span m='478220'>So</span>
  <span m='478370'>the</span> <span m='478690'>antiderivative</span> <span
  m='479250'>here</span> <span m='480070'>is</span> <span m='480790'>ln</span>
  <span m='481600'>y.</span> <span m='482860'>And the</span> <span
  m='483180'>antiderivative</span> <span m='483980'>on</span> <span
  m='484130'>the</span> <span m='484230'>other</span> <span
  m='484410'>side</span> <span m='484930'>is</span> <span m='486780'>-x^2</span>
  <span m='487010'>/</span> <span m='487210'>2.</span> <span
  m='487970'>And</span> <span m='488250'>they</span> <span
  m='488540'>differ</span> <span m='488840'>by</span> <span m='489020'>a</span>
  <span m='489100'>constant.</span> <span m='490400'>So</span> <span
  m='490590'>we</span> <span m='490710'>have</span> <span m='490920'>this</span>
  <span m='491460'>relationship</span> <span m='492190'>here.</span> <span
  m='497620'>Now,</span> <span m='497730'>that's</span> <span
  m='498000'>almost</span> <span m='498550'>the</span> <span
  m='498810'>end</span> <span m='499030'>of</span> <span m='499110'>the</span>
  <span m='499210'>story.</span> <span m='499660'>We</span> <span
  m='499770'>have</span> <span m='499950'>to</span> <span
  m='500040'>exponentiate</span> <span m='501080'>to</span> <span
  m='501230'>express</span> <span m='501710'>y</span> <span m='502000'>in</span>
  <span m='502110'>terms</span> <span m='502380'>of</span> <span
  m='502450'>x.</span> <span m='503100'>So,</span> <span m='503840'>e^(ln
  y)</span> <span m='505100'>=</span> <span m='505680'>e^(-x^2 / 2)</span> <span
  m='505870'>+</span> <span m='506450'>c.</span> <span m='509880'>And</span>
  <span m='510190'>now</span> <span m='510550'>I</span> <span
  m='510630'>can</span> <span m='510800'>rewrite</span> <span
  m='511160'>that</span> <span m='511320'>as</span> <span m='511450'>y</span>
  <span m='512180'>is equal to--</span> <span m='514820'>I'll</span> <span
  m='515160'>write</span> <span m='515260'>as</span> <span m='515470'>A</span>
  <span m='516010'>e^(-x^2 / 2),</span> <span m='518380'>where</span> <span
  m='518640'>A</span> <span m='519480'>=</span> <span m='519890'>e^c.</span>
  <span m='523870'>And</span> <span m='524180'>incidentally,</span> <span
  m='525300'>we're</span> <span m='525630'>just</span> <span
  m='525960'>taking</span> <span m='526350'>the</span> <span
  m='526420'>case</span> <span m='526760'>y</span> <span
  m='527030'>positive</span> <span m='528230'>here.</span> <span
  m='528440'>We'll</span> <span m='529080'>talk</span> <span
  m='529390'>about</span> <span m='529750'>what</span> <span
  m='529870'>happens</span> <span m='530720'>when</span> <span m='530920'>y
  is</span> <span m='531270'>negative</span> <span m='531910'>in</span> <span
  m='532550'>a</span> <span m='532610'>few</span> <span
  m='532800'>minutes.</span> </p><p><span m='535590'>So</span> <span
  m='535740'>here's</span> <span m='536090'>the</span> <span
  m='536220'>answer</span> <span m='536630'>to</span> <span
  m='536740'>the</span> <span m='536820'>question,</span> <span
  m='537270'>almost,</span> <span m='537820'>except</span> <span
  m='538080'>for</span> <span m='538160'>this</span> <span
  m='538270'>fact</span> <span m='538570'>that</span> <span m='538670'>I</span>
  <span m='539130'>picked</span> <span m='539410'>out</span> <span
  m='540630'>y</span> <span m='541460'>positive.</span> <span
  m='542040'>Really,</span> <span m='542420'>the</span> <span
  m='542530'>solution</span> <span m='545900'>is</span> <span
  m='546360'>y</span> <span m='546940'>is</span> <span m='549310'>equal
  to</span> <span m='549530'>any</span> <span m='549650'>multiple</span> <span
  m='549890'>of</span> <span m='550670'>e^(-x^2 / 2).</span> <span
  m='551780'>Any</span> <span m='552950'>constant</span> <span
  m='553510'>a;</span> <span m='554710'>a</span> <span
  m='555000'>positive,</span> <span m='556090'>negative,</span> <span
  m='556560'>or</span> <span m='556830'>0.</span> <span m='559310'>Any</span>
  <span m='559610'>constant</span> <span m='560170'>will</span> <span
  m='560320'>do.</span> <span m='562240'>And</span> <span m='562490'>we</span>
  <span m='562610'>should</span> <span m='562770'>double-check</span> <span
  m='563440'>that</span> <span m='563880'>to</span> <span m='563970'>make</span>
  <span m='564150'>sure.</span> <span m='564640'>If you</span> <span
  m='564870'>take</span> <span m='565200'>d/dx</span> <span m='565460'>of</span>
  <span m='565560'>y</span> <span m='568090'>right,</span> <span
  m='568610'>that's</span> <span m='568840'>going</span> <span
  m='569080'>to</span> <span m='569160'>be</span> <span m='571820'>a</span>
  <span m='572570'>d/dx</span> <span m='572930'>e^(-x^2 / 2).</span> <span
  m='576570'>And</span> <span m='576930'>now</span> <span m='577050'>by</span>
  <span m='577230'>the</span> <span m='577340'>chain</span> <span
  m='577760'>rule,</span> <span m='577940'>you</span> <span
  m='578070'>can</span> <span m='578220'>see</span> <span m='578470'>that</span>
  <span m='578620'>this</span> <span m='578770'>is</span> <span
  m='578990'>a</span> <span m='579270'>times</span> <span m='580450'>the</span>
  <span m='580590'>factor of</span> <span m='581030'>-x,</span> <span
  m='581860'>that's</span> <span m='582080'>the</span> <span
  m='582150'>derivative</span> <span m='582560'>of</span> <span
  m='582680'>the</span> <span m='582820'>exponent,</span> <span
  m='584300'>with</span> <span m='584420'>respect to x,</span> <span
  m='585080'>times</span> <span m='586440'>the exponential.</span> <span
  m='588190'>And</span> <span m='588430'>now</span> <span m='588940'>you</span>
  <span m='589080'>just</span> <span m='589310'>rearrange</span> <span
  m='589860'>that.</span> <span m='590770'>That's</span> <span
  m='592420'>-xy.</span> <span m='594430'>So</span> <span m='594620'>it</span>
  <span m='594750'>does</span> <span m='595040'>check.</span> <span
  m='595860'>These are</span> <span m='596450'>solutions</span> <span
  m='596880'>to</span> <span m='596970'>the</span> <span
  m='597050'>equation.</span> <span m='597360'>The</span> <span
  m='597490'>a</span> <span m='597730'>didn't</span> <span
  m='597910'>matter.</span> <span m='598560'>It</span> <span
  m='598670'>didn't</span> <span m='598870'>matter</span> <span
  m='599060'>whether</span> <span m='599170'>it</span> <span
  m='599290'>was</span> <span m='599480'>positive</span> <span
  m='599950'>or</span> <span m='600030'>negative.</span> <span
  m='605370'>This</span> <span m='605620'>function</span> <span
  m='606820'>is</span> <span m='607200'>known</span> <span m='607580'>as</span>
  <span m='607700'>the</span> <span m='607780'>normal</span> <span
  m='608160'>distribution,</span> <span m='608750'>so</span> <span
  m='608900'>it</span> <span m='609100'>fits</span> <span
  m='609260'>beautifully</span> <span m='609720'>with</span> <span
  m='609870'>a</span> <span m='609930'>lot</span> <span m='610130'>of</span>
  <span m='610520'>probability</span> <span m='611310'>and</span> <span
  m='611550'>probabilistic</span> <span m='612260'>interpretation</span> <span
  m='613040'>of</span> <span m='613870'>quantum</span> <span
  m='614270'>mechanics.</span> <span m='615710'>This</span> <span
  m='615870'>is</span> <span m='617230'>sort</span> <span m='617470'>of</span>
  <span m='617790'>where</span> <span m='618090'>the</span> <span
  m='618140'>particle</span> <span m='618610'>is.</span> </p><p><span
  m='622630'>So</span> <span m='623420'>next,</span> <span
  m='623900'>what</span> <span m='624070'>I'd</span> <span
  m='624150'>like</span> <span m='624350'>to</span> <span m='624450'>do</span>
  <span m='624660'>is</span> <span m='624880'>just</span> <span
  m='625380'>go</span> <span m='625630'>through</span> <span
  m='626370'>the</span> <span m='626890'>method</span> <span
  m='627210'>in</span> <span m='627390'>general</span> <span
  m='627980'>and</span> <span m='628110'>point</span> <span
  m='628450'>out</span> <span m='629480'>when</span> <span m='629730'>it</span>
  <span m='629880'>works.</span> <span m='630920'>And</span> <span
  m='631240'>then</span> <span m='631390'>I'll</span> <span
  m='631480'>make</span> <span m='631700'>a</span> <span m='631760'>few</span>
  <span m='632030'>comments</span> <span m='632720'>just</span> <span
  m='632960'>to</span> <span m='633060'>make</span> <span m='633230'>sure</span>
  <span m='633500'>that</span> <span m='633630'>you</span> <span
  m='633750'>understand</span> <span m='634830'>the</span> <span
  m='636020'>technicalities</span> <span m='637190'>of</span> <span
  m='637380'>dealing</span> <span m='637650'>with</span> <span
  m='637790'>constants</span> <span m='638640'>and</span> <span
  m='638800'>so</span> <span m='638980'>forth.</span> <span
  m='639590'>So,</span> <span m='639850'>first</span> <span m='640200'>of</span>
  <span m='640290'>all,</span> <span m='640660'>the</span> <span
  m='640730'>general</span> <span m='641570'>method</span> <span
  m='641940'>of</span> <span m='642090'>separation of</span> <span
  m='642680'>variables.</span> <span m='653830'>And</span> <span
  m='654050'>here's</span> <span m='654270'>when</span> <span
  m='654440'>it</span> <span m='654550'>works.</span> <span m='655360'>It</span>
  <span m='655660'>works</span> <span m='656450'>when</span> <span
  m='656680'>you're</span> <span m='656790'>faced</span> <span m='657470'>with
  a</span> <span m='657880'>differential</span> <span m='658470'>equation</span>
  <span m='659370'>of</span> <span m='659490'>the</span> <span
  m='659590'>form</span> <span m='659960'>f(x)</span> <span
  m='661360'>g(y).</span> <span m='663410'>That's</span> <span
  m='663710'>the</span> <span m='663800'>situation</span> <span
  m='664460'>that</span> <span m='664570'>we</span> <span m='664720'>had.</span>
  <span m='665920'>And</span> <span m='666740'>I'll</span> <span
  m='666880'>just</span> <span m='667510'>illustrate</span> <span
  m='668020'>that.</span> <span m='668150'>Just</span> <span
  m='668370'>to</span> <span m='668750'>remind</span> <span
  m='669220'>you</span> <span m='669300'>here.</span> <span
  m='669820'>Here's</span> <span m='670100'>our</span> <span
  m='670260'>equation.</span> <span m='671650'>It's</span> <span
  m='671830'>in</span> <span m='672060'>that</span> <span
  m='672320'>form.</span> <span m='673120'>And</span> <span
  m='673380'>the</span> <span m='673450'>function</span> <span
  m='674230'>f(x)</span> <span m='674700'>is</span> <span m='675210'>-x,</span>
  <span m='675630'>and</span> <span m='675850'>the</span> <span
  m='675910'>function</span> <span m='676800'>g(y)</span> <span
  m='677110'>is</span> <span m='677270'>just</span> <span m='677500'>y.</span>
  <span m='682190'>And</span> <span m='682550'>now,</span> <span
  m='682850'>the</span> <span m='682950'>way</span> <span m='683080'>the</span>
  <span m='683160'>method</span> <span m='683440'>works</span> <span
  m='683830'>is,</span> <span m='684500'>this</span> <span
  m='684880'>separation</span> <span m='685830'>step.</span> <span
  m='686670'>From</span> <span m='686870'>here</span> <span m='687250'>to</span>
  <span m='687390'>here,</span> <span m='687690'>this</span> <span
  m='687940'>is</span> <span m='688210'>the</span> <span m='688300'>key</span>
  <span m='688550'>step.</span> <span m='690370'>This</span> <span
  m='690540'>is</span> <span m='690650'>the</span> <span m='690750'>only</span>
  <span m='693000'>conceptually</span> <span m='694040'>remarkable</span> <span
  m='694770'>step,</span> <span m='695070'>which</span> <span
  m='695410'>all</span> <span m='695750'>has</span> <span m='696010'>to</span>
  <span m='696110'>do</span> <span m='696670'>with</span> <span
  m='696940'>the</span> <span m='697030'>fact</span> <span
  m='697360'>that</span> <span m='697570'>Leibniz</span> <span m='698430'>fixed
  his</span> <span m='698990'>notations</span> <span m='699570'>up</span> <span
  m='699710'>so</span> <span m='699850'>that</span> <span m='700000'>this</span>
  <span m='700160'>works</span> <span m='700530'>perfectly.</span> <span
  m='702190'>And</span> <span m='703210'>so</span> <span m='703380'>that</span>
  <span m='703660'>involves</span> <span m='704210'>taking</span> <span
  m='704650'>the</span> <span m='704690'>y,</span> <span m='705090'>so</span>
  <span m='705510'>dividing</span> <span m='706060'>by</span> <span
  m='706190'>g(y),</span> <span m='708320'>and</span> <span
  m='708570'>multiplying</span> <span m='709200'>by</span> <span
  m='709320'>dx,</span> <span m='712400'>it's</span> <span
  m='712630'>comfortable</span> <span m='713170'>because</span> <span
  m='713430'>it</span> <span m='713540'>feels</span> <span
  m='713950'>like</span> <span m='714190'>ordinary</span> <span
  m='714600'>arithmetic,</span> <span m='715540'>even</span> <span
  m='715880'>though</span> <span m='715960'>these</span> <span
  m='716150'>are</span> <span m='716220'>differentials.</span> <span
  m='719430'>And</span> <span m='719760'>then,</span> <span m='720900'>we</span>
  <span m='721200'>just</span> <span m='721490'>antidifferentiate.</span> <span
  m='722710'>So</span> <span m='723300'>we</span> <span m='723500'>have</span>
  <span m='723660'>a</span> <span m='723730'>function,</span> <span
  m='724180'>H,</span> <span m='726280'>which</span> <span m='726480'>is</span>
  <span m='726580'>the</span> <span m='726700'>integral</span> <span
  m='727340'>of</span> <span m='727770'>dy /</span> <span
  m='729280'>g(y),</span> <span m='730560'>and</span> <span m='730710'>we</span>
  <span m='730810'>have</span> <span m='730980'>another</span> <span
  m='731260'>function</span> <span m='731740'>which is F.</span> <span
  m='733840'>Note</span> <span m='734060'>they are</span> <span
  m='734240'>functions</span> <span m='734600'>of</span> <span
  m='734690'>completely</span> <span m='735090'>different</span> <span
  m='735350'>variables</span> <span m='735910'>here.</span> <span
  m='736740'>Integral</span> <span m='737300'>of</span> <span
  m='737450'>f(x)</span> <span m='737790'>dx.</span> <span
  m='740850'>Now,</span> <span m='741080'>in</span> <span m='741220'>our</span>
  <span m='741600'>example</span> <span m='743210'>we</span> <span
  m='743440'>did</span> <span m='743710'>that. We</span> <span
  m='744050'>carried</span> <span m='744510'>out</span> <span
  m='744710'>this</span> <span m='744910'>antidifferentiation,</span> <span
  m='745530'>and</span> <span m='746300'>this</span> <span
  m='746520'>function</span> <span m='746900'>turned</span> <span
  m='747180'>out</span> <span m='747370'>to</span> <span m='747510'>be</span>
  <span m='748350'>ln</span> <span m='748780'>y,</span> <span
  m='749680'>and</span> <span m='749890'>this</span> <span
  m='750020'>function</span> <span m='750390'>turned</span> <span
  m='750630'>out</span> <span m='750800'>to</span> <span m='750900'>be</span>
  <span m='751730'>-x^2</span> <span m='752000'>/</span> <span
  m='752200'>2.</span> <span m='759630'>And</span> <span m='760020'>then</span>
  <span m='760830'>we</span> <span m='761080'>write</span> <span
  m='761450'>the</span> <span m='761530'>relationship.</span> <span
  m='762350'>Which</span> <span m='762660'>is</span> <span
  m='763220'>that</span> <span m='764620'>if</span> <span
  m='764790'>these</span> <span m='764960'>are</span> <span
  m='765030'>both</span> <span m='765280'>antiderivatives</span> <span
  m='765790'>of</span> <span m='765940'>the</span> <span m='766170'>same</span>
  <span m='766530'>thing,</span> <span m='767190'>then</span> <span
  m='767340'>they</span> <span m='767430'>have</span> <span m='767620'>to</span>
  <span m='767710'>differ</span> <span m='767980'>by</span> <span m='768210'>a
  constant.</span> <span m='768890'>Or,</span> <span m='769100'>in</span> <span
  m='769170'>other</span> <span m='769320'>words,</span> <span
  m='770030'>H(y)</span> <span m='771120'>has to</span> <span m='771340'>equal
  to</span> <span m='771900'>F(x)</span> <span m='773180'>+</span> <span
  m='773720'>c.</span> <span m='775870'>Where c is</span> <span
  m='776350'>constant.</span> </p><p><span m='790130'>Now,</span> <span
  m='790560'>notice</span> <span m='791810'>that</span> <span
  m='792030'>this</span> <span m='792290'>kind</span> <span m='792870'>of</span>
  <span m='793940'>equation</span> <span m='795150'>is</span> <span
  m='795700'>what</span> <span m='795890'>we</span> <span m='796020'>call</span>
  <span m='796370'>an</span> <span m='796680'>implicit</span> <span
  m='797260'>equation.</span> <span m='800450'>It's</span> <span
  m='800640'>not</span> <span m='800920'>quite</span> <span m='801360'>a</span>
  <span m='801460'>formula</span> <span m='802010'>for</span> <span
  m='802210'>y,</span> <span m='802760'>directly.</span> <span
  m='803930'>It</span> <span m='804820'>defines</span> <span m='805430'>y</span>
  <span m='805730'>implicitly.</span> <span m='806330'>That's</span> <span
  m='806580'>that</span> <span m='806810'>top</span> <span
  m='807220'>line</span> <span m='807640'>up</span> <span
  m='807800'>here.</span> <span m='809630'>That's</span> <span
  m='809920'>the</span> <span m='810030'>implicit</span> <span
  m='810540'>equation.</span> <span m='813020'>In</span> <span
  m='813240'>order</span> <span m='813470'>to</span> <span m='813610'>make
  it</span> <span m='813810'>an</span> <span m='814020'>explicit</span> <span
  m='814500'>equation,</span> <span m='814950'>which</span> <span
  m='815110'>is</span> <span m='815200'>what</span> <span m='815380'>is</span>
  <span m='815510'>underneath,</span> <span m='816630'>what</span> <span
  m='816860'>I</span> <span m='816910'>have</span> <span m='817110'>to</span>
  <span m='817210'>do</span> <span m='817480'>is</span> <span
  m='817680'>take</span> <span m='817890'>the</span> <span
  m='817980'>inverse.</span> <span m='818780'>So</span> <span
  m='818970'>I</span> <span m='819040'>write</span> <span m='819290'>it</span>
  <span m='819390'>as</span> <span m='819520'>y =</span> <span
  m='820080'>H^(-1)(F(x)</span> <span m='820540'>+</span> <span
  m='821020'>c).</span> <span m='825080'>Now,</span> <span m='825280'>in</span>
  <span m='825370'>real</span> <span m='825610'>life</span> <span
  m='826080'>the</span> <span m='826160'>calculus</span> <span m='826670'>part
  is</span> <span m='827040'>often</span> <span m='827400'>pretty</span> <span
  m='827640'>easy.</span> <span m='828140'>And</span> <span m='828440'>it</span>
  <span m='828570'>can</span> <span m='828690'>be</span> <span
  m='828800'>quite</span> <span m='829110'>messy</span> <span
  m='830040'>to</span> <span m='830190'>do</span> <span m='830360'>the</span>
  <span m='831610'>inverse</span> <span m='832070'>operation.</span> <span
  m='832620'>So</span> <span m='832740'>sometimes</span> <span
  m='833160'>we</span> <span m='833260'>just</span> <span
  m='833420'>leave</span> <span m='833660'>it</span> <span
  m='833730'>alone</span> <span m='834160'>in</span> <span m='834320'>the</span>
  <span m='834400'>implicit</span> <span m='834860'>form.</span> <span
  m='835850'>But</span> <span m='836120'>it's</span> <span
  m='836590'>also</span> <span m='836900'>satisfying,</span> <span
  m='837800'>sometimes,</span> <span m='838250'>to</span> <span
  m='838350'>write</span> <span m='838580'>it</span> <span m='838700'>in</span>
  <span m='839200'>the</span> <span m='839270'>final</span> <span
  m='839610'>form</span> <span m='839920'>here.</span> </p><p><span
  m='849290'>Now</span> <span m='849650'>I've</span> <span m='850280'>got
  to</span> <span m='850950'>give</span> <span m='851180'>you</span> <span
  m='851330'>a</span> <span m='851420'>few</span> <span m='851770'>little</span>
  <span m='852200'>pieces</span> <span m='852550'>of</span> <span
  m='852660'>commentary</span> <span m='854160'>before--</span> <span
  m='854560'>For</span> <span m='854730'>those</span> <span m='854940'>of</span>
  <span m='855030'>you</span> <span m='855170'>walked</span> <span
  m='855730'>in</span> <span m='855820'>a</span> <span m='855890'>little</span>
  <span m='856090'>bit</span> <span m='856290'>late,</span> <span
  m='856640'>this</span> <span m='856810'>will</span> <span
  m='856920'>all</span> <span m='857100'>be</span> <span m='857210'>on</span>
  <span m='857370'>the</span> <span m='857440'>Web.</span> <span
  m='865660'>So</span> <span m='865830'>just</span> <span m='866080'>a</span>
  <span m='866130'>few</span> <span m='866310'>pieces</span> <span
  m='866690'>of</span> <span m='866810'>commentary.</span> <span
  m='871180'>So</span> <span m='871390'>if</span> <span m='871520'>you</span>
  <span m='871620'>like,</span> <span m='872440'>some</span> <span
  m='872630'>remarks.</span> <span m='876230'>The</span> <span
  m='876350'>first</span> <span m='877250'>remark</span> <span
  m='878450'>is</span> <span m='878930'>that</span> <span m='879140'>I</span>
  <span m='879240'>could</span> <span m='879630'>have</span> <span
  m='879790'>written</span> <span m='889380'>natural log</span> <span
  m='891140'>of</span> <span m='891790'>absolute</span> <span
  m='892710'>y</span> <span m='894180'>is</span> <span m='894460'>equal</span>
  <span m='894990'>to</span> <span m='895340'>-x^2 / 2</span> <span m='895560'>+
  c.</span> <span m='898390'>We</span> <span m='898910'>learned</span> <span
  m='899220'>last</span> <span m='899560'>time</span> <span
  m='899760'>that</span> <span m='899880'>the</span> <span
  m='899980'>antiderivative</span> <span m='900910'>works</span> <span
  m='901260'>also</span> <span m='902090'>for</span> <span m='902240'>the</span>
  <span m='902340'>negative</span> <span m='902640'>values.</span> <span
  m='902870'>So</span> <span m='903040'>this</span> <span
  m='903250'>would</span> <span m='903440'>work</span> <span
  m='904240'>for</span> <span m='904520'>y</span> <span m='906120'>not</span>
  <span m='906380'>equal</span> <span m='906650'>to</span> <span
  m='906820'>0.</span> <span m='908490'>Both</span> <span m='908790'>for</span>
  <span m='908910'>positive</span> <span m='909360'>and</span> <span
  m='909460'>negative</span> <span m='909880'>values.</span> <span
  m='910900'>And</span> <span m='911530'>you</span> <span m='911620'>can</span>
  <span m='911780'>see</span> <span m='912060'>that</span> <span
  m='912210'>that</span> <span m='912420'>would</span> <span
  m='912530'>have</span> <span m='912620'>captured</span> <span
  m='913630'>most</span> <span m='913990'>of</span> <span m='914080'>the</span>
  <span m='914160'>rest</span> <span m='914450'>of</span> <span
  m='914550'>the</span> <span m='914650'>solution.</span> <span
  m='915580'>Namely,</span> <span m='916670'>|y|</span> <span m='917390'>would
  be</span> <span m='917680'>equal</span> <span m='918930'>to</span> <span
  m='919870'>A</span> <span m='920100'>e^(-x^2 / 2),</span> <span
  m='921870'>by</span> <span m='922010'>the</span> <span m='922150'>same</span>
  <span m='922700'>reasoning</span> <span m='923110'>as</span> <span
  m='923240'>before.</span> <span m='924800'>And</span> <span
  m='925250'>then</span> <span m='925500'>that</span> <span
  m='925680'>would</span> <span m='925810'>mean</span> <span
  m='926070'>that</span> <span m='926260'>y</span> <span m='927170'>was</span>
  <span m='927380'>plus</span> <span m='927740'>or</span> <span
  m='927860'>minus</span> <span m='928420'>A</span> <span m='928980'>e^(-x^2 /
  2),</span> <span m='930890'>which</span> <span m='931190'>is</span> <span
  m='931310'>really</span> <span m='931610'>just</span> <span
  m='931890'>what</span> <span m='932050'>we</span> <span m='932180'>got.</span>
  <span m='934800'>Because,</span> <span m='935390'>in</span> <span
  m='935560'>fact,</span> <span m='935970'>I</span> <span
  m='936150'>didn't</span> <span m='936450'>bother</span> <span
  m='936860'>with</span> <span m='937160'>this.</span> <span
  m='938120'>Because</span> <span m='938470'>actually</span> <span
  m='938900'>in</span> <span m='939040'>most--</span> <span
  m='939560'>and</span> <span m='939820'>the</span> <span
  m='939880'>reason</span> <span m='940160'>why</span> <span m='940300'>I'm
  going</span> <span m='940570'>through</span> <span m='940740'>this,</span>
  <span m='940920'>by</span> <span m='941070'>the</span> <span
  m='941160'>way,</span> <span m='941470'>carefully</span> <span
  m='941890'>this</span> <span m='942080'>time,</span> <span
  m='942420'>is</span> <span m='942690'>that</span> <span
  m='942820'>you're</span> <span m='942940'>going to</span> <span
  m='943110'>be</span> <span m='943240'>faced</span> <span
  m='943520'>with</span> <span m='943640'>this</span> <span
  m='943750'>very</span> <span m='944010'>frequently.</span> <span
  m='944480'>The</span> <span m='944580'>exponential</span> <span
  m='945290'>function</span> <span m='945660'>comes</span> <span
  m='945880'>up</span> <span m='946080'>all</span> <span m='946250'>the</span>
  <span m='946350'>time.</span> <span m='947290'>And</span> <span
  m='947440'>so,</span> <span m='947570'>therefore,</span> <span
  m='947910'>you</span> <span m='947980'>want to</span> <span
  m='948180'>be</span> <span m='948260'>completely</span> <span
  m='948710'>comfortable</span> <span m='949710'>dealing</span> <span
  m='950050'>with</span> <span m='950260'>it.</span> </p><p><span
  m='952300'>So</span> <span m='952510'>this</span> <span m='952810'>time</span>
  <span m='953060'>I</span> <span m='953140'>had</span> <span
  m='953340'>the</span> <span m='953420'>positive</span> <span
  m='953960'>A,</span> <span m='954510'>while</span> <span m='954810'>the</span>
  <span m='954890'>negative</span> <span m='955190'>A</span> <span
  m='955410'>fits</span> <span m='955510'>in</span> <span
  m='955770'>either</span> <span m='955980'>this</span> <span
  m='956210'>way,</span> <span m='956540'>or</span> <span m='956740'>I</span>
  <span m='956820'>can</span> <span m='956990'>throw</span> <span
  m='957280'>it</span> <span m='957380'>in.</span> <span
  m='957740'>Because</span> <span m='958030'>I</span> <span
  m='958140'>know</span> <span m='958350'>that</span> <span
  m='958490'>that's</span> <span m='958700'>going</span> <span
  m='958890'>to</span> <span m='958970'>work</span> <span m='959230'>that</span>
  <span m='959420'>way.</span> <span m='959970'>But</span> <span
  m='960210'>of</span> <span m='960290'>course,</span> <span m='960510'>I</span>
  <span m='960600'>double-checked</span> <span m='961310'>to</span> <span
  m='961930'>be</span> <span m='962030'>confident.</span> <span
  m='963370'>Now,</span> <span m='963510'>this</span> <span
  m='963650'>still</span> <span m='964140'>leaves</span> <span
  m='964580'>out</span> <span m='965490'>one</span> <span
  m='965970'>value.</span> <span m='967380'>So,</span> <span
  m='967600'>this</span> <span m='967920'>still</span> <span
  m='969840'>leaves</span> <span m='970150'>out--</span> <span
  m='971640'>So,</span> <span m='971980'>if</span> <span m='972150'>you</span>
  <span m='972230'>like,</span> <span m='972460'>what</span> <span
  m='972600'>I</span> <span m='972650'>have</span> <span m='972860'>here</span>
  <span m='972990'>now</span> <span m='973210'>is</span> <span m='973580'>a
  is</span> <span m='973660'>equal to</span> <span m='973820'>plus</span> <span
  m='974060'>or</span> <span m='974140'>minus</span> <span
  m='974420'>capital</span> <span m='974860'>A.</span> <span
  m='975470'>The</span> <span m='976090'>capital</span> <span m='976500'>A
  one</span> <span m='976820'>being</span> <span m='977090'>the positive</span>
  <span m='977620'>one.</span> <span m='978540'>But</span> <span
  m='978790'>this</span> <span m='978910'>still</span> <span
  m='979180'>leaves</span> <span m='979500'>out</span> <span
  m='980060'>one</span> <span m='980340'>case.</span> <span
  m='980920'>Which</span> <span m='981140'>is</span> <span m='981230'>y</span>
  <span m='981470'>=</span> <span m='981830'>0.</span> <span
  m='983480'>Which</span> <span m='983740'>is an</span> <span
  m='984030'>extremely</span> <span m='984770'>boring</span> <span
  m='986200'>solution,</span> <span m='986620'>but</span> <span
  m='986730'>nevertheless</span> <span m='987180'>a</span> <span
  m='987290'>solution</span> <span m='987820'>to</span> <span
  m='987920'>this</span> <span m='988080'>problem.</span> <span
  m='988760'>If</span> <span m='988910'>you</span> <span m='989000'>plug</span>
  <span m='989290'>in</span> <span m='989560'>0</span> <span
  m='990000'>here</span> <span m='990220'>for</span> <span m='990390'>y,</span>
  <span m='991140'>you</span> <span m='991320'>get</span> <span
  m='991510'>0.</span> <span m='992330'>If</span> <span m='992460'>you</span>
  <span m='992540'>plug in</span> <span m='992900'>0</span> <span
  m='993280'>here</span> <span m='993510'>for</span> <span m='993690'>y,</span>
  <span m='994230'>you</span> <span m='994440'>get</span> <span
  m='994600'>that</span> <span m='994720'>these</span> <span
  m='994930'>two</span> <span m='995070'>sides</span> <span
  m='995440'>are</span> <span m='995550'>equal.</span> <span m='996520'>0</span>
  <span m='996700'>=</span> <span m='996990'>0.</span> <span
  m='998080'>Not</span> <span m='998350'>a</span> <span m='998390'>very</span>
  <span m='998660'>interesting</span> <span m='999150'>answer</span> <span
  m='999520'>to</span> <span m='999650'>the</span> <span
  m='999730'>question.</span> <span m='1000630'>But</span> <span
  m='1000860'>it's</span> <span m='1000980'>still</span> <span
  m='1001240'>an</span> <span m='1001330'>answer.</span> <span
  m='1002290'>And</span> <span m='1002550'>so</span> <span m='1002710'>y</span>
  <span m='1003190'>=</span> <span m='1003310'>0</span> <span
  m='1003420'>is</span> <span m='1003540'>left</span> <span
  m='1003740'>out..</span> <span m='1003930'>Well,</span> <span
  m='1004280'>that's</span> <span m='1004550'>not</span> <span
  m='1004860'>so</span> <span m='1005030'>surprising</span> <span
  m='1010970'>that</span> <span m='1011110'>we</span> <span
  m='1011250'>missed</span> <span m='1011620'>that</span> <span
  m='1012020'>solution.</span> <span m='1012520'>Because</span> <span
  m='1012980'>in</span> <span m='1013200'>the</span> <span
  m='1013290'>process</span> <span m='1014500'>of</span> <span
  m='1014650'>carrying</span> <span m='1014980'>out</span> <span
  m='1015200'>these</span> <span m='1015410'>operations,</span> <span
  m='1016360'>I</span> <span m='1016500'>divided</span> <span
  m='1016950'>by</span> <span m='1017100'>y.</span> <span m='1018250'>I</span>
  <span m='1018310'>did</span> <span m='1019300'>that</span> <span
  m='1019470'>right</span> <span m='1019730'>here.</span> <span
  m='1022290'>So,</span> <span m='1022700'>that's</span> <span
  m='1022920'>what</span> <span m='1023060'>happens.</span> <span
  m='1023600'>If</span> <span m='1023750'>you're</span> <span m='1023850'>going
  to</span> <span m='1024330'>do</span> <span m='1024720'>various</span> <span
  m='1025160'>non-linear</span> <span m='1025670'>operations,</span> <span
  m='1026170'>in</span> <span m='1026260'>particular, if</span> <span
  m='1026710'>you're</span> <span m='1026780'>going to</span> <span
  m='1026960'>divide</span> <span m='1027290'>by</span> <span
  m='1027400'>something,</span> <span m='1028190'>if</span> <span
  m='1028410'>it</span> <span m='1028470'>happens</span> <span
  m='1028750'>to</span> <span m='1028820'>be</span> <span m='1028920'>0</span>
  <span m='1029110'>you're</span> <span m='1029250'>going to</span> <span
  m='1029410'>miss</span> <span m='1029720'>that</span> <span
  m='1029910'>solution.</span> <span m='1030370'>You</span> <span
  m='1030550'>might</span> <span m='1030860'>have</span> <span
  m='1031010'>problems</span> <span m='1031510'>with</span> <span
  m='1031660'>that</span> <span m='1031860'>solution.</span> <span
  m='1033860'>But we</span> <span m='1034060'>have</span> <span
  m='1034210'>to</span> <span m='1034320'>live</span> <span
  m='1034480'>with</span> <span m='1034660'>that</span> <span
  m='1035120'>because</span> <span m='1035980'>we</span> <span
  m='1036180'>want</span> <span m='1036350'>to</span> <span
  m='1036410'>get</span> <span m='1036560'>ahead.</span> <span
  m='1036870'>And</span> <span m='1036960'>we</span> <span
  m='1037050'>want</span> <span m='1037230'>to</span> <span
  m='1037290'>get</span> <span m='1037470'>the</span> <span
  m='1037580'>formulas</span> <span m='1038600'>for</span> <span
  m='1038750'>various</span> <span m='1039120'>solutions.</span> <span
  m='1040520'>So</span> <span m='1040610'>that's</span> <span
  m='1040860'>the</span> <span m='1040940'>first</span> <span
  m='1041320'>remark</span> <span m='1041740'>that</span> <span
  m='1041850'>I</span> <span m='1041900'>wanted</span> <span
  m='1042180'>to</span> <span m='1042270'>make.</span> </p><p><span
  m='1042840'>And</span> <span m='1043230'>now,</span> <span
  m='1043700'>the</span> <span m='1043820'>second</span> <span
  m='1044300'>one</span> <span m='1046210'>is</span> <span
  m='1049510'>almost</span> <span m='1049950'>related</span> <span
  m='1050340'>to</span> <span m='1050450'>what</span> <span m='1050590'>I</span>
  <span m='1050640'>was</span> <span m='1050810'>just</span> <span
  m='1051000'>discussing</span> <span m='1052090'>right</span> <span
  m='1052350'>here.</span> <span m='1053380'>That</span> <span
  m='1053580'>I'm</span> <span m='1053690'>erasing.</span> <span
  m='1057240'>And</span> <span m='1057520'>that's</span> <span
  m='1057780'>the</span> <span m='1057880'>following.</span> <span
  m='1059420'>I</span> <span m='1059640'>could</span> <span
  m='1059950'>have</span> <span m='1060200'>also</span> <span
  m='1060590'>written</span> <span m='1064860'>ln</span> <span
  m='1065680'>y</span> <span m='1066370'>+</span> <span m='1067170'>c_1</span>
  <span m='1067670'>=</span> <span m='1068660'>-x^2</span> <span
  m='1069430'>/</span> <span m='1069660'>2</span> <span m='1070180'>+</span>
  <span m='1070650'>c_2.</span> <span m='1072100'>Where</span> <span
  m='1072360'>c_1</span> <span m='1072730'>and</span> <span
  m='1072850'>c_2</span> <span m='1073170'>are</span> <span
  m='1073280'>different</span> <span m='1073570'>constants.</span> <span
  m='1074300'>When</span> <span m='1074620'>I'm</span> <span
  m='1074910'>faced</span> <span m='1075480'>with</span> <span
  m='1075680'>this</span> <span m='1076100'>antidifferentiation,</span> <span
  m='1077210'>I</span> <span m='1077280'>just</span> <span
  m='1077550'>taught</span> <span m='1077830'>you</span> <span
  m='1077900'>last</span> <span m='1078290'>time,</span> <span
  m='1079040'>that</span> <span m='1079180'>you</span> <span
  m='1079270'>want</span> <span m='1079460'>to</span> <span
  m='1079520'>have</span> <span m='1080300'>an</span> <span
  m='1080500'>arbitrary</span> <span m='1081060'>constant.</span> <span
  m='1082230'>Here</span> <span m='1082790'>and</span> <span
  m='1082940'>there,</span> <span m='1083170'>in</span> <span
  m='1083290'>both</span> <span m='1083700'>slots.</span> <span
  m='1086760'>So</span> <span m='1086980'>I</span> <span
  m='1087080'>perfectly</span> <span m='1087720'>well</span> <span
  m='1087920'>could</span> <span m='1088100'>have</span> <span
  m='1088190'>written</span> <span m='1088440'>this</span> <span
  m='1088660'>down.</span> <span m='1089480'>But</span> <span
  m='1089750'>notice</span> <span m='1090300'>that</span> <span
  m='1090440'>I</span> <span m='1090530'>can</span> <span
  m='1090740'>rewrite</span> <span m='1091370'>this</span> <span
  m='1092250'>as</span> <span m='1092490'>ln</span> <span m='1092950'>y =</span>
  <span m='1094880'>-x^2</span> <span m='1095550'>/</span> <span
  m='1095780'>2</span> <span m='1096140'>+</span> <span m='1096990'>c_2</span>
  <span m='1097500'>-</span> <span m='1097990'>c_1.</span> <span
  m='1100190'>I</span> <span m='1100300'>can</span> <span
  m='1100450'>subtract.</span> <span m='1102250'>And</span> <span
  m='1102650'>then,</span> <span m='1103390'>if</span> <span
  m='1103610'>I</span> <span m='1103750'>just</span> <span
  m='1104090'>combine</span> <span m='1104560'>these</span> <span
  m='1104770'>two</span> <span m='1104920'>guys</span> <span
  m='1105180'>together and</span> <span m='1105590'>name</span> <span
  m='1105910'>them</span> <span m='1106100'>c,</span> <span m='1106950'>I</span>
  <span m='1107080'>have</span> <span m='1107440'>a</span> <span
  m='1107590'>different</span> <span m='1107960'>constant.</span> <span
  m='1109060'>In</span> <span m='1109170'>other</span> <span
  m='1109310'>words,</span> <span m='1109860'>it's</span> <span
  m='1110360'>superfluous</span> <span m='1111380'>and</span> <span
  m='1111530'>redundant to</span> <span m='1112490'>have</span> <span
  m='1112900'>two</span> <span m='1113290'>arbitrary</span> <span
  m='1113930'>constants</span> <span m='1114500'>here,</span> <span
  m='1115060'>because</span> <span m='1115310'>they</span> <span
  m='1115410'>can</span> <span m='1115530'>always</span> <span
  m='1115930'>be</span> <span m='1116080'>combined</span> <span
  m='1116530'>into</span> <span m='1116780'>one.</span> <span
  m='1118260'>So</span> <span m='1118440'>two</span> <span
  m='1118680'>constants</span> <span m='1120110'>are</span> <span
  m='1120470'>superfluous.</span> <span m='1127010'>Can</span> <span
  m='1127750'>always</span> <span m='1130320'>be</span> <span
  m='1131250'>combined.</span> <span m='1134430'>So</span> <span
  m='1134540'>we</span> <span m='1134650'>just</span> <span
  m='1134870'>never</span> <span m='1135180'>do</span> <span
  m='1135350'>it</span> <span m='1135820'>this</span> <span
  m='1135990'>first</span> <span m='1136340'>way.</span> <span
  m='1136490'>It's</span> <span m='1136610'>just</span> <span
  m='1136860'>extra</span> <span m='1137140'>writing,</span> <span
  m='1137480'>it's</span> <span m='1137590'>a</span> <span
  m='1137660'>waste</span> <span m='1137980'>of</span> <span
  m='1138080'>time.</span> </p><p><span m='1145260'>There's</span> <span
  m='1145450'>one</span> <span m='1145720'>other</span> <span
  m='1145980'>subtle</span> <span m='1146370'>remark,</span> <span
  m='1146800'>which</span> <span m='1147310'>you</span> <span
  m='1147450'>won't</span> <span m='1147790'>actually</span> <span
  m='1148120'>appreciate</span> <span m='1148540'>until</span> <span
  m='1148770'>you've</span> <span m='1148910'>done</span> <span
  m='1149120'>several</span> <span m='1149450'>problems</span> <span
  m='1150020'>in</span> <span m='1150150'>this</span> <span
  m='1150310'>direction.</span> <span m='1151280'>Which</span> <span
  m='1151670'>is</span> <span m='1152160'>that</span> <span
  m='1152420'>the</span> <span m='1152520'>constant</span> <span
  m='1153650'>appears</span> <span m='1154490'>additive</span> <span
  m='1155800'>here,</span> <span m='1156930'>in</span> <span
  m='1157090'>this</span> <span m='1157260'>first</span> <span
  m='1157950'>solution</span> <span m='1158440'>to</span> <span
  m='1158520'>the</span> <span m='1158590'>problem.</span> <span
  m='1158900'>But</span> <span m='1159100'>when</span> <span
  m='1159310'>I</span> <span m='1159400'>do</span> <span m='1159600'>this</span>
  <span m='1159780'>nonlinear</span> <span m='1160490'>operation</span> <span
  m='1161050'>of</span> <span m='1161130'>exponentiation,</span> <span
  m='1162590'>it</span> <span m='1162870'>now</span> <span
  m='1163250'>becomes</span> <span m='1163710'>multiplicative</span> <span
  m='1165010'>constant.</span> <span m='1166390'>And</span> <span
  m='1166830'>so,</span> <span m='1167720'>in</span> <span
  m='1167910'>general,</span> <span m='1169630'>there's</span> <span
  m='1169890'>a</span> <span m='1169960'>free</span> <span
  m='1170260'>constant</span> <span m='1170840'>somewhere</span> <span
  m='1171110'>in</span> <span m='1171200'>the</span> <span
  m='1171270'>problem.</span> <span m='1171630'>But</span> <span
  m='1171800'>it's</span> <span m='1172180'>not</span> <span
  m='1172630'>always</span> <span m='1172970'>an</span> <span
  m='1173050'>additive</span> <span m='1173460'>constant.</span> <span
  m='1175490'>It's</span> <span m='1175660'>only an</span> <span
  m='1175950'>additive</span> <span m='1176350'>constant</span> <span
  m='1176820'>right</span> <span m='1177390'>at the</span> <span
  m='1177480'>first</span> <span m='1177960'>step</span> <span
  m='1178330'>when</span> <span m='1178500'>you</span> <span
  m='1178580'>take</span> <span m='1178840'>the</span> <span
  m='1178940'>antiderivative.</span> <span m='1179890'>And</span> <span
  m='1180020'>then</span> <span m='1180120'>after</span> <span
  m='1180420'>that,</span> <span m='1180600'>when you</span> <span
  m='1180760'>do</span> <span m='1180870'>all</span> <span
  m='1181040'>your</span> <span m='1181220'>other</span> <span
  m='1181450'>nonlinear</span> <span m='1181960'>operations,</span> <span
  m='1182540'>it</span> <span m='1182670'>can</span> <span m='1182770'>turn
  into</span> <span m='1183170'>anything</span> <span m='1183560'>at</span>
  <span m='1183640'>all.</span> <span m='1185440'>So</span> <span
  m='1185600'>you</span> <span m='1185720'>should</span> <span
  m='1185860'>always</span> <span m='1186250'>expect it</span> <span
  m='1186780'>to</span> <span m='1186890'>be</span> <span
  m='1187030'>something</span> <span m='1187370'>slightly</span> <span
  m='1187780'>more</span> <span m='1187980'>interesting</span> <span
  m='1188590'>than</span> <span m='1188810'>an additive</span> <span
  m='1189100'>constant. Although</span> <span m='1189650'>occasionally</span>
  <span m='1190210'>it</span> <span m='1190330'>stays</span> <span
  m='1190710'>an</span> <span m='1190800'>additive</span> <span
  m='1191000'>constant.</span> </p><p><span m='1199060'>The</span> <span
  m='1199180'>last</span> <span m='1199550'>little</span> <span
  m='1199790'>bit</span> <span m='1200290'>of</span> <span
  m='1200470'>commentary</span> <span m='1201180'>that</span> <span
  m='1201310'>I</span> <span m='1201360'>want</span> <span m='1201600'>to</span>
  <span m='1201660'>make</span> <span m='1202500'>just</span> <span
  m='1202860'>goes</span> <span m='1203150'>back</span> <span
  m='1203500'>to</span> <span m='1203640'>the</span> <span
  m='1204980'>original</span> <span m='1205470'>problem</span> <span
  m='1206010'>here.</span> <span m='1206810'>Which</span> <span
  m='1207170'>is</span> <span m='1207280'>right</span> <span
  m='1207560'>here.</span> <span m='1209680'>The</span> <span
  m='1209810'>example</span> <span m='1210270'>1.</span> <span
  m='1211190'>And</span> <span m='1211460'>I</span> <span
  m='1211660'>want</span> <span m='1211910'>to</span> <span
  m='1212030'>solve</span> <span m='1212390'>it,</span> <span
  m='1212520'>even</span> <span m='1212740'>though</span> <span
  m='1212830'>this</span> <span m='1213000'>is</span> <span
  m='1213240'>simpleminded.</span> <span m='1214490'>But</span> <span
  m='1214990'>Example</span> <span m='1215600'>1</span> <span
  m='1216840'>via</span> <span m='1218050'>separation.</span> <span
  m='1221490'>So</span> <span m='1221610'>that</span> <span
  m='1221730'>you</span> <span m='1221850'>see</span> <span
  m='1223680'>our</span> <span m='1223950'>variables.</span> <span
  m='1225290'>So</span> <span m='1225400'>that</span> <span
  m='1225530'>you</span> <span m='1225660'>see</span> <span
  m='1225870'>what</span> <span m='1226060'>it</span> <span
  m='1226190'>does.</span> <span m='1228440'>The</span> <span
  m='1228590'>situation</span> <span m='1229250'>is</span> <span
  m='1229450'>this.</span> <span m='1234230'>And</span> <span
  m='1234520'>the</span> <span m='1234590'>separation</span> <span
  m='1235280'>just</span> <span m='1235520'>means</span> <span
  m='1235800'>you</span> <span m='1235890'>put</span> <span
  m='1236110'>the</span> <span m='1236210'>dx</span> <span m='1236580'>on</span>
  <span m='1236700'>the</span> <span m='1236780'>other</span> <span
  m='1236940'>side.</span> <span m='1238570'>So</span> <span
  m='1238770'>this</span> <span m='1238950'>is</span> <span
  m='1239270'>dy</span> <span m='1240330'>=</span> <span m='1240670'>f(x)</span>
  <span m='1240930'>dx.</span> <span m='1244030'>And</span> <span
  m='1244200'>then</span> <span m='1244290'>we</span> <span
  m='1244410'>integrate.</span> <span m='1254680'>And</span> <span
  m='1255140'>the</span> <span m='1255270'>antiderivative</span> <span
  m='1255900'>of</span> <span m='1256210'>dy</span> <span m='1256620'>is</span>
  <span m='1256770'>just</span> <span m='1256990'>y.</span> <span
  m='1258170'>So</span> <span m='1258320'>this</span> <span
  m='1258520'>is</span> <span m='1259450'>the</span> <span
  m='1259580'>solution</span> <span m='1261080'>to</span> <span
  m='1261210'>the</span> <span m='1261300'>problem.</span> <span
  m='1263490'>And</span> <span m='1263740'>it's</span> <span
  m='1263910'>just</span> <span m='1264240'>what</span> <span
  m='1264390'>we</span> <span m='1264510'>wrote</span> <span
  m='1264770'>before;</span> <span m='1265170'>it's</span> <span
  m='1265320'>just</span> <span m='1266430'>a</span> <span
  m='1266500'>funny</span> <span m='1266830'>notation.</span> <span
  m='1267480'>And</span> <span m='1267890'>it</span> <span
  m='1268130'>comes</span> <span m='1268450'>to</span> <span
  m='1268520'>the</span> <span m='1268610'>same</span> <span
  m='1268910'>thing</span> <span m='1269760'>as</span> <span
  m='1269970'>the</span> <span m='1270080'>antiderivative.</span> </p><p><span
  m='1279480'>OK,</span> <span m='1279790'>so</span> <span
  m='1280000'>now</span> <span m='1280250'>we're</span> <span m='1280360'>going
  to</span> <span m='1280510'>go</span> <span m='1280630'>on</span> <span
  m='1280880'>to</span> <span m='1282240'>a</span> <span
  m='1282340'>trickier</span> <span m='1282740'>problem.</span> <span
  m='1283240'>A trickier</span> <span m='1283610'>example.</span> <span
  m='1284090'>We</span> <span m='1284220'>need</span> <span
  m='1284670'>one</span> <span m='1284840'>or</span> <span
  m='1284910'>two</span> <span m='1285090'>more</span> <span
  m='1285320'>just</span> <span m='1285530'>to</span> <span
  m='1285610'>get</span> <span m='1285780'>some</span> <span
  m='1285930'>practice</span> <span m='1286420'>with</span> <span
  m='1286610'>this</span> <span m='1286790'>method.</span> <span
  m='1289330'>Everybody</span> <span m='1289660'>happy</span> <span
  m='1289990'>so</span> <span m='1290140'>far?</span> <span
  m='1291730'>Question.</span> </p><p><span m='1292240'>STUDENT:
  [INAUDIBLE]</span> </p><p><span m='1313830'>PROFESSOR: So,</span> <span
  m='1314020'>the</span> <span m='1314110'>question</span> <span
  m='1314580'>is,</span> <span m='1314760'>how</span> <span
  m='1314950'>do</span> <span m='1315040'>we</span> <span
  m='1315180'>deal</span> <span m='1315400'>with</span> <span
  m='1315580'>this</span> <span m='1315790'>ambiguity.</span> <span
  m='1318150'>I'm</span> <span m='1318290'>summarizing</span> <span
  m='1319170'>very,</span> <span m='1320160'>very,</span> <span
  m='1320950'>briefly</span> <span m='1321490'>what</span> <span
  m='1321940'>I</span> <span m='1322010'>heard.</span> <span
  m='1323020'>Well,</span> <span m='1323390'>you</span> <span
  m='1323510'>know,</span> <span m='1323610'>sometimes</span> <span
  m='1324080'>a &gt;</span> <span m='1324490'>0,</span> <span
  m='1324850'>sometimes</span> <span m='1325210'>a &lt;</span> <span
  m='1325870'>0,</span> <span m='1326530'>sometimes</span> <span
  m='1326860'>it's</span> <span m='1327010'>not.</span> <span
  m='1327550'>So</span> <span m='1327850'>there's</span> <span
  m='1328220'>a</span> <span m='1328270'>name</span> <span
  m='1328690'>for</span> <span m='1330620'>this</span> <span
  m='1330840'>guy.</span> <span m='1332810'>Which</span> <span
  m='1333160'>is</span> <span m='1333640'>that</span> <span
  m='1333790'>this</span> <span m='1333970'>is</span> <span
  m='1334100'>what's</span> <span m='1334310'>called</span> <span
  m='1334600'>the</span> <span m='1334670'>general</span> <span
  m='1335190'>solution.</span> <span m='1340440'>In</span> <span
  m='1340560'>other</span> <span m='1340680'>words,</span> <span
  m='1340840'>the</span> <span m='1340930'>whole</span> <span
  m='1341120'>family</span> <span m='1341510'>of</span> <span
  m='1341580'>solutions</span> <span m='1342010'>is</span> <span
  m='1342110'>the</span> <span m='1342330'>answer</span> <span
  m='1342650'>to</span> <span m='1342780'>the</span> <span
  m='1342870'>question.</span> <span m='1344460'>Now,</span> <span
  m='1344700'>it</span> <span m='1344970'>could</span> <span
  m='1345230'>be</span> <span m='1345420'>that</span> <span
  m='1345550'>you're</span> <span m='1345680'>given</span> <span
  m='1346010'>extra</span> <span m='1346450'>information.</span> <span
  m='1348020'>If</span> <span m='1348270'>you're</span> <span
  m='1348550'>given</span> <span m='1348620'>extra</span> <span
  m='1348960'>information,</span> <span m='1350480'>that</span> <span
  m='1350800'>might</span> <span m='1351150'>be,</span> <span
  m='1351760'>and</span> <span m='1351930'>this</span> <span
  m='1352070'>is</span> <span m='1352220'>very</span> <span
  m='1352530'>typical</span> <span m='1352940'>in</span> <span
  m='1353060'>such</span> <span m='1353260'>problems,</span> <span
  m='1353820'>you</span> <span m='1353940'>have</span> <span
  m='1354090'>the</span> <span m='1354160'>rate</span> <span
  m='1354410'>of</span> <span m='1354500'>change of</span> <span
  m='1354960'>the</span> <span m='1355050'>function,</span> <span
  m='1355450'>which</span> <span m='1355610'>is</span> <span
  m='1355710'>what</span> <span m='1355850'>we've</span> <span
  m='1355970'>given.</span> <span m='1356510'>But</span> <span
  m='1356630'>you</span> <span m='1356750'>might</span> <span
  m='1356960'>also</span> <span m='1357250'>have</span> <span
  m='1357850'>the</span> <span m='1358030'>place</span> <span
  m='1358340'>where</span> <span m='1358480'>it</span> <span
  m='1358590'>starts.</span> <span m='1359780'>Which</span> <span
  m='1360080'>would</span> <span m='1360220'>be,</span> <span
  m='1360570'>say,</span> <span m='1361260'>it</span> <span
  m='1361390'>starts</span> <span m='1361750'>at</span> <span
  m='1361860'>3.</span> <span m='1364640'>Now,</span> <span
  m='1364850'>if</span> <span m='1364960'>you</span> <span
  m='1365060'>have</span> <span m='1365210'>that</span> <span
  m='1365380'>extra</span> <span m='1365660'>piece</span> <span
  m='1365850'>of</span> <span m='1365960'>information,</span> <span
  m='1366620'>then</span> <span m='1366770'>you</span> <span
  m='1366850'>can</span> <span m='1367010'>nail</span> <span
  m='1367290'>down</span> <span m='1367680'>exactly</span> <span
  m='1368270'>which</span> <span m='1368500'>function</span> <span
  m='1368890'>it</span> <span m='1369010'>is.</span> <span m='1370670'>If</span>
  <span m='1370920'>you</span> <span m='1371040'>do</span> <span
  m='1371200'>that,</span> <span m='1371470'>if</span> <span
  m='1371570'>you</span> <span m='1371660'>plug</span> <span
  m='1371940'>in</span> <span m='1372070'>3,</span> <span m='1372420'>you</span>
  <span m='1372550'>see</span> <span m='1373020'>that</span> <span m='1374700'>a
  times</span> <span m='1374790'>e^(-0^2 / 2)</span> <span m='1375470'>is</span>
  <span m='1376230'>equal</span> <span m='1376530'>to</span> <span
  m='1377040'>3.</span> <span m='1377860'>So</span> <span m='1378080'>a</span>
  <span m='1378520'>=</span> <span m='1378720'>3.</span> <span
  m='1380300'>And</span> <span m='1380490'>the</span> <span
  m='1380610'>answer</span> <span m='1381180'>is</span> <span
  m='1381350'>y</span> <span m='1381720'>=</span> <span m='1382180'>3e^(-x^2 /
  2).</span> <span m='1386140'>And</span> <span m='1386420'>similarly,</span>
  <span m='1386880'>if</span> <span m='1386970'>it's</span> <span
  m='1387130'>negative,</span> <span m='1387570'>if</span> <span
  m='1388100'>it</span> <span m='1388190'>starts</span> <span
  m='1388450'>out</span> <span m='1388630'>negative,</span> <span
  m='1388940'>it'll</span> <span m='1389110'>stay</span> <span
  m='1389420'>negative.</span> <span m='1390100'>For</span> <span
  m='1390340'>instance.</span> <span m='1391100'>If</span> <span
  m='1391230'>it</span> <span m='1391310'>starts</span> <span
  m='1391620'>out</span> <span m='1391800'>0,</span> <span
  m='1392160'>it'll</span> <span m='1392350'>stay</span> <span
  m='1392640'>0,</span> <span m='1392930'>this</span> <span
  m='1393140'>particular</span> <span m='1394260'>function</span> <span
  m='1394870'>here.</span> <span m='1396100'>So</span> <span
  m='1396730'>the</span> <span m='1397140'>answer to</span> <span
  m='1397470'>your</span> <span m='1397590'>question is</span> <span
  m='1397950'>how</span> <span m='1398110'>you</span> <span
  m='1398260'>deal</span> <span m='1398500'>with</span> <span
  m='1398650'>the</span> <span m='1398750'>ambiguity.</span> <span
  m='1399700'>The</span> <span m='1399830'>answer</span> <span
  m='1400200'>is</span> <span m='1400640'>that</span> <span
  m='1401360'>you</span> <span m='1401580'>simply</span> <span
  m='1402040'>say</span> <span m='1402700'>what</span> <span
  m='1402950'>the</span> <span m='1403060'>solution</span> <span
  m='1403500'>is.</span> <span m='1403620'>And the</span> <span
  m='1403760'>solution</span> <span m='1404100'>is</span> <span
  m='1404210'>not</span> <span m='1404510'>one</span> <span
  m='1404810'>function,</span> <span m='1405200'>it's</span> <span
  m='1405310'>a</span> <span m='1405380'>family of</span> <span
  m='1405870'>functions.</span> <span m='1406270'>It's</span> <span
  m='1406390'>a</span> <span m='1406460'>list</span> <span
  m='1406830'>and</span> <span m='1406920'>you</span> <span
  m='1406980'>have</span> <span m='1407180'>to</span> <span
  m='1407270'>have</span> <span m='1408030'>what's</span> <span
  m='1408220'>known</span> <span m='1408410'>as</span> <span
  m='1408500'>a</span> <span m='1408580'>parameter.</span> <span
  m='1410340'>And</span> <span m='1410700'>that</span> <span
  m='1410940'>parameter</span> <span m='1411320'>gets</span> <span
  m='1411550'>nailed</span> <span m='1411930'>down</span> <span
  m='1412440'>if</span> <span m='1412580'>you</span> <span
  m='1412700'>tell</span> <span m='1413000'>me</span> <span
  m='1413150'>more</span> <span m='1413660'>information</span> <span
  m='1414250'>about</span> <span m='1414410'>the</span> <span
  m='1414500'>function.</span> <span m='1415240'>Not</span> <span
  m='1415630'>the</span> <span m='1415700'>rate</span> <span
  m='1415900'>of</span> <span m='1415980'>change,</span> <span
  m='1416460'>but</span> <span m='1416580'>something</span> <span
  m='1416870'>about</span> <span m='1417110'>the</span> <span
  m='1417200'>values</span> <span m='1417670'>of</span> <span
  m='1417770'>the</span> <span m='1417860'>function.</span> <span
  m='1418320'><i></i></span> </p><p><span m='1426620'>STUDENT:
  [INAUDIBLE]</span> </p><p><span m='1433660'>PROFESSOR: The</span> <span
  m='1433860'>general</span> <span m='1434250'>solution</span> <span
  m='1434730'>is</span> <span m='1434900'>this</span> <span
  m='1435130'>solution.</span> </p><p><span m='1435720'>STUDENT:
  [INAUDIBLE]</span> </p><p><span m='1436430'>PROFESSOR: And</span> <span
  m='1436770'>I'm</span> <span m='1437020'>showing</span> <span
  m='1437420'>you</span> <span m='1437790'>here</span> <span
  m='1438220'>that</span> <span m='1438370'>you</span> <span
  m='1438510'>could</span> <span m='1438690'>get</span> <span
  m='1438900'>to</span> <span m='1439050'>most</span> <span
  m='1439440'>of</span> <span m='1439510'>the</span> <span
  m='1439590'>general</span> <span m='1439900'>solution.</span> <span
  m='1440300'>There's</span> <span m='1440450'>one</span> <span
  m='1440740'>thing</span> <span m='1440900'>that's</span> <span
  m='1441050'>left</span> <span m='1441340'>out,</span> <span
  m='1441600'>namely</span> <span m='1441900'>the</span> <span
  m='1441990'>case</span> <span m='1442610'>a =</span> <span
  m='1442990'>0.</span> <span m='1444570'>So,</span> <span m='1444960'>in</span>
  <span m='1445110'>other</span> <span m='1445270'>words,</span> <span
  m='1445580'>I</span> <span m='1445750'>would</span> <span
  m='1445970'>not</span> <span m='1446410'>go</span> <span
  m='1446620'>through</span> <span m='1447030'>this</span> <span
  m='1447270'>method.</span> <span m='1448120'>I</span> <span
  m='1448230'>would</span> <span m='1448390'>only</span> <span
  m='1448710'>use</span> <span m='1449190'>this,</span> <span
  m='1449400'>which</span> <span m='1449570'>is</span> <span
  m='1449660'>simpler.</span> <span m='1450690'>But</span> <span
  m='1450850'>then</span> <span m='1451010'>I</span> <span
  m='1451100'>have</span> <span m='1451330'>to</span> <span
  m='1451740'>understand</span> <span m='1452750'>that</span> <span
  m='1452880'>I</span> <span m='1452950'>haven't</span> <span
  m='1453330'>gotten</span> <span m='1453590'>all of the</span> <span
  m='1454040'>solutions</span> <span m='1454560'>this</span> <span
  m='1454770'>way.</span> <span m='1455410'>I'm</span> <span m='1455560'>going
  to</span> <span m='1455630'>need</span> <span m='1455840'>to</span> <span
  m='1455940'>throw</span> <span m='1456260'>in</span> <span
  m='1456380'>all</span> <span m='1456570'>the</span> <span
  m='1456650'>rest</span> <span m='1456960'>of</span> <span
  m='1457020'>the</span> <span m='1457090'>solutions.</span> <span
  m='1459510'>So</span> <span m='1459690'>in</span> <span m='1459760'>the</span>
  <span m='1459820'>back</span> <span m='1460080'>of</span> <span
  m='1460140'>your</span> <span m='1460290'>head,</span> <span
  m='1460590'>you</span> <span m='1460680'>always</span> <span
  m='1460950'>have</span> <span m='1461100'>to</span> <span
  m='1461190'>have</span> <span m='1461770'>something</span> <span
  m='1462210'>like</span> <span m='1462420'>this</span> <span
  m='1462590'>in</span> <span m='1462700'>mind.</span> <span
  m='1463930'>So</span> <span m='1464080'>that</span> <span
  m='1464190'>you</span> <span m='1464270'>can</span> <span
  m='1464380'>generate</span> <span m='1464710'>all</span> <span
  m='1464820'>the</span> <span m='1464890'>solutions.</span> <span
  m='1465570'>This</span> <span m='1465770'>is</span> <span
  m='1465910'>very</span> <span m='1466120'>suggestive,</span> <span
  m='1466980'>right?</span> <span m='1468510'>The</span> <span
  m='1468800'>restriction,</span> <span m='1469430'>it</span> <span
  m='1469540'>turns</span> <span m='1469780'>that</span> <span
  m='1470020'>the</span> <span m='1470110'>restriction</span> <span
  m='1470590'>A &gt;</span> <span m='1471080'>0</span> <span
  m='1471380'>is</span> <span m='1471840'>superfluous,</span> <span
  m='1472890'>is</span> <span m='1473070'>unnecessary.</span> <span
  m='1480660'>But</span> <span m='1480840'>that,</span> <span
  m='1481020'>we</span> <span m='1481120'>only</span> <span
  m='1481350'>get</span> <span m='1481530'>by</span> <span
  m='1481740'>further</span> <span m='1482070'>thought</span> <span
  m='1482500'>and by</span> <span m='1482690'>checking.</span> <span
  m='1486180'>Another</span> <span m='1486440'>question?</span> <span
  m='1486890'>Over</span> <span m='1487060'>here.</span> </p><p><span
  m='1487290'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1492210'>PROFESSOR:
  The</span> <span m='1492580'>aim</span> <span m='1492900'>of</span> <span
  m='1493210'>differential</span> <span m='1493850'>equations</span> <span
  m='1494630'>is</span> <span m='1494860'>to</span> <span
  m='1494960'>solve</span> <span m='1495350'>them.</span> <span
  m='1495600'>Just</span> <span m='1495830'>as</span> <span
  m='1496070'>with</span> <span m='1496250'>algebraic</span> <span
  m='1496830'>equations.</span> <span m='1499530'>Usually,</span> <span
  m='1500000'>differential</span> <span m='1500410'>equations</span> <span
  m='1500880'>are</span> <span m='1500950'>telling</span> <span
  m='1501250'>you</span> <span m='1501330'>something</span> <span
  m='1501640'>about</span> <span m='1501910'>the</span> <span
  m='1502000'>balance</span> <span m='1502470'>between</span> <span
  m='1503300'>an</span> <span m='1503420'>acceleration</span> <span
  m='1504300'>and</span> <span m='1505150'>a</span> <span
  m='1505470'>velocity.</span> <span m='1505980'>If</span> <span m='1506390'>you
  have</span> <span m='1506650'>a</span> <span m='1506880'>falling</span> <span
  m='1507300'>object,</span> <span m='1507790'>it</span> <span
  m='1507880'>might</span> <span m='1508070'>have</span> <span
  m='1508200'>a</span> <span m='1508250'>resistance.</span> <span
  m='1509840'>It's</span> <span m='1510320'>telling</span> <span
  m='1510670'>you</span> <span m='1510780'>something.</span> <span
  m='1511210'>So,</span> <span m='1511480'>actually,</span> <span
  m='1511850'>sometimes</span> <span m='1512310'>in</span> <span
  m='1512550'>applied</span> <span m='1512970'>problems,</span> <span
  m='1513700'>formulating</span> <span m='1514650'>what</span> <span
  m='1515110'>differential</span> <span m='1515560'>equation</span> <span
  m='1515990'>describe</span> <span m='1516450'>this</span> <span
  m='1516580'>situation is</span> <span m='1517160'>very</span> <span
  m='1517380'>important.</span> <span m='1518310'>In</span> <span
  m='1518720'>order</span> <span m='1519020'>to</span> <span
  m='1519520'>see</span> <span m='1519840'>that</span> <span
  m='1519980'>that's</span> <span m='1520250'>the</span> <span
  m='1520340'>right</span> <span m='1520660'>thing,</span> <span
  m='1521910'>you</span> <span m='1522150'>have</span> <span
  m='1522370'>to</span> <span m='1522470'>have</span> <span
  m='1522610'>solved</span> <span m='1523100'>it</span> <span
  m='1523300'>to</span> <span m='1523430'>see</span> <span
  m='1523630'>that</span> <span m='1523760'>it</span> <span
  m='1524050'>fits</span> <span m='1524330'>the</span> <span
  m='1524430'>data</span> <span m='1524750'>that</span> <span
  m='1524900'>you're</span> <span m='1525430'>getting.</span> </p><p><span
  m='1525780'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1528570'>PROFESSOR:
  The</span> <span m='1528690'>question</span> <span m='1529050'>is,</span>
  <span m='1529160'>can</span> <span m='1529310'>you</span> <span
  m='1529400'>solve</span> <span m='1529740'>for</span> <span m='1530130'>x
  instead</span> <span m='1530480'>of</span> <span m='1530560'>y.</span> <span
  m='1531720'>The</span> <span m='1532150'>answer</span> <span
  m='1532560'>is,</span> <span m='1534210'>sure.</span> <span
  m='1536250'>That's</span> <span m='1536570'>the</span> <span
  m='1536670'>same</span> <span m='1536960'>thing</span> <span
  m='1537140'>as--</span> <span m='1538310'>so</span> <span
  m='1538490'>that</span> <span m='1538650'>would</span> <span
  m='1538750'>be</span> <span m='1538840'>the</span> <span
  m='1538960'>inverse</span> <span m='1539330'>function</span> <span
  m='1539680'>of</span> <span m='1539760'>the</span> <span
  m='1539850'>function</span> <span m='1540230'>that</span> <span
  m='1540450'>we're</span> <span m='1540800'>officially</span> <span
  m='1541280'>looking</span> <span m='1541580'>for.</span> <span
  m='1542520'>But</span> <span m='1543150'>yeah,</span> <span
  m='1543500'>it's</span> <span m='1543640'>legal.</span> <span
  m='1543960'>In</span> <span m='1544070'>other</span> <span
  m='1544220'>words,</span> <span m='1544480'>oftentimes</span> <span
  m='1545470'>we're</span> <span m='1545720'>stuck</span> <span
  m='1546150'>with</span> <span m='1546430'>just</span> <span
  m='1546660'>the</span> <span m='1546770'>implicit,</span> <span
  m='1547960'>some</span> <span m='1548210'>implicit</span> <span
  m='1548620'>formula and</span> <span m='1549050'>sometimes</span> <span
  m='1549360'>we're</span> <span m='1549460'>stuck</span> <span
  m='1549670'>with</span> <span m='1549770'>a</span> <span
  m='1549830'>formula</span> <span m='1550610'>x is</span> <span
  m='1550930'>a</span> <span m='1550990'>function</span> <span
  m='1551270'>of</span> <span m='1551340'>y</span> <span
  m='1551540'>versus</span> <span m='1551890'>y is</span> <span
  m='1552100'>a</span> <span m='1552250'>function</span> <span
  m='1552580'>of</span> <span m='1552670'>x.</span> <span m='1554730'>The</span>
  <span m='1555090'>way</span> <span m='1555340'>in</span> <span
  m='1555430'>which</span> <span m='1555640'>the</span> <span
  m='1556240'>function</span> <span m='1556600'>is</span> <span
  m='1556700'>specified</span> <span m='1557850'>is</span> <span
  m='1558090'>something</span> <span m='1558670'>that</span> <span
  m='1558950'>can be</span> <span m='1559450'>complicated.</span> <span
  m='1560780'>As</span> <span m='1560960'>you'll</span> <span
  m='1561110'>see</span> <span m='1561300'>in</span> <span
  m='1561420'>the</span> <span m='1561490'>next</span> <span
  m='1561770'>example,</span> <span m='1562810'>it's</span> <span
  m='1563030'>not</span> <span m='1563350'>necessarily</span> <span
  m='1564000'>the</span> <span m='1564090'>best</span> <span
  m='1564480'>thing</span> <span m='1564760'>to</span> <span
  m='1564880'>think</span> <span m='1565140'>about</span> <span
  m='1565390'>a</span> <span m='1565450'>function--</span> <span m='1565880'>y
  as</span> <span m='1566480'>a</span> <span m='1566650'>function</span> <span
  m='1567000'>of</span> <span m='1567090'>x.</span> <span
  m='1567530'>Well,</span> <span m='1568230'>in</span> <span
  m='1568380'>the</span> <span m='1570260'>fourth</span> <span
  m='1570520'>example.</span> <span m='1572170'>Alright,</span> <span
  m='1572740'>we're</span> <span m='1572880'>going to</span> <span
  m='1573010'>go</span> <span m='1573170'>on</span> <span m='1573720'>and</span>
  <span m='1574020'>do</span> <span m='1574110'>our</span> <span
  m='1576050'>next</span> <span m='1576390'>example</span> <span
  m='1576930'>here.</span> </p><p><span m='1587000'>So</span> <span
  m='1587170'>the</span> <span m='1587290'>third</span> <span
  m='1587680'>example</span> <span m='1591060'>is</span> <span
  m='1591450'>going</span> <span m='1591720'>to</span> <span
  m='1591780'>be</span> <span m='1591890'>taken</span> <span
  m='1592440'>as</span> <span m='1592790'>a</span> <span m='1592900'>kind</span>
  <span m='1593150'>of</span> <span m='1593270'>geometry</span> <span
  m='1593930'>problem.</span> <span m='1596090'>I'll</span> <span
  m='1596330'>draw a</span> <span m='1596670'>picture</span> <span
  m='1597100'>of</span> <span m='1597250'>it.</span> <span
  m='1598990'>Suppose</span> <span m='1600050'>you</span> <span
  m='1600210'>have</span> <span m='1600400'>a</span> <span
  m='1600470'>curve</span> <span m='1602000'>with</span> <span
  m='1602290'>the</span> <span m='1602370'>following</span> <span
  m='1602870'>property.</span> <span m='1604180'>If</span> <span
  m='1604400'>you</span> <span m='1604480'>take</span> <span
  m='1604750'>a</span> <span m='1604810'>point</span> <span
  m='1605250'>on</span> <span m='1605420'>the</span> <span
  m='1605500'>curve,</span> <span m='1606880'>and</span> <span
  m='1607130'>you</span> <span m='1607210'>take</span> <span
  m='1607530'>the</span> <span m='1607630'>ray,</span> <span
  m='1610730'>you</span> <span m='1610840'>take</span> <span
  m='1611090'>the</span> <span m='1611180'>ray</span> <span
  m='1611590'>from</span> <span m='1611740'>the</span> <span
  m='1611850'>origin</span> <span m='1612480'>to</span> <span
  m='1612550'>the</span> <span m='1612630'>curve,</span> <span
  m='1615630'>well,</span> <span m='1615840'>that's</span> <span
  m='1616050'>not</span> <span m='1616250'>going to</span> <span
  m='1616400'>be</span> <span m='1616540'>one</span> <span
  m='1616830'>that</span> <span m='1616940'>I</span> <span
  m='1617000'>want.</span> <span m='1617390'>I</span> <span
  m='1617460'>think</span> <span m='1617770'>I'm going to</span> <span
  m='1617820'>want</span> <span m='1618060'>something</span> <span
  m='1618360'>which</span> <span m='1618510'>is</span> <span
  m='1618610'>steeper.</span> <span m='1620350'>Because</span> <span
  m='1620690'>what</span> <span m='1620850'>I'm</span> <span m='1620990'>going
  to</span> <span m='1621200'>insist</span> <span m='1621940'>is</span> <span
  m='1622130'>that</span> <span m='1622280'>the</span> <span
  m='1622400'>tangent</span> <span m='1622980'>line</span> <span
  m='1623630'>be</span> <span m='1623790'>twice</span> <span
  m='1624230'>as</span> <span m='1624360'>steep</span> <span
  m='1625410'>as</span> <span m='1625800'>the</span> <span
  m='1628120'>ray</span> <span m='1629050'>from</span> <span
  m='1629250'>the</span> <span m='1629350'>origin.</span> <span
  m='1630490'>So,</span> <span m='1630740'>in</span> <span
  m='1630860'>other</span> <span m='1631050'>words,</span> <span
  m='1632180'>slope</span> <span m='1632830'>of</span> <span
  m='1634790'>tangent</span> <span m='1635280'>line</span> <span
  m='1639600'>equals</span> <span m='1640080'>twice</span> <span
  m='1642290'>slope</span> <span m='1644070'>of</span> <span
  m='1645000'>ray</span> <span m='1646680'>from</span> <span
  m='1647110'>origin.</span> <span m='1651540'>So</span> <span
  m='1652370'>the</span> <span m='1652550'>slope of</span> <span
  m='1652810'>this</span> <span m='1653030'>orange</span> <span
  m='1653410'>line</span> <span m='1653680'>is</span> <span
  m='1653790'>twice</span> <span m='1654110'>the</span> <span
  m='1654180'>slope</span> <span m='1654420'>of</span> <span
  m='1654490'>the</span> <span m='1654580'>pink</span> <span
  m='1654850'>line.</span> <span m='1659410'>Now,</span> <span
  m='1659540'>these</span> <span m='1659800'>kinds</span> <span
  m='1660120'>of</span> <span m='1660230'>geometric</span> <span
  m='1660760'>problems</span> <span m='1661240'>can</span> <span
  m='1661400'>be</span> <span m='1661510'>written</span> <span
  m='1661830'>very</span> <span m='1662200'>succinctly</span> <span
  m='1663290'>with</span> <span m='1666220'>differential</span> <span
  m='1666750'>equations.</span> <span m='1668700'>Namely,</span> <span
  m='1669840'>it's</span> <span m='1670060'>just</span> <span
  m='1670310'>the</span> <span m='1670380'>following.</span> <span
  m='1670970'>dy /</span> <span m='1671350'>dx,</span> <span
  m='1671530'>that's</span> <span m='1672100'>the</span> <span
  m='1672200'>slope</span> <span m='1673050'>of the</span> <span
  m='1673310'>tangent</span> <span m='1673800'>line,</span> <span
  m='1674470'>is</span> <span m='1674710'>equal</span> <span
  m='1675040'>to,</span> <span m='1675340'>well</span> <span
  m='1675740'>remember</span> <span m='1676110'>what</span> <span
  m='1676280'>the</span> <span m='1676380'>slope</span> <span
  m='1677070'>of</span> <span m='1677200'>this</span> <span
  m='1677390'>ray</span> <span m='1677680'>is,</span> <span
  m='1678030'>if</span> <span m='1678180'>this</span> <span
  m='1678460'>point--</span> <span m='1679370'>I</span> <span
  m='1679510'>need</span> <span m='1679680'>a</span> <span
  m='1679730'>notation.</span> <span m='1680700'>At</span> <span
  m='1680810'>this</span> <span m='1680990'>point</span> <span
  m='1681270'>is</span> <span m='1681680'>(x, y)</span> <span
  m='1682300'>which</span> <span m='1682470'>is</span> <span
  m='1682550'>a</span> <span m='1682610'>point</span> <span
  m='1682890'>on</span> <span m='1683000'>the</span> <span
  m='1683080'>curve.</span> <span m='1684520'>So</span> <span
  m='1684690'>the</span> <span m='1684910'>slope of</span> <span
  m='1685260'>this</span> <span m='1685510'>pink</span> <span
  m='1685810'>line</span> <span m='1686420'>is</span> <span
  m='1687520'>what?</span> </p><p><span m='1687860'>STUDENT: [INAUDIBLE]</span>
  </p><p><span m='1689650'>PROFESSOR:</span> <span m='1690090'>y/x.</span> <span
  m='1692610'>So</span> <span m='1693200'>if</span> <span
  m='1693350'>it's</span> <span m='1693510'>twice</span> <span
  m='1693900'>it,</span> <span m='1694310'>there's</span> <span
  m='1694620'>the</span> <span m='1694750'>equation.</span> <span
  m='1700810'>OK,</span> <span m='1701100'>now,</span> <span
  m='1702210'>we</span> <span m='1702500'>only</span> <span
  m='1702840'>have</span> <span m='1703300'>one</span> <span
  m='1703660'>method</span> <span m='1704910'>for</span> <span
  m='1705050'>solving these</span> <span m='1705610'>equations.</span> <span
  m='1708040'>So</span> <span m='1708370'>let's</span> <span
  m='1708910'>use</span> <span m='1709190'>it.</span> <span
  m='1709890'>It</span> <span m='1710050'>says</span> <span
  m='1710440'>to</span> <span m='1710550'>separate</span> <span
  m='1711080'>variables.</span> <span m='1711620'>So</span> <span
  m='1711770'>I</span> <span m='1711880'>write</span> <span m='1713590'>dy /
  y</span> <span m='1714060'>here,</span> <span m='1714770'>is equal to</span>
  <span m='1715930'>2</span> <span m='1716340'>dx</span> <span
  m='1717530'>/</span> <span m='1718070'>x.</span> <span
  m='1721000'>That's</span> <span m='1721300'>the</span> <span
  m='1721420'>basic</span> <span m='1721860'>separation.</span> <span
  m='1722530'>That's</span> <span m='1722760'>the</span> <span
  m='1722850'>procedure</span> <span m='1723370'>that</span> <span
  m='1723490'>we're</span> <span m='1723640'>always</span> <span
  m='1724000'>going</span> <span m='1724220'>to</span> <span
  m='1724350'>use.</span> <span m='1727990'>And</span> <span
  m='1728310'>now</span> <span m='1728550'>if</span> <span m='1728670'>I</span>
  <span m='1728870'>integrate</span> <span m='1729440'>that,</span> <span
  m='1732340'>I</span> <span m='1732470'>find</span> <span
  m='1734640'>that</span> <span m='1737340'>on</span> <span
  m='1737570'>the</span> <span m='1737640'>right-hand</span> <span
  m='1738120'>side</span> <span m='1738500'>I</span> <span
  m='1738580'>have</span> <span m='1738830'>the</span> <span
  m='1738900'>logarithm</span> <span m='1739520'>of</span> <span
  m='1739580'>y.</span> <span m='1743250'>And on the left-hand--</span> <span
  m='1743440'>Sorry, on</span> <span m='1743550'>the</span> <span
  m='1743640'>left-hand</span> <span m='1745180'>side</span> <span
  m='1745380'>I</span> <span m='1745410'>have</span> <span
  m='1745540'>the</span> <span m='1745600'>logarithm</span> <span
  m='1745890'>of</span> <span m='1746040'>y.</span> <span m='1746590'>On</span>
  <span m='1746780'>the</span> <span m='1746850'>right-hand</span> <span
  m='1747330'>side,</span> <span m='1747840'>I</span> <span
  m='1748120'>have</span> <span m='1748720'>twice</span> <span
  m='1749590'>the</span> <span m='1749690'>logarithm</span> <span
  m='1750500'>of</span> <span m='1750780'>x,</span> <span
  m='1752060'>plus</span> <span m='1752240'>a</span> <span
  m='1752310'>constant.</span> <span m='1760150'>So</span> <span
  m='1760280'>let's</span> <span m='1760500'>see</span> <span
  m='1760630'>what</span> <span m='1760760'>happens</span> <span
  m='1762290'>to</span> <span m='1762420'>this</span> <span
  m='1762630'>example.</span> </p><p><span m='1767330'>This</span> <span
  m='1767520'>is</span> <span m='1767660'>an</span> <span
  m='1767740'>implicit</span> <span m='1768230'>equation,</span> <span
  m='1769190'>and</span> <span m='1769340'>of</span> <span
  m='1769490'>course</span> <span m='1769740'>we</span> <span
  m='1769850'>have</span> <span m='1769990'>the</span> <span
  m='1770060'>problems</span> <span m='1770360'>of</span> <span
  m='1770460'>the</span> <span m='1770520'>plus</span> <span
  m='1770810'>or</span> <span m='1770870'>minus</span> <span
  m='1771290'>signs,</span> <span m='1771730'>which</span> <span
  m='1771970'>I'm</span> <span m='1772060'>not</span> <span
  m='1772220'>going</span> <span m='1772400'>to</span> <span
  m='1772500'>worry</span> <span m='1772760'>about</span> <span
  m='1773650'>until</span> <span m='1773990'>later.</span> <span
  m='1778070'>So</span> <span m='1778300'>let's</span> <span
  m='1778500'>exponentiate</span> <span m='1779530'>and</span> <span
  m='1779660'>see</span> <span m='1779810'>what</span> <span
  m='1779940'>happens.</span> <span m='1780320'>We</span> <span
  m='1780420'>get</span> <span m='1781300'>e^(ln y)</span> <span
  m='1782750'>=</span> <span m='1783480'>e^(2 ln x + c).</span> <span
  m='1787340'>So,</span> <span m='1787580'>again,</span> <span
  m='1788680'>this</span> <span m='1788830'>is</span> <span m='1788950'>y</span>
  <span m='1789400'>on</span> <span m='1789590'>the</span> <span
  m='1789670'>left-hand</span> <span m='1790150'>side.</span> <span
  m='1791940'>And</span> <span m='1792240'>on</span> <span
  m='1792340'>the</span> <span m='1792400'>right-hand</span> <span
  m='1792950'>side,</span> <span m='1793270'>if</span> <span
  m='1793350'>you</span> <span m='1793440'>think</span> <span
  m='1793640'>about</span> <span m='1793930'>it</span> <span
  m='1794010'>for</span> <span m='1794220'>a</span> <span
  m='1794280'>second,</span> <span m='1795110'>it's</span> <span
  m='1795530'>(e^(ln x))^2.</span> <span m='1799050'>Which</span> <span
  m='1799300'>is</span> <span m='1799780'>x^2.</span> <span
  m='1800370'>So</span> <span m='1800500'>this is</span> <span
  m='1801030'>x^2,</span> <span m='1801490'>and</span> <span
  m='1801620'>then</span> <span m='1801710'>there's</span> <span
  m='1801860'>an</span> <span m='1801970'>e^c.</span> <span
  m='1802680'>So</span> <span m='1802820'>that's</span> <span
  m='1803000'>another</span> <span m='1803220'>one</span> <span
  m='1803350'>of</span> <span m='1803410'>these</span> <span
  m='1803650'>A</span> <span m='1804560'>factors</span> <span
  m='1805150'>here.</span> <span m='1806390'>A</span> <span m='1806680'>=</span>
  <span m='1807760'>e^c.</span> <span m='1813240'>So</span> <span
  m='1813490'>the</span> <span m='1813790'>answer</span> <span
  m='1815890'>is,</span> <span m='1816940'>well,</span> <span
  m='1817220'>I'll</span> <span m='1817320'>draw</span> <span
  m='1817580'>the</span> <span m='1817670'>picture.</span> <span
  m='1820160'>And</span> <span m='1820440'>I'm</span> <span m='1820540'>going
  to</span> <span m='1820870'>cheat</span> <span m='1821240'>as</span> <span
  m='1821380'>I</span> <span m='1821480'>did</span> <span
  m='1821720'>before.</span> <span m='1822530'>We</span> <span
  m='1822760'>skipped</span> <span m='1823300'>the</span> <span
  m='1823380'>case</span> <span m='1823850'>y</span> <span
  m='1824160'>negative.</span> <span m='1824550'>We</span> <span
  m='1824660'>really</span> <span m='1824960'>only</span> <span
  m='1825220'>did</span> <span m='1825390'>the</span> <span
  m='1825480'>case</span> <span m='1826050'>y</span> <span
  m='1826380'>positive,</span> <span m='1827460'>so</span> <span
  m='1827740'>far.</span> <span m='1830300'>But</span> <span
  m='1830500'>if</span> <span m='1830600'>you</span> <span
  m='1830690'>think</span> <span m='1830910'>about</span> <span
  m='1831180'>it</span> <span m='1831260'>for</span> <span m='1831420'>a</span>
  <span m='1831480'>second,</span> <span m='1831860'>and</span> <span
  m='1831910'>we'll</span> <span m='1832090'>check</span> <span
  m='1832410'>it</span> <span m='1832500'>in</span> <span m='1832590'>a</span>
  <span m='1832660'>second,</span> <span m='1833290'>you're</span> <span
  m='1833490'>going to</span> <span m='1833660'>get</span> <span m='1834390'>all
  of</span> <span m='1834720'>these</span> <span m='1835380'>parabolas</span>
  <span m='1836040'>here.</span> <span m='1836390'>So</span> <span
  m='1837530'>the</span> <span m='1837660'>solution</span> <span
  m='1838550'>is</span> <span m='1838750'>this</span> <span
  m='1838930'>family</span> <span m='1839530'>of</span> <span
  m='1839600'>functions.</span> <span m='1840970'>And</span> <span
  m='1841230'>they</span> <span m='1841310'>can</span> <span
  m='1841490'>be</span> <span m='1842370'>bending</span> <span
  m='1842710'>down.</span> <span m='1844330'>As</span> <span
  m='1844490'>well</span> <span m='1844700'>as</span> <span
  m='1844850'>up.</span> <span m='1845660'>So</span> <span
  m='1845880'>these</span> <span m='1846130'>are</span> <span
  m='1846190'>the</span> <span m='1846300'>solutions</span> <span
  m='1847000'>to</span> <span m='1847110'>this</span> <span
  m='1847300'>equation.</span> <span m='1848140'>Every</span> <span
  m='1848510'>single</span> <span m='1848800'>one</span> <span
  m='1848950'>of</span> <span m='1849030'>these</span> <span
  m='1849250'>curves</span> <span m='1849740'>has</span> <span
  m='1849930'>the</span> <span m='1850010'>property</span> <span
  m='1850410'>that if</span> <span m='1850530'>you</span> <span
  m='1850620'>pick</span> <span m='1850810'>a</span> <span
  m='1850870'>point</span> <span m='1851280'>on</span> <span
  m='1851480'>it,</span> <span m='1851980'>the</span> <span
  m='1852110'>tangent</span> <span m='1852570'>line</span> <span
  m='1852750'>has</span> <span m='1852950'>twice</span> <span
  m='1853300'>the</span> <span m='1853380'>slope</span> <span m='1854180'>of the
  ray</span> <span m='1854500'>to</span> <span m='1854650'>the</span> <span
  m='1854790'>origin.</span> </p><p><span m='1858050'>And</span> <span
  m='1859210'>the</span> <span m='1859360'>formula,</span> <span m='1859760'>if
  you</span> <span m='1859860'>like,</span> <span m='1860210'>of</span> <span
  m='1860360'>the</span> <span m='1860440'>general</span> <span
  m='1860840'>solution is</span> <span m='1861370'>y</span> <span
  m='1861605'>=</span> <span m='1861840'>ax^2,</span> <span m='1863000'>a</span>
  <span m='1863470'>is</span> <span m='1865240'>any</span> <span
  m='1865460'>constant.</span> <span m='1868970'>Question?</span> </p><p><span
  m='1869460'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1881940'>PROFESSOR:
  Yeah.</span> <span m='1882510'>So</span> <span m='1883040'>again</span> <span
  m='1883780'>-</span> <span m='1885340'>so</span> <span
  m='1885540'>first</span> <span m='1885860'>of</span> <span
  m='1885960'>all,</span> <span m='1888210'>so</span> <span
  m='1888780'>there</span> <span m='1888960'>are two</span> <span
  m='1889180'>approaches to this.</span> <span m='1890110'>One is</span> <span
  m='1890750'>to</span> <span m='1890880'>check</span> <span
  m='1891320'>it,</span> <span m='1891570'>and</span> <span
  m='1891710'>make</span> <span m='1891870'>sure</span> <span
  m='1892050'>that</span> <span m='1892160'>it's</span> <span
  m='1892280'>right.</span> <span m='1892900'>When</span> <span
  m='1893110'>a</span> <span m='1893170'>formula</span> <span
  m='1893570'>works</span> <span m='1893820'>for</span> <span
  m='1894180'>some</span> <span m='1894460'>family of</span> <span
  m='1894860'>values,</span> <span m='1895140'>sometimes</span> <span
  m='1895450'>it</span> <span m='1895530'>works</span> <span
  m='1895750'>for</span> <span m='1895900'>others.</span> <span
  m='1896740'>But</span> <span m='1896960'>another</span> <span
  m='1897590'>one</span> <span m='1897780'>is</span> <span m='1897900'>to</span>
  <span m='1897980'>realize</span> <span m='1898380'>that</span> <span
  m='1898580'>these</span> <span m='1898780'>things</span> <span
  m='1898980'>will</span> <span m='1899200'>usually</span> <span
  m='1899650'>work</span> <span m='1899890'>out</span> <span m='1900220'>this
  way.</span> <span m='1900970'>Because</span> <span m='1901530'>in</span> <span
  m='1901720'>this</span> <span m='1901980'>argument</span> <span
  m='1902430'>here,</span> <span m='1902640'>I</span> <span
  m='1902780'>allow</span> <span m='1903050'>the</span> <span
  m='1903190'>absolute</span> <span m='1903610'>value.</span> <span
  m='1905870'>And</span> <span m='1906010'>that</span> <span
  m='1906270'>would</span> <span m='1906400'>have</span> <span
  m='1906500'>been</span> <span m='1906610'>a</span> <span
  m='1906650'>perfectly</span> <span m='1907100'>legal</span> <span
  m='1907360'>thing</span> <span m='1907530'>for</span> <span
  m='1907650'>me</span> <span m='1907750'>to</span> <span m='1907850'>do.</span>
  <span m='1907970'>I could</span> <span m='1908130'>have</span> <span
  m='1908300'>put</span> <span m='1908420'>in</span> <span
  m='1908650'>absolute</span> <span m='1908970'>values</span> <span
  m='1909480'>here.</span> <span m='1911220'>In</span> <span
  m='1911360'>which</span> <span m='1911580'>case,</span> <span
  m='1912020'>I</span> <span m='1912090'>would've</span> <span
  m='1912360'>gotten</span> <span m='1912720'>that</span> <span
  m='1912860'>the</span> <span m='1912990'>absolute</span> <span
  m='1913360'>value</span> <span m='1915240'>of</span> <span
  m='1915390'>this</span> <span m='1915690'>was</span> <span
  m='1915870'>equal</span> <span m='1916180'>to</span> <span
  m='1916260'>that.</span> <span m='1916890'>And</span> <span
  m='1917200'>now</span> <span m='1917340'>you</span> <span
  m='1917480'>see</span> <span m='1917650'>I've</span> <span
  m='1917780'>covered</span> <span m='1918160'>the</span> <span
  m='1918260'>plus</span> <span m='1918590'>and</span> <span
  m='1918700'>minus</span> <span m='1919100'>cases.</span> <span
  m='1922370'>So</span> <span m='1922570'>it's</span> <span
  m='1922960'>that</span> <span m='1923180'>same</span> <span
  m='1923530'>idea.</span> <span m='1923880'>This</span> <span
  m='1924760'>implies</span> <span m='1925600'>that</span> <span m='1925730'>y
  is</span> <span m='1926640'>equal</span> <span m='1927000'>to</span> <span
  m='1927670'>either</span> <span m='1928400'>Ax^2</span> <span
  m='1929110'>or</span> <span m='1930550'>-Ax^2,</span> <span
  m='1931180'>depending</span> <span m='1931580'>on</span> <span
  m='1932280'>which</span> <span m='1932500'>sign</span> <span
  m='1932750'>you</span> <span m='1932860'>pick.</span> <span
  m='1934100'>So</span> <span m='1934240'>that</span> <span
  m='1934430'>allows</span> <span m='1934820'>me</span> <span
  m='1935020'>for</span> <span m='1935160'>the</span> <span
  m='1935260'>curves</span> <span m='1935630'>above</span> <span
  m='1935940'>and</span> <span m='1936070'>curves below.</span> <span
  m='1941210'>Because</span> <span m='1942380'>it's</span> <span
  m='1942520'>really</span> <span m='1942890'>true</span> <span
  m='1943170'>that</span> <span m='1943300'>the antiderivative</span> <span
  m='1944320'>here</span> <span m='1944780'>is</span> <span
  m='1945270'>this</span> <span m='1945470'>function.</span> <span
  m='1946240'>It's</span> <span m='1946470'>defined</span> <span
  m='1946970'>for</span> <span m='1947080'>y</span> <span
  m='1947360'>negative.</span> <span m='1948820'>So</span> <span
  m='1948950'>let's</span> <span m='1949180'>just</span> <span
  m='1949420'>double-check.</span> </p><p><span m='1953840'>In</span> <span
  m='1953990'>this</span> <span m='1954240'>case,</span> <span
  m='1955070'>what's</span> <span m='1955380'>happening,</span> <span
  m='1955860'>we</span> <span m='1955980'>have</span> <span m='1956940'>y</span>
  <span m='1957250'>=</span> <span m='1957490'>ax^2</span> <span
  m='1958760'>and</span> <span m='1959000'>we</span> <span m='1959090'>want
  to</span> <span m='1959830'>compute</span> <span m='1960870'>dy/dx</span>
  <span m='1962710'>to</span> <span m='1962830'>make</span> <span
  m='1963000'>sure</span> <span m='1963210'>that</span> <span
  m='1963330'>it</span> <span m='1963450'>satisfies</span> <span
  m='1964080'>the</span> <span m='1964180'>equation that</span> <span
  m='1964640'>I</span> <span m='1964760'>started</span> <span
  m='1965170'>out</span> <span m='1965440'>with.</span> <span
  m='1966040'>And</span> <span m='1966290'>what</span> <span
  m='1966400'>I</span> <span m='1966460'>see</span> <span
  m='1966740'>here</span> <span m='1966940'>is</span> <span
  m='1967090'>that</span> <span m='1967220'>this</span> <span
  m='1967380'>is</span> <span m='1967540'>2ax.</span> <span
  m='1970890'>And</span> <span m='1971050'>now</span> <span
  m='1971140'>I'm</span> <span m='1971240'>going to</span> <span
  m='1971430'>write</span> <span m='1971730'>this</span> <span
  m='1972030'>in</span> <span m='1972160'>a</span> <span
  m='1972250'>suggestive</span> <span m='1972890'>way.</span> <span
  m='1973370'>I'm</span> <span m='1973460'>going to</span> <span
  m='1973610'>write</span> <span m='1973820'>it</span> <span
  m='1973920'>as</span> <span m='1974140'>2ax^2</span> <span
  m='1975490'>/</span> <span m='1975950'>x.</span> <span m='1980330'>And,</span>
  <span m='1980620'>sure</span> <span m='1980870'>enough,</span> <span
  m='1981780'>this</span> <span m='1981980'>is</span> <span
  m='1982180'>2y</span> <span m='1983270'>/</span> <span m='1983630'>x.</span>
  <span m='1986610'>It</span> <span m='1986920'>does</span> <span
  m='1987170'>not</span> <span m='1987560'>matter</span> <span
  m='1987950'>whether</span> <span m='1988270'>a--</span> <span
  m='1988650'>it</span> <span m='1988810'>works</span> <span
  m='1991490'>for</span> <span m='1992900'>a</span> <span
  m='1993090'>positive,</span> <span m='1994310'>a</span> <span
  m='1994520'>negative,</span> <span m='1995760'>a equals</span> <span
  m='1996220'>0.</span> <span m='1997370'>It's</span> <span
  m='1997540'>OK.</span> <span m='2004180'>Again,</span> <span
  m='2005510'>we</span> <span m='2005680'>didn't</span> <span
  m='2006000'>pick</span> <span m='2006240'>up</span> <span
  m='2006530'>by</span> <span m='2006670'>this</span> <span
  m='2006890'>method</span> <span m='2007470'>the</span> <span
  m='2007690'>a</span> <span m='2008000'>=</span> <span m='2008190'>0</span>
  <span m='2008550'>case.</span> <span m='2009770'>And</span> <span
  m='2010050'>that's</span> <span m='2010270'>not</span> <span
  m='2010500'>surprising</span> <span m='2011010'>because</span> <span
  m='2011200'>we</span> <span m='2011300'>divided</span> <span
  m='2011660'>by</span> <span m='2011800'>y.</span> </p><p><span
  m='2015350'>There's</span> <span m='2015570'>another</span> <span
  m='2017060'>thing</span> <span m='2017410'>to</span> <span
  m='2017540'>watch</span> <span m='2017880'>out</span> <span
  m='2018000'>about,</span> <span m='2018360'>about</span> <span
  m='2018610'>this</span> <span m='2018780'>example.</span> <span
  m='2019660'>So</span> <span m='2019890'>there's</span> <span
  m='2020080'>another</span> <span m='2020390'>warning.</span> <span
  m='2021990'>Which</span> <span m='2022540'>I</span> <span
  m='2022670'>have</span> <span m='2022930'>to</span> <span
  m='2023670'>give</span> <span m='2023910'>you.</span> <span
  m='2024910'>And</span> <span m='2025180'>this</span> <span
  m='2025310'>is</span> <span m='2025430'>a</span> <span
  m='2025510'>subtlety</span> <span m='2026230'>which</span> <span
  m='2026560'>you</span> <span m='2026650'>definitely</span> <span
  m='2027130'>won't</span> <span m='2027330'>get</span> <span
  m='2027520'>to</span> <span m='2028460'>in</span> <span m='2028960'>any</span>
  <span m='2029170'>detail</span> <span m='2029700'>until</span> <span
  m='2029970'>you</span> <span m='2030090'>get</span> <span
  m='2030280'>to</span> <span m='2031320'>a</span> <span
  m='2031390'>higher</span> <span m='2031660'>level</span> <span
  m='2032470'>ordinary</span> <span m='2032810'>differential</span> <span
  m='2033270'>equations</span> <span m='2033730'>course,</span> <span
  m='2034070'>but</span> <span m='2034180'>I</span> <span m='2034220'>do</span>
  <span m='2034380'>want to</span> <span m='2034580'>warn</span> <span
  m='2034890'>you</span> <span m='2035000'>about</span> <span
  m='2035320'>it</span> <span m='2035880'>right</span> <span
  m='2036140'>now.</span> <span m='2036980'>Which</span> <span
  m='2037480'>is</span> <span m='2038180'>that</span> <span
  m='2039370'>if</span> <span m='2039530'>you</span> <span
  m='2039630'>look</span> <span m='2039820'>at</span> <span
  m='2039900'>the</span> <span m='2040060'>equation,</span> <span
  m='2045310'>you</span> <span m='2045770'>need</span> <span
  m='2046070'>to</span> <span m='2046170'>watch</span> <span
  m='2046550'>out</span> <span m='2046850'>that</span> <span
  m='2046970'>it's</span> <span m='2047480'>undefined</span> <span
  m='2050630'>at x</span> <span m='2051400'>=</span> <span m='2051770'>0.</span>
  <span m='2054100'>It's</span> <span m='2054390'>undefined</span> <span
  m='2054700'>at</span> <span m='2055040'>x =</span> <span m='2055280'>0.</span>
  <span m='2055700'>We</span> <span m='2055790'>also</span> <span
  m='2056050'>divided</span> <span m='2056430'>by</span> <span
  m='2057000'>x,</span> <span m='2057770'>and</span> <span m='2058020'>x</span>
  <span m='2058870'>is</span> <span m='2059050'>also</span> <span
  m='2059410'>a</span> <span m='2059490'>problem.</span> <span
  m='2060350'>Now,</span> <span m='2060640'>that</span> <span
  m='2060990'>actually</span> <span m='2062450'>has</span> <span
  m='2063080'>an</span> <span m='2063400'>important</span> <span
  m='2063930'>consequence.</span> <span m='2064690'>Which</span> <span
  m='2064910'>is</span> <span m='2065040'>that,</span> <span
  m='2065210'>strangely,</span> <span m='2066390'>knowing</span> <span
  m='2066840'>the</span> <span m='2066930'>value</span> <span
  m='2067390'>here</span> <span m='2067820'>and</span> <span
  m='2067950'>knowing</span> <span m='2068140'>the</span> <span
  m='2068200'>rate</span> <span m='2068350'>of</span> <span
  m='2068420'>change</span> <span m='2068720'>doesn't</span> <span
  m='2069110'>specify</span> <span m='2069770'>this</span> <span
  m='2069950'>function.</span> <span m='2071040'>This</span> <span
  m='2071200'>is</span> <span m='2071340'>bad.</span> <span
  m='2073180'>And</span> <span m='2073340'>it</span> <span
  m='2073670'>violates</span> <span m='2074320'>one</span> <span
  m='2074470'>of</span> <span m='2074550'>our</span> <span
  m='2075050'>pieces</span> <span m='2075380'>of</span> <span
  m='2075460'>intuition.</span> <span m='2076160'>And</span> <span
  m='2076410'>what's</span> <span m='2076620'>going</span> <span
  m='2076880'>wrong</span> <span m='2077310'>is</span> <span
  m='2077890'>that</span> <span m='2078060'>the</span> <span
  m='2078140'>rate</span> <span m='2078320'>of</span> <span
  m='2078390'>change</span> <span m='2078720'>was</span> <span
  m='2079340'>not</span> <span m='2079770'>specified.</span> <span
  m='2080600'>It's</span> <span m='2080800'>undefined</span> <span
  m='2081240'>at</span> <span m='2081320'>x =</span> <span m='2081730'>0.</span>
  <span m='2083560'>So</span> <span m='2083740'>there's</span> <span
  m='2083870'>a</span> <span m='2083940'>problem</span> <span
  m='2084420'>here,</span> <span m='2084690'>and</span> <span
  m='2084800'>in</span> <span m='2084910'>fact</span> <span
  m='2085260'>if</span> <span m='2085360'>you</span> <span
  m='2085540'>think</span> <span m='2085860'>carefully</span> <span
  m='2086410'>about</span> <span m='2086690'>what</span> <span
  m='2086870'>this</span> <span m='2087030'>function</span> <span
  m='2087420'>is</span> <span m='2087550'>doing,</span> <span
  m='2088220'>it</span> <span m='2088520'>could</span> <span
  m='2088710'>come</span> <span m='2089040'>in</span> <span
  m='2089680'>on</span> <span m='2089870'>one</span> <span
  m='2090160'>branch</span> <span m='2091970'>and</span> <span
  m='2092230'>leave</span> <span m='2092800'>on</span> <span
  m='2092930'>a</span> <span m='2092980'>completely</span> <span
  m='2093510'>different</span> <span m='2093900'>branch.</span> <span
  m='2096050'>It</span> <span m='2096200'>doesn't</span> <span
  m='2096490'>really</span> <span m='2096980'>have</span> <span
  m='2097200'>to</span> <span m='2097370'>obey</span> <span
  m='2097690'>any</span> <span m='2097900'>rule</span> <span m='2098260'>across
  x</span> <span m='2099040'>=</span> <span m='2099370'>0.</span> </p><p><span
  m='2101920'>So</span> <span m='2102150'>you</span> <span
  m='2102420'>should</span> <span m='2102610'>really</span> <span
  m='2102840'>be</span> <span m='2102960'>thinking</span> <span m='2103230'>of
  these</span> <span m='2103350'>things</span> <span m='2103540'>as</span> <span
  m='2103770'>rays</span> <span m='2104340'>emanating</span> <span
  m='2104820'>from</span> <span m='2104980'>the</span> <span
  m='2105480'>origin.</span> <span m='2105860'>The</span> <span
  m='2105950'>origin</span> <span m='2106280'>was</span> <span
  m='2106410'>a</span> <span m='2106490'>special</span> <span
  m='2106990'>point</span> <span m='2107780'>in</span> <span
  m='2108010'>the</span> <span m='2108080'>whole</span> <span
  m='2108270'>geometric</span> <span m='2108850'>problem.</span> <span
  m='2110140'>Rather</span> <span m='2110440'>than</span> <span
  m='2110590'>as</span> <span m='2110740'>being</span> <span
  m='2110970'>complete</span> <span m='2111460'>parabolas.</span> <span
  m='2115080'>But</span> <span m='2115460'>that's</span> <span
  m='2115650'>a</span> <span m='2115710'>very</span> <span
  m='2115960'>subtle</span> <span m='2116250'>point.</span> <span
  m='2116460'>I</span> <span m='2116920'>don't</span> <span
  m='2117180'>expect</span> <span m='2117610'>you</span> <span
  m='2117750'>to</span> <span m='2121140'>be</span> <span
  m='2121290'>able</span> <span m='2121440'>to</span> <span
  m='2122020'>say</span> <span m='2122350'>anything</span> <span
  m='2122670'>about</span> <span m='2123040'>it.</span> <span
  m='2123270'>But</span> <span m='2123540'>I</span> <span
  m='2123610'>just</span> <span m='2123860'>want to</span> <span
  m='2124030'>warn</span> <span m='2124360'>you</span> <span
  m='2124530'>that</span> <span m='2125180'>it</span> <span
  m='2125270'>really</span> <span m='2125520'>is</span> <span
  m='2125690'>true</span> <span m='2125920'>that</span> <span
  m='2126230'>when</span> <span m='2126440'>x =</span> <span
  m='2126910'>0</span> <span m='2127130'>there's</span> <span
  m='2127290'>a</span> <span m='2127350'>problem</span> <span
  m='2129690'>for</span> <span m='2129820'>this</span> <span
  m='2130160'>differential</span> <span m='2130640'>equation.</span>
  </p><p><span m='2133810'>So</span> <span m='2134170'>now,</span> <span
  m='2137570'>let</span> <span m='2137760'>me</span> <span
  m='2140110'>say</span> <span m='2141700'>our</span> <span
  m='2144360'>next</span> <span m='2144670'>problem.</span> <span
  m='2146570'>Next</span> <span m='2146830'>example.</span> <span
  m='2147690'>Just</span> <span m='2148600'>another</span> <span
  m='2148890'>geometry</span> <span m='2149500'>question.</span> <span
  m='2152370'>So</span> <span m='2152670'>here's</span> <span
  m='2152940'>Example</span> <span m='2153400'>4.</span> <span
  m='2161430'>I'm</span> <span m='2161580'>just</span> <span
  m='2161790'>going</span> <span m='2161950'>to</span> <span
  m='2162010'>use</span> <span m='2162250'>the</span> <span
  m='2162330'>example</span> <span m='2162680'>that</span> <span
  m='2162740'>we've</span> <span m='2162900'>already</span> <span
  m='2163190'>got.</span> <span m='2164430'>Because</span> <span
  m='2164880'>there's</span> <span m='2165960'>only</span> <span
  m='2166430'>so</span> <span m='2166600'>much</span> <span
  m='2166860'>time</span> <span m='2167180'>left</span> <span
  m='2167460'>here.</span> <span m='2169090'>The</span> <span
  m='2169300'>fourth</span> <span m='2169640'>example</span> <span
  m='2171390'>is</span> <span m='2171890'>to</span> <span
  m='2172490'>take</span> <span m='2173350'>the</span> <span
  m='2176520'>curves</span> <span m='2178490'>perpendicular</span> <span
  m='2183480'>to</span> <span m='2184630'>the parabolas.</span> <span
  m='2191610'>This</span> <span m='2191760'>is</span> <span
  m='2191880'>another</span> <span m='2192150'>geometry</span> <span
  m='2192690'>problem.</span> <span m='2193550'>And</span> <span
  m='2193780'>by</span> <span m='2193930'>specifying</span> <span
  m='2194480'>that the</span> <span m='2194610'>the</span> <span
  m='2194730'>curves are</span> <span m='2195040'>perpendicular</span> <span
  m='2195790'>to</span> <span m='2195920'>these</span> <span
  m='2196120'>parabolas,</span> <span m='2197020'>I'm</span> <span
  m='2197200'>telling</span> <span m='2197500'>you</span> <span
  m='2197560'>what</span> <span m='2197730'>their</span> <span
  m='2197850'>slope</span> <span m='2198360'>is.</span> <span
  m='2204500'>So</span> <span m='2204680'>let's</span> <span
  m='2204920'>think</span> <span m='2205150'>about</span> <span
  m='2205510'>that.</span> <span m='2207000'>What's</span> <span
  m='2207360'>the</span> <span m='2207450'>new</span> <span
  m='2207600'>equation?</span> <span m='2208900'>The</span> <span
  m='2211750'>new</span> <span m='2211900'>diff.</span> <span
  m='2212210'>eq.</span> <span m='2215220'>is</span> <span
  m='2215420'>the</span> <span m='2215540'>following.</span> <span
  m='2216270'>It's</span> <span m='2216790'>that the</span> <span
  m='2217110'>slope is</span> <span m='2219150'>equal</span> <span
  m='2219480'>to</span> <span m='2219680'>the</span> <span
  m='2219930'>negative</span> <span m='2220670'>reciprocal</span> <span
  m='2221550'>of</span> <span m='2221670'>the</span> <span
  m='2221740'>slope</span> <span m='2222110'>of</span> <span
  m='2222200'>the</span> <span m='2222300'>tangent</span> <span
  m='2222750'>line.</span> <span m='2225610'>Of</span> <span
  m='2225810'>tangent</span> <span m='2228420'>to</span> <span
  m='2228580'>the</span> <span m='2228680'>parabola.</span> <span
  m='2234850'>So</span> <span m='2235010'>that's</span> <span
  m='2235320'>the</span> <span m='2236260'>equation.</span> <span
  m='2236800'>That's</span> <span m='2237020'>actually</span> <span
  m='2237380'>fairly</span> <span m='2237800'>easy</span> <span
  m='2238060'>to</span> <span m='2238200'>write</span> <span
  m='2238440'>down,</span> <span m='2239270'>because</span> <span
  m='2239890'>it's</span> <span m='2240110'>-1</span> <span
  m='2240550'>divided</span> <span m='2240830'>by</span> <span m='2242490'>2
  y/x.</span> <span m='2246570'>That's</span> <span m='2246960'>the</span> <span
  m='2247530'>slope</span> <span m='2247890'>of</span> <span
  m='2248090'>the</span> <span m='2249210'>parabola.</span> <span
  m='2252620'>2y/x.</span> <span m='2256860'>So</span> <span
  m='2257000'>let's</span> <span m='2257410'>rewrite</span> <span
  m='2257920'>that.</span> <span m='2258300'>Now,</span> <span
  m='2258850'>this</span> <span m='2259150'>is--</span> <span m='2259600'>the
  x</span> <span m='2259760'>goes in</span> <span m='2260090'>the</span> <span
  m='2260150'>numerator,</span> <span m='2260760'>so</span> <span
  m='2261030'>it's</span> <span m='2262920'>-x/(2y).</span> </p><p><span
  m='2272160'>And</span> <span m='2272330'>now</span> <span m='2272500'>I</span>
  <span m='2272550'>want</span> <span m='2272740'>to</span> <span
  m='2272800'>solve</span> <span m='2273100'>this</span> <span
  m='2273300'>one.</span> <span m='2277990'>Well,</span> <span
  m='2278650'>again,</span> <span m='2279870'>there's</span> <span
  m='2280030'>only</span> <span m='2280250'>one</span> <span
  m='2280490'>technique.</span> <span m='2281780'>Which</span> <span
  m='2282070'>is</span> <span m='2282170'>we're</span> <span
  m='2282260'>going</span> <span m='2282450'>to</span> <span
  m='2282520'>separate</span> <span m='2283090'>variables.</span> <span
  m='2290240'>And</span> <span m='2290620'>we</span> <span
  m='2290880'>separate</span> <span m='2291340'>the</span> <span
  m='2291430'>differentials</span> <span m='2291890'>here, so</span> <span
  m='2292130'>we</span> <span m='2292270'>get</span> <span m='2292500'>2y</span>
  <span m='2293110'>dy</span> <span m='2294730'>=</span> <span
  m='2296160'>-x</span> <span m='2296880'>dx.</span> <span
  m='2298330'>That's</span> <span m='2298620'>just</span> <span
  m='2298810'>looking</span> <span m='2299080'>at</span> <span
  m='2299170'>the</span> <span m='2299260'>equation</span> <span
  m='2299750'>that</span> <span m='2299870'>I</span> <span
  m='2299930'>have,</span> <span m='2300200'>which</span> <span
  m='2300350'>is</span> <span m='2300440'>right</span> <span
  m='2300640'>over</span> <span m='2300810'>here.</span> <span
  m='2302640'>dy/dx</span> <span m='2303250'>=</span> <span
  m='2304470'>-x/(2y),</span> <span m='2305570'>and</span> <span
  m='2305830'>cross-multiplying</span> <span m='2306750'>to</span> <span
  m='2306850'>get</span> <span m='2307040'>this.</span> <span
  m='2310760'>And</span> <span m='2310990'>now</span> <span m='2311270'>I</span>
  <span m='2311370'>can</span> <span m='2311510'>take</span> <span
  m='2311710'>the</span> <span m='2311950'>antiderivative.</span> <span
  m='2313100'>This</span> <span m='2313270'>is</span> <span
  m='2313380'>y^2.</span> <span m='2315850'>And the antiderivative</span> <span
  m='2316740'>over</span> <span m='2316960'>here</span> <span
  m='2317350'>is</span> <span m='2317860'>-x^2</span> <span m='2319170'>/</span>
  <span m='2319400'>2</span> <span m='2319620'>+</span> <span
  m='2320550'>c.</span> <span m='2324410'>And</span> <span
  m='2324710'>so,</span> <span m='2325700'>the</span> <span
  m='2325830'>solutions</span> <span m='2329030'>are</span> <span
  m='2330490'>x^2</span> <span m='2331770'>/</span> <span m='2331980'>2</span>
  <span m='2332820'>+</span> <span m='2333110'>y^2</span> <span m='2334360'>is
  equal to</span> <span m='2335390'>some</span> <span m='2336460'>c,</span>
  <span m='2337410'>some</span> <span m='2337690'>constant c.</span> <span
  m='2342600'>Now,</span> <span m='2342870'>this</span> <span
  m='2343300'>time,</span> <span m='2344200'>things</span> <span
  m='2344890'>don't</span> <span m='2345250'>work</span> <span
  m='2345850'>the</span> <span m='2346140'>same.</span> <span
  m='2346460'>And</span> <span m='2346970'>you</span> <span
  m='2347160'>can't</span> <span m='2347490'>expect</span> <span
  m='2347860'>them</span> <span m='2347930'>always</span> <span
  m='2348190'>to</span> <span m='2348290'>work</span> <span
  m='2348430'>the</span> <span m='2348530'>same.</span> <span
  m='2349600'>I</span> <span m='2349790'>claimed</span> <span
  m='2350390'>that</span> <span m='2350620'>this</span> <span
  m='2350810'>must</span> <span m='2351090'>be</span> <span
  m='2351210'>true.</span> <span m='2351550'>But</span> <span
  m='2352140'>unfortunately</span> <span m='2352810'>I</span> <span
  m='2352920'>cannot</span> <span m='2353400'>insist that</span> <span
  m='2354140'>every</span> <span m='2354470'>c</span> <span
  m='2354880'>will</span> <span m='2355030'>work.</span> <span
  m='2356910'>As</span> <span m='2357110'>you can</span> <span
  m='2357630'>see</span> <span m='2358020'>here,</span> <span
  m='2358480'>only</span> <span m='2358870'>the</span> <span
  m='2359010'>positive</span> <span m='2359600'>numbers</span> <span
  m='2359880'>c</span> <span m='2361040'>can</span> <span
  m='2361270'>work</span> <span m='2362420'>here.</span> <span
  m='2364980'>So</span> <span m='2366110'>the</span> <span
  m='2366320'>picture</span> <span m='2366800'>is</span> <span
  m='2367060'>that</span> <span m='2367480'>something</span> <span
  m='2367960'>slightly</span> <span m='2368380'>different</span> <span
  m='2368720'>happened</span> <span m='2369080'>here.</span> <span
  m='2369530'>And</span> <span m='2369940'>you</span> <span
  m='2370040'>have</span> <span m='2370250'>to</span> <span
  m='2370340'>live</span> <span m='2370500'>with</span> <span
  m='2370700'>this.</span> <span m='2371310'>Is</span> <span
  m='2371480'>that</span> <span m='2371570'>sometimes</span> <span
  m='2372130'>not</span> <span m='2372400'>all</span> <span
  m='2372560'>the</span> <span m='2372660'>constants</span> <span
  m='2373180'>will</span> <span m='2373300'>work.</span> <span
  m='2373570'>Because</span> <span m='2374230'>there's</span> <span
  m='2374460'>more</span> <span m='2374890'>to</span> <span
  m='2375000'>the</span> <span m='2375480'>problem</span> <span
  m='2375930'>than</span> <span m='2376060'>just</span> <span
  m='2376270'>the</span> <span m='2376510'>antidifferentiation.</span> <span
  m='2377880'>And</span> <span m='2378240'>here</span> <span
  m='2378430'>there</span> <span m='2378540'>are</span> <span
  m='2378610'>fewer</span> <span m='2379230'>answers</span> <span
  m='2379710'>rather</span> <span m='2380020'>than</span> <span
  m='2380140'>more</span> <span m='2380430'>answers.</span> <span m='2380870'>In
  the</span> <span m='2381140'>other</span> <span m='2381310'>case</span> <span
  m='2381630'>we</span> <span m='2381740'>had</span> <span m='2381900'>to</span>
  <span m='2382000'>add</span> <span m='2382280'>in some</span> <span
  m='2382750'>answers,</span> <span m='2383110'>here</span> <span
  m='2383250'>we</span> <span m='2383340'>have</span> <span
  m='2383490'>to</span> <span m='2383590'>take</span> <span
  m='2383830'>them</span> <span m='2383940'>away.</span> <span
  m='2385030'>Some</span> <span m='2385220'>of</span> <span
  m='2385280'>them</span> <span m='2385380'>don't</span> <span
  m='2385560'>make</span> <span m='2385740'>any</span> <span
  m='2385910'>sense.</span> <span m='2386890'>And</span> <span
  m='2387340'>the</span> <span m='2387430'>only</span> <span
  m='2387670'>ones</span> <span m='2387910'>we</span> <span
  m='2388040'>can</span> <span m='2388180'>get</span> <span
  m='2388370'>are</span> <span m='2388440'>the</span> <span
  m='2388530'>ones</span> <span m='2388830'>which</span> <span
  m='2389010'>are</span> <span m='2389080'>of</span> <span
  m='2389180'>this</span> <span m='2389360'>form,</span> <span
  m='2389760'>where</span> <span m='2389880'>this</span> <span
  m='2390060'>is,</span> <span m='2390180'>say,</span> <span
  m='2390410'>some</span> <span m='2390830'>radius</span> <span
  m='2391340'>squared.</span> <span m='2394030'>Well</span> <span
  m='2394300'>maybe</span> <span m='2394530'>I</span> <span
  m='2394570'>shouldn't</span> <span m='2394810'>call</span> <span
  m='2395040'>it a</span> <span m='2395100'>radius.</span> <span
  m='2395470'>I'll</span> <span m='2395560'>just</span> <span m='2395740'>call
  it a</span> <span m='2396030'>parameter,</span> <span m='2396730'>a^2.</span>
  <span m='2398800'>And</span> <span m='2399130'>these</span> <span
  m='2399410'>are</span> <span m='2399500'>of</span> <span
  m='2399610'>course</span> <span m='2399980'>ellipses.</span> <span
  m='2405940'>And</span> <span m='2406490'>you</span> <span
  m='2406680'>can</span> <span m='2406840'>see</span> <span
  m='2407260'>that</span> <span m='2407470'>the</span> <span
  m='2407630'>ellipses,</span> <span m='2409080'>the</span> <span
  m='2409270'>length</span> <span m='2409680'>here</span> <span
  m='2410190'>is</span> <span m='2411950'>the</span> <span
  m='2412090'>square</span> <span m='2412520'>root of</span> <span
  m='2412610'>2a</span> <span m='2413990'>and</span> <span
  m='2414780'>the</span> <span m='2415030'>semi-axis,</span> <span
  m='2415870'>vertical</span> <span m='2416190'>semi-axis,</span> <span
  m='2416780'>is</span> <span m='2417000'>a.</span> <span m='2418160'>So</span>
  <span m='2418390'>this</span> <span m='2418590'>is</span> <span
  m='2418710'>the</span> <span m='2418790'>kind</span> <span
  m='2419050'>of</span> <span m='2419110'>ellipse</span> <span
  m='2419560'>that</span> <span m='2419640'>we've</span> <span
  m='2419800'>got.</span> <span m='2420110'>And</span> <span
  m='2420430'>I</span> <span m='2420540'>draw</span> <span m='2421030'>it</span>
  <span m='2421950'>on</span> <span m='2422110'>the</span> <span
  m='2422440'>previous</span> <span m='2423030'>diagram,</span> <span
  m='2424140'>I</span> <span m='2424240'>think</span> <span
  m='2424470'>it's</span> <span m='2424840'>somewhat</span> <span
  m='2425270'>suggestive</span> <span m='2426950'>here.</span> <span
  m='2428100'>There,</span> <span m='2428650'>ellipses</span> <span
  m='2429380'>are</span> <span m='2429540'>kind</span> <span
  m='2429740'>of</span> <span m='2429810'>eggs.</span> <span m='2430280'>They're
  a</span> <span m='2430330'>little</span> <span m='2430540'>bit</span> <span
  m='2430660'>longer</span> <span m='2430980'>than</span> <span
  m='2431130'>they</span> <span m='2431240'>are</span> <span
  m='2431800'>high.</span> <span m='2432820'>And</span> <span
  m='2432930'>they</span> <span m='2433010'>go</span> <span
  m='2433130'>like</span> <span m='2433380'>this.</span> <span
  m='2437160'>And</span> <span m='2439080'>if</span> <span m='2439240'>I</span>
  <span m='2439330'>drew</span> <span m='2439560'>them</span> <span
  m='2440280'>pretty</span> <span m='2440450'>much</span> <span
  m='2440680'>right,</span> <span m='2440960'>they</span> <span
  m='2441050'>should</span> <span m='2441300'>be</span> <span
  m='2441400'>making</span> <span m='2441730'>right angles.</span> <span
  m='2443230'>At</span> <span m='2443360'>all of</span> <span
  m='2443540'>these</span> <span m='2443730'>places.</span> </p><p><span
  m='2449710'>OK,</span> <span m='2449950'>last</span> <span
  m='2450390'>little</span> <span m='2450610'>bit</span> <span
  m='2453030'>here.</span> <span m='2453530'>Again,</span> <span
  m='2454230'>you've</span> <span m='2454420'>got</span> <span
  m='2454580'>to</span> <span m='2454640'>be</span> <span
  m='2454720'>very</span> <span m='2455110'>careful</span> <span
  m='2455930'>with</span> <span m='2456160'>these</span> <span
  m='2456360'>solutions.</span> <span m='2457930'>And</span> <span
  m='2458060'>so</span> <span m='2458310'>there's</span> <span
  m='2458740'>a</span> <span m='2458940'>warning</span> <span
  m='2459370'>here</span> <span m='2459610'>too.</span> <span
  m='2466760'>So</span> <span m='2466970'>let's</span> <span
  m='2467220'>take</span> <span m='2467480'>a</span> <span
  m='2467530'>look</span> <span m='2467740'>at the--</span> <span
  m='2468280'>This</span> <span m='2468500'>is</span> <span
  m='2468600'>the</span> <span m='2468700'>implicit</span> <span
  m='2469850'>solution</span> <span m='2470290'>to</span> <span
  m='2470390'>the</span> <span m='2470470'>equation.</span> <span
  m='2470940'>And this</span> <span m='2471080'>is</span> <span
  m='2471180'>the</span> <span m='2471240'>one</span> <span
  m='2471360'>that</span> <span m='2471470'>tells</span> <span
  m='2471720'>us</span> <span m='2471850'>what</span> <span
  m='2472000'>the</span> <span m='2472090'>shape</span> <span
  m='2472500'>is.</span> <span m='2473090'>But</span> <span
  m='2473310'>we</span> <span m='2473430'>can</span> <span
  m='2473550'>also</span> <span m='2473850'>have</span> <span
  m='2474050'>the</span> <span m='2474170'>explicit</span> <span
  m='2474750'>solution.</span> <span m='2476350'>And</span> <span
  m='2476460'>if</span> <span m='2476570'>I</span> <span m='2476690'>solve
  for</span> <span m='2477620'>the explicit</span> <span
  m='2477720'>solution,</span> <span m='2478170'>it's</span> <span
  m='2478300'>y</span> <span m='2478690'>is</span> <span
  m='2480170'>equal</span> <span m='2480750'>to</span> <span
  m='2481050'>either</span> <span m='2481790'>plus</span> <span
  m='2482240'>square root of</span> <span m='2483130'>(a^2 - x^2 / 2),</span>
  <span m='2485400'>or</span> <span m='2486020'>y is</span> <span
  m='2486750'>equal</span> <span m='2487140'>to</span> <span m='2488310'>minus
  the square root</span> <span m='2490140'>of (a^2 - x^2 / 2).</span> <span
  m='2492080'>These</span> <span m='2492300'>are</span> <span
  m='2493310'>the</span> <span m='2493570'>explicit</span> <span
  m='2494050'>solutions.</span> <span m='2499770'>And</span> <span
  m='2500030'>now,</span> <span m='2500260'>we</span> <span
  m='2500530'>notice</span> <span m='2500880'>something</span> <span
  m='2501150'>that</span> <span m='2501240'>we</span> <span
  m='2501350'>should</span> <span m='2501540'>have</span> <span
  m='2501630'>noticed</span> <span m='2501950'>before.</span> <span
  m='2503850'>Which</span> <span m='2504320'>is</span> <span
  m='2504860'>that</span> <span m='2506470'>an</span> <span
  m='2506600'>ellipse</span> <span m='2507070'>is</span> <span
  m='2507240'>not</span> <span m='2507430'>a</span> <span
  m='2507470'>function.</span> <span m='2510490'>It's</span> <span
  m='2510990'>only</span> <span m='2511310'>the</span> <span
  m='2511400'>top</span> <span m='2511850'>half,</span> <span
  m='2512730'>if</span> <span m='2512920'>you</span> <span
  m='2513040'>like,</span> <span m='2514070'>that's</span> <span
  m='2514260'>giving</span> <span m='2514540'>you</span> <span
  m='2515290'>a</span> <span m='2515390'>solution</span> <span
  m='2515840'>to</span> <span m='2515950'>this</span> <span
  m='2516130'>equation.</span> <span m='2516610'>Or</span> <span
  m='2516860'>maybe</span> <span m='2517140'>the</span> <span
  m='2517250'>bottom</span> <span m='2517580'>half</span> <span
  m='2518230'>that's</span> <span m='2518410'>giving</span> <span
  m='2518660'>it</span> <span m='2518740'>the</span> <span
  m='2518850'>solution</span> <span m='2519270'>to the</span> <span
  m='2519340'>equation.</span> <span m='2520450'>So</span> <span
  m='2520590'>the</span> <span m='2521080'>one</span> <span
  m='2521280'>over</span> <span m='2521520'>here,</span> <span
  m='2522740'>this</span> <span m='2522970'>one</span> <span
  m='2523140'>is</span> <span m='2523230'>the</span> <span
  m='2523340'>top</span> <span m='2523720'>halves.</span> <span
  m='2527480'>And</span> <span m='2527650'>this</span> <span
  m='2527800'>one</span> <span m='2527980'>over</span> <span
  m='2528170'>here</span> <span m='2528490'>is</span> <span
  m='2528610'>the</span> <span m='2528690'>bottom</span> <span
  m='2529060'>halves.</span> </p><p><span m='2535270'>And</span> <span
  m='2535520'>there's</span> <span m='2535680'>something</span> <span
  m='2536160'>else</span> <span m='2536900'>that's</span> <span
  m='2537550'>interesting.</span> <span m='2538570'>Which</span> <span
  m='2538850'>is</span> <span m='2538970'>that</span> <span
  m='2539090'>we</span> <span m='2539250'>have</span> <span m='2539460'>a</span>
  <span m='2539530'>problem</span> <span m='2542520'>at</span> <span
  m='2544190'>y</span> <span m='2544490'>=</span> <span m='2544920'>0.</span>
  <span m='2546580'>y</span> <span m='2546840'>=</span> <span
  m='2547230'>0</span> <span m='2548560'>is</span> <span
  m='2549110'>where</span> <span m='2551050'>x</span> <span m='2551470'>=</span>
  <span m='2552390'>square root of</span> <span m='2552800'>2a.</span> <span
  m='2553550'>That's</span> <span m='2553800'>when</span> <span
  m='2553900'>we</span> <span m='2554000'>get</span> <span m='2554190'>to</span>
  <span m='2554280'>this</span> <span m='2554490'>end</span> <span
  m='2554840'>here.</span> <span m='2555960'>And</span> <span
  m='2556160'>what</span> <span m='2556270'>happens</span> <span
  m='2556610'>is</span> <span m='2556740'>the</span> <span
  m='2556790'>solution</span> <span m='2557140'>comes</span> <span
  m='2557320'>around</span> <span m='2557660'>and it</span> <span
  m='2557760'>stops.</span> <span m='2558800'>It</span> <span
  m='2558970'>has</span> <span m='2559140'>a</span> <span
  m='2559200'>vertical</span> <span m='2559620'>slope.</span> <span
  m='2564820'>Vertical</span> <span m='2565210'>slope.</span> <span
  m='2568910'>And</span> <span m='2569150'>the</span> <span
  m='2569210'>solution</span> <span m='2569680'>stops.</span> <span
  m='2576420'>But</span> <span m='2577150'>really,</span> <span
  m='2577500'>that's</span> <span m='2577930'>not</span> <span
  m='2578230'>so</span> <span m='2578860'>unreasonable.</span> <span
  m='2580020'>After</span> <span m='2580390'>all,</span> <span
  m='2580550'>look</span> <span m='2580770'>at</span> <span
  m='2580870'>the</span> <span m='2580980'>formula.</span> <span
  m='2581890'>There</span> <span m='2582040'>was</span> <span
  m='2582210'>a</span> <span m='2582270'>y</span> <span m='2582570'>in</span>
  <span m='2582680'>the</span> <span m='2582740'>denominator</span> <span
  m='2583430'>here.</span> <span m='2583660'>When</span> <span
  m='2583810'>y</span> <span m='2584010'>=</span> <span m='2584450'>0,</span>
  <span m='2584860'>the</span> <span m='2584990'>slope</span> <span
  m='2585310'>should</span> <span m='2585490'>be</span> <span
  m='2585620'>infinite.</span> <span m='2588500'>And</span> <span
  m='2588690'>so</span> <span m='2590690'>this</span> <span
  m='2590880'>equation</span> <span m='2591480'>is</span> <span
  m='2591740'>just</span> <span m='2591970'>giving us</span> <span
  m='2592530'>what</span> <span m='2592720'>it</span> <span
  m='2592900'>geometrically</span> <span m='2593710'>and</span> <span
  m='2593870'>intuitively</span> <span m='2594490'>should</span> <span
  m='2594750'>be</span> <span m='2594850'>giving</span> <span
  m='2595180'>us.</span> <span m='2595800'>At</span> <span
  m='2595960'>that</span> <span m='2596670'>stage.</span> <span
  m='2602790'>So</span> <span m='2603040'>that</span> <span
  m='2603500'>is</span> <span m='2604150'>the</span> <span
  m='2604370'>introduction</span> <span m='2605070'>to</span> <span
  m='2605540'>ordinary</span> <span m='2605910'>differential</span> <span
  m='2606330'>equations.</span> <span m='2606720'>Again,</span> <span
  m='2606930'>there's</span> <span m='2607080'>only</span> <span
  m='2607290'>one</span> <span m='2607590'>technique</span> <span
  m='2608740'>which</span> <span m='2609000'>is--</span> <span
  m='2610180'>We're</span> <span m='2610330'>not</span> <span
  m='2610510'>done</span> <span m='2610690'>yet,</span> <span
  m='2611290'>we</span> <span m='2611400'>have</span> <span m='2611550'>a</span>
  <span m='2611590'>whole</span> <span m='2611940'>four</span> <span
  m='2612290'>minutes</span> <span m='2612580'>left and</span> <span
  m='2612930'>we're</span> <span m='2613060'>going to</span> <span
  m='2613650'>review.</span> <span m='2614030'>Now,</span> <span
  m='2614180'>so</span> <span m='2614370'>fortunately,</span> <span
  m='2616580'>this</span> <span m='2616750'>review</span> <span
  m='2617030'>is</span> <span m='2617160'>very</span> <span
  m='2617400'>short.</span> <span m='2619220'>Fortunately</span> <span
  m='2619950'>for</span> <span m='2620150'>you,</span> <span
  m='2620930'>I</span> <span m='2621160'>handed</span> <span
  m='2621650'>out</span> <span m='2621890'>to</span> <span
  m='2622030'>you</span> <span m='2622170'>exactly</span> <span
  m='2622680'>what</span> <span m='2622930'>you're</span> <span
  m='2623060'>going to</span> <span m='2623200'>be</span> <span
  m='2623320'>covering</span> <span m='2623670'>on</span> <span
  m='2623800'>the</span> <span m='2623880'>test.</span> <span
  m='2624920'>And</span> <span m='2625790'>it's</span> <span
  m='2626160'>what's</span> <span m='2626600'>printed</span> <span
  m='2627000'>here</span> <span m='2627420'>but</span> <span
  m='2627680'>there's</span> <span m='2627880'>a</span> <span
  m='2627930'>whole</span> <span m='2628270'>two</span> <span
  m='2628440'>pages</span> <span m='2628890'>of</span> <span
  m='2628990'>discussion.</span> <span m='2631000'>And</span> <span
  m='2631180'>I</span> <span m='2631240'>want</span> <span m='2631520'>to</span>
  <span m='2631700'>give</span> <span m='2632050'>you</span> <span
  m='2636470'>very,</span> <span m='2636980'>very</span> <span
  m='2637310'>clear-cut</span> <span m='2639390'>instructions</span> <span
  m='2639860'>here.</span> <span m='2640000'>This</span> <span
  m='2640260'>is</span> <span m='2640400'>usually</span> <span
  m='2640900'>the</span> <span m='2640990'>hardest</span> <span
  m='2642710'>test</span> <span m='2643160'>of</span> <span
  m='2643280'>this</span> <span m='2643500'>course.</span> <span
  m='2644780'>People</span> <span m='2645110'>usually</span> <span
  m='2645520'>do</span> <span m='2645660'>terribly</span> <span
  m='2646490'>on</span> <span m='2646720'>it.</span> <span
  m='2647170'>And</span> <span m='2648740'>I'm</span> <span m='2649170'>going
  to</span> <span m='2649430'>try</span> <span m='2649740'>to</span> <span
  m='2649860'>stop</span> <span m='2650420'>that</span> <span
  m='2651840'>by</span> <span m='2651980'>making</span> <span
  m='2652440'>it</span> <span m='2653350'>a</span> <span
  m='2653510'>little</span> <span m='2653740'>bit</span> <span
  m='2653870'>easier.</span> <span m='2654850'>And</span> <span
  m='2655000'>now</span> <span m='2656170'>here's</span> <span
  m='2656430'>what</span> <span m='2656530'>we're</span> <span
  m='2656640'>going</span> <span m='2656820'>to</span> <span
  m='2656890'>do.</span> <span m='2657620'>I'm</span> <span
  m='2657840'>telling</span> <span m='2658240'>you</span> <span
  m='2658430'>exactly</span> <span m='2659440'>what</span> <span
  m='2659710'>type</span> <span m='2659980'>of</span> <span
  m='2660070'>problems</span> <span m='2661150'>are</span> <span
  m='2661290'>going</span> <span m='2661460'>to</span> <span
  m='2661540'>be</span> <span m='2661630'>on</span> <span m='2661780'>the</span>
  <span m='2661860'>test.</span> <span m='2662520'>These are</span> <span
  m='2662770'>these</span> <span m='2662990'>six.</span> <span
  m='2663280'>It's</span> <span m='2663470'>also</span> <span
  m='2663810'>written</span> <span m='2664060'>on</span> <span
  m='2664210'>your</span> <span m='2664340'>sheet,</span> <span
  m='2664660'>your</span> <span m='2664880'>handout.</span> <span
  m='2665940'>It's</span> <span m='2666180'>also</span> <span
  m='2666660'>just</span> <span m='2667130'>what</span> <span
  m='2667300'>was</span> <span m='2667470'>asked</span> <span
  m='2668410'>on</span> <span m='2668550'>last</span> <span
  m='2668840'>year's</span> <span m='2669040'>test.</span> <span
  m='2669330'>You</span> <span m='2669420'>should</span> <span
  m='2669600'>go</span> <span m='2669860'>and</span> <span
  m='2670000'>you</span> <span m='2670060'>should</span> <span
  m='2670210'>look</span> <span m='2670430'>at</span> <span
  m='2670520'>last</span> <span m='2670800'>year's</span> <span
  m='2670950'>test</span> <span m='2671220'>and</span> <span
  m='2671340'>see</span> <span m='2671530'>what</span> <span
  m='2671710'>types</span> <span m='2671970'>of</span> <span
  m='2672060'>problems</span> <span m='2672390'>they</span> <span
  m='2672510'>are.</span> <span m='2673420'>I</span> <span
  m='2673500'>really,</span> <span m='2674180'>really,</span> <span
  m='2674550'>am</span> <span m='2674670'>going to</span> <span
  m='2674840'>ask</span> <span m='2675270'>the</span> <span
  m='2675370'>same</span> <span m='2675660'>questions,</span> <span
  m='2676210'>or</span> <span m='2676280'>the</span> <span
  m='2676370'>same</span> <span m='2676600'>type</span> <span
  m='2676870'>of</span> <span m='2676990'>questions.</span> <span
  m='2678900'>Not</span> <span m='2679100'>the</span> <span
  m='2679180'>same</span> <span m='2679380'>questions.</span> </p><p><span
  m='2681860'>So</span> <span m='2682080'>that's</span> <span
  m='2682320'>what's</span> <span m='2682490'>going to</span> <span
  m='2682690'>happen</span> <span m='2683210'>on</span> <span
  m='2683370'>the</span> <span m='2683470'>test.</span> <span
  m='2684960'>And</span> <span m='2685890'>let</span> <span
  m='2686070'>me</span> <span m='2686140'>just</span> <span
  m='2686370'>tell</span> <span m='2686540'>you,</span> <span
  m='2686820'>say</span> <span m='2686980'>one</span> <span
  m='2687360'>thing,</span> <span m='2688410'>which</span> <span
  m='2688680'>is</span> <span m='2689150'>the</span> <span
  m='2689250'>main</span> <span m='2689830'>theme</span> <span
  m='2690640'>of</span> <span m='2690760'>the</span> <span
  m='2690850'>class.</span> <span m='2691210'>And</span> <span
  m='2691310'>I</span> <span m='2691770'>will</span> <span
  m='2691950'>open</span> <span m='2692190'>up.</span> <span
  m='2692290'>We'll</span> <span m='2692430'>have</span> <span
  m='2692620'>time</span> <span m='2692850'>for</span> <span
  m='2693010'>one</span> <span m='2693220'>question</span> <span
  m='2693600'>after</span> <span m='2693820'>that.</span> <span
  m='2694330'>The</span> <span m='2694440'>main</span> <span
  m='2694750'>theme</span> <span m='2695100'>of</span> <span
  m='2695240'>this</span> <span m='2695480'>unit</span> <span
  m='2696540'>is</span> <span m='2696770'>simply</span> <span
  m='2697440'>the</span> <span m='2697550'>following.</span> <span
  m='2698540'>That</span> <span m='2698810'>information</span> <span
  m='2700790'>about</span> <span m='2703630'>derivative</span> <span
  m='2704200'>and</span> <span m='2704450'>sometimes</span> <span
  m='2705460'>maybe</span> <span m='2706360'>the</span> <span
  m='2706470'>second</span> <span m='2706830'>derivative,</span> <span
  m='2707990'>tells</span> <span m='2708520'>us</span> <span
  m='2711010'>information</span> <span m='2712550'>about</span> <span
  m='2714310'>f</span> <span m='2714520'>itself.</span> <span
  m='2717540'>And</span> <span m='2717670'>that's</span> <span
  m='2717860'>just</span> <span m='2718150'>what</span> <span
  m='2718310'>were</span> <span m='2718440'>doing</span> <span
  m='2718760'>here</span> <span m='2718970'>with</span> <span
  m='2719150'>ordinary</span> <span m='2719540'>differential</span> <span
  m='2719940'>equations.</span> <span m='2720490'>And</span> <span
  m='2720620'>that</span> <span m='2720760'>was</span> <span
  m='2720930'>what</span> <span m='2721110'>we</span> <span
  m='2721240'>were</span> <span m='2721360'>doing</span> <span
  m='2721650'>way</span> <span m='2721930'>at</span> <span
  m='2722030'>the</span> <span m='2722120'>beginning</span> <span
  m='2722460'>when</span> <span m='2722560'>we</span> <span
  m='2722660'>did</span> <span m='2722960'>approximations.</span> </p>
embedded_media:
  - uid: 5e34598d0ed4fd5ce0047d5754f510fa
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: lec16.jpg
    title: Lecture 16
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-16-differential-equations/lec16.jpg
  - uid: aa0fe2ccc4a1f5c8a994518093de37e2
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 60VGKnYBpbg
  - uid: cdcef7d218812df2ec77b8ef82dff968
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/60VGKnYBpbg/default.jpg'
  - uid: de0395ce26fd9c984b44aa7d05a570c0
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id354869053'
  - uid: 070580e15b9e4d24d69b0ff45f8b81c8
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.01JF07/ocw-18.01-f07-lec16_300k.mp4'
  - uid: ed8f1d0bda98a184c9905011418580bf
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Video-VideoLecturesnet-Stream
    title: Video-VideoLectures.net-Stream
    type: Video
    media_location: 'http://videolectures.net/mit1801f06_single_variable_calculus/'
  - uid: 143791e7ff074ca28f646c51350b1db1
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Thumbnail-OCW-JPG
    title: Thumbnail-OCW-JPG
    type: Thumbnail
  - uid: 1bee8044a929e7e6ba61e1740480dcaf
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 60VGKnYBpbg
  - uid: 0d2872b0ce10409d853def7a60e6b521
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: 60VGKnYBpbg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-16-differential-equations/60VGKnYBpbg.srt
  - uid: f4f8327e623ce5b22ec2499f8a4b2afe
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: 60VGKnYBpbg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-16-differential-equations/60VGKnYBpbg.pdf
  - uid: 2a91066fc16575338d24b9e5e5e4d427
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: eaf76a9144f6c47dea18c6f5f3ef3c8d
    parent_uid: 8e7d73ab39d18888c91496878d778e29
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
