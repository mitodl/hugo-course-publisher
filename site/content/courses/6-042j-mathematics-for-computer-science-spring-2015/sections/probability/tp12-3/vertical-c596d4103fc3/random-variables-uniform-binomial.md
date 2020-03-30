---
title: 'Random Variables: Uniform &amp; Binomial'
uid: 985788317dbed7e7520f8170d2a61c95
parent_uid: 1fb607b45df4521a0d3b7a236157f428
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3/random-variables-uniform-binomial
short_url: random-variables-uniform-binomial
inline_embed_id: 40993795randomvariablesuniformampbinomial42167793
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='840'>PROFESSOR: Certain</span> <span m='1140'>kinds</span> <span
  m='1460'>of</span> <span m='1580'>random</span> <span
  m='1830'>variables</span> <span m='2360'>keep</span> <span
  m='2560'>coming</span> <span m='2910'>up,</span> <span m='3480'>so</span>
  <span m='3560'>let's</span> <span m='3770'>look</span> <span
  m='3940'>at</span> <span m='4030'>two</span> <span m='4170'>basic</span> <span
  m='4560'>examples</span> <span m='5110'>now,</span> <span
  m='5670'>namely</span> <span m='6860'>uniform</span> <span
  m='8000'>random</span> <span m='8260'>variables</span> <span
  m='8890'>and</span> <span m='9180'>binomial</span> <span
  m='11260'>random</span> <span m='11530'>variables.</span> <span
  m='12590'>Let's</span> <span m='12720'>begin</span> <span
  m='12960'>with</span> <span m='13100'>uniform,</span> <span
  m='13490'>because</span> <span m='13710'>we've</span> <span
  m='13850'>seen</span> <span m='14120'>those</span> <span
  m='14340'>already.</span> <span m='15480'>So</span> <span m='16120'>a</span>
  <span m='16210'>uniform</span> <span m='16680'>random</span> <span
  m='16910'>variable</span> <span m='17320'>means</span> <span
  m='17580'>that</span> <span m='17710'>all</span> <span m='17940'>the</span>
  <span m='18020'>values</span> <span m='18510'>that</span> <span m='18640'>it
  takes,</span> <span m='19095'>it</span> <span m='19550'>takes</span> <span
  m='19810'>with</span> <span m='19950'>equal</span> <span
  m='20280'>probability.</span> </p><p><span m='21560'>So</span> <span
  m='21630'>the</span> <span m='21770'>threshold</span> <span
  m='22260'>variable</span> <span m='22730'>Z</span> <span m='23350'>took</span>
  <span m='23710'>all</span> <span m='23920'>the</span> <span
  m='24000'>values</span> <span m='24860'>from</span> <span m='25090'>0</span>
  <span m='25390'>to</span> <span m='25490'>6</span> <span
  m='25800'>inclusive,</span> <span m='27000'>each</span> <span
  m='27200'>with</span> <span m='27320'>probability</span> <span
  m='27910'>1/7.</span> <span m='28560'>So</span> <span m='28810'>it</span>
  <span m='28920'>was</span> <span m='29100'>a</span> <span
  m='29140'>basic</span> <span m='29550'>example</span> <span
  m='30300'>of</span> <span m='30510'>a</span> <span m='30560'>uniform</span>
  <span m='31490'>variable.</span> <span m='33760'>And</span> <span
  m='35090'>other</span> <span m='35370'>examples</span> <span
  m='35840'>that</span> <span m='35970'>come</span> <span m='36220'>up,</span>
  <span m='36920'>if</span> <span m='37150'>D</span> <span m='37570'>is</span>
  <span m='37730'>the</span> <span m='37880'>outcome</span> <span
  m='38340'>of</span> <span m='38480'>a</span> <span m='38540'>fair</span> <span
  m='38930'>die--</span> <span m='39740'>dies</span> <span m='40070'>are</span>
  <span m='40170'>six-sided.</span> <span m='41470'>Dice</span> <span
  m='41720'>are</span> <span m='41820'>six-sided.</span> <span
  m='43390'>So</span> <span m='43600'>the</span> <span
  m='43720'>probability</span> <span m='44670'>that</span> <span
  m='45070'>it</span> <span m='45230'>comes</span> <span m='45480'>up</span>
  <span m='45630'>1</span> <span m='45950'>or</span> <span m='46140'>2</span>
  <span m='46420'>or</span> <span m='46620'>6</span> <span m='47860'>is</span>
  <span m='48030'>1/6</span> <span m='48720'>each.</span> </p><p><span
  m='49890'>Another</span> <span m='50360'>game</span> <span m='50690'>is</span>
  <span m='50990'>the</span> <span m='51280'>four-digit</span> <span
  m='51790'>lottery</span> <span m='52200'>number</span> <span
  m='52680'>where</span> <span m='53120'>it's</span> <span
  m='53280'>supposed</span> <span m='53630'>to</span> <span m='53680'>be</span>
  <span m='53800'>the</span> <span m='53890'>case</span> <span
  m='54270'>that</span> <span m='54490'>the</span> <span m='54580'>four</span>
  <span m='54820'>digits</span> <span m='55240'>are</span> <span
  m='55390'>each</span> <span m='55620'>chosen</span> <span m='56200'>at</span>
  <span m='56370'>random,</span> <span m='56850'>which</span> <span
  m='57050'>means</span> <span m='57770'>that</span> <span m='58180'>the</span>
  <span m='58340'>possibilities</span> <span m='59100'>range</span> <span
  m='59400'>from</span> <span m='59630'>four</span> <span m='59930'>0's</span>
  <span m='60370'>up</span> <span m='60500'>through</span> <span
  m='60710'>four</span> <span m='61040'>9's</span> <span m='61910'>for</span>
  <span m='62070'>10,000</span> <span m='62640'>numbers.</span> <span
  m='64150'>And</span> <span m='64560'>they're</span> <span
  m='64700'>supposed</span> <span m='65040'>to</span> <span m='65080'>be</span>
  <span m='65209'>all</span> <span m='65510'>equally</span> <span
  m='65860'>likely.</span> <span m='66780'>So</span> <span m='66850'>the</span>
  <span m='66960'>probability</span> <span m='67660'>that</span> <span
  m='68260'>the</span> <span m='69440'>lottery</span> <span
  m='70110'>winds</span> <span m='70380'>up</span> <span m='70520'>with</span>
  <span m='70590'>00</span> <span m='71160'>is</span> <span m='71270'>the</span>
  <span m='71370'>same</span> <span m='71670'>as</span> <span
  m='72130'>that</span> <span m='72250'>it</span> <span m='72460'>ends</span>
  <span m='72690'>up</span> <span m='72850'>with</span> <span m='73060'>1</span>
  <span m='73290'>is</span> <span m='73460'>the</span> <span
  m='73550'>same</span> <span m='73810'>that it</span> <span
  m='74010'>ends</span> <span m='74190'>up</span> <span m='74340'>with</span>
  <span m='74470'>four</span> <span m='74730'>9's.</span> <span
  m='75240'>It's</span> <span m='75420'>1/10,000.</span> <span
  m='76990'>So</span> <span m='77140'>that's</span> <span
  m='77340'>another</span> <span m='77950'>uniform</span> <span
  m='78520'>random</span> <span m='78800'>variable.</span> </p><p><span
  m='82020'>Let's</span> <span m='82320'>prove</span> <span m='82550'>a</span>
  <span m='82600'>little</span> <span m='82940'>lemma</span> <span
  m='83290'>that</span> <span m='83480'>will</span> <span m='83660'>be</span>
  <span m='84090'>of use</span> <span m='84440'>later.</span> <span
  m='84950'>It's</span> <span m='85280'>just</span> <span m='86060'>some</span>
  <span m='86280'>practice</span> <span m='86710'>with</span> <span
  m='87140'>uniformity.</span> <span m='88260'>Suppose</span> <span
  m='88600'>that I</span> <span m='88720'>have</span> <span m='89030'>R1,</span>
  <span m='89510'>R2,</span> <span m='90040'>R3</span> <span m='90670'>are
  three</span> <span m='91030'>random</span> <span m='91340'>variables.</span>
  <span m='91960'>They're</span> <span m='92100'>mutually</span> <span
  m='92710'>independent.</span> </p><p><span m='96060'>And</span> <span
  m='96250'>R1</span> <span m='96710'>is</span> <span m='96800'>uniform.</span>
  <span m='97310'>I</span> <span m='97370'>don't</span> <span
  m='97560'>really</span> <span m='97770'>care</span> <span
  m='98010'>about</span> <span m='98230'>the</span> <span m='98360'>other</span>
  <span m='98610'>two.</span> <span m='99380'>I</span> <span m='99500'>do</span>
  <span m='99840'>care</span> <span m='100550'>technically</span> <span
  m='101140'>that</span> <span m='101820'>they</span> <span
  m='102350'>are</span> <span m='102550'>only</span> <span
  m='102850'>taking</span> <span m='103230'>the</span> <span
  m='103320'>values.</span> <span m='103950'>They</span> <span
  m='104120'>only</span> <span m='104340'>take</span> <span
  m='104570'>values</span> <span m='104970'>that</span> <span
  m='105090'>R1</span> <span m='105480'>can</span> <span m='105670'>take</span>
  <span m='105950'>as</span> <span m='106060'>well.</span> <span
  m='107150'>So</span> <span m='107330'>I haven't</span> <span
  m='107540'>said</span> <span m='107780'>that</span> <span m='107910'>on</span>
  <span m='108020'>this</span> <span m='108110'>slide,</span> <span
  m='108460'>but</span> <span m='108620'>that's</span> <span
  m='108830'>what</span> <span m='109010'>we're</span> <span
  m='109250'>assuming.</span> </p><p><span m='110830'>And</span> <span
  m='111120'>then</span> <span m='111260'>I</span> <span m='111370'>claim</span>
  <span m='111830'>is</span> <span m='112200'>that</span> <span
  m='113460'>each</span> <span m='113710'>of</span> <span m='113810'>the</span>
  <span m='113930'>pairs,</span> <span m='114480'>the</span> <span
  m='114990'>probability</span> <span m='115580'>that</span> <span
  m='116240'>R1</span> <span m='116650'>equals</span> <span
  m='117020'>R2--</span> <span m='120060'>the</span> <span
  m='120180'>event</span> <span m='120600'>that</span> <span
  m='120730'>R1</span> <span m='121020'>is</span> <span m='121110'>equal</span>
  <span m='121600'>to R2</span> <span m='121850'>is</span> <span
  m='121980'>independent</span> <span m='122550'>of</span> <span
  m='122630'>the</span> <span m='122750'>event</span> <span
  m='123060'>that</span> <span m='123130'>R2</span> <span m='123480'>is</span>
  <span m='123580'>equal</span> <span m='123820'>to</span> <span
  m='123960'>R3,</span> <span m='125060'>which</span> <span m='125260'>is</span>
  <span m='125350'>independent</span> <span m='126060'>of</span> <span
  m='126210'>the</span> <span m='126340'>event</span> <span
  m='127020'>that</span> <span m='127160'>R1</span> <span m='127670'>is</span>
  <span m='127790'>equal</span> <span m='128070'>to</span> <span
  m='128190'>R3.</span> <span m='129419'>Now,</span> <span
  m='129810'>these</span> <span m='130250'>events</span> <span
  m='130630'>overlap.</span> <span m='131360'>There's</span> <span
  m='131560'>an</span> <span m='131650'>R1</span> <span m='132120'>here</span>
  <span m='133980'>and</span> <span m='134150'>an</span> <span
  m='134310'>R1</span> <span m='134730'>there</span> <span m='135010'>and
  there's</span> <span m='135220'>an</span> <span m='135320'>R2</span> <span
  m='135740'>here</span> <span m='136020'>and an</span> <span
  m='136200'>R2</span> <span m='136580'>there.</span> <span m='136860'>So</span>
  <span m='136890'>even</span> <span m='137130'>though</span> <span
  m='137230'>the</span> <span m='137710'>R1,</span> <span m='138560'>R2,</span>
  <span m='138890'>R3</span> <span m='139700'>are</span> <span
  m='139970'>mutually</span> <span m='140390'>independent,</span> <span
  m='140930'>it's</span> <span m='141100'>not</span> <span
  m='141280'>completely</span> <span m='141850'>clear.</span> <span
  m='142270'>In</span> <span m='142370'>fact,</span> <span m='142460'>it</span>
  <span m='142530'>isn't</span> <span m='142830'>really</span> <span
  m='143040'>clear</span> <span m='143390'>that</span> <span
  m='143670'>these</span> <span m='144190'>events</span> <span
  m='145920'>are</span> <span m='146320'>mutually</span> <span
  m='146760'>independent.</span> </p><p><span m='148920'>But</span> <span
  m='149160'>in</span> <span m='149250'>fact,</span> <span
  m='149490'>they're</span> <span m='149580'>not</span> <span
  m='149880'>mutually</span> <span m='150250'>independent.</span> <span
  m='151660'>In</span> <span m='151810'>fact,</span> <span
  m='152670'>they're</span> <span m='153180'>pairwise</span> <span
  m='153810'>independent.</span> <span m='154290'>They're</span> <span
  m='154410'>obviously</span> <span m='155010'>not</span> <span
  m='155590'>three-way</span> <span m='156080'>independent--</span> <span
  m='156410'>that is,</span> <span m='156740'>mutually</span> <span
  m='157100'>independent--</span> <span m='157530'>because</span> <span
  m='158140'>if</span> <span m='158370'>I</span> <span m='158450'>know</span>
  <span m='158700'>that</span> <span m='158870'>R1</span> <span
  m='159250'>is</span> <span m='159340'>equal</span> <span m='159570'>to</span>
  <span m='159670'>R2</span> <span m='159880'>and</span> <span
  m='160090'>I</span> <span m='160230'>know</span> <span m='160420'>that</span>
  <span m='160600'>R2</span> <span m='160990'>is</span> <span
  m='161100'>equal</span> <span m='161320'>to</span> <span m='161420'>R3,</span>
  <span m='161790'>it</span> <span m='161900'>follows</span> <span
  m='162960'>that</span> <span m='163140'>R1</span> <span m='163610'>is</span>
  <span m='163730'>equal</span> <span m='164030'>to</span> <span
  m='164150'>R3.</span> </p><p><span m='165260'>So</span> <span
  m='166200'>given</span> <span m='166590'>these</span> <span
  m='166880'>two,</span> <span m='167040'>the</span> <span
  m='167220'>probability</span> <span m='167880'>of</span> <span
  m='168020'>this</span> <span m='168660'>changes</span> <span
  m='169400'>dramatically</span> <span m='172170'>to</span> <span
  m='172340'>certainty.</span> <span m='174840'>So</span> <span
  m='175970'>this</span> <span m='176210'>is</span> <span m='176350'>the</span>
  <span m='176760'>useful</span> <span m='177150'>lemma,</span> <span
  m='177470'>which</span> <span m='177720'>is</span> <span
  m='177840'>that</span> <span m='177960'>if</span> <span m='178090'>I</span>
  <span m='178140'>have</span> <span m='178320'>the</span> <span
  m='178410'>three</span> <span m='178640'>variables</span> <span
  m='179230'>and</span> <span m='179580'>I</span> <span m='179700'>look</span>
  <span m='179940'>at</span> <span m='180120'>the</span> <span
  m='180290'>three</span> <span m='180670'>possible</span> <span
  m='181300'>pairs</span> <span m='181870'>of</span> <span m='182450'>values
  that</span> <span m='182860'>might</span> <span m='183140'>be</span> <span
  m='183240'>equal</span> <span m='184690'>that</span> <span
  m='185090'>whether</span> <span m='185470'>any</span> <span
  m='185690'>two</span> <span m='185890'>of</span> <span m='186040'>them</span>
  <span m='186170'>are</span> <span m='186280'>equal</span> <span
  m='186720'>is</span> <span m='186890'>independent</span> <span
  m='187990'>of</span> <span m='188130'>each</span> <span
  m='188330'>other.</span> </p><p><span m='190300'>Now,</span> <span
  m='190590'>let</span> <span m='190700'>me</span> <span m='190830'>give</span>
  <span m='191010'>a</span> <span m='191040'>handwaving</span> <span
  m='191850'>argument.</span> <span m='192430'>There's</span> <span
  m='192590'>a</span> <span m='193010'>more</span> <span
  m='193280'>rigorous</span> <span m='193710'>argument</span> <span
  m='195110'>based</span> <span m='195630'>on</span> <span
  m='195730'>total</span> <span m='196050'>probability</span> <span
  m='196820'>that</span> <span m='197050'>appears</span> <span
  m='197630'>as</span> <span m='197820'>a</span> <span m='198140'>problem</span>
  <span m='198610'>in</span> <span m='198720'>the</span> <span
  m='198810'>text.</span> <span m='199740'>But</span> <span
  m='199860'>the</span> <span m='199980'>intuitive</span> <span
  m='200460'>ideas,</span> <span m='201000'>let's</span> <span
  m='201120'>look</span> <span m='201280'>at</span> <span m='201370'>the</span>
  <span m='201450'>case</span> <span m='201750'>that</span> <span
  m='201930'>R1</span> <span m='202990'>is</span> <span m='203350'>the</span>
  <span m='203460'>uniform</span> <span m='203900'>variable,</span> <span
  m='204650'>and</span> <span m='204860'>R1</span> <span m='205370'>is</span>
  <span m='205500'>independent</span> <span m='206360'>of</span> <span
  m='207050'>R2</span> <span m='207290'>and</span> <span m='207590'>R3.</span>
  <span m='208240'>So</span> <span m='208450'>certainly,</span> <span
  m='208990'>that</span> <span m='209340'>implies</span> <span
  m='209800'>that</span> <span m='209910'>R1</span> <span m='210260'>is</span>
  <span m='210370'>independent</span> <span m='211410'>of</span> <span
  m='211570'>the</span> <span m='211740'>event</span> <span
  m='212050'>that</span> <span m='212190'>R2</span> <span m='212570'>is</span>
  <span m='212680'>equal</span> <span m='212940'>to</span> <span
  m='213050'>R3,</span> <span m='213470'>because</span> <span
  m='213700'>R1</span> <span m='214050'>isn't</span> <span
  m='214230'>mutually</span> <span m='214630'>independent,</span> <span
  m='215000'>both</span> <span m='215210'>R1</span> <span m='215370'>and</span>
  <span m='215620'>R2.</span> <span m='216280'>Doesn't</span> <span
  m='216530'>matter</span> <span m='216740'>what</span> <span
  m='216900'>they</span> <span m='217030'>do,</span> <span m='217600'>so</span>
  <span m='218060'>it's</span> <span m='218280'>independent</span> <span
  m='218860'>of</span> <span m='218970'>this</span> <span
  m='219140'>event</span> <span m='219440'>that</span> <span
  m='219600'>R2</span> <span m='219960'>is</span> <span m='220060'>equal</span>
  <span m='220310'>to</span> <span m='220460'>R3.</span> </p><p><span
  m='221630'>Now,</span> <span m='222100'>because</span> <span
  m='222660'>R1</span> <span m='223140'>is</span> <span
  m='223250'>uniform,</span> <span m='225860'>it</span> <span
  m='226050'>has</span> <span m='226620'>probability</span> <span
  m='227300'>p</span> <span m='228155'>of</span> <span
  m='228470'>equaling</span> <span m='230670'>every</span> <span
  m='231020'>possible</span> <span m='231470'>value</span> <span m='231770'>that
  it</span> <span m='231980'>can</span> <span m='232190'>take.</span> <span
  m='232690'>And</span> <span m='232880'>since</span> <span m='233170'>R2</span>
  <span m='233640'>and</span> <span m='233740'>R3</span> <span
  m='235200'>only</span> <span m='235500'>take</span> <span m='235730'>a</span>
  <span m='235780'>value</span> <span m='236260'>that</span> <span
  m='236440'>R1</span> <span m='236900'>could</span> <span
  m='237140'>take,</span> <span m='238250'>the</span> <span
  m='238680'>probability</span> <span m='239660'>that</span> <span
  m='240060'>R1</span> <span m='240620'>hits</span> <span m='240990'>the</span>
  <span m='241070'>value</span> <span m='241490'>that</span> <span
  m='241710'>R2</span> <span m='242290'>and</span> <span m='242550'>R3</span>
  <span m='242860'>happens</span> <span m='243200'>to</span> <span
  m='243280'>have</span> <span m='243470'>is still</span> <span
  m='243640'>p.</span> <span m='245170'>That's</span> <span
  m='245410'>the</span> <span m='245570'>informal</span> <span
  m='246090'>argument.</span> </p><p><span m='246520'>So in</span> <span
  m='246620'>other</span> <span m='246760'>words,</span> <span
  m='247000'>the</span> <span m='247100'>claim</span> <span m='247290'>is</span>
  <span m='247710'>that</span> <span m='247860'>the</span> <span
  m='247960'>probability</span> <span m='248480'>that</span> <span
  m='248600'>R1</span> <span m='249040'>is</span> <span m='249160'>equal</span>
  <span m='249420'>to</span> <span m='249520'>R2</span> <span
  m='250430'>given</span> <span m='250810'>that</span> <span
  m='250940'>R2</span> <span m='251360'>is</span> <span m='251470'>equal</span>
  <span m='251710'>to</span> <span m='251820'>R3</span> <span
  m='252680'>is</span> <span m='252870'>simply</span> <span
  m='253550'>the</span> <span m='253670'>probability</span> <span
  m='254390'>that</span> <span m='254580'>R1</span> <span
  m='255070'>happens</span> <span m='255530'>to</span> <span
  m='256190'>hit</span> <span m='256490'>R2,</span> <span
  m='256920'>whatever</span> <span m='257260'>values</span> <span
  m='257709'>R2</span> <span m='258160'>has.</span> <span m='258980'>This</span>
  <span m='259240'>equation</span> <span m='259800'>says</span> <span
  m='260190'>that</span> <span m='260329'>R1</span> <span
  m='260750'>equals</span> <span m='261089'>R2</span> <span m='261440'>is</span>
  <span m='261550'>independent</span> <span m='262530'>of</span> <span
  m='262720'>R2,</span> <span m='263290'>R3.</span> <span m='264050'>And</span>
  <span m='264260'>in</span> <span m='264330'>fact,</span> <span
  m='264720'>in</span> <span m='264910'>both</span> <span
  m='265180'>cases,</span> <span m='265670'>it's</span> <span
  m='265770'>the</span> <span m='265870'>same</span> <span
  m='266220'>probability</span> <span m='266860'>that</span> <span
  m='267020'>R1</span> <span m='267400'>is</span> <span m='267500'>equal</span>
  <span m='267750'>to</span> <span m='267830'>any</span> <span
  m='268040'>given</span> <span m='268320'>value,</span> <span
  m='269540'>the</span> <span m='269710'>probability</span> <span
  m='270450'>of</span> <span m='271190'>R</span> <span m='271560'>being</span>
  <span m='271740'>uniform</span> <span m='272450'>has</span> <span
  m='272790'>of</span> <span m='272890'>equaling</span> <span
  m='273380'>each</span> <span m='273610'>of</span> <span m='273720'>its</span>
  <span m='273850'>possible</span> <span m='274370'>values.</span> </p><p><span
  m='275315'>You can</span> <span m='275760'>think</span> <span
  m='275920'>about</span> <span m='276130'>that,</span> <span
  m='276330'>see</span> <span m='276440'>if</span> <span m='276550'>it's</span>
  <span m='277100'>persuasive.</span> <span m='278570'>It's an</span> <span
  m='278960'>OK</span> <span m='279300'>argument,</span> <span
  m='279770'>but</span> <span m='279910'>I</span> <span m='280010'>was</span>
  <span m='280190'>bothered</span> <span m='280560'>by</span> <span
  m='280730'>it.</span> <span m='280820'>I</span> <span m='280890'>found</span>
  <span m='281180'>that</span> <span m='281320'>it</span> <span
  m='281430'>took</span> <span m='281650'>me--</span> <span m='282610'>I</span>
  <span m='282890'>wasn't</span> <span m='283160'>happy</span> <span
  m='283670'>with</span> <span m='283850'>it</span> <span
  m='283960'>until</span> <span m='284300'>I</span> <span m='284370'>sat</span>
  <span m='284670'>down</span> <span m='284870'>and</span> <span
  m='284930'>really</span> <span m='285150'>worked</span> <span m='285430'>it
  out</span> <span m='285650'>formally</span> <span m='286280'>to</span> <span
  m='286670'>justify</span> <span m='287760'>this</span> <span
  m='288870'>somewhat</span> <span m='289350'>handwavy</span> <span
  m='290670'>proof</span> <span m='291010'>of the</span> <span
  m='291250'>lemma.</span> </p><p><span m='291930'>All right.</span> <span
  m='293730'>Let's</span> <span m='294000'>turn</span> <span
  m='294230'>from</span> <span m='294420'>uniform</span> <span
  m='295200'>random</span> <span m='295440'>variables</span> <span
  m='295790'>to</span> <span m='296140'>binomial</span> <span
  m='296750'>random</span> <span m='297030'>variables.</span> <span
  m='297460'>They're</span> <span m='297570'>probably</span> <span
  m='298040'>the</span> <span m='298130'>most</span> <span
  m='298410'>important</span> <span m='298850'>single</span> <span
  m='299320'>example</span> <span m='299780'>of</span> <span
  m='299880'>random</span> <span m='300130'>variable</span> <span
  m='300580'>that</span> <span m='301060'>comes</span> <span m='301260'>up all
  the</span> <span m='301320'>time.</span> <span m='302350'>So</span> <span
  m='302720'>the</span> <span m='302990'>simplest</span> <span
  m='303340'>definition</span> <span m='303860'>of</span> <span
  m='303980'>a</span> <span m='304030'>binomial</span> <span
  m='304590'>random</span> <span m='304860'>variable</span> <span
  m='305360'>is</span> <span m='305590'>the</span> <span m='305690'>one</span>
  <span m='305920'>that</span> <span m='306070'>you</span> <span
  m='306160'>get</span> <span m='306820'>by</span> <span
  m='307020'>flipping</span> <span m='307650'>n</span> <span
  m='308260'>mutually</span> <span m='308810'>independent</span> <span
  m='309640'>coins.</span> <span m='312440'>Now,</span> <span
  m='313410'>they</span> <span m='313550'>have</span> <span m='313760'>an</span>
  <span m='313850'>order,</span> <span m='314210'>so</span> <span
  m='314320'>you</span> <span m='314470'>can</span> <span m='314630'>tell</span>
  <span m='314830'>them</span> <span m='314970'>apart.</span> <span
  m='315350'>Or</span> <span m='315590'>again,</span> <span
  m='315820'>you</span> <span m='315960'>can</span> <span m='316160'>say</span>
  <span m='316600'>that you</span> <span m='316740'>flip</span> <span
  m='317960'>one</span> <span m='318420'>coin</span> <span m='318900'>n</span>
  <span m='319200'>times,</span> <span m='320340'>but</span> <span
  m='320600'>each</span> <span m='320830'>of</span> <span m='320930'>the</span>
  <span m='321010'>flips</span> <span m='321370'>is</span> <span
  m='321630'>independent</span> <span m='322210'>of</span> <span
  m='322340'>all</span> <span m='322450'>the</span> <span
  m='322610'>others.</span> </p><p><span m='323820'>Now,</span> <span
  m='324230'>there's</span> <span m='324520'>two</span> <span
  m='324760'>parameters</span> <span m='325390'>here,</span> <span m='325580'>an
  n and a p,</span> <span m='325990'>because</span> <span m='326590'>we</span>
  <span m='326730'>don't</span> <span m='327010'>assume</span> <span
  m='327390'>that</span> <span m='327570'>the</span> <span
  m='327660'>flips</span> <span m='328040'>are</span> <span
  m='328120'>fair.</span> <span m='329140'>So</span> <span
  m='329310'>there's</span> <span m='330420'>one</span> <span
  m='330660'>parameter</span> <span m='331220'>is</span> <span
  m='331360'>how</span> <span m='331500'>many</span> <span
  m='331750'>flips</span> <span m='332110'>there</span> <span
  m='332330'>are.</span> <span m='332840'>The</span> <span
  m='333010'>other</span> <span m='333220'>parameter</span> <span
  m='333830'>is</span> <span m='334060'>the</span> <span
  m='334150'>probability</span> <span m='334770'>of</span> <span
  m='334850'>a</span> <span m='334890'>head,</span> <span
  m='335360'>which</span> <span m='335740'>might</span> <span
  m='336070'>be</span> <span m='336180'>biased</span> <span
  m='337170'>that</span> <span m='337300'>heads</span> <span
  m='337560'>are</span> <span m='337600'>more</span> <span
  m='337810'>likely</span> <span m='338220'>or</span> <span
  m='338290'>less</span> <span m='338580'>likely</span> <span
  m='338960'>than</span> <span m='339130'>tails.</span> <span
  m='339660'>The</span> <span m='339970'>fair</span> <span
  m='340260'>case</span> <span m='340570'>would</span> <span
  m='340720'>be</span> <span m='340880'>when</span> <span m='341080'>p</span>
  <span m='341210'>was</span> <span m='341380'>1/2.</span> </p><p><span
  m='342990'>So</span> <span m='343270'>for</span> <span
  m='343440'>example,</span> <span m='344320'>if</span> <span
  m='344450'>n</span> <span m='344670'>is</span> <span m='344870'>5</span> <span
  m='345340'>and</span> <span m='345580'>p</span> <span m='345810'>is</span>
  <span m='345970'>2/3,</span> <span m='347620'>what's</span> <span
  m='347980'>the</span> <span m='348080'>probability</span> <span
  m='348900'>that</span> <span m='349220'>we</span> <span
  m='349610'>consecutively</span> <span m='350450'>flip</span> <span
  m='351270'>head,</span> <span m='351550'>head,</span> <span
  m='351900'>tail,</span> <span m='352240'>tail,</span> <span
  m='352680'>head?</span> <span m='353680'>Well,</span> <span
  m='354240'>because</span> <span m='354590'>they're</span> <span
  m='354710'>independent,</span> <span m='355570'>the</span> <span
  m='355690'>probability</span> <span m='356360'>of</span> <span
  m='356480'>this</span> <span m='356840'>is</span> <span
  m='356980'>simply</span> <span m='357730'>the</span> <span
  m='357850'>product</span> <span m='358700'>of</span> <span
  m='358950'>the</span> <span m='359050'>probability</span> <span
  m='359680'>that</span> <span m='359830'>I</span> <span m='359900'>flip</span>
  <span m='360190'>a head</span> <span m='360600'>on</span> <span
  m='360800'>the</span> <span m='360870'>first</span> <span
  m='361350'>toss,</span> <span m='361710'>which</span> <span
  m='361950'>is</span> <span m='362450'>probability</span> <span
  m='363050'>of</span> <span m='363200'>H,</span> <span m='363580'>which</span>
  <span m='363780'>is</span> <span m='363910'>p;</span> <span
  m='364630'>probability</span> <span m='365200'>of</span> <span
  m='365330'>H</span> <span m='365750'>on</span> <span m='365880'>the</span>
  <span m='365940'>second</span> <span m='366340'>toss;</span> <span
  m='366650'>probability</span> <span m='367130'>of</span> <span
  m='367240'>T</span> <span m='367480'>on</span> <span m='367580'>the</span>
  <span m='367680'>third;</span> <span m='368140'>T</span> <span
  m='368330'>on</span> <span m='368440'>the</span> <span
  m='368500'>fourth;</span> <span m='368920'>T on the</span> <span
  m='369220'>fifth.</span> </p><p><span m='370220'>So</span> <span
  m='370550'>I</span> <span m='370660'>can</span> <span
  m='370850'>replace</span> <span m='371290'>each</span> <span
  m='371510'>of</span> <span m='371620'>those</span> <span m='371940'>by</span>
  <span m='372470'>2/3</span> <span m='373410'>is</span> <span
  m='373560'>the</span> <span m='373650'>probability</span> <span
  m='374160'>of</span> <span m='374240'>a</span> <span m='374270'>head.</span>
  <span m='374570'>2/3,</span> <span m='374980'>1/3.</span> <span
  m='376620'>1</span> <span m='376900'>minus</span> <span m='377190'>2/3</span>
  <span m='377460'>is</span> <span m='377595'>the</span> <span
  m='377730'>probability</span> <span m='378140'>of</span> <span
  m='378220'>a</span> <span m='378300'>tail.</span> <span m='378670'>1/3,</span>
  <span m='379480'>2/3.</span> <span m='380670'>And</span> <span
  m='380980'>I</span> <span m='381040'>discover</span> <span
  m='381640'>that</span> <span m='381830'>the</span> <span
  m='381920'>probability</span> <span m='382680'>of</span> <span
  m='382970'>HHTTH</span> <span m='384650'>is</span> <span m='385280'>2/3</span>
  <span m='386450'>cubed</span> <span m='386970'>and</span> <span
  m='387190'>1/3</span> <span m='388860'>squared.</span> </p><p><span
  m='390580'>Or</span> <span m='392160'>abstracting</span> <span
  m='393630'>the</span> <span m='394060'>probability</span> <span
  m='395240'>of</span> <span m='395730'>a</span> <span
  m='395840'>sequence</span> <span m='396520'>of</span> <span
  m='396780'>n</span> <span m='397130'>tosses</span> <span m='398240'>in</span>
  <span m='398380'>which</span> <span m='398650'>there</span> <span
  m='398850'>are</span> <span m='399280'>i</span> <span m='399390'>heads</span>
  <span m='400080'>and</span> <span m='400250'>the</span> <span
  m='400340'>rest</span> <span m='400620'>are</span> <span
  m='400670'>tails,</span> <span m='401090'>n</span> <span
  m='401290'>minus</span> <span m='401620'>i</span> <span
  m='401860'>tails,</span> <span m='402610'>is</span> <span
  m='402810'>simply</span> <span m='403870'>the</span> <span
  m='404190'>probability</span> <span m='406500'>of</span> <span
  m='406630'>a</span> <span m='406720'>head</span> <span
  m='407350'>raised</span> <span m='407700'>to</span> <span
  m='407770'>the</span> <span m='407960'>i-th</span> <span
  m='408230'>power</span> <span m='409050'>times</span> <span
  m='409340'>the</span> <span m='409440'>probability</span> <span
  m='410180'>of</span> <span m='410330'>a</span> <span m='410420'>tail,</span>
  <span m='410800'>namely</span> <span m='411100'>1</span> <span
  m='411340'>minus</span> <span m='411720'>p,</span> <span
  m='412310'>raised</span> <span m='412790'>to</span> <span
  m='412900'>the</span> <span m='413110'>n</span> <span m='414020'>minus</span>
  <span m='414430'>i-th</span> <span m='414730'>power.</span> <span
  m='415490'>Given</span> <span m='415830'>any</span> <span
  m='416240'>particular</span> <span m='416820'>sequence</span> <span
  m='417270'>of</span> <span m='417380'>H's</span> <span m='417650'>and</span>
  <span m='417880'>T's</span> <span m='418540'>of</span> <span
  m='418730'>length</span> <span m='419020'>n,</span> <span
  m='419700'>this</span> <span m='419970'>is</span> <span m='420120'>the</span>
  <span m='420200'>probability</span> <span m='420880'>that's</span> <span
  m='421090'>assigned</span> <span m='421530'>to</span> <span
  m='421610'>that</span> <span m='421870'>sequence.</span> <span
  m='422980'>So</span> <span m='423200'>all</span> <span
  m='423370'>sequences</span> <span m='423860'>with</span> <span
  m='423990'>the</span> <span m='424060'>same</span> <span
  m='424320'>number</span> <span m='424600'>of</span> <span
  m='424690'>H's</span> <span m='425010'>have</span> <span m='425180'>the</span>
  <span m='425250'>same</span> <span m='425490'>probability.</span> <span
  m='426920'>But</span> <span m='427250'>of</span> <span
  m='427350'>course,</span> <span m='427570'>with</span> <span
  m='427700'>different</span> <span m='427980'>numbers</span> <span
  m='428260'>of</span> <span m='428370'>H's</span> <span m='428720'>they</span>
  <span m='428840'>have</span> <span m='429000'>different</span> <span
  m='429310'>probabilities.</span> </p><p><span m='430960'>Well,</span> <span
  m='431700'>what's</span> <span m='431890'>the</span> <span
  m='431970'>probability</span> <span m='432490'>that</span> <span
  m='432640'>you</span> <span m='432730'>actually</span> <span
  m='433390'>toss</span> <span m='433930'>i</span> <span m='434240'>heads</span>
  <span m='434610'>and</span> <span m='434750'>n</span> <span
  m='434920'>minus</span> <span m='435270'>i</span> <span
  m='435430'>tails</span> <span m='435900'>in</span> <span m='436030'>the</span>
  <span m='436170'>n</span> <span m='436370'>tosses?</span> <span
  m='437390'>That's</span> <span m='437660'>going</span> <span
  m='437780'>to</span> <span m='437920'>be</span> <span m='438150'>equal</span>
  <span m='438450'>to</span> <span m='438570'>the</span> <span
  m='438690'>number</span> <span m='439210'>of</span> <span
  m='439320'>possible</span> <span m='439840'>sequences</span> <span
  m='441590'>that</span> <span m='441980'>have</span> <span
  m='442550'>this</span> <span m='442770'>property</span> <span
  m='443300'>of</span> <span m='443460'>i</span> <span m='443730'>heads</span>
  <span m='444320'>and</span> <span m='444530'>n</span> <span
  m='444650'>minus</span> <span m='445020'>i</span> <span
  m='445190'>tails.</span> <span m='445570'>Well,</span> <span
  m='445700'>the</span> <span m='445800'>number</span> <span
  m='446150'>of</span> <span m='446230'>such</span> <span
  m='446470'>sequences</span> <span m='446990'>is</span> <span
  m='447100'>simply</span> <span m='448150'>choose</span> <span
  m='448590'>the</span> <span m='448750'>i</span> <span m='448910'>places</span>
  <span m='449500'>for</span> <span m='449610'>the</span> <span
  m='449810'>n</span> <span m='450000'>heads</span> <span m='450420'>out</span>
  <span m='450610'>of--</span> <span m='451600'>choose</span> <span
  m='451850'>the</span> <span m='451960'>i</span> <span m='452100'>places</span>
  <span m='452460'>for</span> <span m='452570'>the</span> <span
  m='452650'>heads</span> <span m='452940'>out</span> <span m='453140'>of</span>
  <span m='453230'>the</span> <span m='453370'>n</span> <span
  m='453560'>tosses.</span> <span m='454460'>So</span> <span
  m='454570'>it's</span> <span m='454690'>going</span> <span
  m='454800'>to</span> <span m='454840'>be</span> <span m='454980'>n</span>
  <span m='455160'>choose</span> <span m='455460'>i.</span> <span
  m='456100'>So</span> <span m='456400'>we've</span> <span
  m='456560'>just</span> <span m='456790'>figured</span> <span
  m='457070'>out</span> <span m='457240'>that</span> <span m='457370'>the</span>
  <span m='457470'>probability</span> <span m='458410'>of</span> <span
  m='458640'>tossing</span> <span m='459080'>i</span> <span
  m='459330'>heads</span> <span m='459690'>and</span> <span m='459825'>n</span>
  <span m='459960'>minus</span> <span m='460350'>i</span> <span
  m='460700'>tails</span> <span m='461430'>is</span> <span
  m='461610'>simply</span> <span m='462100'>n</span> <span
  m='462360'>choose</span> <span m='462690'>i</span> <span
  m='463060'>times</span> <span m='463580'>p</span> <span m='463780'>to</span>
  <span m='463860'>the</span> <span m='464030'>i,</span> <span
  m='464650'>1</span> <span m='464980'>minus</span> <span m='465340'>p</span>
  <span m='465720'>to</span> <span m='465940'>the</span> <span
  m='466130'>n</span> <span m='466310'>minus</span> <span m='466730'>i.</span>
  </p><p><span m='468300'>In</span> <span m='468480'>short,</span> <span
  m='469230'>the</span> <span m='469350'>probability</span> <span
  m='470500'>that</span> <span m='470970'>the</span> <span
  m='471100'>number</span> <span m='471550'>of</span> <span
  m='471640'>heads</span> <span m='472240'>is</span> <span m='472480'>i</span>
  <span m='473730'>is</span> <span m='473970'>equal</span> <span
  m='474290'>to</span> <span m='474400'>this</span> <span
  m='474680'>number.</span> <span m='475730'>And</span> <span
  m='475960'>this</span> <span m='476150'>is</span> <span m='476400'>the</span>
  <span m='478240'>probability</span> <span m='479070'>that's</span> <span
  m='479300'>associated</span> <span m='479900'>with</span> <span
  m='480590'>whether</span> <span m='480850'>the</span> <span
  m='480970'>binomial</span> <span m='481550'>variable</span> <span
  m='481980'>with</span> <span m='482150'>parameters</span> <span
  m='482770'>n</span> <span m='482990'>and</span> <span m='483220'>p</span>
  <span m='483550'>is</span> <span m='483670'>equal</span> <span
  m='483950'>to</span> <span m='484340'>i</span> <span m='484600'>is</span>
  <span m='484850'>n</span> <span m='484990'>choose</span> <span
  m='485250'>i,</span> <span m='485420'>p</span> <span m='485590'>to</span>
  <span m='485650'>the</span> <span m='485830'>i,</span> <span
  m='485995'>1</span> <span m='486160'>minus</span> <span m='486470'>p</span>
  <span m='486650'>to</span> <span m='486750'>the</span> <span
  m='486900'>n</span> <span m='487000'>minus</span> <span m='487320'>i.</span>
  <span m='487660'>This</span> <span m='487740'>is</span> <span
  m='487820'>a</span> <span m='487900'>pretty</span> <span
  m='488090'>basic</span> <span m='488470'>formula.</span> <span
  m='489300'>If</span> <span m='489470'>you</span> <span m='489570'>can't</span>
  <span m='489820'>memorize</span> <span m='490320'>it,</span> <span
  m='490510'>then</span> <span m='490640'>make</span> <span
  m='490810'>sure</span> <span m='491020'>it's</span> <span
  m='491140'>written</span> <span m='491410'>on</span> <span
  m='491570'>any</span> <span m='491650'>crib</span> <span
  m='491920'>sheet</span> <span m='492170'>you</span> <span
  m='492290'>take</span> <span m='492520'>to</span> <span m='492650'>an</span>
  <span m='492720'>exam.</span> </p><p><span m='495700'>So</span> <span
  m='496730'>the</span> <span m='496900'>probability</span> <span
  m='497550'>density</span> <span m='498070'>function,</span> <span
  m='498720'>it</span> <span m='498930'>abstracts</span> <span
  m='499650'>out</span> <span m='499890'>some</span> <span
  m='500080'>properties</span> <span m='500690'>of</span> <span
  m='500940'>random</span> <span m='501250'>variables.</span> <span
  m='501780'>Basically,</span> <span m='502490'>it</span> <span
  m='502710'>just</span> <span m='502980'>tells</span> <span
  m='503220'>you</span> <span m='503320'>what's</span> <span
  m='503530'>the</span> <span m='503620'>probability</span> <span
  m='504630'>that</span> <span m='504820'>the</span> <span
  m='504910'>random</span> <span m='505170'>variable</span> <span
  m='505630'>takes</span> <span m='505870'>a</span> <span
  m='505920'>given</span> <span m='506190'>value</span> <span
  m='506660'>for</span> <span m='506820'>every</span> <span
  m='507030'>possible</span> <span m='507500'>value.</span> <span
  m='508420'>So</span> <span m='508470'>the</span> <span
  m='508590'>probability</span> <span m='509180'>density</span> <span
  m='509600'>function,</span> <span m='511370'>PDF</span> <span
  m='511900'>of</span> <span m='512049'>R,</span> <span m='512830'>is</span>
  <span m='513090'>a</span> <span m='513150'>function</span> <span
  m='513659'>on</span> <span m='513960'>the</span> <span m='514070'>real</span>
  <span m='514289'>values.</span> <span m='514890'>And</span> <span
  m='515090'>it</span> <span m='515250'>tells</span> <span m='515510'>you</span>
  <span m='515690'>for</span> <span m='515880'>each</span> <span
  m='516169'>a</span> <span m='516429'>what's</span> <span m='516690'>the</span>
  <span m='516789'>probability</span> <span m='517450'>that</span> <span
  m='517630'>R</span> <span m='518010'>is</span> <span m='518200'>equal</span>
  <span m='518500'>to</span> <span m='518990'>a.</span> </p><p><span
  m='522049'>So</span> <span m='522200'>what</span> <span
  m='522350'>we've</span> <span m='522480'>just</span> <span
  m='522780'>said</span> <span m='522890'>is</span> <span m='523080'>that</span>
  <span m='523210'>the</span> <span m='523289'>probability</span> <span
  m='523919'>density</span> <span m='524370'>function</span> <span
  m='524710'>of</span> <span m='524800'>the</span> <span
  m='524880'>binomial</span> <span m='525510'>random</span> <span
  m='525810'>variable</span> <span m='526820'>characterized</span> <span
  m='527410'>by</span> <span m='527530'>parameters</span> <span
  m='528220'>n</span> <span m='528360'>and</span> <span m='528510'>p</span>
  <span m='529090'>at</span> <span m='529330'>i</span> <span
  m='530310'>is</span> <span m='530910'>n</span> <span m='531230'>choose</span>
  <span m='531540'>i,</span> <span m='531710'>p</span> <span
  m='531880'>to</span> <span m='531950'>the</span> <span m='532100'>i,</span>
  <span m='532285'>1</span> <span m='532470'>minus</span> <span
  m='532900'>p</span> <span m='533150'>to</span> <span m='533260'>the</span>
  <span m='533370'>n</span> <span m='533490'>minus</span> <span
  m='533840'>i,</span> <span m='533980'>where</span> <span
  m='534260'>we're</span> <span m='534420'>assuming</span> <span
  m='534780'>that</span> <span m='534910'>i</span> <span m='535105'>is</span>
  <span m='536140'>an</span> <span m='536230'>integer</span> <span
  m='536620'>from</span> <span m='536850'>0</span> <span m='537190'>to</span>
  <span m='537320'>n.</span> <span m='539850'>If</span> <span
  m='540080'>I</span> <span m='540160'>look</span> <span m='540480'>at</span>
  <span m='541040'>the</span> <span m='542330'>probability</span> <span
  m='543060'>density</span> <span m='543440'>function</span> <span
  m='543720'>for</span> <span m='543795'>a</span> <span
  m='543870'>uniform</span> <span m='544420'>variable,</span> <span
  m='545020'>then</span> <span m='545160'>it's</span> <span
  m='545330'>constant.</span> </p><p><span m='546060'>The</span> <span
  m='546190'>probability</span> <span m='546770'>density</span> <span
  m='547200'>function</span> <span m='547900'>on</span> <span
  m='548180'>any</span> <span m='548450'>possible</span> <span
  m='548960'>value</span> <span m='549430'>v</span> <span m='551280'>that</span>
  <span m='551460'>the</span> <span m='551600'>uniform</span> <span
  m='552520'>variable</span> <span m='552910'>can</span> <span
  m='553080'>take</span> <span m='553340'>is</span> <span m='553490'>the</span>
  <span m='553580'>same.</span> <span m='554370'>This</span> <span
  m='554560'>applies</span> <span m='554900'>for</span> <span
  m='555040'>v</span> <span m='555430'>in</span> <span m='555485'>the</span>
  <span m='555540'>range</span> <span m='556010'>of</span> <span
  m='556470'>U.</span> <span m='557540'>So</span> <span m='558540'>in</span>
  <span m='558670'>fact,</span> <span m='558920'>you</span> <span
  m='559030'>could</span> <span m='559180'>say</span> <span
  m='559350'>exactly</span> <span m='559740'>what</span> <span
  m='559920'>it</span> <span m='560020'>is.</span> <span m='560210'>It's</span>
  <span m='560350'>simply</span> <span m='560620'>1</span> <span
  m='560840'>over</span> <span m='560990'>the</span> <span
  m='561120'>size</span> <span m='561410'>of</span> <span m='561470'>the</span>
  <span m='561560'>range</span> <span m='561820'>of</span> <span
  m='561920'>U,</span> <span m='562420'>if</span> <span m='562570'>U</span>
  <span m='562710'>is</span> <span m='562830'>uniform.</span> </p><p><span
  m='567320'>A</span> <span m='567620'>closely</span> <span
  m='568060'>related</span> <span m='569680'>function</span> <span
  m='570140'>that</span> <span m='570250'>describes</span> <span
  m='570690'>a</span> <span m='570750'>lot</span> <span m='570990'>about</span>
  <span m='571240'>the</span> <span m='571320'>behavior</span> <span
  m='571790'>of</span> <span m='571860'>a</span> <span m='571960'>random</span>
  <span m='572280'>variable</span> <span m='572760'>is</span> <span
  m='572970'>the</span> <span m='573110'>cumulative</span> <span
  m='574120'>distribution</span> <span m='574800'>function.</span> <span
  m='575460'>It's</span> <span m='575710'>simply</span> <span
  m='576080'>the</span> <span m='576190'>probability</span> <span
  m='577210'>that</span> <span m='577480'>R</span> <span m='577810'>is</span>
  <span m='577900'>less</span> <span m='578160'>than</span> <span
  m='578280'>or</span> <span m='578350'>equal</span> <span m='578580'>to</span>
  <span m='578720'>a.</span> <span m='578960'>So</span> <span
  m='579210'>it's</span> <span m='579350'>a</span> <span
  m='579410'>function</span> <span m='579890'>on</span> <span
  m='580270'>the</span> <span m='580400'>real</span> <span
  m='580640'>numbers,</span> <span m='581030'>from</span> <span
  m='581190'>reals</span> <span m='581460'>to</span> <span
  m='581580'>reals,</span> <span m='583360'>where</span> <span
  m='585500'>CDF</span> <span m='585975'>R</span> <span m='586450'>of</span>
  <span m='586550'>a</span> <span m='586810'>is</span> <span
  m='586950'>the</span> <span m='587040'>probability</span> <span
  m='587560'>that</span> <span m='587730'>R</span> <span m='588040'>is</span>
  <span m='588120'>less</span> <span m='588370'>than</span> <span
  m='588450'>or</span> <span m='588500'>equal</span> <span m='588720'>to</span>
  <span m='588920'>a.</span> <span m='589370'>Clearly</span> <span
  m='589790'>given</span> <span m='590060'>the</span> <span
  m='590150'>PDF,</span> <span m='591280'>you</span> <span m='591590'>can</span>
  <span m='591880'>get</span> <span m='592110'>the</span> <span
  m='592230'>CDF.</span> <span m='592810'>And</span> <span
  m='592940'>given</span> <span m='593180'>the</span> <span
  m='593240'>CDF,</span> <span m='593770'>you</span> <span m='593890'>can</span>
  <span m='594030'>get</span> <span m='594190'>the</span> <span
  m='594270'>PDF.</span> <span m='595440'>But</span> <span
  m='595640'>it's</span> <span m='595850'>convenient</span> <span
  m='596310'>to</span> <span m='596350'>have</span> <span m='596620'>both</span>
  <span m='596830'>around.</span> </p><p><span m='597880'>Now</span> <span
  m='598400'>the</span> <span m='598590'>key</span> <span
  m='599050'>observation</span> <span m='599750'>about</span> <span
  m='600150'>these</span> <span m='600500'>is</span> <span
  m='601200'>that</span> <span m='601410'>once</span> <span
  m='601700'>we've</span> <span m='601920'>abstracted</span> <span
  m='602820'>out</span> <span m='603200'>to</span> <span m='603300'>the</span>
  <span m='603460'>PDF</span> <span m='604010'>and</span> <span
  m='604130'>the</span> <span m='604200'>CDF,</span> <span m='605330'>we</span>
  <span m='605620'>don't</span> <span m='605930'>have</span> <span
  m='606160'>to</span> <span m='606270'>think</span> <span
  m='606530'>about</span> <span m='606840'>the</span> <span
  m='606920'>sample</span> <span m='607290'>space</span> <span
  m='607640'>anymore.</span> <span m='608580'>They</span> <span
  m='608730'>do</span> <span m='608980'>not</span> <span
  m='609230'>depend</span> <span m='609630'>on</span> <span
  m='609710'>the</span> <span m='609810'>sample</span> <span
  m='610190'>space.</span> <span m='610730'>All</span> <span
  m='610860'>they're</span> <span m='611010'>telling</span> <span
  m='611340'>you</span> <span m='611600'>is</span> <span m='612190'>the</span>
  <span m='612310'>probability</span> <span m='613010'>that</span> <span
  m='613200'>the</span> <span m='613320'>random</span> <span
  m='613660'>variable</span> <span m='614210'>takes</span> <span
  m='614500'>a</span> <span m='614550'>given</span> <span
  m='614860'>value,</span> <span m='615700'>which</span> <span
  m='615890'>is</span> <span m='616450'>in</span> <span m='616540'>some</span>
  <span m='616760'>ways,</span> <span m='616940'>the</span> <span
  m='617020'>most</span> <span m='617260'>important</span> <span
  m='617980'>data</span> <span m='618330'>about</span> <span m='618680'>a</span>
  <span m='618750'>random</span> <span m='619100'>variable.</span> <span
  m='619900'>You</span> <span m='620000'>need</span> <span m='620270'>to</span>
  <span m='620350'>fall</span> <span m='620690'>back</span> <span
  m='621000'>on</span> <span m='621100'>something</span> <span
  m='621450'>more</span> <span m='621650'>general</span> <span
  m='622110'>than</span> <span m='622240'>the</span> <span m='622330'>PDF</span>
  <span m='622780'>or</span> <span m='622880'>the</span> <span
  m='623110'>CDF</span> <span m='623830'>when</span> <span m='624080'>you</span>
  <span m='624480'>start</span> <span m='624800'>having</span> <span
  m='625320'>dependent</span> <span m='626030'>random</span> <span
  m='626380'>variables,</span> <span m='627240'>and</span> <span
  m='627450'>you</span> <span m='627540'>need</span> <span m='627800'>to</span>
  <span m='627890'>know</span> <span m='628110'>how</span> <span
  m='628270'>the</span> <span m='628410'>probability</span> <span
  m='629030'>that</span> <span m='629230'>R</span> <span m='629490'>takes</span>
  <span m='629780'>a</span> <span m='629820'>value</span> <span
  m='630210'>changes,</span> <span m='630740'>given</span> <span
  m='631080'>that</span> <span m='631230'>s</span> <span m='631750'>has</span>
  <span m='631980'>some</span> <span m='632220'>property</span> <span
  m='632750'>or</span> <span m='632830'>takes</span> <span
  m='633070'>some</span> <span m='633270'>other</span> <span
  m='633480'>value.</span> </p><p><span m='634920'>But</span> <span
  m='636020'>if</span> <span m='636220'>you're</span> <span
  m='636340'>just</span> <span m='636580'>looking</span> <span
  m='636900'>at</span> <span m='637020'>the</span> <span
  m='637120'>random</span> <span m='637410'>variable</span> <span
  m='637940'>alone,</span> <span m='638560'>essentially</span> <span
  m='639110'>everything</span> <span m='639520'>you</span> <span
  m='639590'>need</span> <span m='639810'>to</span> <span m='639910'>know</span>
  <span m='640050'>about</span> <span m='640350'>it</span> <span
  m='640455'>is</span> <span m='640560'>given</span> <span m='641620'>by</span>
  <span m='641980'>its</span> <span m='642220'>density</span> <span
  m='642700'>or</span> <span m='642750'>distribution</span> <span
  m='643350'>functions.</span> <span m='644200'>And</span> <span
  m='645320'>you</span> <span m='645490'>don't</span> <span
  m='645620'>have</span> <span m='645730'>to</span> <span
  m='645830'>worry</span> <span m='645990'>about</span> <span
  m='646180'>the</span> <span m='646260'>sample</span> <span
  m='646620'>space.</span> <span m='647170'>And</span> <span
  m='647350'>this</span> <span m='647510'>has</span> <span m='647720'>the</span>
  <span m='647860'>advantage</span> <span m='648440'>that</span> <span
  m='648730'>both</span> <span m='649200'>the</span> <span
  m='649290'>uniform</span> <span m='649740'>distributions</span> <span
  m='650650'>and</span> <span m='651630'>binomial</span> <span
  m='652200'>distributions</span> <span m='652890'>come</span> <span
  m='653160'>up</span> <span m='653300'>[AUDIO OUT]</span> </p><p></p><p><span
  m='661730'>--and</span> <span m='662930'>it</span> <span
  m='663140'>means</span> <span m='663450'>that</span> <span
  m='663600'>all</span> <span m='663840'>of</span> <span m='663940'>these</span>
  <span m='664170'>different</span> <span m='664520'>random</span> <span
  m='664830'>variables,</span> <span m='665630'>based</span> <span
  m='666020'>on</span> <span m='666130'>different</span> <span
  m='666460'>sample</span> <span m='666810'>spaces,</span> <span
  m='667790'>are</span> <span m='667920'>going</span> <span m='668070'>to</span>
  <span m='668130'>share</span> <span m='668840'>a</span> <span
  m='668940'>whole</span> <span m='669190'>lot</span> <span m='669350'>of</span>
  <span m='669430'>properties.</span> <span m='670480'>Everything</span> <span
  m='671040'>that</span> <span m='671190'>I</span> <span
  m='671270'>derive</span> <span m='671830'>based</span> <span
  m='672180'>on</span> <span m='672400'>what</span> <span m='672600'>the</span>
  <span m='672690'>PDF</span> <span m='673230'>is</span> <span
  m='673440'>is</span> <span m='673600'>going</span> <span m='673720'>to</span>
  <span m='673780'>apply</span> <span m='674150'>to</span> <span
  m='674290'>all</span> <span m='674530'>of</span> <span m='674670'>them.</span>
  <span m='675280'>That's</span> <span m='675440'>why</span> <span
  m='675710'>this</span> <span m='675980'>abstraction</span> <span
  m='677340'>of</span> <span m='677540'>a</span> <span m='677680'>random</span>
  <span m='678030'>variable</span> <span m='678960'>in</span> <span
  m='679130'>terms</span> <span m='679360'>of</span> <span m='679450'>a</span>
  <span m='679520'>probability</span> <span m='680140'>density</span> <span
  m='680550'>function</span> <span m='680940'>is</span> <span
  m='681020'>so</span> <span m='681210'>valuable</span> <span
  m='681850'>and</span> <span m='682030'>key.</span> <span m='682280'>But</span>
  <span m='682460'>remember,</span> <span m='683070'>the</span> <span
  m='683190'>definition</span> <span m='683760'>of</span> <span
  m='683870'>a</span> <span m='683960'>random</span> <span
  m='684220'>variable</span> <span m='684600'>is</span> <span
  m='684730'>not</span> <span m='685450'>that</span> <span m='685680'>it</span>
  <span m='685850'>is</span> <span m='686260'>a</span> <span
  m='686340'>probability</span> <span m='687140'>density</span> <span
  m='687570'>function,</span> <span m='688340'>rather</span> <span
  m='688750'>it's</span> <span m='689010'>a</span> <span
  m='689350'>function</span> <span m='689830'>from</span> <span
  m='690030'>the</span> <span m='690130'>sample</span> <span
  m='690500'>space</span> <span m='691260'>to</span> <span
  m='691490'>values.</span> </p>
embedded_media:
  - uid: b53103993e82c6797697a3c58db2f5fe
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: b1ac775caaf6834d97f4ab7901580157
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 0a6096f491f4085a6dcb4a354659afe7
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: L2yOSFsMvnc
  - uid: 43bb1d8643e88a2dcd32d3177a8ec8b6
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/L2yOSFsMvnc/default.jpg'
  - uid: 40bd2ee289841ad745370f838dea7d78
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: L2yOSFsMvnc
  - uid: ad95bf12c7e53f4ddcbe5744b2cae454
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: L2yOSFsMvnc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3/random-variables-uniform-binomial/L2yOSFsMvnc.srt
  - uid: c2c66a381ae520fc77fa7f44a462a059
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: L2yOSFsMvnc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-3/vertical-c596d4103fc3/random-variables-uniform-binomial/L2yOSFsMvnc.pdf
  - uid: 86e769450799e875d974fe70147d03d6
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 2be441a29651987ff2686287eb1537b0
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 081d8c3a107e18f7ffffd875fc370831
    parent_uid: 985788317dbed7e7520f8170d2a61c95
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_ranvarbinom_video_ipod.mp4
type: courses
layout: video
---
