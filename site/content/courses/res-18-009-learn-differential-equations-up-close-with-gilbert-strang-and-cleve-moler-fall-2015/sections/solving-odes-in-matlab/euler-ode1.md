---
about_this_resource_text: >-
  <p><strong>Descriptions: </strong>ODE1 implements Euler's method. It provides
  an introduction to numerical methods for ODEs and to the
  MATLAB<sup>&reg;</sup> suite of ODE solvers. Exponential growth and compound
  interest are used as examples.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: aW-e04zwTnc
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Video-YouTube-Stream
    type: Video
    uid: 3e4eeef280cf1de8dea687fd97ba5a54
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/aW-e04zwTnc/default.jpg'
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 346b04d134a652399df9b19cb4cda828
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: aW-e04zwTnc
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a76c8d3103d9cc2ce466fea7f6b3d0b0
  - id: aW-e04zwTnc.srt
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/euler-ode1/aW-e04zwTnc.srt
    title: 3play caption file
    type: null
    uid: b6a647ca83453945f66a7b8bcf274dc3
  - id: aW-e04zwTnc.pdf
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/euler-ode1/aW-e04zwTnc.pdf
    title: 3play pdf file
    type: null
    uid: 61d72ceeb28264cb655b6b7711fa6936
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8cc35dc03f5732720c7206f6a4245383
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2c12b7a05b9f5bbb7a4fd80dd17dc6a4
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Video-iTunes U-MP4
    type: Video
    uid: 4167ad75fecbd8d055338dd56d817d4b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_01_300k.mp4
    parent_uid: 26ac4621ab8d05919736377a8c52d0f7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5b453501392a3f5072a2de270e5a8bdc
