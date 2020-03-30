---
title: Reducing Factoring To SAT
uid: 034d3d950c7eaeae33bcb498f8a00c52
parent_uid: 47ecda1473454286d8259977ef9b554b
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-2/vertical-10e2576c9510/reducing-factoring-to-sat
short_url: reducing-factoring-to-sat
inline_embed_id: 44976787reducingfactoringtosat64414686
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='830'>PROFESSOR: We've</span> <span m='1060'>mentioned</span> <span
  m='1560'>the</span> <span m='1860'>P</span> <span m='2029'>equals</span> <span
  m='2360'>NP</span> <span m='2680'>question</span> <span m='3830'>a</span>
  <span m='3920'>number</span> <span m='4170'>of</span> <span
  m='4270'>times</span> <span m='4590'>now</span> <span m='4810'>as</span> <span
  m='5560'>the</span> <span m='5790'>most</span> <span m='6060'>important</span>
  <span m='6640'>question</span> <span m='6865'>in</span> <span
  m='7090'>theoretical</span> <span m='7580'>computer</span> <span
  m='7900'>science,</span> <span m='8820'>and</span> <span m='8980'>we've</span>
  <span m='9160'>said</span> <span m='9480'>that</span> <span
  m='9890'>one</span> <span m='10220'>way</span> <span m='10370'>to</span> <span
  m='10450'>formulate</span> <span m='11030'>it</span> <span m='11290'>is</span>
  <span m='11650'>exactly</span> <span m='12190'>to</span> <span
  m='12310'>ask</span> <span m='12610'>whether</span> <span
  m='12850'>there's</span> <span m='13090'>an</span> <span
  m='13370'>efficient</span> <span m='13650'>that</span> <span
  m='13800'>is</span> <span m='13930'>polynomial-time</span> <span
  m='15390'>procedure</span> <span m='15990'>to</span> <span
  m='16149'>test</span> <span m='16480'>whether</span> <span m='16750'>or</span>
  <span m='16830'>not</span> <span m='17640'>a</span> <span
  m='17750'>formula</span> <span m='18540'>in</span> <span
  m='18710'>propositional</span> <span m='19880'>logic</span> <span
  m='20870'>is</span> <span m='21690'>satisfiable.</span> </p><p><span
  m='23530'>Now,</span> <span m='23580'>why</span> <span m='24020'>is</span>
  <span m='24260'>that</span> <span m='24480'>such</span> <span
  m='24710'>an</span> <span m='24760'>important</span> <span
  m='25130'>problem?</span> <span m='27940'>We're</span> <span
  m='28070'>not</span> <span m='28390'>just</span> <span
  m='28680'>logicians</span> <span m='29270'>and</span> <span
  m='29370'>we</span> <span m='29480'>want</span> <span m='29670'>to</span>
  <span m='29720'>know</span> <span m='29890'>whether</span> <span
  m='30110'>or</span> <span m='30180'>not</span> <span m='30370'>some</span>
  <span m='30510'>formula</span> <span m='30910'>is</span> <span
  m='31037'>satisfiable.</span> <span m='31770'>How</span> <span m='31950'>did
  it</span> <span m='32150'>take</span> <span m='32409'>on</span> <span
  m='32570'>this</span> <span m='33490'>enormous</span> <span
  m='34400'>importance</span> <span m='34990'>and</span> <span
  m='35080'>apply</span> <span m='35350'>to</span> <span m='35440'>so</span>
  <span m='35610'>many</span> <span m='35850'>fields?</span> <span
  m='36520'>And</span> <span m='36760'>illustrating</span> <span
  m='37340'>how</span> <span m='37640'>you</span> <span m='37830'>could</span>
  <span m='38000'>use</span> <span m='38700'>a</span> <span
  m='38810'>satisfiability</span> <span m='39740'>tester</span> <span
  m='40460'>to</span> <span m='40640'>factor</span> <span
  m='41150'>efficiently</span> <span m='42280'>is</span> <span
  m='42490'>a</span> <span m='42860'>good</span> <span m='43540'>hint</span>
  <span m='43920'>about</span> <span m='44290'>why</span> <span
  m='44580'>it</span> <span m='44700'>is</span> <span m='44960'>that</span>
  <span m='45300'>all</span> <span m='45480'>sorts</span> <span
  m='45760'>of</span> <span m='45870'>things</span> <span
  m='46100'>reduce</span> <span m='46450'>to</span> <span m='46550'>SAT</span>
  <span m='47110'>and</span> <span m='47330'>why</span> <span
  m='47630'>it,</span> <span m='47770'>in</span> <span m='47910'>fact,</span>
  <span m='48480'>is</span> <span m='48640'>such</span> <span m='48870'>a</span>
  <span m='48910'>centrally</span> <span m='49360'>important</span> <span
  m='49790'>problem.</span> </p><p><span m='50540'>So</span> <span
  m='50730'>let's</span> <span m='51030'>suppose</span> <span
  m='51315'>that</span> <span m='51600'>we</span> <span m='51750'>have</span>
  <span m='51990'>a</span> <span m='52060'>satisfiability</span> <span
  m='53030'>tester</span> <span m='54010'>and</span> <span m='54580'>use</span>
  <span m='54870'>it</span> <span m='55060'>to</span> <span
  m='55480'>find</span> <span m='56690'>how</span> <span m='56840'>to</span>
  <span m='56920'>factor</span> <span m='57350'>a</span> <span
  m='57390'>number</span> <span m='57780'>n.</span> <span m='59670'>Now,</span>
  <span m='59870'>the</span> <span m='60020'>observation</span> <span
  m='60880'>begins</span> <span m='61510'>with</span> <span m='61690'>how</span>
  <span m='61850'>you</span> <span m='62030'>use</span> <span m='62210'>a</span>
  <span m='62270'>SAT</span> <span m='62550'>solver</span> <span
  m='62990'>is</span> <span m='63630'>that</span> <span m='63870'>you</span>
  <span m='64019'>can</span> <span m='64870'>begin</span> <span
  m='65459'>by</span> <span m='65970'>writing</span> <span m='67060'>or</span>
  <span m='67300'>observing</span> <span m='67740'>that</span> <span
  m='67850'>it's</span> <span m='67980'>easy</span> <span
  m='68250'>enough</span> <span m='68430'>to</span> <span
  m='68580'>design</span> <span m='69120'>a</span> <span
  m='69230'>digital</span> <span m='69590'>circuit</span> <span
  m='70450'>that</span> <span m='70680'>multiplies,</span> <span
  m='71740'>that</span> <span m='71920'>does</span> <span
  m='72110'>arithmetic</span> <span m='72630'>multiplications.</span> <span
  m='73430'>In</span> <span m='73500'>other</span> <span m='73650'>words,</span>
  <span m='73840'>it's</span> <span m='74000'>got</span> <span
  m='74510'>some</span> <span m='74740'>number</span> <span m='75130'>of</span>
  <span m='75860'>bits</span> <span m='76140'>reserved</span> <span
  m='76510'>for</span> <span m='76580'>an</span> <span m='76650'>input</span>
  <span m='77000'>x,</span> <span m='77345'>a</span> <span m='77517'>k</span>
  <span m='77690'>bits,</span> <span m='78360'>and</span> <span
  m='78620'>another</span> <span m='78890'>k</span> <span m='79090'>bits</span>
  <span m='79330'>for</span> <span m='79400'>an</span> <span
  m='79470'>input</span> <span m='79840'>y,</span> <span m='80540'>and</span>
  <span m='81080'>it's</span> <span m='81310'>got</span> <span
  m='81650'>2k</span> <span m='82120'>output</span> <span m='82850'>lines</span>
  <span m='83710'>that</span> <span m='84050'>produce</span> <span
  m='85230'>the</span> <span m='86190'>digits</span> <span m='86485'>of</span>
  <span m='86780'>x</span> <span m='87010'>times</span> <span
  m='87340'>y.</span> <span m='88440'>You</span> <span m='88560'>might</span>
  <span m='88790'>need</span> <span m='88960'>one</span> <span
  m='89150'>extra</span> <span m='89410'>digit,</span> <span
  m='89740'>but</span> <span m='89880'>never</span> <span m='90060'>mind</span>
  <span m='90280'>that.</span> </p><p><span m='91780'>So</span> <span
  m='91980'>this</span> <span m='92160'>is</span> <span m='92270'>a</span> <span
  m='92310'>multiplier</span> <span m='92810'>circuit</span> <span
  m='93200'>takes</span> <span m='93450'>an</span> <span m='93580'>x,</span>
  <span m='93835'>a k</span> <span m='94090'>bit</span> <span m='94300'>x</span>
  <span m='94550'>in</span> <span m='94840'>and</span> <span m='95080'>a</span>
  <span m='95130'>k bit</span> <span m='95425'>y</span> <span
  m='95950'>in</span> <span m='96310'>and</span> <span m='96480'>it</span> <span
  m='96710'>spits</span> <span m='97120'>out</span> <span m='97890'>the</span>
  <span m='98230'>product,</span> <span m='99930'>which</span> <span
  m='100140'>is</span> <span m='100260'>another</span> <span
  m='100580'>2k</span> <span m='100940'>bit</span> <span
  m='101170'>number,</span> <span m='101800'>and</span> <span
  m='102150'>this</span> <span m='102340'>is</span> <span m='102480'>not</span>
  <span m='102820'>a</span> <span m='102910'>terribly</span> <span
  m='103320'>big</span> <span m='103530'>circuit.</span> <span
  m='104000'>The</span> <span m='104050'>naive</span> <span
  m='104540'>way</span> <span m='104710'>to</span> <span
  m='104800'>design</span> <span m='105290'>it</span> <span
  m='105810'>would</span> <span m='106390'>use</span> <span m='106700'>a</span>
  <span m='106760'>number</span> <span m='107180'>of</span> <span
  m='107270'>gates</span> <span m='108440'>and</span> <span m='108560'>a</span>
  <span m='108620'>number</span> <span m='108850'>of</span> <span
  m='108920'>wires</span> <span m='109280'>that</span> <span
  m='109340'>was</span> <span m='109470'>about</span> <span
  m='109740'>quadratic</span> <span m='110920'>in</span> <span
  m='111350'>the</span> <span m='111490'>number</span> <span
  m='111820'>k.</span> <span m='113180'>It's</span> <span m='113360'>easy</span>
  <span m='113560'>enough</span> <span m='113740'>to</span> <span
  m='114190'>design</span> <span m='114560'>one</span> <span
  m='114710'>of</span> <span m='114770'>these</span> <span
  m='114950'>things</span> <span m='115140'>where</span> <span
  m='115280'>the</span> <span m='115400'>size is</span> <span
  m='115840'>literally</span> <span m='116200'>bounded</span> <span
  m='116510'>by</span> <span m='116630'>5</span> <span m='117010'>times</span>
  <span m='117580'>k</span> <span m='117800'>squared,</span> <span
  m='119690'>maybe</span> <span m='119800'>plus</span> <span m='120030'>a</span>
  <span m='120090'>constant.</span> </p><p><span m='121360'>And</span> <span
  m='123350'>so</span> <span m='123870'>this</span> <span
  m='124180'>definitely</span> <span m='124640'>a</span> <span
  m='124700'>small</span> <span m='125000'>polynomial.</span> <span
  m='127180'>Given</span> <span m='128110'>the</span> <span
  m='128500'>number</span> <span m='128940'>of</span> <span
  m='129090'>bits</span> <span m='129380'>that</span> <span
  m='129490'>I'm</span> <span m='129600'>working</span> <span
  m='129930'>with,</span> <span m='130150'>it's</span> <span
  m='130300'>easy</span> <span m='130600'>enough</span> <span
  m='130850'>to</span> <span m='131030'>build</span> <span
  m='131570'>this</span> <span m='132270'>multiplier</span> <span
  m='132810'>circuit.</span> </p><p><span m='134510'>Now,</span> <span
  m='135050'>suppose</span> <span m='135600'>that</span> <span
  m='135820'>I</span> <span m='135920'>have</span> <span m='136290'>a</span>
  <span m='136450'>way</span> <span m='136650'>to</span> <span
  m='136770'>test</span> <span m='137040'>satisfiability</span> <span
  m='138040'>of</span> <span m='138110'>circuits.</span> <span
  m='139400'>How</span> <span m='139680'>am</span> <span m='139810'>I</span>
  <span m='139870'>going</span> <span m='140700'>use</span> <span
  m='141020'>this</span> <span m='141360'>multiplier</span> <span
  m='141910'>circuit</span> <span m='142250'>to</span> <span
  m='142320'>factor?</span> <span m='142990'>Well,</span> <span m='143250'>the
  first</span> <span m='143490'>thing</span> <span m='143610'>I'm</span> <span
  m='143700'>going</span> <span m='143780'>to</span> <span m='143820'>do</span>
  <span m='143950'>is</span> <span m='144160'>let's</span> <span
  m='144490'>suppose</span> <span m='145070'>the</span> <span
  m='145190'>number</span> <span m='145940'>that</span> <span
  m='145996'>I'm</span> <span m='146053'>factoring</span> <span
  m='146730'>is</span> <span m='146910'>n</span> <span m='147045'>and</span>
  <span m='147180'>is</span> <span m='147360'>the</span> <span
  m='147430'>product</span> <span m='147780'>of</span> <span
  m='147880'>two</span> <span m='148430'>primes,</span> <span
  m='148760'>p</span> <span m='148980'>and</span> <span m='149080'>q.</span>
  <span m='149350'>Those</span> <span m='149550'>are</span> <span
  m='149570'>the</span> <span m='149680'>kinds</span> <span m='149950'>of</span>
  <span m='150010'>n's</span> <span m='150330'>that</span> <span
  m='150440'>we've</span> <span m='150630'>been</span> <span
  m='150800'>using</span> <span m='151120'>in</span> <span
  m='151522'>RSA,</span> <span m='152326'>and</span> <span m='152730'>let</span>
  <span m='152940'>me</span> <span m='153060'>also</span> <span
  m='153390'>observe</span> <span m='153790'>that</span> <span
  m='153920'>it's</span> <span m='154070'>very</span> <span
  m='154390'>easy</span> <span m='154690'>to</span> <span
  m='154810'>design</span> <span m='155780'>an</span> <span m='156095'>n</span>
  <span m='156410'>tester--</span> <span m='156940'>that</span> <span
  m='157160'>is,</span> <span m='157860'>a</span> <span m='158200'>little</span>
  <span m='158690'>digital</span> <span m='159020'>circuit</span> <span
  m='159610'>that</span> <span m='160050'>has</span> <span m='161380'>2k</span>
  <span m='162680'>input</span> <span m='163050'>lines</span> <span
  m='163800'>and</span> <span m='164160'>produces</span> <span
  m='165350'>on</span> <span m='165490'>its</span> <span m='165610'>one</span>
  <span m='165900'>output</span> <span m='166320'>line</span> <span
  m='166770'>precisely</span> <span m='167750'>when</span> <span
  m='168200'>the</span> <span m='168800'>input</span> <span m='169480'>is</span>
  <span m='169830'>the</span> <span m='169910'>binary</span> <span
  m='170200'>representation</span> <span m='170930'>of</span> <span
  m='171060'>n.</span> </p><p><span m='171710'>So</span> <span
  m='171870'>let's</span> <span m='172080'>attach</span> <span
  m='172610'>this</span> <span m='172820'>equality</span> <span
  m='173430'>tester</span> <span m='174210'>that</span> <span
  m='174430'>does</span> <span m='174610'>nothing</span> <span
  m='174980'>but</span> <span m='175190'>ask</span> <span
  m='175490'>whether</span> <span m='176010'>it's</span> <span
  m='176250'>being</span> <span m='176510'>fed</span> <span
  m='176830'>the</span> <span m='176890'>digits</span> <span
  m='177310'>of</span> <span m='177440'>n</span> <span m='177730'>as</span>
  <span m='177910'>input</span> <span m='178540'>and</span> <span
  m='178770'>it</span> <span m='178890'>produces</span> <span
  m='179500'>an</span> <span m='179630'>output,</span> <span m='181010'>1</span>
  <span m='181350'>for</span> <span m='181600'>n</span> <span
  m='182160'>and</span> <span m='182760'>0</span> <span m='183320'>if</span>
  <span m='183570'>the</span> <span m='183720'>input</span> <span
  m='184210'>pattern</span> <span m='184650'>is</span> <span
  m='184870'>and</span> <span m='185090'>the</span> <span
  m='185230'>digital</span> <span m='185640'>representation,</span> <span
  m='186880'>the</span> <span m='187020'>binary</span> <span
  m='187300'>representation</span> <span m='187600'>of</span> <span
  m='187900'>anything</span> <span m='188170'>other</span> <span
  m='188310'>than</span> <span m='188470'>n.</span> <span
  m='189240'>That's</span> <span m='189430'>another</span> <span
  m='189760'>trivial</span> <span m='190160'>circuit</span> <span
  m='190550'>to</span> <span m='190630'>build.</span> </p><p><span
  m='192110'>So</span> <span m='192490'>we</span> <span m='192620'>put</span>
  <span m='192850'>those</span> <span m='193070'>two</span> <span
  m='193220'>together,</span> <span m='194050'>and</span> <span
  m='194330'>now</span> <span m='195030'>watch</span> <span
  m='195250'>what</span> <span m='195400'>happens.</span> <span
  m='197610'>I'm</span> <span m='197780'>going</span> <span m='197950'>to</span>
  <span m='198650'>take</span> <span m='198930'>the</span> <span
  m='199030'>circuit</span> <span m='199630'>and</span> <span
  m='200590'>set</span> <span m='201130'>the</span> <span
  m='201310'>first</span> <span m='201930'>of</span> <span m='202190'>the</span>
  <span m='202370'>input</span> <span m='202840'>bits</span> <span
  m='203120'>to</span> <span m='203230'>0,</span> <span m='204660'>and</span>
  <span m='204870'>then</span> <span m='205080'>I'm</span> <span
  m='205180'>going</span> <span m='205360'>to</span> <span m='205490'>ask</span>
  <span m='206320'>the</span> <span m='206450'>SAT</span> <span
  m='206750'>solver</span> <span m='207100'>the</span> <span
  m='207220'>following</span> <span m='207700'>question--</span> <span
  m='208910'>is</span> <span m='209160'>there</span> <span m='209350'>a</span>
  <span m='209470'>way</span> <span m='210130'>to</span> <span
  m='210290'>set</span> <span m='210750'>the</span> <span
  m='210860'>remaining</span> <span m='211380'>input</span> <span
  m='211820'>bits</span> <span m='213560'>other</span> <span
  m='213810'>than</span> <span m='214030'>0?</span> <span m='214400'>So</span>
  <span m='214520'>I've</span> <span m='214640'>set</span> <span
  m='214890'>the</span> <span m='214970'>first</span> <span
  m='215250'>one</span> <span m='215370'>to</span> <span m='215460'>0.</span>
  <span m='215760'>What</span> <span m='215910'>about</span> <span
  m='216130'>these</span> <span m='216300'>other</span> <span
  m='216520'>bits?</span> <span m='216960'>The</span> <span
  m='217110'>SAT</span> <span m='217380'>solver</span> <span
  m='217740'>can</span> <span m='217960'>tell</span> <span m='218170'>me</span>
  <span m='218630'>whether</span> <span m='218950'>or</span> <span
  m='219070'>not</span> <span m='219380'>it's</span> <span
  m='219550'>possible</span> <span m='220350'>to</span> <span
  m='220480'>get</span> <span m='220700'>a</span> <span m='220820'>1</span>
  <span m='221210'>out</span> <span m='221420'>of</span> <span
  m='221560'>this</span> <span m='221660'>circuit</span> <span
  m='222430'>with</span> <span m='222690'>the</span> <span m='222750'>0</span>
  <span m='223480'>there</span> <span m='223690'>fixed.</span> </p><p><span
  m='224900'>So</span> <span m='225140'>let's</span> <span m='226000'>ask</span>
  <span m='226260'>the</span> <span m='226340'>SAT</span> <span
  m='226630'>solver</span> <span m='226960'>what</span> <span
  m='227110'>happens,</span> <span m='227460'>and</span> <span
  m='227540'>the</span> <span m='227610'>SAT</span> <span
  m='227850'>solver</span> <span m='228150'>says,</span> <span
  m='228360'>hey,</span> <span m='228510'>yes,</span> <span
  m='229380'>there</span> <span m='229580'>is</span> <span m='229880'>a</span>
  <span m='229960'>way</span> <span m='230550'>to</span> <span
  m='230680'>fill</span> <span m='230960'>in</span> <span m='231060'>the</span>
  <span m='231130'>remaining</span> <span m='231570'>digits</span> <span
  m='232300'>and</span> <span m='232530'>get</span> <span m='232650'>an</span>
  <span m='232740'>output</span> <span m='233140'>1.</span> <span
  m='234130'>Well,</span> <span m='234350'>what</span> <span
  m='234480'>does</span> <span m='234580'>that</span> <span
  m='234800'>tell</span> <span m='234985'>me?</span> <span
  m='235170'>Well,</span> <span m='235290'>it</span> <span
  m='235410'>tells</span> <span m='235730'>me</span> <span
  m='235910'>that</span> <span m='236740'>there</span> <span
  m='237830'>is</span> <span m='238060'>a</span> <span m='238120'>factor</span>
  <span m='238620'>that</span> <span m='238800'>starts</span> <span
  m='239090'>with</span> <span m='239210'>0,</span> <span m='239590'>so</span>
  <span m='239830'>let's</span> <span m='240090'>fix</span> <span
  m='240380'>the</span> <span m='240450'>0</span> <span m='240960'>based</span>
  <span m='241300'>on</span> <span m='241460'>the</span> <span
  m='241540'>fact</span> <span m='241820'>that</span> <span
  m='242950'>it's</span> <span m='243130'>possible</span> <span
  m='243670'>for</span> <span m='243800'>me</span> <span m='243920'>to</span>
  <span m='243990'>fill</span> <span m='244330'>in</span> <span
  m='244450'>the</span> <span m='244540'>remaining</span> <span
  m='244940'>digits</span> <span m='245600'>with</span> <span
  m='247030'>the</span> <span m='247750'>bits</span> <span m='248310'>of</span>
  <span m='248920'>factors</span> <span m='249470'>x</span> <span
  m='249690'>and</span> <span m='249780'>y</span> <span m='250100'>that</span>
  <span m='250380'>equal</span> <span m='250770'>n.</span> </p><p><span
  m='252080'>Let's</span> <span m='252530'>try</span> <span m='252890'>to</span>
  <span m='253000'>set</span> <span m='253280'>the</span> <span
  m='253370'>second</span> <span m='255780'>input</span> <span
  m='256269'>bit</span> <span m='256630'>to</span> <span m='257010'>0</span>
  <span m='257519'>and</span> <span m='257670'>see</span> <span
  m='257779'>what</span> <span m='257920'>happens.</span> <span
  m='258279'>Well,</span> <span m='258440'>we'll</span> <span
  m='258540'>ask</span> <span m='258640'>the</span> <span m='258740'>SAT</span>
  <span m='259040'>tester,</span> <span m='259620'>is</span> <span
  m='259800'>it</span> <span m='259899'>possible</span> <span
  m='260690'>now</span> <span m='261149'>to</span> <span m='261310'>fill</span>
  <span m='261600'>in</span> <span m='261730'>the</span> <span
  m='261820'>remaining</span> <span m='262250'>digits</span> <span
  m='262700'>to</span> <span m='262800'>get</span> <span m='263680'>the</span>
  <span m='264570'>two</span> <span m='264740'>numbers</span> <span
  m='265090'>x</span> <span m='265280'>and</span> <span m='265350'>y</span>
  <span m='265790'>that</span> <span m='265940'>multiply</span> <span
  m='266390'>and</span> <span m='266600'>produce</span> <span
  m='267500'>n</span> <span m='268020'>and</span> <span
  m='268200'>therefore</span> <span m='268580'>output</span> <span
  m='268960'>1?</span> <span m='269180'>And</span> <span m='269890'>the</span>
  <span m='269960'>SAT</span> <span m='270200'>tester</span> <span
  m='270470'>says,</span> <span m='270650'>no,</span> <span
  m='271230'>this</span> <span m='271440'>is</span> <span m='271780'>an</span>
  <span m='271940'>unsatisfiable</span> <span m='272960'>circuit.</span> <span
  m='273350'>You</span> <span m='273480'>can't</span> <span
  m='273790'>get</span> <span m='273920'>a</span> <span m='273990'>1</span>
  <span m='274240'>out</span> <span m='274410'>of</span> <span
  m='274520'>it</span> <span m='274640'>any</span> <span m='274955'>more.</span>
  <span m='275520'>That</span> <span m='275830'>tells</span> <span
  m='276110'>me</span> <span m='276350'>that</span> <span m='276880'>I</span>
  <span m='277090'>have</span> <span m='277310'>to</span> <span
  m='277420'>set</span> <span m='277780'>the</span> <span
  m='277890'>second</span> <span m='278270'>bit</span> <span
  m='278480'>to</span> <span m='278570'>1</span> <span m='278950'>in</span>
  <span m='279080'>order</span> <span m='279420'>to</span> <span
  m='279940'>have</span> <span m='281350'>a</span> <span
  m='281440'>factor</span> <span m='283130'>of</span> <span m='283300'>n</span>
  <span m='283830'>where</span> <span m='284030'>the</span> <span
  m='284490'>x</span> <span m='284700'>and</span> <span m='284790'>y</span>
  <span m='285280'>will</span> <span m='285480'>multiply</span> <span
  m='285970'>together</span> <span m='286400'>to</span> <span
  m='286520'>be</span> <span m='286710'>n.</span> </p><p><span
  m='287510'>All</span> <span m='287730'>right,</span> <span
  m='288110'>fine.</span> <span m='288580'>Go</span> <span m='288700'>to</span>
  <span m='288780'>the</span> <span m='288920'>third</span> <span
  m='289210'>bit,</span> <span m='289400'>ask</span> <span
  m='289670'>whether</span> <span m='290000'>or</span> <span
  m='290080'>not</span> <span m='290350'>0</span> <span m='290690'>works.</span>
  <span m='291670'>The</span> <span m='291860'>SAT</span> <span
  m='292270'>tester</span> <span m='292720'>says,</span> <span
  m='293260'>let's</span> <span m='293490'>say,</span> <span
  m='293660'>yes.</span> <span m='294220'>So</span> <span m='294400'>then</span>
  <span m='294570'>I</span> <span m='294660'>could</span> <span
  m='294870'>fix</span> <span m='295100'>0.</span> <span m='295420'>I</span>
  <span m='295520'>now</span> <span m='295740'>know</span> <span
  m='295930'>the</span> <span m='296040'>first</span> <span
  m='296850'>all</span> <span m='297380'>three</span> <span
  m='298050'>bits</span> <span m='298780'>of</span> <span m='299010'>x.</span>
  <span m='299700'>And</span> <span m='299920'>of</span> <span
  m='299980'>course,</span> <span m='300250'>I</span> <span m='300320'>go</span>
  <span m='300570'>on</span> <span m='300950'>and</span> <span
  m='301290'>in</span> <span m='301900'>2k</span> <span m='302400'>SAT</span>
  <span m='302800'>tests,</span> <span m='303780'>I</span> <span
  m='303920'>know</span> <span m='304240'>exactly</span> <span
  m='304750'>what</span> <span m='304930'>p</span> <span m='305047'>and</span>
  <span m='305165'>q</span> <span m='305283'>are,</span> <span
  m='305990'>and</span> <span m='306260'>I</span> <span m='306420'>have,</span>
  <span m='306630'>in</span> <span m='306730'>fact,</span> <span
  m='307600'>found</span> <span m='308040'>the</span> <span
  m='308120'>factors</span> <span m='308650'>p</span> <span
  m='308840'>and</span> <span m='308980'>q.</span> </p><p><span
  m='311150'>So</span> <span m='311340'>that</span> <span
  m='311830'>wraps</span> <span m='312180'>that</span> <span
  m='312400'>one</span> <span m='312530'>up.</span> <span
  m='312650'>That's</span> <span m='312840'>how</span> <span
  m='312930'>you</span> <span m='313020'>use</span> <span m='313190'>a</span>
  <span m='313240'>SAT</span> <span m='313550'>tester.</span> <span
  m='314040'>You</span> <span m='314200'>just</span> <span m='314710'>do</span>
  <span m='314800'>the</span> <span m='314950'>SAT</span> <span
  m='315230'>test</span> <span m='315470'>2k</span> <span
  m='315790'>times</span> <span m='316130'>and</span> <span
  m='316210'>you</span> <span m='316350'>factored</span> <span
  m='317070'>this</span> <span m='317270'>2k</span> <span m='317690'>bit</span>
  <span m='317900'>number.</span> <span m='320050'>And</span> <span
  m='320270'>of</span> <span m='320320'>course,</span> <span
  m='320530'>if</span> <span m='320640'>the</span> <span m='320730'>SAT</span>
  <span m='321000'>test</span> <span m='321250'>is</span> <span
  m='321340'>polynomial</span> <span m='321950'>in</span> <span
  m='322060'>k,</span> <span m='322310'>then</span> <span
  m='322490'>doing</span> <span m='322750'>it</span> <span m='322870'>2k</span>
  <span m='323200'>times</span> <span m='323620'>just</span> <span
  m='323905'>is</span> <span m='324190'>also</span> <span
  m='324500'>polynomial</span> <span m='324810'>in</span> <span
  m='325120'>k</span> <span m='325360'>with</span> <span m='325530'>one</span>
  <span m='325700'>degree</span> <span m='326390'>higher.</span> </p><p><span
  m='328390'>Now,</span> <span m='329600'>the</span> <span
  m='330680'>satisfiability</span> <span m='331470'>problem,</span> <span
  m='331880'>as</span> <span m='332050'>we</span> <span
  m='332190'>formulated,</span> <span m='332850'>was</span> <span
  m='333060'>a</span> <span m='333530'>problem</span> <span
  m='334070'>about</span> <span m='334340'>formulas</span> <span
  m='335320'>that</span> <span m='335460'>as</span> <span m='335540'>you</span>
  <span m='335650'>wrote</span> <span m='335840'>out</span> <span
  m='335980'>a</span> <span m='336050'>propositional</span> <span
  m='336680'>formula</span> <span m='337360'>and</span> <span
  m='337460'>asked</span> <span m='337720'>whether</span> <span
  m='337990'>or</span> <span m='338010'>not</span> <span m='338230'>it
  was</span> <span m='338350'>satisfiable,</span> <span m='339370'>and</span>
  <span m='339585'>I'm</span> <span m='339800'>instead</span> <span
  m='340190'>asking</span> <span m='340560'>about</span> <span
  m='340800'>satisfiability</span> <span m='341760'>of</span> <span
  m='341900'>binary</span> <span m='342270'>circuits.</span> <span
  m='343200'>But</span> <span m='343460'>in</span> <span m='343570'>fact,</span>
  <span m='344010'>as</span> <span m='344400'>we</span> <span
  m='344770'>did</span> <span m='344910'>in</span> <span m='345050'>some</span>
  <span m='345220'>early</span> <span m='345500'>exercises,</span> <span
  m='346400'>you</span> <span m='346560'>can</span> <span
  m='346780'>describe</span> <span m='347770'>a</span> <span
  m='348160'>binary</span> <span m='348990'>circuit</span> <span
  m='350000'>by</span> <span m='350500'>assigning</span> <span
  m='351030'>a</span> <span m='351100'>fresh</span> <span
  m='351430'>variable</span> <span m='352040'>to</span> <span
  m='352120'>every</span> <span m='352380'>wire</span> <span
  m='352750'>in</span> <span m='352850'>the</span> <span
  m='352930'>circuit</span> <span m='353520'>and</span> <span
  m='353810'>then</span> <span m='353970'>writing</span> <span
  m='354290'>a</span> <span m='354340'>little</span> <span
  m='354610'>formula</span> <span m='355320'>around</span> <span
  m='355620'>each</span> <span m='355930'>gate</span> <span
  m='356590'>which</span> <span m='356880'>explains</span> <span
  m='357500'>how</span> <span m='358120'>the</span> <span
  m='358400'>input</span> <span m='358800'>wires</span> <span
  m='359260'>to</span> <span m='359380'>that</span> <span m='359620'>gate</span>
  <span m='360100'>are</span> <span m='360300'>related</span> <span
  m='360800'>to</span> <span m='360900'>the</span> <span
  m='361070'>output</span> <span m='361600'>wire</span> <span
  m='361875'>of</span> <span m='362150'>that</span> <span
  m='362410'>gate.</span> <span m='363020'>And</span> <span
  m='363380'>that</span> <span m='363590'>little</span> <span
  m='363800'>formula</span> <span m='364320'>explains</span> <span
  m='365010'>that</span> <span m='365250'>wiring</span> <span
  m='365780'>of</span> <span m='366240'>that</span> <span
  m='366490'>gate,</span> <span m='366615'>and</span> <span
  m='366740'>you</span> <span m='367210'>take</span> <span m='367460'>the</span>
  <span m='367630'>"and"</span> <span m='367825'>of</span> <span
  m='368020'>all</span> <span m='368300'>those</span> <span
  m='368500'>formulas</span> <span m='369400'>and</span> <span
  m='369720'>you</span> <span m='369840'>have</span> <span m='370100'>a</span>
  <span m='370160'>formula</span> <span m='371430'>that</span> <span
  m='371890'>is</span> <span m='372120'>describing</span> <span
  m='373700'>the</span> <span m='374000'>structure</span> <span
  m='376600'>of</span> <span m='376750'>the</span> <span
  m='376810'>circuitry,</span> <span m='377520'>and</span> <span
  m='377680'>in</span> <span m='377750'>fact</span> <span m='378030'>the</span>
  <span m='378100'>formula</span> <span m='378640'>is</span> <span
  m='378780'>satisfiable</span> <span m='379750'>if</span> <span
  m='379970'>and</span> <span m='380050'>only</span> <span m='380430'>if</span>
  <span m='380740'>the</span> <span m='380860'>circuit</span> <span
  m='381290'>can</span> <span m='381440'>produce</span> <span
  m='381910'>an</span> <span m='382060'>output</span> <span m='382500'>1.</span>
  </p><p><span m='383280'>So</span> <span m='384090'>we</span> <span
  m='384290'>really</span> <span m='384650'>have</span> <span
  m='385430'>by</span> <span m='385770'>assuming</span> <span
  m='386210'>that</span> <span m='386380'>I</span> <span m='386460'>could</span>
  <span m='387390'>test</span> <span m='387580'>satisfiability</span> <span
  m='388320'>of</span> <span m='388370'>formulas,</span> <span
  m='389550'>I</span> <span m='389660'>can</span> <span
  m='390320'>therefore</span> <span m='391340'>test</span> <span
  m='391600'>satisfiability</span> <span m='392580'>of</span> <span
  m='392780'>circuits,</span> <span m='393550'>and</span> <span
  m='393910'>therefore</span> <span m='394700'>I</span> <span
  m='394810'>can</span> <span m='395010'>factor.</span> <span
  m='395560'>So</span> <span m='396680'>that's</span> <span
  m='396940'>the</span> <span m='396980'>simple</span> <span
  m='397320'>trick</span> <span m='397530'>to</span> <span
  m='397630'>find</span> <span m='398020'>a</span> <span
  m='399010'>propositional</span> <span m='399590'>formula</span> <span
  m='400180'>that's</span> <span m='400510'>equisatisfiable</span> <span
  m='401650'>to</span> <span m='401750'>the</span> <span
  m='402240'>circuit--</span> <span m='402710'>if</span> <span
  m='402760'>the</span> <span m='402810'>circuit</span> <span
  m='403170'>produces</span> <span m='403610'>output</span> <span
  m='404000'>1</span> <span m='404950'>if</span> <span m='405140'>and</span>
  <span m='405240'>only</span> <span m='405325'>if</span> <span
  m='405820'>this</span> <span m='406150'>formula</span> <span
  m='406950'>of</span> <span m='407130'>about</span> <span m='407390'>the</span>
  <span m='407460'>same</span> <span m='407690'>size</span> <span
  m='408030'>as</span> <span m='408140'>the</span> <span
  m='408240'>circuit</span> <span m='408950'>is</span> <span
  m='409090'>satisfiable.</span> <span m='410600'>And</span> <span
  m='410780'>that's</span> <span m='411180'>the</span> <span
  m='411540'>last</span> <span m='411980'>piece</span> <span
  m='412260'>that</span> <span m='412380'>I</span> <span
  m='412460'>needed</span> <span m='412830'>in</span> <span
  m='413050'>order</span> <span m='413310'>to</span> <span
  m='413840'>completely</span> <span m='414340'>reduce</span> <span
  m='415860'>the</span> <span m='416010'>factoring</span> <span
  m='417080'>to</span> <span m='417550'>the</span> <span
  m='417650'>satisfiability</span> <span m='418540'>problem,</span> <span
  m='418870'>and</span> <span m='418970'>you</span> <span
  m='419030'>could</span> <span m='419170'>see</span> <span
  m='419280'>that</span> <span m='419390'>this</span> <span m='419520'>is</span>
  <span m='419630'>actually</span> <span m='419910'>a</span> <span
  m='419960'>general</span> <span m='420340'>method</span> <span
  m='420750'>that</span> <span m='420900'>will</span> <span
  m='421100'>enable</span> <span m='421470'>you</span> <span
  m='421890'>to</span> <span m='422250'>reduce</span> <span
  m='422990'>most</span> <span m='423280'>any</span> <span
  m='423540'>kind</span> <span m='423770'>of</span> <span
  m='423850'>one-way</span> <span m='424560'>function</span> <span
  m='425970'>to</span> <span m='426510'>a</span> <span m='426620'>few</span>
  <span m='426990'>SAT</span> <span m='427320'>tests.</span> </p>
embedded_media:
  - uid: 505f656a642ae268c489a16a3fb48fc8
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: c6495a88e8c89a824687bb405028d7cf
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 24a0e9ea083d7a5e41cd01a984d60690
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: yWIQCewgfwY
  - uid: 44ec9f8bcfa1cc3782661d21c67ebfed
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/yWIQCewgfwY/default.jpg'
  - uid: feeec1f091bb3c79300172aaa1dd9f38
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: yWIQCewgfwY
  - uid: b524098c26e3ab7ed804f18d3e145194
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: yWIQCewgfwY.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-2/vertical-10e2576c9510/reducing-factoring-to-sat/yWIQCewgfwY.srt
  - uid: d04c5e683e1acda26fd6e0acab9592eb
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: yWIQCewgfwY.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp6-2/vertical-10e2576c9510/reducing-factoring-to-sat/yWIQCewgfwY.pdf
  - uid: 7bd9ae1b196c7f2c8bfebd99426a97de
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5ed68cb64938548607dd38ec08f1c1dd
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: f0bbd51fdd3169033294e06c06c74f38
    parent_uid: 034d3d950c7eaeae33bcb498f8a00c52
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_sat_factors_video_ipod.mp4
type: courses
layout: video
---
