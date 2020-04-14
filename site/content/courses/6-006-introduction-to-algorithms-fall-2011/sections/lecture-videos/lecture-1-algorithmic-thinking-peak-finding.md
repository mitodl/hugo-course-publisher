---
title: 'Lecture 1: Algorithmic Thinking, Peak Finding'
uid: c9d029dc32fdd36dfd22fdf26e2f990a
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-1-algorithmic-thinking-peak-finding
short_url: lecture-1-algorithmic-thinking-peak-finding
inline_embed_id: '53293808lecture1:algorithmicthinking,peakfinding94393560'
about_this_resource_text: >-
  <p><strong>Description:</strong> Overview of course content, including an
  motivating problem for each of the modules. The lecture then covers 1-D and
  2-D peak finding, using this problem to point out some issues involved in
  designing efficient algorithms.</p> <p><strong>Instructor:</strong> Srini
  Devadas</p>
related_resources_text: ''
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
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
  m='12790'>materials</span> <span m='13330'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17240'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22730'>PROFESSOR: Hi.</span> <span m='23390'>I'm</span> <span
  m='23680'>Srini</span> <span m='24060'>Devadas.</span> <span
  m='24750'>I'm</span> <span m='24920'>a</span> <span m='25000'>professor</span>
  <span m='25550'>of</span> <span m='25810'>electrical</span> <span
  m='26180'>engineering</span> <span m='26610'>and</span> <span
  m='26710'>computer</span> <span m='27040'>science.</span> <span
  m='27650'>I'm</span> <span m='27820'>going</span> <span m='27950'>to</span>
  <span m='27990'>be</span> <span m='28110'>co-lecturing</span> <span
  m='28880'>6.006--</span> <span m='30400'>Introduction</span> <span
  m='30970'>to</span> <span m='31040'>Algorithms--</span> <span
  m='31580'>this</span> <span m='31750'>term</span> <span m='32439'>with</span>
  <span m='33080'>professor</span> <span m='33760'>Erik Domane.</span> <span
  m='34950'>Eric,</span> <span m='35190'>say</span> <span m='35310'>hi.</span>
  </p><p><span m='36001'>ERIK DOMANE: Hi.</span> </p><p><span
  m='36883'>[LAUGHTER]</span> </p><p><span m='38650'>PROFESSOR: And</span> <span
  m='39380'>we</span> <span m='39470'>hope</span> <span m='39920'>you're</span>
  <span m='40090'>going</span> <span m='40210'>to</span> <span
  m='40250'>have</span> <span m='40360'>a</span> <span m='40440'>fun</span>
  <span m='40680'>time</span> <span m='40930'>in</span> <span
  m='41000'>6.006</span> <span m='42580'>learning</span> <span
  m='43710'>a</span> <span m='43770'>variety</span> <span m='44140'>of</span>
  <span m='44260'>algorithms.</span> <span m='45760'>What</span> <span
  m='45940'>I</span> <span m='45960'>want</span> <span m='46120'>to</span> <span
  m='46200'>do</span> <span m='46340'>today</span> <span m='46740'>is</span>
  <span m='47340'>spend</span> <span m='48790'>literally</span> <span
  m='49860'>a</span> <span m='49930'>minute</span> <span m='50310'>or</span>
  <span m='50420'>so</span> <span m='50760'>on</span> <span
  m='51490'>administrative</span> <span m='52190'>details,</span> <span
  m='53570'>maybe</span> <span m='53830'>even</span> <span
  m='54010'>less.</span> </p><p><span m='55010'>What</span> <span
  m='55220'>I'd</span> <span m='55270'>like</span> <span m='55450'>to</span>
  <span m='55550'>do</span> <span m='55700'>is</span> <span m='55820'>to</span>
  <span m='55940'>tell</span> <span m='56190'>you</span> <span
  m='56420'>to</span> <span m='56540'>go</span> <span m='56690'>to</span> <span
  m='56760'>the</span> <span m='56860'>website</span> <span
  m='57430'>that's</span> <span m='57620'>listed</span> <span
  m='57960'>up</span> <span m='58130'>there</span> <span m='58910'>and</span>
  <span m='59180'>read</span> <span m='59370'>it.</span> <span
  m='60670'>And</span> <span m='60890'>you'll</span> <span m='61010'>get</span>
  <span m='61170'>all</span> <span m='61470'>information</span> <span
  m='62130'>you</span> <span m='62250'>need</span> <span m='63250'>about</span>
  <span m='64180'>what</span> <span m='64470'>this</span> <span
  m='64660'>class</span> <span m='64989'>is</span> <span m='65099'>about</span>
  <span m='65550'>from</span> <span m='65720'>a</span> <span
  m='65870'>standpoint</span> <span m='66430'>of</span> <span
  m='66520'>syllabus;</span> <span m='67330'>what's</span> <span
  m='67680'>expected</span> <span m='68230'>of</span> <span
  m='68460'>you;</span> <span m='70590'>the</span> <span
  m='70840'>problem</span> <span m='71320'>set</span> <span
  m='71590'>schedule;</span> <span m='72530'>the</span> <span
  m='72660'>quiz</span> <span m='72900'>schedule;</span> <span
  m='73980'>and</span> <span m='74090'>so</span> <span m='74240'>on</span> <span
  m='74360'>and</span> <span m='74460'>so</span> <span m='74620'>forth.</span>
  <span m='75660'>I</span> <span m='75780'>want</span> <span m='75920'>to</span>
  <span m='75990'>dive</span> <span m='76230'>right</span> <span
  m='76450'>in</span> <span m='76700'>and</span> <span m='77070'>tell</span>
  <span m='77280'>you</span> <span m='77460'>about</span> <span
  m='78140'>interesting</span> <span m='78560'>things,</span> <span
  m='79460'>like</span> <span m='80230'>algorithms</span> <span
  m='80930'>and</span> <span m='82530'>complexity</span> <span
  m='83090'>of</span> <span m='83190'>algorithms.</span> <span
  m='84550'>I</span> <span m='84690'>want</span> <span m='84880'>to</span> <span
  m='84920'>spend</span> <span m='85170'>some</span> <span m='85320'>time</span>
  <span m='86100'>giving</span> <span m='86340'>you</span> <span
  m='86490'>an</span> <span m='86600'>overview</span> <span m='87120'>of</span>
  <span m='87220'>the</span> <span m='87490'>course</span> <span
  m='87990'>content.</span> </p><p><span m='89380'>And</span> <span
  m='90100'>then</span> <span m='90120'>we're</span> <span
  m='90230'>going</span> <span m='90490'>to</span> <span m='91120'>dive</span>
  <span m='91400'>right</span> <span m='91640'>in</span> <span
  m='91980'>and</span> <span m='92180'>look</span> <span m='92430'>at</span>
  <span m='92990'>a</span> <span m='93090'>particular</span> <span
  m='93920'>problem</span> <span m='94590'>of</span> <span m='94930'>peak</span>
  <span m='95230'>finding--</span> <span m='96240'>both</span> <span
  m='96480'>the</span> <span m='96560'>one</span> <span
  m='96790'>dimensional</span> <span m='97360'>version</span> <span
  m='97950'>and</span> <span m='98150'>a</span> <span m='98220'>two</span> <span
  m='98360'>dimensional</span> <span m='98830'>version--</span> <span
  m='99740'>and</span> <span m='99920'>talk</span> <span m='100110'>about</span>
  <span m='100290'>algorithms</span> <span m='100860'>to</span> <span
  m='100970'>solve</span> <span m='101900'>this</span> <span
  m='102150'>peak</span> <span m='102350'>finding</span> <span
  m='102700'>problem--</span> <span m='104480'>both</span> <span
  m='104990'>varieties</span> <span m='105450'>of</span> <span
  m='105590'>it.</span> <span m='106670'>And</span> <span
  m='106880'>you'll</span> <span m='107040'>find</span> <span
  m='107490'>that</span> <span m='108550'>there's</span> <span
  m='108910'>really</span> <span m='110000'>a</span> <span
  m='110100'>difference</span> <span m='111410'>between</span> <span
  m='112050'>these</span> <span m='112310'>various</span> <span
  m='112630'>algorithms</span> <span m='113090'>that</span> <span
  m='113230'>we'll</span> <span m='113360'>look</span> <span
  m='113610'>at</span> <span m='114190'>in</span> <span m='114350'>terms</span>
  <span m='114630'>of</span> <span m='114750'>their</span> <span
  m='114920'>complexity.</span> <span m='116480'>And</span> <span
  m='116700'>what</span> <span m='116830'>I</span> <span m='116900'>mean</span>
  <span m='117120'>by</span> <span m='117250'>that</span> <span
  m='117680'>is</span> <span m='118930'>you're</span> <span
  m='119070'>going</span> <span m='119230'>to</span> <span
  m='119290'>have</span> <span m='120510'>different</span> <span
  m='120850'>run</span> <span m='121120'>times</span> <span m='121480'>of</span>
  <span m='121560'>these</span> <span m='121750'>algorithms</span> <span
  m='122750'>depending</span> <span m='123050'>on</span> <span
  m='123180'>input</span> <span m='123490'>size,</span> <span
  m='125370'>based</span> <span m='125810'>on</span> <span m='126000'>how</span>
  <span m='126210'>efficient</span> <span m='126630'>these</span> <span
  m='126810'>algorithms</span> <span m='127280'>are.</span> </p><p><span
  m='128600'>And</span> <span m='130560'>a</span> <span
  m='130680'>prerequisite</span> <span m='131240'>for</span> <span
  m='131330'>this</span> <span m='131510'>class</span> <span
  m='132130'>is</span> <span m='132770'>6.042.</span> <span
  m='134370'>And</span> <span m='134860'>in</span> <span m='135050'>6.042</span>
  <span m='135900'>you</span> <span m='136080'>learned</span> <span
  m='136330'>about</span> <span m='136600'>asymptotic</span> <span
  m='137180'>complexity.</span> <span m='138620'>And</span> <span
  m='139010'>you'll</span> <span m='139170'>see</span> <span
  m='139360'>that</span> <span m='140080'>in</span> <span m='140260'>this</span>
  <span m='140450'>lecture</span> <span m='141240'>we'll</span> <span
  m='142120'>analyze</span> <span m='143410'>relatively</span> <span
  m='143880'>simple</span> <span m='144230'>algorithms</span> <span
  m='144670'>today</span> <span m='145430'>in</span> <span
  m='145580'>terms</span> <span m='145870'>of</span> <span
  m='146050'>their</span> <span m='146450'>asymptotic</span> <span
  m='147010'>complexity.</span> <span m='148070'>And</span> <span
  m='148300'>you'll</span> <span m='148430'>be</span> <span
  m='148550'>able</span> <span m='148680'>to</span> <span
  m='148760'>compare</span> <span m='149920'>and</span> <span
  m='150120'>say</span> <span m='150340'>that</span> <span
  m='150530'>this</span> <span m='150710'>algorithm</span> <span
  m='151130'>is</span> <span m='151250'>fasten</span> <span
  m='151750'>this</span> <span m='151910'>other</span> <span
  m='152100'>one--</span> <span m='153460'>assuming</span> <span
  m='153940'>that</span> <span m='154080'>you</span> <span
  m='154170'>have</span> <span m='154390'>large</span> <span
  m='154680'>inputs--</span> <span m='155500'>because</span> <span
  m='156100'>it's</span> <span m='157320'>asymptotically</span> <span
  m='158200'>less</span> <span m='158490'>complex.</span> </p><p><span
  m='160840'>So</span> <span m='161000'>let's</span> <span
  m='161500'>dive</span> <span m='161730'>right</span> <span
  m='161910'>in</span> <span m='162150'>and</span> <span m='162440'>talk</span>
  <span m='162630'>about</span> <span m='162820'>the</span> <span
  m='162890'>class.</span> </p><p></p><p><span m='172420'>So</span> <span
  m='172580'>the</span> <span m='172690'>one</span> <span
  m='172880'>sentence</span> <span m='173340'>summary</span> <span
  m='173690'>of</span> <span m='173800'>this</span> <span
  m='173940'>class</span> <span m='174550'>is</span> <span
  m='174820'>that</span> <span m='176000'>this</span> <span m='176360'>is</span>
  <span m='176490'>about</span> <span m='177260'>efficient</span> <span
  m='177760'>procedures</span> <span m='178910'>for</span> <span
  m='179540'>solving</span> <span m='180460'>problems</span> <span
  m='181870'>on</span> <span m='182080'>large</span> <span
  m='182530'>inputs.</span> <span m='184850'>And</span> <span
  m='185000'>when</span> <span m='185140'>I</span> <span m='185180'>say</span>
  <span m='185370'>large</span> <span m='185670'>inputs,</span> <span
  m='186150'>I</span> <span m='186260'>mean</span> <span
  m='186470'>things</span> <span m='186800'>like</span> <span
  m='188490'>the</span> <span m='188650'>US</span> <span
  m='188990'>highway</span> <span m='189470'>system,</span> <span
  m='190300'>a</span> <span m='190360'>map</span> <span m='190720'>of</span>
  <span m='190930'>all</span> <span m='191190'>of</span> <span
  m='191260'>the</span> <span m='191890'>highways</span> <span
  m='192370'>in</span> <span m='192430'>the</span> <span
  m='192490'>United</span> <span m='192830'>States;</span> <span
  m='194110'>the</span> <span m='194370'>human</span> <span
  m='194740'>genome,</span> <span m='195960'>which</span> <span
  m='196160'>has</span> <span m='196740'>a</span> <span
  m='196830'>billion</span> <span m='197260'>letters</span> <span
  m='197850'>in</span> <span m='197970'>its</span> <span
  m='198160'>alphabet;</span> <span m='200435'>a</span> <span
  m='200890'>social</span> <span m='201310'>network</span> <span
  m='201790'>responding</span> <span m='202280'>to</span> <span
  m='202350'>Facebook,</span> <span m='203170'>that</span> <span
  m='203770'>I</span> <span m='203880'>guess</span> <span m='204110'>has</span>
  <span m='204470'>500</span> <span m='205010'>million</span> <span
  m='205360'>nodes</span> <span m='205750'>or</span> <span m='205900'>so.</span>
  <span m='206840'>So</span> <span m='207070'>these</span> <span
  m='207360'>are</span> <span m='207430'>large</span> <span
  m='207770'>inputs.</span> </p><p><span m='208280'>Now</span> <span
  m='208410'>our</span> <span m='208510'>definition</span> <span
  m='208990'>of</span> <span m='209110'>large</span> <span m='209670'>has</span>
  <span m='209830'>really</span> <span m='210020'>changed</span> <span
  m='210480'>with</span> <span m='210600'>the</span> <span
  m='210690'>times.</span> <span m='211470'>And</span> <span
  m='211670'>so</span> <span m='211860'>really</span> <span
  m='212070'>the</span> <span m='212170'>21st</span> <span
  m='212760'>century</span> <span m='213170'>definition</span> <span
  m='214360'>of</span> <span m='214770'>large</span> <span m='215440'>is,</span>
  <span m='215870'>I</span> <span m='215980'>guess,</span> <span
  m='216260'>a</span> <span m='216400'>trillion.</span> <span
  m='217080'>Right?</span> <span m='217470'>Back</span> <span
  m='217740'>when</span> <span m='217860'>I</span> <span m='217890'>was</span>
  <span m='218020'>your</span> <span m='218280'>age</span> <span
  m='219120'>large</span> <span m='219530'>was</span> <span
  m='219750'>like</span> <span m='220070'>1,000.</span> </p><p><span
  m='220680'>[LAUGHTER]</span> </p><p><span m='222400'>I</span> <span
  m='222500'>guess</span> <span m='222650'>I'm</span> <span
  m='222750'>dating</span> <span m='223080'>myself</span> <span
  m='223540'>here.</span> <span m='224970'>Back</span> <span
  m='225240'>when</span> <span m='225370'>Eric</span> <span
  m='225600'>was</span> <span m='225710'>your</span> <span
  m='225940'>age,</span> <span m='226140'>it</span> <span m='226300'>was
  a</span> <span m='226350'>million.</span> <span m='226760'>Right?</span>
  </p><p><span m='227232'>[LAUGHTER]</span> </p><p><span m='228650'>But</span>
  <span m='230140'>what's</span> <span m='230470'>happening</span> <span
  m='231900'>really</span> <span m='233100'>the</span> <span
  m='233240'>world</span> <span m='233670'>is</span> <span
  m='234120'>moving</span> <span m='234460'>faster,</span> <span
  m='235000'>things</span> <span m='235230'>are</span> <span
  m='235250'>getting</span> <span m='235490'>bigger.</span> <span
  m='236420'>We</span> <span m='237370'>have</span> <span m='237660'>the</span>
  <span m='237760'>capability</span> <span m='238500'>of</span> <span
  m='238770'>computing</span> <span m='239330'>on</span> <span
  m='239470'>large</span> <span m='239780'>inputs,</span> <span
  m='240880'>but</span> <span m='241500'>that</span> <span
  m='241670'>doesn't</span> <span m='241930'>mean</span> <span
  m='242170'>that</span> <span m='242470'>efficiency</span> <span
  m='243220'>isn't</span> <span m='243630'>of</span> <span
  m='243780'>paramount</span> <span m='244330'>concern.</span> <span
  m='245760'>The</span> <span m='245900'>fact</span> <span m='246150'>of</span>
  <span m='246270'>matter</span> <span m='246600'>is</span> <span
  m='246830'>that</span> <span m='247820'>you</span> <span
  m='248010'>can,</span> <span m='248470'>maybe,</span> <span
  m='248690'>scan</span> <span m='250550'>a</span> <span
  m='250610'>billion</span> <span m='251060'>elements</span> <span
  m='251870'>in</span> <span m='252020'>a</span> <span m='252060'>matter</span>
  <span m='252360'>of</span> <span m='252430'>seconds.</span> </p><p><span
  m='253550'>But</span> <span m='253960'>if</span> <span m='254110'>you</span>
  <span m='254210'>had</span> <span m='254570'>an</span> <span
  m='254660'>algorithm</span> <span m='255170'>that</span> <span
  m='255810'>required</span> <span m='256230'>cubic</span> <span
  m='256579'>complexity,</span> <span m='257750'>suddenly</span> <span
  m='258320'>you're</span> <span m='258440'>not</span> <span
  m='258600'>talking</span> <span m='258800'>about</span> <span
  m='259000'>10</span> <span m='259160'>raised</span> <span m='259420'>to</span>
  <span m='259490'>9,</span> <span m='259899'>you're</span> <span
  m='260050'>talking</span> <span m='260300'>about</span> <span
  m='260579'>10</span> <span m='260730'>raised</span> <span m='260930'>to</span>
  <span m='261010'>27.</span> <span m='262079'>And</span> <span
  m='263020'>even</span> <span m='263300'>current</span> <span
  m='263610'>computers</span> <span m='264150'>can't</span> <span
  m='264350'>really</span> <span m='264510'>handle</span> <span
  m='266182'>those</span> <span m='266590'>kinds</span> <span
  m='266790'>of</span> <span m='266870'>numbers,</span> <span
  m='268510'>so</span> <span m='268580'>efficiency</span> <span
  m='269140'>is</span> <span m='269330'>a</span> <span
  m='269390'>concern.</span> </p><p><span m='270890'>And</span> <span
  m='271580'>as</span> <span m='271970'>inputs</span> <span
  m='272320'>get</span> <span m='272470'>larger,</span> <span
  m='273050'>it</span> <span m='273150'>becomes</span> <span
  m='273310'>more</span> <span m='273690'>of a</span> <span
  m='274060'>concern.</span> <span m='274900'>All right?</span> <span
  m='275320'>So</span> <span m='277200'>we're</span> <span
  m='277330'>concerned</span> <span m='278040'>about--</span>
  </p><p></p><p><span m='283760'>--efficient</span> <span
  m='284180'>procedures--</span> <span m='289370'>for</span> <span
  m='289620'>solving</span> <span m='290030'>large</span> <span
  m='290430'>scale</span> <span m='290780'>problems</span> <span
  m='291310'>in</span> <span m='291420'>this</span> <span
  m='291610'>class.</span> </p><p></p><p><span m='298140'>And</span> <span
  m='298810'>we're</span> <span m='299060'>concerned</span> <span
  m='299460'>about</span> <span m='299740'>scalability,</span> <span
  m='301640'>because--</span> <span m='303360'>just</span> <span
  m='303790'>as,</span> <span m='305760'>you know,</span> <span
  m='306240'>1,000</span> <span m='307030'>was</span> <span m='307410'>a</span>
  <span m='307560'>big</span> <span m='307770'>number</span> <span
  m='308510'>a</span> <span m='308610'>couple</span> <span m='308820'>of</span>
  <span m='308900'>decades</span> <span m='309280'>ago,</span> <span
  m='309600'>and</span> <span m='309940'>now</span> <span m='310110'>it's</span>
  <span m='310580'>kind</span> <span m='310720'>of</span> <span
  m='310800'>a</span> <span m='310870'>small</span> <span
  m='311300'>number--</span> <span m='312040'>it's</span> <span
  m='312140'>quite</span> <span m='312350'>possible</span> <span
  m='312850'>that</span> <span m='314640'>by</span> <span m='314770'>the</span>
  <span m='314880'>time</span> <span m='315440'>you</span> <span
  m='315580'>guys</span> <span m='315790'>are</span> <span
  m='315850'>professors</span> <span m='316430'>teaching</span> <span
  m='316710'>this</span> <span m='316870'>class</span> <span
  m='317240'>in</span> <span m='317350'>some</span> <span
  m='317580'>university</span> <span m='318220'>that</span> <span
  m='318620'>a</span> <span m='318720'>trillion</span> <span
  m='319140'>is</span> <span m='319240'>going</span> <span m='319360'>to</span>
  <span m='319400'>be</span> <span m='319500'>a</span> <span
  m='319570'>small</span> <span m='319870'>number.</span> </p><p><span
  m='320690'>And</span> <span m='321340'>we're</span> <span
  m='321500'>going</span> <span m='321610'>to</span> <span m='321650'>be</span>
  <span m='321740'>talking</span> <span m='322020'>about--</span> <span
  m='324200'>I don't know--</span> <span m='324430'>10</span> <span
  m='324620'>raised</span> <span m='324850'>to</span> <span m='324960'>18</span>
  <span m='325560'>as</span> <span m='325980'>being</span> <span
  m='327090'>something</span> <span m='327520'>that</span> <span
  m='329580'>we're</span> <span m='329760'>concerned</span> <span
  m='330190'>with</span> <span m='330760'>from</span> <span m='330970'>a</span>
  <span m='331030'>standpoint</span> <span m='331570'>of</span> <span
  m='331820'>a</span> <span m='331940'>common</span> <span
  m='332320'>case</span> <span m='332620'>input</span> <span
  m='333100'>for</span> <span m='333380'>an</span> <span
  m='333580'>algorithm.</span> <span m='334510'>So</span> <span
  m='334690'>scalability</span> <span m='335690'>is</span> <span
  m='337120'>important.</span> <span m='338120'>And</span> <span
  m='338480'>we</span> <span m='338570'>want</span> <span m='338720'>to</span>
  <span m='338770'>be</span> <span m='338990'>able</span> <span
  m='339180'>to</span> <span m='339320'>track</span> <span m='340300'>how</span>
  <span m='340640'>our</span> <span m='340840'>algorithms</span> <span
  m='341290'>are</span> <span m='341340'>going</span> <span m='341480'>to</span>
  <span m='341570'>do</span> <span m='342270'>as</span> <span
  m='342570'>inputs</span> <span m='342920'>get</span> <span
  m='343070'>larger</span> <span m='343460'>and</span> <span
  m='343570'>larger.</span> </p><p><span m='347210'>You</span> <span
  m='347330'>going</span> <span m='347430'>to</span> <span
  m='347510'>learn</span> <span m='348790'>a</span> <span
  m='348820'>bunch</span> <span m='349150'>of</span> <span
  m='349240'>different</span> <span m='350340'>data</span> <span
  m='350590'>structures.</span> <span m='352180'>We'll</span> <span
  m='352350'>call</span> <span m='352600'>them</span> <span
  m='354090'>classic</span> <span m='354600'>data</span> <span
  m='354850'>structures,</span> <span m='356650'>like</span> <span
  m='357310'>binary</span> <span m='357660'>search</span> <span
  m='357935'>trees,</span> <span m='359670'>hash</span> <span
  m='360050'>tables--</span> <span m='361330'>that</span> <span m='361450'>are
  called</span> <span m='361710'>dictionaries</span> <span m='361970'>in</span>
  <span m='362300'>Python--</span> <span m='364050'>and</span> <span
  m='365800'>data</span> <span m='366020'>structures--</span> <span
  m='366430'>such</span> <span m='366670'>as</span> <span
  m='367610'>balanced</span> <span m='368310'>binary</span> <span
  m='368680'>search</span> <span m='368950'>trees--</span> <span
  m='369300'>that</span> <span m='369470'>are</span> <span
  m='369890'>more</span> <span m='370130'>efficient</span> <span
  m='370610'>than</span> <span m='370860'>just</span> <span
  m='371070'>the</span> <span m='371110'>regular</span> <span
  m='371430'>binary</span> <span m='371740'>search</span> <span
  m='372030'>trees.</span> </p><p><span m='373100'>And</span> <span
  m='373310'>these</span> <span m='373510'>are all</span> <span
  m='373650'>data</span> <span m='373850'>structures</span> <span
  m='374350'>that</span> <span m='375500'>were</span> <span
  m='375740'>invented</span> <span m='377100'>many</span> <span
  m='377360'>decades</span> <span m='377780'>ago.</span> <span
  m='378540'>But</span> <span m='378690'>they've</span> <span
  m='378830'>stood</span> <span m='379090'>the</span> <span
  m='379170'>test</span> <span m='379460'>of</span> <span
  m='379560'>time,</span> <span m='380850'>and</span> <span
  m='381550'>they</span> <span m='381700'>continue</span> <span
  m='382100'>to</span> <span m='382170'>be</span> <span
  m='382270'>useful.</span> <span m='383530'>We're</span> <span
  m='383710'>going</span> <span m='383920'>to</span> <span
  m='383980'>augment</span> <span m='384450'>these</span> <span
  m='384620'>data</span> <span m='384830'>structures</span> <span
  m='385370'>in</span> <span m='385480'>various</span> <span
  m='385830'>ways</span> <span m='386210'>to</span> <span m='386310'>make</span>
  <span m='386500'>them</span> <span m='386540'>more</span> <span
  m='386890'>efficient</span> <span m='387950'>for</span> <span
  m='388340'>certain</span> <span m='388740'>kinds</span> <span
  m='389170'>of</span> <span m='389270'>problems.</span> <span
  m='390330'>And</span> <span m='390990'>while</span> <span
  m='391530'>you're</span> <span m='391700'>not</span> <span
  m='391870'>going</span> <span m='392000'>to</span> <span m='392040'>be</span>
  <span m='392160'>doing</span> <span m='392720'>a</span> <span
  m='392780'>whole</span> <span m='393150'>lot</span> <span m='393340'>of</span>
  <span m='393490'>algorithm</span> <span m='393980'>design</span> <span
  m='394520'>in</span> <span m='394600'>this</span> <span
  m='394770'>class,</span> <span m='395760'>you</span> <span
  m='395930'>will</span> <span m='396070'>be</span> <span
  m='396180'>doing</span> <span m='396430'>some</span> <span
  m='396700'>design</span> <span m='397370'>and</span> <span m='397540'>a</span>
  <span m='397580'>whole</span> <span m='397760'>lot</span> <span
  m='397910'>of</span> <span m='397990'>analysis.</span> </p><p><span
  m='400880'>The</span> <span m='402340'>class</span> <span
  m='403070'>following</span> <span m='403460'>this</span> <span
  m='403650'>one,</span> <span m='404770'>6.046</span> <span
  m='405180'>Designing</span> <span m='405570'>Analysis</span> <span
  m='406060'>of</span> <span m='406160'>Algorithms,</span> <span
  m='407260'>is</span> <span m='407460'>a</span> <span m='407510'>class</span>
  <span m='408060'>that</span> <span m='408420'>you</span> <span
  m='408530'>should</span> <span m='408760'>take</span> <span
  m='409330'>if</span> <span m='410240'>you</span> <span m='411080'>like</span>
  <span m='411280'>this</span> <span m='411450'>one.</span> <span
  m='412080'>And</span> <span m='412470'>you</span> <span m='412550'>can</span>
  <span m='412630'>do</span> <span m='412760'>a</span> <span
  m='412810'>whole</span> <span m='412990'>lot</span> <span
  m='413190'>more</span> <span m='413350'>design</span> <span
  m='414140'>of</span> <span m='414360'>algorithms</span> <span
  m='414940'>in</span> <span m='415070'>6.046.</span> <span
  m='417180'>But</span> <span m='417900'>you</span> <span m='418060'>will</span>
  <span m='418230'>look</span> <span m='418410'>at</span> <span
  m='418710'>classic</span> <span m='419080'>data</span> <span
  m='419280'>structures</span> <span m='419880'>and</span> <span
  m='420840'>classical</span> <span m='421340'>algorithms</span> <span
  m='423680'>for</span> <span m='424690'>these</span> <span
  m='424870'>data</span> <span m='425090'>structures,</span> <span
  m='426260'>including</span> <span m='426680'>things</span> <span
  m='426960'>like</span> <span m='428580'>sorting</span> <span
  m='429190'>and</span> <span m='429360'>matching,</span> <span
  m='430460'>and</span> <span m='430680'>so</span> <span m='430890'>on.</span>
  </p><p><span m='432470'>And</span> <span m='433030'>one</span> <span
  m='433200'>of</span> <span m='433250'>the</span> <span m='433320'>nice</span>
  <span m='433520'>things</span> <span m='433700'>about</span> <span
  m='433890'>this</span> <span m='434050'>class</span> <span
  m='437200'>is</span> <span m='437490'>that</span> <span
  m='437680'>you'll</span> <span m='437820'>be</span> <span
  m='437920'>doing</span> <span m='438190'>real</span> <span
  m='438460'>implementations</span> <span m='441280'>of</span> <span
  m='441400'>these</span> <span m='441590'>data</span> <span
  m='441800'>structures</span> <span m='442880'>and</span> <span
  m='443030'>algorithms</span> <span m='444620'>in</span> <span
  m='444850'>Python.</span> <span m='448220'>And</span> <span
  m='448380'>in</span> <span m='448470'>particular</span> <span
  m='449830'>are</span> <span m='450190'>each</span> <span m='450420'>of</span>
  <span m='450500'>the</span> <span m='450580'>problem</span> <span
  m='450880'>sets</span> <span m='452710'>in</span> <span m='452850'>this</span>
  <span m='453030'>class</span> <span m='454500'>are</span> <span
  m='454710'>going</span> <span m='454900'>to</span> <span
  m='454960'>have</span> <span m='455930'>both</span> <span m='457900'>a</span>
  <span m='458070'>theory</span> <span m='458680'>part</span> <span
  m='459040'>to</span> <span m='459190'>them,</span> <span m='459900'>and</span>
  <span m='460190'>a</span> <span m='460250'>programming</span> <span
  m='460700'>part</span> <span m='460960'>to</span> <span
  m='461030'>them.</span> <span m='461960'>So</span> <span
  m='462140'>hopefully</span> <span m='462500'>it'll all</span> <span
  m='462790'>tie</span> <span m='463050'>together.</span> </p><p><span
  m='463430'>The</span> <span m='463540'>kinds</span> <span m='463790'>of</span>
  <span m='463860'>things</span> <span m='464080'>we're</span> <span
  m='464170'>going</span> <span m='464270'>to</span> <span m='464310'>be</span>
  <span m='464420'>talking</span> <span m='464720'>about</span> <span
  m='464990'>in</span> <span m='465090'>lectures</span> <span
  m='466060'>and</span> <span m='466490'>recitations</span> <span
  m='467960'>are</span> <span m='468550'>going</span> <span m='468850'>to</span>
  <span m='468970'>be</span> <span m='469370'>directly</span> <span
  m='469960'>connected</span> <span m='471200'>to</span> <span
  m='471360'>the</span> <span m='471500'>theory</span> <span
  m='471790'>parts</span> <span m='472100'>of</span> <span m='472170'>the</span>
  <span m='472250'>problem</span> <span m='472510'>sets.</span> <span
  m='473260'>And</span> <span m='473400'>you'll</span> <span
  m='473500'>be</span> <span m='473620'>programming</span> <span
  m='474610'>the</span> <span m='474700'>algorithms</span> <span
  m='475170'>that</span> <span m='475270'>we</span> <span m='475370'>talk</span>
  <span m='475570'>about</span> <span m='475800'>in</span> <span
  m='475880'>lecture,</span> <span m='476380'>or</span> <span
  m='476510'>augmenting</span> <span m='476960'>them,</span> <span
  m='477690'>running</span> <span m='478020'>them.</span> <span
  m='478680'>Figuring</span> <span m='479020'>out</span> <span
  m='479520'>whether</span> <span m='480790'>they</span> <span
  m='481110'>work</span> <span m='481340'>well</span> <span m='481620'>on</span>
  <span m='481740'>large</span> <span m='482020'>inputs</span> <span
  m='482710'>or</span> <span m='482850'>not.</span> </p><p><span
  m='486510'>So</span> <span m='487030'>let</span> <span m='487150'>me</span>
  <span m='487240'>talk</span> <span m='487420'>a</span> <span
  m='487490'>little</span> <span m='487630'>bit</span> <span
  m='487800'>about</span> <span m='488850'>the</span> <span
  m='489010'>modules</span> <span m='489530'>in</span> <span
  m='489610'>this</span> <span m='489780'>class</span> <span
  m='490230'>and</span> <span m='490400'>the</span> <span
  m='490480'>problem</span> <span m='490770'>sets.</span> <span
  m='491640'>And</span> <span m='491830'>we</span> <span m='491900'>hope</span>
  <span m='492130'>that these</span> <span m='492360'>problem</span> <span
  m='492610'>sets</span> <span m='492920'>are</span> <span
  m='492970'>going</span> <span m='493090'>to</span> <span m='493140'>be</span>
  <span m='493690'>fun</span> <span m='494010'>for</span> <span
  m='494230'>you.</span> <span m='495470'>And</span> <span m='496000'>by</span>
  <span m='496160'>fun</span> <span m='496590'>I</span> <span
  m='496690'>don't</span> <span m='496890'>mean</span> <span
  m='497250'>easy.</span> <span m='499430'>I</span> <span m='499520'>mean</span>
  <span m='500170'>challenging</span> <span m='500830'>and</span> <span
  m='500940'>worthwhile,</span> <span m='501620'>so</span> <span
  m='502000'>at</span> <span m='502100'>the</span> <span m='502180'>end</span>
  <span m='502370'>of</span> <span m='502510'>it</span> <span
  m='502660'>you</span> <span m='502760'>feel</span> <span
  m='502970'>like</span> <span m='503120'>you've</span> <span
  m='503260'>learned</span> <span m='503510'>something,</span> <span
  m='504280'>and</span> <span m='505000'>you</span> <span m='505160'>had</span>
  <span m='505300'>some</span> <span m='505430'>fun</span> <span
  m='505620'>along</span> <span m='505850'>the</span> <span
  m='505950'>way.</span> <span m='506870'>All right?</span> </p><p><span
  m='508580'>So</span> <span m='508860'>content</span> <span
  m='509290'>wise--</span> </p><p></p><p><span m='517350'>--we</span> <span
  m='517460'>have</span> <span m='519049'>eight</span> <span
  m='519250'>modules</span> <span m='519789'>in</span> <span
  m='519870'>the</span> <span m='519960'>class.</span> <span
  m='521830'>Each</span> <span m='522049'>of</span> <span
  m='522150'>which,</span> <span m='523210'>roughly</span> <span
  m='523600'>speaking,</span> <span m='524010'>has</span> <span
  m='524490'>a</span> <span m='524580'>problem</span> <span
  m='524860'>set</span> <span m='525070'>associated</span> <span
  m='525570'>with</span> <span m='525730'>it.</span> <span m='527020'>The</span>
  <span m='527190'>first</span> <span m='527530'>of</span> <span
  m='527650'>these</span> <span m='529950'>is</span> <span
  m='530430'>what</span> <span m='530630'>we</span> <span m='530740'>call</span>
  <span m='530980'>algorithmic</span> <span m='531530'>thinking.</span> <span
  m='535710'>And</span> <span m='535990'>we'll</span> <span m='536120'>kick
  start</span> <span m='536580'>that</span> <span m='536750'>one</span> <span
  m='537020'>today.</span> <span m='539130'>We'll</span> <span
  m='539250'>look</span> <span m='539520'>at</span> <span m='540160'>a</span>
  <span m='540260'>particular</span> <span m='540610'>problem,</span> <span
  m='540950'>as</span> <span m='541070'>I</span> <span
  m='541120'>mentioned,</span> <span m='541480'>of</span> <span
  m='541560'>peak</span> <span m='541800'>finding.</span> <span
  m='542790'>And</span> <span m='543200'>as</span> <span m='543440'>part</span>
  <span m='543660'>of</span> <span m='543750'>this,</span> <span
  m='544070'>you're</span> <span m='544210'>going</span> <span
  m='544350'>to</span> <span m='544390'>have</span> <span m='544660'>a</span>
  <span m='545100'>problem</span> <span m='545390'>set</span> <span
  m='545750'>that's</span> <span m='545980'>going</span> <span
  m='546110'>to</span> <span m='546150'>go</span> <span m='546340'>out</span>
  <span m='546480'>today</span> <span m='546720'>as</span> <span
  m='546850'>well.</span> <span m='547960'>And</span> <span
  m='548010'>you'll</span> <span m='548170'>find</span> <span
  m='549350'>that</span> <span m='549480'>in</span> <span m='549570'>this</span>
  <span m='549730'>problem</span> <span m='549980'>set</span> <span
  m='552320'>some</span> <span m='552600'>of</span> <span
  m='552650'>these</span> <span m='552820'>algorithms</span> <span
  m='553270'>I</span> <span m='553340'>talk</span> <span m='553600'>about</span>
  <span m='553840'>today</span> <span m='554170'>will</span> <span
  m='554420'>be</span> <span m='554560'>coded</span> <span m='554880'>in</span>
  <span m='554990'>Python</span> <span m='555560'>and</span> <span
  m='555670'>given</span> <span m='555910'>to.</span> </p><p><span
  m='557090'>A</span> <span m='557190'>couple</span> <span m='557400'>of</span>
  <span m='557500'>them</span> <span m='557590'>are</span> <span
  m='557720'>going</span> <span m='557820'>to</span> <span
  m='557860'>have</span> <span m='558000'>bugs</span> <span m='558310'>in</span>
  <span m='558440'>them.</span> <span m='560190'>You'll</span> <span
  m='560710'>have</span> <span m='560960'>to</span> <span
  m='561150'>analyze</span> <span m='562340'>the</span> <span
  m='562510'>complexity</span> <span m='563020'>of</span> <span
  m='563090'>these</span> <span m='563270'>algorithms;</span> <span
  m='564340'>figure</span> <span m='564630'>out</span> <span
  m='565170'>which</span> <span m='565430'>ones</span> <span
  m='565730'>are</span> <span m='565760'>correct and</span> <span
  m='566250'>efficient;</span> <span m='567380'>and</span> <span
  m='567940'>write</span> <span m='568170'>a</span> <span
  m='568220'>proof</span> <span m='568540'>for</span> <span
  m='568710'>one</span> <span m='568880'>of</span> <span m='568990'>them.</span>
  <span m='569890'>All right?</span> <span m='570260'>So</span> <span
  m='570280'>that's</span> <span m='570510'>sort</span> <span
  m='570670'>of</span> <span m='571900'>an</span> <span
  m='572060'>example</span> <span m='572590'>problem</span> <span
  m='572870'>set.</span> <span m='573320'>And</span> <span m='574150'>you</span>
  <span m='574330'>can</span> <span m='574450'>expect</span> <span
  m='575350'>that</span> <span m='576470'>most</span> <span m='576840'>of</span>
  <span m='576930'>the</span> <span m='577010'>problem</span> <span
  m='577270'>sets</span> <span m='577600'>are</span> <span
  m='577690'>going</span> <span m='577880'>to</span> <span
  m='577950'>follow</span> <span m='578690'>that</span> <span
  m='578880'>sort</span> <span m='579030'>of</span> <span
  m='579110'>template.</span> <span m='580036'>All right.</span> <span
  m='580750'>So</span> <span m='582220'>you'll</span> <span
  m='582370'>get</span> <span m='582490'>a</span> <span m='582530'>better</span>
  <span m='582720'>sense</span> <span m='582960'>of</span> <span
  m='583060'>this</span> <span m='584810'>by</span> <span m='584970'>the</span>
  <span m='585060'>end</span> <span m='585180'>of</span> <span
  m='585240'>the</span> <span m='585310'>day</span> <span
  m='585470'>today</span> <span m='585870'>for</span> <span
  m='586110'>sure.</span> <span m='586690'>Or</span> <span m='586820'>a</span>
  <span m='586850'>concrete</span> <span m='587290'>sense</span> <span
  m='587520'>of</span> <span m='587620'>this,</span> <span
  m='588320'>because</span> <span m='588760'>we'll</span> <span
  m='588930'>be</span> <span m='589030'>done</span> <span m='589210'>with</span>
  <span m='589330'>lecture</span> <span m='589760'>and</span> <span
  m='590160'>you'll</span> <span m='590670'>see</span> <span
  m='590940'>your</span> <span m='591000'>first</span> <span
  m='591260'>problem</span> <span m='591490'>set.</span> </p><p><span
  m='592850'>We're</span> <span m='592980'>going</span> <span
  m='593080'>to</span> <span m='593120'>be</span> <span m='593250'>doing</span>
  <span m='594220'>a</span> <span m='594290'>module</span> <span
  m='594760'>on</span> <span m='594910'>sorting</span> <span
  m='595185'>and</span> <span m='595460'>trees.</span> <span
  m='597540'>Sorting</span> <span m='598030'>you</span> <span
  m='598150'>now</span> <span m='598300'>about,</span> <span
  m='598950'>sorting</span> <span m='599260'>a</span> <span
  m='599310'>bunch</span> <span m='599530'>of</span> <span
  m='599600'>numbers.</span> <span m='600780'>Imagine</span> <span
  m='601130'>if</span> <span m='601190'>you</span> <span m='601260'>had</span>
  <span m='601370'>a</span> <span m='601420'>trillion</span> <span
  m='601780'>numbers</span> <span m='602160'>and</span> <span
  m='602240'>you</span> <span m='602330'>wanted</span> <span
  m='602580'>to</span> <span m='602650'>sort</span> <span
  m='602940'>them.</span> <span m='604250'>What</span> <span
  m='604530'>kind</span> <span m='604750'>of</span> <span
  m='605100'>algorithm</span> <span m='605500'>could</span> <span
  m='605640'>use</span> <span m='605990'>for</span> <span
  m='606100'>that?</span> </p><p><span m='607610'>Trees</span> <span
  m='607990'>are a</span> <span m='608120'>wonderful</span> <span
  m='608660'>data</span> <span m='608880'>structure.</span> <span
  m='610280'>There's</span> <span m='610780'>different</span> <span
  m='611060'>varieties,</span> <span m='612330'>the</span> <span
  m='612460'>most</span> <span m='612670'>common</span> <span
  m='612960'>being</span> <span m='613170'>binary</span> <span
  m='613600'>trees.</span> <span m='614760'>And</span> <span
  m='615500'>there's</span> <span m='615690'>ways</span> <span
  m='616070'>of</span> <span m='616290'>doing</span> <span m='616760'>all</span>
  <span m='616940'>sorts</span> <span m='617200'>of</span> <span
  m='617290'>things,</span> <span m='617580'>like</span> <span
  m='618220'>scheduling,</span> <span m='619270'>and</span> <span
  m='619620'>sorting,</span> <span m='620560'>using</span> <span
  m='621530'>various</span> <span m='621890'>kinds</span> <span
  m='622140'>of</span> <span m='622230'>trees,</span> <span
  m='622560'>including</span> <span m='622910'>binary</span> <span
  m='623290'>trees.</span> <span m='624200'>And</span> <span
  m='624400'>we</span> <span m='624470'>have</span> <span m='624600'>a</span>
  <span m='624660'>problem</span> <span m='624930'>set</span> <span
  m='625970'>on</span> <span m='626890'>simulating</span> <span
  m='629470'>a</span> <span m='629610'>logic</span> <span
  m='629990'>network</span> <span m='631330'>using</span> <span
  m='632530'>a</span> <span m='632630'>particular</span> <span
  m='633090'>kind</span> <span m='633420'>of</span> <span
  m='634480'>sorting</span> <span m='634920'>algorithm</span> <span
  m='636130'>in</span> <span m='636270'>a</span> <span m='636470'>data</span>
  <span m='636660'>structure.</span> <span m='638340'>That</span> <span
  m='638750'>is</span> <span m='638890'>going</span> <span m='639010'>to</span>
  <span m='639050'>be</span> <span m='639120'>your</span> <span
  m='639260'>second</span> <span m='639520'>problem</span> <span
  m='639840'>set.</span> </p><p><span m='641150'>And</span> <span
  m='641470'>more</span> <span m='641670'>quickly,</span> <span
  m='642960'>we're</span> <span m='643050'>going</span> <span
  m='643240'>to</span> <span m='643290'>have</span> <span
  m='645400'>modules</span> <span m='645890'>on</span> <span
  m='646030'>hashing,</span> <span m='647190'>where</span> <span
  m='647480'>we</span> <span m='647600'>do</span> <span m='647790'>things</span>
  <span m='648100'>like</span> <span m='649410'>genome</span> <span
  m='649860'>comparison.</span> <span m='651240'>In</span> <span
  m='651400'>past</span> <span m='651780'>terms</span> <span
  m='653490'>we</span> <span m='653650'>compared</span> <span
  m='653960'>a</span> <span m='654050'>human</span> <span
  m='654350'>genome</span> <span m='654770'>to</span> <span m='654950'>a
  rat</span> <span m='655290'>genome,</span> <span m='656330'>and</span> <span
  m='656500'>discovered</span> <span m='656960'>they</span> <span
  m='657050'>were</span> <span m='657310'>pretty</span> <span
  m='657550'>similar.</span> <span m='659350'>99%</span> <span
  m='660180'>similar,</span> <span m='660520'>which</span> <span
  m='660630'>is</span> <span m='660750'>kind</span> <span m='660870'>of</span>
  <span m='660950'>amazing.</span> </p><p><span m='661860'>But</span> <span
  m='662060'>again,</span> <span m='662540'>these</span> <span
  m='662650'>things</span> <span m='662930'>are</span> <span
  m='663100'>so</span> <span m='663300'>large</span> <span
  m='664490'>that</span> <span m='664840'>you</span> <span
  m='664960'>have</span> <span m='665100'>to</span> <span m='665180'>have</span>
  <span m='665370'>efficiency</span> <span m='666110'>in</span> <span
  m='666470'>the</span> <span m='666610'>comparison</span> <span
  m='667120'>methods</span> <span m='667590'>that</span> <span
  m='667690'>you</span> <span m='667790'>use.</span> <span m='668460'>And</span>
  <span m='668620'>you'll</span> <span m='668770'>find</span> <span
  m='669210'>that</span> <span m='669960'>if</span> <span m='670050'>you</span>
  <span m='670110'>don't</span> <span m='670300'>get</span> <span
  m='670530'>the</span> <span m='670890'>complexity</span> <span
  m='671480'>low</span> <span m='671690'>enough,</span> <span
  m='672260'>you</span> <span m='672390'>just</span> <span
  m='672600'>won't</span> <span m='672800'>be</span> <span
  m='672900'>able</span> <span m='673070'>to</span> <span
  m='673140'>complete--</span> <span m='675300'>your</span> <span
  m='675720'>program</span> <span m='676180'>won't</span> <span
  m='676330'>be</span> <span m='676440'>able</span> <span m='676660'>to</span>
  <span m='676990'>finish</span> <span m='677310'>running</span> <span
  m='678220'>within</span> <span m='679420'>the</span> <span
  m='679660'>time</span> <span m='679950'>that</span> <span
  m='680040'>your</span> <span m='680150'>problem</span> <span
  m='680380'>set</span> <span m='680760'>is do.</span> <span
  m='681390'>Right?</span> <span m='681760'>Which</span> <span
  m='681900'>is</span> <span m='682020'>a</span> <span m='682070'>bit</span>
  <span m='682200'>of</span> <span m='682290'>a</span> <span
  m='682350'>problem.</span> </p><p><span m='684660'>So</span> <span
  m='684780'>that's</span> <span m='684960'>something</span> <span
  m='685280'>to</span> <span m='685340'>keep</span> <span m='685520'>in</span>
  <span m='685620'>mind</span> <span m='686260'>as</span> <span
  m='686520'>you</span> <span m='687030'>test</span> <span
  m='687330'>your</span> <span m='687510'>code.</span> <span
  m='688860'>The</span> <span m='689020'>fact</span> <span m='689320'>is</span>
  <span m='689460'>that</span> <span m='689560'>you</span> <span
  m='689680'>will</span> <span m='689830'>get</span> <span
  m='690030'>large</span> <span m='690320'>inputs</span> <span m='690710'>to
  run</span> <span m='690930'>your</span> <span m='691070'>code.</span> <span
  m='692140'>And</span> <span m='693510'>you</span> <span m='693660'>want</span>
  <span m='693750'>to</span> <span m='693790'>keep</span> <span
  m='693980'>complexity</span> <span m='694500'>in</span> <span
  m='694580'>mind</span> <span m='694960'>as</span> <span
  m='695210'>you're</span> <span m='695860'>coding</span> <span
  m='696250'>and</span> <span m='696350'>thinking</span> <span
  m='696660'>about</span> <span m='697550'>the</span> <span
  m='699500'>pseudocode,</span> <span m='700070'>if</span> <span
  m='700160'>you</span> <span m='700290'>will,</span> <span m='700550'>of</span>
  <span m='700660'>your</span> <span m='700880'>algorithm</span> <span
  m='701120'>itself.</span> </p><p><span m='703710'>We</span> <span
  m='703820'>will</span> <span m='703940'>talk</span> <span
  m='704160'>about</span> <span m='704360'>numerics.</span> <span
  m='707420'>A</span> <span m='707450'>lot</span> <span m='707650'>of</span>
  <span m='707700'>the</span> <span m='707800'>time</span> <span
  m='708820'>we</span> <span m='708860'>talk</span> <span
  m='709080'>about</span> <span m='709320'>such</span> <span
  m='709640'>large</span> <span m='710010'>numbers</span> <span
  m='710840'>that</span> <span m='711080'>32</span> <span m='711450'>bits</span>
  <span m='711950'>isn't</span> <span m='712240'>enough.</span> <span
  m='714290'>Or</span> <span m='714420'>64</span> <span m='714850'>bits</span>
  <span m='715070'>isn't</span> <span m='715330'>enough</span> <span
  m='715600'>to</span> <span m='715710'>represent</span> <span
  m='716110'>these</span> <span m='716290'>numbers.</span> <span
  m='717130'>These</span> <span m='717190'>numbers</span> <span
  m='717520'>have</span> <span m='717680'>thousands</span> <span
  m='718100'>of</span> <span m='718230'>bits.</span> </p><p><span
  m='718910'>A</span> <span m='718980'>good</span> <span
  m='719110'>example</span> <span m='719570'>is</span> <span
  m='719680'>RSA</span> <span m='720160'>encryption,</span> <span
  m='721110'>that</span> <span m='721260'>is</span> <span m='721350'>used</span>
  <span m='722800'>in</span> <span m='723590'>SSL,</span> <span
  m='724130'>for</span> <span m='724260'>example.</span> <span
  m='725140'>And</span> <span m='725820'>when</span> <span m='725970'>you</span>
  <span m='726750'>go--</span> <span m='727150'>use</span> <span
  m='727420'>https</span> <span m='728310'>on</span> <span
  m='728420'>websites,</span> <span m='729720'>RSA</span> <span
  m='730400'>is</span> <span m='730600'>used</span> <span m='731480'>at</span>
  <span m='731690'>the</span> <span m='731760'>back</span> <span
  m='732030'>end.</span> <span m='732710'>And</span> <span
  m='733060'>typically</span> <span m='733530'>you</span> <span
  m='733650'>work</span> <span m='734090'>with</span> <span
  m='734630'>prime</span> <span m='734960'>numbers</span> <span
  m='735360'>that</span> <span m='735660'>are</span> <span
  m='735940'>thousands</span> <span m='736070'>of</span> <span
  m='736160'>bits</span> <span m='736960'>long</span> <span m='737470'>in</span>
  <span m='737630'>RSA.</span> </p><p><span m='738510'>So</span> <span
  m='738720'>how</span> <span m='738850'>do</span> <span m='738910'>you</span>
  <span m='738960'>handle</span> <span m='739260'>that?</span> <span
  m='739930'>How</span> <span m='739970'>does</span> <span
  m='740110'>Python</span> <span m='740530'>handle</span> <span
  m='740820'>that?</span> <span m='741270'>How</span> <span m='741330'>do</span>
  <span m='741390'>you</span> <span m='741480'>write</span> <span
  m='741770'>algorithms</span> <span m='742650'>that</span> <span
  m='742780'>can</span> <span m='742950'>deal</span> <span
  m='743230'>with</span> <span m='743960'>what</span> <span
  m='744150'>are</span> <span m='744210'>called</span> <span
  m='744440'>infinite</span> <span m='744880'>precision</span> <span
  m='745370'>numbers?</span> <span m='746270'>So</span> <span
  m='746730'>we</span> <span m='746850'>have</span> <span m='746980'>a</span>
  <span m='747030'>module</span> <span m='747390'>on</span> <span
  m='747500'>numerics</span> <span m='748690'>in</span> <span
  m='748830'>the</span> <span m='748880'>middle</span> <span m='749230'>of
  the</span> <span m='749500'>term</span> <span m='749795'>that</span> <span
  m='750500'>talks</span> <span m='750730'>about</span> <span
  m='750930'>that.</span> </p><p><span m='751850'>Graphs,</span> <span
  m='753280'>really a</span> <span m='753580'>fundamental</span> <span
  m='754780'>data</span> <span m='754990'>structure</span> <span
  m='755480'>in</span> <span m='755760'>all</span> <span m='755950'>of</span>
  <span m='756040'>computer</span> <span m='756430'>science.</span> <span
  m='757970'>You</span> <span m='758090'>might</span> <span
  m='758220'>have</span> <span m='758310'>heard</span> <span
  m='758530'>of</span> <span m='760030'>the</span> <span
  m='760110'>famous</span> <span m='760480'>Rubik's</span> <span
  m='760960'>cube</span> <span m='762060'>assignment</span> <span
  m='762640'>from</span> <span m='762800'>.</span> <span m='763110'>006</span>
  <span m='764430'>a</span> <span m='764520'>2</span> <span m='764670'>by</span>
  <span m='764830'>2</span> <span m='765020'>by</span> <span m='765170'>2</span>
  <span m='765400'>Rubik's</span> <span m='765750'>cube.</span> <span
  m='766850'>What's</span> <span m='767310'>the</span> <span
  m='767440'>minimum</span> <span m='767880'>number</span> <span
  m='768140'>of</span> <span m='768250'>moves</span> <span
  m='768690'>necessary</span> <span m='770090'>to</span> <span
  m='770260'>go</span> <span m='770500'>from</span> <span m='770760'>a</span>
  <span m='770850'>given</span> <span m='771390'>starting</span> <span
  m='771880'>configuration</span> <span m='773240'>to</span> <span
  m='773520'>the</span> <span m='773640'>final</span> <span
  m='774010'>end</span> <span m='774250'>configuration,</span> <span
  m='774900'>where</span> <span m='775040'>all</span> <span m='775190'>of</span>
  <span m='775270'>the</span> <span m='775340'>faces--</span> <span
  m='776450'>each</span> <span m='776640'>of</span> <span m='776720'>the</span>
  <span m='776790'>faces</span> <span m='777180'>has</span> <span
  m='777360'>uniform</span> <span m='777840'>color?</span> <span
  m='778940'>And</span> <span m='779120'>that</span> <span m='779690'>can</span>
  <span m='779840'>be</span> <span m='779950'>posed</span> <span
  m='780270'>as</span> <span m='780370'>a</span> <span m='780430'>graph</span>
  <span m='780740'>problem.</span> </p><p><span m='781830'>We'll</span> <span
  m='782130'>probably</span> <span m='782430'>do</span> <span
  m='782540'>that</span> <span m='782720'>one</span> <span
  m='783470'>this</span> <span m='783710'>term.</span> <span
  m='784160'>In</span> <span m='784350'>previous</span> <span
  m='784660'>terms</span> <span m='784930'>we've</span> <span
  m='785090'>done</span> <span m='785250'>other</span> <span
  m='785430'>things</span> <span m='785760'>like</span> <span
  m='785960'>the</span> <span m='786030'>15</span> <span
  m='786450'>puzzle.</span> <span m='787310'>And</span> <span
  m='787520'>so</span> <span m='787870'>some</span> <span m='788110'>of</span>
  <span m='788160'>these</span> <span m='788360'>are</span> <span
  m='788750'>tentative.</span> <span m='790170'>We</span> <span
  m='790350'>definitely</span> <span m='790730'>know</span> <span
  m='790870'>what</span> <span m='790980'>the</span> <span
  m='791040'>first</span> <span m='791290'>problem</span> <span
  m='791520'>set</span> <span m='791700'>is</span> <span m='791820'>like,</span>
  <span m='792420'>but</span> <span m='793040'>the</span> <span
  m='793340'>rest</span> <span m='793580'>of</span> <span m='793630'>them</span>
  <span m='793850'>are,</span> <span m='794190'>at</span> <span
  m='794310'>this</span> <span m='794460'>moment,</span> <span
  m='794800'>tentative.</span> </p><p><span m='796420'>And</span> <span
  m='796750'>to</span> <span m='796950'>finish</span> <span m='797200'>up</span>
  <span m='798520'>shortest</span> <span m='799080'>paths.</span> <span
  m='800340'>Again</span> <span m='801180'>in</span> <span
  m='801310'>terms</span> <span m='801710'>past</span> <span
  m='802830'>we've</span> <span m='803050'>asked</span> <span
  m='804480'>you</span> <span m='804660'>to</span> <span m='804740'>write</span>
  <span m='805030'>code</span> <span m='805940'>using</span> <span
  m='806230'>a</span> <span m='806280'>particular</span> <span
  m='806720'>algorithm</span> <span m='807190'>that</span> <span
  m='807380'>finds</span> <span m='807640'>the</span> <span
  m='807700'>shortest</span> <span m='808060'>path</span> <span
  m='808310'>from</span> <span m='808470'>Caltech</span> <span
  m='808950'>to</span> <span m='809290'>MIT.</span> <span m='811120'>This</span>
  <span m='811320'>time</span> <span m='811580'>we</span> <span
  m='811660'>may</span> <span m='811790'>do</span> <span
  m='812000'>things</span> <span m='812230'>a</span> <span
  m='812280'>little</span> <span m='812400'>bit</span> <span
  m='812540'>differently.</span> <span m='813150'>We</span> <span
  m='813570'>were</span> <span m='813730'>thinking</span> <span
  m='814630'>maybe</span> <span m='814940'>we'll give</span> <span
  m='815090'>you</span> <span m='815240'>a</span> <span m='815320'>street</span>
  <span m='815710'>map</span> <span m='815960'>of</span> <span
  m='816020'>Boston</span> <span m='817150'>and</span> <span
  m='819040'>go</span> <span m='819180'>figure</span> <span
  m='819450'>out</span> <span m='819580'>if</span> <span m='819690'>Paul</span>
  <span m='819980'>Revere</span> <span m='821050'>used</span> <span
  m='821360'>the</span> <span m='821430'>shortest</span> <span
  m='821830'>path</span> <span m='822550'>to</span> <span m='822820'>get</span>
  <span m='823000'>to</span> <span m='823090'>where he</span> <span
  m='823320'>was</span> <span m='823480'>going,</span> <span
  m='824140'>or</span> <span m='824260'>things</span> <span
  m='824470'>like</span> <span m='824680'>that.</span> <span
  m='825025'>We'll</span> <span m='825370'>try</span> <span
  m='825570'>and</span> <span m='825670'>make</span> <span m='825770'>it</span>
  <span m='825790'>fun.</span> </p><p><span m='827540'>Dynamic</span> <span
  m='828010'>programming</span> <span m='829550'>is</span> <span
  m='831470'>an</span> <span m='831600'>important</span> <span
  m='833000'>algorithm</span> <span m='834010'>design</span> <span
  m='834420'>technique</span> <span m='835300'>that's</span> <span
  m='835520'>used</span> <span m='835930'>in</span> <span
  m='836980'>many,</span> <span m='837470'>many</span> <span
  m='839180'>problems.</span> <span m='840690'>And</span> <span
  m='841100'>it</span> <span m='841190'>can</span> <span m='841300'>be</span>
  <span m='841400'>used</span> <span m='842060'>to</span> <span
  m='842140'>do</span> <span m='843280'>a</span> <span m='843350'>variety</span>
  <span m='843710'>of</span> <span m='843800'>things,</span> <span
  m='844160'>including</span> <span m='844510'>image</span> <span
  m='844740'>compression.</span> <span m='846600'>How do</span> <span
  m='846780'>you</span> <span m='846820'>compress</span> <span
  m='847240'>an</span> <span m='847350'>image</span> <span m='848290'>so</span>
  <span m='849090'>the</span> <span m='849220'>number</span> <span
  m='849420'>of</span> <span m='849490'>pixels</span> <span
  m='850060'>reduces,</span> <span m='851440'>but</span> <span
  m='851680'>it</span> <span m='851750'>still</span> <span
  m='851970'>looks</span> <span m='852340'>like</span> <span
  m='852560'>the</span> <span m='852630'>image</span> <span
  m='852960'>that</span> <span m='853520'>you</span> <span
  m='853650'>started</span> <span m='853970'>out</span> <span
  m='854150'>with,</span> <span m='854360'>that</span> <span
  m='854470'>had</span> <span m='854720'>many</span> <span
  m='854880'>more</span> <span m='855090'>pixels?</span> <span m='855980'>All
  right?</span> <span m='856260'>So</span> <span m='856370'>you</span> <span
  m='856430'>could</span> <span m='856510'>use</span> <span
  m='856690'>dynamic</span> <span m='857060'>programming</span> <span
  m='857440'>for</span> <span m='857560'>that.</span> </p><p><span
  m='858970'>And</span> <span m='859030'>finally,</span> <span
  m='860080'>advanced</span> <span m='860520'>topics,</span> <span
  m='861120'>complexity</span> <span m='861680'>theory,</span> <span
  m='862950'>research</span> <span m='863370'>and</span> <span
  m='863440'>algorithms.</span> <span m='865760'>Hopefully</span> <span
  m='866430'>by</span> <span m='866550'>now--</span> <span m='866930'>by</span>
  <span m='867160'>this</span> <span m='867400'>time</span> <span
  m='867970'>in</span> <span m='868090'>the</span> <span
  m='868170'>course,</span> <span m='868590'>you</span> <span
  m='868610'>have</span> <span m='868690'>been</span> <span
  m='868840'>sold</span> <span m='869360'>on</span> <span
  m='869480'>algorithms.</span> <span m='870330'>And</span> <span
  m='871530'>most,</span> <span m='871860'>if</span> <span m='871940'>not</span>
  <span m='872100'>all</span> <span m='872280'>of</span> <span
  m='872350'>you,</span> <span m='872480'>would want</span> <span
  m='872730'>to</span> <span m='872780'>pursue</span> <span m='873160'>a</span>
  <span m='873230'>carrier</span> <span m='873650'>in</span> <span
  m='873760'>algorithms.</span> <span m='874550'>And</span> <span
  m='875430'>we'll</span> <span m='875550'>give</span> <span
  m='875660'>you</span> <span m='875760'>a</span> <span m='875820'>sense</span>
  <span m='876130'>of</span> <span m='876860'>what</span> <span
  m='877050'>else</span> <span m='877250'>is</span> <span
  m='877390'>there.</span> <span m='877680'>We're</span> <span
  m='877810'>just</span> <span m='877940'>scratching</span> <span
  m='878330'>the</span> <span m='878430'>surface</span> <span
  m='879520'>in</span> <span m='879660'>this</span> <span
  m='879840'>class,</span> <span m='880570'>and</span> <span
  m='880760'>there's</span> <span m='880910'>many,</span> <span
  m='881240'>many</span> <span m='881340'>classes</span> <span
  m='881770'>that</span> <span m='881880'>you</span> <span m='881990'>can</span>
  <span m='882090'>possibly</span> <span m='882530'>take</span> <span
  m='883490'>if</span> <span m='883710'>you</span> <span m='883830'>want</span>
  <span m='883950'>to</span> <span m='883990'>continue</span> <span
  m='885970'>in--</span> <span m='886680'>to</span> <span
  m='886810'>learn</span> <span m='886990'>about</span> <span
  m='887170'>algorithms,</span> <span m='887650'>or</span> <span
  m='887770'>to</span> <span m='887860'>pursue</span> <span m='888220'>a
  career</span> <span m='888590'>in algorithms.</span> <span
  m='889790'>All</span> <span m='889870'>right?</span> </p><p><span
  m='891580'>So</span> <span m='892110'>that's</span> <span m='892360'>the
  story</span> <span m='893120'>of</span> <span m='893420'>the</span> <span
  m='893510'>class,</span> <span m='893990'>or the</span> <span
  m='894070'>synopsis</span> <span m='894540'>of</span> <span
  m='894620'>the</span> <span m='894690'>class.</span> <span
  m='895840'>And</span> <span m='896520'>I</span> <span
  m='897120'>encourage</span> <span m='897520'>you</span> <span
  m='897720'>to</span> <span m='898420'>go</span> <span m='898920'>spend</span>
  <span m='900360'>a</span> <span m='900460'>few</span> <span
  m='900650'>minutes</span> <span m='900920'>on</span> <span
  m='901040'>the</span> <span m='901120'>website.</span> <span
  m='901950'>In</span> <span m='902100'>particular</span> <span
  m='903040'>please</span> <span m='903510'>read</span> <span
  m='903810'>the</span> <span m='903890'>collaboration</span> <span
  m='904480'>policy,</span> <span m='905430'>and</span> <span
  m='905750'>get</span> <span m='905850'>a</span> <span m='905900'>sense</span>
  <span m='906240'>of</span> <span m='906380'>what</span> <span
  m='906530'>is</span> <span m='906860'>expected</span> <span
  m='907340'>of</span> <span m='907450'>you.</span> <span m='908440'>What</span>
  <span m='909750'>the</span> <span m='909850'>rules</span> <span
  m='910200'>are</span> <span m='910440'>in</span> <span m='910540'>terms</span>
  <span m='910840'>of</span> <span m='911940'>doing</span> <span
  m='912320'>the</span> <span m='912400'>problem</span> <span
  m='912680'>sets.</span> <span m='913580'>And</span> <span
  m='914830'>the</span> <span m='915280'>course</span> <span
  m='916080'>grading</span> <span m='916540'>break</span> <span
  m='916800'>down,</span> <span m='917100'>the</span> <span
  m='917180'>grading</span> <span m='917630'>policies</span> <span
  m='918540'>are</span> <span m='918670'>all</span> <span
  m='918820'>listed</span> <span m='919100'>on</span> <span
  m='919190'>the</span> <span m='919260'>website</span> <span
  m='919610'>as</span> <span m='919740'>well.</span> <span m='920860'>All</span>
  <span m='921300'>right.</span> </p><p><span m='923000'>OK.</span> <span
  m='923870'>So</span> <span m='925000'>let's</span> <span m='925190'>get</span>
  <span m='925320'>started.</span> <span m='926210'>I</span> <span
  m='926330'>want</span> <span m='926490'>to</span> <span m='926550'>talk</span>
  <span m='926770'>about</span> <span m='927110'>a</span> <span
  m='927330'>specific</span> <span m='927880'>problem.</span> <span
  m='928930'>And</span> <span m='929300'>talk</span> <span
  m='929470'>about</span> <span m='929650'>algorithms</span> <span
  m='930170'>for</span> <span m='930380'>a</span> <span
  m='930440'>specific</span> <span m='930940'>problem.</span> <span
  m='932000'>We</span> <span m='932160'>picked</span> <span
  m='932360'>this</span> <span m='932530'>problem,</span> <span
  m='932920'>because</span> <span m='933210'>it's</span> <span
  m='933410'>so</span> <span m='933630'>easy</span> <span m='934090'>to</span>
  <span m='934300'>understand.</span> <span m='935560'>And</span> <span
  m='936120'>they're</span> <span m='936430'>fairly</span> <span
  m='936920'>straightforward</span> <span m='937720'>algorithms</span> <span
  m='938790'>that</span> <span m='938940'>are</span> <span m='939000'>not</span>
  <span m='939230'>particularly</span> <span m='939890'>efficient</span> <span
  m='940610'>to</span> <span m='940940'>solve</span> <span
  m='941280'>this</span> <span m='941430'>problem.</span> <span
  m='942530'>And</span> <span m='942650'>so</span> <span m='942830'>this</span>
  <span m='943090'>is</span> <span m='943270'>a,</span> <span
  m='943480'>kind</span> <span m='943620'>of,</span> <span m='943700'>a</span>
  <span m='943780'>toy</span> <span m='944050'>problem.</span> <span
  m='945060'>But</span> <span m='946870'>like</span> <span m='947310'>a</span>
  <span m='947390'>lot</span> <span m='947560'>of</span> <span
  m='947620'>toy</span> <span m='947800'>problems,</span> <span
  m='949060'>it's</span> <span m='949660'>very</span> <span
  m='950370'>evocative</span> <span m='951380'>in</span> <span
  m='951590'>that</span> <span m='952020'>it</span> <span
  m='952370'>points</span> <span m='952760'>out</span> <span
  m='953440'>the</span> <span m='953570'>issues</span> <span
  m='953990'>involved</span> <span m='955230'>in</span> <span
  m='955550'>designing</span> <span m='955990'>efficient</span> <span
  m='956390'>algorithms.</span> </p><p><span m='957860'>So</span> <span
  m='957900'>we'll</span> <span m='958020'>start</span> <span
  m='958330'>with</span> <span m='958460'>a</span> <span m='958520'>one</span>
  <span m='958770'>dimensional</span> <span m='959280'>version</span> <span
  m='960220'>of</span> <span m='960340'>what</span> <span m='960520'>we</span>
  <span m='960630'>call</span> <span m='961860'>peak</span> <span
  m='962100'>finding.</span> <span m='965810'>And</span> <span
  m='966530'>a</span> <span m='966710'>peak</span> <span
  m='966930'>finder</span> <span m='968410'>is</span> <span
  m='968570'>something</span> <span m='969500'>in</span> <span
  m='969640'>the</span> <span m='969730'>one</span> <span
  m='969880'>dimensional</span> <span m='970350'>case.</span> <span
  m='974180'>Runs</span> <span m='974550'>on</span> <span m='974660'>an</span>
  <span m='974800'>array</span> <span m='975900'>of</span> <span
  m='976100'>numbers.</span> <span m='978240'>And</span> <span
  m='978540'>I'm</span> <span m='978600'>just</span> <span
  m='978790'>putting--</span> </p><p></p><p><span m='982770'>--symbols</span>
  <span m='983280'>for</span> <span m='983430'>each</span> <span
  m='983570'>of</span> <span m='983640'>these</span> <span
  m='983820'>numbers</span> <span m='984190'>here.</span> <span
  m='987020'>And</span> <span m='988880'>the</span> <span
  m='989010'>numbers</span> <span m='989400'>are</span> <span
  m='990240'>positive,</span> <span m='990790'>negative.</span> <span
  m='991580'>We'll</span> <span m='992030'>just</span> <span
  m='992160'>assume</span> <span m='992380'>they're</span> <span
  m='992560'>all</span> <span m='992710'>positive,</span> <span
  m='993170'>it</span> <span m='993210'>doesn't</span> <span
  m='993440'>really</span> <span m='993580'>matter.</span> <span
  m='994480'>The</span> <span m='994700'>algorithms</span> <span
  m='995020'>we</span> <span m='995160'>describe</span> <span
  m='996320'>will</span> <span m='996470'>work.</span> </p><p><span
  m='998460'>And</span> <span m='998670'>so</span> <span m='998840'>we</span>
  <span m='998950'>have</span> <span m='999180'>this</span> <span
  m='999850'>one</span> <span m='1000080'>dimensional</span> <span
  m='1000520'>array</span> <span m='1001330'>that</span> <span
  m='1001460'>has</span> <span m='1001650'>nine</span> <span
  m='1001920'>different</span> <span m='1002240'>positions.</span> <span
  m='1003450'>And</span> <span m='1005130'>a</span> <span m='1005630'>through
  i</span> <span m='1006930'>are</span> <span m='1007120'>numbers.</span> <span
  m='1009910'>And</span> <span m='1010230'>we</span> <span
  m='1010320'>want</span> <span m='1010460'>to</span> <span
  m='1010520'>find</span> <span m='1011470'>a</span> <span
  m='1011590'>peak.</span> <span m='1013030'>And</span> <span
  m='1013260'>so</span> <span m='1013360'>we</span> <span
  m='1013430'>have</span> <span m='1013540'>to</span> <span
  m='1013620'>define</span> <span m='1014080'>what</span> <span
  m='1014220'>we</span> <span m='1014340'>mean</span> <span
  m='1014580'>by</span> <span m='1014750'>a</span> <span
  m='1014820'>peak.</span> <span m='1016180'>And</span> <span
  m='1016370'>so,</span> <span m='1017390'>in</span> <span
  m='1017560'>particular,</span> <span m='1018690'>as</span> <span
  m='1018880'>an</span> <span m='1018960'>example,</span> <span
  m='1020320'>position</span> <span m='1020990'>2</span> <span
  m='1022550'>is</span> <span m='1023010'>a</span> <span m='1023130'>peak</span>
  <span m='1026589'>if,</span> <span m='1026950'>and</span> <span
  m='1027060'>only</span> <span m='1027369'>if,</span> <span
  m='1031880'>b</span> <span m='1032300'>greater</span> <span
  m='1032579'>than</span> <span m='1032730'>or</span> <span
  m='1032819'>equal</span> <span m='1033050'>to</span> <span
  m='1033190'>a,</span> <span m='1034680'>and</span> <span m='1035900'>b</span>
  <span m='1036210'>greater</span> <span m='1036390'>than or equal</span> <span
  m='1036520'>to</span> <span m='1036680'>c.</span> </p><p><span
  m='1038020'>So</span> <span m='1038290'>it's</span> <span
  m='1038619'>really</span> <span m='1038810'>a</span> <span
  m='1038849'>very</span> <span m='1039250'>local</span> <span
  m='1039800'>property</span> <span m='1040819'>corresponding</span> <span
  m='1041359'>to</span> <span m='1041450'>a</span> <span
  m='1041520'>peak.</span> <span m='1042270'>In</span> <span
  m='1042380'>the</span> <span m='1042460'>one</span> <span
  m='1042609'>dimensional</span> <span m='1043050'>case,</span> <span
  m='1043420'>it's</span> <span m='1044150'>trivial.</span> <span
  m='1045020'>Look to your</span> <span m='1045460'>left.</span> <span
  m='1046220'>Look to</span> <span m='1046440'>your</span> <span
  m='1046640'>right.</span> <span m='1047990'>If</span> <span
  m='1048150'>you</span> <span m='1048290'>are</span> <span
  m='1048490'>equal</span> <span m='1048910'>or</span> <span
  m='1049030'>greater</span> <span m='1049360'>than</span> <span
  m='1051140'>both</span> <span m='1051440'>of</span> <span
  m='1051520'>the</span> <span m='1051600'>elements</span> <span
  m='1051990'>that</span> <span m='1052120'>you</span> <span
  m='1052230'>see</span> <span m='1052570'>on</span> <span
  m='1052670'>the</span> <span m='1052760'>left</span> <span
  m='1053020'>and</span> <span m='1053110'>the</span> <span
  m='1053200'>right,</span> <span m='1053810'>you're</span> <span m='1053970'>a
  peak.</span> <span m='1055120'>OK?</span> </p><p><span m='1055760'>And</span>
  <span m='1056070'>in</span> <span m='1056150'>the</span> <span
  m='1056240'>case</span> <span m='1056520'>of</span> <span
  m='1056650'>the</span> <span m='1057360'>edges,</span> <span
  m='1058350'>you</span> <span m='1058530'>only</span> <span
  m='1058690'>have</span> <span m='1058840'>to</span> <span
  m='1058960'>look</span> <span m='1059200'>to</span> <span
  m='1059300'>one</span> <span m='1059520'>side.</span> <span
  m='1060700'>So</span> <span m='1060940'>position</span> <span
  m='1061470'>9</span> <span m='1065010'>is</span> <span m='1065210'>a</span>
  <span m='1065290'>peak</span> <span m='1069040'>if</span> <span
  m='1070640'>i</span> <span m='1070850'>greater</span> <span
  m='1071070'>than</span> <span m='1071120'>or</span> <span
  m='1071300'>equal</span> <span m='1071530'>to</span> <span
  m='1071810'>h.</span> <span m='1073760'>So</span> <span m='1073880'>you</span>
  <span m='1073960'>just</span> <span m='1074110'>have</span> <span
  m='1074230'>to</span> <span m='1074250'>look</span> <span m='1074450'>to
  your</span> <span m='1074850'>left</span> <span m='1075210'>there,</span>
  <span m='1075400'>because</span> <span m='1075660'>you're</span> <span
  m='1075760'>all</span> <span m='1075920'>the</span> <span
  m='1075990'>way</span> <span m='1076100'>on</span> <span
  m='1076200'>the</span> <span m='1076260'>right</span> <span
  m='1076420'>hand</span> <span m='1076550'>side.</span> <span
  m='1077360'>All</span> <span m='1077450'>right?</span> <span
  m='1078270'>So</span> <span m='1078850'>that's</span> <span
  m='1079040'>it.</span> </p><p><span m='1080480'>And</span> <span
  m='1081120'>the</span> <span m='1081410'>statement</span> <span
  m='1081800'>of</span> <span m='1081890'>the</span> <span
  m='1081960'>problem,</span> <span m='1083250'>the</span> <span
  m='1083350'>one</span> <span m='1083510'>dimensional</span> <span
  m='1083920'>version,</span> <span m='1085230'>is</span> <span
  m='1088660'>find</span> <span m='1089030'>the</span> <span
  m='1089120'>peak</span> <span m='1093040'>if</span> <span
  m='1093380'>it</span> <span m='1093520'>exists.</span> <span
  m='1099490'>All</span> <span m='1099590'>right?</span> <span
  m='1102070'>That's</span> <span m='1102280'>all</span> <span
  m='1102400'>there</span> <span m='1102470'>is</span> <span
  m='1102720'>to</span> <span m='1102790'>it.</span> </p><p><span
  m='1104510'>I'm</span> <span m='1104910'>going</span> <span
  m='1105000'>to</span> <span m='1105040'>give</span> <span
  m='1105170'>you</span> <span m='1105280'>a</span> <span
  m='1105350'>straightforward</span> <span m='1105850'>algorithm.</span> <span
  m='1107890'>And</span> <span m='1108710'>then</span> <span
  m='1109240'>we'll</span> <span m='1109490'>see if we can</span> <span
  m='1109790'>improve</span> <span m='1110100'>it.</span> <span
  m='1110630'>All</span> <span m='1111040'>right?</span> <span
  m='1111270'>You</span> <span m='1111410'>can</span> <span
  m='1111490'>imagine</span> <span m='1111820'>that the</span> <span
  m='1111980'>straightforward</span> <span m='1112430'>algorithm</span> <span
  m='1113750'>is</span> <span m='1114110'>something</span> <span
  m='1114440'>that</span> <span m='1114560'>just,</span> <span
  m='1115010'>you</span> <span m='1115130'>know,</span> <span
  m='1115240'>walks</span> <span m='1115550'>across</span> <span
  m='1116890'>the</span> <span m='1117240'>array.</span> <span
  m='1119440'>But</span> <span m='1120530'>we</span> <span
  m='1120680'>need</span> <span m='1120850'>that</span> <span
  m='1121010'>as</span> <span m='1121120'>a</span> <span
  m='1121170'>starting</span> <span m='1121520'>point</span> <span
  m='1123030'>for</span> <span m='1123190'>building</span> <span
  m='1123500'>something</span> <span m='1123840'>more</span> <span
  m='1124020'>sophisticated.</span> </p><p></p><p><span m='1129680'>So</span>
  <span m='1129820'>let's</span> <span m='1129920'>say</span> <span
  m='1130070'>we</span> <span m='1130170'>start</span> <span
  m='1130510'>from</span> <span m='1130690'>left</span> <span
  m='1136210'>and</span> <span m='1137110'>all</span> <span
  m='1137340'>we</span> <span m='1137480'>have</span> <span
  m='1139410'>is</span> <span m='1140070'>one</span> <span
  m='1140470'>traversal,</span> <span m='1141080'>really.</span>
  </p><p></p><p><span m='1145360'>So</span> <span m='1145610'>let's</span> <span
  m='1145750'>say</span> <span m='1145950'>we have</span> <span
  m='1146090'>1,</span> <span m='1146480'>2,</span> <span m='1147650'>and</span>
  <span m='1147850'>then we</span> <span m='1147930'>have</span> <span
  m='1148080'>n</span> <span m='1148270'>over</span> <span m='1148520'>2</span>
  <span m='1148770'>over</span> <span m='1148960'>here</span> <span
  m='1150190'>corresponding</span> <span m='1150810'>to</span> <span
  m='1150920'>the</span> <span m='1151020'>middle</span> <span
  m='1151490'>of</span> <span m='1151680'>this</span> <span m='1151960'>n</span>
  <span m='1152330'>element</span> <span m='1153240'>array.</span> <span
  m='1154620'>And</span> <span m='1154790'>then</span> <span
  m='1154980'>we</span> <span m='1155070'>have</span> <span m='1155240'>n</span>
  <span m='1155380'>minus</span> <span m='1155720'>1,</span> <span
  m='1157800'>and</span> <span m='1158020'>n.</span> <span
  m='1158970'>What</span> <span m='1159160'>I'm</span> <span
  m='1159270'>interested</span> <span m='1159600'>in</span> <span
  m='1159700'>doing</span> <span m='1160090'>is,</span> <span
  m='1160700'>not</span> <span m='1160860'>only</span> <span
  m='1161090'>coming</span> <span m='1161440'>up</span> <span m='1162170'>with
  a</span> <span m='1163150'>straightforward</span> <span
  m='1163800'>algorithm,</span> <span m='1164880'>but</span> <span
  m='1165970'>also</span> <span m='1166870'>precisely</span> <span
  m='1167770'>characterizing</span> <span m='1169300'>what</span> <span
  m='1169720'>its</span> <span m='1169990'>complexity</span> <span
  m='1170690'>is</span> <span m='1171380'>in</span> <span
  m='1171540'>relation</span> <span m='1172030'>to</span> <span
  m='1172190'>n,</span> <span m='1173550'>which</span> <span
  m='1173770'>is</span> <span m='1174350'>the</span> <span
  m='1174590'>number</span> <span m='1174890'>of</span> <span
  m='1175010'>inputs.</span> </p><p><span m='1175560'>Yeah?</span> <span
  m='1175760'>Question?</span> </p><p><span m='1176976'>AUDIENCE: Why do you
  say</span> <span m='1177390'>if it</span> <span m='1177510'>exists</span>
  <span m='1178456'>when the</span> <span m='1178929'>criteria</span> <span
  m='1179402'>in the</span> <span m='1179875'>[INAUDIBLE]</span> <span
  m='1180348'>guarantees</span> <span m='1180821'>[INAUDIBLE]?</span>
  </p><p><span m='1181770'>PROFESSOR: That's</span> <span
  m='1182000'>exactly</span> <span m='1182330'>right.</span> <span
  m='1182730'>I</span> <span m='1182820'>was</span> <span
  m='1182930'>going</span> <span m='1183050'>to</span> <span
  m='1183090'>get</span> <span m='1183250'>to</span> <span
  m='1183310'>that.</span> <span m='1184540'>So</span> <span
  m='1185830'>if</span> <span m='1185960'>you</span> <span
  m='1186050'>look</span> <span m='1186200'>at</span> <span
  m='1186260'>the</span> <span m='1186340'>definition</span> <span
  m='1187660'>of</span> <span m='1188050'>the</span> <span
  m='1188630'>peak,</span> <span m='1190530'>then</span> <span
  m='1191230'>what</span> <span m='1191430'>I</span> <span
  m='1191480'>have</span> <span m='1191760'>here</span> <span
  m='1192170'>is</span> <span m='1193450'>greater</span> <span
  m='1193830'>than</span> <span m='1194070'>or</span> <span
  m='1194180'>equal</span> <span m='1194530'>to.</span> <span
  m='1195210'>OK?</span> <span m='1196010'>And</span> <span
  m='1196180'>so</span> <span m='1196320'>this--</span> <span
  m='1197740'>That's</span> <span m='1197950'>a</span> <span
  m='1197980'>great</span> <span m='1198150'>question</span> <span
  m='1198510'>that</span> <span m='1198530'>was</span> <span
  m='1198690'>asked.</span> <span m='1199660'>Why</span> <span
  m='1200010'>is</span> <span m='1200230'>there</span> <span
  m='1201040'>"if</span> <span m='1201270'>it</span> <span
  m='1201370'>exists"</span> <span m='1201950'>in</span> <span
  m='1202320'>this</span> <span m='1202550'>problem?</span> </p><p><span
  m='1204470'>Now</span> <span m='1205630'>in</span> <span
  m='1205790'>the</span> <span m='1205880'>case</span> <span
  m='1206190'>where</span> <span m='1206450'>I</span> <span
  m='1206490'>have</span> <span m='1206680'>greater</span> <span
  m='1206860'>than</span> <span m='1207000'>or</span> <span
  m='1207130'>equal</span> <span m='1207380'>to,</span> <span
  m='1208440'>then--</span> <span m='1209970'>this</span> <span
  m='1210190'>is</span> <span m='1210320'>a</span> <span
  m='1210380'>homework</span> <span m='1210650'>question</span> <span
  m='1211030'>for</span> <span m='1211670'>you,</span> <span
  m='1212310'>and</span> <span m='1212430'>for</span> <span
  m='1212490'>the</span> <span m='1212570'>rest</span> <span
  m='1212780'>of</span> <span m='1212870'>you--</span> <span
  m='1214320'>argue</span> <span m='1214740'>that</span> <span
  m='1215820'>any</span> <span m='1216150'>array</span> <span
  m='1217750'>will</span> <span m='1217940'>always</span> <span
  m='1218240'>have</span> <span m='1218410'>a</span> <span
  m='1218480'>peak.</span> <span m='1219610'>OK?</span> <span
  m='1220790'>Now</span> <span m='1221260'>if</span> <span
  m='1221730'>you</span> <span m='1221920'>didn't</span> <span
  m='1222090'>have</span> <span m='1222260'>the</span> <span
  m='1222350'>greater</span> <span m='1222620'>than</span> <span
  m='1223370'>or</span> <span m='1223540'>equal</span> <span
  m='1223860'>to,</span> <span m='1224300'>and</span> <span
  m='1224440'>you</span> <span m='1224510'>had</span> <span m='1224710'>a</span>
  <span m='1224750'>greater</span> <span m='1225110'>than,</span> <span
  m='1226150'>then</span> <span m='1227190'>can</span> <span
  m='1227330'>you</span> <span m='1227390'>make</span> <span
  m='1227550'>that</span> <span m='1227640'>argument?</span> <span
  m='1229070'>No,</span> <span m='1229250'>you</span> <span
  m='1229370'>can't.</span> <span m='1230120'>Right?</span> <span
  m='1230820'>So</span> <span m='1232200'>great</span> <span
  m='1232410'>question.</span> </p><p><span m='1233230'>In</span> <span
  m='1233450'>this</span> <span m='1233650'>case</span> <span
  m='1235030'>it's</span> <span m='1235170'>just</span> <span
  m='1235380'>a</span> <span m='1235420'>question--</span> <span
  m='1235930'>You</span> <span m='1236110'>would</span> <span
  m='1236240'>want</span> <span m='1236390'>to</span> <span
  m='1236430'>modify</span> <span m='1236920'>this</span> <span
  m='1237110'>problem</span> <span m='1237400'>statement</span> <span
  m='1237830'>to</span> <span m='1237920'>find</span> <span
  m='1238150'>the</span> <span m='1238230'>peak.</span> <span
  m='1238950'>But</span> <span m='1239190'>if</span> <span m='1240340'>I</span>
  <span m='1240430'>had</span> <span m='1240870'>a</span> <span
  m='1240960'>different</span> <span m='1241520'>definition</span> <span
  m='1242070'>of</span> <span m='1242170'>a</span> <span
  m='1242250'>peak--</span> <span m='1242900'>and</span> <span
  m='1243480'>this</span> <span m='1243710'>is</span> <span
  m='1243850'>part</span> <span m='1244100'>of</span> <span
  m='1244200'>algorithmic</span> <span m='1244680'>thinking.</span> <span
  m='1245850'>You</span> <span m='1246010'>want</span> <span
  m='1246160'>to</span> <span m='1246200'>be</span> <span
  m='1246310'>able</span> <span m='1246500'>to</span> <span
  m='1247000'>create</span> <span m='1248280'>algorithms</span> <span
  m='1248850'>that</span> <span m='1248970'>are</span> <span
  m='1249040'>general,</span> <span m='1249580'>so</span> <span
  m='1249870'>if</span> <span m='1250250'>the</span> <span
  m='1250390'>problem</span> <span m='1250730'>definition</span> <span
  m='1251250'>changes</span> <span m='1251650'>on</span> <span
  m='1251820'>you,</span> <span m='1252130'>you</span> <span
  m='1252440'>still</span> <span m='1252690'>have</span> <span
  m='1252820'>a</span> <span m='1252870'>starting</span> <span
  m='1253230'>point</span> <span m='1253580'>to</span> <span
  m='1253650'>go</span> <span m='1253810'>attack</span> <span
  m='1254300'>the</span> <span m='1254800'>second</span> <span
  m='1255190'>version</span> <span m='1255480'>of</span> <span
  m='1255570'>the</span> <span m='1255640'>problem.</span> <span
  m='1256500'>OK?</span> </p><p><span m='1257310'>So</span> <span
  m='1259510'>you</span> <span m='1259650'>could</span> <span
  m='1259810'>eliminate</span> <span m='1260210'>this</span> <span
  m='1260590'>in</span> <span m='1261230'>the</span> <span
  m='1261410'>case</span> <span m='1261680'>of</span> <span
  m='1261790'>the</span> <span m='1262010'>greater</span> <span
  m='1262210'>than</span> <span m='1262340'>or</span> <span
  m='1262430'>equal</span> <span m='1262690'>to</span> <span
  m='1262760'>definition.</span> <span m='1263270'>The</span> <span
  m='1263370'>"if</span> <span m='1263550'>it</span> <span
  m='1263640'>exists",</span> <span m='1264050'>because</span> <span
  m='1264290'>a</span> <span m='1264360'>peak</span> <span
  m='1264560'>will</span> <span m='1264710'>always</span> <span
  m='1265010'>exist.</span> <span m='1265850'>But</span> <span
  m='1265880'>you</span> <span m='1266000'>probably</span> <span
  m='1266280'>want</span> <span m='1266410'>to</span> <span
  m='1266470'>argue</span> <span m='1266770'>that</span> <span
  m='1267210'>when</span> <span m='1267330'>you</span> <span
  m='1267410'>want</span> <span m='1267550'>to</span> <span
  m='1267600'>show</span> <span m='1267800'>the</span> <span
  m='1267910'>correctness</span> <span m='1268380'>of</span> <span
  m='1268480'>your</span> <span m='1268600'>algorithm.</span> <span
  m='1269950'>And</span> <span m='1270790'>if</span> <span m='1270970'>in</span>
  <span m='1271080'>fact</span> <span m='1271660'>you</span> <span
  m='1271840'>had</span> <span m='1271990'>a</span> <span
  m='1272050'>different</span> <span m='1272300'>definition,</span> <span
  m='1273210'>well</span> <span m='1273910'>you</span> <span
  m='1274140'>would</span> <span m='1274240'>have</span> <span
  m='1274440'>to</span> <span m='1275710'>create</span> <span
  m='1277380'>an</span> <span m='1277530'>algorithm</span> <span
  m='1278370'>that</span> <span m='1278600'>tells</span> <span
  m='1278870'>you</span> <span m='1279130'>for</span> <span
  m='1279320'>sure</span> <span m='1280220'>that</span> <span
  m='1280350'>a</span> <span m='1280410'>peak</span> <span
  m='1280650'>doesn't</span> <span m='1280920'>exist,</span> <span
  m='1281730'>or</span> <span m='1281960'>find</span> <span m='1282310'>a</span>
  <span m='1282360'>peak</span> <span m='1282960'>if</span> <span
  m='1283200'>it</span> <span m='1283300'>exists.</span> <span m='1284135'>All
  right?</span> <span m='1284400'>So</span> <span m='1284520'>that's</span>
  <span m='1284910'>really the</span> <span m='1284970'>general</span> <span
  m='1285330'>case.</span> </p><p><span m='1286300'>Many</span> <span
  m='1286800'>a</span> <span m='1286860'>time</span> <span
  m='1287290'>it's</span> <span m='1287450'>possible</span> <span
  m='1287890'>that</span> <span m='1288070'>you're</span> <span
  m='1288630'>asked</span> <span m='1288850'>to</span> <span
  m='1288920'>do</span> <span m='1289050'>something,</span> <span
  m='1289830'>and</span> <span m='1290170'>you</span> <span
  m='1290290'>can't</span> <span m='1290500'>actually</span> <span
  m='1291550'>give</span> <span m='1291900'>an</span> <span
  m='1292070'>answer</span> <span m='1293400'>to</span> <span
  m='1294530'>the</span> <span m='1294610'>question,</span> <span
  m='1294990'>or</span> <span m='1295100'>find</span> <span
  m='1295530'>something</span> <span m='1295940'>that</span> <span
  m='1296090'>satisfies</span> <span m='1296740'>all</span> <span
  m='1297140'>the</span> <span m='1297510'>constraints</span> <span
  m='1298740'>required.</span> <span m='1299580'>And</span> <span
  m='1299740'>in</span> <span m='1299810'>that</span> <span
  m='1299990'>case,</span> <span m='1300260'>you</span> <span
  m='1300350'>want</span> <span m='1300460'>to</span> <span
  m='1300500'>be</span> <span m='1300590'>able</span> <span
  m='1300780'>to</span> <span m='1300880'>put</span> <span m='1301110'>up</span>
  <span m='1301220'>your</span> <span m='1301340'>hand</span> <span
  m='1301710'>and</span> <span m='1301830'>say,</span> <span
  m='1302610'>you</span> <span m='1302700'>know</span> <span
  m='1302800'>what?</span> <span m='1303470'>I</span> <span
  m='1303600'>searched</span> <span m='1303990'>long</span> <span
  m='1304230'>and</span> <span m='1304310'>hard.</span> <span
  m='1304870'>I</span> <span m='1305030'>searched</span> <span
  m='1305480'>exhaustively.</span> <span m='1306730'>Here's</span> <span
  m='1306990'>my</span> <span m='1307160'>argument</span> <span
  m='1308370'>that</span> <span m='1308710'>I</span> <span
  m='1308790'>searched</span> <span m='1309130'>exhaustively,</span> <span
  m='1309930'>and</span> <span m='1310130'>I</span> <span
  m='1310290'>couldn't</span> <span m='1310390'>find it.</span> <span
  m='1311210'>Right?</span> </p><p><span m='1311600'>If you</span> <span
  m='1312010'>do</span> <span m='1312120'>that,</span> <span
  m='1312370'>you</span> <span m='1312450'>get</span> <span
  m='1312590'>to</span> <span m='1312650'>keep</span> <span
  m='1312820'>your</span> <span m='1312920'>job.</span> <span
  m='1313490'>Right?</span> <span m='1314580'>Otherwise</span> <span
  m='1315650'>there's</span> <span m='1316180'>always</span> <span
  m='1316890'>the</span> <span m='1317100'>case</span> <span
  m='1317390'>that</span> <span m='1317520'>you</span> <span
  m='1317640'>didn't</span> <span m='1317790'>search</span> <span
  m='1318130'>hard</span> <span m='1318360'>enough.</span> <span
  m='1319060'>So</span> <span m='1319190'>it's</span> <span
  m='1319320'>nice</span> <span m='1319520'>to</span> <span
  m='1319610'>have</span> <span m='1319810'>that</span> <span
  m='1319900'>argument.</span> <span m='1322310'>All</span> <span
  m='1322370'>right?</span> <span m='1322810'>Great.</span> <span
  m='1323080'>Thanks</span> <span m='1323290'>for</span> <span
  m='1323360'>the</span> <span m='1323430'>question.</span> <span
  m='1324190'>Feel</span> <span m='1324410'>free</span> <span
  m='1324550'>to</span> <span m='1324700'>interrupt.</span> <span
  m='1325170'>Raise</span> <span m='1325390'>your</span> <span
  m='1325510'>hand,</span> <span m='1326220'>and</span> <span
  m='1326800'>I'm</span> <span m='1327020'>watching</span> <span
  m='1327410'>you</span> <span m='1327530'>guys,</span> <span
  m='1327840'>and</span> <span m='1327930'>I'm</span> <span
  m='1328010'>happy</span> <span m='1328240'>to</span> <span
  m='1328290'>answer</span> <span m='1328620'>questions</span> <span
  m='1329190'>at</span> <span m='1329290'>any</span> <span
  m='1329510'>time.</span> </p><p><span m='1331550'>So</span> <span
  m='1332000'>let's</span> <span m='1332550'>talk</span> <span
  m='1332730'>about</span> <span m='1332930'>the</span> <span
  m='1333000'>straightforward</span> <span m='1333470'>algorithm.</span> <span
  m='1334540'>The</span> <span m='1334750'>straightforward</span> <span
  m='1335200'>algorithm</span> <span m='1336070'>is</span> <span
  m='1336200'>something</span> <span m='1336510'>that</span> <span
  m='1336650'>starts</span> <span m='1336990'>from</span> <span
  m='1337140'>the</span> <span m='1337220'>left</span> <span
  m='1338310'>and</span> <span m='1338880'>just</span> <span
  m='1339070'>walks</span> <span m='1339370'>across.</span> <span
  m='1340940'>And</span> <span m='1341830'>you</span> <span
  m='1341980'>might</span> <span m='1342230'>have</span> <span
  m='1342560'>something</span> <span m='1342900'>that</span> <span
  m='1343030'>looks</span> <span m='1343240'>like</span> <span
  m='1343450'>that.</span> <span m='1344285'>All</span> <span
  m='1344710'>right?</span> <span m='1344960'>By</span> <span
  m='1345090'>that--</span> <span m='1345300'>By</span> <span
  m='1345420'>this</span> <span m='1345650'>I</span> <span
  m='1345740'>mean</span> <span m='1346460'>the</span> <span
  m='1346550'>numbers</span> <span m='1346910'>are</span> <span
  m='1347000'>increasing</span> <span m='1347830'>as</span> <span
  m='1348060'>you</span> <span m='1348170'>start</span> <span
  m='1348510'>from</span> <span m='1348660'>the</span> <span
  m='1348740'>left,</span> <span m='1349550'>the</span> <span
  m='1349690'>peak</span> <span m='1350010'>is</span> <span
  m='1350350'>somewhere</span> <span m='1350730'>in</span> <span
  m='1350830'>the</span> <span m='1350910'>middle,</span> <span
  m='1351720'>and</span> <span m='1351880'>then</span> <span
  m='1352180'>things</span> <span m='1352390'>start</span> <span
  m='1352710'>decreasing.</span> <span m='1353890'>Right?</span> </p><p><span
  m='1354120'>So</span> <span m='1356530'>in</span> <span
  m='1356660'>this</span> <span m='1356860'>case,</span> <span m='1358062'>you
  know,</span> <span m='1358400'>this</span> <span m='1358640'>might</span>
  <span m='1358930'>be</span> <span m='1359040'>the</span> <span
  m='1359150'>peak.</span> </p><p></p><p><span m='1366950'>You</span> <span
  m='1367350'>also</span> <span m='1367790'>may have</span> <span
  m='1367950'>a</span> <span m='1368000'>situation</span> <span
  m='1368540'>where</span> <span m='1369550'>the</span> <span
  m='1369760'>peak</span> <span m='1370110'>is all</span> <span
  m='1370260'>the</span> <span m='1370320'>way</span> <span
  m='1370470'>on</span> <span m='1370570'>the</span> <span
  m='1370690'>right,</span> <span m='1371240'>you</span> <span
  m='1371360'>started</span> <span m='1371670'>from</span> <span
  m='1371810'>the</span> <span m='1371900'>left.</span> <span
  m='1372780'>And</span> <span m='1373180'>it's</span> <span
  m='1373290'>1,</span> <span m='1373490'>2,</span> <span m='1373590'>3,</span>
  <span m='1373790'>4,</span> <span m='1373990'>5,</span> <span
  m='1374240'>6,</span> <span m='1374610'>literally</span> <span
  m='1375060'>in</span> <span m='1375160'>terms</span> <span
  m='1375400'>of</span> <span m='1375480'>the</span> <span
  m='1375550'>numbers.</span> <span m='1376390'>And</span> <span
  m='1376740'>you're</span> <span m='1376850'>going</span> <span
  m='1376990'>to</span> <span m='1377060'>look</span> <span
  m='1377280'>at</span> <span m='1378340'>n</span> <span
  m='1378590'>elements</span> <span m='1380420'>going</span> <span
  m='1380670'>all</span> <span m='1380830'>the</span> <span
  m='1380880'>way</span> <span m='1381000'>to</span> <span
  m='1381070'>the</span> <span m='1381170'>right</span> <span
  m='1382530'>in</span> <span m='1382710'>order</span> <span
  m='1382920'>to</span> <span m='1383240'>find</span> <span
  m='1383560'>the</span> <span m='1383640'>peak.</span> </p><p><span
  m='1384800'>So</span> <span m='1385080'>in</span> <span m='1385200'>the</span>
  <span m='1385270'>case</span> <span m='1385450'>of</span> <span
  m='1385530'>the</span> <span m='1385600'>middle</span> <span
  m='1387140'>you'd</span> <span m='1387310'>look</span> <span
  m='1387610'>at</span> <span m='1389910'>n</span> <span m='1390100'>over</span>
  <span m='1390340'>2</span> <span m='1390630'>elements.</span> <span
  m='1393830'>If</span> <span m='1394040'>it</span> <span m='1394120'>was</span>
  <span m='1394250'>right</span> <span m='1394430'>in</span> <span
  m='1394500'>the</span> <span m='1394560'>middle.</span> <span
  m='1398340'>And</span> <span m='1398720'>the</span> <span
  m='1398820'>complexity,</span> <span m='1399420'>worst</span> <span
  m='1399750'>case</span> <span m='1400000'>complexity--</span>
  </p><p></p><p><span m='1406340'>--is</span> <span m='1406510'>what</span>
  <span m='1406670'>we</span> <span m='1406800'>call</span> <span
  m='1407380'>theta</span> <span m='1407840'>n.</span> <span
  m='1409830'>And</span> <span m='1410550'>it's</span> <span
  m='1410830'>theta</span> <span m='1411100'>n,</span> <span
  m='1411860'>because</span> <span m='1412370'>in</span> <span
  m='1412500'>the</span> <span m='1412600'>worst</span> <span
  m='1412890'>case,</span> <span m='1413580'>you</span> <span
  m='1413730'>may</span> <span m='1413870'>have</span> <span
  m='1414070'>to</span> <span m='1414180'>look</span> <span
  m='1414390'>at</span> <span m='1414850'>all</span> <span m='1415140'>n</span>
  <span m='1415410'>elements.</span> <span m='1416360'>And</span> <span
  m='1416540'>that</span> <span m='1416670'>would</span> <span
  m='1416760'>be</span> <span m='1416860'>the</span> <span
  m='1416970'>case</span> <span m='1417250'>where</span> <span
  m='1417370'>you</span> <span m='1417490'>started</span> <span
  m='1417810'>from</span> <span m='1417950'>the</span> <span
  m='1418040'>left</span> <span m='1418710'>and</span> <span
  m='1418830'>you</span> <span m='1418890'>had</span> <span
  m='1419040'>to</span> <span m='1419110'>go</span> <span m='1419280'>all</span>
  <span m='1419460'>the</span> <span m='1419530'>way</span> <span
  m='1419650'>to</span> <span m='1419720'>the</span> <span
  m='1419830'>right.</span> </p><p><span m='1420860'>Now</span> <span
  m='1421000'>remember</span> <span m='1421440'>theta</span> <span
  m='1421740'>n</span> <span m='1422800'>is</span> <span
  m='1423120'>essentially</span> <span m='1423520'>something</span> <span
  m='1423850'>that's</span> <span m='1424060'>says</span> <span
  m='1424670'>of</span> <span m='1424850'>the</span> <span
  m='1424930'>order</span> <span m='1425330'>of</span> <span
  m='1425460'>n.</span> <span m='1425830'>So</span> <span m='1426010'>it</span>
  <span m='1426090'>gives</span> <span m='1426280'>you</span> <span
  m='1426410'>both</span> <span m='1426680'>the</span> <span
  m='1426770'>lower</span> <span m='1427070'>bound</span> <span
  m='1427480'>and</span> <span m='1427700'>an</span> <span
  m='1427790'>upper</span> <span m='1428010'>bound.</span> <span
  m='1429400'>Big</span> <span m='1429630'>[? O ?]</span> <span m='1429940'>of
  n</span> <span m='1430170'>is</span> <span m='1430680'>just</span> <span
  m='1430950'>upper</span> <span m='1431180'>bound.</span> <span
  m='1432490'>And</span> <span m='1432940'>what</span> <span
  m='1433080'>we're</span> <span m='1433180'>saying</span> <span
  m='1433450'>here</span> <span m='1433720'>is,</span> <span
  m='1433850'>we're</span> <span m='1433970'>saying</span> <span
  m='1435110'>this</span> <span m='1435340'>algorithm</span> <span
  m='1435730'>that</span> <span m='1435840'>starts</span> <span
  m='1436150'>from</span> <span m='1436320'>the</span> <span
  m='1436400'>left</span> <span m='1438110'>is</span> <span
  m='1438370'>going</span> <span m='1438670'>to,</span> <span
  m='1439010'>essentially,</span> <span m='1441360'>require</span> <span
  m='1441790'>in</span> <span m='1441860'>the</span> <span
  m='1441950'>worst</span> <span m='1442210'>case</span> <span
  m='1443470'>something</span> <span m='1443990'>that's</span> <span
  m='1444950'>a</span> <span m='1445020'>constant</span> <span
  m='1445520'>times</span> <span m='1445830'>n.</span> <span
  m='1446740'>OK?</span> </p><p><span m='1447880'>And</span> <span
  m='1448130'>you know</span> <span m='1448210'>that</span> <span
  m='1448420'>constant</span> <span m='1448820'>could</span> <span
  m='1448960'>be</span> <span m='1449740'>1.</span> <span m='1451210'>You</span>
  <span m='1451390'>could</span> <span m='1451650'>certainly</span> <span
  m='1451720'>set</span> <span m='1451920'>things</span> <span
  m='1452100'>up</span> <span m='1452260'>that</span> <span
  m='1452420'>way.</span> <span m='1453400'>Or</span> <span
  m='1453860'>if</span> <span m='1454050'>you</span> <span
  m='1454220'>had</span> <span m='1454410'>a</span> <span
  m='1454450'>different</span> <span m='1454700'>kind</span> <span
  m='1454860'>of</span> <span m='1454950'>algorithm,</span> <span
  m='1455860'>maybe</span> <span m='1456120'>you</span> <span
  m='1456260'>could</span> <span m='1456410'>work</span> <span
  m='1456650'>on</span> <span m='1457470'>the</span> <span
  m='1457580'>constant.</span> <span m='1458460'>But</span> <span
  m='1459100'>bottom</span> <span m='1459470'>line,</span> <span
  m='1460320'>we're</span> <span m='1460630'>only</span> <span
  m='1460810'>concerned,</span> <span m='1461480'>at</span> <span
  m='1461620'>this</span> <span m='1461770'>moment,</span> <span
  m='1462360'>about</span> <span m='1463250'>as</span> <span
  m='1463410'>asymptotic</span> <span m='1463800'>complexity.</span> <span
  m='1464760'>And</span> <span m='1465110'>the</span> <span
  m='1465320'>asymptotic</span> <span m='1465620'>complexity</span> <span
  m='1466200'>of</span> <span m='1466290'>this</span> <span
  m='1466470'>algorithm</span> <span m='1467340'>is</span> <span
  m='1467790'>linear.</span> <span m='1469030'>All</span> <span
  m='1469090'>right?</span> <span m='1469710'>That</span> <span
  m='1469830'>make</span> <span m='1469980'>sense?</span> </p><p><span
  m='1472150'>OK.</span> <span m='1472930'>So</span> <span
  m='1476290'>someone</span> <span m='1476640'>help</span> <span
  m='1476820'>me</span> <span m='1477370'>do</span> <span
  m='1477560'>better.</span> <span m='1478950'>How</span> <span
  m='1479010'>can</span> <span m='1479120'>we</span> <span m='1479220'>do</span>
  <span m='1479340'>better?</span> <span m='1479890'>How</span> <span
  m='1479940'>can</span> <span m='1480070'>we</span> <span
  m='1480180'>lower</span> <span m='1481170'>the</span> <span
  m='1481290'>asymptotic</span> <span m='1481900'>complexity</span> <span
  m='1483040'>of</span> <span m='1483160'>a</span> <span m='1483230'>one</span>
  <span m='1483480'>dimensional</span> <span m='1484030'>peak</span> <span
  m='1484290'>finder?</span> <span m='1486700'>Anybody</span> <span
  m='1487210'>want</span> <span m='1487340'>to</span> <span m='1487460'>take a
  stab</span> <span m='1487850'>at that?</span> <span m='1488450'>Yeah?</span>
  <span m='1488630'>Back</span> <span m='1488830'>there.</span> </p><p><span
  m='1490086'>AUDIENCE: Do a</span> <span m='1490584'>binary</span> <span
  m='1491082'>search</span> <span m='1491580'>subset.</span> <span
  m='1492078'>You</span> <span m='1492576'>look at the</span> <span
  m='1493074'>middle,</span> <span m='1493572'>and</span> <span
  m='1494070'>whatever is higher--</span> <span m='1495066'>whichever</span>
  <span m='1495564'>side is</span> <span m='1496062'>higher,</span> <span
  m='1496560'>then</span> <span m='1497058'>cut</span> <span
  m='1497556'>that</span> <span m='1498054'>in half,</span> <span
  m='1498552'>because you know</span> <span m='1499060'>there's a peak.</span>
  </p><p><span m='1500290'>PROFESSOR: On--</span> </p><p><span
  m='1500410'>AUDIENCE: For</span> <span m='1500750'>example if you're</span>
  <span m='1501090'>in the middle</span> <span m='1501578'>on the right
  side--</span> <span m='1502554'>there's a higher</span> <span
  m='1503042'>number</span> <span m='1503530'>on the right</span> <span
  m='1504018'>side--</span> <span m='1504506'>then you would</span> <span
  m='1504994'>just look at that,</span> <span m='1505482'>because you know
  that</span> <span m='1505970'>your peak's</span> <span
  m='1506458'>somewhere</span> <span m='1506946'>in there.</span> <span
  m='1507434'>And you</span> <span m='1507922'>continue</span> <span
  m='1508410'>cutting in half.</span> </p><p><span m='1508900'>PROFESSOR:
  Excellent!</span> <span m='1509360'>Excellent!</span> <span
  m='1509760'>That's</span> <span m='1509910'>exactly</span> <span
  m='1510250'>right.</span> <span m='1511200'>So</span> <span m='1511480'>you
  can--</span> <span m='1512960'>You</span> <span m='1513120'>can</span> <span
  m='1513680'>do</span> <span m='1513860'>something</span> <span
  m='1514180'>different,</span> <span m='1514740'>which</span> <span
  m='1514850'>is</span> <span m='1515860'>essentially</span> <span
  m='1516400'>try</span> <span m='1516920'>and</span> <span
  m='1518200'>break</span> <span m='1518460'>up</span> <span
  m='1518620'>this</span> <span m='1518820'>problem.</span> <span
  m='1519240'>Use</span> <span m='1519450'>a</span> <span
  m='1519530'>divide</span> <span m='1519860'>and</span> <span
  m='1519980'>conquer</span> <span m='1520410'>strategy,</span> <span
  m='1521410'>and</span> <span m='1521810'>recursively</span> <span
  m='1522370'>break</span> <span m='1522650'>up</span> <span
  m='1523000'>this</span> <span m='1523280'>one</span> <span
  m='1523620'>dimensional</span> <span m='1524120'>array</span> <span
  m='1524900'>into</span> <span m='1525100'>smaller</span> <span
  m='1525650'>arrays.</span> <span m='1526550'>And</span> <span
  m='1528380'>try</span> <span m='1528570'>and</span> <span
  m='1528680'>get</span> <span m='1528920'>this</span> <span
  m='1529000'>complexity</span> <span m='1529470'>down.</span> <span
  m='1530120'>Yeah?</span> </p><p><span m='1530440'>AUDIENCE: Are we</span>
  <span m='1530796'>assuming that</span> <span m='1531152'>there's only</span>
  <span m='1531510'>one</span> <span m='1531835'>peak?</span> </p><p><span
  m='1533440'>PROFESSOR: No,</span> <span m='1533640'>we're not.</span>
  </p><p><span m='1534280'>AUDIENCE: OK.</span> </p><p><span
  m='1534980'>PROFESSOR: It's</span> <span m='1536200'>find</span> <span
  m='1537890'>a</span> <span m='1538235'>peak</span> <span m='1538580'>if</span>
  <span m='1538790'>it</span> <span m='1538910'>exists.</span> <span
  m='1539410'>And in</span> <span m='1539590'>this</span> <span
  m='1539760'>case</span> <span m='1540040'>it's,</span> <span
  m='1540210'>"find</span> <span m='1540520'>a peak",</span> <span
  m='1540760'>because</span> <span m='1541510'>of</span> <span
  m='1541610'>the</span> <span m='1541690'>definition.</span> <span
  m='1542610'>We</span> <span m='1542710'>don't</span> <span
  m='1542830'>really</span> <span m='1543040'>need</span> <span
  m='1543290'>this</span> <span m='1543690'>as</span> <span
  m='1544760'>it</span> <span m='1544900'>was</span> <span
  m='1545030'>discussed.</span> <span m='1545910'>All</span> <span
  m='1546000'>right?</span> <span m='1546660'>OK.</span> <span
  m='1547180'>So--</span> </p><p><span m='1549080'>So</span> <span
  m='1549210'>that</span> <span m='1549300'>was</span> <span
  m='1549400'>a</span> <span m='1549430'>great</span> <span
  m='1549610'>answer,</span> <span m='1550480'>and--</span> <span
  m='1551870'>You know</span> <span m='1552160'>this</span> <span
  m='1552420'>class</span> <span m='1553640'>after</span> <span
  m='1553880'>while</span> <span m='1554110'>is</span> <span
  m='1554260'>going</span> <span m='1554370'>to</span> <span
  m='1554410'>get</span> <span m='1554550'>boring.</span> <span
  m='1554850'>Right?</span> <span m='1555770'>Every</span> <span
  m='1555980'>class</span> <span m='1556270'>gets</span> <span
  m='1556440'>boring.</span> <span m='1557650'>So</span> <span
  m='1557790'>we,</span> <span m='1558250'>you know,</span> <span
  m='1558300'>try</span> <span m='1558560'>and</span> <span
  m='1558600'>break</span> <span m='1558960'>the</span> <span
  m='1559030'>monotony</span> <span m='1559610'>here</span> <span
  m='1559880'>a</span> <span m='1559920'>bit.</span> <span
  m='1560840'>And</span> <span m='1561090'>so--</span> <span
  m='1561560'>And</span> <span m='1561690'>then</span> <span
  m='1561820'>the</span> <span m='1561890'>other</span> <span
  m='1562090'>thing</span> <span m='1562260'>that</span> <span
  m='1562370'>we</span> <span m='1562490'>realized</span> <span
  m='1562860'>was</span> <span m='1562990'>that</span> <span
  m='1563170'>these</span> <span m='1563680'>seats</span> <span
  m='1564040'>you're</span> <span m='1564190'>sitting</span> <span
  m='1564460'>on--</span> <span m='1564640'>this</span> <span
  m='1564790'>is</span> <span m='1564830'>a</span> <span m='1564870'>nice</span>
  <span m='1565120'>classroom--</span> <span m='1565710'>but</span> <span
  m='1565820'>the</span> <span m='1565900'>seats</span> <span
  m='1566200'>you're</span> <span m='1566310'>sitting</span> <span
  m='1566590'>on</span> <span m='1566760'>are</span> <span
  m='1566820'>kind</span> <span m='1566990'>of</span> <span
  m='1567060'>hard.</span> <span m='1567880'>Right?</span> </p><p><span
  m='1568250'>So</span> <span m='1568640'>what</span> <span
  m='1568920'>Eric</span> <span m='1569150'>and</span> <span
  m='1569270'>I</span> <span m='1569350'>did</span> <span m='1569630'>was</span>
  <span m='1570540'>we</span> <span m='1570620'>decided</span> <span
  m='1571000'>we'll</span> <span m='1571110'>help</span> <span
  m='1571310'>you</span> <span m='1571390'>guys</span> <span
  m='1571660'>out,</span> <span m='1571820'>especially</span> <span
  m='1572250'>the</span> <span m='1572340'>ones</span> <span
  m='1572620'>who</span> <span m='1572750'>are--</span> <span
  m='1574220'>who</span> <span m='1574390'>are</span> <span
  m='1574680'>interacting</span> <span m='1575200'>with</span> <span
  m='1575340'>us.</span> <span m='1575870'>And</span> <span
  m='1576640'>we</span> <span m='1576800'>have</span> <span
  m='1577180'>these--</span> </p><p><span m='1577580'>[LAUGHTER]</span>
  </p><p><span m='1578610'>--cushions</span> <span m='1580290'>that</span> <span
  m='1580530'>are</span> <span m='1580790'>6.006</span> <span
  m='1581880'>cushions.</span> <span m='1582145'>And,</span> <span
  m='1582410'>you know,</span> <span m='1582790'>that's</span> <span
  m='1582940'>a</span> <span m='1583010'>2</span> <span m='1583130'>by</span>
  <span m='1583280'>2</span> <span m='1583460'>by</span> <span
  m='1583590'>2</span> <span m='1583780'>Rubik's</span> <span
  m='1584100'>cube</span> <span m='1584320'>here.</span> <span
  m='1585170'>And</span> <span m='1585520'>since</span> <span
  m='1585760'>you</span> <span m='1585950'>answered</span> <span
  m='1586670'>the</span> <span m='1586740'>first</span> <span
  m='1586980'>question,</span> <span m='1587370'>you</span> <span
  m='1587480'>get</span> <span m='1587590'>a</span> <span
  m='1587630'>cushion.</span> <span m='1588410'>This</span> <span
  m='1588560'>is</span> <span m='1588670'>kind</span> <span
  m='1588930'>of</span> <span m='1589020'>like</span> <span m='1589190'>a</span>
  <span m='1589270'>Frisbee,</span> <span m='1589830'>but</span> <span
  m='1590070'>not</span> <span m='1590230'>really.</span> <span
  m='1591520'>So--</span> </p><p><span m='1592010'>[LAUGHTER]</span>
  </p><p><span m='1592140'>I'm</span> <span m='1592320'>not sure--</span> <span
  m='1593020'>I'm</span> <span m='1593460'>not</span> <span
  m='1593620'>sure</span> <span m='1593850'>I'm</span> <span
  m='1593930'>going</span> <span m='1594040'>to</span> <span
  m='1594080'>get</span> <span m='1594230'>it</span> <span m='1594350'>to
  you.</span> <span m='1595190'>But</span> <span m='1595300'>the other</span>
  <span m='1595530'>thing</span> <span m='1595690'>I</span> <span
  m='1595730'>want</span> <span m='1595860'>to</span> <span
  m='1595910'>say</span> <span m='1596150'>is</span> <span
  m='1596370'>this</span> <span m='1596550'>is</span> <span
  m='1596660'>not</span> <span m='1596860'>a</span> <span
  m='1596910'>baseball</span> <span m='1597350'>game.</span> <span
  m='1597970'>Right?</span> <span m='1598240'>Where</span> <span
  m='1598760'>you</span> <span m='1598930'>just</span> <span
  m='1599100'>grab</span> <span m='1599430'>the</span> <span
  m='1599500'>ball</span> <span m='1599810'>as it</span> <span
  m='1599950'>comes</span> <span m='1600110'>by.</span> <span
  m='1600560'>This</span> <span m='1600630'>is</span> <span
  m='1600750'>meant</span> <span m='1601010'>for</span> <span
  m='1601180'>him,</span> <span m='1601520'>my</span> <span
  m='1602070'>friend</span> <span m='1602660'>in</span> <span
  m='1602770'>the</span> <span m='1602860'>red</span> <span
  m='1603040'>shirt.</span> <span m='1603670'>So</span> <span m='1603810'>here
  you</span> <span m='1604030'>go.</span> <span m='1605920'>Ah, too</span> <span
  m='1606330'>bad.</span> <span m='1606820'>All</span> <span
  m='1606960'>right.</span> <span m='1607620'>It</span> <span
  m='1607970'>is</span> <span m='1608070'>soft.</span> <span
  m='1608580'>So,</span> <span m='1608880'>you know,</span> <span m='1609150'>it
  won't--</span> <span m='1609910'>it</span> <span m='1610080'>won't</span>
  <span m='1610260'>hurt you</span> <span m='1610630'>if</span> <span
  m='1610710'>hits</span> <span m='1610950'>you.</span> </p><p><span
  m='1611255'>[LAUGHTER]</span> </p><p><span m='1611910'>All</span> <span
  m='1612030'>right.</span> <span m='1612540'>So</span> <span
  m='1612760'>we</span> <span m='1612830'>got</span> <span m='1612920'>a</span>
  <span m='1612970'>bunch</span> <span m='1613230'>of</span> <span
  m='1613310'>these.</span> <span m='1614216'>And</span> <span
  m='1615840'>raise</span> <span m='1616200'>your</span> <span
  m='1616390'>hands,</span> <span m='1617110'>you know,</span> <span
  m='1617200'>going</span> <span m='1617300'>to ask--</span> <span
  m='1618160'>There's</span> <span m='1618310'>going</span> <span
  m='1618430'>to</span> <span m='1618490'>be--</span> <span m='1620160'>I</span>
  <span m='1620300'>think--</span> <span m='1621090'>There's</span> <span
  m='1621270'>some</span> <span m='1621390'>trivial</span> <span
  m='1621750'>questions</span> <span m='1622160'>that we're</span> <span
  m='1622480'>going to ask</span> <span m='1622970'>just</span> <span
  m='1623150'>to</span> <span m='1623210'>make</span> <span
  m='1623370'>sure</span> <span m='1623600'>you're</span> <span
  m='1623740'>awake.</span> <span m='1625180'>So</span> <span m='1625520'>an
  answer</span> <span m='1625830'>to</span> <span m='1625920'>that</span> <span
  m='1626190'>doesn't</span> <span m='1626560'>get</span> <span
  m='1626700'>you</span> <span m='1626840'>a</span> <span
  m='1626900'>cushion.</span> <span m='1627750'>But</span> <span
  m='1628520'>an</span> <span m='1628660'>answer</span> <span
  m='1629040'>like--</span> <span m='1629810'>What's</span> <span
  m='1630010'>your</span> <span m='1630070'>name?</span> </p><p><span
  m='1630805'>AUDIENCE: Chase.</span> </p><p><span m='1631180'>PROFESSOR:
  Chase.</span> <span m='1631890'>An answer</span> <span m='1632320'>like</span>
  <span m='1632570'>Chase</span> <span m='1632750'>just</span> <span
  m='1632960'>gave</span> <span m='1634030'>is--</span> <span
  m='1635150'>that's</span> <span m='1635430'>a</span> <span
  m='1635460'>good</span> <span m='1635610'>answer</span> <span
  m='1635970'>to</span> <span m='1636050'>a</span> <span
  m='1636080'>nontrivial</span> <span m='1636660'>question.</span> <span
  m='1637050'>That</span> <span m='1637280'>gets</span> <span
  m='1637450'>you</span> <span m='1637570'>a</span> <span
  m='1637610'>cushion.</span> <span m='1638500'>OK?</span> <span
  m='1639290'>All</span> <span m='1639440'>right,</span> <span
  m='1639650'>great.</span> </p><p><span m='1640300'>So</span> <span
  m='1641240'>let's</span> <span m='1641840'>put</span> <span
  m='1642020'>up</span> <span m='1642250'>by</span> <span
  m='1642400'>Chase's</span> <span m='1642890'>algorithm</span> <span
  m='1643320'>up</span> <span m='1643460'>here.</span> <span
  m='1644230'>I'm</span> <span m='1644380'>going</span> <span
  m='1644490'>to</span> <span m='1644560'>write</span> <span
  m='1644770'>it</span> <span m='1644870'>out</span> <span
  m='1645410'>for</span> <span m='1645800'>the</span> <span
  m='1645910'>1D</span> <span m='1646250'>version.</span> </p><p></p><p><span
  m='1661390'>So</span> <span m='1661580'>what</span> <span
  m='1661710'>we</span> <span m='1661810'>have</span> <span
  m='1662050'>here</span> <span m='1662450'>is</span> <span m='1663710'>a</span>
  <span m='1664260'>recursive</span> <span m='1664930'>algorithm.</span>
  </p><p></p><p><span m='1683300'>So</span> <span m='1683450'>the</span> <span
  m='1683550'>picture</span> <span m='1683800'>you</span> <span
  m='1683910'>want</span> <span m='1684020'>to</span> <span
  m='1684090'>keep</span> <span m='1684290'>in</span> <span
  m='1684350'>your</span> <span m='1684460'>head</span> <span
  m='1684800'>is</span> <span m='1684970'>this</span> <span
  m='1685140'>picture</span> <span m='1685440'>that</span> <span
  m='1685600'>I</span> <span m='1685670'>put</span> <span m='1685950'>up</span>
  <span m='1686120'>there.</span> <span m='1686860'>And</span> <span
  m='1687580'>this</span> <span m='1687900'>is</span> <span m='1688030'>a</span>
  <span m='1688110'>divide</span> <span m='1688490'>and</span> <span
  m='1688600'>conquer</span> <span m='1689560'>algorithm.</span> <span
  m='1691010'>You're</span> <span m='1691140'>going</span> <span
  m='1691260'>to</span> <span m='1691340'>see</span> <span
  m='1691550'>this</span> <span m='1692260'>over</span> <span
  m='1692530'>and</span> <span m='1692650'>over--</span> <span
  m='1692930'>this</span> <span m='1693120'>paradigm--</span> <span
  m='1694140'>over</span> <span m='1694430'>and</span> <span
  m='1694540'>over</span> <span m='1695180'>in</span> <span
  m='1695650'>6.006.</span> </p><p><span m='1697360'>We're</span> <span
  m='1697480'>going</span> <span m='1697580'>to</span> <span
  m='1697630'>look</span> <span m='1697910'>at</span> <span
  m='1701710'>the</span> <span m='1701880'>n</span> <span
  m='1701910'>over</span> <span m='1702150'>2</span> <span
  m='1702360'>position.</span> </p><p><span m='1705990'>And</span> <span
  m='1706700'>we're</span> <span m='1706870'>going</span> <span
  m='1707010'>to</span> <span m='1707160'>look</span> <span
  m='1707540'>to</span> <span m='1707630'>the</span> <span
  m='1707750'>left,</span> <span m='1708700'>and</span> <span
  m='1708870'>we're</span> <span m='1708960'>going</span> <span
  m='1709060'>to</span> <span m='1709110'>look</span> <span
  m='1709290'>to</span> <span m='1709390'>the</span> <span
  m='1709490'>right.</span> <span m='1711010'>And</span> <span
  m='1711070'>we're</span> <span m='1711130'>going</span> <span
  m='1711230'>to</span> <span m='1711270'>do</span> <span
  m='1711380'>that</span> <span m='1711600'>in</span> <span
  m='1711700'>sequence.</span> <span m='1713540'>So--</span> </p><p><span
  m='1716680'>--if</span> <span m='1717180'>a</span> <span m='1717470'>n</span>
  <span m='1717760'>over</span> <span m='1718020'>2</span> <span
  m='1720500'>is</span> <span m='1720750'>less</span> <span
  m='1721110'>than</span> <span m='1722700'>a</span> <span m='1723025'>n</span>
  <span m='1723350'>over</span> <span m='1723590'>2</span> <span
  m='1723860'>minus</span> <span m='1724220'>1,</span> <span
  m='1726210'>then--</span> </p><p></p><p><span m='1730950'>--only</span> <span
  m='1731030'>look</span> <span m='1731340'>at</span> <span
  m='1733660'>the</span> <span m='1733720'>left</span> <span
  m='1734040'>half.</span> </p><p></p><p><span m='1737680'>1</span> <span
  m='1738140'>through</span> <span m='1738960'>n</span> <span
  m='1739120'>over</span> <span m='1739340'>2</span> <span
  m='1739700'>minus</span> <span m='1740050'>1</span> <span
  m='1741610'>to</span> <span m='1741720'>look</span> <span
  m='1741950'>for</span> <span m='1742130'>peak--</span> <span m='1743720'>for
  a</span> <span m='1744150'>peak.</span> </p><p></p><p><span m='1748436'>All
  right?</span> <span m='1748880'>So</span> <span m='1749030'>that's</span>
  <span m='1750410'>step</span> <span m='1750740'>one.</span> <span
  m='1751040'>And</span> <span m='1751350'>you know</span> <span m='1751450'>I
  could put it</span> <span m='1751630'>on</span> <span m='1751760'>the</span>
  <span m='1751850'>right</span> <span m='1752040'>hand</span> <span
  m='1752170'>side</span> <span m='1752470'>or</span> <span
  m='1752540'>the</span> <span m='1752600'>left</span> <span
  m='1752800'>hand</span> <span m='1752970'>side,</span> <span
  m='1753260'>doesn't</span> <span m='1753470'>really</span> <span
  m='1753630'>matter.</span> <span m='1755990'>I</span> <span
  m='1756110'>chose</span> <span m='1756390'>to</span> <span m='1756470'>do
  the</span> <span m='1756690'>left</span> <span m='1756890'>hand</span> <span
  m='1757040'>side</span> <span m='1757320'>first,</span> <span m='1758480'>the
  left</span> <span m='1758800'>half.</span> </p><p><span m='1760311'>And</span>
  <span m='1760690'>so</span> <span m='1760850'>what</span> <span
  m='1760970'>I've</span> <span m='1761100'>done</span> <span
  m='1762170'>is,</span> <span m='1763250'>through</span> <span
  m='1763580'>that</span> <span m='1763780'>one</span> <span
  m='1764000'>step,</span> <span m='1764570'>if</span> <span
  m='1764960'>in</span> <span m='1765120'>fact</span> <span
  m='1767480'>you</span> <span m='1767640'>have</span> <span
  m='1767890'>that</span> <span m='1768030'>condition--</span> <span
  m='1768620'>a n</span> <span m='1769000'>over</span> <span
  m='1769190'>2</span> <span m='1770010'>is</span> <span m='1770180'>less</span>
  <span m='1770440'>than</span> <span m='1770590'>a</span> <span
  m='1770850'>n</span> <span m='1770920'>over</span> <span m='1771050'>2</span>
  <span m='1771140'>minus</span> <span m='1771420'>1--</span> <span
  m='1772350'>then</span> <span m='1772750'>you</span> <span
  m='1772880'>move</span> <span m='1773260'>to your left</span> <span
  m='1773630'>and</span> <span m='1773760'>you</span> <span
  m='1773860'>work</span> <span m='1774070'>on</span> <span
  m='1775300'>one</span> <span m='1775600'>half</span> <span
  m='1775890'>of</span> <span m='1775960'>the</span> <span
  m='1776040'>problem.</span> </p><p><span m='1777490'>But</span> <span
  m='1777780'>if that's</span> <span m='1777980'>not</span> <span
  m='1778150'>the</span> <span m='1778240'>case,</span> <span
  m='1779440'>then</span> <span m='1779740'>if</span> <span m='1781300'>n</span>
  <span m='1781630'>over--</span> <span m='1782470'>n</span> <span
  m='1782650'>over</span> <span m='1782850'>2</span> <span m='1783120'>is</span>
  <span m='1783300'>less</span> <span m='1783630'>than</span> <span
  m='1785010'>a</span> <span m='1785220'>over</span> <span m='1785430'>n</span>
  <span m='1785600'>over--</span> <span m='1786040'>n</span> <span
  m='1786240'>by</span> <span m='1786420'>2</span> <span m='1786690'>plus</span>
  <span m='1787040'>1,</span> <span m='1788170'>then</span> <span
  m='1789880'>only</span> <span m='1790180'>look</span> <span
  m='1790430'>at</span> <span m='1792270'>n</span> <span m='1792460'>over</span>
  <span m='1792900'>2</span> <span m='1793160'>plus</span> <span
  m='1793440'>1</span> <span m='1794660'>through</span> <span
  m='1794900'>n</span> <span m='1796050'>for a</span> <span
  m='1796440'>peak.</span> <span m='1797520'>So</span> <span
  m='1797680'>I</span> <span m='1797740'>haven't</span> <span
  m='1797960'>bothered</span> <span m='1798280'>writing</span> <span
  m='1798590'>out</span> <span m='1798720'>all</span> <span
  m='1798870'>the</span> <span m='1798960'>words.</span> <span
  m='1799960'>They're</span> <span m='1800280'>exactly</span> <span
  m='1800660'>the</span> <span m='1800770'>same</span> <span
  m='1801130'>as</span> <span m='1801340'>the</span> <span
  m='1802260'>left</span> <span m='1802510'>hand</span> <span
  m='1802650'>side.</span> <span m='1803480'>You</span> <span
  m='1803580'>just</span> <span m='1803760'>look</span> <span
  m='1803920'>to</span> <span m='1804000'>the</span> <span
  m='1804090'>right</span> <span m='1804240'>hand</span> <span
  m='1804380'>side.</span> </p><p><span m='1806160'>Otherwise</span> <span
  m='1807340'>if</span> <span m='1807570'>both</span> <span
  m='1807810'>of</span> <span m='1807900'>these</span> <span
  m='1808230'>conditions</span> <span m='1808780'>don't</span> <span
  m='1809080'>fire,</span> <span m='1810430'>you're</span> <span
  m='1810630'>actually</span> <span m='1810900'>done.</span> <span
  m='1812190'>OK?</span> <span m='1812660'>That's</span> <span
  m='1812860'>actually</span> <span m='1813070'>the</span> <span
  m='1813150'>best</span> <span m='1813360'>case</span> <span
  m='1813670'>in</span> <span m='1813830'>terms</span> <span
  m='1814190'>of</span> <span m='1814710'>finishing</span> <span
  m='1815110'>early,</span> <span m='1816130'>at</span> <span
  m='1816230'>least</span> <span m='1816420'>in</span> <span
  m='1816520'>this</span> <span m='1816740'>recursive</span> <span
  m='1817170'>step.</span> <span m='1818340'>Because</span> <span
  m='1818640'>now</span> <span m='1818910'>the</span> <span m='1819030'>n</span>
  <span m='1819240'>over</span> <span m='1819450'>2</span> <span
  m='1819630'>position</span> <span m='1822000'>is</span> <span
  m='1822160'>a</span> <span m='1822240'>peak.</span> </p><p></p><p><span
  m='1827210'>Because</span> <span m='1827300'>what</span> <span
  m='1827450'>you</span> <span m='1827550'>found</span> <span
  m='1828480'>is</span> <span m='1828800'>that</span> <span
  m='1829450'>the</span> <span m='1829620'>n</span> <span
  m='1829740'>over</span> <span m='1829850'>2</span> <span
  m='1829980'>position</span> <span m='1830500'>is</span> <span
  m='1830880'>greater</span> <span m='1831150'>than</span> <span
  m='1831400'>or</span> <span m='1831520'>equal</span> <span
  m='1831830'>to</span> <span m='1832380'>both</span> <span
  m='1832630'>of</span> <span m='1832720'>its</span> <span
  m='1833420'>adjacent</span> <span m='1833900'>positions,</span> <span
  m='1834740'>and</span> <span m='1834860'>that's</span> <span
  m='1834990'>exactly</span> <span m='1835400'>the</span> <span
  m='1835510'>definition</span> <span m='1835960'>of</span> <span
  m='1836060'>a</span> <span m='1836130'>peak.</span> <span
  m='1836850'>So</span> <span m='1837340'>you're</span> <span
  m='1837490'>done.</span> <span m='1838430'>OK?</span> <span
  m='1839350'>So</span> <span m='1841420'>all</span> <span m='1841610'>of</span>
  <span m='1841700'>this</span> <span m='1841850'>is</span> <span
  m='1842010'>good.</span> </p><p><span m='1844500'>You</span> <span
  m='1844670'>want</span> <span m='1844840'>to</span> <span
  m='1846710'>write</span> <span m='1850240'>an</span> <span
  m='1850420'>argument</span> <span m='1850940'>that</span> <span
  m='1851130'>this</span> <span m='1851540'>algorithm</span> <span
  m='1851920'>is</span> <span m='1852030'>correct.</span> <span
  m='1853410'>And</span> <span m='1853670'>I'm</span> <span
  m='1853730'>not</span> <span m='1853860'>going</span> <span
  m='1853960'>to</span> <span m='1854010'>bother</span> <span
  m='1854260'>with</span> <span m='1854400'>that.</span> <span
  m='1854890'>I</span> <span m='1855040'>just</span> <span
  m='1856730'>wave</span> <span m='1856970'>my</span> <span
  m='1857110'>hands</span> <span m='1857400'>a</span> <span
  m='1857450'>bit,</span> <span m='1858580'>and</span> <span
  m='1858710'>you</span> <span m='1858820'>all</span> <span
  m='1858970'>nodded,</span> <span m='1859530'>so</span> <span
  m='1859770'>we're</span> <span m='1859900'>done</span> <span m='1860240'>with
  that.</span> <span m='1861230'>But</span> <span m='1862450'>the</span> <span
  m='1862570'>point</span> <span m='1862850'>being</span> <span m='1863880'>you
  will</span> <span m='1864180'>see</span> <span m='1865520'>in</span> <span
  m='1865690'>your</span> <span m='1865910'>problem</span> <span
  m='1866340'>set</span> <span m='1867310'>a</span> <span
  m='1867440'>precise</span> <span m='1868690'>argument</span> <span
  m='1869300'>for</span> <span m='1869510'>a</span> <span
  m='1869540'>more</span> <span m='1869740'>complicated</span> <span
  m='1870260'>algorithm,</span> <span m='1871000'>the</span> <span
  m='1871290'>2D</span> <span m='1871560'>version</span> <span
  m='1871920'>of</span> <span m='1872010'>this.</span> </p><p><span
  m='1872720'>And</span> <span m='1873410'>that</span> <span
  m='1873570'>should</span> <span m='1873680'>be</span> <span
  m='1873840'>a</span> <span m='1873910'>template</span> <span
  m='1874390'>for</span> <span m='1874540'>you</span> <span
  m='1875070'>to</span> <span m='1875170'>go</span> <span
  m='1875350'>write</span> <span m='1876270'>a</span> <span
  m='1876380'>proof,</span> <span m='1876900'>or</span> <span
  m='1877070'>an</span> <span m='1877150'>argument,</span> <span
  m='1877730'>a</span> <span m='1877860'>formal</span> <span
  m='1878290'>argument,</span> <span m='1879200'>that</span> <span
  m='1879740'>a</span> <span m='1879840'>particular</span> <span
  m='1880200'>algorithm</span> <span m='1880680'>is</span> <span
  m='1880850'>correct.</span> <span m='1881620'>That</span> <span
  m='1881750'>it</span> <span m='1881840'>does</span> <span
  m='1882100'>what</span> <span m='1882300'>it</span> <span
  m='1882400'>claims</span> <span m='1882720'>to</span> <span
  m='1882840'>do.</span> <span m='1883550'>And</span> <span
  m='1885120'>in</span> <span m='1885250'>this</span> <span
  m='1885400'>case</span> <span m='1885650'>it's</span> <span
  m='1886700'>two,</span> <span m='1886860'>three</span> <span
  m='1887030'>lines</span> <span m='1887440'>of</span> <span
  m='1888750'>careful</span> <span m='1889170'>reasoning</span> <span
  m='1890370'>that</span> <span m='1891330'>essentially</span> <span
  m='1891820'>say,</span> <span m='1892550'>given</span> <span
  m='1892800'>the</span> <span m='1892880'>definition</span> <span
  m='1893280'>of</span> <span m='1893360'>the</span> <span
  m='1893460'>peak,</span> <span m='1894520'>that</span> <span
  m='1895050'>this</span> <span m='1895320'>is</span> <span
  m='1895430'>going</span> <span m='1895570'>to</span> <span
  m='1895620'>find</span> <span m='1895950'>a</span> <span
  m='1896110'>peak</span> <span m='1897440'>in</span> <span
  m='1897730'>the</span> <span m='1898340'>array</span> <span
  m='1898600'>that</span> <span m='1898730'>you're</span> <span
  m='1898860'>given.</span> <span m='1899860'>All right?</span> </p><p><span
  m='1900900'>So</span> <span m='1901970'>we</span> <span m='1902140'>all</span>
  <span m='1902270'>believe</span> <span m='1902570'>that this</span> <span
  m='1902840'>algorithm</span> <span m='1903680'>is</span> <span
  m='1903880'>correct.</span> <span m='1904910'>Let's</span> <span
  m='1905170'>talk</span> <span m='1905650'>now</span> <span
  m='1905890'>about</span> <span m='1906130'>the</span> <span
  m='1906200'>complexity</span> <span m='1906740'>of</span> <span
  m='1906810'>this</span> <span m='1906990'>algorithm.</span> <span
  m='1908650'>Because</span> <span m='1908900'>the</span> <span
  m='1908980'>whole</span> <span m='1909200'>point</span> <span
  m='1909450'>of</span> <span m='1909540'>this</span> <span
  m='1909700'>algorithm</span> <span m='1910630'>was</span> <span
  m='1910700'>because</span> <span m='1910940'>we</span> <span
  m='1911030'>didn't</span> <span m='1911220'>like</span> <span
  m='1912180'>this</span> <span m='1912430'>theta</span> <span
  m='1912700'>n</span> <span m='1913090'>complexity</span> <span
  m='1914115'>corresponding</span> <span m='1914840'>to</span> <span
  m='1914890'>the</span> <span m='1914990'>straightforward</span> <span
  m='1915245'>algorithm.</span> <span m='1916350'>So</span> <span
  m='1916710'>it'd</span> <span m='1916820'>like</span> <span
  m='1916980'>to</span> <span m='1917070'>do</span> <span
  m='1917170'>better.</span> </p><p></p><p><span m='1928350'>So</span> <span
  m='1928600'>what</span> <span m='1928730'>I'd</span> <span
  m='1928810'>like</span> <span m='1928970'>to</span> <span
  m='1929060'>do</span> <span m='1929250'>is</span> <span m='1929510'>ask</span>
  <span m='1930390'>one</span> <span m='1930570'>of</span> <span
  m='1930680'>you</span> <span m='1930830'>to</span> <span
  m='1930910'>give</span> <span m='1931060'>me</span> <span m='1931280'>a</span>
  <span m='1931490'>recurrence</span> <span m='1932190'>relation</span> <span
  m='1933160'>of</span> <span m='1933420'>the</span> <span
  m='1933620'>kind,</span> <span m='1933925'>you know,</span> <span
  m='1934300'>T</span> <span m='1934510'>of</span> <span m='1934630'>n</span>
  <span m='1934890'>equals</span> <span m='1935950'>blah,</span> <span
  m='1936240'>blah,</span> <span m='1936390'>blah.</span> <span
  m='1938040'>That</span> <span m='1938600'>would</span> <span
  m='1938830'>correspond</span> <span m='1939430'>to</span> <span
  m='1939840'>this</span> <span m='1941400'>recursive</span> <span
  m='1941920'>algorithm,</span> <span m='1942310'>this</span> <span
  m='1942630'>divide</span> <span m='1942910'>and</span> <span
  m='1943020'>conquer</span> <span m='1943320'>algorithm.</span> <span
  m='1944020'>And</span> <span m='1944180'>then</span> <span
  m='1944310'>using</span> <span m='1944660'>that,</span> <span
  m='1945600'>I'd</span> <span m='1945760'>like</span> <span
  m='1946030'>to</span> <span m='1946380'>get</span> <span m='1946690'>to</span>
  <span m='1948020'>the</span> <span m='1948200'>actual</span> <span
  m='1948520'>complexity</span> <span m='1949050'>in</span> <span
  m='1949150'>terms</span> <span m='1949410'>of</span> <span
  m='1949830'>what</span> <span m='1950030'>the</span> <span
  m='1950120'>theta</span> <span m='1950650'>of</span> <span
  m='1951130'>complexity</span> <span m='1951800'>corresponds</span> <span
  m='1952940'>to.</span> <span m='1953460'>Yeah?</span> <span m='1953780'>Back
  there?</span> </p><p><span m='1954752'>AUDIENCE: So</span> <span
  m='1956228'>the worst</span> <span m='1956720'>case scenario</span> <span
  m='1958196'>if T</span> <span m='1958688'>of</span> <span m='1959180'>n</span>
  <span m='1959680'>is going</span> <span m='1959950'>to be</span> <span
  m='1960656'>some</span> <span m='1961092'>constant</span> <span
  m='1961528'>amount of</span> <span m='1961964'>time--</span> </p><p><span
  m='1962840'>PROFESSOR: Yep.</span> </p><p><span m='1963420'>AUDIENCE: --it
  takes</span> <span m='1963882'>to</span> <span m='1965268'>investigate</span>
  <span m='1965730'>whether</span> <span m='1966654'>a certain</span> <span
  m='1967116'>element</span> <span m='1967578'>is</span> <span
  m='1968040'>[INAUDIBLE],</span> <span m='1968970'>plus--</span> </p><p><span
  m='1969851'>[COUGH]</span> </p><p><span m='1970713'>--T of</span> <span
  m='1971144'>n</span> <span m='1971575'>over 2?</span> </p><p><span
  m='1972440'>PROFESSOR: Great.</span> <span m='1972730'>Exactly</span> <span
  m='1973140'>right.</span> <span m='1973550'>That's</span> <span
  m='1973690'>exactly</span> <span m='1973950'>right.</span> <span
  m='1974460'>So</span> <span m='1975320'>if</span> <span m='1975470'>you</span>
  <span m='1975570'>look</span> <span m='1975740'>at</span> <span
  m='1975850'>this</span> <span m='1976010'>algorithm</span> <span
  m='1976470'>and</span> <span m='1976550'>you</span> <span
  m='1977380'>say,</span> <span m='1978370'>from</span> <span
  m='1978630'>a</span> <span m='1979120'>computation</span> <span
  m='1980000'>standpoint,</span> <span m='1981060'>can</span> <span
  m='1981230'>I</span> <span m='1981290'>write</span> <span
  m='1982570'>an</span> <span m='1983340'>equation</span> <span
  m='1984160'>corresponding</span> <span m='1984720'>to</span> <span
  m='1984920'>the</span> <span m='1985030'>execution</span> <span
  m='1985510'>of</span> <span m='1985610'>this</span> <span
  m='1985780'>algorithm?</span> <span m='1986570'>And</span> <span
  m='1986740'>you</span> <span m='1986840'>say,</span> <span
  m='1987030'>T</span> <span m='1987240'>of</span> <span m='1987360'>n</span>
  <span m='1987580'>is</span> <span m='1987740'>the</span> <span
  m='1987850'>work</span> <span m='1988750'>that</span> <span
  m='1989290'>this</span> <span m='1989500'>algorithm</span> <span
  m='1989940'>does</span> <span m='1990920'>on--</span> <span
  m='1991350'>as</span> <span m='1991640'>input</span> <span
  m='1992000'>of</span> <span m='1992090'>size</span> <span
  m='1992570'>n.</span> <span m='1993820'>OK?</span> </p><p></p><p><span
  m='2005390'>Then</span> <span m='2005840'>I</span> <span
  m='2005970'>can</span> <span m='2006090'>write</span> <span
  m='2008010'>this</span> <span m='2008260'>equation.</span> <span
  m='2011310'>And</span> <span m='2011690'>this</span> <span
  m='2011910'>theta</span> <span m='2012180'>1</span> <span
  m='2012520'>corresponds</span> <span m='2013120'>to</span> <span
  m='2013360'>the</span> <span m='2013490'>two</span> <span
  m='2013730'>comparisons</span> <span m='2014530'>that</span> <span
  m='2014690'>you</span> <span m='2014810'>do</span> <span
  m='2015540'>looking</span> <span m='2015970'>at--</span> <span
  m='2016920'>potentially</span> <span m='2017070'>the two</span> <span
  m='2017260'>comparisons</span> <span m='2017750'>that you</span> <span
  m='2017960'>do--</span> <span m='2018540'>looking</span> <span
  m='2018780'>at</span> <span m='2018860'>the</span> <span
  m='2018940'>left</span> <span m='2019130'>hand</span> <span
  m='2019280'>side</span> <span m='2020460'>and</span> <span
  m='2020610'>the</span> <span m='2020700'>right</span> <span m='2020890'>hand
  side.</span> <span m='2021440'>So</span> <span m='2021590'>that's--</span>
  <span m='2021820'>2</span> <span m='2022240'>is</span> <span
  m='2022340'>a</span> <span m='2022390'>constant,</span> <span
  m='2022980'>so</span> <span m='2023000'>that's</span> <span
  m='2023150'>why</span> <span m='2023280'>we</span> <span
  m='2023380'>put</span> <span m='2023560'>theta</span> <span
  m='2023680'>1.</span> <span m='2024580'>All</span> <span
  m='2024650'>right?</span> </p><p><span m='2025200'>So</span> <span
  m='2025370'>you</span> <span m='2025490'>get</span> <span m='2025590'>a</span>
  <span m='2025650'>cushion,</span> <span m='2025850'>too.</span> <span
  m='2027060'>Watch</span> <span m='2027250'>out</span> <span
  m='2027390'>guys.</span> <span m='2029630'>Whoa!</span> <span
  m='2030780'>Oh</span> <span m='2030930'>actually</span> <span
  m='2031070'>that</span> <span m='2031110'>wasn't</span> <span
  m='2031380'>so</span> <span m='2031430'>bad.</span> <span
  m='2032192'>Good.</span> <span m='2034000'>Veers</span> <span
  m='2034410'>left,</span> <span m='2035280'>Eric.</span> <span
  m='2035620'>Veers</span> <span m='2035930'>left.</span> </p><p><span
  m='2037420'>So</span> <span m='2037920'>if</span> <span m='2038060'>you</span>
  <span m='2038330'>take this</span> <span m='2038850'>and</span> <span
  m='2039240'>you</span> <span m='2039730'>start</span> <span
  m='2042130'>expanding</span> <span m='2042730'>it,</span> <span
  m='2043360'>eventually</span> <span m='2043990'>you're</span> <span
  m='2044110'>going</span> <span m='2044230'>to</span> <span
  m='2044280'>get</span> <span m='2044520'>to</span> <span
  m='2044660'>the</span> <span m='2044800'>base</span> <span
  m='2045180'>case,</span> <span m='2046150'>which</span> <span
  m='2046520'>is</span> <span m='2049590'>T</span> <span m='2049770'>of</span>
  <span m='2049870'>1</span> <span m='2050790'>is</span> <span
  m='2051020'>theta</span> <span m='2051280'>1.</span> <span
  m='2052429'>Right?</span> <span m='2052590'>Because</span> <span
  m='2052770'>you</span> <span m='2052850'>have</span> <span
  m='2053010'>a</span> <span m='2053080'>one</span> <span
  m='2053350'>element</span> <span m='2054280'>array</span> <span
  m='2055360'>you</span> <span m='2055550'>just</span> <span
  m='2056080'>for</span> <span m='2056190'>that</span> <span
  m='2056480'>array</span> <span m='2056580'>it's</span> <span m='2057000'>just
  going to</span> <span m='2057110'>return</span> <span m='2057409'>that</span>
  <span m='2057920'>as</span> <span m='2058090'>a</span> <span
  m='2058170'>peak.</span> </p><p><span m='2059650'>And</span> <span
  m='2059960'>so</span> <span m='2060150'>if</span> <span m='2060270'>you</span>
  <span m='2060340'>do</span> <span m='2060469'>that,</span> <span
  m='2060730'>and</span> <span m='2060790'>you</span> <span m='2060889'>expand
  it</span> <span m='2061389'>all</span> <span m='2061530'>the</span> <span
  m='2061600'>way</span> <span m='2061770'>out,</span> <span
  m='2063130'>then</span> <span m='2063989'>you</span> <span
  m='2064110'>can</span> <span m='2064280'>write</span> <span
  m='2064659'>T</span> <span m='2064840'>of</span> <span m='2064980'>n</span>
  <span m='2065320'>equals</span> <span m='2066420'>theta</span> <span
  m='2066719'>1</span> <span m='2068310'>plus</span> <span
  m='2069870'>theta</span> <span m='2070130'>1.</span> <span
  m='2071080'>And</span> <span m='2071310'>you're</span> <span
  m='2071420'>going</span> <span m='2071550'>to</span> <span
  m='2071630'>do</span> <span m='2071780'>this</span> <span
  m='2073360'>log</span> <span m='2074820'>to</span> <span
  m='2075230'>the</span> <span m='2075320'>base</span> <span
  m='2075630'>2</span> <span m='2076120'>of</span> <span m='2076380'>n</span>
  <span m='2076719'>times.</span> <span m='2079300'>And</span> <span
  m='2080060'>adding</span> <span m='2080340'>these</span> <span
  m='2080540'>all</span> <span m='2080730'>up,</span> <span
  m='2083340'>gives</span> <span m='2083550'>you a</span> <span
  m='2083770'>complexity</span> <span m='2084940'>theta</span> <span
  m='2085170'>log</span> <span m='2085440'>2</span> <span m='2085590'>of
  n.</span> <span m='2086360'>Right?</span> </p><p><span m='2088330'>So</span>
  <span m='2088510'>now</span> <span m='2088670'>you</span> <span
  m='2088800'>compare</span> <span m='2089820'>this</span> <span
  m='2091050'>with</span> <span m='2091320'>that.</span> <span
  m='2093120'>And</span> <span m='2093480'>there's</span> <span
  m='2093699'>really</span> <span m='2093889'>a</span> <span
  m='2093949'>huge</span> <span m='2094219'>difference.</span> <span
  m='2094630'>There's</span> <span m='2094770'>an</span> <span
  m='2094840'>exponential</span> <span m='2095460'>difference.</span> <span
  m='2097440'>If</span> <span m='2097630'>you</span> <span
  m='2098690'>coded</span> <span m='2098950'>up</span> <span
  m='2099130'>this</span> <span m='2099290'>algorithm</span> <span
  m='2099920'>in</span> <span m='2100070'>Python--</span> <span
  m='2101860'>and</span> <span m='2102010'>I</span> <span
  m='2102060'>did--</span> <span m='2103500'>both</span> <span
  m='2103810'>these</span> <span m='2104150'>algorithms</span> <span
  m='2104610'>for</span> <span m='2104690'>the</span> <span
  m='2104790'>1D</span> <span m='2105080'>version--</span> <span
  m='2106170'>and</span> <span m='2106680'>if</span> <span
  m='2106840'>you</span> <span m='2106970'>run</span> <span
  m='2107190'>it</span> <span m='2108580'>on</span> <span m='2110070'>n</span>
  <span m='2110950'>being</span> <span m='2111920'>10</span> <span
  m='2112210'>million</span> <span m='2112580'>or</span> <span
  m='2112690'>so,</span> <span m='2114160'>then</span> <span
  m='2115170'>this</span> <span m='2115480'>algorithm</span> <span
  m='2115930'>takes</span> <span m='2116330'>13</span> <span
  m='2116820'>seconds.</span> <span m='2118080'>OK?</span> <span
  m='2118320'>The--</span> <span m='2119220'>The</span> <span m='2119560'>theta
  10</span> <span m='2119760'>algorithm</span> <span m='2120140'>takes</span>
  <span m='2120370'>13</span> <span m='2120800'>seconds.</span> <span
  m='2121880'>And</span> <span m='2122080'>this</span> <span
  m='2122220'>one</span> <span m='2122450'>takes</span> <span
  m='2123550'>0.001</span> <span m='2124990'>seconds.</span> <span
  m='2126140'>OK?</span> <span m='2126570'>Huge</span> <span
  m='2126890'>difference.</span> </p><p><span m='2128110'>So</span> <span
  m='2128350'>there</span> <span m='2128530'>is</span> <span
  m='2128610'>a</span> <span m='2128660'>big</span> <span
  m='2128810'>difference</span> <span m='2129120'>between</span> <span
  m='2129310'>theta</span> <span m='2129680'>n</span> <span
  m='2129720'>and</span> <span m='2129840'>theta</span> <span
  m='2130080'>log</span> <span m='2130345'>n.</span> <span
  m='2131970'>It's</span> <span m='2132150'>literally</span> <span
  m='2132570'>the</span> <span m='2132670'>difference</span> <span
  m='2132860'>between</span> <span m='2133120'>2</span> <span
  m='2133270'>raised</span> <span m='2133530'>to</span> <span
  m='2133610'>n,</span> <span m='2133830'>and</span> <span m='2134010'>n.</span>
  <span m='2135840'>It</span> <span m='2135970'>makes</span> <span
  m='2136180'>sense</span> <span m='2136530'>to</span> <span
  m='2136670'>try</span> <span m='2138470'>and</span> <span
  m='2139260'>reduce</span> <span m='2139580'>complexity</span> <span
  m='2140120'>as</span> <span m='2140220'>you</span> <span
  m='2140310'>can</span> <span m='2140410'>see,</span> <span
  m='2141870'>especially</span> <span m='2142430'>if</span> <span
  m='2142830'>you're</span> <span m='2143000'>talking</span> <span
  m='2143220'>about</span> <span m='2143450'>large</span> <span
  m='2143960'>inputs.</span> <span m='2144450'>All right?</span> <span
  m='2145390'>And</span> <span m='2145550'>you'll</span> <span
  m='2145690'>see</span> <span m='2145850'>that</span> <span
  m='2147020'>more</span> <span m='2147560'>clearly</span> <span
  m='2148460'>as</span> <span m='2148730'>we</span> <span m='2148860'>go</span>
  <span m='2149030'>to</span> <span m='2149150'>a</span> <span
  m='2149250'>2D</span> <span m='2149540'>version</span> <span
  m='2149920'>of</span> <span m='2150000'>this</span> <span
  m='2150150'>problem.</span> <span m='2151300'>All</span> <span
  m='2151400'>right?</span> </p><p><span m='2152210'>So</span> <span
  m='2152350'>you</span> <span m='2152470'>can't</span> <span
  m='2152630'>really</span> <span m='2152820'>do</span> <span
  m='2152950'>better</span> <span m='2153280'>for</span> <span
  m='2153360'>the</span> <span m='2153470'>1D.</span> <span
  m='2153910'>The</span> <span m='2154000'>1D</span> <span m='2154330'>is</span>
  <span m='2154460'>a</span> <span m='2154790'>straightforward</span> <span
  m='2155960'>problem.</span> <span m='2156750'>It</span> <span
  m='2156850'>gets</span> <span m='2157030'>a</span> <span
  m='2157090'>little</span> <span m='2157260'>more</span> <span
  m='2157480'>interesting--</span> <span m='2158500'>the</span> <span
  m='2159130'>problems</span> <span m='2159560'>get</span> <span
  m='2159710'>a</span> <span m='2159760'>little--</span> <span
  m='2160750'>excuse me,</span> <span m='2161080'>the</span> <span
  m='2161260'>algorithms</span> <span m='2161680'>get</span> <span
  m='2161790'>a</span> <span m='2161840'>little</span> <span
  m='2162000'>more</span> <span m='2162280'>sophisticated</span> <span
  m='2163600'>when</span> <span m='2163740'>we</span> <span
  m='2163850'>look</span> <span m='2164060'>at</span> <span m='2164140'>a</span>
  <span m='2164260'>2D</span> <span m='2164620'>version</span> <span
  m='2165710'>of</span> <span m='2166460'>peak</span> <span
  m='2166680'>finding.</span> <span m='2168340'>So</span> <span
  m='2169210'>let's</span> <span m='2169410'>talk</span> <span
  m='2169590'>about</span> <span m='2169770'>the</span> <span
  m='2169850'>2D</span> <span m='2170110'>version.</span> </p><p></p><p><span
  m='2175810'>So</span> <span m='2176760'>as</span> <span m='2176930'>you</span>
  <span m='2177000'>can</span> <span m='2177080'>imagine</span> <span
  m='2177510'>in the</span> <span m='2177600'>2D</span> <span
  m='2177890'>version</span> <span m='2178250'>you</span> <span
  m='2178350'>have</span> <span m='2178510'>a</span> <span
  m='2179020'>matrix,</span> <span m='2179640'>or</span> <span
  m='2179760'>a</span> <span m='2179840'>two</span> <span
  m='2179950'>dimensional</span> <span m='2180430'>array.</span> <span
  m='2183490'>And</span> <span m='2183890'>we'll</span> <span
  m='2184050'>say</span> <span m='2184740'>this</span> <span
  m='2184950'>thing</span> <span m='2185180'>has</span> <span
  m='2186390'>n</span> <span m='2186660'>rows</span> <span
  m='2188630'>and</span> <span m='2189030'>m</span> <span
  m='2189270'>columns.</span> </p><p></p><p><span m='2194700'>And</span> <span
  m='2194830'>now</span> <span m='2194980'>we</span> <span
  m='2195060'>have</span> <span m='2195160'>to</span> <span
  m='2195260'>define</span> <span m='2195700'>what</span> <span
  m='2195840'>a</span> <span m='2195910'>peak</span> <span
  m='2196280'>is.</span> <span m='2197190'>And</span> <span
  m='2197430'>it's</span> <span m='2197580'>a</span> <span
  m='2197630'>hill.</span> <span m='2198350'>It's</span> <span
  m='2199070'>the</span> <span m='2199590'>obvious</span> <span
  m='2200000'>definition</span> <span m='2200600'>of</span> <span
  m='2200720'>a</span> <span m='2200790'>peak.</span> <span
  m='2201540'>So</span> <span m='2202830'>if</span> <span m='2203000'>you</span>
  <span m='2203080'>had</span> <span m='2203400'>a in</span> <span
  m='2203800'>here,</span> <span m='2205180'>c,</span> <span
  m='2206650'>b,</span> <span m='2207480'>d,</span> <span m='2208755'>e.</span>
  <span m='2210490'>Then</span> <span m='2210960'>as</span> <span
  m='2211230'>you</span> <span m='2211340'>can</span> <span
  m='2211820'>guess,</span> <span m='2213480'>a</span> <span m='2215210'>is
  a</span> <span m='2215950'>2D</span> <span m='2216290'>peak</span> <span
  m='2219540'>if,</span> <span m='2219740'>and</span> <span
  m='2219850'>only</span> <span m='2220160'>if,</span> <span
  m='2222250'>a</span> <span m='2222480'>greater</span> <span
  m='2222730'>than</span> <span m='2222890'>or</span> <span
  m='2222970'>equal</span> <span m='2223240'>to</span> <span
  m='2223320'>b;</span> <span m='2224560'>a greater</span> <span
  m='2224880'>than</span> <span m='2225060'>or</span> <span
  m='2225170'>equal</span> <span m='2225430'>to</span> <span
  m='2225520'>d,</span> <span m='2227312'>c</span> <span m='2228830'>and</span>
  <span m='2229020'>e.</span> <span m='2230175'>All right?</span> <span
  m='2230560'>So</span> <span m='2230680'>it's</span> <span m='2230800'>a</span>
  <span m='2230850'>little</span> <span m='2231080'>hill</span> <span
  m='2231330'>up</span> <span m='2231470'>there.</span> </p><p><span
  m='2232366'>All right?</span> <span m='2232730'>And</span> <span
  m='2232870'>again</span> <span m='2233080'>I've</span> <span
  m='2233180'>used</span> <span m='2233370'>the</span> <span
  m='2233450'>greater</span> <span m='2233690'>than</span> <span
  m='2233870'>or</span> <span m='2233970'>equal</span> <span
  m='2234250'>to</span> <span m='2234400'>here,</span> <span
  m='2235120'>so</span> <span m='2235290'>that's</span> <span
  m='2236350'>similar</span> <span m='2236750'>to</span> <span
  m='2236820'>the</span> <span m='2237030'>1D</span> <span m='2237730'>in</span>
  <span m='2238000'>the</span> <span m='2238150'>case</span> <span
  m='2238490'>that</span> <span m='2239030'>you'll</span> <span
  m='2239150'>always</span> <span m='2239400'>find</span> <span
  m='2239630'>a</span> <span m='2239680'>peak</span> <span m='2240260'>in</span>
  <span m='2240420'>any</span> <span m='2240700'>2D</span> <span
  m='2241050'>matrix.</span> </p><p><span m='2243960'>Now</span> <span
  m='2245100'>again</span> <span m='2245980'>I'll</span> <span m='2246430'>give
  you</span> <span m='2246600'>the</span> <span
  m='2246750'>straightforward</span> <span m='2247380'>algorithm,</span> <span
  m='2249210'>and</span> <span m='2249360'>we'll</span> <span
  m='2249490'>call</span> <span m='2249750'>it</span> <span
  m='2249890'>the</span> <span m='2250320'>Greedy</span> <span
  m='2250490'>Ascent</span> <span m='2251330'>algorithm.</span>
  </p><p></p><p><span m='2261660'>And</span> <span m='2261810'>the</span> <span
  m='2261900'>Greedy</span> <span m='2262280'>Ascent</span> <span
  m='2262550'>algorithm</span> <span m='2263310'>essentially</span> <span
  m='2263790'>picks</span> <span m='2264050'>a</span> <span
  m='2264130'>direction</span> <span m='2265820'>and,</span> <span
  m='2266195'>you know,</span> <span m='2266570'>tries</span> <span
  m='2266870'>to</span> <span m='2266970'>follow</span> <span
  m='2267280'>that</span> <span m='2267480'>direction</span> <span
  m='2270130'>in</span> <span m='2270310'>order</span> <span
  m='2270560'>to</span> <span m='2271190'>find</span> <span m='2271550'>a</span>
  <span m='2271640'>peak.</span> <span m='2272770'>So</span> <span
  m='2273090'>for</span> <span m='2273210'>example,</span> <span
  m='2274420'>if</span> <span m='2274470'>I</span> <span m='2274540'>had</span>
  <span m='2274800'>this</span> <span m='2274950'>particular--</span>
  </p><p></p><p><span m='2281840'>--matrix;</span> <span m='2283120'>14,</span>
  <span m='2283530'>13,</span> <span m='2284350'>12,</span> <span
  m='2287090'>15,</span> <span m='2287810'>9,</span> <span
  m='2289151'>11,</span> <span m='2290520'>17--</span> </p><p><span
  m='2297010'>Then</span> <span m='2297230'>what</span> <span
  m='2297390'>might</span> <span m='2297510'>happen</span> <span
  m='2297880'>is</span> <span m='2298070'>if</span> <span m='2298170'>I</span>
  <span m='2298250'>started</span> <span m='2299150'>at</span> <span
  m='2299360'>some</span> <span m='2300280'>arbitrary</span> <span
  m='2300850'>midpoint--</span> <span m='2301860'>So</span> <span
  m='2302110'>the</span> <span m='2302520'>Greedy</span> <span
  m='2302880'>Ascent</span> <span m='2303180'>algorithm</span> <span
  m='2303360'>has</span> <span m='2303530'>to</span> <span
  m='2303610'>make</span> <span m='2303760'>choices</span> <span
  m='2304620'>as</span> <span m='2304850'>to</span> <span
  m='2304970'>where</span> <span m='2305160'>to</span> <span
  m='2305240'>start.</span> <span m='2306210'>Just</span> <span
  m='2306390'>like</span> <span m='2306510'>we</span> <span
  m='2306610'>had</span> <span m='2307220'>different</span> <span
  m='2307550'>cases</span> <span m='2307960'>here,</span> <span
  m='2309230'>you</span> <span m='2309410'>have</span> <span
  m='2309560'>to</span> <span m='2309640'>make</span> <span m='2309790'>a</span>
  <span m='2309840'>choice</span> <span m='2310190'>as</span> <span
  m='2310280'>to</span> <span m='2310370'>where</span> <span
  m='2310500'>to</span> <span m='2310570'>start.</span> </p><p><span
  m='2311100'>You</span> <span m='2311220'>might</span> <span
  m='2311370'>want</span> <span m='2311470'>to</span> <span
  m='2311510'>start</span> <span m='2311770'>in</span> <span
  m='2311820'>the</span> <span m='2311880'>middle,</span> <span
  m='2312770'>and</span> <span m='2313140'>you</span> <span
  m='2313240'>might</span> <span m='2313420'>want</span> <span
  m='2313530'>to</span> <span m='2313580'>work</span> <span
  m='2313790'>your</span> <span m='2313890'>way</span> <span
  m='2314380'>left</span> <span m='2315060'>first.</span> <span
  m='2315560'>Or</span> <span m='2315670'>you're going to</span> <span
  m='2315870'>all--</span> <span m='2316210'>You</span> <span
  m='2316380'>just</span> <span m='2316690'>keep</span> <span
  m='2316890'>going</span> <span m='2317100'>left,</span> <span
  m='2318380'>our</span> <span m='2318560'>keep</span> <span
  m='2318740'>going</span> <span m='2318950'>right.</span> <span
  m='2319720'>And</span> <span m='2319900'>if</span> <span
  m='2319970'>you</span> <span m='2320410'>hit</span> <span
  m='2320590'>an</span> <span m='2320700'>edge,</span> <span
  m='2321130'>you</span> <span m='2321240'>go</span> <span
  m='2321380'>down.</span> <span m='2322340'>So</span> <span
  m='2322500'>you</span> <span m='2322630'>make</span> <span
  m='2322830'>some</span> <span m='2323180'>choices</span> <span
  m='2323670'>as</span> <span m='2323770'>to</span> <span
  m='2323880'>what</span> <span m='2324180'>the</span> <span
  m='2324320'>default</span> <span m='2326010'>traversal</span> <span
  m='2326450'>directions</span> <span m='2327020'>are.</span> </p><p><span
  m='2327810'>And</span> <span m='2328040'>so</span> <span m='2328240'>if</span>
  <span m='2328370'>you</span> <span m='2328470'>say</span> <span
  m='2329170'>you</span> <span m='2329330'>want</span> <span
  m='2329440'>to</span> <span m='2329480'>start</span> <span
  m='2329730'>with</span> <span m='2329870'>12,</span> <span
  m='2330820'>you</span> <span m='2330890'>are</span> <span
  m='2331040'>going</span> <span m='2331210'>to</span> <span
  m='2331260'>go</span> <span m='2331440'>look</span> <span
  m='2332050'>for</span> <span m='2332280'>something</span> <span
  m='2333300'>to</span> <span m='2333570'>left.</span> <span
  m='2334050'>And</span> <span m='2334170'>if</span> <span
  m='2334220'>it's</span> <span m='2334400'>greater</span> <span
  m='2335820'>than,</span> <span m='2336840'>you're</span> <span
  m='2337000'>going</span> <span m='2337110'>to</span> <span
  m='2337150'>follow</span> <span m='2337430'>that</span> <span
  m='2337600'>direction.</span> <span m='2338470'>If</span> <span
  m='2338590'>it's</span> <span m='2338740'>not,</span> <span
  m='2340090'>if</span> <span m='2340220'>it's</span> <span
  m='2340360'>less,</span> <span m='2340710'>then</span> <span
  m='2340850'>you're</span> <span m='2340950'>going</span> <span
  m='2341050'>to</span> <span m='2341100'>go</span> <span m='2342550'>in</span>
  <span m='2342890'>the other</span> <span m='2343170'>direction,</span> <span
  m='2343550'>in</span> <span m='2343640'>this</span> <span
  m='2343800'>case,</span> <span m='2344200'>for</span> <span
  m='2344220'>example.</span> <span m='2345160'>So</span> <span
  m='2345180'>in</span> <span m='2345240'>this</span> <span
  m='2345410'>case</span> <span m='2345840'>you'll</span> <span
  m='2346460'>go</span> <span m='2346650'>to</span> <span m='2347310'>12,</span>
  <span m='2347810'>13 ,</span> <span m='2348310'>14,</span> <span
  m='2349310'>15,</span> <span m='2350310'>16,</span> <span
  m='2351310'>17,</span> <span m='2352715'>19,</span> <span
  m='2353120'>and</span> <span m='2353310'>20.</span> <span
  m='2354230'>And</span> <span m='2354870'>you'd</span> <span
  m='2355060'>find--</span> <span m='2355870'>You 'd</span> <span
  m='2355990'>find</span> <span m='2356230'>this</span> <span
  m='2356400'>peak.</span> </p><p><span m='2357765'>Now</span> <span
  m='2358220'>I</span> <span m='2358350'>haven't</span> <span
  m='2358580'>given</span> <span m='2358780'>you</span> <span
  m='2358910'>the</span> <span m='2359960'>specific</span> <span
  m='2360540'>details</span> <span m='2361680'>of</span> <span m='2362030'>a
  Greedy</span> <span m='2362500'>Ascent</span> <span
  m='2362700'>algorithm.</span> <span m='2363750'>But</span> <span
  m='2365550'>I</span> <span m='2365650'>think</span> <span
  m='2366970'>if</span> <span m='2367010'>you</span> <span
  m='2369540'>look</span> <span m='2369830'>at</span> <span
  m='2370060'>the</span> <span m='2371820'>worst</span> <span
  m='2372160'>case</span> <span m='2372610'>possibilities</span> <span
  m='2373400'>here,</span> <span m='2373780'>with</span> <span
  m='2373950'>respect</span> <span m='2374330'>to</span> <span
  m='2374930'>a</span> <span m='2375110'>given</span> <span
  m='2375360'>matrix,</span> <span m='2376370'>and</span> <span
  m='2376680'>for</span> <span m='2376880'>any</span> <span
  m='2377220'>given</span> <span m='2377590'>starting</span> <span
  m='2378050'>point,</span> <span m='2378920'>and</span> <span
  m='2379160'>for</span> <span m='2379440'>any</span> <span
  m='2379760'>given</span> <span m='2380530'>strategy--</span> <span
  m='2381660'>in</span> <span m='2381770'>terms</span> <span
  m='2381990'>of</span> <span m='2382090'>choosing</span> <span
  m='2382440'>left</span> <span m='2382750'>first,</span> <span
  m='2383270'>versus</span> <span m='2384430'>right</span> <span
  m='2384730'>first,</span> <span m='2385570'>or</span> <span
  m='2385750'>down</span> <span m='2386460'>first</span> <span
  m='2386860'>versus</span> <span m='2387210'>up</span> <span
  m='2387460'>first--</span> <span m='2388630'>you</span> <span
  m='2388780'>will</span> <span m='2388920'>have</span> <span
  m='2389090'>a</span> <span m='2389140'>situation</span> <span
  m='2389750'>where--</span> <span m='2391080'>just</span> <span
  m='2391370'>like</span> <span m='2391750'>we</span> <span
  m='2391890'>had</span> <span m='2392220'>in</span> <span
  m='2392300'>the</span> <span m='2392390'>1D</span> <span
  m='2392840'>case--</span> <span m='2393790'>you</span> <span
  m='2393940'>may</span> <span m='2394250'>end</span> <span
  m='2394550'>up</span> <span m='2395450'>touching</span> <span
  m='2397800'>a</span> <span m='2397850'>large</span> <span
  m='2398400'>fraction</span> <span m='2399430'>of</span> <span
  m='2399760'>the</span> <span m='2399960'>elements</span> <span
  m='2400460'>in</span> <span m='2400550'>this</span> <span
  m='2400680'>2D</span> <span m='2401180'>array.</span> <span
  m='2402015'>OK?</span> </p><p><span m='2402750'>So</span> <span
  m='2402890'>in</span> <span m='2403020'>this</span> <span
  m='2403210'>case,</span> <span m='2404240'>we</span> <span
  m='2404340'>ended</span> <span m='2404460'>up,</span> <span m='2405030'>you
  know,</span> <span m='2405190'>touching</span> <span m='2405480'>a</span>
  <span m='2405520'>bunch</span> <span m='2405760'>of</span> <span
  m='2405820'>different</span> <span m='2406060'>elements.</span> <span
  m='2406890'>And</span> <span m='2407000'>it's</span> <span
  m='2407100'>quite</span> <span m='2407330'>possible</span> <span
  m='2407760'>that</span> <span m='2408920'>you</span> <span
  m='2409550'>could</span> <span m='2409680'>end</span> <span
  m='2409830'>up</span> <span m='2409970'>touching--</span> <span
  m='2410760'>starting</span> <span m='2411060'>from</span> <span
  m='2411190'>the</span> <span m='2411270'>midpoint--</span> <span
  m='2411700'>you could</span> <span m='2412040'>up</span> <span
  m='2412190'>touching</span> <span m='2412530'>half</span> <span
  m='2412820'>the elements,</span> <span m='2413750'>and</span> <span
  m='2414180'>in</span> <span m='2414800'>some</span> <span
  m='2414990'>cases,</span> <span m='2415320'>touching</span> <span
  m='2415700'>all</span> <span m='2415980'>the</span> <span
  m='2416050'>elements.</span> <span m='2416990'>So</span> <span
  m='2418120'>if</span> <span m='2418250'>you</span> <span m='2418320'>do</span>
  <span m='2418450'>a</span> <span m='2418540'>worst</span> <span
  m='2418800'>case</span> <span m='2419830'>analysis</span> <span
  m='2420340'>of</span> <span m='2420450'>this</span> <span
  m='2420800'>algorithm--</span> <span m='2423000'>a</span> <span
  m='2423140'>particular</span> <span m='2423520'>algorithm</span> <span
  m='2424110'>with</span> <span m='2424260'>particular</span> <span
  m='2424600'>choices</span> <span m='2425080'>in</span> <span
  m='2425190'>terms</span> <span m='2425410'>of</span> <span
  m='2425490'>the</span> <span m='2425580'>starting</span> <span
  m='2425930'>point</span> <span m='2427110'>and</span> <span
  m='2428480'>the</span> <span m='2428600'>direction</span> <span
  m='2429070'>of</span> <span m='2429160'>search--</span> <span
  m='2430370'>a</span> <span m='2430560'>Greedy</span> <span
  m='2430960'>Ascent</span> <span m='2431120'>algorithm</span> <span
  m='2431500'>would</span> <span m='2431630'>have</span> <span
  m='2431930'>theta</span> <span m='2432180'>n</span> <span m='2432400'>m</span>
  <span m='2432590'>complexity.</span> <span m='2433750'>All</span> <span
  m='2433840'>right?</span> <span m='2434320'>And</span> <span
  m='2434500'>in</span> <span m='2434590'>the</span> <span
  m='2435030'>case</span> <span m='2435420'>where</span> <span
  m='2437560'>n</span> <span m='2437800'>equals</span> <span
  m='2438160'>m,</span> <span m='2439580'>or</span> <span m='2439730'>m</span>
  <span m='2439880'>equals</span> <span m='2440180'>n,</span> <span
  m='2442480'>you'd</span> <span m='2442570'>have</span> <span
  m='2442760'>theta</span> <span m='2443020'>n</span> <span
  m='2443190'>squared</span> <span m='2443570'>complexity.</span> <span
  m='2444840'>OK?</span> </p><p><span m='2446290'>I</span> <span
  m='2446400'>won't</span> <span m='2447050'>spend</span> <span
  m='2447280'>very</span> <span m='2447410'>much</span> <span
  m='2447580'>time</span> <span m='2447940'>on</span> <span
  m='2448150'>this,</span> <span m='2448440'>because</span> <span
  m='2448660'>I</span> <span m='2448690'>want</span> <span m='2449830'>to</span>
  <span m='2449920'>talk</span> <span m='2450110'>to</span> <span
  m='2450310'>you</span> <span m='2450410'>about</span> <span
  m='2451520'>the</span> <span m='2451790'>divide</span> <span
  m='2452150'>and</span> <span m='2452270'>conquer</span> <span
  m='2452730'>versions</span> <span m='2453850'>of</span> <span
  m='2455370'>this</span> <span m='2455890'>algorithm</span> <span
  m='2456330'>for</span> <span m='2456450'>the</span> <span
  m='2456600'>2D</span> <span m='2456980'>peak.</span> <span
  m='2458020'>But</span> <span m='2459000'>hopefully</span> <span
  m='2459320'>you're</span> <span m='2459690'>all</span> <span
  m='2459900'>with</span> <span m='2460080'>me</span> <span
  m='2460350'>with</span> <span m='2460510'>respect</span> <span
  m='2460860'>to</span> <span m='2461040'>what</span> <span
  m='2461330'>the</span> <span m='2461410'>worst</span> <span
  m='2461630'>case</span> <span m='2461790'>complexity</span> <span
  m='2462310'>is.</span> <span m='2463530'>All</span> <span
  m='2463620'>right?</span> <span m='2464990'>People</span> <span
  m='2465200'>buy</span> <span m='2465340'>that?</span> <span
  m='2466210'>Yeah.</span> <span m='2466570'>Question</span> <span
  m='2466850'>back</span> <span m='2467000'>there.</span> </p><p><span
  m='2467390'>AUDIENCE: Can you--</span> <span m='2467782'>Is</span> <span
  m='2468174'>that an</span> <span m='2468566'>approximation?</span> <span
  m='2468960'>Or can you</span> <span m='2469305'>actually</span> <span
  m='2469650'>get</span> <span m='2470481'>to</span> <span m='2470942'>n</span>
  <span m='2471403'>times m</span> <span m='2472786'>traversals?</span>
  </p><p><span m='2474630'>PROFESSOR: So</span> <span m='2474960'>there</span>
  <span m='2475170'>are</span> <span m='2475260'>specific</span> <span
  m='2477280'>Greedy</span> <span m='2477555'>Ascent</span> <span
  m='2477990'>algorithms,</span> <span m='2478780'>and</span> <span
  m='2478940'>specific</span> <span m='2479410'>matrices</span> <span
  m='2480540'>where,</span> <span m='2481190'>if</span> <span
  m='2481340'>I</span> <span m='2481400'>give</span> <span
  m='2481560'>you</span> <span m='2481680'>the</span> <span
  m='2482020'>code</span> <span m='2482370'>for</span> <span
  m='2482460'>the</span> <span m='2482540'>algorithm,</span> <span
  m='2483000'>and</span> <span m='2483060'>I</span> <span
  m='2483100'>give</span> <span m='2483480'>you a</span> <span
  m='2483630'>specific</span> <span m='2483790'>matrix,</span> <span
  m='2484680'>that</span> <span m='2485240'>I</span> <span
  m='2485360'>could</span> <span m='2485690'>make</span> <span
  m='2485850'>you</span> <span m='2485990'>touch</span> <span
  m='2487170'>all</span> <span m='2487360'>of</span> <span
  m='2487430'>these</span> <span m='2487600'>elements.</span> <span
  m='2488200'>That's</span> <span m='2488390'>correct.</span> <span
  m='2488870'>So</span> <span m='2489090'>we're</span> <span
  m='2489270'>talking</span> <span m='2489470'>about</span> <span
  m='2489640'>worst</span> <span m='2489880'>case.</span> <span
  m='2490600'>You're</span> <span m='2490800'>being</span> <span
  m='2491000'>very</span> <span m='2491240'>paranoid</span> <span
  m='2492030'>when</span> <span m='2492170'>you</span> <span
  m='2492260'>talk</span> <span m='2492450'>about</span> <span
  m='2492640'>worst</span> <span m='2492890'>case</span> <span
  m='2493090'>complexity.</span> <span m='2494540'>And</span> <span
  m='2494800'>so</span> <span m='2495340'>I'm--</span> <span m='2497480'>hand
  waving</span> <span m='2498130'>a</span> <span m='2498170'>bit</span> <span
  m='2498340'>here,</span> <span m='2498800'>simply</span> <span
  m='2499090'>because</span> <span m='2499730'>I</span> <span
  m='2499890'>haven't</span> <span m='2500140'>given</span> <span
  m='2500350'>you</span> <span m='2500480'>the</span> <span
  m='2500610'>specifics</span> <span m='2501150'>of the</span> <span
  m='2501280'>algorithm</span> <span m='2501690'>yet.</span> <span
  m='2502150'>Right?</span> </p><p><span m='2502450'>This</span> <span
  m='2502610'>is</span> <span m='2502760'>really</span> <span
  m='2503780'>a</span> <span m='2503890'>set</span> <span m='2504130'>of</span>
  <span m='2504240'>algorithms,</span> <span m='2504700'>because</span> <span
  m='2504940'>I</span> <span m='2505030'>haven't</span> <span
  m='2505300'>given</span> <span m='2505480'>you</span> <span
  m='2505600'>the</span> <span m='2505710'>code,</span> <span
  m='2506210'>I</span> <span m='2506270'>haven't told</span> <span
  m='2506520'>you</span> <span m='2506630'>where</span> <span
  m='2506790'>it</span> <span m='2506880'>starts,</span> <span
  m='2507620'>and</span> <span m='2507800'>which</span> <span
  m='2507930'>direction</span> <span m='2508340'>it</span> <span
  m='2508440'>goes.</span> <span m='2509050'>But</span> <span
  m='2509450'>you</span> <span m='2509670'>go,</span> <span
  m='2510370'>do</span> <span m='2510530'>that,</span> <span
  m='2510920'>fix</span> <span m='2511190'>it,</span> <span
  m='2511560'>and</span> <span m='2512190'>I</span> <span
  m='2512380'>would</span> <span m='2512490'>be</span> <span
  m='2512660'>the</span> <span m='2512750'>person</span> <span
  m='2513070'>who</span> <span m='2513200'>tries</span> <span
  m='2513600'>to</span> <span m='2513720'>find</span> <span
  m='2513980'>the</span> <span m='2514060'>worst</span> <span
  m='2514260'>case</span> <span m='2514450'>complexity.</span> <span
  m='2515380'>Suddenly</span> <span m='2516100'>it's</span> <span
  m='2516340'>very</span> <span m='2516570'>easy</span> <span
  m='2516870'>to</span> <span m='2516940'>get</span> <span m='2517160'>to</span>
  <span m='2517790'>theta</span> <span m='2518040'>n</span> <span
  m='2518250'>m</span> <span m='2518540'>in</span> <span
  m='2518670'>terms</span> <span m='2518940'>of</span> <span
  m='2519050'>having</span> <span m='2519330'>some</span> <span
  m='2519600'>constant</span> <span m='2520180'>multiplying</span> <span
  m='2521610'>n</span> <span m='2522020'>times</span> <span
  m='2522390'>m.</span> <span m='2523140'>But</span> <span
  m='2523480'>you</span> <span m='2523610'>can</span> <span
  m='2523970'>definitely</span> <span m='2524340'>get</span> <span
  m='2524650'>to</span> <span m='2525140'>that</span> <span
  m='2525360'>constant</span> <span m='2525810'>being</span> <span
  m='2527050'>very</span> <span m='2527440'>close</span> <span
  m='2527680'>to</span> <span m='2527770'>1.</span> <span m='2528520'>OK?</span>
  <span m='2529910'>If</span> <span m='2530080'>not</span> <span
  m='2530240'>1.</span> </p><p><span m='2531350'>All</span> <span
  m='2531450'>right.</span> <span m='2532190'>So</span> <span
  m='2532710'>let's</span> <span m='2532910'>talk</span> <span
  m='2533070'>about</span> <span m='2533240'>divide</span> <span
  m='2533500'>and</span> <span m='2533610'>conquer.</span> <span
  m='2534480'>And</span> <span m='2535830'>let's</span> <span
  m='2536130'>say</span> <span m='2537610'>that</span> <span
  m='2537880'>I</span> <span m='2538020'>did</span> <span
  m='2538330'>something</span> <span m='2538720'>like</span> <span
  m='2538940'>this,</span> <span m='2539220'>where</span> <span
  m='2539470'>I</span> <span m='2539550'>just</span> <span
  m='2539980'>tried</span> <span m='2540210'>to</span> <span
  m='2540310'>jam</span> <span m='2541390'>the</span> <span
  m='2541840'>binary</span> <span m='2542340'>search</span> <span
  m='2542770'>algorithm</span> <span m='2544260'>into</span> <span
  m='2544910'>the</span> <span m='2545060'>2D</span> <span
  m='2545360'>version.</span> <span m='2546650'>All right?</span>
  </p><p></p><p><span m='2557780'>So</span> <span m='2557950'>what</span> <span
  m='2558070'>I'm</span> <span m='2558150'>going</span> <span
  m='2558290'>to</span> <span m='2558370'>do</span> <span
  m='2558660'>is--</span> </p><p></p><p><span m='2563830'>--I'm</span> <span
  m='2563950'>going</span> <span m='2564080'>to</span> <span
  m='2564160'>pick</span> <span m='2566480'>the</span> <span
  m='2566560'>middle</span> <span m='2569230'>column,</span> <span
  m='2571770'>j</span> <span m='2572190'>equals</span> <span
  m='2572890'>m</span> <span m='2573200'>over</span> <span m='2573550'>2.</span>
  <span m='2575430'>And</span> <span m='2575570'>I'm</span> <span
  m='2575650'>going</span> <span m='2575780'>to</span> <span
  m='2575840'>find</span> <span m='2577890'>a</span> <span m='2578050'>1D</span>
  <span m='2578510'>peak</span> <span m='2580250'>using</span> <span
  m='2580710'>whatever</span> <span m='2581030'>algorithm</span> <span
  m='2581390'>I</span> <span m='2581440'>want.</span> <span
  m='2581810'>And</span> <span m='2581970'>I'll</span> <span
  m='2582060'>probably</span> <span m='2582400'>end</span> <span
  m='2582600'>up</span> <span m='2582760'>using</span> <span
  m='2583130'>the</span> <span m='2583750'>more</span> <span
  m='2583980'>efficient</span> <span m='2584360'>algorithm,</span> <span
  m='2584820'>the</span> <span m='2586520'>binary</span> <span
  m='2587000'>search version</span> <span m='2587340'>that's</span> <span
  m='2587550'>gone</span> <span m='2587850'>all</span> <span
  m='2588020'>the</span> <span m='2588080'>way</span> <span
  m='2588180'>to</span> <span m='2588250'>the</span> <span
  m='2588350'>left</span> <span m='2588540'>of the</span> <span
  m='2588620'>board</span> <span m='2589000'>there.</span> <span
  m='2590530'>And</span> <span m='2590900'>let's</span> <span
  m='2591060'>say</span> <span m='2591240'>I</span> <span
  m='2591280'>find</span> <span m='2591630'>a</span> <span
  m='2591670'>binary</span> <span m='2591975'>peak</span> <span
  m='2592280'>at</span> <span m='2592500'>(i,</span> <span
  m='2592970'>j).</span> <span m='2594000'>Because</span> <span
  m='2594100'>I've</span> <span m='2594140'>picked</span> <span
  m='2594370'>a</span> <span m='2594470'>column,</span> <span
  m='2595450'>and</span> <span m='2595770'>I'm</span> <span m='2595840'>just
  finding</span> <span m='2596250'>a</span> <span m='2596310'>1D</span> <span
  m='2596670'>peak.</span> </p><p></p><p><span m='2600320'>So</span> <span
  m='2600400'>this</span> <span m='2600610'>is</span> <span m='2600880'>j</span>
  <span m='2601050'>equals</span> <span m='2601730'>m</span> <span
  m='2601920'>over</span> <span m='2602130'>2.</span> <span
  m='2603550'>That's</span> <span m='2603750'>i.</span> <span
  m='2605690'>Now</span> <span m='2606900'>I</span> <span m='2607040'>use</span>
  <span m='2609290'>(i,j).</span> <span m='2609850'>In</span> <span
  m='2610030'>particular</span> <span m='2610460'>row</span> <span
  m='2611130'>i</span> <span m='2612840'>as</span> <span m='2613070'>a</span>
  <span m='2613150'>start--</span> </p><p></p><p><span m='2618730'>--to
  find</span> <span m='2620430'>a</span> <span m='2620570'>1D</span> <span
  m='2620810'>peak</span> <span m='2621220'>on</span> <span
  m='2621650'>row</span> <span m='2621870'>i.</span> </p><p></p><p><span
  m='2627470'>And</span> <span m='2627650'>I</span> <span m='2628430'>stand up
  here,</span> <span m='2628690'>I'm</span> <span m='2628780'>really</span>
  <span m='2629070'>happy.</span> <span m='2630260'>OK?</span> <span
  m='2630540'>Because</span> <span m='2630840'>I</span> <span
  m='2630910'>say,</span> <span m='2631180'>wow.</span> <span
  m='2633440'>I</span> <span m='2633940'>picked</span> <span
  m='2634120'>a</span> <span m='2634210'>middle</span> <span
  m='2634460'>column,</span> <span m='2635380'>I</span> <span
  m='2635390'>found</span> <span m='2635640'>a</span> <span
  m='2635720'>1D</span> <span m='2636100'>peak,</span> <span
  m='2636850'>that</span> <span m='2637040'>is</span> <span
  m='2637200'>theta</span> <span m='2637460'>m</span> <span
  m='2637730'>complexity</span> <span m='2639020'>to</span> <span
  m='2639120'>find</span> <span m='2639320'>a</span> <span m='2639390'>1D</span>
  <span m='2639730'>peak</span> <span m='2639990'>as</span> <span
  m='2640100'>we</span> <span m='2640240'>argued.</span> <span
  m='2641350'>And</span> <span m='2642830'>one</span> <span
  m='2643150'>side--</span> <span m='2644320'>the</span> <span
  m='2644410'>theta</span> <span m='2644770'>m--</span> </p><p><span
  m='2646665'>AUDIENCE: Log n.</span> </p><p><span m='2647970'>PROFESSOR:
  Oh,</span> <span m='2648390'>I'm</span> <span m='2648490'>sorry.</span> <span
  m='2648700'>You're</span> <span m='2648790'>right.</span> <span
  m='2649730'>The</span> <span m='2650650'>log n</span> <span
  m='2651120'>complexity,</span> <span m='2652490'>that's</span> <span
  m='2652610'>what</span> <span m='2652750'>this</span> <span
  m='2652880'>was.</span> <span m='2653490'>So I</span> <span m='2653630'>do
  have</span> <span m='2653990'>that here.</span> <span m='2655250'>Yeah.</span>
  <span m='2655530'>Log n</span> <span m='2655940'>complexity.</span> <span
  m='2656470'>Thanks,</span> <span m='2656810'>Eric.</span> </p><p><span
  m='2658920'>And</span> <span m='2659070'>then</span> <span
  m='2659410'>once</span> <span m='2659650'>I</span> <span m='2659720'>do</span>
  <span m='2659870'>that,</span> <span m='2661070'>I</span> <span
  m='2661130'>can</span> <span m='2662300'>find</span> <span
  m='2663680'>a</span> <span m='2663990'>1D</span> <span m='2664150'>peak</span>
  <span m='2664400'>on</span> <span m='2664540'>row</span> <span
  m='2664840'>i.</span> <span m='2666130'>In</span> <span
  m='2666270'>this</span> <span m='2666440'>case</span> <span
  m='2666930'>row</span> <span m='2667120'>i</span> <span
  m='2667310'>would</span> <span m='2667550'>be</span> <span
  m='2668110'>m</span> <span m='2668370'>wide,</span> <span
  m='2668690'>so</span> <span m='2668820'>it would</span> <span
  m='2669010'>be</span> <span m='2669130'>log</span> <span m='2669480'>m</span>
  <span m='2669750'>complexity.</span> <span m='2670630'>If</span> <span
  m='2670800'>n</span> <span m='2670970'>equals</span> <span
  m='2671260'>m,</span> <span m='2671950'>then</span> <span m='2672060'>I</span>
  <span m='2672090'>have</span> <span m='2672200'>a</span> <span
  m='2672240'>couple</span> <span m='2672490'>of steps</span> <span
  m='2672750'>of</span> <span m='2673030'>log</span> <span m='2673340'>n,</span>
  <span m='2673840'>and</span> <span m='2673980'>I'm</span> <span
  m='2674070'>done.</span> <span m='2675050'>All right?</span> </p><p><span
  m='2676030'>Am</span> <span m='2676160'>I</span> <span
  m='2676220'>done?</span> <span m='2678320'>No.</span> <span m='2679640'>Can
  someone</span> <span m='2680680'>tell</span> <span m='2680830'>me</span> <span
  m='2680970'>why</span> <span m='2681190'>I'm</span> <span
  m='2681330'>not</span> <span m='2681570'>done?</span> <span
  m='2682780'>Precisely?</span> <span m='2683270'>Yep.</span> </p><p><span
  m='2683947'>AUDIENCE: Because when</span> <span m='2684404'>you</span> <span
  m='2685775'>do the</span> <span m='2686232'>second</span> <span
  m='2686689'>part to find</span> <span m='2687603'>the</span> <span
  m='2688520'>peak</span> <span m='2688730'>in</span> <span m='2688930'>row
  i,</span> <span m='2689420'>you might</span> <span m='2689910'>not have</span>
  <span m='2690400'>that column</span> <span m='2690890'>peak--</span> <span
  m='2692360'>There</span> <span m='2692850'>might not be</span> <span
  m='2693340'>a peak</span> <span m='2693830'>on the column anymore.</span>
  </p><p><span m='2694320'>PROFESSOR: That's</span> <span
  m='2694550'>exactly</span> <span m='2694950'>correct.</span> <span
  m='2696240'>So</span> <span m='2697330'>this</span> <span
  m='2697530'>algorithm</span> <span m='2697960'>is</span> <span
  m='2698510'>incorrect.</span> <span m='2699490'>OK?</span> <span
  m='2699780'>It</span> <span m='2699890'>doesn't</span> <span
  m='2700220'>work.</span> <span m='2701460'>It's</span> <span
  m='2702570'>efficient,</span> <span m='2703140'>but</span> <span
  m='2703380'>incorrect.</span> <span m='2704380'>OK?</span> <span
  m='2705390'>It's--</span> <span m='2706500'>You</span> <span
  m='2706620'>want</span> <span m='2706730'>to</span> <span
  m='2706770'>be</span> <span m='2706890'>correct.</span> <span m='2707215'>You
  know</span> <span m='2707540'>being</span> <span m='2708230'>correcting</span>
  <span m='2708670'>and inefficient</span> <span m='2709640'>is</span> <span
  m='2709790'>definitely</span> <span m='2710120'>better</span> <span
  m='2710390'>than</span> <span m='2710560'>being</span> <span
  m='2711820'>inefficient--</span> <span m='2713190'>I'm</span> <span
  m='2713330'>sorry.</span> <span m='2713580'>Being</span> <span
  m='2714080'>incorrect</span> <span m='2714600'>and efficient.</span> <span
  m='2715790'>So</span> <span m='2715990'>this</span> <span
  m='2716180'>is</span> <span m='2716780'>an</span> <span
  m='2716990'>efficient</span> <span m='2717390'>algorithm,</span> <span
  m='2717870'>in</span> <span m='2717950'>the</span> <span
  m='2718020'>sense</span> <span m='2718320'>that</span> <span m='2718450'>it
  will</span> <span m='2718550'>only</span> <span m='2718930'>take</span> <span
  m='2720380'>log</span> <span m='2720655'>n</span> <span
  m='2720930'>time,</span> <span m='2722090'>but</span> <span
  m='2722350'>it</span> <span m='2722430'>doesn't</span> <span
  m='2722670'>work.</span> </p><p><span m='2722910'>And</span> <span
  m='2723040'>I'll</span> <span m='2724050'>give</span> <span
  m='2724160'>you</span> <span m='2724310'>a</span> <span
  m='2724410'>simple</span> <span m='2725060'>example</span> <span
  m='2725620'>here</span> <span m='2726700'>where</span> <span
  m='2727040'>it</span> <span m='2727090'>doesn't</span> <span
  m='2727330'>work.</span> </p><p></p><p><span m='2732490'>The</span> <span
  m='2732650'>problem</span> <span m='2733060'>is--</span> </p><p></p><p><span
  m='2735680'>--a</span> <span m='2735860'>2D</span> <span
  m='2736120'>peak--</span> </p><p></p><p><span m='2739960'>--may</span> <span
  m='2740140'>not</span> <span m='2740380'>exist--</span> </p><p></p><p><span
  m='2744150'>--on</span> <span m='2744390'>row</span> <span
  m='2744460'>i.</span> <span m='2746090'>And</span> <span
  m='2746480'>here's</span> <span m='2746700'>an</span> <span
  m='2746750'>example</span> <span m='2747130'>of</span> <span
  m='2747200'>that.</span> </p><p></p><p><span m='2753640'>Actually</span> <span
  m='2753900'>this</span> <span m='2754346'>is--</span> <span
  m='2755684'>This</span> <span m='2756130'>is</span> <span
  m='2756170'>exactly</span> <span m='2756540'>the</span> <span
  m='2756610'>example</span> <span m='2756980'>of</span> <span
  m='2757050'>that.</span> <span m='2758360'>Let's</span> <span
  m='2758500'>say</span> <span m='2758640'>that</span> <span
  m='2758790'>I</span> <span m='2758870'>started</span> <span
  m='2759280'>with</span> <span m='2760960'>this</span> <span
  m='2761480'>row.</span> <span m='2762690'>Since</span> <span
  m='2762910'>it's--</span> <span m='2764030'>I'm</span> <span
  m='2764130'>starting</span> <span m='2764410'>with</span> <span
  m='2764500'>the</span> <span m='2764570'>middle</span> <span
  m='2764850'>row,</span> <span m='2765170'>and</span> <span
  m='2765300'>I</span> <span m='2765340'>could</span> <span
  m='2765470'>start</span> <span m='2765690'>with</span> <span
  m='2765800'>this</span> <span m='2765950'>one</span> <span
  m='2766220'>or</span> <span m='2766340'>that one.</span> <span
  m='2766890'>Let's</span> <span m='2766990'>say</span> <span
  m='2767160'>I</span> <span m='2767200'>started</span> <span
  m='2767520'>with</span> <span m='2768930'>that</span> <span
  m='2769080'>one.</span> <span m='2770640'>I</span> <span
  m='2771990'>end</span> <span m='2772290'>up</span> <span
  m='2775050'>finding</span> <span m='2775450'>a</span> <span
  m='2775520'>peak.</span> <span m='2776350'>And</span> <span m='2776670'>if
  this</span> <span m='2776990'>were</span> <span m='2778210'>10</span> <span
  m='2778490'>up</span> <span m='2778650'>here,</span> <span
  m='2779540'>I'd</span> <span m='2779680'>choose</span> <span
  m='2780000'>12</span> <span m='2780400'>as</span> <span m='2780540'>a</span>
  <span m='2780610'>peak.</span> <span m='2782330'>And</span> <span
  m='2783690'>it's</span> <span m='2783940'>quite</span> <span
  m='2784210'>possible</span> <span m='2784500'>that</span> <span
  m='2784620'>I</span> <span m='2784680'>return</span> <span
  m='2785060'>12</span> <span m='2785380'>as</span> <span m='2785490'>a
  peak.</span> <span m='2785856'>Even</span> <span m='2786222'>though</span>
  <span m='2786590'>19</span> <span m='2786980'>is</span> <span
  m='2787130'>bigger,</span> <span m='2787380'>because</span> <span
  m='2787620'>12</span> <span m='2787900'>is</span> <span m='2788060'>a
  peak</span> <span m='2788510'>given</span> <span m='2788820'>10</span> <span
  m='2789050'>and</span> <span m='2789130'>11</span> <span m='2789400'>up</span>
  <span m='2789550'>here.</span> </p><p><span m='2790370'>And</span> <span
  m='2790500'>then</span> <span m='2790900'>when</span> <span
  m='2791060'>I</span> <span m='2791330'>choose</span> <span
  m='2791550'>this</span> <span m='2791740'>particular</span> <span
  m='2792090'>row,</span> <span m='2793060'>and</span> <span
  m='2793280'>I</span> <span m='2793450'>find</span> <span m='2793940'>a
  peak</span> <span m='2794250'>on</span> <span m='2794680'>this</span> <span
  m='2794870'>row,</span> <span m='2795120'>it</span> <span
  m='2795230'>would</span> <span m='2795350'>be</span> <span
  m='2795480'>14.</span> <span m='2796720'>That is</span> <span
  m='2796970'>a</span> <span m='2797050'>1D</span> <span m='2797490'>peak</span>
  <span m='2797790'>on</span> <span m='2797930'>this</span> <span
  m='2798140'>row.</span> <span m='2798870'>But</span> <span
  m='2799490'>14</span> <span m='2799940'>is</span> <span m='2800050'>not</span>
  <span m='2800340'>a</span> <span m='2800410'>2D</span> <span
  m='2800730'>peak.</span> <span m='2801840'>OK?</span> <span
  m='2802790'>So</span> <span m='2803110'>this</span> <span
  m='2803340'>particular</span> <span m='2803620'>example,</span> <span
  m='2804110'>14</span> <span m='2805120'>would</span> <span
  m='2805230'>return</span> <span m='2805590'>14.</span> <span
  m='2807402'>And</span> <span m='2807855'>14</span> <span m='2808310'>is</span>
  <span m='2808410'>not</span> <span m='2809080'>a 2D</span> <span
  m='2809310'>peak.</span> <span m='2810740'>All</span> <span
  m='2811240'>right?</span> </p><p><span m='2813730'>You</span> <span
  m='2813860'>can</span> <span m='2813960'>collect</span> <span
  m='2814230'>your</span> <span m='2814300'>cushion</span> <span
  m='2814610'>after</span> <span m='2814770'>the</span> <span
  m='2814900'>class.</span> </p><p><span m='2817460'>So</span> <span
  m='2819580'>not</span> <span m='2819780'>so</span> <span
  m='2819910'>good.</span> <span m='2821880'>Look</span> <span
  m='2822140'>like</span> <span m='2822320'>an</span> <span
  m='2822410'>efficient</span> <span m='2822810'>algorithm,</span> <span
  m='2824010'>but</span> <span m='2824260'>doesn't</span> <span
  m='2824500'>work.</span> <span m='2825430'>All</span> <span
  m='2825510'>right?</span> <span m='2826180'>So</span> <span
  m='2826450'>how</span> <span m='2826570'>can</span> <span
  m='2826700'>we</span> <span m='2827150'>get</span> <span m='2827360'>to</span>
  <span m='2827440'>something</span> <span m='2827750'>that</span> <span
  m='2827850'>actually</span> <span m='2828180'>works?</span> </p><p><span
  m='2829290'>So</span> <span m='2829350'>the</span> <span
  m='2829460'>last</span> <span m='2829750'>algorithm</span> <span
  m='2830130'>that</span> <span m='2830270'>I'm</span> <span
  m='2830350'>going</span> <span m='2830490'>to</span> <span
  m='2830540'>show</span> <span m='2830740'>you--</span> <span
  m='2834300'>And</span> <span m='2834470'>you'll</span> <span
  m='2834660'>see</span> <span m='2835220'>four</span> <span
  m='2835640'>different</span> <span m='2835950'>algorithms</span> <span
  m='2836430'>in</span> <span m='2836510'>your</span> <span
  m='2836630'>problem</span> <span m='2836920'>set--</span> </p><p></p><p><span
  m='2841260'>--that</span> <span m='2841360'>you'll</span> <span
  m='2841500'>have</span> <span m='2841680'>to</span> <span
  m='2842000'>analyze</span> <span m='2842430'>the</span> <span
  m='2842510'>complexity</span> <span m='2843020'>for</span> <span
  m='2843405'>and</span> <span m='2843790'>decide</span> <span m='2844340'>if
  they're</span> <span m='2844940'>efficient,</span> <span
  m='2845860'>and</span> <span m='2846180'>if</span> <span
  m='2846500'>they're</span> <span m='2846900'>correct.</span> <span
  m='2848180'>But</span> <span m='2848440'>here's</span> <span
  m='2848780'>a--</span> <span m='2851150'>a</span> <span
  m='2851240'>recursive</span> <span m='2851820'>version</span> <span
  m='2853440'>that</span> <span m='2854820'>is</span> <span
  m='2855040'>better</span> <span m='2855400'>than,</span> <span
  m='2856670'>in</span> <span m='2856800'>terms</span> <span
  m='2857000'>of</span> <span m='2857080'>complexity,</span> <span
  m='2857650'>than</span> <span m='2857830'>the</span> <span
  m='2858010'>Greedy</span> <span m='2858370'>Ascent</span> <span
  m='2858620'>algorithm.</span> <span m='2860120'>And</span> <span
  m='2860680'>this</span> <span m='2860860'>one</span> <span
  m='2861040'>works.</span> </p><p><span m='2863410'>So</span> <span
  m='2863590'>what</span> <span m='2863700'>I'm</span> <span
  m='2863790'>going</span> <span m='2863890'>to</span> <span
  m='2863960'>do</span> <span m='2864110'>is</span> <span
  m='2864270'>pick</span> <span m='2865630'>a</span> <span
  m='2865690'>middle</span> <span m='2866020'>column.</span> <span
  m='2869750'>j</span> <span m='2869950'>equals</span> <span
  m='2870320'>m</span> <span m='2870530'>over</span> <span m='2870740'>2</span>
  <span m='2871000'>as</span> <span m='2871130'>before.</span> <span
  m='2874050'>I'm</span> <span m='2874180'>going</span> <span
  m='2874320'>to</span> <span m='2874380'>find</span> <span
  m='2876900'>the</span> <span m='2877010'>global</span> <span
  m='2877530'>maximum</span> <span m='2881540'>on</span> <span
  m='2881830'>column</span> <span m='2882220'>j.</span> <span
  m='2885430'>And</span> <span m='2885640'>that's</span> <span
  m='2885810'>going</span> <span m='2885910'>to</span> <span
  m='2885950'>be</span> <span m='2886100'>at</span> <span m='2886290'>(i,</span>
  <span m='2886420'>j).</span> </p><p><span m='2889580'>I'm</span> <span
  m='2889720'>going</span> <span m='2889850'>to</span> <span
  m='2889910'>compare</span> <span m='2893430'>(i</span> <span
  m='2893750'>comma</span> <span m='2893920'>j</span> <span
  m='2894040'>minus</span> <span m='2894600'>1),</span> <span
  m='2896250'>(i</span> <span m='2896480'>comma</span> <span
  m='2896580'>j),</span> <span m='2898230'>and</span> <span
  m='2898590'>(i,j</span> <span m='2899040'>plus</span> <span
  m='2899290'>1).</span> <span m='2900440'>Which</span> <span
  m='2900570'>means</span> <span m='2900740'>that</span> <span
  m='2900860'>once</span> <span m='2901140'>I've</span> <span
  m='2901260'>found</span> <span m='2901500'>the</span> <span
  m='2901580'>maximum</span> <span m='2902060'>in</span> <span
  m='2902150'>this</span> <span m='2902340'>row,</span> <span
  m='2903620'>all</span> <span m='2903810'>I'm</span> <span
  m='2904410'>going</span> <span m='2904520'>to</span> <span
  m='2904580'>look</span> <span m='2904850'>to</span> <span
  m='2904940'>the</span> <span m='2905030'>left</span> <span
  m='2905330'>and</span> <span m='2905430'>the</span> <span
  m='2905520'>right,</span> <span m='2905890'>and</span> <span
  m='2906080'>compare.</span> </p><p><span m='2907920'>I'm</span> <span
  m='2908060'>going</span> <span m='2908190'>to</span> <span
  m='2908250'>pick</span> <span m='2910050'>the</span> <span
  m='2910180'>left</span> <span m='2910510'>columns.</span> <span
  m='2913520'>If</span> <span m='2914520'>(i</span> <span
  m='2914770'>comma</span> <span m='2915000'>j</span> <span
  m='2915290'>minus</span> <span m='2915580'>1)</span> <span
  m='2916670'>is</span> <span m='2916900'>greater</span> <span
  m='2917190'>than</span> <span m='2918760'>(i</span> <span
  m='2919180'>comma</span> <span m='2919600'>j)--</span> <span
  m='2920890'>and</span> <span m='2921280'>similarly</span> <span
  m='2921850'>for</span> <span m='2921950'>the</span> <span
  m='2922050'>right.</span> </p><p></p><p><span m='2929490'>And</span> <span
  m='2929830'>if</span> <span m='2929980'>in</span> <span
  m='2930120'>fact</span> <span m='2931340'>I--</span> <span
  m='2932750'>either</span> <span m='2933190'>of</span> <span
  m='2933330'>these</span> <span m='2933610'>two</span> <span
  m='2935170'>conditions</span> <span m='2935720'>don't</span> <span
  m='2936010'>fire,</span> <span m='2937600'>and</span> <span
  m='2937850'>what</span> <span m='2937990'>I</span> <span
  m='2938060'>have</span> <span m='2938330'>is</span> <span
  m='2938500'>(i</span> <span m='2938790'>comma</span> <span
  m='2939080'>j)</span> <span m='2940210'>is</span> <span
  m='2940510'>greater</span> <span m='2940860'>than</span> <span
  m='2941110'>or</span> <span m='2941220'>equal</span> <span
  m='2941600'>to</span> <span m='2942350'>(i</span> <span
  m='2942540'>comma</span> <span m='2942840'>j</span> <span
  m='2943040'>minus</span> <span m='2943400'>1)</span> <span
  m='2944280'>and</span> <span m='2944560'>(i</span> <span
  m='2944650'>comma</span> <span m='2944900'>j</span> <span
  m='2945180'>plus</span> <span m='2945430'>1),</span> <span
  m='2946360'>then</span> <span m='2946640'>I'm</span> <span
  m='2946740'>done.</span> <span m='2947630'>Just</span> <span
  m='2947880'>like</span> <span m='2948350'>I</span> <span
  m='2948510'>had</span> <span m='2950120'>for</span> <span
  m='2950340'>the</span> <span m='2951060'>1D</span> <span
  m='2951460'>version.</span> <span m='2952760'>If</span> <span
  m='2954280'>(i</span> <span m='2954450'>comma</span> <span
  m='2954680'>j)</span> <span m='2955770'>is</span> <span
  m='2955940'>greater</span> <span m='2956150'>than</span> <span
  m='2956290'>or</span> <span m='2956390'>equal</span> <span
  m='2956600'>to</span> <span m='2956930'>(i</span> <span
  m='2957180'>comma</span> <span m='2957500'>j</span> <span
  m='2957600'>minus</span> <span m='2957950'>1),</span> <span
  m='2959350'>and</span> <span m='2959800'>(i</span> <span m='2960220'>comma
  j</span> <span m='2960640'>plus 1),</span> <span m='2962920'>that</span> <span
  m='2963080'>implies</span> <span m='2964800'>(i, j)</span> <span
  m='2966350'>is</span> <span m='2966580'>a</span> <span m='2966670'>2D</span>
  <span m='2966900'>peak.</span> <span m='2968591'>OK?</span> </p><p><span
  m='2969255'>And</span> <span m='2969530'>the</span> <span
  m='2969580'>reason</span> <span m='2969820'>that is</span> <span
  m='2970010'>the</span> <span m='2970110'>case,</span> <span m='2970470'>is
  because</span> <span m='2971180'>(i</span> <span m='2971930'>comma</span>
  <span m='2972200'>j)</span> <span m='2972960'>was</span> <span
  m='2973150'>the</span> <span m='2973220'>maximum</span> <span
  m='2973870'>element</span> <span m='2974930'>in</span> <span
  m='2975090'>that</span> <span m='2975280'>column.</span> <span
  m='2976010'>So</span> <span m='2976190'>you</span> <span
  m='2976330'>know</span> <span m='2976520'>that</span> <span
  m='2976640'>you've</span> <span m='2976780'>compared</span> <span
  m='2977170'>it</span> <span m='2977360'>to</span> <span m='2978160'>all</span>
  <span m='2978420'>of</span> <span m='2978540'>the</span> <span
  m='2978770'>adjacent</span> <span m='2979280'>elements,</span> <span
  m='2979700'>looking</span> <span m='2980000'>up</span> <span
  m='2980310'>and</span> <span m='2980470'>looking</span> <span
  m='2980760'>down,</span> <span m='2981520'>that's</span> <span
  m='2981700'>the</span> <span m='2981780'>maximum</span> <span
  m='2982280'>element.</span> <span m='2983000'>Now</span> <span
  m='2983210'>you've</span> <span m='2983340'>look</span> <span
  m='2983590'>at</span> <span m='2983680'>the</span> <span
  m='2983770'>left</span> <span m='2984070'>and</span> <span
  m='2984140'>the</span> <span m='2984250'>right,</span> <span
  m='2985150'>and</span> <span m='2985380'>in</span> <span
  m='2985460'>fact</span> <span m='2985770'>it's</span> <span
  m='2985920'>greater</span> <span m='2986110'>than</span> <span
  m='2986310'>or</span> <span m='2986410'>equal</span> <span
  m='2986690'>to</span> <span m='2986790'>the</span> <span
  m='2987370'>elements</span> <span m='2987750'>on</span> <span
  m='2987840'>the</span> <span m='2987930'>left</span> <span
  m='2988240'>and</span> <span m='2988340'>the</span> <span
  m='2988420'>right.</span> <span m='2989110'>And</span> <span
  m='2989270'>so</span> <span m='2989390'>therefore</span> <span
  m='2989780'>it's</span> <span m='2990090'>a</span> <span m='2990400'>2D
  peak.</span> <span m='2991290'>OK?</span> </p><p><span m='2992270'>So</span>
  <span m='2992810'>in</span> <span m='2992940'>this</span> <span
  m='2993160'>case,</span> <span m='2994140'>when</span> <span
  m='2994250'>you</span> <span m='2994350'>pick</span> <span
  m='2994570'>the</span> <span m='2994670'>left</span> <span
  m='2996940'>or</span> <span m='2997140'>the</span> <span
  m='2997340'>right</span> <span m='2997410'>columns--</span> <span
  m='2997710'>you'll</span> <span m='2998010'>pick</span> <span
  m='2998200'>one</span> <span m='2998390'>of</span> <span
  m='2998490'>them--</span> <span m='2999340'>you're</span> <span
  m='2999460'>going</span> <span m='2999570'>to</span> <span
  m='2999620'>solve</span> <span m='3001630'>the</span> <span
  m='3001740'>new</span> <span m='3001980'>problem</span> <span
  m='3005470'>with</span> <span m='3006910'>half</span> <span
  m='3007330'>the</span> <span m='3007430'>number</span> <span
  m='3007670'>of</span> <span m='3007740'>columns.</span> </p><p></p><p><span
  m='3016540'>All</span> <span m='3016630'>right?</span> <span
  m='3017580'>And</span> <span m='3017750'>again,</span> <span
  m='3018100'>you</span> <span m='3018200'>have</span> <span m='3018260'>to
  go</span> <span m='3018410'>through</span> <span m='3019660'>an</span> <span
  m='3019830'>analysis,</span> <span m='3020965'>or</span> <span
  m='3021290'>an</span> <span m='3021390'>argument,</span> <span
  m='3021890'>to</span> <span m='3021980'>make</span> <span
  m='3022150'>sure</span> <span m='3022410'>that</span> <span
  m='3023030'>this</span> <span m='3023230'>algorithm</span> <span
  m='3023640'>is</span> <span m='3023760'>correct.</span> <span
  m='3024950'>But</span> <span m='3025850'>its</span> <span
  m='3026860'>intuitively</span> <span m='3027380'>correct,</span> <span
  m='3027940'>simply</span> <span m='3028200'>because</span> <span
  m='3028480'>it</span> <span m='3028610'>matches</span> <span
  m='3029740'>the</span> <span m='3030140'>1D</span> <span
  m='3030570'>version</span> <span m='3031550'>much</span> <span
  m='3031770'>more</span> <span m='3031960'>closely.</span> <span
  m='3033190'>And</span> <span m='3033540'>you</span> <span
  m='3033640'>also</span> <span m='3033890'>have</span> <span
  m='3034200'>your</span> <span m='3035020'>condition</span> <span
  m='3035490'>where</span> <span m='3035730'>you break</span> <span
  m='3036020'>away</span> <span m='3037640'>right</span> <span
  m='3037870'>here,</span> <span m='3038440'>where</span> <span
  m='3038660'>you</span> <span m='3038730'>have</span> <span
  m='3038880'>a</span> <span m='3038960'>2D</span> <span
  m='3039100'>peak,</span> <span m='3039580'>just</span> <span
  m='3039820'>like</span> <span m='3039960'>the</span> <span
  m='3040040'>1D</span> <span m='3040320'>version.</span> <span
  m='3041160'>And</span> <span m='3041680'>what</span> <span
  m='3041860'>you've</span> <span m='3041970'>done</span> <span
  m='3042190'>is</span> <span m='3042310'>break</span> <span
  m='3042690'>this</span> <span m='3042950'>matrix</span> <span
  m='3043430'>up</span> <span m='3043930'>into</span> <span
  m='3044120'>half</span> <span m='3044460'>the</span> <span
  m='3044580'>size.</span> <span m='3046190'>And</span> <span
  m='3046730'>that's</span> <span m='3047030'>essentially</span> <span
  m='3048150'>why</span> <span m='3048690'>this</span> <span
  m='3049200'>algorithm</span> <span m='3049680'>works.</span> </p><p><span
  m='3051090'>When</span> <span m='3051250'>you</span> <span
  m='3051310'>have</span> <span m='3051450'>a</span> <span
  m='3051510'>single</span> <span m='3051870'>column--</span>
  </p><p></p><p><span m='3061070'>--find</span> <span m='3063040'>the</span>
  <span m='3063210'>global</span> <span m='3063550'>maximum</span> <span
  m='3067460'>and</span> <span m='3067640'>you're</span> <span
  m='3067770'>done.</span> <span m='3069684'>All right?</span> <span
  m='3070110'>So</span> <span m='3070230'>that's</span> <span
  m='3071330'>the</span> <span m='3071450'>base</span> <span
  m='3071730'>case.</span> <span m='3072570'>So</span> <span
  m='3072850'>let</span> <span m='3072960'>me</span> <span
  m='3073080'>end</span> <span m='3073410'>with</span> <span
  m='3073910'>just</span> <span m='3074090'>writing</span> <span
  m='3074430'>out</span> <span m='3074670'>what</span> <span
  m='3074920'>the</span> <span m='3075760'>recurrence</span> <span
  m='3076260'>relation</span> <span m='3076740'>for</span> <span
  m='3076830'>the</span> <span m='3076930'>complexity</span> <span
  m='3077480'>of</span> <span m='3077590'>this</span> <span
  m='3077870'>is,</span> <span m='3078460'>and</span> <span
  m='3078640'>argue</span> <span m='3080330'>what</span> <span
  m='3080950'>the</span> <span m='3081060'>overall</span> <span
  m='3081480'>complexity</span> <span m='3082010'>of</span> <span
  m='3082080'>this</span> <span m='3082210'>algorithm</span> <span
  m='3082590'>is.</span> <span m='3085610'>And</span> <span
  m='3085740'>then</span> <span m='3085870'>I'll</span> <span
  m='3085980'>give</span> <span m='3086100'>you</span> <span
  m='3086170'>the</span> <span m='3086250'>bad</span> <span
  m='3086460'>news.</span> </p><p></p><p><span m='3090940'>All</span> <span
  m='3091050'>right.</span> <span m='3091280'>So</span> <span
  m='3092470'>overall</span> <span m='3092900'>what</span> <span
  m='3093050'>you</span> <span m='3093140'>have</span> <span
  m='3093490'>is,</span> <span m='3093770'>you</span> <span
  m='3093890'>have</span> <span m='3094020'>something</span> <span
  m='3094290'>like</span> <span m='3094570'>T</span> <span m='3094840'>of</span>
  <span m='3094990'>(n, m)</span> <span m='3096260'>equals</span> <span
  m='3096850'>T</span> <span m='3097120'>of</span> <span m='3097300'>(n,</span>
  <span m='3098172'>m</span> <span m='3098610'>over</span> <span
  m='3098990'>2)</span> <span m='3100270'>plus</span> <span
  m='3101140'>theta</span> <span m='3101430'>n.</span> <span
  m='3102570'>Why</span> <span m='3102790'>is</span> <span
  m='3102910'>that?</span> <span m='3103640'>Well</span> <span
  m='3103890'>n</span> <span m='3104090'>is the</span> <span
  m='3104290'>number</span> <span m='3104550'>of</span> <span
  m='3104860'>rows,</span> <span m='3105350'>m</span> <span m='3105580'>is
  the</span> <span m='3105760'>number</span> <span m='3105970'>of</span> <span
  m='3106070'>columns.</span> <span m='3107830'>In</span> <span
  m='3108050'>one</span> <span m='3108300'>case</span> <span
  m='3109270'>you'll</span> <span m='3109610'>be</span> <span
  m='3110360'>breaking</span> <span m='3110820'>things</span> <span
  m='3111100'>down</span> <span m='3111430'>into</span> <span
  m='3112130'>half</span> <span m='3112460'>the</span> <span
  m='3112540'>number</span> <span m='3112740'>of</span> <span
  m='3112810'>columns,</span> <span m='3113200'>which</span> <span
  m='3113350'>is</span> <span m='3113450'>m</span> <span m='3113640'>over</span>
  <span m='3113840'>2.</span> <span m='3114630'>And</span> <span
  m='3114960'>in</span> <span m='3115120'>order</span> <span
  m='3115270'>to</span> <span m='3115350'>find</span> <span
  m='3115690'>the</span> <span m='3115760'>global</span> <span
  m='3116150'>maximum,</span> <span m='3117520'>you'll be</span> <span
  m='3117680'>doing</span> <span m='3118240'>theta</span> <span
  m='3118550'>n</span> <span m='3118820'>work,</span> <span
  m='3119565'>because</span> <span m='3119860'>you're</span> <span
  m='3120220'>finding the</span> <span m='3120320'>global</span> <span
  m='3120650'>maximum.</span> <span m='3121495'>Right?</span> <span
  m='3121800'>You</span> <span m='3121950'>just</span> <span
  m='3122120'>have</span> <span m='3122230'>to</span> <span
  m='3122300'>scan</span> <span m='3122630'>it--</span> <span
  m='3123280'>this--</span> <span m='3125270'>That's</span> <span
  m='3125740'>the</span> <span m='3125830'>way--</span> <span
  m='3126870'>That's</span> <span m='3127140'>what</span> <span
  m='3127290'>it's</span> <span m='3127380'>going</span> <span
  m='3127500'>to</span> <span m='3127570'>take.</span> </p><p><span
  m='3128840'>And</span> <span m='3129080'>so</span> <span m='3129250'>if</span>
  <span m='3129330'>you</span> <span m='3129400'>do</span> <span
  m='3129530'>that,</span> <span m='3129860'>and</span> <span
  m='3129870'>you</span> <span m='3130000'>go</span> <span
  m='3130230'>run</span> <span m='3130430'>it</span> <span
  m='3130560'>through--</span> <span m='3131960'>and</span> <span
  m='3132170'>you</span> <span m='3132260'>know</span> <span
  m='3132400'>that</span> <span m='3132600'>T</span> <span m='3132810'>of</span>
  <span m='3133060'>(n,</span> <span m='3133260'>1)</span> <span
  m='3134490'>is</span> <span m='3134740'>theta</span> <span
  m='3135070'>n--</span> <span m='3135840'>which</span> <span
  m='3136210'>is</span> <span m='3136350'>this</span> <span
  m='3136570'>last</span> <span m='3136930'>part</span> <span
  m='3137160'>over</span> <span m='3137300'>here--</span> <span
  m='3139280'>that's</span> <span m='3139500'>your</span> <span
  m='3139630'>base</span> <span m='3139930'>case.</span> <span
  m='3140880'>You</span> <span m='3141030'>get</span> <span m='3141340'>T</span>
  <span m='3141520'>of</span> <span m='3141660'>(n,</span> <span
  m='3142083'>m)</span> <span m='3143310'>is</span> <span
  m='3143870'>theta</span> <span m='3144070'>of</span> <span
  m='3144700'>n</span> <span m='3146350'>added</span> <span
  m='3146740'>to</span> <span m='3146900'>theta</span> <span
  m='3147030'>of</span> <span m='3147320'>n,</span> <span m='3148560'>log</span>
  <span m='3148830'>of</span> <span m='3149100'>m</span> <span
  m='3149470'>times--</span> <span m='3152790'>log</span> <span
  m='3153150'>2</span> <span m='3153340'>of</span> <span m='3153500'>m</span>
  <span m='3153720'>times.</span> <span m='3154820'>Which</span> <span
  m='3155070'>is</span> <span m='3155760'>theta</span> <span
  m='3156400'>of</span> <span m='3157320'>n--</span> <span
  m='3160730'>log</span> <span m='3160960'>2</span> <span m='3161130'>of</span>
  <span m='3161220'>m.</span> <span m='3162250'>All</span> <span
  m='3162330'>right?</span> </p><p><span m='3163640'>So</span> <span
  m='3164850'>you're</span> <span m='3164960'>not done</span> <span
  m='3165510'>with</span> <span m='3165670'>peak</span> <span
  m='3165900'>finding.</span> <span m='3168120'>What</span> <span
  m='3168380'>you'll</span> <span m='3168540'>see</span> <span
  m='3168830'>is</span> <span m='3169960'>at</span> <span
  m='3170220'>four</span> <span m='3170680'>algorithms</span> <span
  m='3171210'>coded</span> <span m='3171510'>in</span> <span
  m='3171610'>Python--</span> <span m='3173580'>I'm</span> <span
  m='3173810'>not</span> <span m='3173880'>going</span> <span
  m='3173980'>to</span> <span m='3174020'>give</span> <span
  m='3174150'>away</span> <span m='3174380'>what</span> <span
  m='3174520'>those</span> <span m='3174680'>algorithms</span> <span
  m='3175100'>are,</span> <span m='3175290'>but</span> <span
  m='3175410'>you'll</span> <span m='3175520'>have</span> <span
  m='3175640'>to</span> <span m='3175720'>recognize</span> <span
  m='3176210'>them.</span> <span m='3177090'>You</span> <span
  m='3177350'>will</span> <span m='3177500'>have</span> <span
  m='3177600'>seen</span> <span m='3178490'>versions</span> <span
  m='3178890'>of</span> <span m='3179120'>those</span> <span
  m='3179340'>algorithms</span> <span m='3180180'>already</span> <span
  m='3180570'>in</span> <span m='3180660'>lecture.</span> <span
  m='3181850'>And</span> <span m='3182740'>your</span> <span
  m='3182940'>job</span> <span m='3183240'>is</span> <span
  m='3183340'>going</span> <span m='3183500'>to</span> <span
  m='3183550'>be</span> <span m='3184180'>to</span> <span
  m='3185100'>analyze</span> <span m='3185540'>the</span> <span
  m='3185620'>algorithms,</span> <span m='3185960'>as I</span> <span
  m='3186210'>said</span> <span m='3186390'>before,</span> <span
  m='3187520'>prove</span> <span m='3187830'>that</span> <span
  m='3188540'>one</span> <span m='3188740'>of</span> <span
  m='3188810'>them</span> <span m='3188930'>is</span> <span
  m='3189040'>correct,</span> <span m='3189690'>and</span> <span
  m='3189860'>find</span> <span m='3190070'>counter-examples</span> <span
  m='3190810'>for</span> <span m='3190890'>the</span> <span
  m='3190990'>ones</span> <span m='3191760'>that</span> <span
  m='3191940'>aren't</span> <span m='3192160'>correct.</span> </p><p><span
  m='3193020'>The</span> <span m='3193200'>course</span> <span
  m='3193420'>staff</span> <span m='3193660'>will</span> <span
  m='3193760'>stick</span> <span m='3194060'>around</span> <span
  m='3194200'>here</span> <span m='3195020'>to</span> <span
  m='3195160'>answer</span> <span m='3195370'>questions--</span> <span
  m='3195810'>logistical</span> <span m='3196330'>questions--</span> <span
  m='3197110'>or</span> <span m='3197420'>questions</span> <span
  m='3197760'>about</span> <span m='3197940'>lecture.</span> <span
  m='3198990'>And</span> <span m='3199390'>I</span> <span m='3199460'>owe</span>
  <span m='3199600'>that</span> <span m='3199750'>gentleman</span> <span
  m='3200100'>a cushion.</span> </p>
embedded_media:
  - uid: 7ad63d88f0203991b1596181370176a8
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: HtSuA80QTyo
  - uid: 5b44dfd7d19eb76613b386bd8e871ed4
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/HtSuA80QTyo/default.jpg'
  - uid: 9b31d5b137c2733574b0046000ca281d
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-1-algorithmic-thinking/id585700718?i=126126063
  - uid: 7c81065e8d0d353a65282002fdc0f6f9
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec01_300k.mp4'
  - uid: 7811a436544e23048ba9c9e9e7ce7ebb
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: HtSuA80QTyo
  - uid: 51b3556fd092b13f66e7860677241346
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: HtSuA80QTyo.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-1-algorithmic-thinking-peak-finding/HtSuA80QTyo.srt
  - uid: e0e15581a79266c52032ca8bb7733c5d
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: HtSuA80QTyo.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-1-algorithmic-thinking-peak-finding/HtSuA80QTyo.pdf
  - uid: 1a392c17289ae8cead2c61d7ee935d5c
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 1b511f64d3e9cc7b269479fcc65534e1
    parent_uid: c9d029dc32fdd36dfd22fdf26e2f990a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
