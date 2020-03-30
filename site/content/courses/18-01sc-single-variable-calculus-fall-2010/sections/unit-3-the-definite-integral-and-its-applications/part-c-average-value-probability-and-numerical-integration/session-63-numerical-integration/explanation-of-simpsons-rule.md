---
title: Explanation of Simpson's Rule
uid: 3f93839d9f460a25b64b99e79eaadd7f
parent_uid: be07f2bde3305a676f66884dbf8397d1
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-c-average-value-probability-and-numerical-integration/session-63-numerical-integration/explanation-of-simpsons-rule
short_url: explanation-of-simpsons-rule
inline_embed_id: 21642421explanationofsimpson'srule90305915
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>CHRISTINE BREINER:</span> <span m='7160'>Welcome</span> <span
  m='7540'>back</span> <span m='7700'>to</span> <span
  m='7780'>recitation.</span> <span m='8960'>In</span> <span
  m='9140'>this</span> <span m='9260'>video</span> <span m='9530'>I</span> <span
  m='9600'>want</span> <span m='9790'>to</span> <span m='9860'>explain</span>
  <span m='10360'>to</span> <span m='10500'>you</span> <span
  m='11120'>where</span> <span m='11920'>the</span> <span
  m='12430'>coefficients</span> <span m='12840'>we</span> <span
  m='13000'>saw</span> <span m='13400'>in Simpson's</span> <span
  m='14000'>rule</span> <span m='14310'>actually</span> <span
  m='14800'>come</span> <span m='15050'>from.</span> <span m='16010'>So
  what</span> <span m='16170'>I'm</span> <span m='16300'>going</span> <span
  m='16530'>to</span> <span m='16640'>do</span> <span m='16950'>is</span> <span
  m='17240'>take</span> <span m='17540'>this</span> <span m='18460'>curve</span>
  <span m='18860'>that</span> <span m='18980'>I</span> <span
  m='19070'>have</span> <span m='19620'>and</span> <span m='20070'>show</span>
  <span m='20340'>you</span> <span m='20470'>what</span> <span
  m='20700'>the</span> <span m='20970'>picture</span> <span m='21510'>of</span>
  <span m='21630'>Simpson's</span> <span m='22010'>rule</span> <span
  m='22220'>does.</span> <span m='22970'>And</span> <span m='23120'>then</span>
  <span m='23220'>I'm</span> <span m='23310'>actually</span> <span
  m='23610'>going</span> <span m='23880'>to</span> <span
  m='24260'>determine</span> <span m='24830'>explicitly</span> <span
  m='26010'>where</span> <span m='26570'>the</span> <span
  m='26940'>coefficients</span> <span m='27280'>come</span> <span
  m='27480'>from.</span> </p><p><span m='28300'>So let's</span> <span
  m='28470'>look</span> <span m='28610'>at</span> <span m='28690'>this</span>
  <span m='28910'>picture</span> <span m='29210'>first.</span> <span
  m='30570'>The</span> <span m='30670'>picture</span> <span m='30930'>I</span>
  <span m='31030'>have</span> <span m='31240'>here,</span> <span
  m='33140'>the</span> <span m='33230'>white</span> <span m='33440'>curve</span>
  <span m='33720'>is</span> <span m='33810'>going</span> <span
  m='34040'>to</span> <span m='34140'>be</span> <span m='34910'>my</span> <span
  m='35360'>y equals</span> <span m='35810'>f of x</span> <span
  m='37640'>function.</span> <span m='39600'>And so, if you remember,</span>
  <span m='40030'>what</span> <span m='40260'>Simpson's</span> <span
  m='40690'>rule</span> <span m='40950'>is</span> <span m='41150'>saying,</span>
  <span m='41450'>you</span> <span m='41530'>have</span> <span
  m='41690'>to</span> <span m='41770'>have</span> <span m='44120'>two</span>
  <span m='44350'>delta</span> <span m='44540'>x's.</span> <span
  m='45270'>So</span> <span m='45460'>in</span> <span m='45540'>this</span>
  <span m='45710'>case</span> <span m='46560'>h is</span> <span
  m='46980'>equal</span> <span m='47230'>to</span> <span m='47520'>delta
  x.</span> <span m='48610'>So what</span> <span m='48780'>Simpson's</span>
  <span m='49160'>rule</span> <span m='49340'>is</span> <span
  m='49500'>saying</span> <span m='49900'>is</span> <span m='50050'>I</span>
  <span m='50130'>can</span> <span m='50350'>find,</span> <span
  m='50870'>approximate,</span> <span m='52230'>the</span> <span
  m='52410'>area</span> <span m='52790'>under</span> <span m='53040'>this</span>
  <span m='53290'>curve</span> <span m='53650'>from</span> <span
  m='53840'>minus</span> <span m='54310'>h</span> <span m='54710'>to</span>
  <span m='54880'>h</span> <span m='55860'>by</span> <span m='56620'>a</span>
  <span m='56740'>certain</span> <span m='57020'>expression.</span> <span
  m='57680'>And the</span> <span m='57790'>expression</span> <span
  m='58390'>is,</span> <span m='60210'>I said</span> <span m='60570'>delta x
  is</span> <span m='61070'>equal to</span> <span m='61390'>h, so</span> <span
  m='61650'>let</span> <span m='61820'>me</span> <span m='61910'>write</span>
  <span m='62160'>h</span> <span m='62510'>over</span> <span m='62810'>3</span>
  <span m='64370'>times</span> <span m='64640'>y_0</span> <span
  m='65990'>plus</span> <span m='66270'>4*y_1</span> <span m='66600'>plus</span>
  <span m='68340'>y_2--</span> <span m='68580'>oh,</span> <span
  m='69073'>y_2.</span> <span m='72212'>So</span> <span m='72693'>that's</span>
  <span m='73174'>what</span> <span m='73655'>you</span> <span
  m='74140'>got--</span> </p><p><span m='75110'>that's what</span> <span
  m='75400'>you</span> <span m='75540'>saw</span> <span m='75930'>in</span>
  <span m='76070'>the</span> <span m='76160'>lecture,</span> <span
  m='76490'>that</span> <span m='76640'>this</span> <span m='76800'>is</span>
  <span m='77250'>what</span> <span m='77400'>the</span> <span
  m='77500'>coefficients</span> <span m='78040'>are.</span> <span m='78850'>So
  I</span> <span m='78980'>want to</span> <span m='79130'>explain</span> <span
  m='79570'>why</span> <span m='79720'>this is</span> <span m='79950'>a</span>
  <span m='80020'>1,</span> <span m='80350'>why</span> <span
  m='80510'>that's</span> <span m='80660'>a</span> <span m='80750'>4,</span>
  <span m='80980'>why that's</span> <span m='81240'>a</span> <span
  m='81330'>1,</span> <span m='81720'>and</span> <span m='81840'>where</span>
  <span m='81960'>that</span> <span m='82120'>3</span> <span
  m='82290'>comes</span> <span m='82550'>from.</span> <span m='83140'>The</span>
  <span m='83240'>picture is</span> <span m='83550'>not</span> <span
  m='83740'>going</span> <span m='83910'>to</span> <span
  m='84000'>explain</span> <span m='84410'>it,</span> <span m='84540'>but</span>
  <span m='84660'>the</span> <span m='84740'>picture</span> <span
  m='85060'>will</span> <span m='85170'>help</span> <span m='85380'>us</span>
  <span m='85550'>understand</span> <span m='86610'>how</span> <span
  m='86790'>to</span> <span m='86900'>go.</span> </p><p><span
  m='87740'>So</span> <span m='87940'>what</span> <span
  m='88130'>Simpson's</span> <span m='88610'>rule</span> <span
  m='88890'>does</span> <span m='90330'>is</span> <span m='90540'>it</span>
  <span m='90740'>takes</span> <span m='91480'>those</span> <span
  m='91760'>three</span> <span m='92790'>points,</span> <span m='94530'>so
  the</span> <span m='94700'>(x_0, y_0)</span> <span m='96140'>the</span> <span
  m='96460'>(x_1, y_1)</span> <span m='97295'>and</span> <span
  m='97690'>the</span> <span m='97820'>(x_2,</span> <span m='98220'>y_2)</span>
  <span m='99170'>that</span> <span m='99340'>are</span> <span
  m='99430'>on</span> <span m='99680'>the</span> <span m='100640'>curve</span>
  <span m='100900'>y equals</span> <span m='101170'>f of x.</span> <span
  m='102370'>And</span> <span m='102660'>it</span> <span m='102810'>finds</span>
  <span m='103850'>a</span> <span m='104060'>parabola</span> <span
  m='104630'>through</span> <span m='104810'>those</span> <span
  m='105000'>three</span> <span m='105210'>points.</span> <span
  m='105860'>So</span> <span m='106060'>I'm</span> <span m='106120'>going</span>
  <span m='106240'>to</span> <span m='106320'>do</span> <span
  m='106460'>my</span> <span m='106640'>best</span> <span m='107430'>to</span>
  <span m='107550'>draw</span> <span m='108030'>what</span> <span
  m='108220'>looks</span> <span m='108470'>like</span> <span m='108730'>a</span>
  <span m='108990'>parabola</span> <span m='109590'>through</span> <span
  m='109770'>those</span> <span m='109990'>three</span> <span
  m='110190'>points.</span> <span m='112140'>Something-- I'll</span> <span
  m='112270'>draw it</span> <span m='112510'>lightly</span> <span
  m='112840'>first</span> <span m='113280'>and</span> <span
  m='113390'>then</span> <span m='113500'>I'll</span> <span m='114350'>fill
  it</span> <span m='114640'>in.</span> <span m='115870'>Something</span> <span
  m='116270'>along</span> <span m='118840'>these</span> <span
  m='119100'>lines.</span> <span m='121610'>Something</span> <span
  m='121900'>like</span> <span m='122080'>that.</span> <span
  m='122560'>That's</span> <span m='122750'>a,</span> <span
  m='124180'>sort</span> <span m='124520'>of</span> <span
  m='124630'>looks</span> <span m='124840'>like</span> <span m='125000'>a</span>
  <span m='125080'>parabola.</span> </p><p><span m='126610'>And so the</span>
  <span m='126750'>idea</span> <span m='127290'>is</span> <span
  m='127480'>Simpson's</span> <span m='127960'>rule</span> <span
  m='129260'>is</span> <span m='129450'>saying</span> <span m='129890'>I</span>
  <span m='130050'>can</span> <span m='130260'>find</span> <span
  m='130650'>the</span> <span m='130790'>area</span> <span
  m='132040'>under</span> <span m='132650'>the</span> <span
  m='132870'>blue</span> <span m='133180'>curve.</span> <span m='134920'>So
  I</span> <span m='135020'>can</span> <span m='135180'>find</span> <span
  m='135380'>the</span> <span m='135450'>area</span> <span
  m='135750'>under</span> <span m='135920'>the</span> <span
  m='136030'>blue</span> <span m='136250'>curve.</span> <span m='139950'>So
  this</span> <span m='140180'>is</span> <span m='140290'>a</span> <span
  m='140380'>function,</span> <span m='140740'>we'll</span> <span
  m='140860'>call</span> <span m='141080'>this</span> <span m='141630'>y</span>
  <span m='142080'>equal</span> <span m='142470'>P of x.</span> <span
  m='146010'>And that's</span> <span m='146230'>what</span> <span
  m='146700'>you</span> <span m='146880'>were</span> <span
  m='147020'>actually</span> <span m='147370'>told</span> <span
  m='147640'>about</span> <span m='148000'>in</span> <span
  m='148680'>lecture.</span> <span m='149130'>That</span> <span
  m='149710'>you're</span> <span m='150000'>approximating</span> <span
  m='150930'>your</span> <span m='151070'>function</span> <span m='151460'>y
  equals</span> <span m='151840'>f</span> <span m='151970'>of</span> <span
  m='152080'>x</span> <span m='152940'>by</span> <span m='153250'>a</span> <span
  m='153370'>quadratic</span> <span m='153980'>function</span> <span
  m='154500'>that</span> <span m='154610'>goes</span> <span
  m='154890'>through</span> <span m='156250'>the</span> <span
  m='156460'>values</span> <span m='157830'>(x_0, y_0),</span> <span
  m='158700'>(x_1, y_1),</span> <span m='159020'>and</span> <span
  m='159240'>(x_2, y_2).</span> <span m='161160'>And</span> <span
  m='161320'>then</span> <span m='161450'>you</span> <span
  m='161570'>find</span> <span m='161920'>the</span> <span
  m='162010'>area</span> <span m='162910'>under</span> <span
  m='163250'>that</span> <span m='164280'>parabola.</span> <span
  m='165750'>Between</span> <span m='166140'>minus</span> <span
  m='166470'>h</span> <span m='166780'>and</span> <span m='166890'>h.</span>
  </p><p><span m='167990'>Now</span> <span m='168170'>this</span> <span
  m='168410'>picture,</span> <span m='168810'>you</span> <span
  m='168960'>might</span> <span m='169200'>say,</span> <span
  m='169450'>Christine,</span> <span m='169890'>this</span> <span
  m='170030'>looks</span> <span m='170200'>really</span> <span
  m='170630'>like</span> <span m='170830'>a</span> <span m='170910'>bad</span>
  <span m='171320'>estimate.</span> <span m='171830'>This</span> <span
  m='171990'>looks</span> <span m='172150'>kind</span> <span
  m='172330'>of</span> <span m='172420'>stupid.</span> <span
  m='172890'>Maybe</span> <span m='173160'>you</span> <span
  m='173260'>should</span> <span m='173440'>have</span> <span
  m='173580'>picked</span> <span m='173830'>a</span> <span
  m='173890'>different</span> <span m='174250'>function to</span> <span
  m='174650'>estimate</span> <span m='175210'>this.</span> <span m='176790'>And
  I</span> <span m='176940'>did</span> <span m='177200'>this</span> <span
  m='177430'>one</span> <span m='177720'>because</span> <span
  m='177950'>I</span> <span m='178020'>wanted</span> <span m='178300'>to</span>
  <span m='178400'>be</span> <span m='178880'>zoomed</span> <span
  m='179180'>out</span> <span m='179560'>far</span> <span m='179940'>and</span>
  <span m='180060'>to</span> <span m='180160'>show</span> <span
  m='180350'>you,</span> <span m='181330'>to</span> <span m='181470'>give</span>
  <span m='181600'>you</span> <span m='181690'>a</span> <span
  m='181740'>little</span> <span m='181930'>intuition</span> <span
  m='182320'>about</span> <span m='182490'>what</span> <span
  m='182650'>happens</span> <span m='183250'>when</span> <span
  m='183440'>we</span> <span m='183540'>make</span> <span m='183810'>h</span>
  <span m='184080'>smaller.</span> <span m='185190'>Notice</span> <span
  m='185570'>that</span> <span m='185690'>if</span> <span m='185800'>I</span>
  <span m='185890'>cut</span> <span m='186130'>the</span> <span
  m='186250'>size</span> <span m='186520'>of</span> <span m='186600'>h</span>
  <span m='186810'>in</span> <span m='186930'>half,</span> <span
  m='187290'>so</span> <span m='187450'>if</span> <span m='187550'>I</span>
  <span m='187660'>started</span> <span m='188100'>with</span> <span
  m='188350'>here</span> <span m='188830'>was</span> <span
  m='189000'>minus</span> <span m='189300'>h</span> <span m='189570'>to</span>
  <span m='189680'>h,</span> <span m='190540'>what</span> <span
  m='190780'>would</span> <span m='190880'>my</span> <span
  m='191030'>three</span> <span m='191240'>points</span> <span
  m='191640'>be?</span> <span m='192540'>My</span> <span m='192720'>three</span>
  <span m='192920'>points</span> <span m='193260'>would</span> <span
  m='193390'>be</span> <span m='194260'>this</span> <span
  m='194470'>point,</span> <span m='195220'>y_1,</span> <span
  m='196120'>and</span> <span m='196370'>y_2</span> <span
  m='196750'>would</span> <span m='196870'>be</span> <span
  m='196960'>right</span> <span m='197180'>here.</span> <span
  m='197920'>Well</span> <span m='198240'>the</span> <span
  m='198300'>quadratic</span> <span m='198860'>through</span> <span
  m='199060'>those</span> <span m='199340'>points</span> <span
  m='199660'>is</span> <span m='199770'>much</span> <span
  m='200020'>closer</span> <span m='200860'>to</span> <span
  m='200990'>the</span> <span m='201090'>actual</span> <span
  m='201450'>function.</span> </p><p><span m='202870'>And if</span> <span
  m='202970'>I</span> <span m='203060'>cut</span> <span m='203300'>that</span>
  <span m='203500'>in</span> <span m='203600'>half</span> <span
  m='203810'>again,</span> <span m='204780'>I'd</span> <span
  m='204990'>have</span> <span m='205200'>points</span> <span
  m='205520'>here,</span> <span m='206460'>here,</span> <span
  m='206940'>and</span> <span m='207090'>here.</span> <span
  m='207890'>Something</span> <span m='208240'>like</span> <span
  m='208390'>that,</span> <span m='208610'>and</span> <span
  m='209140'>that</span> <span m='209420'>starts</span> <span
  m='209730'>to</span> <span m='209830'>look</span> <span
  m='210000'>almost</span> <span m='210330'>exactly</span> <span
  m='210790'>like</span> <span m='210960'>a</span> <span
  m='211010'>quadratic.</span> <span m='211660'>So</span> <span
  m='211850'>if</span> <span m='211970'>I</span> <span m='212120'>found</span>
  <span m='212940'>the</span> <span m='213100'>area</span> <span
  m='213510'>under this--</span> <span m='215270'>or if I</span> <span
  m='215830'>wanted</span> <span m='216080'>to</span> <span
  m='216140'>estimate</span> <span m='216290'>the</span> <span
  m='216410'>area</span> <span m='216680'>under</span> <span
  m='216900'>this</span> <span m='217170'>piece</span> <span
  m='217440'>of</span> <span m='217560'>the</span> <span m='217650'>curve</span>
  <span m='218630'>using</span> <span m='219070'>a</span> <span
  m='219130'>quadratic</span> <span m='219690'>through</span> <span
  m='219870'>those</span> <span m='220110'>three</span> <span
  m='220300'>points,</span> <span m='221170'>they</span> <span
  m='221310'>would</span> <span m='221400'>be</span> <span
  m='221490'>very</span> <span m='221820'>close.</span> <span m='223280'>So
  don't</span> <span m='223590'>be</span> <span m='223720'>alarmed</span> <span
  m='224690'>by</span> <span m='224950'>Simpson's</span> <span
  m='225430'>rule</span> <span m='225680'>as</span> <span m='225800'>an</span>
  <span m='225880'>approximation</span> <span m='227210'>based</span> <span
  m='227540'>on</span> <span m='227710'>this</span> <span
  m='228220'>large</span> <span m='228610'>picture.</span> </p><p><span
  m='230500'>So now,</span> <span m='230630'>what</span> <span
  m='230760'>do</span> <span m='230820'>we</span> <span m='230880'>have</span>
  <span m='230970'>to</span> <span m='231070'>do?</span> <span
  m='231620'>Remember,</span> <span m='232120'>what's</span> <span
  m='232260'>our</span> <span m='232390'>goal?</span> <span
  m='232690'>Our</span> <span m='232810'>goal is</span> <span
  m='233090'>to</span> <span m='233180'>figure</span> <span
  m='233410'>out</span> <span m='233490'>where</span> <span
  m='233580'>the</span> <span m='233650'>coefficients</span> <span
  m='234170'>come</span> <span m='234370'>from.</span> <span m='235280'>So
  what</span> <span m='235380'>I</span> <span m='235420'>actually</span> <span
  m='235900'>need</span> <span m='236070'>to</span> <span m='236160'>do</span>
  <span m='236500'>is</span> <span m='236660'>I</span> <span
  m='236760'>need</span> <span m='236970'>to</span> <span
  m='237110'>evaluate</span> <span m='238130'>a</span> <span
  m='238300'>certain</span> <span m='239350'>integral.</span> <span
  m='239870'>Or</span> <span m='240020'>I</span> <span m='240100'>need</span>
  <span m='240280'>to</span> <span m='241080'>integrate a</span> <span
  m='241500'>certain</span> <span m='241790'>function.</span> <span
  m='242220'>I</span> <span m='242260'>need</span> <span m='242430'>to</span>
  <span m='242510'>integrate</span> <span m='242890'>P</span> <span
  m='243060'>of</span> <span m='243130'>x.</span> <span m='244650'>So
  what</span> <span m='244760'>I'm</span> <span m='244860'>going to</span> <span
  m='245030'>be</span> <span m='245120'>finding</span> <span
  m='245670'>through</span> <span m='245820'>the</span> <span
  m='245900'>rest</span> <span m='246210'>of</span> <span m='246320'>this</span>
  <span m='246730'>video,</span> <span m='248220'>is</span> <span
  m='248410'>the</span> <span m='248530'>integral</span> <span
  m='248820'>from</span> <span m='248950'>minus</span> <span m='249160'>h</span>
  <span m='249250'>to</span> <span m='249480'>h</span> <span
  m='250310'>of</span> <span m='250450'>P of x</span> <span
  m='250730'>dx.</span> <span m='253310'>And my</span> <span
  m='253430'>goal</span> <span m='253890'>is</span> <span m='254030'>to</span>
  <span m='254140'>show</span> <span m='255070'>that</span> <span
  m='255340'>this</span> <span m='255560'>integral</span> <span
  m='256570'>is</span> <span m='256750'>equal</span> <span m='256970'>to</span>
  <span m='257050'>this</span> <span m='257200'>expression.</span> <span
  m='257840'>I</span> <span m='258020'>want to</span> <span
  m='258230'>show</span> <span m='258470'>that</span> <span
  m='259280'>these</span> <span m='259450'>are</span> <span
  m='259550'>equal.</span> <span m='260390'>That's my</span> <span
  m='260540'>goal.</span> </p><p><span m='264270'>So let's</span> <span
  m='264430'>get</span> <span m='264590'>down</span> <span m='264820'>to</span>
  <span m='264990'>it.</span> <span m='266310'>What</span> <span
  m='266430'>do</span> <span m='266510'>I</span> <span m='266630'>know?</span>
  <span m='266930'>What's</span> <span m='267070'>the</span> <span
  m='267170'>only</span> <span m='267410'>thing</span> <span m='267580'>I</span>
  <span m='267660'>know</span> <span m='268430'>right</span> <span
  m='268730'>away</span> <span m='268960'>about</span> <span m='269240'>P of
  x?</span> <span m='269780'>I</span> <span m='269950'>know</span> <span
  m='270130'>I'm</span> <span m='270290'>choosing</span> <span
  m='270610'>it</span> <span m='270690'>to</span> <span m='270770'>be</span>
  <span m='270920'>a quadratic</span> <span m='271460'>function</span> <span
  m='272270'>and</span> <span m='272500'>I</span> <span m='272550'>know</span>
  <span m='272760'>it</span> <span m='272860'>goes</span> <span
  m='273150'>through</span> <span m='273370'>three</span> <span
  m='273610'>certain</span> <span m='273970'>points. Right?</span> <span
  m='275390'>I'll</span> <span m='275850'>write</span> <span
  m='276100'>down</span> <span m='276640'>what</span> <span
  m='276830'>the</span> <span m='276930'>three</span> <span
  m='277110'>points</span> <span m='277440'>are</span> <span
  m='278180'>when</span> <span m='278420'>we</span> <span m='278540'>need</span>
  <span m='278770'>them.</span> <span m='279210'>But</span> <span
  m='279410'>first</span> <span m='279700'>let's</span> <span
  m='279870'>just</span> <span m='280100'>say,</span> <span m='280350'>in</span>
  <span m='280500'>general,</span> <span m='281330'>let's</span> <span
  m='281640'>take</span> <span m='282930'>this</span> <span
  m='283070'>integral</span> <span m='283420'>for</span> <span
  m='283600'>a</span> <span m='283690'>general</span> <span
  m='284090'>quadratic</span> <span m='285010'>and</span> <span
  m='285230'>see</span> <span m='285390'>how</span> <span m='285510'>much</span>
  <span m='285710'>information</span> <span m='286220'>we</span> <span
  m='286330'>actually</span> <span m='286800'>need.</span> </p><p><span
  m='287690'>So let</span> <span m='287830'>me</span> <span
  m='287920'>come</span> <span m='288090'>over</span> <span
  m='288300'>here.</span> <span m='290940'>Actually,</span> <span
  m='291280'>let</span> <span m='291370'>me</span> <span m='291470'>say</span>
  <span m='291620'>first,</span> <span m='292420'>what</span> <span
  m='292720'>do</span> <span m='292780'>I</span> <span m='292870'>mean</span>
  <span m='293060'>my</span> <span m='293160'>general</span> <span
  m='293530'>quadratic?</span> <span m='295400'>I</span> <span
  m='295580'>mean</span> <span m='296130'>something</span> <span
  m='296490'>of</span> <span m='296590'>the</span> <span m='296670'>form big A,
  capital</span> <span m='296945'>A,</span> <span m='297220'>x</span> <span
  m='297460'>squared</span> <span m='299290'>plus</span> <span
  m='299350'>B*x</span> <span m='299640'>plus</span> <span m='301130'>C.</span>
  <span m='301660'>So</span> <span m='301840'>I'm</span> <span
  m='301940'>not</span> <span m='302120'>filling</span> <span
  m='302440'>in</span> <span m='302590'>values</span> <span
  m='302990'>for</span> <span m='303120'>these</span> <span
  m='303910'>coefficients</span> <span m='304080'>yet.</span> <span
  m='304950'>Those</span> <span m='305130'>coefficients</span> <span
  m='305660'>are</span> <span m='305730'>coming</span> <span
  m='306030'>exactly</span> <span m='306780'>from</span> <span
  m='307550'>my</span> <span m='307740'>three</span> <span
  m='307980'>points.</span> <span m='308870'>(x_0, y_0),</span> <span
  m='309690'>(x_1,</span> <span m='309890'>y_1),</span> <span
  m='310130'>and</span> <span m='310530'>(x_2, y_2).</span> <span m='313400'>So
  let's</span> <span m='313650'>just</span> <span m='313910'>integrate</span>
  <span m='314320'>that</span> <span m='314540'>from</span> <span
  m='314700'>minus</span> <span m='314860'>h</span> <span m='314950'>to</span>
  <span m='315180'>h</span> <span m='315500'>first</span> <span
  m='316330'>and</span> <span m='316480'>see</span> <span m='316620'>what</span>
  <span m='316780'>kind</span> <span m='316920'>of</span> <span
  m='316980'>information</span> <span m='317460'>we</span> <span
  m='317570'>need.</span> </p><p><span m='319030'>So if</span> <span
  m='319090'>I</span> <span m='319160'>come</span> <span m='319350'>over</span>
  <span m='319530'>here. So</span> <span m='330780'>what</span> <span
  m='330880'>do</span> <span m='330940'>I</span> <span m='331020'>get</span>
  <span m='331340'>when</span> <span m='331480'>I</span> <span
  m='331570'>actually</span> <span m='332020'>integrate</span> <span
  m='332350'>this?</span> <span m='332570'>Well,</span> <span
  m='333840'>I</span> <span m='334000'>get</span> <span m='334220'>A</span>
  <span m='334680'>x to</span> <span m='334760'>the</span> <span
  m='334860'>third</span> <span m='335120'>over</span> <span
  m='335310'>3,</span> <span m='337180'>plus</span> <span m='337420'>B</span>
  <span m='337480'>x</span> <span m='337630'>squared</span> <span
  m='338260'>over</span> <span m='338490'>2,</span> <span m='340140'>plus</span>
  <span m='340450'>C*x,</span> <span m='341240'>and</span> <span
  m='341370'>then</span> <span m='341470'>I</span> <span m='341600'>have</span>
  <span m='341900'>to</span> <span m='342010'>evaluate</span> <span
  m='342220'>from</span> <span m='342330'>minus</span> <span m='342560'>h to
  h.</span> <span m='347370'>Well, if</span> <span m='347500'>you</span> <span
  m='347590'>were</span> <span m='347690'>thinking</span> <span
  m='348010'>about</span> <span m='348270'>this,</span> <span
  m='348520'>it</span> <span m='348640'>shouldn't</span> <span
  m='348900'>be</span> <span m='349010'>surprising</span> <span
  m='349550'>that</span> <span m='349750'>when</span> <span m='349950'>I</span>
  <span m='350070'>do</span> <span m='350270'>this,</span> <span
  m='351000'>there's</span> <span m='351190'>not</span> <span m='351370'>going
  to</span> <span m='351550'>be</span> <span m='351660'>a</span> <span
  m='351730'>B</span> <span m='351910'>term.</span> <span m='353080'>Why</span>
  <span m='353540'>is</span> <span m='353690'>that?</span> <span
  m='354840'>Well, these</span> <span m='355180'>two</span> <span
  m='355300'>functions</span> <span m='355740'>are</span> <span
  m='355820'>even.</span> <span m='356790'>A x</span> <span
  m='357240'>squared</span> <span m='357670'>and</span> <span
  m='357790'>C</span> <span m='357990'>are</span> <span m='358110'>even</span>
  <span m='358400'>functions.</span> <span m='359350'>And</span> <span
  m='359510'>I'm</span> <span m='359620'>integrating</span> <span
  m='360170'>over</span> <span m='360350'>something</span> <span
  m='360660'>that's</span> <span m='360880'>symmetric</span> <span
  m='361360'>about</span> <span m='362180'>the</span> <span
  m='362290'>y-axis.</span> <span m='363130'>I'm</span> <span
  m='363260'>going</span> <span m='363440'>from</span> <span
  m='363570'>minus</span> <span m='363870'>h</span> <span m='364080'>to</span>
  <span m='364180'>h.</span> <span m='365420'>So</span> <span
  m='365620'>if</span> <span m='365690'>you</span> <span m='365790'>think</span>
  <span m='365990'>about</span> <span m='366390'>A</span> <span
  m='366500'>x</span> <span m='366750'>squared,</span> <span
  m='367460'>and</span> <span m='367600'>I'm</span> <span
  m='367690'>going</span> <span m='367900'>from</span> <span
  m='368010'>minus</span> <span m='368330'>h</span> <span m='368540'>to
  h,</span> <span m='368870'>I'm</span> <span m='368960'>finding</span> <span
  m='369200'>the</span> <span m='369320'>area</span> <span
  m='369660'>under</span> <span m='370020'>a</span> <span
  m='370090'>quadratic,</span> <span m='371340'>from</span> <span
  m='371510'>minus</span> <span m='371740'>h</span> <span m='371830'>to</span>
  <span m='372040'>h,</span> <span m='372430'>it's</span> <span m='372590'>going
  to</span> <span m='372800'>be</span> <span m='373130'>twice</span> <span
  m='373420'>the</span> <span m='373540'>area</span> <span
  m='373880'>from</span> <span m='374040'>0</span> <span m='374270'>to</span>
  <span m='374400'>h.</span> <span m='376200'>But</span> <span
  m='376450'>B*x,</span> <span m='377350'>that's</span> <span
  m='377530'>a</span> <span m='377610'>line</span> <span m='378000'>with</span>
  <span m='378140'>slope</span> <span m='378350'>B.</span> <span
  m='379470'>If</span> <span m='379650'>I</span> <span m='380420'>wanted</span>
  <span m='380660'>to</span> <span m='381680'>integrate</span> <span
  m='382180'>B*x</span> <span m='382640'>from</span> <span
  m='382770'>minus</span> <span m='383200'>h</span> <span m='383490'>to</span>
  <span m='383610'>h,</span> <span m='384410'>that's</span> <span
  m='384620'>the</span> <span m='384800'>area,</span> <span m='385400'>the
  signed</span> <span m='385840'>area</span> <span m='386200'>under</span> <span
  m='386390'>the</span> <span m='386500'>curve,</span> <span
  m='387430'>of</span> <span m='387580'>a</span> <span m='387640'>line</span>
  <span m='387930'>B*x,</span> <span m='388670'>from</span> <span
  m='388820'>minus</span> <span m='389020'>h</span> <span m='389100'>to</span>
  <span m='389380'>h.</span> </p><p><span m='389770'>If</span> <span
  m='389900'>I</span> <span m='389980'>just</span> <span m='390400'>draw</span>
  <span m='390790'>a</span> <span m='390850'>quick picture,</span> <span
  m='394160'>what</span> <span m='394290'>does</span> <span
  m='394410'>that</span> <span m='394570'>look</span> <span
  m='394750'>like?</span> <span m='395120'>It's</span> <span
  m='397210'>symmetric</span> <span m='397600'>with</span> <span
  m='397770'>respect</span> <span m='398380'>to</span> <span m='398580'>a</span>
  <span m='398670'>rotation</span> <span m='399250'>there.</span> <span
  m='399970'>I'd</span> <span m='400180'>have</span> <span
  m='400330'>this</span> <span m='400450'>signed</span> <span
  m='400830'>area.</span> <span m='401210'>This</span> <span
  m='401370'>is</span> <span m='401500'>the</span> <span m='401580'>curve</span>
  <span m='401860'>y equals</span> <span m='402160'>B*x.</span> <span
  m='403960'>From</span> <span m='404130'>minus</span> <span m='404510'>h</span>
  <span m='404740'>to</span> <span m='404840'>h,</span> <span
  m='405520'>I</span> <span m='405790'>get</span> <span m='406030'>this</span>
  <span m='406390'>area</span> <span m='406880'>is</span> <span
  m='407000'>negative</span> <span m='407420'>and</span> <span
  m='407500'>this</span> <span m='407620'>are</span> <span m='407800'>is</span>
  <span m='407950'>positive</span> <span m='408240'>and</span> <span
  m='408460'>they're</span> <span m='408570'>equal.</span> <span
  m='409470'>So,</span> <span m='409890'>what</span> <span m='410100'>I'm</span>
  <span m='410190'>about</span> <span m='410480'>to</span> <span
  m='410600'>do,</span> <span m='411030'>you</span> <span
  m='411180'>shouldn't</span> <span m='411410'>be</span> <span
  m='411510'>surprised</span> <span m='411940'>there</span> <span
  m='412050'>won't</span> <span m='412240'>be</span> <span m='412350'>a</span>
  <span m='412420'>B</span> <span m='412590'>term.</span> <span m='414100'>So
  what</span> <span m='414190'>do</span> <span m='414250'>we</span> <span
  m='414330'>actually</span> <span m='414730'>get</span> <span
  m='415240'>when</span> <span m='415480'>we</span> <span
  m='415600'>evaluate</span> <span m='416120'>this?</span> <span
  m='416370'>We</span> <span m='416480'>get</span> <span m='417690'>2A</span>
  <span m='417930'>h cubed,</span> <span m='420410'>over</span> <span
  m='420650'>3,</span> <span m='422160'>plus</span> <span
  m='423120'>2*C*h.</span> <span m='426620'>That's</span> <span
  m='426810'>what</span> <span m='426910'>we</span> <span m='427010'>get.</span>
  <span m='427390'>You</span> <span m='427560'>can</span> <span
  m='427690'>actually</span> <span m='427970'>work</span> <span
  m='428170'>it</span> <span m='428240'>all,</span> <span m='428360'>put
  in</span> <span m='428860'>all</span> <span m='428940'>the</span> <span
  m='429040'>h's</span> <span m='429310'>and</span> <span m='429440'>see</span>
  <span m='429560'>that,</span> <span m='430090'>but</span> <span
  m='430340'>I</span> <span m='430450'>knew</span> <span m='430750'>I</span>
  <span m='430840'>was</span> <span m='431010'>going</span> <span
  m='431140'>to</span> <span m='431200'>have</span> <span
  m='432360'>double</span> <span m='432860'>what</span> <span
  m='433020'>was</span> <span m='433160'>here</span> <span
  m='433410'>when</span> <span m='433530'>I</span> <span
  m='433610'>evaluated</span> <span m='434200'>at</span> <span
  m='434330'>h,</span> <span m='434690'>and</span> <span
  m='434950'>nothing</span> <span m='435660'>from</span> <span
  m='435890'>the</span> <span m='435970'>B</span> <span m='436230'>term.</span>
  </p><p><span m='437870'>So we're</span> <span m='437970'>getting</span> <span
  m='438220'>closer.</span> <span m='440400'>We're</span> <span
  m='440650'>getting</span> <span m='440890'>closer.</span> <span
  m='441280'>We</span> <span m='441400'>might</span> <span m='441570'>not</span>
  <span m='441700'>look</span> <span m='441810'>like</span> <span
  m='441940'>we're</span> <span m='442040'>getting</span> <span
  m='442240'>closer,</span> <span m='442550'>but we're</span> <span
  m='442750'>getting</span> <span m='442980'>closer.</span> <span m='444320'>So
  let's</span> <span m='444790'>simplify</span> <span m='445380'>this</span>
  <span m='445570'>expression</span> <span m='446040'>a</span> <span
  m='446120'>little</span> <span m='446390'>bit.</span> <span
  m='448210'>Actually,</span> <span m='448620'>what</span> <span
  m='448750'>I</span> <span m='448800'>ultimately</span> <span
  m='449260'>need</span> <span m='449450'>to</span> <span m='449550'>do</span>
  <span m='449730'>is</span> <span m='449840'>I</span> <span
  m='449890'>need</span> <span m='450040'>to</span> <span
  m='450100'>figure</span> <span m='450410'>out</span> <span m='450610'>C</span>
  <span m='451680'>and</span> <span m='451810'>I</span> <span
  m='451870'>need</span> <span m='452000'>to</span> <span
  m='452080'>figure</span> <span m='452280'>out</span> <span
  m='452420'>something</span> <span m='452700'>over</span> <span
  m='452890'>here.</span> <span m='453870'>I</span> <span m='454050'>need</span>
  <span m='454220'>to</span> <span m='454280'>actually</span> <span
  m='454630'>figure</span> <span m='454960'>out</span> <span m='455200'>A</span>
  <span m='455460'>h</span> <span m='455750'>squared.</span> <span
  m='456960'>And</span> <span m='457120'>let</span> <span m='457230'>me</span>
  <span m='457340'>explain</span> <span m='457810'>why</span> <span
  m='457990'>I</span> <span m='458040'>need</span> <span m='458210'>to</span>
  <span m='458280'>figure</span> <span m='458540'>out</span> <span
  m='458650'>A</span> <span m='458800'>h</span> <span m='459050'>squared.</span>
  <span m='460080'>In</span> <span m='460340'>the</span> <span
  m='460470'>end,</span> <span m='460830'>if</span> <span m='460940'>I</span>
  <span m='461690'>come</span> <span m='461940'>over</span> <span
  m='462250'>back</span> <span m='462530'>to</span> <span m='462640'>what</span>
  <span m='462790'>I</span> <span m='462840'>want</span> <span
  m='463030'>to</span> <span m='463100'>show--</span> <span m='463940'>let
  me</span> <span m='464080'>even</span> <span m='464330'>box it,</span> <span
  m='464870'>so</span> <span m='465010'>we</span> <span m='465140'>see</span>
  <span m='465320'>it--</span> <span m='465620'>I</span> <span m='466140'>want
  to</span> <span m='466360'>show</span> <span m='468190'>that</span> <span
  m='468690'>this</span> <span m='468860'>integral,</span> <span
  m='469160'>which</span> <span m='469340'>I've</span> <span
  m='469460'>started</span> <span m='469830'>to</span> <span
  m='469900'>calculate,</span> <span m='470490'>is</span> <span
  m='470610'>equal</span> <span m='470820'>to</span> <span m='470900'>h</span>
  <span m='471200'>over</span> <span m='471360'>3</span> <span
  m='471640'>times</span> <span m='471900'>this</span> <span
  m='472030'>quantity.</span> <span m='473100'>So</span> <span
  m='473370'>I</span> <span m='473470'>want to</span> <span
  m='473700'>keep</span> <span m='474010'>one</span> <span
  m='474510'>around,</span> <span m='475340'>but</span> <span
  m='475540'>I</span> <span m='475610'>want the other,</span> <span
  m='476280'>any</span> <span m='476610'>other</span> <span
  m='476850'>powers</span> <span m='477260'>of</span> <span m='477360'>h</span>
  <span m='477600'>to</span> <span m='477710'>not</span> <span
  m='477970'>be</span> <span m='478100'>there</span> <span
  m='478320'>when</span> <span m='478460'>I'm</span> <span
  m='478580'>done.</span> <span m='479720'>Right?</span> </p><p><span
  m='479940'>I</span> <span m='480000'>need</span> <span m='480190'>one</span>
  <span m='480400'>power</span> <span m='480720'>of</span> <span
  m='480820'>h</span> <span m='481030'>there.</span> <span m='481290'>In</span>
  <span m='481420'>fact</span> <span m='481740'>I</span> <span
  m='481790'>need</span> <span m='481970'>an</span> <span m='482060'>h</span>
  <span m='482310'>over</span> <span m='482470'>3</span> <span
  m='482720'>there.</span> <span m='483570'>So</span> <span m='483760'>I</span>
  <span m='483840'>think</span> <span m='484080'>what</span> <span
  m='484200'>I'll</span> <span m='484340'>do</span> <span m='484720'>is</span>
  <span m='484870'>I'll</span> <span m='484990'>start</span> <span
  m='485320'>off</span> <span m='485540'>and</span> <span m='486330'>I'll</span>
  <span m='486540'>pull</span> <span m='486750'>out an</span> <span
  m='487030'>h</span> <span m='487250'>over</span> <span m='487430'>3,</span>
  <span m='488090'>and</span> <span m='488340'>then</span> <span
  m='488470'>I'll</span> <span m='488590'>try</span> <span m='488770'>and</span>
  <span m='488870'>figure</span> <span m='489150'>out</span> <span
  m='489340'>if</span> <span m='489440'>I</span> <span m='489510'>can</span>
  <span m='489710'>get</span> <span m='490240'>the</span> <span
  m='490360'>rest</span> <span m='490650'>of</span> <span m='490730'>my</span>
  <span m='490830'>expression</span> <span m='491320'>to</span> <span
  m='491430'>look</span> <span m='491570'>like</span> <span
  m='491730'>what's</span> <span m='491900'>in</span> <span
  m='491980'>the</span> <span m='492050'>parentheses.</span> <span
  m='493220'>That's</span> <span m='493400'>really,</span> <span
  m='494150'>ultimately,</span> <span m='494650'>what</span> <span
  m='494790'>I'd</span> <span m='494920'>like</span> <span m='495090'>to</span>
  <span m='495200'>do.</span> </p><p><span m='496140'>So let's</span> <span
  m='496240'>come</span> <span m='496400'>back</span> <span
  m='496620'>over</span> <span m='496820'>here.</span> <span
  m='499130'>I'm</span> <span m='499420'>going to</span> <span
  m='499550'>pull</span> <span m='499750'>out</span> <span m='499940'>an</span>
  <span m='500020'>h</span> <span m='500220'>over</span> <span
  m='500380'>3</span> <span m='500620'>from</span> <span m='500790'>both</span>
  <span m='501040'>of</span> <span m='501110'>these</span> <span
  m='501960'>and</span> <span m='502080'>we're</span> <span m='502170'>going
  to</span> <span m='502320'>see</span> <span m='502490'>what</span> <span
  m='502630'>we</span> <span m='502730'>end</span> <span m='502920'>up</span>
  <span m='503060'>with. OK so</span> <span m='505260'>if I pull</span> <span
  m='505870'>out</span> <span m='506000'>an</span> <span m='506080'>h</span>
  <span m='506270'>over</span> <span m='506420'>3</span> <span
  m='506670'>here,</span> <span m='507720'>what</span> <span
  m='507890'>do</span> <span m='507950'>I</span> <span m='508030'>end</span>
  <span m='508190'>up</span> <span m='508320'>with?</span> <span
  m='508460'>This</span> <span m='508600'>is</span> <span
  m='508700'>easy.</span> <span m='508900'>That's</span> <span
  m='509400'>2A</span> <span m='509670'>h</span> <span
  m='509920'>squared.</span> <span m='513660'>And this</span> <span
  m='513790'>one's</span> <span m='513960'>a</span> <span
  m='514020'>little</span> <span m='514240'>bit</span> <span
  m='514360'>trickier.</span> <span m='515340'>But</span> <span
  m='515500'>I</span> <span m='515540'>have</span> <span m='515650'>to</span>
  <span m='515720'>multiply</span> <span m='516070'>by</span> <span
  m='516220'>3</span> <span m='516970'>over</span> <span m='517280'>3</span>
  <span m='518090'>to</span> <span m='518220'>get</span> <span
  m='518350'>a</span> <span m='518420'>3</span> <span m='518670'>there.</span>
  <span m='519470'>So</span> <span m='519670'>I</span> <span
  m='519750'>end</span> <span m='519880'>up</span> <span m='519980'>with</span>
  <span m='520100'>6C.</span> <span m='524920'>OK.</span> <span
  m='525250'>Let's</span> <span m='525490'>make</span> <span
  m='525650'>sure</span> <span m='525820'>I</span> <span
  m='525850'>didn't</span> <span m='526080'>make</span> <span
  m='526240'>any</span> <span m='526350'>mistakes.</span> <span m='526880'>If
  I</span> <span m='527140'>multiply</span> <span m='527420'>through</span>
  <span m='527580'>here</span> <span m='527820'>I</span> <span
  m='527910'>get</span> <span m='528140'>2A</span> <span m='528340'>h
  cubed</span> <span m='529120'>over</span> <span m='529290'>3.</span> <span
  m='530660'>If</span> <span m='530850'>I</span> <span
  m='531100'>multiply</span> <span m='531150'>through</span> <span
  m='531340'>here</span> <span m='531650'>I</span> <span m='531780'>get</span>
  <span m='532930'>2h*C.</span> <span m='534490'>Looking</span> <span
  m='534740'>good</span> <span m='534950'>so</span> <span m='535090'>far.</span>
  </p><p><span m='536790'>Now</span> <span m='536950'>I</span> <span
  m='537040'>have</span> <span m='537170'>to</span> <span
  m='537260'>figure</span> <span m='537540'>out</span> <span m='537730'>A</span>
  <span m='537870'>and</span> <span m='538040'>C,</span> <span
  m='538500'>or</span> <span m='538830'>A</span> <span m='539270'>h
  squared</span> <span m='539630'>and</span> <span m='539810'>C.</span> <span
  m='541150'>Well, C</span> <span m='541440'>is</span> <span
  m='541600'>pretty</span> <span m='541860'>easy</span> <span
  m='542130'>to</span> <span m='542250'>find.</span> <span
  m='542970'>Let's</span> <span m='543190'>think</span> <span
  m='543370'>about</span> <span m='543590'>why</span> <span
  m='543750'>that</span> <span m='543950'>is.</span> <span m='544550'>I</span>
  <span m='544660'>have</span> <span m='544890'>this</span> <span
  m='545050'>polynomial.</span> <span m='546200'>The</span> <span
  m='546310'>polynomial</span> <span m='546990'>was</span> <span
  m='547330'>equal</span> <span m='547670'>to--</span> <span m='547850'>if we
  come</span> <span m='548190'>over</span> <span m='548330'>here</span> <span
  m='548520'>and</span> <span m='548610'>we</span> <span m='548680'>look</span>
  <span m='548840'>again,</span> <span m='549910'>it's</span> <span
  m='550150'>A</span> <span m='550540'>x squared</span> <span
  m='550860'>plus</span> <span m='551060'>B*x</span> <span m='551470'>plus
  C.</span> <span m='552730'>And</span> <span m='552990'>the</span> <span
  m='553050'>polynomial</span> <span m='553740'>has</span> <span
  m='554010'>to</span> <span m='554120'>go</span> <span
  m='554280'>through</span> <span m='554550'>those</span> <span
  m='554770'>three</span> <span m='554970'>points</span> <span
  m='555260'>I</span> <span m='555350'>had.</span> <span m='556340'>So</span>
  <span m='556540'>when</span> <span m='556690'>x is</span> <span
  m='557070'>0,</span> <span m='559360'>P</span> <span m='559660'>of</span>
  <span m='559790'>0</span> <span m='560040'>is</span> <span
  m='560320'>C.</span> <span m='561610'>So let's</span> <span
  m='561780'>come</span> <span m='561930'>back</span> <span
  m='562120'>and</span> <span m='562210'>look</span> <span m='562340'>at</span>
  <span m='562400'>our</span> <span m='562490'>picture.</span> <span
  m='563190'>When</span> <span m='563610'>x is</span> <span m='563960'>0,</span>
  <span m='565790'>what's</span> <span m='565980'>the</span> <span
  m='566100'>output</span> <span m='566460'>on</span> <span
  m='566630'>the</span> <span m='567180'>white</span> <span
  m='567430'>curve?</span> <span m='568240'>It's</span> <span
  m='568390'>y_1.</span> <span m='569640'>So</span> <span m='569830'>C</span>
  <span m='570100'>is</span> <span m='570220'>exactly</span> <span
  m='570690'>y_1.</span> </p><p><span m='572290'>How am</span> <span
  m='572380'>I</span> <span m='572440'>going to</span> <span
  m='572640'>find</span> <span m='572910'>A</span> <span m='573300'>h
  squared?</span> <span m='573910'>Well, what</span> <span m='574060'>I</span>
  <span m='574120'>need</span> <span m='574290'>to</span> <span
  m='574380'>do</span> <span m='574590'>is</span> <span m='574720'>use</span>
  <span m='574900'>these</span> <span m='575090'>other</span> <span
  m='575290'>two</span> <span m='575440'>points.</span> <span
  m='576940'>I'm</span> <span m='577090'>going</span> <span m='577270'>to</span>
  <span m='577370'>evaluate</span> <span m='578360'>the</span> <span
  m='578540'>function</span> <span m='579150'>P</span> <span
  m='579370'>of</span> <span m='579490'>x</span> <span m='579780'>at</span>
  <span m='579970'>minus</span> <span m='580250'>h.</span> <span m='581280'>And
  its</span> <span m='581480'>output</span> <span m='581890'>has</span> <span
  m='582090'>to</span> <span m='582200'>be</span> <span m='582310'>y_0.</span>
  <span m='583510'>And I'm</span> <span m='583720'>going</span> <span
  m='584110'>to</span> <span m='584290'>evaluate</span> <span
  m='585730'>the</span> <span m='585850'>function</span> <span
  m='586350'>P</span> <span m='586510'>of</span> <span m='586610'>x at</span>
  <span m='586950'>h</span> <span m='587430'>and</span> <span
  m='587650'>its</span> <span m='587780'>output</span> <span
  m='588190'>has</span> <span m='588450'>to</span> <span m='588570'>be</span>
  <span m='588920'>y_2.</span> <span m='590590'>So we're</span> <span
  m='590700'>going to</span> <span m='591020'>come</span> <span
  m='591210'>over</span> <span m='591330'>to</span> <span m='591410'>the</span>
  <span m='591480'>other</span> <span m='591640'>side,</span> <span
  m='591970'>but</span> <span m='592060'>that's</span> <span
  m='592270'>really</span> <span m='592720'>what</span> <span
  m='592920'>we're</span> <span m='593030'>doing</span> <span
  m='593280'>next.</span> <span m='593780'>So</span> <span
  m='593960'>let's</span> <span m='594080'>come</span> <span
  m='594220'>over</span> <span m='594390'>here</span> <span m='596410'>and
  let's</span> <span m='596710'>evaluate</span> <span m='597920'>P</span> <span
  m='598120'>of</span> <span m='598190'>h</span> <span m='599900'>and</span>
  <span m='600090'>P</span> <span m='600300'>of</span> <span
  m='601400'>minus</span> <span m='601770'>h.</span> <span m='603590'>So</span>
  <span m='603770'>P</span> <span m='603930'>of</span> <span m='604070'>h</span>
  <span m='605600'>is</span> <span m='606660'>A</span> <span m='606920'>h
  squared</span> <span m='608330'>plus</span> <span m='608600'>B*h</span> <span
  m='610440'>plus</span> <span m='610780'>C.</span> <span m='612290'>And</span>
  <span m='612460'>P</span> <span m='612620'>of</span> <span
  m='612750'>minus</span> <span m='613140'>h</span> <span m='613760'>is</span>
  <span m='615200'>A</span> <span m='615500'>h</span> <span
  m='615810'>squared</span> <span m='617410'>minus</span> <span
  m='617700'>B*h</span> <span m='619390'>plus</span> <span m='619670'>C.</span>
  <span m='621590'>OK.</span> <span m='623540'>What else? Again</span> <span
  m='623840'>we</span> <span m='623950'>said</span> <span m='624220'>this</span>
  <span m='625050'>one</span> <span m='625230'>has</span> <span
  m='625490'>to</span> <span m='625580'>be</span> <span m='625780'>y_2,</span>
  <span m='626890'>the</span> <span m='627000'>output,</span> <span
  m='627340'>and</span> <span m='627430'>this</span> <span m='627550'>one</span>
  <span m='627690'>has</span> <span m='627850'>to</span> <span
  m='627960'>be</span> <span m='628060'>y_0.</span> <span
  m='629300'>Because</span> <span m='629570'>the</span> <span
  m='629680'>output</span> <span m='630210'>at</span> <span m='630410'>h</span>
  <span m='630780'>has</span> <span m='630990'>to</span> <span
  m='631120'>agree</span> <span m='631420'>with</span> <span
  m='631670'>the</span> <span m='631800'>output</span> <span
  m='632240'>of</span> <span m='632430'>the</span> <span
  m='632560'>function</span> <span m='632920'>f</span> <span
  m='633050'>of</span> <span m='633150'>x.</span> <span m='633530'>And
  its</span> <span m='633660'>output</span> <span m='633980'>at</span> <span
  m='634090'>h</span> <span m='634300'>was</span> <span m='634480'>y_2.</span>
  <span m='635530'>The</span> <span m='635850'>output</span> <span
  m='636050'>at</span> <span m='636300'>minus</span> <span m='636670'>h</span>
  <span m='637120'>of</span> <span m='638160'>P</span> <span
  m='638640'>has</span> <span m='638880'>to</span> <span m='638980'>be</span>
  <span m='639080'>the</span> <span m='639200'>same</span> <span
  m='639400'>as</span> <span m='639460'>the</span> <span
  m='639540'>output</span> <span m='640070'>at</span> <span
  m='640280'>minus</span> <span m='640540'>h</span> <span m='640800'>of</span>
  <span m='640880'>f.</span> <span m='641490'>And</span> <span
  m='641750'>that</span> <span m='641900'>was</span> <span
  m='642020'>y_0.</span> </p><p><span m='643660'>Now this</span> <span
  m='643800'>might</span> <span m='643950'>not</span> <span
  m='644100'>look</span> <span m='644350'>fun</span> <span m='644630'>yet</span>
  <span m='644930'>but</span> <span m='645150'>what</span> <span
  m='645310'>if</span> <span m='645410'>I</span> <span m='645510'>add</span>
  <span m='645850'>these</span> <span m='646150'>two</span> <span
  m='646910'>things</span> <span m='647180'>together.</span> <span
  m='648350'>What</span> <span m='648640'>happens?</span> <span
  m='649440'>I</span> <span m='649620'>get</span> <span m='652070'>2A</span>
  <span m='652490'>h</span> <span m='652810'>squared.</span> <span
  m='654110'>These</span> <span m='654500'>drop</span> <span
  m='654800'>out.</span> <span m='656270'>And</span> <span
  m='656430'>then</span> <span m='656540'>I</span> <span m='656610'>get</span>
  <span m='657320'>plus</span> <span m='657710'>2C</span> <span
  m='660330'>is</span> <span m='660510'>equal</span> <span m='660750'>to</span>
  <span m='661990'>y_0</span> <span m='664410'>plus</span> <span
  m='664670'>y_2.</span> <span m='666980'>I'm</span> <span
  m='667130'>getting</span> <span m='667340'>closer.</span> <span
  m='668060'>I'm</span> <span m='668210'>getting</span> <span
  m='668440'>much</span> <span m='668630'>closer.</span> <span
  m='669610'>Because</span> <span m='669920'>now</span> <span
  m='670230'>notice</span> <span m='670560'>what</span> <span
  m='670710'>I</span> <span m='670790'>have.</span> <span m='671300'>I</span>
  <span m='671710'>have</span> <span m='672080'>2A</span> <span
  m='672290'>h</span> <span m='672700'>squared,</span> <span m='673080'>I</span>
  <span m='673140'>can</span> <span m='673280'>isolate</span> <span
  m='673760'>that.</span> <span m='674490'>And</span> <span
  m='674790'>that's</span> <span m='675020'>something</span> <span
  m='675440'>that</span> <span m='675560'>I</span> <span m='675610'>want</span>
  <span m='675790'>to</span> <span m='675850'>figure</span> <span
  m='676140'>out.</span> <span m='676370'>I</span> <span m='676440'>want</span>
  <span m='676610'>to</span> <span m='676670'>figure out</span> <span
  m='676890'>2A h</span> <span m='677590'>squared.</span> <span
  m='677750'>So</span> <span m='677960'>let's</span> <span
  m='678150'>figure</span> <span m='678380'>out</span> <span
  m='678470'>what</span> <span m='678600'>that</span> <span
  m='678780'>is.</span> </p><p><span m='680620'>2A h</span> <span
  m='681020'>squared</span> <span m='683140'>is</span> <span
  m='683340'>equal</span> <span m='683590'>to</span> <span m='683760'>y_0</span>
  <span m='685730'>plus</span> <span m='686030'>y_2</span> <span
  m='688020'>minus,</span> <span m='688810'>well</span> <span
  m='689140'>what</span> <span m='689290'>did</span> <span m='689400'>we</span>
  <span m='689510'>say</span> <span m='689730'>C</span> <span
  m='689980'>was?</span> <span m='690640'>C</span> <span m='690930'>was</span>
  <span m='691130'>the</span> <span m='691260'>output</span> <span
  m='692230'>at</span> <span m='693210'>x</span> <span m='693420'>equals</span>
  <span m='693680'>0.</span> <span m='694210'>Which</span> <span
  m='694450'>is</span> <span m='694560'>y1.</span> <span m='695240'>So</span>
  <span m='695440'>it's</span> <span m='695560'>minus</span> <span
  m='696390'>2C,</span> <span m='696790'>which</span> <span m='697010'>is</span>
  <span m='697120'>minus</span> <span m='697960'>2y_1</span> <span
  m='699270'>So</span> <span m='699460'>now</span> <span m='699590'>we're</span>
  <span m='699710'>very</span> <span m='699990'>close,</span> <span
  m='700840'>we're</span> <span m='701100'>very</span> <span
  m='701330'>close</span> <span m='701550'>to</span> <span
  m='701640'>getting</span> <span m='701830'>what</span> <span
  m='701950'>we</span> <span m='702040'>want.</span> <span m='702740'>And</span>
  <span m='702880'>that's</span> <span m='703080'>good,</span> <span
  m='703700'>because I'm</span> <span m='703850'>almost</span> <span
  m='704140'>out</span> <span m='704240'>of</span> <span m='704330'>room.</span>
  </p><p><span m='705740'>So let's</span> <span m='705980'>take</span> <span
  m='706210'>that</span> <span m='706380'>expression,</span> <span
  m='706960'>we</span> <span m='707090'>were</span> <span
  m='707250'>working</span> <span m='707600'>on</span> <span
  m='707750'>this</span> <span m='707910'>expression</span> <span
  m='708350'>right</span> <span m='708520'>here,</span> <span m='709450'>and
  let's</span> <span m='709760'>start</span> <span m='709990'>to</span> <span
  m='710060'>fill</span> <span m='710310'>in</span> <span m='710410'>what</span>
  <span m='710570'>we</span> <span m='710670'>get.</span> <span
  m='711930'>We</span> <span m='712080'>get</span> <span m='712210'>h</span>
  <span m='712450'>over</span> <span m='712650'>3</span> <span
  m='714170'>times</span> <span m='715000'>2A h</span> <span
  m='715670'>squared,</span> <span m='716260'>which</span> <span
  m='716760'>is</span> <span m='716870'>y_0</span> <span m='717880'>plus</span>
  <span m='718620'>y_2</span> <span m='720110'>minus</span> <span
  m='720360'>2y_1,</span> <span m='722030'>and</span> <span
  m='722200'>then</span> <span m='722310'>I</span> <span m='722360'>have</span>
  <span m='722520'>to</span> <span m='722610'>add</span> <span
  m='723030'>6C.</span> <span m='723980'>Now</span> <span
  m='724110'>what's</span> <span m='724370'>C?</span> <span m='725010'>C</span>
  <span m='725330'>is</span> <span m='725480'>y_1.</span> <span m='726970'>So
  I'm</span> <span m='727120'>going to</span> <span m='727310'>add</span> <span
  m='727540'>6y_1.</span> <span m='730390'>And</span> <span m='730530'>if</span>
  <span m='730640'>I</span> <span m='730720'>simplify</span> <span
  m='731320'>that,</span> <span m='733420'>I</span> <span m='733670'>get</span>
  <span m='733920'>y_0--</span> <span m='735950'>bingo--</span> <span
  m='736840'>plus</span> <span m='737190'>4y_1</span> <span
  m='738940'>plus</span> <span m='739330'>y_2.</span> <span
  m='741770'>And</span> <span m='741910'>that's</span> <span
  m='742130'>what</span> <span m='742240'>we</span> <span
  m='742340'>wanted.</span> </p><p><span m='743290'>So</span> <span
  m='743470'>let</span> <span m='743560'>me</span> <span m='743660'>take</span>
  <span m='743880'>us</span> <span m='744020'>through kind of</span> <span
  m='745250'>where</span> <span m='745530'>all</span> <span
  m='745670'>this</span> <span m='745850'>came</span> <span
  m='746090'>from</span> <span m='746260'>again,</span> <span
  m='746720'>what</span> <span m='746950'>the</span> <span m='747030'>big</span>
  <span m='747310'>pieces</span> <span m='747690'>were</span> <span
  m='749070'>and</span> <span m='749260'>we'll</span> <span
  m='749390'>see</span> <span m='749570'>now</span> <span m='749790'>we</span>
  <span m='749920'>understand</span> <span m='751450'>how</span> <span
  m='751640'>we</span> <span m='751770'>do</span> <span
  m='751910'>Simpson's</span> <span m='752320'>rule,</span> <span m='752550'>and
  these</span> <span m='752720'>small</span> <span m='753000'>chunks</span>
  <span m='753330'>of</span> <span m='753440'>Simpson's</span> <span
  m='753820'>rule.</span> <span m='754680'>So let's come</span> <span
  m='754820'>back</span> <span m='755000'>to</span> <span m='755060'>the</span>
  <span m='755130'>very</span> <span m='755310'>beginning.</span> <span
  m='760580'>OK,</span> <span m='760870'>in</span> <span m='760970'>the</span>
  <span m='761050'>very</span> <span m='761270'>beginning,</span> <span
  m='762320'>what</span> <span m='762600'>we</span> <span m='762720'>had</span>
  <span m='763010'>was</span> <span m='763140'>a</span> <span
  m='763200'>function</span> <span m='763570'>f</span> <span
  m='763690'>of</span> <span m='763790'>x,</span> <span m='764370'>that</span>
  <span m='764520'>was</span> <span m='764650'>the</span> <span m='764970'>white
  curve.</span> <span m='765120'>y</span> <span m='765250'>equals</span> <span
  m='765530'>f</span> <span m='765620'>of</span> <span m='765790'>x</span> <span
  m='766120'>was</span> <span m='766260'>the</span> <span
  m='766560'>white</span> <span m='766915'>curve.</span> <span
  m='767270'>And</span> <span m='767510'>then</span> <span m='767630'>I</span>
  <span m='767740'>found</span> <span m='768670'>a</span> <span
  m='768810'>quadratic</span> <span m='769440'>that</span> <span
  m='769590'>went</span> <span m='769830'>through</span> <span
  m='770860'>minus</span> <span m='771230'>h,</span> <span m='771500'>y0,</span>
  <span m='772600'>(0, y_1),</span> <span m='773720'>and</span> <span
  m='773910'>(h,</span> <span m='774200'>y_2).</span> <span
  m='774900'>Went</span> <span m='775110'>through</span> <span
  m='775240'>those</span> <span m='775440'>three</span> <span
  m='775600'>points.</span> <span m='775930'>And</span> <span
  m='776020'>I</span> <span m='776070'>called</span> <span
  m='776330'>that</span> <span m='776550'>quadratic</span> <span
  m='777230'>P</span> <span m='777440'>of</span> <span m='777540'>x.</span>
  </p><p><span m='779340'>And</span> <span m='779550'>then</span> <span
  m='779690'>what</span> <span m='779840'>I</span> <span m='779910'>was</span>
  <span m='780160'>doing,</span> <span m='780500'>we</span> <span
  m='780600'>know</span> <span m='780730'>Simpson's</span> <span
  m='781220'>rule</span> <span m='781550'>says</span> <span
  m='781930'>find</span> <span m='782200'>the</span> <span
  m='782350'>area</span> <span m='782700'>under</span> <span
  m='782870'>the</span> <span m='782980'>curve</span> <span m='783265'>of</span>
  <span m='783550'>P</span> <span m='783720'>of x</span> <span
  m='784050'>between</span> <span m='784350'>minus</span> <span
  m='784620'>h</span> <span m='784830'>and</span> <span m='784940'>h.</span>
  <span m='786190'>So</span> <span m='786400'>what</span> <span
  m='786570'>I</span> <span m='786700'>did</span> <span m='787210'>was</span>
  <span m='787390'>I</span> <span m='787770'>came</span> <span
  m='788010'>over</span> <span m='788160'>here</span> <span
  m='788390'>and</span> <span m='788500'>I</span> <span m='788570'>said</span>
  <span m='788760'>OK, P of x,</span> <span m='790110'>integral of</span> <span
  m='790450'>P</span> <span m='790590'>of x</span> <span m='790840'>from</span>
  <span m='790990'>minus</span> <span m='791150'>h</span> <span
  m='791250'>to</span> <span m='791500'>h.</span> <span m='792640'>I</span>
  <span m='792800'>wrote</span> <span m='793190'>P</span> <span
  m='793370'>of</span> <span m='793480'>x</span> <span m='793820'>in a</span>
  <span m='793860'>very</span> <span m='794090'>general</span> <span
  m='794490'>form.</span> <span m='796200'>And</span> <span
  m='796390'>then</span> <span m='796510'>I</span> <span
  m='796550'>actually</span> <span m='796940'>found</span> <span m='797170'>an
  integral.</span> <span m='797900'>I</span> <span m='798200'>came</span> <span
  m='798470'>through</span> <span m='798690'>and</span> <span
  m='798790'>after</span> <span m='800470'>writing</span> <span
  m='800810'>it</span> <span m='800900'>out,</span> <span
  m='801400'>calculating</span> <span m='801700'>the</span> <span
  m='801990'>integral,</span> <span m='802390'>I</span> <span
  m='802480'>got</span> <span m='802750'>to</span> <span m='802840'>this</span>
  <span m='803010'>expression.</span> <span m='803400'>This is</span> <span
  m='803790'>actually</span> <span m='805080'>the</span> <span
  m='805370'>integral</span> <span m='805490'>of</span> <span
  m='805710'>P</span> <span m='805820'>of</span> <span m='805920'>x</span> <span
  m='806140'>from</span> <span m='806310'>minus</span> <span m='806540'>h</span>
  <span m='806740'>to</span> <span m='806820'>h.</span> <span
  m='808180'>So</span> <span m='808360'>it's the</span> <span
  m='808510'>area</span> <span m='808750'>under</span> <span
  m='808930'>the</span> <span m='809050'>curve</span> <span m='809385'>of</span>
  <span m='809720'>P</span> <span m='809850'>of</span> <span m='809940'>x</span>
  <span m='810180'>from minus</span> <span m='810340'>h</span> <span
  m='810620'>to h is</span> <span m='811040'>that.</span> </p><p><span
  m='812270'>And now</span> <span m='812380'>I</span> <span
  m='812460'>had</span> <span m='812640'>to</span> <span
  m='812710'>figure</span> <span m='813030'>this</span> <span
  m='813230'>out,</span> <span m='813680'>how</span> <span m='813870'>to</span>
  <span m='814320'>write</span> <span m='814650'>this</span> <span
  m='814880'>in</span> <span m='815060'>terms</span> <span m='815510'>of</span>
  <span m='816290'>the</span> <span m='816420'>outputs</span> <span
  m='816930'>of</span> <span m='817170'>f of x.</span> <span
  m='818250'>Which</span> <span m='818480'>were</span> <span
  m='818680'>y_0,</span> <span m='819340'>y_1,</span> <span
  m='819800'>and</span> <span m='819920'>y_2.</span> <span
  m='820340'>Those</span> <span m='820540'>were</span> <span
  m='820640'>the</span> <span m='820720'>ones</span> <span m='820930'>we</span>
  <span m='821010'>were</span> <span m='821150'>interested</span> <span
  m='821620'>in.</span> <span m='822550'>So</span> <span m='822780'>I</span>
  <span m='822840'>ultimately</span> <span m='823300'>knew</span> <span
  m='823590'>I</span> <span m='823690'>wanted</span> <span m='824010'>an</span>
  <span m='824100'>h</span> <span m='824360'>over</span> <span
  m='824520'>three</span> <span m='824780'>in</span> <span
  m='824890'>front.</span> <span m='825270'>I</span> <span
  m='825430'>knew</span> <span m='825580'>I</span> <span
  m='825670'>wanted</span> <span m='825950'>my</span> <span
  m='826870'>integral</span> <span m='826990'>in</span> <span
  m='827030'>my</span> <span m='827220'>quadratic to be</span> <span
  m='828160'>h</span> <span m='828380'>over</span> <span m='828530'>3</span>
  <span m='828800'>times</span> <span m='829080'>something,</span> <span
  m='829980'>so</span> <span m='830220'>I</span> <span m='830290'>pulled</span>
  <span m='830770'>out</span> <span m='830980'>an</span> <span
  m='831060'>h</span> <span m='831280'>over</span> <span m='831450'>3,</span>
  <span m='832940'>and</span> <span m='833110'>then</span> <span
  m='833230'>I</span> <span m='833330'>looked</span> <span m='833560'>at</span>
  <span m='833630'>what</span> <span m='833790'>this</span> <span
  m='833970'>expression</span> <span m='834420'>was.</span> <span
  m='835340'>And</span> <span m='835460'>if</span> <span m='835530'>I</span>
  <span m='835610'>could</span> <span m='835710'>get</span> <span
  m='835860'>this</span> <span m='836030'>expression</span> <span
  m='836560'>to</span> <span m='836680'>look</span> <span m='836900'>like</span>
  <span m='837590'>the</span> <span m='837760'>inside</span> <span
  m='838200'>of</span> <span m='838270'>what</span> <span m='838430'>I</span>
  <span m='838480'>wanted,</span> <span m='838880'>which</span> <span
  m='839080'>was</span> <span m='839210'>y_0</span> <span m='839850'>plus</span>
  <span m='840150'>4y_1</span> <span m='840820'>plus</span> <span
  m='841030'>y_2,</span> <span m='841610'>I</span> <span m='841710'>was</span>
  <span m='841860'>in</span> <span m='841970'>business.</span> <span
  m='843460'>And so</span> <span m='843560'>then</span> <span
  m='843760'>I</span> <span m='843820'>used</span> <span
  m='845230'>outputs</span> <span m='845950'>that</span> <span
  m='846210'>I</span> <span m='846300'>knew</span> <span m='846700'>for</span>
  <span m='846870'>P</span> <span m='847120'>of</span> <span m='847230'>x</span>
  <span m='847940'>to</span> <span m='848080'>find</span> <span
  m='848890'>2A</span> <span m='849260'>h</span> <span m='849500'>squared</span>
  <span m='850190'>and</span> <span m='850320'>to</span> <span
  m='850410'>find</span> <span m='850690'>C.</span> <span m='851880'>I</span>
  <span m='852020'>know</span> <span m='852180'>P</span> <span
  m='852410'>of</span> <span m='852520'>h</span> <span m='853440'>is</span>
  <span m='853630'>the</span> <span m='853760'>output</span> <span
  m='854110'>of</span> <span m='854190'>the</span> <span m='854310'>f</span>
  <span m='854470'>of x</span> <span m='854720'>function</span> <span
  m='855290'>at</span> <span m='855410'>the</span> <span m='855490'>far</span>
  <span m='855710'>right,</span> <span m='856030'>which</span> <span
  m='856190'>was</span> <span m='856350'>y_2.</span> <span m='857560'>And</span>
  <span m='857750'>I</span> <span m='857810'>knew</span> <span
  m='857980'>P</span> <span m='858140'>of</span> <span m='858250'>minus</span>
  <span m='858570'>h</span> <span m='858780'>was</span> <span
  m='858930'>the</span> <span m='859030'>output</span> <span
  m='859380'>of</span> <span m='859470'>the</span> <span m='859570'>f of
  x</span> <span m='859990'>function</span> <span m='860370'>at</span> <span
  m='860500'>the</span> <span m='860570'>far</span> <span
  m='860790'>left.</span> <span m='861070'>That's</span> <span
  m='861250'>y_0.</span> <span m='862500'>I</span> <span
  m='862730'>actually</span> <span m='863000'>then</span> <span
  m='863170'>evaluate</span> <span m='863770'>P</span> <span
  m='864030'>at</span> <span m='864160'>h</span> <span m='864490'>and</span>
  <span m='864640'>minus</span> <span m='864940'>h,</span> <span
  m='865600'>and</span> <span m='865810'>when</span> <span m='865920'>I</span>
  <span m='865960'>add</span> <span m='866210'>those</span> <span
  m='866460'>together,</span> <span m='867170'>I</span> <span
  m='867590'>get</span> <span m='867780'>my</span> <span m='867920'>2A</span>
  <span m='868130'>h</span> <span m='868510'>squared</span> <span
  m='869220'>in</span> <span m='869410'>terms</span> <span m='869770'>of</span>
  <span m='869870'>y_0,</span> <span m='870310'>y_1,</span> <span
  m='870670'>and</span> <span m='870750'>y_2.</span> <span m='871600'>Let</span>
  <span m='871710'>me</span> <span m='871810'>do</span> <span
  m='872080'>this</span> <span m='872350'>in</span> <span
  m='872430'>terms</span> <span m='872690'>of</span> <span
  m='872770'>y_0,</span> <span m='873180'>y_1,</span> <span
  m='873260'>and</span> <span m='873530'>y_2.</span> <span
  m='874320'>Because</span> <span m='874580'>I</span> <span
  m='874650'>also</span> <span m='874920'>knew</span> <span m='875090'>C</span>
  <span m='876130'>was</span> <span m='876370'>y_1.</span> <span
  m='877030'>We</span> <span m='877220'>talked</span> <span
  m='877470'>about</span> <span m='877700'>that</span> <span
  m='877860'>as</span> <span m='877960'>well.</span> <span m='878180'>C</span>
  <span m='878420'>had</span> <span m='878600'>to</span> <span
  m='878660'>be</span> <span m='878770'>y_1.</span> <span m='879820'>So</span>
  <span m='880070'>I</span> <span m='880140'>can</span> <span
  m='880300'>then</span> <span m='880460'>do</span> <span m='880580'>the</span>
  <span m='880690'>substitution</span> <span m='881300'>I</span> <span
  m='881360'>need</span> <span m='881610'>right</span> <span
  m='881790'>here</span> <span m='883000'>and</span> <span
  m='883200'>show</span> <span m='883500'>where</span> <span
  m='883680'>the</span> <span m='883770'>coefficients</span> <span
  m='884260'>in</span> <span m='884380'>Simpson's</span> <span
  m='884720'>rule</span> <span m='884870'>come</span> <span
  m='885070'>from.</span> <span m='886750'>So hopefully</span> <span
  m='887060'>that</span> <span m='887180'>was</span> <span
  m='887280'>informative</span> <span m='887750'>for</span> <span
  m='887860'>you.</span> <span m='888390'>And</span> <span m='888610'>I</span>
  <span m='888670'>think</span> <span m='888830'>I'll</span> <span
  m='888920'>stop</span> <span m='889120'>there.</span> </p>
