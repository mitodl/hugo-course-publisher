---
title: Vector Subspaces
uid: 1096ba09771964a95295a5e322a54990
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/vector-subspaces
short_url: vector-subspaces
inline_embed_id: 84064946vectorsubspaces20123551
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7240'>NIKOLA KAMBUROV: Hi everyone.</span> <span
  m='8290'>In</span> <span m='8880'>this</span> <span m='9180'>video,</span>
  <span m='9690'>we're</span> <span m='9800'>going</span> <span
  m='9920'>to</span> <span m='10040'>explore</span> <span
  m='10550'>briefly</span> <span m='11750'>the</span> <span
  m='11910'>concept</span> <span m='12540'>of</span> <span m='12670'>a</span>
  <span m='12730'>vector</span> <span m='13060'>subspace.</span> </p><p><span
  m='14270'>This</span> <span m='14570'>is</span> <span m='14690'>the</span>
  <span m='14750'>problem</span> <span m='15300'>we're</span> <span
  m='15460'>going</span> <span m='15570'>to</span> <span m='15680'>do.</span>
  <span m='16450'>We're</span> <span m='16670'>given</span> <span
  m='17430'>these</span> <span m='17900'>four</span> <span
  m='19450'>different</span> <span m='20100'>subsets</span> <span
  m='21560'>of</span> <span m='21780'>R^3,</span> <span m='23040'>and</span>
  <span m='23650'>we</span> <span m='23860'>are</span> <span
  m='24360'>asked</span> <span m='24960'>to</span> <span m='26220'>figure</span>
  <span m='26550'>out</span> <span m='27220'>which</span> <span
  m='27780'>of</span> <span m='28010'>these</span> <span m='28250'>is,</span>
  <span m='28370'>in</span> <span m='28490'>fact,</span> <span
  m='29630'>a</span> <span m='29780'>subspace.</span> <span m='31020'>So</span>
  <span m='32509'>I'll</span> <span m='32680'>give</span> <span
  m='32870'>you</span> <span m='33030'>a</span> <span m='33100'>few</span> <span
  m='33340'>moments</span> <span m='33810'>to</span> <span m='34880'>try</span>
  <span m='35140'>to</span> <span m='35290'>do</span> <span
  m='35460'>this</span> <span m='35900'>on</span> <span m='36100'>your</span>
  <span m='36330'>own,</span> <span m='37110'>and</span> <span
  m='37380'>then</span> <span m='37630'>please</span> <span
  m='37890'>come</span> <span m='38050'>back</span> <span m='38300'>to</span>
  <span m='38420'>see</span> <span m='38600'>whether</span> <span
  m='38870'>you</span> <span m='39050'>were</span> <span m='39280'>right.</span>
  </p><p><span m='46110'>So</span> <span m='46250'>hi</span> <span
  m='46450'>again.</span> <span m='48790'>So</span> <span
  m='49940'>before</span> <span m='50380'>we</span> <span
  m='50520'>start,</span> <span m='50910'>let's</span> <span
  m='51230'>briefly</span> <span m='51690'>recall</span> <span
  m='52330'>what</span> <span m='52520'>a</span> <span m='52560'>vector</span>
  <span m='52920'>subspace</span> <span m='53500'>is.</span> <span
  m='54500'>Well</span> <span m='54800'>vector</span> <span
  m='55190'>subspace,</span> <span m='56170'>of</span> <span
  m='56280'>course,</span> <span m='56550'>it's</span> <span m='56690'>a</span>
  <span m='56750'>subset.</span> <span m='58190'>In</span> <span
  m='58300'>this</span> <span m='58420'>case,</span> <span m='58620'>a</span>
  <span m='58690'>subset</span> <span m='59060'>of</span> <span
  m='59190'>R^3.</span> <span m='60600'>But</span> <span m='61610'>it</span>
  <span m='61820'>behaves</span> <span m='62310'>like</span> <span
  m='62550'>a</span> <span m='62610'>vector</span> <span m='62950'>space</span>
  <span m='63290'>itself,</span> <span m='64349'>meaning</span> <span
  m='64819'>that</span> <span m='65740'>if</span> <span m='65990'>we</span>
  <span m='66120'>take</span> <span m='67680'>linear</span> <span
  m='68010'>combination</span> <span m='68910'>of</span> <span
  m='69080'>elements</span> <span m='69590'>in</span> <span m='69710'>the</span>
  <span m='70010'>subset,</span> <span m='71680'>what</span> <span
  m='71930'>we</span> <span m='72030'>get</span> <span m='72410'>is</span> <span
  m='72620'>still</span> <span m='72930'>something</span> <span
  m='73460'>in</span> <span m='73580'>that</span> <span m='74250'>subset.</span>
  </p><p><span m='76920'>And</span> <span m='77330'>in</span> <span
  m='77470'>class,</span> <span m='77940'>Professor</span> <span
  m='78330'>Strang</span> <span m='80820'>showed</span> <span
  m='81090'>you</span> <span m='81170'>a</span> <span m='81210'>few</span> <span
  m='81590'>specific</span> <span m='82130'>examples</span> <span
  m='82760'>of</span> <span m='82880'>subspaces,</span> <span
  m='84080'>which</span> <span m='84290'>are</span> <span
  m='84360'>related</span> <span m='84790'>to</span> <span
  m='84960'>matrices.</span> <span m='86010'>One</span> <span
  m='86320'>of</span> <span m='86420'>them</span> <span m='86680'>was</span>
  <span m='87290'>the</span> <span m='87630'>null</span> <span
  m='87850'>space</span> <span m='88260'>of</span> <span m='88350'>a</span>
  <span m='88410'>matrix,</span> <span m='89090'>all</span> <span
  m='89220'>the</span> <span m='89350'>vectors</span> <span
  m='89670'>that</span> <span m='90070'>the</span> <span m='90230'>matrix</span>
  <span m='90600'>sends</span> <span m='90890'>to</span> <span
  m='90980'>0,</span> <span m='91980'>and</span> <span m='92810'>the</span>
  <span m='92970'>column</span> <span m='93300'>space</span> <span
  m='93810'>of</span> <span m='93920'>a</span> <span m='93960'>matrix,</span>
  <span m='94790'>which</span> <span m='95120'>is</span> <span
  m='95270'>the</span> <span m='95590'>span</span> <span m='96740'>of</span>
  <span m='97570'>the</span> <span m='97730'>column</span> <span m='98075'>of
  a</span> <span m='98420'>matrix.</span> <span m='100300'>So</span> <span
  m='100520'>let's</span> <span m='100750'>see</span> <span m='100970'>if</span>
  <span m='101070'>we</span> <span m='101180'>can</span> <span
  m='101360'>apply</span> <span m='101730'>what</span> <span
  m='101960'>we've</span> <span m='102110'>learned</span> <span
  m='102390'>in</span> <span m='102480'>lecture</span> <span
  m='104560'>to</span> <span m='104700'>our</span> <span
  m='104830'>problem.</span> </p><p><span m='106350'>Number</span> <span
  m='106550'>one:</span> <span m='107790'>we</span> <span m='107940'>are</span>
  <span m='108040'>given</span> <span m='109840'>a</span> <span
  m='109890'>linear</span> <span m='110890'>equation</span> <span
  m='113780'>relation</span> <span m='114360'>between</span> <span
  m='115420'>b_1,</span> <span m='116150'>b_2,</span> <span
  m='116540'>and</span> <span m='116870'>b_3.</span> <span
  m='118600'>Once</span> <span m='119750'>we</span> <span m='119900'>have</span>
  <span m='120040'>something</span> <span m='120380'>linear--</span> <span
  m='121830'>this</span> <span m='122040'>is</span> <span m='122160'>a</span>
  <span m='122220'>philosophy</span> <span m='122930'>that</span> <span
  m='123320'>you'll</span> <span m='123480'>learn</span> <span
  m='123720'>in</span> <span m='123780'>this</span> <span
  m='123970'>class--</span> <span m='124260'>we</span> <span
  m='124370'>can</span> <span m='124480'>always</span> <span
  m='124720'>write</span> <span m='125030'>this</span> <span
  m='125640'>as</span> <span m='125810'>a</span> <span m='125890'>matrix</span>
  <span m='126870'>equation.</span> </p><p><span m='127470'>So</span> <span
  m='128750'>in</span> <span m='128949'>particular,</span> <span
  m='129870'>b_1</span> <span m='130039'>plus</span> <span m='130389'>b_2</span>
  <span m='130520'>minus</span> <span m='130860'>b_3</span> <span
  m='131310'>equals</span> <span m='131600'>0,</span> <span m='131890'>we</span>
  <span m='132020'>can</span> <span m='132190'>just</span> <span
  m='132450'>write</span> <span m='132680'>it</span> <span m='132810'>as</span>
  <span m='132980'>the</span> <span m='133570'>matrix</span> <span
  m='134280'>1,</span> <span m='135210'>1,</span> <span
  m='136060'>negative</span> <span m='136550'>1,</span> <span
  m='138010'>times</span> <span m='138470'>[b_1,</span> <span
  m='139660'>b_2,</span> <span m='140940'>b_3]</span> <span
  m='142690'>equal</span> <span m='143290'>to</span> <span m='143650'>0.</span>
  <span m='145420'>So</span> <span m='145600'>therefore,</span> <span
  m='146270'>b_1,</span> <span m='146700'>b_2,</span> <span
  m='147080'>and</span> <span m='147250'>b_3</span> <span
  m='147710'>precisely</span> <span m='148290'>describe</span> <span
  m='148880'>the</span> <span m='148990'>null</span> <span
  m='149300'>space</span> <span m='150660'>of</span> <span m='151810'>1,
  1</span> <span m='152110'>negative</span> <span m='152540'>1.</span> <span
  m='153560'>And</span> <span m='154040'>thus,</span> <span
  m='155860'>what</span> <span m='156110'>we</span> <span m='156800'>are</span>
  <span m='156900'>given</span> <span m='157260'>in</span> <span
  m='157580'>the</span> <span m='157690'>first</span> <span
  m='158510'>question</span> <span m='159120'>is</span> <span
  m='159450'>a</span> <span m='159520'>subspace.</span> </p><p><span
  m='161750'>What</span> <span m='161910'>about</span> <span
  m='162170'>the</span> <span m='162360'>second</span> <span
  m='162560'>one?</span> <span m='164450'>Again,</span> <span m='164800'>we
  are</span> <span m='165000'>given</span> <span m='165680'>the</span> <span
  m='165770'>relation</span> <span m='166330'>between</span> <span
  m='166820'>b_1,</span> <span m='167060'>b_2,</span> <span
  m='167390'>b_3.</span> <span m='167740'>but</span> <span
  m='167920'>it's</span> <span m='168080'>not</span> <span
  m='168230'>linear.</span> <span m='169510'>b_3</span> <span
  m='170110'>is</span> <span m='170280'>the</span> <span
  m='170370'>product</span> <span m='171010'>of</span> <span
  m='171730'>b_1</span> <span m='172020'>and</span> <span m='172150'>b_2.</span>
  <span m='173050'>So</span> <span m='174720'>right,</span> <span
  m='176040'>your</span> <span m='176310'>guts</span> <span
  m='176720'>tell</span> <span m='176960'>you</span> <span
  m='177080'>that</span> <span m='177250'>this</span> <span
  m='177420'>shouldn't</span> <span m='177720'>be</span> <span
  m='178030'>a</span> <span m='178080'>vector</span> <span
  m='178370'>space.</span> <span m='181500'>But</span> <span
  m='181710'>we</span> <span m='181820'>need</span> <span m='181950'>to</span>
  <span m='182040'>prove</span> <span m='182340'>why.</span> </p><p><span
  m='184550'>Well,</span> <span m='186320'>see</span> <span
  m='186590'>that</span> <span m='187720'>the</span> <span
  m='187840'>vector</span> <span m='188910'>[1,</span> <span
  m='189640'>1,</span> <span m='190330'>1]</span> <span m='191740'>is</span>
  <span m='192220'>inside</span> <span m='192970'>this</span> <span
  m='193320'>subset,</span> <span m='194200'>because</span> <span
  m='194980'>the</span> <span m='195150'>third</span> <span
  m='195380'>entry</span> <span m='195950'>is</span> <span m='196160'>the</span>
  <span m='196250'>product--</span> <span m='196890'>1</span> <span
  m='197170'>is</span> <span m='197310'>the</span> <span
  m='197380'>product</span> <span m='197710'>1 and</span> <span
  m='197930'>1.</span> <span m='200530'>If</span> <span m='200720'>the</span>
  <span m='200880'>subset</span> <span m='201700'>were</span> <span
  m='202030'>a</span> <span m='202360'>subspace</span> <span
  m='202920'>itself,</span> <span m='204020'>then</span> <span
  m='205410'>we</span> <span m='206300'>would</span> <span
  m='206550'>have</span> <span m='206960'>2,</span> <span m='207570'>2,</span>
  <span m='208300'>and</span> <span m='208500'>2</span> <span
  m='209300'>in</span> <span m='209510'>it</span> <span m='209650'>as</span>
  <span m='209810'>well.</span> <span m='210600'>Right,</span> <span
  m='210850'>because</span> <span m='211660'>any</span> <span
  m='211940'>multiple</span> <span m='212590'>of</span> <span
  m='212900'>a</span> <span m='212950'>vector</span> <span m='213260'>in</span>
  <span m='213340'>the</span> <span m='213420'>subspace</span> <span
  m='214010'>is</span> <span m='214610'>inside</span> <span
  m='214890'>the</span> <span m='214970'>subspace.</span> <span
  m='216620'>But</span> <span m='217110'>is</span> <span m='217460'>[2,
  2,</span> <span m='217800'>2]</span> <span m='218330'>described</span> <span
  m='218730'>by</span> <span m='218860'>this</span> <span
  m='219040'>equation?</span> <span m='219730'>Well</span> <span
  m='219900'>no,</span> <span m='220080'>because</span> <span
  m='221300'>the</span> <span m='221420'>third</span> <span
  m='221660'>entry,</span> <span m='222070'>2,</span> <span m='222720'>is</span>
  <span m='223670'>not</span> <span m='223870'>equal</span> <span
  m='224210'>to</span> <span m='224360'>2</span> <span m='224540'>times</span>
  <span m='224900'>2.</span> </p><p><span m='226930'>So</span> <span
  m='228845'>the</span> <span m='229310'>example</span> <span
  m='231480'>in</span> <span m='231650'>number</span> <span m='232520'>2</span>
  <span m='232740'>is</span> <span m='233160'>not</span> <span
  m='233560'>a</span> <span m='234090'>subspace.</span> </p><p><span
  m='238880'>Let's</span> <span m='239180'>try</span> <span m='239340'>3.</span>
  <span m='242520'>And</span> <span m='242740'>first--</span> <span
  m='243060'>so</span> <span m='243260'>we</span> <span m='243410'>are</span>
  <span m='243450'>given--</span> <span m='244370'>so</span> <span
  m='244710'>the</span> <span m='245010'>subset</span> <span
  m='246300'>in</span> <span m='246880'>question</span> <span
  m='247300'>3</span> <span m='248050'>is</span> <span m='248360'>given</span>
  <span m='248810'>as</span> <span m='249770'>the</span> <span
  m='249980'>linear</span> <span m='250300'>span</span> <span
  m='251030'>of</span> <span m='251170'>these</span> <span m='251420'>two</span>
  <span m='251590'>vectors,</span> <span m='252590'>[1,</span> <span
  m='252980'>0,</span> <span m='253200'>-1]</span> <span m='254120'>and
  [1,</span> <span m='254570'>0,</span> <span m='255020'>1].</span> <span
  m='255920'>Plus</span> <span m='256950'>the</span> <span
  m='257100'>vector</span> <span m='257490'>[1,</span> <span
  m='257860'>0,</span> <span m='258130'>0].</span> <span m='259800'>So</span>
  <span m='259970'>let's</span> <span m='260170'>think</span> <span
  m='260750'>about</span> <span m='260970'>this</span> <span
  m='261180'>geometrically.</span> <span m='262160'>We</span> <span
  m='262430'>know</span> <span m='262630'>that</span> <span
  m='264830'>the</span> <span m='265240'>linear</span> <span
  m='265480'>span</span> <span m='265940'>of</span> <span m='266070'>two</span>
  <span m='266290'>linear</span> <span m='266690'>independent</span> <span
  m='268450'>vectors--</span> <span m='269410'>and</span> <span
  m='270150'>these</span> <span m='270350'>are</span> <span
  m='270450'>obviously</span> <span m='270870'>linearly</span> <span
  m='271270'>independent--</span> <span m='272520'>is</span> <span
  m='272830'>a</span> <span m='272900'>plane</span> <span m='274190'>in
  R^3.</span> <span m='275100'>So</span> <span m='275960'>we</span> <span
  m='276080'>have</span> <span m='276540'>the</span> <span
  m='276680'>plane,</span> <span m='277960'>and</span> <span
  m='278480'>we</span> <span m='278730'>add</span> <span m='279000'>a</span>
  <span m='279120'>vector</span> <span m='280140'>to</span> <span
  m='280250'>the</span> <span m='280340'>point</span> <span m='281030'>on</span>
  <span m='281230'>this</span> <span m='281440'>plane.</span> </p><p><span
  m='282720'>So</span> <span m='284160'>what</span> <span m='284500'>if</span>
  <span m='284840'>the</span> <span m='285010'>vector</span> <span
  m='285780'>were</span> <span m='286030'>lying</span> <span
  m='286950'>on</span> <span m='287190'>the</span> <span
  m='287430'>plane?</span> <span m='288730'>Well</span> <span
  m='289190'>we're</span> <span m='289330'>not</span> <span
  m='289480'>going</span> <span m='289570'>to</span> <span
  m='289640'>change</span> <span m='289910'>the</span> <span
  m='290010'>plane.</span> <span m='290550'>We're</span> <span
  m='290670'>still</span> <span m='290920'>going</span> <span
  m='291050'>to</span> <span m='291440'>remain</span> <span m='291720'>in</span>
  <span m='291790'>the</span> <span m='291880'>plane.</span> <span
  m='293270'>What</span> <span m='293480'>I'm</span> <span
  m='293700'>hinting</span> <span m='294010'>at</span> <span
  m='294160'>is</span> <span m='294280'>the</span> <span
  m='295770'>following</span> <span m='296060'>thing.</span> <span
  m='296320'>That,</span> <span m='296690'>in</span> <span
  m='296870'>fact,</span> <span m='297530'>[1,</span> <span m='297970'>0,</span>
  <span m='298240'>0]</span> <span m='299190'>is</span> <span
  m='299990'>a</span> <span m='300060'>linear</span> <span
  m='300340'>combination</span> <span m='300910'>of</span> <span
  m='301050'>[1,</span> <span m='301230'>0,</span> <span m='301450'>-1]</span>
  <span m='302303'>and</span> <span m='302756'>[1, 0,</span> <span
  m='303210'>1],</span> <span m='304076'>and</span> <span m='304510'>it's</span>
  <span m='305050'>fairly</span> <span m='305410'>obvious</span> <span
  m='305840'>to</span> <span m='305970'>see</span> <span m='306670'>which</span>
  <span m='306970'>linear</span> <span m='307240'>combination</span> <span
  m='308910'>of</span> <span m='309120'>these</span> <span m='310020'>two</span>
  <span m='310230'>vectors</span> <span m='311230'>it</span> <span
  m='311330'>is.</span> <span m='312010'>It's</span> <span m='312280'>1/2</span>
  <span m='312890'>[1,</span> <span m='313930'>0,</span> <span
  m='314720'>-1]</span> <span m='314990'>plus</span> <span m='316240'>1/2
  times</span> <span m='318250'>[1,</span> <span m='318720'>0,</span> <span
  m='319360'>1].</span> </p><p><span m='322270'>So</span> <span
  m='322500'>we</span> <span m='322620'>can</span> <span m='322890'>write</span>
  <span m='323500'>the</span> <span m='323590'>whole</span> <span
  m='324050'>relation</span> <span m='324630'>here</span> <span
  m='326050'>in</span> <span m='326210'>the</span> <span
  m='326290'>following</span> <span m='326770'>way.</span> <span
  m='328020'>[b_1,</span> <span m='329540'>b_2,</span> <span
  m='330670'>b_3]</span> <span m='333840'>is</span> <span m='336060'>[1,</span>
  <span m='336420'>0,</span> <span m='336680'>0],</span> <span
  m='337030'>which</span> <span m='337230'>we</span> <span m='337320'>can</span>
  <span m='337470'>write</span> <span m='337860'>this,</span> <span
  m='338790'>plus</span> <span m='339720'>c_1</span> <span m='340140'>[1,</span>
  <span m='342425'>0,</span> <span m='343835'>-1],</span> <span
  m='345230'>and</span> <span m='345520'>c_2</span> <span m='345940'>[1</span>
  <span m='348110'>0,</span> <span m='348544'>1].</span> </p><p><span
  m='351720'>Let</span> <span m='351870'>me</span> <span
  m='352010'>continue</span> <span m='353030'>this</span> <span
  m='353520'>here.</span> <span m='354160'>So</span> <span
  m='356660'>b_1,</span> <span m='356935'>b_2,</span> <span
  m='357210'>and</span> <span m='357510'>b_3</span> <span m='359080'>is</span>
  <span m='359500'>precisely</span> <span m='360300'>c_1</span> <span
  m='361372'>plus</span> <span m='361720'>1/2</span> <span m='364251'>of</span>
  <span m='364750'>[1,</span> <span m='365180'>0,</span> <span
  m='366615'>-1]</span> <span m='367510'>plus</span> <span m='368020'>c_2</span>
  <span m='368570'>plus</span> <span m='369060'>1/2</span> <span
  m='371214'>of</span> <span m='371682'>[1,</span> <span m='372620'>0,</span>
  <span m='373310'>1].</span> <span m='374840'>So</span> <span
  m='375730'>indeed,</span> <span m='377750'>the</span> <span
  m='377920'>points</span> <span m='378260'>b_1,</span> <span
  m='378690'>b_2,</span> <span m='379080'>and</span> <span m='379390'>b_3</span>
  <span m='379870'>are</span> <span m='384030'>described</span> <span
  m='384570'>by</span> <span m='385340'>the</span> <span
  m='385570'>linear</span> <span m='385720'>span</span> <span
  m='386020'>[1,</span> <span m='386530'>0,</span> <span m='387524'>-1]</span>
  <span m='388021'>and [1,</span> <span m='388520'>0,</span> <span
  m='388990'>1].</span> <span m='389280'>So</span> <span m='390180'>it</span>
  <span m='390300'>is</span> <span m='390430'>a</span> <span
  m='390480'>vector</span> <span m='390760'>subspace</span> <span
  m='391350'>itself.</span> </p><p><span m='394360'>And</span> <span
  m='394530'>finally,</span> <span m='397040'>let's</span> <span
  m='397270'>look</span> <span m='397470'>at</span> <span
  m='398000'>number</span> <span m='398300'>4.</span> <span m='403330'>So</span>
  <span m='403530'>we</span> <span m='403650'>have</span> <span
  m='404240'>a</span> <span m='404380'>similar</span> <span
  m='404770'>situation.</span> <span m='405410'>I</span> <span
  m='405440'>mean,</span> <span m='405720'>it's</span> <span
  m='405800'>almost</span> <span m='406010'>the</span> <span
  m='406070'>same</span> <span m='406280'>situation.</span> <span
  m='407190'>We</span> <span m='407410'>again</span> <span
  m='407640'>have</span> <span m='408260'>the</span> <span
  m='408390'>linear</span> <span m='408610'>span</span> <span
  m='408905'>of</span> <span m='409200'>precisely</span> <span
  m='410810'>the</span> <span m='410860'>same</span> <span
  m='411110'>vectors</span> <span m='411520'>as</span> <span
  m='411660'>in</span> <span m='411760'>question</span> <span
  m='412140'>3.</span> <span m='412610'>But</span> <span m='412820'>this</span>
  <span m='412980'>time</span> <span m='413240'>we</span> <span
  m='413450'>add</span> <span m='413720'>the</span> <span
  m='413820'>vector</span> <span m='414090'>[0,</span> <span
  m='414420'>1,</span> <span m='414650'>0]</span> <span m='414940'>to</span>
  <span m='415380'>them.</span> </p><p><span m='416260'>Now,</span> <span
  m='417220'>[0,</span> <span m='417500'>1,</span> <span m='417700'>0]</span>
  <span m='418050'>is</span> <span m='418260'>not</span> <span
  m='419330'>in</span> <span m='419560'>the</span> <span m='419650'>span</span>
  <span m='420100'>of</span> <span m='420270'>these</span> <span
  m='420450'>two</span> <span m='420570'>vectors.</span> <span
  m='421880'>So</span> <span m='423240'>the</span> <span
  m='423770'>argument</span> <span m='424290'>that</span> <span
  m='424430'>we</span> <span m='424570'>just</span> <span
  m='425220'>showed</span> <span m='426020'>for</span> <span m='426170'>3</span>
  <span m='426490'>doesn't</span> <span m='426850'>work.</span> <span
  m='431100'>But</span> <span m='431910'>what</span> <span m='432350'>we</span>
  <span m='434010'>know</span> <span m='434280'>about</span> <span
  m='434540'>vector</span> <span m='434870'>subspaces</span> <span
  m='435310'>is</span> <span m='435530'>the</span> <span
  m='435610'>following</span> <span m='436040'>thing.</span> <span
  m='436820'>I</span> <span m='437190'>follows</span> <span
  m='437830'>almost</span> <span m='438120'>trivially</span> <span
  m='438550'>from</span> <span m='438760'>the</span> <span
  m='438890'>axioms</span> <span m='440190'>that</span> <span
  m='441070'>0</span> <span m='441730'>needs</span> <span m='442010'>to</span>
  <span m='442110'>be</span> <span m='442340'>inside</span> <span
  m='443880'>the</span> <span m='444030'>subset</span> <span
  m='445200'>in</span> <span m='445360'>order</span> <span m='445550'>for</span>
  <span m='445740'>it</span> <span m='445880'>to</span> <span
  m='445990'>be</span> <span m='446250'>a</span> <span
  m='446370'>subspace.</span> <span m='447450'>It's</span> <span
  m='447590'>a</span> <span m='447670'>necessary</span> <span
  m='448150'>condition.</span> </p><p><span m='450060'>Well</span> <span
  m='453200'>is</span> <span m='453600'>0</span> <span m='453920'>inside</span>
  <span m='454360'>this</span> <span m='454440'>subset?</span> <span
  m='455720'>Meaning</span> <span m='457790'>can</span> <span
  m='457970'>we</span> <span m='458100'>find</span> <span
  m='460790'>coefficients</span> <span m='462100'>c_1</span> <span
  m='465920'>and</span> <span m='466180'>c_2,</span> <span
  m='472060'>plus</span> <span m='473290'>[0,</span> <span m='473720'>1,</span>
  <span m='474100'>0]</span> <span m='475250'>to</span> <span
  m='475410'>equal</span> <span m='476160'>zero</span> <span
  m='476440'>vector?</span> <span m='478300'>And</span> <span
  m='478480'>the</span> <span m='478590'>answer</span> <span
  m='478860'>is</span> <span m='479010'>no.</span> <span m='480430'>And</span>
  <span m='480590'>why</span> <span m='480810'>is</span> <span
  m='480950'>this?</span> <span m='482960'>There's</span> <span
  m='483120'>a</span> <span m='483170'>very</span> <span m='483860'>easy</span>
  <span m='484080'>way</span> <span m='484220'>to</span> <span m='484340'>see
  it.</span> <span m='485230'>Well</span> <span m='488300'>we</span> <span
  m='488500'>just</span> <span m='488700'>look</span> <span m='488880'>at</span>
  <span m='489920'>the</span> <span m='490150'>second</span> <span
  m='490390'>entry</span> <span m='492690'>of</span> <span m='492850'>the</span>
  <span m='492940'>vectors,</span> <span m='493460'>and</span> <span
  m='493560'>we</span> <span m='493650'>see</span> <span m='493810'>that</span>
  <span m='494510'>any</span> <span m='494760'>multiple--</span> <span
  m='496780'>so</span> <span m='496960'>the</span> <span
  m='497170'>linear</span> <span m='497640'>span</span> <span
  m='497910'>of</span> <span m='498000'>these</span> <span m='498240'>two</span>
  <span m='498360'>vectors</span> <span m='499090'>will</span> <span
  m='499320'>have</span> <span m='499780'>as</span> <span m='500290'>its</span>
  <span m='500480'>second</span> <span m='500760'>entry</span> <span
  m='501110'>0.</span> <span m='503220'>And</span> <span m='503400'>when</span>
  <span m='503590'>we</span> <span m='503720'>add it</span> <span
  m='503970'>to</span> <span m='504100'>1,</span> <span m='504820'>we</span>
  <span m='504960'>can</span> <span m='505120'>never</span> <span
  m='505360'>get</span> <span m='506030'>a</span> <span m='506570'>zero</span>
  <span m='506980'>entry</span> <span m='507300'>here.</span> <span
  m='508270'>So</span> <span m='510250'>the</span> <span
  m='510370'>subset</span> <span m='511200'>in</span> <span m='511390'>4</span>
  <span m='511680'>is</span> <span m='511810'>not</span> <span
  m='511970'>a</span> <span m='512030'>subspace.</span> </p><p><span
  m='513870'>So</span> <span m='514360'>I</span> <span m='514520'>hope</span>
  <span m='514860'>this</span> <span m='515090'>was</span> <span
  m='515240'>useful</span> <span m='515840'>in</span> <span
  m='517020'>just</span> <span m='517470'>getting</span> <span
  m='517750'>an</span> <span m='517870'>intuition</span> <span
  m='518970'>which</span> <span m='519230'>subsets</span> <span
  m='519809'>of</span> <span m='519929'>R^3</span> <span m='520280'>are</span>
  <span m='520350'>subspaces.</span> <span m='522380'>I'll</span> <span
  m='522480'>see</span> <span m='522679'>you</span> <span m='522770'>guys</span>
  <span m='523000'>later.</span> </p>
embedded_media:
  - uid: f97f4a800e13c616b542fab7b36d9d45
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: S8DQZjE4V8U
  - uid: cbfb3958d9806c63ee16c3509dfe94ea
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: S8DQZjE4V8U
  - uid: cae73de9a1fb201fedefa8f43df99362
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/vector-subspaces/id488155309?i=108454350
  - uid: 61cbaf05bc46817d2abf43a09a8a1548
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110711_N2_300k.mp4
  - uid: 552acfea5aa3b5357fba40ba962ff324
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/S8DQZjE4V8U/default.jpg'
  - uid: 3f4421b38edc4efe546cfbe588abb6a9
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: S8DQZjE4V8U.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/vector-subspaces/S8DQZjE4V8U.srt
  - uid: 4e0355e8346c55c7b7193202067a533c
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: S8DQZjE4V8U.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/vector-subspaces/S8DQZjE4V8U.pdf
  - uid: 7237a819ff71bf7e8810680c5ece22c7
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5cd17122632938bb66422586db32a97f
    parent_uid: 1096ba09771964a95295a5e322a54990
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
