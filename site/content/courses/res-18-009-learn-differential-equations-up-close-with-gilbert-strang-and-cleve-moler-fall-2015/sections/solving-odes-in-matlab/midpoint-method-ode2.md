---
about_this_resource_text: >-
  <p><strong>Description: </strong>ODE2 implements a midpoint method with two
  function evaluations per step. This method is twice as accurate as Euler's
  method. A nonlinear equation defining the sine function provides an example.
  An exercise involves implementing a related trapezoid method.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: x0Ap2kDsGRQ
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Video-YouTube-Stream
    type: Video
    uid: fcecde049f1b86b79f62d6a1afef6c47
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/x0Ap2kDsGRQ/default.jpg'
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b78723da783fdcae71a25974b89643b8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: x0Ap2kDsGRQ
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 995d07b8e9f94aeebbf5bc633a549626
  - id: x0Ap2kDsGRQ.srt
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/midpoint-method-ode2/x0Ap2kDsGRQ.srt
    title: 3play caption file
    type: null
    uid: ff352af7b749f51bc6e8d7f076db47d7
  - id: x0Ap2kDsGRQ.pdf
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/midpoint-method-ode2/x0Ap2kDsGRQ.pdf
    title: 3play pdf file
    type: null
    uid: 9546dd206e205b73a0a771a5397d10c6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0fb5977e4876d27a92bd01b7b4364a07
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 667e0ef67d7896dcc58223959594f928
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Video-iTunes U-MP4
    type: Video
    uid: bb7141b6fa37ceb6ce5517679608f9a2
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_02_300k.mp4
    parent_uid: 7a5175179b1793f77c478bf3a70f0256
    title: Video-Internet Archive-MP4
    type: Video
    uid: 32ede20ab8441b3f18a2f0ebbbedd984
