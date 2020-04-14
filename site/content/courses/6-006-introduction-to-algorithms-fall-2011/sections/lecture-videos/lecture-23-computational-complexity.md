---
title: 'Lecture 23: Computational Complexity'
uid: 7e626cc30fda599800cb5aac3b148422
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-23-computational-complexity
short_url: lecture-23-computational-complexity
inline_embed_id: '79453430lecture23:computationalcomplexity16005934'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture introduces computational
  complexity, including how most decision problems are uncomputable, hardness
  and completeness, and reductions.</p> <p><strong>Instructor:</strong> Erik
  Demaine</p>
related_resources_text: ''
transcript: >-
  <p><span m='80'>The</span> <span m='180'>following</span> <span
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
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22720'>PROFESSOR: Today,</span> <span m='23520'>we are</span> <span
  m='23710'>going</span> <span m='23820'>to</span> <span m='23910'>do</span>
  <span m='24130'>computational</span> <span m='24860'>complexity.</span> <span
  m='26270'>This</span> <span m='26470'>is</span> <span m='26630'>rather</span>
  <span m='26930'>different</span> <span m='27380'>from</span> <span
  m='28160'>every</span> <span m='28580'>other</span> <span
  m='28800'>thing</span> <span m='29040'>we've</span> <span
  m='29160'>seen</span> <span m='29460'>in</span> <span m='29590'>this</span>
  <span m='29760'>class.</span> <span m='32729'>This</span> <span
  m='33390'>class</span> <span m='33690'>is</span> <span
  m='33750'>basically</span> <span m='34140'>about</span> <span
  m='34630'>polynomial</span> <span m='35140'>time</span> <span
  m='35390'>algorithms</span> <span m='36120'>and</span> <span
  m='36310'>problems</span> <span m='36690'>where</span> <span
  m='36810'>we</span> <span m='36950'>can</span> <span m='37080'>solve</span>
  <span m='37990'>your</span> <span m='38100'>problem</span> <span
  m='38580'>in</span> <span m='38800'>polynomial</span> <span
  m='39310'>time.</span> <span m='40290'>And</span> <span
  m='40460'>today,</span> <span m='41010'>it's</span> <span
  m='41170'>about</span> <span m='41570'>when</span> <span m='41710'>you</span>
  <span m='41820'>can't</span> <span m='42150'>do</span> <span
  m='42290'>that.</span> <span m='43240'>Sometimes,</span> <span
  m='43700'>we</span> <span m='43820'>can</span> <span m='43950'>prove</span>
  <span m='44230'>you</span> <span m='44310'>can't</span> <span
  m='44540'>do</span> <span m='44650'>that.</span> <span
  m='44880'>Sometimes,</span> <span m='45330'>we're</span> <span
  m='45450'>pretty</span> <span m='45710'>sure</span> <span m='45960'>you</span>
  <span m='46080'>can't</span> <span m='46330'>do</span> <span
  m='46440'>that.</span> <span m='47020'>But it's</span> <span
  m='47190'>all</span> <span m='47380'>about</span> <span
  m='47770'>negative</span> <span m='48170'>results</span> <span
  m='49140'>when</span> <span m='49320'>your</span> <span
  m='49430'>problems</span> <span m='49820'>are</span> <span
  m='49960'>really</span> <span m='50910'>complex.</span> </p><p><span
  m='52850'>And</span> <span m='53455'>there's</span> <span m='53720'>a</span>
  <span m='53780'>lot</span> <span m='53980'>of</span> <span
  m='54070'>fun</span> <span m='54230'>topics,</span> <span
  m='54620'>here.</span> <span m='55040'>This</span> <span m='55230'>is</span>
  <span m='55360'>the</span> <span m='55970'>topic</span> <span
  m='56490'>of</span> <span m='56640'>entire</span> <span
  m='57140'>classes,</span> <span m='57720'>like</span> <span
  m='57920'>6045.</span> <span m='59280'>We're</span> <span
  m='59430'>just</span> <span m='59600'>going</span> <span m='59720'>to</span>
  <span m='59770'>get</span> <span m='60000'>a</span> <span m='60940'>1</span>
  <span m='61270'>hour</span> <span m='61810'>flavor</span> <span
  m='62240'>of</span> <span m='62350'>it.</span> <span m='62950'>So</span> <span
  m='63160'>think</span> <span m='63370'>of</span> <span m='63460'>it</span>
  <span m='63530'>as</span> <span m='63630'>a</span> <span m='63700'>high</span>
  <span m='63890'>level</span> <span m='64190'>intro.</span> <span
  m='64519'>But</span> <span m='64650'>we're</span> <span m='64760'>going</span>
  <span m='64840'>to</span> <span m='64910'>prove</span> <span
  m='65110'>real</span> <span m='65360'>theorems</span> <span
  m='65690'>and</span> <span m='65830'>do</span> <span m='65970'>real</span>
  <span m='66170'>things</span> <span m='66510'>and</span> <span
  m='66570'>you'll</span> <span m='66710'>get</span> <span m='66880'>a</span>
  <span m='67270'>sense</span> <span m='67510'>of</span> <span m='67590'>how
  all</span> <span m='67880'>this</span> <span m='68050'>works.</span>
  </p><p><span m='69580'>So</span> <span m='69640'>I'm</span> <span
  m='69730'>going</span> <span m='69840'>to</span> <span m='69900'>start</span>
  <span m='70230'>out</span> <span m='70560'>with</span> <span
  m='71350'>three</span> <span m='72230'>complexity</span> <span
  m='72740'>classes--</span> <span m='73680'>P,</span> <span
  m='74165'>EXP,</span> <span m='74650'>and</span> <span m='75100'>R.</span>
  <span m='78700'>How</span> <span m='78800'>many</span> <span
  m='78950'>people</span> <span m='79200'>know</span> <span
  m='79350'>what</span> <span m='79550'>P</span> <span m='79740'>is?</span>
  <span m='81390'>And</span> <span m='81790'>it</span> <span
  m='81860'>is?</span> <span m='83760'>Polynomial</span> <span
  m='84250'>time.</span> <span m='85990'>More</span> <span
  m='86230'>precisely,</span> <span m='87310'>it's</span> <span
  m='87510'>the</span> <span m='87590'>set</span> <span m='87780'>of</span>
  <span m='87860'>all</span> <span m='88010'>problems</span> <span
  m='88510'>you</span> <span m='88610'>can</span> <span m='88790'>solve</span>
  <span m='89060'>in</span> <span m='89140'>polynomial</span> <span
  m='89680'>time.</span> <span m='95690'>This</span> <span m='95890'>is</span>
  <span m='96000'>what</span> <span m='96150'>the</span> <span
  m='96240'>class</span> <span m='96540'>is</span> <span m='96660'>all</span>
  <span m='96810'>about.</span> <span m='99810'>Almost</span> <span
  m='100200'>every</span> <span m='100430'>problem</span> <span m='100740'>we
  have</span> <span m='100890'>seen</span> <span m='101110'>in</span> <span
  m='101250'>this</span> <span m='101420'>class--</span> <span
  m='102760'>there's</span> <span m='102900'>one</span> <span
  m='103070'>exception--</span> <span m='104180'>is</span> <span
  m='104410'>in</span> <span m='104660'>P.</span> <span m='107682'>Does</span>
  <span m='108120'>anyone</span> <span m='108420'>know</span> <span
  m='108560'>the</span> <span m='108640'>exception?</span> <span m='108960'>It's
  a</span> <span m='109280'>good</span> <span m='109710'>puzzle</span> <span
  m='110070'>for you.</span> <span m='111150'>Not</span> <span
  m='111340'>NP.</span> </p><p><span m='111960'>What's</span> <span
  m='112160'>next?</span> <span m='112440'>EXP.</span> <span
  m='115120'>How</span> <span m='115250'>many</span> <span
  m='115380'>people</span> <span m='115630'>know</span> <span
  m='115760'>what</span> <span m='115850'>EXP</span> <span m='116255'>is?</span>
  <span m='116660'>Or</span> <span m='116830'>you</span> <span
  m='116920'>can</span> <span m='117070'>guess.</span> <span
  m='118810'>Any</span> <span m='119190'>guesses?</span> <span
  m='120400'>Exponential.</span> <span m='121800'>These are</span> <span
  m='121930'>all</span> <span m='122060'>the</span> <span
  m='122150'>problems</span> <span m='122470'>you</span> <span
  m='122570'>can</span> <span m='122690'>solve</span> <span m='123070'>in</span>
  <span m='123160'>exponential</span> <span m='123670'>time.</span> </p><p><span
  m='141190'>If you</span> <span m='141320'>want</span> <span
  m='141450'>to</span> <span m='141490'>be</span> <span m='141610'>formal</span>
  <span m='141980'>about</span> <span m='142260'>it,</span> <span
  m='142580'>in</span> <span m='142720'>this</span> <span
  m='142920'>case,</span> <span m='143210'>exponential</span> <span
  m='143820'>means</span> <span m='146040'>2</span> <span m='146760'>to</span>
  <span m='146900'>the</span> <span m='147080'>n</span> <span
  m='147770'>to</span> <span m='147860'>some</span> <span
  m='148080'>constant.</span> <span m='149200'>So</span> <span
  m='149210'>not</span> <span m='149390'>just</span> <span m='149560'>2</span>
  <span m='149730'>the</span> <span m='149900'>n, but</span> <span
  m='150100'>also</span> <span m='150360'>2 to</span> <span
  m='150500'>the</span> <span m='150690'>n</span> <span
  m='150810'>squared,</span> <span m='151250'>2 to</span> <span
  m='151370'>the</span> <span m='151540'>n</span> <span m='151700'>cubed.</span>
  <span m='151970'>Those</span> <span m='152180'>are</span> <span
  m='152280'>all</span> <span m='152440'>considered--</span> <span
  m='153800'>exponential</span> <span m='154350'>and a</span> <span
  m='154460'>polynomial</span> <span m='155110'>is</span> <span
  m='155230'>considered</span> <span m='156080'>in</span> <span
  m='156400'>the</span> <span m='156500'>class</span> <span
  m='156960'>EXP.</span> </p><p><span m='158050'>Now,</span> <span
  m='158210'>basically,</span> <span m='159030'>almost</span> <span
  m='159350'>every</span> <span m='159620'>problem</span> <span
  m='159890'>you</span> <span m='160030'>can</span> <span
  m='160330'>dream</span> <span m='160770'>of</span> <span m='161830'>you</span>
  <span m='162010'>can</span> <span m='162400'>solve</span> <span
  m='162690'>in</span> <span m='162790'>EXP.</span> <span
  m='163170'>Exponential</span> <span m='163680'>time is</span> <span
  m='163900'>so</span> <span m='164160'>much</span> <span
  m='164440'>time.</span> <span m='165370'>And</span> <span
  m='165940'>this</span> <span m='166140'>class</span> <span
  m='166410'>has</span> <span m='166510'>always</span> <span
  m='166710'>been</span> <span m='166850'>about</span> <span
  m='167150'>taking</span> <span m='167420'>things</span> <span m='167610'>that
  are</span> <span m='167800'>obviously</span> <span m='168080'>in</span> <span
  m='168450'>EXP</span> <span m='168890'>and</span> <span
  m='168970'>showing</span> <span m='169270'>that</span> <span
  m='169390'>they're</span> <span m='169520'>actually</span> <span
  m='170400'>in</span> <span m='170620'>P.</span> <span m='171460'>So</span>
  <span m='171620'>if</span> <span m='171690'>you</span> <span
  m='171810'>want</span> <span m='171950'>to</span> <span m='171990'>draw</span>
  <span m='172150'>a</span> <span m='172210'>picture,</span> <span
  m='173410'>you</span> <span m='173570'>could</span> <span
  m='173720'>say,</span> <span m='173870'>OK,</span> <span
  m='174220'>here's</span> <span m='174380'>all</span> <span
  m='174480'>the</span> <span m='174540'>problems</span> <span
  m='174870'>we</span> <span m='175000'>can</span> <span m='175130'>solve</span>
  <span m='175520'>in</span> <span m='175910'>polynomial</span> <span
  m='176320'>time.</span> </p><p><span m='177070'>Here's</span> <span
  m='177220'>all</span> <span m='177340'>the</span> <span
  m='177410'>problems</span> <span m='177710'>we can</span> <span
  m='177920'>solve</span> <span m='178140'>in</span> <span
  m='178220'>exponential</span> <span m='178750'>time.</span> <span
  m='180450'>And</span> <span m='180600'>there</span> <span
  m='180700'>are</span> <span m='180830'>problems</span> <span
  m='181210'>out</span> <span m='181350'>here.</span> <span
  m='181620'>These</span> <span m='181680'>are</span> <span
  m='181760'>different</span> <span m='182080'>classes.</span> <span
  m='183390'>And</span> <span m='183560'>we</span> <span m='183660'>want</span>
  <span m='183890'>to</span> <span m='184643'>sort</span> <span
  m='185126'>of</span> <span m='185610'>bring</span> <span
  m='185830'>things</span> <span m='186070'>into</span> <span
  m='186230'>here</span> <span m='186590'>as much</span> <span m='186860'>as
  possible.</span> </p><p><span m='189620'>I</span> <span
  m='189720'>actually</span> <span m='189930'>want</span> <span
  m='190090'>to</span> <span m='190170'>draw</span> <span m='190360'>this</span>
  <span m='191490'>picture</span> <span m='191940'>in</span> <span
  m='192070'>a</span> <span m='192130'>different</span> <span
  m='192430'>way,</span> <span m='193350'>which</span> <span
  m='193550'>is</span> <span m='193740'>as</span> <span m='194110'>a</span>
  <span m='194990'>horizontal</span> <span m='195620'>line.</span> <span
  m='200760'>So</span> <span m='201230'>an</span> <span m='201360'>axis.</span>
  <span m='204860'>I'm</span> <span m='205080'>going</span> <span
  m='205190'>to</span> <span m='205240'>call</span> <span m='205460'>this</span>
  <span m='205810'>computational</span> <span m='206440'>difficulty.</span>
  <span m='208000'>You</span> <span m='208130'>could</span> <span
  m='208260'>call</span> <span m='208450'>it</span> <span
  m='208510'>computational</span> <span m='209000'>complexity,</span> <span
  m='209740'>but</span> <span m='209800'>that's</span> <span m='210010'>a</span>
  <span m='210050'>bit</span> <span m='210180'>of</span> <span
  m='210270'>a</span> <span m='210320'>loaded</span> <span m='210650'>term
  that</span> <span m='210930'>actually</span> <span m='211510'>has</span> <span
  m='211740'>formal</span> <span m='212070'>meaning.</span> <span
  m='212470'>Difficulty</span> <span m='213040'>is</span> <span m='213240'>nice
  and</span> <span m='213510'>vague.</span> <span m='214000'>So</span> <span
  m='214730'>I</span> <span m='214860'>can</span> <span m='215010'>draw</span>
  <span m='215260'>an</span> <span m='215350'>abstract</span> <span
  m='215760'>picture.</span> <span m='216040'>This</span> <span
  m='216220'>is</span> <span m='216320'>not</span> <span m='216530'>a</span>
  <span m='216590'>true</span> <span m='216870'>diagram,</span> <span
  m='217540'>but</span> <span m='218240'>it's</span> <span m='218460'>a</span>
  <span m='218500'>very</span> <span m='218750'>good</span> <span
  m='218930'>guideline</span> <span m='219300'>of</span> <span
  m='219360'>what's</span> <span m='219580'>going</span> <span
  m='219850'>on.</span> </p><p><span m='220770'>So</span> <span
  m='220880'>we</span> <span m='221010'>have--</span> <span
  m='223270'>I'm</span> <span m='223420'>going</span> <span m='223510'>to</span>
  <span m='223610'>draw--</span> <span m='224960'>I believe--</span> <span
  m='226270'>three</span> <span m='226510'>notches.</span> <span
  m='230200'>No,</span> <span m='230370'>eventually</span> <span
  m='230770'>four,</span> <span m='231200'>so</span> <span m='231490'>let</span>
  <span m='231580'>me</span> <span m='231860'>give</span> <span
  m='231980'>myself</span> <span m='232310'>some</span> <span
  m='232520'>room.</span> <span m='236480'>We</span> <span
  m='236630'>have</span> <span m='236830'>over</span> <span
  m='237020'>here,</span> <span m='237230'>the</span> <span
  m='237410'>easy</span> <span m='237670'>problems</span> <span
  m='238730'>are</span> <span m='238990'>P.</span> <span m='240830'>Then,</span>
  <span m='241920'>we</span> <span m='242060'>have</span> <span
  m='243200'>these</span> <span m='243370'>problems,</span> <span
  m='243800'>which</span> <span m='244040'>are</span> <span
  m='244150'>EXP.</span> <span m='245180'>We're</span> <span
  m='245260'>going</span> <span m='245350'>to</span> <span
  m='245460'>fill</span> <span m='245700'>in</span> <span
  m='245960'>something</span> <span m='246310'>in</span> <span
  m='246390'>the</span> <span m='246470'>middle.</span> <span
  m='248930'>And</span> <span m='249220'>then</span> <span
  m='249410'>this</span> <span m='249730'>is</span> <span
  m='249860'>something</span> <span m='250150'>called</span> <span
  m='250390'>R.</span> <span m='251960'>So</span> <span m='252040'>you've</span>
  <span m='252150'>got</span> <span m='252400'>P</span> <span
  m='252640'>is</span> <span m='252800'>everything,</span> <span
  m='253150'>here.</span> <span m='253410'>EXP</span> <span m='253685'>is</span>
  <span m='253960'>all</span> <span m='254200'>the</span> <span
  m='254270'>way</span> <span m='254410'>out</span> <span m='254650'>to</span>
  <span m='254720'>here,</span> <span m='256769'>in</span> <span
  m='256810'>some</span> <span m='257079'>abstract</span> <span
  m='258070'>view.</span> </p><p><span m='259140'>The next</span> <span
  m='259399'>thing</span> <span m='259620'>is</span> <span m='259829'>R.</span>
  <span m='261700'>How</span> <span m='261910'>many</span> <span
  m='262079'>people</span> <span m='262290'>know what R</span> <span
  m='262510'>is?</span> <span m='263290'>This</span> <span
  m='263450'>one,</span> <span m='264100'>I</span> <span m='264190'>had</span>
  <span m='264390'>to</span> <span m='264470'>look</span> <span
  m='264710'>up.</span> <span m='266250'>It's</span> <span m='266410'>not</span>
  <span m='266580'>usually</span> <span m='266850'>given</span> <span
  m='267090'>a</span> <span m='267160'>name.</span> <span m='269780'>No</span>
  <span m='270030'>one.</span> <span m='271060'>Teaching</span> <span
  m='271250'>staff?</span> <span m='271430'>You</span> <span
  m='271860'>guys</span> <span m='272080'>know it?</span> <span
  m='276500'>These</span> <span m='276720'>are</span> <span
  m='276820'>all</span> <span m='276990'>problems</span> <span
  m='277870'>solvable</span> <span m='278380'>in</span> <span
  m='278460'>finite</span> <span m='278870'>time.</span> <span
  m='279900'>R</span> <span m='280120'>stands</span> <span m='280380'>for</span>
  <span m='280520'>finite.</span> <span m='289980'>R</span> <span
  m='290130'>stands</span> <span m='290440'>for</span> <span
  m='290580'>recursive.</span> <span m='292770'>Recursive</span> <span
  m='293220'>used</span> <span m='293390'>to</span> <span m='293450'>mean</span>
  <span m='293580'>something</span> <span m='293890'>completely</span> <span
  m='294230'>different,</span> <span m='294530'>back</span> <span
  m='294750'>in</span> <span m='294840'>the</span> <span m='294960'>'30s,</span>
  <span m='295530'>when</span> <span m='295690'>people</span> <span
  m='295970'>were</span> <span m='296080'>thinking</span> <span
  m='296350'>about</span> <span m='296570'>what's</span> <span
  m='296770'>computable,</span> <span m='297270'>what's</span> <span
  m='297490'>not</span> <span m='297660'>computable.</span> </p><p><span
  m='298470'>These</span> <span m='298650'>are,</span> <span
  m='298700'>basically,</span> <span m='299260'>solvable</span> <span
  m='299820'>problems,</span> <span m='300650'>computable</span> <span
  m='301300'>problems.</span> <span m='302390'>Finite</span> <span
  m='302680'>time</span> <span m='302960'>is</span> <span m='303650'>a</span>
  <span m='303690'>reasonable</span> <span m='304150'>requirement,</span> <span
  m='304640'>I</span> <span m='304700'>think,</span> <span m='304890'>for</span>
  <span m='305030'>all</span> <span m='305180'>algorithms.</span> <span
  m='306105'>And</span> <span m='306360'>that's</span> <span
  m='306640'>R.</span> <span m='308060'>Now,</span> <span m='308490'>I've</span>
  <span m='308690'>drawn</span> <span m='309050'>this</span> <span
  m='309370'>arrow</span> <span m='309690'>to</span> <span
  m='309800'>keep</span> <span m='310080'>going</span> <span
  m='310470'>because</span> <span m='310780'>there</span> <span
  m='310900'>are</span> <span m='311020'>problems</span> <span
  m='311950'>out</span> <span m='312140'>here.</span> <span
  m='313410'>It's</span> <span m='313530'>kind</span> <span m='313720'>of</span>
  <span m='313780'>discouraging,</span> <span m='314400'>but</span> <span
  m='314530'>there are</span> <span m='314680'>problems that</span> <span
  m='315110'>are</span> <span m='315260'>unsolvable.</span> <span
  m='317080'>In</span> <span m='317210'>fact,</span> <span
  m='318270'>most</span> <span m='318600'>problems</span> <span
  m='319280'>are</span> <span m='319440'>unsolvable.</span> <span
  m='320310'>We're</span> <span m='320500'>going</span> <span
  m='320600'>to</span> <span m='320650'>prove</span> <span
  m='320870'>that.</span> <span m='321060'>It's</span> <span
  m='321190'>actually</span> <span m='321440'>really</span> <span
  m='321660'>easy</span> <span m='321970'>to prove.</span> <span m='323340'>Kind
  of</span> <span m='324214'>depressing,</span> <span m='325540'>but</span>
  <span m='325730'>true.</span> </p><p><span m='328360'>Let</span> <span
  m='328480'>me</span> <span m='328600'>start</span> <span
  m='328840'>with</span> <span m='328930'>some</span> <span
  m='329100'>examples</span> <span m='330710'>before</span> <span
  m='330790'>we</span> <span m='330910'>get</span> <span m='331070'>to</span>
  <span m='331160'>that</span> <span m='331390'>proof.</span> <span
  m='336200'>So</span> <span m='336380'>I'm</span> <span
  m='336490'>writing</span> <span m='336740'>examples of</span> <span
  m='337210'>some things</span> <span m='337640'>we've</span> <span
  m='337750'>seen.</span> <span m='340730'>So</span> <span
  m='340910'>here's</span> <span m='341160'>an</span> <span
  m='341210'>example</span> <span m='341590'>of</span> <span m='341660'>a</span>
  <span m='341740'>problem</span> <span m='343540'>we've</span> <span
  m='343740'>seen.</span> <span m='347740'>Negative-weight</span> <span
  m='348350'>cycle</span> <span m='348720'>detection.</span> </p><p><span
  m='352314'>I give</span> <span m='352790'>you a graph--</span> <span
  m='353820'>a</span> <span m='353900'>weighted</span> <span
  m='354110'>graph.</span> <span m='354440'>I</span> <span
  m='354470'>want</span> <span m='354650'>to know</span> <span m='354830'>does
  it</span> <span m='355060'>have</span> <span m='355230'>any</span> <span
  m='356580'>negative-weight</span> <span m='357090'>cycles?</span> <span
  m='358090'>What</span> <span m='358210'>classes</span> <span m='358600'>is
  this</span> <span m='358730'>problem</span> <span m='359030'>in?</span> <span
  m='360560'>P.</span> <span m='361040'>We</span> <span m='361500'>know</span>
  <span m='361570'>how</span> <span m='361700'>to</span> <span
  m='361770'>solve</span> <span m='362030'>this</span> <span
  m='362190'>in</span> <span m='362290'>polynomial</span> <span
  m='362800'>time--</span> <span m='363050'>in</span> <span m='363160'>VE</span>
  <span m='363500'>time--</span> <span m='364280'>using</span> <span
  m='364580'>Bellman-Ford.</span> <span m='366260'>VE</span> <span
  m='366480'>time--</span> <span m='366770'>well,</span> <span
  m='366930'>that</span> <span m='367160'>finds</span> <span
  m='367580'>negative-weight</span> <span m='368330'>cycles</span> <span
  m='368650'>reachable</span> <span m='368970'>from</span> <span
  m='369100'>s.</span> <span m='369540'>But,</span> <span m='369690'>I</span>
  <span m='369740'>guess,</span> <span m='369980'>if you</span> <span
  m='370130'>add</span> <span m='370450'>a</span> <span m='370960'>source</span>
  <span m='371300'>that</span> <span m='371370'>can</span> <span
  m='371560'>reach</span> <span m='371810'>anywhere--</span> <span
  m='372940'>zero</span> <span m='373090'>weight--</span> <span
  m='373620'>then</span> <span m='374390'>that'll</span> <span
  m='374640'>tell</span> <span m='374800'>you</span> <span
  m='374990'>overall</span> <span m='377440'>that</span> <span m='377915'>it's
  in P.</span> </p><p><span m='378390'>It's</span> <span m='378600'>also</span>
  <span m='378850'>in</span> <span m='378950'>EXP,</span> <span
  m='379310'>of</span> <span m='379420'>course.</span> <span
  m='379640'>Everything</span> <span m='380060'>in</span> <span
  m='380460'>P</span> <span m='380670'>is</span> <span m='380790'>also</span>
  <span m='381040'>in</span> <span m='381140'>EXP.</span> <span
  m='381690'>Because</span> <span m='381910'>if</span> <span
  m='382020'>you</span> <span m='382110'>can</span> <span
  m='382240'>solve</span> <span m='382450'>it in</span> <span
  m='382590'>polynomial</span> <span m='383040'>time,</span> <span
  m='383280'>you</span> <span m='383360'>can</span> <span
  m='383510'>solve</span> <span m='383770'>it</span> <span m='384250'>in</span>
  <span m='384430'>exponential</span> <span m='384920'>time.</span> <span
  m='385290'>This</span> <span m='385500'>is</span> <span m='387780'>at</span>
  <span m='388030'>most</span> <span m='388360'>exponential</span> <span
  m='388860'>time.</span> <span m='389230'>At most</span> <span
  m='389590'>polynomial.</span> </p><p><span m='393440'>Here's</span> <span
  m='393790'>a</span> <span m='393850'>problem</span> <span m='394070'>we</span>
  <span m='394160'>haven't</span> <span m='394470'>seen.</span> <span
  m='395680'>But it's</span> <span m='395870'>pretty</span> <span
  m='396060'>cool.</span> <span m='397160'>N</span> <span m='397370'>by</span>
  <span m='397520'>n</span> <span m='397800'>Chess.</span> <span
  m='399190'>So</span> <span m='399330'>this</span> <span m='399510'>is</span>
  <span m='399560'>the</span> <span m='399670'>problem</span> <span
  m='400080'>I</span> <span m='400200'>give</span> <span m='400460'>you.</span>
  <span m='401320'>So</span> <span m='401450'>we're</span> <span
  m='401520'>in</span> <span m='401580'>an</span> <span m='401690'>by</span>
  <span m='402010'>n</span> <span m='402170'>board,</span> <span
  m='402980'>and</span> <span m='403140'>I</span> <span m='403180'>give</span>
  <span m='403340'>you</span> <span m='403440'>a</span> <span
  m='403470'>whole</span> <span m='403640'>bunch</span> <span
  m='403860'>of</span> <span m='403930'>pieces</span> <span m='404300'>on</span>
  <span m='404420'>the</span> <span m='404490'>board,</span> <span
  m='405690'>and</span> <span m='405750'>I</span> <span m='405780'>want</span>
  <span m='405960'>to</span> <span m='406010'>know</span> <span
  m='406850'>does</span> <span m='407030'>White</span> <span
  m='407230'>win</span> <span m='407470'>from</span> <span
  m='407610'>here?</span> <span m='408890'>I</span> <span m='408980'>say</span>
  <span m='409170'>it's</span> <span m='409370'>White</span> <span
  m='409590'>to</span> <span m='409680'>move</span> <span m='409870'>or</span>
  <span m='409960'>Black</span> <span m='410200'>to</span> <span
  m='410300'>move,</span> <span m='411660'>and</span> <span
  m='412520'>who's</span> <span m='412870'>going</span> <span
  m='413010'>to</span> <span m='413090'>win</span> <span m='413450'>form</span>
  <span m='413530'>this</span> <span m='413680'>position?</span> </p><p><span
  m='415250'>This</span> <span m='415430'>problem,</span> <span
  m='417170'>can</span> <span m='417370'>be</span> <span
  m='417480'>solved</span> <span m='417820'>in</span> <span
  m='417910'>exponential</span> <span m='418430'>time.</span> <span
  m='419085'>You can</span> <span m='419360'>sort of</span> <span
  m='419810'>play</span> <span m='420130'>out</span> <span m='420790'>all</span>
  <span m='421030'>possible</span> <span m='421500'>strategies</span> <span
  m='422080'>and</span> <span m='422180'>see</span> <span m='422340'>who</span>
  <span m='422490'>wins.</span> <span m='425210'>And</span> <span
  m='426270'>it's</span> <span m='426430'>not</span> <span m='426680'>in</span>
  <span m='426780'>P.</span> <span m='428500'>There's</span> <span
  m='428650'>no</span> <span m='428850'>polynomial</span> <span
  m='429370'>time</span> <span m='429590'>algorithm</span> <span
  m='430060'>to</span> <span m='430180'>play</span> <span
  m='430730'>generalized</span> <span m='431240'>Chess.</span> <span
  m='432150'>This</span> <span m='432520'>sort</span> <span m='432690'>of</span>
  <span m='432770'>captures</span> <span m='433210'>why</span> <span
  m='433540'>Chess--</span> <span m='434150'>even</span> <span
  m='434480'>at</span> <span m='434770'>eight</span> <span m='434970'>by</span>
  <span m='435090'>eight</span> <span m='435250'>Chess--</span> <span
  m='435500'>is</span> <span m='435600'>hard--</span> <span
  m='436290'>because</span> <span m='436440'>there's</span> <span
  m='436590'>no</span> <span m='436930'>general</span> <span
  m='437330'>way</span> <span m='437510'>to</span> <span m='437820'>do</span>
  <span m='438050'>it.</span> <span m='439220'>So</span> <span
  m='439510'>there's</span> <span m='440090'>no</span> <span
  m='440320'>special</span> <span m='440730'>way</span> <span
  m='440840'>to</span> <span m='440940'>do</span> <span m='441060'>it,</span>
  <span m='441150'>probably.</span> </p><p><span m='443210'>Computational</span>
  <span m='443740'>complexity</span> <span m='444180'>is</span> <span
  m='444650'>all</span> <span m='444790'>about</span> <span
  m='445040'>order</span> <span m='445270'>of</span> <span
  m='445360'>growth.</span> <span m='445780'>So</span> <span
  m='445810'>we</span> <span m='445910'>can't</span> <span
  m='446130'>analyze</span> <span m='446480'>eight</span> <span
  m='446640'>by</span> <span m='446770'>eight</span> <span
  m='446930'>Chess,</span> <span m='447770'>but</span> <span
  m='447970'>we</span> <span m='448120'>can</span> <span
  m='448280'>analyze</span> <span m='448620'>n</span> <span m='448740'>by</span>
  <span m='448850'>n</span> <span m='449020'>Chess.</span> <span
  m='449290'>And</span> <span m='449370'>that</span> <span
  m='449500'>gives</span> <span m='449670'>us</span> <span m='449780'>a</span>
  <span m='449840'>flavor of</span> <span m='450260'>why 8</span> <span
  m='450440'>by</span> <span m='450770'>8</span> <span m='451290'>is</span>
  <span m='451430'>so</span> <span m='451570'>difficult.</span> <span
  m='452290'>Go is</span> <span m='452750'>also</span> <span
  m='453700'>in</span> <span m='453860'>EXP,</span> <span m='454400'>but</span>
  <span m='454580'>not</span> <span m='454780'>in</span> <span
  m='454890'>P--</span> <span m='456080'>lots</span> <span m='456300'>of</span>
  <span m='456400'>games</span> <span m='457000'>are</span> <span
  m='457190'>in</span> <span m='457270'>this</span> <span
  m='457420'>category,</span> <span m='457890'>lot's</span> <span
  m='458080'>of</span> <span m='458730'>complicated</span> <span
  m='459280'>games, let's</span> <span m='459640'>say.</span> </p><p><span
  m='461430'>And</span> <span m='461600'>so</span> <span m='461710'>this</span>
  <span m='461930'>is</span> <span m='462070'>a</span> <span
  m='462140'>first</span> <span m='462430'>example</span> <span
  m='462830'>of</span> <span m='462910'>a</span> <span m='462970'>problem</span>
  <span m='463730'>that</span> <span m='464000'>we</span> <span
  m='464220'>know</span> <span m='464990'>we</span> <span
  m='465130'>cannot</span> <span m='465470'>solve</span> <span
  m='465850'>in</span> <span m='465950'>polynomial</span> <span
  m='466470'>time.</span> <span m='468930'>Bad</span> <span
  m='469160'>news.</span> <span m='470880'>I</span> <span m='470980'>also</span>
  <span m='471170'>talked</span> <span m='471400'>about</span> <span
  m='471830'>Tetris</span> <span m='472420'>a</span> <span
  m='472470'>little</span> <span m='472740'>bit.</span> <span
  m='476940'>Unlike</span> <span m='477300'>the</span> <span
  m='477540'>Tetris</span> <span m='477870'>training,</span> <span
  m='478410'>which</span> <span m='478570'>we</span> <span
  m='478680'>saw,</span> <span m='478920'>this</span> <span m='479110'>is</span>
  <span m='479260'>sort of</span> <span m='479600'>realistic</span> <span
  m='480160'>Tetris--</span> <span m='480630'>all</span> <span
  m='480790'>the</span> <span m='480920'>rules</span> <span m='481170'>of</span>
  <span m='481260'>Tetris.</span> <span m='482340'>The</span> <span
  m='482500'>only</span> <span m='482750'>catch</span> <span
  m='483060'>is</span> <span m='483200'>that</span> <span m='483370'>I</span>
  <span m='483550'>tell</span> <span m='483870'>you</span> <span
  m='484080'>all</span> <span m='484410'>the</span> <span
  m='484490'>pieces</span> <span m='484880'>that</span> <span
  m='484990'>are</span> <span m='485070'>going</span> <span m='485260'>to</span>
  <span m='485320'>come</span> <span m='485550'>in</span> <span
  m='485620'>advance.</span> <span m='486470'>Because,</span> <span
  m='486740'>otherwise,</span> <span m='487010'>it's</span> <span
  m='487290'>some</span> <span m='487800'>random</span> <span
  m='488120'>process</span> <span m='488730'>and</span> <span
  m='488820'>it's</span> <span m='488940'>kind</span> <span m='489110'>of</span>
  <span m='489230'>hard</span> <span m='489510'>to</span> <span
  m='489660'>think</span> <span m='489870'>about</span> <span
  m='490120'>what's</span> <span m='490310'>the</span> <span
  m='490390'>best</span> <span m='490570'>strategy.</span> </p><p><span
  m='491025'>But</span> <span m='491480'>if</span> <span m='491620'>I</span>
  <span m='491690'>tell</span> <span m='491950'>you</span> <span
  m='492160'>what's</span> <span m='492440'>going</span> <span
  m='492630'>to</span> <span m='492690'>come--</span> <span
  m='493900'>say</span> <span m='494020'>it's</span> <span m='494140'>a</span>
  <span m='494190'>pseudo-random</span> <span m='494690'>generator and</span>
  <span m='495190'>you</span> <span m='495330'>know</span> <span
  m='495640'>how</span> <span m='495820'>it</span> <span
  m='495860'>works.</span> <span m='496675'>You know</span> <span
  m='496960'>all</span> <span m='497070'>the</span> <span
  m='497160'>pieces</span> <span m='497470'>that</span> <span
  m='497590'>will</span> <span m='497740'>come.</span> <span m='497990'>I</span>
  <span m='498040'>want</span> <span m='498210'>to know</span> <span
  m='498390'>can</span> <span m='498630'>I</span> <span
  m='498710'>survive</span> <span m='499790'>from</span> <span
  m='500060'>a</span> <span m='500110'>given</span> <span
  m='500710'>initial</span> <span m='501070'>board</span> <span
  m='501810'>mess</span> <span m='502830'>and</span> <span m='503070'>for a
  given</span> <span m='503600'>sequence</span> <span m='503970'>of</span> <span
  m='504050'>pieces.</span> </p><p><span m='504980'>This</span> <span
  m='505150'>can</span> <span m='505260'>also</span> <span m='505490'>be</span>
  <span m='505600'>solved</span> <span m='505900'>in</span> <span
  m='506000'>exponential</span> <span m='506510'>time.</span> <span
  m='507740'>Just</span> <span m='508080'>try</span> <span m='508830'>all</span>
  <span m='509060'>the</span> <span m='509140'>possibilities.</span> <span
  m='514780'>We</span> <span m='514909'>don't</span> <span
  m='515150'>know</span> <span m='517350'>whether</span> <span
  m='517590'>it's</span> <span m='517700'>in</span> <span m='517820'>P.</span>
  <span m='524810'>We're</span> <span m='525290'>pretty</span> <span
  m='525530'>sure</span> <span m='525760'>it's</span> <span
  m='525900'>not</span> <span m='526130'>in</span> <span m='526260'>P.</span>
  <span m='526540'>And</span> <span m='526640'>by</span> <span
  m='526780'>the</span> <span m='526920'>end</span> <span m='527100'>of</span>
  <span m='527200'>today's</span> <span m='527490'>lecture,</span> <span
  m='527920'>you'll</span> <span m='527960'>understand</span> <span
  m='528410'>why</span> <span m='529290'>we</span> <span m='529430'>think</span>
  <span m='529620'>it's</span> <span m='529770'>not</span> <span m='530010'>in
  P.</span> <span m='531500'>But</span> <span m='531690'>it's</span> <span
  m='531900'>going</span> <span m='532030'>to</span> <span m='532100'>be</span>
  <span m='532260'>somewhere</span> <span m='532630'>in</span> <span
  m='532710'>between</span> <span m='533680'>here.</span> <span
  m='534930'>Tetris</span> <span m='535310'>is</span> <span
  m='535430'>actually</span> <span m='535730'>right</span> <span
  m='535900'>here.</span> <span m='537110'>But</span> <span m='537310'>I</span>
  <span m='537400'>haven't</span> <span m='537640'>defined</span> <span
  m='538050'>what</span> <span m='538570'>right</span> <span
  m='538700'>here</span> <span m='538960'>is</span> <span m='539070'>yet.</span>
  </p><p><span m='546040'>And</span> <span m='546230'>then</span> <span
  m='547490'>the</span> <span m='547580'>next</span> <span m='547840'>one</span>
  <span m='549140'>is</span> <span m='549530'>halting</span> <span
  m='549960'>problem.</span> <span m='564720'>So</span> <span
  m='564840'>halting</span> <span m='565190'>problem</span> <span
  m='565500'>is</span> <span m='565710'>particularly</span> <span
  m='566470'>cool,</span> <span m='567140'>as</span> <span
  m='567310'>we'll</span> <span m='567420'>see--</span> <span
  m='567910'>or</span> <span m='568080'>interesting.</span> <span
  m='569320'>It's the</span> <span m='569600'>problem</span> <span
  m='569920'>of</span> <span m='570100'>given</span> <span m='570460'>a</span>
  <span m='570580'>computer</span> <span m='570950'>program--</span> <span
  m='574040'>Python,</span> <span m='574710'>whatever, it</span> <span
  m='575080'>doesn't</span> <span m='575300'>really</span> <span
  m='575480'>matter</span> <span m='575730'>what</span> <span
  m='575860'>language.</span> <span m='577540'>They're</span> <span
  m='577680'>all</span> <span m='577870'>the</span> <span m='577950'>same</span>
  <span m='578370'>in</span> <span m='578480'>a</span> <span
  m='578640'>theoretical</span> <span m='579110'>sense--</span> <span
  m='582150'>does</span> <span m='582360'>it</span> <span m='582490'>ever</span>
  <span m='582750'>halt?</span> </p><p><span m='586680'>Does</span> <span
  m='586830'>it</span> <span m='586920'>ever</span> <span m='587120'>stop</span>
  <span m='587490'>running,</span> <span m='589290'>return</span> <span
  m='589600'>a</span> <span m='589650'>result,</span> <span
  m='590040'>whatever?</span> <span m='593070'>This</span> <span
  m='593210'>would</span> <span m='593300'>be</span> <span
  m='593420'>really</span> <span m='593630'>handy--</span> <span
  m='594180'>you're</span> <span m='594330'>writing</span> <span
  m='594610'>some</span> <span m='594780'>code,</span> <span
  m='595600'>and</span> <span m='595790'>you've</span> <span
  m='595930'>run</span> <span m='596170'>it</span> <span m='596310'>for</span>
  <span m='596480'>5</span> <span m='596800'>hours,</span> <span
  m='597330'>and</span> <span m='598200'>you</span> <span
  m='598360'>don't</span> <span m='598500'>know</span> <span
  m='598690'>is</span> <span m='598850'>that</span> <span
  m='599020'>because</span> <span m='599620'>there's</span> <span
  m='599800'>a</span> <span m='599850'>bug</span> <span m='600120'>and
  you've</span> <span m='600250'>got an</span> <span m='600410'>infinite</span>
  <span m='600740'>loop?</span> <span m='601020'>Or</span> <span
  m='601300'>is</span> <span m='601380'>it</span> <span m='601450'>just</span>
  <span m='601600'>because</span> <span m='601790'>it's</span> <span
  m='602130'>really</span> <span m='602330'>slow?</span> </p><p><span
  m='604000'>So</span> <span m='604180'>you'd</span> <span
  m='604290'>like</span> <span m='604460'>to</span> <span m='604550'>give</span>
  <span m='604760'>it to</span> <span m='604890'>some</span> <span
  m='606650'>program--</span> <span m='607820'>checking</span> <span
  m='608190'>program-- that</span> <span m='608630'>says</span> <span
  m='608980'>will</span> <span m='609250'>this</span> <span
  m='609420'>run</span> <span m='609610'>forever or</span> <span m='610080'>will
  it</span> <span m='610430'>terminate.</span> <span m='611532'>That's</span>
  <span m='611900'>the</span> <span m='612010'>halting</span> <span
  m='612320'>problem.</span> <span m='613160'>And</span> <span
  m='613240'>this</span> <span m='613390'>problem</span> <span
  m='614160'>is</span> <span m='614330'>not</span> <span m='614680'>in</span>
  <span m='614900'>R.</span> <span m='616870'>There</span> <span
  m='617080'>is</span> <span m='617190'>no</span> <span
  m='617890'>correct</span> <span m='618310'>algorithm</span> <span
  m='618700'>for</span> <span m='618840'>solving</span> <span
  m='619170'>this</span> <span m='619320'>problem.</span> <span
  m='620260'>There's</span> <span m='620440'>no</span> <span
  m='620680'>way</span> <span m='620880'>to</span> <span m='621020'>tell,</span>
  <span m='622800'>given</span> <span m='623090'>an</span> <span
  m='623190'>arbitrary</span> <span m='623650'>program,</span> <span
  m='624270'>whether</span> <span m='624550'>it</span> <span
  m='624620'>will</span> <span m='624740'>halt.</span> </p><p><span
  m='625840'>Now, in</span> <span m='625970'>some</span> <span
  m='626240'>situations--</span> <span m='627190'>take</span> <span
  m='627410'>the</span> <span m='627540'>empty program--</span> <span
  m='628130'>I</span> <span m='628240'>can</span> <span m='628400'>tell</span>
  <span m='628570'>that it</span> <span m='628840'>halts.</span> <span
  m='629630'>Or I</span> <span m='629820'>take</span> <span
  m='630170'>some</span> <span m='630460'>special</span> <span
  m='630890'>simple</span> <span m='631900'>class</span> <span
  m='632250'>of</span> <span m='633050'>programs,</span> <span
  m='633580'>I</span> <span m='633650'>can</span> <span m='633810'>tell</span>
  <span m='633970'>whether</span> <span m='634140'>they</span> <span
  m='634290'>halt</span> <span m='634930'>or</span> <span
  m='635150'>determine</span> <span m='635530'>that</span> <span
  m='635660'>they</span> <span m='635760'>don't</span> <span
  m='636000'>halt.</span> <span m='636890'>But</span> <span
  m='637030'>there's</span> <span m='637250'>no</span> <span
  m='637550'>algorithm</span> <span m='637980'>that</span> <span
  m='638070'>solves</span> <span m='638430'>it</span> <span
  m='638580'>for</span> <span m='638760'>all</span> <span
  m='639070'>programs,</span> <span m='640890'>in</span> <span
  m='641020'>finite</span> <span m='641410'>time.</span> <span
  m='642380'>In</span> <span m='642510'>infinite</span> <span
  m='642860'>time,</span> <span m='643210'>I</span> <span m='643430'>can</span>
  <span m='643590'>solve</span> <span m='643810'>it.</span> <span
  m='644330'>Just</span> <span m='644530'>run</span> <span m='644750'>it.</span>
  <span m='646540'>Run</span> <span m='646730'>the</span> <span
  m='646820'>program.</span> <span m='648360'>Given</span> <span
  m='648620'>finite</span> <span m='649040'>time,</span> <span
  m='649340'>there's</span> <span m='649490'>no</span> <span
  m='649640'>way</span> <span m='649730'>to</span> <span m='649810'>solve</span>
  <span m='650080'>this.</span> </p><p><span m='650340'>And</span> <span
  m='650510'>so</span> <span m='650650'>this</span> <span m='650880'>is</span>
  <span m='651510'>a</span> <span m='651560'>little</span> <span
  m='651720'>bit</span> <span m='651880'>beyond</span> <span
  m='652150'>what</span> <span m='652240'>we</span> <span m='652360'>can</span>
  <span m='652480'>prove</span> <span m='652920'>today.</span> <span
  m='653370'>It's</span> <span m='653700'>not</span> <span
  m='653850'>that</span> <span m='654010'>hard</span> <span m='654190'>to</span>
  <span m='654260'>prove,</span> <span m='654500'>but</span> <span
  m='654640'>it</span> <span m='654930'>takes</span> <span
  m='655160'>half</span> <span m='655370'>an</span> <span m='655470'>hour</span>
  <span m='655740'>or</span> <span m='655840'>something.</span> <span
  m='656690'>I</span> <span m='656740'>want</span> <span m='656870'>to</span>
  <span m='656920'>get</span> <span m='657060'>to</span> <span
  m='657140'>other</span> <span m='657320'>things.</span> <span
  m='657690'>But</span> <span m='657790'>if</span> <span m='657890'>you</span>
  <span m='657990'>take</span> <span m='658040'>6045,</span> <span
  m='658795'>they'll</span> <span m='659100'>prove</span> <span
  m='659430'>this.</span> <span m='662020'>What</span> <span m='662250'>I</span>
  <span m='662300'>want</span> <span m='662450'>to</span> <span
  m='662510'>show</span> <span m='662680'>you</span> <span
  m='662830'>instead</span> <span m='663400'>is</span> <span
  m='663590'>an</span> <span m='663690'>easier</span> <span
  m='663990'>result--</span> <span m='665020'>that</span> <span
  m='665200'>almost</span> <span m='665550'>every</span> <span
  m='665810'>problem</span> <span m='666670'>is</span> <span
  m='667010'>not</span> <span m='667230'>in</span> <span m='667380'>R.</span>
  </p><p><span m='689800'>I</span> <span m='689910'>need</span> <span
  m='690150'>one</span> <span m='690550'>term,</span> <span
  m='690960'>though,</span> <span m='691150'>which</span> <span
  m='691340'>is</span> <span m='691520'>decision</span> <span
  m='692070'>problems.</span> <span m='692680'>All</span> <span
  m='692930'>of</span> <span m='693020'>these</span> <span
  m='693210'>problems,</span> <span m='693890'>I</span> <span
  m='693990'>set</span> <span m='694310'>it</span> <span m='694430'>up</span>
  <span m='694620'>in</span> <span m='694750'>a</span> <span
  m='694820'>way</span> <span m='695050'>that</span> <span m='695210'>the</span>
  <span m='695300'>answer</span> <span m='695640'>is</span> <span
  m='695730'>binary--</span> <span m='696260'>yes</span> <span
  m='696580'>or</span> <span m='696690'>no.</span> <span m='697630'>Is</span>
  <span m='697830'>there</span> <span m='697990'>a</span> <span
  m='698030'>negative-weight</span> <span m='698540'>cycle?</span> <span
  m='698930'>Yes</span> <span m='699140'>or</span> <span m='699230'>no?</span>
  <span m='701090'>Does</span> <span m='701290'>White</span> <span
  m='701670'>win</span> <span m='702060'>from</span> <span
  m='702260'>this</span> <span m='702410'>position</span> <span
  m='702850'>in</span> <span m='702970'>Chess?</span> <span
  m='703950'>Can</span> <span m='704160'>you</span> <span
  m='704280'>survive</span> <span m='704870'>in</span> <span
  m='704980'>Tetris?</span> <span m='706000'>And</span> <span
  m='706200'>does</span> <span m='706390'>this</span> <span
  m='706530'>program</span> <span m='706980'>halt?</span> </p><p><span
  m='708240'>For</span> <span m='708970'>various</span> <span
  m='709370'>reasons--</span> <span m='709800'>basically</span> <span
  m='710190'>convenience--</span> <span m='711430'>the</span> <span
  m='711560'>whole</span> <span m='711790'>field</span> <span
  m='712080'>of</span> <span m='712160'>computational</span> <span
  m='712690'>complexity</span> <span m='713320'>focuses</span> <span
  m='714100'>on</span> <span m='714920'>decision</span> <span
  m='715320'>problems.</span> <span m='716550'>And,</span> <span
  m='716980'>in</span> <span m='717090'>fact--</span> <span m='718590'>so</span>
  <span m='718690'>decision</span> <span m='719060'>problems</span> <span
  m='719370'>are</span> <span m='719440'>ones</span> <span
  m='719650'>where</span> <span m='719740'>the</span> <span
  m='719860'>answer</span> <span m='720130'>is</span> <span
  m='720190'>yes</span> <span m='720410'>or</span> <span m='720490'>no.</span>
  <span m='721080'>That's</span> <span m='721260'>all.</span> <span
  m='722920'>Why?</span> <span m='723880'>Essentially</span> <span
  m='724290'>because</span> <span m='724460'>it</span> <span
  m='724540'>doesn't</span> <span m='724770'>matter.</span> <span
  m='725520'>If</span> <span m='725590'>you</span> <span m='725690'>take</span>
  <span m='726210'>a</span> <span m='726340'>problem</span> <span
  m='726740'>you</span> <span m='726880'>care</span> <span
  m='727130'>about,</span> <span m='727920'>you can</span> <span
  m='728400'>convert</span> <span m='728760'>it</span> <span
  m='728840'>into</span> <span m='729190'>a</span> <span
  m='729280'>decision</span> <span m='729700'>problem.</span> <span
  m='730200'>We</span> <span m='730350'>can</span> <span m='730480'>see</span>
  <span m='730620'>examples</span> <span m='731030'>of</span> <span
  m='731080'>that</span> <span m='731240'>later.</span> <span
  m='732760'>Decision</span> <span m='733340'>problems</span> <span
  m='733660'>are</span> <span m='733730'>basically</span> <span
  m='734060'>as</span> <span m='734290'>hard</span> <span m='734670'>as</span>
  <span m='735030'>optimization</span> <span m='735660'>problems</span> <span
  m='736120'>or</span> <span m='736210'>whatever.</span> </p><p><span
  m='738260'>But</span> <span m='738280'>let's</span> <span
  m='738460'>focus</span> <span m='738780'>on</span> <span
  m='738880'>decision</span> <span m='739240'>problems.</span> <span
  m='739530'>The</span> <span m='739600'>answer</span> <span
  m='739900'>is</span> <span m='739970'>yes</span> <span m='740220'>or</span>
  <span m='740300'>no.</span> <span m='740920'>Claim</span> <span
  m='741160'>that</span> <span m='741280'>most</span> <span m='741550'>of</span>
  <span m='741620'>them</span> <span m='742180'>are</span> <span
  m='742460'>uncomputable.</span> <span m='743590'>And</span> <span
  m='743970'>we</span> <span m='744130'>can</span> <span m='744320'>prove</span>
  <span m='744560'>this</span> <span m='745280'>pretty</span> <span
  m='745540'>easily</span> <span m='746100'>if</span> <span m='746530'>you
  know</span> <span m='746960'>a</span> <span m='747000'>bit</span> <span
  m='747180'>of</span> <span m='749390'>set</span> <span
  m='749620'>theory,</span> <span m='749860'>I</span> <span
  m='749920'>guess.</span> </p><p><span m='755330'>On</span> <span
  m='755460'>the</span> <span m='755540'>one</span> <span
  m='755700'>hand,</span> <span m='755960'>I</span> <span m='756010'>have</span>
  <span m='756210'>problems</span> <span m='756690'>I</span> <span
  m='756740'>want</span> <span m='756940'>to</span> <span
  m='757000'>solve.</span> <span m='757350'>These</span> <span
  m='757530'>are</span> <span m='757600'>decision</span> <span
  m='757990'>problems.</span> <span m='758520'>And</span> <span
  m='758670'>on</span> <span m='758770'>the</span> <span m='758880'>other</span>
  <span m='759030'>hand,</span> <span m='759340'>I</span> <span
  m='759420'>have</span> <span m='760650'>algorithms,</span> <span
  m='761220'>or</span> <span m='761380'>computer</span> <span
  m='761780'>programs</span> <span m='762220'>to</span> <span
  m='762310'>solve</span> <span m='762610'>them.</span> <span
  m='762820'>I'm</span> <span m='762960'>going</span> <span m='763050'>to</span>
  <span m='763110'>think</span> <span m='763310'>of</span> <span
  m='763400'>computer</span> <span m='763780'>programs</span> <span
  m='764230'>because</span> <span m='765100'>more</span> <span
  m='765470'>precise</span> <span m='765960'>algorithms</span> <span
  m='766490'>can</span> <span m='766640'>be</span> <span m='766750'>a</span>
  <span m='766810'>little</span> <span m='767020'>bit</span> <span
  m='767810'>nebulous</span> <span m='768830'>for</span> <span
  m='768920'>thinking</span> <span m='769140'>about</span> <span
  m='769370'>pseudocode--</span> <span m='770230'>what's</span> <span
  m='770570'>valid,</span> <span m='770860'>what's</span> <span
  m='771040'>invalid.</span> </p><p><span m='771460'>But</span> <span
  m='771640'>computer</span> <span m='771960'>programs</span> <span
  m='772470'>are</span> <span m='772530'>very</span> <span
  m='772730'>clear.</span> <span m='773610'>I</span> <span
  m='773660'>give</span> <span m='773860'>you</span> <span
  m='774390'>some</span> <span m='774550'>code.</span> <span
  m='775120'>You</span> <span m='775270'>throw</span> <span m='775510'>it</span>
  <span m='775560'>into</span> <span m='775740'>Python.</span> <span
  m='776090'>Either it</span> <span m='776370'>works</span> <span
  m='776630'>or</span> <span m='776710'>it</span> <span
  m='776810'>doesn't.</span> <span m='777500'>And</span> <span
  m='778640'>it</span> <span m='778790'>does</span> <span
  m='778970'>something.</span> <span m='779560'>Runs</span> <span
  m='779810'>for</span> <span m='779920'>a</span> <span m='779980'>while.</span>
  <span m='784080'>How</span> <span m='784290'>can</span> <span
  m='784410'>I</span> <span m='785410'>think</span> <span
  m='785610'>about</span> <span m='786000'>the</span> <span
  m='786090'>space</span> <span m='786550'>of</span> <span m='786670'>all</span>
  <span m='786900'>possible</span> <span m='787340'>programs?</span> <span
  m='788750'>Well,</span> <span m='789350'>programs</span> <span
  m='789840'>are</span> <span m='789920'>things</span> <span
  m='790210'>you</span> <span m='790350'>type</span> <span
  m='790620'>into</span> <span m='790800'>a</span> <span
  m='790850'>computer</span> <span m='792020'>in</span> <span
  m='792640'>ASCII,</span> <span m='792990'>whatever.</span> <span
  m='793400'>In</span> <span m='793530'>the</span> <span m='793650'>end,</span>
  <span m='794050'>you</span> <span m='794190'>can</span> <span
  m='794320'>think</span> <span m='794490'>of it as</span> <span
  m='794600'>just</span> <span m='794680'>as</span> <span m='794910'>a</span>
  <span m='795240'>binary</span> <span m='795660'>string.</span> <span
  m='796380'>Somehow</span> <span m='796820'>it gets</span> <span
  m='797040'>encoded</span> <span m='797380'>in</span> <span
  m='797480'>binary.</span> <span m='798060'>Everything</span> <span
  m='798500'>is</span> <span m='798610'>reduced</span> <span
  m='798890'>to</span> <span m='798960'>binary</span> <span m='799440'>in the
  end,</span> <span m='801330'>on</span> <span m='801440'>a</span> <span
  m='801490'>computer.</span> </p><p><span m='801870'>So</span> <span
  m='802010'>this</span> <span m='802260'>is</span> <span m='804070'>a</span>
  <span m='804550'>binary</span> <span m='804950'>string.</span> <span
  m='807340'>Now,</span> <span m='807420'>you</span> <span m='807600'>can</span>
  <span m='807770'>also</span> <span m='808080'>think</span> <span
  m='808340'>of</span> <span m='808440'>a</span> <span m='808510'>binary</span>
  <span m='808880'>string</span> <span m='809430'>as</span> <span
  m='809670'>representing</span> <span m='810283'>a</span> <span
  m='810716'>number,</span> <span m='811480'>in</span> <span
  m='811680'>binary.</span> <span m='813280'>So</span> <span
  m='813500'>you</span> <span m='813580'>can</span> <span m='813730'>also</span>
  <span m='813980'>think</span> <span m='814230'>of</span> <span
  m='814380'>a</span> <span m='814450'>program,</span> <span
  m='814870'>then,</span> <span m='815480'>as</span> <span m='815680'>a</span>
  <span m='815750'>natural</span> <span m='816130'>number--</span> <span
  m='817030'>some</span> <span m='817220'>number</span> <span
  m='817470'>between</span> <span m='817780'>0</span> <span
  m='818250'>and</span> <span m='818590'>infinity.</span> <span
  m='818960'>And</span> <span m='819330'>an</span> <span
  m='819630'>integer.</span> <span m='821870'>So</span> <span
  m='822070'>usually</span> <span m='822420'>we</span> <span
  m='822540'>represent</span> <span m='823020'>this</span> <span
  m='823260'>as</span> <span m='824280'>math</span> <span m='824580'>bold</span>
  <span m='824950'>N.</span> <span m='825850'>That's</span> <span
  m='826000'>just</span> <span m='826390'>0,</span> <span m='826640'>1,</span>
  <span m='826850'>2,</span> <span m='827040'>3.</span> <span
  m='828470'>You</span> <span m='828600'>can</span> <span
  m='828730'>think</span> <span m='828950'>of</span> <span
  m='829320'>every</span> <span m='829650'>program</span> <span
  m='830050'>is</span> <span m='830180'>ultimately</span> <span
  m='830670'>reducing</span> <span m='831070'>to</span> <span
  m='831340'>an</span> <span m='831470'>integer.</span> <span m='831960'>It's
  a</span> <span m='832090'>big</span> <span m='832370'>integer,</span> <span
  m='832730'>but,</span> <span m='832940'>hey.</span> <span m='833615'>It's
  an</span> <span m='834050'>integer.</span> <span m='835770'>So</span> <span
  m='835910'>that's</span> <span m='836130'>the</span> <span
  m='836200'>space</span> <span m='836490'>of</span> <span m='836580'>all</span>
  <span m='836730'>programs.</span> </p><p><span m='838060'>Now,</span> <span
  m='838210'>I</span> <span m='838260'>want</span> <span m='838430'>to</span>
  <span m='838490'>think</span> <span m='838660'>about</span> <span
  m='838870'>the</span> <span m='838950'>space</span> <span m='839220'>of</span>
  <span m='839330'>all</span> <span m='839480'>decision</span> <span
  m='839870'>problems.</span> <span m='842900'>So</span> <span
  m='843050'>how</span> <span m='843240'>can</span> <span m='843380'>I</span>
  <span m='843450'>define</span> <span m='843790'>a</span> <span
  m='843860'>decision</span> <span m='844290'>problem?</span> <span
  m='846640'>Well,</span> <span m='846810'>the</span> <span
  m='846890'>natural</span> <span m='847290'>way</span> <span
  m='847440'>to</span> <span m='847520'>think</span> <span m='847700'>of</span>
  <span m='847800'>a</span> <span m='847870'>decision</span> <span
  m='848240'>problem</span> <span m='848640'>is</span> <span
  m='849530'>as</span> <span m='849830'>a</span> <span
  m='849900'>function</span> <span m='850670'>that</span> <span
  m='850820'>maps</span> <span m='851150'>inputs</span> <span
  m='851740'>to</span> <span m='852070'>yes</span> <span m='852350'>or</span>
  <span m='852430'>no.</span> <span m='859350'>Function</span> <span
  m='859810'>from</span> <span m='860190'>inputs</span> <span
  m='863060'>to</span> <span m='866490'>yes</span> <span m='866780'>or</span>
  <span m='866870'>no.</span> <span m='868430'>Or</span> <span
  m='868600'>you</span> <span m='868700'>can</span> <span
  m='868830'>think</span> <span m='869000'>of</span> <span
  m='869080'>that</span> <span m='869280'>as</span> <span m='869730'>1
  and</span> <span m='870060'>0.</span> </p><p><span m='872310'>So</span> <span
  m='872480'>what's</span> <span m='872680'>an</span> <span
  m='872780'>input?</span> <span m='874310'>Well, an</span> <span
  m='874490'>input</span> <span m='874810'>is</span> <span m='875010'>a</span>
  <span m='875050'>binary</span> <span m='875450'>string.</span> <span
  m='876220'>So</span> <span m='876600'>an</span> <span m='876770'>input</span>
  <span m='877090'>is</span> <span m='877680'>a</span> <span
  m='877780'>number--</span> <span m='878280'>a</span> <span
  m='878370'>natural</span> <span m='878630'>number.</span> <span
  m='881790'>Input</span> <span m='883290'>is a</span> <span
  m='883740'>binary</span> <span m='884080'>string,</span> <span
  m='888328'>which</span> <span m='888800'>we</span> <span m='888910'>can</span>
  <span m='889080'>think</span> <span m='889280'>of</span> <span
  m='889420'>as</span> <span m='889550'>being</span> <span m='889830'>in</span>
  <span m='890250'>N.</span> <span m='891580'>So</span> <span
  m='891700'>we've</span> <span m='891820'>got</span> <span m='891950'>a</span>
  <span m='892000'>function</span> <span m='892920'>from</span> <span
  m='893270'>N</span> <span m='894270'>to</span> <span m='894570'>0,1.</span>
  </p><p><span m='898570'>So</span> <span m='899810'>another</span> <span
  m='900120'>way</span> <span m='900260'>to</span> <span
  m='900360'>represent</span> <span m='901200'>one</span> <span
  m='901450'>of</span> <span m='901520'>these</span> <span
  m='901710'>functions</span> <span m='903000'>is</span> <span
  m='903250'>as</span> <span m='903420'>a</span> <span m='903510'>table.</span>
  <span m='904220'>I</span> <span m='904270'>could</span> <span
  m='904410'>just</span> <span m='904560'>write</span> <span
  m='904780'>down</span> <span m='904970'>all</span> <span m='905090'>the</span>
  <span m='905200'>answers.</span> <span m='906070'>So</span> <span
  m='906210'>I've</span> <span m='906360'>got,</span> <span
  m='906900'>well,</span> <span m='907060'>the</span> <span
  m='907160'>input</span> <span m='907420'>could</span> <span
  m='907580'>be</span> <span m='907730'>0--</span> <span m='908680'>the</span>
  <span m='909050'>number</span> <span m='909350'>0.</span> <span
  m='910110'>And</span> <span m='910270'>then,</span> <span
  m='910600'>maybe</span> <span m='910820'>it's</span> <span m='910960'>a</span>
  <span m='910990'>0.</span> <span m='912000'>Input could</span> <span
  m='912300'>be</span> <span m='912430'>could be 1</span> <span
  m='912800'>and</span> <span m='912900'>then,</span> <span
  m='913030'>maybe,</span> <span m='913510'>output</span> <span
  m='913650'>is</span> <span m='913810'>0.</span> <span m='914260'>Then,</span>
  <span m='914480'>the</span> <span m='914570'>input</span> <span
  m='914810'>could</span> <span m='914940'>be</span> <span m='915070'>2,</span>
  <span m='915554'>3,</span> <span m='916038'>4,</span> <span
  m='917006'>5,</span> <span m='917974'>1,</span> <span m='918458'>0,</span>
  <span m='918942'>1,</span> <span m='919426'>1,</span> <span
  m='919910'>whatever.</span> <span m='921750'>So</span> <span
  m='921790'>I</span> <span m='921850'>could</span> <span
  m='921990'>write</span> <span m='922160'>the</span> <span m='922260'>table
  of</span> <span m='922670'>all</span> <span m='923030'>answers.</span> <span
  m='924510'>This</span> <span m='924660'>is</span> <span
  m='925340'>another</span> <span m='925610'>way</span> <span
  m='925730'>to</span> <span m='925880'>write</span> <span
  m='926100'>down</span> <span m='926370'>such</span> <span m='926590'>a</span>
  <span m='926640'>function.</span> </p><p><span m='928430'>What</span> <span
  m='928540'>we</span> <span m='928650'>have,</span> <span
  m='928910'>here,</span> <span m='929530'>is</span> <span m='929690'>an</span>
  <span m='929850'>infinite</span> <span m='930350'>string</span> <span
  m='930720'>of</span> <span m='930840'>bits.</span> <span
  m='932110'>Each</span> <span m='932320'>of</span> <span m='932430'>them</span>
  <span m='932580'>could</span> <span m='932740'>be</span> <span
  m='932850'>0</span> <span m='933220'>or</span> <span m='933630'>1.</span>
  <span m='934290'>It</span> <span m='934670'>would</span> <span m='934870'>be
  a</span> <span m='935000'>different</span> <span m='935330'>problem.</span>
  <span m='936810'>But</span> <span m='936940'>they</span> <span
  m='937090'>all</span> <span m='937300'>exist.</span> <span
  m='937850'>Any</span> <span m='938140'>infinite</span> <span
  m='938480'>string</span> <span m='938730'>of</span> <span
  m='938800'>bits</span> <span m='939440'>represents</span> <span
  m='939880'>a</span> <span m='939940'>decision</span> <span
  m='940340'>problem.</span> <span m='941060'>They're</span> <span
  m='941220'>the same</span> <span m='941470'>thing.</span> <span
  m='942750'>So</span> <span m='942900'>a</span> <span
  m='942990'>decision</span> <span m='943360'>problem</span> <span
  m='944230'>is</span> <span m='944360'>an</span> <span
  m='944490'>infinite</span> <span m='944900'>string</span> <span
  m='945140'>of</span> <span m='945230'>bits.</span> <span m='945950'>A</span>
  <span m='946040'>program</span> <span m='947540'>is</span> <span
  m='947660'>a</span> <span m='947720'>finite</span> <span
  m='948160'>string</span> <span m='948390'>of</span> <span
  m='948500'>bits.</span> <span m='949676'>These</span> <span
  m='950070'>are</span> <span m='950130'>different</span> <span
  m='950780'>things.</span> </p><p><span m='952260'>One</span> <span
  m='952390'>way</span> <span m='952510'>to</span> <span m='952580'>see</span>
  <span m='952770'>that</span> <span m='952930'>they're</span> <span
  m='953050'>different</span> <span m='954170'>is</span> <span
  m='954770'>put</span> <span m='954920'>a</span> <span
  m='955000'>decimal</span> <span m='955430'>point,</span> <span
  m='956120'>here.</span> <span m='957640'>Now,</span> <span
  m='957800'>this</span> <span m='958000'>infinite</span> <span
  m='958370'>string</span> <span m='958630'>of</span> <span
  m='958720'>bits</span> <span m='959630'>is</span> <span m='959810'>a</span>
  <span m='959850'>number--</span> <span m='960620'>a</span> <span
  m='960720'>real</span> <span m='961040'>number--</span> <span
  m='961480'>between</span> <span m='961860'>0</span> <span
  m='962190'>and</span> <span m='962280'>1.</span> <span m='963710'>It's</span>
  <span m='963860'>written</span> <span m='964080'>in</span> <span
  m='964190'>binary.</span> <span m='964720'>You</span> <span
  m='964840'>may</span> <span m='964940'>not</span> <span m='965120'>be</span>
  <span m='965210'>used</span> <span m='965420'>to</span> <span
  m='965510'>binary</span> <span m='965950'>point.</span> <span
  m='967800'>This</span> <span m='967990'>dot</span> <span m='968240'>is</span>
  <span m='968340'>not a</span> <span m='968520'>decimal</span> <span
  m='968840'>point. It's</span> <span m='969080'>a</span> <span
  m='969130'>binary</span> <span m='969460'>point.</span> <span
  m='970180'>But,</span> <span m='970310'>hey.</span> <span
  m='972970'>Any</span> <span m='973240'>real</span> <span
  m='973450'>number</span> <span m='973730'>can</span> <span
  m='973890'>be</span> <span m='973970'>expressed</span> <span m='974410'>by
  an</span> <span m='974540'>infinite</span> <span m='974970'>string</span>
  <span m='975340'>of</span> <span m='975470'>bits</span> <span
  m='976040'>in</span> <span m='976160'>this</span> <span
  m='976330'>way--</span> <span m='977250'>any</span> <span
  m='977420'>real</span> <span m='977620'>number</span> <span
  m='977850'>between</span> <span m='978110'>0</span> <span
  m='978210'>and</span> <span m='978430'>1.</span> </p><p><span
  m='982210'>So</span> <span m='984280'>a</span> <span
  m='984670'>decision</span> <span m='985070'>problem</span> <span
  m='990460'>is</span> <span m='991090'>basically</span> <span
  m='991940'>something</span> <span m='992280'>in</span> <span
  m='992610'>R,</span> <span m='993040'>the</span> <span m='993480'>set</span>
  <span m='993680'>of</span> <span m='993770'>all</span> <span
  m='993930'>real</span> <span m='994160'>numbers,</span> <span
  m='995260'>whereas</span> <span m='995520'>a</span> <span
  m='995590'>program</span> <span m='996590'>is</span> <span
  m='996820'>something in</span> <span m='997200'>N,</span> <span
  m='997300'>the</span> <span m='997740'>set</span> <span m='997950'>of</span>
  <span m='998050'>all</span> <span m='998200'>integers.</span> <span
  m='1001750'>And</span> <span m='1002620'>the</span> <span
  m='1002700'>thing</span> <span m='1002910'>is,</span> <span
  m='1003850'>the</span> <span m='1003950'>number</span> <span
  m='1004180'>of</span> <span m='1004230'>real</span> <span
  m='1004440'>numbers</span> <span m='1005360'>is</span> <span
  m='1005680'>much,</span> <span m='1006050'>much</span> <span
  m='1006210'>bigger</span> <span m='1007120'>than</span> <span
  m='1007630'>the</span> <span m='1007770'>number</span> <span
  m='1008370'>of</span> <span m='1008910'>integers.</span> <span
  m='1010460'>In</span> <span m='1010610'>a</span> <span
  m='1010660'>formal</span> <span m='1011000'>sense,</span> <span
  m='1011270'>we</span> <span m='1011360'>call</span> <span
  m='1011560'>this</span> <span m='1011730'>one</span> <span
  m='1012100'>uncountably</span> <span m='1012710'>infinite,</span> <span
  m='1013110'>and</span> <span m='1013240'>this</span> <span
  m='1013400'>one</span> <span m='1013580'>is</span> <span
  m='1013700'>countably</span> <span m='1014120'>infinite.</span> <span
  m='1015060'>I'm</span> <span m='1015200'>not</span> <span
  m='1015330'>going</span> <span m='1015430'>to</span> <span m='1015470'>prove
  that</span> <span m='1015840'>here,</span> <span m='1016010'>today.</span>
  <span m='1016830'>You</span> <span m='1016950'>may</span> <span
  m='1017100'>have</span> <span m='1017180'>seen</span> <span
  m='1017430'>that</span> <span m='1017660'>proof.</span> <span m='1019010'>It's
  pretty</span> <span m='1019300'>simple.</span> </p><p><span
  m='1021320'>And</span> <span m='1021620'>that's</span> <span
  m='1021810'>bad</span> <span m='1022000'>news.</span> <span
  m='1022350'>That</span> <span m='1022440'>means</span> <span
  m='1022750'>that</span> <span m='1022900'>there</span> <span
  m='1023080'>are</span> <span m='1023170'>way</span> <span
  m='1023610'>more</span> <span m='1024030'>problems</span> <span
  m='1024829'>than</span> <span m='1024970'>there</span> <span
  m='1025140'>are</span> <span m='1025300'>programs</span> <span
  m='1025859'>to</span> <span m='1025970'>solve</span> <span
  m='1026300'>them.</span> <span m='1027550'>So</span> <span
  m='1027609'>this</span> <span m='1027849'>means</span> <span
  m='1029250'>almost</span> <span m='1029770'>every</span> <span
  m='1030910'>problem</span> <span m='1031369'>that</span> <span
  m='1031510'>we</span> <span m='1031650'>could</span> <span
  m='1032470'>conceive</span> <span m='1032890'>of</span> <span
  m='1034079'>is</span> <span m='1034220'>unsolvable</span> <span
  m='1035569'>by</span> <span m='1035890'>every</span> <span
  m='1036240'>program.</span> </p><p><span m='1050600'>And</span> <span
  m='1051245'>this</span> <span m='1051570'>is</span> <span
  m='1051690'>pretty</span> <span m='1051910'>depressing</span> <span
  m='1052460'>the</span> <span m='1052520'>first</span> <span
  m='1052760'>time</span> <span m='1053000'>I saw</span> <span
  m='1053240'>it.</span> <span m='1053690'>That's</span> <span
  m='1053840'>why</span> <span m='1053940'>we</span> <span m='1054060'>put
  it</span> <span m='1054220'>at</span> <span m='1054330'>the</span> <span
  m='1054430'>end of</span> <span m='1054630'>the</span> <span
  m='1054720'>class.</span> <span m='1057950'>I think</span> <span
  m='1058120'>you</span> <span m='1058390'>get</span> <span
  m='1058560'>all</span> <span m='1058760'>existential.</span> <span
  m='1060160'>I</span> <span m='1060250'>mean</span> <span
  m='1060400'>the</span> <span m='1060480'>thing</span> <span
  m='1060710'>is</span> <span m='1060920'>every</span> <span
  m='1061210'>program</span> <span m='1061810'>only</span> <span
  m='1062040'>solves</span> <span m='1062370'>one</span> <span
  m='1062720'>problem.</span> <span m='1063370'>It</span> <span
  m='1063510'>takes</span> <span m='1063720'>some</span> <span
  m='1063890'>input,</span> <span m='1064270'>and it's</span> <span
  m='1064490'>either</span> <span m='1064700'>going</span> <span
  m='1064800'>to</span> <span m='1064880'>output</span> <span
  m='1065180'>yes</span> <span m='1065390'>or</span> <span
  m='1065460'>no.</span> <span m='1066260'>And</span> <span
  m='1066410'>if</span> <span m='1066510'>it's</span> <span
  m='1066660'>wrong</span> <span m='1066990'>on</span> <span
  m='1067080'>any</span> <span m='1067300'>of</span> <span
  m='1067350'>the</span> <span m='1067440'>inputs,</span> <span
  m='1067880'>then</span> <span m='1068020'>it's</span> <span
  m='1068150'>wrong.</span> <span m='1068580'>So</span> <span
  m='1068830'>it's</span> <span m='1069440'>going</span> <span
  m='1069570'>to</span> <span m='1069620'>give</span> <span
  m='1069790'>an</span> <span m='1069880'>answer.</span> <span
  m='1071010'>Say</span> <span m='1071140'>it's a</span> <span
  m='1071270'>deterministic</span> <span m='1072180'>algorithm.</span> <span
  m='1072570'>No</span> <span m='1072750'>random</span> <span
  m='1073060'>numbers</span> <span m='1073500'>or</span> <span
  m='1073610'>things.</span> <span m='1075950'>Then,</span> <span
  m='1076500'>there's</span> <span m='1076640'>just</span> <span
  m='1076810'>not</span> <span m='1077020'>enough</span> <span
  m='1077250'>programs</span> <span m='1077670'>to</span> <span
  m='1077760'>go</span> <span m='1077850'>around if</span> <span
  m='1078290'>each</span> <span m='1078430'>program</span> <span
  m='1078810'>only</span> <span m='1078980'>solves</span> <span
  m='1079270'>one</span> <span m='1079470'>problem.</span> </p><p><span
  m='1081800'>This is</span> <span m='1082010'>the</span> <span
  m='1082110'>end</span> <span m='1082240'>of</span> <span
  m='1082290'>the</span> <span m='1082380'>proof.</span> <span
  m='1082610'>Any</span> <span m='1082850'>questions</span> <span
  m='1083280'>about</span> <span m='1083490'>that?</span> <span
  m='1085110'>Kind</span> <span m='1085420'>of</span> <span
  m='1085480'>weird.</span> <span m='1087390'>Because</span> <span
  m='1087710'>yet</span> <span m='1087920'>somehow,</span> <span
  m='1088350'>most</span> <span m='1088640'>of</span> <span
  m='1088690'>the</span> <span m='1088780'>problems</span> <span
  m='1089230'>that</span> <span m='1089360'>we</span> <span
  m='1089610'>think</span> <span m='1089860'>about</span> <span
  m='1090390'>are</span> <span m='1090560'>computable.</span> <span
  m='1091530'>I don't</span> <span m='1091840'>know</span> <span
  m='1091980'>why</span> <span m='1092140'>that</span> <span
  m='1092350'>is.</span> <span m='1093100'>But</span> <span
  m='1093200'>mathematically,</span> <span m='1094160'>most</span> <span
  m='1094430'>problems</span> <span m='1095520'>that</span> <span
  m='1095610'>you</span> <span m='1095820'>could</span> <span
  m='1096150'>think</span> <span m='1096420'>of</span> <span
  m='1096920'>are</span> <span m='1097090'>uncomputable.</span> </p><p><span
  m='1101450'>Question?</span> </p><p><span m='1103395'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='1107850'>PROFESSOR: Yeah.</span> <span
  m='1108750'>It's</span> <span m='1108890'>something</span> <span
  m='1109760'>like,</span> <span m='1110910'>the</span> <span
  m='1111020'>way</span> <span m='1111290'>that</span> <span
  m='1111560'>we</span> <span m='1111760'>describe</span> <span
  m='1112270'>problems</span> <span m='1112870'>is</span> <span
  m='1112970'>usually</span> <span m='1113680'>almost</span> <span
  m='1114030'>algorithmic,</span> <span m='1114550'>anyway.</span> <span
  m='1115990'>And</span> <span m='1116120'>so,</span> <span
  m='1116220'>usually,</span> <span m='1117350'>most</span> <span
  m='1117570'>problems</span> <span m='1117810'>we</span> <span
  m='1117940'>think</span> <span m='1118150'>of</span> <span
  m='1118280'>are</span> <span m='1118390'>in</span> <span
  m='1118790'>EXP.</span> <span m='1119610'>And</span> <span
  m='1119780'>so</span> <span m='1119920'>they're</span> <span
  m='1120080'>definitely</span> <span m='1120400'>computable.</span> <span
  m='1122300'>There's</span> <span m='1122430'>some</span> <span
  m='1122730'>metatheorem</span> <span m='1123350'>about</span> <span
  m='1123650'>how</span> <span m='1123820'>we</span> <span
  m='1123960'>think</span> <span m='1124120'>about</span> <span
  m='1124350'>problems,</span> <span m='1125560'>not</span> <span
  m='1125820'>just</span> <span m='1126020'>programs.</span> </p><p><span
  m='1131110'>So</span> <span m='1131330'>that's</span> <span
  m='1131810'>all</span> <span m='1132010'>I'm</span> <span
  m='1132090'>going</span> <span m='1132190'>to</span> <span
  m='1132250'>say</span> <span m='1132420'>about</span> <span
  m='1132700'>R.</span> <span m='1132960'>So</span> <span m='1133120'>out</span>
  <span m='1133340'>here,</span> <span m='1133970'>we</span> <span
  m='1134130'>have</span> <span m='1134990'>halting</span> <span
  m='1135300'>problem</span> <span m='1136860'>and,</span> <span
  m='1136970'>actually,</span> <span m='1137280'>most</span> <span
  m='1137600'>problems.</span> <span m='1138070'>You</span> <span
  m='1138180'>can think</span> <span m='1138540'>of this</span> <span
  m='1138730'>as</span> <span m='1138840'>an</span> <span
  m='1138950'>infinite</span> <span m='1139330'>line</span> <span
  m='1139680'>and</span> <span m='1139790'>then</span> <span
  m='1139890'>there's</span> <span m='1140050'>just</span> <span
  m='1140270'>this</span> <span m='1140950'>small</span> <span
  m='1141360'>portion</span> <span m='1141980'>which</span> <span
  m='1142200'>are</span> <span m='1142260'>things</span> <span
  m='1142520'>you</span> <span m='1142630'>can solve.</span> <span
  m='1143840'>But</span> <span m='1144000'>we</span> <span
  m='1144210'>care</span> <span m='1144420'>about</span> <span
  m='1144690'>this</span> <span m='1144860'>portion</span> <span
  m='1145290'>because</span> <span m='1145510'>that's</span> <span
  m='1145880'>the</span> <span m='1146040'>interesting</span> <span
  m='1146630'>stuff.</span> <span m='1147040'>That's</span> <span
  m='1147250'>what</span> <span m='1147410'>algorithms</span> <span
  m='1147730'>are</span> <span m='1147830'>about.</span> <span
  m='1148750'>Out</span> <span m='1148900'>here</span> <span
  m='1149840'>kind</span> <span m='1150260'>of</span> <span
  m='1150950'>nothing</span> <span m='1151360'>happens.</span> </p><p><span
  m='1153560'>So</span> <span m='1153670'>I</span> <span m='1153710'>want</span>
  <span m='1153850'>to</span> <span m='1153910'>talk</span> <span
  m='1154090'>about</span> <span m='1154280'>this</span> <span
  m='1154810'>notch,</span> <span m='1156240'>which</span> <span
  m='1156440'>is</span> <span m='1156570'>NP.</span> <span m='1163210'>I
  imagine</span> <span m='1163360'>you've</span> <span m='1163550'>heard</span>
  <span m='1163710'>about</span> <span m='1163920'>NP.</span> <span
  m='1167252'>It's</span> <span m='1167740'>pretty</span> <span
  m='1167940'>cool,</span> <span m='1169380'>but</span> <span
  m='1169500'>also</span> <span m='1169730'>kind</span> <span
  m='1169900'>of</span> <span m='1169950'>confusing.</span> <span
  m='1174616'>But</span> <span m='1175070'>it's</span> <span
  m='1175250'>actually</span> <span m='1175520'>very</span> <span
  m='1175880'>closely</span> <span m='1176270'>related</span> <span
  m='1176760'>to</span> <span m='1177560'>something</span> <span
  m='1177890'>we've</span> <span m='1178000'>seen</span> <span
  m='1178210'>with</span> <span m='1178480'>dynamic</span> <span
  m='1178650'>programming,</span> <span m='1179790'>which is</span> <span
  m='1180000'>guessing.</span> </p><p><span m='1182320'>So</span> <span
  m='1182940'>I'm</span> <span m='1183010'>going</span> <span
  m='1183120'>to</span> <span m='1183170'>give</span> <span
  m='1183340'>you</span> <span m='1183450'>a</span> <span
  m='1183510'>couple</span> <span m='1183820'>of</span> <span
  m='1183900'>definitions</span> <span m='1184460'>of</span> <span
  m='1184570'>NP--</span> <span m='1185940'>not</span> <span
  m='1186060'>formal</span> <span m='1186350'>definition,</span> <span
  m='1186920'>but</span> <span m='1187480'>high</span> <span
  m='1187680'>level</span> <span m='1187940'>definitions.</span> <span
  m='1192210'>So</span> <span m='1192370'>just</span> <span
  m='1192600'>like</span> <span m='1192830'>P,</span> <span
  m='1193080'>EXP,</span> <span m='1193470'>and R,</span> <span
  m='1193780'>it's</span> <span m='1193930'>a</span> <span
  m='1193970'>set</span> <span m='1194200'>of</span> <span
  m='1194350'>decision</span> <span m='1194740'>problems.</span> <span
  m='1197350'>And</span> <span m='1199400'>it's</span> <span
  m='1199560'>going</span> <span m='1199700'>to</span> <span
  m='1199900'>look</span> <span m='1200190'>very</span> <span
  m='1200400'>similar</span> <span m='1201980'>to</span> <span
  m='1202180'>P.</span> <span m='1202890'>NP</span> <span
  m='1203230'>does</span> <span m='1203400'>not</span> <span
  m='1203650'>stand</span> <span m='1203920'>for</span> <span
  m='1204080'>not</span> <span m='1204630'>a</span> <span
  m='1205000'>polynomial.</span> <span m='1205640'>It</span> <span
  m='1205990'>stands</span> <span m='1206350'>for</span> <span
  m='1207180'>nondeterministic</span> <span m='1208190'>polynomial.</span> <span
  m='1208750'>We'll</span> <span m='1208860'>get</span> <span
  m='1209030'>to</span> <span m='1209120'>nondeterministic</span> <span
  m='1209870'>in</span> <span m='1209980'>a</span> <span
  m='1210020'>moment.</span> </p><p><span m='1212330'>The</span> <span
  m='1212460'>first</span> <span m='1212750'>line</span> <span
  m='1213010'>is</span> <span m='1213140'>the</span> <span
  m='1213230'>same.</span> <span m='1214436'>It's</span> <span
  m='1214790'>all</span> <span m='1215230'>decision</span> <span
  m='1215620'>problems</span> <span m='1215970'>you</span> <span
  m='1216080'>can</span> <span m='1216210'>solve</span> <span
  m='1216580'>in</span> <span m='1216840'>polynomial</span> <span
  m='1217430'>time.</span> <span m='1217740'>That</span> <span
  m='1217930'>sounds</span> <span m='1218140'>like</span> <span
  m='1218340'>P.</span> <span m='1219130'>But</span> <span
  m='1219270'>then,</span> <span m='1219530'>there's</span> <span
  m='1219720'>this</span> <span m='1220200'>extra</span> <span
  m='1220540'>line,</span> <span m='1221610'>which</span> <span
  m='1221900'>is</span> <span m='1222260'>via</span> <span m='1223310'>a</span>
  <span m='1224520'>"lucky"</span> <span m='1224980'>algorithm.</span>
  </p><p><span m='1233730'>Let</span> <span m='1233850'>me</span> <span
  m='1233970'>tell</span> <span m='1234210'>you--</span> <span
  m='1235470'>at</span> <span m='1235640'>a</span> <span m='1235660'>high</span>
  <span m='1235850'>level</span> <span m='1236690'>what</span> <span
  m='1236840'>a</span> <span m='1236910'>lucky</span> <span
  m='1237180'>algorithm</span> <span m='1237580'>does</span> <span
  m='1238400'>is</span> <span m='1238560'>it</span> <span m='1238670'>can</span>
  <span m='1238780'>make</span> <span m='1238990'>guesses.</span> <span
  m='1240720'>But</span> <span m='1240840'>unlike</span> <span
  m='1241310'>the</span> <span m='1241400'>way</span> <span
  m='1241530'>that</span> <span m='1241650'>we've</span> <span
  m='1241810'>been</span> <span m='1241970'>making</span> <span
  m='1242280'>guesses with</span> <span m='1242670'>dynamic</span> <span
  m='1243070'>programming-- with</span> <span m='1243550'>dynamic</span> <span
  m='1243940'>programming</span> <span m='1244360'>we</span> <span
  m='1244450'>had</span> <span m='1244560'>to</span> <span
  m='1244610'>guess</span> <span m='1244850'>something.</span> <span
  m='1245190'>We</span> <span m='1245290'>tried</span> <span
  m='1245650'>all</span> <span m='1245860'>the</span> <span
  m='1245940'>possibilities.</span> <span m='1247190'>A</span> <span
  m='1247300'>lucky</span> <span m='1247670'>algorithm</span> <span
  m='1248510'>just</span> <span m='1248790'>needs</span> <span
  m='1249020'>to</span> <span m='1249120'>try</span> <span
  m='1249400'>one</span> <span m='1249780'>possibility</span> <span
  m='1250720'>because</span> <span m='1250940'>it's</span> <span
  m='1251090'>really</span> <span m='1251330'>lucky.</span> <span
  m='1251680'>It</span> <span m='1251780'>always</span> <span
  m='1252110'>guesses</span> <span m='1252480'>the</span> <span
  m='1252610'>right</span> <span m='1253160'>choice.</span> <span
  m='1254860'>It's</span> <span m='1254960'>like</span> <span
  m='1255110'>magic.</span> <span m='1256440'>This</span> <span
  m='1256610'>is</span> <span m='1256720'>not</span> <span m='1256930'>a</span>
  <span m='1257000'>realistic</span> <span m='1258200'>model</span> <span
  m='1258540'>of</span> <span m='1258610'>computation,</span> <span
  m='1259310'>but</span> <span m='1259350'>it</span> <span m='1259450'>is</span>
  <span m='1259590'>a</span> <span m='1259640'>model</span> <span
  m='1259890'>of</span> <span m='1260000'>computation</span> <span
  m='1261070'>called</span> <span m='1262170'>nondeterministic</span> <span
  m='1264130'>model.</span> </p><p><span m='1269040'>And</span> <span
  m='1269320'>it's</span> <span m='1269510'>going</span> <span
  m='1269650'>to</span> <span m='1269720'>sound</span> <span
  m='1270020'>crazy</span> <span m='1270440'>because</span> <span
  m='1270780'>it</span> <span m='1270880'>is</span> <span
  m='1271030'>crazy,</span> <span m='1271950'>but</span> <span
  m='1273270'>nonetheless</span> <span m='1273760'>it's</span> <span
  m='1273890'>actually</span> <span m='1274310'>really</span> <span
  m='1274560'>useful--</span> <span m='1275080'>even</span> <span
  m='1275350'>though</span> <span m='1275980'>you</span> <span
  m='1276100'>could</span> <span m='1276250'>never</span> <span
  m='1276580'>really</span> <span m='1277060'>build</span> <span
  m='1277410'>this</span> <span m='1277600'>on</span> <span m='1277720'>a</span>
  <span m='1277820'>real</span> <span m='1278050'>computer.</span> <span
  m='1279590'>The</span> <span m='1279710'>nondeterministic</span> <span
  m='1280380'>model</span> <span m='1280640'>is</span> <span
  m='1280710'>not</span> <span m='1280950'>a</span> <span
  m='1280970'>model</span> <span m='1281260'>of</span> <span
  m='1281380'>real</span> <span m='1281600'>computation.</span> <span
  m='1281910'>It</span> <span m='1282220'>is</span> <span m='1282430'>a</span>
  <span m='1282480'>model</span> <span m='1282810'>of</span> <span
  m='1283000'>theoretical</span> <span m='1283690'>hypothetical</span> <span
  m='1284420'>computation.</span> <span m='1285410'>It</span> <span
  m='1285610'>gets</span> <span m='1285870'>at</span> <span
  m='1286190'>the</span> <span m='1286320'>root--</span> <span
  m='1286610'>at</span> <span m='1286780'>the</span> <span
  m='1286880'>core</span> <span m='1287300'>of</span> <span
  m='1287490'>what</span> <span m='1287730'>is</span> <span
  m='1288680'>possible</span> <span m='1289190'>to</span> <span
  m='1289260'>solve.</span> <span m='1289730'>You'll</span> <span
  m='1289880'>see</span> <span m='1290160'>why,</span> <span
  m='1290490'>in</span> <span m='1290980'>a</span> <span
  m='1291000'>little</span> <span m='1291190'>bit.</span> </p><p><span
  m='1292800'>So</span> <span m='1292980'>in</span> <span
  m='1293090'>this</span> <span m='1293240'>model,</span> <span
  m='1297550'>an</span> <span m='1297680'>algorithm--</span> <span
  m='1298290'>it</span> <span m='1298520'>can</span> <span
  m='1298670'>compute</span> <span m='1299030'>stuff,</span> <span
  m='1299800'>but,</span> <span m='1299920'>in</span> <span
  m='1300000'>particular,</span> <span m='1301030'>it</span> <span
  m='1301220'>makes</span> <span m='1302170'>guesses.</span> <span
  m='1303682'>So</span> <span m='1304130'>should</span> <span
  m='1304250'>I</span> <span m='1304310'>do</span> <span m='1304460'>this</span>
  <span m='1304760'>or</span> <span m='1304810'>should</span> <span
  m='1305010'>I</span> <span m='1305070'>do</span> <span
  m='1305210'>this?</span> <span m='1306030'>And</span> <span
  m='1306290'>it</span> <span m='1306370'>just</span> <span
  m='1306840'>says--</span> <span m='1307740'>It</span> <span
  m='1307990'>doesn't</span> <span m='1308260'>flip</span> <span
  m='1308440'>a</span> <span m='1308510'>coin.</span> <span
  m='1308790'>It's</span> <span m='1308910'>not</span> <span
  m='1309090'>random.</span> <span m='1310010'>It</span> <span
  m='1310120'>just</span> <span m='1311370'>thinks--</span> <span
  m='1311700'>it</span> <span m='1312090'>just</span> <span
  m='1312320'>makes</span> <span m='1312760'>a</span> <span
  m='1313170'>guess.</span> <span m='1313990'>Well, I don't know.</span> <span
  m='1314800'>Let's</span> <span m='1314960'>go</span> <span
  m='1315050'>this</span> <span m='1315210'>way.</span> <span
  m='1316390'>And</span> <span m='1316510'>then it</span> <span
  m='1316700'>comes</span> <span m='1316960'>another</span> <span
  m='1317770'>fork</span> <span m='1318130'>in</span> <span
  m='1318200'>the</span> <span m='1318280'>road.</span> <span m='1318540'>It's
  like,</span> <span m='1318850'>well, I don't know.</span> <span
  m='1319250'>I'll</span> <span m='1319430'>go</span> <span
  m='1319550'>this</span> <span m='1319740'>way.</span> <span
  m='1320410'>That's</span> <span m='1320600'>the</span> <span
  m='1320680'>guessing.</span> <span m='1321660'>You</span> <span
  m='1321800'>give</span> <span m='1321990'>it</span> <span m='1322040'>a</span>
  <span m='1322090'>list</span> <span m='1322300'>of</span> <span
  m='1322380'>choices</span> <span m='1322880'>and</span> <span
  m='1323090'>somehow</span> <span m='1323790'>a</span> <span m='1323940'>choice
  is</span> <span m='1324380'>determined,</span> <span m='1326100'>by</span>
  <span m='1326250'>magic--</span> <span m='1327095'>nondeterministic</span>
  <span m='1328070'>magic.</span> </p><p><span m='1328910'>And</span> <span
  m='1329170'>then</span> <span m='1331270'>the</span> <span
  m='1331380'>fun</span> <span m='1331580'>part</span> <span
  m='1331810'>is--</span> <span m='1338050'>I</span> <span
  m='1338200'>should</span> <span m='1338390'>say,</span> <span
  m='1338550'>at</span> <span m='1338690'>the</span> <span
  m='1338810'>end</span> <span m='1338970'>the</span> <span
  m='1339060'>algorithm</span> <span m='1339570'>either</span> <span
  m='1339830'>says</span> <span m='1343140'>yes</span> <span
  m='1343440'>or</span> <span m='1343540'>no.</span> <span m='1344660'>It</span>
  <span m='1344790'>gives</span> <span m='1344930'>you</span> <span
  m='1345040'>an</span> <span m='1345120'>output.</span> <span
  m='1348420'>The</span> <span m='1348500'>guesses</span> <span
  m='1349350'>are</span> <span m='1349510'>guaranteed--</span> <span
  m='1351600'>this is</span> <span m='1351800'>the</span> <span
  m='1351900'>magic</span> <span m='1352300'>part--</span> <span
  m='1354590'>to</span> <span m='1359580'>lead</span> <span
  m='1359830'>to</span> <span m='1359980'>a</span> <span m='1360050'>yes</span>
  <span m='1360370'>answer,</span> <span m='1363090'>if</span> <span
  m='1363290'>possible.</span> </p><p><span m='1367650'>So</span> <span
  m='1367750'>if</span> <span m='1367850'>you</span> <span
  m='1367950'>imagine</span> <span m='1368580'>the</span> <span
  m='1368690'>space</span> <span m='1369150'>of</span> <span
  m='1369600'>executions</span> <span m='1369935'>of</span> <span
  m='1370270'>this</span> <span m='1370450'>program,</span> <span
  m='1370800'>you</span> <span m='1370900'>start</span> <span
  m='1371170'>here,</span> <span m='1372020'>and</span> <span
  m='1372370'>you</span> <span m='1372460'>make</span> <span
  m='1372660'>some</span> <span m='1372800'>guess</span> <span m='1373180'>and
  you don't know</span> <span m='1373505'>which</span> <span
  m='1373830'>way</span> <span m='1373970'>to</span> <span
  m='1374040'>go.</span> <span m='1375190'>In</span> <span
  m='1375350'>dynamic</span> <span m='1375720'>programming,</span> <span
  m='1376070'>we</span> <span m='1376170'>try</span> <span
  m='1376430'>all</span> <span m='1376670'>of them.</span> <span
  m='1377520'>But</span> <span m='1377620'>this</span> <span
  m='1377770'>algorithm</span> <span m='1378130'>doesn't</span> <span
  m='1378370'>try</span> <span m='1378720'>all of them.</span> <span
  m='1378910'>It's</span> <span m='1379050'>like</span> <span
  m='1379220'>a</span> <span m='1379290'>branching</span> <span
  m='1379690'>universe</span> <span m='1380080'>model</span> <span
  m='1380390'>of</span> <span m='1380460'>the</span> <span
  m='1380560'>universe.</span> </p><p><span m='1381580'>So</span> <span
  m='1382675'>you</span> <span m='1382970'>make</span> <span
  m='1383380'>some</span> <span m='1383530'>choice,</span> <span
  m='1383930'>and</span> <span m='1384010'>then</span> <span
  m='1384130'>you</span> <span m='1384280'>make</span> <span
  m='1384470'>some</span> <span m='1384630'>other</span> <span
  m='1384780'>choice,</span> <span m='1385180'>and</span> <span
  m='1385270'>then</span> <span m='1385390'>you</span> <span
  m='1385490'>make</span> <span m='1385700'>some</span> <span
  m='1385860'>other</span> <span m='1386040'>choice.</span> <span
  m='1386430'>All  of</span> <span m='1386640'>these are</span> <span
  m='1387060'>guesses.</span> <span m='1388900'>And</span> <span
  m='1389900'>some</span> <span m='1390210'>of</span> <span
  m='1390260'>these</span> <span m='1390430'>things</span> <span
  m='1390620'>will</span> <span m='1390720'>lead</span> <span
  m='1390920'>to</span> <span m='1391010'>yes.</span> <span
  m='1391500'>Some</span> <span m='1391680'>of</span> <span
  m='1391730'>these</span> <span m='1391880'>things</span> <span
  m='1392040'>will</span> <span m='1392150'>lead</span> <span
  m='1392340'>to</span> <span m='1392440'>no.</span> <span
  m='1393120'>And</span> <span m='1393300'>in</span> <span
  m='1393390'>this</span> <span m='1393580'>magical</span> <span
  m='1394050'>model,</span> <span m='1394920'>if</span> <span
  m='1395070'>there's</span> <span m='1395310'>any</span> <span
  m='1395770'>yes</span> <span m='1396010'>out</span> <span
  m='1396200'>there,</span> <span m='1397040'>you</span> <span
  m='1397190'>will</span> <span m='1397340'>follow</span> <span
  m='1397710'>a</span> <span m='1397770'>path</span> <span m='1398100'>to</span>
  <span m='1398240'>a</span> <span m='1398310'>yes.</span> <span
  m='1399660'>If</span> <span m='1399880'>all</span> <span m='1400230'>of</span>
  <span m='1400320'>the</span> <span m='1400470'>answers</span> <span
  m='1400890'>are</span> <span m='1400980'>no,</span> <span
  m='1401490'>then,</span> <span m='1401670'>of</span> <span
  m='1401770'>course,</span> <span m='1402270'>it</span> <span
  m='1402470'>doesn't</span> <span m='1402660'>matter</span> <span
  m='1402900'>what</span> <span m='1403040'>choices</span> <span
  m='1403350'>you</span> <span m='1403460'>make.</span> <span m='1403640'>You
  will</span> <span m='1403810'>output</span> <span m='1404140'>no.</span> <span
  m='1405100'>But</span> <span m='1405210'>if</span> <span
  m='1405330'>there's</span> <span m='1405510'>ever</span> <span
  m='1405850'>a</span> <span m='1405890'>yes,</span> <span
  m='1406650'>magically</span> <span m='1407310'>these</span> <span
  m='1407540'>guesses</span> <span m='1407940'>find</span> <span
  m='1408310'>it.</span> </p><p><span m='1408580'>This</span> <span
  m='1408750'>is</span> <span m='1408870'>the</span> <span
  m='1408960'>sense</span> <span m='1409210'>of</span> <span
  m='1409310'>lucky.</span> <span m='1410390'>If</span> <span
  m='1410540'>you're</span> <span m='1410680'>trying</span> <span
  m='1411130'>to</span> <span m='1411190'>find</span> <span m='1411510'>a</span>
  <span m='1411560'>yes--</span> <span m='1412420'>that's</span> <span
  m='1412600'>your</span> <span m='1412730'>goal</span> <span
  m='1413010'>in</span> <span m='1413090'>life--</span> <span
  m='1413940'>then</span> <span m='1414130'>this</span> <span
  m='1414300'>corresponds</span> <span m='1414820'>to</span> <span
  m='1415050'>luck.</span> <span m='1417290'>And</span> <span
  m='1417840'>NP</span> <span m='1418330'>is</span> <span m='1418460'>the</span>
  <span m='1418510'>class</span> <span m='1418820'>of</span> <span
  m='1418980'>all</span> <span m='1419330'>problems</span> <span
  m='1419670'>solvable</span> <span m='1420260'>in</span> <span
  m='1420320'>polynomial</span> <span m='1420800'>time</span> <span
  m='1421400'>by a</span> <span m='1421680'>really</span> <span
  m='1422000'>lucky</span> <span m='1422410'>algorithm.</span> <span
  m='1423800'>Crazy.</span> <span m='1424930'>I</span> <span
  m='1425070'>know.</span> </p><p><span m='1430450'>Let's</span> <span
  m='1431840'>talk</span> <span m='1432260'>about</span> <span
  m='1432780'>Tetris.</span> <span m='1436320'>Tetris,</span> <span
  m='1436990'>I</span> <span m='1437060'>claim,</span> <span
  m='1437590'>is</span> <span m='1437780'>in</span> <span m='1437970'>NP.</span>
  <span m='1440250'>And</span> <span m='1440310'>we</span> <span
  m='1440390'>know</span> <span m='1440530'>how</span> <span
  m='1440650'>to</span> <span m='1440750'>solve it</span> <span
  m='1441010'>in</span> <span m='1441100'>exponential</span> <span
  m='1441620'>time.</span> <span m='1441870'>Just</span> <span
  m='1442070'>try</span> <span m='1442440'>all</span> <span
  m='1442580'>the</span> <span m='1442710'>options.</span> <span
  m='1444280'>But,</span> <span m='1444410'>in</span> <span
  m='1444510'>fact,</span> <span m='1445390'>I</span> <span
  m='1445470'>don't</span> <span m='1445870'>need</span> <span
  m='1446170'>to</span> <span m='1446280'>try</span> <span
  m='1446600'>all</span> <span m='1446820'>the</span> <span
  m='1446950'>options.</span> <span m='1447640'>It</span> <span
  m='1447750'>would</span> <span m='1447910'>be</span> <span
  m='1448050'>enough</span> <span m='1448360'>just</span> <span m='1448610'>use
  this</span> <span m='1449010'>nondeterministic</span> <span
  m='1449980'>magic.</span> <span m='1451150'>I</span> <span
  m='1451270'>could</span> <span m='1451440'>say,</span> <span
  m='1451710'>well,</span> <span m='1452540'>should</span> <span
  m='1452830'>I</span> <span m='1452880'>drop</span> <span
  m='1453170'>the</span> <span m='1453220'>piece</span> <span
  m='1453490'>here,</span> <span m='1453830'>here,</span> <span
  m='1454120'>here,</span> <span m='1454420'>here,</span> <span
  m='1454670'>here, or</span> <span m='1455010'>here.</span> <span
  m='1455880'>And</span> <span m='1456110'>should it</span> <span
  m='1456350'>be</span> <span m='1456510'>rotated</span> <span
  m='1456870'>like</span> <span m='1457040'>this,</span> <span
  m='1457280'>or</span> <span m='1457350'>like</span> <span
  m='1457540'>this,</span> <span m='1457780'>or</span> <span
  m='1457870'>like</span> <span m='1458060'>this,</span> <span
  m='1458280'>or</span> <span m='1458360'>like</span> <span
  m='1458580'>this?</span> <span m='1460170'>I</span> <span
  m='1460260'>don't</span> <span m='1460380'>know.</span> <span
  m='1460910'>So</span> <span m='1461060'>I</span> <span
  m='1461130'>guess.</span> <span m='1462210'>And</span> <span
  m='1462660'>I</span> <span m='1462890'>just</span> <span
  m='1463160'>place</span> <span m='1463400'>that</span> <span
  m='1463590'>piece.</span> <span m='1464120'>I</span> <span
  m='1464430'>make</span> <span m='1464630'>another</span> <span
  m='1464870'>guess</span> <span m='1465090'>where</span> <span
  m='1465210'>to</span> <span m='1465270'>place the</span> <span
  m='1465520'>next</span> <span m='1465720'>piece.</span> <span m='1465900'>Then
  I</span> <span m='1466010'>make</span> <span m='1466180'>another</span> <span
  m='1466410'>guess</span> <span m='1466610'>where</span> <span
  m='1466720'>to</span> <span m='1466790'>place the</span> <span
  m='1467100'>next</span> <span m='1467310'>piece.</span> </p><p><span
  m='1467550'>I</span> <span m='1467670'>implement</span> <span
  m='1468060'>the</span> <span m='1468170'>rules</span> <span
  m='1468410'>of</span> <span m='1468510'>Tetris,</span> <span
  m='1469320'>which</span> <span m='1469520'>is</span> <span
  m='1469760'>if</span> <span m='1470160'>there's</span> <span
  m='1470340'>a</span> <span m='1470400'>full</span> <span
  m='1470600'>line</span> <span m='1470860'>it</span> <span
  m='1470950'>clears.</span> <span m='1472426'>I</span> <span
  m='1472820'>figure</span> <span m='1473250'>out</span> <span
  m='1473330'>where</span> <span m='1473480'>these</span> <span
  m='1473670'>things</span> <span m='1473910'>fall.</span> <span
  m='1474980'>I</span> <span m='1475090'>can</span> <span
  m='1475370'>even</span> <span m='1475610'>think</span> <span
  m='1475840'>about,</span> <span m='1476470'>should</span> <span
  m='1476570'>I</span> <span m='1476600'>rotate</span> <span
  m='1477010'>at</span> <span m='1477100'>the</span> <span
  m='1477180'>last</span> <span m='1477430'>second.</span> <span
  m='1479080'>If</span> <span m='1479260'>I</span> <span
  m='1479340'>don't</span> <span m='1479480'>know, I'll</span> <span
  m='1479840'>guess.</span> </p><p><span m='1482010'>Any</span> <span
  m='1482230'>choice</span> <span m='1482530'>you</span> <span
  m='1482600'>have</span> <span m='1482700'>to</span> <span
  m='1482800'>make</span> <span m='1483050'>in</span> <span
  m='1483150'>playing</span> <span m='1483430'>Tetris,</span> <span
  m='1483810'>you</span> <span m='1483920'>can</span> <span
  m='1484040'>just</span> <span m='1484230'>guess.</span> <span
  m='1485280'>There's</span> <span m='1485430'>only</span> <span
  m='1485650'>polynomially</span> <span m='1486310'>many</span> <span
  m='1486470'>guesses</span> <span m='1486900'>you</span> <span
  m='1487040'>need</span> <span m='1487220'>to</span> <span
  m='1487320'>make.</span> <span m='1487660'>So</span> <span
  m='1487890'>it's</span> <span m='1488000'>still</span> <span
  m='1488210'>polynomial</span> <span m='1488770'>time.</span> <span
  m='1489600'>That's</span> <span m='1489800'>important.</span> <span
  m='1490440'>It's</span> <span m='1490570'>not</span> <span
  m='1490680'>like</span> <span m='1490820'>we</span> <span
  m='1490920'>can</span> <span m='1491000'>do</span> <span
  m='1491120'>anything.</span> <span m='1492060'>But</span> <span
  m='1492270'>we</span> <span m='1492430'>can make a</span> <span
  m='1492840'>polynomial</span> <span m='1493410'>number</span> <span
  m='1493640'>these</span> <span m='1493810'>magic</span> <span
  m='1494130'>guesses.</span> <span m='1494770'>And</span> <span
  m='1495000'>then</span> <span m='1495140'>at</span> <span
  m='1495220'>the</span> <span m='1495340'>end,</span> <span
  m='1495980'>I</span> <span m='1496620'>determine</span> <span
  m='1497430'>did</span> <span m='1497650'>I</span> <span
  m='1497760'>die--</span> <span m='1499330'>or</span> <span
  m='1499510'>rather,</span> <span m='1499760'>did</span> <span
  m='1499960'>I</span> <span m='1500010'>survive.</span> </p><p><span
  m='1501070'>It's</span> <span m='1501190'>important,</span> <span
  m='1501750'>actually.</span> <span m='1502120'>It</span> <span
  m='1502280'>only</span> <span m='1502490'>works</span> <span
  m='1502710'>one</span> <span m='1502880'>way.</span> <span
  m='1503980'>Did</span> <span m='1504190'>I</span> <span
  m='1504260'>survive?</span> <span m='1504780'>Yes</span> <span
  m='1505040'>or</span> <span m='1505120'>no?</span> <span
  m='1505690'>And</span> <span m='1505870'>that's</span> <span
  m='1506000'>easy</span> <span m='1506220'>to</span> <span
  m='1506320'>compute.</span> <span m='1506680'>I</span> <span
  m='1506730'>just</span> <span m='1506860'>see</span> <span
  m='1507060'>did</span> <span m='1507250'>I</span> <span
  m='1507320'>ever</span> <span m='1507580'>go</span> <span
  m='1507760'>above</span> <span m='1508100'>the</span> <span
  m='1508200'>top</span> <span m='1508480'>row.</span> <span
  m='1511120'>So</span> <span m='1511640'>what</span> <span
  m='1511830'>this</span> <span m='1511970'>model</span> <span
  m='1512240'>says</span> <span m='1512610'>is</span> <span
  m='1512760'>if</span> <span m='1512920'>there</span> <span
  m='1513070'>is</span> <span m='1513210'>any</span> <span
  m='1513490'>way</span> <span m='1513640'>to</span> <span
  m='1513750'>survive--</span> <span m='1514250'>if</span> <span
  m='1514330'>there is</span> <span m='1514540'>any</span> <span
  m='1514780'>way</span> <span m='1514940'>to</span> <span
  m='1515020'>get</span> <span m='1515260'>a</span> <span m='1515380'>yes</span>
  <span m='1515730'>answer,</span> <span m='1517100'>then,</span> <span
  m='1517840'>my</span> <span m='1518060'>guesses</span> <span
  m='1518540'>will</span> <span m='1518790'>find</span> <span
  m='1519130'>it,</span> <span m='1519630'>magically,</span> <span
  m='1520280'>in</span> <span m='1520400'>this</span> <span
  m='1520550'>model.</span> <span m='1521220'>Therefore,</span> <span
  m='1521570'>Tetris</span> <span m='1521950'>is</span> <span
  m='1522080'>in</span> <span m='1522220'>NP.</span> </p><p><span
  m='1524980'>If</span> <span m='1525200'>I had</span> <span
  m='1525310'>instead</span> <span m='1525850'>said,</span> <span
  m='1526360'>did</span> <span m='1526580'>I</span> <span
  m='1526660'>die,</span> <span m='1527950'>then,</span> <span
  m='1528200'>what</span> <span m='1529040'>this</span> <span
  m='1529190'>algorithm</span> <span m='1529570'>would</span> <span
  m='1529700'>tell</span> <span m='1529900'>me</span> <span
  m='1530040'>is</span> <span m='1530570'>there</span> <span
  m='1530720'>any</span> <span m='1530950'>way</span> <span
  m='1531120'>to</span> <span m='1531260'>die--</span> <span
  m='1531740'>which,</span> <span m='1532120'>the</span> <span
  m='1532340'>answer's</span> <span m='1532700'>probably</span> <span
  m='1533200'>yes,</span> <span m='1533970'>unless</span> <span
  m='1534100'>you're</span> <span m='1534200'>given</span> <span
  m='1534460'>a</span> <span m='1534540'>really</span> <span
  m='1534770'>trivial</span> <span m='1535190'>input.</span> <span
  m='1536360'>So</span> <span m='1536530'>it's</span> <span
  m='1536650'>important</span> <span m='1537000'>you</span> <span
  m='1537080'>set</span> <span m='1537290'>up</span> <span
  m='1537400'>the</span> <span m='1537490'>yes</span> <span
  m='1537750'>versus</span> <span m='1538060'>no,</span> <span
  m='1538260'>correctly.</span> <span m='1539710'>But</span> <span
  m='1540470'>the</span> <span m='1540810'>Tetris</span> <span
  m='1541250'>decision</span> <span m='1541610'>problem</span> <span
  m='1541910'>"can</span> <span m='1542170'>I</span> <span
  m='1542250'>survive,"</span> <span m='1543260'>is</span> <span
  m='1543430'>in</span> <span m='1543540'>NP.</span> <span
  m='1543980'>The</span> <span m='1544080'>decision</span> <span
  m='1544460'>problem</span> <span m='1545190'>"can</span> <span
  m='1545350'>I</span> <span m='1545440'>die,"</span> <span
  m='1547220'>should</span> <span m='1547510'>not</span> <span
  m='1547820'>be</span> <span m='1547920'>in</span> <span m='1548110'>NP.</span>
  <span m='1548670'>But</span> <span m='1548780'>we</span> <span
  m='1548880'>don't</span> <span m='1549030'>know.</span> </p><p><span
  m='1557110'>Another</span> <span m='1557370'>way</span> <span
  m='1557480'>to</span> <span m='1557570'>think</span> <span
  m='1557770'>about</span> <span m='1558020'>NP.</span> <span
  m='1561382'>And</span> <span m='1561880'>you</span> <span
  m='1562030'>might</span> <span m='1562220'>find</span> <span
  m='1562390'>this</span> <span m='1562520'>intuitive</span> <span
  m='1562950'>because</span> <span m='1563140'>we've</span> <span
  m='1563260'>been</span> <span m='1563410'>doing</span> <span
  m='1563630'>lots</span> <span m='1563880'>of</span> <span
  m='1563960'>guessing.</span> <span m='1564800'>It's</span> <span
  m='1564960'>just</span> <span m='1565180'>a</span> <span
  m='1565230'>little</span> <span m='1565440'>crazy.</span> <span
  m='1566330'>There's</span> <span m='1566520'>another</span> <span
  m='1566780'>way</span> <span m='1566900'>that's</span> <span
  m='1567830'>more</span> <span m='1568100'>intuitive</span> <span
  m='1568570'>to</span> <span m='1570650'>many</span> <span
  m='1570860'>people.</span> <span m='1571490'>So</span> <span
  m='1571720'>if</span> <span m='1571830'>this</span> <span
  m='1572000'>doesn't</span> <span m='1572250'>make</span> <span
  m='1572440'>sense,</span> <span m='1573130'>don't worry,</span> <span
  m='1573475'>yet.</span> <span m='1574520'>This is</span> <span
  m='1574700'>another</span> <span m='1575020'>way</span> <span
  m='1575360'>to</span> <span m='1575540'>phrase</span> <span
  m='1575920'>it.</span> </p><p><span m='1613370'>Another</span> <span
  m='1613580'>way</span> <span m='1613690'>to</span> <span
  m='1613780'>think</span> <span m='1613950'>about</span> <span
  m='1614140'>NP--</span> <span m='1614430'>which</span> <span
  m='1614600'>turns</span> <span m='1614940'>out</span> <span
  m='1615110'>to</span> <span m='1615200'>be</span> <span
  m='1615920'>equivalent--</span> <span m='1618820'>is</span> <span
  m='1619040'>that</span> <span m='1620030'>don't</span> <span
  m='1620200'>think</span> <span m='1620380'>so</span> <span
  m='1620550'>much</span> <span m='1620750'>about</span> <span
  m='1620950'>algorithms</span> <span m='1621450'>for</span> <span
  m='1621600'>solving</span> <span m='1622000'>a</span> <span
  m='1622080'>problem,</span> <span m='1623220'>just</span> <span
  m='1623430'>think</span> <span m='1623600'>about</span> <span
  m='1623850'>algorithms</span> <span m='1624300'>for</span> <span
  m='1624550'>checking</span> <span m='1625130'>the</span> <span
  m='1625210'>solution</span> <span m='1625720'>to</span> <span
  m='1625830'>a</span> <span m='1625900'>problem.</span> <span
  m='1627570'>It's</span> <span m='1627710'>usually</span> <span
  m='1628020'>a</span> <span m='1628070'>lot</span> <span
  m='1628270'>easier</span> <span m='1628570'>to</span> <span
  m='1628680'>check</span> <span m='1628940'>your</span> <span
  m='1629050'>work</span> <span m='1629270'>than</span> <span
  m='1629410'>it</span> <span m='1629510'>is</span> <span m='1629660'>to</span>
  <span m='1629760'>solve</span> <span m='1630020'>a</span> <span
  m='1630080'>problem</span> <span m='1630380'>in</span> <span
  m='1630450'>the</span> <span m='1630520'>first</span> <span
  m='1630790'>place.</span> <span m='1631980'>And</span> <span
  m='1632470'>NP</span> <span m='1632850'>is</span> <span m='1632960'>all</span>
  <span m='1633140'>about</span> <span m='1633450'>that</span> <span
  m='1633970'>issue.</span> <span m='1635400'>So</span> <span
  m='1635810'>think</span> <span m='1636050'>of</span> <span
  m='1636110'>decision</span> <span m='1636510'>problems</span> <span
  m='1637110'>and</span> <span m='1637340'>think</span> <span
  m='1637540'>about</span> <span m='1637870'>if</span> <span
  m='1637970'>you</span> <span m='1638070'>have</span> <span
  m='1638270'>a</span> <span m='1638310'>solution--</span> <span
  m='1639420'>so</span> <span m='1639490'>let's</span> <span
  m='1639650'>say</span> <span m='1639810'>in</span> <span
  m='1639890'>Tetris,</span> <span m='1641270'>the</span> <span
  m='1641470'>solution</span> <span m='1642050'>is</span> <span
  m='1643300'>yes.</span> <span m='1644790'>In fact,</span> <span m='1645200'>I
  need</span> <span m='1645450'>to</span> <span m='1645550'>say</span> <span
  m='1645770'>this,</span> <span m='1646780'>probably.</span> </p><p><span
  m='1647660'>The</span> <span m='1647860'>more</span> <span
  m='1648020'>formal</span> <span m='1648350'>version</span> <span
  m='1649340'>is</span> <span m='1650820'>whenever</span> <span
  m='1651150'>the</span> <span m='1651310'>answer</span> <span
  m='1651690'>is</span> <span m='1651840'>yes,</span> <span
  m='1657040'>you</span> <span m='1657190'>can</span> <span
  m='1657340'>prove</span> <span m='1657610'>it.</span> <span
  m='1661880'>And</span> <span m='1662230'>you</span> <span
  m='1662340'>can</span> <span m='1662470'>check</span> <span
  m='1662730'>that</span> <span m='1662960'>proof in</span> <span
  m='1663290'>polynomial</span> <span m='1663800'>time.</span> <span
  m='1669890'>This</span> <span m='1670100'>is</span> <span
  m='1670310'>the</span> <span m='1670350'>more</span> <span
  m='1670580'>formal--</span> <span m='1672140'>this</span> <span
  m='1672310'>a</span> <span m='1672370'>little</span> <span
  m='1672570'>bit</span> <span m='1672680'>high</span> <span
  m='1672840'>level.</span> <span m='1673140'>What</span> <span
  m='1673280'>does</span> <span m='1673410'>check mean?</span> <span
  m='1674130'>Here's</span> <span m='1674420'>what</span> <span
  m='1674590'>check</span> <span m='1674810'>means.</span> </p><p><span
  m='1676080'>Whenever an</span> <span m='1676410'>answer</span> <span
  m='1676700'>is</span> <span m='1676770'>"yes,"</span> <span m='1678260'>you
  can</span> <span m='1678600'>write</span> <span m='1678860'>down</span> <span
  m='1679090'>a</span> <span m='1679150'>proof</span> <span
  m='1679560'>that</span> <span m='1679680'>the</span> <span
  m='1679810'>answer</span> <span m='1680140'>is</span> <span
  m='1680220'>yes.</span> <span m='1680970'>And</span> <span
  m='1681170'>someone</span> <span m='1681440'>can</span> <span
  m='1681560'>come</span> <span m='1681750'>along</span> <span
  m='1682000'>and</span> <span m='1682110'>check</span> <span
  m='1682400'>that</span> <span m='1682590'>proof in</span> <span
  m='1682880'>polynomial</span> <span m='1683420'>time</span> <span
  m='1683680'>and</span> <span m='1683750'>be</span> <span
  m='1683890'>convinced</span> <span m='1684370'>that</span> <span
  m='1684430'>the</span> <span m='1684580'>answer</span> <span
  m='1684870'>is</span> <span m='1684950'>yes.</span> <span
  m='1686310'>What</span> <span m='1686400'>does</span> <span
  m='1686660'>convinced</span> <span m='1687090'>mean?</span> </p><p><span
  m='1687600'>It's</span> <span m='1687800'>not</span> <span
  m='1687920'>that</span> <span m='1688050'>hard.</span> <span
  m='1689800'>Think</span> <span m='1689900'>of</span> <span
  m='1690060'>it</span> <span m='1690150'>is</span> <span m='1690360'>a</span>
  <span m='1690670'>two</span> <span m='1690820'>player</span> <span
  m='1691140'>game.</span> <span m='1691660'>There's</span> <span
  m='1691990'>me</span> <span m='1692240'>trying</span> <span
  m='1692490'>to</span> <span m='1692790'>play</span> <span
  m='1692980'>Tetris,</span> <span m='1693400'>and</span> <span
  m='1693500'>there's you</span> <span m='1693805'>trying</span> <span
  m='1694110'>to</span> <span m='1694840'>be</span> <span
  m='1694960'>convinced</span> <span m='1695400'>that</span> <span
  m='1695750'>I'm</span> <span m='1695880'>really</span> <span
  m='1696090'>good</span> <span m='1696210'>at</span> <span
  m='1696300'>Tetris.</span> <span m='1698100'>It</span> <span
  m='1698210'>seems</span> <span m='1698570'>a</span> <span
  m='1698620'>little</span> <span m='1699630'>one</span> <span
  m='1699850'>sided,</span> <span m='1700360'>but--</span> <span
  m='1701800'>it's</span> <span m='1701950'>a</span> <span
  m='1702300'>asymmetric</span> <span m='1702575'>game.</span> <span
  m='1703060'>So</span> <span m='1703140'>you</span> <span
  m='1703240'>want</span> <span m='1703360'>to</span> <span
  m='1703420'>prove</span> <span m='1703630'>Tetris</span> <span
  m='1704050'>is--</span> <span m='1704720'>I</span> <span
  m='1704990'>want</span> <span m='1705150'>to</span> <span
  m='1705200'>show</span> <span m='1705350'>Tetris</span> <span
  m='1705760'>is</span> <span m='1705890'>in</span> <span m='1706030'>NP.</span>
  <span m='1707420'>Imagine</span> <span m='1708020'>I'm</span> <span
  m='1708450'>this</span> <span m='1708610'>magical</span> <span
  m='1709190'>creature.</span> <span m='1709790'>Actually,</span> <span
  m='1710330'>it's</span> <span m='1710670'>kind</span> <span
  m='1710820'>of</span> <span m='1710890'>funny.</span> <span m='1711160'>It
  reminds</span> <span m='1711460'>me of</span> <span m='1711540'>a</span> <span
  m='1711600'>story.</span> </p><p><span m='1712680'>On</span> <span
  m='1712890'>the</span> <span m='1713290'>front</span> <span
  m='1713470'>of</span> <span m='1713610'>my</span> <span
  m='1713800'>office</span> <span m='1714100'>door,</span> <span
  m='1714490'>you</span> <span m='1714620'>may</span> <span
  m='1714810'>have</span> <span m='1714950'>seen</span> <span
  m='1715400'>there's</span> <span m='1715840'>an</span> <span
  m='1715950'>email</span> <span m='1716310'>I</span> <span
  m='1716400'>received,</span> <span m='1717540'>maybe</span> <span
  m='1717820'>15</span> <span m='1718230'>years</span> <span
  m='1718440'>ago--</span> <span m='1719150'>oh</span> <span
  m='1719430'>no,</span> <span m='1719630'>I</span> <span
  m='1719690'>guess</span> <span m='1719900'>it can't</span> <span
  m='1720040'>be</span> <span m='1720150'>that</span> <span m='1720500'>long
  ago.</span> <span m='1722100'>Must've</span> <span m='1722160'>been</span>
  <span m='1722510'>about</span> <span m='1722720'>7</span> <span
  m='1722960'>years</span> <span m='1723170'>ago</span> <span
  m='1723440'>when</span> <span m='1723710'>we</span> <span
  m='1723960'>proved</span> <span m='1724220'>that</span> <span
  m='1724380'>Tetris</span> <span m='1724760'>is</span> <span
  m='1725030'>NP-complete.</span> <span m='1727040'>And the</span> <span
  m='1727130'>email</span> <span m='1727450'>says,</span> <span
  m='1729930'>"Dear</span> <span m='1730270'>Sir,"--</span> <span
  m='1730470'>or</span> <span m='1730610'>whatever--</span> <span
  m='1731660'>"I</span> <span m='1732310'>am</span> <span
  m='1732490'>NP-complete."</span> <span m='1734440'>We</span> <span
  m='1734590'>don't</span> <span m='1734810'>what</span> <span
  m='1734920'>NP-complete</span> <span m='1735410'>means,</span> <span
  m='1735640'>yet,</span> <span m='1735890'>but</span> <span
  m='1736020'>it's</span> <span m='1736210'>a</span> <span
  m='1736380'>meaningless</span> <span m='1736810'>statement.</span> <span
  m='1737310'>So</span> <span m='1737630'>it</span> <span
  m='1737850'>doesn't</span> <span m='1738080'>matter</span> <span
  m='1738340'>that</span> <span m='1738510'>you</span> <span
  m='1738590'>don't</span> <span m='1738830'>know</span> <span
  m='1738940'>what</span> <span m='1739050'>it</span> <span
  m='1739140'>means.</span> <span m='1739640'>It</span> <span
  m='1740150'>might</span> <span m='1740340'>get</span> <span
  m='1740480'>funnier</span> <span m='1741280'>throughout</span> <span
  m='1741590'>the</span> <span m='1741660'>lecture</span> <span
  m='1742090'>today.</span> </p><p><span m='1743940'>And</span> <span
  m='1744270'>he's</span> <span m='1744520'>like,</span> <span
  m='1745070'>I</span> <span m='1745230'>can</span> <span
  m='1745410'>solve</span> <span m='1746260'>Tetris.</span> <span
  m='1747860'>I'm</span> <span m='1748360'>really</span> <span
  m='1748610'>good</span> <span m='1748750'>at</span> <span
  m='1748820'>playing</span> <span m='1749050'>Tetris.</span> <span
  m='1749590'>I'm</span> <span m='1749770'>really</span> <span
  m='1749990'>good</span> <span m='1750100'>at</span> <span
  m='1750160'>playing</span> <span m='1750390'>Minesweeper--</span> <span
  m='1751200'>all</span> <span m='1751370'>these</span> <span
  m='1751570'>games</span> <span m='1751970'>that</span> <span
  m='1752110'>are</span> <span m='1752260'>thought</span> <span
  m='1752510'>to</span> <span m='1752580'>be</span> <span
  m='1752700'>intractable.</span> <span m='1754210'>He</span> <span
  m='1754330'>gave</span> <span m='1754520'>me</span> <span
  m='1754640'>his</span> <span m='1754770'>records</span> <span
  m='1755290'>and</span> <span m='1755420'>so</span> <span
  m='1755600'>on.</span> <span m='1755810'>It's</span> <span
  m='1756220'>like</span> <span m='1756800'>how</span> <span
  m='1757000'>can</span> <span m='1757150'>I</span> <span
  m='1757230'>apply</span> <span m='1757560'>my</span> <span
  m='1757750'>talent.</span> <span m='1760230'>So</span> <span
  m='1760840'>I</span> <span m='1760970'>will</span> <span
  m='1761150'>translate</span> <span m='1761730'>what</span> <span
  m='1761860'>he</span> <span m='1762000'>meant</span> <span
  m='1762330'>to</span> <span m='1762440'>say</span> <span
  m='1762780'>was,</span> <span m='1763550'>"I</span> <span
  m='1764020'>am</span> <span m='1764340'>lucky."</span> <span
  m='1766230'>And</span> <span m='1766570'>this</span> <span
  m='1766810'>is</span> <span m='1767110'>probably</span> <span
  m='1767370'>not</span> <span m='1767550'>true,</span> <span
  m='1767850'>but</span> <span m='1768920'>he</span> <span
  m='1769120'>thought</span> <span m='1769350'>that</span> <span
  m='1769450'>he</span> <span m='1769550'>was</span> <span
  m='1769700'>lucky.</span> <span m='1770100'>He wanted</span> <span
  m='1770370'>to</span> <span m='1770490'>convince</span> <span
  m='1770830'>me</span> <span m='1770960'>he</span> <span m='1771090'>was</span>
  <span m='1771210'>lucky.</span> </p><p><span m='1771940'>So</span> <span
  m='1772090'>how</span> <span m='1772320'>could</span> <span
  m='1772440'>we</span> <span m='1772550'>do</span> <span m='1772780'>it?</span>
  <span m='1773610'>Well,</span> <span m='1773730'>I</span> <span
  m='1773830'>could</span> <span m='1774010'>give</span> <span
  m='1774180'>him</span> <span m='1774330'>a</span> <span
  m='1774440'>really</span> <span m='1774740'>hard</span> <span
  m='1775090'>Tetris</span> <span m='1776250'>problem.</span> <span
  m='1776540'>And</span> <span m='1776830'>say,</span> <span
  m='1777160'>can</span> <span m='1777370'>you</span> <span
  m='1777470'>survive</span> <span m='1777900'>these</span> <span
  m='1778080'>pieces?</span> <span m='1778870'>And</span> <span
  m='1779060'>he</span> <span m='1779190'>says,</span> <span
  m='1779590'>"yes,</span> <span m='1780140'>I</span> <span
  m='1780280'>can</span> <span m='1780470'>survive.</span> <span
  m='1780740'>"</span> <span m='1781490'>And</span> <span m='1781640'>how</span>
  <span m='1781830'>does</span> <span m='1781960'>he</span> <span
  m='1782090'>prove</span> <span m='1782380'>to</span> <span
  m='1782460'>me</span> <span m='1782580'>that</span> <span m='1782690'>he
  can</span> <span m='1782950'>survive?</span> <span m='1783450'>Well, he</span>
  <span m='1783570'>just</span> <span m='1784280'>plays</span> <span
  m='1784660'>it.</span> <span m='1785150'>He</span> <span
  m='1785220'>shows</span> <span m='1785530'>me</span> <span
  m='1785660'>what</span> <span m='1785820'>to</span> <span
  m='1785920'>do.</span> </p><p><span m='1787420'>So</span> <span
  m='1787640'>proof</span> <span m='1789640'>is</span> <span
  m='1790910'>sequence</span> <span m='1791350'>of</span> <span
  m='1791450'>moves</span> <span m='1791710'>that you</span> <span
  m='1791890'>make.</span> <span m='1793740'>It's</span> <span
  m='1793860'>really</span> <span m='1794080'>easy</span> <span
  m='1794370'>to</span> <span m='1794500'>convince</span> <span
  m='1795200'>someone</span> <span m='1795870'>that</span> <span
  m='1796000'>you</span> <span m='1796090'>can</span> <span
  m='1796260'>survive</span> <span m='1796790'>a</span> <span
  m='1796830'>given</span> <span m='1797300'>level</span> <span
  m='1797690'>of</span> <span m='1797800'>Tetris.</span> <span
  m='1800290'>You</span> <span m='1800370'>just</span> <span m='1800650'>show
  what</span> <span m='1800940'>the</span> <span m='1801010'>sequence</span>
  <span m='1801380'>of</span> <span m='1801460'>moves</span> <span
  m='1801710'>are.</span> </p><p><span m='1804380'>And</span> <span
  m='1804570'>then</span> <span m='1804730'>I,</span> <span
  m='1805010'>as</span> <span m='1805470'>a</span> <span m='1805540'>mere</span>
  <span m='1805880'>mortal</span> <span m='1806350'>polynomial</span> <span
  m='1806930'>time</span> <span m='1807170'>algorithm</span> <span
  m='1807860'>can</span> <span m='1808060'>check</span> <span m='1808520'>that
  that</span> <span m='1808980'>sequence</span> <span m='1809340'>works.</span>
  <span m='1809780'>I</span> <span m='1809860'>just</span> <span
  m='1810030'>have</span> <span m='1810160'>to</span> <span
  m='1810260'>implement</span> <span m='1810690'>the</span> <span
  m='1810780'>rules</span> <span m='1811000'>of</span> <span
  m='1811110'>Tetris.</span> <span m='1812190'>So in</span> <span
  m='1812340'>Tetris,</span> <span m='1812750'>the</span> <span
  m='1812870'>rules</span> <span m='1813170'>are</span> <span
  m='1813260'>easy</span> <span m='1813450'>to</span> <span
  m='1813490'>implement.</span> <span m='1813980'>Its</span> <span
  m='1814210'>the</span> <span m='1814490'>knowing</span> <span
  m='1815280'>what</span> <span m='1815510'>thing</span> <span
  m='1815700'>to</span> <span m='1815820'>do</span> <span m='1816100'>is</span>
  <span m='1816220'>hard.</span> </p><p><span m='1818120'>But</span> <span
  m='1818480'>in</span> <span m='1818630'>NP,</span> <span
  m='1819400'>knowing</span> <span m='1819620'>which</span> <span
  m='1819790'>way</span> <span m='1819960'>to</span> <span m='1820040'>go</span>
  <span m='1820320'>is</span> <span m='1820450'>easy.</span> <span
  m='1822080'>In</span> <span m='1822260'>this</span> <span
  m='1822440'>version,</span> <span m='1822730'>you don't</span> <span
  m='1822850'>even</span> <span m='1823070'>talk</span> <span
  m='1823340'>about</span> <span m='1823930'>how</span> <span
  m='1824080'>to</span> <span m='1824150'>find</span> <span
  m='1824430'>the</span> <span m='1824500'>solution.</span> <span
  m='1824820'>It's</span> <span m='1824920'>just</span> <span
  m='1825110'>a</span> <span m='1825150'>matter</span> <span
  m='1825380'>of</span> <span m='1825480'>can</span> <span
  m='1825680'>you</span> <span m='1825810'>write</span> <span
  m='1825980'>down</span> <span m='1826130'>a</span> <span
  m='1826170'>solution</span> <span m='1826500'>that</span> <span
  m='1826650'>can</span> <span m='1826820'>be</span> <span
  m='1826930'>checked.</span> <span m='1829280'>Can</span> <span
  m='1829490'>prove</span> <span m='1829830'>it.</span> <span m='1830000'>This
  is</span> <span m='1830140'>not</span> <span m='1830390'>in</span> <span
  m='1830480'>polynomial</span> <span m='1831000'>time.</span> <span
  m='1831420'>You</span> <span m='1831520'>get</span> <span
  m='1831760'>arbitrarily</span> <span m='1832360'>much</span> <span
  m='1832600'>time</span> <span m='1832820'>to</span> <span
  m='1832920'>prove</span> <span m='1833170'>it.</span> <span
  m='1834710'>But</span> <span m='1834990'>then,</span> <span
  m='1835460'>the</span> <span m='1835630'>check</span> <span
  m='1836170'>has</span> <span m='1836380'>to</span> <span
  m='1836470'>happen</span> <span m='1836720'>in</span> <span
  m='1836800'>polynomial</span> <span m='1837300'>time.</span> <span
  m='1841090'>Kind</span> <span m='1841260'>of</span> <span
  m='1841310'>clear?</span> <span m='1844290'>That's</span> <span
  m='1844590'>Tetris.</span> </p><p><span m='1846450'>And</span> <span
  m='1846780'>every</span> <span m='1847080'>problem</span> <span
  m='1847400'>that</span> <span m='1847540'>you</span> <span
  m='1847700'>can</span> <span m='1848020'>solve</span> <span
  m='1848390'>in</span> <span m='1848470'>polynomial</span> <span
  m='1849220'>time</span> <span m='1849540'>you</span> <span
  m='1849620'>can</span> <span m='1849750'>also,</span> <span
  m='1850040'>of</span> <span m='1850140'>course,</span> <span
  m='1850540'>check</span> <span m='1850760'>it.</span> <span
  m='1851540'>Because</span> <span m='1851700'>if</span> <span
  m='1851800'>you</span> <span m='1851890'>could</span> <span
  m='1852020'>solve</span> <span m='1852290'>it</span> <span
  m='1852360'>in</span> <span m='1852410'>polynomial</span> <span
  m='1852880'>time,</span> <span m='1853090'>you</span> <span
  m='1853170'>could</span> <span m='1853280'>just</span> <span
  m='1853390'>solve</span> <span m='1853690'>it</span> <span m='1853870'>and
  then</span> <span m='1854140'>see</span> <span m='1854270'>did</span> <span
  m='1854440'>you</span> <span m='1854520'>get</span> <span
  m='1854690'>the</span> <span m='1854760'>same</span> <span
  m='1855000'>answer</span> <span m='1855250'>that</span> <span
  m='1855390'>I</span> <span m='1855480'>did.</span> <span m='1856320'>So</span>
  <span m='1856630'>P</span> <span m='1856970'>is</span> <span
  m='1857150'>inside</span> <span m='1857590'>NP.</span> <span
  m='1859790'>But</span> <span m='1859940'>the</span> <span
  m='1860010'>big</span> <span m='1860220'>question</span> <span
  m='1860680'>is</span> <span m='1861870'>does</span> <span m='1862040'>p</span>
  <span m='1862320'>equal</span> <span m='1862640'>NP.</span> <span
  m='1864910'>And</span> <span m='1865070'>most</span> <span
  m='1865360'>people</span> <span m='1867030'>think</span> <span
  m='1867330'>no.</span> <span m='1868600'>P</span> <span
  m='1868790'>does</span> <span m='1868890'>not</span> <span
  m='1869080'>equal</span> <span m='1869140'>NP--</span> <span
  m='1870210'>most</span> <span m='1871240'>sane</span> <span
  m='1871660'>people.</span> </p><p><span m='1876690'>So</span> <span
  m='1876910'>this</span> <span m='1877110'>is</span> <span m='1877150'>a</span>
  <span m='1877190'>big</span> <span m='1877370'>problem.</span> <span
  m='1878910'>It's</span> <span m='1879110'>one</span> <span
  m='1879280'>of</span> <span m='1879390'>the</span> <span
  m='1880190'>famous</span> <span m='1880580'>Millennium</span> <span
  m='1881150'>Prize</span> <span m='1881450'>problems.</span> <span
  m='1881900'>So</span> <span m='1882020'>in</span> <span
  m='1882100'>particular,</span> <span m='1882630'>if</span> <span
  m='1882730'>you</span> <span m='1882830'>solved</span> <span
  m='1883090'>it,</span> <span m='1884690'>you</span> <span
  m='1884810'>would</span> <span m='1885000'>get</span> <span
  m='1885360'>$1</span> <span m='1885430'>million,</span> <span
  m='1887030'>and</span> <span m='1887300'>fame,</span> <span
  m='1887680'>and</span> <span m='1888290'>probably</span> <span
  m='1888540'>other</span> <span m='1888700'>fortune.</span> <span
  m='1889080'>You</span> <span m='1889200'>could</span> <span
  m='1890200'>do</span> <span m='1890330'>TV</span> <span
  m='1890670'>spots.</span> <span m='1891060'>I</span> <span
  m='1891110'>think</span> <span m='1891270'>that's</span> <span
  m='1891440'>how</span> <span m='1891530'>people</span> <span
  m='1891850'>mostly</span> <span m='1892250'>make</span> <span
  m='1892450'>their</span> <span m='1892540'>money.</span> <span
  m='1894160'>You</span> <span m='1894290'>could</span> <span
  m='1894410'>do</span> <span m='1894530'>a</span> <span m='1894580'>lot.</span>
  <span m='1895280'>You would</span> <span m='1895500'>become</span> <span
  m='1895840'>the</span> <span m='1895910'>most</span> <span
  m='1896150'>famous</span> <span m='1896420'>computer</span> <span
  m='1896740'>scientist</span> <span m='1897230'>in</span> <span
  m='1897290'>the</span> <span m='1897370'>world</span> <span
  m='1898020'>if</span> <span m='1898150'>you</span> <span
  m='1898250'>prove</span> <span m='1898500'>this.</span> </p><p><span
  m='1900300'>So</span> <span m='1900460'>a</span> <span m='1900480'>lot</span>
  <span m='1900620'>of</span> <span m='1900680'>people have</span> <span
  m='1901000'>tried.</span> <span m='1901270'>Every</span> <span
  m='1901490'>year,</span> <span m='1901670'>there's</span> <span
  m='1902130'>an</span> <span m='1902190'>attempt</span> <span
  m='1903120'>to</span> <span m='1903250'>prove</span> <span
  m='1903690'>either</span> <span m='1904070'>what</span> <span
  m='1904200'>everyone</span> <span m='1904530'>believes</span> <span
  m='1905250'>or,</span> <span m='1905630'>most</span> <span
  m='1905960'>often,</span> <span m='1906500'>people</span> <span
  m='1906770'>try</span> <span m='1906920'>to</span> <span
  m='1907030'>prove</span> <span m='1907230'>the</span> <span
  m='1907310'>reverse--</span> <span m='1908230'>that</span> <span
  m='1908450'>they are</span> <span m='1908660'>equal.</span> <span
  m='1909870'>I</span> <span m='1909920'>don't</span> <span
  m='1910050'>know</span> <span m='1910160'>why.</span> <span
  m='1910450'>They</span> <span m='1910550'>should</span> <span
  m='1910810'>bet</span> <span m='1911070'>the</span> <span
  m='1911190'>other</span> <span m='1911350'>way.</span> </p><p><span
  m='1913250'>So</span> <span m='1913340'>what</span> <span
  m='1913510'>does</span> <span m='1913630'>P</span> <span
  m='1913800'>does</span> <span m='1913930'>not</span> <span
  m='1914100'>equal</span> <span m='1914350'>NP</span> <span
  m='1914940'>mean?</span> <span m='1915360'>It</span> <span
  m='1915440'>means</span> <span m='1916460'>that</span> <span
  m='1916590'>there</span> <span m='1916710'>are</span> <span
  m='1916770'>problems,</span> <span m='1917740'>here,</span> <span
  m='1919290'>that</span> <span m='1919440'>are</span> <span
  m='1919560'>in</span> <span m='1919700'>NP</span> <span m='1920040'>but</span>
  <span m='1920200'>not</span> <span m='1920430'>in</span> <span
  m='1920570'>P.</span> <span m='1922240'>Think</span> <span m='1922450'>about
  what</span> <span m='1922770'>this</span> <span m='1922980'>means.</span>
  <span m='1923240'>This is</span> <span m='1923320'>saying</span> <span
  m='1924120'>P are</span> <span m='1924370'>the</span> <span
  m='1924500'>problems</span> <span m='1924890'>that</span> <span
  m='1925000'>we</span> <span m='1925180'>can</span> <span
  m='1925360'>actually</span> <span m='1925810'>solve</span> <span
  m='1926150'>on</span> <span m='1926250'>a</span> <span
  m='1926320'>legitimate</span> <span m='1926840'>computer.</span> <span
  m='1927680'>NP</span> <span m='1928500'>are</span> <span
  m='1928640'>problems</span> <span m='1928990'>that</span> <span
  m='1929060'>we</span> <span m='1929160'>can</span> <span
  m='1929280'>solve</span> <span m='1929670'>in this</span> <span
  m='1929830'>magical</span> <span m='1930570'>fairy</span> <span
  m='1930950'>computer</span> <span m='1931730'>where</span> <span
  m='1932090'>all</span> <span m='1932350'>of</span> <span
  m='1932500'>our</span> <span m='1932810'>dreams</span> <span
  m='1933310'>are</span> <span m='1933890'>granted.</span> <span
  m='1934440'>You</span> <span m='1934620'>say,</span> <span
  m='1934830'>oh,</span> <span m='1935080'>I</span> <span
  m='1935200'>don't</span> <span m='1935340'>know</span> <span
  m='1935440'>which</span> <span m='1935590'>way</span> <span
  m='1935730'>to</span> <span m='1935810'>go.</span> <span m='1936120'>It</span>
  <span m='1936450'>doesn't</span> <span m='1936700'>matter</span> <span
  m='1937370'>because</span> <span m='1938180'>the</span> <span
  m='1938500'>machine</span> <span m='1939030'>magically</span> <span
  m='1939510'>tells</span> <span m='1939780'>you</span> <span
  m='1939880'>which</span> <span m='1940040'>way</span> <span
  m='1940190'>to</span> <span m='1940270'>go.</span> <span m='1941400'>If</span>
  <span m='1941510'>you're</span> <span m='1941630'>goal</span> <span
  m='1941890'>is</span> <span m='1941990'>to</span> <span m='1942080'>get</span>
  <span m='1942270'>to a</span> <span m='1942400'>yes.</span> </p><p><span
  m='1944210'>So</span> <span m='1944980'>NP</span> <span m='1945490'>is</span>
  <span m='1945680'>a</span> <span m='1945770'>really</span> <span
  m='1946250'>powerful</span> <span m='1946750'>model</span> <span
  m='1947150'>of</span> <span m='1947270'>computation.</span> <span
  m='1947930'>It's</span> <span m='1948070'>an</span> <span
  m='1948140'>insane</span> <span m='1948570'>model</span> <span
  m='1948850'>of</span> <span m='1949050'>computation.</span> <span
  m='1949690'>No one</span> <span m='1949960'>in</span> <span
  m='1950030'>their</span> <span m='1950130'>right</span> <span
  m='1950330'>mind</span> <span m='1950590'>would</span> <span
  m='1950710'>consider it</span> <span m='1951110'>legitimate.</span> <span
  m='1952100'>So</span> <span m='1952390'>obviously,</span> <span
  m='1953380'>it's</span> <span m='1953520'>more</span> <span
  m='1953700'>powerful</span> <span m='1954110'>than</span> <span
  m='1954260'>P,</span> <span m='1955250'>except</span> <span
  m='1955820'>we</span> <span m='1955910'>don't know</span> <span
  m='1956100'>how to</span> <span m='1956300'>prove</span> <span
  m='1956390'>it.</span> <span m='1957760'>Very</span> <span
  m='1958010'>annoying.</span> </p><p><span m='1965480'>Other</span> <span
  m='1965710'>phrasings</span> <span m='1966660'>of</span> <span
  m='1966850'>P</span> <span m='1966970'>does</span> <span
  m='1967090'>not</span> <span m='1967240'>equal</span> <span
  m='1967450'>NP</span> <span m='1967820'>is--</span> <span
  m='1968490'>these</span> <span m='1968620'>are</span> <span
  m='1968680'>my</span> <span m='1968850'>phrasings,</span> <span
  m='1969320'>I</span> <span m='1969720'>them</span> <span
  m='1969850'>up--</span> <span m='1970700'>you</span> <span
  m='1970870'>can't</span> <span m='1971620'>engineer</span> <span
  m='1972590'>luck.</span> <span m='1977520'>You</span> <span
  m='1977710'>can</span> <span m='1977840'>believe</span> <span
  m='1978230'>in</span> <span m='1978310'>luck,</span> <span
  m='1978580'>if</span> <span m='1978680'>you</span> <span
  m='1978790'>want.</span> <span m='1979160'>But</span> <span
  m='1979260'>it's</span> <span m='1979400'>not</span> <span
  m='1979560'>something that</span> <span m='1979900'>we</span> <span
  m='1980060'>can</span> <span m='1980300'>build</span> <span
  m='1981250'>out</span> <span m='1981410'>of a</span> <span
  m='1981580'>regular</span> <span m='1981980'>computer.</span> <span
  m='1983960'>That's</span> <span m='1985960'>the</span> <span
  m='1986050'>meaning</span> <span m='1986470'>of</span> <span
  m='1986580'>this</span> <span m='1986700'>statement.</span> <span
  m='1987545'>And</span> <span m='1987920'>so</span> <span m='1988090'>I</span>
  <span m='1988190'>think</span> <span m='1988340'>most</span> <span
  m='1988590'>people</span> <span m='1988890'>believe</span> <span
  m='1989190'>that.</span> </p><p><span m='1993530'>Another</span> <span
  m='1993850'>phrasing</span> <span m='1994780'>would</span> <span
  m='1994910'>be</span> <span m='1995110'>that</span> <span
  m='1997550'>solving</span> <span m='1998000'>problems</span> <span
  m='1999520'>is</span> <span m='1999720'>harder</span> <span
  m='2000070'>than</span> <span m='2001740'>checking</span> <span
  m='2002120'>solutions.</span> <span m='2007300'>A</span> <span
  m='2007800'>more</span> <span m='2008000'>formal</span> <span
  m='2008330'>version</span> <span m='2008690'>is</span> <span
  m='2008840'>that</span> <span m='2009160'>generating</span> <span
  m='2009840'>solutions</span> <span m='2010380'>or</span> <span
  m='2010460'>proofs of</span> <span m='2010830'>solutions</span> <span
  m='2011920'>can</span> <span m='2012180'>be</span> <span
  m='2012340'>harder</span> <span m='2016630'>than</span> <span
  m='2016940'>checking</span> <span m='2017280'>them.</span> </p><p><span
  m='2024850'>Another</span> <span m='2025140'>phrasing</span> <span
  m='2025600'>is</span> <span m='2026020'>it's</span> <span
  m='2026160'>harder</span> <span m='2026620'>to</span> <span
  m='2027320'>generate</span> <span m='2027860'>a</span> <span m='2027930'>proof
  of a</span> <span m='2028340'>theorem</span> <span m='2028690'>than</span>
  <span m='2028840'>it</span> <span m='2028940'>is</span> <span
  m='2029080'>to</span> <span m='2029250'>check</span> <span
  m='2029550'>the</span> <span m='2029660'>proof of a</span> <span
  m='2029950'>theorem.</span> <span m='2030780'>We</span> <span
  m='2030920'>all</span> <span m='2031130'>know</span> <span
  m='2031310'>checking the</span> <span m='2031720'>proof of a</span> <span
  m='2032030'>theorem</span> <span m='2033400'>should</span> <span
  m='2033630'>be</span> <span m='2033820'>easy</span> <span
  m='2034220'>if</span> <span m='2034280'>you</span> <span
  m='2034410'>write</span> <span m='2034580'>it</span> <span
  m='2034990'>precisely.</span> <span m='2036000'>Just</span> <span
  m='2036290'>make</span> <span m='2036450'>sure</span> <span
  m='2036620'>each</span> <span m='2036750'>step</span> <span
  m='2037000'>follows</span> <span m='2037320'>from</span> <span
  m='2037380'>the</span> <span m='2037450'>previous</span> <span
  m='2037790'>ones.</span> <span m='2038420'>Done.</span> </p><p><span
  m='2040360'>But</span> <span m='2040530'>proving</span> <span
  m='2040860'>a</span> <span m='2040920'>theorem,</span> <span
  m='2041170'>that's</span> <span m='2041360'>hard.</span> <span
  m='2041610'>You</span> <span m='2041690'>need</span> <span
  m='2041850'>inspiration.</span> <span m='2042550'>You</span> <span
  m='2042630'>need</span> <span m='2042810'>some</span> <span
  m='2043020'>clever</span> <span m='2043430'>idea.</span> <span
  m='2043740'>That's</span> <span m='2044010'>guessing.</span> <span
  m='2044920'>Inspiration</span> <span m='2045680'>equals</span> <span
  m='2046290'>luck</span> <span m='2046610'>equals</span> <span
  m='2046920'>guessing,</span> <span m='2047470'>in</span> <span
  m='2047760'>this</span> <span m='2047910'>model.</span> <span
  m='2049020'>And</span> <span m='2049690'>that's</span> <span
  m='2049929'>hard.</span> <span m='2053380'>The</span> <span
  m='2053510'>only</span> <span m='2053739'>way</span> <span
  m='2053860'>we</span> <span m='2053980'>know</span> <span
  m='2054139'>is</span> <span m='2054260'>to</span> <span m='2054310'>try
  all</span> <span m='2054639'>the</span> <span m='2054719'>proofs.</span> <span
  m='2055880'>See</span> <span m='2056060'>which</span> <span
  m='2056639'>of</span> <span m='2056730'>them</span> <span
  m='2056870'>work.</span> </p><p><span m='2064020'>So</span> <span
  m='2064310'>what</span> <span m='2064909'>the</span> <span
  m='2064989'>heck?</span> <span m='2066350'>What</span> <span
  m='2066550'>could</span> <span m='2066650'>we</span> <span
  m='2066780'>possibly</span> <span m='2067250'>say?</span> <span
  m='2067510'>This</span> <span m='2067719'>is</span> <span
  m='2067840'>all</span> <span m='2068040'>kind</span> <span
  m='2068230'>of</span> <span m='2068300'>weird.</span> <span
  m='2070370'>This</span> <span m='2070510'>would</span> <span
  m='2070590'>be</span> <span m='2070870'>the</span> <span
  m='2070989'>end</span> <span m='2071170'>of</span> <span
  m='2071210'>the</span> <span m='2071290'>lecture if</span> <span
  m='2071750'>you</span> <span m='2071830'>say,</span> <span
  m='2072020'>OK,</span> <span m='2072330'>well</span> <span
  m='2072530'>we</span> <span m='2072639'>don't</span> <span
  m='2072780'>know.</span> <span m='2074770'>That's</span> <span
  m='2075510'>it.</span> <span m='2077350'>But</span> <span
  m='2077620'>thankfully--</span> <span m='2078880'>I</span> <span
  m='2078949'>kind</span> <span m='2079110'>of</span> <span
  m='2079270'>need</span> <span m='2080219'>this</span> <span
  m='2080380'>board.</span> <span m='2082020'>I also</span> <span
  m='2082199'>want</span> <span m='2082350'>this</span> <span
  m='2082530'>one,</span> <span m='2082699'>but</span> <span
  m='2082860'>I</span> <span m='2082940'>guess</span> <span
  m='2083150'>I'll</span> <span m='2083310'>go over</span> <span
  m='2083520'>here.</span> </p><p><span m='2088440'>Fortunately,</span> <span
  m='2088980'>this</span> <span m='2089159'>is</span> <span
  m='2089199'>not</span> <span m='2089449'>the</span> <span
  m='2089550'>end</span> <span m='2089690'>of</span> <span
  m='2089739'>the</span> <span m='2089820'>story.</span> <span
  m='2090280'>And</span> <span m='2090460'>we</span> <span
  m='2090560'>can</span> <span m='2090690'>say</span> <span m='2090870'>a</span>
  <span m='2090940'>lot</span> <span m='2092050'>about</span> <span
  m='2094070'>things</span> <span m='2094290'>like</span> <span
  m='2094440'>Tetris.</span> <span m='2095340'>See I</span> <span
  m='2095620'>drew</span> <span m='2095770'>Tetris</span> <span
  m='2096239'>not</span> <span m='2096530'>just</span> <span
  m='2097210'>in</span> <span m='2097380'>this</span> <span
  m='2097590'>regime.</span> <span m='2097930'>We're</span> <span
  m='2098040'>pretty</span> <span m='2098310'>sure</span> <span
  m='2098570'>Tetris</span> <span m='2099060'>is</span> <span
  m='2099600'>between</span> <span m='2100200'>NP</span> <span
  m='2100780'>and</span> <span m='2100990'>P.</span> <span
  m='2101330'>That</span> <span m='2101760'>it's</span> <span
  m='2102210'>in</span> <span m='2102390'>NP</span> <span
  m='2102860'>minus</span> <span m='2103290'>P.</span> </p><p><span
  m='2106480'>So</span> <span m='2107420'>let</span> <span m='2107540'>me</span>
  <span m='2107670'>write</span> <span m='2107860'>that</span> <span
  m='2107980'>down.</span> <span m='2108830'>Tetris</span> <span m='2110786'>is
  in</span> <span m='2111200'>NP</span> <span m='2112530'>minus</span> <span
  m='2112900'>P.</span> <span m='2115500'>We</span> <span
  m='2115600'>don't</span> <span m='2115750'>know</span> <span
  m='2115910'>that</span> <span m='2116310'>because</span> <span
  m='2116530'>we</span> <span m='2116640'>don't</span> <span
  m='2116820'>know--</span> <span m='2117060'>this</span> <span
  m='2117250'>could</span> <span m='2117390'>be</span> <span
  m='2118100'>the</span> <span m='2118270'>empty</span> <span
  m='2118510'>set.</span> <span m='2120070'>What</span> <span
  m='2120180'>we</span> <span m='2120300'>do</span> <span
  m='2120460'>know</span> <span m='2124410'>is</span> <span
  m='2124620'>that</span> <span m='2124870'>if</span> <span
  m='2125700'>there's</span> <span m='2126040'>anything</span> <span
  m='2127900'>in</span> <span m='2128230'>NP</span> <span
  m='2128370'>minus</span> <span m='2128680'>P--</span> <span
  m='2128920'>if</span> <span m='2129070'>they are</span> <span
  m='2129290'>different,</span> <span m='2132040'>then--</span> <span
  m='2133785'>if</span> <span m='2134220'>there's</span> <span
  m='2134500'>anything</span> <span m='2134920'>in</span> <span
  m='2135110'>NP</span> <span m='2135240'>minus</span> <span
  m='2135550'>P,</span> <span m='2135900'>then</span> <span
  m='2136120'>Tetris</span> <span m='2136510'>is</span> <span
  m='2136630'>one</span> <span m='2136820'>of</span> <span
  m='2136930'>those</span> <span m='2137170'>things.</span> </p><p><span
  m='2139060'>That's</span> <span m='2139280'>why</span> <span
  m='2139430'>I</span> <span m='2139490'>drew</span> <span
  m='2139700'>Tetris</span> <span m='2140090'>out</span> <span
  m='2140260'>there.</span> <span m='2140760'>It is,</span> <span
  m='2141470'>in</span> <span m='2141610'>a</span> <span
  m='2141660'>certain</span> <span m='2141940'>sense,</span> <span
  m='2142840'>the</span> <span m='2142950'>hardest</span> <span
  m='2143520'>problem</span> <span m='2144000'>in</span> <span
  m='2144180'>NP.</span> <span m='2145800'>Tetris.</span> <span
  m='2147690'>Why</span> <span m='2147810'>Tetris?</span> <span
  m='2149550'>Well,</span> <span m='2149970'>it's</span> <span
  m='2150150'>not</span> <span m='2150330'>just</span> <span
  m='2150530'>Tetris.</span> <span m='2150860'>There are a</span> <span
  m='2150980'>lot</span> <span m='2151150'>of</span> <span
  m='2151230'>problems</span> <span m='2151700'>right</span> <span
  m='2151880'>at</span> <span m='2151990'>that</span> <span
  m='2152150'>little</span> <span m='2152390'>notch.</span> <span
  m='2153100'>But</span> <span m='2154610'>this</span> <span
  m='2154820'>is</span> <span m='2154940'>pretty</span> <span
  m='2155180'>interesting</span> <span m='2155650'>because,</span> <span
  m='2156020'>while</span> <span m='2156550'>we</span> <span
  m='2156670'>can't</span> <span m='2156980'>figure</span> <span
  m='2157220'>this</span> <span m='2157430'>out,</span> <span
  m='2158240'>most</span> <span m='2158560'>people</span> <span
  m='2158800'>believe</span> <span m='2159080'>this</span> <span
  m='2159250'>is</span> <span m='2159380'>true.</span> <span
  m='2159920'>And</span> <span m='2160060'>so</span> <span m='2160220'>as</span>
  <span m='2160380'>long</span> <span m='2160580'>as</span> <span
  m='2160650'>you</span> <span m='2160740'>believe</span> <span
  m='2161220'>in</span> <span m='2161350'>that--</span> <span m='2161770'>as
  long as</span> <span m='2162090'>you</span> <span m='2162200'>have</span>
  <span m='2162400'>faith--</span> <span m='2163430'>then</span> <span
  m='2164500'>you</span> <span m='2164660'>can</span> <span
  m='2164760'>prove</span> <span m='2165920'>that</span> <span
  m='2166110'>Tetris</span> <span m='2166620'>is</span> <span
  m='2166800'>in</span> <span m='2166990'>NP</span> <span
  m='2167360'>minus</span> <span m='2167720'>P.</span> </p><p><span
  m='2168160'>And</span> <span m='2168290'>so</span> <span
  m='2168470'>it's</span> <span m='2168600'>hard.</span> <span
  m='2169650'>It's</span> <span m='2169860'>not</span> <span
  m='2170080'>in</span> <span m='2170210'>P,</span> <span m='2171070'>in</span>
  <span m='2171110'>this</span> <span m='2171270'>case.</span> <span
  m='2171880'>In</span> <span m='2171950'>particular,</span> <span
  m='2173200'>not</span> <span m='2173460'>in</span> <span m='2173680'>P.</span>
  <span m='2177600'>That's</span> <span m='2177860'>kind</span> <span
  m='2178030'>of</span> <span m='2178090'>cool.</span> <span m='2179810'>How
  in</span> <span m='2180200'>the</span> <span m='2180270'>world</span> <span
  m='2180590'>do we</span> <span m='2180700'>prove</span> <span
  m='2181020'>something</span> <span m='2181340'>like</span> <span
  m='2181530'>this?</span> <span m='2181780'>It's actually</span> <span
  m='2182070'>not</span> <span m='2182250'>that</span> <span
  m='2182390'>hard.</span> <span m='2183910'>I</span> <span
  m='2184040'>mean</span> <span m='2184170'>it</span> <span
  m='2184240'>took</span> <span m='2184400'>us</span> <span
  m='2185170'>several</span> <span m='2185460'>months,</span> <span
  m='2185830'>but</span> <span m='2186700'>that's</span> <span
  m='2187260'>just</span> <span m='2187430'>months,</span> <span
  m='2188260'>whereas</span> <span m='2188530'>this</span> <span
  m='2188750'>thing</span> <span m='2188940'>has</span> <span
  m='2189080'>been</span> <span m='2189210'>around</span> <span
  m='2189640'>since,</span> <span m='2191140'>I</span> <span
  m='2191480'>guess,</span> <span m='2191770'>the</span> <span
  m='2191840'>'70s.</span> <span m='2193170'>P versus</span> <span
  m='2193460'>NP.</span> </p><p><span m='2196030'>Why</span> <span
  m='2196810'>is</span> <span m='2196930'>this</span> <span
  m='2197080'>true?</span> <span m='2198760'>Because</span> <span
  m='2201520'>Tetris</span> <span m='2202200'>is</span> <span
  m='2202550'>NP-hard.</span> <span m='2206210'>What</span> <span
  m='2206360'>does</span> <span m='2206490'>NP-hard</span> <span
  m='2206990'>mean?</span> <span m='2208420'>This</span> <span
  m='2208530'>means</span> <span m='2210420'>as</span> <span
  m='2210590'>hard</span> <span m='2210970'>as</span> <span
  m='2212850'>every</span> <span m='2213130'>problem</span> <span
  m='2214000'>in</span> <span m='2214150'>NP.</span> </p><p><span
  m='2219340'>I</span> <span m='2219540'>can't</span> <span
  m='2219780'>say</span> <span m='2219910'>harder</span> <span
  m='2220310'>than</span> <span m='2220600'>because</span> <span
  m='2221010'>it's</span> <span m='2221310'>non-strict.</span> <span
  m='2222010'>So</span> <span m='2222230'>it's</span> <span
  m='2222360'>at</span> <span m='2222440'>least</span> <span
  m='2222740'>as</span> <span m='2222840'>hard</span> <span
  m='2223580'>as</span> <span m='2223830'>every</span> <span
  m='2224130'>problem</span> <span m='2224480'>in</span> <span
  m='2224710'>NP.</span> <span m='2224910'>And that's</span> <span
  m='2224980'>why</span> <span m='2225390'>I</span> <span m='2225650'>drew
  it</span> <span m='2226230'>at</span> <span m='2226420'>the</span> <span
  m='2226500'>far</span> <span m='2226850'>right.</span> <span
  m='2227580'>It's</span> <span m='2227760'>sort</span> <span
  m='2227930'>of</span> <span m='2228010'>the</span> <span
  m='2228070'>hardest</span> <span m='2228610'>extreme</span> <span
  m='2229610'>of</span> <span m='2229750'>NP.</span> <span
  m='2230340'>Among</span> <span m='2230620'>everything</span> <span
  m='2231150'>in</span> <span m='2231220'>NP</span> <span m='2231510'>you</span>
  <span m='2231620'>can</span> <span m='2231760'>possibly</span> <span
  m='2232180'>imagine,</span> <span m='2233030'>Tetris</span> <span
  m='2233480'>is</span> <span m='2233590'>as</span> <span
  m='2233730'>hard</span> <span m='2233980'>as</span> <span m='2234080'>all
  of</span> <span m='2234370'>them.</span> <span m='2236000'>And</span> <span
  m='2236170'>therefore,</span> <span m='2237080'>if</span> <span
  m='2237220'>there's</span> <span m='2237480'>anything</span> <span
  m='2237970'>that's</span> <span m='2238120'>harder</span> <span
  m='2238380'>than</span> <span m='2238570'>P,</span> <span
  m='2239430'>then</span> <span m='2239600'>Tetris</span> <span
  m='2239970'>is</span> <span m='2240080'>going</span> <span
  m='2240200'>to</span> <span m='2240260'>be</span> <span
  m='2240360'>harder</span> <span m='2240600'>than</span> <span
  m='2240770'>P</span> <span m='2240990'>because</span> <span
  m='2241330'>it's</span> <span m='2242350'>as</span> <span
  m='2242460'>far</span> <span m='2242740'>to</span> <span
  m='2242840'>the</span> <span m='2242940'>right</span> <span
  m='2243100'>as</span> <span m='2243200'>possible.</span> </p><p><span
  m='2243700'>Either</span> <span m='2244010'>P equals</span> <span
  m='2244410'>NP,</span> <span m='2245130'>in</span> <span
  m='2245240'>which</span> <span m='2245420'>case</span> <span
  m='2245660'>the</span> <span m='2245780'>picture</span> <span
  m='2246120'>is</span> <span m='2246290'>like</span> <span
  m='2246470'>this.</span> <span m='2247490'>Here's</span> <span
  m='2247680'>P.</span> <span m='2248860'>Here's</span> <span
  m='2249100'>NP.</span> <span m='2249920'>Tetris</span> <span
  m='2250330'>is</span> <span m='2250410'>still</span> <span
  m='2250660'>at</span> <span m='2250730'>the</span> <span
  m='2250820'>right</span> <span m='2250990'>extreme,</span> <span
  m='2251380'>here.</span> <span m='2252300'>But</span> <span
  m='2252890'>it's</span> <span m='2253100'>less</span> <span
  m='2253290'>interesting</span> <span m='2253780'>because</span> <span
  m='2254000'>it's</span> <span m='2254140'>still</span> <span
  m='2254330'>in</span> <span m='2254440'>P.</span> <span m='2255430'>Or</span>
  <span m='2255830'>the</span> <span m='2255950'>picture</span> <span
  m='2256220'>looks</span> <span m='2256420'>like</span> <span
  m='2256570'>this,</span> <span m='2256860'>and</span> <span
  m='2256930'>NP</span> <span m='2257060'>is</span> <span
  m='2257240'>strictly</span> <span m='2257590'>bigger</span> <span
  m='2257850'>than</span> <span m='2258030'>P.</span> <span
  m='2258640'>And</span> <span m='2258800'>then,</span> <span
  m='2259060'>because</span> <span m='2259335'>Tetris is</span> <span
  m='2259610'>at</span> <span m='2259720'>the</span> <span
  m='2259820'>right</span> <span m='2259980'>extreme,</span> <span
  m='2261020'>it's</span> <span m='2261180'>outside</span> <span m='2261560'>of
  P.</span> <span m='2263070'>So</span> <span m='2263900'>we</span> <span
  m='2264090'>prove</span> <span m='2264350'>this</span> <span
  m='2264960'>in</span> <span m='2265130'>order</span> <span
  m='2265290'>to</span> <span m='2266220'>establish</span> <span
  m='2266670'>this</span> <span m='2266840'>claim.</span> </p><p><span
  m='2271010'>Just</span> <span m='2271110'>to</span> <span
  m='2271240'>get</span> <span m='2271400'>some</span> <span
  m='2271540'>terminology,</span> <span m='2272120'>what</span> <span
  m='2272630'>is</span> <span m='2272750'>this</span> <span
  m='2272900'>NP-complete</span> <span m='2273580'>business?</span> <span
  m='2278810'>Tetris</span> <span m='2279220'>is</span> <span
  m='2280480'>NP-complete,</span> <span m='2288170'>which</span> <span
  m='2288480'>means</span> <span m='2288810'>two</span> <span
  m='2288970'>things.</span> <span m='2289550'>One</span> <span
  m='2289670'>is</span> <span m='2289790'>that</span> <span
  m='2290200'>it's</span> <span m='2290420'>NP-hard.</span> <span
  m='2291470'>And</span> <span m='2291630'>the</span> <span m='2291740'>other
  is</span> <span m='2292070'>that</span> <span m='2292190'>it's</span> <span
  m='2292500'>in</span> <span m='2292730'>NP.</span> <span m='2293960'>So</span>
  <span m='2294070'>if</span> <span m='2294140'>you</span> <span
  m='2294240'>think</span> <span m='2294410'>of</span> <span
  m='2294480'>the</span> <span m='2294630'>intersection,</span> <span
  m='2295220'>NP</span> <span m='2296020'>intersect</span> <span
  m='2296340'>NP-hard,</span> <span m='2297210'>that's</span> <span
  m='2297430'>NP-complete.</span> <span m='2298210'>Let</span> <span
  m='2298380'>me</span> <span m='2298510'>draw</span> <span
  m='2299280'>on</span> <span m='2299820'>the</span> <span
  m='2300720'>picture</span> <span m='2301050'>here</span> <span
  m='2305320'>what this</span> <span m='2305510'>means.</span> <span
  m='2306490'>So</span> <span m='2306790'>I'm</span> <span
  m='2306910'>going</span> <span m='2307040'>to</span> <span
  m='2307100'>draw</span> <span m='2307360'>it</span> <span
  m='2307420'>on</span> <span m='2307690'>the</span> <span
  m='2307870'>top.</span> </p><p><span m='2318590'>This</span> <span
  m='2319100'>is</span> <span m='2319410'>NP-hard.</span> <span
  m='2322390'>Everything</span> <span m='2322820'>from</span> <span
  m='2323020'>here</span> <span m='2323560'>to</span> <span
  m='2323690'>the</span> <span m='2323880'>right</span> <span
  m='2324750'>is</span> <span m='2324920'>NP-hard.</span> <span
  m='2326040'>NP-hard</span> <span m='2326640'>means</span> <span
  m='2326850'>it's</span> <span m='2327010'>at</span> <span
  m='2327100'>least</span> <span m='2327550'>as</span> <span
  m='2327650'>hard</span> <span m='2327960'>as</span> <span
  m='2328130'>everything</span> <span m='2328640'>in</span> <span
  m='2328720'>NP.</span> <span m='2329170'>That</span> <span
  m='2329330'>means</span> <span m='2329550'>it</span> <span
  m='2329650'>might</span> <span m='2329850'>be</span> <span
  m='2329930'>at</span> <span m='2330010'>this</span> <span
  m='2330160'>line</span> <span m='2330380'>or</span> <span
  m='2330520'>it</span> <span m='2330570'>might</span> <span
  m='2330750'>be</span> <span m='2330860'>to</span> <span m='2331010'>the</span>
  <span m='2331180'>right.</span> <span m='2332390'>But</span> <span
  m='2332530'>in</span> <span m='2332620'>the</span> <span
  m='2332710'>case</span> <span m='2332950'>of</span> <span
  m='2333040'>Tetris,</span> <span m='2333580'>we</span> <span
  m='2333730'>know</span> <span m='2334360'>that it's</span> <span
  m='2334570'>in</span> <span m='2334740'>NP.</span> <span m='2335130'>We</span>
  <span m='2335330'>proved</span> <span m='2335640'>that</span> <span
  m='2335810'>a</span> <span m='2335870'>couple</span> <span
  m='2336140'>of</span> <span m='2336240'>times.</span> <span
  m='2337570'>And</span> <span m='2337680'>so</span> <span m='2337860'>we</span>
  <span m='2337970'>know</span> <span m='2338130'>that</span> <span
  m='2338230'>Tetris</span> <span m='2338590'>is</span> <span
  m='2338700'>also</span> <span m='2338990'>in</span> <span
  m='2339080'>this</span> <span m='2339250'>range.</span> <span
  m='2339535'>And</span> <span m='2339820'>so</span> <span m='2339850'>if</span>
  <span m='2339910'>it's</span> <span m='2340040'>in</span> <span
  m='2340120'>this</span> <span m='2340330'>range</span> <span
  m='2340710'>and</span> <span m='2340980'>in</span> <span
  m='2341070'>this</span> <span m='2341250'>range,</span> <span
  m='2341850'>it's</span> <span m='2341980'>got</span> <span
  m='2342130'>to</span> <span m='2342180'>be</span> <span
  m='2342580'>right</span> <span m='2342830'>here.</span> </p><p><span
  m='2343690'>Completeness</span> <span m='2344440'>is</span> <span
  m='2344640'>nice.</span> <span m='2344940'>If</span> <span
  m='2345110'>you</span> <span m='2345210'>prove</span> <span
  m='2345500'>something</span> <span m='2345850'>is</span> <span
  m='2346040'>something</span> <span m='2346390'>complete--</span> <span
  m='2347370'>prove a</span> <span m='2347440'>problem</span> <span
  m='2347860'>is</span> <span m='2348000'>some</span> <span
  m='2348390'>complexity</span> <span m='2348870'>class</span> <span
  m='2349130'>complete--</span> <span m='2349920'>then</span> <span
  m='2350060'>you know</span> <span m='2350350'>sort</span> <span
  m='2350640'>of</span> <span m='2350710'>exactly</span> <span m='2351230'>where
  it</span> <span m='2351430'>falls</span> <span m='2351750'>on</span> <span
  m='2351890'>this</span> <span m='2352060'>line.</span> <span
  m='2353550'>NP-complete</span> <span m='2354190'>means</span> <span
  m='2354430'>right</span> <span m='2354620'>here.</span> <span
  m='2355750'>EXP-complete</span> <span m='2357190'>means</span> <span
  m='2357450'>right</span> <span m='2357640'>here.</span> </p><p><span
  m='2358520'>Turns</span> <span m='2358760'>out</span> <span
  m='2358930'>Chess</span> <span m='2359820'>is</span> <span
  m='2360100'>EXP-complete.</span> <span m='2362880'>EXP-hard</span> <span
  m='2365320'>is</span> <span m='2365680'>anything</span> <span
  m='2366070'>from</span> <span m='2366210'>here</span> <span
  m='2366500'>over.</span> <span m='2367710'>EXP</span> <span
  m='2367970'>is</span> <span m='2368230'>anything</span> <span
  m='2368560'>from</span> <span m='2368700'>here,</span> <span
  m='2369240'>over</span> <span m='2369490'>this</span> <span
  m='2369680'>way.</span> <span m='2370670'>Chess</span> <span
  m='2370990'>is</span> <span m='2371120'>right</span> <span
  m='2371380'>at</span> <span m='2371500'>that</span> <span
  m='2371930'>borderline.</span> <span m='2372335'>It</span> <span
  m='2372740'>is</span> <span m='2372970'>the</span> <span
  m='2373040'>hardest</span> <span m='2373500'>problem</span> <span
  m='2373890'>in</span> <span m='2373990'>EXP.</span> <span
  m='2374710'>And</span> <span m='2374870'>that's</span> <span
  m='2375100'>actually</span> <span m='2375370'>the</span> <span
  m='2375510'>only</span> <span m='2375720'>way</span> <span
  m='2375850'>we</span> <span m='2375970'>know</span> <span
  m='2376220'>to</span> <span m='2376330'>prove</span> <span
  m='2376810'>that</span> <span m='2377030'>it's</span> <span
  m='2377230'>not</span> <span m='2377430'>NP.</span> <span
  m='2377970'>It's</span> <span m='2378370'>is</span> <span
  m='2378530'>pretty</span> <span m='2378750'>easy</span> <span
  m='2378910'>to</span> <span m='2378960'>show</span> <span
  m='2379120'>that</span> <span m='2379240'>EXP</span> <span
  m='2379530'>is</span> <span m='2379690'>bigger</span> <span
  m='2379970'>than</span> <span m='2380160'>P.</span> <span
  m='2380980'>And</span> <span m='2381160'>Chess</span> <span
  m='2381410'>is</span> <span m='2381510'>the</span> <span
  m='2381600'>farthest</span> <span m='2382040'>to</span> <span
  m='2382130'>the</span> <span m='2382230'>right</span> <span
  m='2382495'>in</span> <span m='2382760'>EXP--</span> <span
  m='2383770'>of</span> <span m='2383920'>any</span> <span
  m='2384130'>problem</span> <span m='2384500'>in</span> <span
  m='2384570'>EXP--</span> <span m='2385520'>and</span> <span
  m='2385650'>so,</span> <span m='2385810'>therefore,</span> <span
  m='2386080'>it's</span> <span m='2386190'>not in</span> <span
  m='2386390'>P.</span> </p><p><span m='2387800'>So</span> <span
  m='2388270'>whereas</span> <span m='2388450'>this</span> <span
  m='2388610'>one--</span> <span m='2388950'>these</span> <span
  m='2389120'>two,</span> <span m='2389400'>we're</span> <span
  m='2389530'>not</span> <span m='2389720'>sure</span> <span
  m='2390050'>are</span> <span m='2390210'>they</span> <span
  m='2390330'>equal.</span> <span m='2391350'>This</span> <span
  m='2392000'>line</span> <span m='2392240'>we</span> <span
  m='2392340'>know</span> <span m='2392500'>is</span> <span
  m='2392610'>different</span> <span m='2392920'>from</span> <span
  m='2393050'>this</span> <span m='2393220'>one.</span> <span
  m='2395190'>We</span> <span m='2395350'>don't</span> <span
  m='2395500'>know</span> <span m='2395590'>about</span> <span
  m='2395800'>these</span> <span m='2396030'>two,</span> <span
  m='2396430'>though.</span> <span m='2398720'>Does</span> <span
  m='2398920'>NP</span> <span m='2399430'>equal</span> <span
  m='2399700'>EXP?</span> <span m='2401550'>Not</span> <span
  m='2401750'>as</span> <span m='2401860'>famous.</span> <span
  m='2402240'>You</span> <span m='2402350'>won't</span> <span
  m='2402490'>get</span> <span m='2402590'>a</span> <span
  m='2402630'>million</span> <span m='2402890'>dollars,</span> <span
  m='2403420'>but</span> <span m='2404120'>still a</span> <span
  m='2404420'>very</span> <span m='2404630'>big,</span> <span
  m='2404850'>open</span> <span m='2405120'>question.</span> </p><p><span
  m='2407550'>What else</span> <span m='2407845'>do</span> <span m='2408140'>I
  wanna</span> <span m='2408380'>say?</span> <span m='2409590'>Tetris,</span>
  <span m='2410010'>Chess,</span> <span m='2410370'>EXP-hard.</span> <span
  m='2411020'>So</span> <span m='2411130'>these</span> <span
  m='2411390'>lines,</span> <span m='2411950'>here--</span> <span
  m='2412960'>this</span> <span m='2413140'>is</span> <span
  m='2413280'>NP-complete</span> <span m='2416540'>And</span> <span
  m='2416700'>this</span> <span m='2416920'>is</span> <span
  m='2417110'>EXP-complete.</span> </p><p><span m='2435980'>So</span> <span
  m='2436220'>the</span> <span m='2436370'>last</span> <span
  m='2436700'>thing</span> <span m='2436880'>I</span> <span
  m='2436910'>want</span> <span m='2437070'>to</span> <span
  m='2437140'>talk</span> <span m='2437390'>about</span> <span
  m='2438230'>is</span> <span m='2438570'>reductions.</span> <span
  m='2443770'>Reductions--</span> <span m='2444430'>so</span> <span
  m='2444580'>how</span> <span m='2444790'>do</span> <span
  m='2444840'>you</span> <span m='2445000'>prove</span> <span
  m='2445260'>something</span> <span m='2445590'>like</span> <span
  m='2445780'>this?</span> <span m='2445980'>What</span> <span
  m='2446140'>is</span> <span m='2446290'>as</span> <span
  m='2446470'>hard</span> <span m='2446810'>as</span> <span
  m='2447010'>even</span> <span m='2447290'>mean?</span> <span m='2447710'>I
  haven't</span> <span m='2448010'>defined</span> <span m='2448090'>that.</span>
  <span m='2449230'>But</span> <span m='2449380'>it's</span> <span
  m='2449500'>not</span> <span m='2449660'>hard</span> <span
  m='2449860'>to</span> <span m='2449950'>define.</span> <span
  m='2451270'>In</span> <span m='2451400'>fact,</span> <span
  m='2451640'>it's</span> <span m='2451760'>a</span> <span
  m='2451820'>concept</span> <span m='2452210'>we've</span> <span
  m='2452370'>seen</span> <span m='2452640'>already.</span> </p><p><span
  m='2478610'>Reductions</span> <span m='2479180'>are</span> <span
  m='2479270'>actually</span> <span m='2479720'>a</span> <span
  m='2479870'>way</span> <span m='2480080'>to</span> <span
  m='2480200'>design</span> <span m='2480560'>algorithms</span> <span
  m='2481380'>that</span> <span m='2481570'>we've</span> <span
  m='2481850'>been</span> <span m='2482370'>using</span> <span
  m='2482780'>implicitly</span> <span m='2483990'>a</span> <span
  m='2484110'>lot.</span> <span m='2484460'>You</span> <span m='2484580'>may
  have</span> <span m='2484850'>even</span> <span m='2485010'>heard</span> <span
  m='2485220'>this</span> <span m='2485380'>term.</span> <span
  m='2485770'>A</span> <span m='2485980'>bunch</span> <span
  m='2486170'>of</span> <span m='2486270'>recitations</span> <span
  m='2486840'>have</span> <span m='2487060'>used</span> <span
  m='2487300'>the</span> <span m='2487390'>word</span> <span
  m='2487530'>reduction</span> <span m='2488010'>for</span> <span
  m='2488270'>graph</span> <span m='2488700'>reduction.</span> <span
  m='2489970'>You</span> <span m='2490060'>have</span> <span
  m='2490270'>some</span> <span m='2490420'>problem,</span> <span
  m='2491340'>you</span> <span m='2491460'>convert it</span> <span
  m='2491770'>into</span> <span m='2491990'>a</span> <span
  m='2492030'>graph</span> <span m='2492310'>problem,</span> <span
  m='2493150'>then</span> <span m='2493270'>you</span> <span
  m='2493360'>just</span> <span m='2493650'>call</span> <span
  m='2493870'>the</span> <span m='2493950'>graph</span> <span
  m='2494220'>algorithm.</span> <span m='2494590'>You're</span> <span
  m='2494740'>done.</span> <span m='2495830'>That's</span> <span
  m='2495930'>reduction.</span> </p><p><span m='2496760'>In</span> <span
  m='2496870'>general,</span> <span m='2497730'>you</span> <span
  m='2497810'>have</span> <span m='2497990'>some</span> <span
  m='2498160'>problem,</span> <span m='2498540'>A,</span> <span
  m='2498820'>that</span> <span m='2499150'>you</span> <span
  m='2499290'>want</span> <span m='2499460'>to</span> <span
  m='2499500'>solve.</span> <span m='2500830'>And</span> <span
  m='2501240'>you</span> <span m='2501440'>convert</span> <span
  m='2501860'>it</span> <span m='2502160'>into</span> <span
  m='2502430'>some</span> <span m='2502660'>other</span> <span
  m='2502840'>problem,</span> <span m='2503180'>B,</span> <span m='2504030'>that
  you</span> <span m='2504140'>already</span> <span m='2504710'>know</span>
  <span m='2504930'>how</span> <span m='2505060'>to</span> <span
  m='2505160'>solve.</span> <span m='2506260'>It's</span> <span
  m='2506400'>a</span> <span m='2506460'>great</span> <span
  m='2506710'>tool</span> <span m='2506940'>because,</span> <span
  m='2507330'>in</span> <span m='2507420'>this</span> <span
  m='2507560'>class,</span> <span m='2507890'>you</span> <span
  m='2508000'>learn</span> <span m='2508220'>tons</span> <span
  m='2508460'>of</span> <span m='2508540'>algorithms</span> <span
  m='2508960'>for</span> <span m='2509070'>solving</span> <span
  m='2509380'>tons</span> <span m='2509590'>of</span> <span
  m='2509670'>problems.</span> </p><p><span m='2510630'>Now,</span> <span
  m='2511940'>someone</span> <span m='2512400'>gives</span> <span
  m='2512630'>you,</span> <span m='2512920'>in</span> <span
  m='2513190'>your</span> <span m='2513310'>job</span> <span
  m='2513710'>or</span> <span m='2513810'>whatever,</span> <span
  m='2515070'>or</span> <span m='2515530'>you</span> <span
  m='2515610'>think</span> <span m='2515850'>about</span> <span
  m='2516180'>some</span> <span m='2516350'>problem</span> <span
  m='2516710'>that</span> <span m='2516830'>you</span> <span
  m='2516950'>don't</span> <span m='2517170'>know</span> <span
  m='2517250'>how</span> <span m='2517410'>to</span> <span
  m='2517490'>solve,</span> <span m='2518430'>the</span> <span
  m='2518520'>first</span> <span m='2518830'>thing</span> <span
  m='2518940'>you</span> <span m='2519020'>should</span> <span
  m='2519180'>do</span> <span m='2519340'>is--</span> <span
  m='2519650'>can</span> <span m='2519900'>I</span> <span m='2519970'>convert
  it</span> <span m='2520390'>into</span> <span m='2520630'>something</span>
  <span m='2521000'>I</span> <span m='2521040'>know</span> <span
  m='2521170'>how</span> <span m='2521260'>to</span> <span
  m='2521350'>solve</span> <span m='2521600'>because</span> <span
  m='2521730'>then</span> <span m='2521850'>you're</span> <span
  m='2521960'>done.</span> <span m='2522930'>Now it</span> <span
  m='2522980'>may</span> <span m='2523130'>not</span> <span
  m='2523300'>be</span> <span m='2523410'>the</span> <span
  m='2523510'>best</span> <span m='2523860'>way</span> <span
  m='2523950'>to</span> <span m='2524040'>solve it,</span> <span m='2524390'>but
  at least</span> <span m='2524740'>it's</span> <span m='2524920'>a</span> <span
  m='2525070'>way</span> <span m='2525250'>to</span> <span
  m='2525360'>solve</span> <span m='2525650'>it.</span> <span
  m='2526410'>Probably</span> <span m='2526710'>in</span> <span
  m='2526790'>polynomial</span> <span m='2527310'>time</span> <span
  m='2527600'>because</span> <span m='2528300'>we</span> <span
  m='2528400'>think</span> <span m='2528580'>of</span> <span m='2528680'>B
  as</span> <span m='2529000'>things</span> <span m='2529190'>you</span> <span
  m='2529290'>can solve in</span> <span m='2529710'>polynomial</span> <span
  m='2530110'>time.</span> <span m='2530390'>Great.</span> </p><p><span
  m='2533160'>So</span> <span m='2533600'>just</span> <span
  m='2533930'>convert</span> <span m='2539370'>problem</span> <span
  m='2539940'>A,</span> <span m='2540380'>which</span> <span
  m='2540530'>you</span> <span m='2540730'>want</span> <span
  m='2541070'>to</span> <span m='2541170'>solve,</span> <span
  m='2542820'>into</span> <span m='2544160'>some</span> <span
  m='2544430'>problem</span> <span m='2544840'>B</span> <span
  m='2546260'>that</span> <span m='2546630'>you</span> <span
  m='2546760'>know</span> <span m='2546950'>how</span> <span
  m='2547070'>to</span> <span m='2547180'>solve.</span> <span
  m='2550690'>That's</span> <span m='2550800'>reduction.</span> <span
  m='2552370'>Let</span> <span m='2552530'>me</span> <span
  m='2552620'>give</span> <span m='2552750'>you</span> <span
  m='2552820'>some</span> <span m='2553010'>examples</span> <span
  m='2553510'>that</span> <span m='2553590'>we've</span> <span
  m='2553750'>already</span> <span m='2553990'>seen,</span> <span
  m='2555460'>just</span> <span m='2555630'>to</span> <span
  m='2556210'>fit</span> <span m='2556340'>this</span> <span
  m='2556510'>into</span> <span m='2556720'>your</span> <span
  m='2556960'>mental</span> <span m='2557250'>map</span> <span
  m='2557540'>of</span> <span m='2557720'>the</span> <span
  m='2557800'>class.</span> <span m='2562640'>It's</span> <span
  m='2562750'>kind</span> <span m='2562920'>of</span> <span m='2563010'>a</span>
  <span m='2563080'>funny</span> <span m='2563340'>one</span> <span
  m='2563550'>but</span> <span m='2563730'>it's</span> <span
  m='2563830'>a</span> <span m='2564120'>very</span> <span
  m='2564300'>simple</span> <span m='2564590'>one.</span> </p><p><span
  m='2572470'>So</span> <span m='2572900'>how</span> <span m='2573020'>do</span>
  <span m='2573080'>you</span> <span m='2573160'>solve</span> <span
  m='2573460'>unweighted</span> <span m='2573840'>shortest</span> <span
  m='2574180'>paths?</span> <span m='2578300'>In</span> <span
  m='2578420'>general?</span> <span m='2579810'>Easy</span> <span
  m='2580030'>one.</span> <span m='2580670'>Give</span> <span m='2580760'>you
  a</span> <span m='2580870'>graph</span> <span m='2581130'>with</span> <span
  m='2581260'>no</span> <span m='2581450'>weights</span> <span
  m='2581750'>on</span> <span m='2581810'>the</span> <span
  m='2581920'>edges</span> <span m='2582190'>and I</span> <span
  m='2582240'>want</span> <span m='2582400'>to the</span> <span
  m='2582500'>shortest</span> <span m='2582960'>path</span> <span
  m='2583323'>from s to</span> <span m='2583686'>t.</span> </p><p><span
  m='2584466'>AUDIENCE: BFS</span> </p><p><span m='2585390'>PROFESSOR:
  BFS.</span> <span m='2586180'>Linear</span> <span m='2586440'>time,</span>
  <span m='2586770'>right?</span> <span m='2587600'>Well,</span> <span
  m='2587720'>that's</span> <span m='2587920'>if</span> <span
  m='2588030'>you're</span> <span m='2588160'>smart</span> <span
  m='2589160'>or</span> <span m='2589700'>if</span> <span m='2589860'>you</span>
  <span m='2590050'>feel</span> <span m='2590270'>like</span> <span
  m='2590450'>implementing</span> <span m='2590830'>BFS.</span> <span
  m='2591250'>Suppose</span> <span m='2591650'>someone</span> <span
  m='2591980'>gave</span> <span m='2592210'>you</span> <span
  m='2592800'>Djikstra.</span> <span m='2594380'>Said,</span> <span
  m='2594510'>here,</span> <span m='2594730'>look,</span> <span
  m='2594920'>I've</span> <span m='2595010'>got</span> <span
  m='2595180'>Djikstra</span> <span m='2595480'>code.</span> <span
  m='2596125'>You don't</span> <span m='2596520'>have</span> <span
  m='2596600'>to do</span> <span m='2596730'>anything.</span> <span
  m='2597150'>There's Djisktra</span> <span m='2597650'>code</span> <span
  m='2597850'>right</span> <span m='2598060'>there.</span> <span
  m='2598940'>But</span> <span m='2599180'>Djikstra</span> <span
  m='2599540'>solves</span> <span m='2599920'>weighted</span> <span
  m='2600360'>shortest</span> <span m='2600690'>path.</span> <span
  m='2601100'>I</span> <span m='2601230'>don't</span> <span
  m='2601380'>have</span> <span m='2601710'>any</span> <span
  m='2601860'>weights.</span> <span m='2602160'>What</span> <span
  m='2602380'>do</span> <span m='2602520'>I</span> <span m='2602610'>do?</span>
  <span m='2604960'>Set</span> <span m='2605220'>the</span> <span
  m='2605320'>weights</span> <span m='2605450'>to</span> <span
  m='2605670'>1.</span> </p><p><span m='2608140'>It's</span> <span
  m='2608180'>very</span> <span m='2608410'>easy,</span> <span
  m='2609130'>but</span> <span m='2609390'>this</span> <span
  m='2609610'>is</span> <span m='2609730'>a</span> <span
  m='2609800'>reduction--</span> <span m='2610630'>a</span> <span
  m='2610680'>simple</span> <span m='2611020'>example of</span> <span
  m='2611450'>reduction.</span> <span m='2612460'>Not</span> <span
  m='2612680'>the</span> <span m='2612780'>smartest</span> <span
  m='2613410'>of</span> <span m='2613500'>reductions,</span> <span
  m='2614300'>but</span> <span m='2614610'>it's</span> <span
  m='2614850'>a</span> <span m='2614900'>reduction.</span> <span
  m='2618840'>So</span> <span m='2619120'>I</span> <span m='2619230'>can</span>
  <span m='2619420'>convert</span> <span m='2620040'>unweighted</span> <span
  m='2620295'>shortest</span> <span m='2620550'>paths</span> <span
  m='2620780'>into</span> <span m='2620950'>weighted</span> <span
  m='2621180'>shortest</span> <span m='2621500'>paths</span> <span
  m='2621700'>by</span> <span m='2621870'>adding</span> <span
  m='2622310'>weights</span> <span m='2622580'>of</span> <span
  m='2622710'>1.</span> <span m='2623750'>Done.</span> <span
  m='2624320'>Adding</span> <span m='2624520'>weights</span> <span
  m='2624700'>of</span> <span m='2624780'>0</span> <span
  m='2625410'>would</span> <span m='2625540'>not</span> <span
  m='2625730'>work.</span> <span m='2626070'>But</span> <span
  m='2626410'>weights of</span> <span m='2626630'>1.</span> <span
  m='2627170'>OK.</span> <span m='2627900'>Weights</span> <span
  m='2628070'>of</span> <span m='2628170'>2</span> <span m='2628600'>also</span>
  <span m='2628860'>works.</span> <span m='2630020'>Pick</span> <span
  m='2630180'>your</span> <span m='2630300'>favorite</span> <span
  m='2630590'>number,</span> <span m='2630840'>but</span> <span
  m='2631050'>as</span> <span m='2631140'>long</span> <span
  m='2631290'>as</span> <span m='2631350'>you're</span> <span
  m='2631460'>consistent</span> <span m='2631950'>about</span> <span
  m='2632280'>it.</span> <span m='2632780'>That's</span> <span
  m='2633150'>a</span> <span m='2633240'>reduction.</span> </p><p><span
  m='2634520'>Here's</span> <span m='2634780'>some</span> <span
  m='2634840'>more</span> <span m='2635020'>interesting</span> <span
  m='2635380'>ones.</span> <span m='2636570'>On</span> <span
  m='2636690'>the</span> <span m='2636770'>problems</span> <span
  m='2637170'>set--</span> <span m='2638380'>problem</span> <span
  m='2638630'>set</span> <span m='2639010'>six--</span> <span m='2643920'>there
  was this</span> <span m='2644250'>RenBook</span> <span
  m='2644730'>problem,</span> <span m='2646200'>"I</span> <span
  m='2646430'>Can</span> <span m='2646680'>Haz</span> <span
  m='2647020'>Moar</span> <span m='2647260'>Frendz?"</span> <span
  m='2648215'>That was the name</span> <span m='2648560'>of</span> <span
  m='2648620'>the</span> <span m='2648710'>problem.</span> <span
  m='2649580'>And</span> <span m='2650950'>the</span> <span
  m='2651970'>goal</span> <span m='2652500'>was</span> <span
  m='2652720'>to</span> <span m='2652820'>solve--</span> <span
  m='2654120'>to</span> <span m='2654280'>find</span> <span
  m='2654640'>paths</span> <span m='2655060'>that</span> <span
  m='2655150'>minimize</span> <span m='2655540'>the</span> <span
  m='2655620'>product</span> <span m='2656250'>of</span> <span
  m='2656390'>weights.</span> <span m='2657950'>But</span> <span
  m='2658140'>what</span> <span m='2658260'>we've</span> <span
  m='2658490'>covered</span> <span m='2658790'>in</span> <span
  m='2658870'>class</span> <span m='2659190'>is</span> <span
  m='2659300'>how</span> <span m='2659460'>to</span> <span
  m='2659540'>solve</span> <span m='2659820'>a</span> <span
  m='2659840'>problem</span> <span m='2660190'>when</span> <span
  m='2660340'>it's</span> <span m='2660540'>the</span> <span m='2660620'>sum
  of</span> <span m='2661040'>weights.</span> <span m='2661910'>How</span> <span
  m='2662040'>do</span> <span m='2662100'>you</span> <span m='2662200'>do</span>
  <span m='2662340'>it?</span> <span m='2663890'>In</span> <span
  m='2664030'>one</span> <span m='2664200'>word,</span> <span
  m='2664940'>or</span> <span m='2665060'>less?</span> <span
  m='2666070'>Logs.</span> <span m='2666990'>Just take</span> <span
  m='2667330'>logs.</span> <span m='2668920'>That</span> <span
  m='2669080'>converts</span> <span m='2669360'>products</span> <span
  m='2669870'>into</span> <span m='2670240'>sums.</span> </p><p><span
  m='2671860'>Now</span> <span m='2672040'>you</span> <span
  m='2672130'>start</span> <span m='2672350'>to</span> <span
  m='2672410'>get</span> <span m='2672560'>the</span> <span
  m='2672640'>flavor.</span> <span m='2672930'>This</span> <span
  m='2673140'>is</span> <span m='2673250'>a</span> <span
  m='2673330'>problem</span> <span m='2673630'>that</span> <span
  m='2674490'>you</span> <span m='2674740'>could</span> <span
  m='2675180'>take</span> <span m='2675630'>Djikstra</span> <span
  m='2676040'>or</span> <span m='2676150'>Bellman-Ford,</span> <span
  m='2677150'>and</span> <span m='2677670'>change</span> <span
  m='2678110'>all</span> <span m='2678210'>the</span> <span
  m='2678300'>relaxation</span> <span m='2678920'>steps</span> <span
  m='2679390'>and</span> <span m='2679710'>change</span> <span
  m='2680170'>it</span> <span m='2680300'>to</span> <span
  m='2680430'>work</span> <span m='2680770'>directly</span> <span
  m='2681220'>with</span> <span m='2681370'>products.</span> <span
  m='2682470'>That</span> <span m='2683890'>would</span> <span
  m='2684060'>work,</span> <span m='2685130'>but</span> <span
  m='2685260'>it's</span> <span m='2685440'>more</span> <span
  m='2685780'>work.</span> <span m='2686570'>You</span> <span m='2686710'>have
  to</span> <span m='2686800'>prove</span> <span m='2687190'>that</span> <span
  m='2687310'>that's</span> <span m='2687520'>still</span> <span
  m='2687820'>correct.</span> <span m='2689200'>It's</span> <span
  m='2689420'>annoying</span> <span m='2689800'>to</span> <span
  m='2689870'>think</span> <span m='2690080'>about.</span> <span
  m='2690500'>And</span> <span m='2690920'>it's</span> <span
  m='2691150'>annoying</span> <span m='2691530'>to</span> <span
  m='2691980'>program.</span> <span m='2692660'>It's</span> <span
  m='2692820'>not</span> <span m='2693030'>modular,</span> <span
  m='2693620'>blah, blah,</span> <span m='2693940'>blah.</span> </p><p><span
  m='2694590'>Whereas</span> <span m='2694840'>if</span> <span
  m='2694940'>you</span> <span m='2695030'>just do this</span> <span
  m='2695480'>reduction,</span> <span m='2696720'>you</span> <span
  m='2696850'>can</span> <span m='2696960'>use</span> <span
  m='2697100'>exactly</span> <span m='2697790'>the</span> <span
  m='2697960'>code</span> <span m='2698330'>that</span> <span
  m='2698480'>you</span> <span m='2698730'>had</span> <span
  m='2698970'>before,</span> <span m='2699990'>at</span> <span
  m='2700100'>the</span> <span m='2700210'>end.</span> <span
  m='2701960'>So</span> <span m='2702020'>that's</span> <span
  m='2702230'>nice.</span> <span m='2703220'>This</span> <span
  m='2703430'>is</span> <span m='2703550'>why</span> <span
  m='2703810'>reductions</span> <span m='2704390'>are</span> <span
  m='2704470'>really</span> <span m='2704670'>the</span> <span
  m='2704800'>most</span> <span m='2705360'>common</span> <span
  m='2706360'>algorithm</span> <span m='2706740'>design</span> <span
  m='2707080'>technique</span> <span m='2707490'>because</span> <span
  m='2707590'>you</span> <span m='2707690'>don't</span> <span
  m='2707840'>want</span> <span m='2707970'>to</span> <span
  m='2708020'>implement</span> <span m='2708460'>an</span> <span
  m='2708540'>algorithm</span> <span m='2708860'>for</span> <span
  m='2709080'>every</span> <span m='2709340'>single</span> <span
  m='2709640'>problem</span> <span m='2709930'>you</span> <span
  m='2710020'>have.</span> <span m='2711540'>It would be nice if</span> <span
  m='2711910'>you</span> <span m='2712000'>could</span> <span
  m='2712120'>reuse</span> <span m='2712590'>some</span> <span
  m='2712780'>of</span> <span m='2712830'>those</span> <span
  m='2712990'>algorithms that</span> <span m='2713410'>you</span> <span
  m='2713580'>had</span> <span m='2713770'>before.</span> <span
  m='2714630'>Reductions</span> <span m='2715130'>let</span> <span
  m='2715260'>you</span> <span m='2715360'>do</span> <span
  m='2715480'>that.</span> </p><p><span m='2717100'>Another</span> <span
  m='2717370'>one,</span> <span m='2719190'>which</span> <span
  m='2719470'>was</span> <span m='2719700'>on</span> <span
  m='2719970'>the</span> <span m='2720060'>quiz</span> <span
  m='2720530'>in</span> <span m='2720650'>the</span> <span
  m='2720750'>true-false--</span> <span m='2721420'>quiz</span> <span
  m='2721680'>two--</span> <span m='2723200'>was</span> <span
  m='2723410'>converting</span> <span m='2723760'>longest</span> <span
  m='2724150'>path</span> <span m='2725100'>into</span> <span
  m='2725260'>shortest</span> <span m='2725620'>path.</span> <span
  m='2725780'>We didn't</span> <span m='2726050'>phrase</span> <span
  m='2726290'>it as</span> <span m='2726480'>a</span> <span
  m='2726550'>reduction.</span> <span m='2726990'>It was</span> <span
  m='2727130'>just</span> <span m='2727430'>can</span> <span
  m='2727610'>you</span> <span m='2727840'>solve</span> <span
  m='2727990'>longest</span> <span m='2728430'>path</span> <span
  m='2729440'>using</span> <span m='2729730'>Bellman-Ford.</span> <span
  m='2730910'>And</span> <span m='2731040'>the</span> <span
  m='2731140'>answer</span> <span m='2731460'>is</span> <span
  m='2731580'>yes.</span> <span m='2731960'>You</span> <span
  m='2732060'>just</span> <span m='2732290'>negate</span> <span
  m='2732660'>all</span> <span m='2732780'>the</span> <span
  m='2732870'>weights.</span> <span m='2733165'>And</span> <span
  m='2733460'>that</span> <span m='2733700'>converts</span> <span m='2733970'>a
  longest</span> <span m='2734370'>path</span> <span m='2734590'>problem</span>
  <span m='2734900'>into</span> <span m='2735080'>a</span> <span
  m='2735130'>shortest</span> <span m='2735460'>path</span> <span
  m='2735630'>problem.</span> <span m='2737660'>Easy.</span> </p><p><span
  m='2740310'>Also</span> <span m='2740620'>on</span> <span
  m='2740700'>the</span> <span m='2740790'>quiz--</span> <span
  m='2741340'>maybe</span> <span m='2741560'>I</span> <span
  m='2741590'>don't</span> <span m='2741750'>need</span> <span
  m='2741900'>to</span> <span m='2742260'>write</span> <span m='2742470'>all
  of</span> <span m='2742650'>these</span> <span m='2742820'>down</span> <span
  m='2743030'>because</span> <span m='2743230'>they're</span> <span
  m='2743390'>a</span> <span m='2743430'>little</span> <span
  m='2743610'>bit</span> <span m='2744460'>weird</span> <span
  m='2744810'>problems.</span> <span m='2745200'>We</span> <span
  m='2745300'>made</span> <span m='2745500'>them</span> <span
  m='2745650'>up.</span> <span m='2746370'>There</span> <span
  m='2746820'>was</span> <span m='2747040'>the--</span> <span
  m='2748026'>what</span> <span m='2748520'>was</span> <span
  m='2748670'>the</span> <span m='2748860'>duck</span> <span
  m='2749090'>tour</span> <span m='2749460'>called?</span> <span
  m='2750220'>Bird</span> <span m='2750460'>tours?</span> <span
  m='2750990'>Bird</span> <span m='2751270'>tours?</span> <span
  m='2751950'>Aviation</span> <span m='2752440'>tours?</span> <span
  m='2752700'>Whatever.</span> <span m='2753610'>You</span> <span
  m='2753760'>want</span> <span m='2753940'>to</span> <span
  m='2754030'>visit</span> <span m='2754360'>a</span> <span
  m='2754410'>bunch</span> <span m='2754730'>of</span> <span
  m='2754880'>sites</span> <span m='2755460'>in</span> <span
  m='2755610'>some</span> <span m='2755870'>specified</span> <span
  m='2756370'>order.</span> <span m='2757280'>The</span> <span
  m='2757720'>point</span> <span m='2757910'>in</span> <span
  m='2757950'>that</span> <span m='2758080'>problem</span> <span
  m='2758320'>is</span> <span m='2758380'>you</span> <span
  m='2758490'>could</span> <span m='2758590'>reduce</span> <span
  m='2758890'>it</span> <span m='2758990'>to</span> <span m='2759080'>a</span>
  <span m='2759140'>single</span> <span m='2759670'>shortest</span> <span
  m='2760030'>paths</span> <span m='2760960'>query.</span> <span
  m='2762900'>And</span> <span m='2763180'>so</span> <span m='2764170'>if</span>
  <span m='2764320'>you</span> <span m='2764440'>already</span> <span
  m='2764620'>have</span> <span m='2764810'>shortest</span> <span
  m='2765090'>path</span> <span m='2765330'>code,</span> <span m='2766020'>you
  don't</span> <span m='2766150'>have</span> <span m='2766330'>to</span> <span
  m='2766420'>think</span> <span m='2766630'>much.</span> <span
  m='2766890'>You</span> <span m='2766970'>just</span> <span
  m='2767150'>do</span> <span m='2767260'>the</span> <span
  m='2767390'>graph</span> <span m='2767690'>application.</span> <span
  m='2768400'>Done.</span> </p><p><span m='2769970'>Then</span> <span
  m='2770200'>there's</span> <span m='2770390'>the</span> <span
  m='2770480'>leaky</span> <span m='2770810'>tank</span> <span
  m='2771120'>problem,</span> <span m='2771600'>which</span> <span
  m='2771640'>is</span> <span m='2771720'>also</span> <span m='2772290'>a</span>
  <span m='2772380'>graph reduction</span> <span m='2772800'>problem.</span>
  <span m='2774680'>You</span> <span m='2774870'>could</span> <span
  m='2775010'>represent</span> <span m='2775460'>all</span> <span
  m='2775620'>these</span> <span m='2775780'>extra</span> <span
  m='2776110'>weird</span> <span m='2776380'>things</span> <span
  m='2776570'>that</span> <span m='2776650'>were</span> <span
  m='2776760'>happening</span> <span m='2777160'>in</span> <span
  m='2777230'>your</span> <span m='2777370'>car</span> <span
  m='2778260'>by</span> <span m='2778390'>just</span> <span
  m='2778640'>changing</span> <span m='2778970'>the</span> <span
  m='2779060'>graph</span> <span m='2779350'>a</span> <span
  m='2779390'>little</span> <span m='2779590'>bit.</span> <span m='2780440'>And
  it's</span> <span m='2780650'>a</span> <span m='2780690'>very</span> <span
  m='2780930'>powerful</span> <span m='2781260'>technique.</span> <span
  m='2781660'>In</span> <span m='2781760'>this</span> <span
  m='2781920'>class,</span> <span m='2782170'>we</span> <span m='2782270'>see
  it</span> <span m='2782450'>mostly</span> <span m='2782880'>in</span> <span
  m='2783020'>graph</span> <span m='2783320'>reductions.</span> <span
  m='2784860'>But</span> <span m='2785110'>it</span> <span
  m='2785450'>could</span> <span m='2785610'>apply</span> <span
  m='2785920'>all</span> <span m='2786070'>over</span> <span
  m='2786210'>the</span> <span m='2786310'>place.</span> </p><p><span
  m='2788120'>And</span> <span m='2788370'>while</span> <span
  m='2788640'>this</span> <span m='2788820'>is</span> <span m='2788940'>a</span>
  <span m='2789020'>powerful</span> <span m='2789390'>technique</span> <span
  m='2789810'>for</span> <span m='2790360'>coming</span> <span
  m='2790690'>up</span> <span m='2790810'>with</span> <span
  m='2790900'>new</span> <span m='2791030'>algorithms,</span> <span
  m='2792080'>it's</span> <span m='2792380'>also</span> <span
  m='2792870'>a</span> <span m='2792950'>powerful</span> <span
  m='2793360'>technique</span> <span m='2794310'>for</span> <span
  m='2794510'>proving</span> <span m='2795920'>things</span> <span
  m='2796250'>like</span> <span m='2798330'>Tetris</span> <span
  m='2798840'>is</span> <span m='2798980'>NP-hard.</span> <span m='2801380'>So
  what</span> <span m='2801750'>we</span> <span m='2801930'>proved</span> <span
  m='2803040'>is</span> <span m='2803260'>that</span> <span m='2803390'>a</span>
  <span m='2803460'>problem</span> <span m='2803830'>called</span> <span
  m='2804260'>3-Partition</span> <span m='2808270'>can</span> <span
  m='2808480'>be</span> <span m='2808650'>reduced</span> <span
  m='2809060'>to</span> <span m='2809240'>Tetris.</span> </p><p><span
  m='2817810'>What's</span> <span m='2818020'>3-Partition?</span> <span
  m='2818610'>3-Partition</span> <span m='2819200'>is</span> <span
  m='2819410'>I</span> <span m='2819490'>give</span> <span
  m='2819710'>you</span> <span m='2819830'>n</span> <span
  m='2819990'>numbers.</span> <span m='2821000'>I</span> <span
  m='2821110'>want</span> <span m='2821340'>to</span> <span
  m='2821400'>know</span> <span m='2821540'>can</span> <span
  m='2821800'>I</span> <span m='2821870'>divide</span> <span
  m='2822230'>them</span> <span m='2822370'>into</span> <span
  m='2822560'>triples,</span> <span m='2823930'>each</span> <span
  m='2824180'>of</span> <span m='2824310'>the</span> <span
  m='2824400'>same</span> <span m='2824750'>sum.</span> <span
  m='2826450'>So</span> <span m='2826630'>I</span> <span m='2826780'>have</span>
  <span m='2827210'>n</span> <span m='2827400'>numbers.</span> <span
  m='2827780'>Divide</span> <span m='2828050'>them</span> <span
  m='2828150'>into</span> <span m='2828300'>n</span> <span
  m='2828460'>over</span> <span m='2828620'>3</span> <span
  m='2828890'>groups</span> <span m='2829220'>of</span> <span
  m='2829330'>3,</span> <span m='2830170'>such</span> <span
  m='2830410'>that</span> <span m='2830540'>the</span> <span
  m='2830620'>sum</span> <span m='2830990'>of</span> <span
  m='2831100'>each</span> <span m='2831290'>of</span> <span
  m='2831360'>the</span> <span m='2831600'>3s</span> <span m='2832410'>is</span>
  <span m='2832630'>equal.</span> <span m='2834030'>Sounds</span> <span
  m='2834200'>like</span> <span m='2834340'>an easy</span> <span
  m='2834580'>enough</span> <span m='2834780'>problem.</span> <span
  m='2835780'>But</span> <span m='2835980'>it's</span> <span
  m='2836130'>an</span> <span m='2836230'>NP-complete</span> <span
  m='2837310'>problem.</span> <span m='2838230'>And</span> <span
  m='2838350'>people</span> <span m='2838600'>knew</span> <span
  m='2838740'>that</span> <span m='2839180'>since</span> <span
  m='2840550'>one</span> <span m='2840730'>of</span> <span
  m='2840780'>the</span> <span m='2840870'>first</span> <span
  m='2841200'>papers.</span> <span m='2842950'>I</span> <span m='2843020'>guess
  that was</span> <span m='2843490'>late</span> <span m='2843920'>'70s,</span>
  <span m='2844420'>early</span> <span m='2844630'>'80s,</span> <span
  m='2845560'>by</span> <span m='2845660'>Karp.</span> </p><p><span
  m='2846790'>So</span> <span m='2846840'>Karp</span> <span
  m='2847130'>already</span> <span m='2847420'>proved</span> <span
  m='2848190'>this</span> <span m='2848360'>is</span> <span
  m='2848460'>standing</span> <span m='2848800'>on</span> <span
  m='2848880'>the</span> <span m='2848950'>shoulders</span> <span
  m='2849310'>of</span> <span m='2849730'>giants.</span> <span
  m='2852410'>Karp</span> <span m='2852600'>proved</span> <span
  m='2852980'>3-Partition</span> <span m='2853170'>is</span> <span
  m='2853640'>NP-complete,</span> <span m='2854360'>so</span> <span
  m='2854450'>I</span> <span m='2854550'>don't</span> <span
  m='2854680'>need</span> <span m='2854840'>to</span> <span
  m='2855360'>think</span> <span m='2855540'>about</span> <span
  m='2855790'>that.</span> <span m='2857060'>All</span> <span
  m='2857180'>I</span> <span m='2857310'>need</span> <span m='2857520'>to</span>
  <span m='2857600'>focus</span> <span m='2858000'>on</span> <span
  m='2858690'>is</span> <span m='2858820'>showing</span> <span
  m='2859210'>that</span> <span m='2860730'>Tetris</span> <span
  m='2861580'>is</span> <span m='2861770'>harder</span> <span
  m='2862300'>than</span> <span m='2862480'>3-Partition.</span> <span
  m='2863470'>This</span> <span m='2863630'>is</span> <span
  m='2863750'>what</span> <span m='2863900'>I</span> <span
  m='2863970'>mean</span> <span m='2864170'>by</span> <span
  m='2864310'>harder.</span> </p><p><span m='2865270'>Harder</span> <span
  m='2865540'>means--</span> <span m='2866590'>so</span> <span
  m='2866780'>when</span> <span m='2867370'>I</span> <span
  m='2867430'>can</span> <span m='2867570'>reduce</span> <span
  m='2868000'>A</span> <span m='2868150'>to</span> <span m='2868240'>B,</span>
  <span m='2868990'>we</span> <span m='2869140'>say</span> <span
  m='2869420'>the</span> <span m='2870150'>A--</span> <span m='2872600'>B</span>
  <span m='2874200'>is</span> <span m='2874770'>at</span> <span
  m='2874890'>least</span> <span m='2875170'>as</span> <span
  m='2875280'>hard</span> <span m='2877900'>as</span> <span
  m='2878190'>A.</span> <span m='2880920'>Why's</span> <span
  m='2881150'>that?</span> <span m='2882090'>Because</span> <span
  m='2882370'>I</span> <span m='2882470'>can</span> <span
  m='2882650'>solve</span> <span m='2882930'>A</span> <span
  m='2883190'>by</span> <span m='2883350'>solving</span> <span
  m='2883730'>B.</span> <span m='2884630'>I</span> <span m='2884720'>just</span>
  <span m='2884890'>apply</span> <span m='2885170'>this</span> <span
  m='2885330'>reduction</span> <span m='2885820'>and</span> <span
  m='2885900'>then</span> <span m='2886030'>solve</span> <span
  m='2886350'>B.</span> <span m='2886820'>So</span> <span m='2886950'>if</span>
  <span m='2887040'>I</span> <span m='2887090'>had</span> <span
  m='2887330'>some</span> <span m='2887500'>good</span> <span
  m='2887730'>way</span> <span m='2887860'>to</span> <span
  m='2887940'>solve</span> <span m='2888240'>B,</span> <span
  m='2888570'>it</span> <span m='2888660'>would</span> <span
  m='2888840'>turn</span> <span m='2889060'>into</span> <span
  m='2889280'>a</span> <span m='2889370'>good</span> <span
  m='2889540'>way</span> <span m='2889680'>to</span> <span
  m='2889770'>solve</span> <span m='2890050'>A.</span> </p><p><span
  m='2891110'>Now</span> <span m='2892180'>3-Partition--</span> <span
  m='2893435'>which is</span> <span m='2893780'>A,</span> <span
  m='2894000'>here--</span> <span m='2894780'>we're</span> <span
  m='2894940'>pretty</span> <span m='2895170'>sure</span> <span
  m='2895480'>there's</span> <span m='2895760'>no</span> <span
  m='2896010'>good</span> <span m='2896180'>algorithm</span> <span
  m='2896510'>for</span> <span m='2896660'>solving</span> <span
  m='2897010'>this.</span> <span m='2897440'>Pretty sure</span> <span
  m='2897750'>it's</span> <span m='2897860'>not</span> <span
  m='2898110'>in</span> <span m='2898250'>P.</span> <span m='2900570'>And</span>
  <span m='2901080'>so</span> <span m='2901380'>Tetris</span> <span
  m='2902120'>better</span> <span m='2902340'>not</span> <span
  m='2902520'>be</span> <span m='2902690'>P</span> <span
  m='2902900'>either</span> <span m='2903200'>because</span> <span
  m='2903450'>if</span> <span m='2903560'>Tetris</span> <span m='2903960'>were
  in</span> <span m='2904250'>P,</span> <span m='2905260'>then</span> <span
  m='2905430'>we</span> <span m='2905540'>could</span> <span
  m='2905670'>just</span> <span m='2905850'>take</span> <span
  m='2906050'>our</span> <span m='2906160'>3-Partition,</span> <span
  m='2907140'>reduce</span> <span m='2907520'>it</span> <span
  m='2907640'>to</span> <span m='2907750'>Tetris,</span> <span
  m='2908610'>and</span> <span m='2908750'>then</span> <span
  m='2908990'>3-Partition</span> <span m='2909630'>would</span> <span
  m='2909760'>be</span> <span m='2909930'>in P.</span> </p><p><span
  m='2910990'>In</span> <span m='2911120'>fact,</span> <span
  m='2911500'>all</span> <span m='2911860'>of</span> <span
  m='2911980'>the</span> <span m='2912120'>NP-complete</span> <span
  m='2912670'>problems,</span> <span m='2913210'>you</span> <span
  m='2913360'>can</span> <span m='2913500'>reduce</span> <span
  m='2913840'>to</span> <span m='2914010'>each</span> <span
  m='2914200'>other.</span> <span m='2916470'>And</span> <span
  m='2916550'>so</span> <span m='2917080'>to</span> <span
  m='2917230'>show</span> <span m='2917500'>that</span> <span
  m='2917660'>something</span> <span m='2918030'>is</span> <span
  m='2918580'>at</span> <span m='2918800'>that</span> <span
  m='2918980'>little</span> <span m='2919230'>position,</span> <span
  m='2919820'>NP-complete,</span> <span m='2921020'>all</span> <span
  m='2921240'>you</span> <span m='2921340'>need</span> <span
  m='2921520'>to</span> <span m='2921600'>do</span> <span m='2921790'>is</span>
  <span m='2921900'>find</span> <span m='2922160'>some</span> <span
  m='2922420'>known</span> <span m='2922670'>NP-complete</span> <span
  m='2923440'>problem</span> <span m='2924120'>and</span> <span
  m='2924280'>reduce</span> <span m='2924670'>it</span> <span
  m='2925330'>to</span> <span m='2925450'>your</span> <span
  m='2925630'>problem.</span> <span m='2927520'>So</span> <span
  m='2927950'>reductions</span> <span m='2928450'>are</span> <span
  m='2928550'>super</span> <span m='2928860'>useful</span> <span
  m='2929330'>for</span> <span m='2930340'>getting</span> <span
  m='2930550'>positive</span> <span m='2931000'>results</span> <span
  m='2931400'>for</span> <span m='2931550'>making</span> <span
  m='2931900'>new</span> <span m='2932080'>algorithms,</span> <span
  m='2933090'>but</span> <span m='2933230'>also</span> <span
  m='2933580'>for</span> <span m='2933730'>proving</span> <span
  m='2934020'>negative</span> <span m='2934370'>results--</span> <span
  m='2934800'>showing</span> <span m='2935110'>that</span> <span
  m='2935540'>one</span> <span m='2935730'>problem</span> <span
  m='2936030'>is</span> <span m='2936110'>harder</span> <span m='2936380'>than
  another.</span> <span m='2937310'>And</span> <span m='2937530'>if</span> <span
  m='2937630'>you</span> <span m='2937770'>already</span> <span
  m='2937980'>believe</span> <span m='2938270'>this</span> <span
  m='2938430'>is</span> <span m='2938520'>hard,</span> <span
  m='2939080'>then</span> <span m='2939210'>you</span> <span
  m='2939300'>should</span> <span m='2939480'>believe</span> <span
  m='2939720'>this</span> <span m='2939890'>is</span> <span
  m='2939990'>hard.</span> </p><p><span m='2948570'>I</span> <span
  m='2948640'>think</span> <span m='2948910'>that's</span> <span
  m='2950630'>all</span> <span m='2950920'>I really</span> <span
  m='2951150'>have</span> <span m='2951380'>time</span> <span
  m='2951710'>for.</span> <span m='2952060'>I'll</span> <span
  m='2952200'>give</span> <span m='2952360'>you</span> <span
  m='2952490'>a</span> <span m='2952560'>couple</span> <span
  m='2953150'>more</span> <span m='2953390'>NP-complete</span> <span
  m='2953900'>problems.</span> <span m='2954480'>Kind</span> <span
  m='2954630'>of</span> <span m='2954710'>fun.</span> <span
  m='2955930'>Traveling</span> <span m='2956270'>salesman</span> <span
  m='2956640'>problem,</span> <span m='2956950'>you</span> <span
  m='2957050'>may</span> <span m='2957200'>have</span> <span
  m='2957290'>heard</span> <span m='2957490'>of.</span> <span
  m='2958990'>Let's</span> <span m='2959080'>say</span> <span m='2959310'>you
  have</span> <span m='2959420'>a</span> <span m='2959470'>graph.</span> <span
  m='2960020'>And</span> <span m='2960290'>you</span> <span
  m='2960440'>want</span> <span m='2960540'>to</span> <span
  m='2960580'>find</span> <span m='2960800'>out</span> <span
  m='2961020'>the</span> <span m='2961150'>shortest</span> <span
  m='2961580'>path</span> <span m='2961940'>that</span> <span
  m='2962040'>visits</span> <span m='2962440'>all</span> <span
  m='2962690'>the</span> <span m='2962770'>vertices,</span> <span
  m='2963710'>not</span> <span m='2963920'>just</span> <span
  m='2964310'>one</span> <span m='2964560'>vertex.</span> <span
  m='2965770'>That's</span> <span m='2966010'>NP-complete.</span> </p><p><span
  m='2968680'>We</span> <span m='2968830'>solved</span> <span
  m='2969080'>longest</span> <span m='2969400'>common</span> <span
  m='2969810'>subsequence</span> <span m='2970320'>for</span> <span
  m='2970470'>two</span> <span m='2970670'>strings,</span> <span
  m='2971680'>but</span> <span m='2971800'>if</span> <span m='2971910'>I</span>
  <span m='2971970'>give</span> <span m='2972150'>you</span> <span
  m='2972380'>n</span> <span m='2972620'>strings</span> <span
  m='2973060'>that</span> <span m='2973170'>you</span> <span
  m='2973280'>need</span> <span m='2973450'>to</span> <span
  m='2973520'>find</span> <span m='2973710'>the</span> <span
  m='2973770'>longest</span> <span m='2974090'>common</span> <span
  m='2974330'>subsequence</span> <span m='2974645'>of,</span> <span
  m='2974960'>that's</span> <span m='2975190'>NP-complete.</span> <span
  m='2977730'>Minesweeper,</span> <span m='2978740'>Sudoku,</span> <span
  m='2979760'>most</span> <span m='2980030'>puzzles</span> <span
  m='2980670'>that</span> <span m='2980790'>are</span> <span
  m='2980890'>interesting</span> <span m='2981560'>are</span> <span
  m='2981820'>NP-complete.</span> <span m='2983990'>SAT.</span> <span
  m='2985360'>SAT</span> <span m='2985570'>is</span> <span
  m='2985770'>a--</span> <span m='2986310'>I</span> <span
  m='2986420'>give</span> <span m='2986660'>you</span> <span
  m='2986820'>a</span> <span m='2986860'>Boolean</span> <span
  m='2987260'>formula</span> <span m='2987770'>like</span> <span
  m='2988830'>x</span> <span m='2989260'>or</span> <span m='2989840'>y</span>
  <span m='2991460'>AND</span> <span m='2992940'>NOT</span> <span
  m='2993120'>x--</span> <span m='2993950'>something</span> <span
  m='2994230'>like</span> <span m='2994390'>that.</span> <span
  m='2995050'>I</span> <span m='2995150'>want</span> <span m='2995330'>to</span>
  <span m='2995400'>know</span> <span m='2995710'>is</span> <span
  m='2995910'>there</span> <span m='2996070'>some</span> <span
  m='2996350'>setting</span> <span m='2996700'>of</span> <span
  m='2996780'>the</span> <span m='2996860'>variables</span> <span
  m='2997380'>that</span> <span m='2997500'>makes</span> <span
  m='2997730'>this</span> <span m='2997880'>thing</span> <span
  m='2998060'>come</span> <span m='2998260'>out</span> <span
  m='2998410'>true?</span> <span m='2998790'>Is</span> <span
  m='2998930'>it</span> <span m='2999030'>possible</span> <span
  m='2999430'>to</span> <span m='2999490'>make</span> <span
  m='2999690'>this</span> <span m='2999870'>true?</span> <span
  m='3001940'>That's</span> <span m='3002240'>NP-complete</span> <span
  m='3002450'>complete.</span> <span m='3002800'>This</span> <span
  m='3002940'>was</span> <span m='3003060'>actually</span> <span
  m='3003310'>the</span> <span m='3003420'>first</span> <span
  m='3003760'>problem</span> <span m='3004310'>that was</span> <span
  m='3004720'>shown</span> <span m='3004980'>NP-complete.</span> </p><p><span
  m='3005610'>There's</span> <span m='3005820'>this</span> <span
  m='3005970'>issue,</span> <span m='3006330'>right?</span> <span
  m='3006880'>If</span> <span m='3007030'>I'm</span> <span
  m='3007150'>going</span> <span m='3007250'>to</span> <span
  m='3007300'>show</span> <span m='3007490'>everything's</span> <span
  m='3007910'>NP-complete</span> <span m='3008430'>by</span> <span
  m='3008560'>reduction,</span> <span m='3009480'>how</span> <span
  m='3009680'>the</span> <span m='3009780'>heck</span> <span
  m='3009950'>do</span> <span m='3010050'>I</span> <span m='3010120'>get</span>
  <span m='3010330'>started?</span> <span m='3010910'>What's</span> <span
  m='3011010'>the</span> <span m='3011100'>first</span> <span
  m='3011460'>problem?</span> <span m='3012360'>And</span> <span
  m='3012570'>this</span> <span m='3012740'>is</span> <span
  m='3012840'>the</span> <span m='3012930'>first</span> <span
  m='3013190'>problem.</span> <span m='3015620'>You</span> <span
  m='3015770'>could</span> <span m='3015910'>sort</span> <span
  m='3016090'>of</span> <span m='3016210'>prove</span> <span
  m='3016500'>it</span> <span m='3016660'>by</span> <span
  m='3017070'>definition,</span> <span m='3017710'>almost,</span> <span
  m='3018090'>of NP,</span> <span m='3018580'>here.</span> <span
  m='3019480'>But</span> <span m='3020580'>I</span> <span
  m='3020650'>won't</span> <span m='3020840'>do</span> <span
  m='3020950'>that.</span> </p><p><span m='3022760'>Three</span> <span
  m='3022950'>coloring a</span> <span m='3023370'>graph.</span> <span
  m='3024610'>Shortest</span> <span m='3025010'>paths.</span> <span
  m='3025280'>This</span> <span m='3025460'>is</span> <span
  m='3025570'>fun.</span> <span m='3026010'>Shortest</span> <span
  m='3026280'>paths in</span> <span m='3026560'>a</span> <span
  m='3026620'>graph</span> <span m='3026900'>is</span> <span
  m='3027040'>hard.</span> <span m='3027840'>But</span> <span
  m='3028150'>in</span> <span m='3028740'>the</span> <span
  m='3028850'>real</span> <span m='3029130'>world,</span> <span
  m='3029550'>we</span> <span m='3029650'>live</span> <span
  m='3029830'>in</span> <span m='3029920'>a</span> <span
  m='3029980'>three</span> <span m='3030170'>dimensional,</span> <span
  m='3030620'>geometric</span> <span m='3031120'>environment.</span> <span
  m='3031880'>What</span> <span m='3032020'>if</span> <span m='3032140'>I</span>
  <span m='3032180'>want</span> <span m='3032370'>to</span> <span
  m='3032420'>find</span> <span m='3032590'>the</span> <span
  m='3032650'>shortest</span> <span m='3032940'>path</span> <span
  m='3033220'>from</span> <span m='3033500'>this</span> <span
  m='3033760'>point,</span> <span m='3034050'>where</span> <span
  m='3034220'>I</span> <span m='3034260'>am,</span> <span m='3034860'>to</span>
  <span m='3035150'>that</span> <span m='3035390'>point,</span> <span
  m='3035620'>over</span> <span m='3035840'>on</span> <span
  m='3035930'>the</span> <span m='3036000'>ceiling</span> <span
  m='3036520'>or</span> <span m='3036570'>something.</span> <span
  m='3037500'>And</span> <span m='3037670'>I</span> <span m='3037730'>can</span>
  <span m='3037900'>fly.</span> <span m='3040020'>That's</span> <span
  m='3040350'>NP-complete.</span> <span m='3041810'>It's</span> <span
  m='3041920'>kind</span> <span m='3042120'>of</span> <span
  m='3042190'>weird.</span> <span m='3042460'>Shortest</span> <span
  m='3042800'>paths</span> <span m='3043090'>in</span> <span
  m='3043180'>a</span> <span m='3043240'>two</span> <span
  m='3043410'>dimensional</span> <span m='3043760'>environment</span> <span
  m='3044160'>is</span> <span m='3044270'>polynomial.</span> <span
  m='3044585'>It's</span> <span m='3044900'>a</span> <span
  m='3044940'>good</span> <span m='3045100'>thing</span> <span
  m='3045290'>that</span> <span m='3045390'>we</span> <span
  m='3045510'>are</span> <span m='3045640'>on</span> <span
  m='3045810'>ground</span> <span m='3047210'>because,</span> <span
  m='3047480'>then,</span> <span m='3047640'>we</span> <span
  m='3047740'>can</span> <span m='3047850'>model</span> <span
  m='3048100'>things</span> <span m='3048290'>by</span> <span
  m='3048420'>two</span> <span m='3048580'>dimensions.</span> <span
  m='3048990'>We</span> <span m='3049090'>can</span> <span
  m='3049180'>model</span> <span m='3049400'>things</span> <span
  m='3049600'>by</span> <span m='3049720'>graphs.</span> <span
  m='3050470'>But</span> <span m='3050590'>in</span> <span
  m='3050710'>3D,</span> <span m='3051960'>shortest</span> <span
  m='3052180'>paths</span> <span m='3052560'>is</span> <span
  m='3052730'>NP-complete.</span> </p><p><span m='3053500'>So</span> <span
  m='3053620'>all</span> <span m='3053830'>these</span> <span
  m='3054100'>things</span> <span m='3054380'>where</span> <span
  m='3054770'>a</span> <span m='3054870'>problem--</span> <span
  m='3055670'>knapsack,</span> <span m='3056240'>that's</span> <span
  m='3056430'>another</span> <span m='3056640'>one.</span> <span
  m='3056930'>We've</span> <span m='3057090'>already</span> <span
  m='3057300'>covered</span> <span m='3057570'>knapsack.</span> <span
  m='3058030'>We</span> <span m='3058110'>saw a</span> <span
  m='3058310'>pseudo-polynomial</span> <span m='3059270'>algorithm.</span> <span
  m='3059990'>Turns</span> <span m='3060270'>out,</span> <span
  m='3060430'>you</span> <span m='3060530'>can't</span> <span
  m='3060890'>do</span> <span m='3061030'>better</span> <span
  m='3061290'>than</span> <span m='3061440'>pseudo-polynomial</span> <span
  m='3062390'>unless</span> <span m='3062870'>P</span> <span
  m='3062960'>equals</span> <span m='3063160'>NP</span> <span
  m='3063890'>because</span> <span m='3064700'>knapsack</span> <span
  m='3065100'>is</span> <span m='3065210'>NP-complete.</span> <span
  m='3067030'>So</span> <span m='3067180'>there</span> <span
  m='3067360'>you</span> <span m='3067430'>go.</span> <span
  m='3068160'>Computational</span> <span m='3068780'>complexity</span> <span
  m='3069680'>in</span> <span m='3069810'>50</span> <span
  m='3070110'>minutes.</span> </p>
embedded_media:
  - uid: 6484f4efcc5125e3b7caf86e7ed22ce5
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: moPtwq_cVH8
  - uid: 9f882b72989eb6f96995528f783024ce
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/moPtwq_cVH8/default.jpg'
  - uid: a5447904259fefff65c75fa4c8e27cf1
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-23-computational-complexity/id585700718?i=126127953
  - uid: 96f9c14aec66d8fc2da550f95655f595
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec23_300k.mp4'
  - uid: 154f978b9031feb3323859d3d6987a4e
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: moPtwq_cVH8
  - uid: d786316306191b1750ac57d030ace0d8
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: moPtwq_cVH8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-23-computational-complexity/moPtwq_cVH8.srt
  - uid: a2ee5c645c0c690e76f5d0db4807edcd
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: moPtwq_cVH8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-23-computational-complexity/moPtwq_cVH8.pdf
  - uid: da194d6630d3f560dfb67d150f3e0079
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0ad72928c863fc9c372b6c460ba4e7df
    parent_uid: 7e626cc30fda599800cb5aac3b148422
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
