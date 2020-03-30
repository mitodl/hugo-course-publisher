---
title: Independent Sampling Theorem
uid: 616dd599af632357ebde8be128156266
parent_uid: a304c2b048fc11dc5c308eab3d675b1d
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e/independent-sampling-theorem
short_url: independent-sampling-theorem
inline_embed_id: 84115380independentsamplingtheorem86617377
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='820'>PROFESSOR: Now</span> <span m='1000'>we're</span> <span
  m='1180'>ready</span> <span m='1440'>to</span> <span m='1550'>prove</span>
  <span m='1850'>the</span> <span m='1940'>law</span> <span m='2180'>of</span>
  <span m='2280'>large</span> <span m='2540'>numbers</span> <span
  m='3280'>and</span> <span m='3430'>while</span> <span m='3700'>we're</span>
  <span m='3880'>at</span> <span m='4070'>it,</span> <span m='4250'>to</span>
  <span m='4340'>get</span> <span m='4500'>a</span> <span
  m='4550'>quantitative</span> <span m='5210'>version,</span> <span
  m='5700'>which</span> <span m='5760'>will</span> <span m='5840'>be</span>
  <span m='5980'>the</span> <span m='6080'>basis</span> <span
  m='6590'>for</span> <span m='7580'>theory</span> <span m='8020'>of</span>
  <span m='8100'>sampling</span> <span m='8650'>an</span> <span
  m='8740'>estimation.</span> </p><p><span m='10590'>So</span> <span
  m='10730'>let's</span> <span m='10950'>remember</span> <span
  m='11370'>that</span> <span m='11790'>the</span> <span m='12050'>law</span>
  <span m='12240'>of</span> <span m='12390'>large</span> <span
  m='12650'>numbers</span> <span m='13020'>says</span> <span
  m='14230'>that</span> <span m='14710'>if</span> <span m='14930'>you</span>
  <span m='15110'>have</span> <span m='15820'>n</span> <span
  m='16740'>independent,</span> <span m='17360'>identically</span> <span
  m='18700'>distributed</span> <span m='20510'>random</span> <span
  m='20770'>variables</span> <span m='21340'>with</span> <span
  m='21530'>mean</span> <span m='21800'>mu</span> <span m='22580'>and</span>
  <span m='22690'>we</span> <span m='22790'>let</span> <span m='23020'>An</span>
  <span m='23500'>b</span> <span m='23680'>their</span> <span
  m='23900'>average,</span> <span m='25140'>then</span> <span
  m='25320'>for</span> <span m='25540'>every</span> <span
  m='25910'>positive</span> <span m='26450'>number</span> <span
  m='26750'>delta,</span> <span m='27830'>the</span> <span
  m='27930'>probability</span> <span m='28830'>that</span> <span
  m='29000'>the</span> <span m='29160'>average</span> <span
  m='29820'>differs</span> <span m='30460'>from</span> <span
  m='30830'>the</span> <span m='30900'>mean</span> <span m='31650'>by</span>
  <span m='31830'>more</span> <span m='32150'>than</span> <span
  m='32350'>delta</span> <span m='33360'>goes</span> <span m='33640'>to</span>
  <span m='33770'>0</span> <span m='34490'>as</span> <span m='34860'>the</span>
  <span m='34960'>number</span> <span m='35370'>of</span> <span
  m='35540'>trials</span> <span m='36120'>increases.</span> <span
  m='37070'>Remember,</span> <span m='37400'>that</span> <span
  m='37630'>means</span> <span m='37920'>that</span> <span m='38770'>if</span>
  <span m='38970'>you</span> <span m='39160'>tell</span> <span
  m='39420'>me</span> <span m='39620'>what</span> <span m='39830'>you</span>
  <span m='40000'>think</span> <span m='40270'>close</span> <span
  m='40680'>means</span> <span m='42730'>and</span> <span m='42950'>what</span>
  <span m='43150'>you</span> <span m='43300'>think</span> <span
  m='43620'>very</span> <span m='43870'>likely</span> <span
  m='44310'>means,</span> <span m='44840'>then</span> <span m='45080'>I</span>
  <span m='45160'>can</span> <span m='45390'>guarantee</span> <span
  m='45970'>that</span> <span m='46170'>by</span> <span m='46470'>doing</span>
  <span m='46730'>enough</span> <span m='47020'>trials,</span> <span
  m='48530'>the</span> <span m='49890'>likelihood</span> <span
  m='50620'>that</span> <span m='50815'>the</span> <span m='51010'>mean</span>
  <span m='51990'>will</span> <span m='52180'>be</span> <span
  m='52650'>that</span> <span m='52870'>close</span> <span m='53140'>to</span>
  <span m='53250'>the</span> <span m='53400'>average</span> <span
  m='55430'>will</span> <span m='55580'>be</span> <span m='55720'>outside</span>
  <span m='56140'>the</span> <span m='56230'>tolerance</span> <span
  m='56860'>is</span> <span m='57100'>as</span> <span m='57250'>small</span>
  <span m='57760'>as</span> <span m='57880'>you</span> <span
  m='58060'>thought</span> <span m='58410'>small</span> <span
  m='58760'>should</span> <span m='58980'>be.</span> </p><p><span
  m='61390'>And</span> <span m='61730'>we're</span> <span m='61870'>ready</span>
  <span m='62070'>for</span> <span m='62180'>the</span> <span
  m='62280'>proof.</span> <span m='63200'>But</span> <span m='63410'>in</span>
  <span m='63550'>the</span> <span m='63660'>proof,</span> <span
  m='63940'>there's</span> <span m='64099'>one</span> <span
  m='64459'>extra</span> <span m='64810'>fact</span> <span m='65400'>that</span>
  <span m='65570'>we're</span> <span m='65710'>going</span> <span
  m='65850'>to</span> <span m='65900'>use</span> <span m='66200'>that</span>
  <span m='66245'>we</span> <span m='66290'>didn't</span> <span
  m='66630'>explicitly</span> <span m='67250'>mention,</span> <span
  m='67780'>which</span> <span m='68020'>is</span> <span m='68380'>that</span>
  <span m='68870'>not</span> <span m='69110'>only</span> <span
  m='69460'>are</span> <span m='69680'>all</span> <span m='69920'>of</span>
  <span m='70010'>these</span> <span m='70220'>random</span> <span
  m='70500'>variables</span> <span m='71520'>identically</span> <span
  m='72100'>distributed</span> <span m='72720'>and</span> <span
  m='72800'>independent,</span> <span m='73430'>but</span> <span
  m='73550'>we're</span> <span m='73720'>actually</span> <span
  m='74170'>going</span> <span m='74320'>to</span> <span m='74450'>assume</span>
  <span m='74860'>that</span> <span m='75050'>they</span> <span
  m='75230'>have</span> <span m='75640'>a</span> <span
  m='75850'>variance.</span> <span m='76500'>Now,</span> <span
  m='76640'>not</span> <span m='76970'>every</span> <span
  m='77400'>random</span> <span m='77740'>variable</span> <span
  m='78710'>has</span> <span m='78980'>a</span> <span m='79020'>finite</span>
  <span m='79490'>variance,</span> <span m='80270'>even</span> <span
  m='80520'>if</span> <span m='80620'>it</span> <span m='80710'>has</span> <span
  m='80920'>a</span> <span m='80980'>finite</span> <span m='81490'>mean.</span>
  <span m='82030'>In</span> <span m='82110'>fact,</span> <span
  m='82350'>there</span> <span m='82420'>are</span> <span
  m='82490'>random</span> <span m='82730'>variables</span> <span
  m='83110'>that</span> <span m='83210'>don't</span> <span m='83420'>even</span>
  <span m='83610'>have</span> <span m='83790'>finite</span> <span
  m='84280'>means,</span> <span m='84680'>and</span> <span
  m='84840'>we'll</span> <span m='85250'>look</span> <span m='85550'>at</span>
  <span m='85900'>them</span> <span m='86570'>on</span> <span
  m='86720'>the</span> <span m='86830'>last</span> <span m='87110'>day</span>
  <span m='87230'>of</span> <span m='87330'>class.</span> </p><p><span
  m='88490'>But</span> <span m='89660'>so</span> <span m='89830'>we're</span>
  <span m='89940'>going</span> <span m='90060'>to</span> <span
  m='90150'>explicitly</span> <span m='90750'>assume</span> <span
  m='91170'>that</span> <span m='91360'>all</span> <span m='91540'>of</span>
  <span m='91640'>these</span> <span m='91830'>random</span> <span
  m='92100'>variables</span> <span m='93010'>have</span> <span
  m='93600'>the</span> <span m='93710'>same</span> <span
  m='94610'>variance,</span> <span m='95390'>namely</span> <span
  m='96350'>the</span> <span m='96430'>standard</span> <span
  m='96720'>deviation</span> <span m='97250'>sigma</span> <span
  m='97640'>squared,</span> <span m='99300'>and</span> <span
  m='99450'>we'll</span> <span m='99580'>be</span> <span m='99720'>using</span>
  <span m='100030'>that</span> <span m='100200'>fact</span> <span
  m='100500'>in</span> <span m='100570'>the</span> <span
  m='100670'>proof.</span> <span m='101840'>Now,</span> <span
  m='101950'>the</span> <span m='102050'>first</span> <span
  m='102290'>question</span> <span m='102620'>to</span> <span
  m='102730'>ask</span> <span m='103840'>is,</span> <span m='104190'>what</span>
  <span m='104450'>is</span> <span m='104700'>the</span> <span
  m='104820'>expectation</span> <span m='105510'>of</span> <span
  m='105570'>the</span> <span m='105680'>average?</span> <span
  m='106240'>And</span> <span m='106380'>the</span> <span
  m='106480'>expectation</span> <span m='107020'>of</span> <span
  m='107090'>the</span> <span m='107200'>average</span> <span
  m='107570'>is</span> <span m='107660'>simply</span> <span
  m='108000'>the</span> <span m='108130'>expectation.</span> <span
  m='108930'>Let's</span> <span m='109050'>prove</span> <span
  m='109370'>that.</span> </p><p><span m='109920'>The</span> <span
  m='110030'>expectation</span> <span m='110650'>of</span> <span
  m='110720'>the</span> <span m='110870'>average</span> <span
  m='111250'>is</span> <span m='111440'>by</span> <span
  m='111590'>definition</span> <span m='112170'>the</span> <span
  m='112280'>expectation</span> <span m='112960'>of</span> <span
  m='113050'>the</span> <span m='113130'>sum</span> <span m='113390'>of</span>
  <span m='113490'>the</span> <span m='113680'>R's</span> <span
  m='114380'>over</span> <span m='114710'>n,</span> <span m='116030'>and</span>
  <span m='116360'>by</span> <span m='116570'>additivity</span> <span
  m='117310'>of</span> <span m='119080'>expectation,</span> <span
  m='120030'>that's</span> <span m='120350'>the</span> <span
  m='120440'>sum</span> <span m='121250'>of</span> <span m='121400'>the</span>
  <span m='121560'>expectation</span> <span m='122260'>of</span> <span
  m='122340'>each</span> <span m='122600'>of</span> <span m='122680'>the</span>
  <span m='122850'>R's</span> <span m='123160'>over</span> <span
  m='123470'>n.</span> <span m='123940'>But</span> <span m='124160'>each</span>
  <span m='124440'>of</span> <span m='124570'>them</span> <span
  m='124710'>has</span> <span m='124950'>expectation</span> <span
  m='126550'>mu,</span> <span m='127230'>so</span> <span m='127400'>the</span>
  <span m='127500'>numerator</span> <span m='128060'>is</span> <span
  m='128180'>n</span> <span m='128475'>mu</span> <span m='128770'>and</span>
  <span m='128870'>the</span> <span m='128990'>n's</span> <span
  m='129240'>cancel.</span> <span m='130410'>And</span> <span
  m='130560'>sure</span> <span m='130820'>enough,</span> <span
  m='131410'>the</span> <span m='131600'>average</span> <span
  m='132420'>has</span> <span m='132720'>the</span> <span m='132820'>same</span>
  <span m='133210'>expectation</span> <span m='134520'>as</span> <span
  m='134980'>each</span> <span m='135370'>of</span> <span m='135600'>the</span>
  <span m='135760'>individual</span> <span m='136870'>variables,</span> <span
  m='137480'>each</span> <span m='137690'>of</span> <span m='137780'>the</span>
  <span m='137870'>trials.</span> </p><p><span m='140500'>Now,</span> <span
  m='140620'>that</span> <span m='140780'>[INAUDIBLE]</span> <span
  m='140940'>let's</span> <span m='141200'>us</span> <span
  m='141270'>apply</span> <span m='142120'>the</span> <span
  m='142320'>Chebyshev</span> <span m='143510'>bound</span> <span
  m='144190'>to</span> <span m='144820'>the</span> <span
  m='145190'>random</span> <span m='145470'>variable</span> <span
  m='145970'>An</span> <span m='146340'>because</span> <span
  m='146640'>now</span> <span m='146800'>we</span> <span m='146920'>know</span>
  <span m='147120'>what</span> <span m='147260'>its</span> <span
  m='147390'>mean</span> <span m='147740'>is,</span> <span m='148000'>and</span>
  <span m='148120'>its</span> <span m='148240'>mean</span> <span
  m='148450'>is</span> <span m='148540'>independent</span> <span
  m='149130'>of</span> <span m='149230'>n.</span> <span m='151200'>We</span>
  <span m='151310'>can</span> <span m='151450'>apply</span> <span
  m='151770'>Chebyshev</span> <span m='152480'>to</span> <span
  m='153070'>the</span> <span m='153190'>probability</span> <span
  m='153890'>that</span> <span m='154080'>the</span> <span
  m='154210'>average</span> <span m='154700'>of</span> <span m='154820'>n</span>
  <span m='155000'>trials</span> <span m='155970'>differs</span> <span
  m='156490'>from</span> <span m='156710'>its</span> <span
  m='156860'>mean</span> <span m='157130'>by</span> <span m='157290'>more</span>
  <span m='157520'>than</span> <span m='157720'>delta.</span> <span
  m='158130'>And</span> <span m='158390'>according</span> <span
  m='158920'>to</span> <span m='159290'>Chebyshev,</span> <span
  m='160300'>that's</span> <span m='160940'>bounded</span> <span
  m='161470'>by</span> <span m='161600'>the</span> <span
  m='161730'>variance</span> <span m='163000'>of</span> <span
  m='163700'>the</span> <span m='164000'>average</span> <span
  m='164610'>divided</span> <span m='165220'>by</span> <span m='165840'>n</span>
  <span m='166070'>squared.</span> </p><p><span m='167380'>So</span> <span
  m='167680'>I</span> <span m='167790'>will</span> <span m='168040'>have</span>
  <span m='168160'>proved</span> <span m='169200'>the</span> <span
  m='169540'>law</span> <span m='169790'>of</span> <span m='169950'>large</span>
  <span m='170230'>numbers</span> <span m='171070'>if</span> <span
  m='171310'>I</span> <span m='171390'>can</span> <span m='171620'>prove</span>
  <span m='172160'>that</span> <span m='172470'>the</span> <span
  m='172550'>limit</span> <span m='173250'>as</span> <span m='173530'>n</span>
  <span m='173730'>approaches</span> <span m='174200'>infinity</span> <span
  m='174820'>of</span> <span m='174970'>the</span> <span
  m='175050'>variance</span> <span m='175750'>goes</span> <span
  m='176140'>to</span> <span m='176270'>0</span> <span m='177150'>because</span>
  <span m='177360'>that</span> <span m='177570'>means</span> <span
  m='177820'>that</span> <span m='177920'>the</span> <span
  m='178030'>right-hand</span> <span m='178490'>side</span> <span
  m='178780'>will</span> <span m='178900'>be</span> <span
  m='179040'>going</span> <span m='179380'>to</span> <span m='179500'>0</span>
  <span m='179940'>over</span> <span m='180130'>delta</span> <span
  m='180480'>squared,</span> <span m='181200'>namely</span> <span
  m='181510'>going</span> <span m='181820'>to</span> <span m='181930'>0,</span>
  <span m='182250'>which</span> <span m='182470'>is</span> <span
  m='182570'>what</span> <span m='182780'>the</span> <span m='183120'>law</span>
  <span m='183260'>of</span> <span m='183400'>large</span> <span
  m='183660'>numbers</span> <span m='184290'>says.</span> <span
  m='184770'>So</span> <span m='184990'>we've</span> <span
  m='185240'>reduced</span> <span m='186100'>the</span> <span
  m='186810'>proof</span> <span m='187120'>of</span> <span m='187220'>the</span>
  <span m='187290'>law</span> <span m='187490'>of</span> <span
  m='187610'>large</span> <span m='187860'>numbers</span> <span
  m='188610'>to</span> <span m='188770'>proving</span> <span
  m='189390'>that</span> <span m='189620'>the</span> <span
  m='189700'>variance</span> <span m='190360'>goes</span> <span
  m='190620'>to</span> <span m='190740'>0</span> <span m='191540'>as</span>
  <span m='191850'>n</span> <span m='192060'>approaches</span> <span
  m='192530'>infinity,</span> <span m='193450'>where</span> <span
  m='193870'>An</span> <span m='194100'>is</span> <span m='194230'>the</span>
  <span m='194370'>average</span> <span m='194930'>of</span> <span
  m='195170'>n</span> <span m='196320'>identically</span> <span
  m='197150'>distributed</span> <span m='197740'>variables</span> <span
  m='199100'>with</span> <span m='199870'>common</span> <span
  m='200270'>mean</span> <span m='200520'>mu</span> <span m='200960'>and</span>
  <span m='201240'>standard</span> <span m='201630'>deviation</span> <span
  m='202450'>sigma.</span> </p><p><span m='204430'>Well,</span> <span
  m='204830'>let's</span> <span m='205040'>calculate</span> <span
  m='205630'>the</span> <span m='205700'>variance</span> <span
  m='206160'>of</span> <span m='206270'>An</span> <span m='206810'>where</span>
  <span m='207080'>An,</span> <span m='207370'>again,</span> <span
  m='208340'>is</span> <span m='208510'>the</span> <span
  m='208680'>average,</span> <span m='210280'>the</span> <span
  m='210420'>sum</span> <span m='210650'>of</span> <span m='210740'>the</span>
  <span m='210870'>R's</span> <span m='211260'>over</span> <span
  m='211460'>n.</span> <span m='212120'>And</span> <span m='212530'>since</span>
  <span m='212780'>we're</span> <span m='212990'>assuming</span> <span
  m='213570'>independence</span> <span m='214400'>of</span> <span
  m='214490'>the</span> <span m='214680'>R's,</span> <span m='215850'>the</span>
  <span m='216340'>variance</span> <span m='216970'>sum</span> <span
  m='217220'>rule,</span> <span m='217580'>and</span> <span m='217730'>it</span>
  <span m='217890'>just</span> <span m='218150'>tells</span> <span
  m='218450'>us</span> <span m='218630'>that</span> <span m='218820'>this</span>
  <span m='219070'>is</span> <span m='219700'>the</span> <span
  m='219830'>sum</span> <span m='220140'>of</span> <span m='220250'>the</span>
  <span m='220310'>variances.</span> </p><p><span m='221510'>Now,</span> <span
  m='221690'>if</span> <span m='221870'>we</span> <span m='222010'>factor</span>
  <span m='222630'>out</span> <span m='223000'>the</span> <span
  m='223200'>R--</span> <span m='223645'>1</span> <span m='224090'>over</span>
  <span m='224350'>n--</span> <span m='224800'>now,</span> <span
  m='225120'>this</span> <span m='225360'>is</span> <span m='225510'>a</span>
  <span m='225660'>factor</span> <span m='226130'>of</span> <span
  m='226220'>1</span> <span m='226400'>over</span> <span m='226750'>times</span>
  <span m='227125'>n</span> <span m='227500'>this</span> <span
  m='227860'>sum.</span> <span m='228700'>When</span> <span m='228860'>we</span>
  <span m='229030'>factor</span> <span m='229770'>a</span> <span
  m='229940'>constant</span> <span m='230520'>out</span> <span
  m='230700'>of</span> <span m='230780'>the</span> <span
  m='230840'>variance,</span> <span m='231370'>it</span> <span
  m='231460'>squares,</span> <span m='232430'>so</span> <span
  m='232640'>the</span> <span m='232790'>denominator</span> <span
  m='233490'>here</span> <span m='233740'>becomes</span> <span
  m='234260'>n</span> <span m='234670'>squared,</span> <span
  m='235680'>and</span> <span m='235870'>that's</span> <span
  m='236100'>critical.</span> <span m='237510'>And</span> <span
  m='237660'>the</span> <span m='237730'>numerator</span> <span
  m='238290'>is</span> <span m='238460'>the</span> <span m='238550'>sum</span>
  <span m='238920'>of</span> <span m='239200'>the</span> <span
  m='239410'>n</span> <span m='239600'>variances.</span> </p><p><span
  m='240160'>Now,</span> <span m='240260'>each</span> <span
  m='240440'>variance</span> <span m='241050'>is</span> <span
  m='241380'>sigma</span> <span m='241740'>squared</span> <span
  m='242330'>and</span> <span m='242430'>we've</span> <span
  m='242470'>got</span> <span m='242670'>n</span> <span m='242850'>of</span>
  <span m='242980'>them,</span> <span m='243170'>so</span> <span
  m='243350'>we</span> <span m='243470'>wind</span> <span m='243740'>up</span>
  <span m='243870'>with</span> <span m='244040'>n</span> <span
  m='244540'>sigma</span> <span m='244890'>squared</span> <span
  m='245250'>over</span> <span m='245520'>n</span> <span
  m='245730'>squared,</span> <span m='247150'>which</span> <span
  m='247480'>is,</span> <span m='247640'>of</span> <span
  m='247720'>course,</span> <span m='248000'>equal</span> <span
  m='248290'>to</span> <span m='248400'>sigma</span> <span
  m='248750'>squared</span> <span m='249160'>over</span> <span
  m='249510'>n.</span> <span m='250560'>And</span> <span m='250740'>sigma</span>
  <span m='251010'>squared</span> <span m='251230'>is</span> <span
  m='251310'>a</span> <span m='251390'>constant,</span> <span
  m='252520'>and</span> <span m='252870'>n</span> <span m='253270'>is</span>
  <span m='253480'>going</span> <span m='253750'>to</span> <span
  m='253870'>infinity.</span> <span m='254840'>So</span> <span
  m='254970'>sure</span> <span m='255330'>enough,</span> <span
  m='256220'>the</span> <span m='256380'>right-hand</span> <span
  m='256950'>side</span> <span m='257390'>goes</span> <span m='257720'>to</span>
  <span m='257839'>0</span> <span m='258390'>as</span> <span m='258700'>n</span>
  <span m='258870'>increases,</span> <span m='259680'>which</span> <span
  m='259990'>is</span> <span m='260089'>all</span> <span m='260360'>we</span>
  <span m='260470'>needed</span> <span m='260820'>to</span> <span
  m='260920'>do</span> <span m='261610'>to</span> <span
  m='261779'>conclude</span> <span m='263020'>the</span> <span
  m='263170'>weak</span> <span m='263420'>law</span> <span m='263500'>of</span>
  <span m='263680'>large</span> <span m='263920'>numbers.</span> </p><p><span
  m='265470'>Now,</span> <span m='265520'>if</span> <span m='265570'>we</span>
  <span m='265660'>go</span> <span m='265800'>back</span> <span
  m='266050'>and</span> <span m='266140'>look</span> <span m='266350'>at</span>
  <span m='266440'>this</span> <span m='266640'>proof,</span> <span
  m='267760'>the</span> <span m='267890'>only</span> <span
  m='268130'>thing</span> <span m='268390'>that</span> <span
  m='268510'>it</span> <span m='268700'>used</span> <span
  m='269070'>about</span> <span m='269380'>the</span> <span
  m='269520'>R's</span> <span m='270190'>was</span> <span m='271030'>that</span>
  <span m='271220'>they</span> <span m='271370'>had</span> <span
  m='271610'>the</span> <span m='271680'>same</span> <span
  m='272060'>mean,</span> <span m='272440'>mu,</span> <span
  m='273730'>and</span> <span m='273900'>they</span> <span
  m='273970'>actually</span> <span m='274360'>had</span> <span
  m='274490'>the</span> <span m='274560'>same</span> <span
  m='274910'>variance,</span> <span m='276450'>sigma</span> <span
  m='276810'>squared,</span> <span m='278030'>and</span> <span
  m='280060'>the</span> <span m='280140'>variances</span> <span
  m='281010'>added.</span> <span m='281620'>That</span> <span
  m='281830'>was</span> <span m='282000'>the</span> <span m='282090'>key</span>
  <span m='282330'>step</span> <span m='282630'>in</span> <span
  m='282740'>the</span> <span m='282840'>proof,</span> <span
  m='283230'>that</span> <span m='283420'>the</span> <span
  m='283520'>variance</span> <span m='284110'>of</span> <span
  m='284240'>the</span> <span m='284310'>sum</span> <span m='284570'>of</span>
  <span m='284680'>the</span> <span m='284860'>R's</span> <span
  m='285140'>was</span> <span m='285320'>equal</span> <span m='285570'>to</span>
  <span m='285670'>the</span> <span m='285780'>sum</span> <span
  m='286050'>of</span> <span m='286140'>the</span> <span
  m='286210'>variances.</span> </p><p><span m='286910'>Now,</span> <span
  m='287260'>additivity</span> <span m='288060'>of</span> <span
  m='288090'>variances</span> <span m='288800'>only</span> <span
  m='289110'>requires</span> <span m='289700'>pairwise</span> <span
  m='290200'>independence</span> <span m='290690'>and</span> <span
  m='290800'>didn't</span> <span m='290980'>even</span> <span
  m='291200'>require</span> <span m='291780'>the</span> <span
  m='291890'>hypothesis</span> <span m='292670'>that</span> <span
  m='292800'>they</span> <span m='292970'>were</span> <span
  m='293010'>mutually</span> <span m='293450'>independent,</span> <span
  m='294530'>and</span> <span m='294830'>it</span> <span
  m='294960'>didn't</span> <span m='295270'>require</span> <span
  m='296420'>the</span> <span m='296620'>previous</span> <span
  m='297090'>proof</span> <span m='297350'>that</span> <span
  m='297430'>we</span> <span m='297540'>went</span> <span
  m='297710'>through--</span> <span m='297820'>did</span> <span
  m='298050'>not</span> <span m='298340'>ever</span> <span m='298600'>use</span>
  <span m='298800'>the</span> <span m='298890'>fact</span> <span
  m='299210'>that</span> <span m='299390'>the</span> <span m='299530'>R's</span>
  <span m='299890'>had</span> <span m='300040'>the</span> <span
  m='300110'>same</span> <span m='300760'>distribution,</span> <span
  m='301550'>that</span> <span m='301730'>they</span> <span
  m='301840'>may</span> <span m='302000'>not</span> <span m='302320'>be</span>
  <span m='302470'>identically</span> <span m='303030'>distributed.</span> <span
  m='303810'>It</span> <span m='303920'>was</span> <span
  m='304070'>sufficient</span> <span m='304940'>that</span> <span
  m='305120'>they</span> <span m='305240'>have</span> <span
  m='305460'>the</span> <span m='305530'>same</span> <span
  m='305930'>mean,</span> <span m='306400'>and</span> <span m='306660'>we</span>
  <span m='306740'>can</span> <span m='306880'>summarize</span> <span
  m='307300'>what</span> <span m='307460'>really</span> <span
  m='307940'>proved.</span> </p><p><span m='308390'>When</span> <span
  m='308530'>we</span> <span m='308640'>thought</span> <span
  m='308850'>we</span> <span m='308950'>were</span> <span
  m='309080'>proving</span> <span m='309480'>the</span> <span
  m='309570'>law</span> <span m='309790'>of</span> <span m='309920'>large</span>
  <span m='310170'>numbers,</span> <span m='310500'>we</span> <span
  m='310660'>actually</span> <span m='311120'>proved</span> <span
  m='311900'>a</span> <span m='312240'>precise</span> <span
  m='312680'>quantitative</span> <span m='313350'>theorem</span> <span
  m='313840'>that</span> <span m='314075'>says</span> <span
  m='314610'>that</span> <span m='314850'>if</span> <span m='315210'>R1</span>
  <span m='315570'>through</span> <span m='315860'>Rn</span> <span
  m='316410'>are</span> <span m='316620'>pairwise</span> <span
  m='317310'>independent</span> <span m='317900'>random</span> <span
  m='318230'>variables</span> <span m='319580'>with</span> <span
  m='319740'>the</span> <span m='319820'>same</span> <span
  m='320180'>finite</span> <span m='320730'>mean</span> <span
  m='321040'>mu</span> <span m='321520'>and</span> <span
  m='321680'>variant</span> <span m='322890'>sigma</span> <span
  m='323220'>squared</span> <span m='324340'>and</span> <span
  m='324540'>we</span> <span m='324680'>let</span> <span m='325060'>An</span>
  <span m='325270'>be</span> <span m='325830'>the</span> <span
  m='326030'>average</span> <span m='327890'>of</span> <span
  m='328020'>those</span> <span m='328190'>n</span> <span
  m='328360'>variables,</span> <span m='329660'>then</span> <span
  m='330550'>the</span> <span m='330660'>probability</span> <span
  m='331830'>that</span> <span m='332260'>the</span> <span
  m='332510'>average</span> <span m='333340'>differs</span> <span
  m='333790'>from</span> <span m='334010'>the</span> <span
  m='334080'>mean</span> <span m='334680'>by</span> <span m='335020'>more</span>
  <span m='335290'>than</span> <span m='335500'>delta</span> <span
  m='336370'>is</span> <span m='336600'>less</span> <span m='336920'>than</span>
  <span m='337050'>or</span> <span m='337200'>equal</span> <span
  m='337560'>to</span> <span m='337720'>this</span> <span
  m='338030'>definite</span> <span m='338550'>number</span> <span
  m='339010'>that</span> <span m='339150'>we</span> <span
  m='339330'>derived,</span> <span m='340330'>1</span> <span
  m='340750'>over</span> <span m='341190'>n</span> <span m='342010'>times</span>
  <span m='342620'>sigma</span> <span m='343150'>over</span> <span
  m='343410'>delta</span> <span m='343890'>squared,</span> <span
  m='345100'>and</span> <span m='345310'>this</span> <span m='345480'>was</span>
  <span m='345640'>what</span> <span m='345840'>we</span> <span
  m='345970'>previously</span> <span m='346620'>proven.</span> <span
  m='346990'>We</span> <span m='347110'>thought</span> <span
  m='347290'>we</span> <span m='347400'>were</span> <span m='347490'>just</span>
  <span m='347690'>proving</span> <span m='347990'>the</span> <span
  m='348070'>law</span> <span m='348230'>of</span> <span m='348350'>large</span>
  <span m='348590'>numbers.</span> <span m='349170'>We</span> <span
  m='349360'>actually</span> <span m='349680'>got</span> <span
  m='349920'>this</span> <span m='350650'>much</span> <span
  m='350930'>tighter</span> <span m='351390'>quantitative</span> <span
  m='352690'>theorem.</span> </p><p><span m='353460'>Now,</span> <span
  m='353590'>what</span> <span m='353800'>this</span> <span
  m='353990'>tells</span> <span m='354360'>us</span> <span
  m='354620'>here</span> <span m='355010'>is</span> <span m='355770'>that</span>
  <span m='356030'>now</span> <span m='356770'>if</span> <span
  m='356930'>you</span> <span m='357090'>tell</span> <span m='357280'>me</span>
  <span m='357430'>what</span> <span m='357670'>delta</span> <span
  m='358020'>is</span> <span m='358450'>and</span> <span m='358640'>you</span>
  <span m='358760'>tell</span> <span m='358940'>me</span> <span
  m='359070'>how</span> <span m='359280'>small</span> <span
  m='359690'>you</span> <span m='359830'>want</span> <span
  m='360110'>this</span> <span m='360310'>to</span> <span m='360420'>be,</span>
  <span m='361250'>well--</span> <span m='362120'>I'm</span> <span
  m='362270'>given</span> <span m='362570'>sigma</span> <span
  m='363280'>and</span> <span m='363740'>you</span> <span m='364070'>give</span>
  <span m='364270'>me</span> <span m='364400'>the</span> <span
  m='364550'>delta</span> <span m='364890'>that</span> <span
  m='365070'>you</span> <span m='365160'>specified,</span> <span
  m='366160'>and</span> <span m='367410'>if</span> <span m='367570'>you</span>
  <span m='367690'>tell</span> <span m='367860'>me</span> <span
  m='367980'>how</span> <span m='368120'>small</span> <span
  m='368420'>you</span> <span m='368550'>want</span> <span
  m='368750'>this</span> <span m='368910'>to</span> <span m='369050'>be--</span>
  <span m='369190'>I</span> <span m='369350'>will</span> <span
  m='369550'>know</span> <span m='369850'>how</span> <span m='370070'>big</span>
  <span m='370350'>an</span> <span m='370480'>n</span> <span
  m='371200'>to</span> <span m='371360'>choose.</span> <span
  m='372470'>So</span> <span m='372940'>this</span> <span
  m='373040'>tells</span> <span m='373380'>me</span> <span m='373550'>how</span>
  <span m='373800'>big</span> <span m='374100'>a</span> <span
  m='374160'>sample</span> <span m='374730'>I</span> <span
  m='374830'>need,</span> <span m='375180'>how</span> <span
  m='375340'>many</span> <span m='375620'>tries</span> <span m='376120'>I</span>
  <span m='376220'>have</span> <span m='376510'>to</span> <span
  m='376860'>make</span> <span m='377600'>in</span> <span
  m='377810'>order</span> <span m='378160'>to</span> <span m='378310'>get</span>
  <span m='379030'>the</span> <span m='379410'>probability</span> <span
  m='380180'>that</span> <span m='380410'>the</span> <span
  m='380480'>mean</span> <span m='380920'>is</span> <span
  m='381250'>within</span> <span m='381610'>a</span> <span
  m='381680'>specified</span> <span m='382470'>tolerance</span> <span
  m='383010'>delta</span> <span m='383590'>as</span> <span
  m='383870'>small</span> <span m='384410'>as</span> <span m='384550'>you</span>
  <span m='384710'>specified,</span> <span m='386110'>and</span> <span
  m='386330'>that</span> <span m='386610'>is</span> <span m='386910'>our</span>
  <span m='387130'>independent</span> <span m='387680'>sampling</span> <span
  m='388320'>theorem.</span> </p><p><span m='388420'>That's</span> <span
  m='388520'>why</span> <span m='388700'>it's</span> <span
  m='388820'>called</span> <span m='389030'>independent</span> <span
  m='389550'>sampling,</span> <span m='390000'>because</span> <span
  m='390300'>we</span> <span m='390420'>now</span> <span m='390640'>know</span>
  <span m='391180'>how</span> <span m='391360'>big</span> <span
  m='391620'>a</span> <span m='391680'>sample</span> <span m='392130'>is</span>
  <span m='392270'>needed</span> <span m='392960'>to</span> <span
  m='393100'>estimate</span> <span m='393660'>the</span> <span
  m='393740'>mean</span> <span m='393970'>of</span> <span m='394100'>any</span>
  <span m='394460'>random</span> <span m='394800'>variable</span> <span
  m='395910'>with</span> <span m='396160'>any</span> <span
  m='396430'>desired</span> <span m='397410'>tolerance</span> <span
  m='398230'>and</span> <span m='398570'>any</span> <span
  m='399340'>desired</span> <span m='399920'>probability,</span> <span
  m='400880'>where</span> <span m='401026'>of</span> <span
  m='401173'>course</span> <span m='401320'>the</span> <span
  m='401390'>various</span> <span m='401810'>has</span> <span
  m='401990'>to</span> <span m='402080'>be</span> <span
  m='402220'>finite,</span> <span m='402790'>the</span> <span
  m='402920'>tolerance</span> <span m='403350'>has</span> <span
  m='403520'>to</span> <span m='403610'>be</span> <span
  m='403730'>positive--</span> <span m='404220'>tolerance</span> <span
  m='404540'>is</span> <span m='404700'>delta--</span> <span
  m='405470'>and</span> <span m='406060'>the</span> <span
  m='406180'>probability</span> <span m='407540'>has</span> <span
  m='407880'>to</span> <span m='407980'>be</span> <span m='408220'>less</span>
  <span m='408460'>than</span> <span m='408930'>1.</span> </p>