inline_embed_id: '65103052midpointmethod,ode226804808'
order_index: 584
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: midpoint-method-ode2
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/midpoint-method-ode2
title: 'Midpoint Method, ODE2'
transcript: >-
  <p><span m='4610'>PROFESSOR: The</span> <span m='4750'>cost</span> <span
  m='5270'>of</span> <span m='5400'>a</span> <span m='5470'>numerical</span>
  <span m='5990'>method</span> <span m='6380'>for</span> <span
  m='6510'>solving</span> <span m='6940'>ordinary</span> <span
  m='7370'>differential</span> <span m='7840'>equations</span> <span
  m='8490'>is</span> <span m='8640'>measured</span> <span m='9050'>by</span>
  <span m='9160'>the</span> <span m='9280'>number</span> <span
  m='9610'>of</span> <span m='9680'>times</span> <span m='10010'>it</span> <span
  m='10120'>evaluates</span> <span m='10800'>the</span> <span
  m='10890'>function</span> <span m='11390'>f</span> <span m='12240'>per</span>
  <span m='12380'>step.</span> <span m='13570'>Euler's</span> <span
  m='13980'>method</span> <span m='14450'>evaluates</span> <span
  m='15140'>f</span> <span m='15380'>once</span> <span m='15850'>per</span>
  <span m='16000'>step.</span> <span m='16780'>Here's</span> <span m='17100'>a
  new</span> <span m='17260'>method</span> <span m='17640'>that</span> <span
  m='18110'>evaluates</span> <span m='18445'>it</span> <span
  m='18890'>twice</span> <span m='19340'>per</span> <span m='19480'>step.</span>
  <span m='20700'>If</span> <span m='21160'>f</span> <span m='21410'>is</span>
  <span m='21570'>evaluated</span> <span m='21930'>once</span> <span
  m='22290'>at</span> <span m='22620'>the</span> <span
  m='22800'>beginning</span> <span m='23190'>of</span> <span
  m='23370'>the</span> <span m='23440'>step</span> <span m='23820'>to</span>
  <span m='23920'>give</span> <span m='24120'>a</span> <span
  m='24170'>slope</span> <span m='24600'>s1,</span> <span m='25950'>and</span>
  <span m='26150'>then</span> <span m='26250'>s1</span> <span
  m='26800'>is</span> <span m='26900'>used</span> <span m='27250'>to</span>
  <span m='27420'>take</span> <span m='28010'>Euler's</span> <span
  m='28370'>step</span> <span m='28740'>halfway</span> <span
  m='29220'>across</span> <span m='29670'>the</span> <span
  m='29790'>interval,</span> <span m='31240'>the</span> <span
  m='31290'>function</span> <span m='31730'>is</span> <span
  m='31900'>evaluated</span> <span m='32650'>in</span> <span
  m='32750'>the</span> <span m='32830'>middle</span> <span m='33150'>of</span>
  <span m='33260'>the</span> <span m='33390'>interval</span> <span
  m='33820'>to</span> <span m='34040'>give</span> <span m='34300'>the</span>
  <span m='34420'>slope</span> <span m='35280'>s2.</span> <span
  m='36480'>And</span> <span m='36610'>then</span> <span m='36790'>s2</span>
  <span m='37450'>is</span> <span m='37560'>used</span> <span
  m='37870'>to</span> <span m='38000'>take</span> <span m='38310'>the</span>
  <span m='38430'>step.</span> <span m='39750'>For</span> <span
  m='40000'>obvious</span> <span m='40490'>reasons,</span> <span
  m='41020'>this</span> <span m='41210'>is</span> <span m='41330'>called</span>
  <span m='41630'>the</span> <span m='41700'>midpoint</span> <span
  m='42250'>method.</span> </p><p><span m='44690'>Here's</span> <span
  m='44860'>ode2.</span> <span m='46870'>It</span> <span
  m='47250'>implements</span> <span m='47770'>the</span> <span
  m='47900'>midpoint</span> <span m='48440'>method,</span> <span
  m='49390'>evaluates</span> <span m='50090'>the</span> <span
  m='50180'>function</span> <span m='50630'>twice</span> <span
  m='51010'>per</span> <span m='51160'>step.</span> <span m='53760'>The</span>
  <span m='53860'>structure</span> <span m='54390'>is</span> <span
  m='54530'>the</span> <span m='54640'>same</span> <span m='55000'>as</span>
  <span m='55120'>ode1.</span> <span m='57450'>Same</span> <span
  m='57890'>arguments,</span> <span m='60630'>same</span> <span
  m='61070'>for</span> <span m='61410'>loop,</span> <span m='62300'>but</span>
  <span m='62490'>now</span> <span m='62720'>we</span> <span
  m='62870'>have</span> <span m='63130'>s1</span> <span m='64099'>at</span>
  <span m='64349'>the</span> <span m='65510'>beginning</span> <span
  m='65980'>of</span> <span m='66050'>the</span> <span m='66170'>step,</span>
  <span m='67310'>s2</span> <span m='67900'>in</span> <span m='68000'>the</span>
  <span m='68080'>middle</span> <span m='68400'>of</span> <span
  m='68500'>the</span> <span m='68590'>step,</span> <span m='69650'>and</span>
  <span m='69840'>then</span> <span m='70000'>the</span> <span
  m='70100'>step</span> <span m='70500'>is</span> <span
  m='70680'>actually</span> <span m='71210'>taken</span> <span
  m='71650'>with</span> <span m='72100'>s2.</span> </p><p><span
  m='75320'>Here's</span> <span m='75550'>an</span> <span
  m='75650'>example</span> <span m='76290'>involving</span> <span
  m='76900'>a</span> <span m='77110'>trig</span> <span
  m='77460'>function.</span> <span m='79270'>Dy</span> <span m='79675'>dt</span>
  <span m='80080'>is</span> <span m='80240'>the</span> <span
  m='80340'>square</span> <span m='80700'>root</span> <span m='80790'>of</span>
  <span m='80890'>1,</span> <span m='81170'>minus</span> <span
  m='81560'>y</span> <span m='81870'>squared.</span> <span
  m='83700'>Starting</span> <span m='84010'>at</span> <span m='84460'>the</span>
  <span m='84590'>origin</span> <span m='86140'>on</span> <span
  m='86470'>the</span> <span m='86680'>interval</span> <span
  m='87210'>from</span> <span m='87440'>0</span> <span m='87790'>to</span> <span
  m='87930'>pi</span> <span m='88190'>over</span> <span m='88590'>2.</span>
  <span m='90530'>Now,</span> <span m='91520'>because</span> <span
  m='91900'>I've</span> <span m='92400'>called</span> <span m='92730'>it</span>
  <span m='92790'>a</span> <span m='92910'>trig</span> <span
  m='93220'>example,</span> <span m='94590'>you</span> <span
  m='94820'>might</span> <span m='95220'>just--</span> <span
  m='95520'>this</span> <span m='95730'>is</span> <span m='95880'>a</span> <span
  m='95960'>separable</span> <span m='96650'>equation--</span> <span
  m='99170'>do</span> <span m='99330'>the</span> <span
  m='99520'>integral,</span> <span m='100520'>or</span> <span
  m='100680'>you</span> <span m='100860'>can</span> <span m='101080'>just</span>
  <span m='101460'>guess</span> <span m='101850'>at</span> <span
  m='101960'>the--</span> <span m='103090'>guess</span> <span
  m='103480'>that</span> <span m='103620'>the</span> <span
  m='104510'>answer</span> <span m='105140'>is</span> <span
  m='106210'>sine</span> <span m='106800'>t.</span> <span
  m='108000'>Because</span> <span m='108790'>the</span> <span
  m='108970'>derivative</span> <span m='109550'>of</span> <span
  m='109620'>sine</span> <span m='110070'>t</span> <span m='110340'>is</span>
  <span m='110570'>the</span> <span m='111020'>cosine</span> <span
  m='111550'>of</span> <span m='111710'>t,</span> <span m='112910'>and</span>
  <span m='113240'>that's</span> <span m='113560'>the</span> <span
  m='113660'>square</span> <span m='114100'>root</span> <span
  m='114250'>of</span> <span m='114360'>1</span> <span m='114620'>minus</span>
  <span m='115110'>y</span> <span m='115400'>squared.</span> </p><p><span
  m='117530'>Let's</span> <span m='117900'>set</span> <span m='118110'>it</span>
  <span m='118240'>up.</span> <span m='120770'>F</span> <span
  m='121370'>is</span> <span m='122930'>the</span> <span
  m='123120'>anonymous</span> <span m='123720'>function</span> <span
  m='124200'>square</span> <span m='124520'>root</span> <span
  m='124650'>of</span> <span m='124740'>1</span> <span m='124960'>minus</span>
  <span m='125360'>y</span> <span m='125690'>squared.</span> <span
  m='127720'>T0</span> <span m='128729'>is</span> <span m='130310'>0.</span>
  <span m='132020'>I'm</span> <span m='132190'>going</span> <span
  m='132330'>to</span> <span m='132450'>take</span> <span m='132790'>h</span>
  <span m='133410'>to</span> <span m='133540'>be</span> <span
  m='134560'>pi</span> <span m='134920'>over</span> <span m='135200'>32.</span>
  <span m='136260'>And</span> <span m='137540'>tfinal</span> <span
  m='139120'>is</span> <span m='139840'>pi</span> <span m='140100'>over</span>
  <span m='140540'>2.</span> <span m='141900'>And</span> <span
  m='142900'>y0</span> <span m='143970'>is</span> <span m='144780'>0.</span>
  <span m='146790'>And</span> <span m='147510'>here's</span> <span
  m='147900'>my</span> <span m='148160'>call</span> <span m='148900'>to</span>
  <span m='150380'>ode2,</span> <span m='153020'>with</span> <span
  m='153510'>these</span> <span m='155340'>five</span> <span
  m='155850'>arguments,</span> <span m='157590'>and</span> <span
  m='157820'>it</span> <span m='157970'>produces</span> <span
  m='158530'>this</span> <span m='158800'>output.</span> </p><p><span
  m='160440'>Now</span> <span m='160580'>I</span> <span m='160670'>want</span>
  <span m='160910'>to</span> <span m='160990'>plot</span> <span
  m='161520'>it.</span> <span m='162310'>Let's</span> <span
  m='162590'>get</span> <span m='163450'>t</span> <span m='163820'>to</span>
  <span m='163920'>go</span> <span m='164110'>along</span> <span
  m='164560'>with</span> <span m='164820'>it.</span> <span
  m='167150'>There</span> <span m='167550'>is</span> <span m='167740'>the</span>
  <span m='168140'>t</span> <span m='168390'>values</span> <span
  m='169090'>as</span> <span m='169280'>a</span> <span
  m='169380'>column--</span> <span m='170110'>vector--</span> <span
  m='171830'>and</span> <span m='173620'>let's</span> <span
  m='174000'>plot.</span> <span m='179570'>And</span> <span m='179970'>do</span>
  <span m='180140'>some</span> <span m='180340'>annotation</span> <span
  m='181120'>on</span> <span m='181300'>the</span> <span m='181400'>plot.</span>
  <span m='183550'>Here's</span> <span m='183820'>our</span> <span
  m='183960'>plot.</span> <span m='185490'>So</span> <span
  m='186760'>there's</span> <span m='187150'>the</span> <span
  m='187260'>graph</span> <span m='187900'>of</span> <span
  m='188140'>our,</span> <span m='189000'>there's</span> <span
  m='189310'>the</span> <span m='189420'>graph</span> <span m='189840'>of</span>
  <span m='189970'>sine</span> <span m='190390'>t,</span> <span
  m='193390'>the</span> <span m='193520'>points</span> <span
  m='193900'>generated</span> <span m='194460'>by</span> <span
  m='194610'>ode2.</span> </p><p><span m='203060'>Now</span> <span
  m='203240'>I</span> <span m='203330'>can't</span> <span m='203630'>help</span>
  <span m='203930'>but</span> <span m='204100'>go</span> <span
  m='204320'>look</span> <span m='204780'>at</span> <span
  m='205030'>these</span> <span m='205280'>answers.</span> <span
  m='208190'>This</span> <span m='208380'>is</span> <span
  m='208510'>supposed</span> <span m='208910'>to</span> <span
  m='208960'>be</span> <span m='209120'>the</span> <span
  m='209210'>values</span> <span m='209700'>of</span> <span
  m='209800'>sine</span> <span m='210300'>t.</span> <span m='211290'>This</span>
  <span m='211480'>should</span> <span m='211790'>be</span> <span
  m='211920'>getting</span> <span m='212290'>to</span> <span m='212390'>1</span>
  <span m='213170'>at</span> <span m='213440'>pi</span> <span
  m='213640'>over</span> <span m='214010'>2.</span> <span
  m='214990'>We've</span> <span m='215190'>got</span> <span
  m='215470'>0.997.</span> <span m='217680'>That</span> <span
  m='217920'>gives</span> <span m='218180'>you</span> <span m='218340'>a</span>
  <span m='218430'>rough</span> <span m='218730'>idea</span> <span
  m='219080'>of</span> <span m='219160'>what</span> <span m='219350'>kind</span>
  <span m='219630'>of</span> <span m='219870'>accuracy</span> <span
  m='220700'>we're</span> <span m='220890'>getting</span> <span
  m='221310'>out</span> <span m='221520'>of</span> <span m='221690'>this</span>
  <span m='224280'>crude</span> <span m='224760'>numerical</span> <span
  m='225270'>method.</span> </p><p><span m='228690'>Let's</span> <span
  m='228850'>take</span> <span m='229020'>a</span> <span m='229060'>look</span>
  <span m='229360'>at</span> <span m='229500'>an</span> <span
  m='229680'>animation</span> <span m='230530'>of</span> <span
  m='230800'>the</span> <span m='232350'>midpoint</span> <span
  m='232890'>method.</span> <span m='234420'>The</span> <span
  m='234880'>differential</span> <span m='235440'>equation</span> <span
  m='236270'>is</span> <span m='236650'>y</span> <span m='236970'>prime</span>
  <span m='237420'>is</span> <span m='237600'>2y,</span> <span
  m='239420'>starting</span> <span m='240010'>at</span> <span
  m='240200'>t0</span> <span m='240755'>equals</span> <span m='241150'>0</span>
  <span m='242390'>with</span> <span m='242510'>a</span> <span
  m='242680'>step</span> <span m='243050'>size</span> <span m='243570'>of</span>
  <span m='243820'>1,</span> <span m='245180'>going</span> <span
  m='245590'>up</span> <span m='245870'>to</span> <span m='246200'>3,</span>
  <span m='247620'>and</span> <span m='247900'>starting</span> <span
  m='248450'>with</span> <span m='249290'>y0</span> <span
  m='249920'>equals</span> <span m='250460'>10,</span> <span
  m='251850'>and</span> <span m='252800'>using</span> <span
  m='253370'>ode2.</span> <span m='255880'>Here</span> <span
  m='256420'>is</span> <span m='256959'>the</span> <span
  m='257660'>animation.</span> <span m='261870'>Here's</span> <span
  m='262250'>t0</span> <span m='264250'>and</span> <span m='264590'>y0.</span>
  <span m='266800'>Evaluate</span> <span m='267470'>the</span> <span
  m='267560'>function</span> <span m='268050'>at</span> <span
  m='268150'>y0.</span> <span m='268960'>2</span> <span m='269200'>times</span>
  <span m='269660'>y0</span> <span m='270500'>is</span> <span
  m='271090'>20,</span> <span m='272670'>step</span> <span
  m='273080'>halfway</span> <span m='273650'>across</span> <span
  m='274160'>the</span> <span m='274280'>interval</span> <span
  m='274750'>with</span> <span m='274950'>that</span> <span
  m='275230'>slope,</span> <span m='277560'>that</span> <span
  m='277820'>gets</span> <span m='278090'>us</span> <span m='278260'>to</span>
  <span m='278390'>20.</span> <span m='279590'>Evaluate</span> <span
  m='280210'>the</span> <span m='280300'>function</span> <span
  m='280830'>there,</span> <span m='281200'>the</span> <span
  m='281390'>slope</span> <span m='281860'>is</span> <span m='282050'>40,</span>
  <span m='283100'>so</span> <span m='283360'>we</span> <span
  m='283550'>take</span> <span m='283790'>a</span> <span m='283870'>step</span>
  <span m='284360'>with</span> <span m='284520'>slope</span> <span
  m='284970'>40</span> <span m='285670'>all</span> <span m='285900'>the</span>
  <span m='285960'>way</span> <span m='286150'>across</span> <span
  m='286660'>the</span> <span m='286750'>interval</span> <span
  m='287570'>to</span> <span m='287680'>get</span> <span m='287880'>up</span>
  <span m='288090'>to</span> <span m='288180'>50.</span> </p><p><span
  m='289190'>That's</span> <span m='289530'>the</span> <span
  m='289630'>first</span> <span m='289990'>step.</span> <span
  m='291250'>Now</span> <span m='291480'>we'll</span> <span
  m='291810'>rescale</span> <span m='292670'>the</span> <span
  m='292780'>plot</span> <span m='293170'>window.</span> <span
  m='295410'>Here</span> <span m='295630'>we</span> <span m='295780'>are</span>
  <span m='296010'>at</span> <span m='296150'>50.</span> <span
  m='297440'>Evaluate</span> <span m='298110'>the</span> <span
  m='298190'>function</span> <span m='298700'>there.</span> <span
  m='298920'>The</span> <span m='299060'>slope</span> <span m='299450'>is</span>
  <span m='299590'>100,</span> <span m='300670'>step</span> <span
  m='301080'>halfway</span> <span m='301820'>with</span> <span
  m='302110'>that</span> <span m='302410'>slope,</span> <span
  m='303500'>get</span> <span m='303700'>to</span> <span m='303760'>the</span>
  <span m='303900'>middle</span> <span m='304190'>of</span> <span
  m='304250'>the</span> <span m='304410'>interval,</span> <span
  m='304920'>evaluate</span> <span m='305580'>the</span> <span
  m='305680'>function</span> <span m='306220'>there.</span> <span
  m='306550'>The</span> <span m='306720'>slope</span> <span m='307100'>is</span>
  <span m='307290'>200,</span> <span m='308590'>so</span> <span
  m='308770'>we</span> <span m='308970'>take</span> <span m='309230'>a</span>
  <span m='309320'>step</span> <span m='309810'>with</span> <span
  m='309970'>slope</span> <span m='310430'>200</span> <span m='311460'>to</span>
  <span m='311560'>get</span> <span m='311760'>up</span> <span
  m='311930'>to</span> <span m='312070'>250.</span> <span
  m='313620'>That's</span> <span m='313910'>the</span> <span
  m='314000'>second</span> <span m='314460'>step.</span> <span
  m='315600'>Rescale</span> <span m='316210'>the</span> <span
  m='316330'>plot</span> <span m='316750'>window.</span> <span
  m='318000'>Evaluate</span> <span m='318700'>the</span> <span
  m='318800'>function</span> <span m='319330'>there.</span> <span
  m='319670'>The</span> <span m='319840'>slope</span> <span m='320230'>is</span>
  <span m='320430'>500.</span> <span m='321830'>Take</span> <span
  m='322110'>that</span> <span m='322360'>step</span> <span
  m='322730'>halfway</span> <span m='323180'>across</span> <span
  m='323700'>the</span> <span m='323820'>interval,</span> <span
  m='324270'>evaluate</span> <span m='326090'>the</span> <span
  m='326280'>slope</span> <span m='326750'>there.</span> <span
  m='327830'>The</span> <span m='328000'>slope</span> <span m='328410'>is</span>
  <span m='329670'>1,000,</span> <span m='330920'>so</span> <span
  m='331190'>we</span> <span m='331370'>take</span> <span m='331670'>a</span>
  <span m='331750'>step</span> <span m='332180'>with</span> <span
  m='332340'>slope</span> <span m='332770'>of</span> <span
  m='332910'>1,000</span> <span m='333930'>to</span> <span m='334040'>get</span>
  <span m='334270'>up</span> <span m='334450'>to</span> <span
  m='334580'>1,250</span> <span m='335760'>as</span> <span m='335940'>our</span>
  <span m='336100'>final</span> <span m='336560'>value.</span> </p><p><span
  m='337890'>Since</span> <span m='338100'>this</span> <span
  m='338290'>is</span> <span m='338410'>a</span> <span m='338550'>rapidly</span>
  <span m='339280'>increasing</span> <span m='339940'>function</span> <span
  m='340430'>of</span> <span m='340570'>y,</span> <span m='341630'>the</span>
  <span m='341720'>values</span> <span m='342210'>we</span> <span
  m='342360'>generate</span> <span m='342970'>here</span> <span
  m='343250'>with</span> <span m='343450'>the</span> <span
  m='343550'>midpoint</span> <span m='344370'>method</span> <span
  m='345480'>are</span> <span m='346590'>far</span> <span
  m='347050'>larger</span> <span m='347570'>than</span> <span
  m='347790'>the</span> <span m='347880'>values</span> <span
  m='348430'>generated</span> <span m='349060'>with</span> <span
  m='349510'>the</span> <span m='350020'>Euler</span> <span
  m='350340'>method</span> <span m='350640'>that</span> <span
  m='350940'>we</span> <span m='351110'>saw</span> <span m='351430'>with</span>
  <span m='351660'>ode1.</span> </p><p><span m='355760'>Here's</span> <span
  m='356010'>an</span> <span m='356130'>exercise.</span> <span
  m='358350'>Modify</span> <span m='359040'>ode2,</span> <span
  m='360510'>creating</span> <span m='361210'>ode2t,</span> <span
  m='363590'>which</span> <span m='363920'>implements</span> <span
  m='364720'>the</span> <span m='365250'>companion</span> <span
  m='365900'>method,</span> <span m='366350'>the</span> <span
  m='366480'>trapezoid</span> <span m='367210'>method.</span> <span
  m='369530'>Evaluate</span> <span m='370250'>the</span> <span
  m='370350'>function</span> <span m='372100'>at</span> <span
  m='372340'>the</span> <span m='372610'>beginning</span> <span
  m='373130'>of</span> <span m='373180'>the</span> <span
  m='373280'>interval</span> <span m='373710'>to</span> <span
  m='373780'>get</span> <span m='374050'>s1.</span> <span m='376180'>Use</span>
  <span m='376580'>s1</span> <span m='377210'>to</span> <span
  m='377280'>go</span> <span m='377470'>all</span> <span m='377690'>the</span>
  <span m='377780'>way</span> <span m='377910'>across</span> <span
  m='378390'>the</span> <span m='378530'>interval.</span> <span
  m='380140'>Evaluate</span> <span m='380820'>the</span> <span
  m='381630'>function</span> <span m='382190'>at</span> <span
  m='382390'>the</span> <span m='383050'>right-hand</span> <span
  m='383780'>endpoint</span> <span m='384360'>of</span> <span
  m='384420'>the</span> <span m='384540'>interval</span> <span
  m='385700'>to</span> <span m='385830'>get</span> <span m='386010'>s2.</span>
  <span m='387560'>And</span> <span m='387770'>then,</span> <span
  m='388370'>use</span> <span m='388780'>the</span> <span
  m='389010'>average</span> <span m='389690'>of</span> <span
  m='389810'>s1</span> <span m='390310'>and</span> <span m='390460'>s2</span>
  <span m='391860'>to</span> <span m='392260'>take</span> <span
  m='392580'>the</span> <span m='392670'>step.</span> <span
  m='394900'>That's</span> <span m='395230'>the</span> <span
  m='395340'>trapezoid</span> <span m='396090'>method.</span> </p>
uid: 7a5175179b1793f77c478bf3a70f0256
type: courses
layout: video
---
