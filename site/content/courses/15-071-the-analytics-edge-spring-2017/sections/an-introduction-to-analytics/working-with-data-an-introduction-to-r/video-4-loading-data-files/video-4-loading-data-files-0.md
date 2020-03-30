---
title: 'Video 4: Loading Data Files'
uid: 32985d653926f77987ee22cd46589384
parent_uid: 70fe7ef6c25730efb98222eac766dbc4
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-4-loading-data-files/video-4-loading-data-files-0
short_url: video-4-loading-data-files-0
inline_embed_id: 89810173video4loadingdatafiles35140626
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4860'>Often,</span> <span m='5214'>you</span> <span
  m='5568'>will</span> <span m='5922'>need</span> <span m='6276'>to</span> <span
  m='6630'>load</span> <span m='6985'>an</span> <span m='7339'>external</span>
  <span m='7693'>data</span> <span m='8047'>file</span> <span
  m='8401'>into</span> <span m='8755'>R</span> <span m='9110'>to</span> <span
  m='9578'>do</span> <span m='10046'>some</span> <span m='10515'>analysis</span>
  <span m='10983'>and</span> <span m='11451'>modeling.</span> </p><p><span
  m='11920'>In</span> <span m='12307'>this</span> <span m='12695'>class,</span>
  <span m='13083'>we'll</span> <span m='13471'>be</span> <span
  m='13858'>working</span> <span m='14246'>with</span> <span
  m='14634'>csv</span> <span m='15022'>files,</span> <span m='15410'>or</span>
  <span m='16038'>comma</span> <span m='16666'>separated</span> <span
  m='17294'>value</span> <span m='17922'>files.</span> </p><p><span
  m='18550'>This</span> <span m='18896'>is</span> <span m='19242'>a</span> <span
  m='19588'>common</span> <span m='19935'>format</span> <span
  m='20281'>for</span> <span m='20627'>data</span> <span m='20973'>files</span>
  <span m='21320'>and</span> <span m='21670'>is</span> <span
  m='22020'>easy</span> <span m='22370'>to</span> <span m='22720'>work</span>
  <span m='23070'>with</span> <span m='23420'>in</span> <span
  m='23770'>R.</span> </p><p><span m='24120'>The</span> <span
  m='24385'>first</span> <span m='24650'>thing</span> <span m='24916'>you</span>
  <span m='25181'>need</span> <span m='25446'>to</span> <span
  m='25712'>do</span> <span m='25977'>to</span> <span m='26243'>read</span>
  <span m='26508'>in</span> <span m='26773'>a</span> <span m='27039'>data</span>
  <span m='27304'>file</span> <span m='27570'>is</span> <span
  m='27897'>to</span> <span m='28225'>navigate</span> <span m='28553'>to</span>
  <span m='28881'>the</span> <span m='29208'>directory</span> <span
  m='29536'>on</span> <span m='29864'>your</span> <span
  m='30192'>computer</span> <span m='30520'>where</span> <span
  m='30928'>the</span> <span m='31336'>data</span> <span m='31745'>file</span>
  <span m='32153'>is</span> <span m='32561'>saved.</span> </p><p><span
  m='32970'>On</span> <span m='33388'>a</span> <span m='33806'>Mac,</span> <span
  m='34225'>go</span> <span m='34643'>to</span> <span m='35061'>the</span> <span
  m='35480'>Misc</span> <span m='35898'>menu,</span> <span m='36316'>then</span>
  <span m='36735'>select</span> <span m='37153'>"Change</span> <span
  m='37571'>Working</span> <span m='37990'>Directory...".</span> </p><p><span
  m='39390'>On</span> <span m='39964'>a</span> <span m='40538'>PC,</span> <span
  m='41112'>go</span> <span m='41686'>to</span> <span m='42260'>the</span> <span
  m='42835'>File</span> <span m='43409'>menu</span> <span m='43983'>and</span>
  <span m='44557'>select</span> <span m='45131'>"Change</span> <span
  m='45705'>dir...".</span> </p><p><span m='46280'>This</span> <span
  m='46720'>should</span> <span m='47160'>pop</span> <span m='47600'>up</span>
  <span m='48040'>a</span> <span m='48480'>browsing</span> <span
  m='48920'>or</span> <span m='49360'>navigation</span> <span
  m='49800'>window.</span> </p><p><span m='50240'>Navigate</span> <span
  m='50890'>to</span> <span m='51540'>the</span> <span m='52190'>folder</span>
  <span m='52840'>where</span> <span m='53490'>you</span> <span
  m='54140'>saved</span> <span m='54790'>the</span> <span m='55440'>data</span>
  <span m='56090'>file</span> <span m='56740'>WHO.csv</span> <span
  m='57390'>that</span> <span m='57763'>you've</span> <span
  m='58136'>downloaded</span> <span m='58510'>for</span> <span
  m='58883'>this</span> <span m='59256'>class,</span> <span m='59630'>and</span>
  <span m='59956'>then</span> <span m='60282'>select</span> <span
  m='60608'>that</span> <span m='60934'>folder.</span> </p><p><span
  m='71930'>Nothing</span> <span m='72250'>should</span> <span
  m='72570'>have</span> <span m='72890'>happened</span> <span
  m='73210'>in</span> <span m='73530'>R,</span> <span m='73850'>but</span> <span
  m='74330'>if</span> <span m='74810'>you</span> <span m='75290'>type</span>
  <span m='75770'>getwd,</span> <span m='76250'>and</span> <span
  m='76730'>then</span> <span m='77210'>empty</span> <span
  m='77690'>parentheses</span> <span m='78054'>and</span> <span
  m='78418'>hit</span> <span m='78783'>Enter,</span> <span m='79147'>you</span>
  <span m='79512'>should</span> <span m='79876'>see</span> <span
  m='80241'>the</span> <span m='80605'>path</span> <span m='80970'>to</span>
  <span m='81432'>the</span> <span m='81894'>folder</span> <span
  m='82356'>containing</span> <span m='82818'>the</span> <span
  m='83280'>data</span> <span m='83742'>set</span> <span m='84204'>that</span>
  <span m='84666'>you</span> <span m='85128'>just</span> <span
  m='85590'>selected.</span> </p><p><span m='88250'>Now,</span> <span
  m='88771'>read</span> <span m='89292'>in</span> <span m='89813'>the</span>
  <span m='90334'>data</span> <span m='90855'>file</span> <span
  m='91376'>by</span> <span m='91897'>typing</span> <span m='92418'>WHO</span>
  <span m='92939'>=</span> <span m='93460'>read.csv("WHO.csv")</span> <span
  m='94280'>the</span> <span m='95101'>name</span> <span m='95922'>of</span>
  <span m='96743'>the</span> <span m='97564'>data</span> <span
  m='98385'>file</span> <span m='99206'>we</span> <span m='100027'>want</span>
  <span m='100848'>to</span> <span m='101669'>read</span> <span
  m='102490'>in.</span> </p><p><span m='104030'>If</span> <span
  m='104540'>you</span> <span m='105051'>hit</span> <span
  m='105562'>Enter,</span> <span m='106073'>this</span> <span
  m='106584'>will</span> <span m='107095'>save</span> <span
  m='107605'>the</span> <span m='108116'>data</span> <span m='108627'>set</span>
  <span m='109138'>in</span> <span m='109649'>WHO.csv</span> <span
  m='110160'>to</span> <span m='110776'>the</span> <span m='111392'>data</span>
  <span m='112008'>frame</span> <span m='112624'>WHO.</span> </p><p><span
  m='113240'>To</span> <span m='113582'>look</span> <span m='113925'>at</span>
  <span m='114267'>our</span> <span m='114610'>data,</span> <span
  m='114953'>there</span> <span m='115295'>are</span> <span
  m='115638'>two</span> <span m='115981'>very</span> <span
  m='116323'>useful</span> <span m='116666'>commands.</span> </p><p><span
  m='117009'>The</span> <span m='117504'>first</span> <span m='118000'>is</span>
  <span m='118496'>the</span> <span m='118992'>str</span> <span
  m='119488'>function,</span> <span m='119984'>which</span> <span
  m='120480'>shows</span> <span m='120840'>us</span> <span m='121200'>the</span>
  <span m='121560'>structure</span> <span m='121920'>of</span> <span
  m='122280'>the</span> <span m='122640'>data.</span> </p><p><span
  m='123000'>If</span> <span m='123938'>you</span> <span m='124877'>type</span>
  <span m='125815'>str(WHO),</span> <span m='126754'>and</span> <span
  m='127692'>hit</span> <span m='128631'>Enter,</span> <span
  m='129570'>you</span> <span m='129847'>can</span> <span m='130125'>see</span>
  <span m='130403'>that</span> <span m='130681'>we</span> <span
  m='130958'>have</span> <span m='131236'>a</span> <span m='131514'>data</span>
  <span m='131792'>frame</span> <span m='132070'>of</span> <span
  m='132848'>194</span> <span m='133626'>observations</span> <span
  m='134405'>and</span> <span m='135183'>13</span> <span
  m='135961'>variables.</span> </p><p><span m='136740'>This</span> <span
  m='137205'>data</span> <span m='137670'>set</span> <span
  m='138135'>contains</span> <span m='138600'>recent</span> <span
  m='139065'>statistics</span> <span m='139530'>from</span> <span
  m='139973'>the</span> <span m='140416'>World</span> <span
  m='140860'>Health</span> <span m='141303'>Organization--</span> <span
  m='141746'>W,</span> <span m='142190'>H,</span> <span m='142804'>O,</span>
  <span m='143418'>or</span> <span m='144032'>WHO--</span> <span
  m='144647'>on</span> <span m='145261'>all</span> <span
  m='145875'>countries.</span> </p><p><span m='146490'>The</span> <span
  m='146844'>variables</span> <span m='147199'>are</span> <span
  m='147554'>the</span> <span m='147909'>name</span> <span m='148264'>of</span>
  <span m='148619'>the</span> <span m='148974'>country,</span> <span
  m='149329'>the</span> <span m='149811'>region</span> <span
  m='150293'>the</span> <span m='150775'>country</span> <span
  m='151257'>is</span> <span m='151739'>in,</span> <span m='152221'>the</span>
  <span m='152703'>population</span> <span m='153185'>in</span> <span
  m='153667'>thousands,</span> <span m='154150'>the</span> <span
  m='154633'>percentage</span> <span m='155116'>of</span> <span
  m='155599'>the</span> <span m='156082'>population</span> <span
  m='156565'>under</span> <span m='157048'>15</span> <span m='157531'>and</span>
  <span m='158014'>over</span> <span m='158497'>60,</span> <span
  m='158980'>the</span> <span m='159448'>fertility</span> <span
  m='159916'>rate</span> <span m='160384'>or</span> <span
  m='160852'>average</span> <span m='161320'>number</span> <span
  m='161788'>of</span> <span m='162256'>children</span> <span
  m='162724'>per</span> <span m='163192'>woman,</span> <span
  m='163660'>the</span> <span m='164161'>life</span> <span
  m='164662'>expectancy</span> <span m='165163'>in</span> <span
  m='165664'>years,</span> <span m='166165'>the</span> <span
  m='166666'>child</span> <span m='167167'>mortality</span> <span
  m='167668'>rate</span> <span m='168169'>which</span> <span
  m='168670'>is</span> <span m='168969'>the</span> <span
  m='169268'>number</span> <span m='169567'>of</span> <span
  m='169866'>children</span> <span m='170165'>who</span> <span
  m='170465'>die</span> <span m='170764'>by</span> <span m='171063'>age</span>
  <span m='171362'>five</span> <span m='171661'>per</span> <span
  m='171960'>1,000</span> <span m='172260'>births,</span> <span
  m='172915'>the</span> <span m='173571'>number</span> <span
  m='174226'>of</span> <span m='174882'>cellular</span> <span
  m='175537'>subscribers</span> <span m='176193'>per</span> <span
  m='176848'>100</span> <span m='177504'>population,</span> <span
  m='178160'>the</span> <span m='178528'>literacy</span> <span
  m='178897'>rate</span> <span m='179266'>among</span> <span
  m='179635'>adults</span> <span m='180003'>aged</span> <span
  m='180372'>greater</span> <span m='180741'>than</span> <span
  m='181110'>or</span> <span m='181631'>equal</span> <span m='182152'>to</span>
  <span m='182673'>15,</span> <span m='183194'>the</span> <span
  m='183715'>gross</span> <span m='184236'>national</span> <span
  m='184757'>income</span> <span m='185278'>per</span> <span
  m='185799'>capita,</span> <span m='186320'>the</span> <span
  m='186724'>percentage</span> <span m='187128'>of</span> <span
  m='187533'>male</span> <span m='187937'>children</span> <span
  m='188342'>enrolled</span> <span m='188746'>in</span> <span
  m='189151'>primary</span> <span m='189555'>school,</span> <span
  m='189960'>and</span> <span m='190300'>the</span> <span
  m='190640'>percentage</span> <span m='190980'>of</span> <span
  m='191320'>female</span> <span m='191660'>children</span> <span
  m='192000'>enrolled</span> <span m='192540'>in</span> <span
  m='193080'>primary</span> <span m='193620'>school.</span> </p><p><span
  m='194160'>For</span> <span m='194610'>each</span> <span
  m='195060'>variable,</span> <span m='195510'>str</span> <span
  m='195960'>gives</span> <span m='196410'>us</span> <span m='196860'>the</span>
  <span m='197310'>name</span> <span m='197760'>of</span> <span
  m='198210'>the</span> <span m='198660'>variable,</span> <span
  m='199110'>and</span> <span m='199429'>then</span> <span m='199748'>a</span>
  <span m='200067'>description</span> <span m='200386'>of</span> <span
  m='200705'>the</span> <span m='201024'>type</span> <span m='201343'>of</span>
  <span m='201662'>the</span> <span m='201981'>variable</span> <span
  m='202300'>followed</span> <span m='202661'>by</span> <span
  m='203022'>a</span> <span m='203383'>first</span> <span m='203744'>few</span>
  <span m='204105'>values</span> <span m='204466'>of</span> <span
  m='204827'>the</span> <span m='205188'>variable.</span> </p><p><span
  m='205550'>We</span> <span m='205850'>see</span> <span m='206150'>a</span>
  <span m='206450'>couple</span> <span m='206750'>different</span> <span
  m='207050'>types</span> <span m='207350'>here.</span> </p><p><span
  m='207650'>One</span> <span m='208174'>is</span> <span m='208698'>a</span>
  <span m='209222'>factor</span> <span m='209746'>variable.</span> </p><p><span
  m='210270'>Country</span> <span m='210760'>and</span> <span
  m='211250'>Region</span> <span m='211740'>are</span> <span
  m='212230'>both</span> <span m='212720'>factor</span> <span
  m='213210'>variables.</span> </p><p><span m='213700'>This</span> <span
  m='214013'>means</span> <span m='214326'>that</span> <span
  m='214639'>the</span> <span m='214952'>variables</span> <span
  m='215265'>have</span> <span m='215579'>several</span> <span
  m='216350'>different</span> <span m='217122'>categories,</span> <span
  m='217894'>not</span> <span m='218666'>necessarily</span> <span
  m='219438'>numerical.</span> </p><p><span m='220210'>For</span> <span
  m='220674'>example,</span> <span m='221138'>the</span> <span
  m='221603'>Region</span> <span m='222067'>variable</span> <span
  m='222532'>has</span> <span m='222996'>six</span> <span
  m='223461'>different</span> <span m='223925'>categories</span> <span
  m='224390'>or</span> <span m='225065'>levels.</span> </p><p><span
  m='225740'>These</span> <span m='226378'>include</span> <span
  m='227016'>Africa</span> <span m='227654'>and</span> <span
  m='228292'>Americas.</span> </p><p><span m='228930'>So</span> <span
  m='229481'>each</span> <span m='230032'>observation</span> <span
  m='230584'>in</span> <span m='231135'>the</span> <span
  m='231687'>Region</span> <span m='232238'>variable</span> <span
  m='232790'>belongs</span> <span m='233259'>to</span> <span
  m='233729'>one</span> <span m='234199'>of</span> <span m='234669'>six</span>
  <span m='235139'>different</span> <span m='235609'>categories.</span>
  </p><p><span m='236079'>For</span> <span m='236417'>variables</span> <span
  m='236755'>like</span> <span m='237093'>Country,</span> <span
  m='237431'>where</span> <span m='237770'>there's</span> <span
  m='238169'>194</span> <span m='238568'>levels,</span> <span
  m='238967'>which</span> <span m='239366'>is</span> <span m='239765'>the</span>
  <span m='240164'>same</span> <span m='240563'>number</span> <span
  m='240962'>of</span> <span m='241361'>observations</span> <span
  m='241760'>we</span> <span m='242267'>have,</span> <span
  m='242775'>each</span> <span m='243283'>value</span> <span
  m='243791'>in</span> <span m='244298'>this</span> <span
  m='244806'>variable</span> <span m='245314'>is</span> <span
  m='245822'>different.</span> </p><p><span m='246330'>In</span> <span
  m='246612'>this</span> <span m='246894'>case,</span> <span
  m='247176'>it</span> <span m='247458'>makes</span> <span
  m='247740'>sense,</span> <span m='248022'>since</span> <span
  m='248304'>each</span> <span m='248586'>country</span> <span
  m='248868'>name</span> <span m='249150'>is</span> <span
  m='250190'>different.</span> </p><p><span m='251230'>Then</span> <span
  m='251575'>we</span> <span m='251921'>have</span> <span m='252266'>two</span>
  <span m='252612'>types</span> <span m='252957'>of</span> <span
  m='253303'>numerical</span> <span m='253648'>values--</span> <span
  m='253994'>integer</span> <span m='254340'>and</span> <span
  m='254680'>then</span> <span m='255020'>general</span> <span
  m='255360'>numerical</span> <span m='255700'>values.</span> </p><p><span
  m='258930'>The</span> <span m='259202'>other</span> <span
  m='259475'>very</span> <span m='259747'>useful</span> <span
  m='260020'>function</span> <span m='260292'>to</span> <span
  m='260565'>take</span> <span m='260837'>a</span> <span m='261110'>look</span>
  <span m='261382'>at</span> <span m='261655'>our</span> <span
  m='261927'>data</span> <span m='262200'>is</span> <span m='262682'>the</span>
  <span m='263165'>summary</span> <span m='263647'>function.</span> </p><p><span
  m='264130'>In</span> <span m='264512'>your</span> <span m='264895'>R</span>
  <span m='265277'>console,</span> <span m='265660'>type</span> <span
  m='266042'>summary</span> <span m='266425'>and</span> <span
  m='266807'>then,</span> <span m='267190'>in</span> <span
  m='267604'>parentheses,</span> <span m='268018'>WHO,</span> <span
  m='268432'>the</span> <span m='268846'>name</span> <span m='269260'>of</span>
  <span m='269674'>our</span> <span m='270088'>data</span> <span
  m='270502'>frame,</span> <span m='270916'>and</span> <span
  m='271330'>hit</span> <span m='271744'>Enter.</span> </p><p><span
  m='272159'>This</span> <span m='272568'>gives</span> <span m='272977'>a</span>
  <span m='273386'>numerical</span> <span m='273795'>summary</span> <span
  m='274204'>of</span> <span m='274613'>each</span> <span m='275022'>of</span>
  <span m='275431'>our</span> <span m='275840'>variables.</span> </p><p><span
  m='276250'>For</span> <span m='276644'>the</span> <span
  m='277038'>factor</span> <span m='277432'>variables,</span> <span
  m='277827'>country</span> <span m='278221'>and</span> <span
  m='278615'>region,</span> <span m='279010'>it</span> <span
  m='279396'>counts</span> <span m='279783'>the</span> <span
  m='280170'>number</span> <span m='280556'>of</span> <span
  m='280943'>observations</span> <span m='281330'>in</span> <span
  m='281834'>each</span> <span m='282338'>of</span> <span m='282842'>the</span>
  <span m='283347'>levels</span> <span m='283851'>or</span> <span
  m='284355'>categories.</span> </p><p><span m='284860'>So</span> <span
  m='285131'>here,</span> <span m='285403'>we</span> <span m='285675'>see</span>
  <span m='285946'>that</span> <span m='286218'>we</span> <span
  m='286490'>have</span> <span m='286761'>46</span> <span
  m='287033'>countries</span> <span m='287305'>in</span> <span
  m='287576'>the</span> <span m='287848'>region</span> <span
  m='288120'>Africa,</span> <span m='288832'>35</span> <span
  m='289545'>in</span> <span m='290258'>the</span> <span
  m='290971'>region</span> <span m='291684'>Americas,</span> <span
  m='292397'>etc.</span> </p><p><span m='293110'>For</span> <span
  m='293426'>each</span> <span m='293743'>of</span> <span m='294060'>the</span>
  <span m='294376'>numerical</span> <span m='294693'>values,</span> <span
  m='295010'>we</span> <span m='295651'>see</span> <span m='296292'>the</span>
  <span m='296933'>min,</span> <span m='297574'>first</span> <span
  m='298215'>quartile,</span> <span m='298856'>median,</span> <span
  m='299497'>mean,</span> <span m='300138'>third</span> <span
  m='300779'>quartile,</span> <span m='301420'>and</span> <span
  m='302123'>maximum</span> <span m='302826'>values</span> <span
  m='303530'>in</span> <span m='304233'>that</span> <span
  m='304936'>variable.</span> </p><p><span m='305640'>We</span> <span
  m='305931'>can</span> <span m='306223'>also</span> <span m='306514'>see</span>
  <span m='306806'>in</span> <span m='307097'>some</span> <span
  m='307389'>of</span> <span m='307680'>the</span> <span
  m='307972'>variables</span> <span m='308263'>that</span> <span
  m='308555'>we</span> <span m='308846'>have</span> <span m='309138'>this</span>
  <span m='309430'>category</span> <span m='310163'>called</span> <span
  m='310896'>NA's.</span> </p><p><span m='311630'>This</span> <span
  m='312336'>means</span> <span m='313042'>that</span> <span
  m='313748'>some</span> <span m='314454'>observations</span> <span
  m='315160'>are</span> <span m='315573'>missing</span> <span
  m='315986'>values</span> <span m='316400'>in</span> <span
  m='316813'>that</span> <span m='317226'>variable.</span> </p><p><span
  m='317640'>So</span> <span m='318148'>for</span> <span
  m='318657'>FertilityRate,</span> <span m='319165'>there</span> <span
  m='319674'>11</span> <span m='320182'>observations</span> <span
  m='320691'>that</span> <span m='321200'>are</span> <span
  m='321906'>missing</span> <span m='322613'>the</span> <span
  m='323320'>value</span> <span m='324026'>of</span> <span
  m='324733'>FertilityRate.</span> </p><p><span m='325440'>When</span> <span
  m='325735'>working</span> <span m='326031'>with</span> <span
  m='326326'>data</span> <span m='326622'>in</span> <span m='326917'>R,</span>
  <span m='327213'>it</span> <span m='327508'>can</span> <span
  m='327804'>often</span> <span m='328100'>be</span> <span
  m='328506'>useful</span> <span m='328913'>to</span> <span
  m='329320'>subset</span> <span m='329726'>your</span> <span
  m='330133'>data.</span> </p><p><span m='330540'>For</span> <span
  m='330868'>example,</span> <span m='331196'>suppose</span> <span
  m='331524'>we</span> <span m='331852'>want</span> <span m='332180'>to</span>
  <span m='332508'>create</span> <span m='332836'>a</span> <span
  m='333164'>new</span> <span m='333492'>data</span> <span
  m='333820'>frame</span> <span m='334218'>with</span> <span
  m='334617'>only</span> <span m='335015'>the</span> <span
  m='335414'>countries</span> <span m='335812'>in</span> <span
  m='336211'>Europe.</span> </p><p><span m='336610'>Let's</span> <span
  m='337318'>call</span> <span m='338027'>it</span> <span
  m='338736'>WHO_Europe</span> <span m='339445'>and</span> <span
  m='340154'>use</span> <span m='340863'>the</span> <span
  m='341572'>subset</span> <span m='342281'>function</span> <span
  m='342990'>to</span> <span m='343392'>subset</span> <span
  m='343795'>the</span> <span m='344197'>data</span> <span
  m='344600'>frame</span> <span m='345002'>WHO</span> <span m='345405'>to</span>
  <span m='345807'>take</span> <span m='346210'>only</span> <span
  m='346723'>the</span> <span m='347236'>observations</span> <span
  m='347750'>for</span> <span m='348263'>which</span> <span
  m='348776'>Region</span> <span m='349290'>is</span> <span
  m='349692'>exactly</span> <span m='350094'>equal</span> <span
  m='350496'>to</span> <span m='350898'>Europe.</span> </p><p><span
  m='353890'>The</span> <span m='354413'>subset</span> <span
  m='354936'>function</span> <span m='355460'>takes</span> <span
  m='355983'>two</span> <span m='356506'>arguments.</span> </p><p><span
  m='357030'>The</span> <span m='357221'>first</span> <span m='357412'>is</span>
  <span m='357603'>the</span> <span m='357795'>data</span> <span
  m='357986'>frame</span> <span m='358177'>we</span> <span
  m='358368'>want</span> <span m='358560'>to</span> <span m='358927'>take</span>
  <span m='359295'>a</span> <span m='359663'>subset</span> <span
  m='360031'>of,</span> <span m='360398'>in</span> <span m='360766'>this</span>
  <span m='361134'>case,</span> <span m='361502'>WHO.</span> </p><p><span
  m='361870'>And</span> <span m='362202'>the</span> <span
  m='362535'>second</span> <span m='362868'>argument</span> <span
  m='363201'>is</span> <span m='363534'>the</span> <span
  m='363867'>criteria</span> <span m='364200'>for</span> <span
  m='364577'>which</span> <span m='364954'>observations</span> <span
  m='365331'>of</span> <span m='365709'>WHO</span> <span
  m='366086'>should</span> <span m='366463'>belong</span> <span
  m='366840'>in</span> <span m='367218'>our</span> <span m='367595'>new</span>
  <span m='367972'>data</span> <span m='368350'>frame,</span> <span
  m='369255'>WHO_Europe.</span> </p><p><span m='370160'>In</span> <span
  m='370531'>this</span> <span m='370902'>case,</span> <span
  m='371274'>we</span> <span m='371645'>want</span> <span m='372017'>the</span>
  <span m='372388'>observations</span> <span m='372760'>for</span> <span
  m='373234'>which</span> <span m='373708'>the</span> <span
  m='374182'>Region</span> <span m='374656'>variable</span> <span
  m='375130'>is</span> <span m='375604'>exactly</span> <span
  m='376078'>equal</span> <span m='376552'>to</span> <span
  m='377026'>Europe.</span> </p><p><span m='377500'>The</span> <span
  m='377944'>double</span> <span m='378388'>equal</span> <span
  m='378833'>sign</span> <span m='379277'>here</span> <span
  m='379722'>means</span> <span m='380166'>exactly</span> <span
  m='380611'>equal</span> <span m='381055'>to.</span> </p><p><span
  m='381500'>If</span> <span m='381978'>we</span> <span m='382456'>hit</span>
  <span m='382935'>Enter</span> <span m='383413'>and</span> <span
  m='383891'>then</span> <span m='384370'>look</span> <span m='384848'>at</span>
  <span m='385326'>the</span> <span m='385805'>structure</span> <span
  m='386283'>of</span> <span m='386761'>WHO_Europe,</span> <span
  m='387240'>we</span> <span m='387457'>can</span> <span m='387675'>see</span>
  <span m='387893'>that</span> <span m='388111'>we</span> <span
  m='388328'>now</span> <span m='388546'>have</span> <span m='388764'>a</span>
  <span m='388982'>data</span> <span m='389200'>frame</span> <span
  m='389723'>of</span> <span m='390246'>53</span> <span
  m='390769'>observations</span> <span m='391292'>of</span> <span
  m='391816'>the</span> <span m='392339'>same</span> <span m='392862'>13</span>
  <span m='393385'>variables.</span> </p><p><span m='393909'>Does</span> <span
  m='394371'>53</span> <span m='394834'>sound</span> <span
  m='395297'>right?</span> </p><p><span m='395760'>Well,</span> <span
  m='396129'>let's</span> <span m='396498'>look</span> <span
  m='396867'>back</span> <span m='397236'>at</span> <span m='397605'>the</span>
  <span m='397974'>summary</span> <span m='398343'>output</span> <span
  m='398712'>of</span> <span m='399081'>WHO.</span> </p><p><span
  m='399450'>We</span> <span m='399793'>can</span> <span m='400137'>see</span>
  <span m='400481'>in</span> <span m='400825'>the</span> <span
  m='401168'>Region</span> <span m='401512'>output,</span> <span
  m='401856'>there</span> <span m='402200'>were</span> <span
  m='402768'>53</span> <span m='403337'>observations</span> <span
  m='403906'>that</span> <span m='404475'>belonged</span> <span
  m='405044'>in</span> <span m='405613'>the</span> <span
  m='406182'>region</span> <span m='406751'>Europe.</span> </p><p><span
  m='407320'>So</span> <span m='407761'>we</span> <span m='408203'>should</span>
  <span m='408645'>expect</span> <span m='409086'>53</span> <span
  m='409528'>observations</span> <span m='409970'>in</span> <span
  m='410404'>our</span> <span m='410838'>Europe</span> <span
  m='411272'>subset,</span> <span m='411707'>which</span> <span
  m='412141'>is</span> <span m='412575'>right.</span> </p><p><span
  m='415650'>Now,</span> <span m='415917'>suppose</span> <span
  m='416185'>we</span> <span m='416453'>want</span> <span m='416721'>to</span>
  <span m='416988'>save</span> <span m='417256'>this</span> <span
  m='417524'>new</span> <span m='417792'>data</span> <span
  m='418060'>frame,</span> <span m='418633'>WHO_Europe,</span> <span
  m='419206'>to</span> <span m='419780'>a</span> <span m='420353'>csv</span>
  <span m='420926'>file.</span> </p><p><span m='421500'>You</span> <span
  m='421936'>can</span> <span m='422373'>use</span> <span m='422810'>the</span>
  <span m='423246'>write.csv</span> <span m='423683'>function</span> <span
  m='424120'>to</span> <span m='424556'>do</span> <span m='424993'>this.</span>
  </p><p><span m='425430'>Type</span> <span m='426265'>write.csv,</span> <span
  m='427100'>and</span> <span m='427935'>then</span> <span m='428770'>in</span>
  <span m='429605'>parentheses</span> <span m='430440'>the</span> <span
  m='430666'>name</span> <span m='430892'>of</span> <span m='431118'>the</span>
  <span m='431344'>data</span> <span m='431570'>frame</span> <span
  m='431796'>we</span> <span m='432022'>want</span> <span m='432248'>to</span>
  <span m='432474'>save,</span> <span m='432700'>WHO_Europe,</span> <span
  m='433463'>comma,</span> <span m='434226'>and</span> <span
  m='434990'>then</span> <span m='435753'>in</span> <span
  m='436516'>quotes</span> <span m='437280'>the</span> <span
  m='437503'>name</span> <span m='437727'>of</span> <span m='437950'>the</span>
  <span m='438174'>file</span> <span m='438398'>we</span> <span
  m='438621'>want</span> <span m='438845'>to</span> <span m='439069'>save</span>
  <span m='439292'>it</span> <span m='439516'>to.</span> </p><p><span
  m='439740'>Let's</span> <span m='440042'>call</span> <span
  m='440345'>it</span> <span m='440647'>WHO_Europe.csv.</span> </p><p><span
  m='444810'>If</span> <span m='445244'>you</span> <span m='445678'>hit</span>
  <span m='446112'>Enter,</span> <span m='446547'>nothing</span> <span
  m='446981'>should</span> <span m='447415'>happen,</span> <span
  m='447850'>but</span> <span m='448286'>you</span> <span
  m='448723'>should</span> <span m='449160'>now</span> <span
  m='449596'>have</span> <span m='450033'>a</span> <span m='450470'>file</span>
  <span m='450906'>called</span> <span m='451343'>WHO_Europe.csv</span> <span
  m='451780'>in</span> <span m='452142'>the</span> <span m='452504'>same</span>
  <span m='452866'>folder</span> <span m='453228'>that</span> <span
  m='453591'>you</span> <span m='453953'>saved</span> <span
  m='454315'>WHO.csv</span> <span m='454677'>in.</span> </p><p><span
  m='457670'>And</span> <span m='458001'>now</span> <span m='458332'>that</span>
  <span m='458663'>we've</span> <span m='458994'>saved</span> <span
  m='459325'>this</span> <span m='459656'>as</span> <span m='459987'>a</span>
  <span m='460318'>csv</span> <span m='460649'>file,</span> <span
  m='460980'>if</span> <span m='461267'>we're</span> <span m='461555'>not</span>
  <span m='461843'>working</span> <span m='462131'>with</span> <span
  m='462418'>it</span> <span m='462706'>anymore</span> <span
  m='462994'>in</span> <span m='463282'>R,</span> <span m='463570'>we</span>
  <span m='463889'>can</span> <span m='464209'>remove</span> <span
  m='464529'>the</span> <span m='464849'>data</span> <span
  m='465169'>frame</span> <span m='465489'>from</span> <span
  m='465809'>our</span> <span m='466129'>current</span> <span
  m='466449'>session</span> <span m='466769'>in</span> <span
  m='467089'>R.</span> </p><p><span m='467409'>This</span> <span
  m='467678'>is</span> <span m='467947'>often</span> <span
  m='468216'>useful</span> <span m='468485'>if</span> <span
  m='468754'>you're</span> <span m='469024'>working</span> <span
  m='469293'>with</span> <span m='469562'>a</span> <span m='469831'>large</span>
  <span m='470100'>data</span> <span m='470370'>set</span> <span
  m='470718'>that's</span> <span m='471067'>taking</span> <span
  m='471415'>up</span> <span m='471764'>a</span> <span m='472113'>lot</span>
  <span m='472461'>of</span> <span m='472810'>space.</span> </p><p><span
  m='473159'>First,</span> <span m='473654'>let's</span> <span
  m='474149'>type</span> <span m='474644'>ls()</span> <span m='475139'>to</span>
  <span m='475634'>see</span> <span m='476129'>what</span> <span
  m='476624'>variables</span> <span m='477119'>we</span> <span
  m='477614'>currently</span> <span m='478110'>have</span> <span
  m='478461'>in</span> <span m='478812'>R.</span> <span m='479163'>You</span>
  <span m='479514'>could</span> <span m='479865'>see</span> <span
  m='480216'>that</span> <span m='480567'>WHO_Europe</span> <span
  m='480918'>is</span> <span m='481269'>one</span> <span m='481620'>of</span>
  <span m='482276'>our</span> <span m='482933'>variables.</span> </p><p><span
  m='483590'>Now,</span> <span m='484123'>type</span> <span m='484656'>rm</span>
  <span m='485190'>for</span> <span m='485723'>remove</span> <span
  m='486256'>and</span> <span m='486790'>then</span> <span m='487323'>the</span>
  <span m='487856'>name</span> <span m='488390'>WHO_Europe</span> <span
  m='488923'>and</span> <span m='489456'>hit</span> <span
  m='489990'>Enter.</span> </p><p><span m='491210'>If</span> <span
  m='491548'>you</span> <span m='491886'>type</span> <span
  m='492224'>ls()</span> <span m='492562'>again,</span> <span
  m='492900'>you</span> <span m='493239'>should</span> <span
  m='493577'>see</span> <span m='493915'>that</span> <span
  m='494253'>WHO_Europe</span> <span m='494591'>is</span> <span
  m='494930'>gone.</span> </p><p><span m='496850'>In</span> <span
  m='497308'>the</span> <span m='497766'>next</span> <span
  m='498224'>video,</span> <span m='498682'>we'll</span> <span
  m='499140'>explore</span> <span m='499598'>the</span> <span
  m='500056'>WHO</span> <span m='500514'>data</span> <span
  m='500972'>set.</span> </p>
embedded_media:
  - uid: 90b3454f343ad0f2abcb40ed33fabca3
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Cfx7hyAoGL4
  - uid: 689780cf55f5e3e167b4270ff00b889d
    parent_uid: 32985d653926f77987ee22cd46589384
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Cfx7hyAoGL4
  - uid: 0cdc5d8b5e44f92e64fb5e41dba33643
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Cfx7hyAoGL4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-4-loading-data-files/video-4-loading-data-files-0/Cfx7hyAoGL4.srt
  - uid: 6cf34badbfadcf70431138b15be4e80a
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Cfx7hyAoGL4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-4-loading-data-files/video-4-loading-data-files-0/Cfx7hyAoGL4.pdf
  - uid: 83768f300d191a33e3028acba2169972
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: c0ca515ca719f0a0c5929a5bf1d4d59f
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: abdc6fc15cf9b65dfdcf8b8f1ced2a99
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Cfx7hyAoGL4/default.jpg'
  - uid: 68c4e499e72fc6b6a8998143c69d5bf6
    parent_uid: 32985d653926f77987ee22cd46589384
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_1.3.08_300k.mp4
type: courses
layout: video
---
