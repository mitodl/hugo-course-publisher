---
about_this_resource_text: "<h2 class=\"subhead\">Description</h2>\r\n<p>Professor Alan Edelman gives this guest lecture on the Julia Language, which was designed for high-performance computing. He provides an overview of how Julia can be used in machine learning and deep learning applications.</p>\r\n<h2 class=\"subhead\">Summary</h2>\r\n<p>Automatic differentiation of each operation in Julia<br />\r\nKey to deep learning: Optimizing many weights<br />\r\nSpeed and simplicity: Computing derivatives and Jacobian matrices</p>\r\n<p>Related sections in textbook: III.3 and VII.2</p>\r\n<p><strong>Instructors:</strong> Prof. Alan Edelman and Prof. Gilbert Strang</p>"
embedded_media:
  - id: Video-YouTube-Stream
    media_location: rZS2LGiurKY
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: Video-YouTube-Stream
    type: Video
    uid: 3d33c41bc2562be1563d2cbff2775607
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/rZS2LGiurKY/default.jpg'
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7c650b07f0b423652291559fd2d662cf
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: rZS2LGiurKY
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 504e6d6125b41a0ba79817d28afa2488
  - id: rZS2LGiurKY.srt
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-36-third-project-alan-edelman-and-julia-language/rZS2LGiurKY.srt
    title: 3play caption file
    type: null
    uid: 791530d9834b57c906b4d339072b060f
  - id: rZS2LGiurKY.pdf
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-36-third-project-alan-edelman-and-julia-language/rZS2LGiurKY.pdf
    title: 3play pdf file
    type: null
    uid: 17528c2faa0ec74a8c7a739136468674
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d6f47f982a637b6a0bb10755b24a22cf
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 07d301f2db14f2d24e877d287430e1b5
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture36_300k.mp4'
    parent_uid: a6cd4ecd57886f69ecd290e51701054a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 805f9f5b2cc32e2c431a6c6dd8fa1537
