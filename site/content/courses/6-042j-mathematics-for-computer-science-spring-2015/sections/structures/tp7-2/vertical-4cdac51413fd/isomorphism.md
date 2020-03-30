---
title: Isomorphism
uid: cfba671f534d3abae0aadcf606a0aa34
parent_uid: 7866ebc6cf40aff967a1b17515804c46
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd/isomorphism
short_url: isomorphism
inline_embed_id: 38940634isomorphism62881413
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='580'>PROFESSOR: We've</span> <span m='930'>briefly</span> <span
  m='1370'>looked</span> <span m='1680'>at</span> <span m='1800'>graph</span>
  <span m='2160'>isomorphism</span> <span m='3010'>in</span> <span
  m='3090'>the</span> <span m='3160'>context</span> <span m='3630'>of</span>
  <span m='3730'>digraphs.</span> <span m='4710'>And</span> <span
  m='4880'>it</span> <span m='4980'>comes</span> <span m='5310'>up</span> <span
  m='5930'>in</span> <span m='6090'>even</span> <span m='6270'>more</span> <span
  m='6460'>fundamental</span> <span m='7090'>way</span> <span
  m='7300'>really</span> <span m='7920'>for</span> <span m='8260'>simple</span>
  <span m='8600'>graphs</span> <span m='9040'>where</span> <span
  m='9910'>the</span> <span m='10020'>definition</span> <span
  m='10590'>is</span> <span m='10700'>a</span> <span m='10760'>bit</span> <span
  m='10930'>simpler.</span> <span m='11840'>So</span> <span
  m='12020'>let's</span> <span m='12410'>just</span> <span m='12680'>look</span>
  <span m='12990'>at</span> <span m='13230'>this</span> <span
  m='15250'>graph</span> <span m='15680'>abstraction</span> <span
  m='16390'>idea</span> <span m='17080'>and</span> <span m='17310'>how</span>
  <span m='17610'>isomorphism</span> <span m='18240'>connects</span> <span
  m='18910'>with</span> <span m='19100'>it.</span> </p><p><span
  m='19840'>This</span> <span m='20100'>is</span> <span m='20230'>an</span>
  <span m='20310'>example</span> <span m='21180'>of</span> <span
  m='21440'>two</span> <span m='21690'>different</span> <span
  m='22150'>ways</span> <span m='22480'>of</span> <span m='22590'>drawing</span>
  <span m='22980'>the</span> <span m='23050'>same</span> <span
  m='23510'>graph.</span> <span m='24610'>That</span> <span m='24800'>is</span>
  <span m='25750'>here's</span> <span m='26050'>a</span> <span
  m='26100'>257,</span> <span m='27040'>and</span> <span
  m='27160'>there's</span> <span m='27350'>257.</span> <span
  m='28300'>It's</span> <span m='28490'>connected</span> <span
  m='28950'>directly</span> <span m='29360'>to</span> <span
  m='29430'>122,</span> <span m='30400'>as</span> <span m='30640'>here.</span>
  <span m='31050'>And</span> <span m='31230'>also</span> <span
  m='32040'>257</span> <span m='32840'>is</span> <span
  m='32940'>connected</span> <span m='33360'>to</span> <span
  m='33470'>99,</span> <span m='34130'>as</span> <span m='34370'>here.</span>
  <span m='34920'>And</span> <span m='35130'>if</span> <span
  m='35210'>you</span> <span m='35320'>check,</span> <span m='35960'>it's</span>
  <span m='36200'>exactly</span> <span m='36650'>the</span> <span
  m='36750'>same</span> <span m='37050'>six</span> <span
  m='37370'>vertices</span> <span m='38010'>and</span> <span
  m='38150'>exactly</span> <span m='38690'>the</span> <span
  m='38780'>same</span> <span m='42630'>eight</span> <span
  m='42930'>edges.</span> <span m='44290'>But</span> <span
  m='44420'>they're</span> <span m='44550'>just</span> <span
  m='44960'>drawn</span> <span m='45320'>differently.</span> </p><p><span
  m='45780'>So</span> <span m='46100'>we</span> <span m='46320'>don't</span>
  <span m='46480'>want</span> <span m='46620'>to</span> <span
  m='46680'>confuse</span> <span m='47370'>a</span> <span
  m='47490'>drawing</span> <span m='48020'>of</span> <span m='48180'>a</span>
  <span m='48240'>graph,</span> <span m='49300'>like</span> <span
  m='49730'>these</span> <span m='50100'>two,</span> <span m='50580'>with</span>
  <span m='51010'>the</span> <span m='51130'>graph</span> <span
  m='51460'>itself.</span> <span m='51920'>The</span> <span
  m='52020'>graph</span> <span m='52280'>itself</span> <span
  m='52660'>consists</span> <span m='53210'>of</span> <span
  m='53760'>just</span> <span m='54080'>the</span> <span m='54150'>set</span>
  <span m='54390'>of</span> <span m='54520'>nodes</span> <span
  m='55260'>and</span> <span m='55470'>the</span> <span m='55530'>set</span>
  <span m='55780'>of</span> <span m='55880'>edges.</span> <span
  m='56390'>And</span> <span m='56500'>if</span> <span m='56640'>you</span>
  <span m='56760'>extracted</span> <span m='57300'>that</span> <span
  m='57450'>from</span> <span m='57630'>these</span> <span m='57850'>two</span>
  <span m='57990'>diagrams,</span> <span m='58860'>you</span> <span
  m='59020'>would</span> <span m='59150'>get</span> <span m='59360'>the</span>
  <span m='59430'>same</span> <span m='59720'>set</span> <span
  m='59970'>of</span> <span m='60090'>nodes</span> <span m='60400'>and</span>
  <span m='60480'>the</span> <span m='60550'>same</span> <span
  m='60790'>set</span> <span m='61010'>of</span> <span m='61110'>edges.</span>
  </p><p><span m='63280'>So</span> <span m='63800'>same</span> <span
  m='64060'>graph,</span> <span m='64310'>different</span> <span
  m='64610'>layouts.</span> <span m='65519'>But</span> <span
  m='65950'>here's</span> <span m='66280'>a</span> <span m='66340'>case</span>
  <span m='67090'>where</span> <span m='67430'>it's</span> <span
  m='67640'>really</span> <span m='67890'>the</span> <span m='67990'>same</span>
  <span m='68380'>layout.</span> <span m='69230'>You</span> <span
  m='69350'>can</span> <span m='69520'>see</span> <span m='70830'>these</span>
  <span m='71570'>two</span> <span m='71740'>pictures,</span> <span
  m='72240'>if</span> <span m='72360'>you</span> <span m='72490'>ignore</span>
  <span m='72730'>the</span> <span m='72810'>labels,</span> <span
  m='73240'>are</span> <span m='73310'>exactly</span> <span m='73730'>the</span>
  <span m='73830'>same</span> <span m='74220'>with the two</span> <span
  m='74470'>grays</span> <span m='74790'>and the</span> <span
  m='74930'>two</span> <span m='75070'>grays</span> <span m='75350'>and</span>
  <span m='75410'>the</span> <span m='75500'>red and  the</span> <span
  m='75932'>red.</span> <span m='77230'>The</span> <span
  m='77360'>difference</span> <span m='77820'>now</span> <span
  m='78150'>is</span> <span m='78550'>that</span> <span m='78780'>I've</span>
  <span m='78970'>renamed</span> <span m='79440'>the</span> <span
  m='79500'>vertices.</span> </p><p><span m='81080'>So</span> <span
  m='82190'>we've</span> <span m='82480'>assigned</span> <span
  m='83220'>different</span> <span m='83640'>labels</span> <span
  m='84330'>to</span> <span m='84490'>those</span> <span
  m='84780'>vertices.</span> <span m='86150'>And</span> <span
  m='88050'>the</span> <span m='88230'>connection</span> <span
  m='88890'>between</span> <span m='89500'>the</span> <span m='89580'>two</span>
  <span m='90280'>graphs</span> <span m='90860'>now,</span> <span
  m='91150'>this</span> <span m='91350'>graph</span> <span m='91740'>with</span>
  <span m='92240'>vertices</span> <span m='92890'>which</span> <span
  m='93110'>are</span> <span m='93190'>integers</span> <span
  m='93720'>and</span> <span m='93840'>this</span> <span m='94010'>graph</span>
  <span m='94640'>with</span> <span m='94930'>vertices</span> <span
  m='95530'>that</span> <span m='95670'>are</span> <span m='95730'>the</span>
  <span m='95830'>names</span> <span m='96170'>of</span> <span
  m='96300'>people,</span> <span m='97260'>is</span> <span m='97740'>that</span>
  <span m='98040'>they</span> <span m='98250'>are</span> <span
  m='98580'>isomorphic.</span> <span m='100290'>And</span> <span
  m='101580'>what</span> <span m='101780'>isomorphism</span> <span
  m='102590'>means</span> <span m='102990'>is</span> <span
  m='103340'>that</span> <span m='104040'>all</span> <span
  m='104260'>that</span> <span m='104420'>matters</span> <span
  m='105110'>between</span> <span m='105640'>two</span> <span
  m='105860'>graphs</span> <span m='106215'>are</span> <span
  m='106570'>their</span> <span m='106700'>connections.</span> <span
  m='108490'>And</span> <span m='108670'>so</span> <span
  m='108890'>graphs</span> <span m='109360'>with</span> <span
  m='109530'>the</span> <span m='109610'>same</span> <span
  m='110270'>connections</span> <span m='110950'>among</span> <span
  m='111480'>the</span> <span m='111600'>same</span> <span
  m='112540'>number</span> <span m='113050'>of</span> <span
  m='113170'>vertices</span> <span m='114310'>are</span> <span
  m='114460'>said</span> <span m='114740'>to</span> <span m='114840'>be</span>
  <span m='114990'>isomorphic.</span> </p><p><span m='118510'>To</span> <span
  m='118590'>say it</span> <span m='118770'>more</span> <span
  m='118940'>precisely,</span> <span m='119530'>two</span> <span
  m='119710'>graphs</span> <span m='120000'>are</span> <span
  m='120080'>isomorphic</span> <span m='120800'>when</span> <span
  m='121000'>there's</span> <span m='121210'>an</span> <span
  m='121410'>edge</span> <span m='121750'>preserving</span> <span
  m='122350'>matching</span> <span m='122880'>between</span> <span
  m='123340'>their</span> <span m='123460'>vertices.</span> <span
  m='124280'>Matching</span> <span m='124680'>meaning</span> <span
  m='124930'>byjection</span> <span m='125110'>junction</span> <span
  m='125540'>between</span> <span m='125850'>their</span> <span
  m='125940'>vertices.</span> <span m='126820'>And</span> <span
  m='127070'>edge</span> <span m='127300'>preserving</span> <span
  m='127790'>means</span> <span m='128060'>that</span> <span
  m='128199'>where</span> <span m='128360'>there</span> <span
  m='128479'>is</span> <span m='128560'>an</span> <span m='128669'>edge</span>
  <span m='128880'>on</span> <span m='128979'>one</span> <span
  m='129210'>side</span> <span m='129720'>there's</span> <span
  m='129990'>an</span> <span m='130110'>edge</span> <span
  m='130979'>between</span> <span m='131400'>the</span> <span
  m='131690'>corresponding</span> <span m='132140'>vertices</span> <span
  m='132630'>on</span> <span m='132720'>the</span> <span m='132830'>other</span>
  <span m='133010'>side.</span> <span m='133320'>Let's</span> <span
  m='133530'>look</span> <span m='133700'>at</span> <span m='133770'>an</span>
  <span m='133880'>example.</span> </p><p><span m='135370'>Here</span> <span
  m='135630'>are</span> <span m='135710'>two</span> <span
  m='135950'>graphs.</span> <span m='136870'>And</span> <span
  m='137100'>I</span> <span m='137200'>claim</span> <span m='137620'>that</span>
  <span m='137810'>they</span> <span m='137980'>are</span> <span
  m='138110'>isomorphic.</span> <span m='138800'>On</span> <span
  m='138900'>the</span> <span m='138990'>left,</span> <span
  m='139230'>we've</span> <span m='139330'>got</span> <span m='139460'>a</span>
  <span m='139490'>bunch</span> <span m='139730'>of</span> <span
  m='139820'>animals,</span> <span m='140750'>dog,</span> <span
  m='141020'>pig,</span> <span m='141320'>cow,</span> <span
  m='141530'>cat.</span> <span m='142030'>And on</span> <span
  m='142120'>the</span> <span m='142210'>right</span> <span m='142490'>we</span>
  <span m='142610'>have</span> <span m='142830'>a</span> <span
  m='142890'>bunch</span> <span m='143370'>of</span> <span
  m='143710'>animal</span> <span m='144040'>foods,</span> <span
  m='144450'>hey,</span> <span m='144700'>corn,</span> <span
  m='145080'>beef,</span> <span m='145350'>tuna.</span> <span
  m='146240'>And</span> <span m='147640'>it's</span> <span m='147820'>a</span>
  <span m='147880'>hint</span> <span m='148120'>on</span> <span
  m='148240'>how</span> <span m='148420'>we're</span> <span
  m='148510'>going</span> <span m='148630'>to</span> <span m='148700'>do</span>
  <span m='148800'>the</span> <span m='148900'>matching.</span> </p><p><span
  m='149830'>So</span> <span m='150100'>I'm</span> <span m='150200'>going</span>
  <span m='150330'>to</span> <span m='150430'>tell</span> <span
  m='150670'>you</span> <span m='150830'>that</span> <span m='151250'>the</span>
  <span m='151450'>dog</span> <span m='151850'>vertex</span> <span
  m='152370'>on</span> <span m='152470'>the</span> <span m='152550'>left</span>
  <span m='153340'>corresponds</span> <span m='154030'>to</span> <span
  m='154170'>the</span> <span m='154260'>beef</span> <span
  m='154680'>vertex</span> <span m='155270'>on</span> <span
  m='155430'>the</span> <span m='155530'>right.</span> <span
  m='155890'>So</span> <span m='156150'>I'm</span> <span
  m='156300'>defining</span> <span m='156820'>a</span> <span
  m='156960'>function,</span> <span m='157540'>a</span> <span
  m='157630'>byjection,</span> <span m='158610'>from</span> <span
  m='158810'>the</span> <span m='158880'>vertices</span> <span
  m='159420'>on</span> <span m='159540'>the</span> <span m='159610'>left</span>
  <span m='159920'>in</span> <span m='160030'>blue</span> <span
  m='160420'>to</span> <span m='160550'>the</span> <span
  m='160630'>vertices</span> <span m='161160'>on</span> <span
  m='161280'>the</span> <span m='161380'>right</span> <span m='161640'>in</span>
  <span m='161810'>red.</span> <span m='162430'>And</span> <span
  m='162640'>f</span> <span m='162840'>of</span> <span m='162990'>dog</span>
  <span m='163270'>is</span> <span m='163420'>beef.</span> </p><p><span
  m='165290'>Likewise,</span> <span m='165890'>f</span> <span
  m='166130'>of</span> <span m='166270'>cat,</span> <span m='166690'>cats</span>
  <span m='166950'>eat</span> <span m='167110'>tuna.</span> <span
  m='167780'>I'm</span> <span m='167890'>going</span> <span m='168020'>to</span>
  <span m='168090'>map</span> <span m='168530'>cat</span> <span
  m='168940'>to</span> <span m='169070'>tuna.</span> <span m='170420'>And</span>
  <span m='171120'>continuing</span> <span m='171860'>for</span> <span
  m='172000'>the</span> <span m='172100'>remaining</span> <span
  m='172540'>two</span> <span m='172740'>vertices,</span> <span
  m='173390'>I'm</span> <span m='173520'>going</span> <span m='173650'>to</span>
  <span m='173720'>map</span> <span m='174030'>cow</span> <span
  m='174310'>to</span> <span m='174440'>hay,</span> <span
  m='174930'>which</span> <span m='175200'>is</span> <span
  m='175330'>what</span> <span m='175540'>they</span> <span
  m='175670'>eat,</span> <span m='176310'>and</span> <span m='176560'>pig</span>
  <span m='176900'>to</span> <span m='177010'>corn,</span> <span
  m='177610'>which</span> <span m='177920'>is</span> <span
  m='178680'>frequently</span> <span m='179220'>what's</span> <span
  m='179470'>fed</span> <span m='179720'>to</span> <span m='179820'>pigs.</span>
  <span m='180580'>OK,</span> <span m='181530'>so</span> <span
  m='181900'>this</span> <span m='182330'>is</span> <span m='182540'>a</span>
  <span m='182600'>byjection.</span> <span m='183850'>I</span> <span
  m='183900'>mean,</span> <span m='184300'>it's</span> <span m='184590'>a</span>
  <span m='184910'>perfect</span> <span m='185290'>correspondence</span> <span
  m='185840'>between</span> <span m='186130'>the</span> <span
  m='186190'>four</span> <span m='186410'>vertices</span> <span
  m='186930'>on</span> <span m='187010'>the</span> <span m='187090'>left</span>
  <span m='187370'>and</span> <span m='187450'>the</span> <span
  m='187510'>four</span> <span m='187720'>vertices</span> <span
  m='188220'>on</span> <span m='188330'>the</span> <span
  m='188420'>right.</span> <span m='189140'>But</span> <span m='189390'>I</span>
  <span m='189480'>have</span> <span m='189660'>to</span> <span
  m='189770'>check</span> <span m='190090'>now</span> <span
  m='190430'>that</span> <span m='190670'>the</span> <span
  m='190830'>edges</span> <span m='191190'>are</span> <span
  m='191260'>preserved.</span> </p><p><span m='191980'>What</span> <span
  m='192180'>does</span> <span m='192320'>that</span> <span
  m='192570'>mean?</span> <span m='193630'>Well,</span> <span
  m='193780'>let's</span> <span m='193990'>do</span> <span m='194110'>an</span>
  <span m='194190'>example.</span> <span m='195250'>There's</span> <span
  m='195540'>an</span> <span m='195640'>edge</span> <span m='196060'>on</span>
  <span m='196200'>the</span> <span m='196270'>left</span> <span
  m='196640'>between</span> <span m='197050'>dog</span> <span
  m='197360'>and</span> <span m='197500'>pig.</span> <span
  m='198450'>That</span> <span m='198740'>means</span> <span
  m='199170'>that</span> <span m='199430'>there</span> <span
  m='199570'>should</span> <span m='199950'>be</span> <span m='200130'>an</span>
  <span m='200300'>edge</span> <span m='200730'>on</span> <span
  m='200870'>the</span> <span m='201000'>right</span> <span
  m='201700'>between</span> <span m='202640'>where</span> <span
  m='202870'>they</span> <span m='203040'>go</span> <span m='203300'>to.</span>
  <span m='203710'>So</span> <span m='203910'>there</span> <span
  m='204040'>ought</span> <span m='204210'>to</span> <span m='204300'>be</span>
  <span m='204430'>an</span> <span m='204550'>edge</span> <span
  m='204890'>between</span> <span m='205480'>beef</span> <span
  m='206560'>and</span> <span m='207460'>corn,</span> <span
  m='207990'>because</span> <span m='208420'>that's</span> <span
  m='208670'>where</span> <span m='208820'>dog</span> <span
  m='209100'>and</span> <span m='209200'>pig</span> <span m='209480'>go.</span>
  <span m='209770'>And</span> <span m='209900'>indeed,</span> <span
  m='210290'>there's</span> <span m='210440'>an</span> <span
  m='210530'>edge</span> <span m='210740'>there.</span> <span
  m='211400'>So</span> <span m='211500'>that</span> <span
  m='211700'>part's</span> <span m='211990'>good.</span> </p><p><span
  m='212840'>And</span> <span m='212980'>you</span> <span m='213060'>can</span>
  <span m='213230'>check</span> <span m='213593'>the others.</span> <span
  m='214320'>The</span> <span m='214480'>other</span> <span
  m='214660'>thing</span> <span m='214880'>that</span> <span
  m='214970'>we</span> <span m='215070'>have</span> <span m='215280'>to</span>
  <span m='215380'>check</span> <span m='215690'>on</span> <span
  m='215820'>the</span> <span m='215900'>left</span> <span m='216350'>is</span>
  <span m='216540'>since</span> <span m='216870'>the</span> <span
  m='217660'>edge</span> <span m='217970'>preserving</span> <span
  m='218490'>is</span> <span m='218640'>an</span> <span m='218720'>if</span>
  <span m='218940'>and</span> <span m='219030'>only</span> <span
  m='219310'>if,</span> <span m='219620'>there's</span> <span
  m='219820'>an</span> <span m='219950'>edge</span> <span m='220220'>on</span>
  <span m='220320'>the</span> <span m='220420'>right</span> <span
  m='220700'>if</span> <span m='220850'>and</span> <span m='220960'>only</span>
  <span m='221220'>if</span> <span m='221420'>there's</span> <span
  m='221630'>an</span> <span m='221840'>edge</span> <span m='222050'>on</span>
  <span m='222140'>the</span> <span m='222220'>left,</span> <span
  m='222520'>that's</span> <span m='222710'>the</span> <span
  m='222780'>same</span> <span m='223010'>as</span> <span
  m='223100'>saying</span> <span m='223590'>there's</span> <span
  m='223800'>no</span> <span m='224110'>edge</span> <span m='224330'>on</span>
  <span m='224440'>the</span> <span m='224510'>left</span> <span
  m='225050'>if</span> <span m='225290'>and</span> <span m='225400'>only</span>
  <span m='225650'>if</span> <span m='225800'>there's</span> <span
  m='226000'>no</span> <span m='226280'>edge</span> <span m='226500'>on</span>
  <span m='226610'>the</span> <span m='226700'>right.</span> <span
  m='226920'>So</span> <span m='227080'>let's</span> <span
  m='227320'>check</span> <span m='227550'>non-edges</span> <span
  m='228360'>on</span> <span m='228520'>the</span> <span m='228600'>left.</span>
  </p><p><span m='229460'>There's</span> <span m='229690'>no</span> <span
  m='230020'>edge</span> <span m='230270'>between</span> <span
  m='230700'>cow</span> <span m='230985'>and</span> <span m='231270'>pig.</span>
  <span m='232460'>And</span> <span m='232920'>indeed,</span> <span
  m='233920'>cow</span> <span m='234370'>goes</span> <span m='234860'>to</span>
  <span m='235260'>hay,</span> <span m='235490'>and</span> <span
  m='236260'>pig</span> <span m='236460'>goes</span> <span m='236850'>to</span>
  <span m='236980'>corn.</span> <span m='238090'>And</span> <span
  m='238330'>sure</span> <span m='238640'>enough,</span> <span
  m='239200'>there</span> <span m='239390'>is</span> <span m='239530'>no</span>
  <span m='239790'>edge</span> <span m='240030'>on</span> <span
  m='240130'>the</span> <span m='240220'>right</span> <span
  m='240520'>between</span> <span m='240940'>hay</span> <span
  m='241170'>and</span> <span m='241320'>corn.</span> <span
  m='242100'>And</span> <span m='242240'>you</span> <span m='242300'>can</span>
  <span m='242460'>check</span> <span m='242750'>the</span> <span
  m='242830'>remaining</span> <span m='243550'>cases.</span> <span
  m='244490'>These</span> <span m='244740'>two</span> <span
  m='244900'>graphs</span> <span m='245260'>are</span> <span
  m='245370'>isomorphic.</span> <span m='246510'>And</span> <span
  m='246710'>that</span> <span m='246880'>function</span> <span
  m='247310'>f</span> <span m='247750'>is</span> <span m='247960'>in</span>
  <span m='248070'>fact</span> <span m='248930'>the</span> <span
  m='250360'>edge</span> <span m='250650'>preserving</span> <span
  m='251580'>byjection.</span> </p><p><span m='253650'>So</span> <span
  m='254700'>stating</span> <span m='255190'>it</span> <span
  m='255290'>again,</span> <span m='257279'>an</span> <span
  m='257579'>isomorphism</span> <span m='258490'>between</span> <span
  m='258920'>two</span> <span m='259110'>graphs</span> <span
  m='259510'>G1</span> <span m='259649'>and</span> <span m='259810'>G2</span>
  <span m='260160'>is</span> <span m='260450'>a</span> <span
  m='260510'>byjection</span> <span m='261120'>between</span> <span
  m='261420'>the</span> <span m='261480'>vertices</span> <span
  m='261970'>V1</span> <span m='262540'>of</span> <span m='262910'>G1</span>
  <span m='263310'>and</span> <span m='263420'>the</span> <span
  m='263490'>vertices</span> <span m='263960'>V2</span> <span
  m='264245'>of</span> <span m='264530'>G2</span> <span m='265700'>with</span>
  <span m='265980'>the</span> <span m='266060'>property</span> <span
  m='266660'>that</span> <span m='267580'>there's</span> <span
  m='267880'>an</span> <span m='267980'>edge</span> <span m='268290'>uv</span>
  <span m='268750'>in</span> <span m='270590'>G1,</span> <span
  m='271130'>an</span> <span m='271570'>E1</span> <span m='272030'>edge,</span>
  <span m='272670'>if</span> <span m='272880'>and</span> <span
  m='272990'>only</span> <span m='273360'>if</span> <span m='274070'>f</span>
  <span m='274290'>of</span> <span m='274430'>u</span> <span m='274886'>f</span>
  <span m='275342'>of</span> <span m='275800'>v</span> <span
  m='276250'>is</span> <span m='276720'>an</span> <span m='276920'>edge</span>
  <span m='277330'>in</span> <span m='277840'>the</span> <span
  m='277930'>second</span> <span m='278310'>graph</span> <span
  m='278640'>in</span> <span m='278950'>E2.</span> <span m='280550'>And</span>
  <span m='280710'>it's</span> <span m='280850'>an</span> <span
  m='281010'>if</span> <span m='281220'>and</span> <span m='281350'>only</span>
  <span m='281690'>if</span> <span m='281880'>that's</span> <span
  m='282110'>edge</span> <span m='282370'>preserving.</span> <span
  m='282900'>So</span> <span m='283470'>if</span> <span
  m='283660'>there's</span> <span m='283850'>an</span> <span
  m='283950'>edge</span> <span m='284250'>here,</span> <span
  m='284750'>there's</span> <span m='284930'>an</span> <span
  m='285030'>edge</span> <span m='285280'>there.</span> <span
  m='285460'>If</span> <span m='285550'>there's</span> <span
  m='285740'>no</span> <span m='285950'>edge</span> <span m='286450'>on</span>
  <span m='286540'>the</span> <span m='286620'>left,</span> <span
  m='286940'>there's</span> <span m='287140'>no</span> <span
  m='287400'>edge</span> <span m='287640'>on</span> <span m='287770'>the</span>
  <span m='287860'>right.</span> <span m='289770'>And</span> <span
  m='289990'>that's</span> <span m='290220'>a</span> <span
  m='290280'>definition</span> <span m='290810'>that's</span> <span
  m='290970'>worth</span> <span m='291230'>remembering.</span> </p><p><span
  m='292420'>It's</span> <span m='292600'>basically</span> <span
  m='292990'>the</span> <span m='293090'>same</span> <span m='293410'>as</span>
  <span m='293600'>the</span> <span m='294350'>digraph</span> <span
  m='294940'>case.</span> <span m='295280'>Except</span> <span
  m='295590'>in</span> <span m='295700'>the</span> <span
  m='295760'>diagram</span> <span m='296220'>case,</span> <span
  m='296710'>the</span> <span m='296930'>edges</span> <span
  m='297230'>have</span> <span m='297520'>a</span> <span
  m='297600'>direction.</span> <span m='298170'>So</span> <span
  m='298420'>it</span> <span m='298720'>would</span> <span m='298900'>be</span>
  <span m='299030'>an</span> <span m='299150'>edge</span> <span
  m='299600'>from</span> <span m='299950'>u</span> <span m='300170'>to</span>
  <span m='300390'>v</span> <span m='300740'>if</span> <span
  m='300920'>and</span> <span m='301040'>only</span> <span m='301320'>if</span>
  <span m='301750'>there</span> <span m='301890'>is</span> <span
  m='301970'>an</span> <span m='302070'>edge</span> <span m='302330'>from</span>
  <span m='302640'>f of</span> <span m='303080'>u</span> <span
  m='303520'>to</span> <span m='303810'>f</span> <span m='304040'>of</span>
  <span m='304305'>v.</span> <span m='304570'>But</span> <span
  m='304880'>since</span> <span m='305220'>we</span> <span
  m='305340'>don't</span> <span m='305520'>have</span> <span
  m='305720'>to</span> <span m='305820'>worry</span> <span
  m='306080'>about</span> <span m='306360'>direction</span> <span
  m='306850'>in</span> <span m='306970'>the</span> <span
  m='307030'>simple</span> <span m='307580'>case,</span> <span
  m='308850'>the</span> <span m='309270'>definition</span> <span
  m='309890'>gets</span> <span m='310050'>slightly</span> <span
  m='310370'>simpler.</span> </p><p><span m='312560'>What</span> <span
  m='312730'>about</span> <span m='313280'>non-isomorphism?</span> <span
  m='314690'>How</span> <span m='314810'>do</span> <span m='314910'>you</span>
  <span m='314990'>show</span> <span m='315200'>that</span> <span
  m='315290'>two</span> <span m='315510'>graphs</span> <span
  m='315840'>are</span> <span m='315890'>not</span> <span
  m='316110'>isomorphic?</span> <span m='316580'>I</span> <span
  m='316650'>can</span> <span m='316800'>show</span> <span m='316960'>you</span>
  <span m='317070'>the</span> <span m='317170'>two</span> <span
  m='317340'>graphs</span> <span m='317650'>are</span> <span
  m='317860'>isomorphic</span> <span m='318500'>by</span> <span
  m='318630'>simply</span> <span m='319430'>telling</span> <span
  m='319840'>you</span> <span m='320200'>what</span> <span m='320580'>the</span>
  <span m='320660'>byjection</span> <span m='321300'>between</span> <span
  m='321640'>their</span> <span m='321750'>vertices</span> <span
  m='322330'>is.</span> <span m='322520'>And</span> <span m='322620'>then</span>
  <span m='322740'>it</span> <span m='322810'>becomes</span> <span
  m='323160'>a</span> <span m='323220'>simple</span> <span
  m='323570'>matter</span> <span m='323920'>of</span> <span
  m='324000'>checking</span> <span m='324620'>whether</span> <span
  m='325390'>the</span> <span m='325580'>edges</span> <span
  m='326110'>that</span> <span m='326260'>should</span> <span
  m='326450'>be</span> <span m='326590'>there</span> <span m='326820'>are</span>
  <span m='326930'>there</span> <span m='327240'>are</span> <span
  m='327360'>not.</span> </p><p><span m='328520'>How</span> <span
  m='328710'>do</span> <span m='328800'>you</span> <span
  m='328860'>figure</span> <span m='329170'>out</span> <span
  m='329290'>the</span> <span m='329360'>two</span> <span
  m='329580'>graphs</span> <span m='329910'>are</span> <span
  m='329960'>not</span> <span m='330220'>isomorphic</span> <span
  m='330535'>and</span> <span m='330850'>that</span> <span
  m='331020'>there</span> <span m='331180'>isn't</span> <span
  m='331570'>any</span> <span m='332130'>byjection</span> <span
  m='333220'>that</span> <span m='333440'>edge</span> <span
  m='333660'>preserves</span> <span m='334150'>edges?</span> <span
  m='334450'>Well,</span> <span m='334720'>for</span> <span m='334870'>a</span>
  <span m='334920'>start,</span> <span m='335340'>these</span> <span
  m='335530'>both</span> <span m='336130'>have</span> <span
  m='336340'>four</span> <span m='336620'>vertices,</span> <span
  m='337180'>so</span> <span m='337420'>it's</span> <span
  m='337990'>perfect.</span> <span m='338250'>There</span> <span
  m='338340'>are</span> <span m='338370'>lots</span> <span m='338580'>of</span>
  <span m='338650'>byjections</span> <span m='339240'>between</span> <span
  m='339860'>the</span> <span m='339960'>four</span> <span
  m='340200'>vertices</span> <span m='340720'>on</span> <span
  m='340810'>the</span> <span m='340880'>left</span> <span m='341560'>and</span>
  <span m='341750'>the</span> <span m='341810'>four</span> <span
  m='342040'>vertices</span> <span m='342560'>on</span> <span
  m='342670'>the</span> <span m='342760'>right.</span> <span
  m='343250'>Why</span> <span m='343720'>isn't</span> <span
  m='344090'>there</span> <span m='344250'>an</span> <span
  m='344350'>edge</span> <span m='344630'>preserving</span> <span
  m='345160'>one?</span> </p><p><span m='345740'>Well,</span> <span
  m='346390'>if</span> <span m='346630'>you</span> <span m='346750'>look</span>
  <span m='347100'>at</span> <span m='347350'>the</span> <span
  m='347640'>graph</span> <span m='348020'>on</span> <span m='348170'>the</span>
  <span m='348240'>left,</span> <span m='349190'>it's</span> <span
  m='349400'>actually</span> <span m='349830'>got</span> <span
  m='350260'>two</span> <span m='350750'>vertices</span> <span
  m='351280'>of</span> <span m='351370'>degree</span> <span m='351750'>2</span>
  <span m='352490'>marked</span> <span m='352830'>in</span> <span
  m='352940'>red</span> <span m='353170'>here.</span> <span
  m='353520'>There's</span> <span m='353790'>a</span> <span
  m='353860'>degree</span> <span m='354200'>2</span> <span
  m='354380'>vertex.</span> <span m='354860'>There's</span> <span
  m='355070'>a</span> <span m='355130'>degree</span> <span m='355470'>2</span>
  <span m='355690'>vertex.</span> <span m='356960'>And</span> <span
  m='357560'>on</span> <span m='357770'>the</span> <span
  m='357870'>right,</span> <span m='358790'>every</span> <span
  m='359150'>vertex</span> <span m='359810'>is</span> <span
  m='359960'>degree</span> <span m='360290'>3,</span> <span m='360630'>if</span>
  <span m='360790'>you</span> <span m='360900'>check.</span> </p><p><span
  m='361830'>Now</span> <span m='362040'>one</span> <span m='362320'>of</span>
  <span m='362470'>the</span> <span m='362540'>things</span> <span
  m='363040'>that</span> <span m='364050'>properties</span> <span
  m='364570'>of</span> <span m='364690'>isomorphism</span> <span
  m='365540'>is</span> <span m='366320'>that</span> <span m='368360'>the</span>
  <span m='369610'>edges</span> <span m='370060'>that</span> <span
  m='370260'>come</span> <span m='370660'>out</span> <span m='370930'>of</span>
  <span m='371310'>the</span> <span m='371480'>red,</span> <span
  m='372500'>these</span> <span m='372710'>two</span> <span
  m='372930'>edges,</span> <span m='373580'>have</span> <span
  m='373850'>to</span> <span m='373940'>correspond</span> <span
  m='374810'>to</span> <span m='374970'>two</span> <span m='375260'>edges</span>
  <span m='376170'>that</span> <span m='376990'>come</span> <span
  m='377320'>out</span> <span m='377520'>of</span> <span
  m='377690'>wherever</span> <span m='378090'>it's</span> <span
  m='378220'>mapped</span> <span m='378600'>to.</span> <span
  m='379120'>So</span> <span m='379490'>a</span> <span m='379550'>degree</span>
  <span m='379920'>2</span> <span m='380170'>vertex</span> <span
  m='380720'>can</span> <span m='380920'>only</span> <span m='381210'>map</span>
  <span m='381580'>to</span> <span m='381730'>a</span> <span
  m='381780'>degree</span> <span m='382110'>2</span> <span
  m='382320'>vertex.</span> <span m='383140'>There</span> <span
  m='383420'>aren't</span> <span m='383690'>any.</span> <span
  m='384320'>That's</span> <span m='384600'>a</span> <span
  m='384660'>proof</span> <span m='385080'>that</span> <span
  m='385280'>there</span> <span m='385400'>can't</span> <span
  m='385760'>be</span> <span m='385960'>an</span> <span
  m='386050'>isomorphism</span> <span m='387300'>between</span> <span
  m='387660'>the</span> <span m='387730'>two</span> <span
  m='387950'>graphs.</span> </p><p><span m='389300'>So</span> <span
  m='389380'>in</span> <span m='389500'>general,</span> <span
  m='390090'>the</span> <span m='390720'>idea</span> <span m='391160'>is</span>
  <span m='391580'>that</span> <span m='391920'>we're</span> <span
  m='392120'>looking</span> <span m='392450'>at</span> <span
  m='392580'>properties</span> <span m='393120'>that</span> <span
  m='393260'>are</span> <span m='393320'>preserved</span> <span
  m='393920'>by</span> <span m='394090'>isomorphism.</span> <span
  m='394890'>This</span> <span m='395030'>is</span> <span
  m='395140'>almost</span> <span m='395490'>like</span> <span
  m='395720'>a</span> <span m='396020'>state</span> <span
  m='396380'>machine</span> <span m='396710'>invariant</span> <span
  m='397460'>kind</span> <span m='397720'>of</span> <span
  m='397840'>idea.</span> <span m='398810'>So</span> <span m='399030'>a</span>
  <span m='399090'>property</span> <span m='399510'>is</span> <span
  m='399670'>preserved</span> <span m='400560'>by</span> <span
  m='400780'>isomorphism.</span> </p><p><span m='403570'>Means</span> <span
  m='404040'>that</span> <span m='404250'>if</span> <span m='404410'>two</span>
  <span m='404570'>graphs--</span> <span m='405220'>if</span> <span
  m='405920'>graph</span> <span m='406180'>one</span> <span
  m='406470'>has</span> <span m='406670'>the</span> <span
  m='406750'>property</span> <span m='407300'>and</span> <span
  m='407610'>graph</span> <span m='408290'>one</span> <span m='408490'>is</span>
  <span m='408610'>isomorphic</span> <span m='409150'>to</span> <span
  m='409240'>graph</span> <span m='409520'>two,</span> <span
  m='409720'>then</span> <span m='409840'>graph</span> <span
  m='410110'>two</span> <span m='410280'>has</span> <span m='410480'>the</span>
  <span m='410550'>property.</span> <span m='412880'>And</span> <span
  m='413170'>clearly</span> <span m='413740'>if</span> <span
  m='414020'>there's</span> <span m='414240'>a</span> <span
  m='414970'>property</span> <span m='415440'>that's</span> <span
  m='415630'>preserved</span> <span m='416160'>by</span> <span
  m='416330'>isomorphism</span> <span m='417260'>and</span> <span
  m='417390'>one</span> <span m='417610'>graph</span> <span
  m='417880'>has</span> <span m='418150'>it</span> <span m='418270'>and</span>
  <span m='418390'>the</span> <span m='418500'>other</span> <span
  m='418670'>graph</span> <span m='418920'>doesn't</span> <span
  m='419250'>have</span> <span m='419500'>it,</span> <span
  m='419830'>that's</span> <span m='420140'>a</span> <span
  m='420210'>proof</span> <span m='420920'>that</span> <span
  m='421120'>they</span> <span m='421240'>can't</span> <span
  m='421570'>be</span> <span m='421700'>isomorphic.</span> </p><p><span
  m='422790'>So</span> <span m='422960'>what</span> <span m='423120'>are</span>
  <span m='423170'>some</span> <span m='423390'>of</span> <span
  m='423450'>these</span> <span m='423620'>properties</span> <span
  m='424100'>that</span> <span m='424220'>are</span> <span
  m='424270'>preserved</span> <span m='424640'>by</span> <span
  m='424800'>isomorphism?</span> <span m='425510'>Well,</span> <span
  m='425800'>the</span> <span m='425880'>number</span> <span
  m='426220'>of</span> <span m='426330'>nodes.</span> <span
  m='426740'>Clearly</span> <span m='427230'>there's</span> <span
  m='427360'>got</span> <span m='427490'>to</span> <span m='427550'>be</span>
  <span m='427630'>a</span> <span m='427680'>byjection,</span> <span
  m='428600'>so</span> <span m='428780'>they</span> <span m='428920'>have</span>
  <span m='429080'>to</span> <span m='429200'>have</span> <span
  m='429380'>the</span> <span m='429450'>same</span> <span
  m='429700'>number</span> <span m='430000'>of</span> <span
  m='430130'>nodes.</span> <span m='431770'>They</span> <span
  m='431950'>have</span> <span m='432070'>to</span> <span m='432130'>have</span>
  <span m='432220'>the</span> <span m='432300'>same</span> <span
  m='432540'>number</span> <span m='432820'>of</span> <span
  m='432930'>edges</span> <span m='433310'>for</span> <span
  m='433460'>similar</span> <span m='433870'>reasons.</span> <span
  m='434210'>Because</span> <span m='434530'>the</span> <span
  m='434830'>edges</span> <span m='435190'>are</span> <span
  m='435250'>preserved.</span> <span m='435890'>An</span> <span
  m='436120'>edge</span> <span m='436320'>on</span> <span m='436440'>one</span>
  <span m='436680'>side</span> <span m='437040'>corresponds</span> <span
  m='437600'>to</span> <span m='437720'>an</span> <span m='437830'>edge</span>
  <span m='438050'>on</span> <span m='438150'>the</span> <span
  m='438260'>other</span> <span m='438450'>side.</span> </p><p><span
  m='440090'>Others</span> <span m='440380'>things</span> <span
  m='440690'>that</span> <span m='440850'>matter</span> <span
  m='441210'>is</span> <span m='441350'>we've</span> <span
  m='441450'>just</span> <span m='441900'>made</span> <span
  m='442210'>this</span> <span m='442370'>argument</span> <span
  m='442830'>that</span> <span m='443020'>the</span> <span
  m='443110'>degrees</span> <span m='443540'>are</span> <span
  m='443780'>preserved</span> <span m='445970'>as</span> <span
  m='446140'>a</span> <span m='446190'>consequence</span> <span
  m='446770'>of</span> <span m='446880'>the</span> <span
  m='446960'>preserving</span> <span m='447460'>of</span> <span
  m='447560'>the</span> <span m='447700'>edges.</span> <span
  m='448920'>And</span> <span m='450540'>all</span> <span
  m='450730'>sorts</span> <span m='450990'>of</span> <span
  m='451100'>other</span> <span m='451320'>structural</span> <span
  m='451940'>properties</span> <span m='452520'>are</span> <span
  m='452570'>going</span> <span m='452730'>to</span> <span m='452810'>be</span>
  <span m='452950'>preserved</span> <span m='453450'>by</span> <span
  m='453630'>isomorphism,</span> <span m='454590'>like</span> <span
  m='454860'>for</span> <span m='455040'>example,</span> <span
  m='455610'>the</span> <span m='455630'>existence</span> <span
  m='456230'>of</span> <span m='456620'>circular</span> <span
  m='457180'>paths,</span> <span m='457750'>and</span> <span
  m='457910'>distances</span> <span m='458660'>between</span> <span
  m='459110'>vertices,</span> <span m='459650'>and</span> <span
  m='459760'>things</span> <span m='460040'>like</span> <span
  m='460260'>that.</span> <span m='460800'>Those</span> <span
  m='461060'>will</span> <span m='461230'>all</span> <span m='461490'>be</span>
  <span m='461660'>properties</span> <span m='462260'>that</span> <span
  m='462390'>are</span> <span m='462450'>preserved</span> <span
  m='463450'>by</span> <span m='463820'>isomorphism.</span> </p><p><span
  m='466330'>So</span> <span m='466560'>that</span> <span
  m='466780'>gives</span> <span m='467020'>you</span> <span m='467190'>a</span>
  <span m='467260'>hook</span> <span m='467820'>on</span> <span
  m='468410'>trying</span> <span m='468680'>to</span> <span
  m='468740'>figure</span> <span m='469100'>out</span> <span
  m='469320'>whether</span> <span m='469580'>or</span> <span
  m='469710'>not</span> <span m='469990'>two</span> <span
  m='470170'>graphs</span> <span m='470650'>are</span> <span
  m='470990'>or</span> <span m='471180'>are</span> <span m='471270'>not</span>
  <span m='471810'>isomorphic.</span> <span m='473150'>But</span> <span
  m='473720'>in</span> <span m='473890'>general,</span> <span
  m='474710'>there</span> <span m='475140'>will</span> <span
  m='475440'>be,</span> <span m='475840'>if</span> <span
  m='476030'>you've</span> <span m='476220'>got</span> <span m='476400'>a</span>
  <span m='476450'>graph</span> <span m='476870'>with</span> <span
  m='477000'>a</span> <span m='477030'>few</span> <span m='477270'>100 or</span>
  <span m='477690'>1,000</span> <span m='478140'>vertices,</span> <span
  m='478790'>there</span> <span m='479000'>are</span> <span m='479140'>an</span>
  <span m='479290'>awful</span> <span m='479680'>lot</span> <span
  m='480030'>of</span> <span m='480180'>potential</span> <span
  m='480690'>byjections</span> <span m='481380'>between</span> <span
  m='481800'>them</span> <span m='482310'>to</span> <span
  m='482470'>check.</span> <span m='483330'>And</span> <span
  m='484480'>the</span> <span m='484600'>question</span> <span
  m='485090'>is,</span> <span m='485750'>how</span> <span m='485830'>do</span>
  <span m='485910'>you</span> <span m='486000'>do</span> <span
  m='486210'>it?</span> <span m='486330'>It's</span> <span m='486490'>a</span>
  <span m='486550'>huge</span> <span m='487000'>search</span> <span
  m='487830'>that</span> <span m='488240'>can't</span> <span
  m='488790'>really</span> <span m='489050'>be</span> <span
  m='489170'>effectively</span> <span m='489720'>done</span> <span
  m='491460'>exhaustively.</span> </p><p><span m='492960'>So</span> <span
  m='493400'>what</span> <span m='493630'>you</span> <span
  m='493720'>look</span> <span m='493880'>for</span> <span m='494330'>is</span>
  <span m='494640'>properties</span> <span m='495250'>that</span> <span
  m='495400'>are</span> <span m='495510'>preserved</span> <span
  m='496040'>by</span> <span m='496170'>isomorphisms</span> <span
  m='497370'>that</span> <span m='497590'>give</span> <span
  m='497800'>you</span> <span m='497940'>a</span> <span m='498010'>guide.</span>
  <span m='498690'>So</span> <span m='498750'>for</span> <span
  m='498960'>example,</span> <span m='500920'>if</span> <span
  m='501100'>the</span> <span m='501210'>graph</span> <span m='501480'>on</span>
  <span m='501590'>the</span> <span m='501660'>left</span> <span
  m='502030'>happens</span> <span m='502370'>to</span> <span
  m='502460'>have</span> <span m='502650'>a</span> <span
  m='502700'>degree</span> <span m='503020'>4</span> <span
  m='503490'>vertex</span> <span m='504060'>and</span> <span
  m='504310'>that</span> <span m='504490'>degree</span> <span
  m='504810'>4</span> <span m='505090'>vertex</span> <span m='505560'>is</span>
  <span m='505710'>adjacent</span> <span m='506510'>to</span> <span
  m='506720'>a</span> <span m='506770'>degree</span> <span m='507140'>3</span>
  <span m='507470'>vertex,</span> <span m='508580'>then</span> <span
  m='509100'>the</span> <span m='509310'>adjacency</span> <span
  m='510080'>of</span> <span m='510180'>a</span> <span m='510230'>degree</span>
  <span m='510510'>4 and a</span> <span m='510830'>degree</span> <span
  m='511170'>3</span> <span m='511470'>is</span> <span m='511630'>a</span> <span
  m='511680'>typical</span> <span m='512150'>property</span> <span
  m='512559'>that's</span> <span m='512750'>preserved</span> <span
  m='513190'>by</span> <span m='513350'>isomorphism.</span> </p><p><span
  m='514549'>So</span> <span m='514630'>you</span> <span m='514740'>know</span>
  <span m='514880'>for</span> <span m='515039'>sure</span> <span
  m='515370'>that</span> <span m='515510'>if</span> <span
  m='515650'>there's</span> <span m='515830'>going</span> <span
  m='516020'>to</span> <span m='516110'>be</span> <span m='516350'>a</span>
  <span m='516450'>byjection</span> <span m='517580'>between</span> <span
  m='518039'>the</span> <span m='518700'>first</span> <span
  m='518975'>graph</span> <span m='519250'>and</span> <span
  m='519350'>the</span> <span m='519409'>second</span> <span
  m='519799'>graph,</span> <span m='520490'>this</span> <span
  m='521260'>pair</span> <span m='521630'>of</span> <span
  m='521740'>adjacent</span> <span m='522240'>vertices</span> <span
  m='522720'>of</span> <span m='522809'>degree</span> <span m='523120'>4</span>
  <span m='523419'>and</span> <span m='523520'>degree</span> <span
  m='523799'>3</span> <span m='524490'>can</span> <span m='524800'>only</span>
  <span m='525130'>map</span> <span m='525760'>to</span> <span
  m='525970'>another</span> <span m='526380'>pair</span> <span
  m='527080'>of</span> <span m='527250'>adjacent</span> <span
  m='527680'>vertices</span> <span m='528140'>in</span> <span
  m='528240'>the</span> <span m='528300'>second</span> <span
  m='528690'>graph</span> <span m='529000'>that</span> <span
  m='529150'>also</span> <span m='529470'>have</span> <span
  m='529640'>degrees</span> <span m='530060'>4</span> <span
  m='530610'>and</span> <span m='530810'>3.</span> <span m='531530'>So</span>
  <span m='531700'>that</span> <span m='531910'>will</span> <span
  m='532030'>cut</span> <span m='532380'>down</span> <span
  m='532690'>enormously</span> <span m='533660'>the</span> <span
  m='533770'>number</span> <span m='534160'>of</span> <span
  m='534270'>places</span> <span m='534810'>that</span> <span
  m='534980'>this</span> <span m='535170'>given</span> <span
  m='535490'>vertex</span> <span m='536090'>can</span> <span
  m='536300'>map</span> <span m='536610'>to</span> <span m='537460'>in</span>
  <span m='537640'>the</span> <span m='537760'>other</span> <span
  m='537970'>graph.</span> <span m='538550'>And</span> <span
  m='538970'>it</span> <span m='539130'>gives</span> <span m='539350'>you</span>
  <span m='540660'>some</span> <span m='540900'>structure</span> <span
  m='541490'>to</span> <span m='541670'>use</span> <span m='542010'>to</span>
  <span m='542120'>try</span> <span m='542340'>to</span> <span
  m='542430'>narrow</span> <span m='542830'>down</span> <span
  m='543170'>the</span> <span m='543240'>search</span> <span
  m='543710'>for</span> <span m='543890'>the</span> <span
  m='543970'>number</span> <span m='544240'>of</span> <span
  m='544350'>isomorphisms,</span> <span m='545430'>and</span> <span
  m='546050'>where</span> <span m='546420'>the</span> <span
  m='546530'>isomorphism</span> <span m='547390'>is, and</span> <span
  m='547680'>whether</span> <span m='547910'>or</span> <span
  m='547970'>not</span> <span m='548140'>it</span> <span
  m='548220'>exists.</span> </p><p><span m='550710'>So</span> <span
  m='552520'>having</span> <span m='553010'>a</span> <span
  m='553500'>degree</span> <span m='553730'>4</span> <span
  m='553930'>adjacent</span> <span m='554290'>to</span> <span
  m='554380'>a</span> <span m='554420'>degree</span> <span m='554730'>3,</span>
  <span m='555160'>for</span> <span m='555330'>example,</span> <span
  m='556140'>is</span> <span m='556360'>a</span> <span m='556410'>typical</span>
  <span m='556880'>property</span> <span m='557340'>that's</span> <span
  m='558090'>preserved</span> <span m='558640'>under</span> <span
  m='558920'>isomorphism.</span> <span m='560370'>But</span> <span
  m='560940'>even</span> <span m='561250'>so,</span> <span m='562340'>if</span>
  <span m='562590'>I</span> <span m='562760'>give</span> <span
  m='563030'>you</span> <span m='564230'>two</span> <span m='564800'>very</span>
  <span m='565110'>large</span> <span m='565470'>graphs,</span> <span
  m='566080'>and</span> <span m='566320'>these</span> <span
  m='566570'>are</span> <span m='566650'>actually</span> <span
  m='567070'>extracted</span> <span m='567620'>graphs</span> <span
  m='568000'>from</span> <span m='568190'>some</span> <span
  m='568450'>communication</span> <span m='569160'>network,</span> <span
  m='570070'>an</span> <span m='570210'>image</span> <span m='570580'>of</span>
  <span m='570760'>them,</span> <span m='571870'>it's</span> <span
  m='572350'>very</span> <span m='572600'>hard</span> <span m='572830'>to</span>
  <span m='572920'>tell</span> <span m='573230'>whether</span> <span
  m='573510'>or</span> <span m='573580'>not</span> <span
  m='573810'>they're</span> <span m='573970'>isomorphic.</span> <span
  m='574500'>Well,</span> <span m='574620'>you</span> <span
  m='574700'>could</span> <span m='574870'>guess,</span> <span
  m='575090'>because</span> <span m='575400'>of</span> <span
  m='575470'>course,</span> <span m='575690'>we</span> <span
  m='575770'>took</span> <span m='575960'>the</span> <span
  m='576030'>same</span> <span m='576240'>picture</span> <span
  m='576530'>and</span> <span m='576630'>copied</span> <span
  m='576960'>it</span> <span m='577060'>twice.</span> </p><p><span
  m='577380'>But</span> <span m='577770'>if</span> <span m='578030'>there</span>
  <span m='578180'>was</span> <span m='578320'>some</span> <span
  m='578520'>subtle</span> <span m='578940'>difference</span> <span
  m='579430'>between</span> <span m='580230'>these</span> <span
  m='580520'>two,</span> <span m='580730'>like</span> <span m='581030'>I</span>
  <span m='581100'>erased</span> <span m='581560'>one</span> <span
  m='581750'>edge</span> <span m='582030'>somewhere</span> <span
  m='582350'>in</span> <span m='582490'>the</span> <span
  m='582550'>middle</span> <span m='582830'>of</span> <span
  m='582910'>that</span> <span m='583120'>mess,</span> <span
  m='583840'>how</span> <span m='584050'>would</span> <span
  m='584200'>you</span> <span m='584310'>figure</span> <span
  m='584700'>out</span> <span m='584930'>that</span> <span m='585070'>the</span>
  <span m='585150'>two</span> <span m='585310'>graphs</span> <span
  m='585630'>were</span> <span m='585720'>not</span> <span
  m='585950'>isomorphic</span> <span m='586590'>in</span> <span
  m='586710'>that</span> <span m='586910'>case?</span> <span
  m='587700'>And</span> <span m='587960'>the</span> <span
  m='588090'>answer</span> <span m='588510'>is</span> <span
  m='588920'>that</span> <span m='589820'>like</span> <span
  m='590190'>these</span> <span m='590410'>NP</span> <span
  m='590750'>complete</span> <span m='591170'>problems,</span> <span
  m='592170'>there</span> <span m='592370'>is</span> <span m='592590'>no</span>
  <span m='592940'>known</span> <span m='593780'>procedure</span> <span
  m='594550'>to</span> <span m='594670'>check</span> <span
  m='595010'>whether</span> <span m='595410'>or</span> <span
  m='595460'>not</span> <span m='595790'>two</span> <span
  m='595980'>graphs</span> <span m='596370'>are</span> <span
  m='596470'>isomorphic</span> <span m='597570'>that</span> <span
  m='597770'>is</span> <span m='597930'>guaranteed</span> <span
  m='599170'>to</span> <span m='599460'>be</span> <span
  m='599710'>efficient</span> <span m='600330'>and</span> <span
  m='600520'>to</span> <span m='600630'>run</span> <span m='601050'>in</span>
  <span m='601210'>polynomial</span> <span m='601890'>time.</span> </p><p><span
  m='603040'>On</span> <span m='603390'>the</span> <span m='603530'>other</span>
  <span m='603730'>hand,</span> <span m='604460'>there</span> <span
  m='604760'>are</span> <span m='604840'>technical</span> <span
  m='605360'>reasons,</span> <span m='605790'>there are</span> <span
  m='606010'>technical</span> <span m='606360'>properties,</span> <span
  m='606720'>that</span> <span m='606840'>says</span> <span
  m='607090'>that</span> <span m='607460'>graph</span> <span
  m='607700'>isomorphism</span> <span m='609080'>is</span> <span
  m='609260'>not</span> <span m='609660'>one</span> <span m='609810'>of</span>
  <span m='609910'>these</span> <span m='610130'>NP</span> <span
  m='610410'>complete</span> <span m='610820'>problems,</span> <span
  m='612500'>unless</span> <span m='612860'>[? peoples ?]</span> <span
  m='613300'>NP</span> <span m='613640'>or</span> <span
  m='613720'>something</span> <span m='614030'>like</span> <span
  m='614250'>that.</span> <span m='616100'>And</span> <span m='617710'>so</span>
  <span m='617950'>that's</span> <span m='618180'>one</span> <span
  m='618490'>distinguishing</span> <span m='619080'>characteristic</span> <span
  m='619830'>of</span> <span m='619930'>this</span> <span
  m='620100'>problem.</span> <span m='621520'>The</span> <span
  m='621660'>important</span> <span m='622120'>one</span> <span
  m='622310'>is</span> <span m='622590'>that,</span> <span m='622750'>as</span>
  <span m='622900'>a</span> <span m='622950'>matter</span> <span
  m='623250'>of</span> <span m='623320'>fact,</span> <span m='623680'>in</span>
  <span m='623760'>practice</span> <span m='625450'>there</span> <span
  m='625670'>are</span> <span m='625750'>some</span> <span
  m='625980'>really</span> <span m='626290'>good</span> <span
  m='626740'>isomorphism</span> <span m='627830'>programs</span> <span
  m='628550'>around</span> <span m='629060'>that</span> <span
  m='629360'>will</span> <span m='630540'>in</span> <span m='631510'>many</span>
  <span m='631820'>cases</span> <span m='633070'>figure</span> <span
  m='633470'>out,</span> <span m='633680'>given</span> <span
  m='633940'>two</span> <span m='634110'>graphs,</span> <span
  m='634420'>whether</span> <span m='634700'>or</span> <span
  m='634840'>not</span> <span m='635540'>they</span> <span m='635740'>are</span>
  <span m='635860'>isomorphic</span> <span m='637250'>in</span> <span
  m='637460'>time</span> <span m='637940'>that's</span> <span
  m='638140'>approximately</span> <span m='638870'>the</span> <span
  m='638970'>size</span> <span m='639330'>of</span> <span m='639420'>the</span>
  <span m='639490'>two</span> <span m='639670'>graphs.</span> </p><p><span
  m='640670'>So</span> <span m='640800'>pragmatically,</span> <span
  m='641650'>graph</span> <span m='641980'>isomorphism</span> <span
  m='642730'>seems</span> <span m='643020'>to</span> <span m='643110'>be</span>
  <span m='643240'>a</span> <span m='643290'>manageable</span> <span
  m='643840'>problem.</span> <span m='645120'>Although</span> <span
  m='646610'>theoretically</span> <span m='648240'>you</span> <span
  m='649040'>can't</span> <span m='649370'>be</span> <span
  m='649510'>sure</span> <span m='649970'>that</span> <span
  m='650350'>these</span> <span m='650660'>efficient</span> <span
  m='651090'>procedures</span> <span m='651570'>that</span> <span
  m='651670'>work</span> <span m='651910'>most</span> <span m='652170'>of</span>
  <span m='652240'>the</span> <span m='652310'>time</span> <span
  m='652590'>are</span> <span m='652640'>going</span> <span m='652780'>to</span>
  <span m='652850'>work</span> <span m='653160'>always.</span> <span
  m='654090'>Well,</span> <span m='654300'>known</span> <span
  m='654590'>procedures</span> <span m='655090'>in</span> <span
  m='655180'>fact</span> <span m='655770'>blow</span> <span m='656150'>up</span>
  <span m='656310'>exponentially</span> <span m='657350'>on</span> <span
  m='657540'>some</span> <span m='657790'>example</span> <span
  m='658710'>or</span> <span m='658880'>another.</span> </p>
embedded_media:
  - uid: 9d2af16e9e8701112e51a7d1837042bc
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 27de6f37f9be9a06edb76c353e02eb4e
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 17c723554ea8f9360106fd560731d3f2
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: hVerxuP4cFg
  - uid: 6c51b9b2c435d6fc502de2fefe661d0f
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/hVerxuP4cFg/default.jpg'
  - uid: b1e556220f37bbf9369b8da5b6e6a6fc
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: hVerxuP4cFg
  - uid: 98d4b951400dae18d5478362bd73e7fc
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: hVerxuP4cFg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd/isomorphism/hVerxuP4cFg.srt
  - uid: 2a25b47a3019fbc5894ff6d93454fd93
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: hVerxuP4cFg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-2/vertical-4cdac51413fd/isomorphism/hVerxuP4cFg.pdf
  - uid: 1277c6084115258f409d9212a6ccd49f
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 3cde498965749bdd32dd0e7cb23f650b
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: ad129967510ef12fa5b21e012f8bdb09
    parent_uid: cfba671f534d3abae0aadcf606a0aa34
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_simple_isomorphism_video_ipod.mp4
type: courses
layout: video
---
