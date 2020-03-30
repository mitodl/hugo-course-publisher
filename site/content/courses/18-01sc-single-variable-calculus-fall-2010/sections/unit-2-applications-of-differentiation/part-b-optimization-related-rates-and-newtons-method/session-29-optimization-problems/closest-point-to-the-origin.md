---
title: Closest Point to the Origin
uid: 976a797d57af2668b28963fbffe0e36b
parent_uid: 588fcaecbbe5091660dfdf0b2efe6908
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/session-29-optimization-problems/closest-point-to-the-origin
short_url: closest-point-to-the-origin
inline_embed_id: 70186662closestpointtotheorigin11283216
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>CHRISTINE BREINER:</span> <span m='6920'>Welcome</span> <span
  m='7340'>back</span> <span m='7510'>to</span> <span
  m='7590'>recitation.</span> </p><p><span m='8890'>Today</span> <span
  m='9100'>we're</span> <span m='9200'>going</span> <span m='9320'>to</span>
  <span m='9380'>work</span> <span m='9550'>on</span> <span m='9710'>an</span>
  <span m='9810'>optimization</span> <span m='10590'>problem.</span> <span
  m='11560'>So</span> <span m='11820'>the</span> <span m='11990'>question</span>
  <span m='12320'>I</span> <span m='12400'>want</span> <span m='12570'>us</span>
  <span m='12665'>to</span> <span m='12760'>answer</span> <span
  m='13630'>is,</span> <span m='13840'>what</span> <span m='14040'>point</span>
  <span m='14290'>on</span> <span m='14430'>the</span> <span
  m='14510'>curve</span> <span m='14930'>y</span> <span m='15250'>equals</span>
  <span m='15630'>square</span> <span m='15950'>root</span> <span
  m='16260'>of</span> <span m='16430'>x</span> <span m='16600'>plus</span> <span
  m='16810'>4</span> <span m='17100'>comes</span> <span m='17370'>closest</span>
  <span m='17800'>to</span> <span m='17870'>the</span> <span
  m='17970'>origin?</span> <span m='19150'>I've</span> <span
  m='19350'>drawn</span> <span m='19620'>a</span> <span m='19720'>sketch</span>
  <span m='20150'>of</span> <span m='20260'>this</span> <span
  m='20440'>curve.</span> <span m='21380'>The</span> <span
  m='21560'>scale</span> <span m='22190'>in</span> <span m='22380'>this</span>
  <span m='22540'>direction--</span> <span m='23640'>each</span> <span
  m='23820'>hash</span> <span m='24230'>mark</span> <span m='24510'>is</span>
  <span m='24680'>one</span> <span m='25040'>unit</span> <span
  m='25340'>in</span> <span m='25410'>the</span> <span m='25500'>x</span> <span
  m='25672'>direction,</span> <span m='26190'>each</span> <span
  m='26350'>hash</span> <span m='26650'>mark</span> <span m='26850'>here</span>
  <span m='26975'>is</span> <span m='27100'>one</span> <span
  m='27310'>unit</span> <span m='27640'>in</span> <span m='27740'>the</span>
  <span m='27830'>y</span> <span m='28000'>direction.</span> <span
  m='28960'>Just</span> <span m='29140'>want</span> <span m='29215'>to</span>
  <span m='29290'>point</span> <span m='29550'>out</span> <span
  m='29940'>two</span> <span m='30360'>easy</span> <span m='30690'>places</span>
  <span m='31090'>to</span> <span m='31200'>figure</span> <span
  m='31490'>out</span> <span m='31620'>the</span> <span
  m='31690'>distance</span> <span m='32060'>to</span> <span m='32180'>the</span>
  <span m='32260'>origin.</span> <span m='33470'>Over</span> <span
  m='33700'>here,</span> <span m='34550'>where</span> <span m='34770'>the</span>
  <span m='34850'>curve</span> <span m='35090'>starts</span> <span
  m='35510'>at</span> <span m='35660'>negative</span> <span m='35990'>4,</span>
  <span m='36240'>0,</span> <span m='36520'>the</span> <span
  m='36630'>distance</span> <span m='37040'>to</span> <span m='37130'>the</span>
  <span m='37220'>origin</span> <span m='37520'>is</span> <span
  m='37650'>4</span> <span m='37910'>units.</span> <span m='39170'>And</span>
  <span m='39480'>here</span> <span m='40220'>at</span> <span
  m='40440'>(0,</span> <span m='40585'>2)</span> <span m='40980'>the</span>
  <span m='41130'>distance</span> <span m='41470'>to</span> <span
  m='41520'>the</span> <span m='41570'>origin</span> <span m='41850'>is</span>
  <span m='41990'>two</span> <span m='42190'>units.</span> <span
  m='43340'>It's</span> <span m='43400'>probably,</span> <span
  m='43960'>we</span> <span m='44090'>could</span> <span m='44220'>safely</span>
  <span m='44560'>say,</span> <span m='44790'>further</span> <span
  m='45130'>away</span> <span m='45370'>here.</span> </p><p><span
  m='45610'>So</span> <span m='45750'>we're</span> <span
  m='45940'>anticipating</span> <span m='46700'>that</span> <span
  m='46840'>somewhere</span> <span m='47710'>along</span> <span
  m='48070'>the</span> <span m='48160'>curve</span> <span m='48450'>in</span>
  <span m='48530'>this</span> <span m='48690'>region</span> <span
  m='49300'>is</span> <span m='49440'>where</span> <span m='49580'>we</span>
  <span m='49700'>should</span> <span m='49870'>find</span> <span
  m='51150'>our</span> <span m='51430'>place</span> <span
  m='51790'>that's</span> <span m='51960'>closest</span> <span
  m='52460'>to</span> <span m='52560'>the</span> <span m='52650'>origin.</span>
  <span m='53590'>The</span> <span m='53690'>only</span> <span
  m='53850'>reason</span> <span m='54070'>I</span> <span m='54140'>point</span>
  <span m='54380'>that</span> <span m='54540'>out</span> <span
  m='54730'>is</span> <span m='54860'>that,</span> <span m='54990'>when</span>
  <span m='55110'>you're</span> <span m='55240'>doing</span> <span
  m='55490'>these</span> <span m='55660'>problems</span> <span
  m='56000'>on</span> <span m='56100'>your</span> <span m='56240'>own</span>
  <span m='56890'>you</span> <span m='57080'>should</span> <span
  m='57210'>always</span> <span m='57740'>try</span> <span m='57890'>and</span>
  <span m='58040'>anticipate</span> <span m='59180'>roughly</span> <span
  m='59690'>where</span> <span m='59860'>things</span> <span
  m='60090'>should</span> <span m='60280'>happen,</span> <span
  m='60950'>in</span> <span m='61100'>what</span> <span m='61300'>kind</span>
  <span m='61470'>of</span> <span m='61530'>region,</span> <span
  m='61850'>so</span> <span m='61960'>that</span> <span m='62070'>you</span>
  <span m='62160'>don't--</span> <span m='62415'>you</span> <span
  m='62670'>don't</span> <span m='62890'>start</span> <span
  m='63100'>thinking,</span> <span m='64110'>if</span> <span
  m='64320'>you</span> <span m='64420'>do</span> <span
  m='64550'>something</span> <span m='64890'>wrong</span> <span
  m='65250'>and</span> <span m='65350'>you</span> <span m='65430'>get</span>
  <span m='65590'>x</span> <span m='65900'>equals</span> <span
  m='66110'>100</span> <span m='66640'>and</span> <span m='66780'>then</span>
  <span m='66890'>you</span> <span m='66980'>come</span> <span
  m='67140'>back</span> <span m='67350'>and</span> <span m='67450'>look</span>
  <span m='67570'>at</span> <span m='67650'>the</span> <span
  m='67740'>curve,</span> <span m='68050'>you</span> <span
  m='68140'>realize</span> <span m='68530'>right</span> <span
  m='68710'>away,</span> <span m='68920'>well,</span> <span
  m='69060'>that</span> <span m='69200'>doesn't</span> <span
  m='69430'>make</span> <span m='69640'>any</span> <span m='69800'>sense.</span>
  <span m='70510'>So</span> <span m='70730'>we</span> <span
  m='70840'>want</span> <span m='70925'>to</span> <span m='71010'>always</span>
  <span m='71280'>be</span> <span m='71410'>thinking</span> <span
  m='71790'>as</span> <span m='71990'>we're</span> <span
  m='72110'>solving</span> <span m='72410'>the</span> <span
  m='72480'>problems,</span> <span m='72910'>does</span> <span
  m='73000'>my</span> <span m='73150'>answer</span> <span m='73450'>make</span>
  <span m='73640'>sense?</span> </p><p><span m='74610'>So</span> <span
  m='74780'>I'm</span> <span m='74910'>actually</span> <span
  m='75210'>going</span> <span m='75295'>to</span> <span m='75380'>give</span>
  <span m='75490'>you</span> <span m='75570'>a</span> <span
  m='75630'>little</span> <span m='75880'>bit</span> <span m='75990'>of</span>
  <span m='76080'>time</span> <span m='76330'>to</span> <span
  m='76420'>work</span> <span m='76630'>on</span> <span m='76750'>this</span>
  <span m='76890'>yourself</span> <span m='77720'>and</span> <span
  m='77910'>then</span> <span m='78060'>I'll</span> <span m='78160'>come</span>
  <span m='78350'>back</span> <span m='78820'>and</span> <span
  m='78980'>I'll</span> <span m='79220'>work</span> <span m='79410'>on</span>
  <span m='79570'>it</span> <span m='79690'>as</span> <span
  m='79770'>well.</span> </p><p><span m='89620'>Welcome</span> <span
  m='90010'>back.</span> <span m='90780'>Hopefully</span> <span
  m='91150'>you</span> <span m='91270'>were</span> <span m='91400'>able</span>
  <span m='91580'>to</span> <span m='91670'>get</span> <span
  m='91870'>pretty</span> <span m='92090'>far</span> <span m='92320'>into</span>
  <span m='92520'>this</span> <span m='92670'>problem.</span> <span
  m='93620'>And</span> <span m='94040'>so</span> <span m='94200'>I</span> <span
  m='94370'>will</span> <span m='94580'>start</span> <span
  m='95020'>working</span> <span m='95370'>on</span> <span m='95510'>it</span>
  <span m='95610'>now.</span> </p><p><span m='97180'>So</span> <span
  m='97650'>again,</span> <span m='97920'>the</span> <span
  m='97990'>question</span> <span m='98320'>is</span> <span
  m='98490'>that</span> <span m='98640'>we</span> <span m='98750'>want</span>
  <span m='98920'>to</span> <span m='99400'>optimize--</span> <span
  m='101440'>in</span> <span m='101590'>this</span> <span
  m='101750'>case,</span> <span m='101970'>minimize--</span> <span
  m='102670'>the</span> <span m='102770'>distance</span> <span
  m='103240'>to</span> <span m='103330'>the</span> <span
  m='103430'>origin</span> <span m='104330'>from</span> <span
  m='104660'>this</span> <span m='104840'>curve.</span> <span
  m='105620'>And</span> <span m='105870'>so</span> <span m='105990'>what</span>
  <span m='106170'>we're</span> <span m='106290'>really</span> <span
  m='106550'>trying</span> <span m='106780'>to</span> <span m='106880'>do</span>
  <span m='107100'>is</span> <span m='108320'>we</span> <span
  m='108530'>have</span> <span m='108730'>a</span> <span
  m='108800'>constraint,</span> <span m='109440'>the</span> <span
  m='109550'>constraint</span> <span m='110030'>is</span> <span
  m='110130'>we</span> <span m='110240'>have</span> <span m='110440'>to</span>
  <span m='110540'>be</span> <span m='110650'>on</span> <span
  m='110800'>the</span> <span m='110880'>curve,</span> <span
  m='111690'>and</span> <span m='112010'>then</span> <span m='112130'>we</span>
  <span m='112240'>also</span> <span m='112580'>have</span> <span
  m='114200'>something</span> <span m='114570'>we're</span> <span
  m='114680'>trying</span> <span m='115000'>to</span> <span
  m='115100'>minimize.</span> <span m='115660'>And</span> <span
  m='115820'>the</span> <span m='115890'>thing</span> <span
  m='116040'>we're</span> <span m='116140'>trying</span> <span
  m='116360'>to</span> <span m='116420'>minimize</span> <span
  m='116755'>is</span> <span m='117090'>distance.</span> <span m='117980'>And
  so</span> <span m='119040'>we</span> <span m='119160'>have</span> <span
  m='119300'>to</span> <span m='119390'>make</span> <span m='119550'>sure</span>
  <span m='119700'>that</span> <span m='119810'>we</span> <span
  m='119900'>understand</span> <span m='121460'>the</span> <span
  m='121660'>two</span> <span m='121870'>equations</span> <span
  m='122380'>that</span> <span m='122510'>we</span> <span
  m='122610'>need--</span> <span m='124160'>the optimization, or</span> <span
  m='124260'>the constraint</span> <span m='124700'>equation,</span> <span
  m='125150'>and</span> <span m='125270'>the</span> <span
  m='125390'>optimizing</span> <span m='125860'>equation.</span> </p><p><span
  m='126760'>So</span> <span m='126970'>to</span> <span
  m='127070'>optimize</span> <span m='127670'>we</span> <span
  m='127780'>need</span> <span m='127990'>to</span> <span m='128120'>know</span>
  <span m='128360'>how</span> <span m='128560'>to</span> <span
  m='128650'>measure</span> <span m='128910'>distance</span> <span
  m='130180'>in</span> <span m='130420'>two-dimensional</span> <span
  m='131000'>space.</span> <span m='131760'>And</span> <span
  m='132060'>one</span> <span m='132250'>point</span> <span m='132500'>I</span>
  <span m='132530'>want</span> <span m='132710'>to</span> <span
  m='132770'>make</span> <span m='133130'>is</span> <span m='133330'>that</span>
  <span m='133600'>if</span> <span m='133760'>you</span> <span m='133830'>want
  to</span> <span m='134080'>optimize</span> <span m='134530'>distance</span>
  <span m='135420'>you</span> <span m='135610'>might</span> <span
  m='135830'>as</span> <span m='135920'>well</span> <span
  m='136050'>optimize</span> <span m='136580'>the</span> <span
  m='136680'>square</span> <span m='137010'>of</span> <span
  m='137120'>distance</span> <span m='137560'>because</span> <span
  m='137780'>it's</span> <span m='137890'>much</span> <span
  m='138110'>easier.</span> <span m='138800'>So</span> <span
  m='139000'>let</span> <span m='139140'>me</span> <span
  m='139420'>justify</span> <span m='139980'>that</span> <span
  m='140230'>briefly</span> <span m='140900'>and</span> <span
  m='141080'>then</span> <span m='141220'>we'll</span> <span
  m='141370'>go</span> <span m='141520'>on.</span> </p><p><span
  m='141820'>So</span> <span m='141980'>I</span> <span m='142120'>want</span>
  <span m='142215'>to</span> <span m='142310'>optimize</span> <span
  m='142920'>the</span> <span m='143890'>distance</span> <span
  m='144370'>squared</span> <span m='145290'>to</span> <span
  m='145420'>the</span> <span m='145520'>origin.</span> <span m='147460'>It's,
  well distance,</span> <span m='147960'>you</span> <span
  m='148070'>remember,</span> <span m='148470'>first</span> <span
  m='148730'>in</span> <span m='148810'>general,</span> <span
  m='149410'>between</span> <span m='149810'>two</span> <span
  m='149970'>points</span> <span m='150470'>(x, y)</span> <span
  m='151940'>and</span> <span m='152060'>(a, b)</span> <span
  m='153650'>is</span> <span m='153930'>something</span> <span
  m='154380'>in</span> <span m='154560'>this</span> <span
  m='154760'>form.</span> <span m='157260'>Distance</span> <span
  m='157710'>squared</span> <span m='158260'>is</span> <span
  m='158590'>the</span> <span m='159070'>difference</span> <span
  m='159410'>between</span> <span m='159660'>the</span> <span
  m='159970'>x-value</span> <span m='160200'>squared</span> <span
  m='160690'>plus</span> <span m='160910'>the</span> <span
  m='161020'>difference</span> <span m='161310'>between</span> <span
  m='161550'>the</span> <span m='161750'>y-value</span> <span
  m='162010'>squared.</span> <span m='162660'>This is,</span> <span
  m='163260'>should</span> <span m='163420'>remind</span> <span
  m='163720'>you</span> <span m='163820'>of</span> <span m='164090'>the</span>
  <span m='164280'>Pythagorean</span> <span m='164790'>theorem,</span> <span
  m='165100'>ultimately.</span> </p><p><span m='166430'>So</span> <span
  m='167500'>in</span> <span m='167720'>this</span> <span
  m='167950'>case,</span> <span m='168350'>in</span> <span m='168540'>our</span>
  <span m='168860'>case,</span> <span m='169930'>distance</span> <span
  m='170940'>to</span> <span m='171070'>the</span> <span
  m='171160'>origin</span> <span m='171740'>is</span> <span m='172270'>x</span>
  <span m='172395'>squared</span> <span m='172520'>plus</span> <span
  m='172740'>y</span> <span m='172970'>squared.</span> <span
  m='173480'>The</span> <span m='173590'>distance</span> <span
  m='173950'>squared</span> <span m='174300'>is</span> <span m='174400'>x</span>
  <span m='174445'>squared</span> <span m='174740'>plus</span> <span
  m='174910'>y</span> <span m='175090'>squared.</span> <span m='176120'>I</span>
  <span m='176420'>just</span> <span m='176700'>told</span> <span
  m='176950'>you</span> <span m='177090'>that</span> <span
  m='177300'>instead</span> <span m='177720'>of</span> <span
  m='177830'>trying</span> <span m='178060'>to</span> <span
  m='178120'>optimize</span> <span m='178590'>distance,</span> <span
  m='179060'>we</span> <span m='179160'>can</span> <span
  m='179280'>optimize</span> <span m='179730'>distance</span> <span
  m='180140'>squared.</span> <span m='181080'>Why</span> <span
  m='181530'>is</span> <span m='181680'>that?</span> <span
  m='182340'>Well,</span> <span m='183060'>remember</span> <span
  m='183540'>that</span> <span m='183700'>when</span> <span
  m='183840'>you</span> <span m='183940'>optimize,</span> <span
  m='184470'>what</span> <span m='184610'>you're</span> <span
  m='184750'>looking</span> <span m='185100'>for</span> <span
  m='185350'>is</span> <span m='185510'>a</span> <span m='185570'>place</span>
  <span m='185840'>where</span> <span m='185940'>the</span> <span
  m='186030'>derivative</span> <span m='186630'>of</span> <span
  m='186760'>the</span> <span m='186850'>function</span> <span
  m='187550'>of</span> <span m='187730'>interest</span> <span
  m='188140'>is</span> <span m='188210'>equal</span> <span m='188450'>to</span>
  <span m='188530'>0.</span> <span m='189610'>So</span> <span
  m='190160'>what</span> <span m='190400'>I</span> <span m='190550'>want</span>
  <span m='190770'>to</span> <span m='190830'>point</span> <span
  m='191150'>out</span> <span m='191360'>is</span> <span m='191460'>that</span>
  <span m='191580'>when</span> <span m='191690'>you</span> <span
  m='191780'>take</span> <span m='192000'>the</span> <span
  m='192100'>derivative</span> <span m='192500'>of</span> <span
  m='192610'>distance</span> <span m='192960'>squared</span> <span
  m='194740'>and</span> <span m='194950'>find</span> <span
  m='195190'>where</span> <span m='195280'>that's</span> <span
  m='195540'>0,</span> <span m='195930'>it's</span> <span
  m='196070'>going</span> <span m='196160'>to</span> <span m='196250'>be</span>
  <span m='196330'>the</span> <span m='196470'>same</span> <span
  m='196720'>as</span> <span m='196810'>the</span> <span m='196880'>place</span>
  <span m='198430'>where</span> <span m='198640'>the</span> <span
  m='198760'>derivative</span> <span m='199015'>of</span> <span
  m='199270'>distance</span> <span m='199535'>is</span> <span
  m='199800'>equal</span> <span m='200070'>to</span> <span m='200247'>0.</span>
  </p><p><span m='200780'>So</span> <span m='200950'>let's</span> <span
  m='201170'>notice</span> <span m='201520'>that.</span> <span
  m='201790'>So</span> <span m='201930'>this</span> <span m='202090'>is</span>
  <span m='202170'>a</span> <span m='202240'>little</span> <span
  m='202480'>sidebar</span> <span m='205040'>justification.</span> <span
  m='209190'>Notice</span> <span m='209540'>d</span> <span
  m='209680'>squared</span> <span m='210000'>prime</span> <span
  m='210780'>is</span> <span m='210970'>equal</span> <span m='211270'>to</span>
  <span m='211390'>2d</span> <span m='212840'>d</span> <span
  m='213050'>prime.</span> <span m='214000'>Where</span> <span
  m='214230'>did</span> <span m='214360'>that</span> <span
  m='214550'>come</span> <span m='214740'>from?</span> <span m='215680'>That's
  this</span> <span m='215860'>is</span> <span m='216140'>implicit</span> <span
  m='216410'>differentiation</span> <span m='217300'>with</span> <span
  m='217440'>respect</span> <span m='217740'>to</span> <span m='218210'>x</span>
  <span m='218310'>and</span> <span m='218410'>this</span> <span
  m='218560'>is</span> <span m='218680'>the</span> <span m='218760'>chain</span>
  <span m='219040'>rule.</span> <span m='219880'>So</span> <span
  m='220130'>if</span> <span m='220210'>I</span> <span m='220360'>want</span>
  <span m='221230'>d</span> <span m='221520'>prime</span> <span
  m='221910'>to</span> <span m='222000'>equal</span> <span m='222330'>0,</span>
  <span m='223830'>I</span> <span m='223980'>can</span> <span
  m='224130'>also</span> <span m='224360'>find</span> <span
  m='224650'>where</span> <span m='224760'>d</span> <span
  m='224940'>squared</span> <span m='225270'>prime</span> <span
  m='225530'>equals</span> <span m='225840'>0.</span> <span
  m='226670'>I'm</span> <span m='226870'>assuming--</span> <span
  m='227320'>notice</span> <span m='227620'>the</span> <span
  m='227710'>distance</span> <span m='228140'>is</span> <span
  m='228280'>never</span> <span m='228590'>at</span> <span m='228780'>the</span>
  <span m='228870'>origin--</span> <span m='229370'>so</span> <span
  m='229490'>distance</span> <span m='229785'>is</span> <span
  m='230080'>never</span> <span m='230340'>0.</span> <span m='231320'>So</span>
  <span m='231530'>I</span> <span m='231590'>don't</span> <span
  m='231750'>have</span> <span m='231840'>to</span> <span
  m='231910'>worry</span> <span m='232130'>about</span> <span
  m='232370'>that.</span> <span m='232610'>So</span> <span
  m='232720'>that's</span> <span m='232830'>a</span> <span
  m='232940'>small</span> <span m='233280'>sidebar,</span> <span
  m='233550'>but</span> <span m='233900'>just</span> <span m='234110'>to</span>
  <span m='234190'>justify</span> <span m='234670'>why</span> <span
  m='234870'>we</span> <span m='235010'>can</span> <span m='235160'>do</span>
  <span m='235290'>that.</span> </p><p><span m='236820'>Now</span> <span
  m='236950'>let's</span> <span m='237140'>come</span> <span
  m='237320'>back</span> <span m='237540'>into</span> <span
  m='237860'>the</span> <span m='237970'>problem</span> <span
  m='238310'>at</span> <span m='238410'>hand.</span> </p><p><span
  m='239870'>What</span> <span m='240200'>is</span> <span m='240300'>our</span>
  <span m='240430'>optimization problem,</span> <span m='242440'>equation</span>
  <span m='244330'>that</span> <span m='244460'>we</span> <span
  m='244580'>want</span> <span m='244790'>to</span> <span
  m='245000'>minimize?</span> <span m='245610'>We</span> <span
  m='245710'>want</span> <span m='245805'>to</span> <span
  m='245900'>minimize</span> <span m='246420'>this</span> <span
  m='246610'>equation</span> <span m='248180'>with</span> <span
  m='248440'>respect</span> <span m='248860'>to</span> <span m='248970'>a</span>
  <span m='249040'>certain</span> <span m='249300'>constraint.</span> <span
  m='249840'>What's</span> <span m='250060'>the</span> <span
  m='250150'>constraint?</span> <span m='250740'>The</span> <span
  m='250830'>constraint</span> <span m='251360'>is</span> <span
  m='251480'>what</span> <span m='251690'>y</span> <span m='252090'>is.</span>
  <span m='252455'>y</span> <span m='252580'>depends</span> <span
  m='253970'>on</span> <span m='254280'>x.</span> <span m='255140'>And</span>
  <span m='255430'>so</span> <span m='255590'>when</span> <span
  m='255990'>I</span> <span m='256430'>solve</span> <span
  m='256850'>these</span> <span m='257040'>problems</span> <span
  m='257930'>I'm</span> <span m='258090'>going</span> <span m='258300'>to</span>
  <span m='258360'>have</span> <span m='258480'>to</span> <span
  m='258570'>substitute</span> <span m='259120'>in</span> <span
  m='260240'>my</span> <span m='260380'>constraint.</span> <span
  m='261550'>So</span> <span m='261760'>y</span> <span m='262080'>squared</span>
  <span m='263170'>is</span> <span m='263350'>the</span> <span
  m='263470'>square</span> <span m='263870'>root</span> <span
  m='263910'>of</span> <span m='263950'>x</span> <span m='264125'>plus</span>
  <span m='264300'>4</span> <span m='264600'>quantity</span> <span
  m='265050'>squared,</span> <span m='265980'>so</span> <span
  m='266240'>I</span> <span m='266320'>just</span> <span m='266550'>get</span>
  <span m='266680'>x</span> <span m='266840'>plus</span> <span
  m='267115'>4.</span> </p><p><span m='271080'>So</span> <span
  m='271760'>now</span> <span m='272630'>I</span> <span m='272850'>have</span>
  <span m='273250'>my</span> <span m='273390'>optimization</span> <span
  m='274130'>equation.</span> <span m='274940'>How</span> <span
  m='275150'>do</span> <span m='275250'>I</span> <span m='275370'>find</span>
  <span m='275740'>a</span> <span m='275780'>minimum</span> <span
  m='276130'>or</span> <span m='276220'>a</span> <span
  m='276290'>maximum?</span> <span m='277040'>I</span> <span
  m='277380'>take</span> <span m='277670'>the</span> <span
  m='277760'>derivative</span> <span m='278280'>and</span> <span
  m='278400'>set</span> <span m='278620'>it</span> <span m='278700'>equal</span>
  <span m='278950'>to</span> <span m='279030'>0.</span> <span
  m='280350'>So</span> <span m='280500'>let</span> <span m='280670'>me</span>
  <span m='280830'>come</span> <span m='281620'>give</span> <span
  m='281770'>myself</span> <span m='282150'>a</span> <span
  m='282200'>little</span> <span m='282380'>more</span> <span
  m='282540'>room</span> <span m='282770'>and</span> <span m='282870'>do</span>
  <span m='282970'>that</span> <span m='283160'>over</span> <span
  m='283360'>here.</span> <span m='285630'>So</span> <span m='285730'>d</span>
  <span m='285970'>squared</span> <span m='286180'>prime,</span> <span
  m='287730'>now</span> <span m='288390'>I</span> <span m='288630'>get</span>
  <span m='289260'>derivative</span> <span m='289620'>of</span> <span
  m='289720'>x</span> <span m='289910'>squared</span> <span m='290360'>is</span>
  <span m='290580'>2x.</span> <span m='292090'>The</span> <span
  m='292200'>derivative</span> <span m='292880'>of</span> <span
  m='293160'>x</span> <span m='293650'>is</span> <span m='293860'>1,</span>
  <span m='294650'>and</span> <span m='294820'>the</span> <span
  m='294910'>derivative</span> <span m='295070'>of</span> <span
  m='295360'>4</span> <span m='295565'>is</span> <span m='295770'>0.</span>
  <span m='297070'>This</span> <span m='297310'>will</span> <span
  m='297460'>be</span> <span m='297630'>optimized</span> <span
  m='298690'>when</span> <span m='299130'>this</span> <span m='299290'>is</span>
  <span m='299410'>equal</span> <span m='299660'>to</span> <span
  m='299730'>0.</span> <span m='300320'>So</span> <span m='300570'>0</span>
  <span m='301010'>equals</span> <span m='301350'>2x</span> <span
  m='301780'>plus</span> <span m='302030'>1.</span> <span m='303500'>So</span>
  <span m='303750'>x</span> <span m='304410'>is</span> <span
  m='304585'>equal</span> <span m='304760'>to</span> <span
  m='304880'>minus</span> <span m='305250'>1/2.</span> </p><p><span
  m='308110'>Does</span> <span m='308310'>this</span> <span
  m='309190'>pass,</span> <span m='309680'>as</span> <span m='309930'>we</span>
  <span m='310050'>would</span> <span m='310190'>say</span> <span
  m='310390'>maybe,</span> <span m='310660'>the</span> <span
  m='310770'>smell</span> <span m='311050'>test?</span> <span
  m='311520'>Does</span> <span m='311580'>it</span> <span
  m='311640'>smell</span> <span m='311990'>OK</span> <span m='312320'>to</span>
  <span m='312450'>us?</span> <span m='312750'>The</span> <span
  m='312920'>answer</span> <span m='313380'>will</span> <span
  m='313570'>be</span> <span m='314350'>yes.</span> <span
  m='314800'>Because</span> <span m='315200'>remember,</span> <span
  m='315670'>we</span> <span m='315800'>said</span> <span
  m='316420'>somewhere</span> <span m='317030'>in</span> <span
  m='317150'>this</span> <span m='317270'>x</span> <span
  m='317510'>region</span> <span m='317860'>is</span> <span
  m='317980'>where</span> <span m='318150'>we</span> <span
  m='318330'>expect</span> <span m='319350'>that</span> <span
  m='319490'>we</span> <span m='319590'>will</span> <span m='319720'>have</span>
  <span m='321520'>a distance closest,</span> <span m='321570'>point</span>
  <span m='321820'>closest</span> <span m='322170'>to</span> <span
  m='322260'>the</span> <span m='322340'>origin.</span> <span
  m='323080'>And</span> <span m='323330'>so</span> <span m='323460'>we're</span>
  <span m='323770'>right</span> <span m='324060'>here</span> <span
  m='324470'>on</span> <span m='324560'>the</span> <span m='324720'>x</span>
  <span m='324880'>value.</span> <span m='325260'>Now</span> <span
  m='325380'>we</span> <span m='325490'>have</span> <span m='325610'>to</span>
  <span m='325700'>find</span> <span m='325960'>what</span> <span
  m='326060'>the</span> <span m='326130'>y</span> <span m='326300'>value</span>
  <span m='326630'>is</span> <span m='326800'>to</span> <span
  m='326900'>finish</span> <span m='327140'>the</span> <span
  m='327230'>problem.</span> <span m='327970'>But</span> <span
  m='328670'>this</span> <span m='328900'>is</span> <span m='329020'>not,</span>
  <span m='329300'>so</span> <span m='329420'>far,</span> <span
  m='329730'>very</span> <span m='329950'>surprising.</span> <span
  m='330450'>It</span> <span m='330530'>seems</span> <span
  m='330790'>like</span> <span m='330930'>maybe</span> <span
  m='331190'>the</span> <span m='331300'>right</span> <span
  m='331530'>thing.</span> </p><p><span m='332990'>Now</span> <span
  m='333190'>we</span> <span m='333300'>have</span> <span m='333460'>x.</span>
  <span m='333850'>So</span> <span m='333945'>now</span> <span
  m='334040'>how</span> <span m='334160'>do</span> <span m='334240'>we</span>
  <span m='334340'>find</span> <span m='334680'>y?</span> <span
  m='335160'>Well,</span> <span m='335340'>we</span> <span
  m='335460'>know</span> <span m='335580'>what</span> <span m='335730'>y</span>
  <span m='336060'>is.</span> <span m='336470'>y</span> <span
  m='336520'>is</span> <span m='336570'>equal</span> <span m='336810'>to</span>
  <span m='336890'>the</span> <span m='336980'>square</span> <span
  m='337270'>root</span> <span m='338430'>of</span> <span m='338645'>x</span>
  <span m='338860'>plus</span> <span m='339080'>4,</span> <span
  m='339600'>so</span> <span m='339680'>it's</span> <span
  m='339770'>equal</span> <span m='339800'>to</span> <span m='339830'>the</span>
  <span m='339900'>square root</span> <span m='340220'>of</span> <span
  m='340300'>negative</span> <span m='340630'>1/2</span> <span
  m='341710'>plus</span> <span m='342220'>4,</span> <span
  m='343820'>which</span> <span m='344070'>simplified</span> <span
  m='345220'>is</span> <span m='345500'>3</span> <span m='345750'>and</span>
  <span m='345840'>1/2,</span> <span m='346240'>which</span> <span
  m='346410'>I</span> <span m='346510'>think</span> <span m='347980'>is</span>
  <span m='348230'>7/2.</span> <span m='350270'>So</span> <span
  m='350460'>the</span> <span m='350560'>point</span> <span m='351650'>is</span>
  <span m='351780'>negative</span> <span m='352160'>1/2</span> <span
  m='353560'>comma</span> <span m='354000'>square</span> <span
  m='354330'>root</span> <span m='355310'>of</span> <span m='355440'>7/2.</span>
  </p><p><span m='357610'>And</span> <span m='357930'>then</span> <span
  m='358060'>you</span> <span m='358160'>just</span> <span
  m='358350'>want</span> <span m='358435'>to</span> <span
  m='358520'>double</span> <span m='358740'>check</span> <span
  m='359000'>and</span> <span m='359100'>make</span> <span
  m='359230'>sure,</span> <span m='359910'>did</span> <span m='360050'>I</span>
  <span m='360120'>ask</span> <span m='360420'>for</span> <span
  m='360520'>the</span> <span m='360620'>distance</span> <span
  m='361030'>or</span> <span m='361075'>did</span> <span m='361120'>I</span>
  <span m='361250'>ask</span> <span m='361570'>for</span> <span
  m='361650'>the</span> <span m='361740'>point?</span> <span
  m='362530'>And</span> <span m='363210'>right</span> <span
  m='363480'>now</span> <span m='363630'>we</span> <span m='363730'>have</span>
  <span m='363880'>the</span> <span m='363960'>point,</span> <span
  m='364310'>so</span> <span m='364500'>let's</span> <span
  m='364620'>come</span> <span m='364790'>over</span> <span
  m='365020'>and</span> <span m='365130'>make</span> <span
  m='365270'>sure</span> <span m='366060'>what</span> <span
  m='366420'>point</span> <span m='366800'>on</span> <span m='366940'>the</span>
  <span m='367030'>curve</span> <span m='367430'>comes</span> <span
  m='367680'>closest</span> <span m='367960'>to</span> <span
  m='368070'>the</span> <span m='368170'>origin.</span> <span
  m='368740'>So</span> <span m='368890'>now</span> <span m='369080'>we</span>
  <span m='369210'>know</span> <span m='369940'>that</span> <span
  m='370080'>we've</span> <span m='370250'>answered</span> <span
  m='370710'>the</span> <span m='370880'>correct</span> <span
  m='371240'>question.</span> </p><p><span m='372550'>So</span> <span
  m='372740'>again,</span> <span m='373030'>it</span> <span
  m='373090'>was</span> <span m='373200'>a</span> <span
  m='373650'>maximize--</span> <span m='374980'>sorry,</span> <span
  m='375210'>it</span> <span m='375270'>was</span> <span m='375330'>a</span>
  <span m='375380'>minimizing</span> <span m='375960'>problem.</span> <span
  m='376320'>It</span> <span m='376385'>was</span> <span m='376450'>an</span>
  <span m='376660'>optimization</span> <span m='377200'>problem</span> <span
  m='377420'>where</span> <span m='377540'>we</span> <span
  m='377580'>wanted</span> <span m='377820'>to</span> <span
  m='377910'>minimize</span> <span m='378350'>distance.</span> <span
  m='379430'>We</span> <span m='379620'>had</span> <span m='379750'>a</span>
  <span m='379790'>constraint</span> <span m='380230'>equation.</span> <span
  m='381060'>We</span> <span m='381510'>had</span> <span m='381670'>the</span>
  <span m='381790'>thing</span> <span m='381940'>we</span> <span
  m='382040'>wanted</span> <span m='382290'>to</span> <span
  m='382380'>minimize.</span> <span m='383810'>And</span> <span
  m='383900'>then</span> <span m='384000'>we</span> <span m='384120'>took</span>
  <span m='384300'>the</span> <span m='384390'>derivative</span> <span
  m='384830'>of</span> <span m='384940'>the</span> <span
  m='385020'>minimizer,</span> <span m='385490'>set</span> <span
  m='385760'>it--</span> <span m='387330'>of the</span> <span
  m='387450'>optimizing</span> <span m='388030'>equation,</span> <span
  m='388470'>set</span> <span m='388670'>it</span> <span m='388740'>equal</span>
  <span m='389020'>to</span> <span m='389070'>0,</span> <span
  m='389620'>solved</span> <span m='389865'>for</span> <span
  m='390110'>x,</span> <span m='391140'>and</span> <span m='391350'>then</span>
  <span m='392390'>found</span> <span m='392740'>the</span> <span
  m='392850'>answer</span> <span m='393150'>to</span> <span
  m='393280'>the</span> <span m='393390'>specific</span> <span
  m='393890'>question</span> <span m='394750'>by</span> <span
  m='394870'>then</span> <span m='395080'>finding</span> <span
  m='395480'>the</span> <span m='395750'>y-value.</span> </p><p><span
  m='397040'>And</span> <span m='397180'>I</span> <span m='397220'>think</span>
  <span m='397380'>I'll</span> <span m='397470'>stop</span> <span
  m='397680'>there.</span> </p>
