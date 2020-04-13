---
title: Volume in Cylindrical Coordinates
uid: 17b91cc556d3528d5d73b7b17fe9b427
parent_uid: 6369fc2c0ed673b1973ba7af526cb70d
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/session-74-triple-integrals-rectangular-and-cylindrical-coordinates/volume-in-cylindrical-coordinates
short_url: volume-in-cylindrical-coordinates
inline_embed_id: 83248549volumeincylindricalcoordinates57719474
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7680'>JOEL LEWIS: Hi.</span> <span m='8150'>Welcome</span> <span
  m='8480'>back</span> <span m='8690'>to</span> <span
  m='8780'>recitation.</span> <span m='9690'>In</span> <span
  m='9860'>lecture,</span> <span m='10450'>you've</span> <span
  m='10670'>been</span> <span m='10790'>learning</span> <span
  m='11060'>about</span> <span m='11300'>triple</span> <span
  m='11600'>integration.</span> <span m='12520'>And</span> <span
  m='12660'>I</span> <span m='12700'>have</span> <span m='12840'>a</span> <span
  m='12900'>problem</span> <span m='13280'>here</span> <span
  m='13530'>for</span> <span m='13680'>you</span> <span m='14100'>on</span>
  <span m='14270'>computing</span> <span m='14740'>a</span> <span
  m='14790'>volume</span> <span m='15330'>of</span> <span m='15450'>a</span>
  <span m='15540'>region</span> <span m='16190'>using</span> <span
  m='16550'>a</span> <span m='16620'>triple</span> <span
  m='16930'>integral.</span> <span m='17830'>So</span> <span
  m='18400'>let's</span> <span m='18740'>look</span> <span m='18920'>at</span>
  <span m='19100'>this.</span> </p><p><span m='19710'>So</span> <span
  m='19870'>I</span> <span m='20000'>have</span> <span m='21160'>a</span> <span
  m='21300'>volume</span> <span m='21800'>and</span> <span m='21915'>I'm</span>
  <span m='22030'>describing</span> <span m='22850'>it</span> <span
  m='22980'>to</span> <span m='23110'>you;</span> <span m='23260'>it's</span>
  <span m='23460'>the</span> <span m='23570'>volume</span> <span
  m='25100'>inside</span> <span m='25590'>the</span> <span
  m='25680'>paraboloid</span> <span m='26860'>z</span> <span
  m='27240'>equals</span> <span m='27630'>x</span> <span
  m='27860'>squared</span> <span m='28190'>plus</span> <span m='28410'>y</span>
  <span m='28650'>squared</span> <span m='29540'>and</span> <span
  m='30060'>bounded</span> <span m='30700'>by</span> <span m='30850'>the</span>
  <span m='31010'>plane</span> <span m='31750'>z</span> <span
  m='32030'>equals</span> <span m='32460'>2y.</span> <span m='33530'>So</span>
  <span m='33750'>I've</span> <span m='33860'>drawn</span> <span
  m='34100'>a</span> <span m='34170'>little</span> <span
  m='34380'>picture</span> <span m='34710'>here</span> <span
  m='34930'>for</span> <span m='35180'>you.</span> <span m='35310'>So</span>
  <span m='36290'>this</span> <span m='36450'>is</span> <span
  m='36590'>the</span> <span m='36680'>paraboloid</span> <span
  m='37400'>here.</span> <span m='38770'>And</span> <span m='38900'>we're</span>
  <span m='39020'>just</span> <span m='39470'>taking</span> <span
  m='39800'>a</span> <span m='39860'>plane</span> <span m='40410'>cut</span>
  <span m='40790'>of</span> <span m='40952'>it.</span> <span
  m='41440'>And</span> <span m='41580'>so</span> <span m='41690'>this</span>
  <span m='41830'>is</span> <span m='41900'>going</span> <span
  m='41990'>to</span> <span m='42080'>slice</span> <span m='42660'>off</span>
  <span m='43370'>some</span> <span m='43650'>chunk</span> <span
  m='44420'>of</span> <span m='44580'>that</span> <span
  m='44800'>paraboloid,</span> <span m='45730'>and</span> <span
  m='45880'>what</span> <span m='46000'>I</span> <span m='46050'>want</span>
  <span m='46155'>to</span> <span m='46260'>know</span> <span
  m='46430'>is,</span> <span m='46970'>what's</span> <span m='47170'>the</span>
  <span m='47260'>volume</span> <span m='48100'>of</span> <span
  m='48280'>that</span> <span m='48490'>piece</span> <span m='48800'>that</span>
  <span m='48910'>gets</span> <span m='49110'>cut</span> <span
  m='49310'>off</span> <span m='49560'>by</span> <span m='49710'>that</span>
  <span m='49890'>plane</span> <span m='50330'>there?</span> <span
  m='50920'>So</span> <span m='51470'>below</span> <span m='51760'>the</span>
  <span m='51870'>plane</span> <span m='52270'>and</span> <span
  m='52430'>above</span> <span m='52730'>the</span> <span
  m='52850'>paraboloid.</span> </p><p><span m='54730'>So,</span> <span
  m='55330'>why</span> <span m='55580'>don't</span> <span m='55665'>you</span>
  <span m='55750'>pause</span> <span m='56060'>the</span> <span
  m='56140'>video,</span> <span m='56970'>take</span> <span
  m='57220'>some</span> <span m='57340'>time,</span> <span m='57780'>work</span>
  <span m='58030'>out</span> <span m='58210'>this</span> <span
  m='58360'>problem,</span> <span m='58770'>come</span> <span
  m='58970'>back,</span> <span m='59320'>and</span> <span m='59470'>we</span>
  <span m='59590'>can</span> <span m='59720'>work</span> <span
  m='59900'>on</span> <span m='60010'>it</span> <span m='60100'>together.</span>
  </p><p><span m='68742'>I</span> <span m='69240'>hope</span> <span
  m='69380'>you</span> <span m='69520'>had</span> <span m='69780'>some</span>
  <span m='69940'>luck</span> <span m='70200'>with</span> <span
  m='70340'>this</span> <span m='70550'>problem.</span> <span m='70940'>I</span>
  <span m='71020'>think</span> <span m='71230'>it's</span> <span
  m='71360'>a</span> <span m='71440'>bit</span> <span m='71590'>of</span> <span
  m='71670'>a</span> <span m='71730'>tricky</span> <span m='72060'>one,</span>
  <span m='72330'>so</span> <span m='72490'>let's</span> <span
  m='72730'>start</span> <span m='73020'>to</span> <span m='73120'>work</span>
  <span m='73350'>through</span> <span m='73570'>it</span> <span
  m='73710'>together.</span> </p><p><span m='75140'>So</span> <span
  m='76450'>sometimes</span> <span m='77610'>you</span> <span
  m='77760'>have</span> <span m='77900'>a</span> <span m='77960'>problem</span>
  <span m='78440'>with</span> <span m='78560'>a</span> <span
  m='78610'>triple</span> <span m='78940'>integral.</span> <span
  m='80050'>And</span> <span m='80730'>you</span> <span m='80850'>need</span>
  <span m='81030'>to</span> <span m='81140'>set</span> <span m='81390'>up</span>
  <span m='81550'>your</span> <span m='81650'>bounds</span> <span
  m='82760'>of</span> <span m='82940'>integration.</span> <span
  m='83480'>And</span> <span m='83570'>sometimes</span> <span
  m='84100'>you</span> <span m='84180'>can</span> <span m='84350'>look</span>
  <span m='84600'>at</span> <span m='84780'>it</span> <span m='84910'>and</span>
  <span m='85040'>it's</span> <span m='85150'>just</span> <span
  m='85400'>clear</span> <span m='85690'>what</span> <span m='85930'>they</span>
  <span m='86070'>are.</span> <span m='86510'>If</span> <span
  m='86620'>you're</span> <span m='86860'>integrating</span> <span
  m='87330'>over</span> <span m='87560'>a</span> <span m='87610'>cube,</span>
  <span m='88580'>life</span> <span m='88860'>is</span> <span
  m='88990'>really</span> <span m='89390'>easy.</span> </p><p><span
  m='90560'>But</span> <span m='90760'>in</span> <span m='90830'>this</span>
  <span m='91020'>case,</span> <span m='91870'>this</span> <span
  m='92090'>region</span> <span m='92510'>that</span> <span m='92610'>we</span>
  <span m='92730'>want</span> <span m='92920'>to</span> <span
  m='92980'>integrate</span> <span m='93350'>over</span> <span
  m='93600'>is</span> <span m='93770'>kind</span> <span m='94070'>of</span>
  <span m='94310'>more</span> <span m='94640'>complicated</span> <span
  m='95030'>to</span> <span m='95420'>understand.</span> <span
  m='96690'>Right?</span> <span m='97140'>So</span> <span m='98530'>it's</span>
  <span m='98670'>easy</span> <span m='99070'>to</span> <span
  m='99180'>see--</span> <span m='99650'>well,</span> <span
  m='99860'>relatively</span> <span m='100430'>easy</span> <span
  m='100660'>to</span> <span m='100750'>see--</span> <span
  m='100890'>what</span> <span m='101070'>the</span> <span
  m='101160'>bounds</span> <span m='101630'>on</span> <span m='101930'>z</span>
  <span m='102373'>are.</span> </p><p><span m='103260'>So</span> <span
  m='103970'>let</span> <span m='104100'>me</span> <span m='104210'>draw</span>
  <span m='104500'>a</span> <span m='104570'>couple</span> <span
  m='104930'>of</span> <span m='107450'>two-dimensional</span> <span
  m='108180'>pictures.</span> <span m='108500'>So</span> <span
  m='108860'>I'm</span> <span m='109070'>going</span> <span m='109170'>to</span>
  <span m='109260'>draw</span> <span m='110180'>the</span> <span
  m='110320'>yz-plane</span> <span m='111450'>cross</span> <span
  m='111890'>section</span> <span m='112890'>here.</span> <span
  m='114450'>So</span> <span m='114620'>in</span> <span m='114710'>the</span>
  <span m='114790'>yz-plane</span> <span m='115730'>cross</span> <span
  m='115890'>section,</span> <span m='116050'>this</span> <span
  m='116380'>paraboloid</span> <span m='117670'>just</span> <span
  m='119680'>becomes</span> <span m='120060'>a</span> <span
  m='120130'>parabola.</span> </p><p><span m='120680'>So</span> <span
  m='120970'>that</span> <span m='121160'>becomes</span> <span
  m='121540'>the</span> <span m='121650'>parabola</span> <span
  m='122670'>z</span> <span m='123770'>equals</span> <span m='124240'>y</span>
  <span m='124780'>squared,</span> <span m='125720'>which</span> <span
  m='126020'>is</span> <span m='126810'>a</span> <span m='126920'>plane</span>
  <span m='127310'>section</span> <span m='127840'>of</span> <span
  m='127970'>the</span> <span m='128070'>paraboloid</span> <span
  m='128480'>z</span> <span m='128910'>equals</span> <span m='129325'>x</span>
  <span m='129740'>squared</span> <span m='129985'>plus</span> <span
  m='130230'>y</span> <span m='130440'>squared.</span> <span
  m='131710'>And</span> <span m='131990'>this</span> <span
  m='132490'>plane</span> <span m='133410'>z</span> <span
  m='133730'>equals</span> <span m='134100'>2y</span> <span
  m='134980'>becomes</span> <span m='135450'>the</span> <span
  m='135570'>line</span> <span m='136900'>z</span> <span
  m='137070'>equals</span> <span m='138740'>2y.</span> <span
  m='141250'>And</span> <span m='141460'>this</span> <span
  m='141620'>little</span> <span m='141890'>sliver</span> <span
  m='142400'>is</span> <span m='142550'>a</span> <span m='142620'>plane</span>
  <span m='143020'>section</span> <span m='143460'>of</span> <span
  m='143580'>the</span> <span m='143680'>region</span> <span
  m='144610'>in</span> <span m='144810'>question.</span> <span
  m='145940'>So</span> <span m='146070'>we</span> <span m='146190'>see</span>
  <span m='146440'>that</span> <span m='146660'>z</span> <span
  m='146860'>is</span> <span m='147030'>going</span> <span
  m='147260'>from</span> <span m='147490'>the</span> <span
  m='147580'>paraboloid</span> <span m='148240'>to</span> <span
  m='148430'>the</span> <span m='148540'>plane.</span> <span
  m='149970'>And</span> <span m='150170'>over</span> <span
  m='150350'>here,</span> <span m='150580'>we</span> <span m='150710'>see</span>
  <span m='150850'>that</span> <span m='150950'>z</span> <span
  m='151220'>is</span> <span m='151380'>going</span> <span
  m='151650'>from</span> <span m='151840'>the</span> <span
  m='151940'>paraboloid</span> <span m='152500'>to</span> <span
  m='152610'>the</span> <span m='152720'>plane.</span> </p><p><span
  m='153250'>But</span> <span m='153470'>what</span> <span m='153620'>we</span>
  <span m='154010'>really</span> <span m='154320'>need</span> <span
  m='154595'>to</span> <span m='154870'>understand</span> <span
  m='155630'>then</span> <span m='156000'>is</span> <span m='156220'>what</span>
  <span m='156350'>the</span> <span m='156430'>relationship</span> <span
  m='156930'>between</span> <span m='157240'>x</span> <span
  m='157550'>and</span> <span m='157690'>y</span> <span m='158460'>is.</span>
  <span m='159020'>So</span> <span m='159180'>what</span> <span
  m='159460'>is</span> <span m='159640'>the</span> <span
  m='159740'>shadow</span> <span m='160360'>of</span> <span
  m='160500'>this</span> <span m='160720'>region?</span> <span
  m='161490'>How</span> <span m='161850'>are</span> <span m='162040'>x</span>
  <span m='162250'>and</span> <span m='162370'>y</span> <span
  m='162530'>related</span> <span m='162910'>to</span> <span
  m='163000'>each</span> <span m='163120'>other?</span> <span
  m='163250'>How</span> <span m='163420'>can</span> <span m='163540'>we</span>
  <span m='163650'>bound</span> <span m='164135'>x</span> <span
  m='164620'>in</span> <span m='164720'>terms</span> <span m='164980'>of</span>
  <span m='165050'>y</span> <span m='165280'>or</span> <span m='165380'>y</span>
  <span m='165610'>in</span> <span m='165700'>terms</span> <span
  m='165920'>of</span> <span m='166000'>x?</span> <span m='166250'>Or</span>
  <span m='167190'>should</span> <span m='167360'>we</span> <span
  m='167460'>use</span> <span m='167640'>cylindrical</span> <span
  m='168130'>coordinates</span> <span m='168590'>or</span> <span
  m='168720'>what?</span> </p><p><span m='169790'>And</span> <span
  m='169960'>so</span> <span m='170060'>in</span> <span m='170130'>order</span>
  <span m='170410'>to</span> <span m='170590'>that</span> <span
  m='170790'>what</span> <span m='170920'>we</span> <span m='171020'>need</span>
  <span m='171190'>to</span> <span m='171250'>do</span> <span
  m='171380'>is</span> <span m='171510'>we</span> <span m='171580'>need</span>
  <span m='171710'>to</span> <span m='171790'>figure</span> <span
  m='172050'>out--</span> <span m='172760'>when</span> <span
  m='172950'>you</span> <span m='173040'>project</span> <span
  m='173720'>this</span> <span m='173860'>region</span> <span
  m='174250'>down,</span> <span m='174870'>when</span> <span
  m='175100'>you</span> <span m='175180'>flatten</span> <span
  m='175600'>it</span> <span m='175780'>along</span> <span m='176200'>z,</span>
  <span m='176720'>so</span> <span m='177130'>you're</span> <span
  m='177300'>disregarding</span> <span m='177950'>z</span> <span
  m='178110'>now,</span> <span m='178260'>and</span> <span
  m='178350'>then</span> <span m='178440'>you're</span> <span
  m='178550'>just</span> <span m='178730'>looking</span> <span
  m='178990'>at</span> <span m='179080'>its</span> <span
  m='179220'>shadow,</span> <span m='179680'>its</span> <span
  m='179950'>footprint</span> <span m='181040'>in</span> <span
  m='181220'>the</span> <span m='181560'>xy-plane--</span> <span
  m='183400'>you</span> <span m='183510'>want</span> <span m='183640'>to</span>
  <span m='183700'>figure</span> <span m='183990'>out,</span> <span
  m='184720'>what</span> <span m='184920'>is</span> <span m='185050'>that</span>
  <span m='185250'>region?</span> <span m='185540'>What</span> <span
  m='185670'>does</span> <span m='185800'>it</span> <span m='185930'>look</span>
  <span m='186120'>like?</span> </p><p><span m='186340'>So</span> <span
  m='187080'>somehow</span> <span m='188190'>we'll</span> <span
  m='188690'>project</span> <span m='188955'>down</span> <span
  m='189220'>and</span> <span m='189500'>there</span> <span
  m='189575'>will</span> <span m='189650'>be</span> <span m='189820'>some</span>
  <span m='190110'>region</span> <span m='191460'>R</span> <span
  m='193670'>down</span> <span m='194000'>here.</span> <span
  m='194900'>So</span> <span m='195100'>I'll</span> <span m='195210'>call</span>
  <span m='195440'>this</span> <span m='195640'>region</span> <span
  m='196710'>R.</span> <span m='201150'>And</span> <span m='201330'>that</span>
  <span m='201540'>region</span> <span m='201850'>will</span> <span
  m='201940'>be</span> <span m='202040'>the</span> <span
  m='202160'>projection</span> <span m='203540'>of</span> <span
  m='203750'>this</span> <span m='204500'>solid</span> <span
  m='205020'>region</span> <span m='205430'>down.</span> <span
  m='206020'>And</span> <span m='206210'>it</span> <span m='206310'>has</span>
  <span m='206540'>some</span> <span m='206780'>boundary</span> <span
  m='207280'>curve--</span> <span m='208740'>C,</span> <span
  m='209310'>say--</span> <span m='209760'>the</span> <span
  m='209910'>boundary</span> <span m='210340'>curve</span> <span
  m='210760'>of</span> <span m='211150'>the</span> <span
  m='211250'>region</span> <span m='211633'>R.</span> <span
  m='213060'>Just</span> <span m='213660'>in</span> <span m='213720'>case</span>
  <span m='213980'>we</span> <span m='214080'>need</span> <span
  m='214200'>to</span> <span m='214290'>refer</span> <span m='214600'>to</span>
  <span m='214680'>them</span> <span m='214780'>later,</span> <span
  m='215120'>it's</span> <span m='215260'>good</span> <span m='215430'>to</span>
  <span m='215520'>give</span> <span m='215650'>them</span> <span
  m='215750'>letters</span> <span m='216570'>so</span> <span
  m='217050'>that</span> <span m='217230'>they</span> <span
  m='217400'>have</span> <span m='217610'>names.</span> </p><p><span
  m='218410'>So</span> <span m='218810'>what</span> <span m='219050'>we</span>
  <span m='219160'>need</span> <span m='219330'>to</span> <span
  m='219420'>figure</span> <span m='219720'>out</span> <span
  m='219910'>now</span> <span m='220130'>is</span> <span m='220240'>what</span>
  <span m='220470'>is</span> <span m='220600'>this</span> <span
  m='220780'>region</span> <span m='221140'>R?</span> <span
  m='221860'>Now</span> <span m='222520'>this</span> <span m='222730'>is</span>
  <span m='222890'>tough</span> <span m='223230'>to</span> <span
  m='223350'>do</span> <span m='223630'>by</span> <span m='223800'>just</span>
  <span m='226170'>intuitive</span> <span m='226760'>reasoning</span> <span
  m='227330'>or</span> <span m='227430'>just</span> <span m='227590'>by</span>
  <span m='227690'>looking</span> <span m='228090'>at</span> <span
  m='228200'>this</span> <span m='228320'>picture</span> <span
  m='228780'>I've</span> <span m='228970'>drawn.</span> <span
  m='229500'>So</span> <span m='229740'>in</span> <span m='229810'>this</span>
  <span m='229960'>case,</span> <span m='230330'>we're</span> <span
  m='230540'>kind</span> <span m='230740'>of</span> <span
  m='230820'>forced</span> <span m='231330'>to</span> <span
  m='231440'>use</span> <span m='231690'>some</span> <span
  m='231860'>algebra.</span> <span m='232860'>All</span> <span
  m='233110'>right.</span> </p><p><span m='233360'>So</span> <span
  m='233880'>what</span> <span m='234030'>do</span> <span m='234090'>we</span>
  <span m='234210'>know</span> <span m='235110'>about</span> <span
  m='235420'>this</span> <span m='235570'>region</span> <span
  m='235890'>R</span> <span m='236210'>and</span> <span m='236310'>this</span>
  <span m='236430'>curve</span> <span m='236840'>C?</span> <span
  m='237390'>Well,</span> <span m='237990'>C</span> <span m='238370'>is</span>
  <span m='239440'>the</span> <span m='239550'>projection</span> <span
  m='240850'>downwards</span> <span m='241770'>of</span> <span
  m='241970'>the</span> <span m='242090'>curve</span> <span m='244140'>of</span>
  <span m='244390'>intersection</span> <span m='245190'>of</span> <span
  m='245460'>this</span> <span m='245700'>plane</span> <span
  m='246470'>with</span> <span m='246650'>this</span> <span
  m='246760'>paraboloid,</span> <span m='248210'>right?</span> <span
  m='248830'>So</span> <span m='249860'>it's</span> <span m='250030'>the</span>
  <span m='250130'>projection</span> <span m='250650'>down</span> <span
  m='250880'>at</span> <span m='250960'>this</span> <span
  m='251060'>curve</span> <span m='251480'>intersection.</span> </p><p><span
  m='252140'>So</span> <span m='252330'>what</span> <span m='252440'>does</span>
  <span m='252540'>that</span> <span m='252730'>mean</span> <span
  m='252960'>about</span> <span m='253180'>its</span> <span
  m='253310'>equation?</span> <span m='254300'>Well,</span> <span
  m='254560'>it</span> <span m='254630'>means</span> <span
  m='254910'>it's</span> <span m='255050'>what</span> <span m='255250'>we</span>
  <span m='255340'>get</span> <span m='257770'>if</span> <span
  m='257930'>we</span> <span m='258040'>solve</span> <span m='258440'>for</span>
  <span m='258580'>z</span> <span m='259050'>in</span> <span
  m='259160'>one</span> <span m='259380'>of</span> <span m='259520'>the</span>
  <span m='259650'>two</span> <span m='260210'>equations</span> <span
  m='260840'>of</span> <span m='260950'>the</span> <span
  m='261050'>surfaces</span> <span m='261620'>and</span> <span
  m='261770'>plug</span> <span m='262040'>it</span> <span m='262120'>into</span>
  <span m='262370'>the</span> <span m='262510'>other.</span> <span
  m='262960'>And</span> <span m='263110'>that</span> <span
  m='263215'>will</span> <span m='263320'>give</span> <span m='263470'>us</span>
  <span m='263570'>an</span> <span m='263660'>equation</span> <span
  m='264060'>with</span> <span m='264240'>just</span> <span m='264540'>x</span>
  <span m='264780'>and</span> <span m='264960'>y,</span> <span
  m='265490'>and</span> <span m='265790'>that</span> <span
  m='266010'>will</span> <span m='266120'>be</span> <span m='266200'>the</span>
  <span m='266320'>equation</span> <span m='267120'>of</span> <span
  m='267310'>this</span> <span m='267500'>curve</span> <span
  m='267950'>C.</span> <span m='269080'>OK.</span> </p><p><span
  m='269620'>So</span> <span m='269870'>in</span> <span m='269980'>our</span>
  <span m='270220'>case,</span> <span m='270890'>that</span> <span
  m='271130'>means</span> <span m='271520'>that</span> <span m='273000'>C</span>
  <span m='276350'>is</span> <span m='276550'>given</span> <span
  m='277760'>by</span> <span m='278550'>this</span> <span
  m='279140'>equation</span> <span m='279740'>x</span> <span
  m='280010'>squared</span> <span m='280370'>plus</span> <span
  m='280680'>y</span> <span m='281100'>squared</span> <span
  m='281860'>equals</span> <span m='282592'>2y.</span> <span
  m='284356'>All</span> <span m='284700'>right.</span> <span
  m='284920'>So</span> <span m='285030'>whenever</span> <span
  m='285380'>x</span> <span m='285610'>squared</span> <span
  m='285840'>plus</span> <span m='286020'>y</span> <span
  m='286230'>squared</span> <span m='286540'>equals</span> <span
  m='286740'>2y,</span> <span m='287540'>that's</span> <span m='287840'>a</span>
  <span m='287940'>point</span> <span m='288470'>(x,</span> <span
  m='288780'>y)</span> <span m='289660'>such</span> <span m='290060'>that</span>
  <span m='290980'>directly</span> <span m='291650'>above</span> <span
  m='292000'>that</span> <span m='292210'>point</span> <span
  m='292890'>is</span> <span m='293070'>a</span> <span m='293120'>place</span>
  <span m='293520'>where</span> <span m='293930'>the</span> <span
  m='294030'>plane</span> <span m='294450'>intersects</span> <span
  m='295870'>the</span> <span m='296090'>paraboloid.</span> <span
  m='297020'>Well,</span> <span m='297370'>OK.</span> </p><p><span
  m='297610'>So</span> <span m='298050'>what</span> <span m='298320'>is</span>
  <span m='298520'>this</span> <span m='298750'>curve?</span> <span
  m='299180'>Well,</span> <span m='299330'>a</span> <span
  m='299420'>little</span> <span m='299640'>bit</span> <span
  m='299760'>of</span> <span m='299840'>algebra</span> <span
  m='300710'>can</span> <span m='300860'>help</span> <span m='301110'>us</span>
  <span m='301260'>sort</span> <span m='301550'>that</span> <span
  m='301730'>out.</span> <span m='301910'>If</span> <span m='302000'>you</span>
  <span m='302110'>bring</span> <span m='302360'>the</span> <span
  m='302530'>2y</span> <span m='303000'>over</span> <span m='303260'>here</span>
  <span m='303580'>and</span> <span m='303720'>complete</span> <span
  m='304120'>the</span> <span m='304230'>square,</span> <span
  m='305230'>you</span> <span m='305380'>can</span> <span m='305550'>see</span>
  <span m='305760'>that</span> <span m='305950'>we</span> <span
  m='306105'>can</span> <span m='306260'>rewrite</span> <span
  m='306660'>this</span> <span m='306790'>as</span> <span m='307390'>x</span>
  <span m='307670'>squared</span> <span m='308580'>plus</span> <span
  m='308920'>y</span> <span m='309340'>minus</span> <span m='309860'>1</span>
  <span m='310650'>squared</span> <span m='311560'>equals</span> <span
  m='311850'>1.</span> <span m='312530'>I</span> <span m='312620'>brought</span>
  <span m='312890'>the</span> <span m='312970'>2y</span> <span
  m='313490'>over,</span> <span m='313790'>I've</span> <span
  m='313920'>added</span> <span m='314230'>1</span> <span m='314510'>to</span>
  <span m='314630'>both</span> <span m='314920'>sides,</span> <span
  m='315320'>and</span> <span m='316340'>I've</span> <span
  m='317820'>factored</span> <span m='318820'>the</span> <span
  m='319040'>y</span> <span m='319350'>part.</span> <span m='319920'>And</span>
  <span m='320150'>so</span> <span m='321360'>this</span> <span
  m='321540'>is</span> <span m='321710'>an</span> <span m='321830'>easy</span>
  <span m='322310'>equation</span> <span m='322520'>to</span> <span
  m='322730'>recognize.</span> </p><p><span m='323065'>This</span> <span
  m='323400'>is</span> <span m='323500'>the</span> <span
  m='323700'>equation</span> <span m='324150'>of</span> <span
  m='324230'>a</span> <span m='324300'>circle</span> <span
  m='325210'>with</span> <span m='325410'>center</span> <span
  m='325770'>(0,</span> <span m='326180'>1)</span> <span m='326460'>and</span>
  <span m='326600'>radius</span> <span m='327040'>1.</span> <span
  m='327490'>So</span> <span m='328020'>let's</span> <span
  m='328270'>draw</span> <span m='328570'>that.</span> <span
  m='329200'>And</span> <span m='329480'>so</span> <span m='329560'>here</span>
  <span m='329680'>is</span> <span m='329800'>a</span> <span
  m='329850'>picture</span> <span m='330670'>of</span> <span
  m='330880'>what</span> <span m='331070'>the</span> <span
  m='331150'>shadow</span> <span m='332180'>looks</span> <span
  m='332480'>like</span> <span m='332790'>in</span> <span m='333010'>the</span>
  <span m='335440'>xy-plane.</span> <span m='335790'>So</span> <span
  m='335950'>the</span> <span m='336530'>center</span> <span
  m='336870'>is</span> <span m='336935'>at</span> <span m='337000'>height</span>
  <span m='337330'>1,</span> <span m='338500'>and</span> <span
  m='338710'>then</span> <span m='338860'>it's</span> <span
  m='339130'>this</span> <span m='341480'>circle.</span> </p><p><span
  m='342470'>That's</span> <span m='342640'>almost</span> <span
  m='343000'>a</span> <span m='343050'>circle.</span> <span m='343315'>It</span>
  <span m='343580'>looks</span> <span m='343810'>enough</span> <span
  m='344130'>like</span> <span m='344280'>a</span> <span
  m='344340'>circle</span> <span m='344680'>for</span> <span
  m='344870'>my</span> <span m='345360'>purposes.</span> <span
  m='345550'>So</span> <span m='345645'>this</span> <span m='345740'>is</span>
  <span m='345890'>the</span> <span m='345970'>region</span> <span
  m='346810'>R.</span> <span m='347290'>It's</span> <span m='347440'>a</span>
  <span m='347520'>circular</span> <span m='348130'>region</span> <span
  m='349610'>of</span> <span m='349760'>radius</span> <span m='350220'>1</span>
  <span m='350840'>with</span> <span m='351020'>center</span> <span
  m='351490'>(0,</span> <span m='351830'>1).</span> <span m='353090'>OK,</span>
  <span m='353820'>great.</span> <span m='354090'>So</span> <span
  m='354360'>I'm</span> <span m='354710'>just</span> <span
  m='354861'>going</span> <span m='355013'>to</span> <span
  m='355165'>shade</span> <span m='355316'>that</span> <span
  m='355468'>in</span> <span m='355620'>again</span> <span
  m='355847'>because</span> <span m='356075'>I</span> <span
  m='356530'>like</span> <span m='356985'>doing</span> <span
  m='357440'>that.</span> <span m='358350'>OK.</span> <span m='359100'>So</span>
  <span m='359500'>that's</span> <span m='359810'>the</span> <span
  m='359890'>region</span> <span m='360270'>R.</span> </p><p><span
  m='361470'>So</span> <span m='361650'>what</span> <span m='361800'>is</span>
  <span m='361900'>this</span> <span m='362000'>region</span> <span
  m='362085'>R?</span> <span m='364760'>Let's</span> <span
  m='365040'>look</span> <span m='365230'>back</span> <span
  m='365490'>over</span> <span m='365640'>here.</span> <span
  m='365990'>It's</span> <span m='366360'>the</span> <span
  m='366490'>shadow</span> <span m='367020'>of</span> <span
  m='367120'>our</span> <span m='367290'>solid</span> <span
  m='367730'>region</span> <span m='368460'>in</span> <span
  m='368640'>the</span> <span m='369290'>xy-plane.</span> <span
  m='369860'>So</span> <span m='370020'>when</span> <span m='370110'>you</span>
  <span m='370190'>project</span> <span m='370710'>down,</span> <span
  m='371320'>that's</span> <span m='371600'>the</span> <span
  m='371690'>region</span> <span m='371860'>that</span> <span
  m='372030'>you</span> <span m='372230'>get.</span> </p><p><span
  m='372430'>So</span> <span m='372630'>why</span> <span m='372860'>do</span>
  <span m='372960'>we</span> <span m='373080'>need</span> <span
  m='373380'>that?</span> <span m='375350'>So</span> <span m='375500'>we</span>
  <span m='375610'>know</span> <span m='375885'>when</span> <span
  m='376160'>we</span> <span m='376400'>set</span> <span m='376620'>up</span>
  <span m='376720'>this</span> <span m='376860'>triple</span> <span
  m='377160'>integral,</span> <span m='377370'>z</span> <span
  m='377890'>is</span> <span m='378010'>going</span> <span m='378100'>to</span>
  <span m='378190'>be</span> <span m='378280'>going</span> <span
  m='378560'>from</span> <span m='378720'>the</span> <span
  m='378790'>paraboloid</span> <span m='379830'>up</span> <span
  m='380070'>to</span> <span m='380160'>the</span> <span
  m='380280'>plane.</span> <span m='383400'>That's</span> <span
  m='383650'>going</span> <span m='383725'>to</span> <span m='383800'>be</span>
  <span m='383860'>the</span> <span m='384040'>innermost</span> <span
  m='384450'>integral,</span> <span m='385440'>but</span> <span
  m='385590'>then</span> <span m='385760'>the</span> <span
  m='385840'>middle</span> <span m='386190'>integral</span> <span
  m='386810'>is</span> <span m='387010'>going</span> <span m='387125'>to</span>
  <span m='387240'>be</span> <span m='387960'>y</span> <span
  m='388360'>in</span> <span m='388460'>terms</span> <span m='388760'>of</span>
  <span m='388860'>x</span> <span m='389065'>or</span> <span m='389167'>x</span>
  <span m='389270'>in</span> <span m='389340'>terms</span> <span
  m='389550'>of</span> <span m='389630'>y.</span> <span m='390050'>Or</span>
  <span m='390360'>if</span> <span m='390450'>we</span> <span
  m='390550'>do</span> <span m='390660'>polar</span> <span
  m='391020'>coordinates</span> <span m='392250'>or</span> <span
  m='392650'>cylindrical</span> <span m='393160'>coordinates,</span> <span
  m='393550'>it's</span> <span m='393680'>going</span> <span
  m='393760'>to</span> <span m='393840'>be</span> <span m='393950'>R</span>
  <span m='394210'>in</span> <span m='394300'>terms</span> <span
  m='394570'>of</span> <span m='394670'>theta.</span> </p><p><span
  m='395490'>So</span> <span m='395610'>we</span> <span m='395730'>need</span>
  <span m='396690'>to</span> <span m='396820'>figure</span> <span
  m='397170'>out</span> <span m='398040'>what</span> <span m='398260'>the</span>
  <span m='398370'>boundary</span> <span m='399290'>is,</span> <span
  m='399530'>what</span> <span m='399720'>that</span> <span
  m='399890'>region</span> <span m='400220'>looks</span> <span
  m='400470'>like</span> <span m='400700'>over</span> <span
  m='400910'>which</span> <span m='401120'>we'll</span> <span
  m='401450'>be</span> <span m='401630'>integrating</span> <span
  m='403500'>for</span> <span m='403600'>the</span> <span
  m='403680'>outer</span> <span m='403980'>two</span> <span
  m='404220'>integrals.</span> <span m='406750'>OK,</span> <span
  m='407070'>so</span> <span m='407210'>now</span> <span m='407320'>I've</span>
  <span m='407440'>been</span> <span m='407560'>saying</span> <span
  m='407960'>we</span> <span m='408090'>could</span> <span m='408280'>use</span>
  <span m='408470'>cylindrical</span> <span m='408810'>or</span> <span
  m='408970'>we</span> <span m='409080'>could</span> <span m='409270'>use</span>
  <span m='409490'>rectangular.</span> <span m='410010'>What</span> <span
  m='410150'>do</span> <span m='410210'>we</span> <span m='410320'>want</span>
  <span m='410500'>to</span> <span m='410560'>use?</span> </p><p><span
  m='411020'>Well,</span> <span m='411860'>so</span> <span
  m='412010'>this</span> <span m='412180'>is</span> <span m='412300'>a</span>
  <span m='412380'>circle.</span> <span m='413640'>It's</span> <span
  m='413740'>not</span> <span m='414060'>centered</span> <span
  m='415080'>at</span> <span m='415220'>the</span> <span
  m='415320'>origin,</span> <span m='415730'>but</span> <span
  m='415870'>it</span> <span m='415970'>is</span> <span
  m='416150'>tangent</span> <span m='416730'>to</span> <span
  m='416860'>one</span> <span m='417030'>of</span> <span m='417120'>the</span>
  <span m='417210'>axes</span> <span m='418370'>at</span> <span
  m='418540'>the</span> <span m='418630'>origin.</span> <span
  m='420310'>So</span> <span m='420500'>this</span> <span m='420690'>is</span>
  <span m='421290'>a</span> <span m='421420'>reasonably</span> <span
  m='421990'>nice</span> <span m='422260'>situation</span> <span
  m='424110'>to</span> <span m='424260'>do</span> <span m='424420'>polar</span>
  <span m='424770'>coordinates</span> <span m='425225'>in,</span> <span
  m='428670'>or</span> <span m='428970'>cylindrical</span> <span
  m='429430'>coordinates.</span> <span m='430210'>You</span> <span
  m='430290'>have</span> <span m='430370'>to</span> <span
  m='430470'>remember</span> <span m='431480'>from</span> <span
  m='431630'>when</span> <span m='431740'>you</span> <span
  m='431830'>learned</span> <span m='432070'>cylindrical</span> <span
  m='432560'>and</span> <span m='432650'>polar</span> <span
  m='432890'>coordinates</span> <span m='433750'>what</span> <span
  m='434000'>the</span> <span m='434110'>equation</span> <span
  m='434650'>of</span> <span m='434760'>such</span> <span m='435000'>a</span>
  <span m='435050'>circle</span> <span m='435460'>is.</span> </p><p><span
  m='436190'>And</span> <span m='436370'>so</span> <span m='436480'>I'm</span>
  <span m='436650'>going</span> <span m='436815'>to</span> <span
  m='436980'>write</span> <span m='437210'>it</span> <span
  m='437320'>down</span> <span m='437580'>here,</span> <span
  m='438550'>and</span> <span m='438670'>I'm</span> <span
  m='438760'>going</span> <span m='438845'>to</span> <span
  m='438930'>invite</span> <span m='439310'>you</span> <span
  m='439410'>to</span> <span m='439520'>go</span> <span m='440840'>look</span>
  <span m='441090'>up</span> <span m='441250'>why</span> <span
  m='441570'>this</span> <span m='441820'>is</span> <span m='441970'>true</span>
  <span m='442290'>if</span> <span m='442440'>you</span> <span
  m='442540'>don't</span> <span m='442740'>remember.</span> <span
  m='445520'>This</span> <span m='445700'>curve</span> <span
  m='446420'>has</span> <span m='446600'>equation</span> <span
  m='447460'>in</span> <span m='447745'>polar--</span> <span
  m='449330'>these</span> <span m='449530'>are</span> <span
  m='449690'>the</span> <span m='449815'>x-</span> <span m='449940'>and</span>
  <span m='450090'>y-axes</span> <span m='451200'>here--</span> <span
  m='451710'>so</span> <span m='453160'>this</span> <span
  m='453310'>curve</span> <span m='453930'>has,</span> <span
  m='454600'>in</span> <span m='455190'>polar</span> <span
  m='455530'>coordinates,</span> <span m='456000'>the</span> <span
  m='456240'>equation</span> <span m='457120'>r</span> <span
  m='457890'>equals</span> <span m='458450'>2</span> <span
  m='459340'>sine</span> <span m='460310'>theta.</span> <span
  m='462100'>All</span> <span m='462235'>right.</span> <span
  m='462370'>So</span> <span m='462510'>that</span> <span
  m='462770'>gives</span> <span m='462990'>me</span> <span
  m='463810'>this</span> <span m='464050'>curve</span> <span
  m='464490'>here.</span> <span m='465190'>The</span> <span
  m='465540'>outer</span> <span m='465940'>boundary.</span> </p><p><span
  m='467300'>And</span> <span m='467680'>now</span> <span m='468180'>what</span>
  <span m='468420'>I</span> <span m='468470'>want</span> <span
  m='468900'>is,</span> <span m='469010'>I</span> <span m='469080'>don't</span>
  <span m='469290'>just</span> <span m='469480'>want</span> <span
  m='469630'>the</span> <span m='469720'>curve.</span> <span m='470050'>I</span>
  <span m='470100'>want</span> <span m='470260'>to</span> <span
  m='470320'>integrate</span> <span m='470710'>over</span> <span
  m='470900'>the</span> <span m='470980'>whole</span> <span
  m='471350'>region,</span> <span m='473070'>and</span> <span
  m='473200'>I</span> <span m='473250'>want</span> <span m='473440'>to</span>
  <span m='473510'>integrate</span> <span m='473820'>over</span> <span
  m='474270'>it</span> <span m='474445'>once.</span> <span
  m='474620'>Remember,</span> <span m='474950'>polar</span> <span
  m='475270'>coordinates</span> <span m='475740'>are</span> <span
  m='475830'>a</span> <span m='475900'>little</span> <span
  m='476090'>tricky</span> <span m='476480'>because</span> <span
  m='476640'>you</span> <span m='476720'>have</span> <span m='476830'>to</span>
  <span m='476930'>worry</span> <span m='477220'>about</span> <span
  m='477480'>are</span> <span m='477580'>you</span> <span
  m='477780'>overlapping</span> <span m='478440'>and</span> <span
  m='478610'>so</span> <span m='478770'>on.</span> </p><p><span
  m='479970'>So</span> <span m='480110'>how</span> <span m='480220'>does</span>
  <span m='480350'>this</span> <span m='480500'>work?</span> <span
  m='481340'>At</span> <span m='481900'>theta</span> <span
  m='482270'>equals</span> <span m='482610'>0,</span> <span m='483020'>or</span>
  <span m='483133'>at</span> <span m='483246'>the</span> <span
  m='483360'>origin,</span> <span m='484270'>and</span> <span
  m='484470'>then</span> <span m='484580'>as</span> <span
  m='484830'>theta</span> <span m='485170'>grows,</span> <span
  m='487430'>we</span> <span m='487570'>get</span> <span
  m='487740'>further</span> <span m='488090'>and</span> <span
  m='488200'>further</span> <span m='488510'>away.</span> <span
  m='488820'>So</span> <span m='490430'>this</span> <span m='490550'>is</span>
  <span m='490710'>our</span> <span m='492500'>radius</span> <span
  m='493260'>growing</span> <span m='493620'>out.</span> <span
  m='493780'>And</span> <span m='493890'>then</span> <span m='493990'>at</span>
  <span m='494150'>pi</span> <span m='494350'>over</span> <span
  m='494580'>2,</span> <span m='495270'>we're</span> <span m='495400'>at</span>
  <span m='495490'>the</span> <span m='495590'>top</span> <span
  m='495900'>point</span> <span m='496080'>of</span> <span m='496170'>the</span>
  <span m='496220'>circle.</span> <span m='496560'>And</span> <span
  m='496670'>then</span> <span m='496810'>as</span> <span m='496930'>it</span>
  <span m='497010'>comes</span> <span m='497270'>back</span> <span
  m='497520'>into</span> <span m='497720'>pi,</span> <span m='497915'>it</span>
  <span m='498110'>comes</span> <span m='498340'>back</span> <span
  m='498655'>in.</span> </p><p><span m='498970'>So</span> <span
  m='499110'>we</span> <span m='499230'>want</span> <span
  m='499590'>theta</span> <span m='500770'>going</span> <span
  m='501440'>from</span> <span m='501750'>0</span> <span m='502000'>less</span>
  <span m='502130'>than</span> <span m='502410'>or</span> <span
  m='502503'>equal</span> <span m='502596'>to</span> <span
  m='502690'>theta</span> <span m='503730'>less</span> <span
  m='504010'>than</span> <span m='504100'>or</span> <span
  m='504175'>equal</span> <span m='504250'>to</span> <span m='504480'>pi</span>
  <span m='505450'>here.</span> <span m='505770'>So</span> <span
  m='506010'>at</span> <span m='506150'>pi</span> <span m='506460'>over</span>
  <span m='506530'>2</span> <span m='506650'>at</span> <span
  m='506780'>the</span> <span m='506960'>top,</span> <span m='507280'>and</span>
  <span m='507370'>at</span> <span m='507430'>pi</span> <span
  m='507710'>it</span> <span m='507790'>comes</span> <span
  m='508030'>back</span> <span m='508370'>for</span> <span m='508490'>the</span>
  <span m='508590'>first</span> <span m='508890'>time.</span> <span
  m='509360'>And</span> <span m='509720'>what</span> <span
  m='509860'>about</span> <span m='510190'>r?</span> </p><p><span
  m='510810'>Well,</span> <span m='510995'>it</span> <span
  m='511180'>looks</span> <span m='511480'>like</span> <span m='511760'>r</span>
  <span m='512490'>has</span> <span m='512710'>to</span> <span
  m='512800'>go</span> <span m='512900'>all</span> <span m='513110'>the</span>
  <span m='513200'>way</span> <span m='513380'>out</span> <span m='513730'>to
  2</span> <span m='513900'>sine</span> <span m='514190'>theta.</span> <span
  m='514450'>And</span> <span m='514710'>in</span> <span m='514900'>fact,</span>
  <span m='515090'>we</span> <span m='515180'>always</span> <span
  m='515410'>want</span> <span m='515530'>it</span> <span m='515650'>to</span>
  <span m='515730'>start</span> <span m='516000'>at</span> <span
  m='516080'>the</span> <span m='516190'>origin.</span> <span
  m='516840'>So</span> <span m='517010'>we</span> <span m='517130'>always</span>
  <span m='517490'>want</span> <span m='518380'>r</span> <span
  m='518820'>to</span> <span m='518940'>go</span> <span m='519130'>from</span>
  <span m='519480'>0</span> <span m='521050'>to</span> <span
  m='521810'>this</span> <span m='521970'>outer</span> <span
  m='522090'>boundary,</span> <span m='522690'>2</span> <span
  m='524120'>sine</span> <span m='524463'>theta.</span> <span
  m='525150'>So</span> <span m='526860'>this</span> <span
  m='527150'>describes</span> <span m='528150'>this</span> <span
  m='528350'>region</span> <span m='528820'>big</span> <span m='529030'>R</span>
  <span m='529880'>that</span> <span m='530030'>we're</span> <span
  m='530150'>trying</span> <span m='530400'>to</span> <span
  m='530470'>integrate</span> <span m='530630'>over.</span> <span
  m='530960'>This</span> <span m='531070'>circular</span> <span
  m='532000'>region</span> <span m='533310'>in</span> <span
  m='533740'>polar</span> <span m='534070'>coordinates.</span> <span
  m='535210'>So</span> <span m='535380'>OK.</span> </p><p><span
  m='535860'>So</span> <span m='536030'>it's</span> <span m='536340'>a</span>
  <span m='536430'>fairly</span> <span m='536870'>easy</span> <span
  m='537080'>description</span> <span m='537510'>in</span> <span
  m='537580'>polar</span> <span m='537810'>coordinates.</span> <span
  m='538380'>You</span> <span m='538580'>could</span> <span
  m='538710'>also</span> <span m='539000'>describe</span> <span
  m='539440'>it</span> <span m='539500'>in</span> <span
  m='539590'>rectangular</span> <span m='540130'>coordinates,</span> <span
  m='540610'>and</span> <span m='540700'>you</span> <span
  m='540770'>could</span> <span m='540910'>try</span> <span m='541110'>to</span>
  <span m='541200'>solve</span> <span m='541490'>the</span> <span
  m='541570'>problem</span> <span m='541920'>that</span> <span
  m='542140'>way.</span> <span m='543770'>I'm</span> <span m='543970'>not</span>
  <span m='544160'>going to</span> <span m='544370'>do</span> <span
  m='544500'>it</span> <span m='544640'>for</span> <span m='545150'>you,</span>
  <span m='545640'>but</span> <span m='545820'>you</span> <span
  m='545940'>could</span> <span m='546140'>give</span> <span
  m='546310'>it</span> <span m='546380'>a</span> <span m='546440'>shot</span>
  <span m='546960'>and</span> <span m='547090'>see</span> <span
  m='547270'>if</span> <span m='547370'>you</span> <span m='547470'>can</span>
  <span m='547620'>come</span> <span m='547830'>out</span> <span
  m='547930'>with</span> <span m='548050'>the</span> <span
  m='548130'>same</span> <span m='548380'>answer</span> <span
  m='548710'>in</span> <span m='548810'>the</span> <span m='548880'>end</span>
  <span m='549035'>that</span> <span m='549190'>we</span> <span
  m='549340'>do.</span> <span m='552050'>So</span> <span m='552710'>OK.</span>
  <span m='553300'>So</span> <span m='553480'>now,</span> <span
  m='553780'>what</span> <span m='553970'>have</span> <span m='554050'>we</span>
  <span m='554170'>done?</span> </p><p><span m='554710'>Well,</span> <span
  m='555940'>I</span> <span m='556060'>haven't</span> <span
  m='556310'>written</span> <span m='556500'>our</span> <span
  m='556620'>bounds,</span> <span m='557070'>so</span> <span
  m='557170'>let</span> <span m='557270'>me</span> <span m='557350'>write</span>
  <span m='557580'>our</span> <span m='557700'>bounds</span> <span
  m='558010'>on</span> <span m='558217'>z</span> <span m='558840'>right</span>
  <span m='559040'>here.</span> <span m='559260'>So</span> <span
  m='559380'>we</span> <span m='559480'>know</span> <span m='559600'>that</span>
  <span m='559860'>z</span> <span m='560110'>is</span> <span
  m='560260'>going</span> <span m='561180'>from</span> <span
  m='562100'>the</span> <span m='562230'>paraboloid.</span> <span
  m='565120'>If</span> <span m='565190'>we</span> <span m='565350'>look,</span>
  <span m='565590'>it's</span> <span m='565760'>the</span> <span
  m='565860'>paraboloid</span> <span m='566900'>z</span> <span
  m='567240'>equals</span> <span m='567690'>x</span> <span
  m='567920'>squared</span> <span m='568260'>plus</span> <span
  m='568540'>y</span> <span m='568800'>squared--</span> <span
  m='569470'>but</span> <span m='569660'>we're</span> <span
  m='569800'>working</span> <span m='570220'>in</span> <span
  m='570680'>cylindrical</span> <span m='571310'>coordinates</span> <span
  m='571880'>now,</span> <span m='572080'>so</span> <span m='572220'>we</span>
  <span m='572310'>need</span> <span m='572490'>to</span> <span
  m='572600'>write</span> <span m='572890'>this</span> <span
  m='573100'>in</span> <span m='573210'>terms</span> <span m='573570'>of</span>
  <span m='574100'>r</span> <span m='574315'>and</span> <span
  m='574530'>theta--</span> <span m='574970'>so</span> <span
  m='575070'>that's</span> <span m='575700'>z</span> <span m='576160'>is</span>
  <span m='576310'>going</span> <span m='576570'>from</span> <span
  m='577340'>r</span> <span m='577640'>squared,</span> <span
  m='579100'>and</span> <span m='579260'>it's</span> <span
  m='579420'>going</span> <span m='580010'>up</span> <span m='580370'>to</span>
  <span m='580610'>the</span> <span m='580740'>plane</span> <span
  m='580980'>z</span> <span m='581220'>equals</span> <span
  m='581790'>2y--</span> <span m='582920'>now</span> <span m='583040'>y</span>
  <span m='584100'>in</span> <span m='584480'>cylindrical</span> <span
  m='585110'>coordinates</span> <span m='585560'>is</span> <span
  m='585700'>r</span> <span m='585970'>sine</span> <span
  m='586330'>theta.</span> <span m='586690'>So</span> <span m='587050'>z</span>
  <span m='587400'>is</span> <span m='587530'>going</span> <span
  m='587810'>from</span> <span m='588150'>r</span> <span
  m='588480'>squared</span> <span m='589300'>to</span> <span
  m='589780'>2r</span> <span m='590230'>sine</span> <span
  m='590680'>theta.</span> </p><p><span m='591160'>So</span> <span
  m='591360'>let's</span> <span m='591560'>go</span> <span
  m='591900'>write</span> <span m='592160'>that</span> <span
  m='592360'>down</span> <span m='592580'>over</span> <span
  m='592750'>here.</span> <span m='592970'>So</span> <span m='593130'>z</span>
  <span m='594180'>is</span> <span m='594370'>going</span> <span
  m='594680'>from--</span> <span m='596650'>just</span> <span
  m='596890'>ignore</span> <span m='597150'>that--</span> <span
  m='598150'>from</span> <span m='599180'>r</span> <span
  m='599720'>squared</span> <span m='600540'>less</span> <span
  m='600900'>than</span> <span m='601260'>or</span> <span
  m='601350'>equal</span> <span m='601440'>to</span> <span m='601530'>z,</span>
  <span m='602650'>and</span> <span m='602790'>it's</span> <span
  m='602930'>going</span> <span m='603170'>all</span> <span
  m='603350'>the</span> <span m='603470'>way</span> <span m='603590'>up</span>
  <span m='603670'>to</span> <span m='603750'>2r</span> <span
  m='606420'>sine</span> <span m='606800'>theta.</span> </p><p><span
  m='607560'>So</span> <span m='607790'>these</span> <span
  m='608120'>three</span> <span m='608390'>equations</span> <span
  m='610010'>describe</span> <span m='610640'>our</span> <span
  m='610820'>region.</span> <span m='612170'>Yeah?</span> <span
  m='613150'>0</span> <span m='613620'>less</span> <span m='613825'>than</span>
  <span m='614030'>theta</span> <span m='614270'>less</span> <span
  m='614425'>than</span> <span m='614580'>pi:</span> <span
  m='614860'>that</span> <span m='615040'>just</span> <span
  m='615270'>says</span> <span m='615360'>theta.</span> <span
  m='615850'>OK?</span> <span m='616120'>Then</span> <span
  m='616500'>when</span> <span m='616700'>theta</span> <span
  m='616850'>is</span> <span m='617000'>going</span> <span
  m='617230'>from</span> <span m='617380'>0</span> <span m='617650'>to</span>
  <span m='617730'>pi--</span> <span m='618400'>r</span> <span
  m='618740'>going</span> <span m='619180'>from</span> <span m='619910'>0</span>
  <span m='620230'>to</span> <span m='620340'>2</span> <span
  m='620500'>sine</span> <span m='620740'>theta--</span> <span
  m='620920'>that</span> <span m='621220'>says</span> <span m='621940'>in</span>
  <span m='622050'>the</span> <span m='622340'>xy-plane,</span> <span
  m='622870'>we're</span> <span m='623000'>tracing</span> <span
  m='623420'>out</span> <span m='624300'>this</span> <span
  m='624380'>circular</span> <span m='624820'>shadow.</span> <span
  m='625410'>And</span> <span m='625650'>then</span> <span m='626290'>as</span>
  <span m='626560'>z</span> <span m='626730'>goes</span> <span
  m='626850'>from</span> <span m='627070'>r</span> <span
  m='627290'>squared</span> <span m='627550'>to</span> <span
  m='627840'>2r</span> <span m='628000'>sine</span> <span
  m='628250'>theta,</span> <span m='628780'>that</span> <span
  m='628960'>says</span> <span m='629520'>above</span> <span
  m='629860'>this</span> <span m='630010'>shadow</span> <span
  m='630640'>we're</span> <span m='631560'>above</span> <span
  m='631950'>the</span> <span m='632030'>paraboloid</span> <span
  m='632380'>and</span> <span m='632620'>below</span> <span
  m='632966'>the</span> <span m='633312'>plane.</span> <span
  m='633660'>So</span> <span m='633790'>that's</span> <span
  m='633970'>exactly</span> <span m='634440'>the</span> <span
  m='634540'>region</span> <span m='634960'>that</span> <span
  m='635065'>we</span> <span m='635170'>want.</span> <span m='636670'>So</span>
  <span m='636890'>OK.</span> </p><p><span m='637130'>So</span> <span
  m='637260'>now,</span> <span m='637450'>how</span> <span m='637600'>do</span>
  <span m='637700'>we</span> <span m='638150'>get</span> <span
  m='638300'>its</span> <span m='638440'>volume</span> <span
  m='639660'>after</span> <span m='639950'>we</span> <span
  m='640080'>figured</span> <span m='640350'>this</span> <span
  m='640540'>out?</span> <span m='640840'>Well,</span> <span
  m='643470'>we</span> <span m='643560'>write</span> <span
  m='643780'>down</span> <span m='643885'>the</span> <span
  m='643990'>triple</span> <span m='644250'>integral.</span> <span
  m='644580'>So</span> <span m='644710'>V,</span> <span m='647010'>the</span>
  <span m='647110'>volume</span> <span m='647610'>of</span> <span
  m='647705'>a</span> <span m='647800'>region</span> <span m='648260'>D,</span>
  <span m='649150'>is</span> <span m='649330'>equal</span> <span
  m='649550'>to</span> <span m='649680'>the</span> <span
  m='649800'>triple</span> <span m='650140'>integral</span> <span
  m='651610'>over</span> <span m='652085'>that</span> <span
  m='652560'>solid</span> <span m='653290'>of</span> <span m='653470'>dV.</span>
  <span m='655800'>OK?</span> <span m='656400'>And</span> <span
  m='656580'>in</span> <span m='656670'>our</span> <span m='656860'>case,</span>
  <span m='657870'>in</span> <span m='658260'>cylindrical</span> <span
  m='658810'>coordinates,</span> <span m='659370'>dV</span> <span
  m='660270'>is</span> <span m='660450'>going</span> <span m='660720'>to</span>
  <span m='660810'>be</span> <span m='661820'>dz</span> <span
  m='662490'>times</span> <span m='664590'>r</span> <span m='664880'>dr</span>
  <span m='665210'>d</span> <span m='665310'>theta,</span> <span
  m='665880'>or</span> <span m='666560'>r</span> <span m='667070'>dz</span>
  <span m='667410'>dr</span> <span m='667520'>d</span> <span
  m='667710'>theta.</span> <span m='668740'>OK?</span> <span
  m='669040'>So</span> <span m='669190'>this</span> <span m='669340'>is</span>
  <span m='669540'>equal</span> <span m='669900'>to,</span> <span
  m='670890'>if</span> <span m='671210'>we're</span> <span
  m='671840'>integrating,</span> <span m='674740'>r</span> <span
  m='676230'>dz</span> <span m='677670'>dr</span> <span m='678785'>d</span>
  <span m='679230'>theta.</span> </p><p><span m='681030'>And</span> <span
  m='681230'>now</span> <span m='681310'>we</span> <span m='681430'>need</span>
  <span m='681560'>to</span> <span m='681640'>put</span> <span
  m='681800'>in</span> <span m='681880'>our</span> <span
  m='682000'>bounds.</span> <span m='683840'>If</span> <span
  m='684020'>we</span> <span m='684240'>look</span> <span m='684530'>over</span>
  <span m='684780'>on</span> <span m='684950'>this</span> <span
  m='685030'>side</span> <span m='685360'>of</span> <span m='685420'>me,</span>
  <span m='685530'>here</span> <span m='685720'>they</span> <span
  m='685870'>are.</span> <span m='686340'>And</span> <span
  m='686530'>these</span> <span m='686700'>are</span> <span
  m='686790'>our</span> <span m='686950'>bounds</span> <span
  m='687270'>that</span> <span m='687370'>we're</span> <span
  m='687480'>going</span> <span m='687600'>to</span> <span m='687680'>be</span>
  <span m='687760'>using.</span> <span m='688640'>So</span> <span
  m='688950'>theta</span> <span m='689380'>is</span> <span
  m='689510'>going</span> <span m='689860'>from</span> <span m='690100'>0</span>
  <span m='690912'>to</span> <span m='691320'>pi.</span> <span
  m='693400'>And</span> <span m='693910'>r</span> <span m='694820'>is</span>
  <span m='695000'>going</span> <span m='695390'>from</span> <span
  m='695710'>0</span> <span m='697070'>to</span> <span m='697250'>2</span> <span
  m='698960'>sine</span> <span m='699560'>theta.</span> <span
  m='700650'>And</span> <span m='700910'>z</span> <span m='701680'>is</span>
  <span m='701870'>going</span> <span m='702250'>from</span> <span
  m='702580'>r</span> <span m='702940'>squared</span> <span m='704100'>to</span>
  <span m='705040'>2r</span> <span m='707300'>sine</span> <span
  m='707770'>theta.</span> </p><p><span m='710780'>So</span> <span
  m='710970'>this</span> <span m='711260'>triple</span> <span
  m='711610'>integral</span> <span m='712340'>gives</span> <span
  m='712620'>us</span> <span m='712910'>precisely</span> <span
  m='713560'>the</span> <span m='713680'>volume</span> <span
  m='714100'>of</span> <span m='714220'>our</span> <span
  m='714370'>region.</span> <span m='715720'>And</span> <span
  m='716320'>in</span> <span m='716490'>order</span> <span m='716740'>to</span>
  <span m='716850'>figure</span> <span m='717180'>out</span> <span
  m='717290'>what</span> <span m='717440'>that</span> <span
  m='717600'>volume</span> <span m='717890'>is,</span> <span
  m='718110'>we</span> <span m='718220'>just</span> <span m='718380'>have</span>
  <span m='718530'>to</span> <span m='718640'>evaluate</span> <span
  m='719260'>this</span> <span m='719440'>integral.</span> <span
  m='720260'>So</span> <span m='720720'>let's</span> <span
  m='720960'>start</span> <span m='721300'>doing</span> <span
  m='721590'>that.</span> <span m='721960'>I</span> <span
  m='722070'>don't</span> <span m='722240'>think</span> <span
  m='722390'>I'm</span> <span m='722510'>going</span> <span m='722600'>to</span>
  <span m='722690'>go</span> <span m='722820'>quite</span> <span
  m='723260'>all</span> <span m='723510'>the</span> <span m='723610'>way,</span>
  <span m='725160'>but</span> <span m='725300'>I'll</span> <span
  m='725730'>do</span> <span m='725960'>most</span> <span m='726310'>of</span>
  <span m='726390'>the</span> <span m='726460'>work.</span> <span
  m='727680'>So</span> <span m='728000'>OK.</span> </p><p><span
  m='728260'>So</span> <span m='728410'>let's</span> <span m='728630'>do</span>
  <span m='728760'>the</span> <span m='728920'>innermost</span> <span
  m='729460'>integral</span> <span m='729790'>first.</span> <span
  m='730110'>Whenever</span> <span m='730380'>you</span> <span
  m='730480'>have</span> <span m='730620'>a</span> <span
  m='730680'>triple</span> <span m='730980'>integral</span> <span
  m='731620'>like</span> <span m='731830'>this--</span> <span
  m='732020'>a</span> <span m='732120'>nice</span> <span
  m='732360'>iterated</span> <span m='732760'>integral--</span> <span
  m='733290'>you</span> <span m='733460'>always</span> <span
  m='733720'>start</span> <span m='734000'>at</span> <span m='734090'>the</span>
  <span m='734190'>inside</span> <span m='734570'>and</span> <span
  m='734670'>work</span> <span m='734870'>your</span> <span
  m='734990'>way</span> <span m='735140'>out.</span> <span
  m='735670'>Well</span> <span m='735810'>here,</span> <span
  m='736530'>our</span> <span m='736660'>integrand</span> <span
  m='737220'>is</span> <span m='737320'>r,</span> <span m='738170'>and</span>
  <span m='738320'>we're</span> <span m='738560'>integrating</span> <span
  m='738880'>with</span> <span m='739010'>respect</span> <span
  m='739340'>to</span> <span m='739420'>z--</span> <span m='739860'>and</span>
  <span m='740000'>r</span> <span m='740250'>doesn't</span> <span
  m='740510'>have</span> <span m='740630'>any</span> <span m='740810'>z's</span>
  <span m='741150'>in</span> <span m='741250'>it--</span> <span
  m='741850'>so</span> <span m='741990'>this</span> <span
  m='742170'>inner</span> <span m='742390'>integral</span> <span
  m='742730'>is</span> <span m='742830'>going</span> <span m='742910'>to</span>
  <span m='742990'>be</span> <span m='743140'>easy.</span> <span
  m='744690'>So</span> <span m='744870'>I'm</span> <span m='745010'>going</span>
  <span m='745110'>to</span> <span m='745210'>rewrite</span> <span
  m='746650'>this</span> <span m='746940'>as</span> <span
  m='747110'>equal</span> <span m='747410'>to--</span> <span
  m='748340'>we</span> <span m='748450'>keep</span> <span m='748730'>our</span>
  <span m='748880'>outer</span> <span m='749170'>two</span> <span
  m='749400'>bounds,</span> <span m='749860'>so</span> <span
  m='749980'>it's</span> <span m='750110'>still</span> <span
  m='750350'>from</span> <span m='750570'>0</span> <span m='750870'>to</span>
  <span m='750970'>pi,</span> <span m='751696'>and</span> <span
  m='752060'>it's</span> <span m='752330'>still</span> <span
  m='752670'>from</span> <span m='753170'>0</span> <span m='754300'>to</span>
  <span m='754595'>2</span> <span m='756080'>sine</span> <span
  m='757400'>theta--</span> <span m='758190'>of</span> <span
  m='760130'>2r</span> <span m='761170'>squared</span> <span
  m='762480'>sine</span> <span m='762980'>theta</span> <span
  m='763850'>minus</span> <span m='764450'>r</span> <span
  m='764770'>cubed</span> <span m='766242'>dr</span> <span m='767970'>d</span>
  <span m='768100'>theta.</span> <span m='768460'>So</span> <span
  m='768690'>what</span> <span m='768840'>I've</span> <span
  m='769030'>done</span> <span m='769290'>here</span> <span m='770140'>is</span>
  <span m='770300'>I've</span> <span m='770480'>just</span> <span
  m='771270'>integrated.</span> </p><p><span m='771760'>I</span> <span
  m='771820'>get</span> <span m='772550'>the</span> <span
  m='773080'>anti-derivative</span> <span m='773820'>of</span> <span
  m='773980'>r</span> <span m='774270'>dz</span> <span m='775120'>is</span>
  <span m='775810'>r*z.</span> <span m='776580'>And</span> <span
  m='776820'>so</span> <span m='776940'>then</span> <span m='777100'>I</span>
  <span m='777180'>take</span> <span m='777420'>the</span> <span
  m='777530'>difference</span> <span m='777890'>between</span> <span
  m='778190'>those</span> <span m='778350'>two</span> <span
  m='778490'>bounds.</span> <span m='778840'>So</span> <span m='778940'>I</span>
  <span m='779030'>get</span> <span m='779490'>r</span> <span
  m='779830'>times</span> <span m='780170'>2r</span> <span
  m='780500'>sine</span> <span m='780740'>theta</span> <span
  m='781330'>minus</span> <span m='781730'>r</span> <span
  m='781950'>times</span> <span m='782210'>r</span> <span
  m='782390'>squared.</span> <span m='783130'>So</span> <span
  m='784220'>r</span> <span m='784450'>times</span> <span m='784660'>2r</span>
  <span m='784990'>sine</span> <span m='785220'>theta</span> <span
  m='785380'>is</span> <span m='785660'>2r</span> <span
  m='786000'>squared</span> <span m='786330'>sine</span> <span
  m='786550'>theta.</span> <span m='787190'>Minus</span> <span
  m='787530'>r</span> <span m='787720'>times</span> <span m='787930'>r</span>
  <span m='788060'>squared</span> <span m='788390'>is</span> <span
  m='788455'>minus</span> <span m='788640'>r</span> <span
  m='788760'>cubed.</span> <span m='789080'>OK,</span> <span
  m='789290'>so</span> <span m='789460'>I've</span> <span m='789550'>just</span>
  <span m='789810'>done</span> <span m='789910'>the</span> <span
  m='789990'>first</span> <span m='790230'>integral.</span> </p><p><span
  m='790760'>So</span> <span m='790940'>now</span> <span
  m='792110'>integrating</span> <span m='792560'>with</span> <span
  m='792660'>respect</span> <span m='793130'>to</span> <span
  m='793290'>r.</span> <span m='793770'>OK,</span> <span m='794010'>this</span>
  <span m='794150'>second</span> <span m='794580'>one</span> <span
  m='794740'>isn't</span> <span m='795040'>so</span> <span m='795190'>bad</span>
  <span m='795600'>either.</span> <span m='796490'>As</span> <span
  m='796680'>far</span> <span m='796910'>as</span> <span m='797000'>r</span>
  <span m='797210'>is</span> <span m='797420'>concerned,</span> <span
  m='797920'>this</span> <span m='798100'>is</span> <span m='798230'>just</span>
  <span m='798430'>a</span> <span m='798500'>polynomial.</span> <span
  m='799240'>Theta</span> <span m='799370'>is</span> <span
  m='799560'>constant</span> <span m='799990'>with</span> <span
  m='800110'>respect</span> <span m='800550'>to</span> <span m='800750'>r</span>
  <span m='801830'>when</span> <span m='801980'>we're</span> <span
  m='802100'>doing</span> <span m='802370'>an</span> <span
  m='802440'>integral</span> <span m='802760'>like</span> <span
  m='803020'>this.</span> <span m='803320'>So</span> <span m='803740'>OK.</span>
  </p><p><span m='803980'>So</span> <span m='804180'>the</span> <span
  m='804300'>second</span> <span m='804680'>integral</span> <span
  m='804840'>is</span> <span m='805040'>not</span> <span m='805240'>too</span>
  <span m='805360'>bad</span> <span m='805590'>either.</span> <span
  m='806140'>So</span> <span m='806260'>this</span> <span m='806450'>is</span>
  <span m='806620'>the</span> <span m='806860'>integral--</span> <span
  m='807790'>so</span> <span m='808310'>our</span> <span m='808520'>outer</span>
  <span m='808620'>integral</span> <span m='808970'>from</span> <span
  m='809180'>0</span> <span m='809450'>to</span> <span m='809550'>pi</span>
  <span m='810450'>sticks</span> <span m='810670'>around--</span> <span
  m='811210'>let's</span> <span m='812480'>not</span> <span m='812740'>do</span>
  <span m='812870'>this</span> <span m='813050'>one</span> <span
  m='813150'>in</span> <span m='813250'>one</span> <span m='813540'>fell</span>
  <span m='813830'>swoop</span> <span m='814290'>I</span> <span
  m='814330'>think--</span> <span m='815350'>so</span> <span
  m='815470'>it's</span> <span m='815620'>going</span> <span
  m='815715'>to</span> <span m='815810'>become</span> <span m='816300'>2</span>
  <span m='817550'>r</span> <span m='817890'>cubed</span> <span
  m='818630'>over</span> <span m='819250'>3,</span> <span m='820830'>sine</span>
  <span m='822340'>theta,</span> <span m='822900'>minus</span> <span
  m='823970'>r</span> <span m='824370'>to</span> <span m='824475'>the</span>
  <span m='824580'>fourth</span> <span m='824980'>over</span> <span
  m='825230'>4.</span> <span m='826360'>And</span> <span m='826630'>we're</span>
  <span m='826730'>taking</span> <span m='827150'>that</span> <span
  m='827420'>between</span> <span m='828330'>r</span> <span
  m='828690'>equals</span> <span m='829290'>0</span> <span m='830700'>and</span>
  <span m='831010'>r</span> <span m='831450'>equals</span> <span
  m='832030'>2</span> <span m='833280'>sine</span> <span
  m='833660'>theta.</span> <span m='835420'>And</span> <span
  m='835540'>then</span> <span m='835660'>that</span> <span
  m='835820'>whole</span> <span m='836080'>thing</span> <span
  m='836330'>is</span> <span m='836450'>going</span> <span m='836530'>to</span>
  <span m='836610'>be</span> <span m='836730'>integrated</span> <span
  m='837160'>d</span> <span m='837320'>theta.</span> </p><p><span
  m='839300'>So</span> <span m='839470'>what</span> <span m='839570'>do</span>
  <span m='839630'>we</span> <span m='839720'>get</span> <span
  m='839880'>when</span> <span m='840010'>we</span> <span m='840110'>plug</span>
  <span m='840460'>this</span> <span m='840590'>in?</span> <span
  m='841160'>Well,</span> <span m='841400'>at</span> <span m='841620'>r</span>
  <span m='841840'>equals</span> <span m='842000'>zero,</span> <span
  m='842280'>this</span> <span m='842460'>is</span> <span m='842580'>just</span>
  <span m='842820'>0,</span> <span m='843150'>so</span> <span
  m='843300'>that's</span> <span m='843480'>easy.</span> <span
  m='844770'>And</span> <span m='844910'>so</span> <span m='845020'>we</span>
  <span m='845130'>need</span> <span m='845280'>the</span> <span
  m='845370'>top</span> <span m='845720'>one,</span> <span m='846360'>r</span>
  <span m='846620'>equals</span> <span m='846890'>2</span> <span
  m='847100'>sine</span> <span m='847510'>theta.</span> <span
  m='848090'>So</span> <span m='848310'>this</span> <span m='848720'>is</span>
  <span m='848820'>going</span> <span m='848980'>to</span> <span
  m='849060'>give</span> <span m='849170'>me</span> <span
  m='849340'>something</span> <span m='849720'>like</span> <span
  m='850230'>16/3</span> <span m='851480'>sine</span> <span m='851850'>to</span>
  <span m='851950'>the</span> <span m='852050'>fourth</span> <span
  m='852570'>theta</span> <span m='853310'>minus</span> <span
  m='854160'>4</span> <span m='854620'>sine</span> <span m='854950'>to</span>
  <span m='855030'>the</span> <span m='855140'>fourth</span> <span
  m='855610'>theta,</span> <span m='855930'>so</span> <span m='856030'>I</span>
  <span m='856100'>think</span> <span m='856280'>that</span> <span
  m='856460'>works</span> <span m='856700'>out</span> <span m='856870'>to</span>
  <span m='856980'>be</span> <span m='857520'>4/3</span> <span
  m='863800'>sine</span> <span m='865106'>to</span> <span m='865480'>the</span>
  <span m='865710'>fourth</span> <span m='866558'>theta</span> <span
  m='867830'>d</span> <span m='867950'>theta,</span> <span
  m='868610'>between</span> <span m='868940'>0</span> <span
  m='869280'>and</span> <span m='869430'>pi.</span> </p><p><span
  m='870250'>So</span> <span m='870380'>now</span> <span m='870520'>you</span>
  <span m='870630'>have</span> <span m='870770'>to</span> <span
  m='870860'>remember</span> <span m='871240'>how</span> <span
  m='871360'>to</span> <span m='871510'>do</span> <span
  m='871620'>integrals</span> <span m='872120'>like</span> <span
  m='872380'>this.</span> <span m='873950'>So</span> <span
  m='874040'>this</span> <span m='874210'>is</span> <span
  m='875080'>something</span> <span m='875770'>you</span> <span
  m='875910'>probably</span> <span m='876270'>learned</span> <span
  m='876600'>back</span> <span m='876990'>in</span> <span m='877990'>the</span>
  <span m='878190'>trig</span> <span m='878730'>integral</span> <span
  m='879220'>section</span> <span m='879850'>of</span> <span
  m='880010'>your</span> <span m='880230'>Calculus</span> <span
  m='880820'>I</span> <span m='881120'>or</span> <span m='881430'>18.01</span>
  <span m='882590'>class.</span> <span m='884170'>So</span> <span
  m='884290'>when</span> <span m='884400'>it's</span> <span m='884510'>an</span>
  <span m='884770'>even</span> <span m='885210'>power</span> <span
  m='885600'>here,</span> <span m='885860'>I</span> <span
  m='885950'>think</span> <span m='886150'>the</span> <span
  m='886240'>thing</span> <span m='886430'>that</span> <span
  m='886540'>we</span> <span m='886650'>do</span> <span m='886810'>is</span>
  <span m='887390'>we</span> <span m='887540'>use</span> <span
  m='888160'>our</span> <span m='888310'>half-angle</span> <span
  m='888940'>formulas.</span> </p><p><span m='890110'>So</span> <span
  m='891580'>now</span> <span m='892600'>I'm</span> <span
  m='892710'>going</span> <span m='892800'>to</span> <span
  m='892890'>tell</span> <span m='893140'>you</span> <span
  m='893280'>what</span> <span m='893500'>your</span> <span
  m='893630'>final</span> <span m='894080'>steps</span> <span
  m='894540'>are.</span> <span m='895040'>So</span> <span
  m='895250'>first,</span> <span m='896030'>you're</span> <span
  m='896160'>going</span> <span m='896245'>to</span> <span m='896330'>use</span>
  <span m='896740'>your</span> <span m='896880'>half-angle</span> <span
  m='897450'>formula.</span> <span m='898310'>So</span> <span
  m='898500'>what</span> <span m='898650'>is</span> <span m='898780'>that</span>
  <span m='898990'>half-angle</span> <span m='899600'>formula?</span> <span
  m='900060'>So</span> <span m='900255'>it's</span> <span m='900450'>sine</span>
  <span m='900890'>squared</span> <span m='902210'>theta</span> <span
  m='903510'>is</span> <span m='903680'>equal</span> <span m='903960'>to</span>
  <span m='904160'>1</span> <span m='905290'>minus</span> <span
  m='906420'>cosine</span> <span m='907850'>2</span> <span
  m='908120'>theta</span> <span m='909320'>over</span> <span
  m='909670'>2.</span> </p><p><span m='911410'>So</span> <span
  m='911550'>you're</span> <span m='911650'>going</span> <span
  m='911730'>to</span> <span m='911810'>have</span> <span m='911950'>to</span>
  <span m='912040'>plug</span> <span m='912460'>this</span> <span
  m='912620'>in</span> <span m='912790'>here,</span> <span
  m='913380'>right?</span> <span m='913600'>Sine</span> <span
  m='913930'>to</span> <span m='914030'>the</span> <span
  m='914140'>fourth</span> <span m='914520'>is</span> <span
  m='914650'>sine</span> <span m='915000'>squared</span> <span
  m='915640'>quantity</span> <span m='916060'>squared.</span> <span
  m='916900'>And</span> <span m='917210'>then</span> <span
  m='917330'>you're</span> <span m='917450'>going</span> <span
  m='917530'>to</span> <span m='917610'>have</span> <span m='917750'>a</span>
  <span m='917900'>cosine</span> <span m='918590'>squared</span> <span
  m='919200'>2</span> <span m='919490'>theta,</span> <span m='920030'>so</span>
  <span m='920190'>you're</span> <span m='920280'>going</span> <span
  m='920355'>to</span> <span m='920430'>have</span> <span m='920540'>to</span>
  <span m='920630'>use</span> <span m='921060'>the</span> <span
  m='921550'>double-angle</span> <span m='922230'>formula.</span> <span
  m='922860'>This</span> <span m='922970'>time</span> <span
  m='923160'>you're</span> <span m='923250'>going</span> <span
  m='923325'>to</span> <span m='923400'>have</span> <span m='923520'>to</span>
  <span m='923630'>use</span> <span m='923830'>the</span> <span
  m='924230'>double-angle</span> <span m='924820'>formula</span> <span
  m='925170'>for</span> <span m='925320'>cosine,</span> <span
  m='925840'>which</span> <span m='925980'>is</span> <span
  m='926120'>very</span> <span m='926340'>similar,</span> <span
  m='927210'>although</span> <span m='927440'>not</span> <span
  m='927640'>exactly</span> <span m='928060'>the</span> <span
  m='928170'>same.</span> <span m='928440'>So</span> <span
  m='928710'>you're</span> <span m='928860'>going to</span> <span
  m='929140'>have</span> <span m='929213'>to</span> <span m='929286'>use</span>
  <span m='929360'>those</span> <span m='929560'>two</span> <span
  m='930570'>double-angle</span> <span m='931180'>formulas.</span> <span
  m='931920'>After</span> <span m='932230'>that,</span> <span
  m='932440'>you'll</span> <span m='932550'>have</span> <span
  m='932700'>something</span> <span m='933020'>that</span> <span
  m='933115'>is</span> <span m='933210'>straightforward</span> <span
  m='933555'>to</span> <span m='933900'>integrate.</span> </p><p><span
  m='935980'>So</span> <span m='936580'>you'll</span> <span
  m='936710'>have</span> <span m='936890'>something</span> <span
  m='937150'>that's</span> <span m='937290'>straightforward</span> <span
  m='937680'>to</span> <span m='937810'>integrate.</span> <span
  m='938090'>You'll</span> <span m='938210'>integrate</span> <span
  m='938605'>it,</span> <span m='939000'>and</span> <span m='939290'>if</span>
  <span m='939410'>I'm</span> <span m='939940'>not</span> <span
  m='940210'>mistaken,</span> <span m='942590'>what</span> <span
  m='942780'>you</span> <span m='942910'>get</span> <span m='943090'>at</span>
  <span m='943210'>the</span> <span m='943320'>end</span> <span
  m='945360'>is</span> <span m='945550'>that</span> <span m='945700'>you</span>
  <span m='945790'>just</span> <span m='946020'>get</span> <span
  m='946265'>a</span> <span m='946510'>fairly</span> <span
  m='947010'>nice</span> <span m='947280'>and</span> <span
  m='947450'>simple</span> <span m='948400'>pi</span> <span
  m='948700'>over</span> <span m='949000'>2</span> <span m='949960'>as</span>
  <span m='950200'>your</span> <span m='950620'>answer.</span> </p><p><span
  m='951040'>So</span> <span m='951200'>you</span> <span m='951300'>can</span>
  <span m='951430'>check</span> <span m='952170'>your</span> <span
  m='952320'>work</span> <span m='952590'>there,</span> <span
  m='952830'>and</span> <span m='952960'>make</span> <span
  m='953150'>sure</span> <span m='954150'>that</span> <span
  m='954300'>you've</span> <span m='954450'>got</span> <span
  m='954660'>out</span> <span m='954890'>pi</span> <span m='955150'>over</span>
  <span m='955330'>2</span> <span m='955520'>at</span> <span
  m='955710'>the</span> <span m='955810'>end.</span> <span m='956210'>And</span>
  <span m='956700'>hopefully,</span> <span m='957460'>if</span> <span
  m='957670'>you</span> <span m='957800'>tried</span> <span m='958120'>to</span>
  <span m='958280'>do</span> <span m='958400'>this</span> <span
  m='959080'>using</span> <span m='959450'>rectangular</span> <span
  m='959970'>coordinates,</span> <span m='960590'>you</span> <span
  m='960790'>also</span> <span m='961080'>came</span> <span
  m='961340'>out</span> <span m='961470'>with</span> <span
  m='961600'>something</span> <span m='962270'>like</span> <span
  m='962560'>this</span> <span m='962730'>as</span> <span
  m='962850'>well.</span> <span m='963040'>In</span> <span
  m='963120'>that</span> <span m='963300'>case,</span> <span
  m='963700'>you</span> <span m='963860'>would</span> <span
  m='963970'>have</span> <span m='964150'>to</span> <span m='964240'>do</span>
  <span m='964360'>a</span> <span m='964430'>trig</span> <span
  m='964720'>substitution</span> <span m='965450'>at</span> <span
  m='965530'>some</span> <span m='965750'>point</span> <span
  m='966050'>to</span> <span m='966630'>evaluate</span> <span
  m='967210'>your</span> <span m='967350'>intervals,</span> <span
  m='967790'>or</span> <span m='968180'>you</span> <span m='968370'>might</span>
  <span m='968520'>have</span> <span m='968630'>an</span> <span
  m='968720'>arcsine</span> <span m='969270'>involved.</span> <span
  m='970330'>Something</span> <span m='970710'>like</span> <span
  m='970910'>that</span> <span m='971190'>will</span> <span
  m='971460'>happen.</span> <span m='973230'>But</span> <span
  m='973460'>it</span> <span m='973550'>should</span> <span
  m='973710'>also</span> <span m='973990'>give</span> <span
  m='974140'>you</span> <span m='974240'>pi</span> <span m='974500'>over</span>
  <span m='974680'>2,</span> <span m='974880'>of</span> <span
  m='975020'>course.</span> <span m='975380'>Because</span> <span
  m='975580'>it's</span> <span m='975780'>the</span> <span
  m='975890'>same</span> <span m='976160'>region,</span> <span
  m='977150'>just</span> <span m='977380'>described</span> <span
  m='977900'>in</span> <span m='977980'>a</span> <span
  m='978050'>different</span> <span m='978400'>way.</span> </p><p><span
  m='978970'>So</span> <span m='979140'>let</span> <span m='979260'>me</span>
  <span m='979360'>quickly</span> <span m='979690'>recap</span> <span
  m='980220'>what</span> <span m='980380'>we</span> <span m='980530'>did.</span>
  <span m='981930'>Way</span> <span m='982620'>back</span> <span
  m='982970'>over</span> <span m='983200'>here,</span> <span
  m='984130'>we</span> <span m='984280'>had</span> <span m='984480'>this</span>
  <span m='984610'>description</span> <span m='985300'>of</span> <span
  m='985400'>this</span> <span m='985620'>region.</span> <span
  m='987200'>So</span> <span m='987320'>it</span> <span m='987410'>was</span>
  <span m='987610'>the</span> <span m='987710'>region</span> <span
  m='989820'>above</span> <span m='990180'>our</span> <span
  m='990290'>paraboloid</span> <span m='991030'>and</span> <span
  m='991170'>below</span> <span m='991460'>a</span> <span
  m='991620'>plane.</span> <span m='992310'>And</span> <span
  m='992480'>so</span> <span m='992600'>when</span> <span
  m='992770'>we're</span> <span m='992940'>setting</span> <span
  m='993320'>this</span> <span m='993500'>up,</span> <span m='995100'>we</span>
  <span m='995190'>have</span> <span m='995280'>to</span> <span
  m='995370'>figure</span> <span m='995670'>out,</span> <span
  m='995840'>in</span> <span m='995910'>order</span> <span m='996160'>to</span>
  <span m='996470'>do</span> <span m='996590'>a</span> <span
  m='996670'>triple</span> <span m='996990'>integral</span> <span
  m='997360'>over</span> <span m='997560'>this</span> <span
  m='997730'>region,</span> <span m='998070'>in</span> <span
  m='998190'>order</span> <span m='998410'>to</span> <span
  m='998520'>find</span> <span m='998800'>its</span> <span
  m='998850'>volume,</span> <span m='1002050'>we</span> <span
  m='1002270'>have</span> <span m='1002360'>to</span> <span
  m='1002460'>pick</span> <span m='1002520'>an</span> <span
  m='1002580'>order</span> <span m='1002870'>of</span> <span
  m='1002950'>integration,</span> <span m='1003440'>and</span> <span
  m='1003510'>then</span> <span m='1003620'>we</span> <span
  m='1003700'>have</span> <span m='1003820'>to</span> <span
  m='1003910'>know</span> <span m='1005270'>what</span> <span
  m='1005620'>the</span> <span m='1005760'>bounds</span> <span
  m='1006240'>are</span> <span m='1006510'>for</span> <span
  m='1006700'>the</span> <span m='1006870'>inside</span> <span
  m='1007900'>in</span> <span m='1008060'>terms</span> <span
  m='1008380'>of</span> <span m='1008470'>the</span> <span
  m='1008570'>outer</span> <span m='1008840'>two</span> <span
  m='1008990'>variables,</span> <span m='1009610'>for</span> <span
  m='1009670'>the</span> <span m='1009760'>middle</span> <span
  m='1009970'>one</span> <span m='1010170'>in</span> <span
  m='1010270'>terms</span> <span m='1010550'>of</span> <span
  m='1010620'>the</span> <span m='1010750'>outermost</span> <span
  m='1011240'>one,</span> <span m='1011410'>and</span> <span
  m='1011530'>so</span> <span m='1011680'>on.</span> </p><p><span
  m='1012370'>So</span> <span m='1012570'>in</span> <span
  m='1012640'>this</span> <span m='1012780'>case,</span> <span
  m='1014380'>that</span> <span m='1014600'>means--</span> <span
  m='1016090'>First,</span> <span m='1016650'>it</span> <span
  m='1016760'>was</span> <span m='1016990'>a</span> <span
  m='1017127'>natural</span> <span m='1017540'>choice</span> <span
  m='1017860'>to</span> <span m='1017950'>make</span> <span m='1018170'>z</span>
  <span m='1020310'>the</span> <span m='1020440'>first</span> <span
  m='1020770'>variable--</span> <span m='1021120'>the</span> <span
  m='1021420'>innermost</span> <span m='1022130'>variable.</span> <span
  m='1022800'>And</span> <span m='1022960'>so</span> <span
  m='1023030'>then</span> <span m='1023150'>after</span> <span
  m='1023450'>that,</span> <span m='1023650'>we</span> <span
  m='1023730'>needed</span> <span m='1023980'>to</span> <span
  m='1024090'>project</span> <span m='1024800'>to</span> <span
  m='1024920'>find</span> <span m='1025240'>the</span> <span
  m='1025310'>relationship</span> <span m='1026644'>in</span> <span
  m='1027070'>the</span> <span m='1027310'>xy-plane</span> <span
  m='1028220'>between</span> <span m='1028490'>the</span> <span
  m='1028620'>other</span> <span m='1028830'>variables.</span> <span
  m='1029580'>Now</span> <span m='1029720'>in</span> <span
  m='1029800'>this</span> <span m='1030000'>case,</span> <span
  m='1032680'>we</span> <span m='1033760'>did</span> <span
  m='1034100'>that</span> <span m='1034390'>by</span> <span
  m='1034510'>solving</span> <span m='1035480'>this</span> <span
  m='1035700'>little</span> <span m='1036790'>algebra</span> <span
  m='1037230'>problem</span> <span m='1037610'>here.</span> <span
  m='1037780'>We</span> <span m='1037910'>solved</span> <span
  m='1038330'>for</span> <span m='1038480'>z</span> <span m='1038870'>in</span>
  <span m='1039010'>the</span> <span m='1039080'>two</span> <span
  m='1039860'>surfaces</span> <span m='1042170'>that</span> <span
  m='1042310'>we</span> <span m='1042440'>were</span> <span
  m='1042980'>given,</span> <span m='1043280'>and</span> <span
  m='1043430'>we</span> <span m='1043560'>set</span> <span
  m='1043830'>them</span> <span m='1043930'>equal</span> <span
  m='1044150'>to</span> <span m='1044290'>each</span> <span
  m='1044430'>other.</span> </p><p><span m='1044650'>And</span> <span
  m='1044715'>so</span> <span m='1044780'>this</span> <span
  m='1044980'>gives</span> <span m='1045210'>us</span> <span
  m='1045670'>a</span> <span m='1045780'>description</span> <span
  m='1046340'>for</span> <span m='1046480'>the</span> <span
  m='1046600'>boundary</span> <span m='1047080'>curve</span> <span
  m='1047420'>for</span> <span m='1047560'>our</span> <span
  m='1047710'>region.</span> <span m='1048310'>And</span> <span
  m='1048510'>because</span> <span m='1048820'>it's</span> <span
  m='1048960'>a</span> <span m='1049030'>nice</span> <span
  m='1049360'>circle,</span> <span m='1051300'>this</span> <span
  m='1051550'>suggested</span> <span m='1052530'>that</span> <span
  m='1052690'>one</span> <span m='1052930'>possibility</span> <span
  m='1053520'>was</span> <span m='1053720'>cylindrical</span> <span
  m='1054240'>coordinates.</span> <span m='1054630'>So</span> <span
  m='1054850'>we</span> <span m='1054960'>went</span> <span
  m='1055130'>ahead,</span> <span m='1055425'>and</span> <span
  m='1055720'>we</span> <span m='1055920'>found</span> <span
  m='1056280'>in</span> <span m='1056670'>cylindrical</span> <span
  m='1056940'>coordinates</span> <span m='1058090'>the</span> <span
  m='1058210'>description</span> <span m='1058840'>of</span> <span
  m='1058960'>this</span> <span m='1059090'>shadow.</span> <span
  m='1059840'>And</span> <span m='1060440'>then</span> <span
  m='1060670'>we</span> <span m='1060860'>used</span> <span
  m='1061750'>the</span> <span m='1061870'>knowledge</span> <span
  m='1062280'>we</span> <span m='1062410'>previously</span> <span
  m='1062940'>had</span> <span m='1063180'>to</span> <span
  m='1063630'>describe</span> <span m='1064090'>the</span> <span
  m='1064170'>whole</span> <span m='1064410'>region</span> <span
  m='1064760'>in</span> <span m='1065010'>cylindrical</span> <span
  m='1065460'>coordinates.</span> </p><p><span m='1066140'>So</span> <span
  m='1066340'>we</span> <span m='1066440'>had</span> <span
  m='1066630'>this</span> <span m='1066810'>description</span> <span
  m='1067290'>of</span> <span m='1067360'>our</span> <span
  m='1067490'>entire</span> <span m='1067870'>region.</span> <span
  m='1068550'>And</span> <span m='1068700'>then</span> <span
  m='1068830'>to</span> <span m='1068900'>compute</span> <span
  m='1069270'>its</span> <span m='1069440'>volume,</span> <span
  m='1069950'>we</span> <span m='1070110'>just</span> <span
  m='1070320'>set</span> <span m='1070540'>up</span> <span
  m='1070990'>the</span> <span m='1071030'>triple</span> <span
  m='1071350'>integral</span> <span m='1071750'>volume</span> <span
  m='1072200'>is</span> <span m='1072320'>equal</span> <span
  m='1072465'>to</span> <span m='1072610'>a</span> <span
  m='1072730'>triple</span> <span m='1073370'>integral</span> <span
  m='1073850'>dV.</span> <span m='1075330'>In</span> <span
  m='1075390'>our</span> <span m='1075580'>case,</span> <span
  m='1075860'>dV--</span> <span m='1076310'>since</span> <span
  m='1076530'>we're</span> <span m='1076650'>in</span> <span
  m='1076990'>cylindrical</span> <span m='1077170'>coordinates--</span> <span
  m='1077720'>that's</span> <span m='1077920'>r</span> <span
  m='1078280'>dz</span> <span m='1078680'>dr</span> <span m='1079030'>d</span>
  <span m='1079160'>theta.</span> <span m='1079890'>We</span> <span
  m='1080050'>put</span> <span m='1080230'>in</span> <span
  m='1080310'>our</span> <span m='1080440'>bounds,</span> <span
  m='1080990'>and</span> <span m='1081170'>then</span> <span
  m='1081270'>we</span> <span m='1081400'>evaluated</span> <span
  m='1081835'>the</span> <span m='1082270'>integral.</span> <span
  m='1084240'>I'll</span> <span m='1084400'>stop</span> <span
  m='1084710'>there.</span> </p>
