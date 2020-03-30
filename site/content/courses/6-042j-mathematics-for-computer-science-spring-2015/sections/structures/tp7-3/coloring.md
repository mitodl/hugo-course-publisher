---
title: Coloring
uid: b3bab57cee4f74f78a2a15795b01912c
parent_uid: 109f4d41cb88fdaade16336e6c117167
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/coloring
short_url: coloring
inline_embed_id: 36020095coloring184700
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1500'>PROFESSOR: Graph</span> <span m='1820'>coloring</span> <span
  m='2600'>is</span> <span m='2860'>the</span> <span m='2990'>abstract</span>
  <span m='3400'>version</span> <span m='3700'>of</span> <span m='3790'>a</span>
  <span m='3860'>problem</span> <span m='4300'>that</span> <span
  m='4410'>arises</span> <span m='5010'>from</span> <span m='5230'>a</span>
  <span m='5280'>bunch</span> <span m='5640'>of</span> <span
  m='6470'>conflict</span> <span m='6930'>scheduling</span> <span
  m='7510'>situations.</span> <span m='8330'>So</span> <span
  m='8500'>let's</span> <span m='8700'>look</span> <span m='8880'>at</span>
  <span m='8920'>an</span> <span m='9030'>example</span> <span
  m='9490'>first</span> <span m='9850'>and</span> <span m='10370'>then</span>
  <span m='10530'>define</span> <span m='10890'>the</span> <span
  m='10980'>problem.</span> <span m='12720'>So</span> <span
  m='13250'>let's</span> <span m='13440'>think</span> <span
  m='13580'>about</span> <span m='13820'>a</span> <span m='13860'>bunch</span>
  <span m='14140'>of</span> <span m='14430'>aircraft</span> <span
  m='14760'>that</span> <span m='15090'>have</span> <span m='15320'>to</span>
  <span m='15430'>be</span> <span m='16219'>scheduled</span> <span
  m='17090'>on</span> <span m='17290'>the</span> <span m='17360'>ground</span>
  <span m='18410'>at</span> <span m='18550'>jet</span> <span
  m='18810'>ports</span> <span m='19090'>or</span> <span m='19180'>gates.</span>
  </p><p><span m='20360'>Now,</span> <span m='20520'>if two</span> <span
  m='20730'>flights</span> <span m='21070'>are</span> <span m='21160'>on</span>
  <span m='21310'>the</span> <span m='21540'>ground</span> <span m='21840'>at
  the</span> <span m='21920'>same</span> <span m='22190'>time,</span> <span
  m='22940'>they</span> <span m='23560'>need</span> <span m='23790'>to</span>
  <span m='23860'>be</span> <span m='23990'>assigned</span> <span
  m='24350'>to</span> <span m='24430'>different</span> <span
  m='24760'>gates</span> <span m='25070'>since</span> <span m='25300'>a
  gate</span> <span m='25430'>serves</span> <span m='25730'>one</span> <span
  m='26180'>airplane.</span> <span m='27370'>And</span> <span
  m='27670'>what</span> <span m='27860'>we'd</span> <span m='27990'>like</span>
  <span m='28230'>to</span> <span m='28350'>do</span> <span m='28720'>is</span>
  <span m='28980'>try</span> <span m='29230'>to</span> <span
  m='29540'>figure</span> <span m='29890'>out</span> <span m='30250'>how</span>
  <span m='30490'>many</span> <span m='31310'>different</span> <span
  m='31640'>gates</span> <span m='32000'>do</span> <span m='32090'>we</span>
  <span m='32180'>need</span> <span m='32490'>to</span> <span
  m='32560'>be</span> <span m='32710'>able</span> <span m='32960'>to</span>
  <span m='33050'>service</span> <span m='33460'>all</span> <span
  m='33690'>the</span> <span m='33790'>planes</span> <span m='34290'>that</span>
  <span m='34450'>might</span> <span m='34680'>be</span> <span
  m='34830'>on</span> <span m='34960'>the</span> <span m='35030'>ground.</span>
  <span m='36630'>How</span> <span m='36770'>many</span> <span
  m='36950'>gates</span> <span m='37230'>are</span> <span
  m='37280'>needed?</span> </p><p><span m='38010'>So</span> <span
  m='38040'>let's</span> <span m='38230'>look</span> <span m='38410'>at</span>
  <span m='38490'>a</span> <span m='38840'>sample</span> <span
  m='39400'>schedule.</span> <span m='39960'>There</span> <span
  m='40130'>are</span> <span m='40210'>six</span> <span m='40530'>slides</span>
  <span m='40920'>here</span> <span m='41110'>numbered</span> <span
  m='41460'>122,</span> <span m='42040'>145,</span> <span
  m='42360'>through</span> <span m='42790'>99.</span> <span m='43760'>And</span>
  <span m='44280'>the</span> <span m='44690'>horizontal</span> <span
  m='45560'>bar</span> <span m='46270'>is,</span> <span m='47700'>say,</span>
  <span m='47920'>times</span> <span m='48460'>during</span> <span
  m='48660'>the</span> <span m='48750'>day.</span> </p><p><span
  m='49540'>And</span> <span m='50010'>this</span> <span m='50390'>blue</span>
  <span m='50580'>block</span> <span m='50930'>indicates</span> <span
  m='51510'>that</span> <span m='51730'>flight</span> <span m='52030'>122</span>
  <span m='52690'>is</span> <span m='52810'>on</span> <span m='52960'>the</span>
  <span m='53030'>ground</span> <span m='53410'>from,</span> <span
  m='53620'>let's</span> <span m='53930'>say,</span> <span m='54660'>3:00</span>
  <span m='55050'>AM</span> <span m='55620'>to</span> <span
  m='56550'>7:00</span> <span m='56920'>AM,</span> <span m='57490'>and</span>
  <span m='57850'>flight</span> <span m='58243'>145</span> <span
  m='59030'>is</span> <span m='59580'>on</span> <span m='59810'>the</span> <span
  m='59900'>ground</span> <span m='60280'>at</span> <span m='60370'>a</span>
  <span m='60430'>completely</span> <span m='61210'>disjoint</span> <span
  m='61680'>time</span> <span m='61950'>interval.</span> <span m='62800'>So
  is</span> <span m='62950'>67.</span> <span m='64069'>257</span> <span
  m='64879'>is</span> <span m='65010'>on</span> <span m='65129'>the</span> <span
  m='65209'>ground</span> <span m='65519'>from</span> <span
  m='65670'>midnight</span> <span m='66070'>until</span> <span
  m='66330'>about</span> <span m='67120'>6:00</span> <span m='67440'>AM.</span>
  <span m='67630'>It</span> <span m='67930'>does</span> <span
  m='68150'>overlap</span> <span m='68590'>with</span> <span
  m='68710'>122,</span> <span m='69310'>and</span> <span m='69410'>so</span>
  <span m='69580'>on.</span> </p><p><span m='70220'>So</span> <span
  m='71020'>this</span> <span m='71240'>is</span> <span m='71330'>the</span>
  <span m='71430'>information</span> <span m='71990'>we</span> <span
  m='72140'>have.</span> <span m='72810'>And</span> <span m='73570'>what</span>
  <span m='73770'>we're</span> <span m='73850'>trying</span> <span
  m='74030'>to</span> <span m='74090'>figure</span> <span m='74450'>out</span>
  <span m='74670'>is</span> <span m='75700'>how</span> <span
  m='75870'>many</span> <span m='76070'>gates</span> <span m='76380'>do</span>
  <span m='76460'>we</span> <span m='76570'>need.</span> <span
  m='77220'>Well,</span> <span m='77670'>it's</span> <span m='77900'>easy</span>
  <span m='78140'>to</span> <span m='78220'>see</span> <span
  m='78500'>here</span> <span m='78970'>that</span> <span m='79730'>the</span>
  <span m='79830'>worst</span> <span m='80220'>case,</span> <span
  m='80720'>if</span> <span m='80830'>you</span> <span m='80940'>just</span>
  <span m='81740'>think</span> <span m='82220'>of</span> <span
  m='82360'>this</span> <span m='83040'>vertical</span> <span
  m='83490'>green</span> <span m='83760'>line</span> <span
  m='84120'>sliding</span> <span m='84740'>across</span> <span
  m='85170'>the</span> <span m='85240'>bar,</span> <span m='86040'>and</span>
  <span m='86300'>you</span> <span m='86400'>look</span> <span
  m='86600'>at</span> <span m='86730'>the</span> <span m='86810'>maximum</span>
  <span m='87460'>number</span> <span m='88360'>of</span> <span
  m='88660'>blue</span> <span m='88910'>intervals</span> <span
  m='89700'>that</span> <span m='90130'>the</span> <span m='90250'>green</span>
  <span m='90510'>line</span> <span m='90800'>ever</span> <span
  m='91040'>crosses,</span> <span m='91560'>it's</span> <span
  m='91890'>three.</span> <span m='92990'>The</span> <span
  m='93140'>largest</span> <span m='93690'>number</span> <span
  m='94130'>of</span> <span m='94280'>planes</span> <span m='94780'>that</span>
  <span m='94880'>are</span> <span m='94990'>on</span> <span
  m='95160'>the</span> <span m='95260'>gate</span> <span m='95530'>at</span>
  <span m='95640'>any</span> <span m='95830'>given</span> <span
  m='96570'>moment</span> <span m='97050'>is</span> <span
  m='97340'>three,</span> <span m='97860'>which</span> <span
  m='98060'>means</span> <span m='98360'>we</span> <span m='98500'>can</span>
  <span m='98650'>get</span> <span m='98860'>by</span> <span
  m='99020'>with</span> <span m='99190'>three</span> <span
  m='99450'>gates.</span> </p><p><span m='100600'>So</span> <span
  m='100790'>we</span> <span m='100870'>have</span> <span m='101070'>to</span>
  <span m='101170'>cope</span> <span m='101460'>with</span> <span
  m='101540'>that</span> <span m='101780'>conflict.</span> <span
  m='102660'>So</span> <span m='102810'>abstractly,</span> <span
  m='103470'>what</span> <span m='103650'>we're</span> <span
  m='103750'>going</span> <span m='103870'>to</span> <span m='103940'>do</span>
  <span m='104170'>is</span> <span m='104300'>assign</span> <span
  m='105530'>each</span> <span m='106170'>aircraft</span> <span
  m='106720'>to</span> <span m='106800'>be</span> <span m='106980'>a</span>
  <span m='107010'>vertex</span> <span m='107480'>of</span> <span
  m='107560'>a</span> <span m='107600'>graph.</span> <span m='108830'>And</span>
  <span m='109560'>we're</span> <span m='109760'>going</span> <span
  m='109900'>to</span> <span m='109960'>put</span> <span m='110180'>an</span>
  <span m='110320'>edge</span> <span m='110670'>in</span> <span
  m='110990'>to</span> <span m='111080'>indicate</span> <span
  m='111800'>not</span> <span m='112030'>compatibility,</span> <span
  m='113010'>but</span> <span m='113330'>conflict.</span> <span
  m='114730'>Compatibility</span> <span m='115450'>was</span> <span
  m='115590'>what</span> <span m='115730'>we</span> <span m='115830'>were</span>
  <span m='115920'>looking</span> <span m='116250'>at</span> <span
  m='116400'>previously</span> <span m='116990'>with</span> <span
  m='117160'>our</span> <span m='117320'>examples</span> <span
  m='118120'>of</span> <span m='118420'>matching.</span> <span
  m='119380'>Now</span> <span m='120160'>this</span> <span
  m='120430'>line</span> <span m='120720'>means</span> <span
  m='120990'>that</span> <span m='121080'>306</span> <span m='121890'>and</span>
  <span m='122090'>145</span> <span m='122545'>are</span> <span
  m='123000'>on</span> <span m='123240'>the</span> <span
  m='123330'>ground</span> <span m='123800'>at</span> <span
  m='123900'>the</span> <span m='123980'>same</span> <span
  m='124290'>time.</span> <span m='124990'>They</span> <span
  m='125110'>conflict.</span> <span m='125980'>They</span> <span
  m='126690'>need</span> <span m='127120'>the</span> <span
  m='127200'>same</span> <span m='127560'>gate,</span> <span
  m='127900'>and</span> <span m='128039'>we</span> <span m='128190'>have</span>
  <span m='128400'>to</span> <span m='128520'>serve</span> <span
  m='128860'>them</span> <span m='128990'>with</span> <span
  m='129169'>different</span> <span m='129550'>gates.</span> </p><p><span
  m='130229'>And</span> <span m='130460'>likewise,</span> <span m='131400'>99
  and</span> <span m='131900'>145</span> <span m='132600'>are</span> <span
  m='132640'>on</span> <span m='132730'>the</span> <span
  m='132820'>ground.</span> <span m='133260'>306</span> <span
  m='133810'>and</span> <span m='133890'>99.</span> <span m='134350'>And
  this</span> <span m='134520'>was</span> <span m='135220'>the</span> <span
  m='135650'>three</span> <span m='136060'>flights</span> <span
  m='136570'>that</span> <span m='136780'>were on</span> <span
  m='136870'>the</span> <span m='136950'>ground</span> <span m='137300'>at
  the</span> <span m='137380'>same</span> <span m='137680'>time.</span> <span
  m='138460'>And</span> <span m='138780'>then</span> <span m='138920'>if</span>
  <span m='139070'>I</span> <span m='139160'>fill</span> <span
  m='139470'>in</span> <span m='139950'>the</span> <span m='140100'>graph</span>
  <span m='140430'>with</span> <span m='140570'>all</span> <span
  m='140710'>the</span> <span m='140850'>other</span> <span
  m='141080'>vertices</span> <span m='141730'>and</span> <span
  m='141970'>draw</span> <span m='142190'>an</span> <span m='142400'>edge</span>
  <span m='142700'>when</span> <span m='142960'>two</span> <span
  m='143610'>flights</span> <span m='144010'>are</span> <span
  m='144090'>on</span> <span m='144230'>the</span> <span
  m='144300'>ground</span> <span m='144540'>at</span> <span
  m='144630'>the</span> <span m='144710'>same</span> <span
  m='144990'>time,</span> <span m='145230'>I</span> <span m='145280'>wind</span>
  <span m='145590'>up</span> <span m='145730'>with</span> <span
  m='145850'>this</span> <span m='146040'>little</span> <span
  m='146230'>graph.</span> </p><p><span m='147360'>OK,</span> <span
  m='148100'>now</span> <span m='148300'>we</span> <span m='148440'>can</span>
  <span m='148590'>talk</span> <span m='148840'>abstractly</span> <span
  m='149620'>about</span> <span m='149880'>the</span> <span
  m='149940'>coloring</span> <span m='150360'>problem,</span> <span
  m='151210'>which</span> <span m='151530'>is</span> <span
  m='151910'>let's</span> <span m='152210'>assign</span> <span
  m='152680'>colors</span> <span m='153280'>to</span> <span
  m='153410'>the</span> <span m='153510'>vertices</span> <span
  m='154460'>in</span> <span m='154660'>such</span> <span m='154930'>a</span>
  <span m='155020'>way</span> <span m='155740'>that</span> <span
  m='156750'>no</span> <span m='157260'>two</span> <span
  m='158100'>adjacent</span> <span m='158630'>vertices</span> <span
  m='159110'>have</span> <span m='159280'>the</span> <span
  m='159350'>same</span> <span m='159630'>color.</span> <span
  m='162070'>Adjacent</span> <span m='162560'>vertices</span> <span
  m='163020'>should</span> <span m='163180'>have</span> <span
  m='163430'>different</span> <span m='163970'>colors.</span> <span
  m='164940'>And</span> <span m='165580'>it</span> <span
  m='165780'>should</span> <span m='165990'>be</span> <span
  m='166130'>clear</span> <span m='166510'>from</span> <span
  m='166780'>the</span> <span m='166910'>description</span> <span
  m='167490'>of</span> <span m='167720'>how</span> <span m='167890'>we</span>
  <span m='168030'>derive</span> <span m='168570'>this</span> <span
  m='169180'>graph</span> <span m='169730'>from</span> <span
  m='170020'>the</span> <span m='171700'>aircraft</span> <span
  m='172010'>schedules</span> <span m='172980'>that</span> <span
  m='173350'>the</span> <span m='173480'>minimum</span> <span
  m='174000'>number</span> <span m='174380'>of</span> <span
  m='174510'>distinct</span> <span m='174970'>colors</span> <span
  m='175940'>needed</span> <span m='176490'>to</span> <span
  m='176870'>color</span> <span m='177650'>the</span> <span
  m='177740'>graph</span> <span m='178380'>corresponds</span> <span
  m='179020'>to</span> <span m='179130'>the</span> <span
  m='179230'>minimum</span> <span m='179660'>number</span> <span
  m='179980'>of</span> <span m='180100'>gates</span> <span
  m='180430'>needed</span> <span m='181280'>to</span> <span
  m='181960'>serve</span> <span m='182220'>the</span> <span
  m='182370'>aircraft.</span> </p><p><span m='183440'>So</span> <span
  m='183520'>let's</span> <span m='183750'>try</span> <span
  m='183940'>coloring</span> <span m='184410'>this</span> <span
  m='184610'>graph.</span> <span m='184910'>I'll</span> <span
  m='185020'>start</span> <span m='185380'>with</span> <span
  m='185530'>coloring</span> <span m='186050'>257</span> <span
  m='186880'>red,</span> <span m='187750'>and</span> <span m='188000'>122</span>
  <span m='188620'>yellow,</span> <span m='189250'>and</span> <span
  m='189640'>99</span> <span m='190710'>green.</span> <span
  m='191120'>There's</span> <span m='191290'>no</span> <span
  m='191410'>loss</span> <span m='191620'>of</span> <span
  m='191690'>generality</span> <span m='192350'>here</span> <span
  m='192560'>because</span> <span m='192940'>these</span> <span
  m='193200'>are</span> <span m='193240'>the</span> <span
  m='193400'>three</span> <span m='193710'>that</span> <span
  m='193850'>are</span> <span m='193960'>on</span> <span m='194120'>the</span>
  <span m='194200'>ground</span> <span m='194540'>at the</span> <span
  m='194630'>same</span> <span m='194940'>time,</span> <span
  m='195580'>reflected</span> <span m='196090'>by</span> <span
  m='196190'>the</span> <span m='196310'>fact</span> <span
  m='196580'>that</span> <span m='196660'>they're</span> <span
  m='196810'>in</span> <span m='196870'>a</span> <span
  m='196920'>triangle.</span> <span m='197910'>And</span> <span
  m='198120'>I'm</span> <span m='198190'>going</span> <span m='198330'>to</span>
  <span m='198370'>have</span> <span m='198620'>to</span> <span
  m='198690'>use</span> <span m='198960'>three</span> <span
  m='199170'>different</span> <span m='199430'>colors</span> <span
  m='199760'>since</span> <span m='199990'>each</span> <span
  m='200200'>one</span> <span m='200420'>is</span> <span
  m='200550'>adjacent</span> <span m='200980'>to</span> <span
  m='201060'>the</span> <span m='201210'>other</span> <span
  m='201430'>two.</span> </p><p><span m='202280'>OK,</span> <span
  m='202670'>what</span> <span m='202930'>next?</span> <span
  m='203280'>Well,</span> <span m='203740'>let's</span> <span
  m='204470'>color</span> <span m='204800'>145</span> <span
  m='205480'>yellow.</span> <span m='205780'>I</span> <span
  m='205850'>might</span> <span m='206020'>as</span> <span
  m='206110'>well</span> <span m='206300'>reuse</span> <span
  m='206730'>it</span> <span m='207150'>since</span> <span
  m='207430'>it's</span> <span m='207590'>not</span> <span
  m='207800'>adjacent</span> <span m='208300'>to</span> <span
  m='208460'>a</span> <span m='208830'>yellow</span> <span
  m='209200'>vertex.</span> <span m='210220'>And</span> <span
  m='210470'>then</span> <span m='211440'>here,</span> <span
  m='211790'>I've</span> <span m='211950'>got</span> <span
  m='213180'>another</span> <span m='213600'>triangle.</span> <span
  m='214450'>So</span> <span m='214920'>if</span> <span m='215080'>I'm</span>
  <span m='215180'>not</span> <span m='215350'>going</span> <span
  m='215450'>to</span> <span m='215490'>use</span> <span m='215700'>an</span>
  <span m='215770'>extra</span> <span m='216070'>color,</span> <span
  m='216890'>the</span> <span m='216980'>sensible</span> <span
  m='217440'>thing</span> <span m='217660'>to</span> <span m='217750'>do</span>
  <span m='217920'>would</span> <span m='218050'>be</span> <span
  m='218150'>to</span> <span m='218270'>color</span> <span
  m='218550'>that</span> <span m='218810'>red.</span> <span
  m='219070'>But</span> <span m='219470'>oops, I</span> <span
  m='219530'>didn't</span> <span m='219800'>do</span> <span
  m='219900'>that.</span> <span m='220090'>I</span> <span m='220170'>used</span>
  <span m='220420'>a</span> <span m='220530'>red</span> <span
  m='220730'>here.</span> </p><p><span m='221010'>There's</span> <span
  m='221230'>another</span> <span m='221530'>triangle,</span> <span
  m='222070'>I</span> <span m='222140'>guess,</span> <span
  m='222410'>that</span> <span m='223710'>allows</span> <span
  m='224160'>me</span> <span m='224280'>to</span> <span m='224390'>color.</span>
  <span m='224770'>And</span> <span m='225110'>then I</span> <span
  m='225170'>color</span> <span m='225500'>this</span> <span
  m='225750'>black</span> <span m='226620'>because</span> <span
  m='227140'>here,</span> <span m='227460'>I'm</span> <span
  m='227570'>stuck.</span> <span m='228370'>I'm</span> <span
  m='228630'>adjacent</span> <span m='229270'>to</span> <span
  m='229360'>both</span> <span m='231390'>a</span> <span
  m='231520'>yellow,</span> <span m='231835'>a</span> <span
  m='232150'>black,</span> <span m='232620'>and</span> <span m='232800'>a</span>
  <span m='232870'>green</span> <span m='233190'>vertex.</span> <span
  m='233780'>So</span> <span m='233880'>I</span> <span m='233980'>have</span>
  <span m='234060'>to</span> <span m='234170'>come</span> <span
  m='234380'>up</span> <span m='234540'>with</span> <span m='234660'>a</span>
  <span m='234700'>fourth</span> <span m='235060'>color.</span> </p><p><span
  m='236400'>All</span> <span m='236470'>right,</span> <span
  m='237310'>we</span> <span m='237490'>did it</span> <span
  m='237640'>with</span> <span m='237780'>four</span> <span
  m='238010'>colors.</span> <span m='238380'>It</span> <span
  m='238490'>means</span> <span m='238680'>that</span> <span
  m='238770'>we</span> <span m='238900'>could</span> <span
  m='239380'>have</span> <span m='239490'>gotten</span> <span
  m='239700'>away</span> <span m='239850'>with</span> <span
  m='240030'>four</span> <span m='240310'>gates.</span> <span
  m='240840'>And</span> <span m='241170'>the</span> <span
  m='241300'>colors</span> <span m='241710'>tell</span> <span
  m='241920'>us</span> <span m='242870'>which</span> <span
  m='243230'>aircraft</span> <span m='243690'>to</span> <span
  m='243790'>assign</span> <span m='244110'>to</span> <span
  m='244210'>which</span> <span m='244460'>gate.</span> <span
  m='244730'>So</span> <span m='245130'>257</span> <span m='246110'>and</span>
  <span m='246220'>67</span> <span m='246890'>can</span> <span
  m='247050'>both</span> <span m='247320'>be</span> <span
  m='247440'>assigned</span> <span m='247760'>to</span> <span
  m='247840'>the</span> <span m='247970'>red</span> <span m='248170'>gate</span>
  <span m='248420'>because</span> <span m='248850'>they</span> <span
  m='249040'>are</span> <span m='249150'>not</span> <span m='249450'>on</span>
  <span m='249620'>the</span> <span m='249700'>ground</span> <span
  m='250410'>at</span> <span m='250590'>the</span> <span m='250660'>same</span>
  <span m='250970'>time.</span> <span m='251660'>There's</span> <span
  m='251900'>no</span> <span m='252100'>edge</span> <span
  m='252330'>between</span> <span m='252800'>them.</span> <span
  m='253340'>122</span> <span m='254130'>and</span> <span m='254230'>145</span>
  <span m='255000'>can</span> <span m='255140'>be</span> <span
  m='255280'>assigned</span> <span m='255590'>the</span> <span
  m='255750'>yellow</span> <span m='255970'>gate,</span> <span
  m='256190'>and</span> <span m='256290'>so</span> <span m='256630'>on.</span>
  </p><p><span m='257579'>Now,</span> <span m='258170'>this</span> <span
  m='258570'>was</span> <span m='258769'>not</span> <span m='259000'>the</span>
  <span m='259070'>smartest</span> <span m='259529'>way</span> <span
  m='259649'>to</span> <span m='259740'>color.</span> <span m='260320'>A</span>
  <span m='260390'>better</span> <span m='260660'>coloring</span> <span
  m='260980'>is</span> <span m='261130'>shown</span> <span
  m='261440'>here.</span> <span m='261860'>You</span> <span
  m='261890'>can</span> <span m='262040'>check</span> <span
  m='262350'>that</span> <span m='262850'>every</span> <span
  m='263210'>two</span> <span m='263570'>adjacent</span> <span
  m='264080'>vertices</span> <span m='264530'>have</span> <span
  m='264690'>different</span> <span m='265000'>colors.</span> <span
  m='265350'>And</span> <span m='265470'>now</span> <span m='265620'>I've</span>
  <span m='265780'>done</span> <span m='265960'>it</span> <span
  m='266050'>with</span> <span m='266180'>only</span> <span
  m='266390'>three</span> <span m='266650'>colors--</span> <span
  m='267060'>red,</span> <span m='267800'>yellow,</span> <span
  m='268650'>and</span> <span m='269420'>green.</span> <span
  m='270260'>So</span> <span m='270370'>now</span> <span m='270670'>there</span>
  <span m='270860'>are</span> <span m='270900'>three</span> <span
  m='271170'>gates</span> <span m='271570'>and</span> <span m='271680'>I</span>
  <span m='271730'>get</span> <span m='271970'>a</span> <span
  m='272050'>better</span> <span m='273050'>schedule.</span> </p><p><span
  m='274110'>Another</span> <span m='274350'>example</span> <span
  m='274770'>of</span> <span m='274850'>this</span> <span m='275000'>kind</span>
  <span m='275170'>of</span> <span m='275230'>conflict</span> <span
  m='275700'>problem</span> <span m='276040'>comes</span> <span
  m='276310'>up</span> <span m='276490'>with</span> <span
  m='276610'>scheduling</span> <span m='277000'>final</span> <span
  m='277360'>exams.</span> <span m='278830'>Two</span> <span
  m='279250'>subjects</span> <span m='279910'>conflict</span> <span
  m='281020'>if</span> <span m='281250'>a</span> <span m='281320'>student</span>
  <span m='281740'>is</span> <span m='281840'>taking</span> <span
  m='282200'>both.</span> <span m='283420'>Because</span> <span
  m='284080'>if</span> <span m='284210'>a</span> <span
  m='284290'>student's</span> <span m='284610'>taking</span> <span
  m='284930'>both,</span> <span m='285200'>I</span> <span
  m='285260'>can't</span> <span m='285530'>have</span> <span
  m='285720'>the</span> <span m='285810'>final</span> <span
  m='286140'>exams</span> <span m='286500'>at</span> <span m='286580'>the</span>
  <span m='286650'>same</span> <span m='286910'>time.</span> <span
  m='287590'>And</span> <span m='287810'>so</span> <span m='288010'>I</span>
  <span m='288110'>need</span> <span m='288390'>to</span> <span
  m='288510'>assign</span> <span m='288910'>different</span> <span
  m='289510'>time</span> <span m='289770'>slots</span> <span
  m='290270'>during</span> <span m='290560'>exam</span> <span
  m='290900'>period</span> <span m='291810'>to</span> <span
  m='292060'>subjects</span> <span m='292760'>that</span> <span
  m='292950'>overlap,</span> <span m='293750'>that</span> <span
  m='293880'>have</span> <span m='294070'>a</span> <span
  m='294120'>student</span> <span m='294380'>in</span> <span
  m='294640'>common.</span> </p><p><span m='295560'>And</span> <span
  m='295790'>then</span> <span m='295930'>the</span> <span
  m='296020'>question</span> <span m='296490'>is,</span> <span
  m='297040'>given</span> <span m='297700'>this</span> <span
  m='298690'>data</span> <span m='299110'>about</span> <span
  m='299600'>which</span> <span m='300430'>pairs</span> <span
  m='300740'>of</span> <span m='300830'>subjects</span> <span
  m='301330'>have</span> <span m='301510'>a</span> <span
  m='301560'>student</span> <span m='302010'>in</span> <span
  m='302140'>common,</span> <span m='302970'>we</span> <span
  m='303120'>want</span> <span m='303330'>to</span> <span m='303420'>know</span>
  <span m='303610'>how</span> <span m='303790'>short</span> <span
  m='304160'>an</span> <span m='304260'>exam</span> <span
  m='304630'>period</span> <span m='305110'>can</span> <span
  m='305440'>we</span> <span m='305590'>get</span> <span m='305730'>away</span>
  <span m='306010'>with.</span> <span m='306490'>Again,</span> <span
  m='306950'>it</span> <span m='307140'>becomes</span> <span m='307700'>a</span>
  <span m='308150'>simple</span> <span m='308540'>graph</span> <span
  m='308830'>model</span> <span m='309320'>and</span> <span m='309430'>a</span>
  <span m='309500'>coloring</span> <span m='309970'>problem.</span> </p><p><span
  m='310410'>So</span> <span m='310640'>here,</span> <span
  m='311260'>we've</span> <span m='311530'>drawn</span> <span
  m='311760'>a</span> <span m='311850'>graph</span> <span m='312230'>with</span>
  <span m='312370'>some</span> <span m='312530'>sample</span> <span
  m='312930'>subjects.</span> <span m='313720'>6.042</span> <span
  m='315608'>and</span> <span m='316024'>18.02</span> <span
  m='316440'>have</span> <span m='316680'>a</span> <span
  m='316730'>student</span> <span m='317190'>in</span> <span
  m='317320'>common.</span> <span m='317750'>That's</span> <span
  m='317990'>what</span> <span m='318170'>that</span> <span
  m='318390'>edge</span> <span m='318640'>means.</span> <span
  m='319290'>They</span> <span m='319450'>need</span> <span m='320310'>to
  have</span> <span m='320440'>final</span> <span m='320780'>exam</span> <span
  m='321110'>scheduled</span> <span m='321640'>at</span> <span
  m='321750'>different</span> <span m='322110'>times.</span> <span
  m='322920'>Likewise,</span> <span m='323360'>8.02</span> <span
  m='323772'>and</span> <span m='324184'>6.042</span> <span
  m='325240'>have</span> <span m='326020'>a</span> <span
  m='326090'>student</span> <span m='326500'>in</span> <span
  m='326590'>common,</span> <span m='327000'>so</span> <span
  m='327160'>they</span> <span m='327360'>need</span> <span m='327610'>to</span>
  <span m='327700'>be</span> <span m='327810'>scheduled</span> <span
  m='328310'>at</span> <span m='328420'>different</span> <span
  m='328770'>times.</span> </p><p><span m='329430'>On</span> <span
  m='329490'>the</span> <span m='329610'>other</span> <span
  m='329750'>hand,</span> <span m='330260'>6.042</span> <span
  m='331250'>and</span> <span m='331480'>18.02--</span> <span
  m='332680'>sorry.</span> <span m='334720'>What</span> <span
  m='335010'>are</span> <span m='335130'>some</span> <span m='335370'>two</span>
  <span m='335620'>that</span> <span m='335740'>are</span> <span
  m='335940'>not</span> <span m='336420'>adjacent?</span> <span
  m='337100'>3.091</span> <span m='338360'>and</span> <span
  m='338550'>18.02</span> <span m='339960'>have</span> <span
  m='340700'>no</span> <span m='341030'>edge</span> <span
  m='341320'>between</span> <span m='341770'>them,</span> <span
  m='342250'>which</span> <span m='342640'>means</span> <span
  m='342980'>that</span> <span m='343140'>they</span> <span
  m='343250'>can</span> <span m='343570'>be</span> <span
  m='343700'>scheduled</span> <span m='344230'>at</span> <span
  m='344330'>the</span> <span m='344410'>same</span> <span
  m='344740'>time.</span> <span m='345130'>There's</span> <span
  m='345360'>no</span> <span m='345550'>student</span> <span
  m='345960'>who's</span> <span m='346130'>taking</span> <span
  m='346470'>both</span> <span m='346930'>3.091</span> <span
  m='348220'>and</span> <span m='348510'>18.02,</span> <span
  m='349540'>at</span> <span m='349700'>least</span> <span
  m='350040'>according</span> <span m='350440'>to</span> <span
  m='350560'>the</span> <span m='350690'>data</span> <span m='351350'>in</span>
  <span m='351500'>this</span> <span m='351670'>graph.</span> </p><p><span
  m='352590'>So</span> <span m='352650'>let's</span> <span m='352840'>try</span>
  <span m='353030'>coloring</span> <span m='353600'>it.</span> <span
  m='354010'>And</span> <span m='354020'>again,</span> <span
  m='354720'>there's</span> <span m='355050'>a</span> <span
  m='355110'>triangle.</span> <span m='355720'>I'm</span> <span
  m='355830'>going</span> <span m='355960'>to</span> <span
  m='356000'>have</span> <span m='356220'>to</span> <span m='356290'>use</span>
  <span m='356540'>three</span> <span m='356720'>different</span> <span
  m='357000'>colors</span> <span m='357290'>for a</span> <span
  m='357510'>triangle.</span> <span m='359100'>And</span> <span
  m='360070'>here's</span> <span m='360310'>another</span> <span
  m='360620'>triangle.</span> <span m='361380'>And</span> <span
  m='361620'>to</span> <span m='361690'>be</span> <span
  m='361800'>economical,</span> <span m='362590'>let's</span> <span
  m='363570'>just</span> <span m='363810'>reuse</span> <span
  m='364250'>green.</span> <span m='366740'>Now,</span> <span
  m='367850'>here,</span> <span m='368310'>I've</span> <span
  m='368460'>got</span> <span m='368630'>another</span> <span
  m='368970'>vertex</span> <span m='369530'>that's</span> <span
  m='369740'>adjacent</span> <span m='370290'>to</span> <span
  m='370850'>three</span> <span m='371300'>different</span> <span
  m='371640'>color</span> <span m='371920'>vertices.</span> <span
  m='372800'>And</span> <span m='373040'>so</span> <span m='373230'>it's</span>
  <span m='373360'>going</span> <span m='373470'>to</span> <span
  m='373510'>have</span> <span m='373710'>to</span> <span m='373810'>be</span>
  <span m='373920'>colored</span> <span m='374230'>with</span> <span
  m='374380'>a</span> <span m='374420'>fourth</span> <span
  m='374760'>color.</span> </p><p><span m='375670'>This</span> <span
  m='375890'>time,</span> <span m='376220'>it</span> <span
  m='376320'>turns</span> <span m='376480'>out</span> <span
  m='376650'>that</span> <span m='376780'>the</span> <span
  m='376860'>four</span> <span m='377150'>colors</span> <span
  m='377470'>are</span> <span m='377600'>best</span> <span
  m='377870'>possible.</span> <span m='378340'>You</span> <span
  m='378450'>can</span> <span m='378610'>check</span> <span
  m='378870'>that.</span> <span m='379330'>And</span> <span m='379570'>it</span>
  <span m='379660'>corresponds</span> <span m='380330'>to</span> <span
  m='380460'>a</span> <span m='380520'>schedule</span> <span
  m='381120'>in</span> <span m='381220'>which</span> <span m='382870'>the</span>
  <span m='383900'>6.042</span> <span m='384670'>is</span> <span
  m='384760'>scheduled</span> <span m='385260'>on</span> <span
  m='385410'>Monday</span> <span m='385720'>morning</span> <span
  m='385930'>at</span> <span m='386190'>9:00,</span> <span m='387010'>and</span>
  <span m='387690'>6.001</span> <span m='388160'>is</span> <span
  m='388630'>scheduled</span> <span m='389120'>on</span> <span
  m='389270'>Monday</span> <span m='390090'>at</span> <span
  m='390310'>1:00.</span> <span m='391540'>But</span> <span
  m='391880'>8.02</span> <span m='392480'>and</span> <span
  m='392580'>3.091</span> <span m='393470'>can</span> <span
  m='393640'>both</span> <span m='393980'>be</span> <span
  m='394100'>scheduled</span> <span m='394580'>for</span> <span
  m='394710'>Tuesday</span> <span m='395060'>9:00</span> <span
  m='395330'>AM.</span> <span m='396100'>And</span> <span
  m='396320'>finally,</span> <span m='396840'>18.02</span> <span
  m='397630'>is</span> <span m='397720'>scheduled</span> <span
  m='398740'>on</span> <span m='398890'>Tuesday</span> <span
  m='399290'>at</span> <span m='399410'>1:00</span> <span m='399640'>PM.</span>
  </p><p><span m='402160'>OK,</span> <span m='402770'>so</span> <span
  m='403360'>this</span> <span m='403680'>kind</span> <span m='404000'>of</span>
  <span m='404880'>a</span> <span m='405160'>conflict</span> <span
  m='405720'>modeling</span> <span m='406160'>situation</span> <span
  m='406650'>comes</span> <span m='406850'>up</span> <span m='406970'>all</span>
  <span m='407180'>the</span> <span m='407270'>time.</span> <span
  m='408340'>Another</span> <span m='408600'>place</span> <span
  m='408890'>where</span> <span m='409030'>you</span> <span
  m='409190'>get</span> <span m='409430'>these</span> <span
  m='409690'>kind</span> <span m='409870'>of</span> <span
  m='410540'>compatibility</span> <span m='411280'>graphs</span> <span
  m='411570'>or</span> <span m='411670'>incompatibility</span> <span
  m='412480'>graphs</span> <span m='412830'>that</span> <span
  m='412930'>you</span> <span m='413040'>want</span> <span m='413170'>to</span>
  <span m='413240'>color</span> <span m='413540'>would</span> <span
  m='413700'>be</span> <span m='414280'>if</span> <span m='414530'>you</span>
  <span m='414660'>were</span> <span m='415020'>running</span> <span
  m='415290'>a</span> <span m='415330'>zoo</span> <span m='415800'>and</span>
  <span m='416010'>you</span> <span m='416140'>had</span> <span
  m='416430'>to</span> <span m='416870'>have</span> <span
  m='417090'>separate</span> <span m='417800'>habitats</span> <span
  m='418540'>for</span> <span m='418850'>certain</span> <span
  m='419170'>kinds</span> <span m='419400'>of</span> <span
  m='419470'>species</span> <span m='419900'>of</span> <span
  m='419990'>animals</span> <span m='420730'>that</span> <span
  m='420940'>you</span> <span m='421090'>don't</span> <span
  m='421400'>want</span> <span m='421570'>to</span> <span m='421610'>mix</span>
  <span m='421900'>together.</span> </p><p><span m='423100'>Big</span> <span
  m='423420'>fish</span> <span m='423690'>eat</span> <span
  m='423900'>little</span> <span m='424140'>fish.</span> <span
  m='424480'>It's</span> <span m='424650'>a</span> <span
  m='424760'>truism</span> <span m='425710'>in</span> <span
  m='425880'>the</span> <span m='426000'>aquarium</span> <span
  m='426540'>world.</span> <span m='427010'>And</span> <span
  m='427040'>so</span> <span m='427190'>you</span> <span m='427360'>need</span>
  <span m='427660'>to</span> <span m='428050'>keep</span> <span
  m='428360'>big</span> <span m='428550'>fish</span> <span
  m='428870'>separate</span> <span m='429230'>from</span> <span
  m='429540'>little</span> <span m='429740'>fish.</span> <span
  m='430500'>And</span> <span m='430870'>you</span> <span
  m='431010'>don't</span> <span m='431330'>want</span> <span
  m='431870'>the</span> <span m='432170'>tigers</span> <span
  m='432740'>living</span> <span m='433180'>together</span> <span
  m='433570'>with</span> <span m='433710'>the</span> <span
  m='433800'>chimpanzees.</span> <span m='435200'>So</span> <span
  m='435470'>we</span> <span m='435640'>could</span> <span
  m='436080'>again</span> <span m='436470'>model</span> <span
  m='436950'>this</span> <span m='437890'>problem</span> <span
  m='438430'>as</span> <span m='438740'>how</span> <span m='438850'>many</span>
  <span m='439020'>cages</span> <span m='439420'>do</span> <span
  m='439510'>we</span> <span m='439640'>need.</span> <span m='440030'>We</span>
  <span m='440170'>create</span> <span m='440530'>a</span> <span
  m='440570'>vertex</span> <span m='441040'>for</span> <span
  m='441180'>each</span> <span m='441340'>species</span> <span
  m='442180'>and</span> <span m='442640'>put</span> <span m='444170'>an</span>
  <span m='444270'>edge</span> <span m='444520'>between</span> <span
  m='444860'>two</span> <span m='445010'>species</span> <span
  m='445550'>that</span> <span m='445740'>mustn't</span> <span
  m='446160'>share</span> <span m='447040'>a</span> <span
  m='447290'>habitat</span> <span m='447890'>or</span> <span m='448940'>share
  a</span> <span m='449270'>cage.</span> </p><p><span m='450220'>Another</span>
  <span m='450590'>one</span> <span m='450860'>would</span> <span
  m='451070'>be</span> <span m='451580'>assigning</span> <span
  m='452570'>different</span> <span m='452850'>frequencies</span> <span
  m='453360'>to</span> <span m='453470'>radio</span> <span
  m='453750'>stations.</span> <span m='454890'>And</span> <span
  m='455100'>again,</span> <span m='456570'>if</span> <span
  m='456920'>two</span> <span m='457090'>radio</span> <span
  m='457380'>stations</span> <span m='457780'>are</span> <span
  m='457830'>close</span> <span m='458120'>to</span> <span
  m='458250'>each</span> <span m='458410'>other,</span> <span
  m='458610'>they</span> <span m='459670'>will</span> <span
  m='459870'>interfere.</span> <span m='460540'>So</span> <span
  m='460650'>they</span> <span m='460820'>have</span> <span m='461030'>to</span>
  <span m='461130'>be</span> <span m='461290'>assigned</span> <span
  m='462110'>to</span> <span m='462260'>different</span> <span
  m='462610'>colors</span> <span m='462990'>or</span> <span
  m='463060'>different</span> <span m='463410'>frequencies.</span> <span
  m='464080'>So</span> <span m='464170'>now,</span> <span m='464520'>we</span>
  <span m='464650'>would</span> <span m='464820'>be</span> <span
  m='465380'>using</span> <span m='465770'>radio</span> <span
  m='466140'>stations</span> <span m='466670'>as</span> <span
  m='466860'>vertices.</span> <span m='467870'>And</span> <span
  m='468420'>radio</span> <span m='468670'>stations</span> <span
  m='469180'>that</span> <span m='469340'>were</span> <span
  m='469570'>near</span> <span m='469840'>enough</span> <span
  m='470070'>to</span> <span m='470190'>interfere</span> <span
  m='470650'>with</span> <span m='470800'>each</span> <span
  m='470990'>other</span> <span m='471370'>would</span> <span
  m='471580'>get</span> <span m='471880'>connected</span> <span
  m='472370'>by</span> <span m='472530'>an</span> <span m='472690'>edge,</span>
  <span m='473490'>indicating</span> <span m='474100'>that</span> <span
  m='474260'>they</span> <span m='474370'>needed</span> <span
  m='474750'>to</span> <span m='474840'>be</span> <span
  m='475000'>assigned</span> <span m='475450'>different</span> <span
  m='475750'>color</span> <span m='476060'>frequencies.</span> </p><p><span
  m='477430'>And</span> <span m='478730'>one</span> <span m='478900'>of</span>
  <span m='478960'>the</span> <span m='479040'>classic</span> <span
  m='479460'>ones</span> <span m='479730'>is</span> <span
  m='480070'>literally</span> <span m='480630'>to</span> <span
  m='480780'>color</span> <span m='481270'>a map.</span> <span
  m='482100'>If</span> <span m='482340'>you</span> <span m='482480'>were</span>
  <span m='482620'>trying</span> <span m='482850'>to</span> <span
  m='482970'>take,</span> <span m='483280'>say,</span> <span m='483490'>a</span>
  <span m='483530'>map</span> <span m='483820'>of</span> <span
  m='483940'>the</span> <span m='484060'>US</span> <span m='484930'>and</span>
  <span m='485180'>assign</span> <span m='485620'>colors</span> <span
  m='486060'>to</span> <span m='486250'>it</span> <span m='486330'>in</span>
  <span m='486440'>such</span> <span m='486730'>a</span> <span
  m='486810'>way</span> <span m='487480'>that</span> <span m='487710'>you</span>
  <span m='487790'>never</span> <span m='488140'>had</span> <span
  m='488830'>two</span> <span m='489140'>states</span> <span
  m='490350'>that</span> <span m='490480'>shared</span> <span
  m='490890'>a</span> <span m='490940'>border</span> <span
  m='491730'>with</span> <span m='491950'>the</span> <span
  m='492050'>same</span> <span m='492580'>color--</span> <span
  m='493460'>and</span> <span m='493660'>this</span> <span m='493830'>is</span>
  <span m='493950'>an</span> <span m='494030'>illustration</span> <span
  m='494700'>of</span> <span m='494840'>doing</span> <span m='495150'>it</span>
  <span m='495330'>with</span> <span m='495510'>four</span> <span
  m='495790'>colors.</span> <span m='497190'>The</span> <span
  m='497280'>question</span> <span m='497680'>is</span> <span
  m='497810'>if</span> <span m='497920'>I</span> <span m='497970'>give</span>
  <span m='498210'>you</span> <span m='498330'>some</span> <span
  m='498560'>kind</span> <span m='498740'>of</span> <span m='498830'>a</span>
  <span m='498900'>planar</span> <span m='499220'>map</span> <span
  m='499510'>like</span> <span m='499750'>this,</span> <span
  m='500170'>what's</span> <span m='500480'>the</span> <span
  m='500570'>minimum</span> <span m='501010'>number</span> <span
  m='501350'>of</span> <span m='501460'>colors</span> <span
  m='501940'>that</span> <span m='502080'>will</span> <span
  m='502260'>work?</span> </p><p><span m='502540'>Now,</span> <span
  m='502610'>you're</span> <span m='502760'>allowed</span> <span
  m='503070'>to</span> <span m='503160'>have</span> <span m='507510'>two</span>
  <span m='507770'>countries</span> <span m='508420'>share</span> <span
  m='508630'>the</span> <span m='508770'>color</span> <span m='509130'>if</span>
  <span m='509320'>they</span> <span m='509500'>only</span> <span
  m='510610'>meet</span> <span m='510830'>at</span> <span m='511130'>one</span>
  <span m='512630'>point.</span> <span m='513600'>But</span> <span
  m='513789'>if</span> <span m='513940'>they</span> <span m='514049'>have</span>
  <span m='514280'>a</span> <span m='514350'>positive</span> <span
  m='514860'>length</span> <span m='515140'>boundary,</span> <span
  m='516090'>they</span> <span m='516240'>have</span> <span m='516570'>to</span>
  <span m='517220'>be</span> <span m='517400'>different</span> <span
  m='517720'>colors.</span> </p><p><span m='520159'>OK,</span> <span
  m='521299'>the</span> <span m='521429'>way</span> <span m='521580'>that</span>
  <span m='521760'>this</span> <span m='521929'>turns</span> <span
  m='522270'>into</span> <span m='522700'>a</span> <span
  m='524980'>vertex</span> <span m='525520'>coloring</span> <span
  m='525950'>problem</span> <span m='526420'>is</span> <span
  m='526680'>if</span> <span m='526820'>you</span> <span m='526920'>take</span>
  <span m='527685'>a</span> <span m='528040'>planar</span> <span
  m='528450'>graph</span> <span m='528800'>like</span> <span
  m='528980'>this--</span> <span m='529280'>here's</span> <span
  m='529410'>just</span> <span m='529630'>an</span> <span
  m='529710'>arbitrary</span> <span m='530230'>one--</span> <span
  m='530760'>what</span> <span m='530910'>I</span> <span m='530980'>can</span>
  <span m='531220'>do</span> <span m='531810'>is</span> <span
  m='532020'>I'm</span> <span m='532120'>interested</span> <span
  m='532490'>in</span> <span m='532570'>coloring</span> <span
  m='533050'>the</span> <span m='533190'>regions,</span> <span
  m='533560'>the</span> <span m='533930'>countries,</span> <span
  m='534430'>with</span> <span m='534560'>different</span> <span
  m='534860'>colors,</span> <span m='535220'>but</span> <span
  m='535420'>I'll</span> <span m='535570'>just</span> <span
  m='536150'>replace</span> <span m='536670'>each</span> <span
  m='536900'>region</span> <span m='537350'>by a</span> <span
  m='537580'>vertex.</span> <span m='537875'>So</span> <span
  m='538170'>I'm</span> <span m='538330'>going</span> <span m='538440'>to</span>
  <span m='538500'>stick</span> <span m='538750'>a</span> <span
  m='538790'>vertex</span> <span m='539300'>in</span> <span
  m='539370'>the</span> <span m='539460'>middle</span> <span
  m='539730'>of</span> <span m='539830'>each</span> <span m='540030'>of</span>
  <span m='540100'>the</span> <span m='540210'>regions.</span> <span
  m='540650'>Notice</span> <span m='540900'>there's</span> <span
  m='541070'>an</span> <span m='541180'>outer</span> <span
  m='541480'>region</span> <span m='541830'>here</span> <span
  m='542020'>too</span> <span m='542360'>that gets</span> <span
  m='542530'>a</span> <span m='542640'>vertex.</span> <span m='543660'>So</span>
  <span m='543760'>one,</span> <span m='544040'>two,</span> <span
  m='544260'>three,</span> <span m='544600'>four,</span> <span
  m='544900'>five,</span> <span m='545200'>six</span> <span
  m='545590'>regions,</span> <span m='546280'>or</span> <span
  m='546430'>six</span> <span m='546720'>vertices.</span> </p><p><span
  m='547560'>And</span> <span m='547760'>then</span> <span
  m='547990'>I'll</span> <span m='548130'>simply</span> <span
  m='548490'>connect</span> <span m='549330'>two</span> <span
  m='549600'>vertices</span> <span m='550200'>when</span> <span
  m='550920'>there</span> <span m='551240'>is</span> <span m='551410'>a</span>
  <span m='551670'>positive</span> <span m='552220'>length</span> <span
  m='552580'>edge</span> <span m='554040'>that</span> <span
  m='554730'>their</span> <span m='555060'>regions</span> <span
  m='555550'>share.</span> <span m='556170'>So</span> <span
  m='557680'>that</span> <span m='557950'>edge</span> <span
  m='558230'>corresponds</span> <span m='558760'>to</span> <span
  m='558860'>the</span> <span m='558960'>fact</span> <span
  m='559290'>that</span> <span m='559450'>there's</span> <span
  m='559700'>this</span> <span m='559940'>boundary</span> <span
  m='560235'>that's</span> <span m='560530'>shared</span> <span
  m='560900'>between</span> <span m='561540'>this</span> <span
  m='561750'>region</span> <span m='562110'>and</span> <span
  m='562220'>this</span> <span m='562420'>region.</span> <span
  m='564060'>If</span> <span m='564350'>you</span> <span m='564460'>look</span>
  <span m='564770'>at</span> <span m='565830'>this</span> <span
  m='566830'>same</span> <span m='567380'>triangular-shaped</span> <span
  m='568390'>region,</span> <span m='568810'>it</span> <span
  m='569180'>has</span> <span m='569490'>a</span> <span
  m='569540'>boundary</span> <span m='569960'>with</span> <span
  m='570090'>the</span> <span m='570200'>outside</span> <span
  m='570650'>region.</span> <span m='570970'>So</span> <span
  m='571140'>there's</span> <span m='571330'>going</span> <span
  m='571470'>to</span> <span m='571530'>be</span> <span m='571700'>an</span>
  <span m='571800'>edge</span> <span m='572080'>from</span> <span
  m='572250'>here</span> <span m='572610'>to</span> <span m='572750'>the</span>
  <span m='572850'>vertex</span> <span m='573370'>that</span> <span
  m='573480'>represents</span> <span m='574040'>the</span> <span
  m='574180'>outside.</span> <span m='575100'>And</span> <span
  m='575280'>there's</span> <span m='575550'>the</span> <span
  m='575680'>rest</span> <span m='575980'>of</span> <span m='576040'>the</span>
  <span m='576200'>edges.</span> <span m='577230'>An</span> <span
  m='577620'>edge</span> <span m='577750'>appears</span> <span
  m='579080'>between</span> <span m='579530'>two</span> <span
  m='580550'>regions</span> <span m='581990'>that</span> <span
  m='582200'>share</span> <span m='582520'>a</span> <span
  m='582560'>boundary.</span> </p><p><span m='583340'>And</span> <span
  m='583600'>now,</span> <span m='583810'>the</span> <span
  m='583920'>question</span> <span m='584400'>is</span> <span
  m='585340'>coloring</span> <span m='586110'>the</span> <span
  m='586290'>countries</span> <span m='587170'>corresponds</span> <span
  m='588000'>to</span> <span m='588300'>coloring</span> <span
  m='588780'>the</span> <span m='588870'>vertices.</span> <span
  m='589500'>And</span> <span m='589630'>we'd</span> <span
  m='589820'>like</span> <span m='590070'>to</span> <span
  m='590230'>color</span> <span m='591070'>the</span> <span
  m='591170'>graph</span> <span m='591550'>with</span> <span
  m='591710'>as</span> <span m='591820'>few</span> <span
  m='592010'>colors</span> <span m='592350'>as</span> <span
  m='592480'>possible.</span> <span m='593335'>Well, a</span> <span
  m='593610'>famous</span> <span m='594760'>result</span> <span
  m='595050'>that</span> <span m='595340'>was</span> <span
  m='595590'>proved</span> <span m='595980'>in</span> <span
  m='596060'>the</span> <span m='596140'>'70s</span> <span m='596770'>is</span>
  <span m='597040'>that</span> <span m='597210'>every</span> <span
  m='597660'>planar</span> <span m='598120'>graph</span> <span
  m='598520'>is</span> <span m='598700'>in</span> <span m='598810'>fact</span>
  <span m='599530'>four-colorable.</span> </p><p><span m='601110'>Now,</span>
  <span m='601210'>this</span> <span m='601410'>was</span> <span
  m='601550'>first</span> <span m='602450'>claimed</span> <span
  m='602720'>to</span> <span m='602810'>be</span> <span m='602950'>proved</span>
  <span m='603240'>in</span> <span m='603300'>the</span> <span
  m='603380'>1850s,</span> <span m='604120'>but</span> <span
  m='604250'>in</span> <span m='604350'>fact,</span> <span m='604580'>the</span>
  <span m='604670'>published</span> <span m='605010'>proof</span> <span
  m='605260'>was</span> <span m='605410'>wrong.</span> <span
  m='606250'>It</span> <span m='606420'>sat</span> <span
  m='606650'>around</span> <span m='606900'>in</span> <span
  m='606960'>the</span> <span m='607050'>journal</span> <span
  m='607350'>literature</span> <span m='607800'>for</span> <span
  m='607960'>decades</span> <span m='608380'>before</span> <span
  m='608700'>somebody</span> <span m='609090'>found</span> <span
  m='609730'>a</span> <span m='609830'>bug.</span> <span m='610710'>Or</span>
  <span m='611090'>that</span> <span m='611340'>is</span> <span
  m='611460'>to</span> <span m='611550'>say</span> <span m='611720'>that</span>
  <span m='611990'>the</span> <span m='612090'>proof</span> <span
  m='612440'>was</span> <span m='612600'>wrong,</span> <span
  m='612830'>not</span> <span m='613030'>the</span> <span
  m='613140'>result.</span> <span m='613630'>There</span> <span
  m='613780'>was</span> <span m='613940'>a</span> <span m='613980'>big</span>
  <span m='614180'>hole</span> <span m='614510'>in</span> <span
  m='614580'>the</span> <span m='614670'>proof</span> <span
  m='615580'>that</span> <span m='616700'>had</span> <span m='616890'>not</span>
  <span m='617080'>been</span> <span m='617210'>adequately</span> <span
  m='617730'>justified.</span> </p><p><span m='618670'>The</span> <span
  m='618790'>proof</span> <span m='619090'>did</span> <span
  m='619310'>give</span> <span m='619500'>a</span> <span
  m='620190'>correct</span> <span m='620600'>argument</span> <span
  m='620930'>for</span> <span m='621040'>five</span> <span
  m='621410'>coloring,</span> <span m='622190'>and</span> <span
  m='622410'>the</span> <span m='622470'>four</span> <span
  m='622750'>color</span> <span m='623030'>problem</span> <span
  m='623440'>was</span> <span m='623590'>opened</span> <span
  m='623990'>for</span> <span m='624380'>over</span> <span m='624670'>100</span>
  <span m='625120'>years.</span> <span m='625960'>Then</span> <span
  m='626200'>in the</span> <span m='626260'>1970s,</span> <span
  m='629910'>two</span> <span m='630360'>mathematicians</span> <span
  m='631850'>came</span> <span m='632190'>up</span> <span m='632360'>with</span>
  <span m='632870'>a</span> <span m='633700'>proof</span> <span
  m='634020'>of</span> <span m='634120'>the</span> <span m='634210'>four</span>
  <span m='634460'>color</span> <span m='634780'>theorem</span> <span
  m='635590'>that</span> <span m='635730'>was</span> <span
  m='635860'>very</span> <span m='636060'>controversial</span> <span
  m='636680'>because</span> <span m='637010'>a</span> <span
  m='637090'>lot</span> <span m='637360'>of</span> <span m='638110'>their</span>
  <span m='638550'>proof</span> <span m='639510'>required</span> <span
  m='640160'>a</span> <span m='640230'>computer</span> <span
  m='640680'>program</span> <span m='641200'>to</span> <span
  m='641360'>crank</span> <span m='641690'>through</span> <span
  m='641900'>several</span> <span m='642310'>thousand</span> <span
  m='643450'>sample</span> <span m='643860'>graphs</span> <span
  m='644390'>that</span> <span m='644590'>needed</span> <span
  m='644890'>to</span> <span m='644970'>be</span> <span
  m='645110'>verified</span> <span m='645690'>for</span> <span
  m='646040'>four-colorability.</span> </p><p><span m='646770'>They</span> <span
  m='646920'>had</span> <span m='647080'>an</span> <span
  m='647190'>argument</span> <span m='647730'>that</span> <span
  m='648180'>showed</span> <span m='648640'>that</span> <span
  m='649700'>there</span> <span m='650000'>could</span> <span
  m='650150'>only</span> <span m='650420'>be</span> <span m='650710'>a</span>
  <span m='650790'>few</span> <span m='651050'>thousand</span> <span
  m='651530'>counter</span> <span m='651920'>examples</span> <span
  m='652370'>if</span> <span m='652500'>there</span> <span
  m='652600'>was--</span> <span m='653070'>or</span> <span
  m='653230'>rather,</span> <span m='653530'>if</span> <span
  m='653710'>there</span> <span m='653810'>was</span> <span
  m='653950'>any</span> <span m='654190'>graph that</span> <span
  m='654630'>couldn't</span> <span m='654880'>be</span> <span m='655230'>four
  colored,</span> <span m='655850'>it</span> <span m='656000'>would</span> <span
  m='656160'>be</span> <span m='656290'>one</span> <span m='656650'>of</span>
  <span m='656890'>these</span> <span m='657130'>several</span> <span
  m='657500'>thousand</span> <span m='657890'>graphs.</span> <span
  m='658280'>And</span> <span m='658400'>then</span> <span
  m='658570'>they</span> <span m='659040'>went</span> <span m='659320'>to</span>
  <span m='659410'>work</span> <span m='659750'>on</span> <span
  m='660040'>coloring</span> <span m='660530'>these</span> <span
  m='660750'>several</span> <span m='661120'>thousand</span> <span
  m='661510'>graphs,</span> <span m='662730'>which</span> <span
  m='662950'>were</span> <span m='663090'>generated</span> <span
  m='663580'>with</span> <span m='663700'>the</span> <span m='664080'>aid</span>
  <span m='664220'>of</span> <span m='664320'>a</span> <span
  m='664390'>computer</span> <span m='664850'>and then</span> <span
  m='665110'>colored</span> <span m='665610'>with</span> <span
  m='665770'>the</span> <span m='665870'>aid</span> <span m='666010'>of</span>
  <span m='666110'>a</span> <span m='666170'>computer,</span> <span
  m='666620'>and</span> <span m='666700'>also</span> <span m='666990'>by</span>
  <span m='667190'>hand.</span> </p><p><span m='668280'>This</span> <span
  m='668600'>did</span> <span m='668790'>not</span> <span m='669030'>make</span>
  <span m='669220'>the</span> <span m='669290'>mathematical</span> <span
  m='670020'>community</span> <span m='671140'>happy</span> <span
  m='671520'>because</span> <span m='671880'>a</span> <span
  m='671950'>proof</span> <span m='672230'>like</span> <span
  m='672400'>that</span> <span m='672600'>is</span> <span
  m='672730'>essentially</span> <span m='673120'>uncheckable.</span> <span
  m='675070'>A</span> <span m='675150'>much</span> <span
  m='675450'>improved</span> <span m='675900'>version</span> <span
  m='676380'>was</span> <span m='676610'>developed</span> <span
  m='677060'>in</span> <span m='677120'>the</span> <span
  m='677190'>1990s,</span> <span m='678060'>but</span> <span
  m='678200'>it</span> <span m='678320'>still</span> <span
  m='678740'>requires,</span> <span m='679330'>in</span> <span
  m='679440'>the</span> <span m='679610'>end,</span> <span m='680170'>a</span>
  <span m='680280'>computer</span> <span m='680760'>program</span> <span
  m='681190'>to</span> <span m='681310'>generate</span> <span
  m='681710'>about</span> <span m='681950'>600</span> <span
  m='682530'>maps</span> <span m='682950'>and</span> <span
  m='683110'>verify</span> <span m='683620'>their</span> <span
  m='683840'>colorability.</span> <span m='685090'>So</span> <span
  m='685400'>it</span> <span m='685580'>remains</span> <span
  m='686650'>to</span> <span m='686840'>find</span> <span m='687280'>a</span>
  <span m='687350'>proof</span> <span m='687650'>of</span> <span
  m='687740'>the</span> <span m='687820'>four</span> <span
  m='688100'>color</span> <span m='688380'>theorem</span> <span
  m='688760'>that</span> <span m='689070'>you</span> <span
  m='689240'>could</span> <span m='689400'>say</span> <span m='689620'>is</span>
  <span m='689870'>humanly</span> <span m='690360'>comprehensible</span> <span
  m='691430'>without</span> <span m='692140'>the</span> <span
  m='692310'>aid</span> <span m='692500'>of</span> <span m='692600'>a</span>
  <span m='692680'>computer.</span> <span m='693190'>But</span> <span
  m='693440'>there's</span> <span m='693620'>no</span> <span
  m='693810'>longer</span> <span m='694450'>any</span> <span
  m='694800'>doubt,</span> <span m='695100'>really,</span> <span
  m='695420'>about</span> <span m='695790'>this</span> <span
  m='696580'>theorem</span> <span m='697520'>in</span> <span
  m='697780'>the</span> <span m='697850'>mathematical</span> <span
  m='698500'>community.</span> </p><p><span m='701590'>In</span> <span
  m='701770'>general,</span> <span m='702800'>if</span> <span
  m='703270'>I</span> <span m='704000'>take</span> <span m='704220'>an</span>
  <span m='704320'>arbitrary</span> <span m='704740'>graph and</span> <span
  m='705130'>I</span> <span m='705280'>ask</span> <span m='705510'>what's</span>
  <span m='705710'>the</span> <span m='705790'>minimum</span> <span
  m='706220'>number</span> <span m='706540'>of</span> <span
  m='706640'>colors</span> <span m='707080'>to</span> <span
  m='707170'>color</span> <span m='707490'>it,</span> <span
  m='707920'>that's</span> <span m='708160'>called</span> <span
  m='708350'>the</span> <span m='708440'>chromatic</span> <span
  m='709110'>number</span> <span m='709510'>of</span> <span
  m='709700'>the</span> <span m='709760'>graph.</span> <span
  m='710640'>So</span> <span m='710890'>chi</span> <span m='711190'>of</span>
  <span m='711320'>G</span> <span m='711660'>is</span> <span
  m='712160'>the</span> <span m='712280'>minimum</span> <span
  m='712790'>number</span> <span m='713140'>of</span> <span
  m='713250'>colors</span> <span m='713650'>to</span> <span
  m='713770'>color</span> <span m='714100'>G.</span> <span
  m='714350'>Let's</span> <span m='714560'>look</span> <span
  m='714760'>at</span> <span m='714870'>some</span> <span m='715470'>chis</span>
  <span m='716240'>for</span> <span m='716440'>different</span> <span
  m='717420'>kinds</span> <span m='717710'>of</span> <span
  m='717790'>graphs.</span> </p><p><span m='718260'>So</span> <span
  m='718280'>here</span> <span m='718450'>we</span> <span m='718570'>have</span>
  <span m='718780'>a</span> <span m='719090'>simple</span> <span
  m='719500'>cycle</span> <span m='720010'>of</span> <span
  m='720160'>length</span> <span m='720430'>4.</span> <span
  m='721250'>And</span> <span m='721490'>it's</span> <span
  m='721640'>obvious</span> <span m='722200'>that</span> <span
  m='722380'>that</span> <span m='722580'>can</span> <span m='722700'>be</span>
  <span m='722830'>colored</span> <span m='723140'>with</span> <span
  m='723290'>two</span> <span m='723470'>colors--</span> <span
  m='724330'>just</span> <span m='724720'>alternate</span> <span
  m='725220'>the</span> <span m='725310'>colors.</span> <span
  m='726210'>On</span> <span m='726330'>the</span> <span m='726450'>other</span>
  <span m='726630'>hand,</span> <span m='727240'>somewhat--</span> <span
  m='727920'>and in</span> <span m='728200'>fact,</span> <span
  m='728480'>generalizes,</span> <span m='729380'>by</span> <span
  m='729510'>the</span> <span m='729610'>way,</span> <span m='729730'>to</span>
  <span m='729850'>any</span> <span m='730190'>even</span> <span
  m='731050'>length</span> <span m='731570'>cycle.</span> <span
  m='733350'>The</span> <span m='734110'>chromatic</span> <span
  m='734590'>number</span> <span m='734950'>of</span> <span m='735070'>an</span>
  <span m='735170'>even</span> <span m='735430'>length</span> <span
  m='735660'>is</span> <span m='736080'>simply</span> <span
  m='736410'>two.</span> <span m='736690'>You</span> <span
  m='737030'>color</span> <span m='737320'>the</span> <span
  m='737580'>vertices</span> <span m='738040'>alternately.</span> </p><p><span
  m='739210'>On</span> <span m='739310'>the</span> <span m='739440'>other</span>
  <span m='739590'>hand,</span> <span m='740010'>if</span> <span
  m='740190'>the</span> <span m='740970'>cycle</span> <span m='741360'>is</span>
  <span m='741460'>of</span> <span m='741610'>odd</span> <span
  m='741830'>length,</span> <span m='742280'>you're</span> <span
  m='742430'>going</span> <span m='742610'>to</span> <span
  m='742680'>need</span> <span m='743470'>a</span> <span m='743550'>third</span>
  <span m='743890'>color.</span> <span m='744660'>There's</span> <span
  m='744920'>no</span> <span m='745060'>way</span> <span m='745250'>around
  it</span> <span m='745640'>because</span> <span m='745930'>even</span> <span
  m='746120'>if</span> <span m='746230'>you</span> <span m='746320'>try</span>
  <span m='746470'>to</span> <span m='746520'>get</span> <span
  m='746720'>by</span> <span m='746850'>with</span> <span m='747030'>two</span>
  <span m='747210'>colors,</span> <span m='747610'>then</span> <span
  m='747740'>you</span> <span m='747900'>color</span> <span
  m='748210'>things</span> <span m='748510'>alternately.</span> <span
  m='749480'>And</span> <span m='749640'>then</span> <span
  m='749780'>when</span> <span m='749910'>you</span> <span
  m='750070'>wrap</span> <span m='750320'>around,</span> <span
  m='751080'>you</span> <span m='751220'>discover</span> <span
  m='751930'>that</span> <span m='752940'>you</span> <span
  m='753120'>can't</span> <span m='753510'>alternately</span> <span
  m='754050'>color.</span> <span m='754380'>You're</span> <span
  m='754450'>going</span> <span m='754570'>to</span> <span
  m='754630'>need</span> <span m='754790'>a</span> <span m='754840'>third</span>
  <span m='755170'>color</span> <span m='755480'>in</span> <span
  m='755580'>order</span> <span m='755810'>to</span> <span
  m='755920'>avoid</span> <span m='756250'>a</span> <span
  m='756320'>clash.</span> <span m='757230'>So</span> <span m='757910'>in</span>
  <span m='758090'>general,</span> <span m='758980'>the</span> <span
  m='759230'>chromatic</span> <span m='759730'>number</span> <span
  m='760210'>of</span> <span m='760290'>an</span> <span m='760490'>odd</span>
  <span m='760770'>length</span> <span m='761040'>cycle</span> <span
  m='762120'>is</span> <span m='762410'>3.</span> </p><p><span
  m='764970'>The</span> <span m='766370'>complete</span> <span
  m='766870'>graph</span> <span m='767460'>on</span> <span
  m='768010'>five</span> <span m='768290'>vertices</span> <span
  m='768870'>is</span> <span m='768960'>shown</span> <span
  m='769290'>here.</span> <span m='769670'>This</span> <span
  m='769790'>is</span> <span m='769910'>a</span> <span m='769970'>five</span>
  <span m='770300'>vertex</span> <span m='770790'>graph in</span> <span
  m='771210'>which</span> <span m='771440'>every</span> <span
  m='771770'>vertex</span> <span m='772640'>is</span> <span
  m='772890'>adjacent</span> <span m='773460'>to</span> <span
  m='773560'>the</span> <span m='773740'>other</span> <span
  m='773990'>four.</span> <span m='775410'>And</span> <span
  m='776080'>since</span> <span m='776490'>every</span> <span
  m='776820'>vertex</span> <span m='777340'>is</span> <span
  m='777480'>adjacent</span> <span m='777920'>to</span> <span
  m='778010'>the</span> <span m='778170'>other</span> <span
  m='778380'>four,</span> <span m='779210'>you're</span> <span
  m='779350'>going</span> <span m='779520'>to</span> <span
  m='779570'>need</span> <span m='779870'>five</span> <span
  m='780220'>colors.</span> <span m='780980'>You</span> <span
  m='781140'>can't</span> <span m='781390'>do</span> <span m='781530'>any</span>
  <span m='781700'>better.</span> <span m='781950'>They</span> <span
  m='782080'>have</span> <span m='782290'>to</span> <span m='782450'>all</span>
  <span m='782680'>have</span> <span m='782870'>different</span> <span
  m='783210'>colors.</span> <span m='785300'>And</span> <span
  m='785520'>so</span> <span m='785670'>the</span> <span
  m='785810'>chromatic</span> <span m='786340'>number</span> <span
  m='786780'>of</span> <span m='786960'>the</span> <span
  m='787070'>complete</span> <span m='787500'>graph</span> <span
  m='787790'>on</span> <span m='788080'>n</span> <span
  m='788370'>vertices</span> <span m='789330'>where</span> <span
  m='789530'>every</span> <span m='789840'>vertex</span> <span
  m='790360'>is</span> <span m='790500'>adjacent</span> <span
  m='791000'>to</span> <span m='791090'>the</span> <span m='791260'>other</span>
  <span m='791500'>n</span> <span m='791620'>minus</span> <span
  m='792000'>1</span> <span m='792860'>is</span> <span m='793240'>n.</span>
  </p><p><span m='795630'>Another</span> <span m='795960'>simple</span> <span
  m='796290'>example</span> <span m='796690'>that</span> <span
  m='796820'>comes</span> <span m='797120'>up</span> <span m='797320'>is</span>
  <span m='797540'>if</span> <span m='797670'>I</span> <span
  m='797760'>take</span> <span m='798460'>the</span> <span
  m='798590'>cycle</span> <span m='799200'>and</span> <span m='799450'>I</span>
  <span m='799580'>put</span> <span m='799980'>on</span> <span
  m='800370'>an</span> <span m='801150'>axle</span> <span m='801550'>in</span>
  <span m='801620'>the</span> <span m='801700'>middle--</span> <span
  m='802130'>we call</span> <span m='802420'>it a</span> <span
  m='802480'>wheel</span> <span m='802880'>then.</span> <span
  m='804510'>A</span> <span m='804750'>wheel</span> <span m='805290'>with</span>
  <span m='810180'>a</span> <span m='810490'>cycle</span> <span
  m='810830'>of</span> <span m='810900'>length of</span> <span
  m='811130'>5</span> <span m='811440'>around</span> <span m='811680'>the</span>
  <span m='811770'>outside,</span> <span m='812090'>a</span> <span
  m='812410'>perimeter</span> <span m='812890'>of</span> <span
  m='812970'>length</span> <span m='813190'>5,</span> <span m='813920'>is</span>
  <span m='814190'>called</span> <span m='814410'>W5.</span> <span
  m='815640'>And</span> <span m='816350'>we</span> <span m='816590'>can</span>
  <span m='816750'>color</span> <span m='817150'>it</span> <span
  m='817510'>with</span> <span m='818450'>four</span> <span
  m='818830'>colors.</span> </p><p><span m='819880'>And</span> <span
  m='820220'>in</span> <span m='820300'>general,</span> <span
  m='821130'>the</span> <span m='821430'>argument</span> <span
  m='822580'>that</span> <span m='822870'>the</span> <span
  m='823200'>chromatic</span> <span m='823670'>number</span> <span
  m='824010'>for</span> <span m='824840'>an</span> <span m='825040'>odd</span>
  <span m='825340'>length</span> <span m='825630'>wheel</span> <span
  m='826140'>is</span> <span m='826400'>four</span> <span m='826960'>is</span>
  <span m='827340'>that</span> <span m='827600'>I</span> <span
  m='827720'>know</span> <span m='827920'>I'm</span> <span
  m='828030'>going</span> <span m='828170'>to</span> <span
  m='828230'>need</span> <span m='828470'>three</span> <span
  m='828850'>colors</span> <span m='829290'>to</span> <span
  m='829410'>color</span> <span m='829700'>the</span> <span
  m='829870'>rim.</span> <span m='830500'>And</span> <span
  m='830760'>since</span> <span m='831170'>the</span> <span
  m='831680'>axle</span> <span m='832200'>is</span> <span
  m='832320'>adjacent</span> <span m='832810'>to</span> <span
  m='832880'>everything</span> <span m='833370'>on</span> <span
  m='833480'>the</span> <span m='833570'>rim,</span> <span m='833790'>I'm</span>
  <span m='833890'>going</span> <span m='834060'>to</span> <span
  m='834130'>need</span> <span m='834320'>a</span> <span
  m='834370'>fourth</span> <span m='834680'>color</span> <span
  m='834990'>for</span> <span m='835250'>it.</span> <span m='835720'>On
  the</span> <span m='835850'>other</span> <span m='835960'>hand,</span> <span
  m='836290'>again,</span> <span m='837350'>if</span> <span
  m='837520'>the</span> <span m='837630'>perimeter</span> <span
  m='838130'>is</span> <span m='838220'>even,</span> <span
  m='838570'>then</span> <span m='838690'>I</span> <span m='838780'>can</span>
  <span m='838950'>get</span> <span m='839150'>by</span> <span
  m='839310'>with</span> <span m='839490'>three</span> <span
  m='839730'>colors.</span> </p><p><span m='842400'>One</span> <span
  m='842610'>more</span> <span m='842840'>remark</span> <span
  m='843510'>about</span> <span m='843880'>chromatic</span> <span
  m='844330'>numbers</span> <span m='844800'>is</span> <span
  m='845040'>there's</span> <span m='845230'>an</span> <span
  m='845450'>easy</span> <span m='845790'>argument</span> <span
  m='846420'>that</span> <span m='846850'>shows</span> <span
  m='847370'>that</span> <span m='847530'>if</span> <span m='847700'>you</span>
  <span m='847830'>have</span> <span m='848110'>a</span> <span
  m='848190'>graph,</span> <span m='849560'>every</span> <span
  m='849940'>one</span> <span m='850160'>of</span> <span m='850270'>whose</span>
  <span m='850510'>vertices</span> <span m='851300'>is</span> <span
  m='851530'>at</span> <span m='851650'>most</span> <span
  m='852690'>degree</span> <span m='853130'>k--</span> <span m='853690'>there
  are</span> <span m='853870'>at</span> <span m='854160'>most</span> <span
  m='855390'>k</span> <span m='856360'>other</span> <span
  m='857350'>vertices</span> <span m='858020'>adjacent</span> <span
  m='858480'>to</span> <span m='858540'>any</span> <span m='858730'>given</span>
  <span m='859010'>vertex--</span> <span m='859900'>then</span> <span
  m='860100'>that</span> <span m='860310'>implies</span> <span
  m='860860'>that</span> <span m='861040'>the</span> <span
  m='861120'>graph</span> <span m='861460'>is</span> <span m='861590'>k</span>
  <span m='861810'>plus</span> <span m='862130'>1</span> <span
  m='862390'>colorable.</span> <span m='863250'>And the</span> <span
  m='863390'>proof</span> <span m='863640'>is</span> <span
  m='863740'>really</span> <span m='863980'>constructive</span> <span
  m='864570'>and</span> <span m='864680'>trivial.</span> </p><p><span
  m='865430'>Basically,</span> <span m='866330'>you</span> <span
  m='866450'>just</span> <span m='866620'>start</span> <span
  m='866990'>coloring</span> <span m='867410'>the</span> <span
  m='867490'>vertices</span> <span m='868010'>any way</span> <span
  m='868390'>you</span> <span m='868530'>like</span> <span
  m='870500'>subject</span> <span m='870890'>to</span> <span
  m='870970'>the</span> <span m='871100'>constraint</span> <span
  m='871610'>that</span> <span m='871740'>when</span> <span
  m='871950'>you</span> <span m='872070'>color</span> <span m='872420'>a</span>
  <span m='872460'>vertex,</span> <span m='873310'>it's</span> <span
  m='873530'>supposed</span> <span m='873940'>to</span> <span
  m='874040'>not</span> <span m='874360'>be</span> <span m='874500'>the</span>
  <span m='874600'>same</span> <span m='874880'>color</span> <span
  m='875220'>as</span> <span m='875330'>any</span> <span m='875560'>of</span>
  <span m='875610'>the</span> <span m='875680'>vertices</span> <span
  m='876250'>around</span> <span m='876525'>it.</span> <span
  m='877190'>But</span> <span m='877550'>that's</span> <span
  m='877810'>easy</span> <span m='878070'>to</span> <span m='878170'>do.</span>
  <span m='878510'>Because</span> <span m='879310'>when</span> <span
  m='879600'>it's</span> <span m='879790'>time</span> <span m='880110'>to</span>
  <span m='880240'>color</span> <span m='880500'>some</span> <span
  m='880710'>vertex,</span> <span m='882060'>even</span> <span
  m='882320'>if</span> <span m='882690'>all</span> <span m='882880'>the</span>
  <span m='882960'>vertices</span> <span m='883430'>around</span> <span
  m='883780'>it</span> <span m='883850'>are</span> <span
  m='883950'>colored,</span> <span m='884270'>there's</span> <span
  m='884490'>only</span> <span m='884730'>k</span> <span m='884970'>of</span>
  <span m='885120'>them.</span> <span m='885620'>And</span> <span
  m='885860'>so</span> <span m='886400'>I</span> <span m='886700'>will</span>
  <span m='886980'>always</span> <span m='887300'>be</span> <span
  m='887470'>able</span> <span m='887660'>to</span> <span m='887740'>find</span>
  <span m='887970'>a</span> <span m='888050'>k</span> <span
  m='888240'>plus</span> <span m='888570'>first</span> <span
  m='888880'>color</span> <span m='889310'>to</span> <span
  m='889500'>assign</span> <span m='889870'>it</span> <span
  m='890430'>and</span> <span m='890690'>get</span> <span m='890840'>us a</span>
  <span m='891090'>satisfactory</span> <span m='891810'>coloring.</span> <span
  m='892590'>So</span> <span m='892800'>I</span> <span m='892880'>can</span>
  <span m='893060'>get</span> <span m='893270'>by</span> <span
  m='893440'>with</span> <span m='893610'>k</span> <span m='893800'>plus</span>
  <span m='894100'>1</span> <span m='894330'>colors.</span> </p><p><span
  m='897290'>Now,</span> <span m='898130'>the</span> <span
  m='898310'>general</span> <span m='898790'>setup</span> <span
  m='899210'>with</span> <span m='899340'>colorability</span> <span
  m='900280'>is</span> <span m='900650'>that</span> <span m='900890'>to</span>
  <span m='901010'>check</span> <span m='901270'>whether</span> <span
  m='901530'>a</span> <span m='901570'>graph</span> <span m='901820'>is</span>
  <span m='901970'>two-colorable</span> <span m='902770'>is</span> <span
  m='902870'>actually</span> <span m='903240'>very</span> <span
  m='903580'>easy.</span> <span m='904280'>And</span> <span m='906230'>we</span>
  <span m='906740'>may</span> <span m='907010'>talk</span> <span
  m='907260'>about</span> <span m='907490'>that</span> <span
  m='907660'>in</span> <span m='907740'>some</span> <span
  m='907900'>class</span> <span m='908230'>problems.</span> <span
  m='910880'>But</span> <span m='911600'>three-colorability</span> <span
  m='914100'>dramatically</span> <span m='914710'>changes.</span> <span
  m='915290'>We're</span> <span m='915550'>back</span> <span
  m='915890'>in</span> <span m='916000'>the</span> <span m='916130'>realm</span>
  <span m='916800'>of</span> <span m='917220'>NP-complete</span> <span
  m='917970'>problems.</span> </p><p><span m='919110'>In</span> <span
  m='919260'>fact,</span> <span m='919720'>a</span> <span
  m='920060'>result</span> <span m='920720'>of</span> <span m='920820'>a</span>
  <span m='920970'>student</span> <span m='921370'>of</span> <span
  m='921450'>mine</span> <span m='921800'>almost</span> <span
  m='922140'>40</span> <span m='922410'>years</span> <span m='922630'>ago</span>
  <span m='922950'>was</span> <span m='923450'>that</span> <span
  m='924090'>even</span> <span m='924410'>if</span> <span m='924600'>a</span>
  <span m='924680'>graph</span> <span m='924980'>is</span> <span
  m='925130'>planar</span> <span m='925910'>where</span> <span m='926050'>you
  know</span> <span m='926540'>it can</span> <span m='926690'>definitely</span>
  <span m='927180'>be</span> <span m='927320'>colored</span> <span
  m='927660'>with</span> <span m='927850'>four</span> <span
  m='928110'>colors,</span> <span m='928950'>determining</span> <span
  m='929550'>whether</span> <span m='929850'>or</span> <span
  m='929910'>not</span> <span m='930130'>it</span> <span m='930330'>can</span>
  <span m='930510'>be</span> <span m='930640'>colored</span> <span
  m='931000'>with</span> <span m='931190'>three</span> <span
  m='931510'>colors</span> <span m='932340'>is</span> <span m='932580'>as</span>
  <span m='932710'>hard</span> <span m='933050'>as</span> <span
  m='933140'>satisfiability.</span> <span m='935130'>And</span> <span
  m='936380'>it</span> <span m='936610'>is,</span> <span m='936900'>in</span>
  <span m='937010'>fact,</span> <span m='937370'>an</span> <span
  m='937460'>NP-complete</span> <span m='938210'>problem.</span> <span
  m='938770'>In</span> <span m='938870'>fact,</span> <span m='939010'>a</span>
  <span m='939070'>proof</span> <span m='939590'>of</span> <span
  m='940150'>how</span> <span m='941230'>you</span> <span
  m='941500'>reduce</span> <span m='942920'>satisfiability</span> <span
  m='943750'>to</span> <span m='943850'>colorability</span> <span
  m='944660'>appears</span> <span m='945570'>in</span> <span m='945740'>a</span>
  <span m='945810'>problem</span> <span m='946370'>in</span> <span
  m='946550'>the</span> <span m='946670'>text,</span> <span
  m='947510'>which</span> <span m='947890'>we</span> <span m='948010'>may</span>
  <span m='948220'>assign</span> <span m='948270'>as a</span> <span
  m='948760'>problem</span> <span m='949070'>set</span> <span
  m='949380'>problem.</span> </p><p><span m='951620'>So</span> <span
  m='952060'>in</span> <span m='952240'>general,</span> <span
  m='953040'>finding</span> <span m='953610'>chi</span> <span
  m='954010'>of</span> <span m='954325'>G</span> <span m='954640'>is</span>
  <span m='955170'>hard,</span> <span m='956520'>even</span> <span
  m='956810'>for</span> <span m='956930'>three</span> <span
  m='957220'>colors.</span> <span m='958190'>Now,</span> <span
  m='958430'>it's</span> <span m='958830'>not</span> <span m='959080'>any</span>
  <span m='959300'>worse,</span> <span m='959700'>again,</span> <span
  m='959930'>from</span> <span m='960110'>a</span> <span
  m='960150'>theoretical</span> <span m='960690'>point</span> <span
  m='960960'>of</span> <span m='961050'>view</span> <span m='961260'>for</span>
  <span m='963900'>checking</span> <span m='965620'>what</span> <span
  m='965900'>chi</span> <span m='966160'>of</span> <span m='966250'>G</span>
  <span m='966500'>is</span> <span m='966740'>even</span> <span
  m='966970'>if</span> <span m='967090'>it's</span> <span m='967400'>a</span>
  <span m='967470'>very</span> <span m='967700'>large</span> <span
  m='968060'>number,</span> <span m='968640'>although</span> <span
  m='968910'>pragmatically,</span> <span m='969590'>three</span> <span
  m='969800'>color</span> <span m='970100'>will</span> <span
  m='970260'>be</span> <span m='970970'>easier</span> <span m='971340'>to</span>
  <span m='971450'>check</span> <span m='971780'>than</span> <span
  m='972130'>n-colorability.</span> <span m='974390'>And</span> <span
  m='974800'>that</span> <span m='975320'>is</span> <span m='976040'>our</span>
  <span m='976160'>story</span> <span m='976900'>about</span> <span
  m='977280'>colorability.</span> </p>
embedded_media:
  - uid: b7e793a234d59e95f454d4b0069570de
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 6ec1681a0e2552ea033e82f4dfd88b12
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: bdb9cda016f67852f144874fda25222d
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Penh4mv5gAg
  - uid: 451841b3e9f56aaff75fa8c3b31d3e5f
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Penh4mv5gAg/default.jpg'
  - uid: fc90773369040c3ed64bc817eb833ecf
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Penh4mv5gAg
  - uid: 711e9156e66d322db913a7b480c15937
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Penh4mv5gAg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/coloring/Penh4mv5gAg.srt
  - uid: cd211548adf1d625112ad3d7eae38c8a
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Penh4mv5gAg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/coloring/Penh4mv5gAg.pdf
  - uid: 7fac0c54b8d072c5a3d8ff177b13f951
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 07dc42293a8d53f5c73f93ddbdcd47f1
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: c6cf57779766bc01494a7a6fa115d071
    parent_uid: b3bab57cee4f74f78a2a15795b01912c
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_simplecoloring_video_ipod.mp4
type: courses
layout: video
---
