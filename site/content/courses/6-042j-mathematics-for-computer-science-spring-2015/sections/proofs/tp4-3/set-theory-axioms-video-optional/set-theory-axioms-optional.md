---
title: 'Set Theory Axioms [Optional]'
uid: 9caa0aca18e78863f1ec507bfbf67365
parent_uid: 7fd2a22681a4a25f35529450789f87f4
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional/set-theory-axioms-optional
short_url: set-theory-axioms-optional
inline_embed_id: 16414240settheoryaxiomsoptional38773982
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='440'>PROFESSOR: Let's</span> <span m='740'>take</span> <span
  m='960'>a</span> <span m='1010'>quick</span> <span m='1340'>look</span> <span
  m='1760'>at</span> <span m='2060'>the</span> <span m='2210'>axioms</span>
  <span m='3120'>of</span> <span m='3440'>Zermelo-Frankel</span> <span
  m='4410'>Set</span> <span m='4720'>Theory</span> <span m='5640'>With</span>
  <span m='5820'>Choice.</span> <span m='10734'>So the</span> <span
  m='11220'>axioms</span> <span m='11706'>of</span> <span m='12200'>ZFC</span>
  <span m='14500'>define</span> <span m='15160'>the</span> <span
  m='15310'>standard</span> <span m='15700'>theory</span> <span
  m='15955'>of</span> <span m='16210'>sets,</span> <span m='16550'>which</span>
  <span m='16800'>is</span> <span m='17000'>now</span> <span
  m='18000'>accepted</span> <span m='18420'>by</span> <span
  m='18540'>most</span> <span m='19310'>mathematicians</span> <span
  m='20140'>as</span> <span m='20380'>a</span> <span m='20550'>reliable</span>
  <span m='21630'>and</span> <span m='21850'>simple</span> <span
  m='22260'>basis</span> <span m='22750'>for</span> <span
  m='23160'>developing</span> <span m='23790'>and justifying</span> <span
  m='24265'>all of</span> <span m='24740'>mathematics.</span> <span
  m='28160'>Among</span> <span m='28420'>the</span> <span
  m='28530'>axioms,</span> <span m='29040'>maybe</span> <span m='29260'>a</span>
  <span m='29320'>simple</span> <span m='29650'>want</span> <span
  m='29820'>to</span> <span m='29880'>understand</span> <span
  m='30730'>and</span> <span m='31270'>really</span> <span m='31530'>the</span>
  <span m='31650'>motivation</span> <span m='32270'>for</span> <span
  m='32420'>this</span> <span m='33650'>short</span> <span
  m='33980'>video</span> <span m='34390'>is</span> <span
  m='34510'>twofold.</span> <span m='35070'>One</span> <span m='35180'>is</span>
  <span m='35360'>practice</span> <span m='35860'>with</span> <span
  m='36280'>writing</span> <span m='36670'>predicate</span> <span
  m='37120'>formulas,</span> <span m='38210'>and</span> <span
  m='38400'>the</span> <span m='38540'>other</span> <span m='38870'>is</span>
  <span m='39120'>to</span> <span m='39230'>think</span> <span
  m='39410'>a</span> <span m='39460'>little</span> <span m='39680'>bit</span>
  <span m='39860'>more</span> <span m='40110'>about</span> <span
  m='40370'>self</span> <span m='40640'>application.</span> </p><p><span
  m='41920'>So</span> <span m='42390'>one</span> <span m='42660'>of</span> <span
  m='42780'>the</span> <span m='43350'>basic</span> <span
  m='43710'>axioms</span> <span m='44300'>of</span> <span m='44410'>set</span>
  <span m='44660'>theory</span> <span m='45110'>is</span> <span
  m='45260'>called</span> <span m='45460'>extensionality,</span> <span
  m='46790'>which</span> <span m='47380'>is</span> <span
  m='48480'>capturing</span> <span m='48980'>the</span> <span
  m='49110'>idea</span> <span m='49450'>that a set</span> <span
  m='49760'>is</span> <span m='50070'>determined</span> <span
  m='50520'>by</span> <span m='50710'>its</span> <span m='50920'>members.</span>
  <span m='52070'>So</span> <span m='52330'>let's</span> <span
  m='52580'>consider</span> <span m='53180'>the</span> <span
  m='53370'>assertion</span> <span m='53900'>that</span> <span
  m='54070'>two</span> <span m='54430'>sets</span> <span m='54760'>x</span>
  <span m='55010'>and</span> <span m='55110'>y</span> <span
  m='55350'>have</span> <span m='55520'>the</span> <span m='55600'>same</span>
  <span m='55920'>elements,</span> <span m='56860'>which</span> <span
  m='57170'>we</span> <span m='57300'>could</span> <span m='57460'>write</span>
  <span m='57710'>as</span> <span m='57870'>a</span> <span
  m='57960'>predicate</span> <span m='58390'>formula</span> <span
  m='58870'>in</span> <span m='58950'>set</span> <span m='59250'>theory</span>
  <span m='59580'>as</span> <span m='59750'>for</span> <span
  m='59880'>all</span> <span m='60130'>x,</span> <span m='61220'>x</span> <span
  m='61430'>is</span> <span m='61530'>a</span> <span m='61580'>member</span>
  <span m='61900'>of</span> <span m='62000'>y,</span> <span m='62230'>if</span>
  <span m='62410'>and</span> <span m='62500'>only</span> <span
  m='62810'>if</span> <span m='62960'>x</span> <span m='63170'>is</span> <span
  m='63300'>a</span> <span m='63350'>member</span> <span m='63730'>of</span>
  <span m='63830'>z.</span> <span m='64830'>Now we</span> <span
  m='65200'>could</span> <span m='65410'>use</span> <span m='65620'>this</span>
  <span m='65820'>is</span> <span m='65950'>a</span> <span
  m='66000'>definition</span> <span m='66620'>of</span> <span
  m='66700'>equality.</span> <span m='67470'>It's</span> <span
  m='67640'>what</span> <span m='67780'>we</span> <span m='67890'>mean</span>
  <span m='68130'>by</span> <span m='68280'>y</span> <span m='68530'>and</span>
  <span m='68660'>z</span> <span m='68850'>are</span> <span
  m='68960'>equal.</span> <span m='69670'>But</span> <span m='70100'>we</span>
  <span m='70260'>don't</span> <span m='70450'>really</span> <span
  m='70700'>need</span> <span m='70930'>to</span> <span m='70990'>even</span>
  <span m='71270'>introduce</span> <span m='71780'>equality</span> <span
  m='72480'>as</span> <span m='72730'>a</span> <span m='73220'>basic</span>
  <span m='75100'>part</span> <span m='75470'>of</span> <span
  m='75540'>the</span> <span m='75620'>language</span> <span
  m='76160'>and</span> <span m='76525'>add</span> <span m='77140'>axioms</span>
  <span m='77730'>about</span> <span m='77970'>how</span> <span
  m='78150'>it</span> <span m='78290'>behaves.</span> </p><p><span
  m='78760'>There's</span> <span m='78940'>one</span> <span
  m='79160'>axiom</span> <span m='79670'>that</span> <span
  m='80330'>covers</span> <span m='80810'>things</span> <span
  m='81200'>adequately,</span> <span m='81940'>and</span> <span
  m='82070'>that</span> <span m='82320'>is</span> <span m='82940'>that</span>
  <span m='83420'>if</span> <span m='83830'>two</span> <span
  m='84030'>sets</span> <span m='84340'>have</span> <span m='84470'>the</span>
  <span m='84540'>same</span> <span m='84880'>members,</span> <span
  m='85800'>then</span> <span m='86620'>they</span> <span m='86960'>are</span>
  <span m='87170'>members</span> <span m='87880'>of</span> <span
  m='88170'>the</span> <span m='88270'>same</span> <span m='88680'>sets.</span>
  <span m='89540'>So</span> <span m='90270'>if</span> <span m='90640'>all</span>
  <span m='90840'>the</span> <span m='90920'>members</span> <span
  m='91390'>of</span> <span m='91490'>x</span> <span m='91690'>and</span> <span
  m='91800'>y</span> <span m='91960'>are</span> <span m='92060'>the</span> <span
  m='92180'>same,</span> <span m='92880'>then</span> <span m='93460'>x</span>
  <span m='93740'>and</span> <span m='93830'>y</span> <span m='94090'>are</span>
  <span m='94230'>members</span> <span m='94730'>of</span> <span
  m='94860'>exactly</span> <span m='95360'>the</span> <span
  m='95470'>same</span> <span m='95780'>thing,</span> <span
  m='96180'>which</span> <span m='96410'>we</span> <span m='96550'>could</span>
  <span m='96700'>say</span> <span m='96920'>this</span> <span
  m='97160'>way,</span> <span m='97600'>for</span> <span m='97770'>every</span>
  <span m='98080'>x,</span> <span m='98180'>y</span> <span m='98590'>is
  an</span> <span m='98750'>x,</span> <span m='99090'>if</span> <span
  m='99310'>and</span> <span m='99390'>only</span> <span m='99710'>if</span>
  <span m='100090'>z</span> <span m='100400'>is</span> <span m='100660'>an
  x.</span> <span m='102940'>So</span> <span m='104470'>that</span> <span
  m='104850'>is</span> <span m='105210'>one</span> <span m='105340'>of</span>
  <span m='105410'>the</span> <span m='105470'>basic</span> <span
  m='105880'>axioms</span> <span m='106230'>of</span> <span
  m='108120'>Set</span> <span m='108410'>Theory,</span> <span
  m='108610'>maybe</span> <span m='109810'>the</span> <span
  m='109960'>starting</span> <span m='110360'>one.</span> </p><p><span
  m='111710'>Another</span> <span m='111980'>one</span> <span
  m='112140'>is</span> <span m='112230'>the</span> <span m='112360'>Power</span>
  <span m='112750'>Set</span> <span m='112880'>axiom,</span> <span
  m='113660'>which</span> <span m='113880'>simply</span> <span
  m='114170'>says</span> <span m='114410'>that</span> <span
  m='114500'>every</span> <span m='114720'>set</span> <span
  m='114920'>has</span> <span m='115140'>a</span> <span m='115190'>power</span>
  <span m='115520'>set.</span> <span m='115990'>How</span> <span
  m='116180'>would</span> <span m='116280'>you</span> <span
  m='116360'>say</span> <span m='116580'>that</span> <span m='116780'>in</span>
  <span m='116880'>the</span> <span m='116950'>language</span> <span
  m='117510'>of</span> <span m='118070'>predicate</span> <span
  m='118550'>set</span> <span m='118790'>theory?</span> <span
  m='119320'>Well,</span> <span m='119940'>you'd</span> <span
  m='120140'>say</span> <span m='120350'>that</span> <span m='120580'>for</span>
  <span m='120760'>every</span> <span m='121160'>x,</span> <span
  m='121610'>there</span> <span m='121840'>is</span> <span m='121930'>a</span>
  <span m='122010'>p,</span> <span m='122440'>which</span> <span
  m='122540'>is</span> <span m='122660'>going</span> <span m='122820'>to</span>
  <span m='122860'>be</span> <span m='123010'>the</span> <span
  m='123120'>power</span> <span m='123420'>set</span> <span
  m='123630'>effects,</span> <span m='124540'>such</span> <span
  m='124790'>that</span> <span m='125030'>for</span> <span
  m='125220'>every</span> <span m='125560'>set</span> <span m='125880'>s,</span>
  <span m='126345'>s</span> <span m='126810'>is</span> <span m='126930'>a</span>
  <span m='127010'>subset</span> <span m='127510'>of</span> <span
  m='127630'>x,</span> <span m='128280'>if</span> <span m='128479'>and</span>
  <span m='128560'>only</span> <span m='128880'>if</span> <span
  m='129090'>s</span> <span m='129410'>is</span> <span m='129530'>a</span> <span
  m='129580'>member</span> <span m='130020'>of</span> <span m='130150'>p.</span>
  <span m='130460'>Remember,</span> <span m='130740'>we</span> <span
  m='130860'>know</span> <span m='131020'>how</span> <span m='131130'>to</span>
  <span m='131240'>express</span> <span m='131740'>s</span> <span
  m='132090'>as</span> <span m='132380'>a</span> <span m='132430'>subset</span>
  <span m='132880'>of</span> <span m='133000'>s</span> <span
  m='133290'>in</span> <span m='133440'>the</span> <span
  m='133540'>language</span> <span m='134760'>of</span> <span
  m='134960'>predicate</span> <span m='135300'>calculus,</span> <span
  m='136050'>mentioning</span> <span m='136470'>only</span> <span
  m='136710'>membership.</span> <span m='137670'>So</span> <span
  m='137910'>this</span> <span m='138140'>is</span> <span m='138310'>a</span>
  <span m='138690'>good</span> <span m='138880'>axiom</span> <span
  m='139400'>that</span> <span m='139590'>says,</span> <span
  m='139920'>yes,</span> <span m='140620'>there</span> <span
  m='140910'>is</span> <span m='141720'>a</span> <span m='142130'>set</span>
  <span m='142480'>p</span> <span m='142760'>consisting</span> <span
  m='143290'>of</span> <span m='143390'>precisely</span> <span
  m='144070'>the</span> <span m='144170'>subsets</span> <span
  m='144700'>of</span> <span m='144820'>x.</span> <span m='145330'>That</span>
  <span m='145530'>set</span> <span m='145800'>p</span> <span
  m='146000'>called</span> <span m='146160'>the</span> <span
  m='146240'>powers</span> <span m='146590'>set of</span> <span
  m='146780'>x.</span> </p><p></p><p><span m='149440'>When</span> <span
  m='149760'>you're</span> <span m='150400'>trying</span> <span
  m='150920'>to</span> <span m='151890'>deal</span> <span m='152340'>with</span>
  <span m='152900'>the</span> <span m='153070'>Russell's</span> <span
  m='153430'>paradox</span> <span m='153990'>kind</span> <span
  m='154170'>of</span> <span m='154280'>issue,</span> <span
  m='154600'>where</span> <span m='154760'>you</span> <span
  m='154930'>define</span> <span m='156060'>a</span> <span m='156170'>set</span>
  <span m='156460'>of</span> <span m='156720'>element</span> <span
  m='157230'>or</span> <span m='157550'>a</span> <span
  m='157660'>collection</span> <span m='158070'>of</span> <span
  m='158130'>sets</span> <span m='158470'>that</span> <span
  m='158590'>satisfies</span> <span m='159090'>some</span> <span
  m='159330'>property,</span> <span m='161510'>the</span> <span
  m='161650'>safe</span> <span m='162210'>conservative</span> <span
  m='162760'>version</span> <span m='163250'>of</span> <span
  m='163620'>saying</span> <span m='164010'>that</span> <span
  m='165310'>a</span> <span m='165490'>set</span> <span m='165710'>of</span>
  <span m='165790'>elements</span> <span m='166250'>that</span> <span
  m='166380'>satisfy</span> <span m='166870'>some</span> <span
  m='167110'>property</span> <span m='167520'>really</span> <span
  m='167870'>is</span> <span m='168060'>a</span> <span m='168120'>set, a</span>
  <span m='168440'>collection</span> <span m='168890'>of</span> <span
  m='168950'>elements</span> <span m='169380'>that</span> <span
  m='169530'>satisfy</span> <span m='170030'>some</span> <span
  m='170570'>property,</span> <span m='171010'>really</span> <span
  m='171330'>is</span> <span m='171480'>a</span> <span m='171550'>set,</span>
  <span m='173780'>the</span> <span m='173910'>comprehension</span> <span
  m='174540'>axiom's</span> <span m='175100'>a</span> <span
  m='175170'>simple</span> <span m='176480'>version</span> <span
  m='176930'>of</span> <span m='177040'>an</span> <span m='177120'>axiom</span>
  <span m='177480'>that</span> <span m='177580'>allows</span> <span
  m='177880'>you</span> <span m='177990'>to</span> <span m='178070'>do</span>
  <span m='178240'>that.</span> <span m='178450'>So</span> <span
  m='178590'>basically,</span> <span m='179030'>it</span> <span
  m='179150'>says</span> <span m='179420'>that</span> <span m='179830'>if</span>
  <span m='180020'>s</span> <span m='180230'>is</span> <span m='180370'>a</span>
  <span m='180430'>set</span> <span m='181320'>and</span> <span
  m='181570'>p</span> <span m='181840'>of</span> <span m='181960'>x</span> <span
  m='182360'>is</span> <span m='182680'>an</span> <span
  m='182820'>arbitrary</span> <span m='184480'>predicate</span> <span
  m='185130'>of</span> <span m='186480'>set</span> <span
  m='186730'>theory,</span> <span m='187470'>which</span> <span
  m='187880'>might</span> <span m='188140'>in</span> <span
  m='188230'>fact</span> <span m='188480'>be</span> <span m='188580'>one</span>
  <span m='188770'>of</span> <span m='188850'>these</span> <span
  m='189080'>dangerous</span> <span m='189540'>things</span> <span
  m='189760'>like</span> <span m='189960'>x</span> <span m='190170'>is</span>
  <span m='190290'>not</span> <span m='190460'>a</span> <span
  m='190490'>member</span> <span m='190850'>of</span> <span m='190930'>x,</span>
  <span m='192920'>nevertheless,</span> <span m='193970'>if</span> <span
  m='194100'>you</span> <span m='194490'>look</span> <span m='194780'>at</span>
  <span m='195040'>those</span> <span m='195470'>elements</span> <span
  m='196070'>in</span> <span m='196250'>the</span> <span m='196340'>set</span>
  <span m='196690'>S</span> <span m='197160'>that</span> <span
  m='197330'>satisfy</span> <span m='197890'>P</span> <span m='198150'>of</span>
  <span m='198260'>x,</span> <span m='198960'>that's</span> <span
  m='199290'>a</span> <span m='199370'>set.</span> </p><p><span
  m='200630'>In</span> <span m='200730'>other</span> <span
  m='200770'>words,</span> <span m='201890'>the</span> <span m='201900'>set
  of</span> <span m='202210'>x and s,</span> <span m='202630'>such</span> <span
  m='202910'>that</span> <span m='203040'>P</span> <span m='203250'>of</span>
  <span m='203360'>x</span> <span m='203660'>is</span> <span m='203870'>a</span>
  <span m='203940'>set,</span> <span m='206390'>it</span> <span
  m='206540'>means</span> <span m='206750'>that</span> <span
  m='206910'>any</span> <span m='207290'>definable</span> <span
  m='208130'>collection</span> <span m='209030'>of</span> <span
  m='209210'>elements</span> <span m='210350'>within</span> <span
  m='210740'>a</span> <span m='210980'>set</span> <span m='211760'>also</span>
  <span m='212100'>form</span> <span m='212760'>a</span> <span
  m='212880'>proper</span> <span m='213290'>subset.</span> <span
  m='214760'>And</span> <span m='215400'>the</span> <span
  m='215470'>reason</span> <span m='215750'>why</span> <span
  m='215920'>this</span> <span m='216150'>matters</span> <span
  m='216490'>is,</span> <span m='216620'>remember,</span> <span
  m='217120'>if</span> <span m='217310'>I</span> <span m='217410'>just</span>
  <span m='217800'>talked</span> <span m='218110'>about</span> <span
  m='218400'>not</span> <span m='218630'>the</span> <span m='218720'>set</span>
  <span m='218950'>of</span> <span m='219090'>x</span> <span
  m='219540'>in</span> <span m='219690'>a</span> <span
  m='219780'>particular</span> <span m='220320'>set</span> <span
  m='220650'>s</span> <span m='221120'>the</span> <span
  m='221240'>satisfied</span> <span m='221760'>P</span> <span
  m='221950'>of</span> <span m='222040'>x,</span> <span m='222260'>if</span>
  <span m='222370'>I</span> <span m='222450'>just</span> <span
  m='222690'>talked</span> <span m='222930'>about</span> <span
  m='223460'>the</span> <span m='223610'>collection</span> <span
  m='224180'>of</span> <span m='224280'>x's</span> <span m='224550'>that</span>
  <span m='224790'>satisfied</span> <span m='225390'>P</span> <span
  m='225600'>of</span> <span m='225730'>x,</span> <span m='226340'>that's</span>
  <span m='226680'>when</span> <span m='226860'>I</span> <span
  m='226920'>start</span> <span m='227260'>getting</span> <span
  m='227560'>into</span> <span m='228160'>Russell's</span> <span
  m='228630'>paradox</span> <span m='230020'>areas,</span> <span
  m='231100'>when</span> <span m='231430'>I</span> <span m='231610'>declare
  that</span> <span m='231940'>the</span> <span m='232220'>set</span> <span
  m='232490'>of</span> <span m='232640'>x</span> <span m='233110'>such</span>
  <span m='233420'>that</span> <span m='233560'>P</span> <span
  m='233770'>of</span> <span m='233880'>x</span> <span m='234810'>is</span>
  <span m='235050'>a</span> <span m='235130'>set</span> <span
  m='235710'>for</span> <span m='236130'>unrestricted</span> <span
  m='237020'>P</span> <span m='237230'>of</span> <span m='237330'>x.</span>
  <span m='237810'>But</span> <span m='238050'>all I get</span> <span
  m='238560'>to</span> <span m='238650'>do</span> <span m='238760'>is</span>
  <span m='238870'>put</span> <span m='239020'>a</span> <span
  m='239060'>bound</span> <span m='239590'>on</span> <span m='240940'>the</span>
  <span m='241090'>elements</span> <span m='241600'>that</span> <span
  m='241740'>x</span> <span m='241980'>ranges</span> <span
  m='242440'>over,</span> <span m='243080'>that</span> <span m='243470'>x</span>
  <span m='243720'>is</span> <span m='243830'>a</span> <span
  m='243870'>member</span> <span m='244280'>of</span> <span
  m='244370'>some</span> <span m='244570'>particular</span> <span
  m='245050'>set.</span> <span m='245610'>Then</span> <span
  m='245810'>it's</span> <span m='246000'>safe</span> <span m='246290'>to</span>
  <span m='246440'>take</span> <span m='246780'>all</span> <span
  m='246990'>of</span> <span m='247070'>those</span> <span m='247330'>x's</span>
  <span m='247700'>that</span> <span m='247840'>satisfy</span> <span
  m='248340'>P of</span> <span m='248670'>x.</span> </p><p><span
  m='250280'>Now</span> <span m='251370'>another</span> <span
  m='252130'>particularly</span> <span m='253220'>interesting</span> <span
  m='253640'>axiom</span> <span m='254060'>of</span> <span m='254160'>ZF</span>
  <span m='254530'>which</span> <span m='254770'>addresses</span> <span
  m='255290'>this</span> <span m='255470'>issue</span> <span
  m='255860'>of</span> <span m='256670'>self</span> <span
  m='256959'>membership</span> <span m='257920'>and</span> <span
  m='258130'>self</span> <span m='258399'>reference</span> <span
  m='258959'>is</span> <span m='259480'>that the</span> <span
  m='259899'>intuitive</span> <span m='260360'>idea</span> <span
  m='260740'>that</span> <span m='260920'>the</span> <span
  m='261040'>elements</span> <span m='261459'>of</span> <span
  m='261570'>a</span> <span m='261620'>set</span> <span m='261880'>have</span>
  <span m='262240'>to come</span> <span m='262890'>before</span> <span
  m='263710'>the</span> <span m='263840'>set</span> <span
  m='264200'>itself.</span> <span m='264470'>They</span> <span
  m='264570'>have</span> <span m='264740'>to</span> <span m='264850'>be</span>
  <span m='264960'>simpler</span> <span m='265440'>than</span> <span
  m='266750'>the</span> <span m='267000'>set</span> <span
  m='267200'>itself,</span> <span m='267820'>if</span> <span
  m='267990'>you</span> <span m='268090'>think</span> <span
  m='268280'>about</span> <span m='268510'>sort</span> <span
  m='268640'>of</span> <span m='268790'>building</span> <span
  m='269140'>up</span> <span m='269310'>a</span> <span m='269370'>set</span>
  <span m='269690'>from</span> <span m='269870'>successively</span> <span
  m='270630'>simpler</span> <span m='271070'>elements</span> <span
  m='271530'>to</span> <span m='271950'>more</span> <span
  m='272150'>complicated</span> <span m='272470'>ones.</span> <span
  m='273030'>In</span> <span m='273140'>particular,</span> <span
  m='274830'>you</span> <span m='274960'>can't</span> <span
  m='275230'>have</span> <span m='275450'>a</span> <span m='275500'>set</span>
  <span m='275820'>be</span> <span m='275950'>a</span> <span
  m='276020'>member</span> <span m='276400'>of</span> <span
  m='276510'>itself</span> <span m='276930'>because</span> <span
  m='277280'>then</span> <span m='277490'>it's</span> <span
  m='277670'>not</span> <span m='277890'>being</span> <span
  m='278110'>built</span> <span m='278400'>from</span> <span
  m='278600'>things</span> <span m='278890'>that</span> <span
  m='278980'>are</span> <span m='279050'>simpler</span> <span m='279470'>than it
  is</span> <span m='280630'>or</span> <span m='281110'>that</span> <span
  m='281480'>came</span> <span m='281730'>before</span> <span
  m='282220'>it.</span> </p><p><span m='282700'>In</span> <span
  m='282830'>fact,</span> <span m='283040'>you</span> <span m='283130'>can't
  even</span> <span m='283510'>have</span> <span m='283720'>a</span> <span
  m='283770'>set</span> <span m='284030'>that's</span> <span m='284200'>a</span>
  <span m='284240'>member</span> <span m='284590'>of</span> <span
  m='284710'>a</span> <span m='284780'>member</span> <span m='285160'>of</span>
  <span m='285270'>itself.</span> <span m='286060'>All of</span> <span
  m='286400'>that</span> <span m='286610'>kind</span> <span m='286880'>of</span>
  <span m='288170'>indirect</span> <span m='288760'>membership</span> <span
  m='289280'>is</span> <span m='289560'>forbidden.</span> <span
  m='290530'>Now,</span> <span m='290670'>how</span> <span m='290840'>do</span>
  <span m='290910'>you</span> <span m='291020'>say</span> <span
  m='291260'>that</span> <span m='291440'>is</span> <span m='291550'>a</span>
  <span m='291600'>nice</span> <span m='291880'>axiom?</span> <span
  m='292460'>Well,</span> <span m='292740'>there's</span> <span
  m='292940'>a</span> <span m='292990'>very</span> <span
  m='293270'>elegant</span> <span m='293660'>way</span> <span
  m='293830'>to</span> <span m='293950'>do</span> <span m='294150'>it,</span>
  <span m='294870'>and</span> <span m='295130'>that</span> <span
  m='295320'>is</span> <span m='295490'>to</span> <span m='295600'>say</span>
  <span m='295880'>that</span> <span m='296110'>all</span> <span
  m='296350'>sets</span> <span m='296840'>are</span> <span
  m='297360'>well</span> <span m='297750'>founded</span> <span
  m='298310'>under</span> <span m='298630'>membership,</span> <span
  m='299360'>which</span> <span m='299660'>means</span> <span
  m='299940'>that</span> <span m='300120'>you</span> <span
  m='300230'>can't</span> <span m='300960'>find</span> <span
  m='301320'>an</span> <span m='301450'>infinite</span> <span
  m='302010'>sequence</span> <span m='302540'>of</span> <span
  m='302650'>sets</span> <span m='303100'>where</span> <span
  m='303890'>each</span> <span m='304250'>one</span> <span m='304850'>has</span>
  <span m='305200'>the</span> <span m='305970'>next</span> <span
  m='306300'>one</span> <span m='306520'>as</span> <span m='306680'>a</span>
  <span m='306730'>member.</span> </p><p><span m='308260'>Let's</span> <span
  m='309160'>give</span> <span m='309400'>a</span> <span
  m='309850'>precise</span> <span m='310410'>way</span> <span
  m='310550'>to</span> <span m='310620'>formulate</span> <span
  m='311170'>that.</span> <span m='311430'>It's</span> <span
  m='311600'>also</span> <span m='311880'>good</span> <span
  m='312050'>practice</span> <span m='312510'>with</span> <span
  m='313290'>the</span> <span m='313830'>formulas</span> <span m='314280'>of
  set</span> <span m='314710'>theory.</span> <span m='315340'>Let</span> <span
  m='315450'>me</span> <span m='315550'>say</span> <span m='315720'>that</span>
  <span m='315880'>x</span> <span m='316180'>is</span> <span
  m='316310'>membership</span> <span m='317060'>minimal,</span> <span
  m='317560'>epsilon</span> <span m='317835'>minimal,</span> <span
  m='318520'>in</span> <span m='318820'>y</span> <span m='319880'>means</span>
  <span m='320380'>that</span> <span m='320960'>x</span> <span
  m='321230'>is</span> <span m='321360'>a</span> <span m='321400'>member</span>
  <span m='321800'>of</span> <span m='321920'>y,</span> <span
  m='322930'>but</span> <span m='323500'>there's</span> <span
  m='323920'>no</span> <span m='324320'>element</span> <span
  m='324820'>of</span> <span m='324930'>x</span> <span m='325200'>that's</span>
  <span m='325870'>also</span> <span m='326280'>in</span> <span
  m='326440'>y.</span> <span m='326800'>In other words,</span> <span
  m='327080'>x</span> <span m='327340'>is</span> <span m='327500'>built</span>
  <span m='327770'>out</span> <span m='327910'>of</span> <span
  m='328060'>things</span> <span m='328650'>that</span> <span
  m='328840'>are</span> <span m='328950'>not</span> <span m='329280'>in</span>
  <span m='329460'>y,</span> <span m='330070'>but</span> <span
  m='330320'>x</span> <span m='330540'>itself</span> <span m='330960'>is</span>
  <span m='331120'>in</span> <span m='331240'>y.</span> <span
  m='331560'>So</span> <span m='331830'>x</span> <span m='332110'>kind</span>
  <span m='332330'>of</span> <span m='333380'>comes</span> <span
  m='333780'>before</span> <span m='334210'>any of the</span> <span
  m='334620'>other</span> <span m='334860'>elements</span> <span
  m='335870'>in</span> <span m='336070'>y.</span> <span m='336740'>It's</span>
  <span m='336980'>built</span> <span m='337230'>out</span> <span
  m='337350'>of</span> <span m='337450'>non-y</span> <span
  m='338230'>stuff.</span> <span m='340750'>So</span> <span m='340940'>to</span>
  <span m='341050'>say</span> <span m='341260'>this</span> <span
  m='341480'>with</span> <span m='341600'>a</span> <span
  m='341640'>formula</span> <span m='342380'>we could</span> <span
  m='342760'>just</span> <span m='342970'>say</span> <span
  m='343210'>that</span> <span m='343460'>x</span> <span m='343780'>is</span>
  <span m='343940'>in</span> <span m='344150'>y,</span> <span
  m='345210'>and</span> <span m='345600'>for</span> <span
  m='345840'>every</span> <span m='346250'>z,</span> <span m='346680'>if</span>
  <span m='346840'>it's</span> <span m='347020'>in</span> <span
  m='347210'>x,</span> <span m='348130'>then</span> <span m='348740'>it's</span>
  <span m='348990'>not</span> <span m='349300'>in</span> <span
  m='349470'>y.</span> <span m='350670'>So</span> <span m='350920'>that's</span>
  <span m='351220'>the</span> <span m='351310'>definition</span> <span
  m='351940'>of</span> <span m='352100'>x</span> <span m='352470'>is</span>
  <span m='352960'>membership</span> <span m='353690'>minimal</span> <span
  m='354160'>in</span> <span m='354250'>y.</span> </p><p><span
  m='355240'>And</span> <span m='355410'>then</span> <span m='355710'>the</span>
  <span m='355890'>basic</span> <span m='356320'>axiom</span> <span
  m='356850'>of</span> <span m='356970'>ZF,</span> <span
  m='358310'>called</span> <span m='358470'>the</span> <span
  m='358550'>Foundation</span> <span m='359090'>Axiom,</span> <span
  m='359540'>simply</span> <span m='359910'>says</span> <span
  m='360300'>that</span> <span m='360570'>every</span> <span
  m='361030'>nonempty</span> <span m='361700'>set</span> <span
  m='362470'>has</span> <span m='362960'>a</span> <span
  m='363060'>membership</span> <span m='363650'>minimal</span> <span
  m='364090'>element.</span> <span m='364860'>This</span> <span
  m='365030'>is</span> <span m='365150'>actually a</span> <span
  m='365410'>kind</span> <span m='365580'>of</span> <span
  m='365670'>generalization</span> <span m='366860'>of</span> <span
  m='367000'>the</span> <span m='367090'>well</span> <span
  m='367330'>ordering</span> <span m='367700'>principle</span> <span
  m='368220'>that</span> <span m='368310'>says</span> <span
  m='368560'>that</span> <span m='368690'>every</span> <span
  m='369340'>nonempty</span> <span m='370370'>set</span> <span
  m='370690'>of</span> <span m='370840'>non-negative</span> <span
  m='371480'>integers</span> <span m='372350'>has</span> <span
  m='372670'>a</span> <span m='372760'>least</span> <span
  m='373150'>element.</span> <span m='374030'>This is</span> <span
  m='375840'>a</span> <span m='376210'>direct</span> <span
  m='376580'>analogy.</span> <span m='377100'>Just</span> <span
  m='377340'>as</span> <span m='379230'>the</span> <span m='380450'>in</span>
  <span m='380570'>principle</span> <span m='381020'>for</span> <span
  m='381170'>integers</span> <span m='381680'>implies</span> <span
  m='382150'>that</span> <span m='382260'>you</span> <span
  m='382370'>can't</span> <span m='382630'>have</span> <span
  m='382860'>an</span> <span m='382950'>infinite</span> <span
  m='383490'>decreasing</span> <span m='384070'>sequence</span> <span
  m='385280'>of</span> <span m='385640'>non-negative</span> <span
  m='386390'>integers,</span> <span m='387080'>the</span> <span
  m='387180'>Foundation</span> <span m='387720'>Axiom</span> <span
  m='388080'>actually</span> <span m='388430'>implies</span> <span
  m='388705'>that you</span> <span m='388980'>can't</span> <span
  m='389200'>have</span> <span m='389760'>an</span> <span
  m='389970'>infinite</span> <span m='390760'>sequence</span> <span
  m='391360'>of</span> <span m='391510'>sets,</span> <span
  m='391930'>each</span> <span m='392160'>of</span> <span
  m='392290'>which</span> <span m='392630'>is</span> <span m='392830'>a</span>
  <span m='392890'>member</span> <span m='393200'>of</span> <span
  m='393740'>the</span> <span m='393880'>previous</span> <span
  m='394420'>one.</span> </p><p><span m='398120'>Here</span> <span
  m='398480'>is</span> <span m='398650'>a</span> <span m='398860'>formula</span>
  <span m='399440'>that's</span> <span m='399750'>asserting</span> <span
  m='400200'>Foundation.</span> <span m='400910'>For</span> <span
  m='401090'>every</span> <span m='401400'>x,</span> <span m='401720'>if</span>
  <span m='401860'>x</span> <span m='402170'>is</span> <span
  m='402400'>not</span> <span m='402700'>empty,</span> <span
  m='403630'>that</span> <span m='403830'>implies</span> <span
  m='404490'>that</span> <span m='404790'>there</span> <span
  m='405030'>is</span> <span m='405220'>a</span> <span m='405320'>y,</span>
  <span m='405670'>such</span> <span m='406010'>that</span> <span
  m='406140'>y</span> <span m='406560'>is</span> <span
  m='407050'>membership</span> <span m='407630'>minimal</span> <span
  m='408230'>in</span> <span m='408400'>x.</span> <span m='410180'>What</span>
  <span m='410550'>is</span> <span m='410650'>the</span> <span
  m='410930'>Foundation</span> <span m='411580'>got to</span> <span
  m='411710'>do</span> <span m='411890'>with</span> <span
  m='412030'>membership?</span> <span m='412500'>Well,   the</span> <span
  m='412730'>Foundation</span> <span m='413020'>Axiom</span> <span
  m='413520'>actually</span> <span m='413820'>will</span> <span
  m='413960'>very</span> <span m='414310'>quickly</span> <span m='414670'>let
  us</span> <span m='414980'>conclude</span> <span m='415260'>that</span> <span
  m='415540'>no</span> <span m='415680'>set</span> <span m='415970'>is</span>
  <span m='416080'>a</span> <span m='416150'>member</span> <span
  m='416440'>of</span> <span m='416550'>itself.</span> <span
  m='417330'>How</span> <span m='417400'>does</span> <span
  m='417540'>that</span> <span m='417750'>work?</span> <span
  m='418460'>Well,</span> <span m='419160'>suppose</span> <span
  m='419760'>that</span> <span m='420600'>you</span> <span m='420830'>are</span>
  <span m='421090'>interested</span> <span m='421420'>in</span> <span
  m='421460'>some</span> <span m='421530'>set,</span> <span
  m='421850'>and</span> <span m='422130'>you'd</span> <span
  m='422240'>like</span> <span m='422440'>to</span> <span
  m='422520'>verify</span> <span m='422990'>that</span> <span
  m='423170'>the</span> <span m='423260'>set</span> <span
  m='423580'>can't</span> <span m='423840'>be</span> <span m='423970'>a</span>
  <span m='424010'>member</span> <span m='424330'>of</span> <span
  m='424430'>itself.</span> <span m='425060'>Well,</span> <span
  m='426100'>let</span> <span m='426370'>R</span> <span m='426560'>be</span>
  <span m='426750'>the</span> <span m='427030'>set</span> <span
  m='427310'>consisting</span> <span m='427790'>of</span> <span
  m='427880'>just</span> <span m='428200'>this</span> <span
  m='428300'>set</span> <span m='428610'>S</span> <span m='428900'>that</span>
  <span m='429060'>you're</span> <span m='429270'>interested</span> <span
  m='429740'>in.</span> <span m='430280'>R</span> <span m='430560'>is</span>
  <span m='430680'>the</span> <span m='430760'>singleton</span> <span
  m='431350'>S,</span> <span m='431980'>its</span> <span m='432180'>only</span>
  <span m='432460'>element</span> <span m='432880'>in S.</span> <span
  m='432970'>Well,</span> <span m='434580'>R</span> <span m='435890'>is</span>
  <span m='436440'>not</span> <span m='436700'>empty.</span> <span
  m='437840'>And</span> <span m='438140'>by</span> <span m='438310'>the</span>
  <span m='438410'>Foundation</span> <span m='438920'>Axiom,</span> <span
  m='439450'>it</span> <span m='439680'>must</span> <span m='439940'>have</span>
  <span m='440290'>a</span> <span m='440560'>membership</span> <span
  m='441000'>minimal</span> <span m='441360'>element.</span> </p><p><span
  m='442550'>Now</span> <span m='442720'>suppose</span> <span
  m='443200'>that</span> <span m='443600'>S</span> <span m='443740'>isn't
  S.</span> <span m='443840'>We're</span> <span m='444190'>going</span> <span
  m='444310'>to</span> <span m='444380'>reach</span> <span m='444580'>a</span>
  <span m='444640'>contradiction.</span> <span m='445930'>The</span> <span
  m='446050'>claim</span> <span m='446370'>is</span> <span m='446510'>that
  R</span> <span m='446690'>has</span> <span m='447320'>no</span> <span
  m='447690'>membership</span> <span m='448210'>minimal</span> <span
  m='448580'>element,</span> <span m='449060'>and</span> <span
  m='449160'>that</span> <span m='449950'>violates</span> <span
  m='450420'>the</span> <span m='450510'>Foundation</span> <span
  m='451050'>Axiom,</span> <span m='451740'>so</span> <span
  m='451880'>you</span> <span m='452020'>can't</span> <span
  m='452260'>have</span> <span m='452510'>S</span> <span m='452720'>is</span>
  <span m='452840'>a</span> <span m='452890'>member</span> <span
  m='453220'>of</span> <span m='453320'>S.</span> <span m='453660'>Why
  does</span> <span m='454090'>this</span> <span m='454250'>follow?</span> <span
  m='454580'>Well,</span> <span m='454790'>look,</span> <span m='455660'>R
  is</span> <span m='455980'>supposed</span> <span m='456350'>to</span> <span
  m='456410'>have</span> <span m='456650'>a</span> <span
  m='456700'>membership</span> <span m='457170'>minimal</span> <span
  m='457530'>element.</span> <span m='458040'>Well,</span> <span
  m='458210'>R's</span> <span m='458410'>only</span> <span m='458600'>got</span>
  <span m='458800'>one</span> <span m='458970'>element.</span> <span
  m='459750'>So</span> <span m='460040'>if</span> <span m='460170'>it's</span>
  <span m='460310'>got</span> <span m='460490'>any</span> <span
  m='460700'>membership</span> <span m='461250'>element,</span> <span
  m='461710'>it's</span> <span m='461760'>got</span> <span m='461870'>to</span>
  <span m='461980'>be</span> <span m='462170'>S.</span> </p><p><span
  m='463430'>But</span> <span m='463800'>S</span> <span m='464020'>this</span>
  <span m='464270'>can't</span> <span m='464700'>be</span> <span
  m='465450'>membership</span> <span m='465920'>minimal</span> <span
  m='466390'>because</span> <span m='468030'>S</span> <span m='469020'>is</span>
  <span m='469530'>in</span> <span m='469780'>R,</span> <span
  m='472660'>which</span> <span m='472850'>means</span> <span
  m='473110'>that</span> <span m='473280'>S</span> <span m='473830'>has</span>
  <span m='474260'>an</span> <span m='474390'>element</span> <span
  m='475100'>in</span> <span m='475290'>R</span> <span m='475550'>in</span>
  <span m='475750'>it.</span> <span m='476690'>So</span> <span
  m='477640'>S</span> <span m='477870'>is</span> <span m='478030'>not</span>
  <span m='478330'>R</span> <span m='478550'>minimal.</span> <span
  m='479370'>And</span> <span m='480000'>the</span> <span
  m='480090'>Foundation</span> <span m='480650'>Axiom</span> <span
  m='481180'>then</span> <span m='481700'>immediately</span> <span
  m='482260'>implies</span> <span m='482630'>that you</span> <span
  m='482840'>can't</span> <span m='483060'>have</span> <span m='483310'>S</span>
  <span m='483660'>be a member of</span> <span m='484220'>S.</span> <span
  m='484630'>S</span> <span m='485560'>is</span> <span m='485720'>not</span>
  <span m='487150'>membership</span> <span m='487540'>minimal</span> <span
  m='488050'>in</span> <span m='488120'>R.</span> <span m='488630'>And</span>
  <span m='488770'>this</span> <span m='488970'>argument</span> <span
  m='489450'>extends</span> <span m='490950'>in</span> <span m='491230'>a</span>
  <span m='491280'>nice</span> <span m='491630'>way</span> <span
  m='491970'>to</span> <span m='492340'>member</span> <span m='492750'>of
  a</span> <span m='493030'>member</span> <span m='493295'>and</span> <span
  m='493560'>member</span> <span m='493740'>of a member,</span> <span
  m='494590'>and</span> <span m='495010'>we'll</span> <span
  m='495700'>throw</span> <span m='496090'>a</span> <span
  m='496690'>feedback</span> <span m='497250'>on</span> <span
  m='497390'>one</span> <span m='497590'>question</span> <span
  m='497970'>about</span> <span m='498250'>that</span> <span m='498610'>at
  you</span> <span m='498770'>shortly.</span> </p><p><span m='502040'>So</span>
  <span m='502720'>looking</span> <span m='503170'>at</span> <span
  m='503390'>the</span> <span m='503590'>Foundation</span> <span
  m='504070'>Axiom</span> <span m='504510'>and</span> <span
  m='504600'>the</span> <span m='504690'>conclusion</span> <span
  m='505250'>that</span> <span m='505500'>no</span> <span m='505740'>set</span>
  <span m='506000'>is</span> <span m='506120'>a</span> <span
  m='506170'>member</span> <span m='506470'>of</span> <span
  m='506560'>itself,</span> <span m='506930'>what</span> <span
  m='507090'>we</span> <span m='507250'>can</span> <span
  m='507380'>immediately</span> <span m='507950'>conclude</span> <span
  m='508490'>is</span> <span m='509190'>that,</span> <span
  m='509530'>first</span> <span m='509830'>of</span> <span
  m='509940'>all,</span> <span m='510360'>the</span> <span
  m='510560'>collection</span> <span m='511110'>of</span> <span
  m='511220'>all</span> <span m='511580'>sets</span> <span
  m='512270'>can't</span> <span m='512530'>be</span> <span m='512669'>a
  set</span> <span m='513429'>because</span> <span m='516669'>if</span> <span
  m='516850'>the</span> <span m='516909'>collection</span> <span
  m='517380'>of</span> <span m='517470'>all</span> <span m='517610'>sets</span>
  <span m='517860'>was</span> <span m='518120'>a</span> <span
  m='518380'>set,</span> <span m='519360'>then it</span> <span
  m='519659'>would</span> <span m='519820'>be</span> <span m='519980'>a</span>
  <span m='520020'>member</span> <span m='520720'>of</span> <span
  m='520890'>itself,</span> <span m='521274'>and</span> <span
  m='521659'>that's</span> <span m='521900'>forbidden</span> <span
  m='522750'>by</span> <span m='523500'>the</span> <span m='524030'>S</span>
  <span m='524290'>can't</span> <span m='524510'>be</span> <span
  m='524630'>a</span> <span m='524670'>member</span> <span m='525000'>of</span>
  <span m='525090'>S</span> <span m='526640'>consequence</span> <span
  m='527230'>of</span> <span m='527300'>the</span> <span
  m='527390'>Foundation</span> <span m='527910'>Axiom.</span> <span
  m='528960'>The</span> <span m='529030'>second</span> <span
  m='529340'>thing</span> <span m='529500'>it</span> <span
  m='529590'>tells</span> <span m='529850'>us</span> <span m='529990'>is</span>
  <span m='530190'>remember</span> <span m='530780'>the</span> <span
  m='531210'>set W from</span> <span m='531390'>Russell's</span> <span
  m='531730'>paradox?</span> <span m='532190'>W</span> <span
  m='532570'>was</span> <span m='532760'>the</span> <span
  m='532880'>collection</span> <span m='533840'>of</span> <span
  m='534010'>those</span> <span m='534260'>sets</span> <span
  m='534590'>which</span> <span m='534800'>are</span> <span
  m='534900'>not</span> <span m='535320'>members</span> <span
  m='535750'>of</span> <span m='535880'>themselves.</span> <span
  m='536530'>Well,</span> <span m='536760'>now</span> <span
  m='537420'>we've</span> <span m='537630'>just</span> <span
  m='537870'>figured</span> <span m='538140'>out</span> <span
  m='538330'>that</span> <span m='538490'>this</span> <span m='538670'>is</span>
  <span m='538790'>all</span> <span m='538990'>sets</span> <span
  m='540050'>because</span> <span m='540820'>no</span> <span
  m='541080'>set</span> <span m='541230'>is</span> <span m='541440'>a</span>
  <span m='541480'>member</span> <span m='541770'>of</span> <span
  m='541880'>itself.</span> <span m='542320'>So</span> <span
  m='542390'>the</span> <span m='542510'>sets</span> <span
  m='542770'>that</span> <span m='542880'>are</span> <span m='542970'>not</span>
  <span m='543230'>members of</span> <span m='543630'>themselves</span> <span
  m='545430'>is</span> <span m='545610'>everything,</span> <span
  m='546280'>and</span> <span m='546890'>that's</span> <span
  m='547130'>why</span> <span m='547400'>W</span> <span m='548110'>is</span>
  <span m='548600'>not a</span> <span m='549070'>set</span> <span
  m='549690'>and</span> <span m='550480'>not</span> <span m='550760'>a</span>
  <span m='550820'>member</span> <span m='551140'>of</span> <span
  m='551240'>itself,</span> <span m='552240'>which</span> <span
  m='552540'>explains</span> <span m='553210'>finally</span> <span
  m='553700'>how</span> <span m='554320'>the</span> <span
  m='554420'>Foundation</span> <span m='554990'>Axiom</span> <span
  m='555820'>resolves</span> <span m='557160'>the</span> <span
  m='557300'>Russell</span> <span m='557640'>paradox.</span> </p>
embedded_media:
  - uid: e7b0113863fd46f64ebf1f6a17479bd2
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 430365eb8784ed128acd02db05b41cc4
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 2119f5377ed25d2cb3e7d10e7de0b2db
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: zcvsyL7GtH4
  - uid: 37ad8d5adfa19deaf88301fdfb986370
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/zcvsyL7GtH4/default.jpg'
  - uid: 18d3b270163f189a005d13d6a0856b76
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: zcvsyL7GtH4
  - uid: 2466a69c5b67d8c7fb46ee3792452575
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: zcvsyL7GtH4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional/set-theory-axioms-optional/zcvsyL7GtH4.srt
  - uid: c03c1ea3a64a7bd132dfa53de5f63fcb
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: zcvsyL7GtH4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/set-theory-axioms-video-optional/set-theory-axioms-optional/zcvsyL7GtH4.pdf
  - uid: ae6dc0205cbb0b91945666599857e7ed
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 44f0ff7d5e4d92f03c6723517468ed28
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 17aa642c91af004f6ae0573cb5c19cfc
    parent_uid: 9caa0aca18e78863f1ec507bfbf67365
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.042JS15/MIT6_042JS15_ZF_ipod.mp4'
type: courses
layout: video
---