inline_embed_id: '61899418euler,ode173623886'
order_index: 574
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: euler-ode1
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/euler-ode1
title: 'Euler, ODE1'
transcript: >-
  <p><span m='3980'>CLEVE MOLER: Hello.</span> <span m='5740'>I'm</span> <span
  m='5980'>Cleve</span> <span m='6320'>Moler,</span> <span m='7910'>one</span>
  <span m='8090'>of</span> <span m='8180'>the</span> <span
  m='8250'>founders</span> <span m='8970'>and</span> <span m='9200'>chief</span>
  <span m='9430'>mathematician</span> <span m='10340'>at</span> <span
  m='10460'>the</span> <span m='10530'>MathWorks.</span> <span
  m='12800'>This</span> <span m='13050'>series</span> <span m='13400'>of</span>
  <span m='13490'>videos</span> <span m='14090'>is</span> <span
  m='14240'>about</span> <span m='14630'>solving</span> <span
  m='15120'>ordinary</span> <span m='15600'>differential</span> <span
  m='16100'>equations</span> <span m='16700'>in</span> <span
  m='16820'>MATLAB.</span> <span m='19530'>We</span> <span m='19710'>can</span>
  <span m='19860'>begin</span> <span m='20320'>by</span> <span
  m='20580'>recalling</span> <span m='21140'>the</span> <span
  m='21260'>definition</span> <span m='21910'>of</span> <span
  m='22080'>derivative.</span> </p><p><span m='23440'>The</span> <span
  m='23580'>derivative</span> <span m='24150'>of</span> <span m='24230'>a</span>
  <span m='24410'>function</span> <span m='25030'>at</span> <span
  m='25130'>a</span> <span m='25240'>point</span> <span m='26010'>is</span>
  <span m='26230'>the</span> <span m='26340'>slope</span> <span
  m='27290'>of</span> <span m='27450'>the</span> <span m='27620'>tangent</span>
  <span m='28170'>line</span> <span m='29400'>to</span> <span
  m='29690'>the</span> <span m='30210'>graph</span> <span m='31620'>of</span>
  <span m='31720'>the</span> <span m='31790'>function</span> <span
  m='32930'>at</span> <span m='33210'>that</span> <span m='33550'>point.</span>
  <span m='36380'>Our</span> <span m='36550'>numerical</span> <span
  m='37130'>approximations</span> <span m='38920'>will</span> <span
  m='39150'>rely</span> <span m='39580'>upon</span> <span m='40080'>the</span>
  <span m='40360'>slope</span> <span m='40850'>of</span> <span
  m='40980'>the</span> <span m='41090'>secant</span> <span m='42550'>to</span>
  <span m='42700'>the</span> <span m='43820'>graph.</span> <span
  m='44910'>That's</span> <span m='45320'>a</span> <span m='45820'>line</span>
  <span m='46810'>through</span> <span m='47270'>two</span> <span
  m='47530'>points</span> <span m='48520'>separated</span> <span
  m='49420'>by</span> <span m='49690'>a</span> <span m='49810'>distance</span>
  <span m='50570'>h.</span> </p><p><span m='51980'>We'll</span> <span
  m='52170'>have</span> <span m='52340'>a</span> <span m='52390'>lot</span>
  <span m='52690'>to</span> <span m='52800'>say</span> <span
  m='53140'>about</span> <span m='54380'>the</span> <span m='54760'>step</span>
  <span m='55100'>size</span> <span m='55520'>h</span> <span m='55970'>as</span>
  <span m='56100'>we</span> <span m='56240'>go</span> <span
  m='56390'>along.</span> <span m='57700'>What's</span> <span
  m='57930'>important</span> <span m='58550'>to</span> <span
  m='59150'>realize</span> <span m='60520'>is</span> <span m='60880'>that</span>
  <span m='61540'>as</span> <span m='62170'>h</span> <span m='62510'>goes</span>
  <span m='62790'>to</span> <span m='62890'>0,</span> <span m='63990'>the</span>
  <span m='64340'>slope</span> <span m='64900'>of</span> <span
  m='65110'>the</span> <span m='65269'>secant</span> <span
  m='66320'>approaches</span> <span m='66950'>the</span> <span
  m='67070'>slope</span> <span m='67450'>of</span> <span
  m='67670'>tangent.</span> <span m='71810'>The</span> <span
  m='72090'>wiggly</span> <span m='72450'>equals</span> <span
  m='72800'>sign</span> <span m='73210'>means</span> <span
  m='73590'>approximately</span> <span m='74450'>equal</span> <span
  m='74860'>to.</span> </p><p><span m='76910'>T0</span> <span m='77800'>is the
  point</span> <span m='78360'>where</span> <span m='78590'>we</span> <span
  m='78880'>are</span> <span m='79070'>finding</span> <span m='79560'>the</span>
  <span m='79680'>approximation.</span> <span m='82030'>The</span> <span
  m='82170'>value</span> <span m='82670'>of</span> <span m='82800'>the</span>
  <span m='82970'>derivative</span> <span m='83930'>at</span> <span
  m='84260'>t0</span> <span m='86170'>is</span> <span
  m='86640'>approximately</span> <span m='87550'>equal</span> <span
  m='88030'>to</span> <span m='89150'>the</span> <span m='89500'>slope</span>
  <span m='89940'>of</span> <span m='90020'>the</span> <span
  m='90150'>secant.</span> <span m='91710'>The</span> <span
  m='91820'>slope</span> <span m='92190'>of</span> <span m='92280'>the</span>
  <span m='92390'>secant</span> <span m='93130'>is</span> <span
  m='93440'>the</span> <span m='93580'>change</span> <span m='94010'>in</span>
  <span m='94100'>the</span> <span m='94210'>y</span> <span
  m='94560'>value</span> <span m='95250'>over</span> <span m='95550'>the</span>
  <span m='95690'>change</span> <span m='96140'>in</span> <span
  m='96230'>the</span> <span m='96400'>t value.</span> <span
  m='97840'>The</span> <span m='97940'>change</span> <span m='98350'>in</span>
  <span m='98520'>y</span> <span m='98830'>value</span> <span
  m='99350'>is</span> <span m='99500'>the</span> <span
  m='99600'>difference</span> <span m='100100'>between</span> <span
  m='101320'>the</span> <span m='101490'>two</span> <span
  m='101670'>values</span> <span m='102170'>of</span> <span m='102290'>y.</span>
  </p><p><span m='104470'>The</span> <span m='104610'>change</span> <span
  m='105010'>in</span> <span m='105090'>the t</span> <span
  m='105190'>value</span> <span m='105970'>is</span> <span m='106150'>the</span>
  <span m='106280'>step</span> <span m='106590'>size</span> <span
  m='107070'>h.</span> <span m='108690'>If</span> <span m='108880'>we</span>
  <span m='109040'>rewrite</span> <span m='109770'>this,</span> <span
  m='110160'>we</span> <span m='110220'>get</span> <span m='110440'>the</span>
  <span m='110500'>value</span> <span m='111020'>of</span> <span
  m='111210'>y</span> <span m='111820'>at</span> <span m='112090'>the</span>
  <span m='112280'>point</span> <span m='113090'>t0</span> <span m='113250'>plus
  h</span> <span m='115150'>is</span> <span m='115470'>approximately</span>
  <span m='116200'>equal</span> <span m='116490'>to</span> <span
  m='116540'>the</span> <span m='116630'>value</span> <span m='116930'>of</span>
  <span m='117030'>y</span> <span m='117440'>at</span> <span
  m='117590'>t0</span> <span m='118940'>plus</span> <span m='119570'>h</span>
  <span m='119990'>times</span> <span m='121020'>the</span> <span
  m='121120'>value</span> <span m='121630'>of</span> <span m='122010'>y</span>
  <span m='122340'>prime</span> <span m='122650'>at</span> <span
  m='123100'>t0.</span> <span m='125030'>This</span> <span m='125260'>is</span>
  <span m='125410'>the</span> <span m='125520'>basis</span> <span
  m='126130'>for</span> <span m='127150'>our</span> <span
  m='127340'>first</span> <span m='127760'>numerical</span> <span
  m='128310'>method,</span> <span m='129270'>Euler's</span> <span
  m='129690'>method.</span> </p><p><span m='133960'>Leonhard</span> <span
  m='134340'>Euler</span> <span m='134750'>was</span> <span m='135050'>a</span>
  <span m='136330'>18th</span> <span m='136830'>century</span> <span
  m='137350'>Swiss</span> <span m='137770'>mathematician.</span> <span
  m='139670'>Probably</span> <span m='140060'>the</span> <span
  m='140190'>most</span> <span m='140630'>influential</span> <span
  m='142350'>mathematician</span> <span m='143062'>of his</span> <span
  m='143740'>era.</span> <span m='145500'>He</span> <span m='145650'>made</span>
  <span m='146370'>important</span> <span m='146840'>contributions</span> <span
  m='147790'>to</span> <span m='147880'>a</span> <span m='148150'>wide</span>
  <span m='148740'>range</span> <span m='149130'>of</span> <span
  m='149280'>fields</span> <span m='149840'>of</span> <span
  m='150940'>mathematics,</span> <span m='151990'>physics,</span> <span
  m='152530'>and</span> <span m='152590'>astronomy.</span> <span
  m='154710'>He</span> <span m='155020'>invented</span> <span
  m='155540'>the</span> <span m='155760'>notion</span> <span
  m='156330'>of</span> <span m='156430'>a</span> <span
  m='156490'>function,</span> <span m='157160'>for</span> <span
  m='157360'>example.</span> </p><p><span m='161190'>The</span> <span
  m='161280'>differential</span> <span m='161850'>equation</span> <span
  m='162520'>is</span> <span m='163360'>given</span> <span m='163750'>by</span>
  <span m='164000'>this</span> <span m='164300'>function</span> <span
  m='164700'>f</span> <span m='165660'>of</span> <span m='165870'>two</span>
  <span m='166030'>variables</span> <span m='166700'>t</span> <span
  m='166970'>and</span> <span m='167070'>y.</span> <span m='168300'>And</span>
  <span m='168450'>the</span> <span m='168590'>task</span> <span
  m='169100'>in</span> <span m='169250'>general</span> <span
  m='169730'>is</span> <span m='169930'>to</span> <span m='170630'>find</span>
  <span m='171150'>the</span> <span m='171240'>function</span> <span
  m='171770'>y</span> <span m='172960'>whose</span> <span
  m='173460'>derivative</span> <span m='174030'>is</span> <span
  m='174170'>equal</span> <span m='174460'>to</span> <span m='174570'>f.</span>
  <span m='176070'>Now,</span> <span m='176860'>there's</span> <span
  m='177090'>lots</span> <span m='177380'>of</span> <span
  m='177470'>functions</span> <span m='177920'>y</span> <span
  m='178250'>whose</span> <span m='178770'>derivative</span> <span
  m='179250'>is</span> <span m='179350'>equal</span> <span m='179650'>to</span>
  <span m='179720'>f.</span> <span m='180570'>And</span> <span
  m='180780'>so</span> <span m='181840'>there's</span> <span
  m='182310'>an</span> <span m='183195'>initial</span> <span
  m='184190'>condition,</span> <span m='185590'>a</span> <span
  m='185860'>point</span> <span m='186600'>t naught</span> <span
  m='187110'>or</span> <span m='187370'>t0,</span> <span m='188750'>and</span>
  <span m='189580'>a</span> <span m='189690'>value</span> <span
  m='190150'>y0.</span> <span m='191660'>And</span> <span m='192320'>the</span>
  <span m='193280'>initial</span> <span m='193760'>condition</span> <span
  m='194810'>is</span> <span m='195110'>that</span> <span m='195320'>y</span>
  <span m='195800'>at</span> <span m='196100'>t0</span> <span
  m='197160'>should</span> <span m='197420'>be</span> <span
  m='197560'>equal</span> <span m='197860'>to</span> <span m='197940'>y0.</span>
  </p><p><span m='199580'>Here's</span> <span m='199860'>some</span> <span
  m='200040'>examples.</span> <span m='202220'>The</span> <span
  m='203330'>compound</span> <span m='204070'>interest</span> <span
  m='204580'>problem</span> <span m='208050'>is</span> <span
  m='208340'>just</span> <span m='208680'>the</span> <span
  m='208880'>interest</span> <span m='209350'>rate</span> <span
  m='209740'>times</span> <span m='210090'>y.</span> <span
  m='211380'>Here,</span> <span m='211720'>the</span> <span
  m='211890'>function</span> <span m='212440'>of t</span> <span
  m='212530'>and</span> <span m='212970'>y</span> <span
  m='213320'>doesn't</span> <span m='213690'>actually</span> <span
  m='214110'>depend</span> <span m='214460'>upon</span> <span
  m='214840'>t.</span> <span m='215800'>And</span> <span m='215990'>it's</span>
  <span m='216200'>linear</span> <span m='216630'>in</span> <span
  m='216760'>y.</span> <span m='218130'>The</span> <span
  m='218280'>initial</span> <span m='218730'>condition</span> <span
  m='219540'>is</span> <span m='219800'>at</span> <span m='220520'>time</span>
  <span m='220900'>0,</span> <span m='222380'>there's</span> <span
  m='222820'>a</span> <span m='222900'>specified</span> <span
  m='223770'>value</span> <span m='224150'>of</span> <span m='224290'>y,</span>
  <span m='224860'>like</span> <span m='225370'>$100.</span> </p><p><span
  m='226940'>That's</span> <span m='227400'>the</span> <span
  m='228630'>compound</span> <span m='229270'>interest</span> <span
  m='229780'>problem.</span> <span m='231910'>Here's</span> <span
  m='232260'>the</span> <span m='232350'>logistic</span> <span
  m='233090'>equation.</span> <span m='234290'>Nonlinear</span> <span
  m='234960'>equation.</span> <span m='235940'>Here,</span> <span
  m='236400'>f</span> <span m='236640'>of</span> <span m='236780'>t</span> <span
  m='237030'>and</span> <span m='237120'>y,</span> <span
  m='237870'>again,</span> <span m='238340'>doesn't</span> <span
  m='238700'>depend</span> <span m='239090'>upon</span> <span
  m='239520'>t.</span> <span m='240550'>And</span> <span m='241200'>it's</span>
  <span m='241490'>a</span> <span m='241580'>constant</span> <span
  m='242200'>times</span> <span m='242540'>y</span> <span
  m='243080'>minus</span> <span m='243630'>another</span> <span
  m='244000'>constant</span> <span m='244570'>times</span> <span
  m='244870'>y</span> <span m='245200'>squared.</span> <span
  m='246520'>That's</span> <span m='246750'>the</span> <span
  m='246860'>logistic</span> <span m='247580'>equation.</span> </p><p><span
  m='248770'>And</span> <span m='249730'>again,</span> <span
  m='251040'>the</span> <span m='251140'>value</span> <span m='251620'>is</span>
  <span m='251750'>specified</span> <span m='252510'>at</span> <span
  m='252610'>0.</span> <span m='254250'>Let's</span> <span m='254580'>say</span>
  <span m='256459'>y</span> <span m='256839'>at</span> <span m='256980'>0</span>
  <span m='257420'>is</span> <span m='257560'>equal</span> <span
  m='257870'>to</span> <span m='257970'>1.</span> <span m='259750'>Here's</span>
  <span m='260000'>another</span> <span m='260339'>nonlinear</span> <span
  m='261010'>equation.</span> <span m='262040'>F</span> <span
  m='262250'>of</span> <span m='262440'>t</span> <span m='262680'>and</span>
  <span m='262800'>y</span> <span m='263370'>is</span> <span m='263780'>t</span>
  <span m='263990'>squared</span> <span m='264460'>plus</span> <span
  m='264710'>y</span> <span m='265020'>squared.</span> <span
  m='266290'>It's</span> <span m='266460'>not</span> <span
  m='266750'>possible</span> <span m='267270'>to</span> <span
  m='267340'>find</span> <span m='267710'>an</span> <span
  m='267830'>analytic</span> <span m='268470'>solution</span> <span
  m='269010'>to</span> <span m='269070'>this</span> <span
  m='269320'>equation.</span> </p><p><span m='270000'>We'll</span> <span
  m='270460'>use these</span> <span m='271020'>numerical</span> <span
  m='271580'>methods</span> <span m='272080'>to</span> <span
  m='272230'>find</span> <span m='272560'>a</span> <span
  m='272680'>solution</span> <span m='273170'>to</span> <span
  m='273220'>this</span> <span m='273440'>equation.</span> <span
  m='274760'>Initial</span> <span m='275090'>condition</span> <span
  m='275690'>y</span> <span m='275990'>at</span> <span m='276110'>0</span> <span
  m='276620'>is</span> <span m='276750'>equal</span> <span m='277100'>to</span>
  <span m='277150'>0.</span> <span m='278390'>That's</span> <span
  m='278660'>an</span> <span m='278770'>example</span> <span
  m='279360'>of</span> <span m='279470'>a</span> <span
  m='279550'>function</span> <span m='280110'>of</span> <span
  m='280270'>t</span> <span m='280500'>and</span> <span m='280610'>y.</span>
  <span m='284930'>Euler's</span> <span m='285290'>method</span> <span
  m='285710'>actually</span> <span m='286220'>isn't</span> <span
  m='286560'>a</span> <span m='286720'>practical</span> <span
  m='287510'>numerical</span> <span m='288050'>method</span> <span
  m='288490'>in</span> <span m='288630'>general.</span> </p><p><span
  m='290330'>We're</span> <span m='290540'>just</span> <span
  m='290800'>using</span> <span m='291220'>it</span> <span m='291480'>to</span>
  <span m='291640'>get</span> <span m='291820'>us</span> <span
  m='291930'>started</span> <span m='292430'>thinking</span> <span
  m='292780'>about</span> <span m='293080'>the</span> <span
  m='293220'>ideas</span> <span m='293790'>underlying</span> <span
  m='294440'>numerical</span> <span m='294980'>methods.</span> <span
  m='296810'>Euler's</span> <span m='297120'>method</span> <span
  m='297520'>involves</span> <span m='298210'>a</span> <span
  m='299790'>sequence</span> <span m='300390'>of</span> <span
  m='300510'>points</span> <span m='300950'>t</span> <span m='301160'>sub</span>
  <span m='301390'>n</span> <span m='302420'>separated</span> <span
  m='303170'>by</span> <span m='303360'>a</span> <span m='303450'>fixed</span>
  <span m='303800'>step</span> <span m='304060'>size</span> <span
  m='304450'>h.</span> <span m='305550'>And</span> <span m='305850'>then</span>
  <span m='306110'>y</span> <span m='306430'>sub</span> <span
  m='306710'>n</span> <span m='307500'>is</span> <span m='309530'>an</span>
  <span m='309600'>approximation</span> <span m='310540'>to</span> <span
  m='310610'>the</span> <span m='310880'>value</span> <span m='311250'>of</span>
  <span m='311360'>the</span> <span m='311480'>solution</span> <span
  m='312610'>at</span> <span m='312920'>t</span> <span m='313120'>sub</span>
  <span m='313370'>n.</span> </p><p><span m='318070'>The</span> <span
  m='318210'>approximation</span> <span m='319210'>comes</span> <span
  m='319630'>from</span> <span m='320100'>the</span> <span
  m='320830'>slope</span> <span m='321300'>of</span> <span m='321400'>the</span>
  <span m='321510'>secant.</span> <span m='322950'>The</span> <span
  m='325490'>ratio</span> <span m='326080'>of</span> <span m='326320'>the</span>
  <span m='327070'>difference</span> <span m='327550'>of</span> <span
  m='327670'>the</span> <span m='327750'>values</span> <span
  m='329500'>of</span> <span m='329680'>y</span> <span m='330710'>and</span>
  <span m='331810'>to</span> <span m='332200'>the</span> <span
  m='332750'>step</span> <span m='333150'>size</span> <span m='333560'>h.</span>
  <span m='335060'>The</span> <span m='335750'>differential</span> <span
  m='336470'>equation</span> <span m='338320'>says</span> <span
  m='338760'>that</span> <span m='339480'>this</span> <span
  m='339760'>ratio</span> <span m='340370'>should</span> <span
  m='340730'>be</span> <span m='340950'>the</span> <span m='341080'>value</span>
  <span m='341490'>of</span> <span m='341560'>the</span> <span
  m='341680'>function</span> <span m='343010'>at</span> <span
  m='345740'>t</span> <span m='345940'>sub</span> <span m='346190'>n.</span>
  </p><p><span m='347200'>And</span> <span m='347570'>if</span> <span
  m='347750'>we</span> <span m='347910'>rearrange</span> <span
  m='348870'>this</span> <span m='349900'>equation,</span> <span
  m='352720'>we</span> <span m='352830'>get</span> <span
  m='353740'>Euler's</span> <span m='354220'>method.</span> <span
  m='356200'>That</span> <span m='356410'>yn</span> <span m='356940'>plus</span>
  <span m='357250'>1</span> <span m='358150'>is</span> <span
  m='358610'>yn</span> <span m='359590'>plus</span> <span m='360340'>h</span>
  <span m='361220'>times</span> <span m='361800'>the</span> <span
  m='362520'>function</span> <span m='363250'>f</span> <span
  m='364040'>evaluated</span> <span m='365150'>at</span> <span
  m='365580'>t</span> <span m='365750'>sub n and</span> <span
  m='365970'>y</span> <span m='366580'>sub</span> <span m='366840'>n.</span>
  <span m='367770'>This</span> <span m='367990'>is</span> <span
  m='368140'>Euler's</span> <span m='368580'>method.</span> <span
  m='373110'>We're</span> <span m='373210'>now</span> <span
  m='373460'>ready</span> <span m='373770'>for</span> <span
  m='373960'>our</span> <span m='374060'>first</span> <span
  m='374450'>MATLAB</span> <span m='375070'>program,</span> <span
  m='376210'>ODE1.</span> <span m='378250'>It's</span> <span
  m='378840'>called</span> <span m='379180'>ODE1</span> <span
  m='380150'>because</span> <span m='380750'>it's</span> <span
  m='380950'>our</span> <span m='381080'>first</span> <span
  m='381440'>program</span> <span m='382490'>and</span> <span
  m='382880'>because</span> <span m='383280'>it</span> <span
  m='383360'>evaluates</span> <span m='384190'>the</span> <span
  m='384280'>function</span> <span m='384920'>f</span> <span
  m='385340'>that</span> <span m='385560'>defines</span> <span
  m='386120'>the</span> <span m='386230'>differential</span> <span
  m='386830'>equation</span> <span m='388120'>once</span> <span
  m='388600'>per</span> <span m='388760'>step.</span> </p><p><span
  m='390090'>There</span> <span m='390340'>are</span> <span
  m='390390'>five</span> <span m='390950'>input</span> <span
  m='391380'>arguments.</span> <span m='393760'>The</span> <span
  m='393870'>first</span> <span m='394380'>is</span> <span m='394720'>f,</span>
  <span m='395360'>a</span> <span m='395820'>function</span> <span
  m='396360'>that</span> <span m='396520'>defines</span> <span
  m='397390'>the</span> <span m='398090'>differential</span> <span
  m='398640'>equation.</span> <span m='399850'>This</span> <span
  m='400090'>is</span> <span m='400530'>something</span> <span
  m='401020'>called</span> <span m='401340'>an</span> <span
  m='401450'>anonymous</span> <span m='402230'>function.</span> <span
  m='403390'>I'll</span> <span m='403620'>talk</span> <span
  m='403900'>more</span> <span m='404170'>about</span> <span
  m='404450'>that</span> <span m='404710'>in</span> <span m='404810'>a</span>
  <span m='404890'>moment.</span> <span m='405740'>The other four</span> <span
  m='406700'>are</span> <span m='407460'>scalar</span> <span
  m='408290'>numerical</span> <span m='409130'>values.</span> </p><p><span
  m='410440'>The</span> <span m='410570'>first</span> <span
  m='411100'>three</span> <span m='412120'>define</span> <span
  m='412830'>the</span> <span m='413240'>interval</span> <span
  m='413790'>of</span> <span m='413910'>integration.</span> <span
  m='415340'>We're</span> <span m='415530'>going</span> <span
  m='415920'>from</span> <span m='416230'>t0</span> <span m='417380'>in</span>
  <span m='417540'>steps</span> <span m='418090'>of</span> <span
  m='418260'>h</span> <span m='418910'>to</span> <span m='419250'>t</span> <span
  m='419530'>final.</span> <span m='421140'>The</span> <span
  m='421470'>fifth</span> <span m='421940'>input</span> <span
  m='422340'>argument</span> <span m='422970'>is</span> <span
  m='423210'>y0,</span> <span m='424570'>the</span> <span
  m='424710'>initial</span> <span m='425180'>value.</span> <span
  m='426860'>The</span> <span m='426960'>output</span> <span
  m='428000'>is</span> <span m='428230'>a</span> <span m='428290'>vector.</span>
  <span m='429600'>Vector</span> <span m='430020'>y</span> <span
  m='430480'>out</span> <span m='431410'>is</span> <span m='431900'>the</span>
  <span m='432400'>values</span> <span m='433130'>of</span> <span
  m='433370'>the</span> <span m='433890'>solution</span> <span
  m='435220'>at</span> <span m='436180'>the</span> <span
  m='436380'>points</span> <span m='437490'>in</span> <span
  m='437740'>the</span> <span m='437930'>interval.</span> </p><p><span
  m='440210'>We</span> <span m='440390'>start</span> <span m='440840'>by</span>
  <span m='441010'>putting</span> <span m='441430'>y0,</span> <span
  m='442540'>the</span> <span m='442690'>initial</span> <span
  m='443080'>value,</span> <span m='443590'>into</span> <span
  m='443960'>y</span> <span m='445130'>and</span> <span m='445330'>then</span>
  <span m='445560'>putting</span> <span m='445880'>y</span> <span
  m='446430'>into</span> <span m='446840'>the</span> <span
  m='447020'>output</span> <span m='447490'>vector.</span> <span
  m='449290'>The</span> <span m='449610'>body</span> <span m='450140'>of</span>
  <span m='450270'>the</span> <span m='450640'>function</span> <span
  m='451300'>is</span> <span m='451570'>a</span> <span m='451650'>four</span>
  <span m='452080'>loop,</span> <span m='453120'>t</span> <span
  m='453430'>goes</span> <span m='453820'>from</span> <span m='454070'>T0</span>
  <span m='454320'>not</span> <span m='454810'>in</span> <span
  m='454940'>steps</span> <span m='455420'>of</span> <span m='455580'>H</span>
  <span m='456510'>up</span> <span m='456770'>to</span> <span
  m='458640'>one</span> <span m='458980'>step</span> <span
  m='459380'>short</span> <span m='460050'>of</span> <span m='460230'>t</span>
  <span m='460490'>final</span> <span m='461610'>and</span> <span
  m='461840'>then</span> <span m='462050'>the</span> <span
  m='462140'>final</span> <span m='463640'>passage</span> <span
  m='464270'>through</span> <span m='464490'>the</span> <span
  m='465300'>body</span> <span m='465670'>of</span> <span m='465780'>the
  code</span> <span m='466710'>takes</span> <span m='467110'>t</span> <span
  m='467400'>up</span> <span m='467610'>to</span> <span m='467750'>t</span>
  <span m='468050'>final.</span> </p><p><span m='469730'>We</span> <span
  m='469910'>evaluate</span> <span m='470780'>the</span> <span
  m='470860'>function</span> <span m='471410'>f</span> <span
  m='472310'>at</span> <span m='472710'>t</span> <span m='472970'>and</span>
  <span m='473080'>y.</span> <span m='474180'>That</span> <span
  m='474450'>gives</span> <span m='475470'>us</span> <span m='475670'>a</span>
  <span m='475780'>slope</span> <span m='476560'>s,</span> <span m='477350'>s is
  for</span> <span m='477830'>slope.</span> <span m='479210'>Here's</span> <span
  m='479590'>the</span> <span m='479730'>Euler</span> <span
  m='480170'>step.</span> <span m='481710'>Take</span> <span
  m='481980'>the</span> <span m='482140'>current</span> <span
  m='482630'>value</span> <span m='483050'>of</span> <span m='483210'>y,</span>
  <span m='484310'>add</span> <span m='485020'>h,</span> <span
  m='485470'>times</span> <span m='485900'>the</span> <span
  m='485990'>slope.</span> <span m='487300'>That</span> <span
  m='487550'>gives</span> <span m='487990'>us</span> <span m='488120'>this
  new</span> <span m='488270'>value</span> <span m='488790'>of</span> <span
  m='488930'>y.</span> <span m='489980'>And</span> <span m='490150'>then</span>
  <span m='490340'>y</span> <span m='490810'>is</span> <span
  m='491090'>appended</span> <span m='491710'>to</span> <span
  m='491800'>y</span> <span m='492220'>out.</span> </p><p><span
  m='493150'>This</span> <span m='495140'>MATLAB</span> <span
  m='496600'>construction</span> <span m='497360'>with</span> <span
  m='497520'>the</span> <span m='497630'>square</span> <span
  m='498120'>brackets</span> <span m='499190'>takes</span> <span
  m='499530'>a</span> <span m='499580'>vector</span> <span m='500100'>y,</span>
  <span m='501110'>adds</span> <span m='501400'>another</span> <span
  m='501820'>value</span> <span m='502330'>to</span> <span m='502660'>it,</span>
  <span m='502990'>making</span> <span m='503460'>it</span> <span
  m='504290'>one</span> <span m='504690'>element</span> <span
  m='505090'>longer</span> <span m='505950'>and</span> <span
  m='506150'>puts</span> <span m='506460'>the</span> <span
  m='506540'>resulting</span> <span m='507050'>y</span> <span
  m='507170'>out</span> <span m='507970'>back</span> <span m='508240'>in</span>
  <span m='508410'>y</span> <span m='508720'>out.</span> <span
  m='509890'>This</span> <span m='510120'>is</span> <span m='510280'>the</span>
  <span m='510410'>entire</span> <span m='511010'>code.</span> <span
  m='511530'>This</span> <span m='511670'>is</span> <span m='511870'>it.</span>
  <span m='512600'>This</span> <span m='512840'>is</span> <span
  m='513020'>ODE1</span> <span m='514580'>that</span> <span
  m='514780'>implements</span> <span m='515780'>Euler's</span> <span
  m='516289'>method.</span> </p><p><span m='519720'>The</span> <span
  m='519850'>first</span> <span m='520220'>argument</span> <span
  m='520789'>to</span> <span m='520870'>any</span> <span m='521260'>of</span>
  <span m='521380'>the</span> <span m='521710'>MATLAB</span> <span
  m='522289'>ODE</span> <span m='522750'>solvers</span> <span
  m='523909'>is</span> <span m='524220'>the</span> <span m='524350'>name</span>
  <span m='524760'>of</span> <span m='524970'>a</span> <span
  m='525210'>function</span> <span m='525770'>that</span> <span
  m='525950'>specifies</span> <span m='526760'>the</span> <span
  m='526860'>differential</span> <span m='527370'>equation.</span> <span
  m='528790'>This</span> <span m='529000'>is</span> <span
  m='529140'>known</span> <span m='529480'>as</span> <span m='529650'>a</span>
  <span m='529880'>function</span> <span m='530460'>handle.</span> <span
  m='532070'>The</span> <span m='532240'>easiest</span> <span
  m='532870'>way</span> <span m='533140'>to</span> <span m='533370'>get</span>
  <span m='533710'>a</span> <span m='534360'>function</span> <span
  m='534770'>handle</span> <span m='535710'>is</span> <span m='536050'>to</span>
  <span m='536190'>make</span> <span m='536500'>use</span> <span m='537400'>of
  an</span> <span m='537840'>anonymous</span> <span m='538640'>function</span>
  <span m='539780'>created</span> <span m='540400'>with</span> <span
  m='540760'>the</span> <span m='541270'>ampersand</span> <span
  m='542130'>or</span> <span m='542350'>at</span> <span m='542630'>sign.</span>
  </p><p></p><p><span m='544370'>All</span> <span m='544630'>of</span> <span
  m='544750'>the</span> <span m='544990'>differential</span> <span
  m='545580'>equations</span> <span m='547060'>involve</span> <span
  m='547800'>anonymous</span> <span m='548430'>functions</span> <span
  m='549180'>of</span> <span m='550430'>two</span> <span
  m='550650'>variables,</span> <span m='552190'>t</span> <span
  m='552500'>and</span> <span m='552620'>y.</span> <span m='553940'>And</span>
  <span m='554130'>so</span> <span m='554420'>we</span> <span
  m='554580'>have</span> <span m='555690'>f</span> <span
  m='556050'>equals</span> <span m='556690'>at</span> <span
  m='557620'>parenthesis</span> <span m='558800'>t</span> <span
  m='559060'>comma</span> <span m='559450'>y</span> <span
  m='560070'>closed</span> <span m='560570'>parenthesis.</span> <span
  m='562060'>This</span> <span m='562280'>is</span> <span
  m='562450'>followed</span> <span m='563090'>by</span> <span
  m='564850'>any</span> <span m='565140'>expression</span> <span
  m='566460'>involving</span> <span m='567590'>either</span> <span
  m='568020'>t</span> <span m='568590'>or</span> <span m='568880'>y.</span>
  </p><p><span m='569980'>And</span> <span m='570600'>many</span> <span
  m='570980'>of</span> <span m='571050'>them</span> <span
  m='571250'>don't</span> <span m='571630'>depend</span> <span
  m='572040'>upon</span> <span m='572510'>t.</span> <span m='573440'>So</span>
  <span m='573840'>here</span> <span m='574200'>is</span> <span
  m='575450'>an</span> <span m='575830'>anonymous</span> <span
  m='576620'>function</span> <span m='577700'>defining</span> <span
  m='578390'>our</span> <span m='579660'>interest</span> <span
  m='580090'>problem.</span> <span m='581230'>And</span> <span
  m='581880'>we</span> <span m='582110'>can</span> <span m='582260'>just</span>
  <span m='582520'>evaluate</span> <span m='583290'>this</span> <span
  m='584380'>like</span> <span m='585420'>any</span> <span
  m='587820'>ordinary</span> <span m='588330'>function.</span> <span
  m='589340'>When</span> <span m='589570'>y</span> <span m='589870'>is</span>
  <span m='590030'>equal</span> <span m='590350'>to 1,</span> <span
  m='590740'>f</span> <span m='592340'>of</span> <span m='592480'>1</span> <span
  m='593040'>is</span> <span m='594030'>0.06.</span> </p><p><span
  m='595870'>Here's</span> <span m='596290'>an</span> <span
  m='597180'>example</span> <span m='597650'>of</span> <span m='597760'>a</span>
  <span m='597880'>function</span> <span m='599170'>that</span> <span
  m='599680'>depends</span> <span m='600220'>upon</span> <span
  m='600640'>both</span> <span m='601070'>t</span> <span m='601420'>and</span>
  <span m='601550'>y.</span> <span m='603200'>The</span> <span
  m='604910'>functions</span> <span m='605660'>can</span> <span
  m='607500'>involve</span> <span m='608040'>constants</span> <span
  m='608800'>that</span> <span m='608910'>have</span> <span
  m='609210'>values.</span> <span m='610670'>So</span> <span
  m='611050'>here,</span> <span m='612000'>we</span> <span m='612220'>can</span>
  <span m='612470'>define</span> <span m='613810'>two</span> <span
  m='614430'>constants.</span> <span m='616140'>And</span> <span
  m='616360'>then</span> <span m='616600'>we</span> <span m='616760'>can</span>
  <span m='616920'>use</span> <span m='617240'>those</span> <span
  m='617960'>two</span> <span m='618190'>constants</span> <span
  m='618940'>to</span> <span m='619100'>define</span> <span
  m='619650'>the</span> <span m='620780'>logistic</span> <span
  m='621560'>equation</span> <span m='622710'>f</span> <span
  m='623080'>of</span> <span m='624510'>a</span> <span m='624910'>times</span>
  <span m='625270'>y</span> <span m='625630'>minus</span> <span
  m='626080'>b</span> <span m='626370'>times</span> <span m='626750'>y</span>
  <span m='627060'>squared.</span> </p><p><span m='628340'>Again,</span> <span
  m='628760'>this</span> <span m='629000'>is</span> <span m='629200'>an</span>
  <span m='629340'>autonomous</span> <span m='629950'>equation</span> <span
  m='631060'>that</span> <span m='632320'>doesn't</span> <span
  m='632660'>actually</span> <span m='633190'>depend</span> <span
  m='633600'>upon</span> <span m='634650'>t.</span> <span
  m='638810'>Let's</span> <span m='639050'>see</span> <span
  m='639250'>how</span> <span m='639700'>Euler's</span> <span
  m='640120'>method</span> <span m='640740'>and</span> <span
  m='640960'>ODE1</span> <span m='642370'>work</span> <span m='642710'>on</span>
  <span m='642860'>this</span> <span m='643100'>simple</span> <span
  m='643440'>example.</span> <span m='644560'>Y</span> <span
  m='644840'>prime</span> <span m='645200'>equals</span> <span
  m='645600'>2y</span> <span m='646840'>with</span> <span m='647030'>the</span>
  <span m='647160'>initial</span> <span m='647640'>condition</span> <span
  m='648130'>y</span> <span m='648390'>of</span> <span m='648480'>0</span> <span
  m='648990'>equals</span> <span m='649340'>10</span> <span m='650330'>on</span>
  <span m='650540'>the</span> <span m='650680'>interval</span> <span
  m='652110'>t</span> <span m='652400'>between</span> <span m='652990'>0</span>
  <span m='653550'>and</span> <span m='653730'>3.</span> </p><p><span
  m='658360'>We</span> <span m='658500'>define</span> <span
  m='658950'>the</span> <span m='659100'>anonymous</span> <span
  m='659670'>function</span> <span m='660980'>f</span> <span
  m='661420'>of</span> <span m='661860'>t</span> <span m='662090'>and</span>
  <span m='662200'>y</span> <span m='662570'>is</span> <span
  m='662810'>equal</span> <span m='663110'>to</span> <span m='663340'>2y.</span>
  <span m='666310'>The</span> <span m='666530'>initial</span> <span
  m='667000'>condition</span> <span m='667700'>is</span> <span
  m='667910'>t0</span> <span m='668620'>equals</span> <span m='669080'>0.</span>
  <span m='670190'>We're</span> <span m='670320'>going</span> <span
  m='670430'>to</span> <span m='670560'>take</span> <span m='670790'>a</span>
  <span m='670880'>step</span> <span m='671210'>size</span> <span
  m='671690'>of</span> <span m='671790'>1.</span> <span m='673340'>Go</span>
  <span m='673570'>to t</span> <span m='673770'>final</span> <span
  m='674630'>equals</span> <span m='675220'>3</span> <span
  m='676360'>starting</span> <span m='677370'>at</span> <span
  m='677640'>y0</span> <span m='678570'>equals</span> <span m='679140'>10</span>
  <span m='680410'>and</span> <span m='681300'>here's</span> <span
  m='681600'>our</span> <span m='681880'>call</span> <span m='683370'>to</span>
  <span m='683960'>ODE1.</span> <span m='688170'>We</span> <span
  m='688380'>have</span> <span m='688630'>an</span> <span
  m='688840'>animation</span> <span m='689890'>that</span> <span
  m='690500'>shows</span> <span m='690840'>these</span> <span
  m='691160'>steps.</span> </p><p><span m='692740'>Start at</span> <span
  m='693200'>t0</span> <span m='693650'>equals</span> <span m='693930'>0</span>
  <span m='694800'>and</span> <span m='695730'>y0</span> <span
  m='696920'>equals</span> <span m='697300'>10.</span> <span
  m='697750'>Here's</span> <span m='698070'>our</span> <span
  m='698300'>first</span> <span m='698760'>point.</span> <span
  m='701170'>We</span> <span m='701690'>evaluate</span> <span
  m='702420'>the</span> <span m='702520'>function</span> <span
  m='703180'>there.</span> <span m='704800'>We</span> <span
  m='704970'>get</span> <span m='705210'>a</span> <span m='705300'>slope</span>
  <span m='705830'>of</span> <span m='706000'>20.</span> <span
  m='706590'>That's</span> <span m='706960'>2</span> <span
  m='707200'>times</span> <span m='707670'>10.</span> <span m='709110'>We</span>
  <span m='709160'>take</span> <span m='709380'>an</span> <span
  m='709490'>Euler</span> <span m='709860'>step</span> <span m='711855'>of
  length</span> <span m='712590'>1</span> <span m='713000'>across</span> <span
  m='713570'>the</span> <span m='714720'>first</span> <span
  m='715050'>step.</span> <span m='716280'>That</span> <span
  m='716550'>brings</span> <span m='716900'>us</span> <span m='717110'>to</span>
  <span m='717900'>the</span> <span m='718010'>second point,</span> <span
  m='718470'>30.</span> </p><p><span m='721130'>Evaluate</span> <span
  m='721830'>the</span> <span m='721920'>function</span> <span
  m='722550'>there.</span> <span m='723660'>Two</span> <span
  m='723910'>times</span> <span m='724330'>30</span> <span m='724660'>is</span>
  <span m='724830'>60.</span> <span m='725370'>That's</span> <span
  m='725710'>our</span> <span m='725870'>slope.</span> <span
  m='727120'>Take</span> <span m='727390'>the</span> <span
  m='727490'>second</span> <span m='727990'>step</span> <span
  m='729500'>to</span> <span m='729650'>get</span> <span m='729910'>to
  y2.</span> <span m='731370'>Y2</span> <span m='731930'>is</span> <span
  m='732150'>90.</span> <span m='733260'>Evaluate</span> <span
  m='733940'>the</span> <span m='734110'>function</span> <span
  m='734660'>there.</span> <span m='735820'>Get</span> <span m='736090'>2</span>
  <span m='736340'>times</span> <span m='736830'>90</span> <span
  m='737320'>is</span> <span m='737490'>180.</span> <span m='739050'>That</span>
  <span m='739300'>gives</span> <span m='739530'>us</span> <span
  m='740940'>a</span> <span m='741040'>slope.</span> <span
  m='742030'>Take</span> <span m='742270'>a</span> <span m='742360'>step</span>
  <span m='742710'>across</span> <span m='743180'>the</span> <span
  m='743290'>interval</span> <span m='743615'>with</span> <span
  m='743940'>that</span> <span m='744230'>slope</span> <span m='744590'>would
  get us</span> <span m='745090'>to</span> <span m='745260'>a</span> <span
  m='745420'>third</span> <span m='745860'>point.</span> </p><p><span
  m='746900'>The</span> <span m='747010'>third</span> <span
  m='747360'>point</span> <span m='747640'>is</span> <span m='747800'>270</span>
  <span m='749240'>and</span> <span m='749420'>that's</span> <span
  m='749710'>the</span> <span m='749870'>end</span> <span m='750090'>of</span>
  <span m='750160'>the</span> <span m='750300'>integration.</span> <span
  m='751570'>So</span> <span m='751780'>that's</span> <span
  m='752190'>three</span> <span m='752660'>Euler</span> <span
  m='753090'>steps</span> <span m='754770'>to</span> <span m='754850'>get</span>
  <span m='755220'>from</span> <span m='756460'>t0</span> <span
  m='757730'>to</span> <span m='757880'>t</span> <span m='758090'>final.</span>
  <span m='761990'>Euler's</span> <span m='762330'>method</span> <span
  m='762720'>is</span> <span m='762860'>actually</span> <span
  m='763240'>the</span> <span m='763390'>same</span> <span m='763800'>as</span>
  <span m='764060'>computing</span> <span m='764570'>compound</span> <span
  m='765230'>interest.</span> <span m='766450'>So</span> <span
  m='766750'>let's</span> <span m='767040'>do</span> <span m='767180'>a</span>
  <span m='767300'>compound</span> <span m='767910'>interest</span> <span
  m='768240'>problem.</span> </p><p><span m='769620'>Define</span> <span
  m='770170'>the</span> <span m='770480'>interest</span> <span
  m='770940'>rate.</span> <span m='772770'>Define</span> <span
  m='773230'>our</span> <span m='773440'>anonymous</span> <span
  m='774030'>function</span> <span m='774550'>using</span> <span
  m='774930'>that</span> <span m='775160'>interest</span> <span
  m='775610'>rate.</span> <span m='777960'>Start</span> <span
  m='778320'>at</span> <span m='778480'>time</span> <span m='778780'>0.</span>
  <span m='781020'>Go</span> <span m='781390'>in</span> <span
  m='781590'>steps</span> <span m='782200'>of</span> <span m='782420'>a</span>
  <span m='782500'>month.</span> <span m='784650'>Go</span> <span
  m='784850'>for</span> <span m='785090'>10</span> <span
  m='785350'>years.</span> <span m='788010'>Start</span> <span
  m='788680'>with</span> <span m='789010'>$100.</span> <span
  m='793990'>And</span> <span m='794470'>here's</span> <span
  m='794890'>our</span> <span m='796110'>result</span> <span
  m='796710'>of</span> <span m='797010'>using</span> <span
  m='797240'>ODE1</span> <span m='799000'>to</span> <span
  m='799140'>compute</span> <span m='799610'>compound</span> <span
  m='800250'>interest.</span> </p><p><span m='801580'>That's</span> <span
  m='801860'>121</span> <span m='803840'>numbers.</span> <span
  m='804970'>MATLAB</span> <span m='805570'>actually</span> <span
  m='806010'>has</span> <span m='806450'>a</span> <span m='806750'>format</span>
  <span m='808430'>for</span> <span m='809750'>looking</span> <span
  m='810300'>at</span> <span m='810490'>dollars</span> <span
  m='810940'>and</span> <span m='811120'>cents.</span> <span
  m='813040'>And</span> <span m='814570'>so</span> <span m='815060'>here</span>
  <span m='815260'>they</span> <span m='815480'>are</span> <span
  m='815900'>as</span> <span m='816120'>dollars</span> <span
  m='816580'>and</span> <span m='816730'>cents</span> <span
  m='818840'>starting</span> <span m='819430'>with</span> <span
  m='820380'>$100</span> <span m='821840'>and</span> <span
  m='822230'>compounding</span> <span m='823100'>every</span> <span
  m='823410'>month.</span> <span m='824700'>We</span> <span
  m='824910'>get</span> <span m='825110'>up</span> <span m='825450'>to</span>
  <span m='827960'>just</span> <span m='828340'>over</span> <span
  m='829440'>$180.</span> </p><p><span m='832860'>I'm</span> <span
  m='833070'>going</span> <span m='833180'>to</span> <span
  m='833270'>plot</span> <span m='833700'>that.</span> <span
  m='834730'>So</span> <span m='835960'>I</span> <span m='836020'>want a</span>
  <span m='836380'>time</span> <span m='836740'>vector</span> <span
  m='838630'>months.</span> <span m='839950'>And</span> <span
  m='840250'>I</span> <span m='840340'>actually</span> <span
  m='840770'>want</span> <span m='841030'>to</span> <span
  m='841130'>compare</span> <span m='841660'>it</span> <span
  m='841730'>with</span> <span m='841900'>simple</span> <span
  m='842450'>interest.</span> <span m='843590'>So</span> <span
  m='844570'>here's</span> <span m='844850'>how</span> <span
  m='844950'>you</span> <span m='845160'>compute</span> <span
  m='845590'>simple</span> <span m='846050'>interest.</span> <span
  m='847560'>$0.50</span> <span m='848280'>a</span> <span
  m='848340'>month.</span> <span m='849100'>And</span> <span
  m='849860'>now</span> <span m='850170'>let's</span> <span
  m='850570'>plot</span> <span m='850920'>those</span> <span
  m='851280'>two.</span> </p><p><span m='859910'>So</span> <span
  m='861000'>the</span> <span m='861090'>straight</span> <span
  m='861540'>line</span> <span m='862120'>is</span> <span
  m='862440'>simple</span> <span m='862950'>interest</span> <span
  m='864090'>getting</span> <span m='864460'>up</span> <span
  m='864700'>to</span> <span m='865240'>$160.</span> <span m='867310'>And</span>
  <span m='868500'>the</span> <span m='868610'>blue</span> <span
  m='868920'>line</span> <span m='869480'>is</span> <span m='869910'>the</span>
  <span m='870640'>compound</span> <span m='871360'>interest.</span> <span
  m='872400'>There</span> <span m='872590'>is</span> <span m='872740'>a</span>
  <span m='872850'>slight</span> <span m='873890'>upward</span> <span
  m='874380'>curvature,</span> <span m='875650'>getting</span> <span
  m='876030'>us</span> <span m='876210'>up</span> <span m='876520'>to</span>
  <span m='877630'>$180.</span> <span m='879270'>There's</span> <span
  m='879540'>a</span> <span m='879620'>dot</span> <span m='880040'>every</span>
  <span m='880320'>month</span> <span m='880710'>here</span> <span
  m='881590'>as</span> <span m='881880'>we</span> <span m='882090'>show</span>
  <span m='882420'>the</span> <span m='882550'>results</span> <span
  m='883130'>of</span> <span m='883860'>Euler's</span> <span
  m='884340'>method,</span> <span m='884970'>which</span> <span
  m='885300'>as</span> <span m='885530'>I</span> <span m='885630'>said</span>
  <span m='886030'>is</span> <span m='886200'>the</span> <span
  m='886310'>same</span> <span m='886640'>thing</span> <span
  m='886960'>as</span> <span m='888480'>computing</span> <span
  m='888930'>compound</span> <span m='889520'>interest.</span> </p><p><span
  m='894300'>Finally,</span> <span m='895230'>here's</span> <span
  m='895450'>an</span> <span m='895570'>exercise.</span> <span
  m='897260'>Find</span> <span m='897710'>the</span> <span
  m='897830'>differential</span> <span m='898420'>equation</span> <span
  m='899040'>that</span> <span m='899220'>produces</span> <span
  m='899760'>linear</span> <span m='900230'>growth</span> <span
  m='901590'>and</span> <span m='902260'>rerun</span> <span
  m='902870'>this</span> <span m='903060'>example</span> <span
  m='903780'>using</span> <span m='904590'>ODE1</span> <span
  m='905940'>twice,</span> <span m='907360'>once</span> <span
  m='907670'>to</span> <span m='907810'>compute</span> <span
  m='908270'>the</span> <span m='908380'>compound</span> <span
  m='909050'>interest</span> <span m='910290'>and</span> <span
  m='910520'>once</span> <span m='910810'>to</span> <span
  m='910950'>compute</span> <span m='911410'>the</span> <span
  m='911510'>simple</span> <span m='911960'>interest.</span> </p>
uid: 26ac4621ab8d05919736377a8c52d0f7
type: courses
layout: video
---
