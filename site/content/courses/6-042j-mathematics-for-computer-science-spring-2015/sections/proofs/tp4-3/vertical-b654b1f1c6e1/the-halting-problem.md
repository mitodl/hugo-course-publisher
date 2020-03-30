---
title: 'The Halting Problem [Optional]'
uid: 46f59690f298511eee75704b20e74722
parent_uid: 2b923648e33acab15b802e2ba689daec
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-b654b1f1c6e1/the-halting-problem
short_url: the-halting-problem
inline_embed_id: 91683647thehaltingproblemoptional47010928
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>PROFESSOR: [? Diagonal ?]</span> <span m='290'>arguments</span>
  <span m='930'>are</span> <span m='1260'>elegant,</span> <span
  m='2450'>and</span> <span m='2630'>infinite</span> <span
  m='3070'>sets--</span> <span m='3980'>some</span> <span m='4170'>people</span>
  <span m='4450'>think--</span> <span m='4620'>are</span> <span
  m='4690'>romantic.</span> </p><p><span m='6060'>But</span> <span
  m='6240'>you</span> <span m='6340'>could</span> <span
  m='6530'>legitimately</span> <span m='7260'>ask</span> <span
  m='7630'>what</span> <span m='8010'>is</span> <span m='8260'>all</span> <span
  m='8520'>this</span> <span m='9390'>weird</span> <span
  m='9620'>infinite</span> <span m='9990'>stuff</span> <span
  m='10300'>doing</span> <span m='10590'>in</span> <span m='10690'>a</span>
  <span m='10850'>course</span> <span m='11200'>that's</span> <span
  m='11350'>math</span> <span m='11520'>for</span> <span
  m='11690'>computer</span> <span m='12040'>science?</span> <span
  m='12935'>And</span> <span m='13200'>the</span> <span m='13310'>reason</span>
  <span m='13660'>is</span> <span m='13870'>that</span> <span
  m='14100'>diagonal</span> <span m='14570'>arguments</span> <span
  m='15000'>turn</span> <span m='15230'>out</span> <span m='15410'>to</span>
  <span m='15480'>play</span> <span m='15700'>a</span> <span
  m='15750'>fundamental</span> <span m='16379'>role</span> <span
  m='17050'>in</span> <span m='17250'>the</span> <span m='18010'>theory</span>
  <span m='18380'>of</span> <span m='18470'>computing.</span> <span
  m='19180'>And</span> <span m='19440'>what</span> <span m='19650'>we're</span>
  <span m='19740'>going</span> <span m='19860'>to</span> <span
  m='19930'>talk</span> <span m='20150'>about</span> <span m='20400'>now</span>
  <span m='20950'>is</span> <span m='21110'>the</span> <span
  m='21220'>application</span> <span m='21770'>of</span> <span
  m='21860'>diagonal</span> <span m='22380'>arguments</span> <span
  m='22910'>to</span> <span m='23040'>show</span> <span m='24000'>that</span>
  <span m='24160'>there</span> <span m='24320'>are</span> <span
  m='24470'>noncomputable</span> <span m='25230'>sets</span> <span
  m='25770'>and</span> <span m='26410'>examine</span> <span m='26920'>a</span>
  <span m='27120'>particular</span> <span m='27760'>one.</span> </p><p><span
  m='30280'>So</span> <span m='30620'>let's</span> <span m='30970'>look</span>
  <span m='31220'>at</span> <span m='32570'>the</span> <span
  m='33790'>class</span> <span m='34045'>of</span> <span
  m='34640'>infinite</span> <span m='35250'>binary</span> <span
  m='35690'>strings.</span> </p><p><span m='39260'>Now,</span> <span
  m='39370'>we've</span> <span m='39540'>seen</span> <span m='40100'>that</span>
  <span m='40330'>there</span> <span m='40500'>are</span> <span
  m='40555'>an</span> <span m='40610'>uncountable</span> <span
  m='41170'>number</span> <span m='41460'>of</span> <span
  m='41560'>infinite</span> <span m='41890'>binary</span> <span
  m='42230'>strings,</span> <span m='43530'>and</span> <span
  m='44040'>that's</span> <span m='44280'>because</span> <span
  m='44660'>there</span> <span m='44770'>was</span> <span m='44960'>a</span>
  <span m='45250'>simple</span> <span m='45620'>bijection</span> <span
  m='46300'>between</span> <span m='46630'>the</span> <span
  m='46770'>infinite</span> <span m='47180'>binary</span> <span
  m='47560'>strings</span> <span m='48405'>and</span> <span m='48552'>the</span>
  <span m='48700'>subsets</span> <span m='49805'>of</span> <span
  m='50060'>the</span> <span m='50170'>natural</span> <span
  m='50570'>numbers--</span> <span m='50950'>that</span> <span
  m='51065'>is</span> <span m='51180'>the</span> <span m='51240'>power</span>
  <span m='51570'>set</span> <span m='51930'>of</span> <span m='52130'>n.</span>
  </p><p><span m='53340'>Let's</span> <span m='53610'>look</span> <span
  m='53830'>at</span> <span m='53970'>the</span> <span m='56370'>infinite</span>
  <span m='56690'>binary</span> <span m='56910'>strings</span> <span
  m='57360'>that</span> <span m='57460'>we</span> <span m='57590'>might</span>
  <span m='57840'>think</span> <span m='58070'>of</span> <span
  m='58210'>and</span> <span m='58300'>call</span> <span
  m='59150'>computable</span> <span m='59760'>strings.</span> <span
  m='59990'>And</span> <span m='60105'>what</span> <span m='60220'>I</span>
  <span m='60340'>mean</span> <span m='60560'>by</span> <span m='60650'>a</span>
  <span m='60740'>computable</span> <span m='61250'>string</span> <span
  m='61560'>is</span> <span m='61820'>that</span> <span m='62065'>there's</span>
  <span m='62310'>simply</span> <span m='62600'>a</span> <span
  m='62670'>procedure</span> <span m='63300'>that</span> <span
  m='63550'>will</span> <span m='64129'>tell</span> <span m='64379'>me</span>
  <span m='64519'>what</span> <span m='64720'>its</span> <span
  m='64900'>digits</span> <span m='65280'>are.</span> <span m='65740'>So</span>
  <span m='66810'>what</span> <span m='66930'>I</span> <span
  m='67020'>mean</span> <span m='67320'>is</span> <span m='67550'>that</span>
  <span m='67850'>the</span> <span m='68020'>procedure</span> <span
  m='68680'>applied</span> <span m='69140'>to</span> <span
  m='69240'>argument</span> <span m='69830'>n</span> <span m='70180'>will</span>
  <span m='70350'>return</span> <span m='70680'>the</span> <span
  m='70820'>n-th</span> <span m='71145'>digit</span> <span m='71470'>of</span>
  <span m='71660'>the</span> <span m='71730'>string</span> <span
  m='72060'>s.</span> <span m='73140'>That's</span> <span m='73400'>the</span>
  <span m='73500'>definition</span> <span m='74050'>of</span> <span
  m='74130'>what</span> <span m='74260'>I</span> <span m='74300'>mean</span>
  <span m='74510'>by</span> <span m='74650'>saying</span> <span
  m='74990'>s</span> <span m='75200'>is</span> <span
  m='75340'>computable.</span> <span m='76020'>I</span> <span
  m='76150'>can</span> <span m='76350'>compute</span> <span m='76740'>its</span>
  <span m='76900'>digits,</span> <span m='77350'>whichever</span> <span
  m='77730'>digits</span> <span m='78120'>are</span> <span
  m='78210'>needed.</span> </p><p><span m='80360'>Now,</span> <span
  m='81130'>we</span> <span m='81250'>saw</span> <span m='81490'>that</span>
  <span m='81670'>there</span> <span m='81770'>were</span> <span
  m='81910'>only</span> <span m='82400'>a</span> <span
  m='82740'>countable</span> <span m='83460'>number</span> <span
  m='83840'>of</span> <span m='83990'>finite</span> <span
  m='84650'>binary</span> <span m='85040'>sequences,</span> <span
  m='86260'>and</span> <span m='86440'>I</span> <span m='86480'>mention</span>
  <span m='86920'>that</span> <span m='87140'>now</span> <span
  m='87360'>because</span> <span m='87830'>I</span> <span m='87860'>want</span>
  <span m='88070'>to</span> <span m='88130'>think</span> <span
  m='88390'>about</span> <span m='89230'>sequences</span> <span
  m='89890'>over</span> <span m='90090'>the</span> <span
  m='90200'>slightly</span> <span m='90600'>larger</span> <span
  m='91030'>alphabet</span> <span m='91640'>instead</span> <span
  m='91940'>of</span> <span m='92010'>0</span> <span m='92432'>1,</span> <span
  m='92854'>the</span> <span m='93276'>256</span> <span m='93700'>ASCII</span>
  <span m='94090'>characters.</span> </p><p><span m='95680'>And</span> <span
  m='96060'>by</span> <span m='96190'>the</span> <span m='96300'>same</span>
  <span m='96620'>argument,</span> <span m='97270'>the</span> <span
  m='97410'>set</span> <span m='97670'>of</span> <span m='97830'>finite</span>
  <span m='98450'>ASCII</span> <span m='98920'>strings</span> <span
  m='100130'>is</span> <span m='100410'>also</span> <span
  m='100840'>countable.</span> <span m='102330'>You</span> <span
  m='102450'>just</span> <span m='102690'>list</span> <span
  m='102755'>them</span> <span m='102820'>in</span> <span
  m='103070'>order</span> <span m='103320'>of</span> <span
  m='103525'>length--</span> <span m='103730'>same</span> <span
  m='104030'>argument</span> <span m='104450'>that</span> <span
  m='104550'>we</span> <span m='104690'>used</span> <span m='104900'>for</span>
  <span m='105010'>the</span> <span m='105120'>binary</span> <span
  m='105510'>strings.</span> </p><p><span m='106360'>Now,</span> <span
  m='106670'>the</span> <span m='106880'>point</span> <span m='107170'>of</span>
  <span m='107280'>looking</span> <span m='107570'>at</span> <span
  m='107650'>the</span> <span m='107760'>ASCII</span> <span
  m='108090'>strings--</span> <span m='108400'>the</span> <span
  m='108500'>256</span> <span m='109430'>keyboard</span> <span
  m='109820'>characters--</span> <span m='110500'>is</span> <span
  m='111340'>that</span> <span m='112130'>every</span> <span
  m='112540'>procedure</span> <span m='114000'>that</span> <span
  m='115000'>we</span> <span m='116460'>enter</span> <span
  m='116840'>into</span> <span m='116940'>a</span> <span
  m='117030'>computer,</span> <span m='118190'>we</span> <span
  m='118370'>type</span> <span m='118690'>in</span> <span m='118820'>an</span>
  <span m='118950'>ASCII</span> <span m='119250'>string.</span> <span
  m='119630'>Every</span> <span m='119910'>procedure</span> <span
  m='121090'>can</span> <span m='121310'>be</span> <span
  m='121590'>represented</span> <span m='122240'>by</span> <span
  m='122330'>an</span> <span m='122420'>ASCII</span> <span
  m='122810'>string.</span> </p><p><span m='124010'>And</span> <span
  m='124210'>since</span> <span m='124490'>they're</span> <span
  m='124670'>only</span> <span m='125040'>countably</span> <span
  m='125630'>many</span> <span m='126150'>finite</span> <span
  m='126630'>ASCII</span> <span m='127020'>strings,</span> <span
  m='128280'>it</span> <span m='128500'>follows</span> <span
  m='129169'>that</span> <span m='129380'>there</span> <span
  m='129470'>are</span> <span m='129560'>only</span> <span
  m='129940'>countably</span> <span m='130509'>many</span> <span
  m='131070'>computable</span> <span m='131620'>procedures.</span> <span
  m='133370'>Now,</span> <span m='133830'>since</span> <span
  m='135050'>in</span> <span m='135190'>order</span> <span m='135410'>to</span>
  <span m='135550'>be</span> <span m='135680'>a</span> <span
  m='135750'>computable</span> <span m='136380'>infinite</span> <span
  m='137070'>string,</span> <span m='137280'>there</span> <span
  m='137490'>has</span> <span m='137790'>to</span> <span m='137860'>be</span>
  <span m='138000'>a</span> <span m='138070'>procedure</span> <span
  m='138590'>which</span> <span m='138790'>computes</span> <span
  m='139190'>is</span> <span m='139350'>digits,</span> <span
  m='140270'>we</span> <span m='140430'>can</span> <span
  m='140580'>immediately</span> <span m='141170'>conclude</span> <span
  m='142130'>that</span> <span m='142360'>there</span> <span
  m='142450'>are</span> <span m='142540'>only</span> <span
  m='142970'>countably</span> <span m='143690'>many</span> <span
  m='144610'>infinite</span> <span m='145230'>binary</span> <span
  m='145660'>sequences</span> <span m='146660'>that</span> <span
  m='146890'>are</span> <span m='147010'>computable--</span> <span
  m='147990'>only</span> <span m='148310'>countably</span> <span
  m='148950'>many</span> <span m='149260'>computable</span> <span
  m='149930'>infinite</span> <span m='150330'>binary</span> <span
  m='150660'>sequences.</span> </p><p><span m='152040'>But</span> <span
  m='152530'>I</span> <span m='152640'>already</span> <span
  m='152870'>said</span> <span m='153460'>there</span> <span
  m='153750'>are</span> <span m='153810'>an</span> <span
  m='154030'>uncountable</span> <span m='154780'>number</span> <span
  m='155070'>of</span> <span m='155150'>those</span> <span
  m='155350'>infinite</span> <span m='155850'>binary</span> <span
  m='155990'>sequences.</span> <span m='156345'>So</span> <span
  m='156522'>it</span> <span m='156700'>has</span> <span m='156960'>to</span>
  <span m='157070'>be</span> <span m='157560'>that</span> <span
  m='157750'>there</span> <span m='158030'>are</span> <span
  m='158420'>noncomputable</span> <span m='160060'>sequences,</span> <span
  m='160630'>noncomputable</span> <span m='161340'>infinite</span> <span
  m='161680'>binary</span> <span m='162030'>strings,</span> <span
  m='162490'>that</span> <span m='162620'>exist.</span> </p><p><span
  m='164410'>So</span> <span m='164690'>we</span> <span m='164850'>can</span>
  <span m='165000'>conclude</span> <span m='165400'>that</span> <span
  m='165570'>as</span> <span m='165700'>a</span> <span m='165750'>matter</span>
  <span m='166050'>of</span> <span m='166140'>fact,</span> <span
  m='166530'>since</span> <span m='167270'>the</span> <span
  m='167690'>set</span> <span m='167960'>of</span> <span
  m='168070'>infinite</span> <span m='168450'>binary</span> <span
  m='168770'>strings</span> <span m='169050'>is</span> <span
  m='169170'>uncountable</span> <span m='170220'>and</span> <span
  m='170430'>the</span> <span m='170520'>computable</span> <span
  m='171050'>ones</span> <span m='171300'>are</span> <span m='171370'>a</span>
  <span m='171440'>countable</span> <span m='172020'>subset,</span> <span
  m='173420'>there</span> <span m='173560'>have</span> <span
  m='173880'>to</span> <span m='174000'>be</span> <span m='174460'>an</span>
  <span m='174720'>uncountable</span> <span m='175520'>number</span> <span
  m='176430'>of</span> <span m='176870'>noncomputable</span> <span
  m='178140'>infinite</span> <span m='178570'>binary</span> <span
  m='178900'>sequences.</span> <span m='179730'>Most</span> <span
  m='181000'>infinite</span> <span m='181440'>binary</span> <span
  m='181780'>sequences</span> <span m='182350'>are</span> <span
  m='182480'>actually</span> <span m='182750'>noncomputable.</span> <span
  m='185180'>OK.</span> </p><p><span m='186110'>That's</span> <span
  m='186500'>kind</span> <span m='186700'>of</span> <span
  m='186790'>abstract</span> <span m='187120'>thing</span> <span
  m='187450'>to</span> <span m='187570'>know.</span> <span
  m='187910'>They're</span> <span m='188120'>out</span> <span
  m='188370'>there,</span> <span m='188810'>and</span> <span
  m='189420'>you</span> <span m='189530'>can't</span> <span
  m='189750'>get</span> <span m='189880'>a</span> <span m='189920'>hold</span>
  <span m='190230'>of</span> <span m='190280'>them</span> <span
  m='190330'>computationally.</span> <span m='191210'>But</span> <span
  m='191390'>the</span> <span m='191510'>reasonable</span> <span
  m='191900'>question</span> <span m='192310'>to</span> <span
  m='192480'>ask</span> <span m='192740'>is</span> <span m='193260'>what</span>
  <span m='193360'>do</span> <span m='193460'>they</span> <span
  m='193600'>look</span> <span m='193880'>like?</span> </p><p><span
  m='195310'>And</span> <span m='195750'>what</span> <span
  m='195930'>we're</span> <span m='196040'>going</span> <span
  m='196180'>to</span> <span m='196240'>see</span> <span m='196610'>is</span>
  <span m='197130'>that</span> <span m='197930'>if</span> <span
  m='198160'>you</span> <span m='198470'>consider</span> <span
  m='200410'>a</span> <span m='200510'>sensible</span> <span
  m='201170'>concrete</span> <span m='202150'>computational</span> <span
  m='202740'>problem</span> <span m='203730'>of</span> <span
  m='204210'>giving</span> <span m='204500'>a</span> <span
  m='204570'>procedure,</span> <span m='205890'>figuring</span> <span
  m='206380'>out</span> <span m='206600'>whether</span> <span
  m='207720'>it</span> <span m='208010'>will</span> <span m='208720'>run</span>
  <span m='209110'>and</span> <span m='209480'>turn</span> <span
  m='209880'>a</span> <span m='210150'>value</span> <span
  m='210510'>successfully</span> <span m='211180'>on</span> <span
  m='211290'>some</span> <span m='211510'>argument</span> <span
  m='212130'>or</span> <span m='212270'>not</span> <span m='213500'>is</span>
  <span m='214340'>called</span> <span m='214750'>testing</span> <span
  m='215740'>the</span> <span m='215840'>halting</span> <span
  m='216430'>property</span> <span m='217130'>of</span> <span
  m='217300'>procedures.</span> </p><p><span m='217990'>I</span> <span
  m='218060'>want</span> <span m='218260'>to</span> <span
  m='218340'>know--</span> <span m='218520'>given</span> <span
  m='218780'>a</span> <span m='218850'>procedure</span> <span
  m='219165'>and</span> <span m='219480'>argument</span> <span
  m='219755'>that</span> <span m='220030'>I</span> <span m='220130'>could</span>
  <span m='220270'>apply</span> <span m='220470'>it</span> <span
  m='220670'>to,</span> <span m='221750'>does</span> <span m='222000'>it</span>
  <span m='222150'>return</span> <span m='222560'>a</span> <span
  m='222600'>value</span> <span m='223350'>or</span> <span
  m='223505'>does</span> <span m='223660'>something</span> <span
  m='224230'>else</span> <span m='224550'>bad</span> <span
  m='224790'>happen</span> <span m='224955'>and</span> <span
  m='225120'>it</span> <span m='225230'>runs</span> <span
  m='225460'>forever</span> <span m='225800'>and</span> <span
  m='226140'>returns</span> <span m='226310'>an</span> <span
  m='226480'>error?</span> <span m='227220'>We</span> <span
  m='227420'>don't</span> <span m='227610'>get</span> <span m='227760'>a</span>
  <span m='227810'>satisfactory</span> <span m='228530'>value</span> <span
  m='228970'>out.</span> <span m='229155'>And</span> <span m='229340'>if</span>
  <span m='229500'>it</span> <span m='229620'>does</span> <span m='230050'>[?
  satisfactorily ?]</span> <span m='230670'>return</span> <span
  m='231030'>something,</span> <span m='231410'>we</span> <span
  m='231520'>say</span> <span m='231645'>it</span> <span
  m='231770'>halts.</span> </p><p><span m='233470'>And</span> <span
  m='233940'>what</span> <span m='234200'>I'm</span> <span
  m='234400'>going</span> <span m='234580'>to</span> <span
  m='234760'>argue</span> <span m='235770'>is</span> <span
  m='236380'>that</span> <span m='236740'>the</span> <span
  m='236850'>halting</span> <span m='237250'>problem</span> <span
  m='238350'>is</span> <span m='238610'>not</span> <span
  m='238940'>decidable.</span> <span m='239710'>That</span> <span
  m='239890'>is,</span> <span m='240010'>there's</span> <span
  m='240230'>no</span> <span m='240450'>procedure</span> <span
  m='241880'>which</span> <span m='242750'>given</span> <span
  m='244070'>input</span> <span m='244610'>that</span> <span
  m='244760'>describes</span> <span m='245230'>a</span> <span
  m='245290'>procedure,</span> <span m='246600'>the</span> <span
  m='246730'>fixed</span> <span m='247050'>procedure</span> <span
  m='247480'>can</span> <span m='247640'>figure</span> <span
  m='248010'>out</span> <span m='248140'>what</span> <span m='248280'>its</span>
  <span m='248400'>input</span> <span m='248840'>is</span> <span
  m='248935'>doing.</span> </p><p><span m='249370'>Let's</span> <span
  m='249610'>look</span> <span m='249770'>at</span> <span m='249850'>that</span>
  <span m='250160'>in</span> <span m='250260'>more</span> <span
  m='250310'>detail.</span> </p><p><span m='252370'>So</span> <span
  m='252770'>let's</span> <span m='253060'>think</span> <span
  m='253260'>about</span> <span m='253560'>string</span> <span
  m='253910'>procedures</span> <span m='254510'>because</span> <span
  m='254730'>we're</span> <span m='254870'>thinking</span> <span
  m='255190'>about</span> <span m='255420'>procedures</span> <span
  m='255860'>being</span> <span m='256060'>represented</span> <span
  m='256660'>by</span> <span m='256810'>ASCII</span> <span
  m='257160'>strings.</span> <span m='257910'>So</span> <span
  m='258060'>let's</span> <span m='258279'>think</span> <span
  m='258450'>about</span> <span m='258690'>procedures</span> <span
  m='259149'>that</span> <span m='259269'>take</span> <span m='259490'>a</span>
  <span m='259540'>string</span> <span m='259890'>argument.</span> </p><p><span
  m='260370'>So</span> <span m='260630'>an</span> <span
  m='260700'>example</span> <span m='261250'>of</span> <span m='261440'>a</span>
  <span m='261750'>procedure</span> <span m='262180'>P,</span> <span
  m='262410'>it</span> <span m='262530'>might</span> <span m='262740'>be</span>
  <span m='262870'>that</span> <span m='263000'>when</span> <span
  m='263100'>you</span> <span m='263250'>apply</span> <span m='263900'>P</span>
  <span m='264360'>to</span> <span m='264610'>the</span> <span
  m='264735'>string</span> <span m='264797'>no,</span> <span
  m='264828'>it</span> <span m='264860'>returns</span> <span
  m='265320'>2.</span> <span m='266050'>When</span> <span m='266170'>you</span>
  <span m='266280'>apply</span> <span m='266590'>it</span> <span
  m='266680'>to</span> <span m='266760'>the</span> <span
  m='266860'>string</span> <span m='267240'>albert,</span> <span
  m='267485'>it</span> <span m='267730'>returns</span> <span
  m='268400'>meyer.</span> <span m='269700'>When</span> <span
  m='269980'>you</span> <span m='270400'>apply</span> <span m='271060'>it</span>
  <span m='271200'>to</span> <span m='271300'>this</span> <span
  m='271950'>string</span> <span m='272270'>of</span> <span
  m='272520'>weird</span> <span m='272830'>symbols,</span> <span
  m='273660'>that</span> <span m='273950'>causes</span> <span
  m='274370'>an</span> <span m='274480'>error.</span> <span
  m='275220'>And</span> <span m='275500'>you</span> <span
  m='275630'>apply</span> <span m='276030'>it</span> <span m='276260'>to</span>
  <span m='276780'>the</span> <span m='277950'>sequence</span> <span
  m='278340'>of</span> <span m='278410'>characters</span> <span
  m='278870'>what</span> <span m='279100'>now,</span> <span
  m='279860'>and</span> <span m='280000'>it</span> <span
  m='280140'>actually</span> <span m='280500'>runs</span> <span
  m='280860'>forever.</span> </p><p><span m='281310'>These</span> <span
  m='281600'>are</span> <span m='281710'>just</span> <span
  m='281950'>illustrations</span> <span m='282770'>of</span> <span
  m='283230'>the</span> <span m='283350'>kind</span> <span m='283610'>of</span>
  <span m='283740'>behavior</span> <span m='284670'>that</span> <span
  m='284940'>some</span> <span m='285430'>weird</span> <span
  m='285720'>string</span> <span m='286020'>procedure</span> <span
  m='286820'>might</span> <span m='287140'>exhibit.</span> </p><p><span
  m='289260'>So</span> <span m='289780'>what</span> <span m='290050'>I</span>
  <span m='290150'>want</span> <span m='290350'>to</span> <span
  m='290420'>think</span> <span m='290640'>about</span> <span
  m='291010'>is--</span> <span m='291210'>suppose</span> <span
  m='291630'>I</span> <span m='291760'>have</span> <span m='292310'>an</span>
  <span m='292800'>ASCII</span> <span m='293230'>string</span> <span
  m='293600'>s,</span> <span m='293860'>a</span> <span m='293910'>finite</span>
  <span m='294420'>ASCII</span> <span m='294820'>string.</span> <span
  m='295690'>That's</span> <span m='295810'>the</span> <span
  m='295910'>one</span> <span m='296110'>that</span> <span
  m='296260'>defines</span> <span m='296730'>this</span> <span
  m='296930'>procedure</span> <span m='297470'>P.</span> <span
  m='297780'>When</span> <span m='297950'>I'm</span> <span
  m='298150'>trying</span> <span m='298380'>to</span> <span
  m='298790'>run</span> <span m='299150'>P</span> <span m='299410'>on</span>
  <span m='299530'>the</span> <span m='299610'>computer,</span> <span
  m='300150'>I'll</span> <span m='300180'>have</span> <span m='300380'>to</span>
  <span m='300520'>type</span> <span m='300840'>in</span> <span
  m='301120'>s</span> <span m='301260'>in</span> <span m='301400'>order</span>
  <span m='301620'>to</span> <span m='301740'>give</span> <span
  m='302210'>the</span> <span m='302310'>computer</span> <span
  m='302710'>the</span> <span m='302830'>definition</span> <span
  m='303370'>of</span> <span m='303470'>P</span> <span m='303670'>to</span>
  <span m='303790'>tell</span> <span m='303990'>it</span> <span
  m='304110'>what</span> <span m='304310'>to</span> <span m='304400'>do.</span>
  </p><p><span m='305410'>And</span> <span m='305660'>I'm</span> <span
  m='305720'>going</span> <span m='305880'>to</span> <span m='305940'>say</span>
  <span m='306290'>that</span> <span m='306580'>s</span> <span
  m='307130'>HALTS--</span> <span m='307650'>the</span> <span
  m='307740'>string</span> <span m='308430'>has</span> <span
  m='308710'>this</span> <span m='308920'>property</span> <span
  m='309350'>called</span> <span m='309650'>halting</span> <span
  m='310120'>or</span> <span m='310340'>HALTS--</span> <span
  m='311350'>if</span> <span m='311570'>and</span> <span m='311680'>only</span>
  <span m='312090'>if</span> <span m='312740'>this</span> <span
  m='312940'>procedure</span> <span m='313540'>P</span> <span
  m='313810'>that</span> <span m='313990'>s</span> <span
  m='314270'>describes</span> <span m='315580'>returns</span> <span
  m='316120'>successfully</span> <span m='317010'>when</span> <span
  m='317220'>it's</span> <span m='317360'>applied</span> <span
  m='317760'>to</span> <span m='317850'>s.</span> </p><p><span
  m='319340'>This</span> <span m='319535'>is</span> <span
  m='319730'>where</span> <span m='319860'>we're</span> <span
  m='320150'>really</span> <span m='320390'>doing</span> <span
  m='320650'>a</span> <span m='320710'>diagonal</span> <span
  m='321280'>argument.</span> <span m='321690'>We're</span> <span
  m='321850'>taking</span> <span m='322640'>the</span> <span
  m='323586'>sth</span> <span m='324060'>object--</span> <span
  m='325290'>the</span> <span m='325430'>procedure</span> <span
  m='325940'>that's</span> <span m='326160'>described</span> <span
  m='326650'>by</span> <span m='326800'>s</span> <span m='327130'>and</span>
  <span m='327200'>applying</span> <span m='327680'>it</span> <span
  m='328060'>to</span> <span m='328310'>s.</span> <span m='328560'>And</span>
  <span m='329790'>that's</span> <span m='330140'>kind</span> <span
  m='330330'>of</span> <span m='330450'>going</span> <span
  m='330760'>down</span> <span m='331010'>the</span> <span
  m='331090'>diagonal</span> <span m='331600'>of</span> <span
  m='331720'>s</span> <span m='331920'>applied</span> <span m='332280'>to</span>
  <span m='332370'>s,</span> <span m='332640'>where</span> <span
  m='335820'>the</span> <span m='335970'>n-th</span> <span
  m='336280'>element</span> <span m='336680'>of</span> <span
  m='336760'>the</span> <span m='336880'>n-th</span> <span m='337160'>row</span>
  <span m='337530'>in</span> <span m='337650'>a</span> <span
  m='337960'>pictorial</span> <span m='338580'>diagonal</span> <span
  m='339090'>argument.</span> <span m='339820'>That's</span> <span
  m='340030'>the</span> <span m='340170'>idea</span> <span
  m='340590'>that</span> <span m='340810'>we're</span> <span
  m='341030'>going</span> <span m='341290'>here.</span> </p><p><span
  m='341400'>But</span> <span m='341510'>let's</span> <span m='341620'>to</span>
  <span m='341810'>go</span> <span m='341950'>back</span> <span
  m='342170'>to</span> <span m='342260'>the</span> <span
  m='342370'>definition.</span> <span m='343200'>A</span> <span
  m='343320'>string</span> <span m='343575'>is</span> <span
  m='343830'>said</span> <span m='343955'>to</span> <span m='344080'>HALT</span>
  <span m='344980'>if</span> <span m='345590'>when</span> <span
  m='345840'>you</span> <span m='346530'>interpret</span> <span
  m='347030'>it</span> <span m='347210'>as</span> <span m='347540'>the</span>
  <span m='347640'>description</span> <span m='348120'>of</span> <span
  m='348220'>a</span> <span m='348310'>procedure</span> <span
  m='349430'>that</span> <span m='349800'>takes</span> <span m='350050'>a</span>
  <span m='350100'>string</span> <span m='350400'>argument</span> <span
  m='351300'>and</span> <span m='351480'>you</span> <span
  m='351620'>apply</span> <span m='352020'>that</span> <span
  m='352690'>string</span> <span m='353000'>procedure</span> <span
  m='353530'>to</span> <span m='353680'>that</span> <span m='353890'>very</span>
  <span m='354160'>same</span> <span m='354540'>thing,</span> <span
  m='354890'>s,</span> <span m='355710'>you</span> <span
  m='355870'>successfully</span> <span m='356580'>return.</span> <span
  m='357660'>That's</span> <span m='358690'>the</span> <span
  m='358760'>halting</span> <span m='359130'>problem.</span> </p><p><span
  m='360460'>And</span> <span m='360530'>what</span> <span m='360700'>I</span>
  <span m='360780'>want</span> <span m='360980'>to</span> <span
  m='361030'>argue</span> <span m='361500'>is</span> <span
  m='362110'>that</span> <span m='362290'>it's</span> <span
  m='362500'>impossible</span> <span m='363600'>that</span> <span
  m='363790'>there</span> <span m='363940'>could</span> <span
  m='364120'>be</span> <span m='364280'>a</span> <span
  m='364350'>procedure</span> <span m='364930'>Q</span> <span
  m='365970'>that</span> <span m='366220'>decided</span> <span
  m='367540'>the</span> <span m='367720'>property</span> <span
  m='368210'>HALTS</span> <span m='368630'>of</span> <span
  m='369050'>strings.</span> <span m='369970'>That</span> <span
  m='370170'>is</span> <span m='370340'>to</span> <span m='370460'>say,</span>
  <span m='371260'>Q</span> <span m='371520'>applied</span> <span
  m='371860'>to</span> <span m='372050'>a</span> <span m='372250'>string</span>
  <span m='372440'>returns</span> <span m='372890'>yes</span> <span
  m='373460'>if</span> <span m='373710'>s</span> <span m='374500'>does</span>
  <span m='374890'>return</span> <span m='375240'>successfully--</span> <span
  m='375580'>if</span> <span m='375920'>s</span> <span m='376110'>HALTS.</span>
  <span m='377270'>And</span> <span m='377740'>it</span> <span
  m='377920'>returns</span> <span m='378310'>no</span> <span
  m='378570'>otherwise.</span> </p><p><span m='379310'>Q</span> <span
  m='379490'>applied</span> <span m='379970'>to</span> <span m='380100'>s</span>
  <span m='380820'>will</span> <span m='381100'>say</span> <span
  m='381360'>no</span> <span m='381830'>if</span> <span m='382450'>s</span>
  <span m='382680'>runs</span> <span m='382940'>forever</span> <span
  m='383740'>or</span> <span m='384090'>if</span> <span m='384210'>s</span>
  <span m='384610'>has</span> <span m='384810'>a</span> <span
  m='384880'>type</span> <span m='385180'>error</span> <span
  m='385560'>or</span> <span m='385800'>s</span> <span m='386040'>does</span>
  <span m='386250'>anything</span> <span m='386650'>other</span> <span
  m='386890'>than</span> <span m='387080'>successfully</span> <span
  m='388180'>return</span> <span m='388590'>a</span> <span
  m='388630'>value.</span> </p><p><span m='389720'>Let's</span> <span
  m='389990'>suppose,</span> <span m='390580'>for</span> <span
  m='390680'>the</span> <span m='390780'>sake</span> <span m='390910'>of</span>
  <span m='390980'>contradiction,</span> <span m='392050'>that</span> <span
  m='392250'>there</span> <span m='392370'>was</span> <span
  m='392690'>this</span> <span m='392880'>HALTS</span> <span
  m='393380'>decider.</span> <span m='394350'>I</span> <span
  m='394500'>claim</span> <span m='394820'>there</span> <span
  m='394930'>can't</span> <span m='395240'>be</span> <span
  m='395360'>such</span> <span m='395620'>a</span> <span m='395690'>Q.</span>
  <span m='396590'>For</span> <span m='396770'>the</span> <span
  m='397025'>sake</span> <span m='397152'>of</span> <span
  m='398750'>contradiction,</span> <span m='399410'>let's</span> <span
  m='399620'>assume</span> <span m='399930'>there</span> <span
  m='400050'>was</span> <span m='400300'>one.</span> </p><p><span
  m='401650'>Then</span> <span m='402350'>this</span> <span m='402520'>is</span>
  <span m='402690'>the</span> <span m='402970'>trick</span> <span
  m='403260'>that</span> <span m='403380'>I'm</span> <span
  m='403480'>going</span> <span m='403650'>to</span> <span m='403750'>do.</span>
  <span m='404000'>I'm</span> <span m='404495'>going</span> <span
  m='404742'>to</span> <span m='404990'>modify</span> <span m='405880'>Q</span>
  <span m='407605'>to</span> <span m='407880'>act</span> <span
  m='408380'>as</span> <span m='408480'>though</span> <span m='408596'>it</span>
  <span m='408713'>was</span> <span m='408830'>complementing</span> <span
  m='409560'>the</span> <span m='409670'>diagonal.</span> <span
  m='410670'>More</span> <span m='410830'>precisely,</span> <span
  m='411390'>this</span> <span m='411560'>is</span> <span m='411660'>what</span>
  <span m='411800'>I'm</span> <span m='411850'>going</span> <span
  m='411900'>to</span> <span m='412120'>do</span> <span m='412370'>with</span>
  <span m='412485'>Q.</span> <span m='412600'>I'm</span> <span
  m='412720'>going</span> <span m='412850'>to</span> <span
  m='413000'>modify</span> <span m='413470'>Q</span> <span m='413850'>to</span>
  <span m='414000'>be</span> <span m='414180'>another</span> <span
  m='414490'>procedure</span> <span m='414960'>Q</span> <span
  m='415200'>prime,</span> <span m='416380'>which</span> <span
  m='416650'>just</span> <span m='416980'>behaves</span> <span
  m='417240'>a</span> <span m='417300'>little</span> <span m='417500'>bit</span>
  <span m='417700'>differently.</span> <span m='418260'>Namely,</span> <span
  m='419030'>Q</span> <span m='419310'>prime</span> <span m='419670'>of</span>
  <span m='419800'>s</span> <span m='420010'>returns</span> <span
  m='420450'>yes</span> <span m='420910'>when</span> <span m='421180'>Q</span>
  <span m='421330'>of</span> <span m='421480'>s</span> <span
  m='421630'>returns</span> <span m='421890'>no,</span> <span
  m='423490'>and</span> <span m='423750'>Q</span> <span m='423990'>prime</span>
  <span m='424330'>of</span> <span m='424480'>s</span> <span
  m='424970'>returns</span> <span m='425450'>nothing--</span> <span
  m='426766'>that</span> <span m='426953'>is,</span> <span m='427140'>it</span>
  <span m='427370'>doesn't</span> <span m='427670'>HALT--</span> <span
  m='428600'>if</span> <span m='428830'>you</span> <span m='429050'>Q</span>
  <span m='429193'>of</span> <span m='429336'>s</span> <span
  m='429480'>returns</span> <span m='429930'>yes.</span> </p><p><span
  m='430990'>So</span> <span m='431450'>Q</span> <span m='431700'>prime</span>
  <span m='432110'>is</span> <span m='432240'>like</span> <span
  m='432490'>complementing</span> <span m='433270'>the</span> <span
  m='433370'>bits</span> <span m='433650'>on</span> <span m='433770'>the</span>
  <span m='433850'>diagonal,</span> <span m='434510'>but</span> <span
  m='434580'>here's</span> <span m='434790'>the</span> <span
  m='434880'>precise</span> <span m='435310'>definition.</span> <span
  m='436390'>Q</span> <span m='436560'>of</span> <span m='436680'>s</span> <span
  m='436890'>says</span> <span m='437100'>no.</span> <span m='437190'>Q</span>
  <span m='437280'>of</span> <span m='437370'>prime</span> <span
  m='438030'>of</span> <span m='438130'>s</span> <span m='438360'>says</span>
  <span m='438590'>yes.</span> <span m='439410'>Q</span> <span
  m='439700'>of</span> <span m='439870'>s</span> <span m='440230'>says</span>
  <span m='440700'>yes.</span> <span m='442680'>s</span> <span
  m='442900'>HALTS</span> <span m='443120'>successfully.</span> <span
  m='443880'>Q</span> <span m='444120'>prime</span> <span m='444680'>then</span>
  <span m='445500'>does</span> <span m='445740'>not</span> <span
  m='446060'>HALT</span> <span m='446360'>successfully.</span> <span
  m='447070'>It</span> <span m='447210'>returns</span> <span
  m='447670'>nothing</span> <span m='447980'>at</span> <span
  m='448230'>all.</span> <span m='448960'>Let's</span> <span
  m='449260'>go</span> <span m='449470'>crank</span> <span
  m='449780'>through</span> <span m='449950'>the</span> <span
  m='450060'>consequences</span> <span m='450840'>of</span> <span
  m='450970'>these</span> <span m='451190'>definitions.</span> </p><p><span
  m='452660'>So</span> <span m='453370'>s</span> <span m='453546'>HALTS</span>
  <span m='454960'>means</span> <span m='456500'>Q</span> <span
  m='456640'>prime</span> <span m='456965'>of</span> <span m='457290'>s</span>
  <span m='457610'>returns</span> <span m='458080'>nothing.</span> <span
  m='458550'>That</span> <span m='458780'>was</span> <span m='458960'>the</span>
  <span m='459060'>way</span> <span m='459230'>we</span> <span
  m='459440'>define</span> <span m='459870'>Q</span> <span
  m='460050'>prime</span> <span m='460272'>of</span> <span m='460495'>s.</span>
  </p><p><span m='462170'>Now,</span> <span m='462720'>let's</span> <span
  m='463170'>let</span> <span m='463490'>t</span> <span m='464000'>be</span>
  <span m='464160'>the</span> <span m='464320'>text</span> <span
  m='464750'>for</span> <span m='464910'>Q</span> <span m='465140'>prime.</span>
  <span m='467310'>If</span> <span m='467500'>Q</span> <span
  m='467630'>was</span> <span m='467780'>a</span> <span
  m='467860'>procedure,</span> <span m='468400'>then</span> <span
  m='468620'>surely</span> <span m='469010'>we</span> <span
  m='469190'>can</span> <span m='469420'>tweak</span> <span
  m='469810'>this</span> <span m='469990'>procedure</span> <span
  m='470460'>Q</span> <span m='471180'>to</span> <span m='471310'>get</span>
  <span m='471830'>the</span> <span m='471970'>procedure</span> <span
  m='472460'>Q</span> <span m='472680'>prime.</span> <span m='473100'>So</span>
  <span m='473310'>Q</span> <span m='473520'>prime</span> <span
  m='473840'>will</span> <span m='473970'>have</span> <span m='474210'>a</span>
  <span m='474300'>text</span> <span m='475000'>that</span> <span
  m='475170'>describes.</span> <span m='475940'>It'll</span> <span
  m='476620'>be</span> <span m='476730'>the</span> <span m='476880'>ASCII</span>
  <span m='477270'>string</span> <span m='477640'>that</span> <span
  m='477830'>defines</span> <span m='478320'>Q</span> <span
  m='478500'>prime.</span> <span m='479160'>Let's</span> <span
  m='479410'>let</span> <span m='479900'>t</span> <span m='480380'>be</span>
  <span m='480515'>that</span> <span m='480650'>ASCII</span> <span
  m='481110'>string.</span> </p><p><span m='481550'>What</span> <span
  m='481603'>do</span> <span m='481710'>we</span> <span m='481870'>have?</span>
  </p><p><span m='482530'>Then</span> <span m='482720'>by</span> <span
  m='482830'>definition</span> <span m='483400'>of</span> <span
  m='483490'>HALTS,</span> <span m='484680'>t</span> <span
  m='484950'>HALTS</span> <span m='485490'>if</span> <span m='485670'>and</span>
  <span m='485770'>only</span> <span m='486180'>if</span> <span
  m='486980'>the</span> <span m='487200'>procedure</span> <span
  m='487780'>that</span> <span m='487980'>t</span> <span
  m='488570'>scribes--</span> <span m='489110'>namely</span> <span
  m='489410'>Q</span> <span m='489620'>prime</span> <span
  m='490010'>applied</span> <span m='490480'>to</span> <span
  m='490620'>t--</span> <span m='491190'>returns</span> <span
  m='491770'>a</span> <span m='491870'>value</span> <span
  m='492270'>successfully.</span> <span m='493790'>OK?</span> </p><p><span
  m='494660'>Now</span> <span m='494790'>by</span> <span
  m='494960'>definition</span> <span m='495460'>of</span> <span
  m='495530'>Q</span> <span m='495820'>prime</span> <span
  m='496170'>however,</span> <span m='496690'>Q</span> <span
  m='496940'>prime</span> <span m='497260'>was</span> <span
  m='497460'>the</span> <span m='497560'>thing</span> <span
  m='498300'>that</span> <span m='499670'>on</span> <span m='500010'>t,</span>
  <span m='501080'>it</span> <span m='501330'>returned</span> <span
  m='501870'>a</span> <span m='501900'>value</span> <span
  m='502240'>successfully</span> <span m='503000'>if</span> <span
  m='503170'>and</span> <span m='503260'>only</span> <span m='503580'>if</span>
  <span m='504000'>it</span> <span m='504170'>was</span> <span
  m='504340'>not</span> <span m='504660'>the</span> <span m='504790'>case</span>
  <span m='505220'>that</span> <span m='505370'>t</span> <span
  m='505820'>HALTS.</span> </p><p><span m='507950'>So</span> <span
  m='508170'>if</span> <span m='508250'>you</span> <span m='508330'>put</span>
  <span m='508540'>those</span> <span m='509010'>two</span> <span
  m='509180'>things</span> <span m='509480'>together--</span> <span
  m='510620'>that</span> <span m='510830'>is,</span> <span
  m='511020'>we're</span> <span m='511160'>looking</span> <span
  m='511530'>at</span> <span m='511940'>t</span> <span m='512140'>HALTS</span>
  <span m='512530'>if</span> <span m='512679'>and</span> <span
  m='512750'>only</span> <span m='513059'>if</span> <span m='513240'>Q</span>
  <span m='513500'>prime</span> <span m='514030'>of</span> <span
  m='514169'>t</span> <span m='514419'>returns,</span> <span
  m='515320'>and</span> <span m='515510'>Q</span> <span m='515690'>prime</span>
  <span m='515940'>of</span> <span m='516030'>t</span> <span
  m='516210'>returns</span> <span m='516640'>a</span> <span
  m='516825'>value</span> <span m='517010'>successfully</span> <span
  m='517559'>if</span> <span m='517730'>only</span> <span m='518049'>if</span>
  <span m='518380'>not</span> <span m='519460'>t</span> <span
  m='519860'>HALTS--</span> <span m='520789'>then</span> <span
  m='521120'>put</span> <span m='521330'>the</span> <span m='521450'>two</span>
  <span m='521640'>together,</span> <span m='522270'>and</span> <span
  m='522400'>we</span> <span m='522520'>have</span> <span m='522770'>a</span>
  <span m='522860'>contradiction.</span> <span m='523990'>t</span> <span
  m='524220'>HALTS</span> <span m='524640'>if</span> <span m='524780'>and</span>
  <span m='524860'>only</span> <span m='525160'>if</span> <span
  m='525380'>t</span> <span m='525690'>doesn't</span> <span
  m='526030'>HALT.</span> </p><p><span m='527220'>And</span> <span
  m='527750'>that</span> <span m='528010'>contradiction</span> <span
  m='528760'>says</span> <span m='529510'>that</span> <span
  m='529740'>our</span> <span m='530050'>original</span> <span
  m='530360'>hypothesis</span> <span m='531140'>that</span> <span
  m='531290'>we</span> <span m='531420'>had</span> <span m='531640'>a</span>
  <span m='531710'>Q</span> <span m='532540'>that</span> <span
  m='532840'>would</span> <span m='533500'>decide</span> <span
  m='533940'>the</span> <span m='534010'>halting</span> <span
  m='534390'>problem</span> <span m='534770'>can't</span> <span
  m='535050'>be</span> <span m='535160'>right.</span> <span
  m='536210'>It's</span> <span m='536430'>impossible</span> <span
  m='537320'>to</span> <span m='537470'>write</span> <span m='537720'>a</span>
  <span m='537780'>procedure</span> <span m='538920'>that</span> <span
  m='539210'>determines</span> <span m='540450'>of</span> <span
  m='540940'>strings</span> <span m='541430'>whether</span> <span
  m='541730'>they</span> <span m='541930'>describe</span> <span
  m='542490'>a</span> <span m='542550'>procedure</span> <span
  m='543380'>that</span> <span m='543610'>HALTS</span> <span
  m='543880'>when</span> <span m='544150'>applied</span> <span
  m='544630'>to</span> <span m='544840'>itself.</span> <span
  m='546140'>OK.</span> </p><p><span m='547000'>That</span> <span
  m='547360'>at</span> <span m='547470'>least</span> <span
  m='547580'>gives</span> <span m='547800'>us</span> <span
  m='547940'>some</span> <span m='548180'>concrete</span> <span
  m='549430'>problem</span> <span m='549950'>that</span> <span
  m='550080'>we</span> <span m='550230'>can</span> <span m='550370'>say</span>
  <span m='550820'>is</span> <span m='551480'>not</span> <span
  m='552510'>something</span> <span m='552940'>that</span> <span
  m='553100'>a</span> <span m='553180'>computer</span> <span
  m='553650'>can</span> <span m='553800'>do.</span> <span m='553990'>Even</span>
  <span m='554210'>though</span> <span m='554330'>it's</span> <span
  m='554470'>a</span> <span m='554520'>very</span> <span m='554820'>well</span>
  <span m='555070'>defined</span> <span m='555630'>clear</span> <span
  m='556300'>question,</span> <span m='558250'>it's</span> <span
  m='558470'>just</span> <span m='558690'>not</span> <span
  m='558950'>possible</span> <span m='559570'>to</span> <span
  m='559650'>get</span> <span m='559790'>a</span> <span
  m='561140'>computing</span> <span m='562560'>procedure</span> <span
  m='563210'>that</span> <span m='563530'>will</span> <span m='564160'>on</span>
  <span m='564315'>an</span> <span m='564470'>arbitrary</span> <span
  m='564940'>string,</span> <span m='565230'>figure</span> <span
  m='565620'>out</span> <span m='565990'>the</span> <span
  m='566200'>right</span> <span m='566430'>answer.</span> <span
  m='567220'>Any</span> <span m='568070'>program</span> <span
  m='568730'>that</span> <span m='569890'>applied</span> <span
  m='570320'>to</span> <span m='570410'>strings</span> <span
  m='570840'>is</span> <span m='570960'>trying</span> <span m='571310'>to</span>
  <span m='571410'>do</span> <span m='571560'>this</span> <span
  m='571800'>job,</span> <span m='572150'>either</span> <span
  m='572790'>it</span> <span m='572920'>will</span> <span m='573040'>give</span>
  <span m='573190'>the</span> <span m='573290'>wrong</span> <span
  m='573610'>answer.</span> <span m='574010'>Or</span> <span
  m='574150'>if</span> <span m='574230'>it</span> <span m='574340'>never</span>
  <span m='574560'>gives</span> <span m='574675'>a</span> <span
  m='574790'>wrong</span> <span m='575110'>answer,</span> <span
  m='575340'>it</span> <span m='575463'>means</span> <span m='575586'>it</span>
  <span m='575710'>doesn't</span> <span m='575990'>give</span> <span
  m='576080'>an</span> <span m='576170'>answer</span> <span m='576650'>at</span>
  <span m='576890'>all</span> <span m='577460'>on</span> <span
  m='578800'>some</span> <span m='579110'>strings.</span> </p><p><span
  m='580650'>All</span> <span m='580860'>right.</span> <span
  m='581400'>Well,</span> <span m='581610'>you</span> <span
  m='581820'>could</span> <span m='581950'>say</span> <span
  m='582130'>that</span> <span m='582300'>I</span> <span m='582320'>don't</span>
  <span m='582510'>really</span> <span m='582740'>care</span> <span
  m='583120'>very</span> <span m='583340'>much</span> <span
  m='583550'>about</span> <span m='583730'>whether</span> <span
  m='583850'>a</span> <span m='583990'>program</span> <span
  m='584265'>HALTS</span> <span m='584540'>or</span> <span
  m='584820'>not.</span> <span m='585120'>So</span> <span
  m='585280'>let's</span> <span m='585530'>look</span> <span
  m='585880'>at</span> <span m='586620'>how</span> <span m='586745'>do</span>
  <span m='586870'>you</span> <span m='587070'>apply</span> <span
  m='587360'>the</span> <span m='587490'>same</span> <span
  m='587790'>reasoning--</span> <span m='588210'>or</span> <span
  m='588350'>more</span> <span m='588550'>precisely,</span> <span
  m='590860'>as</span> <span m='591070'>a</span> <span
  m='591280'>corollary</span> <span m='592070'>of</span> <span
  m='592440'>the</span> <span m='592540'>fact</span> <span
  m='592790'>that</span> <span m='592930'>the</span> <span
  m='593000'>halting</span> <span m='593350'>problem</span> <span
  m='593720'>is</span> <span m='594080'>not</span> <span
  m='594270'>computable,</span> <span m='595160'>let's</span> <span
  m='595440'>talk</span> <span m='595670'>about</span> <span
  m='595930'>something</span> <span m='596240'>that</span> <span
  m='596400'>sounds</span> <span m='596720'>closer</span> <span
  m='597150'>to</span> <span m='597280'>a</span> <span
  m='597370'>practical</span> <span m='597900'>interest,</span> <span
  m='598330'>mainly</span> <span m='599020'>type-checking.</span> </p><p><span
  m='600200'>So</span> <span m='600360'>I</span> <span m='600430'>want</span>
  <span m='600600'>to</span> <span m='600670'>think</span> <span
  m='600850'>about</span> <span m='601050'>the</span> <span
  m='601160'>type-checking</span> <span m='601880'>problem.</span> <span
  m='602990'>And</span> <span m='603560'>what</span> <span m='603780'>I</span>
  <span m='604140'>want</span> <span m='604310'>to</span> <span
  m='604380'>say</span> <span m='604680'>is</span> <span m='604890'>that</span>
  <span m='605250'>in</span> <span m='605460'>fact,</span> <span
  m='605920'>there's</span> <span m='606160'>no</span> <span
  m='606380'>strict</span> <span m='606730'>procedures</span> <span
  m='607320'>that</span> <span m='607490'>type-checks</span> <span
  m='609350'>procedures</span> <span m='610080'>perfectly.</span> </p><p><span
  m='612350'>So</span> <span m='612610'>what</span> <span m='612730'>I</span>
  <span m='612830'>mean</span> <span m='613210'>is</span> <span
  m='614040'>that</span> <span m='615190'>I</span> <span m='615350'>want</span>
  <span m='615540'>to</span> <span m='615600'>be</span> <span
  m='615770'>able</span> <span m='615950'>to</span> <span
  m='616040'>write</span> <span m='616240'>a</span> <span
  m='616300'>program</span> <span m='616760'>that</span> <span
  m='616835'>will</span> <span m='616910'>look</span> <span m='617330'>at</span>
  <span m='617440'>a</span> <span m='617550'>program</span> <span
  m='620880'>text,</span> <span m='621730'>an</span> <span
  m='622080'>ASCII</span> <span m='622740'>string</span> <span
  m='623190'>that</span> <span m='623390'>describes</span> <span
  m='623850'>a</span> <span m='623910'>procedure,</span> <span
  m='624510'>and</span> <span m='624680'>figure</span> <span
  m='625060'>out</span> <span m='625290'>whether</span> <span
  m='626100'>that</span> <span m='627120'>ASCII</span> <span
  m='627570'>string,</span> <span m='628010'>if</span> <span
  m='628170'>you</span> <span m='628370'>ran</span> <span m='628620'>it,</span>
  <span m='629360'>would</span> <span m='630490'>cause</span> <span
  m='630680'>a</span> <span m='630870'>run-time</span> <span
  m='631360'>type</span> <span m='631655'>error.</span> </p><p><span
  m='631950'>That's</span> <span m='632170'>what</span> <span
  m='632380'>type-checkers</span> <span m='632940'>are</span> <span
  m='633010'>supposed</span> <span m='633440'>to</span> <span
  m='633530'>do.</span> <span m='633800'>They're</span> <span
  m='633870'>supposed</span> <span m='634230'>to</span> <span
  m='634300'>check</span> <span m='634520'>your</span> <span
  m='634640'>program,</span> <span m='635050'>figure</span> <span
  m='635420'>out</span> <span m='635570'>whether</span> <span
  m='636260'>the</span> <span m='636360'>program</span> <span
  m='637500'>will</span> <span m='637680'>cause</span> <span m='637900'>a</span>
  <span m='638010'>run-time</span> <span m='638500'>type</span> <span
  m='638800'>error.</span> <span m='639005'>If</span> <span
  m='639210'>so,</span> <span m='639490'>it</span> <span
  m='639580'>reports</span> <span m='640050'>it.</span> <span
  m='640400'>If</span> <span m='640640'>not,</span> <span m='641280'>it</span>
  <span m='641450'>says,</span> <span m='642330'>this</span> <span
  m='642620'>program</span> <span m='643090'>is</span> <span
  m='643180'>safe.</span> <span m='643530'>Other</span> <span
  m='643790'>things</span> <span m='644070'>may</span> <span
  m='644220'>go</span> <span m='644410'>wrong,</span> <span
  m='644770'>but</span> <span m='644910'>it's</span> <span m='645060'>not</span>
  <span m='645530'>going</span> <span m='645690'>to</span> <span
  m='645770'>commit</span> <span m='646080'>a</span> <span
  m='646170'>run-time</span> <span m='646600'>type</span> <span
  m='646930'>error.</span> </p><p><span m='647730'>So</span> <span
  m='647860'>let's</span> <span m='648090'>suppose</span> <span
  m='648590'>that</span> <span m='648750'>I</span> <span m='648880'>had</span>
  <span m='649690'>such</span> <span m='649990'>a</span> <span
  m='650070'>type</span> <span m='650390'>checking</span> <span
  m='650790'>procedure</span> <span m='651380'>C.</span> <span
  m='652360'>So</span> <span m='652590'>what</span> <span m='652780'>that</span>
  <span m='652980'>means</span> <span m='653260'>is</span> <span
  m='653460'>that</span> <span m='653600'>for</span> <span
  m='653740'>program</span> <span m='654230'>text</span> <span
  m='654660'>s,</span> <span m='655941'>C</span> <span m='656084'>of</span>
  <span m='656227'>s</span> <span m='656370'>returns</span> <span
  m='656830'>yes</span> <span m='657330'>if</span> <span
  m='657580'>running</span> <span m='657755'>s</span> <span
  m='657930'>would</span> <span m='658980'>cause</span> <span
  m='660120'>a</span> <span m='660280'>run-time</span> <span
  m='660870'>type</span> <span m='661200'>error.</span> <span
  m='661720'>And</span> <span m='661930'>C</span> <span m='662067'>of</span>
  <span m='662205'>s</span> <span m='662480'>returns</span> <span
  m='662930'>no--</span> <span m='663890'>the</span> <span
  m='664020'>output</span> <span m='664360'>string</span> <span
  m='664670'>no--</span> <span m='665320'>otherwise</span> <span
  m='665880'>if</span> <span m='666050'>s</span> <span m='667660'>would</span>
  <span m='668460'>not</span> <span m='668690'>cause</span> <span
  m='669140'>a</span> <span m='669260'>run-time</span> <span
  m='669640'>type</span> <span m='669940'>error.</span> <span
  m='670260'>In</span> <span m='670366'>other</span> <span
  m='670473'>words,</span> <span m='670526'>s</span> <span m='670580'>is</span>
  <span m='670740'>safe.</span> <span m='672238'>All right.</span> </p><p><span
  m='673580'>Now,</span> <span m='673890'>what</span> <span m='674080'>I</span>
  <span m='674120'>claim</span> <span m='674580'>is</span> <span
  m='674850'>that</span> <span m='675060'>if</span> <span m='675230'>you</span>
  <span m='675370'>give</span> <span m='675620'>me</span> <span
  m='675750'>C--</span> <span m='676050'>if</span> <span m='676160'>I</span>
  <span m='676240'>have</span> <span m='676420'>a</span> <span
  m='676500'>procedure</span> <span m='676970'>that's</span> <span
  m='677210'>this</span> <span m='677340'>perfect</span> <span
  m='677720'>type-checker--</span> <span m='678640'>I</span> <span
  m='678780'>can</span> <span m='679040'>use</span> <span m='679280'>C</span>
  <span m='680006'>to</span> <span m='680370'>build</span> <span
  m='680780'>a</span> <span m='681400'>tester</span> <span m='681830'>for</span>
  <span m='682000'>HALTS,</span> <span m='683150'>which</span> <span
  m='683480'>we</span> <span m='683630'>said</span> <span m='683870'>is</span>
  <span m='683995'>impossible.</span> <span m='684910'>So</span> <span
  m='685140'>how</span> <span m='685380'>would</span> <span m='685600'>I</span>
  <span m='685840'>use</span> <span m='686150'>C</span> <span
  m='686460'>to</span> <span m='687420'>get</span> <span m='687720'>a</span>
  <span m='687810'>HALTS</span> <span m='688260'>tester,</span> <span
  m='688810'>H.</span> </p><p><span m='689450'>Here's</span> <span
  m='689730'>how.</span> </p><p><span m='691430'>I'm</span> <span
  m='691560'>going</span> <span m='691670'>to</span> <span
  m='691740'>tell</span> <span m='691890'>you</span> <span m='691960'>how</span>
  <span m='692270'>to</span> <span m='693300'>compute</span> <span
  m='694610'>H</span> <span m='694880'>of</span> <span m='695040'>s.</span>
  </p><p><span m='697360'>I'm</span> <span m='697490'>describing</span> <span
  m='698090'>the</span> <span m='698360'>procedure</span> <span
  m='698910'>that</span> <span m='699830'>this</span> <span
  m='700020'>tester</span> <span m='700470'>H</span> <span
  m='700920'>carries</span> <span m='701370'>out</span> <span
  m='701780'>on</span> <span m='702120'>argument</span> <span
  m='702880'>s.</span> <span m='703390'>And</span> <span m='703540'>what</span>
  <span m='703700'>it</span> <span m='703830'>does</span> <span
  m='704060'>is</span> <span m='704190'>given</span> <span
  m='704480'>argument</span> <span m='705010'>s,</span> <span
  m='705630'>it's</span> <span m='705850'>going</span> <span
  m='705980'>to</span> <span m='706050'>construct</span> <span
  m='706580'>a</span> <span m='706670'>new</span> <span
  m='706870'>program</span> <span m='707470'>that's</span> <span
  m='707680'>a</span> <span m='707730'>small</span> <span
  m='708040'>modification</span> <span m='708440'>of</span> <span
  m='708840'>s.</span> </p><p><span m='709520'>It's</span> <span
  m='709770'>going</span> <span m='709870'>to</span> <span
  m='710110'>construct</span> <span m='710580'>this</span> <span
  m='710770'>new</span> <span m='710900'>program</span> <span
  m='711380'>s</span> <span m='711630'>prime</span> <span m='712790'>that</span>
  <span m='713960'>acts</span> <span m='714390'>like</span> <span
  m='714630'>an</span> <span m='714730'>interpreter</span> <span
  m='715360'>for</span> <span m='715630'>s.</span> <span m='716450'>So</span>
  <span m='716690'>s</span> <span m='716950'>is</span> <span m='719070'>a</span>
  <span m='719150'>computer</span> <span m='719540'>program</span> <span
  m='719670'>or</span> <span m='719800'>a</span> <span
  m='720060'>procedure.</span> <span m='720540'>I</span> <span
  m='720590'>want</span> <span m='720760'>to</span> <span m='720820'>know</span>
  <span m='720980'>whether</span> <span m='721230'>if</span> <span
  m='721280'>you</span> <span m='721330'>just</span> <span m='721530'>run</span>
  <span m='721750'>it,</span> <span m='722150'>it'll</span> <span
  m='722380'>HALT</span> <span m='722710'>or</span> <span m='722790'>not.</span>
  <span m='723410'>I'm</span> <span m='723490'>going</span> <span
  m='723610'>to</span> <span m='723730'>tweak</span> <span m='724050'>it</span>
  <span m='724140'>a</span> <span m='724210'>little</span> <span
  m='724450'>bit</span> <span m='725040'>so</span> <span m='725225'>that</span>
  <span m='725410'>s</span> <span m='725670'>prime</span> <span
  m='726090'>acts</span> <span m='726480'>like</span> <span m='726750'>s</span>
  <span m='727270'>but</span> <span m='727855'>in</span> <span
  m='727982'>a</span> <span m='728110'>slightly</span> <span
  m='728540'>modified</span> <span m='729140'>way.</span> <span
  m='729295'>And</span> <span m='729450'>here's</span> <span
  m='729750'>how</span> <span m='729960'>s</span> <span m='730170'>prime</span>
  <span m='730480'>works.</span> </p><p><span m='731410'>S</span> <span
  m='731650'>prime</span> <span m='731890'>is</span> <span
  m='731980'>going</span> <span m='732130'>to</span> <span m='732210'>be</span>
  <span m='732785'>an</span> <span m='733090'>interpreter</span> <span
  m='733450'>that's</span> <span m='733810'>simulating</span> <span
  m='734480'>step-by-step</span> <span m='735250'>how</span> <span
  m='735440'>s</span> <span m='735710'>behaves.</span> <span
  m='736210'>But</span> <span m='736830'>at</span> <span m='737030'>the</span>
  <span m='737100'>moment</span> <span m='737580'>that</span> <span
  m='737685'>it</span> <span m='737790'>discovers</span> <span
  m='738430'>that</span> <span m='738630'>s</span> <span m='739160'>is</span>
  <span m='739350'>about</span> <span m='739810'>to</span> <span
  m='740320'>commit</span> <span m='740660'>a</span> <span
  m='740770'>run-time</span> <span m='741240'>type</span> <span
  m='741530'>error--</span> <span m='741820'>that</span> <span
  m='741950'>the</span> <span m='742060'>next</span> <span
  m='742360'>instruction</span> <span m='743280'>that</span> <span
  m='743450'>s</span> <span m='743680'>prime</span> <span
  m='744230'>would</span> <span m='744350'>execute</span> <span
  m='745430'>in</span> <span m='745600'>simulating</span> <span
  m='746330'>s</span> <span m='746710'>was</span> <span m='746890'>going</span>
  <span m='747020'>to</span> <span m='747080'>be</span> <span
  m='747290'>a</span> <span m='747470'>run-time</span> <span
  m='747920'>type</span> <span m='748200'>error--</span> <span
  m='748560'>s</span> <span m='748830'>prime</span> <span
  m='749080'>would</span> <span m='749100'>just</span> <span
  m='749400'>skip</span> <span m='749560'>it.</span> <span m='750620'>And</span>
  <span m='751730'>who</span> <span m='751800'>knows</span> <span
  m='752060'>what</span> <span m='752210'>the</span> <span
  m='752290'>consequences</span> <span m='752960'>of</span> <span
  m='753040'>skipping</span> <span m='753390'>it</span> <span
  m='753470'>will</span> <span m='753610'>be,</span> <span m='753695'>but</span>
  <span m='753780'>it'll</span> <span m='754010'>skip</span> <span
  m='754133'>it</span> <span m='754256'>and</span> <span m='754380'>just</span>
  <span m='754610'>keep</span> <span m='754830'>going.</span> <span
  m='756780'>OK.</span> </p><p></p><p><span m='760828'>If</span> <span
  m='761232'>s</span> <span m='761636'>prime</span> <span m='762040'>in</span>
  <span m='762380'>simulating</span> <span m='763730'>program</span> <span
  m='764320'>s</span> <span m='765080'>discovers</span> <span
  m='765820'>that</span> <span m='766070'>in</span> <span m='766220'>fact</span>
  <span m='766710'>s</span> <span m='766920'>returns</span> <span
  m='767380'>successfully--</span> <span m='768080'>those</span> <span
  m='768380'>that</span> <span m='768582'>is</span> <span m='768785'>s</span>
  <span m='769190'>HALTS--</span> <span m='769790'>then</span> <span
  m='770310'>s</span> <span m='770590'>prime</span> <span m='770820'>will</span>
  <span m='771050'>purposely</span> <span m='771660'>make</span> <span
  m='771880'>a</span> <span m='771960'>type</span> <span
  m='772250'>error.</span> <span m='774530'>So</span> <span
  m='774640'>let's</span> <span m='774870'>think</span> <span
  m='775050'>about</span> <span m='775270'>what</span> <span
  m='775440'>that</span> <span m='775690'>means.</span> </p><p></p><p><span
  m='777130'>Well,</span> <span m='777400'>actually</span> <span
  m='778080'>let</span> <span m='778200'>me</span> <span m='778280'>just</span>
  <span m='778480'>wrap</span> <span m='778710'>up</span> <span
  m='778880'>what</span> <span m='779020'>the</span> <span
  m='779100'>definition</span> <span m='779580'>of</span> <span
  m='779660'>H</span> <span m='779930'>is.</span> <span m='780470'>So</span>
  <span m='780680'>the</span> <span m='780755'>way</span> <span
  m='780830'>H</span> <span m='781240'>works</span> <span m='781650'>is</span>
  <span m='781950'>given</span> <span m='782220'>input</span> <span
  m='782590'>s,</span> <span m='783430'>it</span> <span
  m='783630'>constructs</span> <span m='784210'>the</span> <span
  m='784320'>program</span> <span m='784780'>s</span> <span
  m='784990'>prime</span> <span m='785690'>and</span> <span
  m='785930'>applies</span> <span m='786550'>the</span> <span
  m='786690'>type-checker</span> <span m='787620'>C</span> <span
  m='787945'>to</span> <span m='788270'>s</span> <span m='788700'>prime</span>
  <span m='789380'>and</span> <span m='789600'>returns</span> <span
  m='790060'>the</span> <span m='790140'>same</span> <span
  m='790520'>value</span> <span m='791100'>that</span> <span m='791230'>c</span>
  <span m='791750'>does.</span> </p><p><span m='793190'>So</span> <span
  m='794030'>what</span> <span m='794200'>we</span> <span m='794330'>can</span>
  <span m='794600'>figure</span> <span m='794750'>out</span> <span
  m='794960'>by</span> <span m='795080'>these</span> <span
  m='795280'>definitions</span> <span m='795920'>is</span> <span
  m='796130'>the</span> <span m='796320'>s</span> <span
  m='796715'>HALTS--</span> <span m='797110'>the</span> <span
  m='797620'>string</span> <span m='797980'>s</span> <span m='798650'>is</span>
  <span m='798870'>a</span> <span m='799480'>cloud</span> <span
  m='799860'>halting</span> <span m='800280'>string--</span> <span
  m='801320'>if</span> <span m='801540'>and</span> <span m='801640'>only</span>
  <span m='802070'>if</span> <span m='802670'>the</span> <span
  m='802780'>string</span> <span m='803160'>s</span> <span
  m='803460'>prime</span> <span m='804450'>makes</span> <span
  m='804970'>a</span> <span m='805150'>run-time</span> <span
  m='805790'>type</span> <span m='806180'>error.</span> <span
  m='806330'>Because</span> <span m='806680'>remember,</span> <span
  m='807500'>the</span> <span m='807810'>interpreter,</span> <span
  m='808510'>which</span> <span m='808700'>is</span> <span
  m='808810'>what</span> <span m='809530'>s</span> <span m='809790'>prime</span>
  <span m='810380'>was</span> <span m='810620'>behaving</span> <span
  m='811100'>like,</span> <span m='811660'>was</span> <span
  m='813480'>simulating</span> <span m='814090'>what</span> <span
  m='814220'>s</span> <span m='814370'>did.</span> <span m='814520'>And</span>
  <span m='814820'>if</span> <span m='815070'>s</span> <span
  m='815240'>was</span> <span m='815380'>going</span> <span m='815500'>to</span>
  <span m='815540'>HALT</span> <span m='815810'>successfully,</span> <span
  m='816700'>s</span> <span m='816970'>prime</span> <span
  m='817250'>makes</span> <span m='817490'>a</span> <span
  m='817590'>run-time</span> <span m='818050'>type</span> <span
  m='818360'>error.</span> </p><p><span m='819110'>That</span> <span
  m='819380'>means</span> <span m='819740'>that</span> <span m='820120'>C</span>
  <span m='820590'>is</span> <span m='820780'>going</span> <span
  m='820910'>to</span> <span m='820980'>say</span> <span m='821710'>yes</span>
  <span m='822080'>to</span> <span m='822300'>s</span> <span
  m='822490'>prime--</span> <span m='823010'>yes,</span> <span
  m='823390'>it</span> <span m='823490'>has</span> <span m='823630'>a</span>
  <span m='823720'>run-time</span> <span m='824150'>type</span> <span
  m='824420'>error.</span> <span m='825100'>And</span> <span
  m='825390'>by</span> <span m='825520'>definition</span> <span
  m='826140'>of</span> <span m='826270'>H,</span> <span m='826920'>that</span>
  <span m='827120'>means</span> <span m='827360'>that</span> <span
  m='827530'>H</span> <span m='827810'>of</span> <span m='827980'>s</span> <span
  m='828550'>says</span> <span m='828870'>yes</span> <span
  m='829650'>because</span> <span m='829880'>H</span> <span m='830130'>of</span>
  <span m='830250'>s</span> <span m='830560'>constructed</span> <span
  m='831200'>s</span> <span m='831400'>prime</span> <span m='832110'>to</span>
  <span m='832210'>C.</span> <span m='833180'>OK.</span> </p><p><span
  m='834280'>On</span> <span m='834420'>the</span> <span m='834550'>other</span>
  <span m='834670'>hand,</span> <span m='835400'>if</span> <span
  m='835660'>s</span> <span m='836080'>does</span> <span m='836290'>not</span>
  <span m='836620'>HALT,</span> <span m='838220'>that</span> <span
  m='838500'>means</span> <span m='838970'>that</span> <span
  m='841070'>something</span> <span m='841480'>else</span> <span
  m='841730'>goes</span> <span m='841940'>wrong</span> <span
  m='842190'>with</span> <span m='842360'>s.</span> <span m='842610'>It's</span>
  <span m='842810'>not</span> <span m='843050'>going</span> <span
  m='843180'>to</span> <span m='843240'>successfully</span> <span
  m='843940'>return.</span> </p><p><span m='845060'>Then</span> <span
  m='846100'>s</span> <span m='846400'>prime--</span> <span
  m='847510'>when</span> <span m='847960'>it's</span> <span
  m='848300'>simulating</span> <span m='849050'>s--</span> <span
  m='850250'>is</span> <span m='850420'>never</span> <span
  m='850740'>going</span> <span m='850860'>to</span> <span
  m='850940'>make</span> <span m='851140'>a</span> <span
  m='851240'>run-time</span> <span m='851710'>type</span> <span
  m='851990'>error</span> <span m='852230'>because</span> <span
  m='852610'>that's</span> <span m='852880'>the</span> <span
  m='852970'>way</span> <span m='853110'>s</span> <span m='853330'>prime</span>
  <span m='853530'>goes.</span> <span m='853760'>Whenever</span> <span
  m='854120'>it</span> <span m='854250'>detects</span> <span
  m='854570'>that</span> <span m='854675'>there</span> <span
  m='854780'>would</span> <span m='855030'>be</span> <span
  m='855350'>about</span> <span m='855700'>to</span> <span m='855770'>be</span>
  <span m='855920'>a</span> <span m='855960'>run-time</span> <span
  m='856340'>type</span> <span m='856520'>error,</span> <span
  m='856700'>it</span> <span m='856820'>skips</span> <span m='856940'>it.</span>
  </p><p><span m='857610'>So</span> <span m='857820'>s</span> <span
  m='858050'>prime</span> <span m='858710'>is</span> <span
  m='858950'>likely</span> <span m='859440'>to</span> <span
  m='859570'>keep</span> <span m='859880'>running</span> <span
  m='860230'>forever</span> <span m='860810'>because</span> <span
  m='860985'>it's</span> <span m='861160'>simulating</span> <span
  m='861520'>this</span> <span m='861880'>program</span> <span
  m='862380'>s</span> <span m='862565'>that</span> <span
  m='862750'>doesn't</span> <span m='863010'>HALT,</span> <span
  m='863930'>but</span> <span m='864380'>it</span> <span m='864620'>won't</span>
  <span m='864900'>make</span> <span m='865090'>a</span> <span
  m='865180'>type</span> <span m='865520'>error.</span> <span
  m='866500'>And</span> <span m='866700'>that</span> <span
  m='866930'>means</span> <span m='867240'>that</span> <span m='867530'>C</span>
  <span m='867645'>of</span> <span m='867760'>s</span> <span
  m='868000'>prime</span> <span m='868270'>is</span> <span
  m='868390'>going</span> <span m='868520'>to</span> <span m='868590'>say</span>
  <span m='869080'>no--</span> <span m='869550'>no</span> <span
  m='869730'>type</span> <span m='870050'>error.</span> <span
  m='870600'>And</span> <span m='870780'>H</span> <span m='871040'>of</span>
  <span m='871140'>s</span> <span m='871340'>is</span> <span
  m='871460'>going</span> <span m='871580'>to</span> <span m='871640'>say</span>
  <span m='872220'>no.</span> </p><p><span m='873360'>And</span> <span
  m='873520'>that</span> <span m='873740'>means</span> <span
  m='874120'>that</span> <span m='874350'>when</span> <span m='874550'>s</span>
  <span m='874820'>does</span> <span m='875000'>not</span> <span
  m='875240'>HALT,</span> <span m='875620'>H</span> <span m='876030'>of</span>
  <span m='876440'>s</span> <span m='876980'>properly</span> <span
  m='877550'>says</span> <span m='877920'>no.</span> <span m='878210'>In</span>
  <span m='878350'>other</span> <span m='878490'>words,</span> <span
  m='878920'>I've</span> <span m='879080'>just</span> <span
  m='879360'>walked</span> <span m='879660'>through</span> <span
  m='879880'>the</span> <span m='880070'>argument</span> <span
  m='880930'>that</span> <span m='881440'>this</span> <span
  m='882020'>procedure</span> <span m='882760'>H</span> <span
  m='883100'>that</span> <span m='883250'>I've</span> <span
  m='883400'>described</span> <span m='884310'>actually</span> <span
  m='884820'>is</span> <span m='885170'>a</span> <span m='885260'>decider</span>
  <span m='885690'>for</span> <span m='885920'>HALTS.</span> <span
  m='887480'>And</span> <span m='887660'>that's</span> <span m='887870'>a</span>
  <span m='887930'>contradiction.</span> </p><p><span m='889810'>The</span>
  <span m='890070'>H</span> <span m='890380'>that</span> <span
  m='890530'>I</span> <span m='890590'>gave</span> <span m='890950'>you</span>
  <span m='891040'>would</span> <span m='891220'>solve</span> <span
  m='891530'>the</span> <span m='891590'>halting</span> <span
  m='892000'>problem</span> <span m='892900'>if</span> <span
  m='893150'>there</span> <span m='893270'>was</span> <span m='893540'>a</span>
  <span m='893620'>perfect</span> <span m='894000'>type-checker,</span> <span
  m='895230'>and</span> <span m='895510'>there</span> <span
  m='895640'>can't</span> <span m='895970'>be</span> <span m='896150'>a</span>
  <span m='896650'>halting</span> <span m='896900'>problem</span> <span
  m='897510'>decider.</span> <span m='898230'>So</span> <span
  m='898450'>there</span> <span m='898570'>can't</span> <span
  m='898830'>be</span> <span m='898990'>a</span> <span m='899030'>perfect</span>
  <span m='899460'>type</span> <span m='899720'>checker.</span> </p><p><span
  m='900450'>C</span> <span m='900750'>must</span> <span m='901080'>make</span>
  <span m='901280'>a</span> <span m='901320'>mistake.</span> <span
  m='902210'>It</span> <span m='902420'>can't</span> <span
  m='903230'>accurately</span> <span m='903910'>predict</span> <span
  m='904530'>run-time</span> <span m='905070'>errors.</span> </p><p><span
  m='906520'>And</span> <span m='907950'>that</span> <span m='908290'>is</span>
  <span m='908480'>an</span> <span m='908580'>example</span> <span
  m='909050'>of</span> <span m='909930'>how</span> <span m='910260'>you</span>
  <span m='910490'>reason</span> <span m='910990'>from</span> <span
  m='911340'>this</span> <span m='912410'>kind</span> <span m='912610'>of</span>
  <span m='912700'>contrived</span> <span m='913210'>halting</span> <span
  m='913620'>problem</span> <span m='914050'>that's</span> <span
  m='914290'>sort</span> <span m='914365'>of</span> <span
  m='914440'>self-referential</span> <span m='915430'>whether</span> <span
  m='916630'>the</span> <span m='917440'>string</span> <span
  m='918370'>procedure</span> <span m='919260'>applied</span> <span
  m='919650'>to</span> <span m='919860'>its</span> <span m='920000'>own</span>
  <span m='920310'>definition</span> <span m='921510'>HALTS</span> <span
  m='921830'>or</span> <span m='921920'>not.</span> <span m='922510'>And</span>
  <span m='922780'>we</span> <span m='922920'>can</span> <span
  m='923080'>apply</span> <span m='923470'>it</span> <span m='923700'>to</span>
  <span m='924480'>all</span> <span m='924690'>sorts</span> <span
  m='924940'>of</span> <span m='925020'>questions</span> <span
  m='925480'>and</span> <span m='925580'>properties</span> <span
  m='926090'>of</span> <span m='926200'>procedures</span> <span
  m='926650'>that</span> <span m='926730'>we</span> <span
  m='926860'>really</span> <span m='927160'>care</span> <span
  m='927430'>about.</span> </p><p><span m='927690'>In</span> <span
  m='927800'>fact,</span> <span m='928020'>the</span> <span
  m='928090'>same</span> <span m='928340'>reasoning</span> <span
  m='928700'>really</span> <span m='928980'>shows</span> <span
  m='929370'>that</span> <span m='929490'>it's</span> <span
  m='929620'>not</span> <span m='929780'>just</span> <span
  m='929990'>type-checking.</span> <span m='930840'>That's</span> <span
  m='931030'>a</span> <span m='931100'>kind</span> <span m='931250'>of</span>
  <span m='931350'>arbitrary</span> <span m='931840'>example,</span> <span
  m='932640'>but</span> <span m='932850'>there's</span> <span
  m='933010'>more</span> <span m='933240'>or</span> <span m='933260'>less</span>
  <span m='933490'>no</span> <span m='933820'>perfect</span> <span
  m='934510'>checker</span> <span m='935510'>for</span> <span
  m='935850'>any</span> <span m='936160'>kind</span> <span m='936460'>of</span>
  <span m='936580'>property</span> <span m='937460'>that</span> <span
  m='937750'>procedure</span> <span m='938340'>outcomes</span> <span
  m='938860'>might</span> <span m='939080'>exhibit.</span> </p><p><span
  m='940400'>Which</span> <span m='940600'>is</span> <span m='940690'>why</span>
  <span m='943440'>theoretical</span> <span m='943940'>computer</span> <span
  m='944260'>scientists</span> <span m='944710'>interested</span> <span
  m='945100'>in</span> <span m='945230'>the</span> <span
  m='945360'>theory</span> <span m='945700'>of</span> <span
  m='945780'>computation</span> <span m='947170'>have</span> <span
  m='947450'>great</span> <span m='947790'>respect</span> <span
  m='948025'>and</span> <span m='948260'>interest</span> <span
  m='948560'>in</span> <span m='948860'>diagonal</span> <span
  m='949430'>arguments</span> <span m='950240'>because</span> <span
  m='950680'>they</span> <span m='950830'>crystallize</span> <span
  m='951760'>a</span> <span m='951840'>whole</span> <span m='952140'>set</span>
  <span m='952490'>of</span> <span m='952730'>absolutely</span> <span
  m='953730'>logical,</span> <span m='954850'>intrinsic</span> <span
  m='955670'>limitations</span> <span m='956950'>on</span> <span
  m='957300'>the</span> <span m='957400'>power</span> <span m='957960'>of</span>
  <span m='958110'>computation.</span> </p>
