---
title: 'Video 3: A Sophisticated Baseline Method'
uid: 93d87890df832e4f0789963c954b04fc
parent_uid: e6c5cd7b6c458a54bf3513e7c7c4921e
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-3-a-sophisticated-baseline-method/video-3-a-sophisticated-baseline-method-0
short_url: video-3-a-sophisticated-baseline-method-0
inline_embed_id: 84136307video3asophisticatedbaselinemethod65632103
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>Now,</span> <span m='4891'>we're</span> <span
  m='5282'>ready</span> <span m='5673'>to</span> <span m='6065'>actually</span>
  <span m='6456'>start</span> <span m='6847'>building</span> <span
  m='7238'>models.</span> </p><p><span m='7630'>So</span> <span
  m='7880'>as</span> <span m='8130'>usual,</span> <span m='8380'>the</span>
  <span m='8630'>first</span> <span m='8880'>thing</span> <span
  m='9130'>we're</span> <span m='9380'>going</span> <span m='9630'>to</span>
  <span m='9880'>do</span> <span m='10130'>is</span> <span
  m='10401'>split</span> <span m='10673'>our</span> <span m='10945'>data</span>
  <span m='11217'>into</span> <span m='11489'>a</span> <span
  m='11760'>training</span> <span m='12032'>and</span> <span m='12304'>a</span>
  <span m='12576'>testing</span> <span m='12848'>set.</span> </p><p><span
  m='13120'>And</span> <span m='13370'>for</span> <span m='13620'>this</span>
  <span m='13870'>problem,</span> <span m='14120'>we're</span> <span
  m='14370'>actually</span> <span m='14620'>going</span> <span
  m='14953'>to</span> <span m='15287'>train</span> <span m='15620'>on</span>
  <span m='15954'>data</span> <span m='16288'>from</span> <span
  m='16621'>the</span> <span m='16955'>2004</span> <span m='17289'>and</span>
  <span m='17622'>2008</span> <span m='17956'>elections,</span> <span
  m='18290'>and</span> <span m='18629'>we're</span> <span m='18968'>going</span>
  <span m='19307'>to</span> <span m='19646'>test</span> <span
  m='19985'>on</span> <span m='20324'>data</span> <span m='20663'>from</span>
  <span m='21002'>the</span> <span m='21341'>2012</span> <span
  m='21680'>presidential</span> <span m='22485'>election.</span> </p><p><span
  m='23290'>So</span> <span m='23551'>to</span> <span m='23812'>do</span> <span
  m='24073'>that,</span> <span m='24334'>we'll</span> <span
  m='24595'>create</span> <span m='24856'>a</span> <span m='25117'>data</span>
  <span m='25378'>frame</span> <span m='25640'>called</span> <span
  m='26055'>Train,</span> <span m='26471'>using</span> <span
  m='26886'>the</span> <span m='27302'>subset</span> <span
  m='27717'>function</span> <span m='28133'>that</span> <span
  m='28548'>breaks</span> <span m='28964'>down</span> <span m='29380'>the</span>
  <span m='29791'>original</span> <span m='30202'>polling</span> <span
  m='30613'>data</span> <span m='31025'>frame</span> <span m='31436'>and</span>
  <span m='31847'>only</span> <span m='32259'>stores</span> <span
  m='32794'>the</span> <span m='33330'>observations</span> <span
  m='33866'>when</span> <span m='34401'>either</span> <span m='34937'>the</span>
  <span m='35473'>Year</span> <span m='36008'>was</span> <span
  m='36544'>2004</span> <span m='37080'>or</span> <span m='37940'>when</span>
  <span m='38800'>the</span> <span m='39660'>Year</span> <span
  m='40520'>was</span> <span m='41380'>2008.</span> </p><p><span
  m='42240'>And</span> <span m='42485'>to</span> <span m='42731'>obtain</span>
  <span m='42977'>the</span> <span m='43222'>testing</span> <span
  m='43468'>set,</span> <span m='43714'>we're</span> <span
  m='43960'>going</span> <span m='44385'>to</span> <span m='44811'>use</span>
  <span m='45237'>subset</span> <span m='45663'>to</span> <span
  m='46089'>create</span> <span m='46515'>a</span> <span m='46940'>data</span>
  <span m='47366'>frame</span> <span m='47792'>called</span> <span
  m='48218'>Test</span> <span m='48644'>that</span> <span m='49070'>saves</span>
  <span m='49541'>the</span> <span m='50013'>observations</span> <span
  m='50485'>in</span> <span m='50956'>polling</span> <span
  m='51428'>where</span> <span m='51900'>the</span> <span m='52757'>year</span>
  <span m='53615'>was</span> <span m='54472'>2012.</span> </p><p><span
  m='55330'>So</span> <span m='55592'>now</span> <span m='55854'>that</span>
  <span m='56116'>we've</span> <span m='56379'>broken</span> <span
  m='56641'>it</span> <span m='56903'>down</span> <span m='57166'>into</span>
  <span m='57428'>a</span> <span m='57690'>training</span> <span
  m='57953'>and</span> <span m='58215'>a</span> <span m='58477'>testing</span>
  <span m='58740'>set,</span> <span m='59095'>we</span> <span
  m='59450'>want</span> <span m='59805'>to</span> <span
  m='60160'>understand</span> <span m='60515'>the</span> <span
  m='60870'>prediction</span> <span m='61225'>of</span> <span
  m='61580'>our</span> <span m='61935'>baseline</span> <span
  m='62290'>model</span> <span m='62628'>against</span> <span
  m='62967'>which</span> <span m='63305'>we</span> <span m='63644'>want</span>
  <span m='63982'>to</span> <span m='64321'>compare</span> <span
  m='64660'>a</span> <span m='65102'>later</span> <span
  m='65544'>logistic</span> <span m='65986'>regression</span> <span
  m='66428'>model.</span> </p><p><span m='66870'>So</span> <span
  m='67111'>to</span> <span m='67352'>do</span> <span m='67593'>that,</span>
  <span m='67834'>we'll</span> <span m='68075'>look</span> <span
  m='68316'>at</span> <span m='68557'>the</span> <span
  m='68798'>breakdown</span> <span m='69039'>of</span> <span
  m='69317'>the</span> <span m='69596'>dependent</span> <span
  m='69875'>variable</span> <span m='70153'>in</span> <span m='70432'>the</span>
  <span m='70711'>training</span> <span m='70990'>set</span> <span
  m='71412'>using</span> <span m='71834'>the</span> <span m='72256'>table</span>
  <span m='72678'>function.</span> </p><p><span m='77380'>What</span> <span
  m='77721'>we</span> <span m='78063'>can</span> <span m='78404'>see</span>
  <span m='78746'>here</span> <span m='79087'>is</span> <span
  m='79429'>that</span> <span m='79770'>in</span> <span m='80112'>47</span>
  <span m='80453'>of</span> <span m='80795'>the</span> <span
  m='81136'>100</span> <span m='81478'>training</span> <span
  m='81820'>observations,</span> <span m='82236'>the</span> <span
  m='82653'>Democrat</span> <span m='83070'>won</span> <span
  m='83486'>the</span> <span m='83903'>state,</span> <span m='84320'>and</span>
  <span m='84639'>in</span> <span m='84958'>53</span> <span m='85277'>of</span>
  <span m='85596'>the</span> <span m='85915'>observations,</span> <span
  m='86234'>the</span> <span m='86553'>Republican</span> <span
  m='86872'>won</span> <span m='87191'>the</span> <span m='87510'>state.</span>
  </p><p><span m='87830'>So</span> <span m='88221'>our</span> <span
  m='88612'>simple</span> <span m='89004'>baseline</span> <span
  m='89395'>model</span> <span m='89787'>is</span> <span m='90178'>always</span>
  <span m='90570'>going</span> <span m='90883'>to</span> <span
  m='91197'>predict</span> <span m='91511'>the</span> <span
  m='91825'>more</span> <span m='92138'>common</span> <span
  m='92452'>outcome,</span> <span m='92766'>which</span> <span
  m='93080'>is</span> <span m='93341'>that</span> <span m='93602'>the</span>
  <span m='93863'>Republican</span> <span m='94124'>is</span> <span
  m='94385'>going</span> <span m='94646'>to</span> <span m='94907'>win</span>
  <span m='95168'>the</span> <span m='95429'>state.</span> </p><p><span
  m='95690'>And</span> <span m='95915'>we</span> <span m='96140'>see</span>
  <span m='96365'>that</span> <span m='96590'>the</span> <span
  m='96815'>simple</span> <span m='97040'>baseline</span> <span
  m='97265'>model</span> <span m='97490'>will</span> <span m='98036'>have</span>
  <span m='98583'>accuracy</span> <span m='99130'>of</span> <span
  m='99676'>53%</span> <span m='100223'>on</span> <span m='100770'>the</span>
  <span m='101316'>training</span> <span m='101863'>set.</span> </p><p><span
  m='102410'>Now,</span> <span m='102867'>unfortunately,</span> <span
  m='103325'>this</span> <span m='103782'>is</span> <span m='104240'>a</span>
  <span m='104697'>pretty</span> <span m='105155'>weak</span> <span
  m='105612'>model.</span> </p><p><span m='106070'>It</span> <span
  m='106445'>always</span> <span m='106821'>predicts</span> <span
  m='107196'>Republican,</span> <span m='107572'>even</span> <span
  m='107947'>for</span> <span m='108323'>a</span> <span m='108698'>very</span>
  <span m='109074'>landslide</span> <span m='109450'>Democratic</span> <span
  m='109857'>state,</span> <span m='110264'>where</span> <span
  m='110671'>the</span> <span m='111078'>Democrat</span> <span
  m='111485'>was</span> <span m='111892'>polling</span> <span
  m='112300'>by</span> <span m='112713'>15%</span> <span m='113127'>or</span>
  <span m='113541'>20%</span> <span m='113955'>ahead</span> <span
  m='114368'>of</span> <span m='114782'>the</span> <span
  m='115196'>Republican.</span> </p><p><span m='115610'>So</span> <span
  m='115940'>nobody</span> <span m='116270'>would</span> <span
  m='116600'>really</span> <span m='116930'>consider</span> <span
  m='117260'>this</span> <span m='117590'>to</span> <span m='117920'>be</span>
  <span m='118250'>a</span> <span m='118580'>credible</span> <span
  m='118910'>model.</span> </p><p><span m='119240'>So</span> <span
  m='119594'>we</span> <span m='119948'>need</span> <span m='120302'>to</span>
  <span m='120656'>think</span> <span m='121010'>of</span> <span
  m='121365'>a</span> <span m='121719'>smarter</span> <span
  m='122073'>baseline</span> <span m='122427'>model</span> <span
  m='122781'>against</span> <span m='123135'>which</span> <span
  m='123490'>we</span> <span m='123833'>can</span> <span
  m='124176'>compare</span> <span m='124520'>our</span> <span
  m='124863'>logistic</span> <span m='125206'>regression</span> <span
  m='125550'>models</span> <span m='125893'>that</span> <span
  m='126236'>we're</span> <span m='126580'>going</span> <span
  m='126952'>to</span> <span m='127325'>develop</span> <span
  m='127697'>later.</span> </p><p><span m='128070'>So</span> <span
  m='128535'>a</span> <span m='129000'>reasonable</span> <span
  m='129465'>smart</span> <span m='129930'>baseline</span> <span
  m='130395'>would</span> <span m='130860'>be</span> <span m='131114'>to</span>
  <span m='131369'>just</span> <span m='131623'>take</span> <span
  m='131878'>one</span> <span m='132132'>of</span> <span m='132387'>the</span>
  <span m='132641'>polls--</span> <span m='132896'>in</span> <span
  m='133150'>our</span> <span m='133405'>case,</span> <span
  m='133660'>we'll</span> <span m='134008'>take</span> <span
  m='134357'>Rasmussen--</span> <span m='134705'>and</span> <span
  m='135054'>make</span> <span m='135402'>a</span> <span
  m='135751'>prediction</span> <span m='136100'>based</span> <span
  m='136382'>on</span> <span m='136664'>who</span> <span m='136946'>poll</span>
  <span m='137228'>said</span> <span m='137510'>was</span> <span
  m='137792'>winning</span> <span m='138074'>in</span> <span
  m='138356'>the</span> <span m='138638'>state.</span> </p><p><span
  m='138920'>So</span> <span m='139272'>for</span> <span
  m='139624'>instance,</span> <span m='139976'>if</span> <span
  m='140328'>the</span> <span m='140681'>Republican</span> <span
  m='141033'>is</span> <span m='141385'>polling</span> <span
  m='141737'>ahead,</span> <span m='142090'>the</span> <span
  m='142576'>Rasmussen</span> <span m='143063'>smart</span> <span
  m='143550'>baseline</span> <span m='144036'>would</span> <span
  m='144523'>just</span> <span m='145010'>pick</span> <span
  m='145300'>the</span> <span m='145590'>Republican</span> <span
  m='145880'>to</span> <span m='146170'>be</span> <span m='146460'>the</span>
  <span m='146750'>winner.</span> </p><p><span m='147040'>If</span> <span
  m='147324'>the</span> <span m='147608'>Democrat</span> <span
  m='147892'>was</span> <span m='148176'>ahead,</span> <span
  m='148460'>it</span> <span m='148744'>would</span> <span
  m='149028'>pick</span> <span m='149312'>the</span> <span
  m='149596'>Democrat.</span> </p><p><span m='149880'>And</span> <span
  m='150112'>if</span> <span m='150344'>they</span> <span m='150576'>were</span>
  <span m='150808'>tied,</span> <span m='151041'>the</span> <span
  m='151273'>model</span> <span m='151505'>would</span> <span
  m='151737'>not</span> <span m='151970'>know</span> <span
  m='152474'>which</span> <span m='152978'>one</span> <span m='153482'>to</span>
  <span m='153986'>select.</span> </p><p><span m='154490'>So</span> <span
  m='154885'>to</span> <span m='155280'>compute</span> <span
  m='155675'>this</span> <span m='156070'>smart</span> <span
  m='156465'>baseline,</span> <span m='156860'>we're</span> <span
  m='157100'>going</span> <span m='157340'>to</span> <span m='157580'>use</span>
  <span m='157820'>a</span> <span m='158060'>new</span> <span
  m='158300'>function</span> <span m='158540'>called</span> <span
  m='158780'>the</span> <span m='159020'>sign</span> <span
  m='159260'>function.</span> </p><p><span m='160500'>And</span> <span
  m='160768'>what</span> <span m='161037'>this</span> <span
  m='161306'>function</span> <span m='161575'>does</span> <span
  m='161843'>is,</span> <span m='162112'>if</span> <span m='162381'>it's</span>
  <span m='162650'>passed</span> <span m='162983'>a</span> <span
  m='163316'>positive</span> <span m='163650'>number,</span> <span
  m='163983'>it</span> <span m='164316'>returns</span> <span
  m='164650'>the</span> <span m='164983'>value</span> <span m='165316'>1.</span>
  </p><p><span m='165650'>If</span> <span m='166012'>it's</span> <span
  m='166374'>passed</span> <span m='166736'>a</span> <span
  m='167098'>negative</span> <span m='167460'>number,</span> <span
  m='167822'>it</span> <span m='168184'>returns</span> <span
  m='168546'>negative</span> <span m='168908'>1.</span> </p><p><span
  m='169270'>And</span> <span m='169621'>if</span> <span m='169972'>it's</span>
  <span m='170323'>passed</span> <span m='170674'>0,</span> <span
  m='171025'>it</span> <span m='171376'>returns</span> <span
  m='171727'>0.</span> </p><p><span m='172079'>So</span> <span
  m='172604'>if</span> <span m='173130'>we</span> <span m='173656'>passed</span>
  <span m='174181'>the</span> <span m='174707'>Rasmussen</span> <span
  m='175233'>variable</span> <span m='175758'>into</span> <span
  m='176284'>sign,</span> <span m='176810'>whenever</span> <span
  m='177158'>the</span> <span m='177507'>Republican</span> <span
  m='177856'>was</span> <span m='178205'>winning</span> <span
  m='178553'>the</span> <span m='178902'>state,</span> <span
  m='179251'>meaning</span> <span m='179600'>Rasmussen</span> <span
  m='179960'>is</span> <span m='180320'>positive,</span> <span
  m='180680'>it's</span> <span m='181040'>going</span> <span
  m='181400'>to</span> <span m='181760'>return</span> <span m='182120'>a</span>
  <span m='182480'>1.</span> </p><p><span m='182840'>So</span> <span
  m='183157'>for</span> <span m='183475'>instance,</span> <span
  m='183792'>if</span> <span m='184110'>the</span> <span m='184427'>value</span>
  <span m='184745'>20</span> <span m='185062'>is</span> <span
  m='185380'>passed,</span> <span m='185762'>meaning</span> <span
  m='186145'>the</span> <span m='186527'>Republican</span> <span
  m='186910'>is</span> <span m='187292'>polling</span> <span
  m='187675'>20</span> <span m='188057'>ahead,</span> <span m='188440'>it</span>
  <span m='188783'>returns</span> <span m='189126'>1.</span> </p><p><span
  m='189470'>So</span> <span m='189874'>1</span> <span
  m='190278'>signifies</span> <span m='190682'>that</span> <span
  m='191086'>the</span> <span m='191490'>Republican</span> <span
  m='191894'>is</span> <span m='192298'>predicted</span> <span
  m='192702'>to</span> <span m='193106'>win.</span> </p><p><span
  m='193510'>If</span> <span m='193781'>the</span> <span
  m='194052'>Democrat</span> <span m='194323'>is</span> <span
  m='194594'>leading</span> <span m='194865'>in</span> <span
  m='195136'>the</span> <span m='195407'>Rasmussen</span> <span
  m='195678'>poll,</span> <span m='195950'>it'll</span> <span
  m='196320'>take</span> <span m='196690'>on</span> <span m='197060'>a</span>
  <span m='197430'>negative</span> <span m='197800'>value.</span> </p><p><span
  m='198170'>So</span> <span m='198476'>if</span> <span m='198782'>we</span>
  <span m='199088'>took</span> <span m='199394'>for</span> <span
  m='199700'>instance</span> <span m='200006'>the</span> <span
  m='200313'>sign</span> <span m='200619'>of</span> <span m='200925'>-10,</span>
  <span m='201231'>we</span> <span m='201537'>get</span> <span
  m='201843'>-1.</span> </p><p><span m='202150'>So</span> <span
  m='202594'>-1</span> <span m='203038'>means</span> <span
  m='203482'>this</span> <span m='203927'>smart</span> <span
  m='204371'>baseline</span> <span m='204815'>is</span> <span
  m='205260'>predicting</span> <span m='205682'>that</span> <span
  m='206105'>the</span> <span m='206528'>Democrat</span> <span
  m='206951'>won</span> <span m='207374'>the</span> <span
  m='207797'>state.</span> </p><p><span m='208220'>And</span> <span
  m='208472'>finally,</span> <span m='208724'>if</span> <span
  m='208976'>we</span> <span m='209228'>took</span> <span m='209481'>the</span>
  <span m='209733'>sign</span> <span m='209985'>of</span> <span
  m='210237'>0,</span> <span m='210490'>meaning</span> <span
  m='210837'>that</span> <span m='211185'>the</span> <span
  m='211532'>Rasmussen</span> <span m='211880'>poll</span> <span
  m='212227'>had</span> <span m='212575'>a</span> <span m='212922'>tie,</span>
  <span m='213270'>it</span> <span m='213526'>returns</span> <span
  m='213782'>0,</span> <span m='214038'>saying</span> <span
  m='214295'>that</span> <span m='214551'>the</span> <span
  m='214807'>model</span> <span m='215063'>is</span> <span
  m='215320'>inconclusive</span> <span m='215797'>about</span> <span
  m='216275'>who's</span> <span m='216752'>going</span> <span
  m='217230'>to</span> <span m='217707'>win</span> <span m='218185'>the</span>
  <span m='218662'>state.</span> </p><p><span m='219140'>So</span> <span
  m='219538'>now,</span> <span m='219937'>we're</span> <span
  m='220335'>ready</span> <span m='220734'>to</span> <span
  m='221132'>actually</span> <span m='221531'>compute</span> <span
  m='221930'>this</span> <span m='222378'>prediction</span> <span
  m='222827'>for</span> <span m='223276'>all</span> <span m='223725'>of</span>
  <span m='224173'>our</span> <span m='224622'>training</span> <span
  m='225071'>set.</span> </p><p><span m='225520'>And</span> <span
  m='225715'>we</span> <span m='225911'>can</span> <span m='226106'>take</span>
  <span m='226302'>a</span> <span m='226497'>look</span> <span
  m='226693'>at</span> <span m='226888'>the</span> <span
  m='227084'>breakdown</span> <span m='227280'>of</span> <span
  m='227695'>that</span> <span m='228111'>using</span> <span
  m='228527'>the</span> <span m='228942'>table</span> <span
  m='229358'>function</span> <span m='229774'>applied</span> <span
  m='230190'>to</span> <span m='230927'>the</span> <span m='231665'>sign</span>
  <span m='232403'>of</span> <span m='233140'>the</span> <span
  m='233878'>training</span> <span m='234616'>set's</span> <span
  m='235353'>Rasmussen</span> <span m='236091'>variable.</span> </p><p><span
  m='236829'>And</span> <span m='237079'>what</span> <span m='237330'>we</span>
  <span m='237581'>can</span> <span m='237832'>see</span> <span
  m='238082'>is</span> <span m='238333'>that</span> <span m='238584'>in</span>
  <span m='238835'>56</span> <span m='239086'>of</span> <span
  m='239336'>the</span> <span m='239587'>100</span> <span
  m='239838'>training</span> <span m='240089'>set</span> <span
  m='240340'>observations,</span> <span m='240972'>the</span> <span
  m='241604'>smart</span> <span m='242236'>baseline</span> <span
  m='242868'>predicted</span> <span m='243500'>that</span> <span
  m='243820'>the</span> <span m='244140'>Republican</span> <span
  m='244460'>was</span> <span m='244780'>going</span> <span m='245100'>to</span>
  <span m='245420'>win.</span> </p><p><span m='245740'>In</span> <span
  m='246170'>42</span> <span m='246600'>instances,</span> <span
  m='247030'>it</span> <span m='247460'>predicted</span> <span
  m='247890'>the</span> <span m='248320'>Democrat.</span> </p><p><span
  m='248750'>And</span> <span m='249162'>in</span> <span m='249575'>two</span>
  <span m='249988'>instances,</span> <span m='250401'>it</span> <span
  m='250814'>was</span> <span m='251227'>inconclusive.</span> </p><p><span
  m='251640'>So</span> <span m='251887'>what</span> <span m='252134'>we</span>
  <span m='252381'>really</span> <span m='252628'>want</span> <span
  m='252875'>to</span> <span m='253122'>do</span> <span m='253370'>is</span>
  <span m='253617'>to</span> <span m='253864'>see</span> <span
  m='254111'>the</span> <span m='254358'>breakdown</span> <span
  m='254605'>of</span> <span m='254852'>how</span> <span m='255100'>the</span>
  <span m='255519'>smart</span> <span m='255938'>baseline</span> <span
  m='256357'>model</span> <span m='256776'>does,</span> <span
  m='257195'>compared</span> <span m='257614'>to</span> <span
  m='258033'>the</span> <span m='258452'>actual</span> <span
  m='258871'>result</span> <span m='259290'>--</span> <span
  m='259640'>who</span> <span m='259990'>actually</span> <span
  m='260340'>won</span> <span m='260690'>the</span> <span
  m='261040'>state.</span> </p><p><span m='261390'>So</span> <span
  m='261653'>we</span> <span m='261916'>want</span> <span m='262180'>to</span>
  <span m='262443'>again</span> <span m='262706'>use</span> <span
  m='262970'>the</span> <span m='263233'>table</span> <span
  m='263496'>function,</span> <span m='263760'>but</span> <span
  m='264108'>this</span> <span m='264456'>time,</span> <span
  m='264804'>we</span> <span m='265152'>want</span> <span m='265500'>to</span>
  <span m='265848'>compare</span> <span m='266196'>the</span> <span
  m='266544'>training</span> <span m='266892'>set's</span> <span
  m='267240'>outcome</span> <span m='267916'>against</span> <span
  m='268592'>the</span> <span m='269268'>sign</span> <span m='269945'>of</span>
  <span m='270621'>the</span> <span m='271297'>polling</span> <span
  m='271973'>data.</span> </p><p><span m='276180'>So</span> <span
  m='276490'>in</span> <span m='276800'>this</span> <span
  m='277110'>table,</span> <span m='277420'>the</span> <span
  m='277730'>rows</span> <span m='278040'>are</span> <span m='278350'>the</span>
  <span m='278660'>true</span> <span m='278970'>outcome</span> <span
  m='279280'>--</span> <span m='279590'>1</span> <span m='279893'>is</span>
  <span m='280196'>for</span> <span m='280500'>Republican,</span> <span
  m='280803'>0</span> <span m='281106'>is</span> <span m='281410'>for</span>
  <span m='281713'>Democrat</span> <span m='282016'>--</span> <span
  m='282320'>and</span> <span m='282707'>the</span> <span
  m='283094'>columns</span> <span m='283481'>are</span> <span
  m='283868'>the</span> <span m='284255'>smart</span> <span
  m='284642'>baseline</span> <span m='285029'>predictions,</span> <span
  m='285416'>-1,</span> <span m='285803'>0,</span> <span m='286190'>or</span>
  <span m='286735'>1.</span> </p><p><span m='287280'>What</span> <span
  m='287600'>we</span> <span m='287921'>can</span> <span m='288242'>see</span>
  <span m='288563'>is</span> <span m='288884'>in</span> <span
  m='289205'>the</span> <span m='289525'>top</span> <span m='289846'>left</span>
  <span m='290167'>corner</span> <span m='290488'>over</span> <span
  m='290809'>here,</span> <span m='291130'>we</span> <span
  m='291670'>have</span> <span m='292210'>42</span> <span
  m='292750'>observations</span> <span m='293290'>where</span> <span
  m='293830'>the</span> <span m='294370'>Rasmussen</span> <span
  m='294910'>smart</span> <span m='295450'>baseline</span> <span
  m='295990'>predicted</span> <span m='296308'>the</span> <span
  m='296626'>Democrat</span> <span m='296944'>would</span> <span
  m='297262'>win,</span> <span m='297580'>and</span> <span m='297956'>the</span>
  <span m='298333'>Democrat</span> <span m='298710'>actually</span> <span
  m='299086'>did</span> <span m='299463'>win.</span> </p><p><span
  m='299840'>There</span> <span m='300233'>were</span> <span
  m='300626'>52</span> <span m='301020'>observations</span> <span
  m='301413'>where</span> <span m='301806'>the</span> <span
  m='302200'>smart</span> <span m='302593'>baseline</span> <span
  m='302986'>predicted</span> <span m='303380'>the</span> <span
  m='303700'>Republican</span> <span m='304020'>would</span> <span
  m='304340'>win,</span> <span m='304660'>and</span> <span m='304980'>the</span>
  <span m='305300'>Republican</span> <span m='305620'>actually</span> <span
  m='305940'>did</span> <span m='306505'>win.</span> </p><p><span
  m='307070'>Again,</span> <span m='307554'>there</span> <span
  m='308038'>were</span> <span m='308522'>those</span> <span
  m='309007'>two</span> <span m='309491'>inconclusive</span> <span
  m='309975'>observations.</span> </p><p><span m='310460'>And</span> <span
  m='310750'>finally,</span> <span m='311040'>there</span> <span
  m='311330'>were</span> <span m='311620'>four</span> <span
  m='311910'>mistakes.</span> </p><p><span m='312200'>There</span> <span
  m='312554'>were</span> <span m='312908'>four</span> <span
  m='313262'>times</span> <span m='313616'>where</span> <span
  m='313970'>the</span> <span m='314324'>smart</span> <span
  m='314678'>baseline</span> <span m='315032'>model</span> <span
  m='315386'>predicted</span> <span m='315740'>that</span> <span
  m='316044'>the</span> <span m='316348'>Republican</span> <span
  m='316653'>would</span> <span m='316957'>win,</span> <span
  m='317262'>but</span> <span m='317566'>actually</span> <span
  m='317871'>the</span> <span m='318175'>Democrat</span> <span
  m='318480'>won</span> <span m='318906'>the</span> <span
  m='319333'>state.</span> </p><p><span m='319760'>So</span> <span
  m='319961'>as</span> <span m='320162'>we</span> <span m='320363'>can</span>
  <span m='320564'>see,</span> <span m='320765'>this</span> <span
  m='320966'>model,</span> <span m='321167'>with</span> <span
  m='321368'>four</span> <span m='321569'>mistakes</span> <span
  m='321770'>and</span> <span m='322128'>two</span> <span
  m='322487'>inconclusive</span> <span m='322846'>results</span> <span
  m='323205'>out</span> <span m='323564'>of</span> <span m='323923'>the</span>
  <span m='324282'>100</span> <span m='324641'>training</span> <span
  m='325000'>set</span> <span m='325406'>observations</span> <span
  m='325812'>is</span> <span m='326218'>doing</span> <span
  m='326624'>much,</span> <span m='327030'>much</span> <span
  m='327436'>better</span> <span m='327842'>than</span> <span
  m='328248'>the</span> <span m='328654'>naive</span> <span
  m='329060'>baseline,</span> <span m='329476'>which</span> <span
  m='329893'>simply</span> <span m='330310'>was</span> <span
  m='330726'>always</span> <span m='331143'>predicting</span> <span
  m='331560'>the</span> <span m='331806'>Republican</span> <span
  m='332053'>would</span> <span m='332300'>win</span> <span
  m='332546'>and</span> <span m='332793'>made</span> <span m='333040'>47</span>
  <span m='333496'>mistakes</span> <span m='333953'>on</span> <span
  m='334410'>the</span> <span m='334866'>same</span> <span
  m='335323'>data.</span> </p><p><span m='335780'>So</span> <span
  m='336073'>we</span> <span m='336366'>see</span> <span m='336660'>that</span>
  <span m='336953'>this</span> <span m='337246'>is</span> <span
  m='337540'>a</span> <span m='337833'>much</span> <span m='338126'>more</span>
  <span m='338420'>reasonable</span> <span m='338713'>baseline</span> <span
  m='339006'>model</span> <span m='339300'>to</span> <span
  m='339677'>carry</span> <span m='340055'>forward,</span> <span
  m='340432'>against</span> <span m='340810'>which</span> <span
  m='341187'>we</span> <span m='341565'>can</span> <span
  m='341942'>compare</span> <span m='342320'>our</span> <span
  m='343027'>logistic</span> <span m='343735'>regression-based</span> <span
  m='344442'>approach.</span> </p>
embedded_media:
  - uid: 298c01518ddd4920bae66e41202cd6de
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: lm_qReHVm0A
  - uid: 9c937b56af6060ae60943b639b4779b6
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: lm_qReHVm0A
  - uid: 53974715b77190cedcc6a7b994614c31
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/lm_qReHVm0A/default.jpg'
  - uid: 9ad7e2ff2ba6649e6144d3c0ecc03d88
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: lm_qReHVm0A.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-3-a-sophisticated-baseline-method/video-3-a-sophisticated-baseline-method-0/lm_qReHVm0A.srt
  - uid: 5d4d718838026357c6beab68bb58c2dd
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: lm_qReHVm0A.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-3-a-sophisticated-baseline-method/video-3-a-sophisticated-baseline-method-0/lm_qReHVm0A.pdf
  - uid: cba2c4f5d4c75da2612407a7ecff90b7
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0616f1caa3b7b0c4767f31812a601d60
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 4e4338beb34ce863cfaa8e0f677fca43
    parent_uid: 93d87890df832e4f0789963c954b04fc
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.4.04_300k.mp4
type: courses
layout: video
---
