---
title: 'Video 3: Solving the Problem'
uid: b0a067b1f56c20184be028a4f9d79d43
parent_uid: 45f1617526496ba1fed2d4528a0cc423
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-3-solving-the-problem/video-3-solving-the-problem-0
short_url: video-3-solving-the-problem-0
inline_embed_id: 67047392video3solvingtheproblem51384177
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>In</span> <span m='4985'>this</span> <span
  m='5470'>video,</span> <span m='5955'>we'll</span> <span m='6440'>solve</span>
  <span m='6925'>our</span> <span m='7410'>simple</span> <span
  m='7895'>example</span> <span m='8380'>in</span> <span
  m='8865'>LibreOffice.</span> </p><p><span m='9350'>Go</span> <span
  m='9676'>ahead</span> <span m='10003'>and</span> <span m='10330'>open</span>
  <span m='10656'>the</span> <span m='10983'>spreadsheet,</span> <span
  m='11310'>IMRT_SimpleExample.</span> </p><p><span m='14730'>At</span> <span
  m='15063'>the</span> <span m='15397'>top</span> <span m='15730'>of</span>
  <span m='16064'>the</span> <span m='16398'>spreadsheet,</span> <span
  m='16731'>you</span> <span m='17065'>should</span> <span m='17399'>see</span>
  <span m='17732'>our</span> <span m='18066'>data.</span> </p><p><span
  m='18400'>For</span> <span m='18851'>each</span> <span
  m='19302'>beamlet</span> <span m='19754'>and</span> <span
  m='20205'>each</span> <span m='20657'>voxel,</span> <span m='21108'>we</span>
  <span m='21560'>have</span> <span m='21937'>the</span> <span
  m='22314'>dose</span> <span m='22691'>that</span> <span m='23068'>that</span>
  <span m='23445'>beamlet</span> <span m='23822'>gives</span> <span
  m='24200'>to</span> <span m='24760'>that</span> <span m='25320'>voxel</span>
  <span m='25880'>at</span> <span m='26440'>unit</span> <span
  m='27000'>intensity.</span> </p><p><span m='27560'>So</span> <span
  m='28001'>we</span> <span m='28443'>have</span> <span m='28885'>this</span>
  <span m='29326'>data</span> <span m='29768'>for</span> <span
  m='30210'>voxel</span> <span m='30651'>one,</span> <span
  m='31093'>voxel</span> <span m='31535'>two,</span> <span
  m='31976'>voxel</span> <span m='32418'>three,</span> <span
  m='32860'>all</span> <span m='33272'>the</span> <span m='33685'>way</span>
  <span m='34098'>up</span> <span m='34511'>to</span> <span
  m='34924'>voxel</span> <span m='35337'>nine.</span> </p><p><span
  m='35750'>Each</span> <span m='36183'>row</span> <span
  m='36616'>corresponds</span> <span m='37050'>to</span> <span
  m='37483'>one</span> <span m='37916'>of</span> <span m='38350'>the</span>
  <span m='38783'>six</span> <span m='39216'>beamlets.</span> </p><p><span
  m='39650'>This</span> <span m='39866'>is</span> <span m='40082'>the</span>
  <span m='40298'>data</span> <span m='40514'>that</span> <span
  m='40730'>we</span> <span m='40946'>saw</span> <span m='41162'>on</span> <span
  m='41378'>the</span> <span m='41594'>slides</span> <span m='41810'>in</span>
  <span m='42407'>the</span> <span m='43005'>previous</span> <span
  m='43602'>video.</span> </p><p><span m='44200'>Below</span> <span
  m='44632'>the</span> <span m='45065'>data,</span> <span m='45497'>we've</span>
  <span m='45930'>outlined</span> <span m='46362'>our</span> <span
  m='46795'>decision</span> <span m='47227'>variables,</span> <span
  m='47660'>which</span> <span m='48070'>are</span> <span m='48480'>the</span>
  <span m='48890'>intensities</span> <span m='49300'>of</span> <span
  m='49710'>the</span> <span m='50120'>beamlets.</span> </p><p><span
  m='50530'>So</span> <span m='50987'>for</span> <span m='51444'>beamlets</span>
  <span m='51901'>one</span> <span m='52359'>through</span> <span
  m='52816'>six,</span> <span m='53273'>we</span> <span m='53730'>have</span>
  <span m='54188'>one</span> <span m='54645'>decision</span> <span
  m='55102'>variable.</span> </p><p><span m='55560'>These</span> <span
  m='56077'>six</span> <span m='56595'>decision</span> <span
  m='57112'>variables</span> <span m='57630'>are</span> <span
  m='58147'>outlined</span> <span m='58665'>in</span> <span
  m='59182'>yellow.</span> </p><p><span m='59700'>Right</span> <span
  m='60045'>now,</span> <span m='60390'>the</span> <span
  m='60735'>decision</span> <span m='61080'>variable</span> <span
  m='61425'>cells</span> <span m='61770'>are</span> <span
  m='62233'>blank,</span> <span m='62697'>because</span> <span
  m='63160'>the</span> <span m='63624'>values</span> <span m='64088'>will</span>
  <span m='64551'>be</span> <span m='65015'>filled</span> <span
  m='65479'>in</span> <span m='65942'>by</span> <span m='66406'>Solver.</span>
  </p><p><span m='66870'>Below</span> <span m='67316'>the</span> <span
  m='67762'>decision</span> <span m='68208'>variables,</span> <span
  m='68655'>we</span> <span m='69101'>have</span> <span m='69547'>our</span>
  <span m='69993'>objective.</span> </p><p><span m='70440'>Our</span> <span
  m='70869'>objective</span> <span m='71298'>is</span> <span m='71727'>to</span>
  <span m='72156'>minimize</span> <span m='72585'>the</span> <span
  m='73014'>total</span> <span m='73443'>dose</span> <span m='73872'>to</span>
  <span m='74301'>healthy</span> <span m='74730'>tissue.</span> </p><p><span
  m='75160'>The</span> <span m='75781'>healthy-tissue</span> <span
  m='76402'>voxels</span> <span m='77023'>are</span> <span
  m='77644'>voxels</span> <span m='78265'>one,</span> <span
  m='78886'>three,</span> <span m='79507'>five,</span> <span
  m='80128'>six,</span> <span m='80750'>and</span> <span m='81475'>nine.</span>
  </p><p><span m='82200'>So</span> <span m='82460'>let's</span> <span
  m='82720'>go</span> <span m='82980'>ahead</span> <span m='83240'>and</span>
  <span m='83500'>build</span> <span m='83760'>our</span> <span
  m='84020'>objective</span> <span m='84280'>in</span> <span
  m='84540'>the</span> <span m='84800'>blue</span> <span m='85060'>cell</span>
  <span m='85320'>here.</span> </p><p><span m='87070'>So</span> <span
  m='87378'>first,</span> <span m='87686'>we</span> <span m='87994'>want</span>
  <span m='88302'>to</span> <span m='88610'>add</span> <span m='88918'>up</span>
  <span m='89226'>the</span> <span m='89534'>total</span> <span
  m='89842'>dose</span> <span m='90150'>that</span> <span m='90744'>each</span>
  <span m='91338'>beamlet</span> <span m='91932'>gives</span> <span
  m='92527'>to</span> <span m='93121'>voxel</span> <span m='93715'>one.</span>
  </p><p><span m='94310'>So</span> <span m='94607'>here</span> <span
  m='94905'>we'll</span> <span m='95202'>use</span> <span m='95500'>the</span>
  <span m='95797'>function</span> <span m='96095'>that</span> <span
  m='96392'>we</span> <span m='96690'>used</span> <span m='97251'>in</span>
  <span m='97813'>the</span> <span m='98375'>previous</span> <span
  m='98936'>lecture,</span> <span m='99498'>sumproduct.</span> </p><p><span
  m='100060'>So</span> <span m='100657'>type</span> <span m='101255'>an</span>
  <span m='101852'>equals</span> <span m='102450'>sign,</span> <span
  m='103047'>and</span> <span m='103645'>then</span> <span
  m='104242'>sumproduct,</span> <span m='104840'>and</span> <span
  m='105396'>select</span> <span m='105952'>all</span> <span
  m='106508'>of</span> <span m='107064'>the</span> <span
  m='107620'>decision</span> <span m='108176'>variables,</span> <span
  m='108732'>semicolon,</span> <span m='109288'>and</span> <span
  m='109844'>then</span> <span m='110400'>all</span> <span m='110905'>of</span>
  <span m='111410'>the</span> <span m='111915'>doses.</span> </p><p><span
  m='112420'>This</span> <span m='112694'>will</span> <span
  m='112969'>add</span> <span m='113243'>up</span> <span m='113518'>the</span>
  <span m='113792'>total</span> <span m='114067'>dose</span> <span
  m='114341'>that</span> <span m='114616'>beamlet</span> <span
  m='114890'>one</span> <span m='115165'>gives</span> <span m='115440'>to</span>
  <span m='115768'>voxel</span> <span m='116097'>one,</span> <span
  m='116426'>plus</span> <span m='116755'>the</span> <span
  m='117084'>total</span> <span m='117413'>dose</span> <span
  m='117742'>beamlet</span> <span m='118071'>two</span> <span
  m='118400'>gives</span> <span m='118713'>to</span> <span
  m='119027'>voxel</span> <span m='119341'>one,</span> <span
  m='119655'>plus</span> <span m='119968'>the</span> <span
  m='120282'>total</span> <span m='120596'>dose</span> <span
  m='120910'>beamlet</span> <span m='121451'>three</span> <span
  m='121992'>gives</span> <span m='122534'>to</span> <span
  m='123075'>voxel</span> <span m='123617'>one,</span> <span
  m='124158'>etc.</span> </p><p><span m='124700'>Now</span> <span
  m='125019'>we</span> <span m='125338'>want</span> <span m='125657'>to</span>
  <span m='125976'>repeat</span> <span m='126295'>this</span> <span
  m='126614'>for</span> <span m='126933'>voxels</span> <span
  m='127252'>three,</span> <span m='127571'>five,</span> <span
  m='127890'>six,</span> <span m='128210'>and</span> <span
  m='128751'>nine--</span> <span m='129293'>the</span> <span
  m='129835'>other</span> <span m='130376'>healthy-tissue</span> <span
  m='130918'>voxels.</span> </p><p><span m='131460'>So</span> <span
  m='131756'>go</span> <span m='132052'>ahead</span> <span m='132348'>and</span>
  <span m='132645'>type</span> <span m='132941'>a</span> <span
  m='133237'>plus</span> <span m='133533'>sign,</span> <span
  m='133830'>and</span> <span m='134418'>then</span> <span
  m='135007'>sumproduct,</span> <span m='135596'>again,</span> <span
  m='136185'>the</span> <span m='136773'>six</span> <span
  m='137362'>decision</span> <span m='137951'>variables,</span> <span
  m='138540'>semicolon,</span> <span m='139070'>and</span> <span
  m='139601'>this</span> <span m='140132'>time,</span> <span
  m='140663'>select</span> <span m='141194'>the</span> <span
  m='141725'>dose</span> <span m='142256'>data</span> <span
  m='142787'>for</span> <span m='143318'>voxel</span> <span
  m='143849'>three.</span> </p><p><span m='144380'>Now</span> <span
  m='144730'>let's</span> <span m='145081'>repeat</span> <span
  m='145432'>this</span> <span m='145783'>again,</span> <span
  m='146134'>but</span> <span m='146485'>this</span> <span
  m='146836'>time</span> <span m='147187'>for</span> <span
  m='147538'>voxel</span> <span m='147889'>five.</span> </p><p><span
  m='148240'>So</span> <span m='148636'>sumproduct,</span> <span
  m='149033'>and</span> <span m='149430'>then</span> <span m='149826'>the</span>
  <span m='150223'>decision</span> <span m='150620'>variables,</span> <span
  m='151173'>and</span> <span m='151727'>the</span> <span m='152281'>dose</span>
  <span m='152835'>data</span> <span m='153388'>for</span> <span
  m='153942'>voxel</span> <span m='154496'>five.</span> </p><p><span
  m='155050'>Now</span> <span m='155720'>for</span> <span
  m='156390'>voxel</span> <span m='157060'>six,</span> <span
  m='157730'>sumproduct,</span> <span m='158400'>the</span> <span
  m='159070'>decision</span> <span m='159740'>variables,</span> <span
  m='160410'>semicolon,</span> <span m='161005'>and</span> <span
  m='161600'>the</span> <span m='162195'>dose</span> <span
  m='162790'>data</span> <span m='163385'>for</span> <span
  m='163980'>voxel</span> <span m='164575'>six.</span> </p><p><span
  m='165170'>And</span> <span m='165577'>lastly,</span> <span
  m='165984'>we're</span> <span m='166391'>going</span> <span
  m='166799'>to</span> <span m='167206'>add</span> <span m='167613'>the</span>
  <span m='168020'>sumproduct</span> <span m='168428'>of</span> <span
  m='168835'>the</span> <span m='169242'>decision</span> <span
  m='169650'>variables,</span> <span m='170344'>semicolon,</span> <span
  m='171038'>and</span> <span m='171733'>then</span> <span
  m='172427'>scroll</span> <span m='173122'>over</span> <span
  m='173816'>to</span> <span m='174511'>voxel</span> <span
  m='175205'>nine,</span> <span m='175900'>and</span> <span
  m='176240'>select</span> <span m='176580'>the</span> <span
  m='176920'>dose</span> <span m='177260'>data</span> <span
  m='177600'>for</span> <span m='177940'>voxel</span> <span
  m='178280'>nine.</span> </p><p><span m='178620'>Close</span> <span
  m='179096'>the</span> <span m='179573'>parentheses,</span> <span
  m='180050'>and</span> <span m='180526'>hit</span> <span
  m='181003'>Enter.</span> </p><p><span m='181480'>You</span> <span
  m='181744'>should</span> <span m='182009'>see</span> <span
  m='182273'>that</span> <span m='182538'>the</span> <span
  m='182802'>objective</span> <span m='183067'>has</span> <span
  m='183331'>a</span> <span m='183596'>0</span> <span m='183860'>right</span>
  <span m='184125'>now,</span> <span m='184390'>because</span> <span
  m='184773'>none</span> <span m='185156'>of</span> <span m='185540'>our</span>
  <span m='185923'>decision-variable</span> <span m='186306'>values</span> <span
  m='186690'>are</span> <span m='187113'>filled</span> <span
  m='187536'>in.</span> </p><p><span m='187960'>When</span> <span
  m='188311'>Solver</span> <span m='188662'>fills</span> <span
  m='189014'>in</span> <span m='189365'>our</span> <span
  m='189717'>decision</span> <span m='190068'>variables,</span> <span
  m='190420'>our</span> <span m='191023'>objective</span> <span
  m='191626'>value</span> <span m='192230'>will</span> <span
  m='192833'>be</span> <span m='193436'>here.</span> </p><p><span
  m='194040'>Below</span> <span m='194595'>the</span> <span
  m='195150'>objective</span> <span m='195705'>is</span> <span
  m='196260'>our</span> <span m='196815'>constraints.</span> </p><p><span
  m='197370'>The</span> <span m='197720'>first</span> <span
  m='198070'>four</span> <span m='198420'>constraints</span> <span
  m='198770'>make</span> <span m='199120'>sure</span> <span
  m='199470'>that</span> <span m='199820'>each</span> <span
  m='200170'>voxel</span> <span m='200520'>of</span> <span m='200862'>the</span>
  <span m='201205'>tumor</span> <span m='201548'>is</span> <span
  m='201890'>getting</span> <span m='202233'>a</span> <span
  m='202576'>dose</span> <span m='202919'>of</span> <span m='203261'>at</span>
  <span m='203604'>least</span> <span m='203947'>7.</span> </p><p><span
  m='204290'>The</span> <span m='204630'>last</span> <span
  m='204970'>constraint</span> <span m='205310'>makes</span> <span
  m='205650'>sure</span> <span m='205990'>that</span> <span
  m='206330'>the</span> <span m='206670'>spinal</span> <span
  m='207010'>cord</span> <span m='207350'>receives</span> <span
  m='207776'>a</span> <span m='208202'>dose</span> <span m='208628'>of</span>
  <span m='209055'>no</span> <span m='209481'>more</span> <span
  m='209907'>than</span> <span m='210333'>5.</span> </p><p><span
  m='210760'>Let's</span> <span m='211204'>go</span> <span
  m='211648'>ahead</span> <span m='212092'>and</span> <span
  m='212537'>construct</span> <span m='212981'>our</span> <span
  m='213425'>constraints.</span> </p><p><span m='213870'>For</span> <span
  m='214238'>the</span> <span m='214607'>first</span> <span
  m='214976'>four</span> <span m='215345'>constraints,</span> <span
  m='215713'>the</span> <span m='216082'>left-hand</span> <span
  m='216451'>side</span> <span m='216820'>is</span> <span
  m='217072'>going</span> <span m='217324'>to</span> <span m='217576'>be</span>
  <span m='217829'>the</span> <span m='218081'>total</span> <span
  m='218333'>dose</span> <span m='218586'>that</span> <span
  m='218838'>that</span> <span m='219090'>voxel</span> <span
  m='219343'>of</span> <span m='219595'>the</span> <span m='219847'>tumor</span>
  <span m='220100'>gets.</span> </p><p><span m='221190'>So</span> <span
  m='221513'>for</span> <span m='221836'>voxel</span> <span
  m='222160'>two,</span> <span m='222483'>we</span> <span m='222806'>have</span>
  <span m='223130'>the</span> <span m='223453'>left-hand</span> <span
  m='223776'>side</span> <span m='224100'>is</span> <span
  m='224630'>equal</span> <span m='225160'>to</span> <span m='225690'>the</span>
  <span m='226220'>sumproduct</span> <span m='226750'>of</span> <span
  m='227280'>the</span> <span m='227810'>decision</span> <span
  m='228340'>variables,</span> <span m='229103'>semicolon,</span> <span
  m='229866'>and</span> <span m='230630'>then</span> <span m='231393'>the</span>
  <span m='232156'>data</span> <span m='232920'>for</span> <span
  m='233683'>voxel</span> <span m='234446'>two.</span> </p><p><span
  m='235210'>Close</span> <span m='235610'>the</span> <span
  m='236010'>parentheses,</span> <span m='236410'>and</span> <span
  m='236810'>hit</span> <span m='237210'>Enter.</span> </p><p><span
  m='237610'>We</span> <span m='237862'>want</span> <span m='238114'>to</span>
  <span m='238366'>make</span> <span m='238618'>sure</span> <span
  m='238871'>that</span> <span m='239123'>this</span> <span
  m='239375'>value</span> <span m='239627'>is</span> <span
  m='239880'>greater</span> <span m='240438'>than</span> <span
  m='240996'>or</span> <span m='241555'>equal</span> <span m='242113'>to</span>
  <span m='242671'>7.</span> </p><p><span m='243230'>Now</span> <span
  m='243544'>let's</span> <span m='243858'>repeat</span> <span
  m='244172'>this</span> <span m='244487'>for</span> <span
  m='244801'>voxel</span> <span m='245115'>four.</span> </p><p><span
  m='245430'>So</span> <span m='246091'>equals</span> <span
  m='246752'>sumproduct,</span> <span m='247414'>and</span> <span
  m='248075'>then,</span> <span m='248737'>in</span> <span
  m='249398'>parentheses,</span> <span m='250060'>select</span> <span
  m='250816'>the</span> <span m='251572'>decision</span> <span
  m='252328'>variables,</span> <span m='253084'>semicolon,</span> <span
  m='253840'>and</span> <span m='254224'>the</span> <span m='254609'>data</span>
  <span m='254994'>for</span> <span m='255379'>voxel</span> <span
  m='255764'>four.</span> </p><p><span m='256149'>Again,</span> <span
  m='256585'>we</span> <span m='257022'>also</span> <span m='257458'>want</span>
  <span m='257895'>this</span> <span m='258331'>one</span> <span
  m='258768'>to</span> <span m='259204'>be</span> <span
  m='259641'>greater</span> <span m='260077'>than</span> <span
  m='260514'>or</span> <span m='260950'>equal</span> <span m='261387'>to</span>
  <span m='261823'>7.</span> </p><p><span m='262260'>Now</span> <span
  m='262590'>let's</span> <span m='262920'>repeat</span> <span
  m='263250'>this</span> <span m='263580'>for</span> <span
  m='263910'>voxel</span> <span m='264240'>seven.</span> </p><p><span
  m='264570'>So</span> <span m='265300'>sumproduct</span> <span
  m='266030'>of</span> <span m='266760'>the</span> <span
  m='267490'>decision</span> <span m='268220'>variables,</span> <span
  m='268950'>semicolon,</span> <span m='269680'>and</span> <span
  m='270410'>then</span> <span m='271140'>the</span> <span
  m='271934'>data</span> <span m='272728'>for</span> <span
  m='273522'>voxel</span> <span m='274316'>seven,</span> <span
  m='275110'>again,</span> <span m='275905'>greater</span> <span
  m='276699'>than</span> <span m='277493'>or</span> <span
  m='278287'>equal</span> <span m='279081'>to</span> <span m='279875'>7.</span>
  </p><p><span m='280670'>And</span> <span m='281178'>lastly,</span> <span
  m='281687'>for</span> <span m='282196'>voxel</span> <span
  m='282705'>eight,</span> <span m='283214'>we</span> <span
  m='283723'>want</span> <span m='284232'>the</span> <span
  m='284741'>sumproduct</span> <span m='285250'>of</span> <span
  m='285684'>the</span> <span m='286118'>decision</span> <span
  m='286552'>variables,</span> <span m='286986'>and</span> <span
  m='287420'>the</span> <span m='287854'>data</span> <span m='288288'>for</span>
  <span m='288722'>voxel</span> <span m='289156'>eight</span> <span
  m='289590'>this</span> <span m='290386'>time</span> <span m='291182'>to</span>
  <span m='291979'>also</span> <span m='292775'>be</span> <span
  m='293571'>greater</span> <span m='294368'>than</span> <span
  m='295164'>or</span> <span m='295960'>equal</span> <span m='296757'>to</span>
  <span m='297553'>7.</span> </p><p><span m='298350'>And</span> <span
  m='298593'>our</span> <span m='298836'>last</span> <span
  m='299080'>constraint,</span> <span m='299323'>we</span> <span
  m='299566'>want</span> <span m='299810'>to</span> <span m='300053'>make</span>
  <span m='300296'>sure</span> <span m='300540'>that</span> <span
  m='300941'>the</span> <span m='301342'>total</span> <span
  m='301744'>dose</span> <span m='302145'>to</span> <span
  m='302547'>voxel</span> <span m='302948'>five,</span> <span
  m='303350'>the</span> <span m='303820'>spinal</span> <span
  m='304290'>cord</span> <span m='304760'>voxel--</span> <span
  m='305230'>so</span> <span m='305700'>sumproduct</span> <span
  m='306170'>of</span> <span m='306739'>the</span> <span
  m='307308'>decision</span> <span m='307877'>variables,</span> <span
  m='308446'>and</span> <span m='309015'>then</span> <span m='309584'>the</span>
  <span m='310153'>data</span> <span m='310722'>for</span> <span
  m='311291'>voxel</span> <span m='311860'>five,</span> <span
  m='312430'>is</span> <span m='313121'>less</span> <span m='313812'>than</span>
  <span m='314504'>or</span> <span m='315195'>equal</span> <span
  m='315887'>to</span> <span m='316578'>5.</span> </p><p><span
  m='317270'>The</span> <span m='317574'>remaining</span> <span
  m='317878'>constraints</span> <span m='318182'>we</span> <span
  m='318486'>have</span> <span m='318790'>are</span> <span m='319235'>the</span>
  <span m='319680'>non-negativity</span> <span m='320125'>constraints,</span>
  <span m='320570'>which</span> <span m='320956'>we'll</span> <span
  m='321342'>add</span> <span m='321728'>in</span> <span
  m='322115'>directly</span> <span m='322501'>in</span> <span
  m='322887'>the</span> <span m='323273'>Solver.</span> </p><p><span
  m='323660'>So</span> <span m='324090'>now</span> <span m='324520'>go</span>
  <span m='324950'>ahead</span> <span m='325380'>and</span> <span
  m='325810'>go</span> <span m='326240'>to</span> <span m='326670'>the</span>
  <span m='327100'>Tools</span> <span m='327530'>menu,</span> <span
  m='327960'>and</span> <span m='328390'>select</span> <span
  m='328820'>Solver.</span> </p><p><span m='329250'>The</span> <span
  m='329670'>Solver</span> <span m='330090'>window</span> <span
  m='330510'>should</span> <span m='330930'>pop</span> <span
  m='331350'>up.</span> </p><p><span m='331770'>First</span> <span
  m='332080'>we</span> <span m='332390'>need</span> <span m='332700'>to</span>
  <span m='333010'>tell</span> <span m='333320'>Solver</span> <span
  m='333630'>what</span> <span m='333940'>our</span> <span
  m='334250'>objective</span> <span m='334560'>is.</span> </p><p><span
  m='334870'>So</span> <span m='335183'>go</span> <span m='335496'>ahead</span>
  <span m='335810'>and</span> <span m='336123'>delete</span> <span
  m='336436'>what's</span> <span m='336750'>in</span> <span
  m='337063'>"Target</span> <span m='337376'>cell",</span> <span
  m='337690'>and</span> <span m='337991'>making</span> <span
  m='338292'>sure</span> <span m='338593'>that</span> <span
  m='338894'>your</span> <span m='339195'>cursor</span> <span
  m='339496'>is</span> <span m='339797'>in</span> <span
  m='340098'>"Target</span> <span m='340399'>cell",</span> <span
  m='340700'>select</span> <span m='341296'>the</span> <span
  m='341892'>blue</span> <span m='342488'>objective</span> <span
  m='343084'>cell.</span> </p><p><span m='343680'>Now,</span> <span
  m='343995'>we</span> <span m='344310'>want</span> <span m='344625'>to</span>
  <span m='344940'>change</span> <span m='345255'>"Maximum"</span> <span
  m='345570'>to</span> <span m='345885'>"Minimum",</span> <span
  m='346200'>because</span> <span m='346515'>we're</span> <span
  m='346830'>trying</span> <span m='347302'>to</span> <span
  m='347774'>minimize</span> <span m='348246'>the</span> <span
  m='348718'>total</span> <span m='349191'>dose</span> <span
  m='349663'>to</span> <span m='350135'>healthy</span> <span
  m='350607'>tissue,</span> <span m='351080'>and</span> <span
  m='351608'>our</span> <span m='352136'>decision</span> <span
  m='352664'>variables</span> <span m='353192'>should</span> <span
  m='353720'>be</span> <span m='354248'>the</span> <span m='354776'>six</span>
  <span m='355304'>yellow</span> <span m='355832'>cells.</span> </p><p><span
  m='356360'>Now</span> <span m='356683'>let's</span> <span
  m='357006'>add</span> <span m='357330'>in</span> <span m='357653'>our</span>
  <span m='357976'>constraints.</span> </p><p><span m='358300'>So</span> <span
  m='358640'>in</span> <span m='358980'>the</span> <span m='359320'>first</span>
  <span m='359660'>"Cell</span> <span m='360000'>reference"</span> <span
  m='360340'>box,</span> <span m='360680'>let's</span> <span
  m='361053'>select</span> <span m='361426'>the</span> <span
  m='361800'>first</span> <span m='362173'>four</span> <span
  m='362546'>constraints.</span> </p><p><span m='362920'>Because</span> <span
  m='363190'>they're</span> <span m='363460'>all</span> <span
  m='363730'>greater</span> <span m='364000'>than</span> <span
  m='364270'>or</span> <span m='364540'>equal</span> <span m='364810'>to</span>
  <span m='365080'>constraints,</span> <span m='365350'>we</span> <span
  m='365743'>can</span> <span m='366136'>add</span> <span m='366530'>them</span>
  <span m='366923'>in</span> <span m='367316'>together.</span> </p><p><span
  m='367710'>And</span> <span m='368077'>change</span> <span
  m='368444'>the</span> <span m='368811'>"Operator"</span> <span
  m='369178'>to</span> <span m='369545'>greater</span> <span
  m='369912'>than</span> <span m='370279'>or</span> <span
  m='370646'>equal</span> <span m='371013'>to,</span> <span
  m='371380'>and</span> <span m='371937'>then</span> <span m='372495'>in</span>
  <span m='373053'>"Value",</span> <span m='373611'>select</span> <span
  m='374168'>the</span> <span m='374726'>four</span> <span
  m='375284'>right-hand</span> <span m='375842'>sides.</span> </p><p><span
  m='376400'>Now</span> <span m='376728'>let's</span> <span
  m='377057'>add</span> <span m='377385'>in</span> <span m='377714'>the</span>
  <span m='378042'>spinal-cord</span> <span m='378371'>constraint.</span>
  </p><p><span m='378700'>So</span> <span m='379007'>in</span> <span
  m='379314'>the</span> <span m='379621'>next</span> <span
  m='379928'>"Cell</span> <span m='380235'>reference"</span> <span
  m='380542'>box,</span> <span m='380850'>select</span> <span
  m='381268'>the</span> <span m='381686'>spinal</span> <span
  m='382105'>cord</span> <span m='382523'>left-hand</span> <span
  m='382941'>side,</span> <span m='383360'>make</span> <span
  m='383598'>sure</span> <span m='383837'>that</span> <span
  m='384075'>"Operator"</span> <span m='384314'>is</span> <span
  m='384552'>less</span> <span m='384791'>than</span> <span m='385030'>or</span>
  <span m='385350'>equal</span> <span m='385670'>to,</span> <span
  m='385990'>and</span> <span m='386310'>in</span> <span m='386630'>the</span>
  <span m='386950'>second</span> <span m='387270'>"Value"</span> <span
  m='387590'>box,</span> <span m='387910'>select</span> <span
  m='388496'>the</span> <span m='389083'>spinal</span> <span
  m='389670'>cord,</span> <span m='390256'>right-hand</span> <span
  m='390843'>side.</span> </p><p><span m='391430'>Now</span> <span
  m='391811'>let's</span> <span m='392193'>add</span> <span
  m='392575'>our</span> <span m='392956'>non-negativity</span> <span
  m='393338'>constraints.</span> </p><p><span m='393720'>So</span> <span
  m='394039'>in</span> <span m='394358'>the</span> <span m='394677'>"Cell</span>
  <span m='394996'>reference",</span> <span m='395315'>just</span> <span
  m='395634'>directly</span> <span m='395953'>pick</span> <span
  m='396272'>the</span> <span m='396591'>six</span> <span
  m='396910'>decision</span> <span m='397230'>variables,</span> <span
  m='398613'>and</span> <span m='399996'>make</span> <span
  m='401380'>sure</span> <span m='402763'>the</span> <span
  m='404146'>"Operator"</span> <span m='405530'>is</span> <span
  m='405976'>greater</span> <span m='406422'>than</span> <span
  m='406868'>or</span> <span m='407314'>equal</span> <span m='407760'>to,</span>
  <span m='408206'>and</span> <span m='408653'>the</span> <span
  m='409099'>"Value"</span> <span m='409545'>should</span> <span
  m='409991'>just</span> <span m='410437'>be</span> <span m='410883'>0.</span>
  </p><p><span m='411330'>Now,</span> <span m='411577'>in</span> <span
  m='411824'>the</span> <span m='412071'>Options,</span> <span
  m='412318'>make</span> <span m='412565'>sure</span> <span
  m='412812'>you've</span> <span m='413060'>selected</span> <span
  m='413818'>the</span> <span m='414577'>Linear</span> <span
  m='415335'>Solver,</span> <span m='416094'>and</span> <span
  m='416852'>click</span> <span m='417611'>OK.</span> </p><p><span
  m='418370'>Now</span> <span m='418926'>go</span> <span m='419483'>ahead</span>
  <span m='420040'>and</span> <span m='420596'>hit</span> <span
  m='421153'>Solve.</span> </p><p><span m='421710'>You</span> <span
  m='421962'>should</span> <span m='422215'>see</span> <span m='422468'>a</span>
  <span m='422721'>solving</span> <span m='422974'>result</span> <span
  m='423227'>that</span> <span m='423480'>says:</span> <span
  m='424047'>"Solving</span> <span m='424615'>successfully</span> <span
  m='425182'>finished.</span> </p><p><span m='425750'>Result:</span> <span
  m='427120'>22.75".</span> </p><p><span m='428490'>That's</span> <span
  m='429033'>the</span> <span m='429576'>optimal</span> <span
  m='430120'>objective</span> <span m='430663'>function</span> <span
  m='431206'>value.</span> </p><p><span m='431750'>Go</span> <span
  m='432253'>ahead</span> <span m='432756'>and</span> <span
  m='433260'>select</span> <span m='433763'>Keep</span> <span
  m='434266'>Result.</span> </p><p><span m='434770'>Now</span> <span
  m='435078'>let's</span> <span m='435387'>take</span> <span m='435696'>a</span>
  <span m='436005'>look</span> <span m='436313'>at</span> <span
  m='436622'>our</span> <span m='436931'>solution.</span> </p><p><span
  m='437240'>So</span> <span m='437541'>the</span> <span
  m='437842'>optimal</span> <span m='438144'>solution</span> <span
  m='438445'>is</span> <span m='438747'>to</span> <span m='439048'>have</span>
  <span m='439350'>beamlet</span> <span m='439970'>one</span> <span
  m='440590'>at</span> <span m='441210'>an</span> <span
  m='441830'>intensity</span> <span m='442450'>2.25,</span> <span
  m='443070'>beamlet</span> <span m='443514'>two</span> <span
  m='443958'>at</span> <span m='444402'>an</span> <span
  m='444847'>intensity</span> <span m='445291'>of</span> <span
  m='445735'>0,</span> <span m='446180'>beamlet</span> <span
  m='446580'>three</span> <span m='446980'>at</span> <span m='447380'>an</span>
  <span m='447780'>intensity</span> <span m='448180'>of</span> <span
  m='448580'>3,</span> <span m='448980'>beamlet</span> <span
  m='449471'>four</span> <span m='449962'>at</span> <span m='450454'>an</span>
  <span m='450945'>intensity</span> <span m='451437'>of</span> <span
  m='451928'>3.5,</span> <span m='452420'>beamlet</span> <span
  m='452850'>five</span> <span m='453280'>at</span> <span m='453710'>an</span>
  <span m='454140'>intensity</span> <span m='454570'>of</span> <span
  m='455000'>2.5,</span> <span m='455430'>and</span> <span
  m='455910'>beamlet</span> <span m='456390'>six</span> <span
  m='456870'>at</span> <span m='457350'>an</span> <span
  m='457830'>intensity</span> <span m='458310'>of</span> <span
  m='458790'>0.</span> </p><p><span m='459270'>This</span> <span
  m='459661'>makes</span> <span m='460052'>sense,</span> <span
  m='460444'>because</span> <span m='460835'>beamlet</span> <span
  m='461227'>two</span> <span m='461618'>goes</span> <span
  m='462010'>across</span> <span m='462461'>the</span> <span
  m='462912'>spinal</span> <span m='463363'>cord,</span> <span
  m='463815'>and</span> <span m='464266'>beamlet</span> <span
  m='464717'>six</span> <span m='465168'>only</span> <span
  m='465620'>goes</span> <span m='466450'>down</span> <span
  m='467280'>healthy-tissue</span> <span m='468110'>voxels.</span> </p><p><span
  m='468940'>And</span> <span m='469211'>if</span> <span m='469482'>we</span>
  <span m='469754'>look</span> <span m='470025'>at</span> <span
  m='470297'>our</span> <span m='470568'>constraints,</span> <span
  m='470840'>we</span> <span m='471249'>can</span> <span
  m='471658'>double-check</span> <span m='472067'>that</span> <span
  m='472476'>each</span> <span m='472885'>tumor</span> <span
  m='473294'>voxel</span> <span m='473703'>is</span> <span
  m='474112'>receiving</span> <span m='474521'>a</span> <span
  m='474930'>dose</span> <span m='475340'>of</span> <span m='475630'>at</span>
  <span m='475920'>least</span> <span m='476210'>7</span> <span
  m='476500'>--</span> <span m='476790'>one</span> <span m='477080'>tumor</span>
  <span m='477370'>voxel</span> <span m='477660'>gets</span> <span
  m='477950'>a</span> <span m='478240'>dose</span> <span m='478530'>of</span>
  <span m='478820'>8</span> <span m='479110'>--</span> <span
  m='479400'>and</span> <span m='479694'>the</span> <span
  m='479988'>spinal</span> <span m='480282'>cord</span> <span
  m='480576'>is</span> <span m='480870'>receiving</span> <span
  m='481164'>a</span> <span m='481458'>dose</span> <span m='481752'>of</span>
  <span m='482046'>5,</span> <span m='482340'>which</span> <span
  m='482900'>is</span> <span m='483460'>the</span> <span
  m='484020'>maximum</span> <span m='484580'>possible</span> <span
  m='485140'>dose.</span> </p><p><span m='485700'>In</span> <span
  m='486030'>the</span> <span m='486360'>next</span> <span
  m='486690'>video,</span> <span m='487020'>we'll</span> <span
  m='487350'>see</span> <span m='487680'>an</span> <span
  m='488010'>example</span> <span m='488340'>of</span> <span m='488670'>a</span>
  <span m='489000'>real</span> <span m='489330'>problem,</span> <span
  m='489660'>and</span> <span m='490060'>how</span> <span m='490461'>big</span>
  <span m='490862'>the</span> <span m='491263'>problem</span> <span
  m='491664'>is</span> <span m='492065'>on</span> <span m='492466'>an</span>
  <span m='492867'>actual</span> <span m='493268'>tumor</span> <span
  m='493669'>case.</span> </p>
embedded_media:
  - uid: 5df89d88abd1a77d7782d742fcfb702c
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: UjbutTp3z3I
  - uid: 705c129ad3d4cd41a0e20c1c6142ea25
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: UjbutTp3z3I
  - uid: 33b77fb111838a4541543a99cd7f8e0f
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: UjbutTp3z3I.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-3-solving-the-problem/video-3-solving-the-problem-0/UjbutTp3z3I.srt
  - uid: 8e1057806401b723b5bbbd7120b8c4ba
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: UjbutTp3z3I.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/radiation-therapy-an-application-of-linear-optimization/video-3-solving-the-problem/video-3-solving-the-problem-0/UjbutTp3z3I.pdf
  - uid: 9f0b4df63e40e02c2fd63dc537567215
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 097382262b8c24cccaf21d9edae51111
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 9170bd00c967146446ac5b5130b33abc
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/UjbutTp3z3I/default.jpg'
  - uid: e498bd6dabb0692734fd33d9b66eb38e
    parent_uid: b0a067b1f56c20184be028a4f9d79d43
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_8.3.05_300k.mp4
type: courses
layout: video
---
