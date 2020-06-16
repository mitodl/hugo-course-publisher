---
about_this_resource_text: "<h2 class=\"subhead\">Description</h2>\r\n<p>The topic of this lecture is clustering for graphs, meaning finding sets of “related” vertices in graphs. The challenge is finding good algorithms to optimize cluster quality. Professor Strang reviews some possibilities.</p>\r\n<h2 class=\"subhead\">Summary</h2><p>Two ways to separate graph nodes into clusters</p>\r\n<ul>\r\n    <li><strong>k-means:</strong> Choose clusters, choose centroids, choose clusters, ...</li>\r\n    <li><strong>Fiedler vector:</strong> Eigenvector of graph Laplacian: \\(+-\\) signs give 2 clusters</li>\r\n</ul>\r\n<p>Related sections in textbook: IV.6&ndash;IV.7</p>\r\n<p><strong>Instructor:</strong> Prof. Gilbert Strang</p>"
embedded_media:
  - id: Video-YouTube-Stream
    media_location: cxTmmasBiC8
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: Video-YouTube-Stream
    type: Video
    uid: e0adf92aa71101aed84c6ba721de9c85
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/cxTmmasBiC8/default.jpg'
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 56a039a827b965ee196d8ce4205b9fee
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: cxTmmasBiC8
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b586e7cccc2741e069e7c454e4b775ee
  - id: cxTmmasBiC8.srt
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-35-finding-clusters-in-graphs-second-project-handwriting/cxTmmasBiC8.srt
    title: 3play caption file
    type: null
    uid: 3fed83dceb1c6ccc6afa77cd3c851949
  - id: cxTmmasBiC8.pdf
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-35-finding-clusters-in-graphs-second-project-handwriting/cxTmmasBiC8.pdf
    title: 3play pdf file
    type: null
    uid: 9ec204ebe28a83f0f28421c375a18117
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a4bd421f25a8a85308aa7a0e8b7c547e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 52071eb3fac8fbc2a3dd05d67b66b56e
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture35_300k.mp4'
    parent_uid: 3d3111b5d8ec1cc04ce6e84c758a5976
    title: Video-Internet Archive-MP4
    type: Video
    uid: 86622d7cc59ab98cd410c4bd92ee2b5e
