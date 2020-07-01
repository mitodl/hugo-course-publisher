---
about_this_resource_text: >-
  <p><strong>Description: </strong>ODE4 implements the classic Runge-Kutta
  method, which is the most widely used numerical method for ODEs over the past
  100 years. Its major shortcoming is the lack of an error estimate. A simple
  model of the growth of a flame is an example that is used here and in later
  videos.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Mva9UIz_wwA
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Video-YouTube-Stream
    type: Video
    uid: 0a58c9607130653959e99b97d58609c2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Mva9UIz_wwA/default.jpg'
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c964005cbfcf0aee190c0ef8919a2f5b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Mva9UIz_wwA
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3cd48496a71fe727b51166d4c7bc4e6e
  - id: Mva9UIz_wwA.srt
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/classical-runge-kutta-ode4/Mva9UIz_wwA.srt
    title: 3play caption file
    type: null
    uid: 664eb298646c9d8610e6aad978227c81
  - id: Mva9UIz_wwA.pdf
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/classical-runge-kutta-ode4/Mva9UIz_wwA.pdf
    title: 3play pdf file
    type: null
    uid: 8fa42118e972caee7a68fc6013d39d61
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 02b4dfd7e006feb34129b3290462e4f7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2d0f69f3b7491e59375f5daaa88a612a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_03_300k.mp4
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Video-Internet Archive-MP4
    type: Video
    uid: a7f561cac9d9ea87279c2fda80e15f72
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 5f26137fa0da7e39a9621c844373ad1b
    title: Video-iTunes U-MP4
    type: Video
    uid: df51623aa4b41956f74c90eaa6d37c65
