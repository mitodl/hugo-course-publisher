---
title: 'Video 3: Data Analysis'
uid: 7b76c708288483f1384a424fbad747de
parent_uid: 6ad5f5f03eab95b2b2855fe1042f41da
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/understanding-food-nutritional-education-with-data-recitation/video-3-data-analysis/video-3-data-analysis-0
short_url: video-3-data-analysis-0
inline_embed_id: 43990927video3dataanalysis36049110
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>In</span> <span m='4870'>this</span> <span
  m='5240'>video,</span> <span m='5610'>we</span> <span m='5980'>will</span>
  <span m='6350'>do</span> <span m='6720'>some</span> <span
  m='7090'>basic</span> <span m='7460'>data</span> <span
  m='7830'>analysis.</span> </p><p><span m='8200'>All</span> <span
  m='8457'>that</span> <span m='8715'>I've</span> <span m='8972'>done</span>
  <span m='9230'>since</span> <span m='9487'>our</span> <span
  m='9745'>previous</span> <span m='10002'>video</span> <span
  m='10260'>is</span> <span m='10585'>clear</span> <span m='10910'>the</span>
  <span m='11236'>console,</span> <span m='11561'>but</span> <span
  m='11887'>R</span> <span m='12212'>still</span> <span m='12538'>has</span>
  <span m='12863'>all</span> <span m='13189'>the</span> <span
  m='13514'>information</span> <span m='13840'>stored.</span> </p><p><span
  m='14980'>In</span> <span m='15241'>fact,</span> <span m='15503'>if</span>
  <span m='15765'>we</span> <span m='16027'>use</span> <span
  m='16289'>the</span> <span m='16550'>Up</span> <span m='16812'>Arrow</span>
  <span m='17074'>on</span> <span m='17336'>our</span> <span
  m='17598'>keyboard,</span> <span m='17860'>we</span> <span
  m='18182'>retrieve</span> <span m='18505'>the</span> <span
  m='18828'>last</span> <span m='19151'>command</span> <span m='19474'>we</span>
  <span m='19797'>typed,</span> <span m='20120'>which</span> <span
  m='20522'>was</span> <span m='20924'>the</span> <span m='21326'>summary</span>
  <span m='21728'>of</span> <span m='22131'>the</span> <span
  m='22533'>USDA</span> <span m='22935'>data</span> <span
  m='23337'>frame.</span> </p><p><span m='23740'>And</span> <span
  m='23984'>as</span> <span m='24228'>a</span> <span m='24472'>quick</span>
  <span m='24716'>reminder,</span> <span m='24960'>at</span> <span
  m='25205'>the</span> <span m='25449'>end</span> <span m='25693'>of</span>
  <span m='25937'>our</span> <span m='26181'>last</span> <span
  m='26425'>video,</span> <span m='26670'>we</span> <span
  m='27050'>realized</span> <span m='27430'>that</span> <span
  m='27810'>the</span> <span m='28190'>maximum</span> <span
  m='28570'>level</span> <span m='28950'>of</span> <span m='29330'>Sodium</span>
  <span m='29710'>was</span> <span m='30450'>38,758</span> <span
  m='31190'>milligrams,</span> <span m='31930'>which</span> <span
  m='32670'>is</span> <span m='33410'>very</span> <span m='34150'>high.</span>
  </p><p><span m='34890'>We</span> <span m='35222'>would</span> <span
  m='35554'>like</span> <span m='35886'>to</span> <span m='36218'>see</span>
  <span m='36550'>which</span> <span m='36882'>food</span> <span
  m='37214'>this</span> <span m='37546'>corresponds</span> <span
  m='37878'>to.</span> </p><p><span m='38210'>Well,</span> <span
  m='38469'>to</span> <span m='38728'>check</span> <span m='38987'>the</span>
  <span m='39246'>values</span> <span m='39505'>of</span> <span
  m='39764'>sodium</span> <span m='40023'>levels</span> <span
  m='40282'>in</span> <span m='40541'>the</span> <span m='40800'>foods</span>
  <span m='41060'>within</span> <span m='41401'>the</span> <span
  m='41742'>data</span> <span m='42083'>set,</span> <span m='42425'>we</span>
  <span m='42766'>can</span> <span m='43107'>type</span> <span
  m='43448'>USDA$Sodium.</span> </p><p><span m='46570'>This</span> <span
  m='46901'>gives</span> <span m='47232'>us</span> <span m='47563'>a</span>
  <span m='47895'>series</span> <span m='48226'>of</span> <span
  m='48557'>numbers</span> <span m='48888'>associated</span> <span
  m='49220'>with</span> <span m='49507'>the</span> <span m='49795'>amount</span>
  <span m='50083'>of</span> <span m='50370'>sodium</span> <span
  m='50658'>in</span> <span m='50946'>all</span> <span m='51233'>the</span>
  <span m='51521'>foods</span> <span m='51809'>in</span> <span
  m='52096'>our</span> <span m='52384'>data</span> <span m='52672'>set.</span>
  </p><p><span m='52960'>Remember</span> <span m='53256'>from</span> <span
  m='53552'>the</span> <span m='53848'>lecture</span> <span
  m='54144'>that</span> <span m='54440'>this</span> <span m='54736'>is</span>
  <span m='55032'>called</span> <span m='55328'>a</span> <span
  m='55624'>vector,</span> <span m='55920'>and</span> <span m='56325'>it</span>
  <span m='56730'>is</span> <span m='57135'>associated</span> <span
  m='57540'>with</span> <span m='57945'>the</span> <span
  m='58350'>variable</span> <span m='58755'>Sodium.</span> </p><p><span
  m='59160'>For</span> <span m='59465'>instance,</span> <span
  m='59771'>the</span> <span m='60076'>sodium</span> <span
  m='60382'>level</span> <span m='60687'>of</span> <span m='60993'>the</span>
  <span m='61298'>last</span> <span m='61604'>food</span> <span
  m='61910'>in</span> <span m='62488'>our</span> <span m='63067'>data</span>
  <span m='63645'>set</span> <span m='64224'>is</span> <span m='64802'>68</span>
  <span m='65381'>milligrams.</span> </p><p><span m='65960'>Now,</span> <span
  m='66262'>to</span> <span m='66565'>find</span> <span m='66867'>which</span>
  <span m='67170'>food</span> <span m='67473'>has</span> <span
  m='67775'>the</span> <span m='68078'>highest</span> <span
  m='68381'>level</span> <span m='68683'>of</span> <span
  m='68986'>sodium,</span> <span m='69289'>we</span> <span m='69781'>can</span>
  <span m='70274'>simply</span> <span m='70766'>use</span> <span
  m='71259'>the</span> <span m='71752'>function</span> <span
  m='72244'>which.max,</span> <span m='72737'>which</span> <span
  m='73230'>takes</span> <span m='73785'>as</span> <span m='74341'>an</span>
  <span m='74897'>input</span> <span m='75452'>the</span> <span
  m='76008'>Sodium</span> <span m='76564'>vector,</span> <span
  m='77120'>and</span> <span m='77384'>it</span> <span m='77649'>gives</span>
  <span m='77913'>us</span> <span m='78178'>the</span> <span
  m='78443'>index</span> <span m='78707'>of</span> <span m='78972'>the</span>
  <span m='79236'>food</span> <span m='79501'>with</span> <span
  m='79766'>the</span> <span m='80030'>highest</span> <span
  m='80295'>sodium</span> <span m='80560'>level.</span> </p><p><span
  m='81600'>In</span> <span m='81975'>this</span> <span m='82350'>case,</span>
  <span m='82725'>the</span> <span m='83100'>265th</span> <span
  m='83475'>food</span> <span m='83850'>in</span> <span m='84225'>our</span>
  <span m='84600'>data</span> <span m='84975'>set</span> <span
  m='85350'>has</span> <span m='85884'>the</span> <span m='86418'>maximum</span>
  <span m='86952'>sodium</span> <span m='87486'>content.</span> </p><p><span
  m='88020'>Now</span> <span m='88321'>to</span> <span m='88622'>know</span>
  <span m='88923'>which</span> <span m='89225'>food</span> <span
  m='89526'>that</span> <span m='89827'>is,</span> <span m='90128'>we</span>
  <span m='90430'>need</span> <span m='90712'>to</span> <span
  m='90994'>take</span> <span m='91276'>a</span> <span m='91558'>look</span>
  <span m='91841'>at</span> <span m='92123'>the</span> <span
  m='92405'>vector</span> <span m='92687'>corresponding</span> <span
  m='92970'>to</span> <span m='93394'>the</span> <span m='93818'>text</span>
  <span m='94242'>description</span> <span m='94667'>of</span> <span
  m='95091'>the</span> <span m='95515'>foods.</span> </p><p><span
  m='95940'>However,</span> <span m='96285'>I</span> <span
  m='96630'>cannot</span> <span m='96975'>remember</span> <span
  m='97320'>the</span> <span m='97665'>exact</span> <span m='98010'>name</span>
  <span m='98355'>of</span> <span m='98700'>that</span> <span
  m='99045'>variable</span> <span m='99390'>on</span> <span m='99616'>top</span>
  <span m='99843'>of</span> <span m='100070'>my</span> <span
  m='100297'>head</span> <span m='100524'>to</span> <span m='100751'>be</span>
  <span m='100978'>able</span> <span m='101205'>to</span> <span
  m='101432'>call</span> <span m='101659'>it</span> <span m='101886'>in</span>
  <span m='102113'>R.</span> </p><p><span m='102340'>But</span> <span
  m='102758'>we</span> <span m='103177'>can</span> <span m='103595'>use</span>
  <span m='104014'>the</span> <span m='104432'>function</span> <span
  m='104851'>names,</span> <span m='105270'>which</span> <span
  m='105627'>takes</span> <span m='105985'>as</span> <span m='106342'>an</span>
  <span m='106700'>input</span> <span m='107057'>the</span> <span
  m='107415'>USDA</span> <span m='107772'>data</span> <span
  m='108130'>frame</span> <span m='108487'>and</span> <span
  m='108845'>gives</span> <span m='109202'>us</span> <span m='109560'>the</span>
  <span m='109921'>exact</span> <span m='110283'>names</span> <span
  m='110645'>of</span> <span m='111006'>all</span> <span m='111368'>the</span>
  <span m='111730'>variables</span> <span m='112091'>as</span> <span
  m='112453'>stored</span> <span m='112815'>in</span> <span
  m='113176'>the</span> <span m='113538'>USDA</span> <span
  m='113900'>data</span> <span m='114555'>frame.</span> </p><p><span
  m='115210'>And</span> <span m='115470'>now</span> <span m='115730'>we</span>
  <span m='115990'>know</span> <span m='116250'>that</span> <span
  m='116510'>the</span> <span m='116770'>name</span> <span m='117030'>of</span>
  <span m='117290'>the</span> <span m='117550'>variable</span> <span
  m='117810'>we're</span> <span m='118070'>looking</span> <span
  m='118330'>at</span> <span m='118590'>is</span> <span
  m='119540'>Description.</span> </p><p><span m='120490'>So</span> <span
  m='120875'>now,</span> <span m='121260'>to</span> <span m='121645'>get</span>
  <span m='122030'>the</span> <span m='122415'>name</span> <span
  m='122800'>of</span> <span m='123185'>the</span> <span m='123570'>265th</span>
  <span m='123955'>food,</span> <span m='124340'>we</span> <span
  m='124740'>simply</span> <span m='125140'>need</span> <span
  m='125540'>to</span> <span m='125940'>ask</span> <span m='126340'>R</span>
  <span m='126740'>to</span> <span m='127140'>pick</span> <span
  m='127540'>the</span> <span m='127940'>265th</span> <span
  m='128340'>element</span> <span m='128740'>from</span> <span
  m='129205'>the</span> <span m='129670'>vector</span> <span
  m='130135'>Description.</span> </p><p><span m='130600'>So,</span> <span
  m='131075'>using</span> <span m='131550'>our</span> <span
  m='132025'>dollar</span> <span m='132500'>notation</span> <span
  m='132975'>to</span> <span m='133450'>call</span> <span m='133925'>the</span>
  <span m='134400'>Description</span> <span m='134875'>vector</span> <span
  m='135350'>and</span> <span m='135842'>then</span> <span m='136334'>the</span>
  <span m='136826'>square</span> <span m='137318'>brackets</span> <span
  m='137811'>around</span> <span m='138303'>the</span> <span
  m='138795'>index</span> <span m='139287'>265,</span> <span
  m='139780'>and</span> <span m='140543'>the</span> <span
  m='141306'>winner</span> <span m='142070'>is</span> <span
  m='142833'>table</span> <span m='143596'>salt!</span> </p><p><span
  m='144360'>Well,</span> <span m='144960'>having</span> <span
  m='145560'>38,758</span> <span m='146160'>milligrams</span> <span
  m='146760'>of</span> <span m='147360'>sodium</span> <span m='147960'>in</span>
  <span m='148560'>100</span> <span m='149160'>grams</span> <span
  m='149760'>of</span> <span m='150360'>table</span> <span
  m='150960'>salt</span> <span m='151424'>sort</span> <span m='151888'>of</span>
  <span m='152353'>makes</span> <span m='152817'>sense,</span> <span
  m='153282'>but</span> <span m='153746'>none</span> <span m='154211'>of</span>
  <span m='154675'>us</span> <span m='155140'>would</span> <span
  m='155438'>eat</span> <span m='155737'>100</span> <span
  m='156036'>grams</span> <span m='156335'>of</span> <span
  m='156633'>salt</span> <span m='156932'>in</span> <span m='157231'>one</span>
  <span m='157530'>sitting.</span> </p><p><span m='157829'>So</span> <span
  m='158199'>it</span> <span m='158569'>might</span> <span m='158939'>be</span>
  <span m='159309'>more</span> <span m='159679'>interesting</span> <span
  m='160049'>to</span> <span m='160419'>find</span> <span m='160790'>out</span>
  <span m='161166'>which</span> <span m='161542'>foods,</span> <span
  m='161918'>for</span> <span m='162295'>instance,</span> <span
  m='162671'>contain</span> <span m='163047'>more</span> <span
  m='163423'>than,</span> <span m='163800'>say,</span> <span
  m='164424'>10,000</span> <span m='165048'>milligrams</span> <span
  m='165672'>of</span> <span m='166296'>sodium.</span> </p><p><span
  m='166920'>To</span> <span m='167200'>do</span> <span m='167480'>so,</span>
  <span m='167760'>we</span> <span m='168040'>can</span> <span
  m='168320'>create</span> <span m='168600'>a</span> <span m='168880'>new</span>
  <span m='169160'>data</span> <span m='169440'>frame,</span> <span
  m='169720'>and</span> <span m='170280'>let's</span> <span
  m='170840'>call</span> <span m='171400'>it</span> <span
  m='171960'>HighSodium.</span> </p><p><span m='172520'>And</span> <span
  m='172826'>this</span> <span m='173133'>is</span> <span
  m='173440'>going</span> <span m='173746'>to</span> <span m='174053'>be</span>
  <span m='174360'>a</span> <span m='174666'>subset</span> <span
  m='174973'>of</span> <span m='175280'>our</span> <span
  m='175586'>original</span> <span m='175893'>data</span> <span
  m='176200'>frame,</span> <span m='176642'>USDA,</span> <span
  m='177085'>with</span> <span m='177528'>only</span> <span
  m='177971'>the</span> <span m='178414'>foods</span> <span
  m='178857'>that</span> <span m='179300'>have</span> <span
  m='180070'>sodium</span> <span m='180840'>content</span> <span
  m='181610'>that</span> <span m='182380'>exceeds</span> <span
  m='183150'>10,000.</span> </p><p><span m='183920'>And</span> <span
  m='184276'>now</span> <span m='184632'>we</span> <span
  m='184988'>created</span> <span m='185345'>this</span> <span
  m='185701'>new</span> <span m='186057'>data</span> <span
  m='186413'>frame,</span> <span m='186770'>and</span> <span
  m='187033'>to</span> <span m='187296'>see</span> <span m='187559'>how</span>
  <span m='187822'>many</span> <span m='188085'>foods</span> <span
  m='188348'>there</span> <span m='188611'>exist</span> <span
  m='188874'>in</span> <span m='189137'>this</span> <span m='189400'>new</span>
  <span m='189663'>data</span> <span m='189926'>frame,</span> <span
  m='190190'>we</span> <span m='190564'>need</span> <span m='190938'>to</span>
  <span m='191313'>see</span> <span m='191687'>how</span> <span
  m='192062'>many</span> <span m='192436'>observations</span> <span
  m='192811'>this</span> <span m='193185'>data</span> <span
  m='193560'>frame</span> <span m='194085'>has.</span> </p><p><span
  m='194610'>And</span> <span m='194964'>this</span> <span m='195319'>can</span>
  <span m='195673'>be</span> <span m='196028'>done</span> <span
  m='196382'>by</span> <span m='196737'>using</span> <span m='197091'>the</span>
  <span m='197446'>function</span> <span m='197800'>nrow,</span> <span
  m='198155'>which</span> <span m='198510'>computes</span> <span
  m='199078'>the</span> <span m='199646'>number</span> <span
  m='200214'>of</span> <span m='200782'>rows</span> <span m='201350'>in</span>
  <span m='201918'>the</span> <span m='202486'>data</span> <span
  m='203054'>frame</span> <span m='203622'>HighSodium.</span> </p><p><span
  m='204190'>And</span> <span m='204518'>then</span> <span m='204847'>we</span>
  <span m='205176'>obtain</span> <span m='205505'>10</span> <span
  m='205834'>foods</span> <span m='206163'>with</span> <span
  m='206492'>sodium</span> <span m='206821'>levels</span> <span
  m='207150'>above</span> <span m='207926'>10,000</span> <span
  m='208703'>milligrams.</span> </p><p><span m='209480'>Since</span> <span
  m='209750'>there</span> <span m='210021'>are</span> <span
  m='210292'>not</span> <span m='210563'>many,</span> <span m='210833'>we</span>
  <span m='211104'>can</span> <span m='211375'>output</span> <span
  m='211646'>the</span> <span m='211916'>names</span> <span m='212187'>of</span>
  <span m='212458'>these</span> <span m='212729'>foods</span> <span
  m='213000'>by</span> <span m='213475'>looking</span> <span
  m='213950'>at</span> <span m='214425'>their</span> <span
  m='214900'>Description</span> <span m='215375'>vector.</span> </p><p><span
  m='215850'>But</span> <span m='216176'>this</span> <span
  m='216503'>time,</span> <span m='216830'>the</span> <span
  m='217156'>Description</span> <span m='217483'>vector</span> <span
  m='217810'>is</span> <span m='218222'>not</span> <span
  m='218635'>associated</span> <span m='219047'>with</span> <span
  m='219460'>the</span> <span m='219872'>USDA</span> <span
  m='220285'>data</span> <span m='220697'>frame</span> <span
  m='221110'>but</span> <span m='221651'>with</span> <span m='222193'>the</span>
  <span m='222735'>HighSodium</span> <span m='223276'>data</span> <span
  m='223818'>frame.</span> </p><p><span m='224360'>So</span> <span
  m='225300'>HighSodium$Description,</span> <span m='226240'>and</span> <span
  m='227180'>now</span> <span m='228120'>pressing</span> <span
  m='229060'>Enter,</span> <span m='230000'>we</span> <span
  m='230327'>obtain</span> <span m='230655'>the</span> <span
  m='230982'>names</span> <span m='231310'>of</span> <span
  m='231637'>these</span> <span m='231965'>10</span> <span
  m='232292'>foods.</span> </p><p><span m='232620'>So</span> <span
  m='232916'>definitely</span> <span m='233212'>table</span> <span
  m='233508'>salt</span> <span m='233805'>is</span> <span m='234101'>one</span>
  <span m='234397'>of</span> <span m='234693'>them.</span> </p><p><span
  m='234990'>We</span> <span m='235562'>also</span> <span m='236134'>have</span>
  <span m='236706'>dry</span> <span m='237278'>soup,</span> <span
  m='237851'>gravy,</span> <span m='238423'>some</span> <span
  m='238995'>leavening</span> <span m='239567'>agents,</span> <span
  m='240140'>but</span> <span m='240476'>I</span> <span
  m='240812'>thought</span> <span m='241148'>caviar</span> <span
  m='241484'>is</span> <span m='241820'>well</span> <span
  m='242156'>known</span> <span m='242493'>to</span> <span m='242829'>be</span>
  <span m='243165'>among</span> <span m='243501'>the</span> <span
  m='243837'>top</span> <span m='244173'>10</span> <span m='244510'>foods</span>
  <span m='244910'>with</span> <span m='245310'>highest</span> <span
  m='245710'>levels</span> <span m='246110'>of</span> <span
  m='246510'>sodium.</span> </p><p><span m='246910'>But</span> <span
  m='247302'>it</span> <span m='247695'>doesn't</span> <span
  m='248088'>appear</span> <span m='248481'>in</span> <span
  m='248874'>this</span> <span m='249267'>list.</span> </p><p><span
  m='249660'>Let's</span> <span m='250033'>find</span> <span
  m='250406'>how</span> <span m='250779'>much</span> <span
  m='251152'>sodium</span> <span m='251525'>it</span> <span
  m='251898'>has</span> <span m='252271'>in</span> <span m='252644'>100</span>
  <span m='253017'>grams.</span> </p><p><span m='253390'>Now,</span> <span
  m='253720'>obviously,</span> <span m='254050'>this</span> <span
  m='254380'>task</span> <span m='254710'>would</span> <span
  m='255040'>have</span> <span m='255370'>been</span> <span
  m='255700'>very</span> <span m='256030'>easy</span> <span m='256360'>if</span>
  <span m='256624'>we</span> <span m='256888'>knew</span> <span
  m='257153'>the</span> <span m='257417'>index</span> <span m='257682'>of</span>
  <span m='257946'>caviar</span> <span m='258211'>in</span> <span
  m='258475'>our</span> <span m='258740'>data</span> <span
  m='259004'>set,</span> <span m='259269'>and</span> <span m='259691'>we</span>
  <span m='260113'>simply</span> <span m='260536'>feed</span> <span
  m='260958'>it</span> <span m='261380'>into</span> <span m='261803'>the</span>
  <span m='262225'>vector</span> <span m='262647'>Sodium.</span> </p><p><span
  m='263070'>However,</span> <span m='263374'>we</span> <span
  m='263678'>need</span> <span m='263983'>to</span> <span m='264287'>get</span>
  <span m='264592'>the</span> <span m='264896'>index</span> <span
  m='265201'>of</span> <span m='265505'>caviar,</span> <span
  m='265810'>and</span> <span m='266082'>to</span> <span m='266354'>do</span>
  <span m='266626'>this,</span> <span m='266898'>we</span> <span
  m='267171'>need</span> <span m='267443'>to</span> <span
  m='267715'>track</span> <span m='267987'>down</span> <span
  m='268260'>the</span> <span m='268738'>word</span> <span
  m='269217'>caviar</span> <span m='269695'>in</span> <span
  m='270174'>the</span> <span m='270652'>text</span> <span
  m='271131'>description.</span> </p><p><span m='271610'>To</span> <span
  m='271910'>do</span> <span m='272210'>this,</span> <span m='272510'>we</span>
  <span m='272810'>can</span> <span m='273110'>use</span> <span
  m='273410'>the</span> <span m='273710'>match</span> <span
  m='274010'>function</span> <span m='274310'>and</span> <span
  m='274785'>ask</span> <span m='275261'>R</span> <span m='275737'>to</span>
  <span m='276213'>dig</span> <span m='276689'>the</span> <span
  m='277165'>word</span> <span m='277640'>caviar</span> <span
  m='278116'>in</span> <span m='278592'>the</span> <span
  m='279068'>description</span> <span m='279544'>vector.</span> </p><p><span
  m='280020'>So</span> <span m='280440'>USDA$Description.</span> </p><p><span
  m='283670'>And</span> <span m='284043'>now</span> <span
  m='284416'>pressing</span> <span m='284790'>Enter,</span> <span
  m='285163'>we</span> <span m='285536'>obtain</span> <span
  m='285910'>that</span> <span m='286283'>caviar</span> <span
  m='286656'>is</span> <span m='287030'>the</span> <span
  m='287648'>4,154th</span> <span m='288267'>food</span> <span
  m='288885'>in</span> <span m='289504'>our</span> <span m='290122'>data</span>
  <span m='290741'>set.</span> </p><p><span m='291360'>So</span> <span
  m='291704'>now</span> <span m='292049'>finding</span> <span
  m='292393'>the</span> <span m='292738'>sodium</span> <span
  m='293083'>level</span> <span m='293427'>of</span> <span
  m='293772'>caviar</span> <span m='294116'>is</span> <span m='294461'>a</span>
  <span m='294806'>piece</span> <span m='295150'>of</span> <span
  m='295495'>cake.</span> </p><p><span m='295840'>We</span> <span
  m='296384'>just</span> <span m='296928'>type</span> <span
  m='297472'>USDA$Sodium</span> <span m='298016'>and,</span> <span
  m='298560'>using</span> <span m='299104'>the</span> <span
  m='299648'>square</span> <span m='300192'>brackets</span> <span
  m='300736'>with</span> <span m='301280'>the</span> <span
  m='301752'>index</span> <span m='302225'>4,154,</span> <span
  m='302697'>ask</span> <span m='303170'>R</span> <span m='303642'>to</span>
  <span m='304115'>pick</span> <span m='304587'>the</span> <span
  m='305060'>sodium</span> <span m='305532'>level</span> <span
  m='306005'>of</span> <span m='306477'>caviar</span> <span
  m='306950'>for</span> <span m='307200'>us.</span> </p><p><span
  m='307450'>And</span> <span m='308204'>this</span> <span m='308958'>is</span>
  <span m='309712'>1,500</span> <span m='310466'>milligrams.</span> </p><p><span
  m='311220'>Now,</span> <span m='311520'>to</span> <span m='311821'>find</span>
  <span m='312122'>a</span> <span m='312423'>level</span> <span
  m='312723'>of</span> <span m='313024'>sodium</span> <span m='313325'>in</span>
  <span m='313626'>caviar,</span> <span m='313926'>we</span> <span
  m='314227'>used</span> <span m='314528'>two</span> <span
  m='314829'>steps,</span> <span m='315130'>but</span> <span
  m='315431'>we</span> <span m='315733'>can</span> <span
  m='316035'>actually</span> <span m='316337'>lump</span> <span
  m='316639'>them</span> <span m='316940'>all</span> <span m='317242'>in</span>
  <span m='317544'>one</span> <span m='317846'>single</span> <span
  m='318148'>step.</span> </p><p><span m='318450'>So</span> <span
  m='318720'>let's</span> <span m='318990'>use</span> <span
  m='319260'>the</span> <span m='319530'>Up</span> <span m='319800'>Arrow</span>
  <span m='320070'>twice</span> <span m='320340'>to</span> <span
  m='320610'>go</span> <span m='320880'>back</span> <span m='321150'>to</span>
  <span m='321430'>the</span> <span m='321711'>match</span> <span
  m='321992'>function,</span> <span m='322273'>and</span> <span
  m='322554'>we</span> <span m='322835'>know</span> <span m='323116'>that</span>
  <span m='323397'>this</span> <span m='323678'>match</span> <span
  m='323959'>function</span> <span m='324240'>gives</span> <span
  m='324494'>us</span> <span m='324748'>an</span> <span m='325002'>index</span>
  <span m='325256'>that</span> <span m='325510'>then</span> <span
  m='325765'>should</span> <span m='326019'>be</span> <span
  m='326273'>fed</span> <span m='326527'>into</span> <span m='326781'>the</span>
  <span m='327035'>Sodium</span> <span m='327290'>vector</span> <span
  m='327720'>using</span> <span m='328150'>square</span> <span
  m='328580'>brackets.</span> </p><p><span m='329010'>So</span> <span
  m='329464'>let's</span> <span m='329918'>enclose</span> <span
  m='330372'>it</span> <span m='330827'>in</span> <span m='331281'>square</span>
  <span m='331735'>brackets,</span> <span m='332190'>and</span> <span
  m='332451'>then</span> <span m='332712'>at</span> <span m='332973'>the</span>
  <span m='333234'>beginning</span> <span m='333495'>we're</span> <span
  m='333756'>going</span> <span m='334017'>to</span> <span
  m='334278'>just</span> <span m='334539'>write</span> <span
  m='334800'>USDA$Sodium.</span> </p><p><span m='337530'>And,</span> <span
  m='337760'>again,</span> <span m='337990'>of</span> <span
  m='338220'>course,</span> <span m='338450'>this</span> <span
  m='338680'>gives</span> <span m='338910'>us</span> <span
  m='339140'>1,500</span> <span m='339800'>milligrams</span> <span
  m='340460'>of</span> <span m='341120'>sodium</span> <span m='341780'>in</span>
  <span m='342440'>100</span> <span m='343100'>grams</span> <span
  m='343760'>of</span> <span m='344420'>caviar.</span> </p><p><span
  m='345080'>Now,</span> <span m='345570'>the</span> <span
  m='346060'>value</span> <span m='346550'>1,500</span> <span
  m='347040'>milligrams</span> <span m='347530'>seems</span> <span
  m='348020'>to</span> <span m='348475'>be</span> <span m='348930'>very</span>
  <span m='349385'>small</span> <span m='349840'>compared</span> <span
  m='350295'>to</span> <span m='350750'>10,000</span> <span
  m='351205'>milligrams</span> <span m='351660'>or</span> <span
  m='352115'>38,000</span> <span m='352570'>milligrams,</span> <span
  m='352871'>which</span> <span m='353173'>are</span> <span
  m='353475'>the</span> <span m='353777'>values</span> <span
  m='354079'>that</span> <span m='354380'>we</span> <span
  m='354682'>worked</span> <span m='354984'>with</span> <span
  m='355286'>so</span> <span m='355588'>far</span> <span m='355890'>with</span>
  <span m='356426'>respect</span> <span m='356962'>to</span> <span
  m='357498'>sodium</span> <span m='358034'>levels.</span> </p><p><span
  m='358570'>But</span> <span m='358915'>this</span> <span
  m='359261'>doesn't</span> <span m='359606'>seem</span> <span
  m='359952'>to</span> <span m='360297'>be</span> <span m='360643'>a</span>
  <span m='360988'>fair</span> <span m='361334'>comparison.</span> </p><p><span
  m='361680'>Maybe</span> <span m='361945'>the</span> <span
  m='362211'>best</span> <span m='362477'>way</span> <span m='362743'>to</span>
  <span m='363009'>figure</span> <span m='363275'>out</span> <span
  m='363540'>how</span> <span m='363806'>big</span> <span m='364072'>this</span>
  <span m='364338'>value</span> <span m='364604'>is,</span> <span
  m='364870'>is</span> <span m='365176'>by</span> <span
  m='365482'>comparing</span> <span m='365789'>it</span> <span
  m='366095'>to</span> <span m='366401'>the</span> <span m='366708'>mean</span>
  <span m='367014'>and</span> <span m='367320'>the</span> <span
  m='367627'>standard</span> <span m='367933'>deviation</span> <span
  m='368240'>of</span> <span m='368665'>the</span> <span
  m='369090'>sodium</span> <span m='369515'>levels</span> <span
  m='369940'>across</span> <span m='370365'>the</span> <span
  m='370790'>data</span> <span m='371215'>set.</span> </p><p><span
  m='371640'>To</span> <span m='371883'>find</span> <span m='372126'>the</span>
  <span m='372370'>mean,</span> <span m='372613'>we</span> <span
  m='372856'>know</span> <span m='373100'>that</span> <span
  m='373343'>this</span> <span m='373586'>information</span> <span
  m='373830'>is</span> <span m='374182'>given</span> <span m='374535'>to</span>
  <span m='374887'>us</span> <span m='375240'>using</span> <span
  m='375592'>the</span> <span m='375945'>summary</span> <span
  m='376297'>function.</span> </p><p><span m='376650'>So</span> <span
  m='376957'>let's</span> <span m='377265'>use</span> <span
  m='377573'>the</span> <span m='377881'>summary</span> <span
  m='378188'>function,</span> <span m='378496'>and</span> <span
  m='378804'>this</span> <span m='379112'>time,</span> <span
  m='379420'>give</span> <span m='379751'>it</span> <span m='380082'>the</span>
  <span m='380414'>input</span> <span m='380745'>the</span> <span
  m='381077'>Sodium</span> <span m='381408'>vector</span> <span
  m='381740'>instead</span> <span m='382215'>of</span> <span
  m='382691'>the</span> <span m='383167'>whole</span> <span
  m='383642'>USDA</span> <span m='384118'>data</span> <span
  m='384594'>frame.</span> </p><p><span m='385070'>And</span> <span
  m='385601'>we</span> <span m='386133'>can</span> <span m='386665'>see</span>
  <span m='387196'>that</span> <span m='387728'>the</span> <span
  m='388260'>mean</span> <span m='388791'>sodium</span> <span
  m='389323'>value</span> <span m='389855'>is</span> <span m='390386'>322</span>
  <span m='390918'>milligrams.</span> </p><p><span m='391450'>However,</span>
  <span m='391760'>the</span> <span m='392070'>summary</span> <span
  m='392380'>function</span> <span m='392690'>does</span> <span
  m='393000'>not</span> <span m='393310'>give</span> <span m='393768'>us</span>
  <span m='394226'>standard</span> <span m='394684'>deviation</span> <span
  m='395142'>information,</span> <span m='395600'>but</span> <span
  m='395896'>we</span> <span m='396192'>can</span> <span m='396488'>do</span>
  <span m='396784'>this</span> <span m='397080'>using</span> <span
  m='397376'>the</span> <span m='397672'>function</span> <span
  m='397968'>sd,</span> <span m='398264'>which</span> <span
  m='398560'>stands</span> <span m='399057'>for</span> <span
  m='399555'>standard</span> <span m='400052'>deviation.</span> </p><p><span
  m='400550'>Give</span> <span m='401053'>it</span> <span m='401557'>as</span>
  <span m='402061'>an</span> <span m='402565'>input</span> <span
  m='403068'>the</span> <span m='403572'>Sodium</span> <span
  m='404076'>vector,</span> <span m='404580'>and,</span> <span
  m='405526'>oh,</span> <span m='406472'>we</span> <span
  m='407418'>obtain</span> <span m='408364'>non-available.</span> </p><p><span
  m='409310'>Well</span> <span m='409602'>we</span> <span m='409894'>got</span>
  <span m='410186'>NA</span> <span m='410478'>because</span> <span
  m='410771'>we</span> <span m='411063'>forgot</span> <span m='411355'>to</span>
  <span m='411647'>remove</span> <span m='411940'>the</span> <span
  m='412396'>non-available</span> <span m='412852'>entries</span> <span
  m='413308'>before</span> <span m='413764'>computing</span> <span
  m='414220'>our</span> <span m='414620'>statistical</span> <span
  m='415020'>measure.</span> </p><p><span m='415420'>So</span> <span
  m='415715'>let's</span> <span m='416010'>use</span> <span
  m='416306'>the</span> <span m='416601'>Up</span> <span m='416896'>Arrow</span>
  <span m='417192'>to</span> <span m='417487'>go</span> <span
  m='417783'>back</span> <span m='418078'>to</span> <span m='418373'>the</span>
  <span m='418669'>standard</span> <span m='418964'>deviation</span> <span
  m='419260'>function,</span> <span m='419610'>and</span> <span
  m='419961'>now</span> <span m='420312'>we</span> <span m='420663'>have</span>
  <span m='421014'>to</span> <span m='421365'>explicitly</span> <span
  m='421716'>tell</span> <span m='422067'>R</span> <span m='422418'>to</span>
  <span m='422769'>remove</span> <span m='423120'>these</span> <span
  m='423571'>non-available</span> <span m='424023'>entries</span> <span
  m='424475'>by</span> <span m='424926'>typing</span> <span
  m='425378'>na.rm=TRUE.</span> </p><p><span m='429480'>And</span> <span
  m='430025'>now</span> <span m='430570'>the</span> <span
  m='431115'>standard</span> <span m='431660'>deviation</span> <span
  m='432205'>is</span> <span m='432750'>1,045</span> <span
  m='433295'>milligrams.</span> </p><p><span m='433840'>Note</span> <span
  m='434220'>that,</span> <span m='434600'>if</span> <span m='434980'>we</span>
  <span m='435360'>sum</span> <span m='435740'>the</span> <span
  m='436120'>mean</span> <span m='436500'>and</span> <span m='436880'>the</span>
  <span m='437260'>standard</span> <span m='437640'>deviation,</span> <span
  m='438020'>we</span> <span m='438520'>obtain</span> <span
  m='439020'>around</span> <span m='439520'>1,400</span> <span
  m='440020'>milligrams,</span> <span m='440520'>which</span> <span
  m='441020'>is</span> <span m='441411'>still</span> <span
  m='441802'>smaller</span> <span m='442193'>than</span> <span
  m='442585'>the</span> <span m='442976'>amount</span> <span
  m='443367'>of</span> <span m='443758'>sodium</span> <span m='444150'>in</span>
  <span m='444594'>100</span> <span m='445038'>grams</span> <span
  m='445482'>of</span> <span m='445926'>caviar.</span> </p><p><span
  m='446370'>Well,</span> <span m='446744'>this</span> <span
  m='447118'>means</span> <span m='447492'>that</span> <span
  m='447866'>caviar</span> <span m='448240'>is</span> <span
  m='448614'>pretty</span> <span m='448988'>rich</span> <span
  m='449362'>in</span> <span m='449736'>sodium</span> <span
  m='450110'>compared</span> <span m='450446'>to</span> <span
  m='450782'>most</span> <span m='451118'>of</span> <span m='451454'>the</span>
  <span m='451790'>foods</span> <span m='452126'>in</span> <span
  m='452462'>our</span> <span m='452798'>data</span> <span
  m='453134'>set.</span> </p><p><span m='453470'>Now</span> <span
  m='453746'>that</span> <span m='454022'>we</span> <span m='454298'>know</span>
  <span m='454574'>how</span> <span m='454850'>to</span> <span
  m='455126'>do</span> <span m='455403'>a</span> <span m='455679'>basic</span>
  <span m='455955'>analysis</span> <span m='456231'>of</span> <span
  m='456507'>our</span> <span m='456783'>data,</span> <span
  m='457060'>let's</span> <span m='457355'>look</span> <span
  m='457650'>at</span> <span m='457945'>the</span> <span
  m='458240'>plotting</span> <span m='458535'>functionality</span> <span
  m='458830'>in</span> <span m='459125'>R</span> <span m='459420'>in</span>
  <span m='460020'>our</span> <span m='460620'>next</span> <span
  m='461220'>video.</span> </p>
