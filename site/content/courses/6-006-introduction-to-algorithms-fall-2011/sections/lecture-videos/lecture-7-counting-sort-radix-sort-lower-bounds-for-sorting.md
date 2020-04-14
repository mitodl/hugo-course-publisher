---
title: 'Lecture 7: Counting Sort, Radix Sort, Lower Bounds for Sorting'
uid: c720373a9599a4cb1547793b17590b77
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-7-counting-sort-radix-sort-lower-bounds-for-sorting
short_url: lecture-7-counting-sort-radix-sort-lower-bounds-for-sorting
inline_embed_id: '66162329lecture7:countingsort,radixsort,lowerboundsforsorting77548325'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture starts by using the comparison
  model to prove lower bounds for searching and sorting, and then discusses
  counting sort and radix sort, which run in linear time.</p>
  <p><strong>Instructor:</strong> Erik Demaine</p>
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
  m='22080'>PROFESSOR: Last</span> <span m='22340'>lecture</span> <span
  m='22740'>on</span> <span m='23090'>sorting.</span> <span
  m='24660'>Yay.</span> <span m='27350'>And</span> <span m='27530'>it's</span>
  <span m='27680'>one</span> <span m='28290'>of</span> <span
  m='28350'>the</span> <span m='28450'>coolest</span> <span
  m='28890'>lectures</span> <span m='29270'>on</span> <span
  m='29430'>sorting,</span> <span m='29880'>I</span> <span
  m='30020'>would</span> <span m='30210'>say.</span> <span
  m='30870'>We're</span> <span m='30910'>going</span> <span m='31010'>to</span>
  <span m='31060'>talk</span> <span m='31270'>about</span> <span
  m='31590'>linear-time</span> <span m='32210'>sorting,</span> <span
  m='33060'>when</span> <span m='33270'>it's</span> <span
  m='33400'>possible</span> <span m='33970'>and</span> <span
  m='34060'>when</span> <span m='34190'>it's</span> <span m='34340'>not</span>
  <span m='34530'>possible,</span> <span m='36110'>and</span> <span
  m='36590'>this</span> <span m='36800'>lecture</span> <span
  m='37110'>sort</span> <span m='37290'>of</span> <span m='37370'>follows</span>
  <span m='39110'>the</span> <span m='39340'>tried</span> <span
  m='39850'>and</span> <span m='40000'>tested</span> <span
  m='40370'>mathematical</span> <span m='41390'>structure</span> <span
  m='41910'>which</span> <span m='42140'>is</span> <span
  m='42610'>theorem,</span> <span m='43170'>proof,</span> <span
  m='44240'>counterexample.</span> <span m='45920'>So</span> <span
  m='46120'>we're</span> <span m='46220'>going</span> <span m='46320'>to</span>
  <span m='46380'>start</span> <span m='46750'>with</span> <span
  m='47610'>a</span> <span m='47720'>theorem</span> <span m='48190'>which</span>
  <span m='48370'>is</span> <span m='48490'>that</span> <span
  m='48650'>sorting</span> <span m='49150'>requires</span> <span
  m='50000'>n</span> <span m='50190'>lg</span> <span m='50470'>n</span> <span
  m='50640'>time</span> <span m='51070'>at</span> <span m='51220'>least</span>
  <span m='51940'>in</span> <span m='52070'>the</span> <span
  m='52150'>worst</span> <span m='52400'>case</span> <span m='53490'>and</span>
  <span m='53900'>we're</span> <span m='54120'>going</span> <span
  m='54360'>to</span> <span m='54490'>then</span> <span m='55000'>prove</span>
  <span m='55390'>that</span> <span m='55600'>in</span> <span
  m='55610'>fact,</span> <span m='56010'>you</span> <span m='56030'>can</span>
  <span m='56140'>get</span> <span m='56270'>away</span> <span
  m='56460'>with</span> <span m='56580'>linear</span> <span
  m='56900'>time</span> <span m='57840'>sometimes.</span> </p><p><span
  m='60020'>Both</span> <span m='60290'>of</span> <span m='60360'>these</span>
  <span m='60530'>terms</span> <span m='60830'>are</span> <span
  m='60970'>correct,</span> <span m='61870'>but</span> <span
  m='62020'>they're</span> <span m='62190'>slightly</span> <span
  m='62590'>different</span> <span m='62920'>models</span> <span
  m='63350'>of</span> <span m='63450'>computation.</span> <span
  m='64160'>Remember</span> <span m='64489'>models</span> <span
  m='64849'>of</span> <span m='64940'>computation</span> <span
  m='65530'>from</span> <span m='65700'>lecture</span> <span
  m='66020'>two?</span> <span m='66890'>So</span> <span m='67390'>we're</span>
  <span m='67550'>going</span> <span m='67650'>to</span> <span
  m='67720'>talk</span> <span m='67970'>about</span> <span m='68430'>a</span>
  <span m='68530'>new</span> <span m='68670'>model</span> <span
  m='68910'>of</span> <span m='69030'>computation,</span> <span
  m='69660'>which</span> <span m='69800'>we've</span> <span
  m='69900'>sort</span> <span m='70160'>of</span> <span m='70230'>been</span>
  <span m='70370'>using</span> <span m='70790'>for</span> <span
  m='71640'>most</span> <span m='71940'>algorithms</span> <span
  m='72390'>lately,</span> <span m='73000'>called</span> <span
  m='73170'>the</span> <span m='73250'>comparison</span> <span
  m='73860'>model.</span> <span m='75030'>And</span> <span m='75370'>it's</span>
  <span m='75580'>a</span> <span m='75650'>model of</span> <span
  m='76140'>computations</span> <span m='76445'>that's</span> <span
  m='76750'>really</span> <span m='76960'>useful</span> <span
  m='77270'>for</span> <span m='77420'>proving</span> <span
  m='77790'>lower</span> <span m='78140'>bounds</span> <span
  m='78540'>which</span> <span m='78680'>we</span> <span
  m='78790'>haven't</span> <span m='79060'>done</span> <span m='79240'>much
  of</span> <span m='79660'>yet.</span> </p><p><span m='80220'>We're</span>
  <span m='80330'>going</span> <span m='80430'>to</span> <span
  m='80500'>prove</span> <span m='80770'>two</span> <span m='80970'>very</span>
  <span m='81320'>simple</span> <span m='81680'>lower</span> <span
  m='81920'>bounds.</span> <span m='82260'>One</span> <span m='82460'>is</span>
  <span m='82600'>that</span> <span m='82830'>searching</span> <span
  m='83750'>requires</span> <span m='84200'>lg n</span> <span
  m='84580'>time.</span> <span m='84840'>This</span> <span m='85010'>is</span>
  <span m='85130'>basically</span> <span m='85470'>binary</span> <span
  m='85820'>search</span> <span m='86110'>is</span> <span
  m='86230'>optimal.</span> <span m='87240'>And</span> <span
  m='87480'>the</span> <span m='87580'>other is</span> <span
  m='87850'>that</span> <span m='87970'>sorting</span> <span
  m='88360'>requires</span> <span m='88750'>n lg n</span> <span
  m='89200'>time.</span> <span m='89430'>This</span> <span m='89600'>is</span>
  <span m='89710'>that</span> <span m='89890'>merge</span> <span
  m='90140'>sort</span> <span m='90390'>is</span> <span
  m='90500'>optimal.</span> </p><p><span m='91950'>And</span> <span
  m='92160'>then</span> <span m='92630'>we're</span> <span
  m='92830'>going</span> <span m='92950'>to</span> <span m='93000'>break</span>
  <span m='93310'>outside</span> <span m='93820'>of</span> <span
  m='93910'>that</span> <span m='94100'>comparison</span> <span
  m='94550'>model,</span> <span m='94820'>work</span> <span m='95000'>in</span>
  <span m='95100'>a</span> <span m='95130'>different</span> <span
  m='95550'>model</span> <span m='95860'>of</span> <span
  m='95950'>computation,</span> <span m='96620'>our</span> <span
  m='96710'>more</span> <span m='96960'>usual</span> <span m='97480'>RAM</span>
  <span m='97770'>model,</span> <span m='98590'>and</span> <span
  m='98860'>show</span> <span m='99150'>that</span> <span m='99330'>in</span>
  <span m='99510'>certain</span> <span m='99820'>situations,</span> <span
  m='101090'>we</span> <span m='101230'>can</span> <span m='101350'>get</span>
  <span m='101490'>linear</span> <span m='101790'>time.</span> <span
  m='102420'>So</span> <span m='102590'>that's</span> <span
  m='102800'>the</span> <span m='102880'>plan.</span> <span
  m='105440'>Let's</span> <span m='105740'>start</span> <span
  m='106150'>with</span> <span m='108420'>this</span> <span
  m='108740'>comparison</span> <span m='109320'>model.</span> </p><p><span
  m='116390'>So</span> <span m='116820'>the</span> <span m='116950'>idea</span>
  <span m='117300'>in</span> <span m='117660'>the</span> <span
  m='117750'>comparison</span> <span m='118270'>model</span> <span
  m='118570'>is</span> <span m='118720'>to</span> <span
  m='118990'>restrict</span> <span m='119650'>what</span> <span
  m='119810'>kind</span> <span m='120020'>of</span> <span
  m='120120'>operations</span> <span m='120700'>we</span> <span
  m='120830'>can</span> <span m='120970'>do</span> <span m='121610'>to</span>
  <span m='121750'>be</span> <span m='122510'>comparisons.</span> <span
  m='123670'>It's</span> <span m='123920'>very</span> <span
  m='124530'>straightforward.</span> <span m='126090'>All</span> <span
  m='129009'>input</span> <span m='129370'>items</span> <span
  m='132520'>are</span> <span m='133880'>black</span> <span
  m='134200'>boxes,</span> <span m='134740'>you</span> <span
  m='134880'>could</span> <span m='135040'>say,</span> <span m='136082'>in
  that</span> <span m='136460'>you</span> <span m='136610'>don't</span> <span
  m='136810'>really</span> <span m='137060'>know</span> <span
  m='137300'>what</span> <span m='137680'>they</span> <span
  m='137860'>are.</span> <span m='139920'>And</span> <span m='140170'>a</span>
  <span m='140250'>formal</span> <span m='141050'>notion</span> <span
  m='141480'>of</span> <span m='141580'>black</span> <span
  m='141850'>boxes</span> <span m='142290'>is</span> <span
  m='142380'>something</span> <span m='142690'>we</span> <span
  m='142800'>talked</span> <span m='143050'>about</span> <span
  m='143250'>last</span> <span m='143510'>class</span> <span m='143870'>at
  the</span> <span m='144020'>end,</span> <span m='144470'>abstract</span> <span
  m='144910'>data</span> <span m='145140'>type.</span> </p><p><span
  m='146020'>So</span> <span m='146180'>it's</span> <span m='146360'>a</span>
  <span m='146420'>data</span> <span m='146670'>structure,</span> <span
  m='147250'>if</span> <span m='147350'>you</span> <span m='147370'>will.</span>
  <span m='147580'>Every</span> <span m='148140'>item</span> <span
  m='148460'>that</span> <span m='148810'>you're</span> <span
  m='149000'>given</span> <span m='149380'>is</span> <span m='149510'>a</span>
  <span m='149560'>data</span> <span m='149800'>structure.</span> <span
  m='150860'>You</span> <span m='151000'>want</span> <span m='151120'>to</span>
  <span m='151170'>sort</span> <span m='151490'>them.</span> <span
  m='152630'>And</span> <span m='152900'>the</span> <span m='152980'>data</span>
  <span m='153190'>structure</span> <span m='153540'>supports</span> <span
  m='153920'>a</span> <span m='153980'>single</span> <span
  m='154320'>operation</span> <span m='154850'>which</span> <span
  m='155030'>is</span> <span m='155180'>compared</span> <span
  m='155650'>to</span> <span m='155740'>another</span> <span
  m='156020'>one.</span> <span m='158850'>Only</span> <span
  m='159330'>operation</span> <span m='165790'>allowed--</span> <span
  m='170030'>I</span> <span m='170140'>guess</span> <span m='170380'>I</span>
  <span m='170420'>should</span> <span m='170660'>say</span> <span
  m='170800'>plural</span> <span m='171320'>actually--</span> <span
  m='172420'>are</span> <span m='172650'>comparisons.</span> </p><p><span
  m='176990'>I'm</span> <span m='177160'>going</span> <span m='177270'>to</span>
  <span m='177360'>be</span> <span m='178470'>nice</span> <span
  m='178920'>and</span> <span m='179200'>I'll</span> <span m='179270'>let</span>
  <span m='179510'>you</span> <span m='179620'>do</span> <span m='179970'>less
  than,</span> <span m='180465'>less</span> <span m='180960'>than</span> <span
  m='181060'>or</span> <span m='181160'>equal</span> <span m='181440'>to,</span>
  <span m='182020'>greater</span> <span m='182250'>than,</span> <span
  m='183250'>whatever.</span> <span m='184490'>I</span> <span
  m='184550'>guess</span> <span m='185220'>there's</span> <span
  m='185350'>only</span> <span m='185570'>one</span> <span
  m='185770'>other.</span> <span m='186030'>Well, there's</span> <span
  m='186370'>two</span> <span m='186500'>more,</span> <span
  m='186730'>greater</span> <span m='187000'>than</span> <span
  m='187190'>or</span> <span m='187270'>equal</span> <span m='187510'>to</span>
  <span m='188020'>and</span> <span m='188160'>equals.</span> <span
  m='189550'>So</span> <span m='189770'>you</span> <span m='189940'>can</span>
  <span m='190040'>do</span> <span m='190140'>all</span> <span
  m='190290'>the</span> <span m='190370'>usual</span> <span
  m='190690'>comparisons.</span> <span m='191770'>You</span> <span
  m='191880'>get</span> <span m='192040'>a</span> <span m='192090'>binary</span>
  <span m='192450'>answer,</span> <span m='192730'>yes</span> <span
  m='192970'>or</span> <span m='193050'>no,</span> <span m='193620'>and</span>
  <span m='193730'>those</span> <span m='193880'>the</span> <span
  m='194070'>only</span> <span m='194430'>operations</span> <span
  m='195050'>you're</span> <span m='195230'>given.</span> </p><p><span
  m='198640'>And</span> <span m='200060'>basically</span> <span
  m='200410'>the</span> <span m='200520'>last</span> <span
  m='201090'>four</span> <span m='201650'>lectures</span> <span
  m='202280'>have</span> <span m='202430'>all</span> <span
  m='202620'>been</span> <span m='202770'>about</span> <span
  m='203010'>algorithms</span> <span m='203500'>in</span> <span
  m='203640'>this</span> <span m='203820'>model.</span> <span
  m='204760'>So</span> <span m='204790'>merge</span> <span
  m='205100'>sort,</span> <span m='206100'>it</span> <span
  m='206390'>moves</span> <span m='206720'>items</span> <span
  m='207040'>around.</span> <span m='207590'>It's</span> <span
  m='207790'>changing</span> <span m='208670'>pointers</span> <span
  m='209070'>to</span> <span m='209190'>items,</span> <span
  m='210070'>but</span> <span m='210190'>the</span> <span m='210320'>only</span>
  <span m='210610'>way</span> <span m='210790'>it</span> <span
  m='211260'>manipulates</span> <span m='211900'>items</span> <span
  m='212600'>or</span> <span m='212890'>evaluates</span> <span
  m='213550'>them</span> <span m='213980'>is</span> <span m='214140'>to</span>
  <span m='214260'>compare</span> <span m='214980'>one</span> <span
  m='215160'>against</span> <span m='215440'>the</span> <span
  m='215580'>other.</span> <span m='217090'>Heaps</span> <span
  m='218170'>and</span> <span m='218340'>heaps</span> <span
  m='218650'>sort</span> <span m='219080'>also</span> <span
  m='219410'>only</span> <span m='219660'>compare.</span> <span
  m='220540'>Binary</span> <span m='220850'>search</span> <span
  m='221110'>trees</span> <span m='221400'>only</span> <span
  m='221660'>compare.</span> <span m='222520'>Everything</span> <span
  m='222890'>we've</span> <span m='223000'>been</span> <span
  m='223140'>seeing</span> <span m='223370'>so</span> <span
  m='223530'>far</span> <span m='223780'>is</span> <span m='223870'>about</span>
  <span m='224330'>comparisons.</span> </p><p><span m='227570'>And</span> <span
  m='227720'>so</span> <span m='227890'>all</span> <span m='228460'>the</span>
  <span m='228570'>algorithms</span> <span m='228880'>we've</span> <span
  m='228970'>seen</span> <span m='229140'>so</span> <span m='229280'>far</span>
  <span m='229580'>are in</span> <span m='229640'>this</span> <span
  m='229790'>model</span> <span m='230210'>and</span> <span
  m='230360'>we're</span> <span m='230480'>going</span> <span
  m='230580'>to</span> <span m='230650'>prove</span> <span
  m='230940'>that</span> <span m='231070'>they</span> <span
  m='231220'>are</span> <span m='231330'>optimal</span> <span
  m='231840'>in</span> <span m='231970'>this</span> <span
  m='232130'>model.</span> <span m='233160'>That's</span> <span
  m='233350'>the</span> <span m='233440'>plan.</span> <span m='235540'>I</span>
  <span m='235660'>should</span> <span m='235870'>also</span> <span
  m='236300'>define</span> <span m='236980'>the</span> <span
  m='237320'>cost</span> <span m='237740'>of</span> <span m='237820'>an</span>
  <span m='237910'>algorithm.</span> <span m='238960'>Time</span> <span
  m='239260'>cost</span> <span m='239700'>is</span> <span m='239910'>just</span>
  <span m='240160'>going</span> <span m='240350'>to</span> <span
  m='240450'>be</span> <span m='240610'>the</span> <span
  m='240700'>number</span> <span m='241060'>of</span> <span
  m='241150'>comparisons.</span> <span m='241810'>This</span> <span
  m='242010'>is</span> <span m='242140'>the</span> <span m='242310'>weird</span>
  <span m='242570'>part,</span> <span m='243240'>I</span> <span
  m='243320'>guess,</span> <span m='243560'>of the</span> <span
  m='243630'>model.</span> </p><p><span m='246820'>So</span> <span
  m='247730'>in</span> <span m='247850'>everything</span> <span
  m='248180'>we've</span> <span m='248310'>done</span> <span
  m='248470'>so</span> <span m='248630'>far,</span> <span
  m='248940'>we've</span> <span m='249130'>been</span> <span
  m='249350'>in,</span> <span m='250670'>I</span> <span m='250770'>guess,</span>
  <span m='251030'>pointer</span> <span m='251380'>machine</span> <span
  m='252310'>or</span> <span m='252890'>RAM,</span> <span
  m='253220'>either</span> <span m='253430'>way.</span> <span
  m='254270'>We've</span> <span m='254520'>been</span> <span
  m='254710'>showing</span> <span m='255900'>binary</span> <span
  m='256180'>search</span> <span m='256440'>trees</span> <span
  m='256800'>or</span> <span m='256890'>AVL</span> <span
  m='257240'>trees,</span> <span m='257519'>you</span> <span
  m='257630'>can</span> <span m='257750'>do</span> <span m='257890'>order</span>
  <span m='258100'>lg</span> <span m='258399'>n</span> <span
  m='258610'>time,</span> <span m='259579'>in</span> <span m='259720'>the</span>
  <span m='259800'>regular</span> <span m='260160'>notion</span> <span
  m='260459'>of</span> <span m='260560'>time.</span> <span m='261089'>But</span>
  <span m='261260'>in</span> <span m='261390'>particular</span> <span
  m='261930'>they</span> <span m='262060'>do</span> <span
  m='262480'>order</span> <span m='262730'>lg</span> <span m='262990'>n</span>
  <span m='263120'>comparisons.</span> <span m='264650'>And</span> <span
  m='264960'>what</span> <span m='265220'>we're</span> <span
  m='265380'>going</span> <span m='265610'>to</span> <span
  m='265700'>show</span> <span m='266120'>on</span> <span
  m='266360'>the--</span> <span m='266670'>this</span> <span
  m='266870'>is</span> <span m='266960'>only</span> <span
  m='267220'>interesting</span> <span m='267670'>from</span> <span
  m='267860'>a</span> <span m='267910'>lower</span> <span
  m='268150'>bound</span> <span m='268400'>perspective--</span> <span
  m='268940'>we're</span> <span m='269040'>going</span> <span
  m='269130'>to</span> <span m='269180'>show</span> <span m='269410'>that</span>
  <span m='269600'>even</span> <span m='269860'>if</span> <span
  m='269960'>you</span> <span m='270160'>just</span> <span
  m='270470'>count</span> <span m='270690'>comparisons,</span> <span
  m='271350'>you</span> <span m='271380'>can</span> <span m='271520'>do</span>
  <span m='271630'>whatever</span> <span m='272100'>other</span> <span
  m='272320'>crazy</span> <span m='272680'>things</span> <span
  m='272890'>you</span> <span m='273010'>want.</span> <span
  m='273810'>You</span> <span m='273950'>need</span> <span m='274160'>lg
  n</span> <span m='274510'>time</span> <span m='274740'>to</span> <span
  m='274820'>search.</span> <span m='275100'>You</span> <span
  m='275240'>need</span> <span m='275440'>n</span> <span m='275550'>lg n</span>
  <span m='275910'>time</span> <span m='276270'>to</span> <span
  m='276690'>sort.</span> <span m='278210'>So</span> <span
  m='278400'>that's</span> <span m='278700'>our</span> <span
  m='279880'>goal.</span> </p><p><span m='289160'>So</span> <span
  m='290770'>to</span> <span m='290910'>prove</span> <span
  m='291180'>that</span> <span m='293130'>we're</span> <span
  m='293310'>going</span> <span m='293430'>to</span> <span
  m='293480'>introduce</span> <span m='294020'>the</span> <span
  m='294150'>notion</span> <span m='294550'>of</span> <span m='294820'>a</span>
  <span m='294930'>decision</span> <span m='295330'>tree.</span> <span
  m='309210'>So</span> <span m='309330'>the</span> <span m='309490'>idea</span>
  <span m='309680'>is</span> <span m='309760'>the</span> <span
  m='309840'>following:</span> <span m='310360'>if</span> <span
  m='310570'>we</span> <span m='310740'>know</span> <span m='311330'>that</span>
  <span m='311480'>our</span> <span m='311620'>algorithms</span> <span
  m='312080'>are</span> <span m='312260'>only</span> <span
  m='312610'>comparing</span> <span m='313280'>items,</span> <span
  m='315180'>we</span> <span m='315400'>can</span> <span
  m='315570'>actually</span> <span m='315890'>sort</span> <span
  m='316070'>of</span> <span m='316240'>draw</span> <span m='317670'>all</span>
  <span m='317970'>the</span> <span m='318080'>possible</span> <span
  m='318610'>things</span> <span m='318930'>that</span> <span
  m='319030'>an</span> <span m='319130'>algorithm</span> <span
  m='319580'>could</span> <span m='319710'>do,</span> <span m='322530'>so</span>
  <span m='322990'>any</span> <span m='323570'>comparison</span> <span
  m='324130'>algorithm.</span> <span m='331180'>So</span> <span
  m='331290'>this</span> <span m='331520'>focusing</span> <span
  m='331825'>in</span> <span m='332130'>on</span> <span
  m='332270'>comparisons</span> <span m='333480'>lets</span> <span
  m='333770'>us</span> <span m='334010'>take</span> <span m='334430'>a</span>
  <span m='335710'>tree</span> <span m='336070'>perspective</span> <span
  m='336670'>of</span> <span m='336760'>what</span> <span m='336910'>our</span>
  <span m='337020'>algorithm</span> <span m='337370'>does--</span> <span
  m='369730'>all</span> <span m='369960'>possible</span> <span
  m='372700'>comparisons</span> <span m='376090'>and</span> <span
  m='376590'>their</span> <span m='376770'>outcomes</span> <span
  m='386140'>and</span> <span m='386480'>the</span> <span
  m='386560'>resulting</span> <span m='388370'>answer.</span> </p><p><span
  m='392300'>I</span> <span m='392430'>think</span> <span m='392600'>this</span>
  <span m='392770'>would</span> <span m='392870'>be</span> <span
  m='392970'>a</span> <span m='393030'>lot</span> <span
  m='393220'>clearer</span> <span m='393560'>if</span> <span
  m='393820'>we</span> <span m='393950'>look</span> <span m='394130'>at</span>
  <span m='394190'>an</span> <span m='394250'>example--</span> <span
  m='400350'>binary</span> <span m='400930'>search,</span> <span m='402500'>how
  you</span> <span m='402570'>search a</span> <span m='402830'>simple</span>
  <span m='403210'>algorithm.</span> <span m='404670'>Look</span> <span
  m='404850'>at</span> <span m='404930'>the</span> <span
  m='405010'>middle</span> <span m='405300'>compared</span> <span
  m='405740'>to</span> <span m='405820'>the</span> <span m='405970'>item</span>
  <span m='406200'>you're</span> <span m='406310'>searching</span> <span
  m='406670'>for</span> <span m='406980'>go</span> <span m='407130'>left</span>
  <span m='407400'>or</span> <span m='407470'>go</span> <span
  m='407600'>right.</span> <span m='409890'>And</span> <span
  m='410200'>our</span> <span m='410330'>idea--</span> <span m='410780'>I</span>
  <span m='410900'>didn't</span> <span m='411180'>write</span> <span
  m='411370'>it</span> <span m='411500'>here--</span> <span m='417820'>is</span>
  <span m='418010'>to</span> <span m='418180'>look</span> <span
  m='418410'>at</span> <span m='418580'>a</span> <span
  m='418670'>particular</span> <span m='419450'>value</span> <span
  m='419920'>of</span> <span m='420100'>n,</span> <span m='422260'>n</span>
  <span m='422500'>being</span> <span m='422750'>the</span> <span
  m='422820'>size</span> <span m='423130'>of</span> <span m='423190'>your</span>
  <span m='423310'>problem,</span> <span m='424330'>so</span> <span
  m='424380'>binary</span> <span m='424690'>search,</span> <span
  m='425000'>you're</span> <span m='425090'>searching</span> <span
  m='425450'>among</span> <span m='425730'>n</span> <span
  m='425930'>items</span> <span m='426370'>for</span> <span
  m='426900'>another</span> <span m='427270'>item.</span> </p><p><span
  m='429670'>And</span> <span m='430130'>I'm</span> <span
  m='430290'>going</span> <span m='430400'>to</span> <span
  m='430470'>keep</span> <span m='430660'>it</span> <span
  m='430780'>simple,</span> <span m='432830'>n</span> <span
  m='432980'>equals</span> <span m='433290'>three.</span> <span
  m='435520'>I</span> <span m='435580'>think</span> <span m='435830'>I'm</span>
  <span m='435940'>going</span> <span m='436080'>to</span> <span
  m='437550'>go</span> <span m='437690'>a</span> <span m='437760'>little</span>
  <span m='437960'>wide,</span> <span m='440750'>use</span> <span
  m='440850'>the</span> <span m='440900'>whole</span> <span
  m='441100'>board.</span> <span m='442790'>So</span> <span m='443100'>n</span>
  <span m='443260'>equals</span> <span m='443590'>3</span> <span
  m='443930'>we've</span> <span m='444160'>got</span> <span
  m='445320'>array,</span> <span m='447740'>say</span> <span
  m='448800'>index</span> <span m='449200'>turning</span> <span
  m='449500'>at</span> <span m='449670'>zero--</span> <span
  m='451720'>pretty</span> <span m='451960'>simple</span> <span
  m='452360'>binary</span> <span m='452750'>search--</span> <span
  m='453510'>look in</span> <span m='453630'>the</span> <span
  m='453650'>middle,</span> <span m='453920'>go</span> <span
  m='454060'>left</span> <span m='454290'>or go</span> <span
  m='454560'>right.</span> <span m='456150'>But</span> <span
  m='456340'>I'm</span> <span m='456460'>going</span> <span m='456560'>to</span>
  <span m='456620'>write</span> <span m='456990'>out</span> <span
  m='457280'>this</span> <span m='457460'>algorithm</span> <span
  m='457850'>explicitly</span> <span m='458200'>to</span> <span
  m='458550'>say,</span> <span m='459280'>all</span> <span
  m='459420'>right,</span> <span m='459920'>first</span> <span
  m='460190'>thing</span> <span m='460340'>I</span> <span m='460400'>do</span>
  <span m='461000'>is</span> <span m='461220'>compare</span> <span
  m='462110'>is</span> <span m='462410'>A</span> <span m='462630'>1</span> <span
  m='464300'>less</span> <span m='464660'>than</span> <span m='464930'>x?</span>
  </p><p><span m='467490'>That's</span> <span m='467830'>in</span> <span
  m='468010'>all</span> <span m='468230'>cases,</span> <span
  m='468900'>no</span> <span m='469000'>matter</span> <span
  m='469090'>what</span> <span m='469270'>the</span> <span m='469390'>array
  is</span> <span m='469730'>as</span> <span m='469820'>long</span> <span
  m='469980'>as</span> <span m='470060'>n</span> <span m='470170'>equals</span>
  <span m='470410'>three,</span> <span m='470620'>this</span> <span
  m='470790'>is</span> <span m='470880'>the</span> <span m='470980'>first</span>
  <span m='471280'>operation</span> <span m='471760'>you</span> <span
  m='471860'>do.</span> <span m='472570'>The</span> <span
  m='472690'>answer</span> <span m='472990'>is</span> <span
  m='473090'>either</span> <span m='473220'>yes</span> <span
  m='473420'>or</span> <span m='473700'>no.</span> <span m='477970'>If</span>
  <span m='478240'>the</span> <span m='478360'>answer</span> <span
  m='478630'>is</span> <span m='478750'>no,</span> <span m='480830'>that</span>
  <span m='480990'>means</span> <span m='481250'>x</span> <span
  m='481550'>is</span> <span m='481820'>less</span> <span m='482140'>than</span>
  <span m='482240'>or</span> <span m='482400'>equal</span> <span
  m='482770'>to</span> <span m='483620'>A</span> <span m='483780'>1,</span>
  <span m='484250'>so it's</span> <span m='484400'>to</span> <span
  m='484510'>the</span> <span m='484590'>left.</span> </p><p><span
  m='485670'>Then</span> <span m='485890'>we</span> <span
  m='486020'>compare</span> <span m='486370'>with</span> <span
  m='486500'>A</span> <span m='486590'>0.</span> <span m='487680'>Is</span>
  <span m='488010'>A</span> <span m='488250'>0</span> <span
  m='489840'>less</span> <span m='490170'>than</span> <span m='490300'>x?</span>
  <span m='491820'>Answer</span> <span m='492170'>is</span> <span
  m='492390'>either</span> <span m='492710'>yes</span> <span
  m='493000'>or</span> <span m='493080'>no.</span> <span m='496410'>If
  the</span> <span m='496510'>answer</span> <span m='496750'>is</span> <span
  m='496850'>no,</span> <span m='498490'>we're</span> <span
  m='498680'>kind</span> <span m='498890'>of</span> <span
  m='498960'>done.</span> <span m='499170'>We</span> <span
  m='499300'>know</span> <span m='499460'>that</span> <span m='499570'>x</span>
  <span m='499790'>is</span> <span m='499910'>over</span> <span
  m='500090'>here</span> <span m='500580'>or</span> <span m='500850'>it</span>
  <span m='501000'>might</span> <span m='501200'>actually</span> <span
  m='501480'>be</span> <span m='501640'>equal</span> <span m='501900'>to</span>
  <span m='501960'>A</span> <span m='502080'>0.</span> <span
  m='504500'>If</span> <span m='504670'>you</span> <span m='504800'>want</span>
  <span m='504950'>to</span> <span m='505010'>figure</span> <span
  m='505330'>out</span> <span m='505400'>whether</span> <span
  m='505620'>it's</span> <span m='505800'>equal</span> <span
  m='506220'>or</span> <span m='506300'>less</span> <span
  m='506580'>than,</span> <span m='506780'>there will</span> <span
  m='506900'>be</span> <span m='507060'>one</span> <span m='507280'>more</span>
  <span m='507470'>step.</span> <span m='507920'>But</span> <span
  m='508060'>I'll</span> <span m='508170'>just</span> <span m='508310'>stop
  it</span> <span m='508620'>here.</span> </p><p><span m='509330'>We'll</span>
  <span m='509460'>say,</span> <span m='509760'>well</span> <span
  m='510090'>in</span> <span m='510230'>this</span> <span
  m='510380'>case,</span> <span m='510760'>x</span> <span m='510910'>is</span>
  <span m='511030'>less</span> <span m='511280'>than</span> <span
  m='511380'>or</span> <span m='511480'>equal</span> <span m='511520'>to</span>
  <span m='511740'>A</span> <span m='512150'>0.</span> <span m='513510'>I'm
  going</span> <span m='513630'>to</span> <span m='513860'>put it</span> <span
  m='514030'>in</span> <span m='514169'>a</span> <span m='514220'>box,</span>
  <span m='514710'>say</span> <span m='514840'>that's</span> <span
  m='515110'>done</span> <span m='515409'>where</span> <span
  m='515600'>the</span> <span m='515700'>circles</span> <span
  m='516230'>are</span> <span m='516350'>the</span> <span
  m='516490'>decisions.</span> <span m='517970'>OK?</span> <span
  m='518929'>If</span> <span m='519250'>the</span> <span
  m='519460'>answer</span> <span m='519890'>is</span> <span
  m='520200'>yes--</span> <span m='521340'>there's</span> <span
  m='521530'>no</span> <span m='521789'>to</span> <span m='521860'>this</span>
  <span m='522080'>question,</span> <span m='522539'>yes</span> <span
  m='522890'>to</span> <span m='522970'>this</span> <span
  m='523179'>question--</span> <span m='523549'>then you</span> <span
  m='523710'>know that</span> <span m='524120'>x</span> <span
  m='524390'>falls</span> <span m='524690'>in</span> <span
  m='524800'>between</span> <span m='525160'>here.</span> </p><p><span
  m='526950'>Probably</span> <span m='527160'>need a</span> <span
  m='527650'>wider</span> <span m='527900'>box</span> <span
  m='528230'>for</span> <span m='528300'>this.</span> <span m='529440'>So</span>
  <span m='529670'>we</span> <span m='529760'>have</span> <span
  m='530210'>A</span> <span m='530660'>0</span> <span m='531510'>is</span> <span
  m='532590'>less</span> <span m='533040'>than</span> <span
  m='533290'>x--</span> <span m='534295'>that</span> <span m='534650'>was</span>
  <span m='534790'>the</span> <span m='534900'>yes</span> <span
  m='535210'>to</span> <span m='535310'>this--</span> <span
  m='536070'>and</span> <span m='536350'>the</span> <span m='536440'>note
  of</span> <span m='536760'>this</span> <span m='536990'>means</span> <span
  m='537220'>that</span> <span m='537350'>x</span> <span m='537590'>is</span>
  <span m='537720'>less</span> <span m='538020'>than</span> <span
  m='538120'>or</span> <span m='538220'>equal</span> <span m='538320'>to</span>
  <span m='538430'>A</span> <span m='538560'>1,</span> <span
  m='539780'>and</span> <span m='539960'>so</span> <span m='540100'>we</span>
  <span m='540200'>basically</span> <span m='540740'>identified</span> <span
  m='541350'>where</span> <span m='541660'>x</span> <span
  m='541930'>fits.</span> <span m='542310'>It's</span> <span
  m='542480'>in</span> <span m='542660'>between</span> <span
  m='543050'>those</span> <span m='543250'>two</span> <span
  m='543390'>values,</span> <span m='543790'>possibly</span> <span
  m='544240'>equal</span> <span m='544470'>to</span> <span
  m='544570'>this</span> <span m='544800'>one.</span> <span
  m='545230'>Again,</span> <span m='545550'>one</span> <span
  m='545760'>more</span> <span m='545920'>comparison,</span> <span
  m='546400'>you</span> <span m='546540'>could</span> <span
  m='546690'>figure</span> <span m='546910'>that</span> <span
  m='547100'>out.</span> </p><p><span m='550220'>And</span> <span
  m='550410'>then</span> <span m='551060'>if</span> <span m='551260'>x</span>
  <span m='551490'>is</span> <span m='551620'>to</span> <span
  m='551740'>the</span> <span m='551920'>right</span> <span m='552300'>of</span>
  <span m='552560'>A</span> <span m='552780'>1,</span> <span
  m='553240'>so</span> <span m='553380'>this</span> <span m='553570'>is</span>
  <span m='553680'>true,</span> <span m='555220'>then</span> <span
  m='555640'>we</span> <span m='555880'>check</span> <span m='557240'>x</span>
  <span m='557530'>against</span> <span m='557880'>A</span> <span
  m='558010'>2</span> <span m='562370'>and</span> <span m='562820'>the</span>
  <span m='562930'>answer</span> <span m='563210'>is</span> <span
  m='563310'>either</span> <span m='563990'>no</span> <span m='565620'>or</span>
  <span m='565860'>yes.</span> <span m='568320'>And</span> <span
  m='568520'>in</span> <span m='568580'>the</span> <span m='568790'>no</span>
  <span m='569160'>case--</span> <span m='570840'>well</span> <span
  m='571010'>I've</span> <span m='571220'>conveniently</span> <span
  m='572570'>laid</span> <span m='572810'>things</span> <span
  m='573050'>out</span> <span m='573250'>here,</span> <span
  m='574070'>it's</span> <span m='574730'>sequential--</span> <span
  m='575230'>in the yes</span> <span m='575560'>case,</span> <span
  m='575990'>x</span> <span m='576290'>is</span> <span m='576390'>bigger</span>
  <span m='576630'>than</span> <span m='576780'>A</span> <span
  m='576910'>2</span> <span m='577540'>so</span> <span m='577670'>it's</span>
  <span m='577790'>outside</span> <span m='578180'>the</span> <span
  m='578320'>array.</span> <span m='579920'>It's</span> <span
  m='580180'>to</span> <span m='580300'>the</span> <span
  m='580430'>right.</span> <span m='581700'>That's</span> <span
  m='581930'>the</span> <span m='582040'>answer.</span> <span
  m='584110'>Set.</span> <span m='585860'>Yeah.</span> <span
  m='588560'>And</span> <span m='588760'>in</span> <span m='588850'>the</span>
  <span m='588960'>other</span> <span m='589080'>case, it's</span> <span
  m='589520'>in</span> <span m='589600'>between</span> <span m='589920'>A</span>
  <span m='590020'>1 and</span> <span m='590330'>A</span> <span
  m='590390'>2.</span> </p><p><span m='596640'>It's</span> <span
  m='596870'>a</span> <span m='596950'>tedious</span> <span
  m='597350'>process</span> <span m='597810'>to</span> <span
  m='597930'>write</span> <span m='598140'>out</span> <span m='598320'>an</span>
  <span m='598410'>algorithm</span> <span m='598780'>like</span> <span
  m='599010'>this</span> <span m='599820'>because</span> <span
  m='601170'>a</span> <span m='601230'>binary</span> <span
  m='601560'>search--</span> <span m='603220'>it's</span> <span
  m='603340'>not</span> <span m='603520'>so</span> <span m='603640'>bad--</span>
  <span m='604360'>but</span> <span m='604710'>if you</span> <span
  m='605040'>tried</span> <span m='605230'>to</span> <span
  m='605330'>write</span> <span m='605480'>a</span> <span
  m='605530'>sorting</span> <span m='605920'>algorithm</span> <span
  m='606330'>out</span> <span m='606440'>like</span> <span
  m='606640'>this</span> <span m='607310'>where</span> <span
  m='607430'>the</span> <span m='607600'>answers</span> <span
  m='608580'>are</span> <span m='608690'>down</span> <span m='608930'>the</span>
  <span m='609000'>bottom,</span> <span m='609280'>here's</span> <span
  m='609560'>the</span> <span m='609630'>sorted</span> <span
  m='609980'>order,</span> <span m='611150'>and</span> <span
  m='611370'>all</span> <span m='611680'>the</span> <span
  m='611780'>comparisons</span> <span m='612350'>you</span> <span
  m='612480'>do</span> <span m='612620'>here,</span> <span m='613190'>the</span>
  <span m='613310'>tree</span> <span m='613620'>will</span> <span
  m='613850'>actually</span> <span m='614090'>be</span> <span
  m='614210'>of</span> <span m='614300'>exponential</span> <span
  m='614870'>size.</span> <span m='615600'>So</span> <span m='616190'>you</span>
  <span m='616290'>don't</span> <span m='616480'>actually</span> <span
  m='616880'>want</span> <span m='617040'>to</span> <span
  m='617090'>represent</span> <span m='617520'>an</span> <span
  m='617620'>algorithm</span> <span m='618070'>like</span> <span
  m='618270'>this</span> <span m='618490'>unless</span> <span
  m='618790'>you're</span> <span m='618900'>just</span> <span
  m='619090'>trying</span> <span m='619280'>to</span> <span
  m='619350'>analyze</span> <span m='619810'>it.</span> <span
  m='621300'>But</span> <span m='621330'>it's</span> <span
  m='621480'>nice</span> <span m='622100'>to</span> <span
  m='622290'>think</span> <span m='622500'>of</span> <span m='622590'>an</span>
  <span m='622670'>algorithm</span> <span m='623040'>this</span> <span
  m='623210'>way</span> <span m='623380'>because</span> <span
  m='623730'>you</span> <span m='623860'>see</span> <span m='624410'>all</span>
  <span m='624710'>possible</span> <span m='625190'>executions</span> <span
  m='625820'>all</span> <span m='626080'>at</span> <span m='626160'>once.</span>
  </p><p><span m='632430'>Let</span> <span m='632610'>me</span> <span
  m='633000'>talk</span> <span m='633280'>about</span> <span
  m='633570'>some</span> <span m='633740'>features</span> <span
  m='634160'>of</span> <span m='634260'>this</span> <span m='634440'>tree</span>
  <span m='634870'>versus</span> <span m='635960'>the</span> <span
  m='636110'>algorithm.</span> <span m='637410'>So</span> <span
  m='637690'>every</span> <span m='638130'>internal</span> <span
  m='638690'>node--</span> <span m='644602'>actually,</span> <span
  m='645084'>I'm going</span> <span m='645570'>to go</span> <span
  m='646510'>over</span> <span m='646650'>here.</span> <span
  m='652340'>So</span> <span m='652610'>we</span> <span m='652710'>have</span>
  <span m='652990'>a</span> <span m='653040'>decision</span> <span
  m='653440'>tree</span> <span m='658330'>and</span> <span m='658540'>we</span>
  <span m='658640'>have</span> <span m='658760'>an</span> <span
  m='658830'>algorithm</span> <span m='661030'>that</span> <span
  m='661220'>decision</span> <span m='661750'>tree</span> <span
  m='661940'>represents.</span> <span m='663790'>And</span> <span
  m='664020'>so</span> <span m='664170'>when</span> <span m='664330'>we</span>
  <span m='664420'>have</span> <span m='664610'>an</span> <span
  m='664710'>internal</span> <span m='665170'>node</span> <span
  m='665630'>in</span> <span m='665860'>the</span> <span
  m='665970'>decision</span> <span m='666360'>tree,</span> <span
  m='669870'>that</span> <span m='670080'>corresponds</span> <span
  m='670720'>to</span> <span m='671050'>a</span> <span m='671230'>binary</span>
  <span m='671690'>decision</span> <span m='672890'>in</span> <span
  m='673030'>the</span> <span m='673160'>algorithm.</span> <span
  m='675740'>In</span> <span m='675940'>this</span> <span
  m='676120'>case,</span> <span m='677670'>we're</span> <span
  m='677830'>only</span> <span m='678000'>looking</span> <span
  m='678260'>at</span> <span m='678380'>comparisons.</span> </p><p><span
  m='682490'>Slight</span> <span m='682660'>technical</span> <span
  m='683060'>detail,</span> <span m='683640'>decision</span> <span
  m='684080'>trees</span> <span m='684320'>are</span> <span m='684760'>a</span>
  <span m='684930'>little</span> <span m='685180'>more</span> <span
  m='685360'>general</span> <span m='685720'>than</span> <span
  m='685860'>comparisons.</span> <span m='687150'>Could</span> <span
  m='687300'>be</span> <span m='687420'>any</span> <span
  m='687630'>binary</span> <span m='687980'>decision</span> <span
  m='688420'>here</span> <span m='689000'>and</span> <span
  m='689080'>everything</span> <span m='689490'>I</span> <span
  m='689550'>say</span> <span m='689740'>will</span> <span m='689910'>be</span>
  <span m='690360'>true</span> <span m='690580'>about</span> <span
  m='691390'>any</span> <span m='691590'>binary</span> <span
  m='691920'>decision</span> <span m='692320'>you</span> <span
  m='692430'>make.</span> <span m='693370'>Comparisons</span> <span
  m='693960'>are the</span> <span m='694100'>ones</span> <span
  m='694300'>we</span> <span m='694370'>kind</span> <span m='694540'>of</span>
  <span m='694590'>care</span> <span m='694820'>about</span> <span
  m='695070'>because</span> <span m='695300'>all</span> <span
  m='695460'>of</span> <span m='695540'>our</span> <span
  m='695660'>algorithms</span> <span m='696080'>are</span> <span
  m='696170'>doing</span> <span m='696410'>that.</span> <span
  m='699040'>And</span> <span m='699230'>then</span> <span m='700480'>a</span>
  <span m='700550'>leaf</span> <span m='700810'>in</span> <span
  m='700900'>this</span> <span m='701090'>tree</span> <span
  m='703990'>corresponds</span> <span m='704550'>to--</span> <span
  m='708440'>it</span> <span m='708640'>stores</span> <span m='709220'>or</span>
  <span m='709350'>it</span> <span m='709570'>represents</span> <span
  m='710750'>that</span> <span m='710870'>you've</span> <span
  m='711060'>found</span> <span m='711370'>the</span> <span
  m='711490'>answer.</span> <span m='714730'>Maybe</span> <span
  m='715400'>I'll</span> <span m='715520'>say</span> <span
  m='715730'>found.</span> </p><p><span m='721460'>When the</span> <span
  m='721810'>algorithm</span> <span m='722480'>terminates,</span> <span
  m='723520'>returns</span> <span m='723880'>some</span> <span
  m='724120'>answer</span> <span m='724370'>to</span> <span
  m='724460'>the</span> <span m='724560'>problem,</span> <span
  m='725390'>that's</span> <span m='725610'>what</span> <span
  m='725730'>we</span> <span m='725840'>write</span> <span
  m='726030'>down</span> <span m='726230'>here.</span> <span
  m='728050'>Here's</span> <span m='728830'>where</span> <span
  m='729050'>x</span> <span m='729320'>is</span> <span m='729560'>in</span>
  <span m='729690'>this</span> <span m='729860'>array</span> <span
  m='731060'>and,</span> <span m='732480'>yeah,</span> <span
  m='734310'>we're</span> <span m='734410'>done.</span> <span m='736950'>What
  else</span> <span m='737140'>do we</span> <span m='737210'>have?</span>
  </p><p><span m='740120'>Here's</span> <span m='740420'>some</span> <span
  m='740750'>puzzles</span> <span m='741080'>for</span> <span
  m='741250'>you.</span> <span m='745470'>If</span> <span m='745630'>I</span>
  <span m='745690'>just</span> <span m='745970'>wanted</span> <span
  m='746220'>to</span> <span m='746340'>look</span> <span m='746530'>at</span>
  <span m='746620'>a</span> <span m='746690'>single</span> <span
  m='747230'>execution</span> <span m='747940'>of</span> <span
  m='748060'>the</span> <span m='748200'>algorithm,</span> <span
  m='749770'>what</span> <span m='749960'>does</span> <span
  m='750070'>that</span> <span m='750230'>correspond</span> <span
  m='750780'>to</span> <span m='751050'>in</span> <span m='751200'>the</span>
  <span m='751290'>tree?</span> <span m='756010'>Yeah.</span> </p><p><span
  m='756400'>AUDIENCE: Going</span> <span m='756740'>from</span> <span
  m='757080'>the root</span> <span m='757420'>all the</span> <span
  m='757920'>way down</span> <span m='758420'>to the leaf.</span> </p><p><span
  m='758670'>PROFESSOR: Going from</span> <span m='758925'>the root</span> <span
  m='759180'>down</span> <span m='759370'>to a</span> <span
  m='759520'>leaf.</span> <span m='759980'>This</span> <span
  m='760120'>is</span> <span m='760270'>what I</span> <span
  m='760510'>normally</span> <span m='760860'>call</span> <span
  m='761760'>a</span> <span m='762040'>root-to-leaf</span> <span
  m='762570'>path,</span> <span m='763370'>technically</span> <span
  m='763920'>a</span> <span m='764200'>downward</span> <span
  m='765670'>root-to-leaf</span> <span m='765960'>path.</span> <span
  m='768080'>How</span> <span m='768390'>about</span> <span
  m='769960'>the</span> <span m='770100'>running</span> <span
  m='770370'>time</span> <span m='770590'>of</span> <span m='770680'>that</span>
  <span m='770850'>execution?</span> <span m='772600'>How</span> <span
  m='772680'>long</span> <span m='772850'>does it</span> <span
  m='773210'>take?</span> <span m='776650'>Keep</span> <span
  m='776720'>going?</span> </p><p><span m='777515'>AUDIENCE: Lg</span> <span
  m='777800'>n.</span> </p><p><span m='778730'>PROFESSOR: Lg</span> <span
  m='779010'>n</span> <span m='781140'>in</span> <span m='781570'>binary</span>
  <span m='781910'>search,</span> <span m='782360'>but</span> <span
  m='782380'>in</span> <span m='782470'>general.</span> </p><p><span
  m='783340'>AUDIENCE: The length</span> <span m='783780'>of that path.</span>
  </p><p><span m='784170'>PROFESSOR: The</span> <span m='784270'>length</span>
  <span m='784510'>of</span> <span m='784590'>that</span> <span
  m='784780'>path.</span> <span m='785160'>Yeah.</span> <span
  m='791420'>Got</span> <span m='791550'>to</span> <span m='791600'>make</span>
  <span m='791760'>sure</span> <span m='791910'>we</span> <span
  m='792010'>get</span> <span m='792170'>n</span> <span m='792430'>cases</span>
  <span m='792810'>right</span> <span m='793010'>but</span> <span
  m='793100'>I</span> <span m='793150'>think</span> <span m='793360'>it's</span>
  <span m='793570'>correct,</span> <span m='793990'>so</span> <span
  m='795080'>if</span> <span m='795410'>here</span> <span m='795710'>is</span>
  <span m='795810'>an</span> <span m='795920'>execution</span> <span
  m='796240'>of</span> <span m='796560'>the</span> <span
  m='796700'>algorithm,</span> <span m='797670'>when</span> <span
  m='797990'>x</span> <span m='798260'>happens</span> <span m='798630'>to</span>
  <span m='798730'>be</span> <span m='798860'>between</span> <span m='799320'>A
  0</span> <span m='799700'>and</span> <span m='799900'>A</span> <span
  m='799960'>1,</span> <span m='800910'>we</span> <span m='801030'>do</span>
  <span m='801160'>one</span> <span m='801360'>comparison</span> <span
  m='801840'>here,</span> <span m='802130'>a</span> <span
  m='802420'>second</span> <span m='802660'>comparison</span> <span
  m='803120'>here,</span> <span m='803350'>and</span> <span
  m='803430'>then</span> <span m='803560'>we're</span> <span
  m='803690'>done.</span> <span m='804810'>So</span> <span m='804990'>the</span>
  <span m='805060'>cost was</span> <span m='805540'>two</span> <span
  m='806470'>and</span> <span m='806660'>indeed</span> <span
  m='806970'>the</span> <span m='807050'>length</span> <span
  m='807300'>of</span> <span m='807350'>this</span> <span m='807510'>path</span>
  <span m='807760'>is</span> <span m='807890'>two.</span> <span
  m='808310'>So</span> <span m='808880'>it</span> <span m='808950'>works</span>
  <span m='809230'>out,</span> <span m='809500'>no</span> <span
  m='809805'>off-by-one</span> <span m='810450'>errors.</span> </p><p><span
  m='813360'>All</span> <span m='813440'>right,</span> <span
  m='813890'>now</span> <span m='815210'>exciting</span> <span
  m='815650'>one</span> <span m='815860'>for</span> <span m='816030'>us,</span>
  <span m='816950'>what</span> <span m='817110'>we</span> <span
  m='817270'>care</span> <span m='817530'>about</span> <span
  m='817960'>all</span> <span m='818190'>the</span> <span m='818280'>time</span>
  <span m='818570'>in</span> <span m='818640'>this</span> <span
  m='818810'>class</span> <span m='819880'>is</span> <span
  m='820040'>worst-case</span> <span m='820590'>running</span> <span
  m='820840'>time.</span> <span m='823070'>This</span> <span
  m='823180'>is</span> <span m='823320'>a</span> <span m='823380'>feature</span>
  <span m='823710'>of</span> <span m='823770'>the</span> <span
  m='823860'>entire</span> <span m='824230'>algorithm.</span> <span
  m='825290'>What</span> <span m='825450'>is</span> <span m='825570'>the</span>
  <span m='825660'>worst-case</span> <span m='826150'>running</span> <span
  m='826400'>time</span> <span m='827150'>of</span> <span m='827330'>a</span>
  <span m='827380'>given</span> <span m='827640'>decision</span> <span
  m='828010'>tree?</span> <span m='830202'>Yeah.</span> </p><p><span
  m='830675'>AUDIENCE: The</span> <span m='831148'>height of</span> <span
  m='831621'>the root,</span> <span m='832094'>the height</span> <span
  m='832567'>of the tree.</span> </p><p><span m='833040'>PROFESSOR: The</span>
  <span m='833120'>height</span> <span m='833490'>of</span> <span
  m='833640'>the</span> <span m='833750'>root</span> <span
  m='834530'>also</span> <span m='834840'>called</span> <span
  m='835030'>the</span> <span m='835100'>height</span> <span
  m='835280'>of</span> <span m='835370'>the</span> <span m='835460'>tree.</span>
  <span m='835750'>Yep.</span> <span m='843230'>Or</span> <span
  m='843340'>the</span> <span m='843460'>depth</span> <span m='843720'>of</span>
  <span m='843830'>the</span> <span m='844510'>deepest</span> <span
  m='844870'>leaf,</span> <span m='845210'>whatever.</span> <span
  m='845690'>So</span> <span m='845920'>in</span> <span m='845990'>this</span>
  <span m='846150'>case</span> <span m='846470'>all the</span> <span
  m='846720'>leaves</span> <span m='846940'>have</span> <span
  m='847110'>the</span> <span m='847190'>same</span> <span
  m='847430'>level,</span> <span m='847870'>but</span> <span
  m='848000'>in</span> <span m='848110'>general</span> <span
  m='848980'>we</span> <span m='849120'>care</span> <span
  m='849360'>about</span> <span m='849840'>the</span> <span
  m='849900'>overall</span> <span m='850360'>height.</span> <span
  m='850590'>How</span> <span m='850790'>many</span> <span
  m='851000'>levels</span> <span m='851370'>in this tree</span> <span
  m='851850'>are</span> <span m='851990'>there?</span> <span m='853370'>It's
  the</span> <span m='853760'>number</span> <span m='853950'>of</span> <span
  m='854010'>levels</span> <span m='854300'>minus</span> <span
  m='854600'>one,</span> <span m='854910'>technically.</span> <span
  m='856140'>But</span> <span m='857290'>the</span> <span
  m='857390'>length</span> <span m='857660'>of</span> <span
  m='857770'>longest</span> <span m='858230'>root-to-leaf</span> <span
  m='858660'>path</span> <span m='859940'>is</span> <span m='860180'>the</span>
  <span m='860280'>definition</span> <span m='860790'>of</span> <span
  m='860850'>height.</span> <span m='861780'>Here</span> <span
  m='861910'>it's</span> <span m='862215'>two.</span> </p><p><span
  m='863040'>In</span> <span m='863080'>general</span> <span
  m='863720'>we</span> <span m='863890'>know</span> <span m='864120'>for</span>
  <span m='864810'>binary</span> <span m='865140'>search</span> <span
  m='865420'>it's</span> <span m='865700'>lg</span> <span m='865980'>n,</span>
  <span m='867380'>but</span> <span m='867640'>given an</span> <span
  m='867980'>arbitrary</span> <span m='868420'>decision</span> <span
  m='868790'>tree,</span> <span m='869030'>we</span> <span
  m='869160'>just</span> <span m='869430'>have</span> <span m='869560'>to</span>
  <span m='869630'>figure</span> <span m='869880'>out</span> <span
  m='869940'>what</span> <span m='870050'>the</span> <span
  m='870120'>height</span> <span m='870340'>of</span> <span
  m='870410'>the</span> <span m='870490'>tree</span> <span m='870780'>is</span>
  <span m='871090'>and</span> <span m='871260'>we'll</span> <span
  m='871350'>figure</span> <span m='871590'>out</span> <span
  m='871690'>the</span> <span m='871770'>worst-case</span> <span
  m='872020'>running</span> <span m='872400'>time.</span> <span
  m='872640'>So</span> <span m='872700'>this is</span> <span
  m='872970'>why</span> <span m='873320'>decision</span> <span
  m='873710'>trees</span> <span m='873960'>are</span> <span
  m='874070'>interesting.</span> <span m='875510'>Not</span> <span
  m='875740'>because</span> <span m='876930'>it</span> <span
  m='876990'>means</span> <span m='877320'>they're</span> <span
  m='877830'>pretty</span> <span m='878270'>I</span> <span
  m='878370'>guess,</span> <span m='879020'>but</span> <span
  m='879500'>the</span> <span m='879610'>reason</span> <span
  m='879860'>they're</span> <span m='879970'>going</span> <span
  m='880110'>to</span> <span m='880180'>be</span> <span m='880310'>useful</span>
  <span m='881260'>is</span> <span m='881650'>we</span> <span
  m='881790'>have</span> <span m='881980'>this</span> <span
  m='882390'>kind</span> <span m='882550'>of</span> <span m='882610'>hard</span>
  <span m='882890'>question</span> <span m='883240'>which</span> <span
  m='883390'>is</span> <span m='883480'>how</span> <span m='883680'>much</span>
  <span m='883920'>time</span> <span m='884220'>do</span> <span
  m='884300'>you</span> <span m='884370'>need</span> <span m='884550'>to</span>
  <span m='884630'>solve</span> <span m='884880'>a</span> <span
  m='884960'>problem?</span> <span m='886640'>And</span> <span
  m='886960'>we're</span> <span m='887140'>translating</span> <span
  m='887930'>it</span> <span m='887990'>into</span> <span m='888870'>how</span>
  <span m='889750'>low</span> <span m='890110'>can</span> <span
  m='890280'>you</span> <span m='890390'>make</span> <span
  m='890600'>your</span> <span m='890730'>tree,</span> <span
  m='891470'>which</span> <span m='891680'>is a</span> <span
  m='891780'>problem</span> <span m='892070'>we</span> <span
  m='892300'>know</span> <span m='892500'>a</span> <span m='892540'>lot</span>
  <span m='892750'>about.</span> </p><p><span m='893210'>Trees</span> <span
  m='893540'>are</span> <span m='893610'>pretty</span> <span
  m='893950'>simple.</span> <span m='894300'>These</span> <span
  m='894470'>are</span> <span m='894550'>binary</span> <span
  m='895000'>trees.</span> <span m='895910'>They're</span> <span
  m='896060'>rooted,</span> <span m='897430'>and</span> <span
  m='897700'>so</span> <span m='897830'>we</span> <span m='898660'>know</span>
  <span m='899720'>lots of</span> <span m='899940'>good</span> <span
  m='900090'>things.</span> </p><p><span m='903420'>So</span> <span
  m='903630'>let's</span> <span m='903900'>prove some</span> <span
  m='904320'>lower</span> <span m='904570'>bounds.</span> <span
  m='925320'>So</span> <span m='925470'>I</span> <span m='925600'>claim</span>
  <span m='927490'>that</span> <span m='928080'>for</span> <span
  m='928310'>searching--</span> <span m='929720'>maybe</span> <span
  m='929970'>I</span> <span m='930020'>should</span> <span
  m='930520'>define</span> <span m='930850'>the</span> <span
  m='930940'>problem</span> <span m='931210'>a</span> <span
  m='931240'>little</span> <span m='931440'>more</span> <span
  m='931600'>formally--</span> <span m='932200'>I</span> <span
  m='932260'>want</span> <span m='932470'>to</span> <span
  m='932550'>claim</span> <span m='933125'>a</span> <span m='933380'>lg</span>
  <span m='933635'>n</span> <span m='933890'>lower</span> <span
  m='934170'>bound.</span> <span m='935000'>So</span> <span
  m='935200'>let's</span> <span m='935470'>say</span> <span
  m='936540'>for</span> <span m='936720'>searching</span> <span
  m='937320'>I</span> <span m='937460'>have</span> <span m='940070'>n</span>
  <span m='941230'>preprocessed</span> <span m='942040'>items.</span> <span
  m='949040'>Then</span> <span m='949260'>finding</span> <span
  m='953360'>a</span> <span m='953460'>given</span> <span m='953770'>item</span>
  <span m='958160'>among</span> <span m='958460'>them</span> <span
  m='963510'>in</span> <span m='963650'>the</span> <span
  m='963740'>comparison</span> <span m='964350'>model,</span> <span
  m='965355'>so</span> <span m='965800'>all</span> <span
  m='966100'>you're</span> <span m='966220'>allowed</span> <span
  m='966470'>to</span> <span m='966550'>do</span> <span m='966710'>are</span>
  <span m='966880'>compare</span> <span m='967380'>items</span> <span
  m='969230'>and</span> <span m='969620'>other</span> <span
  m='969830'>stuff,</span> <span m='970110'>but</span> <span
  m='970900'>the</span> <span m='970980'>only</span> <span
  m='971160'>things</span> <span m='971310'>you're</span> <span
  m='971410'>allowed</span> <span m='971580'>to</span> <span
  m='971650'>do</span> <span m='971760'>with</span> <span m='971880'>the</span>
  <span m='972000'>items</span> <span m='972370'>is</span> <span
  m='972510'>compare</span> <span m='972840'>them.</span> </p><p><span
  m='978180'>Requires</span> <span m='980130'>omega</span> <span
  m='981380'>lg</span> <span m='981745'>n</span> <span
  m='982630'>comparisons</span> <span m='983810'>in</span> <span
  m='983930'>the</span> <span m='984020'>worst</span> <span
  m='984260'>case.</span> <span m='985650'>It's</span> <span
  m='985710'>kind</span> <span m='985870'>of</span> <span
  m='985940'>tedious</span> <span m='986290'>to</span> <span
  m='986400'>write</span> <span m='986570'>down</span> <span
  m='986760'>these</span> <span m='986930'>theorems,</span> <span
  m='987380'>but</span> <span m='988380'>for our</span> <span
  m='988570'>first</span> <span m='988830'>lower</span> <span
  m='989080'>bounds,</span> <span m='989450'>I</span> <span
  m='989500'>thought</span> <span m='989710'>I'd</span> <span
  m='989820'>be</span> <span m='990420'>super</span> <span
  m='990750'>explicit.</span> <span m='993990'>I</span> <span
  m='994120'>mentioned</span> <span m='994510'>here</span> <span
  m='994770'>that</span> <span m='995860'>the</span> <span
  m='996000'>items</span> <span m='996270'>are</span> <span
  m='996360'>preprocessed</span> <span m='997320'>to</span> <span
  m='997450'>mean</span> <span m='997670'>you</span> <span
  m='997790'>could</span> <span m='997930'>do</span> <span
  m='998040'>whatever</span> <span m='998370'>you</span> <span
  m='998510'>want</span> <span m='998760'>the</span> <span
  m='998900'>items</span> <span m='999130'>ahead</span> <span
  m='999340'>of</span> <span m='999440'>time,</span> <span
  m='999940'>that's</span> <span m='1000150'>for</span> <span
  m='1000280'>free.</span> <span m='1001040'>So</span> <span
  m='1001160'>I</span> <span m='1001220'>can</span> <span
  m='1001390'>sort</span> <span m='1001760'>them</span> <span
  m='1001950'>in</span> <span m='1002040'>particular,</span> <span
  m='1002690'>which</span> <span m='1002850'>lets</span> <span
  m='1003020'>me</span> <span m='1003110'>do</span> <span
  m='1003220'>binary</span> <span m='1003580'>search.</span> <span
  m='1004200'>I</span> <span m='1004330'>could</span> <span
  m='1004500'>build</span> <span m='1004790'>them</span> <span
  m='1004960'>into</span> <span m='1005140'>an</span> <span
  m='1005220'>AVL</span> <span m='1005570'>tree,</span> <span
  m='1005965'>could</span> <span m='1006360'>do</span> <span
  m='1006490'>lots</span> <span m='1006700'>of</span> <span
  m='1006790'>things,</span> <span m='1007980'>but</span> <span
  m='1008130'>no</span> <span m='1008240'>matter</span> <span
  m='1008600'>what</span> <span m='1008790'>I</span> <span m='1008870'>do</span>
  <span m='1009650'>to</span> <span m='1009740'>find</span> <span
  m='1010050'>another</span> <span m='1010350'>item</span> <span
  m='1010590'>takes</span> <span m='1010840'>lg</span> <span
  m='1011080'>n</span> <span m='1011200'>time.</span> </p><p><span
  m='1018060'>Can someone</span> <span m='1018330'>tell</span> <span
  m='1018470'>me</span> <span m='1018610'>why?</span> <span m='1022238'>Who
  doesn't</span> <span m='1022722'>have the</span> <span m='1023206'>lecture
  notes</span> <span m='1023690'>right in front</span> <span m='1024174'>them,
  that</span> <span m='1024658'>would make</span> <span m='1025142'>it
  easy.</span> <span m='1028060'>This is</span> <span m='1028300'>a</span> <span
  m='1028369'>little</span> <span m='1028599'>more</span> <span
  m='1030510'>interesting,</span> <span m='1032599'>but</span> <span
  m='1032750'>we</span> <span m='1032839'>had</span> <span
  m='1033060'>all</span> <span m='1033369'>the</span> <span
  m='1033470'>tools</span> <span m='1033760'>at</span> <span
  m='1033910'>our</span> <span m='1034069'>disposal</span> <span
  m='1034420'>now.</span> <span m='1035460'>We</span> <span
  m='1035569'>want</span> <span m='1035780'>to</span> <span
  m='1035849'>show</span> <span m='1036050'>that</span> <span
  m='1036230'>this</span> <span m='1036440'>at least</span> <span
  m='1036869'>lg</span> <span m='1037180'>n.</span> <span
  m='1040950'>Why?</span> <span m='1041860'>Yeah.</span> </p><p><span
  m='1042330'>AUDIENCE: [INAUDIBLE]</span> <span m='1045150'>have a</span> <span
  m='1045620'>no or</span> <span m='1046090'>yes,</span> <span
  m='1046560'>right?</span> <span m='1047040'>So it's--</span> </p><p><span
  m='1047079'>PROFESSOR: Right.</span> </p><p><span m='1047491'>AUDIENCE:
  --omega</span> <span m='1047903'>lg</span> <span m='1048315'>n</span> <span
  m='1048727'>tree.</span> </p><p><span m='1049140'>PROFESSOR: OK.</span> <span
  m='1049700'>At</span> <span m='1049840'>each</span> <span
  m='1050030'>step,</span> <span m='1050490'>we</span> <span
  m='1050650'>only</span> <span m='1050840'>have</span> <span
  m='1051010'>a</span> <span m='1051060'>no</span> <span m='1051190'>or</span>
  <span m='1051310'>yes.</span> <span m='1051560'>That's</span> <span
  m='1051740'>a</span> <span m='1051780'>binary</span> <span
  m='1052200'>tree.</span> <span m='1055310'>So</span> <span
  m='1055440'>that</span> <span m='1055860'>makes</span> <span
  m='1056060'>you</span> <span m='1056170'>think</span> <span
  m='1056340'>lg</span> <span m='1056470'>n.</span> </p><p><span
  m='1056870'>AUDIENCE: That's</span> <span m='1057301'>possible,</span> <span
  m='1057732'>it could be</span> <span m='1058163'>lg</span> <span
  m='1058594'>n.</span> </p><p><span m='1059460'>PROFESSOR: Maximum</span> <span
  m='1060020'>actually</span> <span m='1060400'>could</span> <span
  m='1060550'>be</span> <span m='1060680'>arbitrarily</span> <span
  m='1061210'>large.</span> <span m='1061470'>You</span> <span
  m='1061570'>could</span> <span m='1061710'>do</span> <span
  m='1061830'>a</span> <span m='1061870'>linear</span> <span
  m='1062170'>search</span> <span m='1062530'>and</span> <span
  m='1063180'>the</span> <span m='1063480'>height</span> <span
  m='1063750'>will</span> <span m='1063910'>be</span> <span
  m='1064290'>m.</span> <span m='1064930'>We</span> <span
  m='1065110'>care</span> <span m='1065260'>about</span> <span
  m='1065460'>the</span> <span m='1065530'>minimum</span> <span
  m='1065930'>of</span> <span m='1066040'>course.</span> <span
  m='1067910'>Why</span> <span m='1068140'>does</span> <span
  m='1068250'>it</span> <span m='1068320'>have</span> <span
  m='1068530'>to</span> <span m='1068640'>be--</span> <span
  m='1068980'>why</span> <span m='1069170'>does</span> <span
  m='1069270'>the</span> <span m='1069350'>height</span> <span
  m='1069600'>of</span> <span m='1069690'>a</span> <span m='1069750'>tree</span>
  <span m='1070040'>have</span> <span m='1070240'>to</span> <span
  m='1070340'>be</span> <span m='1070480'>at</span> <span
  m='1070530'>least</span> <span m='1070780'>lg</span> <span
  m='1071150'>n?</span> <span m='1071430'>There's</span> <span m='1071660'>one
  more</span> <span m='1071840'>thing</span> <span m='1072020'>we</span> <span
  m='1072100'>need</span> <span m='1072250'>to</span> <span
  m='1072330'>say.</span> <span m='1073032'>Yeah.</span> </p><p><span
  m='1073474'>AUDIENCE: The</span> <span m='1073916'>tree has</span> <span
  m='1074358'>to contain</span> <span m='1074800'>all</span> <span
  m='1075242'>possible--</span> </p><p><span m='1076130'>PROFESSOR:
  Because</span> <span m='1076290'>the</span> <span m='1076360'>tree</span>
  <span m='1076570'>has</span> <span m='1076770'>to</span> <span
  m='1076880'>contain</span> <span m='1077220'>all</span> <span
  m='1077350'>possible--</span> <span m='1079050'>answers,</span> <span
  m='1079570'>let's</span> <span m='1079770'>say.</span> <span
  m='1080110'>Yeah,</span> <span m='1081260'>exactly.</span> <span
  m='1082640'>I</span> <span m='1082710'>think</span> <span
  m='1082950'>that's</span> <span m='1083820'>worth</span> <span
  m='1083990'>a</span> <span m='1084130'>pillow.</span> <span m='1085570'>See
  if</span> <span m='1085910'>I can</span> <span m='1086250'>do this--</span>
  <span m='1087790'>oh!</span> <span m='1088880'>Ouch.</span> <span
  m='1090010'>I</span> <span m='1090210'>knew it</span> <span m='1090430'>was
  only</span> <span m='1090610'>a</span> <span m='1090640'>matter</span> <span
  m='1090850'>of</span> <span m='1090940'>time.</span> <span
  m='1092090'>Sorry.</span> <span m='1094190'>I'll</span> <span m='1094420'>pay
  you</span> <span m='1094640'>later.</span> <span m='1096800'>Damages.</span>
  <span m='1100870'>At least</span> <span m='1101080'>I didn't</span> <span
  m='1101390'>hit a</span> <span m='1101450'>laptop</span> <span
  m='1101950'>or</span> <span m='1102050'>something.</span> </p><p><span
  m='1106330'>All</span> <span m='1106420'>right,</span> <span
  m='1106920'>so</span> <span m='1107550'>decision</span> <span
  m='1107950'>tree</span> <span m='1112620'>is</span> <span
  m='1112910'>binary--</span> <span m='1114090'>that</span> <span
  m='1114500'>was the</span> <span m='1114700'>first</span> <span
  m='1115000'>thing--</span> <span m='1116330'>and</span> <span
  m='1117390'>it</span> <span m='1117530'>must</span> <span
  m='1117850'>have</span> <span m='1121200'>at</span> <span
  m='1121350'>least</span> <span m='1122010'>n</span> <span
  m='1122450'>leaves,</span> <span m='1126690'>one</span> <span
  m='1127090'>for</span> <span m='1127260'>each</span> <span
  m='1127470'>answer.</span> <span m='1134330'>At</span> <span
  m='1134470'>least.</span> <span m='1135310'>Now,</span> <span
  m='1136505'>at</span> <span m='1136820'>the</span> <span
  m='1136930'>leaf</span> <span m='1137270'>you</span> <span
  m='1137420'>have</span> <span m='1137670'>to</span> <span
  m='1137790'>know</span> <span m='1137940'>what</span> <span
  m='1138060'>the</span> <span m='1138190'>answer</span> <span
  m='1138550'>is,</span> <span m='1138910'>but</span> <span
  m='1139050'>there</span> <span m='1139150'>may</span> <span
  m='1139300'>be</span> <span m='1139420'>many</span> <span
  m='1139740'>leaves</span> <span m='1140010'>that</span> <span
  m='1140070'>have</span> <span m='1140270'>the</span> <span
  m='1140350'>same</span> <span m='1140660'>answer.</span> <span
  m='1141550'>That's</span> <span m='1142420'>possible.</span> <span
  m='1143430'>And</span> <span m='1143680'>indeed</span> <span
  m='1143920'>that</span> <span m='1144100'>will</span> <span
  m='1144240'>happen</span> <span m='1144770'>not for</span> <span
  m='1145090'>binary</span> <span m='1145510'>search</span> <span
  m='1145830'>but</span> <span m='1146150'>typical</span> <span
  m='1146540'>algorithm.</span> </p><p><span m='1147630'>There's</span> <span
  m='1147790'>multiple</span> <span m='1148340'>paths</span> <span
  m='1148780'>to</span> <span m='1148880'>get</span> <span
  m='1149070'>the</span> <span m='1149220'>same</span> <span
  m='1149470'>answer,</span> <span m='1150960'>so</span> <span
  m='1151190'>there</span> <span m='1151310'>may</span> <span
  m='1151470'>be</span> <span m='1151620'>more</span> <span
  m='1151990'>leaves</span> <span m='1152470'>than</span> <span
  m='1152840'>n.</span> <span m='1153990'>And</span> <span m='1154160'>in</span>
  <span m='1154230'>fact,</span> <span m='1156110'>if</span> <span
  m='1156260'>you</span> <span m='1156370'>want</span> <span
  m='1156500'>to</span> <span m='1156540'>know</span> <span
  m='1156670'>this</span> <span m='1156900'>kind</span> <span
  m='1157090'>of</span> <span m='1157210'>thing,</span> <span
  m='1157470'>where</span> <span m='1157670'>x</span> <span
  m='1157930'>fits</span> <span m='1158950'>in</span> <span
  m='1159150'>this</span> <span m='1159360'>perspective,</span> <span
  m='1160090'>there's</span> <span m='1160270'>n</span> <span
  m='1160490'>plus</span> <span m='1160680'>1</span> <span
  m='1160900'>answers.</span> <span m='1161790'>If you</span> <span
  m='1161900'>want</span> <span m='1162070'>to</span> <span
  m='1162120'>know</span> <span m='1162300'>is</span> <span
  m='1162420'>it</span> <span m='1162530'>equal</span> <span
  m='1163030'>or</span> <span m='1163100'>is</span> <span m='1163190'>it</span>
  <span m='1163310'>strictly</span> <span m='1163690'>between</span> <span
  m='1164100'>two</span> <span m='1164230'>things</span> <span
  m='1164530'>there's</span> <span m='1164720'>2n</span> <span
  m='1165120'>plus</span> <span m='1165370'>1</span> <span
  m='1165560'>answers.</span> <span m='1166370'>But</span> <span
  m='1166510'>in</span> <span m='1166610'>all</span> <span
  m='1166770'>cases,</span> <span m='1167370'>there's</span> <span
  m='1167470'>at</span> <span m='1167570'>least</span> <span
  m='1167960'>n</span> <span m='1168220'>answers</span> <span
  m='1168860'>and</span> <span m='1168960'>that's</span> <span
  m='1169160'>all</span> <span m='1169310'>I</span> <span
  m='1169380'>need.</span> </p><p><span m='1170860'>In</span> <span
  m='1170960'>particular</span> <span m='1171490'>there's--</span> <span
  m='1172480'>say</span> <span m='1172720'>x</span> <span
  m='1173190'>exactly</span> <span m='1173710'>matches</span> <span
  m='1174770'>one</span> <span m='1174990'>of</span> <span
  m='1175090'>the</span> <span m='1175190'>given</span> <span
  m='1175470'>items--</span> <span m='1175840'>there's</span> <span
  m='1176010'>n</span> <span m='1176200'>items--</span> <span
  m='1177030'>so</span> <span m='1177190'>you</span> <span
  m='1177260'>need</span> <span m='1177470'>to</span> <span
  m='1177550'>have</span> <span m='1177750'>at</span> <span
  m='1177830'>least</span> <span m='1178150'>n</span> <span
  m='1178330'>leaves.</span> <span m='1180860'>Maybe</span> <span
  m='1181160'>have</span> <span m='1181230'>more,</span> <span
  m='1181580'>I</span> <span m='1181610'>don't</span> <span
  m='1181780'>care.</span> <span m='1182700'>But it</span> <span
  m='1182810'>I</span> <span m='1182870'>have</span> <span m='1183070'>a</span>
  <span m='1183150'>binary</span> <span m='1183570'>tree</span> <span
  m='1183860'>with</span> <span m='1184040'>at</span> <span
  m='1184120'>least</span> <span m='1184380'>n</span> <span
  m='1184520'>leaves,</span> <span m='1185590'>the</span> <span
  m='1185680'>height</span> <span m='1186050'>has</span> <span
  m='1186330'>to</span> <span m='1186430'>be</span> <span m='1186590'>at</span>
  <span m='1186680'>least</span> <span m='1186960'>lg</span> <span
  m='1187200'>n.</span> <span m='1195360'>We're</span> <span
  m='1195510'>done.</span> <span m='1196160'>The</span> <span
  m='1196240'>height</span> <span m='1196580'>is</span> <span
  m='1196870'>the</span> <span m='1196970'>worst-case</span> <span
  m='1197370'>running</span> <span m='1197600'>time.</span> </p><p><span
  m='1199790'>Super,</span> <span m='1201070'>super</span> <span
  m='1201460'>easy</span> <span m='1201750'>proof.</span> <span
  m='1204540'>So</span> <span m='1204750'>easy,</span> <span
  m='1205290'>it's</span> <span m='1205420'>never</span> <span
  m='1205660'>been</span> <span m='1205800'>taught</span> <span
  m='1206130'>in</span> <span m='1206620'>006</span> <span
  m='1206966'>before.</span> <span m='1207660'>But I</span> <span
  m='1207730'>think</span> <span m='1207890'>it's</span> <span
  m='1208020'>a</span> <span m='1208060'>good</span> <span
  m='1208210'>warm</span> <span m='1208480'>up</span> <span
  m='1208720'>for</span> <span m='1208930'>the</span> <span
  m='1209030'>next</span> <span m='1209290'>one</span> <span m='1210660'>which
  is</span> <span m='1210870'>sorting.</span> <span m='1212150'>Sorting</span>
  <span m='1212620'>is</span> <span m='1213570'>really</span> <span
  m='1213830'>the</span> <span m='1213970'>same</span> <span
  m='1214230'>thing.</span> <span m='1215630'>It's</span> <span
  m='1215730'>not</span> <span m='1215860'>going</span> <span
  m='1215960'>to</span> <span m='1216000'>be</span> <span m='1216130'>any</span>
  <span m='1216280'>harder</span> <span m='1218130'>except</span> <span
  m='1218610'>that</span> <span m='1220605'>it's</span> <span
  m='1220900'>a</span> <span m='1220950'>little</span> <span
  m='1221120'>more</span> <span m='1221280'>math</span> <span
  m='1223110'>but</span> <span m='1223250'>really</span> <span
  m='1223480'>not</span> <span m='1223680'>much</span> <span
  m='1223900'>more.</span> </p><p><span m='1227510'>So</span> <span
  m='1227680'>now</span> <span m='1227950'>we</span> <span
  m='1228070'>know--</span> <span m='1229290'>we</span> <span
  m='1229420'>just</span> <span m='1229630'>proved</span> <span
  m='1230060'>two</span> <span m='1230830'>useful</span> <span
  m='1231320'>facts--</span> <span m='1231730'>one</span> <span
  m='1231930'>is</span> <span m='1232030'>that</span> <span
  m='1232130'>binary</span> <span m='1232490'>search</span> <span
  m='1232740'>is</span> <span m='1232850'>optimal</span> <span
  m='1233900'>in</span> <span m='1234040'>a</span> <span
  m='1234080'>comparison</span> <span m='1234560'>model,</span> <span
  m='1235200'>the</span> <span m='1235290'>other is</span> <span
  m='1235560'>that</span> <span m='1235700'>binary</span> <span
  m='1236030'>search</span> <span m='1236430'>trees</span> <span
  m='1237270'>are</span> <span m='1237590'>actually</span> <span
  m='1237970'>a</span> <span m='1238030'>good</span> <span
  m='1238350'>way</span> <span m='1238570'>to</span> <span
  m='1238700'>solve</span> <span m='1239010'>a</span> <span
  m='1239070'>problem.</span> <span m='1240160'>If</span> <span
  m='1240340'>your</span> <span m='1240560'>goal</span> <span
  m='1240890'>is</span> <span m='1240990'>to</span> <span
  m='1241090'>solve</span> <span m='1241360'>search</span> <span
  m='1241690'>and</span> <span m='1241770'>all</span> <span
  m='1242020'>you're</span> <span m='1242140'>allowed</span> <span
  m='1242380'>to</span> <span m='1242480'>do</span> <span m='1242620'>is</span>
  <span m='1242770'>comparisons,</span> <span m='1244210'>then</span> <span
  m='1244370'>you</span> <span m='1244490'>need</span> <span
  m='1244700'>lg</span> <span m='1244950'>n</span> <span
  m='1245090'>time.</span> <span m='1246270'>And</span> <span
  m='1246450'>so</span> <span m='1246610'>the</span> <span
  m='1246890'>search</span> <span m='1247380'>or</span> <span
  m='1248210'>next</span> <span m='1248460'>larger</span> <span
  m='1248800'>or</span> <span m='1249140'>next</span> <span
  m='1249490'>smaller,</span> <span m='1250440'>predecessor,</span> <span
  m='1251030'>successor,</span> <span m='1251840'>in</span> <span
  m='1251960'>binary</span> <span m='1252240'>search</span> <span
  m='1252450'>trees</span> <span m='1252970'>need</span> <span
  m='1253380'>to</span> <span m='1253510'>take</span> <span
  m='1253860'>at</span> <span m='1253940'>least</span> <span m='1254240'>lg
  n</span> <span m='1254660'>time.</span> <span m='1255870'>No</span> <span
  m='1255960'>matter</span> <span m='1256190'>how</span> <span
  m='1256450'>you</span> <span m='1256630'>do</span> <span
  m='1256790'>it,</span> <span m='1256880'>even</span> <span
  m='1257070'>if</span> <span m='1257200'>you</span> <span
  m='1257280'>don't</span> <span m='1257580'>use</span> <span
  m='1257860'>a</span> <span m='1257930'>tree.</span> </p><p><span
  m='1259190'>So</span> <span m='1259340'>this</span> <span
  m='1259620'>justifies</span> <span m='1260320'>why</span> <span
  m='1260950'>binary</span> <span m='1261250'>search trees</span> <span
  m='1261680'>are</span> <span m='1261800'>interesting,</span> <span
  m='1262350'>because</span> <span m='1262530'>again</span> <span
  m='1262660'>the</span> <span m='1262750'>comparison</span> <span
  m='1263270'>model,</span> <span m='1263900'>that's</span> <span
  m='1264160'>the</span> <span m='1264260'>best</span> <span
  m='1264580'>you</span> <span m='1264720'>can</span> <span
  m='1264860'>hope</span> <span m='1265140'>to</span> <span
  m='1265260'>do.</span> <span m='1267750'>So</span> <span
  m='1267990'>that's</span> <span m='1268450'>comforting.</span> <span
  m='1269070'>That's</span> <span m='1269200'>why</span> <span
  m='1269320'>I</span> <span m='1269350'>like</span> <span
  m='1269570'>lower</span> <span m='1269770'>bounds</span> <span
  m='1270670'>and</span> <span m='1271900'>theoretical</span> <span
  m='1272350'>computer</span> <span m='1272630'>science</span> <span
  m='1272900'>in</span> <span m='1272960'>general</span> <span
  m='1273280'>because</span> <span m='1273440'>you know</span> <span
  m='1273710'>when</span> <span m='1273980'>you're</span> <span
  m='1274100'>done,</span> <span m='1274830'>at</span> <span
  m='1274960'>least</span> <span m='1275430'>in</span> <span
  m='1275560'>a</span> <span m='1275590'>given</span> <span
  m='1275880'>model.</span> <span m='1276600'>Whenever--</span> <span
  m='1277410'>we're</span> <span m='1277510'>never</span> <span
  m='1277700'>actually</span> <span m='1278140'>done,</span> <span
  m='1279120'>because</span> <span m='1279250'>we</span> <span
  m='1279350'>can</span> <span m='1279480'>always</span> <span
  m='1279650'>change</span> <span m='1279890'>the</span> <span
  m='1279970'>model.</span> <span m='1282005'>At</span> <span
  m='1282350'>least</span> <span m='1282530'>we</span> <span
  m='1282780'>understand</span> <span m='1282980'>the</span> <span
  m='1283040'>limitations</span> <span m='1283930'>of</span> <span
  m='1283970'>comparisons.</span> </p><p><span m='1284960'>So</span> <span
  m='1285150'>for</span> <span m='1285280'>sorting,</span> <span
  m='1286280'>we</span> <span m='1286330'>claim</span> <span
  m='1286790'>a</span> <span m='1286890'>lower</span> <span
  m='1287150'>bound</span> <span m='1287440'>of</span> <span
  m='1287520'>n</span> <span m='1287660'>lg</span> <span m='1287920'>n.</span>
  <span m='1288988'>You've</span> <span m='1290230'>heard</span> <span
  m='1290450'>n</span> <span m='1290550'>lg n</span> <span m='1290860'>a</span>
  <span m='1290900'>zillion</span> <span m='1291250'>times.</span> <span
  m='1291530'>You</span> <span m='1291620'>probably</span> <span
  m='1291890'>know</span> <span m='1292040'>this</span> <span
  m='1292210'>is</span> <span m='1292310'>true,</span> <span
  m='1292570'>but</span> <span m='1292730'>now</span> <span
  m='1293000'>we</span> <span m='1293150'>actually</span> <span
  m='1293430'>get</span> <span m='1293620'>to prove</span> <span
  m='1295020'>that it's</span> <span m='1295290'>true.</span> <span
  m='1296420'>So</span> <span m='1296750'>we</span> <span
  m='1296860'>just</span> <span m='1297050'>follow</span> <span
  m='1297300'>the</span> <span m='1297410'>same</span> <span
  m='1297750'>strategy.</span> <span m='1299100'>Decision</span> <span
  m='1299480'>tree</span> <span m='1299640'>is</span> <span
  m='1299740'>binary.</span> <span m='1300950'>The</span> <span
  m='1301100'>question</span> <span m='1301410'>is</span> <span
  m='1301490'>how</span> <span m='1301660'>many</span> <span
  m='1301860'>leaves</span> <span m='1302160'>does</span> <span
  m='1302310'>it</span> <span m='1302380'>have to</span> <span
  m='1302700'>have?</span> </p><p><span m='1305240'>So</span> <span
  m='1306270'>for</span> <span m='1308440'>sorting--</span> <span
  m='1309890'>I</span> <span m='1310020'>didn't</span> <span
  m='1310240'>draw</span> <span m='1310450'>up</span> <span
  m='1310790'>an</span> <span m='1310880'>example--</span> <span
  m='1311270'>I'm</span> <span m='1311390'>not</span> <span
  m='1311560'>going</span> <span m='1311660'>to</span> <span
  m='1311730'>draw</span> <span m='1311900'>an</span> <span m='1311970'>example
  of</span> <span m='1312390'>sorting</span> <span m='1312700'>because</span>
  <span m='1312910'>the</span> <span m='1313020'>trees</span> <span
  m='1313550'>get</span> <span m='1313800'>ginormous.</span> <span
  m='1315400'>Right?</span> <span m='1315590'>Because</span> <span
  m='1315750'>of</span> <span m='1316020'>the</span> <span
  m='1316150'>depth</span> <span m='1316690'>is</span> <span
  m='1317000'>n</span> <span m='1317170'>log</span> <span m='1317470'>n,</span>
  <span m='1317800'>the</span> <span m='1317900'>height</span> <span
  m='1318170'>is</span> <span m='1318300'>n</span> <span m='1318400'>log</span>
  <span m='1318680'>n,</span> <span m='1321610'>then</span> <span
  m='1322910'>there's</span> <span m='1323190'>binary</span> <span
  m='1323620'>branching</span> <span m='1324020'>everywhere.</span> <span
  m='1324520'>That's</span> <span m='1324830'>a</span> <span
  m='1324890'>lot</span> <span m='1325430'>of</span> <span
  m='1325490'>nodes.</span> <span m='1326610'>Two</span> <span m='1326930'>to
  the</span> <span m='1327030'>n</span> <span m='1327190'>lg</span> <span
  m='1327450'>n</span> <span m='1327650'>is</span> <span m='1328470'>big.</span>
  <span m='1330030'>More</span> <span m='1330730'>than</span> <span
  m='1330870'>two</span> <span m='1331000'>to the</span> <span
  m='1331210'>n</span> <span m='1331370'>even,</span> <span
  m='1331760'>so</span> <span m='1332970'>it's</span> <span
  m='1333140'>hard</span> <span m='1333330'>to</span> <span
  m='1333390'>draw</span> <span m='1333560'>a</span> <span
  m='1333630'>picture</span> <span m='1334070'>even</span> <span
  m='1334280'>for</span> <span m='1334520'>n</span> <span
  m='1334670'>equals</span> <span m='1334950'>3.</span> <span
  m='1335280'>You</span> <span m='1335380'>can</span> <span
  m='1335550'>do</span> <span m='1335690'>it.</span> <span
  m='1335820'>People</span> <span m='1336070'>have</span> <span
  m='1336150'>done</span> <span m='1336340'>it.</span> <span
  m='1338090'>I</span> <span m='1338170'>don't</span> <span
  m='1338280'>want</span> <span m='1338480'>to.</span> <span
  m='1339020'>I'm</span> <span m='1339200'>lazy.</span> </p><p><span
  m='1340590'>But</span> <span m='1341050'>the</span> <span
  m='1342330'>internal</span> <span m='1342760'>nodes</span> <span
  m='1342980'>look</span> <span m='1343150'>just</span> <span
  m='1343340'>the</span> <span m='1343420'>same.</span> <span
  m='1343680'>You're</span> <span m='1343810'>comparing</span> <span
  m='1344930'>two</span> <span m='1345120'>items,</span> <span m='1345610'>A
  I</span> <span m='1346090'>verses</span> <span m='1346440'>A J.</span> <span
  m='1347810'>I'll</span> <span m='1347940'>just</span> <span
  m='1348560'>draw</span> <span m='1348770'>the</span> <span
  m='1348890'>generic</span> <span m='1349360'>version.</span> <span
  m='1350160'>You</span> <span m='1350250'>have</span> <span m='1351010'>A
  I</span> <span m='1351400'>less</span> <span m='1351650'>than</span> <span
  m='1351870'>A J,</span> <span m='1352840'>question</span> <span
  m='1353250'>mark.</span> <span m='1354080'>And</span> <span
  m='1354280'>then</span> <span m='1354390'>you'll</span> <span
  m='1354510'>have</span> <span m='1354680'>a</span> <span m='1354730'>no</span>
  <span m='1355590'>and</span> <span m='1355840'>a yes.</span> </p><p><span
  m='1356110'>So that's</span> <span m='1356380'>what</span> <span
  m='1356520'>a</span> <span m='1356610'>typical</span> <span
  m='1357040'>comparison</span> <span m='1357530'>looks</span> <span
  m='1357720'>like.</span> <span m='1358320'>Swaps</span> <span
  m='1358840'>don't</span> <span m='1359010'>appear</span> <span
  m='1359390'>here,</span> <span m='1360390'>because</span> <span
  m='1361580'>we're</span> <span m='1361720'>just</span> <span
  m='1362010'>looking</span> <span m='1362230'>at</span> <span
  m='1362330'>the</span> <span m='1362420'>comparisons.</span> <span
  m='1363770'>And</span> <span m='1363930'>then</span> <span
  m='1364110'>when</span> <span m='1364220'>you</span> <span
  m='1364330'>get</span> <span m='1364510'>down</span> <span
  m='1364730'>to</span> <span m='1364920'>a leaf,</span> <span
  m='1365660'>a</span> <span m='1366090'>leaf--</span> <span
  m='1366980'>this</span> <span m='1367150'>is</span> <span
  m='1367270'>the</span> <span m='1367770'>interesting</span> <span
  m='1368220'>part--</span> <span m='1371050'>the leaf</span> <span
  m='1372160'>will</span> <span m='1372330'>look</span> <span
  m='1372540'>like</span> <span m='1372790'>this.</span> <span
  m='1374440'>Well</span> <span m='1375460'>I</span> <span
  m='1375550'>took</span> <span m='1375770'>the</span> <span
  m='1375910'>original</span> <span m='1376180'>A</span> <span
  m='1376450'>5</span> <span m='1377080'>and</span> <span
  m='1377200'>that</span> <span m='1377380'>turned</span> <span
  m='1377570'>out</span> <span m='1377690'>to</span> <span m='1377740'>be</span>
  <span m='1377840'>the</span> <span m='1377910'>smallest</span> <span
  m='1378360'>element.</span> <span m='1379200'>Then--</span> <span
  m='1380070'>maybe</span> <span m='1380350'>I'll</span> <span
  m='1380670'>write</span> <span m='1380820'>it</span> <span
  m='1380920'>this</span> <span m='1381090'>way--</span> <span
  m='1381870'>then</span> <span m='1382740'>I</span> <span
  m='1382880'>have</span> <span m='1383250'>A</span> <span m='1383490'>7,</span>
  <span m='1384740'>that</span> <span m='1384930'>turned</span> <span
  m='1385100'>out</span> <span m='1385240'>to</span> <span m='1385310'>be</span>
  <span m='1385440'>the</span> <span m='1385510'>next</span> <span
  m='1385760'>smallest</span> <span m='1386020'>element,</span> <span
  m='1386350'>then</span> <span m='1387280'>A</span> <span m='1387620'>1</span>
  <span m='1388630'>then</span> <span m='1389240'>A</span> <span
  m='1389460'>0,</span> <span m='1391210'>whatever.</span> </p><p><span
  m='1393020'>Hey,</span> <span m='1393370'>right</span> <span
  m='1393810'>at</span> <span m='1394340'>the</span> <span
  m='1394490'>end,</span> <span m='1394940'>somehow</span> <span
  m='1395410'>you</span> <span m='1395685'>know the</span> <span
  m='1395960'>sorted</span> <span m='1396340'>order</span> <span
  m='1396610'>and</span> <span m='1396680'>you</span> <span
  m='1396780'>can</span> <span m='1396890'>just</span> <span
  m='1397050'>write</span> <span m='1397230'>it</span> <span
  m='1397360'>down.</span> <span m='1398370'>We're</span> <span
  m='1398480'>not</span> <span m='1398660'>charging</span> <span
  m='1399030'>for</span> <span m='1399120'>this.</span> <span
  m='1399320'>We're</span> <span m='1399430'>only</span> <span
  m='1399600'>charging</span> <span m='1399940'>for</span> <span
  m='1400070'>comparisons.</span> <span m='1400620'>So</span> <span
  m='1401280'>however,</span> <span m='1401780'>maybe</span> <span
  m='1402060'>you've</span> <span m='1402110'>done</span> <span
  m='1402930'>swaps,</span> <span m='1403730'>in</span> <span
  m='1403820'>the</span> <span m='1403940'>end</span> <span
  m='1404080'>you</span> <span m='1404180'>know</span> <span
  m='1404440'>what</span> <span m='1404620'>the</span> <span
  m='1404690'>final</span> <span m='1405050'>order</span> <span
  m='1405310'>is</span> <span m='1405930'>and so</span> <span
  m='1406110'>you</span> <span m='1406270'>just</span> <span
  m='1406430'>write</span> <span m='1406610'>it</span> <span
  m='1406700'>down.</span> <span m='1408350'>And</span> <span
  m='1408590'>your</span> <span m='1408750'>goal</span> <span
  m='1409170'>is</span> <span m='1409300'>to</span> <span
  m='1409400'>make</span> <span m='1409610'>enough</span> <span
  m='1409820'>comparisons</span> <span m='1410165'>that</span> <span
  m='1410510'>you</span> <span m='1410630'>figure</span> <span
  m='1410960'>out</span> <span m='1411090'>what</span> <span
  m='1411240'>the</span> <span m='1411310'>sorted</span> <span
  m='1411670'>order</span> <span m='1411940'>is.</span> <span
  m='1412580'>We</span> <span m='1412730'>claim</span> <span
  m='1413610'>the</span> <span m='1413720'>number</span> <span
  m='1413940'>of</span> <span m='1414000'>comparisons</span> <span
  m='1414470'>here</span> <span m='1414600'>has</span> <span
  m='1414810'>to</span> <span m='1414890'>be</span> <span m='1415070'>at</span>
  <span m='1415110'>least</span> <span m='1415330'>n</span> <span m='1415490'>lg
  n.</span> </p><p><span m='1418410'>OK,</span> <span m='1418610'>why?</span>
  <span m='1419210'>Because</span> <span m='1419880'>the</span> <span
  m='1420700'>decision</span> <span m='1421030'>tree is</span> <span
  m='1421250'>binary</span> <span m='1429110'>and</span> <span
  m='1430210'>the</span> <span m='1430300'>number</span> <span
  m='1430550'>of</span> <span m='1430610'>leaves</span> <span
  m='1432650'>has</span> <span m='1432800'>to</span> <span m='1432900'>be</span>
  <span m='1433100'>at</span> <span m='1433190'>least</span> <span
  m='1434240'>the</span> <span m='1434330'>number</span> <span
  m='1434740'>of</span> <span m='1434900'>possible</span> <span
  m='1435350'>answers.</span> <span m='1437070'>Could</span> <span
  m='1437220'>be</span> <span m='1437350'>more</span> <span
  m='1437690'>because</span> <span m='1438040'>each answer</span> <span
  m='1438240'>could</span> <span m='1438680'>appear</span> <span
  m='1438990'>in</span> <span m='1439150'>several</span> <span
  m='1439450'>leaves</span> <span m='1440560'>and</span> <span
  m='1440730'>it</span> <span m='1440810'>probably</span> <span
  m='1441110'>will</span> <span m='1441450'>in a typical</span> <span
  m='1441950'>sorting</span> <span m='1442270'>algorithm.</span> <span
  m='1443800'>And</span> <span m='1443930'>how</span> <span
  m='1444190'>many</span> <span m='1444430'>possible</span> <span
  m='1444890'>answers</span> <span m='1445230'>are</span> <span
  m='1445380'>there?</span> <span m='1448410'>Batter?</span> </p><p><span
  m='1448900'>AUDIENCE: n</span> <span m='1449390'>factorial.</span>
  </p><p><span m='1449720'>PROFESSOR: n</span> <span
  m='1449930'>factorial,</span> <span m='1451620'>number</span> <span
  m='1452010'>of</span> <span m='1452090'>permutations.</span> <span
  m='1452880'>This</span> <span m='1453080'>is</span> <span m='1453200'>a</span>
  <span m='1453280'>permutation</span> <span m='1454640'>of</span> <span
  m='1454760'>the</span> <span m='1454840'>input</span> <span
  m='1455130'>sequence</span> <span m='1455530'>and</span> <span
  m='1455730'>if</span> <span m='1455860'>all</span> <span
  m='1456050'>the</span> <span m='1456190'>items</span> <span
  m='1456730'>you're</span> <span m='1457140'>given</span> <span
  m='1457440'>are</span> <span m='1457540'>distinct,</span> <span
  m='1458200'>there</span> <span m='1458520'>will</span> <span
  m='1458730'>be</span> <span m='1458870'>n</span> <span
  m='1458980'>factorial</span> <span m='1459600'>permutations</span> <span
  m='1460240'>of</span> <span m='1460350'>them.</span> <span
  m='1461890'>So</span> <span m='1462000'>that's</span> <span
  m='1462210'>the</span> <span m='1462310'>worst</span> <span
  m='1462530'>case.</span> <span m='1465350'>So</span> <span
  m='1465630'>n</span> <span m='1465820'>factorial.</span> </p><p><span
  m='1467000'>Now</span> <span m='1467260'>the</span> <span
  m='1467370'>tricky</span> <span m='1467670'>part</span> <span
  m='1467920'>is</span> <span m='1470810'>the</span> <span
  m='1471550'>algebra.</span> <span m='1472870'>Say,</span> <span
  m='1473150'>oh,</span> <span m='1473420'>well</span> <span
  m='1473530'>then</span> <span m='1473700'>the</span> <span
  m='1473760'>height</span> <span m='1474090'>is</span> <span
  m='1474260'>at</span> <span m='1474350'>least</span> <span
  m='1475430'>lg</span> <span m='1475690'>base</span> <span m='1475950'>2</span>
  <span m='1476330'>of</span> <span m='1476490'>n</span> <span
  m='1476610'>factorial--</span> <span m='1477110'>lg</span> <span
  m='1477300'>base</span> <span m='1477540'>2</span> <span
  m='1477760'>because</span> <span m='1478120'>it's</span> <span
  m='1478260'>a</span> <span m='1478310'>binary</span> <span
  m='1478720'>tree.</span> <span m='1481510'>You</span> <span m='1481980'>can
  put a</span> <span m='1482060'>parentheses</span> <span
  m='1482580'>here</span> <span m='1482700'>if</span> <span
  m='1482780'>you</span> <span m='1482890'>want,</span> <span
  m='1483260'>they're not</span> <span m='1483960'>necessary.</span> <span
  m='1486510'>So</span> <span m='1486700'>now</span> <span m='1486870'>I</span>
  <span m='1486940'>want</span> <span m='1487110'>to</span> <span
  m='1487160'>claim</span> <span m='1487400'>that</span> <span
  m='1487540'>this</span> <span m='1487750'>is</span> <span m='1488000'>n</span>
  <span m='1488160'>lg</span> <span m='1488580'>n.</span> <span
  m='1489480'>How</span> <span m='1489660'>do</span> <span m='1489760'>I</span>
  <span m='1489850'>do</span> <span m='1490000'>that?</span> </p><p><span
  m='1493100'>Maybe</span> <span m='1493330'>you</span> <span
  m='1493410'>just</span> <span m='1493610'>know?</span> <span
  m='1496032'>Yeah.</span> </p><p><span m='1496510'>AUDIENCE: We can</span>
  <span m='1496988'>either use</span> <span m='1497466'>Stirling's</span> <span
  m='1497944'>approximation</span> <span m='1498422'>or</span> <span
  m='1498900'>we</span> <span m='1499378'>could</span> <span m='1499856'>write
  it</span> <span m='1500334'>out as a</span> <span m='1500812'>sum</span> <span
  m='1501290'>[INAUDIBLE]</span> </p><p><span m='1503910'>PROFESSOR: Wow,</span>
  <span m='1504370'>cool.</span> <span m='1505150'>All</span> <span
  m='1505190'>right,</span> <span m='1506010'>you</span> <span
  m='1506190'>could</span> <span m='1506440'>either</span> <span
  m='1506690'>use</span> <span m='1506880'>Stirling's</span> <span
  m='1507280'>approximation</span> <span m='1507870'>or</span> <span
  m='1507970'>write it out</span> <span m='1508160'>as</span> <span
  m='1508400'>a</span> <span m='1508460'>sum.</span> <span
  m='1508860'>I've</span> <span m='1508930'>never</span> <span m='1509180'>done
  it</span> <span m='1509350'>with</span> <span m='1509540'>it</span> <span
  m='1509630'>sum.</span> <span m='1509880'>Let's</span> <span
  m='1510060'>do</span> <span m='1510180'>that,</span> <span m='1510530'>that
  sounds</span> <span m='1510730'>like</span> <span m='1510870'>fun.</span>
  <span m='1513120'>So,</span> <span m='1514080'>right?</span> <span
  m='1514800'>I</span> <span m='1514990'>like</span> <span
  m='1515200'>that</span> <span m='1516350'>because</span> <span m='1516630'>you
  know</span> <span m='1516720'>Stirling's--</span> <span
  m='1517210'>it's</span> <span m='1517380'>like</span> <span
  m='1517560'>you've</span> <span m='1517680'>got</span> <span
  m='1517820'>to</span> <span m='1517880'>know</span> <span m='1518090'>Stirling
  and</span> <span m='1518580'>that's</span> <span m='1518800'>kind</span> <span
  m='1518950'>of</span> <span m='1519030'>annoying.</span> <span
  m='1519840'>What if</span> <span m='1520030'>you</span> <span
  m='1520100'>don't</span> <span m='1520290'>know</span> <span
  m='1520410'>Sterling?</span> </p><p><span m='1521700'>But</span> <span
  m='1521820'>we</span> <span m='1521950'>all</span> <span
  m='1522140'>know</span> <span m='1522280'>the</span> <span
  m='1522390'>definition</span> <span m='1522980'>of</span> <span
  m='1523070'>factorial.</span> <span m='1523650'>I</span> <span
  m='1523710'>mean,</span> <span m='1523940'>we</span> <span
  m='1524090'>learned</span> <span m='1524300'>in</span> <span
  m='1524450'>grade</span> <span m='1524710'>school</span> <span
  m='1524940'>just</span> <span m='1525030'>because</span> <span
  m='1525260'>it's</span> <span m='1525420'>fun,</span> <span
  m='1525770'>right?</span> <span m='1526130'>Oh,</span> <span
  m='1526210'>I</span> <span m='1526360'>guess</span> <span
  m='1526610'>we--</span> <span m='1526910'>I</span> <span
  m='1526950'>mean</span> <span m='1527100'>we</span> <span
  m='1527230'>did</span> <span m='1528530'>because</span> <span
  m='1528620'>we're</span> <span m='1528900'>geeks.</span> </p><p><span
  m='1530990'>And</span> <span m='1531190'>then</span> <span
  m='1531300'>we</span> <span m='1531400'>know</span> <span m='1531620'>the
  lg</span> <span m='1532000'>of our</span> <span m='1532080'>product</span>
  <span m='1532840'>is</span> <span m='1534120'>the</span> <span
  m='1534280'>sum</span> <span m='1534600'>of</span> <span
  m='1534680'>the</span> <span m='1534770'>lg's.</span> <span
  m='1535800'>So</span> <span m='1535850'>this</span> <span
  m='1536040'>is</span> <span m='1536180'>lg</span> <span m='1536480'>n</span>
  <span m='1537520'>plus</span> <span m='1537900'>lg</span> <span
  m='1538280'>n</span> <span m='1538370'>minus</span> <span m='1538720'>1</span>
  <span m='1542270'>plus</span> <span m='1542700'>lg</span> <span
  m='1543080'>2</span> <span m='1543540'>plus</span> <span m='1543740'>lg</span>
  <span m='1543990'>1.</span> <span m='1547800'>I</span> <span
  m='1547920'>think</span> <span m='1548250'>at</span> <span
  m='1548390'>this</span> <span m='1548560'>point</span> <span
  m='1548810'>it's</span> <span m='1548940'>easier</span> <span m='1549230'>to
  use</span> <span m='1549520'>summation</span> <span
  m='1550080'>notation,</span> <span m='1550550'>so</span> <span
  m='1550740'>sum</span> <span m='1551100'>of</span> <span m='1551210'>lg</span>
  <span m='1551520'>i.</span> <span m='1552500'>OK</span> <span
  m='1552810'>now</span> <span m='1553090'>we've</span> <span
  m='1553210'>got</span> <span m='1553360'>to</span> <span m='1553620'>do</span>
  <span m='1553820'>sum,</span> <span m='1555456'>this is</span> <span
  m='1555880'>1</span> <span m='1556360'>to</span> <span m='1556600'>n</span>
  <span m='1556860'>I</span> <span m='1556930'>guess.</span> <span
  m='1557950'>Now</span> <span m='1558170'>we</span> <span
  m='1558260'>need</span> <span m='1558460'>to</span> <span
  m='1558570'>know</span> <span m='1558730'>something</span> <span
  m='1559070'>about</span> <span m='1559320'>lg's,</span> <span
  m='1559980'>so</span> <span m='1560150'>it's</span> <span
  m='1560280'>not</span> <span m='1560590'>so</span> <span
  m='1560840'>easy.</span> </p><p><span m='1562730'>It's</span> <span
  m='1562910'>easy</span> <span m='1563250'>to</span> <span
  m='1563340'>show--</span> <span m='1563830'>I</span> <span
  m='1563900'>mean,</span> <span m='1564220'>certainly</span> <span
  m='1564550'>this</span> <span m='1564720'>is</span> <span
  m='1564850'>at</span> <span m='1564970'>most</span> <span m='1566220'>n</span>
  <span m='1566390'>lg</span> <span m='1566630'>n,</span> <span
  m='1567270'>but</span> <span m='1567420'>we</span> <span
  m='1567500'>need</span> <span m='1567640'>show</span> <span
  m='1567840'>that</span> <span m='1567960'>it's</span> <span
  m='1568120'>at</span> <span m='1568250'>least</span> <span m='1569030'>n
  lg</span> <span m='1569350'>n.</span> <span m='1569750'>That's</span> <span
  m='1569960'>a</span> <span m='1570010'>little</span> <span
  m='1570300'>trickier.</span> <span m='1571430'>I</span> <span
  m='1571550'>happen</span> <span m='1571870'>to</span> <span
  m='1572000'>know</span> <span m='1572150'>it's</span> <span
  m='1572300'>true.</span> <span m='1575240'>But</span> <span
  m='1575720'>I'd</span> <span m='1576100'>know</span> <span
  m='1576350'>it</span> <span m='1576450'>even</span> <span
  m='1576720'>in</span> <span m='1576810'>the</span> <span
  m='1576900'>summation</span> <span m='1577400'>form</span> <span
  m='1577630'>because</span> <span m='1577990'>I</span> <span
  m='1578050'>know</span> <span m='1578340'>that</span> <span
  m='1579210'>lg--</span> <span m='1580890'>lg</span> <span
  m='1581180'>looks</span> <span m='1581370'>like</span> <span
  m='1581740'>this</span> <span m='1582170'>basically,</span> <span
  m='1583360'>and</span> <span m='1583570'>so</span> <span m='1584050'>if</span>
  <span m='1584240'>you're</span> <span m='1585020'>adding</span> <span
  m='1585390'>up,</span> <span m='1585800'>you're</span> <span
  m='1585920'>taking</span> <span m='1586150'>the</span> <span
  m='1586260'>area</span> <span m='1586570'>under</span> <span
  m='1586780'>this</span> <span m='1587010'>curve</span> <span
  m='1587300'>right?</span> <span m='1587530'>Oh, look</span> <span
  m='1587860'>at these</span> <span m='1588060'>integrals.</span> <span
  m='1588680'>Oh,</span> <span m='1589110'>integrals.</span> <span
  m='1590250'>Brings</span> <span m='1590470'>back</span> <span
  m='1590700'>memories.</span> <span m='1592010'>This</span> <span
  m='1592150'>is</span> <span m='1592610'>discrete</span> <span
  m='1593110'>math</span> <span m='1593350'>class,</span> <span
  m='1593670'>though,</span> <span m='1595120'>continuous</span> <span
  m='1595490'>stuff.</span> </p><p><span m='1595710'>So</span> <span
  m='1595820'>you're</span> <span m='1595990'>adding</span> <span
  m='1596310'>up</span> <span m='1596430'>all</span> <span
  m='1596610'>these</span> <span m='1596830'>numbers,</span> <span
  m='1597260'>right?</span> <span m='1597430'>This</span> <span
  m='1597600'>is</span> <span m='1597730'>lg</span> <span m='1598090'>i</span>
  <span m='1598800'>over</span> <span m='1599110'>all</span> <span
  m='1599240'>the</span> <span m='1599330'>i's</span> <span
  m='1599880'>and</span> <span m='1600110'>basically</span> <span
  m='1600590'>all</span> <span m='1600820'>of</span> <span
  m='1600910'>them</span> <span m='1601060'>have</span> <span
  m='1601220'>the</span> <span m='1601300'>same</span> <span
  m='1601550'>length.</span> <span m='1602850'>Like</span> <span
  m='1603000'>if</span> <span m='1603150'>you</span> <span
  m='1603290'>look</span> <span m='1603460'>at</span> <span
  m='1603550'>the</span> <span m='1603630'>last</span> <span
  m='1603980'>half,</span> <span m='1605236'>that</span> <span
  m='1605580'>would</span> <span m='1605650'>be</span> <span
  m='1605770'>one</span> <span m='1605930'>way</span> <span
  m='1606040'>to</span> <span m='1606140'>prove it.</span> <span
  m='1607030'>Ah,</span> <span m='1607285'>it's</span> <span
  m='1607540'>fun,</span> <span m='1607810'>haven't</span> <span
  m='1607940'>done</span> <span m='1608130'>summations</span> <span
  m='1608630'>in</span> <span m='1608730'>so</span> <span
  m='1608960'>long.</span> <span m='1611460'>Good</span> <span
  m='1611650'>stuff.</span> <span m='1611990'>[? IS042 ?]</span> <span
  m='1612810'>material</span> <span m='1613730'>but</span> <span
  m='1614150'>applied</span> <span m='1615270'>to</span> <span
  m='1615360'>algorithms</span> <span m='1615950'>and</span> <span
  m='1616020'>in</span> <span m='1616150'>algorithms</span> <span
  m='1616590'>it's</span> <span m='1617080'>fun</span> <span
  m='1617350'>because</span> <span m='1617870'>you</span> <span
  m='1618010'>could</span> <span m='1618150'>throw</span> <span
  m='1618420'>away</span> <span m='1618480'>constant</span> <span
  m='1618840'>factors</span> <span m='1619105'>and</span> <span
  m='1619370'>life</span> <span m='1619580'>is</span> <span
  m='1619770'>good.</span> </p><p><span m='1621690'>We</span> <span
  m='1621840'>don't</span> <span m='1622000'>need</span> <span
  m='1622210'>exact</span> <span m='1622600'>answers</span> <span
  m='1623030'>really.</span> <span m='1623510'>You can</span> <span
  m='1624110'>find</span> <span m='1624370'>an</span> <span
  m='1624470'>exact</span> <span m='1624850'>answer,</span> <span
  m='1625110'>but</span> <span m='1625300'>let's</span> <span
  m='1625490'>say</span> <span m='1625660'>you</span> <span
  m='1625830'>look</span> <span m='1626030'>at</span> <span
  m='1626680'>the</span> <span m='1626790'>last</span> <span
  m='1627140'>half.</span> <span m='1628280'>Those</span> <span
  m='1628600'>are</span> <span m='1628710'>all</span> <span
  m='1629090'>going</span> <span m='1629240'>to</span> <span
  m='1629300'>be</span> <span m='1629430'>basically</span> <span
  m='1629870'>lg</span> <span m='1630150'>n.</span> <span m='1630890'>You</span>
  <span m='1631050'>can</span> <span m='1631180'>prove</span> <span
  m='1631440'>that.</span> </p><p><span m='1632185'>So</span> <span
  m='1632560'>this</span> <span m='1632850'>is</span> <span
  m='1632980'>going</span> <span m='1633100'>to</span> <span
  m='1633150'>be</span> <span m='1633270'>at</span> <span
  m='1633340'>least</span> <span m='1634490'>the</span> <span
  m='1634610'>sum</span> <span m='1635020'>where</span> <span
  m='1635120'>i</span> <span m='1635230'>equals</span> <span
  m='1635660'>n</span> <span m='1635730'>over</span> <span m='1635980'>2</span>
  <span m='1637060'>n</span> <span m='1638792'>of</span> <span
  m='1639225'>lg</span> <span m='1639660'>i.</span> <span
  m='1641550'>Here</span> <span m='1641790'>I</span> <span
  m='1641840'>just</span> <span m='1642060'>throw</span> <span
  m='1642300'>away</span> <span m='1642630'>the</span> <span
  m='1642750'>first</span> <span m='1643490'>out</span> <span m='1643630'>of
  our</span> <span m='1643810'>two</span> <span m='1643960'>terms.</span> <span
  m='1644710'>And</span> <span m='1644880'>this</span> <span
  m='1645100'>is</span> <span m='1645140'>going</span> <span
  m='1645280'>to</span> <span m='1645330'>be at</span> <span
  m='1645780'>least</span> <span m='1646390'>sum</span> <span
  m='1647390'>i</span> <span m='1647550'>equals</span> <span
  m='1647810'>n</span> <span m='1647960'>over</span> <span m='1648150'>2</span>
  <span m='1648660'>to</span> <span m='1649080'>n</span> <span
  m='1649890'>of</span> <span m='1650120'>lg</span> <span m='1651110'>n</span>
  <span m='1651250'>over</span> <span m='1651430'>2.</span> <span
  m='1654650'>Each</span> <span m='1654890'>of</span> <span
  m='1654950'>these</span> <span m='1655140'>terms</span> <span
  m='1655440'>is</span> <span m='1655550'>bigger</span> <span
  m='1655860'>than</span> <span m='1656000'>lg</span> <span m='1656270'>n</span>
  <span m='1656350'>over</span> <span m='1656550'>2</span> <span
  m='1656740'>so</span> <span m='1656900'>if</span> <span m='1657010'>I</span>
  <span m='1657070'>just</span> <span m='1657610'>say,</span> <span
  m='1657850'>well,</span> <span m='1658090'>they're</span> <span
  m='1658240'>all</span> <span m='1658980'>lg</span> <span m='1659270'>n</span>
  <span m='1659360'>over</span> <span m='1659510'>2</span> <span
  m='1659660'>that's</span> <span m='1659890'>going</span> <span
  m='1659990'>to</span> <span m='1660040'>give</span> <span
  m='1660170'>me</span> <span m='1660270'>something</span> <span
  m='1660580'>even</span> <span m='1660800'>smaller.</span> <span
  m='1662060'>Now</span> <span m='1662170'>the</span> <span
  m='1662280'>lg</span> <span m='1662500'>n</span> <span m='1662600'>over</span>
  <span m='1662760'>2,</span> <span m='1662960'>that's</span> <span
  m='1663200'>just</span> <span m='1663370'>lg</span> <span m='1663600'>n</span>
  <span m='1663690'>minus</span> <span m='1663970'>1.</span> </p><p><span
  m='1668760'>I love</span> <span m='1668990'>this.</span> <span
  m='1669380'>It's</span> <span m='1669580'>going</span> <span
  m='1669690'>to</span> <span m='1669730'>give</span> <span
  m='1669900'>the</span> <span m='1670000'>right</span> <span
  m='1670180'>answer</span> <span m='1670540'>even.</span> <span
  m='1671930'>So</span> <span m='1672010'>that's</span> <span
  m='1672130'>an</span> <span m='1672360'>equals</span> <span
  m='1674100'>and</span> <span m='1674300'>so</span> <span
  m='1674410'>this</span> <span m='1674840'>equals</span> <span
  m='1676150'>n</span> <span m='1676410'>lg</span> <span m='1676740'>n</span>
  <span m='1677630'>minus</span> <span m='1678000'>n.</span> <span
  m='1678770'>That</span> <span m='1679070'>summation</span> <span
  m='1679350'>I</span> <span m='1679630'>can</span> <span m='1679760'>do.</span>
  <span m='1680950'>All</span> <span m='1681080'>the</span> <span
  m='1681180'>terms</span> <span m='1681460'>are</span> <span
  m='1681500'>the</span> <span m='1681620'>same,</span> <span
  m='1682470'>sorry</span> <span m='1682700'>n</span> <span
  m='1682910'>over</span> <span m='1683160'>2.</span> <span
  m='1685070'>Not</span> <span m='1685280'>quite</span> <span
  m='1685790'>what</span> <span m='1686020'>I</span> <span
  m='1686060'>wanted.</span> <span m='1686770'>Close</span> <span
  m='1687010'>enough.</span> </p><p><span m='1690390'>Sorry</span> <span
  m='1690490'>there</span> <span m='1690620'>is</span> <span
  m='1690730'>only</span> <span m='1690940'>n</span> <span
  m='1691060'>over</span> <span m='1691220'>2</span> <span
  m='1691400'>terms</span> <span m='1691760'>here,</span> <span
  m='1692340'>ignoring</span> <span m='1692820'>floors</span> <span
  m='1693100'>and</span> <span m='1693210'>ceilings.</span> <span
  m='1694580'>So</span> <span m='1694790'>I</span> <span m='1694950'>get</span>
  <span m='1696192'>n</span> <span m='1696640'>lg</span> <span
  m='1696890'>n</span> <span m='1697430'>divided</span> <span
  m='1697790'>by</span> <span m='1697920'>2.</span> <span
  m='1698310'>This</span> <span m='1698540'>is</span> <span
  m='1698670'>omega</span> <span m='1699870'>n</span> <span
  m='1700050'>lg</span> <span m='1700305'>n</span> <span
  m='1701480'>because</span> <span m='1701720'>this</span> <span
  m='1701870'>n</span> <span m='1702140'>term</span> <span m='1702690'>is</span>
  <span m='1702880'>smaller</span> <span m='1703370'>than</span> <span
  m='1703680'>n lg</span> <span m='1704050'>n.</span> <span
  m='1704720'>So</span> <span m='1704920'>this</span> <span
  m='1705110'>one</span> <span m='1705260'>dominates.</span> <span
  m='1706020'>Doesn't</span> <span m='1706130'>matter</span> <span
  m='1706890'>if this</span> <span m='1707010'>one's</span> <span
  m='1707190'>negative,</span> <span m='1707640'>because</span> <span
  m='1707830'>it's</span> <span m='1707980'>smaller.</span> <span
  m='1709550'>This</span> <span m='1709680'>is</span> <span
  m='1709800'>omega</span> <span m='1710140'>n</span> <span
  m='1710290'>lg</span> <span m='1710510'>n.</span> <span
  m='1711120'>We're</span> <span m='1711270'>done.</span> <span
  m='1711670'>Sorting</span> <span m='1712060'>is</span> <span
  m='1712325'>omega</span> <span m='1712590'>n lg</span> <span
  m='1712930'>n.</span> <span m='1713890'>Very</span> <span
  m='1714100'>easy.</span> </p><p><span m='1714440'>Who</span> <span
  m='1714835'>said</span> <span m='1715230'>summations?</span> <span
  m='1717090'>All right.</span> <span m='1717660'>Why don't</span> <span
  m='1717910'>you</span> <span m='1718050'>come</span> <span
  m='1718240'>collect</span> <span m='1718515'>a pillow,</span> <span
  m='1718790'>I'm not</span> <span m='1719290'>going to</span> <span
  m='1719695'>throw that</span> <span m='1720100'>far.</span> <span
  m='1720910'>Afterwards.</span> <span m='1722510'>OK.</span> </p><p><span
  m='1723440'>That's</span> <span m='1723770'>one</span> <span
  m='1723930'>way</span> <span m='1724030'>to</span> <span m='1724160'>do</span>
  <span m='1724330'>it.</span> <span m='1724620'>Another</span> <span
  m='1724860'>way</span> <span m='1724980'>to</span> <span m='1725090'>do</span>
  <span m='1725220'>it,</span> <span m='1725300'>if</span> <span
  m='1725430'>you</span> <span m='1725530'>happen</span> <span
  m='1725860'>to</span> <span m='1725960'>know</span> <span
  m='1726110'>Stirling's</span> <span m='1726920'>formula</span> <span
  m='1728360'>for</span> <span m='1728800'>n</span> <span
  m='1728960'>factorial--</span> <span m='1729810'>n</span> <span
  m='1730290'>factorial is</span> <span m='1730790'>about</span> <span
  m='1731230'>n</span> <span m='1731410'>over</span> <span m='1731660'>e</span>
  <span m='1731760'>to</span> <span m='1731850'>the</span> <span
  m='1732030'>n</span> <span m='1733730'>times</span> <span
  m='1734520'>square</span> <span m='1734820'>root</span> <span
  m='1734940'>of</span> <span m='1735070'>2</span> <span m='1735490'>pi</span>
  <span m='1735970'>n.</span> <span m='1736560'>Right?</span> <span
  m='1737740'>If</span> <span m='1737900'>you</span> <span m='1738010'>do</span>
  <span m='1739460'>Taylor</span> <span m='1739800'>series</span> <span
  m='1740170'>approximation</span> <span m='1740485'>of</span> <span
  m='1740800'>n</span> <span m='1740890'>factorial,</span> <span
  m='1741330'>the</span> <span m='1741410'>first</span> <span
  m='1741780'>term,</span> <span m='1742520'>which</span> <span
  m='1742650'>is</span> <span m='1742850'>the</span> <span
  m='1743010'>most</span> <span m='1743250'>important</span> <span
  m='1743580'>term</span> <span m='1743730'>for</span> <span
  m='1743880'>us</span> <span m='1744000'>because</span> <span
  m='1744160'>as</span> <span m='1744320'>the</span> <span
  m='1744480'>asymptotically</span> <span m='1745160'>dominating</span> <span
  m='1745670'>term</span> <span m='1746430'>is</span> <span
  m='1746630'>square</span> <span m='1746920'>root</span> <span
  m='1747000'>of</span> <span m='1747110'>2</span> <span m='1747260'>pi</span>
  <span m='1747530'>n</span> <span m='1747840'>times</span> <span
  m='1748240'>n</span> <span m='1748390'>over</span> <span m='1748710'>e</span>
  <span m='1748950'>to</span> <span m='1749090'>the</span> <span
  m='1749190'>n.</span> <span m='1749390'>Hope</span> <span m='1749600'>I</span>
  <span m='1749640'>got</span> <span m='1749850'>that</span> <span
  m='1750000'>right.</span> <span m='1752200'>Yeah,</span> <span
  m='1753255'>clearly</span> <span m='1753690'>I've</span> <span
  m='1753800'>been</span> <span m='1753920'>studying.</span> </p><p><span
  m='1755600'>You</span> <span m='1755710'>take</span> <span
  m='1755910'>lg's</span> <span m='1756290'>of</span> <span
  m='1756370'>that</span> <span m='1756630'>and</span> <span
  m='1756990'>you</span> <span m='1757190'>do</span> <span
  m='1757320'>the</span> <span m='1757430'>same</span> <span
  m='1757700'>thing</span> <span m='1757970'>of</span> <span
  m='1758090'>lg</span> <span m='1758490'>of</span> <span m='1758630'>a</span>
  <span m='1758700'>product</span> <span m='1759180'>is</span> <span
  m='1759370'>sum</span> <span m='1759590'>of</span> <span
  m='1759650'>the</span> <span m='1759730'>lg's</span> <span
  m='1760670'>and</span> <span m='1760840'>you</span> <span
  m='1761010'>end</span> <span m='1761180'>up</span> <span
  m='1761440'>with--</span> <span m='1762190'>the</span> <span
  m='1762300'>right</span> <span m='1762500'>answer</span> <span
  m='1762990'>is</span> <span m='1763150'>actually</span> <span
  m='1764070'>n</span> <span m='1764270'>lg</span> <span m='1764625'>n</span>
  <span m='1765840'>minus</span> <span m='1766340'>order</span> <span
  m='1766610'>n.</span> <span m='1768150'>So</span> <span m='1768330'>I</span>
  <span m='1768430'>was</span> <span m='1768600'>off</span> <span m='1768820'>by
  a</span> <span m='1768960'>factor</span> <span m='1769300'>of</span> <span
  m='1769390'>2</span> <span m='1769590'>here.</span> <span
  m='1771980'>The</span> <span m='1772820'>linear</span> <span
  m='1773080'>term--</span> <span m='1773510'>it</span> <span
  m='1773680'>does</span> <span m='1773900'>appear,</span> <span
  m='1774820'>but</span> <span m='1774970'>it's</span> <span
  m='1775120'>smaller</span> <span m='1775510'>than</span> <span
  m='1775650'>this</span> <span m='1775910'>and</span> <span
  m='1776030'>this</span> <span m='1776220'>is</span> <span
  m='1776350'>also</span> <span m='1776810'>omega</span> <span m='1777010'>n
  lg</span> <span m='1777300'>n.</span> <span m='1778260'>If</span> <span
  m='1778590'>you</span> <span m='1778670'>don't</span> <span
  m='1778840'>care</span> <span m='1778970'>about</span> <span
  m='1779180'>constants,</span> <span m='1779460'>it</span> <span
  m='1779740'>doesn't</span> <span m='1779930'>matter.</span> <span
  m='1780250'>If</span> <span m='1780340'>you</span> <span
  m='1780430'>care</span> <span m='1780610'>about</span> <span
  m='1780780'>constants,</span> <span m='1781130'>the</span> <span
  m='1781220'>constant</span> <span m='1781580'>is</span> <span
  m='1781730'>1.</span> </p><p><span m='1783040'>Kind  of</span> <span
  m='1783150'>nice.</span> <span m='1784350'>Easy</span> <span
  m='1784650'>to</span> <span m='1784720'>prove</span> <span
  m='1785010'>a</span> <span m='1785090'>one</span> <span
  m='1785470'>half.</span> <span m='1786360'>And</span> <span
  m='1786540'>if</span> <span m='1786640'>you</span> <span
  m='1786750'>look</span> <span m='1786920'>at</span> <span
  m='1787010'>the</span> <span m='1787100'>lecture</span> <span
  m='1787370'>notes</span> <span m='1787650'>it</span> <span
  m='1788160'>works</span> <span m='1788440'>through</span> <span
  m='1788580'>that.</span> <span m='1789620'>But</span> <span
  m='1789770'>I</span> <span m='1789850'>think</span> <span
  m='1790560'>we've</span> <span m='1790680'>seen</span> <span
  m='1790870'>enough</span> <span m='1791790'>of</span> <span
  m='1791900'>that</span> <span m='1792070'>lower</span> <span
  m='1792270'>bound.</span> <span m='1793300'>And</span> <span
  m='1793420'>that's</span> <span m='1793990'>the</span> <span
  m='1794110'>end</span> <span m='1794230'>of</span> <span
  m='1794320'>our</span> <span m='1794540'>lower</span> <span
  m='1794790'>bound</span> <span m='1795070'>topic.</span> <span
  m='1795580'>Any</span> <span m='1795730'>questions</span> <span
  m='1796300'>on</span> <span m='1796440'>that?</span> </p><p><span
  m='1797520'>So</span> <span m='1797610'>it's</span> <span
  m='1797900'>really</span> <span m='1798340'>easy.</span> <span
  m='1799580'>Once</span> <span m='1799840'>you</span> <span
  m='1799940'>set</span> <span m='1800150'>up</span> <span
  m='1800350'>this</span> <span m='1800540'>framework</span> <span
  m='1801160'>of</span> <span m='1802760'>comparison</span> <span
  m='1803300'>trees</span> <span m='1804950'>and</span> <span
  m='1805290'>now</span> <span m='1805590'>it</span> <span
  m='1806130'>becomes</span> <span m='1806450'>just</span> <span
  m='1806630'>a</span> <span m='1806670'>question</span> <span
  m='1806980'>of</span> <span m='1807010'>the</span> <span
  m='1807100'>height</span> <span m='1807380'>of</span> <span
  m='1807490'>a</span> <span m='1807560'>comparison</span> <span
  m='1808080'>tree.</span> <span m='1809810'>Comparison trees</span> <span
  m='1810190'>are</span> <span m='1810240'>binary.</span> <span
  m='1811180'>Just</span> <span m='1811370'>count</span> <span
  m='1811700'>how</span> <span m='1811880'>many</span> <span
  m='1812090'>leaves</span> <span m='1812360'>do</span> <span
  m='1812430'>you</span> <span m='1812480'>have</span> <span
  m='1812750'>to</span> <span m='1812850'>have,</span> <span
  m='1813140'>take</span> <span m='1813360'>lg</span> <span
  m='1813670'>of</span> <span m='1813750'>that</span> <span m='1813980'>and
  you</span> <span m='1814060'>get</span> <span m='1814170'>a</span> <span
  m='1814210'>lower</span> <span m='1814530'>bound</span> <span
  m='1815315'>of</span> <span m='1815700'>that.</span> </p><p><span
  m='1816576'>AUDIENCE: What</span> <span m='1817072'>is</span> <span
  m='1817568'>meant</span> <span m='1818064'>by</span> <span
  m='1819552'>n</span> <span m='1820048'>preprocessed</span> <span
  m='1820544'>items?</span> </p><p><span m='1821540'>PROFESSOR: Oh,</span> <span
  m='1821930'>yeah.</span> <span m='1822790'>For</span> <span
  m='1822990'>searching</span> <span m='1823940'>I</span> <span
  m='1824040'>was</span> <span m='1824300'>trying</span> <span
  m='1824530'>to</span> <span m='1824590'>be</span> <span
  m='1824700'>careful</span> <span m='1825060'>and</span> <span
  m='1825160'>say,</span> <span m='1825380'>well,</span> <span
  m='1825710'>if</span> <span m='1825890'>I</span> <span m='1825950'>have</span>
  <span m='1826140'>n</span> <span m='1826546'>preprocessed</span> <span
  m='1827650'>items.</span> </p><p><span m='1827950'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='1829900'>PROFESSOR: It</span> <span
  m='1830040'>means</span> <span m='1830270'>you</span> <span
  m='1830390'>can</span> <span m='1830520'>do</span> <span
  m='1830660'>whatever</span> <span m='1831110'>the</span> <span
  m='1831220'>heck</span> <span m='1831440'>you</span> <span
  m='1831560'>want.</span> <span m='1832510'>So</span> <span
  m='1832980'>here's</span> <span m='1833270'>the</span> <span
  m='1833350'>model.</span> <span m='1833900'>I</span> <span
  m='1834000'>give</span> <span m='1834170'>you</span> <span
  m='1834280'>n</span> <span m='1834410'>items.</span> <span
  m='1834890'>You</span> <span m='1835000'>can do</span> <span
  m='1835740'>all</span> <span m='1836390'>pairwise</span> <span
  m='1836810'>comparisons</span> <span m='1837360'>between</span> <span
  m='1837560'>those</span> <span m='1837710'>items</span> <span
  m='1838120'>for</span> <span m='1838280'>free</span> <span
  m='1839830'>and</span> <span m='1840100'>then</span> <span
  m='1840340'>I</span> <span m='1840390'>give</span> <span
  m='1840600'>you</span> <span m='1840720'>a</span> <span m='1840750'>new</span>
  <span m='1840920'>item</span> <span m='1841180'>and</span> <span
  m='1841280'>then</span> <span m='1841410'>I</span> <span
  m='1841480'>start</span> <span m='1841750'>charging</span> <span
  m='1842130'>for</span> <span m='1842250'>comparisons.</span> <span
  m='1843260'>So</span> <span m='1843830'>another</span> <span
  m='1844090'>way</span> <span m='1844200'>to</span> <span
  m='1844270'>say</span> <span m='1844410'>it</span> <span m='1844510'>is</span>
  <span m='1844550'>I</span> <span m='1844660'>only</span> <span
  m='1845270'>charge</span> <span m='1845740'>between</span> <span
  m='1846480'>for</span> <span m='1846660'>comparisons</span> <span
  m='1847230'>between</span> <span m='1847580'>x</span> <span
  m='1848560'>and</span> <span m='1848720'>the</span> <span
  m='1848830'>other</span> <span m='1849040'>items.</span> <span
  m='1850800'>And</span> <span m='1851050'>even</span> <span
  m='1851470'>then</span> <span m='1851980'>you</span> <span
  m='1852110'>need</span> <span m='1852310'>lg</span> <span
  m='1852565'>n.</span> </p><p><span m='1853273'>AUDIENCE: [INAUDIBLE]</span>
  <span m='1854179'>case</span> <span m='1854632'>for</span> <span
  m='1855085'>sorting,</span> <span m='1855538'>right?</span> </p><p><span
  m='1855991'>PROFESSOR: With</span> <span m='1856450'>sorting</span> <span
  m='1856980'>they</span> <span m='1857080'>were</span> <span
  m='1857210'>not</span> <span m='1857440'>preprocessed.</span> <span
  m='1857800'>Yeah,</span> <span m='1858160'>I</span> <span
  m='1858240'>didn't</span> <span m='1858440'>write</span> <span
  m='1858650'>the</span> <span m='1858750'>theorem.</span> <span
  m='1859420'>It's</span> <span m='1859590'>just</span> <span
  m='1859750'>sorting</span> <span m='1860260'>and</span> <span
  m='1860610'>given</span> <span m='1860880'>items,</span> <span
  m='1861290'>no</span> <span m='1861480'>preprocessing.</span> </p><p><span
  m='1861670'>AUDIENCE: What if</span> <span m='1862005'>there</span> <span
  m='1862340'>were</span> <span m='1862765'>preprocessing?</span> </p><p><span
  m='1863190'>PROFESSOR: If</span> <span m='1863310'>they were</span> <span
  m='1863510'>preprocessed,</span> <span m='1864130'>you'd</span> <span
  m='1864260'>be</span> <span m='1864410'>done</span> <span
  m='1864710'>in</span> <span m='1864810'>zero</span> <span
  m='1865150'>comparisons.</span> <span m='1865650'>Yeah,</span> <span
  m='1865910'>exactly.</span> <span m='1867640'>This</span> <span
  m='1868090'>theorem</span> <span m='1868370'>is</span> <span
  m='1868480'>also</span> <span m='1868720'>true</span> <span
  m='1868890'>if</span> <span m='1869000'>I</span> <span
  m='1869120'>remove</span> <span m='1869530'>preprocessed,</span> <span
  m='1871580'>but</span> <span m='1871980'>in</span> <span
  m='1872120'>fact</span> <span m='1872430'>then</span> <span
  m='1872610'>you</span> <span m='1872710'>need</span> <span
  m='1872870'>n</span> <span m='1873050'>time.</span> <span
  m='1874280'>Unfortunately</span> <span m='1874790'>this</span> <span
  m='1874970'>proof</span> <span m='1875430'>technique</span> <span
  m='1875660'>will only</span> <span m='1875920'>prove</span> <span
  m='1876130'>a</span> <span m='1876210'>lower</span> <span
  m='1876460'>bound</span> <span m='1876650'>of</span> <span
  m='1876710'>log</span> <span m='1877020'>n,</span> <span
  m='1877670'>because</span> <span m='1877860'>even</span> <span
  m='1878790'>if</span> <span m='1878890'>these</span> <span
  m='1879080'>items</span> <span m='1879360'>were</span> <span
  m='1879500'>not</span> <span m='1879770'>preprocessed,</span> <span
  m='1880890'>then</span> <span m='1881070'>you</span> <span
  m='1881150'>have</span> <span m='1881360'>to</span> <span
  m='1881450'>do</span> <span m='1881610'>linear</span> <span
  m='1881940'>search</span> <span m='1882290'>basically.</span> </p><p><span
  m='1883260'>So</span> <span m='1883550'>if</span> <span m='1883650'>you</span>
  <span m='1883730'>don't</span> <span m='1883860'>know</span> <span
  m='1883940'>anything</span> <span m='1884270'>about</span> <span
  m='1884470'>the</span> <span m='1884570'>items,</span> <span
  m='1885020'>you</span> <span m='1885080'>need</span> <span
  m='1885690'>linear</span> <span m='1885960'>time.</span> <span
  m='1886670'>But</span> <span m='1886810'>this</span> <span
  m='1886990'>proof</span> <span m='1887500'>will</span> <span
  m='1887920'>only</span> <span m='1888310'>prove</span> <span
  m='1888560'>a</span> <span m='1888640'>lower</span> <span
  m='1888860'>bound</span> <span m='1889040'>of</span> <span
  m='1889100'>log</span> <span m='1889365'>n.</span> <span m='1889950'>So</span>
  <span m='1890080'>this</span> <span m='1890280'>technique,</span> <span
  m='1891060'>while</span> <span m='1891490'>cool and</span> <span
  m='1891970'>simple,</span> <span m='1892860'>does</span> <span
  m='1893010'>not</span> <span m='1893190'>always</span> <span
  m='1893380'>give</span> <span m='1893540'>you</span> <span
  m='1893610'>the</span> <span m='1893720'>right</span> <span
  m='1893870'>answer.</span> <span m='1894270'>It</span> <span
  m='1894340'>just</span> <span m='1894510'>gives</span> <span
  m='1894650'>you</span> <span m='1895150'>a</span> <span
  m='1895270'>lower</span> <span m='1895540'>bound.</span> <span
  m='1896170'>May</span> <span m='1896300'>not</span> <span
  m='1896510'>be</span> <span m='1896810'>the</span> <span
  m='1896970'>right</span> <span m='1897210'>lower</span> <span
  m='1897430'>bound,</span> <span m='1897790'>may</span> <span
  m='1897910'>not</span> <span m='1898070'>be</span> <span
  m='1898190'>tight.</span> </p><p><span m='1899800'>So</span> <span
  m='1899960'>searching</span> <span m='1900330'>always</span> <span
  m='1900650'>requires</span> <span m='1901570'>lg n</span> <span
  m='1901920'>time</span> <span m='1902250'>and</span> <span
  m='1902350'>what's</span> <span m='1902520'>interesting</span> <span
  m='1902870'>is</span> <span m='1902980'>it</span> <span
  m='1903070'>requires</span> <span m='1903460'>it</span> <span
  m='1903590'>even</span> <span m='1903890'>when</span> <span
  m='1904010'>you</span> <span m='1904110'>preprocess</span> <span
  m='1904740'>the</span> <span m='1904850'>items.</span> <span
  m='1905980'>Sorting,</span> <span m='1907560'>if</span> <span
  m='1907600'>you</span> <span m='1907700'>haven't</span> <span
  m='1908170'>preprocessed</span> <span m='1908660'>the</span> <span
  m='1908780'>items,</span> <span m='1909050'>then</span> <span
  m='1909220'>it</span> <span m='1909350'>takes</span> <span
  m='1909560'>n</span> <span m='1909670'>lg</span> <span m='1910130'>n.</span>
  <span m='1911050'>Clear?</span> <span m='1912660'>Good.</span> </p><p><span
  m='1913510'>Now</span> <span m='1913710'>we</span> <span
  m='1913810'>get</span> <span m='1913930'>to</span> <span
  m='1914000'>the</span> <span m='1914120'>algorithms</span> <span
  m='1914390'>part</span> <span m='1914660'>of the</span> <span
  m='1914940'>lecture,</span> <span m='1915340'>always</span> <span
  m='1915420'>the</span> <span m='1915630'>most</span> <span
  m='1916330'>fun.</span> <span m='1916650'>The</span> <span
  m='1916730'>moments</span> <span m='1917080'>you've</span> <span
  m='1917200'>been</span> <span m='1917340'>waiting</span> <span
  m='1917620'>for.</span> <span m='1918730'>Let me</span> <span
  m='1918810'>erase</span> <span m='1919090'>comparison</span> <span
  m='1919550'>trees.</span> <span m='1923950'>Henceforth</span> <span
  m='1924960'>and</span> <span m='1925380'>I</span> <span
  m='1925620'>mean</span> <span m='1925890'>not</span> <span
  m='1926130'>only</span> <span m='1926450'>this</span> <span
  m='1926790'>lecture,</span> <span m='1927130'>but</span> <span
  m='1927460'>also</span> <span m='1927770'>the</span> <span
  m='1927880'>next</span> <span m='1928140'>three</span> <span
  m='1928360'>lectures</span> <span m='1928780'>which</span> <span
  m='1928970'>are</span> <span m='1929030'>about</span> <span
  m='1929240'>hashing,</span> <span m='1930380'>we</span> <span
  m='1930530'>will</span> <span m='1930730'>not</span> <span
  m='1931100'>be</span> <span m='1931750'>in</span> <span m='1931860'>the</span>
  <span m='1931940'>comparison</span> <span m='1932430'>model</span> <span
  m='1933480'>because</span> <span m='1934900'>for</span> <span
  m='1935200'>comparison</span> <span m='1935400'>model,</span> <span
  m='1935620'>we're</span> <span m='1935750'>done.</span> <span
  m='1936760'>We</span> <span m='1936980'>solved</span> <span
  m='1937320'>search,</span> <span m='1937720'>we</span> <span
  m='1937890'>solved</span> <span m='1938200'>sorting,</span> <span
  m='1939000'>n</span> <span m='1939130'>lg</span> <span m='1939370'>n</span>
  <span m='1939550'>three</span> <span m='1939835'>ways.</span> <span
  m='1940480'>I</span> <span m='1940520'>mean,</span> <span
  m='1941260'>how</span> <span m='1941380'>much</span> <span
  m='1941650'>more</span> <span m='1941800'>can</span> <span
  m='1941940'>we</span> <span m='1942080'>do?</span> </p><p><span
  m='1942770'>So</span> <span m='1943090'>it's</span> <span
  m='1943280'>time</span> <span m='1943600'>to</span> <span
  m='1945310'>bump</span> <span m='1945520'>it</span> <span
  m='1945620'>up</span> <span m='1945770'>a</span> <span
  m='1945820'>notch,</span> <span m='1946350'>increase</span> <span
  m='1946790'>our</span> <span m='1946910'>model</span> <span
  m='1947410'>power.</span> <span m='1949130'>We've</span> <span
  m='1949300'>talked</span> <span m='1949570'>about</span> <span
  m='1950850'>the</span> <span m='1950990'>RAM</span> <span
  m='1951280'>in</span> <span m='1951570'>particular,</span> <span
  m='1952170'>Random</span> <span m='1952490'>Access</span> <span
  m='1952880'>Machine,</span> <span m='1954300'>where</span> <span
  m='1954540'>memory is</span> <span m='1954910'>in</span> <span
  m='1955040'>array,</span> <span m='1955660'>you</span> <span
  m='1955770'>can</span> <span m='1955880'>access</span> <span
  m='1956160'>anything</span> <span m='1956500'>in</span> <span
  m='1956560'>the</span> <span m='1956690'>array</span> <span
  m='1956910'>in</span> <span m='1956990'>constant</span> <span
  m='1957400'>time.</span> <span m='1958230'>We're</span> <span
  m='1958350'>going</span> <span m='1958430'>to</span> <span
  m='1958470'>use</span> <span m='1958800'>that</span> <span
  m='1959060'>power</span> <span m='1959480'>of</span> <span
  m='1959590'>the</span> <span m='1959710'>RAM</span> <span
  m='1961430'>to</span> <span m='1962610'>sort</span> <span
  m='1962970'>in</span> <span m='1963130'>linear</span> <span
  m='1963450'>time,</span> <span m='1965340'>sometimes.</span> </p><p><span
  m='1972490'>A</span> <span m='1972580'>more</span> <span
  m='1972870'>appropriate</span> <span m='1973440'>title</span> <span
  m='1973740'>for</span> <span m='1973880'>this</span> <span
  m='1974210'>section</span> <span m='1975530'>of</span> <span
  m='1975670'>this</span> <span m='1975870'>lecture</span> <span
  m='1976550'>would</span> <span m='1976700'>be</span> <span
  m='1976900'>integer</span> <span m='1977440'>sorting.</span> <span
  m='1981950'>OK,</span> <span m='1982100'>so</span> <span
  m='1982350'>far</span> <span m='1982710'>we've</span> <span
  m='1982870'>been</span> <span m='1982980'>talking</span> <span
  m='1983250'>about</span> <span m='1983540'>comparison</span> <span
  m='1984120'>sorting</span> <span m='1984560'>where</span> <span
  m='1985290'>the</span> <span m='1985430'>items</span> <span
  m='1985680'>you're</span> <span m='1985780'>given--</span> <span
  m='1986370'>the</span> <span m='1986540'>only</span> <span
  m='1986870'>thing</span> <span m='1987010'>you</span> <span
  m='1987140'>know</span> <span m='1987290'>about</span> <span
  m='1987590'>them</span> <span m='1987740'>is that</span> <span m='1987860'>you
  can</span> <span m='1988160'>compare</span> <span m='1988570'>them</span>
  <span m='1988740'>in</span> <span m='1988840'>constant</span> <span
  m='1989330'>time.</span> <span m='1991110'>But</span> <span
  m='1991290'>now</span> <span m='1991590'>we're</span> <span
  m='1991720'>going</span> <span m='1991820'>to</span> <span
  m='1991910'>think</span> <span m='1992120'>about</span> <span
  m='1992360'>the</span> <span m='1992450'>situation</span> <span
  m='1993130'>where</span> <span m='1993680'>the</span> <span m='1993780'>things
  that</span> <span m='1994020'>you're</span> <span m='1994230'>sorting</span>
  <span m='1994610'>are</span> <span m='1994810'>integers.</span> <span
  m='1996310'>That's</span> <span m='1996530'>a</span> <span
  m='1996580'>big</span> <span m='1996900'>assumption</span> <span
  m='1998720'>but</span> <span m='1999090'>it's</span> <span
  m='1999310'>a</span> <span m='1999400'>practical</span> <span
  m='1999900'>assumption</span> <span m='2000260'>a</span> <span
  m='2000320'>lot</span> <span m='2000560'>of</span> <span
  m='2000610'>the</span> <span m='2000750'>time.</span> <span
  m='2001220'>If</span> <span m='2001390'>you're</span> <span
  m='2001480'>not</span> <span m='2001650'>sorting</span> <span
  m='2001930'>integers</span> <span m='2002310'>you</span> <span
  m='2002440'>can</span> <span m='2002610'>map</span> <span
  m='2002890'>whatever</span> <span m='2003260'>the</span> <span
  m='2003340'>heck</span> <span m='2003540'>you're</span> <span
  m='2003650'>sorting</span> <span m='2004520'>into</span> <span
  m='2004740'>integers.</span> </p><p><span m='2005620'>And</span> <span
  m='2005860'>usually</span> <span m='2006430'>it's</span> <span
  m='2006620'>already</span> <span m='2006810'>been</span> <span
  m='2006970'>done</span> <span m='2007210'>because</span> <span
  m='2007370'>you're</span> <span m='2007480'>representing</span> <span
  m='2007745'>it</span> <span m='2008010'>on</span> <span m='2008150'>a</span>
  <span m='2008200'>computer.</span> <span m='2009140'>You've already</span>
  <span m='2009450'>represented</span> <span m='2009775'>your</span> <span
  m='2010100'>thing</span> <span m='2010330'>is</span> <span
  m='2011010'>an</span> <span m='2011080'>integer</span> <span
  m='2011510'>of</span> <span m='2011680'>sorts.</span> <span
  m='2013050'>Bad</span> <span m='2013330'>pun.</span> <span
  m='2016870'>This</span> <span m='2017060'>is</span> <span
  m='2017170'>an</span> <span m='2017270'>assumption.</span> <span
  m='2018060'>So we</span> <span m='2019140'>assume--</span> <span
  m='2022200'>going to</span> <span m='2022500'>be a</span> <span
  m='2022540'>little</span> <span m='2022750'>more</span> <span
  m='2022910'>precise.</span> <span m='2023390'>The</span> <span
  m='2023710'>keys</span> <span m='2024230'>you're</span> <span
  m='2024340'>sorting</span> <span m='2027400'>are</span> <span
  m='2027540'>integers.</span> </p><p><span m='2029200'>There's</span> <span
  m='2029360'>still--</span> <span m='2030050'>I'm</span> <span
  m='2030340'>going</span> <span m='2030440'>to</span> <span
  m='2030590'>put</span> <span m='2030750'>a</span> <span
  m='2030810'>little</span> <span m='2031060'>n</span> <span
  m='2031320'>here,</span> <span m='2031720'>remember</span> <span
  m='2031740'>there's</span> <span m='2032180'>n</span> <span
  m='2032520'>keys.</span> <span m='2038100'>I'm</span> <span
  m='2038280'>also</span> <span m='2038610'>going</span> <span
  m='2038850'>to</span> <span m='2038960'>assume</span> <span
  m='2039450'>that</span> <span m='2039660'>they're</span> <span
  m='2040260'>in</span> <span m='2040430'>some</span> <span
  m='2040700'>range.</span> <span m='2042080'>And</span> <span
  m='2042310'>for</span> <span m='2042430'>convenience,</span> <span
  m='2043120'>I'm</span> <span m='2043220'>going</span> <span
  m='2043320'>to</span> <span m='2043420'>assume</span> <span
  m='2043760'>that</span> <span m='2043980'>they're</span> <span
  m='2044170'>all</span> <span m='2044300'>non-negative--</span> <span
  m='2045680'>it's</span> <span m='2045880'>not</span> <span
  m='2046050'>hard</span> <span m='2046280'>to</span> <span
  m='2046380'>deal</span> <span m='2046580'>with</span> <span
  m='2046690'>negative</span> <span m='2047010'>numbers,</span> <span
  m='2047500'>but</span> <span m='2048130'>it's</span> <span
  m='2048560'>just</span> <span m='2048780'>convenient</span> <span
  m='2049389'>to</span> <span m='2049500'>think</span> <span
  m='2049719'>about</span> <span m='2050600'>non-negative</span> <span
  m='2051179'>numbers.</span> <span m='2052350'>So</span> <span m='2052540'>if
  you</span> <span m='2052909'>start</span> <span m='2052989'>at</span> <span
  m='2053090'>zero,</span> <span m='2053862'>there's</span> <span
  m='2054250'>some</span> <span m='2054449'>maximum</span> <span
  m='2054880'>value,</span> <span m='2055260'>say</span> <span
  m='2055480'>k</span> <span m='2055670'>minus</span> <span
  m='2056020'>1.</span> <span m='2056230'>So</span> <span
  m='2056360'>there's</span> <span m='2056520'>k</span> <span
  m='2056780'>different</span> <span m='2057040'>values</span> <span
  m='2057409'>they</span> <span m='2057520'>could</span> <span
  m='2057690'>be.</span> </p><p><span m='2058900'>K</span> <span
  m='2059090'>could</span> <span m='2059219'>be</span> <span
  m='2059340'>anything.</span> <span m='2059800'>It's</span> <span
  m='2059830'>a</span> <span m='2059909'>parameter.</span> <span
  m='2060639'>We've</span> <span m='2060860'>always</span> <span
  m='2061120'>had</span> <span m='2061290'>n</span> <span m='2061460'>as</span>
  <span m='2061570'>a</span> <span m='2061639'>parameter,</span> <span
  m='2062190'>now</span> <span m='2062290'>we're</span> <span
  m='2062389'>going</span> <span m='2062510'>to</span> <span
  m='2062570'>also</span> <span m='2062969'>have</span> <span m='2063290'>k
  as</span> <span m='2063610'>a parameter.</span> <span m='2067750'>And</span>
  <span m='2068070'>just</span> <span m='2068270'>for</span> <span
  m='2068409'>completeness--</span> <span m='2070929'>and</span> <span
  m='2071489'>each</span> <span m='2073212'>fits</span> <span
  m='2075070'>in</span> <span m='2075440'>a</span> <span
  m='2075630'>word.</span> <span m='2076659'>Remember</span> <span
  m='2076980'>the</span> <span m='2077320'>machine</span> <span
  m='2077800'>word</span> <span m='2078599'>of</span> <span
  m='2078889'>your</span> <span m='2079429'>RAM</span> <span
  m='2079830'>machine?</span> <span m='2082780'>Words</span> <span
  m='2083139'>were</span> <span m='2083219'>the</span> <span
  m='2083350'>things</span> <span m='2083580'>that</span> <span
  m='2083650'>we</span> <span m='2083770'>could</span> <span
  m='2083900'>manipulate</span> <span m='2084190'>in</span> <span
  m='2084480'>constant</span> <span m='2084900'>time.</span> </p><p><span
  m='2085219'>Now</span> <span m='2085340'>this</span> <span
  m='2085590'>is</span> <span m='2085719'>a</span> <span m='2085770'>very</span>
  <span m='2086030'>reasonable</span> <span m='2086370'>assumption</span> <span
  m='2086840'>because</span> <span m='2087199'>we've</span> <span
  m='2087389'>been</span> <span m='2087520'>assuming</span> <span
  m='2087880'>so</span> <span m='2088060'>far</span> <span m='2088280'>you
  can</span> <span m='2088600'>compare</span> <span m='2089080'>two</span> <span
  m='2089320'>keys</span> <span m='2090150'>to</span> <span
  m='2090429'>items</span> <span m='2091159'>in</span> <span
  m='2091320'>constant</span> <span m='2091770'>time.</span> <span
  m='2092880'>To</span> <span m='2093000'>get</span> <span
  m='2093250'>that</span> <span m='2093440'>for</span> <span
  m='2093570'>integers,</span> <span m='2093980'>you</span> <span
  m='2094060'>need</span> <span m='2094230'>to</span> <span m='2094320'>assume
  that</span> <span m='2094600'>your</span> <span m='2095040'>integers</span>
  <span m='2095389'>are</span> <span m='2095460'>fitting</span> <span
  m='2095739'>in</span> <span m='2095830'>words.</span> <span
  m='2096130'>We</span> <span m='2096260'>usually</span> <span
  m='2096550'>don't</span> <span m='2096770'>state</span> <span
  m='2096989'>this</span> <span m='2097139'>assumption,</span> <span
  m='2097560'>but</span> <span m='2097840'>I thought</span> <span
  m='2098060'>I'd</span> <span m='2098220'>throw</span> <span
  m='2098450'>it</span> <span m='2098530'>in</span> <span
  m='2098690'>just</span> <span m='2098880'>for</span> <span
  m='2098980'>kicks.</span> <span m='2100090'>So</span> <span
  m='2100200'>we've</span> <span m='2100270'>got</span> <span
  m='2100430'>a</span> <span m='2100470'>bunch</span> <span
  m='2100670'>of</span> <span m='2100730'>integers,</span> <span
  m='2101120'>each</span> <span m='2101290'>one</span> <span
  m='2101430'>fits</span> <span m='2101630'>in</span> <span m='2101700'>a</span>
  <span m='2101760'>word.</span> <span m='2102020'>I</span> <span
  m='2102120'>could</span> <span m='2102480'>compare</span> <span
  m='2102920'>them,</span> <span m='2103610'>that</span> <span
  m='2103710'>takes</span> <span m='2103910'>constant</span> <span
  m='2104250'>time,</span> <span m='2104660'>or</span> <span
  m='2105850'>I</span> <span m='2105990'>could</span> <span
  m='2106650'>add</span> <span m='2106920'>them</span> <span
  m='2107350'>or</span> <span m='2107600'>subtract</span> <span
  m='2108050'>them</span> <span m='2108280'>or</span> <span
  m='2108390'>multiply</span> <span m='2108690'>them</span> <span
  m='2108990'>or</span> <span m='2109080'>divide</span> <span
  m='2109510'>them</span> <span m='2109760'>or</span> <span
  m='2110520'>do</span> <span m='2110640'>whatever</span> <span
  m='2110940'>the</span> <span m='2111020'>heck</span> <span
  m='2111200'>I</span> <span m='2111300'>want.</span> </p><p><span
  m='2113160'>It</span> <span m='2113470'>turns</span> <span
  m='2113760'>out</span> <span m='2118130'>you</span> <span
  m='2118210'>can</span> <span m='2118330'>do</span> <span m='2118500'>a</span>
  <span m='2118540'>lot</span> <span m='2118760'>more</span> <span
  m='2120110'>than</span> <span m='2120350'>comparisons</span> <span
  m='2124650'>and it</span> <span m='2125020'>turns out</span> <span
  m='2125390'>this will</span> <span m='2125510'>help</span> <span
  m='2125780'>us.</span> <span m='2140950'>I don't know</span> <span
  m='2141160'>if</span> <span m='2141310'>I</span> <span m='2141350'>want</span>
  <span m='2141520'>to</span> <span m='2141700'>tell</span> <span
  m='2141900'>you</span> <span m='2142070'>the</span> <span
  m='2142190'>answer</span> <span m='2142640'>here.</span> <span
  m='2143150'>For</span> <span m='2143260'>k--</span> <span
  m='2144020'>not</span> <span m='2144300'>too</span> <span
  m='2144430'>big--</span> <span m='2146090'>you</span> <span
  m='2146300'>can</span> <span m='2146460'>sort</span> <span
  m='2149120'>in</span> <span m='2149250'>linear</span> <span
  m='2149550'>time.</span> <span m='2153510'>Believe</span> <span
  m='2153760'>it</span> <span m='2153800'>or</span> <span
  m='2153900'>not,</span> <span m='2154690'>this</span> <span
  m='2155120'>topic,</span> <span m='2155510'>integer</span> <span
  m='2155860'>sorting,</span> <span m='2156500'>is</span> <span
  m='2156640'>still</span> <span m='2156860'>a</span> <span
  m='2156900'>major</span> <span m='2157360'>area</span> <span
  m='2157540'>of</span> <span m='2157620'>research.</span> <span
  m='2158280'>People</span> <span m='2158570'>are</span> <span
  m='2158650'>still</span> <span m='2158950'>trying</span> <span
  m='2159170'>to</span> <span m='2159230'>solve</span> <span
  m='2159510'>this</span> <span m='2159670'>problem.</span> </p><p><span
  m='2161070'>One</span> <span m='2161330'>conjecture</span> <span
  m='2162450'>is</span> <span m='2162660'>that</span> <span
  m='2163860'>even</span> <span m='2164260'>in</span> <span
  m='2164530'>all</span> <span m='2164820'>cases,</span> <span m='2165640'>you
  can</span> <span m='2165710'>sort in</span> <span m='2166180'>linear</span>
  <span m='2166510'>time</span> <span m='2167190'>given</span> <span
  m='2167460'>any</span> <span m='2167690'>integers</span> <span
  m='2168230'>that</span> <span m='2168330'>fit</span> <span
  m='2168460'>in</span> <span m='2168610'>words.</span> <span
  m='2169505'>This</span> <span m='2169890'>is</span> <span
  m='2170060'>not</span> <span m='2170270'>yet</span> <span
  m='2170450'>solved.</span> <span m='2171660'>Best</span> <span
  m='2171900'>algorithm</span> <span m='2172330'>is</span> <span
  m='2172550'>n</span> <span m='2172950'>times</span> <span
  m='2173430'>square</span> <span m='2173850'>root</span> <span
  m='2174220'>lg</span> <span m='2174550'>lg</span> <span m='2174780'>n</span>
  <span m='2175600'>with</span> <span m='2175750'>high</span> <span
  m='2175890'>probability.</span> <span m='2177810'>So</span> <span
  m='2177940'>it's</span> <span m='2178050'>almost--</span> <span
  m='2179331'>almost</span> <span m='2179760'>n.</span> <span
  m='2180420'>It's</span> <span m='2180510'>a</span> <span
  m='2180560'>lot</span> <span m='2180830'>better</span> <span
  m='2181780'>than</span> <span m='2181970'>n</span> <span m='2182110'>lg</span>
  <span m='2182380'>n.</span> </p><p><span m='2182540'>I'll</span> <span
  m='2182690'>just</span> <span m='2182940'>write</span> <span
  m='2183110'>that</span> <span m='2183300'>for</span> <span
  m='2183420'>fun</span> <span m='2183890'>case</span> <span
  m='2184050'>you</span> <span m='2184590'>can't</span> <span
  m='2184910'>parse</span> <span m='2187390'>in</span> <span
  m='2187890'>words.</span> <span m='2188620'>This</span> <span
  m='2188700'>is</span> <span m='2188830'>the</span> <span
  m='2188910'>best</span> <span m='2189200'>algorithms</span> <span
  m='2189720'>to</span> <span m='2189900'>date.</span> <span
  m='2191880'>I</span> <span m='2192080'>would</span> <span
  m='2192360'>conjecture</span> <span m='2192790'>you</span> <span
  m='2192880'>can</span> <span m='2192970'>do</span> <span
  m='2193130'>linear</span> <span m='2193340'>time</span> <span
  m='2193570'>in</span> <span m='2193630'>all</span> <span
  m='2193810'>situations.</span> <span m='2194500'>We're</span> <span
  m='2194630'>not</span> <span m='2194800'>going</span> <span
  m='2194890'>to</span> <span m='2194960'>cover</span> <span
  m='2195210'>this</span> <span m='2195410'>algorithm.</span> <span
  m='2195810'>That's</span> <span m='2196950'>a</span> <span
  m='2197010'>little</span> <span m='2197190'>beyond</span> <span
  m='2197530'>us.</span> <span m='2197710'>It's</span> <span
  m='2197980'>in</span> <span m='2198110'>advanced</span> <span
  m='2198490'>algorithms</span> <span m='2198960'>if</span> <span
  m='2199080'>you're</span> <span m='2199170'>interested,</span> <span
  m='2200540'>6854.</span> </p><p><span m='2202360'>But</span> <span
  m='2202560'>we're</span> <span m='2202730'>going</span> <span
  m='2202840'>to</span> <span m='2203020'>show</span> <span
  m='2203240'>that</span> <span m='2203440'>for</span> <span
  m='2203670'>a</span> <span m='2203730'>lot</span> <span m='2203960'>of</span>
  <span m='2204240'>cases</span> <span m='2204630'>of</span> <span
  m='2204740'>interest</span> <span m='2205160'>when</span> <span
  m='2205280'>k</span> <span m='2205490'>is</span> <span m='2205620'>not</span>
  <span m='2205920'>ginormous,</span> <span m='2206890'>it's</span> <span
  m='2207090'>really</span> <span m='2207430'>easy</span> <span
  m='2207720'>to</span> <span m='2207810'>sort</span> <span
  m='2208110'>in</span> <span m='2208210'>linear</span> <span
  m='2208510'>time.</span> <span m='2210634'>All right?</span> <span
  m='2211100'>And</span> <span m='2211520'>our</span> <span
  m='2211590'>first</span> <span m='2211880'>algorithm</span> <span
  m='2213380'>to</span> <span m='2213710'>achieve</span> <span
  m='2214120'>this</span> <span m='2214690'>is</span> <span
  m='2215090'>counting</span> <span m='2215600'>sort.</span> <span
  m='2221000'>Counting</span> <span m='2221330'>sort</span> <span
  m='2222410'>does</span> <span m='2222560'>not</span> <span
  m='2222730'>make</span> <span m='2222890'>any</span> <span
  m='2223080'>comparisons.</span> <span m='2223680'>It</span> <span
  m='2223820'>only</span> <span m='2224050'>does</span> <span
  m='2224300'>other</span> <span m='2224580'>stuff.</span> <span
  m='2226980'>And</span> <span m='2228720'>it's</span> <span
  m='2228870'>going</span> <span m='2228970'>to</span> <span
  m='2229060'>depend</span> <span m='2229380'>on</span> <span
  m='2229510'>n.</span> <span m='2229760'>It's</span> <span
  m='2229950'>going</span> <span m='2230050'>to</span> <span
  m='2230140'>depend</span> <span m='2230490'>on</span> <span
  m='2230620'>k.</span> <span m='2230910'>We'll</span> <span
  m='2231050'>get</span> <span m='2231240'>some</span> <span
  m='2231390'>running</span> <span m='2231610'>times</span> <span
  m='2231970'>not</span> <span m='2232170'>bad</span> <span
  m='2232450'>as</span> <span m='2232550'>long</span> <span
  m='2232740'>as</span> <span m='2232870'>k</span> <span m='2233480'>is</span>
  <span m='2233650'>not</span> <span m='2233840'>giant.</span> </p><p><span
  m='2234820'>So</span> <span m='2235120'>as</span> <span m='2235340'>the</span>
  <span m='2235460'>name</span> <span m='2235660'>might</span> <span
  m='2235920'>suggest,</span> <span m='2237210'>what</span> <span
  m='2237400'>you</span> <span m='2237500'>do</span> <span m='2237970'>is</span>
  <span m='2238640'>count</span> <span m='2239340'>all</span> <span
  m='2239590'>the</span> <span m='2239710'>items.</span> <span
  m='2241140'>So</span> <span m='2241290'>imagine</span> <span
  m='2241660'>I</span> <span m='2241720'>give</span> <span
  m='2241940'>you</span> <span m='2242090'>a</span> <span
  m='2242110'>bunch</span> <span m='2242370'>of</span> <span
  m='2242470'>keys</span> <span m='2242900'>like</span> <span
  m='2243810'>3,</span> <span m='2245150'>5</span> <span m='2245800'>7,</span>
  <span m='2246400'>5,</span> <span m='2247320'>5,</span> <span
  m='2248650'>3,</span> <span m='2250010'>6,</span> <span
  m='2250570'>whatever.</span> <span m='2252560'>I'd</span> <span
  m='2252730'>like</span> <span m='2252920'>to</span> <span
  m='2253060'>run</span> <span m='2253320'>through</span> <span
  m='2253460'>this</span> <span m='2253650'>array</span> <span
  m='2253940'>and</span> <span m='2254080'>say,</span> <span
  m='2254270'>ah,</span> <span m='2255020'>I</span> <span m='2255120'>see</span>
  <span m='2255350'>there</span> <span m='2255500'>are</span> <span
  m='2255580'>two</span> <span m='2255770'>3's</span> <span
  m='2256890'>and</span> <span m='2257280'>there</span> <span
  m='2257440'>are</span> <span m='2257600'>three</span> <span
  m='2257930'>5's</span> <span m='2259420'>and</span> <span
  m='2259500'>there's</span> <span m='2259660'>one</span> <span
  m='2259930'>6,</span> <span m='2260450'>and</span> <span
  m='2260890'>one</span> <span m='2261070'>7,</span> <span m='2262110'>so</span>
  <span m='2262280'>how</span> <span m='2262420'>do</span> <span
  m='2262510'>I</span> <span m='2262600'>sort</span> <span
  m='2262770'>it?</span> <span m='2264670'>I'd</span> <span
  m='2264890'>like</span> <span m='2265060'>to</span> <span
  m='2265150'>say,</span> <span m='2265320'>well</span> <span
  m='2265550'>3</span> <span m='2265740'>is</span> <span
  m='2265840'>smallest</span> <span m='2266300'>key</span> <span m='2266970'>and
  there's</span> <span m='2267140'>two</span> <span m='2267340'>of them,</span>
  <span m='2267740'>so I'll write</span> <span m='2268060'>two</span> <span
  m='2268260'>3's,</span> <span m='2268710'>then</span> <span
  m='2268980'>there's</span> <span m='2269430'>three</span> <span
  m='2269880'>5's</span> <span m='2270900'>so I'll</span> <span
  m='2270960'>write</span> <span m='2271160'>three</span> <span
  m='2271350'>5's,</span> <span m='2272470'>and then</span> <span
  m='2272560'>there's</span> <span m='2272700'>a</span> <span
  m='2272760'>6</span> <span m='2273020'>and then</span> <span
  m='2273280'>there's a</span> <span m='2273740'>7.</span> <span
  m='2274810'>That's</span> <span m='2275080'>the</span> <span
  m='2275220'>intuition.</span> </p><p><span m='2276030'>Now</span> <span
  m='2276120'>how</span> <span m='2276300'>do I--</span> <span
  m='2277192'>how</span> <span m='2277640'>I</span> <span m='2277700'>do</span>
  <span m='2277880'>that</span> <span m='2278200'>with</span> <span
  m='2278310'>an</span> <span m='2278400'>algorithm?</span> <span
  m='2280170'>Suggestions?</span> <span m='2282700'>Yeah?</span> </p><p><span
  m='2283660'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2290870'>PROFESSOR:
  Yeah.</span> <span m='2291550'>Allocate</span> <span m='2292060'>an</span>
  <span m='2292260'>array</span> <span m='2292440'>of</span> <span
  m='2292520'>memory,</span> <span m='2292820'>which</span> <span
  m='2293030'>is</span> <span m='2293140'>my</span> <span
  m='2293290'>counters--</span> <span m='2294330'>I'm</span> <span
  m='2294460'>going</span> <span m='2294550'>to</span> <span
  m='2294640'>count</span> <span m='2295010'>each</span> <span
  m='2295270'>k.</span> <span m='2295900'>I</span> <span m='2296050'>need</span>
  <span m='2296270'>an</span> <span m='2296450'>array</span> <span
  m='2296620'>of</span> <span m='2296720'>size</span> <span m='2297070'>k</span>
  <span m='2297460'>because</span> <span m='2297770'>there are</span> <span
  m='2297910'>k</span> <span m='2298190'>possible</span> <span
  m='2298720'>keys.</span> <span m='2299790'>Convenient</span> <span
  m='2300290'>those</span> <span m='2300920'>two</span> <span
  m='2301390'>terms</span> <span m='2301730'>start</span> <span
  m='2301920'>with</span> <span m='2301940'>the</span> <span
  m='2302080'>same</span> <span m='2302260'>letter.</span> <span
  m='2303460'>And</span> <span m='2303640'>then</span> <span
  m='2303830'>I'll</span> <span m='2303920'>just--</span> <span
  m='2304410'>whenever</span> <span m='2304880'>I</span> <span
  m='2304960'>see</span> <span m='2305290'>an--</span> <span
  m='2305450'>I'm</span> <span m='2305620'>going</span> <span
  m='2305730'>to</span> <span m='2305810'>run</span> <span
  m='2306000'>through</span> <span m='2306130'>the</span> <span
  m='2306300'>items</span> <span m='2306630'>in</span> <span
  m='2306740'>order,</span> <span m='2307340'>when</span> <span
  m='2307480'>I</span> <span m='2307540'>see</span> <span m='2307810'>an</span>
  <span m='2307880'>item,</span> <span m='2308370'>I</span> <span
  m='2308520'>say,</span> <span m='2308690'>OK,</span> <span
  m='2308930'>well</span> <span m='2309040'>that's</span> <span
  m='2309280'>key</span> <span m='2309520'>3.</span> <span m='2310140'>I</span>
  <span m='2310240'>will</span> <span m='2310530'>look</span> <span
  m='2310860'>at</span> <span m='2311570'>index</span> <span
  m='2312100'>3</span> <span m='2312380'>of</span> <span m='2312450'>this
  array,</span> <span m='2313310'>increment</span> <span m='2313760'>that</span>
  <span m='2313960'>counter.</span> </p><p><span m='2315060'>Then</span> <span
  m='2315200'>I see</span> <span m='2315460'>5,</span> <span
  m='2315790'>increment</span> <span m='2316110'>that</span> <span
  m='2316280'>counter.</span> <span m='2316620'>I see</span> <span
  m='2316920'>7,</span> <span m='2317220'>I see</span> <span
  m='2317400'>5,</span> <span m='2317850'>I</span> <span m='2317970'>see</span>
  <span m='2318110'>5,</span> <span m='2318410'>and</span> <span
  m='2318510'>by</span> <span m='2318650'>the</span> <span
  m='2318820'>end,</span> <span m='2319470'>I'll</span> <span m='2319600'>know
  that</span> <span m='2319870'>there</span> <span m='2319990'>are</span> <span
  m='2320030'>three</span> <span m='2320270'>5's</span> <span
  m='2321330'>and</span> <span m='2321700'>two</span> <span
  m='2321850'>3's</span> <span m='2322180'>and</span> <span
  m='2322290'>so</span> <span m='2322430'>on.</span> <span
  m='2323860'>That's</span> <span m='2324040'>how</span> <span
  m='2324110'>I</span> <span m='2324190'>count.</span> <span
  m='2324650'>And</span> <span m='2324790'>then</span> <span
  m='2324900'>how</span> <span m='2325080'>do</span> <span
  m='2325410'>output</span> <span m='2325780'>the</span> <span
  m='2325900'>items?</span> <span m='2328890'>You want</span> <span
  m='2329120'>to keep</span> <span m='2329200'>going?</span> </p><p><span
  m='2330060'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='2336300'>PROFESSOR:
  Yeah,</span> <span m='2336760'>just</span> <span m='2337010'>traverse</span>
  <span m='2337940'>the</span> <span m='2338320'>array of</span> <span
  m='2338680'>counters</span> <span m='2339740'>and</span> <span
  m='2342090'>the</span> <span m='2342350'>array</span> <span
  m='2342635'>is</span> <span m='2342920'>already</span> <span
  m='2343250'>written</span> <span m='2343570'>in</span> <span
  m='2343770'>order</span> <span m='2344090'>by</span> <span
  m='2344270'>key,</span> <span m='2345240'>so</span> <span
  m='2345590'>it's</span> <span m='2345720'>really</span> <span
  m='2345940'>easy.</span> <span m='2346940'>I</span> <span
  m='2347020'>mean</span> <span m='2347340'>I</span> <span
  m='2347410'>could</span> <span m='2347970'>draw</span> <span
  m='2348150'>this</span> <span m='2348340'>array</span> <span
  m='2348570'>for</span> <span m='2348730'>you</span> <span m='2348840'>if
  you</span> <span m='2349000'>like</span> <span m='2349330'>at</span> <span
  m='2349430'>0,</span> <span m='2349825'>1,</span> <span m='2350220'>2</span>
  <span m='2350590'>3.</span> <span m='2350870'>Here's the</span> <span
  m='2351190'>3</span> <span m='2352010'>position,</span> <span
  m='2352275'>it</span> <span m='2352540'>ends</span> <span
  m='2352820'>up</span> <span m='2353000'>with</span> <span
  m='2353170'>the</span> <span m='2353250'>value</span> <span
  m='2353680'>2.</span> <span m='2355270'>And</span> <span m='2355440'>if</span>
  <span m='2355550'>I</span> <span m='2355610'>just</span> <span
  m='2355840'>go</span> <span m='2356020'>through,</span> <span
  m='2356400'>a</span> <span m='2356490'>lot</span> <span m='2356680'>of</span>
  <span m='2356720'>these</span> <span m='2356890'>will</span> <span
  m='2357000'>have</span> <span m='2357260'>0's</span> <span
  m='2357610'>in</span> <span m='2358110'>them,</span> <span
  m='2358360'>just</span> <span m='2358600'>skip</span> <span
  m='2358720'>those.</span> <span m='2359870'>When</span> <span
  m='2360030'>I</span> <span m='2360100'>find</span> <span m='2360490'>a</span>
  <span m='2360540'>non-zero</span> <span m='2360940'>entry,</span> <span
  m='2361260'>just</span> <span m='2361490'>write--</span> <span
  m='2361990'>oh,</span> <span m='2362140'>that</span> <span
  m='2362370'>means</span> <span m='2362560'>there's</span> <span
  m='2362730'>two</span> <span m='2362920'>3's</span> <span
  m='2363250'>there,</span> <span m='2363520'>so</span> <span
  m='2363660'>I</span> <span m='2363740'>write</span> <span
  m='2364040'>3,</span> <span m='2364360'>3.</span> </p><p><span
  m='2366096'>OK,</span> <span m='2366570'>that</span> <span
  m='2366740'>algorithm</span> <span m='2367100'>would</span> <span
  m='2367210'>work</span> <span m='2367490'>but</span> <span
  m='2367600'>I'm</span> <span m='2367710'>not</span> <span
  m='2367920'>going</span> <span m='2368020'>to</span> <span
  m='2368070'>even</span> <span m='2368300'>write</span> <span
  m='2368510'>it</span> <span m='2368670'>down,</span> <span
  m='2369280'>not</span> <span m='2369410'>even</span> <span
  m='2369560'>going</span> <span m='2369660'>to</span> <span
  m='2369720'>dignify</span> <span m='2370310'>it,</span> <span
  m='2370790'>because</span> <span m='2372070'>all</span> <span
  m='2372470'>it</span> <span m='2372590'>does</span> <span
  m='2373360'>is</span> <span m='2373610'>sort</span> <span
  m='2374080'>integers.</span> <span m='2375920'>But</span> <span
  m='2376020'>there's</span> <span m='2376710'>a</span> <span
  m='2376820'>subtlety</span> <span m='2377260'>here</span> <span
  m='2377430'>which</span> <span m='2377600'>we're</span> <span
  m='2377720'>going</span> <span m='2377840'>to</span> <span
  m='2377900'>need</span> <span m='2378140'>in</span> <span m='2378250'>a</span>
  <span m='2378290'>moment,</span> <span m='2378780'>which</span> <span
  m='2378850'>is</span> <span m='2378970'>why</span> <span m='2379220'>I</span>
  <span m='2379320'>stress</span> <span m='2379690'>it,</span> <span
  m='2380300'>that</span> <span m='2380520'>really</span> <span
  m='2380800'>we</span> <span m='2380930'>have</span> <span m='2381150'>n</span>
  <span m='2381460'>items.</span> <span m='2382750'>Each</span> <span
  m='2382950'>of</span> <span m='2383010'>them</span> <span
  m='2383140'>has</span> <span m='2383370'>a</span> <span
  m='2383420'>key,</span> <span m='2384400'>but</span> <span
  m='2384540'>it</span> <span m='2384610'>might</span> <span
  m='2384780'>have</span> <span m='2384960'>other</span> <span
  m='2385250'>stuff</span> <span m='2385550'>too</span> <span
  m='2386250'>that</span> <span m='2386500'>we'd</span> <span
  m='2386780'>like</span> <span m='2386960'>to</span> <span
  m='2387300'>bring</span> <span m='2387480'>along</span> <span m='2387830'>for
  the</span> <span m='2387970'>ride.</span> <span m='2388290'>We'll</span> <span
  m='2388410'>see</span> <span m='2388600'>why</span> <span
  m='2389230'>we</span> <span m='2389340'>care</span> <span
  m='2389520'>about</span> <span m='2389720'>that</span> <span
  m='2389880'>in</span> <span m='2389980'>a</span> <span
  m='2390020'>moment.</span> </p><p><span m='2390470'>But</span> <span
  m='2390480'>it's</span> <span m='2390610'>also</span> <span
  m='2390830'>a</span> <span m='2391190'>typical</span> <span
  m='2391590'>situation,</span> <span m='2392690'>like</span> <span
  m='2392890'>you</span> <span m='2393160'>have</span> <span
  m='2394170'>a</span> <span m='2394240'>spreadsheet</span> <span
  m='2395120'>and</span> <span m='2395250'>you</span> <span
  m='2395350'>click</span> <span m='2395620'>sort</span> <span
  m='2395900'>by</span> <span m='2396010'>this</span> <span
  m='2396190'>column.</span> <span m='2397440'>Well</span> <span
  m='2397650'>every</span> <span m='2397960'>row</span> <span
  m='2398250'>has</span> <span m='2398500'>a</span> <span
  m='2398550'>whole</span> <span m='2398800'>bunch</span> <span
  m='2399070'>of</span> <span m='2399150'>data</span> <span
  m='2399990'>but</span> <span m='2400140'>you're</span> <span
  m='2400290'>only</span> <span m='2400530'>trying</span> <span
  m='2400720'>to</span> <span m='2400800'>sort</span> <span
  m='2401040'>by</span> <span m='2401150'>one</span> <span m='2401430'>of</span>
  <span m='2401500'>those</span> <span m='2401710'>fields,</span> <span
  m='2402440'>that</span> <span m='2402916'>one</span> <span
  m='2403392'>column.</span> <span m='2404240'>And</span> <span
  m='2404500'>that</span> <span m='2404740'>one</span> <span
  m='2404910'>field</span> <span m='2405210'>may</span> <span
  m='2405350'>be</span> <span m='2405470'>an</span> <span
  m='2405550'>integer,</span> <span m='2406730'>but</span> <span
  m='2406840'>there's</span> <span m='2406990'>all</span> <span
  m='2407110'>this</span> <span m='2407240'>other</span> <span
  m='2407460'>stuff</span> <span m='2407700'>you'd</span> <span
  m='2407810'>like</span> <span m='2407950'>to</span> <span
  m='2408030'>bring</span> <span m='2408210'>along.</span> </p><p><span
  m='2408660'>And</span> <span m='2409120'>when</span> <span
  m='2409290'>you</span> <span m='2409400'>say,</span> <span
  m='2409670'>oh,</span> <span m='2409880'>there</span> <span
  m='2410050'>are</span> <span m='2410160'>two</span> <span
  m='2410390'>3's,</span> <span m='2411910'>you</span> <span
  m='2412030'>know</span> <span m='2412210'>there's</span> <span
  m='2412400'>this</span> <span m='2412640'>3,</span> <span
  m='2413200'>which</span> <span m='2413690'>you know</span> <span
  m='2413910'>maybe</span> <span m='2415450'>has</span> <span
  m='2415600'>a</span> <span m='2415680'>cloud</span> <span
  m='2416090'>around</span> <span m='2416430'>it.</span> <span
  m='2417270'>There's</span> <span m='2417470'>this</span> <span
  m='2417710'>3</span> <span m='2418020'>which</span> <span
  m='2418230'>maybe</span> <span m='2418450'>has</span> <span
  m='2418610'>a</span> <span m='2418660'>heart</span> <span m='2418940'>around
  it.</span> <span m='2419320'>That's</span> <span m='2419470'>about the</span>
  <span m='2419690'>limit</span> <span m='2420000'>of</span> <span
  m='2420100'>my</span> <span m='2420720'>drawing</span> <span
  m='2421030'>abilities.</span> <span m='2421840'>And</span> <span
  m='2422260'>now</span> <span m='2422530'>say,</span> <span
  m='2422760'>oh,</span> <span m='2422900'>there are</span> <span
  m='2423030'>two</span> <span m='2423230'>3's</span> <span
  m='2423570'>but</span> <span m='2423870'>which</span> <span
  m='2424320'>3?</span> <span m='2425240'>Should</span> <span
  m='2425450'>the</span> <span m='2425530'>cloud</span> <span
  m='2425870'>go</span> <span m='2426000'>first,</span> <span
  m='2426300'>should</span> <span m='2426360'>the</span> <span
  m='2426440'>heart</span> <span m='2426720'>go first?</span> </p><p><span
  m='2427000'>I</span> <span m='2427060'>mean</span> <span m='2427220'>I</span>
  <span m='2427260'>don't</span> <span m='2427420'>care</span> <span
  m='2427610'>which</span> <span m='2427830'>goes</span> <span
  m='2428020'>first,</span> <span m='2428320'>maybe--</span> <span
  m='2429160'>I</span> <span m='2429440'>do,</span> <span
  m='2429910'>actually--</span> <span m='2430640'>but</span> <span
  m='2431350'>I</span> <span m='2431450'>will</span> <span m='2431780'>in</span>
  <span m='2431860'>a</span> <span m='2431900'>moment.</span> <span
  m='2432330'>That's</span> <span m='2432550'>another</span> <span
  m='2432820'>topic.</span> <span m='2434110'>But</span> <span
  m='2434250'>I'd</span> <span m='2434490'>like</span> <span
  m='2434750'>to</span> <span m='2434860'>bring</span> <span
  m='2435140'>that</span> <span m='2435350'>cloud</span> <span
  m='2435830'>somewhere.</span> <span m='2436210'>I</span> <span
  m='2436230'>want</span> <span m='2436420'>to</span> <span
  m='2436490'>put</span> <span m='2436630'>the</span> <span
  m='2436720'>cloud</span> <span m='2437030'>somewhere,</span> <span
  m='2437500'>want</span> <span m='2437660'>to</span> <span
  m='2437710'>put</span> <span m='2437860'>the</span> <span
  m='2437930'>heart</span> <span m='2438200'>somewhere.</span> </p><p><span
  m='2438970'>All right,</span> <span m='2439180'>so</span> <span
  m='2439330'>here's</span> <span m='2439600'>a</span> <span
  m='2439670'>way</span> <span m='2439830'>to</span> <span m='2440780'>do</span>
  <span m='2440940'>all</span> <span m='2441070'>that.</span> <span
  m='2442090'>Basically</span> <span m='2442440'>the</span> <span
  m='2442510'>same</span> <span m='2442760'>algorithm</span> <span
  m='2445030'>but</span> <span m='2452670'>I'm</span> <span
  m='2452780'>just</span> <span m='2452910'>going</span> <span m='2453010'>to
  use</span> <span m='2453210'>lists.</span> <span m='2458110'>Still</span>
  <span m='2458330'>have</span> <span m='2458500'>an</span> <span
  m='2458570'>array</span> <span m='2458900'>of</span> <span
  m='2459060'>k</span> <span m='2459430'>things</span> <span
  m='2459730'>but</span> <span m='2459880'>no</span> <span
  m='2459980'>longer</span> <span m='2460240'>counters,</span> <span
  m='2460700'>now</span> <span m='2460900'>lists.</span> <span
  m='2461290'>They</span> <span m='2461370'>could</span> <span
  m='2461560'>be</span> <span m='2461710'>linked</span> <span
  m='2461940'>lists,</span> <span m='2462220'>they</span> <span
  m='2462320'>could</span> <span m='2462470'>be</span> <span
  m='2462600'>python</span> <span m='2462960'>lists.</span> <span
  m='2463620'>It</span> <span m='2463730'>won't</span> <span
  m='2463910'>matter</span> <span m='2464300'>for</span> <span
  m='2464420'>my</span> <span m='2464590'>purposes.</span> </p><p><span
  m='2466230'>And</span> <span m='2466400'>then</span> <span
  m='2466740'>I'll</span> <span m='2466910'>say</span> <span
  m='2467380'>for</span> <span m='2469900'>j</span> <span m='2471280'>and</span>
  <span m='2472210'>range</span> <span m='2472610'>of</span> <span
  m='2473010'>n--</span> <span m='2474486'>that'd</span> <span
  m='2474940'>be</span> <span m='2475120'>super</span> <span
  m='2475490'>pythonic</span> <span m='2475980'>here--</span> <span
  m='2477110'>I</span> <span m='2477210'>want</span> <span m='2477390'>to</span>
  <span m='2477450'>look</span> <span m='2477690'>at</span> <span
  m='2477850'>the</span> <span m='2477950'>list</span> <span
  m='2479080'>who's</span> <span m='2479940'>at</span> <span
  m='2480170'>index</span> <span m='2481686'>a</span> <span
  m='2482110'>of</span> <span m='2482490'>j</span> <span m='2486140'>and</span>
  <span m='2486470'>append</span> <span m='2489285'>a of</span> <span
  m='2489744'>j.</span> <span m='2492500'>And</span> <span
  m='2492780'>then</span> <span m='2494460'>the</span> <span
  m='2494620'>output</span> <span m='2496536'>is</span> <span
  m='2497010'>going</span> <span m='2497150'>to</span> <span
  m='2497230'>be</span> <span m='2498420'>an</span> <span
  m='2498560'>empty</span> <span m='2498840'>list</span> <span
  m='2499390'>initially.</span> <span m='2503220'>And</span> <span
  m='2503380'>then</span> <span m='2503560'>I</span> <span
  m='2503700'>iterate</span> <span m='2504140'>through</span> <span
  m='2504350'>the</span> <span m='2504520'>array</span> <span
  m='2505310'>their</span> <span m='2505490'>k</span> <span
  m='2505820'>values</span> <span m='2506290'>for</span> <span
  m='2506400'>that,</span> <span m='2507600'>and</span> <span
  m='2507930'>I</span> <span m='2508000'>just</span> <span
  m='2508190'>say</span> <span m='2508480'>output,</span> <span
  m='2511130'>extend,</span> <span m='2514410'>list</span> <span
  m='2515890'>i.</span> </p><p><span m='2518170'>OK.</span> <span
  m='2518730'>This</span> <span m='2518910'>is</span> <span
  m='2519040'>counting</span> <span m='2519380'>sort</span> <span
  m='2520350'>or</span> <span m='2520530'>a</span> <span
  m='2520660'>version</span> <span m='2520990'>of</span> <span
  m='2521100'>counting</span> <span m='2521390'>sort.</span> <span
  m='2521560'>In</span> <span m='2521680'>your</span> <span
  m='2521830'>textbook,</span> <span m='2522280'>you'll</span> <span
  m='2522390'>find</span> <span m='2522580'>a</span> <span
  m='2522640'>different</span> <span m='2522980'>version</span> <span
  m='2523280'>which</span> <span m='2523440'>does</span> <span
  m='2523580'>not</span> <span m='2523800'>use</span> <span
  m='2524010'>lists,</span> <span m='2524710'>So</span> <span
  m='2524950'>it's</span> <span m='2525100'>probably</span> <span
  m='2525380'>more</span> <span m='2525530'>practical</span> <span
  m='2526090'>because</span> <span m='2526270'>it</span> <span
  m='2526370'>uses</span> <span m='2526650'>no</span> <span
  m='2526810'>data</span> <span m='2527040'>structures</span> <span
  m='2527400'>whatsoever</span> <span m='2527880'>except</span> <span
  m='2528640'>three</span> <span m='2529030'>arrays.</span> <span
  m='2530370'>But</span> <span m='2530850'>it</span> <span
  m='2531020'>runs</span> <span m='2531260'>in</span> <span
  m='2531320'>the</span> <span m='2531390'>same</span> <span
  m='2531540'>amount</span> <span m='2531740'>of</span> <span
  m='2531830'>time</span> <span m='2532110'>and</span> <span
  m='2532190'>this</span> <span m='2532350'>is</span> <span m='2532450'>a</span>
  <span m='2532510'>lot</span> <span m='2532720'>easier</span> <span
  m='2533360'>I</span> <span m='2533460'>think</span> <span
  m='2533770'>to</span> <span m='2533880'>think</span> <span
  m='2534050'>about.</span> <span m='2534370'>This</span> <span
  m='2534560'>is</span> <span m='2534630'>more</span> <span
  m='2536260'>modern</span> <span m='2536710'>perspective,</span> <span
  m='2537400'>if</span> <span m='2537810'>you</span> <span
  m='2537940'>well.</span> </p><p><span m='2538920'>For</span> <span
  m='2539130'>every</span> <span m='2539450'>item,</span> <span m='2540250'>if
  you'd</span> <span m='2540440'>look</span> <span m='2540620'>at</span> <span
  m='2540700'>them</span> <span m='2540890'>in</span> <span
  m='2540990'>the</span> <span m='2541070'>given</span> <span
  m='2541370'>order</span> <span m='2541690'>of</span> <span
  m='2541770'>your</span> <span m='2541990'>array,</span> <span
  m='2542810'>you</span> <span m='2542980'>see</span> <span
  m='2543200'>what</span> <span m='2543340'>it's</span> <span
  m='2543500'>key</span> <span m='2543730'>value</span> <span
  m='2544150'>is.</span> <span m='2544410'>Maybe</span> <span
  m='2544680'>that's</span> <span m='2544900'>not</span> <span
  m='2545100'>exactly</span> <span m='2545520'>the</span> <span
  m='2545620'>same</span> <span m='2545840'>as</span> <span
  m='2545930'>the</span> <span m='2546080'>item,</span> <span
  m='2546700'>so</span> <span m='2547290'>it</span> <span
  m='2547390'>could</span> <span m='2547530'>be</span> <span
  m='2547660'>key</span> <span m='2547890'>of</span> <span m='2547970'>x</span>
  <span m='2548180'>is</span> <span m='2548260'>just</span> <span
  m='2548450'>x.</span> <span m='2549330'>But</span> <span m='2549460'>you know
  in</span> <span m='2549710'>python</span> <span m='2550120'>sort,</span> <span
  m='2550420'>for</span> <span m='2550540'>example,</span> <span
  m='2550910'>you're</span> <span m='2551010'>given</span> <span
  m='2551360'>a</span> <span m='2551470'>key</span> <span
  m='2551710'>function.</span> <span m='2553500'>So</span> <span
  m='2553670'>you</span> <span m='2553810'>take</span> <span
  m='2554040'>that</span> <span m='2554120'>key value.</span> <span
  m='2554570'>The</span> <span m='2554670'>key</span> <span
  m='2554850'>is</span> <span m='2554960'>guaranteed</span> <span
  m='2555370'>to</span> <span m='2555430'>be</span> <span m='2555550'>an</span>
  <span m='2555610'>integer</span> <span m='2556010'>between</span> <span
  m='2556370'>0</span> <span m='2556630'>and</span> <span m='2556710'>k</span>
  <span m='2556840'>minus</span> <span m='2557140'>1,</span> <span
  m='2557430'>so</span> <span m='2557580'>you</span> <span
  m='2557710'>look</span> <span m='2558390'>at</span> <span
  m='2558640'>the</span> <span m='2558730'>list,</span> <span
  m='2559630'>that</span> <span m='2559940'>numbered</span> <span
  m='2560280'>list,</span> <span m='2561240'>and</span> <span
  m='2561390'>you</span> <span m='2561470'>just</span> <span
  m='2561720'>add</span> <span m='2561990'>this</span> <span
  m='2562170'>item</span> <span m='2562450'>to</span> <span
  m='2562560'>the</span> <span m='2562620'>list.</span> </p><p><span
  m='2564470'>OK.</span> <span m='2564820'>But</span> <span
  m='2564990'>the</span> <span m='2565110'>item</span> <span
  m='2565480'>is</span> <span m='2565570'>not</span> <span
  m='2565740'>just</span> <span m='2565900'>the</span> <span m='2565990'>key,
  it's</span> <span m='2566300'>everything--</span> <span
  m='2567060'>whatever</span> <span m='2567640'>that</span> <span
  m='2567860'>data</span> <span m='2568040'>structure</span> <span
  m='2568380'>is--</span> <span m='2569460'>and</span> <span
  m='2569610'>then</span> <span m='2569780'>you</span> <span
  m='2569890'>just</span> <span m='2570230'>go</span> <span
  m='2570370'>through</span> <span m='2570490'>the</span> <span
  m='2570600'>list</span> <span m='2570850'>and you</span> <span
  m='2570980'>concatenate</span> <span m='2571500'>them.</span> <span
  m='2573450'>OK.</span> <span m='2573920'>How</span> <span
  m='2574090'>long</span> <span m='2574340'>does</span> <span
  m='2574460'>this</span> <span m='2574630'>take?</span> <span
  m='2577480'>How</span> <span m='2577710'>long</span> <span m='2577880'>does
  this</span> <span m='2578080'>step</span> <span m='2578320'>take?</span> <span
  m='2581140'>N?</span> <span m='2581880'>Nope.</span> <span
  m='2583990'>Constant?</span> <span m='2584660'>Nope.</span> <span
  m='2586110'>OK.</span> <span m='2587500'>Look at</span> <span m='2587610'>all
  the</span> <span m='2587810'>actions.</span> <span m='2588345'>It's</span>
  <span m='2588760'>order</span> <span m='2588970'>k</span> <span
  m='2589200'>time.</span> <span m='2589650'>To</span> <span
  m='2589770'>create</span> <span m='2590060'>an</span> <span
  m='2590150'>empty</span> <span m='2590390'>list</span> <span
  m='2590590'>takes</span> <span m='2590810'>constant</span> <span
  m='2591170'>time.</span> <span m='2591390'>They're</span> <span
  m='2591560'>k</span> <span m='2591780'>of</span> <span
  m='2591890'>them.</span> <span m='2592600'>OK?</span> </p><p><span
  m='2594400'>How</span> <span m='2594690'>long</span> <span
  m='2595010'>does</span> <span m='2595370'>this</span> <span
  m='2595650'>step</span> <span m='2595950'>take,</span> <span
  m='2596190'>just</span> <span m='2596420'>the</span> <span
  m='2596520'>append?</span> <span m='2600330'>Constant?</span> <span
  m='2601130'>Good.</span> <span m='2602070'>Remember,</span> <span
  m='2602440'>append</span> <span m='2602720'>is</span> <span
  m='2602850'>constant</span> <span m='2603270'>time</span> <span
  m='2603630'>from</span> <span m='2603790'>the</span> <span
  m='2603870'>Python</span> <span m='2604240'>model</span> <span
  m='2605120'>or</span> <span m='2605550'>your</span> <span
  m='2605660'>favorite</span> <span m='2606030'>model,</span> <span
  m='2606650'>anything.</span> <span m='2607670'>We're</span> <span
  m='2607990'>assuming</span> <span m='2608400'>the</span> <span
  m='2608530'>key</span> <span m='2608750'>takes</span> <span
  m='2609010'>constant</span> <span m='2609340'>time</span> <span
  m='2609590'>because</span> <span m='2610820'>that's the</span> <span
  m='2611030'>word,</span> <span m='2612330'>so</span> <span
  m='2612560'>that's</span> <span m='2612740'>an</span> <span
  m='2612820'>assumption,</span> <span m='2613370'>but</span> <span
  m='2614130'>in</span> <span m='2614250'>the</span> <span
  m='2614470'>normal</span> <span m='2614780'>assumption.</span> </p><p><span
  m='2615900'>So</span> <span m='2616120'>total</span> <span
  m='2616390'>time</span> <span m='2616610'>here</span> <span
  m='2616930'>is</span> <span m='2617050'>order</span> <span
  m='2617300'>n.</span> <span m='2619640'>And</span> <span
  m='2620050'>this</span> <span m='2620270'>thing,</span> <span
  m='2621470'>well</span> <span m='2621660'>this</span> <span
  m='2621900'>takes</span> <span m='2622220'>basically</span> <span
  m='2623240'>the</span> <span m='2623360'>length</span> <span
  m='2623680'>of</span> <span m='2623800'>Li</span> <span
  m='2624240'>time.</span> <span m='2626360'>And</span> <span
  m='2626570'>so</span> <span m='2626710'>when</span> <span
  m='2626850'>you</span> <span m='2626980'>add</span> <span
  m='2627200'>it</span> <span m='2627310'>up,</span> <span
  m='2629150'>maybe</span> <span m='2629970'>plus</span> <span
  m='2630290'>1--</span> <span m='2631280'>because</span> <span
  m='2631500'>to</span> <span m='2631600'>look</span> <span
  m='2631760'>at</span> <span m='2631810'>an</span> <span
  m='2631910'>empty</span> <span m='2632170'>list</span> <span
  m='2632390'>you</span> <span m='2632470'>still</span> <span
  m='2632660'>need</span> <span m='2632800'>to</span> <span
  m='2632870'>look</span> <span m='2633110'>at</span> <span
  m='2633280'>it--</span> <span m='2634100'>so</span> <span
  m='2634260'>you</span> <span m='2634360'>add</span> <span
  m='2634550'>it</span> <span m='2634650'>up</span> <span m='2634950'>and</span>
  <span m='2635100'>you</span> <span m='2635200'>get</span> <span
  m='2635800'>order</span> <span m='2637520'>sum</span> <span
  m='2637850'>of</span> <span m='2637940'>all</span> <span
  m='2638130'>the</span> <span m='2638380'>Li's</span> <span
  m='2639110'>is</span> <span m='2639550'>all</span> <span
  m='2639770'>the</span> <span m='2639900'>items.</span> <span
  m='2640980'>And</span> <span m='2641120'>then</span> <span
  m='2641210'>you</span> <span m='2641290'>get</span> <span
  m='2641460'>plus</span> <span m='2641690'>1</span> <span
  m='2641870'>for</span> <span m='2641980'>each</span> <span
  m='2642130'>of</span> <span m='2642190'>them,</span> <span
  m='2642370'>so</span> <span m='2642500'>you</span> <span
  m='2642550'>get</span> <span m='2642710'>n</span> <span
  m='2642850'>plus</span> <span m='2643110'>k.</span> <span m='2643480'>n</span>
  <span m='2643850'>plus</span> <span m='2644080'>k</span> <span
  m='2644770'>is</span> <span m='2645020'>the</span> <span
  m='2645140'>running</span> <span m='2645380'>time</span> <span
  m='2645590'>of</span> <span m='2645640'>this</span> <span
  m='2645710'>algorithm.</span> </p><p><span m='2648050'>Add</span> <span
  m='2648340'>those</span> <span m='2648550'>up.</span> <span m='2650380'>OK,
  so</span> <span m='2650600'>counting</span> <span m='2650980'>sort</span>
  <span m='2651310'>is</span> <span m='2651550'>order</span> <span
  m='2651870'>n</span> <span m='2652060'>plus</span> <span m='2652350'>k.</span>
  <span m='2652610'>So</span> <span m='2652870'>if</span> <span
  m='2653150'>k</span> <span m='2653400'>happens</span> <span
  m='2653810'>to</span> <span m='2653930'>be</span> <span
  m='2654220'>order</span> <span m='2654540'>n,</span> <span
  m='2655170'>this</span> <span m='2655340'>is</span> <span
  m='2655470'>linear</span> <span m='2655800'>time.</span> <span
  m='2656870'>But</span> <span m='2656970'>as soon</span> <span
  m='2657160'>as</span> <span m='2657380'>it's</span> <span m='2657510'>a</span>
  <span m='2657550'>little</span> <span m='2657770'>bit</span> <span
  m='2657930'>bigger,</span> <span m='2658220'>you're</span> <span
  m='2658400'>in</span> <span m='2658490'>trouble.</span> <span
  m='2659890'>So</span> <span m='2659960'>counting</span> <span
  m='2660270'>sort's</span> <span m='2660620'>a</span> <span
  m='2660680'>good</span> <span m='2660830'>warm</span> <span
  m='2661090'>up,</span> <span m='2661370'>but</span> <span
  m='2661530'>it's</span> <span m='2661710'>not</span> <span
  m='2662100'>ultimately</span> <span m='2662640'>what</span> <span
  m='2662810'>we</span> <span m='2662910'>want.</span> </p><p><span
  m='2671060'>And</span> <span m='2671320'>a</span> <span
  m='2671360'>much</span> <span m='2671580'>cooler</span> <span
  m='2671970'>algorithm</span> <span m='2679300'>is</span> <span
  m='2679430'>called</span> <span m='2679710'>radix</span> <span
  m='2680020'>sort.</span> <span m='2685470'>It's</span> <span
  m='2685660'>going</span> <span m='2685780'>to</span> <span
  m='2685820'>use</span> <span m='2686170'>counting</span> <span
  m='2686520'>sort</span> <span m='2686590'>as</span> <span
  m='2686840'>the</span> <span m='2686940'>subroutine,</span> <span
  m='2687660'>which</span> <span m='2687800'>is</span> <span
  m='2687880'>why</span> <span m='2688070'>spent</span> <span
  m='2688380'>all</span> <span m='2688530'>this</span> <span
  m='2688690'>time</span> <span m='2689200'>on</span> <span m='2689430'>a</span>
  <span m='2689610'>mediocre</span> <span m='2690190'>algorithm.</span> <span
  m='2692150'>And</span> <span m='2692430'>it's</span> <span
  m='2692560'>going</span> <span m='2692700'>to</span> <span
  m='2692760'>get</span> <span m='2693220'>a</span> <span
  m='2693290'>much</span> <span m='2693570'>larger</span> <span
  m='2694080'>range</span> <span m='2694390'>of</span> <span
  m='2694490'>k</span> <span m='2696800'>and</span> <span m='2697080'>it</span>
  <span m='2697140'>will</span> <span m='2697250'>still</span> <span
  m='2697610'>be</span> <span m='2699200'>linear</span> <span
  m='2699560'>time.</span> <span m='2700740'>I'll</span> <span
  m='2701110'>tell</span> <span m='2701280'>you</span> <span
  m='2701390'>the</span> <span m='2701520'>answer.</span> </p><p><span
  m='2709040'>K</span> <span m='2709320'>can</span> <span m='2709540'>be</span>
  <span m='2709740'>polynomial</span> <span m='2710460'>in</span> <span
  m='2710630'>n.</span> <span m='2711850'>So</span> <span
  m='2712130'>like</span> <span m='2712390'>if</span> <span
  m='2712970'>all</span> <span m='2713270'>your</span> <span
  m='2713490'>integers</span> <span m='2713950'>are</span> <span
  m='2714030'>between</span> <span m='2714370'>0</span> <span
  m='2715090'>and</span> <span m='2715280'>n</span> <span m='2715460'>to</span>
  <span m='2715560'>the</span> <span m='2715640'>100,</span> <span
  m='2718000'>you</span> <span m='2718130'>can</span> <span
  m='2718260'>sort</span> <span m='2718530'>them</span> <span
  m='2718770'>in</span> <span m='2719460'>n</span> <span m='2719640'>lg n</span>
  <span m='2720030'>time.</span> <span m='2720800'>That's</span> <span
  m='2721040'>a</span> <span m='2721090'>lot</span> <span
  m='2721360'>bigger.</span> <span m='2722420'>It's</span> <span
  m='2722540'>not</span> <span m='2722670'>just</span> <span
  m='2722840'>like</span> <span m='2723340'>10</span> <span
  m='2723590'>n.</span> <span m='2724190'>I</span> <span m='2724280'>mean</span>
  <span m='2724410'>you</span> <span m='2724520'>could</span> <span
  m='2724630'>do</span> <span m='2724750'>10</span> <span m='2725000'>n</span>
  <span m='2725140'>here</span> <span m='2725410'>as well with</span> <span
  m='2725810'>counting</span> <span m='2726150'>sort.</span> </p><p><span
  m='2727470'>And</span> <span m='2727730'>it's</span> <span
  m='2728220'>not</span> <span m='2728430'>just</span> <span
  m='2728630'>like</span> <span m='2728820'>n</span> <span m='2728960'>lg</span>
  <span m='2729210'>n,</span> <span m='2729360'>but</span> <span
  m='2729800'>they</span> <span m='2729940'>can</span> <span
  m='2730050'>go</span> <span m='2730140'>all</span> <span
  m='2730310'>the</span> <span m='2730360'>way</span> <span
  m='2730480'>to</span> <span m='2730620'>n</span> <span m='2730840'>to
  the</span> <span m='2731050'>100,</span> <span m='2733200'>still</span> <span
  m='2733460'>be</span> <span m='2733590'>linear</span> <span
  m='2733900'>time.</span> <span m='2734760'>So</span> <span
  m='2736020'>that's</span> <span m='2736140'>what we're</span> <span
  m='2736260'>going</span> <span m='2736360'>to</span> <span
  m='2736400'>achieve.</span> <span m='2738290'>The</span> <span
  m='2738400'>idea</span> <span m='2738690'>of radix</span> <span
  m='2738960'>sort</span> <span m='2739230'>is</span> <span
  m='2739340'>simple.</span> <span m='2741330'>It's</span> <span
  m='2741750'>actually</span> <span m='2742110'>kind</span> <span
  m='2742320'>of</span> <span m='2742470'>the</span> <span
  m='2742970'>Excel</span> <span m='2743390'>spreadsheet</span> <span
  m='2743900'>approach.</span> <span m='2744820'>We're</span> <span
  m='2744920'>going</span> <span m='2745210'>to</span> <span
  m='2745840'>imagine</span> <span m='2749040'>we</span> <span
  m='2749150'>want</span> <span m='2749320'>to</span> <span
  m='2749360'>break</span> <span m='2749730'>each</span> <span
  m='2749970'>integer</span> <span m='2750460'>into</span> <span
  m='2750600'>a</span> <span m='2750760'>bunch</span> <span
  m='2751050'>of</span> <span m='2751150'>columns.</span> <span
  m='2763530'>How</span> <span m='2763590'>do</span> <span m='2763670'>we</span>
  <span m='2763760'>do</span> <span m='2763920'>that?</span> <span
  m='2764910'>Well,</span> <span m='2765000'>the</span> <span
  m='2765090'>way</span> <span m='2765240'>we</span> <span
  m='2765370'>normally</span> <span m='2765740'>write</span> <span
  m='2765980'>down</span> <span m='2766180'>numbers,</span> <span
  m='2767050'>except</span> <span m='2767420'>not</span> <span
  m='2767580'>necessarily</span> <span m='2767970'>in</span> <span
  m='2768060'>decimal,</span> <span m='2768890'>in</span> <span
  m='2769030'>some</span> <span m='2769260'>arbitrary</span> <span
  m='2769700'>base</span> <span m='2770040'>b.</span> <span
  m='2771280'>So</span> <span m='2771470'>I</span> <span m='2771610'>say,</span>
  <span m='2771850'>oh,</span> <span m='2772090'>an integer</span> <span
  m='2772460'>in base</span> <span m='2772730'>b.</span> <span
  m='2772960'>Well</span> <span m='2773110'>then</span> <span
  m='2773320'>there's</span> <span m='2773620'>the</span> <span
  m='2773820'>least</span> <span m='2774030'>significant</span> <span
  m='2774530'>digit</span> <span m='2775010'>and then</span> <span
  m='2775180'>the</span> <span m='2775360'>next</span> <span
  m='2775620'>one</span> <span m='2775780'>and</span> <span
  m='2775840'>the</span> <span m='2775920'>next</span> <span m='2776170'>one and
  the</span> <span m='2776360'>next</span> <span m='2776580'>one,</span> <span
  m='2776680'>some</span> <span m='2776850'>sequence</span> <span
  m='2777250'>of</span> <span m='2777330'>digits.</span> <span
  m='2778720'>And</span> <span m='2778890'>if</span> <span m='2779020'>I</span>
  <span m='2779090'>know</span> <span m='2779530'>that</span> <span
  m='2779760'>the</span> <span m='2779850'>maximum</span> <span
  m='2780340'>value</span> <span m='2780670'>is</span> <span
  m='2780830'>k,</span> <span m='2782560'>I</span> <span m='2782950'>know</span>
  <span m='2783220'>that the</span> <span m='2783530'>number</span> <span
  m='2783930'>of</span> <span m='2784020'>digits,</span> <span
  m='2785490'>which</span> <span m='2785720'>I'm</span> <span
  m='2785820'>going</span> <span m='2786030'>to</span> <span
  m='2786100'>call--</span> <span m='2786850'>for</span> <span
  m='2786950'>each</span> <span m='2787270'>number</span> <span
  m='2788120'>which I'm</span> <span m='2788210'>going</span> <span
  m='2788310'>to</span> <span m='2788390'>call</span> <span
  m='2788630'>d,</span> <span m='2790080'>is</span> <span
  m='2790380'>just</span> <span m='2790570'>lg</span> <span
  m='2791180'>base</span> <span m='2791600'>b</span> <span m='2792080'>of</span>
  <span m='2792560'>k</span> <span m='2795300'>plus</span> <span
  m='2795500'>one,</span> <span m='2796020'>whatever.</span> </p><p><span
  m='2797511'>We've got</span> <span m='2798010'>to</span> <span
  m='2798120'>be</span> <span m='2798230'>super</span> <span
  m='2798510'>precise</span> <span m='2798950'>here</span> <span
  m='2800410'>because</span> <span m='2800810'>if</span> <span
  m='2800960'>I'm</span> <span m='2801100'>in</span> <span
  m='2801180'>base</span> <span m='2801420'>b</span> <span
  m='2801600'>then</span> <span m='2801900'>that's</span> <span
  m='2802090'>what</span> <span m='2802190'>lg</span> <span
  m='2802590'>is,</span> <span m='2803060'>right?</span> <span
  m='2804210'>So</span> <span m='2804340'>normally</span> <span m='2804670'>we
  think</span> <span m='2804860'>of</span> <span m='2804950'>lg</span> <span
  m='2805140'>base</span> <span m='2805350'>2</span> <span
  m='2805520'>because</span> <span m='2805710'>we're writing</span> <span
  m='2805970'>things</span> <span m='2806170'>in</span> <span
  m='2806220'>binary.</span> <span m='2807460'>Computer</span> <span
  m='2807760'>scientists</span> <span m='2808280'>normally</span> <span
  m='2808490'>think</span> <span m='2808640'>that</span> <span
  m='2808810'>way.</span> <span m='2810450'>And</span> <span
  m='2811080'>fine,</span> <span m='2811480'>so</span> <span
  m='2811620'>now</span> <span m='2811810'>we</span> <span
  m='2812100'>decomposed</span> <span m='2812630'>our</span> <span
  m='2812740'>integer.</span> </p><p><span m='2812980'>I'm</span> <span
  m='2813090'>not</span> <span m='2813240'>going</span> <span
  m='2813340'>to</span> <span m='2813380'>actually</span> <span
  m='2813740'>compute</span> <span m='2814320'>this</span> <span
  m='2814510'>base</span> <span m='2814740'>b</span> <span
  m='2814880'>representation,</span> <span m='2815630'>because</span> <span
  m='2815900'>it</span> <span m='2815970'>would</span> <span
  m='2816130'>take</span> <span m='2816890'>a</span> <span
  m='2817000'>long</span> <span m='2817290'>time.</span> <span
  m='2817730'>I'd</span> <span m='2817800'>have</span> <span
  m='2817970'>to</span> <span m='2818070'>spend</span> <span
  m='2819590'>n</span> <span m='2819900'>times</span> <span
  m='2820210'>lg</span> <span m='2820560'>k</span> <span m='2820930'>time</span>
  <span m='2821310'>to</span> <span m='2821390'>do</span> <span
  m='2821540'>that.</span> <span m='2821780'>I don't</span> <span
  m='2821900'>want</span> <span m='2822090'>to</span> <span
  m='2822140'>do</span> <span m='2822280'>that.</span> </p><p><span
  m='2823830'>OK,</span> <span m='2824190'>but</span> <span
  m='2824640'>just</span> <span m='2824820'>imagine</span> <span
  m='2825220'>it</span> <span m='2825330'>that</span> <span
  m='2825510'>way.</span> <span m='2826950'>And</span> <span
  m='2827000'>then</span> <span m='2827080'>the</span> <span
  m='2827335'>algorithm</span> <span m='2827590'>as</span> <span
  m='2827880'>follows,</span> <span m='2828980'>sort</span> <span
  m='2830500'>the</span> <span m='2830630'>integers,</span> <span
  m='2831570'>all</span> <span m='2831810'>of</span> <span
  m='2831900'>them,</span> <span m='2833200'>by</span> <span
  m='2834070'>the</span> <span m='2834210'>least</span> <span
  m='2834530'>significant</span> <span m='2835080'>digit.</span> <span
  m='2840540'>Sort</span> <span m='2840880'>by</span> <span
  m='2841040'>the</span> <span m='2841170'>next</span> <span
  m='2841450'>least</span> <span m='2841600'>significant</span> <span
  m='2842020'>digit.</span> <span m='2842400'>Dot,</span> <span
  m='2842640'>dot,</span> <span m='2843030'>dot,</span> <span
  m='2843810'>sort</span> <span m='2844200'>by</span> <span
  m='2845580'>the</span> <span m='2845660'>most</span> <span
  m='2845890'>significant</span> <span m='2846410'>digit.</span> <span
  m='2849000'>So</span> <span m='2849140'>there</span> <span
  m='2849440'>are</span> <span m='2850170'>d</span> <span
  m='2850550'>iterations</span> <span m='2851020'>here,</span> <span
  m='2851880'>for</span> <span m='2852030'>d</span> <span
  m='2852210'>digits.</span> <span m='2853460'>Sort</span> <span
  m='2853790'>all</span> <span m='2854060'>the</span> <span
  m='2854140'>integers</span> <span m='2854730'>by</span> <span
  m='2854870'>the</span> <span m='2854970'>least</span> <span
  m='2855340'>significant,</span> <span m='2855570'>all</span> <span
  m='2855820'>the</span> <span m='2855920'>integers</span> <span
  m='2856340'>by</span> <span m='2856510'>the</span> <span
  m='2856600'>next,</span> <span m='2857030'>and</span> <span
  m='2857150'>so</span> <span m='2857280'>on.</span> </p><p><span
  m='2859010'>It's</span> <span m='2859350'>like</span> <span
  m='2859580'>in</span> <span m='2859820'>your--</span> <span
  m='2860440'>this</span> <span m='2860630'>is</span> <span m='2860670'>a</span>
  <span m='2860720'>useful</span> <span m='2860980'>technique</span> <span
  m='2861320'>in</span> <span m='2861400'>Excel,</span> <span
  m='2861670'>if</span> <span m='2861940'>you</span> <span
  m='2862060'>want</span> <span m='2862150'>to</span> <span
  m='2862200'>sort</span> <span m='2862450'>by</span> <span
  m='2862570'>several</span> <span m='2862920'>columns--</span> <span
  m='2863830'>or</span> <span m='2864020'>your</span> <span
  m='2864150'>favorite</span> <span m='2864490'>spreadsheet,</span> <span
  m='2865150'>doesn't</span> <span m='2865580'>have to be</span> <span
  m='2865740'>Excel,</span> <span m='2866030'>sorry--</span> <span
  m='2867230'>you</span> <span m='2868150'>click</span> <span
  m='2868420'>on</span> <span m='2868620'>the</span> <span
  m='2868780'>least</span> <span m='2869040'>significant</span> <span
  m='2869420'>column</span> <span m='2869720'>first,</span> <span
  m='2870480'>and</span> <span m='2870670'>then</span> <span
  m='2870810'>click</span> <span m='2871030'>on</span> <span m='2871220'>all
  the</span> <span m='2871310'>other</span> <span m='2871470'>columns</span>
  <span m='2871810'>in</span> <span m='2871960'>increasing</span> <span
  m='2872440'>order,</span> <span m='2873130'>you</span> <span
  m='2873270'>will</span> <span m='2873440'>sort</span> <span
  m='2873840'>by</span> <span m='2874010'>all</span> <span m='2874260'>of</span>
  <span m='2874370'>them,</span> <span m='2874840'>it</span> <span
  m='2874960'>turns</span> <span m='2875240'>out.</span> <span
  m='2875550'>It's</span> <span m='2875820'>kind</span> <span
  m='2876050'>of</span> <span m='2876110'>magical</span> <span
  m='2876480'>that</span> <span m='2876850'>this</span> <span
  m='2877140'>works.</span> </p><p><span m='2880512'>I</span> <span
  m='2880980'>don't</span> <span m='2881170'>have</span> <span
  m='2881370'>a</span> <span m='2881450'>ton</span> <span m='2881660'>of</span>
  <span m='2881730'>time</span> <span m='2881960'>for an</span> <span
  m='2882080'>example.</span> <span m='2883030'>Let</span> <span
  m='2883190'>me</span> <span m='2883400'>first</span> <span
  m='2883740'>analyze</span> <span m='2884180'>the</span> <span
  m='2884280'>algorithm.</span> <span m='2884660'>We'll</span> <span
  m='2884770'>see</span> <span m='2884920'>if</span> <span m='2885060'>we</span>
  <span m='2885140'>have</span> <span m='2885260'>time</span> <span
  m='2885470'>for an</span> <span m='2885590'>example.</span> <span
  m='2887160'>So</span> <span m='2889190'>there are</span> <span
  m='2889445'>d</span> <span m='2889700'>digits--</span> <span
  m='2891600'>oh,</span> <span m='2891920'>and</span> <span
  m='2892130'>I'm</span> <span m='2892240'>going</span> <span
  m='2892510'>to</span> <span m='2892710'>sort</span> <span
  m='2895570'>each</span> <span m='2895780'>of</span> <span
  m='2895870'>these</span> <span m='2896050'>sorts</span> <span
  m='2897290'>of</span> <span m='2897450'>using</span> <span
  m='2897770'>counting</span> <span m='2898230'>sort.</span> <span
  m='2907450'>This</span> <span m='2907650'>is</span> <span m='2907820'>I</span>
  <span m='2907880'>guess</span> <span m='2908060'>sort</span> <span
  m='2908370'>by</span> <span m='2908520'>digit</span> <span
  m='2912190'>using</span> <span m='2912330'>counting</span> <span
  m='2912670'>sort.</span> </p><p><span m='2913500'>So</span> <span
  m='2913680'>how</span> <span m='2913950'>long</span> <span
  m='2914400'>does</span> <span m='2914590'>it</span> <span
  m='2914720'>take</span> <span m='2915120'>to</span> <span
  m='2915230'>sort</span> <span m='2915550'>using</span> <span
  m='2915820'>counting</span> <span m='2916220'>sort</span> <span
  m='2916530'>in</span> <span m='2916650'>this</span> <span
  m='2916890'>setting?</span> <span m='2923310'>Normally,</span> <span
  m='2923630'>it's</span> <span m='2923950'>n</span> <span
  m='2924200'>plus</span> <span m='2924430'>k.</span> <span
  m='2928510'>Here</span> <span m='2928810'>it</span> <span
  m='2928870'>is,</span> <span m='2930840'>n</span> <span
  m='2931060'>plus</span> <span m='2931270'>b.</span> <span
  m='2931890'>Good.</span> <span m='2937300'>Because</span> <span
  m='2937810'>all</span> <span m='2938050'>of</span> <span
  m='2938160'>our</span> <span m='2938260'>digits</span> <span
  m='2938740'>are</span> <span m='2938840'>between</span> <span
  m='2939190'>0</span> <span m='2939640'>and</span> <span m='2939790'>b</span>
  <span m='2939930'>minus</span> <span m='2940250'>1.</span> <span
  m='2941550'>So</span> <span m='2941750'>we're</span> <span
  m='2941860'>just</span> <span m='2942080'>sorting</span> <span
  m='2942410'>by</span> <span m='2942800'>digit.</span> </p><p><span
  m='2943230'>Now</span> <span m='2943270'>here</span> <span
  m='2943930'>is</span> <span m='2944080'>where</span> <span
  m='2944230'>we're</span> <span m='2944320'>using</span> <span
  m='2944630'>this</span> <span m='2944800'>idea</span> <span
  m='2945090'>of</span> <span m='2945150'>a</span> <span m='2945230'>key.</span>
  <span m='2946430'>When</span> <span m='2946590'>we</span> <span
  m='2946710'>say</span> <span m='2946950'>key,</span> <span
  m='2947730'>I</span> <span m='2947820'>wanted</span> <span
  m='2948050'>our</span> <span m='2948200'>integers.</span> <span
  m='2948710'>What</span> <span m='2948960'>we</span> <span
  m='2949090'>do</span> <span m='2949720'>is</span> <span
  m='2949900'>compute</span> <span m='2951020'>the</span> <span
  m='2951130'>digit</span> <span m='2951410'>we</span> <span
  m='2951520'>care</span> <span m='2951760'>about.</span> <span
  m='2952330'>So</span> <span m='2952410'>if</span> <span
  m='2952500'>we're</span> <span m='2952670'>in</span> <span
  m='2952760'>this</span> <span m='2953170'>step,</span> <span
  m='2954450'>the</span> <span m='2954540'>key</span> <span
  m='2954900'>function</span> <span m='2955350'>will</span> <span
  m='2955490'>be</span> <span m='2955960'>compute</span> <span
  m='2956300'>the</span> <span m='2956380'>least</span> <span
  m='2956600'>significant</span> <span m='2957060'>digit,</span> <span
  m='2957450'>which</span> <span m='2957530'>is</span> <span
  m='2957640'>like</span> <span m='2957820'>taking</span> <span
  m='2958270'>it</span> <span m='2958440'>mod</span> <span m='2958910'>b</span>
  <span m='2959990'>to</span> <span m='2960210'>compute</span> <span
  m='2960680'>the</span> <span m='2960800'>most</span> <span
  m='2961070'>significant</span> <span m='2961560'>digits</span> <span
  m='2961960'>like</span> <span m='2962180'>dividing</span> <span
  m='2962730'>by</span> <span m='2964330'>b</span> <span m='2964760'>to</span>
  <span m='2964900'>the</span> <span m='2965070'>power</span> <span
  m='2965385'>of</span> <span m='2965700'>d</span> <span
  m='2966150'>minus</span> <span m='2966580'>1</span> <span
  m='2966940'>or</span> <span m='2967080'>so.</span> </p><p><span
  m='2968450'>OK</span> <span m='2968790'>but</span> <span
  m='2968900'>it's</span> <span m='2969020'>a</span> <span
  m='2969080'>constant.</span> <span m='2969670'>You</span> <span
  m='2969780'>do</span> <span m='2970000'>one</span> <span
  m='2970260'>divide</span> <span m='2970700'>and</span> <span
  m='2970840'>one</span> <span m='2971050'>mod,</span> <span
  m='2971830'>the</span> <span m='2971930'>constant</span> <span
  m='2972190'>number</span> <span m='2972450'>of</span> <span
  m='2972590'>operations.</span> <span m='2973570'>You</span> <span
  m='2973700'>can</span> <span m='2973810'>extract</span> <span
  m='2974200'>the</span> <span m='2974290'>digit</span> <span
  m='2974570'>in</span> <span m='2974680'>constant</span> <span
  m='2975090'>time.</span> <span m='2975430'>So</span> <span
  m='2975610'>the</span> <span m='2975790'>key</span> <span m='2976030'>function
  is</span> <span m='2976530'>constant</span> <span m='2976920'>time</span>
  <span m='2977610'>and</span> <span m='2977750'>so</span> <span
  m='2977860'>this</span> <span m='2978030'>works.</span> <span
  m='2978630'>We</span> <span m='2978720'>don't</span> <span
  m='2978840'>have</span> <span m='2978990'>to</span> <span
  m='2979080'>actually</span> <span m='2979690'>write</span> <span
  m='2979930'>them</span> <span m='2980060'>all</span> <span
  m='2980180'>down,</span> <span m='2981210'>just</span> <span
  m='2981390'>compute</span> <span m='2981720'>them</span> <span
  m='2982580'>as</span> <span m='2982860'>we</span> <span
  m='2982990'>need</span> <span m='2983170'>them.</span> </p><p><span
  m='2984930'>Cool</span> <span m='2985310'>I</span> <span
  m='2985430'>guess</span> <span m='2985610'>we</span> <span
  m='2985690'>could</span> <span m='2985910'>compute</span> <span
  m='2986250'>them</span> <span m='2986420'>ahead</span> <span
  m='2986580'>of</span> <span m='2986680'>time.</span> <span
  m='2986980'>It's</span> <span m='2987120'>not</span> <span
  m='2987250'>a</span> <span m='2987280'>big</span> <span
  m='2987450'>deal.</span> <span m='2989680'>Fine.</span> <span
  m='2991370'>So</span> <span m='2991510'>that's</span> <span
  m='2991810'>each</span> <span m='2992120'>digit.</span> <span
  m='2992890'>So</span> <span m='2993320'>the</span> <span
  m='2993450'>total</span> <span m='2993760'>time</span> <span
  m='2995190'>is</span> <span m='2995370'>just</span> <span
  m='2995640'>that</span> <span m='2996160'>times</span> <span
  m='2997140'>d</span> <span m='2997490'>because</span> <span m='2997840'>we
  have</span> <span m='2998190'>d</span> <span m='2998550'>steps.</span> <span
  m='2999400'>So</span> <span m='2999890'>it's</span> <span m='3000110'>n</span>
  <span m='3000440'>plus</span> <span m='3000840'>b</span> <span
  m='3001630'>times</span> <span m='3002170'>d.</span> <span
  m='3003094'>Now</span> <span m='3003556'>d</span> <span m='3004726'>was</span>
  <span m='3005080'>that</span> <span m='3005260'>lg</span> <span
  m='3005660'>thing,</span> <span m='3006880'>lg</span> <span
  m='3007650'>base</span> <span m='3008400'>b</span> <span m='3008870'>of</span>
  <span m='3009370'>n.</span> <span m='3009840'>I</span> <span
  m='3009900'>have</span> <span m='3010040'>this</span> <span
  m='3010370'>b.</span> <span m='3011030'>What</span> <span
  m='3011350'>should</span> <span m='3011550'>be</span> <span
  m='3011900'>b?</span> <span m='3014840'>You gotta</span> <span
  m='3015330'>love</span> <span m='3015440'>the</span> <span
  m='3015510'>English</span> <span m='3015760'>language.</span> </p><p><span
  m='3017240'>What</span> <span m='3017460'>should</span> <span
  m='3017630'>I</span> <span m='3017710'>choose</span> <span
  m='3018020'>b</span> <span m='3018570'>to</span> <span m='3019360'>be,</span>
  <span m='3020430'>or</span> <span m='3020560'>not</span> <span
  m='3020750'>to</span> <span m='3020890'>be?</span> <span
  m='3022510'>That's</span> <span m='3022750'>the</span> <span
  m='3022830'>question.</span> <span m='3023900'>Any</span> <span
  m='3024040'>suggestions?</span> <span m='3025360'>I</span> <span
  m='3025450'>want</span> <span m='3025650'>to</span> <span
  m='3025700'>minimize</span> <span m='3026310'>this,</span> <span
  m='3026520'>right?</span> <span m='3026670'>I</span> <span
  m='3026730'>want</span> <span m='3026940'>minimum</span> <span
  m='3027450'>running</span> <span m='3027740'>time.</span> <span
  m='3028760'>So</span> <span m='3028880'>I'd</span> <span
  m='3028980'>like</span> <span m='3029250'>b</span> <span m='3029420'>to</span>
  <span m='3029510'>kind</span> <span m='3029840'>of</span> <span
  m='3029910'>large</span> <span m='3030390'>to</span> <span
  m='3030510'>make</span> <span m='3030680'>this</span> <span
  m='3030830'>base</span> <span m='3031330'>large.</span> <span
  m='3032450'>Sorry,</span> <span m='3032640'>this</span> <span
  m='3032800'>is</span> <span m='3032890'>not</span> <span m='3033100'>n,</span>
  <span m='3033400'>this</span> <span m='3033590'>is</span> <span
  m='3033740'>k.</span> <span m='3035165'>I</span> <span
  m='3035600'>copied</span> <span m='3035920'>that</span> <span
  m='3036130'>wrong</span> <span m='3036490'>out</span> <span
  m='3036630'>of</span> <span m='3036730'>excitement.</span> <span
  m='3037830'>Just</span> <span m='3038170'>copying</span> <span
  m='3038540'>this</span> <span m='3038650'>over.</span> </p><p><span
  m='3040430'>OK,</span> <span m='3040540'>I'd like</span> <span m='3040930'>b
  to</span> <span m='3041010'>be</span> <span m='3041180'>large,</span> <span
  m='3041630'>but</span> <span m='3041790'>I</span> <span
  m='3041840'>don't</span> <span m='3041980'>want it</span> <span
  m='3042310'>to</span> <span m='3042390'>be</span> <span m='3042530'>so</span>
  <span m='3042810'>large</span> <span m='3043310'>because</span> <span
  m='3043930'>I</span> <span m='3044100'>don't</span> <span
  m='3044230'>want</span> <span m='3044410'>it to</span> <span
  m='3044500'>be</span> <span m='3045180'>bigger</span> <span
  m='3045370'>than</span> <span m='3045530'>n</span> <span m='3045770'>so
  what</span> <span m='3046010'>should I</span> <span m='3046060'>set</span>
  <span m='3046290'>b</span> <span m='3046430'>to</span> <span
  m='3046500'>be?</span> </p><p><span m='3046890'>AUDIENCE: N.</span>
  </p><p><span m='3047710'>PROFESSOR: N,</span> <span m='3048320'>good</span>
  <span m='3048550'>choice.</span> <span m='3049510'>It's</span> <span
  m='3049610'>a</span> <span m='3049670'>good</span> <span
  m='3049870'>trick</span> <span m='3050780'>whenever</span> <span
  m='3051090'>you</span> <span m='3051200'>have</span> <span m='3051380'>a
  sum</span> <span m='3051720'>of</span> <span m='3051830'>things</span> <span
  m='3052080'>you</span> <span m='3052150'>want</span> <span
  m='3052290'>to</span> <span m='3052330'>minimize,</span> <span
  m='3052960'>usually</span> <span m='3053420'>it's</span> <span
  m='3053530'>when</span> <span m='3053660'>they're</span> <span
  m='3053830'>equal.</span> <span m='3055230'>Occasionally</span> <span
  m='3055690'>it's</span> <span m='3055820'>the</span> <span
  m='3056520'>extreme</span> <span m='3056970'>like</span> <span
  m='3057170'>when</span> <span m='3057290'>b</span> <span m='3057520'>is</span>
  <span m='3057860'>0</span> <span m='3058200'>or something.</span> <span
  m='3058700'>B as</span> <span m='3058900'>0</span> <span
  m='3059210'>not</span> <span m='3059490'>a</span> <span
  m='3059530'>good</span> <span m='3059680'>plan.</span> <span
  m='3060700'>Base</span> <span m='3060950'>0</span> <span m='3061740'>is</span>
  <span m='3062270'>pretty</span> <span m='3062720'>slow.</span> </p><p><span
  m='3065220'>So</span> <span m='3065440'>if</span> <span m='3065680'>I</span>
  <span m='3065790'>set--</span> <span m='3067540'>I'll</span> <span
  m='3067640'>write it</span> <span m='3068050'>here--</span> <span
  m='3068640'>you</span> <span m='3068790'>can prove</span> <span
  m='3069230'>it</span> <span m='3069340'>with</span> <span m='3069550'>a</span>
  <span m='3069660'>derivative</span> <span m='3070240'>or</span> <span
  m='3070300'>whatever.</span> <span m='3070970'>This is</span> <span
  m='3071180'>going</span> <span m='3071330'>to</span> <span
  m='3071400'>be</span> <span m='3071540'>minimized</span> <span
  m='3072540'>when</span> <span m='3073990'>b</span> <span
  m='3074720'>is--</span> <span m='3075210'>I'll</span> <span
  m='3075350'>be</span> <span m='3076080'>vague--</span> <span
  m='3076700'>theta</span> <span m='3077010'>n.</span> <span
  m='3078980'>So</span> <span m='3079200'>then</span> <span
  m='3079920'>it's</span> <span m='3080120'>going</span> <span
  m='3080230'>to</span> <span m='3080300'>come</span> <span
  m='3080540'>out</span> <span m='3080790'>to</span> <span m='3081230'>n</span>
  <span m='3082170'>times</span> <span m='3082540'>lg</span> <span
  m='3083610'>base</span> <span m='3083810'>n</span> <span m='3085060'>of</span>
  <span m='3085250'>k.</span> <span m='3086990'>And</span> <span
  m='3087140'>lo</span> <span m='3087350'>and</span> <span
  m='3087450'>behold,</span> <span m='3088510'>when</span> <span
  m='3088770'>k</span> <span m='3089160'>is</span> <span
  m='3089390'>polynomial</span> <span m='3090240'>in</span> <span
  m='3090360'>n,</span> <span m='3091370'>it's</span> <span m='3091530'>k</span>
  <span m='3091760'>to</span> <span m='3091870'>some</span> <span
  m='3092130'>constant,</span> <span m='3093750'>then</span> <span
  m='3094060'>that</span> <span m='3094320'>will</span> <span
  m='3094450'>be</span> <span m='3094700'>linear.</span> </p><p><span
  m='3096920'>So</span> <span m='3097200'>let</span> <span m='3097380'>me</span>
  <span m='3097670'>write</span> <span m='3097910'>that.</span> <span
  m='3098530'>If</span> <span m='3099290'>k</span> <span
  m='3100320'>equals</span> <span m='3100770'>n</span> <span
  m='3101010'>to</span> <span m='3101160'>the</span> <span m='3101280'>c,</span>
  <span m='3104120'>or</span> <span m='3104350'>say</span> <span
  m='3104590'>is</span> <span m='3104660'>at</span> <span
  m='3104780'>most</span> <span m='3105140'>n</span> <span m='3105380'>to
  the</span> <span m='3105500'>c,</span> <span m='3106670'>then</span> <span
  m='3107060'>this</span> <span m='3107220'>is</span> <span
  m='3107330'>going</span> <span m='3107470'>to</span> <span
  m='3107540'>be</span> <span m='3107720'>order</span> <span
  m='3108470'>n</span> <span m='3108810'>times</span> <span
  m='3109160'>c.</span> <span m='3110660'>So</span> <span m='3110860'>if</span>
  <span m='3111100'>your</span> <span m='3111290'>integers</span> <span
  m='3111690'>are</span> <span m='3111780'>reasonably</span> <span
  m='3112240'>small,</span> <span m='3113070'>you</span> <span
  m='3113160'>get</span> <span m='3113280'>a</span> <span
  m='3113350'>linear</span> <span m='3113780'>time</span> <span
  m='3114070'>sorting</span> <span m='3114440'>algorithm.</span> <span
  m='3114920'>And</span> <span m='3115030'>reasonably</span> <span
  m='3115470'>small</span> <span m='3115800'>means</span> <span
  m='3116130'>polynomial</span> <span m='3117150'>in n,</span> <span
  m='3117590'>in</span> <span m='3118030'>value.</span> <span
  m='3119550'>That's</span> <span m='3119750'>kind</span> <span
  m='3119910'>of</span> <span m='3119970'>cool.</span> <span
  m='3120810'>That's</span> <span m='3121040'>radix</span> <span
  m='3121230'>sort.</span> <span m='3122100'>And</span> <span
  m='3122220'>we're</span> <span m='3122360'>out</span> <span
  m='3122450'>of</span> <span m='3122540'>time.</span> <span
  m='3122740'>There's</span> <span m='3122900'>an</span> <span
  m='3122970'>example</span> <span m='3123450'>in the</span> <span
  m='3123530'>textbook</span> <span m='3124000'>or in</span> <span
  m='3124080'>the</span> <span m='3124220'>notes</span> <span
  m='3124500'>how</span> <span m='3124680'>this</span> <span
  m='3124830'>works.</span> <span m='3125700'>You</span> <span
  m='3125800'>could</span> <span m='3125940'>prove</span> <span
  m='3126140'>it</span> <span m='3126240'>by</span> <span m='3126370'>a</span>
  <span m='3126430'>simple</span> <span m='3126710'>induction.</span> </p>
embedded_media:
  - uid: c21927b263b7df3827938d9870a9de01
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Nz1KZXbghj8
  - uid: 1ca31a5710ace62d0689492d1b7344c1
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Nz1KZXbghj8/default.jpg'
  - uid: be699f5498010b60ba791b5953c86277
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-7-counting-sort-radix/id585700718?i=126127758
  - uid: 02fa9a11ee2e3e9d2dbf48f8c9997d14
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec07_300k.mp4'
  - uid: f110e7c788ab040653001805ee525f90
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Nz1KZXbghj8
  - uid: 77440e3ce530640ddea4956b07ed4242
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Nz1KZXbghj8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-7-counting-sort-radix-sort-lower-bounds-for-sorting/Nz1KZXbghj8.srt
  - uid: 7392afcfcced991eeb067c822e9ace04
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Nz1KZXbghj8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-7-counting-sort-radix-sort-lower-bounds-for-sorting/Nz1KZXbghj8.pdf
  - uid: 7ef2d6918f66239682f09a41b6757f17
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: c8b6a07af45abdd8f3234b15b97ea3ec
    parent_uid: c720373a9599a4cb1547793b17590b77
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
