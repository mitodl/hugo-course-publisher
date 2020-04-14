---
title: 'Lecture 18: Complexity: Fixed-Parameter Algorithms'
uid: cdf85d48b6247cbff0e731844ce445e8
parent_uid: 59a7a862feb85c8b52509910c07728e5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-18-complexity-fixed-parameter-algorithms
short_url: lecture-18-complexity-fixed-parameter-algorithms
inline_embed_id: '81350518lecture18:complexity:fixed-parameteralgorithms14428533'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine tackles
  NP-hard problems using fixed-parameter algorithms.</p>
  <p><strong>Instructors:</strong> Erik Demaine</p>
related_resources_text: ''
transcript: >-
  <p><span m='70'>The</span> <span m='190'>following</span> <span
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
  m='16210'>mitopencourseware@ocw.mit.edu.</span> </p><p><span m='20874'>ERIK
  DEMAINE: All right.</span> <span m='21680'>Welcome</span> <span
  m='22170'>to</span> <span m='22580'>our</span> <span m='22850'>second</span>
  <span m='23390'>lecture</span> <span m='23880'>on</span> <span
  m='24430'>what</span> <span m='24740'>to</span> <span m='24860'>do</span>
  <span m='25110'>when</span> <span m='25250'>you</span> <span
  m='25380'>have</span> <span m='25630'>an</span> <span m='25720'>NP-hard</span>
  <span m='26280'>problem.</span> <span m='26735'>So</span> <span
  m='27190'>two</span> <span m='27380'>lectures</span> <span
  m='27710'>ago</span> <span m='28110'>we</span> <span m='28220'>saw</span>
  <span m='28510'>how</span> <span m='28530'>to prove a</span> <span
  m='28800'>problem</span> <span m='29150'>is</span> <span
  m='29460'>NP-hard.</span> <span m='30260'>Last</span> <span
  m='30560'>lecture</span> <span m='30880'>we</span> <span m='31030'>saw</span>
  <span m='32090'>if</span> <span m='32250'>you</span> <span
  m='32380'>want</span> <span m='32700'>polynomial</span> <span
  m='33220'>time</span> <span m='34320'>but</span> <span m='34430'>you're</span>
  <span m='34540'>willing</span> <span m='34980'>to</span> <span
  m='35650'>put</span> <span m='35800'>up</span> <span m='35980'>with</span>
  <span m='36170'>a</span> <span m='36910'>not</span> <span
  m='37010'>perfect</span> <span m='37370'>solution,</span> <span
  m='37980'>but</span> <span m='38110'>you</span> <span m='38240'>want</span>
  <span m='38410'>to</span> <span m='38450'>get</span> <span
  m='38640'>within</span> <span m='38910'>some</span> <span
  m='39150'>factor</span> <span m='39570'>of</span> <span m='39850'>the</span>
  <span m='39950'>best</span> <span m='40190'>solution,</span> <span
  m='41130'>that's</span> <span m='41300'>approximation</span> <span
  m='41950'>algorithms.</span> <span m='42800'>Today</span> <span
  m='43140'>we're</span> <span m='43290'>going</span> <span m='43410'>to</span>
  <span m='43500'>do</span> <span m='44770'>a</span> <span
  m='44850'>different</span> <span m='45170'>thing</span> <span
  m='45450'>called</span> <span m='45720'>fixed</span> <span
  m='46020'>parameter</span> <span m='46510'>algorithms.</span> <span
  m='47110'>These</span> <span m='47300'>are</span> <span m='47370'>going</span>
  <span m='47510'>to</span> <span m='47610'>run</span> <span m='47830'>an</span>
  <span m='48030'>exponential</span> <span m='48770'>time</span> <span
  m='49160'>in</span> <span m='49230'>the</span> <span m='49320'>worst</span>
  <span m='49580'>case.</span> <span m='49950'>But</span> <span
  m='50860'>not</span> <span m='51210'>so</span> <span m='51440'>bad</span>
  <span m='51850'>in</span> <span m='52020'>a</span> <span
  m='52280'>certain</span> <span m='52630'>sense,</span> <span
  m='53030'>which</span> <span m='53180'>we'll</span> <span m='53390'>get</span>
  <span m='53590'>to.</span> </p><p><span m='54310'>In</span> <span
  m='54520'>general,</span> <span m='55400'>the</span> <span
  m='55680'>theme</span> <span m='56685'>of</span> <span m='57090'>these</span>
  <span m='57430'>last</span> <span m='60560'>two</span> <span
  m='60730'>lectures</span> <span m='61170'>and</span> <span
  m='61300'>this</span> <span m='61460'>one</span> <span m='63530'>is</span>
  <span m='63750'>that</span> <span m='63850'>we'd</span> <span
  m='64019'>really</span> <span m='64269'>like</span> <span m='64450'>to</span>
  <span m='64550'>solve</span> <span m='64790'>hard</span> <span
  m='65099'>problems.</span> <span m='66110'>We'd</span> <span
  m='66290'>like</span> <span m='66480'>to</span> <span m='66580'>solve</span>
  <span m='66930'>them</span> <span m='67180'>fast,</span> <span
  m='69410'>meaning</span> <span m='69840'>polynomial</span> <span
  m='70380'>time.</span> <span m='76390'>And</span> <span m='76930'>we</span>
  <span m='77350'>would</span> <span m='77630'>like</span> <span
  m='78550'>correct</span> <span m='78910'>solutions,</span> <span
  m='80440'>also</span> <span m='80760'>known</span> <span m='80970'>as</span>
  <span m='81160'>exact</span> <span m='81600'>solutions.</span> <span
  m='87020'>OK.</span> <span m='87300'>We'd</span> <span m='87380'>love</span>
  <span m='87610'>to</span> <span m='87820'>solve</span> <span
  m='88170'>NP-hard</span> <span m='88620'>problems</span> <span
  m='89160'>in</span> <span m='89300'>polynomial</span> <span
  m='89890'>time</span> <span m='90200'>exactly.</span> <span
  m='91470'>But</span> <span m='91650'>that's</span> <span m='91880'>not</span>
  <span m='92040'>possible</span> <span m='92560'>unless</span> <span
  m='92810'>P</span> <span m='93360'>equals</span> <span m='93670'>nP.</span>
  <span m='94450'>So</span> <span m='95240'>pick</span> <span
  m='95460'>any</span> <span m='95680'>two.</span> <span m='97630'>That's</span>
  <span m='97950'>the</span> <span m='99040'>general</span> <span
  m='99290'>idea.</span> </p><p><span m='101200'>This</span> <span
  m='101270'>is</span> <span m='101470'>a</span> <span
  m='104040'>bastardization</span> <span m='104850'>of</span> <span
  m='104990'>a</span> <span m='105060'>joke</span> <span m='105440'>which</span>
  <span m='105690'>is--</span> <span m='107640'>sleep,</span> <span
  m='108260'>friends,</span> <span m='108930'>work--</span> <span
  m='109700'>pick</span> <span m='109930'>any</span> <span
  m='110160'>two.</span> <span m='110970'>That's the</span> <span
  m='111190'>MIT</span> <span m='111580'>motto.</span> <span
  m='113400'>Here</span> <span m='113990'>in</span> <span
  m='114170'>algorithms--</span> <span m='114980'>hard,</span> <span
  m='115300'>fast,</span> <span m='115670'>exact--</span> <span
  m='116100'>pick</span> <span m='116290'>any</span> <span
  m='116520'>two.</span> <span m='117180'>So</span> <span m='117400'>most</span>
  <span m='117800'>of</span> <span m='117870'>this</span> <span
  m='118030'>class</span> <span m='118450'>is</span> <span
  m='118570'>about</span> <span m='119330'>these</span> <span
  m='119650'>two--</span> <span m='120780'>polynomial</span> <span
  m='121300'>time</span> <span m='121540'>algorithms</span> <span
  m='122670'>give</span> <span m='122850'>you</span> <span
  m='123050'>exact</span> <span m='123540'>things.</span> <span
  m='123970'>That's</span> <span m='124250'>the</span> <span
  m='124350'>class</span> <span m='124670'>P.</span> <span
  m='126890'>Last</span> <span m='127930'>lecture</span> <span
  m='129160'>was</span> <span m='129550'>about</span> <span
  m='130840'>hard</span> <span m='131130'>problems.</span> <span
  m='133460'>We</span> <span m='133800'>drop</span> <span
  m='134090'>exactness.</span> <span m='135120'>We</span> <span
  m='135240'>still</span> <span m='135530'>want</span> <span
  m='135780'>polynomial</span> <span m='136280'>time.</span> <span
  m='136980'>We</span> <span m='137080'>still</span> <span
  m='137240'>want</span> <span m='137360'>to</span> <span
  m='137410'>solve</span> <span m='137640'>hard</span> <span
  m='137850'>problems.</span> <span m='138250'>So</span> <span
  m='138370'>this</span> <span m='138590'>is</span> <span
  m='138690'>approximation</span> <span m='139310'>algorithms.</span>
  </p><p><span m='140900'>And</span> <span m='141180'>what</span> <span
  m='141330'>we're</span> <span m='141440'>doing</span> <span
  m='141700'>today</span> <span m='142560'>is</span> <span m='143030'>the</span>
  <span m='143230'>other</span> <span m='143460'>combination.</span> <span
  m='145160'>So</span> <span m='147170'>we</span> <span m='147360'>want</span>
  <span m='147600'>exact,</span> <span m='149300'>but</span> <span
  m='149570'>we're</span> <span m='149730'>going</span> <span
  m='149850'>to</span> <span m='149930'>sacrifice</span> <span
  m='150650'>how</span> <span m='150850'>fast</span> <span
  m='151290'>things</span> <span m='151540'>are.</span> <span m='151710'>They're
  not</span> <span m='152010'>going</span> <span m='152120'>to</span> <span
  m='152180'>be</span> <span m='152450'>polynomial</span> <span
  m='152980'>time</span> <span m='153270'>in</span> <span m='153340'>a</span>
  <span m='153390'>strict</span> <span m='153700'>sense,</span> <span
  m='154570'>but</span> <span m='154890'>it's</span> <span
  m='155060'>going</span> <span m='155170'>to</span> <span m='155220'>be</span>
  <span m='155330'>somewhere</span> <span m='155920'>in</span> <span
  m='156200'>between</span> <span m='156680'>polynomial</span> <span
  m='157790'>and</span> <span m='158060'>exponential.</span> <span
  m='158830'>This</span> <span m='159060'>is</span> <span m='159160'>an</span>
  <span m='159280'>area</span> <span m='159570'>called</span> <span
  m='160690'>FPT</span> <span m='161790'>for</span> <span
  m='162570'>fixed</span> <span m='162820'>parameter</span> <span
  m='163160'>tractability.</span> </p><p><span m='166050'>So</span> <span
  m='166250'>what's</span> <span m='166480'>this</span> <span
  m='166710'>parameter</span> <span m='167320'>business?</span> <span
  m='168600'>In</span> <span m='168780'>general,</span> <span
  m='171510'>the</span> <span m='171780'>idea</span> <span m='172200'>is</span>
  <span m='172530'>that</span> <span m='172790'>we</span> <span
  m='174340'>really</span> <span m='174820'>want</span> <span
  m='175910'>an</span> <span m='176030'>exact</span> <span
  m='177190'>solution</span> <span m='181630'>to</span> <span
  m='182000'>an</span> <span m='182120'>NP-hard</span> <span
  m='182500'>problem,</span> <span m='182840'>which</span> <span
  m='183000'>means</span> <span m='183160'>it</span> <span m='183290'>has</span>
  <span m='183660'>to</span> <span m='183790'>take</span> <span
  m='184040'>exponential</span> <span m='184590'>time</span> <span
  m='184970'>in</span> <span m='185050'>the</span> <span m='185140'>worst</span>
  <span m='185400'>case.</span> <span m='186330'>But</span> <span
  m='186900'>we</span> <span m='187070'>want</span> <span m='187370'>to</span>
  <span m='187550'>confine</span> <span m='191190'>the</span> <span
  m='191280'>exponential</span> <span m='191990'>dependence</span> <span
  m='204000'>to</span> <span m='204450'>something</span> <span
  m='204810'>called</span> <span m='205030'>a</span> <span
  m='205070'>parameter.</span> <span m='212770'>OK.</span> <span
  m='212950'>We</span> <span m='213840'>actually</span> <span
  m='214160'>use</span> <span m='214330'>parameters</span> <span
  m='214750'>all</span> <span m='214880'>the</span> <span
  m='214980'>time.</span> <span m='215480'>For</span> <span
  m='215520'>example,</span> <span m='215860'>on</span> <span
  m='215940'>a</span> <span m='216000'>graph,</span> <span
  m='216410'>there's</span> <span m='216680'>two</span> <span
  m='217660'>typical</span> <span m='218160'>parameters</span> <span
  m='218550'>you</span> <span m='218640'>think</span> <span
  m='218850'>about--</span> <span m='219110'>the</span> <span
  m='219180'>number</span> <span m='219430'>of</span> <span
  m='219480'>vertices</span> <span m='219770'>and</span> <span
  m='220060'>the</span> <span m='220160'>number</span> <span
  m='220450'>of</span> <span m='220520'>edges.</span> <span m='221120'>If</span>
  <span m='221570'>you're</span> <span m='221820'>sorting</span> <span
  m='222200'>an</span> <span m='222350'>array,</span> <span
  m='223110'>the</span> <span m='223780'>usual</span> <span
  m='224120'>parameter</span> <span m='224500'>you</span> <span
  m='224590'>think</span> <span m='224770'>about</span> <span
  m='225050'>is</span> <span m='225320'>the</span> <span m='225550'>size</span>
  <span m='225900'>of</span> <span m='226000'>the</span> <span
  m='226160'>array.</span> <span m='226930'>OK.</span> <span
  m='227070'>That's</span> <span m='227240'>all</span> <span m='227370'>I</span>
  <span m='227450'>mean.</span> </p><p><span m='227730'>A</span> <span
  m='227800'>parameter,</span> <span m='229070'>in</span> <span
  m='229220'>general,</span> <span m='230020'>is</span> <span
  m='230190'>just</span> <span m='230350'>some</span> <span
  m='233870'>kind</span> <span m='234030'>of</span> <span m='234120'>size</span>
  <span m='234860'>or</span> <span m='234950'>complexity</span> <span
  m='235550'>measure.</span> <span m='236520'>So in</span> <span
  m='236850'>general,</span> <span m='237280'>a parameter</span> <span
  m='242790'>is</span> <span m='243020'>going</span> <span m='243300'>to</span>
  <span m='243440'>be--</span> <span m='245100'>we're</span> <span
  m='245370'>going</span> <span m='245470'>to</span> <span
  m='245540'>call</span> <span m='245770'>it</span> <span m='245940'>k</span>
  <span m='249636'>of</span> <span m='250560'>x--</span> <span
  m='250940'>should</span> <span m='251140'>be</span> <span m='251280'>a</span>
  <span m='251340'>non-negative</span> <span m='252010'>integer--</span> <span
  m='257100'>and</span> <span m='257370'>x</span> <span m='258720'>is</span>
  <span m='258880'>the</span> <span m='259019'>input.</span> <span
  m='260870'>So</span> <span m='261390'>you're</span> <span
  m='261600'>thinking</span> <span m='261850'>about</span> <span
  m='262070'>some</span> <span m='262220'>problem,</span> <span
  m='264790'>like</span> <span m='265130'>a</span> <span
  m='265210'>problem</span> <span m='265590'>we'll</span> <span
  m='265720'>be</span> <span m='265840'>looking</span> <span
  m='266080'>at</span> <span m='266200'>today is</span> <span
  m='266590'>vertex</span> <span m='267020'>cover,</span> <span
  m='267750'>which</span> <span m='267940'>we</span> <span m='268050'>saw</span>
  <span m='268440'>in</span> <span m='268740'>the</span> <span
  m='268950'>last</span> <span m='269670'>lecture.</span> </p><p><span
  m='270390'>Vertex</span> <span m='270750'>cover-- you're</span> <span
  m='271100'>given</span> <span m='271380'>a</span> <span
  m='271430'>graph.</span> <span m='273070'>And</span> <span
  m='274640'>based</span> <span m='274890'>on</span> <span
  m='274990'>that</span> <span m='275180'>graph,</span> <span
  m='276560'>we're</span> <span m='276680'>going</span> <span
  m='276810'>to</span> <span m='276910'>define</span> <span
  m='278580'>some</span> <span m='279280'>function</span> <span
  m='279720'>of</span> <span m='279860'>that</span> <span
  m='280090'>graph.</span> <span m='280600'>So</span> <span
  m='280670'>this</span> <span m='280860'>is</span> <span m='280970'>the</span>
  <span m='281100'>input</span> <span m='281460'>to</span> <span
  m='281540'>the</span> <span m='281640'>problem,</span> <span
  m='282620'>and</span> <span m='282790'>k</span> <span m='283060'>is</span>
  <span m='283150'>just</span> <span m='283320'>going</span> <span
  m='283430'>to</span> <span m='283500'>be</span> <span m='283650'>some</span>
  <span m='283880'>non-negative</span> <span m='284370'>integer,</span> <span
  m='284810'>which</span> <span m='284880'>is</span> <span m='284980'>a</span>
  <span m='285040'>function</span> <span m='285410'>of</span> <span
  m='285490'>that</span> <span m='285690'>input.</span> <span
  m='286330'>Just</span> <span m='286530'>some</span> <span
  m='286750'>measure</span> <span m='287470'>of</span> <span
  m='287660'>how</span> <span m='288450'>tough</span> <span
  m='288750'>your</span> <span m='288890'>problem</span> <span
  m='289210'>is.</span> <span m='290227'>OK.</span> </p><p><span
  m='291600'>And</span> <span m='292030'>what</span> <span m='292210'>we</span>
  <span m='292350'>would</span> <span m='292500'>like</span> <span
  m='293210'>is</span> <span m='293580'>a</span> <span m='293720'>running</span>
  <span m='294020'>time</span> <span m='295080'>that is</span> <span
  m='295420'>exponential</span> <span m='296190'>in</span> <span
  m='296320'>k,</span> <span m='297630'>but</span> <span
  m='297860'>polynomial</span> <span m='298610'>in</span> <span
  m='298700'>everything</span> <span m='299130'>else.</span> <span
  m='299420'>Polynomial</span> <span m='300030'>in</span> <span
  m='300260'>the</span> <span m='300370'>size</span> <span m='300790'>of</span>
  <span m='300890'>the</span> <span m='300980'>problem,</span> <span
  m='301420'>in</span> <span m='301530'>v</span> <span m='302006'>and E.</span>
  <span m='303434'>OK.</span> <span m='303910'>So that's</span> <span
  m='304240'>the</span> <span m='305830'>general</span> <span
  m='308980'>goal</span> <span m='310240'>is--</span> <span
  m='310770'>polynomial</span> <span m='316010'>in</span> <span
  m='316260'>the</span> <span m='316350'>problem</span> <span
  m='316780'>size--</span> <span m='321446'>which</span> <span
  m='321900'>we</span> <span m='322050'>usually</span> <span
  m='322340'>call</span> <span m='322620'>n--</span> <span m='323840'>and</span>
  <span m='324620'>exponential</span> <span m='329750'>in</span> <span
  m='329900'>the</span> <span m='330010'>parameter--</span> <span
  m='334890'>which</span> <span m='335250'>I'm</span> <span
  m='335380'>calling--</span> <span m='336070'>just</span> <span
  m='336600'>going</span> <span m='336710'>to</span> <span
  m='336780'>call</span> <span m='337030'>k--</span> <span m='337390'>in</span>
  <span m='337510'>general,</span> <span m='337850'>you</span> <span
  m='337980'>could</span> <span m='338140'>consider</span> <span
  m='338510'>more</span> <span m='338880'>parameters,</span> <span
  m='339500'>but</span> <span m='340120'>we're</span> <span
  m='340220'>just</span> <span m='340350'>going</span> <span
  m='340450'>to</span> <span m='340520'>think</span> <span m='340750'>of</span>
  <span m='341020'>two--</span> <span m='342060'>the</span> <span
  m='342680'>overall</span> <span m='342970'>size</span> <span
  m='343230'>of</span> <span m='343270'>the</span> <span
  m='343340'>problem,</span> <span m='344090'>and</span> <span
  m='344370'>some</span> <span m='344890'>particular</span> <span
  m='345420'>parameter</span> <span m='345770'>that</span> <span
  m='345930'>we</span> <span m='346060'>look</span> <span m='346280'>at</span>
  <span m='346860'>called</span> <span m='347110'>k.</span> </p><p><span
  m='348820'>So</span> <span m='349760'>if</span> <span m='349930'>you</span>
  <span m='350060'>can</span> <span m='350190'>achieve</span> <span
  m='350610'>this,</span> <span m='351350'>which</span> <span
  m='351550'>we'll</span> <span m='351660'>call</span> <span
  m='351890'>fixed</span> <span m='352270'>parameter</span> <span
  m='352710'>tractability--</span> <span m='353340'>I'll</span> <span
  m='353500'>define</span> <span m='353820'>it</span> <span
  m='353940'>formally</span> <span m='354310'>in</span> <span
  m='354400'>a</span> <span m='354460'>little</span> <span
  m='354640'>bit,</span> <span m='354830'>because</span> <span
  m='354990'>there's</span> <span m='355680'>more</span> <span
  m='355810'>than</span> <span m='355910'>one</span> <span m='356060'>way</span>
  <span m='356210'>you</span> <span m='356310'>might</span> <span
  m='356500'>think</span> <span m='356680'>of</span> <span
  m='356760'>defining</span> <span m='357200'>it.</span> <span m='357390'>Some
  are</span> <span m='357690'>right.</span> <span m='357940'>Some are</span>
  <span m='358060'>wrong.</span> <span m='359970'>If</span> <span
  m='360110'>you</span> <span m='360210'>can</span> <span
  m='360330'>achieve</span> <span m='360740'>this,</span> <span
  m='361010'>what</span> <span m='361240'>you</span> <span m='361380'>get</span>
  <span m='361950'>is</span> <span m='362550'>an</span> <span
  m='362720'>exact</span> <span m='363240'>algorithm</span> <span
  m='363640'>for</span> <span m='363770'>your</span> <span
  m='363910'>problem</span> <span m='364760'>that</span> <span
  m='364900'>runs</span> <span m='365310'>really</span> <span
  m='365560'>fast</span> <span m='366130'>provided</span> <span
  m='366840'>k</span> <span m='367210'>is</span> <span m='367390'>small.</span>
  <span m='369060'>So</span> <span m='369160'>this</span> <span
  m='369360'>is</span> <span m='369490'>sort</span> <span m='369700'>of</span>
  <span m='369840'>a way of</span> <span m='370160'>saying,</span> <span
  m='370410'>well,</span> <span m='370720'>you</span> <span
  m='370810'>know</span> <span m='370920'>the</span> <span
  m='371000'>problem</span> <span m='371350'>is</span> <span
  m='371460'>NP-hard</span> <span m='371910'>in</span> <span
  m='372000'>general,</span> <span m='372850'>but</span> <span
  m='372980'>as</span> <span m='373090'>long</span> <span m='373350'>as</span>
  <span m='373470'>this</span> <span m='374230'>measure</span> <span
  m='374650'>k</span> <span m='375100'>is</span> <span
  m='375340'>reasonably</span> <span m='375790'>small,</span> <span
  m='376600'>I'm</span> <span m='376790'>still</span> <span
  m='377110'>able</span> <span m='377300'>to</span> <span
  m='377380'>solve</span> <span m='377700'>it</span> <span
  m='377780'>really</span> <span m='378000'>fast.</span> <span
  m='378590'>So</span> <span m='378730'>it's</span> <span m='378860'>a</span>
  <span m='378920'>way</span> <span m='379180'>of</span> <span
  m='379310'>characterizing</span> <span m='380820'>a</span> <span
  m='380950'>wide</span> <span m='381410'>family</span> <span
  m='382220'>of--</span> <span m='383950'>a</span> <span m='384080'>big</span>
  <span m='384270'>subset</span> <span m='384990'>of</span> <span
  m='385210'>the</span> <span m='385330'>problem</span> <span
  m='386060'>that</span> <span m='386200'>you</span> <span m='386330'>can</span>
  <span m='386650'>solve.</span> </p><p><span m='387100'>You know that</span>
  <span m='387540'>in</span> <span m='387650'>general</span> <span
  m='388100'>you're</span> <span m='388780'>going</span> <span
  m='388920'>to</span> <span m='388980'>need</span> <span
  m='389140'>exponential</span> <span m='389620'>time,</span> <span
  m='390530'>but</span> <span m='390670'>this</span> <span
  m='390860'>gives</span> <span m='391010'>you</span> <span m='391140'>a</span>
  <span m='391200'>measure</span> <span m='391700'>of</span> <span
  m='391760'>how</span> <span m='392080'>hard</span> <span
  m='392950'>your</span> <span m='393250'>input</span> <span
  m='393670'>is.</span> <span m='394130'>May</span> <span m='394260'>not</span>
  <span m='394430'>be</span> <span m='394520'>the</span> <span
  m='394660'>only</span> <span m='394870'>measure.</span> <span
  m='395620'>May</span> <span m='395700'>not</span> <span m='395850'>be</span>
  <span m='395940'>the</span> <span m='396030'>best</span> <span
  m='396360'>one,</span> <span m='396740'>in</span> <span m='396860'>any</span>
  <span m='397020'>sense.</span> <span m='397870'>But</span> <span
  m='398330'>if</span> <span m='398580'>you</span> <span m='399470'>can</span>
  <span m='399620'>define</span> <span m='399950'>a</span> <span
  m='400010'>parameter,</span> <span m='400920'>and</span> <span
  m='401100'>you</span> <span m='401220'>know</span> <span
  m='401540'>that</span> <span m='401700'>in</span> <span m='401850'>your</span>
  <span m='402000'>practical</span> <span m='402530'>scenarios</span> <span
  m='403450'>that</span> <span m='403670'>parameter</span> <span
  m='404040'>will</span> <span m='404200'>be</span> <span
  m='404320'>small,</span> <span m='405150'>then</span> <span
  m='405520'>you're</span> <span m='405700'>golden.</span> <span
  m='406140'>Then</span> <span m='406330'>you</span> <span m='406480'>can</span>
  <span m='406660'>actually</span> <span m='407000'>solve</span> <span
  m='407300'>the</span> <span m='407380'>problem</span> <span
  m='407790'>in</span> <span m='407880'>a</span> <span
  m='407950'>reasonable</span> <span m='408290'>amount</span> <span
  m='408480'>of</span> <span m='408560'>time</span> <span m='408890'>and</span>
  <span m='409140'>get</span> <span m='409260'>an</span> <span
  m='409360'>exact</span> <span m='409840'>solution.</span> <span
  m='410320'>No</span> <span m='410490'>approximation</span> <span
  m='411190'>here.</span> <span m='413340'>So</span> <span
  m='414600'>that's</span> <span m='414770'>the</span> <span
  m='414890'>idea.</span> </p><p><span m='417360'>So</span> <span
  m='421580'>that was</span> <span m='421720'>a</span> <span
  m='421790'>parameter.</span> <span m='423140'>We're</span> <span
  m='423380'>also</span> <span m='423610'>going</span> <span
  m='423730'>to</span> <span m='423810'>define</span> <span m='424430'>a</span>
  <span m='425420'>parameterized</span> <span m='426110'>problem.</span> <span
  m='435540'>This</span> <span m='435960'>is</span> <span m='436070'>just</span>
  <span m='436890'>a</span> <span m='436930'>problem</span> <span
  m='437415'>plus  a</span> <span m='437900'>parameter.</span> <span
  m='445084'>OK.</span> <span m='445570'>So</span> <span m='445740'>we</span>
  <span m='445890'>already</span> <span m='446120'>have</span> <span
  m='446330'>some</span> <span m='446550'>notions</span> <span
  m='447000'>of</span> <span m='447220'>problems.</span> <span
  m='448020'>We</span> <span m='448120'>can</span> <span m='448280'>take</span>
  <span m='448480'>any</span> <span m='448660'>problem</span> <span
  m='449060'>that</span> <span m='449160'>we've</span> <span
  m='449320'>looked</span> <span m='449530'>at</span> <span
  m='449640'>before,</span> <span m='450060'>like</span> <span
  m='450300'>vertex</span> <span m='450680'>cover.</span> <span
  m='451550'>And</span> <span m='451880'>if</span> <span m='452010'>we</span>
  <span m='452110'>just</span> <span m='452280'>define</span> <span
  m='452790'>some</span> <span m='453000'>parameter,</span> <span
  m='454080'>then</span> <span m='454480'>we</span> <span m='454600'>get</span>
  <span m='455140'>a</span> <span m='455300'>parameterized</span> <span
  m='455830'>problem</span> <span m='456160'>when</span> <span
  m='456320'>we</span> <span m='456510'>put</span> <span m='456670'>these
  things</span> <span m='456980'>together.</span> </p><p><span
  m='457720'>And</span> <span m='457890'>usually</span> <span
  m='458310'>we</span> <span m='458450'>would</span> <span
  m='458590'>write</span> <span m='458860'>it</span> <span m='459020'>as</span>
  <span m='459120'>something</span> <span m='459430'>like,</span> <span
  m='460060'>oh,</span> <span m='460260'>take</span> <span
  m='460530'>this</span> <span m='460690'>problem,</span> <span
  m='462120'>and</span> <span m='462290'>then</span> <span
  m='462480'>consider</span> <span m='462960'>it</span> <span
  m='463160'>with</span> <span m='463400'>respect</span> <span
  m='463940'>to</span> <span m='465290'>this</span> <span
  m='465630'>parameter.</span> <span m='469180'>And</span> <span
  m='469350'>in</span> <span m='469440'>general,</span> <span
  m='470640'>for</span> <span m='470920'>a</span> <span m='470980'>single</span>
  <span m='471320'>problem,</span> <span m='471780'>there</span> <span
  m='471900'>may</span> <span m='472030'>be</span> <span
  m='472170'>several</span> <span m='473320'>natural</span> <span
  m='473920'>parameters</span> <span m='474510'>that</span> <span
  m='474610'>you</span> <span m='474810'>want</span> <span m='474950'>to</span>
  <span m='475010'>care</span> <span m='475190'>about.</span> <span
  m='475400'>Usually</span> <span m='475770'>there's</span> <span
  m='475950'>actually</span> <span m='476270'>one</span> <span
  m='477270'>obvious</span> <span m='477730'>parameter.</span> <span
  m='480100'>So</span> <span m='480470'>let's</span> <span m='480970'>do</span>
  <span m='481170'>that</span> <span m='481875'>for</span> <span
  m='482320'>vertex</span> <span m='482740'>cover.</span> </p><p><span
  m='484490'>But</span> <span m='484510'>in</span> <span
  m='484630'>general,</span> <span m='485030'>we</span> <span
  m='485170'>can</span> <span m='485310'>talk</span> <span
  m='485620'>about</span> <span m='486090'>a</span> <span
  m='486210'>problem</span> <span m='486570'>with</span> <span
  m='486720'>respect</span> <span m='487070'>to</span> <span
  m='487170'>different</span> <span m='487490'>parameters.</span> <span
  m='488020'>And</span> <span m='488160'>some</span> <span m='488380'>of</span>
  <span m='488430'>them</span> <span m='488560'>may</span> <span
  m='488710'>be</span> <span m='489030'>feasible</span> <span
  m='489770'>to</span> <span m='489990'>solve</span> <span m='490330'>in</span>
  <span m='490420'>this</span> <span m='490520'>sense.</span> <span
  m='491300'>Some</span> <span m='491610'>maybe</span> <span
  m='491880'>not.</span> <span m='493804'>All right.</span> <span
  m='494680'>So</span> <span m='495340'>I'm</span> <span m='495470'>going</span>
  <span m='495570'>to</span> <span m='495650'>define</span> <span
  m='497520'>k</span> <span m='497880'>vertex</span> <span
  m='498430'>cover.</span> <span m='498910'>This  is</span> <span
  m='500140'>almost</span> <span m='500610'>the</span> <span
  m='500690'>same</span> <span m='500940'>as</span> <span
  m='501060'>vertex</span> <span m='501460'>cover.</span> <span
  m='502562'>It</span> <span m='502920'>just has</span> <span
  m='503100'>a</span> <span m='503150'>k</span> <span m='503340'>in</span> <span
  m='503470'>front.</span> <span m='504200'>But</span> <span
  m='504350'>the</span> <span m='504500'>k</span> <span m='505100'>means</span>
  <span m='505430'>that</span> <span m='505540'>it's</span> <span
  m='505710'>a</span> <span m='505810'>parameterized</span> <span
  m='506540'>problem</span> <span m='507000'>instead</span> <span
  m='507380'>of</span> <span m='508280'>just</span> <span m='508490'>a</span>
  <span m='508540'>general</span> <span m='508880'>problem.</span> </p><p><span
  m='512039'>So</span> <span m='512580'>as</span> <span m='512970'>in</span>
  <span m='513190'>vertex</span> <span m='513590'>cover,</span> <span
  m='513950'>we're</span> <span m='514070'>given</span> <span
  m='514350'>a</span> <span m='514409'>graph</span> <span m='516669'>G.</span>
  <span m='520030'>And</span> <span m='520490'>I'm</span> <span
  m='520539'>going</span> <span m='520659'>to</span> <span
  m='520720'>think</span> <span m='520919'>of</span> <span m='521039'>the</span>
  <span m='521190'>decision</span> <span m='521750'>version</span> <span
  m='522230'>of</span> <span m='522490'>vertex</span> <span
  m='522919'>cover.</span> <span m='523320'>So</span> <span
  m='523530'>we're</span> <span m='523650'>given</span> <span
  m='524510'>a</span> <span m='524630'>non-negative</span> <span
  m='526700'>integer</span> <span m='528250'>k.</span> <span
  m='530260'>And</span> <span m='530430'>we</span> <span m='530540'>want</span>
  <span m='530730'>to</span> <span m='530800'>know--</span> <span
  m='531060'>is</span> <span m='531260'>there</span> <span m='531420'>a</span>
  <span m='531450'>vertex</span> <span m='531890'>cover</span> <span
  m='532550'>of</span> <span m='532720'>size</span> <span m='533040'>k--</span>
  <span m='534470'>say,</span> <span m='534640'>less</span> <span
  m='534880'>than</span> <span m='534960'>or</span> <span
  m='535010'>equal</span> <span m='535210'>to</span> <span m='535280'>k--</span>
  <span m='536420'>is</span> <span m='536870'>there</span> <span
  m='539212'>a</span> <span m='539660'>vertex</span> <span
  m='540070'>cover?</span> <span m='540370'>Remember a</span> <span
  m='540720'>vertex</span> <span m='541170'>cover</span> <span
  m='542140'>is</span> <span m='542650'>a</span> <span m='542720'>set</span>
  <span m='542970'>of</span> <span m='543070'>vertices</span> <span
  m='543880'>that</span> <span m='544050'>cover</span> <span
  m='544380'>all</span> <span m='544640'>the</span> <span
  m='544800'>edges.</span> <span m='551579'>And</span> <span
  m='552060'>we</span> <span m='552240'>want</span> <span m='552450'>the</span>
  <span m='552540'>size</span> <span m='552960'>of</span> <span
  m='553070'>S</span> <span m='553930'>to</span> <span m='554200'>be</span>
  <span m='554420'>less</span> <span m='554710'>than</span> <span
  m='554810'>or</span> <span m='554890'>equal</span> <span m='555140'>to</span>
  <span m='555260'>k.</span> <span m='560160'>OK.</span> </p><p><span
  m='560350'>So</span> <span m='560620'>every</span> <span m='561100'>for</span>
  <span m='561210'>every</span> <span m='561440'>edge,</span> <span
  m='561630'>we</span> <span m='561710'>need</span> <span m='561850'>to</span>
  <span m='561930'>choose</span> <span m='562150'>one</span> <span m='562310'>of
  the</span> <span m='562450'>two</span> <span m='562640'>end</span> <span
  m='562780'>points.</span> <span m='563090'>We</span> <span
  m='563180'>want</span> <span m='563360'>the</span> <span
  m='563450'>total</span> <span m='563800'>number</span> <span
  m='564100'>of</span> <span m='564160'>chosen</span> <span
  m='564490'>vertices</span> <span m='565210'>to</span> <span
  m='565510'>be,</span> <span m='565660'>at</span> <span m='565720'>most,</span>
  <span m='565970'>k.</span> <span m='567350'>And</span> <span
  m='568150'>so</span> <span m='570090'>that's</span> <span m='570430'>a</span>
  <span m='570510'>regular</span> <span m='570840'>decision</span> <span
  m='571250'>problem.</span> <span m='572250'>But for</span> <span
  m='572440'>parameterized</span> <span m='572990'>problem,</span> <span
  m='573530'>we</span> <span m='573610'>also</span> <span m='574020'>want</span>
  <span m='574230'>to</span> <span m='574360'>define</span> <span
  m='574760'>a</span> <span m='574860'>parameter</span> <span
  m='575250'>function.</span> <span m='576230'>And</span> <span
  m='576280'>that</span> <span m='576450'>parameter</span> <span
  m='576770'>function--</span> <span m='577280'>guess</span> <span
  m='577510'>what?</span> <span m='578250'>k.</span> <span
  m='579690'>Most</span> <span m='579990'>obvious</span> <span
  m='580370'>thing,</span> <span m='580630'>given</span> <span
  m='580930'>that</span> <span m='581070'>I</span> <span m='581150'>wrote</span>
  <span m='581420'>the</span> <span m='581510'>letter</span> <span
  m='581760'>k</span> <span m='582060'>here.</span> <span
  m='583010'>That's</span> <span m='583300'>going</span> <span
  m='583410'>to</span> <span m='583480'>be</span> <span m='583640'>our</span>
  <span m='583750'>parameter.</span> <span m='584665'>OK.</span> </p><p><span
  m='585000'>And</span> <span m='585840'>most</span> <span
  m='586250'>problems,</span> <span m='586810'>a</span> <span
  m='586890'>lot</span> <span m='587200'>of</span> <span
  m='587290'>problems,</span> <span m='587700'>especially</span> <span
  m='588340'>decision</span> <span m='588900'>versions</span> <span
  m='589400'>of</span> <span m='589520'>optimization</span> <span
  m='590230'>problems--</span> <span m='590670'>like</span> <span
  m='590840'>before,</span> <span m='591240'>we were</span> <span
  m='591790'>minimizing</span> <span m='592420'>the</span> <span
  m='592490'>vertex</span> <span m='592860'>cover--</span> <span
  m='593140'>this</span> <span m='593330'>is</span> <span m='593460'>the</span>
  <span m='593550'>decision</span> <span m='593960'>version</span> <span
  m='594260'>where</span> <span m='594390'>we</span> <span
  m='594490'>want</span> <span m='594670'>to</span> <span
  m='594750'>decide</span> <span m='595570'>whether</span> <span
  m='595780'>there's</span> <span m='595900'>one</span> <span
  m='596070'>of</span> <span m='596140'>size</span> <span m='596390'>of</span>
  <span m='596460'>most</span> <span m='596680'>k.</span> <span
  m='596870'>If</span> <span m='596950'>you</span> <span m='597050'>can</span>
  <span m='597210'>solve</span> <span m='597500'>this,</span> <span
  m='597690'>of</span> <span m='597770'>course,</span> <span
  m='597950'>you</span> <span m='598040'>can binary</span> <span
  m='598520'>search</span> <span m='598780'>on k,</span> <span
  m='599720'>like</span> <span m='599900'>you</span> <span m='600000'>did</span>
  <span m='600170'>in</span> <span m='600230'>your</span> <span
  m='600370'>quiz.</span> <span m='601420'>Hopefully.</span> </p><p><span
  m='602910'>So</span> <span m='604880'>that's</span> <span
  m='605130'>all</span> <span m='605260'>good.</span> <span
  m='606030'>And</span> <span m='606430'>a</span> <span m='606530'>lot</span>
  <span m='606790'>of</span> <span m='606870'>problems</span> <span
  m='607440'>have</span> <span m='607880'>this</span> <span
  m='608330'>some</span> <span m='609200'>non-negative</span> <span
  m='609720'>integer</span> <span m='610100'>floating</span> <span
  m='610450'>around.</span> <span m='611340'>And</span> <span
  m='611560'>that's</span> <span m='611900'>the,</span> <span
  m='612360'>kind</span> <span m='612520'>of</span> <span m='612610'>the,</span>
  <span m='612760'>obvious</span> <span m='613190'>choice</span> <span
  m='613480'>for</span> <span m='613550'>the</span> <span
  m='613670'>parameter.</span> <span m='614170'>Doesn't</span> <span
  m='614400'>have</span> <span m='614510'>to</span> <span m='614590'>be</span>
  <span m='614690'>the</span> <span m='614820'>only</span> <span
  m='615030'>one.</span> <span m='615720'>But</span> <span
  m='616940'>today,</span> <span m='617360'>we're</span> <span
  m='617510'>just</span> <span m='617740'>going</span> <span
  m='617830'>to</span> <span m='617890'>look</span> <span m='618090'>at</span>
  <span m='618340'>vertex</span> <span m='618730'>cover</span> <span
  m='619450'>with</span> <span m='619660'>this</span> <span
  m='619880'>parameterization.</span> <span m='621470'>In</span> <span
  m='621880'>your</span> <span m='622030'>problem</span> <span
  m='622310'>set,</span> <span m='622500'>you'll</span> <span
  m='622590'>look</span> <span m='622750'>at</span> <span
  m='622810'>another</span> <span m='623090'>problem</span> <span
  m='623440'>with</span> <span m='623610'>another</span> <span
  m='624270'>natural</span> <span m='625540'>parameter.</span> <span
  m='626260'>This</span> <span m='626450'>is</span> <span
  m='626550'>usually</span> <span m='626760'>called</span> <span
  m='626950'>the</span> <span m='627030'>natural</span> <span
  m='627490'>parameter.</span> <span m='630250'>But</span> <span
  m='630500'>there's</span> <span m='630650'>no</span> <span
  m='630780'>formal</span> <span m='631180'>definition</span> <span
  m='631690'>of</span> <span m='631800'>natural.</span> <span
  m='633820'>That's</span> <span m='634100'>just</span> <span
  m='634480'>intuition.</span> <span m='639430'>All</span> <span
  m='639560'>right.</span> <span m='640910'>So</span> <span
  m='641180'>that's</span> <span m='641420'>the</span> <span
  m='641500'>set</span> <span m='641730'>up.</span> </p><p><span
  m='643400'>Let's</span> <span m='643600'>do</span> <span
  m='643700'>some</span> <span m='643880'>algorithms.</span> <span
  m='647540'>I</span> <span m='647670'>guess the</span> <span
  m='647930'>first</span> <span m='648260'>note</span> <span
  m='649670'>is</span> <span m='649910'>that</span> <span m='650090'>k</span>
  <span m='650350'>can</span> <span m='650660'>actually</span> <span
  m='651030'>be</span> <span m='651180'>small.</span> <span
  m='652970'>Nice</span> <span m='653230'>example</span> <span
  m='653730'>is</span> <span m='653960'>a</span> <span m='654020'>star</span>
  <span m='654330'>graph.</span> <span m='659490'>So</span> <span
  m='659910'>you</span> <span m='660070'>have</span> <span m='661010'>the</span>
  <span m='661250'>vertices,</span> <span m='663940'>but</span> <span
  m='664030'>what's</span> <span m='664190'>the</span> <span
  m='664270'>smallest</span> <span m='664600'>vertex</span> <span
  m='664920'>cover?</span> <span m='667500'>1.</span> <span
  m='668650'>Everyone's</span> <span m='668890'>holding</span> <span
  m='669130'>up</span> <span m='669230'>one</span> <span
  m='669430'>finger.</span> <span m='670380'>You</span> <span
  m='670530'>choose</span> <span m='670760'>this</span> <span
  m='670970'>guy--</span> <span m='671610'>that</span> <span
  m='672140'>in</span> <span m='672270'>the</span> <span
  m='672350'>center,</span> <span m='672960'>that</span> <span
  m='673150'>covers</span> <span m='673490'>all</span> <span
  m='673630'>the</span> <span m='673760'>edges.</span> <span
  m='674440'>So</span> <span m='674560'>it</span> <span m='674640'>can</span>
  <span m='674930'>be</span> <span m='675460'>that</span> <span
  m='675600'>k</span> <span m='675840'>is</span> <span m='676010'>much</span>
  <span m='676240'>smaller</span> <span m='676610'>than</span> <span
  m='676780'>v,</span> <span m='677780'>and</span> <span m='678060'>our</span>
  <span m='678190'>goal</span> <span m='678430'>here</span> <span
  m='678760'>is</span> <span m='679090'>that</span> <span
  m='680100'>we're</span> <span m='680420'>going</span> <span
  m='680540'>to</span> <span m='680590'>get</span> <span m='680840'>some</span>
  <span m='681750'>polynomial</span> <span m='682320'>dependence</span> <span
  m='682800'>in</span> <span m='682950'>the</span> <span m='683030'>size</span>
  <span m='683340'>of</span> <span m='683390'>the</span> <span
  m='683480'>graph,</span> <span m='684600'>but</span> <span
  m='684790'>we're</span> <span m='684900'>going</span> <span
  m='685020'>to</span> <span m='685060'>get</span> <span m='685210'>an</span>
  <span m='685330'>exponential</span> <span m='685940'>dependence</span> <span
  m='686410'>on</span> <span m='686590'>k.</span> </p><p><span
  m='688000'>Now</span> <span m='688190'>there</span> <span
  m='688330'>are</span> <span m='688360'>many</span> <span
  m='688660'>different</span> <span m='689590'>ways</span> <span
  m='689860'>you</span> <span m='689970'>could</span> <span
  m='690100'>think</span> <span m='690250'>of</span> <span
  m='690340'>exponential</span> <span m='690810'>dependence,</span> <span
  m='691360'>but</span> <span m='691860'>let's</span> <span
  m='692070'>start</span> <span m='692350'>with--</span> <span
  m='692680'>what</span> <span m='692840'>would</span> <span
  m='692990'>be</span> <span m='693890'>the</span> <span
  m='695400'>really</span> <span m='695730'>obvious</span> <span
  m='696510'>brute</span> <span m='696940'>force</span> <span
  m='697990'>solution</span> <span m='699620'>to</span> <span
  m='699700'>vertex</span> <span m='700150'>cover?</span> <span
  m='700450'>OK.</span> <span m='701030'>I</span> <span m='701150'>want</span>
  <span m='701400'>exact.</span> <span m='703210'>I'm</span> <span
  m='703290'>not</span> <span m='703530'>going</span> <span m='703650'>to</span>
  <span m='703720'>be</span> <span m='703860'>clever.</span> <span
  m='706470'>What's</span> <span m='706790'>the</span> <span
  m='707210'>obvious</span> <span m='707660'>algorithm</span> <span
  m='708170'>to</span> <span m='708490'>solve</span> <span
  m='708860'>this?</span> <span m='711760'>Yeah.</span> </p><p><span
  m='712252'>AUDIENCE: Try</span> <span m='712392'>any</span> <span
  m='712462'>combination</span> <span m='712533'>of</span> <span
  m='712603'>k</span> <span m='712673'>vertices,</span> <span m='712744'>and see
  if</span> <span m='713236'>it's a vertex cover.</span> </p><p><span
  m='714720'>ERIK DEMAINE: Try</span> <span m='714990'>any</span> <span
  m='715240'>combination</span> <span m='715720'>of</span> <span
  m='715780'>k</span> <span m='715930'>vertices.</span> <span m='716380'>See
  if</span> <span m='716560'>it's</span> <span m='716700'>a</span> <span
  m='716740'>vertex</span> <span m='717110'>cover.</span> <span
  m='717330'>How</span> <span m='717540'>many</span> <span
  m='718390'>combinations</span> <span m='718910'>of</span> <span
  m='719010'>k</span> <span m='719150'>vertices</span> <span
  m='719570'>are</span> <span m='719690'>there?</span> <span
  m='722210'>And</span> <span m='722400'>choose</span> <span
  m='722690'>k.</span> <span m='723448'>Good.</span> <span
  m='725790'>Let's</span> <span m='726220'>see.</span> <span m='726510'>I'm a
  little</span> <span m='726800'>out of</span> <span m='727260'>practice. 
  It's</span> <span m='727760'>been</span> <span m='727880'>awhile.</span> <span
  m='728900'>Close.</span> <span m='730210'>Off</span> <span
  m='730410'>by</span> <span m='730550'>one.</span> <span m='732380'>So</span>
  <span m='733330'>try</span> <span m='734850'>all</span> <span
  m='736170'>and</span> <span m='736400'>choose</span> <span
  m='736970'>k.</span> <span m='737550'>I</span> <span m='737660'>guess,</span>
  <span m='737940'>v</span> <span m='738090'>choose</span> <span
  m='738340'>k,</span> <span m='742190'>subsets</span> <span m='745940'>of
  k</span> <span m='746660'>vertices.</span> </p><p><span m='748830'>If</span>
  <span m='749030'>I</span> <span m='749100'>wanted</span> <span
  m='749410'>to</span> <span m='749510'>match</span> <span
  m='749760'>this</span> <span m='749910'>definition</span> <span
  m='750370'>exactly,</span> <span m='750980'>I</span> <span
  m='751020'>should</span> <span m='751220'>try</span> <span
  m='751670'>all</span> <span m='751870'>subsets</span> <span
  m='752380'>of</span> <span m='752550'>less</span> <span m='752920'>than</span>
  <span m='753070'>or</span> <span m='753170'>equal</span> <span
  m='753410'>to</span> <span m='753480'>k</span> <span
  m='753660'>vertices.</span> <span m='754250'>But,</span> <span
  m='754410'>hey,</span> <span m='755870'>if</span> <span m='756030'>I</span>
  <span m='756120'>choose</span> <span m='756900'>fewer</span> <span
  m='757250'>than</span> <span m='757410'>k</span> <span
  m='757590'>vertices,</span> <span m='758060'>why</span> <span
  m='758280'>not</span> <span m='758420'>add</span> <span m='758630'>in</span>
  <span m='759090'>a</span> <span m='759160'>few</span> <span
  m='759370'>extras</span> <span m='759800'>until</span> <span
  m='760060'>I</span> <span m='760120'>get</span> <span m='760310'>up</span>
  <span m='760450'>to</span> <span m='760550'>k.</span> <span
  m='760850'>So</span> <span m='761050'>it's</span> <span
  m='761160'>enough</span> <span m='761390'>to</span> <span
  m='761560'>look</span> <span m='761810'>at</span> <span m='762020'>v</span>
  <span m='762410'>choose</span> <span m='762820'>k</span> <span
  m='763500'>subsets,</span> <span m='764050'>because--</span> <span
  m='764960'>subsets</span> <span m='765350'>of</span> <span
  m='765420'>size</span> <span m='765630'>exactly</span> <span
  m='766160'>k--</span> <span m='766960'>because</span> <span
  m='768110'>that</span> <span m='768260'>will</span> <span
  m='768540'>end</span> <span m='768690'>up</span> <span
  m='768840'>giving</span> <span m='769080'>the</span> <span
  m='769160'>same</span> <span m='769480'>answer</span> <span
  m='770010'>as</span> <span m='770330'>this</span> <span
  m='770490'>question.</span> <span m='772290'>OK.</span> <span
  m='773290'>So</span> <span m='773630'>for</span> <span
  m='773850'>each--</span> <span m='777850'>test</span> <span
  m='778080'>each</span> <span m='778240'>of</span> <span
  m='778310'>those</span> <span m='778490'>choices</span> <span
  m='779540'>for</span> <span m='779800'>coverage.</span> </p><p><span
  m='781370'>So</span> <span m='781530'>that</span> <span m='781710'>just</span>
  <span m='781890'>means</span> <span m='782220'>we</span> <span
  m='782510'>loop</span> <span m='782810'>over--</span> <span
  m='785360'>I</span> <span m='785480'>guess</span> <span m='785730'>for</span>
  <span m='785920'>every</span> <span m='786170'>vertex</span> <span
  m='786700'>in</span> <span m='786830'>our</span> <span m='786940'>set,</span>
  <span m='787590'>we</span> <span m='787810'>mark</span> <span
  m='788190'>all</span> <span m='788400'>of</span> <span m='788500'>the</span>
  <span m='788890'>incident</span> <span m='789320'>edges</span> <span
  m='789710'>as</span> <span m='790040'>covered.</span> <span
  m='790810'>And</span> <span m='790990'>then</span> <span m='791140'>we</span>
  <span m='791240'>go</span> <span m='791380'>through</span> <span
  m='791580'>all</span> <span m='791710'>the</span> <span
  m='791810'>edges,</span> <span m='792090'>and</span> <span
  m='792180'>see</span> <span m='792360'>whether</span> <span m='792750'>every
  one</span> <span m='793180'>got</span> <span m='793410'>marked</span> <span
  m='793630'>covered.</span> <span m='794310'>If</span> <span
  m='794500'>not,</span> <span m='794860'>we</span> <span
  m='795730'>reset</span> <span m='796195'>and</span> <span
  m='796660'>try</span> <span m='796920'>the</span> <span m='797030'>next</span>
  <span m='797250'>subset.</span> <span m='798480'>OK.</span> <span
  m='798650'>This</span> <span m='798810'>is</span> <span m='799000'>like</span>
  <span m='799660'>not</span> <span m='800080'>smart</span> <span
  m='800400'>dynamic</span> <span m='800800'>programming.</span> <span
  m='801270'>You just</span> <span m='801480'>guess</span> <span
  m='801740'>what</span> <span m='801870'>the</span> <span
  m='801970'>subset</span> <span m='802390'>is.</span> <span
  m='803150'>And</span> <span m='803430'>see</span> <span m='803600'>if</span>
  <span m='803710'>it</span> <span m='803810'>covers.</span> </p><p><span
  m='804970'>This</span> <span m='805190'>is</span> <span m='805290'>how</span>
  <span m='805440'>you</span> <span m='805590'>would</span> <span
  m='805690'>prove that</span> <span m='806040'>this</span> <span
  m='806200'>problem</span> <span m='806520'>is</span> <span
  m='806680'>in</span> <span m='806890'>NP.</span> <span
  m='807560'>Right?</span> <span m='808320'>But</span> <span
  m='808470'>now</span> <span m='808710'>we're</span> <span
  m='808840'>actually</span> <span m='809220'>making</span> <span
  m='809630'>it</span> <span m='810230'>an</span> <span
  m='810370'>exponential</span> <span m='810890'>algorithm.</span> <span
  m='811910'>So</span> <span m='812100'>what's</span> <span
  m='812310'>the</span> <span m='812420'>running</span> <span
  m='812660'>time</span> <span m='812880'>of</span> <span m='812940'>this</span>
  <span m='813070'>algorithm?</span> <span m='821825'>Yeah.</span> </p><p><span
  m='822300'>AUDIENCE: E</span> <span m='822435'>times</span> <span
  m='822503'>v</span> <span m='822571'>to</span> <span m='822639'>the</span>
  <span m='822707'>k.</span> </p><p><span m='823260'>ERIK DEMAINE: E</span>
  <span m='823440'>times</span> <span m='823760'>v</span> <span
  m='823910'>to</span> <span m='823980'>the</span> <span m='824110'>k.</span>
  <span m='825364'>Good.</span> <span m='830090'>Must</span> <span
  m='830580'>be.</span> <span m='835220'>So</span> <span
  m='835520'>that's</span> <span m='835930'>obviously</span> <span
  m='836450'>exponential.</span> <span m='837130'>In</span> <span
  m='837280'>a</span> <span m='837340'>certain</span> <span
  m='837710'>sense,</span> <span m='838240'>the</span> <span
  m='838390'>dependence</span> <span m='839010'>on</span> <span
  m='839190'>E</span> <span m='839370'>and</span> <span m='839500'>v</span>
  <span m='839750'>is</span> <span m='840560'>in</span> <span
  m='840820'>the</span> <span m='840930'>bottom,</span> <span
  m='841450'>which</span> <span m='841660'>is</span> <span
  m='841810'>good.</span> <span m='843900'>And</span> <span
  m='843990'>the</span> <span m='844090'>k</span> <span m='844360'>is</span>
  <span m='844490'>in</span> <span m='844580'>the</span> <span
  m='844700'>exponent,</span> <span m='845340'>which</span> <span
  m='845510'>makes</span> <span m='845750'>sense.</span> <span
  m='846420'>So</span> <span m='846700'>this</span> <span m='846910'>is</span>
  <span m='847080'>not</span> <span m='847280'>surprising.</span> <span
  m='848550'>We</span> <span m='848790'>also</span> <span
  m='849770'>don't</span> <span m='850390'>think</span> <span
  m='850590'>of</span> <span m='850690'>it</span> <span m='850770'>as</span>
  <span m='850910'>good.</span> <span m='851220'>We've</span> <span
  m='851410'>defined</span> <span m='851800'>this</span> <span
  m='852000'>to</span> <span m='852140'>be</span> <span m='852360'>bad.</span>
  <span m='854140'>OK.</span> </p><p><span m='855040'>In</span> <span
  m='855210'>general,</span> <span m='856320'>we</span> <span
  m='856390'>think</span> <span m='856680'>of</span> <span m='856830'>a</span>
  <span m='856920'>running</span> <span m='857200'>time</span> <span
  m='857570'>like</span> <span m='857910'>n</span> <span m='858790'>to</span>
  <span m='859060'>the</span> <span m='859230'>f</span> <span
  m='859420'>of</span> <span m='859560'>k,</span> <span m='860980'>where</span>
  <span m='861180'>n</span> <span m='861570'>is</span> <span
  m='861810'>sort</span> <span m='862030'>of</span> <span m='862070'>the</span>
  <span m='862200'>overall</span> <span m='862630'>problem</span> <span
  m='862940'>size</span> <span m='863340'>here.</span> <span
  m='864000'>Here</span> <span m='864240'>n</span> <span m='864450'>is</span>
  <span m='864590'>basically</span> <span m='864900'>v</span> <span
  m='865110'>plus</span> <span m='865440'>E.</span> <span m='865640'>And
  that's</span> <span m='865870'>the</span> <span m='865990'>overall</span>
  <span m='866350'>input</span> <span m='866650'>size</span> <span
  m='867120'>for</span> <span m='867280'>a</span> <span m='867320'>graph.</span>
  <span m='868380'>If</span> <span m='868540'>we</span> <span
  m='868640'>have</span> <span m='868850'>a</span> <span
  m='868910'>running</span> <span m='869140'>time</span> <span
  m='870040'>where</span> <span m='870330'>the</span> <span
  m='870630'>exponent</span> <span m='871340'>of</span> <span
  m='871600'>n</span> <span m='872360'>depends</span> <span m='872900'>on</span>
  <span m='873140'>k,</span> <span m='874190'>in</span> <span
  m='874390'>a</span> <span m='874460'>nontrivial</span> <span
  m='874990'>way,</span> <span m='875490'>we</span> <span
  m='875610'>think</span> <span m='875800'>of</span> <span
  m='875860'>that</span> <span m='876020'>as</span> <span m='876120'>a</span>
  <span m='876170'>bad</span> <span m='876580'>running</span> <span
  m='876850'>time.</span> </p><p><span m='877100'>This</span> <span
  m='877850'>is</span> <span m='878020'>a</span> <span m='878120'>slow</span>
  <span m='878480'>algorithm.</span> <span m='879430'>It's</span> <span
  m='879610'>slow</span> <span m='879870'>because</span> <span
  m='880260'>even</span> <span m='880600'>when</span> <span m='880820'>k</span>
  <span m='881140'>equals</span> <span m='881630'>2--</span> <span
  m='882200'>if</span> <span m='882310'>you</span> <span m='882410'>have</span>
  <span m='882590'>a</span> <span m='882860'>large</span> <span
  m='883250'>graph--</span> <span m='884010'>this</span> <span
  m='884150'>is</span> <span m='884230'>probably</span> <span
  m='884730'>not</span> <span m='884910'>something</span> <span
  m='885170'>you</span> <span m='885280'>want</span> <span m='885460'>to</span>
  <span m='885530'>run.</span> <span m='885900'>Definitely</span> <span
  m='886180'>when</span> <span m='886320'>k</span> <span m='886530'>is</span>
  <span m='886680'>10,</span> <span m='887690'>you're</span> <span
  m='888090'>completely</span> <span m='888470'>hosed.</span> <span
  m='888790'>This</span> <span m='888960'>is</span> <span m='889120'>a</span>
  <span m='889350'>very</span> <span m='889600'>impractical.</span> <span
  m='890720'>And</span> <span m='890880'>the</span> <span
  m='890940'>formal</span> <span m='891300'>sense</span> <span
  m='891590'>in</span> <span m='891650'>which</span> <span m='891810'>it
  is</span> <span m='891990'>impractical</span> <span m='892530'>is that</span>
  <span m='892640'>the</span> <span m='892810'>exponent</span> <span
  m='893155'>in</span> <span m='893500'>n</span> <span m='894620'>depends</span>
  <span m='895120'>on</span> <span m='895280'>k.</span> <span
  m='895710'>In</span> <span m='895840'>general,</span> <span
  m='898450'>you</span> <span m='898640'>cannot</span> <span
  m='899200'>say--</span> <span m='900580'>so</span> <span m='900690'>I'd</span>
  <span m='900780'>like</span> <span m='900950'>to--</span> <span
  m='901600'>I</span> <span m='902050'>mean</span> <span m='902380'>fixed</span>
  <span m='902740'>parameter.</span> <span m='903250'>The</span> <span
  m='903340'>whole</span> <span m='903510'>point</span> <span
  m='903700'>is</span> <span m='903800'>to</span> <span m='903900'>think</span>
  <span m='904160'>of</span> <span m='904250'>the</span> <span
  m='904350'>parameter as</span> <span m='904920'>being</span> <span
  m='905140'>fixed,</span> <span m='905620'>like</span> <span
  m='905950'>a</span> <span m='906090'>constant.</span> <span
  m='907480'>OK.</span> </p><p><span m='907660'>Now</span> <span
  m='908000'>if</span> <span m='908250'>the</span> <span
  m='908360'>parameter</span> <span m='908665'>is</span> <span
  m='908970'>fixed.</span> <span m='909570'>If</span> <span
  m='909660'>you</span> <span m='909760'>think</span> <span m='909950'>of</span>
  <span m='910040'>it</span> <span m='910140'>as</span> <span
  m='910610'>at</span> <span m='910720'>most</span> <span m='910960'>100,</span>
  <span m='912110'>then,</span> <span m='913220'>indeed,</span> <span
  m='913680'>this</span> <span m='913880'>will</span> <span m='914030'>be</span>
  <span m='914210'>at</span> <span m='914310'>most</span> <span
  m='914930'>n</span> <span m='915190'>to</span> <span m='915320'>the</span>
  <span m='915660'>101</span> <span m='916360'>or</span> <span
  m='916460'>something.</span> <span m='916910'>So</span> <span
  m='917170'>it</span> <span m='917280'>is</span> <span
  m='917830'>polynomial</span> <span m='919080'>for</span> <span
  m='919240'>any</span> <span m='919430'>fixed</span> <span m='919790'>k.</span>
  <span m='920580'>The</span> <span m='920700'>catch</span> <span
  m='921090'>is</span> <span m='921300'>that</span> <span m='921420'>the</span>
  <span m='922150'>exponent</span> <span m='922650'>of</span> <span
  m='922720'>the</span> <span m='922830'>polynomial</span> <span
  m='923840'>depends</span> <span m='924270'>on</span> <span
  m='924420'>k.</span> <span m='924780'>As</span> <span m='924960'>you</span>
  <span m='925070'>increase</span> <span m='925550'>k,</span> <span
  m='926390'>as</span> <span m='926680'>you</span> <span
  m='926800'>increase</span> <span m='927140'>your</span> <span
  m='927250'>bound</span> <span m='927590'>on</span> <span m='927740'>k,</span>
  <span m='928000'>the</span> <span m='928170'>exponent</span> <span
  m='929180'>increases.</span> <span m='929720'>I</span> <span
  m='929810'>can't</span> <span m='930130'>say</span> <span
  m='930270'>this</span> <span m='930560'>is</span> <span m='930670'>an</span>
  <span m='930760'>n</span> <span m='930930'>squared</span> <span
  m='931230'>algorithm</span> <span m='931630'>for</span> <span
  m='931810'>any</span> <span m='932020'>fixed</span> <span m='932370'>k.</span>
  <span m='933660'>OK.</span> </p><p><span m='934030'>So</span> <span
  m='935190'>exponent</span> <span m='935890'>depends</span> <span
  m='936290'>on</span> <span m='936440'>k.</span> <span m='938840'>That's</span>
  <span m='939130'>the</span> <span m='939210'>bad</span> <span
  m='939500'>case.</span> <span m='940610'>So</span> <span m='941460'>the</span>
  <span m='941560'>good</span> <span m='941750'>case,</span> <span
  m='942370'>we're</span> <span m='942510'>going</span> <span
  m='942620'>to</span> <span m='942690'>define,</span> <span
  m='945540'>is</span> <span m='945800'>that</span> <span m='947150'>the</span>
  <span m='947280'>exponent</span> <span m='947700'>doesn't</span> <span
  m='948000'>depend</span> <span m='948320'>on</span> <span m='948490'>k.</span>
  <span m='949750'>That</span> <span m='949970'>may</span> <span
  m='950090'>seem</span> <span m='950330'>like</span> <span m='950720'>a</span>
  <span m='950860'>small</span> <span m='951200'>change.</span> <span
  m='951650'>It</span> <span m='951750'>is</span> <span m='951870'>a</span>
  <span m='951930'>small</span> <span m='952200'>change.</span> <span
  m='953280'>But</span> <span m='953480'>it's</span> <span m='953690'>a</span>
  <span m='953740'>big</span> <span m='953950'>one.</span> <span m='957840'>It's
  a</span> <span m='957950'>small</span> <span m='958200'>change</span> <span
  m='958480'>with</span> <span m='958610'>a</span> <span m='958650'>big</span>
  <span m='958840'>effect.</span> <span m='964650'>So</span> <span
  m='965140'>I'm</span> <span m='965790'>going</span> <span m='965900'>to</span>
  <span m='965990'>define,</span> <span m='968381'>let's</span> <span
  m='968870'>say,</span> <span m='969230'>a parameterized</span> <span
  m='970020'>problem</span> <span m='981610'>is</span> <span
  m='982360'>fixed</span> <span m='982720'>parameter</span> <span
  m='983090'>tractable--</span> <span m='993550'>which,</span> <span
  m='993980'>given</span> <span m='994220'>how</span> <span
  m='994420'>many</span> <span m='995000'>letters</span> <span
  m='995330'>that</span> <span m='995500'>is,</span> <span
  m='995730'>we're</span> <span m='995850'>going</span> <span
  m='995980'>to</span> <span m='996020'>abbreviate</span> <span
  m='996520'>to</span> <span m='997050'>FPT--</span> <span m='1001810'>if</span>
  <span m='1003960'>it</span> <span m='1004090'>can</span> <span
  m='1004240'>be</span> <span m='1004340'>solved</span> <span
  m='1011110'>in</span> <span m='1012190'>f</span> <span m='1012440'>of</span>
  <span m='1012580'>k</span> <span m='1014160'>times</span> <span
  m='1014800'>polynomial</span> <span m='1015510'>in</span> <span
  m='1015660'>n.</span> <span m='1020286'>OK.</span> </p><p><span
  m='1020790'>Because</span> <span m='1022140'>this</span> <span
  m='1022340'>means</span> <span m='1023450'>that</span> <span
  m='1024440'>the</span> <span m='1026420'>exponent</span> <span
  m='1027839'>here</span> <span m='1029089'>doesn't</span> <span
  m='1029450'>depend</span> <span m='1029880'>on</span> <span
  m='1030020'>anything.</span> <span m='1035810'>The</span> <span
  m='1036069'>exponent</span> <span m='1036660'>of</span> <span
  m='1036859'>n</span> <span m='1041050'>doesn't</span> <span
  m='1041380'>depend</span> <span m='1041700'>on</span> <span
  m='1041849'>k.</span> <span m='1049660'>OK.</span> <span m='1050000'>So</span>
  <span m='1050230'>for</span> <span m='1051460'>this</span> <span
  m='1051620'>definition--</span> <span m='1052220'>just</span> <span
  m='1052450'>to</span> <span m='1052550'>be</span> <span
  m='1052930'>explicit--</span> <span m='1054820'>I</span> <span
  m='1054950'>want</span> <span m='1055290'>the</span> <span
  m='1055400'>constant</span> <span m='1055880'>here</span> <span
  m='1056720'>to</span> <span m='1056880'>be</span> <span
  m='1057210'>independent--</span> <span m='1059380'>of</span> <span
  m='1059490'>course,</span> <span m='1060070'>it</span> <span
  m='1060120'>should</span> <span m='1060290'>be</span> <span
  m='1060400'>independent</span> <span m='1060820'>of</span> <span
  m='1060950'>n,</span> <span m='1061770'>and it</span> <span
  m='1062010'>should</span> <span m='1062170'>be</span> <span
  m='1062280'>independent</span> <span m='1062780'>of</span> <span
  m='1062910'>k.</span> <span m='1065340'>This</span> <span
  m='1066460'>can</span> <span m='1066600'>be</span> <span
  m='1066790'>any</span> <span m='1067040'>function.</span> <span
  m='1069270'>It's</span> <span m='1069540'>presumably</span> <span
  m='1070180'>an</span> <span m='1070260'>exponential</span> <span
  m='1070850'>function,</span> <span m='1072260'>because</span> <span
  m='1073070'>if</span> <span m='1073160'>this</span> <span
  m='1073340'>is</span> <span m='1073430'>an</span> <span
  m='1073500'>NP-hard</span> <span m='1073890'>problem,</span> <span
  m='1074310'>something's</span> <span m='1074770'>got</span> <span
  m='1074930'>to</span> <span m='1074990'>be</span> <span
  m='1075090'>exponential.</span> <span m='1076060'>This</span> <span
  m='1076300'>clearly</span> <span m='1076690'>is</span> <span
  m='1076830'>not</span> <span m='1077060'>exponential.</span> <span
  m='1078030'>So</span> <span m='1078460'>it's</span> <span
  m='1078560'>got</span> <span m='1078700'>to</span> <span m='1078750'>be</span>
  <span m='1078890'>here.</span> </p><p><span m='1079800'>So</span> <span
  m='1079970'>this</span> <span m='1080160'>is</span> <span m='1080270'>a</span>
  <span m='1080330'>sense</span> <span m='1080600'>in</span> <span
  m='1080650'>which</span> <span m='1080800'>we're</span> <span
  m='1080970'>exponential</span> <span m='1081610'>in k,</span> <span
  m='1082670'>polynomial</span> <span m='1083340'>in</span> <span
  m='1083440'>n.</span> <span m='1084610'>But</span> <span
  m='1084770'>it's</span> <span m='1084920'>much</span> <span
  m='1085260'>better</span> <span m='1086430'>than</span> <span
  m='1086610'>this</span> <span m='1086820'>kind</span> <span
  m='1087010'>of</span> <span m='1087100'>running</span> <span
  m='1087350'>time.</span> <span m='1088520'>OK.</span> <span
  m='1088990'>We</span> <span m='1089180'>can</span> <span
  m='1089310'>think</span> <span m='1089470'>about</span> <span
  m='1089700'>what--</span> <span m='1089950'>in</span> <span
  m='1090190'>the</span> <span m='1090280'>sense</span> <span
  m='1090540'>in</span> <span m='1090660'>which</span> <span m='1090830'>it
  is</span> <span m='1090960'>much</span> <span m='1091230'>better</span> <span
  m='1091510'>once</span> <span m='1091700'>we</span> <span
  m='1091790'>have</span> <span m='1091970'>an</span> <span
  m='1092050'>actual</span> <span m='1092400'>algorithm</span> <span
  m='1092830'>of</span> <span m='1092970'>this</span> <span
  m='1093150'>type.</span> <span m='1093950'>So</span> <span
  m='1094270'>let's</span> <span m='1094640'>do--</span> <span
  m='1095590'>let's</span> <span m='1095790'>try</span> <span
  m='1095950'>to</span> <span m='1096050'>solve</span> <span
  m='1097000'>vertex</span> <span m='1097430'>cover</span> <span
  m='1098890'>in</span> <span m='1099970'>this</span> <span
  m='1100280'>kind</span> <span m='1100510'>of</span> <span
  m='1100610'>time.</span> <span m='1100880'>I</span> <span
  m='1100930'>claim</span> <span m='1101170'>vertex</span> <span
  m='1101520'>cover</span> <span m='1101790'>is</span> <span
  m='1102060'>fixed</span> <span m='1102300'>parameter</span> <span
  m='1102650'>tractable.</span> <span m='1103300'>There</span> <span
  m='1103490'>is</span> <span m='1103580'>such</span> <span
  m='1103820'>an</span> <span m='1103890'>algorithm.</span> </p><p><span
  m='1116650'>And</span> <span m='1116930'>the</span> <span
  m='1117010'>algorithm</span> <span m='1117410'>is</span> <span
  m='1117530'>going</span> <span m='1117670'>to</span> <span
  m='1117760'>look</span> <span m='1118000'>familiar.</span> <span
  m='1119370'>Very</span> <span m='1119650'>similar</span> <span
  m='1120250'>to</span> <span m='1120460'>the</span> <span
  m='1120770'>2-approximation</span> <span m='1121780'>algorithm</span> <span
  m='1122710'>that</span> <span m='1122820'>we</span> <span
  m='1122950'>had</span> <span m='1123190'>last</span> <span
  m='1123460'>class</span> <span m='1124794'>for</span> <span
  m='1125610'>vertex</span> <span m='1126000'>cover.</span> <span
  m='1128540'>So--</span> <span m='1129180'>but</span> <span
  m='1129370'>I'm</span> <span m='1129460'>going</span> <span
  m='1129550'>to</span> <span m='1129590'>give</span> <span
  m='1129750'>it</span> <span m='1129800'>a</span> <span
  m='1129860'>different</span> <span m='1130150'>name,</span> <span
  m='1130490'>which</span> <span m='1130740'>is</span> <span
  m='1132150'>bounded-search-tree.</span> <span m='1146210'>OK.</span> <span
  m='1146360'>This</span> <span m='1146510'>algorithm</span> <span
  m='1146920'>is</span> <span m='1147060'>also</span> <span
  m='1147340'>going</span> <span m='1147490'>to</span> <span
  m='1147550'>feel</span> <span m='1148020'>like</span> <span
  m='1148250'>dynamic</span> <span m='1148640'>programming.</span> <span
  m='1149970'>Or</span> <span m='1150450'>we're</span> <span
  m='1150610'>going</span> <span m='1150700'>to</span> <span
  m='1150740'>use</span> <span m='1150970'>guessing.</span> <span
  m='1151960'>In</span> <span m='1152060'>general,</span> <span
  m='1152400'>exponential</span> <span m='1152950'>algorithms,</span> <span
  m='1153630'>naturally</span> <span m='1154070'>is</span> <span
  m='1154190'>guessing.</span> <span m='1154610'>But</span> <span
  m='1154750'>here,</span> <span m='1155180'>when</span> <span
  m='1155350'>I</span> <span m='1155400'>guess,</span> <span
  m='1156150'>I</span> <span m='1156240'>have</span> <span m='1156360'>to</span>
  <span m='1156460'>try</span> <span m='1156900'>all</span> <span
  m='1157170'>the</span> <span m='1157710'>possibilities.</span> </p><p><span
  m='1158450'>Here</span> <span m='1159120'>this</span> <span
  m='1159280'>was</span> <span m='1159390'>one</span> <span
  m='1159640'>way</span> <span m='1159800'>of</span> <span
  m='1159890'>trying</span> <span m='1160210'>all</span> <span
  m='1160350'>the</span> <span m='1160420'>possibilities.</span> <span
  m='1161110'>We're</span> <span m='1161240'>going</span> <span
  m='1161380'>to</span> <span m='1161440'>be</span> <span m='1161570'>a</span>
  <span m='1161640'>little</span> <span m='1161870'>bit</span> <span
  m='1162060'>more</span> <span m='1162980'>sophisticated</span> <span
  m='1163360'>in</span> <span m='1163740'>how</span> <span m='1163920'>we</span>
  <span m='1164010'>try all the</span> <span m='1164360'>possibilities</span>
  <span m='1164980'>that</span> <span m='1165060'>actually</span> <span
  m='1165370'>exploits</span> <span m='1165960'>the</span> <span
  m='1166070'>properties</span> <span m='1166560'>of</span> <span
  m='1166650'>vertex</span> <span m='1167040'>cover.</span> <span
  m='1170230'>First</span> <span m='1170530'>line</span> <span
  m='1171640'>is</span> <span m='1172130'>just</span> <span
  m='1172360'>like</span> <span m='1172580'>the</span> <span
  m='1173420'>2-approximation</span> <span m='1174260'>algorithm.</span> <span
  m='1175390'>Look</span> <span m='1175640'>at</span> <span
  m='1175780'>any</span> <span m='1176110'>edge</span> <span
  m='1178760'>in</span> <span m='1178900'>the</span> <span
  m='1178980'>graph.</span> <span m='1184050'>OK.</span> <span
  m='1184680'>Here</span> <span m='1184930'>it</span> <span
  m='1184980'>is.</span> <span m='1186150'>From</span> <span
  m='1186360'>u</span> <span m='1186560'>to</span> <span m='1186640'>v.</span>
  <span m='1189120'>What</span> <span m='1189290'>do</span> <span
  m='1189380'>I</span> <span m='1189490'>know</span> <span
  m='1190430'>about</span> <span m='1190720'>that</span> <span
  m='1190900'>picture?</span> <span m='1198030'>Yeah.</span> </p><p><span
  m='1199400'>AUDIENCE:</span> <span m='1199444'>One</span> <span
  m='1199488'>of</span> <span m='1199532'>those</span> <span
  m='1199576'>vertices</span> <span m='1199620'>has</span> <span
  m='1199664'>to</span> <span m='1199708'>be</span> <span m='1199752'>in</span>
  <span m='1199796'>the</span> <span m='1199840'>cover.</span> </p><p><span
  m='1200370'>ERIK DEMAINE: One</span> <span m='1200570'>of</span> <span
  m='1200640'>those</span> <span m='1200820'>vertices</span> <span
  m='1201230'>has</span> <span m='1201500'>to</span> <span m='1201600'>be</span>
  <span m='1201710'>in</span> <span m='1201800'>the</span> <span
  m='1201880'>cover.</span> <span m='1202250'>Either</span> <span
  m='1202530'>u</span> <span m='1203060'>or</span> <span m='1203280'>v</span>
  <span m='1203660'>or</span> <span m='1203960'>both</span> <span
  m='1204700'>are</span> <span m='1204880'>in</span> <span m='1205060'>S</span>
  <span m='1205732'>for</span> <span m='1206070'>that</span> <span
  m='1206260'>edge</span> <span m='1206470'>to</span> <span
  m='1206560'>be</span> <span m='1206680'>covered.</span> <span
  m='1207610'>Now</span> <span m='1207780'>for</span> <span
  m='1207890'>the</span> <span m='1208020'>2-approximation,</span> <span
  m='1208790'>we</span> <span m='1208910'>just</span> <span
  m='1209170'>put</span> <span m='1209400'>those</span> <span
  m='1209610'>both</span> <span m='1209900'>in.</span> <span
  m='1210710'>Here</span> <span m='1210990'>we</span> <span
  m='1211120'>can't</span> <span m='1211330'>afford</span> <span
  m='1211650'>to</span> <span m='1211730'>do</span> <span
  m='1211860'>that</span> <span m='1212190'>because</span> <span
  m='1212370'>we</span> <span m='1212450'>want</span> <span
  m='1212650'>an</span> <span m='1212720'>exact</span> <span
  m='1213200'>solution.</span> <span m='1215260'>So</span> <span
  m='1216320'>we'll</span> <span m='1216530'>try</span> <span
  m='1216810'>both</span> <span m='1217090'>options.</span> <span
  m='1218050'>We</span> <span m='1218150'>don't</span> <span
  m='1218320'>know</span> <span m='1218480'>which</span> <span
  m='1218660'>one</span> <span m='1218840'>belongs.</span> <span
  m='1219770'>Let's</span> <span m='1220000'>guess.</span> </p><p><span
  m='1222690'>So</span> <span m='1222870'>we</span> <span m='1223160'>know
  either</span> <span m='1224040'>u</span> <span m='1224370'>is</span> <span
  m='1224600'>in</span> <span m='1224790'>S</span> <span m='1225720'>or</span>
  <span m='1226450'>v</span> <span m='1226830'>is in S.</span> <span
  m='1229660'>Don't</span> <span m='1229830'>know</span> <span
  m='1229970'>which.</span> <span m='1230750'>So</span> <span
  m='1231020'>guess.</span> <span m='1234470'>Sorry--</span> <span m='1234880'>I
  should,</span> <span m='1235550'>to</span> <span m='1235670'>be</span> <span
  m='1235810'>clear,</span> <span m='1236070'>mention</span> <span
  m='1236390'>or</span> <span m='1236590'>both.</span> <span
  m='1240000'>So</span> <span m='1240060'>we're</span> <span
  m='1240200'>going</span> <span m='1240310'>to</span> <span
  m='1240360'>guess,</span> <span m='1240760'>which</span> <span
  m='1240940'>means</span> <span m='1241100'>we</span> <span
  m='1241200'>need</span> <span m='1241360'>to</span> <span
  m='1241450'>try</span> <span m='1241840'>both</span> <span
  m='1242170'>options.</span> <span m='1243730'>We're</span> <span
  m='1243940'>going</span> <span m='1244030'>to</span> <span
  m='1244100'>try</span> <span m='1245390'>putting</span> <span
  m='1245680'>u</span> <span m='1245940'>in,</span> <span m='1246260'>and</span>
  <span m='1246410'>then</span> <span m='1246510'>we're</span> <span
  m='1246620'>going</span> <span m='1246700'>to</span> <span
  m='1246780'>try</span> <span m='1247050'>putting</span> <span
  m='1247320'>v</span> <span m='1247540'>in.</span> <span m='1248490'>So</span>
  <span m='1248620'>let's</span> <span m='1248760'>just</span> <span
  m='1248900'>see</span> <span m='1249050'>what</span> <span
  m='1249200'>happens</span> <span m='1249950'>when we</span> <span
  m='1250100'>try</span> <span m='1250280'>that.</span> </p><p><span
  m='1250610'>So</span> <span m='1250920'>in the</span> <span
  m='1251050'>first</span> <span m='1251470'>guess,</span> <span
  m='1252250'>we</span> <span m='1252410'>say,</span> <span
  m='1252910'>let's</span> <span m='1253250'>put</span> <span
  m='1253430'>u</span> <span m='1253750'>in</span> <span m='1253960'>S.</span>
  <span m='1256554'>OK.</span> <span m='1257050'>Well,</span> <span
  m='1257540'>if</span> <span m='1257670'>we</span> <span m='1257800'>put</span>
  <span m='1258000'>u</span> <span m='1258200'>in</span> <span
  m='1258310'>S,</span> <span m='1259110'>that</span> <span
  m='1259910'>means</span> <span m='1260120'>we</span> <span
  m='1260290'>cover</span> <span m='1260800'>all</span> <span
  m='1261030'>of</span> <span m='1261140'>the</span> <span
  m='1261290'>edges</span> <span m='1261720'>incident</span> <span
  m='1262180'>to</span> <span m='1262290'>u.</span> <span m='1263390'>So</span>
  <span m='1263950'>I'd</span> <span m='1264110'>like</span> <span
  m='1264300'>to</span> <span m='1265110'>use</span> <span
  m='1265320'>recursion.</span> <span m='1266490'>I'd</span> <span
  m='1266610'>like</span> <span m='1266760'>to</span> <span
  m='1266860'>simplify</span> <span m='1267340'>my</span> <span
  m='1267470'>problem.</span> <span m='1267820'>Get</span> <span
  m='1267970'>another</span> <span m='1268590'>vertex</span> <span
  m='1268970'>cover</span> <span m='1269230'>instance.</span> <span
  m='1270520'>So</span> <span m='1270830'>in</span> <span
  m='1270960'>order</span> <span m='1271130'>to</span> <span
  m='1271250'>do</span> <span m='1271360'>that,</span> <span
  m='1271740'>I'm</span> <span m='1271840'>just</span> <span
  m='1271870'>going</span> <span m='1272000'>to</span> <span
  m='1272080'>delete</span> <span m='1272480'>u</span> <span
  m='1273360'>and</span> <span m='1273590'>all</span> <span
  m='1273720'>of</span> <span m='1273830'>its</span> <span
  m='1273970'>incident</span> <span m='1274320'>edges.</span> <span
  m='1274730'>We</span> <span m='1274830'>do</span> <span m='1274920'>the</span>
  <span m='1275010'>similar</span> <span m='1275370'>thing</span> <span
  m='1275610'>in</span> <span m='1275670'>the</span> <span
  m='1275760'>approximation</span> <span m='1276340'>algorithm</span> <span
  m='1276700'>but</span> <span m='1276890'>for</span> <span m='1277010'>u</span>
  <span m='1277210'>and</span> <span m='1277330'>v</span> <span
  m='1277490'>simultaneously.</span> <span m='1278800'>So</span> <span
  m='1279150'>delete</span> <span m='1281680'>u</span> <span
  m='1282770'>as</span> <span m='1283370'>incident</span> <span
  m='1283810'>edges.</span> <span m='1287230'>Now</span> <span
  m='1287450'>we</span> <span m='1287550'>have</span> <span m='1287790'>a</span>
  <span m='1288180'>vertex</span> <span m='1288560'>cover</span> <span
  m='1288850'>instance.</span> </p><p><span m='1289520'>There's</span> <span
  m='1289790'>one</span> <span m='1290020'>other</span> <span
  m='1290210'>thing.</span> <span m='1290750'>There's</span> <span
  m='1290820'>a</span> <span m='1290870'>new</span> <span
  m='1291000'>graph</span> <span m='1291410'>we</span> <span
  m='1291530'>have.</span> <span m='1292230'>But</span> <span
  m='1292350'>we</span> <span m='1292480'>also</span> <span
  m='1292700'>need</span> <span m='1292860'>to</span> <span
  m='1292980'>update</span> <span m='1293420'>k.</span> <span
  m='1294050'>Because</span> <span m='1294220'>we</span> <span
  m='1294320'>just</span> <span m='1294560'>used</span> <span
  m='1295530'>one</span> <span m='1295830'>of</span> <span
  m='1295980'>those--</span> <span m='1297900'>we</span> <span
  m='1298050'>just</span> <span m='1298230'>added</span> <span
  m='1298480'>something</span> <span m='1298790'>to</span> <span
  m='1298860'>S,</span> <span m='1299660'>and</span> <span
  m='1299820'>then</span> <span m='1299940'>we</span> <span
  m='1300050'>deleted</span> <span m='1300440'>that</span> <span
  m='1300640'>from</span> <span m='1300770'>the</span> <span
  m='1300850'>graph.</span> <span m='1301270'>Which</span> <span
  m='1301340'>means,</span> <span m='1301910'>in</span> <span
  m='1302070'>our</span> <span m='1302170'>new</span> <span
  m='1302390'>graph,</span> <span m='1302720'>effectively</span> <span
  m='1303310'>k</span> <span m='1303640'>has</span> <span
  m='1303830'>gone</span> <span m='1304020'>down</span> <span
  m='1304240'>by</span> <span m='1304380'>1.</span> <span m='1305870'>OK.</span>
  <span m='1306040'>So</span> <span m='1306300'>I'll</span> <span
  m='1306390'>say</span> <span m='1306600'>decrement</span> <span
  m='1307240'>k.</span> <span m='1311430'>Now</span> <span m='1311710'>I</span>
  <span m='1311830'>have</span> <span m='1312280'>a</span> <span
  m='1312390'>new</span> <span m='1312590'>instance.</span> <span
  m='1313020'>I</span> <span m='1313080'>have</span> <span m='1313250'>a</span>
  <span m='1313300'>new</span> <span m='1313450'>graph</span> <span
  m='1314300'>and</span> <span m='1314460'>a</span> <span
  m='1314540'>different</span> <span m='1314850'>value</span> <span
  m='1315190'>of</span> <span m='1315280'>k.</span> <span
  m='1317050'>Recurse</span> <span m='1318970'>this</span> <span
  m='1319220'>algorithm.</span> </p><p><span m='1324500'>I</span> <span
  m='1324610'>would</span> <span m='1324760'>say--</span> <span
  m='1325140'>I'll</span> <span m='1325280'>call the new</span> <span
  m='1325670'>graph</span> <span m='1325980'>G</span> <span
  m='1326170'>prime</span> <span m='1327110'>and</span> <span
  m='1327340'>the</span> <span m='1327520'>integer</span> <span
  m='1327990'>k</span> <span m='1328190'>prime.</span> <span
  m='1328650'>k</span> <span m='1328810'>prime</span> <span
  m='1329110'>equals</span> <span m='1329360'>k</span> <span
  m='1329560'>minus</span> <span m='1329880'>1.</span> <span
  m='1331600'>And</span> <span m='1331840'>then</span> <span
  m='1332500'>the</span> <span m='1332680'>second</span> <span
  m='1332980'>case</span> <span m='1333360'>is</span> <span
  m='1333600'>do</span> <span m='1333710'>the</span> <span
  m='1333800'>same</span> <span m='1334070'>thing</span> <span
  m='1334320'>for</span> <span m='1334510'>v.</span> <span m='1334950'>I</span>
  <span m='1335060'>won't</span> <span m='1335280'>write</span> <span
  m='1335470'>the</span> <span m='1335560'>code,</span> <span
  m='1336350'>exactly</span> <span m='1336720'>the</span> <span
  m='1336790'>same,</span> <span m='1337140'>but</span> <span
  m='1337430'>I</span> <span m='1337540'>delete</span> <span m='1337920'>v
  and</span> <span m='1338200'>it's</span> <span m='1338350'>incident</span>
  <span m='1338680'>edges.</span> <span m='1339180'>I still</span> <span
  m='1339420'>decrement</span> <span m='1339860'>k</span> <span
  m='1340010'>by</span> <span m='1340160'>1.</span> <span m='1340810'>And</span>
  <span m='1340980'>I</span> <span m='1341010'>recurse.</span> <span
  m='1341990'>And</span> <span m='1342790'>then</span> <span
  m='1343020'>I</span> <span m='1343120'>just</span> <span
  m='1343360'>return</span> <span m='1344030'>the</span> <span
  m='1344240'>or</span> <span m='1344720'>of</span> <span
  m='1344870'>these</span> <span m='1345070'>two</span> <span
  m='1345230'>answers.</span> <span m='1346140'>So</span> <span
  m='1346330'>if</span> <span m='1346420'>this</span> <span
  m='1346580'>one</span> <span m='1346750'>finds</span> <span
  m='1346970'>a</span> <span m='1347030'>solution,</span> <span
  m='1347560'>great.</span> <span m='1347960'>I</span> <span
  m='1348080'>found</span> <span m='1348300'>a</span> <span
  m='1348360'>solution</span> <span m='1348740'>to the</span> <span
  m='1348860'>overall</span> <span m='1349140'>problem.</span> <span
  m='1349910'>This one</span> <span m='1350090'>finds</span> <span
  m='1350370'>a</span> <span m='1350430'>solution,</span> <span
  m='1350760'>great.</span> <span m='1351330'>Maybe</span> <span
  m='1351720'>both</span> <span m='1352820'>return</span> <span
  m='1353230'>yes.</span> <span m='1353680'>Doesn't</span> <span
  m='1353870'>matter.</span> <span m='1354160'>In</span> <span
  m='1354250'>general,</span> <span m='1354560'>I</span> <span
  m='1354650'>just</span> <span m='1354840'>take</span> <span
  m='1355040'>the</span> <span m='1356920'>inclusive</span> <span
  m='1357380'>or</span> <span m='1357760'>of</span> <span
  m='1357840'>those</span> <span m='1358080'>two</span> <span
  m='1358210'>Boolean</span> <span m='1358560'>values.</span> <span
  m='1359390'>That</span> <span m='1359640'>gives</span> <span
  m='1359850'>me</span> <span m='1359990'>an</span> <span
  m='1360080'>overall</span> <span m='1360590'>yes</span> <span
  m='1360690'>no</span> <span m='1361070'>answer</span> <span
  m='1361730'>to</span> <span m='1362110'>k</span> <span
  m='1362310'>vertex</span> <span m='1362730'>cover.</span> <span
  m='1364440'>Cool?</span> </p><p><span m='1365820'>So</span> <span
  m='1367090'>next</span> <span m='1367300'>question</span> <span
  m='1367530'>is</span> <span m='1367600'>what</span> <span
  m='1367740'>the</span> <span m='1367860'>running</span> <span
  m='1368130'>time</span> <span m='1368410'>is.</span> <span
  m='1368610'>But</span> <span m='1368760'>you</span> <span
  m='1368870'>can</span> <span m='1369040'>think</span> <span
  m='1369230'>of</span> <span m='1369310'>this</span> <span
  m='1369650'>as</span> <span m='1369910'>a</span> <span
  m='1369970'>dynamic</span> <span m='1370390'>program.</span> <span
  m='1371640'>It's</span> <span m='1371840'>just,</span> <span
  m='1372260'>here</span> <span m='1372790'>we</span> <span
  m='1373040'>recurse,</span> <span m='1373640'>and</span> <span
  m='1373840'>we</span> <span m='1373910'>don't</span> <span
  m='1374130'>bother</span> <span m='1374460'>memoizing.</span> <span
  m='1375180'>Because,</span> <span m='1376140'>in</span> <span
  m='1376260'>general,</span> <span m='1376620'>memoization</span> <span
  m='1377380'>will</span> <span m='1377530'>never</span> <span
  m='1377940'>help</span> <span m='1378270'>us</span> <span
  m='1378410'>here.</span> <span m='1379420'>And</span> <span
  m='1380040'>you</span> <span m='1380230'>may</span> <span
  m='1380430'>have</span> <span m='1380580'>even</span> <span
  m='1380820'>thought</span> <span m='1381040'>of</span> <span
  m='1381130'>algorithms</span> <span m='1381540'>like</span> <span
  m='1381860'>this</span> <span m='1382260'>in</span> <span
  m='1382440'>the</span> <span m='1382530'>dynamic</span> <span
  m='1382890'>programming</span> <span m='1383850'>world.</span> <span
  m='1384390'>And</span> <span m='1384630'>we</span> <span
  m='1384730'>just</span> <span m='1384910'>say,</span> <span
  m='1385300'>well,</span> <span m='1385460'>that's</span> <span
  m='1385560'>not</span> <span m='1385720'>good</span> <span
  m='1385840'>enough,</span> <span m='1386090'>because</span> <span
  m='1386270'>in</span> <span m='1386680'>dynamic</span> <span
  m='1387040'>programming</span> <span m='1387460'>we</span> <span
  m='1387530'>want</span> <span m='1387750'>polynomial</span> <span
  m='1388270'>time.</span> <span m='1389010'>This</span> <span
  m='1389180'>is</span> <span m='1389270'>like</span> <span m='1389450'>a</span>
  <span m='1389510'>dynamic</span> <span m='1389870'>program,</span> <span
  m='1390400'>but</span> <span m='1390610'>the</span> <span
  m='1390950'>running</span> <span m='1391200'>time is</span> <span
  m='1391470'>exponential.</span> <span m='1393410'>But</span> <span
  m='1393550'>it</span> <span m='1393630'>turns</span> <span
  m='1393900'>out</span> <span m='1394060'>it</span> <span
  m='1394190'>will</span> <span m='1394440'>be</span> <span
  m='1394870'>fixed</span> <span m='1395140'>parameter</span> <span
  m='1395490'>tractable.</span> <span m='1396690'>That's</span> <span
  m='1396870'>the</span> <span m='1396950'>good</span> <span
  m='1397120'>news.</span> </p><p><span m='1403100'>Let's</span> <span
  m='1403220'>think</span> <span m='1403390'>about</span> <span
  m='1403620'>the</span> <span m='1403700'>running</span> <span
  m='1403980'>time.</span> <span m='1418930'>So</span> <span
  m='1419840'>if</span> <span m='1420060'>I</span> <span
  m='1420150'>draw--</span> <span m='1420960'>let's</span> <span
  m='1421130'>draw</span> <span m='1421320'>a</span> <span
  m='1421380'>recursion</span> <span m='1421900'>tree.</span> <span
  m='1422230'>Right?</span> <span m='1422420'>This</span> <span
  m='1422570'>is</span> <span m='1422700'>a</span> <span
  m='1424190'>divide-and-conquer</span> <span m='1425040'>algorithm</span> <span
  m='1425570'>in</span> <span m='1425670'>a</span> <span m='1425710'>very</span>
  <span m='1426060'>weak</span> <span m='1426350'>sense.</span> <span
  m='1427600'>We</span> <span m='1427770'>start</span> <span
  m='1428140'>up</span> <span m='1428320'>here</span> <span
  m='1429030'>with</span> <span m='1433170'>a</span> <span
  m='1433270'>problem</span> <span m='1433730'>of</span> <span
  m='1433840'>size</span> <span m='1435080'>n</span> <span
  m='1436500'>and</span> <span m='1437430'>a</span> <span
  m='1437520'>parameter</span> <span m='1438080'>k.</span> <span
  m='1439730'>And</span> <span m='1439980'>we</span> <span
  m='1440090'>make</span> <span m='1440350'>two</span> <span
  m='1440610'>recursive</span> <span m='1441120'>calls.</span> <span
  m='1444660'>OK.</span> <span m='1444890'>We</span> <span
  m='1445030'>deleted</span> <span m='1445600'>a</span> <span
  m='1445670'>vertex</span> <span m='1446510'>and</span> <span
  m='1446910'>maybe</span> <span m='1447210'>some</span> <span
  m='1447420'>edges.</span> <span m='1447880'>So</span> <span
  m='1447940'>let's</span> <span m='1448170'>say,</span> <span
  m='1449010'>we</span> <span m='1449180'>have</span> <span m='1449340'>a</span>
  <span m='1449440'>new</span> <span m='1449590'>problem</span> <span
  m='1449950'>of</span> <span m='1450030'>size</span> <span
  m='1450340'>something</span> <span m='1450590'>like</span> <span
  m='1450790'>n</span> <span m='1450940'>minus</span> <span
  m='1451260'>1.</span> <span m='1452240'>But</span> <span
  m='1452460'>what</span> <span m='1452620'>really</span> <span
  m='1452880'>saves</span> <span m='1453260'>us</span> <span
  m='1453520'>is</span> <span m='1453690'>that</span> <span m='1453850'>k</span>
  <span m='1454130'>went</span> <span m='1454330'>down</span> <span
  m='1454540'>by</span> <span m='1454660'>1.</span> </p><p><span
  m='1455680'>And</span> <span m='1455810'>we</span> <span
  m='1455890'>have</span> <span m='1456090'>two</span> <span
  m='1456390'>recursive</span> <span m='1456900'>calls.</span> <span
  m='1458090'>Each</span> <span m='1458300'>of</span> <span
  m='1458380'>them</span> <span m='1459380'>k</span> <span m='1459650'>is</span>
  <span m='1459800'>1</span> <span m='1460040'>smaller.</span> <span
  m='1460816'>OK.</span> <span m='1461530'>And</span> <span
  m='1461940'>then</span> <span m='1462080'>each</span> <span
  m='1462250'>of</span> <span m='1462310'>those</span> <span
  m='1462610'>has</span> <span m='1462780'>two</span> <span
  m='1462920'>recursive</span> <span m='1463380'>calls.</span> <span
  m='1464350'>I</span> <span m='1464540'>don't</span> <span
  m='1464680'>really</span> <span m='1464890'>know</span> <span
  m='1465270'>what</span> <span m='1465410'>happens</span> <span
  m='1465850'>to</span> <span m='1466150'>n.</span> <span m='1466230'>It</span>
  <span m='1466620'>probably</span> <span m='1466850'>doesn't</span> <span
  m='1467070'>get</span> <span m='1467230'>that</span> <span
  m='1467410'>much</span> <span m='1467590'>smaller,</span> <span
  m='1468460'>but</span> <span m='1468610'>k</span> <span
  m='1468880'>goes</span> <span m='1469100'>down</span> <span
  m='1469360'>by</span> <span m='1469520'>another</span> <span
  m='1469810'>1.</span> <span m='1470940'>OK.</span> <span m='1471730'>So</span>
  <span m='1471920'>I'm</span> <span m='1472040'>writing</span> <span
  m='1472370'>here</span> <span m='1472520'>the</span> <span
  m='1472650'>size</span> <span m='1473230'>of</span> <span
  m='1473400'>the</span> <span m='1473490'>problems</span> <span
  m='1474590'>and</span> <span m='1474790'>the</span> <span
  m='1474880'>parameters</span> <span m='1475660'>of</span> <span
  m='1475860'>the</span> <span m='1475950'>problems.</span> <span
  m='1477140'>n</span> <span m='1478040'>minus</span> <span
  m='1478350'>2.</span> <span m='1479150'>k</span> <span
  m='1479300'>minus</span> <span m='1479670'>2.</span> <span
  m='1481760'>OK.</span> </p><p><span m='1483720'>How</span> <span
  m='1483940'>much</span> <span m='1484190'>time</span> <span
  m='1484470'>do</span> <span m='1484560'>I</span> <span
  m='1484660'>spend</span> <span m='1485050'>in</span> <span
  m='1485130'>each</span> <span m='1485320'>of</span> <span
  m='1485400'>these</span> <span m='1485600'>nodes?</span> <span
  m='1487550'>How</span> <span m='1487640'>much</span> <span
  m='1487850'>work</span> <span m='1488160'>am</span> <span m='1488260'>I</span>
  <span m='1488340'>doing--</span> <span m='1490000'>non-recursive</span> <span
  m='1490880'>work</span> <span m='1491130'>am</span> <span m='1491230'>I</span>
  <span m='1491300'>doing</span> <span m='1491610'>in</span> <span
  m='1491670'>this</span> <span m='1491850'>algorithm?</span> <span
  m='1498170'>Yeah.</span> </p><p><span m='1498465'>AUDIENCE: o of</span> <span
  m='1498760'>E, right?</span> <span m='1499211'>[INAUDIBLE].</span>
  </p><p><span m='1501470'>ERIK DEMAINE: o of</span> <span m='1501750'>E.</span>
  <span m='1502020'>Yeah.</span> <span m='1502340'>Certainly</span> <span
  m='1502690'>at</span> <span m='1502730'>most</span> <span m='1503080'>order
  E.</span> <span m='1504140'>Probably</span> <span m='1504570'>at</span> <span
  m='1504650'>most</span> <span m='1504910'>order</span> <span
  m='1505140'>v,</span> <span m='1506430'>because</span> <span
  m='1507200'>there's</span> <span m='1507390'>only</span> <span
  m='1507870'>at</span> <span m='1508000'>most</span> <span m='1508290'>v</span>
  <span m='1508630'>incident</span> <span m='1509060'>edges</span> <span
  m='1509720'>to</span> <span m='1510200'>each</span> <span
  m='1510400'>vertex.</span> <span m='1510880'>Yeah?</span> <span
  m='1511610'>Linear</span> <span m='1511940'>time.</span> <span
  m='1512370'>Doesn't</span> <span m='1512620'>really</span> <span
  m='1512830'>matter</span> <span m='1515030'>how</span> <span
  m='1515370'>careful</span> <span m='1515720'>we</span> <span
  m='1515850'>are</span> <span m='1516000'>here,</span> <span
  m='1517260'>but</span> <span m='1517480'>I</span> <span
  m='1517550'>will</span> <span m='1517710'>say--</span> <span
  m='1518560'>each</span> <span m='1518800'>of</span> <span
  m='1518910'>these</span> <span m='1519140'>nodes--</span> <span
  m='1521250'>we</span> <span m='1521450'>spend,</span> <span
  m='1522030'>at</span> <span m='1522190'>most,</span> <span
  m='1523860'>let's</span> <span m='1524100'>say,</span> <span
  m='1524300'>order</span> <span m='1524530'>v</span> <span
  m='1524770'>time.</span> <span m='1525590'>OK.</span> </p><p><span
  m='1526590'>It</span> <span m='1526910'>happened</span> <span
  m='1527310'>that</span> <span m='1527570'>v</span> <span
  m='1527880'>went</span> <span m='1528260'>down</span> <span
  m='1528560'>by</span> <span m='1528710'>1.</span> <span m='1529600'>As you can
  see</span> <span m='1529840'>at</span> <span m='1529990'>these</span> <span
  m='1530180'>levels.</span> <span m='1530540'>But</span> <span
  m='1530710'>certainly</span> <span m='1530990'>an</span> <span
  m='1531050'>upper</span> <span m='1531340'>bound</span> <span
  m='1531650'>is</span> <span m='1532210'>the</span> <span
  m='1532360'>original</span> <span m='1532830'>v.</span> <span
  m='1533500'>In</span> <span m='1533630'>each</span> <span
  m='1533790'>of</span> <span m='1533850'>these</span> <span
  m='1534040'>nodes,</span> <span m='1534300'>we</span> <span
  m='1534380'>spend</span> <span m='1534670'>at most</span> <span
  m='1534990'>the</span> <span m='1535080'>original</span> <span
  m='1535430'>v.</span> <span m='1539800'>When</span> <span m='1540010'>does
  this</span> <span m='1540290'>recursion</span> <span m='1540730'>stop?</span>
  <span m='1541180'>I</span> <span m='1541260'>didn't</span> <span
  m='1541460'>write</span> <span m='1541630'>a</span> <span
  m='1541670'>base</span> <span m='1541930'>case.</span> <span
  m='1542230'>Help</span> <span m='1542390'>me</span> <span
  m='1542530'>out.</span> <span m='1543000'>What's</span> <span
  m='1543210'>a</span> <span m='1543270'>good</span> <span
  m='1543460'>base</span> <span m='1543710'>case</span> <span
  m='1543970'>for</span> <span m='1544060'>this</span> <span
  m='1545160'>algorithm?</span> <span m='1549920'>Yeah.</span> </p><p><span
  m='1550270'>AUDIENCE: When</span> <span m='1550620'>k</span> <span
  m='1551082'>equals</span> <span m='1551544'>0,</span> <span m='1552006'>check
  if there are any edges.</span> </p><p><span m='1555710'>ERIK DEMAINE:
  When</span> <span m='1555860'>k</span> <span m='1556030'>equals</span> <span
  m='1556260'>0,</span> <span m='1556540'>check</span> <span
  m='1556790'>if</span> <span m='1556880'>there</span> <span
  m='1557040'>any</span> <span m='1557220'>edges.</span> <span
  m='1557840'>When</span> <span m='1558020'>k</span> <span
  m='1558190'>equals</span> <span m='1558420'>0,</span> <span
  m='1558800'>I</span> <span m='1558900'>can't</span> <span
  m='1559130'>put</span> <span m='1559380'>anything</span> <span
  m='1559890'>into</span> <span m='1560110'>my</span> <span
  m='1560260'>vertex</span> <span m='1560660'>cover.</span> <span
  m='1561220'>So</span> <span m='1561360'>if</span> <span
  m='1561440'>there</span> <span m='1561650'>any</span> <span
  m='1561930'>edges,</span> <span m='1562430'>they're</span> <span
  m='1562560'>not</span> <span m='1562770'>going</span> <span
  m='1562880'>to</span> <span m='1562930'>be</span> <span
  m='1563060'>covered.</span> <span m='1563790'>That's</span> <span
  m='1564010'>bad</span> <span m='1564250'>news.</span> <span
  m='1565420'>OK.</span> <span m='1565610'>So</span> <span
  m='1566440'>over</span> <span m='1566700'>here</span> <span
  m='1566960'>we</span> <span m='1567060'>have</span> <span
  m='1568160'>base</span> <span m='1568440'>case,</span> <span
  m='1572820'>k</span> <span m='1573020'>equals</span> <span
  m='1573280'>0,</span> <span m='1574960'>check--</span> <span
  m='1576600'>or</span> <span m='1576760'>let's</span> <span
  m='1577010'>say,</span> <span m='1579230'>return</span> <span
  m='1582720'>whether</span> <span m='1585650'>size</span> <span
  m='1586050'>of</span> <span m='1586210'>E</span> <span m='1587110'>is</span>
  <span m='1587420'>not</span> <span m='1587830'>0.</span> <span m='1588380'>If
  it's</span> <span m='1588540'>not</span> <span m='1588780'>0--</span> <span
  m='1590010'>sorry--</span> <span m='1590310'>whether it</span> <span
  m='1590660'>equals</span> <span m='1590930'>0--</span> <span m='1591220'>get
  it right--</span> <span m='1593240'>if</span> <span m='1593440'>it</span>
  <span m='1593580'>equals</span> <span m='1593960'>0,</span> <span
  m='1594360'>then</span> <span m='1594550'>the</span> <span
  m='1594640'>answer</span> <span m='1594860'>is</span> <span
  m='1594940'>yes.</span> <span m='1595340'>There's</span> <span
  m='1595430'>a</span> <span m='1595480'>vertex</span> <span
  m='1595870'>cover.</span> <span m='1596150'>I</span> <span
  m='1596190'>can</span> <span m='1596360'>cover</span> <span
  m='1596620'>all</span> <span m='1596910'>of</span> <span
  m='1597000'>those</span> <span m='1597190'>0</span> <span
  m='1597460'>edges</span> <span m='1597840'>using</span> <span
  m='1598110'>0</span> <span m='1598460'>vertices.</span> <span
  m='1599320'>That's</span> <span m='1599480'>good.</span> </p><p><span
  m='1600440'>But</span> <span m='1600670'>when</span> <span
  m='1600810'>E</span> <span m='1600930'>does</span> <span
  m='1601050'>not</span> <span m='1601210'>equal</span> <span
  m='1601410'>0,</span> <span m='1601660'>there's</span> <span
  m='1601850'>no</span> <span m='1602050'>way</span> <span m='1602250'>I</span>
  <span m='1602290'>can</span> <span m='1602450'>cover</span> <span
  m='1603280'>that</span> <span m='1603530'>non-zero</span> <span
  m='1603970'>number</span> <span m='1604190'>of</span> <span
  m='1604260'>edges</span> <span m='1604560'>using</span> <span
  m='1604880'>0</span> <span m='1606620'>vertices</span> <span
  m='1607020'>in</span> <span m='1607080'>my</span> <span
  m='1607190'>vertex</span> <span m='1607590'>cover.</span> <span
  m='1608200'>OK.</span> <span m='1608490'>So</span> <span
  m='1608630'>that's</span> <span m='1608850'>the</span> <span
  m='1608940'>base</span> <span m='1609200'>case,</span> <span
  m='1609470'>which</span> <span m='1609630'>means</span> <span
  m='1610280'>this</span> <span m='1610440'>recursion</span> <span
  m='1610900'>keeps</span> <span m='1611170'>going</span> <span
  m='1611910'>until</span> <span m='1612280'>we</span> <span
  m='1612400'>get</span> <span m='1612570'>down</span> <span
  m='1612840'>to</span> <span m='1613130'>k</span> <span
  m='1613340'>equals</span> <span m='1613580'>0.</span> <span
  m='1614470'>We</span> <span m='1614620'>start</span> <span
  m='1614930'>at</span> <span m='1615060'>k.</span> <span m='1616220'>We</span>
  <span m='1616940'>end</span> <span m='1617130'>up</span> <span
  m='1617250'>with</span> <span m='1617350'>0.</span> <span
  m='1617700'>So</span> <span m='1617880'>the</span> <span
  m='1617990'>number</span> <span m='1618300'>of</span> <span
  m='1618370'>levels</span> <span m='1618720'>here</span> <span
  m='1619020'>is</span> <span m='1619570'>k.</span> <span m='1620680'>OK.</span>
  <span m='1620800'>The</span> <span m='1620860'>height</span> <span
  m='1621180'>of</span> <span m='1621280'>this</span> <span
  m='1621470'>tree--</span> <span m='1623580'>this</span> <span
  m='1623720'>recursion</span> <span m='1624160'>tree</span> <span
  m='1624820'>is</span> <span m='1625030'>k.</span> <span m='1626780'>So</span>
  <span m='1626930'>how</span> <span m='1627090'>many</span> <span
  m='1627290'>nodes</span> <span m='1627550'>are</span> <span m='1628130'>there
  in this</span> <span m='1628260'>tree?</span> <span m='1630890'>2</span> <span
  m='1631120'>to the</span> <span m='1631240'>k.</span> </p><p><span
  m='1637900'>So</span> <span m='1638100'>total</span> <span
  m='1638380'>running</span> <span m='1638640'>time</span> <span
  m='1639500'>is</span> <span m='1639870'>v</span> <span
  m='1640630'>times</span> <span m='1640920'>2</span> <span m='1641160'>to
  the</span> <span m='1641290'>k.</span> <span m='1641970'>I</span> <span
  m='1642040'>guess</span> <span m='1642250'>I</span> <span
  m='1642280'>should</span> <span m='1642460'>write</span> <span
  m='1642650'>2</span> <span m='1642800'>to the</span> <span
  m='1642920'>k</span> <span m='1643100'>times</span> <span
  m='1643400'>v.</span> <span m='1643920'>Hey,</span> <span
  m='1644370'>that</span> <span m='1644670'>is</span> <span
  m='1644820'>exactly</span> <span m='1645210'>what</span> <span
  m='1645390'>I</span> <span m='1645420'>wanted.</span> <span
  m='1645910'>I</span> <span m='1646010'>got</span> <span m='1646020'>a</span>
  <span m='1646070'>function</span> <span m='1646520'>of</span> <span
  m='1646640'>k--</span> <span m='1647000'>namely</span> <span
  m='1647360'>2</span> <span m='1647620'>to the</span> <span
  m='1647730'>k.</span> <span m='1648380'>Exponential--</span> <span
  m='1648940'>that</span> <span m='1649070'>makes</span> <span
  m='1649290'>sense.</span> <span m='1650050'>And</span> <span
  m='1650250'>I</span> <span m='1650310'>got</span> <span m='1650560'>a</span>
  <span m='1650640'>polynomial</span> <span m='1651360'>in</span> <span
  m='1651500'>n.</span> <span m='1653140'>Here</span> <span
  m='1654370'>it's</span> <span m='1654620'>n.</span> <span
  m='1655980'>The</span> <span m='1656460'>exponent</span> <span
  m='1656940'>is</span> <span m='1657070'>1.</span> <span m='1657930'>v</span>
  <span m='1658140'>is</span> <span m='1658290'>at</span> <span
  m='1658360'>most</span> <span m='1658590'>n.</span> <span m='1658865'>n</span>
  <span m='1659140'>us</span> <span m='1659340'>v</span> <span
  m='1659540'>plus</span> <span m='1659810'>E.</span> <span
  m='1661320'>Wow.</span> <span m='1662620'>Big</span> <span
  m='1662820'>improvement.</span> <span m='1664170'>This</span> <span
  m='1664190'>seems</span> <span m='1665280'>equally</span> <span
  m='1667120'>simple</span> <span m='1667550'>of an</span> <span
  m='1667710'>algorithm</span> <span m='1668440'>as</span> <span
  m='1668610'>this</span> <span m='1668770'>one,</span> <span
  m='1668930'>but</span> <span m='1669050'>actually</span> <span
  m='1669340'>it</span> <span m='1669640'>runs</span> <span m='1670140'>a</span>
  <span m='1670270'>lot</span> <span m='1670670'>faster.</span> <span
  m='1672060'>OK.</span> </p><p><span m='1672220'>Let</span> <span
  m='1672350'>me</span> <span m='1672460'>give</span> <span
  m='1672600'>you</span> <span m='1672690'>a</span> <span
  m='1672730'>feeling--</span> <span m='1673160'>I</span> <span
  m='1673200'>mean</span> <span m='1673370'>this</span> <span
  m='1673540'>is</span> <span m='1673650'>what</span> <span
  m='1673810'>we</span> <span m='1673930'>would</span> <span
  m='1674100'>call</span> <span m='1674770'>a</span> <span
  m='1674860'>linear</span> <span m='1675260'>time</span> <span
  m='1675540'>algorithm</span> <span m='1676020'>for</span> <span
  m='1676190'>fixed</span> <span m='1676520'>k.</span> <span
  m='1677130'>The</span> <span m='1677260'>exponent</span> <span
  m='1677790'>here</span> <span m='1678400'>doesn't</span> <span
  m='1678670'>depend</span> <span m='1678970'>on</span> <span
  m='1679100'>k.</span> <span m='1679600'>If</span> <span m='1679800'>k</span>
  <span m='1680050'>is</span> <span m='1680190'>10,</span> <span
  m='1680710'>it's</span> <span m='1680890'>a</span> <span
  m='1680940'>linear</span> <span m='1681150'>time</span> <span
  m='1681370'>algorithm.</span> <span m='1681540'>If</span> <span
  m='1681760'>k</span> <span m='1681900'>is</span> <span m='1682000'>100,</span>
  <span m='1682570'>it's</span> <span m='1682720'>a</span> <span
  m='1682780'>linear</span> <span m='1683000'>time</span> <span
  m='1683240'>algorithm.</span> <span m='1684180'>If k</span> <span
  m='1684320'>is</span> <span m='1684490'>100,</span> <span
  m='1684910'>that</span> <span m='1685120'>might</span> <span
  m='1685340'>be</span> <span m='1685520'>a</span> <span
  m='1685590'>little</span> <span m='1685820'>bit</span> <span
  m='1686010'>beyond</span> <span m='1686320'>what</span> <span
  m='1686430'>we</span> <span m='1686580'>can</span> <span
  m='1686760'>run.</span> <span m='1687510'>But</span> <span
  m='1687730'>you</span> <span m='1687830'>know,</span> <span
  m='1687960'>k</span> <span m='1688250'>equals</span> <span
  m='1688670'>32,</span> <span m='1690220'>40</span> <span
  m='1690640'>maybe,</span> <span m='1691380'>that would</span> <span
  m='1691630'>probably</span> <span m='1691970'>be</span> <span
  m='1692410'>reasonable</span> <span m='1692860'>running</span> <span
  m='1693100'>time,</span> <span m='1693480'>in</span> <span
  m='1693640'>practice.</span> <span m='1694280'>OK.</span> <span
  m='1694720'>That's</span> <span m='1694890'>a</span> <span
  m='1694940'>lot</span> <span m='1695240'>better</span> <span
  m='1695460'>than</span> <span m='1695600'>before</span> <span
  m='1695990'>where</span> <span m='1696120'>like</span> <span
  m='1696350'>k</span> <span m='1696510'>equals</span> <span
  m='1696760'>2</span> <span m='1697070'>or</span> <span m='1697150'>3.</span>
  <span m='1697940'>This</span> <span m='1698120'>is</span> <span
  m='1698220'>probably</span> <span m='1699100'>unreasonable.</span> <span
  m='1699710'>v</span> <span m='1699770'>is</span> <span m='1700120'>like</span>
  <span m='1700340'>a</span> <span m='1700400'>billion,</span> <span
  m='1700850'>say,</span> <span m='1701220'>big</span> <span
  m='1701330'>graph.</span> </p><p><span m='1703070'>Also</span> <span
  m='1703450'>from</span> <span m='1703620'>a</span> <span
  m='1703680'>theoretical</span> <span m='1704150'>perspective,</span> <span
  m='1705120'>this</span> <span m='1705320'>works</span> <span
  m='1705680'>even</span> <span m='1705960'>up</span> <span
  m='1706120'>to</span> <span m='1706260'>k</span> <span
  m='1706520'>equals</span> <span m='1706820'>log</span> <span
  m='1707350'>n.</span> <span m='1708600'>If</span> <span m='1708700'>k</span>
  <span m='1708860'>equals</span> <span m='1709080'>log</span> <span
  m='1709370'>n,</span> <span m='1709530'>this'll</span> <span
  m='1709790'>be</span> <span m='1710370'>n</span> <span
  m='1710500'>squared.</span> <span m='1711440'>That's</span> <span
  m='1711630'>nice.</span> <span m='1712630'>k</span> <span
  m='1712760'>equals</span> <span m='1712960'>2</span> <span
  m='1713140'>log</span> <span m='1713360'>n,</span> <span
  m='1713550'>it's</span> <span m='1713830'>n</span> <span
  m='1714070'>cubed.</span> <span m='1714460'>OK.</span> <span
  m='1714720'>So</span> <span m='1714900'>it</span> <span
  m='1715510'>grows.</span> <span m='1715920'>But</span> <span
  m='1716940'>we</span> <span m='1717100'>can</span> <span
  m='1717240'>handle</span> <span m='1717710'>k</span> <span
  m='1717970'>equals</span> <span m='1718210'>order</span> <span
  m='1718390'>log</span> <span m='1718670'>n.</span> <span
  m='1719110'>And</span> <span m='1719190'>this</span> <span
  m='1719310'>will</span> <span m='1719380'>still</span> <span
  m='1719620'>be</span> <span m='1719760'>polynomial.</span> <span
  m='1720390'>In</span> <span m='1720500'>general,</span> <span
  m='1720880'>with</span> <span m='1720980'>fixed</span> <span
  m='1721230'>parameter</span> <span m='1721500'>algorithms,</span> <span
  m='1722070'>it's</span> <span m='1722220'>not</span> <span
  m='1722390'>always</span> <span m='1722570'>going</span> <span
  m='1722700'>to</span> <span m='1722770'>be</span> <span m='1723420'>up</span>
  <span m='1723550'>to</span> <span m='1723660'>log</span> <span
  m='1723960'>n,</span> <span m='1724120'>it's</span> <span
  m='1724250'>going</span> <span m='1724360'>to</span> <span
  m='1724410'>be</span> <span m='1724580'>up</span> <span m='1724710'>to</span>
  <span m='1724890'>whatever</span> <span m='1725160'>the</span> <span
  m='1725290'>inverse</span> <span m='1725680'>of</span> <span
  m='1725780'>this</span> <span m='1725960'>f</span> <span m='1726130'>of</span>
  <span m='1726250'>k</span> <span m='1726480'>is.</span> <span
  m='1727160'>That's</span> <span m='1727410'>where</span> <span
  m='1727550'>we</span> <span m='1727690'>can</span> <span
  m='1727830'>still</span> <span m='1728100'>be</span> <span
  m='1728690'>polynomial.</span> </p><p><span m='1731250'>So</span> <span
  m='1731590'>that's</span> <span m='1731790'>nice.</span> <span
  m='1732680'>I</span> <span m='1732780'>consider</span> <span
  m='1733160'>this</span> <span m='1734010'>a</span> <span
  m='1734100'>good</span> <span m='1734470'>running</span> <span
  m='1734750'>time.</span> <span m='1735960'>Good</span> <span
  m='1736220'>in</span> <span m='1736320'>the</span> <span
  m='1736390'>sense</span> <span m='1736670'>that</span> <span
  m='1738090'>it</span> <span m='1738230'>follows</span> <span
  m='1738740'>that</span> <span m='1738980'>definition</span> <span
  m='1740040'>of</span> <span m='1740270'>fixed</span> <span
  m='1740540'>parameter</span> <span m='1740870'>tractable.</span> <span
  m='1741750'>So</span> <span m='1741810'>bounded-search-tree</span> <span
  m='1742510'>algorithm</span> <span m='1742880'>is</span> <span
  m='1743000'>good.</span> <span m='1743620'>Brute</span> <span
  m='1743800'>force</span> <span m='1744100'>algorithm</span> <span
  m='1744790'>is</span> <span m='1745110'>bad.</span> <span
  m='1745650'>In</span> <span m='1745770'>this</span> <span
  m='1745940'>case.</span> <span m='1747360'>Bounded-search-tree</span> <span
  m='1747960'>is</span> <span m='1748060'>a</span> <span
  m='1748130'>general</span> <span m='1748470'>technique.</span> <span
  m='1748840'>You</span> <span m='1748930'>can</span> <span
  m='1749030'>use</span> <span m='1749210'>it</span> <span
  m='1749320'>for</span> <span m='1749430'>lots</span> <span
  m='1749670'>of</span> <span m='1749760'>problems.</span> <span
  m='1751340'>We're</span> <span m='1751520'>going</span> <span
  m='1751610'>to</span> <span m='1751660'>see</span> <span
  m='1751830'>another</span> <span m='1752120'>technique</span> <span
  m='1753280'>today</span> <span m='1753590'>called</span> <span
  m='1753950'>kernelization.</span> </p><p><span m='1757018'>But--</span> <span
  m='1758540'>Let's</span> <span m='1758720'>see--</span> <span
  m='1759360'>before</span> <span m='1759630'>I</span> <span
  m='1759680'>get</span> <span m='1759960'>there,</span> <span
  m='1760960'>I</span> <span m='1761050'>want</span> <span m='1761290'>to</span>
  <span m='1761400'>question</span> <span m='1762520'>this</span> <span
  m='1762740'>definition.</span> <span m='1764360'>So</span> <span
  m='1764480'>this</span> <span m='1764630'>definition</span> <span
  m='1765060'>is</span> <span m='1765180'>nice.</span> <span
  m='1765480'>It's</span> <span m='1765630'>natural</span> <span m='1766030'>in
  the</span> <span m='1766130'>sense</span> <span m='1766430'>that</span> <span
  m='1766540'>it</span> <span m='1766640'>gives</span> <span
  m='1766860'>you--</span> <span m='1768400'>it</span> <span
  m='1768720'>distinguishes</span> <span m='1769400'>between</span> <span
  m='1769760'>the</span> <span m='1769910'>exponent</span> <span
  m='1770580'>of</span> <span m='1770780'>n</span> <span
  m='1771000'>depending</span> <span m='1771470'>on</span> <span m='1771580'>k
  and not</span> <span m='1772070'>depending</span> <span m='1772430'>on</span>
  <span m='1772540'>k,</span> <span m='1773190'>which</span> <span
  m='1773500'>is</span> <span m='1773650'>a</span> <span
  m='1773710'>natural</span> <span m='1774010'>thing</span> <span
  m='1774170'>to</span> <span m='1774260'>do.</span> <span
  m='1775560'>But</span> <span m='1775900'>there's</span> <span
  m='1776100'>another</span> <span m='1776500'>natural</span> <span
  m='1776930'>definition</span> <span m='1777940'>of</span> <span
  m='1778990'>fixed</span> <span m='1779290'>parameter</span> <span
  m='1780380'>tractability.</span> <span m='1783190'>So</span> <span
  m='1783790'>let's--</span> <span m='1786700'>vertex</span> <span
  m='1787780'>cover--</span> <span m='1788880'>I think</span> <span
  m='1789620'>you</span> <span m='1789800'>remember</span> <span
  m='1790090'>the</span> <span m='1790200'>problem</span> <span
  m='1790520'>by</span> <span m='1790590'>now.</span> </p><p><span
  m='1802010'>So</span> <span m='1802490'>let's</span> <span
  m='1802650'>see--</span> <span m='1803120'>we</span> <span
  m='1803250'>have</span> <span m='1803490'>this</span> <span
  m='1803640'>definition,</span> <span m='1804220'>which</span> <span
  m='1804420'>is</span> <span m='1804580'>f</span> <span m='1804790'>of</span>
  <span m='1804950'>k</span> <span m='1805630'>times</span> <span
  m='1805940'>polynomial</span> <span m='1806540'>n.</span> <span
  m='1808710'>But</span> <span m='1808880'>I</span> <span
  m='1808970'>would</span> <span m='1809240'>say</span> <span
  m='1809430'>that</span> <span m='1809820'>the</span> <span
  m='1809940'>first</span> <span m='1810160'>time</span> <span
  m='1810330'>I</span> <span m='1810380'>saw</span> <span m='1810830'>fixed
  parameter</span> <span m='1811080'>tractability,</span> <span
  m='1812180'>I</span> <span m='1812340'>thought,</span> <span
  m='1812630'>well,</span> <span m='1812830'>why</span> <span
  m='1812980'>do</span> <span m='1813040'>you</span> <span
  m='1813130'>define</span> <span m='1813430'>it</span> <span
  m='1813530'>that</span> <span m='1813720'>way?</span> <span
  m='1813910'>I</span> <span m='1813930'>mean,</span> <span
  m='1814480'>maybe</span> <span m='1814950'>it would</span> <span
  m='1815120'>be</span> <span m='1815250'>better</span> <span
  m='1815690'>to</span> <span m='1815880'>do</span> <span m='1816160'>f</span>
  <span m='1816370'>of</span> <span m='1816510'>k</span> <span
  m='1817290'>plus</span> <span m='1817740'>polynomial</span> <span
  m='1818010'>n.</span> <span m='1822480'>That</span> <span
  m='1822650'>would</span> <span m='1822780'>be</span> <span
  m='1823060'>better,</span> <span m='1823340'>right?</span> <span
  m='1823620'>That would be</span> <span m='1824020'>faster,</span> <span
  m='1824620'>seems</span> <span m='1824940'>like.</span> <span
  m='1826480'>So</span> <span m='1827030'>I</span> <span
  m='1827090'>mean,</span> <span m='1827260'>this</span> <span
  m='1827420'>is</span> <span m='1827600'>nice</span> <span
  m='1828075'>in</span> <span m='1828550'>that</span> <span
  m='1828700'>we</span> <span m='1828840'>achieved</span> <span
  m='1829530'>this</span> <span m='1829720'>bound,</span> <span
  m='1830630'>but</span> <span m='1830800'>could</span> <span
  m='1830950'>we</span> <span m='1831050'>hope</span> <span
  m='1831250'>for</span> <span m='1831350'>this</span> <span
  m='1831520'>even</span> <span m='1831740'>better</span> <span
  m='1831960'>bound.</span> <span m='1833715'>OK?</span> </p><p><span
  m='1834130'>It</span> <span m='1834680'>turns</span> <span
  m='1834980'>out</span> <span m='1835570'>these</span> <span
  m='1835770'>notions</span> <span m='1836240'>are</span> <span
  m='1836480'>identical.</span> <span m='1838080'>This</span> <span
  m='1838270'>is</span> <span m='1838560'>weird.</span> <span
  m='1839070'>The</span> <span m='1839170'>first</span> <span
  m='1839290'>time</span> <span m='1839480'>you</span> <span
  m='1839580'>see</span> <span m='1839740'>it.</span> <span
  m='1840150'>So</span> <span m='1840860'>theorem--</span> <span
  m='1845840'>you</span> <span m='1846200'>can</span> <span
  m='1846350'>solve</span> <span m='1846750'>a</span> <span
  m='1846830'>problem</span> <span m='1849150'>in</span> <span
  m='1849420'>this</span> <span m='1849620'>kind</span> <span
  m='1849800'>of</span> <span m='1849890'>time,</span> <span
  m='1850760'>if</span> <span m='1850970'>and</span> <span
  m='1851050'>only</span> <span m='1851350'>if</span> <span
  m='1852130'>you</span> <span m='1852290'>can</span> <span
  m='1852430'>solve</span> <span m='1853600'>the</span> <span
  m='1853710'>problem</span> <span m='1855310'>in</span> <span
  m='1855710'>this</span> <span m='1855900'>kind</span> <span
  m='1856060'>of</span> <span m='1856140'>time.</span> <span
  m='1856680'>So</span> <span m='1857320'>of</span> <span
  m='1857470'>course,</span> <span m='1857700'>f</span> <span
  m='1857900'>is</span> <span m='1858000'>going</span> <span
  m='1858140'>to</span> <span m='1858220'>change.</span> <span
  m='1859400'>And</span> <span m='1860250'>why</span> <span
  m='1860450'>don't</span> <span m='1860570'>I</span> <span
  m='1860640'>label</span> <span m='1860980'>these</span> <span
  m='1861170'>constants.</span> <span m='1863050'>So</span> <span
  m='1863350'>we</span> <span m='1863450'>have</span> <span m='1863860'>c</span>
  <span m='1864350'>up</span> <span m='1864540'>here</span> <span
  m='1865320'>and</span> <span m='1865510'>some</span> <span m='1865650'>c
  prime</span> <span m='1866270'>up</span> <span m='1866420'>here.</span> <span
  m='1867210'>But</span> <span m='1867410'>you</span> <span
  m='1867520'>can</span> <span m='1867630'>solve</span> <span
  m='1867870'>a</span> <span m='1867940'>problem</span> <span
  m='1868380'>in</span> <span m='1868570'>this</span> <span
  m='1868720'>multiplicative</span> <span m='1869300'>time,</span> <span
  m='1869600'>if</span> <span m='1869720'>and</span> <span
  m='1869810'>only</span> <span m='1870040'>if</span> <span
  m='1870130'>you</span> <span m='1870250'>can</span> <span
  m='1870380'>solve</span> <span m='1870650'>it</span> <span
  m='1870710'>in</span> <span m='1870820'>an</span> <span
  m='1870950'>additive</span> <span m='1871270'>time</span> <span
  m='1871920'>with</span> <span m='1872070'>a</span> <span
  m='1872120'>different</span> <span m='1872470'>function</span> <span
  m='1872890'>and a</span> <span m='1873010'>different</span> <span
  m='1873310'>constant.</span> </p><p><span m='1875230'>This is</span> <span
  m='1875400'>actually</span> <span m='1875690'>really</span> <span
  m='1875910'>easy</span> <span m='1876160'>to</span> <span
  m='1876230'>prove.</span> <span m='1877262'>The longer</span> <span
  m='1877600'>you</span> <span m='1877730'>think</span> <span
  m='1877900'>about</span> <span m='1878120'>it,</span> <span
  m='1878210'>the</span> <span m='1878280'>more</span> <span
  m='1878570'>obvious</span> <span m='1878920'>it will</span> <span
  m='1879140'>be.</span> <span m='1881540'>If</span> <span
  m='1881730'>you</span> <span m='1881850'>have</span> <span
  m='1882220'>an</span> <span m='1882310'>instance</span> <span
  m='1882800'>of</span> <span m='1882900'>size</span> <span m='1883310'>n</span>
  <span m='1884060'>with</span> <span m='1884260'>parameter</span> <span
  m='1884740'>k,</span> <span m='1886310'>there</span> <span
  m='1886670'>are</span> <span m='1886740'>two</span> <span
  m='1887140'>cases.</span> <span m='1889370'>Either</span> <span
  m='1890550'>n</span> <span m='1891030'>is</span> <span m='1891210'>less</span>
  <span m='1891470'>than</span> <span m='1891570'>or</span> <span
  m='1891670'>equal</span> <span m='1891910'>to</span> <span
  m='1892030'>f</span> <span m='1892270'>of</span> <span m='1892390'>k,</span>
  <span m='1894340'>or</span> <span m='1895810'>n</span> <span
  m='1896120'>is</span> <span m='1896350'>greater</span> <span
  m='1896620'>than</span> <span m='1896710'>or</span> <span
  m='1896790'>equal</span> <span m='1897010'>to</span> <span
  m='1897070'>f</span> <span m='1897220'>of</span> <span m='1897330'>k.</span>
  <span m='1897830'>Right?</span> <span m='1898220'>It's got</span> <span
  m='1898610'>to</span> <span m='1898660'>be</span> <span m='1898780'>one</span>
  <span m='1898970'>of</span> <span m='1899030'>those,</span> <span
  m='1899340'>maybe</span> <span m='1899610'>both.</span> <span
  m='1901420'>If</span> <span m='1901610'>n</span> <span m='1901870'>is</span>
  <span m='1902020'>less</span> <span m='1902310'>than</span> <span
  m='1902410'>or</span> <span m='1902510'>equal</span> <span
  m='1902610'>to</span> <span m='1902680'>f</span> <span m='1902890'>of</span>
  <span m='1903010'>k</span> <span m='1903920'>that</span> <span
  m='1904180'>means</span> <span m='1904550'>that</span> <span
  m='1904840'>this</span> <span m='1905070'>running</span> <span
  m='1905390'>time,</span> <span m='1907300'>f</span> <span
  m='1907520'>of</span> <span m='1907640'>k</span> <span
  m='1908940'>times</span> <span m='1909380'>n</span> <span
  m='1909600'>to</span> <span m='1909710'>the</span> <span
  m='1909840'>c--</span> <span m='1911112'>let's see--</span> <span
  m='1911960'>n</span> <span m='1912190'>is</span> <span m='1912290'>at</span>
  <span m='1912370'>most</span> <span m='1912610'>f</span> <span
  m='1912740'>of</span> <span m='1912840'>k.</span> <span m='1913030'>So</span>
  <span m='1913160'>this</span> <span m='1913360'>is</span> <span
  m='1913500'>at</span> <span m='1913610'>most</span> <span m='1914340'>f</span>
  <span m='1914580'>of</span> <span m='1914730'>k</span> <span
  m='1915580'>to</span> <span m='1915860'>the</span> <span m='1916050'>c
  plus</span> <span m='1916560'>1</span> <span m='1916810'>power.</span> <span
  m='1918396'>Right?</span> </p><p><span m='1918880'>I</span> <span
  m='1919120'>multiply</span> <span m='1920250'>f</span> <span
  m='1920440'>of</span> <span m='1920550'>k</span> <span m='1920790'>to</span>
  <span m='1920880'>the c</span> <span m='1920990'>times</span> <span
  m='1921660'>f</span> <span m='1921800'>of</span> <span m='1921900'>k.</span>
  <span m='1923550'>When</span> <span m='1923760'>n</span> <span
  m='1923940'>is</span> <span m='1924090'>greater</span> <span
  m='1924560'>than</span> <span m='1924830'>f</span> <span m='1925050'>of</span>
  <span m='1925160'>k,</span> <span m='1925990'>then</span> <span
  m='1926280'>I</span> <span m='1926360'>know</span> <span m='1926630'>that
  this</span> <span m='1926960'>running</span> <span m='1927230'>time,</span>
  <span m='1927550'>f</span> <span m='1927770'>of</span> <span
  m='1927900'>k</span> <span m='1928450'>times n to</span> <span
  m='1928690'>the</span> <span m='1928800'>c,</span> <span m='1929560'>well,
  now</span> <span m='1929770'>I</span> <span m='1929890'>know</span> <span
  m='1930050'>an</span> <span m='1930210'>upper</span> <span
  m='1930520'>bound</span> <span m='1930770'>of</span> <span
  m='1930850'>f</span> <span m='1931030'>of</span> <span m='1931130'>k.</span>
  <span m='1931370'>I</span> <span m='1931400'>know</span> <span
  m='1931550'>this</span> <span m='1931970'>thing</span> <span
  m='1932220'>is</span> <span m='1932410'>at</span> <span
  m='1932520'>most</span> <span m='1932800'>n.</span> <span
  m='1934010'>And</span> <span m='1934200'>so</span> <span
  m='1934300'>this</span> <span m='1934520'>is</span> <span
  m='1934660'>at</span> <span m='1934780'>most</span> <span m='1935520'>n</span>
  <span m='1935710'>to</span> <span m='1935810'>the</span> <span m='1935930'>c
  plus</span> <span m='1936520'>1.</span> <span m='1937790'>OK.</span> <span
  m='1938040'>So</span> <span m='1938110'>really</span> <span
  m='1938340'>I</span> <span m='1938390'>have</span> <span
  m='1938590'>two</span> <span m='1938790'>scenarios,</span> <span
  m='1939470'>either</span> <span m='1939750'>I'm</span> <span
  m='1939880'>bounded</span> <span m='1940260'>by</span> <span
  m='1940410'>some</span> <span m='1940910'>purely</span> <span
  m='1941270'>function</span> <span m='1941630'>of</span> <span
  m='1941730'>k,</span> <span m='1942550'>or I'm</span> <span
  m='1942800'>bounded</span> <span m='1943200'>by</span> <span
  m='1943340'>some</span> <span m='1943570'>purely</span> <span
  m='1943920'>polynomial</span> <span m='1944750'>of</span> <span
  m='1944930'>n.</span> <span m='1945830'>Which</span> <span
  m='1946080'>means,</span> <span m='1946410'>in</span> <span
  m='1946550'>both</span> <span m='1946800'>cases,</span> <span
  m='1949080'>the</span> <span m='1949200'>running</span> <span
  m='1949460'>time</span> <span m='1949900'>f</span> <span m='1950020'>of</span>
  <span m='1950140'>k</span> <span m='1951130'>times</span> <span
  m='1951600'>n</span> <span m='1951800'>to</span> <span m='1951900'>the</span>
  <span m='1952020'>c</span> <span m='1953668'>is</span> <span
  m='1954080'>bounded</span> <span m='1954410'>above</span> <span
  m='1954840'>by</span> <span m='1955020'>the</span> <span
  m='1955130'>max</span> <span m='1955650'>of</span> <span
  m='1955750'>those</span> <span m='1955960'>two</span> <span
  m='1956100'>things,</span> <span m='1958090'>max</span> <span
  m='1958825'>of</span> <span m='1959080'>f</span> <span m='1959280'>of</span>
  <span m='1959430'>k</span> <span m='1960240'>to</span> <span
  m='1960450'>the</span> <span m='1960540'>c plus</span> <span
  m='1960970'>1,</span> <span m='1962000'>n</span> <span m='1962580'>to</span>
  <span m='1962960'>the</span> <span m='1963100'>c plus</span> <span
  m='1963840'>1.</span> <span m='1964723'>OK.</span> <span
  m='1965530'>And</span> <span m='1965780'>the</span> <span
  m='1965850'>max</span> <span m='1966210'>is</span> <span
  m='1966360'>always,</span> <span m='1966590'>at</span> <span
  m='1966660'>most,</span> <span m='1967030'>the</span> <span
  m='1967130'>sum.</span> </p><p><span m='1967370'>I'm</span> <span
  m='1967510'>assuming</span> <span m='1967860'>everything</span> <span
  m='1968400'>here</span> <span m='1968760'>is</span> <span
  m='1969020'>non-negative.</span> <span m='1970510'>So</span> <span
  m='1970720'>I</span> <span m='1970820'>take</span> <span m='1971050'>f</span>
  <span m='1971240'>of</span> <span m='1971340'>k,</span> <span
  m='1971630'>c</span> <span m='1972080'>plus</span> <span m='1972390'>1,</span>
  <span m='1972940'>plus</span> <span m='1973880'>n</span> <span
  m='1974300'>to</span> <span m='1974460'>the</span> <span m='1974580'>c
  plus</span> <span m='1975000'>1.</span> <span m='1976030'>Boom.</span> <span
  m='1977090'>That</span> <span m='1977370'>is</span> <span
  m='1977570'>an</span> <span m='1977710'>additive</span> <span
  m='1978680'>function</span> <span m='1979140'>of</span> <span
  m='1979240'>k</span> <span m='1979790'>plus</span> <span
  m='1980290'>polynomial</span> <span m='1981030'>in</span> <span
  m='1981400'>n.</span> <span m='1983200'>OK.</span> <span
  m='1983390'>Rather</span> <span m='1983790'>trivial.</span> <span
  m='1985250'>This</span> <span m='1985450'>a</span> <span
  m='1985550'>funny</span> <span m='1986070'>area</span> <span
  m='1986510'>where</span> <span m='1986750'>you</span> <span
  m='1986840'>think,</span> <span m='1987130'>ah,</span> <span
  m='1987370'>this</span> <span m='1987510'>is</span> <span
  m='1987680'>deep</span> <span m='1987900'>question.</span> <span
  m='1988380'>Are</span> <span m='1988470'>these</span> <span
  m='1988690'>things</span> <span m='1988930'>the</span> <span
  m='1989030'>same?</span> <span m='1989410'>And</span> <span
  m='1989480'>ends</span> <span m='1989690'>up,</span> <span
  m='1989990'>yeah,</span> <span m='1990660'>they're the</span> <span
  m='1990870'>same</span> <span m='1991340'>for</span> <span
  m='1991840'>obvious</span> <span m='1992310'>reasons.</span> </p><p><span
  m='1993830'>So</span> <span m='1993900'>for</span> <span
  m='1994030'>example,</span> <span m='1994490'>we</span> <span
  m='1994510'>have</span> <span m='1994760'>this</span> <span
  m='1995980'>linear,</span> <span m='1996850'>basically</span> <span
  m='1997240'>n</span> <span m='1997970'>times</span> <span m='1998340'>2
  to</span> <span m='1998600'>the</span> <span m='1998740'>k</span> <span
  m='1999460'>algorithm.</span> <span m='2000390'>If</span> <span
  m='2000520'>you</span> <span m='2000630'>apply</span> <span
  m='2000940'>this</span> <span m='2001130'>argument,</span> <span
  m='2003030'>you</span> <span m='2003240'>get</span> <span
  m='2003990'>this</span> <span m='2004410'>is,</span> <span
  m='2004620'>at</span> <span m='2004740'>most,</span> <span
  m='2005800'>so</span> <span m='2005950'>this</span> <span m='2006710'>n</span>
  <span m='2007600'>times</span> <span m='2007870'>to</span> <span
  m='2008040'>the</span> <span m='2008150'>k</span> <span
  m='2008370'>bound,</span> <span m='2009780'>is,</span> <span
  m='2009970'>at</span> <span m='2010080'>most,</span> <span
  m='2010480'>n</span> <span m='2010770'>squared</span> <span
  m='2012750'>plus</span> <span m='2013310'>4</span> <span m='2013510'>to</span>
  <span m='2013560'>the</span> <span m='2013660'>k.</span> <span
  m='2015830'>OK.  I'm</span> <span m='2016030'>basically</span> <span
  m='2016330'>just</span> <span m='2016480'>squaring</span> <span
  m='2017470'>both</span> <span m='2017690'>of</span> <span
  m='2017750'>the</span> <span m='2017870'>terms.</span> <span
  m='2020200'>OK.</span> <span m='2020310'>Probably</span> <span
  m='2020970'>you</span> <span m='2021070'>prefer</span> <span
  m='2021440'>this</span> <span m='2022050'>time</span> <span
  m='2022360'>bound,</span> <span m='2022830'>but</span> <span
  m='2023290'>if</span> <span m='2023430'>you</span> <span
  m='2023590'>really</span> <span m='2023970'>like</span> <span
  m='2024580'>an</span> <span m='2024750'>additive</span> <span
  m='2025140'>time</span> <span m='2025370'>bound,</span> <span
  m='2025860'>the</span> <span m='2025990'>exact</span> <span
  m='2026490'>same</span> <span m='2026710'>algorithm</span> <span
  m='2027190'>satisfies</span> <span m='2027850'>this.</span> <span
  m='2029282'>OK.</span> </p><p><span m='2031130'>So</span> <span
  m='2031420'>not</span> <span m='2031670'>that</span> <span
  m='2031830'>exciting.</span> <span m='2033390'>And</span> <span
  m='2033900'>in</span> <span m='2034030'>practice,</span> <span
  m='2034450'>n</span> <span m='2034600'>squared--</span> <span
  m='2035040'>it</span> <span m='2035060'>looks</span> <span
  m='2035270'>like</span> <span m='2035410'>a</span> <span
  m='2035460'>bad</span> <span m='2035800'>thing,</span> <span
  m='2036070'>so</span> <span m='2036190'>you'd</span> <span
  m='2036360'>probably</span> <span m='2036690'>prefer</span> <span
  m='2036980'>this</span> <span m='2037170'>kind</span> <span
  m='2037310'>of</span> <span m='2037380'>running</span> <span
  m='2037600'>time.</span> <span m='2037820'>But</span> <span
  m='2038290'>there</span> <span m='2038430'>is</span> <span
  m='2038520'>a</span> <span m='2038570'>sense--</span> <span
  m='2038910'>there's</span> <span m='2039160'>a</span> <span
  m='2039230'>quadratics</span> <span m='2039930'>thing</span> <span
  m='2040200'>going</span> <span m='2040510'>on</span> <span
  m='2040660'>here</span> <span m='2040820'>in</span> <span
  m='2040910'>that</span> <span m='2040990'>we</span> <span
  m='2041070'>have</span> <span m='2041230'>an n</span> <span
  m='2041350'>and</span> <span m='2041580'>then</span> <span
  m='2041650'>we</span> <span m='2041730'>have</span> <span m='2041830'>a</span>
  <span m='2041890'>function</span> <span m='2042220'>of k</span> <span
  m='2042510'>multiplied</span> <span m='2042840'>together--</span> <span
  m='2043210'>OK--</span> <span m='2043480'>whatever.</span> <span
  m='2045680'>All</span> <span m='2045750'>right.</span> <span
  m='2045920'>So</span> <span m='2046010'>this</span> <span
  m='2046420'>justifies</span> <span m='2047040'>the</span> <span
  m='2047140'>definition.</span> <span m='2047740'>This is</span> <span
  m='2047900'>kind</span> <span m='2048070'>of</span> <span
  m='2048280'>robust</span> <span m='2049400'>to</span> <span
  m='2049590'>whether</span> <span m='2049840'>I</span> <span
  m='2049900'>put</span> <span m='2050130'>a</span> <span m='2050429'>dot</span>
  <span m='2050730'>here</span> <span m='2051030'>or</span> <span
  m='2051159'>plus,</span> <span m='2052000'>so</span> <span
  m='2052270'>clearly</span> <span m='2052840'>this</span> <span
  m='2053030'>is</span> <span m='2053120'>the</span> <span
  m='2053210'>right</span> <span m='2053389'>definition.</span> <span
  m='2053820'>We're</span> <span m='2053980'>going</span> <span
  m='2054070'>to</span> <span m='2054110'>use</span> <span
  m='2054320'>dot.</span> <span m='2054600'>You</span> <span
  m='2054739'>could</span> <span m='2054920'>also</span> <span
  m='2055139'>use</span> <span m='2055320'>plus,</span> <span
  m='2056282'>but--</span> <span m='2058130'>all</span> <span
  m='2058219'>right.</span> </p><p><span m='2059280'>But</span> <span
  m='2059560'>there's</span> <span m='2059719'>another</span> <span
  m='2060090'>thing</span> <span m='2060790'>called</span> <span
  m='2061139'>kernelization,</span> <span m='2062460'>which,</span> <span
  m='2063270'>in</span> <span m='2063469'>an</span> <span
  m='2063590'>intuitive</span> <span m='2064110'>sense,</span> <span
  m='2064960'>matches</span> <span m='2065510'>this</span> <span
  m='2065719'>idea</span> <span m='2066159'>of</span> <span
  m='2066370'>plus.</span> <span m='2067770'>And</span> <span
  m='2070190'>it</span> <span m='2070340'>also</span> <span
  m='2070570'>matches</span> <span m='2071040'>an</span> <span
  m='2071150'>idea</span> <span m='2071520'>that's</span> <span
  m='2071699'>common</span> <span m='2072040'>practice</span> <span
  m='2072530'>called</span> <span m='2072929'>pre-processing.</span> <span
  m='2074194'>If</span> <span m='2074659'>I</span> <span m='2074760'>have</span>
  <span m='2074870'>a</span> <span m='2074929'>giant</span> <span
  m='2075530'>graph,</span> <span m='2076510'>and</span> <span
  m='2076840'>I'm</span> <span m='2077480'>given</span> <span
  m='2077710'>some</span> <span m='2077909'>number</span> <span
  m='2078159'>k,</span> <span m='2078820'>and</span> <span m='2078980'>I</span>
  <span m='2079010'>want</span> <span m='2079170'>to</span> <span
  m='2079219'>find</span> <span m='2079420'>a</span> <span
  m='2079449'>vertex</span> <span m='2079840'>cover,</span> <span
  m='2080600'>well,</span> <span m='2080929'>maybe</span> <span
  m='2081380'>the</span> <span m='2081480'>first</span> <span
  m='2081800'>thing</span> <span m='2081969'>I</span> <span
  m='2082020'>could</span> <span m='2082190'>do</span> <span
  m='2082500'>is</span> <span m='2082909'>simplify</span> <span
  m='2083540'>my</span> <span m='2083699'>graph.</span> <span
  m='2084330'>Maybe</span> <span m='2084570'>there's</span> <span
  m='2084730'>some</span> <span m='2084920'>parts</span> <span m='2085199'>that
  are</span> <span m='2085340'>really</span> <span m='2085590'>easy</span> <span
  m='2085870'>to</span> <span m='2085960'>solve.</span> <span
  m='2086409'>I</span> <span m='2086510'>should</span> <span
  m='2086730'>throw</span> <span m='2086949'>those</span> <span
  m='2087170'>away</span> <span m='2087380'>first.</span> <span
  m='2089590'>And</span> <span m='2089880'>that</span> <span
  m='2090080'>will</span> <span m='2090469'>make</span> <span
  m='2090650'>my</span> <span m='2090800'>problem</span> <span
  m='2091199'>smaller.</span> <span m='2091719'>So</span> <span
  m='2091840'>if</span> <span m='2091940'>I'm</span> <span
  m='2092030'>going</span> <span m='2092150'>to</span> <span
  m='2092190'>have</span> <span m='2092350'>an</span> <span
  m='2092429'>exponential</span> <span m='2092960'>running time,</span> <span
  m='2093480'>presumably,</span> <span m='2093780'>I</span> <span
  m='2093860'>want</span> <span m='2094020'>to</span> <span
  m='2094060'>first</span> <span m='2094469'>make</span> <span
  m='2094699'>the</span> <span m='2094780'>problem</span> <span
  m='2095060'>as</span> <span m='2095139'>small</span> <span
  m='2095409'>as</span> <span m='2095510'>I</span> <span m='2095550'>can.</span>
  <span m='2096239'>Then</span> <span m='2096540'>deal</span> <span
  m='2096830'>with</span> <span m='2097810'>one</span> <span
  m='2097980'>of</span> <span m='2098060'>these</span> <span
  m='2098260'>algorithms.</span> <span m='2099890'>OK.</span> <span
  m='2100070'>So</span> <span m='2100300'>we're</span> <span
  m='2100470'>going</span> <span m='2100580'>to</span> <span
  m='2100640'>do</span> <span m='2100790'>that.</span> </p><p><span
  m='2109310'>First,</span> <span m='2109630'>I'm</span> <span
  m='2109700'>going</span> <span m='2109820'>to</span> <span
  m='2110030'>tell</span> <span m='2110240'>you</span> <span
  m='2110370'>about</span> <span m='2110570'>it</span> <span
  m='2111170'>generically.</span> <span m='2116120'>And</span> <span
  m='2116260'>then</span> <span m='2116400'>we'll</span> <span
  m='2116520'>do</span> <span m='2116680'>it</span> <span m='2116770'>for</span>
  <span m='2116880'>vertex</span> <span m='2117260'>cover.</span> <span
  m='2124570'>So</span> <span m='2124810'>first,</span> <span
  m='2125250'>let</span> <span m='2125630'>me</span> <span
  m='2125730'>give</span> <span m='2125880'>you</span> <span
  m='2127660'>a</span> <span m='2127730'>definition</span> <span
  m='2128160'>of</span> <span m='2128250'>what</span> <span
  m='2128410'>we'd</span> <span m='2128570'>like</span> <span
  m='2129050'>out</span> <span m='2129200'>of</span> <span
  m='2129300'>this</span> <span m='2129490'>pre-processing</span> <span
  m='2130240'>procedure.</span> <span m='2130720'>It's</span> <span
  m='2130890'>going</span> <span m='2131000'>to</span> <span
  m='2131060'>be</span> <span m='2131190'>called a</span> <span
  m='2131450'>kernelization</span> <span m='2132320'>procedure.</span> <span
  m='2136720'>Kernelization</span> <span m='2137020'>algorithm</span> <span
  m='2138680'>is</span> <span m='2138930'>a</span> <span
  m='2139090'>polynomial</span> <span m='2139990'>time</span> <span
  m='2140270'>algorithm.</span> <span m='2143460'>Head</span> <span
  m='2143630'>back</span> <span m='2143940'>to</span> <span
  m='2144260'>polynomial</span> <span m='2144830'>time</span> <span
  m='2145090'>land.</span> </p><p><span m='2148470'>You</span> <span
  m='2149070'>can</span> <span m='2149230'>think</span> <span
  m='2149400'>of</span> <span m='2149500'>it</span> <span m='2149600'>as</span>
  <span m='2149780'>a</span> <span m='2149900'>reduction,</span> <span
  m='2151580'>but</span> <span m='2152470'>with</span> <span
  m='2152660'>NP-hardness,</span> <span m='2153120'>we</span> <span
  m='2153220'>reduced</span> <span m='2153580'>from</span> <span
  m='2153760'>one</span> <span m='2153960'>problem</span> <span
  m='2154370'>a</span> <span m='2154620'>to</span> <span
  m='2154720'>another</span> <span m='2154980'>problem</span> <span
  m='2155350'>b.</span> <span m='2155890'>Here</span> <span
  m='2156080'>we're</span> <span m='2156200'>going</span> <span
  m='2156330'>to</span> <span m='2156400'>reduce</span> <span
  m='2156770'>from</span> <span m='2157090'>the</span> <span
  m='2157190'>problem</span> <span m='2157590'>a</span> <span
  m='2157950'>to</span> <span m='2158320'>the</span> <span
  m='2158460'>same</span> <span m='2158820'>problem a.</span> <span
  m='2159370'>It's</span> <span m='2159570'>a</span> <span
  m='2159650'>self</span> <span m='2160060'>reduction,</span> <span
  m='2160630'>if</span> <span m='2160650'>you</span> <span
  m='2160770'>will.</span> <span m='2161560'>But</span> <span
  m='2161870'>the</span> <span m='2162510'>input</span> <span
  m='2162900'>to</span> <span m='2162980'>the</span> <span
  m='2163080'>problem</span> <span m='2163440'>is</span> <span
  m='2163560'>going</span> <span m='2163700'>to</span> <span
  m='2163750'>get</span> <span m='2163990'>smaller.</span> <span
  m='2165600'>So</span> <span m='2165830'>we're</span> <span
  m='2165960'>going</span> <span m='2166070'>to</span> <span
  m='2166140'>convert</span> <span m='2167920'>an</span> <span
  m='2168080'>input.</span> <span m='2169660'>So</span> <span
  m='2169730'>this</span> <span m='2169860'>is</span> <span m='2169960'>for
  a</span> <span m='2170130'>parameterized</span> <span m='2170700'>problem.
  So</span> <span m='2171110'>an</span> <span m='2171210'>input</span> <span
  m='2171550'>consists</span> <span m='2171950'>of</span> <span
  m='2172040'>some</span> <span m='2172330'>regular</span> <span
  m='2172680'>input</span> <span m='2172960'>x</span> <span
  m='2173710'>and</span> <span m='2173850'>a</span> <span
  m='2173910'>parameter</span> <span m='2174420'>k.</span> <span
  m='2176440'>And</span> <span m='2176720'>we</span> <span
  m='2176820'>want</span> <span m='2177070'>to</span> <span
  m='2177170'>convert</span> <span m='2177520'>it</span> <span
  m='2177670'>into</span> <span m='2180070'>an</span> <span
  m='2180200'>equivalent</span> <span m='2185250'>small</span> <span
  m='2187700'>input</span> <span m='2190750'>x</span> <span
  m='2191020'>prime</span> <span m='2192030'>k</span> <span
  m='2192270'>prime</span> <span m='2196020'>to</span> <span
  m='2196330'>the</span> <span m='2196440'>same</span> <span
  m='2196810'>problem.</span> <span m='2197290'>OK.</span> </p><p><span
  m='2197680'>The problem</span> <span m='2197970'>is</span> <span
  m='2198060'>fixed,</span> <span m='2198350'>say</span> <span
  m='2198580'>vertex</span> <span m='2199000'>cover.</span> <span
  m='2199690'>So</span> <span m='2199850'>we're</span> <span
  m='2199950'>given</span> <span m='2200240'>an</span> <span
  m='2200370'>arbitrary</span> <span m='2200990'>input.</span> <span
  m='2201340'>This</span> <span m='2201500'>would</span> <span
  m='2201590'>be</span> <span m='2201740'>a</span> <span
  m='2201790'>graph</span> <span m='2202340'>and a</span> <span
  m='2202570'>number</span> <span m='2202780'>k.</span> <span
  m='2203770'>And</span> <span m='2203940'>we</span> <span
  m='2204020'>want</span> <span m='2204200'>to</span> <span
  m='2204260'>convert</span> <span m='2204640'>it</span> <span
  m='2204900'>into</span> <span m='2205520'>an</span> <span
  m='2205620'>equivalent</span> <span m='2206730'>small</span> <span
  m='2207850'>input,</span> <span m='2208890'>which</span> <span
  m='2209120'>is</span> <span m='2209220'>another</span> <span
  m='2209490'>graph</span> <span m='2209770'>G</span> <span
  m='2209960'>prime,</span> <span m='2210710'>and</span> <span
  m='2210930'>another</span> <span m='2211210'>parameter</span> <span
  m='2211670'>k</span> <span m='2211870'>prime.</span> <span
  m='2212790'>So</span> <span m='2212880'>equivalent</span> <span
  m='2213460'>means</span> <span m='2214350'>that</span> <span
  m='2214490'>the</span> <span m='2214650'>answer</span> <span
  m='2215040'>is</span> <span m='2215140'>going</span> <span
  m='2215270'>to</span> <span m='2215330'>be</span> <span m='2215470'>the</span>
  <span m='2215560'>same.</span> <span m='2216606'>OK.</span> <span
  m='2216970'>And</span> <span m='2217240'>I</span> <span
  m='2217380'>want</span> <span m='2217640'>the</span> <span
  m='2217810'>answer</span> <span m='2219140'>to</span> <span
  m='2219290'>the</span> <span m='2219380'>problem--</span> <span
  m='2221110'>let's</span> <span m='2221280'>say,</span> <span
  m='2221520'>answer</span> <span m='2221980'>of</span> <span
  m='2222220'>x</span> <span m='2222500'>comma</span> <span m='2222800'>k</span>
  <span m='2223580'>to</span> <span m='2223750'>be</span> <span
  m='2224000'>equal</span> <span m='2224410'>to</span> <span
  m='2225160'>the</span> <span m='2225330'>answer</span> <span
  m='2227570'>to</span> <span m='2228780'>x</span> <span
  m='2229200'>prime</span> <span m='2229980'>and</span> <span
  m='2230320'>k</span> <span m='2230480'>prime.</span> <span
  m='2230770'>Again,</span> <span m='2231130'>same</span> <span
  m='2231320'>problem,</span> <span m='2232400'>but</span> <span
  m='2232620'>different</span> <span m='2232910'>input.</span> </p><p><span
  m='2235460'>I'm</span> <span m='2235580'>trying</span> <span
  m='2235800'>to</span> <span m='2235860'>be</span> <span m='2235980'>a</span>
  <span m='2236030'>little</span> <span m='2236200'>generic</span> <span
  m='2236640'>here.</span> <span m='2236910'>It could</span> <span
  m='2237070'>be--</span> <span m='2238340'>we're</span> <span
  m='2238470'>going</span> <span m='2238560'>to</span> <span
  m='2238660'>think</span> <span m='2238910'>here</span> <span
  m='2239060'>about</span> <span m='2239280'>decision</span> <span
  m='2239680'>problems,</span> <span m='2240080'>but</span> <span
  m='2240220'>this</span> <span m='2240400'>makes</span> <span
  m='2240600'>sense</span> <span m='2240860'>even</span> <span
  m='2241080'>for</span> <span m='2241240'>non-decision</span> <span
  m='2241840'>problems.</span> <span m='2242160'>Whatever</span> <span
  m='2242430'>the</span> <span m='2242550'>answer is</span> <span
  m='2242910'>here,</span> <span m='2243220'>it</span> <span
  m='2243440'>should</span> <span m='2243590'>be</span> <span
  m='2243650'>the</span> <span m='2243700'>same</span> <span
  m='2243920'>as</span> <span m='2244020'>the</span> <span
  m='2244090'>answer</span> <span m='2244560'>is</span> <span
  m='2244710'>here,</span> <span m='2244960'>because</span> <span
  m='2245630'>I</span> <span m='2245730'>want</span> <span m='2245990'>an</span>
  <span m='2246070'>exact</span> <span m='2246510'>solution.</span> <span
  m='2247000'>I</span> <span m='2247100'>want</span> <span m='2247200'>to</span>
  <span m='2247300'>solve</span> <span m='2247400'>exactly</span> <span
  m='2247800'>the</span> <span m='2247900'>problem.</span> <span
  m='2248350'>I</span> <span m='2248440'>want</span> <span m='2248630'>to</span>
  <span m='2248700'>compute</span> <span m='2248960'>this</span> <span
  m='2249110'>answer</span> <span m='2249710'>exactly</span> <span
  m='2250300'>correctly.</span> <span m='2251520'>So</span> <span
  m='2251730'>if</span> <span m='2251880'>I</span> <span m='2251960'>can</span>
  <span m='2252130'>reduce</span> <span m='2252590'>it</span> <span
  m='2252750'>to</span> <span m='2252870'>some</span> <span m='2253140'>x</span>
  <span m='2253340'>prime</span> <span m='2253650'>k</span> <span
  m='2253820'>prime</span> <span m='2254660'>with</span> <span
  m='2254790'>the</span> <span m='2254870'>same</span> <span
  m='2255130'>answer,</span> <span m='2255450'>well,</span> <span
  m='2255720'>now</span> <span m='2255990'>I</span> <span m='2256070'>can</span>
  <span m='2256230'>just</span> <span m='2256370'>solve</span> <span
  m='2256660'>x</span> <span m='2256820'>prime</span> <span m='2257060'>k
  prime.</span> <span m='2258150'>So</span> <span m='2258300'>that's</span>
  <span m='2258530'>good.</span> </p><p><span m='2259090'>Now</span> <span
  m='2259220'>what</span> <span m='2259340'>does</span> <span
  m='2259390'>small</span> <span m='2259800'>mean?</span> <span
  m='2261086'>We</span> <span m='2261550'>need</span> <span
  m='2261690'>to</span> <span m='2261780'>define</span> <span
  m='2262100'>both</span> <span m='2262310'>of</span> <span
  m='2262370'>these.</span> <span m='2263130'>Small</span> <span
  m='2263500'>means</span> <span m='2264360'>that</span> <span
  m='2264640'>the</span> <span m='2264840'>size</span> <span m='2266170'>of
  x</span> <span m='2266400'>prime,</span> <span m='2267790'>which</span> <span
  m='2267940'>you</span> <span m='2268090'>might</span> <span
  m='2268290'>call</span> <span m='2268680'>n</span> <span
  m='2268910'>prime,</span> <span m='2271040'>should</span> <span
  m='2271330'>be,</span> <span m='2271650'>at</span> <span
  m='2271790'>most,</span> <span m='2272310'>some</span> <span
  m='2272560'>function</span> <span m='2272835'>of</span> <span
  m='2273510'>k.</span> <span m='2280420'>Cool.</span> <span
  m='2281030'>So</span> <span m='2282630'>this</span> <span
  m='2282850'>is</span> <span m='2282970'>interesting.</span> <span
  m='2283840'>So</span> <span m='2284070'>we</span> <span
  m='2284190'>started</span> <span m='2284590'>with</span> <span
  m='2285110'>probably</span> <span m='2285440'>a</span> <span
  m='2285500'>giant</span> <span m='2286010'>problem,</span> <span m='2286840'>x
  excise</span> <span m='2287500'>n,</span> <span m='2289280'>and</span> <span
  m='2289470'>we</span> <span m='2289570'>have</span> <span m='2289750'>a</span>
  <span m='2289950'>parameter</span> <span m='2290560'>k,</span> <span
  m='2290890'>which</span> <span m='2291100'>we</span> <span
  m='2291240'>presume</span> <span m='2291620'>is</span> <span
  m='2291740'>relatively</span> <span m='2292270'>small.</span> <span
  m='2293850'>And</span> <span m='2293990'>we</span> <span
  m='2294130'>convert</span> <span m='2294230'>it</span> <span
  m='2294730'>into</span> <span m='2295200'>a</span> <span
  m='2295290'>new</span> <span m='2295610'>input</span> <span
  m='2296020'>x</span> <span m='2296260'>prime</span> <span
  m='2297130'>that's</span> <span m='2297330'>very</span> <span
  m='2297790'>small.</span> <span m='2298210'>Its</span> <span
  m='2298460'>size</span> <span m='2299430'>is</span> <span m='2299610'>a</span>
  <span m='2299680'>function</span> <span m='2300220'>of</span> <span
  m='2300390'>k.</span> <span m='2301220'>No</span> <span
  m='2301430'>more</span> <span m='2301640'>dependence</span> <span
  m='2302110'>on</span> <span m='2302250'>n.</span> <span m='2302650'>n
  has</span> <span m='2302850'>disappeared</span> <span m='2303550'>from</span>
  <span m='2303730'>the</span> <span m='2303820'>problem.</span> <span
  m='2304900'>OK.</span> </p><p><span m='2305060'>We</span> <span
  m='2305150'>start</span> <span m='2305410'>with</span> <span
  m='2305500'>something</span> <span m='2305780'>a</span> <span
  m='2305840'>size</span> <span m='2306100'>n.</span> <span
  m='2306530'>We</span> <span m='2306670'>produced</span> <span
  m='2306970'>something</span> <span m='2307290'>the</span> <span
  m='2307380'>size</span> <span m='2307740'>as</span> <span
  m='2307880'>function</span> <span m='2308300'>of</span> <span
  m='2308780'>k.</span> <span m='2309140'>And</span> <span
  m='2309310'>then--</span> <span m='2309570'>OK--</span> <span
  m='2309780'>there's</span> <span m='2309940'>some</span> <span
  m='2310140'>other</span> <span m='2310340'>parameter</span> <span
  m='2310730'>k</span> <span m='2310900'>prime--</span> <span
  m='2311690'>doesn't</span> <span m='2312170'>matter</span> <span
  m='2312440'>much</span> <span m='2312660'>what</span> <span
  m='2312830'>it</span> <span m='2312920'>is.</span> <span
  m='2313210'>It's</span> <span m='2313620'>going</span> <span
  m='2313760'>to</span> <span m='2313830'>also</span> <span
  m='2314170'>be</span> <span m='2314350'>a</span> <span
  m='2314390'>function</span> <span m='2314760'>of</span> <span
  m='2314860'>k.</span> <span m='2316130'>So</span> <span m='2316240'>we</span>
  <span m='2316310'>started</span> <span m='2316600'>with</span> <span
  m='2316700'>something</span> <span m='2317030'>of</span> <span
  m='2317100'>size</span> <span m='2317360'>n.</span> <span
  m='2317580'>We</span> <span m='2317710'>produced</span> <span
  m='2318030'>something</span> <span m='2318340'>of</span> <span
  m='2318410'>size</span> <span m='2318680'>k.</span> <span
  m='2319090'>In</span> <span m='2319290'>polynomial</span> <span
  m='2320320'>time.</span> <span m='2322160'>Wow.</span> <span
  m='2322650'>This</span> <span m='2323640'>would</span> <span
  m='2323730'>be</span> <span m='2323870'>big</span> <span m='2324210'>if</span>
  <span m='2324330'>we</span> <span m='2324430'>could</span> <span
  m='2324570'>do</span> <span m='2324760'>it.</span> <span
  m='2325340'>Because</span> <span m='2325510'>we</span> <span
  m='2325690'>start</span> <span m='2326090'>with</span> <span
  m='2326920'>giant</span> <span m='2327370'>problem</span> <span
  m='2327750'>small</span> <span m='2328070'>k,</span> <span
  m='2329070'>and</span> <span m='2329240'>we</span> <span
  m='2329410'>kernelize</span> <span m='2329850'>it</span> <span
  m='2330350'>down--</span> <span m='2330850'>so</span> <span
  m='2331030'>here's</span> <span m='2331320'>the</span> <span
  m='2331450'>picture</span> <span m='2331775'>with</span> <span
  m='2332100'>this</span> <span m='2332500'>big</span> <span
  m='2332930'>thing.</span> </p><p><span m='2333730'>And</span> <span
  m='2334160'>the</span> <span m='2334340'>intuition</span> <span
  m='2334890'>is</span> <span m='2335060'>that</span> <span
  m='2335260'>the</span> <span m='2335330'>hardness</span> <span
  m='2335890'>of</span> <span m='2335950'>the</span> <span
  m='2336040'>problem</span> <span m='2337010'>is</span> <span
  m='2337250'>just</span> <span m='2337650'>from</span> <span
  m='2337940'>this</span> <span m='2338350'>thing</span> <span
  m='2338810'>of</span> <span m='2338900'>size</span> <span
  m='2339250'>k.</span> <span m='2340040'>But</span> <span
  m='2340330'>there's</span> <span m='2340520'>no thing</span> <span
  m='2340930'>of</span> <span m='2341000'>size</span> <span
  m='2341290'>k.</span> <span m='2341480'>Or</span> <span m='2341740'>at</span>
  <span m='2341860'>least</span> <span m='2341970'>we</span> <span
  m='2342050'>haven't</span> <span m='2342320'>found</span> <span m='2342560'>it
  yet,</span> <span m='2342820'>right?</span> <span m='2343290'>The</span> <span
  m='2343810'>k</span> <span m='2344060'>is</span> <span m='2344330'>the</span>
  <span m='2344440'>size</span> <span m='2344770'>of</span> <span
  m='2344860'>the</span> <span m='2344930'>vertex</span> <span
  m='2345330'>cover</span> <span m='2345580'>we're</span> <span
  m='2345700'>looking</span> <span m='2345990'>for.</span> <span
  m='2346190'>But</span> <span m='2346300'>we</span> <span
  m='2346420'>don't</span> <span m='2346580'>know</span> <span
  m='2346710'>where</span> <span m='2346810'>that</span> <span
  m='2346990'>is.</span> <span m='2347600'>It's</span> <span
  m='2347740'>hiding</span> <span m='2348200'>somewhere</span> <span
  m='2348990'>in</span> <span m='2349130'>this</span> <span
  m='2349250'>instance,</span> <span m='2349700'>in</span> <span
  m='2349800'>this</span> <span m='2350000'>amorphous</span> <span
  m='2350630'>blob.</span> <span m='2351520'>So</span> <span m='2351750'>it's
  k.</span> <span m='2352520'>But</span> <span m='2352930'>somehow,</span> <span
  m='2353430'>magically,</span> <span m='2354340'>this</span> <span
  m='2354870'>kernelization</span> <span m='2355490'>procedure</span> <span
  m='2357640'>produces</span> <span m='2358410'>a</span> <span
  m='2358520'>new</span> <span m='2358810'>problem</span> <span
  m='2359910'>that's</span> <span m='2360080'>only</span> <span
  m='2360340'>a</span> <span m='2360410'>little</span> <span
  m='2360700'>bit</span> <span m='2360910'>bigger</span> <span
  m='2361160'>than</span> <span m='2361360'>k.</span> <span
  m='2362770'>OK.</span> <span m='2362910'>Some</span> <span
  m='2363260'>function</span> <span m='2363680'>of</span> <span
  m='2363780'>k.</span> </p><p><span m='2365170'>So</span> <span
  m='2365350'>we</span> <span m='2365470'>take</span> <span
  m='2365660'>the</span> <span m='2365740'>big</span> <span
  m='2365900'>problem,</span> <span m='2366210'>we</span> <span
  m='2366310'>make</span> <span m='2366530'>it</span> <span
  m='2366630'>down</span> <span m='2366820'>to</span> <span
  m='2366900'>this</span> <span m='2366990'>small</span> <span
  m='2367320'>thing.</span> <span m='2368270'>What</span> <span
  m='2368640'>do</span> <span m='2368790'>you do</span> <span
  m='2368950'>now?</span> <span m='2369330'>You</span> <span
  m='2369470'>can</span> <span m='2369620'>run</span> <span
  m='2370040'>any</span> <span m='2370350'>algorithm</span> <span
  m='2370830'>you</span> <span m='2370970'>want,</span> <span
  m='2371300'>any</span> <span m='2371610'>finite</span> <span
  m='2372110'>algorithm</span> <span m='2374180'>applied</span> <span
  m='2374650'>to</span> <span m='2374790'>this</span> <span
  m='2375090'>instance</span> <span m='2376230'>will</span> <span
  m='2376440'>run</span> <span m='2376690'>in</span> <span
  m='2376800'>some</span> <span m='2377030'>function</span> <span
  m='2377420'>of</span> <span m='2377530'>k</span> <span
  m='2377740'>time.</span> <span m='2379090'>Doesn't</span> <span
  m='2379340'>matter</span> <span m='2379690'>as</span> <span
  m='2379800'>long</span> <span m='2379960'>as</span> <span m='2380160'>this is
  a</span> <span m='2380260'>correct</span> <span m='2380740'>algorithm.</span>
  <span m='2381740'>If</span> <span m='2381940'>your</span> <span
  m='2382050'>problem</span> <span m='2382340'>is</span> <span
  m='2382440'>in</span> <span m='2382570'>NP,</span> <span
  m='2383580'>there</span> <span m='2383870'>is</span> <span
  m='2384040'>an</span> <span m='2385130'>exponential</span> <span
  m='2385750'>time</span> <span m='2386000'>algorithm.</span> <span
  m='2386490'>You</span> <span m='2386590'>just</span> <span m='2386800'>try
  all</span> <span m='2387240'>the</span> <span m='2387320'>guesses.</span>
  <span m='2388380'>So</span> <span m='2388570'>we</span> <span
  m='2388680'>could</span> <span m='2388800'>use--</span> <span
  m='2389090'>we</span> <span m='2389230'>have</span> <span
  m='2389360'>two</span> <span m='2389560'>of</span> <span
  m='2389610'>them</span> <span m='2389770'>here.</span> <span
  m='2390260'>We</span> <span m='2390290'>could</span> <span
  m='2390420'>run</span> <span m='2390610'>either</span> <span
  m='2391000'>of</span> <span m='2391060'>these</span> <span
  m='2392180'>after</span> <span m='2392490'>we've</span> <span
  m='2392610'>kernelized.</span> </p><p><span m='2394290'>And</span> <span
  m='2394550'>we</span> <span m='2394730'>would</span> <span
  m='2395070'>get</span> <span m='2395320'>an</span> <span
  m='2395480'>FPT</span> <span m='2396030'>time.</span> <span
  m='2396640'>And,</span> <span m='2396820'>indeed,</span> <span
  m='2397740'>the</span> <span m='2398180'>FPT</span> <span
  m='2398770'>would</span> <span m='2399020'>mimic</span> <span
  m='2399490'>this</span> <span m='2399850'>kind</span> <span
  m='2400120'>of</span> <span m='2400210'>running</span> <span
  m='2400480'>time.</span> <span m='2401500'>We</span> <span
  m='2401670'>do</span> <span m='2402090'>a</span> <span
  m='2402170'>polynomial</span> <span m='2403010'>amount</span> <span
  m='2403290'>of</span> <span m='2403390'>pre-processing.</span> <span
  m='2404470'>That's</span> <span m='2404700'>the</span> <span
  m='2404790'>kernelization</span> <span m='2405070'>procedure.</span> <span
  m='2406500'>That's</span> <span m='2406760'>the</span> <span
  m='2407040'>only</span> <span m='2407370'>dependence</span> <span
  m='2407830'>on</span> <span m='2407980'>n.</span> <span
  m='2408220'>After</span> <span m='2408520'>we've</span> <span
  m='2408680'>done</span> <span m='2408860'>that,</span> <span
  m='2409160'>the</span> <span m='2409350'>new</span> <span
  m='2409690'>problem</span> <span m='2410500'>is</span> <span
  m='2410650'>entirely</span> <span m='2411110'>a</span> <span
  m='2411160'>function</span> <span m='2411460'>of</span> <span
  m='2411550'>k.</span> <span m='2412150'>And</span> <span
  m='2412310'>then</span> <span m='2412420'>you</span> <span
  m='2412540'>apply</span> <span m='2412840'>any</span> <span
  m='2413110'>algorithm</span> <span m='2413470'>to</span> <span
  m='2413590'>that,</span> <span m='2413810'>you'll</span> <span
  m='2413920'>get</span> <span m='2414170'>f</span> <span m='2414330'>of</span>
  <span m='2414440'>k</span> <span m='2414620'>running</span> <span
  m='2414900'>time.</span> <span m='2415790'>Now</span> <span
  m='2416000'>if</span> <span m='2416100'>we</span> <span
  m='2416170'>want</span> <span m='2416360'>a</span> <span
  m='2416410'>good</span> <span m='2416700'>f</span> <span m='2416850'>of</span>
  <span m='2416950'>k,</span> <span m='2417180'>we</span> <span
  m='2417310'>should</span> <span m='2417470'>use</span> <span
  m='2417650'>the</span> <span m='2417750'>best</span> <span
  m='2418150'>algorithm</span> <span m='2418500'>we</span> <span
  m='2418610'>have.</span> <span m='2419580'>But,</span> <span
  m='2420290'>in</span> <span m='2420440'>general,</span> <span
  m='2420780'>you</span> <span m='2420900'>could</span> <span
  m='2421020'>use</span> <span m='2421700'>anything.</span> <span
  m='2423852'>All right.</span> <span m='2425170'>So</span> <span
  m='2425440'>far,</span> <span m='2425740'>so</span> <span
  m='2425810'>good.</span> </p><p><span m='2429320'>So</span> <span
  m='2429610'>we</span> <span m='2429700'>had</span> <span
  m='2429870'>this</span> <span m='2430040'>theorem</span> <span
  m='2430840'>that</span> <span m='2431670'>product</span> <span
  m='2432260'>is</span> <span m='2432430'>the</span> <span
  m='2432490'>same</span> <span m='2432810'>as</span> <span
  m='2432940'>plus.</span> <span m='2434340'>In</span> <span
  m='2434470'>fact,</span> <span m='2436120'>kernelization</span> <span
  m='2437360'>is</span> <span m='2437550'>the</span> <span
  m='2437610'>same</span> <span m='2437910'>thing.</span> <span
  m='2438550'>So</span> <span m='2439590'>these</span> <span
  m='2439850'>are</span> <span m='2439950'>all</span> <span
  m='2440870'>the</span> <span m='2440940'>same</span> <span
  m='2441220'>thing.</span> <span m='2442430'>I</span> <span
  m='2442500'>guess</span> <span m='2442870'>this</span> <span
  m='2443070'>one</span> <span m='2443780'>is</span> <span
  m='2443950'>equivalent</span> <span m='2444420'>to</span> <span
  m='2445040'>being</span> <span m='2445300'>FPT.</span> <span
  m='2445790'>that's</span> <span m='2446020'>the</span> <span
  m='2446090'>definition</span> <span m='2446560'>of</span> <span
  m='2446660'>FPT.</span> <span m='2447860'>So</span> <span
  m='2448770'>I'll</span> <span m='2449180'>just</span> <span m='2449590'>write
  it</span> <span m='2449870'>here.</span> <span m='2455080'>The</span> <span
  m='2455140'>problem</span> <span m='2455550'>is</span> <span
  m='2455650'>FPT,</span> <span m='2456770'>if</span> <span
  m='2456990'>and</span> <span m='2457110'>only</span> <span
  m='2457380'>if</span> <span m='2457762'>it has</span> <span
  m='2459310'>a</span> <span m='2459370'>kernelization.</span> <span
  m='2465590'>This</span> <span m='2465680'>is</span> <span
  m='2465800'>crazy.</span> <span m='2467340'>I</span> <span
  m='2467430'>keep</span> <span m='2467680'>introducing</span> <span
  m='2468170'>stronger</span> <span m='2468710'>and</span> <span
  m='2468780'>stronger</span> <span m='2469120'>notions</span> <span
  m='2469470'>of</span> <span m='2469610'>good.</span> <span
  m='2470250'>And</span> <span m='2470400'>they</span> <span
  m='2470520'>all</span> <span m='2470720'>turn</span> <span
  m='2470890'>out</span> <span m='2471050'>to</span> <span m='2471100'>be</span>
  <span m='2471190'>the</span> <span m='2471300'>same.</span> <span
  m='2471600'>That,</span> <span m='2471930'>again,</span> <span
  m='2472280'>gives</span> <span m='2472420'>you</span> <span
  m='2472530'>a</span> <span m='2472580'>sense</span> <span
  m='2472850'>of</span> <span m='2472960'>robustness</span> <span
  m='2473540'>of</span> <span m='2473650'>this</span> <span
  m='2473800'>definition.</span> <span m='2474940'>And</span> <span
  m='2475090'>why</span> <span m='2475270'>this</span> <span
  m='2475430'>is</span> <span m='2475550'>a</span> <span
  m='2475610'>natural</span> <span m='2476040'>thing</span> <span
  m='2476230'>to</span> <span m='2476390'>study.</span> </p><p><span
  m='2477260'>So</span> <span m='2478690'>this</span> <span
  m='2478850'>sounds</span> <span m='2479100'>crazy.</span> <span
  m='2479440'>How</span> <span m='2479650'>could</span> <span
  m='2479830'>I</span> <span m='2479910'>put</span> <span m='2480190'>all</span>
  <span m='2480490'>of</span> <span m='2480670'>the</span> <span
  m='2481100'>easy</span> <span m='2481420'>work</span> <span
  m='2481690'>at</span> <span m='2481780'>the</span> <span
  m='2481850'>beginning</span> <span m='2482430'>in</span> <span
  m='2482510'>this</span> <span m='2482660'>polynomial</span> <span
  m='2483230'>time</span> <span m='2483470'>algorithm</span> <span
  m='2484230'>and</span> <span m='2484380'>then</span> <span
  m='2484550'>in</span> <span m='2484620'>the</span> <span
  m='2484760'>end</span> <span m='2485080'>produce</span> <span
  m='2485480'>something</span> <span m='2486210'>that is</span> <span
  m='2486410'>a</span> <span m='2486480'>reasonable</span> <span
  m='2486850'>size?</span> <span m='2487700'>Again,</span> <span
  m='2488180'>this</span> <span m='2488620'>proof</span> <span
  m='2488950'>is</span> <span m='2489090'>going</span> <span
  m='2489290'>to</span> <span m='2489380'>be</span> <span
  m='2489550'>trivial.</span> <span m='2491040'>I</span> <span
  m='2491070'>think</span> <span m='2491270'>everything</span> <span
  m='2491620'>in</span> <span m='2491680'>this</span> <span
  m='2491820'>field</span> <span m='2492020'>is</span> <span
  m='2492120'>either</span> <span m='2492370'>really</span> <span
  m='2492700'>hard</span> <span m='2493370'>or</span> <span
  m='2493590'>trivial.</span> <span m='2494670'>I</span> <span
  m='2494800'>guess</span> <span m='2495000'>that</span> <span
  m='2495110'>makes</span> <span m='2495280'>sense.</span> <span
  m='2497290'>So</span> <span m='2498050'>let's</span> <span
  m='2498430'>first--</span> <span m='2499100'>so</span> <span
  m='2499270'>I'm</span> <span m='2499650'>just</span> <span
  m='2499920'>looking</span> <span m='2500170'>at</span> <span
  m='2500310'>this</span> <span m='2500620'>inequality--</span> <span
  m='2501160'>this</span> <span m='2501690'>implication--</span> <span
  m='2502310'>we</span> <span m='2502400'>already</span> <span
  m='2502580'>did</span> <span m='2502730'>the</span> <span
  m='2502850'>other</span> <span m='2503000'>one.</span> </p><p><span
  m='2504930'>The</span> <span m='2505000'>easy</span> <span
  m='2505230'>direction,</span> <span m='2505950'>of</span> <span
  m='2505970'>course,</span> <span m='2506310'>is</span> <span
  m='2506640'>this</span> <span m='2506890'>way.</span> <span
  m='2508360'>I</span> <span m='2508570'>didn't</span> <span
  m='2508760'>even</span> <span m='2508970'>do</span> <span
  m='2509130'>it</span> <span m='2509280'>in</span> <span
  m='2509460'>this</span> <span m='2509660'>case.</span> <span
  m='2510030'>If</span> <span m='2510060'>I</span> <span m='2510120'>have</span>
  <span m='2510460'>an</span> <span m='2510590'>additive</span> <span
  m='2511010'>running</span> <span m='2511280'>time,</span> <span
  m='2511530'>it</span> <span m='2511630'>certainly,</span> <span
  m='2512000'>at</span> <span m='2512090'>most,</span> <span m='2512460'>the
  product,</span> <span m='2512910'>assuming</span> <span
  m='2513270'>both</span> <span m='2513510'>those</span> <span
  m='2513680'>numbers</span> <span m='2514060'>are</span> <span
  m='2514250'>at</span> <span m='2514330'>least</span> <span
  m='2514560'>1.</span> <span m='2516490'>OK.</span> <span
  m='2517050'>And</span> <span m='2517230'>again,</span> <span
  m='2517480'>if</span> <span m='2517630'>I</span> <span m='2517700'>have</span>
  <span m='2517980'>a</span> <span m='2518040'>kernelization,</span> <span
  m='2518796'>as</span> <span m='2519730'>I</span> <span
  m='2519790'>said,</span> <span m='2520250'>I</span> <span
  m='2520310'>could</span> <span m='2520470'>run</span> <span
  m='2520750'>the</span> <span m='2520840'>kernelization</span> <span
  m='2521110'>algorithm</span> <span m='2521520'>in</span> <span
  m='2521930'>polynomial</span> <span m='2522450'>time,</span> <span
  m='2523260'>and</span> <span m='2523510'>then</span> <span
  m='2524370'>run</span> <span m='2524610'>any</span> <span
  m='2525080'>finite</span> <span m='2525430'>algorithm</span> <span
  m='2525850'>to</span> <span m='2525930'>solve</span> <span
  m='2526170'>the</span> <span m='2526250'>problem,</span> <span
  m='2526740'>and</span> <span m='2526960'>I</span> <span
  m='2527080'>would</span> <span m='2527200'>get</span> <span
  m='2527360'>some</span> <span m='2527530'>f</span> <span m='2527700'>of</span>
  <span m='2527810'>k</span> <span m='2528000'>running</span> <span
  m='2528290'>time.</span> <span m='2529010'>So</span> <span
  m='2529230'>this</span> <span m='2529460'>is</span> <span
  m='2530510'>easy.</span> </p><p><span m='2535500'>Kernelize</span> <span
  m='2538410'>and</span> <span m='2538560'>then</span> <span
  m='2538710'>run</span> <span m='2538990'>any</span> <span
  m='2539270'>algorithm</span> <span m='2543710'>on</span> <span
  m='2543900'>the</span> <span m='2543990'>kernel.</span> <span
  m='2545650'>Kernel</span> <span m='2546050'>is</span> <span
  m='2546210'>the</span> <span m='2546450'>produced</span> <span
  m='2546850'>output</span> <span m='2548240'>x</span> <span
  m='2548470'>prime</span> <span m='2548870'>k</span> <span
  m='2549060'>prime.</span> <span m='2551110'>OK.</span> <span
  m='2551420'>Let's</span> <span m='2551730'>do</span> <span
  m='2551920'>the</span> <span m='2552080'>other</span> <span
  m='2552220'>direction.</span> <span m='2554130'>That's</span> <span
  m='2554260'>the</span> <span m='2554350'>interesting</span> <span
  m='2554700'>part.</span> <span m='2555040'>So</span> <span
  m='2555180'>suppose</span> <span m='2555680'>I</span> <span
  m='2555760'>have</span> <span m='2555970'>it</span> <span
  m='2556040'>an</span> <span m='2556270'>algorithm</span> <span
  m='2556450'>that</span> <span m='2556600'>runs,</span> <span
  m='2556960'>let's</span> <span m='2557140'>say,</span> <span
  m='2557300'>in</span> <span m='2557420'>this</span> <span
  m='2557600'>running</span> <span m='2557840'>time.</span> <span
  m='2558950'>I</span> <span m='2559040'>claim</span> <span
  m='2559430'>that</span> <span m='2560250'>I</span> <span
  m='2560360'>can</span> <span m='2560830'>turn</span> <span
  m='2561080'>it</span> <span m='2561180'>into</span> <span m='2561450'>a</span>
  <span m='2561540'>kernel.</span> <span m='2563010'>And</span> <span
  m='2563180'>the</span> <span m='2563260'>proof</span> <span
  m='2563550'>is</span> <span m='2563680'>going</span> <span
  m='2563820'>to</span> <span m='2563880'>look</span> <span
  m='2564130'>just</span> <span m='2564520'>like</span> <span
  m='2564800'>before.</span> <span m='2565940'>OK.</span> <span
  m='2566210'>So</span> <span m='2566510'>there</span> <span
  m='2566620'>are</span> <span m='2566670'>two</span> <span
  m='2566850'>cases.</span> <span m='2568020'>One</span> <span
  m='2568340'>is</span> <span m='2568480'>that</span> <span m='2568650'>f</span>
  <span m='2568860'>of</span> <span m='2568960'>k,</span> <span
  m='2570020'>let's</span> <span m='2570290'>say,</span> <span
  m='2570560'>is</span> <span m='2570690'>less</span> <span
  m='2570900'>than</span> <span m='2570970'>or</span> <span
  m='2570990'>equal</span> <span m='2571200'>to</span> <span
  m='2571290'>n.</span> </p><p><span m='2574390'>Actually</span> <span
  m='2574680'>I</span> <span m='2574750'>want</span> <span m='2575010'>to
  do</span> <span m='2575090'>the</span> <span m='2575240'>other</span> <span
  m='2575390'>case</span> <span m='2576130'>first.</span> <span m='2576850'>I
  think</span> <span m='2577200'>it's a little</span> <span m='2577550'>more
  natural.</span> <span m='2577700'>Well,</span> <span m='2578130'>it</span>
  <span m='2578560'>doesn't</span> <span m='2578860'>really matter.</span> <span
  m='2580230'>They're</span> <span m='2580340'>both</span> <span
  m='2580590'>easy</span> <span m='2580920'>but</span> <span
  m='2581140'>for</span> <span m='2581310'>different</span> <span
  m='2581570'>reasons.</span> <span m='2583380'>the</span> <span
  m='2583530'>then</span> <span m='2583750'>parts</span> <span
  m='2584070'>are</span> <span m='2584130'>going</span> <span
  m='2584240'>to</span> <span m='2584310'>look</span> <span
  m='2584480'>different.</span> <span m='2586280'>So</span> <span
  m='2586380'>the</span> <span m='2586460'>first</span> <span
  m='2586730'>case,</span> <span m='2587300'>if</span> <span
  m='2587500'>n</span> <span m='2587770'>is</span> <span m='2587910'>at</span>
  <span m='2588040'>most</span> <span m='2588470'>f</span> <span
  m='2588670'>of</span> <span m='2588800'>k,</span> <span
  m='2589440'>what</span> <span m='2589620'>do</span> <span m='2589740'>I</span>
  <span m='2589820'>do</span> <span m='2590030'>in</span> <span
  m='2590090'>that</span> <span m='2590270'>situation,</span> <span
  m='2590780'>in other</span> <span m='2590880'>words,</span> <span
  m='2591100'>kernelize</span> <span m='2592190'>of</span> <span
  m='2592280'>this</span> <span m='2592600'>thing</span> <span
  m='2592890'>of</span> <span m='2592950'>size</span> <span
  m='2593230'>n,</span> <span m='2593510'>I</span> <span m='2593560'>want</span>
  <span m='2593720'>to</span> <span m='2593790'>kernelize</span> <span
  m='2594370'>into</span> <span m='2594530'>something</span> <span
  m='2594870'>of</span> <span m='2594930'>size</span> <span m='2595180'>f</span>
  <span m='2595330'>of</span> <span m='2595430'>k?</span> <span
  m='2597280'>Nothing.</span> <span m='2597940'>I'm</span> <span
  m='2598170'>done</span> <span m='2598370'>already.</span> <span
  m='2599200'>So</span> <span m='2599360'>this</span> <span
  m='2599580'>is</span> <span m='2599690'>the</span> <span
  m='2599880'>already</span> <span m='2600420'>kernelized</span> <span
  m='2601150'>case.</span> <span m='2607060'>That's</span> <span
  m='2607260'>great.</span> </p><p><span m='2611210'>So</span> <span
  m='2612380'>the</span> <span m='2612550'>other</span> <span
  m='2612700'>cases,</span> <span m='2613150'>and</span> <span
  m='2613340'>it's</span> <span m='2613460'>big.</span> <span
  m='2613780'>That's</span> <span m='2614460'>the</span> <span
  m='2614550'>more</span> <span m='2614730'>interesting</span> <span
  m='2615020'>case,</span> <span m='2615260'>of</span> <span
  m='2615360'>course.</span> <span m='2617080'>n</span> <span
  m='2617320'>is</span> <span m='2617490'>greater</span> <span
  m='2617940'>than</span> <span m='2618000'>or</span> <span
  m='2618060'>equal</span> <span m='2618330'>to</span> <span
  m='2619130'>f</span> <span m='2619290'>of</span> <span m='2619450'>k.</span>
  <span m='2623520'>What</span> <span m='2623680'>happens</span> <span
  m='2624020'>here?</span> <span m='2624580'>Well,</span> <span
  m='2624690'>just</span> <span m='2624860'>like</span> <span
  m='2625030'>last</span> <span m='2625340'>time,</span> <span
  m='2625970'>that</span> <span m='2626130'>means</span> <span
  m='2626320'>that</span> <span m='2626400'>this</span> <span
  m='2626570'>running</span> <span m='2626900'>time,</span> <span
  m='2628870'>f</span> <span m='2629090'>of</span> <span m='2629200'>k</span>
  <span m='2629460'>is</span> <span m='2629610'>now</span> <span
  m='2629800'>at</span> <span m='2629870'>most</span> <span
  m='2630130'>n,</span> <span m='2630400'>that</span> <span
  m='2630550'>means</span> <span m='2630730'>this</span> <span
  m='2630840'>running</span> <span m='2631100'>times</span> <span m='2631430'>is
  at</span> <span m='2631520'>most</span> <span m='2632190'>n</span> <span
  m='2632410'>to</span> <span m='2632520'>the</span> <span m='2632660'>c
  plus</span> <span m='2633150'>one.</span> <span m='2634830'>Right?</span>
  <span m='2635060'>So</span> <span m='2635170'>that</span> <span
  m='2635350'>means</span> <span m='2637000'>the</span> <span
  m='2637790'>FPT</span> <span m='2638380'>algorithm</span> <span
  m='2638820'>that</span> <span m='2638950'>I'm</span> <span
  m='2639060'>given,</span> <span m='2641020'>because</span> <span
  m='2641210'>we're</span> <span m='2641310'>assuming</span> <span
  m='2641700'>here</span> <span m='2641860'>we're</span> <span
  m='2641960'>given</span> <span m='2642280'>an</span> <span
  m='2642340'>FPT</span> <span m='2642750'>algorithm,</span> <span
  m='2643120'>we</span> <span m='2643200'>want</span> <span
  m='2643350'>to</span> <span m='2643410'>produce</span> <span
  m='2643720'>a</span> <span m='2643800'>kernel--</span> <span
  m='2646560'>in</span> <span m='2646710'>that</span> <span
  m='2646870'>case,</span> <span m='2647260'>that</span> <span
  m='2647530'>algorithm</span> <span m='2648400'>runs</span> <span
  m='2649320'>in</span> <span m='2651430'>n</span> <span m='2651760'>to</span>
  <span m='2651870'>the</span> <span m='2652000'>c plus</span> <span
  m='2652440'>1</span> <span m='2652670'>time.</span> <span
  m='2655180'>Which</span> <span m='2655390'>means</span> <span
  m='2655590'>I</span> <span m='2655660'>can</span> <span
  m='2655810'>actually</span> <span m='2656130'>run</span> <span
  m='2656350'>it.</span> <span m='2657280'>That's</span> <span
  m='2657520'>polynomial</span> <span m='2658210'>time.</span> <span
  m='2659726'>OK.</span> </p><p><span m='2660120'>So</span> <span
  m='2660350'>over</span> <span m='2660540'>here</span> <span
  m='2661750'>I</span> <span m='2662010'>needed</span> <span
  m='2662290'>a</span> <span m='2662360'>polynomial</span> <span
  m='2663090'>time</span> <span m='2663460'>kernelization</span> <span
  m='2663720'>algorithm.</span> <span m='2664990'>If</span> <span
  m='2665310'>it</span> <span m='2665440'>happens</span> <span
  m='2665830'>that</span> <span m='2665940'>f</span> <span m='2666120'>of</span>
  <span m='2666230'>k</span> <span m='2666410'>is</span> <span
  m='2666550'>at</span> <span m='2666640'>most</span> <span
  m='2666900'>n,</span> <span m='2667600'>then</span> <span m='2668280'>I</span>
  <span m='2668410'>can</span> <span m='2668560'>actually</span> <span
  m='2669060'>run</span> <span m='2669860'>the</span> <span
  m='2669980'>FPT</span> <span m='2670370'>algorithm,</span> <span
  m='2670850'>and that</span> <span m='2671020'>would</span> <span
  m='2671130'>be</span> <span m='2671420'>a</span> <span
  m='2671480'>valid</span> <span m='2671890'>kernelization</span> <span
  m='2672460'>procedure.</span> <span m='2672830'>Now</span> <span
  m='2673300'>the</span> <span m='2673400'>FPT</span> <span
  m='2673740'>algorithm</span> <span m='2674070'>actually</span> <span
  m='2674390'>solves</span> <span m='2674890'>the</span> <span
  m='2675000'>problem.</span> <span m='2675890'>Let's</span> <span
  m='2676080'>say,</span> <span m='2676210'>it</span> <span
  m='2676330'>says</span> <span m='2676580'>yes</span> <span
  m='2676880'>or</span> <span m='2676970'>no,</span> <span
  m='2678240'>whether</span> <span m='2679370'>the</span> <span
  m='2679750'>answer</span> <span m='2680100'>to</span> <span
  m='2680260'>my</span> <span m='2680410'>original</span> <span
  m='2680740'>question.</span> <span m='2682120'>The</span> <span
  m='2682230'>kernelization</span> <span m='2682920'>procedure</span> <span
  m='2683330'>has</span> <span m='2683510'>to</span> <span
  m='2683620'>output</span> <span m='2684400'>an</span> <span
  m='2684590'>input</span> <span m='2685610'>to</span> <span
  m='2685750'>the</span> <span m='2685850'>problem.</span> <span
  m='2686500'>So</span> <span m='2689110'>what</span> <span m='2689460'>I</span>
  <span m='2689530'>need</span> <span m='2689720'>to</span> <span
  m='2689810'>add</span> <span m='2690000'>one</span> <span
  m='2690180'>thing</span> <span m='2690340'>here</span> <span
  m='2690610'>which</span> <span m='2690830'>is</span> <span
  m='2690980'>just--</span> <span m='2691530'>output</span> <span
  m='2693270'>a</span> <span m='2693540'>canonical</span> <span
  m='2697110'>yes</span> <span m='2697520'>or</span> <span m='2697700'>no</span>
  <span m='2698520'>input</span> <span m='2702570'>accordingly.</span> <span
  m='2705714'>OK.</span> </p><p><span m='2706200'>If</span> <span
  m='2706380'>the</span> <span m='2706460'>FPT</span> <span
  m='2706860'>algorithm--</span> <span m='2707580'>here</span> <span
  m='2707830'>I'm</span> <span m='2707920'>thinking</span> <span
  m='2708140'>about</span> <span m='2708330'>decision</span> <span
  m='2708640'>problems--</span> <span m='2709000'>if</span> <span
  m='2709130'>the FPT</span> <span m='2709610'>algorithm</span> <span
  m='2709990'>says</span> <span m='2710240'>yes,</span> <span
  m='2710980'>I'm</span> <span m='2711110'>going</span> <span
  m='2711190'>to</span> <span m='2711710'>output</span> <span
  m='2712430'>one</span> <span m='2712790'>instance,</span> <span
  m='2713370'>one</span> <span m='2713480'>input</span> <span
  m='2713730'>of</span> <span m='2713790'>the</span> <span
  m='2713880'>problem</span> <span m='2714340'>where</span> <span
  m='2714460'>the</span> <span m='2714630'>output</span> <span
  m='2714890'>is</span> <span m='2714990'>yes.</span> <span m='2715280'>I</span>
  <span m='2715340'>know</span> <span m='2715500'>that</span> <span
  m='2715630'>one</span> <span m='2715770'>exists,</span> <span
  m='2716700'>because</span> <span m='2717320'>this</span> <span
  m='2717460'>algorithm</span> <span m='2717720'>said</span> <span
  m='2717970'>yes.</span> <span m='2718400'>So</span> <span
  m='2719090'>in</span> <span m='2719780'>a</span> <span
  m='2719880'>constant</span> <span m='2720370'>amount</span> <span
  m='2720600'>of</span> <span m='2720660'>space,</span> <span
  m='2721620'>I'm</span> <span m='2721740'>able</span> <span
  m='2721940'>to</span> <span m='2722040'>write</span> <span
  m='2722270'>a</span> <span m='2722370'>yes</span> <span
  m='2723470'>input.</span> <span m='2724120'>Or</span> <span
  m='2724580'>in</span> <span m='2724700'>a</span> <span m='2724750'>constant
  amount</span> <span m='2725190'>space,</span> <span m='2725450'>I</span> <span
  m='2725530'>write</span> <span m='2725690'>a</span> <span
  m='2725740'>no</span> <span m='2725940'>input.</span> <span
  m='2726240'>So</span> <span m='2726360'>the</span> <span
  m='2726460'>new</span> <span m='2726600'>kernel</span> <span
  m='2726910'>will</span> <span m='2727000'>have</span> <span
  m='2727250'>constant</span> <span m='2727750'>size,</span> <span
  m='2728050'>which</span> <span m='2728230'>is</span> <span
  m='2728310'>smaller</span> <span m='2728700'>than</span> <span
  m='2728970'>f</span> <span m='2729120'>of</span> <span m='2729220'>k.</span>
  <span m='2731900'>OK.</span> <span m='2732990'>That's</span> <span
  m='2733260'>it.</span> </p><p><span m='2733580'>So</span> <span
  m='2734270'>either I</span> <span m='2734530'>output</span> <span
  m='2735010'>the</span> <span m='2735100'>same</span> <span
  m='2735410'>input</span> <span m='2736030'>that</span> <span
  m='2736140'>I</span> <span m='2736190'>was</span> <span
  m='2736350'>given.</span> <span m='2737150'>Or</span> <span
  m='2737445'>I</span> <span m='2737740'>output</span> <span
  m='2738430'>something</span> <span m='2738790'>of</span> <span
  m='2738880'>constant</span> <span m='2739280'>size</span> <span
  m='2739670'>that</span> <span m='2739910'>encodes</span> <span
  m='2740340'>a</span> <span m='2740390'>yes</span> <span m='2740700'>or</span>
  <span m='2740880'>no.</span> <span m='2742480'>Kind</span> <span
  m='2742720'>of</span> <span m='2742830'>trivial</span> <span
  m='2743270'>again.</span> <span m='2744750'>The</span> <span
  m='2744890'>catch</span> <span m='2745310'>is</span> <span
  m='2746250'>that</span> <span m='2747570'>size</span> <span
  m='2748180'>of</span> <span m='2748400'>the</span> <span
  m='2748570'>kernel,</span> <span m='2749510'>the</span> <span
  m='2749610'>size</span> <span m='2749990'>of</span> <span
  m='2750090'>the</span> <span m='2750250'>output,</span> <span
  m='2751150'>in</span> <span m='2751280'>general,</span> <span
  m='2751620'>here</span> <span m='2751910'>is</span> <span
  m='2752090'>going</span> <span m='2752320'>to</span> <span
  m='2752420'>be</span> <span m='2753020'>exponential</span> <span
  m='2753720'>in</span> <span m='2753840'>k,</span> <span
  m='2754160'>because</span> <span m='2754350'>f</span> <span
  m='2754530'>of</span> <span m='2754630'>k</span> <span
  m='2754910'>presumably</span> <span m='2755480'>is</span> <span
  m='2755640'>exponential</span> <span m='2756310'>in</span> <span
  m='2756430'>k.</span> <span m='2758390'>That's</span> <span
  m='2758890'>annoying.</span> <span m='2759440'>This</span> <span
  m='2759640'>is</span> <span m='2759740'>what</span> <span
  m='2759910'>you</span> <span m='2759990'>might</span> <span
  m='2760170'>call</span> <span m='2760390'>an</span> <span
  m='2760550'>exponential</span> <span m='2761300'>size</span> <span
  m='2761770'>kernel.</span> </p><p><span m='2763130'>So</span> <span
  m='2763340'>an</span> <span m='2763420'>interesting</span> <span
  m='2763760'>question.</span> <span m='2764310'>And</span> <span
  m='2764760'>exponential</span> <span m='2765280'>size</span> <span
  m='2765490'>kernels</span> <span m='2765810'>are</span> <span
  m='2765910'>equivalent</span> <span m='2766470'>to</span> <span
  m='2766550'>FPT.</span> <span m='2767940'>Something</span> <span
  m='2768280'>that</span> <span m='2768450'>may</span> <span
  m='2768650'>not</span> <span m='2769000'>be</span> <span
  m='2769140'>equivalent</span> <span m='2769750'>is</span> <span
  m='2769910'>a</span> <span m='2769970'>polynomial</span> <span
  m='2770730'>size</span> <span m='2771100'>kernel.</span> <span m='2771860'>It
  would be</span> <span m='2772040'>nice</span> <span m='2772340'>if</span>
  <span m='2772420'>I</span> <span m='2772490'>start</span> <span
  m='2772780'>with</span> <span m='2772880'>something</span> <span
  m='2773310'>that's</span> <span m='2773670'>polynomial</span> <span
  m='2774210'>in</span> <span m='2774350'>n,</span> <span m='2775340'>and</span>
  <span m='2775490'>I</span> <span m='2775570'>reduce</span> <span
  m='2776030'>it</span> <span m='2776170'>to</span> <span
  m='2776260'>something</span> <span m='2776580'>that's</span> <span
  m='2776740'>polynomial</span> <span m='2777330'>in</span> <span
  m='2777430'>k.</span> <span m='2778530'>And</span> <span
  m='2778710'>then</span> <span m='2778930'>I</span> <span
  m='2779020'>run</span> <span m='2779260'>something</span> <span
  m='2779710'>that's</span> <span m='2780150'>exponential</span> <span
  m='2780990'>on</span> <span m='2781150'>that.</span> <span
  m='2781490'>But</span> <span m='2781640'>it</span> <span
  m='2781730'>will</span> <span m='2781840'>only</span> <span
  m='2782130'>be</span> <span m='2782850'>singly</span> <span
  m='2783380'>exponential</span> <span m='2783665'>in</span> <span
  m='2783950'>k,</span> <span m='2784310'>hopefully.</span> </p><p><span
  m='2785400'>Whereas,</span> <span m='2786000'>if</span> <span
  m='2786230'>I</span> <span m='2786810'>use</span> <span
  m='2787080'>this</span> <span m='2787390'>kernelization</span> <span
  m='2787650'>procedure,</span> <span m='2788880'>if I</span> <span
  m='2788980'>apply</span> <span m='2789320'>to</span> <span
  m='2789460'>vertex</span> <span m='2789890'>cover</span> <span
  m='2790770'>with</span> <span m='2791600'>one</span> <span
  m='2791770'>of</span> <span m='2791840'>these</span> <span
  m='2792010'>algorithms,</span> <span m='2793030'>I'm</span> <span
  m='2793160'>going</span> <span m='2793280'>to</span> <span
  m='2793320'>get</span> <span m='2793680'>a</span> <span m='2793780'>new</span>
  <span m='2794040'>thing</span> <span m='2794420'>that's</span> <span
  m='2794570'>size</span> <span m='2794845'>is</span> <span
  m='2795120'>exponential</span> <span m='2795680'>in</span> <span
  m='2795780'>k.</span> <span m='2796480'>If</span> <span m='2796670'>I</span>
  <span m='2796750'>run</span> <span m='2797850'>one</span> <span
  m='2798110'>of</span> <span m='2798150'>these</span> <span
  m='2798310'>brute</span> <span m='2798530'>force</span> <span
  m='2799290'>algorithms,</span> <span m='2799920'>I'm</span> <span
  m='2800050'>going</span> <span m='2800140'>to</span> <span
  m='2800180'>get</span> <span m='2800330'>something</span> <span
  m='2800670'>that's like</span> <span m='2800860'>doubly</span> <span
  m='2801270'>exponential</span> <span m='2801830'>in</span> <span
  m='2801930'>k.</span> <span m='2802250'>That's</span> <span
  m='2802470'>not</span> <span m='2802670'>so</span> <span
  m='2802830'>hot,</span> <span m='2804140'>because</span> <span
  m='2804340'>I</span> <span m='2804620'>know</span> <span
  m='2804810'>how</span> <span m='2804910'>to</span> <span m='2805020'>do</span>
  <span m='2805160'>exponential</span> <span m='2805860'>in</span> <span
  m='2806050'>k.</span> <span m='2807794'>All right.</span> <span
  m='2808690'>But</span> <span m='2809360'>this</span> <span
  m='2809520'>is</span> <span m='2809620'>the</span> <span
  m='2809730'>general</span> <span m='2810070'>idea</span> <span m='2810350'>of
  kernelization,</span> <span m='2811090'>and</span> <span
  m='2811220'>why</span> <span m='2812230'>it's</span> <span
  m='2812410'>not</span> <span m='2812570'>surprising</span> <span
  m='2813090'>that</span> <span m='2813200'>you</span> <span
  m='2813310'>can</span> <span m='2813450'>do</span> <span
  m='2813600'>it.</span> </p><p><span m='2814750'>I</span> <span
  m='2814880'>have</span> <span m='2815030'>one</span> <span
  m='2815250'>catch</span> <span m='2815600'>here</span> <span
  m='2815840'>which</span> <span m='2816060'>is--</span> <span
  m='2816720'>this</span> <span m='2816910'>is</span> <span
  m='2817020'>an</span> <span m='2817120'>algorithm.</span> <span
  m='2817660'>It</span> <span m='2817840'>compares</span> <span m='2818400'>n
  to</span> <span m='2818830'>f</span> <span m='2819010'>of</span> <span
  m='2819140'>k.</span> <span m='2819840'>In</span> <span
  m='2820010'>order</span> <span m='2820200'>to</span> <span
  m='2820360'>do</span> <span m='2820520'>this,</span> <span
  m='2821240'>you</span> <span m='2821340'>have</span> <span
  m='2821490'>to</span> <span m='2821610'>know</span> <span
  m='2821930'>what</span> <span m='2822180'>k</span> <span
  m='2822470'>is.</span> <span m='2824250'>Minor</span> <span
  m='2824530'>technicality.</span> <span m='2826120'>If</span> <span
  m='2826270'>you</span> <span m='2826340'>don't</span> <span
  m='2826680'>know</span> <span m='2826810'>what</span> <span
  m='2826950'>k</span> <span m='2827210'>is,</span> <span m='2827980'>you</span>
  <span m='2828180'>can</span> <span m='2828510'>basically</span> <span
  m='2830510'>run</span> <span m='2830750'>this</span> <span
  m='2830920'>algorithm</span> <span m='2831870'>with</span> <span
  m='2832070'>a</span> <span m='2832120'>timer,</span> <span
  m='2832940'>a</span> <span m='2833040'>stopwatch,</span> <span
  m='2834040'>and</span> <span m='2834280'>if</span> <span
  m='2834460'>it's</span> <span m='2834600'>running</span> <span
  m='2834880'>time</span> <span m='2835470'>exceeds</span> <span
  m='2836050'>n</span> <span m='2836240'>to</span> <span m='2836320'>the</span>
  <span m='2836410'>c plus</span> <span m='2836850'>1,</span> <span
  m='2837430'>then</span> <span m='2837570'>you know</span> <span
  m='2838055'>you're</span> <span m='2838540'>not</span> <span
  m='2838790'>in</span> <span m='2838880'>this</span> <span
  m='2839050'>case.</span> <span m='2839610'>If</span> <span
  m='2839740'>it</span> <span m='2839850'>finishes</span> <span
  m='2840450'>within</span> <span m='2840710'>that</span> <span
  m='2840910'>time</span> <span m='2841110'>bound,</span> <span
  m='2841690'>great.</span> <span m='2841970'>You</span> <span
  m='2842060'>found</span> <span m='2842270'>the</span> <span
  m='2842360'>answer.</span> <span m='2843080'>If it</span> <span
  m='2843130'>doesn't</span> <span m='2843430'>finish,</span> <span
  m='2844420'>then</span> <span m='2844610'>you know you</span> <span
  m='2844960'>must</span> <span m='2845150'>be</span> <span
  m='2845230'>in</span> <span m='2845310'>this</span> <span
  m='2845470'>case,</span> <span m='2845720'>and</span> <span
  m='2845800'>then</span> <span m='2845920'>you</span> <span
  m='2846010'>just</span> <span m='2846360'>quit,</span> <span
  m='2846710'>and</span> <span m='2846870'>output</span> <span
  m='2847220'>your</span> <span m='2847380'>original</span> <span
  m='2847720'>input</span> <span m='2848050'>and say,</span> <span
  m='2848500'>I'm kernelized.</span> <span m='2848970'>Done.</span> <span
  m='2849750'>Easy.</span> <span m='2850894'>OK.</span> <span m='2851770'>That's
  a</span> <span m='2851870'>technicality.</span> <span m='2857270'>All</span>
  <span m='2857410'>right.</span> </p><p><span m='2859560'>So</span> <span
  m='2859770'>much</span> <span m='2860040'>for</span> <span
  m='2860340'>general</span> <span m='2860670'>theory.</span> <span
  m='2861300'>Let's</span> <span m='2861540'>go</span> <span
  m='2861650'>back</span> <span m='2861850'>to</span> <span
  m='2861940'>algorithms.</span> <span m='2867380'>Yeah, all</span> <span
  m='2867700'>this</span> <span m='2868480'>work</span> <span
  m='2868820'>I</span> <span m='2868990'>want</span> <span m='2869360'>to</span>
  <span m='2869520'>write</span> <span m='2869750'>down</span> <span
  m='2869970'>over</span> <span m='2870150'>here.</span> <span
  m='2870450'>We</span> <span m='2870540'>have</span> <span m='2870760'>a</span>
  <span m='2870890'>v</span> <span m='2871318'>times</span> <span
  m='2873030'>2</span> <span m='2873260'>to</span> <span m='2873330'>the</span>
  <span m='2873440'>k</span> <span m='2873800'>algorithm.</span> <span
  m='2876900'>On</span> <span m='2877000'>the</span> <span
  m='2877070'>one</span> <span m='2877250'>side.</span> <span
  m='2877750'>And</span> <span m='2879260'>here,</span> <span
  m='2880620'>we</span> <span m='2880760'>have</span> <span
  m='2881230'>an</span> <span m='2881360'>E</span> <span m='2882160'>as</span>
  <span m='2882505'>v</span> <span m='2882850'>to</span> <span
  m='2883030'>the</span> <span m='2883140'>k</span> <span
  m='2883300'>algorithm.</span> <span m='2886150'>Just</span> <span
  m='2886300'>want</span> <span m='2886440'>to</span> <span
  m='2886990'>keep</span> <span m='2887200'>a</span> <span
  m='2887370'>running--</span> <span m='2887930'>we're</span> <span
  m='2888060'>going</span> <span m='2888170'>to</span> <span
  m='2888220'>get</span> <span m='2888340'>a</span> <span
  m='2888380'>faster</span> <span m='2888770'>algorithm</span> <span
  m='2889140'>than</span> <span m='2889230'>both</span> <span
  m='2889510'>of</span> <span m='2889590'>those</span> <span
  m='2889940'>through</span> <span m='2890140'>kernelization.</span> <span
  m='2893230'>So</span> <span m='2893710'>I</span> <span
  m='2893830'>claim</span> <span m='2895890'>that</span> <span
  m='2896170'>we</span> <span m='2896390'>can</span> <span
  m='2896550'>find</span> <span m='2896920'>a</span> <span
  m='2897040'>polynomial</span> <span m='2897930'>kernel--</span> <span
  m='2898430'>polynomial-sized</span> <span m='2899210'>kernel--</span> <span
  m='2899580'>it's going</span> <span m='2899700'>to</span> <span
  m='2899760'>be</span> <span m='2899970'>quadratic</span> <span
  m='2901880'>for</span> <span m='2902160'>vertex</span> <span
  m='2902570'>cover.</span> </p><p><span m='2924270'>These</span> <span
  m='2924490'>are</span> <span m='2924560'>hard</span> <span
  m='2924790'>to</span> <span m='2924850'>find.</span> <span
  m='2925960'>And</span> <span m='2926060'>there's</span> <span
  m='2926200'>a</span> <span m='2926270'>whole</span> <span
  m='2926640'>research</span> <span m='2927030'>industry</span> <span
  m='2927440'>for</span> <span m='2927590'>finding</span> <span
  m='2927910'>polynomial</span> <span m='2928430'>kernels.</span> <span
  m='2930650'>So</span> <span m='2930890'>I'm</span> <span
  m='2931710'>going</span> <span m='2931840'>to</span> <span
  m='2931900'>give</span> <span m='2932090'>you</span> <span
  m='2932240'>some</span> <span m='2935810'>methods.</span> <span
  m='2936850'>But</span> <span m='2937210'>they're</span> <span
  m='2937630'>specific</span> <span m='2938210'>to</span> <span
  m='2938310'>vertex</span> <span m='2938710'>cover.</span> <span
  m='2942700'>So</span> <span m='2942920'>here's</span> <span
  m='2943170'>the</span> <span m='2943250'>first</span> <span
  m='2943530'>thing.</span> <span m='2943970'>This</span> <span
  m='2944110'>is</span> <span m='2944250'>hard</span> <span
  m='2944530'>to</span> <span m='2944620'>draw.</span> <span
  m='2945740'>So</span> <span m='2945760'>here</span> <span m='2945950'>I</span>
  <span m='2945980'>have</span> <span m='2946110'>a</span> <span
  m='2946150'>vertex</span> <span m='2947000'>u,</span> <span
  m='2947870'>and</span> <span m='2948040'>suppose</span> <span
  m='2948360'>I</span> <span m='2948430'>have</span> <span m='2948590'>an</span>
  <span m='2948710'>edge</span> <span m='2949470'>connected</span> <span
  m='2950420'>from</span> <span m='2950650'>u</span> <span m='2950830'>to</span>
  <span m='2950890'>u.  This</span> <span m='2951240'>is</span> <span
  m='2951330'>called</span> <span m='2951500'>a</span> <span
  m='2951560'>loop.</span> <span m='2953190'>What</span> <span
  m='2953380'>can</span> <span m='2953520'>I</span> <span m='2953610'>do</span>
  <span m='2953930'>from</span> <span m='2954270'>a</span> <span
  m='2955090'>vertex</span> <span m='2955450'>cover</span> <span
  m='2955720'>perspective?</span> <span m='2957810'>What</span> <span
  m='2957950'>can</span> <span m='2958080'>I</span> <span
  m='2958140'>conclude</span> <span m='2958880'>about</span> <span
  m='2959100'>this</span> <span m='2959250'>picture?</span> <span
  m='2961955'>Yeah.</span> </p><p><span m='2962418'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='2965200'>ERIK DEMAINE: Right.</span> <span
  m='2965320'>You</span> <span m='2965600'>must</span> <span
  m='2966010'>be</span> <span m='2966280'>in</span> <span m='2966360'>the</span>
  <span m='2966440'>vertex</span> <span m='2966840'>cover,</span> <span
  m='2967960'>because</span> <span m='2968100'>this</span> <span
  m='2968250'>edge</span> <span m='2968490'>really</span> <span
  m='2968740'>only</span> <span m='2968900'>has</span> <span
  m='2969070'>one</span> <span m='2969290'>endpoint.</span> <span
  m='2969880'>OK.</span> <span m='2970270'>So</span> <span
  m='2970530'>far,</span> <span m='2971180'>so</span> <span
  m='2971360'>easy.</span> <span m='2972020'>So</span> <span
  m='2973850'>what</span> <span m='2974070'>I</span> <span
  m='2974150'>can</span> <span m='2974320'>do</span> <span m='2974580'>in</span>
  <span m='2974660'>this</span> <span m='2974830'>case</span> <span
  m='2975140'>is</span> <span m='2975230'>say,</span> <span
  m='2975450'>OK,</span> <span m='2976060'>u is in</span> <span
  m='2976530'>the</span> <span m='2976610'>vertex</span> <span
  m='2976990'>cover,</span> <span m='2978200'>and</span> <span
  m='2978410'>then</span> <span m='2979720'>delete</span> <span
  m='2980050'>u</span> <span m='2984130'>at</span> <span m='2984310'>it's</span>
  <span m='2984430'>incident</span> <span m='2984790'>edges.</span> <span
  m='2991136'>So--</span> <span m='2992110'>and</span> <span
  m='2992290'>then</span> <span m='2992450'>we</span> <span
  m='2992560'>have</span> <span m='2992710'>to</span> <span
  m='2992810'>decrement</span> <span m='2993310'>k.</span> <span
  m='2997720'>OK.</span> <span m='2998210'>Cool.</span> <span
  m='2999100'>Seems--</span> <span m='2999870'>feels</span> <span
  m='3000130'>familiar.</span> </p><p><span m='3001310'>But</span> <span
  m='3001480'>in</span> <span m='3001550'>this</span> <span
  m='3001710'>case,</span> <span m='3002240'>there's</span> <span
  m='3002480'>no</span> <span m='3002670'>guessing.</span> <span
  m='3003500'>We</span> <span m='3003610'>just</span> <span
  m='3003810'>know</span> <span m='3004120'>you</span> <span
  m='3004390'>must</span> <span m='3004630'>be</span> <span
  m='3004730'>in</span> <span m='3004810'>the</span> <span
  m='3004900'>cover.</span> <span m='3005860'>All right.</span> <span
  m='3006640'>Here's</span> <span m='3006870'>another</span> <span
  m='3007120'>case.</span> <span m='3007530'>Suppose</span> <span
  m='3008120'>I</span> <span m='3008250'>have</span> <span m='3009140'>u</span>
  <span m='3009820'>and</span> <span m='3009970'>v</span> <span
  m='3010640'>and</span> <span m='3011050'>there</span> <span
  m='3011210'>are</span> <span m='3011240'>many</span> <span
  m='3011660'>edges</span> <span m='3012020'>connecting</span> <span
  m='3012440'>them.</span> <span m='3012710'>This</span> <span
  m='3012800'>is</span> <span m='3012960'>called</span> <span
  m='3013190'>a</span> <span m='3013220'>multi-edge.</span> <span
  m='3016170'>So</span> <span m='3016530'>maybe</span> <span
  m='3016780'>you</span> <span m='3016860'>just</span> <span
  m='3017060'>assume</span> <span m='3017380'>your</span> <span
  m='3017540'>graph</span> <span m='3017780'>is</span> <span
  m='3017840'>simple.</span> <span m='3018390'>But</span> <span
  m='3018550'>if</span> <span m='3018640'>you</span> <span
  m='3018710'>don't</span> <span m='3018880'>assume</span> <span
  m='3019090'>your</span> <span m='3019220'>graph</span> <span
  m='3019440'>is</span> <span m='3019500'>simple,</span> <span
  m='3020610'>we</span> <span m='3020840'>might</span> <span
  m='3021020'>have</span> <span m='3021720'>these</span> <span
  m='3021860'>kinds</span> <span m='3022130'>of</span> <span
  m='3022370'>situations.</span> <span m='3025200'>What</span> <span
  m='3025370'>can</span> <span m='3025460'>I</span> <span m='3025530'>do</span>
  <span m='3025650'>in</span> <span m='3025720'>this</span> <span
  m='3025890'>case?</span> <span m='3027250'>What can</span> <span
  m='3027300'>I</span> <span m='3027510'>guarantee?</span> <span
  m='3028665'>Yeah.</span> </p><p><span m='3029575'>AUDIENCE: You can remove all
  but one edge.</span> </p><p><span m='3030940'>ERIK DEMAINE: You can</span>
  <span m='3031120'>remove</span> <span m='3031410'>all</span> <span
  m='3031700'>but</span> <span m='3031820'>one</span> <span
  m='3031990'>of</span> <span m='3032030'>the</span> <span
  m='3032150'>edges.</span> <span m='3032520'>Let's</span> <span
  m='3032710'>just</span> <span m='3033340'>delete</span> <span
  m='3034770'>all</span> <span m='3034930'>but</span> <span
  m='3035090'>one.</span> <span m='3035400'>If</span> <span m='3035540'>I</span>
  <span m='3035610'>cover</span> <span m='3036060'>one</span> <span
  m='3036280'>of</span> <span m='3036350'>them,</span> <span
  m='3036560'>I</span> <span m='3036630'>cover</span> <span
  m='3036920'>them</span> <span m='3037080'>all.</span> <span
  m='3038120'>Easy</span> <span m='3038470'>peasy.</span> <span m='3041580'>See
  if</span> <span m='3041730'>you</span> <span m='3041930'>get</span> <span
  m='3042130'>the</span> <span m='3042240'>other</span> <span
  m='3042720'>rules.</span> <span m='3045290'>So</span> <span m='3046130'>delete
  all by</span> <span m='3046390'>1.</span> <span m='3051540'>In</span> <span
  m='3051640'>general,</span> <span m='3052130'>we're</span> <span
  m='3052170'>going</span> <span m='3052290'>to</span> <span
  m='3052340'>have</span> <span m='3052550'>a</span> <span
  m='3052610'>bunch</span> <span m='3052950'>of</span> <span
  m='3053050'>these</span> <span m='3053260'>kinds</span> <span
  m='3053480'>of</span> <span m='3053550'>simplification</span> <span
  m='3054280'>rules</span> <span m='3054590'>are</span> <span
  m='3054660'>guaranteed</span> <span m='3055410'>correct.</span> <span
  m='3055820'>They</span> <span m='3055940'>don't</span> <span
  m='3056680'>change</span> <span m='3057140'>the</span> <span
  m='3057340'>output.</span> <span m='3058500'>But</span> <span
  m='3058960'>magically,</span> <span m='3059550'>we're</span> <span
  m='3059670'>going</span> <span m='3059780'>to</span> <span
  m='3059820'>end</span> <span m='3060020'>up</span> <span
  m='3060150'>with</span> <span m='3060210'>something</span> <span
  m='3060600'>the</span> <span m='3060660'>size</span> <span
  m='3061020'>of</span> <span m='3061420'>function</span> <span
  m='3061690'>of</span> <span m='3061780'>k.</span> <span m='3061970'>We</span>
  <span m='3062080'>haven't</span> <span m='3062290'>done</span> <span
  m='3062480'>much</span> <span m='3062720'>yet.</span> <span
  m='3063250'>But</span> <span m='3063510'>now</span> <span
  m='3064000'>we</span> <span m='3064150'>know</span> <span m='3064320'>that
  the</span> <span m='3064540'>graph</span> <span m='3064850'>is</span> <span
  m='3064980'>simple,</span> <span m='3065360'>meaning</span> <span
  m='3065630'>it has</span> <span m='3065870'>no</span> <span
  m='3065990'>loops</span> <span m='3066240'>and</span> <span
  m='3066310'>it</span> <span m='3066360'>has</span> <span m='3066550'>no</span>
  <span m='3066660'>multi-edges.</span> <span m='3068170'>Cool.</span> <span
  m='3070020'>All right.</span> </p><p><span m='3070440'>Next</span> <span
  m='3070660'>thing</span> <span m='3070830'>I</span> <span
  m='3070860'>want</span> <span m='3071040'>to</span> <span
  m='3071090'>think</span> <span m='3071280'>about</span> <span
  m='3073070'>is</span> <span m='3081060'>a</span> <span
  m='3081180'>vertex</span> <span m='3082170'>of</span> <span
  m='3082390'>degree</span> <span m='3085180'>greater</span> <span
  m='3085520'>than</span> <span m='3085760'>k.</span> <span m='3086035'>k</span>
  <span m='3086310'>is</span> <span m='3086440'>the</span> <span
  m='3086550'>current</span> <span m='3086890'>value</span> <span
  m='3087230'>of</span> <span m='3087310'>k.</span> <span m='3087610'>So</span>
  <span m='3087780'>suppose</span> <span m='3088190'>I</span> <span
  m='3088270'>have</span> <span m='3088520'>a</span> <span
  m='3088560'>high</span> <span m='3088920'>degree</span> <span
  m='3089280'>vertex,</span> <span m='3090590'>more</span> <span
  m='3091000'>than</span> <span m='3091220'>k,</span> <span
  m='3093830'>edges</span> <span m='3094810'>out</span> <span
  m='3095030'>going</span> <span m='3095300'>from</span> <span
  m='3095530'>it.</span> <span m='3100540'>What</span> <span
  m='3100580'>can</span> <span m='3100680'>I</span> <span m='3100750'>say</span>
  <span m='3100930'>then?</span> <span m='3105552'>Yeah.</span> </p><p><span
  m='3106030'>AUDIENCE:</span> <span m='3106269'>You must pick it.</span>
  </p><p><span m='3107950'>ERIK DEMAINE: You</span> <span
  m='3108100'>must</span> <span m='3108510'>put</span> <span m='3108670'>it
  in</span> <span m='3108880'>the</span> <span m='3108970'>cover.</span> <span
  m='3111480'>Why?</span> </p><p><span m='3114155'>AUDIENCE: Because</span>
  <span m='3114640'>then</span> <span m='3114693'>you</span> <span
  m='3114747'>need</span> <span m='3114801'>to</span> <span
  m='3114855'>cover</span> <span m='3114909'>all</span> <span
  m='3114963'>the</span> <span m='3115017'>remaining</span> <span
  m='3115071'>error</span> <span m='3115125'>vertices.</span> </p><p><span
  m='3119010'>ERIK DEMAINE: Right.</span> <span m='3119710'>Proof</span> <span
  m='3119910'>by</span> <span m='3120000'>contradiction.</span> <span
  m='3120540'>If</span> <span m='3120710'>I</span> <span
  m='3120780'>don't</span> <span m='3121090'>put</span> <span
  m='3121230'>it</span> <span m='3121320'>in</span> <span m='3121380'>the</span>
  <span m='3121470'>cover,</span> <span m='3122190'>that</span> <span
  m='3122350'>means</span> <span m='3122560'>all</span> <span
  m='3122980'>of</span> <span m='3123070'>these</span> <span
  m='3123290'>guys</span> <span m='3123510'>are</span> <span
  m='3123570'>in</span> <span m='3123640'>the</span> <span
  m='3123720'>cover.</span> <span m='3124420'>There's</span> <span
  m='3124600'>more</span> <span m='3124810'>than</span> <span
  m='3124970'>k</span> <span m='3125250'>of</span> <span
  m='3125350'>them.</span> <span m='3126170'>And</span> <span
  m='3126340'>the</span> <span m='3126410'>whole</span> <span
  m='3126790'>goal</span> <span m='3127560'>was</span> <span
  m='3127740'>to</span> <span m='3127840'>find</span> <span m='3128910'>a</span>
  <span m='3128990'>vertex</span> <span m='3129350'>cover of</span> <span
  m='3129620'>size</span> <span m='3129870'>at</span> <span
  m='3129990'>most</span> <span m='3130350'>k.</span> <span
  m='3133370'>So</span> <span m='3134130'>you</span> <span
  m='3134250'>better</span> <span m='3134570'>not</span> <span
  m='3134780'>put</span> <span m='3134960'>all</span> <span
  m='3135150'>of</span> <span m='3135220'>these</span> <span
  m='3135420'>in</span> <span m='3135520'>your</span> <span
  m='3135630'>vertex</span> <span m='3136000'>cover,</span> <span
  m='3136220'>because</span> <span m='3136370'>that's</span> <span
  m='3136540'>more</span> <span m='3136710'>than</span> <span
  m='3136860'>k.</span> <span m='3137090'>So,</span> <span
  m='3137530'>therefore,</span> <span m='3137810'>this</span> <span
  m='3138010'>one</span> <span m='3138180'>has</span> <span
  m='3138540'>to</span> <span m='3138640'>be</span> <span m='3138820'>in</span>
  <span m='3138960'>there.</span> <span m='3140140'>This</span> <span
  m='3140230'>is</span> <span m='3140370'>a</span> <span m='3140470'>cool</span>
  <span m='3140730'>argument.</span> <span m='3141720'>Simple,</span> <span
  m='3142100'>but</span> <span m='3142230'>cool.</span> <span
  m='3144468'>OK.</span> </p><p><span m='3144940'>So</span> <span
  m='3145120'>any</span> <span m='3145370'>vertex</span> <span
  m='3145800'>of</span> <span m='3145840'>degree</span> <span
  m='3146580'>greater</span> <span m='3146770'>than</span> <span
  m='3146890'>k</span> <span m='3147620'>must</span> <span m='3148070'>be</span>
  <span m='3149340'>in</span> <span m='3149520'>the</span> <span
  m='3149610'>vertex</span> <span m='3150040'>cover,</span> <span
  m='3150330'>which</span> <span m='3150500'>I</span> <span
  m='3150530'>was</span> <span m='3150650'>calling</span> <span
  m='3150960'>S.</span> <span m='3153320'>OK.</span> <span m='3153560'>So</span>
  <span m='3154080'>delete</span> <span m='3154390'>that</span> <span
  m='3154550'>vertex</span> <span m='3155000'>and</span> <span m='3155410'>its
  incident</span> <span m='3155570'>edges,</span> <span
  m='3156230'>decrement</span> <span m='3158540'>k,</span> <span
  m='3159240'>because</span> <span m='3159520'>we</span> <span
  m='3159630'>just</span> <span m='3159950'>used</span> <span
  m='3160190'>something.</span> <span m='3162530'>OK.</span> <span
  m='3162790'>So</span> <span m='3163000'>just</span> <span
  m='3163390'>keep</span> <span m='3163600'>doing</span> <span
  m='3163870'>this.</span> <span m='3164170'>Every</span> <span
  m='3164460'>time</span> <span m='3164730'>I</span> <span
  m='3164790'>see</span> <span m='3164990'>a</span> <span
  m='3165030'>vertex</span> <span m='3165450'>of</span> <span
  m='3165530'>degree</span> <span m='3165770'>more</span> <span
  m='3165930'>than</span> <span m='3166070'>k,</span> <span
  m='3166680'>delete</span> <span m='3167050'>it,</span> <span
  m='3167540'>decrement</span> <span m='3167980'>k.</span> <span
  m='3169100'>Now</span> <span m='3169260'>I</span> <span
  m='3169350'>have</span> <span m='3169530'>a</span> <span
  m='3169590'>new</span> <span m='3169790'>graph</span> <span
  m='3170130'>and</span> <span m='3170220'>a</span> <span m='3170290'>new</span>
  <span m='3170440'>value</span> <span m='3170730'>of</span> <span
  m='3170820'>k.</span> <span m='3171320'>Look</span> <span
  m='3171520'>for</span> <span m='3171680'>any</span> <span
  m='3171880'>vertices</span> <span m='3172880'>whose</span> <span
  m='3173050'>degree</span> <span m='3173290'>is</span> <span
  m='3173380'>more</span> <span m='3173550'>than</span> <span
  m='3173680'>k.</span> <span m='3174660'>If</span> <span m='3174790'>I</span>
  <span m='3174840'>find</span> <span m='3175140'>one,</span> <span
  m='3175580'>delete</span> <span m='3175870'>it,</span> <span
  m='3176220'>repeat,</span> <span m='3176600'>repeat.</span> <span
  m='3177200'>Keep</span> <span m='3177440'>repeating</span> <span
  m='3177930'>until</span> <span m='3178200'>you</span> <span
  m='3178290'>can't</span> <span m='3178550'>anymore.</span> </p><p><span
  m='3178980'>How</span> <span m='3179540'>much</span> <span
  m='3179760'>time</span> <span m='3179920'>is</span> <span
  m='3180040'>this</span> <span m='3180150'>going</span> <span
  m='3180250'>to</span> <span m='3180320'>take?</span> <span m='3180680'>I don't
  know.</span> <span m='3181320'>Most</span> <span m='3181730'>quadratic,</span>
  <span m='3182310'>right?</span> <span m='3182460'>I</span> <span
  m='3182490'>look</span> <span m='3182690'>at</span> <span
  m='3182750'>all</span> <span m='3183060'>the</span> <span
  m='3183110'>vertices.</span> <span m='3184730'>Look</span> <span
  m='3184970'>at</span> <span m='3185030'>their</span> <span
  m='3185170'>degrees.</span> <span m='3186760'>I</span> <span
  m='3186830'>could</span> <span m='3186970'>look</span> <span
  m='3187130'>over</span> <span m='3187340'>all</span> <span
  m='3187440'>the</span> <span m='3187570'>edges,</span> <span
  m='3187870'>increment</span> <span m='3188240'>the</span> <span
  m='3188340'>degrees.</span> <span m='3189630'>In</span> <span
  m='3189770'>linear</span> <span m='3190060'>time,</span> <span
  m='3190440'>I</span> <span m='3190550'>can</span> <span
  m='3190650'>find</span> <span m='3191040'>whether</span> <span
  m='3191250'>there's</span> <span m='3191440'>any</span> <span
  m='3191820'>vertex</span> <span m='3192300'>of</span> <span
  m='3192690'>degree</span> <span m='3192900'>more</span> <span
  m='3193070'>than</span> <span m='3193210'>k.</span> <span
  m='3194000'>Then</span> <span m='3194220'>delete</span> <span m='3194500'>it
  in</span> <span m='3194670'>linear</span> <span m='3194930'>time.</span> <span
  m='3195910'>Then</span> <span m='3196090'>try</span> <span
  m='3196310'>again.</span> <span m='3197270'>And</span> <span
  m='3197550'>this</span> <span m='3197690'>will</span> <span
  m='3197770'>happen</span> <span m='3198020'>to</span> <span
  m='3198080'>most</span> <span m='3198290'>linear</span> <span
  m='3198530'>time</span> <span m='3198980'>many</span> <span
  m='3199250'>times</span> <span m='3199610'>because</span> <span
  m='3200000'>I</span> <span m='3200060'>can</span> <span
  m='3200210'>only</span> <span m='3200390'>delete</span> <span
  m='3200640'>a</span> <span m='3200670'>vertex</span> <span
  m='3201060'>once.</span> <span m='3201380'>So</span> <span m='3202100'>I
  delete</span> <span m='3202360'>at</span> <span m='3202430'>most</span> <span
  m='3202770'>v</span> <span m='3203020'>vertices.</span> <span
  m='3203690'>So</span> <span m='3204120'>overall</span> <span
  m='3204420'>running</span> <span m='3204650'>time</span> <span
  m='3204860'>here</span> <span m='3205010'>is</span> <span
  m='3205090'>like</span> <span m='3205260'>at</span> <span
  m='3205340'>most</span> <span m='3207140'>v</span> <span
  m='3207390'>times</span> <span m='3207680'>E,</span> <span
  m='3209290'>polynomial.</span> </p><p><span m='3218220'>Probably</span> <span
  m='3218990'>if</span> <span m='3219120'>you're</span> <span
  m='3219260'>clever,</span> <span m='3219650'>use</span> <span
  m='3219850'>a</span> <span m='3219930'>data</span> <span
  m='3220140'>structure</span> <span m='3220530'>to</span> <span
  m='3221040'>update</span> <span m='3221380'>degrees.</span> <span
  m='3222410'>You</span> <span m='3222560'>could</span> <span
  m='3222670'>do</span> <span m='3222770'>this</span> <span
  m='3223000'>in</span> <span m='3223250'>order</span> <span
  m='3223500'>v</span> <span m='3223740'>time.</span> <span
  m='3224510'>But</span> <span m='3225230'>let's</span> <span
  m='3225480'>not</span> <span m='3226450'>be</span> <span
  m='3226560'>clever</span> <span m='3226870'>yet.</span> <span
  m='3228810'>All</span> <span m='3229120'>right.</span> <span
  m='3229900'>So</span> <span m='3230330'>now,</span> <span
  m='3231270'>after</span> <span m='3231620'>I've</span> <span
  m='3231780'>done</span> <span m='3232050'>all</span> <span
  m='3232220'>of</span> <span m='3232300'>these</span> <span
  m='3232470'>reductions,</span> <span m='3235180'>I</span> <span
  m='3235310'>have</span> <span m='3235560'>a</span> <span
  m='3235630'>graph</span> <span m='3236200'>where</span> <span
  m='3236460'>every</span> <span m='3236760'>vertex</span> <span
  m='3237330'>has</span> <span m='3237650'>degree</span> <span
  m='3238080'>at</span> <span m='3238240'>most</span> <span
  m='3238810'>k.</span> <span m='3240360'>So</span> <span
  m='3240480'>it's</span> <span m='3240610'>like</span> <span
  m='3240780'>a</span> <span m='3240850'>bounded</span> <span
  m='3241290'>degree</span> <span m='3241580'>graph.</span> </p><p><span
  m='3283580'>Why</span> <span m='3283790'>do</span> <span m='3283860'>I</span>
  <span m='3283930'>care</span> <span m='3284140'>about</span> <span
  m='3284300'>a</span> <span m='3284350'>bounded</span> <span
  m='3284730'>degree</span> <span m='3285000'>graph?</span> <span
  m='3285950'>Remember,</span> <span m='3287000'>I</span> <span
  m='3287140'>drew</span> <span m='3287290'>this</span> <span
  m='3287440'>example,</span> <span m='3287840'>which</span> <span
  m='3287980'>was</span> <span m='3288120'>a</span> <span
  m='3288190'>star</span> <span m='3288630'>graph,</span> <span
  m='3289480'>where</span> <span m='3289800'>n</span> <span
  m='3290090'>was</span> <span m='3290660'>large,</span> <span
  m='3291190'>but</span> <span m='3291290'>k</span> <span m='3291590'>was</span>
  <span m='3291780'>very</span> <span m='3291960'>small.</span> <span
  m='3292300'>n</span> <span m='3292500'>was</span> <span m='3292760'>n,</span>
  <span m='3293140'>n</span> <span m='3293330'>was</span> <span
  m='3293490'>v,</span> <span m='3294130'>and</span> <span m='3295200'>k</span>
  <span m='3295540'>was</span> <span m='3295760'>1.</span> <span m='3297870'>Now
  a</span> <span m='3298040'>star</span> <span m='3298340'>graph</span> <span
  m='3298600'>is</span> <span m='3298700'>special</span> <span
  m='3299060'>because</span> <span m='3299400'>it</span> <span
  m='3299490'>has</span> <span m='3299780'>a</span> <span
  m='3299820'>very</span> <span m='3300310'>high</span> <span
  m='3300640'>degree</span> <span m='3301400'>vertex.</span> <span
  m='3301790'>In</span> <span m='3301890'>general,</span> <span
  m='3302820'>if</span> <span m='3302870'>I</span> <span m='3302910'>have</span>
  <span m='3303010'>a</span> <span m='3303060'>vertex</span> <span
  m='3303480'>of</span> <span m='3303570'>some</span> <span
  m='3303910'>degree,</span> <span m='3304400'>say</span> <span
  m='3304640'>k,</span> <span m='3306220'>and</span> <span m='3306360'>I</span>
  <span m='3306450'>put</span> <span m='3306760'>it</span> <span
  m='3306900'>in</span> <span m='3307060'>the</span> <span
  m='3307150'>vertex</span> <span m='3307560'>cover,</span> <span
  m='3308630'>it</span> <span m='3308820'>covers</span> <span
  m='3310090'>k</span> <span m='3310590'>edges.</span> <span
  m='3312662'>OK.</span> <span m='3313650'>So</span> <span
  m='3315990'>each</span> <span m='3317000'>vertex</span> <span
  m='3317740'>in</span> <span m='3318020'>S</span> <span
  m='3320760'>covers</span> <span m='3322210'>at</span> <span
  m='3322640'>most</span> <span m='3323130'>k edges,</span> <span
  m='3324654'>wherever</span> <span m='3325061'>the</span> <span
  m='3325470'>degree</span> <span m='3325800'>is.</span> <span
  m='3327560'>So</span> <span m='3327710'>that</span> <span
  m='3327860'>means</span> <span m='3328020'>you</span> <span
  m='3328150'>don't</span> <span m='3328440'>get</span> <span
  m='3328600'>much</span> <span m='3328860'>bang</span> <span
  m='3329170'>for</span> <span m='3329270'>your</span> <span
  m='3329400'>buck</span> <span m='3329640'>anymore.</span> </p><p><span
  m='3330290'>We've</span> <span m='3330380'>already</span> <span
  m='3330690'>taken</span> <span m='3331090'>care</span> <span
  m='3331420'>of</span> <span m='3331500'>all</span> <span
  m='3331620'>the</span> <span m='3331690'>high</span> <span
  m='3331910'>degree</span> <span m='3332170'>vertices</span> <span
  m='3332600'>where</span> <span m='3332710'>you</span> <span
  m='3332810'>get</span> <span m='3332980'>a</span> <span m='3333040'>lot</span>
  <span m='3333370'>of</span> <span m='3333460'>reward</span> <span
  m='3334260'>for</span> <span m='3334380'>putting</span> <span
  m='3334650'>one</span> <span m='3334830'>vertex</span> <span
  m='3335310'>in</span> <span m='3335440'>the</span> <span
  m='3335520'>cover.</span> <span m='3336350'>Now</span> <span
  m='3337720'>this</span> <span m='3337880'>is</span> <span
  m='3337970'>the</span> <span m='3338090'>new</span> <span
  m='3338320'>value</span> <span m='3338670'>of</span> <span
  m='3338750'>k.</span> <span m='3339150'>It</span> <span m='3339350'>may</span>
  <span m='3339500'>have</span> <span m='3339590'>decremented</span> <span
  m='3340150'>from</span> <span m='3340350'>before.</span> <span
  m='3342040'>Every</span> <span m='3342330'>vertex</span> <span
  m='3342840'>that</span> <span m='3342990'>we</span> <span
  m='3343710'>could</span> <span m='3343960'>possibly</span> <span
  m='3344470'>put</span> <span m='3344700'>in</span> <span
  m='3344800'>the</span> <span m='3344890'>set</span> <span
  m='3345400'>will</span> <span m='3345560'>only</span> <span
  m='3345860'>cover</span> <span m='3346490'>k</span> <span
  m='3346720'>edges.</span> <span m='3347180'>Now</span> <span
  m='3347750'>we</span> <span m='3347910'>know</span> <span
  m='3348140'>that</span> <span m='3348270'>we</span> <span
  m='3348500'>only</span> <span m='3348860'>get</span> <span
  m='3349200'>to</span> <span m='3349900'>put</span> <span m='3350280'>k</span>
  <span m='3350640'>more</span> <span m='3350910'>vertices</span> <span
  m='3351440'>into</span> <span m='3351700'>the</span> <span
  m='3351820'>set.</span> <span m='3353120'>We</span> <span
  m='3353300'>know--</span> <span m='3354300'>we're</span> <span
  m='3354490'>supposing</span> <span m='3355100'>that</span> <span
  m='3355260'>sides</span> <span m='3355580'>of</span> <span
  m='3355640'>S</span> <span m='3356300'>is</span> <span m='3356490'>at</span>
  <span m='3356570'>most</span> <span m='3356850'>k.</span> <span
  m='3359510'>So</span> <span m='3359710'>that</span> <span
  m='3359900'>means</span> <span m='3361670'>that</span> <span
  m='3363940'>the</span> <span m='3364060'>number</span> <span
  m='3364340'>of</span> <span m='3364410'>edges,</span> <span
  m='3365310'>size</span> <span m='3365570'>of</span> <span
  m='3365670'>E,</span> <span m='3366850'>must</span> <span
  m='3367120'>be</span> <span m='3367280'>at</span> <span
  m='3367330'>most</span> <span m='3368030'>k</span> <span
  m='3368380'>squared.</span> <span m='3369680'>All right.</span> <span
  m='3370500'>Because</span> <span m='3370740'>every</span> <span
  m='3370990'>one</span> <span m='3371140'>I</span> <span m='3371210'>put</span>
  <span m='3371370'>into</span> <span m='3371560'>S covers</span> <span
  m='3372220'>at</span> <span m='3372300'>most</span> <span m='3372540'>k</span>
  <span m='3372810'>edges.</span> <span m='3373230'>All</span> <span
  m='3373550'>of</span> <span m='3373620'>them</span> <span
  m='3373760'>have</span> <span m='3373930'>to</span> <span
  m='3374030'>be</span> <span m='3374170'>covered.</span> <span
  m='3375800'>And</span> <span m='3375940'>so</span> <span m='3377350'>k</span>
  <span m='3377620'>times</span> <span m='3377900'>k</span> <span
  m='3378120'>is</span> <span m='3378280'>k</span> <span
  m='3378410'>squared.</span> <span m='3379834'>Hah,</span> <span
  m='3380820'>interesting.</span> </p><p><span m='3382160'>That</span> <span
  m='3382330'>means</span> <span m='3382550'>my</span> <span
  m='3382700'>graph</span> <span m='3383000'>is</span> <span
  m='3383110'>small.</span> <span m='3383850'>Now</span> <span
  m='3384310'>slight</span> <span m='3384630'>catch.</span> <span
  m='3385230'>There</span> <span m='3385360'>might</span> <span
  m='3385560'>be</span> <span m='3385670'>a</span> <span
  m='3385700'>whole</span> <span m='3386090'>bunch</span> <span
  m='3386360'>of</span> <span m='3386430'>vertices</span> <span
  m='3386900'>that</span> <span m='3386980'>have</span> <span
  m='3387170'>no</span> <span m='3387510'>edges</span> <span
  m='3387860'>incident</span> <span m='3388240'>to</span> <span
  m='3388360'>them.</span> <span m='3389170'>So</span> <span
  m='3389550'>I</span> <span m='3389640'>need</span> <span m='3389860'>to</span>
  <span m='3390830'>delete</span> <span m='3391340'>isolated</span> <span
  m='3391910'>vertices.</span> <span m='3393971'>Let's say,</span> <span
  m='3394740'>degree</span> <span m='3395120'>0</span> <span
  m='3395500'>vertices.</span> <span m='3398675'>OK.</span> <span
  m='3399160'>Degree 0</span> <span m='3399680'>vertices--</span> <span
  m='3400290'>you</span> <span m='3400750'>really</span> <span
  m='3401000'>don't</span> <span m='3401220'>want</span> <span
  m='3401350'>to</span> <span m='3401420'>put</span> <span
  m='3401590'>those</span> <span m='3401800'>into</span> <span
  m='3401950'>your</span> <span m='3402050'>vertex</span> <span
  m='3402480'>cover.</span> <span m='3402770'>No</span> <span
  m='3402940'>point.</span> <span m='3403390'>They</span> <span
  m='3403480'>don't</span> <span m='3403630'>cover</span> <span
  m='3403900'>any</span> <span m='3404080'>edges.</span> <span
  m='3405060'>So</span> <span m='3405110'>delete</span> <span
  m='3405480'>those.</span> </p><p><span m='3406510'>And</span> <span
  m='3406690'>now,</span> <span m='3407130'>I</span> <span
  m='3407210'>still</span> <span m='3407410'>may</span> <span
  m='3407520'>not</span> <span m='3407730'>have</span> <span
  m='3407880'>a</span> <span m='3408500'>connected</span> <span
  m='3408950'>graph,</span> <span m='3409240'>but,</span> <span
  m='3409860'>in</span> <span m='3409980'>the</span> <span
  m='3410050'>worst</span> <span m='3410260'>case,</span> <span
  m='3410580'>I</span> <span m='3410690'>have</span> <span m='3411550'>a</span>
  <span m='3411620'>matching.</span> <span m='3413800'>I</span> <span
  m='3413970'>know</span> <span m='3414190'>the</span> <span
  m='3414420'>total</span> <span m='3414770'>number</span> <span
  m='3414990'>of</span> <span m='3415060'>edges</span> <span
  m='3415400'>is</span> <span m='3415520'>at</span> <span
  m='3415600'>most</span> <span m='3415830'>case</span> <span
  m='3416090'>squared.</span> <span m='3416670'>That</span> <span
  m='3416840'>means</span> <span m='3417120'>the</span> <span
  m='3417220'>total</span> <span m='3417490'>number of</span> <span
  m='3417740'>vertices</span> <span m='3420190'>is</span> <span
  m='3420390'>at</span> <span m='3420470'>most</span> <span
  m='3420740'>twice</span> <span m='3421050'>that,</span> <span
  m='3421420'>2k</span> <span m='3421790'>squared.</span> <span
  m='3423610'>So</span> <span m='3423930'>after</span> <span m='3424220'>all
  of</span> <span m='3424520'>these</span> <span m='3424710'>operations,</span>
  <span m='3425560'>I</span> <span m='3425650'>assumed</span> <span
  m='3426700'>that</span> <span m='3427090'>S</span> <span
  m='3427410'>was</span> <span m='3427770'>size</span> <span
  m='3428150'>at</span> <span m='3428210'>most</span> <span
  m='3428440'>k.</span> <span m='3430660'>And</span> <span
  m='3430760'>then</span> <span m='3430890'>if</span> <span m='3431000'>I</span>
  <span m='3431070'>do</span> <span m='3431280'>all of</span> <span
  m='3431490'>these</span> <span m='3431670'>operations,</span> <span
  m='3434200'>I</span> <span m='3434340'>get</span> <span m='3434630'>a</span>
  <span m='3434690'>graph</span> <span m='3435300'>with</span> <span
  m='3435520'>at</span> <span m='3435630'>most</span> <span
  m='3436230'>2k</span> <span m='3436620'>squared</span> <span
  m='3436900'>vertices,</span> <span m='3437180'>and</span> <span
  m='3437460'>at</span> <span m='3437660'>most</span> <span
  m='3437940'>case</span> <span m='3438270'>k squared</span> <span
  m='3438900'>edges.</span> <span m='3439510'>So</span> <span
  m='3439630'>the</span> <span m='3439750'>total</span> <span
  m='3440070'>size</span> <span m='3440400'>of</span> <span
  m='3440460'>the</span> <span m='3440540'>graph,</span> <span
  m='3440980'>which</span> <span m='3441060'>I'm</span> <span
  m='3441140'>calling</span> <span m='3441470'>n,</span> <span
  m='3442590'>n</span> <span m='3442960'>which is</span> <span
  m='3443580'>size</span> <span m='3443950'>of</span> <span m='3444030'>v</span>
  <span m='3444850'>plus</span> <span m='3445110'>size</span> <span
  m='3445420'>of</span> <span m='3445520'>E</span> <span m='3447090'>is</span>
  <span m='3447360'>order</span> <span m='3447630'>k</span> <span
  m='3447860'>squared.</span> <span m='3450100'>3k</span> <span
  m='3450520'>squared.</span> </p><p><span m='3451400'>And</span> <span
  m='3452800'>I</span> <span m='3453180'>assumed</span> <span
  m='3453790'>that</span> <span m='3453930'>there</span> <span
  m='3454030'>was</span> <span m='3454250'>a</span> <span
  m='3454300'>vertex</span> <span m='3454660'>cover</span> <span
  m='3454960'>size</span> <span m='3455240'>at</span> <span
  m='3455310'>most</span> <span m='3455520'>k</span> <span
  m='3455820'>throughout</span> <span m='3456200'>this.</span> <span
  m='3457270'>So</span> <span m='3457420'>what</span> <span m='3457550'>I</span>
  <span m='3457620'>do</span> <span m='3457900'>is</span> <span
  m='3458080'>I</span> <span m='3458130'>run</span> <span
  m='3458470'>this</span> <span m='3458640'>kernelization</span> <span
  m='3458870'>algorithm.</span> <span m='3461050'>And</span> <span
  m='3461470'>I</span> <span m='3461590'>see--</span> <span
  m='3462030'>is</span> <span m='3462240'>the</span> <span
  m='3462480'>graph</span> <span m='3462840'>that</span> <span
  m='3462960'>I</span> <span m='3463040'>produced</span> <span
  m='3463610'>size</span> <span m='3464100'>at</span> <span
  m='3464260'>most</span> <span m='3464980'>3k</span> <span
  m='3465380'>squared?</span> <span m='3466150'>If</span> <span
  m='3466320'>it</span> <span m='3466400'>is,</span> <span m='3467110'>output
  it.</span> <span m='3467610'>That's</span> <span m='3467810'>a</span> <span
  m='3467860'>kernelized</span> <span m='3468340'>thing</span> <span
  m='3469640'>because</span> <span m='3469830'>it's</span> <span
  m='3469960'>small.</span> <span m='3471220'>If</span> <span
  m='3471400'>it</span> <span m='3471570'>isn't,</span> <span
  m='3472080'>if</span> <span m='3472220'>the</span> <span m='3472360'>graph
  I've</span> <span m='3472670'>produced</span> <span m='3473400'>is</span>
  <span m='3473510'>still</span> <span m='3473790'>too</span> <span
  m='3473960'>big,</span> <span m='3474710'>that</span> <span
  m='3474910'>must</span> <span m='3475150'>mean</span> <span
  m='3475370'>that</span> <span m='3475500'>this</span> <span
  m='3475670'>assumption</span> <span m='3476100'>was</span> <span
  m='3476250'>wrong,</span> <span m='3476960'>which</span> <span
  m='3477130'>means</span> <span m='3477300'>the</span> <span
  m='3477420'>answer</span> <span m='3477760'>to</span> <span
  m='3477880'>the</span> <span m='3477960'>vertex</span> <span
  m='3478350'>cover</span> <span m='3478580'>problem</span> <span
  m='3478880'>is</span> <span m='3479010'>no,</span> <span
  m='3479440'>there</span> <span m='3479600'>is</span> <span
  m='3479820'>no</span> <span m='3480120'>vertex</span> <span
  m='3480530'>cover</span> <span m='3480870'>of size</span> <span
  m='3481100'>at</span> <span m='3481160'>most</span> <span
  m='3481370'>k.</span> </p><p><span m='3481980'>And</span> <span
  m='3482160'>so</span> <span m='3482260'>then</span> <span m='3482470'>I</span>
  <span m='3482540'>just</span> <span m='3482740'>output</span> <span
  m='3483140'>a</span> <span m='3483230'>canonical</span> <span
  m='3483850'>no</span> <span m='3484100'>instance,</span> <span
  m='3485050'>like--</span> <span m='3487490'>so</span> <span
  m='3487870'>I</span> <span m='3487940'>mean,</span> <span m='3488140'>this
  is</span> <span m='3488210'>sort</span> <span m='3488480'>of</span> <span
  m='3488560'>outside--</span> <span m='3489010'>but</span> <span
  m='3489540'>if</span> <span m='3491520'>the</span> <span
  m='3491690'>newly</span> <span m='3492310'>produced</span> <span
  m='3492740'>graph--</span> <span m='3493190'>I'll call</span> <span
  m='3493420'>it</span> <span m='3494640'>v</span> <span
  m='3494990'>prime</span> <span m='3498580'>plus</span> <span
  m='3499010'>E</span> <span m='3499180'>prime</span> <span
  m='3501560'>is</span> <span m='3501750'>greater</span> <span
  m='3502240'>than</span> <span m='3503110'>3</span> <span
  m='3503430'>times</span> <span m='3504040'>k</span> <span
  m='3504240'>squared,</span> <span m='3505550'>then</span> <span
  m='3506490'>output--</span> <span m='3507220'>and</span> <span
  m='3507320'>here</span> <span m='3507440'>I</span> <span
  m='3507470'>can</span> <span m='3507600'>actually</span> <span
  m='3507880'>give</span> <span m='3508050'>you</span> <span
  m='3508200'>one--</span> <span m='3508760'>let's</span> <span
  m='3508950'>say,</span> <span m='3509110'>I'm</span> <span
  m='3509230'>going</span> <span m='3509330'>to</span> <span
  m='3509410'>output</span> <span m='3510380'>the</span> <span
  m='3510480'>graph</span> <span m='3510860'>which</span> <span
  m='3511050'>is</span> <span m='3511200'>a</span> <span
  m='3511280'>single</span> <span m='3511610'>edge</span> <span
  m='3511860'>with</span> <span m='3511940'>two</span> <span
  m='3512110'>vertices</span> <span m='3513130'>and</span> <span
  m='3513500'>k</span> <span m='3513760'>equals</span> <span
  m='3514100'>0.</span> <span m='3516100'>The</span> <span
  m='3516210'>answer</span> <span m='3516470'>to</span> <span
  m='3516580'>vertex</span> <span m='3516940'>cover</span> <span
  m='3517200'>in</span> <span m='3517260'>this</span> <span
  m='3517400'>instance</span> <span m='3517730'>is</span> <span
  m='3517880'>no.</span> <span m='3518530'>So</span> <span
  m='3518680'>this</span> <span m='3518830'>is</span> <span
  m='3518940'>an</span> <span m='3519000'>example</span> <span
  m='3519390'>of</span> <span m='3519470'>a</span> <span
  m='3519560'>constant</span> <span m='3520000'>size,</span> <span
  m='3520800'>no</span> <span m='3521100'>representative.</span> </p><p><span
  m='3523170'>So</span> <span m='3523450'>either</span> <span
  m='3523920'>I</span> <span m='3524020'>get</span> <span
  m='3524190'>something</span> <span m='3524460'>that's</span> <span
  m='3524600'>small</span> <span m='3524970'>and I</span> <span
  m='3525080'>output</span> <span m='3525400'>that,</span> <span
  m='3525900'>or</span> <span m='3526510'>it's</span> <span
  m='3526710'>big,</span> <span m='3527060'>in</span> <span
  m='3527150'>which</span> <span m='3527310'>case</span> <span m='3527540'>I
  output</span> <span m='3528190'>this</span> <span m='3528360'>thing,</span>
  <span m='3528815'>which</span> <span m='3529110'>is</span> <span
  m='3529220'>to</span> <span m='3529330'>say,</span> <span
  m='3529500'>nope,</span> <span m='3530070'>can't</span> <span
  m='3530150'>be</span> <span m='3530230'>done.</span> <span
  m='3531970'>That's</span> <span m='3532580'>kernelization.</span> <span
  m='3533450'>So</span> <span m='3534160'>I've</span> <span
  m='3534370'>produced</span> <span m='3534820'>a</span> <span
  m='3534930'>quadratic</span> <span m='3535690'>size</span> <span
  m='3536040'>graph,</span> <span m='3536280'>quadratic</span> <span
  m='3536800'>in</span> <span m='3537190'>k</span> <span m='3539060'>in</span>
  <span m='3539270'>polynomial</span> <span m='3540060'>time.</span> <span
  m='3543000'>Question?</span> <span m='3544384'>No.</span> <span
  m='3545830'>Wow.</span> <span m='3546800'>So</span> <span
  m='3546970'>this</span> <span m='3547190'>is</span> <span
  m='3547360'>kernelization</span> <span m='3548460'>at</span> <span
  m='3548610'>its</span> <span m='3548780'>finest.</span> <span
  m='3549220'>A</span> <span m='3549270'>polynomial</span> <span
  m='3549900'>kernel.</span> <span m='3550730'>Polynomial</span> <span
  m='3551260'>time.</span> <span m='3551850'>We</span> <span
  m='3552020'>get</span> <span m='3552090'>that</span> <span
  m='3552330'>down</span> <span m='3552550'>to</span> <span
  m='3552620'>something</span> <span m='3552980'>the</span> <span
  m='3553080'>size</span> <span m='3553550'>of</span> <span
  m='3553620'>polynomial</span> <span m='3554260'>in</span> <span
  m='3554440'>k.</span> </p><p><span m='3556250'>This</span> <span
  m='3556410'>is</span> <span m='3556520'>how</span> <span m='3556680'>you
  should--</span> <span m='3556975'>if</span> <span m='3557270'>you</span> <span
  m='3557400'>want</span> <span m='3557550'>to</span> <span
  m='3557590'>solve</span> <span m='3557820'>vertex</span> <span
  m='3558130'>cover,</span> <span m='3558330'>you</span> <span
  m='3558460'>might</span> <span m='3558730'>as</span> <span
  m='3558820'>well</span> <span m='3558990'>do</span> <span
  m='3559100'>these</span> <span m='3559270'>reductions</span> <span
  m='3559810'>first,</span> <span m='3560740'>because</span> <span
  m='3561080'>they</span> <span m='3561250'>will</span> <span
  m='3561460'>simplify</span> <span m='3561910'>your</span> <span
  m='3562020'>thing.</span> <span m='3562850'>And</span> <span
  m='3563040'>now,</span> <span m='3563370'>if</span> <span
  m='3563530'>you</span> <span m='3563610'>happen</span> <span
  m='3563890'>to</span> <span m='3563960'>know</span> <span
  m='3564090'>your</span> <span m='3564200'>vertex</span> <span
  m='3564530'>cover</span> <span m='3564800'>is small,</span> <span
  m='3565180'>then</span> <span m='3565310'>the</span> <span
  m='3565390'>graph</span> <span m='3565620'>will</span> <span
  m='3565710'>be</span> <span m='3565820'>small.</span> <span
  m='3567070'>So</span> <span m='3567200'>now</span> <span m='3567420'>we</span>
  <span m='3567520'>could</span> <span m='3567660'>run</span> <span
  m='3567880'>either</span> <span m='3568250'>of</span> <span
  m='3568300'>these</span> <span m='3568470'>algorithms.</span> <span
  m='3569650'>OK.</span> <span m='3570530'>Presumably,</span> <span
  m='3571100'>we</span> <span m='3571190'>should</span> <span
  m='3571380'>run</span> <span m='3571580'>the</span> <span
  m='3571680'>better</span> <span m='3571920'>one.</span> <span
  m='3572410'>But</span> <span m='3572600'>for</span> <span
  m='3572710'>fun,</span> <span m='3573220'>let's</span> <span
  m='3573500'>analyze</span> <span m='3574360'>both</span> <span
  m='3574590'>of</span> <span m='3574670'>them.</span> <span
  m='3576560'>OK.</span> <span m='3576810'>So</span> <span
  m='3577170'>I'm</span> <span m='3577310'>going</span> <span
  m='3577420'>to</span> <span m='3577480'>leave</span> <span
  m='3577760'>the</span> <span m='3578490'>running</span> <span
  m='3578820'>times</span> <span m='3579220'>here.</span> </p><p><span
  m='3584480'>We're</span> <span m='3584650'>going</span> <span
  m='3584770'>to</span> <span m='3584830'>get</span> <span m='3585070'>a</span>
  <span m='3585200'>faster</span> <span m='3585820'>vertex</span> <span
  m='3586220'>cover</span> <span m='3586510'>algorithm</span> <span
  m='3586990'>from a</span> <span m='3587970'>fixed</span> <span
  m='3588180'>parameter</span> <span m='3588490'>tractability</span> <span
  m='3589020'>perspective.</span> <span m='3591190'>So</span> <span
  m='3599830'>here's</span> <span m='3600180'>a</span> <span
  m='3600260'>new</span> <span m='3600700'>FTP</span> <span
  m='3601230'>algorithm.</span> <span m='3602420'>Two of</span> <span
  m='3602620'>them.</span> <span m='3603120'>First</span> <span
  m='3603490'>we</span> <span m='3603600'>kernelize.</span> <span
  m='3607400'>OK.</span> <span m='3607580'>We</span> <span
  m='3607670'>spent--</span> <span m='3608210'>I</span> <span
  m='3608320'>guess--</span> <span m='3608550'>order</span> <span
  m='3608830'>vE</span> <span m='3609250'>time.</span> <span
  m='3609690'>Again,</span> <span m='3609950'>I</span> <span
  m='3610010'>think</span> <span m='3610230'>you can</span> <span
  m='3610470'>get</span> <span m='3610570'>that</span> <span
  m='3610730'>down</span> <span m='3610940'>to</span> <span
  m='3611040'>order</span> <span m='3611365'>v</span> <span
  m='3612880'>without</span> <span m='3613180'>too</span> <span
  m='3613270'>much</span> <span m='3613470'>effort.</span> <span
  m='3615440'>Obvious.</span> <span m='3617030'>It's</span> <span
  m='3617260'>not</span> <span m='3617390'>totally</span> <span
  m='3617740'>obvious.</span> <span m='3617870'>It's</span> <span
  m='3618200'>a</span> <span m='3618640'>good</span> <span
  m='3618800'>exercise.</span> <span m='3619360'>Be a good</span> <span
  m='3619630'>problem</span> <span m='3619940'>set</span> <span
  m='3620060'>problem.</span> <span m='3622190'>It's</span> <span
  m='3622400'>not</span> <span m='3622590'>on</span> <span
  m='3622680'>the</span> <span m='3622760'>problem</span> <span
  m='3623080'>set.</span> <span m='3623280'>Don't worry.</span> <span
  m='3624490'>It</span> <span m='3624560'>could</span> <span
  m='3624750'>be</span> <span m='3624890'>a</span> <span m='3625120'>good</span>
  <span m='3625280'>final</span> <span m='3625580'>exam</span> <span
  m='3625910'>problem.</span> <span m='3628050'>Probably</span> <span
  m='3628380'>a</span> <span m='3628430'>little</span> <span
  m='3628600'>long.</span> <span m='3629770'>All</span> <span
  m='3629850'>right.</span> </p><p><span m='3630300'>So</span> <span
  m='3631510'>now</span> <span m='3631840'>we</span> <span
  m='3632080'>could--</span> <span m='3633120'>let's</span> <span
  m='3633400'>say,</span> <span m='3633700'>option</span> <span
  m='3634030'>one--</span> <span m='3635410'>let's</span> <span
  m='3635680'>use</span> <span m='3635960'>the</span> <span
  m='3636040'>brute</span> <span m='3636250'>force</span> <span
  m='3636780'>algorithm</span> <span m='3637970'>after</span> <span
  m='3638060'>that.</span> <span m='3641940'>The</span> <span
  m='3642330'>running</span> <span m='3642580'>time</span> <span
  m='3642770'>of</span> <span m='3642880'>that</span> <span
  m='3643680'>is</span> <span m='3644460'>E</span> <span
  m='3644740'>times</span> <span m='3645110'>v</span> <span
  m='3645290'>to</span> <span m='3645410'>the</span> <span m='3645520'>k.</span>
  <span m='3646240'>But</span> <span m='3646380'>now</span> <span
  m='3646700'>E</span> <span m='3647990'>is</span> <span m='3648890'>k</span>
  <span m='3649070'>squared.</span> <span m='3649990'>And</span> <span
  m='3650230'>v</span> <span m='3650970'>is</span> <span m='3651980'>also</span>
  <span m='3652260'>order</span> <span m='3652480'>k</span> <span
  m='3652670'>squared.</span> <span m='3653180'>Let's</span> <span
  m='3653410'>not</span> <span m='3653670'>worry</span> <span
  m='3653880'>about--</span> <span m='3654870'>actually</span> <span
  m='3655110'>I</span> <span m='3655170'>do</span> <span m='3655350'>have</span>
  <span m='3655500'>to</span> <span m='3655600'>worry</span> <span
  m='3655710'>about</span> <span m='3655910'>constants</span> <span
  m='3656300'>here,</span> <span m='3656490'>because</span> <span
  m='3657390'>it's</span> <span m='3657560'>in</span> <span
  m='3657660'>the</span> <span m='3657740'>base</span> <span
  m='3658030'>of</span> <span m='3658120'>an</span> <span
  m='3658200'>exponent.</span> <span m='3659280'>So</span> <span m='3660175'>I
  do.</span> <span m='3661540'>So</span> <span m='3661790'>we're</span> <span
  m='3661910'>going</span> <span m='3662030'>to</span> <span
  m='3662080'>get</span> <span m='3662990'>k</span> <span
  m='3663230'>squared</span> <span m='3663700'>for</span> <span
  m='3663830'>the</span> <span m='3663980'>E</span> <span
  m='3664150'>term.</span> <span m='3665680'>And</span> <span
  m='3665990'>then</span> <span m='3666230'>v</span> <span
  m='3666310'>term</span> <span m='3667420'>is</span> <span
  m='3667600'>going</span> <span m='3667710'>to</span> <span
  m='3667790'>be</span> <span m='3669730'>2</span> <span
  m='3670100'>times</span> <span m='3670460'>k</span> <span
  m='3670630'>squared.</span> <span m='3672180'>And</span> <span
  m='3672350'>that's</span> <span m='3672620'>going</span> <span
  m='3672700'>to</span> <span m='3672740'>be</span> <span
  m='3672880'>raised</span> <span m='3673160'>to</span> <span
  m='3673230'>the</span> <span m='3673330'>k-th</span> <span
  m='3673670'>power.</span> <span m='3675150'>OK.</span> </p><p><span
  m='3675340'>So</span> <span m='3675560'>I'll</span> <span
  m='3675670'>simplify</span> <span m='3676220'>a</span> <span
  m='3676300'>little</span> <span m='3676490'>bit.</span> <span
  m='3678140'>This</span> <span m='3678380'>is</span> <span
  m='3678540'>like</span> <span m='3678840'>2</span> <span m='3679070'>to</span>
  <span m='3679150'>the</span> <span m='3679260'>k</span> <span
  m='3680550'>times--</span> <span m='3681660'>I</span> <span
  m='3681750'>guess--</span> <span m='3681980'>k</span> <span
  m='3682240'>to</span> <span m='3682370'>the</span> <span
  m='3682500'>2k.</span> <span m='3683680'>OK.  It's</span> <span
  m='3683880'>k</span> <span m='3684060'>to</span> <span m='3684140'>the</span>
  <span m='3684240'>k</span> <span m='3684440'>squared.</span> <span
  m='3688600'>Not</span> <span m='3688750'>bad.</span> <span
  m='3689330'>Overall</span> <span m='3689620'>running</span> <span
  m='3689870'>time</span> <span m='3690700'>is</span> <span
  m='3690900'>vE</span> <span m='3691830'>plus</span> <span
  m='3692440'>this.</span> <span m='3696120'>It's</span> <span
  m='3696260'>a</span> <span m='3696320'>function</span> <span
  m='3696640'>of</span> <span m='3696700'>k.</span> <span
  m='3696930'>It's</span> <span m='3697090'>exponential.</span> <span
  m='3700220'>Good.</span> <span m='3700460'>We</span> <span
  m='3700750'>have</span> <span m='3700870'>a</span> <span
  m='3700940'>better</span> <span m='3701220'>algorithm.</span> <span
  m='3701600'>We</span> <span m='3701680'>have</span> <span m='3701880'>this
  v</span> <span m='3702060'>times</span> <span m='3702375'>2</span> <span
  m='3702690'>to</span> <span m='3702830'>the</span> <span m='3702950'>k</span>
  <span m='3703170'>running</span> <span m='3703420'>time,</span> <span
  m='3703670'>so</span> <span m='3703870'>we</span> <span
  m='3703960'>might</span> <span m='3704070'>as</span> <span
  m='3704160'>well</span> <span m='3704260'>use</span> <span
  m='3704380'>that</span> <span m='3704550'>one.</span> <span
  m='3705510'>But</span> <span m='3705670'>the</span> <span
  m='3705750'>point</span> <span m='3705960'>is--</span> <span
  m='3706240'>once</span> <span m='3706530'>you</span> <span
  m='3706660'>kernelize,</span> <span m='3707400'>you</span> <span
  m='3707550'>can</span> <span m='3707800'>use</span> <span
  m='3708050'>pretty</span> <span m='3708350'>stupid</span> <span
  m='3708770'>algorithms,</span> <span m='3709370'>and</span> <span
  m='3709480'>you</span> <span m='3709550'>still</span> <span
  m='3709810'>get</span> <span m='3709980'>really</span> <span
  m='3710200'>good</span> <span m='3710370'>running</span> <span
  m='3710630'>times.</span> <span m='3711550'>OK.</span> <span
  m='3711680'>We'll</span> <span m='3711830'>get</span> <span
  m='3711950'>a</span> <span m='3712010'>slightly</span> <span
  m='3712390'>better</span> <span m='3712630'>running</span> <span
  m='3712860'>time</span> <span m='3713100'>using</span> <span
  m='3713490'>the</span> <span m='3714220'>bounded-tree-search.</span>
  </p><p><span m='3723020'>So</span> <span m='3723260'>if we</span> <span
  m='3723460'>use</span> <span m='3723690'>bounded-tree-search,</span> <span
  m='3724260'>we</span> <span m='3724390'>have</span> <span
  m='3725010'>v.</span> <span m='3725403'>v</span> <span m='3726190'>is</span>
  <span m='3727180'>2k</span> <span m='3727660'>squared.</span> <span
  m='3728430'>So</span> <span m='3728500'>here</span> <span
  m='3728650'>the</span> <span m='3728750'>constant</span> <span
  m='3729120'>doesn't</span> <span m='3729410'>matter,</span> <span
  m='3729800'>because</span> <span m='3729970'>there's</span> <span
  m='3730670'>no</span> <span m='3730790'>exponent.</span> <span
  m='3731780'>And</span> <span m='3731920'>then</span> <span
  m='3732020'>we</span> <span m='3732110'>have</span> <span
  m='3732280'>times</span> <span m='3732650'>2</span> <span m='3732840'>to
  the</span> <span m='3732960'>k.</span> <span m='3733770'>So</span> <span
  m='3733890'>we're</span> <span m='3734020'>going</span> <span
  m='3734140'>to</span> <span m='3734210'>get</span> <span m='3737080'>k</span>
  <span m='3737320'>squared</span> <span m='3738670'>times</span> <span
  m='3738950'>2</span> <span m='3739130'>to</span> <span m='3739200'>the</span>
  <span m='3739330'>k</span> <span m='3740680'>algorithms.</span> <span
  m='3741120'>Kind</span> <span m='3741250'>of</span> <span
  m='3741330'>funny</span> <span m='3741600'>symmetry</span> <span
  m='3742060'>here.</span> <span m='3742330'>2</span> <span
  m='3742670'>and</span> <span m='3742900'>k</span> <span m='3743160'>are</span>
  <span m='3743600'>switching</span> <span m='3744320'>roles.</span> <span
  m='3744740'>Of</span> <span m='3745030'>course,</span> <span
  m='3745530'>the</span> <span m='3745640'>2 to the k</span> <span
  m='3745830'>is</span> <span m='3745960'>the</span> <span
  m='3746040'>big</span> <span m='3746230'>term.</span> <span
  m='3747210'>But</span> <span m='3747320'>now it's</span> <span
  m='3747570'>only</span> <span m='3748000'>singularly</span> <span
  m='3748530'>exponential</span> <span m='3749130'>in</span> <span
  m='3749210'>k.</span> </p><p><span m='3749740'>This</span> <span
  m='3750030'>thing</span> <span m='3750720'>is</span> <span
  m='3750890'>like</span> <span m='3751100'>2</span> <span m='3751290'>to</span>
  <span m='3751390'>the</span> <span m='3751560'>k</span> <span
  m='3751790'>log</span> <span m='3752050'>k.</span> <span
  m='3752710'>This</span> <span m='3752870'>thing</span> <span
  m='3753020'>is</span> <span m='3753130'>only</span> <span m='3753370'>2
  to</span> <span m='3753590'>the</span> <span m='3753710'>k.</span> <span
  m='3753980'>So</span> <span m='3754190'>it's</span> <span
  m='3754330'>better.</span> <span m='3755440'>And</span> <span
  m='3755550'>this</span> <span m='3755700'>is</span> <span
  m='3755810'>like</span> <span m='3756000'>k</span> <span
  m='3756130'>factorial.</span> <span m='3757290'>And</span> <span
  m='3757450'>this</span> <span m='3757630'>is</span> <span
  m='3757890'>just</span> <span m='3758140'>2 to</span> <span
  m='3758350'>the</span> <span m='3758470'>k.</span> <span m='3758940'>So</span>
  <span m='3759150'>it's</span> <span m='3759330'>a</span> <span
  m='3759380'>big</span> <span m='3759610'>improvement.</span> <span
  m='3760500'>This</span> <span m='3760600'>will</span> <span
  m='3760720'>be</span> <span m='3760890'>a</span> <span m='3760940'>much</span>
  <span m='3761140'>more</span> <span m='3761320'>practical</span> <span
  m='3761740'>algorithm.</span> <span m='3762930'>So</span> <span
  m='3763130'>we</span> <span m='3763240'>run</span> <span
  m='3763420'>the</span> <span m='3763500'>kernelization,</span> <span
  m='3764490'>then</span> <span m='3764720'>we</span> <span
  m='3764830'>run</span> <span m='3765090'>the</span> <span
  m='3765850'>bounded-tree-search</span> <span m='3767290'>algorithm.</span>
  <span m='3768150'>And</span> <span m='3768500'>so</span> <span
  m='3768590'>the</span> <span m='3768700'>total</span> <span
  m='3769010'>running</span> <span m='3769300'>time</span> <span
  m='3773880'>is</span> <span m='3775050'>vE</span> <span
  m='3776500'>plus</span> <span m='3777160'>k</span> <span
  m='3777410'>squared</span> <span m='3778700'>2 to the</span> <span
  m='3779050'>k.</span> </p><p><span m='3781200'>The</span> <span
  m='3781310'>story</span> <span m='3781560'>doesn't</span> <span
  m='3781820'>end</span> <span m='3782050'>here.</span> <span
  m='3782480'>There</span> <span m='3782730'>are</span> <span
  m='3783710'>dozens</span> <span m='3784120'>of</span> <span
  m='3784220'>papers</span> <span m='3784640'>about</span> <span
  m='3784860'>how</span> <span m='3785040'>to</span> <span
  m='3785130'>solve</span> <span m='3785460'>vertex</span> <span
  m='3785780'>cover</span> <span m='3786080'>from</span> <span
  m='3786380'>fixed</span> <span m='3786630'>parameter</span> <span
  m='3786910'>tractability</span> <span m='3787490'>perspective.</span> <span
  m='3788580'>The</span> <span m='3789000'>best</span> <span
  m='3789330'>one</span> <span m='3789720'>so</span> <span
  m='3789970'>far--</span> <span m='3793280'>I'm</span> <span
  m='3793400'>not</span> <span m='3793560'>going</span> <span
  m='3793680'>to</span> <span m='3793790'>cover--</span> <span
  m='3795760'>but</span> <span m='3795930'>it</span> <span m='3796030'>is</span>
  <span m='3796170'>based</span> <span m='3796440'>on</span> <span
  m='3796560'>kernelization.</span> <span m='3796820'>Just</span> <span
  m='3797490'>more</span> <span m='3797730'>rules.</span> <span
  m='3799520'>And</span> <span m='3799770'>you</span> <span
  m='3799900'>get</span> <span m='3801560'>k</span> <span m='3802360'>v</span>
  <span m='3804140'>plus</span> <span m='3804730'>1.274</span> <span
  m='3807740'>to</span> <span m='3807910'>the</span> <span m='3808060'>k.</span>
  <span m='3809290'>And</span> <span m='3809470'>some</span> <span
  m='3809640'>cover's</span> <span m='3809980'>better</span> <span
  m='3810200'>than</span> <span m='3810390'>2,</span> <span
  m='3810920'>but</span> <span m='3811720'>very</span> <span
  m='3811870'>similar.</span> <span m='3815050'>That's</span> <span
  m='3815310'>vertex</span> <span m='3815690'>cover.</span> <span
  m='3815970'>If</span> <span m='3816060'>you</span> <span
  m='3816170'>have</span> <span m='3816350'>a</span> <span
  m='3816380'>vertex</span> <span m='3816770'>cover</span> <span
  m='3817020'>instance,</span> <span m='3817920'>and</span> <span
  m='3818020'>you</span> <span m='3818110'>know</span> <span
  m='3818390'>that</span> <span m='3818560'>it's</span> <span
  m='3818750'>going</span> <span m='3818860'>to</span> <span
  m='3818910'>have</span> <span m='3819080'>a</span> <span
  m='3819130'>relatively</span> <span m='3819570'>small</span> <span
  m='3819830'>vertex</span> <span m='3820150'>cover,</span> <span
  m='3821100'>these</span> <span m='3821350'>are</span> <span
  m='3821380'>the</span> <span m='3821510'>algorithms</span> <span
  m='3821900'>you</span> <span m='3822000'>should</span> <span
  m='3822180'>use.</span> </p><p><span m='3826440'>Any</span> <span
  m='3826590'>questions?</span> <span m='3829310'>This</span> <span
  m='3829520'>ends</span> <span m='3829830'>our</span> <span
  m='3829990'>vertex</span> <span m='3830360'>cover</span> <span
  m='3830660'>story.</span> <span m='3831860'>But</span> <span
  m='3832040'>the</span> <span m='3832130'>last</span> <span
  m='3832380'>thing</span> <span m='3832540'>I</span> <span
  m='3832570'>want</span> <span m='3832760'>to</span> <span
  m='3832840'>do</span> <span m='3833040'>is</span> <span
  m='3833840'>connect</span> <span m='3834530'>up</span> <span
  m='3834820'>these</span> <span m='3835020'>two</span> <span
  m='3835210'>areas.</span> <span m='3835560'>Last</span> <span
  m='3835830'>class</span> <span m='3836090'>we</span> <span
  m='3836190'>talked</span> <span m='3836440'>about</span> <span
  m='3836740'>approximation</span> <span m='3837370'>algorithms.</span> <span
  m='3838660'>This</span> <span m='3838830'>class</span> <span
  m='3839040'>we</span> <span m='3839120'>talked</span> <span
  m='3839340'>about</span> <span m='3839450'>fixed</span> <span
  m='3839690'>parameter</span> <span m='3840040'>algorithms.</span> <span
  m='3840390'>They're</span> <span m='3840630'>actually</span> <span
  m='3841090'>closely</span> <span m='3841470'>related.</span> <span
  m='3843420'>And</span> <span m='3843510'>so,</span> <span
  m='3843650'>for</span> <span m='3843790'>example,</span> <span
  m='3844220'>we</span> <span m='3844360'>will</span> <span
  m='3844600'>get</span> <span m='3844890'>a</span> <span
  m='3845120'>fixed</span> <span m='3845500'>parameter</span> <span
  m='3845900'>algorithm</span> <span m='3846450'>to</span> <span
  m='3848930'>subset</span> <span m='3849650'>sum,</span> <span
  m='3851340'>using</span> <span m='3851830'>what</span> <span
  m='3851980'>we</span> <span m='3852130'>already</span> <span
  m='3852520'>had</span> <span m='3852800'>last</span> <span
  m='3853130'>lecture.</span> <span m='3859850'>So,</span> <span
  m='3860090'>so</span> <span m='3860280'>far</span> <span
  m='3860540'>today,</span> <span m='3860800'>I've</span> <span
  m='3860880'>basically</span> <span m='3861190'>been</span> <span
  m='3861360'>talking</span> <span m='3861680'>about</span> <span
  m='3862000'>decision</span> <span m='3862430'>problems.</span> <span
  m='3863580'>But</span> <span m='3863720'>let's</span> <span
  m='3863980'>think</span> <span m='3864390'>a</span> <span
  m='3864470'>little</span> <span m='3864690'>bit</span> <span
  m='3864850'>about</span> <span m='3865340'>optimization</span> <span
  m='3866040'>problems.</span> </p><p><span m='3886800'>So</span> <span
  m='3887440'>take</span> <span m='3888000'>your</span> <span
  m='3888180'>favorite</span> <span m='3888610'>optimization</span> <span
  m='3889230'>problem.</span> <span m='3891370'>Like</span> <span
  m='3891550'>any</span> <span m='3891810'>of the</span> <span
  m='3891970'>ones</span> <span m='3892240'>from</span> <span
  m='3892460'>last</span> <span m='3892750'>lecture.</span> <span
  m='3899380'>And</span> <span m='3899700'>let's</span> <span
  m='3899900'>assume</span> <span m='3902060'>that the</span> <span
  m='3902710'>optimal</span> <span m='3903380'>solution</span> <span
  m='3903880'>value--</span> <span m='3904310'>the</span> <span
  m='3904800'>thing</span> <span m='3904910'>we're</span> <span
  m='3905010'>trying</span> <span m='3905230'>to</span> <span
  m='3905280'>optimize,</span> <span m='3905820'>minimize,</span> <span
  m='3906210'>or</span> <span m='3906260'>maximize--</span> <span
  m='3906693'>is</span> <span m='3907560'>an</span> <span
  m='3907700'>integer.</span> <span m='3908660'>Assume</span> <span
  m='3908870'>that</span> <span m='3908990'>OPT</span> <span
  m='3909930'>is</span> <span m='3910160'>an</span> <span
  m='3910260'>integer.</span> <span m='3911674'>OK.</span> <span
  m='3912620'>Now</span> <span m='3914180'>let's</span> <span
  m='3914480'>look</span> <span m='3914720'>at</span> <span
  m='3916210'>the</span> <span m='3916510'>decision</span> <span
  m='3916960'>problem.</span> <span m='3918400'>Whenever</span> <span
  m='3918840'>you</span> <span m='3918970'>have</span> <span
  m='3919110'>an</span> <span m='3919190'>optimization</span> <span
  m='3919760'>problem,</span> <span m='3920130'>you</span> <span
  m='3920180'>can</span> <span m='3920300'>convert</span> <span
  m='3920600'>it</span> <span m='3920720'>into</span> <span m='3921540'>a</span>
  <span m='3921650'>decision</span> <span m='3922040'>problem.</span> <span
  m='3924460'>You</span> <span m='3924600'>can</span> <span
  m='3924740'>convert</span> <span m='3925030'>it</span> <span
  m='3925140'>into</span> <span m='3926530'>a</span> <span
  m='3926620'>few.</span> </p><p><span m='3927820'>For</span> <span
  m='3927970'>example,</span> <span m='3928420'>OPT</span> <span
  m='3928790'>less</span> <span m='3929070'>than</span> <span
  m='3929220'>or</span> <span m='3929310'>equal</span> <span
  m='3929540'>to</span> <span m='3929610'>k,</span> <span m='3930270'>or
  OPT</span> <span m='3930710'>greater</span> <span m='3930950'>than</span>
  <span m='3931050'>or</span> <span m='3931090'>equal</span> <span
  m='3931310'>to</span> <span m='3931380'>k.</span> <span
  m='3932200'>They're</span> <span m='3932400'>all</span> <span
  m='3933020'>going</span> <span m='3933160'>to</span> <span
  m='3933380'>turn</span> <span m='3933570'>out</span> <span
  m='3933700'>to</span> <span m='3933810'>work</span> <span
  m='3934050'>the</span> <span m='3934100'>same.</span> <span
  m='3936264'>OPT</span> <span m='3936730'>equal</span> <span
  m='3937070'>k</span> <span m='3937420'>would</span> <span
  m='3937560'>also</span> <span m='3937820'>work.</span> <span
  m='3940510'>Now</span> <span m='3940690'>that's</span> <span
  m='3940900'>a</span> <span m='3940960'>decision</span> <span
  m='3941480'>problem,</span> <span m='3941860'>but</span> <span
  m='3941990'>what</span> <span m='3942120'>I</span> <span
  m='3942170'>want</span> <span m='3942410'>is</span> <span m='3942480'>a</span>
  <span m='3942620'>parameterized</span> <span m='3943580'>decision</span> <span
  m='3944000'>problem.</span> <span m='3945050'>What</span> <span
  m='3945190'>should</span> <span m='3945340'>my</span> <span
  m='3945460'>parameter</span> <span m='3945890'>be?</span> <span
  m='3947200'>k.</span> <span m='3948486'>All right.</span> <span
  m='3951120'>That's</span> <span m='3951390'>the</span> <span
  m='3951520'>obvious</span> <span m='3951810'>parameter.</span> </p><p><span
  m='3956320'>In</span> <span m='3956460'>some</span> <span
  m='3956680'>sense,</span> <span m='3956960'>we're</span> <span
  m='3957140'>parameterizing</span> <span m='3957760'>by</span> <span
  m='3957960'>OPT,</span> <span m='3958490'>but</span> <span
  m='3958700'>we're</span> <span m='3958960'>adding</span> <span
  m='3959270'>a</span> <span m='3959340'>layer</span> <span
  m='3959660'>of</span> <span m='3959730'>indirection.</span> <span
  m='3960170'>We're</span> <span m='3960300'>saying,</span> <span
  m='3960825'>well,</span> <span m='3961170'>OPT,</span> <span
  m='3962100'>but</span> <span m='3962250'>we</span> <span
  m='3962350'>want</span> <span m='3962520'>to</span> <span
  m='3962580'>decide</span> <span m='3963030'>whether</span> <span
  m='3963270'>OPT</span> <span m='3963580'>is</span> <span
  m='3963920'>less</span> <span m='3964160'>than</span> <span
  m='3964260'>or</span> <span m='3964360'>equal</span> <span
  m='3964410'>to</span> <span m='3964480'>k.</span> <span m='3966400'>And</span>
  <span m='3966790'>let's</span> <span m='3966960'>parameterize</span> <span
  m='3967570'>by</span> <span m='3967690'>k.</span> <span
  m='3968260'>That's</span> <span m='3968710'>similar</span> <span
  m='3969010'>flavor</span> <span m='3969290'>to</span> <span
  m='3969360'>what</span> <span m='3969480'>we</span> <span
  m='3969580'>had</span> <span m='3969740'>with</span> <span
  m='3969880'>vertex</span> <span m='3970250'>cover.</span> <span
  m='3971740'>If</span> <span m='3971900'>we</span> <span
  m='3971980'>started</span> <span m='3972220'>with</span> <span
  m='3972330'>minimum</span> <span m='3972620'>vertex</span> <span
  m='3972990'>cover, and</span> <span m='3973360'>converted</span> <span
  m='3973780'>it.</span> <span m='3976580'>Cool.</span> <span m='3977330'>Here's
  the</span> <span m='3977610'>theorem.</span> <span m='3986360'>This</span>
  <span m='3986450'>is</span> <span m='3986580'>not</span> <span
  m='3986780'>going</span> <span m='3986880'>to</span> <span
  m='3986930'>be</span> <span m='3987090'>as</span> <span
  m='3987250'>strong</span> <span m='3987600'>as</span> <span
  m='3987720'>the</span> <span m='3987850'>other</span> <span
  m='3988020'>things</span> <span m='3988240'>we've</span> <span
  m='3988390'>seen.</span> <span m='3988720'>No</span> <span
  m='3989710'>equivalence</span> <span m='3990160'>here.</span> </p><p><span
  m='4016590'>So</span> <span m='4016770'>it's</span> <span m='4016870'>a</span>
  <span m='4016920'>one</span> <span m='4017150'>way</span> <span
  m='4017290'>implication.</span> <span m='4019130'>And</span> <span
  m='4019300'>I</span> <span m='4019330'>haven't</span> <span
  m='4019630'>defined</span> <span m='4019950'>this</span> <span
  m='4020100'>term</span> <span m='4020390'>yet,</span> <span
  m='4021420'>but</span> <span m='4021490'>it's</span> <span
  m='4021620'>similar</span> <span m='4021940'>to</span> <span
  m='4022030'>one</span> <span m='4022210'>we</span> <span
  m='4022320'>saw</span> <span m='4022490'>last</span> <span
  m='4022760'>class.</span> <span m='4023810'>If</span> <span
  m='4024130'>the</span> <span m='4024290'>optimization</span> <span
  m='4024930'>problem</span> <span m='4025500'>that</span> <span
  m='4025600'>we</span> <span m='4025700'>started</span> <span
  m='4026020'>with</span> <span m='4026510'>has</span> <span
  m='4026940'>an</span> <span m='4027070'>efficient</span> <span
  m='4027700'>PTAS,</span> <span m='4029070'>an</span> <span
  m='4029170'>efficient</span> <span m='4029600'>Polynomial</span> <span
  m='4030100'>Time</span> <span m='4030320'>Approximation</span> <span
  m='4030940'>Scheme,</span> <span m='4031810'>then</span> <span
  m='4032240'>the</span> <span m='4032350'>decision</span> <span
  m='4032740'>problem--</span> <span m='4034010'>you</span> <span
  m='4034170'>get</span> <span m='4034370'>from</span> <span
  m='4034490'>here--</span> <span m='4035060'>is</span> <span
  m='4035320'>fixed</span> <span m='4035540'>parameter</span> <span
  m='4035840'>tractable</span> <span m='4036350'>with</span> <span
  m='4036500'>respect</span> <span m='4036820'>to</span> <span
  m='4036880'>k.</span> <span m='4038501'>OK.</span> </p><p><span
  m='4038970'>So</span> <span m='4039180'>what</span> <span
  m='4039340'>does</span> <span m='4039490'>EPTAS</span> <span
  m='4039770'>mean?</span> <span m='4040150'>It's</span> <span
  m='4041570'>going</span> <span m='4041700'>to</span> <span
  m='4041770'>look</span> <span m='4042260'>familiar.</span> <span
  m='4043640'>We're</span> <span m='4043950'>going</span> <span
  m='4044090'>to</span> <span m='4044150'>take</span> <span
  m='4044350'>an</span> <span m='4044490'>arbitrary</span> <span
  m='4045080'>function</span> <span m='4045350'>of</span> <span
  m='4046160'>1</span> <span m='4046430'>over</span> <span
  m='4046600'>epsilon</span> <span m='4047870'>times</span> <span
  m='4048490'>a</span> <span m='4048770'>fixed</span> <span
  m='4049210'>polynomial</span> <span m='4049810'>in</span> <span
  m='4049900'>n.</span> <span m='4052580'>So</span> <span
  m='4052910'>last</span> <span m='4053190'>time</span> <span
  m='4053740'>we</span> <span m='4053920'>talked</span> <span
  m='4054170'>about</span> <span m='4054440'>PTAS</span> <span
  m='4055480'>we</span> <span m='4055650'>could</span> <span
  m='4055760'>have--</span> <span m='4057380'>you</span> <span
  m='4057500'>could</span> <span m='4057610'>have</span> <span
  m='4057750'>something</span> <span m='4058030'>like</span> <span
  m='4058310'>n</span> <span m='4059150'>to</span> <span m='4059300'>the</span>
  <span m='4059410'>f</span> <span m='4059640'>of</span> <span
  m='4059720'>1</span> <span m='4059890'>over</span> <span
  m='4060080'>epsilon.</span> <span m='4060600'>I'm going</span> <span
  m='4061070'>to</span> <span m='4061540'>consider</span> <span
  m='4061840'>that</span> <span m='4062070'>bad,</span> <span
  m='4062440'>as</span> <span m='4062560'>you</span> <span
  m='4062700'>might</span> <span m='4062890'>imagine,</span> <span
  m='4063260'>from</span> <span m='4063470'>a</span> <span
  m='4063520'>fixed</span> <span m='4063750'>parameter</span> <span
  m='4064020'>tractability</span> <span m='4064570'>perspective.</span> <span
  m='4065670'>Better</span> <span m='4066910'>would</span> <span
  m='4067190'>be</span> <span m='4067820'>some</span> <span
  m='4068250'>function,</span> <span m='4068740'>possibly</span> <span
  m='4069180'>exponential,</span> <span m='4069490'>if</span> <span
  m='4069800'>1</span> <span m='4069970'>over</span> <span
  m='4070140'>epsilon</span> <span m='4070720'>times</span> <span
  m='4071210'>polynomial</span> <span m='4071690'>in n.</span> <span
  m='4072390'>This</span> <span m='4072540'>is</span> <span
  m='4072840'>going</span> <span m='4072990'>to</span> <span
  m='4073050'>be</span> <span m='4073180'>good</span> <span
  m='4073500'>from</span> <span m='4073680'>a</span> <span
  m='4073740'>fixed</span> <span m='4073970'>parameter</span> <span
  m='4074330'>perspective.</span> <span m='4074900'>Although</span> <span
  m='4074950'>it's</span> <span m='4075140'>about</span> <span
  m='4075340'>approximation</span> <span m='4076170'>algorithms,</span> <span
  m='4076690'>not</span> <span m='4076920'>about</span> <span
  m='4077120'>exact</span> <span m='4077500'>algorithms.</span> </p><p><span
  m='4078900'>Of</span> <span m='4079000'>course,</span> <span
  m='4079220'>even</span> <span m='4079500'>better</span> <span
  m='4079840'>is</span> <span m='4080050'>the</span> <span
  m='4080190'>FPTASs</span> <span m='4081010'>we</span> <span
  m='4081110'>saw</span> <span m='4081150'>last</span> <span
  m='4081420'>time,</span> <span m='4082270'>which</span> <span
  m='4082450'>is</span> <span m='4082630'>polynomial</span> <span
  m='4083370'>1</span> <span m='4083520'>over</span> <span
  m='4083660'>epsilon</span> <span m='4084100'>times</span> <span
  m='4084390'>polynomial</span> <span m='4084770'>in n.</span> <span
  m='4085850'>That's</span> <span m='4086040'>ideal.</span> <span
  m='4086470'>If</span> <span m='4086600'>you</span> <span
  m='4086670'>have</span> <span m='4086850'>an</span> <span
  m='4086930'>FPTAS,</span> <span m='4087530'>it</span> <span
  m='4087660'>is</span> <span m='4087770'>also</span> <span
  m='4088120'>an</span> <span m='4088210'>EPTAS.</span> <span
  m='4089820'>You</span> <span m='4089950'>just</span> <span
  m='4090230'>remove--</span> <span m='4090870'>or</span> <span
  m='4091080'>you</span> <span m='4091190'>just</span> <span
  m='4091360'>add</span> <span m='4091580'>one</span> <span
  m='4091770'>more</span> <span m='4092040'>stroke</span> <span
  m='4092360'>to</span> <span m='4092480'>the</span> <span
  m='4092810'>first</span> <span m='4093060'>letter.</span> <span
  m='4093952'>And you</span> <span m='4094400'>got</span> <span
  m='4094540'>an</span> <span m='4094630'>EPTAS.</span> <span
  m='4096370'>And</span> <span m='4096620'>last</span> <span
  m='4096930'>class</span> <span m='4097050'>we</span> <span
  m='4097140'>actually</span> <span m='4097350'>saw</span> <span
  m='4097800'>an</span> <span m='4097979'>EPTAS.</span> <span
  m='4098930'>For</span> <span m='4099130'>subset</span> <span
  m='4099600'>sum,</span> <span m='4099870'>we</span> <span
  m='4099970'>saw</span> <span m='4100380'>2</span> <span m='4100659'>to</span>
  <span m='4100939'>the</span> <span m='4101040'>1</span> <span
  m='4101220'>over</span> <span m='4101390'>epsilon</span> <span
  m='4102270'>times</span> <span m='4102600'>n.</span> <span
  m='4103960'>Now,</span> <span m='4104090'>in</span> <span
  m='4104160'>fact,</span> <span m='4104500'>for</span> <span
  m='4104590'>that</span> <span m='4104760'>problem,</span> <span
  m='4105000'>there's</span> <span m='4105189'>an</span> <span
  m='4105270'>FPTAS.</span> <span m='4105859'>Even</span> <span
  m='4106069'>better.</span> </p><p><span m='4107010'>But</span> <span
  m='4107250'>you</span> <span m='4107420'>can</span> <span
  m='4107550'>see</span> <span m='4107880'>from</span> <span
  m='4108080'>last</span> <span m='4108290'>lecture</span> <span
  m='4108609'>why</span> <span m='4109330'>it's</span> <span
  m='4109529'>nice</span> <span m='4109870'>to</span> <span
  m='4110020'>have</span> <span m='4110270'>an</span> <span
  m='4110359'>exponential</span> <span m='4110880'>dependence</span> <span
  m='4111300'>on</span> <span m='4111370'>1</span> <span m='4111520'>over</span>
  <span m='4111660'>epsilon.</span> <span m='4112350'>And</span> <span
  m='4112609'>what</span> <span m='4112750'>this</span> <span
  m='4112930'>is</span> <span m='4113010'>saying</span> <span
  m='4113279'>is</span> <span m='4113359'>you</span> <span
  m='4113479'>can</span> <span m='4113609'>do</span> <span
  m='4113760'>that</span> <span m='4114170'>as</span> <span
  m='4114380'>long</span> <span m='4114680'>as that</span> <span
  m='4114779'>exponential</span> <span m='4115450'>dependence</span> <span
  m='4115970'>is</span> <span m='4116200'>separated</span> <span
  m='4116939'>from</span> <span m='4117149'>the</span> <span m='4117250'>n
  part.</span> <span m='4118660'>If</span> <span m='4118790'>it's</span> <span
  m='4119590'>multiplicatively</span> <span m='4120439'>or</span> <span
  m='4120800'>additively</span> <span m='4121330'>separated,</span> <span
  m='4121880'>as</span> <span m='4121979'>you</span> <span
  m='4122080'>might</span> <span m='4122250'>imagine,</span> <span
  m='4122600'>it's</span> <span m='4122689'>the</span> <span
  m='4122779'>same</span> <span m='4123000'>thing,</span> <span
  m='4123960'>from</span> <span m='4124220'>n,</span> <span
  m='4125040'>then</span> <span m='4125420'>we</span> <span
  m='4125510'>call</span> <span m='4125720'>this</span> <span
  m='4125870'>an</span> <span m='4126069'>efficient</span> <span
  m='4126670'>PTAS.</span> <span m='4127170'>Not</span> <span
  m='4127439'>fully,</span> <span m='4127859'>not</span> <span
  m='4128029'>quite</span> <span m='4128300'>as</span> <span
  m='4128430'>good</span> <span m='4128620'>as</span> <span
  m='4128760'>an</span> <span m='4128890'>FPTAS,</span> <span
  m='4129550'>but</span> <span m='4129720'>close.</span> <span
  m='4131410'>And</span> <span m='4131540'>as</span> <span
  m='4131660'>long</span> <span m='4131960'>as</span> <span
  m='4132020'>you</span> <span m='4132109'>have</span> <span
  m='4132330'>such</span> <span m='4132540'>a</span> <span
  m='4132600'>thing,</span> <span m='4133170'>you</span> <span
  m='4133319'>can</span> <span m='4133450'>convert</span> <span
  m='4133830'>it</span> <span m='4134300'>into</span> <span
  m='4134740'>an</span> <span m='4134840'>FPT</span> <span
  m='4135310'>algorithm</span> <span m='4135760'>for</span> <span
  m='4135899'>the</span> <span m='4136010'>decision</span> <span
  m='4136399'>problem.</span> </p><p><span m='4137870'>The</span> <span
  m='4138090'>way</span> <span m='4138240'>this</span> <span
  m='4138430'>is</span> <span m='4138550'>typically</span> <span
  m='4139069'>used--</span> <span m='4139479'>so</span> <span
  m='4139590'>this</span> <span m='4139760'>tells</span> <span
  m='4140010'>us</span> <span m='4140130'>we</span> <span m='4140220'>get
  an</span> <span m='4140399'>FPT</span> <span m='4140819'>algorithm</span>
  <span m='4141160'>for</span> <span m='4141319'>subset</span> <span
  m='4141710'>sum.</span> <span m='4143040'>In</span> <span
  m='4143260'>fact,</span> <span m='4143890'>because</span> <span
  m='4144069'>there's</span> <span m='4144220'>an</span> <span
  m='4144330'>FPTAS,</span> <span m='4145040'>we</span> <span
  m='4145189'>get</span> <span m='4146279'>a</span> <span
  m='4146370'>pseudo</span> <span m='4147080'>polynomial</span> <span
  m='4147670'>time</span> <span m='4147910'>algorithm,</span> <span
  m='4148439'>which</span> <span m='4148580'>is</span> <span
  m='4148710'>in</span> <span m='4148790'>some</span> <span
  m='4148970'>sense</span> <span m='4149200'>better.</span> <span
  m='4150330'>Anyway.</span> <span m='4151550'>The</span> <span
  m='4151649'>way</span> <span m='4151760'>this</span> <span
  m='4151970'>theorem</span> <span m='4152180'>is</span> <span
  m='4152240'>usually</span> <span m='4152580'>used</span> <span m='4153000'>is
  in</span> <span m='4153200'>the</span> <span
  m='4153290'>contrapositive.</span> <span m='4154220'>What</span> <span
  m='4154390'>this</span> <span m='4154540'>tells</span> <span
  m='4154819'>us</span> <span m='4154950'>is</span> <span
  m='4155149'>that</span> <span m='4155779'>if</span> <span
  m='4156029'>we</span> <span m='4156160'>can</span> <span
  m='4156310'>find</span> <span m='4156550'>a</span> <span
  m='4156609'>problem</span> <span m='4156990'>that</span> <span
  m='4157130'>is</span> <span m='4157270'>not</span> <span
  m='4157850'>FPT--</span> <span m='4158720'>and</span> <span
  m='4158870'>there's</span> <span m='4159029'>a</span> <span
  m='4159080'>whole</span> <span m='4159330'>theory</span> <span
  m='4159680'>like</span> <span m='4159960'>NP</span> <span
  m='4160520'>completeness</span> <span m='4161120'>for</span> <span
  m='4161260'>showing</span> <span m='4161520'>the</span> <span
  m='4161609'>problems</span> <span m='4161979'>are</span> <span
  m='4162300'>almost</span> <span m='4162609'>certainly</span> <span
  m='4162930'>not</span> <span m='4163350'>fixed</span> <span
  m='4163580'>parameter</span> <span m='4163899'>tractable--</span> <span
  m='4164859'>then</span> <span m='4165069'>we</span> <span
  m='4165180'>know</span> <span m='4165460'>that</span> <span
  m='4165640'>there</span> <span m='4165819'>is</span> <span
  m='4165939'>not</span> <span m='4166850'>an</span> <span
  m='4167010'>EPTAS.</span> </p><p><span m='4168670'>And</span> <span
  m='4168890'>this</span> <span m='4169080'>is</span> <span
  m='4169250'>the</span> <span m='4169350'>state</span> <span
  m='4169580'>of</span> <span m='4169649'>the</span> <span
  m='4169770'>art</span> <span m='4169930'>for</span> <span
  m='4170029'>proving</span> <span m='4170460'>that</span> <span
  m='4170609'>these</span> <span m='4170830'>kinds</span> <span
  m='4171090'>of</span> <span m='4171149'>algorithms</span> <span
  m='4171569'>do</span> <span m='4171680'>not</span> <span
  m='4171970'>exist.</span> <span m='4172990'>Typically,</span> <span
  m='4173510'>you</span> <span m='4173880'>look</span> <span
  m='4174130'>at</span> <span m='4174250'>it</span> <span
  m='4174340'>from</span> <span m='4174490'>a</span> <span
  m='4174550'>fixed</span> <span m='4174770'>parameter</span> <span
  m='4175100'>perspective,</span> <span m='4175960'>and</span> <span
  m='4176100'>show</span> <span m='4176229'>that</span> <span
  m='4176649'>probably</span> <span m='4177080'>doesn't</span> <span
  m='4177340'>exist.</span> <span m='4177689'>Then</span> <span
  m='4177819'>you</span> <span m='4177910'>get</span> <span
  m='4178060'>that</span> <span m='4178170'>this</span> <span
  m='4178370'>probably</span> <span m='4178790'>doesn't</span> <span
  m='4179040'>exist.</span> <span m='4179965'>OK.</span> <span
  m='4180390'>Let's</span> <span m='4180630'>prove</span> <span
  m='4180840'>this</span> <span m='4181020'>theorem.</span> <span
  m='4181735'>It's,</span> <span m='4182080'>again,</span> <span
  m='4182590'>really</span> <span m='4182859'>easy.</span> <span
  m='4185819'>But</span> <span m='4186020'>a</span> <span
  m='4186080'>nice</span> <span m='4186399'>connection</span> <span
  m='4186830'>between</span> <span m='4187160'>these</span> <span
  m='4187330'>two</span> <span m='4187510'>worlds.</span> <span m='4199935'>All
  right.</span> </p><p><span m='4204340'>So</span> <span
  m='4204620'>there</span> <span m='4204780'>are</span> <span
  m='4204820'>two</span> <span m='4204980'>cases--</span> <span
  m='4205520'>the</span> <span m='4205730'>optimization</span> <span
  m='4206350'>problem</span> <span m='4206610'>we're</span> <span
  m='4206730'>thinking</span> <span m='4207010'>about</span> <span
  m='4207650'>could</span> <span m='4207790'>be</span> <span
  m='4207940'>a</span> <span m='4207990'>minimization</span> <span
  m='4208730'>or</span> <span m='4208840'>maximization</span> <span
  m='4209580'>problem.</span> <span m='4210300'>Let's</span> <span
  m='4210520'>say</span> <span m='4211040'>it's</span> <span
  m='4211880'>maximization,</span> <span m='4213860'>just</span> <span
  m='4214110'>to</span> <span m='4214190'>be</span> <span
  m='4214340'>concrete.</span> <span m='4214675'>It</span> <span
  m='4215010'>won't</span> <span m='4215250'>make</span> <span
  m='4215560'>too</span> <span m='4215840'>much</span> <span
  m='4216080'>difference,</span> <span m='4216480'>but</span> <span
  m='4216620'>it</span> <span m='4216670'>will</span> <span
  m='4216800'>make</span> <span m='4217620'>a</span> <span
  m='4217750'>tiny</span> <span m='4218030'>difference</span> <span
  m='4219160'>in</span> <span m='4219300'>order</span> <span
  m='4219570'>of--</span> <span m='4219840'>or</span> <span
  m='4220150'>the</span> <span m='4220370'>inequality</span> <span
  m='4220930'>directions.</span> <span m='4225640'>OK.</span> <span
  m='4226090'>So</span> <span m='4226860'>what</span> <span
  m='4227050'>we're</span> <span m='4227170'>going</span> <span
  m='4227300'>to</span> <span m='4227390'>do.</span> <span m='4228580'>So</span>
  <span m='4228690'>we're</span> <span m='4228810'>given</span> <span
  m='4229200'>an</span> <span m='4229460'>EPTAS,</span> <span
  m='4230450'>and</span> <span m='4230620'>we</span> <span
  m='4230690'>want</span> <span m='4231010'>to</span> <span
  m='4231140'>solve</span> <span m='4231660'>FPT.</span> <span
  m='4232950'>We</span> <span m='4233050'>want an</span> <span
  m='4233400'>FPT</span> <span m='4233820'>algorithm.</span> <span
  m='4235760'>So</span> <span m='4235960'>what</span> <span
  m='4236070'>do</span> <span m='4236140'>we</span> <span m='4236240'>do?</span>
  <span m='4237150'>Well, an</span> <span m='4237250'>algorithm</span> <span
  m='4237750'>is</span> <span m='4237850'>going</span> <span
  m='4237980'>to</span> <span m='4238060'>be</span> <span m='4238310'>to</span>
  <span m='4238480'>run</span> <span m='4238720'>that</span> <span
  m='4238870'>EPTAS.</span> <span m='4239460'>That's sort of</span> <span
  m='4239760'>the</span> <span m='4239870'>only</span> <span
  m='4240060'>thing</span> <span m='4240190'>we</span> <span
  m='4240280'>can</span> <span m='4240410'>do.</span> </p><p><span
  m='4240950'>Now</span> <span m='4241090'>the</span> <span
  m='4241210'>EPTAS--</span> <span m='4241870'>this</span> <span
  m='4242030'>is</span> <span m='4242140'>an</span> <span
  m='4242200'>approximation</span> <span m='4242770'>scheme.</span> <span
  m='4243580'>It</span> <span m='4243720'>has</span> <span m='4243900'>an</span>
  <span m='4244020'>extra</span> <span m='4244360'>input</span> <span
  m='4244770'>which</span> <span m='4244960'>is</span> <span
  m='4245150'>epsilon.</span> <span m='4247120'>We</span> <span
  m='4247340'>need</span> <span m='4247530'>to</span> <span
  m='4247610'>choose</span> <span m='4247930'>epsilon,</span> <span
  m='4248380'>because</span> <span m='4248520'>we're</span> <span
  m='4248650'>not--</span> <span m='4249280'>we're</span> <span
  m='4249410'>trying</span> <span m='4249600'>to</span> <span
  m='4249670'>solve</span> <span m='4249920'>it</span> <span
  m='4249960'>exactly.</span> <span m='4251250'>But</span> <span
  m='4251360'>there's</span> <span m='4251570'>no</span> <span
  m='4251760'>epsilon</span> <span m='4252230'>in that</span> <span
  m='4252410'>problem,</span> <span m='4252800'>so</span> <span
  m='4252960'>we</span> <span m='4253040'>got</span> <span m='4253160'>to</span>
  <span m='4253200'>make</span> <span m='4253400'>one</span> <span
  m='4253560'>up.</span> <span m='4254580'>Let's</span> <span
  m='4254720'>run</span> <span m='4254980'>the</span> <span
  m='4255430'>EPTAS</span> <span m='4258660'>with--</span> <span
  m='4260150'>anyone</span> <span m='4260300'>have</span> <span
  m='4260450'>good</span> <span m='4260580'>intuition?</span> <span
  m='4261250'>What</span> <span m='4261430'>should</span> <span
  m='4261600'>epsilon</span> <span m='4261990'>be?</span> <span
  m='4268438'>Yeah.</span> <span m='4269440'>Remind you of</span> <span
  m='4269890'>this.</span> <span m='4279740'>Tricky.</span> <span
  m='4283650'>We</span> <span m='4283740'>want</span> <span
  m='4283910'>epsilon</span> <span m='4284220'>to</span> <span
  m='4284280'>be</span> <span m='4284400'>small.</span> <span
  m='4285120'>Yeah.</span> </p><p><span m='4285590'>AUDIENCE: It should be 1
  over k.</span> </p><p><span m='4286800'>ERIK DEMAINE: 1</span> <span
  m='4287130'>over</span> <span m='4287405'>k is</span> <span
  m='4287680'>almost</span> <span m='4288310'>right.</span> <span
  m='4289820'>Anything</span> <span m='4290430'>less</span> <span
  m='4290660'>than</span> <span m='4290770'>that</span> <span m='4290970'>would
  work.</span> <span m='4292370'>So</span> <span m='4292620'>I'll</span> <span
  m='4292880'>use</span> <span m='4293530'>1</span> <span
  m='4293760'>over</span> <span m='4294230'>2k,</span> <span
  m='4295450'>but</span> <span m='4296010'>1</span> <span
  m='4296190'>over</span> <span m='4296400'>k</span> <span
  m='4296600'>plus</span> <span m='4296860'>1</span> <span
  m='4297130'>would</span> <span m='4297280'>also</span> <span
  m='4297560'>work.</span> <span m='4298990'>Or</span> <span
  m='4299160'>anything</span> <span m='4299710'>a</span> <span
  m='4299770'>little</span> <span m='4300040'>bit--</span> <span
  m='4300460'>1</span> <span m='4300690'>over</span> <span
  m='4301440'>k--</span> <span m='4302604'>yeah--</span> <span
  m='4304540'>1</span> <span m='4304640'>over</span> <span m='4304780'>k</span>
  <span m='4304980'>plus</span> <span m='4305900'>.00001</span> <span
  m='4307050'>something.</span> <span m='4309230'>Anything</span> <span
  m='4309500'>a</span> <span m='4309550'>little</span> <span
  m='4309770'>bit</span> <span m='4309890'>less</span> <span
  m='4310090'>than</span> <span m='4310190'>1</span> <span
  m='4310350'>over</span> <span m='4310490'>k</span> <span
  m='4311280'>will</span> <span m='4311510'>turn</span> <span
  m='4311710'>out</span> <span m='4311820'>to</span> <span
  m='4311900'>work.</span> <span m='4313040'>So,</span> <span
  m='4313530'>why?</span> </p><p><span m='4315230'>So</span> <span
  m='4315360'>first</span> <span m='4315600'>of all,</span> <span
  m='4315730'>how</span> <span m='4315850'>much</span> <span
  m='4316900'>time</span> <span m='4317150'>does</span> <span
  m='4317270'>this</span> <span m='4317440'>take?</span> <span
  m='4319770'>Well,</span> <span m='4320150'>we</span> <span
  m='4320340'>were</span> <span m='4320480'>given</span> <span
  m='4321050'>this</span> <span m='4321280'>running</span> <span
  m='4321560'>time.</span> <span m='4322820'>1</span> <span
  m='4323060'>over</span> <span m='4323250'>this</span> <span m='4323670'>is
  2k.</span> <span m='4324570'>So</span> <span m='4325670'>this</span> <span
  m='4325900'>is</span> <span m='4326010'>going</span> <span
  m='4326130'>to</span> <span m='4326210'>take</span> <span m='4326850'>f</span>
  <span m='4327210'>of</span> <span m='4327450'>2k</span> <span
  m='4327700'>time</span> <span m='4330160'>times</span> <span
  m='4330490'>polynomial</span> <span m='4330800'>in n.</span> <span
  m='4334390'>OK.</span> <span m='4334520'>We</span> <span
  m='4334630'>need</span> <span m='4334930'>to</span> <span
  m='4335090'>connect</span> <span m='4335660'>E</span> <span
  m='4335910'>and</span> <span m='4336060'>k,</span> <span
  m='4336390'>because</span> <span m='4336730'>we're</span> <span
  m='4336810'>given--</span> <span m='4337500'>sorry--</span> <span
  m='4337720'>epsilon</span> <span m='4338250'>and</span> <span
  m='4338350'>k,</span> <span m='4339080'>because</span> <span
  m='4339610'>we're</span> <span m='4339710'>given</span> <span
  m='4339970'>something</span> <span m='4340600'>whose</span> <span
  m='4340740'>running</span> <span m='4340970'>time</span> <span
  m='4341160'>depends</span> <span m='4341460'>on</span> <span
  m='4341660'>epsilon</span> <span m='4342140'>not</span> <span
  m='4342410'>k.</span> <span m='4343270'>Now</span> <span
  m='4343470'>we're</span> <span m='4343580'>setting</span> <span
  m='4343940'>epsilon</span> <span m='4344360'>in terms of</span> <span
  m='4344590'>k,</span> <span m='4344870'>so</span> <span m='4345010'>now</span>
  <span m='4345260'>the</span> <span m='4345370'>running</span> <span
  m='4345600'>time</span> <span m='4345870'>is</span> <span m='4345970'>a</span>
  <span m='4346040'>function</span> <span m='4346360'>of</span> <span
  m='4346460'>k,</span> <span m='4347470'>not</span> <span
  m='4347640'>epsilon.</span> <span m='4348980'>And</span> <span
  m='4349260'>then</span> <span m='4349640'>times</span> <span
  m='4350085'>n.</span> <span m='4351350'>So</span> <span
  m='4351540'>this</span> <span m='4351740'>is</span> <span
  m='4351780'>good.</span> <span m='4352000'>This</span> <span
  m='4352150'>looks</span> <span m='4352340'>like</span> <span
  m='4352540'>an</span> <span m='4352610'>FPT</span> <span
  m='4353130'>running</span> <span m='4353390'>time.</span> </p><p><span
  m='4354910'>I</span> <span m='4354990'>claim</span> <span
  m='4356420'>we</span> <span m='4356620'>found</span> <span
  m='4357040'>that</span> <span m='4357140'>the</span> <span
  m='4357180'>answer.</span> <span m='4360860'>OK.</span> <span
  m='4360960'>This</span> <span m='4361080'>is</span> <span
  m='4361210'>maybe</span> <span m='4361460'>the</span> <span
  m='4361580'>surprising</span> <span m='4361980'>part.</span> <span
  m='4362220'>You</span> <span m='4362300'>had</span> <span
  m='4362490'>good</span> <span m='4362640'>intuition</span> <span
  m='4363450'>here.</span> <span m='4365110'>And</span> <span
  m='4365250'>the</span> <span m='4365560'>intuition</span> <span
  m='4365990'>is</span> <span m='4366100'>just</span> <span
  m='4366320'>that--</span> <span m='4367130'>if</span> <span
  m='4367300'>you're</span> <span m='4367580'>this</span> <span
  m='4368010'>close</span> <span m='4368430'>to</span> <span
  m='4368530'>optimal,</span> <span m='4369760'>and</span> <span
  m='4370220'>optimal</span> <span m='4370680'>is</span> <span
  m='4370800'>actually an</span> <span m='4371190'>integer,</span> <span
  m='4371690'>and</span> <span m='4371820'>you</span> <span
  m='4371970'>found</span> <span m='4372340'>an</span> <span
  m='4372440'>integer,</span> <span m='4373510'>then</span> <span
  m='4374610'>you're</span> <span m='4374830'>going</span> <span
  m='4374980'>to</span> <span m='4375040'>be</span> <span
  m='4375290'>less</span> <span m='4375650'>than</span> <span
  m='4375780'>1</span> <span m='4375980'>away,</span> <span
  m='4376320'>which</span> <span m='4376530'>means</span> <span
  m='4376690'>you're</span> <span m='4376810'>actually</span> <span
  m='4377150'>the</span> <span m='4377280'>same</span> <span
  m='4377500'>thing.</span> <span m='4378412'>OK.</span> <span
  m='4378760'>But</span> <span m='4378880'>let's</span> <span
  m='4379230'>do</span> <span m='4379360'>it</span> <span
  m='4379600'>more</span> <span m='4379720'>formally.</span> </p><p><span
  m='4391350'>So</span> <span m='4391550'>we're</span> <span
  m='4391660'>within</span> <span m='4391970'>a</span> <span
  m='4392040'>1</span> <span m='4392320'>plus</span> <span
  m='4392570'>epsilon</span> <span m='4393020'>factor.</span> <span
  m='4393950'>I'm</span> <span m='4394070'>going</span> <span
  m='4394170'>to</span> <span m='4394230'>call</span> <span
  m='4394420'>the</span> <span m='4394550'>epsilon</span> <span
  m='4395010'>part</span> <span m='4395720'>relative</span> <span
  m='4396180'>error.</span> <span m='4396845'>All right.</span> <span
  m='4397190'>That's</span> <span m='4397510'>how</span> <span
  m='4397650'>much</span> <span m='4398000'>it</span> <span
  m='4398210'>gets</span> <span m='4398480'>multiplied</span> <span
  m='4399170'>by</span> <span m='4399430'>OPT</span> <span m='4400920'>in</span>
  <span m='4401130'>order</span> <span m='4401330'>to</span> <span
  m='4401710'>compute</span> <span m='4402140'>the</span> <span
  m='4402710'>error</span> <span m='4402940'>bound.</span> <span
  m='4404520'>So</span> <span m='4404740'>the</span> <span
  m='4404860'>relative</span> <span m='4405300'>error</span> <span
  m='4406070'>is</span> <span m='4406450'>epsilon.</span> <span
  m='4407830'>Epsilon</span> <span m='4408440'>is--</span> <span
  m='4409250'>I</span> <span m='4409370'>guess</span> <span
  m='4409570'>is--</span> <span m='4409700'>at</span> <span
  m='4409800'>most</span> <span m='4410100'>epsilon--</span> <span
  m='4411170'>epsilon</span> <span m='4411720'>is</span> <span
  m='4412010'>1</span> <span m='4412280'>over</span> <span
  m='4412510'>2k,</span> <span m='4414820'>which</span> <span m='4415180'>all
  I'm</span> <span m='4415450'>going</span> <span m='4415570'>to</span> <span
  m='4415630'>need</span> <span m='4415860'>is</span> <span m='4416100'>that
  this</span> <span m='4416260'>is</span> <span m='4416330'>strictly</span>
  <span m='4416710'>less</span> <span m='4416990'>than</span> <span
  m='4417110'>1</span> <span m='4417290'>over</span> <span m='4417520'>k.</span>
  </p><p><span m='4420720'>So</span> <span m='4420990'>this</span> <span
  m='4421230'>means</span> <span m='4421840'>if</span> <span
  m='4422010'>I</span> <span m='4422070'>look</span> <span m='4422320'>at</span>
  <span m='4422450'>absolute</span> <span m='4423120'>error--</span> <span
  m='4427760'>so</span> <span m='4427890'>in</span> <span
  m='4428060'>case</span> <span m='4428280'>you're</span> <span
  m='4428400'>not</span> <span m='4428580'>familiar--</span> <span
  m='4428900'>relative</span> <span m='4429270'>error</span> <span
  m='4429470'>is</span> <span m='4429660'>I</span> <span m='4429740'>take</span>
  <span m='4430720'>my</span> <span m='4430920'>approximate</span> <span
  m='4431520'>solution--</span> <span m='4434840'>I</span> <span
  m='4435070'>subtract</span> <span m='4435700'>off,</span> <span
  m='4436390'>let's</span> <span m='4436550'>say</span> <span
  m='4436640'>the</span> <span m='4436800'>optimal</span> <span
  m='4437180'>solution,</span> <span m='4437600'>did</span> <span
  m='4437700'>I</span> <span m='4437800'>get</span> <span m='4437900'>this
  right?</span> <span m='4438220'>This</span> <span m='4438400'>is</span> <span
  m='4438570'>a</span> <span m='4438650'>maximization</span> <span
  m='4439590'>problem.</span> <span m='4440440'>So</span> <span
  m='4440580'>yeah, my</span> <span m='4441010'>solution's</span> <span
  m='4441510'>presumably--</span> <span m='4442280'>no,</span> <span
  m='4442430'>it's</span> <span m='4442540'>going</span> <span
  m='4442640'>to</span> <span m='4442680'>be the other way</span> <span
  m='4442850'>around.</span> </p><p><span m='4444200'>For</span> <span
  m='4444290'>maximization</span> <span m='4444930'>problem,</span> <span
  m='4445300'>it's</span> <span m='4445480'>going</span> <span
  m='4445620'>to</span> <span m='4445690'>be--</span> <span
  m='4446400'>the</span> <span m='4446500'>optimal</span> <span
  m='4446930'>could</span> <span m='4447070'>be</span> <span
  m='4447180'>bigger</span> <span m='4447460'>than</span> <span
  m='4447600'>me,</span> <span m='4448140'>so</span> <span m='4448270'>I</span>
  <span m='4448360'>take</span> <span m='4448560'>that</span> <span
  m='4448780'>difference--</span> <span m='4449600'>this</span> <span
  m='4449820'>is</span> <span m='4449960'>called</span> <span
  m='4450390'>absolute</span> <span m='4450850'>error.</span> <span
  m='4451900'>OK.</span> <span m='4452200'>And</span> <span
  m='4452540'>relative</span> <span m='4452960'>error is</span> <span
  m='4453250'>when</span> <span m='4453360'>I</span> <span
  m='4453430'>just</span> <span m='4453610'>divide</span> <span
  m='4453930'>that</span> <span m='4454260'>by OPT.</span> <span
  m='4455640'>That's</span> <span m='4455860'>relative</span> <span
  m='4456200'>error.</span> <span m='4456690'>So</span> <span
  m='4457880'>I</span> <span m='4458070'>have</span> <span
  m='4458290'>this</span> <span m='4458450'>one</span> <span
  m='4458840'>part</span> <span m='4459130'>already.</span> <span
  m='4459530'>So</span> <span m='4459900'>usually</span> <span m='4460280'>you
  state it</span> <span m='4460510'>in</span> <span m='4460610'>terms</span>
  <span m='4460800'>of</span> <span m='4460850'>1</span> <span
  m='4461010'>plus</span> <span m='4461200'>epsilon.</span> <span
  m='4461610'>If</span> <span m='4461690'>you</span> <span
  m='4461770'>state</span> <span m='4462000'>it in</span> <span
  m='4462440'>terms</span> <span m='4462640'>of</span> <span
  m='4462840'>relative</span> <span m='4463210'>error,</span> <span
  m='4463500'>the</span> <span m='4463510'>1</span> <span
  m='4463730'>disappears.</span> <span m='4464390'>You just</span> <span
  m='4464840'>get</span> <span m='4464980'>epsilon.</span> </p><p><span
  m='4466010'>The</span> <span m='4466140'>absolute</span> <span
  m='4466490'>error</span> <span m='4466820'>which</span> <span
  m='4467040'>is</span> <span m='4467180'>OPT</span> <span
  m='4467420'>minus</span> <span m='4467790'>APX</span> <span
  m='4468820'>is</span> <span m='4469070'>I</span> <span m='4469140'>take</span>
  <span m='4469390'>the</span> <span m='4469580'>relative</span> <span
  m='4469980'>error</span> <span m='4470610'>and</span> <span
  m='4470760'>I</span> <span m='4470820'>multiply</span> <span
  m='4471540'>it</span> <span m='4471810'>by</span> <span
  m='4472070'>OPT.</span> <span m='4474013'>OK.</span> <span
  m='4475430'>So</span> <span m='4475590'>relative</span> <span
  m='4476020'>error</span> <span m='4476660'>is</span> <span
  m='4476830'>going</span> <span m='4476990'>to</span> <span
  m='4477060'>be</span> <span m='4477260'>less</span> <span
  m='4477750'>than</span> <span m='4477960'>1</span> <span m='4478990'>if</span>
  <span m='4480610'>OPT</span> <span m='4481850'>is--</span> <span
  m='4483910'>I</span> <span m='4484000'>guess--</span> <span
  m='4485200'>greater</span> <span m='4485690'>than</span> <span
  m='4485840'>or</span> <span m='4485920'>equal</span> <span
  m='4486120'>to</span> <span m='4486180'>k?</span> <span m='4488400'>I</span>
  <span m='4488450'>have</span> <span m='4488580'>less</span> <span
  m='4488840'>than</span> <span m='4488960'>in</span> <span
  m='4489000'>my</span> <span m='4489160'>notes.</span> <span
  m='4489570'>But</span> <span m='4490570'>if</span> <span
  m='4491070'>OPT</span> <span m='4491510'>is</span> <span
  m='4491860'>greater</span> <span m='4492490'>than</span> <span
  m='4492640'>or</span> <span m='4492700'>equal</span> <span
  m='4492920'>to</span> <span m='4493000'>k,</span> <span
  m='4493880'>then</span> <span m='4494210'>absolute</span> <span
  m='4494640'>error</span> <span m='4494890'>is</span> <span
  m='4495270'>less</span> <span m='4495650'>than</span> <span
  m='4496310'>1.</span> <span m='4496870'>Right?</span> <span m='4498850'>I
  hope.</span> <span m='4500190'>Let's</span> <span m='4500430'>check.</span>
  </p><p><span m='4501690'>The</span> <span m='4501880'>relative</span> <span
  m='4502360'>error</span> <span m='4502640'>is</span> <span
  m='4502860'>actually</span> <span m='4505250'>OPT</span> <span
  m='4505660'>divided</span> <span m='4506120'>by</span> <span
  m='4506250'>k.</span> <span m='4506780'>Oops.</span> <span m='4506830'>No,
  I've got</span> <span m='4507070'>it the</span> <span m='4507260'>wrong way
  around.</span> <span m='4508246'>It's</span> <span m='4508740'>correct</span>
  <span m='4509000'>in my notes.</span> <span m='4510700'>OK.</span> <span
  m='4511280'>Relative</span> <span m='4511640'>error</span> <span
  m='4511950'>is</span> <span m='4512240'>this</span> <span
  m='4512480'>thing.</span> <span m='4513220'>It's</span> <span
  m='4513280'>going</span> <span m='4513390'>to</span> <span
  m='4513430'>be</span> <span m='4513530'>strictly</span> <span
  m='4513960'>less</span> <span m='4514270'>than</span> <span
  m='4515080'>OPT</span> <span m='4515770'>divided</span> <span
  m='4516100'>by</span> <span m='4516220'>k.</span> <span
  m='4516800'>This</span> <span m='4516990'>thing</span> <span
  m='4517170'>times</span> <span m='4517430'>OPT.</span> <span
  m='4518440'>OK.</span> <span m='4518660'>So as</span> <span
  m='4518810'>long</span> <span m='4519150'>as</span> <span
  m='4519310'>OPT</span> <span m='4519680'>is</span> <span
  m='4520120'>less</span> <span m='4520430'>than</span> <span
  m='4520530'>or</span> <span m='4520630'>equal</span> <span
  m='4520660'>to</span> <span m='4520730'>k,</span> <span
  m='4521320'>this</span> <span m='4521560'>thing</span> <span
  m='4521760'>will</span> <span m='4521870'>be</span> <span
  m='4522010'>strictly</span> <span m='4522500'>less</span> <span
  m='4522760'>than</span> <span m='4522890'>1.</span> <span
  m='4525910'>That's</span> <span m='4526130'>good.</span> <span
  m='4526340'>OPT</span> <span m='4526660'>error</span> <span
  m='4527140'>less</span> <span m='4527410'>than</span> <span
  m='4527550'>1</span> <span m='4528160'>for</span> <span m='4528330'>an</span>
  <span m='4528410'>integer</span> <span m='4529070'>means</span> <span
  m='4529300'>that</span> <span m='4529390'>we</span> <span
  m='4529500'>actually</span> <span m='4529760'>have</span> <span
  m='4529990'>the</span> <span m='4530080'>same</span> <span
  m='4530470'>value.</span> </p><p><span m='4532638'>I  have</span> <span
  m='4533070'>that</span> <span m='4533240'>written</span> <span
  m='4533450'>down</span> <span m='4533650'>more</span> <span
  m='4533790'>formally.</span> <span m='4535060'>So</span> <span
  m='4536730'>let's go here.</span> <span m='4540870'>So</span> <span
  m='4542390'>if</span> <span m='4542730'>we</span> <span
  m='4543070'>find</span> <span m='4544760'>an</span> <span
  m='4544860'>integral</span> <span m='4545240'>solution--</span> <span
  m='4552654'>of</span> <span m='4553140'>value--</span> <span
  m='4555720'>values</span> <span m='4556220'>the</span> <span
  m='4556380'>objective</span> <span m='4556790'>function</span> <span
  m='4557080'>we're</span> <span m='4557170'>trying</span> <span
  m='4557360'>to</span> <span m='4557420'>maximize.</span> <span
  m='4558690'>Let's</span> <span m='4558940'>say</span> <span
  m='4559580'>we</span> <span m='4559920'>achieve</span> <span
  m='4560300'>something</span> <span m='4564090'>value</span> <span
  m='4564780'>less</span> <span m='4565430'>than</span> <span
  m='4565580'>or</span> <span m='4565660'>equal</span> <span
  m='4565920'>to</span> <span m='4566000'>k.</span> <span m='4570720'>Which
  it</span> <span m='4570770'>better</span> <span m='4571030'>be</span> <span
  m='4571190'>about</span> <span m='4571460'>if</span> <span
  m='4571590'>OPT</span> <span m='4571800'>is less than</span> <span
  m='4572020'>or equal</span> <span m='4572090'>to k.</span> <span
  m='4574090'>Then</span> <span m='4576580'>OPT--</span> <span
  m='4594876'>OK--</span> <span m='4595870'>this</span> <span
  m='4596110'>is</span> <span m='4596260'>basically</span> <span
  m='4596590'>doing</span> <span m='4596750'>the</span> <span
  m='4596830'>computation</span> <span m='4597310'>again</span> <span
  m='4597730'>in</span> <span m='4597840'>another</span> <span
  m='4598130'>way.</span> </p><p><span m='4598960'>We</span> <span
  m='4599190'>had</span> <span m='4599390'>1</span> <span
  m='4599730'>plus</span> <span m='4600040'>epsilon.</span> <span
  m='4600520'>Epsilon's</span> <span m='4600910'>chosen</span> <span
  m='4601310'>to</span> <span m='4601380'>be</span> <span m='4601570'>1/2</span>
  <span m='4601960'>1</span> <span m='4602070'>over</span> <span
  m='4602260'>k.</span> <span m='4603460'>And</span> <span
  m='4603660'>then</span> <span m='4603920'>k</span> <span
  m='4604930'>was</span> <span m='4605270'>the</span> <span
  m='4606290'>solution</span> <span m='4606670'>value</span> <span
  m='4606970'>that</span> <span m='4607160'>we</span> <span
  m='4607580'>found.</span> <span m='4608130'>And</span> <span
  m='4608260'>so</span> <span m='4608380'>we</span> <span
  m='4608470'>have</span> <span m='4608660'>this</span> <span
  m='4608940'>relation</span> <span m='4609310'>between</span> <span
  m='4609540'>OPT</span> <span m='4609850'>and</span> <span
  m='4610060'>the</span> <span m='4610130'>thing.</span> <span
  m='4611510'>And</span> <span m='4611710'>therefore--</span> <span
  m='4613040'>and</span> <span m='4613390'>this</span> <span
  m='4613600'>works</span> <span m='4613940'>out</span> <span
  m='4614400'>to</span> <span m='4614480'>exactly</span> <span
  m='4614910'>k</span> <span m='4615120'>plus</span> <span
  m='4615370'>1/2.</span> <span m='4616970'>So</span> <span
  m='4617250'>this</span> <span m='4617440'>is,</span> <span
  m='4617730'>again,</span> <span m='4618400'>strictly</span> <span
  m='4618770'>less</span> <span m='4619000'>than</span> <span
  m='4619160'>k</span> <span m='4619340'>plus</span> <span m='4619600'>1.</span>
  <span m='4621450'>And</span> <span m='4621670'>so</span> <span
  m='4621930'>if</span> <span m='4622050'>we</span> <span
  m='4622190'>found--</span> <span m='4623160'>we</span> <span
  m='4623310'>assumed</span> <span m='4623460'>that</span> <span
  m='4623700'>OPT</span> <span m='4624010'>was</span> <span
  m='4624680'>less</span> <span m='4625010'>than or</span> <span
  m='4625180'>equal</span> <span m='4625370'>to</span> <span
  m='4625450'>k.</span> <span m='4626340'>And</span> <span m='4626520'>so</span>
  <span m='4626750'>now</span> <span m='4627000'>it</span> <span
  m='4627090'>must</span> <span m='4627310'>actually</span> <span
  m='4627570'>be</span> <span m='4628090'>equal</span> <span
  m='4628330'>to</span> <span m='4628400'>k,</span> <span
  m='4628590'>because</span> <span m='4628900'>there</span> <span
  m='4628990'>are</span> <span m='4629020'>no</span> <span
  m='4629180'>integers</span> <span m='4629630'>between</span> <span
  m='4629940'>k</span> <span m='4630290'>and k</span> <span
  m='4630440'>plus</span> <span m='4630660'>1/2.</span> <span
  m='4632580'>OK.</span> <span m='4633070'>I</span> <span
  m='4633220'>probably</span> <span m='4633600'>could</span> <span
  m='4633710'>have</span> <span m='4633810'>done</span> <span
  m='4633950'>that</span> <span m='4634120'>shorter.</span> </p><p><span
  m='4637270'>So</span> <span m='4637600'>when</span> <span
  m='4637740'>we</span> <span m='4637830'>have</span> <span
  m='4638010'>an</span> <span m='4638090'>EPTAS,</span> <span
  m='4639170'>we</span> <span m='4639280'>exactly</span> <span
  m='4639780'>get</span> <span m='4639950'>an</span> <span
  m='4640070'>FPT</span> <span m='4640480'>algorithm.</span> <span
  m='4641380'>And</span> <span m='4641780'>that's--</span> <span
  m='4642250'>the</span> <span m='4642510'>reverse</span> <span
  m='4642950'>does</span> <span m='4643070'>not</span> <span
  m='4643310'>hold.</span> <span m='4643800'>There are</span> <span
  m='4643970'>some</span> <span m='4644210'>problems</span> <span
  m='4645050'>that</span> <span m='4645170'>have</span> <span
  m='4645480'>FPT</span> <span m='4645880'>algorithms</span> <span
  m='4646330'>but</span> <span m='4646490'>do</span> <span
  m='4646580'>not</span> <span m='4646870'>have</span> <span
  m='4647120'>EPTASes.</span> <span m='4648930'>But,</span> <span
  m='4649580'>it's</span> <span m='4649710'>something,</span> <span
  m='4651040'>and</span> <span m='4651130'>it</span> <span
  m='4651210'>connects</span> <span m='4651530'>these</span> <span
  m='4651680'>two</span> <span m='4651820'>fields.</span> <span
  m='4652620'>And</span> <span m='4653040'>that's</span> <span m='4653330'>all
  we'll</span> <span m='4653710'>say</span> <span m='4653910'>about</span> <span
  m='4654560'>fixed</span> <span m='4654865'>parameter algorithms.</span> <span
  m='4655170'>Any</span> <span m='4655350'>final</span> <span
  m='4655640'>questions?</span> <span m='4658300'>Cool.</span> <span
  m='4658560'>See</span> <span m='4658950'>you</span> <span
  m='4659160'>next</span> <span m='4659400'>week.</span> </p>
embedded_media:
  - uid: 19d9470e4207c812df307a92d88cb159
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 4q-jmGrmxKs
  - uid: 5c662433da15225592b8ce5f8b339301
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 4q-jmGrmxKs
  - uid: 94888c6ce3e87aa05c4edbe49042035f
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: b30ad0106abfd7f3ce28cfa4d52bcf8b
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec18_300k.mp4'
  - uid: 3be6a48a1bd1daf960ac68086e3bfb5b
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/4q-jmGrmxKs/default.jpg'
  - uid: 98cd4c658fd73909fc85c87b55ca602f
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: 4q-jmGrmxKs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-18-complexity-fixed-parameter-algorithms/4q-jmGrmxKs.srt
  - uid: b145855395face57d2bdd372c51f91cd
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: 4q-jmGrmxKs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-18-complexity-fixed-parameter-algorithms/4q-jmGrmxKs.pdf
  - uid: 2433b78f117c9f721b325ab44f7645ff
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 2f72faa3b639f27b718d718a42bf38fe
    parent_uid: cdf85d48b6247cbff0e731844ce445e8
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