embedded_media:
  - uid: d1d880156c9461c6b0559e69f1b262c7
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: jXu7NEuZED4
  - uid: 709c8b1dbbeed446afed56606443a82e
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: jXu7NEuZED4
  - uid: b8a3dc35ba6fb33d8c906af6306ca804
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/jXu7NEuZED4/default.jpg'
  - uid: 650d566aa3d175607a55586130bfe56e
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: SBWns1XNcuY.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/understanding-food-nutritional-education-with-data-recitation/video-3-data-analysis/video-3-data-analysis-0/SBWns1XNcuY.srt
  - uid: 6d9663d897fe565eab3ef1e85ecaad2b
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: SBWns1XNcuY.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/understanding-food-nutritional-education-with-data-recitation/video-3-data-analysis/video-3-data-analysis-0/SBWns1XNcuY.pdf
  - uid: 4a1ad22bdf495afee3f96a7eb8703d50
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 36e2f4f52f104bffee70c012cd918d04
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 3b51887c2aa0128e8547ed315a1aa5da
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_1.4.04_300k.mp4
  - uid: 0f58e2212f002943ded0b76aba62d74f
    parent_uid: 7b76c708288483f1384a424fbad747de
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/jXu7NEuZED4/default.jpg'
type: courses
layout: video
---
