---
title: Arc Length of y=x3/2
uid: 4a85b6bccce1e65dc8d2190a38cc7a69
parent_uid: 5c900cbf5c7bc84e4bc0086224a0a1bd
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-78-computing-the-length-of-a-curve/arc-length-of-y-x3-2
short_url: arc-length-of-y-x3-2
inline_embed_id: 45407854arclengthofy=x3/241712275
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6910'>Hi.</span> <span m='7360'>Welcome</span> <span
  m='7710'>back</span> <span m='7920'>to</span> <span
  m='8010'>recitation.</span> <span m='9020'>Today</span> <span
  m='9410'>we're</span> <span m='9580'>going to</span> <span m='9760'>do</span>
  <span m='9900'>a</span> <span m='10090'>nice</span> <span
  m='10370'>little</span> <span m='10580'>problem</span> <span
  m='10990'>involving</span> <span m='11420'>computing</span> <span
  m='11830'>the</span> <span m='11980'>arc</span> <span m='12200'>length</span>
  <span m='12460'>of</span> <span m='12550'>a</span> <span
  m='12600'>curve.</span> <span m='13530'>So</span> <span m='14210'>in</span>
  <span m='14360'>particular,</span> <span m='15350'>consider</span> <span
  m='15750'>the</span> <span m='15860'>curve</span> <span m='16340'>given</span>
  <span m='16600'>by</span> <span m='16740'>the</span> <span
  m='16850'>equation</span> <span m='17290'>y</span> <span
  m='17690'>equals</span> <span m='18065'>x</span> <span m='18440'>to</span>
  <span m='18560'>the</span> <span m='18660'>3/2.</span> <span
  m='20250'>So</span> <span m='21000'>I</span> <span m='21150'>have</span> <span
  m='21420'>here</span> <span m='22320'>a</span> <span m='22870'>kind</span>
  <span m='23150'>of</span> <span m='23230'>mediocre</span> <span
  m='23760'>sketch</span> <span m='24160'>of</span> <span m='24240'>what</span>
  <span m='24420'>that</span> <span m='24590'>curve</span> <span
  m='24860'>looks</span> <span m='25070'>like.</span> <span m='25260'>You</span>
  <span m='25350'>know,</span> <span m='25490'>it's</span> <span
  m='26710'>curving</span> <span m='27170'>upwards</span> <span
  m='27990'>not</span> <span m='28280'>quite</span> <span m='28500'>as</span>
  <span m='28610'>fast</span> <span m='28980'>as</span> <span m='29300'>a</span>
  <span m='29370'>parabola</span> <span m='29920'>would.</span> <span
  m='31960'>So</span> <span m='32160'>I'm</span> <span
  m='32360'>interested</span> <span m='33240'>in</span> <span
  m='33600'>the</span> <span m='33650'>piece</span> <span m='33960'>of</span>
  <span m='34050'>that</span> <span m='34270'>curve</span> <span
  m='34980'>for</span> <span m='35250'>x</span> <span m='35520'>between</span>
  <span m='35840'>0</span> <span m='36190'>and</span> <span m='36330'>4,</span>
  <span m='36930'>which</span> <span m='37170'>I've</span> <span
  m='37310'>drawn</span> <span m='37580'>here.</span> <span m='38420'>So</span>
  <span m='38600'>why</span> <span m='38740'>don't</span> <span
  m='38820'>you</span> <span m='39090'>take</span> <span m='39310'>a</span>
  <span m='39360'>minute,</span> <span m='39900'>pause the</span> <span
  m='40260'>video,</span> <span m='41080'>compute</span> <span
  m='41420'>the</span> <span m='41500'>arc</span> <span m='41690'>length</span>
  <span m='41860'>of</span> <span m='41960'>this</span> <span
  m='42160'>curve,</span> <span m='42550'>come</span> <span
  m='42770'>back,</span> <span m='43030'>and</span> <span m='43120'>we</span>
  <span m='43210'>can</span> <span m='43340'>compute it</span> <span
  m='43690'>together.</span> </p><p><span m='52520'>All</span> <span
  m='52640'>right.</span> <span m='52870'>Welcome</span> <span
  m='53150'>back.</span> <span m='53410'>Hopefully</span> <span
  m='53760'>you</span> <span m='53840'>had</span> <span m='54030'>some</span>
  <span m='54160'>luck</span> <span m='54410'>computing</span> <span
  m='54820'>this</span> <span m='54970'>arc</span> <span m='55190'>length</span>
  <span m='55410'>here.</span> <span m='55610'>So</span> <span
  m='56470'>let's</span> <span m='57160'>set</span> <span m='57330'>about</span>
  <span m='57620'>doing</span> <span m='57840'>it.</span> <span
  m='57990'>So</span> <span m='59760'>I'm</span> <span m='60010'>sure</span>
  <span m='60210'>you</span> <span m='60330'>remember</span> <span
  m='60760'>that</span> <span m='60900'>in</span> <span m='60970'>order</span>
  <span m='61190'>to</span> <span m='61270'>compute</span> <span
  m='61620'>arc</span> <span m='61850'>length,</span> <span
  m='62520'>first</span> <span m='62970'>you</span> <span m='63030'>have</span>
  <span m='63160'>to</span> <span m='63260'>compute</span> <span
  m='64140'>the</span> <span m='65550'>little</span> <span
  m='66180'>piece</span> <span m='66490'>of</span> <span m='66600'>arc</span>
  <span m='66820'>length</span> <span m='67300'>ds.</span> <span
  m='67940'>And</span> <span m='68150'>we have a</span> <span
  m='68230'>couple</span> <span m='68520'>of</span> <span
  m='68610'>different</span> <span m='68910'>formulas</span> <span
  m='69320'>for</span> <span m='69460'>that.</span> <span m='69860'>So</span>
  <span m='70060'>then</span> <span m='70240'>after</span> <span
  m='70580'>that,</span> <span m='71000'>you</span> <span m='71440'>get</span>
  <span m='71600'>an</span> <span m='71690'>integral,</span> <span
  m='72190'>and</span> <span m='72470'>then</span> <span
  m='72700'>hopefully</span> <span m='73060'>it's</span> <span
  m='73170'>an</span> <span m='73250'>integral</span> <span m='73580'>you</span>
  <span m='73680'>can</span> <span m='73840'>compute.</span> </p><p><span
  m='74390'>So</span> <span m='74890'>let's</span> <span
  m='75050'>remember</span> <span m='75450'>what</span> <span
  m='75980'>ds</span> <span m='76680'>is.</span> <span m='76980'>So</span> <span
  m='77770'>there are</span> <span m='78100'>a</span> <span m='78430'>couple
  of</span> <span m='78710'>different</span> <span m='79000'>ways</span> <span
  m='79790'>to</span> <span m='79900'>remember</span> <span m='80290'>it.</span>
  <span m='80390'>One</span> <span m='80630'>way,</span> <span
  m='81360'>that</span> <span m='81570'>I</span> <span m='81690'>like,</span>
  <span m='81960'>is</span> <span m='82090'>to</span> <span
  m='82230'>write</span> <span m='82530'>ds</span> <span m='83480'>equals</span>
  <span m='83850'>the</span> <span m='83950'>square</span> <span
  m='84330'>root</span> <span m='85270'>of</span> <span m='85530'>dx</span>
  <span m='85910'>squared</span> <span m='87430'>plus</span> <span
  m='87630'>dy</span> <span m='88080'>squared.</span> <span m='89540'>So</span>
  <span m='89670'>this</span> <span m='89860'>always</span> <span
  m='90620'>reminds</span> <span m='91070'>me</span> <span m='91200'>of</span>
  <span m='91300'>the</span> <span m='91410'>Pythagorean</span> <span
  m='92080'>theorem,</span> <span m='92390'>so</span> <span m='92500'>I</span>
  <span m='92600'>find</span> <span m='92870'>it</span> <span
  m='92950'>easy</span> <span m='93200'>to</span> <span
  m='93310'>remember.</span> <span m='94350'>And</span> <span
  m='94590'>then</span> <span m='94690'>from</span> <span m='94830'>here,</span>
  <span m='95480'>it's</span> <span m='95980'>not</span> <span
  m='96170'>very</span> <span m='96340'>hard</span> <span m='96610'>to</span>
  <span m='96700'>get</span> <span m='96860'>the</span> <span
  m='97250'>other</span> <span m='97450'>form,</span> <span
  m='97710'>which</span> <span m='97860'>is,</span> <span m='97960'>you</span>
  <span m='98040'>can</span> <span m='98220'>divide</span> <span
  m='99030'>through</span> <span m='99350'>by a</span> <span m='99700'>dx</span>
  <span m='100080'>squared</span> <span m='100410'>inside</span> <span
  m='100980'>and</span> <span m='101430'>multiply</span> <span
  m='101890'>by</span> <span m='102100'>dx</span> <span
  m='102500'>outside.</span> </p><p><span m='103100'>So</span> <span
  m='103290'>you</span> <span m='103400'>can</span> <span m='103530'>also</span>
  <span m='103780'>write</span> <span m='104070'>this</span> <span
  m='104790'>as</span> <span m='105340'>the</span> <span
  m='105470'>square</span> <span m='105900'>root</span> <span
  m='106950'>of</span> <span m='107270'>1</span> <span m='107830'>plus</span>
  <span m='109590'>dy/dx</span> <span m='112300'>squared</span> <span
  m='115720'>dx.</span> <span m='116260'>And</span> <span m='116400'>when</span>
  <span m='116510'>you</span> <span m='116610'>write</span> <span m='116960'>it
  in</span> <span m='117150'>this</span> <span m='117380'>form-- it's, you
  know,</span> <span m='118130'>this</span> <span m='118340'>is</span> <span
  m='119000'>the</span> <span m='119080'>form</span> <span
  m='119340'>that</span> <span m='119620'>you</span> <span m='119770'>can</span>
  <span m='119890'>actually</span> <span m='120240'>use</span> <span
  m='120570'>to</span> <span m='121000'>integrate</span> <span
  m='121260'>it,</span> <span m='121520'>to</span> <span
  m='121680'>actually</span> <span m='122040'>compute</span> <span
  m='122350'>the</span> <span m='122430'>value</span> <span m='122710'>in</span>
  <span m='122780'>question.</span> </p><p><span m='123720'>So</span> <span
  m='124050'>in</span> <span m='124230'>our</span> <span m='124440'>case,</span>
  <span m='125340'>we</span> <span m='125470'>have</span> <span
  m='126080'>y</span> <span m='126340'>as a</span> <span
  m='126480'>function</span> <span m='126800'>of x,</span> <span
  m='127100'>right?</span> <span m='127320'>So</span> <span m='127940'>we
  just</span> <span m='128210'>have</span> <span m='128360'>to</span> <span
  m='128450'>compete</span> <span m='128930'>dy/dx.</span> <span
  m='130100'>So</span> <span m='130220'>y</span> <span m='130570'>is x</span>
  <span m='130930'>to</span> <span m='131020'>the</span> <span
  m='131130'>3/2,</span> <span m='131650'>so</span> <span
  m='131840'>dy/dx</span> <span m='132550'>is</span> <span
  m='133410'>easy</span> <span m='133620'>to</span> <span
  m='133720'>compute,</span> <span m='134060'>y</span> <span
  m='134250'>prime,</span> <span m='135490'>dy/dx</span> <span
  m='136390'>is</span> <span m='136610'>just</span> <span m='138010'>3/2</span>
  <span m='139720'>x</span> <span m='140150'>to</span> <span
  m='140220'>the</span> <span m='140290'>1/2,</span> <span m='140730'>or</span>
  <span m='141090'>3/2</span> <span m='141660'>square root</span> <span
  m='142080'>of</span> <span m='142150'>x.</span> <span m='142950'>So</span>
  <span m='143690'>ds,</span> <span m='144420'>then--</span> <span
  m='144910'>well,</span> <span m='145120'>we</span> <span
  m='145210'>just</span> <span m='145330'>have</span> <span m='145440'>to</span>
  <span m='145950'>plug</span> <span m='146210'>it</span> <span
  m='146290'>in</span> <span m='146430'>there.</span> <span m='146810'>So</span>
  <span m='147480'>that</span> <span m='147670'>means</span> <span
  m='148820'>ds</span> <span m='150120'>is</span> <span m='150290'>equal</span>
  <span m='150510'>to</span> <span m='150620'>the</span> <span
  m='150730'>square</span> <span m='151120'>root</span> <span
  m='152100'>of</span> <span m='152320'>1</span> <span m='152750'>plus--</span>
  <span m='153190'>OK.</span> <span m='153470'>So</span> <span
  m='153630'>now</span> <span m='153750'>you</span> <span m='153870'>have</span>
  <span m='153990'>to</span> <span m='154100'>square</span> <span
  m='154430'>this.</span> <span m='154880'>Well,</span> <span
  m='155030'>3/2</span> <span m='155630'>squared</span> <span
  m='156060'>is</span> <span m='156170'>just</span> <span m='156360'>9/4,</span>
  <span m='157460'>and the</span> <span m='157820'>square root of</span> <span
  m='158160'>x</span> <span m='158480'>squared</span> <span m='158690'>is</span>
  <span m='158770'>x.</span> <span m='159160'>So</span> <span
  m='159250'>this</span> <span m='159410'>is</span> <span m='160270'>9/4</span>
  <span m='160726'>x</span> <span m='165310'>dx.</span> </p><p><span
  m='166270'>So</span> <span m='166670'>this</span> <span m='166880'>is</span>
  <span m='167010'>the</span> <span m='167090'>thing</span> <span
  m='167300'>that</span> <span m='167400'>we</span> <span m='167510'>want</span>
  <span m='167680'>to</span> <span m='167750'>integrate.</span> <span
  m='168530'>And</span> <span m='168740'>now</span> <span m='168850'>you</span>
  <span m='168980'>need</span> <span m='169200'>bounds</span> <span
  m='169640'>of</span> <span m='169740'>integration.</span> <span
  m='170840'>So</span> <span m='170980'>in</span> <span m='171060'>our</span>
  <span m='171200'>case,</span> <span m='171820'>this</span> <span
  m='172050'>is</span> <span m='172240'>dx.</span> <span m='172700'>We</span>
  <span m='172830'>want</span> <span m='172970'>to</span> <span
  m='173050'>integrate</span> <span m='173470'>with</span> <span
  m='173600'>respect</span> <span m='173970'>to x,</span> <span
  m='174420'>so</span> <span m='174630'>we</span> <span m='174730'>need</span>
  <span m='174930'>bounds</span> <span m='175250'>on</span> <span
  m='175400'>x.</span> <span m='175630'>And</span> <span
  m='175750'>luckily</span> <span m='176060'>we</span> <span m='176180'>have
  them.</span> <span m='176610'>We</span> <span m='176720'>have</span> <span
  m='177340'>0</span> <span m='177610'>less</span> <span m='177910'>than or
  equal</span> <span m='178280'>to</span> <span m='178380'>x, less than</span>
  <span m='178840'>or equal</span> <span m='179090'>to</span> <span
  m='179170'>4,</span> <span m='179550'>the</span> <span m='179690'>bounds
  that</span> <span m='180150'>we</span> <span m='180270'>want.</span> <span
  m='180910'>So</span> <span m='181980'>the</span> <span m='182440'>arc
  length</span> <span m='183090'>in</span> <span m='183180'>question</span>
  <span m='187362'>is the</span> <span m='187820'>integral</span> <span
  m='189090'>from</span> <span m='189350'>0</span> <span m='189600'>to</span>
  <span m='189680'>4</span> <span m='190630'>of</span> <span
  m='191890'>square</span> <span m='192355'>root of</span> <span
  m='192820'>1</span> <span m='194150'>plus</span> <span m='194420'>9/4</span>
  <span m='195610'>x</span> <span m='197938'>dx.</span> </p><p><span
  m='198940'>Now,</span> <span m='199780'>this</span> <span
  m='200010'>curve</span> <span m='200410'>has</span> <span
  m='201180'>the</span> <span m='201400'>property</span> <span
  m='201910'>that</span> <span m='202320'>this</span> <span m='202530'>is
  an</span> <span m='202890'>integral</span> <span m='203130'>we</span> <span
  m='203240'>actually</span> <span m='203560'>know</span> <span
  m='203680'>how</span> <span m='203760'>to</span> <span
  m='203840'>compute.</span> <span m='204710'>Right?</span> <span
  m='204960'>There's</span> <span m='205150'>a--</span> <span
  m='205470'>well,</span> <span m='205820'>OK.</span> <span m='206020'>So</span>
  <span m='207520'>I</span> <span m='208580'>always</span> <span
  m='208920'>lose</span> <span m='209150'>track</span> <span
  m='209430'>of</span> <span m='209510'>my</span> <span
  m='209630'>constants</span> <span m='210100'>when</span> <span
  m='210220'>I</span> <span m='210270'>do</span> <span m='210410'>this,</span>
  <span m='210810'>so</span> <span m='210900'>I'm</span> <span m='210980'>going
  to</span> <span m='211140'>do</span> <span m='211250'>an</span> <span
  m='211310'>extra</span> <span m='211610'>substitution,</span> <span
  m='212230'>and</span> <span m='212400'>then</span> <span
  m='212620'>it'll</span> <span m='212790'>be</span> <span
  m='212880'>really</span> <span m='213150'>easy.</span> <span
  m='213550'>But</span> <span m='215890'>you</span> <span
  m='215990'>know,</span> <span m='216100'>this</span> <span
  m='216300'>is</span> <span m='216420'>an</span> <span
  m='216650'>integral--</span> <span m='217090'>many</span> <span
  m='217540'>of</span> <span m='217610'>you</span> <span m='217710'>can</span>
  <span m='217830'>probably</span> <span m='218170'>do</span> <span
  m='218370'>this</span> <span m='218540'>one</span> <span m='218720'>in</span>
  <span m='218800'>your</span> <span m='218920'>heads,</span> <span
  m='219400'>basically,</span> <span m='219870'>at</span> <span
  m='219940'>this</span> <span m='220120'>point.</span> </p><p><span
  m='221050'>This</span> <span m='221240'>is</span> <span
  m='221340'>unusual.</span> <span m='223370'>Even</span> <span
  m='223750'>most</span> <span m='224110'>polynomials</span> <span
  m='225010'>that</span> <span m='225160'>you</span> <span
  m='225720'>write</span> <span m='225960'>down,</span> <span
  m='226130'>computing</span> <span m='226520'>their</span> <span
  m='226640'>arc</span> <span m='226870'>length</span> <span
  m='227040'>is</span> <span m='227190'>really</span> <span
  m='227400'>hard.</span> <span m='227780'>You</span> <span
  m='227890'>get</span> <span m='228350'>nasty</span> <span
  m='228930'>things</span> <span m='229310'>popping</span> <span
  m='229700'>up.</span> <span m='230230'>So,</span> <span m='230540'>you</span>
  <span m='230680'>know,</span> <span m='230800'>I</span> <span
  m='231070'>sort</span> <span m='231280'>of</span> <span
  m='231850'>conspired</span> <span m='232930'>to</span> <span
  m='233120'>choose</span> <span m='233550'>a</span> <span m='233850'>one</span>
  <span m='234280'>that</span> <span m='234660'>will</span> <span
  m='234860'>have</span> <span m='235290'>a</span> <span m='235460'>value</span>
  <span m='235830'>that</span> <span m='235980'>we</span> <span
  m='236090'>can</span> <span m='236900'>integrate</span> <span
  m='237360'>by</span> <span m='237480'>hand.</span> <span m='237880'>You</span>
  <span m='237950'>don't</span> <span m='238110'>need</span> <span
  m='238240'>to</span> <span m='238330'>resort</span> <span m='238690'>to</span>
  <span m='238780'>any</span> <span m='238940'>sort</span> <span
  m='239150'>of</span> <span m='239210'>numerical</span> <span
  m='239720'>method.</span> <span m='240920'>But</span> <span
  m='241090'>it</span> <span m='241150'>happens,</span> <span
  m='241640'>in</span> <span m='241770'>this</span> <span
  m='241910'>case,</span> <span m='242130'>that</span> <span
  m='242300'>that</span> <span m='242950'>did</span> <span
  m='243120'>happen,</span> <span m='243420'>and</span> <span
  m='243550'>that's</span> <span m='243750'>nice.</span> <span
  m='243970'>So</span> <span m='244100'>we</span> <span m='244210'>can</span>
  <span m='244630'>we can</span> <span m='244880'>actually</span> <span
  m='245220'>write</span> <span m='245450'>down</span> <span
  m='245650'>what</span> <span m='245780'>this</span> <span
  m='245930'>arc</span> <span m='246110'>length</span> <span
  m='246280'>is.</span> </p><p><span m='246620'>So</span> <span
  m='246850'>I'm</span> <span m='247030'>going to</span> <span
  m='247550'>do</span> <span m='247670'>the</span> <span
  m='247760'>substitution,</span> <span m='249170'>u</span> <span
  m='250540'>equals</span> <span m='251790'>1</span> <span
  m='253150'>plus</span> <span m='253520'>9/4</span> <span m='255550'>x.</span>
  <span m='256750'>So</span> <span m='256960'>with</span> <span
  m='257100'>this</span> <span m='257210'>substitution,</span> <span
  m='259090'>I</span> <span m='259560'>get that</span> <span
  m='259820'>du</span> <span m='261220'>is</span> <span m='261450'>equal</span>
  <span m='262090'>to</span> <span m='263240'>9/4</span> <span
  m='264970'>dx,</span> <span m='265150'>and</span> <span
  m='265600'>since</span> <span m='265750'>I</span> <span m='265840'>want
  to</span> <span m='266050'>substitute it</span> <span m='266700'>the</span>
  <span m='266840'>other</span> <span m='267060'>way,</span> <span
  m='267700'>I</span> <span m='267980'>could</span> <span
  m='268150'>write</span> <span m='268360'>that</span> <span
  m='268500'>as</span> <span m='268710'>dx</span> <span m='269180'>equals</span>
  <span m='270520'>4/9</span> <span m='272450'>du.</span> <span
  m='272950'>And</span> <span m='273130'>I</span> <span m='273180'>also</span>
  <span m='273470'>need</span> <span m='273690'>to</span> <span
  m='273760'>change</span> <span m='274170'>bounds,</span> <span
  m='275190'>so</span> <span m='275480'>when</span> <span m='277110'>x</span>
  <span m='277370'>equals</span> <span m='277850'>0,</span> <span
  m='279090'>that</span> <span m='279280'>goes</span> <span m='279780'>to
  u,</span> <span m='280630'>I</span> <span m='280750'>put</span> <span
  m='280910'>the</span> <span m='281020'>0</span> <span m='281250'>here,</span>
  <span m='281400'>u</span> <span m='281590'>is</span> <span
  m='281720'>equal</span> <span m='281910'>to</span> <span m='282000'>1</span>
  <span m='283070'>when</span> <span m='283270'>x is</span> <span
  m='283710'>equal</span> <span m='283960'>to</span> <span m='284060'>4.</span>
  <span m='285550'>So</span> <span m='285750'>I</span> <span
  m='285800'>put</span> <span m='286010'>4</span> <span m='286300'>in</span>
  <span m='286360'>here.</span> <span m='286520'>That</span> <span
  m='286660'>goes</span> <span m='286810'>to</span> <span m='286920'>u</span>
  <span m='288330'>equals</span> <span m='289360'>10,</span> <span
  m='290340'>and so,</span> <span m='290540'>OK.</span> </p><p><span
  m='290790'>With</span> <span m='290950'>those</span> <span
  m='291210'>substitutions,</span> <span m='292420'>I</span> <span
  m='292570'>get</span> <span m='292840'>that</span> <span m='295870'>the
  arc</span> <span m='296170'>length</span> <span m='296420'>that</span> <span
  m='296540'>I'm</span> <span m='296680'>interested</span> <span m='297120'>in
  is</span> <span m='297610'>the</span> <span m='297800'>integral</span> <span
  m='298180'>from</span> <span m='298400'>1</span> <span m='299480'>to</span>
  <span m='299620'>10</span> <span m='300910'>of</span> <span
  m='302680'>4/9</span> <span m='304700'>times</span> <span
  m='304940'>the</span> <span m='305040'>square root</span> <span
  m='305490'>of</span> <span m='305590'>u</span> <span m='307060'>du.</span>
  <span m='308010'>OK.</span> <span m='308450'>And</span> <span
  m='308690'>so</span> <span m='308790'>now</span> <span m='308930'>this</span>
  <span m='309090'>is, you know,</span> <span m='310030'>really</span> <span
  m='310390'>easy.</span> <span m='311390'>So</span> <span
  m='311530'>this</span> <span m='311720'>is</span> <span m='312270'>u</span>
  <span m='312600'>to</span> <span m='312710'>the</span> <span
  m='312810'>1/2,</span> <span m='314010'>so</span> <span m='314230'>I</span>
  <span m='314340'>integrate</span> <span m='314950'>that,</span> <span
  m='315830'>so</span> <span m='316000'>I'm</span> <span m='316070'>going
  to</span> <span m='316240'>get</span> <span m='316450'>u</span> <span
  m='316710'>to</span> <span m='316830'>the</span> <span m='317130'>3/2</span>
  <span m='318440'>divided</span> <span m='318960'>by</span> <span
  m='319170'>3/2.</span> <span m='320340'>So</span> <span m='320520'>this</span>
  <span m='320760'>is</span> <span m='322330'>4/9</span> <span
  m='324520'>times</span> <span m='326460'>u</span> <span m='326730'>to</span>
  <span m='326900'>the</span> <span m='327050'>3/2</span> <span
  m='328950'>divided</span> <span m='330850'>by</span> <span
  m='331060'>3/2</span> <span m='333670'>between</span> <span
  m='335130'>u</span> <span m='335330'>equals</span> <span m='335700'>1</span>
  <span m='336910'>and</span> <span m='337140'>u</span> <span
  m='337280'>equals</span> <span m='337590'>10.</span> </p><p><span
  m='338220'>OK.</span> <span m='338560'>So</span> <span m='339210'>I</span>
  <span m='339400'>can</span> <span m='339750'>divide</span> <span
  m='340260'>here,</span> <span m='340530'>so</span> <span
  m='340670'>this</span> <span m='340910'>becomes</span> <span
  m='341640'>8/27</span> <span m='343050'>is</span> <span m='343180'>the</span>
  <span m='343270'>constant.</span> <span m='345010'>So</span> <span
  m='345170'>this</span> <span m='345360'>is</span> <span m='346430'>8 over
  27</span> <span m='349160'>times</span> <span m='352490'>10</span> <span
  m='352750'>to</span> <span m='352840'>the</span> <span m='352940'>3/2</span>
  <span m='354750'>minus</span> <span m='355510'>1</span> <span
  m='355890'>to</span> <span m='356000'>the</span> <span m='356110'>3/2,</span>
  <span m='356350'>is</span> <span m='356790'>just</span> <span
  m='357490'>1.</span> </p><p><span m='358480'>OK.</span> <span
  m='359020'>So</span> <span m='359650'>now</span> <span m='359850'>if</span>
  <span m='360110'>you</span> <span m='360200'>wanted</span> <span
  m='360440'>to, you know,</span> <span m='361360'>get</span> <span
  m='362950'>a</span> <span m='363100'>decimal</span> <span
  m='363510'>approximation</span> <span m='364140'>for</span> <span
  m='364240'>this</span> <span m='364370'>number,</span> <span
  m='364570'>you</span> <span m='364670'>could</span> <span
  m='364770'>put</span> <span m='365000'>this</span> <span
  m='365120'>into</span> <span m='365280'>a</span> <span
  m='365340'>calculator.</span> <span m='366010'>You</span> <span
  m='366190'>can</span> <span m='366300'>also</span> <span
  m='366590'>kind</span> <span m='366820'>of</span> <span
  m='366920'>eyeball</span> <span m='367420'>what</span> <span
  m='367600'>this</span> <span m='367780'>is,</span> <span m='368290'>because
  10,</span> <span m='369660'>the</span> <span m='369760'>square root</span>
  <span m='370140'>of</span> <span m='370220'>10</span> <span
  m='370460'>is</span> <span m='370580'>just</span> <span m='370710'>a</span>
  <span m='370770'>little</span> <span m='370980'>bigger</span> <span
  m='371190'>than</span> <span m='371360'>3,</span> <span m='372110'>so</span>
  <span m='372330'>this</span> <span m='372460'>is, you know,</span> <span
  m='373460'>bigger</span> <span m='373690'>than</span> <span
  m='373890'>27,</span> <span m='374690'>so</span> <span m='374860'>this</span>
  <span m='375020'>is</span> <span m='375160'>bigger</span> <span
  m='375400'>than</span> <span m='375560'>26.</span> <span m='376480'>So</span>
  <span m='376750'>this</span> <span m='377190'>whole</span> <span
  m='377410'>thing</span> <span m='377730'>is</span> <span
  m='377890'>probably</span> <span m='378700'>about</span> <span
  m='379160'>8</span> <span m='379510'>or</span> <span m='379690'>a</span> <span
  m='379750'>little</span> <span m='379960'>bit</span> <span
  m='380160'>larger.</span> <span m='381280'>Probably</span> <span
  m='381590'>going</span> <span m='381730'>to</span> <span m='381800'>be</span>
  <span m='381910'>a</span> <span m='382010'>little</span> <span
  m='382280'>bit</span> <span m='382430'>larger</span> <span
  m='382760'>than</span> <span m='382910'>8,</span> <span
  m='383150'>would</span> <span m='383290'>be</span> <span m='383400'>my</span>
  <span m='383550'>guess.</span> <span m='384810'>So</span> <span
  m='384940'>that's,</span> <span m='385320'>you</span> <span
  m='385440'>know,</span> <span m='386090'>just</span> <span
  m='386610'>rough</span> <span m='386940'>eyeballing.</span> <span
  m='387520'>Since</span> <span m='387700'>you're</span> <span
  m='387810'>all</span> <span m='387940'>sitting</span> <span
  m='388200'>in</span> <span m='388290'>front</span> <span m='388490'>of</span>
  <span m='388560'>a</span> <span m='388630'>computer,</span> <span
  m='389070'>I'm</span> <span m='389190'>sure</span> <span m='389400'>you</span>
  <span m='390050'>can</span> <span m='390210'>get</span> <span
  m='390360'>a</span> <span m='390410'>more</span> <span
  m='390580'>precise</span> <span m='391840'>estimate</span> <span
  m='394120'>on</span> <span m='394330'>your</span> <span m='394480'>own.</span>
  </p><p><span m='395340'>But</span> <span m='395460'>there</span> <span
  m='395580'>we</span> <span m='395670'>go.</span> <span m='395980'>So</span>
  <span m='398580'>very</span> <span m='398850'>much</span> <span
  m='399170'>just</span> <span m='399400'>applying</span> <span
  m='400300'>the</span> <span m='400830'>sort</span> <span m='401040'>of</span>
  <span m='401110'>straightforward</span> <span m='402140'>tools</span> <span
  m='402610'>that</span> <span m='402720'>we've</span> <span
  m='403720'>developed</span> <span m='404130'>for</span> <span
  m='404250'>computing</span> <span m='404640'>arc</span> <span
  m='404840'>lengths.</span> <span m='405390'>You</span> <span
  m='405700'>know,</span> <span m='406030'>using</span> <span
  m='406340'>our</span> <span m='406430'>formulas</span> <span
  m='407000'>for</span> <span m='407560'>the</span> <span
  m='408370'>little</span> <span m='408570'>element</span> <span
  m='408960'>of</span> <span m='409040'>arc</span> <span
  m='409190'>length,</span> <span m='409480'>for</span> <span
  m='409610'>the</span> <span m='409830'>differential</span> <span
  m='410320'>of</span> <span m='410390'>arc</span> <span
  m='410590'>length.</span> <span m='411620'>Computing</span> <span
  m='412050'>a</span> <span m='412100'>derivative,</span> <span
  m='412670'>plugging</span> <span m='413020'>it</span> <span
  m='413090'>in.</span> <span m='413390'>And it</span> <span
  m='413580'>happens,</span> <span m='413980'>in</span> <span
  m='414060'>this</span> <span m='414180'>case,</span> <span
  m='414420'>that</span> <span m='414520'>we</span> <span m='414600'>got</span>
  <span m='414730'>something</span> <span m='415400'>that</span> <span
  m='415930'>we</span> <span m='416050'>can</span> <span
  m='416190'>actually</span> <span m='416820'>evaluate</span> <span
  m='417450'>the</span> <span m='417540'>resulting</span> <span
  m='417960'>integral</span> <span m='418770'>in</span> <span
  m='419150'>a</span> <span m='419250'>nice</span> <span
  m='419550'>closed</span> <span m='419900'>form.</span> </p><p><span
  m='420630'>So I'll</span> <span m='420970'>stop</span> <span
  m='421140'>there.</span> </p>
