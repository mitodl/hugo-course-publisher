---
title: 'Video 4: Logistic Regression in R'
uid: d56beae65d3eccccadba697fc8c6288b
parent_uid: 8fc17cbb03cdce23b5880c21e7dc33e8
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/video-4-logistic-regression-in-r-0
short_url: video-4-logistic-regression-in-r-0
inline_embed_id: 75698765video4logisticregressioninr45402359
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>This</span> <span m='4930'>plot</span> <span
  m='5360'>shows</span> <span m='5790'>two</span> <span m='6220'>of</span> <span
  m='6650'>our</span> <span m='7080'>independent</span> <span
  m='7510'>variables,</span> <span m='7940'>the</span> <span
  m='8397'>number</span> <span m='8855'>of</span> <span m='9312'>office</span>
  <span m='9770'>visits</span> <span m='10227'>on</span> <span
  m='10685'>the</span> <span m='11142'>x-axis</span> <span m='11600'>and</span>
  <span m='12117'>the</span> <span m='12635'>number</span> <span
  m='13153'>of</span> <span m='13671'>narcotics</span> <span
  m='14188'>prescribed</span> <span m='14706'>on</span> <span
  m='15224'>the</span> <span m='15742'>y-axis.</span> </p><p><span
  m='16260'>Each</span> <span m='16635'>point</span> <span m='17011'>is</span>
  <span m='17387'>an</span> <span m='17763'>observation</span> <span
  m='18139'>or</span> <span m='18515'>a</span> <span m='18890'>patient</span>
  <span m='19266'>in</span> <span m='19642'>our</span> <span
  m='20018'>data</span> <span m='20394'>set.</span> </p><p><span
  m='20770'>The</span> <span m='21162'>red</span> <span m='21554'>points</span>
  <span m='21946'>are</span> <span m='22338'>patients</span> <span
  m='22731'>who</span> <span m='23123'>received</span> <span
  m='23515'>poor</span> <span m='23907'>care,</span> <span m='24300'>and</span>
  <span m='24571'>the</span> <span m='24843'>green</span> <span
  m='25115'>points</span> <span m='25386'>are</span> <span
  m='25658'>patients</span> <span m='25930'>who</span> <span
  m='26502'>received</span> <span m='27075'>good</span> <span
  m='27647'>care.</span> </p><p><span m='28220'>It's</span> <span
  m='28448'>hard</span> <span m='28677'>to</span> <span m='28906'>see</span>
  <span m='29135'>a</span> <span m='29364'>trend</span> <span
  m='29593'>in</span> <span m='29822'>the</span> <span m='30051'>data</span>
  <span m='30280'>by</span> <span m='30744'>just</span> <span
  m='31208'>visually</span> <span m='31672'>inspecting</span> <span
  m='32136'>it.</span> </p><p><span m='32600'>But</span> <span
  m='32998'>it</span> <span m='33396'>looks</span> <span m='33794'>like</span>
  <span m='34192'>maybe</span> <span m='34590'>more</span> <span
  m='34988'>office</span> <span m='35386'>visits</span> <span
  m='35784'>and</span> <span m='36182'>more</span> <span
  m='36580'>narcotics,</span> <span m='36997'>or</span> <span
  m='37414'>data</span> <span m='37831'>points</span> <span m='38248'>to</span>
  <span m='38665'>the</span> <span m='39082'>right</span> <span
  m='39499'>of</span> <span m='39916'>this</span> <span m='40333'>line,</span>
  <span m='40750'>are</span> <span m='41208'>more</span> <span
  m='41667'>likely</span> <span m='42125'>to</span> <span m='42584'>have</span>
  <span m='43042'>poor</span> <span m='43501'>care.</span> </p><p><span
  m='43960'>Let's</span> <span m='44265'>see</span> <span m='44571'>if</span>
  <span m='44877'>we</span> <span m='45183'>can</span> <span
  m='45489'>build</span> <span m='45795'>a</span> <span
  m='46100'>logistic</span> <span m='46406'>regression</span> <span
  m='46712'>model</span> <span m='47018'>in</span> <span m='47324'>R</span>
  <span m='47630'>to</span> <span m='48274'>better</span> <span
  m='48918'>predict</span> <span m='49562'>poor</span> <span
  m='50206'>care.</span> </p><p><span m='50850'>In</span> <span
  m='51216'>our</span> <span m='51582'>R</span> <span m='51948'>console,</span>
  <span m='52315'>let's</span> <span m='52681'>start</span> <span
  m='53047'>by</span> <span m='53413'>reading</span> <span m='53780'>our</span>
  <span m='54233'>data</span> <span m='54687'>set</span> <span
  m='55141'>into</span> <span m='55595'>R.</span> <span
  m='56048'>Remember</span> <span m='56502'>to</span> <span
  m='56956'>navigate</span> <span m='57410'>to</span> <span m='57716'>the</span>
  <span m='58023'>directory</span> <span m='58330'>on</span> <span
  m='58636'>your</span> <span m='58943'>computer</span> <span
  m='59250'>containing</span> <span m='60212'>the</span> <span
  m='61175'>file</span> <span m='62137'>quality.csv.</span> </p><p><span
  m='63100'>We'll</span> <span m='63546'>call</span> <span m='63993'>our</span>
  <span m='64440'>data</span> <span m='64886'>set</span> <span
  m='65333'>"quality"</span> <span m='65780'>and</span> <span
  m='66151'>use</span> <span m='66523'>the</span> <span
  m='66895'>read.csv</span> <span m='67267'>function</span> <span
  m='67639'>to</span> <span m='68010'>read</span> <span m='68382'>in</span>
  <span m='68754'>the</span> <span m='69126'>data</span> <span
  m='69498'>file</span> <span m='69870'>quality.csv.</span> </p><p><span
  m='73330'>Let's</span> <span m='73547'>take</span> <span m='73764'>a</span>
  <span m='73981'>look</span> <span m='74198'>at</span> <span
  m='74415'>the</span> <span m='74632'>structure</span> <span
  m='74850'>of</span> <span m='75286'>our</span> <span m='75723'>data</span>
  <span m='76160'>set</span> <span m='76596'>by</span> <span
  m='77033'>using</span> <span m='77470'>the</span> <span m='77906'>str</span>
  <span m='78343'>function.</span> </p><p><span m='78780'>We</span> <span
  m='79364'>have</span> <span m='79948'>131</span> <span
  m='80532'>observations,</span> <span m='81117'>one</span> <span
  m='81701'>for</span> <span m='82285'>each</span> <span m='82870'>of</span>
  <span m='83307'>the</span> <span m='83744'>patients</span> <span
  m='84181'>in</span> <span m='84619'>our</span> <span m='85056'>data</span>
  <span m='85493'>set,</span> <span m='85930'>and</span> <span
  m='86368'>14</span> <span m='86805'>different</span> <span
  m='87242'>variables.</span> </p><p><span m='87680'>MemberID</span> <span
  m='88263'>just</span> <span m='88846'>numbers</span> <span
  m='89430'>the</span> <span m='90013'>patients</span> <span
  m='90596'>from</span> <span m='91180'>1</span> <span m='91763'>to</span> <span
  m='92346'>131.</span> </p><p><span m='92930'>The</span> <span
  m='93518'>12</span> <span m='94106'>variables</span> <span
  m='94694'>from</span> <span m='95282'>InpatientDays</span> <span
  m='95870'>to</span> <span m='96575'>AcuteDrugGapSmall</span> <span
  m='97280'>are</span> <span m='97985'>the</span> <span
  m='98690'>independent</span> <span m='99395'>variables.</span> </p><p><span
  m='100100'>We'll</span> <span m='100502'>be</span> <span
  m='100905'>using</span> <span m='101307'>the</span> <span
  m='101710'>number</span> <span m='102112'>of</span> <span
  m='102515'>office</span> <span m='102917'>visits</span> <span
  m='103320'>and</span> <span m='103724'>the</span> <span
  m='104128'>number</span> <span m='104532'>of</span> <span
  m='104937'>prescriptions</span> <span m='105341'>for</span> <span
  m='105745'>narcotics</span> <span m='106150'>that</span> <span
  m='106570'>the</span> <span m='106990'>patient</span> <span
  m='107410'>had.</span> </p><p><span m='107830'>But</span> <span
  m='108135'>you</span> <span m='108441'>can</span> <span m='108747'>read</span>
  <span m='109052'>descriptions</span> <span m='109358'>of</span> <span
  m='109664'>all</span> <span m='109970'>of</span> <span m='110430'>the</span>
  <span m='110890'>independent</span> <span m='111350'>variables</span> <span
  m='111810'>below</span> <span m='112270'>this</span> <span
  m='112730'>video.</span> </p><p><span m='113190'>After</span> <span
  m='113558'>the</span> <span m='113926'>lecture,</span> <span
  m='114295'>try</span> <span m='114663'>building</span> <span
  m='115031'>models</span> <span m='115400'>with</span> <span
  m='115861'>different</span> <span m='116323'>subsets</span> <span
  m='116785'>of</span> <span m='117246'>independent</span> <span
  m='117708'>variables</span> <span m='118170'>to</span> <span
  m='118517'>see</span> <span m='118864'>what</span> <span m='119211'>the</span>
  <span m='119559'>best</span> <span m='119906'>model</span> <span
  m='120253'>is</span> <span m='120600'>that</span> <span m='120948'>you</span>
  <span m='121295'>can</span> <span m='121642'>find.</span> </p><p><span
  m='121990'>The</span> <span m='122565'>final</span> <span
  m='123141'>variable,</span> <span m='123717'>PoorCare,</span> <span
  m='124292'>is</span> <span m='124868'>our</span> <span
  m='125444'>outcome</span> <span m='126020'>or</span> <span
  m='126387'>dependent</span> <span m='126755'>variable</span> <span
  m='127122'>and</span> <span m='127490'>is</span> <span m='127857'>equal</span>
  <span m='128225'>to</span> <span m='128592'>1</span> <span
  m='128960'>if</span> <span m='129279'>the</span> <span
  m='129598'>patient</span> <span m='129917'>had</span> <span
  m='130236'>poor</span> <span m='130555'>care</span> <span
  m='130874'>and</span> <span m='131193'>equal</span> <span m='131512'>to</span>
  <span m='131831'>0</span> <span m='132150'>if</span> <span
  m='132563'>the</span> <span m='132976'>patient</span> <span
  m='133390'>had</span> <span m='133803'>good</span> <span
  m='134216'>care.</span> </p><p><span m='134630'>Let's</span> <span
  m='135040'>see</span> <span m='135450'>how</span> <span m='135860'>many</span>
  <span m='136270'>patients</span> <span m='136680'>received</span> <span
  m='137090'>poor</span> <span m='137500'>care</span> <span
  m='137910'>and</span> <span m='138298'>how</span> <span m='138687'>many</span>
  <span m='139075'>patients</span> <span m='139464'>received</span> <span
  m='139852'>good</span> <span m='140241'>care</span> <span m='140630'>by</span>
  <span m='141138'>using</span> <span m='141646'>the</span> <span
  m='142154'>table</span> <span m='142662'>function.</span> </p><p><span
  m='143170'>Let's</span> <span m='143573'>make</span> <span m='143976'>a</span>
  <span m='144380'>table</span> <span m='144783'>of</span> <span
  m='145186'>our</span> <span m='145590'>outcome</span> <span
  m='145993'>variable</span> <span m='146396'>PoorCare.</span> </p><p><span
  m='149480'>We</span> <span m='149810'>can</span> <span m='150141'>see</span>
  <span m='150472'>that</span> <span m='150802'>98</span> <span
  m='151133'>out</span> <span m='151464'>of</span> <span m='151795'>the</span>
  <span m='152125'>131</span> <span m='152456'>patients</span> <span
  m='152787'>in</span> <span m='153117'>our</span> <span m='153448'>data</span>
  <span m='153779'>set</span> <span m='154110'>received</span> <span
  m='154650'>good</span> <span m='155190'>care,</span> <span
  m='155730'>or</span> <span m='156270'>0,</span> <span m='156810'>and</span>
  <span m='157350'>33</span> <span m='157890'>patients</span> <span
  m='158430'>received</span> <span m='158970'>poor</span> <span
  m='159510'>care,</span> <span m='160050'>or</span> <span
  m='160614'>those</span> <span m='161178'>labeled</span> <span
  m='161742'>with</span> <span m='162306'>1.</span> </p><p><span
  m='162870'>Before</span> <span m='163338'>building</span> <span
  m='163806'>any</span> <span m='164275'>models,</span> <span
  m='164743'>let's</span> <span m='165211'>consider</span> <span
  m='165680'>using</span> <span m='166290'>a</span> <span
  m='166900'>simple</span> <span m='167510'>baseline</span> <span
  m='168120'>method.</span> </p><p><span m='168730'>Last</span> <span
  m='169061'>week</span> <span m='169392'>when</span> <span m='169724'>we</span>
  <span m='170055'>computed</span> <span m='170387'>the</span> <span
  m='170718'>R-squared</span> <span m='171050'>for</span> <span
  m='171544'>linear</span> <span m='172038'>regression,</span> <span
  m='172532'>we</span> <span m='173027'>compared</span> <span
  m='173521'>our</span> <span m='174015'>predictions</span> <span
  m='174510'>to</span> <span m='174893'>the</span> <span
  m='175276'>baseline</span> <span m='175660'>method</span> <span
  m='176043'>of</span> <span m='176426'>predicting</span> <span
  m='176810'>the</span> <span m='177193'>average</span> <span
  m='177576'>outcome</span> <span m='177960'>for</span> <span
  m='178502'>all</span> <span m='179045'>data</span> <span
  m='179587'>points.</span> </p><p><span m='180130'>In</span> <span
  m='180626'>a</span> <span m='181122'>classification</span> <span
  m='181618'>problem,</span> <span m='182115'>a</span> <span
  m='182611'>standard</span> <span m='183107'>baseline</span> <span
  m='183603'>method</span> <span m='184100'>is</span> <span m='184470'>to</span>
  <span m='184840'>just</span> <span m='185210'>predict</span> <span
  m='185580'>the</span> <span m='185950'>most</span> <span
  m='186320'>frequent</span> <span m='186690'>outcome</span> <span
  m='187060'>for</span> <span m='187730'>all</span> <span
  m='188400'>observations.</span> </p><p><span m='189070'>Since</span> <span
  m='189400'>good</span> <span m='189731'>care</span> <span m='190062'>is</span>
  <span m='190393'>more</span> <span m='190724'>common</span> <span
  m='191055'>than</span> <span m='191385'>poor</span> <span
  m='191716'>care,</span> <span m='192047'>in</span> <span
  m='192378'>this</span> <span m='192709'>case,</span> <span
  m='193040'>we</span> <span m='193318'>would</span> <span
  m='193596'>predict</span> <span m='193875'>that</span> <span
  m='194153'>all</span> <span m='194431'>patients</span> <span
  m='194710'>are</span> <span m='195147'>receiving</span> <span
  m='195585'>good</span> <span m='196022'>care.</span> </p><p><span
  m='196460'>If</span> <span m='196752'>we</span> <span m='197044'>did</span>
  <span m='197336'>this,</span> <span m='197628'>we</span> <span
  m='197921'>would</span> <span m='198213'>get</span> <span m='198505'>98</span>
  <span m='198797'>out</span> <span m='199090'>of</span> <span
  m='199638'>the</span> <span m='200187'>131</span> <span
  m='200735'>observations</span> <span m='201284'>correct,</span> <span
  m='201832'>or</span> <span m='202381'>have</span> <span m='202930'>an</span>
  <span m='203690'>accuracy</span> <span m='204450'>of</span> <span
  m='205210'>about</span> <span m='205970'>75%.</span> </p><p><span
  m='206730'>So</span> <span m='207227'>our</span> <span
  m='207725'>baseline</span> <span m='208223'>model</span> <span
  m='208721'>has</span> <span m='209218'>an</span> <span
  m='209716'>accuracy</span> <span m='210214'>of</span> <span
  m='210712'>75%.</span> </p><p><span m='211210'>This</span> <span
  m='211483'>is</span> <span m='211757'>what</span> <span
  m='212030'>we'll</span> <span m='212304'>try</span> <span m='212578'>to</span>
  <span m='212851'>beat</span> <span m='213125'>with</span> <span
  m='213399'>our</span> <span m='213672'>logistic</span> <span
  m='213946'>regression</span> <span m='214220'>model.</span> </p><p><span
  m='216630'>Last</span> <span m='216969'>week,</span> <span
  m='217308'>we</span> <span m='217647'>always</span> <span
  m='217986'>gave</span> <span m='218325'>you</span> <span m='218664'>the</span>
  <span m='219003'>training</span> <span m='219342'>data</span> <span
  m='219681'>set</span> <span m='220020'>and</span> <span m='220433'>the</span>
  <span m='220847'>testing</span> <span m='221260'>data</span> <span
  m='221674'>set</span> <span m='222088'>in</span> <span
  m='222501'>separate</span> <span m='222915'>files.</span> </p><p><span
  m='223329'>This</span> <span m='223679'>week,</span> <span
  m='224029'>we</span> <span m='224379'>only</span> <span m='224729'>have</span>
  <span m='225079'>one</span> <span m='225429'>data</span> <span
  m='225779'>set.</span> </p><p><span m='226130'>So</span> <span
  m='226435'>we</span> <span m='226740'>want</span> <span m='227046'>to</span>
  <span m='227351'>randomly</span> <span m='227656'>split</span> <span
  m='227962'>our</span> <span m='228267'>data</span> <span m='228573'>set</span>
  <span m='228878'>into</span> <span m='229183'>a</span> <span
  m='229489'>training</span> <span m='229794'>set</span> <span
  m='230100'>and</span> <span m='230416'>testing</span> <span
  m='230732'>set</span> <span m='231048'>so</span> <span m='231364'>that</span>
  <span m='231680'>we'll</span> <span m='231996'>have</span> <span
  m='232312'>a</span> <span m='232628'>test</span> <span m='232944'>set</span>
  <span m='233260'>to</span> <span m='233926'>measure</span> <span
  m='234592'>our</span> <span m='235258'>out-of-sample</span> <span
  m='235924'>accuracy.</span> </p><p><span m='236590'>To</span> <span
  m='236910'>do</span> <span m='237231'>this,</span> <span m='237552'>we</span>
  <span m='237873'>need</span> <span m='238194'>to</span> <span
  m='238515'>add</span> <span m='238835'>a</span> <span m='239156'>new</span>
  <span m='239477'>package</span> <span m='239798'>to</span> <span
  m='240119'>R.</span> </p><p><span m='240440'>There</span> <span
  m='240852'>are</span> <span m='241264'>many</span> <span
  m='241676'>functions</span> <span m='242088'>and</span> <span
  m='242501'>algorithms</span> <span m='242913'>built</span> <span
  m='243325'>into</span> <span m='243737'>R,</span> <span m='244150'>but</span>
  <span m='244452'>there</span> <span m='244754'>are</span> <span
  m='245056'>many</span> <span m='245358'>more</span> <span
  m='245661'>that</span> <span m='245963'>you</span> <span m='246265'>can</span>
  <span m='246567'>install.</span> </p><p><span m='246870'>We'll</span> <span
  m='247358'>do</span> <span m='247847'>this</span> <span
  m='248336'>several</span> <span m='248825'>times</span> <span
  m='249313'>throughout</span> <span m='249802'>this</span> <span
  m='250291'>course.</span> </p><p><span m='250780'>First,</span> <span
  m='251272'>let's</span> <span m='251765'>install</span> <span
  m='252258'>the</span> <span m='252751'>new</span> <span
  m='253244'>package</span> <span m='253737'>using</span> <span
  m='254230'>the</span> <span m='254906'>install.packages</span> <span
  m='255583'>function</span> <span m='256260'>and</span> <span
  m='256936'>then</span> <span m='257613'>give</span> <span
  m='258290'>the</span> <span m='258582'>name</span> <span m='258875'>of</span>
  <span m='259168'>the</span> <span m='259460'>package</span> <span
  m='259753'>we</span> <span m='260046'>want</span> <span m='260339'>to</span>
  <span m='260631'>install</span> <span m='260924'>in</span> <span
  m='261217'>quotes.</span> </p><p><span m='261510'>In</span> <span
  m='262132'>this</span> <span m='262754'>case,</span> <span
  m='263376'>it's</span> <span m='263998'>caTools.</span> </p><p><span
  m='264620'>If</span> <span m='264932'>you</span> <span m='265244'>hit</span>
  <span m='265556'>Enter,</span> <span m='265868'>a</span> <span
  m='266181'>window</span> <span m='266493'>should</span> <span
  m='266805'>pop</span> <span m='267117'>up</span> <span
  m='267430'>asking</span> <span m='267785'>you</span> <span
  m='268140'>to</span> <span m='268495'>pick</span> <span m='268850'>a</span>
  <span m='269205'>CR</span> <span m='269560'>AN</span> <span
  m='269915'>mirror.</span> </p><p><span m='270270'>Here,</span> <span
  m='270685'>you</span> <span m='271100'>should</span> <span
  m='271515'>pick</span> <span m='271930'>a</span> <span
  m='272345'>location</span> <span m='272760'>near</span> <span
  m='273175'>you.</span> </p><p><span m='273590'>In</span> <span
  m='274036'>my</span> <span m='274483'>case,</span> <span
  m='274930'>I'll</span> <span m='275376'>pick</span> <span
  m='275823'>Pennsylvania</span> <span m='276270'>in</span> <span
  m='276495'>the</span> <span m='276720'>United</span> <span
  m='276945'>States.</span> </p><p><span m='279860'>After</span> <span
  m='280280'>you've</span> <span m='280700'>selected</span> <span
  m='281120'>a</span> <span m='281540'>location,</span> <span
  m='281960'>you</span> <span m='282288'>should</span> <span
  m='282616'>see</span> <span m='282944'>some</span> <span
  m='283272'>information</span> <span m='283600'>pop</span> <span
  m='283929'>up</span> <span m='284257'>in</span> <span m='284585'>your</span>
  <span m='284913'>R</span> <span m='285241'>console.</span> </p><p><span
  m='285570'>It's</span> <span m='285966'>done</span> <span
  m='286363'>when</span> <span m='286760'>you</span> <span m='287156'>see</span>
  <span m='287553'>the</span> <span m='287950'>arrow</span> <span
  m='288346'>with</span> <span m='288743'>the</span> <span
  m='289140'>blinking</span> <span m='289536'>cursor</span> <span
  m='289933'>again.</span> </p><p><span m='290330'>Now,</span> <span
  m='290658'>we</span> <span m='290986'>need</span> <span m='291315'>to</span>
  <span m='291643'>load</span> <span m='291971'>the</span> <span
  m='292300'>package</span> <span m='292628'>into</span> <span
  m='292956'>our</span> <span m='293285'>current</span> <span
  m='293613'>R</span> <span m='293941'>session.</span> </p><p><span
  m='294270'>To</span> <span m='294625'>do</span> <span m='294980'>this,</span>
  <span m='295335'>we'll</span> <span m='295690'>use</span> <span
  m='296045'>the</span> <span m='296400'>library</span> <span
  m='296755'>function.</span> </p><p><span m='297110'>So</span> <span
  m='297534'>type</span> <span m='297958'>library</span> <span
  m='298382'>and</span> <span m='298807'>then</span> <span m='299231'>in</span>
  <span m='299655'>parentheses</span> <span m='300080'>the</span> <span
  m='300643'>name</span> <span m='301206'>of</span> <span m='301770'>our</span>
  <span m='302333'>package,</span> <span m='302896'>caTools.</span> </p><p><span
  m='303460'>Sometimes</span> <span m='303818'>you'll</span> <span
  m='304176'>get</span> <span m='304535'>a</span> <span
  m='304893'>warning</span> <span m='305251'>message</span> <span
  m='305610'>based</span> <span m='305991'>on</span> <span m='306372'>the</span>
  <span m='306753'>version</span> <span m='307134'>of</span> <span
  m='307515'>R</span> <span m='307896'>that</span> <span
  m='308277'>you're</span> <span m='308658'>using.</span> </p><p><span
  m='309040'>This</span> <span m='309566'>can</span> <span
  m='310093'>usually</span> <span m='310620'>safely</span> <span
  m='311146'>be</span> <span m='311673'>ignored.</span> </p><p><span
  m='312200'>In</span> <span m='312529'>the</span> <span
  m='312858'>future,</span> <span m='313187'>whenever</span> <span
  m='313516'>you</span> <span m='313845'>want</span> <span m='314174'>to</span>
  <span m='314503'>use</span> <span m='314832'>a</span> <span
  m='315161'>package,</span> <span m='315490'>you</span> <span
  m='315815'>won't</span> <span m='316140'>need</span> <span
  m='316466'>to</span> <span m='316791'>install</span> <span
  m='317116'>it,</span> <span m='317442'>but</span> <span m='317767'>you</span>
  <span m='318093'>will</span> <span m='318418'>need</span> <span
  m='318743'>to</span> <span m='319069'>load</span> <span m='319394'>it.</span>
  </p><p><span m='319720'>Now,</span> <span m='320088'>let's</span> <span
  m='320456'>use</span> <span m='320824'>this</span> <span
  m='321192'>package</span> <span m='321560'>to</span> <span
  m='321928'>randomly</span> <span m='322296'>split</span> <span
  m='322664'>our</span> <span m='323032'>data</span> <span
  m='323400'>into</span> <span m='323807'>a</span> <span
  m='324214'>training</span> <span m='324621'>set</span> <span
  m='325028'>and</span> <span m='325435'>testing</span> <span
  m='325842'>set.</span> </p><p><span m='326250'>We'll</span> <span
  m='326733'>do</span> <span m='327217'>this</span> <span
  m='327701'>using</span> <span m='328185'>a</span> <span
  m='328668'>function</span> <span m='329152'>sample.split</span> <span
  m='329636'>which</span> <span m='330120'>is</span> <span
  m='330556'>part</span> <span m='330993'>of</span> <span m='331430'>the</span>
  <span m='331866'>caTools</span> <span m='332303'>package.</span> </p><p><span
  m='332740'>Since</span> <span m='333275'>sample.split</span> <span
  m='333810'>randomly</span> <span m='334345'>splits</span> <span
  m='334880'>your</span> <span m='335415'>data,</span> <span
  m='335950'>it</span> <span m='336242'>could</span> <span
  m='336534'>split</span> <span m='336826'>it</span> <span
  m='337118'>differently</span> <span m='337411'>for</span> <span
  m='337703'>each</span> <span m='337995'>of</span> <span m='338287'>us.</span>
  </p><p><span m='338580'>To</span> <span m='338882'>make</span> <span
  m='339184'>sure</span> <span m='339486'>that</span> <span m='339788'>we</span>
  <span m='340090'>all</span> <span m='340392'>get</span> <span
  m='340695'>the</span> <span m='340997'>same</span> <span
  m='341299'>split,</span> <span m='341601'>we'll</span> <span
  m='341903'>set</span> <span m='342205'>our</span> <span
  m='342507'>seed.</span> </p><p><span m='342810'>This</span> <span
  m='343355'>initializes</span> <span m='343900'>the</span> <span
  m='344445'>random</span> <span m='344990'>number</span> <span
  m='345535'>generator.</span> </p><p><span m='346080'>So</span> <span
  m='346801'>type</span> <span m='347522'>set.seed(88),</span> <span
  m='348244'>a</span> <span m='348965'>number</span> <span m='349687'>I</span>
  <span m='350408'>selected.</span> </p><p><span m='353690'>Now,</span> <span
  m='354392'>let's</span> <span m='355095'>use</span> <span
  m='355797'>sample.split.</span> </p><p><span m='356500'>Type</span> <span
  m='357455'>split</span> <span m='358410'>=</span> <span
  m='359365'>sample.split,</span> <span m='360320'>and</span> <span
  m='361275'>then</span> <span m='362230'>in</span> <span
  m='362630'>parentheses,</span> <span m='363030'>we</span> <span
  m='363430'>need</span> <span m='363830'>to</span> <span m='364230'>give</span>
  <span m='364630'>two</span> <span m='365030'>arguments.</span> </p><p><span
  m='365430'>The</span> <span m='366188'>first</span> <span m='366947'>is</span>
  <span m='367706'>our</span> <span m='368465'>outcome</span> <span
  m='369223'>variable</span> <span m='369982'>or</span> <span
  m='370741'>quality$PoorCare,</span> <span m='371500'>and</span> <span
  m='371789'>the</span> <span m='372078'>second</span> <span
  m='372367'>argument</span> <span m='372656'>is</span> <span
  m='372945'>the</span> <span m='373235'>percentage</span> <span
  m='373524'>of</span> <span m='373813'>the</span> <span m='374102'>data</span>
  <span m='374391'>that</span> <span m='374680'>we</span> <span
  m='374970'>want</span> <span m='375618'>in</span> <span m='376266'>the</span>
  <span m='376914'>training</span> <span m='377562'>set.</span> </p><p><span
  m='378210'>We</span> <span m='378823'>type</span> <span
  m='379437'>SplitRatio</span> <span m='380051'>equals,</span> <span
  m='380665'>and</span> <span m='381278'>in</span> <span m='381892'>this</span>
  <span m='382506'>case,</span> <span m='383120'>we'll</span> <span
  m='383445'>put</span> <span m='383770'>75%</span> <span m='384095'>of</span>
  <span m='384420'>the</span> <span m='384745'>data</span> <span
  m='385070'>in</span> <span m='385395'>the</span> <span
  m='385720'>training</span> <span m='386045'>set,</span> <span
  m='386370'>which</span> <span m='386695'>we'll</span> <span
  m='387020'>use</span> <span m='387335'>to</span> <span m='387650'>build</span>
  <span m='387966'>the</span> <span m='388281'>model,</span> <span
  m='388596'>and</span> <span m='388912'>25%</span> <span m='389227'>of</span>
  <span m='389543'>the</span> <span m='389858'>data</span> <span
  m='390173'>in</span> <span m='390489'>the</span> <span
  m='390804'>testing</span> <span m='391120'>set</span> <span
  m='391580'>to</span> <span m='392040'>test</span> <span m='392500'>our</span>
  <span m='392960'>model.</span> </p><p><span m='393420'>Sample.split</span>
  <span m='393970'>randomly</span> <span m='394520'>splits</span> <span
  m='395070'>the</span> <span m='395620'>data.</span> </p><p><span
  m='396170'>But</span> <span m='396458'>it</span> <span m='396747'>also</span>
  <span m='397036'>makes</span> <span m='397325'>sure</span> <span
  m='397614'>that</span> <span m='397903'>the</span> <span
  m='398192'>outcome</span> <span m='398481'>variable</span> <span
  m='398770'>is</span> <span m='399272'>well-balanced</span> <span
  m='399774'>in</span> <span m='400276'>each</span> <span
  m='400778'>piece.</span> </p><p><span m='401280'>We</span> <span
  m='401686'>saw</span> <span m='402093'>earlier</span> <span
  m='402500'>that</span> <span m='402906'>about</span> <span
  m='403313'>75%</span> <span m='403720'>of</span> <span m='404126'>our</span>
  <span m='404533'>patients</span> <span m='404940'>are</span> <span
  m='405450'>receiving</span> <span m='405960'>good</span> <span
  m='406470'>care.</span> </p><p><span m='406980'>This</span> <span
  m='407322'>function</span> <span m='407664'>makes</span> <span
  m='408006'>sure</span> <span m='408348'>that</span> <span m='408691'>in</span>
  <span m='409033'>our</span> <span m='409375'>training</span> <span
  m='409717'>set,</span> <span m='410060'>75%</span> <span m='410500'>of</span>
  <span m='410940'>our</span> <span m='411380'>patients</span> <span
  m='411820'>are</span> <span m='412260'>receiving</span> <span
  m='412700'>good</span> <span m='413140'>care</span> <span
  m='413580'>and</span> <span m='413961'>in</span> <span m='414342'>our</span>
  <span m='414723'>testing</span> <span m='415104'>set</span> <span
  m='415485'>75%</span> <span m='415866'>of</span> <span m='416247'>our</span>
  <span m='416628'>patients</span> <span m='417010'>are</span> <span
  m='417532'>receiving</span> <span m='418055'>good</span> <span
  m='418577'>care.</span> </p><p><span m='419100'>We</span> <span
  m='419384'>want</span> <span m='419668'>to</span> <span m='419952'>do</span>
  <span m='420236'>this</span> <span m='420520'>so</span> <span
  m='420805'>that</span> <span m='421089'>our</span> <span
  m='421373'>test</span> <span m='421657'>set</span> <span m='421941'>is</span>
  <span m='422225'>representative</span> <span m='422510'>of</span> <span
  m='422995'>our</span> <span m='423480'>training</span> <span
  m='423965'>set.</span> </p><p><span m='424450'>Let's</span> <span
  m='425010'>take</span> <span m='425570'>a</span> <span m='426130'>look</span>
  <span m='426690'>at</span> <span m='427250'>split.</span> </p><p><span
  m='427810'>There</span> <span m='428180'>is</span> <span m='428551'>a</span>
  <span m='428922'>TRUE</span> <span m='429293'>or</span> <span
  m='429664'>FALSE</span> <span m='430035'>value</span> <span
  m='430405'>for</span> <span m='430776'>each</span> <span m='431147'>of</span>
  <span m='431518'>our</span> <span m='431889'>observations.</span> </p><p><span
  m='432260'>TRUE</span> <span m='432597'>means</span> <span
  m='432935'>that</span> <span m='433272'>we</span> <span
  m='433610'>should</span> <span m='433947'>put</span> <span
  m='434285'>that</span> <span m='434622'>observation</span> <span
  m='434960'>in</span> <span m='435348'>the</span> <span
  m='435737'>training</span> <span m='436125'>set,</span> <span
  m='436514'>and</span> <span m='436902'>FALSE</span> <span
  m='437291'>means</span> <span m='437680'>that</span> <span
  m='438072'>we</span> <span m='438464'>should</span> <span
  m='438856'>put</span> <span m='439248'>that</span> <span
  m='439640'>observation</span> <span m='440032'>in</span> <span
  m='440424'>the</span> <span m='440816'>testing</span> <span
  m='441208'>set.</span> </p><p><span m='441600'>So</span> <span
  m='441958'>now</span> <span m='442317'>let's</span> <span
  m='442676'>create</span> <span m='443035'>our</span> <span
  m='443393'>training</span> <span m='443752'>and</span> <span
  m='444111'>testing</span> <span m='444470'>sets</span> <span
  m='445112'>using</span> <span m='445754'>the</span> <span
  m='446396'>subset</span> <span m='447038'>function.</span> </p><p><span
  m='447680'>We'll</span> <span m='448331'>call</span> <span
  m='448983'>our</span> <span m='449635'>training</span> <span
  m='450286'>set</span> <span m='450938'>qualityTrain</span> <span
  m='451590'>and</span> <span m='451982'>use</span> <span m='452375'>the</span>
  <span m='452767'>subset</span> <span m='453160'>function</span> <span
  m='453553'>to</span> <span m='453945'>take</span> <span m='454338'>a</span>
  <span m='454731'>subset</span> <span m='455123'>of</span> <span
  m='455516'>quality</span> <span m='455909'>and</span> <span
  m='456239'>only</span> <span m='456569'>taking</span> <span
  m='456899'>the</span> <span m='457229'>observations</span> <span
  m='457559'>for</span> <span m='457889'>which</span> <span
  m='458220'>split</span> <span m='458764'>is</span> <span
  m='459308'>equal</span> <span m='459852'>to</span> <span
  m='460396'>TRUE.</span> </p><p><span m='460940'>We'll</span> <span
  m='461506'>call</span> <span m='462073'>our</span> <span
  m='462640'>testing</span> <span m='463206'>set</span> <span
  m='463773'>qualityTest</span> <span m='464340'>and,</span> <span
  m='464706'>again,</span> <span m='465073'>use</span> <span
  m='465440'>the</span> <span m='465806'>subset</span> <span
  m='466173'>function</span> <span m='466540'>to</span> <span
  m='466934'>take</span> <span m='467329'>the</span> <span
  m='467724'>observations</span> <span m='468119'>of</span> <span
  m='468514'>quality,</span> <span m='468909'>but</span> <span
  m='469318'>this</span> <span m='469727'>time</span> <span
  m='470136'>those</span> <span m='470545'>for</span> <span
  m='470954'>which</span> <span m='471363'>split</span> <span
  m='471772'>is</span> <span m='472181'>equal</span> <span m='472590'>to</span>
  <span m='472999'>FALSE.</span> </p><p><span m='473409'>If</span> <span
  m='473659'>you</span> <span m='473910'>look</span> <span m='474161'>at</span>
  <span m='474412'>the</span> <span m='474662'>number</span> <span
  m='474913'>of</span> <span m='475164'>rows</span> <span m='475415'>in</span>
  <span m='475666'>each</span> <span m='475916'>of</span> <span
  m='476167'>our</span> <span m='476418'>data</span> <span
  m='476669'>sets,</span> <span m='476920'>the</span> <span
  m='477421'>training</span> <span m='477922'>set</span> <span
  m='478423'>and</span> <span m='478925'>then</span> <span m='479426'>the</span>
  <span m='479927'>testing</span> <span m='480428'>set,</span> <span
  m='480930'>you</span> <span m='481248'>can</span> <span m='481566'>see</span>
  <span m='481884'>that</span> <span m='482202'>there</span> <span
  m='482520'>are</span> <span m='482839'>99</span> <span
  m='483157'>observations</span> <span m='483475'>in</span> <span
  m='483793'>the</span> <span m='484111'>training</span> <span
  m='484430'>set</span> <span m='485073'>and</span> <span m='485717'>32</span>
  <span m='486361'>observations</span> <span m='487005'>in</span> <span
  m='487648'>the</span> <span m='488292'>testing</span> <span
  m='488936'>set.</span> </p><p><span m='489580'>Now,</span> <span
  m='489891'>we</span> <span m='490202'>are</span> <span m='490513'>ready</span>
  <span m='490824'>to</span> <span m='491135'>build</span> <span
  m='491446'>a</span> <span m='491757'>logistic</span> <span
  m='492068'>regression</span> <span m='492380'>model</span> <span
  m='492956'>using</span> <span m='493532'>OfficeVisits</span> <span
  m='494108'>and</span> <span m='494684'>Narcotics</span> <span
  m='495260'>as</span> <span m='495986'>independent</span> <span
  m='496713'>variables.</span> </p><p><span m='497440'>We'll</span> <span
  m='498007'>call</span> <span m='498574'>our</span> <span
  m='499141'>model</span> <span m='499708'>QualityLog</span> <span
  m='500275'>and</span> <span m='500842'>use</span> <span m='501409'>the</span>
  <span m='501976'>"glm"</span> <span m='502543'>function</span> <span
  m='503110'>for</span> <span m='503710'>"generalized</span> <span
  m='504310'>linear</span> <span m='504910'>model"</span> <span
  m='505510'>to</span> <span m='506110'>build</span> <span m='506710'>our</span>
  <span m='507225'>logistic</span> <span m='507740'>regression</span> <span
  m='508255'>model.</span> </p><p><span m='508770'>We</span> <span
  m='509067'>start</span> <span m='509364'>by</span> <span
  m='509661'>giving</span> <span m='509958'>the</span> <span
  m='510255'>equation</span> <span m='510552'>we</span> <span
  m='510850'>want</span> <span m='511238'>to</span> <span
  m='511627'>build</span> <span m='512016'>just</span> <span
  m='512405'>like</span> <span m='512793'>in</span> <span
  m='513182'>linear</span> <span m='513571'>regression.</span> </p><p><span
  m='513960'>We</span> <span m='514276'>start</span> <span
  m='514592'>with</span> <span m='514908'>the</span> <span
  m='515225'>dependent</span> <span m='515541'>variable,</span> <span
  m='515857'>and</span> <span m='516173'>then</span> <span m='516490'>the</span>
  <span m='516885'>tilde</span> <span m='517280'>sign,</span> <span
  m='517675'>and</span> <span m='518070'>then</span> <span m='518465'>the</span>
  <span m='518860'>independent</span> <span m='519255'>variables</span> <span
  m='519650'>we</span> <span m='520113'>want</span> <span m='520576'>to</span>
  <span m='521040'>use</span> <span m='521503'>separated</span> <span
  m='521966'>by</span> <span m='522430'>the</span> <span m='522893'>plus</span>
  <span m='523356'>sign.</span> </p><p><span m='523820'>We</span> <span
  m='524078'>then</span> <span m='524337'>give</span> <span
  m='524596'>the</span> <span m='524855'>name</span> <span m='525113'>of</span>
  <span m='525372'>the</span> <span m='525631'>data</span> <span
  m='525890'>set</span> <span m='526156'>we</span> <span m='526423'>want</span>
  <span m='526690'>to</span> <span m='526956'>use</span> <span
  m='527223'>to</span> <span m='527490'>build</span> <span m='527756'>the</span>
  <span m='528023'>model,</span> <span m='528290'>in</span> <span
  m='529032'>this</span> <span m='529775'>case,</span> <span
  m='530517'>qualityTrain.</span> </p><p><span m='531260'>For</span> <span
  m='531659'>a</span> <span m='532058'>logistic</span> <span
  m='532457'>regression</span> <span m='532856'>model,</span> <span
  m='533255'>we</span> <span m='533654'>need</span> <span m='534053'>one</span>
  <span m='534452'>last</span> <span m='534851'>argument,</span> <span
  m='535250'>which</span> <span m='535600'>is</span> <span
  m='535950'>family=binomial.</span> </p><p><span m='541860'>This</span> <span
  m='542241'>tells</span> <span m='542622'>the</span> <span
  m='543003'>glm</span> <span m='543384'>function</span> <span
  m='543765'>to</span> <span m='544146'>build</span> <span m='544527'>a</span>
  <span m='544908'>logistic</span> <span m='545289'>regression</span> <span
  m='545670'>model.</span> </p><p><span m='547480'>Now,</span> <span
  m='547734'>let's</span> <span m='547988'>look</span> <span
  m='548242'>at</span> <span m='548496'>our</span> <span m='548750'>model</span>
  <span m='549004'>using</span> <span m='549258'>the</span> <span
  m='549512'>summary</span> <span m='549766'>function.</span> </p><p><span
  m='552740'>The</span> <span m='553210'>output</span> <span
  m='553680'>looks</span> <span m='554150'>similar</span> <span
  m='554620'>to</span> <span m='555090'>that</span> <span m='555560'>of</span>
  <span m='556030'>a</span> <span m='556500'>linear</span> <span
  m='556970'>regression</span> <span m='557440'>model.</span> </p><p><span
  m='557910'>What</span> <span m='558270'>we</span> <span m='558630'>want</span>
  <span m='558990'>to</span> <span m='559350'>focus</span> <span
  m='559710'>on</span> <span m='560070'>is</span> <span m='560430'>the</span>
  <span m='560790'>coefficients</span> <span m='561150'>table.</span>
  </p><p><span m='561510'>This</span> <span m='561866'>gives</span> <span
  m='562222'>the</span> <span m='562578'>estimate</span> <span
  m='562935'>values</span> <span m='563291'>for</span> <span
  m='563647'>the</span> <span m='564003'>coefficients,</span> <span
  m='564360'>or</span> <span m='564762'>the</span> <span
  m='565165'>betas,</span> <span m='565567'>for</span> <span
  m='565970'>our</span> <span m='566372'>logistic</span> <span
  m='566775'>regression</span> <span m='567177'>model.</span> </p><p><span
  m='567580'>We</span> <span m='568006'>see</span> <span m='568432'>here</span>
  <span m='568858'>that</span> <span m='569285'>the</span> <span
  m='569711'>coefficients</span> <span m='570137'>for</span> <span
  m='570563'>OfficeVisits</span> <span m='570990'>and</span> <span
  m='571501'>Narcotics</span> <span m='572013'>are</span> <span
  m='572525'>both</span> <span m='573036'>positive,</span> <span
  m='573548'>which</span> <span m='574060'>means</span> <span
  m='574468'>that</span> <span m='574877'>higher</span> <span
  m='575286'>values</span> <span m='575695'>in</span> <span
  m='576103'>these</span> <span m='576512'>two</span> <span
  m='576921'>variables</span> <span m='577330'>are</span> <span
  m='577695'>indicative</span> <span m='578061'>of</span> <span
  m='578427'>poor</span> <span m='578792'>care</span> <span m='579158'>as</span>
  <span m='579524'>we</span> <span m='579890'>suspected</span> <span
  m='580345'>from</span> <span m='580800'>looking</span> <span
  m='581255'>at</span> <span m='581710'>the</span> <span m='582165'>data.</span>
  </p><p><span m='582620'>We</span> <span m='582916'>also</span> <span
  m='583212'>see</span> <span m='583508'>that</span> <span
  m='583805'>both</span> <span m='584101'>of</span> <span
  m='584397'>these</span> <span m='584693'>variables</span> <span
  m='584990'>have</span> <span m='585303'>at</span> <span
  m='585617'>least</span> <span m='585931'>one</span> <span
  m='586245'>star,</span> <span m='586558'>meaning</span> <span
  m='586872'>that</span> <span m='587186'>they're</span> <span
  m='587500'>significant</span> <span m='588225'>in</span> <span
  m='588950'>our</span> <span m='589675'>model.</span> </p><p><span
  m='590400'>The</span> <span m='590605'>last</span> <span
  m='590810'>thing</span> <span m='591016'>we</span> <span
  m='591221'>want</span> <span m='591427'>to</span> <span m='591632'>look</span>
  <span m='591838'>at</span> <span m='592043'>in</span> <span
  m='592249'>the</span> <span m='592454'>output</span> <span
  m='592660'>is</span> <span m='593280'>the</span> <span m='593900'>AIC</span>
  <span m='594520'>value.</span> </p><p><span m='595140'>This</span> <span
  m='595416'>is</span> <span m='595692'>a</span> <span m='595968'>measure</span>
  <span m='596244'>of</span> <span m='596520'>the</span> <span
  m='596796'>quality</span> <span m='597072'>of</span> <span
  m='597348'>the</span> <span m='597624'>model</span> <span
  m='597900'>and</span> <span m='598231'>is</span> <span m='598562'>like</span>
  <span m='598893'>Adjusted</span> <span m='599224'>R-squared</span> <span
  m='599555'>in</span> <span m='599886'>that</span> <span m='600217'>it</span>
  <span m='600548'>accounts</span> <span m='600880'>for</span> <span
  m='601277'>the</span> <span m='601674'>number</span> <span
  m='602071'>of</span> <span m='602468'>variables</span> <span
  m='602865'>used</span> <span m='603262'>compared</span> <span
  m='603660'>to</span> <span m='604122'>the</span> <span
  m='604584'>number</span> <span m='605046'>of</span> <span
  m='605508'>observations.</span> </p><p><span m='605970'>Unfortunately,</span>
  <span m='606358'>it</span> <span m='606746'>can</span> <span
  m='607135'>only</span> <span m='607523'>be</span> <span
  m='607911'>compared</span> <span m='608300'>between</span> <span
  m='608718'>models</span> <span m='609137'>on</span> <span
  m='609555'>the</span> <span m='609974'>same</span> <span
  m='610392'>data</span> <span m='610811'>set.</span> </p><p><span
  m='611230'>But</span> <span m='611671'>it</span> <span
  m='612112'>provides</span> <span m='612553'>a</span> <span
  m='612995'>means</span> <span m='613436'>for</span> <span
  m='613877'>model</span> <span m='614318'>selection.</span> </p><p><span
  m='614760'>The</span> <span m='615201'>preferred</span> <span
  m='615642'>model</span> <span m='616083'>is</span> <span m='616524'>the</span>
  <span m='616965'>one</span> <span m='617406'>with</span> <span
  m='617847'>the</span> <span m='618288'>minimum</span> <span
  m='618729'>AIC.</span> </p><p><span m='619170'>Now,</span> <span
  m='619622'>let's</span> <span m='620075'>make</span> <span
  m='620527'>predictions</span> <span m='620980'>on</span> <span
  m='621432'>the</span> <span m='621885'>training</span> <span
  m='622337'>set.</span> </p><p><span m='622790'>We'll</span> <span
  m='623346'>call</span> <span m='623903'>them</span> <span
  m='624460'>predictTrain</span> <span m='625016'>and</span> <span
  m='625573'>use</span> <span m='626130'>the</span> <span
  m='626686'>predict</span> <span m='627243'>function</span> <span
  m='627800'>to</span> <span m='628417'>make</span> <span
  m='629034'>predictions</span> <span m='629651'>using</span> <span
  m='630268'>the</span> <span m='630885'>model</span> <span
  m='631502'>QualityLog,</span> <span m='632120'>and</span> <span
  m='632420'>we'll</span> <span m='632720'>give</span> <span m='633020'>a</span>
  <span m='633320'>second</span> <span m='633620'>argument,</span> <span
  m='633920'>which</span> <span m='634266'>is</span> <span
  m='634613'>type="response".</span> </p><p><span m='639350'>This</span> <span
  m='639850'>tells</span> <span m='640350'>the</span> <span
  m='640850'>predict</span> <span m='641350'>function</span> <span
  m='641850'>to</span> <span m='642350'>give</span> <span m='642850'>us</span>
  <span m='643350'>probabilities.</span> </p><p><span m='643850'>Let's</span>
  <span m='644130'>take</span> <span m='644410'>a</span> <span
  m='644690'>look</span> <span m='644970'>at</span> <span m='645250'>the</span>
  <span m='645530'>statistical</span> <span m='645810'>summary</span> <span
  m='646090'>of</span> <span m='646353'>our</span> <span
  m='646616'>predictions.</span> </p><p><span m='651780'>Since</span> <span
  m='652270'>we're</span> <span m='652760'>expecting</span> <span
  m='653250'>probabilities,</span> <span m='653740'>all</span> <span
  m='654082'>of</span> <span m='654424'>the</span> <span
  m='654766'>numbers</span> <span m='655108'>should</span> <span
  m='655450'>be</span> <span m='655792'>between</span> <span
  m='656134'>zero</span> <span m='656476'>and</span> <span
  m='656818'>one.</span> </p><p><span m='657160'>And</span> <span
  m='657553'>we</span> <span m='657946'>see</span> <span m='658339'>that</span>
  <span m='658732'>the</span> <span m='659125'>minimum</span> <span
  m='659518'>value</span> <span m='659911'>is</span> <span
  m='660304'>about</span> <span m='660697'>0.07</span> <span
  m='661090'>and</span> <span m='661696'>the</span> <span
  m='662303'>maximum</span> <span m='662910'>value</span> <span
  m='663516'>is</span> <span m='664123'>0.98.</span> </p><p><span
  m='664730'>Let's</span> <span m='665112'>see</span> <span m='665495'>if</span>
  <span m='665878'>we're</span> <span m='666261'>predicting</span> <span
  m='666644'>higher</span> <span m='667027'>probabilities</span> <span
  m='667410'>for</span> <span m='667856'>the</span> <span
  m='668303'>actual</span> <span m='668750'>poor</span> <span
  m='669196'>care</span> <span m='669643'>cases</span> <span
  m='670090'>as</span> <span m='670536'>we</span> <span
  m='670983'>expect.</span> </p><p><span m='671430'>To</span> <span
  m='672045'>do</span> <span m='672661'>this,</span> <span m='673277'>use</span>
  <span m='673892'>the</span> <span m='674508'>tapply</span> <span
  m='675124'>function,</span> <span m='675740'>giving</span> <span
  m='677082'>as</span> <span m='678425'>arguments</span> <span
  m='679768'>predictTrain</span> <span m='681111'>and</span> <span
  m='682454'>then</span> <span m='683797'>QualityTrain$PoorCare</span> <span
  m='685140'>and</span> <span m='685580'>then</span> <span
  m='686020'>mean.</span> </p><p><span m='686460'>This</span> <span
  m='686880'>will</span> <span m='687300'>compute</span> <span
  m='687720'>the</span> <span m='688140'>average</span> <span
  m='688560'>prediction</span> <span m='688980'>for</span> <span
  m='689445'>each</span> <span m='689910'>of</span> <span m='690375'>the</span>
  <span m='690840'>true</span> <span m='691305'>outcomes.</span> </p><p><span
  m='691770'>So</span> <span m='692099'>we</span> <span m='692428'>see</span>
  <span m='692757'>that</span> <span m='693086'>for</span> <span
  m='693415'>all</span> <span m='693745'>of</span> <span m='694074'>the</span>
  <span m='694403'>true</span> <span m='694732'>poor</span> <span
  m='695061'>care</span> <span m='695390'>cases,</span> <span
  m='695720'>we</span> <span m='696223'>predict</span> <span
  m='696727'>an</span> <span m='697231'>average</span> <span
  m='697735'>probability</span> <span m='698238'>of</span> <span
  m='698742'>about</span> <span m='699246'>0.44.</span> </p><p><span
  m='699750'>And</span> <span m='700045'>all</span> <span m='700340'>of</span>
  <span m='700635'>the</span> <span m='700930'>true</span> <span
  m='701225'>good</span> <span m='701520'>care</span> <span
  m='701815'>cases,</span> <span m='702110'>we</span> <span
  m='702598'>predict</span> <span m='703087'>an</span> <span
  m='703576'>average</span> <span m='704065'>probability</span> <span
  m='704553'>of</span> <span m='705042'>about</span> <span
  m='705531'>0.19.</span> </p><p><span m='706020'>So</span> <span
  m='706220'>this</span> <span m='706420'>is</span> <span m='706620'>a</span>
  <span m='706820'>good</span> <span m='707020'>sign,</span> <span
  m='707220'>because</span> <span m='707420'>it</span> <span
  m='707620'>looks</span> <span m='707873'>like</span> <span
  m='708126'>we're</span> <span m='708380'>predicting</span> <span
  m='708633'>a</span> <span m='708886'>higher</span> <span
  m='709140'>probability</span> <span m='709692'>for</span> <span
  m='710245'>the</span> <span m='710798'>actual</span> <span
  m='711351'>poor</span> <span m='711904'>care</span> <span
  m='712457'>cases.</span> </p><p><span m='713010'>Now</span> <span
  m='713282'>that</span> <span m='713554'>we</span> <span m='713826'>have</span>
  <span m='714098'>our</span> <span m='714370'>model,</span> <span
  m='714642'>in</span> <span m='714914'>the</span> <span m='715186'>next</span>
  <span m='715458'>video,</span> <span m='715730'>we'll</span> <span
  m='716103'>discuss</span> <span m='716476'>how</span> <span
  m='716849'>to</span> <span m='717222'>assess</span> <span
  m='717595'>the</span> <span m='717968'>accuracy</span> <span
  m='718341'>of</span> <span m='718714'>our</span> <span
  m='719087'>predictions.</span> </p>
embedded_media:
  - uid: 7f323f7633ad38cce030a7d81c8f8dbc
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: JcKvI821H0c
  - uid: 8ee4582a3c621da0b48a562ff68f3d1b
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: JcKvI821H0c
  - uid: 263cff1886c2c4f9085c315935702102
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/JcKvI821H0c/default.jpg'
  - uid: 19021a1705df403e58e7b17cd5832986
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: JcKvI821H0c.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/video-4-logistic-regression-in-r-0/JcKvI821H0c.srt
  - uid: 5f562530d6f82e617a35e72d3955309e
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: JcKvI821H0c.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-4-logistic-regression-in-r/video-4-logistic-regression-in-r-0/JcKvI821H0c.pdf
  - uid: 85450c503608362099662d2edcc2f432
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: f6b903405f276d14734434ba4b812c5d
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8a4d6147eb750236f7def4bb1939c2fb
    parent_uid: d56beae65d3eccccadba697fc8c6288b
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.2.06_300k.mp4
type: courses
layout: video
---