embedded_media:
  - uid: f21504ca1ebd67c7e73572867a910975
    parent_uid: 616dd599af632357ebde8be128156266
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: f8e090cd78b8fff15f00310d3e09436a
    parent_uid: 616dd599af632357ebde8be128156266
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: da83b05fb9378d056e1916151c2721f9
    parent_uid: 616dd599af632357ebde8be128156266
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: MMn7q1M7pGI
  - uid: 6f8a8d0976e62a2b3517e961cebdb153
    parent_uid: 616dd599af632357ebde8be128156266
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/MMn7q1M7pGI/default.jpg'
  - uid: 427255ff0fc7d6e12555a93fce3ea7c1
    parent_uid: 616dd599af632357ebde8be128156266
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: MMn7q1M7pGI
  - uid: 89c817a99a7ea3bc73585f5b0cda6c5d
    parent_uid: 616dd599af632357ebde8be128156266
    id: MMn7q1M7pGI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e/independent-sampling-theorem/MMn7q1M7pGI.srt
  - uid: 2eea20f8fd73b464dd8af4a81f8171e2
    parent_uid: 616dd599af632357ebde8be128156266
    id: MMn7q1M7pGI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp14-1/vertical-872c5ec0974e/independent-sampling-theorem/MMn7q1M7pGI.pdf
  - uid: 825f83b58e1230495303919033aeace5
    parent_uid: 616dd599af632357ebde8be128156266
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ab9dd2c80b7a77df319fa0427e062bb2
    parent_uid: 616dd599af632357ebde8be128156266
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 588839847c06f255ec1ff5ac76a4b5b5
    parent_uid: 616dd599af632357ebde8be128156266
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_pairwisesample_video_ipod.mp4
type: courses
layout: video
---
