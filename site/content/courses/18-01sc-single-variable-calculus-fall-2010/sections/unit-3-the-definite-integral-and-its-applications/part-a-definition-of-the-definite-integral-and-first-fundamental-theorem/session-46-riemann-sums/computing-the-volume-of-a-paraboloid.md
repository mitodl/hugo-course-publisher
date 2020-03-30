---
title: Computing the Volume of a Paraboloid
uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
parent_uid: d5e0c7a6f17252a3c694d627faf12123
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-a-definition-of-the-definite-integral-and-first-fundamental-theorem/session-46-riemann-sums/computing-the-volume-of-a-paraboloid
short_url: computing-the-volume-of-a-paraboloid
inline_embed_id: 38713090computingthevolumeofaparaboloid14171352
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7320'>PROFESSOR: Welcome</span> <span m='7660'>back</span> <span
  m='7810'>to</span> <span m='7890'>recitation.</span> <span m='9060'>In</span>
  <span m='9340'>this</span> <span m='9500'>video,</span> <span
  m='9840'>what</span> <span m='9990'>we'd</span> <span m='10150'>like</span>
  <span m='10350'>to</span> <span m='10470'>do</span> <span m='11310'>is</span>
  <span m='11590'>find</span> <span m='11890'>the</span> <span
  m='12070'>volume</span> <span m='12580'>of</span> <span m='12840'>a</span>
  <span m='12960'>paraboloid--</span> <span m='14190'>this</span> <span
  m='14360'>one</span> <span m='14550'>that</span> <span m='14670'>I've</span>
  <span m='14810'>drawn</span> <span m='15040'>on the</span> <span
  m='15220'>board--</span> <span m='15830'>using</span> <span
  m='16280'>what</span> <span m='16420'>we</span> <span m='16530'>know</span>
  <span m='16900'>about</span> <span m='17210'>Riemann</span> <span
  m='17630'>sums</span> <span m='18030'>and</span> <span
  m='18190'>integrals.</span> <span m='19160'>And</span> <span
  m='19310'>so,</span> <span m='20020'>this</span> <span
  m='20260'>paraboloid,</span> <span m='20770'>just</span> <span
  m='20920'>so</span> <span m='20990'>you</span> <span
  m='21080'>understand,</span> <span m='21520'>what</span> <span
  m='21620'>we</span> <span m='21730'>do</span> <span m='21890'>is</span> <span
  m='22010'>we</span> <span m='22120'>take</span> <span m='22310'>the</span>
  <span m='22400'>curve</span> <span m='22620'>y</span> <span
  m='22940'>equals</span> <span m='23080'>x</span> <span
  m='23250'>squared</span> <span m='24040'>and</span> <span m='24280'>we</span>
  <span m='24400'>rotate it</span> <span m='24990'>around</span> <span
  m='25920'>the</span> <span m='26100'>y-axis.</span> <span m='27380'>And</span>
  <span m='27570'>we're</span> <span m='27690'>looking</span> <span
  m='27960'>in</span> <span m='28060'>particular,</span> <span m='28960'>from
  height--</span> <span m='29680'>the</span> <span m='29860'>height</span> <span
  m='30300'>of</span> <span m='30610'>capital</span> <span m='31040'>H,</span>
  <span m='31420'>so</span> <span m='31570'>from</span> <span m='31770'>0</span>
  <span m='32090'>to</span> <span m='32200'>capital</span> <span
  m='32540'>H,</span> <span m='32840'>that's</span> <span m='33020'>what</span>
  <span m='33130'>our</span> <span m='33470'>y-value</span> <span
  m='33780'>is</span> <span m='33890'>ranging</span> <span
  m='34250'>over.</span> <span m='35110'>And</span> <span m='35320'>what</span>
  <span m='35470'>we'd</span> <span m='35630'>like</span> <span
  m='35830'>to</span> <span m='35960'>do</span> <span m='36140'>is</span> <span
  m='36300'>find</span> <span m='36570'>the</span> <span m='36630'>volume</span>
  <span m='36980'>enclosed</span> <span m='38110'>by</span> <span
  m='38250'>the</span> <span m='38370'>rotation</span> <span m='38890'>of</span>
  <span m='38970'>y</span> <span m='39210'>equals</span> <span
  m='39340'>x</span> <span m='39500'>squared</span> <span
  m='39850'>around</span> <span m='41410'>the</span> <span
  m='41480'>y-axis.</span> </p><p><span m='42650'>So</span> <span
  m='42820'>what</span> <span m='42940'>I'd</span> <span m='43090'>like</span>
  <span m='43280'>you</span> <span m='43380'>to</span> <span m='43490'>do</span>
  <span m='43760'>is</span> <span m='44010'>to</span> <span
  m='44110'>think</span> <span m='44320'>about</span> <span m='44880'>how</span>
  <span m='45020'>you</span> <span m='45180'>could</span> <span
  m='45370'>write</span> <span m='45670'>the</span> <span
  m='45750'>volume</span> <span m='46300'>as</span> <span m='46560'>an</span>
  <span m='46660'>integral.</span> <span m='47690'>And</span> <span
  m='48180'>I</span> <span m='48300'>would</span> <span m='48490'>suggest</span>
  <span m='49040'>that</span> <span m='49150'>you</span> <span
  m='49260'>think</span> <span m='49480'>about</span> <span
  m='49770'>integrating</span> <span m='50380'>in the</span> <span
  m='50780'>y</span> <span m='51130'>variable</span> <span m='52470'>as</span>
  <span m='52650'>opposed</span> <span m='53020'>to</span> <span m='53080'>the
  x</span> <span m='53390'>variable.</span> <span m='53740'>So</span> <span
  m='53840'>we're</span> <span m='53930'>going</span> <span m='54110'>to</span>
  <span m='54210'>do</span> <span m='54360'>it</span> <span m='54460'>in</span>
  <span m='54530'>the</span> <span m='54600'>y</span> <span
  m='54760'>variable.</span> <span m='55550'>So I'll</span> <span
  m='55760'>give</span> <span m='55920'>you</span> <span m='55990'>a</span>
  <span m='56020'>little</span> <span m='56200'>while</span> <span
  m='56500'>to</span> <span m='56670'>think</span> <span m='56890'>about</span>
  <span m='57160'>that.</span> <span m='57420'>Start</span> <span
  m='57880'>as</span> <span m='58050'>a</span> <span m='58120'>Riemann</span>
  <span m='58510'>sum,</span> <span m='59020'>take</span> <span
  m='59250'>it</span> <span m='59360'>to</span> <span m='59450'>an</span> <span
  m='59530'>integral,</span> <span m='60440'>and</span> <span
  m='60660'>then</span> <span m='61110'>I'll</span> <span m='61290'>come</span>
  <span m='61450'>back</span> <span m='61780'>and</span> <span
  m='62060'>show</span> <span m='62200'>you</span> <span m='62290'>how</span>
  <span m='62430'>I</span> <span m='62540'>did</span> <span m='62730'>it.</span>
  </p><p><span m='72030'>OK,</span> <span m='72240'>welcome</span> <span
  m='72540'>back.</span> <span m='73320'>So</span> <span m='73500'>again,</span>
  <span m='73740'>what</span> <span m='73850'>we're</span> <span
  m='73950'>trying</span> <span m='74130'>to</span> <span m='74200'>do</span>
  <span m='74360'>is</span> <span m='74500'>find the</span> <span
  m='74760'>volume</span> <span m='75070'>of</span> <span m='75530'>this</span>
  <span m='75680'>paraboloid.</span> <span m='76320'>And</span> <span
  m='76500'>we're</span> <span m='77280'>hoping</span> <span m='77570'>to</span>
  <span m='77650'>write</span> <span m='77830'>it</span> <span
  m='77930'>as</span> <span m='78070'>an</span> <span m='78180'>integral</span>
  <span m='78760'>in</span> <span m='78870'>the</span> <span
  m='78970'>end.</span> <span m='79890'>So</span> <span m='80160'>I'm</span>
  <span m='80350'>going to</span> <span m='80540'>give</span> <span
  m='80740'>us</span> <span m='81250'>a</span> <span m='81360'>little</span>
  <span m='81570'>understanding</span> <span m='82120'>of</span> <span
  m='82220'>how</span> <span m='82330'>we</span> <span m='82490'>start</span>
  <span m='82760'>the</span> <span m='82840'>process.</span> <span
  m='83490'>And</span> <span m='83620'>what</span> <span m='83720'>I</span>
  <span m='83770'>want to</span> <span m='83980'>do</span> <span
  m='84150'>is</span> <span m='84620'>break</span> <span m='84930'>up</span>
  <span m='85110'>this</span> <span m='85250'>paraboloid</span> <span
  m='85840'>first,</span> <span m='86540'>into</span> <span m='86880'>our</span>
  <span m='87060'>first-best</span> <span m='87680'>guess.</span> <span
  m='88060'>And</span> <span m='88200'>I'm</span> <span m='88290'>going</span>
  <span m='88450'>to</span> <span m='88560'>estimate</span> <span
  m='89160'>the</span> <span m='89240'>volume</span> <span
  m='90050'>using</span> <span m='90810'>four</span> <span
  m='91290'>different--</span> <span m='91810'>I'm</span> <span
  m='91920'>breaking</span> <span m='92250'>it up</span> <span
  m='92390'>into</span> <span m='92520'>four</span> <span
  m='92720'>pieces,</span> <span m='93390'>so</span> <span m='93610'>I'll
  use</span> <span m='93850'>four</span> <span m='94070'>cylinders.</span>
  </p><p><span m='94960'>So</span> <span m='95170'>let</span> <span
  m='95310'>me</span> <span m='95410'>actually</span> <span
  m='97020'>just</span> <span m='97280'>draw</span> <span m='97590'>these</span>
  <span m='97730'>cylinders.</span> <span m='98240'>So I'm</span> <span
  m='98410'>going</span> <span m='98470'>to</span> <span m='98560'>start</span>
  <span m='99570'>at</span> <span m='99680'>the</span> <span
  m='99760'>top</span> <span m='100060'>radius.</span> <span
  m='102346'>And</span> <span m='102820'>that</span> <span
  m='103020'>would</span> <span m='103130'>maybe</span> <span
  m='103380'>be</span> <span m='103520'>my</span> <span m='103690'>first</span>
  <span m='104070'>cylinder.</span> <span m='104910'>And</span> <span
  m='105080'>then</span> <span m='105200'>the</span> <span
  m='105280'>next</span> <span m='105550'>radius</span> <span
  m='105920'>would</span> <span m='106020'>be</span> <span m='106120'>the</span>
  <span m='106220'>one</span> <span m='106420'>down</span> <span
  m='106670'>here.</span> <span m='106990'>Actually</span> <span
  m='107310'>maybe</span> <span m='107540'>I</span> <span m='107610'>can</span>
  <span m='107760'>alternate</span> <span m='108280'>color.</span> <span
  m='109250'>You'd be</span> <span m='109400'>able</span> <span
  m='109520'>to</span> <span m='109600'>see</span> <span m='109800'>them</span>
  <span m='109950'>a</span> <span m='110020'>little</span> <span
  m='110200'>better.</span> <span m='110620'>The</span> <span
  m='111040'>next</span> <span m='111340'>radius</span> <span
  m='111690'>would</span> <span m='111790'>actually</span> <span
  m='112100'>be</span> <span m='112910'>this</span> <span m='113080'>one</span>
  <span m='113260'>kind of</span> <span m='113470'>right</span> <span
  m='113720'>here</span> <span m='115060'>coming</span> <span
  m='115470'>around</span> <span m='115770'>that</span> <span
  m='115990'>way,</span> <span m='117000'>going</span> <span
  m='117270'>down,</span> <span m='117710'>so it</span> <span
  m='117880'>sticks</span> <span m='118220'>out</span> <span m='118410'>a</span>
  <span m='118470'>little</span> <span m='118680'>bit</span> <span
  m='119590'>from</span> <span m='119840'>there.</span> <span
  m='120205'>Let</span> <span m='120570'>me</span> <span m='120730'>just</span>
  <span m='120940'>kind</span> <span m='121080'>of</span> <span
  m='121540'>shade</span> <span m='121800'>that</span> <span
  m='122070'>lightly.</span> <span m='123270'>And</span> <span
  m='123380'>the</span> <span m='123460'>next</span> <span m='123770'>one</span>
  <span m='123980'>is</span> <span m='124090'>using</span> <span
  m='124470'>this</span> <span m='125920'>cylinder.</span> <span
  m='126470'>So</span> <span m='126640'>that's</span> <span
  m='126840'>our</span> <span m='126940'>diameter</span> <span
  m='127470'>here.</span> <span m='130210'>And</span> <span
  m='130890'>then</span> <span m='130990'>the</span> <span
  m='131080'>last</span> <span m='131410'>one--</span> <span
  m='131570'>well,</span> <span m='131720'>that</span> <span
  m='131880'>doesn't</span> <span m='132150'>look</span> <span
  m='132320'>very</span> <span m='132590'>even.</span> <span
  m='132990'>But</span> <span m='133340'>we'll</span> <span m='134040'>just
  say</span> <span m='134790'>that</span> <span m='134960'>there</span> <span
  m='135110'>are</span> <span m='135210'>four.</span> <span m='135570'>To</span>
  <span m='135710'>keep</span> <span m='135930'>it</span> <span
  m='136120'>with</span> <span m='136320'>four,</span> <span m='136680'>I'll
  say</span> <span m='136950'>the</span> <span m='137040'>last</span> <span
  m='137390'>one</span> <span m='137950'>is</span> <span
  m='138110'>starting</span> <span m='138420'>right</span> <span
  m='138610'>here.</span> <span m='140590'>So</span> <span m='140700'>I</span>
  <span m='140730'>don't</span> <span m='140890'>have</span> <span
  m='141000'>to</span> <span m='141080'>draw</span> <span m='141350'>any
  more</span> <span m='141640'>pictures.</span> <span m='142840'>And</span>
  <span m='142920'>the</span> <span m='142990'>last</span> <span
  m='143280'>one</span> <span m='143410'>is</span> <span m='144450'>that</span>
  <span m='144830'>cylinder.</span> </p><p><span m='146780'>So</span> <span
  m='146980'>there are four</span> <span m='147480'>cylinders</span> <span
  m='148020'>here.</span> <span m='148430'>This one</span> <span
  m='148840'>comes</span> <span m='149090'>around</span> <span
  m='149360'>behind.</span> <span m='150360'>There</span> <span m='150530'>are
  four</span> <span m='150780'>cylinders</span> <span m='151260'>here.</span>
  <span m='151510'>There's</span> <span m='151710'>the</span> <span
  m='151810'>blue</span> <span m='152000'>one</span> <span
  m='152160'>here,</span> <span m='152450'>a white</span> <span
  m='152700'>one,</span> <span m='152940'>a red</span> <span
  m='153200'>one</span> <span m='153380'>and another</span> <span
  m='153770'>blue</span> <span m='153970'>one.</span> <span
  m='154580'>And</span> <span m='154850'>I</span> <span m='154900'>can</span>
  <span m='155070'>actually</span> <span m='155400'>estimate</span> <span
  m='155920'>the</span> <span m='156010'>volume</span> <span m='157340'>of
  this</span> <span m='157500'>paraboloid</span> <span m='157970'>by</span>
  <span m='158080'>finding</span> <span m='158380'>the</span> <span
  m='158460'>volume</span> <span m='158740'>of</span> <span
  m='158840'>these</span> <span m='158970'>cylinders.</span> <span
  m='159900'>So</span> <span m='160070'>we</span> <span m='160160'>have</span>
  <span m='160300'>to</span> <span m='160410'>understand</span> <span
  m='160950'>how</span> <span m='161060'>to</span> <span m='161130'>find</span>
  <span m='161340'>the</span> <span m='161400'>volume</span> <span
  m='161750'>of</span> <span m='161840'>the</span> <span
  m='161940'>cylinders.</span> <span m='162840'>And</span> <span
  m='163020'>then</span> <span m='163140'>what</span> <span
  m='163260'>we'd</span> <span m='163400'>like</span> <span m='163570'>to</span>
  <span m='163670'>do</span> <span m='163850'>is</span> <span
  m='163970'>to</span> <span m='164060'>get</span> <span
  m='164230'>better</span> <span m='164470'>approximations,</span> <span
  m='165190'>we're</span> <span m='165320'>going</span> <span
  m='165490'>to</span> <span m='165550'>make</span> <span
  m='165710'>these</span> <span m='165820'>cylinders</span> <span
  m='166920'>flatter.</span> <span m='167570'>So</span> <span
  m='167680'>we're</span> <span m='167770'>going</span> <span
  m='167940'>to</span> <span m='168020'>make</span> <span m='168210'>them</span>
  <span m='168330'>not</span> <span m='168540'>as</span> <span
  m='168650'>tall.</span> <span m='169670'>And</span> <span
  m='169800'>then</span> <span m='169900'>as</span> <span m='170010'>they</span>
  <span m='170100'>get</span> <span m='170620'>flatter</span> <span
  m='171040'>and flatter</span> <span m='171305'>and</span> <span
  m='171570'>flatter,</span> <span m='172070'>we're</span> <span
  m='172190'>going</span> <span m='172400'>to</span> <span m='172510'>get</span>
  <span m='172720'>better</span> <span m='172960'>and</span> <span
  m='173050'>better</span> <span m='173260'>estimates</span> <span
  m='173690'>of</span> <span m='173780'>the</span> <span
  m='173870'>paraboloid's</span> <span m='174500'>volume.</span> <span
  m='175230'>And</span> <span m='175520'>then</span> <span m='175670'>in</span>
  <span m='175760'>the</span> <span m='175850'>limit,</span> <span
  m='176230'>we</span> <span m='176330'>will</span> <span m='176510'>get</span>
  <span m='176750'>the</span> <span m='176850'>volume</span> <span
  m='177140'>of</span> <span m='177240'>the</span> <span
  m='177320'>paraboloid.</span> </p><p><span m='178110'>So</span> <span
  m='178280'>this</span> <span m='178450'>again</span> <span
  m='178710'>should</span> <span m='178880'>remind</span> <span
  m='179250'>you,</span> <span m='179350'>this</span> <span
  m='179450'>sounds</span> <span m='179730'>a</span> <span m='179790'>lot</span>
  <span m='180040'>like</span> <span m='181090'>Riemann</span> <span
  m='181530'>sums.</span> <span m='181770'>What</span> <span
  m='181860'>we've</span> <span m='181980'>been</span> <span m='182100'>doing
  with</span> <span m='182350'>Riemann</span> <span m='182500'>sums.</span>
  <span m='183010'>You're</span> <span m='183590'>adding</span> <span
  m='183970'>up--</span> <span m='184110'>you're</span> <span
  m='184220'>estimating</span> <span m='184790'>area</span> <span
  m='185070'>under</span> <span m='185240'>the</span> <span
  m='185340'>curve,</span> <span m='185650'>in</span> <span
  m='185760'>the</span> <span m='185850'>case</span> <span
  m='186100'>that</span> <span m='186220'>you've</span> <span
  m='186310'>seen</span> <span m='186510'>mostly</span> <span
  m='187360'>in</span> <span m='187500'>class.</span> <span
  m='187830'>But</span> <span m='187960'>maybe</span> <span
  m='188160'>this</span> <span m='188270'>reminds</span> <span m='188580'>you
  of</span> <span m='188680'>the</span> <span m='188780'>volume</span> <span
  m='189000'>of the</span> <span m='189130'>pyramid</span> <span
  m='190020'>problem</span> <span m='190270'>that</span> <span
  m='190380'>you</span> <span m='190480'>saw</span> <span m='190660'>on</span>
  <span m='190760'>the</span> <span m='190830'>lecture</span> <span
  m='191130'>videos.</span> <span m='191880'>So</span> <span
  m='192040'>it's</span> <span m='192100'>very</span> <span
  m='192370'>similar</span> <span m='192730'>to</span> <span
  m='192870'>that</span> <span m='193130'>idea.</span> </p><p><span
  m='195240'>Now</span> <span m='195430'>let's</span> <span
  m='195680'>figure</span> <span m='196030'>out</span> <span
  m='196250'>how</span> <span m='196410'>we</span> <span m='196510'>can</span>
  <span m='196690'>write</span> <span m='197420'>this</span> <span
  m='198355'>sum</span> <span m='198750'>of</span> <span m='198990'>these</span>
  <span m='199240'>four</span> <span m='199500'>cylinders</span> <span
  m='200580'>in</span> <span m='200860'>terms</span> <span m='201310'>of</span>
  <span m='202000'>y.</span> <span m='203270'>So</span> <span
  m='203440'>what</span> <span m='203550'>do</span> <span m='203610'>we</span>
  <span m='203700'>need</span> <span m='203830'>to</span> <span
  m='203910'>do?</span> <span m='204250'>Well,</span> <span
  m='204780'>first</span> <span m='205910'>we're</span> <span
  m='206120'>going</span> <span m='206340'>to</span> <span
  m='206470'>designate</span> <span m='207040'>the</span> <span
  m='207130'>height</span> <span m='207520'>of</span> <span
  m='207660'>the</span> <span m='207790'>cylinder</span> <span
  m='208380'>as</span> <span m='208650'>delta</span> <span m='209080'>y.</span>
  <span m='209860'>That's</span> <span m='210100'>the</span> <span
  m='210200'>change</span> <span m='210630'>in</span> <span m='210770'>y.</span>
  <span m='212080'>That</span> <span m='212240'>does</span> <span
  m='212390'>not</span> <span m='212630'>look</span> <span
  m='212740'>like</span> <span m='212940'>a y.</span> <span m='213360'>Let
  me</span> <span m='213610'>try</span> <span m='213800'>that</span> <span
  m='213970'>again.</span> <span m='215230'>Delta</span> <span m='215790'>y.
  OK.</span> <span m='218270'>So</span> <span m='218480'>each</span> <span
  m='218720'>height--</span> <span m='218990'>and</span> <span
  m='219760'>even</span> <span m='220030'>though it</span> <span
  m='220130'>doesn't</span> <span m='220470'>look</span> <span
  m='220610'>like</span> <span m='220840'>it,</span> <span
  m='221010'>we're</span> <span m='221120'>going</span> <span
  m='221310'>to</span> <span m='221400'>say</span> <span m='221710'>that</span>
  <span m='221950'>they're</span> <span m='222350'>evenly</span> <span
  m='222880'>divided.</span> <span m='223420'>So</span> <span
  m='223530'>let's</span> <span m='223690'>make,</span> <span
  m='223980'>in</span> <span m='224130'>your</span> <span m='224250'>mind</span>
  <span m='224600'>this</span> <span m='224730'>one</span> <span
  m='224870'>should</span> <span m='225000'>be</span> <span m='225100'>a</span>
  <span m='225140'>bit</span> <span m='225360'>bigger</span> <span
  m='225760'>and</span> <span m='225860'>this</span> <span m='226000'>one</span>
  <span m='226140'>should</span> <span m='226260'>be</span> <span m='226360'>a
  bit</span> <span m='226570'>smaller.</span> <span m='227270'>So</span> <span
  m='227440'>delta</span> <span m='227750'>y</span> <span m='228030'>is</span>
  <span m='228130'>going</span> <span m='228300'>to</span> <span m='228360'>be
  a</span> <span m='228490'>constant.</span> </p><p><span m='230220'>And</span>
  <span m='230440'>then</span> <span m='230720'>I</span> <span
  m='230780'>have</span> <span m='230950'>to</span> <span
  m='231050'>figure</span> <span m='231440'>out</span> <span
  m='232210'>the</span> <span m='232380'>radius. Right?</span> <span
  m='234560'>Well,</span> <span m='234900'>we</span> <span
  m='235030'>know</span> <span m='235280'>that</span> <span m='236100'>at</span>
  <span m='236290'>height</span> <span m='236630'>y</span> <span
  m='238380'>the</span> <span m='239080'>radius</span> <span
  m='239400'>squared</span> <span m='239800'>is</span> <span
  m='239920'>height</span> <span m='240180'>y. Right?</span> <span
  m='241190'>r</span> <span m='241410'>squared</span> <span
  m='242030'>equals</span> <span m='242440'>h.</span> <span m='243500'>So</span>
  <span m='243710'>what</span> <span m='243820'>I</span> <span
  m='243860'>actually</span> <span m='244300'>need is</span> <span
  m='244700'>that</span> <span m='244860'>at</span> <span m='246150'>height h,
  or at height</span> <span m='247770'>y,</span> <span m='248220'>the</span>
  <span m='248370'>radius</span> <span m='248940'>is</span> <span
  m='249220'>square</span> <span m='249510'>root</span> <span m='249830'>y.
  Right?</span> <span m='252240'>So</span> <span m='252450'>at</span> <span
  m='252550'>height</span> <span m='252810'>y</span> <span
  m='255650'>radius</span> <span m='258070'>is</span> <span
  m='258300'>the</span> <span m='258390'>square</span> <span
  m='258680'>root</span> <span m='258880'>of</span> <span m='259000'>y.</span>
  </p><p><span m='260520'>So</span> <span m='260690'>when</span> <span
  m='260810'>I</span> <span m='260880'>want</span> <span m='260990'>to</span>
  <span m='261030'>look</span> <span m='261200'>at</span> <span
  m='261270'>the</span> <span m='261360'>volume</span> <span
  m='261770'>of</span> <span m='261870'>the</span> <span
  m='261980'>cylinder</span> <span m='262420'>at</span> <span
  m='262550'>height</span> <span m='262830'>y--</span> <span
  m='264080'>I'm</span> <span m='264310'>using</span> <span
  m='264760'>the</span> <span m='265220'>upper</span> <span
  m='265490'>value</span> <span m='265830'>here--</span> <span
  m='266120'>so</span> <span m='266330'>at</span> <span m='266430'>height</span>
  <span m='266610'>y,</span> <span m='266840'>what</span> <span m='267030'>is
  the</span> <span m='267120'>volume</span> <span m='267430'>of</span> <span
  m='267520'>the</span> <span m='267620'>cylinder?</span> <span
  m='270140'>We</span> <span m='270310'>know</span> <span m='270430'>in</span>
  <span m='270530'>general</span> <span m='270860'>the</span> <span
  m='270950'>volume is</span> <span m='271320'>equal</span> <span
  m='271500'>to</span> <span m='271570'>pi</span> <span m='271900'>r</span>
  <span m='272100'>squared</span> <span m='272510'>h.</span> <span
  m='274040'>And</span> <span m='274230'>so,</span> <span m='275130'>the</span>
  <span m='275280'>height</span> <span m='275590'>here</span> <span
  m='276050'>of</span> <span m='276170'>the</span> <span
  m='276290'>cylinder--</span> <span m='276630'>this</span> <span
  m='276780'>is</span> <span m='276870'>not</span> <span m='277090'>the</span>
  <span m='277160'>height</span> <span m='277840'>on</span> <span
  m='278050'>the</span> <span m='278110'>whole</span> <span
  m='278290'>thing;</span> <span m='278560'>this</span> <span
  m='278690'>is</span> <span m='278790'>the</span> <span
  m='278890'>height</span> <span m='279070'>of</span> <span
  m='279150'>that</span> <span m='279320'>individual</span> <span
  m='279790'>cylinder--</span> <span m='280830'>the</span> <span
  m='280930'>height</span> <span m='281130'>of</span> <span
  m='281200'>the</span> <span m='281270'>cylinder is</span> <span
  m='281740'>delta</span> <span m='282030'>y.</span> <span m='282530'>And</span>
  <span m='283100'>r</span> <span m='283460'>is</span> <span
  m='283620'>square</span> <span m='283890'>root</span> <span
  m='284080'>y.</span> <span m='284350'>So</span> <span m='284520'>r</span>
  <span m='284730'>squared is</span> <span m='285130'>just</span> <span
  m='285330'>y.</span> </p><p><span m='285530'>So</span> <span
  m='285680'>the</span> <span m='285780'>volume</span> <span
  m='286190'>of</span> <span m='286300'>a</span> <span m='286360'>single</span>
  <span m='286710'>cylinder</span> <span m='287460'>is</span> <span
  m='287700'>pi</span> <span m='288330'>y</span> <span m='289290'>delta</span>
  <span m='289580'>y.</span> <span m='291270'>So</span> <span
  m='291500'>again,</span> <span m='291740'>we</span> <span
  m='291840'>find</span> <span m='292110'>the</span> <span
  m='292170'>volume</span> <span m='292460'>of</span> <span
  m='292560'>this</span> <span m='292780'>cylinder</span> <span
  m='293070'>by</span> <span m='293180'>taking</span> <span
  m='293460'>the</span> <span m='293720'>y-value</span> <span
  m='294040'>here,</span> <span m='294840'>multiplying</span> <span
  m='295230'>it</span> <span m='295310'>by</span> <span m='295400'>pi</span>
  <span m='295800'>and</span> <span m='295930'>then</span> <span
  m='296050'>multiplying it</span> <span m='296320'>by</span> <span
  m='296420'>delta</span> <span m='296720'>y.</span> <span m='297380'>And</span>
  <span m='297580'>I</span> <span m='297640'>do</span> <span
  m='297820'>that</span> <span m='298090'>for</span> <span
  m='298210'>this</span> <span m='298420'>one,</span> <span
  m='298840'>this</span> <span m='299020'>one,</span> <span
  m='299230'>this</span> <span m='299390'>one,</span> <span
  m='299490'>and</span> <span m='299580'>this</span> <span
  m='299720'>one.</span> <span m='299850'>And</span> <span
  m='299960'>then</span> <span m='300070'>I</span> <span m='300140'>add</span>
  <span m='300370'>them</span> <span m='300510'>up.</span> <span m='300840'>And
  that's</span> <span m='301120'>my</span> <span m='301270'>estimate</span>
  <span m='301610'>of</span> <span m='301700'>the</span> <span
  m='301780'>volume</span> <span m='302740'>of</span> <span
  m='303030'>the</span> <span m='303470'>whole</span> <span
  m='303870'>paraboloid.</span> </p><p><span m='305530'>So</span> <span
  m='305710'>now</span> <span m='305890'>what</span> <span m='306040'>can</span>
  <span m='306160'>I</span> <span m='306220'>do?</span> <span
  m='306420'>Well,</span> <span m='306600'>again,</span> <span
  m='306830'>I</span> <span m='306880'>mentioned</span> <span
  m='307410'>we</span> <span m='307560'>can</span> <span
  m='307830'>divide</span> <span m='308140'>into</span> <span
  m='308330'>more</span> <span m='308510'>subintervals.</span> <span
  m='309310'>And</span> <span m='309450'>let's</span> <span
  m='309620'>say</span> <span m='309780'>we</span> <span m='309920'>only</span>
  <span m='310130'>divide--</span> <span m='310440'>let's</span> <span
  m='310560'>say</span> <span m='310650'>we</span> <span
  m='310760'>divide</span> <span m='311130'>it into</span> <span
  m='311330'>n</span> <span m='311680'>subintervals. right?</span> <span
  m='313210'>What</span> <span m='313360'>would</span> <span
  m='313480'>this</span> <span m='313660'>look</span> <span
  m='313820'>like?</span> <span m='314030'>I'm</span> <span m='314180'>going
  to</span> <span m='314330'>be</span> <span m='314420'>taking</span> <span
  m='314740'>a</span> <span m='314810'>sum</span> <span m='315230'>to</span>
  <span m='315360'>find</span> <span m='315610'>the</span> <span
  m='315670'>volume</span> <span m='315980'>of</span> <span
  m='316080'>the</span> <span m='316150'>whole</span> <span
  m='316430'>thing.</span> <span m='317280'>I'm going</span> <span
  m='317390'>to</span> <span m='317490'>take</span> <span m='317700'>a</span>
  <span m='317800'>sum</span> <span m='318090'>from</span> <span
  m='318250'>i</span> <span m='318570'>equals</span> <span m='318740'>1 to
  n</span> <span m='320520'>of</span> <span m='320690'>these</span> <span
  m='320930'>kinds</span> <span m='321180'>of</span> <span
  m='321270'>things.</span> <span m='322190'>Pi</span> <span m='322950'>y</span>
  <span m='323270'>sub i</span> <span m='324560'>delta</span> <span
  m='324820'>y.</span> <span m='326200'>So</span> <span m='326620'>each</span>
  <span m='326850'>y</span> <span m='327110'>sub</span> <span
  m='327250'>i</span> <span m='327520'>represents</span> <span
  m='328550'>the</span> <span m='328920'>y-value</span> <span
  m='329390'>at</span> <span m='329600'>the</span> <span
  m='329690'>different</span> <span m='330030'>height</span> <span
  m='330720'>where</span> <span m='330930'>I'm</span> <span
  m='331520'>taking</span> <span m='331880'>my</span> <span
  m='332140'>cylinder.</span> </p><p><span m='333930'>Now</span> <span
  m='334060'>delta</span> <span m='334430'>y,</span> <span m='334710'>in</span>
  <span m='334830'>this</span> <span m='334990'>case,</span> <span
  m='335330'>if</span> <span m='335420'>I</span> <span m='335500'>divide</span>
  <span m='335830'>into</span> <span m='336030'>n</span> <span
  m='336200'>equal</span> <span m='336440'>subintervals,</span> <span
  m='337700'>delta</span> <span m='337990'>y</span> <span m='338360'>is</span>
  <span m='338510'>H</span> <span m='338890'>divided</span> <span
  m='339210'>by</span> <span m='339370'>n.</span> <span m='340470'>And</span>
  <span m='340740'>then</span> <span m='340900'>you</span> <span
  m='341020'>can</span> <span m='341160'>actually</span> <span
  m='341500'>figure</span> <span m='341890'>out</span> <span
  m='342060'>the</span> <span m='342150'>y</span> <span m='342470'>sub
  i's</span> <span m='342840'>from</span> <span m='343050'>that.</span> <span
  m='343990'>The</span> <span m='344110'>first</span> <span
  m='344450'>one</span> <span m='344830'>would</span> <span m='345690'>be</span>
  <span m='346040'>H</span> <span m='346300'>over</span> <span
  m='346510'>n.</span> <span m='346790'>The</span> <span
  m='346850'>second</span> <span m='347200'>one</span> <span
  m='347340'>would</span> <span m='347490'>be</span> <span m='348140'>2H</span>
  <span m='348610'>over</span> <span m='348830'>n</span> <span
  m='349230'>and</span> <span m='349660'>so</span> <span m='349860'>on</span>
  <span m='350140'>until</span> <span m='350220'>the</span> <span
  m='350320'>top</span> <span m='350580'>one</span> <span
  m='350700'>would</span> <span m='350820'>be</span> <span m='351420'>H*n</span>
  <span m='351900'>over</span> <span m='352110'>n</span> <span
  m='352330'>and</span> <span m='352420'>you'd</span> <span
  m='352560'>have</span> <span m='352730'>H</span> <span m='353080'>as</span>
  <span m='353180'>the</span> <span m='353290'>top</span> <span
  m='353540'>height.</span> <span m='354800'>So</span> <span
  m='354960'>those</span> <span m='355190'>are</span> <span
  m='355300'>the</span> <span m='355420'>values</span> <span
  m='355760'>that</span> <span m='355880'>we're</span> <span
  m='355980'>ranging</span> <span m='356370'>over.</span> </p><p><span
  m='356680'>And</span> <span m='356930'>now,</span> <span m='357120'>as</span>
  <span m='357260'>we</span> <span m='357670'>let</span> <span
  m='358400'>n</span> <span m='358690'>go</span> <span m='358780'>to</span>
  <span m='358960'>infinity,</span> <span m='361670'>this</span> <span
  m='361880'>is</span> <span m='362010'>our</span> <span
  m='362180'>Riemann</span> <span m='362590'>sum.</span> <span
  m='362730'>This</span> <span m='362860'>is</span> <span
  m='362950'>actually</span> <span m='363280'>going</span> <span
  m='363480'>to</span> <span m='363550'>be</span> <span m='363640'>an</span>
  <span m='363720'>integral.</span> <span m='364570'>Delta</span> <span
  m='364880'>y</span> <span m='365120'>goes</span> <span m='365370'>to</span>
  <span m='365490'>dy.</span> <span m='366170'>And</span> <span
  m='366290'>let's</span> <span m='366460'>look</span> <span
  m='366590'>at</span> <span m='366670'>what</span> <span
  m='366800'>happens.</span> <span m='367690'>So</span> <span
  m='367890'>we</span> <span m='368030'>get</span> <span m='368240'>dy</span>
  <span m='368730'>here.</span> <span m='370050'>We're</span> <span
  m='370380'>going to</span> <span m='370580'>have an</span> <span
  m='370770'>integral.</span> <span m='371150'>And</span> <span
  m='371370'>what</span> <span m='371490'>are</span> <span m='371560'>we</span>
  <span m='371670'>actually</span> <span m='372030'>evaluating?</span> <span
  m='372600'>We're</span> <span m='372730'>evaluating</span> <span
  m='373360'>the</span> <span m='373440'>function</span> <span
  m='373860'>pi</span> <span m='374250'>y</span> <span m='375770'>at</span>
  <span m='376120'>what</span> <span m='376420'>places?</span> <span
  m='378040'>Well,</span> <span m='378800'>as</span> <span
  m='380010'>delta</span> <span m='380420'>y</span> <span m='380590'>goes</span>
  <span m='380880'>to</span> <span m='381000'>0,</span> <span
  m='381890'>the</span> <span m='382040'>first</span> <span
  m='382460'>value</span> <span m='382900'>of</span> <span m='383030'>y</span>
  <span m='383310'>sub</span> <span m='383500'>i</span> <span
  m='383780'>that</span> <span m='383940'>I</span> <span m='384020'>get</span>
  <span m='384680'>is</span> <span m='384880'>pushing</span> <span
  m='385230'>down</span> <span m='385580'>to</span> <span m='385710'>0.</span>
  <span m='387050'>And</span> <span m='387230'>the</span> <span
  m='387300'>last</span> <span m='387650'>value</span> <span
  m='387940'>we</span> <span m='388100'>know</span> <span m='388780'>is</span>
  <span m='388970'>H.</span> <span m='389530'>So</span> <span
  m='389690'>we're</span> <span m='389800'>actually</span> <span
  m='390290'>taking</span> <span m='390590'>an</span> <span
  m='390680'>integral</span> <span m='391500'>from</span> <span
  m='391770'>0</span> <span m='392215'>to</span> <span m='392660'>H</span> <span
  m='393510'>of</span> <span m='393960'>pi*y*dy.</span> </p><p><span
  m='395320'>And</span> <span m='395600'>that</span> <span m='395780'>is</span>
  <span m='395940'>the</span> <span m='396700'>integral</span> <span
  m='397090'>representation</span> <span m='397840'>of</span> <span
  m='397910'>the</span> <span m='398000'>volume</span> <span
  m='398330'>of</span> <span m='398440'>the</span> <span
  m='398540'>paraboloid.</span> <span m='399590'>Now</span> <span
  m='399740'>this</span> <span m='399890'>is</span> <span m='399980'>a</span>
  <span m='400030'>very</span> <span m='400380'>easy</span> <span
  m='400680'>thing</span> <span m='400900'>to</span> <span m='401050'>take
  an</span> <span m='401410'>integral</span> <span m='401710'>on,</span> <span
  m='401940'>so</span> <span m='402050'>you</span> <span m='402130'>could</span>
  <span m='402270'>actually</span> <span m='402560'>evaluate</span> <span
  m='403080'>this</span> <span m='403610'>and</span> <span
  m='403850'>find</span> <span m='404160'>it.</span> <span m='404290'>I</span>
  <span m='404380'>believe</span> <span m='405450'>you'll</span> <span
  m='405560'>get</span> <span m='405730'>something</span> <span
  m='406060'>like</span> <span m='406640'>pi</span> <span m='406950'>y</span>
  <span m='407190'>squared</span> <span m='407540'>over</span> <span
  m='407750'>2</span> <span m='409560'>from</span> <span m='409790'>0</span>
  <span m='410030'>to</span> <span m='410140'>H.</span> <span
  m='410820'>So</span> <span m='410900'>you</span> <span
  m='410990'>should</span> <span m='411130'>get</span> <span
  m='411270'>something</span> <span m='411630'>like</span> <span
  m='412570'>pi</span> <span m='412880'>over</span> <span m='413110'>2</span>
  <span m='414260'>capital</span> <span m='414680'>H</span> <span
  m='414980'>squared.</span> <span m='416550'>You</span> <span
  m='416770'>can</span> <span m='416930'>check</span> <span m='417180'>my</span>
  <span m='417320'>math,</span> <span m='417690'>but</span> <span
  m='417830'>I</span> <span m='417910'>think</span> <span
  m='418150'>that's</span> <span m='418360'>correct.</span> <span
  m='419230'>So</span> <span m='419400'>that</span> <span m='419620'>is</span>
  <span m='419730'>actually</span> <span m='420050'>the</span> <span
  m='420160'>volume</span> <span m='420610'>of</span> <span
  m='420700'>the</span> <span m='420810'>paraboloid</span> <span
  m='421850'>carved</span> <span m='422180'>out</span> <span
  m='422350'>by</span> <span m='422480'>this</span> <span
  m='422700'>particular</span> <span m='423220'>curve,</span> <span
  m='423740'>y</span> <span m='424040'>equals</span> <span m='424180'>x</span>
  <span m='424330'>squared, from, or</span> <span m='426620'>at</span> <span
  m='426820'>height</span> <span m='427110'>capital</span> <span
  m='427580'>H.</span> <span m='428660'>So</span> <span m='428780'>that's</span>
  <span m='428920'>where</span> <span m='429190'>we'll</span> <span
  m='429270'>stop.</span> </p>