embedded_media:
  - uid: 2a98f2d12842c6e12580bd3e7d315825
    parent_uid: 46f59690f298511eee75704b20e74722
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 733afca3386d3d6d4d1f212147e3ca5c
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: a6230cacb7e4dad59a2121990f8a4921
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: WQHOImO0pX0
  - uid: 02ce62666f00df9052dc14eae2429770
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/WQHOImO0pX0/default.jpg'
  - uid: 9b38a6d35db6c9e0a8ebb4cdd17f951c
    parent_uid: 46f59690f298511eee75704b20e74722
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: WQHOImO0pX0
  - uid: 2955f14f3c3a184ff1ceb36b48bf90ce
    parent_uid: 46f59690f298511eee75704b20e74722
    id: WQHOImO0pX0.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-b654b1f1c6e1/the-halting-problem/WQHOImO0pX0.srt
  - uid: c187cdf86ecca2da952699d867a2f879
    parent_uid: 46f59690f298511eee75704b20e74722
    id: WQHOImO0pX0.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/vertical-b654b1f1c6e1/the-halting-problem/WQHOImO0pX0.pdf
  - uid: e68d5ca585e2db1a9f697f93b019c2b8
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8d2328a71c9dfc3b05bd0519d4ff7513
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 388ce84c6043e24c3a0bbe22915ccc90
    parent_uid: 46f59690f298511eee75704b20e74722
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_haltingproblem_s13_ipod.mp4
type: courses
layout: video
---
