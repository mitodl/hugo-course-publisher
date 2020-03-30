---
title: Quadratic Approximation of an Exponential Function
uid: f941a2b8c3731e9834c3c5a50c30d794
parent_uid: c5bed9b53f5684d68d5b41fd3419190b
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-25-introduction-to-quadratic-appoximation/quadratic-approximation-of-an-exponential-function
short_url: quadratic-approximation-of-an-exponential-function
inline_embed_id: 60339599quadraticapproximationofanexponentialfunction37853587
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>JOEL LEWIS:</span> <span m='7250'>Hi.</span> <span
  m='7740'>Welcome</span> <span m='8020'>back</span> <span m='8210'>to</span>
  <span m='8300'>recitation.</span> </p><p><span m='9360'>In</span> <span
  m='9580'>lecture</span> <span m='10040'>you've</span> <span
  m='10250'>started</span> <span m='10670'>learning</span> <span
  m='10930'>about</span> <span m='11200'>quadratic</span> <span
  m='11600'>approximation.</span> <span m='12560'>So</span> <span
  m='13020'>today</span> <span m='13630'>we're</span> <span
  m='13890'>just</span> <span m='14110'>going</span> <span m='14200'>to</span>
  <span m='14290'>do</span> <span m='14430'>a</span> <span
  m='15070'>quick</span> <span m='15270'>example</span> <span
  m='15760'>of</span> <span m='15900'>it.</span> </p><p><span
  m='16540'>So</span> <span m='16860'>I</span> <span m='16960'>have</span> <span
  m='17110'>a</span> <span m='17150'>question</span> <span
  m='17550'>written</span> <span m='17730'>here</span> <span m='17900'>on</span>
  <span m='18030'>the</span> <span m='18100'>board:</span> <span
  m='18870'>What</span> <span m='19120'>is</span> <span m='19410'>the</span>
  <span m='19490'>quadratic</span> <span m='19960'>approximation</span> <span
  m='20750'>of</span> <span m='20900'>the</span> <span m='21000'>function</span>
  <span m='21400'>f</span> <span m='21620'>of</span> <span m='21720'>x</span>
  <span m='21950'>equals</span> <span m='22420'>e</span> <span
  m='22580'>to</span> <span m='22740'>the</span> <span m='22970'>x</span> <span
  m='23220'>plus</span> <span m='23410'>x</span> <span
  m='23530'>squared--</span> <span m='23880'>so</span> <span
  m='23970'>here</span> <span m='24420'>x and</span> <span m='24970'>plus</span>
  <span m='25230'>x</span> <span m='25470'>squared</span> <span
  m='26110'>is</span> <span m='26230'>the</span> <span
  m='26350'>exponent,</span> <span m='27210'>so</span> <span
  m='27340'>it's</span> <span m='27490'>e</span> <span m='27625'>to</span> <span
  m='27760'>the</span> <span m='28030'>quantity</span> <span m='28820'>x</span>
  <span m='28855'>plus</span> <span m='28890'>x</span> <span
  m='29100'>squared--</span> <span m='29760'>near</span> <span
  m='30085'>x</span> <span m='30410'>equals</span> <span m='30740'>0.</span>
  </p><p><span m='31340'>So</span> <span m='31650'>why</span> <span
  m='31790'>don't</span> <span m='31910'>you</span> <span m='31980'>take</span>
  <span m='32650'>a</span> <span m='32770'>minute</span> <span
  m='33020'>or</span> <span m='33160'>two,</span> <span m='33630'>pause</span>
  <span m='33825'>the</span> <span m='34020'>video,</span> <span
  m='34780'>work</span> <span m='35060'>this</span> <span m='35240'>out</span>
  <span m='35400'>on</span> <span m='35510'>your</span> <span
  m='35640'>own</span> <span m='36130'>and</span> <span m='36220'>then</span>
  <span m='36310'>come</span> <span m='36520'>back</span> <span
  m='36710'>and</span> <span m='36800'>we</span> <span m='36880'>can</span>
  <span m='37000'>do</span> <span m='37110'>it</span> <span
  m='37200'>together.</span> </p><p><span m='43620'>All</span> <span
  m='43870'>right.</span> <span m='44120'>Welcome</span> <span
  m='44420'>back.</span> </p><p><span m='44860'>So</span> <span
  m='45750'>there</span> <span m='45830'>are</span> <span m='45910'>two</span>
  <span m='46110'>different</span> <span m='46380'>ways</span> <span
  m='46670'>we</span> <span m='46760'>can</span> <span m='46890'>do</span> <span
  m='47000'>this</span> <span m='47190'>problem.</span> <span
  m='47520'>Let's</span> <span m='47740'>first</span> <span
  m='48050'>just</span> <span m='48230'>do</span> <span m='48340'>it</span>
  <span m='48460'>the</span> <span m='48550'>totally</span> <span
  m='48990'>straightforward</span> <span m='49640'>way,</span> <span
  m='49800'>which</span> <span m='49990'>is</span> <span m='50090'>that</span>
  <span m='50190'>you</span> <span m='50280'>have</span> <span
  m='50490'>this</span> <span m='50670'>formula</span> <span
  m='51410'>for</span> <span m='51650'>quadratic</span> <span
  m='52060'>approximations</span> <span m='52870'>in</span> <span
  m='52970'>terms</span> <span m='53240'>of</span> <span m='53340'>the</span>
  <span m='53420'>derivatives</span> <span m='53950'>of</span> <span
  m='54040'>your</span> <span m='54160'>function.</span> <span m='56680'>And so,
  so</span> <span m='56800'>we</span> <span m='56900'>can</span> <span
  m='57020'>just</span> <span m='57370'>apply</span> <span m='57760'>that</span>
  <span m='58000'>formula.</span> </p><p><span m='60350'>So here, so</span>
  <span m='60670'>the</span> <span m='60850'>formula</span> <span
  m='61590'>is</span> <span m='62020'>that</span> <span m='62620'>the</span>
  <span m='62720'>quadratic</span> <span m='63370'>approximation</span> <span
  m='64800'>of</span> <span m='64930'>the</span> <span m='65030'>function</span>
  <span m='65430'>f--</span> <span m='66040'>so</span> <span
  m='66170'>here,</span> <span m='66450'>near</span> <span m='67040'>the</span>
  <span m='67140'>point</span> <span m='67470'>0--</span> <span
  m='68220'>is</span> <span m='68480'>equal</span> <span m='68800'>to</span>
  <span m='70150'>f</span> <span m='70420'>of</span> <span m='70520'>0</span>
  <span m='72020'>plus</span> <span m='73410'>f</span> <span
  m='73660'>prime</span> <span m='73990'>of</span> <span m='74050'>0</span>
  <span m='74920'>x</span> <span m='75980'>plus</span> <span m='76880'>f</span>
  <span m='77330'>double</span> <span m='77640'>prime</span> <span
  m='77925'>of</span> <span m='78210'>0</span> <span m='78570'>over</span> <span
  m='78990'>2</span> <span m='79990'>times</span> <span m='80260'>x</span> <span
  m='80540'>squared.</span> </p><p><span m='82030'>All</span> <span
  m='82106'>right.</span> <span m='82640'>So</span> <span m='83110'>in</span>
  <span m='83380'>order</span> <span m='84440'>to</span> <span
  m='85190'>use</span> <span m='85500'>this</span> <span
  m='85690'>formula</span> <span m='86370'>we</span> <span m='86580'>just</span>
  <span m='86780'>need</span> <span m='87010'>to</span> <span
  m='87100'>know</span> <span m='87340'>what</span> <span m='87550'>the</span>
  <span m='87660'>derivatives</span> <span m='89190'>of</span> <span
  m='89350'>our</span> <span m='89500'>function</span> <span
  m='90060'>are</span> <span m='91120'>and</span> <span m='91300'>their</span>
  <span m='91400'>values</span> <span m='91800'>at</span> <span
  m='91950'>0.</span> <span m='93540'>So</span> <span m='94010'>first</span>
  <span m='94500'>we</span> <span m='94600'>can</span> <span m='94790'>do</span>
  <span m='96730'>the</span> <span m='96830'>first</span> <span
  m='97150'>derivative</span> <span m='97580'>of</span> <span
  m='97960'>f.</span> <span m='98470'>So</span> <span m='98545'>for</span> <span
  m='98620'>that</span> <span m='99240'>it's</span> <span m='99520'>just</span>
  <span m='99730'>a</span> <span m='99780'>straightforward</span> <span
  m='100560'>application</span> <span m='101140'>of</span> <span
  m='101210'>the</span> <span m='101280'>chain</span> <span
  m='101560'>rule.</span> <span m='102190'>Our</span> <span
  m='102410'>outer</span> <span m='102470'>function</span> <span
  m='102930'>is</span> <span m='103710'>e</span> <span m='103835'>to</span>
  <span m='103960'>the</span> <span m='104060'>x</span> <span
  m='104270'>and</span> <span m='104680'>our</span> <span
  m='104750'>inner</span> <span m='104960'>function</span> <span
  m='105360'>is</span> <span m='105510'>x</span> <span m='105676'>plus</span>
  <span m='106010'>x</span> <span m='106190'>squared.</span> </p><p><span
  m='106820'>So</span> <span m='107050'>the</span> <span
  m='107220'>derivative</span> <span m='108170'>then,</span> <span
  m='108430'>applying</span> <span m='108890'>the</span> <span
  m='109035'>chain</span> <span m='109180'>rule,</span> <span
  m='109700'>is</span> <span m='110370'>e</span> <span m='110630'>to</span>
  <span m='110730'>the</span> <span m='111420'>x</span> <span
  m='111835'>plus</span> <span m='112250'>x</span> <span
  m='112680'>squared</span> <span m='113520'>times</span> <span
  m='115370'>1</span> <span m='115730'>plus</span> <span m='116170'>2x,</span>
  <span m='117550'>which</span> <span m='117860'>I</span> <span
  m='117940'>can</span> <span m='118130'>also</span> <span
  m='118470'>write</span> <span m='119810'>as e--</span> <span m='121260'>well,
  yeah,</span> <span m='122440'>let</span> <span m='122590'>me</span> <span
  m='122660'>just</span> <span m='123090'>reorder</span> <span
  m='123242'>it--</span> <span m='124510'>2x</span> <span m='125270'>plus</span>
  <span m='125610'>1</span> <span m='126040'>times</span> <span
  m='127080'>e</span> <span m='127320'>to</span> <span m='127560'>the</span>
  <span m='127803'>x</span> <span m='128046'>plus</span> <span
  m='129020'>x</span> <span m='129290'>squared.</span> </p><p><span
  m='131700'>OK.</span> <span m='131980'>So</span> <span
  m='132110'>that's</span> <span m='132310'>the</span> <span
  m='132390'>first</span> <span m='132670'>derivative.</span> <span
  m='133290'>And</span> <span m='133530'>for</span> <span m='133630'>the</span>
  <span m='133750'>second</span> <span m='134150'>derivative</span> <span
  m='134940'>I</span> <span m='135400'>can</span> <span m='135550'>apply</span>
  <span m='135880'>just</span> <span m='136370'>the</span> <span
  m='136500'>product</span> <span m='136940'>rule</span> <span m='137140'>here.
  Right?</span> <span m='137600'>So</span> <span m='137710'>I've</span> <span
  m='137830'>got</span> <span m='138440'>this--</span> <span
  m='139275'>you</span> <span m='139630'>know,</span> <span
  m='139840'>the</span> <span m='139950'>second</span> <span
  m='140260'>derivative</span> <span m='140660'>is</span> <span
  m='140800'>the</span> <span m='140947'>derivative</span> <span
  m='141242'>of</span> <span m='141390'>the</span> <span m='141480'>first</span>
  <span m='141770'>derivative,</span> <span m='142330'>so</span> <span
  m='142560'>here</span> <span m='142760'>I</span> <span m='142870'>have</span>
  <span m='143200'>a</span> <span m='143410'>product.</span> <span
  m='144170'>So</span> <span m='145800'>f</span> <span m='146330'>double</span>
  <span m='146690'>prime</span> <span m='146950'>of</span> <span
  m='147070'>x</span> <span m='148170'>is</span> <span m='148340'>equal</span>
  <span m='148630'>to--</span> <span m='148900'>well,</span> <span
  m='149180'>so</span> <span m='149300'>we</span> <span m='149400'>take</span>
  <span m='149590'>the</span> <span m='149680'>derivative</span> <span
  m='150180'>of</span> <span m='150320'>the</span> <span m='150420'>first</span>
  <span m='150930'>one,</span> <span m='151220'>which</span> <span
  m='151400'>is</span> <span m='151540'>just</span> <span m='151930'>2,</span>
  <span m='153430'>times</span> <span m='153800'>the</span> <span
  m='153900'>second</span> <span m='156050'>plus</span> <span
  m='158060'>the</span> <span m='158180'>derivative</span> <span
  m='158660'>of</span> <span m='158770'>the</span> <span
  m='158870'>second</span> <span m='159300'>one.</span> <span
  m='159720'>Well,</span> <span m='159900'>the</span> <span
  m='160000'>second</span> <span m='160390'>one</span> <span
  m='160560'>is</span> <span m='160665'>e</span> <span m='160770'>to</span>
  <span m='160900'>the</span> <span m='161440'>x</span> <span
  m='161700'>plus</span> <span m='161880'>x</span> <span
  m='162070'>squared.</span> <span m='162920'>It's</span> <span
  m='163370'>actually</span> <span m='163820'>f</span> <span
  m='164060'>of</span> <span m='164260'>x,</span> <span m='164400'>so</span>
  <span m='164455'>we</span> <span m='164510'>already</span> <span
  m='164920'>computed</span> <span m='165310'>it</span> <span
  m='165480'>once.</span> <span m='165740'>So</span> <span m='165870'>the</span>
  <span m='165990'>derivative</span> <span m='166420'>of</span> <span
  m='166540'>the</span> <span m='166640'>second</span> <span
  m='167480'>is</span> <span m='167940'>2x</span> <span m='169330'>plus</span>
  <span m='169850'>1</span> <span m='170490'>e</span> <span m='170605'>to</span>
  <span m='170720'>the</span> <span m='171380'>x</span> <span
  m='171730'>plus</span> <span m='172060'>x</span> <span
  m='172370'>squared</span> <span m='172970'>times</span> <span
  m='173330'>the</span> <span m='173430'>first.</span> <span
  m='174390'>So</span> <span m='174560'>times</span> <span
  m='174930'>another</span> <span m='176000'>2x</span> <span
  m='177910'>plus</span> <span m='178240'>1.</span> <span m='179370'>OK,
  and</span> <span m='179600'>if</span> <span m='179730'>I</span> <span
  m='180690'>multiply</span> <span m='181350'>these</span> <span
  m='181600'>two</span> <span m='181790'>together</span> <span
  m='182210'>and</span> <span m='182480'>combine</span> <span
  m='182950'>all</span> <span m='183670'>my</span> <span
  m='183810'>terms,</span> <span m='184300'>this</span> <span
  m='184500'>is</span> <span m='185160'>4x</span> <span
  m='185910'>squared</span> <span m='186960'>plus</span> <span
  m='187410'>4x</span> <span m='188620'>plus</span> <span m='189060'>3</span>
  <span m='189730'>times</span> <span m='190560'>e</span> <span
  m='190870'>to</span> <span m='190935'>the</span> <span m='191000'>x</span>
  <span m='191990'>plus</span> <span m='192330'>x</span> <span
  m='192710'>squared.</span> </p><p><span m='193340'>So</span> <span
  m='193500'>these</span> <span m='193700'>are</span> <span
  m='193780'>the</span> <span m='193870'>first</span> <span
  m='194180'>and</span> <span m='194300'>second</span> <span
  m='194600'>derivatives,</span> <span m='195340'>and</span> <span
  m='195570'>what</span> <span m='195710'>I</span> <span m='195800'>need</span>
  <span m='196240'>to</span> <span m='196380'>plug</span> <span
  m='196670'>them</span> <span m='196800'>into</span> <span m='196990'>my</span>
  <span m='197120'>formula</span> <span m='197720'>is</span> <span
  m='197920'>I</span> <span m='198000'>need</span> <span m='198200'>their</span>
  <span m='198340'>values</span> <span m='198830'>at</span> <span
  m='199110'>0.</span> <span m='199800'>So</span> <span m='199960'>I</span>
  <span m='200000'>need</span> <span m='200150'>the</span> <span
  m='200220'>function</span> <span m='200640'>value</span> <span
  m='200950'>at</span> <span m='201050'>0.</span> <span m='202380'>So</span>
  <span m='202555'>f</span> <span m='202590'>of</span> <span
  m='203060'>0,</span> <span m='203670'>well</span> <span
  m='204000'>that's</span> <span m='204420'>e</span> <span m='204830'>to</span>
  <span m='205040'>the</span> <span m='205550'>0</span> <span
  m='205990'>plus</span> <span m='206350'>0</span> <span
  m='206650'>squared.</span> <span m='206990'>So</span> <span
  m='207110'>it's</span> <span m='207230'>e</span> <span m='207345'>to</span>
  <span m='207460'>the</span> <span m='207570'>0,</span> <span
  m='208110'>so</span> <span m='208290'>that's</span> <span
  m='208470'>just</span> <span m='208760'>1.</span> <span m='211570'>f</span>
  <span m='211980'>prime</span> <span m='212430'>at</span> <span m='212550'>0,
  let's see,</span> <span m='214530'>I</span> <span m='214610'>go</span> <span
  m='214800'>over</span> <span m='214970'>to</span> <span m='215040'>my</span>
  <span m='215140'>formula</span> <span m='215600'>for</span> <span
  m='215730'>f</span> <span m='215960'>prime</span> <span m='216470'>and</span>
  <span m='216680'>I</span> <span m='216730'>plug</span> <span
  m='217050'>in</span> <span m='217240'>x</span> <span m='217430'>equals</span>
  <span m='217800'>0,</span> <span m='218550'>so</span> <span
  m='218730'>I</span> <span m='218800'>have</span> <span m='218980'>2</span>
  <span m='219250'>times</span> <span m='219590'>0</span> <span
  m='219830'>plus</span> <span m='220120'>1,</span> <span m='220480'>so</span>
  <span m='220640'>that's</span> <span m='220870'>1,</span> <span
  m='221680'>times</span> <span m='222610'>e</span> <span m='222870'>to</span>
  <span m='222980'>the</span> <span m='223100'>0.</span> <span
  m='223430'>So</span> <span m='223560'>that's</span> <span m='223750'>1</span>
  <span m='224030'>times</span> <span m='224380'>1,</span> <span
  m='225000'>that's</span> <span m='225250'>also</span> <span
  m='225680'>1.</span> <span m='226920'>And</span> <span m='228960'>for</span>
  <span m='229800'>f</span> <span m='230060'>double</span> <span
  m='230370'>time</span> <span m='231600'>at</span> <span m='231780'>0,</span>
  <span m='232090'>I</span> <span m='232180'>go</span> <span
  m='232330'>to</span> <span m='232430'>my</span> <span
  m='232570'>formula</span> <span m='233080'>for</span> <span
  m='234100'>f</span> <span m='234340'>double</span> <span
  m='234640'>prime</span> <span m='234980'>and</span> <span m='235090'>I</span>
  <span m='235140'>put</span> <span m='235340'>in</span> <span
  m='235480'>0.</span> <span m='235850'>And</span> <span m='235970'>so</span>
  <span m='236070'>this</span> <span m='236270'>is</span> <span
  m='236420'>0</span> <span m='236600'>and</span> <span m='236750'>that's</span>
  <span m='236950'>0.</span> <span m='237190'>So</span> <span
  m='237273'>I</span> <span m='237356'>have</span> <span m='237440'>a</span>
  <span m='237500'>3</span> <span m='238470'>times</span> <span
  m='239270'>1</span> <span m='240680'>so</span> <span m='240890'>that's</span>
  <span m='241780'>3.</span> <span m='243120'>And</span> <span
  m='243280'>now</span> <span m='243430'>I</span> <span m='243500'>just</span>
  <span m='243700'>take</span> <span m='243920'>these</span> <span
  m='244130'>three</span> <span m='244330'>values</span> <span
  m='244940'>and</span> <span m='245150'>I</span> <span m='245210'>plug</span>
  <span m='245520'>them</span> <span m='245630'>right</span> <span
  m='245820'>into</span> <span m='246000'>my</span> <span
  m='246130'>formula.</span> <span m='246790'>So</span> <span
  m='247410'>the</span> <span m='247510'>quadratic</span> <span
  m='247990'>approximation</span> <span m='249780'>is</span> <span
  m='250050'>Q</span> <span m='250271'>of</span> <span m='250493'>f</span> <span
  m='251380'>equals</span> <span m='252240'>1</span> <span
  m='253610'>plus</span> <span m='255220'>x</span> <span m='256250'>plus</span>
  <span m='256740'>3</span> <span m='257180'>x</span> <span
  m='257670'>squared</span> <span m='259750'>over</span> <span
  m='260030'>2.</span> </p><p><span m='261880'>All</span> <span
  m='262020'>right.</span> <span m='262320'>Great.</span> <span
  m='263300'>So</span> <span m='263530'>that</span> <span m='263690'>was</span>
  <span m='263810'>one</span> <span m='264040'>way</span> <span
  m='264180'>to</span> <span m='264280'>do</span> <span m='264430'>this</span>
  <span m='264600'>problem.</span> <span m='265490'>Another</span> <span
  m='265960'>way</span> <span m='266100'>to</span> <span m='266200'>do</span>
  <span m='266350'>this</span> <span m='266560'>problem</span> <span
  m='267620'>is</span> <span m='267820'>the</span> <span
  m='267920'>following.</span> <span m='268410'>And</span> <span
  m='268850'>in</span> <span m='269260'>this</span> <span
  m='269430'>case,</span> <span m='269800'>I'm</span> <span
  m='269990'>not</span> <span m='270150'>sure</span> <span
  m='270480'>which</span> <span m='270710'>way</span> <span m='270900'>is</span>
  <span m='271050'>simpler,</span> <span m='271650'>but</span> <span
  m='271920'>in</span> <span m='272020'>some</span> <span
  m='272280'>cases</span> <span m='272710'>one</span> <span
  m='272930'>way</span> <span m='273100'>is</span> <span
  m='273230'>clearly</span> <span m='273790'>easier</span> <span
  m='274170'>than</span> <span m='274330'>the</span> <span
  m='274440'>other.</span> <span m='274930'>So</span> <span m='275160'>if</span>
  <span m='275270'>we</span> <span m='275380'>illustrate</span> <span
  m='275840'>both</span> <span m='276100'>then</span> <span
  m='276220'>you'll</span> <span m='276320'>have</span> <span
  m='276850'>twice</span> <span m='277130'>as</span> <span
  m='277230'>many</span> <span m='277470'>tools</span> <span
  m='277830'>to</span> <span m='277950'>work</span> <span
  m='278160'>with.</span> </p><p><span m='280800'>So</span> <span
  m='280990'>the</span> <span m='281150'>other</span> <span
  m='281410'>way</span> <span m='281610'>is</span> <span m='281695'>to</span>
  <span m='281780'>notice--</span> <span m='282730'>so</span> <span
  m='282940'>the</span> <span m='283060'>exponential</span> <span
  m='283630'>function</span> <span m='283960'>is</span> <span
  m='284070'>nice.</span> <span m='284450'>When</span> <span
  m='284610'>you</span> <span m='284680'>have--</span> <span
  m='285020'>you</span> <span m='285130'>know,</span> <span
  m='285240'>one</span> <span m='285460'>of</span> <span m='285520'>your</span>
  <span m='285650'>exponential</span> <span m='286150'>rules</span> <span
  m='286750'>is</span> <span m='286960'>that</span> <span m='287550'>the</span>
  <span m='287870'>exponential</span> <span m='288470'>of</span> <span
  m='288570'>a</span> <span m='288630'>sum</span> <span m='289270'>is</span>
  <span m='289490'>the</span> <span m='289560'>product</span> <span
  m='290010'>of</span> <span m='290090'>the</span> <span
  m='290190'>exponentials.</span> <span m='290960'>So</span> <span
  m='291150'>we</span> <span m='291250'>can</span> <span
  m='291650'>rewrite</span> <span m='292880'>f</span> <span m='293290'>of</span>
  <span m='293670'>x</span> <span m='295140'>equals</span> <span
  m='295610'>e</span> <span m='295746'>to</span> <span m='295883'>the</span>
  <span m='296020'>x</span> <span m='297160'>times</span> <span
  m='297700'>e</span> <span m='297810'>to</span> <span m='297920'>the</span>
  <span m='298010'>x</span> <span m='298140'>squared.</span> <span
  m='299360'>Now</span> <span m='299840'>this</span> <span m='299990'>may</span>
  <span m='300130'>seem</span> <span m='300560'>a</span> <span
  m='300680'>little</span> <span m='300870'>bit</span> <span
  m='301010'>silly</span> <span m='301330'>to</span> <span
  m='301460'>you,</span> <span m='301740'>but</span> <span m='302400'>if</span>
  <span m='302660'>you</span> <span m='303260'>watched</span> <span
  m='303700'>Christine's</span> <span m='304590'>recitation</span> <span
  m='305190'>video</span> <span m='305440'>you</span> <span
  m='305580'>saw</span> <span m='306190'>that</span> <span m='306350'>to</span>
  <span m='306440'>find</span> <span m='306860'>the</span> <span
  m='306920'>quadratic</span> <span m='307380'>approximation</span> <span
  m='308120'>to</span> <span m='308210'>a</span> <span
  m='308290'>product,</span> <span m='308940'>it's</span> <span
  m='309150'>enough</span> <span m='309450'>to</span> <span
  m='309550'>find</span> <span m='310120'>the</span> <span
  m='310230'>quadratic</span> <span m='310620'>approximations</span> <span
  m='311370'>to</span> <span m='311530'>each</span> <span
  m='311800'>piece</span> <span m='312580'>separately,</span> <span
  m='313390'>multiply</span> <span m='313880'>together,</span> <span
  m='314240'>and</span> <span m='314420'>then</span> <span
  m='314550'>take</span> <span m='314790'>that</span> <span
  m='314980'>quadratic</span> <span m='315430'>approximation.</span>
  </p><p><span m='316370'>So</span> <span m='316570'>in</span> <span
  m='316670'>this</span> <span m='316880'>case</span> <span
  m='319600'>the</span> <span m='319880'>quadratic</span> <span
  m='320240'>approximations</span> <span m='321130'>are</span> <span
  m='321330'>things</span> <span m='321600'>you</span> <span
  m='321690'>might</span> <span m='321930'>already</span> <span
  m='322360'>know.</span> <span m='322910'>So</span> <span m='323360'>in</span>
  <span m='323730'>particular,</span> <span m='324160'>we</span> <span
  m='324260'>saw</span> <span m='324960'>in</span> <span
  m='325430'>recit--</span> <span m='325930'>sorry,</span> <span m='326040'>in
  lecture</span> <span m='326900'>that</span> <span m='328320'>the</span> <span
  m='328470'>quadratic</span> <span m='328920'>approximation</span> <span
  m='330140'>of</span> <span m='330310'>e</span> <span m='330420'>to</span>
  <span m='330530'>the</span> <span m='330620'>x</span> <span
  m='331620'>is</span> <span m='331850'>1</span> <span m='332290'>plus</span>
  <span m='332746'>x</span> <span m='333660'>plus</span> <span
  m='334010'>x</span> <span m='334290'>squared</span> <span
  m='334800'>over</span> <span m='335080'>2.</span> <span m='336460'>And</span>
  <span m='337670'>I'm</span> <span m='337860'>going</span> <span
  m='337945'>to</span> <span m='338030'>tell</span> <span
  m='338300'>you--</span> <span m='339080'>if</span> <span m='339270'>you</span>
  <span m='339330'>haven't</span> <span m='339570'>seen</span> <span
  m='339770'>it</span> <span m='339835'>in</span> <span
  m='339900'>recitation,</span> <span m='340350'>there</span> <span
  m='340480'>are</span> <span m='340510'>a</span> <span m='340540'>bunch</span>
  <span m='340740'>of</span> <span m='340810'>different</span> <span
  m='341040'>ways</span> <span m='341220'>you</span> <span
  m='341300'>could</span> <span m='341410'>work</span> <span
  m='341630'>it</span> <span m='341700'>out</span> <span m='341820'>for</span>
  <span m='341940'>yourself--</span> <span m='342640'>but</span> <span
  m='342860'>the</span> <span m='342960'>quadratic</span> <span
  m='343430'>approximation</span> <span m='344380'>for</span> <span
  m='344910'>e</span> <span m='345075'>to</span> <span m='345240'>the</span>
  <span m='345600'>x</span> <span m='345910'>squared</span> <span
  m='346716'>is</span> <span m='347120'>equal</span> <span m='347570'>to</span>
  <span m='348070'>1</span> <span m='348620'>plus</span> <span
  m='350020'>x</span> <span m='350300'>squared. All right,</span> <span
  m='351620'>so</span> <span m='351740'>if</span> <span m='351820'>you</span>
  <span m='351900'>don't</span> <span m='352070'>believe</span> <span
  m='352330'>me,</span> <span m='353000'>by</span> <span m='353160'>all</span>
  <span m='353290'>means</span> <span m='353690'>work</span> <span
  m='354000'>that</span> <span m='354180'>out</span> <span m='354310'>for</span>
  <span m='354430'>yourself</span> <span m='355130'>to</span> <span
  m='355250'>check</span> <span m='355510'>it.</span> </p><p><span
  m='356710'>So</span> <span m='356900'>in</span> <span m='356980'>this</span>
  <span m='357120'>case, so</span> <span m='357700'>that</span> <span
  m='357890'>means</span> <span m='358060'>that</span> <span
  m='358180'>the</span> <span m='358260'>quadratic</span> <span
  m='358740'>approximation</span> <span m='360180'>of</span> <span
  m='360390'>f</span> <span m='361440'>is</span> <span m='361720'>equal</span>
  <span m='362120'>to--</span> <span m='362920'>by</span> <span
  m='363080'>the</span> <span m='363200'>rule</span> <span
  m='363590'>Christine</span> <span m='363990'>showed</span> <span
  m='364280'>you--</span> <span m='366000'>it's the, so it's</span> <span
  m='366080'>equal</span> <span m='366410'>to</span> <span m='366520'>the</span>
  <span m='366610'>quadratic</span> <span m='367080'>approximation</span> <span
  m='368100'>of</span> <span m='368360'>the</span> <span
  m='368480'>product</span> <span m='369100'>of</span> <span
  m='369300'>the</span> <span m='369390'>quadratic</span> <span
  m='369840'>approximations.</span> <span m='370860'>So</span> <span
  m='370990'>that's</span> <span m='371610'>1</span> <span
  m='372320'>plus</span> <span m='372940'>x</span> <span m='373770'>plus</span>
  <span m='374080'>x</span> <span m='374330'>squared</span> <span
  m='375190'>over</span> <span m='375500'>2</span> <span m='376640'>times</span>
  <span m='377000'>1</span> <span m='377320'>plus</span> <span
  m='377670'>x</span> <span m='377930'>squared.</span> <span
  m='379420'>Now</span> <span m='379560'>if</span> <span m='379650'>you</span>
  <span m='379730'>multiply</span> <span m='380220'>these</span> <span
  m='380510'>two</span> <span m='380640'>out,</span> <span
  m='380880'>that's</span> <span m='381070'>not</span> <span
  m='381290'>hard.</span> <span m='381580'>There</span> <span
  m='381865'>are</span> <span m='382150'>six</span> <span
  m='382590'>terms.</span> <span m='383100'>So</span> <span
  m='383250'>this</span> <span m='383450'>is</span> <span m='383845'>the</span>
  <span m='384240'>quadratic</span> <span m='384720'>approximation</span> <span
  m='385670'>of</span> <span m='386890'>1</span> <span m='387570'>plus</span>
  <span m='388010'>x</span> <span m='389000'>plus</span> <span
  m='389590'>x</span> <span m='389830'>squared</span> <span
  m='390480'>over</span> <span m='390730'>2.</span> <span m='391310'>So</span>
  <span m='391690'>multiply</span> <span m='392110'>1</span> <span
  m='392560'>through</span> <span m='392800'>here</span> <span
  m='393090'>and</span> <span m='393230'>now</span> <span m='393390'>x</span>
  <span m='393590'>squared.</span> <span m='394340'>So</span> <span
  m='394535'>that's</span> <span m='394730'>plus</span> <span
  m='396150'>x</span> <span m='396420'>squared</span> <span
  m='397790'>plus</span> <span m='398420'>x</span> <span m='398810'>cubed</span>
  <span m='400200'>plus-- OK,</span> <span m='400810'>some</span> <span
  m='401480'>fourth</span> <span m='401810'>degree</span> <span
  m='402080'>term--</span> <span m='402380'>x</span> <span m='402670'>to</span>
  <span m='402750'>the</span> <span m='402890'>fourth</span> <span
  m='404350'>over</span> <span m='404680'>2.</span> </p><p><span
  m='406380'>And</span> <span m='406570'>now</span> <span m='406660'>the</span>
  <span m='406770'>quadratic</span> <span m='407160'>approximation</span> <span
  m='407880'>to</span> <span m='407950'>this</span> <span m='408130'>we</span>
  <span m='408230'>get</span> <span m='408400'>just</span> <span
  m='408580'>by</span> <span m='408700'>dropping</span> <span
  m='409350'>the</span> <span m='409450'>cubic</span> <span
  m='409870'>and</span> <span m='410250'>quartic</span> <span
  m='410680'>terms.</span> <span m='411380'>So--</span> <span
  m='412340'>and</span> <span m='412580'>OK, and</span> <span
  m='412710'>we</span> <span m='412820'>can</span> <span m='413010'>add</span>
  <span m='413320'>these</span> <span m='413510'>two</span> <span
  m='413920'>square</span> <span m='414290'>terms</span> <span
  m='414590'>together.</span> <span m='415120'>So</span> <span
  m='415360'>this</span> <span m='415550'>is</span> <span
  m='416240'>equal</span> <span m='416580'>to</span> <span m='417080'>1</span>
  <span m='417670'>plus</span> <span m='418000'>x</span> <span
  m='419100'>plus</span> <span m='419390'>3</span> <span m='419670'>x</span>
  <span m='420300'>squared</span> <span m='421700'>over</span> <span
  m='421980'>2.</span> </p><p><span m='422770'>All</span> <span
  m='422900'>right.</span> <span m='423080'>And</span> <span
  m='423200'>luckily,</span> <span m='423760'>doing</span> <span
  m='424020'>the</span> <span m='424110'>same</span> <span
  m='424380'>problem</span> <span m='424770'>two</span> <span
  m='424900'>different</span> <span m='425170'>ways</span> <span
  m='425380'>we</span> <span m='425480'>get</span> <span m='425600'>the</span>
  <span m='425700'>same</span> <span m='425950'>answer,</span> <span
  m='426320'>which</span> <span m='426490'>is</span> <span
  m='426990'>what</span> <span m='427210'>should</span> <span
  m='427410'>happen.</span> </p><p><span m='428190'>So</span> <span
  m='428420'>that's</span> <span m='428650'>that.</span> </p>
embedded_media:
  - uid: fd90be6e95e5f9709bf52f2f00472832
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: aar099Xh5W4
  - uid: 2afa20727fc62373a6b4e453f814444b
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/aar099Xh5W4/default.jpg'
  - uid: 38a83a0ee58f7c2d2dd78fc2425927ac
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/quadratic-approximation/id414308064?i=90318985
  - uid: f0270b6a8c889040492432088ffe1845
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_17_300k.mp4'
  - uid: 54224541db9020460b9af09040ced79d
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: aar099Xh5W4
  - uid: 6a8053c087d250f825e50f7973c08aa1
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: aar099Xh5W4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-25-introduction-to-quadratic-appoximation/quadratic-approximation-of-an-exponential-function/aar099Xh5W4.srt
  - uid: 7ec759ae2979f25135e3baf7985528bf
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: aar099Xh5W4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-a-approximation-and-curve-sketching/session-25-introduction-to-quadratic-appoximation/quadratic-approximation-of-an-exponential-function/aar099Xh5W4.pdf
  - uid: 7b63a5b924b3990a28e8a0e0b2366e57
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: aeb4dcca4b3ed721da77c7ecbe41e671
    parent_uid: f941a2b8c3731e9834c3c5a50c30d794
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