embedded_media:
  - uid: 3964ac9c7526abc021cee60a2e86e79a
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: uc4xJsi99bk
  - uid: 3b7ca0f6d95591bcbd6a4b3354a4b364
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/uc4xJsi99bk/default.jpg'
  - uid: 8a101111e7eab825856c0b41e5728862
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: uc4xJsi99bk
  - uid: 4306f2c76edaedc71fd6c8b55aa22381
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: uc4xJsi99bk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-c-average-value-probability-and-numerical-integration/session-63-numerical-integration/explanation-of-simpsons-rule/uc4xJsi99bk.srt
  - uid: 4c6f69e8536da53a127ccf4434f9dbc7
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: uc4xJsi99bk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-c-average-value-probability-and-numerical-integration/session-63-numerical-integration/explanation-of-simpsons-rule/uc4xJsi99bk.pdf
  - uid: 06d01ec38c53a1f77a60d4499d30decd
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 22398414da18d8fcd0d2f3612e943d47
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: b8a4bc6aeac4b19a069804ceb126755e
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_48_300k.mp4'
  - uid: 96ee6cf2f72d5e5cde308708a066000c
    parent_uid: 3f93839d9f460a25b64b99e79eaadd7f
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/explanation-of-simpsons-rule/id414308064?i=90319640
type: courses
layout: video
---
