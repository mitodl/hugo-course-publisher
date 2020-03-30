---
title: Trig Integrals and a Volume of Revolution
uid: c095baf2aff0011ac8f5050c53c0e3ea
parent_uid: f914f1dccfe8c98b34b42bcf2aa6e075
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-a-trigonometric-powers-trigonometric-substitution-and-completing-the-square/session-68-integral-of-sin-n-x-cos-m-x-odd-exponents/trig-integrals-and-a-volume-of-revolution
short_url: trig-integrals-and-a-volume-of-revolution
inline_embed_id: 82087575trigintegralsandavolumeofrevolution50783722
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>JOEL LEWIS:</span> <span m='6830'>Hi.</span> <span
  m='7370'>Welcome</span> <span m='7670'>back</span> <span m='7880'>to</span>
  <span m='7980'>recitation.</span> </p><p><span m='8860'>You've</span> <span
  m='9120'>been</span> <span m='9270'>doing</span> <span m='9520'>some</span>
  <span m='9690'>work</span> <span m='9920'>on</span> <span
  m='10230'>trig</span> <span m='10570'>integration.</span> <span
  m='11470'>I</span> <span m='11600'>have</span> <span m='11750'>a</span> <span
  m='11790'>nice</span> <span m='12030'>example</span> <span
  m='12470'>here</span> <span m='12710'>of</span> <span m='12780'>a</span> <span
  m='12840'>problem</span> <span m='13240'>that</span> <span
  m='13340'>requires</span> <span m='13910'>trig</span> <span
  m='14150'>integration</span> <span m='14680'>in</span> <span
  m='14800'>order</span> <span m='15060'>to</span> <span m='15200'>solve.</span>
  <span m='15910'>So</span> <span m='17230'>what</span> <span
  m='17390'>I'd</span> <span m='17520'>like</span> <span m='17720'>you</span>
  <span m='17810'>to</span> <span m='17880'>do</span> <span m='18050'>is</span>
  <span m='18190'>to</span> <span m='18290'>compute</span> <span
  m='18700'>the</span> <span m='18800'>volume</span> <span m='19170'>of</span>
  <span m='19280'>the</span> <span m='19390'>solid</span> <span
  m='20330'>that</span> <span m='20480'>you</span> <span m='20610'>get</span>
  <span m='20960'>when</span> <span m='21080'>you</span> <span
  m='21170'>take</span> <span m='21390'>one</span> <span m='21980'>hump</span>
  <span m='22400'>of</span> <span m='22630'>the</span> <span
  m='22730'>curve</span> <span m='23470'>y</span> <span m='23790'>equals</span>
  <span m='24140'>sine</span> <span m='24640'>a*x</span> <span
  m='25490'>and</span> <span m='25780'>you</span> <span m='25870'>revolve</span>
  <span m='26360'>it</span> <span m='26430'>around</span> <span
  m='26700'>the</span> <span m='27020'>x-axis.</span> <span m='27390'>So</span>
  <span m='28330'>you</span> <span m='28470'>take</span> <span
  m='28730'>the</span> <span m='28830'>curve</span> <span
  m='29200'>between</span> <span m='30230'>two</span> <span
  m='30400'>consecutive</span> <span m='31830'>roots,</span> <span
  m='32250'>and</span> <span m='32400'>then</span> <span m='33290'>you, you
  know,</span> <span m='33510'>revolve</span> <span m='33930'>that</span> <span
  m='34150'>around</span> <span m='34350'>the</span> <span
  m='34630'>x-axis</span> <span m='35000'>and</span> <span m='35100'>that</span>
  <span m='35130'>gives</span> <span m='35220'>you</span> <span m='35440'>some,
  I don't know,</span> <span m='37190'>vaguely</span> <span
  m='37700'>football-shaped</span> <span m='38650'>thing.</span> <span
  m='39580'>And so</span> <span m='40350'>then</span> <span m='40690'>the</span>
  <span m='40840'>question</span> <span m='41200'>is,</span> <span
  m='41570'>what's</span> <span m='41890'>the</span> <span
  m='42000'>volume</span> <span m='42260'>of</span> <span m='42370'>that</span>
  <span m='42600'>solid?</span> </p><p><span m='43150'>So</span> <span
  m='43430'>why</span> <span m='43600'>don't</span> <span m='43660'>you</span>
  <span m='43760'>pause</span> <span m='43930'>the</span> <span
  m='44100'>video,</span> <span m='44810'>take</span> <span m='45030'>a</span>
  <span m='45080'>little</span> <span m='45270'>while</span> <span
  m='46170'>to</span> <span m='46290'>work</span> <span m='46520'>that</span>
  <span m='46700'>out,</span> <span m='47120'>come</span> <span
  m='47320'>back,</span> <span m='47540'>and</span> <span m='47630'>we</span>
  <span m='47720'>can</span> <span m='47830'>work</span> <span
  m='48000'>it</span> <span m='48070'>out</span> <span
  m='48220'>together.</span> </p><p></p><p><span m='57423'>Welcome</span> <span
  m='57970'>back.</span> </p><p><span m='59400'>In</span> <span
  m='59530'>order</span> <span m='59740'>to</span> <span m='60300'>solve</span>
  <span m='60730'>this</span> <span m='60980'>problem,</span> <span
  m='61570'>we</span> <span m='61950'>just</span> <span m='62210'>are</span>
  <span m='62300'>going</span> <span m='62410'>to</span> <span
  m='62520'>apply</span> <span m='62880'>our</span> <span m='63040'>usual</span>
  <span m='63430'>methods</span> <span m='63910'>for</span> <span
  m='64600'>computing</span> <span m='65600'>a</span> <span
  m='66650'>volume</span> <span m='67110'>of</span> <span m='67210'>a</span>
  <span m='67290'>solid</span> <span m='67640'>of</span> <span
  m='67760'>rotation.</span> <span m='68550'>So</span> <span m='68750'>in</span>
  <span m='68820'>order</span> <span m='69000'>to</span> <span
  m='69110'>do</span> <span m='69330'>that,</span> <span
  m='69800'>remember</span> <span m='70110'>that</span> <span
  m='70220'>one</span> <span m='70390'>of</span> <span m='70490'>the</span>
  <span m='70570'>things</span> <span m='70890'>you</span> <span
  m='71020'>need</span> <span m='71270'>is</span> <span m='71370'>you</span>
  <span m='71470'>need</span> <span m='71610'>to</span> <span
  m='71700'>know</span> <span m='72550'>the</span> <span m='74110'>region</span>
  <span m='74550'>over</span> <span m='74790'>which</span> <span
  m='74970'>you're</span> <span m='75090'>integrating,</span> <span
  m='75790'>and</span> <span m='76020'>you</span> <span m='76080'>need</span>
  <span m='76210'>to</span> <span m='76310'>choose</span> <span
  m='76680'>a</span> <span m='76750'>method</span> <span m='77080'>of</span>
  <span m='77180'>integration.</span> </p><p><span m='77920'>So</span> <span
  m='78150'>in</span> <span m='78210'>this</span> <span m='78400'>case,</span>
  <span m='79030'>looking</span> <span m='79950'>at</span> <span
  m='80130'>this</span> <span m='80320'>region,</span> <span
  m='80690'>here,</span> <span m='81630'>I'm</span> <span
  m='81840'>rotating</span> <span m='82530'>it</span> <span
  m='82810'>around</span> <span m='84390'>the</span> <span
  m='84780'>x-axis.</span> <span m='85440'>It</span> <span
  m='85660'>looks</span> <span m='85960'>to</span> <span m='86090'>me--</span>
  <span m='86420'>so</span> <span m='86800'>we</span> <span
  m='86940'>have</span> <span m='87110'>two</span> <span
  m='87270'>choices.</span> <span m='87780'>We</span> <span
  m='87910'>could</span> <span m='88070'>do</span> <span m='88780'>shells</span>
  <span m='89510'>with</span> <span m='89680'>horizontal</span> <span
  m='90370'>rectangles,</span> <span m='91350'>or</span> <span
  m='91630'>we</span> <span m='91780'>could</span> <span m='92030'>do</span>
  <span m='92290'>disks</span> <span m='92920'>with</span> <span
  m='93120'>vertical</span> <span m='93540'>rectangles.</span> <span
  m='94320'>Looks</span> <span m='94570'>to</span> <span m='94680'>me</span>
  <span m='94820'>like</span> <span m='95150'>vertical</span> <span
  m='95630'>rectangles</span> <span m='96140'>are</span> <span
  m='96250'>going</span> <span m='96325'>to</span> <span m='96400'>be</span>
  <span m='96490'>the</span> <span m='96600'>way</span> <span
  m='96790'>to</span> <span m='96880'>go</span> <span m='98020'>for</span> <span
  m='98140'>this</span> <span m='98280'>function.</span> <span
  m='98770'>Nice,</span> <span m='99070'>simple,</span> <span
  m='101020'>have</span> <span m='101260'>their</span> <span
  m='101450'>base</span> <span m='101820'>on</span> <span m='102290'>the</span>
  <span m='102570'>x-axis. You know, this</span> <span m='103770'>is a</span>
  <span m='103910'>nice</span> <span m='104490'>setup</span> <span
  m='105660'>for</span> <span m='105780'>disks.</span> </p><p><span
  m='106090'>So</span> <span m='106190'>we're</span> <span
  m='106280'>going</span> <span m='106360'>to</span> <span
  m='106440'>take</span> <span m='107620'>vertical</span> <span
  m='108020'>disks</span> <span m='109720'>here,</span> <span
  m='110170'>like</span> <span m='110360'>this.</span> <span
  m='110570'>Vertical</span> <span m='110880'>rectangles</span> <span
  m='111580'>that</span> <span m='111730'>are</span> <span
  m='111800'>going</span> <span m='111930'>to</span> <span
  m='112000'>spin</span> <span m='113060'>into</span> <span
  m='113200'>vertical</span> <span m='113540'>disks.</span> <span m='114780'>And
  so</span> <span m='114870'>we're</span> <span m='114960'>going</span> <span
  m='115080'>to</span> <span m='115160'>integrate</span> <span
  m='116270'>all</span> <span m='116500'>these</span> <span
  m='116720'>disks,</span> <span m='116910'>we're</span> <span
  m='117040'>going</span> <span m='117190'>to</span> <span m='117270'>add</span>
  <span m='117480'>them</span> <span m='117620'>up</span> <span
  m='117810'>starting</span> <span m='119110'>at</span> <span
  m='119510'>x</span> <span m='119675'>equals</span> <span m='119840'>0,</span>
  <span m='120580'>and</span> <span m='120820'>going</span> <span
  m='121180'>until</span> <span m='121500'>the</span> <span
  m='121620'>end</span> <span m='121860'>of</span> <span m='121930'>this</span>
  <span m='122110'>region.</span> <span m='122430'>So</span> <span
  m='122560'>we</span> <span m='122650'>need</span> <span m='122780'>to</span>
  <span m='122900'>figure</span> <span m='123200'>out</span> <span
  m='123280'>what</span> <span m='123420'>the</span> <span m='123500'>end</span>
  <span m='123650'>of</span> <span m='123720'>that</span> <span
  m='123870'>region</span> <span m='124180'>is,</span> <span
  m='124690'>so</span> <span m='124930'>we</span> <span m='125050'>need</span>
  <span m='125880'>sine</span> <span m='126600'>a*x</span> <span
  m='127370'>to</span> <span m='127500'>be</span> <span m='127710'>0,</span>
  <span m='128160'>again.</span> <span m='128900'>Well,</span> <span
  m='131050'>the</span> <span m='131150'>first 0, the first</span> <span
  m='131390'>time</span> <span m='131660'>sine</span> <span m='132100'>is</span>
  <span m='132260'>0</span> <span m='133320'>after</span> <span
  m='133800'>0</span> <span m='134700'>is</span> <span m='134920'>at</span>
  <span m='135430'>pi,</span> <span m='136070'>so</span> <span
  m='136220'>we</span> <span m='136310'>need</span> <span m='136540'>a*x</span>
  <span m='137010'>to</span> <span m='137150'>be</span> <span
  m='137660'>pi.</span> <span m='138090'>So</span> <span m='138270'>this</span>
  <span m='138480'>value</span> <span m='139570'>is</span> <span
  m='139800'>at</span> <span m='140320'>pi</span> <span m='141570'>over</span>
  <span m='142540'>a.</span> <span m='143880'>OK.</span> <span
  m='144200'>So</span> <span m='145410'>that's</span> <span
  m='146660'>the</span> <span m='146780'>setup</span> <span
  m='147980'>for</span> <span m='148140'>the</span> <span
  m='148570'>problem.</span> </p><p><span m='149120'>And</span> <span
  m='149320'>now</span> <span m='149430'>we</span> <span m='149590'>just</span>
  <span m='149800'>need</span> <span m='149980'>to</span> <span
  m='150090'>remember,</span> <span m='150555'>you</span> <span
  m='151020'>know,</span> <span m='151430'>how</span> <span m='151620'>to</span>
  <span m='151730'>do</span> <span m='151970'>a</span> <span
  m='152120'>problem</span> <span m='152410'>like</span> <span
  m='152560'>this.</span> <span m='152710'>So</span> <span m='152830'>we</span>
  <span m='152940'>have</span> <span m='153950'>each</span> <span
  m='154180'>of</span> <span m='154270'>these</span> <span
  m='154520'>disks.</span> <span m='155000'>Well,</span> <span
  m='155150'>its</span> <span m='155300'>height</span> <span
  m='156250'>here</span> <span m='156640'>is</span> <span m='156880'>the</span>
  <span m='157040'>height</span> <span m='157330'>of</span> <span
  m='157430'>the</span> <span m='157530'>function,</span> <span
  m='158980'>which</span> <span m='159180'>is</span> <span m='159310'>y,</span>
  <span m='159750'>in</span> <span m='159860'>this</span> <span
  m='160040'>case.</span> </p><p><span m='160630'>So</span> <span
  m='162140'>the</span> <span m='162290'>area</span> <span m='162780'>of</span>
  <span m='162900'>a</span> <span m='162980'>little</span> <span
  m='163250'>disk--</span> <span m='165490'>sorry.</span> <span
  m='165790'>The</span> <span m='165890'>area</span> <span m='166240'>of</span>
  <span m='166330'>a</span> <span m='166420'>disk,</span> <span
  m='166840'>the</span> <span m='167530'>little--</span> <span
  m='167820'>oh,</span> <span m='168040'>dear.</span> </p><p><span
  m='169351'>The</span> <span m='169790'>element</span> <span
  m='170220'>of</span> <span m='170330'>volume,</span> <span
  m='170910'>the</span> <span m='171000'>little</span> <span
  m='171240'>bit</span> <span m='171380'>of</span> <span
  m='171480'>volume</span> <span m='172320'>that</span> <span
  m='172470'>we</span> <span m='172570'>get</span> <span m='173070'>is</span>
  <span m='173300'>equal</span> <span m='173600'>to--</span> <span
  m='174430'>well,</span> <span m='174900'>the</span> <span
  m='175110'>area</span> <span m='175440'>of</span> <span m='175530'>the</span>
  <span m='175640'>disk</span> <span m='176380'>is</span> <span
  m='176630'>pi</span> <span m='176990'>y</span> <span
  m='177330'>squared,</span> <span m='178210'>which</span> <span
  m='178510'>is</span> <span m='178670'>pi</span> <span m='179800'>sine</span>
  <span m='180390'>squared</span> <span m='181870'>of</span> <span
  m='182560'>a*x.</span> <span m='183210'>And</span> <span
  m='183550'>then</span> <span m='183970'>the</span> <span
  m='184300'>thickness</span> <span m='184770'>of</span> <span
  m='184930'>the</span> <span m='185550'>disk</span> <span m='185800'>is</span>
  <span m='185940'>a</span> <span m='186020'>little</span> <span
  m='186720'>dx.</span> <span m='187150'>So</span> <span m='187320'>this</span>
  <span m='187520'>is</span> <span m='188100'>our</span> <span
  m='188270'>little</span> <span m='188510'>element</span> <span
  m='188990'>dV</span> <span m='189460'>of</span> <span
  m='189600'>volume.</span> <span m='190920'>And</span> <span
  m='191130'>now</span> <span m='191550'>to</span> <span m='191660'>get</span>
  <span m='191830'>the</span> <span m='191900'>whole</span> <span
  m='192110'>volume,</span> <span m='192430'>we</span> <span
  m='192510'>just</span> <span m='192690'>integrate</span> <span
  m='193080'>this</span> <span m='193260'>over</span> <span
  m='193450'>the</span> <span m='193550'>appropriate</span> <span
  m='194350'>range.</span> <span m='195060'>So</span> <span
  m='195180'>this</span> <span m='195380'>means</span> <span m='195710'>V</span>
  <span m='196402'>is</span> <span m='196750'>equal</span> <span
  m='197380'>to</span> <span m='197440'>the</span> <span
  m='197610'>integral</span> <span m='197740'>from</span> <span
  m='197870'>0</span> <span m='198840'>to,</span> <span m='198950'>as</span>
  <span m='199060'>we</span> <span m='199170'>said,</span> <span
  m='199590'>to</span> <span m='199710'>pi</span> <span m='200010'>over</span>
  <span m='200270'>a</span> <span m='202930'>of</span> <span
  m='204570'>pi</span> <span m='205050'>times</span> <span
  m='206670'>sine</span> <span m='207380'>squared</span> <span
  m='208760'>of</span> <span m='209218'>a*x</span> <span m='211510'>dx.</span>
  </p><p><span m='212510'>So</span> <span m='212710'>this</span> <span
  m='212880'>is</span> <span m='213030'>just</span> <span m='213340'>like</span>
  <span m='213710'>the</span> <span m='213840'>sorts</span> <span
  m='214220'>of</span> <span m='215360'>integrals</span> <span
  m='215880'>you</span> <span m='215960'>were</span> <span
  m='216170'>doing</span> <span m='216850'>in</span> <span
  m='217040'>class.</span> <span m='217860'>It's</span> <span
  m='217920'>a</span> <span m='218000'>definite</span> <span
  m='218450'>integral.</span> <span m='218780'>I</span> <span
  m='218870'>guess</span> <span m='219030'>most</span> <span
  m='219240'>of</span> <span m='219310'>the</span> <span m='219370'>ones</span>
  <span m='219570'>you</span> <span m='219690'>did</span> <span
  m='219860'>were</span> <span m='220730'>just</span> <span
  m='220970'>anti-derivatives,</span> <span m='221740'>but</span> <span
  m='221890'>of</span> <span m='222000'>course,</span> <span
  m='222280'>that's</span> <span m='222960'>an</span> <span
  m='223140'>easy</span> <span m='223400'>translation</span> <span
  m='223990'>to</span> <span m='224110'>make</span> <span m='224430'>by</span>
  <span m='224640'>via</span> <span m='224695'>the</span> <span
  m='224750'>fundamental</span> <span m='225180'>theorem.</span> </p><p><span
  m='227580'>So, OK, so</span> <span m='227730'>we</span> <span
  m='227840'>have</span> <span m='228040'>this</span> <span
  m='228290'>a*x</span> <span m='228890'>here.</span> <span m='229940'>You know,
  it's</span> <span m='230050'>up</span> <span m='230210'>to</span> <span
  m='230300'>you.</span> <span m='231300'>I</span> <span m='231420'>think</span>
  <span m='231880'>my</span> <span m='232250'>life</span> <span
  m='232550'>will</span> <span m='232650'>be</span> <span
  m='232770'>simpler</span> <span m='233250'>if</span> <span m='233350'>I</span>
  <span m='233450'>just</span> <span m='233640'>make</span> <span
  m='233790'>a</span> <span m='233850'>little</span> <span
  m='234050'>u-substitution,</span> <span m='234860'>get</span> <span
  m='234990'>rid</span> <span m='235130'>of</span> <span m='235220'>the</span>
  <span m='235700'>a*x,</span> <span m='235850'>and</span> <span
  m='235860'>then</span> <span m='235870'>I</span> <span m='235880'>don't</span>
  <span m='236010'>have</span> <span m='236100'>to</span> <span
  m='236190'>think</span> <span m='236370'>about</span> <span
  m='236560'>it</span> <span m='236680'>very</span> <span m='236870'>much</span>
  <span m='237070'>anymore.</span> <span m='237740'>So</span> <span
  m='237890'>I</span> <span m='237940'>can</span> <span m='238110'>take</span>
  <span m='238340'>u</span> <span m='239130'>equals</span> <span
  m='239540'>a*x,</span> <span m='241070'>so</span> <span m='241330'>du</span>
  <span m='242100'>equals</span> <span m='243525'>a*dx,</span> <span
  m='244290'>or</span> <span m='245110'>dx</span> <span m='245740'>equals</span>
  <span m='246250'>1</span> <span m='246570'>over</span> <span
  m='246940'>a</span> <span m='248440'>du.</span> </p><p><span
  m='251410'>So</span> <span m='251540'>I, OK, so I</span> <span
  m='251610'>make</span> <span m='251850'>this</span> <span
  m='252120'>quick</span> <span m='252360'>substitution.</span> <span
  m='253430'>When</span> <span m='254226'>x</span> <span m='255020'>is</span>
  <span m='255260'>0,</span> <span m='255950'>u</span> <span
  m='256290'>is</span> <span m='256480'>also</span> <span m='256880'>0.</span>
  <span m='257670'>When</span> <span m='257840'>x</span> <span
  m='258040'>is</span> <span m='258240'>pi</span> <span m='258590'>over</span>
  <span m='258890'>a,</span> <span m='259430'>u</span> <span
  m='259930'>is</span> <span m='260160'>just</span> <span m='260470'>pi.</span>
  <span m='261280'>So</span> <span m='261450'>this</span> <span
  m='261660'>becomes</span> <span m='262880'>the</span> <span
  m='263050'>integral</span> <span m='263510'>from</span> <span
  m='263720'>0</span> <span m='264155'>to</span> <span m='264590'>pi--</span>
  <span m='265260'>I</span> <span m='265330'>can</span> <span
  m='265530'>pull</span> <span m='265800'>this</span> <span m='266070'>pi</span>
  <span m='266400'>out</span> <span m='266660'>front.</span> <span
  m='267310'>And</span> <span m='267490'>I</span> <span m='267550'>can</span>
  <span m='267740'>pull--</span> <span m='268240'>so</span> <span
  m='268350'>I'm</span> <span m='268430'>going</span> <span m='268530'>to</span>
  <span m='268630'>get</span> <span m='269340'>pi</span> <span
  m='270000'>times</span> <span m='272160'>sine</span> <span
  m='272600'>squared</span> <span m='273720'>u</span> <span
  m='274200'>times</span> <span m='275210'>dx</span> <span m='275570'>is</span>
  <span m='275690'>1</span> <span m='275930'>over</span> <span
  m='276150'>a</span> <span m='276730'>du.</span> <span m='277860'>So</span>
  <span m='278400'>I'm</span> <span m='278580'>going</span> <span
  m='278765'>to</span> <span m='280070'>pull</span> <span m='280370'>the</span>
  <span m='280470'>1</span> <span m='280650'>over</span> <span
  m='280890'>a</span> <span m='281210'>out</span> <span m='281500'>front,</span>
  <span m='282290'>as</span> <span m='282490'>well.</span> <span
  m='282710'>So</span> <span m='282840'>it's</span> <span m='282980'>pi</span>
  <span m='283270'>over</span> <span m='283530'>a</span> <span
  m='284170'>times</span> <span m='284420'>the</span> <span
  m='284570'>integral</span> <span m='284710'>from</span> <span
  m='284865'>0</span> <span m='285020'>to</span> <span m='285110'>pi</span>
  <span m='285370'>of</span> <span m='285575'>sine</span> <span
  m='285780'>squared</span> <span m='286020'>u</span> <span
  m='286670'>du.</span> </p><p><span m='287200'>OK.</span> <span
  m='287750'>So</span> <span m='288290'>now</span> <span m='288430'>we've</span>
  <span m='288570'>just</span> <span m='288750'>simplified</span> <span
  m='289170'>it</span> <span m='289240'>to</span> <span m='289340'>the</span>
  <span m='289430'>situation</span> <span m='289890'>where</span> <span
  m='290010'>we've</span> <span m='290120'>just</span> <span
  m='290320'>got</span> <span m='290450'>a</span> <span m='290510'>trig</span>
  <span m='290730'>integral,</span> <span m='291770'>no</span> <span
  m='292540'>other</span> <span m='292800'>complications</span> <span
  m='293410'>at</span> <span m='293480'>all.</span> <span m='294270'>How</span>
  <span m='294440'>do</span> <span m='294530'>we</span> <span
  m='294640'>do</span> <span m='294780'>this</span> <span m='294930'>one?</span>
  <span m='295070'>Well, OK, so</span> <span m='295570'>this</span> <span
  m='295720'>is</span> <span m='295830'>not</span> <span m='296290'>one</span>
  <span m='296420'>of</span> <span m='296510'>those</span> <span
  m='296670'>nice</span> <span m='297080'>ones</span> <span
  m='297650'>where</span> <span m='297840'>we</span> <span
  m='297960'>have</span> <span m='298160'>an</span> <span m='298360'>odd</span>
  <span m='298820'>power</span> <span m='299540'>for</span> <span
  m='299730'>either</span> <span m='299950'>sine</span> <span
  m='300280'>or</span> <span m='300390'>cosine.</span> <span
  m='300870'>We</span> <span m='300970'>have</span> <span m='301460'>sine</span>
  <span m='301990'>is</span> <span m='302110'>appearing</span> <span
  m='302490'>to</span> <span m='302590'>the</span> <span m='302690'>even</span>
  <span m='303010'>power</span> <span m='303320'>of 2,</span> <span
  m='303820'>and</span> <span m='304040'>cosine,</span> <span
  m='304580'>well,</span> <span m='304710'>it</span> <span
  m='304810'>doesn't</span> <span m='305140'>appear.</span> <span
  m='305550'>It</span> <span m='305660'>appears</span> <span
  m='305990'>to</span> <span m='306100'>the</span> <span m='306210'>even</span>
  <span m='306510'>power</span> <span m='306860'>0,</span> <span
  m='307680'>if</span> <span m='307830'>you</span> <span m='307920'>like.</span>
  <span m='308150'>You</span> <span m='308250'>could</span> <span
  m='308400'>say</span> <span m='308520'>it</span> <span m='308680'>that</span>
  <span m='308870'>way.</span> </p><p><span m='309700'>So</span> <span
  m='309890'>when</span> <span m='309990'>we</span> <span m='310080'>have</span>
  <span m='310210'>a</span> <span m='310260'>situation</span> <span
  m='311210'>where</span> <span m='311330'>sine</span> <span
  m='311540'>and</span> <span m='311750'>cosine</span> <span
  m='312250'>both</span> <span m='312460'>appear</span> <span
  m='312660'>in</span> <span m='312860'>even</span> <span
  m='313170'>powers,</span> <span m='313730'>what</span> <span
  m='313940'>we</span> <span m='314030'>need</span> <span m='314180'>to</span>
  <span m='314260'>do</span> <span m='314400'>is</span> <span
  m='314500'>we</span> <span m='314543'>need</span> <span m='314730'>to</span>
  <span m='314860'>use</span> <span m='315420'>one</span> <span
  m='315630'>of</span> <span m='315710'>our</span> <span m='315860'>trig</span>
  <span m='316210'>identities.</span> <span m='317020'>We</span> <span
  m='317200'>need</span> <span m='317340'>to</span> <span m='317420'>use</span>
  <span m='317740'>a</span> <span m='318100'>half</span> <span
  m='318350'>angle</span> <span m='318750'>identity.</span> <span
  m='319790'>So</span> <span m='320380'>the</span> <span
  m='320600'>identity</span> <span m='321100'>in</span> <span
  m='321200'>particular</span> <span m='321700'>that</span> <span
  m='321830'>we</span> <span m='321950'>want</span> <span m='322060'>to</span>
  <span m='322170'>use</span> <span m='322400'>is</span> <span
  m='322477'>we</span> <span m='322555'>want</span> <span m='322632'>to</span>
  <span m='322710'>replace</span> <span m='323520'>sine</span> <span
  m='324030'>squared</span> <span m='324350'>u</span> <span
  m='324990'>with</span> <span m='325250'>something</span> <span
  m='327460'>like</span> <span m='327630'>a</span> <span
  m='327720'>cosine</span> <span m='328350'>of</span> <span m='328520'>2u</span>
  <span m='329200'>somehow.</span> </p><p><span m='330940'>So</span> <span
  m='331280'>in</span> <span m='331350'>order</span> <span m='331540'>to</span>
  <span m='331680'>do</span> <span m='331830'>that,</span> <span
  m='332050'>we</span> <span m='332170'>need</span> <span m='332330'>to</span>
  <span m='332430'>remember</span> <span m='332790'>the</span> <span
  m='333360'>appropriate</span> <span m='334150'>identity.</span> <span
  m='335470'>So</span> <span m='335610'>one</span> <span m='335870'>of</span>
  <span m='335980'>the</span> <span m='336150'>double</span> <span
  m='336520'>angle</span> <span m='336860'>identities</span> <span
  m='337855'>is</span> <span m='338130'>cosine</span> <span m='339110'>of</span>
  <span m='339600'>2t</span> <span m='340990'>equals</span> <span
  m='341430'>1</span> <span m='341810'>minus</span> <span m='342350'>2</span>
  <span m='344000'>sine</span> <span m='344520'>squared</span> <span
  m='344970'>t,</span> <span m='345640'>which</span> <span m='345890'>we</span>
  <span m='346030'>can</span> <span m='346220'>rewrite</span> <span
  m='346680'>as</span> <span m='346850'>the</span> <span m='346940'>half</span>
  <span m='347250'>angle</span> <span m='347550'>identity</span> <span
  m='348940'>sine</span> <span m='349420'>squared</span> <span
  m='349900'>t</span> <span m='351010'>equals</span> <span m='352660'>1</span>
  <span m='353240'>minus</span> <span m='354530'>cosine</span> <span
  m='355270'>2t</span> <span m='357030'>over</span> <span m='357250'>2.</span>
  <span m='357510'>So</span> <span m='357660'>this</span> <span
  m='357830'>is</span> <span m='357940'>true</span> <span m='358180'>for</span>
  <span m='358340'>any</span> <span m='359220'>value</span> <span
  m='359590'>t.</span> <span m='360060'>In</span> <span
  m='360160'>particular,</span> <span m='360630'>it's</span> <span
  m='360785'>true</span> <span m='360940'>when</span> <span m='361220'>t</span>
  <span m='361420'>is</span> <span m='361550'>equal</span> <span
  m='361780'>to</span> <span m='361880'>u.</span> </p><p><span
  m='363200'>Back</span> <span m='363410'>over</span> <span
  m='363550'>here.</span> <span m='363710'>So</span> <span m='363810'>we</span>
  <span m='363890'>can</span> <span m='364030'>rewrite</span> <span
  m='364430'>this</span> <span m='364930'>by</span> <span
  m='365270'>replacing</span> <span m='368660'>sine</span> <span
  m='369020'>squared</span> <span m='369140'>u</span> <span
  m='369430'>with</span> <span m='369650'>1</span> <span m='369930'>minus</span>
  <span m='370790'>cosine</span> <span m='371320'>of</span> <span
  m='371440'>2u</span> <span m='372290'>divided</span> <span
  m='372670'>by</span> <span m='372880'>2.</span> <span m='373330'>So</span>
  <span m='373540'>this</span> <span m='373690'>integral</span> <span
  m='374080'>becomes,</span> <span m='374770'>so</span> <span
  m='374880'>our</span> <span m='374990'>integral</span> <span
  m='375910'>is</span> <span m='376370'>equal</span> <span
  m='376720'>to--</span> <span m='378160'>well,</span> <span
  m='378340'>we've</span> <span m='378420'>still</span> <span
  m='378650'>got</span> <span m='378830'>the</span> <span m='378910'>pi</span>
  <span m='379230'>over</span> <span m='379460'>a</span> <span
  m='379690'>in</span> <span m='379880'>the</span> <span
  m='380010'>front--</span> <span m='381090'>integral</span> <span
  m='381410'>from</span> <span m='381690'>0</span> <span m='382630'>to</span>
  <span m='383100'>pi</span> <span m='383810'>of</span> <span
  m='384140'>1</span> <span m='385130'>minus</span> <span
  m='386060'>cosine</span> <span m='387330'>of</span> <span m='387620'>2u</span>
  <span m='389650'>over</span> <span m='390470'>2</span> <span
  m='392360'>du.</span> </p><p><span m='394240'>OK, and</span> <span
  m='394430'>so</span> <span m='394520'>now</span> <span m='394730'>we</span>
  <span m='395310'>integrate</span> <span m='395700'>it.</span> <span
  m='395880'>So</span> <span m='396360'>1</span> <span m='396770'>over</span>
  <span m='397020'>2,</span> <span m='397550'>that's</span> <span
  m='397800'>easy.</span> <span m='398160'>That's</span> <span
  m='398500'>just--</span> <span m='399610'>so, OK, so</span> <span
  m='400210'>the</span> <span m='400345'>pi</span> <span m='400480'>over</span>
  <span m='400576'>a</span> <span m='400673'>is</span> <span
  m='400770'>still</span> <span m='400970'>out</span> <span m='401115'>in</span>
  <span m='401260'>front.</span> <span m='403050'>1</span> <span
  m='403300'>over</span> <span m='403490'>2</span> <span
  m='404030'>integrates,</span> <span m='405180'>just</span> <span
  m='405400'>gives</span> <span m='405730'>us</span> <span m='405840'>u</span>
  <span m='406920'>over</span> <span m='407180'>2.</span> <span
  m='407340'>How</span> <span m='407510'>about</span> <span
  m='408150'>cosine</span> <span m='409330'>of</span> <span
  m='409710'>2u?</span> <span m='411020'>Well,</span> <span m='411770'>so</span>
  <span m='411940'>minus</span> <span m='412400'>cosine</span> <span
  m='412840'>of</span> <span m='413010'>2u,</span> <span m='413430'>so</span>
  <span m='414260'>that</span> <span m='414510'>should</span> <span
  m='414680'>give</span> <span m='414850'>us</span> <span m='414970'>a</span>
  <span m='415140'>minus</span> <span m='415670'>sine. Right?</span> <span
  m='416700'>Derivative</span> <span m='417090'>of</span> <span
  m='417270'>sine</span> <span m='417770'>is</span> <span
  m='417890'>cosine,</span> <span m='418690'>derivative</span> <span
  m='418810'>of</span> <span m='419140'>minus</span> <span
  m='419510'>sine</span> <span m='419780'>is</span> <span
  m='419900'>minus</span> <span m='420260'>cosine.</span> <span
  m='421000'>So</span> <span m='421230'>its</span> <span m='421370'>minus</span>
  <span m='423730'>sine</span> <span m='424910'>of</span> <span
  m='425230'>2u,</span> <span m='425780'>and</span> <span m='425910'>then</span>
  <span m='426000'>because</span> <span m='426290'>it's</span> <span
  m='426540'>2u,</span> <span m='427430'>we're</span> <span
  m='427570'>going</span> <span m='427635'>to</span> <span
  m='427700'>have</span> <span m='427820'>to</span> <span
  m='428130'>divide</span> <span m='428510'>by</span> <span m='428690'>2</span>
  <span m='428960'>again.</span> <span m='430330'>So</span> <span
  m='430610'>over</span> <span m='432350'>4.</span> </p><p><span
  m='436240'>All</span> <span m='436390'>right.</span> <span
  m='436840'>If</span> <span m='437010'>you</span> <span m='437080'>don't</span>
  <span m='437240'>believe</span> <span m='437460'>me,</span> <span
  m='437550'>of</span> <span m='437630'>course,</span> <span
  m='437850'>you</span> <span m='437910'>could</span> <span
  m='438000'>always</span> <span m='438210'>check</span> <span
  m='438560'>by</span> <span m='439050'>differentiating</span> <span
  m='439740'>this</span> <span m='439870'>expression</span> <span
  m='440590'>and</span> <span m='440810'>making</span> <span
  m='441080'>sure</span> <span m='441300'>that</span> <span m='441420'>it</span>
  <span m='441520'>matches</span> <span m='442420'>that</span> <span
  m='442600'>expression,</span> <span m='444120'>the</span> <span
  m='444240'>integrand,</span> <span m='444730'>here.</span> <span
  m='445650'>And OK, and</span> <span m='445760'>so</span> <span
  m='445860'>we</span> <span m='445970'>need</span> <span m='446140'>to</span>
  <span m='447050'>take</span> <span m='447340'>that</span> <span
  m='447560'>between</span> <span m='448060'>u</span> <span
  m='448370'>equals</span> <span m='448760'>0</span> <span m='449680'>and</span>
  <span m='449900'>u</span> <span m='450150'>equals</span> <span
  m='450550'>pi.</span> <span m='451050'>So</span> <span
  m='451205'>luckily</span> <span m='451360'>we</span> <span
  m='451490'>changed</span> <span m='451860'>our</span> <span
  m='451950'>bounds</span> <span m='452130'>of</span> <span
  m='452310'>integration</span> <span m='452760'>and</span> <span
  m='452800'>we</span> <span m='452840'>don't</span> <span
  m='452980'>have</span> <span m='453080'>to</span> <span m='453160'>go</span>
  <span m='453440'>all</span> <span m='453580'>the</span> <span
  m='453650'>way</span> <span m='453740'>back</span> <span m='454055'>to</span>
  <span m='454212'>x</span> <span m='454370'>again.</span> </p><p><span
  m='456950'>OK, so</span> <span m='457110'>this</span> <span
  m='457310'>is</span> <span m='457960'>pi</span> <span m='458450'>over</span>
  <span m='458840'>a</span> <span m='464340'>times-- OK,</span> <span
  m='466740'>so</span> <span m='466940'>u</span> <span m='467290'>over</span>
  <span m='467500'>2</span> <span m='467700'>minus</span> <span
  m='468380'>sine,</span> <span m='468730'>2u</span> <span
  m='469110'>over</span> <span m='469280'>4</span> <span m='469760'>when
  u</span> <span m='471920'>is</span> <span m='472600'>pi</span> <span
  m='472980'>over</span> <span m='473260'>2</span> <span m='474310'>minus</span>
  <span m='475450'>sine</span> <span m='475940'>of</span> <span
  m='476150'>2</span> <span m='476340'>pi.</span> <span m='477200'>That's</span>
  <span m='477550'>just</span> <span m='477930'>0,</span> <span
  m='478640'>right?</span> <span m='479990'>Yes,</span> <span
  m='480770'>that's</span> <span m='481070'>just</span> <span
  m='481320'>0.</span> <span m='481840'>Good.</span> <span m='482050'>So</span>
  <span m='482160'>this</span> <span m='482320'>term</span> <span
  m='482530'>is</span> <span m='482640'>just</span> <span m='482810'>0.</span>
  <span m='483440'>pi</span> <span m='483622'>over</span> <span
  m='483805'>2</span> <span m='485070'>minus--</span> <span
  m='486200'>OK,</span> <span m='486520'>now</span> <span m='486700'>when</span>
  <span m='486850'>we</span> <span m='486960'>put</span> <span
  m='487140'>in</span> <span m='487260'>0,</span> <span m='487580'>here,
  well,</span> <span m='487780'>we</span> <span m='487970'>get</span> <span
  m='488150'>0</span> <span m='488930'>minus</span> <span m='489300'>sine</span>
  <span m='489620'>of</span> <span m='489740'>0,</span> <span
  m='490080'>so</span> <span m='491350'>that's</span> <span
  m='491600'>just</span> <span m='491830'>0--</span> <span m='492265'>so</span>
  <span m='492700'>just</span> <span m='492950'>pi</span> <span
  m='493125'>over</span> <span m='493300'>2.</span> </p><p><span
  m='493850'>OK.</span> <span m='494130'>So</span> <span m='494240'>the</span>
  <span m='494350'>answer,</span> <span m='495270'>then,</span> <span
  m='496440'>is</span> <span m='496600'>pi</span> <span
  m='496920'>squared</span> <span m='498410'>over</span> <span
  m='498710'>2a.</span> <span m='500380'>So</span> <span
  m='500570'>that's</span> <span m='500800'>the</span> <span
  m='500890'>volume</span> <span m='501260'>we</span> <span
  m='501340'>were</span> <span m='501490'>looking</span> <span
  m='501770'>for.</span> </p><p><span m='502440'>So</span> <span
  m='502580'>just</span> <span m='503510'>to</span> <span
  m='503640'>quickly</span> <span m='504380'>recap,</span> <span
  m='506230'>we</span> <span m='506410'>have</span> <span m='508320'>our</span>
  <span m='508640'>solid</span> <span m='509250'>of</span> <span
  m='509390'>revolution</span> <span m='509950'>here</span> <span
  m='510160'>that</span> <span m='510280'>we</span> <span m='510370'>get</span>
  <span m='510530'>by</span> <span m='510650'>spinning</span> <span
  m='511500'>this</span> <span m='511690'>region</span> <span
  m='512010'>around</span> <span m='512600'>the</span> <span
  m='512990'>x-axis.</span> <span m='514180'>We</span> <span
  m='514300'>use</span> <span m='514480'>our</span> <span
  m='514850'>typical</span> <span m='515240'>methods</span> <span
  m='515690'>for</span> <span m='515850'>computing</span> <span
  m='516640'>volumes</span> <span m='517220'>of</span> <span
  m='517290'>solids</span> <span m='517710'>of</span> <span
  m='517820'>revolution.</span> <span m='518660'>We've</span> <span
  m='518870'>got</span> <span m='519070'>a,</span> <span m='520300'>when</span>
  <span m='520520'>we</span> <span m='520630'>do</span> <span
  m='520770'>that,</span> <span m='521490'>the</span> <span
  m='521880'>integral</span> <span m='522250'>that</span> <span
  m='522360'>we</span> <span m='522460'>set</span> <span m='522680'>up</span>
  <span m='523090'>is</span> <span m='523480'>a</span> <span
  m='523620'>trig</span> <span m='523910'>integral</span> <span
  m='524260'>with</span> <span m='524440'>a</span> <span m='524510'>sine</span>
  <span m='524860'>squared</span> <span m='525350'>in</span> <span
  m='525520'>it.</span> <span m='525670'>So</span> <span m='525770'>both</span>
  <span m='526290'>sine</span> <span m='526510'>and</span> <span
  m='526730'>cosine</span> <span m='527140'>appear</span> <span
  m='527430'>to</span> <span m='527590'>an</span> <span m='527690'>even</span>
  <span m='527970'>power</span> <span m='528290'>in</span> <span
  m='528380'>this</span> <span m='528470'>trig</span> <span
  m='528760'>integral.</span> <span m='529610'>When</span> <span
  m='529760'>you're</span> <span m='530060'>in</span> <span
  m='530230'>that</span> <span m='530410'>situation,</span> <span
  m='531230'>you're</span> <span m='531370'>going</span> <span
  m='531450'>to</span> <span m='531530'>have</span> <span m='531670'>to</span>
  <span m='531770'>use</span> <span m='532230'>your</span> <span
  m='532340'>half</span> <span m='532590'>angle</span> <span
  m='532890'>formulas,</span> <span m='533790'>like</span> <span
  m='534050'>so.</span> </p><p><span m='534550'>Once</span> <span
  m='534850'>you</span> <span m='534930'>do</span> <span m='535080'>that,</span>
  <span m='535310'>you'll</span> <span m='535420'>simplify.</span> <span
  m='536310'>Sometimes</span> <span m='537220'>life</span> <span
  m='537560'>is</span> <span m='537750'>hard,</span> <span
  m='538100'>you'll</span> <span m='538200'>have</span> <span
  m='538340'>to</span> <span m='538440'>do</span> <span m='538540'>it</span>
  <span m='538620'>more</span> <span m='538850'>than</span> <span
  m='538960'>once.</span> <span m='539330'>In</span> <span
  m='539680'>this</span> <span m='539920'>case,</span> <span
  m='540150'>we</span> <span m='540270'>only</span> <span m='540450'>had</span>
  <span m='540570'>to</span> <span m='540660'>do</span> <span
  m='540780'>that</span> <span m='541010'>once,</span> <span m='542250'>so we
  got--</span> <span m='542530'>then</span> <span m='542950'>we--</span> <span
  m='544740'>that</span> <span m='544940'>reduces</span> <span
  m='545730'>the</span> <span m='546490'>integral</span> <span
  m='546860'>to</span> <span m='546940'>something</span> <span
  m='547630'>that's</span> <span m='547840'>easy</span> <span
  m='548100'>to</span> <span m='548200'>compute,</span> <span
  m='549160'>where</span> <span m='549390'>you</span> <span
  m='549500'>have</span> <span m='550110'>one</span> <span m='550360'>of</span>
  <span m='550470'>sine</span> <span m='550770'>or</span> <span
  m='550880'>cosine</span> <span m='551350'>always</span> <span
  m='551630'>appearing</span> <span m='551960'>to</span> <span
  m='552120'>an</span> <span m='552255'>odd</span> <span
  m='552390'>power.</span> <span m='553040'>In</span> <span
  m='553180'>this</span> <span m='553320'>case,</span> <span
  m='554530'>very</span> <span m='555060'>simple.</span> <span
  m='555350'>You</span> <span m='555450'>just</span> <span m='555680'>had</span>
  <span m='555830'>a</span> <span m='555870'>cosine.</span> <span
  m='557060'>And</span> <span m='557250'>then</span> <span m='557600'>you</span>
  <span m='557960'>integrate</span> <span m='558320'>it,</span> <span
  m='558680'>and</span> <span m='559120'>this</span> <span m='559310'>was</span>
  <span m='559450'>our</span> <span m='559570'>final</span> <span
  m='559890'>answer.</span> </p><p><span m='561240'>I'll</span> <span
  m='561440'>end</span> <span m='561660'>there.</span> </p>
