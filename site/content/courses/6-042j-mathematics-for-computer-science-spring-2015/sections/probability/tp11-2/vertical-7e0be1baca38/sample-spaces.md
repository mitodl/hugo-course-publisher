---
title: Sample Spaces
uid: c28a68cf275c4b1c676b3e286543012a
parent_uid: 1b1e43ca67493c0e8934c9e3615247d5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-7e0be1baca38/sample-spaces
short_url: sample-spaces
inline_embed_id: 38037665samplespaces80167086
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='780'>PROFESSOR: So</span> <span m='920'>let's</span> <span
  m='1160'>look</span> <span m='1380'>now</span> <span m='1610'>at</span> <span
  m='1740'>the</span> <span m='2880'>mathematical</span> <span
  m='3490'>foundations</span> <span m='4040'>of</span> <span
  m='4120'>probability</span> <span m='4780'>theory,</span> <span
  m='5010'>the</span> <span m='5100'>basic</span> <span
  m='5480'>definitions</span> <span m='6140'>of</span> <span
  m='6250'>which</span> <span m='6460'>we've</span> <span m='6880'>just</span>
  <span m='7100'>been</span> <span m='7200'>doing</span> <span
  m='7450'>examples</span> <span m='8000'>up</span> <span m='8189'>until</span>
  <span m='8510'>now.</span> <span m='9270'>So</span> <span m='9510'>a</span>
  <span m='9590'>key</span> <span m='9860'>concept</span> <span
  m='10930'>is</span> <span m='11290'>a</span> <span
  m='11390'>probability</span> <span m='12110'>space.</span> <span
  m='12380'>And</span> <span m='12650'>that's</span> <span m='12740'>what</span>
  <span m='13080'>we're</span> <span m='13200'>going</span> <span
  m='13320'>to</span> <span m='13410'>talk</span> <span m='13650'>about</span>
  <span m='13880'>in</span> <span m='13990'>this</span> <span
  m='14080'>segment.</span> </p><p><span m='16309'>So</span> <span
  m='17720'>the</span> <span m='17940'>abstract</span> <span
  m='18440'>setting</span> <span m='19090'>of a</span> <span
  m='19570'>probability</span> <span m='20100'>space</span> <span
  m='20370'>is</span> <span m='20640'>the</span> <span m='20710'>first</span>
  <span m='21010'>thing</span> <span m='21120'>you</span> <span
  m='21220'>start</span> <span m='21520'>off</span> <span m='21780'>with</span>
  <span m='22060'>is</span> <span m='22350'>the</span> <span
  m='22430'>set</span> <span m='22650'>of</span> <span
  m='22760'>outcomes,</span> <span m='23460'>which</span> <span
  m='23580'>is</span> <span m='23680'>what</span> <span m='23860'>we</span>
  <span m='24130'>saw</span> <span m='24870'>we</span> <span
  m='25050'>were</span> <span m='25150'>doing</span> <span m='25500'>with</span>
  <span m='25870'>the</span> <span m='25940'>tree</span> <span
  m='26190'>models</span> <span m='26770'>in</span> <span m='26930'>the</span>
  <span m='27010'>previous</span> <span m='27550'>videos.</span> <span
  m='28630'>And</span> <span m='28880'>the</span> <span
  m='28980'>condition</span> <span m='29700'>that</span> <span
  m='29990'>we</span> <span m='30230'>require</span> <span m='30820'>is</span>
  <span m='31040'>that</span> <span m='31210'>there</span> <span
  m='31370'>should</span> <span m='31630'>be a</span> <span
  m='32070'>countable</span> <span m='33190'>set</span> <span
  m='33530'>of</span> <span m='33690'>outcomes.</span> </p><p><span
  m='34720'>So</span> <span m='34790'>there's</span> <span
  m='34940'>something</span> <span m='35180'>called</span> <span
  m='35390'>the</span> <span m='35460'>sample</span> <span
  m='35890'>space.</span> <span m='36670'>And</span> <span m='36860'>the</span>
  <span m='36930'>sample</span> <span m='37260'>space</span> <span
  m='37590'>is</span> <span m='37730'>designed</span> <span m='38800'>to</span>
  <span m='38910'>model</span> <span m='39520'>all</span> <span
  m='39680'>the</span> <span m='39790'>possible</span> <span
  m='40190'>things</span> <span m='40440'>that</span> <span m='40530'>can</span>
  <span m='40650'>happen</span> <span m='41040'>as</span> <span
  m='41170'>the</span> <span m='41240'>result</span> <span m='41580'>of</span>
  <span m='41680'>your</span> <span m='41810'>random</span> <span
  m='42170'>experiment,</span> <span m='43310'>all</span> <span
  m='43510'>the</span> <span m='43610'>possible</span> <span
  m='44130'>outcomes.</span> <span m='44440'>And</span> <span
  m='44750'>we</span> <span m='44960'>require</span> <span m='45345'>that</span>
  <span m='45730'>there</span> <span m='45890'>be</span> <span
  m='46505'>a</span> <span m='46770'>countable</span> <span
  m='47400'>number.</span> </p><p><span m='47740'>Now,</span> <span
  m='48460'>the</span> <span m='48580'>examples</span> <span
  m='49030'>that</span> <span m='49110'>we've</span> <span m='49270'>seen</span>
  <span m='49430'>so</span> <span m='49640'>far</span> <span
  m='49850'>have</span> <span m='50040'>only</span> <span m='50260'>had</span>
  <span m='50440'>a</span> <span m='50480'>finite</span> <span
  m='50930'>number.</span> <span m='51320'>But</span> <span m='51930'>we</span>
  <span m='52230'>will</span> <span m='52390'>shortly</span> <span
  m='52740'>see</span> <span m='52880'>a</span> <span m='52920'>bunch</span>
  <span m='53150'>of</span> <span m='53220'>examples</span> <span
  m='53680'>where</span> <span m='54110'>we</span> <span m='54290'>really</span>
  <span m='54560'>need</span> <span m='55240'>an</span> <span
  m='55400'>infinite</span> <span m='55780'>number.</span> <span
  m='56120'>But</span> <span m='56290'>only</span> <span m='56540'>a</span>
  <span m='56890'>countable</span> <span m='57240'>infinite</span> <span
  m='57680'>number.</span> <span m='58570'>That's</span> <span
  m='59040'>part</span> <span m='59330'>of</span> <span m='59420'>the</span>
  <span m='59490'>definition</span> <span m='60000'>of</span> <span
  m='60090'>a</span> <span m='60170'>probability</span> <span
  m='60780'>space--</span> <span m='61200'>the</span> <span m='61280'>set</span>
  <span m='61490'>of</span> <span m='61580'>outcomes.</span> </p><p><span
  m='62140'>The</span> <span m='62220'>next</span> <span m='62550'>thing</span>
  <span m='62800'>is</span> <span m='63610'>a</span> <span
  m='63710'>probability</span> <span m='64349'>function</span> <span
  m='64780'>whose</span> <span m='65010'>task</span> <span m='65459'>is</span>
  <span m='65640'>to</span> <span m='65800'>assign</span> <span
  m='66220'>probabilities</span> <span m='67000'>to</span> <span
  m='67110'>the</span> <span m='67230'>outcomes.</span> <span
  m='68330'>So</span> <span m='68750'>the</span> <span
  m='68930'>condition</span> <span m='69460'>is</span> <span
  m='69810'>that</span> <span m='69990'>the</span> <span
  m='70090'>probability</span> <span m='70710'>function,</span> <span
  m='71090'>Pr,</span> <span m='72770'>gives</span> <span m='74400'>every</span>
  <span m='76690'>element</span> <span m='77460'>in S,</span> <span
  m='77650'>every</span> <span m='78220'>outcome,</span> <span
  m='78860'>is</span> <span m='79030'>going</span> <span m='79180'>to</span>
  <span m='79240'>be</span> <span m='79400'>assigned</span> <span
  m='79810'>a</span> <span m='79890'>probability</span> <span
  m='80520'>of</span> <span m='80590'>between</span> <span m='80930'>0</span>
  <span m='81280'>and</span> <span m='81380'>1</span> <span
  m='81580'>inclusive.</span> <span m='84000'>So</span> <span
  m='84040'>every</span> <span m='84270'>outcome</span> <span
  m='84600'>gets</span> <span m='84810'>a</span> <span
  m='85200'>probability</span> <span m='85810'>between</span> <span
  m='86150'>0</span> <span m='86500'>and</span> <span m='86620'>1.</span>
  </p><p><span m='86890'>But</span> <span m='87060'>the</span> <span
  m='87160'>constraint</span> <span m='88120'>on</span> <span
  m='88280'>the</span> <span m='88370'>probability</span> <span
  m='89050'>function</span> <span m='89520'>is</span> <span
  m='89920'>that</span> <span m='90260'>if</span> <span m='90580'>I</span> <span
  m='90680'>sum</span> <span m='91120'>up</span> <span m='91400'>the</span>
  <span m='91510'>probabilities</span> <span m='92330'>of</span> <span
  m='92490'>all</span> <span m='92700'>the</span> <span
  m='92840'>outcomes--</span> <span m='93810'>omega</span> <span
  m='94660'>is</span> <span m='94830'>an</span> <span m='94920'>outcome</span>
  <span m='95420'>in</span> <span m='95600'>the</span> <span
  m='95690'>sample</span> <span m='96110'>space</span> <span
  m='96520'>S--</span> <span m='97140'>and</span> <span m='97330'>I</span> <span
  m='97410'>take</span> <span m='97660'>the</span> <span m='97740'>sum</span>
  <span m='98040'>of</span> <span m='98140'>all</span> <span m='98460'>of</span>
  <span m='98560'>those</span> <span m='98830'>probabilities</span> <span
  m='99540'>of</span> <span m='99660'>omega,</span> <span m='100450'>they</span>
  <span m='100580'>have</span> <span m='100890'>to</span> <span
  m='101000'>sum</span> <span m='101430'>to</span> <span m='101570'>1.</span>
  <span m='103510'>That's</span> <span m='104720'>the</span> <span
  m='104860'>crucial</span> <span m='105240'>condition</span> <span
  m='105760'>that</span> <span m='105940'>defines</span> <span
  m='106810'>a</span> <span m='106900'>probability</span> <span
  m='107520'>function</span> <span m='109450'>on</span> <span
  m='109560'>a</span> <span m='109630'>sample</span> <span
  m='109980'>space.</span> <span m='110340'>And</span> <span
  m='110410'>the</span> <span m='110500'>two</span> <span
  m='110660'>together</span> <span m='111450'>are</span> <span
  m='111580'>what</span> <span m='111740'>are</span> <span
  m='111860'>called</span> <span m='112400'>a</span> <span
  m='112500'>probability</span> <span m='113170'>space.</span> <span
  m='113560'>A</span> <span m='113620'>sample</span> <span
  m='113950'>space</span> <span m='114240'>with</span> <span m='114430'>a</span>
  <span m='114490'>probability</span> <span m='115100'>function</span> <span
  m='115800'>is</span> <span m='115980'>a</span> <span
  m='116050'>probability</span> <span m='116710'>space.</span> </p><p><span
  m='117920'>So</span> <span m='118030'>the</span> <span
  m='118150'>purpose</span> <span m='118600'>of</span> <span
  m='118730'>the</span> <span m='118830'>tree</span> <span
  m='119110'>model</span> <span m='119470'>that</span> <span
  m='119600'>we</span> <span m='119700'>were</span> <span
  m='119820'>using</span> <span m='120180'>is</span> <span
  m='120300'>really</span> <span m='120610'>to</span> <span
  m='120680'>figure</span> <span m='121070'>out</span> <span
  m='121260'>which</span> <span m='121510'>probability</span> <span
  m='122110'>space</span> <span m='122490'>to</span> <span
  m='122550'>use.</span> <span m='124150'>And</span> <span m='125270'>the</span>
  <span m='125510'>mathematics</span> <span m='126220'>doesn't</span> <span
  m='126470'>really</span> <span m='126690'>start</span> <span m='127050'>until
  you</span> <span m='127260'>have</span> <span m='127540'>the</span> <span
  m='127640'>probability</span> <span m='128270'>space.</span> <span
  m='130030'>Up</span> <span m='130250'>until</span> <span
  m='130610'>that,</span> <span m='130930'>it's</span> <span
  m='131160'>the</span> <span m='131230'>modeling</span> <span
  m='132390'>part</span> <span m='132750'>that's</span> <span
  m='132930'>very</span> <span m='133150'>important</span> <span
  m='133550'>mathematically.</span> <span m='134260'>But</span> <span
  m='134490'>you</span> <span m='134620'>can't</span> <span
  m='136410'>say</span> <span m='136730'>that</span> <span m='137090'>the</span>
  <span m='137180'>model</span> <span m='137590'>is</span> <span
  m='137690'>right</span> <span m='137990'>or</span> <span
  m='138200'>wrong.</span> <span m='138970'>It's</span> <span
  m='139080'>a</span> <span m='139130'>model,</span> <span m='139770'>and</span>
  <span m='140100'>its</span> <span m='140330'>rightness</span> <span
  m='140790'>or</span> <span m='140910'>wrongness</span> <span
  m='142050'>is</span> <span m='142270'>a</span> <span m='142330'>matter</span>
  <span m='142660'>of</span> <span m='142750'>judgment</span> <span
  m='143320'>and</span> <span m='143730'>comparison</span> <span
  m='144490'>to</span> <span m='145030'>how</span> <span m='145270'>it</span>
  <span m='146400'>stacks</span> <span m='146720'>up</span> <span
  m='146820'>against</span> <span m='147180'>reality</span> <span
  m='147670'>and</span> <span m='148090'>things</span> <span m='148360'>that
  we</span> <span m='148520'>care</span> <span m='148770'>about.</span>
  </p><p><span m='149610'>When</span> <span m='149820'>we're</span> <span
  m='149920'>using</span> <span m='150210'>the</span> <span
  m='150300'>tree</span> <span m='150500'>model,</span> <span
  m='150900'>it's</span> <span m='151060'>the</span> <span
  m='151150'>leaves</span> <span m='151540'>of</span> <span
  m='151630'>the</span> <span m='151730'>tree that</span> <span
  m='152160'>correspond</span> <span m='152740'>to</span> <span
  m='152810'>the</span> <span m='152940'>outcomes.</span> <span
  m='153960'>And</span> <span m='154910'>the</span> <span
  m='155090'>outcome</span> <span m='155720'>probabilities,</span> <span
  m='157520'>which</span> <span m='157740'>are</span> <span
  m='157830'>crucial</span> <span m='158220'>for</span> <span
  m='158360'>having</span> <span m='158640'>a</span> <span
  m='158700'>probability</span> <span m='159240'>space,</span> <span
  m='159910'>we</span> <span m='160200'>got</span> <span m='160650'>by</span>
  <span m='161000'>reasoning</span> <span m='161560'>about</span> <span
  m='162800'>the</span> <span m='163200'>probabilities</span> <span
  m='164010'>to</span> <span m='164150'>assign</span> <span m='164750'>to</span>
  <span m='164890'>each</span> <span m='165200'>possible</span> <span
  m='165690'>branch</span> <span m='166130'>of</span> <span
  m='166250'>the</span> <span m='166350'>tree</span> <span m='166820'>as</span>
  <span m='167030'>you</span> <span m='167550'>worked</span> <span
  m='167790'>your</span> <span m='167910'>way</span> <span
  m='168130'>from</span> <span m='168360'>root</span> <span m='168640'>to</span>
  <span m='168740'>leaf.</span> </p><p><span m='171560'>So</span> <span
  m='172050'>the</span> <span m='172190'>other</span> <span
  m='172420'>key</span> <span m='172640'>concept</span> <span
  m='172900'>that</span> <span m='173160'>we</span> <span m='173290'>saw</span>
  <span m='173710'>already</span> <span m='174030'>is</span> <span
  m='174170'>the</span> <span m='174310'>idea</span> <span m='174570'>of</span>
  <span m='174640'>an</span> <span m='174710'>event.</span> <span
  m='175110'>An</span> <span m='175210'>event,</span> <span
  m='175560'>formally,</span> <span m='176070'>is</span> <span
  m='176210'>nothing</span> <span m='176500'>but</span> <span
  m='176630'>a</span> <span m='176690'>subset</span> <span m='177110'>of</span>
  <span m='177200'>the</span> <span m='177270'>sample</span> <span
  m='177610'>space.</span> <span m='179010'>An</span> <span
  m='179680'>event</span> <span m='180000'>is</span> <span
  m='180110'>some</span> <span m='180340'>set</span> <span m='180580'>of</span>
  <span m='180680'>outcomes.</span> <span m='181240'>Presumably,</span> <span
  m='182210'>the</span> <span m='182510'>event</span> <span m='182870'>is</span>
  <span m='183360'>an</span> <span m='183500'>event that</span> <span
  m='183880'>you're</span> <span m='184060'>interested</span> <span
  m='184510'>in,</span> <span m='184840'>like</span> <span
  m='185060'>winning.</span> </p><p><span m='186440'>And</span> <span
  m='186640'>the</span> <span m='186710'>definition</span> <span
  m='187490'>of</span> <span m='187700'>the</span> <span
  m='187780'>probability</span> <span m='188590'>of</span> <span
  m='188750'>an</span> <span m='188840'>event</span> <span m='189680'>is</span>
  <span m='189880'>simply</span> <span m='190720'>the</span> <span
  m='190830'>sum</span> <span m='191280'>of</span> <span m='191490'>the</span>
  <span m='191580'>probabilities</span> <span m='192370'>of</span> <span
  m='192510'>all</span> <span m='192630'>the</span> <span
  m='192760'>outcomes</span> <span m='193400'>in</span> <span
  m='193540'>the</span> <span m='193690'>event.</span> <span
  m='194260'>And</span> <span m='194350'>we</span> <span m='194460'>were</span>
  <span m='194550'>using</span> <span m='194910'>this</span> <span
  m='195110'>already</span> <span m='195570'>for</span> <span
  m='195710'>both</span> <span m='196000'>Monty</span> <span
  m='196340'>Hall</span> <span m='197090'>and</span> <span m='197400'>for</span>
  <span m='198860'>the</span> <span m='199080'>poker</span> <span
  m='199440'>hands.</span> <span m='200100'>But</span> <span
  m='200370'>this</span> <span m='200660'>is</span> <span m='200800'>the</span>
  <span m='200910'>official</span> <span m='201300'>general</span> <span
  m='201730'>definition--</span> <span m='202900'>that</span> <span
  m='203200'>once</span> <span m='203480'>we</span> <span m='203590'>have</span>
  <span m='203790'>a</span> <span m='203880'>probability</span> <span
  m='204530'>function</span> <span m='204900'>that</span> <span
  m='205010'>assigns</span> <span m='205370'>probabilities</span> <span
  m='205990'>to</span> <span m='206100'>outcomes,</span> <span
  m='207170'>then</span> <span m='207920'>we</span> <span m='208180'>can</span>
  <span m='208510'>use</span> <span m='208900'>that</span> <span
  m='209200'>to</span> <span m='209310'>define</span> <span
  m='209690'>the</span> <span m='209780'>probability</span> <span
  m='210440'>of</span> <span m='210530'>an</span> <span m='210620'>event.</span>
  <span m='210990'>This is</span> <span m='211200'>the</span> <span
  m='211300'>definition</span> <span m='211960'>of</span> <span
  m='212060'>the</span> <span m='212150'>probability</span> <span
  m='212760'>of</span> <span m='212840'>an</span> <span
  m='212910'>event--</span> <span m='213950'>simply</span> <span
  m='214620'>the</span> <span m='214730'>sum</span> <span m='215230'>of</span>
  <span m='215490'>the</span> <span m='215800'>outcome</span> <span
  m='216230'>probabilities.</span> </p><p><span m='218480'>And</span> <span
  m='218750'>as</span> <span m='218860'>an</span> <span
  m='218940'>immediate</span> <span m='219430'>corollary</span> <span
  m='220160'>of</span> <span m='220300'>this</span> <span
  m='220520'>definition,</span> <span m='221850'>what</span> <span
  m='222030'>we</span> <span m='222140'>get</span> <span m='222520'>is</span>
  <span m='222730'>something</span> <span m='223470'>that's</span> <span
  m='223670'>central</span> <span m='224090'>to</span> <span
  m='224190'>probability</span> <span m='224830'>theory.</span> <span
  m='225230'>It's</span> <span m='225300'>called</span> <span
  m='225560'>the</span> <span m='225600'>sum</span> <span
  m='225980'>rule.</span> <span m='227080'>And</span> <span m='227840'>it</span>
  <span m='228060'>says</span> <span m='228680'>that</span> <span
  m='229080'>if</span> <span m='229260'>you</span> <span m='229360'>have</span>
  <span m='229790'>a</span> <span m='229880'>bunch</span> <span
  m='230220'>of</span> <span m='230320'>events</span> <span
  m='231240'>that</span> <span m='231430'>are</span> <span
  m='231590'>pairwise</span> <span m='232230'>disjoint--</span> <span
  m='232880'>so</span> <span m='233090'>there's</span> <span
  m='233360'>no</span> <span m='234200'>outcome</span> <span
  m='234730'>in</span> <span m='234850'>common</span> <span m='235330'>to</span>
  <span m='235450'>A0</span> <span m='235900'>or</span> <span
  m='236460'>A1</span> <span m='236860'>or</span> <span m='236980'>A1</span>
  <span m='237450'>or A2</span> <span m='237940'>and</span> <span
  m='238040'>so</span> <span m='238330'>on--</span> <span m='239020'>then</span>
  <span m='239730'>the</span> <span m='240050'>probability</span> <span
  m='241020'>of</span> <span m='241440'>the</span> <span m='241650'>union</span>
  <span m='242740'>of</span> <span m='243010'>the</span> <span
  m='243320'>A's,</span> <span m='243630'>the</span> <span
  m='243730'>probability</span> <span m='244460'>that</span> <span
  m='244660'>one</span> <span m='244980'>of</span> <span m='245100'>these</span>
  <span m='245350'>events</span> <span m='245700'>occurs,</span> <span
  m='246480'>one</span> <span m='246640'>or</span> <span m='246720'>more</span>
  <span m='247170'>of</span> <span m='247320'>these</span> <span
  m='247510'>events</span> <span m='247820'>occurs,</span> <span
  m='248520'>is</span> <span m='248720'>simply</span> <span
  m='249470'>the</span> <span m='249620'>sum</span> <span m='250180'>of</span>
  <span m='250430'>the</span> <span m='250590'>individual</span> <span
  m='251230'>probabilities.</span> </p><p><span m='252850'>And</span> <span
  m='252880'>that</span> <span m='253230'>is</span> <span m='253470'>a</span>
  <span m='254730'>rule that</span> <span m='255020'>we'll</span> <span
  m='255180'>be</span> <span m='255430'>using</span> <span m='255690'>all</span>
  <span m='255860'>the</span> <span m='255960'>time.</span> <span
  m='256260'>It's</span> <span m='256470'>very</span> <span
  m='256700'>convenient</span> <span m='257230'>for</span> <span
  m='257380'>computing</span> <span m='257910'>things.</span> <span
  m='258230'>If</span> <span m='258350'>you</span> <span m='258470'>just</span>
  <span m='258649'>break</span> <span m='258910'>them</span> <span
  m='259050'>up</span> <span m='259190'>into</span> <span
  m='260100'>separate</span> <span m='260480'>cases,</span> <span
  m='260784'>then</span> <span m='261089'>you</span> <span m='261250'>can</span>
  <span m='261709'>handle</span> <span m='261800'>the</span> <span
  m='261860'>separate</span> <span m='262190'>cases--</span> <span
  m='262610'>each</span> <span m='262830'>A0,</span> <span
  m='262920'>A1--</span> <span m='263610'>separately,</span> <span
  m='264130'>and</span> <span m='264230'>then</span> <span m='264745'>add
  up</span> <span m='265110'>the</span> <span m='265180'>probabilities.</span>
  </p><p><span m='267210'>And</span> <span m='267510'>in</span> <span
  m='267970'>some</span> <span m='268230'>approaches</span> <span m='268660'>to
  probability,</span> <span m='269210'>more</span> <span
  m='269380'>general</span> <span m='269770'>ones,</span> <span
  m='269990'>this</span> <span m='270160'>is</span> <span
  m='270280'>actually</span> <span m='270730'>taken</span> <span
  m='271080'>as</span> <span m='271210'>an</span> <span m='271290'>axiom.</span>
  <span m='272130'>It's</span> <span m='272390'>the</span> <span
  m='272560'>axiom</span> <span m='273030'>that</span> <span
  m='273180'>defines</span> <span m='273600'>a</span> <span
  m='273660'>probability</span> <span m='274270'>space,</span> <span
  m='275110'>but</span> <span m='275620'>where</span> <span
  m='275870'>you</span> <span m='275990'>start</span> <span
  m='276460'>with</span> <span m='276670'>an</span> <span
  m='276810'>assignment</span> <span m='277300'>of</span> <span
  m='277380'>probabilities</span> <span m='278180'>to</span> <span
  m='278390'>events.</span> <span m='278890'>But</span> <span
  m='278930'>in</span> <span m='279080'>the</span> <span
  m='279190'>discrete</span> <span m='279570'>case,</span> <span
  m='279760'>we</span> <span m='279870'>don't</span> <span
  m='280010'>have</span> <span m='280140'>to</span> <span
  m='280250'>worry</span> <span m='280490'>about</span> <span
  m='280750'>that.</span> <span m='281200'>It's</span> <span m='281310'>a</span>
  <span m='281380'>corollary</span> <span m='282070'>of</span> <span
  m='282180'>the</span> <span m='282290'>way</span> <span m='282470'>we</span>
  <span m='282620'>define the</span> <span m='283080'>probability.</span>
  </p><p><span m='284620'>And</span> <span m='284780'>that,</span> <span
  m='285020'>of</span> <span m='285140'>course,</span> <span
  m='285430'>is</span> <span m='285570'>a</span> <span m='285760'>crucial</span>
  <span m='286210'>rule--</span> <span m='286930'>sometimes</span> <span
  m='287270'>called</span> <span m='287450'>the</span> <span
  m='287715'>countable</span> <span m='287980'>sum</span> <span
  m='288220'>rule.</span> <span m='288460'>But</span> <span
  m='288900'>we're</span> <span m='289110'>just</span> <span
  m='289310'>going</span> <span m='289410'>to</span> <span
  m='289470'>call</span> <span m='289840'>it the sum</span> <span
  m='290160'>rule.</span> <span m='290800'>Expressed</span> <span
  m='291410'>in</span> <span m='291580'>concise</span> <span
  m='292030'>notation,</span> <span m='292990'>it's</span> <span
  m='293420'>the</span> <span m='293530'>probability</span> <span
  m='294610'>of</span> <span m='294800'>the</span> <span m='294920'>union</span>
  <span m='295270'>of</span> <span m='295340'>the</span> <span
  m='295530'>Ai's,</span> <span m='296050'>as</span> <span m='296420'>i</span>
  <span m='296590'>ranges</span> <span m='297020'>over</span> <span
  m='297210'>the</span> <span m='297310'>non-negative</span> <span
  m='297860'>integers,</span> <span m='298340'>is</span> <span
  m='298440'>simply</span> <span m='299070'>the</span> <span
  m='299230'>sum</span> <span m='300060'>of</span> <span m='300240'>the</span>
  <span m='300360'>individual</span> <span m='300910'>probabilities</span> <span
  m='302300'>of</span> <span m='302480'>those</span> <span
  m='302710'>events.</span> </p><p><span m='304990'>Now,</span> <span
  m='305420'>why</span> <span m='305740'>it's</span> <span
  m='305970'>called</span> <span m='306290'>discrete</span> <span
  m='306770'>probability</span> <span m='308120'>that</span> <span
  m='308340'>we're</span> <span m='308520'>studying</span> <span
  m='309320'>is</span> <span m='309620'>because</span> <span
  m='310040'>we</span> <span m='310180'>have</span> <span m='310470'>a</span>
  <span m='310840'>countable</span> <span m='311210'>sample</span> <span
  m='311640'>space.</span> <span m='312100'>And as</span> <span
  m='312300'>we</span> <span m='312420'>saw,</span> <span m='313040'>that</span>
  <span m='313710'>discrete</span> <span m='314650'>combinatorics</span> <span
  m='315840'>is</span> <span m='316590'>the</span> <span
  m='316810'>combinatorics</span> <span m='317470'>of</span> <span
  m='317580'>countable</span> <span m='318420'>and</span> <span
  m='318670'>even</span> <span m='318920'>finite</span> <span
  m='319420'>sets,</span> <span m='319770'>really.</span> <span
  m='321710'>The</span> <span m='321910'>crucial</span> <span
  m='322460'>reason</span> <span m='322810'>why</span> <span
  m='323090'>we're</span> <span m='323340'>sticking</span> <span
  m='323820'>to</span> <span m='323940'>discrete</span> <span
  m='324350'>probability</span> <span m='325190'>is</span> <span
  m='325610'>that</span> <span m='325770'>allows</span> <span
  m='326250'>us</span> <span m='326430'>to</span> <span m='326550'>work</span>
  <span m='326820'>with</span> <span m='326950'>sums</span> <span
  m='327420'>instead</span> <span m='327800'>of</span> <span
  m='327950'>integrals.</span> </p><p><span m='329300'>If</span> <span
  m='329500'>you</span> <span m='329650'>start</span> <span
  m='330240'>allowing</span> <span m='331750'>continuous</span> <span
  m='332500'>intervals</span> <span m='333000'>of</span> <span
  m='333150'>time</span> <span m='334060'>and</span> <span m='335190'>the</span>
  <span m='335430'>probability,</span> <span m='336300'>say,</span> <span
  m='336650'>of</span> <span m='336790'>throwing</span> <span
  m='337150'>a</span> <span m='337200'>dart</span> <span m='337580'>and
  it</span> <span m='337820'>landing</span> <span m='338260'>at</span> <span
  m='338350'>a</span> <span m='338380'>given</span> <span
  m='338690'>interval</span> <span m='339140'>on</span> <span
  m='339310'>the</span> <span m='339390'>line</span> <span m='340240'>and</span>
  <span m='340400'>a</span> <span m='340430'>whole</span> <span
  m='340610'>bunch</span> <span m='340850'>of</span> <span
  m='340940'>other</span> <span m='341140'>situations</span> <span
  m='341760'>where</span> <span m='341870'>it's</span> <span
  m='341970'>natural</span> <span m='342530'>to</span> <span
  m='342640'>want</span> <span m='342870'>to</span> <span m='342910'>use</span>
  <span m='343790'>continuous</span> <span m='344650'>probabilities,</span>
  <span m='346530'>you're</span> <span m='346750'>forced</span> <span
  m='347340'>into</span> <span m='347770'>defining</span> <span
  m='348410'>a</span> <span m='348500'>probability</span> <span
  m='349090'>in</span> <span m='349230'>terms</span> <span m='349590'>of</span>
  <span m='349800'>integrals,</span> <span m='350340'>because</span> <span
  m='350760'>every</span> <span m='351530'>outcome</span> <span
  m='351880'>has</span> <span m='352050'>probability</span> <span
  m='352590'>0.</span> <span m='353230'>And</span> <span m='353460'>the</span>
  <span m='353550'>theoretical</span> <span m='354260'>basis</span> <span
  m='354690'>of</span> <span m='354840'>it</span> <span m='354900'>is</span>
  <span m='355040'>considerably</span> <span m='355540'>more</span> <span
  m='355700'>complicated.</span> <span m='357130'>And</span> <span
  m='357310'>we</span> <span m='357420'>don't</span> <span
  m='357590'>need</span> <span m='357770'>it</span> <span m='357930'>for,</span>
  <span m='358730'>in</span> <span m='358890'>fact,</span> <span
  m='359270'>virtually</span> <span m='359820'>any</span> <span
  m='360040'>purposes</span> <span m='360610'>that</span> <span
  m='360750'>come</span> <span m='360980'>up</span> <span m='361130'>in</span>
  <span m='361270'>computer</span> <span m='361640'>science.</span> <span
  m='362880'>And</span> <span m='363120'>so</span> <span m='363570'>we</span>
  <span m='363800'>will,</span> <span m='364100'>happily,</span> <span
  m='364560'>not</span> <span m='364730'>have</span> <span m='364940'>to</span>
  <span m='365060'>study</span> <span m='365350'>integral</span> <span
  m='365750'>calculus</span> <span m='366550'>or</span> <span
  m='366630'>measure</span> <span m='366950'>theory,</span> <span
  m='367290'>really,</span> <span m='367830'>and</span> <span
  m='368080'>just</span> <span m='368300'>get</span> <span m='368480'>by</span>
  <span m='368650'>with</span> <span m='368830'>sums.</span> </p><p><span
  m='370880'>So</span> <span m='371800'>let's</span> <span
  m='371980'>quickly</span> <span m='372500'>point</span> <span
  m='372720'>out</span> <span m='372890'>some</span> <span
  m='373200'>rules</span> <span m='373680'>that</span> <span
  m='373810'>are</span> <span m='373910'>now</span> <span
  m='374200'>corollaries.</span> <span m='374810'>They're</span> <span
  m='374900'>really</span> <span m='375120'>derived</span> <span
  m='375790'>rules</span> <span m='376050'>of</span> <span
  m='376130'>probability</span> <span m='376790'>theory</span> <span
  m='377420'>that</span> <span m='377600'>follow</span> <span
  m='378110'>as</span> <span m='378330'>a</span> <span
  m='378410'>consequence</span> <span m='379440'>of</span> <span
  m='380500'>the</span> <span m='380720'>countable</span> <span
  m='381160'>sum</span> <span m='381490'>rule.</span> <span
  m='382060'>And</span> <span m='382240'>the</span> <span
  m='382300'>first</span> <span m='382600'>one</span> <span m='382810'>is</span>
  <span m='383040'>the</span> <span m='383130'>difference</span> <span
  m='383550'>rule.</span> <span m='384230'>The</span> <span
  m='384340'>probability</span> <span m='385510'>of</span> <span
  m='385960'>A</span> <span m='386110'>minus</span> <span m='386590'>B</span>
  <span m='386950'>is</span> <span m='387090'>simply</span> <span
  m='387460'>equal</span> <span m='387720'>to</span> <span m='387810'>the</span>
  <span m='387910'>probability</span> <span m='388490'>of</span> <span
  m='388590'>A</span> <span m='388720'>minus</span> <span m='389110'>the</span>
  <span m='389200'>probability</span> <span m='389830'>of</span> <span
  m='390010'>A</span> <span m='390100'>intersection</span> <span
  m='390760'>B.</span> </p><p><span m='391030'>Now,</span> <span
  m='391340'>notice</span> <span m='391580'>how</span> <span
  m='391710'>much</span> <span m='392190'>this</span> <span
  m='392300'>looks</span> <span m='392590'>like</span> <span
  m='393210'>the</span> <span m='393320'>difference</span> <span
  m='393720'>rule</span> <span m='394030'>for</span> <span
  m='394350'>cardinalities--</span> <span m='395470'>that the</span> <span
  m='395740'>cardinality</span> <span m='396520'>of</span> <span
  m='396670'>the</span> <span m='396750'>finite</span> <span
  m='397190'>set</span> <span m='397430'>A</span> <span m='397560'>minus</span>
  <span m='397980'>B</span> <span m='398160'>is</span> <span
  m='398250'>simply</span> <span m='398510'>the</span> <span
  m='398620'>cardinality</span> <span m='399260'>of</span> <span
  m='399360'>A</span> <span m='399500'>minus</span> <span m='400300'>the</span>
  <span m='400420'>cardinality</span> <span m='401110'>of</span> <span
  m='401200'>A</span> <span m='401290'>intersection</span> <span
  m='401940'>B.</span> <span m='402120'>And</span> <span
  m='402360'>indeed,</span> <span m='402450'>the</span> <span
  m='402880'>proof</span> <span m='403150'>of</span> <span
  m='403310'>this</span> <span m='403520'>is</span> <span m='403630'>just</span>
  <span m='403950'>like</span> <span m='404170'>the</span> <span
  m='404230'>proof</span> <span m='404460'>of</span> <span
  m='404560'>cardinality.</span> <span m='405150'>It</span> <span
  m='405230'>follows</span> <span m='405570'>directly</span> <span
  m='406420'>from</span> <span m='406700'>the</span> <span m='407620'>sum</span>
  <span m='407940'>rule</span> <span m='408290'>for</span> <span
  m='408470'>probabilities,</span> <span m='409220'>which</span> <span
  m='409440'>corresponds,</span> <span m='410180'>of</span> <span
  m='410280'>course,</span> <span m='410530'>to</span> <span
  m='410630'>the</span> <span m='410640'>sum</span> <span m='410900'>rule</span>
  <span m='411140'>for</span> <span m='411680'>cardinalities.</span>
  </p><p><span m='412840'>Namely,</span> <span m='413170'>by</span> <span
  m='413330'>the</span> <span m='413440'>sum</span> <span m='413700'>rule</span>
  <span m='413950'>for</span> <span m='414110'>probabilities,</span> <span
  m='414980'>what</span> <span m='415090'>we</span> <span m='415180'>know</span>
  <span m='415490'>is</span> <span m='416130'>that</span> <span
  m='416800'>A</span> <span m='417110'>is</span> <span m='417770'>equal</span>
  <span m='418160'>set,</span> <span m='418420'>theoretically,</span> <span
  m='419290'>to</span> <span m='419580'>A</span> <span
  m='419700'>intersection</span> <span m='420330'>B</span> <span
  m='421120'>plus</span> <span m='421375'>A</span> <span m='421770'>minus</span>
  <span m='422180'>b.</span> <span m='422350'>That</span> <span
  m='422490'>is,</span> <span m='422670'>A</span> <span m='423090'>breaks</span>
  <span m='423430'>up</span> <span m='423570'>into</span> <span
  m='423830'>the</span> <span m='424310'>points</span> <span
  m='424670'>that</span> <span m='425200'>it</span> <span m='425340'>has</span>
  <span m='425550'>in</span> <span m='425650'>common</span> <span
  m='426010'>with</span> <span m='426230'>B</span> <span m='426520'>and</span>
  <span m='426640'>the</span> <span m='426730'>points</span> <span
  m='427040'>that</span> <span m='427130'>it</span> <span
  m='427230'>doesn't</span> <span m='427500'>have</span> <span
  m='427700'>in</span> <span m='427810'>common</span> <span
  m='428170'>with</span> <span m='428400'>B.</span> <span
  m='428930'>Since</span> <span m='429200'>those</span> <span
  m='429410'>are</span> <span m='429450'>disjoint,</span> <span
  m='429950'>you</span> <span m='430060'>can</span> <span m='430210'>add</span>
  <span m='430480'>them.</span> <span m='430910'>So</span> <span
  m='431100'>the</span> <span m='431220'>probability</span> <span
  m='431820'>of</span> <span m='432080'>A</span> <span m='432330'>is</span>
  <span m='432530'>equal</span> <span m='432870'>to</span> <span
  m='432970'>the</span> <span m='433080'>probability</span> <span
  m='433640'>of</span> <span m='433740'>A</span> <span
  m='434090'>intersection</span> <span m='434700'>B</span> <span
  m='435300'>plus</span> <span m='435700'>probability</span> <span
  m='436410'>of</span> <span m='436590'>A</span> <span m='436690'>minus</span>
  <span m='437090'>B.</span> <span m='437250'>And</span> <span
  m='437370'>so</span> <span m='437490'>I</span> <span m='437590'>just</span>
  <span m='437810'>transpose</span> <span m='438440'>the</span> <span
  m='438580'>A</span> <span m='438680'>minus</span> <span m='439060'>B</span>
  <span m='439200'>to</span> <span m='439310'>the</span> <span
  m='439390'>left</span> <span m='439680'>hand</span> <span
  m='439860'>side.</span> <span m='440440'>And</span> <span m='440640'>I</span>
  <span m='440700'>get</span> <span m='441030'>the</span> <span
  m='441130'>difference</span> <span m='441540'>rule,</span> <span
  m='442610'>which</span> <span m='443080'>is</span> <span m='443330'>a</span>
  <span m='443740'>rule</span> <span m='443990'>that's</span> <span
  m='444150'>worth</span> <span m='444450'>remembering.</span> </p><p><span
  m='446550'>Similarly,</span> <span m='447080'>we</span> <span
  m='447180'>have</span> <span m='447380'>inclusion-exclusion.</span> <span
  m='449940'>If</span> <span m='450230'>A and</span> <span m='450490'>B</span>
  <span m='450640'>are</span> <span m='450690'>not</span> <span
  m='450990'>disjoint,</span> <span m='451560'>then</span> <span
  m='451710'>the</span> <span m='451800'>probability</span> <span
  m='452410'>of</span> <span m='452500'>A</span> <span m='452610'>union</span>
  <span m='452980'>B</span> <span m='453170'>is</span> <span
  m='453290'>equal</span> <span m='453530'>to</span> <span m='453640'>the</span>
  <span m='453740'>probability</span> <span m='454320'>of</span> <span
  m='454410'>A</span> <span m='454540'>plus</span> <span m='454830'>the</span>
  <span m='454910'>probability</span> <span m='455500'>of</span> <span
  m='455600'>B</span> <span m='455890'>minus</span> <span m='456970'>the</span>
  <span m='457090'>probability</span> <span m='457730'>of</span> <span
  m='457820'>the</span> <span m='457920'>intersection.</span> <span
  m='458600'>And</span> <span m='458890'>the</span> <span
  m='458980'>proof</span> <span m='459270'>is,</span> <span m='459420'>in</span>
  <span m='459520'>fact,</span> <span m='459840'>exactly</span> <span
  m='460320'>like</span> <span m='460540'>the</span> <span
  m='460620'>corresponding</span> <span m='461400'>rule</span> <span
  m='461720'>for</span> <span m='461890'>cardinalities</span> <span
  m='462610'>of</span> <span m='462710'>finite</span> <span
  m='463140'>sets.</span> <span m='465140'>And</span> <span m='465270'>of</span>
  <span m='465330'>course,</span> <span m='465570'>it</span> <span
  m='465640'>generalizes</span> <span m='466600'>to</span> <span
  m='466910'>more</span> <span m='467170'>sets.</span> <span
  m='467590'>This</span> <span m='467790'>is</span> <span m='467940'>an</span>
  <span m='468020'>example</span> <span m='468520'>of</span> <span
  m='468640'>the</span> <span m='468750'>inclusion-exclusion</span> <span
  m='469670'>for</span> <span m='469840'>three</span> <span
  m='470090'>sets</span> <span m='470730'>in</span> <span
  m='470910'>terms</span> <span m='471170'>of</span> <span
  m='471230'>probability.</span> </p><p><span m='472760'>Another</span> <span
  m='473310'>useful,</span> <span m='473980'>it</span> <span
  m='474100'>turns</span> <span m='474360'>out,</span> <span
  m='474720'>consequence</span> <span m='475420'>is</span> <span
  m='476010'>that</span> <span m='476210'>the</span> <span
  m='476320'>probability</span> <span m='477320'>that</span> <span
  m='477560'>A</span> <span m='477780'>or</span> <span m='477970'>B</span> <span
  m='478210'>happens</span> <span m='478810'>is</span> <span
  m='479000'>guaranteed</span> <span m='479750'>to</span> <span
  m='479840'>be</span> <span m='479970'>less</span> <span m='480260'>than</span>
  <span m='480380'>or</span> <span m='480510'>equal</span> <span
  m='480770'>to</span> <span m='480870'>the</span> <span
  m='480970'>probability</span> <span m='481560'>that</span> <span
  m='481770'>A</span> <span m='481910'>happens</span> <span
  m='482710'>plus</span> <span m='483030'>the</span> <span
  m='483130'>probability</span> <span m='483820'>of</span> <span
  m='483920'>B</span> <span m='484150'>happens.</span> <span
  m='484770'>And</span> <span m='484960'>this</span> <span
  m='485160'>follows</span> <span m='485520'>as</span> <span m='485660'>a</span>
  <span m='485740'>trivial</span> <span m='486250'>consequence</span> <span
  m='486950'>of</span> <span m='487070'>the</span> <span
  m='487250'>inclusion-exclusion</span> <span m='487700'>rule</span> <span
  m='488390'>for</span> <span m='488530'>two</span> <span
  m='488710'>sets,</span> <span m='489070'>because</span> <span
  m='489820'>the</span> <span m='489930'>probability</span> <span
  m='490580'>of</span> <span m='490680'>A</span> <span m='490860'>union</span>
  <span m='491270'>B</span> <span m='491510'>is</span> <span
  m='491620'>equal</span> <span m='491930'>to</span> <span
  m='492050'>this</span> <span m='492400'>plus</span> <span
  m='492680'>this</span> <span m='493020'>minus</span> <span
  m='493660'>some</span> <span m='493960'>probability,</span> <span
  m='494650'>namely,</span> <span m='494970'>the</span> <span
  m='495080'>probability</span> <span m='495650'>of</span> <span
  m='495700'>the</span> <span m='495780'>intersection.</span> </p><p><span
  m='496810'>So</span> <span m='496840'>you're</span> <span
  m='497000'>taking</span> <span m='497350'>away</span> <span
  m='497590'>something</span> <span m='497950'>non-negative</span> <span
  m='498590'>from</span> <span m='498780'>these</span> <span
  m='499030'>two</span> <span m='499190'>in</span> <span m='499290'>order</span>
  <span m='499470'>to</span> <span m='499600'>equal</span> <span
  m='499950'>that.</span> <span m='500470'>In</span> <span
  m='500610'>particular,</span> <span m='501190'>then,</span> <span
  m='501640'>this</span> <span m='501810'>must</span> <span m='502100'>be</span>
  <span m='502220'>less</span> <span m='502470'>than</span> <span
  m='502580'>or</span> <span m='502660'>equal</span> <span m='502910'>to</span>
  <span m='503020'>that.</span> </p><p><span m='505390'>And</span> <span
  m='506350'>the</span> <span m='508070'>closely</span> <span
  m='508410'>related</span> <span m='509180'>phenomenon</span> <span
  m='509620'>is</span> <span m='509900'>[? basi-- ?]</span> <span
  m='510375'>[AUDIO OUT]</span> <span m='517500'>The</span> <span
  m='517610'>probability</span> <span m='518289'>that</span> <span
  m='518539'>A</span> <span m='518780'>or</span> <span m='519000'>B</span> <span
  m='519260'>happens</span> <span m='519960'>is</span> <span
  m='520240'>greater</span> <span m='520549'>than</span> <span
  m='520710'>or</span> <span m='520860'>equal</span> <span m='521460'>to</span>
  <span m='521559'>the</span> <span m='521679'>probability</span> <span
  m='522370'>that</span> <span m='522570'>A</span> <span
  m='522750'>happens.</span> </p><p><span m='524600'>And</span> <span
  m='524990'>finally,</span> <span m='525520'>we</span> <span
  m='525680'>can</span> <span m='525830'>generalize</span> <span
  m='526330'>that</span> <span m='526520'>to</span> <span m='526620'>a</span>
  <span m='526895'>countable</span> <span m='527170'>collection</span> <span
  m='527630'>of</span> <span m='527710'>sets.</span> <span m='528050'>If</span>
  <span m='528210'>I</span> <span m='528320'>have</span> <span
  m='528900'>a</span> <span m='529010'>bunch</span> <span m='529310'>of</span>
  <span m='529410'>events--</span> <span m='530080'>A0,</span> <span
  m='530700'>A1,</span> <span m='531120'>and</span> <span m='531230'>so</span>
  <span m='531490'>on--</span> <span m='532250'>then</span> <span
  m='532500'>the</span> <span m='532660'>probability</span> <span
  m='533630'>that</span> <span m='534500'>at</span> <span
  m='534640'>least</span> <span m='534970'>one</span> <span m='535180'>of</span>
  <span m='535330'>them</span> <span m='535480'>occurs,</span> <span
  m='536070'>the</span> <span m='536170'>probability</span> <span
  m='536790'>of</span> <span m='536860'>the</span> <span m='537020'>union</span>
  <span m='537400'>of</span> <span m='537510'>the</span> <span
  m='537840'>Ai's,</span> <span m='538570'>is</span> <span
  m='538860'>less</span> <span m='539150'>than</span> <span m='539290'>or</span>
  <span m='539410'>equal</span> <span m='539900'>to</span> <span
  m='540620'>the</span> <span m='540740'>sum</span> <span m='541190'>of</span>
  <span m='541370'>their</span> <span m='541530'>probabilities.</span>
  </p><p><span m='542800'>This</span> <span m='542940'>is,</span> <span
  m='543040'>again,</span> <span m='543390'>another</span> <span
  m='543850'>kind</span> <span m='544070'>of</span> <span
  m='544580'>obvious</span> <span m='545080'>rule,</span> <span
  m='545510'>not</span> <span m='545730'>hard</span> <span m='545920'>to</span>
  <span m='545990'>prove.</span> <span m='546560'>We're</span> <span
  m='546730'>not</span> <span m='546910'>going</span> <span m='547010'>to</span>
  <span m='547050'>bother</span> <span m='547380'>proving</span> <span
  m='547700'>it,</span> <span m='547800'>because</span> <span
  m='548090'>it</span> <span m='548160'>really</span> <span m='548410'>is</span>
  <span m='548570'>obvious.</span> <span m='549010'>But</span> <span
  m='549200'>we</span> <span m='549340'>will</span> <span m='549510'>get</span>
  <span m='549700'>some</span> <span m='549830'>mileage</span> <span
  m='550250'>out</span> <span m='550390'>of</span> <span m='550510'>it</span>
  <span m='550620'>later</span> <span m='550920'>on.</span> </p><p><span
  m='552330'>So</span> <span m='552400'>to</span> <span
  m='552500'>summarize,</span> <span m='554520'>the</span> <span
  m='554740'>key</span> <span m='555010'>concept</span> <span
  m='555520'>here</span> <span m='555670'>is</span> <span m='555750'>a</span>
  <span m='555840'>probability</span> <span m='556450'>space.</span> <span
  m='557520'>It</span> <span m='557740'>consists</span> <span
  m='558190'>of</span> <span m='558280'>a</span> <span
  m='558370'>countable</span> <span m='558810'>set</span> <span
  m='559670'>of</span> <span m='559840'>outcomes,</span> <span
  m='560710'>the</span> <span m='560720'>sample</span> <span
  m='561070'>space,</span> <span m='561900'>and</span> <span m='562220'>a</span>
  <span m='562310'>probability</span> <span m='562980'>function</span> <span
  m='563890'>that</span> <span m='564160'>assigns</span> <span
  m='565760'>values</span> <span m='566160'>between</span> <span
  m='566520'>0</span> <span m='566860'>and</span> <span m='566960'>1</span>
  <span m='567180'>to</span> <span m='567270'>every</span> <span
  m='567580'>outcome</span> <span m='568240'>such</span> <span
  m='568630'>that</span> <span m='568960'>the</span> <span m='569060'>sum</span>
  <span m='569640'>of</span> <span m='569820'>the</span> <span
  m='569900'>probabilities</span> <span m='570880'>is</span> <span
  m='571070'>1.</span> <span m='571900'>And</span> <span m='572250'>when</span>
  <span m='572470'>we're</span> <span m='572610'>using</span> <span
  m='572960'>our</span> <span m='573080'>tree</span> <span
  m='573320'>model</span> <span m='573750'>and</span> <span m='573870'>so</span>
  <span m='574130'>on,</span> <span m='574570'>our</span> <span
  m='574750'>objective</span> <span m='575330'>is</span> <span
  m='575560'>to</span> <span m='575670'>construct</span> <span
  m='576200'>one</span> <span m='576370'>of</span> <span m='576500'>these</span>
  <span m='576800'>things.</span> <span m='577450'>Usually,</span> <span
  m='577810'>the</span> <span m='577880'>hard</span> <span
  m='578170'>part</span> <span m='578430'>will</span> <span m='578590'>be</span>
  <span m='579040'>verifying</span> <span m='579600'>that,</span> <span
  m='579730'>in</span> <span m='579850'>fact,</span> <span m='580620'>the</span>
  <span m='580830'>way</span> <span m='581020'>we've</span> <span
  m='581230'>assigned</span> <span m='581570'>probabilities</span> <span
  m='582210'>has</span> <span m='582420'>the</span> <span
  m='582520'>property</span> <span m='583090'>that</span> <span
  m='583220'>the</span> <span m='583300'>sum</span> <span m='583610'>of</span>
  <span m='583920'>them</span> <span m='584390'>is</span> <span
  m='584550'>equal</span> <span m='584850'>to</span> <span m='584950'>1.</span>
  </p>
embedded_media:
  - uid: 2f3ee7b7a4f14030fd5904228c558280
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 4e376a582900689b5704008b2a33a7d4
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 80e48a88d6724a9497fbeb074a3d84e4
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Amd_bNYzgUw
  - uid: eb6048c5137ae571d4538cc14ebedc55
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Amd_bNYzgUw/default.jpg'
  - uid: 06f628a29fa97fbe39cdf3445c1d8a27
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Amd_bNYzgUw
  - uid: f86d79db16ee9acd81cb1a9c84929781
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Amd_bNYzgUw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-7e0be1baca38/sample-spaces/Amd_bNYzgUw.srt
  - uid: c197884cf89a43ff5a32a9a0b979f6a7
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Amd_bNYzgUw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp11-2/vertical-7e0be1baca38/sample-spaces/Amd_bNYzgUw.pdf
  - uid: 7f985f3a0ce85c0272a5912ad75f05ad
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 88c14fd29edcd229105afc2754dee29a
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: baa98eb88bc52f34a184cf2282a89ad8
    parent_uid: c28a68cf275c4b1c676b3e286543012a
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_probspace_video_ipod.mp4
type: courses
layout: video
---
