---
title: Basis and Dimension
uid: 8ed637ed491bb5dbdb8e31b243977e0c
parent_uid: f4986e8213a7cf7cebaaaba5fa7882f0
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/independence-basis-and-dimension/basis-and-dimension
short_url: basis-and-dimension
inline_embed_id: 86670939basisanddimension6419100
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7065'>PROFESSOR: Hi</span> <span m='7540'>there.</span> <span
  m='7920'>Welcome</span> <span m='8189'>back</span> <span m='8360'>to</span>
  <span m='8430'>recitation.</span> <span m='9540'>In</span> <span
  m='10100'>lecture,</span> <span m='10600'>you've</span> <span
  m='10760'>been</span> <span m='10950'>learning</span> <span
  m='11280'>about</span> <span m='11680'>when</span> <span
  m='11990'>vectors</span> <span m='12350'>are</span> <span
  m='12440'>linearly</span> <span m='12870'>independent,</span> <span
  m='14090'>when</span> <span m='14490'>they</span> <span m='14780'>span</span>
  <span m='15170'>the</span> <span m='15250'>space,</span> <span
  m='16250'>what</span> <span m='16500'>a</span> <span m='16550'>basis</span>
  <span m='16990'>is,</span> <span m='17550'>what</span> <span
  m='17700'>a</span> <span m='18000'>dimension</span> <span m='18255'>of
  a</span> <span m='18510'>vector</span> <span m='18800'>space</span> <span
  m='19160'>is.</span> <span m='19790'>And</span> <span m='20400'>the</span>
  <span m='20570'>problem</span> <span m='20920'>for</span> <span
  m='21060'>today</span> <span m='21380'>is</span> <span
  m='21520'>exactly</span> <span m='21950'>about</span> <span
  m='22210'>that.</span> </p><p><span m='23630'>We</span> <span
  m='23840'>have</span> <span m='24410'>a</span> <span m='24590'>vector</span>
  <span m='24900'>space</span> <span m='25700'>that</span> <span
  m='25880'>is</span> <span m='26020'>given.</span> <span m='26500'>It's</span>
  <span m='26720'>spanned</span> <span m='27050'>by</span> <span
  m='27190'>these</span> <span m='27520'>four</span> <span
  m='27800'>vectors.</span> <span m='28780'>And</span> <span
  m='28910'>we're</span> <span m='29080'>asked</span> <span m='29540'>to</span>
  <span m='29640'>find</span> <span m='30490'>the</span> <span
  m='30620'>dimension</span> <span m='31070'>of</span> <span
  m='31160'>that</span> <span m='31350'>vector</span> <span
  m='31600'>space</span> <span m='32009'>and</span> <span m='32150'>the</span>
  <span m='32220'>basis</span> <span m='32670'>for</span> <span
  m='32880'>it.</span> <span m='35700'>Well,</span> <span m='36100'>why</span>
  <span m='36270'>don't</span> <span m='36450'>you</span> <span
  m='36810'>hit</span> <span m='37020'>pause</span> <span m='37520'>on
  the</span> <span m='37970'>video,</span> <span m='38530'>and</span> <span
  m='38850'>work</span> <span m='39050'>on</span> <span m='39170'>it</span>
  <span m='39290'>for</span> <span m='39410'>a while.</span> <span
  m='39770'>And</span> <span m='39880'>I'll</span> <span m='39980'>come</span>
  <span m='40110'>back</span> <span m='40320'>in</span> <span m='40400'>a</span>
  <span m='40460'>little</span> <span m='40650'>bit</span> <span
  m='41010'>to</span> <span m='41510'>help</span> <span m='41750'>you</span>
  <span m='41850'>out</span> <span m='41990'>with</span> <span
  m='42110'>it.</span> </p><p><span m='51120'>We're</span> <span
  m='51270'>back.</span> <span m='51900'>Let's</span> <span
  m='52130'>work</span> <span m='52350'>on</span> <span m='52450'>it.</span>
  <span m='54900'>So</span> <span m='55160'>we</span> <span
  m='55250'>need</span> <span m='55400'>to</span> <span m='55490'>find</span>
  <span m='56010'>the</span> <span m='56190'>dimension</span> <span
  m='57240'>and</span> <span m='57590'>the</span> <span m='57650'>basis.</span>
  <span m='60310'>Remember</span> <span m='60570'>what</span> <span
  m='60740'>the</span> <span m='60820'>dimension</span> <span
  m='61240'>is?</span> <span m='61970'>It's</span> <span m='62160'>simply</span>
  <span m='62560'>the</span> <span m='62680'>number</span> <span
  m='62980'>of</span> <span m='63040'>vectors</span> <span m='63570'>in</span>
  <span m='63670'>a</span> <span m='63760'>basis</span> <span
  m='64110'>for</span> <span m='64260'>the</span> <span m='64280'>vector</span>
  <span m='64590'>space.</span> <span m='65590'>So</span> <span
  m='65820'>actually,</span> <span m='66250'>the</span> <span
  m='66370'>problem</span> <span m='66760'>is</span> <span
  m='67090'>backwards.</span> <span m='67680'>We</span> <span
  m='67810'>want</span> <span m='68030'>to</span> <span m='68120'>find</span>
  <span m='68470'>the</span> <span m='68500'>basis</span> <span
  m='68900'>for</span> <span m='69000'>the</span> <span m='69110'>space</span>
  <span m='69460'>first,</span> <span m='70350'>and</span> <span
  m='70540'>then</span> <span m='70750'>find</span> <span m='71020'>the</span>
  <span m='71100'>dimension.</span> <span m='71840'>I'll</span> <span
  m='72235'>write</span> <span m='72630'>"first"</span> <span
  m='73030'>here</span> <span m='76400'>and</span> <span
  m='76660'>"second"</span> <span m='76920'>here.</span> </p><p><span
  m='79700'>So</span> <span m='79840'>we</span> <span m='79920'>want</span>
  <span m='80070'>to</span> <span m='80120'>find</span> <span m='80390'>a</span>
  <span m='80440'>basis</span> <span m='81020'>for</span> <span
  m='81110'>the</span> <span m='81210'>vector</span> <span
  m='81540'>space</span> <span m='81940'>spanned</span> <span
  m='82270'>by</span> <span m='82410'>these</span> <span m='82680'>four</span>
  <span m='82940'>vectors.</span> <span m='84040'>So</span> <span
  m='84250'>you</span> <span m='84330'>might</span> <span m='84510'>be</span>
  <span m='84600'>tempted</span> <span m='85130'>to</span> <span
  m='85580'>just</span> <span m='85780'>say</span> <span m='86040'>that</span>
  <span m='86310'>a</span> <span m='86350'>basis</span> <span
  m='86720'>for</span> <span m='86820'>this</span> <span m='87010'>vector</span>
  <span m='87280'>space</span> <span m='87680'>is</span> <span
  m='88200'>those</span> <span m='88490'>four</span> <span
  m='88670'>vectors,</span> <span m='89500'>because</span> <span
  m='89830'>they</span> <span m='89940'>span</span> <span m='90280'>the</span>
  <span m='90330'>vector</span> <span m='90610'>space.</span> <span
  m='91410'>But</span> <span m='91550'>there's</span> <span
  m='91810'>another</span> <span m='92220'>thing</span> <span
  m='92470'>that</span> <span m='92620'>a</span> <span m='92680'>basis</span>
  <span m='93080'>has</span> <span m='93360'>to</span> <span
  m='93680'>satisfy.</span> <span m='94350'>And</span> <span m='94480'>it</span>
  <span m='94580'>is</span> <span m='95160'>the</span> <span
  m='95530'>elements</span> <span m='95970'>of</span> <span m='96050'>the</span>
  <span m='96150'>basis</span> <span m='96650'>have</span> <span
  m='96920'>to</span> <span m='97030'>be</span> <span m='97210'>linearly</span>
  <span m='97650'>independent.</span> <span m='98760'>We</span> <span
  m='98970'>don't</span> <span m='99190'>know</span> <span m='99360'>that</span>
  <span m='99580'>these</span> <span m='99810'>are.</span> <span
  m='100340'>So</span> <span m='101090'>we</span> <span m='101290'>have</span>
  <span m='101460'>to</span> <span m='101590'>check.</span> </p><p><span
  m='102750'>How</span> <span m='102910'>do</span> <span m='102990'>we</span>
  <span m='103100'>check</span> <span m='103320'>that</span> <span
  m='103510'>four</span> <span m='103670'>vectors</span> <span m='104010'>are
  linearly</span> <span m='104340'>independent?</span> <span
  m='105670'>Well,</span> <span m='105930'>there's</span> <span
  m='106110'>a</span> <span m='106160'>couple</span> <span m='106410'>of</span>
  <span m='106510'>different</span> <span m='106790'>ways.</span> <span
  m='107800'>But</span> <span m='108910'>here's</span> <span
  m='109140'>what</span> <span m='109290'>we're</span> <span
  m='109410'>going</span> <span m='109570'>to</span> <span m='109670'>do.</span>
  <span m='110610'>We're</span> <span m='110760'>going</span> <span
  m='110920'>to</span> <span m='111030'>put</span> <span m='111240'>these</span>
  <span m='111460'>vectors</span> <span m='112170'>as</span> <span
  m='112550'>rows</span> <span m='112770'>of</span> <span m='112900'>a</span>
  <span m='113040'>matrix.</span> <span m='114340'>And</span> <span
  m='114570'>then</span> <span m='115180'>we'll</span> <span
  m='115470'>do</span> <span m='115560'>elimination.</span> <span
  m='117070'>And</span> <span m='117200'>when</span> <span m='117360'>we</span>
  <span m='117460'>get</span> <span m='117680'>to</span> <span
  m='117750'>the</span> <span m='117890'>end,</span> <span m='118780'>the</span>
  <span m='119110'>rows</span> <span m='119330'>that</span> <span
  m='119460'>have</span> <span m='119850'>pivots</span> <span
  m='120710'>are</span> <span m='121180'>the</span> <span
  m='121300'>independent</span> <span m='121910'>ones.</span> <span
  m='122570'>So</span> <span m='123480'>let's</span> <span m='123700'>do</span>
  <span m='123810'>that.</span> <span m='126760'>1,</span> <span
  m='126980'>1,</span> <span m='127320'>-2,</span> <span m='128530'>0,</span>
  <span m='129350'>-1;</span> <span m='130624'>1,</span> <span
  m='131570'>2,</span> <span m='132180'>0,</span> <span m='133100'>-4,</span>
  <span m='134030'>1;</span> <span m='135390'>0,</span> <span
  m='135980'>1,</span> <span m='136910'>3,</span> <span m='138500'>-3,</span>
  <span m='139390'>2;</span> <span m='141930'>2,</span> <span
  m='142810'>3,</span> <span m='143370'>0,</span> <span m='144470'>-2,</span>
  <span m='145470'>0.</span> </p><p><span m='150540'>By</span> <span
  m='150750'>now</span> <span m='150970'>you</span> <span m='151180'>must</span>
  <span m='151310'>have</span> <span m='151440'>done</span> <span
  m='151540'>elimination</span> <span m='152060'>a</span> <span
  m='152220'>million</span> <span m='152410'>times,</span> <span
  m='152730'>so</span> <span m='153670'>I'll</span> <span m='153850'>go</span>
  <span m='154210'>a</span> <span m='154260'>little</span> <span
  m='154450'>bit</span> <span m='154620'>faster.</span> <span
  m='156310'>1,</span> <span m='156550'>1,</span> <span m='157510'>-2,</span>
  <span m='157810'>0,</span> <span m='158760'>-1;</span> <span
  m='161020'>0,</span> <span m='162630'>1,</span> <span m='162870'>0,</span>
  <span m='164370'>+2,</span> <span m='165590'>-4,</span> <span
  m='167550'>2--</span> <span m='168864'>this</span> <span
  m='169302'>one's</span> <span m='169740'>already</span> <span
  m='169960'>done--</span> <span m='170730'>1,</span> <span m='171100'>3,</span>
  <span m='171860'>-3,</span> <span m='172270'>2;</span> <span
  m='173930'>2</span> <span m='174140'>minus 2,</span> <span m='175130'>3</span>
  <span m='175400'>minus</span> <span m='175800'>2,</span> <span
  m='176670'>0</span> <span m='177000'>plus</span> <span m='177580'>4,</span>
  <span m='179170'>-2,</span> <span m='180920'>and</span> <span
  m='181770'>2.</span> </p><p><span m='185500'>One</span> <span
  m='185630'>more</span> <span m='185740'>step.</span> <span
  m='188740'>1,</span> <span m='189490'>1,</span> <span m='190120'>-2,</span>
  <span m='191330'>0,</span> <span m='191940'>-1--</span> <span
  m='193353'>all</span> <span m='193726'>these</span> <span m='194100'>are
  done--</span> <span m='194410'>0,</span> <span m='195540'>1,</span> <span
  m='196430'>2,</span> <span m='197270'>-4,</span> <span m='198706'>2;</span>
  <span m='200170'>0,</span> <span m='201146'>1</span> <span
  m='201640'>minus</span> <span m='201980'>1 is</span> <span
  m='202290'>0,</span> <span m='202930'>3</span> <span m='203150'>minus</span>
  <span m='203450'>2</span> <span m='203590'>is</span> <span
  m='203730'>1,</span> <span m='204720'>-3</span> <span m='205210'>plus</span>
  <span m='205530'>4</span> <span m='205730'>is</span> <span
  m='205860'>1,</span> <span m='206480'>2</span> <span m='206780'>minus</span>
  <span m='207160'>2</span> <span m='207520'>is</span> <span
  m='208470'>0,</span> <span m='210491'>1</span> <span m='210990'>minus</span>
  <span m='211480'>1</span> <span m='211660'>is</span> <span
  m='211780'>0,</span> <span m='213204'>2,</span> <span m='214770'>2</span>
  <span m='215030'>again,</span> <span m='215660'>and</span> <span
  m='215940'>0.</span> </p><p><span m='217402'>Well,</span> <span
  m='217880'>you</span> <span m='218000'>can</span> <span m='218140'>see</span>
  <span m='218420'>where this</span> <span m='218630'>is</span> <span
  m='218750'>going.</span> <span m='219280'>In</span> <span
  m='219330'>the</span> <span m='219420'>next</span> <span
  m='219720'>step,</span> <span m='220610'>this</span> <span m='220860'>row
  is</span> <span m='221130'>going</span> <span m='221300'>to</span> <span
  m='221400'>disappear.</span> <span m='224748'>1,</span> <span
  m='225190'>1,</span> <span m='225960'>-2,</span> <span m='227090'>0</span>
  <span m='228470'>-1;</span> <span m='229620'>0,</span> <span
  m='230090'>1,</span> <span m='230400'>2,</span> <span m='231314'>-4,</span>
  <span m='232230'>2;</span> <span m='232790'>0,</span> <span
  m='233766'>0,</span> <span m='234254'>1,</span> <span m='234742'>1,</span>
  <span m='235230'>0;</span> <span m='235718'>0,</span> <span
  m='236206'>0,</span> <span m='236694'>0,</span> <span m='237182'>0,</span>
  <span m='238158'>0.</span> </p><p><span m='239120'>All</span> <span
  m='239340'>right.</span> <span m='240300'>We're</span> <span m='240450'>done
  with</span> <span m='240650'>elimination.</span> <span m='243890'>So</span>
  <span m='244410'>let's</span> <span m='244730'>circle</span> <span
  m='245040'>our</span> <span m='245180'>pivots.</span> <span
  m='248934'>All</span> <span m='249390'>right,</span> <span
  m='249450'>here</span> <span m='249830'>are</span> <span m='250210'>our</span>
  <span m='250370'>pivots.</span> <span m='250470'>We</span> <span
  m='250570'>have</span> <span m='252680'>three</span> <span
  m='252940'>pivots.</span> <span m='254040'>And</span> <span
  m='254780'>so</span> <span m='255000'>these</span> <span
  m='255670'>three</span> <span m='256019'>rows</span> <span
  m='256390'>are</span> <span m='256510'>linearly</span> <span
  m='256950'>independent.</span> </p><p><span m='259950'>And</span> <span
  m='260149'>in</span> <span m='260269'>fact,</span> <span
  m='261440'>these</span> <span m='261750'>rows</span> <span
  m='262029'>still</span> <span m='262370'>span</span> <span
  m='262810'>the</span> <span m='262890'>same</span> <span
  m='263190'>space</span> <span m='264140'>that</span> <span
  m='264370'>the</span> <span m='264530'>initial</span> <span
  m='264890'>four</span> <span m='265190'>rows</span> <span
  m='265460'>did.</span> <span m='265970'>Because</span> <span
  m='266180'>when</span> <span m='266300'>you</span> <span m='266390'>do</span>
  <span m='266550'>elimination,</span> <span m='267160'>all</span> <span
  m='267360'>that</span> <span m='267500'>you're</span> <span
  m='267640'>doing</span> <span m='268050'>is</span> <span
  m='268230'>recombining</span> <span m='268380'>your</span> <span
  m='268880'>rows</span> <span m='270920'>by</span> <span
  m='271060'>doing</span> <span m='271380'>linear</span> <span
  m='271590'>combinations</span> <span m='272230'>of</span> <span
  m='272390'>them.</span> <span m='272560'>So,</span> <span
  m='272700'>for</span> <span m='272850'>example,</span> <span
  m='273570'>your</span> <span m='274160'>first</span> <span
  m='274500'>row</span> <span m='274620'>stayed</span> <span
  m='274920'>the</span> <span m='275000'>same</span> <span
  m='275280'>throughout.</span> <span m='276310'>Your</span> <span
  m='276490'>second</span> <span m='276880'>row</span> <span
  m='277380'>was</span> <span m='277720'>replaced</span> <span
  m='278870'>by</span> <span m='280130'>row</span> <span m='280330'>2</span>
  <span m='280540'>minus</span> <span m='281010'>row</span> <span
  m='281450'>1.</span> <span m='281850'>But</span> <span m='282340'>it's</span>
  <span m='282550'>really</span> <span m='282760'>still</span> <span
  m='282950'>spanning</span> <span m='283320'>the</span> <span
  m='283410'>same</span> <span m='283640'>space.</span> <span
  m='285310'>And</span> <span m='285490'>it</span> <span m='285590'>goes</span>
  <span m='285810'>on.</span> </p><p><span m='286330'>And</span> <span
  m='286550'>then</span> <span m='286720'>the</span> <span
  m='286810'>fourth</span> <span m='287120'>row,</span> <span
  m='287410'>it</span> <span m='287500'>turns</span> <span
  m='287790'>out,</span> <span m='287990'>was</span> <span
  m='288140'>useless.</span> <span m='288640'>You</span> <span
  m='288820'>only</span> <span m='289030'>needed</span> <span
  m='289210'>the</span> <span m='289310'>first</span> <span
  m='289720'>three.</span> <span m='290590'>So</span> <span
  m='291250'>the</span> <span m='291420'>elements</span> <span
  m='291860'>for</span> <span m='292010'>a</span> <span
  m='292040'>basis--</span> <span m='292940'>well,</span> <span
  m='295880'>it</span> <span m='296190'>will</span> <span m='296360'>be</span>
  <span m='296540'>these</span> <span m='296860'>three.</span> <span
  m='297310'>So let</span> <span m='297520'>me</span> <span
  m='297620'>write</span> <span m='297850'>that.</span> <span
  m='301170'>Basis</span> <span m='303358'>[1,</span> <span m='303794'>1,</span>
  <span m='304780'>-2,</span> <span m='306120'>0,</span> <span
  m='306430'>-1],</span> <span m='309760'>2,</span> <span m='312133'>2,</span>
  <span m='312616'>and</span> <span m='313099'>[0,</span> <span
  m='313582'>0,</span> <span m='314548'>1,</span> <span m='315031'>1,</span>
  <span m='315997'>0].</span> </p><p><span m='318640'>Could</span> <span
  m='318840'>you have</span> <span m='319090'>used</span> <span
  m='320950'>the</span> <span m='321090'>first</span> <span
  m='321430'>three</span> <span m='321650'>rows?</span> <span
  m='322440'>Yes,</span> <span m='322690'>you</span> <span
  m='323075'>could.</span> <span m='324230'>You</span> <span
  m='324400'>can't</span> <span m='324710'>always</span> <span
  m='325110'>do</span> <span m='325220'>that.</span> <span
  m='325640'>Sometimes</span> <span m='326220'>in</span> <span
  m='326310'>elimination,</span> <span m='327030'>you</span> <span
  m='327160'>have</span> <span m='327370'>to</span> <span
  m='327490'>switch</span> <span m='327870'>rows,</span> <span
  m='328390'>because</span> <span m='328680'>there's</span> <span
  m='328890'>a</span> <span m='328930'>0</span> <span m='329420'>where a</span>
  <span m='329730'>pivot</span> <span m='330050'>should</span> <span
  m='330280'>be.</span> <span m='330750'>When</span> <span
  m='330980'>that</span> <span m='331140'>happens,</span> <span
  m='331930'>you</span> <span m='332010'>have</span> <span m='332260'>to</span>
  <span m='332360'>use</span> <span m='332600'>these</span> <span
  m='332840'>three,</span> <span m='333380'>or</span> <span
  m='333690'>you</span> <span m='333760'>have</span> <span m='333950'>to</span>
  <span m='334070'>keep</span> <span m='334280'>track</span> <span
  m='334630'>of</span> <span m='334770'>which</span> <span m='335060'>row</span>
  <span m='335310'>you</span> <span m='335390'>switched</span> <span
  m='336150'>to</span> <span m='336280'>go</span> <span m='336440'>back</span>
  <span m='336700'>and</span> <span m='336820'>use</span> <span
  m='337010'>the</span> <span m='337110'>initial</span> <span
  m='337450'>ones.</span> <span m='339200'>But</span> <span
  m='339630'>it's</span> <span m='339750'>really</span> <span
  m='339940'>safe</span> <span m='340225'>to use</span> <span
  m='340510'>these</span> <span m='340720'>ones.</span> <span
  m='341110'>And</span> <span m='341240'>also</span> <span
  m='342150'>they're</span> <span m='342320'>simpler</span> <span
  m='342740'>than</span> <span m='342910'>the</span> <span
  m='342980'>ones</span> <span m='343170'>that</span> <span
  m='343270'>you</span> <span m='343340'>started</span> <span
  m='343710'>with,</span> <span m='343880'>so</span> <span m='344010'>why</span>
  <span m='344180'>not?</span> </p><p><span m='345820'>The</span> <span
  m='345990'>other</span> <span m='346250'>question</span> <span
  m='346620'>that</span> <span m='346730'>we</span> <span m='346850'>had</span>
  <span m='347320'>was:</span> <span m='347840'>what</span> <span
  m='348040'>is</span> <span m='348140'>the</span> <span
  m='348230'>dimension</span> <span m='348720'>of</span> <span
  m='348810'>the</span> <span m='348880'>vector</span> <span
  m='349170'>space?</span> <span m='349740'>Well,</span> <span
  m='351020'>this</span> <span m='351435'>is</span> <span m='351850'>the</span>
  <span m='352080'>easy</span> <span m='352300'>part.</span> <span
  m='352780'>The</span> <span m='352890'>dimension</span> <span
  m='353260'>of</span> <span m='353320'>the</span> <span
  m='353390'>vector</span> <span m='353650'>space</span> <span
  m='354010'>is</span> <span m='354360'>1,</span> <span m='354810'>2,</span>
  <span m='355190'>3.</span> <span m='358100'>And</span> <span
  m='358240'>that</span> <span m='358430'>solves</span> <span
  m='358670'>the</span> <span m='358730'>problem.</span> <span
  m='359620'>But</span> <span m='359720'>there's</span> <span
  m='359930'>one</span> <span m='360140'>more</span> <span
  m='360260'>thing</span> <span m='360460'>that</span> <span m='360600'>I</span>
  <span m='360640'>want</span> <span m='360800'>to</span> <span
  m='360870'>tell</span> <span m='361080'>you.</span> </p><p><span
  m='363530'>I</span> <span m='363650'>told</span> <span m='363840'>you</span>
  <span m='363930'>that</span> <span m='364060'>there's</span> <span
  m='364210'>a</span> <span m='364270'>couple</span> <span m='364560'>of</span>
  <span m='364640'>ways</span> <span m='365210'>to</span> <span
  m='366030'>find</span> <span m='366380'>out</span> <span
  m='366990'>which</span> <span m='367370'>of</span> <span
  m='367510'>those</span> <span m='367840'>four</span> <span
  m='368470'>vectors</span> <span m='368950'>are</span> <span
  m='369090'>linearly</span> <span m='369480'>independent.</span> <span
  m='370480'>And</span> <span m='370620'>the</span> <span m='370700'>one</span>
  <span m='370890'>that</span> <span m='371020'>I</span> <span
  m='371110'>used</span> <span m='371460'>was</span> <span m='371600'>I</span>
  <span m='371650'>put</span> <span m='371880'>them</span> <span
  m='372030'>into</span> <span m='372230'>rows</span> <span
  m='372990'>and</span> <span m='373150'>performed</span> <span
  m='373510'>elimination</span> <span m='375080'>and</span> <span
  m='375270'>picked</span> <span m='375530'>out</span> <span
  m='376030'>the</span> <span m='376610'>rows</span> <span
  m='376920'>that</span> <span m='377050'>have</span> <span
  m='377310'>pivots</span> <span m='377860'>on</span> <span
  m='378030'>them.</span> <span m='379050'>Another</span> <span
  m='379400'>way</span> <span m='379520'>to</span> <span m='379660'>do</span>
  <span m='379850'>it</span> <span m='380130'>is</span> <span
  m='380500'>to</span> <span m='381230'>write</span> <span m='381870'>the</span>
  <span m='382450'>initial</span> <span m='382850'>vectors</span> <span
  m='383380'>as</span> <span m='383670'>columns</span> <span
  m='384180'>of</span> <span m='384260'>the</span> <span
  m='384340'>matrix</span> <span m='385180'>and</span> <span
  m='385320'>then</span> <span m='385490'>perform</span> <span
  m='385900'>elimination.</span> <span m='386840'>That</span> <span
  m='387060'>also</span> <span m='387330'>works</span> <span
  m='387820'>and,</span> <span m='388010'>as</span> <span m='388150'>you</span>
  <span m='388515'>know,</span> <span m='388880'>because</span> <span
  m='389200'>you're</span> <span m='389330'>only</span> <span
  m='389560'>working</span> <span m='389920'>with</span> <span
  m='390030'>the</span> <span m='390130'>transpose</span> <span
  m='390640'>of</span> <span m='390750'>this</span> <span
  m='390970'>matrix,</span> <span m='391870'>you</span> <span
  m='391970'>get</span> <span m='392150'>the</span> <span m='392220'>same</span>
  <span m='392500'>number</span> <span m='392790'>of</span> <span
  m='392900'>pivots.</span> </p><p><span m='394990'>Let's</span> <span
  m='395220'>go</span> <span m='395370'>over</span> <span m='395580'>here</span>
  <span m='396330'>where</span> <span m='397070'>I</span> <span
  m='397450'>have</span> <span m='398480'>the</span> <span
  m='398680'>same--</span> <span m='399520'>well,</span> <span
  m='399710'>the</span> <span m='399790'>transpose</span> <span
  m='400250'>of</span> <span m='400400'>that</span> <span
  m='400560'>matrix--</span> <span m='400990'>I</span> <span
  m='401050'>have</span> <span m='401240'>the</span> <span
  m='401310'>same</span> <span m='401800'>vectors,</span> <span
  m='402260'>but</span> <span m='402420'>now</span> <span
  m='402650'>written</span> <span m='402900'>as</span> <span
  m='403140'>columns.</span> <span m='404100'>My</span> <span
  m='404260'>four</span> <span m='404680'>initial</span> <span
  m='405080'>vectors</span> <span m='405510'>written as</span> <span
  m='405830'>columns.</span> <span m='406740'>And</span> <span
  m='406930'>here</span> <span m='407490'>I</span> <span m='407600'>have</span>
  <span m='407770'>performed</span> <span m='408270'>elimination.</span> <span
  m='409440'>And</span> <span m='409580'>this</span> <span m='409730'>is</span>
  <span m='409860'>the</span> <span m='409930'>final</span> <span
  m='410310'>result.</span> <span m='412180'>Let</span> <span
  m='412360'>me</span> <span m='412470'>circle</span> <span
  m='412780'>the</span> <span m='412860'>pivots</span> <span
  m='413210'>again.</span> <span m='415466'>Here</span> <span
  m='415930'>they</span> <span m='416230'>are,</span> <span
  m='416800'>three,</span> <span m='417180'>which</span> <span
  m='417540'>is</span> <span m='417680'>going</span> <span m='417870'>to</span>
  <span m='417980'>give</span> <span m='418190'>me</span> <span
  m='419520'>three</span> <span m='419860'>linearly</span> <span
  m='420220'>independent</span> <span m='420690'>vectors</span> <span
  m='421210'>and</span> <span m='421320'>hence,</span> <span
  m='421910'>three</span> <span m='422210'>elements</span> <span
  m='422590'>of</span> <span m='422670'>the</span> <span
  m='422750'>basis,</span> <span m='423390'>and</span> <span
  m='423800'>hence,</span> <span m='424060'>dimension</span> <span
  m='424510'>3</span> <span m='424800'>for</span> <span m='424920'>the</span>
  <span m='425000'>vector</span> <span m='425310'>space.</span> </p><p><span
  m='426350'>But</span> <span m='427220'>I</span> <span m='427310'>could</span>
  <span m='427490'>no</span> <span m='427730'>longer</span> <span
  m='428070'>use</span> <span m='429840'>these</span> <span
  m='430180'>three</span> <span m='430420'>columns</span> <span
  m='431040'>as</span> <span m='431280'>elements</span> <span
  m='431680'>of</span> <span m='431760'>the</span> <span
  m='431850'>basis,</span> <span m='432910'>because</span> <span
  m='433330'>when</span> <span m='433480'>I</span> <span m='433570'>did</span>
  <span m='433810'>elimination,</span> <span m='435040'>I</span> <span
  m='435180'>changed</span> <span m='436120'>the</span> <span
  m='436580'>column</span> <span m='436920'>space.</span> <span
  m='437500'>So</span> <span m='437680'>the</span> <span
  m='437780'>column</span> <span m='438080'>space</span> <span
  m='438380'>of</span> <span m='438510'>this</span> <span
  m='439820'>matrix</span> <span m='440410'>is</span> <span
  m='440560'>not</span> <span m='440800'>the</span> <span m='440900'>same</span>
  <span m='441220'>as</span> <span m='441310'>the</span> <span
  m='441390'>column</span> <span m='441630'>space</span> <span
  m='442650'>of</span> <span m='442880'>the</span> <span
  m='443260'>eliminated</span> <span m='443880'>version.</span> <span
  m='444290'>So</span> <span m='444630'>I</span> <span m='444750'>cannot</span>
  <span m='446630'>use</span> <span m='446920'>these.</span> </p><p><span
  m='447410'>In</span> <span m='447560'>fact,</span> <span m='447850'>if</span>
  <span m='448010'>you</span> <span m='448140'>look</span> <span
  m='448340'>at</span> <span m='448430'>them,</span> <span m='449180'>you</span>
  <span m='449550'>can</span> <span m='449730'>probably</span> <span
  m='450100'>understand</span> <span m='450570'>that</span> <span
  m='450690'>they're</span> <span m='450860'>not</span> <span
  m='451550'>going</span> <span m='451720'>to</span> <span
  m='451900'>span</span> <span m='452220'>the</span> <span
  m='452310'>same</span> <span m='452590'>space</span> <span
  m='453580'>as</span> <span m='453810'>these.</span> <span
  m='454790'>Because</span> <span m='454980'>all</span> <span
  m='455160'>that</span> <span m='455270'>I</span> <span m='455370'>have</span>
  <span m='455590'>down</span> <span m='455750'>here are</span> <span
  m='456050'>0's,</span> <span m='457040'>and</span> <span m='457420'>I</span>
  <span m='457520'>get</span> <span m='457720'>a</span> <span
  m='457830'>lot</span> <span m='458080'>more</span> <span
  m='458270'>than</span> <span m='458460'>just</span> <span
  m='458730'>0's</span> <span m='459260'>in</span> <span m='459360'>the</span>
  <span m='459460'>last</span> <span m='459770'>two</span> <span
  m='459960'>entries</span> <span m='460370'>of</span> <span
  m='460480'>the</span> <span m='460560'>vectors.</span> <span
  m='461840'>So</span> <span m='462070'>what</span> <span m='462210'>I</span>
  <span m='462280'>need</span> <span m='462520'>to</span> <span
  m='462630'>do</span> <span m='463020'>is--</span> <span m='464586'>the</span>
  <span m='465060'>pivots</span> <span m='465260'>are in</span> <span
  m='465540'>the</span> <span m='465610'>first,</span> <span
  m='465910'>second,</span> <span m='466360'>and</span> <span
  m='466510'>third</span> <span m='467240'>columns.</span> <span
  m='468310'>I</span> <span m='468460'>need</span> <span m='468690'>to</span>
  <span m='468780'>use</span> <span m='471700'>these</span> <span
  m='472020'>three</span> <span m='472190'>columns</span> <span
  m='472640'>as</span> <span m='472740'>my</span> <span m='472910'>basis.</span>
  <span m='473550'>I'll</span> <span m='473690'>just</span> <span
  m='473900'>write</span> <span m='474110'>basis</span> <span
  m='474550'>down</span> <span m='474916'>here.</span> <span
  m='477420'>And</span> <span m='477570'>that</span> <span
  m='477750'>will</span> <span m='477890'>work</span> <span
  m='478140'>too.</span> </p><p><span m='478790'>So</span> <span m='479230'>see,
  I have</span> <span m='479700'>produced</span> <span m='480210'>two</span>
  <span m='480340'>different</span> <span m='480650'>bases</span> <span
  m='481200'>for</span> <span m='481360'>the</span> <span m='481440'>same</span>
  <span m='481740'>vector</span> <span m='482020'>space,</span> <span
  m='482590'>which</span> <span m='483000'>is</span> <span
  m='483090'>totally</span> <span m='483410'>fine.</span> <span
  m='484190'>You</span> <span m='484290'>can</span> <span m='484430'>pick</span>
  <span m='484620'>the</span> <span m='484700'>basis</span> <span
  m='485180'>that you</span> <span m='485260'>prefer.</span> <span
  m='486420'>All</span> <span m='486610'>right.</span> <span
  m='487100'>We're</span> <span m='487250'>done.</span> <span
  m='488040'>Thank</span> <span m='488270'>you.</span> </p>
embedded_media:
  - uid: d2ce08ec9fb934b94fbad15ccb78cae9
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: MMWqGD4Urso
  - uid: 0c8d6a6c0903cb08f5499ad237681556
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: MMWqGD4Urso
  - uid: 960a1d0cf3d774f31938087fc48a428c
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: "http://itunes.apple.com/us/itunes-u/basis-and-dimension/id488155309?i=108454355\t"
  - uid: 521ebbba5ca3bc1e1ad7d530aee09efd
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110526_A2_300k.mp4
  - uid: 71ec3f6d14490711a2959e8cfbee65d9
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/MMWqGD4Urso/default.jpg'
  - uid: e586522528a69a74d8d400ebc2c292a5
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: MMWqGD4Urso.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/independence-basis-and-dimension/basis-and-dimension/MMWqGD4Urso.srt
  - uid: 0d432adcd7958f5dbedecccd20ec1efc
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: MMWqGD4Urso.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/independence-basis-and-dimension/basis-and-dimension/MMWqGD4Urso.pdf
  - uid: 2ac66b728df2825b56de226607e2d73d
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: bd7358a0190295068a7da87bf51bcee0
    parent_uid: 8ed637ed491bb5dbdb8e31b243977e0c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
