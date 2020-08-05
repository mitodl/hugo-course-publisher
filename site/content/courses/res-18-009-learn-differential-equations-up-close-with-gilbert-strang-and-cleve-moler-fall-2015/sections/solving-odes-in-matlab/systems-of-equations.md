---
about_this_resource_text: >-
  <p><strong>Descriptions: </strong>An ordinary differential equation involving
  higher order derivatives is rewritten as a vector system involving only first
  order derivatives. The classic Van der Pol nonlinear oscillator is provided as
  an example. The VdP equation becomes stiff as the parameter is
  increased.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: NNhVVk244ZA
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Video-YouTube-Stream
    type: Video
    uid: 9c5f391f1ecabc50da30254e316c232e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/NNhVVk244ZA/default.jpg'
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b9b449db89e9c7e3c39c083dd0ad1e33
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: NNhVVk244ZA
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3ab60769a70b8e67f2312b66976ece34
  - id: NNhVVk244ZA.srt
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/systems-of-equations/NNhVVk244ZA.srt
    title: 3play caption file
    type: null
    uid: cde03eb3a06004bc51b3ce12da1d96e0
  - id: NNhVVk244ZA.pdf
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/systems-of-equations/NNhVVk244ZA.pdf
    title: 3play pdf file
    type: null
    uid: 11b30c99c1850102677367d3683685e2
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 773d69874f9ef34eef73f65d98d03800
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1e287177334030cb89079dae5d57f76c
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Video-iTunes U-MP4
    type: Video
    uid: 04126edce71f8995ae67e2362dab4986
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_08_300k.mp4
    parent_uid: 1b670bd42cb09649d26c3646caebcb5e
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1bbd785dea4622b38bc3d698c99867c6
inline_embed_id: 7083425systemsofequations87267862
order_index: 644
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: systems-of-equations
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/systems-of-equations
title: Systems of Equations
transcript: >-
  <p><span m='3670'>PROFESSOR: Many</span> <span m='3960'>mathematical</span>
  <span m='4700'>models</span> <span m='5250'>involve</span> <span
  m='5740'>high</span> <span m='6110'>order</span> <span
  m='6350'>derivatives.</span> <span m='7750'>But</span> <span
  m='7910'>the</span> <span m='7990'>MATLAB</span> <span m='8560'>ODE</span>
  <span m='9100'>solvers</span> <span m='10300'>only</span> <span
  m='11370'>work</span> <span m='11760'>with</span> <span
  m='12730'>systems</span> <span m='13400'>of</span> <span
  m='13540'>first</span> <span m='14020'>order</span> <span
  m='15100'>ordinary</span> <span m='15590'>differential</span> <span
  m='16149'>equations.</span> <span m='17720'>So</span> <span
  m='17960'>we</span> <span m='18130'>have</span> <span m='18430'>to</span>
  <span m='18850'>rewrite</span> <span m='19530'>the</span> <span
  m='19610'>models</span> <span m='20260'>to</span> <span m='20440'>just</span>
  <span m='20770'>involve</span> <span m='21230'>first</span> <span
  m='21580'>order</span> <span m='21870'>derivatives.</span> <span
  m='23380'>Let's</span> <span m='23710'>see</span> <span m='23860'>how</span>
  <span m='24040'>to</span> <span m='24170'>do</span> <span
  m='24320'>that</span> <span m='24750'>with</span> <span m='24990'>a</span>
  <span m='25060'>very</span> <span m='25430'>simple</span> <span
  m='26990'>model,</span> <span m='27940'>the</span> <span
  m='28070'>harmonic</span> <span m='28690'>oscillator.</span> </p><p><span
  m='30290'>x</span> <span m='30610'>double</span> <span m='30910'>prime</span>
  <span m='31320'>plus</span> <span m='31650'>x</span> <span
  m='31940'>equals</span> <span m='32270'>0.</span> <span m='33220'>This</span>
  <span m='33410'>involves</span> <span m='33880'>a</span> <span
  m='33970'>second</span> <span m='34490'>order</span> <span
  m='34840'>derivative.</span> <span m='36270'>So</span> <span
  m='36420'>to</span> <span m='36480'>write</span> <span m='36790'>it</span>
  <span m='36930'>as</span> <span m='37070'>a</span> <span
  m='37140'>first</span> <span m='37560'>order</span> <span
  m='37850'>system,</span> <span m='39040'>we</span> <span
  m='39210'>introduced</span> <span m='39720'>the</span> <span
  m='39800'>vector</span> <span m='40370'>y.</span> <span m='42580'>This</span>
  <span m='42790'>is</span> <span m='42930'>a</span> <span
  m='42980'>vector</span> <span m='43500'>with</span> <span m='43750'>two</span>
  <span m='43960'>components,</span> <span m='44830'>x,</span> <span
  m='45740'>and</span> <span m='45980'>the</span> <span
  m='46060'>derivative</span> <span m='46720'>of</span> <span
  m='46870'>x.</span> </p><p><span m='47660'>We're</span> <span
  m='47880'>just</span> <span m='48160'>changing</span> <span
  m='48650'>notation</span> <span m='49960'>to</span> <span m='50170'>let</span>
  <span m='51710'>y</span> <span m='52830'>have</span> <span
  m='53320'>two</span> <span m='53540'>components,</span> <span
  m='54260'>x</span> <span m='54630'>and</span> <span m='54770'>x</span> <span
  m='55050'>prime.</span> <span m='56360'>Then</span> <span m='57130'>the</span>
  <span m='57280'>derivative</span> <span m='57970'>of</span> <span
  m='58090'>y</span> <span m='59100'>is</span> <span m='59310'>the</span> <span
  m='59400'>vector</span> <span m='60340'>with</span> <span m='60600'>x</span>
  <span m='61340'>and</span> <span m='61550'>x</span> <span
  m='61800'>double</span> <span m='62170'>prime.</span> <span
  m='63400'>So</span> <span m='64160'>the</span> <span
  m='64310'>differential</span> <span m='65000'>equation</span> <span
  m='65720'>now</span> <span m='66000'>becomes</span> <span m='66990'>y2</span>
  <span m='67990'>prime</span> <span m='68900'>plus</span> <span
  m='69150'>y1</span> <span m='69940'>equals</span> <span m='70300'>zero.</span>
  <span m='71750'>Do you</span> <span m='71910'>see</span> <span
  m='72120'>how</span> <span m='72350'>we've</span> <span m='72570'>just</span>
  <span m='72860'>rewritten</span> <span m='74020'>this</span> <span
  m='74300'>differential</span> <span m='74910'>equation.</span> <span
  m='76180'>so</span> <span m='77920'>y2</span> <span m='79930'>prime</span>
  <span m='81210'>is</span> <span m='82070'>playing</span> <span
  m='82470'>of</span> <span m='83690'>x</span> <span m='84140'>double</span>
  <span m='84530'>prime?</span> </p><p><span m='86750'>Once</span> <span
  m='87020'>you've</span> <span m='87190'>done</span> <span
  m='87430'>that,</span> <span m='88350'>everything</span> <span
  m='88760'>else</span> <span m='89040'>is</span> <span m='89200'>easy.</span>
  <span m='92290'>The</span> <span m='93410'>vector</span> <span
  m='93950'>system</span> <span m='95100'>is</span> <span m='95420'>now</span>
  <span m='96520'>y1,</span> <span m='97660'>y2</span> <span
  m='97940'>prime</span> <span m='98620'>is</span> <span m='98860'>y2</span>
  <span m='99910'>minus</span> <span m='100410'>y1.</span> <span
  m='101790'>The</span> <span m='101900'>first</span> <span
  m='102210'>components</span> <span m='102880'>says</span> <span
  m='103070'>y1</span> <span m='103760'>prime</span> <span m='104190'>is</span>
  <span m='104320'>y2.</span> <span m='105670'>That's</span> <span
  m='106000'>just</span> <span m='106260'>saying</span> <span
  m='106860'>that</span> <span m='107860'>the</span> <span
  m='108120'>derivative</span> <span m='108850'>of</span> <span
  m='108980'>the</span> <span m='109070'>first</span> <span
  m='109430'>component</span> <span m='109990'>is</span> <span
  m='110120'>the</span> <span m='110240'>second.</span> <span
  m='111580'>Here's</span> <span m='111940'>the</span> <span
  m='112060'>differential</span> <span m='112640'>equation</span> <span
  m='113160'>itself.</span> <span m='114070'>Y2</span> <span
  m='114760'>prime</span> <span m='115210'>is</span> <span
  m='115350'>minus</span> <span m='115870'>y1</span> <span m='117020'>is</span>
  <span m='117840'>the</span> <span m='118060'>actual</span> <span
  m='118870'>harmonic</span> <span m='119500'>oscillator</span> <span
  m='120300'>differential</span> <span m='120990'>equation.</span> </p><p><span
  m='124370'>When</span> <span m='124620'>we</span> <span
  m='124750'>write</span> <span m='125100'>this</span> <span
  m='125490'>as</span> <span m='125730'>an</span> <span
  m='125860'>autonomous</span> <span m='126480'>function</span> <span
  m='126990'>for</span> <span m='127170'>MATLAB,</span> <span
  m='128330'>here's</span> <span m='129280'>the</span> <span
  m='129430'>autonomous</span> <span m='130060'>function.</span> <span
  m='131130'>f</span> <span m='131780'>is</span> <span m='133060'>an</span>
  <span m='133170'>autonomous</span> <span m='133760'>function</span> <span
  m='134250'>of</span> <span m='134390'>t</span> <span m='134620'>and</span>
  <span m='134710'>y,</span> <span m='135040'>that</span> <span
  m='135370'>doesn't</span> <span m='135840'>depend</span> <span
  m='136210'>upon</span> <span m='136640'>t.</span> <span
  m='137800'>First</span> <span m='138430'>it's</span> <span m='138610'>a</span>
  <span m='138660'>vector</span> <span m='139320'>now,</span> <span
  m='140380'>a</span> <span m='140980'>column</span> <span
  m='141370'>vector.</span> <span m='142340'>The</span> <span
  m='142450'>first</span> <span m='142800'>component</span> <span
  m='143410'>of</span> <span m='143540'>f</span> <span m='143870'>is</span>
  <span m='144040'>y2.</span> <span m='145600'>And</span> <span
  m='146280'>the</span> <span m='146420'>second</span> <span
  m='146860'>component</span> <span m='147470'>is</span> <span
  m='148260'>-y1.</span> </p><p><span m='150390'>The</span> <span
  m='150500'>first</span> <span m='150830'>component</span> <span
  m='151360'>here</span> <span m='151660'>is</span> <span m='151740'>just</span>
  <span m='152060'>a</span> <span m='152100'>matter</span> <span
  m='152460'>of</span> <span m='152580'>notation.</span> <span
  m='154450'>All</span> <span m='154730'>the</span> <span
  m='154850'>content</span> <span m='155600'>is</span> <span
  m='155860'>in</span> <span m='156070'>the</span> <span
  m='156200'>second</span> <span m='156680'>component,</span> <span
  m='157730'>which</span> <span m='158020'>expresses</span> <span
  m='158750'>the</span> <span m='158880'>differential</span> <span
  m='159500'>equation.</span> </p><p><span m='163810'>Now</span> <span
  m='164010'>for</span> <span m='164190'>some</span> <span
  m='164370'>initial</span> <span m='164810'>conditions--</span> <span
  m='166120'>suppose</span> <span m='166650'>the</span> <span
  m='167050'>initial</span> <span m='167510'>conditions</span> <span
  m='168730'>are</span> <span m='168920'>that</span> <span m='169220'>x</span>
  <span m='169510'>of</span> <span m='169660'>0</span> <span
  m='170140'>is</span> <span m='170280'>0,</span> <span m='170600'>and</span>
  <span m='170920'>x</span> <span m='171310'>prime</span> <span
  m='171630'>of</span> <span m='171740'>0</span> <span m='172180'>is</span>
  <span m='172330'>1.</span> <span m='173990'>In</span> <span
  m='174230'>terms</span> <span m='174680'>of</span> <span m='174820'>the</span>
  <span m='174910'>vector</span> <span m='175400'>y,</span> <span
  m='176060'>that's</span> <span m='176300'>y1</span> <span m='177150'>of</span>
  <span m='177270'>0,</span> <span m='177940'>the</span> <span
  m='177980'>first</span> <span m='178340'>component</span> <span
  m='178890'>of</span> <span m='179410'>y</span> <span m='180070'>is</span>
  <span m='180420'>0.</span> <span m='181340'>And</span> <span
  m='181500'>the</span> <span m='181580'>second</span> <span
  m='182050'>component</span> <span m='182570'>is</span> <span
  m='182720'>1.</span> </p><p><span m='184230'>Or</span> <span
  m='184750'>in</span> <span m='184930'>vector</span> <span
  m='185440'>terms,</span> <span m='185980'>the</span> <span
  m='186110'>initial</span> <span m='186510'>vector</span> <span
  m='187130'>is</span> <span m='187470'>0,</span> <span m='187910'>1.</span>
  <span m='190140'>That</span> <span m='190320'>implies</span> <span
  m='190880'>they</span> <span m='191090'>solution</span> <span
  m='192350'>is</span> <span m='192970'>sine</span> <span m='193520'>t</span>
  <span m='193840'>and</span> <span m='194040'>cosine</span> <span
  m='194770'>t.</span> <span m='198130'>When</span> <span m='198330'>we</span>
  <span m='198460'>write</span> <span m='198760'>the</span> <span
  m='198870'>initial</span> <span m='199310'>condition</span> <span
  m='200390'>in</span> <span m='200830'>the</span> <span
  m='201200'>MATLAB,</span> <span m='202350'>it's</span> <span
  m='202630'>the</span> <span m='203000'>column</span> <span
  m='203440'>vector</span> <span m='204460'>0,</span> <span m='204990'>1.</span>
  </p><p><span m='207480'>Let's</span> <span m='207620'>bring</span> <span
  m='207910'>up</span> <span m='208080'>the</span> <span
  m='208170'>MATLAB</span> <span m='208740'>command</span> <span
  m='209230'>window.</span> <span m='209870'>Here's</span> <span
  m='210120'>the</span> <span m='210230'>differential</span> <span
  m='210830'>equation.</span> <span m='212050'>y1</span> <span
  m='212670'>prime</span> <span m='213100'>is</span> <span m='213240'>y2.</span>
  <span m='214700'>And</span> <span m='214900'>y2</span> <span
  m='215380'>prime</span> <span m='215780'>is</span> <span
  m='216320'>-y1.</span> <span m='217010'>Here's</span> <span
  m='217350'>the</span> <span m='217480'>harmonic</span> <span
  m='218100'>oscillator.</span> </p><p><span m='220120'>We're</span> <span
  m='220160'>going</span> <span m='220380'>to</span> <span
  m='220420'>integrate</span> <span m='221070'>from</span> <span
  m='221350'>0</span> <span m='221710'>to</span> <span m='221860'>2pi,</span>
  <span m='222350'>because</span> <span m='222880'>they're</span> <span
  m='223030'>trig</span> <span m='223860'>functions.</span> <span
  m='225230'>And</span> <span m='225360'>I'm</span> <span
  m='225510'>going</span> <span m='225550'>to ask</span> <span
  m='225980'>for</span> <span m='226360'>output</span> <span
  m='227140'>in</span> <span m='227590'>steps</span> <span m='228140'>of</span>
  <span m='228890'>2</span> <span m='229070'>pi</span> <span
  m='229390'>over</span> <span m='229690'>36,</span> <span
  m='231140'>which</span> <span m='231390'>corresponds</span> <span
  m='232070'>to</span> <span m='232330'>every</span> <span m='232750'>10</span>
  <span m='233100'>degrees</span> <span m='234440'>like</span> <span
  m='234750'>the</span> <span m='235550'>runways</span> <span
  m='236410'>at</span> <span m='236520'>an</span> <span
  m='236730'>airport.</span> </p><p><span m='238370'>I'm</span> <span
  m='238580'>going</span> <span m='238760'>to</span> <span
  m='239140'>need</span> <span m='239460'>an</span> <span
  m='239590'>initial</span> <span m='240090'>condition.</span> <span
  m='242410'>y0</span> <span m='242730'>not</span> <span m='243370'>is</span>
  <span m='245910'>0.</span> <span m='246680'>I</span> <span
  m='247040'>need</span> <span m='247400'>a</span> <span
  m='247540'>column</span> <span m='247940'>vector,</span> <span
  m='248990'>0,</span> <span m='249470'>1,</span> <span m='251280'>for</span>
  <span m='251510'>the</span> <span m='252350'>two</span> <span
  m='252580'>components.</span> <span m='255170'>I'm going to</span> <span
  m='255370'>use</span> <span m='255580'>ODE45,</span> <span
  m='257450'>and</span> <span m='257620'>if</span> <span m='257760'>I</span>
  <span m='257860'>call</span> <span m='258200'>it</span> <span
  m='258300'>with</span> <span m='258490'>no</span> <span
  m='258790'>output</span> <span m='259320'>arguments,</span> <span
  m='261399'>ODE45</span> <span m='262800'>of</span> <span m='263760'>the</span>
  <span m='263870'>differential</span> <span m='264430'>equation</span> <span
  m='265430'>f,</span> <span m='265876'>t</span> <span m='266770'>span</span>
  <span m='268230'>the</span> <span m='268930'>time</span> <span
  m='269340'>interval,</span> <span m='270270'>and</span> <span
  m='270650'>y0</span> <span m='271270'>the</span> <span
  m='271390'>initial</span> <span m='271820'>condition.</span> </p><p><span
  m='272970'>If</span> <span m='273100'>I</span> <span m='273180'>call</span>
  <span m='273570'>ODE45</span> <span m='275250'>with</span> <span
  m='275470'>no</span> <span m='275770'>output</span> <span
  m='276230'>arguments,</span> <span m='277100'>it</span> <span
  m='277490'>just</span> <span m='277870'>plots</span> <span
  m='278320'>the</span> <span m='278430'>solution</span> <span
  m='279120'>automatically.</span> <span m='280470'>And</span> <span
  m='280630'>here</span> <span m='280830'>we</span> <span m='280980'>get</span>
  <span m='281120'>a</span> <span m='281260'>graph</span> <span
  m='281840'>of</span> <span m='283310'>cosine</span> <span m='284020'>t</span>
  <span m='284380'>starting</span> <span m='284870'>at</span> <span
  m='285020'>1,</span> <span m='285970'>and</span> <span m='286230'>sine</span>
  <span m='286720'>t</span> <span m='287440'>starting</span> <span
  m='288050'>at</span> <span m='288200'>0.</span> </p><p><span
  m='290390'>Now</span> <span m='290580'>if</span> <span m='290700'>I</span>
  <span m='290770'>go</span> <span m='290980'>back</span> <span
  m='291350'>to</span> <span m='291570'>the</span> <span
  m='292330'>command</span> <span m='292790'>window,</span> <span
  m='293910'>and</span> <span m='294460'>ask</span> <span m='295070'>to</span>
  <span m='295290'>capture</span> <span m='295800'>the</span> <span
  m='296010'>output</span> <span m='297220'>in</span> <span m='297840'>t</span>
  <span m='298210'>and</span> <span m='298320'>y,</span> <span
  m='301400'>I</span> <span m='301640'>then</span> <span m='302060'>get</span>
  <span m='305540'>vectors</span> <span m='306150'>of</span> <span
  m='306270'>output.</span> <span m='308390'>37</span> <span
  m='309190'>steps,</span> <span m='310750'>vector</span> <span
  m='311260'>t,</span> <span m='312280'>and</span> <span m='313550'>two</span>
  <span m='314350'>components</span> <span m='315040'>y,</span> <span
  m='316630'>the</span> <span m='316750'>two</span> <span
  m='317050'>columns</span> <span m='318340'>containing</span> <span
  m='318900'>sine</span> <span m='319300'>and</span> <span
  m='319460'>cosine.</span> <span m='320790'>Now</span> <span
  m='321100'>I</span> <span m='321210'>can</span> <span m='321530'>plot</span>
  <span m='321970'>them</span> <span m='322170'>in</span> <span
  m='322290'>the</span> <span m='322390'>phase</span> <span
  m='322970'>plane.</span> </p><p><span m='324130'>Plot</span> <span
  m='325530'>ya</span> <span m='326330'>against</span> <span
  m='326800'>y2.</span> <span m='328610'>If</span> <span m='328900'>I</span>
  <span m='330010'>regularize</span> <span m='330860'>the</span> <span
  m='331180'>axes,</span> <span m='333500'>I</span> <span m='333640'>get</span>
  <span m='334090'>a</span> <span m='335010'>nice</span> <span
  m='335480'>plot</span> <span m='335820'>of</span> <span m='335950'>a</span>
  <span m='336010'>circle</span> <span m='337390'>with</span> <span
  m='338570'>small</span> <span m='339070'>circles</span> <span
  m='340730'>every</span> <span m='341630'>10</span> <span
  m='341920'>degrees,</span> <span m='343390'>as</span> <span
  m='343530'>I</span> <span m='343630'>said,</span> <span m='343970'>like</span>
  <span m='344300'>the</span> <span m='344770'>runways</span> <span
  m='345450'>at</span> <span m='345590'>an</span> <span
  m='345750'>airport.</span> </p><p><span m='348570'>The</span> <span
  m='349040'>Van der Pol</span> <span m='349810'>oscillator</span> <span
  m='350440'>was</span> <span m='350700'>introduced</span> <span
  m='351340'>in</span> <span m='351520'>1927</span> <span m='352660'>by</span>
  <span m='353490'>Dutch</span> <span m='353910'>electrical</span> <span
  m='354710'>engineer,</span> <span m='355370'>to</span> <span
  m='356180'>model</span> <span m='356640'>oscillations</span> <span
  m='357530'>in</span> <span m='357640'>a</span> <span m='357780'>circuit</span>
  <span m='360080'>involving</span> <span m='360840'>vacuum</span> <span
  m='361430'>tubes.</span> <span m='362730'>It</span> <span
  m='362950'>has</span> <span m='363300'>a</span> <span
  m='363920'>nonlinear</span> <span m='365630'>damping</span> <span
  m='366220'>term.</span> <span m='367620'>It's</span> <span
  m='367920'>since</span> <span m='368340'>been</span> <span
  m='369670'>used</span> <span m='370010'>to</span> <span
  m='370090'>model</span> <span m='370520'>phenomena</span> <span
  m='371200'>in</span> <span m='371330'>all</span> <span m='371530'>kinds</span>
  <span m='371860'>of</span> <span m='371970'>fields,</span> <span
  m='372530'>including</span> <span m='373470'>geology</span> <span
  m='374330'>and</span> <span m='374840'>neurology.</span> </p><p><span
  m='376740'>It</span> <span m='376860'>exhibits</span> <span
  m='377600'>chaotic</span> <span m='378270'>behavior.</span> <span
  m='380980'>We're</span> <span m='381140'>interested</span> <span m='381660'>in
  it</span> <span m='381780'>for</span> <span m='382190'>numerical</span> <span
  m='384050'>analysis</span> <span m='384790'>because,</span> <span
  m='385280'>as</span> <span m='386140'>the</span> <span
  m='386260'>parameter</span> <span m='386850'>mu</span> <span
  m='387330'>increases,</span> <span m='388860'>the</span> <span
  m='390400'>problem</span> <span m='390900'>becomes</span> <span
  m='391430'>increasingly</span> <span m='392080'>stiff.</span> <span
  m='394500'>To</span> <span m='394660'>write</span> <span m='394960'>it</span>
  <span m='395100'>as</span> <span m='395260'>a</span> <span
  m='395340'>first</span> <span m='395690'>order</span> <span
  m='395980'>system</span> <span m='396540'>for</span> <span
  m='396710'>use</span> <span m='397100'>with</span> <span m='397380'>the</span>
  <span m='398300'>MATLAB</span> <span m='399790'>ODE</span> <span
  m='400280'>solvers,</span> <span m='400950'>we</span> <span
  m='401120'>introduce</span> <span m='401600'>the</span> <span
  m='401680'>vector</span> <span m='402120'>y,</span> <span
  m='402840'>containing</span> <span m='403570'>x</span> <span
  m='404650'>and</span> <span m='405110'>x</span> <span m='405410'>prime.</span>
  </p><p><span m='406890'>So</span> <span m='407080'>y</span> <span
  m='407500'>prime</span> <span m='408170'>is</span> <span m='408650'>x</span>
  <span m='408980'>prime</span> <span m='409610'>and</span> <span
  m='410730'>x</span> <span m='411040'>double</span> <span
  m='411350'>prime.</span> <span m='412460'>And</span> <span
  m='412660'>then</span> <span m='412890'>the</span> <span
  m='413010'>differential</span> <span m='413660'>equation</span> <span
  m='414360'>is</span> <span m='414530'>written</span> <span
  m='415310'>so</span> <span m='415480'>that</span> <span m='415580'>the</span>
  <span m='418120'>first</span> <span m='418500'>component</span> <span
  m='418970'>of</span> <span m='419080'>y</span> <span m='419340'>prime</span>
  <span m='419850'>is</span> <span m='420730'>y2.</span> <span
  m='422850'>And</span> <span m='423120'>then</span> <span m='423390'>the</span>
  <span m='424190'>differential</span> <span m='424760'>equation</span> <span
  m='425960'>is</span> <span m='426290'>written</span> <span
  m='426890'>in</span> <span m='427130'>the</span> <span
  m='427240'>second</span> <span m='427700'>component</span> <span
  m='428300'>of</span> <span m='428450'>y.</span> </p><p><span
  m='430540'>Here's</span> <span m='430820'>the</span> <span
  m='431670'>nonlinear</span> <span m='432240'>damping</span> <span
  m='432770'>term</span> <span m='433550'>minus</span> <span
  m='434340'>y1.</span> <span m='435730'>When</span> <span m='435910'>mu</span>
  <span m='436290'>is 0,</span> <span m='437770'>this</span> <span
  m='438230'>becomes</span> <span m='439880'>the</span> <span
  m='440150'>harmonic</span> <span m='440760'>oscillator.</span> <span
  m='442350'>And</span> <span m='443080'>here</span> <span m='443370'>it</span>
  <span m='443430'>is</span> <span m='443720'>as</span> <span
  m='444010'>the</span> <span m='445710'>anonymous</span> <span
  m='446390'>function.</span> </p><p><span m='452080'>Let's</span> <span
  m='452320'>run</span> <span m='452550'>some</span> <span
  m='452750'>experiments</span> <span m='453420'>with</span> <span
  m='453630'>the</span> <span m='454010'>Van der</span> <span
  m='454440'>Pol</span> <span m='454740'>oscillator.</span> <span
  m='456160'>First</span> <span m='456490'>of</span> <span
  m='456560'>all,</span> <span m='456750'>I</span> <span m='456810'>have</span>
  <span m='457100'>to</span> <span m='457290'>define</span> <span
  m='458050'>the</span> <span m='459110'>value</span> <span m='459510'>of</span>
  <span m='459620'>mu.</span> <span m='459850'>And</span> <span
  m='460130'>I'll</span> <span m='460360'>pick</span> <span m='460530'>a</span>
  <span m='460600'>modest</span> <span m='461030'>value</span> <span
  m='461430'>of</span> <span m='461520'>mu.</span> <span m='461860'>Mu</span>
  <span m='462100'>equals</span> <span m='462440'>100.</span> <span
  m='463770'>And</span> <span m='464120'>now</span> <span m='464390'>with</span>
  <span m='464620'>mu</span> <span m='464830'>set,</span> <span
  m='465380'>I</span> <span m='465480'>can</span> <span m='465780'>define</span>
  <span m='466410'>the</span> <span m='467400'>anonymous</span> <span
  m='468020'>function.</span> </p><p><span m='469860'>It</span> <span
  m='469980'>involves</span> <span m='470510'>a</span> <span
  m='470560'>value</span> <span m='470960'>of</span> <span m='471170'>mu.</span>
  <span m='472100'>And</span> <span m='473720'>here</span> <span
  m='474140'>is</span> <span m='474370'>the</span> <span m='475290'>Van der
  Pol</span> <span m='476000'>equation</span> <span m='476690'>in</span> <span
  m='476830'>the</span> <span m='476950'>second</span> <span
  m='477410'>component</span> <span m='477980'>of</span> <span
  m='478120'>f.</span> <span m='479820'>I'm</span> <span m='480100'>going</span>
  <span m='480270'>to</span> <span m='480390'>gather</span> <span
  m='480860'>statistics</span> <span m='481830'>about</span> <span
  m='482220'>how</span> <span m='482540'>hard</span> <span m='483670'>the</span>
  <span m='483810'>ODE</span> <span m='484350'>solver</span> <span
  m='484890'>works.</span> <span m='486270'>And</span> <span
  m='486520'>for</span> <span m='486640'>that,</span> <span
  m='486950'>I'm</span> <span m='487070'>going</span> <span m='487230'>to</span>
  <span m='487280'>use</span> <span m='487560'>ODE</span> <span
  m='488190'>set,</span> <span m='489210'>and</span> <span
  m='489480'>tell</span> <span m='489740'>it</span> <span m='489860'>I</span>
  <span m='489890'>want</span> <span m='490160'>to</span> <span
  m='490320'>turn</span> <span m='490680'>on</span> <span
  m='491450'>stats.</span> </p><p><span m='496760'>I</span> <span
  m='496880'>need</span> <span m='497190'>an</span> <span
  m='497340'>initial</span> <span m='497800'>condition.</span> <span
  m='503970'>Now</span> <span m='504150'>I'm</span> <span
  m='504260'>going</span> <span m='504400'>to</span> <span m='504480'>run</span>
  <span m='504940'>ODE45</span> <span m='506310'>on</span> <span
  m='506420'>this</span> <span m='506680'>problem.</span> <span
  m='508030'>And</span> <span m='508430'>I'm</span> <span
  m='510170'>specifying</span> <span m='510970'>just</span> <span
  m='511310'>a</span> <span m='511370'>starting</span> <span
  m='511870'>value</span> <span m='512250'>of</span> <span m='512400'>t,</span>
  <span m='512740'>and</span> <span m='512890'>a</span> <span
  m='513020'>final</span> <span m='513450'>value</span> <span
  m='513830'>of</span> <span m='513970'>t.</span> <span m='515990'>ODE45</span>
  <span m='517210'>is</span> <span m='517330'>going</span> <span
  m='517500'>to</span> <span m='517580'>pick</span> <span m='517840'>its</span>
  <span m='518000'>own</span> <span m='520090'>time</span> <span
  m='520390'>steps.</span> <span m='521490'>And</span> <span m='521710'>I</span>
  <span m='521780'>know</span> <span m='522090'>with</span> <span
  m='523340'>t</span> <span m='523720'>final</span> <span
  m='524230'>equals</span> <span m='525080'>460,</span> <span
  m='527280'>it's</span> <span m='527540'>going</span> <span
  m='527710'>to</span> <span m='527760'>integrate</span> <span
  m='528400'>over</span> <span m='529960'>it</span> <span
  m='531020'>about</span> <span m='531410'>two</span> <span
  m='531570'>periods</span> <span m='532210'>of</span> <span
  m='532310'>the</span> <span m='532420'>solution.</span> </p><p><span
  m='536450'>Now</span> <span m='536640'>we</span> <span m='536780'>can</span>
  <span m='537660'>watch</span> <span m='538110'>it</span> <span
  m='539440'>go</span> <span m='539730'>for</span> <span m='539940'>a</span>
  <span m='539990'>while.</span> <span m='541890'>It's</span> <span
  m='542100'>taking</span> <span m='542390'>lots</span> <span
  m='542710'>of</span> <span m='542790'>steps.</span> <span
  m='544380'>And</span> <span m='544770'>it's</span> <span
  m='545040'>beginning</span> <span m='545480'>to</span> <span
  m='545570'>slow</span> <span m='545930'>down</span> <span m='546620'>as</span>
  <span m='546830'>it</span> <span m='547030'>takes</span> <span
  m='547310'>more</span> <span m='547600'>and</span> <span
  m='547660'>more</span> <span m='547890'>steps.</span> <span
  m='556440'>Now</span> <span m='556680'>this</span> <span
  m='556950'>begins</span> <span m='557370'>to</span> <span
  m='557470'>get</span> <span m='557970'>painfully</span> <span
  m='558550'>slow</span> <span m='559150'>as</span> <span m='559350'>it</span>
  <span m='559620'>runs</span> <span m='559980'>into</span> <span
  m='560640'>stiffness.</span> </p><p><span m='565660'>I'll</span> <span
  m='566150'>turn</span> <span m='566390'>off</span> <span m='566640'>the</span>
  <span m='566730'>camera</span> <span m='567210'>for</span> <span
  m='567340'>a</span> <span m='567440'>while</span> <span
  m='567770'>here,</span> <span m='567970'>so</span> <span m='568220'>you</span>
  <span m='568360'>don't</span> <span m='568580'>have</span> <span
  m='568750'>to</span> <span m='568860'>watch</span> <span m='569240'>all</span>
  <span m='569410'>these</span> <span m='569640'>steps.</span> <span
  m='575130'>We're</span> <span m='575300'>trying</span> <span
  m='575530'>to</span> <span m='575580'>get</span> <span m='575750'>up</span>
  <span m='575910'>here</span> <span m='576070'>to</span> <span
  m='576180'>460.</span> <span m='578140'>And</span> <span
  m='578290'>I'll</span> <span m='578520'>turn</span> <span m='578720'>it</span>
  <span m='578850'>back</span> <span m='579150'>on</span> <span
  m='579400'>as</span> <span m='579570'>we</span> <span m='579730'>get</span>
  <span m='580050'>close</span> <span m='582370'>to</span> <span
  m='582460'>the</span> <span m='582610'>end.</span> </p><p><span
  m='607620'>OK,</span> <span m='608080'>well,</span> <span
  m='608790'>the</span> <span m='608870'>camera's</span> <span
  m='609330'>been</span> <span m='609500'>off</span> <span
  m='609790'>about</span> <span m='610120'>three</span> <span
  m='610390'>minutes.</span> <span m='610980'>And</span> <span
  m='611080'>you</span> <span m='611140'>can</span> <span m='611310'>see</span>
  <span m='611570'>how</span> <span m='611740'>far</span> <span
  m='612060'>we've</span> <span m='612270'>gotten.</span> <span
  m='613920'>We're</span> <span m='614710'>nowhere</span> <span
  m='615270'>near</span> <span m='615480'>the</span> <span
  m='615680'>end.</span> <span m='616050'>So</span> <span m='617010'>I'm</span>
  <span m='617230'>going</span> <span m='617360'>to</span> <span
  m='617440'>press</span> <span m='617810'>the</span> <span
  m='617910'>stop</span> <span m='618310'>button</span> <span
  m='618630'>here.</span> <span m='620450'>And</span> <span
  m='623870'>we'll</span> <span m='624150'>go</span> <span
  m='624320'>back</span> <span m='624660'>to</span> <span m='624790'>the</span>
  <span m='627480'>command</span> <span m='627930'>window.</span> </p><p><span
  m='629660'>And</span> <span m='630270'>oh,</span> <span m='631040'>so</span>
  <span m='631530'>we</span> <span m='633890'>didn't</span> <span
  m='634160'>get</span> <span m='634380'>to</span> <span m='634460'>the</span>
  <span m='634660'>end</span> <span m='634950'>here.</span> <span
  m='638320'>Let</span> <span m='638440'>me</span> <span m='638580'>back</span>
  <span m='638960'>off</span> <span m='639330'>on</span> <span
  m='639540'>the</span> <span m='640480'>time</span> <span
  m='640860'>interval</span> <span m='642166'>and</span> <span
  m='644060'>try</span> <span m='644360'>this</span> <span
  m='644610'>value</span> <span m='645040'>here.</span> <span
  m='647350'>See</span> <span m='647450'>how</span> <span m='647570'>that</span>
  <span m='647760'>works.</span> <span m='653320'>So</span> <span
  m='653510'>this</span> <span m='653740'>is</span> <span
  m='653870'>going</span> <span m='654020'>to</span> <span
  m='654120'>still</span> <span m='654410'>take</span> <span
  m='654640'>lots</span> <span m='654940'>of</span> <span
  m='655010'>steps.</span> </p><p><span m='656650'>But</span> <span
  m='656810'>we'll</span> <span m='657060'>be</span> <span
  m='657290'>able</span> <span m='657550'>to--</span> <span
  m='660720'>This</span> <span m='660920'>will</span> <span m='661050'>go</span>
  <span m='661230'>over</span> <span m='661600'>about</span> <span
  m='661800'>one</span> <span m='662090'>period.</span> <span
  m='664810'>We'll</span> <span m='665050'>actually</span> <span
  m='665400'>get</span> <span m='666420'>to</span> <span m='666490'>the</span>
  <span m='666670'>end</span> <span m='666970'>here.</span> </p><p><span
  m='684020'>I'll</span> <span m='684250'>leave</span> <span
  m='684460'>the</span> <span m='684590'>camera</span> <span
  m='685010'>on</span> <span m='685340'>until</span> <span m='685490'>we</span>
  <span m='686470'>finish.</span> <span m='704480'>OK</span> <span
  m='704790'>so</span> <span m='704970'>that</span> <span m='705240'>took</span>
  <span m='705550'>a</span> <span m='705860'>little</span> <span
  m='706180'>under</span> <span m='706440'>a</span> <span
  m='706500'>minute.</span> <span m='707780'>And</span> <span
  m='707940'>it</span> <span m='708000'>took</span> <span
  m='709500'>nearly</span> <span m='709820'>15,000</span> <span
  m='710770'>steps.</span> <span m='712390'>So</span> <span
  m='712970'>let's</span> <span m='713240'>run</span> <span m='713440'>it</span>
  <span m='713600'>with</span> <span m='713690'>a</span> <span
  m='713790'>stiff</span> <span m='714100'>solver.</span> </p><p><span
  m='724150'>There.</span> <span m='726550'>So</span> <span m='726810'>it</span>
  <span m='726940'>took</span> <span m='727880'>half</span> <span
  m='728200'>a</span> <span m='728280'>second,</span> <span
  m='729430'>and</span> <span m='729570'>only</span> <span m='729850'>500</span>
  <span m='730410'>steps.</span> <span m='731670'>So</span> <span
  m='732730'>there's</span> <span m='733190'>a</span> <span
  m='733930'>modest</span> <span m='736160'>example</span> <span
  m='736670'>of</span> <span m='736750'>stiffness</span> <span
  m='737390'>here.</span> <span m='738800'>So</span> <span
  m='740290'>let's</span> <span m='740580'>examine</span> <span
  m='741070'>the</span> <span m='743530'>Van der</span> <span
  m='743900'>Pol</span> <span m='744130'>equation</span> <span
  m='745420'>using</span> <span m='747020'>the</span> <span
  m='747130'>stiff</span> <span m='747440'>solver.</span> <span
  m='748520'>Let's</span> <span m='748830'>capture</span> <span
  m='749320'>the</span> <span m='749490'>output</span> <span
  m='749970'>and</span> <span m='750160'>plot</span> <span m='750545'>it.</span>
  </p><p><span m='750930'>Because</span> <span m='751140'>that</span> <span
  m='751400'>plot</span> <span m='751710'>wasn't</span> <span
  m='752030'>very</span> <span m='752320'>interesting.</span> <span
  m='753890'>I</span> <span m='753950'>want</span> <span m='754160'>to</span>
  <span m='754230'>plot</span> <span m='754700'>it a</span> <span
  m='754770'>couple of</span> <span m='755110'>different</span> <span
  m='755410'>ways.</span> <span m='756780'>And</span> <span
  m='757000'>again,</span> <span m='757330'>I</span> <span
  m='757360'>want</span> <span m='757610'>to</span> <span m='757670'>go</span>
  <span m='757800'>back</span> <span m='758130'>up</span> <span
  m='758340'>to</span> <span m='758480'>the--</span> <span
  m='762500'>capture</span> <span m='762600'>a</span> <span
  m='762970'>couple</span> <span m='763280'>periods.</span> </p><p><span
  m='771130'>Let's</span> <span m='771550'>plot</span> <span
  m='771980'>one</span> <span m='772190'>of</span> <span m='772280'>the</span>
  <span m='772390'>current</span> <span m='772820'>components</span> <span
  m='773450'>as</span> <span m='773590'>a</span> <span
  m='773660'>function</span> <span m='774130'>of</span> <span
  m='774250'>time.</span> <span m='777380'>And</span> <span
  m='777510'>here</span> <span m='777840'>it is.</span> <span
  m='778130'>Here's</span> <span m='778430'>the</span> <span m='778510'>Van der
  Pol</span> <span m='779110'>equation.</span> </p><p><span
  m='780410'>And</span> <span m='780420'>you</span> <span m='780560'>can</span>
  <span m='780720'>see</span> <span m='781350'>it</span> <span
  m='781500'>has</span> <span m='781780'>an</span> <span
  m='781910'>initial</span> <span m='782400'>transient,</span> <span
  m='783840'>and</span> <span m='784090'>then</span> <span m='785180'>it</span>
  <span m='785340'>settles</span> <span m='785770'>into</span> <span
  m='786010'>this</span> <span m='788140'>periodic</span> <span
  m='788950'>oscillation</span> <span m='790770'>with</span> <span
  m='791130'>these</span> <span m='793220'>really</span> <span
  m='793600'>steep</span> <span m='799010'>spikes</span> <span
  m='799620'>here.</span> <span m='800400'>And</span> <span
  m='801360'>even</span> <span m='801690'>this</span> <span
  m='802460'>stiff</span> <span m='802820'>solver</span> <span
  m='803810'>is</span> <span m='804040'>working</span> <span
  m='804440'>hard</span> <span m='806960'>at</span> <span
  m='807440'>these</span> <span m='807660'>rapid</span> <span
  m='808100'>changes.</span> <span m='808610'>We've</span> <span
  m='808780'>got</span> <span m='809770'>a</span> <span m='809830'>fair</span>
  <span m='810100'>number</span> <span m='810400'>of</span> <span
  m='810480'>points</span> <span m='810960'>in</span> <span
  m='811100'>here,</span> <span m='811920'>as</span> <span m='812160'>it</span>
  <span m='812500'>is</span> <span m='812730'>it</span> <span
  m='812880'>chooses</span> <span m='813350'>the</span> <span
  m='813470'>step</span> <span m='813780'>size.</span> </p><p><span
  m='815720'>And</span> <span m='816150'>now,</span> <span
  m='816370'>let's</span> <span m='816720'>go</span> <span
  m='816910'>back</span> <span m='817950'>to</span> <span m='818140'>the</span>
  <span m='818320'>command</span> <span m='818800'>line</span> <span
  m='822550'>and</span> <span m='823230'>do</span> <span m='823530'>a</span>
  <span m='826210'>phase</span> <span m='826570'>plane</span> <span
  m='827036'>plot.</span> <span m='831230'>So</span> <span
  m='831510'>here's</span> <span m='831770'>the</span> <span
  m='831860'>phase</span> <span m='832220'>plane</span> <span
  m='832510'>plot</span> <span m='832840'>of</span> <span m='832950'>this</span>
  <span m='835020'>oscillator</span> <span m='835650'>with</span> <span
  m='835810'>damping.</span> <span m='836750'>And</span> <span
  m='836990'>it's</span> <span m='837190'>nowhere</span> <span
  m='837620'>near</span> <span m='837840'>a</span> <span
  m='837900'>circle,</span> <span m='840020'>which</span> <span
  m='840220'>it</span> <span m='840300'>would</span> <span m='840560'>be</span>
  <span m='840870'>if mu was</span> <span m='841150'>0.</span> </p><p><span
  m='842840'>And</span> <span m='843130'>this</span> <span m='843390'>is</span>
  <span m='843590'>the</span> <span m='843730'>characteristic</span> <span
  m='844660'>behavior</span> <span m='845440'>of</span> <span
  m='845830'>the</span> <span m='848746'>Van der</span> <span
  m='849100'>Pol</span> <span m='849390'>oscillator.</span> </p>
uid: 1b670bd42cb09649d26c3646caebcb5e
type: course
layout: video
---