inline_embed_id: 40991273lecture36thirdprojectalanedelmanandjulialanguage14994732
order_index: 332
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-36-third-project-alan-edelman-and-julia-language
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-36-third-project-alan-edelman-and-julia-language
title: 'Lecture 36: Alan Edelman and Julia Language'
transcript: >-
  <p><span m='1550'>The</span> <span m='1640'>following</span> <span
  m='2090'>content</span> <span m='2600'>is</span> <span
  m='2720'>provided</span> <span m='3170'>under</span> <span m='3380'>a</span>
  <span m='3440'>Creative</span> <span m='3920'>Commons</span> <span
  m='4310'>license.</span> <span m='5310'>Your</span> <span
  m='5390'>support</span> <span m='5900'>will</span> <span m='6050'>help</span>
  <span m='6320'>MIT</span> <span m='6770'>OpenCourseWare</span> <span
  m='7520'>continue</span> <span m='8029'>to</span> <span m='8180'>offer</span>
  <span m='8510'>high</span> <span m='8720'>quality</span> <span
  m='9200'>educational</span> <span m='9860'>resources</span> <span
  m='10430'>for</span> <span m='10550'>free.</span> <span m='11610'>To</span>
  <span m='11630'>make</span> <span m='11840'>a</span> <span
  m='11900'>donation</span> <span m='12680'>or</span> <span m='12800'>to</span>
  <span m='12950'>view</span> <span m='13160'>additional</span> <span
  m='13550'>materials</span> <span m='14180'>from</span> <span
  m='14360'>hundreds</span> <span m='14690'>of</span> <span m='14810'>MIT</span>
  <span m='15170'>courses,</span> <span m='16470'>visit</span> <span
  m='16670'>MIT</span> <span m='17180'>OpenCourseWare</span> <span
  m='18140'>at</span> <span m='18290'>ocw.mit.edu.</span> </p><p><span
  m='23120'>ALAN EDELMAN:</span> <span m='23210'>Hi,</span> <span
  m='23300'>everybody.</span> <span m='23630'>I'm</span> <span
  m='23780'>Alan</span> <span m='23980'>Edelman.</span> <span
  m='24560'>And</span> <span m='26570'>helped</span> <span m='26870'>a</span>
  <span m='26900'>little</span> <span m='27140'>bit</span> <span
  m='27290'>to</span> <span m='27380'>teach</span> <span m='27650'>this</span>
  <span m='27800'>class</span> <span m='28100'>last</span> <span
  m='28400'>year.</span> <span m='29970'>But</span> <span m='30200'>happy</span>
  <span m='30470'>to</span> <span m='30560'>see</span> <span
  m='30890'>that</span> <span m='31070'>it's</span> <span m='31310'>going</span>
  <span m='31700'>great</span> <span m='31970'>this</span> <span
  m='32180'>year.</span> </p><p><span m='32990'>So</span> <span
  m='33500'>Professor</span> <span m='33920'>Strang</span> <span
  m='34340'>came</span> <span m='34820'>to</span> <span m='36050'>teach</span>
  <span m='36400'>18.06.</span> <span m='37040'>Some</span> <span
  m='37250'>of</span> <span m='37340'>you</span> <span m='37430'>may</span>
  <span m='37550'>know</span> <span m='38930'>the</span> <span
  m='39260'>introductory</span> <span m='39710'>linear</span> <span
  m='39920'>algebra</span> <span m='40220'>course.</span> <span
  m='40700'>And</span> <span m='41270'>Professor</span> <span
  m='41660'>Strang</span> <span m='41930'>came</span> <span m='43040'>by</span>
  <span m='43490'>and</span> <span m='43970'>gave</span> <span
  m='44180'>this</span> <span m='44690'>great</span> <span
  m='45620'>demonstration</span> <span m='46340'>about</span> <span
  m='46550'>the</span> <span m='46640'>row</span> <span m='46810'>rank</span>
  <span m='47080'>equals</span> <span m='47330'>the</span> <span
  m='47390'>column</span> <span m='47750'>rank.</span> <span m='47990'>And
  I'm</span> <span m='48050'>wondering</span> <span m='48320'>if</span> <span
  m='48440'>you</span> <span m='48920'>did</span> <span m='49070'>that</span>
  <span m='49250'>in</span> <span m='49340'>this</span> <span
  m='49490'>class</span> <span m='49880'>at</span> <span m='49970'>any</span>
  <span m='50150'>time.</span> <span m='50600'>Or</span> <span
  m='50900'>would</span> <span m='51080'>they</span> <span m='51200'>have</span>
  <span m='51290'>seen</span> <span m='51560'>that?</span> </p><p><span
  m='51830'>AUDIENCE:</span> <span m='51911'>It's</span> <span
  m='51992'>in</span> <span m='52073'>the</span> <span m='52154'>notes.</span>
  </p><p><span m='52640'>ALAN EDELMAN:</span> <span m='52760'>It's</span> <span
  m='52880'>in</span> <span m='53030'>the</span> <span m='53150'>notes.</span>
  <span m='53840'>Well,</span> <span m='54390'>in</span> <span
  m='54620'>any</span> <span m='54980'>event,</span> <span m='56780'>just
  as</span> <span m='57260'>Professor</span> <span m='57710'>Strang</span> <span
  m='58250'>walked</span> <span m='58670'>out--</span> <span m='59960'>so</span>
  <span m='60290'>here,</span> <span m='60600'>I'll</span> <span
  m='60860'>just</span> <span m='61130'>grab</span> <span m='61400'>this.</span>
  <span m='61600'>This</span> <span m='61760'>is</span> <span
  m='62330'>true.</span> <span m='62570'>I</span> <span m='62600'>was</span>
  <span m='62720'>actually</span> <span m='62960'>going</span> <span
  m='63090'>to</span> <span m='63140'>start</span> <span
  m='63410'>writing</span> <span m='63800'>the</span> <span
  m='63890'>code</span> <span m='64250'>to</span> <span m='64430'>do</span>
  <span m='64640'>the</span> <span m='64790'>quadrilateral,</span> <span
  m='65510'>but I</span> <span m='65660'>didn't</span> <span
  m='65810'>have</span> <span m='65930'>enough</span> <span
  m='66080'>time.</span> <span m='66710'>You</span> <span m='66800'>can</span>
  <span m='66920'>see</span> <span m='67070'>me</span> <span
  m='67190'>starting.</span> <span m='68390'>But</span> <span
  m='68570'>here's</span> <span m='68780'>the</span> <span m='68870'>0.5</span>
  <span m='69590'>for</span> <span m='69800'>the</span> <span
  m='69950'>triangle,</span> <span m='70800'>which</span> <span
  m='70910'>was</span> <span m='71120'>easy.</span> <span m='71630'>So</span>
  <span m='72050'>what's</span> <span m='72290'>the</span> <span
  m='72380'>story</span> <span m='72590'>with</span> <span
  m='72680'>Julia</span> <span m='72960'>in</span> <span m='73040'>this</span>
  <span m='73190'>class?</span> <span m='73760'>Have they</span> <span
  m='73910'>used</span> <span m='74150'>it</span> <span m='74240'>a</span> <span
  m='74300'>little,</span> <span m='74660'>or</span> <span m='74750'>a</span>
  <span m='74780'>lot,</span> <span m='75130'>or--</span> </p><p><span
  m='75440'>AUDIENCE:</span> <span m='75511'>In</span> <span
  m='75582'>the</span> <span m='75653'>labs.</span> </p><p><span m='76010'>ALAN
  EDELMAN:</span> <span m='76070'>In</span> <span m='76130'>the</span> <span
  m='76190'>labs</span> <span m='76550'>you've</span> <span
  m='76700'>used</span> <span m='76880'>Julia.</span> <span m='77270'>But</span>
  <span m='77420'>that</span> <span m='77600'>was</span> <span
  m='77780'>just</span> <span m='77990'>MATLAB.</span> <span m='78500'>So</span>
  <span m='78710'>that</span> <span m='78860'>was--</span> <span
  m='80850'>but</span> <span m='81500'>OK.</span> <span m='84350'>So</span>
  <span m='85610'>Professor</span> <span m='86000'>Strang</span> <span
  m='86360'>showed</span> <span m='86660'>this</span> <span
  m='86840'>proof</span> <span m='87200'>where</span> <span m='87470'>he</span>
  <span m='87710'>would--</span> <span m='88540'>he</span> <span
  m='88670'>put</span> <span m='88910'>down</span> <span m='89090'>a</span>
  <span m='89150'>3</span> <span m='89420'>by</span> <span m='89570'>3</span>
  <span m='89780'>matrix.</span> <span m='90370'>It</span> <span
  m='90470'>had</span> <span m='90620'>rank</span> <span m='90830'>two.</span>
  <span m='91700'>And</span> <span m='91910'>he</span> <span
  m='93320'>took</span> <span m='93530'>the</span> <span
  m='93650'>columns</span> <span m='94310'>that</span> <span
  m='94460'>were--</span> <span m='94890'>the</span> <span
  m='94970'>first</span> <span m='95180'>two</span> <span
  m='95300'>columns</span> <span m='95630'>were</span> <span
  m='95690'>independent.</span> <span m='96380'>And</span> <span
  m='98290'>it</span> <span m='98500'>was</span> <span m='98630'>easy</span>
  <span m='98810'>to</span> <span m='98930'>show</span> <span
  m='99140'>the</span> <span m='99260'>row</span> <span m='99410'>rank</span>
  <span m='99660'>equals</span> <span m='99920'>the</span> <span
  m='100010'>column</span> <span m='100310'>rank.</span> </p><p><span
  m='101270'>After</span> <span m='101600'>Professor</span> <span
  m='102020'>Strang</span> <span m='102770'>went</span> <span
  m='102970'>out,</span> <span m='103130'>I</span> <span
  m='103250'>asked,</span> <span m='103430'>would</span> <span
  m='103610'>that</span> <span m='103790'>work</span> <span
  m='104030'>for</span> <span m='104150'>the</span> <span m='104270'>zero</span>
  <span m='104600'>matrix?</span> <span m='107210'>So</span> <span
  m='107430'>here's</span> <span m='107820'>the</span> <span
  m='108680'>zero</span> <span m='109040'>matrix.</span> <span
  m='109550'>And</span> <span m='110330'>since</span> <span
  m='110540'>I'm</span> <span m='110630'>not</span> <span
  m='110780'>really</span> <span m='110960'>telling</span> <span
  m='111230'>you</span> <span m='111290'>the</span> <span
  m='111350'>proof,</span> <span m='111680'>I'll</span> <span
  m='111800'>just</span> <span m='112040'>say,</span> <span m='115490'>if</span>
  <span m='115640'>I</span> <span m='115730'>were</span> <span
  m='115790'>to</span> <span m='115880'>make</span> <span m='116030'>a</span>
  <span m='116090'>matrix</span> <span m='117020'>of</span> <span
  m='117170'>the</span> <span m='117260'>literally</span> <span
  m='117680'>independent</span> <span m='118190'>columns</span> <span
  m='119000'>of</span> <span m='119120'>this</span> <span
  m='119330'>matrix,</span> <span m='119840'>what</span> <span
  m='120050'>would</span> <span m='120170'>I</span> <span m='120290'>do?</span>
  </p><p><span m='122030'>So</span> <span m='122790'>zero</span> <span
  m='123980'>might</span> <span m='124280'>seem</span> <span
  m='124520'>tricky.</span> <span m='124950'>It's</span> <span
  m='124970'>not</span> <span m='125120'>really</span> <span
  m='125330'>that</span> <span m='125450'>tricky.</span> <span
  m='125780'>But</span> <span m='126900'>this</span> <span m='127310'>is</span>
  <span m='127430'>what</span> <span m='127520'>I</span> <span
  m='127610'>did</span> <span m='127760'>the</span> <span
  m='127850'>moment</span> <span m='128120'>you</span> <span
  m='128240'>walked</span> <span m='128539'>out.</span> <span
  m='130490'>So</span> <span m='130729'>yeah,</span> <span m='130940'>so</span>
  <span m='131120'>I've</span> <span m='131270'>got</span> <span
  m='131460'>the</span> <span m='131540'>3</span> <span m='131780'>by</span>
  <span m='131900'>3</span> <span m='132110'>matrix,</span> <span
  m='132590'>and</span> <span m='132680'>I</span> <span m='132770'>need</span>
  <span m='132950'>to</span> <span m='133070'>make</span> <span
  m='133500'>a--</span> <span m='134480'>first</span> <span
  m='134810'>step</span> <span m='135200'>in</span> <span
  m='135530'>whatever</span> <span m='135860'>the</span> <span
  m='135950'>proof</span> <span m='136310'>was,</span> <span m='137300'>I</span>
  <span m='137390'>needed</span> <span m='137630'>to</span> <span
  m='137780'>take</span> <span m='137990'>the</span> <span
  m='138080'>columns,</span> <span m='140080'>the</span> <span
  m='140660'>literally</span> <span m='141020'>independent</span> <span
  m='141440'>columns</span> <span m='141860'>of</span> <span
  m='141920'>this</span> <span m='142100'>matrix,</span> <span
  m='143210'>and</span> <span m='143570'>place</span> <span
  m='143900'>them</span> <span m='144370'>in</span> <span m='144550'>a</span>
  <span m='144650'>matrix</span> <span m='145070'>of</span> <span
  m='145160'>their</span> <span m='145340'>own.</span> </p><p><span
  m='146630'>What</span> <span m='146810'>would</span> <span m='146930'>I</span>
  <span m='147020'>do?</span> <span m='148570'>It</span> <span
  m='148650'>would</span> <span m='148740'>be</span> <span m='148800'>an</span>
  <span m='148890'>empty</span> <span m='149130'>matrix.</span> <span
  m='149570'>What would be</span> <span m='149790'>the</span> <span
  m='149880'>size</span> <span m='150330'>of</span> <span m='150420'>this</span>
  <span m='150570'>empty</span> <span m='150840'>matrix?</span> <span
  m='153450'>Not</span> <span m='153810'>exactly</span> <span
  m='154290'>zero</span> <span m='154560'>by</span> <span
  m='154740'>zero.</span> <span m='155190'>Because</span> <span
  m='156870'>where</span> <span m='157130'>every</span> <span
  m='157830'>column</span> <span m='158520'>is</span> <span
  m='158640'>still</span> <span m='158970'>in</span> <span m='159090'>our</span>
  <span m='159240'>3,</span> <span m='159750'>you</span> <span
  m='159960'>see.</span> <span m='160700'>So</span> <span m='160860'>the</span>
  <span m='160950'>right</span> <span m='161190'>answer--</span> <span
  m='161790'>I</span> <span m='161880'>hope</span> <span m='162030'>this</span>
  <span m='162180'>makes</span> <span m='162420'>sense--</span> <span
  m='163470'>is</span> <span m='163680'>a</span> <span m='163740'>3</span> <span
  m='164010'>by</span> <span m='164190'>0</span> <span m='164700'>empty</span>
  <span m='165030'>matrix.</span> <span m='166210'>And</span> <span
  m='166380'>that's</span> <span m='166560'>a</span> <span
  m='166620'>concept</span> <span m='167100'>that</span> <span
  m='167220'>exists</span> <span m='167610'>in</span> <span
  m='167760'>MATLAB,</span> <span m='168300'>and</span> <span
  m='168490'>in</span> <span m='168630'>Julia,</span> <span
  m='169170'>and</span> <span m='169560'>in</span> <span
  m='169650'>Python,</span> <span m='170220'>I</span> <span
  m='170310'>think,</span> <span m='170640'>I'm</span> <span
  m='170730'>sure,</span> <span m='171410'>and</span> <span m='171570'>in</span>
  <span m='171690'>any</span> <span m='171930'>computer</span> <span
  m='172320'>language.</span> </p><p><span m='172740'>So</span> <span
  m='173430'>if</span> <span m='173790'>you</span> <span m='173910'>had</span>
  <span m='174000'>a</span> <span m='174060'>full</span> <span
  m='174300'>rank</span> <span m='174600'>3</span> <span m='174810'>by</span>
  <span m='174960'>3</span> <span m='175140'>matrix,</span> <span
  m='176160'>the</span> <span m='176280'>linear</span> <span
  m='176520'>independent</span> <span m='176940'>columns</span> <span
  m='177250'>would</span> <span m='177330'>be</span> <span m='177420'>3</span>
  <span m='177630'>by</span> <span m='177780'>3.</span> <span
  m='178200'>If</span> <span m='178290'>you</span> <span m='178350'>had</span>
  <span m='178460'>a</span> <span m='178530'>rank</span> <span
  m='178790'>two,</span> <span m='179230'>it would</span> <span
  m='179400'>be</span> <span m='179520'>3</span> <span m='179730'>by</span>
  <span m='179880'>2.</span> <span m='180660'>If</span> <span
  m='180810'>I</span> <span m='180840'>had</span> <span m='180930'>a</span>
  <span m='180990'>rank</span> <span m='181230'>one</span> <span
  m='181440'>matrix,</span> <span m='181940'>it would</span> <span
  m='182020'>be</span> <span m='182130'>3</span> <span m='182340'>by</span>
  <span m='182520'>1.</span> <span m='183330'>So</span> <span
  m='183630'>if</span> <span m='183750'>I</span> <span m='183810'>had</span>
  <span m='183990'>no</span> <span m='184230'>columns,</span> <span
  m='184770'>3</span> <span m='184980'>by</span> <span m='185130'>0</span> <span
  m='185460'>makes</span> <span m='185670'>sense.</span> </p><p><span
  m='186660'>And</span> <span m='187140'>to</span> <span
  m='187320'>finish</span> <span m='187620'>the</span> <span
  m='187740'>proof,</span> <span m='188580'>again,</span> <span
  m='188880'>I'm</span> <span m='188970'>not</span> <span
  m='189090'>telling</span> <span m='189690'>these</span> <span
  m='189830'>students--</span> <span m='190230'>it's</span> <span
  m='190380'>in</span> <span m='190470'>the</span> <span m='190530'>notes</span>
  <span m='190800'>apparently--</span> <span m='191880'>the</span> <span
  m='192000'>next</span> <span m='192270'>matrix</span> <span
  m='192690'>would</span> <span m='192780'>be</span> <span
  m='192960'>random</span> <span m='193380'>0,</span> <span m='193710'>3.</span>
  <span m='194310'>And</span> <span m='194520'>of</span> <span
  m='194610'>course</span> <span m='194880'>you</span> <span
  m='194970'>multiply</span> <span m='195225'>it</span> <span
  m='195480'>and</span> <span m='195570'>you</span> <span m='195630'>get</span>
  <span m='195750'>a</span> <span m='195810'>3</span> <span m='196020'>by</span>
  <span m='196140'>3</span> <span m='196320'>matrix</span> <span
  m='196680'>of</span> <span m='196740'>zeros.</span> <span m='197550'>So</span>
  <span m='197910'>it's</span> <span m='198090'>fun</span> <span
  m='198240'>to</span> <span m='198310'>see</span> <span m='198570'>that</span>
  <span m='198720'>that</span> <span m='198870'>proof</span> <span
  m='199140'>still</span> <span m='199410'>works,</span> <span
  m='199740'>even</span> <span m='199950'>for</span> <span m='200070'>the</span>
  <span m='200160'>zero</span> <span m='200410'>matrix,</span> <span
  m='200730'>without</span> <span m='201000'>any</span> <span
  m='201150'>real</span> <span m='201390'>edge.</span> <span
  m='202230'>So</span> <span m='202350'>that</span> <span m='202560'>was</span>
  <span m='202860'>just</span> <span m='203370'>today.</span> </p><p><span
  m='207610'>The</span> <span m='207630'>other</span> <span
  m='207810'>thing</span> <span m='208260'>is</span> <span m='208590'>let</span>
  <span m='208800'>me--</span> <span m='209790'>can</span> <span
  m='209970'>I</span> <span m='210060'>say</span> <span m='210270'>a</span>
  <span m='210330'>word</span> <span m='210510'>or</span> <span
  m='210570'>two</span> <span m='211800'>about</span> <span
  m='212880'>recent</span> <span m='213210'>stuff</span> <span
  m='213540'>about</span> <span m='214050'>Julia?</span> <span
  m='214920'>So</span> <span m='215250'>I</span> <span m='215580'>started</span>
  <span m='215850'>to</span> <span m='215940'>put</span> <span
  m='216120'>together</span> <span m='216450'>a</span> <span
  m='216540'>talk.</span> <span m='218010'>It's</span> <span
  m='218160'>not</span> <span m='218310'>really</span> <span
  m='218490'>ready</span> <span m='218760'>yet,</span> <span
  m='219030'>but</span> <span m='219180'>I'll</span> <span
  m='219270'>share</span> <span m='219540'>it</span> <span
  m='219630'>with</span> <span m='219810'>you</span> <span
  m='219930'>anyway.</span> <span m='221280'>So</span> <span
  m='221460'>Google</span> <span m='221880'>did</span> <span
  m='222120'>the</span> <span m='222210'>Julia</span> <span
  m='222570'>world</span> <span m='222870'>a</span> <span m='222930'>big</span>
  <span m='223260'>favor</span> <span m='223710'>last</span> <span
  m='224100'>week.</span> <span m='224460'>I</span> <span
  m='224550'>mean,</span> <span m='224640'>this</span> <span
  m='224790'>is</span> <span m='224970'>huge.</span> </p><p><span
  m='225930'>So</span> <span m='227460'>you</span> <span m='227610'>all</span>
  <span m='227730'>know</span> <span m='227910'>machine</span> <span
  m='228240'>learning</span> <span m='228540'>is</span> <span
  m='228660'>hot.</span> <span m='228930'>That's</span> <span
  m='229080'>probably</span> <span m='230100'>why</span> <span
  m='230370'>you're</span> <span m='230520'>here</span> <span
  m='230790'>in</span> <span m='230910'>this</span> <span
  m='231030'>class.</span> <span m='231510'>I</span> <span
  m='231570'>probably</span> <span m='231870'>don't</span> <span
  m='232020'>have</span> <span m='232660'>to</span> <span m='232800'>tell</span>
  <span m='233070'>you.</span> <span m='234600'>And</span> <span
  m='235050'>yet</span> <span m='235980'>I</span> <span
  m='236130'>wouldn't</span> <span m='236370'>be</span> <span
  m='236490'>surprised</span> <span m='237180'>if</span> <span
  m='237300'>a</span> <span m='237360'>number</span> <span m='237660'>of</span>
  <span m='237810'>you</span> <span m='238860'>wished</span> <span
  m='239130'>this</span> <span m='239700'>whole</span> <span
  m='239820'>class</span> <span m='240150'>was</span> <span m='240300'>in</span>
  <span m='240390'>Python</span> <span m='240780'>or</span> <span
  m='240840'>something,</span> <span m='241310'>or</span> <span
  m='241410'>maybe</span> <span m='241710'>MATLAB</span> <span m='242160'>or
  something.</span> <span m='242640'>I don't</span> <span
  m='242820'>doubt</span> <span m='243120'>that</span> <span
  m='243630'>some</span> <span m='243870'>of</span> <span m='243960'>you</span>
  <span m='244140'>might</span> <span m='244380'>have</span> <span
  m='245070'>wanted</span> <span m='245490'>that</span> <span
  m='246360'>to</span> <span m='246570'>happen.</span> </p><p><span
  m='248130'>And</span> <span m='249470'>we</span> <span m='249810'>get</span>
  <span m='249990'>sort</span> <span m='250170'>of</span> <span
  m='250650'>bombarded</span> <span m='251280'>with,</span> <span
  m='251910'>you</span> <span m='252000'>know,</span> <span
  m='252540'>why</span> <span m='252750'>not</span> <span
  m='252900'>Python.</span> <span m='254580'>Not</span> <span
  m='254760'>so</span> <span m='254880'>much</span> <span
  m='255060'>MATLAB</span> <span m='255480'>anymore.</span> <span
  m='255900'>But</span> <span m='256110'>you</span> <span
  m='256190'>know,</span> <span m='256290'>why</span> <span
  m='256459'>not</span> <span m='256529'>Python</span> <span
  m='257010'>is</span> <span m='257070'>sort</span> <span m='257250'>of</span>
  <span m='257310'>the</span> <span m='257459'>issue</span> <span
  m='257700'>that</span> <span m='258060'>comes</span> <span
  m='258390'>up</span> <span m='259170'>a</span> <span m='259260'>lot.</span>
  </p><p><span m='260910'>And</span> <span m='262350'>I</span> <span
  m='262470'>could</span> <span m='262620'>talk</span> <span
  m='262920'>till</span> <span m='263040'>the</span> <span
  m='263130'>cows</span> <span m='263460'>come</span> <span
  m='263700'>home,</span> <span m='264010'>but</span> <span
  m='264030'>nobody</span> <span m='264330'>would</span> <span
  m='264450'>believe</span> <span m='264750'>me.</span> <span
  m='264960'>But</span> <span m='265110'>Google</span> <span
  m='265530'>came</span> <span m='265800'>out</span> <span
  m='265980'>last</span> <span m='266280'>week</span> <span
  m='267150'>and</span> <span m='268230'>said</span> <span
  m='268500'>that</span> <span m='268930'>when</span> <span m='269040'>it</span>
  <span m='269100'>comes</span> <span m='269310'>to</span> <span
  m='269400'>machine</span> <span m='269670'>learning,</span> <span
  m='270030'>there</span> <span m='270120'>really</span> <span
  m='270390'>are</span> <span m='270570'>two</span> <span
  m='270780'>languages</span> <span m='271320'>that</span> <span
  m='271470'>are</span> <span m='271890'>powerful</span> <span
  m='272490'>enough</span> <span m='272990'>to</span> <span m='273180'>do</span>
  <span m='273360'>machine</span> <span m='273660'>learning--</span> <span
  m='275610'>to</span> <span m='275730'>do</span> <span
  m='275880'>machine</span> <span m='276150'>learning</span> <span
  m='276420'>kinds</span> <span m='276780'>of</span> <span
  m='277350'>things</span> <span m='277620'>that</span> <span
  m='277710'>you</span> <span m='277800'>want</span> <span m='277980'>to</span>
  <span m='278040'>do.</span> <span m='278350'>And</span> <span
  m='278700'>in</span> <span m='278790'>some</span> <span
  m='279000'>sense,</span> <span m='279380'>the</span> <span
  m='279690'>rest</span> <span m='279990'>of</span> <span
  m='280110'>today's</span> <span m='280920'>lecture</span> <span
  m='281310'>that</span> <span m='281460'>I'm</span> <span
  m='281550'>going</span> <span m='281660'>to</span> <span
  m='281730'>give</span> <span m='281970'>will</span> <span m='282660'>be</span>
  <span m='282810'>maybe</span> <span m='283050'>illustrations</span> <span
  m='284220'>of</span> <span m='284370'>this.</span> </p><p><span
  m='285360'>But</span> <span m='285570'>if</span> <span m='285660'>you</span>
  <span m='285750'>want,</span> <span m='285990'>you</span> <span
  m='286080'>can</span> <span m='286200'>go</span> <span m='286500'>and</span>
  <span m='286590'>look</span> <span m='286830'>at</span> <span
  m='286920'>their</span> <span m='287340'>blog</span> <span
  m='287820'>here.</span> <span m='289170'>What</span> <span
  m='289350'>they</span> <span m='289440'>do</span> <span m='289650'>is</span>
  <span m='289770'>they</span> <span m='289890'>basically</span> <span
  m='290310'>sort</span> <span m='290520'>of</span> <span
  m='290610'>start</span> <span m='291120'>the</span> <span
  m='291510'>race</span> <span m='291840'>with</span> <span m='292020'>a</span>
  <span m='292050'>whole</span> <span m='292200'>bunch</span> <span
  m='292500'>of</span> <span m='292560'>programming</span> <span
  m='293010'>languages.</span> <span m='293550'>There's</span> <span
  m='293760'>Python.</span> <span m='294180'>There's</span> <span
  m='294390'>R.</span> <span m='295050'>Java,</span> <span
  m='295440'>JavaScript.</span> <span m='297380'>They</span> <span
  m='298200'>sort</span> <span m='298410'>of</span> <span m='298470'>look</span>
  <span m='298680'>at</span> <span m='298740'>all</span> <span
  m='298920'>of</span> <span m='298980'>these</span> <span
  m='299190'>languages.</span> </p><p><span m='300590'>And</span> <span
  m='300720'>if</span> <span m='300810'>you</span> <span m='300870'>read</span>
  <span m='301020'>the</span> <span m='301110'>blog,</span> <span
  m='301470'>you'll</span> <span m='301590'>see.</span> <span
  m='301830'>But</span> <span m='301980'>we're</span> <span
  m='302070'>going</span> <span m='302180'>to</span> <span
  m='302250'>filter</span> <span m='302610'>them</span> <span
  m='302790'>out</span> <span m='302970'>on</span> <span
  m='303090'>technical</span> <span m='303510'>merits.</span> <span
  m='304590'>And</span> <span m='305430'>right</span> <span
  m='305640'>away,</span> <span m='305850'>a</span> <span m='305910'>lot</span>
  <span m='306090'>of</span> <span m='306150'>them</span> <span
  m='306300'>disappear,</span> <span m='306810'>including</span> <span
  m='307350'>Python</span> <span m='307840'>and</span> <span
  m='308160'>Java.</span> </p><p><span m='309300'>And</span> <span
  m='310590'>if</span> <span m='310680'>you</span> <span m='310740'>go</span>
  <span m='310830'>to</span> <span m='310920'>the</span> <span
  m='310980'>blog,</span> <span m='311310'>you'll</span> <span
  m='311430'>see</span> <span m='311580'>they</span> <span
  m='311670'>spend</span> <span m='311910'>a</span> <span
  m='311970'>great</span> <span m='312240'>deal</span> <span
  m='312450'>of</span> <span m='312510'>time</span> <span m='313410'>on</span>
  <span m='313530'>the</span> <span m='313590'>Python</span> <span
  m='314010'>story.</span> <span m='314400'>Because</span> <span
  m='314700'>they</span> <span m='314820'>know</span> <span
  m='315150'>that</span> <span m='315300'>people</span> <span
  m='315540'>are</span> <span m='315630'>going</span> <span m='315740'>to</span>
  <span m='315810'>want</span> <span m='315960'>to</span> <span
  m='316020'>hear</span> <span m='316200'>that</span> <span
  m='316410'>one.</span> <span m='317310'>I</span> <span m='317340'>mean,</span>
  <span m='317550'>people</span> <span m='317790'>want</span> <span
  m='317940'>to</span> <span m='318000'>be</span> <span
  m='318090'>convinced.</span> <span m='318540'>And</span> <span
  m='318660'>so</span> <span m='318780'>there's</span> <span
  m='319020'>actually</span> <span m='319890'>multiple</span> <span
  m='320460'>screens</span> <span m='320940'>full</span> <span
  m='321300'>on</span> <span m='321460'>the</span> <span
  m='321840'>reason</span> <span m='322170'>why</span> <span
  m='322320'>Python</span> <span m='322690'>is</span> <span
  m='322740'>just</span> <span m='322950'>not</span> <span
  m='323100'>good</span> <span m='323250'>enough</span> <span
  m='323460'>for</span> <span m='323580'>machine</span> <span
  m='323880'>learning.</span> </p><p><span m='325170'>So</span> <span
  m='325950'>they</span> <span m='326130'>leave</span> <span
  m='326430'>four</span> <span m='326760'>languages</span> <span
  m='327270'>left--</span> <span m='328160'>Julia,</span> <span
  m='328650'>Swift,</span> <span m='328960'>C++,</span> <span
  m='329640'>and</span> <span m='329730'>Rust.</span> <span
  m='330570'>And</span> <span m='330690'>then</span> <span m='332750'>if</span>
  <span m='333600'>you</span> <span m='333660'>go</span> <span
  m='333810'>to</span> <span m='333900'>the</span> <span m='333960'>next</span>
  <span m='334200'>part</span> <span m='334560'>of</span> <span
  m='335250'>the</span> <span m='335370'>blog,</span> <span
  m='336120'>they</span> <span m='336420'>filter</span> <span
  m='336780'>on</span> <span m='336870'>usability.</span> <span
  m='337560'>And</span> <span m='337650'>then</span> <span m='337920'>two</span>
  <span m='338160'>more</span> <span m='338430'>sort</span> <span
  m='338610'>of</span> <span m='338670'>bite</span> <span m='338850'>the</span>
  <span m='338940'>dust.</span> <span m='340680'>So</span> <span
  m='340890'>C++</span> <span m='341550'>and</span> <span m='341890'>Rust</span>
  <span m='342120'>disappeared.</span> </p><p><span m='342930'>And</span> <span
  m='343950'>then</span> <span m='344160'>they</span> <span m='344250'>go</span>
  <span m='344460'>on</span> <span m='344640'>to</span> <span
  m='344760'>say</span> <span m='345030'>that</span> <span
  m='345390'>these</span> <span m='345630'>are</span> <span
  m='345720'>the</span> <span m='345870'>only</span> <span m='346110'>two</span>
  <span m='346290'>languages</span> <span m='346830'>they</span> <span
  m='347010'>feel</span> <span m='347850'>are</span> <span
  m='348000'>appropriate</span> <span m='348600'>for</span> <span
  m='349350'>machine</span> <span m='349710'>learning.</span> <span
  m='350100'>And</span> <span m='350220'>they</span> <span m='351180'>put</span>
  <span m='351360'>this</span> <span m='351540'>nice</span> <span
  m='351750'>quote</span> <span m='352660'>that</span> <span
  m='354300'>it</span> <span m='354390'>shares</span> <span
  m='354690'>many</span> <span m='354900'>common</span> <span
  m='355200'>values.</span> <span m='355680'>And</span> <span
  m='356180'>they</span> <span m='356490'>actually</span> <span
  m='356760'>go</span> <span m='357000'>on</span> <span m='357250'>about</span>
  <span m='357450'>what</span> <span m='357660'>machine</span> <span
  m='357960'>learning</span> <span m='358230'>really</span> <span
  m='358530'>needs.</span> <span m='359070'>And</span> <span
  m='359910'>I'd</span> <span m='360000'>recommend</span> <span
  m='360450'>you</span> <span m='361140'>look</span> <span m='361350'>at</span>
  <span m='361470'>it.</span> </p><p><span m='361680'>And</span> <span
  m='361800'>then</span> <span m='362370'>finally,</span> <span
  m='362920'>of</span> <span m='363020'>course,</span> <span
  m='363150'>they're</span> <span m='363270'>going</span> <span
  m='363340'>to</span> <span m='363990'>push</span> <span
  m='364290'>Swift,</span> <span m='366300'>which</span> <span
  m='366510'>they</span> <span m='366660'>should.</span> <span
  m='367350'>So</span> <span m='367530'>they</span> <span m='367650'>had</span>
  <span m='367800'>somewhere--</span> <span m='368130'>blah,</span> <span
  m='368400'>blah--</span> <span m='368730'>about</span> <span
  m='369060'>more</span> <span m='369270'>people</span> <span
  m='369510'>are</span> <span m='369570'>using</span> <span
  m='369870'>Swift.</span> <span m='370390'>Maybe</span> <span
  m='370530'>it's</span> <span m='370650'>true.</span> <span m='370950'>I</span>
  <span m='371010'>don't</span> <span m='371190'>know.</span> <span
  m='373290'>So</span> <span m='375120'>they</span> <span
  m='375630'>really</span> <span m='375840'>said</span> <span
  m='376080'>is</span> <span m='376230'>they're</span> <span
  m='376380'>more</span> <span m='376560'>familiar</span> <span
  m='376990'>with</span> <span m='377120'>Swift</span> <span
  m='377900'>than</span> <span m='378140'>Julia,</span> <span
  m='378560'>which,</span> <span m='378720'>you</span> <span
  m='378780'>know,</span> <span m='378900'>if</span> <span m='379380'>I</span>
  <span m='379440'>was</span> <span m='379530'>speaking,</span> <span
  m='379990'>I'd</span> <span m='380090'>say</span> <span m='380190'>I'm</span>
  <span m='380290'>more</span> <span m='380390'>familiar</span> <span
  m='380580'>with</span> <span m='380700'>Julia</span> <span
  m='380980'>than</span> <span m='381140'>Swift.</span> <span
  m='381370'>So</span> <span m='381570'>maybe</span> <span
  m='381750'>it's</span> <span m='381870'>fair.</span> </p><p><span
  m='383460'>And</span> <span m='383610'>then</span> <span m='384870'>I</span>
  <span m='384960'>started</span> <span m='385230'>to</span> <span
  m='385380'>put</span> <span m='385620'>a</span> <span m='385680'>little</span>
  <span m='385860'>cartoon</span> <span m='386310'>on</span> <span
  m='386400'>the</span> <span m='386460'>psychology</span> <span
  m='386970'>of</span> <span m='387030'>programming</span> <span
  m='387450'>languages,</span> <span m='387900'>just</span> <span
  m='388080'>because</span> <span m='388490'>it's</span> <span
  m='388800'>sort</span> <span m='388980'>of</span> <span
  m='389100'>something</span> <span m='389850'>that</span> <span
  m='389970'>I</span> <span m='390330'>bump</span> <span m='390570'>into</span>
  <span m='390870'>with</span> <span m='391050'>all</span> <span
  m='391170'>the</span> <span m='391260'>time.</span> <span
  m='391860'>People</span> <span m='392130'>always</span> <span
  m='392340'>say</span> <span m='393150'>all</span> <span
  m='393270'>languages</span> <span m='393780'>are</span> <span
  m='393870'>equally</span> <span m='394170'>good.</span> <span
  m='394440'>It</span> <span m='394500'>doesn't</span> <span
  m='394800'>really</span> <span m='395010'>matter.</span> </p><p><span
  m='396670'>But</span> <span m='396750'>the</span> <span
  m='396840'>truth</span> <span m='397140'>is</span> <span m='398750'>if</span>
  <span m='398880'>you</span> <span m='398970'>mention</span> <span
  m='399210'>a</span> <span m='399230'>language</span> <span
  m='399540'>that</span> <span m='399660'>you're</span> <span
  m='399750'>not</span> <span m='399900'>using</span> <span
  m='400230'>yet,</span> <span m='400890'>you're</span> <span
  m='400980'>going</span> <span m='401090'>to</span> <span
  m='401160'>tune</span> <span m='401400'>it</span> <span m='401550'>out,</span>
  <span m='402900'>at</span> <span m='402960'>least</span> <span
  m='403200'>until</span> <span m='403410'>Google</span> <span
  m='403680'>comes</span> <span m='403920'>along.</span> <span
  m='404850'>So</span> <span m='405180'>that</span> <span
  m='405420'>that's</span> <span m='405660'>where</span> <span
  m='405810'>we</span> <span m='405960'>are.</span> <span m='406320'>OK,</span>
  <span m='406770'>enough</span> <span m='407070'>about--</span> <span
  m='408210'>I</span> <span m='408300'>just</span> <span m='408450'>put</span>
  <span m='408630'>this</span> <span m='408780'>together.</span> <span
  m='409190'>I</span> <span m='409815'>was</span> <span
  m='410280'>testing</span> <span m='410670'>it</span> <span
  m='410760'>out</span> <span m='410880'>on</span> <span m='411000'>you.</span>
  <span m='411930'>All</span> <span m='412020'>right.</span> </p><p><span
  m='414000'>So</span> <span m='414150'>now</span> <span m='414360'>let</span>
  <span m='414480'>me</span> <span m='414570'>do</span> <span
  m='415290'>two</span> <span m='415530'>more</span> <span
  m='415680'>mathematical</span> <span m='416340'>things.</span> <span
  m='417880'>So</span> <span m='418050'>the</span> <span m='418170'>first</span>
  <span m='418410'>thing</span> <span m='418530'>I</span> <span
  m='418620'>want</span> <span m='418770'>to</span> <span m='418830'>do</span>
  <span m='419310'>is</span> <span m='420180'>talk</span> <span
  m='420450'>to</span> <span m='420540'>you</span> <span m='420660'>about</span>
  <span m='421500'>forward</span> <span m='421890'>mode</span> <span
  m='422130'>automatic</span> <span m='422550'>differentiation.</span> <span
  m='423390'>So</span> <span m='423510'>have</span> <span m='423600'>you</span>
  <span m='423690'>done</span> <span m='423840'>any</span> <span
  m='424050'>automatic</span> <span m='424380'>differentiation</span> <span
  m='424890'>in</span> <span m='424950'>this</span> <span
  m='425010'>course?</span> </p><p><span m='425275'>AUDIENCE:</span> <span
  m='425363'>Very</span> <span m='425451'>little.</span> </p><p><span
  m='425540'>ALAN EDELMAN:</span> <span m='425680'>OK,</span> <span
  m='425820'>so</span> <span m='426420'>I</span> <span m='426480'>think</span>
  <span m='426660'>this</span> <span m='426810'>is</span> <span
  m='426930'>pretty</span> <span m='427140'>fun.</span> <span
  m='427410'>I</span> <span m='427500'>hope</span> <span
  m='427680'>you'll</span> <span m='427770'>like</span> <span
  m='428070'>it.</span> <span m='429180'>I</span> <span m='429280'>have</span>
  <span m='429300'>a</span> <span m='429330'>notebook</span> <span
  m='429750'>in</span> <span m='429840'>Julia</span> <span m='430870'>on</span>
  <span m='431040'>forward</span> <span m='431340'>mode</span> <span
  m='431550'>automatic</span> <span m='431910'>differentiation.</span> <span
  m='432610'>And</span> <span m='432960'>this</span> <span
  m='433350'>notebook</span> <span m='434130'>came</span> <span
  m='434400'>together</span> <span m='434940'>because</span> <span
  m='436500'>I</span> <span m='437100'>was</span> <span m='437850'>trying</span>
  <span m='438150'>to</span> <span m='438240'>understand</span> <span
  m='438990'>what</span> <span m='439170'>the</span> <span m='439260'>big</span>
  <span m='439440'>deal</span> <span m='439710'>was</span> <span
  m='440010'>for</span> <span m='440160'>a</span> <span m='440190'>long</span>
  <span m='440430'>time.</span> </p><p><span m='441290'>And</span> <span
  m='441630'>I</span> <span m='441720'>had</span> <span m='441840'>a</span>
  <span m='441870'>little</span> <span m='442110'>trouble.</span> <span
  m='442560'>I</span> <span m='442620'>mean,</span> <span m='442740'>it's</span>
  <span m='443340'>the</span> <span m='443400'>usual</span> <span
  m='443670'>story</span> <span m='444090'>where</span> <span
  m='444330'>on</span> <span m='444450'>a</span> <span
  m='444510'>line-by-line</span> <span m='445200'>level,</span> <span
  m='445530'>it's</span> <span m='445680'>easy</span> <span m='445920'>to</span>
  <span m='445980'>understand.</span> <span m='447000'>But</span> <span
  m='447480'>what's</span> <span m='447660'>the</span> <span
  m='447780'>big</span> <span m='447960'>deal</span> <span
  m='448230'>part?</span> <span m='448620'>That's</span> <span
  m='449010'>sometimes</span> <span m='449400'>the</span> <span
  m='449460'>harder</span> <span m='449730'>thing</span> <span
  m='449940'>to</span> <span m='450060'>grasp.</span> </p><p><span
  m='451110'>And</span> <span m='451560'>the</span> <span
  m='451650'>first</span> <span m='451860'>notebook</span> <span
  m='452250'>I'm</span> <span m='452340'>going</span> <span m='452460'>to</span>
  <span m='452520'>show</span> <span m='452790'>you</span> <span
  m='453470'>is</span> <span m='454040'>sort</span> <span m='454250'>of</span>
  <span m='454970'>the</span> <span m='455060'>result</span> <span
  m='455510'>of</span> <span m='456110'>my</span> <span m='456290'>trying</span>
  <span m='456560'>to</span> <span m='456710'>grasp</span> <span
  m='457400'>what</span> <span m='457580'>was</span> <span m='458040'>the</span>
  <span m='458450'>real</span> <span m='458630'>picture</span> <span
  m='459020'>here.</span> <span m='460190'>And</span> <span
  m='460940'>the</span> <span m='461060'>second</span> <span
  m='461330'>thing--</span> <span m='461480'>I</span> <span
  m='461540'>think</span> <span m='461720'>I'll</span> <span
  m='461780'>just</span> <span m='461900'>do</span> <span m='461990'>it
  on</span> <span m='462050'>the</span> <span m='462110'>blackboard.</span>
  <span m='462530'>It's</span> <span m='462650'>not</span> <span
  m='462800'>even</span> <span m='462950'>really</span> <span
  m='463190'>ready</span> <span m='463430'>yet,</span> <span
  m='463700'>but</span> <span m='463850'>I'll</span> <span
  m='463940'>sort</span> <span m='464120'>of</span> <span
  m='464690'>unleash</span> <span m='465110'>it on</span> <span
  m='465230'>you</span> <span m='465350'>folks</span> <span
  m='465620'>anyway--</span> <span m='466460'>is</span> <span
  m='466640'>to</span> <span m='466760'>show</span> <span m='467090'>you</span>
  <span m='467330'>how</span> <span m='468110'>to</span> <span
  m='468230'>do</span> <span m='469250'>a</span> <span
  m='469460'>particular</span> <span m='469820'>example</span> <span
  m='470150'>of</span> <span m='470210'>backward</span> <span
  m='470600'>mode</span> <span m='471380'>automatic</span> <span
  m='471740'>differentiation,</span> <span m='472370'>the</span> <span
  m='473240'>that</span> <span m='473330'>you</span> <span m='473420'>see</span>
  <span m='473500'>in</span> <span m='473570'>the</span> <span
  m='473630'>neural</span> <span m='473900'>net.</span> <span
  m='474170'>And</span> <span m='474310'>I</span> <span m='474680'>guess</span>
  <span m='474860'>you</span> <span m='474950'>have</span> <span
  m='475100'>seen</span> <span m='475310'>some</span> <span
  m='475460'>neural</span> <span m='475700'>nets</span> <span
  m='475940'>here?</span> </p><p><span m='476570'>AUDIENCE:</span> <span
  m='476720'>Yep.</span> </p><p><span m='476870'>ALAN EDELMAN</span> <span
  m='477095'>So</span> <span m='477680'>I</span> <span m='478100'>think</span>
  <span m='478230'>by</span> <span m='478430'>now</span> <span
  m='478580'>everybody's</span> <span m='479060'>seen</span> <span
  m='479250'>neural</span> <span m='479510'>nets.</span> <span
  m='479810'>I</span> <span m='479840'>think</span> <span m='481130'>two</span>
  <span m='481340'>years</span> <span m='481550'>from</span> <span
  m='481670'>now,</span> <span m='481810'>it'll</span> <span
  m='481940'>be</span> <span m='482030'>in</span> <span m='482480'>high</span>
  <span m='482600'>schools.</span> <span m='482990'>And</span> <span
  m='483080'>three</span> <span m='483260'>years</span> <span
  m='483470'>from</span> <span m='483620'>there,</span> <span m='483740'>it
  will</span> <span m='483830'>be</span> <span m='483890'>in</span> <span
  m='483980'>kindergarten.</span> <span m='484580'>I</span> <span
  m='484640'>don't</span> <span m='484790'>know.</span> <span
  m='485990'>Neural</span> <span m='486200'>nets</span> <span
  m='486400'>seem</span> <span m='486590'>to</span> <span m='486710'>be</span>
  <span m='486890'>sort</span> <span m='487070'>of--</span> <span
  m='487700'>they're</span> <span m='487970'>not</span> <span
  m='488120'>that</span> <span m='488270'>hard</span> <span m='488450'>to</span>
  <span m='488540'>understand.</span> </p><p><span m='489430'>OK,</span> <span
  m='489820'>so</span> <span m='491510'>let</span> <span m='491660'>me</span>
  <span m='491810'>start</span> <span m='492350'>things</span> <span
  m='492950'>off.</span> <span m='493550'>And</span> <span
  m='494540'>really,</span> <span m='494870'>the</span> <span
  m='495020'>two</span> <span m='495290'>things</span> <span
  m='495590'>that</span> <span m='495710'>I'd</span> <span
  m='495820'>love</span> <span m='496020'>to</span> <span
  m='496130'>convince</span> <span m='496610'>you</span> <span
  m='496790'>of</span> <span m='498050'>is--</span> <span m='499100'>let</span>
  <span m='499220'>me</span> <span m='499340'>just</span> <span
  m='499580'>find--</span> <span m='499880'>here's</span> <span
  m='500060'>my</span> <span m='500270'>auto</span> <span m='500490'>diff</span>
  <span m='500720'>thing.</span> <span m='502170'>The</span> <span
  m='502340'>two</span> <span m='502520'>things</span> <span
  m='502760'>that</span> <span m='502880'>I</span> <span
  m='502940'>really</span> <span m='503240'>want</span> <span
  m='503420'>to</span> <span m='503510'>convince</span> <span
  m='503930'>you</span> <span m='504260'>of--</span> <span m='504720'>and</span>
  <span m='505010'>maybe</span> <span m='505490'>you</span> <span
  m='505610'>already</span> <span m='506540'>believe</span> <span
  m='507050'>some</span> <span m='507320'>of</span> <span
  m='507410'>this--</span> <span m='508190'>is</span> <span
  m='509420'>one,</span> <span m='510020'>that--</span> <span
  m='511280'>well,</span> <span m='511400'>maybe</span> <span
  m='511640'>you</span> <span m='511700'>don't</span> <span
  m='511850'>believe</span> <span m='512090'>this</span> <span
  m='512270'>yet--</span> <span m='512480'>but</span> <span
  m='513100'>that</span> <span m='513350'>the</span> <span
  m='513470'>language</span> <span m='513919'>matters</span> <span
  m='514880'>in</span> <span m='515059'>a</span> <span
  m='515090'>mathematical</span> <span m='515690'>sense.</span> </p><p><span
  m='518614'>The</span> <span m='519080'>right</span> <span
  m='519260'>computer</span> <span m='519679'>language</span> <span
  m='520400'>can</span> <span m='520580'>do</span> <span m='520730'>more</span>
  <span m='521179'>for</span> <span m='521419'>you</span> <span
  m='521750'>than</span> <span m='521990'>just</span> <span
  m='522650'>take</span> <span m='523010'>some</span> <span
  m='523220'>algorithm</span> <span m='523580'>on</span> <span
  m='523669'>a</span> <span m='523730'>blackboard</span> <span
  m='524270'>and</span> <span m='524390'>implement</span> <span
  m='524990'>it.</span> <span m='526250'>It</span> <span m='526370'>could</span>
  <span m='526520'>do</span> <span m='526640'>much</span> <span
  m='526850'>more.</span> <span m='527030'>And</span> <span
  m='527270'>this</span> <span m='527450'>is</span> <span
  m='527510'>something</span> <span m='528320'>that</span> <span
  m='528800'>I</span> <span m='528860'>hope</span> <span m='529070'>to</span>
  <span m='529580'>give</span> <span m='529820'>a</span> <span
  m='529880'>few</span> <span m='530060'>examples</span> <span
  m='530540'>of.</span> </p><p><span m='531470'>And</span> <span
  m='531590'>the</span> <span m='531710'>other</span> <span
  m='531950'>thing</span> <span m='532250'>that</span> <span m='532430'>I</span>
  <span m='532760'>bet</span> <span m='533030'>you</span> <span
  m='533180'>all</span> <span m='533710'>believe</span> <span
  m='534210'>now,</span> <span m='534470'>because</span> <span
  m='536150'>you've</span> <span m='536300'>been</span> <span
  m='536420'>in</span> <span m='536510'>this</span> <span
  m='536660'>class,</span> <span m='537590'>is</span> <span
  m='538220'>that</span> <span m='538490'>linear</span> <span
  m='538730'>algebra</span> <span m='539090'>is</span> <span
  m='539180'>the</span> <span m='539270'>basis</span> <span
  m='539600'>for</span> <span m='539690'>everything.</span> <span
  m='540240'>Every</span> <span m='540500'>course</span> <span
  m='540890'>should</span> <span m='541070'>start</span> <span
  m='541370'>with</span> <span m='541580'>linear</span> <span
  m='541880'>algebra.</span> <span m='542450'>I</span> <span
  m='542540'>mean,</span> <span m='543650'>to</span> <span m='543770'>me,</span>
  <span m='543920'>it</span> <span m='543980'>feels</span> <span
  m='544250'>like</span> <span m='544400'>a</span> <span
  m='544910'>unfortunate</span> <span m='545480'>accident</span> <span
  m='545870'>of</span> <span m='545990'>history</span> <span
  m='547220'>that</span> <span m='547430'>linear</span> <span
  m='547670'>algebra</span> <span m='548570'>came</span> <span
  m='548810'>too</span> <span m='549050'>late</span> <span m='549470'>for</span>
  <span m='549620'>too</span> <span m='549800'>many</span> <span
  m='550160'>reasons.</span> </p><p><span m='551160'>And</span> <span
  m='551300'>so</span> <span m='551990'>very</span> <span
  m='552260'>often,</span> <span m='552500'>things</span> <span
  m='552770'>that</span> <span m='552920'>would</span> <span
  m='553070'>be</span> <span m='554030'>better</span> <span
  m='554330'>done</span> <span m='554630'>with</span> <span
  m='554780'>linear</span> <span m='554990'>algebra</span> <span
  m='555620'>are</span> <span m='555950'>not.</span> <span m='556490'>And</span>
  <span m='557660'>I</span> <span m='557720'>mean,</span> <span
  m='558140'>to</span> <span m='558260'>me,</span> <span m='558410'>it</span>
  <span m='558500'>feels</span> <span m='558770'>like</span> <span
  m='558980'>doing</span> <span m='559220'>physics</span> <span
  m='559550'>without</span> <span m='559730'>calculus.</span> <span
  m='560390'>I</span> <span m='560450'>just</span> <span m='560600'>don't</span>
  <span m='560720'>get</span> <span m='560930'>it.</span> <span
  m='561410'>I</span> <span m='561510'>know</span> <span m='561610'>high</span>
  <span m='561710'>schools</span> <span m='561800'>do</span> <span
  m='561950'>that.</span> <span m='562290'>But</span> <span m='562460'>it</span>
  <span m='562520'>just</span> <span m='562670'>seems</span> <span
  m='562850'>wrong.</span> </p><p><span m='563960'>To</span> <span
  m='564110'>me,</span> <span m='565250'>all</span> <span m='565430'>of</span>
  <span m='565550'>engineering,</span> <span m='566290'>all</span> <span
  m='566500'>of--</span> <span m='566590'>it</span> <span
  m='566710'>should</span> <span m='566900'>all</span> <span
  m='567050'>be</span> <span m='567230'>linear</span> <span
  m='567530'>algebra.</span> <span m='567930'>I</span> <span
  m='568010'>mean,</span> <span m='568480'>I</span> <span m='568670'>just</span>
  <span m='568910'>believe</span> <span m='569240'>that--</span> <span
  m='569660'>almost</span> <span m='570080'>all.</span> <span
  m='570230'>Maybe</span> <span m='570440'>not</span> <span
  m='570620'>all.</span> <span m='571250'>But</span> <span
  m='571490'>quite</span> <span m='571790'>a</span> <span m='571850'>lot.</span>
  <span m='572250'>More</span> <span m='572540'>than</span> <span
  m='572660'>most</span> <span m='572840'>people</span> <span
  m='573080'>realize,</span> <span m='573890'>I</span> <span
  m='573980'>would</span> <span m='574100'>say.</span> </p><p><span
  m='575130'>OK,</span> <span m='575570'>so</span> <span m='575780'>let</span>
  <span m='575900'>me</span> <span m='575990'>start</span> <span
  m='576170'>with</span> <span m='576320'>automatic</span> <span
  m='576800'>differentiation.</span> <span m='580100'>So</span> <span
  m='580370'>I'm</span> <span m='580460'>going to</span> <span
  m='580610'>start</span> <span m='580850'>by</span> <span
  m='580970'>this</span> <span m='581090'>story</span> <span
  m='581480'>by</span> <span m='581600'>telling</span> <span
  m='581840'>you</span> <span m='581990'>that</span> <span m='583220'>I</span>
  <span m='583310'>would</span> <span m='583460'>go</span> <span
  m='583580'>to</span> <span m='583670'>conferences.</span> <span
  m='584340'>I</span> <span m='584440'>would</span> <span m='584450'>go</span>
  <span m='584540'>to</span> <span m='584630'>numerical</span> <span
  m='584990'>analysis</span> <span m='585470'>conferences.</span> <span
  m='586490'>I</span> <span m='586610'>would</span> <span m='586730'>hear</span>
  <span m='586910'>people</span> <span m='587210'>talk</span> <span
  m='587420'>about</span> <span m='587690'>automatic</span> <span
  m='588050'>differentiation.</span> </p><p><span m='588980'>I'm</span> <span
  m='589210'>going to</span> <span m='589280'>be</span> <span
  m='589370'>honest.</span> <span m='589700'>I</span> <span
  m='589730'>was</span> <span m='589820'>reading</span> <span
  m='590030'>my</span> <span m='590120'>email.</span> <span m='590450'>I</span>
  <span m='590510'>was</span> <span m='590660'>tuned</span> <span
  m='590890'>out.</span> <span m='590960'>Like,</span> <span
  m='591110'>who</span> <span m='591200'>cares</span> <span
  m='591530'>about--</span> <span m='592190'>I</span> <span
  m='592340'>know</span> <span m='592520'>calculus.</span> <span
  m='593690'>You</span> <span m='593840'>could</span> <span
  m='593960'>teach</span> <span m='594170'>a</span> <span
  m='594200'>computer</span> <span m='594620'>to</span> <span
  m='594710'>do</span> <span m='594950'>it.</span> <span m='596190'>It</span>
  <span m='596240'>seems</span> <span m='596480'>pretty</span> <span
  m='596660'>easy</span> <span m='596930'>to</span> <span m='597020'>me.</span>
  <span m='597260'>I</span> <span m='597320'>mean,</span> <span
  m='597800'>I'm</span> <span m='597890'>sure</span> <span
  m='598040'>there</span> <span m='598130'>are</span> <span
  m='598160'>technical</span> <span m='598550'>details.</span> <span
  m='599190'>But</span> <span m='599290'>it</span> <span
  m='599390'>didn't</span> <span m='599490'>seem</span> <span
  m='599540'>that</span> <span m='599660'>interesting</span> <span
  m='600760'>to</span> <span m='600920'>teach</span> <span m='601420'>a</span>
  <span m='601670'>computer</span> <span m='602060'>to</span> <span
  m='602210'>differentiate.</span> </p><p><span m='603470'>I</span> <span
  m='603560'>sort</span> <span m='603740'>of</span> <span
  m='603800'>figured</span> <span m='604130'>that</span> <span
  m='604280'>it</span> <span m='604340'>was</span> <span m='604430'>the</span>
  <span m='604520'>same</span> <span m='604760'>calculus</span> <span
  m='605270'>that</span> <span m='605420'>I</span> <span
  m='605510'>learned</span> <span m='605870'>when</span> <span
  m='606050'>I</span> <span m='606110'>took</span> <span m='606290'>a</span>
  <span m='606380'>calculus</span> <span m='606770'>class.</span> <span
  m='607860'>You</span> <span m='608060'>know,</span> <span
  m='608180'>you</span> <span m='608570'>memorize</span> <span
  m='608990'>this</span> <span m='609140'>table.</span> <span
  m='609530'>You</span> <span m='609650'>teach</span> <span m='609890'>it</span>
  <span m='609950'>to</span> <span m='610040'>a</span> <span
  m='610100'>computer.</span> <span m='610940'>You</span> <span
  m='611540'>learn</span> <span m='611750'>the</span> <span
  m='611810'>chain</span> <span m='612080'>rule,</span> <span
  m='612500'>and</span> <span m='612590'>the</span> <span
  m='612650'>product</span> <span m='612980'>rule,</span> <span
  m='613190'>and</span> <span m='613280'>the</span> <span
  m='613340'>quotient</span> <span m='613670'>rule.</span> <span
  m='613970'>And</span> <span m='614060'>bump,</span> <span
  m='614920'>the</span> <span m='615140'>computer</span> <span
  m='615380'>is</span> <span m='615530'>doing</span> <span
  m='615900'>just</span> <span m='616190'>what</span> <span m='616340'>I</span>
  <span m='616430'>would</span> <span m='616550'>do</span> <span
  m='617430'>with</span> <span m='617570'>paper</span> <span
  m='617780'>and</span> <span m='617870'>pencil.</span> <span
  m='618320'>So</span> <span m='618560'>big</span> <span m='618740'>deal.</span>
  <span m='619150'>I</span> <span m='619340'>didn't</span> <span
  m='619490'>pay</span> <span m='619610'>attention.</span> </p><p><span
  m='620750'>And</span> <span m='620930'>in</span> <span m='621050'>any</span>
  <span m='621230'>event,</span> <span m='622460'>there</span> <span
  m='622580'>was</span> <span m='622700'>this</span> <span
  m='622850'>little</span> <span m='623000'>neuron</span> <span
  m='623360'>in</span> <span m='623450'>the</span> <span m='623510'>back</span>
  <span m='623720'>of</span> <span m='623780'>my</span> <span
  m='623870'>brain</span> <span m='624110'>that</span> <span
  m='624230'>said,</span> <span m='624830'>hey,</span> <span
  m='624980'>maybe</span> <span m='625220'>I'm</span> <span
  m='625340'>wrong.</span> <span m='625760'>Maybe</span> <span
  m='626000'>it's</span> <span m='626120'>doing</span> <span
  m='626330'>finite</span> <span m='626630'>differences,</span> <span
  m='627170'>you</span> <span m='627260'>know,</span> <span
  m='627380'>the</span> <span m='627470'>sort</span> <span m='627650'>of</span>
  <span m='627710'>thing</span> <span m='627950'>where</span> <span
  m='629840'>you</span> <span m='629930'>take</span> <span m='630770'>the</span>
  <span m='630920'>dy</span> <span m='631520'>by the</span> <span
  m='631730'>dx.</span> <span m='632240'>In</span> <span m='632330'>some</span>
  <span m='632480'>numerical</span> <span m='632930'>way,</span> <span
  m='633520'>you</span> <span m='633650'>do</span> <span m='633770'>the</span>
  <span m='633890'>finite</span> <span m='634310'>differences.</span>
  </p><p><span m='635240'>And</span> <span m='635510'>in</span> <span
  m='636530'>numerical</span> <span m='636830'>analysis,</span> <span
  m='637310'>they're</span> <span m='637400'>supposed</span> <span
  m='637760'>to</span> <span m='637820'>tell</span> <span m='638060'>you</span>
  <span m='638480'>if</span> <span m='638570'>h is</span> <span
  m='638840'>too</span> <span m='638990'>big,</span> <span m='639260'>you</span>
  <span m='639350'>get</span> <span m='639470'>truncation</span> <span
  m='639950'>error.</span> <span m='640210'>If</span> <span
  m='640310'>you</span> <span m='640400'>have</span> <span m='640520'>h
  too</span> <span m='640790'>small,</span> <span m='641090'>you</span> <span
  m='641150'>get</span> <span m='641270'>round</span> <span
  m='641540'>off</span> <span m='641690'>error.</span> <span
  m='642050'>And</span> <span m='642410'>the</span> <span
  m='642500'>truth</span> <span m='642740'>is</span> <span
  m='642890'>nobody</span> <span m='643130'>ever</span> <span
  m='643280'>tells</span> <span m='643520'>you</span> <span
  m='643610'>what's</span> <span m='643820'>a</span> <span
  m='643880'>good</span> <span m='644030'>h.</span> <span m='644990'>But</span>
  <span m='645150'>you</span> <span m='645240'>go</span> <span
  m='645330'>to</span> <span m='645420'>a</span> <span
  m='645570'>numerical</span> <span m='645770'>analysis</span> <span
  m='646100'>class</span> <span m='646820'>hoping</span> <span
  m='647150'>somebody</span> <span m='647450'>would</span> <span
  m='647540'>tell</span> <span m='647720'>you.</span> </p><p><span
  m='649020'>But</span> <span m='649370'>in</span> <span m='649490'>any</span>
  <span m='649640'>event,</span> <span m='649950'>so I</span> <span
  m='650050'>thought</span> <span m='650090'>maybe</span> <span
  m='650310'>it</span> <span m='650390'>was</span> <span m='650480'>that</span>
  <span m='650600'>kind</span> <span m='650810'>of</span> <span
  m='650900'>a</span> <span m='650930'>numerical</span> <span
  m='651380'>finite</span> <span m='651710'>difference.</span> <span
  m='654200'>And</span> <span m='654770'>I</span> <span m='654860'>think</span>
  <span m='655070'>the</span> <span m='655190'>big</span> <span
  m='655400'>surprise</span> <span m='655910'>for</span> <span
  m='656060'>me</span> <span m='656720'>was</span> <span m='656900'>that</span>
  <span m='657530'>automatic</span> <span m='657950'>differentiation</span>
  <span m='658940'>was</span> <span m='659150'>neither</span> <span
  m='659930'>the</span> <span m='660050'>first</span> <span
  m='660410'>nor</span> <span m='660710'>the</span> <span
  m='660830'>second</span> <span m='661160'>thing,</span> <span
  m='661810'>that</span> <span m='661940'>there's</span> <span
  m='662090'>actually</span> <span m='662360'>a</span> <span
  m='662420'>third</span> <span m='662780'>thing,</span> <span
  m='663140'>something</span> <span m='663440'>different,</span> <span
  m='664400'>that's</span> <span m='664610'>neither</span> <span
  m='664910'>the</span> <span m='665030'>first</span> <span m='665360'>or</span>
  <span m='665510'>the</span> <span m='665600'>second.</span> <span
  m='666020'>And</span> <span m='666140'>I</span> <span m='666410'>found</span>
  <span m='666650'>that</span> <span m='667070'>fascinating.</span> </p><p><span
  m='668330'>And</span> <span m='668600'>maybe</span> <span
  m='668840'>I'll</span> <span m='668930'>even</span> <span
  m='669140'>tell</span> <span m='669350'>you</span> <span m='669590'>how</span>
  <span m='671240'>it</span> <span m='671330'>hit</span> <span
  m='671450'>me</span> <span m='671570'>in</span> <span m='671660'>the</span>
  <span m='671750'>head</span> <span m='671960'>that</span> <span
  m='672110'>this</span> <span m='672320'>was</span> <span m='672480'>the</span>
  <span m='672550'>story.</span> <span m='672980'>Because</span> <span
  m='673550'>I</span> <span m='673640'>really</span> <span
  m='673880'>wasn't</span> <span m='674120'>paying</span> <span
  m='674360'>attention.</span> <span m='675500'>But</span> <span
  m='677330'>I</span> <span m='677480'>love</span> <span m='677750'>the</span>
  <span m='677870'>singular</span> <span m='678230'>value</span> <span
  m='678500'>decomposition.</span> <span m='679190'>I'm</span> <span
  m='679400'>glad</span> <span m='679730'>to</span> <span m='679850'>see</span>
  <span m='680120'>that</span> <span m='680300'>people</span> <span
  m='680600'>are</span> <span m='681140'>drawing</span> <span
  m='681740'>parabolas</span> <span m='682400'>and</span> <span
  m='682550'>quarter</span> <span m='682820'>circles</span> <span
  m='683270'>and</span> <span m='683360'>figuring</span> <span
  m='683690'>out</span> <span m='683750'>what</span> <span m='684070'>the</span>
  <span m='684290'>minimum</span> <span m='684770'>SVD</span> <span
  m='685400'>value</span> <span m='685850'>is.</span> <span
  m='686840'>The</span> <span m='687020'>singular value</span> <span
  m='687420'>is</span> <span m='687910'>just--</span> <span
  m='689400'>it's</span> <span m='689660'>just</span> <span
  m='690050'>God's</span> <span m='690380'>gift</span> <span
  m='690590'>to</span> <span m='690680'>mankind.</span> <span
  m='691240'>It's</span> <span m='691400'>just</span> <span m='691630'>a</span>
  <span m='691730'>good</span> <span m='691970'>factorization.</span>
  </p><p><span m='694880'>One</span> <span m='695270'>of</span> <span
  m='695330'>the</span> <span m='695420'>things</span> <span m='696710'>I</span>
  <span m='696830'>was</span> <span m='697250'>playing</span> <span
  m='697670'>with</span> <span m='698030'>with</span> <span
  m='698390'>Julia</span> <span m='698900'>was</span> <span m='699140'>to</span>
  <span m='699290'>calculate</span> <span m='700060'>the</span> <span
  m='701630'>Jacobian</span> <span m='702200'>matrix</span> <span
  m='702650'>for</span> <span m='702830'>the</span> <span m='702950'>SVD.</span>
  <span m='703460'>So</span> <span m='704450'>you</span> <span
  m='704570'>know,</span> <span m='705500'>all</span> <span
  m='705710'>matrix</span> <span m='706040'>factorizations</span> <span
  m='706630'>are</span> <span m='706730'>just</span> <span
  m='706880'>changes</span> <span m='707300'>of</span> <span
  m='707360'>variables.</span> <span m='708230'>So</span> <span
  m='709250'>if</span> <span m='709370'>you</span> <span m='709580'>have</span>
  <span m='709850'>a</span> <span m='709910'>square</span> <span
  m='710210'>matrix,</span> <span m='710600'>n</span> <span m='710720'>by</span>
  <span m='710900'>n,</span> <span m='711650'>the</span> <span
  m='711780'>SVD--</span> <span m='712760'>I'm</span> <span
  m='712910'>sure</span> <span m='713090'>you</span> <span
  m='713210'>know</span> <span m='713390'>this--</span> <span
  m='713750'>is</span> <span m='714710'>the</span> <span m='715280'>U</span>
  <span m='715430'>matrix</span> <span m='715790'>is</span> <span
  m='715910'>really</span> <span m='716150'>n</span> <span
  m='716240'>times</span> <span m='716480'>n</span> <span m='716570'>mass</span>
  <span m='716740'>1 over</span> <span m='716960'>2</span> <span
  m='717110'>variable.</span> <span m='717630'>So</span> <span
  m='717740'>is</span> <span m='717830'>the</span> <span m='717950'>V.</span>
  <span m='718430'>And</span> <span m='718910'>the</span> <span
  m='719000'>sigma</span> <span m='719250'>has</span> <span
  m='719420'>got</span> <span m='719630'>n</span> <span
  m='719810'>variables.</span> </p><p><span m='720590'>Put</span> <span
  m='720770'>it</span> <span m='720830'>all</span> <span
  m='720950'>together,</span> <span m='721310'>you</span> <span
  m='721370'>got</span> <span m='721520'>n</span> <span
  m='721640'>squared.</span> <span m='722130'>So</span> <span
  m='722660'>it's</span> <span m='722810'>just</span> <span m='722960'>a</span>
  <span m='723020'>change</span> <span m='723290'>of</span> <span
  m='723350'>variables.</span> <span m='723890'>And</span> <span
  m='723980'>every</span> <span m='724160'>time</span> <span
  m='724370'>you</span> <span m='724460'>change</span> <span
  m='724670'>variables,</span> <span m='725720'>you</span> <span
  m='725810'>can</span> <span m='725990'>form</span> <span
  m='726440'>that</span> <span m='726620'>big</span> <span
  m='726830'>matrix,</span> <span m='727490'>n</span> <span
  m='727640'>squared</span> <span m='727880'>by</span> <span m='728030'>n</span>
  <span m='728120'>squared</span> <span m='728780'>of</span> <span
  m='729470'>dy</span> <span m='730340'>dx,</span> <span
  m='731020'>compute</span> <span m='731330'>its</span> <span
  m='731480'>determinant,</span> <span m='733010'>and</span> <span
  m='733100'>get</span> <span m='733250'>an</span> <span
  m='733370'>answer.</span> </p><p><span m='733820'>And</span> <span
  m='734120'>I</span> <span m='734210'>wanted</span> <span m='734400'>to</span>
  <span m='734470'>know--</span> <span m='735470'>I</span> <span
  m='735560'>actually</span> <span m='735800'>knew</span> <span
  m='735950'>the</span> <span m='736040'>theoretical</span> <span
  m='736550'>answer</span> <span m='736940'>for</span> <span
  m='737090'>that.</span> <span m='737330'>And</span> <span m='737420'>I</span>
  <span m='737480'>wanted</span> <span m='737750'>to</span> <span
  m='737870'>see</span> <span m='738170'>a</span> <span
  m='738230'>computer</span> <span m='739190'>confirm</span> <span
  m='739670'>that</span> <span m='739820'>theoretical</span> <span
  m='740300'>answer.</span> <span m='741290'>And</span> <span
  m='742460'>I</span> <span m='742550'>spoke</span> <span m='742850'>to</span>
  <span m='742940'>some</span> <span m='743120'>people</span> <span
  m='743420'>who</span> <span m='743930'>wrote</span> <span
  m='744290'>auto</span> <span m='744550'>diff</span> <span m='744870'>in</span>
  <span m='745130'>non-Julia</span> <span m='745790'>languages.</span> <span
  m='746810'>And</span> <span m='746930'>I</span> <span m='746990'>was</span>
  <span m='747080'>surprised</span> <span m='747530'>by</span> <span
  m='747680'>the</span> <span m='747800'>answer.</span> </p><p><span
  m='748190'>They</span> <span m='748310'>said,</span> <span
  m='749210'>oh,</span> <span m='749690'>yeah.</span> <span m='749900'>We</span>
  <span m='750050'>could</span> <span m='750200'>teach</span> <span
  m='750650'>the</span> <span m='750830'>answer</span> <span
  m='751130'>to</span> <span m='751310'>our</span> <span
  m='751430'>system.</span> <span m='752440'>I</span> <span
  m='752500'>said,</span> <span m='752620'>what</span> <span
  m='752710'>do</span> <span m='752770'>you</span> <span m='752830'>mean</span>
  <span m='753010'>you</span> <span m='753070'>could</span> <span
  m='753220'>teach</span> <span m='753610'>the</span> <span
  m='753760'>answer?</span> </p><p><span m='754050'>Why</span> <span
  m='754180'>doesn't it</span> <span m='754360'>just</span> <span
  m='754480'>compute</span> <span m='754840'>the</span> <span
  m='754990'>answer?</span> <span m='755240'>Why do you</span> <span
  m='755350'>have</span> <span m='755470'>to</span> <span
  m='755560'>teach</span> <span m='755860'>the</span> <span
  m='756040'>answer?</span> <span m='756970'>I</span> <span
  m='757030'>thought</span> <span m='757180'>that</span> <span
  m='757300'>was</span> <span m='757420'>all</span> <span
  m='757540'>wrong.</span> <span m='758530'>Because in</span> <span
  m='758820'>Julia,</span> <span m='759130'>we</span> <span
  m='759220'>didn't</span> <span m='759370'>have</span> <span
  m='759640'>to</span> <span m='759730'>teach</span> <span m='760030'>it.</span>
  <span m='760150'>It</span> <span m='761140'>would</span> <span
  m='761320'>actually</span> <span m='761560'>calculate</span> <span
  m='762040'>it.</span> </p><p><span m='762850'>And</span> <span
  m='762970'>then</span> <span m='763300'>I</span> <span
  m='763390'>started</span> <span m='763720'>to</span> <span
  m='763810'>understand</span> <span m='764230'>a</span> <span
  m='764290'>little</span> <span m='764500'>bit</span> <span
  m='764650'>more</span> <span m='764920'>about</span> <span
  m='765130'>what</span> <span m='765250'>auto</span> <span
  m='765490'>diff</span> <span m='765670'>was</span> <span
  m='765790'>doing</span> <span m='766060'>and</span> <span
  m='766150'>what</span> <span m='766300'>Julia</span> <span
  m='766630'>was</span> <span m='766750'>doing.</span> <span
  m='767540'>And</span> <span m='767590'>so</span> <span m='767770'>this</span>
  <span m='767980'>is</span> <span m='768100'>how</span> <span
  m='768310'>this</span> <span m='768490'>notebook</span> <span
  m='768850'>came</span> <span m='769060'>to</span> <span m='769180'>be.</span>
  <span m='769760'>So</span> <span m='769990'>let</span> <span
  m='770140'>me</span> <span m='770260'>start--</span> <span
  m='770980'>I'm</span> <span m='771070'>saying</span> <span
  m='771310'>too</span> <span m='771460'>much.</span> <span
  m='772150'>Let</span> <span m='772270'>me</span> <span m='772360'>start</span>
  <span m='772660'>with</span> <span m='772780'>an</span> <span
  m='772870'>example</span> <span m='773690'>that</span> <span
  m='774100'>might</span> <span m='774610'>kind</span> <span
  m='774850'>of</span> <span m='774910'>hit</span> <span m='775090'>home.</span>
  </p><p><span m='775870'>So</span> <span m='776350'>I'm</span> <span
  m='776530'>going</span> <span m='776800'>to</span> <span
  m='776920'>compute</span> <span m='777340'>the</span> <span
  m='777430'>square</span> <span m='777730'>root</span> <span
  m='777880'>of</span> <span m='778030'>x,</span> <span m='778500'>a</span>
  <span m='778570'>real</span> <span m='778810'>simple</span> <span
  m='779140'>example.</span> <span m='779680'>You</span> <span
  m='779750'>know,</span> <span m='779860'>a square</span> <span
  m='780130'>root's</span> <span m='780250'>pretty</span> <span
  m='780430'>easy.</span> <span m='781120'>I'm</span> <span
  m='781210'>going</span> <span m='781330'>to</span> <span
  m='781420'>take</span> <span m='781690'>one</span> <span m='781820'>of</span>
  <span m='781890'>the</span> <span m='782020'>oldest</span> <span
  m='782350'>algorithms</span> <span m='782800'>known</span> <span
  m='783010'>to</span> <span m='783100'>mankind,</span> <span
  m='784420'>the</span> <span m='784540'>Babylonian</span> <span
  m='785020'>square</span> <span m='785290'>root</span> <span
  m='785470'>algorithm.</span> </p><p><span m='785920'>It</span> <span
  m='786010'>says</span> <span m='786430'>start</span> <span
  m='786700'>with</span> <span m='786840'>a</span> <span
  m='786880'>starting</span> <span m='787210'>guess</span> <span
  m='787450'>t.</span> <span m='788230'>Maybe</span> <span
  m='788470'>it's</span> <span m='788590'>a</span> <span
  m='788620'>little</span> <span m='788800'>bit</span> <span
  m='788920'>too</span> <span m='789100'>low</span> <span m='789340'>for</span>
  <span m='789460'>the</span> <span m='789520'>square</span> <span
  m='789760'>root</span> <span m='789880'>of</span> <span m='789970'>x.</span>
  <span m='790720'>Get</span> <span m='790930'>x</span> <span
  m='791140'>over</span> <span m='791320'>t.</span> <span m='791590'>So</span>
  <span m='791740'>that</span> <span m='791860'>would</span> <span
  m='791950'>be</span> <span m='792040'>too</span> <span
  m='792190'>large.</span> <span m='793270'>Go</span> <span
  m='793450'>ahead</span> <span m='793570'>and</span> <span
  m='793660'>take</span> <span m='793810'>the</span> <span
  m='793960'>average,</span> <span m='794350'>and</span> <span
  m='794470'>repeat.</span> </p><p><span m='795130'>OK.</span> <span
  m='795580'>This</span> <span m='795790'>is</span> <span
  m='795880'>equivalent</span> <span m='796270'>to</span> <span
  m='796370'>a</span> <span m='796410'>Newton's</span> <span
  m='796720'>method</span> <span m='797020'>for</span> <span
  m='797140'>taking</span> <span m='797440'>the</span> <span
  m='797500'>square</span> <span m='797770'>root.</span> <span
  m='798980'>And</span> <span m='799660'>it's</span> <span
  m='799780'>been</span> <span m='799900'>known</span> <span
  m='800170'>for</span> <span m='800350'>millennia</span> <span
  m='800920'>to</span> <span m='801220'>mankind.</span> <span
  m='801950'>So</span> <span m='802060'>it's</span> <span m='802210'>not</span>
  <span m='804940'>the</span> <span m='805030'>latest</span> <span
  m='805390'>research,</span> <span m='806100'>by</span> <span
  m='806260'>any</span> <span m='806410'>means,</span> <span
  m='806770'>for</span> <span m='807190'>computing</span> <span
  m='807610'>square</span> <span m='807850'>roots.</span> <span
  m='808870'>But</span> <span m='809310'>it</span> <span m='809980'>works</span>
  <span m='810250'>very</span> <span m='810430'>effectively.</span> </p><p><span
  m='811030'>And</span> <span m='812000'>here's</span> <span m='812560'>a</span>
  <span m='812620'>little</span> <span m='812830'>Julia</span> <span
  m='813160'>code</span> <span m='813460'>that</span> <span
  m='813610'>actually</span> <span m='814030'>will</span> <span
  m='816310'>implement it.</span> <span m='816850'>It</span> <span
  m='816910'>probably</span> <span m='817150'>looks</span> <span
  m='817360'>like</span> <span m='817570'>code</span> <span m='817870'>in</span>
  <span m='817990'>any</span> <span m='818170'>language.</span> <span
  m='819050'>So</span> <span m='819700'>I'm</span> <span m='819790'>going</span>
  <span m='819910'>to</span> <span m='820270'>start</span> <span
  m='820600'>off</span> <span m='820750'>at</span> <span m='820870'>1.</span>
  </p><p><span m='821350'>So</span> <span m='822070'>literally,</span> <span
  m='822490'>I'm</span> <span m='822610'>just</span> <span
  m='822730'>going</span> <span m='822810'>to</span> <span
  m='822880'>take</span> <span m='823540'>1</span> <span m='823870'>plus</span>
  <span m='824590'>the</span> <span m='824710'>starting</span> <span
  m='825010'>value of</span> <span m='825280'>x</span> <span
  m='825520'>and</span> <span m='825610'>divide</span> <span
  m='825880'>by</span> <span m='826000'>2.</span> <span m='827320'>And</span>
  <span m='827440'>then</span> <span m='827620'>I'm</span> <span
  m='827710'>going</span> <span m='827830'>to</span> <span
  m='827920'>repeat.</span> <span m='828910'>OK?</span> <span
  m='829330'>And</span> <span m='831110'>we</span> <span m='831670'>can</span>
  <span m='831820'>check</span> <span m='832120'>that</span> <span
  m='832300'>the</span> <span m='832420'>algorithm</span> <span
  m='832810'>works.</span> </p><p><span m='833200'>Here's</span> <span
  m='833650'>alpha is</span> <span m='833770'>pi.</span> <span
  m='834520'>And</span> <span m='835030'>so</span> <span m='835210'>I'll</span>
  <span m='835270'>take</span> <span m='835480'>the</span> <span
  m='835570'>Babylonian</span> <span m='836320'>algorithm</span> <span
  m='836770'>and</span> <span m='836860'>compare</span> <span
  m='837190'>it</span> <span m='837250'>to</span> <span
  m='837370'>Julia's</span> <span m='837670'>built</span> <span
  m='837940'>in.</span> <span m='838240'>And</span> <span m='838330'>you</span>
  <span m='838420'>see</span> <span m='839350'>it</span> <span
  m='839440'>gives</span> <span m='840160'>the</span> <span
  m='840250'>right</span> <span m='840430'>answer.</span> </p><p><span
  m='841420'>Here</span> <span m='841600'>it</span> <span m='841660'>is</span>
  <span m='841780'>with the</span> <span m='841930'>square root of</span> <span
  m='842280'>two.</span> <span m='842930'>It's</span> <span
  m='843160'>always</span> <span m='843370'>good</span> <span
  m='843550'>to</span> <span m='843640'>check</span> <span
  m='843940'>your</span> <span m='844270'>code</span> <span
  m='844540'>works.</span> <span m='845680'>OK?</span> <span m='848130'>I</span>
  <span m='848230'>like</span> <span m='848410'>to</span> <span
  m='848590'>see</span> <span m='848770'>things</span> <span
  m='849100'>graphically,</span> <span m='850180'>so</span> <span
  m='850720'>I</span> <span m='851020'>ran</span> <span m='851320'>the</span>
  <span m='851470'>algorithm</span> <span m='853180'>for</span> <span
  m='853360'>lots</span> <span m='853630'>of</span> <span
  m='853690'>values</span> <span m='854140'>of</span> <span m='854260'>x.</span>
  <span m='854530'>And</span> <span m='855040'>I</span> <span
  m='855100'>love</span> <span m='855280'>doing</span> <span
  m='855520'>this.</span> </p><p><span m='856740'>I</span> <span
  m='856810'>kind</span> <span m='857020'>of</span> <span m='857080'>wish</span>
  <span m='857530'>that</span> <span m='857920'>in</span> <span
  m='858040'>the</span> <span m='858130'>previous</span> <span
  m='858640'>talk--</span> <span m='859940'>if</span> <span
  m='860060'>I'd</span> <span m='860200'>only</span> <span
  m='860350'>worked</span> <span m='860530'>fast</span> <span
  m='860830'>enough,</span> <span m='862060'>I</span> <span
  m='862120'>wanted</span> <span m='862290'>to</span> <span
  m='862370'>build</span> <span m='862570'>a</span> <span
  m='862630'>little</span> <span m='862780'>GUI</span> <span
  m='863110'>where</span> <span m='863230'>I</span> <span m='863260'>can</span>
  <span m='863440'>move</span> <span m='863650'>the</span> <span
  m='863770'>points</span> <span m='864300'>in</span> <span
  m='864550'>front</span> <span m='864700'>of</span> <span
  m='864760'>your</span> <span m='864880'>eyes.</span> <span
  m='865510'>Maybe</span> <span m='865750'>you</span> <span
  m='865840'>have</span> <span m='866020'>one</span> <span m='866170'>in</span>
  <span m='866230'>MATLAB.</span> <span m='866560'>I</span> <span
  m='866620'>bet</span> <span m='866770'>you</span> <span m='866860'>do.</span>
  <span m='867790'>But</span> <span m='867970'>I</span> <span
  m='868030'>wanted</span> <span m='868300'>to</span> <span
  m='868360'>build</span> <span m='868600'>it.</span> <span
  m='868720'>But</span> <span m='868990'>I</span> <span m='869020'>didn't</span>
  <span m='869170'>get</span> <span m='869290'>there</span> <span
  m='869440'>fast</span> <span m='869680'>enough.</span> </p><p><span
  m='870520'>But</span> <span m='870820'>here</span> <span
  m='871810'>this</span> <span m='872020'>is</span> <span m='872110'>the</span>
  <span m='872170'>sort</span> <span m='872350'>of</span> <span
  m='872410'>thing.</span> <span m='872650'>And</span> <span m='872740'>I</span>
  <span m='872860'>like</span> <span m='873040'>to</span> <span
  m='873130'>see</span> <span m='873310'>the</span> <span
  m='873400'>convergence.</span> <span m='874260'>And so</span> <span
  m='874600'>you</span> <span m='874660'>could</span> <span
  m='874780'>see</span> <span m='874900'>the</span> <span
  m='875020'>digits</span> <span m='875350'>converging,</span> <span
  m='876270'>the</span> <span m='877240'>parabola</span> <span
  m='877660'>on</span> <span m='877750'>the</span> <span
  m='877810'>bottom.</span> <span m='878140'>The</span> <span
  m='878230'>block</span> <span m='878590'>is</span> <span m='878710'>the</span>
  <span m='878800'>square</span> <span m='879070'>root,</span> <span
  m='879190'>of</span> <span m='879280'>course.</span> <span
  m='879880'>So</span> <span m='880750'>there</span> <span m='880990'>it</span>
  <span m='881080'>is.</span> <span m='881290'>There's</span> <span
  m='881500'>the</span> <span m='881620'>Babylonian</span> <span
  m='882430'>algorithm.</span> </p><p><span m='883810'>I</span> <span
  m='883960'>would</span> <span m='884110'>like</span> <span
  m='884320'>to</span> <span m='884440'>get</span> <span m='884920'>the</span>
  <span m='885100'>derivative</span> <span m='885670'>of</span> <span
  m='885760'>square</span> <span m='886030'>root.</span> <span
  m='887020'>But</span> <span m='887380'>the</span> <span
  m='887500'>rules</span> <span m='887800'>of</span> <span m='887860'>the</span>
  <span m='887950'>game</span> <span m='888700'>are</span> <span
  m='889150'>I'm</span> <span m='889270'>not</span> <span
  m='889420'>going</span> <span m='889600'>to</span> <span
  m='889720'>type</span> <span m='889990'>method</span> <span
  m='890290'>1</span> <span m='890500'>or</span> <span m='890590'>method</span>
  <span m='890860'>2.</span> <span m='891460'>I'm</span> <span
  m='891550'>not</span> <span m='891730'>going</span> <span m='891850'>to</span>
  <span m='891910'>do--</span> <span m='892220'>you'll</span> <span
  m='892270'>never</span> <span m='892510'>see</span> <span m='892660'>me</span>
  <span m='892750'>type</span> <span m='892990'>1/2</span> <span
  m='893440'>x</span> <span m='893650'>to</span> <span m='893710'>the</span>
  <span m='893770'>minus</span> <span m='894090'>1/2.</span> <span
  m='894700'>Right?</span> </p><p><span m='894860'>You</span> <span
  m='894980'>all</span> <span m='895060'>know</span> <span
  m='895210'>that's</span> <span m='895390'>the</span> <span
  m='895450'>derivative.</span> <span m='896440'>I</span> <span
  m='896530'>will</span> <span m='896650'>not</span> <span
  m='896800'>type</span> <span m='897040'>that.</span> <span m='897500'>I</span>
  <span m='897610'>will</span> <span m='897700'>not.</span> <span
  m='898000'>It's</span> <span m='898150'>not</span> <span
  m='898270'>going</span> <span m='898390'>to</span> <span
  m='898450'>come</span> <span m='898660'>anywhere</span> <span
  m='898990'>from</span> <span m='899170'>Julia.</span> </p><p><span
  m='899910'>OK.</span> <span m='900220'>And</span> <span m='900340'>the</span>
  <span m='900400'>second</span> <span m='900700'>thing</span> <span
  m='900910'>is</span> <span m='901060'>I'm</span> <span m='901150'>not</span>
  <span m='901250'>going</span> <span m='901340'>to</span> <span
  m='901410'>do</span> <span m='901510'>a</span> <span m='901540'>finite</span>
  <span m='901840'>difference.</span> <span m='902860'>All</span> <span
  m='902920'>right?</span> <span m='903370'>I'm</span> <span
  m='903490'>going</span> <span m='903590'>to</span> <span m='903700'>get</span>
  <span m='903820'>that</span> <span m='903970'>square</span> <span
  m='904210'>root,</span> <span m='904540'>but</span> <span
  m='904720'>not</span> <span m='904960'>by</span> <span m='906070'>sort</span>
  <span m='906310'>of</span> <span m='906610'>either</span> <span
  m='906900'>of</span> <span m='907000'>the</span> <span m='907100'>two</span>
  <span m='907120'>things</span> <span m='907420'>that</span> <span
  m='907810'>I'm</span> <span m='907900'>sure</span> <span m='908080'>you</span>
  <span m='908170'>would</span> <span m='908260'>think</span> <span
  m='908470'>of.</span> <span m='909260'>Right?</span> <span
  m='910750'>Here's</span> <span m='911020'>how</span> <span
  m='911170'>I'm</span> <span m='911280'>going</span> <span m='911370'>to</span>
  <span m='911470'>do</span> <span m='911650'>it.</span> <span
  m='911860'>And</span> <span m='912310'>I'm</span> <span
  m='912520'>going</span> <span m='912650'>to</span> <span m='912940'>do</span>
  <span m='913240'>a</span> <span m='913270'>little</span> <span
  m='913480'>bit</span> <span m='913600'>of</span> <span m='913660'>Julia</span>
  <span m='913990'>code.</span> <span m='914210'>There'll</span> <span
  m='914290'>be</span> <span m='914440'>eight</span> <span
  m='914620'>lines</span> <span m='914890'>of</span> <span
  m='914980'>Julia.</span> </p><p><span m='915310'>But</span> <span
  m='915400'>I'm</span> <span m='915490'>not</span> <span
  m='915580'>going</span> <span m='915700'>to</span> <span
  m='915760'>completely</span> <span m='916180'>say</span> <span
  m='916330'>how</span> <span m='916450'>it</span> <span m='916510'>works</span>
  <span m='916810'>yet.</span> <span m='917130'>I'll</span> <span
  m='918130'>keep</span> <span m='918310'>you</span> <span m='918400'>in</span>
  <span m='918460'>suspense</span> <span m='918970'>for</span> <span
  m='919120'>maybe</span> <span m='919330'>about</span> <span
  m='919510'>five</span> <span m='919750'>minutes.</span> <span
  m='920200'>And</span> <span m='920290'>then</span> <span
  m='920440'>I'll</span> <span m='920500'>tell</span> <span
  m='920680'>you</span> <span m='920800'>how</span> <span m='921340'>it</span>
  <span m='921430'>works.</span> <span m='922280'>All</span> <span
  m='922360'>right?</span> </p><p><span m='922780'>So</span> <span
  m='923040'>here's</span> <span m='923300'>eight</span> <span
  m='923530'>lines</span> <span m='923890'>of</span> <span
  m='923980'>Julia</span> <span m='924280'>code</span> <span
  m='925090'>that</span> <span m='925390'>will</span> <span
  m='925570'>get</span> <span m='925750'>me</span> <span m='925900'>the</span>
  <span m='925990'>square</span> <span m='926260'>root.</span> <span
  m='926900'>So</span> <span m='927070'>in</span> <span m='927160'>these</span>
  <span m='927340'>three</span> <span m='927580'>lines,</span> <span
  m='928090'>I'm</span> <span m='928180'>going</span> <span m='928290'>to</span>
  <span m='928360'>create</span> <span m='929800'>a</span> <span
  m='929890'>Julia</span> <span m='930220'>type.</span> <span
  m='930760'>I'm</span> <span m='930820'>going</span> <span m='930940'>to</span>
  <span m='931000'>call</span> <span m='931270'>it</span> <span
  m='931540'>a</span> <span m='931630'>D</span> <span m='933310'>for</span>
  <span m='933490'>a</span> <span m='933550'>dual</span> <span
  m='933910'>number,</span> <span m='934420'>which</span> <span
  m='934660'>is</span> <span m='935020'>a</span> <span m='935110'>name</span>
  <span m='935500'>that</span> <span m='935830'>goes</span> <span
  m='936100'>back</span> <span m='936850'>at</span> <span
  m='936910'>least</span> <span m='937180'>a</span> <span
  m='937210'>century,</span> <span m='937750'>maybe</span> <span
  m='938020'>more.</span> <span m='939310'>So</span> <span m='939700'>I'm</span>
  <span m='939790'>going</span> <span m='939910'>to</span> <span
  m='939970'>create</span> <span m='940300'>a D</span> <span
  m='940390'>type.</span> </p><p><span m='941440'>And</span> <span
  m='941680'>all</span> <span m='941890'>this</span> <span m='942160'>is</span>
  <span m='942520'>is</span> <span m='943240'>a</span> <span
  m='943360'>pair</span> <span m='943720'>of</span> <span
  m='943780'>floats.</span> <span m='944890'>So</span> <span
  m='945910'>it's</span> <span m='946030'>a</span> <span m='946060'>tuple</span>
  <span m='946480'>with</span> <span m='946840'>a</span> <span
  m='946900'>pair</span> <span m='947170'>of</span> <span
  m='947230'>floats.</span> <span m='947590'>It's</span> <span
  m='947710'>going</span> <span m='949070'>to</span> <span m='949120'>be</span>
  <span m='949210'>some</span> <span m='949360'>sort</span> <span
  m='949510'>of</span> <span m='949780'>numerical</span> <span
  m='950230'>function</span> <span m='950620'>and</span> <span
  m='950710'>derivative</span> <span m='951130'>pair.</span> </p><p><span
  m='952210'>So</span> <span m='952690'>three</span> <span m='952960'>of</span>
  <span m='953020'>my eight</span> <span m='953300'>lines</span> <span
  m='953730'>is</span> <span m='953860'>to</span> <span m='953980'>create</span>
  <span m='954370'>a</span> <span m='954430'>D.</span> <span
  m='955240'>In</span> <span m='955360'>Julia</span> <span
  m='955630'>language,</span> <span m='956860'>this</span> <span
  m='957010'>means</span> <span m='957220'>to</span> <span m='957320'>use</span>
  <span m='957430'>a</span> <span m='957490'>subtype</span> <span
  m='957940'>of</span> <span m='958060'>a</span> <span m='958120'>number,</span>
  <span m='958620'>so</span> <span m='958690'>we're</span> <span
  m='958780'>going</span> <span m='958860'>to</span> <span
  m='958930'>treat</span> <span m='959140'>it</span> <span
  m='959230'>like</span> <span m='959440'>a</span> <span
  m='959500'>number.</span> <span m='960280'>Right?</span> <span
  m='960400'>We</span> <span m='960490'>want</span> <span m='960670'>to</span>
  <span m='960730'>be</span> <span m='960790'>able</span> <span
  m='960910'>to</span> <span m='961000'>add,</span> <span
  m='961240'>multiply,</span> <span m='961840'>and</span> <span
  m='961960'>divide</span> <span m='962350'>these</span> <span
  m='963070'>ordered</span> <span m='963370'>pairs.</span> </p><p><span
  m='964450'>But</span> <span m='964570'>it's</span> <span
  m='964660'>just</span> <span m='964870'>a</span> <span m='964900'>pair</span>
  <span m='965110'>of</span> <span m='965200'>numbers.</span> <span
  m='966130'>Don't</span> <span m='966710'>let the</span> <span
  m='966820'>Julia</span> <span m='967090'>scare</span> <span
  m='967390'>you.</span> <span m='967870'>It's</span> <span
  m='967990'>just</span> <span m='968200'>a</span> <span
  m='968230'>function</span> <span m='968560'>derivative</span> <span
  m='968950'>numerical</span> <span m='969400'>pair.</span> <span
  m='970110'>OK?</span> </p><p><span m='970720'>And</span> <span
  m='970960'>what's</span> <span m='971200'>these</span> <span
  m='971380'>other</span> <span m='971560'>five</span> <span
  m='971830'>lines?</span> <span m='972310'>Well,</span> <span
  m='973390'>I</span> <span m='973570'>want</span> <span m='973720'>to</span>
  <span m='973810'>teach</span> <span m='974050'>it</span> <span
  m='974110'>the</span> <span m='974200'>sum</span> <span m='974440'>rule</span>
  <span m='974640'>and</span> <span m='974710'>the</span> <span
  m='974770'>quotient</span> <span m='975160'>rule.</span> <span
  m='975460'>So</span> <span m='977250'>you</span> <span m='977460'>all</span>
  <span m='977590'>remember</span> <span m='977830'>the</span> <span
  m='977920'>same</span> <span m='978100'>rule.</span> <span m='978400'>I</span>
  <span m='978460'>guess</span> <span m='978610'>that's</span> <span
  m='978760'>the</span> <span m='978850'>easy</span> <span
  m='979120'>one.</span> </p><p><span m='979660'>The</span> <span
  m='979990'>quotient</span> <span m='980410'>rule--</span> <span
  m='981280'>I</span> <span m='981370'>still</span> <span m='981580'>have</span>
  <span m='982300'>my</span> <span m='982450'>teacher</span> <span
  m='982780'>from</span> <span m='982960'>high</span> <span
  m='983050'>school</span> <span m='983620'>ringing</span> <span
  m='983920'>in</span> <span m='984010'>the</span> <span m='984070'>back</span>
  <span m='984310'>of</span> <span m='984370'>my</span> <span
  m='984520'>ear.</span> <span m='984940'>The</span> <span
  m='985030'>denominator</span> <span m='985510'>times</span> <span
  m='985720'>the</span> <span m='985780'>derivative of</span> <span
  m='985930'>the</span> <span m='986020'>numerator</span> <span
  m='986450'>and</span> <span m='986520'>minus</span> <span
  m='986710'>the</span> <span m='986770'>numerator--</span> <span
  m='987250'>you</span> <span m='987370'>all</span> <span m='987520'>have</span>
  <span m='987620'>that</span> <span m='987720'>jingle</span> <span
  m='988380'>in</span> <span m='988480'>your</span> <span
  m='988570'>brain,</span> <span m='988780'>too?</span> <span
  m='989250'>I</span> <span m='989320'>bet</span> <span m='989470'>you</span>
  <span m='989560'>do.</span> <span m='990100'>divided</span> <span
  m='990400'>by</span> <span m='990490'>the</span> <span
  m='990610'>denominator</span> <span m='991030'>squared.</span> <span
  m='991860'>Can't</span> <span m='992050'>even</span> <span
  m='992200'>get</span> <span m='992360'>it out</span> <span
  m='992500'>of</span> <span m='992560'>my</span> <span m='992680'>head.</span>
  </p><p><span m='995670'>So</span> <span m='995890'>there's</span> <span
  m='996060'>the</span> <span m='996120'>quotient</span> <span
  m='996480'>rule.</span> <span m='998090'>And</span> <span m='999440'>so</span>
  <span m='999590'>what</span> <span m='999680'>are</span> <span
  m='999740'>we</span> <span m='999800'>doing</span> <span m='1000070'>in</span>
  <span m='1000130'>these</span> <span m='1000280'>five</span> <span
  m='1000550'>lines?</span> <span m='1000880'>Well,</span> <span
  m='1001390'>first</span> <span m='1001660'>of</span> <span
  m='1001780'>all,</span> <span m='1003160'>I</span> <span
  m='1003250'>want</span> <span m='1003430'>to</span> <span
  m='1003700'>overlook</span> <span m='1004210'>plus</span> <span
  m='1004620'>and</span> <span m='1004720'>divide</span> <span
  m='1005230'>and</span> <span m='1005320'>a</span> <span m='1005380'>few</span>
  <span m='1005530'>other</span> <span m='1005740'>things.</span> </p><p><span
  m='1006290'>And</span> <span m='1007120'>Julia</span> <span
  m='1007540'>wants</span> <span m='1007900'>me</span> <span
  m='1008110'>to</span> <span m='1008290'>say,</span> <span
  m='1008720'>are</span> <span m='1008740'>you</span> <span
  m='1008920'>sure?</span> <span m='1009430'>So</span> <span
  m='1009640'>the</span> <span m='1009730'>way</span> <span
  m='1009850'>you</span> <span m='1009940'>say</span> <span
  m='1010090'>are</span> <span m='1010150'>you</span> <span
  m='1010240'>sure</span> <span m='1010570'>is</span> <span
  m='1010690'>that</span> <span m='1010810'>I'm</span> <span
  m='1010900'>going</span> <span m='1011020'>to</span> <span
  m='1011110'>import</span> <span m='1011440'>plus</span> <span
  m='1011680'>and</span> <span m='1011770'>divide.</span> <span
  m='1012820'>Because</span> <span m='1013030'>it would</span> <span
  m='1013120'>be</span> <span m='1013210'>dangerous</span> <span
  m='1013630'>to</span> <span m='1013750'>play</span> <span
  m='1013960'>with</span> <span m='1014080'>plus.</span> </p><p><span
  m='1014890'>So</span> <span m='1015730'>here</span> <span
  m='1015970'>I'm</span> <span m='1016060'>going</span> <span
  m='1016180'>to</span> <span m='1016540'>plus</span> <span
  m='1016840'>two</span> <span m='1016990'>dual</span> <span
  m='1017220'>numbers.</span> <span m='1017830'>We're</span> <span
  m='1017950'>going</span> <span m='1018070'>to</span> <span
  m='1018160'>add</span> <span m='1018310'>the</span> <span
  m='1018400'>function</span> <span m='1018790'>and</span> <span
  m='1018910'>the</span> <span m='1018970'>derivatives.</span> <span
  m='1019780'>Divide</span> <span m='1020140'>two</span> <span
  m='1020350'>dual</span> <span m='1020560'>numbers.</span> <span
  m='1021010'>We're</span> <span m='1021160'>going</span> <span
  m='1021260'>to</span> <span m='1021340'>divide</span> <span
  m='1021790'>the</span> <span m='1021880'>function</span> <span
  m='1022240'>values</span> <span m='1022720'>and</span> <span
  m='1023140'>denominator</span> <span m='1023260'>times</span> <span
  m='1023620'>the</span> <span m='1023830'>numerator,</span> <span
  m='1024829'>blah,</span> <span m='1024880'>blah,</span> <span
  m='1025000'>blah, you get</span> <span m='1025119'>it.</span> <span
  m='1025359'>OK.</span> </p><p><span m='1026730'>That's</span> <span
  m='1026970'>six</span> <span m='1027190'>of</span> <span
  m='1027250'>the</span> <span m='1027369'>eight</span> <span
  m='1027490'>lines.</span> <span m='1029260'>The</span> <span
  m='1029349'>seventh</span> <span m='1029710'>line</span> <span
  m='1030040'>is,</span> <span m='1030790'>if</span> <span m='1031000'>I</span>
  <span m='1031119'>have</span> <span m='1031450'>a</span> <span
  m='1031540'>dual</span> <span m='1031839'>number,</span> <span
  m='1032200'>I</span> <span m='1032290'>wanted</span> <span
  m='1032500'>to</span> <span m='1033040'>convert</span> <span
  m='1033400'>it.</span> <span m='1033849'>You</span> <span
  m='1033970'>know</span> <span m='1034069'>how</span> <span
  m='1034670'>the</span> <span m='1034770'>wheels</span> <span
  m='1034810'>are</span> <span m='1034869'>embedded</span> <span
  m='1035200'>in</span> <span m='1035290'>the</span> <span
  m='1035380'>complexes?</span> </p><p><span m='1036950'>We</span> <span
  m='1037089'>have</span> <span m='1037210'>to</span> <span
  m='1037300'>tell</span> <span m='1037510'>Julia</span> <span
  m='1037930'>to</span> <span m='1038980'>take</span> <span
  m='1039220'>the</span> <span m='1039310'>dual</span> <span
  m='1039579'>number</span> <span m='1039910'>and</span> <span
  m='1040000'>stick</span> <span m='1040240'>a</span> <span
  m='1040270'>zero</span> <span m='1040750'>in.</span> <span
  m='1041160'>And</span> <span m='1041440'>then</span> <span
  m='1042160'>dual</span> <span m='1042369'>numbers</span> <span
  m='1042730'>and</span> <span m='1042849'>regular</span> <span
  m='1043150'>numbers</span> <span m='1043480'>can</span> <span
  m='1043690'>play</span> <span m='1044020'>nicely</span> <span
  m='1044319'>together.</span> <span m='1045490'>And</span> <span
  m='1045579'>this</span> <span m='1046329'>actually</span> <span
  m='1046690'>is</span> <span m='1046780'>the</span> <span
  m='1046869'>thing</span> <span m='1047140'>that</span> <span
  m='1047260'>actually</span> <span m='1047980'>says,</span> <span
  m='1048860'>if</span> <span m='1048880'>I</span> <span m='1049000'>have</span>
  <span m='1049180'>a</span> <span m='1049240'>dual</span> <span
  m='1049420'>number</span> <span m='1049670'>and</span> <span
  m='1049760'>a</span> <span m='1049820'>number</span> <span
  m='1050080'>in</span> <span m='1050200'>operation,</span> <span
  m='1050890'>promote</span> <span m='1051250'>them</span> <span
  m='1051520'>so</span> <span m='1051640'>they'll</span> <span
  m='1051780'>work</span> <span m='1052070'>as</span> <span
  m='1052280'>dual</span> <span m='1052420'>numbers--</span> <span
  m='1053230'>so</span> <span m='1054430'>eight</span> <span
  m='1054610'>lines</span> <span m='1054910'>of</span> <span
  m='1055000'>code.</span> </p><p><span m='1055850'>So</span> <span
  m='1056020'>the</span> <span m='1056110'>first</span> <span
  m='1056320'>thing</span> <span m='1056500'>I'm going to</span> <span
  m='1056590'>tell</span> <span m='1056830'>you</span> <span
  m='1057220'>is</span> <span m='1058360'>I'm</span> <span m='1058420'>going
  to</span> <span m='1058530'>remind</span> <span m='1058930'>you</span> <span
  m='1060550'>I</span> <span m='1060640'>never</span> <span
  m='1060820'>typed</span> <span m='1061090'>1/2</span> <span
  m='1061480'>x</span> <span m='1061720'>to the minus</span> <span
  m='1061990'>1/2.</span> <span m='1062280'>Do you</span> <span
  m='1062410'>agree?</span> </p><p><span m='1063190'>No</span> <span
  m='1063430'>one--</span> <span m='1063910'>I'm</span> <span
  m='1064060'>not</span> <span m='1064180'>importing</span> <span
  m='1064510'>any</span> <span m='1064630'>packages.</span> <span
  m='1065140'>It's</span> <span m='1065260'>not</span> <span
  m='1065380'>like</span> <span m='1065500'>it's</span> <span
  m='1065590'>coming</span> <span m='1065920'>in</span> <span
  m='1066070'>from</span> <span m='1066280'>the--</span> <span
  m='1066670'>I'm</span> <span m='1066760'>not</span> <span
  m='1066910'>sneaking</span> <span m='1067270'>it</span> <span
  m='1067360'>in</span> <span m='1067450'>from</span> <span
  m='1067600'>the</span> <span m='1067690'>side.</span> <span
  m='1068380'>There's</span> <span m='1068560'>no</span> <span
  m='1068770'>one</span> <span m='1068970'>half</span> <span
  m='1069160'>x</span> <span m='1069370'>to the</span> <span
  m='1069460'>minus</span> <span m='1069740'>1/2.</span> </p><p><span
  m='1070600'>And</span> <span m='1073460'>there's</span> <span
  m='1073630'>certainly</span> <span m='1074110'>not</span> <span
  m='1074350'>any</span> <span m='1074530'>numerical</span> <span
  m='1075220'>derivatives,</span> <span m='1076120'>either,</span> <span
  m='1076450'>right?</span> <span m='1078400'>Arguably,</span> <span
  m='1078820'>a</span> <span m='1078880'>rule</span> <span
  m='1079060'>that</span> <span m='1079190'>almost</span> <span
  m='1079450'>feels</span> <span m='1079600'>symbolic,</span> <span
  m='1080050'>the</span> <span m='1080140'>quotient</span> <span
  m='1080530'>rule</span> <span m='1080740'>and the</span> <span
  m='1080860'>addition</span> <span m='1081220'>rule.</span> <span
  m='1081460'>But</span> <span m='1081820'>no</span> <span
  m='1082450'>numerical</span> <span m='1082990'>finite</span> <span
  m='1083290'>differences</span> <span m='1083860'>at</span> <span
  m='1084070'>all</span> <span m='1084460'>here.</span> <span
  m='1085350'>OK.</span> </p><p><span m='1086930'>So</span> <span
  m='1087100'>first</span> <span m='1087400'>of</span> <span
  m='1087520'>all,</span> <span m='1088130'>let</span> <span
  m='1088150'>me</span> <span m='1088270'>show</span> <span
  m='1088540'>you</span> <span m='1088920'>here</span> <span
  m='1089860'>that</span> <span m='1093550'>I'm</span> <span
  m='1094120'>applying</span> <span m='1094570'>the</span> <span
  m='1094660'>Babylonian</span> <span m='1095230'>algorithm</span> <span
  m='1095650'>without</span> <span m='1095950'>rewriting</span> <span
  m='1096490'>code</span> <span m='1097420'>to</span> <span m='1097570'>a</span>
  <span m='1097630'>dual</span> <span m='1097840'>number</span> <span
  m='1098170'>now.</span> <span m='1098470'>Before</span> <span
  m='1098800'>we</span> <span m='1098920'>applied</span> <span
  m='1099210'>it</span> <span m='1099280'>to</span> <span
  m='1099370'>numbers.</span> <span m='1099890'>But</span> <span
  m='1099910'>now</span> <span m='1100030'>I'm</span> <span
  m='1100090'>going</span> <span m='1100210'>to</span> <span
  m='1100270'>play</span> <span m='1100450'>it</span> <span
  m='1100510'>to</span> <span m='1100630'>this</span> <span
  m='1100810'>dual</span> <span m='1100990'>number</span> <span
  m='1101230'>that</span> <span m='1101320'>I</span> <span
  m='1101380'>just</span> <span m='1101590'>invented.</span> </p><p><span
  m='1102820'>I'm</span> <span m='1102880'>going</span> <span
  m='1103000'>to</span> <span m='1103060'>apply</span> <span
  m='1103360'>it</span> <span m='1103600'>at</span> <span m='1103750'>49,</span>
  <span m='1104360'>1,</span> <span m='1104620'>because</span> <span
  m='1104800'>I</span> <span m='1104860'>know</span> <span
  m='1104950'>the</span> <span m='1105100'>answer.</span> <span
  m='1106320'>And</span> <span m='1106420'>then</span> <span
  m='1106540'>I'm</span> <span m='1106600'>going</span> <span
  m='1106720'>to</span> <span m='1106780'>compare</span> <span
  m='1107200'>it</span> <span m='1107440'>with--</span> <span
  m='1108010'>I'm</span> <span m='1108130'>taking</span> <span
  m='1108430'>one</span> <span m='1108610'>half</span> <span m='1108790'>of
  the</span> <span m='1108850'>square</span> <span m='1108970'>root</span> <span
  m='1109180'>of</span> <span m='1109300'>x</span> <span m='1109930'>just</span>
  <span m='1110290'>for</span> <span m='1110560'>comparison</span> <span
  m='1111100'>purposes</span> <span m='1111820'>and</span> <span
  m='1111900'>not</span> <span m='1112330'>in</span> <span m='1112420'>my</span>
  <span m='1112570'>own</span> <span m='1112900'>algorithm.</span> <span
  m='1113530'>And</span> <span m='1113650'>of</span> <span
  m='1113710'>course,</span> <span m='1113950'>you</span> <span
  m='1114040'>see</span> <span m='1114310'>that</span> <span
  m='1115270'>I'm</span> <span m='1115420'>getting</span> <span
  m='1115780'>magically</span> <span m='1116290'>the</span> <span
  m='1116380'>right</span> <span m='1116620'>answer</span> <span
  m='1117250'>without</span> <span m='1117730'>ever--</span> <span
  m='1118790'>so</span> <span m='1118930'>you</span> <span
  m='1119020'>should</span> <span m='1119170'>wonder,</span> <span
  m='1119410'>how</span> <span m='1119530'>did</span> <span m='1119650'>I</span>
  <span m='1119740'>do</span> <span m='1119920'>that?</span> <span
  m='1120160'>How</span> <span m='1120310'>did</span> <span m='1120430'>I</span>
  <span m='1120520'>get</span> <span m='1120700'>the</span> <span
  m='1120790'>derivative?</span> </p><p><span m='1121720'>We</span> <span
  m='1121810'>could</span> <span m='1121930'>take</span> <span
  m='1122110'>any</span> <span m='1122290'>number</span> <span
  m='1122500'>you</span> <span m='1122620'>like.</span> <span
  m='1122920'>Here's</span> <span m='1123130'>100.</span> <span
  m='1124510'>If</span> <span m='1124630'>you</span> <span
  m='1124690'>prefer</span> <span m='1125020'>to</span> <span
  m='1125110'>see</span> <span m='1125590'>a</span> <span
  m='1125650'>number</span> <span m='1125890'>like</span> <span
  m='1126070'>pi,</span> <span m='1126520'>we</span> <span
  m='1126640'>can</span> <span m='1126760'>do</span> <span
  m='1126910'>that.</span> <span m='1127870'>I</span> <span
  m='1127960'>mean,</span> <span m='1128860'>we</span> <span
  m='1128950'>can</span> <span m='1129070'>do</span> <span
  m='1129140'>whatever</span> <span m='1129400'>you</span> <span
  m='1129490'>like.</span> <span m='1130600'>It's</span> <span
  m='1130750'>going</span> <span m='1130900'>to</span> <span
  m='1130990'>work.</span> </p><p><span m='1131540'>So</span> <span
  m='1131800'>there</span> <span m='1132010'>you</span> <span
  m='1132130'>see</span> <span m='1132730'>this</span> <span
  m='1132910'>is</span> <span m='1133030'>the</span> <span
  m='1133120'>square</span> <span m='1133330'>root</span> <span
  m='1133450'>of</span> <span m='1133510'>pi.</span> <span
  m='1133870'>And</span> <span m='1133960'>this</span> <span
  m='1134110'>would</span> <span m='1134230'>be</span> <span
  m='1134350'>1/2</span> <span m='1134740'>over</span> <span
  m='1134950'>the</span> <span m='1135040'>square root of</span> <span
  m='1135370'>pi</span> <span m='1135820'>numerically.</span> <span
  m='1136850'>So</span> <span m='1136970'>when</span> <span
  m='1137080'>you</span> <span m='1137140'>see</span> <span
  m='1137320'>it</span> <span m='1137410'>matches</span> <span
  m='1137920'>these</span> <span m='1138490'>numbers</span> <span
  m='1139840'>to</span> <span m='1139990'>enough</span> <span
  m='1140200'>digits,</span> <span m='1140500'>in</span> <span
  m='1140590'>fact,</span> <span m='1140860'>all</span> <span
  m='1140980'>the</span> <span m='1141070'>digits,</span> <span
  m='1141430'>actually.</span> </p><p><span m='1142060'>Yeah.</span> <span
  m='1142510'>So</span> <span m='1142720'>the</span> <span
  m='1142820'>thing</span> <span m='1143050'>magically</span> <span
  m='1143560'>worked.</span> <span m='1144400'>You</span> <span
  m='1144520'>should</span> <span m='1144670'>all</span> <span
  m='1144790'>be</span> <span m='1144910'>wondering,</span> <span
  m='1145400'>how</span> <span m='1145420'>did</span> <span
  m='1145570'>that</span> <span m='1145720'>happen?</span> <span
  m='1147870'>I</span> <span m='1148000'>didn't</span> <span
  m='1148270'>rewrite</span> <span m='1148660'>any</span> <span
  m='1148840'>code.</span> <span m='1149350'>I</span> <span
  m='1149470'>actually</span> <span m='1149740'>wrote</span> <span
  m='1149950'>a</span> <span m='1149980'>code</span> <span m='1150280'>to</span>
  <span m='1150400'>just</span> <span m='1150580'>compute</span> <span
  m='1150850'>the</span> <span m='1150910'>square</span> <span
  m='1151150'>root.</span> </p><p><span m='1151450'>I</span> <span
  m='1152320'>never</span> <span m='1152560'>wrote</span> <span
  m='1152740'>a</span> <span m='1152770'>code</span> <span m='1153010'>to</span>
  <span m='1153160'>compute</span> <span m='1153490'>the</span> <span
  m='1153580'>root</span> <span m='1153910'>of</span> <span m='1154000'>a</span>
  <span m='1154060'>square</span> <span m='1154330'>root.</span> <span
  m='1155350'>And</span> <span m='1155680'>by</span> <span
  m='1155950'>the</span> <span m='1156040'>way,</span> <span
  m='1156310'>this</span> <span m='1156550'>is</span> <span m='1156670'>a</span>
  <span m='1156730'>little</span> <span m='1157030'>bit</span> <span
  m='1157180'>of</span> <span m='1157270'>the</span> <span
  m='1157360'>Julia</span> <span m='1157740'>magic</span> <span
  m='1158250'>that</span> <span m='1158710'>we're</span> <span
  m='1158890'>pushing</span> <span m='1159430'>numerically.</span> <span
  m='1160120'>That</span> <span m='1160780'>very</span> <span
  m='1161110'>often</span> <span m='1162640'>in</span> <span
  m='1162910'>this</span> <span m='1163060'>world,</span> <span
  m='1163510'>people</span> <span m='1163810'>will</span> <span
  m='1163960'>write</span> <span m='1164200'>a</span> <span
  m='1164230'>code</span> <span m='1164500'>to</span> <span
  m='1164620'>do</span> <span m='1164740'>something,</span> <span
  m='1165160'>and</span> <span m='1165250'>then</span> <span
  m='1165340'>if</span> <span m='1165430'>you</span> <span
  m='1165520'>want</span> <span m='1165670'>to</span> <span
  m='1165760'>do</span> <span m='1165820'>something</span> <span
  m='1166060'>more,</span> <span m='1166300'>like</span> <span
  m='1166490'>get</span> <span m='1166600'>a</span> <span
  m='1166660'>derivative,</span> <span m='1167320'>somebody</span> <span
  m='1167620'>writes</span> <span m='1167950'>another</span> <span
  m='1168580'>code.</span> </p><p><span m='1169540'>With</span> <span
  m='1169720'>Julia,</span> <span m='1170290'>very</span> <span
  m='1170650'>often,</span> <span m='1171280'>you</span> <span
  m='1171460'>can</span> <span m='1171640'>actually</span> <span
  m='1172090'>keep</span> <span m='1172360'>to</span> <span
  m='1172510'>the</span> <span m='1172570'>original</span> <span
  m='1172990'>code.</span> <span m='1173320'>And</span> <span
  m='1173410'>if</span> <span m='1173500'>you</span> <span
  m='1173590'>just</span> <span m='1173740'>use</span> <span
  m='1174070'>it</span> <span m='1174160'>properly</span> <span
  m='1174730'>and</span> <span m='1174820'>intelligently,</span> <span
  m='1175990'>you</span> <span m='1176110'>can</span> <span
  m='1176260'>do</span> <span m='1176380'>magic</span> <span
  m='1176710'>things</span> <span m='1177010'>without</span> <span
  m='1177280'>writing</span> <span m='1177640'>new</span> <span
  m='1177820'>codes.</span> <span m='1178330'>And</span> <span
  m='1178420'>you'll</span> <span m='1178690'>see</span> <span
  m='1178840'>this</span> <span m='1179020'>again</span> <span
  m='1179330'>in</span> <span m='1179380'>a</span> <span
  m='1179440'>little</span> <span m='1179650'>bit.</span> <span
  m='1180400'>But</span> <span m='1181150'>here's</span> <span
  m='1181420'>the</span> <span m='1181510'>derivative</span> <span
  m='1182260'>of--</span> <span m='1183280'>this</span> <span
  m='1183490'>is</span> <span m='1183640'>the</span> <span
  m='1183730'>plot</span> <span m='1184000'>of</span> <span
  m='1184120'>1/2</span> <span m='1184480'>over</span> <span m='1184630'>the
  square</span> <span m='1184720'>root</span> <span m='1184960'>of</span> <span
  m='1185080'>x</span> <span m='1185260'>in</span> <span
  m='1185360'>black.</span> <span m='1185740'>And</span> <span
  m='1186430'>again,</span> <span m='1186700'>you</span> <span
  m='1186760'>could</span> <span m='1186910'>see</span> <span
  m='1187090'>the</span> <span m='1187240'>convergence</span> <span
  m='1188200'>over</span> <span m='1188410'>here.</span> <span
  m='1189250'>All</span> <span m='1189340'>right.</span> </p><p><span
  m='1189550'>Well,</span> <span m='1189670'>I'm</span> <span
  m='1189760'>still</span> <span m='1189880'>not</span> <span
  m='1190060'>going</span> <span m='1190180'>to</span> <span
  m='1190270'>show</span> <span m='1190540'>you</span> <span
  m='1191350'>why</span> <span m='1191560'>it</span> <span
  m='1191620'>works</span> <span m='1191860'>just</span> <span
  m='1192070'>yet.</span> <span m='1192280'>I</span> <span
  m='1192340'>promise</span> <span m='1192700'>I</span> <span
  m='1192790'>will</span> <span m='1193140'>in just</span> <span
  m='1193300'>probably</span> <span m='1193570'>a</span> <span
  m='1193600'>few</span> <span m='1193900'>minutes</span> <span
  m='1194180'>more.</span> <span m='1195770'>But</span> <span
  m='1197140'>what</span> <span m='1197290'>I</span> <span
  m='1197380'>will</span> <span m='1197560'>do</span> <span
  m='1197740'>first</span> <span m='1198180'>is</span> <span
  m='1198760'>I'd</span> <span m='1198850'>like</span> <span
  m='1199000'>to</span> <span m='1199090'>show</span> <span
  m='1199360'>you</span> <span m='1199930'>something</span> <span
  m='1200260'>that</span> <span m='1200350'>most</span> <span
  m='1200530'>people</span> <span m='1200770'>will</span> <span
  m='1200850'>never</span> <span m='1201040'>look</span> <span
  m='1201250'>at.</span> <span m='1201490'>I</span> <span
  m='1201640'>never</span> <span m='1201880'>look</span> <span
  m='1202030'>at</span> <span m='1202150'>it.</span> </p><p><span
  m='1202910'>I</span> <span m='1203010'>want</span> <span m='1203050'>to</span>
  <span m='1203110'>show</span> <span m='1203320'>you--</span> <span
  m='1203470'>here's</span> <span m='1203710'>the</span> <span
  m='1203800'>same</span> <span m='1204100'>Babylonian</span> <span
  m='1204580'>code.</span> <span m='1205630'>I</span> <span
  m='1205720'>want</span> <span m='1205900'>to</span> <span
  m='1206650'>show</span> <span m='1206860'>you</span> <span
  m='1207040'>the</span> <span m='1207160'>assembler</span> <span
  m='1207850'>for</span> <span m='1209500'>the</span> <span
  m='1209590'>computation</span> <span m='1210220'>of</span> <span
  m='1210310'>the</span> <span m='1210400'>derivative.</span> <span
  m='1210980'>So</span> <span m='1211450'>I'm</span> <span
  m='1211560'>going</span> <span m='1211610'>to</span> <span
  m='1211670'>run</span> <span m='1211840'>Babylonian</span> <span
  m='1212350'>on</span> <span m='1212470'>a</span> <span m='1212530'>dual</span>
  <span m='1213850'>number.</span> <span m='1214900'>And</span> <span
  m='1215800'>we're</span> <span m='1215920'>going</span> <span
  m='1216030'>to</span> <span m='1216130'>look</span> <span
  m='1216370'>here.</span> </p><p><span m='1217360'>And</span> <span
  m='1218530'>I</span> <span m='1218650'>don't</span> <span
  m='1218770'>know</span> <span m='1218860'>if</span> <span
  m='1218980'>anybody</span> <span m='1219340'>here</span> <span
  m='1219490'>reads</span> <span m='1219730'>assembler.</span> <span
  m='1220210'>I'm</span> <span m='1220330'>betting</span> <span
  m='1220630'>there</span> <span m='1220800'>is</span> <span
  m='1221290'>zero</span> <span m='1221740'>or</span> <span
  m='1221890'>one</span> <span m='1222160'>of</span> <span
  m='1222280'>you</span> <span m='1222460'>actually</span> <span
  m='1222730'>reads</span> <span m='1222970'>this</span> <span
  m='1223060'>stuff.</span> <span m='1223360'>How</span> <span
  m='1223450'>many</span> <span m='1223600'>of</span> <span
  m='1223660'>you</span> <span m='1223720'>read</span> <span
  m='1223930'>assembler?</span> <span m='1225980'>OK.</span> </p><p><span
  m='1227370'>It</span> <span m='1227450'>wasn't</span> <span
  m='1227690'>0,</span> <span m='1227960'>1.</span> <span m='1228200'>We</span>
  <span m='1228290'>had</span> <span m='1228410'>a</span> <span
  m='1228470'>half.</span> <span m='1228830'>Right</span> <span
  m='1229000'>there's</span> <span m='1229300'>half.</span> </p><p><span
  m='1229820'>He's</span> <span m='1229970'>kind</span> <span
  m='1230120'>of</span> <span m='1230180'>going</span> <span
  m='1230330'>like</span> <span m='1230480'>this.</span> <span
  m='1231120'>Here's</span> <span m='1231280'>zero.</span> <span
  m='1231530'>Here's</span> <span m='1231740'>one.</span> <span
  m='1231990'>He's</span> <span m='1232160'>like</span> <span
  m='1232280'>this.</span> <span m='1233020'>OK.</span> <span
  m='1233520'>So</span> <span m='1234260'>I</span> <span
  m='1234320'>think</span> <span m='1234470'>0,</span> <span
  m='1234710'>1</span> <span m='1234900'>is</span> <span m='1235040'>like</span>
  <span m='1235160'>the</span> <span m='1235250'>record.</span> </p><p><span
  m='1236300'>But</span> <span m='1236930'>I'll</span> <span
  m='1237050'>bet</span> <span m='1237260'>you'll</span> <span
  m='1237410'>believe</span> <span m='1237740'>me</span> <span
  m='1237860'>if</span> <span m='1237980'>I</span> <span m='1238070'>tell</span>
  <span m='1238340'>you</span> <span m='1238820'>that,</span> <span
  m='1239780'>when</span> <span m='1239900'>you</span> <span
  m='1240020'>have</span> <span m='1240230'>short</span> <span
  m='1240680'>assembler</span> <span m='1241190'>like</span> <span
  m='1241370'>this</span> <span m='1241770'>and</span> <span
  m='1241780'>it's</span> <span m='1241910'>not</span> <span
  m='1242030'>very</span> <span m='1242240'>long,</span> <span
  m='1243020'>then</span> <span m='1243290'>you</span> <span
  m='1243410'>have</span> <span m='1243560'>efficient</span> <span
  m='1243920'>code.</span> <span m='1244460'>It's</span> <span
  m='1244550'>very</span> <span m='1244730'>tight.</span> <span m='1245190'>It
  will</span> <span m='1245300'>run</span> <span m='1245480'>very</span> <span
  m='1245690'>fast.</span> <span m='1246530'>So</span> <span
  m='1246740'>whatever</span> <span m='1247010'>this</span> <span
  m='1247130'>thing</span> <span m='1247310'>is</span> <span
  m='1247430'>doing,</span> <span m='1247880'>it's</span> <span
  m='1248000'>short.</span> </p><p><span m='1249340'>And</span> <span
  m='1249500'>this</span> <span m='1249680'>you</span> <span
  m='1249800'>won't</span> <span m='1249950'>get</span> <span
  m='1250130'>from</span> <span m='1250310'>any</span> <span
  m='1250460'>other</span> <span m='1250670'>language.</span> <span
  m='1252080'>If</span> <span m='1252200'>you</span> <span
  m='1252290'>did</span> <span m='1252650'>try</span> <span
  m='1252890'>to</span> <span m='1252980'>do</span> <span m='1253070'>the</span>
  <span m='1253130'>same</span> <span m='1253310'>thing</span> <span
  m='1253460'>in</span> <span m='1253550'>Python,</span> <span
  m='1253940'>I</span> <span m='1254030'>promise</span> <span
  m='1254480'>you</span> <span m='1254950'>there would</span> <span
  m='1255110'>be</span> <span m='1255200'>screens</span> <span
  m='1255680'>and</span> <span m='1255770'>screens</span> <span
  m='1256160'>and</span> <span m='1256250'>screens</span> <span
  m='1256640'>full</span> <span m='1256850'>of</span> <span
  m='1256910'>stuff,</span> <span m='1257630'>even</span> <span
  m='1257840'>if</span> <span m='1257930'>you</span> <span
  m='1258050'>could</span> <span m='1258170'>get</span> <span
  m='1258380'>it.</span> <span m='1260330'>So</span> <span
  m='1261770'>here's</span> <span m='1262220'>the</span> <span
  m='1262340'>Babylonian</span> <span m='1262850'>algorithm</span> <span
  m='1263450'>on</span> <span m='1263660'>the</span> <span
  m='1263750'>dual</span> <span m='1263990'>number.</span> <span
  m='1264470'>And</span> <span m='1265310'>here</span> <span
  m='1265490'>it</span> <span m='1265580'>is</span> <span m='1265700'>in</span>
  <span m='1265850'>assembler,</span> <span m='1266330'>and</span> <span
  m='1266510'>it's</span> <span m='1266630'>short.</span> </p><p><span
  m='1267560'>So</span> <span m='1267770'>the</span> <span
  m='1267890'>other</span> <span m='1268070'>thing</span> <span
  m='1268340'>that</span> <span m='1268430'>I'm</span> <span
  m='1268550'>saying</span> <span m='1268760'>is</span> <span
  m='1268850'>not</span> <span m='1268970'>only</span> <span
  m='1269090'>does</span> <span m='1269240'>it</span> <span
  m='1269330'>work,</span> <span m='1269750'>but</span> <span
  m='1270260'>Julia</span> <span m='1270530'>also</span> <span
  m='1270740'>makes</span> <span m='1270950'>it</span> <span
  m='1271130'>efficient.</span> <span m='1272120'>So</span> <span
  m='1273050'>before</span> <span m='1273380'>I</span> <span
  m='1273470'>finally</span> <span m='1273830'>tell</span> <span
  m='1274040'>you</span> <span m='1274160'>what's</span> <span
  m='1274430'>really</span> <span m='1274670'>going</span> <span
  m='1274940'>on</span> <span m='1275090'>and</span> <span
  m='1275180'>why</span> <span m='1275390'>it</span> <span
  m='1275480'>works,</span> <span m='1276790'>I'm</span> <span
  m='1276920'>going</span> <span m='1277030'>to</span> <span
  m='1277130'>grab</span> <span m='1277760'>a</span> <span
  m='1277820'>Python</span> <span m='1278240'>symbolic</span> <span
  m='1278690'>package,</span> <span m='1279290'>which</span> <span
  m='1279500'>will</span> <span m='1279590'>work</span> <span
  m='1279830'>nicely</span> <span m='1280220'>with</span> <span
  m='1280310'>Julia.</span> <span m='1282060'>And</span> <span
  m='1282320'>I'm</span> <span m='1282500'>going</span> <span
  m='1282710'>to</span> <span m='1282860'>run</span> <span
  m='1283310'>the</span> <span m='1283430'>same</span> <span
  m='1283790'>code</span> <span m='1286470'>through</span> <span
  m='1287100'>the</span> <span m='1287250'>Python</span> <span
  m='1287640'>symbolic</span> <span m='1288930'>and</span> <span
  m='1289260'>show</span> <span m='1289530'>you</span> <span
  m='1289680'>what--</span> <span m='1290220'>these</span> <span
  m='1290460'>are</span> <span m='1290520'>the</span> <span
  m='1290640'>iterations</span> <span m='1291330'>that</span> <span
  m='1291510'>you</span> <span m='1291630'>get.</span> </p><p><span
  m='1291990'>So</span> <span m='1292320'>you</span> <span
  m='1292430'>actually</span> <span m='1292620'>see</span> <span
  m='1292990'>the</span> <span m='1293940'>iterations</span> <span
  m='1294420'>towards</span> <span m='1294660'>the</span> <span
  m='1294750'>square</span> <span m='1294960'>root.</span> <span
  m='1295790'>And</span> <span m='1295890'>here</span> <span
  m='1295990'>are</span> <span m='1296090'>the</span> <span
  m='1296190'>iterations</span> <span m='1296580'>of</span> <span
  m='1296640'>the</span> <span m='1296730'>derivative</span> <span
  m='1297270'>that's</span> <span m='1297480'>actually</span> <span
  m='1297780'>being</span> <span m='1297960'>calculated.</span> <span
  m='1299580'>And</span> <span m='1299910'>the</span> <span
  m='1300000'>key</span> <span m='1300180'>point</span> <span
  m='1300540'>here</span> <span m='1300960'>is,</span> <span
  m='1301200'>of</span> <span m='1301290'>course,</span> <span
  m='1303180'>this</span> <span m='1303360'>is</span> <span m='1303480'>a</span>
  <span m='1303540'>symbolic</span> <span m='1303960'>computation.</span> <span
  m='1304560'>We're</span> <span m='1304710'>not</span> <span
  m='1304860'>doing</span> <span m='1305100'>a</span> <span
  m='1305130'>symbolic</span> <span m='1305520'>computation.</span> </p><p><span
  m='1306420'>This</span> <span m='1306600'>is</span> <span
  m='1306690'>mathematically</span> <span m='1307350'>equivalent</span> <span
  m='1308370'>to</span> <span m='1308760'>the</span> <span
  m='1308910'>function</span> <span m='1309460'>we</span> <span
  m='1309480'>would</span> <span m='1309600'>get</span> <span
  m='1310050'>if</span> <span m='1310230'>we</span> <span
  m='1310380'>were</span> <span m='1310560'>to,</span> <span
  m='1310680'>like,</span> <span m='1310860'>plot</span> <span
  m='1311250'>it</span> <span m='1311430'>or</span> <span
  m='1311520'>something.</span> <span m='1312310'>But</span> <span
  m='1312390'>of</span> <span m='1312450'>course,</span> <span
  m='1313530'>symbolic</span> <span m='1313920'>computation</span> <span
  m='1314610'>is</span> <span m='1314730'>very</span> <span
  m='1315000'>inefficient.</span> <span m='1315570'>I</span> <span
  m='1315630'>mean,</span> <span m='1315750'>you</span> <span
  m='1315810'>get</span> <span m='1315960'>these</span> <span
  m='1316140'>big</span> <span m='1316470'>coefficients.</span> </p><p><span
  m='1317220'>I</span> <span m='1317250'>mean,</span> <span
  m='1317670'>look</span> <span m='1317850'>at</span> <span
  m='1317910'>this</span> <span m='1318060'>number.</span> <span
  m='1318300'>What</span> <span m='1318420'>is</span> <span
  m='1318510'>this?</span> <span m='1319140'>5</span> <span
  m='1319470'>million</span> <span m='1319830'>or</span> <span
  m='1320610'>something?</span> <span m='1321160'>Anyway,</span> <span
  m='1321270'>you</span> <span m='1321360'>get</span> <span
  m='1321480'>these</span> <span m='1321630'>big</span> <span
  m='1321810'>numbers,</span> <span m='1322950'>these</span> <span
  m='1323340'>even</span> <span m='1323640'>bigger</span> <span
  m='1323910'>numbers</span> <span m='1324230'>here.</span> <span
  m='1324350'>Look</span> <span m='1324450'>at</span> <span
  m='1324510'>these</span> <span m='1324720'>huge</span> <span
  m='1325020'>numbers,</span> <span m='1325320'>right?</span> </p><p><span
  m='1326490'>It</span> <span m='1326610'>takes</span> <span
  m='1326850'>a</span> <span m='1326880'>lot</span> <span m='1327030'>of</span>
  <span m='1327090'>storage</span> <span m='1328320'>dragging</span> <span
  m='1328710'>these</span> <span m='1328920'>x's</span> <span
  m='1329340'>along.</span> <span m='1329970'>There's</span> <span
  m='1330150'>a</span> <span m='1330210'>big</span> <span
  m='1330420'>drag</span> <span m='1330720'>on</span> <span
  m='1330810'>memory.</span> <span m='1331380'>I</span> <span
  m='1331470'>mean,</span> <span m='1331630'>this</span> <span
  m='1331980'>is</span> <span m='1332070'>not</span> <span
  m='1332220'>the</span> <span m='1332340'>way</span> <span
  m='1332520'>that--</span> <span m='1332940'>this</span> <span
  m='1333120'>is</span> <span m='1333210'>why</span> <span m='1333660'>we</span>
  <span m='1333810'>do</span> <span m='1333930'>numerical</span> <span
  m='1334260'>computation.</span> <span m='1335320'>But</span> <span
  m='1336360'>the</span> <span m='1336660'>Babylonian</span> <span
  m='1337140'>algorithm,</span> <span m='1337530'>in</span> <span
  m='1337600'>the</span> <span m='1337680'>absence</span> <span
  m='1337980'>of</span> <span m='1338070'>any</span> <span m='1338220'>round
  off,</span> <span m='1338610'>is</span> <span m='1338730'>equivalent</span>
  <span m='1339660'>to</span> <span m='1339810'>computing--</span> <span
  m='1341350'>above</span> <span m='1341970'>the</span> <span
  m='1342090'>line,</span> <span m='1342420'>it's</span> <span
  m='1342570'>computing</span> <span m='1343050'>the</span> <span
  m='1343140'>square</span> <span m='1343350'>root</span> <span
  m='1343530'>here.</span> <span m='1343920'>And</span> <span
  m='1344070'>then</span> <span m='1344250'>below</span> <span
  m='1345180'>here,</span> <span m='1345870'>these</span> <span
  m='1346440'>are</span> <span m='1346530'>the</span> <span
  m='1346680'>iterates</span> <span m='1347070'>towards</span> <span
  m='1347340'>the</span> <span m='1347400'>derivative.</span> </p><p><span
  m='1348180'>So</span> <span m='1348300'>it's</span> <span
  m='1348390'>not</span> <span m='1348570'>actually</span> <span
  m='1348870'>calculating</span> <span m='1351130'>1/2</span> <span
  m='1351540'>x</span> <span m='1351720'>to the</span> <span
  m='1351810'>minus</span> <span m='1352110'>1/2.</span> <span
  m='1352440'>It's</span> <span m='1352590'>actually</span> <span
  m='1352890'>doing</span> <span m='1353070'>something</span> <span
  m='1353340'>iterative</span> <span m='1354270'>that</span> <span
  m='1354570'>is</span> <span m='1354810'>approximating</span> <span
  m='1355950'>1/2</span> <span m='1356460'>x</span> <span m='1356640'>to</span>
  <span m='1356700'>the</span> <span m='1356790'>minus</span> <span
  m='1357090'>1/2.</span> <span m='1357990'>All</span> <span
  m='1358050'>right.</span> <span m='1358200'>Well,</span> <span
  m='1358560'>let</span> <span m='1358680'>me</span> <span
  m='1358800'>tell</span> <span m='1359010'>you</span> <span
  m='1359130'>now.</span> <span m='1359310'>Let</span> <span
  m='1359430'>me</span> <span m='1359520'>sort</span> <span
  m='1359730'>of</span> <span m='1360120'>reveal</span> <span
  m='1360870'>what's</span> <span m='1361170'>going</span> <span
  m='1361560'>on,</span> <span m='1361990'>just so</span> <span
  m='1362220'>that</span> <span m='1362400'>I</span> <span
  m='1362460'>can</span> <span m='1363000'>kind</span> <span
  m='1363210'>of</span> <span m='1363270'>show</span> <span
  m='1363540'>you</span> <span m='1363930'>how</span> <span
  m='1364110'>it's</span> <span m='1364230'>getting</span> <span
  m='1364470'>the</span> <span m='1364560'>answer.</span> </p><p><span
  m='1364990'>And</span> <span m='1366090'>like</span> <span
  m='1366270'>I</span> <span m='1366330'>said,</span> <span
  m='1366600'>it</span> <span m='1366690'>was</span> <span
  m='1366840'>the</span> <span m='1366930'>SVD</span> <span
  m='1367380'>that</span> <span m='1367530'>sort</span> <span
  m='1367680'>of</span> <span m='1368400'>convinced</span> <span
  m='1368850'>me</span> <span m='1369000'>how</span> <span
  m='1369120'>this</span> <span m='1369300'>was</span> <span
  m='1369420'>happening.</span> <span m='1369750'>Because</span> <span
  m='1369900'>the</span> <span m='1369960'>SVD</span> <span
  m='1370290'>is</span> <span m='1370410'>also</span> <span
  m='1370680'>an</span> <span m='1370800'>iterative</span> <span
  m='1371160'>algorithm,</span> <span m='1371550'>like</span> <span
  m='1371700'>this</span> <span m='1371820'>Babylonian</span> <span
  m='1372300'>square</span> <span m='1372510'>root.</span> <span
  m='1373250'>But</span> <span m='1373500'>it's</span> <span
  m='1373620'>easier</span> <span m='1373830'>to</span> <span
  m='1373950'>show</span> <span m='1374130'>you</span> <span
  m='1374220'>the</span> <span m='1374310'>point</span> <span
  m='1374670'>with</span> <span m='1374820'>the</span> <span
  m='1374880'>Babylonian</span> <span m='1375330'>square</span> <span
  m='1375570'>root.</span> </p><p><span m='1376330'>So</span> <span
  m='1376950'>I'm</span> <span m='1377100'>going</span> <span
  m='1377230'>to</span> <span m='1377880'>do</span> <span
  m='1378030'>something</span> <span m='1378360'>that</span> <span
  m='1378480'>I</span> <span m='1378540'>would</span> <span
  m='1378660'>never</span> <span m='1378900'>want</span> <span
  m='1379080'>to</span> <span m='1379140'>do,</span> <span
  m='1379440'>which</span> <span m='1379650'>is</span> <span
  m='1380220'>explicitly</span> <span m='1380840'>write</span> <span
  m='1381150'>a</span> <span m='1381270'>derivative</span> <span
  m='1381810'>Babylonian</span> <span m='1382320'>algorithm.</span> <span
  m='1383350'>And</span> <span m='1383730'>what</span> <span
  m='1383910'>I'm</span> <span m='1384030'>doing</span> <span m='1384510'>is
  I'm</span> <span m='1384690'>going</span> <span m='1384810'>to</span> <span
  m='1384870'>take</span> <span m='1385050'>the</span> <span
  m='1385110'>derivative</span> <span m='1385500'>in respect to</span> <span
  m='1385860'>x</span> <span m='1386100'>of</span> <span
  m='1386220'>every</span> <span m='1386430'>line</span> <span
  m='1386670'>on</span> <span m='1386730'>my</span> <span
  m='1386850'>code.</span> <span m='1387780'>So</span> <span
  m='1389040'>if</span> <span m='1389220'>every</span> <span
  m='1389460'>even</span> <span m='1389790'>or</span> <span
  m='1389910'>odd</span> <span m='1390090'>line--</span> <span
  m='1390360'>I</span> <span m='1390420'>never</span> <span
  m='1390570'>know</span> <span m='1390690'>what's</span> <span
  m='1390900'>even</span> <span m='1391080'>or odd</span> <span
  m='1391310'>anymore.</span> </p><p><span m='1391750'>But</span> <span
  m='1393210'>the</span> <span m='1393300'>original</span> <span
  m='1393660'>line</span> <span m='1393900'>of</span> <span
  m='1393960'>code</span> <span m='1394200'>had</span> <span
  m='1394350'>1</span> <span m='1394530'>plus x</span> <span
  m='1394770'>over</span> <span m='1395010'>2.</span> <span
  m='1395250'>Now</span> <span m='1395420'>I'm</span> <span
  m='1395460'>going</span> <span m='1395580'>to</span> <span
  m='1395640'>take</span> <span m='1395790'>the</span> <span
  m='1395880'>derivative.</span> <span m='1396330'>I'll</span> <span
  m='1396390'>get</span> <span m='1396510'>a</span> <span
  m='1396600'>half.</span> <span m='1397980'>Here</span> <span
  m='1398700'>I</span> <span m='1398790'>had</span> <span
  m='1398940'>this</span> <span m='1399120'>line</span> <span
  m='1399360'>of</span> <span m='1399450'>code.</span> <span
  m='1400140'>If</span> <span m='1400320'>I</span> <span m='1400410'>take</span>
  <span m='1400650'>the</span> <span m='1400770'>derivative</span> <span
  m='1401250'>I'll,</span> <span m='1401340'>use</span> <span
  m='1401580'>the</span> <span m='1403200'>quotient</span> <span
  m='1403620'>rule,</span> <span m='1404340'>and</span> <span
  m='1404820'>this</span> <span m='1405060'>would</span> <span
  m='1405180'>be</span> <span m='1405330'>the</span> <span
  m='1405480'>derivative.</span> </p><p><span m='1406530'>If</span> <span
  m='1406680'>I</span> <span m='1406800'>run</span> <span
  m='1407130'>this</span> <span m='1407460'>code,</span> <span
  m='1408480'>what</span> <span m='1408690'>I'm</span> <span
  m='1408840'>effectively</span> <span m='1409440'>doing</span> <span
  m='1410160'>is</span> <span m='1410760'>I'm</span> <span
  m='1410880'>just</span> <span m='1411090'>using</span> <span
  m='1411450'>good</span> <span m='1411680'>old</span> <span
  m='1411840'>plus</span> <span m='1412200'>and</span> <span
  m='1412290'>times</span> <span m='1412680'>and</span> <span
  m='1412770'>divide,</span> <span m='1413280'>nothing</span> <span
  m='1413580'>fancy.</span> <span m='1414750'>There's</span> <span
  m='1414900'>not</span> <span m='1415020'>a</span> <span
  m='1415080'>square</span> <span m='1415470'>root to</span> <span
  m='1415560'>be</span> <span m='1415680'>seen.</span> <span
  m='1416460'>But</span> <span m='1416580'>what</span> <span
  m='1416730'>I'm</span> <span m='1416850'>doing</span> <span
  m='1417300'>is,</span> <span m='1417990'>as</span> <span m='1418290'>I</span>
  <span m='1418380'>run</span> <span m='1418650'>my</span> <span
  m='1418860'>algorithm,</span> <span m='1419460'>I'm</span> <span
  m='1419610'>also</span> <span m='1419850'>running--</span> <span
  m='1421320'>I'm</span> <span m='1421560'>actually</span> <span
  m='1422520'>computing</span> <span m='1422970'>the</span> <span
  m='1423060'>derivative</span> <span m='1423720'>as</span> <span
  m='1423990'>I</span> <span m='1424080'>go.</span> </p><p><span
  m='1424840'>So</span> <span m='1424890'>if</span> <span m='1425010'>I</span>
  <span m='1425100'>have</span> <span m='1425190'>this</span> <span
  m='1425370'>infinite</span> <span m='1425790'>algorithm</span> <span
  m='1426210'>that's</span> <span m='1426300'>going</span> <span
  m='1426420'>to</span> <span m='1426480'>converge</span> <span
  m='1426840'>to</span> <span m='1426930'>the</span> <span
  m='1426990'>square</span> <span m='1427200'>roots,</span> <span
  m='1428480'>the</span> <span m='1428580'>derivative</span> <span
  m='1428970'>algorithm</span> <span m='1429420'>will</span> <span
  m='1429510'>converge</span> <span m='1430140'>to</span> <span
  m='1430440'>the</span> <span m='1430560'>derivative</span> <span
  m='1430980'>of</span> <span m='1431040'>the</span> <span
  m='1431130'>square</span> <span m='1431400'>roots.</span> <span
  m='1432760'>But</span> <span m='1433800'>I'm</span> <span
  m='1433920'>not</span> <span m='1434100'>using</span> <span
  m='1434670'>anything</span> <span m='1435060'>other</span> <span
  m='1435330'>than</span> <span m='1435690'>plus,</span> <span
  m='1436120'>minus,</span> <span m='1436420'>times,</span> <span
  m='1436590'>and</span> <span m='1436680'>divide</span> <span
  m='1437460'>to</span> <span m='1437790'>make</span> <span
  m='1437970'>that</span> <span m='1438120'>happen.</span> <span
  m='1438880'>So</span> <span m='1439050'>if</span> <span m='1439200'>you</span>
  <span m='1439410'>rewrite</span> <span m='1440100'>any</span> <span
  m='1440310'>code</span> <span m='1440610'>at</span> <span
  m='1440700'>all,</span> <span m='1440910'>you</span> <span
  m='1441030'>could</span> <span m='1441150'>have</span> <span
  m='1441330'>any</span> <span m='1441870'>code--</span> <span
  m='1442230'>iterative,</span> <span m='1442740'>finite,</span> <span
  m='1443280'>it</span> <span m='1443370'>doesn't</span> <span
  m='1443610'>matter.</span> <span m='1444330'>If</span> <span
  m='1444450'>you</span> <span m='1444540'>just</span> <span
  m='1444720'>take</span> <span m='1444900'>the</span> <span
  m='1444990'>derivatives</span> <span m='1445500'>back</span> <span
  m='1445650'>to</span> <span m='1445710'>your</span> <span
  m='1445830'>variable</span> <span m='1446400'>of</span> <span
  m='1446550'>every</span> <span m='1446760'>line</span> <span
  m='1447000'>of</span> <span m='1447090'>your</span> <span
  m='1447210'>code,</span> <span m='1448180'>then</span> <span
  m='1448260'>you</span> <span m='1448380'>can</span> <span
  m='1448530'>get</span> <span m='1449340'>a</span> <span
  m='1449490'>derivative</span> <span m='1450090'>out.</span> </p><p><span
  m='1450360'>And</span> <span m='1450690'>as</span> <span m='1450810'>I</span>
  <span m='1450870'>said,</span> <span m='1451110'>it's</span> <span
  m='1451260'>not</span> <span m='1451440'>a</span> <span
  m='1451500'>symbolic</span> <span m='1451920'>derivative,</span> <span
  m='1452370'>like,</span> <span m='1453060'>you</span> <span
  m='1453120'>know,</span> <span m='1453450'>all</span> <span
  m='1453630'>of</span> <span m='1453720'>18.01,</span> <span
  m='1454470'>or</span> <span m='1454560'>whatever,</span> <span
  m='1454920'>wherever</span> <span m='1455250'>we</span> <span
  m='1455370'>teach</span> <span m='1455550'>calculus</span> <span
  m='1455940'>these</span> <span m='1456090'>days.</span> <span
  m='1456810'>And</span> <span m='1456990'>it's</span> <span
  m='1457110'>not</span> <span m='1457380'>a</span> <span
  m='1457410'>numerical</span> <span m='1457800'>derivative</span> <span
  m='1458310'>like</span> <span m='1458540'>in the</span> <span
  m='1458640'>numerical</span> <span m='1459030'>courses,</span> <span
  m='1460160'>the</span> <span m='1460500'>18.3,</span> <span
  m='1460755'>axyz's,</span> <span m='1461810'>whatever.</span> <span
  m='1462650'>It's</span> <span m='1462780'>a</span> <span
  m='1462840'>different</span> <span m='1463200'>beast.</span> </p><p><span
  m='1463690'>It's</span> <span m='1465300'>using</span> <span
  m='1466020'>the</span> <span m='1466530'>quotient</span> <span
  m='1466950'>rule</span> <span m='1467160'>and</span> <span
  m='1467250'>the</span> <span m='1467340'>addition</span> <span
  m='1467670'>rule</span> <span m='1469050'>at</span> <span
  m='1469170'>every</span> <span m='1469410'>step</span> <span
  m='1469740'>of</span> <span m='1469800'>the</span> <span
  m='1469890'>way</span> <span m='1470220'>to</span> <span
  m='1470400'>get</span> <span m='1470610'>the</span> <span
  m='1471060'>answer.</span> <span m='1474060'>Here's</span> <span
  m='1474360'>this</span> <span m='1474510'>dBabylonian</span> <span
  m='1475230'>algorithm.</span> <span m='1475680'>You</span> <span
  m='1475740'>could</span> <span m='1475890'>see</span> <span
  m='1476040'>it</span> <span m='1476130'>running.</span> <span
  m='1476930'>It</span> <span m='1477060'>gives</span> <span
  m='1477270'>the</span> <span m='1477330'>right</span> <span
  m='1477540'>answer.</span> </p><p><span m='1477960'>Oop,</span> <span
  m='1478290'>I</span> <span m='1478400'>have</span> <span m='1478670'>to</span>
  <span m='1478770'>execute</span> <span m='1479100'>the</span> <span
  m='1479190'>code</span> <span m='1479340'>first</span> <span
  m='1479640'>to</span> <span m='1479760'>get</span> <span
  m='1479940'>the</span> <span m='1480000'>right</span> <span
  m='1480150'>answer.</span> <span m='1481140'>But</span> <span
  m='1481270'>if</span> <span m='1481350'>you</span> <span
  m='1481410'>see,</span> <span m='1481620'>it</span> <span
  m='1481680'>gives</span> <span m='1482400'>the</span> <span
  m='1482520'>right</span> <span m='1482730'>answer.</span> <span
  m='1483960'>Oh,</span> <span m='1484320'>I</span> <span m='1484410'>was</span>
  <span m='1484560'>just</span> <span m='1484740'>in</span> <span
  m='1484830'>Istanbul</span> <span m='1485310'>and</span> <span
  m='1485430'>they</span> <span m='1485950'>challenged</span> <span
  m='1486300'>me</span> <span m='1486390'>to</span> <span m='1486480'>do</span>
  <span m='1486630'>sine.</span> <span m='1487800'>I</span> <span
  m='1487920'>forget</span> <span m='1488160'>about</span> <span
  m='1488370'>that.</span> </p><p><span m='1488730'>It's</span> <span
  m='1488810'>still</span> <span m='1489000'>in</span> <span
  m='1489090'>my</span> <span m='1489510'>notebook.</span> <span
  m='1490140'>I</span> <span m='1490230'>did</span> <span m='1490380'>it
  in</span> <span m='1490470'>front</span> <span m='1490650'>of</span> <span
  m='1490740'>everybody.</span> <span m='1491420'>It</span> <span
  m='1491520'>worked.</span> <span m='1492150'>I</span> <span
  m='1492220'>got</span> <span m='1492330'>a</span> <span
  m='1492390'>cosine.</span> <span m='1493230'>OK.</span> <span
  m='1493480'>But</span> <span m='1493770'>let</span> <span
  m='1493860'>me</span> <span m='1494190'>pass</span> <span
  m='1494880'>all</span> <span m='1495210'>of</span> <span
  m='1495360'>that.</span> </p><p><span m='1498820'>So</span> <span
  m='1499300'>let</span> <span m='1499450'>me</span> <span m='1499540'>go</span>
  <span m='1499690'>back</span> <span m='1499960'>and</span> <span
  m='1500050'>tell</span> <span m='1500290'>you</span> <span
  m='1500410'>then</span> <span m='1501400'>how</span> <span
  m='1501700'>is</span> <span m='1501790'>this</span> <span
  m='1501940'>all</span> <span m='1502120'>working.</span> <span
  m='1502990'>Well,</span> <span m='1503260'>what's</span> <span
  m='1503530'>happening--</span> <span m='1503980'>let's</span> <span
  m='1504130'>go</span> <span m='1504250'>back</span> <span
  m='1504490'>to</span> <span m='1504610'>the</span> <span
  m='1504730'>eight</span> <span m='1504910'>lines</span> <span
  m='1505210'>of</span> <span m='1505300'>code,</span> <span
  m='1505790'>and</span> <span m='1506050'>now,</span> <span
  m='1506260'>maybe,</span> <span m='1506530'>you</span> <span
  m='1506590'>can</span> <span m='1506740'>see</span> <span
  m='1507550'>what's</span> <span m='1507760'>happening.</span> <span
  m='1509650'>Where's</span> <span m='1509830'>my</span> <span
  m='1509980'>eight</span> <span m='1510100'>lines</span> <span
  m='1510370'>of</span> <span m='1510430'>code</span> <span
  m='1510700'>from</span> <span m='1510820'>the</span> <span
  m='1510910'>very</span> <span m='1511150'>beginning?</span> </p><p><span
  m='1512630'>And</span> <span m='1512830'>I've</span> <span
  m='1512900'>got</span> <span m='1513010'>to</span> <span
  m='1513100'>watch</span> <span m='1513280'>the</span> <span
  m='1513370'>time.</span> <span m='1513610'>I</span> <span
  m='1513670'>want</span> <span m='1513790'>to</span> <span
  m='1513850'>show</span> <span m='1513970'>you</span> <span
  m='1514030'>this</span> <span m='1514180'>one</span> <span
  m='1514360'>other</span> <span m='1514540'>thing,</span> <span
  m='1514720'>too.</span> <span m='1515130'>So</span> <span
  m='1516280'>hopefully,</span> <span m='1516540'>I'll</span> <span
  m='1516610'>have</span> <span m='1516730'>enough</span> <span
  m='1516910'>time</span> <span m='1517090'>to</span> <span
  m='1517180'>do</span> <span m='1517330'>that.</span> </p><p><span
  m='1518300'>But</span> <span m='1518590'>here,</span> <span
  m='1518800'>let's</span> <span m='1518980'>see.</span> <span
  m='1520600'>Where</span> <span m='1520750'>are my</span> <span
  m='1520910'>eight</span> <span m='1521020'>lines</span> <span
  m='1521260'>of</span> <span m='1521320'>code?</span> <span
  m='1521710'>Where</span> <span m='1521890'>are</span> <span
  m='1521950'>they?</span> <span m='1524470'>Here</span> <span
  m='1524620'>we</span> <span m='1524680'>go.</span> <span
  m='1525180'>Here</span> <span m='1525370'>are the</span> <span
  m='1525490'>eight lines of</span> <span m='1525800'>code.</span> </p><p><span
  m='1526640'>So</span> <span m='1527020'>what</span> <span
  m='1527230'>I'm</span> <span m='1527380'>doing</span> <span
  m='1527980'>is,</span> <span m='1528460'>instead</span> <span
  m='1528790'>of</span> <span m='1529390'>rewriting</span> <span
  m='1530260'>all</span> <span m='1530440'>your</span> <span
  m='1530590'>code</span> <span m='1531070'>by</span> <span
  m='1531220'>taking</span> <span m='1531610'>the</span> <span
  m='1531700'>derivative</span> <span m='1532150'>of</span> <span
  m='1532270'>every</span> <span m='1532480'>line</span> <span
  m='1532840'>the</span> <span m='1532930'>human</span> <span
  m='1533230'>way,</span> <span m='1534160'>I'm</span> <span
  m='1534400'>saying</span> <span m='1534790'>that</span> <span
  m='1534970'>why</span> <span m='1535180'>can't</span> <span
  m='1535480'>the</span> <span m='1535540'>software</span> <span
  m='1536140'>just</span> <span m='1536410'>do</span> <span
  m='1536620'>this</span> <span m='1536800'>in</span> <span
  m='1536890'>some</span> <span m='1537070'>automatic</span> <span
  m='1537610'>way?</span> <span m='1537820'>And</span> <span
  m='1537910'>this</span> <span m='1538030'>is</span> <span
  m='1538150'>where</span> <span m='1538270'>the</span> <span
  m='1538390'>automatic</span> <span m='1538750'>differentiation</span> <span
  m='1539410'>comes</span> <span m='1539710'>in.</span> </p><p><span
  m='1540340'>And</span> <span m='1540680'>in</span> <span
  m='1540790'>the</span> <span m='1540910'>old,</span> <span
  m='1541250'>old</span> <span m='1541300'>days,</span> <span
  m='1541660'>when</span> <span m='1541810'>people--</span> <span
  m='1542050'>and</span> <span m='1542110'>all</span> <span
  m='1542260'>the</span> <span m='1542320'>numerical</span> <span
  m='1542680'>code</span> <span m='1542920'>was</span> <span
  m='1543040'>in</span> <span m='1543130'>Fortran,</span> <span
  m='1544010'>there</span> <span m='1544170'>would</span> <span
  m='1544270'>be</span> <span m='1544360'>the</span> <span
  m='1544450'>source</span> <span m='1544770'>to</span> <span
  m='1544840'>source</span> <span m='1545650'>translators</span> <span
  m='1546340'>that</span> <span m='1546430'>would</span> <span
  m='1546550'>actually</span> <span m='1546820'>input</span> <span
  m='1548230'>code</span> <span m='1549370'>and</span> <span
  m='1549520'>output</span> <span m='1550090'>derivatives</span> <span
  m='1550840'>of</span> <span m='1550990'>code.</span> <span
  m='1552290'>The</span> <span m='1552430'>Julia</span> <span
  m='1552730'>way,</span> <span m='1553540'>the</span> <span
  m='1553660'>more</span> <span m='1553810'>modern</span> <span
  m='1554140'>way,</span> <span m='1554560'>is</span> <span
  m='1555130'>to</span> <span m='1555280'>let</span> <span
  m='1555430'>the</span> <span m='1555520'>git</span> <span
  m='1555700'>compiler</span> <span m='1556150'>kind</span> <span
  m='1556300'>of</span> <span m='1556360'>do</span> <span
  m='1556510'>that</span> <span m='1556690'>for</span> <span
  m='1557020'>you.</span> </p><p><span m='1557230'>So</span> <span
  m='1558130'>here,</span> <span m='1558550'>I</span> <span
  m='1558640'>needed</span> <span m='1558910'>plus</span> <span
  m='1559150'>and</span> <span m='1559240'>divide.</span> <span
  m='1559720'>Of</span> <span m='1559810'>course,</span> <span
  m='1560080'>I</span> <span m='1560170'>would</span> <span
  m='1560290'>want</span> <span m='1560470'>to</span> <span
  m='1560530'>add</span> <span m='1560740'>minus</span> <span
  m='1561130'>and</span> <span m='1561220'>times.</span> <span
  m='1562870'>But</span> <span m='1564000'>you</span> <span
  m='1564100'>just</span> <span m='1564340'>add</span> <span
  m='1564460'>a</span> <span m='1564490'>couple</span> <span
  m='1564790'>of</span> <span m='1564910'>things</span> <span
  m='1565330'>and</span> <span m='1565450'>then</span> <span
  m='1565630'>bump,</span> <span m='1567670'>you</span> <span
  m='1568210'>don't</span> <span m='1568360'>have</span> <span
  m='1568570'>to</span> <span m='1568690'>rewrite</span> <span
  m='1569170'>the</span> <span m='1569320'>dBabylonian.</span> <span
  m='1570280'>Because</span> <span m='1570820'>the</span> <span
  m='1570940'>Babylonian,</span> <span m='1571630'>with</span> <span
  m='1571780'>this</span> <span m='1571930'>type,</span> <span
  m='1572380'>will</span> <span m='1572500'>just</span> <span
  m='1573790'>do</span> <span m='1574000'>the</span> <span
  m='1574090'>work</span> <span m='1574360'>for</span> <span
  m='1574690'>you.</span> <span m='1575170'>OK?</span> </p><p><span
  m='1575380'>And</span> <span m='1575460'>that's</span> <span
  m='1575650'>where</span> <span m='1575770'>the</span> <span
  m='1575830'>magic</span> <span m='1576250'>of</span> <span
  m='1576370'>a</span> <span m='1576400'>good</span> <span
  m='1576580'>piece</span> <span m='1576820'>of</span> <span
  m='1576970'>software</span> <span m='1577890'>will</span> <span
  m='1578020'>have</span> <span m='1578200'>it.</span> <span
  m='1578250'>So</span> <span m='1578320'>you</span> <span
  m='1578380'>don't</span> <span m='1578530'>have</span> <span
  m='1578680'>to</span> <span m='1578770'>write</span> <span
  m='1578980'>a</span> <span m='1579040'>translator.</span> <span
  m='1580030'>You</span> <span m='1580150'>don't</span> <span
  m='1580420'>have</span> <span m='1580780'>to</span> <span
  m='1581640'>hand</span> <span m='1582140'>write</span> <span
  m='1582640'>it.</span> <span m='1583180'>You</span> <span
  m='1583360'>just</span> <span m='1583720'>give</span> <span
  m='1584020'>the</span> <span m='1584440'>rules</span> <span
  m='1585130'>and</span> <span m='1585250'>you</span> <span
  m='1585310'>let</span> <span m='1585460'>the</span> <span
  m='1585520'>computer</span> <span m='1585910'>do</span> <span
  m='1586120'>it.</span> <span m='1586210'>Right?</span> <span
  m='1586340'>And</span> <span m='1586480'>that's</span> <span
  m='1586630'>what</span> <span m='1586750'>computers</span> <span
  m='1587080'>are</span> <span m='1587140'>supposed</span> <span
  m='1587380'>to</span> <span m='1587470'>be</span> <span
  m='1587590'>good</span> <span m='1587770'>at.</span> <span
  m='1588610'>So</span> <span m='1588730'>that's</span> <span
  m='1589510'>what's</span> <span m='1589720'>happening.</span> </p><p><span
  m='1590710'>All</span> <span m='1590770'>right.</span> <span
  m='1591010'>So</span> <span m='1591130'>that's</span> <span
  m='1593290'>forward</span> <span m='1593740'>mode</span> <span
  m='1594010'>automatic</span> <span m='1594430'>differentiation.</span> <span
  m='1595630'>I've</span> <span m='1595720'>got</span> <span
  m='1595840'>10</span> <span m='1596050'>minutes</span> <span
  m='1596320'>to</span> <span m='1596410'>go</span> <span
  m='1596530'>backwards.</span> <span m='1597410'>But</span> <span
  m='1597740'>let</span> <span m='1597850'>me</span> <span
  m='1597940'>see</span> <span m='1598030'>if</span> <span
  m='1598090'>there's</span> <span m='1598240'>any--</span> <span
  m='1598370'>anybody</span> <span m='1598630'>have</span> <span
  m='1598720'>any</span> <span m='1598840'>questions</span> <span
  m='1599230'>about</span> <span m='1599510'>this?</span> <span
  m='1600850'>It's</span> <span m='1601000'>really</span> <span
  m='1601180'>magic,</span> <span m='1601570'>right?</span> <span
  m='1601840'>But</span> <span m='1601960'>it's</span> <span
  m='1602050'>pretty</span> <span m='1602230'>wonderful</span> <span
  m='1602560'>magic.</span> </p><p><span m='1603470'>And</span> <span
  m='1605380'>I</span> <span m='1605410'>don't</span> <span
  m='1605530'>know</span> <span m='1605650'>what</span> <span
  m='1605830'>you've</span> <span m='1606010'>heard</span> <span
  m='1606190'>about</span> <span m='1606460'>machine</span> <span
  m='1606760'>learning,</span> <span m='1607630'>but</span> <span
  m='1607840'>to</span> <span m='1607960'>be</span> <span
  m='1608110'>honest,</span> <span m='1610060'>machine</span> <span
  m='1610420'>learning</span> <span m='1610900'>these</span> <span
  m='1611170'>days,</span> <span m='1611710'>it's</span> <span
  m='1614050'>forgetting</span> <span m='1614410'>about</span> <span
  m='1614710'>whether</span> <span m='1615370'>humans</span> <span
  m='1615700'>will</span> <span m='1615790'>be</span> <span
  m='1615880'>useless,</span> <span m='1616360'>which</span> <span
  m='1616540'>I</span> <span m='1616600'>don't</span> <span
  m='1616720'>believe</span> <span m='1616960'>by</span> <span
  m='1617050'>the</span> <span m='1617140'>way.</span> <span
  m='1617830'>But</span> <span m='1618040'>the</span> <span
  m='1618940'>big</span> <span m='1619090'>thing</span> <span
  m='1619300'>about</span> <span m='1619660'>machine</span> <span
  m='1619960'>learning</span> <span m='1620380'>is</span> <span
  m='1620620'>that</span> <span m='1620770'>it's</span> <span
  m='1621310'>really</span> <span m='1621610'>just</span> <span
  m='1621940'>a</span> <span m='1622000'>big</span> <span
  m='1622270'>optimization.</span> <span m='1623020'>That's</span> <span
  m='1623200'>all</span> <span m='1623380'>it</span> <span
  m='1623500'>is,</span> <span m='1623740'>right?</span> <span
  m='1623950'>One</span> <span m='1624190'>big</span> <span
  m='1624790'>minimum</span> <span m='1625210'>maximum</span> <span
  m='1625720'>problem</span> <span m='1627010'>where</span> <span
  m='1627280'>you've</span> <span m='1627460'>all</span> <span
  m='1627610'>known</span> <span m='1627820'>from</span> <span
  m='1627970'>calculus</span> <span m='1628480'>that</span> <span
  m='1628660'>what</span> <span m='1628840'>you</span> <span
  m='1628900'>need</span> <span m='1629020'>to</span> <span
  m='1629110'>do</span> <span m='1629260'>is</span> <span
  m='1629380'>take</span> <span m='1629560'>derivatives.</span> <span
  m='1630190'>You</span> <span m='1630250'>know,</span> <span
  m='1630370'>set</span> <span m='1630550'>them</span> <span
  m='1630670'>to</span> <span m='1630760'>zero,</span> <span
  m='1631150'>right?</span> </p><p><span m='1632410'>In</span> <span
  m='1632740'>the</span> <span m='1632800'>case</span> <span
  m='1633010'>of</span> <span m='1633070'>multivariate,</span> <span
  m='1633520'>it's</span> <span m='1633610'>a</span> <span
  m='1633670'>gradient.</span> <span m='1634120'>You</span> <span
  m='1634180'>set</span> <span m='1634360'>it</span> <span m='1634450'>to</span>
  <span m='1634510'>zero.</span> <span m='1635290'>And</span> <span
  m='1635440'>so</span> <span m='1636220'>really</span> <span
  m='1637060'>all</span> <span m='1637300'>of</span> <span
  m='1637360'>this</span> <span m='1637900'>machine</span> <span
  m='1638290'>learning,</span> <span m='1638680'>all</span> <span
  m='1638920'>the</span> <span m='1639010'>big</span> <span
  m='1639220'>stories</span> <span m='1639730'>and</span> <span
  m='1639850'>everything</span> <span m='1640570'>in</span> <span
  m='1640750'>the</span> <span m='1640870'>end</span> <span
  m='1641080'>comes</span> <span m='1641440'>down</span> <span
  m='1641710'>to</span> <span m='1642130'>automatic</span> <span
  m='1642520'>differentiation.</span> <span m='1643190'>It's</span> <span
  m='1643270'>sort</span> <span m='1643450'>of</span> <span
  m='1643510'>like</span> <span m='1643750'>the</span> <span
  m='1644290'>workhorse</span> <span m='1644770'>of</span> <span
  m='1644830'>the</span> <span m='1644920'>whole</span> <span
  m='1645130'>thing.</span> </p><p><span m='1645510'>And</span> <span
  m='1645610'>so</span> <span m='1645730'>if</span> <span m='1645790'>we</span>
  <span m='1645880'>could</span> <span m='1646030'>have</span> <span
  m='1646660'>a</span> <span m='1646750'>language</span> <span
  m='1647380'>that</span> <span m='1647530'>gives</span> <span
  m='1647830'>you</span> <span m='1647980'>that</span> <span
  m='1648280'>workhorse</span> <span m='1648820'>in</span> <span
  m='1648940'>a</span> <span m='1648970'>good</span> <span
  m='1649150'>way,</span> <span m='1649930'>then</span> <span
  m='1650110'>machine</span> <span m='1650380'>learning</span> <span
  m='1650770'>really</span> <span m='1651070'>sort</span> <span
  m='1651250'>of</span> <span m='1651310'>benefits</span> <span
  m='1651760'>from</span> <span m='1651940'>that.</span> <span
  m='1652300'>So</span> <span m='1652810'>I</span> <span m='1652870'>hope</span>
  <span m='1653020'>you</span> <span m='1653110'>all</span> <span
  m='1653320'>see</span> <span m='1653910'>the</span> <span
  m='1654100'>big</span> <span m='1654250'>picture</span> <span
  m='1654730'>of</span> <span m='1655120'>machine</span> <span
  m='1655420'>learning.</span> <span m='1656260'>It</span> <span
  m='1656350'>really</span> <span m='1656530'>does</span> <span
  m='1656710'>come</span> <span m='1656950'>down</span> <span
  m='1657160'>to</span> <span m='1657310'>taking</span> <span
  m='1657730'>derivatives.</span> <span m='1658580'>That's</span> <span
  m='1659590'>the</span> <span m='1659770'>end--</span> <span
  m='1661540'>that's</span> <span m='1661810'>how</span> <span
  m='1661900'>you</span> <span m='1662020'>optimize.</span> </p><p><span
  m='1663340'>Any</span> <span m='1663520'>quick</span> <span
  m='1663670'>questions?</span> <span m='1664580'>Otherwise,</span> <span
  m='1664810'>I'm</span> <span m='1664870'>going</span> <span
  m='1664990'>to</span> <span m='1665050'>switch</span> <span
  m='1665350'>topics,</span> <span m='1665830'>and</span> <span
  m='1665920'>I'm</span> <span m='1665980'>going</span> <span
  m='1666030'>to</span> <span m='1666100'>move</span> <span
  m='1666250'>to</span> <span m='1666370'>the</span> <span
  m='1666460'>blackboard.</span> <span m='1667520'>Yeah?</span> </p><p><span
  m='1668640'>AUDIENCE:</span> <span m='1668870'>Does</span> <span
  m='1669100'>the same</span> <span m='1669560'>thing happen</span> <span
  m='1670020'>for second</span> <span m='1670480'>order</span> <span
  m='1670940'>derivatives</span> <span m='1671400'>as</span> <span
  m='1671860'>well?</span> </p><p><span m='1672320'>ALAN EDELMAN:</span> <span
  m='1672505'>There</span> <span m='1672690'>is</span> <span
  m='1672820'>a</span> <span m='1672880'>trick</span> <span
  m='1673240'>that</span> <span m='1673390'>basically</span> <span
  m='1673870'>lets</span> <span m='1674110'>you</span> <span
  m='1674200'>go</span> <span m='1674380'>to</span> <span
  m='1674470'>higher</span> <span m='1674740'>orders,</span> <span
  m='1675100'>yeah.</span> <span m='1675250'>You</span> <span
  m='1675340'>can</span> <span m='1675460'>basically</span> <span
  m='1676210'>make</span> <span m='1676450'>it</span> <span m='1676540'>a</span>
  <span m='1677020'>combo</span> <span m='1677660'>of</span> <span
  m='1678130'>two</span> <span m='1678430'>first</span> <span
  m='1678760'>order</span> <span m='1678940'>derivatives.</span> <span
  m='1680200'>So</span> <span m='1680380'>yeah,</span> <span
  m='1680650'>it</span> <span m='1680770'>can</span> <span m='1680950'>be</span>
  <span m='1681040'>done.</span> <span m='1682000'>Did</span> <span
  m='1682150'>you</span> <span m='1682230'>have a</span> <span
  m='1682510'>question?</span> </p><p><span m='1682870'>AUDIENCE:</span> <span
  m='1683112'>Yeah.</span> <span m='1683354'>Is this</span> <span
  m='1683838'>notation</span> <span m='1684322'>of</span> <span
  m='1684806'>[INAUDIBLE],</span> <span m='1685290'>and</span> <span
  m='1685774'>is this</span> <span m='1686258'>only</span> <span
  m='1686742'>really</span> <span m='1687226'>used for</span> <span
  m='1687710'>computing</span> <span m='1688194'>different</span> <span
  m='1688678'>orders of</span> <span m='1689162'>derivatives</span> <span
  m='1689646'>or are there other examples?</span> </p><p><span m='1690620'>ALAN
  EDELMAN:</span> <span m='1690725'>Well,</span> <span m='1690830'>for</span>
  <span m='1690950'>using</span> <span m='1691700'>types?</span> </p><p><span
  m='1692270'>AUDIENCE:</span> <span m='1692436'>Or</span> <span
  m='1692602'>specifically,</span> <span m='1693268'>I</span> <span
  m='1693767'>guess,</span> <span m='1694266'>the way that you did</span> <span
  m='1694765'>through this</span> <span m='1695264'>whole</span> <span
  m='1695763'>presentation,</span> <span m='1696262'>just this</span> <span
  m='1696761'>generalized</span> <span m='1698757'>other--</span> </p><p><span
  m='1699760'>ALAN EDELMAN:</span> <span m='1699905'>So</span> <span
  m='1700890'>it's</span> <span m='1701040'>the</span> <span
  m='1701160'>biggest</span> <span m='1701790'>trick</span> <span
  m='1702090'>in</span> <span m='1702180'>the</span> <span
  m='1702270'>world.</span> <span m='1703050'>It's</span> <span
  m='1703260'>not</span> <span m='1703710'>this</span> <span
  m='1703980'>little</span> <span m='1704340'>thing.</span> <span
  m='1704950'>The</span> <span m='1705030'>idea</span> <span
  m='1705510'>of</span> <span m='1706140'>making</span> <span
  m='1706560'>a</span> <span m='1706620'>type</span> <span m='1707430'>to</span>
  <span m='1707580'>do</span> <span m='1707850'>what</span> <span
  m='1708060'>you--</span> <span m='1708340'>I mean,</span> <span
  m='1709410'>did</span> <span m='1709530'>you</span> <span
  m='1709620'>see</span> <span m='1709740'>Kronecker</span> <span
  m='1710130'>products</span> <span m='1710460'>in</span> <span
  m='1710520'>this</span> <span m='1710640'>class?</span> </p><p><span
  m='1711456'>AUDIENCE:</span> <span m='1711654'>No.</span> </p><p><span
  m='1712250'>ALAN EDELMAN:</span> <span m='1712440'>No?</span> </p><p><span
  m='1713007'>AUDIENCE:</span> <span m='1713195'>[INAUDIBLE].</span>
  </p><p><span m='1714140'>ALAN EDELMAN:</span> <span m='1714290'>OK.</span>
  <span m='1715860'>Let</span> <span m='1715950'>me</span> <span
  m='1716070'>see.</span> <span m='1716230'>What</span> <span
  m='1716610'>would</span> <span m='1716970'>you</span> <span
  m='1717120'>have</span> <span m='1717240'>seen</span> <span
  m='1717870'>in</span> <span m='1718020'>this?</span> <span
  m='1719070'>Did</span> <span m='1719370'>you</span> <span
  m='1719550'>see</span> <span m='1720820'>tridiagonal</span> <span
  m='1721470'>matrices,</span> <span m='1721950'>your</span> <span
  m='1722070'>favorite?</span> <span m='1723130'>OK.</span> <span
  m='1723480'>So</span> <span m='1723660'>here.</span> <span
  m='1724260'>So</span> <span m='1724890'>here's</span> <span
  m='1725190'>a</span> <span m='1725280'>built</span> <span
  m='1725580'>in</span> <span m='1725700'>type.</span> </p><p><span
  m='1726730'>Let's</span> <span m='1726900'>say</span> <span
  m='1727110'>n</span> <span m='1727560'>is--</span> <span
  m='1728110'>oh,</span> <span m='1728400'>n</span> <span
  m='1728520'>doesn't</span> <span m='1728730'>have</span> <span
  m='1728850'>to</span> <span m='1728910'>be</span> <span m='1729120'>4.</span>
  <span m='1730010'>I'm</span> <span m='1730200'>going</span> <span
  m='1730350'>to</span> <span m='1730440'>create</span> <span
  m='1730920'>a</span> <span m='1731610'>strang</span> <span
  m='1732150'>matrix,</span> <span m='1732840'>if</span> <span
  m='1732930'>I</span> <span m='1732990'>could</span> <span
  m='1733110'>spell</span> <span m='1733350'>it</span> <span
  m='1733410'>right.</span> <span m='1735360'>And</span> <span
  m='1735510'>it's</span> <span m='1735660'>going</span> <span
  m='1735780'>to</span> <span m='1735900'>be</span> <span m='1736110'>a</span>
  <span m='1736260'>SymTridiagonal,</span> <span m='1737670'>which</span> <span
  m='1737850'>is</span> <span m='1737940'>a</span> <span
  m='1738000'>Julia</span> <span m='1738320'>type.</span> <span
  m='1740580'>And</span> <span m='1740940'>we</span> <span
  m='1741240'>will</span> <span m='1741720'>create</span> <span
  m='1742260'>two</span> <span m='1742590'>times</span> <span
  m='1743220'>ones</span> <span m='1743910'>of</span> <span m='1744320'>n</span>
  <span m='1746010'>and</span> <span m='1746220'>minus</span> <span
  m='1746670'>ones</span> <span m='1747270'>of</span> <span m='1747690'>n</span>
  <span m='1747930'>minus</span> <span m='1748350'>1.</span> </p><p><span
  m='1749760'>Here's</span> <span m='1750060'>a</span> <span
  m='1750120'>type.</span> <span m='1751200'>I</span> <span
  m='1751230'>mean,</span> <span m='1751350'>this</span> <span
  m='1751460'>is</span> <span m='1751560'>built</span> <span
  m='1751860'>in.</span> <span m='1752160'>But</span> <span
  m='1752400'>you</span> <span m='1752550'>could</span> <span
  m='1752670'>have</span> <span m='1752760'>created</span> <span
  m='1753150'>it</span> <span m='1753210'>yourself</span> <span
  m='1753690'>just</span> <span m='1753960'>as</span> <span
  m='1754080'>easily.</span> <span m='1755820'>And</span> <span
  m='1756690'>I</span> <span m='1756840'>don't</span> <span
  m='1757050'>like</span> <span m='1757290'>calling</span> <span
  m='1757920'>this--</span> <span m='1758430'>it's</span> <span
  m='1758630'>certainly</span> <span m='1758880'>not</span> <span
  m='1759060'>a</span> <span m='1759120'>dense</span> <span
  m='1759480'>matrix.</span> <span m='1759990'>And</span> <span
  m='1760110'>I</span> <span m='1760170'>don't</span> <span
  m='1760320'>like</span> <span m='1760440'>calling</span> <span
  m='1760710'>it</span> <span m='1760770'>a</span> <span
  m='1760800'>sparse</span> <span m='1761220'>matrix.</span> </p><p><span
  m='1762000'>I</span> <span m='1762060'>prefer</span> <span
  m='1762360'>to</span> <span m='1762420'>call</span> <span
  m='1762630'>it</span> <span m='1762720'>a</span> <span
  m='1762750'>structured</span> <span m='1763290'>matrix.</span> <span
  m='1764780'>Though</span> <span m='1764980'>the</span> <span
  m='1765050'>word</span> <span m='1765280'>sparse,</span> <span
  m='1766110'>it's</span> <span m='1766260'>a</span> <span
  m='1766290'>little</span> <span m='1766470'>tricky</span> <span
  m='1766830'>here.</span> <span m='1767370'>But</span> <span
  m='1767700'>the</span> <span m='1767820'>reason</span> <span
  m='1768120'>why</span> <span m='1768330'>I</span> <span
  m='1768390'>don't</span> <span m='1768570'>like</span> <span
  m='1768720'>to</span> <span m='1768810'>call</span> <span
  m='1768990'>this</span> <span m='1769140'>a</span> <span
  m='1769200'>sparse</span> <span m='1769710'>matrix</span> <span
  m='1770790'>is</span> <span m='1770940'>because</span> <span
  m='1772560'>we're</span> <span m='1772710'>not</span> <span
  m='1772890'>storing</span> <span m='1773400'>indices</span> <span
  m='1774150'>in</span> <span m='1774240'>any--</span> <span
  m='1774600'>I</span> <span m='1774660'>mean,</span> <span
  m='1774770'>there</span> <span m='1774870'>a</span> <span
  m='1774900'>lot</span> <span m='1775050'>of</span> <span
  m='1775110'>fancy</span> <span m='1775410'>schemes</span> <span
  m='1775800'>for</span> <span m='1775920'>storing</span> <span
  m='1776190'>indices</span> <span m='1776640'>for</span> <span
  m='1777360'>sparse</span> <span m='1777660'>matrices.</span> </p><p><span
  m='1778350'>Well, all</span> <span m='1778620'>we</span> <span
  m='1779430'>store</span> <span m='1779810'>is</span> <span
  m='1779970'>a</span> <span m='1780030'>diagonal</span> <span
  m='1780570'>vector.</span> <span m='1781110'>There's</span> <span
  m='1781500'>the</span> <span m='1781620'>2s</span> <span m='1782100'>on</span>
  <span m='1782190'>the</span> <span m='1782250'>diagonal.</span> <span
  m='1783180'>There's</span> <span m='1783380'>this</span> <span
  m='1783480'>4</span> <span m='1783750'>vector</span> <span
  m='1784230'>with</span> <span m='1784440'>four</span> <span
  m='1784650'>twos.</span> </p><p><span m='1785490'>And</span> <span
  m='1785590'>here's</span> <span m='1785760'>a</span> <span
  m='1785820'>three</span> <span m='1786090'>vector</span> <span
  m='1787350'>for</span> <span m='1787590'>the</span> <span
  m='1787800'>off</span> <span m='1788070'>diagonal.</span> <span
  m='1788700'>And</span> <span m='1788950'>you</span> <span
  m='1789040'>know,</span> <span m='1789130'>you</span> <span
  m='1789180'>don't</span> <span m='1789330'>have</span> <span
  m='1789480'>it</span> <span m='1789540'>twice,</span> <span
  m='1789930'>by</span> <span m='1790080'>the</span> <span
  m='1790170'>way.</span> <span m='1790620'>Most</span> <span
  m='1790890'>sparse</span> <span m='1791160'>matrix</span> <span
  m='1791490'>structures</span> <span m='1792000'>would</span> <span
  m='1793800'>have</span> <span m='1795420'>the</span> <span
  m='1795750'>minus</span> <span m='1796080'>vector</span> <span
  m='1796620'>twice,</span> <span m='1797130'>the</span> <span
  m='1797220'>super</span> <span m='1797580'>and</span> <span
  m='1797760'>the</span> <span m='1797850'>sub.</span> </p><p><span
  m='1799140'>But</span> <span m='1799440'>really,</span> <span
  m='1799770'>only</span> <span m='1800010'>the</span> <span
  m='1800100'>core</span> <span m='1800370'>information</span> <span
  m='1800910'>that's</span> <span m='1801120'>needed</span> <span
  m='1802050'>is</span> <span m='1802230'>stored.</span> <span
  m='1803400'>And</span> <span m='1803790'>in</span> <span m='1803940'>a</span>
  <span m='1804000'>way,</span> <span m='1804960'>one</span> <span
  m='1805290'>uses</span> <span m='1805650'>types</span> <span
  m='1806760'>in</span> <span m='1806910'>Julia</span> <span
  m='1807450'>to</span> <span m='1808230'>basically--</span> <span
  m='1809430'>you</span> <span m='1809670'>only</span> <span
  m='1809970'>store</span> <span m='1810360'>what</span> <span
  m='1810540'>you</span> <span m='1810660'>need,</span> <span
  m='1811230'>not</span> <span m='1811500'>more.</span> <span
  m='1811740'>And</span> <span m='1811830'>then</span> <span
  m='1811950'>you</span> <span m='1812040'>define</span> <span
  m='1812400'>your</span> <span m='1812550'>operations</span> <span
  m='1813750'>to</span> <span m='1813960'>work.</span> <span
  m='1814870'>So</span> <span m='1814950'>for</span> <span
  m='1815040'>example,</span> <span m='1815590'>if</span> <span
  m='1815640'>I</span> <span m='1815790'>were</span> <span m='1816000'>to</span>
  <span m='1817560'>take</span> <span m='1818530'>a</span> <span
  m='1819330'>strang</span> <span m='1819870'>inverse</span> <span
  m='1820380'>times,</span> <span m='1820810'>oh,</span> <span
  m='1821010'>anything,</span> <span m='1822970'>times</span> <span
  m='1823340'>a</span> <span m='1823440'>random</span> <span
  m='1823590'>4.</span> <span m='1824340'>I'm</span> <span
  m='1824430'>going</span> <span m='1824540'>to</span> <span
  m='1824610'>do</span> <span m='1824790'>a</span> <span
  m='1824820'>linear</span> <span m='1825120'>solve.</span> </p><p><span
  m='1825980'>You</span> <span m='1826140'>would</span> <span
  m='1826260'>want</span> <span m='1826530'>to</span> <span
  m='1826650'>use</span> <span m='1826920'>a</span> <span
  m='1826950'>special</span> <span m='1827340'>[INAUDIBLE]</span> <span
  m='1827970'>that</span> <span m='1828330'>knew</span> <span m='1828690'>that
  the</span> <span m='1828780'>matrix</span> <span m='1829290'>was</span> <span
  m='1829560'>a</span> <span m='1829620'>symmetric</span> <span
  m='1829980'>tridiagonal.</span> <span m='1831150'>So</span> <span
  m='1831900'>it's</span> <span m='1832050'>a</span> <span
  m='1832110'>big</span> <span m='1832380'>story</span> <span
  m='1833010'>of</span> <span m='1833550'>being</span> <span
  m='1833850'>able</span> <span m='1834120'>to</span> <span
  m='1834210'>create</span> <span m='1834660'>types</span> <span
  m='1835350'>and</span> <span m='1835500'>use</span> <span
  m='1835770'>them</span> <span m='1836040'>for</span> <span
  m='1836190'>your</span> <span m='1836340'>own</span> <span
  m='1836490'>purposes</span> <span m='1838350'>without</span> <span
  m='1839430'>any</span> <span m='1839710'>wastage.</span> <span
  m='1840240'>And</span> <span m='1840330'>this</span> <span
  m='1840480'>is</span> <span m='1840570'>the</span> <span
  m='1840630'>sort</span> <span m='1840840'>of</span> <span
  m='1840900'>thing</span> <span m='1842100'>that</span> <span
  m='1842580'>while</span> <span m='1842790'>you</span> <span
  m='1842880'>can</span> <span m='1843000'>do</span> <span m='1843210'>it</span>
  <span m='1843420'>in</span> <span m='1843660'>languages</span> <span
  m='1844110'>like</span> <span m='1844290'>Python,</span> <span
  m='1844740'>in</span> <span m='1844890'>MATLAB,</span> <span
  m='1845730'>if</span> <span m='1845940'>you</span> <span
  m='1846330'>were</span> <span m='1846660'>able</span> <span
  m='1847050'>the</span> <span m='1847830'>assembler--</span> <span
  m='1848280'>and</span> <span m='1848400'>MATLAB</span> <span
  m='1848670'>would</span> <span m='1848760'>never</span> <span
  m='1848940'>let</span> <span m='1849150'>you,</span> <span
  m='1849420'>Python,</span> <span m='1849810'>you</span> <span
  m='1849900'>just</span> <span m='1850110'>would</span> <span
  m='1850290'>regret</span> <span m='1850620'>it--</span> <span
  m='1850740'>but</span> <span m='1851880'>you</span> <span
  m='1852480'>would</span> <span m='1852600'>see</span> <span
  m='1853020'>just</span> <span m='1853440'>how</span> <span
  m='1853530'>much</span> <span m='1853740'>overhead</span> <span
  m='1854310'>there</span> <span m='1854520'>is</span> <span
  m='1854950'>in</span> <span m='1855330'>doing</span> <span
  m='1855660'>this.</span> </p><p><span m='1856220'>So</span> <span
  m='1856370'>there</span> <span m='1856450'>would</span> <span
  m='1856550'>be</span> <span m='1856620'>no</span> <span
  m='1856770'>performance</span> <span m='1857310'>gain.</span> <span
  m='1857800'>But</span> <span m='1858930'>in</span> <span m='1859080'>a</span>
  <span m='1859140'>way,</span> <span m='1860160'>this</span> <span
  m='1860340'>is</span> <span m='1860430'>what</span> <span
  m='1860580'>you</span> <span m='1860670'>want to</span> <span
  m='1860940'>do.</span> <span m='1861030'>You</span> <span
  m='1861180'>want</span> <span m='1861330'>to</span> <span
  m='1861390'>use</span> <span m='1861540'>these</span> <span
  m='1861690'>things</span> <span m='1861960'>to</span> <span
  m='1862050'>match</span> <span m='1862350'>the</span> <span
  m='1862440'>mathematics.</span> <span m='1864270'>And</span> <span
  m='1864690'>so</span> <span m='1864840'>that's</span> <span
  m='1865080'>really</span> <span m='1865290'>the</span> <span
  m='1865380'>nice</span> <span m='1865620'>thing</span> <span
  m='1865770'>to</span> <span m='1865890'>be</span> <span
  m='1865980'>able</span> <span m='1866130'>to</span> <span
  m='1866220'>do.</span> <span m='1867350'>All</span> <span
  m='1867450'>right.</span> </p><p><span m='1867650'>I</span> <span
  m='1867740'>only</span> <span m='1867850'>have</span> <span
  m='1867990'>five</span> <span m='1868200'>minutes.</span> <span
  m='1868500'>I</span> <span m='1868560'>don't</span> <span
  m='1868710'>know</span> <span m='1868830'>if</span> <span
  m='1868950'>I'm</span> <span m='1869010'>going</span> <span
  m='1869130'>to</span> <span m='1869220'>pull</span> <span
  m='1869580'>this</span> <span m='1869880'>off.</span> <span
  m='1870240'>But</span> <span m='1870960'>let</span> <span
  m='1871080'>me</span> <span m='1871170'>see</span> <span m='1871320'>if</span>
  <span m='1871410'>I</span> <span m='1871500'>could</span> <span
  m='1871620'>give</span> <span m='1871830'>you</span> <span
  m='1871950'>the</span> <span m='1872460'>main</span> <span
  m='1872790'>idea</span> <span m='1873300'>in</span> <span
  m='1873450'>five</span> <span m='1873690'>minutes</span> <span
  m='1874110'>of</span> <span m='1874720'>over</span> <span
  m='1874900'>immersed</span> <span m='1875250'>mode</span> <span
  m='1875460'>differentiations.</span> <span m='1876450'>But</span> <span
  m='1876660'>here,</span> <span m='1877200'>as</span> <span
  m='1877320'>long</span> <span m='1877530'>as</span> <span
  m='1877650'>you</span> <span m='1878010'>are</span> <span
  m='1878130'>familiar</span> <span m='1878550'>with</span> <span
  m='1878670'>neural</span> <span m='1878940'>networks,</span> <span
  m='1880140'>let</span> <span m='1880320'>me</span> <span
  m='1880410'>see</span> <span m='1880590'>if</span> <span m='1880710'>I</span>
  <span m='1880770'>can</span> <span m='1880950'>do</span> <span
  m='1881070'>this</span> <span m='1881280'>very</span> <span
  m='1881490'>quickly.</span> </p><p><span m='1882690'>I'm</span> <span
  m='1882780'>going to</span> <span m='1882940'>start</span> <span
  m='1883260'>with</span> <span m='1883410'>scalars.</span> <span
  m='1884970'>OK?</span> <span m='1885460'>I'm</span> <span
  m='1885570'>going</span> <span m='1885690'>to</span> <span
  m='1885750'>do</span> <span m='1885840'>a</span> <span
  m='1885900'>neural</span> <span m='1886110'>network</span> <span
  m='1886560'>of</span> <span m='1886680'>all</span> <span
  m='1886800'>scalars.</span> <span m='1887400'>But</span> <span
  m='1888170'>only</span> <span m='1888450'>for</span> <span
  m='1888600'>simplicity,</span> <span m='1889110'>for</span> <span
  m='1889240'>starters,</span> <span m='1889640'>but</span> <span
  m='1889730'>I</span> <span m='1889770'>think</span> <span
  m='1889950'>you're</span> <span m='1890040'>going</span> <span
  m='1890120'>to</span> <span m='1890210'>see</span> <span
  m='1890460'>that</span> <span m='1890730'>this</span> <span
  m='1890880'>can</span> <span m='1891030'>generalize</span> <span
  m='1891420'>to</span> <span m='1891540'>vectors</span> <span
  m='1891870'>and</span> <span m='1891960'>matrices,</span> <span
  m='1892960'>which</span> <span m='1893070'>are</span> <span
  m='1893160'>real</span> <span m='1893580'>neural</span> <span
  m='1893880'>networks.</span> </p><p><span m='1894790'>So</span> <span
  m='1895050'>what</span> <span m='1895230'>I'm</span> <span
  m='1895290'>going</span> <span m='1895410'>to</span> <span
  m='1895470'>do</span> <span m='1895890'>is</span> <span m='1896580'>I</span>
  <span m='1896640'>want</span> <span m='1896850'>to</span> <span
  m='1897210'>imagine</span> <span m='1897660'>that</span> <span
  m='1897810'>we</span> <span m='1898020'>have</span> <span
  m='1898770'>our</span> <span m='1898920'>inputs.</span> <span
  m='1901290'>We'll</span> <span m='1901440'>have</span> <span
  m='1901590'>a</span> <span m='1901650'>bunch</span> <span
  m='1901920'>of</span> <span m='1902010'>scalar</span> <span
  m='1902550'>weights</span> <span m='1902880'>and</span> <span
  m='1903000'>biases.</span> <span m='1903600'>So</span> <span
  m='1903860'>here's</span> <span m='1904640'>W1,</span> <span
  m='1906720'>and</span> <span m='1907170'>I'll</span> <span
  m='1907260'>go</span> <span m='1907410'>up</span> <span m='1907500'>to</span>
  <span m='1907620'>wn</span> <span m='1908090'>and</span> <span
  m='1908490'>bn.</span> <span m='1909830'>All</span> <span
  m='1909920'>right?</span> <span m='1910110'>So</span> <span
  m='1910230'>we</span> <span m='1910350'>have</span> <span m='1910470'>a</span>
  <span m='1910530'>bunch</span> <span m='1910770'>of</span> <span
  m='1911460'>weights</span> <span m='1911760'>and</span> <span
  m='1911880'>biases</span> <span m='1912420'>here.</span> </p><p><span
  m='1913500'>OK?</span> <span m='1914100'>And</span> <span
  m='1916740'>we'll</span> <span m='1916920'>also</span> <span
  m='1917250'>have</span> <span m='1918000'>an</span> <span
  m='1918150'>x1,</span> <span m='1918840'>which</span> <span
  m='1919050'>will</span> <span m='1919170'>sort</span> <span
  m='1919470'>of</span> <span m='1919980'>start</span> <span
  m='1920430'>off</span> <span m='1920670'>our</span> <span
  m='1920760'>neural</span> <span m='1921060'>network.</span> <span
  m='1922230'>And</span> <span m='1922440'>we're</span> <span
  m='1922590'>going</span> <span m='1922890'>to</span> <span
  m='1923040'>compute--</span> <span m='1923520'>I'll</span> <span
  m='1923610'>write it</span> <span m='1923840'>in</span> <span
  m='1923970'>sort</span> <span m='1924120'>of</span> <span
  m='1924180'>Julia-like</span> <span m='1925100'>or</span> <span
  m='1925230'>MATLAB-like</span> <span m='1925740'>notation,</span> <span
  m='1926670'>for</span> <span m='1926970'>i</span> <span
  m='1927510'>equals</span> <span m='1928800'>1</span> <span
  m='1929040'>through</span> <span m='1929370'>n.</span> <span
  m='1930660'>I</span> <span m='1930780'>will</span> <span
  m='1931230'>update</span> <span m='1931860'>x</span> <span
  m='1932670'>by</span> <span m='1932880'>taking</span> <span
  m='1933270'>some</span> <span m='1933570'>function</span> <span
  m='1937040'>of</span> <span m='1937200'>my</span> <span
  m='1937350'>current</span> <span m='1938790'>input,</span> <span
  m='1939150'>maybe</span> <span m='1939360'>something</span> <span
  m='1940290'>like</span> <span m='1940470'>this.</span> </p><p><span
  m='1940870'>And</span> <span m='1941160'>what</span> <span
  m='1941370'>function</span> <span m='1941790'>h</span> <span
  m='1942060'>to</span> <span m='1942210'>use?</span> <span m='1942660'>I</span>
  <span m='1942750'>don't</span> <span m='1942960'>really</span> <span
  m='1943380'>care</span> <span m='1943710'>too</span> <span
  m='1943890'>much.</span> <span m='1944730'>In</span> <span
  m='1944820'>the</span> <span m='1944940'>old</span> <span
  m='1945120'>days,</span> <span m='1945480'>people</span> <span
  m='1945810'>used</span> <span m='1945990'>to</span> <span
  m='1946080'>talk</span> <span m='1946380'>about</span> <span
  m='1946680'>the</span> <span m='1946770'>sigmoid</span> <span
  m='1947310'>function.</span> </p><p><span m='1949110'>Nowadays,</span> <span
  m='1950490'>it's</span> <span m='1950850'>the</span> <span
  m='1951630'>maximum</span> <span m='1952290'>of</span> <span
  m='1952440'>0</span> <span m='1952890'>and</span> <span m='1952980'>t</span>
  <span m='1953310'>that</span> <span m='1953580'>gets</span> <span
  m='1954900'>used</span> <span m='1955290'>all</span> <span
  m='1955410'>the</span> <span m='1955500'>time.</span> <span
  m='1955890'>It's</span> <span m='1956010'>got</span> <span
  m='1956190'>this</span> <span m='1956400'>ridiculous</span> <span
  m='1956880'>name</span> <span m='1957210'>RELU,</span> <span
  m='1958770'>which</span> <span m='1959820'>I</span> <span
  m='1960180'>really</span> <span m='1960390'>can't</span> <span
  m='1960630'>stand.</span> <span m='1961140'>But</span> <span
  m='1961290'>anyway,</span> <span m='1961740'>the</span> <span
  m='1962250'>rectified</span> <span m='1962760'>linear</span> <span
  m='1963060'>unit.</span> </p><p><span m='1963840'>But</span> <span
  m='1964050'>in</span> <span m='1964140'>any</span> <span
  m='1964290'>event,</span> <span m='1964900'>I</span> <span
  m='1965000'>mean,</span> <span m='1965100'>it's</span> <span
  m='1965870'>just</span> <span m='1966100'>the</span> <span
  m='1966210'>function</span> <span m='1966690'>that's</span> <span
  m='1968410'>t of</span> <span m='1968700'>t</span> <span m='1969005'>is</span>
  <span m='1969310'>greater</span> <span m='1969620'>than or</span> <span
  m='1969850'>equal</span> <span m='1970050'>to</span> <span
  m='1970150'>0.</span> <span m='1970570'>0,</span> <span m='1971100'>if</span>
  <span m='1971280'>not.</span> <span m='1976350'>But</span> <span
  m='1976620'>whatever</span> <span m='1977010'>function</span> <span
  m='1978570'>you</span> <span m='1978750'>like.</span> <span
  m='1979890'>And</span> <span m='1980070'>here</span> <span
  m='1980520'>I'm</span> <span m='1980640'>just</span> <span
  m='1980760'>going</span> <span m='1980860'>to</span> <span
  m='1981050'>update.</span> <span m='1981730'>OK.</span> <span
  m='1982020'>And</span> <span m='1982180'>then</span> <span
  m='1982410'>ultimately,</span> <span m='1982980'>you</span> <span
  m='1983070'>might</span> <span m='1983280'>also</span> <span
  m='1983580'>have</span> <span m='1983790'>some</span> <span
  m='1983970'>data</span> <span m='1984300'>y.</span> </p><p><span
  m='1985970'>And</span> <span m='1986160'>you</span> <span
  m='1986250'>would</span> <span m='1986370'>like</span> <span
  m='1986560'>to,</span> <span m='1986700'>if</span> <span
  m='1986790'>everything's</span> <span m='1987150'>a</span> <span
  m='1987210'>scalar,</span> <span m='1987750'>like</span> <span
  m='1987930'>I</span> <span m='1987990'>said,</span> <span
  m='1988140'>this</span> <span m='1988230'>could</span> <span
  m='1988350'>be</span> <span m='1988440'>generalized</span> <span
  m='1989100'>pretty</span> <span m='1989340'>quickly.</span> <span
  m='1990180'>But</span> <span m='1991440'>what</span> <span
  m='1991620'>we</span> <span m='1991710'>can</span> <span m='1991830'>do</span>
  <span m='1992160'>is</span> <span m='1992430'>we</span> <span
  m='1993480'>can</span> <span m='1993630'>minimize,</span> <span
  m='1994200'>say,</span> <span m='1994530'>1/2</span> <span
  m='1995730'>y</span> <span m='1996210'>minus</span> <span
  m='1996660'>xm</span> <span m='1997110'>squared.</span> <span
  m='1998550'>And</span> <span m='1998700'>you're</span> <span
  m='1998970'>going</span> <span m='1999030'>to</span> <span
  m='1999180'>want</span> <span m='1999300'>to</span> <span
  m='1999360'>find</span> <span m='1999600'>the</span> <span
  m='1999660'>data</span> <span m='2000020'>that</span> <span
  m='2000200'>would</span> <span m='2000350'>minimize</span> <span
  m='2000770'>that.</span> <span m='2001610'>All</span> <span
  m='2001790'>this</span> <span m='2001970'>generalizes</span> <span
  m='2002870'>to</span> <span m='2002990'>matrices</span> <span
  m='2003500'>and</span> <span m='2003590'>vectors,</span> <span
  m='2004170'>which</span> <span m='2004250'>is</span> <span
  m='2004340'>what</span> <span m='2004490'>most</span> <span
  m='2005330'>neural</span> <span m='2005630'>nets</span> <span
  m='2006200'>do.</span> <span m='2007130'>OK?</span> </p><p><span
  m='2007610'>And</span> <span m='2008480'>since</span> <span
  m='2009920'>I'm</span> <span m='2010040'>not</span> <span
  m='2010190'>going</span> <span m='2010320'>to</span> <span
  m='2010400'>have</span> <span m='2010550'>a</span> <span
  m='2010580'>lot</span> <span m='2010760'>of</span> <span
  m='2010850'>time,</span> <span m='2011240'>maybe</span> <span
  m='2011450'>I</span> <span m='2011510'>can</span> <span
  m='2011660'>just</span> <span m='2011780'>sort</span> <span
  m='2011930'>of</span> <span m='2011990'>cut</span> <span m='2012170'>to</span>
  <span m='2012260'>the</span> <span m='2012350'>chase.</span> <span
  m='2014000'>If</span> <span m='2014150'>I</span> <span m='2014240'>were</span>
  <span m='2014330'>to</span> <span m='2014420'>differentiate</span> <span
  m='2015110'>the</span> <span m='2015200'>key</span> <span
  m='2015440'>line</span> <span m='2015950'>here,</span> <span
  m='2017140'>I</span> <span m='2017870'>got</span> <span m='2018020'>a</span>
  <span m='2018080'>little</span> <span m='2018260'>bit</span> <span
  m='2018350'>of</span> <span m='2018410'>Julia</span> <span
  m='2018770'>here.</span> <span m='2019170'>But</span> <span
  m='2020000'>if</span> <span m='2020150'>I</span> <span m='2020210'>were</span>
  <span m='2020300'>to</span> <span m='2020360'>differentiate</span> <span
  m='2020810'>the</span> <span m='2020900'>key</span> <span
  m='2021080'>line,</span> <span m='2021500'>what</span> <span
  m='2021650'>would</span> <span m='2021740'>I</span> <span
  m='2021830'>write?</span> <span m='2022040'>I</span> <span
  m='2022100'>would</span> <span m='2022220'>write--</span> <span
  m='2023210'>well,</span> <span m='2023480'>here,</span> <span
  m='2023800'>actually,</span> <span m='2024050'>let</span> <span
  m='2024170'>me</span> <span m='2024710'>use</span> <span
  m='2024950'>the</span> <span m='2025040'>usual</span> <span
  m='2025310'>notation.</span> </p><p><span m='2026310'>Let</span> <span
  m='2026330'>me</span> <span m='2026660'>have</span> <span
  m='2026900'>delta</span> <span m='2027230'>I</span> <span
  m='2027520'>be</span> <span m='2027710'>the</span> <span m='2027920'>h</span>
  <span m='2028160'>prime</span> <span m='2029070'>of</span> <span
  m='2029390'>wxi</span> <span m='2031010'>plus</span> <span
  m='2031370'>bi.</span> <span m='2032720'>OK?</span> <span
  m='2032990'>So</span> <span m='2033140'>that's</span> <span
  m='2034520'>delta</span> <span m='2034940'>i.</span> <span
  m='2035890'>And</span> <span m='2036020'>then</span> <span
  m='2036740'>you</span> <span m='2036890'>can</span> <span
  m='2037040'>see</span> <span m='2037520'>that</span> <span
  m='2037970'>the</span> <span m='2038180'>dxi</span> <span
  m='2038480'>plus</span> <span m='2038720'>1</span> <span m='2039440'>is</span>
  <span m='2039590'>delta</span> <span m='2040010'>i.</span> <span
  m='2041330'>And</span> <span m='2041660'>I'll</span> <span
  m='2041810'>have</span> <span m='2042920'>dwi</span> <span
  m='2043910'>xi</span> <span m='2045140'>plus</span> <span
  m='2045650'>dxi</span> <span m='2046010'>wi</span> <span
  m='2048230'>plus</span> <span m='2048469'>dbi</span> <span
  m='2049159'>would</span> <span m='2049310'>be</span> <span
  m='2049429'>the</span> <span m='2050179'>differential.</span> <span
  m='2051889'>This</span> <span m='2052100'>would</span> <span
  m='2052190'>be</span> <span m='2052310'>how--</span> <span
  m='2053440'>so</span> <span m='2053600'>I'm</span> <span
  m='2053719'>almost</span> <span m='2053960'>done,</span> <span
  m='2054139'>that's</span> <span m='2054320'>the</span> <span m='2054380'>good
  news.</span> </p><p><span m='2055760'>So</span> <span m='2056270'>if</span>
  <span m='2056420'>I</span> <span m='2056510'>make</span> <span
  m='2056659'>a</span> <span m='2056719'>little</span> <span
  m='2056960'>change--</span> <span m='2057600'>I</span> <span
  m='2057699'>like</span> <span m='2057739'>to</span> <span
  m='2057830'>think</span> <span m='2058010'>of</span> <span
  m='2058100'>this</span> <span m='2058250'>as,</span> <span
  m='2058340'>like,</span> <span m='2058489'>0.001</span> <span
  m='2059210'>changes.</span> <span m='2060320'>I</span> <span
  m='2060380'>don't</span> <span m='2060980'>like</span> <span
  m='2061130'>infinitesimals.</span> <span m='2061830'>I</span> <span
  m='2061909'>like</span> <span m='2062030'>0.001.</span> <span
  m='2062620'>That's</span> <span m='2062730'>how</span> <span
  m='2062900'>I</span> <span m='2062960'>think</span> <span
  m='2063170'>of</span> <span m='2063230'>them.</span> <span
  m='2063670'>But</span> <span m='2063889'>you</span> <span
  m='2063949'>make</span> <span m='2064130'>a</span> <span
  m='2064190'>little</span> <span m='2064370'>change</span> <span
  m='2064730'>here,</span> <span m='2064909'>a</span> <span
  m='2064940'>little</span> <span m='2065090'>change</span> <span
  m='2065389'>here,</span> <span m='2065480'>a</span> <span
  m='2065510'>little</span> <span m='2065719'>change</span> <span
  m='2065989'>here.</span> <span m='2066590'>You</span> <span
  m='2066679'>get</span> <span m='2066830'>a</span> <span
  m='2066889'>change</span> <span m='2067219'>here.</span> </p><p><span
  m='2070780'>You'll</span> <span m='2070909'>get</span> <span
  m='2071090'>this</span> <span m='2071210'>linear</span> <span
  m='2072380'>this</span> <span m='2072770'>linear</span> <span
  m='2073070'>function</span> <span m='2073580'>of</span> <span
  m='2073940'>the</span> <span m='2074330'>perturbations</span> <span
  m='2075110'>here</span> <span m='2075830'>gives</span> <span
  m='2076070'>you</span> <span m='2076159'>perturbations</span> <span
  m='2076940'>here.</span> <span m='2077770'>OK?</span> <span
  m='2078230'>Well,</span> <span m='2078620'>I've</span> <span
  m='2078739'>only</span> <span m='2078889'>got</span> <span
  m='2079010'>one</span> <span m='2079159'>minute.</span> <span
  m='2079530'>So</span> <span m='2079630'>I'm</span> <span
  m='2079730'>going</span> <span m='2079830'>to</span> <span
  m='2079929'>write</span> <span m='2079940'>all</span> <span
  m='2080060'>this</span> <span m='2080239'>out</span> <span
  m='2080389'>with</span> <span m='2080510'>linear</span> <span
  m='2080750'>algebra,</span> <span m='2081139'>because</span> <span
  m='2081440'>everything</span> <span m='2081880'>is</span> <span
  m='2082010'>better</span> <span m='2082340'>when</span> <span
  m='2082489'>written</span> <span m='2082760'>out</span> <span
  m='2082880'>with</span> <span m='2082969'>linear</span> <span
  m='2083210'>algebra.</span> </p><p><span m='2084080'>So</span> <span
  m='2084469'>I'm</span> <span m='2084620'>going</span> <span
  m='2084739'>to</span> <span m='2084800'>write</span> <span
  m='2085010'>down</span> <span m='2086030'>that--</span> <span
  m='2087920'>I'm</span> <span m='2088040'>going</span> <span
  m='2088150'>to</span> <span m='2088250'>write</span> <span
  m='2088460'>down</span> <span m='2089420'>that</span> <span
  m='2090350'>I'm</span> <span m='2090530'>actually</span> <span
  m='2090860'>interested</span> <span m='2091460'>in</span> <span
  m='2091610'>the</span> <span m='2091670'>last</span> <span
  m='2092060'>element.</span> <span m='2093800'>But</span> <span
  m='2094040'>dx</span> <span m='2094250'>dn</span> <span
  m='2094850'>plus</span> <span m='2095060'>1</span> <span m='2095840'>is</span>
  <span m='2095989'>going</span> <span m='2096219'>to</span> <span
  m='2096380'>equal</span> <span m='2097610'>and</span> <span
  m='2097760'>I'm</span> <span m='2097850'>going</span> <span
  m='2097960'>to</span> <span m='2098060'>have</span> <span m='2098300'>a</span>
  <span m='2098360'>couple</span> <span m='2098630'>of</span> <span
  m='2098690'>matrices</span> <span m='2099260'>here.</span> <span
  m='2099500'>Let</span> <span m='2099590'>me</span> <span
  m='2099710'>just</span> <span m='2099860'>sort</span> <span
  m='2100010'>of</span> <span m='2100070'>get</span> <span
  m='2100250'>the</span> <span m='2100310'>structure</span> <span
  m='2101600'>right.</span> <span m='2103190'>This</span> <span
  m='2103340'>will</span> <span m='2103430'>dx2,</span> <span
  m='2105110'>dxn</span> <span m='2105650'>plus</span> <span
  m='2105860'>1</span> <span m='2106140'>again.</span> <span
  m='2106370'>Sorry</span> <span m='2106730'>for</span> <span
  m='2106880'>the</span> <span m='2106970'>squishing.</span> </p><p><span
  m='2108590'>But</span> <span m='2111500'>here--</span> <span
  m='2113060'>in</span> <span m='2113180'>fact,</span> <span
  m='2113550'>I'd</span> <span m='2113650'>like</span> <span
  m='2113690'>to</span> <span m='2113810'>use</span> <span
  m='2113960'>block</span> <span m='2114350'>matrices</span> <span
  m='2114860'>a</span> <span m='2114920'>little</span> <span
  m='2115190'>bit.</span> <span m='2115820'>So</span> <span
  m='2116930'>here</span> <span m='2117230'>I'm</span> <span
  m='2117290'>going</span> <span m='2117410'>to</span> <span
  m='2117470'>have</span> <span m='2117590'>dw1</span> <span
  m='2118640'>db1.</span> <span m='2119400'>I'm</span> <span
  m='2119500'>going</span> <span m='2119600'>to</span> <span
  m='2119960'>put</span> <span m='2120140'>the</span> <span
  m='2120260'>bias</span> <span m='2120680'>together--</span> <span
  m='2121250'>sorry</span> <span m='2121580'>for</span> <span
  m='2121700'>the</span> <span m='2121790'>mess.</span> <span
  m='2122650'>But</span> <span m='2123360'>dwn</span> <span
  m='2123860'>dbn.</span> </p><p><span m='2124370'>And</span> <span
  m='2124730'>Julia</span> <span m='2125060'>lets</span> <span
  m='2125300'>you</span> <span m='2126800'>make</span> <span
  m='2127190'>block</span> <span m='2127550'>matrices.</span> <span
  m='2128180'>And</span> <span m='2128300'>you</span> <span
  m='2128390'>can</span> <span m='2128480'>actually</span> <span
  m='2128690'>use</span> <span m='2128900'>them</span> <span
  m='2129020'>directly.</span> <span m='2129380'>There'd</span> <span
  m='2129530'>be</span> <span m='2129650'>a</span> <span
  m='2129680'>special</span> <span m='2130040'>type</span> <span
  m='2130730'>right</span> <span m='2130970'>there.</span> <span
  m='2131810'>OK?</span> <span m='2132180'>And</span> <span
  m='2132320'>then</span> <span m='2132440'>what</span> <span
  m='2132620'>goes</span> <span m='2132860'>here</span> <span
  m='2133190'>you</span> <span m='2133310'>could</span> <span
  m='2133460'>actually</span> <span m='2133730'>see</span> <span
  m='2133910'>what</span> <span m='2134060'>it</span> <span
  m='2134120'>would</span> <span m='2134240'>be.</span> <span m='2134450'>It
  would</span> <span m='2134570'>be--</span> <span m='2135160'>I hope</span>
  <span m='2135320'>I'm</span> <span m='2135470'>doing</span> <span
  m='2135650'>it</span> <span m='2135740'>right.</span> <span
  m='2135980'>But</span> <span m='2136100'>there'd</span> <span
  m='2136220'>be</span> <span m='2136310'>a</span> <span
  m='2136370'>delta</span> <span m='2136700'>1x1</span> <span m='2137850'>and
  a</span> <span m='2138290'>delta</span> <span m='2138680'>NxN</span>
  </p><p><span m='2140110'>And</span> <span m='2140240'>this</span> <span
  m='2140360'>would</span> <span m='2140480'>be</span> <span
  m='2140570'>a</span> <span m='2140630'>diagonal</span> <span
  m='2141170'>matrix.</span> <span m='2142265'>OK?</span> <span
  m='2142730'>And</span> <span m='2142850'>then</span> <span
  m='2142970'>what</span> <span m='2143090'>do</span> <span m='2143210'>I</span>
  <span m='2143330'>have</span> <span m='2143600'>over</span> <span
  m='2143810'>here?</span> <span m='2144420'>Here</span> <span
  m='2146450'>I'd</span> <span m='2146690'>have</span> <span
  m='2147170'>the</span> <span m='2147500'>delta</span> <span
  m='2147830'>w's.</span> <span m='2148990'>And</span> <span
  m='2149150'>if</span> <span m='2149240'>you</span> <span
  m='2149360'>check</span> <span m='2149750'>you'll</span> <span
  m='2149870'>see</span> <span m='2150110'>that</span> <span
  m='2150260'>this</span> <span m='2150470'>will</span> <span
  m='2150560'>be--</span> <span m='2151910'>I'm</span> <span
  m='2152030'>not</span> <span m='2152120'>going</span> <span
  m='2152190'>to</span> <span m='2152270'>get</span> <span
  m='2152390'>the</span> <span m='2152480'>indices</span> <span
  m='2152900'>right,</span> <span m='2153200'>and</span> <span
  m='2153290'>I</span> <span m='2153350'>don't</span> <span
  m='2153500'>have</span> <span m='2153620'>time.</span> <span m='2153920'>So
  I'm just going to</span> <span m='2154280'>write</span> <span
  m='2154460'>it</span> <span m='2154550'>like</span> <span
  m='2154760'>this.</span> </p><p><span m='2155600'>And</span> <span
  m='2155690'>now</span> <span m='2155960'>I'm</span> <span
  m='2156020'>just</span> <span m='2156140'>going</span> <span
  m='2156220'>to</span> <span m='2156320'>give</span> <span
  m='2156470'>you</span> <span m='2156620'>the</span> <span
  m='2157430'>end</span> <span m='2157610'>of</span> <span
  m='2157670'>the</span> <span m='2157730'>story,</span> <span
  m='2157980'>because</span> <span m='2158210'>I've</span> <span
  m='2158300'>run</span> <span m='2158480'>out</span> <span
  m='2158570'>of</span> <span m='2158630'>time.</span> <span
  m='2159350'>You</span> <span m='2159470'>could</span> <span
  m='2159590'>write</span> <span m='2159770'>all</span> <span
  m='2159920'>this</span> <span m='2160130'>as</span> <span
  m='2160280'>dx</span> <span m='2160970'>is</span> <span
  m='2161090'>equal</span> <span m='2161300'>to</span> <span
  m='2161420'>a</span> <span m='2161480'>diagonal</span> <span
  m='2161990'>matrix</span> <span m='2162830'>times</span> <span
  m='2163130'>the</span> <span m='2163220'>derivative</span> <span
  m='2163670'>of</span> <span m='2163730'>the</span> <span
  m='2163790'>parameters</span> <span m='2165020'>plus</span> <span
  m='2165380'>a</span> <span m='2165830'>lower</span> <span
  m='2166160'>triangle</span> <span m='2166420'>or</span> <span
  m='2166700'>matrix</span> <span m='2167660'>times</span> <span
  m='2167990'>the</span> <span m='2168140'>x</span> <span
  m='2168410'>again.</span> <span m='2169490'>And</span> <span
  m='2169610'>so</span> <span m='2169700'>if</span> <span m='2169790'>you</span>
  <span m='2169880'>want</span> <span m='2170030'>to</span> <span
  m='2170090'>solve</span> <span m='2170420'>this,</span> <span
  m='2170720'>linear</span> <span m='2171020'>algebra</span> <span
  m='2171470'>just</span> <span m='2171650'>does</span> <span
  m='2171950'>the</span> <span m='2172250'>propagation.</span> <span
  m='2173360'>You</span> <span m='2173480'>have</span> <span
  m='2173810'>I</span> <span m='2174030'>minus</span> <span m='2174500'>L</span>
  <span m='2175430'>dx</span> <span m='2176810'>is</span> <span
  m='2177020'>DdP</span> <span m='2178730'>or</span> <span m='2179210'>dx</span>
  <span m='2180650'>will</span> <span m='2180740'>be</span> <span
  m='2181070'>I</span> <span m='2181400'>minus</span> <span m='2181880'>L</span>
  <span m='2183020'>inverse</span> <span m='2183690'>DDP.</span> </p><p><span
  m='2185660'>And</span> <span m='2185840'>if</span> <span m='2185930'>I</span>
  <span m='2186020'>only</span> <span m='2186170'>want</span> <span
  m='2186350'>the</span> <span m='2186410'>last</span> <span
  m='2186740'>element--</span> <span m='2187070'>let's</span> <span
  m='2187190'>say</span> <span m='2187370'>en</span> <span m='2187970'>is</span>
  <span m='2188120'>the</span> <span m='2188240'>vector</span> <span
  m='2188600'>that</span> <span m='2189080'>pulls</span> <span
  m='2189410'>out</span> <span m='2189560'>the</span> <span
  m='2189620'>last</span> <span m='2189920'>element,</span> <span
  m='2191060'>then</span> <span m='2191210'>this</span> <span
  m='2191390'>is</span> <span m='2191540'>all</span> <span
  m='2191960'>I'm</span> <span m='2192080'>going</span> <span
  m='2192350'>to</span> <span m='2192470'>need</span> <span
  m='2193220'>to</span> <span m='2193370'>get</span> <span
  m='2193610'>all</span> <span m='2193760'>my</span> <span
  m='2193880'>derivatives.</span> <span m='2194450'>And</span> <span
  m='2194540'>what's</span> <span m='2194750'>the</span> <span
  m='2194840'>moral</span> <span m='2195120'>of</span> <span
  m='2195170'>the</span> <span m='2195230'>story?</span> <span m='2195690'>I
  apologize</span> <span m='2196160'>for</span> <span m='2196250'>going</span>
  <span m='2196430'>one</span> <span m='2196580'>minute</span> <span
  m='2196760'>over.</span> </p><p><span m='2197390'>But</span> <span
  m='2197570'>the</span> <span m='2197660'>moral</span> <span
  m='2197910'>of</span> <span m='2197950'>the</span> <span
  m='2198030'>story</span> <span m='2198530'>is</span> <span
  m='2199220'>instead</span> <span m='2199670'>of</span> <span
  m='2199790'>back</span> <span m='2200150'>propagating</span> <span
  m='2200930'>through</span> <span m='2201140'>your</span> <span
  m='2201380'>own</span> <span m='2201830'>hard</span> <span
  m='2202190'>work,</span> <span m='2204110'>you</span> <span
  m='2204230'>probably</span> <span m='2204770'>know</span> <span
  m='2205070'>that</span> <span m='2205220'>when</span> <span
  m='2205310'>you</span> <span m='2205400'>solve</span> <span
  m='2205730'>a</span> <span m='2205790'>lower</span> <span
  m='2206030'>triangular</span> <span m='2206480'>matrix,</span> <span
  m='2207830'>people</span> <span m='2208180'>will</span> <span
  m='2208280'>read</span> <span m='2208490'>written</span> <span
  m='2208760'>code</span> <span m='2209180'>that</span> <span
  m='2209330'>back</span> <span m='2209630'>solves</span> <span
  m='2209930'>the</span> <span m='2210230'>lower</span> <span
  m='2210560'>triangular</span> <span m='2210890'>matrix.</span> <span
  m='2211640'>The</span> <span m='2211790'>back,</span> <span
  m='2212540'>the</span> <span m='2212660'>big</span> <span
  m='2212990'>back</span> <span m='2213350'>piece,</span> <span
  m='2214160'>has</span> <span m='2214370'>already</span> <span
  m='2214670'>been</span> <span m='2214850'>implemented</span> <span
  m='2215330'>for</span> <span m='2215570'>you.</span> <span
  m='2215750'>Why</span> <span m='2216650'>reinvent</span> <span
  m='2217070'>the</span> <span m='2217220'>wheel</span> <span
  m='2218150'>in</span> <span m='2219170'>if</span> <span m='2219260'>the</span>
  <span m='2219350'>back--</span> <span m='2219650'>if</span> <span
  m='2219770'>linear</span> <span m='2219980'>algebra</span> <span
  m='2220340'>already</span> <span m='2220580'>has</span> <span
  m='2220820'>the</span> <span m='2220940'>back,</span> <span m='2221270'>you
  see?</span> <span m='2222250'>And</span> <span m='2222440'>so</span> <span
  m='2222740'>if</span> <span m='2222890'>you</span> <span
  m='2222950'>just</span> <span m='2223190'>do</span> <span
  m='2223430'>this,</span> <span m='2223700'>and</span> <span
  m='2223790'>you</span> <span m='2223880'>do</span> <span m='2224000'>it</span>
  <span m='2224090'>in</span> <span m='2224180'>a</span> <span
  m='2224210'>language</span> <span m='2224630'>that</span> <span
  m='2224720'>lets</span> <span m='2224900'>you</span> <span
  m='2224990'>get</span> <span m='2226070'>full</span> <span
  m='2226220'>performance,</span> <span m='2227240'>you</span> <span
  m='2227330'>don't</span> <span m='2227630'>need</span> <span
  m='2227900'>to</span> <span m='2228560'>do</span> <span
  m='2228710'>your</span> <span m='2228860'>own</span> <span
  m='2229190'>backpropagation.</span> <span m='2229790'>Because</span> <span
  m='2230630'>a</span> <span m='2230690'>simple</span> <span
  m='2230990'>backslash</span> <span m='2231620'>will</span> <span
  m='2231770'>do</span> <span m='2231890'>it</span> <span m='2231980'>for</span>
  <span m='2232220'>you.</span> </p><p><span m='2232920'>So I</span> <span
  m='2233060'>apologize</span> <span m='2233510'>for</span> <span
  m='2233600'>going</span> <span m='2233780'>over.</span> <span m='2234000'>I
  don't</span> <span m='2234060'>know</span> <span m='2234350'>if</span> <span
  m='2234570'>Professor</span> <span m='2234900'>Strang</span> <span
  m='2235240'>had some</span> <span m='2235360'>final</span> <span
  m='2235630'>words.</span> <span m='2236950'>But</span> <span
  m='2237790'>anyway,</span> <span m='2238720'>linear</span> <span
  m='2238990'>algebra</span> <span m='2239350'>is</span> <span
  m='2239440'>the</span> <span m='2239500'>secret</span> <span
  m='2239800'>to</span> <span m='2239890'>everything.</span> <span
  m='2240370'>That's</span> <span m='2240910'>the</span> <span
  m='2241030'>big</span> <span m='2241210'>message.</span> </p><p><span
  m='2242582'>AUDIENCE:</span> <span m='2242820'>OK.</span> </p><p><span
  m='2244010'>[APPLAUSE]</span> </p><p></p><p><span m='2249250'>GILBERT
  STRANG:</span> <span m='2249380'>Well,</span> <span m='2251680'>since</span>
  <span m='2252040'>it's</span> <span m='2252220'>our</span> <span
  m='2252400'>last</span> <span m='2253690'>two</span> <span
  m='2253900'>minutes,</span> <span m='2254290'>or</span> <span
  m='2254380'>minus</span> <span m='2254770'>two</span> <span
  m='2254950'>minutes</span> <span m='2255400'>of</span> <span
  m='2255710'>18.065.</span> <span m='2259330'>I</span> <span
  m='2259480'>hope</span> <span m='2259750'>you</span> <span
  m='2259870'>guys</span> <span m='2260200'>enjoyed</span> <span
  m='2260640'>it.</span> <span m='2260900'>I</span> <span
  m='2260980'>certainly</span> <span m='2261500'>enjoyed it,</span> <span
  m='2261970'>as</span> <span m='2262180'>you</span> <span
  m='2262330'>could</span> <span m='2262510'>tell.</span> <span
  m='2264400'>Teaching</span> <span m='2264880'>this</span> <span
  m='2265120'>class,</span> <span m='2265570'>seeing</span> <span
  m='2266050'>how</span> <span m='2266290'>it</span> <span
  m='2266380'>would</span> <span m='2266620'>go,</span> <span
  m='2267580'>and</span> <span m='2268630'>writing</span> <span
  m='2269110'>about</span> <span m='2269470'>it.</span> <span
  m='2270130'>So</span> <span m='2270460'>I'll</span> <span
  m='2270700'>let</span> <span m='2271000'>you</span> <span
  m='2271090'>know</span> <span m='2271450'>as</span> <span
  m='2271840'>about</span> <span m='2272200'>the</span> <span
  m='2272320'>writing.</span> <span m='2273250'>And</span> <span
  m='2273460'>meanwhile,</span> <span m='2274000'>I'll</span> <span
  m='2274160'>get</span> <span m='2274390'>your</span> <span
  m='2274630'>writing</span> <span m='2275170'>on</span> <span
  m='2275320'>the</span> <span m='2275440'>projects,</span> <span
  m='2276610'>which</span> <span m='2276970'>I</span> <span
  m='2277150'>appreciate</span> <span m='2277750'>very</span> <span
  m='2278080'>much.</span> <span m='2278950'>And</span> <span
  m='2279460'>of</span> <span m='2279640'>course,</span> <span
  m='2280000'>grades</span> <span m='2280390'>are</span> <span
  m='2280450'>going</span> <span m='2280620'>to</span> <span
  m='2280720'>come</span> <span m='2280960'>out</span> <span
  m='2281140'>well.</span> <span m='2281950'>And</span> <span
  m='2283240'>I</span> <span m='2283390'>hope</span> <span
  m='2283630'>you've</span> <span m='2283810'>enjoyed</span> <span
  m='2284200'>it.</span> <span m='2284860'>So</span> <span
  m='2285160'>thank</span> <span m='2285460'>you</span> <span
  m='2285580'>all.</span> <span m='2286020'>You're right.</span> <span
  m='2286510'>Thanks.</span> </p><p><span m='2287110'>[APPLAUSE]</span> </p>
uid: a6cd4ecd57886f69ecd290e51701054a
type: course
layout: video
---
