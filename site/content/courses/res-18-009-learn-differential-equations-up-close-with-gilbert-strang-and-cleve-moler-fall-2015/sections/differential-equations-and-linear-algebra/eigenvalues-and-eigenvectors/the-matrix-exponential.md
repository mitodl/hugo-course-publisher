---
about_this_resource_text: >-
  <p><strong>Description:</strong> The shortest form of the solution uses the
  matrix exponential multiplying the starting vector (the initial
  condition).</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 6.4</p>
  <p><strong>Instructor:</strong>  Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: LwSk9M5lJx4
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Video-YouTube-Stream
    type: Video
    uid: 747a1a1042dfe574f31d7087c4572780
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/LwSk9M5lJx4/default.jpg'
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 209091c5999327035f889cd9d607ff20
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: LwSk9M5lJx4
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5a9c6473e9fc876b0a2533266d6c8b7a
  - id: LwSk9M5lJx4.srt
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/the-matrix-exponential/LwSk9M5lJx4.srt
    title: 3play caption file
    type: null
    uid: 61308378676bd5613d46d70af832f471
  - id: LwSk9M5lJx4.pdf
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/the-matrix-exponential/LwSk9M5lJx4.pdf
    title: 3play pdf file
    type: null
    uid: 8be2e5a25c9fa6db86d0c8ad21b554a5
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8bec706c43f6052caf8a6b04e6743909
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e4390b842b3f3d8427e67685112ac9c7
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Video-iTunes U-MP4
    type: Video
    uid: 582f5f9ec3b62da693456d8d4ec5230f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_6_4_MatrixExponential_300k.mp4
    parent_uid: 94cddcb81d9207ca416d8be0484d1e54
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7d27c940ee81daaf01b21000d8f8911a
inline_embed_id: 96391185thematrixexponential71695557
order_index: 441
parent_uid: eea80322d845c02f5a6079ba180150bd
related_resources_text: ''
short_url: the-matrix-exponential
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/the-matrix-exponential
title: The Matrix Exponential
transcript: >-
  <p><span m='260'>GILBERT STRANG: OK.</span> <span m='1330'>We're</span> <span
  m='1560'>still</span> <span m='1880'>solving</span> <span
  m='2570'>systems</span> <span m='3670'>of</span> <span
  m='3860'>differential</span> <span m='4440'>equations</span> <span
  m='5760'>with</span> <span m='5960'>a</span> <span m='6010'>matrix</span>
  <span m='6305'>A</span> <span m='6600'>in</span> <span m='7090'>them.</span>
  </p><p><span m='8500'>And</span> <span m='8690'>now</span> <span
  m='9180'>I</span> <span m='9360'>want</span> <span m='9650'>to</span> <span
  m='9840'>create</span> <span m='10650'>the</span> <span
  m='11470'>exponential.</span> <span m='12620'>It's</span> <span
  m='12860'>just</span> <span m='13130'>natural</span> <span m='13740'>to</span>
  <span m='14680'>produce</span> <span m='15270'>e</span> <span
  m='15530'>to</span> <span m='15670'>the</span> <span m='15900'>A,</span> <span
  m='16275'>or</span> <span m='16650'>e</span> <span m='16880'>to</span> <span
  m='17030'>the</span> <span m='17250'>A t.</span> <span m='18420'>The</span>
  <span m='18810'>exponential</span> <span m='19730'>of</span> <span
  m='19870'>a</span> <span m='19940'>matrix.</span> <span m='20920'>So</span>
  <span m='23440'>if</span> <span m='23590'>we</span> <span
  m='23720'>have</span> <span m='23920'>one</span> <span
  m='24190'>equation,</span> <span m='25810'>small</span> <span
  m='26420'>a,</span> <span m='27450'>then</span> <span m='27830'>we</span>
  <span m='27970'>know</span> <span m='28230'>the</span> <span
  m='28400'>solution</span> <span m='29130'>is</span> <span m='30000'>an</span>
  <span m='30200'>e</span> <span m='30440'>to</span> <span m='30530'>the</span>
  <span m='30730'>A t,</span> <span m='31636'>times</span> <span
  m='32090'>the</span> <span m='32659'>starting</span> <span
  m='33200'>value.</span> </p><p><span m='34220'>Now</span> <span
  m='35730'>we</span> <span m='35910'>have</span> <span m='36100'>n</span> <span
  m='36360'>equations</span> <span m='37810'>with</span> <span
  m='37990'>a</span> <span m='38040'>matrix</span> <span m='38335'>A</span>
  <span m='39380'>and</span> <span m='39560'>a</span> <span
  m='39620'>vector</span> <span m='40100'>y.</span> <span m='41250'>And</span>
  <span m='41510'>the</span> <span m='41660'>solution</span> <span
  m='42290'>should</span> <span m='42640'>be,</span> <span m='44040'>at</span>
  <span m='44290'>time</span> <span m='44640'>t,</span> <span m='45831'>e</span>
  <span m='46230'>to</span> <span m='46380'>the</span> <span m='46600'>A
  t,</span> <span m='48025'>times</span> <span m='48500'>the</span> <span
  m='48650'>starting</span> <span m='49060'>value.</span> <span
  m='49750'>It</span> <span m='49920'>should</span> <span m='50150'>be</span>
  <span m='50490'>a</span> <span m='50580'>perfect</span> <span
  m='51090'>match</span> <span m='51890'>with</span> <span m='52070'>this</span>
  <span m='52320'>one,</span> <span m='53570'>where</span> <span
  m='54200'>this</span> <span m='54420'>had</span> <span m='54620'>a</span>
  <span m='54730'>number</span> <span m='55330'>in</span> <span
  m='55550'>the</span> <span m='55720'>exponent</span> <span
  m='56710'>and</span> <span m='56930'>this</span> <span m='57180'>has</span>
  <span m='57480'>a</span> <span m='57560'>matrix</span> <span
  m='58210'>in</span> <span m='58330'>the</span> <span
  m='58500'>exponent.</span> </p><p><span m='59120'>OK.</span> <span
  m='60440'>No</span> <span m='60670'>problem.</span> <span m='61620'>We</span>
  <span m='61810'>just</span> <span m='62170'>use</span> <span
  m='62730'>the</span> <span m='62910'>series</span> <span m='64220'>for</span>
  <span m='64709'>e</span> <span m='64980'>to</span> <span m='65120'>the</span>
  <span m='65330'>A t.</span> <span m='66090'>We</span> <span
  m='66470'>plug</span> <span m='66730'>in</span> <span m='66990'>a</span> <span
  m='67050'>matrix</span> <span m='68310'>instead</span> <span
  m='68710'>of</span> <span m='68800'>a</span> <span m='68880'>number.</span>
  <span m='69770'>So</span> <span m='70580'>the</span> <span
  m='71660'>identity,</span> <span m='72720'>plus</span> <span m='73650'>A
  t,</span> <span m='74810'>plus</span> <span m='75560'>1/2</span> <span
  m='76580'>A t</span> <span m='77290'>squared,</span> <span
  m='78280'>plus</span> <span m='78930'>1/6</span> <span m='79920'>of</span>
  <span m='80140'>A t</span> <span m='80910'>cubed,</span> <span
  m='81700'>forever.</span> <span m='83450'>It's</span> <span
  m='83480'>the</span> <span m='83630'>same.</span> <span m='84130'>It's</span>
  <span m='84310'>the</span> <span m='84460'>exponential</span> <span
  m='85240'>series.</span> <span m='85840'>The</span> <span
  m='85940'>most</span> <span m='86210'>important</span> <span
  m='86690'>series</span> <span m='87080'>in</span> <span
  m='87220'>mathematics,</span> <span m='87950'>I</span> <span
  m='88050'>think.</span> </p><p><span m='89480'>And</span> <span
  m='90050'>it</span> <span m='90780'>gives</span> <span m='91140'>us</span>
  <span m='91310'>an</span> <span m='91480'>answer.</span> <span
  m='92590'>And</span> <span m='92770'>that</span> <span m='92970'>answer</span>
  <span m='93380'>is</span> <span m='93840'>a</span> <span
  m='93950'>matrix.</span> <span m='94870'>Everything</span> <span
  m='95390'>here,</span> <span m='96000'>every</span> <span
  m='96320'>term,</span> <span m='96660'>is</span> <span m='96780'>a</span>
  <span m='96850'>matrix.</span> </p><p><span m='98060'>OK.</span> <span
  m='98860'>Now,</span> <span m='99230'>is</span> <span m='99390'>that</span>
  <span m='99610'>the</span> <span m='99720'>right</span> <span
  m='99990'>answer?</span> <span m='101220'>We</span> <span
  m='101400'>check</span> <span m='101770'>that</span> <span
  m='102200'>by</span> <span m='103110'>putting</span> <span
  m='103480'>it</span> <span m='103690'>into</span> <span m='104050'>the</span>
  <span m='104220'>differential</span> <span m='104820'>equation.</span> <span
  m='105570'>So</span> <span m='105670'>I</span> <span m='105760'>want</span>
  <span m='106000'>to</span> <span m='106640'>put</span> <span
  m='106870'>that</span> <span m='107180'>solution</span> <span
  m='107850'>into</span> <span m='108690'>the</span> <span
  m='108860'>equation.</span> <span m='109590'>So</span> <span
  m='109760'>I</span> <span m='109840'>need</span> <span m='110130'>to</span>
  <span m='110280'>take</span> <span m='110600'>the</span> <span
  m='110730'>derivative.</span> </p><p><span m='111900'>The</span> <span
  m='112070'>derivative</span> <span m='112750'>of</span> <span
  m='112910'>this</span> <span m='113500'>is</span> <span m='113990'>the</span>
  <span m='114130'>derivative of--</span> <span m='114590'>that's</span> <span
  m='114880'>a</span> <span m='114960'>constant.</span> <span
  m='116050'>The</span> <span m='116270'>derivative</span> <span
  m='116990'>of</span> <span m='117090'>that</span> <span m='117360'>is</span>
  <span m='117570'>A.</span> <span m='118396'>The</span> <span
  m='118810'>derivative</span> <span m='119380'>of</span> <span
  m='119540'>this</span> <span m='119950'>is</span> <span m='120290'>1/2.</span>
  <span m='122170'>I</span> <span m='122240'>have</span> <span
  m='122370'>an</span> <span m='122480'>A</span> <span
  m='122670'>squared,</span> <span m='124690'>and</span> <span
  m='125160'>I</span> <span m='125230'>have</span> <span m='125360'>a</span>
  <span m='125470'>t</span> <span m='125780'>squared.</span> <span
  m='126520'>The</span> <span m='126660'>derivative</span> <span
  m='127250'>of</span> <span m='127420'>t</span> <span m='127650'>squared</span>
  <span m='128090'>is</span> <span m='128270'>2t,</span> <span
  m='129389'>so</span> <span m='129690'>that'll</span> <span
  m='130009'>just</span> <span m='130300'>be</span> <span m='130470'>a</span>
  <span m='130570'>t.</span> <span m='131250'>The</span> <span
  m='131590'>2</span> <span m='131970'>and</span> <span m='132050'>the</span>
  <span m='132210'>2</span> <span m='132500'>cancel.</span> </p><p><span
  m='133500'>OK.</span> <span m='134430'>Now</span> <span m='135270'>I</span>
  <span m='135440'>have</span> <span m='136260'>A</span> <span
  m='136590'>cubed</span> <span m='137120'>here.</span> <span
  m='139380'>t</span> <span m='139750'>cubed?</span> <span m='140410'>The</span>
  <span m='140460'>derivative</span> <span m='140990'>of</span> <span
  m='141595'>t</span> <span m='142060'>cubed</span> <span m='142500'>is</span>
  <span m='142780'>3t</span> <span m='143560'>squared,</span> <span
  m='144290'>so</span> <span m='144300'>I</span> <span m='144410'>have</span>
  <span m='144540'>a</span> <span m='144650'>t</span> <span
  m='144930'>squared.</span> <span m='146050'>And</span> <span
  m='146220'>the</span> <span m='146350'>3</span> <span
  m='146830'>cancels</span> <span m='147950'>the</span> <span
  m='148170'>3</span> <span m='148700'>and</span> <span m='148830'>the</span>
  <span m='148960'>6,</span> <span m='149460'>and</span> <span
  m='149560'>leaves</span> <span m='150130'>1</span> <span
  m='150570'>over</span> <span m='151250'>2</span> <span
  m='151630'>factorial,</span> <span m='152830'>and</span> <span
  m='153060'>so</span> <span m='153260'>on.</span> </p><p><span
  m='155990'>And</span> <span m='156110'>I</span> <span m='156170'>look</span>
  <span m='156460'>at</span> <span m='156590'>that.</span> <span
  m='158040'>And</span> <span m='158250'>I</span> <span m='158360'>say</span>
  <span m='158690'>it's</span> <span m='158900'>very</span> <span
  m='159270'>much</span> <span m='159580'>like</span> <span
  m='159810'>the</span> <span m='159940'>one</span> <span
  m='160200'>above.</span> <span m='161240'>Look.</span> <span
  m='161970'>This</span> <span m='163050'>series</span> <span
  m='163890'>is</span> <span m='164180'>just</span> <span m='165060'>A</span>
  <span m='165630'>times</span> <span m='166250'>this</span> <span
  m='166490'>one.</span> <span m='167130'>Multiply</span> <span
  m='167750'>the</span> <span m='167980'>top</span> <span m='168290'>one</span>
  <span m='168470'>by</span> <span m='168780'>A.</span> <span
  m='169500'>A</span> <span m='169740'>times</span> <span m='170080'>I</span>
  <span m='170420'>is A.</span> <span m='171210'>A</span> <span
  m='171430'>times</span> <span m='171740'>A t</span> <span m='172260'>is</span>
  <span m='172420'>A</span> <span m='172590'>squared</span> <span
  m='173140'>t.</span> <span m='173860'>Term</span> <span m='174160'>by</span>
  <span m='174330'>term,</span> <span m='175100'>it</span> <span
  m='175200'>just</span> <span m='175460'>has</span> <span m='175640'>a</span>
  <span m='175760'>factor</span> <span m='176240'>A.</span> </p><p><span
  m='176990'>So</span> <span m='177210'>it's</span> <span m='177540'>A</span>
  <span m='178960'>e</span> <span m='179330'>to</span> <span
  m='179470'>the</span> <span m='179710'>A t,</span> <span m='181006'>is</span>
  <span m='181440'>the</span> <span m='181590'>derivative</span> <span
  m='182210'>of</span> <span m='182470'>my</span> <span m='183490'>matrix</span>
  <span m='184090'>exponential.</span> <span m='184930'>It</span> <span
  m='185110'>brings</span> <span m='185410'>down</span> <span
  m='185690'>an</span> <span m='185850'>A.</span> <span m='186200'>Just</span>
  <span m='186840'>what</span> <span m='187100'>we</span> <span
  m='187230'>want.</span> <span m='188030'>Just</span> <span
  m='188340'>what</span> <span m='188530'>we</span> <span
  m='188680'>want.</span> </p><p><span m='189970'>So</span> <span
  m='190220'>then</span> <span m='192630'>if</span> <span m='192850'>I</span>
  <span m='193000'>add</span> <span m='193340'>a</span> <span
  m='193460'>y</span> <span m='193800'>of</span> <span m='193940'>0</span> <span
  m='194510'>in</span> <span m='194720'>here,</span> <span
  m='196150'>that's</span> <span m='196430'>just</span> <span
  m='196640'>a</span> <span m='196720'>constant</span> <span
  m='197260'>vector.</span> <span m='197870'>I'll</span> <span
  m='198130'>have</span> <span m='198360'>a</span> <span m='198440'>y</span>
  <span m='198730'>of</span> <span m='198890'>0.</span> <span
  m='199033'>I'll</span> <span m='199176'>have</span> <span m='199320'>a
  y</span> <span m='199570'>of</span> <span m='200050'>0</span> <span
  m='200540'>here.</span> <span m='202550'>When</span> <span m='202850'>I</span>
  <span m='202980'>put</span> <span m='203240'>this</span> <span
  m='203470'>into</span> <span m='203730'>the</span> <span
  m='203890'>differential</span> <span m='204420'>equation,</span> <span
  m='205250'>it</span> <span m='205410'>works.</span> <span m='206470'>It</span>
  <span m='206610'>works.</span> </p><p><span m='207760'>Now,</span> <span
  m='209300'>is</span> <span m='209490'>it</span> <span m='209680'>better</span>
  <span m='210760'>than</span> <span m='210960'>what</span> <span
  m='211160'>we</span> <span m='211290'>had</span> <span
  m='211540'>before,</span> <span m='212030'>which</span> <span
  m='212290'>was</span> <span m='213120'>using</span> <span
  m='213610'>eigenvalues</span> <span m='214390'>and</span> <span
  m='214550'>eigenvectors?</span> <span m='216570'>It's</span> <span
  m='216830'>better</span> <span m='217230'>in</span> <span
  m='217340'>one</span> <span m='217620'>way.</span> <span
  m='219650'>This</span> <span m='220050'>exponential,</span> <span
  m='220900'>this</span> <span m='221120'>series,</span> <span
  m='221680'>is</span> <span m='221920'>totally</span> <span
  m='222370'>fine</span> <span m='223620'>whether</span> <span
  m='223960'>we</span> <span m='224150'>have</span> <span m='225240'>n</span>
  <span m='225780'>independent</span> <span m='226510'>eigenvectors</span> <span
  m='227540'>or</span> <span m='227750'>not.</span> <span m='228910'>We</span>
  <span m='229060'>could</span> <span m='229240'>have</span> <span
  m='229480'>repeated</span> <span m='230100'>eigenvalues.</span> </p><p><span
  m='230940'>I'll</span> <span m='231100'>do</span> <span m='231290'>an</span>
  <span m='231390'>example.</span> <span m='232750'>So</span> <span
  m='232990'>for</span> <span m='233290'>with</span> <span
  m='233550'>repeated</span> <span m='234170'>eigenvalues</span> <span
  m='235140'>and</span> <span m='235480'>missing</span> <span
  m='235940'>eigenvectors,</span> <span m='237420'>e</span> <span
  m='237710'>to</span> <span m='237790'>the</span> <span m='237960'>A t</span>
  <span m='238340'>is</span> <span m='238480'>still</span> <span
  m='238850'>the</span> <span m='238930'>correct</span> <span
  m='239330'>answer.</span> <span m='240360'>Still</span> <span
  m='240670'>the</span> <span m='240730'>correct</span> <span
  m='241130'>answer.</span> <span m='241810'>But</span> <span
  m='242040'>if</span> <span m='242200'>we</span> <span m='242420'>want</span>
  <span m='242820'>to</span> <span m='243590'>use</span> <span
  m='244240'>eigenvalues</span> <span m='245020'>and</span> <span
  m='245180'>eigenvectors</span> <span m='246850'>to</span> <span
  m='247360'>compute</span> <span m='248690'>e</span> <span m='248920'>to</span>
  <span m='249000'>the</span> <span m='249190'>A t,</span> <span
  m='249410'>because</span> <span m='250070'>we</span> <span
  m='250230'>don't</span> <span m='250450'>want</span> <span
  m='250640'>to</span> <span m='251250'>add</span> <span m='251490'>up</span>
  <span m='251640'>an</span> <span m='251780'>infinite</span> <span
  m='252280'>series</span> <span m='252680'>very</span> <span
  m='253010'>often,</span> <span m='255050'>then</span> <span
  m='255430'>we</span> <span m='255600'>would</span> <span
  m='255840'>want</span> <span m='256190'>n</span> <span
  m='256490'>independent</span> <span m='257160'>eigenvectors.</span>
  </p><p><span m='257990'>So</span> <span m='258269'>what</span> <span
  m='258440'>am</span> <span m='258570'>I</span> <span m='258690'>saying?</span>
  <span m='259374'>I'm</span> <span m='259779'>saying</span> <span
  m='260039'>that</span> <span m='260300'>this</span> <span m='260600'>e</span>
  <span m='260790'>to</span> <span m='260860'>the</span> <span m='261050'>A
  t--</span> <span m='262535'>All right,</span> <span m='263100'>suppose</span>
  <span m='263590'>we</span> <span m='263770'>have</span> <span
  m='264230'>n</span> <span m='264940'>independent</span> <span
  m='267450'>eigenvectors.</span> <span m='270870'>And</span> <span
  m='271110'>we</span> <span m='271260'>know that</span> <span
  m='271530'>that</span> <span m='272000'>means,</span> <span
  m='272520'>in</span> <span m='272650'>that</span> <span
  m='272940'>case,</span> <span m='273410'>a</span> <span m='274070'>is</span>
  <span m='275120'>V</span> <span m='276180'>times</span> <span
  m='276600'>lambda</span> <span m='277630'>times</span> <span
  m='278000'>V</span> <span m='278190'>inverse.</span> <span
  m='279450'>And</span> <span m='279680'>we</span> <span m='279810'>can</span>
  <span m='279960'>write</span> <span m='280310'>V</span> <span
  m='280530'>inverse</span> <span m='281220'>because</span> <span
  m='281660'>the</span> <span m='281770'>matrix</span> <span m='282360'>V</span>
  <span m='282760'>has</span> <span m='283110'>the</span> <span
  m='283280'>eigenvectors.</span> </p><p><span m='284710'>This</span> <span
  m='284900'>is</span> <span m='285040'>the</span> <span
  m='285200'>eigenvector</span> <span m='285970'>matrix.</span> <span
  m='287040'>If</span> <span m='287240'>I</span> <span m='287380'>have</span>
  <span m='287700'>n</span> <span m='288080'>independent</span> <span
  m='288760'>eigenvectors,</span> <span m='289930'>that</span> <span
  m='290160'>matrix</span> <span m='290690'>is</span> <span
  m='290820'>invertible.</span> <span m='291840'>I</span> <span
  m='291930'>have</span> <span m='292080'>that</span> <span
  m='292290'>nice</span> <span m='292590'>formula.</span> <span
  m='293570'>And</span> <span m='293590'>now</span> <span m='293840'>I</span>
  <span m='293980'>can</span> <span m='294470'>see</span> <span
  m='294790'>what</span> <span m='295050'>is--</span> <span m='295620'>e</span>
  <span m='296050'>to</span> <span m='296190'>the</span> <span m='296350'>A
  t</span> <span m='298150'>is</span> <span m='299050'>always</span> <span
  m='299610'>identity</span> <span m='301080'>plus</span> <span
  m='302236'>A.</span> </p><p><span m='303110'>I'm</span> <span
  m='303280'>now</span> <span m='303530'>going</span> <span m='303740'>to</span>
  <span m='303790'>use</span> <span m='304710'>the</span> <span
  m='305750'>diagonalization,</span> <span m='307630'>the</span> <span
  m='308350'>eigenvectors,</span> <span m='309500'>and</span> <span
  m='309660'>the</span> <span m='309800'>eigenvalues</span> <span
  m='311130'>for</span> <span m='311450'>A.</span> <span m='314350'>So</span>
  <span m='314520'>I'm</span> <span m='314750'>doing</span> <span
  m='315010'>the</span> <span m='315130'>good</span> <span
  m='315370'>case</span> <span m='315760'>now,</span> <span
  m='316680'>when</span> <span m='316920'>there</span> <span
  m='317150'>are</span> <span m='317820'>a</span> <span m='318630'>full</span>
  <span m='318920'>set</span> <span m='319160'>of</span> <span
  m='319260'>independent</span> <span m='319850'>eigenvectors.</span> <span
  m='320970'>Then</span> <span m='322100'>the</span> <span m='322460'>A t</span>
  <span m='323825'>is</span> <span m='324320'>V</span> <span
  m='325224'>lambda</span> <span m='326580'>V</span> <span
  m='326890'>inverse</span> <span m='327810'>t.</span> <span
  m='328390'>That's</span> <span m='328680'>right,</span> <span
  m='329470'>that's</span> <span m='329890'>I,</span> <span
  m='330330'>plus</span> <span m='330590'>A t,</span> <span
  m='331780'>plus</span> <span m='332340'>1/2</span> <span m='333976'>A t</span>
  <span m='335400'>squared.</span> <span m='336190'>Right?</span> </p><p><span
  m='337110'>So</span> <span m='337420'>I</span> <span m='337530'>need</span>
  <span m='337870'>A</span> <span m='338120'>squared.</span> <span
  m='339190'>So</span> <span m='339400'>everybody</span> <span
  m='339940'>remembers</span> <span m='340620'>what</span> <span
  m='340860'>A</span> <span m='341040'>squared</span> <span
  m='341560'>is.</span> <span m='344050'>A</span> <span
  m='344240'>squared</span> <span m='344760'>is</span> <span m='345060'>V</span>
  <span m='345870'>lambda</span> <span m='346580'>V</span> <span
  m='346860'>inverse,</span> <span m='347590'>times</span> <span
  m='348040'>V</span> <span m='348950'>lambda</span> <span m='349960'>V</span>
  <span m='350210'>inverse.</span> <span m='351190'>And</span> <span
  m='351450'>those</span> <span m='352820'>cancel</span> <span
  m='353400'>out</span> <span m='353720'>to</span> <span m='353850'>give</span>
  <span m='354912'>V</span> <span m='356240'>lambda</span> <span
  m='356970'>squared</span> <span m='358770'>V</span> <span
  m='358980'>inverse,</span> <span m='360230'>times</span> <span
  m='361160'>t</span> <span m='361410'>squared,</span> <span
  m='362710'>and</span> <span m='362980'>so</span> <span m='363200'>on.</span>
  </p><p><span m='368780'>You</span> <span m='369010'>remember</span> <span
  m='369500'>this</span> <span m='369800'>A</span> <span
  m='370040'>squared,</span> <span m='370560'>so</span> <span
  m='370710'>I'll</span> <span m='370840'>take</span> <span
  m='371080'>that</span> <span m='371340'>away.</span> <span
  m='373710'>And</span> <span m='374840'>look</span> <span m='375150'>at</span>
  <span m='375280'>what</span> <span m='375460'>I've</span> <span
  m='375630'>got.</span> <span m='376980'>Look</span> <span
  m='377220'>what</span> <span m='377420'>I've</span> <span
  m='377570'>got</span> <span m='377740'>it.</span> <span m='378120'>Yes.</span>
  <span m='379080'>Factor</span> <span m='379610'>V</span> <span
  m='380130'>out</span> <span m='380340'>of</span> <span m='380440'>the</span>
  <span m='380560'>start,</span> <span m='382630'>and</span> <span
  m='382820'>factor</span> <span m='383230'>V</span> <span
  m='383480'>inverse</span> <span m='384545'>out</span> <span
  m='384800'>of</span> <span m='385050'>the</span> <span m='385220'>end.</span>
  </p><p><span m='385990'>And</span> <span m='386190'>in</span> <span
  m='386420'>here</span> <span m='386900'>I</span> <span m='387030'>have</span>
  <span m='388880'>V</span> <span m='389170'>times</span> <span
  m='389580'>V</span> <span m='389780'>inverse</span> <span m='390290'>is</span>
  <span m='390700'>I,</span> <span m='391140'>so</span> <span
  m='391400'>that's</span> <span m='391850'>fine.</span> <span
  m='392760'>V</span> <span m='393190'>times</span> <span m='393530'>V</span>
  <span m='393720'>inverse,</span> <span m='394270'>I</span> <span
  m='394370'>have</span> <span m='394470'>a</span> <span
  m='394570'>lambda</span> <span m='395190'>t.</span> <span m='397460'>V</span>
  <span m='397775'>and</span> <span m='398090'>a</span> <span
  m='398220'>V</span> <span m='398590'>inverse,</span> <span
  m='399440'>so</span> <span m='399630'>I</span> <span m='399760'>have a</span>
  <span m='400120'>1/2</span> <span m='400710'>half</span> <span
  m='403700'>lambda</span> <span m='404210'>squared</span> <span
  m='405870'>t</span> <span m='406130'>squared.</span> <span
  m='407470'>And</span> <span m='407690'>so</span> <span m='407930'>on,</span>
  <span m='409630'>times</span> <span m='409940'>V</span> <span
  m='410110'>inverse.</span> </p><p><span m='412130'>This</span> <span
  m='412290'>is</span> <span m='412450'>all</span> <span m='413100'>just</span>
  <span m='413410'>what</span> <span m='413830'>we</span> <span
  m='413970'>hope</span> <span m='414260'>for.</span> <span m='415120'>We</span>
  <span m='415370'>expect</span> <span m='415765'>that</span> <span
  m='416160'>a</span> <span m='416200'>V</span> <span m='416560'>goes</span>
  <span m='416920'>out</span> <span m='417170'>at</span> <span
  m='417280'>the</span> <span m='417400'>far</span> <span m='417960'>left</span>
  <span m='418490'>at</span> <span m='418610'>the</span> <span
  m='418710'>front.</span> <span m='419590'>This</span> <span
  m='419870'>V</span> <span m='420090'>inverse</span> <span
  m='420750'>comes</span> <span m='421010'>out</span> <span m='421250'>at</span>
  <span m='421330'>the</span> <span m='421420'>far</span> <span
  m='421800'>right.</span> <span m='422400'>And</span> <span
  m='422690'>what</span> <span m='423000'>do you</span> <span
  m='423220'>see</span> <span m='423460'>in</span> <span m='423580'>the</span>
  <span m='423660'>middle?</span> </p><p><span m='424800'>You</span> <span
  m='425060'>see--</span> <span m='426250'>so</span> <span
  m='426440'>this</span> <span m='426690'>is</span> <span m='426900'>now</span>
  <span m='427140'>my</span> <span m='427400'>formula</span> <span
  m='427970'>for</span> <span m='428150'>e</span> <span m='428380'>to</span>
  <span m='428450'>the</span> <span m='428660'>A t,</span> <span
  m='430820'>is</span> <span m='431310'>V.</span> <span m='433010'>And</span>
  <span m='433380'>what</span> <span m='433600'>do</span> <span
  m='433740'>I</span> <span m='433860'>have</span> <span
  m='434150'>there?</span> <span m='435570'>I</span> <span
  m='435710'>have</span> <span m='436080'>the</span> <span
  m='436230'>exponential</span> <span m='437020'>series</span> <span
  m='438360'>for</span> <span m='438960'>lambda</span> <span
  m='439450'>t.</span> <span m='440270'>So</span> <span m='440470'>it's</span>
  <span m='440650'>e</span> <span m='441730'>to</span> <span
  m='441890'>the</span> <span m='442070'>lambda</span> <span m='442740'>t</span>
  <span m='443942'>V</span> <span m='444390'>inverse.</span> </p><p><span
  m='446300'>And</span> <span m='446500'>what</span> <span m='446700'>is</span>
  <span m='447050'>e</span> <span m='447290'>to</span> <span
  m='447390'>the</span> <span m='447540'>lambda</span> <span
  m='448010'>t?</span> <span m='448420'>Let's</span> <span
  m='448750'>just</span> <span m='448970'>understand</span> <span
  m='449580'>the</span> <span m='449660'>matrix</span> <span
  m='450190'>exponential.</span> <span m='451460'>When</span> <span
  m='451740'>the</span> <span m='451840'>matrix</span> <span
  m='452390'>is</span> <span m='452550'>diagonal,</span> <span
  m='453250'>the</span> <span m='453350'>best</span> <span
  m='453650'>possible</span> <span m='454120'>matrix,</span> <span
  m='455070'>this</span> <span m='455280'>will</span> <span m='455470'>be</span>
  <span m='455680'>V.</span> <span m='456961'>What</span> <span
  m='457390'>does</span> <span m='457550'>my</span> <span
  m='457780'>matrix</span> <span m='458360'>look</span> <span
  m='458520'>like?</span> <span m='459660'>V</span> <span
  m='459890'>inverse.</span> </p><p><span m='461240'>If</span> <span
  m='461430'>I'm</span> <span m='462060'>looking</span> <span
  m='462470'>at</span> <span m='462620'>this,</span> <span
  m='463030'>looking</span> <span m='463380'>at</span> <span
  m='463530'>this.</span> <span m='464230'>Lambda</span> <span
  m='464680'>is</span> <span m='464810'>diagonal.</span> <span
  m='465610'>All</span> <span m='465810'>these</span> <span
  m='466020'>matrices</span> <span m='466670'>are</span> <span
  m='466770'>diagonal</span> <span m='468600'>with</span> <span
  m='468830'>lambdas.</span> <span m='469780'>So</span> <span
  m='469970'>that'll</span> <span m='470270'>be</span> <span m='470430'>e</span>
  <span m='470910'>to</span> <span m='471040'>the</span> <span
  m='471190'>lambda</span> <span m='471710'>1t</span> <span
  m='473200'>down</span> <span m='473590'>to</span> <span m='474290'>e</span>
  <span m='474730'>to</span> <span m='474880'>the</span> <span
  m='475020'>lambda</span> <span m='475550'>nt.</span> </p><p><span
  m='479320'>I'm</span> <span m='479510'>not</span> <span
  m='479740'>doing</span> <span m='479980'>anything</span> <span
  m='480360'>brilliant</span> <span m='480870'>here.</span> <span
  m='482920'>I'm</span> <span m='483120'>just</span> <span
  m='483380'>using</span> <span m='483920'>the</span> <span
  m='484380'>standard</span> <span m='485900'>diagonalization</span> <span
  m='490730'>to</span> <span m='491060'>produce</span> <span
  m='491630'>our</span> <span m='493520'>exponential</span> <span
  m='495200'>from</span> <span m='495660'>the</span> <span
  m='495970'>eigenvector</span> <span m='496850'>matrix</span> <span
  m='498060'>and</span> <span m='498410'>from</span> <span m='498610'>the</span>
  <span m='498770'>eigenvalues.</span> <span m='499760'>So</span> <span
  m='500420'>I'm</span> <span m='500600'>just</span> <span
  m='500870'>taking</span> <span m='501230'>the</span> <span
  m='501370'>exponentials</span> <span m='502600'>of</span> <span
  m='502770'>the</span> <span m='502960'>n</span> <span
  m='503300'>different</span> <span m='503710'>eigenvalues.</span> </p><p><span
  m='504900'>So</span> <span m='505120'>e</span> <span m='505360'>to</span>
  <span m='505450'>the</span> <span m='505936'>A t.</span> <span
  m='509830'>This</span> <span m='510110'>would</span> <span
  m='510320'>lead</span> <span m='510690'>to</span> <span m='511010'>e</span>
  <span m='511300'>to</span> <span m='511430'>the</span> <span m='511640'>A
  t</span> <span m='512891'>y</span> <span m='513309'>at</span> <span
  m='513450'>0,</span> <span m='515120'>would</span> <span
  m='515330'>be--</span> <span m='516490'>y</span> <span m='516820'>of</span>
  <span m='516909'>0</span> <span m='517320'>is</span> <span
  m='517409'>some</span> <span m='517669'>combination.</span> <span
  m='518669'>And</span> <span m='518830'>then</span> <span
  m='519030'>there's</span> <span m='519260'>an</span> <span m='519510'>e</span>
  <span m='519900'>to</span> <span m='520039'>the</span> <span
  m='520140'>lambda</span> <span m='520960'>1t</span> <span
  m='522049'>coming</span> <span m='522470'>from</span> <span
  m='522710'>here.</span> <span m='523770'>And</span> <span
  m='524620'>there's</span> <span m='524880'>an</span> <span m='525050'>x</span>
  <span m='526670'>eigenvector</span> <span m='527750'>x1,</span> <span
  m='528380'>plus</span> <span m='529130'>C2</span> <span m='530440'>e</span>
  <span m='530670'>to</span> <span m='530770'>the</span> <span
  m='530910'>lambda</span> <span m='531500'>2t</span> <span
  m='532030'>x2,</span> <span m='534110'>so</span> <span m='534395'>on.</span>
  </p><p><span m='534680'>That's</span> <span m='535020'>the</span> <span
  m='535160'>solution</span> <span m='535990'>that</span> <span
  m='536130'>we</span> <span m='536250'>had</span> <span m='536490'>last</span>
  <span m='536820'>time.</span> <span m='537910'>That's</span> <span
  m='538230'>the</span> <span m='538330'>solution</span> <span
  m='539690'>that</span> <span m='540060'>using</span> <span
  m='540560'>eigenvalues</span> <span m='541320'>and</span> <span
  m='541490'>eigenvectors.</span> </p><p><span m='542730'>Now.</span> <span
  m='543100'>Can</span> <span m='544750'>Can</span> <span m='544990'>I</span>
  <span m='546310'>get</span> <span m='546530'>something</span> <span
  m='546930'>new</span> <span m='547210'>here?</span> <span
  m='548240'>Something</span> <span m='548700'>new</span> <span
  m='548920'>will</span> <span m='549140'>be,</span> <span
  m='549660'>suppose</span> <span m='550280'>there</span> <span
  m='550610'>are</span> <span m='550760'>not</span> <span m='552120'>a</span>
  <span m='552230'>full</span> <span m='552530'>set</span> <span
  m='552920'>of</span> <span m='553090'>n</span> <span
  m='553440'>independent</span> <span m='554110'>eigenvectors.</span> <span
  m='555880'>e</span> <span m='556130'>to</span> <span m='556210'>the</span>
  <span m='556290'>A t</span> <span m='556370'>is</span> <span
  m='556890'>still</span> <span m='557190'>OK.</span> <span
  m='558910'>But</span> <span m='561070'>this</span> <span
  m='561280'>formula</span> <span m='561800'>is</span> <span
  m='562010'>no</span> <span m='562200'>good.</span> <span
  m='563130'>That</span> <span m='563390'>formula</span> <span
  m='563820'>depends</span> <span m='564300'>on</span> <span m='564460'>V and
  V</span> <span m='565200'>inverse.</span> </p><p><span m='565720'>And</span>
  <span m='566260'>suppose</span> <span m='566840'>we</span> <span
  m='567010'>have</span> <span m='567220'>an</span> <span
  m='567310'>example.</span> <span m='568210'>So</span> <span
  m='568420'>all</span> <span m='568650'>that</span> <span m='569220'>is</span>
  <span m='569370'>very</span> <span m='569680'>nice.</span> <span
  m='571230'>That's</span> <span m='571460'>what</span> <span
  m='571750'>we</span> <span m='571970'>expect.</span> </p><p><span
  m='573480'>But</span> <span m='575210'>we</span> <span m='575490'>could</span>
  <span m='575700'>have</span> <span m='575920'>a</span> <span
  m='576010'>matrix</span> <span m='577380'>like</span> <span
  m='577720'>this</span> <span m='578030'>one.</span> <span m='578640'>A</span>
  <span m='579190'>equals--</span> <span m='580390'>well,</span> <span
  m='580780'>here's</span> <span m='581080'>an</span> <span
  m='581240'>extreme</span> <span m='581900'>case.</span> </p><p><span
  m='586250'>What</span> <span m='586480'>are</span> <span m='586520'>the</span>
  <span m='586710'>eigenvalues</span> <span m='587480'>of</span> <span
  m='587580'>that</span> <span m='587830'>matrix?</span> <span
  m='588740'>It's</span> <span m='588960'>a</span> <span
  m='589050'>diagonal</span> <span m='589660'>matrix.</span> <span
  m='590200'>The</span> <span m='590370'>eigenvalues</span> <span
  m='591230'>are</span> <span m='591410'>0</span> <span m='591950'>and</span>
  <span m='592130'>0.</span> <span m='593030'>The</span> <span
  m='593170'>eigenvalue of</span> <span m='593910'>0</span> <span
  m='594420'>is</span> <span m='594590'>repeated.</span> <span
  m='595890'>It's</span> <span m='595970'>a</span> <span
  m='596070'>double</span> <span m='596520'>eigenvalue.</span> </p><p><span
  m='597800'>And</span> <span m='597970'>we</span> <span m='598100'>hope</span>
  <span m='598440'>for</span> <span m='598610'>two</span> <span
  m='598930'>eigenvectors,</span> <span m='600760'>but</span> <span
  m='600960'>we</span> <span m='601080'>don't</span> <span
  m='601340'>find</span> <span m='601630'>them.</span> <span
  m='602710'>That</span> <span m='602960'>has</span> <span
  m='603290'>only</span> <span m='603660'>one</span> <span
  m='604140'>line</span> <span m='604510'>of</span> <span
  m='604650'>eigenvectors.</span> <span m='605510'>It</span> <span
  m='605670'>only</span> <span m='605950'>has</span> <span m='606210'>an</span>
  <span m='606350'>x1</span> <span m='607130'>equals</span> <span
  m='608570'>1,</span> <span m='608980'>0,</span> <span m='609225'>I
  think.</span> <span m='610530'>If</span> <span m='610670'>I</span> <span
  m='610750'>multiply</span> <span m='611470'>that</span> <span
  m='612620'>A,</span> <span m='613040'>times</span> <span
  m='613450'>that</span> <span m='613690'>x1,</span> <span
  m='614450'>gives</span> <span m='614700'>me</span> <span m='614940'>0</span>
  <span m='615470'>times</span> <span m='615840'>x1.</span> <span
  m='616480'>That's</span> <span m='616760'>an</span> <span
  m='616910'>eigenvector.</span> </p><p><span m='619440'>Well,</span> <span
  m='619710'>because</span> <span m='620050'>the</span> <span
  m='620190'>eigenvalue</span> <span m='620900'>is</span> <span
  m='621040'>0,</span> <span m='621410'>I'm</span> <span
  m='621610'>looking</span> <span m='622030'>for</span> <span
  m='622840'>the</span> <span m='623000'>null</span> <span
  m='623310'>space.</span> <span m='624330'>There</span> <span
  m='624830'>is</span> <span m='625100'>in</span> <span m='625320'>the</span>
  <span m='625450'>null</span> <span m='625740'>space,</span> <span
  m='626170'>but</span> <span m='627600'>the</span> <span m='627720'>null</span>
  <span m='627930'>space</span> <span m='628270'>is</span> <span
  m='628440'>only</span> <span m='628750'>one-dimensional.</span> <span
  m='630490'>Only</span> <span m='630800'>one</span> <span
  m='631300'>eigenvector.</span> <span m='632460'>Missing</span> <span
  m='632920'>an eigenvector.</span> </p><p><span m='634090'>Still,</span> <span
  m='635746'>still,</span> <span m='636160'>I</span> <span m='636310'>can</span>
  <span m='636570'>do</span> <span m='637070'>e</span> <span
  m='637460'>to</span> <span m='637620'>the</span> <span m='637940'>A t.</span>
  <span m='639210'>That's</span> <span m='639480'>still</span> <span
  m='639890'>completely</span> <span m='640510'>correct.</span> <span
  m='641170'>That</span> <span m='641470'>series</span> <span
  m='641940'>will</span> <span m='642180'>work.</span> </p><p><span
  m='642870'>So</span> <span m='643110'>to</span> <span m='643270'>do</span>
  <span m='643470'>this</span> <span m='643700'>series</span> <span
  m='644180'>I</span> <span m='644310'>need</span> <span m='644600'>to</span>
  <span m='644730'>know</span> <span m='645000'>a</span> <span
  m='645160'>squared.</span> <span m='648150'>So</span> <span
  m='648200'>I'm</span> <span m='648400'>actually</span> <span
  m='648730'>going</span> <span m='648910'>to</span> <span m='648970'>use</span>
  <span m='649320'>the</span> <span m='649490'>series,</span> <span
  m='650340'>but</span> <span m='650500'>you'll</span> <span
  m='650720'>see</span> <span m='651090'>that</span> <span m='651300'>it</span>
  <span m='651610'>cuts</span> <span m='651950'>off</span> <span
  m='652320'>very</span> <span m='652630'>fast.</span> <span m='653530'>a</span>
  <span m='653730'>squared,</span> <span m='654270'>if</span> <span
  m='654700'>you</span> <span m='654830'>work</span> <span
  m='655080'>that</span> <span m='655360'>out,</span> <span
  m='655680'>it's</span> <span m='656120'>all</span> <span
  m='656390'>0's.</span> </p><p><span m='659560'>So</span> <span
  m='659800'>our</span> <span m='660030'>e</span> <span m='660270'>to</span>
  <span m='660360'>the</span> <span m='660560'>A t</span> <span
  m='662210'>is</span> <span m='662480'>just</span> <span m='662950'>I,</span>
  <span m='664150'>plus</span> <span m='664525'>A t,</span> <span
  m='666240'>plus</span> <span m='667370'>STOP.</span> <span m='671700'>A</span>
  <span m='671890'>squared</span> <span m='672410'>is</span> <span
  m='672670'>all</span> <span m='672920'>0's.</span> <span m='673440'>A</span>
  <span m='673590'>cubed</span> <span m='674070'>is</span> <span
  m='674250'>all</span> <span m='674500'>0's.</span> <span m='675240'>So</span>
  <span m='676100'>the</span> <span m='676440'>matrix</span> <span
  m='676950'>e</span> <span m='677095'>to</span> <span m='677240'>the</span>
  <span m='677440'>A t</span> <span m='677990'>is</span> <span
  m='679050'>identity,</span> <span m='680920'>a</span> <span
  m='681210'>times</span> <span m='681770'>t.</span> <span m='682570'>a</span>
  <span m='683370'>is</span> <span m='683710'>this,</span> <span
  m='684130'>times</span> <span m='684570'>t</span> <span m='684870'>is</span>
  <span m='685030'>going</span> <span m='685200'>to</span> <span
  m='685280'>put</span> <span m='685480'>a</span> <span m='685630'>t</span>
  <span m='685990'>there.</span> </p><p><span m='690060'>There</span> <span
  m='690260'>you</span> <span m='690390'>go.</span> <span
  m='692000'>That's</span> <span m='692320'>a</span> <span
  m='692420'>case</span> <span m='693370'>of</span> <span m='693600'>the</span>
  <span m='693750'>matrix</span> <span m='694630'>exponential,</span> <span
  m='695910'>which</span> <span m='696130'>would</span> <span
  m='696310'>lead</span> <span m='696580'>us</span> <span m='696790'>to</span>
  <span m='696910'>the</span> <span m='697340'>solution</span> <span
  m='698020'>of</span> <span m='698150'>the</span> <span
  m='698300'>equations.</span> <span m='700070'>Of</span> <span
  m='700240'>course,</span> <span m='701170'>it's</span> <span
  m='701310'>a</span> <span m='701410'>pretty</span> <span
  m='701710'>simple</span> <span m='702160'>exponential.</span> </p><p><span
  m='706000'>But</span> <span m='706170'>it</span> <span m='706300'>comes</span>
  <span m='706580'>from</span> <span m='706780'>pretty</span> <span
  m='707120'>simple</span> <span m='707540'>equations.</span> <span
  m='708660'>The</span> <span m='708800'>equations</span> <span
  m='710090'>dy</span> <span m='710520'>dt,</span> <span m='711130'>that</span>
  <span m='711400'>system</span> <span m='711850'>of</span> <span
  m='712000'>two</span> <span m='712270'>equations,</span> <span
  m='712900'>with</span> <span m='713110'>that</span> <span
  m='713430'>matrix</span> <span m='714010'>in</span> <span
  m='714180'>it.</span> <span m='715840'>Our</span> <span
  m='716010'>system</span> <span m='716460'>of</span> <span
  m='716590'>equations</span> <span m='717280'>is</span> <span
  m='717490'>just</span> <span m='718200'>dy1</span> <span m='719560'>dt,</span>
  <span m='721690'>I</span> <span m='721860'>have</span> <span
  m='722070'>a</span> <span m='722230'>1</span> <span m='722740'>there</span>
  <span m='723080'>so</span> <span m='723480'>it</span> <span
  m='723500'>would</span> <span m='723610'>be</span> <span m='723850'>a</span>
  <span m='724070'>y2.</span> <span m='725170'>And</span> <span
  m='725610'>dy2</span> <span m='726240'>dt</span> <span m='730140'>is</span>
  <span m='730630'>0</span> <span m='732240'>on</span> <span
  m='732340'>the</span> <span m='732490'>second</span> <span
  m='732870'>row.</span> </p><p><span m='733930'>Well,</span> <span
  m='734750'>that's</span> <span m='735020'>pretty</span> <span
  m='735340'>easy</span> <span m='735600'>to</span> <span
  m='735730'>solve.</span> <span m='737000'>In</span> <span
  m='737150'>fact,</span> <span m='737500'>this</span> <span
  m='737800'>tells</span> <span m='738100'>you</span> <span
  m='738240'>how</span> <span m='738520'>to</span> <span
  m='738660'>solve--</span> <span m='739660'>you</span> <span
  m='739860'>could</span> <span m='740050'>naturally</span> <span
  m='740510'>ask</span> <span m='740760'>the</span> <span
  m='740870'>question,</span> <span m='741770'>how</span> <span
  m='741990'>do</span> <span m='742100'>we</span> <span m='742270'>solve</span>
  <span m='742910'>differential</span> <span m='743450'>equations</span> <span
  m='744460'>when</span> <span m='745050'>the</span> <span
  m='746210'>matrix</span> <span m='746860'>doesn't</span> <span
  m='747260'>have</span> <span m='747880'>n</span> <span
  m='748025'>eigenvectors?</span> </p><p><span m='749810'>Here's</span> <span
  m='750130'>an</span> <span m='750270'>example.</span> <span
  m='751750'>This</span> <span m='751880'>matrix</span> <span
  m='752380'>has</span> <span m='752570'>only</span> <span m='752860'>one</span>
  <span m='753260'>eigenvector.</span> <span m='754130'>But</span> <span
  m='754370'>the</span> <span m='754640'>equation</span> <span
  m='755400'>that</span> <span m='755910'>we</span> <span m='756130'>just</span>
  <span m='756350'>solved</span> <span m='756860'>by,</span> <span
  m='757210'>you</span> <span m='757430'>could</span> <span
  m='757620'>say,</span> <span m='757820'>back</span> <span
  m='758230'>substitution.</span> <span m='759450'>This</span> <span
  m='759850'>gives</span> <span m='760200'>Y2</span> <span
  m='761610'>equal</span> <span m='762120'>constant.</span> <span
  m='765170'>And</span> <span m='765430'>then</span> <span
  m='766900'>that</span> <span m='767440'>equation,</span> <span
  m='767950'>dy1</span> <span m='768770'>dt</span> <span m='769270'>equal</span>
  <span m='769610'>that</span> <span m='769870'>constant,</span> <span
  m='770480'>gives</span> <span m='770770'>me</span> <span m='771330'>y1</span>
  <span m='772400'>equals</span> <span m='773130'>t</span> <span
  m='773750'>times</span> <span m='774330'>constant.</span> <span
  m='780120'>That's</span> <span m='780360'>what</span> <span
  m='780560'>I'm</span> <span m='780730'>seeing.</span> </p><p><span
  m='781290'>Oh.</span> <span m='781690'>Yeah.</span> <span
  m='783490'>Are</span> <span m='783640'>you</span> <span
  m='783770'>surprised</span> <span m='784390'>to</span> <span
  m='784520'>see</span> <span m='784750'>a</span> <span m='784890'>t</span>
  <span m='785300'>show</span> <span m='785590'>up</span> <span
  m='785850'>here?</span> <span m='786570'>Normally</span> <span
  m='787080'>I</span> <span m='787170'>don't</span> <span m='787500'>see</span>
  <span m='787700'>a</span> <span m='787820'>t</span> <span m='788300'>in</span>
  <span m='788520'>matrix</span> <span m='789050'>exponentials.</span> <span
  m='791220'>But</span> <span m='792190'>in</span> <span m='792410'>this</span>
  <span m='792720'>repeated</span> <span m='793480'>case,</span> <span
  m='794610'>that's</span> <span m='794980'>the</span> <span m='795180'>t</span>
  <span m='795610'>that</span> <span m='795780'>we're</span> <span
  m='796040'>always</span> <span m='796420'>seeing</span> <span
  m='797050'>when</span> <span m='797290'>we</span> <span m='797400'>have</span>
  <span m='797670'>repeated</span> <span m='798320'>solutions.</span>
  </p><p><span m='799150'>Everybody</span> <span m='799610'>remembers</span>
  <span m='800760'>that</span> <span m='800920'>when</span> <span
  m='801110'>we</span> <span m='801250'>have</span> <span
  m='801930'>second-order</span> <span m='802880'>equations,</span> <span
  m='803740'>and</span> <span m='803960'>we</span> <span m='804110'>have</span>
  <span m='804920'>the</span> <span m='805200'>two</span> <span
  m='806092'>exponents</span> <span m='807120'>are</span> <span
  m='807250'>the</span> <span m='807410'>same.</span> <span m='809520'>So</span>
  <span m='809710'>we</span> <span m='809860'>only</span> <span
  m='810100'>get</span> <span m='810310'>one</span> <span
  m='810650'>solution</span> <span m='811320'>of</span> <span
  m='811440'>that,</span> <span m='812090'>e</span> <span m='812340'>to</span>
  <span m='812430'>the</span> <span m='812620'>st.</span> <span
  m='813260'>And</span> <span m='813370'>we</span> <span m='813480'>have</span>
  <span m='813610'>to</span> <span m='813750'>look</span> <span
  m='814020'>for</span> <span m='814190'>another</span> <span
  m='814530'>one.</span> <span m='815090'>And</span> <span
  m='815270'>that</span> <span m='815460'>other</span> <span
  m='815720'>one</span> <span m='815990'>is?</span> <span m='817040'>te</span>
  <span m='817730'>to</span> <span m='817810'>the</span> <span
  m='817980'>st.</span> <span m='818510'>It's</span> <span
  m='818730'>that</span> <span m='819050'>same</span> <span m='819510'>t</span>
  <span m='819960'>there.</span> </p><p><span m='820800'>OK.</span> <span
  m='822470'>There</span> <span m='822800'>is</span> <span m='822890'>an</span>
  <span m='823040'>example</span> <span m='824120'>of</span> <span
  m='824250'>how</span> <span m='825170'>a</span> <span m='825300'>matrix</span>
  <span m='826170'>with</span> <span m='827050'>a</span> <span
  m='827170'>missing</span> <span m='827700'>eigenvector,</span> <span
  m='830130'>the</span> <span m='830310'>exponential</span> <span
  m='832990'>pops</span> <span m='833330'>a</span> <span m='833430'>t</span>
  <span m='833770'>in.</span> <span m='834840'>The</span> <span
  m='834970'>exponential</span> <span m='835680'>pops</span> <span
  m='835960'>a</span> <span m='836150'>t</span> <span m='836305'>in.</span>
  </p><p><span m='836840'>And</span> <span m='837080'>if</span> <span
  m='837230'>I</span> <span m='837350'>had</span> <span m='837570'>two</span>
  <span m='837810'>missing</span> <span m='838240'>eigenvectors,</span> <span
  m='839810'>then</span> <span m='840820'>in</span> <span m='841030'>the</span>
  <span m='841150'>exponential.</span> <span m='841800'>Shall</span> <span
  m='842030'>I</span> <span m='842120'>just</span> <span m='842720'>show</span>
  <span m='842970'>you</span> <span m='843170'>an</span> <span
  m='843250'>example</span> <span m='843760'>with</span> <span
  m='843940'>two</span> <span m='844190'>missing</span> <span
  m='844600'>eigenvectors?</span> </p><p><span m='845910'>Let</span> <span
  m='846450'>a</span> <span m='846910'>be--</span> <span m='847330'>well,</span>
  <span m='848070'>here it</span> <span m='848350'>would</span> <span
  m='848570'>be</span> <span m='849760'>0,</span> <span m='850370'>0,</span>
  <span m='850950'>0,</span> <span m='851690'>0,</span> <span
  m='852340'>0,</span> <span m='853490'>triple</span> <span m='853970'>0,</span>
  <span m='855350'>with,</span> <span m='855890'>let's</span> <span
  m='856610'>say.</span> <span m='859860'>There's</span> <span
  m='860100'>a</span> <span m='860190'>matrix</span> <span
  m='862710'>with</span> <span m='863530'>three</span> <span m='864000'>0</span>
  <span m='864620'>eigenvalues,</span> <span m='865890'>but</span> <span
  m='866070'>only</span> <span m='866350'>one</span> <span
  m='866710'>eigenvector.</span> <span m='868010'>So</span> <span
  m='868170'>it's</span> <span m='868320'>missing</span> <span
  m='868950'>two</span> <span m='869290'>eigenvectors.</span> <span
  m='870260'>And</span> <span m='870470'>I</span> <span m='870600'>would,</span>
  <span m='871160'>in</span> <span m='871350'>the</span> <span
  m='871530'>end,</span> <span m='871910'>in</span> <span m='872100'>e</span>
  <span m='872340'>to</span> <span m='872430'>the</span> <span m='872620'>A
  t</span> <span m='873260'>here,</span> <span m='874230'>I</span> <span
  m='874430'>would</span> <span m='874680'>see</span> <span
  m='876280'>probably</span> <span m='876680'>1,</span> <span
  m='877220'>1,</span> <span m='877690'>1,</span> <span m='878880'>t,</span>
  <span m='879353'>t,</span> <span m='880300'>and</span> <span
  m='880510'>probably</span> <span m='881090'>I'll</span> <span
  m='881310'>see</span> <span m='881630'>a</span> <span m='881690'>1/2</span>
  <span m='882220'>t</span> <span m='882480'>squared</span> <span
  m='882800'>there.</span> </p><p><span m='886120'>A</span> <span
  m='886190'>little</span> <span m='886460'>bit</span> <span
  m='886640'>like</span> <span m='886890'>that.</span> <span
  m='888160'>But</span> <span m='888410'>one</span> <span m='888650'>step</span>
  <span m='889030'>worse.</span> <span m='889950'>Because</span> <span
  m='891470'>the</span> <span m='891770'>triple</span> <span
  m='893240'>eigenvalue,</span> <span m='894320'>well,</span> <span
  m='894820'>that's</span> <span m='895130'>not</span> <span
  m='895320'>going</span> <span m='895450'>to</span> <span
  m='895490'>happen</span> <span m='895870'>very</span> <span
  m='896160'>often</span> <span m='896550'>in</span> <span
  m='896680'>reality.</span> <span m='897720'>But</span> <span
  m='898490'>we</span> <span m='898730'>see</span> <span m='899030'>what</span>
  <span m='901420'>it</span> <span m='901610'>produces.</span> <span
  m='902530'>It</span> <span m='902710'>produces</span> <span
  m='903290'>a</span> <span m='903420'>t</span> <span m='903690'>squared</span>
  <span m='904960'>as</span> <span m='905160'>well</span> <span
  m='905460'>as</span> <span m='905610'>the</span> <span m='905760'>t's.</span>
  </p><p><span m='906606'>OK.</span> <span m='907452'>So,</span> <span
  m='908300'>the</span> <span m='908420'>x</span> <span m='908670'>matrix</span>
  <span m='909200'>exponential</span> <span m='910110'>gives</span> <span
  m='910340'>a</span> <span m='910660'>beautiful,</span> <span
  m='911300'>concise,</span> <span m='912530'>short</span> <span
  m='912980'>formula</span> <span m='913840'>for</span> <span
  m='914010'>the</span> <span m='914170'>solution.</span> <span
  m='915900'>And</span> <span m='916320'>it</span> <span m='916500'>gives</span>
  <span m='917770'>a</span> <span m='917880'>formula</span> <span
  m='918540'>that's</span> <span m='918880'>correct,</span> <span
  m='921380'>even</span> <span m='921750'>in</span> <span m='921880'>the</span>
  <span m='921990'>case</span> <span m='922910'>of</span> <span
  m='923490'>missing</span> <span m='923970'>eigenvectors.</span> </p><p><span
  m='925690'>Thank</span> <span m='925880'>you.</span> </p>
uid: 94cddcb81d9207ca416d8be0484d1e54
type: course
layout: video
---
