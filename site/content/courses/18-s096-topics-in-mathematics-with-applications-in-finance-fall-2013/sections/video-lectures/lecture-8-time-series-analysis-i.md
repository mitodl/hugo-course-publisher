---
title: 'Lecture 8: Time Series Analysis I'
uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
parent_uid: d23a85587c0c7524ea054e655c999532
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-8-time-series-analysis-i
short_url: lecture-8-time-series-analysis-i
inline_embed_id: '57387213lecture8:timeseriesanalysisi48738694'
about_this_resource_text: >-
  <p><strong>Description:</strong> This is the first of three lectures
  introducing the topic of time series analysis, describing stochastic processes
  by applying regression and stationarity models.</p>
  <p><strong>Instructor:</strong> Dr. Peter Kempthorne</p>
related_resources_text: ''
transcript: >-
  <p><span m='80'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10830'>make</span> <span m='10940'>a</span> <span
  m='10980'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12800'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14460'>courses,</span> <span m='15580'>visit</span> <span
  m='15780'>MIT</span> <span m='16210'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='22190'>PROFESSOR: OK.</span> <span m='23010'>Well,</span> <span
  m='23180'>last</span> <span m='23470'>time</span> <span m='24270'>I</span>
  <span m='24680'>was</span> <span m='24790'>lecturing,</span> <span
  m='25400'>we were</span> <span m='27330'>talking</span> <span
  m='27550'>about</span> <span m='27730'>regression</span> <span
  m='28140'>analysis.</span> <span m='29380'>And</span> <span
  m='29560'>we</span> <span m='29690'>finished</span> <span m='30010'>up</span>
  <span m='30210'>talking</span> <span m='30470'>about</span> <span
  m='30950'>estimation</span> <span m='31560'>methods</span> <span
  m='31870'>for</span> <span m='32290'>fitting</span> <span
  m='32610'>regression</span> <span m='33070'>models.</span> <span
  m='34730'>I</span> <span m='34830'>want</span> <span m='34880'>to</span> <span
  m='34990'>recap</span> <span m='35790'>the</span> <span
  m='36470'>method</span> <span m='36980'>of</span> <span
  m='37170'>maximum</span> <span m='37760'>likelihood,</span> <span
  m='38670'>because</span> <span m='39180'>this</span> <span m='39380'>is</span>
  <span m='39590'>really</span> <span m='40270'>the</span> <span
  m='40470'>primary</span> <span m='41390'>estimation</span> <span
  m='42010'>method</span> <span m='42430'>in</span> <span
  m='42780'>statistical</span> <span m='43160'>modeling</span> <span
  m='44080'>that</span> <span m='44210'>you</span> <span m='44300'>start</span>
  <span m='44620'>with.</span> <span m='45070'>And</span> <span
  m='46390'>so</span> <span m='46920'>let</span> <span m='47130'>me</span> <span
  m='47560'>just</span> <span m='47820'>review</span> <span
  m='48740'>where</span> <span m='49160'>we</span> <span m='49553'>were.</span>
  </p><p><span m='49946'>We</span> <span m='50340'>have</span> <span
  m='50550'>a</span> <span m='50650'>normal</span> <span m='51060'>linear</span>
  <span m='51370'>regression</span> <span m='51840'>model.</span> <span
  m='53060'>A</span> <span m='53140'>dependent</span> <span
  m='53580'>variable</span> <span m='53950'>y</span> <span m='54340'>is</span>
  <span m='54500'>explained</span> <span m='55100'>by</span> <span
  m='55840'>a</span> <span m='55920'>linear</span> <span
  m='56230'>combination</span> <span m='56850'>of</span> <span
  m='56960'>independent</span> <span m='57520'>variables</span> <span
  m='58940'>given</span> <span m='59130'>by a</span> <span
  m='59280'>regression</span> <span m='59670'>parameter,</span> <span
  m='60050'>beta.</span> <span m='60710'>And</span> <span m='60930'>we</span>
  <span m='61110'>assume</span> <span m='61550'>that</span> <span
  m='61690'>there</span> <span m='61860'>are</span> <span
  m='62020'>errors</span> <span m='62540'>about</span> <span m='63130'>all
  the</span> <span m='63380'>cases</span> <span m='63800'>which</span> <span
  m='64010'>are</span> <span m='64269'>independent</span> <span
  m='64840'>identically</span> <span m='65269'>distributed</span> <span
  m='65710'>normal</span> <span m='66080'>random</span> <span
  m='66360'>variables.</span> </p><p><span m='67440'>So</span> <span
  m='68650'>because</span> <span m='69040'>of</span> <span m='69130'>that</span>
  <span m='69400'>relationship,</span> <span m='70750'>the</span> <span
  m='70930'>dependent</span> <span m='71390'>variable</span> <span
  m='71770'>vector,</span> <span m='72120'>y,</span> <span
  m='73240'>which</span> <span m='73430'>is</span> <span m='73510'>an</span>
  <span m='73660'>n</span> <span m='73890'>vector</span> <span
  m='74240'>for</span> <span m='74400'>n cases,</span> <span m='75630'>is</span>
  <span m='75780'>a</span> <span m='75820'>multivariate</span> <span
  m='76370'>normal</span> <span m='76850'>random</span> <span
  m='77130'>variable.</span> <span m='78730'>Now,</span> <span
  m='80240'>the</span> <span m='80400'>likelihood</span> <span
  m='80950'>function</span> <span m='82150'>is</span> <span
  m='82900'>equal</span> <span m='83320'>to</span> <span m='84140'>the</span>
  <span m='85220'>density</span> <span m='86010'>function</span> <span
  m='86490'>for</span> <span m='87180'>the</span> <span m='87320'>data.</span>
  <span m='88280'>And</span> <span m='88960'>there's</span> <span
  m='89790'>some</span> <span m='91250'>ambiguity</span> <span
  m='92090'>really</span> <span m='92400'>about</span> <span
  m='93110'>how</span> <span m='93360'>one</span> <span
  m='93560'>manipulates</span> <span m='94110'>the</span> <span
  m='94200'>likelihood</span> <span m='94650'>function.</span> </p><p><span
  m='96000'>The</span> <span m='96090'>likelihood</span> <span
  m='96490'>function</span> <span m='97070'>becomes</span> <span
  m='97550'>defined</span> <span m='98270'>once</span> <span
  m='98560'>we've</span> <span m='98780'>observed</span> <span
  m='99290'>a</span> <span m='99350'>sample</span> <span m='99840'>of</span>
  <span m='99920'>data.</span> <span m='101030'>So</span> <span
  m='101810'>in</span> <span m='102090'>this</span> <span
  m='103270'>expression</span> <span m='103860'>for</span> <span
  m='104190'>the</span> <span m='104340'>likelihood</span> <span
  m='104810'>function</span> <span m='105390'>as</span> <span
  m='105490'>a</span> <span m='105560'>function</span> <span
  m='105870'>of</span> <span m='105960'>beta</span> <span m='106220'>and</span>
  <span m='106320'>sigma</span> <span m='106580'>squared,</span> <span
  m='107330'>we're</span> <span m='107600'>considering</span> <span
  m='108250'>evaluating</span> <span m='109600'>the</span> <span
  m='109710'>probability</span> <span m='110340'>density</span> <span
  m='110800'>function</span> <span m='111760'>for</span> <span
  m='111920'>the</span> <span m='112050'>data</span> <span
  m='112880'>conditional</span> <span m='113830'>on</span> <span
  m='114540'>the</span> <span m='114690'>unknown</span> <span
  m='115030'>parameters.</span> </p><p><span m='117040'>So</span> <span
  m='117750'>if</span> <span m='118080'>this</span> <span m='118350'>were</span>
  <span m='118630'>simply</span> <span m='119600'>a</span> <span
  m='119710'>univariate</span> <span m='120440'>normal</span> <span
  m='121900'>distribution</span> <span m='122540'>with</span> <span
  m='122680'>some</span> <span m='122910'>unknown</span> <span
  m='123320'>mean</span> <span m='123540'>and</span> <span
  m='123640'>variance,</span> <span m='124510'>then</span> <span
  m='125160'>what</span> <span m='125390'>we</span> <span
  m='125510'>would</span> <span m='125620'>have</span> <span
  m='125970'>is</span> <span m='126110'>just</span> <span m='126410'>a</span>
  <span m='127000'>bell</span> <span m='127320'>curve</span> <span
  m='128660'>for</span> <span m='129460'>mu</span> <span
  m='130880'>centered</span> <span m='131340'>around</span> <span
  m='132330'>a</span> <span m='132450'>single</span> <span
  m='132710'>observation,</span> <span m='133340'>y,</span> <span
  m='133880'>if</span> <span m='134040'>you</span> <span m='134160'>look</span>
  <span m='134330'>at</span> <span m='134430'>the</span> <span
  m='134520'>likelihood</span> <span m='134930'>function</span> <span
  m='135550'>and</span> <span m='135720'>how</span> <span m='136130'>it</span>
  <span m='136260'>varies</span> <span m='136610'>with</span> <span
  m='137290'>the</span> <span m='138050'>underlying</span> <span
  m='138440'>mean</span> <span m='139150'>of</span> <span m='139800'>the</span>
  <span m='140570'>normal</span> <span m='140900'>distribution.</span> <span
  m='142950'>So</span> <span m='143640'>this</span> <span
  m='143970'>likelihood</span> <span m='144440'>function</span> <span
  m='146290'>is--</span> <span m='147540'>well,</span> <span
  m='148180'>the</span> <span m='148290'>challenge</span> <span
  m='148830'>really</span> <span m='149160'>in</span> <span
  m='149270'>maximum</span> <span m='149910'>estimation</span> <span
  m='150540'>is</span> <span m='150670'>really</span> <span
  m='153620'>calculating</span> <span m='153980'>and</span> <span
  m='154340'>computing</span> <span m='154840'>the</span> <span
  m='154950'>likelihood</span> <span m='155370'>function.</span> </p><p><span
  m='156790'>And</span> <span m='157000'>with</span> <span
  m='157140'>normal</span> <span m='157900'>linear</span> <span
  m='158340'>regression</span> <span m='158770'>models,</span> <span
  m='159050'>it's</span> <span m='159210'>very</span> <span
  m='159480'>easy.</span> <span m='160440'>Now,</span> <span
  m='160950'>the</span> <span m='161580'>maximum</span> <span
  m='161960'>likelihood</span> <span m='162290'>estimates</span> <span
  m='162910'>are</span> <span m='163130'>those</span> <span
  m='163400'>values</span> <span m='164420'>that</span> <span
  m='165050'>maximize</span> <span m='165810'>this</span> <span
  m='166290'>function.</span> <span m='167490'>And</span> <span
  m='168870'>the</span> <span m='168950'>question</span> <span
  m='169340'>is,</span> <span m='169490'>why</span> <span m='170070'>are</span>
  <span m='170260'>those</span> <span m='170800'>good</span> <span
  m='171150'>estimates</span> <span m='171890'>of</span> <span
  m='172060'>the</span> <span m='172160'>underlying</span> <span
  m='172770'>parameters?</span> <span m='174840'>Well,</span> <span
  m='176010'>what</span> <span m='176290'>those</span> <span
  m='176640'>estimates</span> <span m='177180'>do</span> <span
  m='177410'>is</span> <span m='177560'>they</span> <span m='177760'>are</span>
  <span m='177890'>the</span> <span m='178040'>parameter</span> <span
  m='178650'>values</span> <span m='180680'>for</span> <span
  m='180900'>which</span> <span m='181370'>the</span> <span
  m='181520'>observed</span> <span m='181990'>data</span> <span
  m='183000'>is</span> <span m='183150'>most</span> <span
  m='183460'>likely.</span> </p><p><span m='185030'>So</span> <span
  m='185870'>we're</span> <span m='186080'>able</span> <span
  m='186520'>to</span> <span m='186810'>scale</span> <span m='187410'>the</span>
  <span m='187550'>unknown</span> <span m='187880'>parameters</span> <span
  m='189170'>by</span> <span m='190000'>how</span> <span
  m='190270'>likely</span> <span m='190910'>those</span> <span
  m='191210'>parameters</span> <span m='191790'>could</span> <span
  m='191970'>have</span> <span m='192120'>generated</span> <span
  m='192710'>these</span> <span m='193770'>data</span> <span
  m='194020'>values.</span> <span m='195500'>So</span> <span
  m='195660'>let's</span> <span m='195910'>look</span> <span
  m='196120'>at</span> <span m='198450'>the</span> <span
  m='198560'>likelihood</span> <span m='199010'>function</span> <span
  m='199560'>for</span> <span m='200870'>this</span> <span
  m='201090'>normal</span> <span m='201380'>linear</span> <span
  m='201660'>regression</span> <span m='202070'>model.</span> <span
  m='203360'>These</span> <span m='203620'>first</span> <span
  m='203880'>two</span> <span m='203990'>lines</span> <span
  m='204310'>here</span> <span m='205810'>are</span> <span
  m='206810'>highlighting--</span> <span m='207970'>the</span> <span
  m='208060'>first</span> <span m='208350'>line</span> <span
  m='208520'>is</span> <span m='208630'>highlighting</span> <span
  m='209260'>that</span> <span m='210230'>our</span> <span
  m='211400'>response</span> <span m='212050'>variable</span> <span
  m='212470'>values</span> <span m='213440'>are</span> <span
  m='213730'>independent.</span> <span m='215310'>They're</span> <span
  m='215590'>conditionally</span> <span m='216150'>independent</span> <span
  m='216770'>given</span> <span m='217040'>the</span> <span
  m='217190'>unknown</span> <span m='217510'>parameters.</span> </p><p><span
  m='218720'>And</span> <span m='218970'>so</span> <span m='219810'>the</span>
  <span m='220290'>density</span> <span m='221160'>of</span> <span
  m='221320'>the</span> <span m='221420'>full</span> <span
  m='221770'>vector</span> <span m='222180'>of y's</span> <span
  m='222760'>is</span> <span m='222880'>simply</span> <span
  m='223180'>the</span> <span m='223300'>product</span> <span
  m='224500'>of</span> <span m='224660'>the</span> <span
  m='224740'>density</span> <span m='225150'>functions</span> <span
  m='225560'>for</span> <span m='225670'>those</span> <span
  m='227070'>components.</span> <span m='228290'>And</span> <span
  m='228990'>because</span> <span m='229500'>this</span> <span
  m='229660'>is</span> <span m='229810'>a</span> <span m='229910'>normal</span>
  <span m='230810'>linear</span> <span m='231140'>regression</span> <span
  m='231550'>model,</span> <span m='232410'>each</span> <span
  m='232550'>of</span> <span m='232630'>the</span> <span m='232720'>y</span>
  <span m='233030'>i's</span> <span m='233580'>is</span> <span
  m='233800'>normally</span> <span m='234240'>distributed.</span> <span
  m='235350'>So</span> <span m='235430'>what's</span> <span m='235670'>in</span>
  <span m='235870'>there</span> <span m='236160'>is</span> <span
  m='236360'>simply</span> <span m='236620'>the</span> <span
  m='236750'>density</span> <span m='237140'>function</span> <span
  m='238080'>of</span> <span m='238250'>a</span> <span m='238320'>normal</span>
  <span m='238700'>random</span> <span m='239030'>variable</span> <span
  m='240010'>with</span> <span m='240220'>mean</span> <span
  m='240990'>given</span> <span m='241330'>by</span> <span m='242480'>the</span>
  <span m='242630'>beta</span> <span m='243030'>sum</span> <span
  m='243400'>of</span> <span m='243630'>independent</span> <span
  m='244210'>variables</span> <span m='244720'>for</span> <span
  m='244840'>each</span> <span m='245360'>i,</span> <span m='246960'>case</span>
  <span m='247300'>i,</span> <span m='248560'>given</span> <span
  m='248760'>by</span> <span m='248910'>the</span> <span
  m='249000'>regression</span> <span m='249350'>parameters.</span> </p><p><span
  m='250300'>And</span> <span m='252690'>that</span> <span
  m='253010'>expression</span> <span m='256779'>basically</span> <span
  m='257184'>can</span> <span m='257589'>be</span> <span
  m='257690'>expressed</span> <span m='258320'>in</span> <span
  m='258589'>matrix</span> <span m='259089'>form</span> <span
  m='259560'>this</span> <span m='259810'>way.</span> <span
  m='261630'>And</span> <span m='262670'>what</span> <span m='262880'>we</span>
  <span m='263020'>have</span> <span m='264480'>is</span> <span
  m='266380'>the</span> <span m='266510'>likelihood</span> <span
  m='267040'>function</span> <span m='268910'>ends</span> <span
  m='270240'>up</span> <span m='270370'>being</span> <span m='270670'>a</span>
  <span m='270850'>function</span> <span m='271380'>of our</span> <span
  m='271855'>q</span> <span m='272330'>of</span> <span m='272500'>beta,</span>
  <span m='273020'>which</span> <span m='273160'>was</span> <span
  m='273290'>our</span> <span m='273410'>least</span> <span
  m='273630'>squares</span> <span m='274010'>criteria.</span> <span
  m='275610'>So</span> <span m='276350'>the</span> <span m='276390'>least</span>
  <span m='276640'>squares</span> <span m='277010'>estimation</span> <span
  m='278580'>is</span> <span m='279120'>equivalent</span> <span
  m='279810'>to</span> <span m='280540'>maximum</span> <span
  m='281300'>likelihood</span> <span m='281740'>estimation</span> <span
  m='282280'>for</span> <span m='282380'>the</span> <span
  m='282520'>regression</span> <span m='282930'>parameters</span> <span
  m='283750'>if</span> <span m='283950'>we</span> <span m='284060'>have</span>
  <span m='284800'>a</span> <span m='284920'>normal</span> <span
  m='285760'>linear</span> <span m='286060'>regression</span> <span
  m='286440'>model.</span> </p><p><span m='288510'>And</span> <span
  m='288950'>there's</span> <span m='289150'>this</span> <span
  m='289350'>extra</span> <span m='289750'>term,</span> <span
  m='291160'>minus</span> <span m='291580'>n.</span> <span
  m='292200'>Well,</span> <span m='292430'>actually,</span> <span
  m='293110'>if</span> <span m='293280'>we're</span> <span
  m='293370'>going</span> <span m='293460'>to</span> <span
  m='293510'>maximize</span> <span m='294200'>the</span> <span
  m='294290'>likelihood</span> <span m='294820'>function,</span> <span
  m='295150'>we</span> <span m='295250'>can</span> <span m='295370'>also</span>
  <span m='295620'>maximize</span> <span m='296250'>the</span> <span
  m='296340'>log of the</span> <span m='296810'>likelihood</span> <span
  m='297220'>function,</span> <span m='298090'>because</span> <span
  m='298360'>that's just</span> <span m='298730'>a</span> <span
  m='298770'>monotone</span> <span m='299270'>function</span> <span
  m='300010'>of</span> <span m='300360'>the</span> <span
  m='300890'>likelihood.</span> <span m='301860'>And</span> <span
  m='302070'>it's</span> <span m='302200'>easier</span> <span
  m='302590'>to</span> <span m='302650'>maximize</span> <span
  m='303250'>the</span> <span m='303350'>log</span> <span m='303630'>of</span>
  <span m='303690'>the</span> <span m='303760'>likelihood</span> <span
  m='304190'>function</span> <span m='304570'>which</span> <span
  m='304750'>is</span> <span m='304840'>expressed</span> <span
  m='305330'>here.</span> </p><p><span m='306430'>And</span> <span
  m='306650'>so</span> <span m='308230'>we're</span> <span
  m='308560'>able</span> <span m='308820'>to</span> <span
  m='309730'>maximize</span> <span m='310460'>over</span> <span
  m='310790'>beta</span> <span m='311460'>by</span> <span
  m='311700'>minimizing</span> <span m='312900'>q</span> <span
  m='313180'>of</span> <span m='313290'>beta.</span> <span m='314230'>And</span>
  <span m='314490'>then</span> <span m='314910'>we</span> <span
  m='315060'>can</span> <span m='315200'>maximize</span> <span
  m='315970'>over</span> <span m='317140'>sigma</span> <span
  m='317500'>squared</span> <span m='318280'>given</span> <span
  m='318620'>our</span> <span m='318750'>estimate</span> <span
  m='319160'>for</span> <span m='319290'>beta.</span> <span
  m='321800'>And</span> <span m='322500'>that's</span> <span
  m='322760'>achieved</span> <span m='323230'>by</span> <span
  m='323500'>taking</span> <span m='323860'>the</span> <span
  m='323990'>derivative</span> <span m='325120'>of</span> <span
  m='325610'>the</span> <span m='325720'>log</span> <span
  m='325990'>likelihood</span> <span m='327390'>with</span> <span
  m='327500'>respect</span> <span m='327910'>to</span> <span
  m='327990'>sigma</span> <span m='328280'>squared.</span> </p><p><span
  m='331170'>So</span> <span m='331410'>we</span> <span m='331770'>basically
  have</span> <span m='331900'>this</span> <span m='332080'>forced</span> <span
  m='332420'>order</span> <span m='332730'>condition</span> <span
  m='333150'>that finds</span> <span m='333640'>the</span> <span
  m='333710'>maximum</span> <span m='334540'>because</span> <span
  m='335010'>things</span> <span m='335320'>are</span> <span
  m='336150'>appropriately</span> <span m='337900'>convex.</span> <span
  m='339830'>And</span> <span m='340550'>taking</span> <span
  m='340830'>that</span> <span m='341050'>derivative</span> <span
  m='343540'>and</span> <span m='343730'>solving</span> <span
  m='344100'>for</span> <span m='344210'>zero,</span> <span m='345200'>we</span>
  <span m='345400'>basically</span> <span m='345730'>get</span> <span
  m='345930'>this</span> <span m='346140'>expression.</span> <span
  m='347450'>So</span> <span m='347570'>this is</span> <span
  m='347780'>just</span> <span m='348840'>taking</span> <span
  m='349410'>the</span> <span m='349520'>derivative</span> <span
  m='350380'>of</span> <span m='350860'>the</span> <span m='350970'>log</span>
  <span m='351280'>likelihood</span> <span m='351880'>with</span> <span
  m='352010'>respect</span> <span m='352360'>to</span> <span
  m='352440'>sigma</span> <span m='352740'>squared.</span> </p><p><span
  m='354350'>And</span> <span m='354910'>you'll</span> <span
  m='355090'>notice</span> <span m='355510'>here</span> <span
  m='355790'>I'm</span> <span m='355900'>taking</span> <span
  m='356180'>the</span> <span m='356280'>derivative with</span> <span
  m='356590'>respect</span> <span m='356900'>to</span> <span
  m='356970'>sigma</span> <span m='357250'>squared</span> <span
  m='357690'>is</span> <span m='357790'>a</span> <span
  m='357860'>parameter,</span> <span m='358270'>not</span> <span
  m='358550'>sigma.</span> <span m='361870'>And</span> <span
  m='362020'>that</span> <span m='362220'>gives</span> <span
  m='362510'>us</span> <span m='363240'>that</span> <span m='363620'>the</span>
  <span m='364720'>maximum</span> <span m='365090'>likelihood</span> <span
  m='365380'>estimate</span> <span m='365780'>of</span> <span
  m='365880'>the</span> <span m='365960'>error</span> <span
  m='366200'>variance</span> <span m='367150'>is</span> <span m='368590'>q
  of</span> <span m='368870'>beta</span> <span m='369120'>hat</span> <span
  m='369400'>over</span> <span m='369690'>n.</span> <span m='370700'>So</span>
  <span m='371020'>this</span> <span m='371320'>is</span> <span
  m='371600'>the</span> <span m='372780'>sum</span> <span m='373250'>of</span>
  <span m='373480'>the</span> <span m='373610'>squared</span> <span
  m='374450'>residuals</span> <span m='375150'>divided</span> <span
  m='375500'>by</span> <span m='375680'>n.</span> <span m='377090'>Now, I</span>
  <span m='378480'>emphasize</span> <span m='379040'>here that</span> <span
  m='379140'>that's</span> <span m='379550'>biased.</span> <span
  m='380940'>Who</span> <span m='381080'>can</span> <span m='381230'>tell</span>
  <span m='381460'>me</span> <span m='383070'>why</span> <span
  m='383680'>that's</span> <span m='383960'>biases</span> <span
  m='384680'>or</span> <span m='384960'>why</span> <span m='385190'>it
  ought</span> <span m='385460'>to be biased?</span> </p><p><span
  m='390554'>AUDIENCE:</span> <span m='391040'>[INAUDIBLE].</span> </p><p><span
  m='395420'>PROFESSOR: OK.</span> <span m='396350'>Well,</span> <span
  m='397510'>it</span> <span m='397710'>should</span> <span m='397940'>be</span>
  <span m='398090'>n</span> <span m='398240'>minus</span> <span
  m='398610'>1</span> <span m='400760'>if</span> <span m='402110'>we're</span>
  <span m='402290'>actually</span> <span m='402530'>estimating</span> <span
  m='403010'>one</span> <span m='403250'>parameter.</span> <span
  m='404660'>So</span> <span m='408260'>if</span> <span m='408480'>the</span>
  <span m='408680'>independent</span> <span m='409110'>variables</span> <span
  m='409730'>were,</span> <span m='410470'>say,</span> <span m='411236'>a</span>
  <span m='412050'>constant,</span> <span m='412990'>1,</span> <span
  m='414050'>so</span> <span m='414210'>we're</span> <span
  m='414300'>just</span> <span m='414470'>estimating</span> <span
  m='415430'>a</span> <span m='415560'>sample</span> <span
  m='416020'>from</span> <span m='416230'>a</span> <span
  m='416280'>normal</span> <span m='416650'>with</span> <span
  m='416780'>mean</span> <span m='417160'>beta</span> <span m='417760'>1</span>
  <span m='418820'>corresponding</span> <span m='419340'>to</span> <span
  m='419430'>the</span> <span m='419580'>unit's</span> <span
  m='420350'>vector</span> <span m='421620'>of</span> <span
  m='422010'>the</span> <span m='422220'>x,</span> <span m='423030'>then</span>
  <span m='425100'>we</span> <span m='425240'>would</span> <span
  m='425370'>have</span> <span m='426130'>a</span> <span m='430220'>1</span>
  <span m='430410'>degree</span> <span m='430620'>of</span> <span
  m='430690'>freedom</span> <span m='430910'>correction</span> <span
  m='431410'>to</span> <span m='431520'>the</span> <span
  m='431760'>residuals</span> <span m='432270'>to</span> <span
  m='432370'>get</span> <span m='432480'>an</span> <span
  m='432570'>unbiased</span> <span m='433020'>estimator.</span> </p><p><span
  m='434120'>But</span> <span m='434320'>what</span> <span m='434490'>if</span>
  <span m='434580'>we</span> <span m='434700'>have</span> <span
  m='435900'>p</span> <span m='436180'>parameters?</span> <span
  m='437150'>Well,</span> <span m='437280'>let</span> <span m='437410'>me</span>
  <span m='437830'>ask</span> <span m='438090'>you</span> <span
  m='438150'>this.</span> <span m='438370'>What</span> <span
  m='438550'>if</span> <span m='438660'>we</span> <span m='438750'>had</span>
  <span m='440150'>n</span> <span m='440440'>parameters</span> <span
  m='441270'>in</span> <span m='441420'>our</span> <span
  m='441580'>regression</span> <span m='441960'>model?</span> <span
  m='443280'>What</span> <span m='443420'>would</span> <span
  m='443540'>happen</span> <span m='444650'>if</span> <span m='444810'>we</span>
  <span m='444920'>had</span> <span m='445180'>a</span> <span
  m='446740'>full</span> <span m='447070'>rank</span> <span m='447370'>in</span>
  <span m='448130'>independent</span> <span m='448590'>variable</span> <span
  m='448900'>matrix</span> <span m='449340'>and</span> <span m='449470'>n</span>
  <span m='449940'>independent</span> <span m='450350'>observations?</span>
  </p><p><span m='454062'>AUDIENCE:</span> <span m='454550'>[INAUDIBLE].</span>
  </p><p><span m='455690'>PROFESSOR: Yes,</span> <span m='456560'>you'd</span>
  <span m='456620'>have</span> <span m='456830'>an</span> <span
  m='456900'>exact</span> <span m='457430'>fit</span> <span m='457650'>to
  the</span> <span m='457810'>data.</span> <span m='458410'>So</span> <span
  m='460150'>this</span> <span m='460360'>estimate</span> <span
  m='461380'>would</span> <span m='461550'>be</span> <span m='461680'>0.</span>
  <span m='463560'>And</span> <span m='463780'>so</span> <span
  m='464820'>clearly,</span> <span m='465800'>if</span> <span
  m='466430'>the</span> <span m='466520'>data</span> <span m='466800'>do</span>
  <span m='466980'>arise</span> <span m='467500'>from</span> <span
  m='467880'>a</span> <span m='467920'>normal</span> <span
  m='468160'>linear</span> <span m='468410'>regression</span> <span
  m='468780'>model,</span> <span m='469880'>0</span> <span m='471030'>is</span>
  <span m='471160'>not</span> <span m='471330'>unbiased.</span> <span
  m='472440'>And</span> <span m='472610'>you</span> <span m='472680'>need</span>
  <span m='472850'>to</span> <span m='472890'>have</span> <span
  m='473000'>some</span> <span m='473180'>correction.</span> <span
  m='473600'>Turns</span> <span m='473860'>out</span> <span
  m='474010'>you</span> <span m='474080'>need</span> <span m='474320'>to</span>
  <span m='476170'>divide</span> <span m='476630'>by</span> <span
  m='477780'>n</span> <span m='478220'>minus</span> <span m='479250'>the</span>
  <span m='479520'>rank</span> <span m='479860'>of</span> <span
  m='479950'>the</span> <span m='480090'>x</span> <span
  m='480310'>matrix,</span> <span m='481080'>the</span> <span
  m='481200'>degrees</span> <span m='481550'>of</span> <span
  m='481670'>freedom</span> <span m='481980'>in</span> <span
  m='482030'>the</span> <span m='482100'>model,</span> <span
  m='483410'>to</span> <span m='483510'>get</span> <span m='483650'>a</span>
  <span m='483700'>biased</span> <span m='484110'>estimate.</span> </p><p><span
  m='485630'>So</span> <span m='485770'>this</span> <span m='485990'>is</span>
  <span m='486700'>an</span> <span m='486810'>important</span> <span
  m='487230'>issue,</span> <span m='488100'>highlights</span> <span
  m='488610'>how</span> <span m='489240'>the</span> <span m='489340'>more</span>
  <span m='489520'>parameters</span> <span m='490010'>you</span> <span
  m='490130'>add</span> <span m='490320'>in the</span> <span
  m='490400'>model,</span> <span m='490700'>the</span> <span
  m='491000'>more</span> <span m='491210'>precise</span> <span
  m='491880'>your</span> <span m='492070'>fitted</span> <span
  m='492450'>values</span> <span m='492840'>are.</span> <span
  m='493760'>In</span> <span m='493800'>a</span> <span m='493870'>sense,</span>
  <span m='494090'>there's</span> <span m='494250'>dangers</span> <span
  m='494690'>of</span> <span m='494790'>curve</span> <span
  m='495070'>fitting</span> <span m='495840'>which</span> <span
  m='496550'>you</span> <span m='496800'>want</span> <span m='496990'>to</span>
  <span m='497030'>avoid.</span> <span m='498370'>But</span> <span
  m='499830'>the</span> <span m='500710'>maximum</span> <span
  m='501260'>likelihood</span> <span m='503450'>estimates,</span> <span
  m='503940'>in</span> <span m='504040'>fact,</span> <span m='504350'>are</span>
  <span m='504590'>biased.</span> <span m='505070'>You</span> <span
  m='505150'>just</span> <span m='505340'>have</span> <span m='505480'>to</span>
  <span m='506470'>be</span> <span m='506710'>aware</span> <span
  m='507110'>of</span> <span m='507190'>that.</span> <span m='507510'>And</span>
  <span m='507730'>when</span> <span m='507860'>you're</span> <span
  m='507950'>using</span> <span m='508230'>different</span> <span
  m='508500'>software,</span> <span m='509190'>fitting</span> <span
  m='509320'>different</span> <span m='509570'>models,</span> <span
  m='509900'>you</span> <span m='509990'>need</span> <span m='510170'>to</span>
  <span m='510250'>know</span> <span m='511060'>whether</span> <span
  m='511330'>there</span> <span m='511540'>are</span> <span
  m='511570'>various</span> <span m='511860'>corrections</span> <span
  m='512299'>be</span> <span m='512450'>made</span> <span m='512860'>for</span>
  <span m='513240'>biasness</span> <span m='513309'>or not.</span> </p><p><span
  m='518370'>So</span> <span m='518530'>this</span> <span
  m='519650'>solves</span> <span m='520429'>the</span> <span
  m='520640'>estimation</span> <span m='521270'>problem</span> <span
  m='521679'>for</span> <span m='522480'>normal</span> <span
  m='522840'>linear</span> <span m='523169'>regression</span> <span
  m='523559'>models.</span> <span m='524790'>And</span> <span
  m='526270'>when</span> <span m='526620'>we</span> <span m='526790'>have</span>
  <span m='527270'>normal</span> <span m='527640'>linear</span> <span
  m='527940'>regression</span> <span m='528310'>models,</span> <span
  m='528750'>the</span> <span m='528870'>theorem</span> <span
  m='529290'>we</span> <span m='529410'>went</span> <span
  m='529620'>through</span> <span m='529860'>last</span> <span
  m='530210'>time--</span> <span m='530470'>this is</span> <span
  m='530580'>very</span> <span m='530760'>important.</span> <span
  m='531160'>Let</span> <span m='531210'>me</span> <span m='531300'>just</span>
  <span m='532830'>go</span> <span m='533020'>back</span> <span
  m='533290'>and</span> <span m='533400'>highlight</span> <span
  m='533830'>that</span> <span m='534080'>for</span> <span
  m='534300'>you.</span> </p><p><span m='542430'>This</span> <span
  m='542810'>theorem</span> <span m='543580'>right</span> <span
  m='543800'>here.</span> <span m='545370'>This</span> <span
  m='546100'>is</span> <span m='546410'>really</span> <span m='547983'>a</span>
  <span m='548930'>very</span> <span m='549140'>important</span> <span
  m='549510'>theorem</span> <span m='550010'>indicating</span> <span
  m='550810'>what</span> <span m='551110'>is</span> <span m='551390'>the</span>
  <span m='551480'>distribution</span> <span m='552530'>of</span> <span
  m='553010'>the</span> <span m='553130'>least</span> <span
  m='553330'>squares,</span> <span m='553720'>now</span> <span
  m='553870'>the</span> <span m='553960'>maximum</span> <span
  m='554390'>likelihood</span> <span m='554770'>estimates.</span> <span
  m='555800'>Of</span> <span m='555960'>our</span> <span
  m='556150'>regression</span> <span m='556530'>model?</span> <span
  m='557670'>They</span> <span m='558080'>are</span> <span
  m='559100'>normally</span> <span m='559510'>distributed.</span> <span
  m='560750'>And</span> <span m='561410'>the</span> <span
  m='562490'>residuals,</span> <span m='563810'>sum</span> <span
  m='564020'>of</span> <span m='564160'>squares,</span> <span
  m='565020'>have</span> <span m='565280'>a</span> <span m='565360'>chi</span>
  <span m='565570'>squared</span> <span m='566220'>distribution</span> <span
  m='567300'>with</span> <span m='567430'>degrees</span> <span
  m='567810'>of</span> <span m='567890'>freedom</span> <span
  m='568140'>given</span> <span m='568370'>by</span> <span m='568530'>n</span>
  <span m='568720'>minus</span> <span m='569080'>p.</span> </p><p><span
  m='569910'>And</span> <span m='570590'>we</span> <span m='570830'>can</span>
  <span m='571330'>look</span> <span m='571610'>at</span> <span
  m='571730'>how</span> <span m='573340'>much</span> <span
  m='573540'>signal</span> <span m='574200'>to</span> <span
  m='574340'>noise</span> <span m='574770'>there</span> <span m='575020'>is
  in</span> <span m='575210'>estimating</span> <span m='575770'>our</span> <span
  m='576040'>regression</span> <span m='576490'>parameters</span> <span
  m='576960'>by</span> <span m='577100'>calculating</span> <span
  m='577700'>a</span> <span m='577780'>t</span> <span
  m='578000'>statistic,</span> <span m='579230'>which</span> <span
  m='579410'>is</span> <span m='580040'>take</span> <span m='580310'>away</span>
  <span m='580590'>from</span> <span m='581210'>an</span> <span
  m='581380'>estimate</span> <span m='582540'>Its</span> <span
  m='583630'>expected</span> <span m='584180'>value,</span> <span
  m='584570'>its</span> <span m='584740'>mean,</span> <span
  m='585400'>and</span> <span m='585560'>divide</span> <span
  m='585860'>through</span> <span m='586060'>by</span> <span
  m='586210'>an</span> <span m='586310'>estimate</span> <span
  m='586780'>of</span> <span m='586940'>the</span> <span
  m='587010'>variability</span> <span m='588330'>in</span> <span
  m='588550'>standard</span> <span m='588890'>deviation</span> <span
  m='589390'>units.</span> <span m='590610'>And</span> <span
  m='590740'>that</span> <span m='590880'>will</span> <span
  m='590980'>have</span> <span m='591100'>a</span> <span m='591170'>t</span>
  <span m='591360'>distribution.</span> </p><p><span m='591920'>So</span> <span
  m='592420'>that's</span> <span m='592650'>a</span> <span
  m='592730'>critical</span> <span m='595490'>way</span> <span
  m='595770'>to</span> <span m='595950'>assess</span> <span
  m='596800'>the</span> <span m='597040'>relevance</span> <span
  m='597540'>of</span> <span m='597660'>different</span> <span
  m='597980'>explanatory</span> <span m='598610'>variables</span> <span
  m='599200'>in our</span> <span m='599880'>model.</span> <span
  m='600690'>And</span> <span m='601430'>this</span> <span
  m='602330'>approach</span> <span m='603520'>will</span> <span
  m='603730'>apply</span> <span m='605180'>with</span> <span
  m='605380'>maximum</span> <span m='605740'>likelihood</span> <span
  m='606060'>estimation</span> <span m='606960'>in</span> <span
  m='607090'>all</span> <span m='607200'>kinds</span> <span m='607460'>of</span>
  <span m='607570'>models</span> <span m='608010'>apart</span> <span
  m='608350'>from</span> <span m='608570'>normal</span> <span
  m='608900'>linear</span> <span m='609170'>regression</span> <span
  m='609550'>models.</span> <span m='610510'>It</span> <span
  m='610660'>turns</span> <span m='610920'>out</span> <span
  m='611230'>maximum</span> <span m='611810'>likelihood</span> <span
  m='612320'>estimates</span> <span m='613220'>generally</span> <span
  m='613970'>are</span> <span m='615270'>asymptotically</span> <span
  m='616580'>normally</span> <span m='616990'>distributed.</span> <span
  m='617880'>And</span> <span m='618040'>so</span> <span m='618200'>these</span>
  <span m='618450'>properties</span> <span m='618980'>here</span> <span
  m='619350'>will</span> <span m='619560'>apply</span> <span
  m='621020'>for</span> <span m='621130'>those</span> <span
  m='621320'>models</span> <span m='621630'>as</span> <span
  m='621780'>well.</span> </p><p><span m='623020'>So</span> <span
  m='623050'>let's</span> <span m='625010'>finish</span> <span
  m='625360'>up</span> <span m='625940'>these</span> <span
  m='626280'>nodes</span> <span m='626610'>on</span> <span
  m='626790'>estimation</span> <span m='627470'>by</span> <span
  m='627630'>talking</span> <span m='628000'>about</span> <span
  m='628950'>generalized</span> <span m='629840'>m</span> <span
  m='630110'>estimation.</span> <span m='632590'>So</span> <span
  m='633860'>what</span> <span m='634130'>we</span> <span m='634230'>want</span>
  <span m='634460'>to</span> <span m='634540'>consider</span> <span
  m='635070'>is</span> <span m='635920'>estimating</span> <span
  m='636530'>unknown</span> <span m='636990'>parameters</span> <span
  m='639020'>by</span> <span m='640750'>minimizing</span> <span
  m='641470'>some</span> <span m='641750'>function,</span> <span
  m='643150'>q</span> <span m='643420'>of</span> <span m='643560'>beta,</span>
  <span m='644630'>which</span> <span m='644930'>is</span> <span
  m='645770'>a</span> <span m='645900'>sum</span> <span m='646390'>of</span>
  <span m='647610'>evaluations</span> <span m='648240'>of</span> <span
  m='648400'>another</span> <span m='648690'>function,</span> <span
  m='649120'>h,</span> <span m='649890'>evaluated</span> <span
  m='650480'>for</span> <span m='650780'>each</span> <span m='650980'>of</span>
  <span m='651070'>the</span> <span m='651130'>individual</span> <span
  m='651590'>cases.</span> <span m='653180'>And</span> <span
  m='654400'>choosing</span> <span m='655090'>h</span> <span
  m='655420'>to</span> <span m='655510'>take</span> <span m='655750'>on</span>
  <span m='655980'>different</span> <span m='658510'>functional</span> <span
  m='659150'>forms</span> <span m='659980'>will</span> <span
  m='660220'>define</span> <span m='660590'>different</span> <span
  m='660860'>kinds</span> <span m='661120'>of</span> <span
  m='661210'>estimators.</span> </p><p><span m='663120'>We've</span> <span
  m='663380'>seen</span> <span m='663750'>how</span> <span
  m='663990'>when</span> <span m='664170'>h</span> <span m='665070'>is</span>
  <span m='665370'>simply</span> <span m='667460'>the</span> <span
  m='667620'>square</span> <span m='668440'>of</span> <span
  m='669280'>the</span> <span m='669430'>case</span> <span
  m='669960'>minus</span> <span m='670430'>its</span> <span
  m='670880'>regression</span> <span m='671760'>prediction,</span> <span
  m='673880'>that</span> <span m='675300'>leads</span> <span
  m='675690'>to</span> <span m='676280'>least</span> <span
  m='676450'>squares,</span> <span m='677490'>and</span> <span
  m='677590'>in</span> <span m='677720'>fact,</span> <span
  m='678130'>maximum</span> <span m='678560'>likelihood</span> <span
  m='678980'>estimation,</span> <span m='681070'>as</span> <span
  m='681210'>we</span> <span m='681330'>saw</span> <span
  m='681520'>before.</span> <span m='683830'>Rather</span> <span
  m='684120'>than</span> <span m='684380'>taking</span> <span
  m='684760'>the</span> <span m='684900'>square</span> <span
  m='685700'>of</span> <span m='685980'>the</span> <span
  m='686660'>residual,</span> <span m='687340'>the</span> <span
  m='687440'>fitted</span> <span m='687770'>residual,</span> <span
  m='688430'>we</span> <span m='688570'>could</span> <span
  m='688750'>take</span> <span m='689180'>simply</span> <span
  m='689540'>the</span> <span m='691710'>modulus</span> <span
  m='692380'>of</span> <span m='692550'>that.</span> <span m='693510'>And</span>
  <span m='694540'>so</span> <span m='694690'>that</span> <span
  m='694810'>would</span> <span m='694930'>be</span> <span m='695040'>the</span>
  <span m='695130'>mean</span> <span m='695540'>absolute</span> <span
  m='696110'>deviation.</span> </p><p><span m='696930'>So</span> <span
  m='697040'>rather than</span> <span m='697390'>summing</span> <span
  m='698070'>the</span> <span m='698180'>squared</span> <span
  m='698550'>deviations</span> <span m='699040'>from</span> <span
  m='699200'>the</span> <span m='699260'>mean,</span> <span m='699520'>we</span>
  <span m='699630'>could</span> <span m='699790'>sum</span> <span
  m='700920'>the</span> <span m='701130'>absolute</span> <span
  m='701770'>deviations</span> <span m='702310'>from</span> <span m='702460'>the
  mean.</span> <span m='703780'>Now,</span> <span m='704370'>from</span> <span
  m='704990'>a</span> <span m='705090'>mathematical</span> <span
  m='705800'>standpoint,</span> <span m='706710'>if</span> <span
  m='706880'>we</span> <span m='706980'>want</span> <span m='707290'>to</span>
  <span m='707440'>solve</span> <span m='707930'>for</span> <span
  m='708040'>those</span> <span m='708360'>estimates,</span> <span
  m='710530'>how</span> <span m='711230'>would</span> <span
  m='711400'>you</span> <span m='711490'>go</span> <span m='711610'>about</span>
  <span m='711880'>doing</span> <span m='712120'>that?</span> <span
  m='715160'>What</span> <span m='715590'>methodology</span> <span
  m='716150'>would you</span> <span m='716260'>use</span> <span
  m='716670'>to</span> <span m='718680'>maximize</span> <span
  m='719200'>this</span> <span m='719360'>function?</span> </p><p><span
  m='721950'>Well,</span> <span m='722260'>we</span> <span m='722420'>try</span>
  <span m='722680'>and</span> <span m='722760'>apply</span> <span
  m='723260'>basicaly</span> <span m='723500'>the</span> <span
  m='723620'>same</span> <span m='723840'>principles</span> <span
  m='724380'>of</span> <span m='725120'>if</span> <span m='725270'>this</span>
  <span m='725430'>is</span> <span m='725560'>a</span> <span
  m='726320'>convex</span> <span m='727020'>function,</span> <span
  m='728180'>then</span> <span m='729690'>we</span> <span m='729830'>just</span>
  <span m='730090'>want</span> <span m='730180'>to</span> <span
  m='730240'>take</span> <span m='730860'>derivatives</span> <span
  m='731530'>of</span> <span m='731730'>that</span> <span m='732140'>and</span>
  <span m='732280'>solve</span> <span m='732530'>for</span> <span
  m='732630'>that</span> <span m='732860'>being equal to</span> <span
  m='733320'>0.</span> <span m='734110'>So</span> <span m='734830'>what</span>
  <span m='735030'>happens</span> <span m='735290'>when</span> <span
  m='735400'>you</span> <span m='735520'>take</span> <span m='736180'>the</span>
  <span m='736370'>derivative</span> <span m='737080'>of</span> <span
  m='737420'>the</span> <span m='737520'>modulus</span> <span m='738430'>of
  y</span> <span m='738800'>minus</span> <span m='739170'>xi</span> <span
  m='739500'>beta</span> <span m='740300'>with</span> <span
  m='740400'>respect</span> <span m='740740'>to</span> <span
  m='740810'>beta?</span> </p><p><span m='744749'>AUDIENCE:</span> <span
  m='745226'>[INAUDIBLE].</span> </p><p><span m='747620'>PROFESSOR: What</span>
  <span m='747760'>did</span> <span m='748050'>you</span> <span
  m='748210'>say?</span> <span m='750780'>What</span> <span m='751040'>did you
  say?</span> </p><p><span m='752890'>AUDIENCE: Yeah,</span> <span
  m='754970'>it's</span> <span m='755160'>not</span> <span
  m='755310'>[INAUDIBLE].</span> <span m='757190'>The</span> <span
  m='757310'>first</span> <span m='757600'>[INAUDIBLE]</span> <span
  m='757950'>derivative</span> <span m='758280'>is</span> <span m='758440'>not
  continuous.</span> </p><p><span m='765460'>PROFESSOR: OK.</span> <span
  m='766610'>Well,</span> <span m='767210'>this</span> <span
  m='767500'>is</span> <span m='768930'>not</span> <span m='769340'>a</span>
  <span m='769390'>smooth</span> <span m='769770'>function.</span> <span
  m='770940'>But</span> <span m='772950'>let</span> <span m='773060'>me</span>
  <span m='773230'>just</span> <span m='774420'>plot</span> <span
  m='776040'>xi</span> <span m='776490'>beta</span> <span
  m='776750'>here,</span> <span m='778680'>and</span> <span m='783600'>yi</span>
  <span m='783980'>minus</span> <span m='784320'>that.</span> <span
  m='786290'>Basically,</span> <span m='786970'>this</span> <span
  m='787290'>is</span> <span m='787450'>going</span> <span m='787750'>to</span>
  <span m='787850'>be</span> <span m='793870'>a</span> <span
  m='793960'>function</span> <span m='794910'>that</span> <span
  m='795060'>has</span> <span m='795270'>slope</span> <span m='795630'>1</span>
  <span m='797340'>when</span> <span m='797480'>it's</span> <span
  m='797720'>positive</span> <span m='798300'>and</span> <span
  m='798410'>slope</span> <span m='798630'>minus</span> <span
  m='798910'>1</span> <span m='799090'>when it's</span> <span
  m='799370'>negative.</span> <span m='800450'>And</span> <span
  m='800720'>so</span> <span m='800880'>that</span> <span m='801080'>will</span>
  <span m='801160'>be</span> <span m='801300'>true,</span> <span
  m='804276'>component</span> <span m='804730'>wise,</span> <span m='805700'>or
  for</span> <span m='805920'>the</span> <span m='806030'>y.</span> <span
  m='806260'>So</span> <span m='806660'>what</span> <span m='806850'>we</span>
  <span m='806950'>end</span> <span m='807130'>up</span> <span
  m='807430'>wanting</span> <span m='807780'>to</span> <span
  m='807920'>do</span> <span m='808550'>is</span> <span m='808850'>find</span>
  <span m='809220'>the</span> <span m='809300'>value</span> <span
  m='809650'>of</span> <span m='809750'>the</span> <span
  m='809770'>regression</span> <span m='810160'>estimate</span> <span
  m='811000'>that</span> <span m='811300'>minimizes</span> <span
  m='813440'>the</span> <span m='813560'>sum</span> <span m='814520'>of</span>
  <span m='815780'>predictions</span> <span m='816680'>that</span> <span
  m='816840'>are</span> <span m='817300'>below</span> <span
  m='818260'>the</span> <span m='818380'>estimate</span> <span
  m='819260'>plus</span> <span m='819630'>the</span> <span m='819730'>sum</span>
  <span m='819920'>of</span> <span m='819970'>the</span> <span
  m='820060'>predictions</span> <span m='820540'>that are</span> <span
  m='820800'>above</span> <span m='821210'>the</span> <span
  m='821290'>estimate</span> <span m='821620'>given</span> <span
  m='821790'>by</span> <span m='821930'>the</span> <span
  m='822040'>regression</span> <span m='822440'>line.</span> </p><p><span
  m='823240'>And</span> <span m='823860'>that</span> <span
  m='824070'>solves</span> <span m='824390'>the</span> <span
  m='824480'>problem.</span> <span m='825580'>Now,</span> <span
  m='826780'>with</span> <span m='827120'>the</span> <span
  m='828130'>maximum</span> <span m='828640'>likelihood</span> <span
  m='828990'>estimation,</span> <span m='830960'>one can</span> <span
  m='831290'>plug</span> <span m='831570'>in</span> <span
  m='831840'>minus</span> <span m='832480'>log</span> <span
  m='833650'>the</span> <span m='833780'>density</span> <span
  m='834170'>of</span> <span m='834240'>yi</span> <span m='834640'>given</span>
  <span m='834970'>beta</span> <span m='835450'>x</span> <span m='835840'>and
  sigma</span> <span m='836100'>i</span> <span m='836280'>squared.</span> <span
  m='837730'>And</span> <span m='838600'>that</span> <span
  m='839140'>function</span> <span m='840380'>simply</span> <span
  m='841640'>sums</span> <span m='842190'>to</span> <span m='842610'>the</span>
  <span m='842750'>log</span> <span m='843200'>of</span> <span
  m='843450'>the</span> <span m='843560'>joint</span> <span
  m='843860'>density</span> <span m='844400'>for</span> <span
  m='844630'>all</span> <span m='844750'>the</span> <span
  m='844830'>data.</span> <span m='845510'>So</span> <span
  m='846260'>that</span> <span m='846570'>works</span> <span
  m='846790'>as</span> <span m='846900'>well.</span> </p><p><span
  m='848530'>With</span> <span m='848740'>robust</span> <span
  m='849320'>m</span> <span m='849510'>estimators,</span> <span m='849980'>we
  can</span> <span m='850270'>consider</span> <span m='851320'>another</span>
  <span m='851680'>function,</span> <span m='852120'>chi,</span> <span
  m='853520'>which</span> <span m='853710'>can</span> <span m='853830'>be</span>
  <span m='853950'>defined</span> <span m='854720'>to</span> <span
  m='855000'>have</span> <span m='855990'>good</span> <span
  m='856260'>properties</span> <span m='856790'>with</span> <span
  m='856980'>estimates.</span> <span m='858210'>And</span> <span
  m='858510'>there's</span> <span m='858720'>a</span> <span
  m='858800'>whole</span> <span m='859090'>theory</span> <span
  m='859950'>of</span> <span m='860210'>robust</span> <span
  m='860700'>estimation--</span> <span m='861065'>it's</span> <span
  m='861430'>very</span> <span m='861670'>rich--</span> <span
  m='862420'>which</span> <span m='862610'>talks</span> <span
  m='862910'>about</span> <span m='863160'>how</span> <span
  m='863370'>best</span> <span m='863830'>to</span> <span
  m='865160'>specify</span> <span m='865780'>this chi</span> <span
  m='866280'>function.</span> <span m='867400'>Now,</span> <span
  m='869540'>one</span> <span m='869700'>of</span> <span m='869760'>the</span>
  <span m='869860'>problems</span> <span m='870520'>with</span> <span
  m='870920'>least</span> <span m='871170'>squares</span> <span
  m='871600'>estimation</span> <span m='873130'>is</span> <span
  m='873430'>that</span> <span m='874460'>the</span> <span
  m='874570'>squares</span> <span m='875050'>of</span> <span
  m='875260'>very</span> <span m='875590'>large</span> <span
  m='875950'>values</span> <span m='877400'>are</span> <span
  m='877550'>very,</span> <span m='877880'>very</span> <span
  m='877980'>large</span> <span m='879360'>in</span> <span
  m='879500'>magnitude.</span> </p><p><span m='880210'>So</span> <span
  m='880550'>there's</span> <span m='881040'>perhaps</span> <span
  m='881790'>an</span> <span m='881900'>undue</span> <span
  m='882240'>influence</span> <span m='882740'>of</span> <span
  m='882840'>very</span> <span m='883060'>large</span> <span
  m='883330'>values,</span> <span m='885170'>very</span> <span
  m='885510'>large</span> <span m='885790'>residuals</span> <span
  m='886570'>under least</span> <span m='887310'>squares</span> <span
  m='887650'>estimation</span> <span m='887910'>and</span> <span
  m='888170'>maximum</span> <span m='888660'>[INAUDIBLE]</span> <span
  m='889000'>estimation.</span> <span m='889680'>So</span> <span
  m='889950'>robust</span> <span m='890500'>estimators</span> <span
  m='891230'>allow</span> <span m='891490'>you</span> <span m='891660'>to</span>
  <span m='892010'>control</span> <span m='892510'>that</span> <span
  m='893600'>by</span> <span m='894740'>defining</span> <span
  m='895280'>the</span> <span m='895380'>function</span> <span
  m='896070'>differently.</span> <span m='897770'>Finally,</span> <span
  m='898600'>there</span> <span m='898900'>are</span> <span
  m='898990'>quantile</span> <span m='899640'>estimators,</span> <span
  m='900830'>which</span> <span m='902020'>extend</span> <span
  m='904130'>the</span> <span m='904520'>mean</span> <span
  m='904830'>absolute</span> <span m='905340'>deviation</span> <span
  m='905990'>criterion.</span> </p><p><span m='907410'>And</span> <span
  m='907640'>so</span> <span m='908040'>if</span> <span m='908190'>we</span>
  <span m='908300'>consider</span> <span m='909630'>the h</span> <span
  m='909850'>function</span> <span m='911220'>to</span> <span
  m='911360'>be</span> <span m='912190'>basically</span> <span
  m='912980'>a</span> <span m='913090'>multiple</span> <span
  m='914020'>of</span> <span m='914430'>the</span> <span
  m='914540'>deviation</span> <span m='916270'>if</span> <span
  m='916700'>the</span> <span m='916850'>residual</span> <span
  m='918050'>is</span> <span m='919320'>positive</span> <span
  m='920690'>and</span> <span m='922160'>a</span> <span
  m='922300'>different</span> <span m='922650'>multiple,</span> <span
  m='923460'>a</span> <span m='923540'>complimentary</span> <span
  m='924280'>multiple</span> <span m='924810'>if</span> <span
  m='925190'>the</span> <span m='925310'>derivation,</span> <span
  m='926170'>the</span> <span m='926290'>residual,</span> <span
  m='926810'>is</span> <span m='927110'>less</span> <span m='927380'>than</span>
  <span m='927550'>0,</span> <span m='928970'>then</span> <span
  m='929250'>by</span> <span m='929420'>varying</span> <span
  m='929870'>tau,</span> <span m='930910'>you</span> <span m='931070'>end</span>
  <span m='931280'>up</span> <span m='932630'>getting</span> <span
  m='933780'>quantile</span> <span m='934390'>estimators,</span> <span
  m='934910'>where</span> <span m='935230'>what</span> <span
  m='935410'>you're</span> <span m='935510'>doing</span> <span
  m='935760'>is</span> <span m='935900'>minimizing</span> <span
  m='936590'>the</span> <span m='936660'>estimate</span> <span
  m='937890'>of</span> <span m='938190'>the</span> <span m='938320'>tau</span>
  <span m='939080'>quantile.</span> </p><p><span m='947510'>So</span> <span
  m='947780'>this</span> <span m='948130'>general</span> <span
  m='948470'>class</span> <span m='948770'>of</span> <span m='948890'>m</span>
  <span m='949270'>estimators</span> <span m='951240'>encompasses</span> <span
  m='951910'>most</span> <span m='952560'>estimators</span> <span
  m='953060'>that</span> <span m='953200'>we</span> <span m='953390'>will</span>
  <span m='954730'>encounter</span> <span m='955470'>in</span> <span
  m='955870'>fitting</span> <span m='956170'>models.</span> <span
  m='959020'>So</span> <span m='959730'>that</span> <span
  m='960350'>finishes</span> <span m='960860'>the</span> <span
  m='961010'>technical</span> <span m='961710'>or the</span> <span
  m='961980'>mathematical</span> <span m='962580'>discussion</span> <span
  m='963130'>of</span> <span m='963210'>regression</span> <span
  m='963630'>analysis.</span> <span m='965190'>Let</span> <span
  m='965240'>me</span> <span m='972870'>highlight</span> <span
  m='975690'>for</span> <span m='976620'>you--</span> <span
  m='989350'>there's</span> <span m='989930'>a</span> <span
  m='990010'>case</span> <span m='990430'>study</span> <span m='990840'>that
  I</span> <span m='991070'>dragged</span> <span m='991480'>to</span> <span
  m='991590'>the</span> <span m='992460'>desktop</span> <span
  m='993030'>here.</span> <span m='994410'>And</span> <span m='994980'>I</span>
  <span m='995080'>wanted</span> <span m='995390'>to</span> <span
  m='995840'>find</span> <span m='996210'>that.</span> </p><p><span
  m='997860'>Let me</span> <span m='998090'>find that.</span> <span
  m='1006970'>There's</span> <span m='1007260'>a</span> <span
  m='1007350'>case</span> <span m='1007670'>study</span> <span
  m='1008130'>that's</span> <span m='1008470'>been</span> <span
  m='1011320'>added</span> <span m='1011700'>to</span> <span
  m='1012130'>the</span> <span m='1012920'>course</span> <span
  m='1013250'>website.</span> <span m='1014300'>And</span> <span
  m='1014550'>this</span> <span m='1014770'>first</span> <span
  m='1015100'>one</span> <span m='1015770'>is</span> <span m='1016100'>on</span>
  <span m='1017710'>linear</span> <span m='1018010'>regression</span> <span
  m='1018440'>models</span> <span m='1018840'>for</span> <span
  m='1019000'>asset</span> <span m='1019390'>pricing.</span> <span
  m='1020370'>And</span> <span m='1020740'>I</span> <span
  m='1020770'>want</span> <span m='1021010'>you</span> <span
  m='1021120'>to</span> <span m='1022320'>read</span> <span
  m='1022600'>through</span> <span m='1022860'>that</span> <span
  m='1023230'>just</span> <span m='1023430'>to</span> <span
  m='1023510'>see</span> <span m='1023810'>how</span> <span
  m='1025310'>it</span> <span m='1025430'>applies</span> <span
  m='1025970'>to</span> <span m='1026160'>fitting</span> <span
  m='1026619'>various</span> <span m='1027270'>simple</span> <span
  m='1027800'>linear</span> <span m='1028099'>regression</span> <span
  m='1028520'>models.</span> <span m='1029650'>And</span> <span
  m='1032250'>enter</span> <span m='1032480'>full</span> <span
  m='1032730'>screen.</span> </p><p><span m='1037900'>This</span> <span
  m='1038500'>case</span> <span m='1038770'>study</span> <span
  m='1039609'>begins</span> <span m='1040010'>by</span> <span
  m='1040150'>introducing</span> <span m='1040750'>the</span> <span
  m='1040950'>capital</span> <span m='1041369'>asset</span> <span
  m='1041650'>pricing</span> <span m='1042050'>model,</span> <span
  m='1043020'>which</span> <span m='1043230'>basically</span> <span
  m='1043599'>suggests</span> <span m='1044670'>that</span> <span
  m='1045720'>if</span> <span m='1045859'>you</span> <span
  m='1046010'>look</span> <span m='1046230'>at</span> <span
  m='1046490'>the</span> <span m='1046630'>returns</span> <span
  m='1047240'>on</span> <span m='1047369'>any</span> <span
  m='1047569'>stocks</span> <span m='1048190'>in</span> <span
  m='1048290'>an</span> <span m='1048430'>efficient</span> <span
  m='1048800'>market,</span> <span m='1049690'>then</span> <span
  m='1049960'>those</span> <span m='1050720'>should</span> <span
  m='1051900'>depend</span> <span m='1052890'>on</span> <span
  m='1053760'>the</span> <span m='1054120'>return</span> <span
  m='1054790'>of</span> <span m='1054940'>the</span> <span
  m='1055070'>overall</span> <span m='1055490'>market</span> <span
  m='1056830'>but</span> <span m='1057070'>scaled</span> <span
  m='1057600'>by</span> <span m='1057800'>how</span> <span
  m='1058080'>risky</span> <span m='1058480'>the</span> <span
  m='1058590'>stock</span> <span m='1058960'>is.</span> <span
  m='1060040'>And</span> <span m='1060650'>so</span> <span m='1061210'>if</span>
  <span m='1061470'>one</span> <span m='1061710'>looks</span> <span
  m='1062040'>at</span> <span m='1064650'>basically</span> <span
  m='1064990'>what</span> <span m='1065170'>the</span> <span
  m='1065250'>return</span> <span m='1065720'>is</span> <span
  m='1065880'>on</span> <span m='1066090'>the</span> <span
  m='1066160'>stock</span> <span m='1066430'>on</span> <span
  m='1066480'>the</span> <span m='1066560'>right</span> <span
  m='1066800'>scale,</span> <span m='1067940'>you</span> <span
  m='1068050'>should</span> <span m='1068180'>have</span> <span
  m='1068300'>a</span> <span m='1068490'>simple</span> <span
  m='1068810'>linear</span> <span m='1069160'>regression</span> <span
  m='1069580'>model.</span> </p><p><span m='1069970'>So</span> <span
  m='1070680'>here,</span> <span m='1071040'>we</span> <span
  m='1071170'>just</span> <span m='1071380'>look</span> <span
  m='1071550'>at</span> <span m='1072400'>a</span> <span m='1072480'>time</span>
  <span m='1072800'>series</span> <span m='1073240'>for</span> <span
  m='1073430'>GE</span> <span m='1073780'>stock</span> <span
  m='1074110'>in</span> <span m='1074180'>the</span> <span
  m='1074280'>S&P</span> <span m='1074680'>500.</span> <span
  m='1076000'>And</span> <span m='1076570'>the</span> <span
  m='1076650'>case</span> <span m='1076880'>study</span> <span
  m='1077080'>guide</span> <span m='1077230'>through</span> <span
  m='1077420'>how</span> <span m='1077610'>you</span> <span
  m='1077750'>can</span> <span m='1077860'>actually</span> <span
  m='1078180'>collect</span> <span m='1078480'>this</span> <span
  m='1078690'>data</span> <span m='1079390'>on</span> <span
  m='1079570'>the</span> <span m='1079640'>web</span> <span
  m='1080500'>using</span> <span m='1080840'>r.</span> <span
  m='1081790'>And</span> <span m='1082130'>so</span> <span
  m='1083650'>the</span> <span m='1084540'>case</span> <span
  m='1084850'>notes</span> <span m='1085760'>provide</span> <span
  m='1086250'>those</span> <span m='1086520'>details.</span> <span
  m='1089350'>There's</span> <span m='1089560'>also</span> <span
  m='1090270'>the</span> <span m='1090460'>three-month</span> <span
  m='1090900'>treasury</span> <span m='1091450'>rate</span> <span
  m='1091930'>which</span> <span m='1092190'>is</span> <span
  m='1092810'>collected.</span> <span m='1093660'>And</span> <span
  m='1093880'>so</span> <span m='1094360'>if</span> <span
  m='1094520'>you're</span> <span m='1094670'>thinking</span> <span
  m='1095010'>about</span> <span m='1095780'>return</span> <span
  m='1096190'>on</span> <span m='1096290'>the</span> <span
  m='1096390'>stock</span> <span m='1096820'>versus</span> <span
  m='1097140'>return</span> <span m='1097680'>on</span> <span
  m='1097870'>the</span> <span m='1098120'>index,</span> <span
  m='1099000'>well,</span> <span m='1099310'>what's</span> <span
  m='1099540'>really</span> <span m='1099840'>of</span> <span
  m='1099930'>interest</span> <span m='1100340'>is</span> <span
  m='1100540'>the</span> <span m='1100720'>excess</span> <span
  m='1101390'>return</span> <span m='1102580'>over</span> <span
  m='1103010'>a</span> <span m='1103150'>risk</span> <span
  m='1103390'>free</span> <span m='1103640'>rate.</span> </p><p><span
  m='1104940'>And</span> <span m='1105540'>the</span> <span
  m='1105630'>efficient</span> <span m='1105960'>markets</span> <span
  m='1106530'>models,</span> <span m='1107450'>basically</span> <span
  m='1108370'>the</span> <span m='1108620'>excess</span> <span
  m='1109070'>return</span> <span m='1109440'>of</span> <span
  m='1109520'>a</span> <span m='1109580'>stock</span> <span
  m='1111390'>is</span> <span m='1111560'>related</span> <span
  m='1111860'>to</span> <span m='1111950'>the</span> <span
  m='1112640'>excess</span> <span m='1113000'>return</span> <span
  m='1113290'>of</span> <span m='1113350'>the</span> <span
  m='1113420'>market</span> <span m='1114100'>as</span> <span
  m='1114330'>given</span> <span m='1114580'>by</span> <span
  m='1115430'>a</span> <span m='1115520'>linear</span> <span
  m='1115840'>regression</span> <span m='1116280'>model.</span> <span
  m='1117250'>So</span> <span m='1117420'>we</span> <span m='1117560'>can</span>
  <span m='1117730'>fit</span> <span m='1117980'>this</span> <span
  m='1118150'>model.</span> <span m='1119310'>And</span> <span
  m='1121080'>here's</span> <span m='1121400'>a</span> <span
  m='1121480'>plot</span> <span m='1122220'>of</span> <span
  m='1123200'>the</span> <span m='1123550'>excess</span> <span
  m='1123950'>returns</span> <span m='1124540'>on</span> <span
  m='1124650'>a</span> <span m='1124730'>daily</span> <span
  m='1125030'>basis</span> <span m='1125640'>for</span> <span
  m='1126070'>GE</span> <span m='1126360'>stock</span> <span m='1126710'>versus
  the</span> <span m='1127060'>market.</span> </p><p><span m='1127640'>So</span>
  <span m='1128360'>that</span> <span m='1128570'>looks</span> <span
  m='1130120'>like</span> <span m='1130460'>a</span> <span
  m='1130550'>nice</span> <span m='1131390'>sort</span> <span
  m='1131540'>of</span> <span m='1131630'>point</span> <span
  m='1131930'>cloud</span> <span m='1132470'>for</span> <span
  m='1132580'>which</span> <span m='1132740'>a</span> <span
  m='1132800'>linear</span> <span m='1133090'>model</span> <span
  m='1133370'>might</span> <span m='1133630'>fit</span> <span
  m='1133830'>well.</span> <span m='1134110'>And it</span> <span
  m='1134340'>does.</span> <span m='1139400'>Well,</span> <span
  m='1139640'>there are</span> <span m='1139800'>regression</span> <span
  m='1140330'>diagnostics,</span> <span m='1141170'>which</span> <span
  m='1141570'>I'll</span> <span m='1141770'>get</span> <span
  m='1141970'>to--</span> <span m='1142390'>well,</span> <span m='1143690'>there
  are</span> <span m='1143950'>regression</span> <span
  m='1144450'>diagnostics</span> <span m='1145300'>which</span> <span
  m='1145620'>are</span> <span m='1146010'>detailed</span> <span
  m='1146570'>in</span> <span m='1146770'>the</span> <span
  m='1147170'>problem</span> <span m='1147620'>set,</span> <span
  m='1148720'>where</span> <span m='1148990'>we're</span> <span
  m='1149110'>looking</span> <span m='1149430'>at</span> <span
  m='1149840'>how</span> <span m='1150190'>influential</span> <span
  m='1150780'>are</span> <span m='1150910'>individual</span> <span
  m='1151390'>observations,</span> <span m='1152200'>what's</span> <span
  m='1152420'>their</span> <span m='1152580'>impact</span> <span
  m='1153110'>on</span> <span m='1153240'>regression</span> <span
  m='1153740'>parameters.</span> </p><p><span m='1156680'>This</span> <span
  m='1158260'>display</span> <span m='1158790'>here</span> <span
  m='1159260'>basically</span> <span m='1159550'>highlights</span> <span
  m='1160160'>with</span> <span m='1160380'>a</span> <span
  m='1160440'>very</span> <span m='1160690'>simple</span> <span
  m='1161100'>linear</span> <span m='1161360'>regression</span> <span
  m='1161790'>model</span> <span m='1162500'>what</span> <span
  m='1162750'>are</span> <span m='1163000'>the</span> <span
  m='1163490'>influential</span> <span m='1164670'>data</span> <span
  m='1164930'>points.</span> <span m='1165770'>And</span> <span
  m='1165940'>so</span> <span m='1166500'>I've</span> <span
  m='1166670'>highlighted</span> <span m='1167120'>in</span> <span
  m='1167220'>red</span> <span m='1167890'>those</span> <span
  m='1168160'>values</span> <span m='1168560'>which</span> <span
  m='1168820'>are</span> <span m='1169300'>influential.</span> <span
  m='1170640'>Now,</span> <span m='1171940'>if</span> <span
  m='1172130'>you</span> <span m='1172280'>look</span> <span
  m='1172480'>at</span> <span m='1172560'>the</span> <span
  m='1172660'>definition</span> <span m='1173120'>of</span> <span
  m='1173230'>leverage</span> <span m='1174060'>in a</span> <span
  m='1174380'>linear</span> <span m='1174770'>model,</span> <span
  m='1175620'>it's</span> <span m='1175680'>very</span> <span
  m='1175870'>simple.</span> <span m='1176390'>A</span> <span
  m='1177010'>simple</span> <span m='1177300'>linear</span> <span
  m='1177550'>model</span> <span m='1177780'>is</span> <span
  m='1177890'>just</span> <span m='1178280'>those</span> <span
  m='1178570'>observations</span> <span m='1178850'>that</span> <span
  m='1179130'>are</span> <span m='1179220'>very</span> <span
  m='1179430'>far</span> <span m='1179670'>from</span> <span
  m='1179880'>the</span> <span m='1179940'>mean</span> <span
  m='1180910'>have</span> <span m='1181150'>large</span> <span
  m='1181430'>leverage.</span> </p><p><span m='1182200'>And</span> <span
  m='1182360'>so</span> <span m='1182430'>you</span> <span
  m='1182600'>can</span> <span m='1182980'>confirm</span> <span
  m='1183500'>that</span> <span m='1184570'>with</span> <span
  m='1184920'>your</span> <span m='1185340'>answers</span> <span
  m='1186060'>to</span> <span m='1186260'>the</span> <span
  m='1186360'>problem</span> <span m='1186690'>set.</span> <span
  m='1188470'>This</span> <span m='1188810'>x</span> <span
  m='1189620'>indicates</span> <span m='1190110'>a</span> <span
  m='1190580'>significantly</span> <span m='1191850'>influential</span> <span
  m='1192430'>point</span> <span m='1192710'>in</span> <span
  m='1192780'>terms</span> <span m='1193070'>of</span> <span
  m='1193210'>the</span> <span m='1193410'>regression</span> <span
  m='1194020'>parameters</span> <span m='1195720'>given</span> <span
  m='1195880'>by</span> <span m='1196060'>Cook's</span> <span
  m='1196430'>distance.</span> <span m='1197090'>And</span> <span
  m='1197190'>that</span> <span m='1197820'>definition</span> <span
  m='1198580'>is</span> <span m='1198970'>also</span> <span m='1199240'>given in
  the case notes.</span> </p><p><span m='1199956'>AUDIENCE:</span> <span
  m='1200432'>[INAUDIBLE].</span> </p><p><span m='1204240'>PROFESSOR: By</span>
  <span m='1204610'>computing</span> <span m='1205580'>the</span> <span
  m='1205900'>individual</span> <span m='1206630'>leverages</span> <span
  m='1207140'>with</span> <span m='1207300'>a</span> <span
  m='1207440'>function</span> <span m='1207870'>that's</span> <span
  m='1208150'>given</span> <span m='1209050'>here,</span> <span
  m='1209930'>and</span> <span m='1210570'>by</span> <span
  m='1211270'>selecting</span> <span m='1211800'>out</span> <span
  m='1211980'>those</span> <span m='1212260'>that</span> <span
  m='1212370'>exceed a</span> <span m='1212820'>given</span> <span
  m='1213040'>magnitude.</span> <span m='1217870'>Now,</span> <span
  m='1218330'>with</span> <span m='1219150'>this</span> <span
  m='1219410'>very,</span> <span m='1219740'>very</span> <span
  m='1219820'>simple</span> <span m='1220130'>model</span> <span
  m='1220530'>of</span> <span m='1220770'>stocks</span> <span
  m='1221180'>depending</span> <span m='1221510'>on</span> <span
  m='1221610'>one</span> <span m='1221790'>unknown</span> <span
  m='1222110'>factor,</span> <span m='1223190'>risk</span> <span
  m='1223550'>factor</span> <span m='1223890'>given</span> <span
  m='1224100'>the</span> <span m='1224180'>market,</span> <span
  m='1226110'>in</span> <span m='1226340'>modeling</span> <span
  m='1227180'>equity</span> <span m='1227600'>returns,</span> <span
  m='1229380'>there</span> <span m='1229730'>are</span> <span
  m='1229800'>many</span> <span m='1230280'>different</span> <span
  m='1230580'>factors</span> <span m='1231140'>that</span> <span
  m='1231440'>can</span> <span m='1231610'>have</span> <span
  m='1231800'>an</span> <span m='1231860'>impact</span> <span
  m='1232330'>on</span> <span m='1232800'>returns.</span> </p><p><span
  m='1233680'>So</span> <span m='1235320'>what</span> <span
  m='1235490'>I've</span> <span m='1235640'>done</span> <span
  m='1235970'>in</span> <span m='1236100'>the</span> <span
  m='1236200'>case</span> <span m='1236460'>study</span> <span
  m='1236890'>is</span> <span m='1237210'>to</span> <span
  m='1237930'>look</span> <span m='1238230'>at</span> <span
  m='1239250'>adding</span> <span m='1239980'>another</span> <span
  m='1240620'>factor</span> <span m='1242010'>which</span> <span
  m='1242360'>is</span> <span m='1244960'>just</span> <span
  m='1248660'>the</span> <span m='1248800'>return</span> <span
  m='1249430'>on</span> <span m='1250010'>crude</span> <span
  m='1250380'>oil.</span> <span m='1251590'>And</span> <span
  m='1251830'>so--</span> <span m='1254180'>I</span> <span
  m='1254270'>need</span> <span m='1254470'>to</span> <span
  m='1254530'>go</span> <span m='1254630'>down</span> <span
  m='1254930'>here.</span> <span m='1264090'>So</span> <span m='1268210'>let
  me</span> <span m='1268390'>highlight</span> <span
  m='1268910'>something</span> <span m='1269230'>for</span> <span
  m='1269400'>you</span> <span m='1269490'>here</span> <span
  m='1270260'>With</span> <span m='1270710'>GE's</span> <span
  m='1271090'>stock,</span> <span m='1271500'>what</span> <span
  m='1271670'>would</span> <span m='1271810'>you</span> <span
  m='1271940'>expect</span> <span m='1273120'>the</span> <span
  m='1273280'>impact</span> <span m='1273810'>of,</span> <span
  m='1275050'>say,</span> <span m='1275220'>a</span> <span
  m='1275280'>high</span> <span m='1275540'>return</span> <span
  m='1275900'>on</span> <span m='1276000'>crude</span> <span
  m='1276230'>oil</span> <span m='1276450'>to</span> <span m='1276540'>be</span>
  <span m='1276890'>on</span> <span m='1277120'>the</span> <span
  m='1277620'>return</span> <span m='1278020'>of GE</span> <span
  m='1278420'>stock?</span> <span m='1279260'>Would you</span> <span
  m='1279510'>expect it</span> <span m='1279950'>to</span> <span
  m='1280010'>be</span> <span m='1280170'>positively</span> <span
  m='1280940'>related</span> <span m='1281500'>or</span> <span
  m='1281730'>negatively</span> <span m='1282230'>related?</span> </p><p><span
  m='1291030'>OK.</span> <span m='1294510'>Well,</span> <span
  m='1294700'>GE</span> <span m='1295230'>is</span> <span m='1295340'>a</span>
  <span m='1295400'>stock</span> <span m='1296040'>that's</span> <span
  m='1296810'>just</span> <span m='1297010'>a</span> <span
  m='1297120'>broad</span> <span m='1298040'>stock</span> <span
  m='1299090'>invested</span> <span m='1299610'>in</span> <span
  m='1300000'>many</span> <span m='1300450'>different</span> <span
  m='1300740'>industries.</span> <span m='1301820'>And it</span> <span
  m='1302070'>really</span> <span m='1302280'>reflects</span> <span
  m='1303320'>the</span> <span m='1303450'>overall</span> <span
  m='1303790'>market,</span> <span m='1304230'>to</span> <span
  m='1304320'>some</span> <span m='1304620'>extent.</span> <span
  m='1305390'>Many</span> <span m='1305740'>years</span> <span
  m='1305990'>ago,</span> <span m='1306790'>10,</span> <span
  m='1307050'>15</span> <span m='1307400'>years</span> <span
  m='1307590'>ago,</span> <span m='1308710'>GE</span> <span
  m='1309010'>represented</span> <span m='1309360'>maybe</span> <span
  m='1309880'>3%</span> <span m='1310470'>of</span> <span m='1310520'>the</span>
  <span m='1310600'>GNP</span> <span m='1311130'>of the</span> <span
  m='1311250'>US</span> <span m='1311580'>market.</span> <span
  m='1311960'>So</span> <span m='1312120'>it was</span> <span
  m='1312210'>really</span> <span m='1312410'>highly</span> <span
  m='1312710'>related</span> <span m='1313130'>to</span> <span
  m='1313670'>how</span> <span m='1313870'>well</span> <span
  m='1314040'>the</span> <span m='1314110'>market</span> <span
  m='1314470'>does.</span> </p><p><span m='1315510'>Now,</span> <span
  m='1316270'>crude</span> <span m='1316570'>oil</span> <span
  m='1318190'>is</span> <span m='1318380'>a</span> <span
  m='1318450'>commodity.</span> <span m='1319700'>And</span> <span
  m='1320920'>oil</span> <span m='1321400'>is</span> <span
  m='1321490'>used</span> <span m='1321960'>to</span> <span
  m='1322470'>drive</span> <span m='1322770'>cars,</span> <span
  m='1323460'>to</span> <span m='1324180'>fuel</span> <span
  m='1325410'>energy</span> <span m='1325860'>production.</span> <span
  m='1327010'>So</span> <span m='1327260'>if</span> <span m='1327440'>you</span>
  <span m='1327560'>have</span> <span m='1327990'>an</span> <span
  m='1328150'>increase</span> <span m='1328780'>in</span> <span
  m='1329280'>oil</span> <span m='1329520'>prices,</span> <span
  m='1330510'>then</span> <span m='1330710'>the</span> <span
  m='1330830'>cost</span> <span m='1332090'>of</span> <span
  m='1332360'>essentially</span> <span m='1332710'>doing</span> <span
  m='1332920'>business</span> <span m='1333290'>goes</span> <span
  m='1333490'>up.</span> <span m='1333770'>So</span> <span m='1335070'>it</span>
  <span m='1335290'>is</span> <span m='1336550'>associated</span> <span
  m='1337010'>with</span> <span m='1337490'>an</span> <span
  m='1337590'>inflation</span> <span m='1338130'>factor.</span> <span
  m='1338870'>Prices</span> <span m='1339630'>are</span> <span
  m='1340010'>rising.</span> </p><p><span m='1340380'>So</span> <span
  m='1341820'>if</span> <span m='1341960'>you</span> <span
  m='1342090'>can</span> <span m='1342460'>see</span> <span
  m='1343020'>here,</span> <span m='1343960'>the</span> <span
  m='1344460'>regression</span> <span m='1345030'>estimate,</span> <span
  m='1345730'>if</span> <span m='1345880'>we</span> <span m='1346030'>add</span>
  <span m='1346280'>in</span> <span m='1346370'>the</span> <span
  m='1346460'>factor</span> <span m='1346940'>of</span> <span
  m='1347260'>the</span> <span m='1348540'>return</span> <span
  m='1348910'>on</span> <span m='1349010'>crude</span> <span
  m='1349230'>oil,</span> <span m='1349830'>it's</span> <span
  m='1350090'>negative</span> <span m='1350820'>0.03.</span> <span
  m='1352120'>And it</span> <span m='1352280'>has</span> <span
  m='1352450'>a</span> <span m='1352530'>t</span> <span m='1352780'>value</span>
  <span m='1353960'>of</span> <span m='1354480'>minus</span> <span
  m='1354800'>3.561.</span> <span m='1356740'>So</span> <span
  m='1357780'>in</span> <span m='1357920'>fact,</span> <span
  m='1359060'>the</span> <span m='1359160'>market,</span> <span m='1359580'>in a
  sense,</span> <span m='1359930'>over</span> <span m='1360090'>this</span>
  <span m='1360260'>period,</span> <span m='1361330'>for</span> <span
  m='1361530'>this</span> <span m='1361730'>analysis,</span> <span
  m='1362480'>was</span> <span m='1362710'>not</span> <span
  m='1362920'>efficient</span> <span m='1363950'>in</span> <span
  m='1364060'>explaining</span> <span m='1364600'>the</span> <span
  m='1364690'>return</span> <span m='1365010'>on</span> <span
  m='1365130'>GE</span> <span m='1366760'>crude</span> <span
  m='1367020'>oil</span> <span m='1367450'>is</span> <span
  m='1367620'>another</span> <span m='1368170'>independent</span> <span
  m='1368740'>factor</span> <span m='1369730'>that</span> <span
  m='1370490'>helps</span> <span m='1370760'>explain</span> <span
  m='1371230'>returns.</span> </p><p><span m='1372260'>So</span> <span
  m='1373850'>that's</span> <span m='1375040'>useful</span> <span
  m='1375490'>to</span> <span m='1375610'>know.</span> <span
  m='1375850'>And</span> <span m='1376160'>if</span> <span
  m='1376550'>you</span> <span m='1376890'>are</span> <span
  m='1377310'>clever</span> <span m='1377900'>about</span> <span
  m='1378900'>defining</span> <span m='1379480'>and</span> <span
  m='1379590'>identifying</span> <span m='1381430'>and</span> <span
  m='1381920'>evaluating</span> <span m='1382490'>different</span> <span
  m='1382770'>factors,</span> <span m='1383590'>you</span> <span
  m='1383720'>can</span> <span m='1383860'>build</span> <span
  m='1385390'>factor</span> <span m='1386850'>asset</span> <span
  m='1387190'>pricing</span> <span m='1387550'>models</span> <span
  m='1388100'>that</span> <span m='1388590'>are</span> <span
  m='1389770'>very,</span> <span m='1390070'>very</span> <span
  m='1390160'>useful</span> <span m='1391430'>for</span> <span
  m='1391720'>investing</span> <span m='1392180'>and</span> <span
  m='1392290'>trading.</span> <span m='1393390'>Now,</span> <span
  m='1393700'>as</span> <span m='1394150'>a</span> <span
  m='1394550'>comparison</span> <span m='1395200'>to</span> <span
  m='1395300'>this</span> <span m='1395990'>case</span> <span
  m='1396210'>study,</span> <span m='1398710'>also</span> <span
  m='1400760'>applied</span> <span m='1401270'>the</span> <span
  m='1401370'>same</span> <span m='1403490'>analysis</span> <span
  m='1404640'>to</span> <span m='1405060'>Exxon Mobil.</span> <span
  m='1406040'>Now,</span> <span m='1406240'>Exxon</span> <span
  m='1406670'>Mobil</span> <span m='1408360'>is</span> <span
  m='1408980'>an</span> <span m='1409100'>oil</span> <span
  m='1409340'>company.</span> <span m='1410330'>So</span> <span
  m='1411760'>let</span> <span m='1411880'>me</span> <span
  m='1412180'>highlight</span> <span m='1412650'>this</span> <span
  m='1412870'>here.</span> </p><p><span m='1415530'>We</span> <span
  m='1415680'>basically</span> <span m='1416200'>are</span> <span
  m='1416270'>fitting</span> <span m='1416590'>this</span> <span
  m='1416960'>model.</span> <span m='1417570'>Now</span> <span
  m='1418000'>let's</span> <span m='1418250'>highlight</span> <span
  m='1418700'>it.</span> <span m='1423150'>Here,</span> <span
  m='1424350'>if</span> <span m='1424530'>we</span> <span
  m='1424670'>consider</span> <span m='1425840'>this</span> <span
  m='1426100'>two</span> <span m='1426310'>factor</span> <span
  m='1426750'>model,</span> <span m='1428960'>the</span> <span
  m='1429210'>regression</span> <span m='1429560'>parameter</span> <span
  m='1429960'>corresponding</span> <span m='1430650'>to</span> <span
  m='1430780'>the</span> <span m='1431340'>crude</span> <span
  m='1431620'>oil</span> <span m='1432460'>factor</span> <span
  m='1433600'>is</span> <span m='1433880'>plus</span> <span
  m='1434520'>0.13</span> <span m='1435980'>with</span> <span
  m='1436080'>a</span> <span m='1436240'>t</span> <span m='1436440'>value</span>
  <span m='1436700'>of</span> <span m='1436760'>16.</span> <span
  m='1437840'>So</span> <span m='1438700'>crude</span> <span
  m='1438950'>oil</span> <span m='1440600'>definitely</span> <span
  m='1441020'>has</span> <span m='1441260'>an</span> <span
  m='1441330'>impact</span> <span m='1441750'>on</span> <span
  m='1443640'>the</span> <span m='1443720'>return</span> <span
  m='1444160'>of</span> <span m='1444270'>Exxon Mobil,</span> <span
  m='1445220'>because</span> <span m='1445500'>it</span> <span
  m='1445560'>goes</span> <span m='1445740'>up</span> <span
  m='1445900'>and</span> <span m='1446020'>down</span> <span
  m='1446370'>with</span> <span m='1446560'>oil</span> <span
  m='1446800'>prices.</span> </p><p><span m='1456300'>This</span> <span
  m='1456590'>case</span> <span m='1456790'>study</span> <span
  m='1457040'>closes</span> <span m='1457550'>with</span> <span
  m='1457750'>a</span> <span m='1458750'>scatter</span> <span
  m='1459180'>plot</span> <span m='1459550'>of</span> <span
  m='1459730'>the</span> <span m='1459850'>independent</span> <span
  m='1460350'>variables</span> <span m='1461440'>and</span> <span
  m='1461620'>highlighting</span> <span m='1462220'>where</span> <span
  m='1462950'>the</span> <span m='1463040'>influential</span> <span
  m='1463660'>values</span> <span m='1464160'>are.</span> <span
  m='1465740'>And</span> <span m='1465970'>so</span> <span
  m='1466250'>just</span> <span m='1466490'>in the</span> <span
  m='1466640'>same</span> <span m='1466960'>way</span> <span
  m='1467190'>that</span> <span m='1467320'>with</span> <span
  m='1467460'>a</span> <span m='1467500'>simple</span> <span
  m='1467860'>linear</span> <span m='1468190'>regression</span> <span
  m='1468650'>it</span> <span m='1468730'>was</span> <span
  m='1468910'>those</span> <span m='1469190'>that</span> <span
  m='1469300'>were</span> <span m='1469480'>far</span> <span
  m='1469730'>away</span> <span m='1469900'>from</span> <span
  m='1470130'>the</span> <span m='1470230'>mean</span> <span
  m='1470520'>of</span> <span m='1470600'>the</span> <span
  m='1470680'>data</span> <span m='1472430'>were</span> <span
  m='1472700'>influential,</span> <span m='1474330'>in</span> <span
  m='1474660'>a</span> <span m='1474710'>multivariate</span> <span
  m='1475410'>setting</span> <span m='1475660'>here,</span> <span
  m='1475920'>it's</span> <span m='1476030'>bivariate,</span> <span
  m='1477005'>the</span> <span m='1477300'>influential</span> <span
  m='1477860'>observations</span> <span m='1478450'>are</span> <span
  m='1478510'>those</span> <span m='1478780'>that</span> <span
  m='1478860'>are</span> <span m='1478930'>very</span> <span
  m='1479170'>far</span> <span m='1479460'>away</span> <span m='1479660'>from
  the</span> <span m='1479900'>centroid.</span> </p><p><span
  m='1481240'>And</span> <span m='1481380'>if</span> <span
  m='1481470'>you</span> <span m='1481590'>look</span> <span
  m='1481780'>at</span> <span m='1482300'>one</span> <span m='1482480'>of</span>
  <span m='1482530'>the</span> <span m='1482630'>problems</span> <span
  m='1483070'>in</span> <span m='1483140'>the</span> <span
  m='1483220'>problem</span> <span m='1483550'>set,</span> <span
  m='1484160'>it</span> <span m='1484290'>actually</span> <span
  m='1484520'>goes</span> <span m='1484750'>through</span> <span
  m='1485100'>and</span> <span m='1485190'>you</span> <span
  m='1485280'>can</span> <span m='1485430'>see</span> <span
  m='1486190'>where</span> <span m='1486610'>these</span> <span
  m='1487640'>leveraged</span> <span m='1488020'>values</span> <span
  m='1488630'>are</span> <span m='1488930'>and</span> <span
  m='1489010'>how</span> <span m='1489320'>it</span> <span
  m='1489490'>indicates</span> <span m='1491620'>influences</span> <span
  m='1492150'>associated</span> <span m='1492580'>with</span> <span
  m='1492720'>the</span> <span m='1492840'>Mahalanobis</span> <span
  m='1493580'>distance</span> <span m='1494530'>of</span> <span
  m='1494890'>cases</span> <span m='1495470'>from</span> <span
  m='1495770'>the</span> <span m='1495890'>centroid</span> <span
  m='1496660'>of</span> <span m='1496780'>the</span> <span
  m='1496870'>independent</span> <span m='1497390'>variables.</span> <span
  m='1498820'>So</span> <span m='1498950'>if</span> <span
  m='1499030'>you're</span> <span m='1499530'>a</span> <span
  m='1499600'>visual</span> <span m='1500730'>type</span> <span
  m='1501070'>mathematician</span> <span m='1501880'>as</span> <span
  m='1502010'>opposed</span> <span m='1502280'>to</span> <span
  m='1502340'>an</span> <span m='1502440'>algebraic</span> <span
  m='1503160'>type</span> <span m='1503450'>mathematician,</span> <span
  m='1504850'>I</span> <span m='1505030'>think</span> <span
  m='1505260'>these</span> <span m='1505520'>kinds</span> <span
  m='1505810'>of</span> <span m='1505900'>graphs</span> <span
  m='1506310'>are</span> <span m='1506390'>very</span> <span
  m='1506730'>helpful</span> <span m='1507250'>in</span> <span
  m='1507320'>understanding</span> <span m='1508740'>what</span> <span
  m='1509090'>is</span> <span m='1509290'>really</span> <span
  m='1509540'>going</span> <span m='1509820'>on.</span> </p><p><span
  m='1510970'>And</span> <span m='1512340'>the</span> <span
  m='1513240'>degree</span> <span m='1513610'>of</span> <span
  m='1513690'>influence</span> <span m='1514500'>is</span> <span
  m='1514790'>associated</span> <span m='1515450'>with</span> <span
  m='1515670'>the</span> <span m='1515750'>fact</span> <span
  m='1516180'>that</span> <span m='1516800'>we're</span> <span
  m='1517030'>basically</span> <span m='1517360'>taking</span> <span
  m='1517700'>least</span> <span m='1517940'>squares</span> <span
  m='1518960'>estimates,</span> <span m='1521380'>so</span> <span
  m='1521530'>we</span> <span m='1521620'>have</span> <span
  m='1521740'>the</span> <span m='1521820'>quadratic</span> <span
  m='1522380'>form</span> <span m='1522950'>associated</span> <span
  m='1523560'>with</span> <span m='1524070'>the</span> <span
  m='1524150'>overall</span> <span m='1524490'>process.</span> <span
  m='1528800'>There's</span> <span m='1531540'>another</span> <span
  m='1531810'>case</span> <span m='1532080'>study</span> <span
  m='1532470'>that</span> <span m='1533790'>I'll</span> <span
  m='1533950'>be</span> <span m='1534060'>happy</span> <span
  m='1534490'>to</span> <span m='1534900'>discuss</span> <span
  m='1538750'>after</span> <span m='1539130'>class</span> <span
  m='1539620'>or</span> <span m='1539760'>during</span> <span
  m='1540020'>office</span> <span m='1540420'>hours.</span> <span m='1540630'>I
  don't think</span> <span m='1540860'>we</span> <span m='1540940'>have</span>
  <span m='1541060'>time</span> <span m='1541350'>today</span> <span
  m='1541620'>during</span> <span m='1541800'>the</span> <span
  m='1541890'>lecture.</span> <span m='1542220'>But</span> <span
  m='1542360'>it</span> <span m='1542570'>concerns</span> <span
  m='1543540'>exchange</span> <span m='1544180'>rate</span> <span
  m='1544480'>regimes.</span> </p><p><span m='1545650'>And</span> <span
  m='1546250'>the</span> <span m='1546360'>second</span> <span
  m='1546710'>case</span> <span m='1546970'>study</span> <span
  m='1548390'>looks</span> <span m='1548690'>at</span> <span
  m='1549940'>the</span> <span m='1550070'>Chinese</span> <span
  m='1550620'>Yuan,</span> <span m='1551310'>which</span> <span
  m='1551510'>was</span> <span m='1551660'>basically</span> <span
  m='1552020'>pegged</span> <span m='1552420'>to</span> <span
  m='1552510'>the</span> <span m='1552640'>dollar</span> <span
  m='1554410'>for</span> <span m='1554590'>many</span> <span
  m='1554980'>years.</span> <span m='1555960'>And</span> <span
  m='1556420'>then</span> <span m='1558030'>I</span> <span
  m='1558150'>guess</span> <span m='1558360'>through</span> <span
  m='1559080'>political</span> <span m='1559570'>influence</span> <span
  m='1560190'>from</span> <span m='1560360'>other</span> <span
  m='1560510'>countries,</span> <span m='1561680'>they</span> <span
  m='1562430'>started</span> <span m='1562710'>to</span> <span
  m='1562790'>let</span> <span m='1563020'>the</span> <span
  m='1563680'>Yuan</span> <span m='1564680'>vary</span> <span
  m='1565110'>from</span> <span m='1565280'>the Dollar,</span> <span
  m='1566172'>but</span> <span m='1566840'>perhaps</span> <span
  m='1567270'>pegged</span> <span m='1567600'>it</span> <span
  m='1567710'>to</span> <span m='1567800'>some</span> <span
  m='1568070'>basket</span> <span m='1568560'>of</span> <span
  m='1568650'>securities</span> <span m='1569640'>of</span> <span
  m='1569850'>currencies.</span> <span m='1570690'>And</span> <span
  m='1570870'>so</span> <span m='1570980'>how</span> <span
  m='1571200'>would</span> <span m='1571320'>you</span> <span
  m='1571460'>determine</span> <span m='1571970'>what</span> <span
  m='1572240'>that</span> <span m='1572560'>basket</span> <span
  m='1572950'>of</span> <span m='1573010'>currencies</span> <span
  m='1573540'>is?</span> </p><p><span m='1573700'>Well,</span> <span
  m='1574830'>there are</span> <span m='1575100'>regression</span> <span
  m='1575550'>methods</span> <span m='1576250'>that</span> <span
  m='1576430'>have</span> <span m='1576630'>been</span> <span
  m='1577270'>developed</span> <span m='1577840'>by</span> <span
  m='1578610'>economists</span> <span m='1579490'>that</span> <span
  m='1579610'>help</span> <span m='1579840'>you</span> <span
  m='1579930'>do</span> <span m='1580090'>that.</span> <span
  m='1580650'>And</span> <span m='1580880'>that</span> <span
  m='1581210'>case</span> <span m='1581430'>study</span> <span
  m='1581680'>goes</span> <span m='1581960'>through</span> <span
  m='1582430'>the</span> <span m='1582570'>analysis</span> <span
  m='1583130'>of</span> <span m='1583270'>that.</span> <span
  m='1583480'>So</span> <span m='1584130'>check</span> <span
  m='1584370'>that</span> <span m='1584550'>out</span> <span
  m='1584830'>to</span> <span m='1584930'>see</span> <span
  m='1585130'>how</span> <span m='1585280'>you</span> <span
  m='1585410'>can</span> <span m='1585550'>get</span> <span
  m='1585820'>immediate</span> <span m='1586240'>access</span> <span
  m='1586770'>to</span> <span m='1587040'>currency</span> <span
  m='1587550'>data</span> <span m='1588220'>and</span> <span
  m='1588450'>be</span> <span m='1588600'>fitting</span> <span
  m='1588910'>these</span> <span m='1589110'>regression</span> <span
  m='1589580'>models</span> <span m='1590010'>and</span> <span
  m='1590130'>looking</span> <span m='1590420'>at</span> <span
  m='1590530'>the</span> <span m='1590600'>different</span> <span
  m='1590860'>results</span> <span m='1591250'>and</span> <span
  m='1591320'>trying</span> <span m='1591580'>to</span> <span
  m='1591670'>evaluate those.</span> </p><p><span m='1598720'>So</span> <span
  m='1598830'>let's</span> <span m='1599120'>turn</span> <span
  m='1599560'>now</span> <span m='1605180'>to</span> <span
  m='1605640'>the</span> <span m='1605720'>main</span> <span
  m='1605990'>topic--</span> <span m='1608170'>let's</span> <span
  m='1609100'>see</span> <span m='1609460'>here--</span> <span
  m='1612910'>which</span> <span m='1613070'>is</span> <span
  m='1613210'>time</span> <span m='1613520'>series</span> <span
  m='1613830'>analysis.</span> <span m='1621250'>Today</span> <span
  m='1623250'>in</span> <span m='1623330'>the</span> <span
  m='1623400'>rest</span> <span m='1623600'>of</span> <span
  m='1623640'>the</span> <span m='1623710'>lecture,</span> <span
  m='1624080'>I</span> <span m='1624120'>want</span> <span m='1624320'>to</span>
  <span m='1624360'>talk</span> <span m='1624610'>about</span> <span
  m='1625550'>univariate</span> <span m='1626300'>time</span> <span
  m='1626580'>series</span> <span m='1626940'>analysis.</span> <span
  m='1629040'>And</span> <span m='1629300'>so</span> <span
  m='1629850'>we're</span> <span m='1630040'>thinking</span> <span
  m='1630400'>of</span> <span m='1631540'>basically</span> <span
  m='1631740'>a</span> <span m='1631830'>random</span> <span
  m='1632210'>variable</span> <span m='1632670'>that is</span> <span
  m='1632870'>observed</span> <span m='1633230'>over</span> <span
  m='1633430'>time</span> <span m='1634390'>and</span> <span
  m='1634580'>its</span> <span m='1635550'>discrete</span> <span
  m='1636000'>time</span> <span m='1636620'>process.</span> <span
  m='1637720'>And</span> <span m='1638460'>we'll</span> <span
  m='1640070'>introduce</span> <span m='1640590'>you</span> <span
  m='1640750'>to</span> <span m='1641610'>the</span> <span
  m='1641760'>Wold</span> <span m='1642230'>representation</span> <span
  m='1643140'>theorem</span> <span m='1644290'>and</span> <span
  m='1644650'>definitions</span> <span m='1645130'>of</span> <span
  m='1646060'>stationarity</span> <span m='1646435'>and</span> <span
  m='1646810'>its</span> <span m='1646990'>relationship</span> <span
  m='1647520'>there.</span> </p><p><span m='1648340'>Then,</span> <span
  m='1648750'>look</span> <span m='1648980'>at</span> <span
  m='1649140'>the</span> <span m='1649270'>classic</span> <span
  m='1649830'>models</span> <span m='1650230'>of</span> <span
  m='1650810'>how</span> <span m='1650920'>autoregressive</span> <span
  m='1651430'>moving</span> <span m='1651770'>average</span> <span
  m='1652170'>models.</span> <span m='1654120'>And</span> <span
  m='1654740'>then</span> <span m='1654990'>extending</span> <span
  m='1655550'>those</span> <span m='1655840'>to</span> <span
  m='1655950'>nonstationarity</span> <span m='1656920'>with</span> <span
  m='1657130'>integrated</span> <span m='1658290'>autoregressive</span> <span
  m='1659140'>moving</span> <span m='1659420'>average</span> <span
  m='1659720'>models.</span> <span m='1660430'>And</span> <span
  m='1660580'>then</span> <span m='1660760'>finally,</span> <span
  m='1661320'>talk</span> <span m='1661560'>about</span> <span
  m='1662480'>estimating</span> <span m='1663460'>stationary</span> <span
  m='1664060'>models</span> <span m='1664440'>and</span> <span
  m='1664540'>how</span> <span m='1664740'>we</span> <span
  m='1664880'>test</span> <span m='1665220'>for</span> <span
  m='1665370'>stationarity.</span> </p><p><span m='1667630'>So</span> <span
  m='1668090'>let's</span> <span m='1669750'>begin</span> <span
  m='1671590'>from</span> <span m='1672650'>basically</span> <span
  m='1672990'>first</span> <span m='1673230'>principles.</span> <span
  m='1674740'>We</span> <span m='1674990'>have</span> <span m='1675160'>a</span>
  <span m='1675300'>stochastic</span> <span m='1675860'>process,</span> <span
  m='1677720'>a</span> <span m='1678030'>discrete</span> <span
  m='1678470'>time</span> <span m='1678800'>stochastic</span> <span
  m='1679310'>process,</span> <span m='1680020'>x,</span> <span
  m='1681040'>which</span> <span m='1681580'>consists</span> <span
  m='1683040'>of</span> <span m='1683170'>random</span> <span
  m='1683620'>variables</span> <span m='1684440'>indexed</span> <span
  m='1684880'>by</span> <span m='1685060'>time.</span> <span
  m='1686160'>And</span> <span m='1686300'>we're</span> <span
  m='1686380'>thinking</span> <span m='1686680'>now</span> <span
  m='1686850'>discrete</span> <span m='1687330'>time.</span> <span
  m='1689110'>The</span> <span m='1689300'>stochastic</span> <span
  m='1689770'>behavior</span> <span m='1690540'>of</span> <span
  m='1690750'>this</span> <span m='1690990'>sequence</span> <span
  m='1691820'>is</span> <span m='1692010'>determined</span> <span
  m='1692480'>by</span> <span m='1692620'>specifying</span> <span
  m='1693410'>the</span> <span m='1693990'>density</span> <span
  m='1694940'>or</span> <span m='1695130'>probability</span> <span
  m='1695700'>mass</span> <span m='1696050'>functions</span> <span
  m='1696950'>for</span> <span m='1697190'>all</span> <span
  m='1697520'>finite</span> <span m='1698090'>collections</span> <span
  m='1699350'>of</span> <span m='1700090'>time</span> <span
  m='1700530'>indexes.</span> </p><p><span m='1702220'>And</span> <span
  m='1703640'>so</span> <span m='1704070'>if</span> <span m='1704320'>we</span>
  <span m='1704480'>could</span> <span m='1704660'>specify</span> <span
  m='1705330'>all</span> <span m='1705600'>finite</span> <span
  m='1706040'>dimensional</span> <span m='1706490'>distributions</span> <span
  m='1707110'>of</span> <span m='1707190'>this</span> <span
  m='1707370'>process,</span> <span m='1707960'>we</span> <span
  m='1708130'>would</span> <span m='1708280'>specify</span> <span
  m='1710040'>this</span> <span m='1710880'>probability</span> <span
  m='1711430'>model</span> <span m='1711710'>for</span> <span
  m='1711990'>the</span> <span m='1712140'>stochastic</span> <span
  m='1712610'>process.</span> <span m='1715200'>Now,</span> <span
  m='1716480'>this</span> <span m='1717070'>stochastic</span> <span
  m='1717620'>process</span> <span m='1718200'>is</span> <span
  m='1718350'>strictly</span> <span m='1718890'>stationary</span> <span
  m='1720500'>if</span> <span m='1721820'>the</span> <span
  m='1721940'>density</span> <span m='1722450'>function</span> <span
  m='1723340'>for</span> <span m='1723890'>any</span> <span
  m='1725260'>collection</span> <span m='1725710'>of</span> <span
  m='1725810'>times,</span> <span m='1728760'>t1</span> <span
  m='1729250'>through</span> <span m='1729440'>tm,</span> <span
  m='1731190'>is</span> <span m='1731470'>equal</span> <span
  m='1731850'>to</span> <span m='1732680'>the</span> <span
  m='1732820'>density</span> <span m='1733350'>function</span> <span
  m='1734930'>for</span> <span m='1735150'>a</span> <span m='1735530'>tau</span>
  <span m='1735780'>translation</span> <span m='1736470'>of</span> <span
  m='1736630'>that.</span> </p><p><span m='1737440'>So</span> <span
  m='1738690'>the</span> <span m='1738820'>density</span> <span
  m='1739310'>function</span> <span m='1740060'>for</span> <span
  m='1740300'>any</span> <span m='1740530'>finite</span> <span
  m='1740890'>dimensional</span> <span m='1741320'>distribution</span> <span
  m='1743000'>is</span> <span m='1744300'>stationary</span> <span
  m='1744950'>is</span> <span m='1745120'>constant</span> <span
  m='1745710'>under</span> <span m='1746000'>arbitrary</span> <span
  m='1746530'>translations.</span> <span m='1748300'>So</span> <span
  m='1749710'>that's</span> <span m='1751040'>a</span> <span
  m='1751130'>very</span> <span m='1751360'>strong</span> <span
  m='1751760'>property.</span> <span m='1752620'>But</span> <span
  m='1754120'>it's</span> <span m='1754290'>a</span> <span
  m='1754370'>reasonable</span> <span m='1754840'>property to</span> <span
  m='1755330'>ask</span> <span m='1755670'>for</span> <span
  m='1756150'>if</span> <span m='1756360'>you're</span> <span
  m='1756620'>doing</span> <span m='1757270'>statistical</span> <span
  m='1757860'>modeling.</span> <span m='1758740'>And</span> <span
  m='1758870'>what</span> <span m='1759010'>do you</span> <span
  m='1759080'>want</span> <span m='1759220'>to</span> <span
  m='1759290'>do</span> <span m='1759460'>when</span> <span
  m='1759590'>you're</span> <span m='1760010'>estimating</span> <span
  m='1760450'>models?</span> <span m='1760940'>You want to</span> <span
  m='1761020'>estimate</span> <span m='1761440'>things</span> <span
  m='1761720'>that</span> <span m='1761820'>are</span> <span
  m='1763160'>constant.</span> <span m='1764080'>Constants</span> <span
  m='1764530'>are</span> <span m='1764830'>nice</span> <span
  m='1765090'>things</span> <span m='1765300'>to</span> <span
  m='1765790'>estimate.</span> </p><p><span m='1766570'>And</span> <span
  m='1767400'>parameters</span> <span m='1767840'>[INAUDIBLE]</span> <span
  m='1768130'>are</span> <span m='1768180'>constant.</span> <span
  m='1768520'>So</span> <span m='1768670'>we</span> <span
  m='1768850'>really</span> <span m='1769100'>want</span> <span
  m='1770340'>the</span> <span m='1770490'>underlying</span> <span
  m='1771020'>structure</span> <span m='1771550'>of</span> <span
  m='1771730'>the</span> <span m='1772270'>distributions</span> <span
  m='1772930'>to</span> <span m='1773050'>be</span> <span m='1774610'>the</span>
  <span m='1774730'>same.</span> <span m='1784960'>That</span> <span
  m='1785250'>was</span> <span m='1785420'>strict</span> <span
  m='1785960'>stationarity,</span> <span m='1786720'>which</span> <span
  m='1787040'>requires</span> <span m='1787730'>knowledge</span> <span
  m='1788820'>of</span> <span m='1789450'>the</span> <span
  m='1789700'>entire</span> <span m='1790150'>distribution</span> <span
  m='1791510'>of</span> <span m='1792740'>the</span> <span
  m='1792840'>stochastic</span> <span m='1793260'>process.</span> <span
  m='1795020'>We're</span> <span m='1795170'>now</span> <span
  m='1795360'>going</span> <span m='1795590'>to</span> <span
  m='1795870'>introduce</span> <span m='1796290'>a</span> <span
  m='1796410'>weaker</span> <span m='1796750'>definition,</span> <span
  m='1797190'>which</span> <span m='1797340'>is</span> <span
  m='1797460'>covariance</span> <span m='1798000'>stationarity.</span> <span
  m='1799660'>And</span> <span m='1800160'>a</span> <span
  m='1800270'>covariant</span> <span m='1800740'>stationary</span> <span
  m='1801780'>process</span> <span m='1802960'>has</span> <span
  m='1804380'>a</span> <span m='1804500'>constant</span> <span
  m='1805070'>mean,</span> <span m='1805920'>mu,</span> <span
  m='1806480'>a</span> <span m='1806760'>constant</span> <span
  m='1807290'>variance,</span> <span m='1808330'>sigma</span> <span
  m='1808660'>squared,</span> <span m='1809850'>and</span> <span
  m='1810350'>a</span> <span m='1810470'>covariance</span> <span
  m='1813680'>over</span> <span m='1813960'>increments</span> <span
  m='1814490'>tau,</span> <span m='1815630'>given</span> <span
  m='1815880'>by</span> <span m='1816120'>a</span> <span
  m='1816180'>function</span> <span m='1816550'>gamma</span> <span
  m='1816960'>of tau</span> <span m='1817890'>that</span> <span
  m='1818180'>is</span> <span m='1818280'>also</span> <span
  m='1818830'>constant.</span> </p><p><span m='1820500'>Gamma</span> <span
  m='1821440'>isn't</span> <span m='1821700'>a</span> <span
  m='1821760'>constant</span> <span m='1822280'>function,</span> <span
  m='1822640'>but</span> <span m='1823010'>basically</span> <span
  m='1824730'>for</span> <span m='1824920'>all</span> <span
  m='1825190'>t,</span> <span m='1826960'>covariance</span> <span
  m='1827370'>of</span> <span m='1827460'>xt,</span> <span m='1827840'>xt</span>
  <span m='1828220'>plus</span> <span m='1828420'>tau</span> <span
  m='1829000'>is</span> <span m='1829230'>this</span> <span
  m='1829440'>gamma</span> <span m='1829760'>of tau</span> <span
  m='1830000'>function.</span> <span m='1831900'>And</span> <span
  m='1833120'>we</span> <span m='1833400'>also</span> <span
  m='1834020'>can</span> <span m='1834360'>introduce</span> <span
  m='1835510'>the</span> <span m='1836560'>autocorrelation</span> <span
  m='1837560'>function</span> <span m='1838080'>of</span> <span
  m='1838230'>the</span> <span m='1838480'>stochastic</span> <span
  m='1839210'>process,</span> <span m='1840470'>rho of</span> <span
  m='1840970'>tau.</span> <span m='1841830'>And</span> <span
  m='1842030'>so</span> <span m='1844180'>the</span> <span
  m='1844790'>correlation</span> <span m='1846250'>of</span> <span
  m='1847400'>two</span> <span m='1847660'>random</span> <span
  m='1848090'>variables</span> <span m='1849120'>is</span> <span
  m='1849360'>the</span> <span m='1849490'>covariance</span> <span
  m='1850170'>of</span> <span m='1850270'>those</span> <span
  m='1850520'>random</span> <span m='1850820'>variables</span> <span
  m='1851740'>divided</span> <span m='1852220'>by</span> <span
  m='1853160'>the</span> <span m='1853290'>square</span> <span
  m='1853680'>root</span> <span m='1854660'>of</span> <span
  m='1855030'>the</span> <span m='1855140'>product</span> <span
  m='1855480'>of</span> <span m='1855540'>the</span> <span
  m='1855590'>variances.</span> </p><p><span m='1857340'>And</span> <span
  m='1857900'>[INAUDIBLE]</span> <span m='1858420'>I</span> <span
  m='1858660'>think</span> <span m='1858850'>introduced</span> <span
  m='1859330'>that</span> <span m='1859500'>a</span> <span
  m='1859540'>bit.</span> <span m='1861180'>in</span> <span
  m='1861260'>one</span> <span m='1861400'>of</span> <span
  m='1861440'>his</span> <span m='1861610'>lectures,</span> <span
  m='1862060'>where we were</span> <span m='1862380'>talking</span> <span
  m='1862680'>about</span> <span m='1864220'>the</span> <span
  m='1864360'>correlation</span> <span m='1865140'>function.</span> <span
  m='1866890'>But</span> <span m='1868000'>essentially,</span> <span
  m='1868560'>the</span> <span m='1868670'>correlation</span> <span
  m='1869320'>function</span> <span m='1869810'>is</span> <span
  m='1871610'>if</span> <span m='1871850'>you</span> <span
  m='1872200'>standardize</span> <span m='1873310'>the</span> <span
  m='1873420'>data</span> <span m='1874250'>or</span> <span
  m='1874380'>the</span> <span m='1874650'>random</span> <span
  m='1874980'>variables</span> <span m='1875400'>to</span> <span
  m='1875490'>have</span> <span m='1875630'>mean</span> <span
  m='1875730'>0--</span> <span m='1876390'>so</span> <span
  m='1876530'>subtract</span> <span m='1877020'>off</span> <span
  m='1877210'>the</span> <span m='1877300'>means</span> <span
  m='1877690'>and</span> <span m='1877790'>then</span> <span
  m='1877910'>divide</span> <span m='1878260'>through</span> <span
  m='1878540'>by</span> <span m='1879480'>their</span> <span
  m='1879780'>standard</span> <span m='1880170'>deviations.</span> <span
  m='1881040'>So</span> <span m='1881820'>those</span> <span
  m='1882150'>translated</span> <span m='1883290'>variables</span> <span
  m='1883910'>have</span> <span m='1884660'>mean</span> <span
  m='1884820'>0</span> <span m='1885130'>and</span> <span
  m='1885230'>variance</span> <span m='1885570'>1.</span> <span
  m='1886410'>Then</span> <span m='1886720'>the</span> <span
  m='1887160'>correlation</span> <span m='1887670'>coefficient</span> <span
  m='1888290'>is</span> <span m='1888890'>the</span> <span
  m='1889000'>covariance</span> <span m='1889520'>between</span> <span
  m='1889850'>those</span> <span m='1890030'>standardized</span> <span
  m='1890700'>random</span> <span m='1891020'>variables.</span> </p><p><span
  m='1895020'>So</span> <span m='1895170'>this</span> <span
  m='1895350'>is</span> <span m='1896290'>going</span> <span
  m='1896410'>to</span> <span m='1896480'>come</span> <span
  m='1896660'>up</span> <span m='1896780'>again</span> <span
  m='1897000'>and</span> <span m='1897110'>again</span> <span
  m='1897520'>in</span> <span m='1898240'>time</span> <span
  m='1898500'>series</span> <span m='1898810'>analysis.</span> <span
  m='1900080'>Now,</span> <span m='1900210'>the</span> <span
  m='1900310'>Wold</span> <span m='1900690'>representation</span> <span
  m='1901550'>theorem</span> <span m='1902650'>is</span> <span
  m='1903730'>a</span> <span m='1903860'>very,</span> <span
  m='1904280'>very</span> <span m='1904420'>powerful</span> <span
  m='1905120'>theorem</span> <span m='1905790'>about</span> <span
  m='1906590'>covariant</span> <span m='1907000'>stationary</span> <span
  m='1907490'>processes.</span> <span m='1911110'>It</span> <span
  m='1911240'>basically</span> <span m='1911560'>states</span> <span
  m='1912440'>that</span> <span m='1912910'>if</span> <span
  m='1913110'>we</span> <span m='1913240'>have</span> <span m='1913740'>a</span>
  <span m='1913910'>zero</span> <span m='1914320'>mean</span> <span
  m='1914670'>covariance</span> <span m='1915050'>stationary</span> <span
  m='1915640'>time</span> <span m='1915980'>series,</span> <span
  m='1918300'>then</span> <span m='1919250'>it</span> <span
  m='1919430'>can</span> <span m='1919750'>be</span> <span
  m='1919930'>decomposed</span> <span m='1920960'>into</span> <span
  m='1921210'>two</span> <span m='1921420'>components</span> <span
  m='1922520'>at</span> <span m='1922650'>a</span> <span m='1922720'>very</span>
  <span m='1923520'>nice</span> <span m='1924130'>structure.</span> </p><p><span
  m='1926390'>Basically,</span> <span m='1927350'>xt</span> <span
  m='1928000'>can</span> <span m='1928170'>be</span> <span
  m='1928290'>decomposed</span> <span m='1928930'>into</span> <span
  m='1929150'>vt</span> <span m='1929740'>plus</span> <span
  m='1930010'>st.</span> <span m='1931430'>vt</span> <span m='1932180'>is</span>
  <span m='1932340'>going</span> <span m='1932460'>to</span> <span
  m='1932550'>be</span> <span m='1932790'>a</span> <span
  m='1932900'>linearly</span> <span m='1933480'>deterministic</span> <span
  m='1935180'>process,</span> <span m='1937520'>meaning</span> <span
  m='1938470'>that</span> <span m='1939250'>past</span> <span
  m='1939600'>values</span> <span m='1940030'>of vt</span> <span
  m='1941920'>perfectly</span> <span m='1942410'>predict</span> <span
  m='1943130'>what</span> <span m='1943360'>vt</span> <span
  m='1943600'>is</span> <span m='1943710'>going</span> <span
  m='1943930'>to</span> <span m='1943990'>be.</span> <span m='1944590'>So</span>
  <span m='1944710'>this</span> <span m='1944850'>could</span> <span
  m='1944980'>be</span> <span m='1945120'>like</span> <span m='1945310'>a</span>
  <span m='1945390'>linear</span> <span m='1945800'>trend</span> <span
  m='1946420'>or</span> <span m='1946970'>some</span> <span
  m='1947400'>fixed</span> <span m='1947780'>function</span> <span
  m='1948090'>of</span> <span m='1948190'>past</span> <span
  m='1948570'>values.</span> <span m='1949660'>It's</span> <span
  m='1949980'>basically</span> <span m='1950290'>a</span> <span
  m='1950370'>deterministic</span> <span m='1951140'>process.</span> <span
  m='1952320'>So</span> <span m='1952460'>there's</span> <span
  m='1952650'>nothing</span> <span m='1953140'>random</span> <span
  m='1953600'>in</span> <span m='1953720'>vt.</span> <span
  m='1954690'>It's</span> <span m='1954850'>something</span> <span
  m='1955200'>that's</span> <span m='1957390'>fixed</span> <span
  m='1959110'>without</span> <span m='1959460'>randomness.</span> </p><p><span
  m='1960710'>And</span> <span m='1960980'>st</span> <span m='1962720'>is</span>
  <span m='1964610'>a sum</span> <span m='1965440'>of</span> <span
  m='1965800'>coefficients,</span> <span m='1966510'>psi i</span> <span
  m='1967040'>times</span> <span m='1967460'>eta</span> <span
  m='1968050'>t</span> <span m='1968210'>minus</span> <span
  m='1968650'>i,</span> <span m='1970380'>where</span> <span
  m='1971000'>the</span> <span m='1973170'>eta</span> <span
  m='1974090'>t's</span> <span m='1974560'>are</span> <span
  m='1975680'>linearly</span> <span m='1976650'>unpredictable</span> <span
  m='1977330'>white</span> <span m='1977610'>noise.</span> <span
  m='1978550'>So</span> <span m='1979030'>what</span> <span
  m='1979250'>we</span> <span m='1979400'>have</span> <span
  m='1979920'>is</span> <span m='1980610'>st</span> <span m='1981280'>is</span>
  <span m='1982670'>a</span> <span m='1982810'>weighted</span> <span
  m='1983230'>average</span> <span m='1983890'>of</span> <span
  m='1984750'>white</span> <span m='1985080'>noise</span> <span
  m='1986250'>with</span> <span m='1986390'>coefficients</span> <span
  m='1986980'>given</span> <span m='1987220'>by</span> <span
  m='1987420'>the</span> <span m='1987630'>psi i.</span> <span
  m='1989850'>And</span> <span m='1990040'>the</span> <span
  m='1990270'>coefficients</span> <span m='1991110'>psi</span> <span
  m='1991440'>i such that</span> <span m='1992770'>psi</span> <span
  m='1993120'>0</span> <span m='1993380'>is</span> <span m='1993980'>1.</span>
  <span m='1996170'>And</span> <span m='1996380'>the</span> <span
  m='1996480'>sum</span> <span m='1996730'>of</span> <span
  m='1996790'>the</span> <span m='1996870'>squared</span> <span m='1997320'>psi
  i's</span> <span m='1998180'>is</span> <span m='1998520'>finite.</span>
  </p><p><span m='2001340'>And</span> <span m='2001740'>the</span> <span
  m='2002640'>white</span> <span m='2002980'>noise</span> <span
  m='2003400'>eta</span> <span m='2003590'>t--</span> <span
  m='2005550'>what's</span> <span m='2005830'>white</span> <span
  m='2006100'>noise?</span> <span m='2006540'>It</span> <span
  m='2006610'>has</span> <span m='2006940'>expectation</span> <span
  m='2007730'>zero.</span> <span m='2008930'>It</span> <span
  m='2009080'>has</span> <span m='2010410'>variance</span> <span
  m='2012120'>given</span> <span m='2012400'>by</span> <span
  m='2012670'>sigma</span> <span m='2013050'>squared</span> <span
  m='2013400'>that's</span> <span m='2013580'>constant.</span> <span
  m='2015120'>And</span> <span m='2015330'>it</span> <span
  m='2015420'>has</span> <span m='2015770'>covariance</span> <span
  m='2016750'>across</span> <span m='2017210'>different</span> <span
  m='2017710'>white</span> <span m='2018000'>noise</span> <span
  m='2018670'>elements</span> <span m='2019520'>that's</span> <span
  m='2019610'>0</span> <span m='2020170'>for</span> <span m='2020360'>all</span>
  <span m='2020530'>t</span> <span m='2021170'>and</span> <span
  m='2021340'>s.</span> <span m='2022490'>So</span> <span m='2022920'>eta</span>
  <span m='2023090'>t's</span> <span m='2024360'>are</span> <span
  m='2024630'>uncorrelated</span> <span m='2025080'>with</span> <span
  m='2025220'>themselves,</span> <span m='2025810'>and</span> <span
  m='2026010'>of</span> <span m='2026140'>course,</span> <span
  m='2026470'>they</span> <span m='2026790'>are uncorrelated</span> <span
  m='2027750'>with</span> <span m='2027950'>the</span> <span
  m='2028030'>deterministic</span> <span m='2028750'>process.</span> <span
  m='2031290'>So</span> <span m='2034000'>this</span> <span
  m='2034400'>is</span> <span m='2034510'>really</span> <span
  m='2034760'>a</span> <span m='2034800'>very,</span> <span
  m='2035160'>very</span> <span m='2035310'>powerful</span> <span
  m='2036980'>concept.</span> </p><p><span m='2038010'>If</span> <span
  m='2038260'>you</span> <span m='2038910'>are</span> <span
  m='2039420'>modeling</span> <span m='2039860'>a</span> <span
  m='2039930'>process</span> <span m='2040450'>and it</span> <span
  m='2040600'>has</span> <span m='2041930'>covariant</span> <span
  m='2042170'>stationarity,</span> <span m='2043640'>then</span> <span
  m='2044830'>there</span> <span m='2045030'>exists</span> <span
  m='2045790'>a</span> <span m='2045880'>representation</span> <span
  m='2046660'>like</span> <span m='2046870'>this</span> <span
  m='2047340'>of</span> <span m='2047510'>the</span> <span
  m='2047590'>function.</span> <span m='2047960'>So</span> <span
  m='2049300'>it's</span> <span m='2051407'>a</span> <span
  m='2051840'>very</span> <span m='2052139'>compelling</span> <span
  m='2053670'>structure,</span> <span m='2055750'>which</span> <span
  m='2056690'>we'll</span> <span m='2056940'>see</span> <span
  m='2057630'>how</span> <span m='2058130'>it</span> <span
  m='2058190'>applies</span> <span m='2058639'>in</span> <span
  m='2058710'>different</span> <span m='2058989'>circumstances.</span> <span
  m='2060659'>Now,</span> <span m='2062250'>before</span> <span
  m='2062650'>getting</span> <span m='2062909'>into</span> <span
  m='2063830'>the</span> <span m='2064000'>definition</span> <span
  m='2064540'>of</span> <span m='2064710'>autoregressive</span> <span
  m='2065650'>moving</span> <span m='2065989'>average</span> <span
  m='2066330'>models,</span> <span m='2068120'>I</span> <span
  m='2068219'>just</span> <span m='2068440'>want</span> <span
  m='2068719'>to</span> <span m='2069909'>give</span> <span
  m='2070120'>you</span> <span m='2070440'>an</span> <span
  m='2070590'>intuitive</span> <span m='2072639'>understanding</span> <span
  m='2073270'>of</span> <span m='2073340'>what's</span> <span
  m='2073560'>going</span> <span m='2073820'>on</span> <span
  m='2074110'>with</span> <span m='2074270'>the</span> <span
  m='2074350'>Wold</span> <span m='2074610'>decomposition.</span> </p><p><span
  m='2076469'>And</span> <span m='2077639'>this,</span> <span
  m='2078139'>I</span> <span m='2078290'>think,</span> <span
  m='2079060'>will</span> <span m='2079480'>help</span> <span
  m='2080260'>motivate</span> <span m='2081030'>why</span> <span
  m='2082210'>the</span> <span m='2082460'>Wold</span> <span
  m='2082699'>decomposition</span> <span m='2083360'>should</span> <span
  m='2083699'>exist</span> <span m='2084480'>from</span> <span
  m='2084630'>a</span> <span m='2084699'>mathematical</span> <span
  m='2085389'>standpoint.</span> <span m='2088170'>So</span> <span
  m='2088670'>consider</span> <span m='2090610'>just</span> <span
  m='2090909'>some</span> <span m='2091630'>univariate</span> <span
  m='2092500'>stochastic</span> <span m='2093130'>process,</span> <span
  m='2093550'>some</span> <span m='2093750'>time</span> <span
  m='2094030'>series</span> <span m='2094340'>xt</span> <span
  m='2094739'>that</span> <span m='2094850'>we</span> <span
  m='2095090'>want</span> <span m='2095340'>to</span> <span
  m='2095429'>model.</span> <span m='2096500'>And</span> <span
  m='2096929'>we</span> <span m='2097090'>believe</span> <span
  m='2097520'>that</span> <span m='2097630'>it's</span> <span
  m='2097850'>covariant</span> <span m='2098300'>stationary.</span> <span
  m='2100010'>And</span> <span m='2100200'>so</span> <span m='2100370'>we</span>
  <span m='2100520'>want</span> <span m='2100860'>to</span> <span
  m='2101110'>specify</span> <span m='2102560'>essentially</span> <span
  m='2102850'>the</span> <span m='2102960'>Wold</span> <span
  m='2103160'>decomposition</span> <span m='2103840'>of</span> <span
  m='2103980'>that.</span> </p><p><span m='2104610'>Well,</span> <span
  m='2105690'>what</span> <span m='2105850'>we</span> <span
  m='2105950'>could</span> <span m='2106110'>do</span> <span
  m='2106600'>is</span> <span m='2107080'>initialize</span> <span
  m='2107680'>a</span> <span m='2107750'>parameter</span> <span
  m='2108210'>p,</span> <span m='2108540'>the</span> <span
  m='2108640'>number</span> <span m='2108880'>of</span> <span
  m='2108970'>past</span> <span m='2109330'>observations,</span> <span
  m='2110890'>in</span> <span m='2111030'>the</span> <span
  m='2111140'>linearly</span> <span m='2112390'>deterministic</span> <span
  m='2113150'>term.</span> <span m='2115310'>And</span> <span
  m='2116940'>then</span> <span m='2118960'>estimate</span> <span
  m='2119550'>the</span> <span m='2119650'>linear</span> <span
  m='2119980'>projection</span> <span m='2120620'>of</span> <span
  m='2120910'>xt</span> <span m='2121840'>on</span> <span m='2122370'>the</span>
  <span m='2122500'>last</span> <span m='2123530'>p</span> <span
  m='2124420'>lag</span> <span m='2124890'>values.</span> <span
  m='2126140'>And</span> <span m='2126410'>so</span> <span
  m='2128130'>what</span> <span m='2128300'>I</span> <span
  m='2128350'>want</span> <span m='2128550'>to</span> <span
  m='2128620'>do</span> <span m='2128830'>is</span> <span
  m='2128980'>consider</span> <span m='2129470'>estimating</span> <span
  m='2131490'>that</span> <span m='2132270'>relationship</span> <span
  m='2133490'>using</span> <span m='2133980'>a</span> <span
  m='2134060'>sample</span> <span m='2134450'>of</span> <span
  m='2134530'>size</span> <span m='2134970'>n</span> <span
  m='2136360'>with</span> <span m='2136570'>some</span> <span
  m='2137410'>ending</span> <span m='2137890'>point,</span> <span
  m='2138790'>t0,</span> <span m='2140000'>less</span> <span
  m='2140200'>than</span> <span m='2140360'>or</span> <span
  m='2140430'>equal</span> <span m='2140650'>to</span> <span
  m='2140750'>t.</span> </p><p><span m='2142660'>And</span> <span
  m='2142860'>so</span> <span m='2144580'>we</span> <span m='2144740'>can</span>
  <span m='2144880'>consider</span> <span m='2147370'>y</span> <span
  m='2147850'>values</span> <span m='2148310'>like</span> <span
  m='2148490'>a</span> <span m='2148550'>response</span> <span
  m='2149180'>variable</span> <span m='2150010'>being</span> <span
  m='2150280'>given</span> <span m='2150650'>by</span> <span
  m='2151510'>the</span> <span m='2151620'>successive</span> <span
  m='2152220'>values</span> <span m='2153170'>of</span> <span
  m='2153410'>our</span> <span m='2155480'>time</span> <span
  m='2155830'>series.</span> <span m='2157760'>And</span> <span
  m='2158500'>so</span> <span m='2159040'>our</span> <span
  m='2159550'>response</span> <span m='2160090'>variables,</span> <span
  m='2160580'>yj,</span> <span m='2161630'>can be</span> <span
  m='2161970'>considered to</span> <span m='2162140'>be</span> <span
  m='2162290'>x</span> <span m='2162550'>t0</span> <span
  m='2163340'>minus</span> <span m='2163670'>n</span> <span
  m='2163870'>plus</span> <span m='2164200'>j.</span> <span
  m='2166040'>And</span> <span m='2166210'>define</span> <span
  m='2166860'>a</span> <span m='2167000'>y</span> <span
  m='2167250'>vector</span> <span m='2170770'>and</span> <span
  m='2171440'>a</span> <span m='2171660'>z</span> <span
  m='2171820'>matrix</span> <span m='2173700'>as</span> <span
  m='2174020'>follows.</span> </p><p><span m='2180140'>So</span> <span
  m='2180290'>we</span> <span m='2180420'>have</span> <span
  m='2181200'>values</span> <span m='2181750'>of</span> <span
  m='2181890'>our</span> <span m='2183995'>stochastic</span> <span
  m='2184790'>process</span> <span m='2185280'>in</span> <span
  m='2185410'>y.</span> <span m='2185890'>And</span> <span
  m='2186050'>then</span> <span m='2186390'>our</span> <span
  m='2186640'>z</span> <span m='2186910'>matrix,</span> <span
  m='2188540'>which</span> <span m='2188690'>is</span> <span
  m='2188880'>essentially</span> <span m='2189080'>a</span> <span
  m='2189140'>matrix</span> <span m='2189540'>of</span> <span
  m='2189640'>independent</span> <span m='2190110'>variables,</span> <span
  m='2190580'>is</span> <span m='2190800'>just</span> <span
  m='2191560'>the</span> <span m='2191650'>lagged</span> <span
  m='2192060'>values</span> <span m='2193120'>of</span> <span
  m='2194490'>this</span> <span m='2194700'>process.</span> <span
  m='2196000'>So</span> <span m='2196110'>let's</span> <span
  m='2196250'>apply</span> <span m='2196980'>ordinary</span> <span
  m='2197350'>least</span> <span m='2197530'>squares</span> <span
  m='2197940'>to</span> <span m='2198040'>specify</span> <span
  m='2198430'>the</span> <span m='2198550'>projection.</span> <span
  m='2200530'>This</span> <span m='2200700'>projection</span> <span
  m='2201260'>matrix</span> <span m='2201770'>should</span> <span
  m='2202380'>be</span> <span m='2202510'>familiar</span> <span
  m='2202890'>now.</span> <span m='2203810'>And</span> <span
  m='2204520'>that</span> <span m='2204850'>basically</span> <span
  m='2205140'>gives</span> <span m='2205380'>us</span> <span
  m='2205560'>a</span> <span m='2206510'>prediction</span> <span
  m='2207240'>of</span> <span m='2207910'>y</span> <span m='2208150'>hat</span>
  <span m='2209160'>depending</span> <span m='2209610'>on</span> <span
  m='2210110'>p lags.</span> </p><p><span m='2211680'>And</span> <span
  m='2211750'>we</span> <span m='2211840'>can</span> <span
  m='2211970'>compute</span> <span m='2212430'>the</span> <span
  m='2212540'>projection</span> <span m='2213130'>residual</span> <span
  m='2214750'>from</span> <span m='2215110'>that</span> <span
  m='2215600'>fit.</span> <span m='2219660'>Well,</span> <span
  m='2220050'>we</span> <span m='2220250'>can</span> <span
  m='2220680'>conduct</span> <span m='2221450'>time</span> <span
  m='2222000'>series</span> <span m='2222400'>methods</span> <span
  m='2223450'>to</span> <span m='2223810'>analyze</span> <span
  m='2224450'>these</span> <span m='2224680'>residuals,</span> <span
  m='2226260'>which</span> <span m='2226430'>we'll</span> <span
  m='2226600'>be</span> <span m='2226930'>introducing</span> <span
  m='2227460'>here</span> <span m='2228470'>in</span> <span m='2228540'>a</span>
  <span m='2228590'>few</span> <span m='2228780'>minutes,</span> <span
  m='2230030'>to</span> <span m='2230170'>specify</span> <span
  m='2230750'>a</span> <span m='2230810'>moving</span> <span
  m='2231150'>average</span> <span m='2231590'>model.</span> <span
  m='2233170'>We</span> <span m='2233320'>can</span> <span
  m='2233520'>then</span> <span m='2233720'>have</span> <span
  m='2233970'>estimates</span> <span m='2234410'>of</span> <span
  m='2234500'>the</span> <span m='2234630'>underlying</span> <span
  m='2235450'>coefficients</span> <span m='2236180'>psi</span> <span
  m='2237320'>and</span> <span m='2237790'>estimates</span> <span
  m='2238310'>of</span> <span m='2238510'>these</span> <span
  m='2239700'>residuals,</span> <span m='2241040'>eta t.</span> <span
  m='2242700'>And</span> <span m='2242860'>then</span> <span
  m='2242990'>we</span> <span m='2243110'>can</span> <span
  m='2244020'>evaluate</span> <span m='2244610'>whether</span> <span
  m='2244860'>this</span> <span m='2245090'>is</span> <span m='2245170'>a</span>
  <span m='2245230'>good</span> <span m='2245420'>model</span> <span
  m='2245760'>or</span> <span m='2245810'>not.</span> </p><p><span
  m='2247300'>What</span> <span m='2247600'>does</span> <span
  m='2247930'>it</span> <span m='2248010'>mean</span> <span
  m='2248220'>to</span> <span m='2248310'>be</span> <span m='2248540'>an</span>
  <span m='2248620'>appropriate</span> <span m='2249120'>model?</span> <span
  m='2249430'>Well,</span> <span m='2250470'>the</span> <span
  m='2250690'>residual</span> <span m='2251290'>should</span> <span
  m='2251620'>be</span> <span m='2251770'>orthogonal</span> <span
  m='2252840'>to</span> <span m='2254370'>longer</span> <span
  m='2254870'>lags</span> <span m='2255250'>than</span> <span
  m='2256380'>t</span> <span m='2256560'>minus</span> <span
  m='2256970'>s,</span> <span m='2257810'>or</span> <span
  m='2257950'>longer</span> <span m='2258240'>lags</span> <span
  m='2258540'>than</span> <span m='2258690'>p.</span> <span
  m='2259550'>So</span> <span m='2260020'>we</span> <span
  m='2260280'>basically</span> <span m='2260590'>shouldn't</span> <span
  m='2260860'>have</span> <span m='2261800'>any</span> <span
  m='2262260'>dependence</span> <span m='2262850'>of</span> <span
  m='2263020'>our</span> <span m='2263200'>residuals</span> <span
  m='2263840'>on</span> <span m='2265940'>lags</span> <span
  m='2266430'>of</span> <span m='2266960'>the</span> <span
  m='2268410'>stochastic</span> <span m='2268940'>process</span> <span
  m='2269390'>that</span> <span m='2269500'>weren't</span> <span
  m='2269710'>included</span> <span m='2270140'>in the model.</span> <span
  m='2271550'>Those</span> <span m='2271730'>should</span> <span
  m='2271910'>be</span> <span m='2272690'>orthogonal.</span> </p><p><span
  m='2274850'>And</span> <span m='2275520'>the</span> <span
  m='2275880'>eta</span> <span m='2276230'>t</span> <span
  m='2276460'>hats</span> <span m='2277260'>should</span> <span
  m='2277460'>be</span> <span m='2277580'>consistent</span> <span
  m='2278110'>with</span> <span m='2278240'>white</span> <span
  m='2278520'>noise.</span> <span m='2281070'>So</span> <span
  m='2282000'>those</span> <span m='2283480'>issues</span> <span
  m='2283800'>can</span> <span m='2283940'>be</span> <span
  m='2284070'>evaluated.</span> <span m='2285220'>And</span> <span
  m='2285800'>if</span> <span m='2285930'>there's</span> <span
  m='2286130'>evidence</span> <span m='2286530'>otherwise,</span> <span
  m='2287620'>then</span> <span m='2288120'>we</span> <span
  m='2288240'>can</span> <span m='2288400'>change</span> <span
  m='2289080'>the</span> <span m='2289200'>specification</span> <span
  m='2289880'>of</span> <span m='2289960'>the</span> <span
  m='2290030'>model.</span> <span m='2290720'>We</span> <span
  m='2290840'>can</span> <span m='2290980'>add</span> <span
  m='2291230'>additional</span> <span m='2291710'>lags.</span> <span
  m='2293090'>We</span> <span m='2293280'>can</span> <span
  m='2293740'>add</span> <span m='2293980'>additional</span> <span
  m='2294340'>deterministic</span> <span m='2295070'>variables</span> <span
  m='2295870'>if</span> <span m='2296130'>we</span> <span m='2298130'>can</span>
  <span m='2298960'>identify</span> <span m='2299970'>what</span> <span
  m='2300280'>those</span> <span m='2300480'>might</span> <span
  m='2300750'>be.</span> <span m='2301570'>And</span> <span
  m='2302310'>proceed</span> <span m='2302610'>with</span> <span
  m='2302670'>this</span> <span m='2302810'>process.</span> </p><p><span
  m='2303260'>But</span> <span m='2303710'>essentially</span> <span
  m='2304200'>that</span> <span m='2304530'>is</span> <span
  m='2305710'>how</span> <span m='2306030'>the</span> <span
  m='2306790'>Wold</span> <span m='2307330'>decomposition</span> <span
  m='2308490'>could</span> <span m='2308710'>be</span> <span
  m='2308840'>implemented.</span> <span m='2310740'>And</span> <span
  m='2311130'>theoretically,</span> <span m='2312370'>as</span> <span
  m='2313520'>our</span> <span m='2314030'>sample</span> <span
  m='2314580'>gets</span> <span m='2314840'>large,</span> <span
  m='2315250'>if</span> <span m='2315360'>we're</span> <span
  m='2315540'>observing</span> <span m='2315920'>this</span> <span
  m='2316090'>time</span> <span m='2316380'>series</span> <span
  m='2318560'>for</span> <span m='2318790'>a</span> <span
  m='2318850'>long</span> <span m='2319140'>time,</span> <span
  m='2319610'>then</span> <span m='2322320'>well</span> <span
  m='2322460'>certainly</span> <span m='2322850'>the</span> <span
  m='2322980'>limit</span> <span m='2323280'>of</span> <span
  m='2323480'>the</span> <span m='2323590'>projections</span> <span
  m='2325090'>as</span> <span m='2325540'>p,</span> <span m='2325830'>the</span>
  <span m='2325930'>number</span> <span m='2326160'>of</span> <span
  m='2326260'>lags</span> <span m='2326620'>we</span> <span
  m='2326770'>include,</span> <span m='2327820'>gets</span> <span
  m='2328060'>large,</span> <span m='2329110'>should</span> <span
  m='2329400'>be</span> <span m='2329840'>essentially</span> <span
  m='2330800'>the</span> <span m='2330990'>projection</span> <span
  m='2332380'>of</span> <span m='2332850'>our</span> <span
  m='2333040'>data</span> <span m='2333610'>on</span> <span
  m='2334240'>its</span> <span m='2334440'>history.</span> <span
  m='2335270'>And</span> <span m='2335470'>that,</span> <span
  m='2335690'>in</span> <span m='2335770'>fact,</span> <span
  m='2336180'>is</span> <span m='2336950'>the</span> <span
  m='2337360'>projection</span> <span m='2338770'>corresponding</span> <span
  m='2339650'>to</span> <span m='2340490'>defining</span> <span
  m='2341970'>the</span> <span m='2342070'>coefficient's</span> <span
  m='2342830'>psi i.</span> </p><p><span m='2343950'>And</span> <span
  m='2344150'>so</span> <span m='2344460'>in</span> <span m='2344620'>the</span>
  <span m='2344720'>limit,</span> <span m='2347350'>that</span> <span
  m='2347660'>projection</span> <span m='2348060'>will</span> <span
  m='2348320'>converge</span> <span m='2349400'>and</span> <span
  m='2350130'>it</span> <span m='2350260'>will</span> <span
  m='2350410'>converge</span> <span m='2350870'>in</span> <span
  m='2350920'>the</span> <span m='2351020'>sense</span> <span
  m='2351320'>that</span> <span m='2351420'>the</span> <span
  m='2351510'>coefficients</span> <span m='2352320'>of</span> <span
  m='2352600'>the</span> <span m='2352700'>projection</span> <span
  m='2354000'>definition</span> <span m='2355070'>correspond</span> <span
  m='2355570'>to</span> <span m='2355620'>the</span> <span m='2355800'>psi
  i.</span> <span m='2357320'>And</span> <span m='2358800'>now</span> <span
  m='2360430'>if</span> <span m='2362140'>p</span> <span m='2363290'>goes</span>
  <span m='2363630'>to</span> <span m='2363820'>infinity</span> <span
  m='2364430'>is</span> <span m='2364570'>required,</span> <span
  m='2366600'>now</span> <span m='2366790'>p</span> <span
  m='2367050'>means</span> <span m='2367750'>that</span> <span
  m='2368130'>there's</span> <span m='2368370'>basically</span> <span
  m='2368720'>a</span> <span m='2368820'>long</span> <span
  m='2369200'>term</span> <span m='2369510'>dependence</span> <span
  m='2370250'>in</span> <span m='2370520'>the</span> <span
  m='2370880'>process.</span> <span m='2374310'>Basically,</span> <span
  m='2374570'>it</span> <span m='2374680'>doesn't</span> <span
  m='2374950'>stop</span> <span m='2375270'>at</span> <span m='2375320'>a</span>
  <span m='2375380'>given</span> <span m='2375590'>lag.</span> <span
  m='2377120'>The</span> <span m='2377300'>dependence</span> <span
  m='2379860'>persists</span> <span m='2380370'>over</span> <span
  m='2380570'>time.</span> <span m='2381410'>Then</span> <span
  m='2381560'>we</span> <span m='2381690'>may</span> <span
  m='2381840'>require</span> <span m='2382320'>that</span> <span
  m='2382450'>p</span> <span m='2382700'>goes</span> <span m='2382970'>to</span>
  <span m='2383120'>infinity.</span> </p><p><span m='2385580'>Now,</span> <span
  m='2385630'>what</span> <span m='2385790'>happens</span> <span
  m='2386090'>when</span> <span m='2386250'>p</span> <span
  m='2386410'>goes</span> <span m='2386630'>to</span> <span
  m='2386740'>infinity?</span> <span m='2387360'>Well,</span> <span
  m='2388230'>if</span> <span m='2388310'>you</span> <span
  m='2388410'>let</span> <span m='2388550'>p</span> <span m='2388660'>go</span>
  <span m='2388760'>to</span> <span m='2388820'>infinity</span> <span
  m='2389280'>too</span> <span m='2389450'>quickly,</span> <span
  m='2390350'>you</span> <span m='2390480'>run</span> <span
  m='2390640'>out</span> <span m='2390770'>of</span> <span
  m='2390850'>degrees</span> <span m='2391160'>of</span> <span
  m='2391230'>freedom</span> <span m='2391410'>to</span> <span
  m='2391700'>estimate your</span> <span m='2391990'>models.</span> <span
  m='2393520'>And</span> <span m='2393710'>so</span> <span
  m='2395580'>from</span> <span m='2395770'>an</span> <span
  m='2395850'>implementation</span> <span m='2396580'>standpoint,</span> <span
  m='2397220'>you</span> <span m='2397310'>need</span> <span
  m='2397590'>to</span> <span m='2397970'>let</span> <span
  m='2398260'>p/n</span> <span m='2399450'>go</span> <span m='2399650'>to</span>
  <span m='2399710'>0</span> <span m='2400130'>so</span> <span
  m='2400340'>that</span> <span m='2401200'>you</span> <span
  m='2401340'>have</span> <span m='2402200'>essentially</span> <span
  m='2407760'>more</span> <span m='2408010'>data</span> <span
  m='2408480'>than</span> <span m='2408650'>parameters</span> <span
  m='2409180'>that</span> <span m='2409300'>you're</span> <span
  m='2409460'>estimating.</span> <span m='2410710'>And</span> <span
  m='2411630'>so</span> <span m='2411780'>that</span> <span
  m='2412530'>is</span> <span m='2412580'>required.</span> </p><p><span
  m='2413800'>And</span> <span m='2414750'>in</span> <span
  m='2415060'>time</span> <span m='2415420'>series</span> <span
  m='2416410'>modeling,</span> <span m='2418320'>what</span> <span
  m='2418670'>we</span> <span m='2418860'>look</span> <span
  m='2419070'>for</span> <span m='2419440'>are</span> <span
  m='2419800'>models</span> <span m='2420180'>where</span> <span
  m='2422900'>finite</span> <span m='2423350'>values</span> <span
  m='2423580'>of</span> <span m='2423690'>p</span> <span m='2424630'>are</span>
  <span m='2424820'>required.</span> <span m='2426930'>So</span> <span
  m='2427000'>we're</span> <span m='2427160'>only</span> <span
  m='2427350'>estimating</span> <span m='2427470'>a</span> <span
  m='2427520'>finite</span> <span m='2427750'>number</span> <span
  m='2428050'>of</span> <span m='2428120'>parameters.</span> <span
  m='2428900'>Or</span> <span m='2429660'>if</span> <span m='2429820'>we</span>
  <span m='2429910'>have</span> <span m='2430020'>a</span> <span
  m='2430080'>moving</span> <span m='2430410'>average</span> <span
  m='2430770'>model</span> <span m='2431680'>which</span> <span
  m='2431920'>has</span> <span m='2432450'>coefficients</span> <span
  m='2433370'>that</span> <span m='2433630'>are</span> <span
  m='2434030'>infinite</span> <span m='2434420'>number,</span> <span
  m='2435300'>perhaps</span> <span m='2436590'>those</span> <span
  m='2436930'>can</span> <span m='2437070'>be</span> <span
  m='2437180'>defined</span> <span m='2437700'>by</span> <span
  m='2437880'>a</span> <span m='2437940'>small</span> <span
  m='2438310'>number</span> <span m='2438580'>of</span> <span
  m='2438650'>parameters.</span> <span m='2440430'>So</span> <span
  m='2441850'>we'll</span> <span m='2442020'>be</span> <span
  m='2442120'>looking</span> <span m='2442380'>for</span> <span
  m='2443030'>that</span> <span m='2443230'>kind</span> <span
  m='2443450'>of</span> <span m='2443980'>feature</span> <span
  m='2444590'>in</span> <span m='2444840'>different</span> <span
  m='2445110'>models.</span> </p><p><span m='2449230'>Let's</span> <span
  m='2449470'>turn</span> <span m='2449720'>to</span> <span
  m='2449940'>talking</span> <span m='2450220'>about</span> <span
  m='2450690'>the</span> <span m='2450890'>lag</span> <span
  m='2451180'>operator.</span> <span m='2452620'>The</span> <span
  m='2452730'>lag</span> <span m='2453020'>operator</span> <span
  m='2453550'>is</span> <span m='2455130'>a</span> <span
  m='2455240'>fundamental</span> <span m='2455700'>tool</span> <span
  m='2456250'>in</span> <span m='2456430'>time</span> <span
  m='2456710'>series</span> <span m='2457710'>models.</span> <span
  m='2459430'>We</span> <span m='2460430'>consider</span> <span
  m='2461130'>the</span> <span m='2461250'>operator,</span> <span
  m='2461770'>L,</span> <span m='2462600'>that</span> <span
  m='2462820'>shifts</span> <span m='2463160'>a</span> <span
  m='2463240'>time</span> <span m='2463530'>series</span> <span
  m='2463870'>back</span> <span m='2464180'>by</span> <span
  m='2464310'>one</span> <span m='2464600'>time</span> <span
  m='2464920'>increment.</span> <span m='2466680'>And</span> <span
  m='2466920'>applying</span> <span m='2467260'>this</span> <span
  m='2467420'>operator</span> <span m='2467880'>recursively,</span> <span
  m='2469210'>we</span> <span m='2469400'>get,</span> <span
  m='2470320'>if</span> <span m='2470450'>it's</span> <span
  m='2470600'>operating</span> <span m='2472090'>0</span> <span
  m='2472440'>times,</span> <span m='2473430'>there's</span> <span
  m='2473590'>no</span> <span m='2473770'>lag,</span> <span
  m='2474400'>one</span> <span m='2474880'>time,</span> <span
  m='2475220'>there's</span> <span m='2475450'>one</span> <span
  m='2475690'>lag,</span> <span m='2476160'>two</span> <span
  m='2476300'>times,</span> <span m='2476570'>two</span> <span
  m='2476720'>lags--</span> <span m='2477120'>doing that iteratively.</span>
  </p><p><span m='2478860'>And</span> <span m='2479360'>in</span> <span
  m='2479800'>thinking</span> <span m='2480110'>of</span> <span
  m='2480220'>these,</span> <span m='2481510'>what</span> <span
  m='2481810'>we're</span> <span m='2481930'>dealing</span> <span
  m='2482320'>with</span> <span m='2482470'>is</span> <span
  m='2482640'>like</span> <span m='2483510'>a</span> <span
  m='2483630'>transformation</span> <span m='2484490'>on</span> <span
  m='2484840'>infinite</span> <span m='2485260'>dimensional</span> <span
  m='2485750'>space,</span> <span m='2486680'>where</span> <span
  m='2486990'>it's</span> <span m='2487140'>like</span> <span
  m='2487950'>the</span> <span m='2488110'>identity</span> <span
  m='2488500'>matrix</span> <span m='2489150'>sort</span> <span
  m='2489330'>of</span> <span m='2489960'>shifted</span> <span
  m='2490410'>by</span> <span m='2490640'>one</span> <span
  m='2491330'>element--</span> <span m='2491840'>or</span> <span
  m='2492240'>not</span> <span m='2492390'>the</span> <span
  m='2492530'>identity,</span> <span m='2492910'>but</span> <span
  m='2493250'>an</span> <span m='2493590'>element.</span> <span
  m='2495320'>It's</span> <span m='2495540'>like</span> <span
  m='2495660'>the</span> <span m='2495750'>identity</span> <span
  m='2496170'>matrix</span> <span m='2496780'>shifted</span> <span
  m='2497290'>by</span> <span m='2497450'>one</span> <span
  m='2497680'>column</span> <span m='2498450'>or</span> <span
  m='2499620'>two</span> <span m='2499810'>columns.</span> <span
  m='2501520'>So</span> <span m='2502210'>anyway,</span> <span
  m='2502490'>inverses</span> <span m='2503010'>of</span> <span
  m='2503090'>these</span> <span m='2503260'>operators</span> <span
  m='2503760'>are</span> <span m='2503970'>well</span> <span
  m='2504200'>defined</span> <span m='2505740'>in</span> <span
  m='2505850'>terms</span> <span m='2506160'>of</span> <span
  m='2506350'>what</span> <span m='2506600'>we</span> <span
  m='2506750'>get</span> <span m='2507040'>from</span> <span
  m='2507230'>them.</span> </p><p><span m='2509440'>So</span> <span
  m='2510590'>we</span> <span m='2511220'>can</span> <span
  m='2511390'>represent</span> <span m='2511940'>the</span> <span
  m='2512050'>Wold</span> <span m='2512460'>representation</span> <span
  m='2513470'>in</span> <span m='2513660'>terms</span> <span
  m='2514050'>of</span> <span m='2514940'>these</span> <span
  m='2515600'>lag</span> <span m='2515950'>operators</span> <span
  m='2517430'>by</span> <span m='2517650'>saying</span> <span
  m='2518140'>that</span> <span m='2519440'>our</span> <span
  m='2519590'>stochastic</span> <span m='2520080'>process,</span> <span
  m='2520530'>xt,</span> <span m='2522610'>is</span> <span
  m='2523120'>equal</span> <span m='2523490'>to</span> <span
  m='2523950'>vt</span> <span m='2524600'>plus</span> <span
  m='2526220'>this</span> <span m='2527040'>psi</span> <span
  m='2527295'>of</span> <span m='2527550'>L</span> <span
  m='2528920'>function,</span> <span m='2530030'>basically</span> <span
  m='2530760'>a</span> <span m='2532750'>functional</span> <span
  m='2533105'>of</span> <span m='2533460'>the</span> <span
  m='2533700'>lag</span> <span m='2534030'>operator,</span> <span
  m='2534940'>which</span> <span m='2535330'>is</span> <span
  m='2535510'>a</span> <span m='2535600'>potentially</span> <span
  m='2536260'>infinite</span> <span m='2536810'>order</span> <span
  m='2537520'>polynomial</span> <span m='2538570'>of the lags.</span>
  </p><p><span m='2540730'>So</span> <span m='2540880'>this</span> <span
  m='2541110'>notation</span> <span m='2542100'>is</span> <span
  m='2542250'>something</span> <span m='2542770'>that</span> <span
  m='2543430'>you</span> <span m='2543770'>need</span> <span
  m='2544100'>to</span> <span m='2544160'>get</span> <span
  m='2544740'>very</span> <span m='2545060'>familiar</span> <span
  m='2545470'>with</span> <span m='2545660'>if</span> <span
  m='2545800'>you're</span> <span m='2546110'>going</span> <span
  m='2546220'>to</span> <span m='2546270'>be</span> <span
  m='2546400'>comfortable</span> <span m='2546910'>with</span> <span
  m='2547050'>the</span> <span m='2547130'>different</span> <span
  m='2547770'>models</span> <span m='2548230'>that</span> <span
  m='2548520'>are</span> <span m='2548700'>introduced</span> <span
  m='2549330'>with</span> <span m='2549590'>ARMA</span> <span
  m='2550010'>and</span> <span m='2550360'>ARIMA</span> <span
  m='2550920'>models.</span> <span m='2553840'>Any</span> <span
  m='2554140'>questions</span> <span m='2554450'>about</span> <span
  m='2554950'>that?</span> </p><p><span m='2562230'>Now</span> <span
  m='2562430'>relating</span> <span m='2562850'>to</span> <span
  m='2563050'>this--</span> <span m='2563480'>let</span> <span
  m='2563580'>me</span> <span m='2563680'>just</span> <span
  m='2563870'>introduce</span> <span m='2564290'>now,</span> <span
  m='2564510'>because</span> <span m='2564740'>this</span> <span
  m='2564870'>will</span> <span m='2565000'>come</span> <span
  m='2565180'>up</span> <span m='2566420'>somewhat</span> <span
  m='2566760'>later.</span> <span m='2567550'>But</span> <span
  m='2567710'>there's</span> <span m='2567940'>the</span> <span
  m='2568100'>impulse</span> <span m='2568570'>response</span> <span
  m='2569140'>function</span> <span m='2569840'>of</span> <span
  m='2570140'>the</span> <span m='2570240'>covariant</span> <span
  m='2570630'>stationary</span> <span m='2571070'>process.</span> <span
  m='2573010'>If</span> <span m='2574180'>we</span> <span
  m='2574300'>have</span> <span m='2574450'>a</span> <span
  m='2574570'>stochastic</span> <span m='2575090'>process,</span> <span
  m='2575670'>xt,</span> <span m='2577360'>which</span> <span
  m='2577590'>is</span> <span m='2577700'>given</span> <span
  m='2577950'>by</span> <span m='2578140'>this</span> <span
  m='2578360'>Wold</span> <span m='2578630'>representation,</span> <span
  m='2580130'>then</span> <span m='2581240'>you</span> <span
  m='2581330'>can</span> <span m='2581450'>ask</span> <span
  m='2581590'>yourself</span> <span m='2585950'>what</span> <span
  m='2586140'>happens</span> <span m='2586580'>to</span> <span
  m='2586730'>the</span> <span m='2586880'>innovation</span> <span
  m='2587470'>at</span> <span m='2587730'>time</span> <span
  m='2588080'>t,</span> <span m='2589320'>which</span> <span
  m='2589520'>is</span> <span m='2589660'>eta a,</span> <span
  m='2591320'>how</span> <span m='2591490'>does</span> <span
  m='2591640'>that</span> <span m='2591820'>affect</span> <span
  m='2592170'>the</span> <span m='2592280'>process</span> <span
  m='2594370'>over</span> <span m='2594620'>time?</span> </p><p><span
  m='2595470'>And</span> <span m='2595570'>so,</span> <span
  m='2596030'>OK,</span> <span m='2598460'>pretend</span> <span
  m='2599070'>that</span> <span m='2599160'>you</span> <span
  m='2599350'>are</span> <span m='2600330'>chairman</span> <span
  m='2600720'>of</span> <span m='2600920'>the</span> <span
  m='2601020'>Federal</span> <span m='2601210'>Reserve</span> <span
  m='2601610'>Bank.</span> <span m='2602090'>And</span> <span
  m='2603240'>you're</span> <span m='2603460'>interested</span> <span
  m='2603820'>in</span> <span m='2604130'>the</span> <span
  m='2605030'>GNP</span> <span m='2606780'>or</span> <span
  m='2607210'>basically</span> <span m='2608200'>economic</span> <span
  m='2608740'>growth.</span> <span m='2609600'>And</span> <span
  m='2611010'>you're</span> <span m='2611200'>considering</span> <span
  m='2611710'>changing</span> <span m='2612300'>interest</span> <span
  m='2612720'>rates</span> <span m='2613944'>to</span> <span
  m='2614710'>help</span> <span m='2614960'>the</span> <span
  m='2615070'>economy.</span> <span m='2616340'>Well,</span> <span
  m='2616700'>you'd</span> <span m='2616880'>like</span> <span
  m='2617070'>to</span> <span m='2617150'>know</span> <span
  m='2617380'>what</span> <span m='2617780'>an</span> <span
  m='2617950'>impact</span> <span m='2618410'>is</span> <span
  m='2618630'>of</span> <span m='2618740'>your</span> <span
  m='2619020'>change</span> <span m='2620080'>in</span> <span
  m='2621180'>this</span> <span m='2621670'>factor,</span> <span
  m='2622410'>how</span> <span m='2622610'>that's</span> <span
  m='2622810'>going</span> <span m='2622890'>to</span> <span
  m='2623020'>affect</span> <span m='2623830'>the</span> <span
  m='2626320'>variable</span> <span m='2626720'>of</span> <span
  m='2626820'>interest,</span> <span m='2627250'>perhaps</span> <span
  m='2627560'>GNP.</span> </p><p><span m='2628130'>Now,</span> <span
  m='2628300'>in</span> <span m='2628360'>this</span> <span
  m='2628540'>case,</span> <span m='2629250'>we're</span> <span
  m='2629300'>thinking</span> <span m='2629520'>of</span> <span
  m='2629590'>just</span> <span m='2629820'>a</span> <span
  m='2629910'>simple</span> <span m='2631620'>covariant</span> <span
  m='2632000'>stationary</span> <span m='2632380'>stochastic</span> <span
  m='2632790'>process.</span> <span m='2635140'>It's</span> <span
  m='2635580'>basically</span> <span m='2636120'>a</span> <span
  m='2636210'>process</span> <span m='2637500'>that</span> <span
  m='2637740'>is</span> <span m='2638560'>a</span> <span
  m='2638730'>random</span> <span m='2639440'>awaited</span> <span
  m='2639990'>sum, a</span> <span m='2640340'>moving</span> <span
  m='2640720'>average</span> <span m='2641340'>of</span> <span
  m='2641460'>innovations,</span> <span m='2642070'>eta t.</span> <span
  m='2643210'>But</span> <span m='2643470'>the</span> <span
  m='2643560'>question</span> <span m='2643890'>is,</span> <span
  m='2644670'>basically</span> <span m='2645050'>an</span> <span
  m='2645150'>covariant</span> <span m='2645570'>stationary</span> <span
  m='2646130'>process</span> <span m='2646530'>could</span> <span
  m='2646630'>be</span> <span m='2646770'>represented</span> <span
  m='2647010'>in</span> <span m='2647200'>this</span> <span
  m='2647400'>form.</span> <span m='2648310'>And</span> <span
  m='2649080'>the</span> <span m='2649580'>impulse</span> <span
  m='2649980'>response</span> <span m='2651010'>function</span> <span
  m='2651630'>relates</span> <span m='2652050'>to</span> <span
  m='2652260'>what</span> <span m='2652520'>is</span> <span
  m='2652640'>the</span> <span m='2652780'>impact</span> <span
  m='2653710'>of</span> <span m='2654160'>eta</span> <span m='2654430'>t.</span>
  <span m='2655790'>What's</span> <span m='2656130'>its</span> <span
  m='2656920'>impact</span> <span m='2657450'>over</span> <span
  m='2657710'>time?</span> </p><p><span m='2658120'>Basically,</span> <span
  m='2658510'>it</span> <span m='2658850'>affects</span> <span
  m='2659590'>the</span> <span m='2660180'>process at</span> <span
  m='2660660'>time</span> <span m='2661040'>t.</span> <span
  m='2661940'>That,</span> <span m='2662500'>because</span> <span
  m='2662880'>of</span> <span m='2663040'>the</span> <span
  m='2663160'>moving</span> <span m='2663450'>average</span> <span
  m='2663880'>process,</span> <span m='2664360'>it affects</span> <span
  m='2664770'>it at</span> <span m='2664890'>t</span> <span
  m='2665140'>plus</span> <span m='2665390'>1,</span> <span m='2665760'>affects
  it</span> <span m='2665910'>at</span> <span m='2666040'>t</span> <span
  m='2666180'>plus</span> <span m='2666460'>2.</span> <span
  m='2667350'>And</span> <span m='2667580'>so</span> <span
  m='2668520'>this</span> <span m='2669240'>impulse</span> <span
  m='2669740'>response</span> <span m='2670820'>is</span> <span
  m='2672520'>basically</span> <span m='2673810'>the</span> <span
  m='2673960'>derivative</span> <span m='2674650'>of</span> <span
  m='2675320'>the</span> <span m='2675530'>value</span> <span
  m='2676290'>of</span> <span m='2676500'>the</span> <span
  m='2676880'>process</span> <span m='2677650'>with</span> <span
  m='2678160'>the</span> <span m='2679720'>j</span> <span
  m='2680780'>previous</span> <span m='2681750'>innovation</span> <span
  m='2682640'>is</span> <span m='2682780'>given</span> <span
  m='2683010'>by</span> <span m='2683640'>psi j.</span> <span
  m='2684210'>So</span> <span m='2685270'>the</span> <span
  m='2685820'>different</span> <span m='2686110'>innovations</span> <span
  m='2686690'>have</span> <span m='2686850'>an</span> <span
  m='2686910'>impact</span> <span m='2687360'>on</span> <span
  m='2687450'>the</span> <span m='2687540'>current</span> <span
  m='2687850'>value</span> <span m='2688170'>given</span> <span
  m='2688470'>by</span> <span m='2688660'>this</span> <span
  m='2688830'>impulse</span> <span m='2689220'>response</span> <span
  m='2689730'>function.</span> </p><p><span m='2691200'>So</span> <span
  m='2691370'>looking</span> <span m='2691670'>backward,</span> <span
  m='2692370'>that</span> <span m='2692670'>definition</span> <span
  m='2693200'>is</span> <span m='2693400'>pretty</span> <span
  m='2693720'>well</span> <span m='2693930'>defined.</span> <span
  m='2694920'>But</span> <span m='2695090'>you</span> <span
  m='2695160'>can</span> <span m='2695280'>also</span> <span
  m='2695530'>think</span> <span m='2695720'>about</span> <span
  m='2695950'>how</span> <span m='2696330'>does</span> <span
  m='2696630'>an</span> <span m='2696720'>impact</span> <span
  m='2697360'>of</span> <span m='2697480'>the</span> <span
  m='2697550'>innovation</span> <span m='2698020'>affect</span> <span
  m='2698620'>the</span> <span m='2698740'>process</span> <span
  m='2699210'>going</span> <span m='2699450'>forward.</span> <span
  m='2700760'>And</span> <span m='2701160'>the</span> <span
  m='2701260'>long</span> <span m='2701590'>run</span> <span
  m='2701800'>cumulative</span> <span m='2702270'>response</span> <span
  m='2703430'>is</span> <span m='2704340'>essentially</span> <span
  m='2704970'>what</span> <span m='2705280'>is</span> <span
  m='2705870'>the</span> <span m='2706060'>impact</span> <span
  m='2706530'>of</span> <span m='2706620'>that</span> <span
  m='2706780'>innovation</span> <span m='2707490'>in the</span> <span
  m='2707810'>process</span> <span m='2709720'>ultimately?</span> <span
  m='2711350'>And</span> <span m='2711510'>eventually,</span> <span
  m='2711990'>it's</span> <span m='2713080'>not</span> <span
  m='2713270'>going</span> <span m='2713430'>to</span> <span
  m='2713520'>change</span> <span m='2713940'>the</span> <span
  m='2714020'>value</span> <span m='2714270'>of</span> <span
  m='2714310'>the</span> <span m='2714390'>process.</span> </p><p><span
  m='2714880'>But</span> <span m='2715610'>what</span> <span
  m='2715950'>is</span> <span m='2716110'>the</span> <span
  m='2716190'>value</span> <span m='2716670'>to</span> <span
  m='2716800'>which</span> <span m='2717080'>the</span> <span
  m='2717850'>process is</span> <span m='2718440'>moving</span> <span
  m='2718710'>because</span> <span m='2719040'>of</span> <span
  m='2719120'>that</span> <span m='2719330'>one</span> <span
  m='2719740'>innovation?</span> <span m='2720890'>And</span> <span
  m='2721120'>so</span> <span m='2721590'>the</span> <span
  m='2721740'>long</span> <span m='2721960'>run</span> <span
  m='2722190'>cumulative</span> <span m='2722450'>response is</span> <span
  m='2723170'>given</span> <span m='2723430'>by</span> <span
  m='2724140'>basically</span> <span m='2725150'>the</span> <span
  m='2725270'>sum</span> <span m='2726120'>of</span> <span
  m='2726280'>these</span> <span m='2727640'>individual</span> <span
  m='2728180'>ones.</span> <span m='2728900'>And</span> <span
  m='2729070'>it's</span> <span m='2729220'>given</span> <span
  m='2729450'>by</span> <span m='2729650'>the</span> <span
  m='2729790'>sum</span> <span m='2730000'>of</span> <span
  m='2730090'>the</span> <span m='2730210'>psi i's.</span> <span
  m='2733020'>So</span> <span m='2733240'>that's</span> <span
  m='2733600'>the</span> <span m='2733960'>polynomial</span> <span
  m='2735350'>of psi</span> <span m='2736220'>with</span> <span
  m='2736390'>lag</span> <span m='2736640'>operator,</span> <span
  m='2736950'>where we</span> <span m='2737295'>replace the</span> <span
  m='2737640'>lag</span> <span m='2737940'>operator</span> <span
  m='2738390'>by</span> <span m='2738560'>1.</span> <span
  m='2743540'>We'll</span> <span m='2743680'>see</span> <span
  m='2743850'>this</span> <span m='2744030'>again</span> <span
  m='2744470'>when</span> <span m='2744700'>we</span> <span
  m='2745290'>talk</span> <span m='2745570'>about</span> <span
  m='2747230'>vector</span> <span m='2747880'>autoregressive</span> <span
  m='2748630'>processes</span> <span m='2750620'>with</span> <span
  m='2750780'>multivariate</span> <span m='2751290'>time</span> <span
  m='2751540'>series.</span> </p><p><span m='2756020'>Now,</span> <span
  m='2756360'>the</span> <span m='2756540'>Wold</span> <span
  m='2756800'>representation,</span> <span m='2757670'>which</span> <span
  m='2757860'>is</span> <span m='2757990'>a</span> <span
  m='2758540'>infinite</span> <span m='2758920'>order</span> <span
  m='2759140'>moving</span> <span m='2759470'>average,</span> <span
  m='2759930'>possibly</span> <span m='2760200'>infinite</span> <span
  m='2760550'>order,</span> <span m='2761700'>can</span> <span
  m='2761880'>have</span> <span m='2762040'>an</span> <span
  m='2762150'>autoregressive</span> <span m='2764010'>representation.</span>
  <span m='2767940'>Suppose</span> <span m='2768930'>that</span> <span
  m='2770430'>there</span> <span m='2770830'>is</span> <span
  m='2773330'>another</span> <span m='2775800'>polynomial</span> <span
  m='2776700'>psi</span> <span m='2777340'>i</span> <span
  m='2777580'>star</span> <span m='2778310'>of</span> <span
  m='2778940'>the</span> <span m='2779170'>lags,</span> <span
  m='2781500'>which</span> <span m='2781750'>we're</span> <span
  m='2781900'>going</span> <span m='2782010'>to</span> <span
  m='2782090'>call</span> <span m='2782410'>psi</span> <span
  m='2782730'>inverse</span> <span m='2783120'>of L,</span> <span
  m='2783240'>which</span> <span m='2785060'>satisfies</span> <span
  m='2787040'>the</span> <span m='2787450'>fact</span> <span
  m='2787770'>if</span> <span m='2787930'>you</span> <span
  m='2788060'>multiply</span> <span m='2788640'>that</span> <span
  m='2788910'>with</span> <span m='2789180'>psi of</span> <span
  m='2789470'>L,</span> <span m='2789860'>you get</span> <span
  m='2790050'>the</span> <span m='2790170'>identity</span> <span
  m='2791180'>lag</span> <span m='2791430'>0.</span> </p><p><span
  m='2791690'>Then</span> <span m='2792440'>this</span> <span
  m='2792740'>psi</span> <span m='2793130'>inverse,</span> <span
  m='2794070'>if</span> <span m='2794270'>that</span> <span
  m='2794470'>exists,</span> <span m='2797820'>is</span> <span
  m='2798900'>basically</span> <span m='2805330'>the</span> <span
  m='2805440'>inverse</span> <span m='2805740'>of</span> <span
  m='2805850'>the</span> <span m='2805980'>psi of</span> <span
  m='2806320'>L.</span> <span m='2807060'>So</span> <span m='2807750'>if</span>
  <span m='2807900'>we</span> <span m='2808060'>start</span> <span
  m='2808320'>with</span> <span m='2808460'>psi of L,</span> <span
  m='2809090'>if</span> <span m='2809220'>that's</span> <span
  m='2809450'>invertible,</span> <span m='2810180'>then</span> <span
  m='2810300'>there</span> <span m='2810440'>exists</span> <span
  m='2810760'>a</span> <span m='2810850'>psi</span> <span
  m='2811320'>inverse</span> <span m='2811630'>of</span> <span
  m='2811730'>L,</span> <span m='2812510'>with</span> <span
  m='2812900'>coefficients</span> <span m='2813520'>psi i</span> <span
  m='2813970'>star.</span> <span m='2815490'>And</span> <span
  m='2816730'>one</span> <span m='2817060'>can</span> <span
  m='2819110'>basically</span> <span m='2820330'>take</span> <span
  m='2820570'>our</span> <span m='2820770'>original</span> <span
  m='2821450'>expression</span> <span m='2822130'>for</span> <span
  m='2822580'>the</span> <span m='2822790'>stochstic</span> <span
  m='2823300'>process,</span> <span m='2823820'>which</span> <span
  m='2824000'>is</span> <span m='2824210'>as</span> <span
  m='2824470'>this</span> <span m='2824700'>moving</span> <span
  m='2825080'>average</span> <span m='2826020'>of</span> <span
  m='2826170'>the</span> <span m='2826310'>eta's,</span> <span
  m='2827900'>and</span> <span m='2828500'>express</span> <span
  m='2829020'>it</span> <span m='2829200'>as</span> <span
  m='2830410'>this</span> <span m='2832540'>essentially</span> <span
  m='2832880'>moving</span> <span m='2833250'>averages</span> <span
  m='2834270'>of</span> <span m='2835080'>the</span> <span
  m='2835240'>x's.</span> </p><p><span m='2836450'>And</span> <span
  m='2836630'>so</span> <span m='2836770'>we've</span> <span
  m='2837030'>essentially</span> <span m='2838110'>inverted</span> <span
  m='2838770'>the</span> <span m='2838860'>process</span> <span
  m='2840730'>and</span> <span m='2841350'>shown</span> <span
  m='2842060'>that</span> <span m='2842880'>the</span> <span
  m='2844260'>stochastic</span> <span m='2844900'>process</span> <span
  m='2847270'>can</span> <span m='2847500'>be</span> <span
  m='2848020'>expressed</span> <span m='2848640'>as</span> <span
  m='2851650'>an</span> <span m='2851800'>infinite</span> <span
  m='2852210'>order</span> <span m='2853970'>autoregressive</span> <span
  m='2855570'>representation.</span> <span m='2856850'>And</span> <span
  m='2857110'>so</span> <span m='2857310'>this</span> <span
  m='2858050'>infinite</span> <span m='2858470'>order</span> <span
  m='2858840'>autoregressive</span> <span m='2859510'>representation</span>
  <span m='2860760'>corresponds</span> <span m='2861450'>to</span> <span
  m='2861570'>that</span> <span m='2861900'>intuitive</span> <span
  m='2862390'>understanding</span> <span m='2863040'>of</span> <span
  m='2863130'>how</span> <span m='2863610'>the</span> <span
  m='2863730'>Wold</span> <span m='2864150'>representation</span> <span
  m='2865310'>exists.</span> <span m='2866280'>And it</span> <span
  m='2866570'>actually</span> <span m='2867880'>works</span> <span
  m='2868160'>with</span> <span m='2870050'>the</span> <span
  m='2870220'>regression</span> <span m='2870680'>coefficients</span> <span
  m='2871330'>in</span> <span m='2871450'>that</span> <span
  m='2871900'>projection</span> <span m='2873290'>several</span> <span
  m='2873590'>slides</span> <span m='2873920'>back</span> <span
  m='2874190'>corresponds</span> <span m='2874780'>to</span> <span
  m='2874880'>this</span> <span m='2875080'>inverse</span> <span
  m='2875520'>operator.</span> </p><p><span m='2879030'>So</span> <span
  m='2879190'>let's</span> <span m='2879380'>turn</span> <span
  m='2879690'>to</span> <span m='2879920'>some</span> <span
  m='2882040'>specific</span> <span m='2883540'>time</span> <span
  m='2883840'>series</span> <span m='2884160'>models</span> <span
  m='2884580'>that</span> <span m='2884960'>are</span> <span
  m='2885130'>widely</span> <span m='2885540'>used.</span> <span
  m='2887590'>The</span> <span m='2887780'>class</span> <span
  m='2888100'>of</span> <span m='2888470'>autoregressive</span> <span
  m='2889510'>moving</span> <span m='2889850'>average</span> <span
  m='2890270'>processes</span> <span m='2891670'>has</span> <span
  m='2892160'>this</span> <span m='2892590'>mathematical</span> <span
  m='2894620'>definition.</span> <span m='2896100'>We</span> <span
  m='2896210'>define</span> <span m='2896840'>the</span> <span
  m='2897110'>xt</span> <span m='2899020'>to</span> <span m='2899150'>be</span>
  <span m='2899650'>equal</span> <span m='2900030'>to</span> <span
  m='2900700'>a</span> <span m='2900790'>linear</span> <span
  m='2901160'>combination</span> <span m='2901860'>of</span> <span
  m='2901970'>lags</span> <span m='2902360'>of</span> <span
  m='2902460'>x,</span> <span m='2903780'>going</span> <span
  m='2904070'>back</span> <span m='2904360'>p</span> <span
  m='2904640'>lags,</span> <span m='2906420'>with</span> <span
  m='2906580'>coefficients</span> <span m='2907190'>phi</span> <span
  m='2907550'>1</span> <span m='2907880'>through</span> <span
  m='2908100'>phi</span> <span m='2908470'>p.</span> <span
  m='2910210'>And</span> <span m='2910500'>then</span> <span
  m='2911130'>there</span> <span m='2911640'>are</span> <span
  m='2912210'>residuals</span> <span m='2913800'>which</span> <span
  m='2915500'>are</span> <span m='2916950'>expressed</span> <span
  m='2917470'>in</span> <span m='2917550'>terms</span> <span
  m='2917830'>of</span> <span m='2918590'>a qth</span> <span
  m='2919140'>order</span> <span m='2919470'>moving</span> <span
  m='2919840'>average.</span> </p><p><span m='2920720'>So</span> <span
  m='2922110'>in</span> <span m='2922280'>this</span> <span
  m='2922630'>framework,</span> <span m='2923390'>the</span> <span
  m='2923530'>eta t's</span> <span m='2924190'>are</span> <span
  m='2924350'>white</span> <span m='2924670'>noise.</span> <span
  m='2925990'>And</span> <span m='2926230'>white</span> <span
  m='2926490'>noise,</span> <span m='2926880'>to</span> <span
  m='2927100'>reiterate,</span> <span m='2927630'>has</span> <span
  m='2927840'>mean</span> <span m='2928150'>0,</span> <span
  m='2929270'>constant</span> <span m='2929790'>variance,</span> <span
  m='2930910'>zero</span> <span m='2931390'>covariance</span> <span
  m='2932090'>between</span> <span m='2932978'>those.</span> <span
  m='2936330'>In</span> <span m='2936480'>this</span> <span
  m='2938060'>representation,</span> <span m='2941630'>I've</span> <span
  m='2941980'>simplified</span> <span m='2942640'>things</span> <span
  m='2942840'>a</span> <span m='2942940'>little</span> <span
  m='2943180'>bit</span> <span m='2943470'>by</span> <span
  m='2944750'>subtracting</span> <span m='2945510'>off</span> <span
  m='2945780'>the</span> <span m='2945920'>mean</span> <span
  m='2946410'>from</span> <span m='2947440'>all</span> <span
  m='2947640'>of</span> <span m='2947760'>the</span> <span
  m='2947900'>x's.</span> <span m='2949400'>And</span> <span
  m='2950300'>that</span> <span m='2950590'>just</span> <span
  m='2950780'>makes</span> <span m='2951010'>the</span> <span
  m='2951090'>formulas</span> <span m='2951930'>a</span> <span
  m='2951980'>little</span> <span m='2952170'>bit</span> <span
  m='2952700'>more</span> <span m='2954090'>simpler.</span> </p><p><span
  m='2955400'>Now,</span> <span m='2955610'>with</span> <span
  m='2955760'>lag</span> <span m='2956090'>operators,</span> <span
  m='2957020'>we</span> <span m='2957170'>can</span> <span
  m='2957330'>write</span> <span m='2957670'>this</span> <span
  m='2958740'>ARMA</span> <span m='2959160'>model</span> <span
  m='2960370'>as</span> <span m='2962210'>phi</span> <span m='2962590'>of</span>
  <span m='2962700'>L</span> <span m='2963085'>of pth</span> <span
  m='2963470'>order</span> <span m='2964880'>polynomial</span> <span
  m='2966020'>of lag L</span> <span m='2966400'>given</span> <span
  m='2966810'>with</span> <span m='2966950'>coefficients</span> <span
  m='2968510'>1</span> <span m='2968960'>phi</span> <span m='2969200'>1</span>
  <span m='2969460'>up</span> <span m='2969580'>to phi</span> <span
  m='2970010'>p,</span> <span m='2971360'>and</span> <span
  m='2971950'>theta</span> <span m='2972310'>of L</span> <span
  m='2974120'>given</span> <span m='2974460'>by</span> <span
  m='2975890'>1</span> <span m='2976400'>theta</span> <span m='2976720'>1</span>
  <span m='2976920'>theta</span> <span m='2977190'>2</span> <span m='2977650'>up
  to</span> <span m='2977930'>theta</span> <span m='2978210'>q.</span>
  </p><p><span m='2992870'>This</span> <span m='2993250'>is</span> <span
  m='2993460'>basically</span> <span m='2993930'>a</span> <span
  m='2994040'>representation</span> <span m='2995840'>of</span> <span
  m='2996390'>the</span> <span m='2996600'>ARMA</span> <span
  m='2996910'>time</span> <span m='2997230'>series</span> <span
  m='2997590'>model.</span> <span m='2999170'>Basically,</span> <span
  m='2999540'>we're</span> <span m='2999700'>taking</span> <span
  m='3000750'>a</span> <span m='3001470'>set</span> <span m='3001720'>of</span>
  <span m='3001850'>lags</span> <span m='3003320'>of</span> <span
  m='3003570'>the</span> <span m='3003940'>values</span> <span
  m='3004530'>of</span> <span m='3005450'>the</span> <span
  m='3006530'>stochastic</span> <span m='3007150'>process</span> <span
  m='3007780'>up</span> <span m='3008270'>to</span> <span
  m='3008360'>order</span> <span m='3008610'>p.</span> <span
  m='3009530'>And</span> <span m='3009670'>that's</span> <span
  m='3009890'>equal</span> <span m='3010120'>to</span> <span
  m='3010220'>a</span> <span m='3010370'>weighted</span> <span
  m='3010780'>average</span> <span m='3011150'>of</span> <span
  m='3011280'>the</span> <span m='3011410'>eta t's.</span> <span
  m='3014530'>If</span> <span m='3014770'>we</span> <span
  m='3016030'>multiply</span> <span m='3016770'>by</span> <span
  m='3017120'>the</span> <span m='3017390'>inverse</span> <span m='3018810'>of
  phi of L,</span> <span m='3019405'>if</span> <span m='3019690'>that</span>
  <span m='3019910'>exists,</span> <span m='3021600'>then</span> <span
  m='3022050'>we</span> <span m='3022250'>get</span> <span
  m='3022820'>this</span> <span m='3023050'>representation</span> <span
  m='3023840'>here,</span> <span m='3024010'>which</span> <span
  m='3024180'>is</span> <span m='3024290'>simply</span> <span
  m='3024570'>the</span> <span m='3024690'>Wold</span> <span
  m='3024950'>decomposition.</span> </p><p><span m='3026430'>So</span> <span
  m='3027600'>the</span> <span m='3027890'>ARMA</span> <span
  m='3028300'>models</span> <span m='3029810'>basically</span> <span
  m='3030700'>have</span> <span m='3030870'>a</span> <span
  m='3030950'>Wold</span> <span m='3031240'>decomposition</span> <span
  m='3034150'>if</span> <span m='3035170'>this</span> <span
  m='3035490'>phi</span> <span m='3035690'>of</span> <span m='3035730'>L</span>
  <span m='3036370'>is</span> <span m='3036630'>invertible.</span> <span
  m='3042850'>And</span> <span m='3045340'>we'll</span> <span
  m='3045750'>explore</span> <span m='3046350'>these</span> <span
  m='3046670'>by</span> <span m='3046810'>looking</span> <span
  m='3047120'>at</span> <span m='3047290'>simpler</span> <span
  m='3047700'>cases</span> <span m='3048200'>of</span> <span m='3048280'>the
  ARMA</span> <span m='3048390'>models</span> <span m='3049160'>by</span> <span
  m='3049300'>just</span> <span m='3049500'>focusing</span> <span
  m='3049930'>on</span> <span m='3050250'>autoregressive</span> <span
  m='3050920'>models</span> <span m='3051390'>first</span> <span
  m='3052240'>and</span> <span m='3052380'>then</span> <span
  m='3052530'>moving</span> <span m='3052840'>average</span> <span
  m='3053200'>processes</span> <span m='3053680'>second</span> <span
  m='3054760'>so</span> <span m='3055000'>that you'll</span> <span
  m='3055340'>get</span> <span m='3055490'>a</span> <span
  m='3055550'>better</span> <span m='3056090'>feel</span> <span
  m='3056510'>for</span> <span m='3056960'>how</span> <span
  m='3057330'>these</span> <span m='3057530'>things</span> <span
  m='3058030'>are</span> <span m='3058190'>manipulated</span> <span
  m='3058900'>and</span> <span m='3059080'>interpreted.</span> <span
  m='3060690'>So</span> <span m='3060840'>let's</span> <span
  m='3061040'>move</span> <span m='3061290'>on</span> <span
  m='3061570'>to</span> <span m='3062400'>the</span> <span
  m='3062530'>pth</span> <span m='3062850'>order</span> <span
  m='3063240'>autoregressive</span> <span m='3064000'>process.</span> <span
  m='3064540'>So</span> <span m='3064680'>we're</span> <span
  m='3064890'>going</span> <span m='3065010'>to</span> <span
  m='3065060'>consider</span> <span m='3065480'>ARMA</span> <span
  m='3065660'>models</span> <span m='3067420'>that</span> <span
  m='3068090'>just</span> <span m='3068370'>have</span> <span
  m='3068750'>autoregressive</span> <span m='3069360'>terms</span> <span
  m='3069720'>in</span> <span m='3069870'>them.</span> </p><p><span
  m='3076000'>So</span> <span m='3076140'>we</span> <span
  m='3076240'>have</span> <span m='3076460'>phi of L</span> <span
  m='3077590'>xt</span> <span m='3077950'>minus</span> <span
  m='3078300'>mu</span> <span m='3078670'>is</span> <span
  m='3078820'>equal</span> <span m='3079070'>to</span> <span m='3079670'>eta
  t,</span> <span m='3080300'>which</span> <span m='3080510'>is</span> <span
  m='3080610'>white</span> <span m='3080890'>noise.</span> <span m='3081990'>So
  a</span> <span m='3082160'>linear</span> <span m='3082560'>combination</span>
  <span m='3083360'>of</span> <span m='3083710'>the</span> <span
  m='3084480'>series</span> <span m='3085780'>is</span> <span
  m='3085970'>white</span> <span m='3086280'>noise.</span> <span
  m='3088970'>And</span> <span m='3089423'>xt</span> <span
  m='3090600'>follows</span> <span m='3091360'>then</span> <span
  m='3092630'>a</span> <span m='3092720'>linear</span> <span
  m='3093060'>regression</span> <span m='3093530'>model</span> <span
  m='3093810'>on</span> <span m='3094000'>explanatory</span> <span
  m='3094730'>variables,</span> <span m='3095180'>which</span> <span
  m='3095390'>are</span> <span m='3095570'>lags</span> <span
  m='3096920'>of</span> <span m='3097870'>the</span> <span
  m='3099700'>process</span> <span m='3100240'>x.</span> <span
  m='3101330'>And</span> <span m='3102660'>this</span> <span
  m='3102920'>could</span> <span m='3103040'>be</span> <span
  m='3103140'>expressed</span> <span m='3103630'>as</span> <span
  m='3103830'>xt</span> <span m='3104210'>equal</span> <span
  m='3104400'>to</span> <span m='3104500'>c</span> <span m='3104860'>plus</span>
  <span m='3106280'>the</span> <span m='3106390'>sum</span> <span
  m='3106760'>from</span> <span m='3106990'>1</span> <span m='3107180'>to</span>
  <span m='3107260'>p</span> <span m='3107510'>of</span> <span
  m='3107620'>phi</span> <span m='3107900'>j</span> <span m='3108373'>xt</span>
  <span m='3109320'>minus</span> <span m='3109670'>j,</span> <span
  m='3109870'>which</span> <span m='3110080'>is</span> <span
  m='3110210'>a</span> <span m='3110290'>linear</span> <span
  m='3110630'>regression</span> <span m='3110950'>model</span> <span
  m='3111180'>with</span> <span m='3111390'>regression</span> <span
  m='3111790'>parameters</span> <span m='3112320'>phi j.</span> </p><p><span
  m='3113700'>And</span> <span m='3113970'>c,</span> <span
  m='3115490'>the</span> <span m='3115600'>constant</span> <span
  m='3116200'>term,</span> <span m='3118430'>is</span> <span
  m='3118620'>equal</span> <span m='3118890'>to</span> <span
  m='3119010'>mu</span> <span m='3119440'>times</span> <span
  m='3119950'>phi</span> <span m='3120170'>of</span> <span m='3120280'>1.</span>
  <span m='3121390'>Now,</span> <span m='3121670'>if</span> <span
  m='3121870'>you</span> <span m='3123020'>basically</span> <span
  m='3123370'>take</span> <span m='3124090'>expectations</span> <span
  m='3125980'>of</span> <span m='3128420'>the</span> <span
  m='3128540'>process,</span> <span m='3130920'>you</span> <span
  m='3131030'>basically</span> <span m='3131690'>have</span> <span
  m='3132410'>coefficients</span> <span m='3133030'>of</span> <span
  m='3133150'>mu</span> <span m='3133880'>coming</span> <span
  m='3134240'>in</span> <span m='3134360'>from</span> <span
  m='3134560'>all</span> <span m='3134690'>the</span> <span
  m='3134790'>terms.</span> <span m='3135730'>And</span> <span
  m='3136870'>phi</span> <span m='3137160'>of</span> <span m='3137250'>1</span>
  <span m='3138000'>times</span> <span m='3138430'>mu</span> <span
  m='3139280'>is</span> <span m='3139590'>the</span> <span
  m='3140850'>regression</span> <span m='3141340'>coefficient</span> <span
  m='3141850'>there.</span> <span m='3145160'>So</span> <span
  m='3145420'>with</span> <span m='3145550'>this</span> <span
  m='3145750'>autoregressive</span> <span m='3146420'>model,</span> <span
  m='3147320'>we</span> <span m='3147430'>now</span> <span
  m='3147630'>want</span> <span m='3147760'>to</span> <span
  m='3147820'>go</span> <span m='3147950'>over</span> <span
  m='3148160'>what</span> <span m='3148330'>are</span> <span
  m='3148370'>the</span> <span m='3148490'>stationarity</span> <span
  m='3149200'>conditions.</span> </p><p><span m='3151160'>Certainly,</span>
  <span m='3153020'>this</span> <span m='3153360'>autoregressive</span> <span
  m='3154130'>model</span> <span m='3155020'>is</span> <span
  m='3157450'>one</span> <span m='3157780'>where,</span> <span
  m='3158100'>well,</span> <span m='3158370'>a</span> <span
  m='3158450'>simple</span> <span m='3158810'>random</span> <span
  m='3159180'>walk</span> <span m='3160790'>follows</span> <span
  m='3161100'>an</span> <span m='3161320'>autoregressive</span> <span
  m='3161890'>model</span> <span m='3163230'>but</span> <span
  m='3163340'>is</span> <span m='3163480'>not</span> <span
  m='3163710'>stationary.</span> <span m='3165520'>We'll</span> <span
  m='3166170'>highlight</span> <span m='3166560'>that in a</span> <span
  m='3166800'>minute</span> <span m='3167340'>as</span> <span
  m='3167420'>well.</span> <span m='3167650'>But</span> <span
  m='3167780'>if</span> <span m='3167880'>you</span> <span m='3167970'>think
  it,</span> <span m='3168620'>that's</span> <span m='3169510'>true.</span>
  </p><p><span m='3170410'>And</span> <span m='3170670'>so</span> <span
  m='3171440'>stationarity</span> <span m='3172220'>is</span> <span
  m='3172540'>something</span> <span m='3172910'>to</span> <span
  m='3173010'>be</span> <span m='3174530'>understood</span> <span
  m='3174930'>and</span> <span m='3175030'>evaluated.</span> <span
  m='3183160'>This</span> <span m='3185580'>polynomial</span> <span
  m='3186410'>function,</span> <span m='3187260'>phi,</span> <span
  m='3188490'>where</span> <span m='3188680'>if</span> <span
  m='3188750'>we</span> <span m='3189000'>replace</span> <span
  m='3189550'>the</span> <span m='3189640'>lag</span> <span
  m='3189960'>operator,</span> <span m='3190390'>L,</span> <span
  m='3190650'>by</span> <span m='3190950'>z,</span> <span m='3191630'>a</span>
  <span m='3191740'>complex</span> <span m='3192280'>variable,</span> <span
  m='3195950'>the</span> <span m='3197470'>equation</span> <span
  m='3198080'>phi</span> <span m='3198500'>of</span> <span m='3198580'>z</span>
  <span m='3199100'>equal</span> <span m='3199420'>to</span> <span
  m='3199490'>0</span> <span m='3200970'>is</span> <span m='3202120'>the</span>
  <span m='3202260'>characteristic</span> <span m='3203150'>equation</span>
  <span m='3203700'>associated</span> <span m='3204330'>with</span> <span
  m='3204940'>this</span> <span m='3205070'>autoregressive</span> <span
  m='3205790'>model.</span> </p><p><span m='3207020'>And</span> <span
  m='3209450'>it</span> <span m='3209630'>turns</span> <span
  m='3209910'>out</span> <span m='3210410'>that</span> <span
  m='3210650'>we'll</span> <span m='3210870'>be</span> <span
  m='3211320'>interested</span> <span m='3211790'>in</span> <span
  m='3211990'>the</span> <span m='3212200'>roots</span> <span
  m='3213190'>of</span> <span m='3213530'>this</span> <span
  m='3214150'>characteristic</span> <span m='3214830'>equation</span> <span
  m='3215215'>.</span> <span m='3216610'>Now,</span> <span m='3217050'>if</span>
  <span m='3217390'>we</span> <span m='3218270'>consider</span> <span
  m='3219190'>writing</span> <span m='3220140'>phi</span> <span
  m='3220310'>of</span> <span m='3220400'>L</span> <span m='3220705'>as</span>
  <span m='3221010'>a</span> <span m='3221080'>function</span> <span
  m='3221980'>of</span> <span m='3222260'>the</span> <span
  m='3222520'>roots</span> <span m='3222830'>of</span> <span
  m='3222940'>the</span> <span m='3223050'>equation,</span> <span
  m='3224270'>we</span> <span m='3224550'>get</span> <span
  m='3225730'>this</span> <span m='3226240'>expression</span> <span
  m='3227630'>where</span> <span m='3228910'>you'll</span> <span
  m='3229130'>notice</span> <span m='3229510'>if</span> <span
  m='3229610'>you</span> <span m='3229740'>multiply</span> <span
  m='3230170'>all</span> <span m='3230320'>those</span> <span
  m='3230510'>terms</span> <span m='3230850'>out,</span> <span
  m='3231340'>the</span> <span m='3231540'>1's</span> <span
  m='3232000'>all</span> <span m='3232200'>multiply</span> <span
  m='3232660'>out</span> <span m='3232900'>together,</span> <span
  m='3233970'>and</span> <span m='3234070'>you</span> <span
  m='3234170'>get</span> <span m='3234280'>1.</span> <span
  m='3235730'>And</span> <span m='3236900'>with</span> <span
  m='3237320'>the</span> <span m='3237440'>lag</span> <span
  m='3237870'>operator,</span> <span m='3238370'>L,</span> <span
  m='3238690'>to</span> <span m='3238800'>the</span> <span
  m='3238930'>pth</span> <span m='3239250'>power,</span> <span
  m='3240100'>that</span> <span m='3240300'>would</span> <span
  m='3240470'>be</span> <span m='3241170'>the</span> <span
  m='3241280'>product</span> <span m='3241690'>of</span> <span
  m='3241790'>1</span> <span m='3241990'>over</span> <span
  m='3242250'>lambda</span> <span m='3242770'>1</span> <span
  m='3243210'>times</span> <span m='3243420'>1</span> <span
  m='3243560'>over</span> <span m='3243730'>lambda</span> <span
  m='3244120'>2,</span> <span m='3245690'>or</span> <span
  m='3245780'>actually</span> <span m='3246060'>negative</span> <span
  m='3246480'>1</span> <span m='3246650'>over</span> <span
  m='3246800'>lambda</span> <span m='3247110'>1</span> <span
  m='3247670'>times</span> <span m='3248250'>negative</span> <span
  m='3248540'>1</span> <span m='3248720'>over</span> <span
  m='3248860'>lambda</span> <span m='3249220'>2,</span> <span
  m='3249680'>and</span> <span m='3249820'>so</span> <span
  m='3249960'>forth--</span> <span m='3250110'>negative 1</span> <span
  m='3250830'>over</span> <span m='3251314'>lambda p.</span> </p><p><span
  m='3253640'>Basically,</span> <span m='3254130'>if</span> <span
  m='3254270'>there</span> <span m='3254470'>are</span> <span
  m='3254600'>p</span> <span m='3254830'>roots</span> <span
  m='3255130'>to</span> <span m='3255230'>this</span> <span
  m='3255380'>equation,</span> <span m='3255820'>this</span> <span
  m='3256550'>is</span> <span m='3256660'>how</span> <span m='3257160'>it</span>
  <span m='3257290'>would</span> <span m='3257410'>be</span> <span
  m='3257560'>written</span> <span m='3257780'>out.</span> <span
  m='3259420'>And</span> <span m='3264080'>the</span> <span
  m='3264430'>process</span> <span m='3264980'>xt</span> <span
  m='3266050'>is</span> <span m='3266290'>covariant</span> <span
  m='3266710'>and</span> <span m='3267070'>stationary</span> <span
  m='3267230'>if and</span> <span m='3267290'>only</span> <span
  m='3267500'>if</span> <span m='3267610'>all</span> <span
  m='3267830'>the</span> <span m='3267950'>roots</span> <span
  m='3268710'>of</span> <span m='3268840'>this</span> <span
  m='3269020'>characteristic</span> <span m='3269560'>equation</span> <span
  m='3270570'>lie</span> <span m='3270800'>outside</span> <span
  m='3271220'>the</span> <span m='3271290'>unit</span> <span
  m='3271590'>circle.</span> <span m='3273630'>So</span> <span
  m='3275000'>what</span> <span m='3275150'>does</span> <span
  m='3275250'>that</span> <span m='3275480'>mean?</span> <span
  m='3275880'>That</span> <span m='3275980'>means</span> <span
  m='3276290'>that</span> <span m='3277730'>the</span> <span
  m='3277870'>norm</span> <span m='3278970'>modulus</span> <span
  m='3279650'>of</span> <span m='3279760'>the</span> <span m='3279850'>complex
  z</span> <span m='3281240'>is</span> <span m='3282240'>greater</span> <span
  m='3282530'>than</span> <span m='3282650'>1.</span> <span
  m='3282810'>So</span> <span m='3282920'>they're</span> <span
  m='3283030'>outside</span> <span m='3283600'>the</span> <span
  m='3284080'>unit</span> <span m='3284340'>circle</span> <span
  m='3285160'>where</span> <span m='3285300'>it's</span> <span
  m='3285440'>less</span> <span m='3285670'>than</span> <span
  m='3285810'>or</span> <span m='3285900'>equal</span> <span
  m='3286080'>to</span> <span m='3286130'>1.</span> </p><p><span
  m='3287150'>And</span> <span m='3288980'>the</span> <span
  m='3289490'>roots,</span> <span m='3290570'>if</span> <span
  m='3290830'>they</span> <span m='3292460'>are</span> <span
  m='3292740'>outside</span> <span m='3293230'>the</span> <span
  m='3293290'>unit</span> <span m='3293550'>circle,</span> <span
  m='3296810'>then</span> <span m='3297910'>the</span> <span
  m='3298250'>modulus</span> <span m='3298930'>of</span> <span
  m='3299020'>the</span> <span m='3299110'>lambda</span> <span
  m='3299560'>j's</span> <span m='3300070'>is</span> <span
  m='3300240'>greater</span> <span m='3300560'>than</span> <span
  m='3300770'>1.</span> <span m='3305400'>And</span> <span m='3306120'>if</span>
  <span m='3306380'>we</span> <span m='3306760'>then</span> <span
  m='3307160'>consider</span> <span m='3308730'>taking</span> <span
  m='3309720'>a</span> <span m='3311020'>complex</span> <span
  m='3311680'>number,</span> <span m='3312160'>lambda,</span> <span
  m='3313220'>basically</span> <span m='3313520'>the</span> <span
  m='3313840'>root,</span> <span m='3315000'>and</span> <span
  m='3315840'>have</span> <span m='3316010'>an</span> <span
  m='3316080'>expression</span> <span m='3316580'>for</span> <span
  m='3316850'>1</span> <span m='3317130'>minus</span> <span m='3317490'>1</span>
  <span m='3317670'>over</span> <span m='3317880'>lambda</span> <span
  m='3318280'>L</span> <span m='3318650'>inverse,</span> <span
  m='3320600'>we</span> <span m='3320750'>can</span> <span
  m='3320880'>get</span> <span m='3321100'>this</span> <span
  m='3321390'>series</span> <span m='3322910'>expression</span> <span
  m='3323470'>for</span> <span m='3323610'>that</span> <span
  m='3323850'>inverse.</span> <span m='3325010'>And</span> <span
  m='3325180'>that</span> <span m='3325470'>series</span> <span
  m='3327010'>will</span> <span m='3328160'>exist</span> <span
  m='3329870'>and</span> <span m='3330080'>be</span> <span
  m='3330320'>bounded</span> <span m='3331050'>if</span> <span
  m='3332140'>the</span> <span m='3332260'>lambdi</span> <span
  m='3333820'>are</span> <span m='3334860'>greater</span> <span
  m='3335210'>than</span> <span m='3335440'>1</span> <span m='3335900'>in</span>
  <span m='3336040'>magnitude.</span> </p><p><span m='3339210'>So</span> <span
  m='3339820'>we</span> <span m='3340020'>can</span> <span
  m='3340140'>actually</span> <span m='3342360'>compute</span> <span
  m='3342790'>an</span> <span m='3342960'>inverse</span> <span m='3344080'>of
  phi of L</span> <span m='3346210'>by</span> <span m='3346700'>taking</span>
  <span m='3347100'>the</span> <span m='3347310'>inverse</span> <span
  m='3348210'>of</span> <span m='3348350'>each</span> <span
  m='3348590'>of</span> <span m='3348730'>the</span> <span
  m='3349080'>component</span> <span m='3349610'>products</span> <span
  m='3350250'>in</span> <span m='3350400'>that</span> <span
  m='3350970'>polynomial.</span> <span m='3352240'>So</span> <span
  m='3354730'>an</span> <span m='3355070'>introductory</span> <span
  m='3356250'>time</span> <span m='3356500'>series,</span> <span
  m='3357200'>of</span> <span m='3357240'>courses,</span> <span
  m='3357520'>as</span> <span m='3357800'>they</span> <span
  m='3358700'>talk</span> <span m='3358920'>about</span> <span
  m='3359240'>stationarity</span> <span m='3359960'>and</span> <span
  m='3360130'>unit</span> <span m='3360390'>roots,</span> <span
  m='3360890'>but</span> <span m='3361000'>they</span> <span
  m='3361070'>don't</span> <span m='3361230'>really</span> <span
  m='3361440'>get</span> <span m='3361610'>into</span> <span
  m='3361830'>it,</span> <span m='3361960'>because</span> <span
  m='3362600'>people</span> <span m='3362800'>don't</span> <span
  m='3362960'>know</span> <span m='3363140'>complex</span> <span
  m='3364050'>math,</span> <span m='3364490'>don't know</span> <span
  m='3364900'>about</span> <span m='3365370'>root.</span> <span
  m='3366970'>So</span> <span m='3367520'>anyway,</span> <span
  m='3367750'>but</span> <span m='3367910'>this</span> <span
  m='3368080'>is</span> <span m='3368210'>just</span> <span
  m='3368570'>very</span> <span m='3368810'>simply</span> <span
  m='3369620'>how</span> <span m='3369890'>that</span> <span
  m='3371120'>framework</span> <span m='3371560'>is</span> <span
  m='3371670'>applied.</span> </p><p><span m='3372840'>So</span> <span
  m='3373020'>we</span> <span m='3373140'>have</span> <span m='3373560'>a</span>
  <span m='3373700'>polynomial</span> <span m='3376330'>equation</span> <span
  m='3377500'>for</span> <span m='3377830'>the</span> <span
  m='3377990'>characteristic</span> <span m='3378590'>equation</span> <span
  m='3379440'>whose</span> <span m='3379700'>roots</span> <span
  m='3380070'>we're</span> <span m='3380330'>looking</span> <span
  m='3380630'>for.</span> <span m='3381100'>Those</span> <span
  m='3381300'>roots</span> <span m='3381510'>have</span> <span
  m='3381680'>to</span> <span m='3381760'>be</span> <span
  m='3381860'>outside</span> <span m='3382220'>the</span> <span
  m='3382290'>unit</span> <span m='3382510'>circle</span> <span
  m='3383320'>for</span> <span m='3384100'>stationarity</span> <span
  m='3385300'>of</span> <span m='3385490'>the</span> <span
  m='3385580'>process.</span> <span m='3386170'>Well,</span> <span
  m='3387280'>it's</span> <span m='3387800'>basically</span> <span
  m='3389510'>conditions</span> <span m='3390070'>for</span> <span
  m='3390330'>invertibility</span> <span m='3391870'>of</span> <span
  m='3392030'>the</span> <span m='3392120'>process</span> <span
  m='3393200'>of</span> <span m='3393350'>the</span> <span
  m='3393640'>autoregressive</span> <span m='3394330'>process.</span> <span
  m='3395100'>And that</span> <span m='3395410'>invertibility</span> <span
  m='3396920'>renders</span> <span m='3397530'>the</span> <span
  m='3397620'>process</span> <span m='3398970'>in</span> <span
  m='3399100'>infinite</span> <span m='3399540'>order</span> <span
  m='3400440'>moving</span> <span m='3400770'>average</span> <span
  m='3401730'>process.</span> </p><p><span m='3406210'>So</span> <span
  m='3406400'>let's</span> <span m='3406890'>go</span> <span
  m='3407080'>through</span> <span m='3407360'>these</span> <span
  m='3407770'>results</span> <span m='3410830'>for</span> <span
  m='3410990'>the</span> <span m='3411130'>auto</span> <span
  m='3411300'>regressiveprocess</span> <span m='3412140'>of</span> <span
  m='3412240'>order</span> <span m='3412460'>one,</span> <span
  m='3412840'>where</span> <span m='3413620'>things--</span> <span
  m='3414800'>always</span> <span m='3414980'>start</span> <span
  m='3415300'>with</span> <span m='3415450'>the</span> <span
  m='3415530'>simplest</span> <span m='3415940'>cases</span> <span
  m='3416330'>to</span> <span m='3416420'>understand</span> <span
  m='3416960'>things.</span> <span m='3418420'>The</span> <span
  m='3418980'>characteristic</span> <span m='3419440'>equation</span> <span
  m='3419890'>for</span> <span m='3420010'>this</span> <span
  m='3420240'>model</span> <span m='3420600'>is</span> <span
  m='3420760'>just</span> <span m='3420950'>1</span> <span
  m='3421140'>minus</span> <span m='3421520'>phi</span> <span
  m='3421650'>z.</span> <span m='3422820'>The</span> <span
  m='3422980'>root</span> <span m='3423180'>is</span> <span
  m='3423370'>1/phi.</span> <span m='3426630'>So</span> <span
  m='3427070'>lambda</span> <span m='3427670'>is</span> <span
  m='3428710'>greater</span> <span m='3429010'>than</span> <span
  m='3429230'>1--</span> <span m='3431450'>if</span> <span
  m='3431760'>the</span> <span m='3431860'>modulus</span> <span
  m='3432340'>of</span> <span m='3432420'>lambda</span> <span
  m='3432680'>is</span> <span m='3432800'>greater</span> <span
  m='3433040'>than</span> <span m='3433160'>1,</span> <span
  m='3433380'>meaning</span> <span m='3433590'>the</span> <span
  m='3433670'>root</span> <span m='3433840'>is</span> <span
  m='3433950'>outside</span> <span m='3434220'>the</span> <span m='3434290'>unit
  circle,</span> <span m='3434700'>then</span> <span m='3434900'>phi</span>
  <span m='3435170'>is</span> <span m='3435320'>less</span> <span
  m='3435580'>than</span> <span m='3435720'>1.</span> </p><p><span
  m='3436990'>So</span> <span m='3437760'>for</span> <span
  m='3437920'>covariant</span> <span m='3438390'>stationarity</span> <span
  m='3439270'>of</span> <span m='3439460'>this</span> <span
  m='3440120'>autoregressive</span> <span m='3440690'>process,</span> <span
  m='3441160'>we</span> <span m='3441280'>need</span> <span
  m='3441440'>the</span> <span m='3441530'>magnitude</span> <span
  m='3442090'>of</span> <span m='3442240'>phi</span> <span m='3443330'>to</span>
  <span m='3443470'>be</span> <span m='3443730'>less</span> <span
  m='3444000'>than</span> <span m='3444150'>1</span> <span m='3445220'>in</span>
  <span m='3445390'>magnitude.</span> <span m='3450090'>The</span> <span
  m='3450240'>expected</span> <span m='3450760'>value</span> <span
  m='3451030'>of</span> <span m='3451090'>x</span> <span m='3451330'>is</span>
  <span m='3451510'>mu.</span> <span m='3451950'>The</span> <span
  m='3452090'>variance</span> <span m='3452510'>of</span> <span
  m='3452620'>x</span> <span m='3453350'>is</span> <span
  m='3454650'>sigma</span> <span m='3454960'>squared</span> <span
  m='3455250'>x.</span> <span m='3456460'>This</span> <span
  m='3457340'>has</span> <span m='3457690'>this</span> <span
  m='3457990'>form,</span> <span m='3458310'>sigma</span> <span
  m='3458580'>squared</span> <span m='3458860'>over</span> <span
  m='3459050'>1</span> <span m='3459290'>minus</span> <span
  m='3459700'>phi.</span> <span m='3461130'>That</span> <span
  m='3461420'>expression</span> <span m='3462950'>is</span> <span
  m='3463560'>basically</span> <span m='3464530'>obtained</span> <span
  m='3464960'>by</span> <span m='3465090'>looking</span> <span
  m='3465420'>at</span> <span m='3465640'>the</span> <span
  m='3466120'>infinite</span> <span m='3466550'>order</span> <span
  m='3466750'>moving</span> <span m='3467080'>average</span> <span
  m='3467370'>representation.</span> </p><p><span m='3470110'>But</span> <span
  m='3470460'>notice</span> <span m='3470880'>that</span> <span
  m='3471670'>if</span> <span m='3471990'>phi</span> <span m='3472740'>is</span>
  <span m='3474550'>positive,</span> <span m='3476760'>then</span> <span
  m='3477510'>the</span> <span m='3477710'>variance</span> <span
  m='3478330'>of</span> <span m='3478470'>x</span> <span m='3479780'>is</span>
  <span m='3483410'>actually</span> <span m='3483710'>greater</span> <span
  m='3484140'>than</span> <span m='3485140'>the</span> <span
  m='3485300'>variance</span> <span m='3486840'>of</span> <span
  m='3487320'>the</span> <span m='3487460'>innovations.</span> <span
  m='3490440'>And</span> <span m='3490630'>if</span> <span
  m='3491430'>phi</span> <span m='3491680'>is</span> <span
  m='3493740'>less</span> <span m='3494030'>than</span> <span
  m='3494240'>0,</span> <span m='3495120'>then</span> <span
  m='3495410'>it's</span> <span m='3495610'>going</span> <span
  m='3495700'>to</span> <span m='3495760'>be</span> <span
  m='3495870'>smaller.</span> <span m='3497280'>So</span> <span
  m='3497470'>the</span> <span m='3497600'>innovation</span> <span
  m='3498430'>variance</span> <span m='3499010'>basically</span> <span
  m='3501460'>is</span> <span m='3502180'>scaled</span> <span
  m='3502600'>up</span> <span m='3502730'>a</span> <span m='3502790'>bit</span>
  <span m='3503100'>in</span> <span m='3503450'>the</span> <span
  m='3503600'>autoregressive</span> <span m='3504090'>process.</span> <span
  m='3505010'>The</span> <span m='3505140'>covariance</span> <span
  m='3505640'>matrix</span> <span m='3506110'>is</span> <span
  m='3506330'>phi</span> <span m='3506560'>times</span> <span
  m='3507240'>sigma</span> <span m='3507470'>squared</span> <span
  m='3507710'>x.</span> <span m='3507980'>You'll</span> <span
  m='3508130'>be</span> <span m='3508250'>going</span> <span
  m='3508500'>through</span> <span m='3508690'>this</span> <span
  m='3508950'>in</span> <span m='3509110'>the</span> <span
  m='3510360'>problem</span> <span m='3510830'>set.</span> </p><p><span
  m='3511980'>And</span> <span m='3512430'>the</span> <span
  m='3513100'>covariance</span> <span m='3514400'>of</span> <span
  m='3514590'>x</span> <span m='3514960'>is phi</span> <span
  m='3515320'>to</span> <span m='3515510'>the</span> <span m='3515640'>j</span>
  <span m='3516960'>power</span> <span m='3517790'>sigma</span> <span
  m='3518060'>squared</span> <span m='3518390'>x.</span> <span
  m='3520160'>And</span> <span m='3520500'>these</span> <span
  m='3520770'>expressions</span> <span m='3521390'>can</span> <span
  m='3521540'>all</span> <span m='3521790'>be</span> <span
  m='3522130'>easily</span> <span m='3523000'>evaluated</span> <span
  m='3523640'>by</span> <span m='3523770'>simply</span> <span
  m='3525150'>writing</span> <span m='3525430'>out</span> <span
  m='3525560'>the</span> <span m='3525630'>definition</span> <span
  m='3526130'>of</span> <span m='3526200'>these</span> <span
  m='3526380'>covariances</span> <span m='3527490'>in</span> <span
  m='3527590'>terms</span> <span m='3527820'>of</span> <span
  m='3527860'>the</span> <span m='3527980'>original</span> <span
  m='3528310'>model</span> <span m='3529200'>and</span> <span
  m='3529740'>looking</span> <span m='3530000'>at</span> <span
  m='3530090'>what</span> <span m='3530280'>terms</span> <span
  m='3530580'>are</span> <span m='3530680'>independent,</span> <span
  m='3531670'>cancel</span> <span m='3532130'>out,</span> <span
  m='3533160'>and</span> <span m='3533220'>that</span> <span
  m='3533850'>proceeds.</span> </p><p><span m='3544510'>Let's</span> <span
  m='3544650'>just</span> <span m='3544830'>go</span> <span
  m='3544960'>through</span> <span m='3545160'>these</span> <span
  m='3546040'>cases.</span> <span m='3546800'>Let's show</span> <span
  m='3547050'>it</span> <span m='3547120'>all</span> <span
  m='3547330'>here.</span> <span m='3548730'>So</span> <span
  m='3548900'>we</span> <span m='3549030'>have</span> <span
  m='3553690'>if</span> <span m='3554070'>phi</span> <span m='3554620'>is</span>
  <span m='3555610'>between</span> <span m='3556040'>0</span> <span
  m='3556330'>and</span> <span m='3556420'>1,</span> <span
  m='3556630'>then</span> <span m='3556730'>the</span> <span
  m='3556820'>process</span> <span m='3558240'>experiences</span> <span
  m='3559010'>exponential</span> <span m='3559750'>mean</span> <span
  m='3560010'>reversion</span> <span m='3560810'>to</span> <span
  m='3561140'>mu.</span> <span m='3562170'>So</span> <span m='3562390'>an</span>
  <span m='3562490'>autoregressive</span> <span m='3563190'>process</span> <span
  m='3563690'>with</span> <span m='3563880'>phi</span> <span
  m='3564160'>between</span> <span m='3564490'>0</span> <span
  m='3564760'>on</span> <span m='3564870'>1</span> <span
  m='3565710'>corresponds</span> <span m='3566290'>to</span> <span
  m='3566450'>a</span> <span m='3566490'>mean</span> <span
  m='3566730'>reverting</span> <span m='3567230'>process.</span> <span
  m='3569490'>This</span> <span m='3569810'>process</span> <span
  m='3570910'>is</span> <span m='3571070'>actually</span> <span
  m='3571360'>one</span> <span m='3571670'>that</span> <span
  m='3571830'>has</span> <span m='3572000'>been</span> <span
  m='3572150'>used</span> <span m='3572370'>theoretically</span> <span
  m='3573250'>for</span> <span m='3573450'>interest</span> <span
  m='3573760'>rate</span> <span m='3573950'>models</span> <span
  m='3574310'>and</span> <span m='3574390'>a</span> <span m='3574450'>lot</span>
  <span m='3574720'>of</span> <span m='3574880'>theoretical</span> <span
  m='3575340'>work</span> <span m='3575550'>in</span> <span
  m='3575660'>finance.</span> </p><p><span m='3576920'>The</span> <span
  m='3577170'>Vasicek</span> <span m='3577470'>model</span> <span
  m='3578330'>is</span> <span m='3578530'>actually</span> <span
  m='3579750'>an</span> <span m='3579890'>example</span> <span
  m='3580280'>of</span> <span m='3580350'>the</span> <span
  m='3580480'>Ornstein-Uhlenbeck</span> <span m='3581550'>process,</span> <span
  m='3582300'>which</span> <span m='3582520'>is</span> <span
  m='3583400'>basically</span> <span m='3583660'>a</span> <span
  m='3583730'>mean</span> <span m='3584040'>reverting</span> <span
  m='3584810'>Brownian</span> <span m='3585230'>motion.</span> <span
  m='3587840'>And</span> <span m='3589320'>any</span> <span
  m='3589570'>variables</span> <span m='3590420'>that</span> <span
  m='3591480'>exhibit</span> <span m='3592770'>or</span> <span
  m='3592880'>could</span> <span m='3593070'>be</span> <span
  m='3593580'>thought</span> <span m='3593980'>of</span> <span
  m='3594080'>as</span> <span m='3594270'>exhibiting</span> <span
  m='3595190'>mean</span> <span m='3595470'>reversion,</span> <span
  m='3599950'>this</span> <span m='3600250'>model</span> <span
  m='3600530'>can</span> <span m='3600680'>be</span> <span
  m='3600810'>applied</span> <span m='3601290'>to</span> <span
  m='3601450'>those</span> <span m='3601810'>processes,</span> <span
  m='3602260'>such</span> <span m='3602530'>as</span> <span
  m='3603620'>interest</span> <span m='3604050'>rate</span> <span
  m='3604280'>spreads</span> <span m='3605020'>or</span> <span
  m='3605750'>real</span> <span m='3606020'>exchange</span> <span
  m='3606570'>rates,</span> <span m='3607470'>variables</span> <span
  m='3608070'>where</span> <span m='3608640'>one</span> <span
  m='3608890'>can</span> <span m='3609070'>expect</span> <span
  m='3610110'>that</span> <span m='3610820'>things</span> <span
  m='3611170'>never</span> <span m='3611430'>get</span> <span
  m='3611680'>too</span> <span m='3611890'>large</span> <span m='3612300'>or
  too</span> <span m='3612450'>small.</span> <span m='3612790'>They</span> <span
  m='3612900'>come</span> <span m='3613110'>back</span> <span
  m='3613350'>to</span> <span m='3613470'>some</span> <span
  m='3613780'>mean.</span> </p><p><span m='3614440'>Now,</span> <span
  m='3614680'>the</span> <span m='3614900'>challenge is,</span> <span
  m='3615570'>that</span> <span m='3616000'>usually</span> <span
  m='3616570'>may</span> <span m='3616670'>be</span> <span
  m='3616820'>true</span> <span m='3617250'>over</span> <span
  m='3618070'>short</span> <span m='3618390'>periods</span> <span
  m='3618630'>of</span> <span m='3618700'>time.</span> <span
  m='3618930'>But</span> <span m='3619020'>over</span> <span
  m='3619200'>very</span> <span m='3619480'>long</span> <span
  m='3619710'>periods</span> <span m='3619990'>of</span> <span
  m='3620110'>time,</span> <span m='3621100'>the</span> <span
  m='3621370'>point</span> <span m='3621470'>to</span> <span
  m='3621790'>which</span> <span m='3621980'>youre</span> <span
  m='3622070'>reverting</span> <span m='3622570'>to</span> <span
  m='3622790'>changes.</span> <span m='3623230'>So</span> <span
  m='3624080'>these</span> <span m='3624270'>models</span> <span
  m='3624810'>tend</span> <span m='3625150'>to</span> <span
  m='3625240'>not</span> <span m='3625470'>have</span> <span
  m='3625700'>broad</span> <span m='3626050'>application</span> <span
  m='3626640'>over</span> <span m='3626830'>long</span> <span
  m='3627290'>time</span> <span m='3627590'>ranges.</span> <span m='3627900'>You
  need</span> <span m='3628260'>to</span> <span m='3628350'>adapt.</span>
  </p><p><span m='3630150'>Anyway,</span> <span m='3630510'>with</span> <span
  m='3630880'>the</span> <span m='3631160'>AR</span> <span
  m='3631350'>process,</span> <span m='3631740'>we</span> <span
  m='3631860'>can</span> <span m='3631960'>also</span> <span
  m='3632220'>have</span> <span m='3632460'>negative</span> <span
  m='3632840'>values</span> <span m='3633190'>of</span> <span
  m='3633320'>phi,</span> <span m='3633810'>which</span> <span
  m='3634020'>results</span> <span m='3634420'>in</span> <span
  m='3634730'>exponential</span> <span m='3635530'>mean</span> <span
  m='3635780'>reversion</span> <span m='3637500'>that's</span> <span
  m='3637830'>oscillating</span> <span m='3638460'>in</span> <span
  m='3638590'>time,</span> <span m='3638880'>because</span> <span
  m='3639880'>the</span> <span m='3642250'>autoregressive</span> <span
  m='3643040'>coefficient</span> <span m='3644190'>basically</span> <span
  m='3645230'>is</span> <span m='3645950'>a</span> <span
  m='3646040'>negative</span> <span m='3646410'>value.</span> <span
  m='3649180'>And</span> <span m='3650500'>for</span> <span
  m='3650690'>phi</span> <span m='3650940'>equal</span> <span
  m='3651180'>to</span> <span m='3651250'>1,</span> <span m='3652620'>the</span>
  <span m='3653010'>Wold</span> <span m='3653230'>decomposition</span> <span
  m='3653760'>doesn't</span> <span m='3654110'>exist.</span> <span
  m='3654510'>And</span> <span m='3654550'>the</span> <span
  m='3654640'>process</span> <span m='3655090'>is</span> <span
  m='3655260'>the</span> <span m='3655360'>simple</span> <span
  m='3655700'>random</span> <span m='3656020'>walk.</span> </p><p><span
  m='3657860'>So</span> <span m='3658580'>basically,</span> <span
  m='3659570'>if</span> <span m='3659760'>phi</span> <span m='3659980'>is</span>
  <span m='3660080'>equal</span> <span m='3660280'>to 1,</span> <span
  m='3660340'>that</span> <span m='3660860'>means</span> <span
  m='3661310'>that</span> <span m='3662000'>basically</span> <span
  m='3662450'>just</span> <span m='3662780'>changes</span> <span
  m='3663230'>in</span> <span m='3663340'>value</span> <span m='3663730'>of
  the</span> <span m='3663870'>process</span> <span m='3664480'>are</span> <span
  m='3665650'>independent</span> <span m='3666310'>and</span> <span
  m='3666410'>identically</span> <span m='3666840'>distributed</span> <span
  m='3667920'>white</span> <span m='3668160'>noise.</span> <span
  m='3668860'>And</span> <span m='3668970'>that's</span> <span
  m='3669300'>the</span> <span m='3670120'>random</span> <span
  m='3670420'>walk</span> <span m='3670700'>process.</span> <span
  m='3671910'>And</span> <span m='3672420'>that</span> <span
  m='3672730'>process</span> <span m='3673630'>was</span> <span
  m='3674080'>covered</span> <span m='3674370'>in</span> <span
  m='3674500'>earlier</span> <span m='3674810'>lectures</span> <span
  m='3675840'>as</span> <span m='3676540'>non</span> <span
  m='3676800'>stationary.</span> </p><p><span m='3678780'>If</span> <span
  m='3678910'>phi</span> <span m='3679080'>is</span> <span
  m='3679210'>greater</span> <span m='3679460'>than</span> <span
  m='3679560'>1,</span> <span m='3680160'>then</span> <span
  m='3680300'>you</span> <span m='3680360'>have</span> <span
  m='3680580'>an</span> <span m='3680660'>explosive</span> <span
  m='3681190'>process,</span> <span m='3682790'>because</span> <span
  m='3683900'>basically</span> <span m='3684490'>the</span> <span
  m='3684900'>values</span> <span m='3685350'>are</span> <span
  m='3685990'>scaling</span> <span m='3686500'>up</span> <span
  m='3686780'>every</span> <span m='3688140'>time</span> <span
  m='3688470'>increment.</span> <span m='3691000'>So</span> <span
  m='3691150'>those</span> <span m='3691340'>are</span> <span
  m='3691390'>features</span> <span m='3691720'>of</span> <span
  m='3691790'>the</span> <span m='3691930'>AR 1</span> <span
  m='3692490'>model.</span> <span m='3695290'>For</span> <span
  m='3695680'>a</span> <span m='3696250'>general</span> <span
  m='3697420'>autoregressive</span> <span m='3698100'>process</span> <span
  m='3698630'>of</span> <span m='3698730'>order</span> <span
  m='3699020'>p,</span> <span m='3702110'>there's</span> <span
  m='3702430'>a</span> <span m='3702500'>method--</span> <span
  m='3703570'>well,</span> <span m='3704330'>we</span> <span
  m='3704510'>can</span> <span m='3704700'>look</span> <span
  m='3704930'>at</span> <span m='3705140'>the</span> <span
  m='3705260'>second</span> <span m='3705650'>order</span> <span
  m='3705850'>moments</span> <span m='3706280'>of</span> <span
  m='3706420'>that</span> <span m='3706640'>process,</span> <span
  m='3707400'>which</span> <span m='3707490'>have a</span> <span
  m='3707540'>very</span> <span m='3707890'>nice</span> <span
  m='3708110'>structure,</span> <span m='3709590'>and</span> <span
  m='3709760'>then</span> <span m='3709930'>use</span> <span
  m='3710230'>those</span> <span m='3710600'>to</span> <span
  m='3710740'>solve</span> <span m='3711100'>for</span> <span
  m='3711340'>estimates</span> <span m='3711840'>of</span> <span
  m='3712070'>the</span> <span m='3712680'>ARMA</span> <span
  m='3713060'>parameters,</span> <span m='3714380'>or</span> <span
  m='3714630'>autoregressive</span> <span m='3715310'>parameters.</span>
  </p><p><span m='3716630'>And</span> <span m='3718330'>those</span> <span
  m='3718630'>happen</span> <span m='3718990'>to</span> <span
  m='3719050'>be</span> <span m='3719940'>specified</span> <span
  m='3720750'>by</span> <span m='3721090'>what</span> <span
  m='3721280'>are</span> <span m='3721360'>called</span> <span
  m='3721820'>the</span> <span m='3722290'>Yule-Walker</span> <span
  m='3723320'>equations.</span> <span m='3724840'>So</span> <span
  m='3725070'>the</span> <span m='3725330'>Yule-Walker</span> <span
  m='3725650'>equations</span> <span m='3726200'>is</span> <span
  m='3726320'>a</span> <span m='3726390'>standard</span> <span
  m='3726790'>topic</span> <span m='3727270'>in</span> <span
  m='3727390'>time</span> <span m='3727670'>series</span> <span
  m='3727980'>analysis.</span> <span m='3729670'>What</span> <span
  m='3730070'>is</span> <span m='3730280'>it?</span> <span m='3731480'>What
  does</span> <span m='3731590'>it</span> <span m='3731740'>correspond</span>
  <span m='3732330'>to?</span> </p><p><span m='3733030'>Well,</span> <span
  m='3733660'>we</span> <span m='3733820'>take</span> <span
  m='3734070'>our</span> <span m='3734560'>original</span> <span
  m='3735150'>autoregressive</span> <span m='3735830'>process</span> <span
  m='3736320'>of</span> <span m='3736430'>order</span> <span
  m='3736630'>p.</span> <span m='3737470'>And</span> <span m='3738080'>we</span>
  <span m='3738630'>write</span> <span m='3739020'>out</span> <span
  m='3739280'>the</span> <span m='3739370'>formulas</span> <span
  m='3740050'>for</span> <span m='3740630'>the</span> <span
  m='3740790'>covariance</span> <span m='3744400'>at</span> <span
  m='3744580'>lag</span> <span m='3745020'>j</span> <span
  m='3745580'>between</span> <span m='3745970'>two</span> <span
  m='3746170'>observations.</span> <span m='3746900'>So</span> <span
  m='3747570'>what's</span> <span m='3747920'>the</span> <span
  m='3748255'>covariance</span> <span m='3748590'>between</span> <span
  m='3748840'>xt</span> <span m='3749300'>and xt</span> <span
  m='3749760'>minus</span> <span m='3750180'>j?</span> </p><p><span
  m='3751790'>And</span> <span m='3752780'>that</span> <span
  m='3753270'>expression</span> <span m='3755860'>is</span> <span
  m='3756320'>given</span> <span m='3756630'>by</span> <span
  m='3757390'>this</span> <span m='3758200'>equation.</span> <span
  m='3759820'>And</span> <span m='3759900'>so</span> <span
  m='3760020'>this</span> <span m='3760830'>equation</span> <span
  m='3761270'>for</span> <span m='3761440'>gamma</span> <span
  m='3761710'>of</span> <span m='3761980'>j</span> <span m='3762970'>is</span>
  <span m='3763140'>determined</span> <span m='3763690'>simply</span> <span
  m='3763980'>by</span> <span m='3764170'>evaluating</span> <span
  m='3765720'>the</span> <span m='3766720'>expectations</span> <span
  m='3768000'>where</span> <span m='3768250'>we're</span> <span
  m='3768410'>taking</span> <span m='3768700'>the</span> <span
  m='3768760'>expectation</span> <span m='3769510'>of</span> <span
  m='3770290'>xt</span> <span m='3771610'>in</span> <span m='3771810'>the</span>
  <span m='3772020'>autoregressive</span> <span m='3772650'>process</span> <span
  m='3773200'>times</span> <span m='3773620'>the</span> <span
  m='3773760'>fix</span> <span m='3774040'>xt</span> <span
  m='3774500'>minus</span> <span m='3774860'>j</span> <span
  m='3775090'>minus</span> <span m='3775420'>mu.</span> </p><p><span
  m='3776110'>So</span> <span m='3776510'>just</span> <span
  m='3776820'>evaluating</span> <span m='3777450'>those</span> <span
  m='3777640'>terms,</span> <span m='3778420'>you</span> <span
  m='3778540'>can</span> <span m='3778710'>validate</span> <span
  m='3779170'>that</span> <span m='3779290'>this</span> <span
  m='3779490'>is</span> <span m='3779660'>the</span> <span
  m='3780270'>equation.</span> <span m='3782880'>If</span> <span
  m='3782970'>we</span> <span m='3784400'>look</span> <span
  m='3784740'>at</span> <span m='3785850'>the</span> <span
  m='3785990'>equations</span> <span m='3786600'>corresponding</span> <span
  m='3787270'>to</span> <span m='3787480'>j</span> <span
  m='3787850'>equals</span> <span m='3788190'>1--</span> <span
  m='3788620'>so</span> <span m='3788780'>lag</span> <span m='3789160'>1</span>
  <span m='3789620'>up through</span> <span m='3789820'>lag</span> <span
  m='3790090'>p--</span> <span m='3791610'>this</span> <span
  m='3791900'>is</span> <span m='3792040'>what</span> <span
  m='3792300'>those</span> <span m='3792580'>equations</span> <span
  m='3793540'>look</span> <span m='3793780'>like.</span> <span
  m='3796070'>Basically,</span> <span m='3796570'>the</span> <span
  m='3796730'>left</span> <span m='3796990'>hand</span> <span
  m='3797230'>side</span> <span m='3797620'>is</span> <span
  m='3798540'>gamma</span> <span m='3798860'>1</span> <span
  m='3799050'>through</span> <span m='3799220'>gamma</span> <span
  m='3799530'>p.</span> <span m='3800060'>The</span> <span
  m='3800170'>covariance</span> <span m='3800900'>to</span> <span
  m='3801190'>lag</span> <span m='3801430'>1</span> <span m='3801700'>up
  to</span> <span m='3801790'>lag</span> <span m='3802150'>p</span> <span
  m='3803090'>is</span> <span m='3803320'>equal</span> <span
  m='3803690'>to</span> <span m='3805210'>basically</span> <span
  m='3806240'>linear</span> <span m='3806620'>functions</span> <span
  m='3807590'>given</span> <span m='3807830'>by</span> <span
  m='3808010'>the</span> <span m='3808420'>phi</span> <span
  m='3809130'>of</span> <span m='3809290'>the</span> <span
  m='3809430'>other</span> <span m='3809760'>covariances.</span> </p><p><span
  m='3813570'>Who</span> <span m='3813700'>can</span> <span
  m='3813870'>tell</span> <span m='3814070'>me</span> <span
  m='3815020'>what</span> <span m='3815500'>the</span> <span
  m='3815590'>structure is</span> <span m='3816280'>of</span> <span
  m='3816410'>this</span> <span m='3816970'>matrix?</span> <span
  m='3817410'>It's</span> <span m='3817540'>not</span> <span
  m='3817730'>a</span> <span m='3817780'>diagonal</span> <span
  m='3818190'>matrix?</span> <span m='3818590'>What</span> <span
  m='3818700'>kind</span> <span m='3818880'>of</span> <span
  m='3819730'>matrix</span> <span m='3820170'>is</span> <span
  m='3820350'>this?</span> <span m='3822320'>Math trivia</span> <span
  m='3822610'>question here.</span> <span m='3828850'>It</span> <span
  m='3829336'>has a special name.</span> <span m='3832460'>Anyone?</span>
  </p><p><span m='3834600'>It's a</span> <span m='3835000'>Toeplitz</span> <span
  m='3835210'>matrix.</span> <span m='3837690'>The</span> <span
  m='3838150'>off</span> <span m='3838370'>diagonals</span> <span
  m='3838850'>are</span> <span m='3838970'>all</span> <span
  m='3839100'>the</span> <span m='3839170'>same</span> <span
  m='3839430'>value.</span> <span m='3840840'>And</span> <span
  m='3841270'>in</span> <span m='3841420'>fact,</span> <span
  m='3842740'>because</span> <span m='3843160'>of</span> <span
  m='3843330'>the</span> <span m='3843630'>symmetry</span> <span
  m='3844160'>of</span> <span m='3844310'>the</span> <span
  m='3844530'>covariance,</span> <span m='3846680'>basically</span> <span
  m='3846990'>the gamma</span> <span m='3847440'>of</span> <span
  m='3847580'>1</span> <span m='3847890'>is</span> <span
  m='3848010'>equal</span> <span m='3848200'>to</span> <span m='3848270'>gamma
  of</span> <span m='3848650'>minus</span> <span m='3849050'>1.</span> <span
  m='3849750'>Gamma of</span> <span m='3850070'>minus</span> <span
  m='3850370'>2</span> <span m='3850510'>is</span> <span
  m='3850610'>equal</span> <span m='3850750'>to</span> <span
  m='3850810'>gamma</span> <span m='3851120'>plus</span> <span
  m='3851470'>2.</span> <span m='3852680'>Because</span> <span
  m='3852940'>of</span> <span m='3853040'>the</span> <span
  m='3853140'>covariant</span> <span m='3853540'>stationarity,</span> <span
  m='3854640'>it's</span> <span m='3854850'>actually</span> <span
  m='3855150'>also</span> <span m='3855350'>symmetric.</span> </p><p><span
  m='3856700'>So</span> <span m='3856920'>these</span> <span
  m='3857330'>equations</span> <span m='3858870'>allow</span> <span
  m='3859220'>us</span> <span m='3859390'>to</span> <span
  m='3859500'>solve</span> <span m='3860150'>for</span> <span
  m='3861460'>the</span> <span m='3861600'>phis</span> <span
  m='3862630'>so</span> <span m='3862810'>long</span> <span
  m='3863000'>as</span> <span m='3863080'>we</span> <span
  m='3863210'>have</span> <span m='3863470'>estimates</span> <span
  m='3864040'>of</span> <span m='3864230'>these</span> <span
  m='3864420'>covariances.</span> <span m='3865990'>So</span> <span
  m='3866280'>if</span> <span m='3866370'>we</span> <span
  m='3866490'>have</span> <span m='3867270'>a</span> <span
  m='3867360'>system</span> <span m='3867840'>of</span> <span
  m='3867940'>estimates,</span> <span m='3870510'>we</span> <span
  m='3870660'>can</span> <span m='3870780'>plug</span> <span
  m='3871030'>these</span> <span m='3871230'>in</span> <span m='3871460'>in
  an</span> <span m='3871580'>attempt</span> <span m='3871940'>to</span> <span
  m='3872020'>solve</span> <span m='3872370'>this.</span> <span
  m='3873940'>If</span> <span m='3874120'>they're</span> <span
  m='3874280'>consistent</span> <span m='3875320'>estimates</span> <span
  m='3875850'>of</span> <span m='3876000'>the</span> <span
  m='3876140'>covariances,</span> <span m='3876770'>then</span> <span
  m='3876910'>there</span> <span m='3877030'>will</span> <span
  m='3877240'>be</span> <span m='3877350'>a</span> <span
  m='3877420'>solution.</span> </p><p><span m='3878530'>And</span> <span
  m='3878620'>then</span> <span m='3879130'>the</span> <span
  m='3879320'>0th</span> <span m='3879890'>equation,</span> <span
  m='3881430'>which</span> <span m='3881610'>was</span> <span
  m='3881740'>not</span> <span m='3881980'>part</span> <span
  m='3882150'>of</span> <span m='3882200'>the</span> <span
  m='3882300'>series</span> <span m='3883080'>of</span> <span
  m='3883160'>equations--</span> <span m='3883580'>if you</span> <span
  m='3883660'>go</span> <span m='3883790'>back</span> <span
  m='3883990'>and</span> <span m='3884090'>look at the</span> <span
  m='3884280'>0th</span> <span m='3884670'>equation,</span> <span
  m='3885370'>that</span> <span m='3885510'>allows</span> <span
  m='3885740'>you</span> <span m='3885830'>to</span> <span
  m='3885900'>get</span> <span m='3886020'>an</span> <span
  m='3886100'>estimate</span> <span m='3886440'>for</span> <span
  m='3886520'>the</span> <span m='3886620'>sigma</span> <span
  m='3886920'>squared.</span> <span m='3887920'>So</span> <span
  m='3888460'>these</span> <span m='3888990'>Yule-Walker</span> <span
  m='3889530'>equations</span> <span m='3889990'>are</span> <span
  m='3890040'>the</span> <span m='3890150'>way</span> <span
  m='3890920'>in</span> <span m='3891080'>which</span> <span
  m='3891510'>many</span> <span m='3892460'>ARMA</span> <span
  m='3892830'>models</span> <span m='3893460'>are</span> <span
  m='3893790'>specified</span> <span m='3894510'>in</span> <span
  m='3894600'>different</span> <span m='3895900'>statistics</span> <span
  m='3896490'>packages</span> <span m='3897640'>and</span> <span
  m='3899380'>in</span> <span m='3902250'>terms</span> <span
  m='3902550'>of</span> <span m='3902840'>what</span> <span
  m='3903490'>principles</span> <span m='3903940'>are</span> <span
  m='3904010'>being</span> <span m='3904140'>applied.</span> <span
  m='3904400'>Well,</span> <span m='3905590'>if we're</span> <span
  m='3905840'>using</span> <span m='3906470'>unbiased</span> <span
  m='3907160'>estimates</span> <span m='3907630'>of</span> <span
  m='3907720'>these</span> <span m='3908600'>parameters,</span> <span
  m='3909700'>then</span> <span m='3910010'>this</span> <span
  m='3910240'>is</span> <span m='3910360'>applying</span> <span
  m='3910830'>what's</span> <span m='3911010'>called</span> <span
  m='3912055'>the</span> <span m='3912340'>method</span> <span
  m='3912690'>of</span> <span m='3912800'>moments</span> <span
  m='3913180'>principle</span> <span m='3913600'>for</span> <span
  m='3914060'>statistical</span> <span m='3914920'>estimation.</span>
  </p><p><span m='3916250'>And</span> <span m='3916730'>with</span> <span
  m='3917510'>complicated</span> <span m='3918310'>models,</span> <span
  m='3919250'>where</span> <span m='3919620'>sometimes</span> <span
  m='3920030'>the</span> <span m='3920150'>likelihood</span> <span
  m='3920600'>functions</span> <span m='3920960'>are</span> <span
  m='3921010'>very</span> <span m='3921220'>hard</span> <span
  m='3921520'>to</span> <span m='3922680'>specify</span> <span
  m='3923540'>and</span> <span m='3923760'>compute,</span> <span
  m='3925900'>and</span> <span m='3926060'>then</span> <span
  m='3926370'>to</span> <span m='3926500'>do</span> <span
  m='3926610'>optimization</span> <span m='3927280'>over those is</span> <span
  m='3927890'>even</span> <span m='3928050'>harder.</span> <span
  m='3929800'>It</span> <span m='3929940'>can</span> <span
  m='3930250'>turn</span> <span m='3930480'>out</span> <span
  m='3930730'>that</span> <span m='3931690'>there</span> <span
  m='3931890'>are</span> <span m='3932040'>relationships</span> <span
  m='3932780'>between</span> <span m='3933230'>the</span> <span
  m='3933330'>moments</span> <span m='3934260'>of</span> <span
  m='3934420'>the</span> <span m='3934500'>random</span> <span
  m='3934850'>variables,</span> <span m='3935750'>which</span> <span
  m='3935840'>are</span> <span m='3935920'>functions</span> <span
  m='3936770'>of</span> <span m='3936930'>the</span> <span
  m='3937060'>unknown</span> <span m='3937340'>parameters.</span> <span
  m='3938340'>And you</span> <span m='3938550'>can</span> <span
  m='3938820'>solve</span> <span m='3939090'>for</span> <span
  m='3939920'>basically</span> <span m='3940500'>the</span> <span
  m='3940830'>sample</span> <span m='3941230'>moments</span> <span
  m='3941770'>equalling</span> <span m='3942590'>the</span> <span
  m='3943800'>theoretical</span> <span m='3944370'>moments</span> <span
  m='3944850'>and</span> <span m='3945010'>you</span> <span
  m='3945250'>apply</span> <span m='3945510'>the</span> <span
  m='3945640'>method</span> <span m='3945940'>of</span> <span
  m='3946040'>moments</span> <span m='3947480'>estimation</span> <span
  m='3947950'>method.</span> </p><p><span m='3948830'>Econometrics</span> <span
  m='3949610'>is</span> <span m='3951950'>rich</span> <span
  m='3952270'>with</span> <span m='3952510'>many</span> <span
  m='3953170'>applications</span> <span m='3953820'>of</span> <span
  m='3953910'>that</span> <span m='3954170'>principle.</span> <span
  m='3957580'>The</span> <span m='3957700'>next</span> <span
  m='3957940'>section</span> <span m='3958250'>goes</span> <span
  m='3958550'>through</span> <span m='3958890'>the</span> <span
  m='3959860'>moving</span> <span m='3960280'>average</span> <span
  m='3961630'>model.</span> <span m='3965240'>Let me</span> <span
  m='3971290'>highlight</span> <span m='3971710'>this.</span> <span
  m='3972340'>So</span> <span m='3972660'>with</span> <span
  m='3972780'>an</span> <span m='3972900'>order</span> <span
  m='3973180'>q</span> <span m='3973410'>moving</span> <span
  m='3973770'>average,</span> <span m='3976080'>we</span> <span
  m='3976440'>basically have</span> <span m='3976560'>a</span> <span
  m='3976650'>polynomial</span> <span m='3977330'>in</span> <span
  m='3978120'>lag</span> <span m='3978410'>operator,</span> <span
  m='3978850'>L,</span> <span m='3979560'>which</span> <span
  m='3979750'>is</span> <span m='3979950'>operated</span> <span
  m='3980390'>upon</span> <span m='3980700'>the</span> <span
  m='3980850'>eta</span> <span m='3981100'>t's.</span> <span
  m='3982390'>And</span> <span m='3982810'>if</span> <span
  m='3982900'>you</span> <span m='3983320'>write out</span> <span
  m='3983740'>the</span> <span m='3984580'>expectations</span> <span
  m='3985260'>of</span> <span m='3985370'>xt,</span> <span
  m='3985700'>you</span> <span m='3985840'>get</span> <span
  m='3986060'>mu.</span> </p><p><span m='3987030'>The</span> <span
  m='3987120'>variance</span> <span m='3987480'>of</span> <span
  m='3987570'>xt,</span> <span m='3988000'>which is</span> <span
  m='3988460'>gamma 0,</span> <span m='3988650'>is</span> <span
  m='3989150'>sigma</span> <span m='3989480'>squared</span> <span
  m='3989900'>times</span> <span m='3990140'>1</span> <span
  m='3990480'>plus</span> <span m='3991310'>the</span> <span
  m='3991430'>squares</span> <span m='3991940'>of</span> <span
  m='3992780'>the</span> <span m='3993790'>coefficients</span> <span
  m='3994470'>in</span> <span m='3994640'>the</span> <span
  m='3995190'>polynomial.</span> <span m='3996360'>And</span> <span
  m='3996560'>so</span> <span m='3996720'>this</span> <span
  m='3997420'>feature,</span> <span m='3998480'>this</span> <span
  m='3998950'>property</span> <span m='3999370'>here</span> <span
  m='3999660'>is</span> <span m='3999770'>due</span> <span m='3999920'>to</span>
  <span m='3999980'>the</span> <span m='4000060'>fact</span> <span
  m='4000340'>that</span> <span m='4000420'>we</span> <span
  m='4000540'>have</span> <span m='4000870'>uncorrelated</span> <span
  m='4003340'>innovations</span> <span m='4004100'>in</span> <span
  m='4004370'>the</span> <span m='4005980'>eta t's.</span> <span
  m='4007060'>The</span> <span m='4007140'>eta t's are white</span> <span
  m='4007460'>noise.</span> </p><p><span m='4008260'>So</span> <span
  m='4008440'>the</span> <span m='4008550'>only</span> <span
  m='4008690'>thing</span> <span m='4008830'>that</span> <span
  m='4008950'>comes</span> <span m='4009270'>through</span> <span
  m='4009960'>in</span> <span m='4010100'>the</span> <span
  m='4010200'>square</span> <span m='4011440'>of</span> <span
  m='4011610'>xt</span> <span m='4012830'>and</span> <span
  m='4012980'>the</span> <span m='4013080'>expectation</span> <span
  m='4013820'>of</span> <span m='4013910'>that</span> <span
  m='4014550'>is</span> <span m='4014870'>the</span> <span
  m='4014980'>squared</span> <span m='4015430'>powers</span> <span
  m='4016020'>of</span> <span m='4016640'>the</span> <span
  m='4019320'>etas,</span> <span m='4020030'>which</span> <span
  m='4020790'>have</span> <span m='4021240'>coefficients</span> <span
  m='4021900'>given</span> <span m='4022100'>by</span> <span
  m='4022230'>the</span> <span m='4022360'>theta i</span> <span
  m='4022830'>squared.</span> <span m='4023860'>So</span> <span
  m='4024020'>these</span> <span m='4024320'>properties</span> <span
  m='4025200'>are</span> <span m='4026490'>left--</span> <span
  m='4027300'>I'll</span> <span m='4027480'>leave</span> <span
  m='4027730'>you</span> <span m='4027900'>just</span> <span
  m='4028330'>to</span> <span m='4028440'>verify</span> <span
  m='4029170'>very</span> <span m='4029410'>straightforward.</span> </p><p><span
  m='4031142'>But</span> <span m='4031630'>let's</span> <span
  m='4031870'>now</span> <span m='4032020'>turn</span> <span
  m='4032390'>to</span> <span m='4033040'>the</span> <span
  m='4033130'>final</span> <span m='4033670'>minutes</span> <span m='4033990'>of
  the</span> <span m='4034090'>lecture</span> <span m='4034430'>today</span>
  <span m='4034700'>to</span> <span m='4035450'>accommodating</span> <span
  m='4037090'>non</span> <span m='4037480'>stationary</span> <span
  m='4038540'>behavior</span> <span m='4040170'>in</span> <span
  m='4040470'>time</span> <span m='4040780'>series.</span> <span
  m='4043340'>The</span> <span m='4045630'>original</span> <span
  m='4046140'>approaches</span> <span m='4047050'>with</span> <span
  m='4047230'>time</span> <span m='4047520'>series</span> <span
  m='4047990'>was</span> <span m='4048580'>to</span> <span
  m='4049350'>focus</span> <span m='4049920'>on</span> <span
  m='4050940'>estimation</span> <span m='4051560'>methodologies</span> <span
  m='4052320'>for</span> <span m='4053370'>covariant</span> <span
  m='4053910'>stationary</span> <span m='4054440'>process.</span> <span
  m='4054940'>So</span> <span m='4055280'>if</span> <span m='4055420'>the</span>
  <span m='4055830'>series</span> <span m='4056250'>is</span> <span
  m='4056380'>not</span> <span m='4056960'>covariant</span> <span
  m='4057360'>stationary,</span> <span m='4058440'>then</span> <span
  m='4058740'>we</span> <span m='4059070'>would</span> <span
  m='4059270'>want</span> <span m='4059560'>to</span> <span
  m='4059680'>do</span> <span m='4059930'>some</span> <span
  m='4061320'>transformation</span> <span m='4062410'>of</span> <span
  m='4062550'>the</span> <span m='4062630'>data,</span> <span
  m='4063360'>of</span> <span m='4063910'>the</span> <span
  m='4063980'>series,</span> <span m='4064460'>into</span> <span
  m='4065660'>a</span> <span m='4065730'>stationary</span> <span
  m='4068660'>so</span> <span m='4068840'>that</span> <span
  m='4069830'>the</span> <span m='4069940'>resulting</span> <span
  m='4070480'>process is</span> <span m='4071160'>stationary.</span>
  </p><p><span m='4072270'>And</span> <span m='4073570'>with</span> <span
  m='4073850'>the</span> <span m='4073970'>difference</span> <span
  m='4074470'>in</span> <span m='4074720'>operators,</span> <span
  m='4075990'>delta,</span> <span m='4078740'>Box</span> <span
  m='4079010'>and</span> <span m='4079100'>Jenkins</span> <span
  m='4079510'>advocated</span> <span m='4080250'>moving</span> <span
  m='4080610'>non-stationary</span> <span m='4082210'>trending</span> <span
  m='4082670'>behavior,</span> <span m='4083320'>which</span> <span
  m='4083420'>is</span> <span m='4083840'>exhibited</span> <span
  m='4084370'>often</span> <span m='4084690'>in</span> <span
  m='4084860'>economic</span> <span m='4085360'>time</span> <span
  m='4085640'>series,</span> <span m='4086370'>by</span> <span
  m='4086600'>using</span> <span m='4087520'>a</span> <span
  m='4087640'>first</span> <span m='4087990'>difference,</span> <span
  m='4088590'>maybe</span> <span m='4088900'>a</span> <span
  m='4088960'>second</span> <span m='4089360'>difference,</span> <span
  m='4089960'>or a</span> <span m='4090210'>kth</span> <span
  m='4090570'>order</span> <span m='4090820'>difference.</span> <span
  m='4092300'>So</span> <span m='4094120'>these</span> <span
  m='4096850'>operators</span> <span m='4097740'>are</span> <span
  m='4097890'>defined</span> <span m='4098290'>in</span> <span
  m='4098380'>this</span> <span m='4098560'>way.</span> </p><p><span
  m='4100229'>Basically</span> <span m='4100490'>with</span> <span
  m='4100640'>the</span> <span m='4100720'>kth</span> <span
  m='4101029'>order</span> <span m='4101310'>operator</span> <span
  m='4102960'>having</span> <span m='4103310'>this</span> <span
  m='4103550'>expression</span> <span m='4104120'>here,</span> <span
  m='4105020'>this</span> <span m='4105210'>is</span> <span
  m='4105460'>the</span> <span m='4105590'>binomial</span> <span
  m='4106939'>expansion</span> <span m='4108100'>of</span> <span m='4110279'>a
  kth</span> <span m='4110710'>power,</span> <span m='4111189'>which</span>
  <span m='4113189'>can</span> <span m='4113420'>be</span> <span
  m='4113510'>useful.</span> <span m='4115970'>It</span> <span
  m='4116170'>comes</span> <span m='4116390'>up</span> <span
  m='4116529'>all</span> <span m='4116670'>the</span> <span m='4116760'>time
  in</span> <span m='4117229'>probability</span> <span
  m='4117800'>theory.</span> <span m='4120609'>And</span> <span
  m='4120910'>if</span> <span m='4121430'>a</span> <span
  m='4121500'>process</span> <span m='4121990'>has</span> <span
  m='4122140'>a</span> <span m='4122210'>linear</span> <span
  m='4122569'>time</span> <span m='4122859'>trend,</span> <span
  m='4123609'>then</span> <span m='4124960'>delta</span> <span
  m='4125310'>xt</span> <span m='4125859'>is</span> <span
  m='4126020'>going</span> <span m='4126140'>to</span> <span
  m='4126220'>have</span> <span m='4126640'>no</span> <span
  m='4126899'>time</span> <span m='4127170'>trend</span> <span
  m='4127450'>at</span> <span m='4127520'>all,</span> <span
  m='4128390'>because</span> <span m='4129779'>you're</span> <span
  m='4130189'>basically</span> <span m='4130880'>taking</span> <span
  m='4131210'>out</span> <span m='4131390'>that</span> <span
  m='4131600'>linear</span> <span m='4131930'>component</span> <span
  m='4132359'>by</span> <span m='4132450'>taking</span> <span
  m='4132710'>successive</span> <span m='4133220'>differences.</span>
  </p><p><span m='4134430'>Sometimes,</span> <span m='4135479'>if</span> <span
  m='4135649'>you</span> <span m='4136330'>have</span> <span
  m='4136540'>a</span> <span m='4136660'>real</span> <span
  m='4136920'>series</span> <span m='4137330'>and you</span> <span
  m='4137500'>look</span> <span m='4137649'>at</span> <span
  m='4137760'>the</span> <span m='4137880'>difference,</span> <span
  m='4138689'>it</span> <span m='4138979'>appears</span> <span
  m='4139240'>non-stationary,</span> <span m='4139430'>you</span> <span
  m='4139790'>look</span> <span m='4139939'>at</span> <span
  m='4140020'>first</span> <span m='4140250'>differences,</span> <span
  m='4140649'>that</span> <span m='4140819'>can</span> <span
  m='4140939'>still</span> <span m='4142590'>not</span> <span
  m='4142810'>appear</span> <span m='4143069'>to</span> <span
  m='4143140'>be</span> <span m='4143939'>growing</span> <span
  m='4144380'>over</span> <span m='4144560'>time,</span> <span
  m='4144970'>in</span> <span m='4145170'>which</span> <span
  m='4145380'>case</span> <span m='4145649'>sometimes</span> <span
  m='4145990'>the</span> <span m='4146090'>second</span> <span
  m='4146410'>difference</span> <span m='4147770'>will</span> <span
  m='4148420'>result</span> <span m='4148810'>in</span> <span
  m='4148870'>a</span> <span m='4148930'>process</span> <span
  m='4149359'>with</span> <span m='4149479'>no</span> <span
  m='4149670'>trend.</span> <span m='4151270'>So</span> <span
  m='4151439'>these</span> <span m='4151710'>are</span> <span
  m='4152410'>sort</span> <span m='4152550'>of</span> <span
  m='4152720'>convenient</span> <span m='4153250'>tricks,</span> <span
  m='4154170'>techniques</span> <span m='4154760'>to</span> <span
  m='4155479'>render</span> <span m='4155859'>the</span> <span
  m='4156010'>series</span> <span m='4156890'>stationary.</span> </p><p><span
  m='4158250'>And</span> <span m='4160680'>let's</span> <span
  m='4160920'>see.</span> <span m='4161220'>There's</span> <span
  m='4162510'>examples</span> <span m='4163819'>here</span> <span
  m='4164180'>of</span> <span m='4164390'>linear</span> <span
  m='4164710'>trend</span> <span m='4165050'>reversion</span> <span
  m='4165560'>models</span> <span m='4166960'>which</span> <span
  m='4169399'>are</span> <span m='4169600'>rendered</span> <span
  m='4171090'>covariant</span> <span m='4171750'>stationary</span> <span
  m='4172319'>under</span> <span m='4172490'>first</span> <span
  m='4172819'>differencing.</span> <span m='4175330'>In</span> <span
  m='4175460'>this</span> <span m='4175680'>case,</span> <span
  m='4176000'>this</span> <span m='4176189'>is</span> <span
  m='4176890'>an</span> <span m='4177000'>example</span> <span
  m='4177609'>where</span> <span m='4178399'>you</span> <span
  m='4178520'>have</span> <span m='4178689'>a</span> <span
  m='4178760'>deterministic</span> <span m='4179710'>time</span> <span
  m='4180069'>trend.</span> <span m='4181350'>But</span> <span
  m='4181529'>then</span> <span m='4181819'>you</span> <span
  m='4181990'>have</span> <span m='4182189'>reversion</span> <span
  m='4182920'>to</span> <span m='4183100'>the</span> <span
  m='4183260'>time</span> <span m='4183560'>trend</span> <span
  m='4184920'>over</span> <span m='4185220'>time.</span> </p><p><span
  m='4186040'>So</span> <span m='4186430'>we</span> <span
  m='4186670'>basically</span> <span m='4187010'>have</span> <span
  m='4188060'>eta</span> <span m='4188340'>t,</span> <span
  m='4189380'>the</span> <span m='4189569'>error</span> <span
  m='4189880'>about</span> <span m='4190220'>the</span> <span
  m='4190700'>deterministic</span> <span m='4191370'>trend,</span> <span
  m='4192160'>is</span> <span m='4192609'>a</span> <span
  m='4192700'>first</span> <span m='4192960'>order</span> <span
  m='4193180'>autoregressive</span> <span m='4193830'>process.</span> <span
  m='4195740'>And</span> <span m='4196200'>the</span> <span
  m='4196290'>moments</span> <span m='4196780'>here</span> <span
  m='4197880'>can</span> <span m='4198120'>be</span> <span
  m='4198520'>derived</span> <span m='4199080'>this</span> <span
  m='4199270'>way.</span> <span m='4200400'>Leave</span> <span
  m='4200570'>that</span> <span m='4200750'>as</span> <span
  m='4200920'>an</span> <span m='4201010'>exercise.</span> </p><p><span
  m='4204230'>One</span> <span m='4204410'>could</span> <span
  m='4204550'>also</span> <span m='4205090'>consider</span> <span
  m='4206650'>the</span> <span m='4206780'>pure</span> <span
  m='4207120'>integrated</span> <span m='4207610'>process</span> <span
  m='4209510'>and</span> <span m='4210830'>talk</span> <span
  m='4211110'>about</span> <span m='4212950'>stochastic</span> <span
  m='4215260'>trends.</span> <span m='4216330'>And</span> <span
  m='4217390'>basically,</span> <span m='4217790'>random</span> <span
  m='4218250'>walk</span> <span m='4218550'>processes</span> <span
  m='4219140'>are</span> <span m='4219270'>you</span> <span
  m='4219470'>are</span> <span m='4219640'>often</span> <span
  m='4219960'>referred</span> <span m='4220490'>to</span> <span
  m='4221820'>in</span> <span m='4222070'>econometrics</span> <span
  m='4222740'>as</span> <span m='4222990'>stochastic</span> <span
  m='4223660'>trends.</span> <span m='4225010'>And</span> <span
  m='4225410'>you</span> <span m='4225610'>may</span> <span
  m='4225780'>want</span> <span m='4226020'>to</span> <span
  m='4226080'>try</span> <span m='4226350'>and</span> <span
  m='4229380'>remove</span> <span m='4229770'>those</span> <span
  m='4230100'>from</span> <span m='4231130'>the</span> <span
  m='4231270'>data,</span> <span m='4231610'>or</span> <span
  m='4231990'>accommodate</span> <span m='4232680'>them.</span> </p><p><span
  m='4233280'>And</span> <span m='4233510'>so</span> <span
  m='4234910'>the</span> <span m='4235140'>stochastic</span> <span
  m='4235590'>trend</span> <span m='4236410'>process</span> <span
  m='4237960'>is</span> <span m='4239940'>basically</span> <span
  m='4240930'>given</span> <span m='4241290'>by</span> <span
  m='4243420'>the</span> <span m='4243570'>first</span> <span
  m='4243960'>difference,</span> <span m='4244320'>xt,</span> <span
  m='4245810'>is</span> <span m='4246130'>just</span> <span
  m='4246370'>equal</span> <span m='4246740'>to</span> <span m='4248090'>eta
  t.</span> <span m='4249630'>And</span> <span m='4249920'>so</span> <span
  m='4250430'>we</span> <span m='4250700'>have</span> <span
  m='4251250'>essentially</span> <span m='4251720'>this</span> <span
  m='4252290'>random</span> <span m='4252710'>walk</span> <span
  m='4253430'>from</span> <span m='4253860'>a</span> <span
  m='4253930'>given</span> <span m='4254190'>starting</span> <span
  m='4254650'>point.</span> <span m='4255830'>And</span> <span
  m='4256620'>it's</span> <span m='4256830'>easy</span> <span
  m='4257120'>to</span> <span m='4257190'>verify</span> <span
  m='4257580'>it</span> <span m='4257690'>if</span> <span m='4257790'>you</span>
  <span m='4257940'>knew</span> <span m='4258230'>the</span> <span
  m='4258370'>0th</span> <span m='4258760'>point,</span> <span
  m='4260320'>then</span> <span m='4260650'>the</span> <span
  m='4260740'>variance</span> <span m='4261340'>of</span> <span
  m='4261660'>the</span> <span m='4261890'>t'th</span> <span
  m='4262230'>time</span> <span m='4262520'>point</span> <span
  m='4262790'>would</span> <span m='4262930'>be</span> <span
  m='4263140'>t</span> <span m='4263340'>sigma</span> <span
  m='4263690'>squared,</span> <span m='4264770'>because</span> <span
  m='4264940'>we're</span> <span m='4265040'>summing</span> <span
  m='4265540'>t</span> <span m='4266250'>independent</span> <span
  m='4267380'>innovations.</span> </p><p><span m='4269000'>And</span> <span
  m='4269210'>the</span> <span m='4269310'>covariance</span> <span
  m='4271700'>between</span> <span m='4272890'>t</span> <span
  m='4273500'>and</span> <span m='4273630'>lag</span> <span m='4273890'>t</span>
  <span m='4274060'>minus</span> <span m='4274330'>j is</span> <span
  m='4274620'>simply</span> <span m='4275510'>t</span> <span
  m='4275680'>minus</span> <span m='4275950'>j</span> <span
  m='4276130'>sigma</span> <span m='4276460'>squared.</span> <span
  m='4277500'>And</span> <span m='4277850'>the</span> <span
  m='4278040'>correlation</span> <span m='4278770'>between</span> <span
  m='4279140'>those</span> <span m='4279410'>has</span> <span
  m='4279640'>this</span> <span m='4279870'>form.</span> <span
  m='4280860'>What</span> <span m='4281000'>you</span> <span
  m='4281070'>can</span> <span m='4281180'>see</span> <span
  m='4281310'>is</span> <span m='4281410'>that</span> <span
  m='4281570'>this</span> <span m='4281920'>definitely</span> <span
  m='4282310'>depends</span> <span m='4282730'>on</span> <span
  m='4282880'>time.</span> <span m='4283240'>So</span> <span
  m='4283390'>it's</span> <span m='4283520'>not</span> <span
  m='4283820'>a</span> <span m='4283920'>stationary</span> <span
  m='4284540'>process.</span> <span m='4286660'>So</span> <span
  m='4288140'>this</span> <span m='4288360'>first</span> <span
  m='4288580'>differencing</span> <span m='4292240'>results</span> <span
  m='4292680'>in</span> <span m='4292800'>stationarity.</span> <span
  m='4293880'>And the</span> <span m='4294150'>end</span> <span
  m='4294400'>difference</span> <span m='4294750'>process</span> <span
  m='4295200'>has</span> <span m='4295640'>those</span> <span
  m='4295940'>features.</span> </p><p><span m='4307073'>Let's see</span> <span
  m='4307550'>where we are.</span> <span m='4312730'>Final</span> <span
  m='4313160'>topic</span> <span m='4313670'>for</span> <span
  m='4313870'>today</span> <span m='4315900'>is</span> <span
  m='4316810'>just</span> <span m='4317110'>how</span> <span
  m='4317380'>you</span> <span m='4317590'>incorporate</span> <span
  m='4321230'>non-stationary</span> <span m='4322130'>process</span> <span
  m='4322660'>into</span> <span m='4323700'>ARMA</span> <span
  m='4324000'>processes.</span> <span m='4324630'>Well,</span> <span
  m='4326060'>if</span> <span m='4326260'>you</span> <span
  m='4326400'>take</span> <span m='4326670'>first</span> <span
  m='4327080'>differences</span> <span m='4327680'>or</span> <span
  m='4327790'>second</span> <span m='4328110'>differences</span> <span
  m='4328730'>and</span> <span m='4328830'>the</span> <span
  m='4328900'>resulting</span> <span m='4329290'>process</span> <span
  m='4330340'>is</span> <span m='4330620'>covariant</span> <span
  m='4331000'>stationary,</span> <span m='4332270'>then</span> <span
  m='4333140'>we</span> <span m='4333350'>can</span> <span
  m='4333450'>just</span> <span m='4333640'>incorporate</span> <span
  m='4334220'>that</span> <span m='4334410'>differencing</span> <span
  m='4334870'>into</span> <span m='4335070'>the</span> <span
  m='4335170'>model</span> <span m='4335460'>specification</span> <span
  m='4336200'>itself,</span> <span m='4337410'>and</span> <span
  m='4338100'>define</span> <span m='4338690'>ARIMA</span> <span
  m='4339210'>models,</span> <span m='4339610'>Autoregressive</span> <span
  m='4340490'>Integrated</span> <span m='4341030'>Moving</span> <span
  m='4341340'>Average</span> <span m='4341690'>Processes.</span> </p><p><span
  m='4343730'>And</span> <span m='4344160'>so</span> <span m='4344690'>to</span>
  <span m='4344830'>specify</span> <span m='4345280'>these</span> <span
  m='4345530'>models,</span> <span m='4345900'>we</span> <span
  m='4346000'>need</span> <span m='4346160'>to</span> <span
  m='4346240'>determine</span> <span m='4347470'>the</span> <span
  m='4347800'>order</span> <span m='4348120'>of</span> <span
  m='4348180'>the</span> <span m='4348260'>differencing</span> <span
  m='4348680'>required</span> <span m='4349290'>to</span> <span
  m='4349390'>move</span> <span m='4349650'>trends,</span> <span
  m='4350800'>deterministic</span> <span m='4351340'>or</span> <span
  m='4351560'>stochastic,</span> <span m='4352990'>and</span> <span
  m='4353150'>then</span> <span m='4353350'>estimating</span> <span
  m='4353920'>the</span> <span m='4354040'>unknown</span> <span
  m='4354380'>parameters,</span> <span m='4355820'>and</span> <span
  m='4356030'>then</span> <span m='4356210'>applying</span> <span
  m='4356720'>model</span> <span m='4357070'>selection</span> <span
  m='4357540'>criteria.</span> <span m='4358940'>So</span> <span
  m='4359090'>let</span> <span m='4359290'>me</span> <span m='4359980'>go</span>
  <span m='4360210'>very</span> <span m='4360600'>quickly</span> <span
  m='4361010'>through</span> <span m='4362340'>this</span> <span
  m='4363770'>and</span> <span m='4366200'>come</span> <span
  m='4366390'>back</span> <span m='4366660'>to</span> <span
  m='4366800'>it</span> <span m='4367010'>the</span> <span
  m='4367080'>beginning</span> <span m='4367350'>of</span> <span
  m='4367410'>next</span> <span m='4367700'>time.</span> </p><p><span
  m='4368600'>But</span> <span m='4369490'>in</span> <span
  m='4369670'>specifying</span> <span m='4370640'>the</span> <span
  m='4370790'>parameters</span> <span m='4371210'>of</span> <span
  m='4371270'>these</span> <span m='4371450'>models,</span> <span
  m='4371660'>we</span> <span m='4371730'>can</span> <span
  m='4371840'>apply</span> <span m='4372120'>maximum</span> <span
  m='4372670'>likelihood,</span> <span m='4373810'>again,</span> <span
  m='4374410'>if</span> <span m='4374600'>we</span> <span
  m='4374710'>assume</span> <span m='4375050'>normality</span> <span
  m='4375780'>of</span> <span m='4375920'>these</span> <span
  m='4376660'>innovations</span> <span m='4377340'>eta</span> <span
  m='4377630'>t.</span> <span m='4379280'>And</span> <span m='4380360'>we</span>
  <span m='4380550'>can</span> <span m='4380680'>express</span> <span
  m='4381470'>the</span> <span m='4381690'>ARMA</span> <span
  m='4381840'>model</span> <span m='4382260'>in</span> <span m='4382390'>state
  space</span> <span m='4383160'>form,</span> <span m='4383610'>which</span>
  <span m='4384010'>results</span> <span m='4384440'>in</span> <span
  m='4384970'>a</span> <span m='4385050'>form</span> <span
  m='4385430'>for</span> <span m='4386320'>the</span> <span
  m='4386440'>likelihood</span> <span m='4386970'>function,</span> <span
  m='4387650'>which</span> <span m='4387880'>we'll</span> <span
  m='4388410'>see</span> <span m='4388950'>a</span> <span m='4389400'>few</span>
  <span m='4389600'>lectures</span> <span m='4389950'>ahead.</span> </p><p><span
  m='4392130'>But</span> <span m='4392270'>then</span> <span
  m='4392520'>we</span> <span m='4392640'>can</span> <span
  m='4392760'>apply</span> <span m='4394280'>limited</span> <span
  m='4394630'>information,</span> <span m='4395260'>maximum</span> <span
  m='4395670'>likelihood,</span> <span m='4395970'>where</span> <span
  m='4396130'>we</span> <span m='4396250'>just</span> <span
  m='4396430'>condition</span> <span m='4396890'>on</span> <span
  m='4397390'>the</span> <span m='4397500'>first</span> <span
  m='4397870'>observations</span> <span m='4398520'>of</span> <span
  m='4398610'>the</span> <span m='4398680'>data</span> <span
  m='4399470'>and</span> <span m='4400260'>maximize</span> <span
  m='4400910'>the</span> <span m='4401000'>likelihood.</span> <span
  m='4402550'>Or</span> <span m='4404360'>not</span> <span
  m='4404670'>condition</span> <span m='4405060'>on</span> <span
  m='4405150'>the</span> <span m='4405230'>first</span> <span
  m='4405590'>few</span> <span m='4405810'>observations,</span> <span
  m='4406590'>but</span> <span m='4406750'>also</span> <span
  m='4407060'>use</span> <span m='4407650'>their</span> <span
  m='4407980'>information</span> <span m='4408710'>as</span> <span
  m='4408840'>well,</span> <span m='4409660'>and</span> <span
  m='4410360'>look</span> <span m='4410690'>at</span> <span
  m='4411490'>their</span> <span m='4413160'>density</span> <span
  m='4413700'>functions,</span> <span m='4414910'>incorporating</span> <span
  m='4415390'>those</span> <span m='4415680'>into</span> <span
  m='4415820'>the</span> <span m='4415930'>likelihood</span> <span
  m='4416640'>relative</span> <span m='4417020'>to</span> <span
  m='4417120'>the</span> <span m='4417240'>stationary</span> <span
  m='4417780'>distribution</span> <span m='4418540'>for</span> <span
  m='4419690'>their</span> <span m='4419910'>values.</span> </p><p><span
  m='4421160'>And</span> <span m='4421340'>then</span> <span
  m='4421940'>the</span> <span m='4422170'>issue</span> <span
  m='4422360'>becomes,</span> <span m='4422880'>how</span> <span
  m='4423110'>do</span> <span m='4423210'>we</span> <span
  m='4424000'>choose</span> <span m='4424410'>amongst</span> <span
  m='4424730'>different</span> <span m='4425000'>models?</span> <span
  m='4425390'>Now,</span> <span m='4425990'>last</span> <span
  m='4426320'>time</span> <span m='4426450'>we</span> <span
  m='4426560'>talked</span> <span m='4426760'>about</span> <span
  m='4427470'>linear</span> <span m='4427790'>regression</span> <span
  m='4428130'>models,</span> <span m='4428480'>how</span> <span
  m='4428610'>you'd</span> <span m='4428740'>specify a</span> <span
  m='4429210'>given</span> <span m='4429470'>model,</span> <span
  m='4430270'>here,</span> <span m='4430420'>we're</span> <span
  m='4430500'>talking</span> <span m='4430740'>about</span> <span
  m='4431090'>autoregressive,</span> <span m='4431990'>moving</span> <span
  m='4432270'>average,</span> <span m='4433050'>and</span> <span
  m='4433310'>even</span> <span m='4433810'>integrated</span> <span
  m='4434070'>moving average</span> <span m='4434540'>processes</span> <span
  m='4435000'>and</span> <span m='4435430'>how</span> <span
  m='4435590'>do</span> <span m='4435670'>we</span> <span
  m='4435770'>specify</span> <span m='4436200'>those,</span> <span
  m='4436900'>well,</span> <span m='4437780'>with</span> <span
  m='4438130'>the</span> <span m='4438680'>method</span> <span
  m='4439320'>of</span> <span m='4441090'>maximum</span> <span
  m='4441780'>likelihood,</span> <span m='4444150'>there</span> <span
  m='4444540'>are</span> <span m='4445150'>procedures</span> <span
  m='4446470'>which</span> <span m='4447300'>there</span> <span
  m='4447770'>are</span> <span m='4447880'>measures</span> <span
  m='4448660'>of</span> <span m='4449870'>how</span> <span
  m='4450150'>effectively</span> <span m='4451305'>a</span> <span
  m='4451710'>fitted</span> <span m='4452050'>model</span> <span
  m='4452440'>is,</span> <span m='4453090'>given</span> <span
  m='4453380'>by</span> <span m='4453730'>an</span> <span
  m='4453840'>information</span> <span m='4454460'>criterion</span> <span
  m='4456390'>that</span> <span m='4456640'>you</span> <span
  m='4456780'>would</span> <span m='4456980'>want</span> <span
  m='4457270'>to</span> <span m='4458430'>minimize</span> <span
  m='4459880'>for</span> <span m='4460610'>a</span> <span
  m='4460720'>given</span> <span m='4460980'>fitted model.</span> </p><p><span
  m='4461250'>So</span> <span m='4461510'>we can</span> <span
  m='4461770'>consider</span> <span m='4462190'>different</span> <span
  m='4463140'>sets</span> <span m='4463470'>of</span> <span
  m='4463560'>models,</span> <span m='4464950'>different</span> <span
  m='4465250'>numbers of</span> <span m='4465490'>explanatory</span> <span
  m='4466090'>variables,</span> <span m='4466510'>different</span> <span
  m='4466790'>orders</span> <span m='4467450'>of</span> <span
  m='4468520'>autoregressive</span> <span m='4469100'>parameters,</span> <span
  m='4469740'>moving</span> <span m='4470270'>average</span> <span
  m='4470500'>parameters,</span> <span m='4471520'>and</span> <span
  m='4471740'>compute,</span> <span m='4472820'>say,</span> <span
  m='4473100'>the</span> <span m='4473290'>Akaike</span> <span
  m='4473680'>information</span> <span m='4474340'>criterion</span> <span
  m='4476260'>or</span> <span m='4476970'>the</span> <span
  m='4477090'>Bayes</span> <span m='4477390'>information</span> <span
  m='4477940'>criterion</span> <span m='4478440'>or the Hannan-Quinn</span>
  <span m='4479030'>criterion</span> <span m='4479990'>as</span> <span
  m='4480140'>different</span> <span m='4481280'>ways</span> <span
  m='4481710'>of</span> <span m='4481860'>judging</span> <span
  m='4482230'>how</span> <span m='4482560'>good</span> <span
  m='4482960'>different</span> <span m='4483280'>models</span> <span
  m='4483730'>are.</span> <span m='4484720'>And</span> <span
  m='4484910'>let</span> <span m='4485030'>me</span> <span
  m='4485570'>just</span> <span m='4485790'>finish</span> <span
  m='4486030'>today</span> <span m='4486400'>by</span> <span
  m='4487160'>pointing</span> <span m='4487590'>out</span> <span
  m='4487960'>that</span> <span m='4489000'>what</span> <span
  m='4489400'>these</span> <span m='4490440'>information</span> <span
  m='4491070'>criteria</span> <span m='4491860'>are</span> <span
  m='4492620'>is</span> <span m='4493620'>basically</span> <span
  m='4494050'>a</span> <span m='4494130'>function</span> <span
  m='4494860'>of</span> <span m='4495270'>the</span> <span
  m='4495390'>log</span> <span m='4495780'>likelihood</span> <span
  m='4496380'>function,</span> <span m='4498390'>which</span> <span
  m='4498560'>is</span> <span m='4498660'>something</span> <span
  m='4498960'>we're</span> <span m='4499090'>trying</span> <span
  m='4499390'>to</span> <span m='4499490'>maximize</span> <span
  m='4500870'>with</span> <span m='4501040'>maximum</span> <span
  m='4501400'>likelihood</span> <span m='4501730'>estimates.</span> </p><p><span
  m='4504870'>And</span> <span m='4505090'>then</span> <span
  m='4505630'>adding</span> <span m='4506150'>some</span> <span
  m='4506500'>penalty</span> <span m='4507270'>for</span> <span
  m='4507620'>how</span> <span m='4507790'>many</span> <span
  m='4508020'>parameters</span> <span m='4508700'>we're</span> <span
  m='4508880'>estimating.</span> <span m='4511060'>And</span> <span
  m='4511210'>so</span> <span m='4511320'>what</span> <span
  m='4511430'>I'd</span> <span m='4511500'>like</span> <span
  m='4511680'>you</span> <span m='4511750'>to</span> <span
  m='4511830'>think</span> <span m='4512000'>about</span> <span
  m='4512300'>for</span> <span m='4512410'>next</span> <span
  m='4512660'>time</span> <span m='4512950'>is</span> <span
  m='4513770'>what</span> <span m='4514120'>kind</span> <span
  m='4514300'>of</span> <span m='4514380'>a</span> <span
  m='4514450'>penalty</span> <span m='4515120'>is</span> <span
  m='4515250'>appropriate</span> <span m='4516010'>for</span> <span
  m='4518210'>adding</span> <span m='4518600'>an</span> <span
  m='4518740'>extra</span> <span m='4519430'>parameter.</span> <span
  m='4520300'>Like,</span> <span m='4520650'>what</span> <span
  m='4520930'>evidence</span> <span m='4521350'>is</span> <span
  m='4521470'>required</span> <span m='4522230'>to</span> <span
  m='4523080'>incorporate</span> <span m='4523640'>extra</span> <span
  m='4524610'>parameters,</span> <span m='4525330'>extra</span> <span
  m='4525610'>variables,</span> <span m='4526100'>in</span> <span
  m='4526220'>the</span> <span m='4526290'>model.</span> <span m='4528020'>Would
  it</span> <span m='4528260'>be</span> <span m='4528530'>t</span> <span
  m='4528730'>statistics</span> <span m='4529590'>that</span> <span
  m='4530110'>exceeds</span> <span m='4530540'>some</span> <span
  m='4530690'>threshold</span> <span m='4531180'>or</span> <span
  m='4531410'>some</span> <span m='4531630'>other</span> <span
  m='4531810'>criteria.</span> </p><p><span m='4532760'>Turns</span> <span
  m='4533040'>out</span> <span m='4533290'>that</span> <span
  m='4533440'>these</span> <span m='4533610'>are</span> <span
  m='4533730'>all</span> <span m='4533920'>related</span> <span
  m='4534390'>to</span> <span m='4534960'>those</span> <span
  m='4535250'>issues.</span> <span m='4535940'>And</span> <span
  m='4537100'>it's</span> <span m='4537270'>very</span> <span
  m='4537460'>interesting</span> <span m='4537810'>how</span> <span
  m='4538240'>those</span> <span m='4538470'>play</span> <span
  m='4538710'>out.</span> <span m='4539500'>And</span> <span
  m='4540830'>I'll</span> <span m='4541060'>say</span> <span
  m='4542430'>that</span> <span m='4544300'>for</span> <span
  m='4544440'>those</span> <span m='4544650'>of</span> <span
  m='4544710'>you</span> <span m='4544810'>who</span> <span
  m='4544910'>have</span> <span m='4544940'>actually</span> <span
  m='4545180'>seen</span> <span m='4545380'>these</span> <span
  m='4545540'>before,</span> <span m='4546760'>the</span> <span
  m='4546940'>Bayes</span> <span m='4547290'>information</span> <span
  m='4547870'>criterion</span> <span m='4548490'>corresponds</span> <span
  m='4549280'>to</span> <span m='4549480'>an</span> <span
  m='4549580'>assumption</span> <span m='4550080'>that</span> <span
  m='4550220'>there</span> <span m='4550400'>is</span> <span
  m='4550690'>some</span> <span m='4551010'>finite</span> <span
  m='4551710'>number</span> <span m='4552050'>of</span> <span
  m='4552380'>variables</span> <span m='4553500'>in</span> <span
  m='4553650'>the</span> <span m='4553730'>model.</span> <span
  m='4554180'>And</span> <span m='4554340'>you</span> <span
  m='4554670'>know</span> <span m='4554880'>what</span> <span
  m='4555010'>those</span> <span m='4555240'>are.</span> </p><p><span
  m='4557010'>The Hannon-Quinn</span> <span m='4557690'>criterion</span> <span
  m='4558350'>says</span> <span m='4559470'>maybe</span> <span
  m='4559820'>there's</span> <span m='4560060'>an</span> <span
  m='4560150'>infinite</span> <span m='4560530'>number</span> <span
  m='4560870'>of</span> <span m='4560970'>variables</span> <span
  m='4561800'>in</span> <span m='4561900'>the</span> <span
  m='4561970'>model,</span> <span m='4563760'>but</span> <span
  m='4565130'>you</span> <span m='4565270'>want</span> <span
  m='4565570'>to</span> <span m='4566890'>be</span> <span
  m='4567050'>able</span> <span m='4567190'>to</span> <span
  m='4567330'>identify</span> <span m='4567960'>those.</span> <span
  m='4568810'>And</span> <span m='4569000'>so</span> <span
  m='4570180'>anyway,</span> <span m='4570610'>it's</span> <span
  m='4571110'>a</span> <span m='4571180'>very</span> <span
  m='4571560'>challenging</span> <span m='4572000'>problem</span> <span
  m='4572230'>with</span> <span m='4572370'>model</span> <span
  m='4572610'>selection.</span> <span m='4573390'>And</span> <span
  m='4573560'>these</span> <span m='4573790'>criteria</span> <span
  m='4574690'>can</span> <span m='4575060'>be</span> <span
  m='4575170'>used</span> <span m='4575460'>to</span> <span
  m='4575540'>specify</span> <span m='4576000'>those.</span> <span
  m='4576900'>So we'll</span> <span m='4577200'>go through</span> <span
  m='4577500'>that next time.</span> </p>
embedded_media:
  - uid: 98aca7d9ce123b8022427772f9c551b3
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: uBeM1FUk4Ps
  - uid: 8402bdc1a92b9e784c81e31f732745d9
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/uBeM1FUk4Ps/default.jpg'
  - uid: 2afc6de91d8a0fdc65b8e4640fd6f2e7
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
  - uid: b45419cade3e474c2ec158d5b2ca9224
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec08_300k.mp4'
  - uid: aaec5ce5a31b39c19025a9957260017c
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: uBeM1FUk4Ps
  - uid: 946091c47c10583c9c6f362351df53bc
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: uBeM1FUk4Ps.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-8-time-series-analysis-i/uBeM1FUk4Ps.srt
  - uid: 8b998f87736b5f57e7c6085fdce39364
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: uBeM1FUk4Ps.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-8-time-series-analysis-i/uBeM1FUk4Ps.pdf
  - uid: c8b2ac64dfcb1c1cf789cee77e079f42
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 69bae9606292a53f13ac0d6d3c2dd7fb
    parent_uid: 1ecdcbe587b2ed53b7f03584cc70ad3f
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