inline_embed_id: 15463284lecture35findingclustersingraphssecondprojecthandwriting79108741
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-35-finding-clusters-in-graphs-second-project-handwriting
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-35-finding-clusters-in-graphs-second-project-handwriting
title: 'Lecture 35: Finding Clusters in Graphs'
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
  m='11900'>donation,</span> <span m='12650'>or</span> <span m='12800'>to</span>
  <span m='12950'>view</span> <span m='13160'>additional</span> <span
  m='13550'>materials</span> <span m='14180'>from</span> <span
  m='14360'>hundreds</span> <span m='14690'>of</span> <span m='14810'>MIT</span>
  <span m='15170'>courses,</span> <span m='16470'>visit</span> <span
  m='16670'>MIT</span> <span m='17180'>OpenCourseWare</span> <span
  m='18140'>at</span> <span m='18290'>ocw.mit.edu.</span> </p><p><span
  m='23190'>GILBERT STRANG:</span> <span m='23425'>OK.</span> <span
  m='23970'>Now,</span> <span m='24810'>clustering</span> <span
  m='25470'>for</span> <span m='25670'>graphs.</span> <span m='27690'>So</span>
  <span m='28140'>this</span> <span m='28440'>is</span> <span m='29700'>a</span>
  <span m='29760'>topic--</span> <span m='30360'>this</span> <span
  m='30600'>is</span> <span m='30780'>one</span> <span m='30990'>of</span> <span
  m='31050'>the</span> <span m='31230'>important</span> <span
  m='31680'>things</span> <span m='32040'>you</span> <span m='32189'>can</span>
  <span m='32820'>try</span> <span m='33090'>to</span> <span m='33210'>do</span>
  <span m='33480'>with</span> <span m='33720'>a</span> <span
  m='33780'>graph.</span> <span m='34890'>So</span> <span m='35100'>you</span>
  <span m='35280'>have</span> <span m='35460'>a</span> <span
  m='35520'>large</span> <span m='35940'>graph.</span> <span
  m='44230'>Let</span> <span m='44280'>me</span> <span m='44910'>kind</span>
  <span m='45150'>of</span> <span m='45300'>divide</span> <span
  m='45630'>it</span> <span m='45960'>into</span> <span m='46230'>two</span>
  <span m='47040'>clusters.</span> <span m='55020'>So</span> <span
  m='55300'>you've</span> <span m='55420'>got</span> <span m='55590'>a</span>
  <span m='55680'>giant</span> <span m='56130'>graph.</span> <span
  m='56760'>And</span> <span m='56940'>then</span> <span m='57400'>the</span>
  <span m='57660'>job</span> <span m='58020'>is</span> <span m='58140'>to</span>
  <span m='58260'>make</span> <span m='58500'>some</span> <span
  m='58800'>sense</span> <span m='59190'>out</span> <span m='59370'>of</span>
  <span m='59490'>it.</span> <span m='60030'>And</span> <span
  m='60180'>one</span> <span m='60630'>possible</span> <span
  m='61290'>step</span> <span m='61920'>is</span> <span m='62160'>to</span>
  <span m='62430'>be</span> <span m='62670'>able</span> <span
  m='62870'>to</span> <span m='62970'>subdivide</span> <span
  m='63405'>it,</span> <span m='64560'>if,</span> <span m='65790'>as</span>
  <span m='66120'>I</span> <span m='66240'>see</span> <span
  m='66570'>here,</span> <span m='69900'>there's</span> <span m='70260'>a</span>
  <span m='71040'>cut</span> <span m='71490'>between</span> <span
  m='72450'>two</span> <span m='72900'>reasonably</span> <span
  m='73560'>equal</span> <span m='74850'>parts</span> <span m='75270'>of</span>
  <span m='75360'>the</span> <span m='75450'>graph--</span> <span
  m='76080'>reasonable--</span> <span m='76800'>reasonably</span> <span
  m='77490'>same</span> <span m='77850'>size.</span> </p><p><span
  m='79320'>And</span> <span m='80370'>therefore,</span> <span
  m='80940'>that</span> <span m='81240'>graph</span> <span
  m='81630'>could</span> <span m='81840'>be</span> <span
  m='81990'>studied</span> <span m='83010'>in</span> <span m='83250'>two</span>
  <span m='83490'>pieces.</span> <span m='84810'>So</span> <span
  m='85050'>the</span> <span m='85170'>question</span> <span
  m='85560'>is,</span> <span m='85710'>how</span> <span m='85890'>do</span>
  <span m='85980'>you</span> <span m='86070'>find</span> <span
  m='86370'>such</span> <span m='86670'>a</span> <span m='86760'>cut</span>
  <span m='87630'>by</span> <span m='87990'>a</span> <span
  m='90120'>algorithm?</span> <span m='90940'>What's</span> <span
  m='91140'>an</span> <span m='91260'>algorithm</span> <span
  m='91830'>that</span> <span m='91980'>would</span> <span m='92160'>find</span>
  <span m='92580'>that</span> <span m='92880'>cut?</span> <span
  m='93260'>So</span> <span m='94680'>that's</span> <span m='95030'>a</span>
  <span m='95090'>problem.</span> <span m='96120'>Let's</span> <span
  m='96300'>say</span> <span m='96600'>we're</span> <span
  m='96780'>looking</span> <span m='97110'>for</span> <span m='97290'>two</span>
  <span m='101430'>clusters.</span> <span m='105940'>We</span> <span
  m='106090'>could</span> <span m='106270'>look</span> <span
  m='106480'>for</span> <span m='106630'>more</span> <span
  m='106930'>clusters,</span> <span m='107500'>but</span> <span
  m='107800'>let's</span> <span m='108040'>say</span> <span m='108250'>we</span>
  <span m='108460'>want</span> <span m='108700'>to</span> <span
  m='108790'>look</span> <span m='109030'>for</span> <span m='109210'>two</span>
  <span m='109480'>clusters.</span> <span m='110470'>So</span> <span
  m='110620'>what</span> <span m='110830'>are</span> <span m='110920'>we</span>
  <span m='111070'>trying</span> <span m='111400'>to</span> <span
  m='111490'>do?</span> <span m='112250'>We're</span> <span
  m='112330'>trying</span> <span m='112690'>to</span> <span
  m='112780'>minimize.</span> <span m='115580'>So</span> <span
  m='115690'>this</span> <span m='115870'>is</span> <span m='116000'>the</span>
  <span m='116050'>problem,</span> <span m='116620'>then.</span> <span
  m='122380'>So</span> <span m='123040'>we</span> <span m='123310'>look</span>
  <span m='123550'>for--</span> <span m='124720'>find</span> <span
  m='127000'>positions</span> <span m='128020'>x</span> <span
  m='129039'>and</span> <span m='129160'>y,</span> <span m='129639'>let's</span>
  <span m='129850'>say.</span> <span m='130509'>Two</span> <span
  m='131440'>which</span> <span m='131650'>will</span> <span
  m='131800'>be</span> <span m='132100'>the</span> <span
  m='132340'>centers,</span> <span m='133090'>so</span> <span
  m='133360'>to</span> <span m='133480'>speak,</span> <span m='133960'>of</span>
  <span m='134110'>the--</span> <span m='135370'>and</span> <span
  m='135790'>really,</span> <span m='136150'>it's</span> <span
  m='136330'>just</span> <span m='136600'>these</span> <span
  m='136930'>points</span> <span m='141180'>that--</span> <span
  m='141940'>so</span> <span m='142540'>the</span> <span m='142720'>data</span>
  <span m='143110'>is</span> <span m='143830'>the</span> <span
  m='143950'>points</span> <span m='144370'>and</span> <span
  m='144490'>the</span> <span m='144640'>edges,</span> <span
  m='145350'>as</span> <span m='145570'>always--</span> <span
  m='145990'>the</span> <span m='146110'>nodes</span> <span
  m='146500'>and</span> <span m='146650'>the</span> <span
  m='146800'>edges.</span> </p><p><span m='147810'>So</span> <span
  m='147970'>the</span> <span m='148060'>problem</span> <span
  m='148450'>is</span> <span m='148570'>to</span> <span m='148690'>find</span>
  <span m='149170'>x</span> <span m='149470'>and</span> <span
  m='149590'>y</span> <span m='150080'>so</span> <span m='150400'>that--</span>
  <span m='151090'>to</span> <span m='151300'>minimize.</span> <span
  m='156860'>So</span> <span m='157120'>it's</span> <span m='157330'>a</span>
  <span m='157390'>distance</span> <span m='159580'>of</span> <span
  m='159880'>points</span> <span m='160530'>ai</span> <span
  m='162130'>from</span> <span m='162430'>x--</span> <span
  m='165100'>maybe</span> <span m='166630'>should</span> <span
  m='166900'>emphasize</span> <span m='167560'>we're</span> <span
  m='167860'>in</span> <span m='168100'>high</span> <span
  m='168310'>dimensions--</span> <span m='169690'>plus</span> <span
  m='171150'>the</span> <span m='171340'>distance</span> <span
  m='172790'>of</span> <span m='173500'>other</span> <span
  m='173800'>points.</span> <span m='174230'>So</span> <span
  m='174460'>the</span> <span m='174640'>ai</span> <span m='175180'>will</span>
  <span m='175390'>be</span> <span m='175870'>these</span> <span
  m='176290'>points--</span> <span m='178060'>these</span> <span
  m='178390'>nodes.</span> <span m='180220'>And</span> <span
  m='180610'>the</span> <span m='180730'>bi</span> <span m='181510'>will</span>
  <span m='181690'>be</span> <span m='181900'>these</span> <span
  m='182260'>nodes,</span> <span m='183520'>plus</span> <span
  m='184490'>the</span> <span m='184630'>sum</span> <span m='185080'>of</span>
  <span m='185340'>bi</span> <span m='185980'>minus</span> <span
  m='186460'>y</span> <span m='188260'>squared.</span> <span
  m='189670'>And</span> <span m='191320'>you</span> <span
  m='191500'>understand</span> <span m='192040'>the</span> <span
  m='192160'>rule</span> <span m='192520'>here--</span> <span
  m='193750'>that</span> <span m='195100'>together</span> <span
  m='196240'>the</span> <span m='197350'>a's</span> <span
  m='199330'>union</span> <span m='199930'>the</span> <span
  m='200020'>b's</span> <span m='201850'>give</span> <span m='202150'>me</span>
  <span m='202660'>all</span> <span m='202970'>nodes.</span> <span
  m='205900'>And</span> <span m='206110'>I</span> <span m='206230'>guess</span>
  <span m='206470'>to</span> <span m='206560'>be</span> <span
  m='206740'>complete,</span> <span m='207730'>the</span> <span
  m='207940'>a's</span> <span m='213890'>intersect</span> <span
  m='214550'>the</span> <span m='214670'>b's</span> <span m='216170'>is</span>
  <span m='216500'>empty.</span> <span m='219340'>Just</span> <span
  m='219620'>what</span> <span m='219800'>you</span> <span
  m='219920'>expect.</span> <span m='221130'>I'm</span> <span
  m='221270'>dividing</span> <span m='221780'>the</span> <span
  m='221930'>a's</span> <span m='222260'>and the</span> <span
  m='222440'>b's</span> <span m='222830'>into</span> <span m='223040'>two</span>
  <span m='223880'>groups.</span> </p><p><span m='225110'>And</span> <span
  m='225680'>I'm</span> <span m='226370'>picking</span> <span
  m='226880'>an</span> <span m='227030'>x</span> <span m='227420'>and</span>
  <span m='227570'>a</span> <span m='227630'>y</span> <span
  m='228050'>sort</span> <span m='228350'>of</span> <span m='228440'>at</span>
  <span m='228590'>the</span> <span m='228740'>center</span> <span
  m='229700'>of</span> <span m='229820'>those</span> <span
  m='230150'>groups,</span> <span m='231050'>so</span> <span
  m='231350'>that</span> <span m='234590'>is</span> <span m='234800'>a</span>
  <span m='234860'>minimum.</span> <span m='235860'>So</span> <span
  m='236000'>I</span> <span m='236150'>want</span> <span m='236330'>to</span>
  <span m='236420'>minimize.</span> <span m='239690'>And</span> <span
  m='240200'>also,</span> <span m='240650'>I</span> <span
  m='240770'>probably</span> <span m='241160'>want</span> <span
  m='241400'>to</span> <span m='241520'>impose</span> <span
  m='242000'>some</span> <span m='242330'>condition</span> <span
  m='243380'>that</span> <span m='243790'>the</span> <span
  m='244310'>number</span> <span m='244760'>of</span> <span
  m='244940'>a's</span> <span m='245450'>is</span> <span
  m='245630'>reasonably</span> <span m='246200'>close</span> <span
  m='246590'>to</span> <span m='246710'>the</span> <span
  m='246830'>number</span> <span m='247160'>of</span> <span
  m='247250'>b's.</span> <span m='248060'>In</span> <span
  m='248210'>other</span> <span m='248330'>words,</span> <span
  m='248970'>I</span> <span m='248990'>don't</span> <span m='249260'>want</span>
  <span m='251330'>just</span> <span m='251900'>that</span> <span
  m='252230'>to</span> <span m='252380'>be</span> <span m='252680'>the</span>
  <span m='252890'>a,</span> <span m='253295'>and</span> <span
  m='253700'>all</span> <span m='253880'>the</span> <span m='253970'>rest</span>
  <span m='254210'>to</span> <span m='254330'>be</span> <span
  m='254480'>the</span> <span m='254600'>b's.</span> <span
  m='255740'>That</span> <span m='255950'>would</span> <span
  m='256160'>be</span> <span m='256459'>not</span> <span m='256760'>a</span>
  <span m='256820'>satisfactory</span> <span m='259800'>clustering.</span> <span
  m='261140'>I'm</span> <span m='261260'>looking</span> <span
  m='261589'>for</span> <span m='262370'>clusters</span> <span
  m='263000'>that</span> <span m='263180'>are</span> <span
  m='264080'>good</span> <span m='264320'>sized</span> <span
  m='264710'>clusters.</span> <span m='266400'>So</span> <span
  m='267030'>minimize</span> <span m='267630'>that.</span> <span
  m='267990'>OK.</span> </p><p><span m='268980'>So</span> <span
  m='269910'>there</span> <span m='270150'>are</span> <span m='270180'>a</span>
  <span m='270210'>lot</span> <span m='270450'>of</span> <span
  m='270510'>different</span> <span m='270870'>algorithms</span> <span
  m='271500'>to</span> <span m='271620'>do</span> <span m='271860'>it.</span>
  <span m='274710'>Some</span> <span m='275040'>are</span> <span
  m='276270'>more</span> <span m='277380'>directly</span> <span
  m='279420'>attacking</span> <span m='279960'>this</span> <span
  m='280140'>problem.</span> <span m='281010'>Others</span> <span
  m='281520'>use</span> <span m='283200'>matrices</span> <span
  m='284100'>that</span> <span m='284250'>we</span> <span
  m='284400'>associate</span> <span m='285090'>with</span> <span
  m='285330'>the</span> <span m='285390'>graph.</span> <span
  m='286470'>So</span> <span m='286710'>let</span> <span m='286890'>me</span>
  <span m='287040'>tell</span> <span m='287280'>you</span> <span
  m='287400'>about</span> <span m='287670'>two</span> <span m='287940'>or</span>
  <span m='288030'>three</span> <span m='288300'>of</span> <span
  m='288390'>those</span> <span m='288660'>algorithms.</span> <span
  m='289390'>And</span> <span m='290010'>if</span> <span
  m='290250'>you've</span> <span m='291150'>seen--</span> <span
  m='291660'>studied--</span> <span m='292320'>had</span> <span
  m='292530'>a</span> <span m='292590'>course</span> <span m='293010'>in</span>
  <span m='293160'>graph</span> <span m='293550'>theory,</span> <span
  m='293880'>this--</span> <span m='294480'>you</span> <span
  m='294600'>may</span> <span m='294810'>already</span> <span
  m='295110'>have</span> <span m='295230'>seen</span> <span
  m='295530'>this</span> <span m='295740'>problem.</span> <span
  m='296710'>First</span> <span m='296910'>question</span> <span
  m='297960'>would</span> <span m='298170'>be,</span> <span
  m='300420'>suppose</span> <span m='300900'>I</span> <span
  m='301080'>decide</span> <span m='302430'>these</span> <span
  m='302820'>are</span> <span m='302910'>the</span> <span m='303120'>a's,</span>
  <span m='303600'>and</span> <span m='303720'>those</span> <span
  m='304020'>are</span> <span m='304080'>the</span> <span
  m='304200'>b's--</span> <span m='304590'>or</span> <span
  m='304740'>some</span> <span m='304980'>other</span> <span
  m='305340'>decision.</span> <span m='306210'>Yeah,</span> <span
  m='306540'>probably</span> <span m='306960'>some</span> <span
  m='307230'>other</span> <span m='307470'>decision.</span> <span
  m='308060'>I</span> <span m='308210'>don't</span> <span m='308340'>want</span>
  <span m='308490'>to</span> <span m='309270'>solve</span> <span
  m='309600'>the</span> <span m='309690'>problem</span> <span
  m='310170'>before</span> <span m='310500'>I</span> <span
  m='310620'>even</span> <span m='310890'>start.</span> <span
  m='311940'>So</span> <span m='312360'>some</span> <span m='312660'>a's</span>
  <span m='313140'>and</span> <span m='313260'>some</span> <span
  m='313500'>b's.</span> </p><p><span m='314640'>What</span> <span
  m='314820'>would</span> <span m='315060'>be</span> <span m='315240'>the</span>
  <span m='315360'>best</span> <span m='315690'>choice</span> <span
  m='316080'>of</span> <span m='316200'>the</span> <span m='316350'>x</span>
  <span m='316770'>once</span> <span m='317070'>you've</span> <span
  m='317280'>decided</span> <span m='317970'>on</span> <span
  m='318090'>the</span> <span m='318270'>a's?</span> <span m='319110'>And</span>
  <span m='319230'>what</span> <span m='319410'>would</span> <span
  m='319560'>be</span> <span m='319710'>the</span> <span m='319800'>best</span>
  <span m='320100'>choice</span> <span m='320460'>of</span> <span
  m='320580'>the</span> <span m='320670'>y</span> <span m='321480'>once</span>
  <span m='321750'>you've</span> <span m='321900'>decided</span> <span
  m='322530'>on</span> <span m='322680'>the</span> <span m='322770'>b's?</span>
  <span m='323820'>So</span> <span m='325980'>we</span> <span
  m='326130'>can</span> <span m='326310'>answer</span> <span
  m='326670'>that</span> <span m='326910'>question</span> <span
  m='328350'>if</span> <span m='328560'>we</span> <span m='328710'>knew</span>
  <span m='331000'>the</span> <span m='331410'>two</span> <span
  m='331620'>groups.</span> <span m='333290'>We</span> <span
  m='333500'>could</span> <span m='334550'>see</span> <span
  m='334910'>where</span> <span m='335810'>they</span> <span
  m='335990'>should</span> <span m='336230'>be</span> <span
  m='336590'>centered,</span> <span m='337000'>with</span> <span
  m='337410'>the</span> <span m='337520'>first</span> <span
  m='337880'>group</span> <span m='338330'>centered</span> <span
  m='339050'>at</span> <span m='339260'>x,</span> <span m='340010'>the</span>
  <span m='340280'>second</span> <span m='340640'>group</span> <span
  m='340910'>centered</span> <span m='341360'>at</span> <span
  m='341450'>y,</span> <span m='341840'>and</span> <span m='341990'>what</span>
  <span m='342230'>does</span> <span m='342380'>centering</span> <span
  m='343320'>mean?</span> <span m='343850'>So</span> <span
  m='344090'>let's</span> <span m='344360'>just</span> <span
  m='344600'>say--</span> <span m='348325'>so</span> <span m='348810'>I</span>
  <span m='348870'>think</span> <span m='349140'>what</span> <span
  m='349320'>I'm</span> <span m='350130'>saying</span> <span
  m='350490'>here</span> <span m='350760'>is--</span> <span
  m='355030'>let</span> <span m='355160'>me</span> <span m='356060'>bring</span>
  <span m='356310'>that</span> <span m='356450'>down</span> <span
  m='356750'>a</span> <span m='356810'>little.</span> </p><p><span
  m='357800'>So</span> <span m='358580'>given</span> <span m='358910'>the</span>
  <span m='359090'>a's--</span> <span m='361250'>the</span> <span
  m='361430'>a's--</span> <span m='362650'>this</span> <span
  m='362870'>is</span> <span m='363440'>a1</span> <span m='364190'>up</span>
  <span m='364370'>to,</span> <span m='365000'>say,</span> <span
  m='365390'>ak.</span> <span m='367310'>What</span> <span m='367520'>is</span>
  <span m='367700'>the</span> <span m='367820'>best</span> <span
  m='372830'>x</span> <span m='375860'>just</span> <span m='376190'>to</span>
  <span m='376910'>make</span> <span m='377240'>that</span> <span
  m='378380'>part</span> <span m='378820'>right?</span> <span
  m='379190'>And</span> <span m='379340'>the</span> <span
  m='379490'>answer</span> <span m='379910'>is,</span> <span
  m='380270'>to</span> <span m='380610'>do</span> <span m='380840'>you</span>
  <span m='380930'>know,</span> <span m='381230'>geometrically,</span> <span
  m='382160'>what</span> <span m='382430'>x</span> <span
  m='382700'>should</span> <span m='382940'>be</span> <span
  m='383240'>here?</span> <span m='384230'>X</span> <span m='384590'>is</span>
  <span m='384890'>the--</span> <span m='386960'>so</span> <span
  m='387140'>if</span> <span m='387260'>I</span> <span m='387350'>have</span>
  <span m='387500'>a</span> <span m='387560'>bunch</span> <span
  m='387830'>of</span> <span m='387890'>points,</span> <span
  m='388430'>and</span> <span m='388580'>I'm</span> <span
  m='388760'>looking</span> <span m='389210'>for</span> <span
  m='390080'>the</span> <span m='390200'>middle</span> <span
  m='390560'>of</span> <span m='390650'>those</span> <span
  m='390980'>points--</span> <span m='392660'>the</span> <span
  m='392860'>point</span> <span m='393210'>x--</span> <span m='394140'>a</span>
  <span m='394290'>good</span> <span m='394530'>point</span> <span
  m='394920'>x</span> <span m='395220'>to</span> <span m='395370'>say,</span>
  <span m='395860'>OK,</span> <span m='396130'>that's</span> <span
  m='396350'>the</span> <span m='396450'>middle.</span> <span
  m='396870'>It'll</span> <span m='397080'>make</span> <span
  m='397410'>the</span> <span m='398040'>sum</span> <span m='398340'>of</span>
  <span m='398460'>the</span> <span m='398580'>distances,</span> <span
  m='400200'>I</span> <span m='400290'>think,</span> <span
  m='400620'>squared--</span> <span m='401190'>I</span> <span
  m='401250'>hope</span> <span m='401760'>I'm</span> <span
  m='401910'>right</span> <span m='402120'>about</span> <span
  m='402360'>that--</span> <span m='403740'>a</span> <span
  m='403830'>minimum.</span> <span m='405530'>What</span> <span
  m='406470'>is</span> <span m='406650'>x?</span> <span m='408350'>It</span>
  <span m='408530'>is</span> <span m='409400'>the--</span> </p><p><span
  m='410242'>AUDIENCE:</span> <span m='410452'>[INAUDIBLE].</span> </p><p><span
  m='411930'>GILBERT STRANG:</span> <span m='412177'>Centroid.</span> <span
  m='412920'>Centroid</span> <span m='413620'>is</span> <span
  m='413760'>the</span> <span m='413880'>word.</span> <span m='414150'>X</span>
  <span m='414450'>is</span> <span m='414630'>the</span> <span
  m='415590'>centroid</span> <span m='420200'>of</span> <span
  m='421020'>the</span> <span m='421170'>a's.</span> <span m='422700'>And</span>
  <span m='422850'>what</span> <span m='423120'>is</span> <span
  m='423360'>the</span> <span m='423960'>centroid?</span> <span
  m='425490'>Let's</span> <span m='425700'>see.</span> <span
  m='426600'>Oh,</span> <span m='426840'>maybe</span> <span m='427170'>I</span>
  <span m='427260'>don't</span> <span m='427410'>know</span> <span
  m='427470'>if</span> <span m='427620'>x</span> <span m='427890'>and</span>
  <span m='428010'>y</span> <span m='428340'>were</span> <span
  m='428490'>a</span> <span m='428520'>good</span> <span
  m='428730'>choice,</span> <span m='429120'>but</span> <span
  m='430980'>let</span> <span m='431100'>me</span> <span m='431220'>see</span>
  <span m='431460'>what--</span> <span m='435140'>I</span> <span
  m='435260'>guess,</span> <span m='435890'>it's</span> <span
  m='436100'>the</span> <span m='436280'>average</span> <span
  m='436780'>a.</span> <span m='437210'>It's</span> <span m='437450'>the</span>
  <span m='437540'>sum</span> <span m='437900'>of</span> <span
  m='438050'>the</span> <span m='438200'>a's--</span> <span m='441098'>of</span>
  <span m='442070'>these</span> <span m='442400'>a's.</span> <span
  m='442820'>Those</span> <span m='443060'>are</span> <span
  m='444470'>vectors,</span> <span m='445100'>of</span> <span
  m='445190'>course,</span> <span m='446450'>divided</span> <span
  m='446930'>by</span> <span m='447140'>the</span> <span
  m='447260'>number</span> <span m='447650'>of</span> <span
  m='447800'>a's.</span> <span m='452710'>I</span> <span
  m='452830'>think.</span> <span m='453340'>Actually,</span> <span
  m='453820'>I</span> <span m='453940'>was</span> <span m='454060'>just</span>
  <span m='454570'>quickly</span> <span m='455380'>reviewing</span> <span
  m='456010'>this</span> <span m='456250'>morning,</span> <span
  m='456670'>so</span> <span m='456940'>I'm</span> <span m='457690'>not</span>
  <span m='459580'>totally</span> <span m='460060'>on</span> <span
  m='460210'>top</span> <span m='460510'>of</span> <span m='460630'>this</span>
  <span m='461710'>centroid.</span> </p><p><span m='462350'>What</span> <span
  m='462580'>I'm</span> <span m='462730'>going</span> <span m='462880'>to</span>
  <span m='463480'>talk--</span> <span m='464000'>the</span> <span
  m='464200'>algorithm</span> <span m='464710'>that</span> <span
  m='464830'>I'm</span> <span m='465010'>going</span> <span m='465130'>to</span>
  <span m='465220'>talk</span> <span m='465520'>about</span> <span
  m='465850'>is</span> <span m='466150'>the</span> <span m='466660'>k--</span>
  <span m='467200'>well,</span> <span m='467590'>the</span> <span
  m='468010'>k-means,</span> <span m='469000'>it's</span> <span
  m='469210'>always</span> <span m='469600'>called.</span> <span
  m='471970'>And</span> <span m='472240'>here</span> <span m='473470'>it</span>
  <span m='473620'>will</span> <span m='473770'>be</span> <span
  m='474130'>the--</span> <span m='474430'>k</span> <span m='474760'>will</span>
  <span m='474940'>be</span> <span m='475120'>2.</span> <span
  m='478840'>I</span> <span m='478960'>just</span> <span m='479260'>have</span>
  <span m='479470'>two--</span> <span m='481120'>partitioning</span> <span
  m='481810'>into</span> <span m='482050'>two</span> <span
  m='482920'>sets,</span> <span m='483340'>a's</span> <span
  m='483640'>and</span> <span m='483790'>b's,</span> <span m='484120'>so</span>
  <span m='484450'>I</span> <span m='484540'>just--</span> <span
  m='484810'>k</span> <span m='485080'>is</span> <span m='485230'>just</span>
  <span m='485470'>2.</span> <span m='486280'>OK.</span> <span
  m='486640'>What's</span> <span m='486910'>the</span> <span
  m='487060'>algorithm?</span> <span m='490050'>Well,</span> <span
  m='490710'>if</span> <span m='492960'>I've</span> <span
  m='493140'>chosen</span> <span m='493770'>a</span> <span
  m='494640'>partition--</span> <span m='495420'>the</span> <span
  m='495600'>a's</span> <span m='495900'>and</span> <span m='496080'>b's</span>
  <span m='496500'>have</span> <span m='496620'>separated</span> <span
  m='497220'>them--</span> <span m='497880'>then</span> <span
  m='498660'>that</span> <span m='498900'>tells</span> <span
  m='499260'>me</span> <span m='499530'>what</span> <span m='499740'>the</span>
  <span m='499950'>x</span> <span m='500220'>and</span> <span
  m='500340'>the</span> <span m='500430'>y</span> <span m='500730'>should</span>
  <span m='500970'>be.</span> <span m='502800'>But,</span> <span
  m='504630'>now</span> <span m='504900'>what</span> <span m='505080'>do</span>
  <span m='505200'>I</span> <span m='505290'>do</span> <span
  m='505500'>next?</span> <span m='506140'>So</span> <span m='506310'>is</span>
  <span m='506460'>this</span> <span m='506670'>going</span> <span
  m='506810'>to</span> <span m='506940'>be</span> <span m='507060'>a</span>
  <span m='507150'>sort</span> <span m='507390'>of</span> <span
  m='507480'>an</span> <span m='507600'>alternating</span> <span
  m='508410'>partition?</span> </p><p><span m='509640'>Now</span> <span
  m='510000'>I</span> <span m='510690'>take</span> <span m='510990'>those</span>
  <span m='511230'>two</span> <span m='511634'>centroids.</span> <span
  m='512039'>So</span> <span m='512850'>step</span> <span m='513210'>one</span>
  <span m='513600'>is</span> <span m='515289'>for</span> <span
  m='515780'>given</span> <span m='518640'>a's</span> <span
  m='519179'>and</span> <span m='519330'>b's,</span> <span
  m='521370'>find</span> <span m='523090'>the</span> <span
  m='523289'>centroids</span> <span m='527940'>x</span> <span
  m='528390'>and</span> <span m='528570'>y.</span> <span m='529770'>And</span>
  <span m='529950'>that's</span> <span m='531010'>elementary.</span> <span
  m='532440'>Then</span> <span m='532710'>the</span> <span
  m='532830'>second</span> <span m='533250'>step</span> <span
  m='533670'>is,</span> <span m='535110'>given</span> <span
  m='537040'>the</span> <span m='537730'>centroids,</span> <span
  m='541590'>x</span> <span m='541860'>and</span> <span m='541980'>y--</span>
  <span m='543510'>given</span> <span m='543780'>those</span> <span
  m='544380'>positions--</span> <span m='545070'>given</span> <span
  m='545400'>x</span> <span m='545640'>and</span> <span m='545730'>y--</span>
  <span m='546890'>they</span> <span m='547020'>won't</span> <span
  m='547260'>be</span> <span m='547470'>centroids</span> <span
  m='548610'>when</span> <span m='549060'>you</span> <span m='549150'>see</span>
  <span m='549330'>what</span> <span m='549510'>happened.</span> <span
  m='550000'>Given</span> <span m='550260'>x</span> <span m='550500'>and</span>
  <span m='550620'>y,</span> <span m='552820'>redo--</span> <span
  m='558750'>form</span> <span m='559050'>the</span> <span
  m='559140'>best</span> <span m='561990'>partition--</span> <span
  m='563200'>best</span> <span m='563490'>clusters.</span> </p><p><span
  m='569840'>So</span> <span m='570020'>step</span> <span m='570320'>one,</span>
  <span m='570920'>we</span> <span m='572390'>had</span> <span
  m='572570'>a</span> <span m='573080'>guess</span> <span m='573440'>at</span>
  <span m='573590'>what</span> <span m='573770'>the</span> <span
  m='573860'>best</span> <span m='574130'>clusters</span> <span
  m='574670'>were.</span> <span m='576230'>And</span> <span m='576410'>we</span>
  <span m='576560'>found</span> <span m='576830'>they're</span> <span
  m='577010'>centroids.</span> <span m='577820'>Now,</span> <span
  m='578900'>we</span> <span m='579050'>start</span> <span
  m='579320'>with</span> <span m='579450'>the</span> <span
  m='579500'>centroids,</span> <span m='580460'>and</span> <span
  m='580610'>we</span> <span m='580790'>form</span> <span m='581690'>new</span>
  <span m='581900'>clusters</span> <span m='582500'>again.</span> <span
  m='583250'>And</span> <span m='583430'>if</span> <span m='583580'>these</span>
  <span m='583910'>clusters</span> <span m='584480'>are</span> <span
  m='584570'>the</span> <span m='584720'>same</span> <span m='585170'>as</span>
  <span m='586010'>the</span> <span m='586100'>ones</span> <span
  m='586370'>we</span> <span m='586520'>started</span> <span
  m='586970'>with,</span> <span m='587660'>then</span> <span
  m='587870'>the</span> <span m='588020'>algorithm</span> <span
  m='588400'>is</span> <span m='588570'>converged.</span> <span
  m='590240'>But</span> <span m='590540'>probably they</span> <span
  m='590930'>won't</span> <span m='591230'>be--</span> <span
  m='592070'>these</span> <span m='592370'>clusters.</span> <span
  m='593070'>So</span> <span m='593660'>you'll</span> <span
  m='593900'>have</span> <span m='594050'>to</span> <span m='594170'>tell</span>
  <span m='594410'>me</span> <span m='594620'>what</span> <span
  m='595640'>I</span> <span m='595730'>mean</span> <span m='596060'>by</span>
  <span m='596270'>the</span> <span m='596390'>best</span> <span
  m='596720'>clusters.</span> <span m='597005'>If</span> <span
  m='598310'>I've</span> <span m='598490'>got</span> <span m='598700'>the</span>
  <span m='598850'>two</span> <span m='599090'>points,</span> <span
  m='599700'>x</span> <span m='599840'>and</span> <span m='599960'>y,</span>
  <span m='600800'>I</span> <span m='600920'>want</span> <span
  m='601190'>the</span> <span m='601330'>points--</span> <span
  m='602390'>I</span> <span m='602450'>want</span> <span m='602600'>to</span>
  <span m='602690'>separate</span> <span m='603290'>all</span> <span
  m='603470'>the</span> <span m='603590'>points</span> <span
  m='603980'>that</span> <span m='604100'>cluster</span> <span
  m='604580'>around</span> <span m='604970'>x</span> <span m='605300'>to</span>
  <span m='605480'>the</span> <span m='605600'>ones</span> <span
  m='605960'>that</span> <span m='606290'>cluster</span> <span
  m='606710'>around</span> <span m='607040'>y.</span> </p><p><span
  m='608270'>And</span> <span m='608570'>then,</span> <span
  m='609920'>they're</span> <span m='610070'>probably</span> <span
  m='610490'>different</span> <span m='611030'>from</span> <span
  m='611330'>my</span> <span m='611720'>original</span> <span
  m='612260'>start.</span> <span m='613160'>So</span> <span
  m='613370'>now</span> <span m='613640'>I've</span> <span m='613790'>got</span>
  <span m='614060'>new--</span> <span m='614990'>now</span> <span
  m='615200'>I</span> <span m='615320'>repeat</span> <span
  m='616130'>step</span> <span m='616460'>one.</span> <span
  m='618360'>But</span> <span m='618580'>let's</span> <span
  m='618820'>just</span> <span m='619030'>think,</span> <span
  m='619540'>how</span> <span m='619750'>do</span> <span m='619870'>I</span>
  <span m='619960'>form</span> <span m='620260'>the</span> <span
  m='620350'>best</span> <span m='620620'>clusters?</span> <span
  m='623550'>Well,</span> <span m='624060'>I</span> <span m='624180'>take</span>
  <span m='624450'>a</span> <span m='624510'>point</span> <span
  m='624900'>and</span> <span m='625050'>I</span> <span m='625140'>have</span>
  <span m='625320'>to</span> <span m='625440'>decide,</span> <span
  m='627250'>does</span> <span m='627450'>it</span> <span m='627570'>go</span>
  <span m='627840'>with</span> <span m='628470'>x,</span> <span
  m='628830'>or</span> <span m='628950'>does</span> <span m='629190'>it</span>
  <span m='629280'>go</span> <span m='629460'>within</span> <span
  m='629970'>the</span> <span m='630120'>x</span> <span
  m='630390'>cluster,</span> <span m='630900'>or</span> <span
  m='631020'>does</span> <span m='631320'>it</span> <span m='631410'>go</span>
  <span m='631620'>in</span> <span m='631740'>the</span> <span
  m='631830'>cluster</span> <span m='632340'>around</span> <span
  m='632730'>y?</span> <span m='633390'>So</span> <span m='633600'>how</span>
  <span m='633810'>do</span> <span m='633990'>I</span> <span
  m='634080'>decide</span> <span m='634560'>that?</span> <span
  m='636870'>Just</span> <span m='637650'>whichever</span> <span
  m='638130'>one</span> <span m='638280'>it's</span> <span
  m='638460'>closer</span> <span m='638880'>to.</span> <span
  m='639540'>So</span> <span m='639750'>each</span> <span
  m='641880'>point</span> <span m='645900'>goes</span> <span
  m='646290'>with</span> <span m='647770'>each</span> <span
  m='648230'>node.</span> <span m='648540'>You</span> <span
  m='648660'>should--</span> <span m='649730'>I</span> <span
  m='649900'>could</span> <span m='650070'>say,</span> <span
  m='650310'>each</span> <span m='650580'>node</span> <span
  m='651720'>goes</span> <span m='652200'>with</span> <span
  m='653880'>the</span> <span m='656790'>closer</span> <span
  m='660090'>of</span> <span m='661140'>x</span> <span m='661440'>and</span>
  <span m='661590'>y.</span> </p><p><span m='665250'>So</span> <span
  m='665580'>points</span> <span m='666030'>that</span> <span
  m='667410'>should</span> <span m='667680'>have</span> <span
  m='668107'>been--</span> <span m='668961'>that</span> <span
  m='669390'>are</span> <span m='669480'>closer</span> <span
  m='669930'>to</span> <span m='670080'>x--</span> <span m='670380'>now</span>
  <span m='670590'>we're</span> <span m='670680'>going</span> <span
  m='670790'>to</span> <span m='670920'>put</span> <span m='671130'>them</span>
  <span m='671340'>in</span> <span m='671430'>the</span> <span
  m='671520'>cluster</span> <span m='672030'>around</span> <span
  m='672450'>x.</span> <span m='673430'>And</span> <span m='674400'>does</span>
  <span m='674670'>that</span> <span m='674880'>solve</span> <span
  m='675180'>the</span> <span m='675300'>problem?</span> <span
  m='676890'>No,</span> <span m='677400'>because--</span> <span
  m='677970'>well,</span> <span m='678630'>it</span> <span
  m='678780'>might,</span> <span m='679180'>but</span> <span
  m='679410'>it</span> <span m='679470'>might</span> <span
  m='679740'>not.</span> <span m='684430'>We'd</span> <span
  m='684970'>have</span> <span m='685150'>to</span> <span m='685330'>come</span>
  <span m='685570'>back</span> <span m='685840'>to</span> <span
  m='685990'>step</span> <span m='686320'>one.</span> <span
  m='687880'>We've</span> <span m='688090'>now</span> <span
  m='688390'>changed</span> <span m='689030'>the</span> <span
  m='689110'>clusters.</span> <span m='689800'>They'll</span> <span
  m='690010'>have</span> <span m='690310'>different</span> <span
  m='691270'>centroids.</span> <span m='692620'>So</span> <span
  m='692800'>we</span> <span m='692950'>repeat</span> <span
  m='693490'>step</span> <span m='693820'>one--</span> <span
  m='694300'>find</span> <span m='694630'>the</span> <span
  m='694740'>centroids</span> <span m='695410'>for</span> <span
  m='695590'>the</span> <span m='695770'>two</span> <span m='696040'>new</span>
  <span m='696280'>clusters.</span> <span m='697150'>Then</span> <span
  m='697390'>we</span> <span m='697540'>come</span> <span m='697780'>to</span>
  <span m='697900'>step</span> <span m='698230'>two.</span> </p><p><span
  m='698980'>Find</span> <span m='699370'>the</span> <span
  m='699790'>ones</span> <span m='700210'>that</span> <span
  m='700360'>should</span> <span m='700570'>go</span> <span
  m='700840'>with</span> <span m='701180'>the</span> <span m='701740'>two</span>
  <span m='702040'>centroids,</span> <span m='703210'>and</span> <span
  m='703870'>back</span> <span m='704200'>and</span> <span
  m='704320'>forth.</span> <span m='704680'>I</span> <span
  m='704860'>don't</span> <span m='705190'>know.</span> <span
  m='706120'>I</span> <span m='706180'>don't</span> <span
  m='706390'>think</span> <span m='706840'>there's</span> <span
  m='707170'>a</span> <span m='707320'>nice</span> <span
  m='707650'>theory</span> <span m='708160'>of</span> <span
  m='708820'>convergence,</span> <span m='709750'>or</span> <span
  m='709900'>rate</span> <span m='710290'>of</span> <span
  m='710410'>convergence--</span> <span m='710845'>all</span> <span
  m='711280'>the</span> <span m='711550'>questions</span> <span
  m='712160'>that</span> <span m='712810'>this</span> <span
  m='713080'>course</span> <span m='713460'>is</span> <span
  m='713830'>always</span> <span m='714250'>asking.</span> <span
  m='715150'>But</span> <span m='715450'>it's</span> <span m='715950'>a</span>
  <span m='715990'>very</span> <span m='718060'>popular</span> <span
  m='718660'>algorithm,</span> <span m='719290'>k-means.</span> <span
  m='721960'>k</span> <span m='722260'>would</span> <span m='722470'>be</span>
  <span m='722650'>to</span> <span m='722770'>have</span> <span
  m='723190'>k</span> <span m='723460'>clusters.</span> <span
  m='724924'>OK.</span> <span m='726760'>So</span> <span
  m='726940'>that's</span> <span m='727240'>a--</span> <span
  m='728170'>I'm</span> <span m='728350'>not</span> <span
  m='728530'>going</span> <span m='728670'>to</span> <span
  m='728860'>discuss</span> <span m='729460'>the--</span> <span
  m='730210'>I'd</span> <span m='730330'>rather</span> <span
  m='730630'>discuss</span> <span m='731020'>some</span> <span
  m='731260'>other</span> <span m='731500'>ways</span> <span
  m='731860'>to</span> <span m='732010'>do</span> <span m='732250'>this,</span>
  <span m='732910'>to</span> <span m='733060'>solve</span> <span
  m='733420'>this</span> <span m='733660'>problem.</span> <span
  m='734410'>But</span> <span m='734620'>that's</span> <span
  m='735070'>one</span> <span m='735670'>sort</span> <span m='735940'>of</span>
  <span m='737290'>hack</span> <span m='737770'>that</span> <span
  m='738010'>works</span> <span m='738880'>quite</span> <span
  m='739150'>well.</span> <span m='740850'>OK.</span> </p><p><span
  m='741330'>So</span> <span m='742500'>second</span> <span
  m='742950'>approach</span> <span m='743580'>is</span> <span
  m='744630'>what</span> <span m='745650'>is</span> <span
  m='745710'>coming</span> <span m='745980'>next.</span> <span
  m='747000'>Second</span> <span m='749430'>solution</span> <span
  m='750060'>method--</span> <span m='758750'>and</span> <span
  m='758960'>it's</span> <span m='759140'>called</span> <span
  m='759500'>the</span> <span m='760550'>spectral</span> <span
  m='764390'>clustering.</span> <span m='769850'>That's</span> <span
  m='770120'>the</span> <span m='770240'>name</span> <span m='770630'>of</span>
  <span m='770750'>the</span> <span m='770870'>method.</span> <span
  m='772400'>And</span> <span m='773390'>before</span> <span m='773780'>I</span>
  <span m='773900'>write</span> <span m='774170'>down</span> <span
  m='774410'>what</span> <span m='774740'>you</span> <span m='774830'>do,</span>
  <span m='776330'>what</span> <span m='776510'>does</span> <span
  m='776700'>the</span> <span m='776780'>word</span> <span
  m='777050'>spectral</span> <span m='777680'>mean?</span> <span
  m='778580'>You</span> <span m='778740'>see</span> <span
  m='779110'>spectral</span> <span m='779463'>graph</span> <span
  m='780170'>theory,</span> <span m='780740'>spectral</span> <span
  m='781340'>clustering.</span> <span m='782750'>And</span> <span
  m='783050'>in</span> <span m='783230'>other</span> <span
  m='784220'>parts</span> <span m='784580'>of</span> <span
  m='784670'>mathematics,</span> <span m='785390'>you</span> <span
  m='785510'>see</span> <span m='785750'>that--</span> <span
  m='786320'>you</span> <span m='786770'>see</span> <span
  m='787010'>spectral</span> <span m='787580'>theorem.</span> <span
  m='788900'>I</span> <span m='788990'>gave</span> <span m='789320'>you</span>
  <span m='789500'>the</span> <span m='789620'>most--</span> <span
  m='790430'>and</span> <span m='790670'>I</span> <span
  m='790790'>described</span> <span m='791300'>it</span> <span
  m='791450'>as</span> <span m='791630'>the</span> <span m='791720'>most</span>
  <span m='792080'>important--</span> <span m='793070'>perhaps--</span> <span
  m='795070'>theorem</span> <span m='795490'>in</span> <span
  m='795990'>linear</span> <span m='796330'>algebra--</span> <span
  m='796700'>at</span> <span m='796770'>least</span> <span m='796990'>one</span>
  <span m='797200'>of</span> <span m='797260'>the</span> <span
  m='797380'>top</span> <span m='797710'>three.</span> <span
  m='801940'>So</span> <span m='802260'>I'll</span> <span
  m='802390'>write</span> <span m='802660'>it</span> <span
  m='802780'>over</span> <span m='802960'>here,</span> <span
  m='803200'>because</span> <span m='803470'>it's</span> <span
  m='803650'>not--</span> <span m='805030'>it</span> <span
  m='805150'>doesn't--</span> <span m='806290'>this</span> <span
  m='806500'>is--</span> <span m='807760'>it's</span> <span
  m='808000'>the</span> <span m='808090'>same</span> <span
  m='808450'>word,</span> <span m='808780'>spectral.</span> </p><p><span
  m='814530'>Well,</span> <span m='814860'>let</span> <span m='815010'>me</span>
  <span m='815190'>ask</span> <span m='815520'>that</span> <span
  m='815670'>question</span> <span m='816150'>again?</span> <span
  m='816870'>What's</span> <span m='817080'>that</span> <span
  m='817230'>word</span> <span m='817440'>spectral</span> <span
  m='818010'>about?</span> <span m='819560'>What</span> <span
  m='819740'>does</span> <span m='819920'>that</span> <span
  m='820100'>mean?</span> <span m='820620'>That</span> <span
  m='820700'>means</span> <span m='821300'>that</span> <span
  m='821450'>if</span> <span m='821600'>I</span> <span m='821720'>have</span>
  <span m='821870'>a</span> <span m='821930'>matrix,</span> <span
  m='822560'>and</span> <span m='822680'>I</span> <span m='823530'>want</span>
  <span m='824010'>to</span> <span m='824750'>talk</span> <span
  m='825080'>about</span> <span m='825380'>its</span> <span
  m='825540'>spectrum,</span> <span m='827210'>what</span> <span
  m='827450'>is</span> <span m='827600'>the</span> <span
  m='827720'>spectrum</span> <span m='828440'>of</span> <span
  m='828560'>the</span> <span m='828650'>matrix?</span> <span
  m='830000'>It</span> <span m='830210'>is</span> <span m='830540'>the</span>
  <span m='832460'>eigenvalues.</span> <span m='834190'>So</span> <span
  m='834380'>spectral</span> <span m='834920'>theory,</span> <span
  m='835790'>spectral</span> <span m='836270'>clustering</span> <span
  m='836960'>is</span> <span m='838160'>using</span> <span m='838790'>the</span>
  <span m='838940'>eigenvalues</span> <span m='839870'>of</span> <span
  m='840080'>some</span> <span m='840770'>matrix.</span> <span
  m='841760'>That's</span> <span m='842030'>what</span> <span
  m='842210'>that</span> <span m='843230'>spectral</span> <span
  m='843830'>is</span> <span m='843950'>telling</span> <span
  m='844340'>me.</span> <span m='845050'>Yeah.</span> <span m='845390'>So</span>
  <span m='845600'>the</span> <span m='845750'>spectral</span> <span
  m='846170'>theorem,</span> <span m='846530'>of</span> <span
  m='846650'>course,</span> <span m='847550'>is</span> <span
  m='847970'>that</span> <span m='848210'>for</span> <span m='848450'>a</span>
  <span m='848510'>symmetric</span> <span m='851060'>matrix</span> <span
  m='851660'>S,</span> <span m='853160'>the</span> <span
  m='854450'>eigenvalues</span> <span m='855230'>are</span> <span
  m='855320'>real,</span> <span m='856580'>and</span> <span
  m='856940'>the</span> <span m='858140'>eigenvectors</span> <span
  m='859220'>are</span> <span m='859610'>orthogonal.</span> </p><p><span
  m='861710'>And</span> <span m='863460'>don't</span> <span
  m='863760'>forget</span> <span m='864240'>what</span> <span
  m='864580'>the</span> <span m='864720'>real,</span> <span
  m='868100'>full</span> <span m='868460'>statement</span> <span
  m='869000'>is</span> <span m='869300'>here,</span> <span
  m='870210'>because</span> <span m='870590'>there</span> <span
  m='870770'>could</span> <span m='871040'>be</span> <span
  m='871250'>repeated</span> <span m='872720'>real</span> <span
  m='873050'>eigenvalues.</span> <span m='874730'>And</span> <span
  m='874940'>what</span> <span m='875180'>does</span> <span
  m='875400'>the</span> <span m='875480'>spectral</span> <span
  m='875960'>theorem</span> <span m='876320'>tell</span> <span
  m='876590'>me</span> <span m='877400'>for</span> <span
  m='877610'>symmetric</span> <span m='878240'>matrices,</span> <span
  m='879740'>if</span> <span m='881090'>lambda</span> <span
  m='881720'>equals</span> <span m='882440'>5</span> <span m='883280'>is</span>
  <span m='883520'>repeated</span> <span m='884120'>four</span> <span
  m='884450'>times--</span> <span m='885770'>if</span> <span
  m='886280'>it's</span> <span m='886460'>a</span> <span m='886570'>four</span>
  <span m='887000'>times</span> <span m='889340'>solution</span> <span
  m='890060'>of</span> <span m='890270'>the</span> <span
  m='892410'>equation</span> <span m='893140'>that</span> <span
  m='893190'>gives</span> <span m='893520'>eigenvalues,</span> <span
  m='894580'>then</span> <span m='895140'>what's</span> <span
  m='895500'>the</span> <span m='895650'>conclusion?</span> <span
  m='897180'>Then</span> <span m='897510'>there</span> <span
  m='897750'>are</span> <span m='898200'>four</span> <span
  m='899040'>independent,</span> <span m='900010'>orthogonal</span> <span
  m='900810'>eigenvectors</span> <span m='901740'>to</span> <span
  m='901830'>go</span> <span m='902040'>with</span> <span m='902250'>it.</span>
  <span m='904210'>We</span> <span m='904260'>can't</span> <span
  m='904560'>say</span> <span m='904830'>that</span> <span
  m='905040'>about</span> <span m='905340'>matrices--</span> <span
  m='906480'>about</span> <span m='906780'>all</span> <span
  m='906930'>matrices.</span> <span m='907920'>But</span> <span
  m='908100'>we</span> <span m='908250'>can</span> <span m='908580'>say</span>
  <span m='908880'>it</span> <span m='908970'>about</span> <span
  m='909330'>all</span> <span m='909720'>symmetric</span> <span
  m='910350'>matrices.</span> </p><p><span m='912150'>And</span> <span
  m='912660'>in</span> <span m='912750'>fact,</span> <span
  m='913150'>those</span> <span m='913370'>eigenvectors</span> <span
  m='914280'>are</span> <span m='914550'>orthogonal.</span> <span
  m='915380'>So</span> <span m='915510'>we're</span> <span
  m='915660'>even</span> <span m='915930'>saying</span> <span
  m='916680'>more.</span> <span m='917340'>We</span> <span m='917490'>can</span>
  <span m='917640'>find</span> <span m='918000'>four</span> <span
  m='918430'>orthogonal</span> <span m='919230'>eigenvectors</span> <span
  m='920340'>that</span> <span m='920520'>go</span> <span m='921810'>with</span>
  <span m='922080'>a</span> <span m='922740'>multiplicity</span> <span
  m='923910'>for</span> <span m='924540'>eigenvalues.</span> <span
  m='925410'>OK.</span> <span m='925780'>That's</span> <span
  m='926030'>spectral</span> <span m='926460'>theorem.</span> <span
  m='927780'>Spectral</span> <span m='928260'>clustering</span> <span
  m='931440'>starts</span> <span m='932040'>with</span> <span
  m='936920'>the</span> <span m='938360'>graph</span> <span
  m='941510'>Laplacian</span> <span m='942390'>matrix.</span> <span
  m='946140'>May</span> <span m='946380'>I</span> <span
  m='946800'>remember</span> <span m='947310'>what</span> <span
  m='947490'>that</span> <span m='947700'>matrix</span> <span
  m='948270'>is?</span> <span m='949700'>Because</span> <span
  m='949840'>that's</span> <span m='950190'>the</span> <span
  m='951900'>key</span> <span m='952740'>connection</span> <span
  m='953490'>of</span> <span m='955560'>linear</span> <span
  m='955890'>algebra</span> <span m='956370'>to</span> <span
  m='956490'>graph</span> <span m='956850'>theory,</span> <span
  m='958020'>is</span> <span m='958380'>the</span> <span
  m='958740'>properties</span> <span m='959430'>of</span> <span
  m='959550'>this</span> <span m='959820'>graph,</span> <span
  m='960240'>Laplacian</span> <span m='960960'>matrix.</span> <span
  m='962210'>OK.</span> <span m='962940'>So</span> <span m='963120'>let</span>
  <span m='963330'>me</span> <span m='963780'>say</span> <span
  m='964080'>L,</span> <span m='964440'>for</span> <span
  m='964640'>Laplacian.</span> </p><p><span m='968270'>So</span> <span
  m='968450'>that</span> <span m='968690'>matrix--</span> <span
  m='969230'>one</span> <span m='969530'>way</span> <span m='969740'>to</span>
  <span m='969860'>describe</span> <span m='970490'>it</span> <span
  m='970640'>is</span> <span m='970940'>as</span> <span m='971330'>A</span>
  <span m='971540'>transpose</span> <span m='972260'>A,</span> <span
  m='974390'>where</span> <span m='974630'>A</span> <span m='975080'>is</span>
  <span m='975440'>the</span> <span m='978050'>incidence</span> <span
  m='978680'>matrix</span> <span m='982680'>of</span> <span
  m='982860'>the</span> <span m='982980'>graph.</span> <span
  m='985380'>Or</span> <span m='985680'>another</span> <span
  m='986010'>way</span> <span m='986460'>we'll</span> <span
  m='986760'>see</span> <span m='987360'>is</span> <span m='988650'>the</span>
  <span m='989976'>D--</span> <span m='990720'>the</span> <span
  m='991020'>degree</span> <span m='991650'>matrix.</span> <span
  m='995690'>That's</span> <span m='995990'>diagonal.</span> <span
  m='1002890'>And</span> <span m='1003010'>I'll</span> <span
  m='1003160'>do</span> <span m='1003370'>an</span> <span
  m='1003490'>example</span> <span m='1004000'>just</span> <span
  m='1004240'>to</span> <span m='1004330'>remind</span> <span
  m='1004780'>you.</span> <span m='1005230'>Minus</span> <span
  m='1006190'>the--</span> <span m='1007090'>well,</span> <span
  m='1007480'>I</span> <span m='1007600'>don't</span> <span
  m='1007780'>know</span> <span m='1007900'>what</span> <span
  m='1008110'>I'd</span> <span m='1008260'>call</span> <span
  m='1008590'>this</span> <span m='1009010'>one.</span> <span
  m='1012390'>Shall</span> <span m='1012930'>I</span> <span
  m='1013110'>call</span> <span m='1013440'>it</span> <span m='1013590'>B</span>
  <span m='1014100'>for</span> <span m='1014250'>the</span> <span
  m='1014340'>moment.</span> <span m='1015480'>And</span> <span
  m='1016030'>what</span> <span m='1016260'>matrix</span> <span
  m='1016830'>is</span> <span m='1016980'>B?</span> <span
  m='1018060'>That's</span> <span m='1018450'>the</span> <span
  m='1019590'>adjacency</span> <span m='1020550'>matrix.</span> <span
  m='1027030'>Really,</span> <span m='1028319'>you</span> <span
  m='1028500'>should</span> <span m='1028740'>know</span> <span
  m='1029160'>these</span> <span m='1031700'>four</span> <span
  m='1032810'>matrices.</span> <span m='1033900'>They're</span> <span
  m='1034220'>the</span> <span m='1034460'>key</span> <span
  m='1034790'>four</span> <span m='1035119'>matrices</span> <span
  m='1035869'>associated</span> <span m='1036560'>with</span> <span
  m='1036770'>any</span> <span m='1037010'>graph.</span> </p><p><span
  m='1038180'>The</span> <span m='1038390'>incidence</span> <span
  m='1038960'>matrix,</span> <span m='1039589'>that's</span> <span
  m='1039890'>m</span> <span m='1040130'>by</span> <span m='1040400'>n--</span>
  <span m='1044960'>edges</span> <span m='1045380'>and</span> <span
  m='1045460'>nodes--</span> <span m='1047420'>edges</span> <span
  m='1048880'>and</span> <span m='1049070'>nodes.</span> <span
  m='1051330'>So</span> <span m='1051440'>it's</span> <span
  m='1051590'>rectangular,</span> <span m='1053550'>but</span> <span
  m='1054140'>I'm</span> <span m='1054370'>forming</span> <span
  m='1054710'>A</span> <span m='1054830'>transpose</span> <span
  m='1055160'>A</span> <span m='1055700'>here.</span> <span
  m='1055970'>So</span> <span m='1056150'>I'm</span> <span
  m='1056270'>forming</span> <span m='1056750'>a</span> <span
  m='1057560'>symmetric,</span> <span m='1058370'>positive,</span> <span
  m='1059120'>semi-definite</span> <span m='1060200'>matrix.</span> <span
  m='1061280'>So</span> <span m='1061730'>this</span> <span
  m='1062240'>Laplacian</span> <span m='1064130'>is</span> <span
  m='1065300'>symmetric,</span> <span m='1065990'>positive,</span> <span
  m='1067790'>semi-definite.</span> <span m='1070460'>Yeah.</span> <span
  m='1070850'>Let</span> <span m='1071030'>me</span> <span
  m='1071300'>let</span> <span m='1071420'>me</span> <span
  m='1071540'>just</span> <span m='1071810'>recall</span> <span
  m='1072380'>what</span> <span m='1072620'>all</span> <span
  m='1072800'>these</span> <span m='1073070'>matrices</span> <span
  m='1073820'>are</span> <span m='1074170'>for</span> <span m='1075810'>a</span>
  <span m='1076460'>simple</span> <span m='1076940'>graph.</span> <span
  m='1082170'>OK.</span> <span m='1082590'>So</span> <span
  m='1082830'>I'll</span> <span m='1082950'>just</span> <span
  m='1083160'>draw</span> <span m='1083430'>a</span> <span
  m='1083460'>graph.</span> <span m='1087870'>All</span> <span
  m='1088080'>right.</span> <span m='1089510'>OK.</span> <span
  m='1089840'>So</span> <span m='1090080'>the</span> <span
  m='1090380'>incidence</span> <span m='1091070'>matrix--</span> <span
  m='1094570'>there</span> <span m='1094840'>are</span> <span
  m='1095170'>1,</span> <span m='1095690'>2,</span> <span m='1095960'>3,</span>
  <span m='1096290'>4,</span> <span m='1096560'>5</span> <span
  m='1096940'>edges--</span> <span m='1097600'>so</span> <span
  m='1097810'>five</span> <span m='1098200'>rows.</span> <span
  m='1102030'>There</span> <span m='1102330'>are</span> <span
  m='1102870'>four</span> <span m='1103380'>nodes--</span> <span
  m='1104100'>1,</span> <span m='1104960'>2,</span> <span m='1106140'>3,</span>
  <span m='1106600'>and</span> <span m='1106710'>4.</span> <span
  m='1107890'>So</span> <span m='1108030'>four</span> <span
  m='1108390'>columns.</span> <span m='1109590'>And</span> <span
  m='1110050'>a</span> <span m='1110130'>typical</span> <span
  m='1110700'>row</span> <span m='1111660'>would</span> <span
  m='1111870'>be</span> <span m='1112170'>edge</span> <span m='1112470'>1</span>
  <span m='1113610'>going</span> <span m='1114000'>from</span> <span
  m='1114240'>node</span> <span m='1114600'>1</span> <span m='1115050'>to</span>
  <span m='1115230'>node</span> <span m='1115560'>2,</span> <span
  m='1116460'>so</span> <span m='1116670'>it</span> <span
  m='1116730'>would</span> <span m='1116910'>have</span> <span
  m='1117090'>a</span> <span m='1117180'>minus</span> <span m='1117660'>1</span>
  <span m='1117990'>and</span> <span m='1118140'>a</span> <span
  m='1118200'>1</span> <span m='1119460'>there.</span> </p><p><span
  m='1121390'>And</span> <span m='1121540'>let</span> <span
  m='1121690'>me</span> <span m='1121840'>take</span> <span
  m='1122290'>edge</span> <span m='1122590'>2,</span> <span
  m='1123790'>going</span> <span m='1124060'>from</span> <span
  m='1124270'>1</span> <span m='1124690'>to</span> <span m='1125100'>node</span>
  <span m='1125360'>3,</span> <span m='1126400'>so</span> <span
  m='1126580'>it</span> <span m='1126640'>would</span> <span
  m='1126790'>have</span> <span m='1127000'>a</span> <span
  m='1127060'>minus</span> <span m='1127540'>1</span> <span
  m='1127810'>and</span> <span m='1127930'>a</span> <span m='1128020'>1</span>
  <span m='1128320'>there,</span> <span m='1128990'>and</span> <span
  m='1129330'>so</span> <span m='1129510'>on.</span> <span m='1131600'>So</span>
  <span m='1131810'>that's</span> <span m='1132010'>the</span> <span
  m='1132190'>incidence</span> <span m='1132730'>matrix</span> <span
  m='1133480'>A.</span> <span m='1136930'>OK.</span> <span
  m='1137390'>What's</span> <span m='1137720'>the</span> <span
  m='1137870'>degree</span> <span m='1138350'>matrix?</span> <span
  m='1138950'>That's</span> <span m='1139160'>simple.</span> <span
  m='1140720'>The</span> <span m='1140790'>degree</span> <span
  m='1141230'>matrix--</span> <span m='1144130'>well,</span> <span
  m='1144340'>A</span> <span m='1144530'>transpose</span> <span
  m='1145220'>A.</span> <span m='1147200'>This</span> <span
  m='1147410'>is</span> <span m='1147680'>m</span> <span m='1147860'>by</span>
  <span m='1148100'>n.</span> <span m='1149410'>This</span> <span
  m='1149590'>is</span> <span m='1149780'>n</span> <span m='1150020'>by</span>
  <span m='1150260'>m.</span> <span m='1151280'>So</span> <span
  m='1152720'>it's</span> <span m='1153470'>n</span> <span m='1153650'>by</span>
  <span m='1153890'>n.</span> <span m='1158300'>OK.</span> <span
  m='1159430'>In</span> <span m='1159550'>this</span> <span
  m='1159760'>case,</span> <span m='1160120'>4</span> <span
  m='1160390'>by</span> <span m='1160570'>4.</span> <span m='1162330'>So</span>
  <span m='1162540'>the</span> <span m='1162660'>degree</span> <span
  m='1163020'>matrix</span> <span m='1163590'>will</span> <span
  m='1163740'>be</span> <span m='1163890'>4</span> <span m='1164190'>by</span>
  <span m='1164400'>4,</span> <span m='1164910'>n</span> <span
  m='1165120'>by</span> <span m='1165360'>n.</span> <span m='1166200'>And</span>
  <span m='1166350'>it</span> <span m='1166440'>will</span> <span
  m='1166620'>tell</span> <span m='1166920'>us</span> <span
  m='1167100'>the</span> <span m='1167220'>degree</span> <span
  m='1167700'>of</span> <span m='1167820'>that,</span> <span
  m='1168110'>which</span> <span m='1168360'>means--</span> <span
  m='1169230'>which</span> <span m='1169470'>we</span> <span
  m='1169620'>just</span> <span m='1169860'>count</span> <span
  m='1170250'>the</span> <span m='1170490'>edges.</span> <span
  m='1170880'>So</span> <span m='1171170'>three</span> <span
  m='1171540'>edges</span> <span m='1171900'>going</span> <span
  m='1172200'>in,</span> <span m='1173010'>node</span> <span
  m='1173250'>2,</span> <span m='1173760'>three</span> <span
  m='1174150'>edges</span> <span m='1174630'>going</span> <span
  m='1174930'>in,</span> <span m='1175860'>node</span> <span
  m='1177270'>3</span> <span m='1178110'>has</span> <span
  m='1178560'>just</span> <span m='1178860'>two</span> <span
  m='1179190'>edges.</span> <span m='1180180'>And</span> <span
  m='1180360'>node</span> <span m='1180690'>4</span> <span
  m='1181260'>has</span> <span m='1181530'>just</span> <span
  m='1181770'>two</span> <span m='1182070'>edges.</span> </p><p><span
  m='1183030'>So</span> <span m='1183210'>that's</span> <span
  m='1183510'>the</span> <span m='1183630'>degree</span> <span
  m='1184110'>matrix.</span> <span m='1185610'>And</span> <span
  m='1185790'>then</span> <span m='1186030'>the</span> <span
  m='1186210'>adjacency</span> <span m='1187020'>matrix</span> <span
  m='1187560'>that</span> <span m='1187710'>I've</span> <span
  m='1187860'>called</span> <span m='1188190'>B</span> <span
  m='1189030'>is</span> <span m='1189450'>also</span> <span m='1189870'>4</span>
  <span m='1190170'>by</span> <span m='1190410'>4.</span> <span
  m='1192600'>And</span> <span m='1192990'>what</span> <span
  m='1193290'>is</span> <span m='1193470'>it?</span> <span m='1195630'>It</span>
  <span m='1195810'>tells</span> <span m='1196230'>us</span> <span
  m='1196470'>which</span> <span m='1196830'>node</span> <span
  m='1197640'>is</span> <span m='1197790'>connected</span> <span
  m='1198310'>to</span> <span m='1198420'>which</span> <span
  m='1198750'>node.</span> <span m='1199990'>So</span> <span
  m='1200570'>I</span> <span m='1200700'>don't</span> <span
  m='1201030'>allow</span> <span m='1202350'>nodes--</span> <span
  m='1204810'>edges</span> <span m='1206580'>that</span> <span
  m='1206730'>connect</span> <span m='1207180'>a</span> <span
  m='1207300'>node</span> <span m='1207600'>to</span> <span
  m='1207810'>itself,</span> <span m='1208290'>so</span> <span
  m='1208680'>0's</span> <span m='1209190'>on</span> <span
  m='1209340'>the</span> <span m='1209430'>diagonal.</span> <span
  m='1210180'>How</span> <span m='1210360'>many--</span> <span
  m='1212070'>so</span> <span m='1212190'>which</span> <span
  m='1212520'>nodes</span> <span m='1212970'>are</span> <span
  m='1213090'>connected</span> <span m='1213630'>to</span> <span
  m='1213750'>node</span> <span m='1214020'>1?</span> <span
  m='1214680'>Well,</span> <span m='1215370'>all</span> <span
  m='1215730'>of</span> <span m='1215910'>2</span> <span m='1216330'>and</span>
  <span m='1216480'>4</span> <span m='1216750'>and</span> <span
  m='1216870'>3</span> <span m='1217170'>are</span> <span
  m='1217290'>connected</span> <span m='1217800'>to</span> <span
  m='1217950'>1.</span> <span m='1218640'>So</span> <span m='1218910'>I</span>
  <span m='1219000'>have</span> <span m='1219270'>1's</span> <span
  m='1219810'>there.</span> <span m='1222670'>Node</span> <span
  m='1222940'>2--</span> <span m='1224260'>all</span> <span
  m='1224440'>three</span> <span m='1224740'>nodes</span> <span
  m='1225100'>are</span> <span m='1225220'>connected</span> <span
  m='1225670'>to</span> <span m='1225820'>node</span> <span
  m='1226080'>2.</span> <span m='1226780'>So</span> <span
  m='1227020'>I'll</span> <span m='1227110'>have--</span> <span
  m='1228100'>the</span> <span m='1228220'>second</span> <span
  m='1228670'>column</span> <span m='1229090'>and</span> <span
  m='1229480'>row</span> <span m='1229870'>will</span> <span
  m='1230110'>have</span> <span m='1230470'>all</span> <span
  m='1230680'>three</span> <span m='1231040'>1's.</span> </p><p><span
  m='1232210'>How</span> <span m='1232420'>about</span> <span
  m='1233320'>node</span> <span m='1233650'>3?</span> <span
  m='1234350'>OK.</span> <span m='1234870'>Only</span> <span
  m='1235870'>edges--</span> <span m='1236770'>only</span> <span
  m='1237010'>two</span> <span m='1237340'>edges</span> <span
  m='1237700'>are</span> <span m='1237820'>connected.</span> <span
  m='1239770'>Only</span> <span m='1240850'>two</span> <span
  m='1241210'>nodes</span> <span m='1241840'>are</span> <span
  m='1243370'>connected</span> <span m='1243910'>to</span> <span
  m='1244030'>3,</span> <span m='1244810'>1</span> <span m='1245050'>and</span>
  <span m='1245170'>2,</span> <span m='1245470'>but</span> <span
  m='1245650'>not</span> <span m='1245920'>4.</span> <span m='1246820'>So</span>
  <span m='1247030'>1</span> <span m='1247270'>and</span> <span
  m='1247360'>2</span> <span m='1247630'>I</span> <span m='1247780'>have,</span>
  <span m='1248260'>but</span> <span m='1248440'>not</span> <span
  m='1248860'>4.</span> <span m='1249970'>OK.</span> <span m='1251950'>So</span>
  <span m='1252130'>that's</span> <span m='1252460'>the</span> <span
  m='1252580'>adjacency</span> <span m='1253420'>matrix.</span> <span
  m='1254500'>Is</span> <span m='1254650'>that</span> <span
  m='1254830'>right?</span> <span m='1255700'>Think</span> <span
  m='1255940'>so.</span> <span m='1258350'>This</span> <span
  m='1258620'>is</span> <span m='1258800'>the</span> <span
  m='1258950'>degree</span> <span m='1259460'>matrix.</span> <span
  m='1260270'>This</span> <span m='1260540'>is</span> <span
  m='1260720'>the</span> <span m='1262340'>incidence</span> <span
  m='1263000'>matrix.</span> <span m='1264290'>And</span> <span
  m='1265820'>that</span> <span m='1266060'>formula</span> <span
  m='1266570'>gives</span> <span m='1266900'>me</span> <span
  m='1267750'>the</span> <span m='1268010'>Laplacian.</span> <span
  m='1268730'>OK.</span> <span m='1269240'>Let's</span> <span
  m='1269560'>just</span> <span m='1269840'>write</span> <span
  m='1270110'>down</span> <span m='1270320'>the</span> <span
  m='1270420'>Laplacian.</span> <span m='1275460'>So</span> <span
  m='1275700'>if</span> <span m='1275820'>I</span> <span m='1275970'>use</span>
  <span m='1276390'>the</span> <span m='1276540'>degree</span> <span
  m='1277260'>minus</span> <span m='1277890'>B--</span> <span
  m='1279150'>that's</span> <span m='1279510'>easy.</span> <span
  m='1280290'>The</span> <span m='1280410'>degrees</span> <span
  m='1280980'>were</span> <span m='1281190'>3,</span> <span
  m='1281700'>3,</span> <span m='1282270'>2,</span> <span m='1282660'>and</span>
  <span m='1282810'>2.</span> <span m='1283900'>Now</span> <span
  m='1284040'>I</span> <span m='1284130'>have</span> <span
  m='1284310'>these</span> <span m='1284580'>minuses.</span> <span
  m='1290610'>And</span> <span m='1290790'>those</span> <span
  m='1291290'>were</span> <span m='1292080'>0.</span> <span
  m='1293730'>OK.</span> <span m='1297290'>So</span> <span
  m='1297500'>that's</span> <span m='1297770'>a</span> <span
  m='1297860'>positive,</span> <span m='1298550'>semi-definite</span> <span
  m='1299420'>matrix.</span> </p><p><span m='1299990'>Is</span> <span
  m='1300160'>it</span> <span m='1300320'>a</span> <span
  m='1300380'>positive</span> <span m='1300950'>definite</span> <span
  m='1301400'>matrix?</span> <span m='1304060'>So</span> <span
  m='1304340'>let</span> <span m='1304460'>me</span> <span
  m='1304640'>ask,</span> <span m='1306850'>is</span> <span
  m='1307130'>it</span> <span m='1307250'>singular</span> <span
  m='1307790'>or</span> <span m='1307970'>is</span> <span m='1308120'>it</span>
  <span m='1308210'>not</span> <span m='1308480'>singular?</span> <span
  m='1309890'>Is</span> <span m='1310070'>there</span> <span
  m='1310250'>a</span> <span m='1310310'>vector</span> <span
  m='1310730'>in</span> <span m='1310850'>its</span> <span
  m='1311060'>null</span> <span m='1311300'>space,</span> <span
  m='1311690'>or</span> <span m='1311810'>is there</span> <span
  m='1312080'>not</span> <span m='1312440'>a</span> <span
  m='1312500'>vector</span> <span m='1312920'>in</span> <span
  m='1313080'>its</span> <span m='1313220'>null</span> <span
  m='1313800'>space?</span> <span m='1314580'>Can</span> <span
  m='1315120'>you</span> <span m='1315260'>solve</span> <span
  m='1315770'>Dx</span> <span m='1317900'>equals</span> <span
  m='1318740'>all</span> <span m='1319040'>0's?</span> <span
  m='1323410'>And</span> <span m='1323710'>of</span> <span
  m='1323800'>course,</span> <span m='1324100'>you</span> <span
  m='1324220'>can.</span> <span m='1326050'>Everybody</span> <span
  m='1326560'>sees</span> <span m='1327040'>that</span> <span
  m='1327860'>vector</span> <span m='1328480'>of</span> <span
  m='1328630'>all</span> <span m='1328840'>1's</span> <span
  m='1330850'>will</span> <span m='1331180'>be</span> <span m='1332630'>a</span>
  <span m='1333250'>solution</span> <span m='1333910'>to</span> <span
  m='1335970'>L--</span> <span m='1337420'>sorry.</span> <span
  m='1337720'>I</span> <span m='1337870'>should</span> <span
  m='1338530'>be</span> <span m='1338680'>saying</span> <span
  m='1339010'>L</span> <span m='1339280'>here.</span> <span
  m='1341670'>Lx</span> <span m='1342190'>equals</span> <span
  m='1342520'>0.</span> </p><p><span m='1344750'>Lx</span> <span
  m='1345230'>equals</span> <span m='1345560'>0</span> <span
  m='1346580'>as</span> <span m='1348560'>for</span> <span m='1350860'>a</span>
  <span m='1350930'>whole</span> <span m='1351470'>line</span> <span
  m='1352070'>of</span> <span m='1354830'>one</span> <span
  m='1355130'>dimensional</span> <span m='1356690'>null</span> <span
  m='1357020'>space</span> <span m='1358130'>of</span> <span
  m='1358430'>L</span> <span m='1360650'>has</span> <span
  m='1360950'>dimension</span> <span m='1363620'>1.</span> <span
  m='1365120'>It's</span> <span m='1365390'>got</span> <span
  m='1365690'>1</span> <span m='1366320'>basis</span> <span
  m='1366830'>vector,</span> <span m='1367190'>1,</span> <span
  m='1367460'>1,</span> <span m='1367700'>1,</span> <span m='1367940'>1.</span>
  <span m='1369140'>And</span> <span m='1369410'>that</span> <span
  m='1369650'>will</span> <span m='1369890'>always</span> <span
  m='1370280'>happen</span> <span m='1372020'>with</span> <span
  m='1373900'>the</span> <span m='1374330'>graph</span> <span
  m='1375230'>set</span> <span m='1375610'>up</span> <span
  m='1375860'>that</span> <span m='1376040'>I've</span> <span
  m='1376220'>created.</span> <span m='1377280'>OK.</span> <span
  m='1377520'>So</span> <span m='1377690'>that's</span> <span
  m='1377980'>a</span> <span m='1378050'>first</span> <span
  m='1378410'>fact,</span> <span m='1380020'>that</span> <span
  m='1380250'>this</span> <span m='1380440'>positive,</span> <span
  m='1381280'>semi-definite</span> <span m='1382400'>matrix,</span> <span
  m='1382930'>L,</span> <span m='1384100'>has</span> <span
  m='1387100'>lambda</span> <span m='1387610'>1</span> <span
  m='1388060'>equals</span> <span m='1388480'>0.</span> <span
  m='1389980'>And</span> <span m='1391150'>the</span> <span
  m='1391310'>eigenvector</span> <span m='1392260'>is</span> <span
  m='1393340'>constant--</span> <span m='1395170'>C,</span> <span
  m='1395650'>C,</span> <span m='1396190'>C,</span> <span m='1396700'>C--</span>
  <span m='1397030'>the</span> <span m='1397150'>one</span> <span
  m='1397420'>dimensional</span> <span m='1398350'>eigenspace.</span> <span
  m='1399580'>Or</span> <span m='1399820'>1, 1, 1, 1</span> <span
  m='1400900'>is</span> <span m='1401130'>the</span> <span
  m='1401590'>typical</span> <span m='1402050'>eigenvector.</span> <span
  m='1402970'>OK.</span> </p><p><span m='1406580'>Now</span> <span
  m='1409240'>back</span> <span m='1409510'>to</span> <span
  m='1409630'>graph</span> <span m='1409990'>clustering.</span> <span
  m='1412130'>The</span> <span m='1412370'>idea</span> <span
  m='1413000'>of</span> <span m='1414080'>graph</span> <span
  m='1414470'>clustering</span> <span m='1415100'>is</span> <span
  m='1415310'>to</span> <span m='1415430'>look</span> <span
  m='1415820'>at</span> <span m='1416090'>the</span> <span
  m='1418300'>Fiedler</span> <span m='1419060'>eigenvector.</span> <span
  m='1419960'>This</span> <span m='1420140'>is</span> <span
  m='1420260'>called</span> <span m='1420530'>the</span> <span
  m='1420900'>x2--</span> <span m='1424450'>is</span> <span
  m='1424660'>the</span> <span m='1425920'>next</span> <span
  m='1426330'>eigenvector--</span> <span m='1427240'>is</span> <span
  m='1428590'>the</span> <span m='1429350'>eigenvector</span> <span
  m='1432850'>for</span> <span m='1434800'>the</span> <span
  m='1434950'>smallest</span> <span m='1435850'>positive</span> <span
  m='1436540'>eigenvalue</span> <span m='1437260'>for</span> <span
  m='1437450'>a</span> <span m='1437470'>lambda</span> <span
  m='1438010'>min</span> <span m='1440270'>excluding</span> <span
  m='1441030'>0--</span> <span m='1441790'>so</span> <span
  m='1442030'>the</span> <span m='1442720'>smallest</span> <span
  m='1443400'>eigenvalue</span> <span m='1444580'>of</span> <span
  m='1445630'>L--</span> <span m='1451454'>the</span> <span
  m='1452450'>smallest</span> <span m='1452990'>eigenvalue</span> <span
  m='1453830'>and</span> <span m='1454070'>its</span> <span
  m='1454280'>eigenvector--</span> <span m='1455120'>this</span> <span
  m='1455420'>is</span> <span m='1455750'>called</span> <span
  m='1456140'>the</span> <span m='1456300'>Fiedler</span> <span
  m='1456890'>vector,</span> <span m='1457280'>named</span> <span
  m='1457670'>after</span> <span m='1458090'>the</span> <span
  m='1459530'>Czech</span> <span m='1459950'>mathematician.</span> <span
  m='1465330'>A</span> <span m='1465580'>great</span> <span
  m='1466420'>man</span> <span m='1466810'>in</span> <span
  m='1466960'>linear</span> <span m='1467290'>algebra,</span> <span
  m='1468700'>and</span> <span m='1468880'>he</span> <span
  m='1469210'>studied</span> <span m='1469690'>this</span> <span
  m='1469900'>factor--</span> <span m='1471020'>this</span> <span
  m='1471230'>situation.</span> <span m='1472510'>So</span> <span
  m='1472690'>everybody</span> <span m='1473230'>who</span> <span
  m='1473320'>knows</span> <span m='1473680'>about</span> <span
  m='1476430'>the</span> <span m='1476560'>graph</span> <span
  m='1476880'>Laplacian</span> <span m='1478310'>is</span> <span
  m='1478520'>aware</span> <span m='1479690'>that</span> <span
  m='1479930'>its</span> <span m='1480500'>first</span> <span
  m='1481020'>eigenvalue</span> <span m='1481800'>is</span> <span
  m='1481920'>0,</span> <span m='1483050'>and</span> <span
  m='1483330'>that</span> <span m='1483470'>the</span> <span
  m='1483620'>next</span> <span m='1484010'>eigenvalue</span> <span
  m='1485360'>is</span> <span m='1485570'>important.</span> <span
  m='1486170'>Yeah.</span> </p><p><span m='1486867'>AUDIENCE:</span> <span
  m='1487022'>Is</span> <span m='1487177'>the</span> <span
  m='1487334'>graph</span> <span m='1487801'>Laplacian named</span> <span
  m='1488268'>the</span> <span m='1488735'>Laplacian because</span> <span
  m='1489202'>it has</span> <span m='1490136'>connections</span> <span
  m='1491070'>to--</span> </p><p><span m='1492850'>GILBERT STRANG:</span> <span
  m='1493045'>To</span> <span m='1493640'>Laplace's</span> <span
  m='1493870'>equation,</span> <span m='1494450'>yes.</span> <span
  m='1498860'>Yeah,</span> <span m='1499160'>that's</span> <span
  m='1499400'>a</span> <span m='1499460'>good</span> <span
  m='1499670'>question.</span> <span m='1500250'>So</span> <span
  m='1500330'>why</span> <span m='1502060'>the</span> <span
  m='1502160'>word--</span> <span m='1504430'>the</span> <span
  m='1504560'>name,</span> <span m='1505640'>Laplacian?</span> <span
  m='1510050'>So</span> <span m='1512690'>yeah,</span> <span
  m='1513170'>that's</span> <span m='1513410'>a</span> <span
  m='1514010'>good</span> <span m='1514250'>question.</span> <span
  m='1515400'>So</span> <span m='1517840'>the</span> <span
  m='1518050'>familiar</span> <span m='1518720'>thing--</span> <span
  m='1519090'>so</span> <span m='1519350'>it</span> <span
  m='1519560'>connects</span> <span m='1520100'>to</span> <span
  m='1520600'>Laplace's</span> <span m='1521660'>finite</span> <span
  m='1522170'>difference</span> <span m='1522710'>equation,</span> <span
  m='1523280'>because</span> <span m='1523490'>we're</span> <span
  m='1523640'>talking</span> <span m='1523970'>about</span> <span
  m='1524180'>matrices</span> <span m='1524990'>here,</span> <span
  m='1525230'>and</span> <span m='1525320'>not</span> <span
  m='1525560'>derivatives--</span> <span m='1527030'>not</span> <span
  m='1527300'>functions.</span> <span m='1528980'>So</span> <span
  m='1529220'>why</span> <span m='1529550'>the</span> <span
  m='1529670'>word</span> <span m='1529940'>Laplacian?</span> <span
  m='1530600'>Well,</span> <span m='1531350'>so</span> <span
  m='1531620'>if</span> <span m='1531800'>I</span> <span m='1531920'>have</span>
  <span m='1532130'>a</span> <span m='1532220'>regular--</span> <span
  m='1532880'>if</span> <span m='1533060'>my</span> <span
  m='1533270'>graph</span> <span m='1533780'>is</span> <span
  m='1534590'>composed</span> <span m='1535340'>of--</span> <span
  m='1537950'>so</span> <span m='1538160'>there</span> <span
  m='1538360'>is</span> <span m='1538490'>a</span> <span
  m='1538550'>graph</span> <span m='1539060'>with</span> <span
  m='1540740'>25</span> <span m='1541460'>nodes,</span> <span
  m='1543330'>and</span> <span m='1545540'>4</span> <span
  m='1545910'>times</span> <span m='1546230'>5--</span> <span
  m='1546630'>20,</span> <span m='1546960'>about</span> <span
  m='1547230'>40.</span> <span m='1548190'>This</span> <span
  m='1548400'>probably</span> <span m='1549240'>has</span> <span
  m='1549510'>about</span> <span m='1549810'>40</span> <span
  m='1550290'>edges</span> <span m='1553660'>and</span> <span
  m='1554410'>25</span> <span m='1555160'>nodes.</span> </p><p><span
  m='1558550'>And</span> <span m='1558760'>of</span> <span
  m='1558880'>course,</span> <span m='1559270'>I</span> <span
  m='1559390'>can</span> <span m='1559630'>construct</span> <span
  m='1560470'>its--</span> <span m='1561910'>graph</span> <span
  m='1562780'>all</span> <span m='1563050'>those</span> <span
  m='1563380'>four</span> <span m='1563740'>matrices</span> <span
  m='1564460'>for</span> <span m='1564970'>it--</span> <span
  m='1565446'>its</span> <span m='1568220'>incidence</span> <span
  m='1568870'>matrix,</span> <span m='1569590'>its</span> <span
  m='1569800'>degree</span> <span m='1570400'>matrix.</span> <span
  m='1571050'>So</span> <span m='1571180'>the</span> <span
  m='1571330'>degree</span> <span m='1571900'>will</span> <span
  m='1572080'>be</span> <span m='1572620'>four</span> <span
  m='1573220'>at</span> <span m='1573370'>all</span> <span
  m='1573610'>these</span> <span m='1574450'>inside</span> <span
  m='1575020'>points.</span> <span m='1575470'>The</span> <span
  m='1575670'>degree</span> <span m='1576010'>will</span> <span
  m='1576160'>be</span> <span m='1576370'>three</span> <span
  m='1576940'>at</span> <span m='1577060'>these</span> <span
  m='1577810'>boundary</span> <span m='1578320'>points.</span> <span
  m='1579220'>The</span> <span m='1579310'>degree</span> <span
  m='1579670'>will</span> <span m='1579850'>be</span> <span
  m='1580030'>two</span> <span m='1580480'>at</span> <span
  m='1580600'>these</span> <span m='1580870'>corner</span> <span
  m='1581320'>points.</span> <span m='1582120'>But</span> <span
  m='1582340'>the--</span> <span m='1583270'>what</span> <span
  m='1583570'>will</span> <span m='1583930'>the</span> <span
  m='1585670'>matrix</span> <span m='1586240'>L</span> <span
  m='1586570'>look</span> <span m='1586900'>like?</span> <span
  m='1588670'>So</span> <span m='1590140'>what</span> <span
  m='1590320'>is</span> <span m='1590510'>L?</span> <span m='1594690'>And</span>
  <span m='1594890'>that</span> <span m='1595100'>will</span> <span
  m='1595250'>tell</span> <span m='1595490'>you</span> <span
  m='1596600'>why</span> <span m='1597140'>it</span> <span
  m='1597260'>has</span> <span m='1597580'>this</span> <span
  m='1597830'>name</span> <span m='1598550'>Laplacian.</span> <span
  m='1599660'>So</span> <span m='1600020'>the</span> <span
  m='1600260'>matrix</span> <span m='1600830'>L</span> <span
  m='1601790'>will</span> <span m='1602060'>have--</span> <span
  m='1602690'>the</span> <span m='1602870'>degree</span> <span
  m='1603440'>4</span> <span m='1603950'>right</span> <span
  m='1604290'>will</span> <span m='1604460'>be</span> <span
  m='1604670'>on</span> <span m='1604790'>the</span> <span
  m='1604910'>diagonal.</span> <span m='1605550'>That's</span> <span
  m='1605810'>coming</span> <span m='1606140'>from</span> <span
  m='1606380'>D.</span> <span m='1608070'>The</span> <span
  m='1608460'>other--</span> <span m='1609990'>the</span> <span
  m='1610200'>minus</span> <span m='1610650'>1's</span> <span
  m='1611400'>that</span> <span m='1611610'>come</span> <span
  m='1611970'>from</span> <span m='1612750'>B,</span> <span
  m='1613260'>the</span> <span m='1614370'>adjacency</span> <span
  m='1615150'>matrix,</span> <span m='1615750'>will</span> <span
  m='1615990'>be</span> <span m='1616170'>associated</span> <span
  m='1616860'>with</span> <span m='1617070'>those</span> <span
  m='1617460'>nodes,</span> <span m='1620100'>and</span> <span
  m='1620280'>otherwise,</span> <span m='1620790'>all</span> <span
  m='1620970'>0's.</span> </p><p><span m='1621510'>So</span> <span
  m='1621720'>this</span> <span m='1621930'>is</span> <span m='1622050'>a</span>
  <span m='1622140'>typical</span> <span m='1623430'>row</span> <span
  m='1624060'>of</span> <span m='1624270'>L.</span> <span
  m='1624640'>This</span> <span m='1624850'>is</span> <span
  m='1625050'>typical</span> <span m='1625530'>row</span> <span
  m='1625860'>of</span> <span m='1626020'>L</span> <span
  m='1626700'>centered</span> <span m='1627300'>at</span> <span
  m='1627420'>that</span> <span m='1628230'>node.</span> <span
  m='1629280'>So</span> <span m='1629460'>maybe</span> <span
  m='1629730'>that's</span> <span m='1630000'>node</span> <span
  m='1630300'>number</span> <span m='1630660'>5,</span> <span
  m='1631190'>10,</span> <span m='1631760'>13.</span> <span
  m='1632760'>That's</span> <span m='1633120'>13</span> <span
  m='1633690'>out</span> <span m='1633890'>of</span> <span m='1634140'>25</span>
  <span m='1635130'>that</span> <span m='1635470'>would</span> <span
  m='1636150'>show</span> <span m='1636420'>you</span> <span
  m='1636510'>this.</span> <span m='1637100'>And</span> <span
  m='1637270'>the--</span> <span m='1637950'>sorry.</span> <span
  m='1638310'>Those</span> <span m='1638440'>are</span> <span
  m='1638700'>minus</span> <span m='1639210'>1's.</span> <span
  m='1640990'>Minus</span> <span m='1641480'>1's.</span> <span
  m='1642330'>So</span> <span m='1642540'>a</span> <span m='1642620'>4</span>
  <span m='1643790'>on</span> <span m='1644340'>the</span> <span
  m='1644430'>diagonal,</span> <span m='1645120'>and</span> <span
  m='1645300'>four</span> <span m='1645630'>minus</span> <span
  m='1646110'>1's.</span> <span m='1647370'>That's</span> <span
  m='1647700'>the</span> <span m='1648300'>model</span> <span
  m='1648720'>problem</span> <span m='1649380'>for</span> <span
  m='1650010'>when</span> <span m='1650190'>the</span> <span
  m='1650280'>graph</span> <span m='1650730'>is</span> <span
  m='1650910'>a</span> <span m='1651000'>grid--</span> <span
  m='1651810'>square</span> <span m='1652200'>grid.</span> <span
  m='1653280'>And</span> <span m='1653630'>do</span> <span
  m='1653980'>you</span> <span m='1654300'>associate</span> <span
  m='1654870'>that</span> <span m='1655080'>with</span> <span
  m='1655290'>Laplace's</span> <span m='1655950'>equation?</span> <span
  m='1656940'>So</span> <span m='1657900'>this</span> <span
  m='1658140'>is</span> <span m='1658290'>the</span> <span
  m='1659700'>reason</span> <span m='1660210'>that</span> <span
  m='1661250'>Laplace--</span> <span m='1661760'>why</span> <span
  m='1663030'>Laplace</span> <span m='1663750'>gets</span> <span
  m='1664010'>in</span> <span m='1664200'>it.</span> <span
  m='1665220'>Because</span> <span m='1665970'>Laplace's</span> <span
  m='1666600'>equation--</span> <span m='1667170'>the</span> <span
  m='1667620'>differential</span> <span m='1668310'>equation--</span> <span
  m='1668940'>is</span> <span m='1669750'>second</span> <span
  m='1670170'>derivative</span> <span m='1670660'>with</span> <span
  m='1670780'>respect</span> <span m='1671030'>to</span> <span
  m='1671190'>x</span> <span m='1671460'>squared,</span> <span
  m='1672510'>and</span> <span m='1672660'>the</span> <span
  m='1672750'>second</span> <span m='1673170'>derivative</span> <span
  m='1673620'>with</span> <span m='1673790'>respect</span> <span
  m='1673980'>to</span> <span m='1674100'>y</span> <span
  m='1674430'>squared</span> <span m='1675470'>is</span> <span
  m='1675600'>0.</span> </p><p><span m='1677460'>And</span> <span
  m='1677610'>what</span> <span m='1677820'>we</span> <span
  m='1677940'>have</span> <span m='1678240'>here</span> <span
  m='1679080'>is</span> <span m='1679440'>Lu</span> <span
  m='1681240'>equals</span> <span m='1681630'>0.</span> <span
  m='1682800'>It's</span> <span m='1683100'>the</span> <span
  m='1684330'>discrete</span> <span m='1685020'>Laplacian,</span> <span
  m='1685740'>the</span> <span m='1685830'>vector</span> <span
  m='1686320'>Laplacian,</span> <span m='1687000'>the</span> <span
  m='1687090'>graph</span> <span m='1687560'>Laplacian--</span> <span
  m='1688710'>where</span> <span m='1689520'>the</span> <span
  m='1689700'>second</span> <span m='1690300'>x</span> <span
  m='1690630'>derivative</span> <span m='1691320'>is</span> <span
  m='1691470'>replaced</span> <span m='1692100'>by</span> <span
  m='1692790'>-1,</span> <span m='1693000'>2,</span> <span
  m='1693870'>-1.</span> <span m='1695340'>And</span> <span
  m='1695610'>the</span> <span m='1695730'>second</span> <span
  m='1696150'>y</span> <span m='1696510'>derivative</span> <span
  m='1697230'>is</span> <span m='1697440'>replaced</span> <span
  m='1697950'>by</span> <span m='1698190'>-1,</span> <span m='1698640'>2,</span>
  <span m='1699690'>-1.</span> <span m='1700290'>Second</span> <span
  m='1700710'>differences</span> <span m='1701910'>in</span> <span
  m='1702090'>the</span> <span m='1702270'>x</span> <span m='1702570'>and</span>
  <span m='1702720'>the</span> <span m='1702810'>y</span> <span
  m='1703140'>directions.</span> <span m='1704490'>So</span> <span
  m='1704760'>that's--</span> <span m='1706030'>yeah.</span> <span
  m='1706620'>So</span> <span m='1707160'>that's</span> <span
  m='1707580'>the</span> <span m='1708690'>explanation</span> <span
  m='1709380'>for</span> <span m='1709530'>Laplace.</span> <span
  m='1710610'>It's</span> <span m='1710980'>the</span> <span
  m='1711600'>discrete</span> <span m='1712260'>Laplace--</span> <span
  m='1713910'>discrete,</span> <span m='1714570'>or</span> <span
  m='1714690'>the</span> <span m='1714810'>finite</span> <span
  m='1715230'>difference</span> <span m='1716200'>Laplace.</span> <span
  m='1717870'>OK.</span> </p><p><span m='1719380'>Now</span> <span
  m='1720160'>to</span> <span m='1720430'>just</span> <span
  m='1720870'>finish,</span> <span m='1721770'>I</span> <span
  m='1721890'>have</span> <span m='1722070'>to</span> <span
  m='1722190'>tell</span> <span m='1722490'>you</span> <span
  m='1724240'>what</span> <span m='1724780'>the--</span> <span
  m='1726870'>what</span> <span m='1727110'>clusters--</span> <span
  m='1728640'>how</span> <span m='1728790'>do</span> <span
  m='1728880'>you</span> <span m='1729000'>decide</span> <span
  m='1729480'>the</span> <span m='1729600'>clusters</span> <span
  m='1730170'>from</span> <span m='1730470'>L?</span> <span
  m='1730890'>How</span> <span m='1731100'>does</span> <span
  m='1731320'>L</span> <span m='1732270'>propose</span> <span
  m='1734250'>two</span> <span m='1734490'>clusters,</span> <span
  m='1735180'>the</span> <span m='1735330'>a's</span> <span
  m='1735690'>and</span> <span m='1735900'>b's?</span> <span
  m='1737920'>And</span> <span m='1740610'>here's</span> <span
  m='1740850'>the</span> <span m='1740970'>answer.</span> <span
  m='1742290'>They</span> <span m='1742470'>come</span> <span
  m='1742860'>from</span> <span m='1744060'>this</span> <span
  m='1745760'>eigenvector--</span> <span m='1746930'>the</span> <span
  m='1747060'>Fiedler</span> <span m='1747570'>eigenvector.</span> <span
  m='1749180'>You</span> <span m='1749340'>look</span> <span
  m='1749580'>at</span> <span m='1749670'>that</span> <span
  m='1749960'>eigenvector.</span> <span m='1753280'>It's</span> <span
  m='1753420'>got</span> <span m='1753660'>some</span> <span
  m='1753930'>positive</span> <span m='1754830'>and</span> <span
  m='1755010'>some</span> <span m='1755280'>negative</span> <span
  m='1756510'>components.</span> <span m='1757908'>The</span> <span
  m='1758374'>components</span> <span m='1759310'>with</span> <span
  m='1759640'>positive</span> <span m='1760300'>numbers</span> <span
  m='1761740'>of</span> <span m='1761950'>this</span> <span
  m='1762220'>eigenvector--</span> <span m='1763000'>so</span> <span
  m='1763210'>the</span> <span m='1763360'>positive</span> <span
  m='1769480'>components</span> <span m='1771190'>of</span> <span
  m='1771520'>x--</span> <span m='1774890'>of--</span> <span
  m='1777580'>this</span> <span m='1778690'>eigenvector.</span> </p><p><span
  m='1782480'>And</span> <span m='1782810'>there</span> <span
  m='1783020'>are</span> <span m='1783080'>negative</span> <span
  m='1783620'>components</span> <span m='1784280'>of</span> <span
  m='1784400'>this</span> <span m='1785120'>eigenvector.</span> <span
  m='1785780'>And</span> <span m='1785960'>those</span> <span
  m='1786260'>are</span> <span m='1786310'>the</span> <span
  m='1786470'>two</span> <span m='1786710'>clusters.</span> <span
  m='1791930'>So</span> <span m='1793310'>it's--</span> <span
  m='1793940'>the</span> <span m='1794060'>cluster</span> <span
  m='1794660'>is--</span> <span m='1795070'>the</span> <span
  m='1795260'>two</span> <span m='1795440'>clusters</span> <span
  m='1795980'>are</span> <span m='1796070'>decided</span> <span
  m='1796730'>by</span> <span m='1797120'>the</span> <span
  m='1797330'>eigenvector--</span> <span m='1798620'>by</span> <span
  m='1798800'>the</span> <span m='1798950'>signs--</span> <span
  m='1799700'>plus</span> <span m='1800090'>or</span> <span
  m='1800180'>minus</span> <span m='1800540'>signs</span> <span
  m='1800990'>of</span> <span m='1801110'>the</span> <span
  m='1801200'>components.</span> <span m='1802910'>The</span> <span
  m='1803750'>plus</span> <span m='1804050'>signs</span> <span
  m='1804410'>go</span> <span m='1804590'>in</span> <span m='1804710'>one</span>
  <span m='1805100'>and</span> <span m='1805220'>the</span> <span
  m='1805280'>minus</span> <span m='1805640'>signs</span> <span
  m='1806080'>go</span> <span m='1806270'>in</span> <span
  m='1806390'>another.</span> <span m='1806810'>And</span> <span
  m='1806960'>you</span> <span m='1807050'>have</span> <span
  m='1807230'>to</span> <span m='1807980'>experiment</span> <span
  m='1808910'>to</span> <span m='1809120'>see</span> <span
  m='1810290'>that</span> <span m='1810470'>that</span> <span
  m='1810680'>would</span> <span m='1810920'>succeed.</span> <span
  m='1812450'>I</span> <span m='1812750'>don't</span> <span
  m='1812900'>know</span> <span m='1812990'>what</span> <span
  m='1813200'>it</span> <span m='1813290'>would</span> <span
  m='1813440'>do</span> <span m='1813770'>on</span> <span
  m='1813950'>this,</span> <span m='1814460'>actually,</span> <span
  m='1815810'>because</span> <span m='1816200'>that's</span> <span
  m='1816680'>hardly</span> <span m='1817460'>split</span> <span
  m='1818060'>up</span> <span m='1818300'>into</span> <span
  m='1818580'>two.</span> <span m='1819980'>I</span> <span
  m='1820130'>suppose</span> <span m='1820790'>maybe</span> <span
  m='1821150'>the</span> <span m='1821300'>split</span> <span
  m='1821810'>is</span> <span m='1821990'>along</span> <span
  m='1822440'>a</span> <span m='1822530'>line</span> <span
  m='1822860'>like</span> <span m='1823160'>that</span> <span
  m='1823460'>or</span> <span m='1823580'>something,</span> <span
  m='1824110'>to</span> <span m='1824850'>get--</span> <span
  m='1825080'>I</span> <span m='1825170'>don't</span> <span
  m='1825350'>know</span> <span m='1825470'>what</span> <span
  m='1825710'>clustering.</span> </p><p><span m='1826880'>This</span> <span
  m='1827150'>is</span> <span m='1827270'>not</span> <span m='1827570'>a</span>
  <span m='1827630'>graph</span> <span m='1828110'>that</span> <span
  m='1828320'>is</span> <span m='1829070'>naturally</span> <span
  m='1829790'>clustered,</span> <span m='1831770'>but</span> <span
  m='1832250'>you</span> <span m='1832490'>could</span> <span
  m='1832670'>still</span> <span m='1833990'>do</span> <span
  m='1834860'>k-means</span> <span m='1835640'>on</span> <span
  m='1835790'>it.</span> <span m='1836480'>You</span> <span
  m='1836630'>could</span> <span m='1836840'>still</span> <span
  m='1837230'>do</span> <span m='1839090'>spectral</span> <span
  m='1839600'>clustering.</span> <span m='1840740'>And</span> <span
  m='1840920'>you</span> <span m='1841010'>would</span> <span
  m='1841190'>find</span> <span m='1841520'>this</span> <span
  m='1841760'>eigenvector.</span> <span m='1842480'>Now</span> <span
  m='1842660'>what's</span> <span m='1842960'>the</span> <span
  m='1843080'>point</span> <span m='1843380'>about</span> <span
  m='1843650'>this</span> <span m='1843950'>eigenvector?</span> <span
  m='1846080'>I'll</span> <span m='1846230'>finish</span> <span
  m='1846590'>in</span> <span m='1846710'>one</span> <span
  m='1846950'>moment.</span> <span m='1848220'>What</span> <span
  m='1848480'>do</span> <span m='1848540'>we</span> <span
  m='1848690'>know</span> <span m='1848960'>about</span> <span
  m='1849320'>that</span> <span m='1849800'>eigenvector</span> <span
  m='1851150'>as</span> <span m='1851360'>compared</span> <span
  m='1851840'>to</span> <span m='1852020'>that</span> <span
  m='1852260'>one?</span> <span m='1853530'>So</span> <span
  m='1853640'>here</span> <span m='1853880'>was</span> <span
  m='1854090'>an</span> <span m='1854270'>eigenvector</span> <span
  m='1854960'>all</span> <span m='1855200'>1's.</span> <span
  m='1855710'>Let</span> <span m='1855860'>me</span> <span
  m='1855980'>just</span> <span m='1856190'>make</span> <span
  m='1856460'>it</span> <span m='1856550'>all</span> <span
  m='1856760'>1's,</span> <span m='1858060'>1,</span> <span
  m='1858450'>1,</span> <span m='1858810'>1,</span> <span m='1859170'>1.</span>
  <span m='1860150'>In</span> <span m='1860270'>that</span> <span
  m='1860720'>picture,</span> <span m='1861320'>it's</span> <span
  m='1861810'>25</span> <span m='1862620'>1's.</span> <span
  m='1863890'>Here's</span> <span m='1864830'>the</span> <span
  m='1865040'>next</span> <span m='1865460'>eigenvector</span> <span
  m='1866240'>up.</span> <span m='1867320'>And</span> <span
  m='1867860'>what's</span> <span m='1868310'>the</span> <span
  m='1868400'>relation</span> <span m='1868940'>between</span> <span
  m='1869390'>those</span> <span m='1869720'>two</span> <span
  m='1870020'>eigenvectors</span> <span m='1870440'>of</span> <span
  m='1870860'>L?</span> <span m='1872320'>They</span> <span
  m='1872560'>are--</span> </p><p><span m='1873964'>AUDIENCE:</span> <span
  m='1874187'>Orthogonal.</span> </p><p><span m='1874860'>GILBERT STRANG:</span>
  <span m='1875032'>Orthogonal.</span> <span m='1875970'>These</span> <span
  m='1876240'>are</span> <span m='1876390'>eigenvectors</span> <span
  m='1877230'>of</span> <span m='1877380'>a</span> <span
  m='1877440'>symmetric</span> <span m='1878040'>matrix.</span> <span
  m='1879460'>So</span> <span m='1879570'>they're</span> <span
  m='1879810'>orthogonal.</span> <span m='1880920'>So</span> <span
  m='1881280'>that</span> <span m='1881520'>means--</span> <span
  m='1882690'>to</span> <span m='1882840'>be</span> <span
  m='1883020'>orthogonal</span> <span m='1883710'>to</span> <span
  m='1883890'>this</span> <span m='1884170'>guy</span> <span
  m='1885540'>means</span> <span m='1885840'>that</span> <span
  m='1886020'>your</span> <span m='1886140'>components</span> <span
  m='1886770'>add</span> <span m='1886980'>to</span> <span m='1887040'>0,</span>
  <span m='1887490'>right?</span> <span m='1888195'>A</span> <span
  m='1888570'>Vector.</span> <span m='1889020'>Is</span> <span
  m='1889230'>orthogonal</span> <span m='1889890'>to</span> <span
  m='1890100'>all</span> <span m='1890340'>1's.</span> <span
  m='1891510'>That</span> <span m='1891780'>dot</span> <span
  m='1892110'>product</span> <span m='1892620'>is</span> <span
  m='1892770'>just,</span> <span m='1893220'>add</span> <span
  m='1893400'>up</span> <span m='1893550'>the</span> <span
  m='1893640'>components.</span> <span m='1894750'>So</span> <span
  m='1894930'>we</span> <span m='1895080'>have</span> <span m='1895200'>a</span>
  <span m='1895260'>bunch</span> <span m='1895560'>of</span> <span
  m='1895620'>positive</span> <span m='1896130'>components</span> <span
  m='1896760'>and</span> <span m='1896910'>a</span> <span
  m='1896940'>bunch</span> <span m='1897210'>of</span> <span
  m='1897300'>negative</span> <span m='1897780'>components.</span> <span
  m='1898740'>They</span> <span m='1898830'>have</span> <span
  m='1898950'>the</span> <span m='1899070'>same</span> <span
  m='1899520'>sum,</span> <span m='1900960'>because</span> <span
  m='1901380'>the</span> <span m='1901530'>dot</span> <span
  m='1901830'>product</span> <span m='1902910'>with</span> <span
  m='1903180'>that</span> <span m='1903630'>is</span> <span
  m='1903750'>0.</span> </p><p><span m='1904620'>And</span> <span
  m='1905070'>those</span> <span m='1905430'>two</span> <span
  m='1905700'>components--</span> <span m='1906420'>those</span> <span
  m='1906690'>two</span> <span m='1907290'>sets</span> <span
  m='1907650'>of</span> <span m='1907770'>components</span> <span
  m='1908400'>are</span> <span m='1908610'>your--</span> <span
  m='1909540'>to</span> <span m='1910590'>tell</span> <span
  m='1910860'>you</span> <span m='1911010'>the</span> <span
  m='1911130'>two</span> <span m='1911370'>clusters</span> <span
  m='1912570'>in</span> <span m='1912780'>spectral</span> <span
  m='1913260'>clustering.</span> <span m='1914250'>So</span> <span
  m='1915000'>it's</span> <span m='1915240'>a</span> <span
  m='1915300'>pretty</span> <span m='1916110'>nifty</span> <span
  m='1917430'>algorithm.</span> <span m='1918810'>It</span> <span
  m='1918930'>does</span> <span m='1919260'>ask</span> <span
  m='1919590'>you</span> <span m='1919740'>to</span> <span
  m='1919890'>compute</span> <span m='1921130'>an</span> <span
  m='1921300'>eigenvector.</span> <span m='1922920'>And</span> <span
  m='1924300'>that,</span> <span m='1924960'>of</span> <span
  m='1925050'>course,</span> <span m='1925290'>takes</span> <span
  m='1925590'>time.</span> <span m='1926350'>And</span> <span
  m='1926400'>then</span> <span m='1926640'>there's</span> <span
  m='1926910'>a</span> <span m='1927000'>third,</span> <span
  m='1927600'>more</span> <span m='1928050'>direct</span> <span
  m='1929630'>algorithm</span> <span m='1930400'>to</span> <span
  m='1931980'>do</span> <span m='1932310'>this</span> <span
  m='1932850'>optimization</span> <span m='1933750'>problem.</span> <span
  m='1934140'>Well,</span> <span m='1934380'>actually,</span> <span
  m='1934800'>there</span> <span m='1934950'>are</span> <span
  m='1935010'>many.</span> <span m='1935970'>This</span> <span
  m='1936240'>is</span> <span m='1936390'>an</span> <span
  m='1936510'>important</span> <span m='1936930'>problem,</span> <span
  m='1937350'>so</span> <span m='1937560'>there</span> <span
  m='1937680'>are</span> <span m='1937710'>many</span> <span
  m='1938070'>proposed</span> <span m='1938670'>algorithms.</span> <span
  m='1939510'>Good.</span> <span m='1940080'>OK.</span> <span
  m='1940470'>I'm</span> <span m='1940680'>closing</span> <span
  m='1941400'>up.</span> <span m='1942360'>Final</span> <span
  m='1942690'>question.</span> <span m='1943160'>Yeah?</span> </p><p><span
  m='1943320'>AUDIENCE:</span> <span m='1943475'>Is</span> <span
  m='1943630'>it</span> <span m='1943785'>possible</span> <span
  m='1943901'>to</span> <span m='1944017'>do</span> <span
  m='1944133'>more</span> <span m='1944250'>than</span> <span
  m='1944715'>two</span> <span m='1944947'>clusters?</span> </p><p><span
  m='1946110'>GILBERT STRANG:</span> <span m='1946245'>Well,</span> <span
  m='1946380'>certainly</span> <span m='1946830'>for</span> <span
  m='1947000'>k-means.</span> <span m='1948480'>Now,</span> <span
  m='1948720'>if</span> <span m='1948900'>I</span> <span m='1949050'>had</span>
  <span m='1949170'>to</span> <span m='1949290'>do</span> <span
  m='1949500'>three</span> <span m='1949830'>clusters</span> <span
  m='1950400'>with</span> <span m='1950640'>Fiedler,</span> <span
  m='1951870'>I</span> <span m='1951990'>would</span> <span
  m='1952170'>look</span> <span m='1952410'>at</span> <span
  m='1952500'>the</span> <span m='1952620'>first</span> <span
  m='1953010'>three</span> <span m='1953460'>eigenvectors.</span> <span
  m='1954740'>And,</span> <span m='1955420'>well,</span> <span
  m='1955710'>the</span> <span m='1955830'>first</span> <span
  m='1956160'>one</span> <span m='1956370'>would</span> <span
  m='1956550'>be</span> <span m='1957360'>nothing.</span> <span
  m='1957780'>And</span> <span m='1957870'>I</span> <span
  m='1957930'>would</span> <span m='1958020'>look</span> <span
  m='1958260'>at</span> <span m='1958350'>the</span> <span
  m='1958440'>next</span> <span m='1958810'>two.</span> <span
  m='1959790'>And</span> <span m='1959940'>that</span> <span
  m='1960120'>would</span> <span m='1960600'>be</span> <span
  m='1961050'>pretty</span> <span m='1961410'>successful.</span> <span
  m='1962790'>If</span> <span m='1962940'>I</span> <span
  m='1963060'>wanted</span> <span m='1963390'>six</span> <span
  m='1963810'>clusters,</span> <span m='1964440'>it</span> <span
  m='1964560'>probably</span> <span m='1965130'>would</span> <span
  m='1965310'>fall</span> <span m='1965700'>off</span> <span
  m='1966630'>in</span> <span m='1967080'>the</span> <span
  m='1967170'>quality</span> <span m='1967770'>of</span> <span
  m='1968480'>the</span> <span m='1968670'>clustering.</span> <span
  m='1969780'>Yeah.</span> <span m='1970200'>But</span> <span
  m='1970420'>that</span> <span m='1971040'>certainly--</span> <span
  m='1971520'>I</span> <span m='1971640'>would</span> <span
  m='1971760'>look</span> <span m='1971970'>at</span> <span
  m='1972090'>the</span> <span m='1972510'>lowest</span> <span
  m='1972930'>six</span> <span m='1973380'>eigenvectors,</span> <span
  m='1974760'>and</span> <span m='1976020'>get</span> <span
  m='1976230'>somewhere.</span> <span m='1976920'>Yeah.</span> <span
  m='1977880'>Right.</span> <span m='1978420'>So</span> <span
  m='1979620'>OK.</span> <span m='1980040'>So</span> <span
  m='1980280'>that's</span> <span m='1980640'>a</span> <span
  m='1981240'>topic--</span> <span m='1982050'>an</span> <span
  m='1982370'>important</span> <span m='1982770'>topic--</span> <span
  m='1983220'>a</span> <span m='1983530'>sort</span> <span m='1983750'>of</span>
  <span m='1983820'>standard</span> <span m='1984450'>topic</span> <span
  m='1985020'>in</span> <span m='1987540'>applied</span> <span
  m='1987960'>graph</span> <span m='1988320'>theory.</span> <span
  m='1989820'>OK.</span> </p><p><span m='1990360'>So</span> <span
  m='1991350'>see</span> <span m='1991600'>you</span> <span
  m='1991710'>Wednesday.</span> <span m='1992550'>I'm</span> <span
  m='1992760'>hoping,</span> <span m='1996150'>on</span> <span
  m='1996360'>Wednesday--</span> <span m='1997710'>so</span> <span
  m='1997950'>Professor</span> <span m='1998580'>Edelman</span> <span
  m='1999150'>has</span> <span m='1999390'>told</span> <span
  m='1999780'>me</span> <span m='2000510'>a</span> <span m='2000820'>new</span>
  <span m='2001430'>and</span> <span m='2002900'>optimal</span> <span
  m='2003470'>way</span> <span m='2004040'>to</span> <span
  m='2004250'>look</span> <span m='2004760'>at</span> <span
  m='2006230'>the</span> <span m='2007880'>problem</span> <span
  m='2008300'>of</span> <span m='2008720'>backpropagation.</span> <span
  m='2009995'>Do you</span> <span m='2010430'>remember</span> <span
  m='2011060'>backpropagation?</span> <span m='2012680'>If</span> <span
  m='2012860'>you</span> <span m='2012980'>remember</span> <span
  m='2013400'>the</span> <span m='2013520'>lecture</span> <span
  m='2013970'>on</span> <span m='2014150'>it--</span> <span
  m='2014600'>you</span> <span m='2014750'>don't</span> <span
  m='2016310'>want</span> <span m='2016520'>to</span> <span
  m='2016610'>remember</span> <span m='2017060'>the</span> <span
  m='2017210'>lecture</span> <span m='2017660'>on</span> <span
  m='2017780'>it.</span> <span m='2019300'>It's</span> <span
  m='2019670'>a</span> <span m='2019730'>tricky,</span> <span
  m='2020480'>messy</span> <span m='2022190'>thing</span> <span
  m='2022460'>to</span> <span m='2022640'>explain.</span> <span
  m='2023990'>But</span> <span m='2024190'>he</span> <span
  m='2024860'>says,</span> <span m='2026240'>if</span> <span
  m='2026450'>I</span> <span m='2026600'>explain</span> <span
  m='2027080'>it</span> <span m='2027260'>using</span> <span
  m='2027740'>Julia</span> <span m='2028340'>in</span> <span
  m='2028550'>linear</span> <span m='2028910'>algebra,</span> <span
  m='2030110'>it's</span> <span m='2031070'>clear.</span> <span
  m='2032060'>So</span> <span m='2032450'>we'll</span> <span
  m='2032720'>give</span> <span m='2032960'>him</span> <span
  m='2033110'>a</span> <span m='2033170'>chance</span> <span
  m='2033650'>on</span> <span m='2033860'>Wednesday</span> <span
  m='2034580'>to</span> <span m='2034850'>show</span> <span
  m='2035240'>that</span> <span m='2037100'>revolutionary</span> <span
  m='2038660'>approach</span> <span m='2039240'>to</span> <span
  m='2041030'>the</span> <span m='2041240'>explanation</span> <span
  m='2042110'>of</span> <span m='2042530'>backpropagation.</span> </p><p><span
  m='2043640'>And</span> <span m='2044690'>I</span> <span
  m='2044840'>hope</span> <span m='2045170'>for--</span> <span
  m='2046340'>I</span> <span m='2046460'>told</span> <span
  m='2046750'>him</span> <span m='2047270'>he</span> <span
  m='2047390'>could</span> <span m='2047570'>have</span> <span
  m='2047780'>half</span> <span m='2048050'>an</span> <span
  m='2048170'>hour,</span> <span m='2048620'>and</span> <span
  m='2049270'>projects</span> <span m='2049830'>would</span> <span
  m='2050130'>take</span> <span m='2050900'>some</span> <span
  m='2051139'>time.</span> <span m='2051800'>I</span> <span
  m='2052400'>hope--</span> <span m='2053030'>now</span> <span
  m='2053210'>we've</span> <span m='2053389'>had</span> <span
  m='2053510'>two</span> <span m='2054440'>with</span> <span
  m='2054679'>wild</span> <span m='2055130'>applause.</span> <span
  m='2055730'>So</span> <span m='2057020'>I</span> <span m='2057139'>hope</span>
  <span m='2057710'>we</span> <span m='2057889'>get</span> <span
  m='2058310'>a</span> <span m='2058370'>couple</span> <span
  m='2058730'>more</span> <span m='2060340'>in</span> <span
  m='2060530'>our</span> <span m='2060650'>last</span> <span
  m='2060949'>class.</span> <span m='2062030'>OK.</span> <span
  m='2062420'>See</span> <span m='2062630'>you</span> <span
  m='2062810'>Wednesday.</span> <span m='2063440'>And</span> <span
  m='2064370'>if</span> <span m='2064610'>you</span> <span
  m='2064730'>bring--</span> <span m='2065360'>well,</span> <span
  m='2065840'>if</span> <span m='2066020'>you</span> <span
  m='2066110'>have</span> <span m='2066230'>projects</span> <span
  m='2066739'>ready,</span> <span m='2068840'>send</span> <span
  m='2069170'>them</span> <span m='2069380'>to</span> <span
  m='2069590'>me</span> <span m='2069800'>online,</span> <span
  m='2070460'>and</span> <span m='2070580'>maybe</span> <span
  m='2070909'>a</span> <span m='2070969'>print</span> <span
  m='2071449'>out</span> <span m='2071570'>as</span> <span
  m='2071719'>well.</span> <span m='2073489'>That</span> <span
  m='2073699'>would</span> <span m='2073820'>be</span> <span
  m='2074030'>terrific.</span> <span m='2075170'>If</span> <span
  m='2075560'>you</span> <span m='2075710'>don't</span> <span
  m='2076010'>have</span> <span m='2076250'>them</span> <span
  m='2076429'>ready</span> <span m='2076730'>by</span> <span
  m='2077000'>the</span> <span m='2077179'>hour,</span> <span
  m='2078620'>they</span> <span m='2078920'>can</span> <span
  m='2080060'>go--</span> <span m='2081080'>the</span> <span
  m='2081320'>envelope</span> <span m='2081770'>outside</span> <span
  m='2082159'>my</span> <span m='2082370'>office</span> <span
  m='2082820'>would</span> <span m='2083060'>receive</span> <span
  m='2083480'>them.</span> <span m='2083780'>Good.</span> <span
  m='2084199'>So</span> <span m='2084469'>I'll</span> <span
  m='2084530'>see</span> <span m='2084679'>you</span> <span
  m='2084800'>Wednesday</span> <span m='2085730'>for</span> <span
  m='2086030'>the</span> <span m='2086179'>final</span> <span
  m='2086540'>class.</span> </p>
uid: 3d3111b5d8ec1cc04ce6e84c758a5976
type: courses
layout: video
---
