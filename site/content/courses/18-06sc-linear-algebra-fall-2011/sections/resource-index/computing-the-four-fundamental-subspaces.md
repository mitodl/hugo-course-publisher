---
title: Computing the Four Fundamental Subspaces
uid: a248b06d4ecc4ea12bb9b2bcf196fd86
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/computing-the-four-fundamental-subspaces
short_url: computing-the-four-fundamental-subspaces
inline_embed_id: 926214computingthefourfundamentalsubspaces4056418
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='8466'>BEN HARRIS:</span> <span m='8970'>Hi,</span> <span
  m='9350'>and</span> <span m='9500'>welcome</span> <span m='9880'>back.</span>
  <span m='10830'>Today</span> <span m='11140'>we're</span> <span
  m='11310'>going</span> <span m='11430'>to</span> <span m='11510'>do</span>
  <span m='11660'>a</span> <span m='11730'>problem</span> <span
  m='12170'>about</span> <span m='12440'>the</span> <span m='12530'>four</span>
  <span m='12910'>fundamental</span> <span m='13560'>subspaces.</span> <span
  m='15160'>So</span> <span m='15630'>here</span> <span m='15870'>we</span>
  <span m='15980'>have</span> <span m='16410'>a</span> <span
  m='16520'>matrix</span> <span m='17170'>B.</span> <span m='17876'>B</span>
  <span m='18230'>is</span> <span m='18370'>written</span> <span
  m='18650'>as</span> <span m='18810'>the</span> <span m='18870'>product</span>
  <span m='19370'>of</span> <span m='19440'>a</span> <span
  m='19660'>lower</span> <span m='20080'>triangular</span> <span
  m='20560'>matrix</span> <span m='21400'>and</span> <span m='22185'>an</span>
  <span m='22520'>upper</span> <span m='22820'>triangular</span> <span
  m='23330'>matrix.</span> <span m='24470'>And</span> <span
  m='24930'>we're</span> <span m='25160'>going</span> <span m='25300'>to</span>
  <span m='25450'>find</span> <span m='25830'>a</span> <span
  m='25870'>basis</span> <span m='26420'>for,</span> <span m='27150'>and</span>
  <span m='27510'>compute</span> <span m='28100'>the</span> <span
  m='28190'>dimension</span> <span m='29050'>of,</span> <span
  m='29650'>each</span> <span m='29910'>of</span> <span m='30020'>the</span>
  <span m='30140'>four</span> <span m='30470'>fundamental</span> <span
  m='31020'>subspaces</span> <span m='31720'>of</span> <span m='31850'>B.</span>
  </p><p><span m='33280'>I'll</span> <span m='33590'>give</span> <span
  m='33770'>you</span> <span m='33930'>a</span> <span m='34030'>minute</span>
  <span m='34310'>to</span> <span m='34420'>try</span> <span
  m='34710'>that</span> <span m='34950'>on</span> <span m='35110'>your</span>
  <span m='35330'>own,</span> <span m='36050'>to</span> <span
  m='36200'>hit</span> <span m='36370'>pause,</span> <span m='37400'>and</span>
  <span m='37590'>then</span> <span m='38360'>I'll</span> <span
  m='38470'>be</span> <span m='38570'>right</span> <span m='38780'>back</span>
  <span m='39060'>in</span> <span m='39210'>just</span> <span m='39530'>a</span>
  <span m='39620'>minute</span> <span m='39930'>and</span> <span
  m='40040'>we</span> <span m='40160'>can</span> <span m='40310'>do</span> <span
  m='40450'>it</span> <span m='40580'>together.</span> </p><p><span
  m='52000'>OK.</span> <span m='52840'>We're</span> <span m='53120'>back.</span>
  <span m='54580'>Now,</span> <span m='57030'>the</span> <span
  m='57150'>first</span> <span m='57540'>thing</span> <span m='57820'>to</span>
  <span m='58080'>notice</span> <span m='58700'>is</span> <span
  m='58890'>that</span> <span m='61860'>this</span> <span m='62040'>is</span>
  <span m='62140'>an</span> <span m='62520'>LU</span> <span
  m='62830'>decomposition</span> <span m='63740'>of</span> <span
  m='63910'>B.</span> <span m='64910'>So</span> <span m='65069'>we</span> <span
  m='65140'>have</span> <span m='65489'>L</span> <span m='65750'>here</span>
  <span m='66750'>and</span> <span m='67010'>U</span> <span
  m='67190'>here.</span> <span m='68120'>Now</span> <span m='68620'>let's</span>
  <span m='68920'>go</span> <span m='69090'>one</span> <span
  m='69830'>space</span> <span m='70440'>at</span> <span m='70570'>a</span>
  <span m='70650'>time.</span> <span m='71350'>Let's</span> <span
  m='71570'>start</span> <span m='71840'>with</span> <span m='71990'>the</span>
  <span m='72110'>column</span> <span m='72550'>space.</span> <span
  m='76190'>And</span> <span m='76370'>first,</span> <span
  m='76700'>let's</span> <span m='76920'>just</span> <span m='78070'>say</span>
  <span m='78280'>what</span> <span m='78500'>the</span> <span
  m='78600'>dimension</span> <span m='79240'>of</span> <span
  m='79340'>the</span> <span m='79450'>column</span> <span
  m='79720'>space</span> <span m='80030'>is.</span> <span m='81490'>OK,</span>
  <span m='81780'>so</span> <span m='82450'>let's</span> <span
  m='82760'>look</span> <span m='82970'>at</span> <span m='83050'>our</span>
  <span m='83170'>U</span> <span m='83400'>matrix.</span> <span
  m='84220'>How</span> <span m='84410'>many</span> <span m='84600'>pivots</span>
  <span m='85160'>do</span> <span m='85240'>we</span> <span
  m='85470'>have?</span> <span m='86290'>We</span> <span m='86410'>have</span>
  <span m='86610'>two</span> <span m='86850'>pivots,</span> <span
  m='88130'>so</span> <span m='88590'>the</span> <span m='88720'>column</span>
  <span m='89070'>space</span> <span m='89410'>has</span> <span
  m='89650'>dimension</span> <span m='90160'>2.</span> <span
  m='91520'>This</span> <span m='91730'>is</span> <span m='92550'>the</span>
  <span m='92680'>number</span> <span m='93110'>of</span> <span
  m='93290'>pivots.</span> </p><p><span m='95250'>Good.</span> <span
  m='96100'>Now,</span> <span m='96720'>how</span> <span m='97020'>do</span>
  <span m='97140'>we</span> <span m='97960'>find</span> <span m='98390'>a</span>
  <span m='98500'>basis</span> <span m='99710'>for</span> <span
  m='99950'>the</span> <span m='100060'>column</span> <span
  m='100360'>space?</span> <span m='110610'>How</span> <span
  m='110790'>do</span> <span m='110860'>we</span> <span m='110980'>find</span>
  <span m='111570'>that</span> <span m='111960'>basis?</span> <span
  m='112400'>Well,</span> <span m='112820'>in</span> <span
  m='113040'>lecture,</span> <span m='113690'>Professor</span> <span
  m='114250'>Strang</span> <span m='115090'>had</span> <span
  m='116220'>started</span> <span m='116640'>with</span> <span
  m='116940'>a</span> <span m='117020'>matrix</span> <span m='117430'>B.</span>
  <span m='118370'>He</span> <span m='118680'>did</span> <span
  m='119020'>elimination</span> <span m='119690'>on</span> <span
  m='119850'>it,</span> <span m='119980'>and</span> <span m='120120'>then</span>
  <span m='120270'>he</span> <span m='120410'>took</span> <span
  m='120660'>the</span> <span m='120760'>pivot</span> <span
  m='121160'>columns</span> <span m='121730'>in</span> <span
  m='121840'>the</span> <span m='122000'>original</span> <span
  m='122400'>matrix.</span> <span m='123460'>And</span> <span
  m='123600'>that's</span> <span m='123890'>great.</span> <span
  m='124260'>That</span> <span m='124630'>works.</span> <span
  m='125510'>You</span> <span m='125670'>can</span> <span m='125790'>also</span>
  <span m='126150'>take</span> <span m='126440'>the</span> <span
  m='126550'>pivot</span> <span m='126930'>columns</span> <span
  m='127400'>in</span> <span m='127520'>the</span> <span m='127680'>L</span>
  <span m='127950'>matrix.</span> <span m='129210'>You</span> <span
  m='129330'>can</span> <span m='129440'>see</span> <span m='129620'>by</span>
  <span m='129690'>multiplying</span> <span m='130320'>this</span> <span
  m='130690'>out</span> <span m='131280'>that</span> <span m='131610'>it</span>
  <span m='131680'>will</span> <span m='131900'>amount</span> <span
  m='132230'>to</span> <span m='132890'>essentially</span> <span
  m='133520'>the</span> <span m='133760'>same</span> <span
  m='134060'>thing.</span> </p><p><span m='135550'>So</span> <span
  m='136330'>a</span> <span m='136420'>basis</span> <span m='137500'>for</span>
  <span m='137620'>this</span> <span m='137800'>column</span> <span
  m='138080'>space,</span> <span m='138520'>I</span> <span m='138580'>can</span>
  <span m='138750'>just</span> <span m='138920'>take</span> <span
  m='140030'>these</span> <span m='140310'>two</span> <span
  m='140820'>pivot</span> <span m='141160'>columns</span> <span
  m='142160'>of</span> <span m='142380'>my L</span> <span
  m='142670'>matrix,</span> <span m='143890'>[1,</span> <span
  m='144440'>2,</span> <span m='145110'>-1]</span> <span m='146830'>and</span>
  <span m='148100'>[0,</span> <span m='148480'>1,</span> <span
  m='148800'>0].</span> <span m='149860'>Good.</span> <span
  m='151580'>OK.</span> <span m='152640'>So</span> <span
  m='152810'>there's</span> <span m='153300'>the</span> <span
  m='154630'>dimension</span> <span m='155070'>of</span> <span
  m='155300'>and</span> <span m='155470'>the</span> <span
  m='155540'>basis</span> <span m='156060'>for</span> <span
  m='156580'>the</span> <span m='156680'>column</span> <span
  m='157130'>space</span> <span m='157750'>of</span> <span m='158150'>B.</span>
  </p><p><span m='161070'>Next,</span> <span m='161710'>let's</span> <span
  m='162140'>do</span> <span m='162370'>the</span> <span m='162540'>null</span>
  <span m='162820'>space</span> <span m='163210'>together.</span> <span
  m='166230'>OK.</span> <span m='166380'>What's</span> <span
  m='166650'>the</span> <span m='166790'>dimension</span> <span
  m='168480'>of</span> <span m='168710'>the</span> <span m='168830'>null</span>
  <span m='169090'>space?</span> <span m='173030'>Well,</span> <span
  m='176370'>the</span> <span m='176540'>dimension</span> <span
  m='177110'>of</span> <span m='177250'>the</span> <span m='177360'>null</span>
  <span m='177620'>space</span> <span m='178610'>is</span> <span
  m='178840'>always</span> <span m='179330'>the</span> <span
  m='180540'>number</span> <span m='181910'>of</span> <span
  m='182500'>columns</span> <span m='183830'>minus</span> <span
  m='184470'>the</span> <span m='184660'>number</span> <span
  m='185050'>of</span> <span m='185170'>pivots.</span> <span
  m='186630'>Right?</span> <span m='186880'>It's</span> <span
  m='187090'>the</span> <span m='187180'>number</span> <span
  m='187610'>of</span> <span m='188350'>free</span> <span
  m='190040'>variables.</span> <span m='191260'>So</span> <span
  m='191420'>here,</span> <span m='192230'>that's</span> <span
  m='192500'>just</span> <span m='192740'>one.</span> <span
  m='195300'>Good.</span> </p><p><span m='196640'>And</span> <span
  m='196810'>how</span> <span m='197000'>do</span> <span m='197070'>we</span>
  <span m='197190'>find</span> <span m='197610'>this</span> <span
  m='197900'>one</span> <span m='198440'>vector</span> <span
  m='199320'>in</span> <span m='199840'>the</span> <span m='200430'>null</span>
  <span m='200730'>space?</span> <span m='214190'>Well,</span> <span
  m='216110'>what</span> <span m='216380'>we</span> <span m='216510'>do</span>
  <span m='218270'>is</span> <span m='218510'>we</span> <span
  m='218680'>can</span> <span m='218800'>just</span> <span m='219000'>plug
  in</span> <span m='219440'>1</span> <span m='220540'>for</span> <span
  m='220790'>our</span> <span m='220920'>free</span> <span
  m='221240'>variable,</span> <span m='223960'>and</span> <span
  m='224110'>we</span> <span m='224220'>can</span> <span
  m='224380'>backsolve</span> <span m='225910'>to</span> <span
  m='226070'>get</span> <span m='226610'>the</span> <span
  m='226820'>other</span> <span m='227030'>two.</span> <span
  m='227770'>So</span> <span m='228270'>this</span> <span
  m='228600'>equation</span> <span m='229010'>tells</span> <span
  m='229240'>me</span> <span m='229380'>that</span> <span m='229860'>my</span>
  <span m='230010'>second</span> <span m='231240'>number is</span> <span
  m='232080'>-1,</span> <span m='233360'>and</span> <span m='234260'>this</span>
  <span m='234520'>equation</span> <span m='235670'>tells</span> <span
  m='235990'>me</span> <span m='236340'>that</span> <span m='236645'>that</span>
  <span m='236950'>third</span> <span m='237270'>variable</span> <span
  m='238220'>-3/5,</span> <span m='238920'>if</span> <span m='239040'>I</span>
  <span m='239100'>can</span> <span m='239260'>fit</span> <span
  m='239460'>it</span> <span m='239550'>in</span> <span m='239680'>here.</span>
  <span m='244590'>That's</span> <span m='244940'>a</span> <span
  m='245500'>-3/5,</span> <span m='246530'>if</span> <span
  m='247010'>it's</span> <span m='247220'>difficult</span> <span
  m='247700'>to</span> <span m='247800'>see</span> <span m='248010'>that</span>
  <span m='248230'>on</span> <span m='248670'>the</span> <span
  m='248780'>tape.</span> </p><p><span m='250890'>Now,</span> <span
  m='251440'>let's</span> <span m='251810'>move</span> <span
  m='252090'>on,</span> <span m='252300'>next,</span> <span m='252700'>to</span>
  <span m='252970'>the</span> <span m='253285'>row</span> <span
  m='254415'>space.</span> <span m='257600'>Next</span> <span
  m='258070'>is</span> <span m='258220'>the</span> <span m='258339'>row</span>
  <span m='258600'>space.</span> <span m='259380'>So</span> <span
  m='259540'>how</span> <span m='259730'>do</span> <span m='259810'>we</span>
  <span m='259940'>find</span> <span m='260560'>the</span> <span
  m='260690'>dimension</span> <span m='262250'>of</span> <span
  m='262430'>the</span> <span m='262530'>row</span> <span
  m='262760'>space?</span> <span m='263170'>I'm</span> <span
  m='263380'>going</span> <span m='263470'>to</span> <span
  m='263560'>write</span> <span m='263780'>row</span> <span m='264100'>space
  as</span> <span m='264430'>column</span> <span m='264950'>space</span> <span
  m='265240'>of</span> <span m='265350'>B</span> <span
  m='265620'>transpose.</span> <span m='267730'>How</span> <span
  m='267950'>do</span> <span m='268050'>we</span> <span m='268160'>find</span>
  <span m='268450'>that?</span> <span m='269070'>Well,</span> <span
  m='269830'>remember</span> <span m='270310'>that</span> <span
  m='270740'>one</span> <span m='271140'>of</span> <span m='271220'>our</span>
  <span m='271340'>big</span> <span m='271600'>facts</span> <span
  m='271980'>in</span> <span m='272060'>this</span> <span
  m='272210'>class</span> <span m='272450'>is</span> <span
  m='272560'>that</span> <span m='273130'>the</span> <span
  m='273590'>dimension</span> <span m='274060'>of</span> <span
  m='274130'>the</span> <span m='274240'>row</span> <span
  m='274420'>space</span> <span m='274780'>is</span> <span m='274940'>the</span>
  <span m='275030'>same</span> <span m='275370'>as</span> <span
  m='275460'>the</span> <span m='275570'>dimension</span> <span
  m='275980'>of</span> <span m='276110'>the</span> <span
  m='276200'>column</span> <span m='276540'>space.</span> <span
  m='277040'>It's</span> <span m='277300'>just</span> <span
  m='277610'>the</span> <span m='277870'>number</span> <span
  m='278230'>of</span> <span m='278470'>pivots.</span> <span
  m='280060'>So</span> <span m='280280'>that's</span> <span
  m='280570'>good.</span> <span m='281030'>It's</span> <span
  m='281220'>2.</span> <span m='283660'>And</span> <span m='283790'>how</span>
  <span m='283970'>do</span> <span m='284050'>we</span> <span
  m='284190'>find</span> <span m='284500'>a</span> <span m='284550'>basis</span>
  <span m='285600'>for</span> <span m='286420'>the</span> <span
  m='287390'>row</span> <span m='287650'>space?</span> <span
  m='289600'>There</span> <span m='289760'>are</span> <span m='289780'>a</span>
  <span m='289820'>couple</span> <span m='290170'>ways</span> <span
  m='290540'>of</span> <span m='290720'>thinking</span> <span
  m='291090'>about</span> <span m='291430'>this.</span> </p><p><span
  m='293460'>One</span> <span m='294030'>way</span> <span m='294130'>to</span>
  <span m='294240'>think</span> <span m='294550'>about</span> <span
  m='294780'>it</span> <span m='294910'>is:</span> <span m='295540'>we</span>
  <span m='295750'>got</span> <span m='296000'>this</span> <span
  m='296250'>upper</span> <span m='296570'>triangular</span> <span
  m='297290'>matrix</span> <span m='297830'>from</span> <span
  m='298000'>B</span> <span m='298330'>by</span> <span m='298500'>doing</span>
  <span m='298950'>elimination.</span> <span m='300110'>And</span> <span
  m='300390'>elimination</span> <span m='301770'>doesn't</span> <span
  m='302150'>change</span> <span m='302930'>the</span> <span
  m='303370'>row</span> <span m='303630'>space.</span> <span
  m='304420'>So</span> <span m='304590'>I</span> <span m='304730'>can</span>
  <span m='304880'>just</span> <span m='305050'>use</span> <span
  m='305250'>the</span> <span m='305400'>two</span> <span
  m='306350'>pivot</span> <span m='306800'>rows</span> <span
  m='308170'>of</span> <span m='308640'>the</span> <span
  m='308920'>matrix</span> <span m='309350'>U.</span> <span
  m='312700'>Basis</span> <span m='315420'>for</span> <span m='315730'>my</span>
  <span m='315870'>row</span> <span m='316180'>space</span> <span
  m='316600'>here</span> <span m='323820'>is:</span> <span m='324350'>I</span>
  <span m='324470'>just</span> <span m='325620'>put</span> <span
  m='325830'>these</span> <span m='326100'>two</span> <span
  m='326480'>pivot</span> <span m='327000'>rows</span> <span
  m='334280'>together,</span> <span m='334680'>and I</span> <span
  m='334840'>get</span> <span m='335000'>a</span> <span m='335050'>basis</span>
  <span m='335810'>for</span> <span m='335960'>this</span> <span
  m='336130'>row</span> <span m='336290'>space.</span> </p><p><span
  m='338650'>The</span> <span m='338890'>last</span> <span m='339260'>one</span>
  <span m='339460'>is</span> <span m='339670'>always</span> <span
  m='339940'>the</span> <span m='340060'>toughest</span> <span
  m='340690'>and</span> <span m='340820'>the</span> <span
  m='340900'>trickiest.</span> <span m='342110'>We</span> <span
  m='342230'>have</span> <span m='342420'>to</span> <span m='342530'>do</span>
  <span m='343170'>the</span> <span m='343610'>left</span> <span
  m='344140'>null</span> <span m='344400'>space</span> <span
  m='344960'>or</span> <span m='345240'>the</span> <span m='345380'>null</span>
  <span m='345680'>space</span> <span m='346080'>of</span> <span
  m='346170'>B</span> <span m='346440'>transpose.</span> <span
  m='351040'>First,</span> <span m='351590'>let's</span> <span
  m='351800'>compute</span> <span m='352160'>its</span> <span
  m='354060'>dimension.</span> <span m='354730'>What's</span> <span
  m='355050'>the</span> <span m='355450'>dimension</span> <span
  m='356100'>of</span> <span m='356220'>this</span> <span m='356430'>left</span>
  <span m='356740'>null</span> <span m='356950'>space?</span> <span
  m='359100'>Well,</span> <span m='359310'>there's</span> <span
  m='359620'>a</span> <span m='359700'>similar</span> <span
  m='360170'>formula</span> <span m='361530'>to</span> <span
  m='362470'>the</span> <span m='362580'>one</span> <span m='362950'>we</span>
  <span m='363090'>used</span> <span m='363510'>when</span> <span
  m='363680'>we</span> <span m='363840'>were</span> <span
  m='363940'>computing</span> <span m='364910'>the</span> <span
  m='365100'>dimension</span> <span m='365520'>of</span> <span
  m='365710'>the</span> <span m='365820'>null</span> <span
  m='366050'>space.</span> <span m='367710'>It's</span> <span
  m='367900'>just</span> <span m='368110'>the</span> <span
  m='368210'>number</span> <span m='368620'>of</span> <span
  m='368740'>rows</span> <span m='369720'>minus</span> <span
  m='370450'>the</span> <span m='370650'>number</span> <span
  m='370930'>of</span> <span m='371010'>pivots.</span> <span
  m='372210'>So</span> <span m='372420'>there</span> <span m='372740'>are</span>
  <span m='372940'>three</span> <span m='373380'>rows.</span> <span
  m='373930'>Our</span> <span m='374030'>matrix</span> <span
  m='374430'>is</span> <span m='374590'>3 by 3.</span> <span
  m='375900'>And</span> <span m='376180'>there</span> <span
  m='376340'>are</span> <span m='376510'>two</span> <span
  m='376750'>pivots.</span> <span m='377370'>So</span> <span
  m='378060'>this</span> <span m='378250'>is</span> <span m='378410'>just</span>
  <span m='378830'>one-dimensional,</span> <span m='380070'>again.</span>
  </p><p><span m='383810'>We</span> <span m='384080'>need</span> <span
  m='384300'>to</span> <span m='384490'>compute,</span> <span
  m='385220'>now,</span> <span m='387250'>this</span> <span
  m='388100'>left</span> <span m='388520'>null</span> <span
  m='388770'>space.</span> <span m='393810'>Let</span> <span
  m='393970'>me</span> <span m='394070'>go</span> <span m='394810'>back</span>
  <span m='395070'>to</span> <span m='395210'>our</span> <span
  m='395540'>original</span> <span m='395980'>matrix.</span> <span
  m='396950'>The</span> <span m='397040'>way</span> <span m='397250'>to</span>
  <span m='397540'>do</span> <span m='397820'>this</span> <span
  m='398180'>is</span> <span m='398880'>to</span> <span m='399060'>take</span>
  <span m='399570'>B</span> <span m='399840'>equals</span> <span
  m='400290'>L*U,</span> <span m='401460'>and</span> <span
  m='401780'>invert</span> <span m='402350'>L,</span> <span
  m='404110'>and</span> <span m='404280'>get</span> <span m='404640'>E*B</span>
  <span m='405280'>equals</span> <span m='405640'>U.</span> <span
  m='406190'>So</span> <span m='406500'>we</span> <span m='406670'>need</span>
  <span m='406850'>to</span> <span m='407040'>move</span> <span
  m='407380'>L</span> <span m='407690'>over</span> <span m='408090'>to</span>
  <span m='408250'>the</span> <span m='408350'>left-hand</span> <span
  m='408810'>side.</span> <span m='411670'>If</span> <span m='412040'>we</span>
  <span m='412180'>do</span> <span m='412500'>that--</span> <span
  m='413910'>I'm</span> <span m='414100'>just</span> <span
  m='414260'>going</span> <span m='414340'>to</span> <span
  m='414430'>write</span> <span m='414680'>that</span> <span
  m='415800'>down</span> <span m='416120'>here.</span> <span
  m='419990'>So</span> <span m='420310'>what's</span> <span
  m='420620'>the</span> <span m='420900'>inverse</span> <span
  m='421510'>of</span> <span m='422010'>the</span> <span m='422200'>L</span>
  <span m='422490'>matrix?</span> <span m='423000'>We</span> <span
  m='423130'>just</span> <span m='423300'>get</span> <span m='423490'>1,</span>
  <span m='425340'>-2,</span> <span m='425804'>1,</span> <span
  m='426268'>0,</span> <span m='427196'>1,</span> <span m='427660'>1,</span>
  <span m='429585'>times</span> <span m='429940'>B,</span> <span
  m='433720'>is</span> <span m='435430'>our</span> <span m='435620'>U</span>
  <span m='435930'>matrix,</span> <span m='436440'>this</span> <span
  m='436620'>upper</span> <span m='436890'>triangular</span> <span
  m='437340'>matrix.</span> <span m='445830'>Now</span> <span
  m='446040'>that</span> <span m='446140'>I</span> <span m='446210'>moved</span>
  <span m='446550'>L</span> <span m='446810'>over</span> <span
  m='447010'>to</span> <span m='447130'>the</span> <span m='447260'>other</span>
  <span m='447390'>side,</span> <span m='447710'>I</span> <span
  m='447840'>can</span> <span m='448020'>read</span> <span m='448620'>off</span>
  <span m='451770'>the</span> <span m='452300'>vectors</span> <span
  m='453030'>in</span> <span m='453300'>my</span> <span m='453460'>left</span>
  <span m='453890'>null</span> <span m='454100'>space.</span> </p><p><span
  m='455400'>Now,</span> <span m='456410'>I'm</span> <span
  m='456640'>looking</span> <span m='457000'>at</span> <span
  m='457850'>not</span> <span m='458140'>my</span> <span m='458300'>pivot</span>
  <span m='458650'>variables</span> <span m='459140'>but</span> <span
  m='459290'>my</span> <span m='459420'>free</span> <span
  m='459850'>variables,</span> <span m='460530'>because</span> <span
  m='460930'>it's</span> <span m='461160'>some</span> <span
  m='461360'>sort</span> <span m='461550'>of</span> <span m='461620'>null</span>
  <span m='461850'>space.</span> <span m='462670'>but</span> <span
  m='462920'>I</span> <span m='463020'>want</span> <span m='463220'>to</span>
  <span m='463280'>look</span> <span m='464150'>at</span> <span
  m='464380'>this</span> <span m='464710'>E</span> <span
  m='465320'>matrix.</span> <span m='465940'>So</span> <span
  m='466660'>the</span> <span m='466890'>third</span> <span
  m='467470'>row</span> <span m='467830'>of</span> <span m='467940'>this</span>
  <span m='468200'>E</span> <span m='468410'>matrix,</span> <span
  m='469120'>the</span> <span m='469490'>third</span> <span
  m='469800'>row</span> <span m='470040'>corresponds</span> <span
  m='470700'>to</span> <span m='471420'>the</span> <span m='471920'>three</span>
  <span m='472500'>row</span> <span m='472800'>here</span> <span
  m='473760'>and</span> <span m='473900'>when</span> <span m='474020'>I</span>
  <span m='474060'>multiply</span> <span m='474590'>this</span> <span
  m='474920'>by</span> <span m='475490'>B,</span> <span m='475900'>I</span>
  <span m='476040'>just</span> <span m='476310'>get</span> <span
  m='476780'>zeros,</span> <span m='477660'>so</span> <span
  m='477860'>this</span> <span m='478050'>is</span> <span m='478220'>in</span>
  <span m='478450'>the</span> <span m='478880'>left</span> <span
  m='479240'>null</span> <span m='479440'>space.</span> <span
  m='483570'>A</span> <span m='483670'>basis</span> <span m='486470'>for</span>
  <span m='488030'>this</span> <span m='488290'>left</span> <span
  m='488550'>null</span> <span m='488750'>space</span> <span
  m='490600'>is--</span> <span m='491190'>see</span> <span m='491590'>if
  I</span> <span m='491990'>can fit</span> <span m='492330'>it here--</span>
  <span m='493330'>just</span> <span m='493670'>this</span> <span
  m='495240'>[1,</span> <span m='495590'>0,</span> <span m='495990'>1].</span>
  <span m='497830'>Good.</span> </p><p><span m='501530'>So</span> <span
  m='502510'>we've</span> <span m='503690'>found</span> <span
  m='504810'>the</span> <span m='506640'>dimension</span> <span
  m='507330'>of</span> <span m='508620'>and</span> <span m='509150'>basis</span>
  <span m='509640'>for</span> <span m='510180'>all</span> <span
  m='510430'>of</span> <span m='510520'>the</span> <span m='510610'>four</span>
  <span m='510850'>fundamental</span> <span m='511280'>subspaces.</span> <span
  m='512559'>Before</span> <span m='513130'>I</span> <span
  m='513280'>move</span> <span m='513600'>on,</span> <span m='513789'>I</span>
  <span m='513880'>just</span> <span m='514049'>want</span> <span
  m='514210'>to</span> <span m='515039'>recall</span> <span
  m='515860'>which</span> <span m='516549'>of</span> <span m='516870'>the</span>
  <span m='517135'>L</span> <span m='517400'>matrix</span> <span
  m='517860'>or</span> <span m='518000'>the</span> <span m='518140'>U</span>
  <span m='518370'>matrix</span> <span m='518809'>we</span> <span
  m='519059'>used</span> <span m='519840'>for</span> <span
  m='520150'>each</span> <span m='520460'>of</span> <span
  m='520610'>these</span> <span m='521179'>subspaces.</span> <span
  m='523150'>So</span> <span m='523380'>for</span> <span m='523539'>the</span>
  <span m='523679'>column</span> <span m='524159'>space,</span> <span
  m='525190'>we</span> <span m='525490'>used</span> <span m='528330'>the</span>
  <span m='528590'>pivot</span> <span m='528930'>columns</span> <span
  m='529580'>of</span> <span m='529730'>the</span> <span m='529830'>L</span>
  <span m='530120'>matrix.</span> <span m='531400'>For</span> <span
  m='531590'>the</span> <span m='531790'>null</span> <span
  m='532190'>space,</span> <span m='533100'>we</span> <span
  m='533910'>looked</span> <span m='534250'>at</span> <span
  m='534600'>the</span> <span m='534850'>U</span> <span
  m='535120'>matrix.</span> <span m='536510'>For</span> <span
  m='536920'>the</span> <span m='537660'>row</span> <span
  m='538050'>space,</span> <span m='539570'>we</span> <span
  m='539870'>also</span> <span m='540260'>looked</span> <span
  m='540520'>at</span> <span m='540660'>the U</span> <span
  m='540950'>matrix.</span> <span m='542080'>And</span> <span
  m='542530'>for</span> <span m='543300'>the</span> <span m='543470'>left</span>
  <span m='543850'>null</span> <span m='544050'>space,</span> <span
  m='544730'>we</span> <span m='544940'>needed</span> <span m='545200'>to</span>
  <span m='545430'>invert</span> <span m='545980'>the L</span> <span
  m='546200'>matrix</span> <span m='547390'>and</span> <span
  m='547550'>look</span> <span m='547720'>at</span> <span m='547870'>the</span>
  <span m='548880'>free</span> <span m='549600'>row.</span> </p><p><span
  m='554730'>We're</span> <span m='554960'>done</span> <span
  m='555310'>with</span> <span m='555550'>the</span> <span
  m='555750'>problem.</span> <span m='556230'>But</span> <span
  m='556430'>the</span> <span m='556830'>last</span> <span
  m='557240'>thing</span> <span m='557440'>that's</span> <span
  m='557770'>useful</span> <span m='558340'>is</span> <span m='558460'>to</span>
  <span m='558580'>draw</span> <span m='559020'>a</span> <span
  m='559070'>picture,</span> <span m='560860'>which</span> <span
  m='561030'>I</span> <span m='561100'>have</span> <span m='561600'>right</span>
  <span m='561930'>here.</span> <span m='562790'>I</span> <span
  m='562920'>know</span> <span m='563760'>in</span> <span
  m='563920'>lecture</span> <span m='564390'>Professor</span> <span
  m='564970'>Strang</span> <span m='565270'>has</span> <span m='565660'>drawn
  you</span> <span m='566000'>some</span> <span m='566200'>sort</span> <span
  m='566390'>of</span> <span m='566520'>cartoon</span> <span
  m='567180'>pictures</span> <span m='567780'>of</span> <span
  m='568250'>what</span> <span m='568560'>these</span> <span
  m='568680'>subspaces</span> <span m='569280'>look</span> <span
  m='569560'>like.</span> <span m='570230'>But</span> <span
  m='570440'>here</span> <span m='571000'>I</span> <span m='571100'>want</span>
  <span m='571330'>to</span> <span m='571390'>try</span> <span
  m='571660'>to</span> <span m='572220'>actually</span> <span
  m='572740'>draw</span> <span m='573110'>them</span> <span m='573390'>in</span>
  <span m='573570'>a</span> <span m='574130'>special</span> <span
  m='574580'>case.</span> <span m='575050'>So</span> <span m='575250'>if</span>
  <span m='575400'>you</span> <span m='575530'>can</span> <span
  m='576060'>read</span> <span m='576420'>my</span> <span
  m='576600'>drawing</span> <span m='577070'>here,</span> <span
  m='578560'>what</span> <span m='578880'>do</span> <span m='578940'>we</span>
  <span m='579080'>have?</span> <span m='581440'>We</span> <span
  m='581730'>have</span> <span m='584780'>the</span> <span m='585140'>row</span>
  <span m='585660'>space</span> <span m='586100'>here,</span> <span
  m='588410'>and</span> <span m='589240'>the</span> <span m='589430'>null</span>
  <span m='589760'>space</span> <span m='590180'>here.</span> <span
  m='593064'>Right?</span> <span m='594470'>And</span> <span
  m='594850'>so</span> <span m='595550'>B</span> <span m='596000'>maps</span>
  <span m='599230'>this</span> <span m='599500'>picture</span> <span
  m='600290'>into</span> <span m='600860'>this</span> <span
  m='601140'>picture.</span> </p><p><span m='602640'>The</span> <span
  m='602930'>null</span> <span m='603210'>space</span> <span
  m='603540'>here--</span> <span m='604890'>all</span> <span
  m='605080'>the</span> <span m='605150'>scalar</span> <span
  m='605560'>multiples</span> <span m='606180'>of</span> <span
  m='606340'>this</span> <span m='606570'>vector--</span> <span
  m='607070'>all</span> <span m='607360'>go</span> <span m='607920'>to</span>
  <span m='608170'>0,</span> <span m='609230'>because</span> <span
  m='609520'>they're</span> <span m='609710'>in</span> <span
  m='610290'>the</span> <span m='610810'>null</span> <span
  m='611040'>space.</span> <span m='611520'>That's</span> <span
  m='611710'>exactly</span> <span m='612210'>what</span> <span
  m='613100'>B</span> <span m='613300'>takes</span> <span m='613810'>to</span>
  <span m='614430'>0.</span> <span m='616580'>B</span> <span
  m='616810'>takes</span> <span m='617130'>everything</span> <span
  m='617590'>else,</span> <span m='617840'>including</span> <span
  m='618520'>the</span> <span m='618660'>row</span> <span
  m='618880'>space,</span> <span m='619430'>into</span> <span
  m='619770'>this</span> <span m='619960'>column</span> <span
  m='620410'>space.</span> <span m='623270'>And</span> <span
  m='623630'>what</span> <span m='624000'>does</span> <span m='624130'>B</span>
  <span m='624280'>transpose</span> <span m='624980'>do?</span> <span
  m='625490'>Well,</span> <span m='625960'>B</span> <span
  m='626120'>transpose</span> <span m='627460'>kills</span> <span
  m='627960'>this</span> <span m='628730'>left</span> <span
  m='629240'>null</span> <span m='629450'>space,</span> <span
  m='630480'>kills</span> <span m='630870'>this</span> <span
  m='631110'>vector,</span> <span m='631780'>and it</span> <span
  m='631960'>take</span> <span m='632160'>everything</span> <span
  m='632580'>else</span> <span m='632850'>into</span> <span
  m='633260'>the</span> <span m='633390'>row</span> <span
  m='633630'>space,</span> <span m='634580'>into</span> <span
  m='634820'>the</span> <span m='634910'>column</span> <span
  m='635170'>space</span> <span m='635520'>of</span> <span m='636095'>B</span>
  <span m='636500'>transpose.</span> <span m='637870'>OK.</span> </p><p><span
  m='638910'>Thanks</span> <span m='639170'>for</span> <span
  m='639240'>doing</span> <span m='639440'>this</span> <span
  m='639740'>exercise</span> <span m='640430'>together.</span> <span
  m='640870'>I</span> <span m='640950'>hope</span> <span m='641200'>this</span>
  <span m='641380'>picture</span> <span m='641810'>is</span> <span
  m='642030'>helpful.</span> </p>
embedded_media:
  - uid: d366b7b07ad5758f6c2ffbdd26e6442f
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: D8u1LV9CnCk
  - uid: a603e228da673fb1d1d490c0229fc1b0
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: D8u1LV9CnCk
  - uid: 5c569e8cd8cf35643ec5bb568055b8d4
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/computing-four-fundamental/id488155309?i=108454340
  - uid: c4bb0554d81461bee27df3123f2df49c
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110526_B2_300k.mp4
  - uid: ca330ef1adce504696783282a4f5c155
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/D8u1LV9CnCk/default.jpg'
  - uid: 21d5e2d2cd30bf72ad24e834509e7606
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: D8u1LV9CnCk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/computing-the-four-fundamental-subspaces/D8u1LV9CnCk.srt
  - uid: ab46153965f8be2aeb393f4dc4cd6c5d
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: D8u1LV9CnCk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/computing-the-four-fundamental-subspaces/D8u1LV9CnCk.pdf
  - uid: 7d596b1a336e6580d651516ad5dca5cb
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 3249f58bdd180dde24fe038e70538eee
    parent_uid: a248b06d4ecc4ea12bb9b2bcf196fd86
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