embedded_media:
  - uid: dced7c939f3e8a37bf220797467940e8
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: qA83eznsKp8
  - uid: e5dd2b4b4d7b4e0c4f1558c7bbc4fc3d
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/qA83eznsKp8/default.jpg'
  - uid: fc98938ba00605f88c7eb1e206aad51f
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_51_300k.mp4'
  - uid: 4c042946d7fdfc825fc49a2b2eb40382
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/volume-in-cylindrical-coordinates/id414355340?i=90322839
  - uid: 2a29842a5395229b58f8b4ecf3f7ee0f
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: qA83eznsKp8
  - uid: e45a066d235559896976c3f7ff5d2515
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: qA83eznsKp8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/session-74-triple-integrals-rectangular-and-cylindrical-coordinates/volume-in-cylindrical-coordinates/qA83eznsKp8.srt
  - uid: 4970e2436032375cea81f818c7c37ede
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: qA83eznsKp8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-a-triple-integrals/session-74-triple-integrals-rectangular-and-cylindrical-coordinates/volume-in-cylindrical-coordinates/qA83eznsKp8.pdf
  - uid: 006afa4623b985df5a6590ade75aba07
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 4758777c88cb63d5f5afc1872b6c3e98
    parent_uid: 17b91cc556d3528d5d73b7b17fe9b427
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
