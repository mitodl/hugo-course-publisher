---
about_this_resource_text: >-
  <p><strong>Description:</strong> A Fourier series separates a periodic
  function into a combination (infinite) of all cosine and since basis
  functions.</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 8.1</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: vA9dfINW4Rg
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Video-YouTube-Stream
    type: Video
    uid: 9821c2cfb6630e8c58444ced16ee8def
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/vA9dfINW4Rg/default.jpg'
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fe5edf9aba5fcac71e8f43f8d8889da6
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: vA9dfINW4Rg
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1393adf125cd06cd46025467257ea415
  - id: vA9dfINW4Rg.srt
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/fourier-and-laplace-transforms/fourier-series/vA9dfINW4Rg.srt
    title: 3play caption file
    type: null
    uid: e2dff4b2436ddd36be06e71573b6fd27
  - id: vA9dfINW4Rg.pdf
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/fourier-and-laplace-transforms/fourier-series/vA9dfINW4Rg.pdf
    title: 3play pdf file
    type: null
    uid: f215541ba269252b86d5473e86267030
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 344ea1c846decd8cc6e0f4c300ed3ab1
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 119895acd2441e56efdd1de937243b2c
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Video-iTunes U-MP4
    type: Video
    uid: bc0b09a995c76842148d6c936e495de9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_8_1_FourierSeries_300k.mp4
    parent_uid: 2fc865339ff42a99766066a7a2860a21
    title: Video-Internet Archive-MP4
    type: Video
    uid: a11314b6229af46ea30dd4f0bea45fad