embedded_media:
  - uid: 3d95ea8228e7bf9bbee4124b8b21a4b2
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: QLo5dRFEyl8
  - uid: 3ce4ad05805ef8cf1f9dc139d0769723
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/QLo5dRFEyl8/default.jpg'
  - uid: 4fd388a860fc888e65f7f67049ffbfed
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: QLo5dRFEyl8
  - uid: 215d04073b86da736ce0ef9473bfb714
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: QLo5dRFEyl8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-a-definition-of-the-definite-integral-and-first-fundamental-theorem/session-46-riemann-sums/computing-the-volume-of-a-paraboloid/QLo5dRFEyl8.srt
  - uid: 3f20ab5bded6eb7dfe21ecc3f417eabc
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: QLo5dRFEyl8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-a-definition-of-the-definite-integral-and-first-fundamental-theorem/session-46-riemann-sums/computing-the-volume-of-a-paraboloid/QLo5dRFEyl8.pdf
  - uid: 8ba82acd9ebf91d275675a60d0fddb2c
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 395459d938f160f2b19898d6efdfc790
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 9ce0c1d064385433109e472f1eb36e42
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_37_300k.mp4'
  - uid: fdbdd7b14375fe35d5719d8559d3f3d1
    parent_uid: 2be6fe1db7aac6dbf229f8d5bf83dca0
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/computing-volume-paraboloid/id414308064?i=90319185
type: courses
layout: video
---