embedded_media:
  - uid: e45d7c0dad0d57eaf1944dba3bfb8cd1
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: VOlbVNxyNfM
  - uid: 90d7565c9857a7684502767912cf7746
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/VOlbVNxyNfM/default.jpg'
  - uid: 7a71cf1f90ff593cfc9ca0c323292898
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: VOlbVNxyNfM
  - uid: 6dd6f59cb2e65642b270f5d74d3aca78
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: VOlbVNxyNfM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-78-computing-the-length-of-a-curve/arc-length-of-y-x3-2/VOlbVNxyNfM.srt
  - uid: 2f044499143128dfa0465afea33d0186
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: VOlbVNxyNfM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-b-partial-fractions-integration-by-parts-arc-length-and-surface-area/session-78-computing-the-length-of-a-curve/arc-length-of-y-x3-2/VOlbVNxyNfM.pdf
  - uid: 95948d63db85d91d2b86568d1337c564
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: e5fbdb459c5c9ef5a480b4466818b105
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: bf2d1eff8a2241e5cba8b7c0e320f6dc
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_58_300k.mp4'
  - uid: ec993286699ef247b7e7e5fb252993b4
    parent_uid: 4a85b6bccce1e65dc8d2190a38cc7a69
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/arc-length-of-y-x-2-3/id414308064?i=90319632
type: courses
layout: video
---
