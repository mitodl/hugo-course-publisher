---
title: Book Stacking
uid: fec9fa7fd42c87782c91e2f8a73b3807
parent_uid: 8de8c902996349cb0873a6ff1a10a492
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-d3f74a0ca5a8/book-stacking
short_url: book-stacking
inline_embed_id: 62645285bookstacking16486195
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1060'>So,</span> <span m='1250'>now</span> <span
  m='1480'>we'll</span> <span m='1690'>look</span> <span m='1940'>at</span>
  <span m='2630'>third</span> <span m='2940'>kind</span> <span
  m='3100'>of</span> <span m='3180'>sum that</span> <span m='3570'>comes</span>
  <span m='3860'>up</span> <span m='4030'>all</span> <span m='4150'>the</span>
  <span m='4240'>time</span> <span m='4450'>called</span> <span
  m='4670'>harmonic</span> <span m='5240'>sums.</span> <span m='6310'>And</span>
  <span m='6410'>we'll</span> <span m='6530'>begin</span> <span
  m='6840'>by</span> <span m='6970'>examining</span> <span m='7500'>an</span>
  <span m='7580'>example</span> <span m='8290'>where</span> <span
  m='8850'>they</span> <span m='9060'>come</span> <span m='9350'>up</span> <span
  m='9540'>really</span> <span m='9800'>directly.</span> <span
  m='10520'>So,</span> <span m='10770'>here's</span> <span m='11010'>the</span>
  <span m='11100'>puzzle.</span> </p><p><span m='12500'>Suppose</span> <span
  m='12940'>that</span> <span m='13050'>I'm</span> <span m='13190'>trying</span>
  <span m='13500'>to</span> <span m='13610'>stack</span> <span
  m='14320'>a</span> <span m='14410'>bunch</span> <span m='14750'>of</span>
  <span m='14900'>books</span> <span m='15570'>on</span> <span
  m='16030'>a</span> <span m='16140'>table.</span> <span m='16560'>Assume</span>
  <span m='16720'>all the</span> <span m='17060'>books</span> <span
  m='17410'>are</span> <span m='18060'>the</span> <span m='18150'>same</span>
  <span m='18630'>size</span> <span m='19020'>and</span> <span
  m='19130'>weight</span> <span m='19450'>and</span> <span
  m='19600'>uniform,</span> <span m='20630'>and</span> <span
  m='20890'>I'd</span> <span m='20990'>like</span> <span m='21210'>to</span>
  <span m='21310'>stack</span> <span m='21670'>them</span> <span
  m='21840'>up</span> <span m='22660'>one</span> <span m='22860'>on</span> <span
  m='22960'>top</span> <span m='23180'>of</span> <span m='23290'>the</span>
  <span m='23440'>other</span> <span m='23720'>in</span> <span
  m='23810'>some</span> <span m='24120'>way.</span> <span m='24860'>And</span>
  <span m='25130'>try</span> <span m='25460'>to</span> <span
  m='25550'>get</span> <span m='26120'>them</span> <span m='26410'>as</span>
  <span m='26700'>far</span> <span m='27150'>out</span> <span
  m='27450'>past</span> <span m='27810'>the</span> <span m='27970'>end</span>
  <span m='28150'>of</span> <span m='28220'>the</span> <span
  m='28340'>table</span> <span m='28720'>as</span> <span m='28840'>I</span>
  <span m='28920'>can</span> <span m='29150'>manage.</span> <span
  m='29910'>Now,</span> <span m='30020'>notice</span> <span m='30390'>in</span>
  <span m='30480'>this</span> <span m='30660'>picture,</span> <span
  m='30950'>it</span> <span m='31030'>seems</span> <span m='31220'>kind</span>
  <span m='31380'>of</span> <span m='31430'>paradoxical.</span> <span
  m='32570'>The</span> <span m='32770'>top</span> <span m='33380'>book,</span>
  <span m='34350'>the</span> <span m='34860'>back</span> <span
  m='35230'>end</span> <span m='35490'>of</span> <span m='35560'>the</span>
  <span m='35690'>top</span> <span m='35980'>book</span> <span
  m='36170'>is</span> <span m='36300'>past</span> <span m='36600'>the</span>
  <span m='36710'>edge</span> <span m='36880'>of</span> <span
  m='36940'>the</span> <span m='37040'>table.</span> </p><p><span
  m='38440'>Is</span> <span m='38660'>it</span> <span m='38800'>possible</span>
  <span m='39470'>to</span> <span m='39590'>do</span> <span
  m='39790'>that?</span> <span m='40060'>Is</span> <span m='40190'>it</span>
  <span m='40300'>possible</span> <span m='40910'>to</span> <span
  m='41850'>get</span> <span m='42220'>the</span> <span m='42380'>top</span>
  <span m='42740'>book,</span> <span m='43495'>the</span> <span
  m='43880'>back</span> <span m='44160'>of</span> <span m='44250'>the</span>
  <span m='44370'>top</span> <span m='44650'>book</span> <span
  m='44840'>past</span> <span m='45110'>the</span> <span m='45240'>edge</span>
  <span m='45370'>of</span> <span m='45450'>the</span> <span
  m='45550'>table?</span> <span m='46090'>And</span> <span m='46240'>how</span>
  <span m='46490'>far</span> <span m='46930'>out</span> <span
  m='47190'>can</span> <span m='47340'>you</span> <span m='47450'>get</span>
  <span m='47990'>the</span> <span m='48080'>further</span> <span
  m='48530'>most</span> <span m='49390'>book</span> <span m='49670'>to</span>
  <span m='49790'>the</span> <span m='49920'>right?</span> <span
  m='50670'>That's</span> <span m='50930'>the</span> <span
  m='51030'>question</span> <span m='51400'>we</span> <span
  m='51500'>want</span> <span m='51710'>to</span> <span m='51750'>ask.</span>
  </p><p><span m='52920'>Well,</span> <span m='53370'>let's</span> <span
  m='54020'>go</span> <span m='54210'>back</span> <span m='54760'>and</span>
  <span m='55760'>do</span> <span m='55970'>it</span> <span m='56120'>for</span>
  <span m='56200'>the</span> <span m='56310'>simplest</span> <span
  m='56730'>case,</span> <span m='57070'>which</span> <span m='57130'>is</span>
  <span m='57220'>one</span> <span m='57460'>book.</span> <span
  m='58010'>So,</span> <span m='58160'>this</span> <span m='58350'>amount</span>
  <span m='59240'>will</span> <span m='59450'>be</span> <span m='59610'>a</span>
  <span m='59650'>function</span> <span m='60050'>of</span> <span
  m='60130'>how</span> <span m='60250'>many</span> <span m='60450'>books</span>
  <span m='61200'>we</span> <span m='61910'>have.</span> <span
  m='62280'>We're</span> <span m='62480'>interested</span> <span
  m='62830'>in</span> <span m='62870'>the</span> <span m='62990'>overhang</span>
  <span m='63940'>using</span> <span m='64260'>n</span> <span
  m='64470'>books.</span> <span m='64709'>Overhang</span> <span
  m='65200'>is</span> <span m='65310'>the</span> <span m='65450'>amount</span>
  <span m='66230'>past</span> <span m='66690'>the</span> <span
  m='66850'>edge</span> <span m='67100'>of</span> <span m='67160'>the</span>
  <span m='67270'>table</span> <span m='68040'>that</span> <span
  m='68260'>the</span> <span m='68430'>rightmost</span> <span
  m='70040'>end</span> <span m='70360'>of</span> <span m='70460'>any</span>
  <span m='70670'>book</span> <span m='71080'>can</span> <span
  m='71310'>be.</span> </p><p><span m='73360'>What</span> <span
  m='73680'>do</span> <span m='73700'>you</span> <span m='73790'>do</span> <span
  m='73930'>with</span> <span m='74060'>one</span> <span m='74330'>book?</span>
  <span m='74690'>Well,</span> <span m='74880'>with</span> <span
  m='75020'>one</span> <span m='75250'>book,</span> <span
  m='75490'>assuming</span> <span m='75880'>that</span> <span
  m='76020'>the</span> <span m='76120'>thing</span> <span m='76270'>is</span>
  <span m='76340'>uniform,</span> <span m='76820'>the</span> <span
  m='76880'>center</span> <span m='77200'>of</span> <span m='77290'>mass</span>
  <span m='77620'>in</span> <span m='77850'>the</span> <span
  m='77910'>middle.</span> <span m='78380'>Let's assume</span> <span
  m='78660'>the</span> <span m='78750'>book</span> <span m='78980'>is</span>
  <span m='79090'>of</span> <span m='79200'>length</span> <span
  m='79460'>1.</span> <span m='80990'>So,</span> <span m='81440'>the</span>
  <span m='81610'>center</span> <span m='81950'>of</span> <span
  m='82020'>mass</span> <span m='82320'>of</span> <span m='82420'>the</span>
  <span m='82500'>book</span> <span m='82770'>is at</span> <span
  m='82910'>halfway</span> <span m='83460'>down</span> <span
  m='83720'>the</span> <span m='83800'>book.</span> <span m='84090'>And</span>
  <span m='84220'>if</span> <span m='84340'>that</span> <span
  m='84560'>center</span> <span m='84970'>of</span> <span m='85050'>mass</span>
  <span m='85500'>is</span> <span m='85660'>not</span> <span
  m='85960'>over</span> <span m='86230'>the</span> <span m='86360'>table,</span>
  <span m='87260'>then</span> <span m='87400'>you're</span> <span
  m='87500'>going</span> <span m='87630'>to</span> <span m='87680'>have</span>
  <span m='87910'>torque</span> <span m='88690'>and</span> <span
  m='89030'>the</span> <span m='89100'>book</span> <span m='89300'>is</span>
  <span m='89400'>going</span> <span m='89520'>to</span> <span
  m='89570'>fall.</span> </p><p><span m='90970'>So,</span> <span
  m='91550'>you've</span> <span m='91750'>got</span> <span m='91950'>to</span>
  <span m='92620'>keep</span> <span m='92920'>the</span> <span
  m='93000'>center</span> <span m='93320'>of</span> <span m='93410'>mass</span>
  <span m='93740'>supported.</span> <span m='94550'>And</span> <span
  m='94780'>the</span> <span m='94850'>way</span> <span m='95000'>to</span>
  <span m='95080'>get</span> <span m='95280'>the</span> <span
  m='95360'>largest</span> <span m='95850'>overhang</span> <span
  m='96660'>is</span> <span m='96870'>to</span> <span m='96960'>have</span>
  <span m='97190'>the</span> <span m='97260'>center</span> <span
  m='97580'>of</span> <span m='97650'>mass</span> <span m='98000'>right</span>
  <span m='98380'>at</span> <span m='98590'>the</span> <span
  m='98730'>edge</span> <span m='98920'>of</span> <span m='98990'>the</span>
  <span m='99090'>table</span> <span m='99470'>here.</span> <span
  m='100500'>And</span> <span m='100680'>in</span> <span m='100780'>that</span>
  <span m='101000'>case,</span> <span m='101610'>you</span> <span
  m='101790'>can</span> <span m='102100'>get</span> <span m='102320'>the</span>
  <span m='102390'>book</span> <span m='102650'>to</span> <span
  m='102750'>stick</span> <span m='103070'>out</span> <span
  m='103220'>half</span> <span m='103470'>a</span> <span m='103530'>book</span>
  <span m='103800'>length</span> <span m='104400'>without</span> <span
  m='104840'>falling.</span> <span m='106030'>And</span> <span
  m='106720'>what</span> <span m='106910'>that</span> <span
  m='107120'>tells</span> <span m='107440'>us</span> <span m='107700'>is</span>
  <span m='108050'>that</span> <span m='108870'>the</span> <span
  m='109310'>one</span> <span m='109670'>book</span> <span
  m='109950'>overhang</span> <span m='110300'>is</span> <span
  m='110590'>1/2.</span> <span m='111290'>It'll</span> <span
  m='111490'>balance</span> <span m='112610'>with</span> <span
  m='112800'>the</span> <span m='112930'>furthest</span> <span
  m='114400'>end</span> <span m='114720'>out</span> <span
  m='115590'>exactly</span> <span m='116160'>if</span> <span
  m='116240'>the</span> <span m='116330'>center</span> <span
  m='116660'>of</span> <span m='116740'>mass</span> <span m='116960'>is</span>
  <span m='117070'>on</span> <span m='117180'>the</span> <span
  m='117330'>edge,</span> <span m='118120'>and</span> <span m='118310'>I</span>
  <span m='118360'>get</span> <span m='118670'>a</span> <span
  m='118740'>half</span> <span m='118930'>a</span> <span m='119120'>book</span>
  <span m='119410'>length</span> <span m='119630'>for</span> <span
  m='119870'>unit</span> <span m='120230'>overhang.</span> </p><p><span
  m='121950'>Let's</span> <span m='122190'>proceed</span> <span
  m='122630'>recursively</span> <span m='123420'>or</span> <span
  m='123670'>inductively.</span> <span m='124870'>Suppose</span> <span
  m='125260'>I</span> <span m='125320'>have</span> <span m='125520'>n</span>
  <span m='125850'>books.</span> <span m='126520'>How</span> <span
  m='126750'>am</span> <span m='126850'>I</span> <span m='126880'>going</span>
  <span m='127010'>to</span> <span m='127060'>get</span> <span
  m='127270'>them</span> <span m='127410'>to</span> <span
  m='127520'>balance?</span> <span m='128310'>Well,</span> <span
  m='128539'>let's</span> <span m='128759'>assume</span> <span
  m='129340'>that</span> <span m='129479'>I</span> <span
  m='129570'>figured</span> <span m='129970'>out</span> <span
  m='130180'>how</span> <span m='130400'>to</span> <span m='130479'>get</span>
  <span m='130729'>a</span> <span m='130850'>so-called</span> <span
  m='131340'>stable</span> <span m='131830'>stack</span> <span
  m='132230'>of</span> <span m='132340'>n</span> <span m='132520'>books,</span>
  <span m='132910'>which</span> <span m='133180'>if</span> <span
  m='133340'>I</span> <span m='133410'>completely</span> <span
  m='133970'>supported</span> <span m='134270'>it</span> <span
  m='134570'>flat</span> <span m='134840'>on</span> <span m='134960'>the</span>
  <span m='135050'>table,</span> <span m='135910'>it</span> <span
  m='136040'>wouldn't</span> <span m='136350'>fall</span> <span
  m='136660'>over.</span> <span m='137870'>And</span> <span
  m='138120'>I'm</span> <span m='138190'>going</span> <span m='138340'>to</span>
  <span m='138440'>show</span> <span m='138620'>you</span> <span
  m='138700'>how</span> <span m='138950'>to</span> <span m='139030'>go</span>
  <span m='139200'>from</span> <span m='139390'>n</span> <span
  m='139590'>to</span> <span m='139680'>n</span> <span m='139850'>plus</span>
  <span m='140110'>1,</span> <span m='140380'>which</span> <span
  m='140570'>is</span> <span m='140680'>how</span> <span m='140780'>you</span>
  <span m='140960'>construct</span> <span m='141500'>an</span> <span
  m='141600'>arbitrarily</span> <span m='142580'>large</span> <span
  m='143130'>stack</span> <span m='143500'>of</span> <span
  m='143640'>books</span> <span m='143940'>that</span> <span
  m='144060'>won't</span> <span m='144290'>fall</span> <span
  m='144630'>over.</span> </p><p><span m='145330'>Well,</span> <span
  m='146050'>if</span> <span m='146210'>the</span> <span m='146300'>stack</span>
  <span m='147090'>completely</span> <span m='147620'>resting</span> <span
  m='147970'>on</span> <span m='148050'>the</span> <span m='148170'>table</span>
  <span m='148570'>won't</span> <span m='148800'>fall</span> <span
  m='149170'>over,</span> <span m='149430'>that</span> <span
  m='149700'>means</span> <span m='150130'>that</span> <span
  m='150450'>if</span> <span m='151910'>I</span> <span m='152060'>have</span>
  <span m='152280'>the</span> <span m='152360'>center</span> <span
  m='152780'>of</span> <span m='152860'>mass</span> <span m='153250'>of</span>
  <span m='153460'>it</span> <span m='154130'>past</span> <span
  m='154520'>the</span> <span m='154670'>edge</span> <span m='154860'>of</span>
  <span m='154930'>the</span> <span m='155030'>table,</span> <span
  m='156020'>by</span> <span m='156150'>definition</span> <span
  m='156670'>of</span> <span m='156740'>the</span> <span
  m='156830'>center</span> <span m='157230'>of</span> <span
  m='157310'>mass,</span> <span m='158080'>there's</span> <span
  m='158250'>going</span> <span m='158410'>to</span> <span m='158470'>be</span>
  <span m='158960'>an</span> <span m='159060'>equal</span> <span
  m='159370'>amount</span> <span m='159610'>of</span> <span
  m='159690'>weight</span> <span m='159930'>on</span> <span
  m='160040'>both</span> <span m='160260'>sides</span> <span
  m='160570'>of</span> <span m='160650'>the</span> <span
  m='160740'>center</span> <span m='161110'>of</span> <span
  m='161180'>mass,</span> <span m='161540'>and</span> <span
  m='161650'>the</span> <span m='161740'>thing</span> <span m='161960'>is</span>
  <span m='162120'>going</span> <span m='162310'>to</span> <span
  m='162390'>fall</span> <span m='162820'>off</span> <span m='163020'>the</span>
  <span m='163170'>edge</span> <span m='163310'>of</span> <span
  m='163390'>the</span> <span m='163480'>table</span> <span m='163800'>by</span>
  <span m='163910'>the</span> <span m='164040'>same</span> <span
  m='164300'>reasoning</span> <span m='165040'>as</span> <span
  m='165170'>we</span> <span m='165290'>did</span> <span m='165480'>for</span>
  <span m='165610'>one</span> <span m='165870'>book.</span> <span
  m='166620'>So,</span> <span m='167070'>the</span> <span
  m='167820'>stable</span> <span m='168480'>and</span> <span m='168680'>n
  stack--</span> <span m='169070'>stable</span> <span m='169460'>in</span> <span
  m='169520'>the</span> <span m='169600'>sense</span> <span
  m='170030'>that</span> <span m='170320'>it</span> <span
  m='170520'>won't</span> <span m='170880'>fall</span> <span
  m='171240'>over</span> <span m='171500'>of</span> <span m='171800'>self</span>
  <span m='172390'>if</span> <span m='172580'>it</span> <span
  m='172700'>was</span> <span m='173580'>lying</span> <span
  m='173980'>completely</span> <span m='174460'>over</span> <span
  m='174680'>the</span> <span m='174810'>table.</span> <span
  m='175300'>In</span> <span m='175400'>fact,</span> <span m='175600'>it</span>
  <span m='175660'>won't</span> <span m='175890'>fall</span> <span
  m='176210'>over</span> <span m='176710'>as</span> <span m='176940'>long</span>
  <span m='177150'>as</span> <span m='177340'>its</span> <span
  m='177670'>center</span> <span m='178100'>of</span> <span
  m='178200'>mass</span> <span m='179060'>is</span> <span m='179390'>over</span>
  <span m='179650'>the</span> <span m='179790'>table.</span> <span
  m='180260'>And</span> <span m='180400'>to</span> <span m='180490'>get</span>
  <span m='180940'>it</span> <span m='181060'>out</span> <span
  m='181380'>the</span> <span m='181520'>furthest</span> <span
  m='181980'>amount</span> <span m='182270'>to</span> <span
  m='182350'>the</span> <span m='182500'>right,</span> <span
  m='183170'>what</span> <span m='183400'>I'm</span> <span
  m='183480'>going</span> <span m='183640'>to</span> <span m='183710'>do</span>
  <span m='184040'>is</span> <span m='184210'>put</span> <span
  m='184440'>it</span> <span m='184880'>at</span> <span m='185070'>the</span>
  <span m='185270'>edge</span> <span m='185460'>of</span> <span
  m='185520'>the</span> <span m='185630'>table.</span> </p><p><span
  m='187500'>So,</span> <span m='187690'>now</span> <span m='187980'>I</span>
  <span m='188110'>know</span> <span m='188370'>how</span> <span
  m='188590'>to</span> <span m='188710'>place</span> <span m='190230'>a</span>
  <span m='190360'>stable</span> <span m='190800'>stack</span> <span
  m='191250'>of</span> <span m='191430'>n</span> <span m='191670'>books</span>
  <span m='192170'>to</span> <span m='192290'>get</span> <span
  m='192600'>the</span> <span m='192690'>largest</span> <span
  m='193170'>overhang</span> <span m='193730'>out</span> <span
  m='193970'>of</span> <span m='194110'>it.</span> <span m='194850'>What</span>
  <span m='195170'>next?</span> <span m='197050'>Well,</span> <span
  m='198050'>let's</span> <span m='198400'>consider</span> <span
  m='198830'>n</span> <span m='198970'>plus</span> <span m='199200'>1</span>
  <span m='199400'>books.</span> <span m='199980'>And</span> <span
  m='200230'>what</span> <span m='200360'>do</span> <span m='200480'>I</span>
  <span m='200550'>have</span> <span m='200800'>to</span> <span
  m='200930'>do?</span> <span m='201090'>So,</span> <span m='201260'>I'm</span>
  <span m='201400'>trying</span> <span m='201580'>to</span> <span
  m='201650'>do</span> <span m='201760'>the</span> <span m='201890'>same</span>
  <span m='202230'>deal.</span> <span m='202530'>Suppose</span> <span
  m='202980'>that I</span> <span m='203110'>have</span> <span
  m='203370'>a</span> <span m='203420'>nice</span> <span m='203710'>stack</span>
  <span m='204020'>of</span> <span m='204110'>n</span> <span
  m='204330'>books</span> <span m='204590'>and</span> <span m='204710'>I</span>
  <span m='204780'>know</span> <span m='205350'>how</span> <span
  m='205600'>to</span> <span m='205870'>support</span> <span
  m='206360'>it</span> <span m='206480'>so</span> <span m='206640'>it</span>
  <span m='206690'>won't</span> <span m='206940'>tip</span> <span
  m='207150'>over.</span> <span m='208490'>And</span> <span m='208700'>I</span>
  <span m='208750'>now</span> <span m='209010'>have</span> <span
  m='209810'>n</span> <span m='210050'>plus</span> <span m='210250'>1</span>
  <span m='210430'>books</span> <span m='210690'>and I</span> <span
  m='210770'>want</span> <span m='210970'>to</span> <span m='211020'>get</span>
  <span m='211180'>out</span> <span m='211370'>further.</span> <span
  m='211900'>What</span> <span m='212060'>do</span> <span m='212150'>I</span>
  <span m='212210'>have</span> <span m='212430'>to</span> <span
  m='212560'>do?</span> </p><p><span m='213170'>Well,</span> <span
  m='213830'>by</span> <span m='214290'>the</span> <span m='214380'>basic</span>
  <span m='214780'>reasoning</span> <span m='215560'>that</span> <span
  m='215710'>we</span> <span m='215800'>just</span> <span m='215980'>went</span>
  <span m='216170'>through,</span> <span m='216480'>now</span> <span
  m='216770'>the</span> <span m='216870'>center</span> <span
  m='217250'>of</span> <span m='217340'>mass</span> <span m='217640'>of</span>
  <span m='217710'>the</span> <span m='217790'>whole</span> <span
  m='218130'>stack</span> <span m='218480'>of</span> <span m='218580'>n</span>
  <span m='218720'>plus</span> <span m='218960'>1</span> <span
  m='219170'>books</span> <span m='219380'>has</span> <span m='219540'>to</span>
  <span m='219630'>be</span> <span m='219760'>over</span> <span
  m='219920'>the</span> <span m='220050'>edge</span> <span m='220210'>of</span>
  <span m='220260'>the</span> <span m='220360'>table.</span> <span
  m='221090'>That's</span> <span m='221310'>the</span> <span
  m='221400'>way</span> <span m='221570'>I'm</span> <span
  m='221650'>going</span> <span m='221790'>to</span> <span m='221840'>get</span>
  <span m='222010'>out</span> <span m='222280'>furthest.</span> <span
  m='222820'>So,</span> <span m='223030'>I</span> <span m='223120'>know</span>
  <span m='223400'>where</span> <span m='224080'>the</span> <span
  m='224160'>center</span> <span m='224560'>of</span> <span
  m='224650'>mass</span> <span m='224950'>of</span> <span m='225050'>n</span>
  <span m='225260'>plus</span> <span m='225540'>books</span> <span
  m='225820'>is</span> <span m='225870'>going</span> <span m='226080'>to</span>
  <span m='226140'>be,</span> <span m='226740'>at</span> <span
  m='226950'>the</span> <span m='227090'>edge</span> <span m='227290'>of</span>
  <span m='227360'>the</span> <span m='227460'>table.</span> </p><p><span
  m='229210'>What</span> <span m='229490'>about</span> <span
  m='229920'>the</span> <span m='230000'>center</span> <span
  m='230400'>of</span> <span m='230480'>mass</span> <span m='230800'>of</span>
  <span m='230900'>the</span> <span m='231030'>top</span> <span
  m='231500'>n</span> <span m='231810'>books?</span> <span
  m='232310'>Well,</span> <span m='232550'>I</span> <span m='232610'>need</span>
  <span m='232890'>them</span> <span m='233090'>to</span> <span
  m='233200'>be</span> <span m='233340'>supported.</span> <span m='234100'>I
  need</span> <span m='234430'>their</span> <span m='234550'>center</span> <span
  m='235010'>of</span> <span m='235100'>mass</span> <span m='235460'>to</span>
  <span m='235570'>be</span> <span m='235720'>supported.</span> <span
  m='236650'>They'll be</span> <span m='236950'>supported,</span> <span
  m='237460'>providing</span> <span m='238000'>their</span> <span
  m='238120'>center</span> <span m='238520'>of</span> <span
  m='238620'>mass</span> <span m='239020'>is</span> <span m='239260'>over</span>
  <span m='239570'>the</span> <span m='239710'>bottom</span> <span
  m='240110'>book</span> <span m='240390'>somewhere.</span> <span
  m='241180'>And</span> <span m='241450'>the</span> <span m='241540'>way</span>
  <span m='241700'>to</span> <span m='241790'>get</span> <span
  m='241960'>it</span> <span m='242060'>out</span> <span
  m='242250'>furthest</span> <span m='242810'>is</span> <span
  m='242940'>to</span> <span m='243020'>have</span> <span m='243300'>it</span>
  <span m='243450'>over</span> <span m='244090'>the</span> <span
  m='244270'>right</span> <span m='244620'>edge</span> <span
  m='244960'>of</span> <span m='245060'>the</span> <span
  m='245150'>bottom</span> <span m='245520'>book.</span> </p><p><span
  m='246300'>So,</span> <span m='246540'>I'm</span> <span
  m='246700'>going</span> <span m='246870'>to</span> <span m='246930'>put</span>
  <span m='247600'>the</span> <span m='247870'>center</span> <span
  m='248320'>of</span> <span m='248420'>mass</span> <span m='248920'>of</span>
  <span m='249140'>the</span> <span m='250480'>top</span> <span
  m='250840'>n</span> <span m='251170'>books</span> <span m='252230'>at</span>
  <span m='252450'>the</span> <span m='252630'>edge</span> <span
  m='252980'>of</span> <span m='253130'>the</span> <span m='253310'>n</span>
  <span m='253430'>plus</span> <span m='253720'>first</span> <span
  m='253970'>book</span> <span m='254230'>here.</span> <span
  m='256320'>And</span> <span m='256630'>that</span> <span
  m='256880'>means</span> <span m='257200'>that the</span> <span
  m='257490'>incremental</span> <span m='258320'>overhang</span> <span
  m='258665'>that</span> <span m='259010'>I</span> <span m='259140'>get,</span>
  <span m='259399'>the</span> <span m='259540'>increase</span> <span
  m='260060'>in</span> <span m='260160'>overhang</span> <span
  m='260700'>that</span> <span m='260820'>I</span> <span m='260890'>get</span>
  <span m='261200'>by</span> <span m='261459'>adding</span> <span
  m='261810'>one</span> <span m='262019'>more</span> <span
  m='262260'>book,</span> <span m='263130'>we can</span> <span
  m='263390'>call</span> <span m='263700'>the</span> <span
  m='263800'>delta</span> <span m='264320'>overhang.</span> <span
  m='265260'>And</span> <span m='265480'>it's</span> <span m='265740'>the</span>
  <span m='265860'>distance</span> <span m='266500'>between</span> <span
  m='267360'>the</span> <span m='267660'>center</span> <span
  m='268110'>of</span> <span m='268180'>mass</span> <span m='268480'>of</span>
  <span m='268570'>n</span> <span m='268730'>plus</span> <span
  m='268990'>1</span> <span m='269250'>books</span> <span m='269850'>and</span>
  <span m='270070'>the</span> <span m='270150'>center</span> <span
  m='270550'>of</span> <span m='270640'>mass</span> <span m='270940'>of</span>
  <span m='271040'>n</span> <span m='271310'>books.</span> <span
  m='272460'>N</span> <span m='273130'>here,</span> <span m='273500'>and
  n</span> <span m='273840'>plus</span> <span m='274070'>1</span> <span
  m='274280'>here.</span> </p><p><span m='275460'>Well,</span> <span
  m='275660'>let's</span> <span m='275850'>see</span> <span
  m='275940'>what's</span> <span m='276140'>going</span> <span
  m='276380'>on.</span> <span m='276930'>The</span> <span
  m='277040'>center</span> <span m='277420'>of</span> <span
  m='277530'>mass</span> <span m='277950'>of</span> <span m='278330'>the</span>
  <span m='279240'>n</span> <span m='279450'>books</span> <span
  m='279790'>is</span> <span m='280040'>at</span> <span m='280150'>some</span>
  <span m='280310'>location</span> <span m='280890'>here.</span> <span
  m='281330'>And</span> <span m='281490'>the</span> <span
  m='281590'>center</span> <span m='281990'>of</span> <span
  m='282070'>mass</span> <span m='282530'>of</span> <span m='282790'>the</span>
  <span m='283630'>bottom</span> <span m='284010'>book</span> <span
  m='284540'>is</span> <span m='285020'>halfway</span> <span
  m='286100'>away,</span> <span m='286800'>half</span> <span m='287070'>a</span>
  <span m='287120'>book</span> <span m='287380'>length</span> <span
  m='287580'>away</span> <span m='288240'>from</span> <span
  m='288740'>where</span> <span m='289060'>the</span> <span m='289380'>n</span>
  <span m='289600'>books</span> <span m='289920'>are</span> <span
  m='290000'>balanced</span> <span m='290480'>on</span> <span
  m='290590'>the</span> <span m='290770'>edge</span> <span m='291320'>of</span>
  <span m='291480'>the</span> <span m='291560'>bottom</span> <span
  m='291920'>book.</span> <span m='292580'>So,</span> <span
  m='292750'>the</span> <span m='292860'>center</span> <span
  m='293220'>of</span> <span m='293290'>mass</span> <span m='293560'>of</span>
  <span m='293630'>the</span> <span m='293760'>n</span> <span
  m='293950'>books</span> <span m='294270'>is</span> <span
  m='294400'>here.</span> <span m='294970'>The</span> <span
  m='295080'>center</span> <span m='295440'>of</span> <span
  m='295500'>mass</span> <span m='295750'>of</span> <span m='295830'>the</span>
  <span m='295910'>bottom</span> <span m='296210'>book</span> <span
  m='296450'>is</span> <span m='296640'>there.</span> <span
  m='297260'>The</span> <span m='297360'>distance</span> <span
  m='297750'>between</span> <span m='298120'>them</span> <span
  m='298280'>is</span> <span m='298370'>1/2.</span> </p><p><span
  m='300060'>And</span> <span m='300280'>I</span> <span m='300400'>need</span>
  <span m='300830'>the</span> <span m='301020'>table</span> <span
  m='302020'>to</span> <span m='302200'>be</span> <span m='302540'>at</span>
  <span m='302690'>the</span> <span m='302780'>balance</span> <span
  m='303340'>point</span> <span m='304060'>between</span> <span
  m='304530'>the</span> <span m='304680'>n</span> <span m='304870'>books</span>
  <span m='305430'>and</span> <span m='305500'>the</span> <span
  m='305570'>one</span> <span m='305820'>book.</span> <span
  m='306370'>That's</span> <span m='306530'>where</span> <span
  m='306680'>the</span> <span m='306790'>center</span> <span
  m='307170'>of</span> <span m='307260'>mass</span> <span m='307500'>of</span>
  <span m='307570'>the</span> <span m='307700'>n</span> <span
  m='307820'>plus</span> <span m='308070'>1</span> <span m='308300'>books</span>
  <span m='308600'>will</span> <span m='308780'>be.</span> <span
  m='309400'>So,</span> <span m='309590'>I</span> <span m='309680'>need</span>
  <span m='309900'>to</span> <span m='309990'>calculate</span> <span
  m='310530'>amount</span> <span m='310860'>that's</span> <span
  m='311130'>going</span> <span m='311260'>to</span> <span m='311320'>be,</span>
  <span m='311670'>the</span> <span m='311930'>increase</span> <span
  m='312185'>in</span> <span m='312440'>overhang.</span> <span
  m='312980'>So,</span> <span m='313130'>let's</span> <span
  m='313370'>abstract</span> <span m='314020'>it</span> <span
  m='314070'>a</span> <span m='314120'>little</span> <span
  m='314360'>bit.</span> </p><p><span m='315040'>The</span> <span
  m='315180'>delta</span> <span m='315470'>overhang</span> <span
  m='315910'>is</span> <span m='316020'>the</span> <span
  m='316140'>distance</span> <span m='316560'>from</span> <span
  m='316690'>the</span> <span m='316810'>n</span> <span m='317030'>book</span>
  <span m='317500'>to</span> <span m='317600'>the</span> <span
  m='317720'>n</span> <span m='317850'>plus</span> <span m='318250'>1</span>
  <span m='318510'>book</span> <span m='318870'>centers</span> <span
  m='319300'>of</span> <span m='319430'>mass.</span> <span m='320230'>And</span>
  <span m='320490'>if</span> <span m='320600'>we</span> <span
  m='320710'>think</span> <span m='320890'>of</span> <span
  m='320970'>this</span> <span m='321150'>as</span> <span m='321310'>a</span>
  <span m='321370'>balancing</span> <span m='321950'>diagram,</span> <span
  m='322980'>there's</span> <span m='323140'>the</span> <span
  m='323290'>n</span> <span m='323510'>books.</span> <span m='324050'>Or</span>
  <span m='324240'>at</span> <span m='324310'>least,</span> <span
  m='324610'>there's</span> <span m='324790'>the</span> <span
  m='324880'>center</span> <span m='325230'>of</span> <span
  m='325310'>mass</span> <span m='325590'>of</span> <span m='325680'>the</span>
  <span m='325800'>n</span> <span m='325980'>books.</span> <span
  m='326310'>There's</span> <span m='326530'>the</span> <span
  m='326630'>center</span> <span m='326980'>of</span> <span
  m='327070'>mass</span> <span m='327360'>of</span> <span m='327440'>the</span>
  <span m='327520'>1</span> <span m='327800'>book,</span> <span
  m='328110'>their</span> <span m='328230'>distance</span> <span
  m='328650'>1/2</span> <span m='329220'>apart,</span> <span
  m='329630'>which</span> <span m='329820'>we</span> <span
  m='329950'>said.</span> <span m='330730'>And</span> <span
  m='330970'>they</span> <span m='331110'>have</span> <span m='331330'>to</span>
  <span m='331430'>balance</span> <span m='331980'>at</span> <span
  m='332120'>the</span> <span m='332280'>edge</span> <span m='332500'>of</span>
  <span m='332560'>the</span> <span m='332680'>table.</span> </p><p><span
  m='333320'>So,</span> <span m='333550'>think</span> <span m='333770'>of</span>
  <span m='333870'>the</span> <span m='334000'>edge</span> <span
  m='334190'>of</span> <span m='334250'>the</span> <span m='334340'>table</span>
  <span m='334710'>as</span> <span m='334830'>the</span> <span
  m='334930'>pivot</span> <span m='335310'>point</span> <span
  m='336470'>and</span> <span m='336830'>it's</span> <span
  m='337060'>there.</span> <span m='337410'>And</span> <span m='337540'>I</span>
  <span m='337590'>need</span> <span m='337900'>to</span> <span
  m='337990'>calculate,</span> <span m='338660'>where</span> <span
  m='339000'>is</span> <span m='339100'>that</span> <span
  m='339310'>pivot</span> <span m='339640'>point?</span> <span
  m='340260'>How</span> <span m='340380'>do</span> <span m='340540'>I</span>
  <span m='340610'>get</span> <span m='340920'>this</span> <span
  m='341600'>fulcrum</span> <span m='342750'>or</span> <span
  m='343020'>this</span> <span m='343740'>balance</span> <span
  m='344360'>beam</span> <span m='344650'>to</span> <span
  m='344760'>balance</span> <span m='345290'>with</span> <span
  m='345460'>weight</span> <span m='345760'>n</span> <span
  m='345990'>here</span> <span m='346310'>and</span> <span
  m='346400'>weight</span> <span m='346960'>1</span> <span
  m='347310'>there,</span> <span m='347820'>when</span> <span
  m='348000'>their</span> <span m='348450'>total</span> <span
  m='348740'>length</span> <span m='348970'>apart</span> <span
  m='349260'>is</span> <span m='349370'>1/2.</span> <span
  m='350120'>What's</span> <span m='350620'>this</span> <span
  m='350880'>distance?</span> <span m='352000'>That</span> <span
  m='352270'>distance</span> <span m='352680'>is</span> <span
  m='352800'>the</span> <span m='352900'>delta</span> <span
  m='353280'>that</span> <span m='353420'>I'm</span> <span
  m='353500'>trying</span> <span m='353690'>to</span> <span
  m='353740'>calculate.</span> </p><p><span m='354550'>Well,</span> <span
  m='355270'>you</span> <span m='355450'>just</span> <span
  m='355720'>know</span> <span m='355890'>from</span> <span
  m='356700'>physics</span> <span m='357340'>that</span> <span
  m='357540'>the</span> <span m='357630'>balance</span> <span
  m='358060'>point</span> <span m='358480'>is</span> <span
  m='359460'>going</span> <span m='359640'>to</span> <span m='359710'>be</span>
  <span m='361280'>the</span> <span m='361490'>distance</span> <span
  m='361940'>1/2</span> <span m='362390'>divided</span> <span
  m='363030'>by</span> <span m='363990'>the</span> <span m='364240'>sum</span>
  <span m='365010'>of</span> <span m='365210'>n</span> <span
  m='365450'>and</span> <span m='365590'>n</span> <span m='365730'>plus</span>
  <span m='366010'>1.</span> <span m='367380'>I</span> <span
  m='367480'>need</span> <span m='367890'>the</span> <span m='368380'>n</span>
  <span m='368670'>times</span> <span m='369030'>this</span> <span
  m='369230'>amount</span> <span m='369920'>to</span> <span
  m='370070'>equal</span> <span m='370470'>1</span> <span
  m='370940'>times</span> <span m='371270'>that</span> <span
  m='371500'>amount.</span> <span m='372060'>And</span> <span
  m='372070'>if</span> <span m='372190'>you</span> <span m='372330'>check</span>
  <span m='372600'>that</span> <span m='372800'>out,</span> <span
  m='373220'>it</span> <span m='373430'>means</span> <span
  m='373740'>that</span> <span m='373840'>delta</span> <span
  m='374570'>is</span> <span m='374790'>1/2</span> <span m='375710'>over</span>
  <span m='376230'>n</span> <span m='376410'>plus</span> <span
  m='376720'>1.</span> <span m='377330'>Or</span> <span
  m='377580'>simplifying,</span> <span m='378150'>1</span> <span
  m='378540'>over</span> <span m='378940'>twice</span> <span m='379400'>n</span>
  <span m='379610'>plus</span> <span m='379910'>1.</span> <span
  m='380740'>You</span> <span m='380850'>should</span> <span
  m='381200'>stare</span> <span m='381530'>at</span> <span
  m='381600'>that</span> <span m='381800'>diagram</span> <span
  m='382250'>a</span> <span m='382290'>little</span> <span m='382500'>bit</span>
  <span m='382660'>and</span> <span m='382730'>remember</span> <span
  m='383120'>your</span> <span m='383280'>elementary</span> <span
  m='383770'>physics</span> <span m='384240'>to</span> <span
  m='384380'>realize</span> <span m='385280'>the</span> <span
  m='385640'>reasoning</span> <span m='386000'>behind</span> <span
  m='386660'>the</span> <span m='386810'>formula</span> <span
  m='387350'>for</span> <span m='387500'>delta.</span> </p><p><span
  m='389960'>Well,</span> <span m='390220'>now I'm</span> <span
  m='390450'>done</span> <span m='390910'>because</span> <span
  m='391390'>basically,</span> <span m='391930'>I've</span> <span
  m='391990'>just</span> <span m='392210'>figured</span> <span
  m='392490'>out</span> <span m='392700'>that</span> <span m='392860'>the</span>
  <span m='392970'>increase</span> <span m='393245'>is</span> <span
  m='393520'>this</span> <span m='393730'>delta</span> <span
  m='394050'>overhang.</span> <span m='394610'>And</span> <span
  m='394850'>now</span> <span m='395000'>I</span> <span m='395090'>know</span>
  <span m='395290'>what</span> <span m='395480'>it</span> <span
  m='395590'>is.</span> <span m='395780'>It's</span> <span m='395930'>1</span>
  <span m='396270'>over</span> <span m='396570'>twice</span> <span
  m='396940'>n</span> <span m='397140'>plus</span> <span m='397410'>1.</span>
  <span m='398720'>And</span> <span m='399120'>so,</span> <span
  m='399370'>what</span> <span m='399530'>I</span> <span m='399600'>can</span>
  <span m='399810'>conclude</span> <span m='400300'>is</span> <span
  m='400500'>that</span> <span m='400670'>the</span> <span
  m='400800'>overhang</span> <span m='401430'>of</span> <span
  m='401600'>n</span> <span m='401830'>books,</span> <span m='402730'>B1</span>
  <span m='403180'>is</span> <span m='403380'>1/2</span> <span
  m='404470'>and</span> <span m='404680'>Bn</span> <span m='405060'>plus</span>
  <span m='405370'>1</span> <span m='405670'>is</span> <span
  m='405860'>Bn</span> <span m='406400'>plus</span> <span m='407220'>1</span>
  <span m='407570'>over</span> <span m='407980'>twice</span> <span
  m='408450'>n</span> <span m='408660'>plus</span> <span m='408950'>1.</span>
  <span m='409560'>So</span> <span m='409680'>this</span> <span
  m='409880'>is</span> <span m='410000'>a</span> <span
  m='410080'>recursive</span> <span m='410590'>definition</span> <span
  m='411210'>of</span> <span m='411390'>Bn,</span> <span m='411890'>but</span>
  <span m='412030'>it's</span> <span m='412170'>easy</span> <span
  m='412390'>to</span> <span m='412470'>see</span> <span m='412650'>how</span>
  <span m='412860'>it</span> <span m='412940'>unwinds.</span> <span
  m='414070'>It</span> <span m='414310'>means</span> <span
  m='414630'>that</span> <span m='414840'>Bn</span> <span m='415710'>is</span>
  <span m='416100'>1/2</span> <span m='417140'>plus</span> <span
  m='420833'>1/2</span> <span m='421720'>of</span> <span m='422760'>1</span>
  <span m='423060'>plus</span> <span m='423340'>1</span> <span
  m='424050'>plus</span> <span m='424290'>1/2</span> <span m='424820'>of</span>
  <span m='424950'>2</span> <span m='425130'>plus</span> <span
  m='425450'>1</span> <span m='425750'>plus</span> <span m='425980'>1/2</span>
  <span m='426420'>of</span> <span m='426540'>3</span> <span
  m='426770'>plus</span> <span m='427010'>1</span> <span m='427190'>and</span>
  <span m='427280'>so</span> <span m='427500'>on.</span> <span
  m='427800'>If</span> <span m='428010'>I</span> <span m='428070'>factor</span>
  <span m='428540'>out</span> <span m='428700'>the</span> <span
  m='428770'>1/2,</span> <span m='429540'>Bn</span> <span m='429960'>is</span>
  <span m='430190'>1/2</span> <span m='430630'>times</span> <span
  m='431210'>1</span> <span m='431480'>plus</span> <span m='431750'>1/2</span>
  <span m='432090'>plus</span> <span m='432310'>1/3</span> <span
  m='433260'>out</span> <span m='433500'>through</span> <span
  m='433730'>1</span> <span m='433950'>over</span> <span m='434250'>n.</span>
  </p><p><span m='436710'>That</span> <span m='436990'>sum</span> <span
  m='437400'>is</span> <span m='437530'>the</span> <span
  m='437610'>harmonic</span> <span m='437925'>sum.</span> <span
  m='438770'>The</span> <span m='438890'>sum</span> <span m='439210'>1</span>
  <span m='439690'>plus</span> <span m='439980'>1/2</span> <span
  m='440430'>up</span> <span m='440630'>through</span> <span m='440800'>1</span>
  <span m='440990'>over</span> <span m='441280'>n</span> <span
  m='441450'>is</span> <span m='441580'>called</span> <span
  m='441810'>Hn,</span> <span m='442360'>or</span> <span m='442480'>the</span>
  <span m='442580'>harmonic</span> <span m='443110'>sum.</span> <span
  m='443800'>And</span> <span m='444060'>what</span> <span m='444290'>we</span>
  <span m='444440'>figured</span> <span m='444820'>out,</span> <span
  m='445010'>or</span> <span m='445200'>really</span> <span
  m='445430'>the</span> <span m='445530'>harmonic</span> <span
  m='445960'>number,</span> <span m='446570'>is</span> <span
  m='446900'>the</span> <span m='447000'>value</span> <span m='447420'>of</span>
  <span m='447520'>that</span> <span m='447720'>sum.</span> <span
  m='448310'>And</span> <span m='449150'>what</span> <span m='449330'>we</span>
  <span m='449450'>figured</span> <span m='449770'>out</span> <span
  m='450010'>is</span> <span m='450450'>that</span> <span m='451200'>Bn,</span>
  <span m='451590'>the</span> <span m='451980'>amount</span> <span
  m='452360'>that</span> <span m='452490'>I</span> <span m='452560'>can</span>
  <span m='452790'>get</span> <span m='453210'>n</span> <span
  m='453520'>books</span> <span m='453890'>out</span> <span m='454820'>up</span>
  <span m='455300'>past</span> <span m='455590'>the</span> <span
  m='455730'>edge</span> <span m='455890'>of</span> <span m='455940'>the</span>
  <span m='456040'>table</span> <span m='456970'>is</span> <span
  m='457800'>Hn</span> <span m='458390'>over</span> <span m='458690'>2.</span>
  </p>
embedded_media:
  - uid: c6b18808ce690eed0865aee318397915
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 80c3134a315d7ddc9ff703149c6b7390
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 52364ef025da879ef5b634ba21ebb68b
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: CdhuVhWTSMI
  - uid: 0c73138c421ab862482fbbf345f78df4
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/CdhuVhWTSMI/default.jpg'
  - uid: 7e46294a3948930a4e30c1da4b5f8311
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: CdhuVhWTSMI
  - uid: 33932425b609811f2d2d05e8c4867df0
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: CdhuVhWTSMI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-d3f74a0ca5a8/book-stacking/CdhuVhWTSMI.srt
  - uid: 0180bad9acb779cfb8371f2c9e88fb45
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: CdhuVhWTSMI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-2/vertical-d3f74a0ca5a8/book-stacking/CdhuVhWTSMI.pdf
  - uid: 94ab5e024f0a8a2839bfc84da87b8432
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 870a689c52d991695a1e3265803a48f1
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 55243bd96643a0df42054f2a57373019
    parent_uid: fec9fa7fd42c87782c91e2f8a73b3807
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_bookstack_video_ipod.mp4
type: courses
layout: video
---