embedded_media:
  - uid: 3428b1b89cc87057916c46b891561d73
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Wj0oH3ehk18
  - uid: 13c8484cefe333e8925389e9c84e7bd7
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Wj0oH3ehk18/default.jpg'
  - uid: 402d11a22a6de6483b93fd143cb38cd8
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Wj0oH3ehk18
  - uid: 288e837cd7792bcab42df5771bae8feb
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Wj0oH3ehk18.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-a-trigonometric-powers-trigonometric-substitution-and-completing-the-square/session-68-integral-of-sin-n-x-cos-m-x-odd-exponents/trig-integrals-and-a-volume-of-revolution/Wj0oH3ehk18.srt
  - uid: 49d1a497fdf812280902a965c316d2be
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Wj0oH3ehk18.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-4-techniques-of-integration/part-a-trigonometric-powers-trigonometric-substitution-and-completing-the-square/session-68-integral-of-sin-n-x-cos-m-x-odd-exponents/trig-integrals-and-a-volume-of-revolution/Wj0oH3ehk18.pdf
  - uid: 342cf4ea6291d19fdd9c1986951ffbb2
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 827da93eec7135042dfae964d5884b81
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8679ee0f46540e85cb0a7c7eaf0e63bd
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_51_300k.mp4'
  - uid: 89e187e1d74ce08afc05ec1f0852f1f6
    parent_uid: c095baf2aff0011ac8f5050c53c0e3ea
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/trig-integrals-volume-revolution/id414308064?i=90319641
type: courses
layout: video
---