inline_embed_id: 94072281fourierseries69830551
order_index: 523
parent_uid: 078d9ec2bb3063bb722afd2a85326f18
related_resources_text: ''
short_url: fourier-series
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/fourier-and-laplace-transforms/fourier-series
title: Fourier Series
transcript: >-
  <p><span m='290'>GILBERT STRANG: OK,</span> <span m='1550'>I'm</span> <span
  m='1770'>going</span> <span m='1970'>to</span> <span m='2050'>explain</span>
  <span m='2560'>Fourier</span> <span m='3060'>series,</span> <span
  m='3840'>and</span> <span m='4040'>that</span> <span m='4370'>I</span> <span
  m='4500'>can't</span> <span m='4910'>do</span> <span m='5130'>in</span> <span
  m='5270'>10</span> <span m='5540'>minutes.</span> <span m='6300'>It'll</span>
  <span m='6590'>take</span> <span m='6920'>two,</span> <span
  m='7250'>maybe</span> <span m='7590'>three,</span> <span
  m='8450'>sessions</span> <span m='9460'>to</span> <span m='10890'>see</span>
  <span m='11380'>enough</span> <span m='11670'>examples</span> <span
  m='12570'>to</span> <span m='12750'>really</span> <span m='13090'>use</span>
  <span m='13460'>the</span> <span m='13640'>idea.</span> <span
  m='15690'>Let</span> <span m='15930'>me</span> <span m='17040'>start</span>
  <span m='17560'>with</span> <span m='19340'>what</span> <span
  m='19680'>we're</span> <span m='19820'>looking</span> <span
  m='20220'>for.</span> <span m='20640'>We</span> <span m='20990'>have</span>
  <span m='21200'>a</span> <span m='21280'>function.</span> <span
  m='23190'>And</span> <span m='23570'>we</span> <span m='23800'>want</span>
  <span m='24400'>to</span> <span m='25530'>write</span> <span
  m='25940'>it</span> <span m='26160'>as</span> <span m='26400'>a</span> <span
  m='26510'>combination</span> <span m='27640'>of</span> <span
  m='28130'>cosines</span> <span m='29100'>and</span> <span
  m='29380'>sines.</span> <span m='30920'>So</span> <span m='31110'>those</span>
  <span m='31440'>our</span> <span m='31790'>basis</span> <span
  m='32450'>functions--</span> <span m='33620'>the</span> <span
  m='33760'>cosines</span> <span m='34570'>and</span> <span m='34750'>the</span>
  <span m='34860'>sine.</span> </p><p><span m='35880'>And</span> <span
  m='36654'>a n's</span> <span m='37430'>and</span> <span m='37600'>the</span>
  <span m='37700'>b n's</span> <span m='38380'>are</span> <span
  m='38620'>the</span> <span m='38810'>coefficients</span> <span
  m='39600'>that</span> <span m='39750'>we</span> <span m='39910'>have</span>
  <span m='40120'>to</span> <span m='40250'>look</span> <span
  m='40500'>for.</span> <span m='41480'>That</span> <span m='41800'>tells</span>
  <span m='42150'>us</span> <span m='42510'>how</span> <span
  m='42780'>much</span> <span m='43680'>of</span> <span m='44140'>cosine</span>
  <span m='44485'>nx</span> <span m='45800'>is</span> <span m='46070'>in</span>
  <span m='46840'>the</span> <span m='46980'>big</span> <span
  m='47240'>function</span> <span m='47790'>f</span> <span m='48010'>of</span>
  <span m='48170'>x.</span> <span m='49270'>Notice</span> <span
  m='49780'>that</span> <span m='50150'>the</span> <span
  m='50420'>cosines</span> <span m='51590'>start</span> <span
  m='51885'>at</span> <span m='52180'>n</span> <span m='52370'>equals</span>
  <span m='52810'>0,</span> <span m='53270'>because</span> <span
  m='53790'>cosine</span> <span m='54380'>of</span> <span m='54490'>0</span>
  <span m='55000'>is</span> <span m='55140'>1.</span> <span m='55950'>So</span>
  <span m='57470'>there's</span> <span m='57670'>an</span> <span
  m='57840'>a0</span> <span m='58600'>in</span> <span m='58770'>our</span> <span
  m='59220'>sum.</span> <span m='60020'>But</span> <span m='60260'>there</span>
  <span m='60460'>isn't</span> <span m='60730'>a</span> <span
  m='60850'>b0,</span> <span m='61580'>because</span> <span m='62990'>n</span>
  <span m='63230'>equals</span> <span m='63570'>zero</span> <span m='64030'>of
  the</span> <span m='64200'>sine</span> <span m='65090'>would</span> <span
  m='65330'>be</span> <span m='65590'>zero,</span> <span m='66200'>and</span>
  <span m='66750'>we</span> <span m='66900'>don't</span> <span
  m='67130'>get</span> <span m='67330'>anything</span> <span
  m='67710'>there.</span> </p><p><span m='68680'>So</span> <span
  m='69250'>we're</span> <span m='69410'>looking</span> <span
  m='69790'>for</span> <span m='69940'>the</span> <span m='70150'>a n's</span>
  <span m='70575'>and</span> <span m='71000'>b n's.</span> <span
  m='71820'>And,</span> <span m='72550'>really,</span> <span m='73250'>I</span>
  <span m='73410'>want</span> <span m='73730'>to</span> <span
  m='73810'>show</span> <span m='74210'>you,</span> <span m='74400'>at</span>
  <span m='74530'>the</span> <span m='74680'>same</span> <span
  m='75110'>time,</span> <span m='76000'>the</span> <span
  m='76720'>complex</span> <span m='77530'>form</span> <span
  m='78400'>with</span> <span m='78910'>coefficient</span> <span
  m='79720'>cn.</span> <span m='81580'>And</span> <span m='81850'>now</span>
  <span m='82300'>n</span> <span m='82730'>goes</span> <span
  m='83180'>from</span> <span m='83550'>minus</span> <span
  m='84040'>infinity</span> <span m='84820'>to</span> <span
  m='84980'>infinity.</span> <span m='85830'>That's</span> <span
  m='86160'>really</span> <span m='86580'>the</span> <span m='86740'>more</span>
  <span m='87460'>beautiful</span> <span m='88030'>form</span> <span
  m='88820'>because</span> <span m='92880'>that</span> <span
  m='93440'>one</span> <span m='93830'>formula</span> <span m='94350'>for</span>
  <span m='94570'>cn</span> <span m='95020'>does</span> <span
  m='95270'>the</span> <span m='95410'>job,</span> <span
  m='96490'>whereas</span> <span m='97510'>here</span> <span m='98040'>I</span>
  <span m='98190'>will</span> <span m='98400'>need</span> <span
  m='98750'>a</span> <span m='98820'>separate</span> <span
  m='99390'>formula</span> <span m='99900'>for</span> <span m='100140'>a
  n</span> <span m='101390'>and</span> <span m='101950'>for</span> <span
  m='102110'>bn.</span> </p><p><span m='103734'>OK.</span> <span
  m='106740'>So</span> <span m='106950'>this</span> <span m='107290'>is</span>
  <span m='109480'>natural</span> <span m='110230'>when</span> <span
  m='110510'>the</span> <span m='110630'>function</span> <span
  m='111200'>is</span> <span m='111390'>real,</span> <span m='112440'>but</span>
  <span m='112810'>in</span> <span m='113010'>the</span> <span
  m='113180'>end,</span> <span m='113650'>and</span> <span m='113960'>for</span>
  <span m='114120'>the</span> <span m='114290'>discrete</span> <span
  m='115080'>Fourier</span> <span m='115520'>transform,</span> <span
  m='116220'>and</span> <span m='116410'>for</span> <span m='116570'>the</span>
  <span m='116720'>fast</span> <span m='117150'>Fourier</span> <span
  m='117610'>transform,</span> <span m='118560'>the</span> <span
  m='118750'>complex</span> <span m='119420'>case</span> <span
  m='119810'>will</span> <span m='120070'>win.</span> <span
  m='120490'>And,</span> <span m='120770'>of</span> <span
  m='120900'>course,</span> <span m='121280'>everybody</span> <span
  m='121790'>sees</span> <span m='122250'>that</span> <span m='122750'>e</span>
  <span m='123020'>to</span> <span m='123110'>the</span> <span
  m='123340'>inx,</span> <span m='125170'>by</span> <span
  m='125480'>Euler's</span> <span m='125980'>great</span> <span
  m='126330'>formula,</span> <span m='127170'>is</span> <span
  m='127380'>a</span> <span m='127480'>combination</span> <span
  m='128400'>of</span> <span m='128570'>cosine</span> <span m='128850'>nx</span>
  <span m='130250'>and</span> <span m='130530'>sine</span> <span
  m='130795'>nx.</span> <span m='131370'>So,</span> <span m='132090'>I</span>
  <span m='132220'>can</span> <span m='132430'>use</span> <span
  m='132710'>those,</span> <span m='133490'>or</span> <span m='133700'>I</span>
  <span m='133780'>can</span> <span m='133980'>use</span> <span
  m='134410'>cosine</span> <span m='135150'>and</span> <span
  m='135530'>sine.</span> </p><p><span m='136470'>OK.</span> <span
  m='137860'>So,</span> <span m='138730'>how</span> <span m='138850'>do</span>
  <span m='138940'>you</span> <span m='139020'>find</span> <span
  m='139350'>these</span> <span m='139590'>numbers?</span> <span
  m='141360'>The</span> <span m='141500'>key</span> <span m='141960'>is</span>
  <span m='142480'>orthogonality.</span> <span m='143600'>So</span> <span
  m='143790'>that's</span> <span m='144190'>the</span> <span
  m='144280'>first</span> <span m='145140'>central</span> <span
  m='145790'>idea</span> <span m='146300'>here</span> <span m='146670'>in</span>
  <span m='146800'>Fourier</span> <span m='147300'>series,</span> <span
  m='148030'>is</span> <span m='148250'>the</span> <span m='148410'>idea</span>
  <span m='148810'>of</span> <span m='148900'>orthogonality.</span> <span
  m='150460'>Now</span> <span m='150660'>what</span> <span
  m='150830'>does</span> <span m='150970'>that</span> <span
  m='151150'>mean?</span> <span m='151540'>That</span> <span
  m='151630'>means</span> <span m='151900'>perpendicular.</span> <span
  m='153390'>And</span> <span m='154210'>for</span> <span m='154450'>a</span>
  <span m='154480'>vector,</span> <span m='155640'>and</span> <span
  m='155890'>a</span> <span m='155970'>second</span> <span
  m='156430'>vector,</span> <span m='156930'>we</span> <span
  m='157100'>have</span> <span m='157300'>an</span> <span m='157420'>idea</span>
  <span m='157830'>of</span> <span m='157920'>what</span> <span
  m='158160'>perpendicular</span> <span m='158970'>means.</span> <span
  m='160100'>The</span> <span m='160260'>90</span> <span
  m='160650'>degree</span> <span m='161050'>angle</span> <span
  m='161450'>between</span> <span m='161940'>them.</span> <span
  m='162670'>And</span> <span m='162920'>we</span> <span m='163090'>check</span>
  <span m='163450'>that</span> <span m='163860'>by</span> <span
  m='164300'>the</span> <span m='165030'>dot</span> <span
  m='165430'>product--</span> <span m='166160'>or</span> <span
  m='166500'>inner</span> <span m='166930'>product,</span> <span
  m='167730'>whichever</span> <span m='168210'>name</span> <span
  m='168510'>you</span> <span m='168650'>like--</span> <span
  m='170710'>between</span> <span m='171360'>the</span> <span
  m='171500'>two</span> <span m='171720'>vectors</span> <span
  m='172250'>should</span> <span m='172530'>be</span> <span m='172820'>0.</span>
  </p><p><span m='174110'>OK.</span> <span m='174590'>But</span> <span
  m='175070'>here</span> <span m='175260'>we</span> <span m='175360'>have</span>
  <span m='175540'>functions--</span> <span m='179400'>like</span> <span
  m='179990'>cosine</span> <span m='180610'>functions.</span> <span
  m='181560'>So</span> <span m='181710'>here's</span> <span
  m='182300'>one</span> <span m='183010'>cosine,</span> <span
  m='183980'>and</span> <span m='184190'>here's</span> <span m='184660'>a</span>
  <span m='184780'>different</span> <span m='185260'>cosine.</span> <span
  m='186780'>So</span> <span m='186980'>those</span> <span m='187230'>are</span>
  <span m='187360'>two</span> <span m='188090'>different</span> <span
  m='188590'>basis</span> <span m='189090'>functions--</span> <span
  m='191595'>say,</span> <span m='191950'>cosine</span> <span
  m='192550'>of</span> <span m='192660'>7x</span> <span m='193840'>and</span>
  <span m='194080'>cosine</span> <span m='194770'>of</span> <span
  m='195380'>12</span> <span m='195880'>x.</span> <span m='198920'>The</span>
  <span m='199420'>coefficients</span> <span m='200290'>a7</span> <span
  m='201260'>and</span> <span m='201560'>a12</span> <span
  m='202400'>would</span> <span m='202620'>tell</span> <span
  m='202860'>us</span> <span m='203310'>how</span> <span m='203550'>much</span>
  <span m='204080'>of</span> <span m='204710'>cosine</span> <span
  m='205230'>7x</span> <span m='206010'>is</span> <span m='206160'>in</span>
  <span m='206330'>the</span> <span m='206440'>function.</span> </p><p><span
  m='207840'>You</span> <span m='208000'>see,</span> <span
  m='208180'>we're</span> <span m='209040'>separating</span> <span
  m='209680'>the</span> <span m='209800'>function</span> <span
  m='210360'>into</span> <span m='211230'>frequencies.</span> <span
  m='212180'>We're</span> <span m='212400'>looking</span> <span
  m='213520'>into</span> <span m='213880'>pure</span> <span
  m='214280'>oscillations,</span> <span m='215170'>pure</span> <span
  m='215880'>harmonics.</span> <span m='217800'>And</span> <span
  m='218500'>we</span> <span m='218760'>expect,</span> <span
  m='219360'>probably,</span> <span m='220050'>that's</span> <span
  m='220300'>the</span> <span m='220430'>lower</span> <span
  m='220970'>harmonics</span> <span m='222140'>the</span> <span
  m='222290'>smoother</span> <span m='223460'>ones</span> <span
  m='223990'>cos</span> <span m='224440'>x,</span> <span m='224880'>cos</span>
  <span m='225490'>2x,</span> <span m='225790'>cos</span> <span
  m='226090'>3x,</span> <span m='226930'>have</span> <span
  m='227100'>most</span> <span m='227480'>of</span> <span m='227600'>the</span>
  <span m='227770'>energy.</span> <span m='229270'>And</span> <span
  m='230100'>the</span> <span m='230240'>high</span> <span
  m='230610'>harmonics,</span> <span m='231420'>cosine</span> <span
  m='231990'>12x,</span> <span m='232800'>cosine</span> <span
  m='233250'>100x,</span> <span m='234660'>probably</span> <span
  m='235580'>those</span> <span m='235860'>are</span> <span
  m='236150'>quickly</span> <span m='236650'>alternating,</span> <span
  m='237340'>those</span> <span m='238370'>contain</span> <span
  m='239050'>noise,</span> <span m='240090'>and</span> <span
  m='240820'>high</span> <span m='241050'>frequency.</span> <span
  m='242990'>Quick</span> <span m='243310'>changes</span> <span
  m='243890'>in</span> <span m='244050'>the</span> <span
  m='244160'>function</span> <span m='244670'>will</span> <span
  m='244840'>show</span> <span m='245130'>up</span> <span m='245360'>in</span>
  <span m='245540'>the</span> <span m='245640'>high</span> <span
  m='245930'>frequencies.</span> </p><p><span m='247210'>OK.</span> <span
  m='248470'>So</span> <span m='248760'>what's</span> <span
  m='249040'>the</span> <span m='249250'>answer</span> <span
  m='249960'>to</span> <span m='250920'>this</span> <span
  m='251440'>integral--</span> <span m='252860'>cosine</span> <span
  m='253480'>of</span> <span m='253600'>7x</span> <span m='254370'>times</span>
  <span m='254700'>cosine</span> <span m='255200'>of</span> <span
  m='255330'>12x</span> <span m='255740'>dx,</span> <span m='256920'>over</span>
  <span m='257680'>the</span> <span m='257850'>range</span> <span
  m='258250'>minus</span> <span m='258690'>pi</span> <span m='258930'>to</span>
  <span m='259070'>pi?</span> <span m='261589'>Orthogonality</span> <span
  m='262610'>comes</span> <span m='262980'>in,</span> <span
  m='263300'>the</span> <span m='263450'>answer</span> <span
  m='263840'>is</span> <span m='263980'>0.</span> <span m='265220'>That's</span>
  <span m='265490'>the</span> <span m='265620'>crucial</span> <span
  m='266090'>fact.</span> <span m='267140'>That's</span> <span
  m='267380'>what</span> <span m='267600'>makes</span> <span
  m='267890'>it</span> <span m='268060'>possible</span> <span
  m='268660'>to</span> <span m='268800'>separate</span> <span
  m='269460'>out</span> <span m='269810'>a7</span> <span m='271130'>and</span>
  <span m='271430'>a12</span> <span m='272460'>and</span> <span
  m='272670'>get</span> <span m='272830'>hold</span> <span m='273190'>of</span>
  <span m='273280'>them.</span> <span m='274040'>So</span> <span
  m='274170'>let</span> <span m='274430'>me</span> <span m='274560'>show</span>
  <span m='274830'>you</span> <span m='275290'>how</span> <span
  m='275490'>to</span> <span m='275660'>do</span> <span m='275810'>that.</span>
  </p><p><span m='276480'>So</span> <span m='277300'>I'm</span> <span
  m='277450'>going</span> <span m='277650'>to</span> <span m='277710'>use</span>
  <span m='278180'>this</span> <span m='278500'>fact,</span> <span
  m='279880'>which</span> <span m='280070'>is</span> <span m='280380'>the</span>
  <span m='281780'>function</span> <span m='282780'>version</span> <span
  m='283580'>of</span> <span m='284300'>90</span> <span m='284730'>degree</span>
  <span m='285150'>angle.</span> <span m='286300'>So,</span> <span
  m='287320'>you</span> <span m='287930'>see,</span> <span
  m='288090'>it's</span> <span m='288260'>a</span> <span
  m='288370'>little</span> <span m='288670'>like</span> <span
  m='288940'>a</span> <span m='289060'>dot</span> <span
  m='289440'>product.</span> <span m='293190'>Well,</span> <span
  m='293510'>let</span> <span m='293670'>me</span> <span
  m='294590'>remember,</span> <span m='295050'>a</span> <span
  m='295140'>dot</span> <span m='295420'>product</span> <span
  m='295890'>would</span> <span m='296070'>be</span> <span
  m='296280'>something</span> <span m='296730'>like</span> <span
  m='298290'>c1</span> <span m='299634'>d1</span> <span m='300980'>plus</span>
  <span m='301730'>c2</span> <span m='302280'>d2</span> <span
  m='303860'>equals</span> <span m='304470'>0,</span> <span m='305300'>if</span>
  <span m='305520'>I</span> <span m='305660'>had</span> <span
  m='305890'>a</span> <span m='305930'>vector</span> <span m='308300'>c1</span>
  <span m='308890'>c2</span> <span m='309650'>and</span> <span
  m='309760'>a</span> <span m='309810'>vector</span> <span m='310170'>d1</span>
  <span m='310980'>d2.</span> <span m='312610'>That</span> <span
  m='312940'>would</span> <span m='313110'>be</span> <span m='313280'>the</span>
  <span m='313430'>dot</span> <span m='313730'>product,</span> <span
  m='314530'>and</span> <span m='314740'>it</span> <span m='314820'>would</span>
  <span m='315000'>be</span> <span m='315190'>0</span> <span
  m='315730'>if</span> <span m='315850'>the</span> <span
  m='315970'>vectors</span> <span m='316480'>are</span> <span
  m='316560'>orthogonal.</span> <span m='317600'>Here,</span> <span
  m='318680'>instead</span> <span m='319150'>of</span> <span
  m='319260'>adding,</span> <span m='319900'>I'm</span> <span
  m='320170'>integrating</span> <span m='321020'>because</span> <span
  m='321430'>I</span> <span m='321540'>have</span> <span
  m='321780'>functions.</span> <span m='323480'>So</span> <span
  m='323740'>just</span> <span m='324930'>that's</span> <span
  m='325250'>the</span> <span m='325390'>meaning</span> <span
  m='325820'>of</span> <span m='325940'>dot</span> <span
  m='326240'>product--</span> <span m='326710'>the</span> <span
  m='326880'>integral</span> <span m='327730'>of one</span> <span
  m='327880'>function</span> <span m='328830'>times</span> <span
  m='329120'>the</span> <span m='329240'>other</span> <span
  m='329440'>function</span> <span m='330210'>gives</span> <span
  m='330510'>0.</span> </p><p><span m='331090'>OK.</span> <span
  m='331820'>I'll</span> <span m='332010'>use</span> <span
  m='332360'>that</span> <span m='332600'>now.</span> <span
  m='333320'>OK,</span> <span m='333660'>how</span> <span m='333950'>will
  I</span> <span m='334210'>use</span> <span m='334540'>this?</span> <span
  m='335450'>I</span> <span m='335880'>will</span> <span m='338010'>look</span>
  <span m='338660'>what</span> <span m='338890'>I</span> <span
  m='338990'>want.</span> <span m='340850'>This</span> <span
  m='341000'>is</span> <span m='341190'>my</span> <span m='341940'>goal.</span>
  <span m='343310'>I'll</span> <span m='348490'>multiply</span> <span
  m='349050'>both</span> <span m='349440'>sides</span> <span
  m='350000'>of</span> <span m='350120'>this</span> <span
  m='350340'>equation</span> <span m='350930'>by</span> <span
  m='351120'>cosine</span> <span m='351790'>kx.</span> <span
  m='352850'>And</span> <span m='353120'>then</span> <span
  m='353320'>I'll</span> <span m='353520'>integrate.</span> <span
  m='355050'>And</span> <span m='355290'>the</span> <span
  m='355380'>beauty</span> <span m='355880'>is,</span> <span
  m='356730'>that</span> <span m='356920'>when</span> <span m='357140'>I</span>
  <span m='357240'>multiply</span> <span m='357800'>by</span> <span
  m='358020'>cosine</span> <span m='358660'>kx,</span> <span
  m='359820'>and</span> <span m='360120'>I</span> <span
  m='360210'>integrate,</span> <span m='361360'>everything</span> <span
  m='362850'>goes</span> <span m='363130'>to</span> <span m='363250'>zero</span>
  <span m='363690'>except</span> <span m='364320'>what</span> <span
  m='364550'>I</span> <span m='364630'>want.</span> <span m='366520'>By</span>
  <span m='366750'>the</span> <span m='366880'>way,</span> <span
  m='367210'>all</span> <span m='367640'>the</span> <span
  m='367780'>sines</span> <span m='370340'>times</span> <span
  m='370840'>cosine</span> <span m='371400'>kx</span> <span
  m='372500'>integrate</span> <span m='373040'>to</span> <span
  m='373140'>0.</span> <span m='373880'>All</span> <span m='374190'>the</span>
  <span m='374340'>sines</span> <span m='374930'>are</span> <span
  m='375150'>orthogonal</span> <span m='376110'>to</span> <span
  m='376300'>all</span> <span m='376510'>the</span> <span
  m='376650'>cosines.</span> <span m='377980'>And</span> <span
  m='378640'>all</span> <span m='378900'>the</span> <span
  m='379030'>cosines</span> <span m='379640'>will</span> <span
  m='379830'>be</span> <span m='380000'>orthogonal</span> <span
  m='380730'>to</span> <span m='380880'>all</span> <span m='381120'>the</span>
  <span m='381290'>other</span> <span m='381640'>cosines.</span> <span
  m='382260'>So</span> <span m='383930'>let</span> <span m='384170'>me</span>
  <span m='384300'>show</span> <span m='384530'>you</span> <span
  m='384690'>what</span> <span m='384850'>I</span> <span m='385310'>get.</span>
  </p><p><span m='387150'>So</span> <span m='387380'>I</span> <span
  m='387500'>multiply</span> <span m='388980'>my</span> <span
  m='389140'>f</span> <span m='389420'>of</span> <span m='389580'>x</span> <span
  m='390280'>by</span> <span m='390510'>cosine</span> <span
  m='391240'>kx,</span> <span m='392930'>and</span> <span m='393180'>I</span>
  <span m='393270'>integrate</span> <span m='393830'>from</span> <span
  m='394080'>minus</span> <span m='394510'>pi</span> <span m='394780'>to</span>
  <span m='395190'>pi.</span> <span m='396420'>OK?</span> <span
  m='397240'>Now,</span> <span m='397650'>on</span> <span m='397800'>the</span>
  <span m='397930'>right-hand</span> <span m='398460'>side,</span> <span
  m='399290'>this</span> <span m='399520'>is</span> <span m='399680'>my</span>
  <span m='401140'>integral</span> <span m='401610'>from</span> <span
  m='401860'>minus</span> <span m='401970'>pi</span> <span m='402130'>to</span>
  <span m='402576'>pi,</span> <span m='403022'>of</span> <span
  m='403470'>my</span> <span m='403760'>big</span> <span m='404200'>sum</span>
  <span m='405030'>of</span> <span m='405160'>all</span> <span
  m='405430'>these</span> <span m='405840'>terms,</span> <span
  m='406530'>0</span> <span m='407060'>to</span> <span
  m='407600'>infinity,</span> <span m='408820'>a</span> <span
  m='409480'>n</span> <span m='410040'>cos</span> <span m='410750'>nx,</span>
  <span m='413740'>etcetera--</span> <span m='415260'>including</span> <span
  m='415510'>the</span> <span m='415650'>sines</span> <span
  m='416300'>but</span> <span m='416470'>I'm</span> <span m='416630'>not</span>
  <span m='416840'>even</span> <span m='417200'>put</span> <span
  m='417440'>them</span> <span m='417640'>in</span> <span
  m='417780'>because</span> <span m='418000'>they're</span> <span
  m='418150'>going</span> <span m='418330'>to</span> <span m='418380'>get</span>
  <span m='418640'>killed</span> <span m='419060'>by</span> <span
  m='419220'>this</span> <span m='419460'>integration--</span> <span
  m='420810'>times</span> <span m='421600'>cosine</span> <span
  m='422410'>kx</span> <span m='424152'>dx.</span> <span m='425940'>All</span>
  <span m='426170'>I</span> <span m='426260'>did</span> <span
  m='427940'>was</span> <span m='428180'>take</span> <span m='428530'>the</span>
  <span m='428680'>f</span> <span m='428940'>of</span> <span m='429110'>x</span>
  <span m='429620'>equal</span> <span m='430050'>that</span> <span
  m='430440'>formula,</span> <span m='432370'>multiplied</span> <span
  m='433980'>both</span> <span m='434310'>sides</span> <span
  m='434760'>by</span> <span m='434940'>cosine</span> <span
  m='435570'>kx,</span> <span m='436490'>and</span> <span
  m='437420'>integrated.</span> </p><p><span m='440180'>And,</span> <span
  m='440880'>now</span> <span m='441200'>the</span> <span
  m='441370'>orthogonality</span> <span m='442390'>pays</span> <span
  m='442750'>off,</span> <span m='443550'>because</span> <span
  m='444250'>this</span> <span m='445190'>times</span> <span
  m='445600'>this,</span> <span m='446050'>when</span> <span m='446270'>I</span>
  <span m='446370'>integrate</span> <span m='446930'>gives</span> <span
  m='447230'>0,</span> <span m='447980'>with</span> <span m='448170'>one</span>
  <span m='448560'>exception.</span> <span m='449690'>When</span> <span
  m='450050'>n</span> <span m='450480'>equals</span> <span m='451070'>k,</span>
  <span m='453720'>then</span> <span m='454320'>I</span> <span
  m='454490'>do</span> <span m='454790'>get</span> <span m='455130'>the</span>
  <span m='455260'>integral.</span> <span m='456230'>The</span> <span
  m='456250'>only</span> <span m='456600'>term</span> <span m='456920'>I</span>
  <span m='457030'>get</span> <span m='457400'>is</span> <span
  m='457940'>ak,</span> <span m='459720'>cosine</span> <span
  m='460510'>kx,</span> <span m='462100'>twice</span> <span
  m='464560'>dx.</span> <span m='466550'>Only</span> <span m='466970'>k</span>
  <span m='467360'>equal</span> <span m='467620'>n</span> <span
  m='468610'>survives</span> <span m='469500'>this</span> <span
  m='469910'>process.</span> <span m='470840'>And</span> <span
  m='471080'>then</span> <span m='471310'>that</span> <span
  m='471580'>integral</span> <span m='472030'>of</span> <span
  m='472180'>cosine</span> <span m='472710'>squared</span> <span
  m='473200'>happens</span> <span m='473690'>to</span> <span
  m='473830'>be</span> <span m='474110'>pi,</span> <span m='475070'>so</span>
  <span m='475330'>this</span> <span m='475620'>is</span> <span
  m='475890'>just</span> <span m='476290'>ak</span> <span
  m='477960'>times</span> <span m='478440'>pi.</span> <span
  m='479730'>Look,</span> <span m='480110'>I've</span> <span
  m='480420'>discovered</span> <span m='481390'>what</span> <span
  m='481660'>ak</span> <span m='482140'>is.</span> <span m='482880'>I've</span>
  <span m='483060'>discovered</span> <span m='483620'>the</span> <span
  m='484370'>k</span> <span m='484780'>Fourier</span> <span
  m='486470'>cosine</span> <span m='487360'>coefficient.</span> <span
  m='488590'>I</span> <span m='488730'>just</span> <span
  m='489050'>divide</span> <span m='489670'>by</span> <span
  m='489910'>pi.</span> </p><p><span m='491290'>So</span> <span
  m='491530'>can</span> <span m='491760'>I</span> <span m='491890'>just</span>
  <span m='492260'>divide</span> <span m='492770'>by</span> <span
  m='493000'>pi</span> <span m='493540'>to</span> <span m='493920'>get</span>
  <span m='494240'>this</span> <span m='494510'>formula</span> <span
  m='495030'>for</span> <span m='495280'>ak?</span> <span m='496250'>Ak</span>
  <span m='497090'>is</span> <span m='497320'>1</span> <span
  m='497670'>over</span> <span m='497950'>pi.</span> <span m='498180'>The</span>
  <span m='499090'>integral</span> <span m='499590'>from</span> <span
  m='499790'>minus</span> <span m='500270'>pi</span> <span m='500550'>to</span>
  <span m='500640'>pi</span> <span m='501492'>of</span> <span
  m='501920'>my</span> <span m='502100'>function,</span> <span
  m='503640'>times</span> <span m='504120'>cosine</span> <span
  m='505200'>kx</span> <span m='506490'>dx.</span> <span
  m='508320'>That's</span> <span m='508630'>the</span> <span
  m='508780'>formula.</span> <span m='510330'>That</span> <span
  m='510720'>tells</span> <span m='511010'>me</span> <span m='511350'>the</span>
  <span m='512030'>coefficient.</span> <span m='514880'>And</span> <span
  m='515049'>I</span> <span m='515110'>could</span> <span m='515320'>only</span>
  <span m='515610'>do</span> <span m='515780'>that</span> <span
  m='517200'>with</span> <span m='517390'>orthogonality</span> <span
  m='518549'>to</span> <span m='519220'>knock</span> <span m='519630'>out</span>
  <span m='520409'>all</span> <span m='520830'>but</span> <span
  m='521080'>one</span> <span m='521360'>term.</span> <span
  m='522059'>And</span> <span m='522289'>now,</span> <span m='522650'>if</span>
  <span m='524220'>I</span> <span m='524320'>wanted</span> <span
  m='524760'>the</span> <span m='524880'>sine</span> <span
  m='525390'>coefficients,</span> <span m='526170'>bk,</span> <span
  m='527650'>it</span> <span m='527820'>would</span> <span m='527980'>be</span>
  <span m='528130'>the</span> <span m='528290'>same</span> <span
  m='528680'>formula</span> <span m='529330'>except</span> <span
  m='529610'>that</span> <span m='529790'>would</span> <span
  m='529950'>be</span> <span m='530100'>a</span> <span m='530180'>sine.</span>
  </p><p><span m='532220'>And</span> <span m='532620'>if</span> <span
  m='532770'>I</span> <span m='532900'>wanted</span> <span m='533480'>the</span>
  <span m='534310'>complex</span> <span m='535010'>coefficient,</span> <span
  m='535740'>ck,</span> <span m='537220'>it</span> <span m='537420'>turns</span>
  <span m='537770'>out</span> <span m='538020'>it'd</span> <span
  m='538220'>be</span> <span m='538370'>the</span> <span m='538520'>same</span>
  <span m='538940'>formula</span> <span m='540130'>expect--</span> <span
  m='540980'>well</span> <span m='541320'>maybe</span> <span
  m='541620'>it's</span> <span m='541860'>2</span> <span m='542080'>pi</span>
  <span m='542370'>there,</span> <span m='542800'>1</span> <span
  m='543060'>over</span> <span m='543360'>2</span> <span m='543570'>pi--</span>
  <span m='544390'>and</span> <span m='545030'>this</span> <span
  m='545380'>becomes</span> <span m='546020'>an</span> <span m='546210'>e</span>
  <span m='546620'>to</span> <span m='546750'>the</span> <span
  m='546900'>minus</span> <span m='547680'>ikx.</span> <span
  m='548810'>In</span> <span m='549030'>a</span> <span m='549190'>complex</span>
  <span m='549870'>case,</span> <span m='550650'>the</span> <span
  m='551260'>complex</span> <span m='551930'>conjugate</span> <span
  m='552590'>e</span> <span m='552880'>to</span> <span m='553000'>the</span>
  <span m='553140'>minus</span> <span m='553740'>ikx</span> <span
  m='554720'>shows</span> <span m='555130'>up.</span> <span m='555910'>So</span>
  <span m='556020'>this</span> <span m='556230'>is</span> <span
  m='556410'>really</span> <span m='557350'>the</span> <span
  m='557760'>dot</span> <span m='558010'>product,</span> <span
  m='558860'>the</span> <span m='558990'>inner</span> <span
  m='559320'>product,</span> <span m='559880'>of</span> <span
  m='560000'>the</span> <span m='560120'>function</span> <span
  m='560730'>with</span> <span m='560980'>the</span> <span
  m='561090'>cosine.</span> </p><p><span m='562180'>OK.</span> <span
  m='563050'>So</span> <span m='563960'>let</span> <span m='564260'>me</span>
  <span m='564380'>do</span> <span m='564570'>some</span> <span
  m='564780'>examples.</span> <span m='569700'>Maybe</span> <span
  m='570000'>I</span> <span m='570080'>should</span> <span
  m='570300'>write</span> <span m='570630'>up</span> <span m='571000'>the</span>
  <span m='571930'>sine</span> <span m='572490'>formula</span> <span
  m='573010'>that</span> <span m='573220'>I</span> <span m='573570'>just</span>
  <span m='573970'>mentioned.</span> <span m='574930'>So</span> <span
  m='575150'>bk</span> <span m='577580'>is</span> <span m='577990'>the</span>
  <span m='578400'>integral</span> <span m='579380'>1</span> <span
  m='579630'>over</span> <span m='579910'>pi,</span> <span m='580800'>the</span>
  <span m='580930'>integral</span> <span m='581680'>of</span> <span
  m='581720'>my</span> <span m='581900'>function,</span> <span
  m='583250'>times</span> <span m='583620'>sine</span> <span
  m='583945'>kx</span> <span m='586410'>dx.</span> <span m='587360'>And</span>
  <span m='587840'>there's</span> <span m='588070'>one</span> <span
  m='588440'>exception.</span> <span m='590600'>A0</span> <span
  m='591550'>has</span> <span m='591800'>a</span> <span m='591910'>little</span>
  <span m='592190'>bit</span> <span m='592430'>different</span> <span
  m='592850'>formula,</span> <span m='595500'>the</span> <span
  m='595750'>pi</span> <span m='596250'>changes</span> <span
  m='596840'>to</span> <span m='597110'>2</span> <span m='597360'>pi.</span>
  <span m='598380'>I'm</span> <span m='598540'>sorry</span> <span
  m='598880'>about</span> <span m='599160'>that.</span> <span
  m='600030'>When</span> <span m='600310'>k</span> <span m='600600'>is</span>
  <span m='600800'>0</span> <span m='601260'>or</span> <span
  m='601550'>it's</span> <span m='601740'>the</span> <span
  m='601870'>integral</span> <span m='602300'>of</span> <span
  m='602400'>1,</span> <span m='603372'>from</span> <span
  m='603860'>minus</span> <span m='604250'>pi</span> <span m='604480'>to</span>
  <span m='604600'>pi,</span> <span m='604990'>and</span> <span
  m='605170'>I</span> <span m='605250'>get</span> <span m='605560'>2</span>
  <span m='605770'>pi.</span> <span m='606140'>So,</span> <span
  m='606960'>a0</span> <span m='609060'>is</span> <span m='609150'>1</span>
  <span m='609520'>over</span> <span m='610160'>2</span> <span
  m='610440'>pi--</span> <span m='611980'>the</span> <span
  m='612130'>integral</span> <span m='613090'>of</span> <span
  m='613490'>f</span> <span m='613740'>of</span> <span m='613910'>x</span> <span
  m='615080'>times</span> <span m='615610'>when</span> <span m='615840'>k</span>
  <span m='616140'>is</span> <span m='616320'>zero</span> <span
  m='616740'>cosine--</span> <span m='617410'>this</span> <span
  m='617630'>is</span> <span m='617830'>1</span> <span m='618710'>dx.</span>
  <span m='620980'>That</span> <span m='621440'>has</span> <span
  m='621670'>a</span> <span m='621800'>simple</span> <span
  m='622190'>meaning.</span> <span m='622970'>That's</span> <span
  m='623290'>the</span> <span m='624350'>average</span> <span
  m='628750'>of</span> <span m='629780'>f</span> <span m='630040'>of</span>
  <span m='630310'>x.</span> </p><p><span m='634870'>OK.</span> <span
  m='636050'>So</span> <span m='636960'>the</span> <span m='638130'>basis</span>
  <span m='638650'>function</span> <span m='639170'>was</span> <span
  m='639440'>just</span> <span m='639710'>1</span> <span m='640205'>when</span>
  <span m='640700'>k</span> <span m='641030'>was</span> <span
  m='641290'>zero.</span> <span m='642360'>When</span> <span m='642540'>k</span>
  <span m='642770'>is</span> <span m='642940'>0,</span> <span
  m='643260'>the</span> <span m='643410'>function</span> <span
  m='643860'>of</span> <span m='644330'>my</span> <span m='644560'>cosine</span>
  <span m='645210'>is</span> <span m='645390'>just</span> <span
  m='645730'>one,</span> <span m='646610'>and</span> <span m='647610'>I</span>
  <span m='647760'>get</span> <span m='648140'>the</span> <span
  m='648970'>integral</span> <span m='650130'>of</span> <span
  m='650660'>the</span> <span m='650780'>function</span> <span
  m='651320'>times</span> <span m='651680'>1</span> <span
  m='652580'>divided</span> <span m='653030'>by</span> <span m='653550'>2</span>
  <span m='653740'>pi.</span> </p><p><span m='655250'>Could</span> <span
  m='655480'>we</span> <span m='655640'>just</span> <span m='656400'>do</span>
  <span m='656560'>an</span> <span m='656670'>example?</span> <span
  m='657980'>So</span> <span m='658090'>I</span> <span m='658200'>want</span>
  <span m='658410'>to</span> <span m='658490'>take</span> <span
  m='658780'>a</span> <span m='658880'>function.</span> <span
  m='660020'>And</span> <span m='660530'>in</span> <span m='660700'>this</span>
  <span m='660980'>video</span> <span m='661380'>why</span> <span
  m='661560'>don't</span> <span m='661840'>I</span> <span m='661970'>take</span>
  <span m='662610'>an</span> <span m='662830'>easy,</span> <span
  m='663310'>but</span> <span m='663880'>very</span> <span
  m='664240'>important,</span> <span m='664770'>function--</span> <span
  m='665710'>the</span> <span m='665770'>delta</span> <span
  m='666210'>function.</span> <span m='667250'>So</span> <span
  m='667400'>I</span> <span m='667530'>plan</span> <span m='667900'>to</span>
  <span m='667960'>use</span> <span m='668370'>these</span> <span
  m='668660'>formulas</span> <span m='669750'>on</span> <span
  m='669990'>the</span> <span m='670110'>delta</span> <span
  m='670520'>function.</span> </p><p><span m='671010'>Let</span> <span
  m='671180'>me</span> <span m='671340'>draw</span> <span m='671610'>a</span>
  <span m='671660'>little</span> <span m='671920'>picture</span> <span
  m='672440'>of</span> <span m='672530'>the</span> <span m='672690'>delta</span>
  <span m='673070'>function.</span> <span m='674090'>I'm</span> <span
  m='674350'>only</span> <span m='674790'>going</span> <span
  m='675170'>between</span> <span m='675630'>minus</span> <span
  m='676120'>pi</span> <span m='676440'>and</span> <span m='676630'>pi,</span>
  <span m='677850'>and</span> <span m='678060'>the</span> <span
  m='678170'>delta</span> <span m='678580'>function,</span> <span
  m='679100'>as</span> <span m='679270'>we</span> <span m='679460'>know,</span>
  <span m='679820'>is</span> <span m='679990'>0,</span> <span
  m='680820'>it's</span> <span m='681450'>infinite,</span> <span
  m='683060'>at</span> <span m='683860'>the</span> <span
  m='684030'>spike,</span> <span m='684920'>and</span> <span m='685140'>0</span>
  <span m='685610'>again.</span> <span m='686690'>The</span> <span
  m='686750'>reason</span> <span m='687080'>I</span> <span
  m='687170'>wanted</span> <span m='687570'>to</span> <span
  m='687680'>draw</span> <span m='688000'>it</span> <span m='688130'>is,</span>
  <span m='689060'>that's</span> <span m='689370'>an</span> <span
  m='689740'>even</span> <span m='690270'>function.</span> <span
  m='691270'>That's</span> <span m='691550'>a</span> <span
  m='691660'>function</span> <span m='692190'>which</span> <span
  m='692520'>is</span> <span m='692710'>symmetric</span> <span
  m='695000'>between</span> <span m='695490'>x</span> <span
  m='695900'>and</span> <span m='696100'>minus</span> <span m='696560'>x.</span>
  </p><p><span m='697570'>And</span> <span m='697790'>in</span> <span
  m='697920'>that</span> <span m='698230'>case,</span> <span
  m='700570'>there</span> <span m='700740'>will</span> <span
  m='700920'>be</span> <span m='701110'>no</span> <span m='701480'>sines.</span>
  <span m='702520'>Sine</span> <span m='702980'>functions</span> <span
  m='704070'>are</span> <span m='704630'>odd.</span> <span m='705680'>The</span>
  <span m='705940'>integral</span> <span m='707330'>from</span> <span
  m='707570'>minus</span> <span m='707970'>pi</span> <span m='708230'>to</span>
  <span m='708360'>pi</span> <span m='708950'>of</span> <span
  m='709355'>an</span> <span m='709760'>odd</span> <span
  m='710140'>function</span> <span m='711310'>gives</span> <span
  m='711610'>0.</span> <span m='712870'>The</span> <span m='713210'>odd</span>
  <span m='713970'>means</span> <span m='714930'>that</span> <span
  m='715220'>when</span> <span m='715440'>you</span> <span
  m='715640'>cross</span> <span m='718120'>x</span> <span
  m='718350'>equals</span> <span m='718710'>0</span> <span m='720170'>you</span>
  <span m='720340'>get</span> <span m='720580'>minus</span> <span
  m='721880'>the</span> <span m='722030'>result</span> <span
  m='722840'>for</span> <span m='723145'>x</span> <span
  m='723450'>greater</span> <span m='723730'>than</span> <span
  m='723930'>0.</span> <span m='725860'>So</span> <span m='726430'>my</span>
  <span m='726690'>point</span> <span m='727020'>is,</span> <span
  m='727220'>this</span> <span m='727450'>is</span> <span m='727600'>an</span>
  <span m='727780'>even</span> <span m='728340'>function--</span> <span
  m='730110'>delta</span> <span m='730740'>of</span> <span m='731160'>x</span>
  <span m='732070'>is</span> <span m='732260'>the</span> <span
  m='732340'>same</span> <span m='732730'>as</span> <span
  m='732890'>delta</span> <span m='733430'>of</span> <span
  m='733730'>minus</span> <span m='734330'>x,</span> <span m='735830'>and</span>
  <span m='736540'>only</span> <span m='736980'>cosines.</span> <span
  m='741070'>Good.</span> <span m='743920'>The sine</span> <span
  m='744420'>coefficients</span> <span m='745080'>automatically</span> <span
  m='746010'>dropped</span> <span m='746590'>our</span> <span
  m='747030'>0</span> <span m='747370'>so,</span> <span m='748690'>of</span>
  <span m='748940'>course,</span> <span m='749230'>the</span> <span
  m='749350'>integral</span> <span m='749810'>would</span> <span
  m='749980'>show</span> <span m='750250'>it.</span> <span m='750490'>But</span>
  <span m='751800'>we</span> <span m='752060'>see</span> <span
  m='752280'>it</span> <span m='752450'>even</span> <span
  m='752750'>before</span> <span m='753130'>we</span> <span
  m='753290'>integrate.</span> </p><p><span m='753880'>OK</span> <span
  m='754410'>I'm</span> <span m='754580'>ready</span> <span
  m='754880'>for</span> <span m='755000'>the</span> <span
  m='755170'>delta</span> <span m='755560'>function.</span> <span
  m='757820'>So</span> <span m='757830'>I'm</span> <span m='757960'>going</span>
  <span m='758160'>to</span> <span m='758240'>write</span> <span
  m='758560'>delta</span> <span m='758835'>of</span> <span m='759110'>x,</span>
  <span m='763010'>and</span> <span m='763220'>we</span> <span
  m='763410'>remember</span> <span m='763900'>what</span> <span
  m='764110'>the</span> <span m='764240'>delta</span> <span
  m='764600'>function</span> <span m='765040'>is--</span> <span
  m='766300'>a</span> <span m='766420'>combination</span> <span
  m='767172'>of</span> <span m='770440'>cosines.</span> <span
  m='774710'>OK.</span> <span m='775330'>That's</span> <span
  m='775670'>the</span> <span m='775830'>delta</span> <span
  m='776220'>function</span> <span m='776660'>between</span> <span
  m='777130'>minus</span> <span m='777580'>pi</span> <span m='777870'>and</span>
  <span m='778080'>pi.</span> <span m='779100'>OK.</span> <span
  m='780210'>And</span> <span m='780530'>what's</span> <span
  m='780770'>our</span> <span m='780920'>formula</span> <span
  m='781400'>for</span> <span m='781560'>the</span> <span m='781760'>a n?</span>
  <span m='782690'>Well,</span> <span m='783000'>you</span> <span
  m='783140'>remember</span> <span m='783670'>we</span> <span
  m='783840'>had</span> <span m='784280'>a</span> <span
  m='784510'>special</span> <span m='785060'>formula</span> <span
  m='785520'>for</span> <span m='785720'>a0,</span> <span
  m='787480'>which</span> <span m='787770'>was</span> <span
  m='788970'>1/2</span> <span m='789320'>pi</span> <span m='791380'>times</span>
  <span m='791710'>the</span> <span m='791880'>integral,</span> <span
  m='792410'>from</span> <span m='792610'>minus</span> <span
  m='793020'>pi</span> <span m='793240'>to</span> <span m='793360'>pi,</span>
  <span m='794930'>of</span> <span m='795300'>our</span> <span
  m='795560'>function,</span> <span m='796400'>which</span> <span
  m='796670'>is</span> <span m='796920'>delta,</span> <span
  m='799010'>times</span> <span m='800150'>the</span> <span
  m='800640'>basis</span> <span m='801250'>function,</span> <span
  m='801800'>which</span> <span m='802110'>n</span> <span
  m='802340'>equals</span> <span m='802700'>0,</span> <span
  m='802990'>the</span> <span m='803080'>basis</span> <span
  m='803490'>function</span> <span m='803910'>is</span> <span
  m='804070'>1</span> <span m='804980'>dx.</span> </p><p><span
  m='806140'>OK,</span> <span m='806520'>we</span> <span m='806710'>know</span>
  <span m='806900'>the</span> <span m='807060'>answer</span> <span
  m='807450'>to</span> <span m='807550'>that.</span> <span m='808210'>We</span>
  <span m='808410'>can</span> <span m='808590'>integrate</span> <span
  m='809300'>the</span> <span m='809420'>delta</span> <span
  m='809840'>function.</span> <span m='811400'>The</span> <span
  m='811540'>one</span> <span m='812330'>key</span> <span
  m='812700'>thing</span> <span m='813010'>about</span> <span
  m='813290'>the</span> <span m='813440'>integral</span> <span
  m='813860'>of</span> <span m='813950'>the</span> <span m='814090'>delta</span>
  <span m='814470'>function</span> <span m='814910'>is,</span> <span
  m='815490'>it's</span> <span m='815780'>always</span> <span
  m='816260'>1--</span> <span m='817420'>if</span> <span m='817630'>we</span>
  <span m='817830'>cross</span> <span m='818830'>x</span> <span
  m='819100'>equals</span> <span m='819430'>0,</span> <span
  m='819780'>which</span> <span m='820010'>we</span> <span
  m='820190'>will.</span> <span m='820990'>So</span> <span
  m='821330'>that</span> <span m='821650'>integral</span> <span
  m='822070'>is</span> <span m='822200'>1</span> <span m='822600'>so</span>
  <span m='822790'>I'm</span> <span m='822940'>getting</span> <span
  m='823270'>1/2 pi.</span> </p><p><span m='826180'>What</span> <span
  m='826360'>about</span> <span m='827580'>the</span> <span
  m='827770'>other</span> <span m='828340'>for</span> <span m='828640'>a</span>
  <span m='828810'>coefficient?</span> <span m='830260'>So</span> <span
  m='830350'>that's</span> <span m='830680'>1/pi,</span> <span
  m='831080'>now.</span> <span m='832960'>The</span> <span
  m='833100'>integral</span> <span m='833630'>from</span> <span
  m='833890'>minus</span> <span m='834290'>pi</span> <span m='834530'>to</span>
  <span m='834660'>pi</span> <span m='835680'>of</span> <span
  m='835840'>all</span> <span m='836170'>of</span> <span m='838700'>my</span>
  <span m='838920'>function</span> <span m='840040'>times</span> <span
  m='840520'>cosine</span> <span m='841910'>kxdx.</span> <span
  m='845380'>You</span> <span m='845520'>know</span> <span
  m='845670'>what</span> <span m='845830'>I'm</span> <span
  m='845940'>doing.</span> <span m='846490'>I'm</span> <span
  m='846530'>using</span> <span m='846900'>my</span> <span
  m='847090'>formula</span> <span m='847730'>to</span> <span
  m='847890'>find</span> <span m='848220'>the</span> <span
  m='848330'>coefficients.</span> <span m='849520'>My</span> <span
  m='849720'>formula</span> <span m='850200'>says</span> <span
  m='850700'>take</span> <span m='851030'>the</span> <span
  m='851160'>function,</span> <span m='851800'>whatever</span> <span
  m='852170'>it</span> <span m='852260'>is--</span> <span m='853180'>and</span>
  <span m='853400'>in</span> <span m='853550'>this</span> <span
  m='853760'>example,</span> <span m='854750'>it's</span> <span
  m='855000'>the</span> <span m='855130'>delta</span> <span
  m='855450'>function--</span> <span m='856290'>multiply</span> <span
  m='856880'>by</span> <span m='857080'>the</span> <span
  m='857250'>cosine,</span> <span m='857950'>integrate,</span> <span
  m='859010'>and</span> <span m='859390'>divide</span> <span
  m='859910'>by</span> <span m='860150'>the</span> <span
  m='860770'>factor</span> <span m='861290'>pi.</span> </p><p><span
  m='862200'>OK.</span> <span m='863000'>Well,</span> <span m='863310'>of</span>
  <span m='863410'>course,</span> <span m='863680'>we</span> <span
  m='863840'>can</span> <span m='864020'>do</span> <span m='864170'>that</span>
  <span m='864400'>integral.</span> <span m='865780'>Because</span> <span
  m='866170'>when</span> <span m='866360'>you</span> <span
  m='866490'>integrate</span> <span m='867030'>a</span> <span
  m='867140'>delta</span> <span m='867570'>function,</span> <span
  m='868610'>times</span> <span m='868930'>some</span> <span
  m='869150'>other</span> <span m='869410'>function,</span> <span
  m='872920'>all</span> <span m='873140'>the</span> <span
  m='873340'>action</span> <span m='873810'>is</span> <span m='874150'>at</span>
  <span m='874770'>x</span> <span m='875040'>equals</span> <span
  m='875420'>0.</span> <span m='876410'>At</span> <span m='876640'>x</span>
  <span m='876920'>equals</span> <span m='877290'>0,</span> <span
  m='877600'>this</span> <span m='877840'>function</span> <span
  m='878330'>is</span> <span m='878450'>1.</span> <span m='880660'>And</span>
  <span m='880950'>I</span> <span m='881010'>don't</span> <span
  m='881250'>care</span> <span m='881490'>what</span> <span m='881720'>it</span>
  <span m='881870'>is</span> <span m='882100'>elsewhere,</span> <span
  m='883230'>it's</span> <span m='883560'>just</span> <span m='883870'>1.</span>
  <span m='884190'>So</span> <span m='884430'>this</span> <span
  m='884680'>is</span> <span m='884870'>the</span> <span m='885010'>same</span>
  <span m='885350'>as</span> <span m='885480'>integrating</span> <span
  m='886120'>delta</span> <span m='886430'>of</span> <span m='886550'>x</span>
  <span m='886850'>times</span> <span m='887170'>1,</span> <span
  m='888820'>which</span> <span m='889100'>gives</span> <span
  m='889430'>us--</span> <span m='890110'>well,</span> <span
  m='890330'>the</span> <span m='890460'>interval</span> <span
  m='890890'>the</span> <span m='891040'>delta</span> <span
  m='891380'>function</span> <span m='891950'>1.</span> <span
  m='892670'>So</span> <span m='893970'>that</span> <span
  m='894190'>integral</span> <span m='894640'>is</span> <span
  m='894730'>one,</span> <span m='895510'>so</span> <span m='895670'>I'm</span>
  <span m='895880'>getting</span> <span m='896220'>1/pi.</span> <span
  m='899100'>Good.</span> </p><p><span m='901110'>OK.</span> <span
  m='902020'>So</span> <span m='902250'>now,</span> <span m='903510'>do</span>
  <span m='903750'>you</span> <span m='903880'>want</span> <span
  m='904050'>me</span> <span m='904170'>to</span> <span m='904560'>write</span>
  <span m='904830'>out</span> <span m='905090'>the</span> <span
  m='905340'>series</span> <span m='905640'>for</span> <span
  m='905790'>the</span> <span m='905960'>delta</span> <span
  m='906320'>function?</span> <span m='906720'>It</span> <span
  m='906900'>looks</span> <span m='907530'>kind</span> <span
  m='907770'>of</span> <span m='907880'>unusual.</span> <span
  m='909280'>This</span> <span m='910110'>is</span> <span
  m='910600'>telling</span> <span m='910970'>us</span> <span
  m='911140'>something</span> <span m='911580'>quite</span> <span
  m='912150'>remarkable.</span> <span m='913370'>It's</span> <span
  m='913630'>telling</span> <span m='914040'>us</span> <span
  m='914250'>that</span> <span m='915870'>all</span> <span
  m='916130'>these</span> <span m='916410'>coefficients</span> <span
  m='917030'>are</span> <span m='917140'>the</span> <span
  m='917290'>same.</span> <span m='918740'>All</span> <span
  m='919320'>the</span> <span m='919490'>frequencies,</span> <span
  m='920450'>all</span> <span m='920790'>the</span> <span
  m='920870'>harmonics,</span> <span m='922870'>are</span> <span
  m='923130'>in</span> <span m='923390'>the</span> <span m='923510'>delta</span>
  <span m='923920'>function</span> <span m='924520'>in</span> <span
  m='924980'>equal</span> <span m='925410'>amounts.</span> <span
  m='927840'>Usually,</span> <span m='928490'>we</span> <span
  m='928720'>would</span> <span m='928950'>see</span> <span m='929900'>a</span>
  <span m='930060'>big</span> <span m='930400'>drop</span> <span
  m='930780'>off</span> <span m='931370'>of</span> <span m='931610'>the</span>
  <span m='931740'>coefficients</span> <span m='932420'>ak,</span> <span
  m='933710'>but</span> <span m='933950'>for</span> <span m='934110'>the</span>
  <span m='934270'>delta</span> <span m='934680'>function,</span> <span
  m='935330'>which</span> <span m='935440'>is</span> <span m='935560'>so</span>
  <span m='935940'>singular,</span> <span m='937000'>all</span> <span
  m='937560'>a</span> <span m='937610'>big</span> <span m='937900'>spike</span>
  <span m='938370'>at</span> <span m='938480'>one</span> <span
  m='938760'>point,</span> <span m='939720'>there's</span> <span
  m='939940'>no</span> <span m='940200'>drop</span> <span m='940570'>off</span>
  <span m='941290'>and</span> <span m='941610'>no</span> <span
  m='941920'>decay</span> <span m='942390'>in</span> <span m='942540'>the</span>
  <span m='942660'>coefficients,</span> <span m='943690'>they</span> <span
  m='943840'>just</span> <span m='944150'>constant.</span> </p><p><span
  m='945170'>OK.</span> <span m='945740'>So</span> <span m='945970'>I'm</span>
  <span m='946180'>saying</span> <span m='947000'>that</span> <span
  m='947200'>the</span> <span m='947330'>delta</span> <span
  m='947740'>function</span> <span m='949610'>is</span> <span
  m='950370'>the</span> <span m='950490'>constant</span> <span
  m='951070'>term,</span> <span m='952010'>1/2pi,</span> <span
  m='954190'>and</span> <span m='954560'>then</span> <span
  m='955050'>1/pi</span> <span m='956930'>times</span> <span
  m='958320'>cosine</span> <span m='960350'>of</span> <span m='960470'>x,</span>
  <span m='961050'>and</span> <span m='961460'>cosine</span> <span
  m='962090'>of</span> <span m='962220'>2x,</span> <span m='964200'>and</span>
  <span m='964920'>so</span> <span m='965200'>on.</span> <span
  m='970760'>OK.</span> <span m='972480'>All</span> <span
  m='972940'>frequencies</span> <span m='973670'>there are</span> <span
  m='973930'>the</span> <span m='974120'>same.</span> <span
  m='975540'>And</span> <span m='977740'>I'll</span> <span
  m='977930'>stop</span> <span m='978340'>with</span> <span
  m='978510'>that</span> <span m='978780'>one</span> <span
  m='979150'>example</span> <span m='979760'>here.</span> <span
  m='981530'>So</span> <span m='981740'>the</span> <span m='981890'>key</span>
  <span m='982150'>points</span> <span m='982540'>were</span> <span
  m='982850'>orthogonality,</span> <span m='984520'>the</span> <span
  m='984650'>formulas</span> <span m='985310'>for</span> <span
  m='985480'>the</span> <span m='986130'>the</span> <span
  m='986310'>coefficients,</span> <span m='987450'>and</span> <span
  m='987820'>this</span> <span m='988040'>example.</span> <span
  m='989390'>Thank</span> <span m='989650'>you.</span> </p>
uid: 2fc865339ff42a99766066a7a2860a21
type: courses
layout: video
---
