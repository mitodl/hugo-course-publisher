---
title: Partial Fractions Decomposition
uid: edcda0140b6aaac8c0a0f20f9083e164
parent_uid: b2d9964453e89357525c798ec9a77daf
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-75-advanced-partial-fractions/partial-fractions-decomposition
short_url: partial-fractions-decomposition
inline_embed_id: 15556538partialfractionsdecomposition95517185
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7000'>Hi.</span> <span m='7380'>Welcome</span> <span
  m='7730'>back</span> <span m='7950'>to recitation.</span> <span
  m='9000'>You've</span> <span m='9240'>been</span> <span m='9390'>talking
  in</span> <span m='9860'>class</span> <span m='10250'>about</span> <span
  m='10910'>partial</span> <span m='11270'>fraction</span> <span
  m='11710'>decomposition</span> <span m='12480'>as</span> <span
  m='12690'>a</span> <span m='13080'>tool</span> <span m='13500'>for</span>
  <span m='13740'>integration.</span> <span m='14670'>So</span> <span
  m='14810'>remember</span> <span m='15150'>that</span> <span
  m='15350'>the</span> <span m='15780'>point</span> <span m='16170'>of</span>
  <span m='16230'>partial</span> <span m='16600'>fraction</span> <span
  m='16970'>decomposition</span> <span m='17970'>is</span> <span
  m='18170'>that</span> <span m='18260'>whenever</span> <span
  m='18560'>you</span> <span m='18700'>have</span> <span m='19420'>a</span>
  <span m='19600'>rational</span> <span m='20150'>function,</span> <span
  m='20620'>that</span> <span m='20770'>is,</span> <span m='21220'>one</span>
  <span m='21640'>polynomial</span> <span m='22260'>divided</span> <span
  m='22650'>by</span> <span m='22820'>another,</span> <span
  m='23560'>that</span> <span m='24040'>in</span> <span
  m='24250'>principle,</span> <span m='25010'>partial</span> <span
  m='25400'>fraction</span> <span m='25750'>decomposition</span> <span
  m='26620'>lets</span> <span m='26830'>you</span> <span m='26940'>write</span>
  <span m='27490'>any</span> <span m='27790'>such</span> <span
  m='28020'>expression</span> <span m='28750'>as</span> <span m='28910'>a</span>
  <span m='28980'>sum</span> <span m='29330'>of</span> <span
  m='29470'>things,</span> <span m='30160'>each</span> <span m='30390'>of</span>
  <span m='30490'>which</span> <span m='30720'>is</span> <span
  m='30830'>relatively</span> <span m='31420'>easy</span> <span
  m='31650'>to</span> <span m='31770'>integrate.</span> <span
  m='32480'>So</span> <span m='32670'>the</span> <span
  m='32990'>technique</span> <span m='33520'>here</span> <span
  m='33780'>is</span> <span m='34200'>purely</span> <span
  m='34550'>algebraic.</span> <span m='35800'>And</span> <span
  m='36040'>then</span> <span m='36540'>you</span> <span m='36630'>just</span>
  <span m='36800'>apply</span> <span m='37130'>integral</span> <span
  m='37570'>rules</span> <span m='37920'>that</span> <span
  m='38020'>we've</span> <span m='38170'>already</span> <span
  m='38510'>learned.</span> </p><p><span m='39560'>So</span> <span
  m='40860'>I</span> <span m='41080'>have</span> <span m='41290'>here</span>
  <span m='41480'>four</span> <span m='43190'>rational</span> <span
  m='43800'>functions</span> <span m='44310'>for</span> <span
  m='44530'>you.</span> <span m='44990'>And</span> <span m='45150'>what</span>
  <span m='45260'>I'd</span> <span m='45360'>like</span> <span
  m='45540'>you</span> <span m='45620'>to</span> <span m='45710'>do</span> <span
  m='45800'>in</span> <span m='45890'>each</span> <span m='46160'>case,</span>
  <span m='46600'>is</span> <span m='46790'>try</span> <span m='46950'>to</span>
  <span m='47030'>decompose</span> <span m='47670'>it</span> <span
  m='47890'>into</span> <span m='48300'>the</span> <span
  m='48830'>general</span> <span m='49230'>form</span> <span
  m='49670'>that</span> <span m='49900'>Professor</span> <span
  m='50310'>Jerison</span> <span m='50740'>taught you.</span> <span
  m='51800'>So</span> <span m='51960'>don't,</span> <span m='52300'>I'm</span>
  <span m='52620'>not</span> <span m='52780'>asking</span> <span
  m='53070'>you</span> <span m='53140'>to--</span> <span m='53720'>if</span>
  <span m='54020'>you'd</span> <span m='54150'>like,</span> <span
  m='54370'>you're</span> <span m='54680'>certainly</span> <span
  m='55040'>welcome</span> <span m='55410'>to</span> <span m='55510'>go</span>
  <span m='55660'>ahead</span> <span m='55900'>and</span> <span
  m='56150'>compute</span> <span m='56610'>the</span> <span
  m='57080'>antiderivatives</span> <span m='58060'>after</span> <span
  m='58380'>you</span> <span m='58460'>do</span> <span m='58600'>that,</span>
  <span m='58960'>but</span> <span m='59210'>I'm</span> <span
  m='59330'>not</span> <span m='59510'>going to</span> <span m='60890'>do</span>
  <span m='61020'>it</span> <span m='61220'>for</span> <span
  m='61440'>you,</span> <span m='61610'>or</span> <span m='62340'>I'm</span>
  <span m='62680'>not</span> <span m='63150'>going to</span> <span
  m='63320'>ask</span> <span m='63600'>you</span> <span m='63680'>to</span>
  <span m='63780'>do</span> <span m='63890'>it.</span> </p><p><span
  m='64450'>So</span> <span m='64590'>what</span> <span m='64720'>I'd</span>
  <span m='64840'>like</span> <span m='65020'>you</span> <span
  m='65120'>to</span> <span m='65220'>do,</span> <span m='65340'>though,</span>
  <span m='65530'>is</span> <span m='66400'>for</span> <span
  m='66550'>each</span> <span m='66750'>of</span> <span m='66840'>these</span>
  <span m='67040'>four</span> <span m='67620'>expressions,</span> <span
  m='68560'>to</span> <span m='69470'>break</span> <span m='69750'>it</span>
  <span m='69830'>out</span> <span m='70090'>into</span> <span
  m='70760'>the</span> <span m='70880'>form</span> <span m='71320'>of</span>
  <span m='71520'>the</span> <span m='72080'>partial</span> <span
  m='72390'>fraction</span> <span m='72730'>decomposition.</span> <span
  m='73690'>So</span> <span m='73880'>why</span> <span m='74010'>don't</span>
  <span m='74080'>you</span> <span m='74150'>take</span> <span
  m='74330'>a</span> <span m='74380'>few</span> <span m='74540'>minutes</span>
  <span m='74850'>to do</span> <span m='75010'>that,</span> <span
  m='75490'>come</span> <span m='75690'>back,</span> <span m='75950'>and</span>
  <span m='76080'>you</span> <span m='76150'>can</span> <span
  m='76270'>check</span> <span m='76470'>your</span> <span m='76590'>work</span>
  <span m='76740'>against</span> <span m='77080'>mine.</span> </p><p><span
  m='86840'>All</span> <span m='86970'>right.</span> <span
  m='87380'>Welcome</span> <span m='87720'>back.</span> <span
  m='87970'>Hopefully</span> <span m='88310'>you</span> <span
  m='88380'>had</span> <span m='88540'>some</span> <span m='88650'>fun</span>
  <span m='88920'>working</span> <span m='89220'>on</span> <span
  m='89370'>these.</span> <span m='90220'>They're</span> <span
  m='90630'>a</span> <span m='90690'>little</span> <span m='90880'>bit</span>
  <span m='91060'>tricky,</span> <span m='91530'>I</span> <span
  m='91620'>think,</span> <span m='91880'>or</span> <span m='92010'>I've</span>
  <span m='92310'>picked</span> <span m='92620'>them</span> <span
  m='92760'>to</span> <span m='92860'>be</span> <span m='92940'>a</span> <span
  m='93010'>little</span> <span m='93200'>bit</span> <span
  m='93330'>tricky.</span> <span m='93920'>So</span> <span
  m='94130'>let's</span> <span m='94700'>go</span> <span
  m='94870'>through</span> <span m='95080'>them</span> <span
  m='95220'>one</span> <span m='95410'>by</span> <span m='95540'>one.</span>
  <span m='95720'>I</span> <span m='95780'>guess</span> <span
  m='95950'>I'll</span> <span m='96270'>start</span> <span m='96570'>with</span>
  <span m='96690'>the</span> <span m='96770'>first</span> <span
  m='97100'>one.</span> </p><p><span m='100710'>So</span> <span m='100980'>with
  the</span> <span m='101090'>first</span> <span m='101450'>one,</span> <span
  m='103450'>I</span> <span m='103620'>have</span> <span m='105270'>x</span>
  <span m='105460'>squared</span> <span m='106830'>minus</span> <span
  m='107240'>4x</span> <span m='107970'>plus</span> <span m='108390'>4</span>
  <span m='109800'>over</span> <span m='111590'>x</span> <span
  m='111830'>squared</span> <span m='112870'>minus</span> <span
  m='113350'>8x.</span> <span m='113930'>Now,</span> <span m='114100'>the</span>
  <span m='114340'>first</span> <span m='114800'>thing</span> <span
  m='115020'>to</span> <span m='115140'>do</span> <span m='115850'>when</span>
  <span m='116080'>you</span> <span m='116170'>start</span> <span
  m='116540'>the</span> <span m='116610'>partial</span> <span
  m='116970'>fraction</span> <span m='117360'>method,</span> <span
  m='117880'>is</span> <span m='118090'>that</span> <span m='118180'>you</span>
  <span m='118250'>have</span> <span m='118420'>to</span> <span
  m='118510'>check</span> <span m='119200'>that</span> <span
  m='119290'>the</span> <span m='119440'>degree</span> <span
  m='120410'>of</span> <span m='120660'>the</span> <span
  m='121260'>numerator</span> <span m='122100'>is</span> <span
  m='122360'>smaller</span> <span m='123310'>than</span> <span
  m='123470'>the</span> <span m='123720'>degree</span> <span
  m='124200'>of</span> <span m='124310'>the</span> <span
  m='124410'>denominator.</span> <span m='125190'>Now</span> <span
  m='125360'>in</span> <span m='125450'>this</span> <span
  m='125640'>case,</span> <span m='126070'>that's</span> <span
  m='126440'>not</span> <span m='126790'>true.</span> <span
  m='128520'>The</span> <span m='128620'>degree</span> <span
  m='129010'>on</span> <span m='129170'>top</span> <span m='129490'>is</span>
  <span m='129610'>2,</span> <span m='130150'>and</span> <span
  m='130290'>the</span> <span m='130370'>degree</span> <span
  m='130620'>on</span> <span m='130780'>bottom</span> <span m='131100'>is</span>
  <span m='131240'>2.</span> <span m='131720'>So</span> <span
  m='131890'>we</span> <span m='131980'>need</span> <span m='132150'>to</span>
  <span m='132230'>do</span> <span m='132370'>long</span> <span
  m='132660'>division.</span> <span m='133020'>Or</span> <span
  m='133710'>you</span> <span m='133940'>know,</span> <span m='134110'>we</span>
  <span m='134210'>need</span> <span m='134360'>to</span> <span
  m='134440'>do</span> <span m='134530'>something--</span> <span
  m='135190'>well,</span> <span m='135470'>long</span> <span
  m='135720'>division</span> <span m='136000'>is</span> <span
  m='136110'>the</span> <span m='136220'>usual</span> <span
  m='136485'>and</span> <span m='136750'>always--</span> <span
  m='137480'>usual</span> <span m='138640'>way,</span> <span
  m='138860'>and</span> <span m='139000'>always</span> <span
  m='139320'>works--</span> <span m='139770'>in</span> <span
  m='139960'>order</span> <span m='140190'>to</span> <span
  m='140320'>reduce</span> <span m='140890'>the</span> <span
  m='141310'>degree</span> <span m='141700'>of</span> <span
  m='141810'>the</span> <span m='141920'>top</span> <span m='142400'>here</span>
  <span m='142940'>so</span> <span m='143120'>that</span> <span
  m='143620'>it's</span> <span m='143810'>smaller</span> <span
  m='144180'>than</span> <span m='144340'>the</span> <span
  m='144430'>degree</span> <span m='144740'>at</span> <span
  m='144850'>the</span> <span m='144940'>bottom.</span> </p><p><span
  m='145460'>Now,</span> <span m='145790'>I've</span> <span
  m='146410'>done</span> <span m='146640'>this</span> <span
  m='146790'>ahead</span> <span m='147010'>of</span> <span
  m='147110'>time,</span> <span m='147910'>and</span> <span
  m='148090'>it's</span> <span m='148690'>not</span> <span m='149070'>too</span>
  <span m='149220'>hard</span> <span m='149910'>to</span> <span
  m='150030'>check</span> <span m='150580'>that</span> <span
  m='150850'>this</span> <span m='151010'>is</span> <span
  m='151120'>equal</span> <span m='151420'>to</span> <span m='152010'>1</span>
  <span m='152520'>plus</span> <span m='154450'>4x</span> <span
  m='155560'>plus</span> <span m='155940'>4</span> <span m='157170'>over</span>
  <span m='158786'>x</span> <span m='159190'>squared</span> <span
  m='160390'>minus</span> <span m='160660'>8x.</span> <span m='161290'>It's
  a</span> <span m='161380'>relatively</span> <span m='161920'>easy</span> <span
  m='162250'>long</span> <span m='162490'>division</span> <span
  m='163230'>to</span> <span m='163360'>do</span> <span m='163570'>in</span>
  <span m='163680'>any</span> <span m='163880'>case.</span> </p><p><span
  m='165850'>So</span> <span m='166310'>OK.</span> <span m='166610'>So</span>
  <span m='167050'>what</span> <span m='167220'>we</span> <span
  m='167330'>get</span> <span m='167620'>after</span> <span m='167950'>we</span>
  <span m='168060'>do</span> <span m='168200'>that</span> <span
  m='168400'>process</span> <span m='168980'>is</span> <span
  m='169180'>we</span> <span m='169260'>get</span> <span
  m='169390'>something</span> <span m='169800'>in</span> <span
  m='169880'>front</span> <span m='170520'>that's</span> <span
  m='170700'>always</span> <span m='171000'>a</span> <span
  m='171070'>polynomial.</span> <span m='172180'>And</span> <span
  m='172330'>that's</span> <span m='172500'>good,</span> <span
  m='173070'>because</span> <span m='173320'>remember,</span> <span
  m='173630'>our</span> <span m='173750'>goal</span> <span m='174140'>is</span>
  <span m='174280'>to, you know,</span> <span m='175340'>manipulate</span> <span
  m='175950'>this</span> <span m='176110'>into</span> <span m='176300'>a</span>
  <span m='176350'>form</span> <span m='176620'>where</span> <span
  m='176760'>we</span> <span m='176870'>can</span> <span m='176990'>integrate
  it,</span> <span m='177650'>and</span> <span m='178080'>polynomials</span>
  <span m='178650'>are</span> <span m='178730'>easy</span> <span
  m='179000'>to</span> <span m='179100'>integrate.</span> <span
  m='179790'>So</span> <span m='180320'>then</span> <span m='180530'>we</span>
  <span m='180640'>usually</span> <span m='180940'>just</span> <span
  m='181080'>forget</span> <span m='181420'>about</span> <span
  m='181690'>this</span> <span m='182270'>for</span> <span m='182410'>the</span>
  <span m='182520'>time</span> <span m='182810'>being.</span> <span
  m='183230'>And</span> <span m='183860'>what</span> <span m='184010'>we</span>
  <span m='184120'>want to</span> <span m='184340'>do</span> <span
  m='184770'>is</span> <span m='185110'>partial</span> <span
  m='185560'>fraction</span> <span m='185930'>decompose</span> <span
  m='186450'>the</span> <span m='186550'>second</span> <span
  m='186870'>part.</span> </p><p><span m='187850'>So</span> <span
  m='188500'>to</span> <span m='188630'>do</span> <span m='188760'>that,</span>
  <span m='189040'>the</span> <span m='189140'>first</span> <span
  m='189430'>thing</span> <span m='189580'>you</span> <span
  m='189660'>need</span> <span m='189840'>to</span> <span m='189940'>do,</span>
  <span m='190250'>once</span> <span m='190480'>you've</span> <span
  m='191040'>got</span> <span m='191200'>a</span> <span
  m='191260'>smaller</span> <span m='191710'>degree</span> <span
  m='192020'>on</span> <span m='192200'>top</span> <span m='192860'>than</span>
  <span m='193020'>downstairs,</span> <span m='193880'>is</span> <span
  m='194130'>that</span> <span m='194220'>you</span> <span
  m='194360'>factor</span> <span m='195200'>the</span> <span
  m='195780'>denominator.</span> <span m='196740'>So</span> <span
  m='197050'>in</span> <span m='197130'>this</span> <span
  m='197320'>case,</span> <span m='198400'>I'm</span> <span m='198540'>going
  to</span> <span m='198720'>keep</span> <span m='198960'>the</span> <span
  m='199050'>1</span> <span m='199410'>plus,</span> <span m='200310'>just</span>
  <span m='200500'>so</span> <span m='200610'>I</span> <span
  m='200690'>can</span> <span m='200850'>keep</span> <span
  m='201080'>writing</span> <span m='201350'>equals</span> <span
  m='201780'>signs</span> <span m='202260'>and</span> <span m='202440'>be</span>
  <span m='202570'>honest</span> <span m='202960'>about</span> <span
  m='203200'>it.</span> <span m='204060'>But</span> <span
  m='205480'>really,</span> <span m='205740'>our</span> <span
  m='205840'>focus</span> <span m='206250'>now</span> <span m='206490'>is</span>
  <span m='206610'>just</span> <span m='206840'>entirely</span> <span
  m='207370'>on</span> <span m='207510'>this</span> <span
  m='208030'>second</span> <span m='208960'>summand.</span> <span
  m='209420'>So</span> <span m='209540'>this</span> <span m='209680'>is</span>
  <span m='209770'>equal to</span> <span m='210060'>1</span> <span
  m='210370'>plus</span> <span m='212000'>4x</span> <span m='212740'>plus</span>
  <span m='213020'>4</span> <span m='213330'>is</span> <span
  m='213400'>on</span> <span m='213580'>top.</span> </p><p><span
  m='214000'>And</span> <span m='214220'>OK,</span> <span m='214480'>so</span>
  <span m='214590'>we</span> <span m='214690'>need</span> <span
  m='214820'>to</span> <span m='214910'>factor</span> <span
  m='215780'>the</span> <span m='216250'>denominator,</span> <span
  m='216820'>if</span> <span m='216980'>possible.</span> <span
  m='217640'>And</span> <span m='217890'>in this</span> <span
  m='218300'>case,</span> <span m='218800'>that's</span> <span
  m='219410'>not</span> <span m='219630'>only</span> <span
  m='219780'>possible.</span> <span m='220220'>It's</span> <span
  m='220590'>pretty</span> <span m='220780'>straightforward.</span> <span
  m='221330'>We</span> <span m='221490'>can</span> <span
  m='221730'>factor</span> <span m='222080'>out</span> <span
  m='222190'>an</span> <span m='222535'>x</span> <span m='222880'>from</span>
  <span m='223020'>both</span> <span m='223250'>terms,</span> <span
  m='223940'>and</span> <span m='224080'>we</span> <span m='224180'>see</span>
  <span m='224340'>that</span> <span m='224680'>the</span> <span
  m='225120'>denominator</span> <span m='226330'>is</span> <span
  m='226660'>x</span> <span m='228200'>times</span> <span m='228680'>x--
  whoops--</span> <span m='230650'>minus</span> <span m='231200'>8.</span>
  </p><p><span m='234290'>OK.</span> <span m='235050'>Now, in</span> <span
  m='235270'>this</span> <span m='235510'>case,</span> <span
  m='236010'>this</span> <span m='236190'>is</span> <span m='236360'>the</span>
  <span m='236750'>simplest</span> <span m='237330'>situation</span> <span
  m='238320'>for</span> <span m='238440'>partial</span> <span
  m='238780'>fraction</span> <span m='239130'>decomposition.</span> <span
  m='239980'>We</span> <span m='240170'>have</span> <span m='240320'>the</span>
  <span m='240420'>denominator</span> <span m='241220'>is</span> <span
  m='241390'>a</span> <span m='241460'>product</span> <span m='241990'>of</span>
  <span m='242090'>distinct</span> <span m='242570'>linear</span> <span
  m='242910'>factors.</span> <span m='244180'>So</span> <span
  m='244270'>when</span> <span m='244410'>the</span> <span
  m='244480'>denominator</span> <span m='245080'>is</span> <span
  m='245160'>a</span> <span m='245220'>product</span> <span m='245610'>of</span>
  <span m='245700'>distinct</span> <span m='246120'>linear</span> <span
  m='246400'>factors,</span> <span m='247030'>what</span> <span
  m='247280'>we</span> <span m='247410'>get</span> <span m='247630'>this</span>
  <span m='247840'>is</span> <span m='248000'>equal</span> <span
  m='248290'>to,</span> <span m='249430'>what</span> <span m='249660'>the</span>
  <span m='249730'>partial</span> <span m='250020'>fraction</span> <span
  m='250740'>theorem</span> <span m='251100'>tells</span> <span
  m='251430'>us</span> <span m='251550'>we</span> <span m='251680'>can</span>
  <span m='251880'>write,</span> <span m='252195'>is that</span> <span
  m='252510'>this</span> <span m='252660'>is</span> <span
  m='253030'>equal</span> <span m='253300'>to</span> <span
  m='254830'>something,</span> <span m='256320'>some</span> <span
  m='256610'>constant,</span> <span m='258100'>over</span> <span
  m='258350'>the</span> <span m='258430'>first</span> <span
  m='258740'>factor</span> <span m='260150'>plus</span> <span
  m='260440'>some</span> <span m='260750'>constant</span> <span
  m='261240'>over</span> <span m='261460'>the</span> <span
  m='263340'>second</span> <span m='263670'>factor.</span> <span
  m='264490'>Now,</span> <span m='264630'>if</span> <span m='264750'>you</span>
  <span m='265090'>had, you know,</span> <span m='266030'>three</span> <span
  m='266250'>factors,</span> <span m='266780'>then</span> <span
  m='266910'>you'd</span> <span m='266980'>have</span> <span
  m='267690'>three</span> <span m='267880'>of</span> <span
  m='267980'>these</span> <span m='268160'>terms,</span> <span
  m='268460'>one</span> <span m='268640'>for</span> <span m='269120'>each</span>
  <span m='269330'>factor,</span> <span m='270050'>if</span> <span
  m='270220'>they</span> <span m='270300'>were</span> <span
  m='270410'>distinct</span> <span m='270850'>linear</span> <span
  m='271120'>factors.</span> </p><p><span m='272350'>So</span> <span
  m='273440'>great.</span> <span m='273960'>OK.</span> <span
  m='274620'>Now</span> <span m='274930'>we</span> <span m='275050'>can</span>
  <span m='275220'>apply</span> <span m='276080'>the</span> <span
  m='277310'>cover</span> <span m='277620'>up</span> <span
  m='277780'>method</span> <span m='278420'>that</span> <span
  m='278560'>Professor</span> <span m='279000'>Jerison</span> <span
  m='279350'>taught us.</span> <span m='279560'>So</span> <span
  m='279700'>again,</span> <span m='280050'>the</span> <span m='280210'>1</span>
  <span m='280550'>doesn't</span> <span m='280810'>really</span> <span
  m='281020'>matter</span> <span m='281280'>here.</span> <span
  m='281480'>You</span> <span m='281640'>can</span> <span m='281760'>just</span>
  <span m='281930'>ignore</span> <span m='282200'>it.</span> <span
  m='282880'>So</span> <span m='283150'>we</span> <span m='283250'>have</span>
  <span m='283660'>this</span> <span m='284290'>is</span> <span
  m='284590'>equal</span> <span m='285160'>to</span> <span
  m='285280'>this</span> <span m='285390'>sum,</span> <span
  m='285610'>and</span> <span m='285710'>we</span> <span m='285790'>want
  to</span> <span m='286020'>find</span> <span m='287030'>the</span> <span
  m='287140'>values</span> <span m='287600'>of</span> <span m='287700'>A</span>
  <span m='287850'>and</span> <span m='288010'>B</span> <span
  m='288150'>that</span> <span m='288280'>make</span> <span
  m='288480'>this</span> <span m='288610'>true.</span> <span
  m='289770'>And</span> <span m='289900'>then</span> <span
  m='290000'>once</span> <span m='290240'>we</span> <span m='290370'>have</span>
  <span m='290780'>values</span> <span m='291240'>of A and</span> <span
  m='291550'>B</span> <span m='291680'>that</span> <span m='291820'>make</span>
  <span m='292000'>this</span> <span m='292140'>true,</span> <span
  m='292720'>the</span> <span m='292820'>resulting</span> <span
  m='293230'>expression</span> <span m='293910'>will</span> <span
  m='294140'>be</span> <span m='294260'>all</span> <span m='294520'>set</span>
  <span m='294790'>to</span> <span m='294870'>integrate.</span> <span
  m='295310'>Right?</span> <span m='296000'>This</span> <span
  m='296380'>will</span> <span m='296560'>just</span> <span m='297110'>be</span>
  <span m='297240'>easy.</span> <span m='297550'>It's</span> <span
  m='297750'>just</span> <span m='297930'>a</span> <span
  m='298000'>polynomial,</span> <span m='298960'>in</span> <span
  m='299090'>fact,</span> <span m='299470'>just a</span> <span
  m='299540'>constant.</span> <span m='300360'>This</span> <span
  m='301050'>is</span> <span m='301340'>going</span> <span m='301490'>to</span>
  <span m='301560'>give</span> <span m='301670'>us</span> <span
  m='301750'>a</span> <span m='301820'>logarithm,</span> <span
  m='302460'>and</span> <span m='302680'>this</span> <span m='302790'>is</span>
  <span m='302900'>going</span> <span m='303020'>to</span> <span
  m='303080'>give</span> <span m='303190'>us</span> <span m='303280'>a</span>
  <span m='303350'>logarithm.</span> </p><p><span m='304580'>So</span> <span
  m='305530'>once</span> <span m='305820'>we</span> <span m='305960'>find</span>
  <span m='306390'>these</span> <span m='306580'>constants</span> <span
  m='307080'>A and</span> <span m='307340'>B,</span> <span
  m='307440'>we're</span> <span m='307590'>all</span> <span
  m='307740'>set</span> <span m='307970'>to</span> <span
  m='308060'>integrate.</span> <span m='309600'>So OK, so</span> <span
  m='309720'>how does</span> <span m='309950'>the</span> <span
  m='310040'>cover</span> <span m='310300'>up</span> <span
  m='310430'>method</span> <span m='310680'>work?</span> <span
  m='311240'>Well,</span> <span m='311650'>so</span> <span m='311760'>you</span>
  <span m='311910'>cover</span> <span m='312320'>up</span> <span
  m='314240'>one</span> <span m='314540'>of</span> <span m='314660'>the</span>
  <span m='314750'>factors.</span> <span m='315590'>In</span> <span
  m='315740'>this</span> <span m='315900'>case,</span> <span
  m='316220'>x.</span> <span m='317850'>And</span> <span m='318060'>you</span>
  <span m='318150'>cover</span> <span m='318550'>up,</span> <span
  m='318670'>on</span> <span m='318780'>the</span> <span m='318890'>other</span>
  <span m='319110'>side,</span> <span m='319390'>everything</span> <span
  m='319930'>that</span> <span m='320150'>doesn't have</span> <span m='320580'>x
  in the</span> <span m='320800'>denominator,</span> <span m='322710'>and</span>
  <span m='322880'>also</span> <span m='323650'>x.</span> <span
  m='324680'>And</span> <span m='324920'>then</span> <span m='325020'>you</span>
  <span m='325590'>go</span> <span m='325740'>back</span> <span
  m='325950'>here,</span> <span m='326180'>and</span> <span
  m='326350'>you</span> <span m='326450'>plug</span> <span m='326900'>in</span>
  <span m='327420'>the</span> <span m='327620'>appropriate</span> <span
  m='328150'>values,</span> <span m='328560'>you</span> <span
  m='328730'>know,</span> <span m='328840'>the</span> <span m='329040'>x</span>
  <span m='329580'>minus</span> <span m='330080'>whatever.</span> <span
  m='330420'>So</span> <span m='330540'>in</span> <span m='330600'>this</span>
  <span m='330730'>case,</span> <span m='330930'>that's</span> <span
  m='331550'>x</span> <span m='332190'>equals</span> <span m='332460'>0.</span>
  <span m='333170'>And</span> <span m='333370'>so</span> <span
  m='333610'>over</span> <span m='333860'>here,</span> <span
  m='334060'>you</span> <span m='334150'>get</span> <span m='334310'>4</span>
  <span m='335140'>over</span> <span m='335390'>minus</span> <span
  m='335770'>8.</span> <span m='336160'>So</span> <span m='336400'>that</span>
  <span m='336570'>gives</span> <span m='336790'>us</span> <span
  m='337020'>A</span> <span m='338480'>is equal</span> <span
  m='338710'>to</span> <span m='339080'>4</span> <span m='340730'>divided</span>
  <span m='341080'>by</span> <span m='341210'>negative</span> <span
  m='342760'>8,</span> <span m='343890'>which</span> <span m='344370'>is</span>
  <span m='345900'>minus</span> <span m='346000'>a</span> <span
  m='346140'>half.</span> </p><p><span m='346890'>And</span> <span
  m='347100'>now</span> <span m='347170'>we</span> <span m='347300'>can</span>
  <span m='347430'>do</span> <span m='347540'>the</span> <span
  m='347640'>same</span> <span m='347910'>thing</span> <span
  m='348110'>with</span> <span m='348260'>the x</span> <span
  m='348590'>minus</span> <span m='348900'>8</span> <span
  m='349200'>part.</span> <span m='350300'>So</span> <span m='350460'>we</span>
  <span m='350570'>cover</span> <span m='350830'>up</span> <span m='351210'>x
  minus</span> <span m='351520'>8,</span> <span m='352550'>we</span> <span
  m='352750'>cover</span> <span m='353020'>up</span> <span
  m='353330'>everything</span> <span m='353890'>that</span> <span
  m='354020'>doesn't</span> <span m='354310'>have</span> <span
  m='354880'>an</span> <span m='355030'>x minus</span> <span m='355430'>8</span>
  <span m='355660'>in</span> <span m='355790'>it.</span> <span
  m='356220'>So</span> <span m='356380'>we've</span> <span
  m='356500'>got,</span> <span m='356950'>on</span> <span m='357120'>the</span>
  <span m='357200'>right-hand</span> <span m='357580'>side,</span> <span
  m='357750'>we</span> <span m='357840'>get</span> <span m='358070'>B,</span>
  <span m='358390'>and</span> <span m='358710'>on</span> <span
  m='358820'>the</span> <span m='358900'>left</span> <span
  m='359170'>hand</span> <span m='359320'>side,</span> <span
  m='359500'>we</span> <span m='359560'>have</span> <span m='359650'>to</span>
  <span m='359740'>plug</span> <span m='360050'>in</span> <span
  m='360180'>8</span> <span m='360470'>here.</span> <span m='361080'>So</span>
  <span m='361270'>we</span> <span m='361380'>plug</span> <span
  m='361900'>4</span> <span m='362460'>times</span> <span m='362830'>8</span>
  <span m='363150'>plus</span> <span m='363460'>4,</span> <span
  m='364770'>which</span> <span m='365040'>is 32 plus--</span> <span
  m='365450'>it's</span> <span m='365860'>36,</span> <span m='367650'>and</span>
  <span m='368150'>divided</span> <span m='368520'>by</span> <span
  m='368720'>eight,</span> <span m='369370'>so</span> <span
  m='369520'>that's</span> <span m='369780'>36</span> <span
  m='370240'>divided</span> <span m='370530'>by</span> <span m='370700'>8</span>
  <span m='370870'>is</span> <span m='371040'>9</span> <span
  m='371750'>divided</span> <span m='372100'>by</span> <span
  m='372260'>2.</span> </p><p><span m='380820'>So</span> <span
  m='381010'>once</span> <span m='381230'>you've</span> <span
  m='381350'>got</span> <span m='381570'>these</span> <span
  m='381750'>values</span> <span m='382110'>of</span> <span m='382210'>A</span>
  <span m='382360'>and</span> <span m='382540'>B--</span> <span
  m='382840'>OK.</span> <span m='383060'>So</span> <span m='384020'>our</span>
  <span m='384180'>original</span> <span m='384660'>expression,</span> <span
  m='385410'>now</span> <span m='385540'>we</span> <span m='385890'>substitute
  in</span> <span m='386460'>these</span> <span m='386640'>values of A</span>
  <span m='387050'>and</span> <span m='387330'>B,</span> <span
  m='387800'>then</span> <span m='388020'>we</span> <span m='388140'>know</span>
  <span m='388340'>that</span> <span m='388520'>this</span> <span
  m='388660'>is</span> <span m='388750'>is a</span> <span m='388880'>true</span>
  <span m='389520'>equality,</span> <span m='390180'>and</span> <span
  m='390480'>then</span> <span m='391010'>the</span> <span
  m='391190'>integration</span> <span m='391990'>of</span> <span
  m='392750'>this</span> <span m='392950'>expression</span> <span
  m='393670'>is</span> <span m='393890'>just</span> <span
  m='394140'>reduced</span> <span m='394700'>completely</span> <span
  m='395440'>to the</span> <span m='395630'>integration</span> <span
  m='396150'>of</span> <span m='396260'>this</span> <span
  m='396760'>easy-to-integrate</span> <span m='397520'>expression.</span> <span
  m='398430'>OK?</span> <span m='398930'>And</span> <span m='399120'>so</span>
  <span m='399210'>this</span> <span m='399430'>is</span> <span
  m='399570'>the</span> <span m='399680'>partial</span> <span
  m='400010'>fraction</span> <span m='400370'>decomposition</span> <span
  m='401440'>here,</span> <span m='402020'>with, you know</span> <span
  m='403090'>A equals</span> <span m='403540'>minus</span> <span
  m='403880'>a</span> <span m='403910'>half,</span> <span m='404520'>and</span>
  <span m='404760'>B</span> <span m='404890'>equals</span> <span
  m='405190'>nine</span> <span m='405520'>halves.</span> </p><p><span
  m='406230'>So</span> <span m='406420'>that's</span> <span
  m='406720'>part</span> <span m='407170'>(a).</span> <span
  m='408200'>Let's</span> <span m='408410'>go</span> <span m='408940'>on</span>
  <span m='409210'>to</span> <span m='409320'>part</span> <span
  m='409580'>(b).</span> <span m='412060'>I</span> <span m='412560'>have</span>
  <span m='412680'>to</span> <span m='412800'>remind</span> <span
  m='413180'>myself</span> <span m='413570'>what</span> <span
  m='413740'>part</span> <span m='414000'>(b)</span> <span m='414210'>is.</span>
  <span m='414920'>OK.</span> <span m='415220'>So</span> <span
  m='415340'>part</span> <span m='415630'>(b)</span> <span m='415780'>is</span>
  <span m='415980'>x</span> <span m='416230'>squared</span> <span
  m='416920'>divided</span> <span m='417300'>by x</span> <span
  m='417720'>plus</span> <span m='417980'>2</span> <span m='418180'>to</span>
  <span m='418280'>the</span> <span m='418380'>fourth.</span> </p><p><span
  m='427670'>So</span> <span m='427850'>in</span> <span m='427940'>this</span>
  <span m='428150'>case,</span> <span m='428780'>in</span> <span
  m='428930'>the</span> <span m='429020'>denominator,</span> <span
  m='429660'>we</span> <span m='429810'>still</span> <span
  m='430070'>have</span> <span m='430290'>only</span> <span
  m='430580'>linear</span> <span m='430920'>factors,</span> <span
  m='432450'>but</span> <span m='432640'>we</span> <span m='432730'>have</span>
  <span m='432890'>repeated</span> <span m='433340'>factors.</span> <span
  m='434280'>And I mean,</span> <span m='434630'>this</span> <span
  m='435070'>is</span> <span m='435180'>actually</span> <span
  m='435520'>a</span> <span m='435580'>particularly</span> <span
  m='436190'>simple</span> <span m='436460'>example,</span> <span
  m='437080'>where</span> <span m='437230'>we</span> <span
  m='437330'>have</span> <span m='437510'>only</span> <span
  m='437820'>one</span> <span m='438100'>factor,</span> <span
  m='438430'>but</span> <span m='438560'>it's</span> <span
  m='438680'>repeated</span> <span m='439080'>four</span> <span
  m='439330'>times.</span> <span m='440210'>Right?</span> <span
  m='440460'>Fourth</span> <span m='440640'>power.</span> </p><p><span
  m='441430'>So</span> <span m='441580'>when</span> <span m='441680'>you</span>
  <span m='441740'>have</span> <span m='441890'>that</span> <span
  m='442150'>situation,</span> <span m='443070'>the</span> <span
  m='443170'>partial</span> <span m='443470'>fraction</span> <span
  m='443790'>decomposition</span> <span m='444360'>looks</span> <span
  m='444600'>a</span> <span m='444660'>little</span> <span m='444890'>bit</span>
  <span m='445040'>different.</span> <span m='445620'>And</span> <span
  m='445800'>so</span> <span m='445890'>what</span> <span m='446010'>you</span>
  <span m='446130'>get</span> <span m='446390'>is</span> <span
  m='446650'>that</span> <span m='446780'>you</span> <span
  m='446870'>have,</span> <span m='447140'>for</span> <span
  m='447590'>every</span> <span m='448490'>repeated</span> <span
  m='449150'>power,</span> <span m='450130'>so</span> <span
  m='450250'>for</span> <span m='450400'>each--</span> <span
  m='451250'>this</span> <span m='451660'>one</span> <span
  m='451830'>appears</span> <span m='452250'>four</span> <span
  m='452480'>times,</span> <span m='453070'>so</span> <span
  m='453190'>you</span> <span m='453280'>get</span> <span m='453440'>four</span>
  <span m='454380'>summands</span> <span m='455060'>on</span> <span
  m='455200'>the</span> <span m='455270'>right-hand</span> <span
  m='455670'>side,</span> <span m='456130'>with</span> <span
  m='456430'>increasing</span> <span m='457020'>powers</span> <span
  m='457490'>of</span> <span m='457890'>this</span> <span
  m='458700'>linear</span> <span m='458850'>factor.</span> <span
  m='459180'>So</span> <span m='459390'>with</span> <span
  m='459630'>increasing</span> <span m='460070'>powers</span> <span
  m='460390'>of x</span> <span m='460690'>minus</span> <span
  m='460990'>1.</span> <span m='461420'>So</span> <span m='461850'>this</span>
  <span m='462090'>is</span> <span m='462210'>going to</span> <span
  m='462370'>be</span> <span m='463020'>A--</span> <span m='464520'>or</span>
  <span m='464720'>sorry,</span> <span m='465055'>x</span> <span
  m='465390'>plus</span> <span m='465740'>1.</span> <span m='466920'>A</span>
  <span m='467530'>over</span> <span m='467770'>x</span> <span
  m='468020'>plus</span> <span m='468310'>1</span> <span m='469630'>plus</span>
  <span m='469850'>B</span> <span m='470680'>over</span> <span
  m='471990'>x</span> <span m='472420'>plus</span> <span m='472680'>1</span>
  <span m='473960'>squared</span> <span m='475650'>plus</span> <span
  m='475870'>C</span> <span m='477590'>over x</span> <span
  m='478190'>plus</span> <span m='478390'>1</span> <span m='479440'>cubed</span>
  <span m='480720'>plus</span> <span m='481090'>D</span> <span m='482690'>over
  x</span> <span m='483060'>plus</span> <span m='483510'>1</span> <span
  m='484890'>to</span> <span m='485010'>the</span> <span
  m='485100'>fourth.</span> </p><p><span m='485560'>Now</span> <span
  m='485690'>remember,</span> <span m='486220'>even</span> <span
  m='486570'>though</span> <span m='486660'>the</span> <span
  m='486800'>degree</span> <span m='487250'>here</span> <span
  m='488330'>goes</span> <span m='488610'>up</span> <span m='489180'>in</span>
  <span m='489370'>these</span> <span m='490070'>later</span> <span
  m='490700'>summands,</span> <span m='491250'>what</span> <span
  m='491560'>stays</span> <span m='491880'>on</span> <span m='492050'>top</span>
  <span m='492490'>is</span> <span m='493050'>the</span> <span
  m='493160'>same.</span> <span m='493690'>It</span> <span
  m='494090'>just</span> <span m='494240'>stays</span> <span m='494500'>a</span>
  <span m='494570'>constant.</span> <span m='495460'>If</span> <span
  m='495600'>this</span> <span m='495720'>were</span> <span m='495880'>a
  quadratic</span> <span m='496300'>factor,</span> <span m='496950'>it</span>
  <span m='497020'>would</span> <span m='497130'>stay</span> <span
  m='497440'>linear.</span> <span m='498500'>The</span> <span
  m='498710'>top</span> <span m='499120'>doesn't</span> <span
  m='499400'>increase</span> <span m='499780'>in</span> <span
  m='499890'>degree</span> <span m='500670'>when</span> <span
  m='500990'>do</span> <span m='501140'>this.</span> </p><p><span
  m='502430'>And</span> <span m='503030'>a</span> <span m='503190'>good</span>
  <span m='504180'>simple</span> <span m='504520'>way</span> <span
  m='504640'>to</span> <span m='504740'>check</span> <span
  m='505100'>that</span> <span m='505220'>you've</span> <span
  m='505920'>got</span> <span m='506140'>the</span> <span
  m='506220'>right--</span> <span m='507750'>you</span> <span
  m='507850'>know,</span> <span m='508080'>before</span> <span
  m='508400'>you</span> <span m='508500'>solve</span> <span
  m='508800'>for</span> <span m='508930'>the</span> <span
  m='509010'>constants,</span> <span m='509670'>make</span> <span
  m='509900'>sure</span> <span m='510030'>you've</span> <span
  m='510120'>got</span> <span m='510290'>the</span> <span
  m='510380'>correct</span> <span m='510570'>abstract</span> <span
  m='511120'>decomposition--</span> <span m='512020'>is</span> <span
  m='512750'>to</span> <span m='512860'>count</span> <span m='513690'>the</span>
  <span m='513820'>number</span> <span m='514270'>of</span> <span
  m='514920'>these</span> <span m='516330'>constants</span> <span
  m='516890'>that</span> <span m='517010'>you're</span> <span
  m='517130'>looking</span> <span m='517450'>for.</span> <span
  m='518170'>It</span> <span m='518760'>should</span> <span
  m='518920'>always</span> <span m='519270'>match</span> <span
  m='519600'>the</span> <span m='520080'>degree</span> <span
  m='521380'>of</span> <span m='521690'>the</span> <span
  m='522220'>denominator</span> <span m='523000'>over</span> <span
  m='523250'>here.</span> <span m='524280'>So</span> <span m='524430'>in</span>
  <span m='524510'>this</span> <span m='524650'>case,</span> <span
  m='525140'>the</span> <span m='525250'>degree</span> <span
  m='525570'>of</span> <span m='525670'>the</span> <span
  m='525760'>denominator</span> <span m='526350'>is</span> <span
  m='526490'>4,</span> <span m='527650'>and</span> <span m='527830'>there are
  4</span> <span m='528280'>constants.</span> <span m='528575'>So</span> <span
  m='528870'>we've--</span> <span m='529530'>so</span> <span
  m='530920'>that's</span> <span m='531110'>a</span> <span
  m='531170'>good</span> <span m='531320'>way</span> <span m='531440'>to</span>
  <span m='531540'>check</span> <span m='531880'>that</span> <span
  m='532450'>you</span> <span m='532540'>set</span> <span m='532760'>the</span>
  <span m='532840'>problem</span> <span m='533230'>up right.</span> </p><p><span
  m='534410'>OK.</span> <span m='534940'>So</span> <span m='535140'>now,</span>
  <span m='536120'>what</span> <span m='536280'>do</span> <span
  m='536340'>we</span> <span m='536440'>do</span> <span m='536580'>in</span>
  <span m='536670'>this</span> <span m='536800'>case?</span> <span
  m='537020'>Well,</span> <span m='537460'>the</span> <span
  m='537580'>cover</span> <span m='537880'>up</span> <span
  m='538030'>method</span> <span m='538560'>works,</span> <span
  m='539150'>but</span> <span m='539290'>it</span> <span m='539480'>only</span>
  <span m='539830'>works</span> <span m='540080'>to</span> <span
  m='540180'>find</span> <span m='540500'>the</span> <span
  m='541030'>highest</span> <span m='541480'>degree</span> <span
  m='541790'>term.</span> <span m='542800'>Right?</span> <span
  m='543090'>So</span> <span m='543210'>we</span> <span m='543390'>cover</span>
  <span m='543750'>up</span> <span m='544912'>x</span> <span
  m='545360'>plus</span> <span m='545610'>1</span> <span m='545840'>to</span>
  <span m='545940'>the</span> <span m='546040'>fourth,</span> <span
  m='546830'>and</span> <span m='547100'>we</span> <span m='547200'>cover</span>
  <span m='547550'>up</span> <span m='548430'>everything</span> <span
  m='549630'>with</span> <span m='549810'>a</span> <span
  m='549870'>smaller</span> <span m='550280'>power</span> <span m='550700'>of
  x</span> <span m='550920'>plus</span> <span m='551180'>1,</span> <span
  m='551940'>and</span> <span m='552130'>then</span> <span m='552240'>we</span>
  <span m='552350'>plug</span> <span m='552700'>in</span> <span
  m='553980'>negative</span> <span m='554470'>1.</span> <span
  m='555030'>Right?</span> <span m='555380'>Because</span> <span
  m='555540'>we</span> <span m='555660'>need</span> <span m='555990'>x
  plus</span> <span m='556295'>1</span> <span m='556600'>to</span> <span
  m='556690'>be</span> <span m='557300'>0.</span> <span m='557730'>So</span>
  <span m='557910'>OK, so</span> <span m='558200'>over</span> <span
  m='558350'>here</span> <span m='558590'>we</span> <span m='558690'>get</span>
  <span m='558830'>negative</span> <span m='559160'>1</span> <span
  m='559360'>squared</span> <span m='560060'>is</span> <span
  m='560250'>1,</span> <span m='561210'>so</span> <span m='561370'>we</span>
  <span m='561500'>get,</span> <span m='561680'>right</span> <span
  m='561870'>away,</span> <span m='562550'>that</span> <span m='562680'>D</span>
  <span m='562960'>is</span> <span m='563080'>equal</span> <span
  m='563300'>to</span> <span m='563380'>1.</span> </p><p><span
  m='567760'>OK.</span> <span m='568010'>But</span> <span m='568160'>that</span>
  <span m='568320'>doesn't</span> <span m='568660'>give</span> <span
  m='568810'>us</span> <span m='569630'>A,</span> <span m='569860'>B,</span>
  <span m='570040'>or</span> <span m='570200'>C.</span> <span
  m='570460'>We</span> <span m='570570'>can't</span> <span m='570860'>get</span>
  <span m='571020'>A,</span> <span m='571190'>B,</span> <span
  m='571320'>or</span> <span m='571430'>C</span> <span m='571670'>by</span>
  <span m='571830'>the</span> <span m='571920'>cover</span> <span
  m='572170'>up</span> <span m='572300'>method.</span> </p><p><span
  m='574860'>Now, there are</span> <span m='575295'>a</span> <span
  m='575730'>couple</span> <span m='576020'>different</span> <span
  m='576290'>ways</span> <span m='576510'>you</span> <span m='576590'>can</span>
  <span m='576720'>proceed</span> <span m='577110'>at</span> <span
  m='577190'>this</span> <span m='577370'>point.</span> <span
  m='578730'>One</span> <span m='579230'>thing</span> <span
  m='579440'>you</span> <span m='579570'>can</span> <span m='579720'>do,</span>
  <span m='581020'>which</span> <span m='581250'>is</span> <span
  m='581430'>something</span> <span m='582430'>that</span> <span
  m='582590'>often</span> <span m='582910'>works,</span> <span
  m='583910'>is</span> <span m='584360'>you</span> <span m='584690'>could</span>
  <span m='586110'>plug</span> <span m='586510'>in</span> <span
  m='586830'>values.</span> <span m='587230'>Well,</span> <span
  m='587460'>so</span> <span m='587570'>this</span> <span m='587750'>will</span>
  <span m='587860'>always</span> <span m='588230'>work.</span> <span
  m='588660'>I</span> <span m='588930'>shouldn't</span> <span
  m='589190'>say</span> <span m='589340'>often</span> <span
  m='589660'>works.</span> <span m='590000'>You</span> <span
  m='590170'>can</span> <span m='590280'>start</span> <span
  m='590550'>plugging</span> <span m='590930'>in</span> <span
  m='591130'>other</span> <span m='591360'>values</span> <span
  m='591780'>for</span> <span m='591920'>x.</span> <span m='593200'>And</span>
  <span m='593470'>as</span> <span m='593560'>you</span> <span
  m='593640'>plug</span> <span m='593970'>in</span> <span
  m='594100'>other</span> <span m='594340'>values</span> <span
  m='594720'>for</span> <span m='594850'>x,</span> <span m='595540'>what</span>
  <span m='595750'>you'll</span> <span m='595870'>see</span> <span
  m='596060'>is</span> <span m='596180'>that</span> <span m='596310'>for</span>
  <span m='596400'>every</span> <span m='596660'>value</span> <span
  m='596915'>you</span> <span m='597170'>plug</span> <span m='597500'>in,</span>
  <span m='597860'>you'll</span> <span m='598050'>get</span> <span
  m='598170'>a</span> <span m='598210'>linear</span> <span
  m='598650'>equation</span> <span m='599560'>relating</span> <span
  m='601090'>your</span> <span m='601290'>variables--</span> <span
  m='601650'>A,</span> <span m='601890'>B,</span> <span m='602230'>C,</span>
  <span m='602580'>and</span> <span m='603270'>whatever,</span> <span
  m='603960'>in</span> <span m='604110'>this</span> <span
  m='604250'>case,</span> <span m='604460'>that's</span> <span
  m='604640'>all</span> <span m='604770'>we've</span> <span
  m='604910'>got</span> <span m='605060'>left,</span> <span m='605330'>A,</span>
  <span m='605410'>B,</span> <span m='605540'>and</span> <span
  m='605650'>C--</span> <span m='606370'>to</span> <span m='606510'>each</span>
  <span m='606710'>other.</span> <span m='607250'>And</span> <span
  m='607440'>so</span> <span m='607540'>if</span> <span m='607620'>you</span>
  <span m='607690'>plug</span> <span m='607950'>in</span> <span
  m='608130'>three</span> <span m='608500'>different</span> <span
  m='609070'>values</span> <span m='609540'>of x,</span> <span
  m='609920'>say,</span> <span m='610630'>you'll</span> <span
  m='610850'>get</span> <span m='610980'>three</span> <span
  m='611240'>different</span> <span m='611550'>linear</span> <span
  m='611860'>equations</span> <span m='612470'>with</span> <span
  m='612630'>three</span> <span m='612800'>different</span> <span
  m='613030'>variables,</span> <span m='613450'>and</span> <span
  m='613540'>then</span> <span m='613630'>you</span> <span m='613700'>can</span>
  <span m='613840'>solve them.</span> <span m='615230'>That's</span> <span
  m='615460'>one</span> <span m='615650'>thing</span> <span
  m='615810'>you</span> <span m='615920'>can</span> <span m='616050'>do.</span>
  </p><p><span m='617430'>Another</span> <span m='617870'>thing</span> <span
  m='618060'>you</span> <span m='618170'>could</span> <span m='618330'>do</span>
  <span m='619530'>is</span> <span m='619700'>you</span> <span
  m='619790'>can</span> <span m='619930'>multiply</span> <span
  m='620460'>through</span> <span m='621100'>by</span> <span m='621340'>x</span>
  <span m='621500'>plus</span> <span m='621780'>1</span> <span
  m='621950'>to</span> <span m='622050'>the</span> <span
  m='622150'>fourth.</span> <span m='623810'>So</span> <span m='624040'>if
  you</span> <span m='624180'>do</span> <span m='624340'>that,</span> <span
  m='624530'>you'll</span> <span m='624650'>have--</span> <span
  m='624780'>on</span> <span m='624860'>the</span> <span m='624950'>left,</span>
  <span m='625210'>you'll</span> <span m='625330'>just</span> <span
  m='625460'>have</span> <span m='625610'>x</span> <span
  m='625880'>squared,</span> <span m='627040'>and</span> <span
  m='627190'>on</span> <span m='627310'>the</span> <span m='627390'>right</span>
  <span m='627980'>you'll</span> <span m='628250'>have--</span> <span
  m='628490'>well,</span> <span m='628610'>you'll</span> <span
  m='628720'>have</span> <span m='629550'>A</span> <span m='629980'>times</span>
  <span m='630280'>x</span> <span m='630370'>plus</span> <span
  m='630680'>1</span> <span m='630850'>cubed</span> <span m='631900'>plus</span>
  <span m='632130'>B</span> <span m='632500'>times</span> <span
  m='632760'>x</span> <span m='632830'>plus</span> <span m='633090'>1</span>
  <span m='633220'>squared,</span> <span m='633940'>plus</span> <span
  m='634350'>C</span> <span m='634580'>times</span> <span m='634850'>x</span>
  <span m='634980'>plus</span> <span m='635200'>1,</span> <span
  m='635720'>plus</span> <span m='636030'>D.</span> <span m='636340'>And</span>
  <span m='636650'>we</span> <span m='636830'>already</span> <span
  m='637020'>know</span> <span m='637180'>that</span> <span m='637300'>x
  is</span> <span m='637600'>equal to</span> <span m='637900'>1.</span> <span
  m='639100'>OK?</span> </p><p><span m='639570'>And</span> <span
  m='639760'>so</span> <span m='639850'>then,</span> <span m='640820'>for</span>
  <span m='640920'>those</span> <span m='641190'>two</span> <span
  m='641300'>things</span> <span m='641770'>to</span> <span m='641880'>be</span>
  <span m='642000'>equal,</span> <span m='642320'>they're</span> <span
  m='642480'>equal</span> <span m='642790'>as</span> <span
  m='643020'>polynomials,</span> <span m='643780'>all</span> <span
  m='644000'>their</span> <span m='644150'>coefficients</span> <span
  m='644790'>have</span> <span m='644980'>to</span> <span m='645070'>be</span>
  <span m='645170'>equal.</span> <span m='646270'>So</span> <span
  m='646420'>you</span> <span m='646540'>can</span> <span m='646650'>just</span>
  <span m='646820'>look</span> <span m='647030'>at</span> <span
  m='647120'>the</span> <span m='647220'>coefficients</span> <span
  m='648340'>in</span> <span m='648490'>that</span> <span
  m='648660'>resulting</span> <span m='649120'>expression,</span> <span
  m='649920'>and</span> <span m='650290'>ask, you know,</span> <span
  m='652560'>which</span> <span m='653440'>coefficients--</span> <span
  m='655680'>sorry.</span> <span m='656500'>You</span> <span
  m='656640'>can</span> <span m='657080'>set</span> <span
  m='657350'>coefficients</span> <span m='657790'>on the</span> <span
  m='657980'>two</span> <span m='658180'>sides</span> <span
  m='658410'>equal.</span> <span m='658700'>The</span> <span
  m='658790'>two</span> <span m='659210'>polynomials</span> <span
  m='659540'>are</span> <span m='659620'>equal,</span> <span m='660130'>all
  of</span> <span m='660410'>their</span> <span m='660530'>corresponding</span>
  <span m='661120'>coefficients</span> <span m='661590'>are</span> <span
  m='661670'>equal.</span> <span m='662090'>So</span> <span
  m='662250'>you</span> <span m='662380'>could</span> <span m='662520'>look, you
  know,</span> <span m='663340'>at</span> <span m='663440'>this</span> <span
  m='663600'>side and</span> <span m='663860'>you'll</span> <span
  m='664000'>say,</span> <span m='664180'>oh,</span> <span m='664310'>OK.</span>
  <span m='664570'>So</span> <span m='664750'>the</span> <span
  m='665170'>coefficient</span> <span m='665670'>of</span> <span m='666090'>x
  cubed</span> <span m='667060'>has to</span> <span m='667270'>be</span> <span
  m='667390'>the</span> <span m='667490'>same</span> <span m='667740'>as</span>
  <span m='667830'>whatever</span> <span m='668090'>the</span> <span
  m='668160'>coefficient</span> <span m='668620'>of x cubed</span> <span
  m='669220'>over</span> <span m='669420'>here</span> <span
  m='669680'>is,</span> <span m='670660'>and the</span> <span
  m='670970'>coefficient</span> <span m='671580'>x</span> <span
  m='671800'>squared</span> <span m='672150'>has to</span> <span m='672230'>be
  the</span> <span m='672430'>same as</span> <span m='672720'>the</span> <span
  m='672790'>coefficient of</span> <span m='673230'>x</span> <span
  m='673410'>squared,</span> <span m='674000'>and</span> <span
  m='674160'>so</span> <span m='674540'>on.</span> <span m='674920'>So</span>
  <span m='675390'>that's</span> <span m='675620'>another</span> <span
  m='675900'>way</span> <span m='676520'>to</span> <span
  m='676630'>proceed.</span> </p><p><span m='684690'>Yeah,</span> <span
  m='685080'>all right.</span> <span m='685550'>Those</span> <span
  m='685790'>are</span> <span m='685880'>really</span> <span
  m='686090'>your</span> <span m='686460'>two</span> <span
  m='687370'>best</span> <span m='687680'>options.</span> <span
  m='689260'>I</span> <span m='689450'>like</span> <span m='690250'>to</span>
  <span m='690340'>multiply</span> <span m='690730'>through,</span> <span
  m='691260'>personally.</span> <span m='693110'>So</span> <span
  m='693630'>OK.</span> <span m='693890'>So</span> <span m='694380'>if</span>
  <span m='694460'>I</span> <span m='694530'>were</span> <span
  m='694640'>to</span> <span m='694730'>do</span> <span m='694870'>that,</span>
  <span m='695080'>in</span> <span m='695180'>this</span> <span
  m='695350'>case,</span> <span m='696090'>on</span> <span m='696240'>the</span>
  <span m='696310'>left-hand</span> <span m='696700'>side</span> <span
  m='696880'>I'd</span> <span m='696940'>get</span> <span m='697130'>x</span>
  <span m='697400'>squared</span> <span m='698470'>equals</span> <span
  m='699190'>A</span> <span m='699750'>times</span> <span m='701070'>x</span>
  <span m='701460'>plus</span> <span m='701720'>1</span> <span
  m='702980'>cubed</span> <span m='704560'>plus</span> <span m='704840'>B</span>
  <span m='705170'>times</span> <span m='706460'>x</span> <span
  m='706590'>plus</span> <span m='706980'>1</span> <span
  m='707190'>squared</span> <span m='708730'>plus</span> <span
  m='709420'>C</span> <span m='710890'>times</span> <span m='711180'>x</span>
  <span m='711600'>plus</span> <span m='711810'>1</span> <span
  m='713140'>plus</span> <span m='713850'>D.</span> <span
  m='714470'>Except</span> <span m='714790'>we</span> <span
  m='714920'>already</span> <span m='715190'>know</span> <span
  m='715350'>that</span> <span m='715500'>D</span> <span m='715670'>is
  equal</span> <span m='715850'>to</span> <span m='716040'>1,</span> <span
  m='716360'>so I'm just</span> <span m='716860'>going to write</span> <span
  m='718090'>plus</span> <span m='718380'>1.</span> </p><p><span
  m='721700'>So</span> <span m='721950'>OK.</span> <span m='722230'>So</span>
  <span m='722550'>actually,</span> <span m='723160'>let</span> <span
  m='723370'>me</span> <span m='723670'>say</span> <span m='723810'>that</span>
  <span m='723940'>there</span> <span m='724280'>are</span> <span
  m='724530'>other</span> <span m='724750'>things</span> <span
  m='725020'>you</span> <span m='725110'>could</span> <span
  m='725250'>do.</span> <span m='725610'>Which</span> <span
  m='725860'>is,</span> <span m='725950'>you</span> <span
  m='726050'>could</span> <span m='726490'>rearrange</span> <span
  m='727100'>things</span> <span m='727460'>and</span> <span
  m='727870'>simplify</span> <span m='728890'>algebraically</span> <span
  m='729570'>before</span> <span m='729950'>plugging</span> <span
  m='730330'>in</span> <span m='730420'>values,</span> <span
  m='731070'>or</span> <span m='731270'>before</span> <span
  m='731700'>comparing</span> <span m='732160'>coefficients.</span> <span
  m='734430'>So</span> <span m='735080'>let</span> <span m='735270'>me</span>
  <span m='735350'>give</span> <span m='735490'>you</span> <span
  m='735820'>one</span> <span m='736110'>example</span> <span
  m='736660'>of</span> <span m='737950'>each</span> <span m='738210'>of</span>
  <span m='738410'>those</span> <span m='738690'>three</span> <span
  m='739010'>possibilities.</span> </p><p><span m='739800'>So</span> <span
  m='740090'>for</span> <span m='740260'>example,</span> <span
  m='741410'>one</span> <span m='741660'>thing</span> <span
  m='741780'>you</span> <span m='741890'>can</span> <span m='742010'>do,</span>
  <span m='742390'>is</span> <span m='742590'>you</span> <span
  m='742670'>can</span> <span m='742790'>look</span> <span m='742980'>at</span>
  <span m='743530'>the</span> <span m='743600'>highest</span> <span
  m='744220'>degree</span> <span m='744370'>coefficient.</span> <span
  m='745430'>So</span> <span m='745670'>as</span> <span
  m='745870'>Professor</span> <span m='746270'>Jerison</span> <span
  m='746580'>said,</span> <span m='746800'>the</span> <span
  m='746910'>easiest</span> <span m='747340'>coefficients</span> <span
  m='747770'>are</span> <span m='747830'>usually</span> <span
  m='748490'>the</span> <span m='748600'>high-order</span> <span
  m='749560'>terms</span> <span m='749960'>and</span> <span
  m='750310'>the</span> <span m='750370'>low-order</span> <span
  m='750830'>terms.</span> <span m='751110'>So in</span> <span
  m='751210'>this</span> <span m='751320'>case,</span> <span
  m='751480'>the</span> <span m='751560'>high-order</span> <span
  m='751970'>terms</span> <span m='752430'>would</span> <span
  m='752720'>be--</span> <span m='753110'>this</span> <span m='753310'>is</span>
  <span m='753440'>a</span> <span m='753740'>third</span> <span
  m='754030'>degree</span> <span m='754760'>polynomial</span> <span
  m='755000'>on</span> <span m='755350'>the</span> <span
  m='755430'>right-hand</span> <span m='755760'>side,</span> <span
  m='755950'>and</span> <span m='756040'>it's</span> <span m='756160'>a</span>
  <span m='756250'>second</span> <span m='756560'>degree</span> <span
  m='756720'>polynomial</span> <span m='757200'>on the left.</span> <span
  m='758180'>So</span> <span m='758320'>the</span> <span
  m='758860'>highest-order</span> <span m='759420'>term</span> <span
  m='759660'>here,</span> <span m='759830'>x cubed,</span> <span
  m='760590'>just</span> <span m='760800'>appears</span> <span
  m='761070'>in</span> <span m='761130'>this</span> <span m='761250'>one</span>
  <span m='761460'>place</span> <span m='762090'>as</span> <span
  m='762300'>coefficient</span> <span m='762750'>A.</span> <span
  m='763520'>Right?</span> <span m='763700'>This</span> <span
  m='763840'>is</span> <span m='763990'>A</span> <span m='764310'>x cubed</span>
  <span m='764960'>plus</span> <span m='766150'>something</span> <span
  m='766530'>times x</span> <span m='766940'>squared</span> <span
  m='767190'>plus</span> <span m='767670'>blah blah blah.</span> <span
  m='768630'>And</span> <span m='768820'>over</span> <span
  m='768960'>here,</span> <span m='769080'>we</span> <span
  m='769170'>have</span> <span m='769270'>no</span> <span m='769460'>x
  cubeds.</span> <span m='771640'>So</span> <span m='771770'>we</span> <span
  m='771880'>have</span> <span m='772120'>x cubeds</span> <span
  m='772690'>here,</span> <span m='772950'>but</span> <span m='773130'>no</span>
  <span m='773270'>x cubeds</span> <span m='773620'>here.</span> <span
  m='774140'>That</span> <span m='774320'>means</span> <span
  m='774510'>the</span> <span m='774610'>coefficient</span> <span
  m='774850'>of</span> <span m='775080'>x</span> <span m='775340'>cubed</span>
  <span m='775450'>here has</span> <span m='775690'>to</span> <span
  m='775780'>be</span> <span m='775870'>0,</span> <span m='776180'>so</span>
  <span m='776310'>A</span> <span m='776500'>has</span> <span
  m='776660'>to</span> <span m='776740'>be</span> <span m='776810'>0.</span>
  </p><p><span m='781160'>OK.</span> <span m='782050'>So</span> <span
  m='782230'>A</span> <span m='782430'>has</span> <span m='782650'>to</span>
  <span m='782740'>be equal</span> <span m='783050'>to</span> <span
  m='783130'>0,</span> <span m='783430'>and</span> <span m='783700'>that</span>
  <span m='783930'>simplifies</span> <span m='784820'>everything</span> <span
  m='785220'>a</span> <span m='785270'>little</span> <span
  m='785480'>bit.</span> <span m='785630'>So</span> <span m='785720'>now</span>
  <span m='785830'>we</span> <span m='785910'>get</span> <span
  m='786040'>x</span> <span m='786270'>squared</span> <span
  m='786600'>equals</span> <span m='787350'>B</span> <span
  m='788150'>times</span> <span m='789630'>x</span> <span m='789760'>plus</span>
  <span m='790090'>1</span> <span m='790360'>squared</span> <span
  m='791780'>plus</span> <span m='791960'>C</span> <span m='793370'>times</span>
  <span m='793640'>x</span> <span m='793750'>plus</span> <span
  m='794070'>1</span> <span m='795500'>plus</span> <span m='795980'>1.</span>
  <span m='798310'>Now</span> <span m='798690'>let</span> <span
  m='798860'>me</span> <span m='798940'>show</span> <span m='799120'>you</span>
  <span m='799780'>what</span> <span m='799940'>I</span> <span
  m='800010'>mean</span> <span m='800160'>about</span> <span
  m='800420'>algebraic</span> <span m='802240'>manipulation.</span> <span
  m='803630'>This</span> <span m='803830'>1,</span> <span m='804510'>if</span>
  <span m='804700'>you</span> <span m='804800'>wanted,</span> <span
  m='805160'>you</span> <span m='805290'>could</span> <span
  m='805690'>always</span> <span m='805880'>just</span> <span
  m='806060'>subtract it</span> <span m='806490'>over to</span> <span
  m='806650'>the</span> <span m='806770'>other</span> <span
  m='806930'>side.</span> <span m='807660'>Right?</span> <span
  m='808190'>And</span> <span m='808360'>so</span> <span m='808450'>then</span>
  <span m='808660'>you'll</span> <span m='808790'>have,</span> <span
  m='809140'>on</span> <span m='809280'>the</span> <span m='809360'>left</span>
  <span m='809560'>you'll</span> <span m='809660'>have</span> <span
  m='809850'>x</span> <span m='810060'>squared</span> <span
  m='810410'>minus</span> <span m='810750'>1.</span> <span m='811390'>And</span>
  <span m='811570'>x</span> <span m='811800'>squared</span> <span
  m='812080'>minus</span> <span m='812340'>1,</span> <span m='812510'>you</span>
  <span m='812600'>can</span> <span m='812740'>write</span> <span
  m='813440'>as</span> <span m='813720'>x</span> <span m='813980'>minus</span>
  <span m='814390'>1</span> <span m='815350'>times</span> <span
  m='815630'>x</span> <span m='815910'>plus</span> <span m='816280'>1</span>
  <span m='817330'>equals</span> <span m='819090'>B</span> <span
  m='819370'>times</span> <span m='820480'>x</span> <span m='820610'>plus</span>
  <span m='820850'>1</span> <span m='821120'>squared</span> <span
  m='822480'>plus</span> <span m='822600'>C</span> <span m='823010'>times</span>
  <span m='825180'>x</span> <span m='825420'>plus</span> <span
  m='825600'>1.</span> <span m='826770'>And</span> <span m='826950'>then</span>
  <span m='827040'>you</span> <span m='827110'>can</span> <span
  m='827230'>divide</span> <span m='827560'>out</span> <span
  m='827690'>by</span> <span m='827830'>an x</span> <span m='828110'>plus</span>
  <span m='828360'>1</span> <span m='828520'>everywhere.</span> <span
  m='828795'>It</span> <span m='829070'>appears</span> <span
  m='829460'>in</span> <span m='829530'>all</span> <span
  m='829690'>terms.</span> <span m='830530'>So</span> <span
  m='830710'>you</span> <span m='830820'>get</span> <span m='831300'>x</span>
  <span m='832260'>minus</span> <span m='832640'>1</span> <span
  m='833730'>equals</span> <span m='834270'>B</span> <span
  m='834600'>times</span> <span m='835875'>x</span> <span m='836300'>plus</span>
  <span m='836570'>1</span> <span m='838180'>plus</span> <span
  m='838520'>C.</span> </p><p><span m='839570'>And</span> <span
  m='839850'>now</span> <span m='839910'>what</span> <span
  m='840120'>this</span> <span m='840320'>does</span> <span
  m='840580'>for</span> <span m='840780'>you,</span> <span m='841130'>is</span>
  <span m='841500'>you</span> <span m='841660'>sort of</span> <span
  m='841860'>just</span> <span m='842080'>reduced</span> <span
  m='842460'>the</span> <span m='842550'>degree</span> <span
  m='842860'>everywhere.</span> <span m='843400'>And</span> <span
  m='843620'>actually,</span> <span m='843920'>you</span> <span
  m='844260'>could</span> <span m='844710'>substitute</span> <span
  m='845180'>x</span> <span m='845380'>equals</span> <span
  m='845670'>minus</span> <span m='846010'>1</span> <span
  m='846210'>again,</span> <span m='846910'>if</span> <span
  m='847080'>you</span> <span m='847170'>wanted</span> <span
  m='847510'>to,</span> <span m='847880'>for</span> <span
  m='848090'>example.</span> <span m='849960'>And here,</span> <span
  m='850210'>so</span> <span m='850330'>for</span> <span
  m='850480'>example,</span> <span m='850790'>if you</span> <span
  m='850900'>substitute</span> <span m='851380'>x</span> <span
  m='851610'>equals</span> <span m='852220'>minus</span> <span
  m='852590'>1,</span> <span m='853650'>that's</span> <span
  m='853920'>the</span> <span m='854030'>same</span> <span
  m='855460'>idea</span> <span m='855780'>as</span> <span m='856100'>what</span>
  <span m='856290'>you</span> <span m='856430'>do</span> <span
  m='856610'>in</span> <span m='856790'>the</span> <span m='856870'>cover</span>
  <span m='857130'>up</span> <span m='857270'>method.</span> <span
  m='858330'>This</span> <span m='858830'>B</span> <span m='859010'>term
  will</span> <span m='859650'>just</span> <span m='859880'>die</span> <span
  m='860090'>completely,</span> <span m='860780'>and</span> <span
  m='861000'>you'll</span> <span m='861100'>be</span> <span
  m='861180'>left</span> <span m='861370'>with</span> <span
  m='861500'>negative</span> <span m='861880'>2</span> <span
  m='862030'>on</span> <span m='862180'>the</span> <span m='862270'>left.</span>
  <span m='862860'>So</span> <span m='863030'>you</span> <span
  m='863130'>get</span> <span m='863330'>C--</span> <span m='864460'>I'm</span>
  <span m='864690'>going to</span> <span m='864880'>have</span> <span
  m='865010'>to</span> <span m='865090'>move</span> <span m='865290'>over</span>
  <span m='865420'>here,</span> <span m='865730'>sorry.</span> <span
  m='866780'>C is</span> <span m='867050'>equal to</span> <span
  m='867360'>negative</span> <span m='867800'>2,</span> <span
  m='868070'>then.</span> </p><p><span m='868540'>And</span> <span
  m='868840'>also,</span> <span m='869600'>you</span> <span
  m='869780'>can</span> <span m='869950'>do</span> <span m='870130'>the</span>
  <span m='871040'>one</span> <span m='871240'>thing</span> <span
  m='871380'>that I</span> <span m='871450'>haven't</span> <span
  m='871690'>done</span> <span m='871880'>so</span> <span m='872040'>far,</span>
  <span m='872490'>is</span> <span m='872690'>this</span> <span
  m='872840'>plugging</span> <span m='873280'>in</span> <span
  m='873490'>nice</span> <span m='873830'>choices</span> <span
  m='874280'>of</span> <span m='874400'>values.</span> <span
  m='875130'>So</span> <span m='875250'>another</span> <span
  m='875700'>nice</span> <span m='876020'>choice</span> <span
  m='876310'>of</span> <span m='876420'>value</span> <span m='876750'>for</span>
  <span m='876880'>x that</span> <span m='877200'>we</span> <span
  m='877300'>haven't</span> <span m='877570'>used</span> <span
  m='877980'>is</span> <span m='878180'>x</span> <span m='878400'>equals</span>
  <span m='878730'>0.</span> <span m='879370'>So</span> <span
  m='879550'>if</span> <span m='879620'>you</span> <span m='879700'>plug</span>
  <span m='879950'>in x</span> <span m='880270'>equals</span> <span
  m='880570'>0,</span> <span m='881090'>you'll</span> <span m='881300'>get
  minus</span> <span m='881450'>1</span> <span m='882230'>equals</span> <span
  m='883360'>B</span> <span m='883590'>plus</span> <span m='883940'>c.</span>
  <span m='884815'>So</span> <span m='885200'>minus</span> <span
  m='885460'>1</span> <span m='885720'>equals</span> <span m='886426'>B</span>
  <span m='887050'>plus</span> <span m='887320'>C.</span> <span
  m='888610'>And</span> <span m='888810'>since</span> <span m='888970'>we</span>
  <span m='889090'>just</span> <span m='889270'>found</span> <span
  m='889550'>C,</span> <span m='890310'>that</span> <span
  m='890590'>means</span> <span m='890810'>that</span> <span m='890960'>B</span>
  <span m='892220'>is equal</span> <span m='892680'>to</span> <span
  m='892760'>1.</span> </p><p><span m='894830'>All right.</span> <span
  m='895260'>So--</span> <span m='896990'>oh</span> <span m='897180'>boy,</span>
  <span m='897370'>I'm</span> <span m='897510'>using</span> <span
  m='897720'>a</span> <span m='897800'>lot</span> <span m='897930'>of</span>
  <span m='898000'>space,</span> <span m='898270'>aren't</span> <span
  m='898770'>I. All right.</span> <span m='899200'>So</span> <span
  m='900100'>in</span> <span m='900250'>this</span> <span
  m='900400'>case,</span> <span m='900670'>we've</span> <span
  m='900830'>got</span> <span m='901020'>our</span> <span
  m='901170'>coefficients,</span> <span m='901750'>A equals</span> <span
  m='902130'>0,</span> <span m='902400'>D</span> <span m='902580'>equals</span>
  <span m='902850'>1,</span> <span m='903700'>B equals</span> <span
  m='904150'>1,</span> <span m='904360'>C equals</span> <span
  m='904760'>minus</span> <span m='905020'>2.</span> <span m='905580'>And</span>
  <span m='905760'>that</span> <span m='905920'>gives</span> <span
  m='906140'>us</span> <span m='906360'>the</span> <span
  m='906480'>partial</span> <span m='906800'>fraction</span> <span
  m='907160'>decomposition.</span> </p><p><span m='909400'>Let's</span> <span
  m='909750'>go</span> <span m='910860'>back</span> <span m='911170'>over</span>
  <span m='911410'>here</span> <span m='912280'>then,</span> <span
  m='912850'>and</span> <span m='913760'>look</span> <span m='913930'>at</span>
  <span m='914340'>question</span> <span m='914760'>(c).</span> <span
  m='915770'>So</span> <span m='916020'>for</span> <span m='916190'>(c),</span>
  <span m='917480'>the</span> <span m='917600'>question</span> <span
  m='917950'>is,</span> <span m='918090'>what</span> <span m='918310'>is</span>
  <span m='918400'>the</span> <span m='918490'>partial</span> <span
  m='918790'>fraction</span> <span m='919080'>decomposition of</span> <span
  m='920240'>2x</span> <span m='920550'>plus</span> <span m='920870'>2</span>
  <span m='921820'>divided</span> <span m='922170'>by</span> <span
  m='922260'>the</span> <span m='922360'>quantity</span> <span
  m='923390'>4x</span> <span m='923840'>squared</span> <span
  m='924180'>plus</span> <span m='924440'>1</span> <span
  m='925590'>squared?</span> </p><p><span m='927710'>This</span> <span
  m='927850'>one's</span> <span m='928010'>really</span> <span
  m='928210'>easy.</span> <span m='928450'>This</span> <span
  m='928600'>one</span> <span m='928740'>is</span> <span m='928870'>done.</span>
  <span m='929880'>This</span> <span m='930050'>is</span> <span
  m='930170'>already</span> <span m='930590'>partial</span> <span
  m='930920'>fraction</span> <span m='931320'>decomposed.</span> <span
  m='932320'>Right?</span> <span m='932690'>When</span> <span
  m='932930'>you</span> <span m='933730'>have--</span> <span
  m='934050'>so</span> <span m='934480'>here</span> <span m='934690'>we</span>
  <span m='934810'>have</span> <span m='934980'>an</span> <span
  m='935290'>irreducible</span> <span m='935890'>quadratic</span> <span
  m='936880'>in the</span> <span m='937060'>denominator.</span> <span
  m='937950'>You</span> <span m='938040'>can't</span> <span
  m='938290'>factor</span> <span m='939080'>this</span> <span
  m='939300'>any</span> <span m='939490'>further</span> <span
  m='940210'>than</span> <span m='940930'>it's</span> <span
  m='941070'>gone.</span> <span m='942400'>It</span> <span
  m='942760'>also</span> <span m='943170'>occurs</span> <span
  m='943570'>to</span> <span m='943980'>a</span> <span m='944030'>higher</span>
  <span m='944290'>power.</span> <span m='944780'>So</span> <span
  m='944940'>when</span> <span m='945080'>you</span> <span
  m='945680'>partial</span> <span m='946050'>fraction</span> <span
  m='946410'>decompose</span> <span m='946910'>something</span> <span
  m='947170'>like</span> <span m='947330'>this,</span> <span
  m='947680'>you</span> <span m='947900'>want</span> <span
  m='948530'>something</span> <span m='949120'>linear</span> <span
  m='949620'>over</span> <span m='949900'>4x</span> <span
  m='950220'>squared</span> <span m='950530'>plus</span> <span
  m='950710'>1,</span> <span m='952010'>plus</span> <span
  m='952650'>something</span> <span m='953080'>linear</span> <span
  m='953560'>over</span> <span m='953900'>4x</span> <span
  m='954240'>squared</span> <span m='954720'>plus</span> <span
  m='954930'>1</span> <span m='955130'>squared.</span> </p><p><span
  m='956760'>But</span> <span m='956930'>we</span> <span
  m='957040'>already</span> <span m='957240'>have</span> <span
  m='957510'>that,</span> <span m='958400'>right?</span> <span
  m='958690'>The</span> <span m='959590'>first</span> <span
  m='959940'>linear</span> <span m='960240'>part</span> <span
  m='960500'>is</span> <span m='960640'>0,</span> <span m='961310'>and</span>
  <span m='961510'>the</span> <span m='961570'>second</span> <span
  m='961860'>is</span> <span m='962570'>something</span> <span
  m='962970'>linear</span> <span m='963420'>over</span> <span m='964030'>4x
  squared</span> <span m='964510'>plus</span> <span m='964730'>1</span> <span
  m='964940'>squared.</span> <span m='965490'>So</span> <span
  m='965830'>to</span> <span m='965970'>integrate</span> <span
  m='966380'>this,</span> <span m='966800'>it's</span> <span
  m='966950'>already</span> <span m='967310'>in</span> <span m='967400'>a</span>
  <span m='967440'>pretty</span> <span m='967690'>good</span> <span
  m='967870'>form.</span> <span m='968540'>Now,</span> <span
  m='968670'>you're</span> <span m='968860'>actually</span> <span
  m='969120'>going to</span> <span m='969360'>write,</span> <span
  m='969540'>if</span> <span m='969640'>you</span> <span
  m='969730'>wanted</span> <span m='969960'>to</span> <span
  m='970060'>integrate</span> <span m='970380'>this,</span> <span
  m='970670'>you</span> <span m='970850'>would</span> <span
  m='971190'>split</span> <span m='971530'>it</span> <span
  m='971830'>into</span> <span m='972490'>two</span> <span
  m='972880'>pieces,</span> <span m='973270'>one</span> <span
  m='973540'>with</span> <span m='973700'>the</span> <span m='973800'>2x</span>
  <span m='974510'>and</span> <span m='974780'>then</span> <span
  m='974880'>one</span> <span m='975090'>with</span> <span m='975270'>the</span>
  <span m='975370'>2.</span> <span m='975900'>And</span> <span
  m='976060'>the</span> <span m='976120'>first</span> <span
  m='976480'>one,</span> <span m='977000'>you</span> <span
  m='977540'>would</span> <span m='977770'>just</span> <span
  m='978040'>be</span> <span m='978230'>a</span> <span m='978450'>usual</span>
  <span m='978930'>u</span> <span m='979080'>substitution,</span> <span
  m='979880'>and</span> <span m='980060'>the</span> <span
  m='980130'>second</span> <span m='980460'>one,</span> <span
  m='980760'>we</span> <span m='980890'>would</span> <span
  m='981100'>want</span> <span m='981330'>some</span> <span
  m='981490'>sort</span> <span m='981660'>of</span> <span
  m='981740'>trigonometric</span> <span m='982750'>substitution.</span> <span
  m='984190'>But</span> <span m='985020'>this</span> <span m='985160'>one</span>
  <span m='985310'>is</span> <span m='985410'>already</span> <span
  m='986380'>ready</span> <span m='986730'>for</span> <span
  m='987120'>methods</span> <span m='987530'>we</span> <span
  m='987700'>already</span> <span m='988170'>should</span> <span
  m='988450'>be</span> <span m='988540'>comfortable</span> <span
  m='988980'>with.</span> <span m='989670'>OK.</span> <span m='989930'>So</span>
  <span m='990020'>C,</span> <span m='990330'>that's</span> <span
  m='990860'>easy.</span> <span m='991090'>It's</span> <span
  m='991260'>done</span> <span m='991460'>already.</span> <span
  m='992255'>I'll</span> <span m='992640'>put</span> <span m='992770'>a</span>
  <span m='992810'>check</span> <span m='993100'>mark</span> <span
  m='993300'>there,</span> <span m='993780'>because</span> <span
  m='994260'>that</span> <span m='994420'>makes</span> <span
  m='994600'>me</span> <span m='994690'>happy.</span> <span
  m='995650'>OK.</span> </p><p><span m='996160'>And</span> <span
  m='996350'>for--</span> <span m='996460'>all</span> <span
  m='996600'>right,</span> <span m='996730'>and</span> <span m='996920'>so
  for</span> <span m='997010'>this</span> <span m='997210'>last</span> <span
  m='997580'>one,</span> <span m='999460'>I'm</span> <span
  m='1000290'>also</span> <span m='1000590'>not</span> <span
  m='1000790'>going</span> <span m='1000910'>to</span> <span
  m='1000990'>write</span> <span m='1001190'>this</span> <span
  m='1001360'>one</span> <span m='1001530'>out.</span> <span
  m='1002470'>But</span> <span m='1002720'>the</span> <span
  m='1002810'>thing</span> <span m='1003030'>to</span> <span
  m='1003110'>notice</span> <span m='1003360'>here</span> <span
  m='1003560'>is</span> <span m='1003800'>the</span> <span
  m='1004160'>way</span> <span m='1004330'>I</span> <span
  m='1004430'>wrote</span> <span m='1004750'>it--</span> <span
  m='1005140'>and</span> <span m='1005250'>this</span> <span
  m='1005380'>was</span> <span m='1005510'>really</span> <span m='1005710'>mean
  of</span> <span m='1006170'>me. Right?</span> <span m='1006890'>I</span> <span
  m='1007060'>wrote</span> <span m='1007300'>it as</span> <span
  m='1007470'>x</span> <span m='1007690'>squared</span> <span
  m='1007930'>minus</span> <span m='1008210'>1</span> <span
  m='1008400'>quantity</span> <span m='1008750'>squared.</span> <span
  m='1009630'>So</span> <span m='1010200'>a</span> <span
  m='1010340'>natural</span> <span m='1010780'>instinct</span> <span
  m='1011220'>is</span> <span m='1011360'>to say,</span> <span
  m='1011590'>aha!</span> <span m='1012240'>It's a</span> <span
  m='1012540'>quadratic</span> <span m='1013140'>repeated</span> <span
  m='1013880'>factor</span> <span m='1014220'>in</span> <span
  m='1014300'>the</span> <span m='1014390'>denominator.</span> <span
  m='1015090'>Right?</span> <span m='1015340'>But</span> <span
  m='1016550'>that's</span> <span m='1016730'>just</span> <span
  m='1016880'>because</span> <span m='1017090'>I</span> <span
  m='1017200'>was</span> <span m='1017360'>mean</span> <span
  m='1017640'>and</span> <span m='1017740'>I</span> <span
  m='1017800'>wrote</span> <span m='1018040'>it</span> <span
  m='1018140'>this</span> <span m='1018300'>way.</span> <span
  m='1018490'>That's</span> <span m='1018670'>not</span> <span
  m='1018850'>actually</span> <span m='1019260'>what</span> <span
  m='1019420'>this</span> <span m='1019580'>is.</span> <span
  m='1019870'>This</span> <span m='1020310'>is</span> <span
  m='1020430'>not</span> <span m='1020800'>irreducible.</span> <span
  m='1021810'>This</span> <span m='1022020'>factors.</span> <span
  m='1022760'>You</span> <span m='1022940'>can</span> <span
  m='1023100'>rewrite--</span> <span m='1024850'>let</span> <span
  m='1024980'>me</span> <span m='1025390'>come</span> <span
  m='1025590'>back</span> <span m='1025820'>over</span> <span
  m='1025980'>here.</span> <span m='1027723'>This is</span> <span
  m='1029170'>for</span> <span m='1030340'>question</span> <span
  m='1030820'>(d).</span> <span m='1031730'>So</span> <span
  m='1032270'>you</span> <span m='1032410'>can</span> <span
  m='1032630'>rewrite</span> <span m='1033940'>x</span> <span
  m='1034210'>squared</span> <span m='1034430'>minus</span> <span
  m='1034740'>1</span> <span m='1035500'>squared</span> <span
  m='1036240'>as</span> <span m='1037232'>x</span> <span
  m='1037730'>minus</span> <span m='1038150'>1</span> <span
  m='1038520'>squared</span> <span m='1039560'>times</span> <span
  m='1039940'>x</span> <span m='1040420'>plus</span> <span m='1040740'>1</span>
  <span m='1041680'>squared.</span> <span m='1042100'>You</span> <span
  m='1042180'>can</span> <span m='1042630'>factor</span> <span
  m='1043080'>this</span> <span m='1043900'>x</span> <span
  m='1044130'>squared</span> <span m='1044440'>minus</span> <span
  m='1044750'>1.</span> </p><p><span m='1047190'>So</span> <span
  m='1047380'>when</span> <span m='1047480'>you</span> <span
  m='1047570'>factor</span> <span m='1047990'>this x</span> <span
  m='1048330'>minus</span> <span m='1048580'>1,</span> <span
  m='1048950'>what</span> <span m='1049170'>you</span> <span
  m='1049270'>see</span> <span m='1049430'>is--</span> <span
  m='1049550'>this</span> <span m='1049680'>isn't</span> <span
  m='1049940'>a</span> <span m='1050010'>problem</span> <span
  m='1050780'>that</span> <span m='1050920'>has</span> <span
  m='1051440'>one</span> <span m='1052050'>irreducible</span> <span
  m='1053300'>quadratic</span> <span m='1053900'>factor</span> <span
  m='1054740'>appearing</span> <span m='1055140'>to</span> <span
  m='1055220'>the</span> <span m='1055300'>second</span> <span
  m='1055590'>power.</span> <span m='1056230'>What</span> <span
  m='1056450'>it</span> <span m='1056510'>has</span> <span m='1056770'>is</span>
  <span m='1057010'>two</span> <span m='1057860'>linear</span> <span
  m='1058250'>factors,</span> <span m='1058850'>each</span> <span
  m='1059050'>appearing</span> <span m='1059410'>to</span> <span
  m='1059500'>the</span> <span m='1059590'>second</span> <span
  m='1059860'>power.</span> <span m='1060840'>So</span> <span
  m='1061080'>the</span> <span m='1061170'>partial</span> <span
  m='1061490'>fraction</span> <span m='1061850'>decomposition</span> <span
  m='1062820'>in</span> <span m='1063000'>this</span> <span
  m='1063120'>problem</span> <span m='1063700'>will</span> <span
  m='1063980'>be</span> <span m='1064260'>something</span> <span
  m='1064740'>like</span> <span m='1065930'>A</span> <span
  m='1066660'>over</span> <span m='1068130'>x</span> <span
  m='1068420'>minus</span> <span m='1068810'>1</span> <span m='1069800'>plus
  B</span> <span m='1070990'>over</span> <span m='1072151'>x</span> <span
  m='1072540'>minus</span> <span m='1072890'>1</span> <span
  m='1073320'>squared</span> <span m='1074580'>plus</span> <span
  m='1074860'>C</span> <span m='1076220'>over x</span> <span
  m='1076790'>plus</span> <span m='1077100'>1,</span> <span
  m='1078320'>plus</span> <span m='1078720'>D</span> <span
  m='1079230'>over</span> <span m='1080616'>x</span> <span
  m='1081080'>plus</span> <span m='1081335'>1</span> <span
  m='1081590'>squared.</span> <span m='1083180'>That's</span> <span
  m='1083420'>what</span> <span m='1083770'>you'll</span> <span
  m='1083930'>get</span> <span m='1084160'>when</span> <span
  m='1084290'>you</span> <span m='1084680'>apply</span> <span
  m='1085330'>partial</span> <span m='1085700'>fraction</span> <span
  m='1086110'>decomposition</span> <span m='1086710'>to this</span> <span
  m='1086960'>problem.</span> <span m='1087450'>And</span> <span
  m='1087720'>then</span> <span m='1087860'>you</span> <span
  m='1087950'>have</span> <span m='1088100'>to</span> <span
  m='1088210'>solve</span> <span m='1088590'>for</span> <span
  m='1088720'>the</span> <span m='1090140'>coefficients</span> <span
  m='1090660'>A,</span> <span m='1090980'>B, C,</span> <span
  m='1091150'>and</span> <span m='1091250'>D.</span> </p><p><span
  m='1091530'>So</span> <span m='1091720'>I'm</span> <span
  m='1091840'>not</span> <span m='1092000'>going to</span> <span
  m='1092560'>write</span> <span m='1092840'>that</span> <span
  m='1093000'>out</span> <span m='1093140'>myself,</span> <span
  m='1093640'>but</span> <span m='1093800'>I</span> <span
  m='1094750'>cleverly</span> <span m='1095490'>did</span> <span
  m='1095650'>it</span> <span m='1096490'>before</span> <span
  m='1097750'>I</span> <span m='1097810'>came</span> <span m='1098050'>on</span>
  <span m='1098170'>camera,</span> <span m='1098470'>so</span> <span
  m='1098590'>I</span> <span m='1098660'>can</span> <span
  m='1098780'>tell</span> <span m='1098970'>you</span> <span
  m='1099070'>what</span> <span m='1099200'>the</span> <span
  m='1099290'>answer</span> <span m='1099630'>is,</span> <span
  m='1099810'>if</span> <span m='1100180'>you</span> <span
  m='1100270'>want</span> <span m='1100410'>to</span> <span
  m='1100470'>check</span> <span m='1100710'>your</span> <span
  m='1100830'>work.</span> <span m='1101310'>So</span> <span
  m='1101550'>here</span> <span m='1101800'>we</span> <span
  m='1101960'>have</span> <span m='1103080'>A</span> <span m='1104310'>is
  equal</span> <span m='1104670'>to</span> <span m='1104740'>0,</span> <span
  m='1107100'>B</span> <span m='1108410'>is</span> <span
  m='1108530'>equal</span> <span m='1108740'>to</span> <span
  m='1108800'>1,</span> <span m='1110740'>C</span> <span m='1111960'>is
  equal</span> <span m='1112290'>to</span> <span m='1112370'>1,</span> <span
  m='1113780'>and</span> <span m='1114010'>D</span> <span m='1114400'>is equal
  to</span> <span m='1114790'>minus</span> <span m='1115290'>3.</span> <span
  m='1115690'>So</span> <span m='1116180'>that's</span> <span
  m='1116480'>for</span> <span m='1116670'>the--</span> <span
  m='1117290'>I</span> <span m='1117450'>didn't</span> <span
  m='1117710'>write</span> <span m='1117860'>it</span> <span
  m='1117950'>over</span> <span m='1118100'>here.</span> <span
  m='1118300'>That's</span> <span m='1118530'>for</span> <span
  m='1118630'>this</span> <span m='1118830'>particular</span> <span
  m='1120040'>numerator</span> <span m='1120720'>that</span> <span
  m='1120880'>we</span> <span m='1121420'>started</span> <span
  m='1121730'>with</span> <span m='1121940'>back</span> <span
  m='1122160'>over</span> <span m='1122340'>here.</span> <span
  m='1123950'>So</span> <span m='1124070'>for</span> <span
  m='1124210'>this</span> <span m='1124940'>particular</span> <span
  m='1125380'>fraction,</span> <span m='1125810'>if</span> <span
  m='1125930'>you</span> <span m='1126290'>carry</span> <span
  m='1126580'>out</span> <span m='1126690'>the</span> <span
  m='1126780'>partial</span> <span m='1127090'>fraction</span> <span
  m='1127850'>decomposition,</span> <span m='1129090'>what</span> <span
  m='1129350'>you</span> <span m='1129450'>get</span> <span
  m='1130970'>is</span> <span m='1131610'>right</span> <span
  m='1131800'>here.</span> </p><p><span m='1133810'>So OK, so those are, that
  was</span> <span m='1135230'>a</span> <span m='1135280'>few</span> <span
  m='1135410'>more</span> <span m='1135600'>examples</span> <span
  m='1136170'>of</span> <span m='1136350'>the</span> <span
  m='1136420'>partial</span> <span m='1136720'>fraction</span> <span
  m='1137060'>decomposition.</span> <span m='1138210'>I</span> <span
  m='1138490'>hope</span> <span m='1138820'>you</span> <span
  m='1139520'>enjoyed</span> <span m='1139910'>them,</span> <span
  m='1140270'>and</span> <span m='1140780'>I'm</span> <span m='1140930'>going
  to</span> <span m='1141140'>end</span> <span m='1141310'>there.</span> </p>
embedded_media:
  - uid: e707cd206f9438c0a92da38cdfef9175
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: UsGBIfjUK7U
  - uid: 3b6a326fdffdf26c514ce2be452c04b4
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/UsGBIfjUK7U/default.jpg'
  - uid: 298aa15bfbcd045285a3690e30c942f5
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: UsGBIfjUK7U
  - uid: 243f089d6679119f98ea553d4a22f004
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: UsGBIfjUK7U.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-75-advanced-partial-fractions/partial-fractions-decomposition/UsGBIfjUK7U.srt
  - uid: ffe413d466bb5f13a846cdd139fb9706
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: UsGBIfjUK7U.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-75-advanced-partial-fractions/partial-fractions-decomposition/UsGBIfjUK7U.pdf
  - uid: 08f826c3cf33438cf9b0ef7550136996
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: d4fcbc0a35136bace5e58017019c5b57
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a2b1ecb9974d954777300aa13a448a1d
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_55_300k.mp4'
  - uid: 0b2c7ea1378a53b65ba39617c0da2786
    parent_uid: edcda0140b6aaac8c0a0f20f9083e164
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/partial-fractions-decomposition/id414308064?i=90319624
type: courses
layout: video
---