inline_embed_id: '84438687classicalrunge-kutta,ode410870429'
order_index: 594
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: classical-runge-kutta-ode4
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/classical-runge-kutta-ode4
title: 'Classical Runge-Kutta, ODE4'
transcript: >-
  <p><span m='5580'>PROFESSOR: Here</span> <span m='5930'>is</span> <span
  m='6060'>the</span> <span m='6450'>classical</span> <span
  m='7370'>Runge-Kutta</span> <span m='8119'>method.</span> <span
  m='9950'>This</span> <span m='10260'>was,</span> <span m='10700'>by</span>
  <span m='11000'>far</span> <span m='11400'>and</span> <span
  m='11500'>away,</span> <span m='11870'>the</span> <span
  m='13050'>world's</span> <span m='13470'>most</span> <span
  m='13900'>popular</span> <span m='14510'>numerical</span> <span
  m='15060'>method</span> <span m='16300'>for</span> <span m='16920'>over</span>
  <span m='17290'>100</span> <span m='17660'>years</span> <span
  m='19930'>for</span> <span m='20670'>hand</span> <span
  m='21010'>computation</span> <span m='22790'>in</span> <span
  m='23140'>the</span> <span m='23340'>first</span> <span m='23750'>half</span>
  <span m='24020'>of</span> <span m='24120'>the</span> <span
  m='24230'>20th</span> <span m='24690'>century,</span> <span
  m='26240'>and</span> <span m='26460'>then</span> <span m='26680'>for</span>
  <span m='26890'>computation</span> <span m='27710'>on</span> <span
  m='27900'>digital</span> <span m='28320'>computers</span> <span
  m='29030'>in</span> <span m='29220'>the</span> <span m='29340'>latter</span>
  <span m='29740'>half</span> <span m='30000'>of</span> <span
  m='30100'>the</span> <span m='30220'>20th</span> <span
  m='30670'>century.</span> <span m='32150'>I</span> <span
  m='32360'>suspect</span> <span m='33030'>it's</span> <span
  m='33280'>still</span> <span m='35350'>in</span> <span m='35510'>use</span>
  <span m='35840'>today.</span> </p><p><span m='38300'>You</span> <span
  m='38460'>evaluate</span> <span m='39100'>the</span> <span
  m='39200'>function</span> <span m='39730'>four</span> <span
  m='40080'>times</span> <span m='40440'>per</span> <span m='40620'>step,</span>
  <span m='42240'>first</span> <span m='42580'>in</span> <span
  m='42680'>the</span> <span m='42750'>beginning</span> <span
  m='43240'>of</span> <span m='43320'>the</span> <span
  m='43440'>interval.</span> <span m='45080'>And</span> <span
  m='45150'>then</span> <span m='45970'>use</span> <span m='46160'>that</span>
  <span m='46480'>to</span> <span m='46580'>step</span> <span
  m='46930'>into</span> <span m='47120'>the</span> <span m='47270'>middle</span>
  <span m='47580'>of</span> <span m='47720'>the</span> <span
  m='47850'>interval,</span> <span m='48290'>to</span> <span
  m='48360'>get</span> <span m='48560'>s2.</span> <span m='50360'>Then</span>
  <span m='50540'>you use</span> <span m='50890'>s2</span> <span
  m='51370'>to</span> <span m='51480'>step</span> <span m='51800'>into</span>
  <span m='51990'>the</span> <span m='52110'>middle</span> <span
  m='53230'>of</span> <span m='53400'>the</span> <span m='53530'>interval</span>
  <span m='53900'>again.</span> </p><p><span m='54990'>And</span> <span
  m='55350'>evaluate</span> <span m='55840'>the</span> <span
  m='55940'>function</span> <span m='56430'>there</span> <span
  m='57170'>again</span> <span m='57580'>to</span> <span m='57680'>get</span>
  <span m='57890'>s3.</span> <span m='59720'>And</span> <span
  m='59900'>then</span> <span m='60080'>use</span> <span m='60330'>s3</span>
  <span m='60970'>to</span> <span m='61080'>step</span> <span
  m='61490'>clear</span> <span m='61770'>across</span> <span
  m='62230'>the</span> <span m='62360'>interval,</span> <span
  m='63350'>and</span> <span m='63620'>get</span> <span m='63770'>s4.</span>
  <span m='66150'>And</span> <span m='66400'>then</span> <span
  m='66700'>take</span> <span m='68270'>a</span> <span
  m='68760'>combination</span> <span m='69700'>of</span> <span
  m='69810'>those</span> <span m='70130'>four</span> <span
  m='71170'>slopes,</span> <span m='73880'>weighting</span> <span
  m='74450'>the</span> <span m='74990'>two</span> <span m='75210'>in</span>
  <span m='75310'>the</span> <span m='75390'>middle</span> <span
  m='75720'>more</span> <span m='75990'>heavily,</span> <span
  m='77480'>to</span> <span m='77910'>take</span> <span m='78200'>your</span>
  <span m='78370'>final</span> <span m='78810'>step.</span> <span
  m='80580'>That's</span> <span m='81030'>the</span> <span
  m='81560'>classical</span> <span m='83000'>Runge-Kutta</span> <span
  m='83760'>method.</span> </p><p><span m='88560'>Here's</span> <span
  m='88900'>our</span> <span m='90290'>MATLAB</span> <span
  m='91480'>implementation.</span> <span m='93170'>And</span> <span
  m='93470'>we</span> <span m='93630'>will</span> <span m='93820'>call</span>
  <span m='94110'>it</span> <span m='94440'>ODE4,</span> <span
  m='96680'>because</span> <span m='97200'>it</span> <span
  m='97290'>evaluates</span> <span m='98010'>to</span> <span
  m='98120'>function</span> <span m='98760'>four</span> <span
  m='99140'>times</span> <span m='100580'>per</span> <span
  m='100720'>step.</span> <span m='102270'>Same</span> <span
  m='102740'>arguments,</span> <span m='104650'>vector</span> <span
  m='105120'>y</span> <span m='105530'>out.</span> <span m='107120'>Now</span>
  <span m='107450'>we</span> <span m='107670'>have</span> <span
  m='108460'>four</span> <span m='108920'>slopes--</span> <span
  m='110310'>s1</span> <span m='110860'>at</span> <span m='110960'>the</span>
  <span m='111040'>beginning,</span> <span m='112350'>s2</span> <span
  m='113160'>halfway</span> <span m='114020'>in</span> <span
  m='114210'>the</span> <span m='114280'>middle,</span> <span
  m='115280'>s3</span> <span m='116050'>again</span> <span m='116400'>in</span>
  <span m='116500'>the</span> <span m='116580'>middle,</span> <span
  m='117630'>and</span> <span m='117720'>then</span> <span m='117910'>s4</span>
  <span m='118240'>at</span> <span m='118550'>the</span> <span
  m='118710'>right</span> <span m='119040'>hand.</span> <span
  m='121600'>1/6</span> <span m='122180'>of</span> <span m='122280'>s1,</span>
  <span m='123010'>1/3</span> <span m='124090'>of</span> <span
  m='124200'>s2,</span> <span m='125420'>1/3</span> <span m='125870'>of</span>
  <span m='125990'>s3,</span> <span m='127270'>and</span> <span
  m='127520'>1/6</span> <span m='128000'>of</span> <span m='128150'>s4</span>
  <span m='129500'>give</span> <span m='129770'>you</span> <span
  m='129860'>your</span> <span m='130100'>final</span> <span
  m='130530'>step.</span> <span m='132480'>That's</span> <span
  m='132900'>the</span> <span m='133570'>classical</span> <span
  m='134600'>Runge-Kutta</span> <span m='135320'>method.</span> </p><p><span
  m='140660'>Carl</span> <span m='141090'>Runge</span> <span
  m='141610'>was</span> <span m='141810'>a</span> <span m='141900'>fairly</span>
  <span m='142280'>prominent</span> <span m='143670'>German</span> <span
  m='144790'>mathematician</span> <span m='145740'>and</span> <span
  m='145950'>physicist,</span> <span m='147270'>who</span> <span
  m='148410'>published</span> <span m='148910'>this</span> <span
  m='149450'>method,</span> <span m='150290'>along</span> <span
  m='150660'>with</span> <span m='150850'>several</span> <span
  m='151340'>others,</span> <span m='152390'>in</span> <span
  m='152810'>1895.</span> <span m='155200'>He</span> <span
  m='156240'>produced</span> <span m='156840'>a</span> <span
  m='157280'>number</span> <span m='157630'>of</span> <span
  m='157710'>other</span> <span m='157950'>mathematical</span> <span
  m='158730'>papers</span> <span m='159530'>and was</span> <span
  m='159840'>fairly</span> <span m='160140'>well</span> <span
  m='160420'>known.</span> </p><p><span m='162150'>Martin</span> <span
  m='162740'>Kutta</span> <span m='164700'>discovered</span> <span
  m='165290'>this</span> <span m='165540'>method</span> <span
  m='166210'>independently</span> <span m='167690'>and</span> <span
  m='168080'>published</span> <span m='168660'>it</span> <span
  m='168890'>in</span> <span m='170070'>1901.</span> <span m='172140'>He</span>
  <span m='172420'>is</span> <span m='172700'>not</span> <span
  m='173040'>so</span> <span m='173740'>nearly</span> <span
  m='174160'>well</span> <span m='174450'>known</span> <span
  m='175030'>for</span> <span m='176650'>anything</span> <span
  m='177180'>else.</span> </p><p><span m='179690'>I'd</span> <span
  m='179920'>like</span> <span m='180140'>to</span> <span
  m='180270'>pursue</span> <span m='180800'>a</span> <span
  m='180860'>simple</span> <span m='181280'>model</span> <span
  m='181680'>of</span> <span m='181780'>combustion.</span> <span
  m='183530'>Because</span> <span m='184060'>the</span> <span
  m='184190'>model</span> <span m='184740'>has</span> <span
  m='185100'>some</span> <span m='186050'>important</span> <span
  m='186920'>numerical</span> <span m='187850'>properties.</span> <span
  m='189700'>If</span> <span m='189860'>you</span> <span m='189960'>light</span>
  <span m='190160'>a</span> <span m='190250'>match,</span> <span
  m='191630'>the</span> <span m='191730'>ball</span> <span m='192240'>of</span>
  <span m='192400'>flame</span> <span m='193040'>grows</span> <span
  m='193450'>rapidly</span> <span m='194160'>until</span> <span
  m='194530'>it</span> <span m='194600'>reaches</span> <span m='195030'>a</span>
  <span m='195110'>critical</span> <span m='195540'>size.</span> <span
  m='197090'>Then</span> <span m='197260'>the</span> <span
  m='197360'>remains</span> <span m='197870'>at</span> <span
  m='197940'>that</span> <span m='198190'>size,</span> <span
  m='198640'>because</span> <span m='199000'>the</span> <span
  m='199100'>amount</span> <span m='199380'>of</span> <span
  m='199490'>oxygen</span> <span m='200240'>being</span> <span
  m='200560'>consumed</span> <span m='201160'>by</span> <span
  m='201320'>the</span> <span m='201460'>combustion</span> <span
  m='202150'>in</span> <span m='202270'>the</span> <span
  m='202420'>interior</span> <span m='203120'>of</span> <span
  m='203180'>the</span> <span m='203270'>ball</span> <span
  m='204380'>balances</span> <span m='205140'>the</span> <span
  m='205310'>amount</span> <span m='205800'>available</span> <span
  m='206400'>through</span> <span m='206650'>the</span> <span
  m='206780'>surface.</span> </p><p><span m='211120'>Here's</span> <span
  m='211420'>the</span> <span m='211890'>dimensionless</span> <span
  m='212660'>model.</span> <span m='214760'>The</span> <span
  m='215040'>match</span> <span m='215720'>is</span> <span m='216010'>a</span>
  <span m='216100'>sphere,</span> <span m='217490'>and</span> <span
  m='217830'>y</span> <span m='218180'>is</span> <span m='218420'>its</span>
  <span m='218600'>radius.</span> <span m='220440'>The</span> <span
  m='220570'>y</span> <span m='220920'>cubed</span> <span m='221660'>term</span>
  <span m='222330'>is</span> <span m='222830'>the</span> <span
  m='223620'>volume</span> <span m='224200'>of</span> <span
  m='224270'>the</span> <span m='224390'>sphere.</span> <span
  m='225660'>And</span> <span m='226200'>the</span> <span m='226900'>y</span>
  <span m='227210'>cubed</span> <span m='228010'>accounts</span> <span
  m='228580'>for</span> <span m='228790'>the</span> <span
  m='229140'>combustion</span> <span m='229860'>in</span> <span
  m='229980'>the</span> <span m='230140'>interior.</span> </p><p></p><p><span
  m='233370'>The</span> <span m='233480'>surface</span> <span
  m='234050'>of</span> <span m='234150'>the</span> <span
  m='234270'>sphere</span> <span m='234690'>is</span> <span
  m='234840'>proportional</span> <span m='235490'>y</span> <span
  m='235800'>squared.</span> <span m='237000'>And</span> <span
  m='237300'>the</span> <span m='237390'>y</span> <span
  m='237650'>squared</span> <span m='238180'>term</span> <span
  m='238550'>accounts</span> <span m='239090'>for</span> <span
  m='239240'>the</span> <span m='239440'>oxygen</span> <span
  m='240120'>that's</span> <span m='240340'>available</span> <span
  m='241300'>through</span> <span m='241490'>the</span> <span
  m='241640'>surface.</span> <span m='243160'>The</span> <span
  m='243330'>critical</span> <span m='243810'>parameter,</span> <span
  m='244350'>the</span> <span m='244470'>important</span> <span
  m='244980'>parameter,</span> <span m='245700'>is</span> <span
  m='246120'>the</span> <span m='246280'>initial</span> <span
  m='246750'>radius,</span> <span m='247350'>y0,</span> <span
  m='249020'>y</span> <span m='249360'>naught.</span> </p><p><span
  m='251410'>The</span> <span m='251800'>radius</span> <span
  m='252480'>starts</span> <span m='252980'>at</span> <span m='253140'>y0</span>
  <span m='253900'>and</span> <span m='254080'>grows</span> <span
  m='255480'>until</span> <span m='256740'>the</span> <span m='256970'>y</span>
  <span m='257320'>cubed</span> <span m='258029'>and</span> <span
  m='258279'>y</span> <span m='258579'>squared</span> <span
  m='259300'>terms</span> <span m='259690'>balance</span> <span
  m='260300'>each</span> <span m='260550'>other,</span> <span
  m='261550'>at</span> <span m='261709'>which</span> <span
  m='261980'>point</span> <span m='262390'>the</span> <span
  m='263570'>rate</span> <span m='263890'>of</span> <span
  m='263960'>growth</span> <span m='264310'>is</span> <span m='264480'>0.</span>
  <span m='264980'>And</span> <span m='265070'>the</span> <span
  m='265150'>radius</span> <span m='265620'>doesn't</span> <span
  m='265940'>grow</span> <span m='266220'>anymore.</span> <span
  m='267710'>We</span> <span m='267920'>integrate</span> <span
  m='268470'>over</span> <span m='268830'>a</span> <span m='268890'>long</span>
  <span m='269340'>time.</span> <span m='269900'>We</span> <span
  m='270040'>integrate</span> <span m='270540'>over</span> <span
  m='270970'>a</span> <span m='271090'>time</span> <span
  m='271980'>that's</span> <span m='272240'>inversely</span> <span
  m='273010'>proportional</span> <span m='274260'>to</span> <span
  m='274460'>the</span> <span m='274680'>initial</span> <span
  m='275160'>radius.</span> <span m='276620'>That's</span> <span
  m='277000'>the</span> <span m='277080'>model.</span> </p><p><span
  m='281340'>Here's</span> <span m='281450'>an</span> <span
  m='281660'>animation.</span> <span m='283620'>We're</span> <span
  m='283780'>starting</span> <span m='284290'>with</span> <span
  m='284470'>a</span> <span m='285320'>small</span> <span
  m='286090'>flame</span> <span m='286580'>here,</span> <span
  m='286880'>a</span> <span m='286950'>small</span> <span
  m='287400'>spherical</span> <span m='288000'>flame.</span> <span
  m='289422'>You'll</span> <span m='289780'>just</span> <span
  m='289950'>see</span> <span m='290260'>a</span> <span m='290340'>small</span>
  <span m='290810'>radius</span> <span m='291350'>there.</span> <span
  m='293020'>The</span> <span m='293220'>time</span> <span m='293600'>and</span>
  <span m='293700'>the</span> <span m='293790'>radius</span> <span
  m='294290'>are</span> <span m='294360'>shown</span> <span m='294710'>at</span>
  <span m='294810'>the</span> <span m='294930'>top</span> <span
  m='295250'>of</span> <span m='295320'>the</span> <span
  m='295420'>figure.</span> <span m='297300'>It's</span> <span
  m='297510'>beginning</span> <span m='297990'>to</span> <span
  m='298080'>grow.</span> </p><p><span m='299990'>When</span> <span
  m='300190'>time</span> <span m='300500'>gets</span> <span m='300750'>to</span>
  <span m='300870'>50,</span> <span m='301370'>we're</span> <span
  m='301550'>halfway</span> <span m='302080'>through.</span> <span
  m='304240'>The</span> <span m='304300'>flame</span> <span m='304670'>sort
  of</span> <span m='305040'>explodes,</span> <span m='307120'>and</span> <span
  m='307310'>then</span> <span m='307480'>gets</span> <span m='307760'>up</span>
  <span m='307890'>the</span> <span m='308000'>radius</span> <span
  m='308520'>1,</span> <span m='309840'>at</span> <span m='310020'>which</span>
  <span m='311350'>time</span> <span m='311840'>the</span> <span
  m='311970'>two</span> <span m='312180'>terms</span> <span
  m='312550'>balance</span> <span m='313080'>each</span> <span
  m='313330'>other.</span> <span m='314620'>And</span> <span
  m='315120'>the</span> <span m='315240'>flame</span> <span
  m='315640'>stops</span> <span m='316130'>growing.</span> <span
  m='318240'>It's</span> <span m='318420'>still</span> <span
  m='318750'>growing</span> <span m='319240'>slightly</span> <span
  m='319830'>here,</span> <span m='320170'>although</span> <span
  m='320490'>you</span> <span m='320660'>can't</span> <span
  m='320990'>see</span> <span m='321250'>it</span> <span m='321380'>on</span>
  <span m='321630'>this</span> <span m='324300'>this</span> <span
  m='324440'>scale.</span> </p><p><span m='333780'>Let's</span> <span
  m='334140'>set</span> <span m='334370'>this</span> <span m='334620'>up</span>
  <span m='334840'>for</span> <span m='334970'>Runge-Kutta.</span> <span
  m='337750'>The</span> <span m='337910'>differential</span> <span
  m='338520'>equation</span> <span m='339290'>is</span> <span
  m='340390'>y</span> <span m='340650'>prime</span> <span m='341100'>is</span>
  <span m='341220'>y</span> <span m='341550'>squared</span> <span
  m='342170'>minus</span> <span m='342530'>y</span> <span
  m='342870'>cubed.</span> <span m='344740'>Starting</span> <span
  m='345470'>at</span> <span m='345630'>zero,</span> <span
  m='347840'>with</span> <span m='348190'>the</span> <span
  m='348470'>critical</span> <span m='349080'>initial</span> <span
  m='350490'>radius,</span> <span m='352470'>I'm</span> <span
  m='352700'>going</span> <span m='352850'>to</span> <span
  m='353030'>take</span> <span m='353410'>to</span> <span m='353500'>be</span>
  <span m='353790'>0.01.</span> <span m='356930'>That</span> <span
  m='357120'>means</span> <span m='357350'>we're</span> <span
  m='357530'>going</span> <span m='357650'>to</span> <span
  m='357700'>integrate</span> <span m='358320'>out</span> <span
  m='358750'>to</span> <span m='359110'>two</span> <span m='359370'>over</span>
  <span m='359700'>y0</span> <span m='360380'>out</span> <span
  m='360650'>to</span> <span m='360800'>time</span> <span m='361190'>200.</span>
  </p><p><span m='364910'>I'm</span> <span m='365270'>going</span> <span
  m='365590'>to</span> <span m='365710'>choose</span> <span
  m='366320'>the</span> <span m='366420'>step</span> <span
  m='366800'>size</span> <span m='368060'>to</span> <span m='368300'>take</span>
  <span m='368740'>500</span> <span m='369380'>steps.</span> <span
  m='370260'>I'm</span> <span m='370380'>just</span> <span
  m='370640'>going</span> <span m='370790'>to</span> <span
  m='371540'>pick</span> <span m='371830'>that</span> <span
  m='372170'>somewhat</span> <span m='372540'>arbitrarily.</span> <span
  m='376650'>OK,</span> <span m='377010'>now</span> <span m='377260'>I'm</span>
  <span m='377440'>ready</span> <span m='377730'>to</span> <span
  m='377790'>use</span> <span m='378090'>ODE4.</span> <span m='379490'>And
  I'll</span> <span m='379680'>store</span> <span m='380020'>the</span> <span
  m='380140'>results</span> <span m='380660'>in</span> <span
  m='380770'>y.</span> </p><p><span m='383790'>And</span> <span
  m='384320'>it</span> <span m='384460'>goes</span> <span m='384800'>up</span>
  <span m='385030'>to</span> <span m='385680'>1.</span> <span
  m='387720'>I'm</span> <span m='387950'>going to</span> <span
  m='388030'>plot</span> <span m='388420'>the</span> <span
  m='388510'>results.</span> <span m='389100'>So</span> <span
  m='389280'>here's</span> <span m='389590'>the</span> <span
  m='389710'>values</span> <span m='390030'>of</span> <span m='390260'>t</span>
  <span m='390575'>I</span> <span m='390890'>need.</span> <span
  m='392600'>And</span> <span m='392890'>here's</span> <span
  m='393230'>the</span> <span m='393340'>plot.</span> </p><p><span
  m='398870'>Now,</span> <span m='399580'>you</span> <span m='399740'>can</span>
  <span m='399900'>see</span> <span m='401536'>the</span> <span
  m='401900'>flame</span> <span m='402410'>starts</span> <span
  m='402860'>to</span> <span m='402970'>grow.</span> <span m='403360'>It
  grows</span> <span m='403690'>rather</span> <span m='403980'>slowly.</span>
  <span m='404950'>And</span> <span m='405170'>then</span> <span
  m='405620'>halfway</span> <span m='406420'>through</span> <span
  m='406610'>the</span> <span m='406820'>time</span> <span
  m='407200'>interval,</span> <span m='407970'>it's</span> <span
  m='408160'>sort</span> <span m='408380'>of</span> <span
  m='408480'>explodes</span> <span m='408970'>and</span> <span
  m='409460'>goes</span> <span m='409760'>up</span> <span
  m='410020'>quickly,</span> <span m='411020'>until</span> <span
  m='411400'>it</span> <span m='411540'>reaches</span> <span m='412040'>a</span>
  <span m='412120'>radius</span> <span m='412650'>of</span> <span
  m='412770'>1,</span> <span m='413660'>and</span> <span m='413850'>then</span>
  <span m='414030'>stays</span> <span m='414610'>here.</span> </p><p><span
  m='415670'>Now</span> <span m='415830'>this</span> <span
  m='416070'>transition</span> <span m='416830'>period</span> <span
  m='417780'>is</span> <span m='418020'>fairly</span> <span
  m='418390'>narrow.</span> <span m='419620'>And</span> <span
  m='422490'>we're</span> <span m='422550'>going</span> <span
  m='422670'>to</span> <span m='422740'>continue</span> <span
  m='423220'>to</span> <span m='423340'>study</span> <span
  m='423740'>this</span> <span m='424040'>problem.</span> <span
  m='425020'>And</span> <span m='425240'>is</span> <span m='425420'>this</span>
  <span m='425710'>transition</span> <span m='426600'>area</span> <span
  m='427720'>which</span> <span m='428690'>is</span> <span
  m='428980'>going</span> <span m='429160'>to</span> <span
  m='429240'>provide</span> <span m='430200'>a</span> <span
  m='431140'>challenge</span> <span m='431890'>for</span> <span
  m='432050'>the</span> <span m='432200'>numerical</span> <span
  m='434420'>methods.</span> </p><p><span m='435490'>Now</span> <span
  m='435930'>here, we</span> <span m='436070'>just</span> <span
  m='436890'>went</span> <span m='437180'>through</span> <span
  m='437420'>it.</span> <span m='437740'>We</span> <span m='437920'>had</span>
  <span m='438160'>a</span> <span m='438230'>step</span> <span
  m='438560'>size</span> <span m='438930'>h,</span> <span m='439320'>that</span>
  <span m='439470'>we</span> <span m='439650'>picked</span> <span
  m='439970'>pretty</span> <span m='440220'>arbitrarily.</span> <span
  m='441620'>And</span> <span m='441870'>we</span> <span m='442050'>just</span>
  <span m='442520'>generated</span> <span m='443160'>these</span> <span
  m='443360'>values.</span> <span m='444540'>We</span> <span
  m='444740'>have</span> <span m='445640'>really</span> <span
  m='447260'>little</span> <span m='447610'>idea</span> <span
  m='448110'>how</span> <span m='448310'>accurate</span> <span
  m='449110'>these</span> <span m='449350'>numbers</span> <span
  m='449770'>are.</span> </p><p><span m='450623'>They</span> <span
  m='450976'>look</span> <span m='451330'>OK.</span> <span m='452350'>But</span>
  <span m='452810'>how</span> <span m='453090'>accurate</span> <span
  m='453345'>are</span> <span m='453600'>they?</span> <span
  m='455540'>This</span> <span m='455830'>is</span> <span m='456110'>the</span>
  <span m='457390'>critical</span> <span m='457890'>question</span> <span
  m='458590'>about</span> <span m='458860'>the</span> <span
  m='460010'>about</span> <span m='461470'>the</span> <span
  m='461570'>classical</span> <span m='462140'>Runge-Kutta</span> <span
  m='462760'>method.</span> <span m='463870'>How</span> <span
  m='464260'>reliable</span> <span m='465500'>are</span> <span
  m='465810'>the</span> <span m='466130'>values</span> <span
  m='466640'>we</span> <span m='466780'>have</span> <span m='467020'>here</span>
  <span m='467300'>in</span> <span m='467360'>our</span> <span
  m='467540'>graph?</span> </p><p><span m='474750'>I</span> <span
  m='474910'>have</span> <span m='475180'>four</span> <span
  m='475500'>exercises</span> <span m='476650'>for</span> <span
  m='476830'>your</span> <span m='477050'>consideration.</span> <span
  m='478820'>If</span> <span m='479090'>the</span> <span
  m='479320'>differential</span> <span m='479880'>equation</span> <span
  m='480620'>does</span> <span m='480870'>not</span> <span
  m='481090'>involve</span> <span m='481560'>y,</span> <span
  m='483100'>then</span> <span m='483500'>this</span> <span
  m='484170'>solution</span> <span m='484750'>is</span> <span
  m='484860'>just</span> <span m='485110'>an</span> <span
  m='485220'>integral.</span> <span m='486520'>And</span> <span
  m='486820'>the</span> <span m='486920'>Runge-Kutta</span> <span
  m='487600'>method</span> <span m='488050'>becomes</span> <span
  m='488640'>a</span> <span m='488870'>classic</span> <span
  m='489510'>method</span> <span m='489920'>of</span> <span
  m='490070'>numerical</span> <span m='490570'>integration.</span> <span
  m='492470'>If</span> <span m='492690'>you've</span> <span
  m='493210'>studied</span> <span m='493670'>such</span> <span
  m='493970'>methods,</span> <span m='494480'>then</span> <span
  m='494680'>you</span> <span m='494790'>should</span> <span
  m='495060'>be</span> <span m='495220'>able</span> <span m='495400'>to</span>
  <span m='495640'>recognize</span> <span m='496490'>this</span> <span
  m='496790'>method.</span> </p><p><span m='502140'>Number.</span> <span
  m='502520'>two--</span> <span m='503920'>find</span> <span
  m='504310'>the</span> <span m='504410'>exact</span> <span
  m='504910'>solution</span> <span m='505660'>of</span> <span
  m='506650'>y</span> <span m='506920'>prime</span> <span
  m='507260'>equals</span> <span m='507530'>1</span> <span
  m='507810'>plus</span> <span m='508100'>y</span> <span
  m='508400'>squared,</span> <span m='509090'>with</span> <span
  m='509310'>y</span> <span m='509550'>of</span> <span m='509650'>0</span> <span
  m='510090'>equals</span> <span m='510310'>zero.</span> <span
  m='511660'>And</span> <span m='511900'>then</span> <span m='512130'>see</span>
  <span m='512360'>what</span> <span m='512520'>happens</span> <span
  m='513130'>with</span> <span m='514190'>ODE4,</span> <span
  m='515140'>when</span> <span m='515340'>you</span> <span m='515470'>try</span>
  <span m='515840'>and</span> <span m='516039'>solve</span> <span
  m='516440'>it</span> <span m='516510'>on</span> <span m='516679'>the</span>
  <span m='516780'>interval</span> <span m='517210'>from</span> <span
  m='518090'>t</span> <span m='518370'>from</span> <span m='518640'>0</span>
  <span m='519000'>to</span> <span m='519110'>2.</span> </p><p><span
  m='524030'>Number</span> <span m='524280'>three-</span> <span
  m='525190'>what</span> <span m='525440'>happens</span> <span
  m='526110'>if</span> <span m='526630'>the</span> <span
  m='527650'>length</span> <span m='528010'>of</span> <span
  m='528100'>the</span> <span m='528220'>interval</span> <span
  m='528710'>is</span> <span m='528860'>not</span> <span
  m='529170'>exactly</span> <span m='529720'>divisible</span> <span
  m='530250'>by</span> <span m='530430'>the</span> <span m='530570'>step</span>
  <span m='530870'>size?</span> <span m='532440'>For</span> <span
  m='532630'>example,</span> <span m='533310'>if</span> <span
  m='533500'>t</span> <span m='533740'>final</span> <span m='534065'>is</span>
  <span m='534390'>pi,</span> <span m='534830'>and</span> <span
  m='534970'>the</span> <span m='535100'>step</span> <span
  m='535410'>size</span> <span m='535850'>is</span> <span m='536010'>0.1.</span>
  <span m='538880'>Don't</span> <span m='539120'>try</span> <span
  m='539340'>and</span> <span m='539440'>fix</span> <span
  m='539800'>this.</span> <span m='541150'>It's</span> <span
  m='541390'>just</span> <span m='541670'>one</span> <span m='541840'>of</span>
  <span m='541910'>the</span> <span m='542000'>hazards</span> <span
  m='542680'>of</span> <span m='542850'>a</span> <span m='543000'>fixed</span>
  <span m='543380'>step</span> <span m='543690'>size.</span> </p><p><span
  m='547550'>And</span> <span m='547680'>finally,</span> <span
  m='548590'>exercise</span> <span m='549220'>four--</span> <span
  m='550940'>investigate</span> <span m='551750'>the</span> <span
  m='551860'>flame</span> <span m='552490'>problem</span> <span
  m='553140'>with</span> <span m='554425'>an</span> <span
  m='554830'>initial</span> <span m='555430'>radius</span> <span
  m='556010'>of</span> <span m='556170'>1/1,000.</span> <span
  m='559250'>For</span> <span m='559460'>what</span> <span
  m='559780'>value</span> <span m='560260'>of</span> <span m='560450'>t</span>
  <span m='562180'>does</span> <span m='562610'>the</span> <span
  m='563300'>radius</span> <span m='564910'>reach</span> <span
  m='566450'>90%</span> <span m='567290'>of</span> <span m='567430'>its</span>
  <span m='567720'>final</span> <span m='568050'>value?</span> </p>
uid: 5f26137fa0da7e39a9621c844373ad1b
type: courses
layout: video
---
