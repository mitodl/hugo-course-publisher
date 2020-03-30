---
title: Predicate Logic 2
uid: 636bda1f72476bc39b2099c6202fbd0d
parent_uid: 732f4df8011e8b8d47802b72ec9c5762
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp3-1/vertical-7b4a11771cb1/predicate-logic-2
short_url: predicate-logic-2
inline_embed_id: 57402253predicatelogic263778306
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1040'>PROFESSOR: So</span> <span m='1520'>now</span> <span
  m='1720'>we're</span> <span m='1800'>going</span> <span m='1920'>to</span>
  <span m='2000'>talk</span> <span m='2240'>about</span> <span
  m='2940'>the</span> <span m='3380'>concepts</span> <span m='4030'>of</span>
  <span m='4370'>validity</span> <span m='4960'>and</span> <span
  m='5130'>satisfiability,</span> <span m='6570'>which</span> <span
  m='7110'>take</span> <span m='7440'>on</span> <span m='7820'>some</span> <span
  m='8090'>extra</span> <span m='8390'>interest</span> <span m='8800'>in</span>
  <span m='8880'>the</span> <span m='8940'>context</span> <span
  m='9400'>of</span> <span m='9490'>predicate</span> <span
  m='9870'>calculus.</span> <span m='11560'>So</span> <span
  m='12290'>let's</span> <span m='12500'>remember</span> <span
  m='12860'>for</span> <span m='13140'>propositional</span> <span
  m='14130'>validity,</span> <span m='14660'>if</span> <span
  m='14790'>you</span> <span m='14880'>have</span> <span m='15150'>a</span>
  <span m='15680'>propositional</span> <span m='16350'>formula</span> <span
  m='16820'>with</span> <span m='17000'>variables</span> <span
  m='17610'>taking</span> <span m='18520'>the</span> <span
  m='18670'>truth</span> <span m='18990'>values</span> <span
  m='19570'>ranging</span> <span m='20050'>over</span> <span
  m='20210'>true</span> <span m='20390'>and</span> <span m='20500'>false,</span>
  <span m='21530'>then</span> <span m='22220'>a</span> <span
  m='22300'>formula</span> <span m='23050'>is</span> <span
  m='23530'>valid</span> <span m='24490'>when</span> <span m='24970'>it's</span>
  <span m='25190'>true</span> <span m='25470'>for</span> <span
  m='25670'>all</span> <span m='25880'>possible</span> <span
  m='26460'>truth</span> <span m='26720'>values.</span> </p><p><span
  m='27240'>So</span> <span m='28060'>here's</span> <span m='28330'>an</span>
  <span m='28410'>example</span> <span m='29250'>that</span> <span
  m='29630'>P</span> <span m='29840'>implies</span> <span m='30240'>Q</span>
  <span m='30570'>or</span> <span m='30760'>Q</span> <span
  m='31020'>implies</span> <span m='31710'>P.</span> <span m='32145'>And</span>
  <span m='32580'>you</span> <span m='32800'>can</span> <span
  m='32970'>check</span> <span m='33360'>that</span> <span m='33510'>for</span>
  <span m='33690'>the</span> <span m='33820'>four</span> <span
  m='34140'>possible</span> <span m='35290'>environments</span> <span
  m='36260'>of</span> <span m='36920'>P</span> <span m='37120'>and</span> <span
  m='37270'>Q--</span> <span m='38460'>true/false</span> <span
  m='38880'>values</span> <span m='39160'>of</span> <span m='39260'>P</span>
  <span m='39410'>and</span> <span m='39510'>Q,</span> <span
  m='40110'>this</span> <span m='40470'>OR</span> <span m='40870'>will</span>
  <span m='41020'>come</span> <span m='41260'>out</span> <span
  m='41420'>to</span> <span m='41520'>be</span> <span m='41620'>true.</span>
  <span m='43050'>Well,</span> <span m='43900'>for</span> <span
  m='44280'>predicate</span> <span m='44800'>formulas</span> <span
  m='46880'>there's</span> <span m='47400'>a</span> <span m='47540'>bunch</span>
  <span m='47820'>of</span> <span m='47900'>things</span> <span
  m='48240'>that</span> <span m='48360'>I</span> <span m='48440'>need</span>
  <span m='48750'>to</span> <span m='49150'>give</span> <span
  m='49340'>value</span> <span m='49840'>to</span> <span m='50150'>that</span>
  <span m='50270'>are</span> <span m='50320'>more</span> <span
  m='50510'>complicated</span> <span m='51220'>than</span> <span
  m='51700'>just</span> <span m='51950'>truth</span> <span
  m='52220'>values.</span> </p><p><span m='53000'>In</span> <span
  m='53130'>particular,</span> <span m='54340'>I</span> <span
  m='54880'>will</span> <span m='55020'>say</span> <span m='55310'>that</span>
  <span m='55590'>a</span> <span m='56080'>predicate</span> <span
  m='56470'>calculus</span> <span m='57010'>formula</span> <span
  m='57710'>is</span> <span m='57930'>valid</span> <span m='59120'>when</span>
  <span m='59530'>it's</span> <span m='59760'>true</span> <span
  m='60110'>for</span> <span m='60530'>all</span> <span
  m='60790'>possible</span> <span m='61510'>domains</span> <span
  m='62110'>of</span> <span m='62220'>discourse</span> <span
  m='62780'>that</span> <span m='62930'>the</span> <span
  m='63000'>variables</span> <span m='63610'>range</span> <span
  m='63950'>over.</span> <span m='64610'>There's</span> <span m='65500'>a</span>
  <span m='65920'>technicality</span> <span m='66570'>that it</span> <span
  m='66740'>has</span> <span m='66880'>to</span> <span m='66950'>be</span> <span
  m='67030'>non-empty,</span> <span m='67610'>but</span> <span
  m='67750'>aside</span> <span m='68040'>from</span> <span m='68190'>that</span>
  <span m='68470'>all</span> <span m='68630'>possible</span> <span
  m='69100'>domains.</span> <span m='70260'>And</span> <span
  m='71200'>whenever</span> <span m='71740'>you</span> <span
  m='71850'>have</span> <span m='72050'>a</span> <span
  m='72100'>predicate</span> <span m='72670'>mentioned</span> <span
  m='73080'>in</span> <span m='73190'>the</span> <span m='73260'>formula,</span>
  <span m='75670'>in</span> <span m='75840'>order</span> <span
  m='76000'>to</span> <span m='76140'>know</span> <span m='76340'>whether</span>
  <span m='76600'>the</span> <span m='76730'>formula</span> <span
  m='77280'>is</span> <span m='77490'>true</span> <span m='77770'>or</span>
  <span m='77840'>not,</span> <span m='78400'>I</span> <span
  m='78550'>need</span> <span m='78780'>to</span> <span m='78880'>know</span>
  <span m='79060'>what</span> <span m='79250'>that</span> <span
  m='79430'>predicate</span> <span m='79880'>means.</span> <span
  m='80740'>So</span> <span m='81780'>a</span> <span m='81880'>formula</span>
  <span m='82340'>is</span> <span m='82590'>valid</span> <span
  m='83130'>if</span> <span m='83380'>it</span> <span m='83490'>comes</span>
  <span m='83820'>out</span> <span m='84010'>true</span> <span
  m='84230'>no</span> <span m='84390'>matter</span> <span m='84700'>what</span>
  <span m='84940'>the</span> <span m='85020'>predicate</span> <span
  m='85530'>means.</span> </p><p><span m='86190'>Let's</span> <span
  m='86420'>look</span> <span m='86590'>at</span> <span m='86660'>a</span> <span
  m='86700'>concrete</span> <span m='87150'>example</span> <span
  m='87486'>to</span> <span m='88160'>get</span> <span m='88330'>a</span> <span
  m='88370'>grip</span> <span m='88660'>on</span> <span m='88830'>this.</span>
  <span m='89000'>Here</span> <span m='89270'>is</span> <span m='89440'>a</span>
  <span m='89850'>valid</span> <span m='90290'>formula</span> <span
  m='90890'>of</span> <span m='91080'>predicate</span> <span
  m='91500'>calculus.</span> <span m='92580'>It's</span> <span
  m='92810'>mentioning</span> <span m='95130'>predicates</span> <span
  m='95670'>P</span> <span m='95880'>and</span> <span m='96020'>Q.</span> <span
  m='97860'>It's</span> <span m='98210'>of</span> <span m='98380'>the</span>
  <span m='98450'>form</span> <span m='98790'>of</span> <span m='98900'>a</span>
  <span m='98960'>proposition</span> <span m='99990'>because</span> <span
  m='100280'>it's</span> <span m='101120'>saying</span> <span
  m='101580'>something</span> <span m='101960'>about</span> <span
  m='102260'>every</span> <span m='102640'>possible</span> <span
  m='103240'>z</span> <span m='103470'>in</span> <span m='103590'>the</span>
  <span m='103680'>domain</span> <span m='104190'>and</span> <span
  m='104430'>every</span> <span m='104680'>possible</span> <span
  m='105150'>x</span> <span m='105320'>and</span> <span m='105400'>every</span>
  <span m='105570'>possible</span> <span m='106010'>y.</span> <span
  m='107880'>The</span> <span m='108100'>only</span> <span
  m='108400'>thing</span> <span m='108660'>that</span> <span
  m='108800'>we</span> <span m='109230'>need</span> <span m='109540'>to</span>
  <span m='109650'>know</span> <span m='109940'>to</span> <span
  m='110010'>make</span> <span m='110260'>sense</span> <span
  m='110590'>out</span> <span m='110730'>of</span> <span m='110830'>this</span>
  <span m='110970'>formula,</span> <span m='111400'>to</span> <span
  m='111470'>figure</span> <span m='111720'>out</span> <span
  m='111830'>whether</span> <span m='112080'>or</span> <span
  m='112160'>not</span> <span m='112360'>it's</span> <span
  m='112500'>true,</span> <span m='112800'>is</span> <span
  m='112970'>what's</span> <span m='113320'>the</span> <span
  m='113400'>domain</span> <span m='113990'>that</span> <span m='114180'>x,
  y,</span> <span m='114670'>and</span> <span m='114810'>z</span> <span
  m='115000'>range</span> <span m='115320'>over</span> <span
  m='116230'>and</span> <span m='116860'>what</span> <span
  m='117230'>exactly</span> <span m='118440'>do</span> <span m='118630'>P</span>
  <span m='118920'>and</span> <span m='119110'>Q</span> <span
  m='119350'>mean?</span> </p><p><span m='121470'>Well,</span> <span
  m='122760'>I</span> <span m='122900'>want</span> <span m='123140'>to</span>
  <span m='123760'>argue</span> <span m='124340'>informally.</span> <span
  m='125130'>Let's</span> <span m='125310'>just</span> <span
  m='125550'>look</span> <span m='125720'>at</span> <span m='125790'>what</span>
  <span m='125960'>this</span> <span m='126150'>is</span> <span
  m='126230'>saying</span> <span m='126540'>together.</span> <span
  m='127160'>What</span> <span m='127350'>this</span> <span m='127530'>is</span>
  <span m='127630'>saying</span> <span m='127980'>is</span> <span
  m='128539'>suppose</span> <span m='129070'>that</span> <span
  m='129220'>for</span> <span m='129430'>everything</span> <span
  m='129910'>in</span> <span m='130000'>the</span> <span
  m='130080'>domain,</span> <span m='132610'>both</span> <span
  m='133310'>property</span> <span m='133850'>P</span> <span
  m='134040'>of</span> <span m='134140'>z</span> <span m='134370'>and</span>
  <span m='134490'>P</span> <span m='134670'>of</span> <span
  m='134780'>Q.</span> <span m='135030'>In</span> <span m='135120'>other</span>
  <span m='135240'>words,</span> <span m='135480'>everything</span> <span
  m='135750'>in</span> <span m='135840'>the</span> <span
  m='135910'>domain</span> <span m='136330'>have</span> <span
  m='136780'>property</span> <span m='137220'>P</span> <span
  m='138040'>and</span> <span m='138250'>property</span> <span
  m='138690'>Q.</span> <span m='140120'>Well,</span> <span
  m='140310'>that</span> <span m='140530'>certainly</span> <span
  m='140990'>implies</span> <span m='141610'>that</span> <span
  m='142090'>everything</span> <span m='142510'>in</span> <span
  m='142590'>the</span> <span m='142630'>domain</span> <span
  m='142970'>has</span> <span m='143150'>property</span> <span
  m='143570'>P</span> <span m='143810'>because</span> <span
  m='144160'>they</span> <span m='144280'>have</span> <span
  m='144400'>both</span> <span m='144650'>properties.</span> <span
  m='145760'>And</span> <span m='146020'>also,</span> <span
  m='146500'>everything</span> <span m='146910'>in</span> <span
  m='147000'>the</span> <span m='147100'>domain</span> <span
  m='147540'>has</span> <span m='147750'>property</span> <span
  m='148170'>Q</span> <span m='148690'>because</span> <span
  m='149040'>everything</span> <span m='149480'>has</span> <span
  m='149660'>both</span> <span m='149920'>properties.</span> </p><p><span
  m='151260'>So</span> <span m='151460'>when</span> <span m='151550'>you</span>
  <span m='151630'>say</span> <span m='151870'>it</span> <span
  m='151990'>that</span> <span m='152250'>way,</span> <span
  m='154440'>the</span> <span m='154770'>sense</span> <span
  m='155180'>that</span> <span m='155420'>this</span> <span m='155670'>is</span>
  <span m='156100'>a</span> <span m='156360'>fundamental</span> <span
  m='157140'>logical</span> <span m='157600'>fact</span> <span
  m='158490'>that</span> <span m='158820'>doesn't</span> <span
  m='159180'>depend</span> <span m='159690'>on</span> <span
  m='160890'>what</span> <span m='161120'>P</span> <span m='161310'>and</span>
  <span m='161410'>Q</span> <span m='161600'>mean</span> <span
  m='161830'>or</span> <span m='161880'>what</span> <span m='162040'>the</span>
  <span m='162130'>domain</span> <span m='162560'>is.</span> <span
  m='162730'>It's</span> <span m='162880'>just</span> <span m='163550'>a</span>
  <span m='163650'>fact</span> <span m='163970'>about</span> <span
  m='164180'>the</span> <span m='164250'>nature</span> <span
  m='164640'>of</span> <span m='164740'>the</span> <span
  m='164810'>meaning</span> <span m='166022'>of</span> <span
  m='166430'>the</span> <span m='166580'>for</span> <span m='166860'>all</span>
  <span m='167050'>universal</span> <span m='167550'>quantifier</span> <span
  m='168550'>and</span> <span m='168820'>the</span> <span
  m='168880'>connectives</span> <span m='169530'>[? AND then ?]</span> <span
  m='169810'>implies.</span> <span m='172040'>That's</span> <span
  m='172400'>how</span> <span m='172520'>we</span> <span
  m='172630'>figure</span> <span m='172970'>out</span> <span
  m='173120'>that</span> <span m='173250'>this</span> <span m='173450'>is</span>
  <span m='173570'>valid.</span> </p><p><span m='174480'>Well,</span> <span
  m='175020'>let</span> <span m='175230'>me</span> <span m='175550'>go</span>
  <span m='176120'>one</span> <span m='176550'>level</span> <span
  m='177020'>in</span> <span m='177170'>more</span> <span
  m='177370'>detail</span> <span m='178200'>to</span> <span
  m='178910'>say</span> <span m='179320'>again</span> <span
  m='179680'>what</span> <span m='179880'>I</span> <span m='179970'>just</span>
  <span m='180270'>said</span> <span m='180470'>informally</span> <span
  m='182830'>and</span> <span m='183250'>try</span> <span m='183460'>to</span>
  <span m='184120'>be</span> <span m='184490'>a</span> <span
  m='184570'>little</span> <span m='184820'>bit</span> <span
  m='185540'>more</span> <span m='185980'>precise</span> <span
  m='186420'>and</span> <span m='186540'>clear</span> <span
  m='186950'>about</span> <span m='187750'>a</span> <span
  m='187910'>reason</span> <span m='188450'>why</span> <span
  m='188750'>this</span> <span m='188950'>formula</span> <span
  m='189480'>is</span> <span m='189690'>valid.</span> <span m='190100'>So</span>
  <span m='190260'>suppose</span> <span m='190570'>I</span> <span
  m='190630'>wanted</span> <span m='190780'>to</span> <span
  m='190900'>prove</span> <span m='191250'>that</span> <span
  m='191390'>the</span> <span m='191460'>formula</span> <span
  m='191960'>is</span> <span m='192180'>valid.</span> </p><p><span
  m='193240'>Well,</span> <span m='193430'>it's</span> <span
  m='193650'>an</span> <span m='193750'>implication.</span> <span
  m='195020'>So</span> <span m='195530'>the</span> <span m='195660'>proof</span>
  <span m='196000'>strategy--</span> <span m='196540'>there</span> <span
  m='196710'>it</span> <span m='196790'>is</span> <span
  m='196920'>written</span> <span m='197130'>again--</span> <span
  m='197360'>the</span> <span m='197430'>proof</span> <span
  m='197680'>strategy</span> <span m='198300'>is</span> <span
  m='198910'>I'm</span> <span m='199070'>going</span> <span m='199200'>to</span>
  <span m='199320'>assume</span> <span m='200510'>that</span> <span
  m='200910'>the</span> <span m='201320'>if</span> <span m='201730'>part,</span>
  <span m='202470'>the</span> <span m='203160'>left-hand</span> <span
  m='203670'>side</span> <span m='203910'>of</span> <span m='203990'>the</span>
  <span m='204110'>implies</span> <span m='205480'>or</span> <span
  m='205660'>hypothesis,</span> <span m='206590'>is</span> <span
  m='206700'>true.</span> <span m='207830'>That</span> <span
  m='208060'>is,</span> <span m='208280'>that</span> <span m='208420'>for</span>
  <span m='208650'>every</span> <span m='208980'>z,</span> <span
  m='209385'>P</span> <span m='209790'>of</span> <span m='209890'>z</span> <span
  m='210090'>holds</span> <span m='210490'>and</span> <span m='210610'>Q</span>
  <span m='210810'>of</span> <span m='210910'>z</span> <span
  m='211090'>holds.</span> <span m='212070'>And</span> <span
  m='212300'>then</span> <span m='212420'>I'm</span> <span
  m='212520'>going</span> <span m='212650'>to</span> <span m='212710'>try</span>
  <span m='212920'>to</span> <span m='213030'>prove,</span> <span
  m='213470'>based</span> <span m='213810'>on</span> <span
  m='213980'>that,</span> <span m='214390'>that</span> <span
  m='215150'>the</span> <span m='215290'>consequent</span> <span
  m='215940'>holds,</span> <span m='216280'>namely</span> <span
  m='216750'>that</span> <span m='217010'>the</span> <span
  m='217120'>right-hand</span> <span m='217520'>side</span> <span
  m='217820'>for</span> <span m='218020'>all</span> <span m='218320'>x</span>
  <span m='218420'>P</span> <span m='218710'>of</span> <span m='218830'>x</span>
  <span m='219030'>and</span> <span m='219150'>for</span> <span
  m='219320'>all</span> <span m='219490'>y Q</span> <span m='219970'>of</span>
  <span m='220110'>y</span> <span m='220690'>holds.</span> </p><p><span
  m='221280'>OK.</span> <span m='222060'>How</span> <span m='222080'>am</span>
  <span m='222140'>I</span> <span m='222190'>going</span> <span
  m='222310'>to</span> <span m='222370'>do</span> <span m='222520'>that?</span>
  <span m='223700'>Well,</span> <span m='225290'>so</span> <span
  m='225520'>here's</span> <span m='225740'>the</span> <span
  m='225810'>formula</span> <span m='226670'>written</span> <span
  m='227660'>just</span> <span m='227860'>to</span> <span m='227930'>fit</span>
  <span m='228140'>on</span> <span m='228270'>the</span> <span
  m='228340'>line</span> <span m='228810'>with</span> <span
  m='229180'>the</span> <span m='229280'>concise</span> <span
  m='229780'>mathematical</span> <span m='230460'>symbols.</span> <span
  m='230870'>The</span> <span m='230960'>upside</span> <span
  m='231250'>down</span> <span m='231950'>V</span> <span m='232330'>means</span>
  <span m='232630'>AND,</span> <span m='233360'>and</span> <span
  m='233560'>the</span> <span m='233680'>arrow</span> <span
  m='234010'>means</span> <span m='234320'>implies.</span> <span
  m='235070'>And</span> <span m='235410'>we</span> <span m='235530'>want</span>
  <span m='235770'>to</span> <span m='236330'>try</span> <span
  m='236600'>to</span> <span m='237080'>prove</span> <span
  m='238890'>that</span> <span m='239070'>this</span> <span m='239240'>is</span>
  <span m='239370'>valid</span> <span m='240320'>a</span> <span
  m='240740'>little</span> <span m='241000'>bit</span> <span
  m='241170'>more</span> <span m='241320'>carefully.</span> </p><p><span
  m='243110'>Well,</span> <span m='243460'>the</span> <span
  m='243590'>strategy,</span> <span m='244090'>as</span> <span
  m='244240'>I</span> <span m='244300'>said,</span> <span m='244520'>is</span>
  <span m='244640'>to</span> <span m='244750'>assume</span> <span
  m='245050'>that</span> <span m='245210'>the</span> <span
  m='245300'>left-hand</span> <span m='245750'>side</span> <span
  m='246020'>holds. Well,</span> <span m='246450'>what's</span> <span
  m='246850'>the</span> <span m='246930'>left-hand</span> <span
  m='247320'>side</span> <span m='247590'>say?</span> <span m='247840'>It</span>
  <span m='247940'>says</span> <span m='248290'>that</span> <span
  m='248430'>for</span> <span m='248650'>every</span> <span m='249460'>z,</span>
  <span m='250200'>Q of</span> <span m='250570'>z</span> <span
  m='250870'>holds</span> <span m='251170'>and</span> <span m='251280'>P of
  z</span> <span m='251750'>holds.</span> <span m='252020'>That</span> <span
  m='252220'>means</span> <span m='252490'>that</span> <span
  m='252630'>for</span> <span m='252850'>every</span> <span
  m='253150'>possible</span> <span m='253980'>environment</span> <span
  m='255490'>that</span> <span m='255860'>assigns</span> <span
  m='256339'>a</span> <span m='256380'>value</span> <span m='256870'>to</span>
  <span m='257040'>z,</span> <span m='258050'>Q</span> <span
  m='258300'>of</span> <span m='258430'>z</span> <span m='258790'>and</span>
  <span m='258959'>P of</span> <span m='259130'>z</span> <span
  m='259410'>both</span> <span m='259740'>come</span> <span
  m='259920'>out</span> <span m='260070'>to</span> <span m='260160'>be</span>
  <span m='260269'>true.</span> </p><p><span m='261630'>Well,</span> <span
  m='262079'>suppose</span> <span m='264420'>that</span> <span
  m='264660'>the</span> <span m='264750'>environment</span> <span
  m='265260'>assigns</span> <span m='265740'>the</span> <span
  m='265800'>value</span> <span m='266150'>c</span> <span m='266640'>to</span>
  <span m='266800'>z,</span> <span m='267060'>where</span> <span
  m='267240'>c</span> <span m='267430'>is</span> <span m='267540'>some</span>
  <span m='267740'>element</span> <span m='268100'>of</span> <span
  m='268160'>the</span> <span m='268230'>domain.</span> <span
  m='269280'>Then</span> <span m='269760'>what</span> <span
  m='270100'>this</span> <span m='270300'>means</span> <span
  m='270710'>is</span> <span m='271100'>that</span> <span m='271430'>in</span>
  <span m='271580'>that</span> <span m='271770'>environment,</span> <span
  m='272450'>Q</span> <span m='272670'>of</span> <span m='272780'>z</span> <span
  m='273140'>and</span> <span m='273310'>P</span> <span m='273500'>of</span>
  <span m='273610'>z</span> <span m='273880'>is</span> <span
  m='274030'>true,</span> <span m='274720'>which</span> <span
  m='274910'>means</span> <span m='275230'>that</span> <span m='275500'>Q</span>
  <span m='275890'>of</span> <span m='276000'>c</span> <span
  m='276630'>and</span> <span m='276910'>P</span> <span m='277180'>of</span>
  <span m='277320'>c</span> <span m='278120'>holds.</span> <span
  m='279940'>But</span> <span m='280740'>Q</span> <span m='280960'>of</span>
  <span m='281050'>c</span> <span m='281250'>holds</span> <span
  m='283120'>and</span> <span m='283380'>P</span> <span m='283520'>of</span>
  <span m='283610'>c</span> <span m='283800'>holds, so</span> <span m='284100'>Q
  of</span> <span m='284350'>c</span> <span m='284780'>certainly</span> <span
  m='285160'>holds</span> <span m='285430'>all</span> <span m='285630'>by</span>
  <span m='285820'>itself.</span> <span m='287390'>All</span> <span
  m='287550'>right.</span> </p><p><span m='288070'>So</span> <span
  m='288250'>now</span> <span m='288780'>we're</span> <span m='289040'>in</span>
  <span m='289180'>an</span> <span m='289290'>interesting</span> <span
  m='289760'>situation</span> <span m='290470'>because</span> <span
  m='291180'>we</span> <span m='291420'>just</span> <span
  m='291710'>proved</span> <span m='292370'>that</span> <span
  m='293880'>Q</span> <span m='294160'>of</span> <span m='294290'>c</span> <span
  m='294550'>holds.</span> <span m='295370'>And</span> <span
  m='295970'>we</span> <span m='296210'>know</span> <span
  m='296410'>nothing</span> <span m='296900'>and</span> <span
  m='297110'>have</span> <span m='297230'>assumed</span> <span
  m='297560'>nothing</span> <span m='297870'>about</span> <span
  m='298150'>c</span> <span m='298430'>except</span> <span
  m='298770'>that</span> <span m='298880'>it's</span> <span m='299030'>an</span>
  <span m='299100'>element</span> <span m='299450'>of</span> <span
  m='299520'>the</span> <span m='299590'>domain.</span> <span
  m='300880'>c</span> <span m='301050'>could</span> <span m='301220'>have</span>
  <span m='301320'>been</span> <span m='301520'>any</span> <span
  m='301820'>element</span> <span m='302230'>of</span> <span
  m='302290'>the</span> <span m='302370'>domain,</span> <span
  m='303390'>and</span> <span m='303580'>we've</span> <span
  m='303830'>managed</span> <span m='304250'>to</span> <span
  m='304320'>prove</span> <span m='304650'>that</span> <span m='304830'>Q</span>
  <span m='304970'>of</span> <span m='305070'>c</span> <span
  m='305320'>holds.</span> <span m='305610'>So</span> <span m='305840'>it</span>
  <span m='305940'>follows</span> <span m='306960'>that,</span> <span
  m='307200'>in</span> <span m='307360'>fact,</span> <span m='308840'>we</span>
  <span m='309070'>have</span> <span m='309300'>really</span> <span
  m='309570'>proved</span> <span m='309930'>that</span> <span
  m='310080'>for</span> <span m='310320'>every</span> <span m='310680'>x</span>
  <span m='310950'>Q</span> <span m='311220'>of</span> <span m='311360'>x</span>
  <span m='311590'>holds.</span> </p><p><span m='312100'>Now,</span> <span
  m='312400'>that</span> <span m='312720'>step</span> <span m='313500'>of</span>
  <span m='313690'>saying</span> <span m='314140'>I</span> <span
  m='314260'>proved</span> <span m='314660'>it</span> <span
  m='314740'>for</span> <span m='314950'>Q</span> <span m='315320'>of</span>
  <span m='315440'>a</span> <span m='315700'>given</span> <span
  m='316010'>element</span> <span m='317330'>without</span> <span
  m='317710'>making</span> <span m='318060'>any</span> <span
  m='318310'>assumptions</span> <span m='318810'>about</span> <span
  m='319040'>the</span> <span m='319100'>given</span> <span
  m='319380'>element</span> <span m='319750'>except</span> <span
  m='320120'>that</span> <span m='320310'>it's</span> <span m='320440'>in</span>
  <span m='320550'>the</span> <span m='320630'>domain</span> <span
  m='321560'>and</span> <span m='321790'>therefore</span> <span
  m='322250'>I</span> <span m='322310'>can</span> <span
  m='322510'>conclude</span> <span m='322930'>that</span> <span
  m='323050'>it</span> <span m='323130'>holds</span> <span m='323420'>for</span>
  <span m='323580'>all</span> <span m='323830'>domain</span> <span
  m='324240'>elements,</span> <span m='324920'>[? it's  a ?]</span> <span
  m='325260'>very</span> <span m='325830'>natural</span> <span
  m='326340'>and</span> <span m='326470'>plausible</span> <span
  m='327030'>and</span> <span m='327130'>understandable</span> <span
  m='327830'>rule.</span> <span m='328150'>And</span> <span
  m='328280'>it's</span> <span m='328420'>a</span> <span m='328480'>basic</span>
  <span m='328870'>axiom</span> <span m='329270'>of</span> <span
  m='329420'>logic</span> <span m='330310'>called</span> <span
  m='331000'>UG--</span> <span m='331700'>Universal</span> <span
  m='332330'>Generalization.</span> <span m='333022'>We'll</span> <span
  m='333370'>come</span> <span m='333570'>back</span> <span m='333780'>to</span>
  <span m='333890'>it</span> <span m='333970'>in</span> <span
  m='334110'>a</span> <span m='334150'>minute.</span> </p><p><span
  m='335130'>Anyway,</span> <span m='335780'>I've</span> <span
  m='335890'>just</span> <span m='336110'>proved</span> <span
  m='336360'>that</span> <span m='336430'>for</span> <span m='336660'>all</span>
  <span m='336900'>x</span> <span m='337320'>Q of</span> <span
  m='337440'>x</span> <span m='337650'>holds.</span> <span m='338110'>And</span>
  <span m='338630'>by</span> <span m='338850'>a</span> <span
  m='338900'>completely</span> <span m='339340'>symmetric</span> <span
  m='339840'>argument,</span> <span m='341040'>for</span> <span
  m='341280'>all</span> <span m='341450'>y P</span> <span m='341840'>of</span>
  <span m='341970'>y</span> <span m='342200'>holds.</span> <span
  m='342760'>And</span> <span m='342970'>having</span> <span
  m='343250'>proved</span> <span m='343650'>both</span> <span
  m='344350'>for</span> <span m='344560'>all</span> <span m='344720'>x</span>
  <span m='345190'>Q of</span> <span m='345330'>x</span> <span
  m='345770'>and</span> <span m='346080'>for</span> <span m='346260'>all</span>
  <span m='346410'>y P</span> <span m='346800'>of</span> <span
  m='346940'>y,</span> <span m='347850'>clearly</span> <span
  m='348640'>the</span> <span m='349130'>AND</span> <span
  m='349550'>holds.</span> <span m='350430'>And</span> <span
  m='350650'>I've</span> <span m='350780'>just</span> <span
  m='351040'>proved</span> <span m='351450'>that</span> <span
  m='351610'>the</span> <span m='351700'>right-hand</span> <span
  m='352190'>side</span> <span m='352460'>of</span> <span m='352560'>this</span>
  <span m='352740'>implication</span> <span m='353980'>is</span> <span
  m='354180'>true</span> <span m='354970'>given</span> <span
  m='355340'>that</span> <span m='355510'>the</span> <span
  m='355600'>left-hand</span> <span m='356130'>side</span> <span
  m='356450'>is</span> <span m='356640'>true.</span> </p><p><span
  m='358150'>Now,</span> <span m='358730'>having</span> <span
  m='359140'>called</span> <span m='359460'>this</span> <span
  m='359630'>proving</span> <span m='360020'>validity,</span> <span
  m='360610'>let</span> <span m='360840'>me</span> <span
  m='360990'>immediately</span> <span m='361640'>clarify</span> <span
  m='362220'>that</span> <span m='362470'>this</span> <span m='362710'>is</span>
  <span m='364050'>not</span> <span m='364300'>fair</span> <span
  m='364600'>to</span> <span m='364660'>call</span> <span m='364960'>a</span>
  <span m='365000'>proof</span> <span m='365420'>because</span> <span
  m='365850'>the</span> <span m='365950'>rules</span> <span m='366260'>of</span>
  <span m='366350'>the</span> <span m='366430'>game</span> <span
  m='366740'>are</span> <span m='366820'>really</span> <span
  m='367080'>murky</span> <span m='367510'>here.</span> <span
  m='368520'>This</span> <span m='369910'>theorem,</span> <span
  m='371770'>you</span> <span m='372120'>could</span> <span
  m='372270'>read</span> <span m='372420'>it</span> <span m='372490'>as</span>
  <span m='372570'>saying</span> <span m='372820'>that</span> <span
  m='373000'>universal</span> <span m='373540'>quantification</span> <span
  m='374390'>distributes</span> <span m='375190'>over</span> <span
  m='375530'>AND</span> <span m='377030'>is</span> <span m='378830'>one</span>
  <span m='378970'>of</span> <span m='379040'>these</span> <span
  m='379210'>basic</span> <span m='379610'>valid</span> <span
  m='379940'>formulas</span> <span m='380630'>that</span> <span
  m='380880'>is</span> <span m='381050'>so</span> <span
  m='381590'>fundamental</span> <span m='382410'>and</span> <span
  m='382510'>intelligible</span> <span m='383660'>that</span> <span
  m='384070'>it's</span> <span m='384260'>hard</span> <span m='384690'>to</span>
  <span m='384820'>see</span> <span m='385320'>what</span> <span
  m='385760'>more</span> <span m='386370'>basic</span> <span
  m='386730'>things</span> <span m='387060'>you</span> <span
  m='387280'>are</span> <span m='387380'>allowed</span> <span
  m='387760'>to</span> <span m='387890'>assume</span> <span
  m='388290'>when</span> <span m='388430'>you're</span> <span
  m='388550'>proving</span> <span m='388980'>it.</span> </p><p><span
  m='389530'>And</span> <span m='389790'>this</span> <span
  m='389980'>proof</span> <span m='390330'>really</span> <span
  m='390610'>isn't</span> <span m='390960'>anything</span> <span
  m='391400'>more</span> <span m='391690'>than</span> <span
  m='392200'>translating</span> <span m='393410'>upside</span> <span
  m='393870'>down</span> <span m='394140'>A</span> <span m='395074'>and</span>
  <span m='395541'>the AND</span> <span m='396010'>symbol</span> <span
  m='396690'>into</span> <span m='396990'>English</span> <span
  m='398350'>and</span> <span m='398580'>using</span> <span
  m='398940'>ordinary</span> <span m='399790'>intuitive</span> <span
  m='400510'>rules</span> <span m='400890'>about</span> <span
  m='401160'>for</span> <span m='401410'>all</span> <span m='401640'>and</span>
  <span m='401770'>AND</span> <span m='402682'>and</span> <span
  m='403140'>using</span> <span m='403570'>that</span> <span
  m='403800'>in</span> <span m='403920'>the</span> <span
  m='403990'>proof.</span> <span m='404920'>So</span> <span
  m='405780'>this</span> <span m='406020'>is</span> <span m='406170'>a</span>
  <span m='406280'>good</span> <span m='406500'>way</span> <span
  m='406660'>to</span> <span m='406740'>think</span> <span
  m='406980'>about</span> <span m='407210'>the</span> <span
  m='407280'>formula</span> <span m='407910'>to</span> <span
  m='408030'>get</span> <span m='408170'>an</span> <span
  m='408260'>understanding</span> <span m='408920'>of</span> <span
  m='409070'>it.</span> <span m='409600'>But</span> <span m='409850'>it's</span>
  <span m='410080'>not</span> <span m='410550'>right</span> <span
  m='411020'>to</span> <span m='411170'>say</span> <span m='411480'>that</span>
  <span m='411650'>it's</span> <span m='411910'>a</span> <span
  m='412210'>proof</span> <span m='412700'>because</span> <span
  m='413100'>we</span> <span m='413250'>haven't</span> <span
  m='413880'>been</span> <span m='414310'>exactly</span> <span
  m='414940'>clear</span> <span m='415280'>about</span> <span
  m='415540'>what</span> <span m='415700'>the</span> <span
  m='415780'>proof</span> <span m='416140'>rules</span> <span
  m='416440'>are.</span> </p><p><span m='416910'>And</span> <span
  m='417200'>with</span> <span m='417340'>this</span> <span
  m='417520'>kind</span> <span m='417770'>of</span> <span
  m='417900'>really</span> <span m='418160'>fundamental</span> <span
  m='418980'>valid</span> <span m='419360'>fact,</span> <span
  m='420780'>it</span> <span m='420870'>becomes</span> <span m='421300'>a</span>
  <span m='421350'>quite</span> <span m='421660'>technical</span> <span
  m='422160'>problem</span> <span m='422610'>to</span> <span
  m='422750'>decide</span> <span m='423555'>what</span> <span
  m='423930'>a</span> <span m='423980'>proof</span> <span m='424240'>is</span>
  <span m='424340'>going</span> <span m='424480'>to</span> <span
  m='424550'>be.</span> <span m='425160'>What's</span> <span
  m='425380'>fair</span> <span m='425600'>to</span> <span
  m='425710'>assume</span> <span m='426040'>and</span> <span
  m='426160'>what's</span> <span m='426420'>fair</span> <span
  m='426920'>not</span> <span m='427180'>to</span> <span
  m='427320'>assume?</span> <span m='428000'>It</span> <span
  m='428100'>would</span> <span m='428250'>actually</span> <span
  m='428570'>be</span> <span m='428700'>perfectly</span> <span
  m='429140'>plausible</span> <span m='429640'>to</span> <span
  m='429770'>take</span> <span m='430070'>this</span> <span m='430570'>as</span>
  <span m='430770'>an</span> <span m='430850'>axiom</span> <span
  m='432330'>and</span> <span m='432540'>then</span> <span
  m='432910'>prove</span> <span m='433270'>other</span> <span
  m='433450'>things</span> <span m='433790'>as</span> <span m='433920'>a</span>
  <span m='433970'>consequent</span> <span m='434590'>of</span> <span
  m='434720'>it.</span> </p><p><span m='435920'>Anyway,</span> <span
  m='436560'>going</span> <span m='436980'>on,</span> <span
  m='438130'>let's</span> <span m='438560'>look</span> <span
  m='438810'>at</span> <span m='438930'>this</span> <span m='439360'>just</span>
  <span m='439600'>for</span> <span m='440300'>cultural</span> <span
  m='440780'>reasons.</span> <span m='441120'>We're</span> <span
  m='441220'>never</span> <span m='441480'>going</span> <span
  m='441640'>to</span> <span m='441980'>actually</span> <span
  m='442950'>ask</span> <span m='443180'>you</span> <span m='443240'>to</span>
  <span m='443310'>do</span> <span m='443480'>anything</span> <span
  m='443780'>with</span> <span m='443940'>it.</span> <span m='444060'>But</span>
  <span m='444200'>the</span> <span m='444280'>universal</span> <span
  m='444790'>generalization</span> <span m='445560'>rule</span> <span
  m='445750'>UG</span> <span m='446500'>would</span> <span m='446930'>be</span>
  <span m='447050'>stated</span> <span m='447450'>this</span> <span
  m='447670'>way</span> <span m='447920'>as</span> <span m='448080'>a</span>
  <span m='448410'>deduction</span> <span m='449040'>rule</span> <span
  m='449250'>in</span> <span m='449340'>logic.</span> <span
  m='451130'>The</span> <span m='451540'>stuff</span> <span
  m='451850'>over</span> <span m='452150'>the</span> <span m='452240'>bar</span>
  <span m='452700'>means</span> <span m='453240'>if</span> <span
  m='453420'>you've</span> <span m='453540'>proved</span> <span
  m='453980'>this,</span> <span m='454740'>then</span> <span
  m='455260'>you</span> <span m='455390'>can</span> <span
  m='456100'>conclude</span> <span m='457180'>you've</span> <span
  m='457360'>proved</span> <span m='457770'>the</span> <span
  m='457840'>stuff</span> <span m='458140'>below</span> <span
  m='458430'>the</span> <span m='458520'>bar.</span> <span m='458940'>So</span>
  <span m='459220'>what</span> <span m='459410'>this</span> <span
  m='459570'>is</span> <span m='459660'>saying</span> <span m='459980'>is</span>
  <span m='460450'>if</span> <span m='460680'>you've</span> <span
  m='460900'>proved</span> <span m='461825'>P</span> <span m='462150'>of</span>
  <span m='462270'>c</span> <span m='463090'>for</span> <span
  m='463340'>a</span> <span m='463390'>constant</span> <span
  m='463880'>c,</span> <span m='464660'>then</span> <span m='466600'>you</span>
  <span m='466670'>can</span> <span m='466820'>deduce</span> <span
  m='467360'>that</span> <span m='467520'>for</span> <span m='467750'>every
  x</span> <span m='468110'>P</span> <span m='468600'>of</span> <span
  m='468730'>x</span> <span m='468950'>holds.</span> </p><p><span
  m='470660'>And</span> <span m='470860'>this</span> <span m='471040'>is</span>
  <span m='471140'>providing</span> <span m='471930'>that</span> <span
  m='472230'>c</span> <span m='472830'>does</span> <span m='473010'>not</span>
  <span m='473310'>occur</span> <span m='473980'>in</span> <span
  m='474140'>any</span> <span m='474410'>other</span> <span
  m='474680'>part</span> <span m='475110'>of</span> <span m='475330'>the</span>
  <span m='475410'>predicate</span> <span m='475900'>P</span> <span
  m='476600'>except</span> <span m='478720'>where</span> <span
  m='479150'>you're</span> <span m='479740'>talking</span> <span
  m='480110'>explicitly</span> <span m='480740'>about</span> <span
  m='481090'>it.</span> <span m='483290'>It's</span> <span
  m='483430'>hard</span> <span m='483780'>to</span> <span m='483870'>be</span>
  <span m='483980'>more</span> <span m='484150'>precise</span> <span
  m='484540'>about</span> <span m='484790'>that</span> <span
  m='484960'>for</span> <span m='485090'>now.</span> <span
  m='485380'>Don't</span> <span m='485530'>worry</span> <span
  m='485740'>about</span> <span m='485950'>it.</span> <span
  m='486270'>But</span> <span m='486370'>the</span> <span m='486480'>idea</span>
  <span m='486810'>is</span> <span m='487010'>you're</span> <span
  m='487130'>not</span> <span m='487330'>supposed</span> <span
  m='487680'>to</span> <span m='487770'>assume</span> <span
  m='488550'>anything</span> <span m='489000'>about</span> <span
  m='489310'>c</span> <span m='489650'>other</span> <span m='489930'>than</span>
  <span m='490290'>it's</span> <span m='490530'>in</span> <span
  m='490620'>the</span> <span m='490700'>domain</span> <span
  m='491650'>and</span> <span m='491990'>that</span> <span m='492110'>it</span>
  <span m='492230'>has</span> <span m='492560'>property</span> <span
  m='493070'>P,</span> <span m='494640'>and</span> <span m='495750'>you</span>
  <span m='495900'>can</span> <span m='496160'>then</span> <span
  m='496400'>conclude</span> <span m='496890'>that</span> <span
  m='497490'>everything</span> <span m='497990'>has</span> <span
  m='498160'>property</span> <span m='498590'>P.</span> </p><p><span
  m='501930'>So</span> <span m='502610'>let's</span> <span
  m='502900'>look</span> <span m='503110'>at</span> <span m='503300'>a</span>
  <span m='504530'>similar</span> <span m='505030'>example</span> <span
  m='505460'>where</span> <span m='505630'>it</span> <span m='505730'>is</span>
  <span m='506010'>possible</span> <span m='506560'>to</span> <span
  m='506690'>prove</span> <span m='506990'>something.</span> <span
  m='507810'>Namely,</span> <span m='508260'>I</span> <span
  m='508370'>can</span> <span m='508560'>prove</span> <span
  m='508780'>that</span> <span m='508890'>something's</span> <span
  m='509230'>not</span> <span m='509460'>valid.</span> <span
  m='510470'>So</span> <span m='510600'>here's</span> <span m='510890'>a</span>
  <span m='510950'>similar-looking</span> <span m='511690'>formula.</span> <span
  m='512740'>This</span> <span m='513000'>one</span> <span
  m='513210'>says</span> <span m='513789'>that</span> <span
  m='514110'>for</span> <span m='514340'>every</span> <span m='514659'>z</span>
  <span m='515809'>if</span> <span m='516049'>P</span> <span
  m='516270'>of</span> <span m='516370'>z</span> <span m='516580'>holds</span>
  <span m='516950'>OR</span> <span m='517210'>Q</span> <span
  m='517460'>of</span> <span m='517559'>z</span> <span m='517750'>holds,</span>
  <span m='518460'>then</span> <span m='519620'>for</span> <span
  m='519909'>every x</span> <span m='520280'>P</span> <span m='520730'>of</span>
  <span m='520860'>x</span> <span m='521070'>holds</span> <span
  m='521640'>OR</span> <span m='522070'>for</span> <span m='522280'>every</span>
  <span m='522559'>y</span> <span m='522970'>Q</span> <span m='523130'>of</span>
  <span m='523250'>y</span> <span m='523490'>holds.</span> <span
  m='524750'>And</span> <span m='525180'>this</span> <span m='525550'>one</span>
  <span m='525840'>we're</span> <span m='525960'>going</span> <span
  m='526110'>to</span> <span m='526180'>show</span> <span m='526450'>is</span>
  <span m='526570'>not</span> <span m='526850'>valid.</span> </p><p><span
  m='527490'>Let's</span> <span m='527660'>think</span> <span m='527850'>about
  it</span> <span m='528110'>for</span> <span m='528260'>a</span> <span
  m='528310'>minute.</span> <span m='528580'>What</span> <span
  m='528720'>it's</span> <span m='528860'>saying</span> <span
  m='529220'>is</span> <span m='530680'>if</span> <span
  m='531280'>everything</span> <span m='531940'>has</span> <span
  m='532450'>either</span> <span m='532720'>property</span> <span
  m='533140'>P</span> <span m='533660'>or</span> <span
  m='533860'>property</span> <span m='534270'>Q,</span> <span
  m='535590'>that</span> <span m='535830'>implies</span> <span
  m='536300'>that</span> <span m='536410'>everything</span> <span
  m='536780'>has</span> <span m='536960'>property</span> <span
  m='537360'>P</span> <span m='537720'>or</span> <span
  m='538080'>everything</span> <span m='538520'>has</span> <span
  m='538690'>property</span> <span m='539105'>Q.</span> <span
  m='539520'>Well,</span> <span m='539720'>when</span> <span
  m='539820'>you</span> <span m='539920'>say</span> <span m='540010'>it</span>
  <span m='540120'>that</span> <span m='540340'>way,</span> <span
  m='540480'>it's</span> <span m='540640'>clearly</span> <span
  m='541020'>not</span> <span m='541260'>the</span> <span
  m='541330'>case.</span> <span m='542230'>But</span> <span
  m='542590'>let's</span> <span m='543280'>go</span> <span m='543660'>one</span>
  <span m='543920'>level</span> <span m='544290'>more</span> <span
  m='544490'>precise</span> <span m='545110'>and</span> <span
  m='545290'>lay</span> <span m='545500'>that</span> <span
  m='545760'>out.</span> </p><p><span m='546400'>What</span> <span
  m='546740'>I'm</span> <span m='546850'>going</span> <span m='546990'>to</span>
  <span m='547050'>do</span> <span m='547610'>is</span> <span
  m='548370'>convince</span> <span m='548880'>you</span> <span
  m='548980'>that</span> <span m='549160'>it's</span> <span
  m='549330'>not</span> <span m='549600'>valid</span> <span m='550020'>by</span>
  <span m='550190'>giving</span> <span m='550520'>you</span> <span
  m='550690'>a</span> <span m='550790'>counter-model</span> <span
  m='552190'>where</span> <span m='555060'>I</span> <span
  m='555360'>choose</span> <span m='555630'>an</span> <span
  m='555700'>interpretation.</span> <span m='556450'>I</span> <span
  m='556520'>choose</span> <span m='556770'>a</span> <span
  m='556820'>domain</span> <span m='557230'>of</span> <span
  m='557350'>discourse</span> <span m='558160'>and</span> <span
  m='559060'>predicates</span> <span m='560980'>that</span> <span
  m='561240'>P</span> <span m='561520'>and</span> <span m='561640'>Q</span>
  <span m='561890'>are</span> <span m='561980'>going</span> <span
  m='562140'>to</span> <span m='562210'>mean</span> <span m='562630'>over</span>
  <span m='562920'>that</span> <span m='563170'>domain</span> <span
  m='564430'>and</span> <span m='564870'>that</span> <span
  m='565110'>make</span> <span m='565310'>the</span> <span
  m='565390'>left-hand</span> <span m='565900'>side</span> <span
  m='566140'>of</span> <span m='566230'>this</span> <span
  m='566390'>implication</span> <span m='566970'>true.</span> <span
  m='567850'>And</span> <span m='568070'>then</span> <span m='568240'>I'm</span>
  <span m='568360'>going</span> <span m='568500'>to</span> <span
  m='568570'>show</span> <span m='568870'>you</span> <span
  m='569090'>that</span> <span m='569300'>the</span> <span
  m='569410'>right-hand</span> <span m='569880'>side</span> <span
  m='570200'>is</span> <span m='570370'>not</span> <span m='570610'>true.</span>
  <span m='571530'>And</span> <span m='571870'>that</span> <span
  m='572180'>means</span> <span m='572490'>that</span> <span
  m='572640'>in</span> <span m='572830'>that</span> <span
  m='573070'>domain</span> <span m='573600'>with</span> <span
  m='573800'>those</span> <span m='574050'>interpretations</span> <span
  m='574850'>of</span> <span m='574960'>P</span> <span m='575160'>and</span>
  <span m='575290'>Q,</span> <span m='576000'>this</span> <span
  m='576250'>implication</span> <span m='576930'>fails</span> <span
  m='577560'>so</span> <span m='577810'>it's</span> <span m='577950'>not</span>
  <span m='578160'>valid.</span> </p><p><span m='579490'>So</span> <span
  m='580700'>I</span> <span m='580870'>need</span> <span m='581080'>to</span>
  <span m='581170'>make</span> <span m='581540'>the</span> <span
  m='581670'>left-hand</span> <span m='582170'>side</span> <span
  m='582440'>true</span> <span m='582920'>and</span> <span m='582930'>the</span>
  <span m='583020'>right-hand</span> <span m='583420'>side</span> <span
  m='583690'>false.</span> <span m='584870'>Well,</span> <span
  m='585400'>I'm</span> <span m='585600'>going</span> <span m='585720'>to</span>
  <span m='585780'>choose</span> <span m='586170'>the</span> <span
  m='586250'>domain</span> <span m='586630'>of</span> <span
  m='586740'>discourse</span> <span m='587190'>to</span> <span
  m='587280'>be</span> <span m='587390'>the</span> <span
  m='587470'>simplest</span> <span m='587900'>one</span> <span
  m='588170'>that</span> <span m='588310'>will</span> <span
  m='588430'>make</span> <span m='588660'>this</span> <span
  m='588850'>false,</span> <span m='589150'>namely</span> <span
  m='590470'>let's</span> <span m='590910'>let</span> <span
  m='591290'>the</span> <span m='591420'>domain</span> <span
  m='591740'>of</span> <span m='591820'>discourse</span> <span
  m='592220'>just</span> <span m='592430'>be</span> <span m='592520'>the</span>
  <span m='592620'>numbers</span> <span m='592970'>1</span> <span
  m='593150'>and</span> <span m='593280'>2.</span> <span m='594600'>And</span>
  <span m='595310'>let</span> <span m='595820'>Q</span> <span
  m='596170'>of</span> <span m='596320'>z</span> <span m='596790'>be</span>
  <span m='596990'>the</span> <span m='597080'>predicate</span> <span
  m='597700'>that</span> <span m='597890'>says</span> <span m='598330'>z</span>
  <span m='598430'>is</span> <span m='598570'>1</span> <span
  m='599520'>and</span> <span m='600320'>P of</span> <span m='600735'>z
  be</span> <span m='601150'>the</span> <span m='601250'>predicate</span> <span
  m='601790'>that</span> <span m='601930'>says</span> <span m='602770'>z</span>
  <span m='603090'>is</span> <span m='603270'>2.</span> </p><p><span
  m='605840'>Well,</span> <span m='607750'>is</span> <span m='607980'>the</span>
  <span m='608060'>left-hand</span> <span m='608540'>side</span> <span
  m='608840'>true?</span> <span m='610380'>Yeah,</span> <span
  m='611360'>because</span> <span m='613250'>the</span> <span
  m='613470'>only</span> <span m='613730'>things</span> <span
  m='614030'>there</span> <span m='614210'>are</span> <span m='614350'>in</span>
  <span m='614420'>the</span> <span m='614490'>domain</span> <span
  m='615030'>are</span> <span m='615170'>1</span> <span m='615350'>and</span>
  <span m='615470'>2,</span> <span m='616210'>and</span> <span
  m='616570'>so</span> <span m='616830'>clearly</span> <span
  m='617380'>everything</span> <span m='617770'>in</span> <span
  m='617840'>the</span> <span m='617910'>domain</span> <span
  m='618840'>is</span> <span m='619120'>either</span> <span m='619430'>1</span>
  <span m='620080'>or</span> <span m='620270'>2.</span> <span
  m='621540'>So</span> <span m='622210'>the</span> <span
  m='622480'>antecedent</span> <span m='623190'>is</span> <span
  m='623320'>true.</span> <span m='623760'>On</span> <span m='623860'>the</span>
  <span m='623970'>other</span> <span m='624170'>hand,</span> <span
  m='625080'>is</span> <span m='625900'>everything</span> <span
  m='626430'>in</span> <span m='626530'>the</span> <span
  m='626620'>domain,</span> <span m='627350'>does</span> <span
  m='627590'>it</span> <span m='627680'>satisfy</span> <span
  m='628170'>P?</span> <span m='628540'>Is</span> <span
  m='628730'>everything</span> <span m='629150'>in</span> <span
  m='629230'>the</span> <span m='629310'>domain</span> <span
  m='629700'>equal</span> <span m='630040'>to</span> <span m='630180'>2?</span>
  <span m='630850'>No,</span> <span m='631250'>1's</span> <span
  m='631550'>not</span> <span m='631740'>equal</span> <span m='631970'>to</span>
  <span m='632090'>2.</span> </p><p><span m='633000'>What</span> <span
  m='633480'>about,</span> <span m='633960'>is</span> <span
  m='634300'>everything</span> <span m='634780'>in</span> <span
  m='634870'>the</span> <span m='634950'>domain</span> <span
  m='635600'>equal</span> <span m='635960'>to</span> <span m='636550'>1?</span>
  <span m='637550'>Is</span> <span m='637730'>it</span> <span
  m='637830'>true</span> <span m='637990'>that</span> <span
  m='638120'>for</span> <span m='638290'>all</span> <span m='638530'>y Q</span>
  <span m='638990'>of</span> <span m='639120'>y</span> <span
  m='639380'>holds?</span> <span m='640000'>No,</span> <span m='641160'>2</span>
  <span m='641470'>is</span> <span m='641650'>in</span> <span
  m='641790'>the</span> <span m='641860'>domain,</span> <span
  m='642370'>and</span> <span m='642540'>it's</span> <span m='642690'>not</span>
  <span m='642900'>equal</span> <span m='643140'>to</span> <span
  m='643270'>1.</span> <span m='643890'>And</span> <span m='644120'>so</span>
  <span m='644550'>we</span> <span m='644760'>have</span> <span
  m='644860'>found</span> <span m='646060'>exactly</span> <span
  m='646550'>what</span> <span m='646700'>we</span> <span
  m='646800'>wanted,</span> <span m='647100'>a</span> <span
  m='647130'>counter-model</span> <span m='647860'>which</span> <span
  m='648110'>makes</span> <span m='648860'>the</span> <span
  m='649140'>left-hand</span> <span m='651180'>side</span> <span
  m='651540'>of</span> <span m='651620'>the</span> <span
  m='651750'>implies</span> <span m='652220'>true</span> <span
  m='652660'>and</span> <span m='652670'>the</span> <span
  m='652760'>right-hand</span> <span m='653190'>side</span> <span
  m='653530'>of</span> <span m='653690'>the</span> <span
  m='653780'>implies</span> <span m='654730'>false.</span> </p><p><span
  m='657740'>Let</span> <span m='657870'>me</span> <span m='657940'>close</span>
  <span m='658240'>with</span> <span m='658370'>just</span> <span
  m='658580'>one</span> <span m='658780'>more</span> <span
  m='658990'>example</span> <span m='659400'>of</span> <span m='659500'>a</span>
  <span m='659790'>valid</span> <span m='660140'>formula</span> <span
  m='660580'>that</span> <span m='660710'>we</span> <span m='660830'>can</span>
  <span m='661030'>talk</span> <span m='661340'>through.</span> <span
  m='661840'>This</span> <span m='662090'>is</span> <span m='662390'>the</span>
  <span m='662680'>version</span> <span m='663130'>of</span> <span
  m='663320'>De</span> <span m='663390'>Morgan's</span> <span
  m='663900'>law</span> <span m='665050'>that</span> <span
  m='665300'>works</span> <span m='665660'>for</span> <span
  m='665790'>quantifiers.</span> <span m='666560'>Remember</span> <span
  m='666860'>De</span> <span m='667080'>Morgan's</span> <span
  m='667560'>law</span> <span m='668260'>was</span> <span m='668810'>the</span>
  <span m='668930'>thing</span> <span m='669220'>that</span> <span
  m='669350'>said</span> <span m='669670'>that</span> <span
  m='670080'>the</span> <span m='670190'>negation</span> <span
  m='671090'>of</span> <span m='671980'>P</span> <span m='672400'>or</span>
  <span m='672650'>Q</span> <span m='673240'>was</span> <span
  m='673620'>the</span> <span m='673700'>same</span> <span m='674050'>as</span>
  <span m='674260'>not</span> <span m='674550'>P</span> <span
  m='674830'>and</span> <span m='675760'>not</span> <span m='676050'>Q.</span>
  <span m='676970'>And</span> <span m='677170'>remembering</span> <span
  m='677670'>that</span> <span m='677860'>the</span> <span
  m='677940'>connection</span> <span m='678520'>between</span> <span
  m='679520'>universal</span> <span m='680060'>quantification,</span> <span
  m='680940'>[? an ?]</span> <span m='681390'>AND,</span> <span
  m='682080'>and</span> <span m='682350'>existential</span> <span
  m='682950'>quantification,</span> <span m='683670'>[? an ?]</span> <span
  m='683870'>OR,</span> <span m='684930'>it</span> <span m='685130'>turns</span>
  <span m='685470'>out</span> <span m='685720'>that</span> <span
  m='685930'>by</span> <span m='686070'>the</span> <span m='686180'>same</span>
  <span m='686450'>kind</span> <span m='686650'>of</span> <span
  m='686790'>reasoning,</span> <span m='687300'>De</span> <span
  m='687400'>Morgan's</span> <span m='687840'>law</span> <span
  m='688010'>comes</span> <span m='688340'>out</span> <span
  m='688530'>this</span> <span m='688750'>way.</span> </p><p><span
  m='688990'>It</span> <span m='689110'>says</span> <span m='689630'>that</span>
  <span m='691410'>if</span> <span m='691620'>it's</span> <span
  m='691800'>not</span> <span m='692190'>true</span> <span
  m='693280'>that</span> <span m='694180'>everything</span> <span
  m='694710'>has</span> <span m='694910'>property</span> <span
  m='695370'>P,</span> <span m='697470'>that's</span> <span
  m='697800'>possible</span> <span m='698530'>if</span> <span
  m='698730'>and</span> <span m='698860'>only</span> <span m='699280'>if</span>
  <span m='699590'>there's</span> <span m='699790'>something</span> <span
  m='700260'>that</span> <span m='700430'>doesn't</span> <span
  m='700730'>have</span> <span m='700930'>property</span> <span
  m='701310'>P.</span> <span m='702520'>And</span> <span m='702740'>so</span>
  <span m='703410'>that's</span> <span m='703740'>what</span> <span
  m='703930'>De</span> <span m='704000'>Morgan's</span> <span
  m='704450'>law</span> <span m='704700'>is.</span> <span m='705090'>It's</span>
  <span m='705260'>another</span> <span m='705530'>thing</span> <span
  m='705690'>you</span> <span m='705770'>could</span> <span
  m='705910'>take</span> <span m='706120'>as</span> <span m='706220'>an</span>
  <span m='706310'>axiom,</span> <span m='706960'>or</span> <span
  m='707220'>you</span> <span m='707310'>could</span> <span
  m='707470'>try</span> <span m='707680'>one</span> <span m='707840'>of</span>
  <span m='707910'>these</span> <span m='708100'>hand-waving</span> <span
  m='708670'>proofs</span> <span m='708990'>about.</span> <span
  m='709820'>But</span> <span m='710140'>I</span> <span m='710270'>think</span>
  <span m='710560'>I've</span> <span m='710650'>said</span> <span
  m='710830'>enough</span> <span m='711320'>to</span> <span
  m='711580'>give</span> <span m='711770'>you</span> <span
  m='711930'>that</span> <span m='712130'>example</span> <span
  m='713170'>of</span> <span m='714100'>another</span> <span
  m='714500'>interesting</span> <span m='714990'>valid</span> <span
  m='715310'>formula,</span> <span m='715940'>and</span> <span
  m='716160'>we'll</span> <span m='716230'>stop</span> <span
  m='716630'>with</span> <span m='716730'>that.</span> </p>
embedded_media:
  - uid: 53d0690d82ca0c8a60c06ff08c075d1d
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 7bb6580f8d4eea7ea00e83d803839c74
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 38e2c54c995b141cd1d425726f6cc14b
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: T1AtlGrCoU8
  - uid: 9e72757d65ac3d704913f2de45a2f2a5
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/T1AtlGrCoU8/default.jpg'
  - uid: 91e39caf502b5402d0787b80c3b1c1c2
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: T1AtlGrCoU8
  - uid: 210680ba626ffa0df323b5555676b4e9
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: T1AtlGrCoU8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp3-1/vertical-7b4a11771cb1/predicate-logic-2/T1AtlGrCoU8.srt
  - uid: 2ec2efeecafdad1da497f080c8e3b002
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: T1AtlGrCoU8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp3-1/vertical-7b4a11771cb1/predicate-logic-2/T1AtlGrCoU8.pdf
  - uid: 0dc5f974618feec523f0f0f2be9044ce
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: de58d8bef4e8a24762e2401591bd60ce
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d6ea483d4a582cf84f6f7cc41fcc5c7a
    parent_uid: 636bda1f72476bc39b2099c6202fbd0d
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_predicatelogic2_ipod.mp4
type: courses
layout: video
---