embedded_media:
  - uid: b1d93dec34687362fe37a4fa10ac8f4b
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: '-CsEPYeSBsg'
  - uid: d73df75050670ae5dc1b366deaab2b3f
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/-CsEPYeSBsg/default.jpg'
  - uid: 722c8d086effcab3b296a6cd84331522
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/closest-point-to-the-origin/id414308064?i=90318981
  - uid: 6897fb88cfdd0d25bec09243a54dc70c
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_20_300k.mp4'
  - uid: b947b092f5c39b1a1200ae7ebc83ff2a
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: '-CsEPYeSBsg'
  - uid: 5b02cf84ce2ca85b31359273ec8b08d2
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: '-CsEPYeSBsg.srt'
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/session-29-optimization-problems/closest-point-to-the-origin/-CsEPYeSBsg.srt
  - uid: 82ed9bb7ad3878b0bee19aafa129a4b9
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: '-CsEPYeSBsg.pdf'
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-b-optimization-related-rates-and-newtons-method/session-29-optimization-problems/closest-point-to-the-origin/-CsEPYeSBsg.pdf
  - uid: 2ff07f7a5692764e9dc83eb8b36ace49
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 6c803a5ec7be9afd3ff08d8e81944781
    parent_uid: 976a797d57af2668b28963fbffe0e36b
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
