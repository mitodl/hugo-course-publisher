---
title: Equivalence Relations
uid: 2656fa235bd03a7c5e7fa9b97b363c91
parent_uid: 46dc2fd499548c08b14bda4cb29a9728
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-c6c01eb0d061/equivalence-relations
short_url: equivalence-relations
inline_embed_id: 63821540equivalencerelations74968039
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='520'>Equivalence</span> <span m='1140'>relations</span> <span
  m='1880'>are</span> <span m='2170'>another</span> <span m='2480'>kind</span>
  <span m='2740'>of</span> <span m='3110'>binary</span> <span
  m='3490'>relation</span> <span m='3875'>on a</span> <span m='4260'>set</span>
  <span m='5720'>which</span> <span m='6210'>play</span> <span m='6420'>a</span>
  <span m='6470'>crucial</span> <span m='6890'>role</span> <span
  m='7470'>in</span> <span m='8260'>mathematics</span> <span m='9440'>and
  in</span> <span m='9680'>computer</span> <span m='10010'>science</span> <span
  m='10270'>in</span> <span m='10340'>particular.</span> <span
  m='11520'>And</span> <span m='11890'>they</span> <span m='12020'>can</span>
  <span m='12160'>also</span> <span m='12380'>be</span> <span
  m='12540'>explained</span> <span m='13030'>both</span> <span
  m='13290'>in</span> <span m='13390'>terms</span> <span m='13770'>of</span>
  <span m='14410'>digraphs</span> <span m='15220'>and</span> <span
  m='15520'>in</span> <span m='15640'>terms</span> <span m='16000'>of</span>
  <span m='16079'>axioms.</span> </p><p><span m='16630'>So</span> <span
  m='16760'>let's</span> <span m='16970'>begin</span> <span
  m='17270'>with</span> <span m='17390'>a</span> <span m='17470'>digraph</span>
  <span m='17990'>explanation</span> <span m='19250'>of an</span> <span
  m='19460'>equivalence</span> <span m='19910'>relation.</span> <span
  m='20840'>And</span> <span m='21693'>the</span> <span m='22580'>kind</span>
  <span m='22790'>of</span> <span m='22880'>relation</span> <span
  m='23250'>that's</span> <span m='23390'>an</span> <span
  m='23450'>equivalence</span> <span m='23920'>relation</span> <span
  m='24300'>is</span> <span m='24410'>the</span> <span m='24500'>relation</span>
  <span m='24980'>of</span> <span m='25130'>there</span> <span
  m='25260'>being</span> <span m='25610'>a</span> <span m='25740'>walk</span>
  <span m='26080'>in</span> <span m='26170'>both</span> <span
  m='26470'>directions</span> <span m='27590'>between</span> <span
  m='28220'>two</span> <span m='28390'>vertices.</span> <span
  m='29450'>So</span> <span m='29740'>if</span> <span m='29960'>there's</span>
  <span m='30210'>a</span> <span m='30350'>walk</span> <span
  m='30710'>between</span> <span m='31080'>vertex</span> <span
  m='31570'>u</span> <span m='31800'>and</span> <span m='31910'>vertex</span>
  <span m='32400'>v</span> <span m='32940'>and</span> <span
  m='33180'>conversely</span> <span m='33880'>there's</span> <span
  m='34110'>a</span> <span m='34190'>walk</span> <span m='34900'>from</span>
  <span m='35150'>vertex</span> <span m='35430'>v</span> <span
  m='35710'>back</span> <span m='36270'>to</span> <span m='36370'>vertex</span>
  <span m='36890'>u,</span> <span m='37910'>then</span> <span m='38830'>u</span>
  <span m='38990'>and v</span> <span m='39130'>are</span> <span
  m='39340'>said</span> <span m='39530'>to</span> <span m='39610'>be</span>
  <span m='39720'>strongly</span> <span m='40370'>connected,</span> <span
  m='41710'>and</span> <span m='42010'>strongly</span> <span
  m='42520'>connected</span> <span m='42970'>is</span> <span
  m='43100'>going</span> <span m='43240'>to</span> <span m='43280'>be</span>
  <span m='43420'>an</span> <span m='43500'>example</span> <span
  m='43940'>of</span> <span m='44050'>an</span> <span
  m='44130'>equivalence</span> <span m='44650'>relation.</span> <span
  m='45500'>So</span> <span m='45700'>in</span> <span m='45800'>terms</span>
  <span m='46090'>of</span> <span m='46250'>the</span> <span
  m='46940'>walk</span> <span m='47850'>relation,</span> <span
  m='48510'>including</span> <span m='49020'>0-length</span> <span
  m='49540'>walks,</span> <span m='50410'>the</span> <span
  m='50840'>relation</span> <span m='51360'>we're</span> <span
  m='51470'>talking</span> <span m='51790'>about</span> <span
  m='52010'>is</span> <span m='52110'>u G*</span> <span m='52900'>v</span> <span
  m='53590'>and</span> <span m='53830'>v G*</span> <span m='54205'>u.</span>
  </p><p><span m='56160'>Now,</span> <span m='56370'>as</span> <span
  m='56520'>a</span> <span m='56610'>property</span> <span m='57180'>of</span>
  <span m='57320'>relations,</span> <span m='58490'>this</span> <span
  m='58780'>has</span> <span m='58990'>a</span> <span m='59020'>name.</span>
  <span m='59530'>It's</span> <span m='59770'>called</span> <span
  m='60760'>symmetry.</span> <span m='61470'>So a</span> <span
  m='61740'>relation</span> <span m='62320'>R</span> <span m='62600'>on</span>
  <span m='62680'>a</span> <span m='62740'>set</span> <span m='63040'>A</span>
  <span m='63160'>is</span> <span m='63300'>symmetric</span> <span
  m='63920'>if</span> <span m='64080'>and</span> <span m='64180'>only</span>
  <span m='64510'>if</span> <span m='65000'>a</span> <span m='65230'>R b</span>
  <span m='65710'>implies</span> <span m='66580'>b</span> <span m='66880'>R
  a,</span> <span m='67230'>and</span> <span m='67780'>the</span> <span
  m='67850'>first</span> <span m='68160'>remark</span> <span m='68480'>is</span>
  <span m='68810'>that the</span> <span m='68900'>strongly</span> <span
  m='69400'>connected</span> <span m='69940'>relation</span> <span
  m='71120'>is</span> <span m='71370'>symmetric.</span> </p><p><span
  m='72870'>An</span> <span m='72990'>equivalence</span> <span
  m='73520'>relation</span> <span m='74430'>is</span> <span m='74790'>a</span>
  <span m='75150'>symmetric</span> <span m='75770'>relation</span> <span
  m='76050'>that is</span> <span m='76250'>transitive</span> <span
  m='76860'>and</span> <span m='77010'>reflexive.</span> <span
  m='78230'>And</span> <span m='78610'>again,</span> <span m='79030'>we</span>
  <span m='79180'>have</span> <span m='79430'>immediately</span> <span
  m='80470'>that</span> <span m='81390'>the</span> <span m='82800'>walk</span>
  <span m='83180'>relation--</span> <span m='84820'>the</span> <span
  m='85420'>mutual</span> <span m='85940'>walk</span> <span
  m='86200'>relation,</span> <span m='86580'>the</span> <span
  m='86680'>two-way</span> <span m='87020'>walk</span> <span
  m='87330'>relation</span> <span m='88130'>or</span> <span
  m='88270'>strongly</span> <span m='88620'>connected</span> <span
  m='88990'>relation</span> <span m='89500'>in</span> <span m='89680'>a</span>
  <span m='89750'>digraph</span> <span m='90660'>is</span> <span
  m='90870'>an</span> <span m='90950'>equivalence</span> <span
  m='91460'>relation.</span> <span m='91920'>Because</span> <span
  m='92760'>clearly</span> <span m='93120'>if</span> <span
  m='93240'>there's</span> <span m='93430'>two</span> <span m='93580'>way</span>
  <span m='93780'>paths</span> <span m='94180'>between</span> <span
  m='94540'>u</span> <span m='94710'>and</span> <span m='94810'>v</span> <span
  m='95030'>and</span> <span m='95130'>between</span> <span m='95460'>and</span>
  <span m='96160'>v</span> <span m='96310'>and</span> <span m='97780'>w,</span>
  <span m='98170'>then</span> <span m='98370'>there's</span> <span
  m='98540'>one</span> <span m='98740'>between</span> <span m='99140'>u</span>
  <span m='99390'>and</span> <span m='99690'>w</span> <span m='100550'>by</span>
  <span m='100670'>going</span> <span m='100960'>for</span> <span
  m='101130'>u</span> <span m='101250'>to</span> <span m='101340'>v to</span>
  <span m='101800'>w</span> <span m='102190'>and</span> <span
  m='102330'>back.</span> <span m='103330'>Likewise,</span> <span
  m='104270'>there</span> <span m='104550'>is</span> <span m='104700'>a</span>
  <span m='105020'>length</span> <span m='105320'>0</span> <span
  m='105660'>walk</span> <span m='105930'>from</span> <span
  m='106100'>any</span> <span m='106280'>element</span> <span
  m='106535'>to</span> <span m='106790'>itself.</span> <span
  m='107640'>And</span> <span m='108310'>by</span> <span
  m='108440'>definition,</span> <span m='110900'>strong</span> <span
  m='111150'>connectedness</span> <span m='112190'>is</span> <span
  m='112290'>symmetric.</span> </p><p><span m='112920'>So</span> <span
  m='113880'>the</span> <span m='113970'>strong</span> <span
  m='114360'>connectedness</span> <span m='115530'>relation</span> <span
  m='115980'>in</span> <span m='116100'>any</span> <span
  m='116300'>digraph</span> <span m='116880'>is</span> <span
  m='117040'>an</span> <span m='117100'>equivalence</span> <span
  m='117620'>relation.</span> <span m='118770'>And</span> <span
  m='119610'>the</span> <span m='119710'>theorem</span> <span
  m='120120'>is,</span> <span m='120370'>conversely,</span> <span
  m='121520'>that</span> <span m='122120'>any</span> <span
  m='122820'>equivalence</span> <span m='123350'>relation,</span> <span
  m='123800'>anything</span> <span m='124100'>that's</span> <span
  m='124290'>an</span> <span m='124360'>equivalence</span> <span
  m='124860'>relation,</span> <span m='125800'>is</span> <span
  m='126270'>the</span> <span m='126400'>strongly</span> <span
  m='126960'>connected</span> <span m='127820'>relation</span> <span
  m='128350'>of</span> <span m='128419'>some</span> <span
  m='128680'>digraph.</span> <span m='129190'>The</span> <span
  m='129270'>proof</span> <span m='129490'>is</span> <span
  m='129590'>trivial.</span> <span m='130470'>It's</span> <span
  m='130669'>the</span> <span m='130759'>strongly</span> <span
  m='131140'>connected</span> <span m='131570'>relation</span> <span
  m='131970'>of</span> <span m='132060'>itself.</span> </p><p><span
  m='134280'>OK.</span> <span m='135010'>Some</span> <span
  m='135310'>examples</span> <span m='135890'>of</span> <span
  m='135990'>equivalence</span> <span m='136430'>relations</span> <span
  m='136780'>to</span> <span m='136940'>see</span> <span m='137120'>why</span>
  <span m='137330'>they're</span> <span m='137500'>so</span> <span
  m='137670'>basic</span> <span m='138530'>is</span> <span
  m='139000'>that</span> <span m='139430'>the</span> <span
  m='139540'>most</span> <span m='139730'>fundamental</span> <span
  m='140280'>one is</span> <span m='140510'>equality.</span> <span
  m='141660'>Obviously,</span> <span m='142350'>equality</span> <span
  m='142820'>is</span> <span m='142970'>symmetric</span> <span
  m='143520'>and</span> <span m='143660'>reflexive</span> <span
  m='144040'>and</span> <span m='144420'>transitive,</span> <span
  m='145100'>and</span> <span m='145430'>so</span> <span m='145690'>it's</span>
  <span m='145830'>an</span> <span m='145880'>equivalence</span> <span
  m='146430'>relation.</span> <span m='147180'>Another</span> <span
  m='147420'>one</span> <span m='147560'>that</span> <span
  m='147660'>we've</span> <span m='147830'>seen</span> <span
  m='148190'>is</span> <span m='148710'>congruence</span> <span
  m='149170'>mod</span> <span m='149450'>n,</span> <span m='150360'>which</span>
  <span m='150980'>you</span> <span m='151110'>could</span> <span
  m='151260'>also</span> <span m='151600'>check</span> <span
  m='152160'>is</span> <span m='153380'>symmetric</span> <span
  m='153950'>and</span> <span m='154100'>transitive</span> <span
  m='154940'>and</span> <span m='156630'>reflexive.</span> <span
  m='157880'>And</span> <span m='158120'>finally,</span> <span
  m='158930'>another</span> <span m='159250'>relation</span> <span
  m='159650'>would</span> <span m='159800'>be</span> <span
  m='160540'>that</span> <span m='160970'>two</span> <span
  m='161160'>sets</span> <span m='161500'>are</span> <span m='161580'>the</span>
  <span m='161670'>same</span> <span m='161920'>size,</span> <span
  m='162270'>providing</span> <span m='162680'>they're</span> <span
  m='162790'>finite</span> <span m='163300'>sets.</span> <span
  m='164300'>And</span> <span m='164480'>another</span> <span
  m='164820'>example</span> <span m='165290'>would</span> <span
  m='165480'>be</span> <span m='166060'>a</span> <span m='166170'>bunch</span>
  <span m='166460'>of</span> <span m='166570'>objects</span> <span
  m='167050'>having</span> <span m='167340'>the</span> <span
  m='167440'>same</span> <span m='167750'>color.</span> <span
  m='168110'>Two</span> <span m='168300'>objects</span> <span
  m='168600'>have</span> <span m='168700'>the</span> <span
  m='168770'>same</span> <span m='169140'>color</span> <span
  m='170180'>is</span> <span m='170970'>a</span> <span
  m='171290'>relation</span> <span m='172160'>among</span> <span
  m='172610'>objects that</span> <span m='173110'>have</span> <span
  m='173350'>color</span> <span m='174310'>that</span> <span
  m='174440'>is</span> <span m='174640'>symmetric</span> <span m='175080'>and
  transitive</span> <span m='176000'>and</span> <span
  m='176490'>reflexive,</span> <span m='177100'>so</span> <span
  m='177320'>it's</span> <span m='177470'>an</span> <span
  m='177550'>equivalence</span> <span m='178040'>relation.</span> </p><p><span
  m='180840'>Let's</span> <span m='181150'>illustrate</span> <span
  m='181650'>some</span> <span m='181830'>of</span> <span
  m='181880'>these</span> <span m='182350'>axioms</span> <span
  m='182980'>that</span> <span m='183100'>we</span> <span m='183280'>have</span>
  <span m='184220'>in</span> <span m='184350'>terms</span> <span
  m='184590'>of</span> <span m='184680'>graphs.</span> <span m='185140'>It
  can</span> <span m='185270'>be</span> <span m='185410'>helpful</span> <span
  m='185810'>to</span> <span m='185930'>remember</span> <span
  m='186330'>them.</span> </p><p><span m='186540'>So</span> <span
  m='186760'>reflexive</span> <span m='187580'>means</span> <span
  m='188060'>that</span> <span m='188160'>when</span> <span
  m='188270'>you</span> <span m='188380'>look</span> <span m='188550'>at</span>
  <span m='188620'>a</span> <span m='188700'>digraph,</span> <span
  m='189280'>it's</span> <span m='189430'>reflexive</span> <span
  m='190050'>when</span> <span m='190220'>there's</span> <span
  m='190440'>a</span> <span m='190500'>little</span> <span
  m='190840'>self</span> <span m='191210'>loop</span> <span
  m='191840'>from</span> <span m='192140'>every</span> <span
  m='192490'>vertex</span> <span m='193030'>to</span> <span
  m='193180'>itself.</span> <span m='193670'>So</span> <span
  m='193870'>there's</span> <span m='194110'>a</span> <span
  m='194220'>length</span> <span m='194560'>1</span> <span
  m='195930'>path</span> <span m='196410'>or</span> <span m='196910'>an</span>
  <span m='197120'>edge</span> <span m='197450'>from</span> <span
  m='197630'>vertex</span> <span m='198140'>to</span> <span
  m='198270'>itself</span> <span m='198750'>in</span> <span
  m='198950'>reflexive</span> <span m='200160'>graphs.</span> </p><p><span
  m='201390'>Transitive</span> <span m='201890'>means</span> <span
  m='202170'>that</span> <span m='202270'>whenever</span> <span
  m='202550'>you</span> <span m='202650'>have</span> <span m='203530'>two</span>
  <span m='203790'>edges</span> <span m='204210'>connecting</span> <span
  m='205670'>one</span> <span m='205960'>vertex</span> <span
  m='206390'>to</span> <span m='206500'>another,</span> <span
  m='206760'>there's</span> <span m='206960'>a</span> <span
  m='207020'>path</span> <span m='207290'>of</span> <span
  m='207400'>length</span> <span m='207630'>2</span> <span
  m='207860'>from</span> <span m='208380'>one</span> <span
  m='208570'>place</span> <span m='208860'>to</span> <span
  m='208980'>another</span> <span m='209490'>that</span> <span
  m='209650'>in</span> <span m='209720'>fact</span> <span m='210010'>is</span>
  <span m='210120'>an</span> <span m='210220'>edge</span> <span
  m='210540'>from</span> <span m='210750'>that</span> <span
  m='210980'>place</span> <span m='211670'>to</span> <span m='211840'>its</span>
  <span m='212020'>target.</span> <span m='212800'>And</span> <span
  m='212970'>of</span> <span m='213050'>course</span> <span m='213360'>as</span>
  <span m='213500'>we</span> <span m='213630'>said,</span> <span
  m='214210'>once</span> <span m='215090'>there</span> <span
  m='215410'>is</span> <span m='215540'>an</span> <span m='216330'>edge</span>
  <span m='216490'>wherever</span> <span m='216810'>there's</span> <span
  m='217010'>a</span> <span m='217070'>path</span> <span m='217330'>of</span>
  <span m='217450'>length</span> <span m='217680'>2,</span> <span
  m='217920'>it</span> <span m='218110'>follows</span> <span
  m='218330'>by</span> <span m='218480'>induction</span> <span
  m='218950'>that</span> <span m='219110'>there's</span> <span
  m='219300'>an</span> <span m='219420'>edge</span> <span
  m='219630'>wherever</span> <span m='219940'>there's</span> <span
  m='220160'>a</span> <span m='220210'>path</span> <span m='220500'>of</span>
  <span m='220600'>any</span> <span m='220810'>length,</span> <span
  m='221090'>and that's</span> <span m='221340'>what</span> <span
  m='221430'>transitive</span> <span m='222010'>means.</span> </p><p><span
  m='222870'>Asymmetric</span> <span m='223600'>means</span> <span
  m='223920'>that</span> <span m='224030'>whenever</span> <span
  m='224330'>you</span> <span m='224440'>have</span> <span m='225010'>an</span>
  <span m='225210'>edge</span> <span m='225500'>from</span> <span
  m='225740'>one</span> <span m='225970'>vertex</span> <span
  m='226420'>to</span> <span m='226570'>another</span> <span
  m='226910'>there</span> <span m='227160'>is</span> <span m='227330'>no</span>
  <span m='227620'>edge</span> <span m='227950'>back.</span> <span
  m='228850'>So</span> <span m='229050'>in</span> <span
  m='229150'>particular,</span> <span m='230190'>if</span> <span
  m='230320'>I</span> <span m='230380'>have</span> <span m='230630'>an</span>
  <span m='230730'>edge</span> <span m='231040'>from</span> <span
  m='231270'>this</span> <span m='231490'>vertex</span> <span
  m='231980'>to</span> <span m='232070'>that</span> <span
  m='232370'>vertex</span> <span m='232780'>in</span> <span
  m='232890'>blue,</span> <span m='233220'>there</span> <span
  m='233430'>is</span> <span m='233550'>no</span> <span m='234070'>edge</span>
  <span m='235190'>that</span> <span m='235310'>goes</span> <span
  m='235580'>back</span> <span m='236000'>in</span> <span m='236110'>the</span>
  <span m='236240'>other</span> <span m='236380'>direction.</span> <span
  m='236940'>Nor</span> <span m='237390'>is</span> <span m='237680'>there</span>
  <span m='237990'>ever</span> <span m='238830'>a</span> <span
  m='239170'>self</span> <span m='239570'>loop</span> <span m='239970'>in</span>
  <span m='240240'>an asymmetric</span> <span m='240900'>graph.</span>
  </p><p><span m='242850'>And</span> <span m='243280'>finally,</span> <span
  m='243690'>in</span> <span m='244100'>a</span> <span
  m='244170'>symmetric</span> <span m='244890'>graph,</span> <span
  m='245590'>wherever</span> <span m='245980'>there's</span> <span
  m='246210'>an</span> <span m='246300'>edge,</span> <span
  m='246800'>there's</span> <span m='247000'>an</span> <span
  m='247100'>edge</span> <span m='247350'>that</span> <span
  m='247500'>goes</span> <span m='247740'>back</span> <span
  m='247980'>the</span> <span m='248140'>other</span> <span
  m='248350'>way.</span> </p><p><span m='249240'>So</span> <span
  m='249830'>that</span> <span m='250070'>can</span> <span
  m='250210'>help</span> <span m='250490'>you</span> <span
  m='250600'>maybe</span> <span m='251330'>remember</span> <span
  m='251740'>what</span> <span m='251940'>these</span> <span
  m='252130'>properties</span> <span m='252670'>mean.</span> </p><p><span
  m='254210'>Now</span> <span m='254910'>again,</span> <span
  m='255420'>equivalence</span> <span m='255950'>relations,</span> <span
  m='256380'>besides</span> <span m='256779'>being</span> <span
  m='256980'>represented</span> <span m='257620'>in</span> <span
  m='257740'>terms</span> <span m='258089'>of</span> <span m='258550'>the</span>
  <span m='258690'>strongly</span> <span m='259200'>connected</span> <span
  m='259670'>relation</span> <span m='260190'>of</span> <span
  m='260310'>a</span> <span m='260370'>digraph,</span> <span
  m='260930'>can</span> <span m='261100'>be</span> <span
  m='261230'>represented</span> <span m='262029'>in</span> <span
  m='262379'>two</span> <span m='262730'>other</span> <span
  m='263040'>very</span> <span m='263330'>natural</span> <span
  m='263910'>ways</span> <span m='264220'>that</span> <span
  m='264350'>really</span> <span m='264640'>explains</span> <span
  m='265420'>where</span> <span m='265630'>they</span> <span
  m='265780'>come</span> <span m='266040'>from and</span> <span
  m='266430'>what</span> <span m='266510'>their</span> <span
  m='266640'>properties</span> <span m='267220'>are.</span> </p><p><span
  m='268050'>So</span> <span m='268260'>whenever</span> <span
  m='268650'>you</span> <span m='268750'>have</span> <span m='269010'>a</span>
  <span m='269090'>total</span> <span m='269410'>function</span> <span
  m='269880'>f</span> <span m='270190'>on</span> <span m='270350'>a</span> <span
  m='270400'>set</span> <span m='270670'>A,</span> <span m='271702'>it</span>
  <span m='272190'>defines</span> <span m='272660'>an</span> <span
  m='272750'>equivalence</span> <span m='273290'>relation</span> <span
  m='273900'>on the</span> <span m='273970'>set</span> <span
  m='274270'>A.</span> <span m='274800'>Namely,</span> <span
  m='275260'>if</span> <span m='275420'>f</span> <span m='275930'>is</span>
  <span m='276090'>a</span> <span m='276180'>total</span> <span
  m='276460'>function</span> <span m='276820'>from</span> <span
  m='277340'>domain</span> <span m='277730'>A to</span> <span
  m='278120'>codomain</span> <span m='278780'>B,</span> <span
  m='279500'>then</span> <span m='279680'>we</span> <span m='279810'>can</span>
  <span m='279970'>define</span> <span m='280780'>a</span> <span
  m='281040'>relation</span> <span m='281490'>we</span> <span
  m='281610'>can</span> <span m='281770'>call</span> <span
  m='281980'>equivalence</span> <span m='282650'>sub</span> <span
  m='282760'>f</span> <span m='283320'>on</span> <span m='283530'>the</span>
  <span m='283610'>set A</span> <span m='283950'>by</span> <span
  m='284290'>the</span> <span m='284430'>rule</span> <span
  m='285090'>that</span> <span m='285270'>two</span> <span
  m='285490'>elements</span> <span m='286390'>are</span> <span
  m='286580'>equivalents</span> <span m='287190'>of</span> <span
  m='287300'>f</span> <span m='287830'>if</span> <span m='288040'>and</span>
  <span m='288150'>only</span> <span m='288500'>if</span> <span
  m='289090'>they</span> <span m='289260'>have</span> <span
  m='289500'>the</span> <span m='289580'>same</span> <span
  m='289880'>image</span> <span m='290190'>under</span> <span
  m='290460'>f--</span> <span m='290750'>they hit</span> <span
  m='290880'>the</span> <span m='290970'>same</span> <span
  m='291210'>thing.</span> <span m='291430'>That</span> <span
  m='291590'>is,</span> <span m='291940'>A is</span> <span
  m='292290'>equivalent</span> <span m='292555'>sub</span> <span
  m='292820'>f</span> <span m='292950'>to</span> <span m='293250'>A</span> <span
  m='293380'>prime</span> <span m='294160'>if</span> <span m='294370'>and</span>
  <span m='294460'>only</span> <span m='294790'>if</span> <span
  m='295300'>f</span> <span m='295540'>of</span> <span m='295760'>a</span> <span
  m='296280'>is</span> <span m='296510'>equal</span> <span m='296830'>to</span>
  <span m='296940'>f</span> <span m='297160'>of</span> <span m='297310'>a</span>
  <span m='297430'>prime.</span> <span m='298240'>And</span> <span
  m='298660'>again,</span> <span m='299400'>equivalence</span> <span
  m='299950'>sub</span> <span m='300090'>f</span> <span
  m='300510'>immediately</span> <span m='301110'>inherits</span> <span
  m='301540'>the</span> <span m='301630'>properties</span> <span
  m='302090'>of</span> <span m='302180'>equality,</span> <span
  m='303170'>which</span> <span m='303450'>makes</span> <span
  m='303800'>it</span> <span m='303960'>an</span> <span
  m='304100'>equivalence</span> <span m='304620'>relation.</span> </p><p><span
  m='306050'>And</span> <span m='306170'>the</span> <span
  m='306260'>theorem</span> <span m='306570'>that</span> <span
  m='306680'>we</span> <span m='306820'>have</span> <span m='307090'>is</span>
  <span m='307680'>that</span> <span m='307930'>every</span> <span
  m='308320'>relation</span> <span m='308870'>R</span> <span
  m='309240'>on</span> <span m='309350'>a</span> <span m='309410'>set A</span>
  <span m='311040'>is</span> <span m='311300'>an</span> <span
  m='311470'>equivalence</span> <span m='312050'>relation</span> <span
  m='312820'>if</span> <span m='313040'>and</span> <span m='313160'>only</span>
  <span m='313550'>if it</span> <span m='313680'>in</span> <span
  m='313900'>fact</span> <span m='314350'>is</span> <span
  m='314500'>equal</span> <span m='314920'>to</span> <span
  m='315510'>equivalence</span> <span m='316200'>sub</span> <span
  m='316320'>f</span> <span m='316590'>for</span> <span m='316720'>some</span>
  <span m='316990'>function</span> <span m='317660'>f.</span> </p><p><span
  m='319140'>Let's</span> <span m='319300'>illustrate</span> <span
  m='319770'>that.</span> <span m='319940'>We</span> <span
  m='320090'>already</span> <span m='320400'>remembered</span> <span
  m='321280'>that</span> <span m='321780'>congruence</span> <span
  m='322310'>mod</span> <span m='322560'>n</span> <span m='322920'>can</span>
  <span m='323070'>be</span> <span m='323230'>understood</span> <span
  m='323590'>as</span> <span m='323680'>equivalence</span> <span
  m='324280'>sub</span> <span m='324410'>f,</span> <span m='325210'>where</span>
  <span m='325670'>the</span> <span m='325830'>mapping</span> <span
  m='326310'>is</span> <span m='326410'>just</span> <span m='326640'>map</span>
  <span m='326870'>things to</span> <span m='327130'>remainders.</span> <span
  m='328000'>Two</span> <span m='328670'>numbers</span> <span
  m='329180'>are</span> <span m='329750'>congruent</span> <span
  m='330220'>mod</span> <span m='330510'>n</span> <span m='330780'>if</span>
  <span m='330990'>and</span> <span m='331090'>only</span> <span
  m='331450'>if</span> <span m='331640'>they</span> <span m='331770'>have</span>
  <span m='332030'>the</span> <span m='332120'>same</span> <span
  m='332450'>remainder</span> <span m='332795'>on</span> <span
  m='333140'>division</span> <span m='333610'>by</span> <span
  m='333790'>n.</span> <span m='335200'>So</span> <span m='335410'>map</span>
  <span m='335840'>a</span> <span m='335890'>number</span> <span
  m='336350'>a</span> <span m='336750'>to</span> <span m='337130'>f</span> <span
  m='337250'>of</span> <span m='337490'>k,</span> <span m='337750'>equal</span>
  <span m='338140'>its</span> <span m='338560'>remainder,</span> <span
  m='339600'>and</span> <span m='340170'>we</span> <span m='340390'>have</span>
  <span m='340580'>found</span> <span m='341080'>the</span> <span
  m='341240'>equivalence</span> <span m='341760'>sub</span> <span
  m='341880'>f</span> <span m='342060'>representation</span> <span
  m='343620'>of</span> <span m='343770'>congruence,</span> <span
  m='344360'>which</span> <span m='344570'>is</span> <span
  m='344660'>another</span> <span m='344950'>way</span> <span
  m='345120'>to</span> <span m='345220'>verify</span> <span
  m='345780'>that</span> <span m='345970'>congruence</span> <span
  m='346670'>is</span> <span m='346840'>an</span> <span
  m='346930'>equivalence</span> <span m='347420'>relation.</span> </p><p><span
  m='349650'>Finally,</span> <span m='350500'>whenever</span> <span
  m='350870'>you</span> <span m='350960'>have</span> <span m='351180'>a</span>
  <span m='351240'>partition</span> <span m='351830'>of</span> <span
  m='351950'>a</span> <span m='352000'>set,</span> <span m='352470'>you</span>
  <span m='352630'>can</span> <span m='352790'>define an</span> <span
  m='353160'>equivalence</span> <span m='353650'>relation.</span> <span
  m='354050'>So</span> <span m='354220'>a</span> <span
  m='354290'>partition</span> <span m='354780'>of</span> <span
  m='354880'>a</span> <span m='354940'>set</span> <span m='355760'>cuts</span>
  <span m='356060'>up</span> <span m='356170'>the</span> <span
  m='356290'>set</span> <span m='356940'>A</span> <span m='357270'>into</span>
  <span m='358190'>a</span> <span m='358270'>bunch</span> <span
  m='358530'>of</span> <span m='358600'>blocks</span> <span
  m='359810'>which</span> <span m='360190'>are</span> <span
  m='360510'>nonempty,</span> <span m='361020'>and</span> <span
  m='361180'>every</span> <span m='361530'>element</span> <span
  m='362010'>is</span> <span m='362325'>a</span> <span m='362640'>member</span>
  <span m='362720'>of</span> <span m='363080'>some</span> <span
  m='363350'>block,</span> <span m='364030'>and</span> <span
  m='364660'>the</span> <span m='364750'>blocks</span> <span
  m='365110'>don't</span> <span m='365310'>overlap.</span> <span
  m='365890'>So</span> <span m='365960'>in</span> <span m='366040'>fact,</span>
  <span m='366420'>every</span> <span m='366570'>element</span> <span
  m='366970'>is</span> <span m='367080'>a</span> <span m='367130'>member</span>
  <span m='367530'>of</span> <span m='367630'>a</span> <span
  m='367730'>unique</span> <span m='368140'>block.</span> <span
  m='369620'>And</span> <span m='369790'>that</span> <span
  m='370080'>enables</span> <span m='370480'>me</span> <span
  m='370620'>to</span> <span m='370740'>define</span> <span m='371150'>an</span>
  <span m='371240'>equivalence</span> <span m='371810'>relation</span> <span
  m='372840'>on</span> <span m='373450'>A</span> <span m='374330'>by</span>
  <span m='375100'>the</span> <span m='375320'>property</span> <span
  m='375880'>that</span> <span m='376210'>two</span> <span
  m='376500'>elements</span> <span m='376930'>are</span> <span
  m='377020'>in</span> <span m='377110'>the</span> <span m='377170'>same</span>
  <span m='377490'>block.</span> </p><p><span m='378210'>In</span> <span
  m='378380'>fact,</span> <span m='378980'>that's</span> <span
  m='379230'>the</span> <span m='379330'>proof</span> <span m='379760'>of</span>
  <span m='380000'>the</span> <span m='380210'>previous</span> <span
  m='380710'>representation</span> <span m='381540'>theorem</span> <span
  m='382220'>in</span> <span m='382410'>terms</span> <span m='382930'>of</span>
  <span m='384330'>a</span> <span m='384390'>function</span> <span
  m='385260'>that</span> <span m='385530'>you</span> <span m='385680'>can</span>
  <span m='385890'>map</span> <span m='386660'>an</span> <span
  m='386830'>element</span> <span m='387360'>to</span> <span
  m='387440'>the</span> <span m='387540'>block</span> <span
  m='387940'>that</span> <span m='388050'>it's</span> <span
  m='388240'>in,</span> <span m='389470'>in</span> <span m='389640'>order</span>
  <span m='389980'>to</span> <span m='390180'>see</span> <span
  m='390450'>that</span> <span m='390740'>the</span> <span
  m='391100'>block</span> <span m='391660'>representation</span> <span
  m='392570'>and</span> <span m='392740'>the</span> <span
  m='393160'>equivalence</span> <span m='393670'>sub</span> <span
  m='393780'>f</span> <span m='393980'>representation</span> <span
  m='394990'>are</span> <span m='395140'>the</span> <span
  m='395210'>same.</span> <span m='396150'>The</span> <span
  m='396300'>proof</span> <span m='396630'>in</span> <span m='396770'>the</span>
  <span m='396910'>other</span> <span m='397150'>direction,</span> <span
  m='398050'>that</span> <span m='398370'>every</span> <span
  m='398720'>equivalence</span> <span m='399280'>relation</span> <span
  m='400180'>can</span> <span m='400580'>be</span> <span
  m='401320'>represented</span> <span m='402020'>in</span> <span
  m='402150'>this</span> <span m='402360'>way,</span> <span m='402980'>is</span>
  <span m='403240'>an</span> <span m='403340'>exercise</span> <span
  m='404190'>in</span> <span m='405270'>axiomatic</span> <span
  m='405820'>reasoning,</span> <span m='406280'>and</span> <span
  m='406370'>elementary</span> <span m='406920'>one</span> <span
  m='407240'>that</span> <span m='407400'>we're</span> <span
  m='407520'>going</span> <span m='407670'>to</span> <span
  m='407740'>leave</span> <span m='408570'>to</span> <span m='409070'>a</span>
  <span m='409180'>problem</span> <span m='409770'>and</span> <span
  m='409940'>not</span> <span m='410220'>do</span> <span m='410790'>in</span>
  <span m='411410'>this</span> <span m='411600'>presentation.</span>
  </p><p><span m='413390'>So</span> <span m='413580'>the</span> <span
  m='413710'>theorem</span> <span m='414070'>finally</span> <span
  m='414590'>is</span> <span m='414990'>that,</span> <span
  m='415220'>again,</span> <span m='416340'>a</span> <span
  m='416450'>relation</span> <span m='416940'>R</span> <span m='417090'>on
  a</span> <span m='417200'>set</span> <span m='417490'>is an</span> <span
  m='417630'>equivalence</span> <span m='418120'>relation</span> <span
  m='418460'>if</span> <span m='418670'>and</span> <span m='418750'>only</span>
  <span m='419080'>if</span> <span m='419230'>it</span> <span
  m='419330'>is</span> <span m='419450'>in</span> <span m='419560'>fact</span>
  <span m='420420'>the</span> <span m='420920'>being</span> <span
  m='421420'>in</span> <span m='421510'>the</span> <span m='421590'>same</span>
  <span m='421880'>block</span> <span m='422270'>relation</span> <span
  m='423060'>for</span> <span m='423260'>some</span> <span
  m='423570'>partition.</span> </p><p><span m='424620'>And</span> <span
  m='424800'>that</span> <span m='425110'>is</span> <span m='425790'>the</span>
  <span m='425890'>story</span> <span m='426350'>and</span> <span
  m='426560'>multiple</span> <span m='427030'>ways</span> <span
  m='427290'>of</span> <span m='427390'>understanding</span> <span
  m='428280'>what</span> <span m='428970'>equivalence</span> <span
  m='429550'>relations</span> <span m='430100'>are.</span> </p>
embedded_media:
  - uid: 2007b08ef0a768c1bf2a62b9b282ba67
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 08e4008d9f847f487f4944994e37d850
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 56b287f5f416b69e29ac6a6707bdbe0c
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: s-E5T3igntw
  - uid: 41c22a14fa79d24522606b44b65eee33
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/s-E5T3igntw/default.jpg'
  - uid: 64a2e0fedb3d0e46994bb4e31666dccf
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: s-E5T3igntw
  - uid: 0da6e5690e423e13409b74f29a651f90
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: s-E5T3igntw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-c6c01eb0d061/equivalence-relations/s-E5T3igntw.srt
  - uid: d2abbb08dddee6fd4e07057e21946e40
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: s-E5T3igntw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/partial-orders-and-equivalence/vertical-c6c01eb0d061/equivalence-relations/s-E5T3igntw.pdf
  - uid: c70182ac29b59a50c14090041a9de335
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 48e72e20869c15d7b4b0fe1d6d17f8d8
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8d2fde6cec81596c121d4329533220b7
    parent_uid: 2656fa235bd03a7c5e7fa9b97b363c91
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_equivalence_ipod.mp4
type: courses
layout: video
---
