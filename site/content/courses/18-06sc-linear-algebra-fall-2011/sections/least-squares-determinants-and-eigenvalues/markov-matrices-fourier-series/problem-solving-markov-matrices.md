---
title: 'Problem Solving: Markov Matrices'
uid: 95b689b22df5ad6108976c40b92a97ac
parent_uid: 944c197c016a0c538f0108eac297793a
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/markov-matrices-fourier-series/problem-solving-markov-matrices
short_url: problem-solving-markov-matrices
inline_embed_id: '78607646problemsolving:markovmatrices43044219'
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6279'>PROFESSOR: Hi,</span> <span m='6770'>everyone.</span> <span
  m='7380'>Welcome</span> <span m='7680'>back.</span> <span m='8520'>So</span>
  <span m='8760'>today,</span> <span m='9360'>I'd</span> <span
  m='9500'>like</span> <span m='9640'>to</span> <span m='9730'>tackle</span>
  <span m='10050'>a</span> <span m='10100'>problem</span> <span
  m='10490'>in</span> <span m='10580'>Markov</span> <span
  m='10950'>matrices.</span> </p><p><span m='12390'>Specifically,</span> <span
  m='13790'>we're</span> <span m='13930'>going</span> <span m='14060'>to</span>
  <span m='14190'>start</span> <span m='14420'>with</span> <span
  m='14550'>this</span> <span m='14690'>problem</span> <span
  m='14970'>which</span> <span m='15220'>almost</span> <span
  m='15540'>has</span> <span m='15660'>a</span> <span m='15710'>physics</span>
  <span m='16110'>origin.</span> <span m='17540'>If</span> <span
  m='17740'>we</span> <span m='17850'>have</span> <span m='17990'>a</span> <span
  m='18050'>particle</span> <span m='18680'>that</span> <span
  m='18840'>jumps</span> <span m='19160'>between</span> <span
  m='19450'>positions</span> <span m='19705'>A</span> <span m='19960'>and</span>
  <span m='20290'>B</span> <span m='21240'>with</span> <span
  m='21520'>the</span> <span m='21590'>following</span> <span
  m='21930'>probabilities--</span> <span m='23470'>I'll</span> <span
  m='23570'>just</span> <span m='23660'>state</span> <span m='23960'>it--</span>
  <span m='24560'>if</span> <span m='24690'>it</span> <span
  m='24790'>starts</span> <span m='25090'>at</span> <span m='25220'>A</span>
  <span m='25530'>and</span> <span m='25680'>jumps</span> <span
  m='25910'>to</span> <span m='26000'>B</span> <span m='26160'>with</span> <span
  m='26290'>probability</span> <span m='26800'>0.4</span> <span
  m='27950'>or</span> <span m='28300'>starts</span> <span m='28640'>at</span>
  <span m='28750'>A</span> <span m='29110'>and</span> <span
  m='29260'>stays</span> <span m='29560'>at A</span> <span m='29770'>with</span>
  <span m='29910'>probability</span> <span m='30680'>0.6,</span> <span
  m='32189'>or</span> <span m='32800'>if</span> <span m='32970'>it</span> <span
  m='33080'>starts</span> <span m='33380'>at</span> <span m='33510'>B</span>
  <span m='34300'>then</span> <span m='34440'>it</span> <span
  m='34530'>goes</span> <span m='34720'>to A</span> <span m='35000'>with</span>
  <span m='35160'>probability</span> <span m='35690'>0.2</span> <span
  m='36870'>or</span> <span m='37050'>stays</span> <span m='37370'>at</span>
  <span m='37460'>B</span> <span m='37620'>with</span> <span
  m='37790'>probability</span> <span m='38290'>0.8,</span> <span
  m='40010'>we'd</span> <span m='40160'>like</span> <span m='40320'>to</span>
  <span m='40420'>know</span> <span m='40740'>the</span> <span
  m='40850'>evolution</span> <span m='41840'>of</span> <span
  m='42020'>the</span> <span m='42110'>probability</span> <span
  m='42660'>of</span> <span m='42730'>this</span> <span
  m='42900'>particle</span> <span m='43320'>over</span> <span m='43530'>a</span>
  <span m='43590'>long</span> <span m='43820'>period</span> <span
  m='44110'>of</span> <span m='44210'>time.</span> </p><p><span
  m='45690'>So</span> <span m='45860'>specifically</span> <span
  m='46470'>the</span> <span m='46570'>problem</span> <span
  m='46940'>we're</span> <span m='47110'>interested</span> <span
  m='47520'>today</span> <span m='47790'>is:</span> <span m='48830'>if</span>
  <span m='49000'>we</span> <span m='49080'>have</span> <span m='49240'>a</span>
  <span m='49290'>particle</span> <span m='49830'>and</span> <span
  m='50020'>we</span> <span m='50120'>know</span> <span m='50310'>that</span>
  <span m='50430'>it</span> <span m='50540'>starts</span> <span
  m='50850'>at</span> <span m='50970'>position</span> <span m='51330'>A,</span>
  <span m='52040'>what</span> <span m='52210'>is</span> <span
  m='52300'>the</span> <span m='52380'>probability</span> <span
  m='53040'>that</span> <span m='53720'>it</span> <span m='53860'>is</span>
  <span m='53940'>at</span> <span m='54110'>position</span> <span
  m='54560'>A</span> <span m='55360'>and</span> <span m='55550'>the</span> <span
  m='55610'>probability</span> <span m='56150'>that</span> <span
  m='56290'>it's</span> <span m='56440'>at</span> <span
  m='56580'>position</span> <span m='56950'>B</span> <span
  m='57760'>after</span> <span m='58280'>one</span> <span m='58670'>step,</span>
  <span m='59800'>after</span> <span m='60210'>n</span> <span
  m='60430'>steps,</span> <span m='61890'>and</span> <span m='62020'>then</span>
  <span m='62160'>finally</span> <span m='62510'>after</span> <span
  m='62720'>an</span> <span m='62810'>infinite</span> <span
  m='63110'>number</span> <span m='63330'>of</span> <span
  m='63400'>steps?</span> <span m='64420'>So</span> <span m='64720'>I'll let
  you</span> <span m='64840'>think</span> <span m='65000'>about</span> <span
  m='65160'>this</span> <span m='65310'>problem</span> <span
  m='65580'>for</span> <span m='65720'>a</span> <span m='65750'>moment</span>
  <span m='66320'>and</span> <span m='66430'>I'll</span> <span
  m='66510'>be</span> <span m='66600'>back.</span> </p><p><span
  m='77460'>Hi</span> <span m='77960'>everyone.</span> <span
  m='78580'>Welcome</span> <span m='78870'>back.</span> <span
  m='80370'>So</span> <span m='80810'>the</span> <span m='80930'>main</span>
  <span m='81240'>difficulty</span> <span m='81710'>with</span> <span
  m='81860'>this</span> <span m='82020'>problem</span> <span m='83630'>is</span>
  <span m='83970'>that</span> <span m='84130'>it's</span> <span
  m='84290'>phrased</span> <span m='84730'>as a</span> <span
  m='84780'>physics</span> <span m='85130'>problem.</span> <span
  m='85800'>And</span> <span m='85950'>we</span> <span m='86040'>need</span>
  <span m='86190'>to</span> <span m='86280'>convert</span> <span
  m='86620'>it</span> <span m='86720'>into</span> <span m='86940'>some</span>
  <span m='87060'>mathematical</span> <span m='87660'>language</span> <span
  m='88020'>to</span> <span m='88110'>get</span> <span m='88200'>a</span> <span
  m='88290'>handle</span> <span m='88640'>on</span> <span m='88780'>it.</span>
  </p><p><span m='89990'>So</span> <span m='90170'>specifically,</span> <span
  m='90810'>what</span> <span m='90940'>we'd</span> <span m='91070'>like</span>
  <span m='91230'>to</span> <span m='91310'>do</span> <span m='91440'>is</span>
  <span m='91520'>to</span> <span m='91630'>convert</span> <span
  m='92000'>this</span> <span m='92910'>into</span> <span m='93190'>a</span>
  <span m='93270'>matrix</span> <span m='93830'>formalism.</span> <span
  m='95670'>So</span> <span m='95820'>what</span> <span m='95950'>we</span>
  <span m='96050'>can</span> <span m='96200'>do</span> <span m='96480'>is</span>
  <span m='96610'>we</span> <span m='96700'>can</span> <span
  m='96890'>write</span> <span m='98100'>this</span> <span
  m='98330'>little</span> <span m='98580'>graph</span> <span
  m='98910'>down</span> <span m='101120'>and</span> <span
  m='101230'>describe</span> <span m='101660'>everything</span> <span
  m='102070'>in</span> <span m='102140'>this</span> <span
  m='102330'>graph</span> <span m='102610'>using</span> <span
  m='102860'>a</span> <span m='102900'>matrix.</span> <span m='104990'>So</span>
  <span m='105130'>I'm</span> <span m='105210'>going</span> <span
  m='105310'>to</span> <span m='105420'>call</span> <span m='105590'>this</span>
  <span m='105730'>matrix</span> <span m='106140'>A,</span> <span
  m='107860'>and</span> <span m='108020'>I'm</span> <span
  m='108080'>going</span> <span m='108270'>to</span> <span
  m='108340'>associate</span> <span m='110720'>the</span> <span
  m='110870'>first</span> <span m='111300'>row</span> <span m='111560'>of</span>
  <span m='111660'>A</span> <span m='112700'>with</span> <span
  m='113170'>particle</span> <span m='114410'>position</span> <span
  m='114840'>A</span> <span m='116140'>and</span> <span
  m='116300'>particle</span> <span m='116680'>position</span> <span
  m='117060'>B.</span> <span m='118580'>And</span> <span m='118710'>I'll</span>
  <span m='119100'>associate</span> <span m='122400'>the</span> <span
  m='122500'>first</span> <span m='122850'>and</span> <span
  m='122960'>second</span> <span m='123250'>columns</span> <span
  m='126320'>with</span> <span m='126510'>particles</span> <span
  m='127370'>positions</span> <span m='128050'>A</span> <span
  m='128360'>and</span> <span m='128620'>B.</span> <span m='129500'>And</span>
  <span m='129639'>then</span> <span m='129740'>what</span> <span
  m='129850'>I'm</span> <span m='129930'>going</span> <span m='130060'>to</span>
  <span m='130199'>do</span> <span m='130320'>is</span> <span
  m='130419'>I'm</span> <span m='130490'>going</span> <span m='130690'>to</span>
  <span m='130750'>fill</span> <span m='131070'>in</span> <span
  m='131180'>this</span> <span m='131340'>matrix</span> <span
  m='132200'>with</span> <span m='132440'>the</span> <span
  m='132510'>probability</span> <span m='134040'>distributions.</span>
  </p><p><span m='135270'>So,</span> <span m='135900'>specifically</span> <span
  m='136590'>what's</span> <span m='136830'>going</span> <span
  m='136970'>to</span> <span m='137010'>go</span> <span m='137140'>in</span>
  <span m='137200'>this</span> <span m='137340'>top</span> <span
  m='137570'>left</span> <span m='137740'>corner?</span> <span
  m='138490'>Well,</span> <span m='139060'>the</span> <span
  m='139210'>number</span> <span m='140680'>0.6,</span> <span
  m='142680'>which</span> <span m='142900'>represents</span> <span
  m='143510'>the</span> <span m='143600'>probability</span> <span
  m='144350'>that</span> <span m='144510'>I</span> <span m='144580'>stay</span>
  <span m='144910'>at</span> <span m='145040'>position</span> <span
  m='145450'>A,</span> <span m='146330'>given</span> <span
  m='146660'>that</span> <span m='146800'>I</span> <span m='146870'>start</span>
  <span m='147150'>at</span> <span m='147200'>position</span> <span
  m='147505'>A.</span> <span m='149680'>What's</span> <span
  m='149900'>going</span> <span m='150080'>to</span> <span m='150140'>go</span>
  <span m='150330'>here</span> <span m='150780'>in</span> <span
  m='150940'>the</span> <span m='151110'>bottom</span> <span
  m='151440'>left-hand</span> <span m='151810'>corner?</span> <span
  m='153060'>Well,</span> <span m='153500'>we're</span> <span
  m='153640'>going</span> <span m='153800'>to</span> <span m='153870'>put</span>
  <span m='154060'>0.4,</span> <span m='157760'>because</span> <span
  m='158730'>this</span> <span m='158920'>is</span> <span m='159160'>the</span>
  <span m='159290'>probability</span> <span m='159890'>that</span> <span
  m='160020'>I</span> <span m='160060'>wind</span> <span m='160370'>up</span>
  <span m='160520'>at</span> <span m='160810'>B,</span> <span
  m='161710'>given</span> <span m='162140'>that</span> <span m='162270'>I</span>
  <span m='162320'>start at</span> <span m='162780'>A.</span> <span
  m='164350'>And</span> <span m='164520'>then</span> <span
  m='164640'>lastly,</span> <span m='165230'>we'll</span> <span
  m='165400'>fill</span> <span m='165620'>in</span> <span
  m='165670'>these</span> <span m='165920'>other</span> <span
  m='166160'>two</span> <span m='166310'>columns</span> <span
  m='168540'>or</span> <span m='168660'>the</span> <span
  m='169250'>second</span> <span m='169470'>column</span> <span
  m='170490'>with</span> <span m='171240'>0.8</span> <span m='173390'>and</span>
  <span m='173540'>0.2.</span> </p><p><span m='176690'>So</span> <span
  m='176890'>I'll just</span> <span m='177000'>state</span> <span
  m='177300'>briefly</span> <span m='178000'>this</span> <span
  m='178160'>is</span> <span m='178340'>what's</span> <span
  m='178870'>called</span> <span m='179190'>a</span> <span
  m='179230'>Markov</span> <span m='179660'>matrix.</span> <span
  m='180210'>And</span> <span m='180330'>it's</span> <span
  m='180440'>called</span> <span m='180630'>Markov,</span> <span
  m='181080'>because</span> <span m='181630'>first</span> <span
  m='181970'>off,</span> <span m='182700'>every</span> <span
  m='182990'>element</span> <span m='183600'>is</span> <span
  m='184190'>positive</span> <span m='184800'>or</span> <span
  m='184990'>0.</span> <span m='186460'>And</span> <span
  m='186740'>secondly,</span> <span m='187680'>the</span> <span
  m='187780'>sum</span> <span m='190320'>of</span> <span m='190380'>the</span>
  <span m='190490'>elements</span> <span m='190830'>in</span> <span
  m='190910'>each</span> <span m='191050'>column</span> <span
  m='191380'>is</span> <span m='191470'>1.</span> <span m='191840'>So</span>
  <span m='192000'>if</span> <span m='192090'>we</span> <span
  m='192160'>note</span> <span m='192800'>0.4</span> <span
  m='193260'>plus</span> <span m='193480'>0.6</span> <span m='193970'>is</span>
  <span m='194080'>1, 0.8</span> <span m='194820'>plus</span> <span
  m='195020'>0.2</span> <span m='195360'>is</span> <span m='195480'>1.</span>
  <span m='196520'>And</span> <span m='196660'>these</span> <span
  m='196930'>matrices</span> <span m='197540'>come</span> <span
  m='197730'>up</span> <span m='197880'>all</span> <span m='198030'>the</span>
  <span m='198130'>time</span> <span m='198490'>when</span> <span
  m='198600'>we're</span> <span m='198700'>talking</span> <span
  m='198970'>about</span> <span m='199140'>probabilities</span> <span
  m='200170'>and</span> <span m='200310'>the</span> <span
  m='200410'>evolution</span> <span m='200890'>of</span> <span
  m='200970'>probability</span> <span m='201510'>distributions.</span>
  </p><p><span m='203530'>OK.</span> <span m='204110'>So</span> <span
  m='204280'>now,</span> <span m='204990'>once</span> <span
  m='205190'>we've</span> <span m='205330'>encoded</span> <span
  m='205800'>this</span> <span m='206040'>graph</span> <span
  m='206800'>using</span> <span m='207110'>this</span> <span
  m='207280'>matrix</span> <span m='207610'>A,</span> <span m='208250'>we</span>
  <span m='208470'>now</span> <span m='208500'>want</span> <span
  m='208670'>to</span> <span m='208730'>tackle</span> <span
  m='209020'>this</span> <span m='209170'>problem.</span> <span
  m='210480'>So</span> <span m='211930'>I'm</span> <span m='212030'>going</span>
  <span m='212270'>to</span> <span m='212510'>introduce</span> <span
  m='214230'>the</span> <span m='214360'>vector</span> <span
  m='214720'>p,</span> <span m='215560'>and</span> <span m='215680'>I'm</span>
  <span m='215750'>going</span> <span m='215880'>to</span> <span
  m='216020'>use</span> <span m='216230'>a</span> <span
  m='216280'>subscript</span> <span m='216545'>0</span> <span
  m='216810'>is</span> <span m='217480'>to</span> <span m='217600'>denote</span>
  <span m='218230'>the</span> <span m='218330'>probability</span> <span
  m='218870'>that</span> <span m='219000'>the</span> <span
  m='219080'>particle</span> <span m='219560'>is</span> <span
  m='219890'>at</span> <span m='220050'>time</span> <span m='220350'>0.</span>
  <span m='221630'>So</span> <span m='221820'>we're</span> <span
  m='221970'>told</span> <span m='223350'>that</span> <span
  m='223500'>the</span> <span m='223570'>particle</span> <span
  m='223990'>starts</span> <span m='224300'>at</span> <span
  m='224380'>position</span> <span m='224780'>A.</span> <span
  m='230400'>So</span> <span m='230990'>at</span> <span m='231130'>time</span>
  <span m='231370'>0,</span> <span m='232500'>I'm</span> <span
  m='232600'>going</span> <span m='232830'>to</span> <span m='232960'>use</span>
  <span m='233530'>the</span> <span m='233960'>vector</span> <span
  m='234260'>[1,</span> <span m='234580'>0].</span> </p><p><span
  m='235190'>Again,</span> <span m='237240'>I'm</span> <span
  m='237340'>going</span> <span m='237560'>to</span> <span
  m='237690'>match</span> <span m='241970'>the</span> <span
  m='242100'>top</span> <span m='242350'>component</span> <span
  m='242770'>of</span> <span m='242900'>this</span> <span
  m='243030'>vector</span> <span m='243810'>with</span> <span
  m='244190'>the</span> <span m='244280'>top</span> <span
  m='244530'>component</span> <span m='245290'>of</span> <span
  m='245440'>this</span> <span m='245630'>matrix</span> <span
  m='246310'>and</span> <span m='246470'>the</span> <span
  m='247620'>first</span> <span m='247890'>column</span> <span
  m='248180'>of</span> <span m='248310'>this</span> <span
  m='248450'>matrix.</span> <span m='249700'>And</span> <span
  m='249870'>then</span> <span m='249980'>likewise,</span> <span
  m='250410'>the</span> <span m='250590'>second</span> <span
  m='250780'>component</span> <span m='251210'>of</span> <span
  m='251320'>this</span> <span m='251440'>vector</span> <span
  m='252120'>with</span> <span m='252380'>the</span> <span
  m='252760'>second</span> <span m='254430'>row and</span> <span
  m='254730'>second</span> <span m='255030'>column</span> <span
  m='255330'>of</span> <span m='255430'>this</span> <span
  m='255600'>matrix.</span> <span m='257480'>And</span> <span
  m='258120'>we're</span> <span m='258390'>interested</span> <span
  m='258940'>in:</span> <span m='259290'>how</span> <span m='259480'>does</span>
  <span m='259670'>this</span> <span m='260000'>probability</span> <span
  m='261050'>evolve</span> <span m='263670'>as</span> <span
  m='263810'>the</span> <span m='263960'>particle</span> <span
  m='264320'>takes</span> <span m='264570'>many</span> <span
  m='264790'>steps?</span> </p><p><span m='266620'>So</span> <span
  m='267190'>for</span> <span m='267390'>one</span> <span
  m='267680'>step,</span> <span m='274280'>what's</span> <span
  m='274510'>the</span> <span m='274600'>probability</span> <span
  m='275100'>of</span> <span m='275160'>the</span> <span
  m='275240'>particle</span> <span m='275610'>going</span> <span
  m='275810'>to</span> <span m='275920'>be?</span> <span m='276770'>Well,</span>
  <span m='277450'>this</span> <span m='277630'>is</span> <span
  m='277730'>the</span> <span m='277810'>beauty</span> <span
  m='278130'>of</span> <span m='278230'>introducing</span> <span
  m='278710'>matrix</span> <span m='279050'>notation.</span> <span
  m='281150'>I'm</span> <span m='281250'>going</span> <span m='281470'>to</span>
  <span m='281600'>denote</span> <span m='282600'>p_1</span> <span
  m='283140'>to</span> <span m='283260'>be</span> <span m='283360'>the</span>
  <span m='283450'>probability</span> <span m='284510'>of</span> <span
  m='284610'>the</span> <span m='284700'>particle</span> <span
  m='285100'>after</span> <span m='285290'>one</span> <span
  m='285500'>step.</span> <span m='288160'>And</span> <span m='288410'>we</span>
  <span m='288550'>see</span> <span m='288910'>that</span> <span
  m='289490'>we</span> <span m='289640'>can</span> <span m='289770'>write</span>
  <span m='289980'>this</span> <span m='290170'>as</span> <span
  m='291340'>the</span> <span m='291430'>matrix</span> <span m='291890'>A</span>
  <span m='292580'>multiplied</span> <span m='293080'>by</span> <span
  m='293815'>p_0.</span> </p><p><span m='298030'>So</span> <span
  m='298200'>the</span> <span m='298340'>answer</span> <span
  m='298640'>is</span> <span m='302740'>0.6</span> <span m='304540'>and</span>
  <span m='304710'>0.4.</span> <span m='307570'>And</span> <span
  m='307710'>I</span> <span m='307780'>achieve</span> <span
  m='308090'>this</span> <span m='308410'>just</span> <span m='308560'>by</span>
  <span m='308670'>multiplying</span> <span m='309160'>this</span> <span
  m='309320'>matrix</span> <span m='309680'>by</span> <span
  m='309790'>this</span> <span m='310000'>vector.</span> <span
  m='311620'>OK?</span> <span m='311790'>So</span> <span m='311940'>this</span>
  <span m='312090'>concludes</span> <span m='312520'>part</span> <span
  m='312730'>one.</span> </p><p><span m='316770'>Now</span> <span
  m='316890'>part</span> <span m='317110'>two</span> <span m='317230'>is</span>
  <span m='317340'>a</span> <span m='317390'>little</span> <span
  m='317580'>trickier.</span> <span m='319240'>So</span> <span
  m='319420'>part</span> <span m='319670'>two</span> <span m='319820'>is</span>
  <span m='319960'>n</span> <span m='320180'>steps.</span> <span
  m='326510'>And</span> <span m='326860'>to</span> <span
  m='327010'>tackle</span> <span m='327320'>this</span> <span
  m='327480'>problem,</span> <span m='328040'>we</span> <span
  m='328190'>need</span> <span m='328340'>to</span> <span m='328440'>use</span>
  <span m='328590'>a</span> <span m='328650'>little</span> <span
  m='328800'>more</span> <span m='328980'>machinery.</span> </p><p><span
  m='330750'>So</span> <span m='330900'>first</span> <span
  m='331200'>off,</span> <span m='331760'>I'm</span> <span
  m='331860'>going</span> <span m='332080'>to</span> <span
  m='332160'>note</span> <span m='332410'>that</span> <span
  m='332620'>p_1</span> <span m='334320'>is</span> <span m='334530'>A</span>
  <span m='334730'>times</span> <span m='335200'>p_0.</span> <span
  m='338620'>Likewise,</span> <span m='340190'>p_2--</span> <span
  m='341310'>so</span> <span m='341460'>this</span> <span m='341560'>is</span>
  <span m='341640'>the</span> <span m='342200'>position</span> <span
  m='342610'>of the--</span> <span m='342750'>the</span> <span
  m='342980'>probability</span> <span m='343530'>distribution</span> <span
  m='344030'>of</span> <span m='344070'>the</span> <span
  m='344150'>particle</span> <span m='344510'>after</span> <span
  m='344710'>two</span> <span m='344870'>steps.</span> <span
  m='345940'>This</span> <span m='346120'>is</span> <span m='346320'>A</span>
  <span m='346660'>times</span> <span m='347040'>p_0,</span> <span
  m='348770'>which</span> <span m='348990'>is</span> <span m='349180'>A</span>
  <span m='349360'>squared</span> <span m='350310'>times</span> <span
  m='350590'>p_0.</span> <span m='352860'>And</span> <span m='353190'>we</span>
  <span m='353310'>note</span> <span m='353520'>that</span> <span
  m='353640'>there's</span> <span m='353790'>a</span> <span
  m='353850'>general</span> <span m='354170'>trend.</span> <span
  m='355000'>After</span> <span m='355380'>n</span> <span
  m='355895'>steps--</span> <span m='357560'>so</span> <span
  m='358220'>P_n--</span> <span m='360370'>the</span> <span
  m='360470'>general</span> <span m='360790'>trend</span> <span
  m='361070'>is,</span> <span m='361960'>it's</span> <span
  m='362130'>going</span> <span m='362230'>to</span> <span m='362340'>be</span>
  <span m='362440'>this</span> <span m='362640'>matrix</span> <span
  m='363080'>A</span> <span m='363600'>raised</span> <span m='363910'>to</span>
  <span m='363980'>the</span> <span m='364100'>n-th</span> <span
  m='364350'>power,</span> <span m='365970'>multiply</span> <span
  m='366820'>the</span> <span m='366910'>vector</span> <span
  m='367210'>P0.</span> </p><p><span m='369230'>So</span> <span
  m='369390'>how</span> <span m='369540'>do</span> <span m='369620'>we</span>
  <span m='369740'>take</span> <span m='370010'>the</span> <span
  m='370090'>n-th</span> <span m='370300'>power</span> <span
  m='370570'>of</span> <span m='370660'>a</span> <span m='370700'>matrix?</span>
  <span m='371920'>Well,</span> <span m='372200'>this</span> <span
  m='372360'>is</span> <span m='372470'>where</span> <span m='372620'>we</span>
  <span m='372730'>use</span> <span m='373690'>eigenvectors</span> <span
  m='374000'>and</span> <span m='374380'>eigenvalues.</span> <span
  m='376760'>So</span> <span m='377260'>recall,</span> <span
  m='382500'>that</span> <span m='382630'>we</span> <span m='382740'>can</span>
  <span m='382900'>take</span> <span m='383810'>any</span> <span
  m='384030'>matrix</span> <span m='384490'>A</span> <span
  m='384950'>that's</span> <span m='385120'>diagonalizable</span> <span
  m='387320'>and</span> <span m='387470'>write</span> <span m='387720'>it</span>
  <span m='387860'>as</span> <span m='388740'>U</span> <span m='390580'>D</span>
  <span m='391040'>U</span> <span m='391300'>inverse,</span> <span
  m='393350'>where</span> <span m='393570'>D</span> <span m='393780'>is</span>
  <span m='393900'>a</span> <span m='393960'>diagonal</span> <span
  m='394420'>matrix</span> <span m='395360'>and</span> <span
  m='395530'>this</span> <span m='395670'>matrix</span> <span
  m='396030'>U</span> <span m='396550'>is</span> <span m='396690'>a</span> <span
  m='396740'>matrix</span> <span m='397920'>whose</span> <span
  m='398140'>columns</span> <span m='398770'>correspond</span> <span
  m='399180'>to</span> <span m='399240'>the</span> <span
  m='399340'>eigenvectors</span> <span m='399990'>of</span> <span
  m='400090'>A.</span> </p><p><span m='401480'>So</span> <span
  m='401660'>for</span> <span m='401760'>this</span> <span
  m='401930'>problem,</span> <span m='402300'>I'm</span> <span
  m='402430'>just</span> <span m='402590'>going</span> <span
  m='402700'>to</span> <span m='402820'>state</span> <span
  m='403090'>what</span> <span m='403240'>the</span> <span
  m='403580'>eigenvalues</span> <span m='403900'>and</span> <span
  m='404250'>eigenvectors</span> <span m='404630'>are.</span> <span
  m='404830'>And</span> <span m='404930'>I'll</span> <span m='405010'>let</span>
  <span m='405170'>you</span> <span m='405350'>work</span> <span
  m='405550'>them</span> <span m='405690'>out.</span> <span m='408050'>So</span>
  <span m='409860'>because</span> <span m='410130'>it's</span> <span
  m='410260'>a</span> <span m='410310'>Markov</span> <span
  m='410720'>matrix,</span> <span m='412330'>we</span> <span
  m='412490'>always</span> <span m='412800'>have</span> <span
  m='413170'>an</span> <span m='413500'>eigenvalue</span> <span
  m='413770'>which</span> <span m='413900'>is</span> <span m='414010'>1.</span>
  <span m='415780'>And</span> <span m='415950'>in</span> <span
  m='416020'>this</span> <span m='416190'>case,</span> <span
  m='417560'>we</span> <span m='417670'>have</span> <span m='417880'>an</span>
  <span m='418010'>eigenvector</span> <span m='418640'>u</span> <span
  m='419680'>which</span> <span m='420080'>is</span> <span m='420420'>1</span>
  <span m='420700'>and</span> <span m='420810'>2.</span> </p><p><span
  m='424160'>In</span> <span m='424310'>addition,</span> <span
  m='425870'>the</span> <span m='426070'>second</span> <span
  m='426280'>eigenvalue</span> <span m='428870'>is</span> <span
  m='429050'>0.4.</span> <span m='431440'>And</span> <span m='431560'>the</span>
  <span m='431650'>eigenvector</span> <span m='432880'>corresponding</span>
  <span m='433420'>to</span> <span m='433530'>this</span> <span
  m='433710'>one</span> <span m='434520'>is</span> <span m='434900'>[1,</span>
  <span m='435480'>-1].</span> <span m='437070'>And</span> <span
  m='437200'>I'll</span> <span m='437290'>just</span> <span
  m='437450'>call</span> <span m='437620'>these</span> <span
  m='437790'>u_1</span> <span m='437970'>and</span> <span m='438270'>u_2,</span>
  <span m='439145'>like</span> <span m='439480'>that.</span> </p><p><span
  m='450670'>OK,</span> <span m='450860'>we</span> <span m='450970'>can</span>
  <span m='451080'>now</span> <span m='451250'>write</span> <span
  m='451500'>this</span> <span m='451670'>big</span> <span
  m='451840'>matrix</span> <span m='452220'>U</span> <span m='454100'>as</span>
  <span m='455250'>1,</span> <span m='455550'>2;</span> <span
  m='456860'>1,</span> <span m='457090'>-1.</span> <span m='461580'>D</span>
  <span m='461790'>is</span> <span m='461940'>going</span> <span
  m='462150'>to</span> <span m='462260'>be--</span> <span m='463020'>now</span>
  <span m='463130'>I</span> <span m='463260'>have</span> <span
  m='463390'>to</span> <span m='463480'>match</span> <span
  m='463860'>things</span> <span m='464120'>up.</span> <span
  m='464580'>If</span> <span m='464750'>I'm</span> <span m='464820'>going</span>
  <span m='464990'>to</span> <span m='465040'>put</span> <span
  m='465290'>the</span> <span m='465370'>first</span> <span
  m='465870'>eigenvector</span> <span m='466160'>in</span> <span
  m='466230'>the</span> <span m='466300'>first</span> <span
  m='466540'>column,</span> <span m='468130'>we</span> <span
  m='468240'>have</span> <span m='468370'>to</span> <span
  m='468470'>stick</span> <span m='468890'>1</span> <span m='470420'>in</span>
  <span m='470550'>the</span> <span m='470630'>first</span> <span
  m='471365'>column</span> <span m='471750'>as</span> <span
  m='471860'>well</span> <span m='473000'>and</span> <span
  m='473150'>then</span> <span m='473290'>0.4</span> <span
  m='475411'>like</span> <span m='475800'>this.</span> <span
  m='477620'>And</span> <span m='477720'>then</span> <span
  m='477830'>lastly,</span> <span m='478300'>we</span> <span
  m='478470'>also</span> <span m='478690'>have</span> <span m='478890'>U</span>
  <span m='479040'>inverse</span> <span m='480510'>which</span> <span
  m='480960'>I</span> <span m='481070'>can</span> <span m='481220'>just</span>
  <span m='481410'>work</span> <span m='481630'>out</span> <span
  m='481760'>to</span> <span m='481850'>be</span> <span m='484144'>minus</span>
  <span m='484615'>1/3,</span> <span m='486500'>one</span> <span
  m='486680'>over</span> <span m='486800'>the</span> <span
  m='487370'>determinant,</span> <span m='496670'>times</span> <span
  m='496920'>-1,</span> <span m='497340'>-1;</span> <span m='497760'>-2,</span>
  <span m='498720'>and</span> <span m='498850'>1,</span> <span
  m='501040'>which</span> <span m='506940'>simplifies</span> <span
  m='507520'>to</span> <span m='507590'>this.</span> </p><p><span
  m='509740'>OK,</span> <span m='511140'>so</span> <span m='511290'>now</span>
  <span m='511450'>if</span> <span m='511540'>we</span> <span
  m='511630'>take</span> <span m='512270'>A</span> <span m='516960'>and</span>
  <span m='517110'>raise</span> <span m='517340'>it</span> <span
  m='517419'>to</span> <span m='517510'>the</span> <span m='517600'>power</span>
  <span m='518039'>of</span> <span m='518350'>n,</span> <span
  m='520860'>we</span> <span m='520980'>have</span> <span m='521130'>this</span>
  <span m='521299'>nice</span> <span m='521539'>identity</span> <span
  m='522400'>that</span> <span m='522559'>all</span> <span m='522740'>the</span>
  <span m='522840'>U</span> <span m='523140'>and U</span> <span
  m='523440'>inverses</span> <span m='523809'>collapse</span> <span
  m='524210'>in</span> <span m='524260'>the</span> <span
  m='524340'>middle.</span> <span m='526040'>And</span> <span
  m='526150'>we're</span> <span m='526270'>left</span> <span
  m='526510'>with</span> <span m='526680'>U,</span> <span m='528410'>D</span>
  <span m='528825'>to the</span> <span m='529240'>n,</span> <span
  m='530650'>U</span> <span m='530850'>inverse,</span> <span
  m='531650'>p_0.</span> <span m='534460'>Now</span> <span
  m='534740'>raising</span> <span m='535120'>the</span> <span
  m='535980'>a</span> <span m='536070'>diagonal</span> <span
  m='536430'>matrix</span> <span m='536830'>to</span> <span
  m='536940'>the</span> <span m='537020'>power</span> <span m='537270'>of</span>
  <span m='537350'>n</span> <span m='537810'>is</span> <span m='538080'>a</span>
  <span m='538130'>relatively</span> <span m='538620'>simple</span> <span
  m='538930'>thing</span> <span m='539110'>to</span> <span m='539170'>do.</span>
  <span m='539400'>We</span> <span m='539500'>just</span> <span
  m='539680'>take</span> <span m='540220'>the</span> <span
  m='540570'>eigenvalues</span> <span m='540900'>and</span> <span
  m='540970'>raise</span> <span m='541200'>them</span> <span
  m='541380'>to</span> <span m='541480'>the</span> <span m='541550'>power
  of</span> <span m='541880'>n.</span> </p><p><span m='544020'>So</span> <span
  m='544170'>when</span> <span m='544280'>we</span> <span
  m='544370'>compute</span> <span m='544680'>this</span> <span
  m='544850'>product,</span> <span m='545250'>there's</span> <span
  m='545410'>a</span> <span m='545460'>question</span> <span
  m='545780'>of</span> <span m='545860'>what</span> <span
  m='546010'>order</span> <span m='546290'>do</span> <span m='546400'>we</span>
  <span m='546500'>do</span> <span m='546710'>things?</span> <span
  m='547720'>Now</span> <span m='547870'>these</span> <span
  m='548080'>are</span> <span m='548160'>2</span> <span m='548320'>by</span>
  <span m='548460'>2</span> <span m='548630'>matrices,</span> <span
  m='549300'>so</span> <span m='549480'>in</span> <span m='549580'>theory</span>
  <span m='549830'>we</span> <span m='549930'>could</span> <span
  m='550060'>just</span> <span m='550240'>multiply</span> <span
  m='550730'>out,</span> <span m='550810'>2</span> <span m='550990'>by</span>
  <span m='551100'>2</span> <span m='551230'>matrix,</span> <span
  m='551690'>2</span> <span m='551830'>by</span> <span m='551930'>2</span> <span
  m='552060'>matrix,</span> <span m='552390'>2</span> <span m='552480'>by</span>
  <span m='552590'>2</span> <span m='552730'>matrix,</span> <span
  m='553490'>and</span> <span m='553630'>then</span> <span m='553760'>on</span>
  <span m='553910'>a</span> <span m='553950'>vector</span> <span
  m='554340'>which</span> <span m='554560'>is</span> <span m='554810'>a</span>
  <span m='554920'>2</span> <span m='555050'>by</span> <span m='555170'>1</span>
  <span m='555360'>matrix.</span> </p><p><span m='556540'>But</span> <span
  m='556900'>if</span> <span m='557010'>you're</span> <span m='557160'>in</span>
  <span m='557240'>a</span> <span m='557300'>test</span> <span
  m='557670'>and</span> <span m='557730'>you're</span> <span
  m='557870'>cramped</span> <span m='558130'>for</span> <span
  m='558250'>time,</span> <span m='559030'>you</span> <span
  m='559160'>want</span> <span m='559300'>to</span> <span m='559360'>do</span>
  <span m='559480'>as</span> <span m='560170'>little</span> <span
  m='560440'>computations</span> <span m='561080'>as</span> <span
  m='561180'>possible.</span> <span m='561950'>So</span> <span
  m='562110'>what</span> <span m='562230'>you</span> <span
  m='562340'>want</span> <span m='562520'>to</span> <span m='562590'>do</span>
  <span m='562700'>is</span> <span m='562770'>you</span> <span
  m='562860'>want</span> <span m='562990'>to</span> <span
  m='563030'>start</span> <span m='563460'>on</span> <span m='563570'>the</span>
  <span m='563650'>right-hand</span> <span m='564050'>side</span> <span
  m='565530'>and</span> <span m='565660'>then</span> <span
  m='565990'>work</span> <span m='566260'>backwards.</span> <span
  m='568170'>So</span> <span m='568920'>if</span> <span m='569100'>we</span>
  <span m='569200'>do</span> <span m='569370'>this,</span> <span
  m='572260'>we</span> <span m='572580'>end</span> <span m='572700'>up</span>
  <span m='573050'>obtaining</span> <span m='573890'>1,</span> <span
  m='574170'>2,</span> <span m='580170'>this</span> <span m='580300'>is</span>
  <span m='580420'>going</span> <span m='580530'>to</span> <span
  m='580650'>be</span> <span m='580780'>to the</span> <span
  m='580900'>power</span> <span m='581130'>of</span> <span m='581230'>n,</span>
  <span m='585240'>1/3,</span> <span m='586970'>[1,</span> <span
  m='587490'>2].</span> </p><p><span m='591870'>OK,</span> <span
  m='592150'>so</span> <span m='592390'>for</span> <span m='592510'>this</span>
  <span m='592690'>last</span> <span m='592950'>part,</span> <span
  m='593220'>I'm</span> <span m='593340'>just</span> <span
  m='593520'>going</span> <span m='593630'>to</span> <span
  m='593750'>write</span> <span m='593960'>down</span> <span
  m='594490'>the</span> <span m='594600'>final</span> <span
  m='595000'>answer.</span> <span m='595570'>And</span> <span
  m='595710'>I'll</span> <span m='595820'>let</span> <span m='595960'>you</span>
  <span m='596310'>work</span> <span m='596590'>out</span> <span
  m='596730'>the</span> <span m='596810'>multiplication</span> <span
  m='597490'>of</span> <span m='597550'>matrices.</span> <span
  m='599890'>So</span> <span m='600040'>we</span> <span m='600130'>have</span>
  <span m='600360'>for</span> <span m='600500'>p_n:</span> <span
  m='602060'>1/3,</span> <span m='605140'>2</span> <span m='605890'>times</span>
  <span m='606240'>0.4</span> <span m='608530'>to</span> <span
  m='608770'>the</span> <span m='608900'>n</span> <span m='611240'>plus</span>
  <span m='611770'>1,</span> <span m='613820'>-2</span> <span
  m='614920'>0.4</span> <span m='615650'>to</span> <span m='615700'>the</span>
  <span m='615840'>n</span> <span m='618900'>plus</span> <span
  m='619250'>2.</span> <span m='621430'>And</span> <span m='621840'>this</span>
  <span m='622040'>is</span> <span m='622150'>the</span> <span
  m='622220'>final</span> <span m='622530'>vector</span> <span
  m='623460'>for</span> <span m='623650'>p</span> <span m='623880'>of</span>
  <span m='623980'>n.</span> </p><p><span m='626160'>So</span> <span
  m='626310'>this</span> <span m='626480'>finishes</span> <span
  m='626850'>up</span> <span m='626960'>Part</span> <span m='627200'>2.</span>
  <span m='627980'>And</span> <span m='628110'>then</span> <span
  m='628230'>lastly,</span> <span m='628650'>for</span> <span
  m='628790'>Part</span> <span m='629030'>3,</span> <span m='630450'>what</span>
  <span m='630620'>happens</span> <span m='630970'>when</span> <span
  m='631120'>n</span> <span m='631290'>goes</span> <span m='631510'>to</span>
  <span m='631620'>infinity?</span> <span m='633930'>Well,</span> <span
  m='634380'>we</span> <span m='634480'>have</span> <span m='634610'>the</span>
  <span m='634710'>answer</span> <span m='635860'>for</span> <span
  m='636090'>any</span> <span m='636340'>n.</span> <span m='636740'>So</span>
  <span m='636900'>we</span> <span m='637000'>can</span> <span
  m='637120'>just</span> <span m='637270'>take</span> <span
  m='637440'>the</span> <span m='637520'>limit</span> <span m='637800'>as</span>
  <span m='637950'>n</span> <span m='638090'>goes</span> <span
  m='638300'>to</span> <span m='638420'>infinity.</span> <span
  m='639410'>Now,</span> <span m='639840'>specifically</span> <span
  m='640460'>as</span> <span m='640570'>n</span> <span m='640690'>goes</span>
  <span m='640860'>to</span> <span m='641420'>infinity,</span> <span
  m='641950'>0.4</span> <span m='642740'>raised</span> <span
  m='642990'>to</span> <span m='643050'>some</span> <span m='643220'>very</span>
  <span m='643400'>large</span> <span m='643620'>power</span> <span
  m='644590'>vanishes.</span> <span m='646040'>So</span> <span
  m='646200'>these</span> <span m='646440'>two</span> <span
  m='646580'>terms</span> <span m='646920'>drop</span> <span
  m='647200'>off.</span> <span m='648150'>And</span> <span m='648500'>at</span>
  <span m='648620'>the</span> <span m='648730'>end</span> <span
  m='648850'>of</span> <span m='648910'>the</span> <span m='648970'>day,</span>
  <span m='649790'>we're</span> <span m='650070'>left</span> <span
  m='650310'>with</span> <span m='650620'>p_infinity</span> <span
  m='652550'>is</span> <span m='653180'>1/3</span> <span m='655180'>[1,</span>
  <span m='656120'>2].</span> <span m='658130'>OK?</span> </p><p><span
  m='659240'>So</span> <span m='659420'>just</span> <span m='659650'>to</span>
  <span m='659770'>recap,</span> <span m='660860'>we</span> <span
  m='661010'>started</span> <span m='661350'>off</span> <span
  m='661520'>with</span> <span m='661640'>a</span> <span
  m='662060'>particle</span> <span m='663000'>starting</span> <span
  m='663430'>at</span> <span m='663520'>A,</span> <span m='664430'>and</span>
  <span m='664620'>then</span> <span m='664750'>after</span> <span
  m='665010'>a</span> <span m='665040'>very</span> <span m='665300'>long</span>
  <span m='665560'>time,</span> <span m='667250'>the</span> <span
  m='667360'>particle</span> <span m='668550'>winds</span> <span
  m='668940'>up</span> <span m='669230'>with</span> <span m='669440'>a</span>
  <span m='669490'>probability</span> <span m='670110'>distribution</span> <span
  m='671560'>which</span> <span m='671790'>is</span> <span
  m='671910'>1/3,</span> <span m='673990'>1</span> <span m='674280'>and</span>
  <span m='674410'>2.</span> <span m='676030'>And</span> <span
  m='676250'>this</span> <span m='676400'>is</span> <span
  m='676520'>quite</span> <span m='676740'>characteristic</span> <span
  m='677420'>of</span> <span m='677520'>Markov</span> <span
  m='677910'>matrix</span> <span m='678370'>chains.</span> <span
  m='680290'>Specifically,</span> <span m='680950'>we</span> <span
  m='681050'>note</span> <span m='681390'>that</span> <span
  m='682100'>1/3</span> <span m='682410'>*</span> <span m='682720'>[1,</span>
  <span m='683030'>2]</span> <span m='684290'>is</span> <span
  m='684470'>a</span> <span m='684530'>multiple</span> <span
  m='685550'>of</span> <span m='685700'>the</span> <span
  m='687230'>eigenvector</span> <span m='687880'>corresponding</span> <span
  m='688350'>to</span> <span m='688820'>eigenvalue</span> <span
  m='689440'>1.</span> <span m='691340'>So</span> <span m='692420'>even</span>
  <span m='692630'>though</span> <span m='692720'>the</span> <span
  m='692800'>particle</span> <span m='693150'>started</span> <span
  m='693480'>at</span> <span m='693630'>position</span> <span
  m='694040'>A,</span> <span m='694740'>after</span> <span m='694930'>a</span>
  <span m='694980'>long</span> <span m='695180'>period</span> <span
  m='695440'>of</span> <span m='695520'>time,</span> <span m='695790'>it</span>
  <span m='695910'>tended</span> <span m='696250'>to</span> <span
  m='696410'>forget</span> <span m='696960'>where</span> <span
  m='697180'>it</span> <span m='697290'>started</span> <span
  m='698360'>and</span> <span m='698920'>approached,</span> <span
  m='699580'>diffused</span> <span m='700130'>into</span> <span
  m='700340'>this</span> <span m='700580'>uniform</span> <span
  m='701130'>distribution.</span> </p><p><span m='703130'>OK.</span> <span
  m='703860'>I'd</span> <span m='703930'>like</span> <span m='704080'>to</span>
  <span m='704350'>finish</span> <span m='704630'>up</span> <span
  m='704760'>here.</span> <span m='705470'>And</span> <span
  m='705690'>I'll</span> <span m='705760'>see</span> <span m='705900'>you</span>
  <span m='705980'>next</span> <span m='706200'>time.</span> </p>
embedded_media:
  - uid: 2d4dab2cdf7af1e43710c07833da4457
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: wuyAeWE3iIM
  - uid: 29b0660dceaf814165d5e060d8d2233e
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: wuyAeWE3iIM
  - uid: c98f4b512d1d7d7eb584552eefb42886
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/markov-matrices/id488155309?i=108454344
  - uid: d789740fa4433094a009d069639bd420
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110706_D2_300k.mp4
  - uid: e67191520883aa8a3f9fee30493aefaa
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/wuyAeWE3iIM/default.jpg'
  - uid: fc103bb96688b9efe91547400d31f392
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: wuyAeWE3iIM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/markov-matrices-fourier-series/problem-solving-markov-matrices/wuyAeWE3iIM.srt
  - uid: 38dac0802ac9da6da8f11d68371a8dc9
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: wuyAeWE3iIM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/markov-matrices-fourier-series/problem-solving-markov-matrices/wuyAeWE3iIM.pdf
  - uid: 06f2eeb4888aa16556ad9ae43067c892
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 85c1017c480e84a8120a4bfa7161d839
    parent_uid: 95b689b22df5ad6108976c40b92a97ac
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
