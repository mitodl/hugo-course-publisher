---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>A norm is a way to measure the size of
  a vector, a matrix, a tensor, or a function. Professor Strang reviews a
  variety of norms that are important to understand including S-norms, the
  nuclear norm, and the Frobenius norm.</p> <h2 class="subhead">Summary</h2>
  <p>The  \(\ell^1\) and \(\ell^2\) and \(\ell^\infty\) norms of vectors<br />
  The unit ball of vectors with norm \(\leq\) 1<br /> Matrix norm = largest
  growth factor = max \( \Vert Ax \Vert / \Vert x \Vert\)<br /> Orthogonal
  matrices have \(\Vert Q \Vert_2 = 1\) and \(\Vert Q \Vert^2_F = n\)</p>
  <p>Related section in textbook: I.11</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: NcPUI7aPFhA
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: Video-YouTube-Stream
    type: Video
    uid: f7347f253c6ff7977d933aed30e30354
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/NcPUI7aPFhA/default.jpg'
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7f6e5b11d9773942ecfc006bbeb38119
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: NcPUI7aPFhA
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f96b93d819a7364c8570c303fe066cc7
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture08_300k.mp4'
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 88383d1d75da2e0d92ea6fd91a6eb9ba
  - id: NcPUI7aPFhA.srt
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-8-norms-of-vectors-and-matrices/NcPUI7aPFhA.srt
    title: 3play caption file
    type: null
    uid: 47b35f4407a2d747d81b889b8e66dd08
  - id: NcPUI7aPFhA.pdf
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-8-norms-of-vectors-and-matrices/NcPUI7aPFhA.pdf
    title: 3play pdf file
    type: null
    uid: 25e57797fbba8da09ee6b4a91b31232e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7d8ef31cf42c22efd6c4c6500125733f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: eada4a9cece40c77ae4e54ab2b6f8e6a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 84bd66920688369129cf3d9900d060b2
inline_embed_id: 13007276lecture8normsofvectorsandmatrices97302910
order_index: 97
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-8-norms-of-vectors-and-matrices
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-8-norms-of-vectors-and-matrices
title: 'Lecture 8: Norms of Vectors and Matrices'
transcript: >-
  <p><span m='1550'>The</span> <span m='1640'>following</span> <span
  m='2090'>content</span> <span m='2600'>is</span> <span
  m='2720'>provided</span> <span m='3170'>under</span> <span m='3380'>a</span>
  <span m='3440'>Creative</span> <span m='3920'>Commons</span> <span
  m='4310'>license.</span> <span m='5310'>Your</span> <span
  m='5390'>support</span> <span m='5900'>will</span> <span m='6050'>help</span>
  <span m='6320'>MIT</span> <span m='6770'>OpenCourseWare</span> <span
  m='7520'>continue</span> <span m='8029'>to</span> <span m='8180'>offer</span>
  <span m='8510'>high-quality</span> <span m='9200'>educational</span> <span
  m='9860'>resources</span> <span m='10430'>for</span> <span
  m='10550'>free.</span> <span m='11610'>To</span> <span m='11630'>make</span>
  <span m='11840'>a</span> <span m='11900'>donation</span> <span
  m='12680'>or</span> <span m='12800'>to</span> <span m='12950'>view</span>
  <span m='13160'>additional</span> <span m='13550'>materials</span> <span
  m='14180'>from</span> <span m='14360'>hundreds</span> <span
  m='14690'>of</span> <span m='14810'>MIT</span> <span m='15170'>courses,</span>
  <span m='16470'>visit</span> <span m='16670'>MIT</span> <span
  m='17180'>OpenCourseWare</span> <span m='18140'>at</span> <span
  m='18540'>ocw.mit.edu.</span> </p><p><span m='22470'>GILBERT STRANG:</span>
  <span m='22705'>OK,</span> <span m='22940'>let</span> <span
  m='23060'>me</span> <span m='23180'>start</span> <span m='23810'>one</span>
  <span m='24020'>minute</span> <span m='24380'>early.</span> <span
  m='28300'>So</span> <span m='28840'>this</span> <span m='29110'>being</span>
  <span m='29420'>MIT,</span> <span m='30200'>I</span> <span
  m='30370'>just</span> <span m='30640'>came</span> <span m='31060'>from</span>
  <span m='31330'>a</span> <span m='32920'>terrific</span> <span
  m='34360'>faculty</span> <span m='34750'>member,</span> <span
  m='35140'>Andy</span> <span m='35530'>Lowe</span> <span m='36380'>in</span>
  <span m='38910'>the</span> <span m='39160'>Sloan</span> <span
  m='39550'>School,</span> <span m='40510'>and</span> <span m='40960'>I</span>
  <span m='41050'>have</span> <span m='41200'>to</span> <span
  m='41350'>tell</span> <span m='41560'>you</span> <span m='41710'>what</span>
  <span m='41900'>he</span> <span m='42010'>told</span> <span
  m='42490'>us.</span> <span m='43070'>And</span> <span m='43120'>then</span>
  <span m='43330'>I</span> <span m='43420'>had</span> <span m='44020'>to</span>
  <span m='44110'>leave</span> <span m='44620'>before</span> <span
  m='45010'>he</span> <span m='45130'>could</span> <span
  m='46090'>explain</span> <span m='46660'>why</span> <span
  m='46930'>it's</span> <span m='47170'>true,</span> <span m='48250'>but</span>
  <span m='48490'>this</span> <span m='48700'>is</span> <span
  m='48880'>like</span> <span m='49120'>an</span> <span m='49210'>amazing</span>
  <span m='49750'>fact</span> <span m='50230'>which</span> <span
  m='50530'>I</span> <span m='50980'>don't</span> <span m='51190'>want</span>
  <span m='51340'>to</span> <span m='51400'>forget,</span> <span
  m='52300'>so</span> <span m='52900'>here</span> <span m='53080'>you</span>
  <span m='53200'>go.</span> <span m='54730'>Everything</span> <span
  m='55210'>will</span> <span m='55300'>be</span> <span m='55480'>on</span>
  <span m='55600'>that</span> <span m='55780'>board.</span> </p><p><span
  m='57380'>So</span> <span m='57790'>it's</span> <span m='58030'>an</span>
  <span m='58180'>observation</span> <span m='59080'>about</span> <span
  m='59680'>us</span> <span m='61300'>or</span> <span m='62170'>other</span>
  <span m='62410'>people,</span> <span m='64000'>maybe</span> <span
  m='64330'>not</span> <span m='64660'>us.</span> <span m='66010'>So</span>
  <span m='67000'>suppose</span> <span m='67450'>you</span> <span
  m='67540'>have</span> <span m='67870'>a</span> <span m='67960'>biased</span>
  <span m='68740'>coin.</span> <span m='69730'>Maybe</span> <span
  m='70840'>the</span> <span m='71080'>people</span> <span
  m='71470'>playing</span> <span m='71860'>this</span> <span
  m='72130'>game</span> <span m='72430'>don't</span> <span
  m='72730'>know,</span> <span m='73870'>but</span> <span m='74320'>it's</span>
  <span m='74510'>75%</span> <span m='76030'>likely</span> <span
  m='76540'>to</span> <span m='76660'>produce</span> <span
  m='77110'>heads,</span> <span m='77950'>25%</span> <span
  m='79060'>likely</span> <span m='79540'>to</span> <span
  m='79660'>produce</span> <span m='80680'>tails.</span> <span
  m='82180'>And</span> <span m='82330'>then</span> <span m='82960'>the</span>
  <span m='83110'>player</span> <span m='84430'>has</span> <span
  m='84730'>to</span> <span m='84880'>guess</span> <span m='86320'>for</span>
  <span m='86530'>one</span> <span m='87010'>flip</span> <span
  m='87520'>after</span> <span m='87910'>another</span> <span
  m='89960'>heads</span> <span m='90290'>or</span> <span m='90410'>tails,</span>
  <span m='92780'>and</span> <span m='95300'>you</span> <span
  m='95420'>get</span> <span m='95630'>$1</span> <span m='96110'>if</span> <span
  m='96230'>you're</span> <span m='96380'>right,</span> <span
  m='96860'>you</span> <span m='97160'>pay</span> <span m='97430'>$1</span>
  <span m='97970'>if</span> <span m='98120'>you're</span> <span
  m='98270'>wrong.</span> <span m='99530'>So</span> <span m='99770'>you</span>
  <span m='99920'>just</span> <span m='100250'>want</span> <span
  m='100490'>to</span> <span m='100580'>get</span> <span m='100880'>as</span>
  <span m='101030'>many</span> <span m='101570'>right</span> <span
  m='102950'>choices</span> <span m='103700'>as</span> <span
  m='103880'>possible</span> <span m='104780'>from</span> <span
  m='105050'>this</span> <span m='105890'>coin</span> <span
  m='106250'>flip</span> <span m='106640'>that</span> <span
  m='106910'>continues.</span> </p><p><span m='108510'>So</span> <span
  m='108620'>what</span> <span m='108920'>should</span> <span
  m='109160'>you</span> <span m='109280'>do?</span> <span m='111120'>Well</span>
  <span m='113450'>what</span> <span m='114530'>I</span> <span
  m='114650'>hope</span> <span m='114920'>we</span> <span
  m='115190'>would</span> <span m='115400'>do</span> <span m='116450'>is</span>
  <span m='117410'>we</span> <span m='117650'>would</span> <span
  m='118040'>not</span> <span m='118370'>know</span> <span
  m='119000'>what</span> <span m='119390'>the</span> <span
  m='119840'>probabilities</span> <span m='120770'>were,</span> <span
  m='122510'>so</span> <span m='122720'>we</span> <span m='122870'>would</span>
  <span m='123080'>guess</span> <span m='123410'>maybe</span> <span
  m='123740'>heads</span> <span m='124100'>the</span> <span
  m='124160'>first</span> <span m='124430'>time,</span> <span
  m='124700'>tails</span> <span m='125120'>the</span> <span
  m='125300'>second</span> <span m='125570'>time,</span> <span
  m='125870'>heads</span> <span m='126210'>the</span> <span
  m='126280'>third</span> <span m='126500'>time,</span> <span
  m='127400'>and</span> <span m='128870'>so</span> <span m='129110'>on.</span>
  <span m='130590'>But</span> <span m='131160'>the</span> <span
  m='131280'>actual</span> <span m='131730'>result</span> <span
  m='132300'>would</span> <span m='132540'>be</span> <span
  m='132900'>mostly</span> <span m='133410'>heads,</span> <span
  m='135270'>so</span> <span m='135480'>we</span> <span m='135720'>would</span>
  <span m='135930'>learn</span> <span m='137310'>at</span> <span
  m='137490'>some</span> <span m='137730'>point</span> <span
  m='138240'>that--</span> <span m='138630'>maybe</span> <span
  m='139560'>not</span> <span m='139800'>quite</span> <span m='140130'>as</span>
  <span m='140220'>soon</span> <span m='140520'>as</span> <span
  m='140670'>that.</span> <span m='141330'>We</span> <span
  m='141510'>would</span> <span m='142050'>eventually</span> <span
  m='142680'>learn</span> <span m='144540'>that</span> <span
  m='144660'>we</span> <span m='144810'>should</span> <span
  m='144990'>keep</span> <span m='145230'>guessing</span> <span
  m='145680'>heads,</span> <span m='146130'>right?</span> <span
  m='146610'>And</span> <span m='148720'>that</span> <span
  m='148870'>would</span> <span m='149020'>be</span> <span m='149170'>our</span>
  <span m='149350'>optimal</span> <span m='149830'>strategy,</span> <span
  m='150430'>to</span> <span m='150550'>guess</span> <span
  m='150850'>heads</span> <span m='151240'>all</span> <span
  m='151420'>the</span> <span m='151540'>time.</span> </p><p><span
  m='152500'>But</span> <span m='152710'>what</span> <span m='152980'>do</span>
  <span m='153130'>people</span> <span m='153610'>actually</span> <span
  m='154210'>do?</span> <span m='156620'>They</span> <span
  m='159330'>start</span> <span m='159900'>like</span> <span
  m='160140'>this,</span> <span m='160830'>the</span> <span
  m='161400'>same</span> <span m='161820'>way,</span> <span
  m='163950'>and</span> <span m='164190'>then</span> <span
  m='164790'>they're</span> <span m='164970'>beginning</span> <span
  m='165510'>to</span> <span m='165660'>learn</span> <span
  m='166020'>that</span> <span m='166200'>heads</span> <span
  m='166710'>is</span> <span m='167310'>more</span> <span
  m='167580'>common.</span> <span m='168730'>So</span> <span
  m='168810'>maybe</span> <span m='169170'>they</span> <span
  m='170130'>do</span> <span m='170790'>more</span> <span
  m='171150'>heads</span> <span m='173610'>than</span> <span
  m='173760'>tails,</span> <span m='175460'>but</span> <span
  m='175680'>sometimes</span> <span m='176220'>tails</span> <span
  m='176650'>is</span> <span m='176820'>right,</span> <span
  m='177270'>and</span> <span m='177390'>then</span> <span
  m='177600'>after</span> <span m='177930'>a</span> <span
  m='177960'>little</span> <span m='178200'>while,</span> <span
  m='179440'>they</span> <span m='179630'>maybe</span> <span
  m='181370'>see</span> <span m='181970'>that</span> <span
  m='182180'>it's--</span> <span m='182510'>yeah.</span> <span
  m='184430'>Well</span> <span m='184680'>maybe</span> <span
  m='184940'>they're</span> <span m='185120'>not</span> <span
  m='185780'>counting,</span> <span m='186410'>they're</span> <span
  m='186620'>just</span> <span m='187970'>operating</span> <span
  m='188540'>like</span> <span m='188780'>ordinary</span> <span
  m='189230'>people.</span> </p><p><span m='191060'>And</span> <span
  m='191270'>what</span> <span m='191540'>do</span> <span
  m='191660'>ordinary</span> <span m='192200'>people</span> <span
  m='192590'>actually</span> <span m='193130'>do</span> <span
  m='193430'>in</span> <span m='193550'>the</span> <span m='193640'>long</span>
  <span m='194030'>run?</span> <span m='196270'>You</span> <span
  m='196430'>would</span> <span m='196610'>think</span> <span
  m='197090'>guess</span> <span m='197420'>heads</span> <span
  m='197720'>every</span> <span m='197990'>time,</span> <span
  m='198380'>right?</span> <span m='200270'>But</span> <span
  m='200480'>they</span> <span m='200660'>don't.</span> <span
  m='202530'>In</span> <span m='202740'>the</span> <span m='202860'>long</span>
  <span m='203220'>run,</span> <span m='204330'>people</span> <span
  m='204960'>and</span> <span m='205140'>maybe</span> <span
  m='205530'>animals</span> <span m='206130'>and</span> <span
  m='206280'>whatever</span> <span m='207810'>guess</span> <span
  m='208440'>heads</span> <span m='209580'>three quarters</span> <span
  m='210330'>of</span> <span m='210390'>the</span> <span m='210510'>time</span>
  <span m='210990'>and</span> <span m='211110'>tails</span> <span m='211740'>one
  quarter</span> <span m='212430'>of</span> <span m='212520'>the</span> <span
  m='212640'>time.</span> <span m='213300'>Isn't</span> <span
  m='213510'>that</span> <span m='213690'>unbelievable?</span> <span
  m='215310'>They're</span> <span m='215460'>guessing</span> <span
  m='215910'>tails</span> <span m='216630'>a quarter</span> <span
  m='217050'>of</span> <span m='217140'>the</span> <span m='217260'>time</span>
  <span m='218040'>when</span> <span m='218610'>the</span> <span
  m='218850'>odds</span> <span m='219930'>are</span> <span
  m='220770'>never</span> <span m='221080'>changing.</span> <span
  m='222130'>Anyway,</span> <span m='222610'>that's</span> <span
  m='223770'>something</span> <span m='224280'>that</span> <span
  m='224640'>economists</span> <span m='225480'>and</span> <span
  m='227340'>other</span> <span m='227580'>people</span> <span
  m='228000'>have</span> <span m='228210'>to</span> <span
  m='228420'>explain,</span> <span m='229140'>and</span> <span
  m='229860'>if</span> <span m='230040'>I</span> <span m='230220'>had</span>
  <span m='230400'>been</span> <span m='230610'>able</span> <span
  m='230850'>to</span> <span m='230970'>stay</span> <span
  m='231330'>another</span> <span m='231750'>hour,</span> <span
  m='232080'>I</span> <span m='232230'>could</span> <span m='232380'>tell</span>
  <span m='232650'>you</span> <span m='232830'>about</span> <span
  m='233160'>the</span> <span m='233310'>explanation.</span> </p><p><span
  m='237080'>Oh,</span> <span m='237330'>I</span> <span m='237450'>see</span>
  <span m='237690'>I've</span> <span m='237900'>written</span> <span
  m='238300'>that on</span> <span m='238500'>a</span> <span
  m='238560'>board</span> <span m='238890'>that</span> <span m='239070'>I</span>
  <span m='239190'>have</span> <span m='239400'>no</span> <span
  m='239640'>way</span> <span m='239910'>to</span> <span m='240030'>bury,</span>
  <span m='241110'>so</span> <span m='241290'>it's</span> <span
  m='241440'>going</span> <span m='241550'>to</span> <span m='241680'>be</span>
  <span m='241950'>there,</span> <span m='242440'>and</span> <span
  m='242460'>it's</span> <span m='242670'>not</span> <span m='243010'>the</span>
  <span m='243150'>subject</span> <span m='243690'>of</span> <span
  m='244260'>18.065</span> <span m='245880'>but</span> <span
  m='246690'>it's</span> <span m='247500'>kind</span> <span m='247800'>of</span>
  <span m='247920'>amazing.</span> <span m='249060'>All</span> <span
  m='249240'>right,</span> <span m='249930'>so</span> <span
  m='250200'>there's</span> <span m='250470'>good</span> <span
  m='250760'>math</span> <span m='251160'>problems</span> <span
  m='251880'>everywhere.</span> <span m='252930'>OK.</span> <span
  m='253650'>Can</span> <span m='253920'>I</span> <span m='254850'>just</span>
  <span m='255750'>leave</span> <span m='256230'>you</span> <span
  m='256500'>with</span> <span m='256829'>what</span> <span m='257070'>I</span>
  <span m='257279'>know,</span> <span m='258640'>and</span> <span
  m='259050'>if</span> <span m='259200'>I</span> <span m='259350'>learn</span>
  <span m='259680'>more,</span> <span m='260339'>I'll</span> <span
  m='260490'>come</span> <span m='260730'>back</span> <span m='260970'>to</span>
  <span m='261120'>that</span> <span m='261360'>question.</span> <span
  m='262510'>OK.</span> </p><p><span m='264780'>Please</span> <span
  m='265470'>turn</span> <span m='265800'>attention</span> <span
  m='266400'>this</span> <span m='266670'>way,</span> <span
  m='267320'>right?</span> <span m='268630'>Norms.</span> <span
  m='269870'>A</span> <span m='270660'>few</span> <span m='270900'>words</span>
  <span m='271350'>on</span> <span m='271500'>norms,</span> <span
  m='272640'>like</span> <span m='272880'>that</span> <span
  m='273080'>should</span> <span m='273330'>be</span> <span m='273510'>a</span>
  <span m='273570'>word</span> <span m='273990'>in</span> <span
  m='274110'>your</span> <span m='274290'>language.</span> <span
  m='275730'>And</span> <span m='276030'>so</span> <span m='276270'>you</span>
  <span m='276450'>should</span> <span m='276630'>know</span> <span
  m='276810'>what</span> <span m='277020'>it</span> <span
  m='277110'>means</span> <span m='277740'>and</span> <span
  m='278100'>you</span> <span m='278250'>should</span> <span
  m='278460'>know</span> <span m='279370'>a</span> <span m='279570'>few</span>
  <span m='279900'>of</span> <span m='280050'>the</span> <span
  m='280200'>important</span> <span m='280800'>norms.</span> <span
  m='281610'>Again,</span> <span m='282330'>a</span> <span
  m='282420'>norm</span> <span m='282930'>is</span> <span m='283110'>a</span>
  <span m='283170'>way</span> <span m='283380'>to</span> <span
  m='283500'>measure</span> <span m='284880'>the</span> <span
  m='285060'>size</span> <span m='285570'>of</span> <span m='285690'>a</span>
  <span m='285750'>vector</span> <span m='286950'>or</span> <span
  m='287130'>the</span> <span m='287280'>size</span> <span m='287700'>of</span>
  <span m='287820'>a</span> <span m='287880'>matrix</span> <span
  m='289050'>or</span> <span m='289200'>the</span> <span m='289320'>size</span>
  <span m='289740'>of</span> <span m='289860'>a</span> <span
  m='289950'>tensor,</span> <span m='290970'>whatever</span> <span
  m='291390'>we</span> <span m='291570'>have.</span> <span m='292200'>Or</span>
  <span m='292350'>a</span> <span m='292410'>function.</span> <span
  m='293100'>Very</span> <span m='293490'>important.</span> </p><p><span
  m='294490'>A</span> <span m='294600'>norm</span> <span m='294960'>would</span>
  <span m='295080'>be</span> <span m='295290'>a</span> <span
  m='296760'>function</span> <span m='297270'>like</span> <span
  m='297510'>sine</span> <span m='297960'>x.</span> <span m='298800'>From</span>
  <span m='299040'>0</span> <span m='299400'>to</span> <span
  m='299490'>pi,</span> <span m='300060'>what</span> <span
  m='300270'>would</span> <span m='300420'>be</span> <span m='300600'>the</span>
  <span m='300750'>size</span> <span m='301410'>of</span> <span
  m='301530'>that</span> <span m='301800'>function?</span> <span
  m='302760'>Well</span> <span m='303000'>if</span> <span m='303150'>it</span>
  <span m='303240'>was</span> <span m='303540'>2</span> <span
  m='303870'>sine</span> <span m='304230'>x,</span> <span m='304560'>the</span>
  <span m='304710'>size</span> <span m='305100'>would</span> <span
  m='305220'>be</span> <span m='305400'>twice</span> <span m='305820'>as</span>
  <span m='306000'>much,</span> <span m='306970'>so</span> <span
  m='307050'>the</span> <span m='307200'>norm</span> <span
  m='307980'>should</span> <span m='308640'>reflect</span> <span
  m='309120'>that.</span> <span m='312900'>So</span> <span
  m='313260'>yesterday,</span> <span m='314250'>or</span> <span
  m='314850'>Wednesday,</span> <span m='315720'>I</span> <span
  m='316410'>told</span> <span m='316770'>you</span> <span
  m='316950'>that--</span> <span m='317610'>so</span> <span m='318960'>p</span>
  <span m='319350'>equals</span> <span m='319950'>2,</span> <span
  m='321900'>1,</span> <span m='323220'>actually</span> <span
  m='324080'>infinity,</span> <span m='325050'>and</span> <span
  m='325170'>then</span> <span m='325350'>I'm</span> <span
  m='325610'>going</span> <span m='325740'>to</span> <span m='326370'>put</span>
  <span m='326580'>in</span> <span m='327150'>the</span> <span
  m='327540'>0</span> <span m='327960'>norm</span> <span m='328380'>with</span>
  <span m='328530'>a</span> <span m='328680'>question</span> <span
  m='329160'>mark</span> <span m='329490'>because</span> <span
  m='330420'>you'll</span> <span m='330660'>see</span> <span
  m='331980'>that</span> <span m='332190'>it</span> <span m='332340'>has</span>
  <span m='332580'>a</span> <span m='332640'>problem.</span> <span
  m='333270'>But</span> <span m='333480'>let</span> <span m='333630'>me</span>
  <span m='333780'>just</span> <span m='334020'>recall</span> <span
  m='335100'>from</span> <span m='335310'>last</span> <span
  m='335640'>time.</span> <span m='336100'>So</span> <span m='337170'>p</span>
  <span m='337650'>equal to</span> <span m='337770'>2</span> <span
  m='338160'>is</span> <span m='338340'>the</span> <span m='338460'>usual</span>
  <span m='340380'>sum</span> <span m='340740'>of</span> <span
  m='340860'>squares</span> <span m='341430'>square</span> <span
  m='341880'>root.</span> <span m='343110'>Usual</span> <span
  m='343530'>length</span> <span m='343920'>of</span> <span m='344040'>a</span>
  <span m='344100'>vector.</span> </p><p><span m='345090'>p</span> <span
  m='345320'>equal</span> <span m='345600'>1</span> <span m='347460'>is</span>
  <span m='349290'>this</span> <span m='349590'>very</span> <span
  m='349950'>important</span> <span m='350430'>norm,</span> <span
  m='350850'>so</span> <span m='351150'>I</span> <span m='351240'>would</span>
  <span m='351420'>call</span> <span m='351660'>that</span> <span
  m='351900'>the</span> <span m='352050'>l1</span> <span m='352740'>norm,</span>
  <span m='355240'>and</span> <span m='355660'>we'll</span> <span
  m='355900'>see</span> <span m='356140'>a</span> <span m='356230'>lot</span>
  <span m='356470'>of</span> <span m='356590'>that.</span> <span
  m='358690'>I</span> <span m='358810'>mentioned</span> <span
  m='359290'>that</span> <span m='359470'>it</span> <span
  m='359710'>plays</span> <span m='360190'>a</span> <span m='360490'>very</span>
  <span m='360910'>significant</span> <span m='361660'>part</span> <span
  m='361930'>now</span> <span m='362200'>in</span> <span
  m='362320'>compressed</span> <span m='362860'>sensing.</span> <span
  m='363730'>It</span> <span m='363790'>really</span> <span
  m='364150'>was</span> <span m='364330'>a</span> <span
  m='364390'>bombshell</span> <span m='365230'>in</span> <span
  m='365830'>signal</span> <span m='366220'>processing</span> <span
  m='367360'>to</span> <span m='367630'>discover--</span> <span
  m='369010'>and</span> <span m='369250'>in</span> <span m='369400'>other</span>
  <span m='369640'>fields,</span> <span m='370090'>too--</span> <span
  m='370590'>to discover</span> <span m='371290'>that</span> <span
  m='372070'>some</span> <span m='372610'>things</span> <span
  m='373060'>really</span> <span m='373450'>work</span> <span
  m='374670'>best</span> <span m='375160'>in</span> <span m='375280'>the</span>
  <span m='375430'>l1</span> <span m='375880'>norm.</span> <span
  m='377220'>The</span> <span m='377350'>maximum</span> <span
  m='377980'>norm</span> <span m='378400'>has</span> <span m='378610'>a</span>
  <span m='378700'>natural</span> <span m='379210'>part</span> <span
  m='379510'>to</span> <span m='379660'>play,</span> <span m='380770'>and</span>
  <span m='382350'>we'll</span> <span m='382960'>see</span> <span
  m='383380'>that,</span> <span m='383860'>or</span> <span m='384040'>its</span>
  <span m='384280'>matrix</span> <span m='385280'>analog.</span> </p><p><span
  m='386410'>So</span> <span m='386710'>I</span> <span m='386800'>didn't</span>
  <span m='387100'>mention</span> <span m='387580'>the</span> <span
  m='387760'>l0</span> <span m='388540'>norm.</span> <span m='389930'>All</span>
  <span m='390310'>this</span> <span m='390610'>lp</span> <span
  m='391330'>business.</span> <span m='391810'>So</span> <span
  m='392020'>the</span> <span m='392500'>lp</span> <span m='393250'>norm,</span>
  <span m='396550'>for</span> <span m='396850'>any</span> <span
  m='397120'>p,</span> <span m='398060'>is</span> <span m='398470'>you</span>
  <span m='398620'>take</span> <span m='399820'>the</span> <span
  m='400930'>pth</span> <span m='401320'>power--</span> <span
  m='405370'>to</span> <span m='405610'>the</span> <span m='405790'>pth</span>
  <span m='406150'>power.</span> <span m='407380'>Up</span> <span
  m='407560'>here,</span> <span m='408250'>p</span> <span m='408490'>was</span>
  <span m='408700'>2.</span> <span m='409630'>And</span> <span
  m='409780'>you</span> <span m='409900'>take</span> <span m='410530'>the</span>
  <span m='410660'>pth</span> <span m='411030'>root.</span> <span
  m='412040'>So</span> <span m='412480'>maybe</span> <span m='412780'>I</span>
  <span m='412870'>should</span> <span m='413080'>write</span> <span
  m='413320'>it</span> <span m='413810'>to</span> <span m='414000'>the</span>
  <span m='414430'>1/p.</span> <span m='417550'>Then</span> <span
  m='417940'>that</span> <span m='418210'>way,</span> <span
  m='419170'>taking</span> <span m='419540'>pth</span> <span
  m='419830'>powers</span> <span m='420340'>and</span> <span
  m='420490'>pth</span> <span m='420820'>roots,</span> <span
  m='421510'>we</span> <span m='421690'>do</span> <span m='421930'>get</span>
  <span m='423160'>the</span> <span m='423280'>norm</span> <span
  m='423640'>of</span> <span m='423760'>2v</span> <span m='424610'>has</span>
  <span m='424840'>a</span> <span m='424900'>factor</span> <span
  m='425350'>2</span> <span m='426090'>compared</span> <span
  m='426490'>to</span> <span m='426610'>the</span> <span m='426730'>norm</span>
  <span m='427060'>of</span> <span m='427210'>v.</span> </p><p><span
  m='428050'>So</span> <span m='428320'>p</span> <span m='428680'>equal</span>
  <span m='428860'>to</span> <span m='429010'>2,</span> <span
  m='429490'>you</span> <span m='429670'>see</span> <span m='429970'>it.</span>
  <span m='430120'>We've</span> <span m='430300'>got</span> <span
  m='430510'>it</span> <span m='430630'>right</span> <span
  m='430900'>there.</span> <span m='431590'>p</span> <span
  m='432040'>equal</span> <span m='432400'>1,</span> <span m='432550'>you
  see</span> <span m='432820'>it</span> <span m='432910'>here</span> <span
  m='433240'>because</span> <span m='434170'>it's</span> <span
  m='434380'>just</span> <span m='435320'>the</span> <span m='435790'>sum</span>
  <span m='436090'>of</span> <span m='436150'>the</span> <span
  m='436270'>absolute</span> <span m='436690'>values.</span> <span
  m='437290'>p</span> <span m='437610'>equal</span> <span m='437870'>to</span>
  <span m='438130'>infinity,</span> <span m='438880'>if</span> <span
  m='439480'>I</span> <span m='439660'>move</span> <span m='440080'>p</span>
  <span m='440470'>up</span> <span m='440830'>and</span> <span
  m='440980'>up</span> <span m='441190'>and</span> <span m='441310'>up,</span>
  <span m='442000'>it</span> <span m='442150'>will</span> <span
  m='442840'>pick</span> <span m='443170'>out--</span> <span
  m='444160'>as</span> <span m='444370'>I</span> <span
  m='444520'>increase</span> <span m='445060'>p,</span> <span
  m='446080'>whichever</span> <span m='446530'>one</span> <span
  m='446770'>is</span> <span m='446920'>biggest</span> <span
  m='447490'>is</span> <span m='447640'>going</span> <span m='447740'>to</span>
  <span m='447940'>just</span> <span m='448240'>take</span> <span
  m='448570'>over,</span> <span m='449290'>and</span> <span
  m='449470'>that's</span> <span m='449740'>why</span> <span
  m='449980'>you</span> <span m='450070'>get</span> <span m='450280'>the</span>
  <span m='450370'>max</span> <span m='450760'>norm.</span> <span
  m='451450'>Now</span> <span m='451720'>the</span> <span m='451870'>zero</span>
  <span m='452430'>norm,</span> <span m='454540'>where</span> <span
  m='454780'>I'm</span> <span m='455020'>using</span> <span
  m='455440'>that</span> <span m='455620'>word</span> <span
  m='456520'>improperly,</span> <span m='457330'>as</span> <span
  m='457510'>you'll</span> <span m='457690'>see.</span> </p><p><span
  m='459520'>So</span> <span m='459940'>what</span> <span m='460480'>is</span>
  <span m='460690'>the</span> <span m='460810'>zero</span> <span
  m='461250'>norm?</span> <span m='464766'>So</span> <span m='466872'>let</span>
  <span m='467316'>me</span> <span m='467760'>write</span> <span
  m='468040'>it</span> <span m='468380'>[INAUDIBLE]</span> <span
  m='469990'>It's</span> <span m='470200'>the</span> <span
  m='470350'>number</span> <span m='472870'>of</span> <span
  m='473080'>non-zero</span> <span m='478580'>components.</span> <span
  m='484970'>It's</span> <span m='485180'>the</span> <span
  m='485560'>thing</span> <span m='485660'>that</span> <span
  m='485840'>you'd</span> <span m='486080'>like</span> <span
  m='486350'>to</span> <span m='486500'>know</span> <span
  m='486710'>about</span> <span m='487280'>in</span> <span
  m='487580'>question</span> <span m='488090'>of</span> <span
  m='488180'>sparsity.</span> <span m='490100'>Is</span> <span
  m='490580'>there</span> <span m='490700'>just</span> <span
  m='490970'>one</span> <span m='491690'>non-zero</span> <span
  m='492290'>component?</span> <span m='492890'>Are</span> <span
  m='493070'>there</span> <span m='493250'>11?</span> <span
  m='493820'>Are</span> <span m='493940'>there</span> <span
  m='494060'>101?</span> <span m='496880'>That</span> <span
  m='497330'>you</span> <span m='497450'>might</span> <span
  m='497720'>want</span> <span m='497990'>to</span> <span
  m='498890'>minimize</span> <span m='499460'>that</span> <span
  m='500750'>because</span> <span m='501620'>sparse</span> <span
  m='502400'>vectors</span> <span m='502940'>and</span> <span
  m='503090'>sparse</span> <span m='503480'>matrices</span> <span
  m='504140'>are</span> <span m='504200'>much</span> <span
  m='504500'>faster</span> <span m='504920'>to</span> <span
  m='505040'>compute</span> <span m='505430'>with.</span> <span
  m='506060'>You've</span> <span m='506240'>got</span> <span
  m='506660'>good</span> <span m='506870'>stuff.</span> </p><p><span
  m='507500'>But</span> <span m='507680'>now</span> <span m='507920'>I</span>
  <span m='508040'>claim</span> <span m='508370'>that's</span> <span
  m='508670'>not</span> <span m='508970'>a</span> <span m='509030'>norm,</span>
  <span m='509740'>the</span> <span m='509870'>number</span> <span
  m='510200'>of</span> <span m='510960'>non-zero</span> <span
  m='511580'>components,</span> <span m='513210'>because</span> <span
  m='516330'>how</span> <span m='516510'>does</span> <span m='516690'>the</span>
  <span m='516809'>norm</span> <span m='517140'>of</span> <span
  m='517289'>2v</span> <span m='518640'>compare</span> <span
  m='519179'>with</span> <span m='519419'>the</span> <span
  m='519480'>norm</span> <span m='519840'>of</span> <span m='519900'>v,</span>
  <span m='520154'>the</span> <span m='520409'>zero</span> <span
  m='520950'>norm?</span> <span m='522620'>It</span> <span
  m='522710'>would</span> <span m='522860'>be</span> <span m='523010'>the</span>
  <span m='523159'>same.</span> <span m='523850'>2v</span> <span
  m='524690'>has</span> <span m='524870'>the</span> <span m='524990'>same</span>
  <span m='525320'>number</span> <span m='525680'>of non-zeros</span> <span
  m='526520'>as</span> <span m='526700'>v.</span> <span m='527450'>So</span>
  <span m='527720'>it</span> <span m='528020'>violates</span> <span
  m='528860'>the</span> <span m='529370'>rule</span> <span m='529730'>for</span>
  <span m='529940'>a</span> <span m='530030'>norm.</span> <span
  m='531020'>So</span> <span m='532400'>I</span> <span m='532700'>think</span>
  <span m='532970'>with</span> <span m='533360'>these</span> <span
  m='534290'>norms</span> <span m='536000'>and</span> <span
  m='536420'>all</span> <span m='536660'>the</span> <span m='536780'>p's</span>
  <span m='538400'>in</span> <span m='538610'>between--</span> <span
  m='540290'>so</span> <span m='540500'>actually,</span> <span
  m='541940'>the</span> <span m='542240'>math</span> <span
  m='542660'>papers</span> <span m='543170'>are</span> <span
  m='543260'>full</span> <span m='543590'>of,</span> <span m='544240'>let</span>
  <span m='544580'>p</span> <span m='544980'>be</span> <span
  m='545240'>between</span> <span m='545810'>1</span> <span
  m='546080'>and</span> <span m='546260'>infinity,</span> <span
  m='547610'>because</span> <span m='547910'>that's</span> <span
  m='548180'>the</span> <span m='548330'>range</span> <span
  m='548750'>where</span> <span m='548900'>you</span> <span m='549080'>do</span>
  <span m='549290'>have</span> <span m='549500'>a</span> <span
  m='549560'>proper</span> <span m='550010'>norm,</span> <span
  m='551020'>as</span> <span m='551330'>we</span> <span m='551510'>will</span>
  <span m='551720'>see.</span> </p><p><span m='552800'>I</span> <span
  m='552860'>think</span> <span m='553220'>the</span> <span
  m='553370'>good</span> <span m='553910'>thing</span> <span
  m='554210'>to</span> <span m='554300'>do</span> <span m='554480'>with</span>
  <span m='555020'>these</span> <span m='555290'>norms</span> <span
  m='555860'>is</span> <span m='556760'>to</span> <span m='556910'>have</span>
  <span m='557090'>a</span> <span m='557150'>picture</span> <span
  m='557660'>in</span> <span m='557780'>your</span> <span
  m='557900'>mind.</span> <span m='558830'>The</span> <span
  m='558920'>geometry</span> <span m='559700'>of</span> <span
  m='559850'>a</span> <span m='559940'>norm</span> <span m='560330'>is</span>
  <span m='561230'>good.</span> <span m='561900'>So</span> <span
  m='562010'>the</span> <span m='562130'>picture</span> <span
  m='562640'>I'm</span> <span m='562850'>going</span> <span m='562990'>to</span>
  <span m='563060'>suggest</span> <span m='563690'>is,</span> <span
  m='564440'>plot</span> <span m='565040'>all</span> <span m='565460'>the</span>
  <span m='565610'>vectors,</span> <span m='566160'>let's</span> <span
  m='566390'>say</span> <span m='566660'>in 2D.</span> <span
  m='569050'>So</span> <span m='570200'>two-dimensional</span> <span
  m='571010'>space,</span> <span m='571580'>R2.</span> <span
  m='573940'>So</span> <span m='574120'>I</span> <span m='574240'>want</span>
  <span m='574450'>to</span> <span m='574510'>plot</span> <span
  m='576010'>the</span> <span m='576220'>vectors</span> <span
  m='577090'>that</span> <span m='577320'>have</span> <span m='577630'>v</span>
  <span m='578440'>equal</span> <span m='578800'>1</span> <span
  m='580750'>in</span> <span m='580900'>these</span> <span
  m='581170'>different</span> <span m='581530'>norms.</span> </p><p><span
  m='583060'>So</span> <span m='583240'>let</span> <span m='583390'>me</span>
  <span m='583810'>ask</span> <span m='584170'>you--</span> <span
  m='585680'>so</span> <span m='586060'>here's</span> <span m='586390'>2D</span>
  <span m='586880'>space,</span> <span m='588890'>R2,</span> <span
  m='589900'>and</span> <span m='590020'>now</span> <span m='590230'>I</span>
  <span m='590350'>want</span> <span m='590590'>to</span> <span
  m='590650'>plot</span> <span m='591130'>all</span> <span m='591580'>the</span>
  <span m='591710'>vectors</span> <span m='592330'>that</span> <span
  m='594220'>their</span> <span m='594520'>ordinary</span> <span
  m='595360'>l2</span> <span m='596080'>lengths</span> <span
  m='596590'>equal</span> <span m='597040'>1.</span> <span m='598660'>So</span>
  <span m='598740'>what</span> <span m='599610'>does</span> <span
  m='599820'>that</span> <span m='599970'>picture</span> <span
  m='600390'>look</span> <span m='600600'>like?</span> <span m='600900'>I</span>
  <span m='601200'>just</span> <span m='601410'>think</span> <span
  m='601620'>a</span> <span m='601680'>picture</span> <span m='602130'>is</span>
  <span m='602280'>really</span> <span m='602550'>worth something.</span> <span
  m='603010'>It's</span> <span m='603270'>a</span> <span
  m='603330'>circle,</span> <span m='603900'>thanks.</span> <span
  m='604770'>It's</span> <span m='604950'>a</span> <span
  m='605040'>circle.</span> <span m='606340'>It's</span> <span
  m='606590'>a</span> <span m='606660'>circle.</span> <span
  m='607290'>This</span> <span m='607470'>circle</span> <span
  m='608810'>has</span> <span m='609120'>the</span> <span
  m='609270'>equation,</span> <span m='609900'>of</span> <span
  m='609990'>course,</span> <span m='610380'>v1</span> <span
  m='610950'>squared</span> <span m='611360'>plus</span> <span
  m='612060'>v2</span> <span m='612570'>squared</span> <span
  m='612960'>equal</span> <span m='613240'>1.</span> </p><p><span
  m='618006'>So</span> <span m='618500'>I</span> <span m='618830'>would</span>
  <span m='619010'>call</span> <span m='619340'>that</span> <span
  m='619620'>the</span> <span m='619790'>unit</span> <span
  m='620870'>ball</span> <span m='621890'>for</span> <span m='622070'>the</span>
  <span m='622220'>norm</span> <span m='622970'>or</span> <span
  m='623210'>whatever</span> <span m='624230'>is</span> <span
  m='625010'>a</span> <span m='625100'>circle.</span> <span
  m='626660'>OK,</span> <span m='627060'>now</span> <span m='627770'>here</span>
  <span m='628190'>comes</span> <span m='628970'>more</span> <span
  m='629220'>interesting.</span> <span m='630230'>What</span> <span
  m='630410'>about</span> <span m='630740'>in</span> <span m='630860'>the</span>
  <span m='631010'>l1,</span> <span m='631650'>though?</span> <span
  m='635780'>So</span> <span m='636020'>again,</span> <span
  m='636980'>tell</span> <span m='637220'>me</span> <span m='637370'>how</span>
  <span m='637550'>to</span> <span m='637670'>plot</span> <span
  m='638840'>all</span> <span m='639350'>the</span> <span
  m='639530'>points</span> <span m='640790'>that</span> <span
  m='641060'>have</span> <span m='642080'>v1</span> <span m='642980'>plus</span>
  <span m='643310'>v2</span> <span m='643970'>equal</span> <span
  m='644500'>1.</span> <span m='646130'>What's</span> <span
  m='646430'>the</span> <span m='646550'>boundary</span> <span
  m='647030'>going</span> <span m='647180'>to</span> <span
  m='647300'>look</span> <span m='647510'>like</span> <span
  m='647780'>now?</span> <span m='649890'>It's</span> <span
  m='650190'>going</span> <span m='650400'>to</span> <span m='650510'>be,</span>
  <span m='651190'>let's</span> <span m='651420'>see.</span> <span
  m='651840'>Well</span> <span m='652140'>I</span> <span m='652230'>can</span>
  <span m='652410'>put</span> <span m='652650'>down</span> <span
  m='652860'>a</span> <span m='652920'>certain</span> <span
  m='653250'>number</span> <span m='653490'>of</span> <span
  m='653550'>points.</span> <span m='654660'>There</span> <span
  m='655020'>up</span> <span m='655395'>at</span> <span m='655770'>1</span>
  <span m='656250'>and</span> <span m='656340'>there</span> <span m='656790'>at
  1</span> <span m='657300'>and</span> <span m='657420'>there</span> <span
  m='657690'>at</span> <span m='657810'>minus</span> <span m='658290'>1</span>
  <span m='658770'>and there</span> <span m='658980'>at</span> <span
  m='659070'>minus</span> <span m='659490'>1.</span> <span
  m='660300'>That</span> <span m='660450'>would</span> <span
  m='661970'>reflect</span> <span m='662430'>the</span> <span
  m='662520'>vector</span> <span m='662970'>1, 0</span> <span
  m='664590'>and</span> <span m='664710'>this</span> <span
  m='664920'>would</span> <span m='665130'>reflect</span> <span
  m='665580'>the</span> <span m='665820'>vector</span> <span
  m='666390'>0,</span> <span m='667260'>minus</span> <span m='667710'>1.</span>
  <span m='669510'>So</span> <span m='669720'>yeah.</span> </p><p><span
  m='670860'>OK.</span> <span m='671820'>So</span> <span m='672030'>those</span>
  <span m='672330'>are</span> <span m='672450'>like</span> <span
  m='672720'>four</span> <span m='673410'>points</span> <span
  m='673920'>easy</span> <span m='674220'>to</span> <span
  m='674370'>plot.</span> <span m='675240'>Easy</span> <span
  m='675540'>to</span> <span m='675700'>see</span> <span m='676170'>the</span>
  <span m='677640'>l1</span> <span m='678210'>norm.</span> <span
  m='678570'>But</span> <span m='678780'>what's</span> <span
  m='682770'>the</span> <span m='682890'>rest</span> <span m='683190'>of</span>
  <span m='683250'>the</span> <span m='683370'>boundary</span> <span
  m='683880'>here?</span> <span m='686250'>It's</span> <span m='686460'>a</span>
  <span m='686520'>diamond,</span> <span m='687210'>good.</span> <span
  m='687720'>It's</span> <span m='687900'>a</span> <span
  m='687960'>diamond.</span> <span m='690000'>We</span> <span
  m='690210'>have</span> <span m='690810'>linear</span> <span
  m='693490'>set</span> <span m='694280'>equal</span> <span m='694600'>to</span>
  <span m='694710'>1.</span> <span m='695580'>Up</span> <span
  m='695790'>here</span> <span m='696060'>in</span> <span m='696180'>the</span>
  <span m='696270'>positive</span> <span m='696990'>quadrant,</span> <span
  m='698220'>it's</span> <span m='698460'>just</span> <span m='698760'>v1</span>
  <span m='699150'>plus</span> <span m='699540'>v2</span> <span m='699990'>equal
  to</span> <span m='700320'>1,</span> <span m='700620'>and</span> <span
  m='700710'>the</span> <span m='700800'>graph</span> <span m='701160'>of</span>
  <span m='701250'>that</span> <span m='701460'>is</span> <span
  m='701660'>a</span> <span m='701730'>straight</span> <span
  m='702050'>line.</span> <span m='705430'>So</span> <span m='705670'>all</span>
  <span m='706000'>these</span> <span m='706330'>guys--</span> <span
  m='706660'>this</span> <span m='706870'>is</span> <span m='707020'>all</span>
  <span m='707450'>the</span> <span m='707530'>points</span> <span
  m='708000'>with</span> <span m='708140'>v1</span> <span m='708710'>plus
  v2</span> <span m='709570'>equal</span> <span m='709750'>1.</span> <span
  m='711520'>And</span> <span m='711820'>over</span> <span
  m='712030'>here</span> <span m='713050'>and</span> <span
  m='713290'>over</span> <span m='713500'>here</span> <span
  m='714010'>and</span> <span m='714220'>over</span> <span
  m='714460'>here.</span> <span m='715300'>So</span> <span m='715480'>the</span>
  <span m='715630'>unit</span> <span m='716290'>ball</span> <span
  m='717550'>in</span> <span m='717790'>the</span> <span m='717940'>l1</span>
  <span m='718540'>norm</span> <span m='718960'>is</span> <span
  m='719170'>a</span> <span m='719230'>diamond.</span> </p><p><span
  m='721650'>And</span> <span m='722030'>that's</span> <span m='722730'>a</span>
  <span m='723000'>very</span> <span m='723450'>important</span> <span
  m='723870'>picture.</span> <span m='724950'>It</span> <span
  m='725070'>reflects</span> <span m='725640'>in</span> <span
  m='725760'>a</span> <span m='726810'>very</span> <span
  m='727110'>simple</span> <span m='727530'>way</span> <span
  m='728520'>something</span> <span m='729060'>important</span> <span
  m='729600'>about</span> <span m='729900'>the</span> <span m='730050'>l1</span>
  <span m='730500'>norm</span> <span m='730860'>and</span> <span
  m='730950'>the</span> <span m='731040'>reason</span> <span
  m='731460'>it's</span> <span m='731760'>just</span> <span
  m='733740'>exploded</span> <span m='734820'>in</span> <span
  m='734970'>importance.</span> <span m='736090'>Let</span> <span
  m='736140'>me</span> <span m='736260'>continue,</span> <span
  m='736860'>though.</span> <span m='737520'>What</span> <span
  m='737760'>about</span> <span m='738220'>the</span> <span
  m='738360'>max</span> <span m='738900'>norm?</span> <span m='740400'>v</span>
  <span m='740790'>max</span> <span m='741480'>or</span> <span
  m='741660'>v</span> <span m='741990'>infinity</span> <span
  m='742670'>equal</span> <span m='743010'>to</span> <span m='743100'>1.</span>
  <span m='743910'>So</span> <span m='744150'>again,</span> <span
  m='745100'>let</span> <span m='745230'>me</span> <span m='745410'>plot</span>
  <span m='745830'>these</span> <span m='746190'>guys,</span> <span
  m='746700'>and</span> <span m='747180'>these</span> <span
  m='747450'>guys</span> <span m='747780'>are</span> <span
  m='747900'>certainly</span> <span m='748320'>going</span> <span
  m='748470'>to</span> <span m='748560'>be</span> <span m='749490'>in</span>
  <span m='749670'>it</span> <span m='749790'>again</span> <span
  m='751810'>because</span> <span m='752200'>0</span> <span
  m='753460'>[INAUDIBLE]</span> <span m='754500'>plus</span> <span
  m='754800'>or</span> <span m='754860'>minus</span> <span m='755180'>i</span>
  <span m='755520'>and</span> <span m='755610'>plus or</span> <span
  m='755860'>minus</span> <span m='756210'>j</span> <span m='757260'>are</span>
  <span m='757380'>good</span> <span m='757620'>friends.</span> </p><p><span
  m='759420'>What's</span> <span m='759840'>the</span> <span
  m='759990'>rest</span> <span m='760350'>of</span> <span m='760470'>the</span>
  <span m='760590'>boundary</span> <span m='761070'>look</span> <span
  m='761310'>like</span> <span m='761580'>now?</span> <span
  m='762650'>Now</span> <span m='762990'>this</span> <span
  m='763650'>means</span> <span m='766560'>max</span> <span m='768830'>of</span>
  <span m='769010'>the</span> <span m='769170'>v's</span> <span
  m='770260'>equal</span> <span m='770690'>to</span> <span m='771120'>1.</span>
  <span m='772260'>So</span> <span m='772710'>what</span> <span
  m='773430'>are</span> <span m='773490'>the</span> <span m='773550'>rest</span>
  <span m='773820'>of</span> <span m='773880'>the</span> <span
  m='773970'>points?</span> <span m='777720'>You</span> <span
  m='777880'>see,</span> <span m='778180'>it</span> <span m='778270'>does</span>
  <span m='778540'>take</span> <span m='778750'>a</span> <span
  m='778810'>little</span> <span m='779080'>thought,</span> <span
  m='779470'>but</span> <span m='779620'>then</span> <span m='779830'>you</span>
  <span m='779980'>get</span> <span m='780220'>it</span> <span
  m='780440'>and</span> <span m='780940'>you</span> <span
  m='781060'>don't</span> <span m='781840'>forget</span> <span
  m='782380'>it.</span> <span m='783520'>OK,</span> <span m='784030'>so</span>
  <span m='784300'>what's</span> <span m='785500'>up?</span> <span
  m='787390'>I'm</span> <span m='788700'>looking.</span> <span
  m='789550'>So</span> <span m='789800'>suppose</span> <span
  m='790450'>the</span> <span m='790570'>maximum</span> <span
  m='791320'>is</span> <span m='791530'>v1.</span> <span m='792880'>I</span>
  <span m='793030'>think</span> <span m='796270'>it's</span> <span
  m='796450'>going</span> <span m='796590'>to</span> <span
  m='796750'>look</span> <span m='796960'>like</span> <span
  m='797200'>that,</span> <span m='801000'>out</span> <span m='802080'>to</span>
  <span m='802260'>1,</span> <span m='802560'>0</span> <span
  m='804840'>and</span> <span m='805020'>up</span> <span m='805200'>to</span>
  <span m='805710'>0,</span> <span m='806100'>1.</span> <span
  m='807690'>And</span> <span m='808230'>up</span> <span m='808470'>here,</span>
  <span m='809490'>the</span> <span m='809910'>vector</span> <span
  m='810390'>would</span> <span m='810630'>be</span> <span m='813015'>1.4</span>
  <span m='815570'>or</span> <span m='815930'>something,</span> <span
  m='816380'>so</span> <span m='816620'>the</span> <span
  m='816740'>maximum</span> <span m='817250'>would</span> <span
  m='817490'>be</span> <span m='817640'>1.</span> <span m='818560'>Is that
  OK?</span> </p><p><span m='820520'>So</span> <span m='820850'>somehow,</span>
  <span m='822110'>what</span> <span m='822620'>really</span> <span
  m='823040'>sees,</span> <span m='823490'>as</span> <span m='823700'>you</span>
  <span m='823850'>change</span> <span m='824330'>this</span> <span
  m='824570'>number</span> <span m='824900'>p,</span> <span
  m='825920'>you</span> <span m='826070'>start</span> <span
  m='826580'>with</span> <span m='827480'>p</span> <span m='827840'>equal</span>
  <span m='828200'>to</span> <span m='828620'>1,</span> <span m='829070'>or
  a</span> <span m='829220'>diamond,</span> <span m='830360'>and</span> <span
  m='830480'>it</span> <span m='830540'>kind</span> <span m='830780'>of</span>
  <span m='831170'>swells</span> <span m='831950'>out</span> <span
  m='832670'>to</span> <span m='832790'>be</span> <span m='832940'>a</span>
  <span m='833030'>circle</span> <span m='833690'>at</span> <span m='833930'>p
  equal</span> <span m='834190'>to</span> <span m='834560'>2,</span> <span
  m='835640'>and</span> <span m='835790'>then</span> <span m='836060'>it</span>
  <span m='836420'>kind</span> <span m='836810'>of</span> <span
  m='837740'>keeps</span> <span m='838100'>swelling</span> <span
  m='839780'>to</span> <span m='839900'>be</span> <span m='840080'>a</span>
  <span m='840140'>square</span> <span m='840890'>and</span> <span m='841010'>p
  equal to</span> <span m='841460'>infinity.</span> <span
  m='843200'>That's</span> <span m='843650'>an</span> <span
  m='844130'>interesting</span> <span m='844730'>thing.</span> <span
  m='845490'>And</span> <span m='846020'>yeah.</span> </p><p><span
  m='849050'>Now</span> <span m='850610'>what's</span> <span
  m='851090'>the</span> <span m='851210'>problem</span> <span
  m='851690'>with</span> <span m='851900'>the</span> <span
  m='852050'>zero</span> <span m='852690'>norm?</span> <span
  m='855510'>This</span> <span m='855690'>is</span> <span m='855870'>the</span>
  <span m='855990'>number</span> <span m='856380'>of</span> <span
  m='856470'>non-zeros.</span> <span m='861250'>OK,</span> <span
  m='861730'>let</span> <span m='861850'>me</span> <span m='862000'>draw</span>
  <span m='862410'>it.</span> <span m='863440'>Where</span> <span
  m='864010'>are</span> <span m='864520'>the</span> <span
  m='864820'>points</span> <span m='865360'>with</span> <span
  m='865600'>one</span> <span m='866040'>non-zero?</span> <span
  m='869080'>So</span> <span m='869290'>I'm</span> <span
  m='869770'>plotting</span> <span m='870470'>the</span> <span
  m='872290'>unit</span> <span m='872620'>ball.</span> <span
  m='873760'>Where</span> <span m='874630'>are</span> <span
  m='874750'>the</span> <span m='876490'>vectors</span> <span
  m='877660'>in</span> <span m='877810'>this</span> <span
  m='878110'>thing</span> <span m='878440'>that</span> <span
  m='878620'>have</span> <span m='878830'>one</span> <span
  m='879180'>non-zero?</span> <span m='879850'>Not</span> <span
  m='881170'>zero</span> <span m='881650'>non-zero.</span> <span
  m='882220'>So</span> <span m='883000'>that's</span> <span
  m='883360'>not</span> <span m='883630'>included.</span> </p><p><span
  m='888550'>So</span> <span m='888760'>what</span> <span m='888930'>do</span>
  <span m='889090'>I</span> <span m='889180'>have?</span> <span
  m='890260'>I'm</span> <span m='890350'>not</span> <span
  m='890590'>allowed</span> <span m='890980'>the</span> <span
  m='891100'>vector</span> <span m='892570'>1/3,</span> <span
  m='893200'>2/3</span> <span m='893920'>because</span> <span
  m='894250'>that</span> <span m='894430'>has</span> <span m='894610'>two</span>
  <span m='894880'>non-zeros,</span> <span m='896410'>so</span> <span
  m='896590'>where</span> <span m='896860'>are</span> <span
  m='897130'>the</span> <span m='897940'>points</span> <span
  m='898330'>with</span> <span m='898540'>only</span> <span
  m='898810'>one</span> <span m='899180'>non-zero?</span> <span
  m='901020'>Yeah,</span> <span m='901680'>on</span> <span m='901950'>the</span>
  <span m='902130'>axes,</span> <span m='903000'>yeah.</span> <span
  m='903520'>That</span> <span m='903840'>tells</span> <span
  m='904200'>you.</span> <span m='904660'>So</span> <span m='905310'>it</span>
  <span m='905400'>can</span> <span m='905580'>be</span> <span
  m='905730'>there</span> <span m='906880'>and</span> <span
  m='907170'>there.</span> <span m='908250'>Oops, without</span> <span
  m='908730'>that</span> <span m='909750'>guy.</span> <span
  m='911190'>And</span> <span m='911340'>of</span> <span
  m='911430'>course</span> <span m='911920'>those just</span> <span
  m='912180'>keep</span> <span m='912390'>going</span> <span
  m='912720'>out.</span> </p><p><span m='913950'>So</span> <span
  m='914250'>it</span> <span m='914370'>totally</span> <span
  m='914850'>violates</span> <span m='916730'>the--</span> <span
  m='920400'>so</span> <span m='920700'>maybe</span> <span m='921060'>the</span>
  <span m='921180'>point</span> <span m='922320'>that</span> <span
  m='922530'>I</span> <span m='922680'>should</span> <span
  m='922920'>make</span> <span m='923340'>about</span> <span
  m='924660'>these</span> <span m='925050'>figures--</span> <span
  m='926140'>so</span> <span m='926640'>like,</span> <span
  m='926910'>what's</span> <span m='927180'>happening?</span> <span
  m='927690'>When</span> <span m='927870'>I</span> <span m='928380'>go</span>
  <span m='928650'>down</span> <span m='929220'>to</span> <span
  m='929370'>zero--</span> <span m='930280'>and</span> <span
  m='930880'>really,</span> <span m='931260'>that</span> <span
  m='931500'>figure</span> <span m='931900'>should</span> <span
  m='932070'>be</span> <span m='932250'>at</span> <span m='932340'>the</span>
  <span m='932490'>other</span> <span m='932790'>end,</span> <span
  m='933150'>right?</span> <span m='933930'>Oh</span> <span
  m='934170'>no,</span> <span m='934530'>shoot.</span> <span
  m='935850'>This</span> <span m='936120'>guy's</span> <span
  m='936510'>in</span> <span m='936630'>the</span> <span
  m='936750'>middle.</span> <span m='937200'>This</span> <span
  m='937410'>is</span> <span m='937560'>a</span> <span m='938880'>badly</span>
  <span m='939600'>drawn</span> <span m='940020'>figure.</span> <span
  m='940860'>l2</span> <span m='941460'>is</span> <span m='941640'>kind</span>
  <span m='941850'>of</span> <span m='941920'>the</span> <span
  m='942060'>center</span> <span m='942600'>guy.</span> <span
  m='943270'>l1</span> <span m='944070'>is</span> <span m='945255'>at</span>
  <span m='945720'>one</span> <span m='945990'>end,</span> <span
  m='946390'>l</span> <span m='946590'>infinity</span> <span
  m='946990'>is</span> <span m='947400'>at</span> <span m='947550'>the</span>
  <span m='947670'>other</span> <span m='947970'>end,</span> <span
  m='948210'>and</span> <span m='948330'>this</span> <span m='948570'>one</span>
  <span m='948840'>has</span> <span m='949020'>gone</span> <span
  m='949440'>off</span> <span m='950325'>the end</span> <span
  m='950700'>at</span> <span m='951180'>the</span> <span m='951330'>left</span>
  <span m='951780'>there.</span> </p><p><span m='953700'>The</span> <span
  m='953880'>diamond</span> <span m='954450'>has--</span> <span
  m='955320'>yeah,</span> <span m='955680'>what's</span> <span
  m='955890'>happened</span> <span m='956250'>here,</span> <span
  m='956810'>as</span> <span m='957630'>that</span> <span m='957930'>one</span>
  <span m='958590'>goes</span> <span m='958920'>down</span> <span
  m='959250'>towards</span> <span m='959570'>zero,</span> <span
  m='960420'>none</span> <span m='960660'>of</span> <span
  m='960720'>these</span> <span m='961050'>will</span> <span
  m='961260'>be</span> <span m='961500'>OK.</span> <span m='962340'>These</span>
  <span m='964560'>balls</span> <span m='966540'>or</span> <span
  m='966660'>these</span> <span m='966990'>sets</span> <span
  m='967560'>will</span> <span m='969090'>lose</span> <span
  m='969390'>weight.</span> <span m='972590'>So</span> <span
  m='972860'>they'll</span> <span m='973490'>always</span> <span
  m='973880'>have</span> <span m='974120'>these</span> <span
  m='974420'>points</span> <span m='974870'>in,</span> <span
  m='975080'>but</span> <span m='975260'>they'll</span> <span
  m='975470'>be</span> <span m='976760'>like</span> <span m='977060'>this</span>
  <span m='977335'>and</span> <span m='977630'>then</span> <span
  m='977870'>like</span> <span m='978110'>this</span> <span
  m='978500'>and</span> <span m='978590'>then</span> <span
  m='979370'>finally</span> <span m='979910'>in</span> <span
  m='980120'>the</span> <span m='981290'>unacceptable</span> <span
  m='982210'>limit,</span> <span m='982700'>but</span> <span
  m='982910'>none</span> <span m='983150'>of</span> <span
  m='983210'>those--</span> <span m='984080'>this</span> <span
  m='984380'>was</span> <span m='984590'>not</span> <span m='984890'>any</span>
  <span m='985160'>good</span> <span m='985400'>either.</span> <span
  m='985720'>This</span> <span m='986630'>was</span> <span m='986870'>for</span>
  <span m='987080'>people</span> <span m='987380'>equal</span> <span
  m='987680'>1/2,</span> <span m='988280'>let's</span> <span
  m='988520'>say.</span> <span m='991820'>That's</span> <span
  m='993270'>a</span> <span m='993360'>p equal</span> <span m='993630'>to</span>
  <span m='993900'>1/2</span> <span m='994230'>and</span> <span
  m='994350'>that's</span> <span m='994590'>not</span> <span m='994860'>a</span>
  <span m='994920'>good</span> <span m='995160'>norm.</span> <span
  m='996120'>Yeah.</span> </p><p><span m='996660'>So</span> <span
  m='997020'>maybe</span> <span m='997500'>the</span> <span
  m='1000090'>property</span> <span m='1000890'>of</span> <span
  m='1001940'>the</span> <span m='1002090'>circle,</span> <span
  m='1003370'>the</span> <span m='1003500'>diamond,</span> <span
  m='1004190'>and</span> <span m='1004350'>the</span> <span
  m='1004460'>square,</span> <span m='1005990'>which</span> <span
  m='1006840'>is</span> <span m='1007370'>a</span> <span m='1007460'>nice</span>
  <span m='1007880'>math</span> <span m='1008300'>property</span> <span
  m='1008840'>of</span> <span m='1009920'>those</span> <span
  m='1010340'>three</span> <span m='1011420'>sets</span> <span
  m='1012620'>and</span> <span m='1013110'>is</span> <span
  m='1013250'>not</span> <span m='1015040'>possessed</span> <span
  m='1015700'>by</span> <span m='1016120'>this.</span> <span
  m='1017140'>As</span> <span m='1017350'>this</span> <span
  m='1017480'>thing</span> <span m='1017800'>loses</span> <span
  m='1018400'>weight,</span> <span m='1019420'>I</span> <span
  m='1019810'>lose</span> <span m='1020200'>the</span> <span
  m='1020320'>property.</span> <span m='1021530'>And</span> <span
  m='1021550'>then</span> <span m='1021760'>of</span> <span
  m='1021850'>course</span> <span m='1022160'>it's</span> <span
  m='1022360'>totally</span> <span m='1022810'>lost</span> <span
  m='1023200'>over</span> <span m='1023410'>there.</span> <span
  m='1023650'>Do</span> <span m='1023770'>you</span> <span
  m='1023860'>know</span> <span m='1024010'>what</span> <span
  m='1024220'>that</span> <span m='1024369'>property</span> <span
  m='1024880'>would</span> <span m='1025030'>be?</span> <span
  m='1026530'>It's</span> <span m='1026800'>what?</span> <span
  m='1028130'>Concave,</span> <span m='1028790'>convex.</span> </p><p><span
  m='1029390'>Convex,</span> <span m='1030079'>I</span> <span
  m='1030200'>would</span> <span m='1030380'>say.</span> <span
  m='1030920'>Convex.</span> <span m='1034020'>This</span> <span
  m='1034190'>is</span> <span m='1034339'>a</span> <span m='1034430'>true</span>
  <span m='1034790'>norm</span> <span m='1037449'>as</span> <span
  m='1038490'>the</span> <span m='1038960'>convex</span> <span
  m='1039970'>unit.</span> <span m='1041970'>Well</span> <span
  m='1042440'>maybe</span> <span m='1043290'>for</span> <span
  m='1043490'>ball,</span> <span m='1043970'>I'm</span> <span
  m='1044450'>taking</span> <span m='1045470'>all</span> <span
  m='1045849'>the</span> <span m='1045910'>v's</span> <span m='1046700'>less
  or</span> <span m='1047130'>equal to</span> <span m='1047400'>1.</span> <span
  m='1048970'>Yeah,</span> <span m='1049320'>so</span> <span
  m='1049590'>I'm</span> <span m='1050330'>allowing</span> <span
  m='1050840'>the</span> <span m='1050990'>insides</span> <span
  m='1051770'>of</span> <span m='1051860'>these</span> <span
  m='1052610'>shapes.</span> <span m='1053070'>So</span> <span
  m='1053210'>this</span> <span m='1053450'>is</span> <span
  m='1053570'>not</span> <span m='1053930'>a</span> <span
  m='1054020'>convex</span> <span m='1054650'>set.</span> <span
  m='1055280'>That</span> <span m='1055940'>set,</span> <span
  m='1056300'>which</span> <span m='1056570'>I</span> <span
  m='1056660'>should</span> <span m='1057100'>maybe--</span> <span
  m='1057910'>so</span> <span m='1058190'>not</span> <span
  m='1060590'>convex</span> <span m='1061360'>would</span> <span
  m='1061550'>be</span> <span m='1061820'>this</span> <span
  m='1062660'>one</span> <span m='1065855'>like</span> <span
  m='1066350'>so.</span> <span m='1068330'>And</span> <span
  m='1068830'>that</span> <span m='1069040'>reflects</span> <span
  m='1069520'>the</span> <span m='1069640'>fact</span> <span
  m='1070030'>that</span> <span m='1072550'>the</span> <span
  m='1072700'>rules</span> <span m='1073150'>for</span> <span
  m='1073890'>a</span> <span m='1074200'>norm</span> <span
  m='1074680'>are</span> <span m='1074740'>broken</span> <span
  m='1075040'>in</span> <span m='1075340'>the</span> <span
  m='1075460'>triangle.</span> <span m='1076030'>Inequality</span> <span
  m='1076740'>is</span> <span m='1076870'>probably</span> <span
  m='1077290'>broken</span> <span m='1077980'>in</span> <span
  m='1078300'>the--</span> <span m='1080230'>other</span> <span
  m='1080770'>stuff,</span> <span m='1081400'>yeah.</span> <span
  m='1082510'>I</span> <span m='1082810'>think</span> <span
  m='1083020'>that's</span> <span m='1083290'>sort</span> <span
  m='1083560'>of</span> <span m='1083890'>worth</span> <span
  m='1084220'>remembering.</span> </p><p><span m='1086210'>And</span> <span
  m='1086360'>then</span> <span m='1087710'>one</span> <span
  m='1088010'>more</span> <span m='1093120'>norm</span> <span
  m='1093700'>that's</span> <span m='1096270'>natural</span> <span
  m='1096810'>to</span> <span m='1096960'>think</span> <span
  m='1097260'>about</span> <span m='1098490'>is--</span> <span
  m='1100480'>so</span> <span m='1100730'>S,</span> <span m='1101960'>as</span>
  <span m='1102410'>in</span> <span m='1102590'>the</span> <span
  m='1102730'>Piazza</span> <span m='1103280'>question,</span> <span
  m='1103910'>S</span> <span m='1104180'>does</span> <span
  m='1104570'>always</span> <span m='1104930'>represent</span> <span
  m='1105560'>a</span> <span m='1106100'>symmetric</span> <span
  m='1106700'>matrix</span> <span m='1107460'>in</span> <span
  m='1107950'>18.065.</span> <span m='1110030'>And</span> <span
  m='1110180'>now</span> <span m='1111560'>my</span> <span
  m='1111770'>norm</span> <span m='1112130'>is</span> <span
  m='1112310'>going</span> <span m='1112490'>to</span> <span
  m='1112580'>be--</span> <span m='1113600'>so</span> <span
  m='1113930'>I'm</span> <span m='1114140'>going</span> <span
  m='1114260'>to</span> <span m='1114350'>call</span> <span
  m='1114620'>it</span> <span m='1114710'>the S</span> <span
  m='1114890'>norm.</span> <span m='1116840'>So</span> <span
  m='1118090'>actually,</span> <span m='1118520'>it's</span> <span
  m='1118680'>a</span> <span m='1118760'>positive</span> <span
  m='1119480'>definite</span> <span m='1120020'>symmetric</span> <span
  m='1120650'>matrix.</span> <span m='1121610'>S</span> <span
  m='1121820'>is</span> <span m='1121940'>a</span> <span
  m='1122030'>positive</span> <span m='1122510'>definite</span> <span
  m='1122960'>symmetric</span> <span m='1123590'>matrix.</span> </p><p><span
  m='1124400'>And</span> <span m='1124520'>what</span> <span
  m='1124730'>do</span> <span m='1124910'>I</span> <span m='1125060'>do?</span>
  <span m='1125600'>I'll</span> <span m='1125720'>take</span> <span
  m='1126020'>v</span> <span m='1126320'>transpose</span> <span
  m='1127130'>Sv.</span> <span m='1133920'>OK,</span> <span
  m='1134270'>what's</span> <span m='1134570'>our</span> <span
  m='1134720'>word</span> <span m='1135020'>for</span> <span
  m='1135200'>that?</span> <span m='1136730'>The</span> <span
  m='1136910'>energy.</span> <span m='1137780'>That's</span> <span
  m='1138050'>the</span> <span m='1138200'>energy</span> <span
  m='1138950'>in</span> <span m='1139110'>the</span> <span
  m='1139190'>vector</span> <span m='1139550'>v.</span> <span
  m='1140270'>And</span> <span m='1140420'>I'll</span> <span
  m='1140540'>take</span> <span m='1140810'>the</span> <span
  m='1140930'>square</span> <span m='1141290'>root</span> <span
  m='1143900'>so</span> <span m='1144140'>that</span> <span m='1144320'>I</span>
  <span m='1145850'>now</span> <span m='1146240'>have</span> <span
  m='1147620'>the</span> <span m='1149000'>length</span> <span
  m='1149540'>of</span> <span m='1149750'>two</span> <span m='1150270'>if</span>
  <span m='1150380'>I</span> <span m='1151160'>double</span> <span
  m='1151580'>v,</span> <span m='1151940'>from</span> <span m='1152180'>v</span>
  <span m='1152570'>to</span> <span m='1152870'>2v.</span> <span
  m='1153530'>Then</span> <span m='1153710'>I</span> <span
  m='1153800'>got</span> <span m='1153990'>a</span> <span m='1154060'>2</span>
  <span m='1154400'>here</span> <span m='1154640'>and</span> <span
  m='1154760'>a</span> <span m='1154820'>2</span> <span m='1155120'>here,</span>
  <span m='1155420'>and</span> <span m='1155540'>when</span> <span
  m='1155720'>I</span> <span m='1155810'>take</span> <span
  m='1156020'>the</span> <span m='1156140'>square</span> <span
  m='1156470'>root,</span> <span m='1156680'>I</span> <span
  m='1156770'>get</span> <span m='1156970'>a</span> <span
  m='1157400'>overall</span> <span m='1157940'>2</span> <span
  m='1158880'>and</span> <span m='1158930'>that's</span> <span
  m='1159170'>what</span> <span m='1159380'>I</span> <span
  m='1159470'>want.</span> <span m='1160250'>I</span> <span
  m='1160340'>want</span> <span m='1160580'>the</span> <span
  m='1160700'>norm</span> <span m='1161060'>to</span> <span
  m='1161960'>grow</span> <span m='1162950'>linearly</span> <span
  m='1163580'>with</span> <span m='1163970'>the two</span> <span
  m='1164450'>or</span> <span m='1164540'>three</span> <span
  m='1164960'>or</span> <span m='1165110'>whatever</span> <span
  m='1165500'>I</span> <span m='1165590'>multiply</span> <span
  m='1166070'>by.</span> </p><p><span m='1166610'>But</span> <span
  m='1167030'>what</span> <span m='1167360'>is</span> <span
  m='1167540'>the</span> <span m='1167690'>shape</span> <span
  m='1168740'>of</span> <span m='1169910'>this</span> <span
  m='1170360'>thing?</span> <span m='1170720'>So</span> <span
  m='1170960'>what</span> <span m='1171230'>is</span> <span
  m='1171470'>the</span> <span m='1174790'>shape</span> <span
  m='1175390'>of--</span> <span m='1176540'>let</span> <span
  m='1177010'>me</span> <span m='1177150'>put it</span> <span m='1177420'>on
  this</span> <span m='1178106'>board.</span> <span m='1179460'>I'm</span> <span
  m='1179790'>going</span> <span m='1179910'>to</span> <span
  m='1180040'>get</span> <span m='1180190'>a</span> <span
  m='1180250'>picture</span> <span m='1180670'>like</span> <span
  m='1180910'>that.</span> <span m='1181510'>So</span> <span
  m='1181720'>what</span> <span m='1181990'>is</span> <span
  m='1182170'>the</span> <span m='1182290'>shape</span> <span
  m='1183580'>of</span> <span m='1186010'>v</span> <span
  m='1186640'>transpose</span> <span m='1187600'>Sv</span> <span
  m='1189100'>equal</span> <span m='1189490'>1</span> <span
  m='1191200'>or</span> <span m='1191500'>less</span> <span
  m='1191960'>or</span> <span m='1191990'>equal</span> <span
  m='1192320'>1?</span> <span m='1195460'>This</span> <span
  m='1195730'>is</span> <span m='1195940'>a</span> <span
  m='1197800'>symmetric</span> <span m='1198460'>positive</span> <span
  m='1199070'>definite.</span> <span m='1199630'>People</span> <span
  m='1200710'>use</span> <span m='1201010'>those</span> <span
  m='1201370'>three</span> <span m='1201640'>letters</span> <span
  m='1202190'>to</span> <span m='1202780'>tell</span> <span
  m='1203050'>us.</span> <span m='1203800'>I'm</span> <span
  m='1204220'>claiming</span> <span m='1204640'>that</span> <span
  m='1204850'>we</span> <span m='1205000'>get</span> <span m='1205180'>a</span>
  <span m='1205240'>bunch</span> <span m='1205540'>of</span> <span
  m='1205660'>norms.</span> </p><p><span m='1206780'>When</span> <span
  m='1207130'>do</span> <span m='1207250'>we</span> <span m='1207400'>get</span>
  <span m='1207610'>the</span> <span m='1207790'>l2</span> <span
  m='1208180'>norm?</span> <span m='1210280'>What</span> <span
  m='1211030'>matrix</span> <span m='1211600'>S</span> <span
  m='1212380'>would</span> <span m='1212560'>this</span> <span
  m='1212890'>give</span> <span m='1213160'>us</span> <span
  m='1213430'>the</span> <span m='1213640'>l2</span> <span
  m='1214120'>norm?</span> <span m='1215290'>The</span> <span
  m='1215440'>identity,</span> <span m='1216160'>certainly.</span> <span
  m='1217240'>Now</span> <span m='1217450'>what's</span> <span
  m='1217720'>going</span> <span m='1217880'>to</span> <span
  m='1217990'>happen</span> <span m='1218440'>if</span> <span
  m='1218650'>I</span> <span m='1218770'>use</span> <span
  m='1219040'>some</span> <span m='1219310'>different</span> <span
  m='1219700'>matrix</span> <span m='1220270'>S?</span> <span
  m='1221260'>This</span> <span m='1221650'>circle</span> <span
  m='1222340'>is</span> <span m='1222550'>going</span> <span
  m='1222750'>to</span> <span m='1224120'>change</span> <span
  m='1224420'>shape.</span> <span m='1226060'>I</span> <span m='1226220'>might
  have</span> <span m='1226370'>a</span> <span m='1226430'>different</span>
  <span m='1226820'>norm,</span> <span m='1227720'>depending</span> <span
  m='1228260'>on</span> <span m='1228410'>S.</span> <span m='1228770'>And
  a</span> <span m='1229130'>typical</span> <span m='1229640'>case</span> <span
  m='1230060'>would</span> <span m='1230270'>be</span> <span
  m='1231020'>S</span> <span m='1231350'>equal</span> <span
  m='1232940'>2,</span> <span m='1233390'>3,</span> <span
  m='1233770'>say.</span> <span m='1237320'>That's</span> <span
  m='1237560'>a</span> <span m='1237620'>positive</span> <span
  m='1238070'>definite</span> <span m='1238550'>symmetric</span> <span
  m='1239090'>matrix.</span> </p><p><span m='1240500'>And</span> <span
  m='1242330'>now</span> <span m='1242750'>I</span> <span
  m='1242840'>would</span> <span m='1243050'>be</span> <span
  m='1243230'>drawing</span> <span m='1243680'>the</span> <span
  m='1243800'>graph</span> <span m='1244340'>of</span> <span
  m='1245060'>2v1</span> <span m='1246170'>squared</span> <span
  m='1246800'>plus</span> <span m='1247190'>3v2</span> <span
  m='1248210'>squared.</span> <span m='1248660'>That</span> <span
  m='1248870'>would</span> <span m='1248990'>be</span> <span
  m='1249140'>the</span> <span m='1249320'>energy,</span> <span
  m='1249800'>right?</span> <span m='1250580'>Equal</span> <span
  m='1250910'>1.</span> <span m='1251890'>And</span> <span m='1252080'>I</span>
  <span m='1252200'>just</span> <span m='1252500'>want</span> <span
  m='1252770'>you to</span> <span m='1253010'>tell</span> <span
  m='1253250'>me</span> <span m='1253430'>what</span> <span
  m='1254120'>shape</span> <span m='1255200'>that</span> <span
  m='1255500'>is.</span> <span m='1256190'>So</span> <span
  m='1256610'>that's</span> <span m='1256910'>a</span> <span
  m='1256970'>perfectly</span> <span m='1257510'>good</span> <span
  m='1257750'>norm</span> <span m='1258626'>that</span> <span
  m='1259420'>you</span> <span m='1259550'>could</span> <span
  m='1259730'>check</span> <span m='1260060'>all</span> <span
  m='1260210'>its</span> <span m='1260390'>properties.</span> <span
  m='1261830'>They</span> <span m='1262040'>all</span> <span
  m='1262220'>come</span> <span m='1262490'>out</span> <span
  m='1262700'>easily.</span> <span m='1263930'>But</span> <span
  m='1264980'>I</span> <span m='1265100'>get</span> <span m='1265280'>a</span>
  <span m='1265340'>new</span> <span m='1265760'>picture--</span> <span
  m='1266480'>a</span> <span m='1266570'>new</span> <span
  m='1267020'>norm</span> <span m='1267470'>that's</span> <span
  m='1267770'>kind</span> <span m='1268040'>of</span> <span
  m='1268250'>adjustable.</span> <span m='1269570'>You</span> <span
  m='1269690'>could</span> <span m='1269870'>say</span> <span
  m='1270080'>it's</span> <span m='1270260'>a</span> <span
  m='1270320'>weighted</span> <span m='1270920'>norm.</span> <span
  m='1271400'>Weights</span> <span m='1271910'>mean</span> <span
  m='1272300'>that</span> <span m='1272510'>you</span> <span
  m='1272660'>kind</span> <span m='1272930'>of</span> <span
  m='1273590'>have</span> <span m='1274190'>picked</span> <span
  m='1274820'>some</span> <span m='1275060'>numbers</span> <span
  m='1275470'>sort</span> <span m='1275690'>of</span> <span
  m='1275810'>appropriate</span> <span m='1276440'>to</span> <span
  m='1276980'>the</span> <span m='1277100'>particular</span> <span
  m='1277790'>problem.</span> </p><p><span m='1278670'>Well,</span> <span
  m='1278810'>suppose</span> <span m='1279260'>those</span> <span
  m='1279530'>numbers</span> <span m='1279920'>are</span> <span
  m='1280010'>2</span> <span m='1280280'>and</span> <span m='1280400'>3.</span>
  <span m='1281060'>What</span> <span m='1281300'>shape</span> <span
  m='1281690'>is</span> <span m='1281900'>the</span> <span
  m='1282050'>unit</span> <span m='1282500'>ball</span> <span
  m='1283490'>in</span> <span m='1283700'>this</span> <span m='1284000'>S</span>
  <span m='1284410'>norm?</span> <span m='1286440'>It's</span> <span
  m='1286620'>an</span> <span m='1286740'>ellipse,</span> <span
  m='1287310'>right.</span> <span m='1288270'>It's</span> <span
  m='1288480'>an</span> <span m='1288730'>ellipse.</span> <span
  m='1289650'>And</span> <span m='1289770'>I</span> <span
  m='1289860'>guess</span> <span m='1290160'>it will</span> <span
  m='1290400'>actually</span> <span m='1290940'>be--</span> <span
  m='1292050'>so</span> <span m='1292260'>the</span> <span
  m='1292380'>larger</span> <span m='1292950'>number,</span> <span
  m='1293340'>3,</span> <span m='1294320'>will</span> <span
  m='1294570'>mean</span> <span m='1294900'>you</span> <span
  m='1295020'>can't</span> <span m='1295320'>go</span> <span
  m='1295500'>as</span> <span m='1295620'>far</span> <span m='1296550'>as</span>
  <span m='1297150'>the</span> <span m='1297840'>smaller</span> <span
  m='1298350'>number,</span> <span m='1298740'>2.</span> <span
  m='1299180'>I</span> <span m='1299310'>think</span> <span m='1299670'>it
  would</span> <span m='1299830'>probably</span> <span m='1300240'>be</span>
  <span m='1300420'>an</span> <span m='1300540'>ellipse</span> <span
  m='1301560'>like</span> <span m='1301860'>this,</span> <span
  m='1303420'>and</span> <span m='1303660'>the</span> <span
  m='1304110'>axes</span> <span m='1305490'>length</span> <span m='1305820'>of
  the</span> <span m='1306240'>ellipse</span> <span m='1306690'>would</span>
  <span m='1307320'>probably</span> <span m='1307770'>have</span> <span
  m='1307950'>something</span> <span m='1308370'>to</span> <span
  m='1308460'>do</span> <span m='1308640'>with</span> <span
  m='1308910'>the</span> <span m='1308970'>2</span> <span m='1309300'>and
  the</span> <span m='1309500'>3.</span> <span m='1310530'>OK,</span> <span
  m='1310980'>so</span> <span m='1312890'>now</span> <span
  m='1313130'>you</span> <span m='1313310'>know</span> <span
  m='1314780'>really</span> <span m='1315230'>all</span> <span
  m='1315530'>the</span> <span m='1315710'>vector</span> <span
  m='1316280'>norms</span> <span m='1316790'>that</span> <span
  m='1316940'>are</span> <span m='1317990'>sort</span> <span
  m='1318230'>of</span> <span m='1318350'>naturally</span> <span
  m='1319040'>used.</span> </p><p><span m='1321380'>These</span> <span
  m='1322100'>come</span> <span m='1322400'>up</span> <span
  m='1323030'>in</span> <span m='1323150'>a</span> <span
  m='1323240'>natural</span> <span m='1323630'>way.</span> <span
  m='1324950'>As</span> <span m='1325160'>we</span> <span
  m='1325280'>said,</span> <span m='1325580'>the</span> <span
  m='1325730'>identity</span> <span m='1326300'>matrix</span> <span
  m='1326930'>brings</span> <span m='1327320'>us</span> <span
  m='1327470'>back</span> <span m='1327800'>to</span> <span
  m='1327980'>the</span> <span m='1328400'>two</span> <span
  m='1328700'>norm.</span> <span m='1330040'>So</span> <span
  m='1330260'>these</span> <span m='1330530'>are</span> <span
  m='1330710'>all</span> <span m='1331160'>sort</span> <span
  m='1331490'>of</span> <span m='1332360'>variations</span> <span
  m='1333320'>on</span> <span m='1333500'>the</span> <span
  m='1333590'>two</span> <span m='1333890'>norm.</span> <span
  m='1334850'>And</span> <span m='1335270'>these</span> <span
  m='1335780'>are</span> <span m='1335930'>variations</span> <span
  m='1336850'>as</span> <span m='1337040'>p</span> <span m='1337490'>runs</span>
  <span m='1338000'>from</span> <span m='1338900'>1</span> <span
  m='1339980'>up</span> <span m='1340160'>to</span> <span m='1340555'>2</span>
  <span m='1340950'>on</span> <span m='1341250'>to</span> <span
  m='1341510'>infinity</span> <span m='1342680'>and</span> <span
  m='1343190'>is</span> <span m='1343400'>not</span> <span
  m='1343700'>allowed</span> <span m='1344120'>to</span> <span
  m='1344270'>go</span> <span m='1344690'>below</span> <span
  m='1345150'>1.</span> <span m='1346660'>OK,</span> <span
  m='1347220'>that's</span> <span m='1347490'>norms.</span> </p><p><span
  m='1350710'>And</span> <span m='1350920'>then</span> <span
  m='1351700'>maybe</span> <span m='1352000'>you</span> <span
  m='1352120'>can</span> <span m='1352390'>actually</span> <span
  m='1352840'>see</span> <span m='1353170'>from</span> <span
  m='1353410'>this</span> <span m='1353650'>picture--</span> <span
  m='1354740'>here</span> <span m='1354940'>is</span> <span
  m='1355110'>a,</span> <span m='1355270'>like,</span> <span
  m='1356080'>somewhat</span> <span m='1356410'>hokey</span> <span
  m='1359950'>idea</span> <span m='1361150'>of</span> <span
  m='1361540'>why</span> <span m='1361930'>it</span> <span m='1362110'>is</span>
  <span m='1362500'>that</span> <span m='1364360'>minimizing</span> <span
  m='1365320'>the</span> <span m='1367510'>area</span> <span
  m='1367930'>in</span> <span m='1368140'>this</span> <span
  m='1368500'>norm--</span> <span m='1369310'>so</span> <span
  m='1369490'>what</span> <span m='1369910'>do</span> <span m='1370030'>I</span>
  <span m='1370120'>mean</span> <span m='1370390'>by</span> <span
  m='1370600'>that?</span> <span m='1372600'>Here</span> <span
  m='1373330'>would</span> <span m='1373480'>be</span> <span
  m='1373690'>a</span> <span m='1373750'>typical</span> <span
  m='1374290'>problem.</span> <span m='1375700'>Minimize,</span> <span
  m='1379920'>subject</span> <span m='1380400'>to</span> <span
  m='1380940'>Ax</span> <span m='1381320'>equal</span> <span
  m='1381570'>b,</span> <span m='1383220'>the</span> <span
  m='1383580'>l2--</span> <span m='1385460'>sorry,</span> <span
  m='1385790'>I'm</span> <span m='1386250'>using</span> <span
  m='1386580'>x</span> <span m='1386940'>now--</span> <span
  m='1389490'>the</span> <span m='1390390'>l1</span> <span
  m='1391110'>norm</span> <span m='1391470'>of</span> <span
  m='1391590'>x.</span> <span m='1396900'>So</span> <span
  m='1397520'>that</span> <span m='1397700'>would</span> <span
  m='1397850'>be</span> <span m='1398300'>an</span> <span
  m='1398400'>important</span> <span m='1398900'>problem.</span> <span
  m='1399560'>Actually,</span> <span m='1399860'>it</span> <span
  m='1399920'>has</span> <span m='1400160'>a</span> <span
  m='1400220'>name.</span> <span m='1401090'>People</span> <span
  m='1401450'>have</span> <span m='1401630'>spent</span> <span
  m='1401930'>a</span> <span m='1401990'>lot</span> <span m='1402200'>of</span>
  <span m='1402260'>time</span> <span m='1402980'>thinking</span> <span
  m='1403340'>of</span> <span m='1403460'>a</span> <span m='1403520'>fast</span>
  <span m='1403940'>way</span> <span m='1404120'>to</span> <span
  m='1404210'>solve</span> <span m='1404600'>it.</span> </p><p><span
  m='1405200'>It's</span> <span m='1405440'>almost</span> <span m='1405830'>like
  least</span> <span m='1406310'>squares.</span> <span m='1406900'>What</span>
  <span m='1407100'>would</span> <span m='1408020'>make</span> <span
  m='1408320'>it</span> <span m='1409550'>more</span> <span
  m='1409910'>like</span> <span m='1410195'>least</span> <span
  m='1410480'>squares</span> <span m='1411050'>would</span> <span
  m='1411260'>be,</span> <span m='1411500'>change</span> <span
  m='1411920'>that</span> <span m='1412240'>to</span> <span
  m='1412480'>2.</span> <span m='1415750'>Yeah.</span> <span
  m='1417860'>Can</span> <span m='1418100'>I</span> <span
  m='1418190'>just</span> <span m='1418400'>sort</span> <span
  m='1418640'>of</span> <span m='1419570'>sketch,</span> <span
  m='1420140'>without</span> <span m='1420710'>making</span> <span
  m='1421190'>a</span> <span m='1421820'>big</span> <span
  m='1422900'>argument</span> <span m='1423410'>here,</span> <span
  m='1424400'>the</span> <span m='1424730'>difference</span> <span
  m='1425210'>between</span> <span m='1425750'>l</span> <span
  m='1425990'>equal</span> <span m='1426290'>1</span> <span
  m='1426800'>or</span> <span m='1427595'>2</span> <span
  m='1428330'>here.</span> <span m='1429480'>Yeah,</span> <span
  m='1430550'>I'll</span> <span m='1430670'>just</span> <span
  m='1431210'>draw</span> <span m='1431450'>a</span> <span
  m='1431480'>picture.</span> <span m='1432070'>Now</span> <span
  m='1432360'>I'll</span> <span m='1432620'>erase</span> <span
  m='1432730'>this</span> <span m='1432920'>ellipse,</span> <span
  m='1434150'>but</span> <span m='1434330'>you</span> <span
  m='1434600'>won't</span> <span m='1435095'>forget.</span> <span
  m='1436580'>OK.</span> </p><p><span m='1439055'>So</span> <span
  m='1439550'>this</span> <span m='1440290'>is</span> <span
  m='1440440'>our</span> <span m='1440590'>problem.</span> <span
  m='1442030'>With</span> <span m='1442510'>l1,</span> <span
  m='1443140'>it</span> <span m='1443260'>has</span> <span m='1443500'>a</span>
  <span m='1443560'>famous</span> <span m='1444040'>name,</span> <span
  m='1444730'>basis</span> <span m='1445240'>pursuit.</span> <span
  m='1445930'>Well</span> <span m='1446200'>famous</span> <span
  m='1446720'>to</span> <span m='1446830'>people</span> <span
  m='1447220'>who</span> <span m='1447940'>work</span> <span
  m='1448330'>in</span> <span m='1448630'>optimization.</span> <span
  m='1449920'>For</span> <span m='1450130'>l2,</span> <span
  m='1451390'>it</span> <span m='1451510'>has</span> <span m='1451780'>an</span>
  <span m='1451840'>important</span> <span m='1452320'>name.</span> <span
  m='1452740'>Well</span> <span m='1452950'>it's</span> <span
  m='1453520'>sort</span> <span m='1453790'>of</span> <span
  m='1453880'>like</span> <span m='1454180'>least</span> <span
  m='1454390'>squares.</span> <span m='1456340'>Ridge</span> <span
  m='1457180'>regression.</span> <span m='1460180'>This</span> <span
  m='1460330'>is</span> <span m='1460480'>like</span> <span m='1461080'>a</span>
  <span m='1461170'>beautiful</span> <span m='1461800'>model</span> <span
  m='1462220'>problem.</span> <span m='1463000'>Among</span> <span
  m='1463330'>all</span> <span m='1463540'>solutions</span> <span
  m='1464290'>to</span> <span m='1464410'>Ax,</span> <span
  m='1464830'>suppose</span> <span m='1465340'>this</span> <span
  m='1465490'>is</span> <span m='1465610'>just</span> <span
  m='1465850'>one</span> <span m='1466120'>equation,</span> <span
  m='1467310'>like</span> <span m='1469000'>c1x1</span> <span
  m='1470920'>plus</span> <span m='1471220'>c2x2</span> <span
  m='1472750'>equals</span> <span m='1473590'>some</span> <span
  m='1473830'>right</span> <span m='1474130'>side,</span> <span
  m='1474550'>b.</span> <span m='1475970'>So</span> <span m='1477860'>the</span>
  <span m='1477980'>constraint</span> <span m='1478580'>says</span> <span
  m='1479540'>that</span> <span m='1479760'>the</span> <span
  m='1480260'>vectors</span> <span m='1480800'>x</span> <span
  m='1481160'>have</span> <span m='1481400'>to</span> <span
  m='1481520'>be</span> <span m='1481670'>on</span> <span m='1481840'>a</span>
  <span m='1481910'>line.</span> <span m='1483500'>Suppose</span> <span
  m='1483950'>that's</span> <span m='1484250'>a</span> <span
  m='1484670'>graph</span> <span m='1485090'>of</span> <span
  m='1485210'>that</span> <span m='1485450'>line.</span> </p><p><span
  m='1486560'>So</span> <span m='1487490'>among</span> <span
  m='1487790'>all</span> <span m='1488060'>these</span> <span
  m='1488390'>x's,</span> <span m='1490310'>which</span> <span
  m='1490670'>one--</span> <span m='1491510'>oh,</span> <span
  m='1491630'>I'm</span> <span m='1492780'>realizing</span> <span
  m='1494150'>what</span> <span m='1494330'>I'm</span> <span
  m='1494480'>going</span> <span m='1494600'>to</span> <span
  m='1494720'>say</span> <span m='1494990'>is</span> <span
  m='1495140'>going</span> <span m='1495250'>to</span> <span
  m='1495350'>be</span> <span m='1495890'>smart.</span> <span
  m='1496880'>I</span> <span m='1497190'>mean,</span> <span
  m='1498110'>it's</span> <span m='1498670'>going</span> <span
  m='1498860'>to</span> <span m='1498950'>be</span> <span
  m='1499040'>nice.</span> <span m='1500500'>Not</span> <span
  m='1500690'>going</span> <span m='1500810'>to</span> <span
  m='1500930'>be</span> <span m='1501050'>difficult.</span> <span
  m='1501980'>Let's</span> <span m='1502280'>do</span> <span
  m='1503050'>the</span> <span m='1503180'>one</span> <span
  m='1503420'>we</span> <span m='1503570'>know</span> <span
  m='1503780'>best,</span> <span m='1504750'>l2.</span> <span
  m='1505850'>So</span> <span m='1506060'>here's</span> <span
  m='1506390'>a</span> <span m='1506450'>picture</span> <span
  m='1506840'>of</span> <span m='1506930'>the</span> <span
  m='1507060'>line.</span> <span m='1507560'>Let</span> <span
  m='1508370'>me</span> <span m='1508490'>make</span> <span
  m='1508790'>it</span> <span m='1508940'>a</span> <span
  m='1509000'>little</span> <span m='1509240'>more</span> <span
  m='1509480'>tilted</span> <span m='1510170'>so</span> <span
  m='1511100'>you--</span> <span m='1515980'>yeah,</span> <span
  m='1516310'>like</span> <span m='1516790'>2,</span> <span
  m='1517000'>3.</span> <span m='1519470'>OK.</span> </p><p><span
  m='1521030'>This is</span> <span m='1521150'>the</span> <span
  m='1521300'>xy</span> <span m='1521750'>plane.</span> <span
  m='1522500'>Here's</span> <span m='1522740'>x1,</span> <span
  m='1523940'>here's</span> <span m='1524150'>x2.</span> <span
  m='1525320'>Here</span> <span m='1525950'>are</span> <span
  m='1526010'>the</span> <span m='1526130'>points</span> <span
  m='1526580'>that</span> <span m='1526700'>satisfy</span> <span
  m='1527390'>my</span> <span m='1527600'>condition.</span> <span
  m='1529040'>Which</span> <span m='1530990'>point</span> <span
  m='1531350'>on</span> <span m='1531500'>that</span> <span
  m='1531680'>line</span> <span m='1532880'>minimizes--</span> <span
  m='1533780'>has</span> <span m='1533990'>the</span> <span
  m='1534080'>smallest</span> <span m='1535460'>l2</span> <span
  m='1535940'>norm?</span> <span m='1537570'>Which</span> <span
  m='1537840'>point</span> <span m='1538230'>on</span> <span
  m='1538380'>the</span> <span m='1538500'>line</span> <span
  m='1540000'>has</span> <span m='1540360'>the</span> <span
  m='1540510'>smallest</span> <span m='1541230'>l2</span> <span
  m='1541720'>norm?</span> <span m='1543920'>Yeah,</span> <span
  m='1544340'>you're</span> <span m='1546560'>drawing</span> <span
  m='1546920'>the</span> <span m='1547010'>right</span> <span
  m='1547310'>figure</span> <span m='1547520'>with</span> <span
  m='1547880'>your</span> <span m='1548060'>hands.</span> </p><p><span
  m='1548990'>The</span> <span m='1549140'>smallest</span> <span
  m='1549710'>l2</span> <span m='1550070'>norm--</span> <span
  m='1550640'>l2,</span> <span m='1551630'>remember,</span> <span
  m='1552170'>is</span> <span m='1552350'>just</span> <span
  m='1552920'>how</span> <span m='1553130'>far</span> <span
  m='1553430'>out</span> <span m='1553730'>you</span> <span
  m='1553820'>go.</span> <span m='1555160'>It's</span> <span
  m='1556630'>circular</span> <span m='1557230'>here,</span> <span
  m='1557530'>so</span> <span m='1557690'>it</span> <span
  m='1557740'>doesn't</span> <span m='1557950'>matter</span> <span
  m='1558190'>what</span> <span m='1558400'>direction.</span> <span
  m='1559450'>They're all</span> <span m='1559750'>giving</span> <span
  m='1560080'>the</span> <span m='1560230'>same</span> <span
  m='1560620'>l2</span> <span m='1560980'>norm,</span> <span
  m='1561280'>it's</span> <span m='1561430'>just</span> <span
  m='1561640'>how</span> <span m='1561910'>far.</span> <span
  m='1562740'>So</span> <span m='1562900'>we're</span> <span
  m='1563080'>looking</span> <span m='1563470'>for</span> <span
  m='1563650'>the</span> <span m='1563800'>closest</span> <span
  m='1564400'>point</span> <span m='1564790'>on</span> <span
  m='1564910'>the</span> <span m='1565000'>line</span> <span
  m='1567100'>because</span> <span m='1567310'>we</span> <span
  m='1567460'>don't</span> <span m='1567610'>want</span> <span
  m='1567760'>to</span> <span m='1567850'>go</span> <span m='1568060'>any</span>
  <span m='1568240'>further.</span> <span m='1568720'>We</span> <span
  m='1568930'>want</span> <span m='1569140'>to</span> <span
  m='1569200'>go</span> <span m='1569440'>a</span> <span
  m='1569530'>minimum</span> <span m='1570040'>distance</span> <span
  m='1571390'>with--</span> <span m='1571880'>I'm</span> <span
  m='1572040'>doing</span> <span m='1572340'>l2</span> <span
  m='1573160'>now.</span> </p><p><span m='1576850'>So</span> <span
  m='1577030'>where is</span> <span m='1577360'>the</span> <span
  m='1577450'>point</span> <span m='1577780'>at</span> <span
  m='1577900'>minimum</span> <span m='1578290'>distance?</span> <span
  m='1578890'>Yeah,</span> <span m='1579100'>just</span> <span
  m='1579430'>show</span> <span m='1579670'>me</span> <span
  m='1579850'>again</span> <span m='1580240'>once</span> <span
  m='1580570'>more,</span> <span m='1581350'>with</span> <span
  m='1581530'>hands</span> <span m='1582010'>or</span> <span
  m='1582490'>whatever.</span> <span m='1583800'>It'll</span> <span
  m='1584080'>be</span> <span m='1584300'>that.</span> <span
  m='1586420'>I</span> <span m='1586560'>didn't</span> <span m='1586810'>want
  45</span> <span m='1587830'>degree</span> <span m='1588250'>angles</span>
  <span m='1588790'>there.</span> <span m='1589840'>I'm</span> <span
  m='1590050'>going</span> <span m='1590190'>to</span> <span
  m='1590330'>erase</span> <span m='1590710'>it</span> <span
  m='1590800'>again</span> <span m='1591240'>and</span> <span
  m='1592030'>really--</span> <span m='1593350'>this</span> <span
  m='1593590'>time,</span> <span m='1593920'>I'm</span> <span
  m='1594100'>going</span> <span m='1594230'>to</span> <span
  m='1594370'>get</span> <span m='1595540'>angles</span> <span
  m='1596200'>that</span> <span m='1596350'>are</span> <span
  m='1596470'>not</span> <span m='1597840'>45</span> <span
  m='1598760'>[INAUDIBLE]</span> <span m='1601000'>All</span> <span
  m='1601210'>right,</span> <span m='1601600'>brilliant.</span> <span
  m='1602890'>Got</span> <span m='1603220'>it.</span> <span
  m='1604180'>OK,</span> <span m='1604660'>that's</span> <span
  m='1604990'>my</span> <span m='1605200'>line.</span> </p><p><span
  m='1605880'>OK,</span> <span m='1606230'>and</span> <span
  m='1606310'>what's</span> <span m='1606580'>the</span> <span
  m='1606670'>nearest</span> <span m='1607060'>point</span> <span
  m='1607480'>in</span> <span m='1607630'>the</span> <span m='1607750'>l2</span>
  <span m='1608140'>norm?</span> <span m='1608430'>Here's</span> <span
  m='1608680'>the</span> <span m='1608830'>winner</span> <span
  m='1609460'>in</span> <span m='1609690'>l2,</span> <span
  m='1610590'>right?</span> <span m='1611040'>The</span> <span
  m='1611140'>nearest</span> <span m='1611500'>point.</span> <span
  m='1613870'>Everybody</span> <span m='1614230'>sees</span> <span
  m='1614560'>that</span> <span m='1614770'>picture?</span> <span
  m='1615280'>So</span> <span m='1615400'>that's</span> <span
  m='1617470'>a</span> <span m='1618280'>basic</span> <span
  m='1620270'>picture</span> <span m='1620810'>for</span> <span
  m='1622790'>minimizing</span> <span m='1623870'>something</span> <span
  m='1624380'>with</span> <span m='1624640'>a</span> <span
  m='1624710'>constraint,</span> <span m='1626100'>which</span> <span
  m='1626270'>is</span> <span m='1626480'>the</span> <span
  m='1626600'>fundamental</span> <span m='1627170'>problem</span> <span
  m='1627680'>of</span> <span m='1628610'>optimization,</span> <span
  m='1629720'>of</span> <span m='1629930'>neural</span> <span
  m='1630320'>nets,</span> <span m='1630830'>of</span> <span
  m='1630950'>everything,</span> <span m='1631550'>really.</span> <span
  m='1632600'>Of</span> <span m='1632780'>life.</span> <span
  m='1634530'>Well</span> <span m='1634830'>I'm</span> <span
  m='1635310'>getting</span> <span m='1635850'>philosophical.</span>
  </p><p><span m='1639750'>But</span> <span m='1641520'>the</span> <span
  m='1641640'>question</span> <span m='1642120'>always</span> <span
  m='1642450'>is,</span> <span m='1642750'>and</span> <span
  m='1642870'>maybe</span> <span m='1643170'>it's</span> <span
  m='1643350'>true</span> <span m='1643560'>in</span> <span
  m='1643680'>life,</span> <span m='1643980'>too,</span> <span
  m='1644580'>which</span> <span m='1644820'>norm</span> <span
  m='1645180'>are</span> <span m='1645300'>you</span> <span
  m='1645510'>using?</span> <span m='1646690'>OK,</span> <span
  m='1647520'>now</span> <span m='1649890'>that</span> <span
  m='1650130'>was</span> <span m='1650370'>the</span> <span
  m='1651300'>minimum</span> <span m='1653920'>in</span> <span
  m='1654100'>l2.</span> <span m='1654640'>That's</span> <span
  m='1654880'>the</span> <span m='1654970'>shortest</span> <span
  m='1655450'>distance,</span> <span m='1656410'>where</span> <span
  m='1656590'>distance</span> <span m='1657160'>means</span> <span
  m='1657610'>what</span> <span m='1657760'>we</span> <span
  m='1657970'>usually</span> <span m='1658360'>think</span> <span
  m='1658690'>of</span> <span m='1658780'>it</span> <span m='1659320'>as</span>
  <span m='1659470'>meaning.</span> <span m='1660430'>But</span> <span
  m='1660640'>now,</span> <span m='1661630'>let's</span> <span
  m='1661900'>go</span> <span m='1662170'>for</span> <span
  m='1662320'>the</span> <span m='1662490'>l1</span> <span
  m='1662970'>norm.</span> <span m='1664120'>Which</span> <span
  m='1664390'>point</span> <span m='1664750'>on</span> <span
  m='1664870'>the</span> <span m='1664960'>line</span> <span
  m='1665380'>has</span> <span m='1665710'>the</span> <span
  m='1665830'>smallest</span> <span m='1666880'>l1</span> <span
  m='1667610'>norm?</span> </p><p><span m='1669830'>So</span> <span
  m='1670040'>now</span> <span m='1670250'>I'm</span> <span
  m='1670370'>going</span> <span m='1670520'>to</span> <span
  m='1670610'>add</span> <span m='1670880'>the</span> <span
  m='1671150'>2.</span> <span m='1673180'>So</span> <span m='1673390'>if</span>
  <span m='1673510'>this</span> <span m='1673720'>is</span> <span
  m='1673840'>some</span> <span m='1674140'>point</span> <span
  m='1674680'>a,</span> <span m='1675040'>0</span> <span m='1679640'>and</span>
  <span m='1679840'>this</span> <span m='1680050'>is</span> <span
  m='1680140'>some</span> <span m='1680410'>point</span> <span m='1680800'>0,
  b</span> <span m='1683440'>right</span> <span m='1683640'>there.</span> <span
  m='1684520'>So</span> <span m='1684630'>those</span> <span
  m='1684900'>two</span> <span m='1685080'>points</span> <span
  m='1685470'>are</span> <span m='1685560'>obviously</span> <span
  m='1686100'>important.</span> <span m='1687030'>And</span> <span
  m='1687180'>that</span> <span m='1687360'>point,</span> <span
  m='1687780'>we</span> <span m='1687990'>could</span> <span
  m='1688200'>figure</span> <span m='1688590'>out</span> <span
  m='1688740'>the</span> <span m='1688860'>formula</span> <span
  m='1689310'>for</span> <span m='1690210'>because</span> <span
  m='1692100'>we</span> <span m='1692730'>know</span> <span
  m='1692940'>what</span> <span m='1693120'>the</span> <span
  m='1693270'>geometry</span> <span m='1693960'>is.</span> <span
  m='1694560'>But</span> <span m='1694890'>I've</span> <span
  m='1695100'>just</span> <span m='1695340'>put</span> <span
  m='1695550'>those</span> <span m='1695850'>two</span> <span
  m='1696060'>points</span> <span m='1696480'>in.</span> <span
  m='1697230'>So</span> <span m='1697470'>did</span> <span m='1697680'>I</span>
  <span m='1698130'>get</span> <span m='1698310'>a</span> <span
  m='1698430'>0,</span> <span m='1698820'>b?</span> <span m='1699160'>Yeah,
  that's</span> <span m='1699500'>a</span> <span m='1699840'>zero.</span>
  </p><p><span m='1702790'>So</span> <span m='1702900'>let</span> <span
  m='1703020'>me</span> <span m='1703140'>just</span> <span
  m='1703350'>ask</span> <span m='1703620'>you</span> <span
  m='1703770'>the</span> <span m='1703840'>question.</span> <span
  m='1704310'>What</span> <span m='1704580'>point</span> <span
  m='1704940'>on</span> <span m='1705060'>that</span> <span
  m='1705240'>line</span> <span m='1705540'>has</span> <span
  m='1705780'>the</span> <span m='1705870'>smallest</span> <span
  m='1706530'>l1</span> <span m='1706905'>norm?</span> <span
  m='1708590'>Which</span> <span m='1708860'>has</span> <span
  m='1709070'>the</span> <span m='1709190'>smallest</span> <span
  m='1709790'>l1</span> <span m='1710250'>norm?</span> <span
  m='1713500'>Somebody</span> <span m='1713830'>said</span> <span
  m='1714100'>it.</span> <span m='1714190'>Just</span> <span
  m='1714460'>say</span> <span m='1714700'>it a</span> <span
  m='1714750'>little</span> <span m='1714940'>louder</span> <span
  m='1715420'>so</span> <span m='1715660'>that</span> <span
  m='1715880'>you're</span> <span m='1716110'>on</span> <span
  m='1716800'>tape</span> <span m='1717160'>forever.</span> </p><p><span
  m='1720130'>AUDIENCE:</span> <span m='1720270'>0,</span> <span
  m='1720410'>b.</span> </p><p><span m='1720970'>GILBERT STRANG:</span> <span
  m='1721105'>0,</span> <span m='1721240'>b,</span> <span
  m='1721780'>this</span> <span m='1722050'>point.</span> <span
  m='1723120'>That's</span> <span m='1723470'>the</span> <span
  m='1723590'>winner.</span> <span m='1725500'>This</span> <span
  m='1725740'>is</span> <span m='1725890'>the</span> <span m='1726070'>l1</span>
  <span m='1726850'>winner</span> <span m='1729760'>and</span> <span
  m='1729820'>this</span> <span m='1730120'>was</span> <span
  m='1730360'>the</span> <span m='1730510'>l2</span> <span
  m='1731080'>winner.</span> <span m='1734180'>And</span> <span
  m='1734320'>notice</span> <span m='1735460'>what</span> <span
  m='1735670'>I</span> <span m='1736510'>said</span> <span
  m='1736810'>earlier,</span> <span m='1737390'>and</span> <span
  m='1737440'>I</span> <span m='1737560'>didn't</span> <span
  m='1737890'>see</span> <span m='1738160'>it</span> <span
  m='1738310'>coming,</span> <span m='1738800'>but</span> <span
  m='1738850'>now</span> <span m='1739060'>I</span> <span
  m='1739150'>realize</span> <span m='1739630'>this</span> <span
  m='1739810'>is</span> <span m='1739930'>a</span> <span
  m='1739990'>figure</span> <span m='1740380'>to</span> <span
  m='1740470'>put</span> <span m='1740720'>in</span> <span
  m='1740830'>the</span> <span m='1740920'>notes.</span> <span
  m='1742540'>The</span> <span m='1742690'>winner</span> <span
  m='1744310'>has</span> <span m='1746600'>the</span> <span
  m='1746750'>most</span> <span m='1747320'>zeros.</span> <span
  m='1747920'>It's</span> <span m='1748130'>the</span> <span m='1748280'>[?
  sparsest ?]</span> <span m='1749030'>vector.</span> <span
  m='1750860'>Well</span> <span m='1751130'>out</span> <span
  m='1751340'>of</span> <span m='1751430'>two</span> <span
  m='1751820'>components,</span> <span m='1752530'>it</span> <span
  m='1752600'>didn't</span> <span m='1752870'>have</span> <span
  m='1753140'>much</span> <span m='1753680'>freedom,</span> <span
  m='1754500'>but</span> <span m='1754580'>it</span> <span
  m='1754760'>has</span> <span m='1755150'>a</span> <span
  m='1755210'>zero</span> <span m='1755630'>component.</span> <span
  m='1756830'>It's</span> <span m='1757460'>on</span> <span
  m='1761860'>the</span> <span m='1762010'>axes.</span> <span
  m='1763950'>It's</span> <span m='1764180'>the</span> <span
  m='1764300'>things</span> <span m='1764690'>on</span> <span
  m='1764870'>the</span> <span m='1765020'>axes</span> <span
  m='1765590'>that</span> <span m='1765740'>have</span> <span
  m='1766010'>the</span> <span m='1766100'>smallest</span> <span
  m='1766700'>number</span> <span m='1767060'>of</span> <span
  m='1767150'>components.</span> </p><p><span m='1768490'>So</span> <span
  m='1769580'>yeah,</span> <span m='1770480'>this</span> <span
  m='1770720'>is</span> <span m='1770870'>the</span> <span
  m='1770990'>picture</span> <span m='1771510'>in</span> <span
  m='1775520'>two</span> <span m='1775760'>dimensions.</span> <span
  m='1776780'>So</span> <span m='1776900'>I'm</span> <span m='1777080'>in</span>
  <span m='1777360'>2D.</span> <span m='1779240'>And</span> <span
  m='1779450'>you</span> <span m='1779570'>can</span> <span
  m='1779750'>see</span> <span m='1780110'>that</span> <span
  m='1780290'>the</span> <span m='1780410'>winner</span> <span
  m='1780830'>has</span> <span m='1781520'>a</span> <span
  m='1781580'>zero</span> <span m='1781970'>component,</span> <span
  m='1782720'>yeah.</span> <span m='1786680'>And</span> <span
  m='1786840'>that's</span> <span m='1787140'>a</span> <span
  m='1787230'>fact</span> <span m='1788080'>that</span> <span
  m='1788730'>extends</span> <span m='1789420'>into</span> <span
  m='1789690'>higher</span> <span m='1789990'>dimensions</span> <span
  m='1790680'>too</span> <span m='1791040'>and</span> <span
  m='1791190'>that</span> <span m='1791400'>makes</span> <span
  m='1792210'>the</span> <span m='1792390'>l1</span> <span
  m='1792930'>norm</span> <span m='1793670'>special,</span> <span
  m='1794290'>as</span> <span m='1794460'>I've</span> <span
  m='1794610'>said.</span> <span m='1795270'>Yeah.</span> <span
  m='1795740'>Is</span> <span m='1796080'>there</span> <span
  m='1796200'>more</span> <span m='1796470'>to</span> <span
  m='1796620'>say</span> <span m='1796920'>about</span> <span
  m='1797250'>that</span> <span m='1797960'>example?</span> </p><p><span
  m='1800130'>For</span> <span m='1800400'>a</span> <span
  m='1800430'>simple</span> <span m='1800850'>2D</span> <span
  m='1802920'>question,</span> <span m='1804770'>that</span> <span
  m='1804920'>really</span> <span m='1805220'>makes</span> <span
  m='1805560'>the</span> <span m='1805640'>point</span> <span
  m='1807040'>that</span> <span m='1807280'>the</span> <span
  m='1807550'>l1</span> <span m='1808090'>winner</span> <span
  m='1808600'>is</span> <span m='1808870'>there.</span> <span
  m='1809200'>It's</span> <span m='1809380'>not</span> <span
  m='1809620'>further.</span> <span m='1810070'>You</span> <span
  m='1810190'>don't</span> <span m='1810400'>go</span> <span
  m='1810580'>further</span> <span m='1810970'>up</span> <span
  m='1811120'>the</span> <span m='1811240'>line,</span> <span
  m='1811600'>right?</span> <span m='1812040'>Because</span> <span
  m='1815350'>that's</span> <span m='1815950'>bad</span> <span
  m='1816330'>in</span> <span m='1816420'>all</span> <span
  m='1816550'>ways.</span> <span m='1817530'>When</span> <span
  m='1817750'>you</span> <span m='1817870'>go</span> <span m='1818110'>up</span>
  <span m='1818320'>further,</span> <span m='1819130'>you're</span> <span
  m='1819820'>adding</span> <span m='1820420'>some</span> <span
  m='1820660'>non-zero</span> <span m='1822640'>first</span> <span
  m='1823000'>component</span> <span m='1823630'>and</span> <span
  m='1823780'>you're</span> <span m='1823960'>increasing</span> <span
  m='1824680'>the</span> <span m='1825110'>non-zero</span> <span
  m='1825850'>second</span> <span m='1826240'>component,</span> <span
  m='1827000'>so</span> <span m='1828250'>that's</span> <span
  m='1828610'>a</span> <span m='1828670'>bad</span> <span
  m='1828970'>idea.</span> <span m='1829840'>That's</span> <span
  m='1830110'>a</span> <span m='1830140'>bad</span> <span
  m='1830410'>idea.</span> <span m='1830870'>This</span> <span
  m='1830960'>is</span> <span m='1831740'>the</span> <span
  m='1831850'>winner.</span> </p><p><span m='1832480'>And</span> <span
  m='1835840'>in</span> <span m='1835990'>a</span> <span m='1836050'>way,</span>
  <span m='1836470'>here's</span> <span m='1836800'>the</span> <span
  m='1836920'>picture.</span> <span m='1838570'>Oh</span> <span
  m='1838840'>yeah.</span> <span m='1840490'>I</span> <span
  m='1840730'>should</span> <span m='1840940'>prepare</span> <span
  m='1841390'>these</span> <span m='1841630'>lectures,</span> <span
  m='1842200'>but</span> <span m='1842890'>this</span> <span
  m='1843100'>one's</span> <span m='1843340'>coming</span> <span
  m='1843640'>out</span> <span m='1843820'>all</span> <span
  m='1843930'>right</span> <span m='1844180'>anyway.</span> <span
  m='1845050'>So</span> <span m='1846160'>the</span> <span
  m='1846280'>picture</span> <span m='1846820'>there</span> <span
  m='1847240'>is</span> <span m='1847480'>the</span> <span
  m='1847630'>nearest</span> <span m='1848170'>ball</span> <span
  m='1849640'>hits</span> <span m='1849940'>at</span> <span
  m='1850060'>that</span> <span m='1850300'>point.</span> <span
  m='1852470'>And</span> <span m='1852770'>what</span> <span
  m='1853160'>is</span> <span m='1853340'>it?</span> <span
  m='1853640'>Can</span> <span m='1853880'>you</span> <span
  m='1854000'>see</span> <span m='1854300'>that?</span> <span
  m='1854540'>So</span> <span m='1854720'>that</span> <span
  m='1855170'>star</span> <span m='1855750'>is</span> <span
  m='1855920'>outside</span> <span m='1856550'>the</span> <span
  m='1856820'>circle.</span> <span m='1857840'>This</span> <span
  m='1858080'>is</span> <span m='1858230'>the</span> <span m='1858420'>l1</span>
  <span m='1859070'>winner</span> <span m='1860540'>and</span> <span
  m='1860690'>that's</span> <span m='1861050'>the</span> <span
  m='1863810'>blow</span> <span m='1864410'>up</span> <span
  m='1864710'>the</span> <span m='1865640'>l1</span> <span
  m='1866400'>norm</span> <span m='1867260'>until</span> <span
  m='1867650'>it</span> <span m='1867800'>hits.</span> <span
  m='1868730'>That's</span> <span m='1869060'>the</span> <span
  m='1869150'>point</span> <span m='1869510'>where</span> <span
  m='1869750'>the</span> <span m='1869990'>l1</span> <span
  m='1870810'>norm</span> <span m='1871700'>hits.</span> </p><p><span
  m='1873980'>Do</span> <span m='1874100'>you</span> <span
  m='1874190'>see</span> <span m='1874400'>it?</span> <span
  m='1876260'>Just</span> <span m='1876860'>give</span> <span
  m='1877100'>it</span> <span m='1877150'>a</span> <span
  m='1877190'>little</span> <span m='1877460'>thought,</span> <span
  m='1877850'>that</span> <span m='1879080'>another</span> <span
  m='1880190'>geometric</span> <span m='1880820'>way</span> <span
  m='1880970'>to</span> <span m='1881090'>see</span> <span
  m='1881510'>the</span> <span m='1881690'>answer</span> <span
  m='1882080'>to</span> <span m='1882230'>this</span> <span
  m='1882470'>problem</span> <span m='1882920'>is,</span> <span
  m='1883640'>you</span> <span m='1883790'>start</span> <span
  m='1884110'>at</span> <span m='1884220'>the</span> <span
  m='1884390'>origin</span> <span m='1884960'>and</span> <span
  m='1885330'>you</span> <span m='1885530'>blow</span> <span
  m='1885890'>up</span> <span m='1886080'>the</span> <span
  m='1886180'>norm</span> <span m='1886520'>until</span> <span
  m='1886820'>you</span> <span m='1886970'>get</span> <span m='1888710'>a</span>
  <span m='1888800'>point</span> <span m='1889160'>on</span> <span
  m='1889310'>the</span> <span m='1889400'>line</span> <span
  m='1890240'>that</span> <span m='1890450'>satisfies</span> <span
  m='1891140'>your</span> <span m='1891260'>constraint.</span> <span
  m='1892280'>And</span> <span m='1892400'>because</span> <span
  m='1892730'>you</span> <span m='1892850'>were</span> <span
  m='1892970'>blowing</span> <span m='1893480'>up</span> <span
  m='1893640'>the</span> <span m='1893730'>norm,</span> <span
  m='1894710'>when</span> <span m='1894920'>it</span> <span
  m='1895040'>hits</span> <span m='1895310'>first,</span> <span
  m='1896870'>that's</span> <span m='1897080'>the</span> <span
  m='1897170'>smallest</span> <span m='1897680'>blow-up</span> <span
  m='1898130'>possible.</span> <span m='1899350'>That's</span> <span
  m='1899560'>the</span> <span m='1900950'>guy</span> <span
  m='1901220'>that</span> <span m='1901400'>minimizes.</span> <span
  m='1902970'>Yeah,</span> <span m='1903430'>so</span> <span
  m='1903560'>just</span> <span m='1903740'>think</span> <span
  m='1903940'>about</span> <span m='1904160'>that</span> <span
  m='1904370'>picture</span> <span m='1904820'>and</span> <span
  m='1904940'>I'll</span> <span m='1907040'>draw</span> <span
  m='1907280'>it</span> <span m='1907400'>better</span> <span
  m='1907790'>somewhere,</span> <span m='1908190'>too.</span> </p><p><span
  m='1909760'>Well</span> <span m='1910330'>that's</span> <span
  m='1911950'>vector</span> <span m='1912310'>norms.</span> <span
  m='1915520'>And</span> <span m='1915700'>then</span> <span
  m='1916720'>I</span> <span m='1916900'>introduce</span> <span
  m='1917410'>some</span> <span m='1917620'>matrix</span> <span
  m='1918220'>norms,</span> <span m='1918640'>and</span> <span
  m='1918910'>let</span> <span m='1919090'>me</span> <span
  m='1919210'>just</span> <span m='1919420'>say</span> <span
  m='1919660'>a</span> <span m='1919720'>word</span> <span
  m='1920020'>about</span> <span m='1920320'>those.</span> <span
  m='1925460'>OK,</span> <span m='1925932'>a</span> <span
  m='1926404'>word</span> <span m='1927180'>about</span> <span
  m='1927480'>matrix</span> <span m='1927765'>norms.</span> <span
  m='1928410'>So</span> <span m='1929670'>the</span> <span
  m='1929790'>matrix</span> <span m='1930390'>norms</span> <span
  m='1931410'>were</span> <span m='1934110'>the--</span> <span
  m='1936720'>so</span> <span m='1936940'>now</span> <span m='1937150'>I</span>
  <span m='1937240'>have</span> <span m='1937420'>a</span> <span
  m='1937480'>matrix</span> <span m='1937780'>A</span> <span
  m='1939742'>and</span> <span m='1941480'>I</span> <span
  m='1941630'>want</span> <span m='1941900'>to</span> <span
  m='1943010'>define</span> <span m='1943940'>those</span> <span
  m='1944180'>same</span> <span m='1944660'>three</span> <span
  m='1945050'>norms</span> <span m='1945560'>again</span> <span
  m='1946040'>for</span> <span m='1946250'>a</span> <span
  m='1946310'>matrix.</span> <span m='1947870'>And</span> <span
  m='1948740'>this</span> <span m='1949040'>was</span> <span
  m='1949480'>the</span> <span m='1950586'>2</span> <span
  m='1951290'>norm,</span> <span m='1953380'>and</span> <span
  m='1954010'>what</span> <span m='1954340'>was</span> <span
  m='1954640'>the</span> <span m='1954820'>2</span> <span
  m='1955120'>norm</span> <span m='1955510'>of</span> <span m='1955630'>a</span>
  <span m='1955700'>matrix?</span> </p><p><span m='1956660'>Well</span> <span
  m='1957850'>it</span> <span m='1958090'>was</span> <span
  m='1960400'>sigma</span> <span m='1960790'>1,</span> <span
  m='1963064'>it</span> <span m='1964480'>turned</span> <span
  m='1964780'>out</span> <span m='1964960'>to</span> <span
  m='1965080'>be.</span> <span m='1965710'>So</span> <span
  m='1966370'>that</span> <span m='1966550'>doesn't</span> <span
  m='1967120'>define</span> <span m='1967690'>it.</span> <span
  m='1967900'>Or</span> <span m='1968310'>we</span> <span
  m='1968430'>could</span> <span m='1968680'>define</span> <span
  m='1969130'>it.</span> <span m='1969220'>Just</span> <span
  m='1969430'>say,</span> <span m='1969670'>OK,</span> <span
  m='1970360'>the</span> <span m='1970450'>largest</span> <span
  m='1970870'>singular</span> <span m='1971320'>value</span> <span
  m='1971800'>is</span> <span m='1972040'>the</span> <span m='1972260'>2</span>
  <span m='1972760'>norm</span> <span m='1973120'>of</span> <span
  m='1973210'>the</span> <span m='1973330'>matrix.</span> <span
  m='1974320'>But</span> <span m='1974590'>actually,</span> <span
  m='1975100'>it</span> <span m='1975220'>comes</span> <span
  m='1975580'>from</span> <span m='1975790'>somewhere.</span> <span
  m='1976350'>So</span> <span m='1976960'>I</span> <span m='1977230'>want</span>
  <span m='1977440'>to</span> <span m='1977530'>speak</span> <span
  m='1978070'>about</span> <span m='1978370'>this</span> <span
  m='1978640'>one</span> <span m='1978850'>first,</span> <span
  m='1982238'>the</span> <span m='1982722'>2</span> <span
  m='1983560'>norm.</span> </p><p><span m='1984670'>So</span> <span
  m='1986040'>it's</span> <span m='1986240'>the</span> <span
  m='1986310'>2</span> <span m='1986580'>norm</span> <span m='1986970'>of</span>
  <span m='1987120'>a</span> <span m='1987180'>matrix,</span> <span
  m='1988480'>and</span> <span m='1988560'>one</span> <span
  m='1988860'>way</span> <span m='1989070'>to</span> <span
  m='1989220'>see</span> <span m='1989820'>the</span> <span m='1990465'>2</span>
  <span m='1990870'>norm</span> <span m='1991290'>of</span> <span
  m='1991440'>a</span> <span m='1991560'>matrix</span> <span
  m='1992690'>is</span> <span m='1996965'>to</span> <span m='1998870'>connect
  it</span> <span m='1999500'>to</span> <span m='1999650'>the</span> <span
  m='1999800'>2</span> <span m='2000100'>norm</span> <span m='2000370'>of</span>
  <span m='2000850'>vectors.</span> <span m='2003790'>I'd</span> <span
  m='2003940'>like</span> <span m='2004180'>to</span> <span
  m='2004300'>connect</span> <span m='2004750'>the</span> <span
  m='2004900'>2</span> <span m='2005140'>norm of</span> <span
  m='2005530'>matrices</span> <span m='2006220'>to</span> <span m='2006540'>the
  2</span> <span m='2006860'>norm of</span> <span m='2007300'>vectors.</span>
  <span m='2009400'>And</span> <span m='2010780'>how</span> <span
  m='2011020'>shall</span> <span m='2011230'>I</span> <span
  m='2011320'>do</span> <span m='2011500'>that?</span> <span
  m='2012400'>I</span> <span m='2012610'>think</span> <span
  m='2012970'>I'm</span> <span m='2013180'>going</span> <span
  m='2013340'>to</span> <span m='2013450'>look</span> <span
  m='2013810'>at</span> <span m='2014665'>the</span> <span m='2015160'>2</span>
  <span m='2015730'>norm</span> <span m='2016270'>of</span> <span
  m='2016660'>Ax</span> <span m='2019020'>over</span> <span
  m='2019410'>the</span> <span m='2019680'>2</span> <span
  m='2020160'>norm</span> <span m='2020490'>of</span> <span
  m='2020640'>x.</span> </p><p><span m='2023420'>So</span> <span
  m='2023630'>in</span> <span m='2023780'>a</span> <span m='2023840'>way,</span>
  <span m='2024230'>to</span> <span m='2024410'>me,</span> <span
  m='2025370'>that</span> <span m='2025610'>ratio</span> <span
  m='2026180'>is</span> <span m='2026420'>like</span> <span
  m='2026720'>the</span> <span m='2026870'>blow-up</span> <span
  m='2027440'>factor.</span> <span m='2029370'>If</span> <span
  m='2029580'>A</span> <span m='2029850'>was</span> <span
  m='2030090'>seven</span> <span m='2030510'>times</span> <span
  m='2030930'>the</span> <span m='2031020'>identity,</span> <span
  m='2031880'>to</span> <span m='2032100'>take</span> <span
  m='2032370'>an</span> <span m='2032490'>easy</span> <span
  m='2032850'>case--</span> <span m='2033690'>if</span> <span
  m='2033870'>A</span> <span m='2034110'>is</span> <span
  m='2034230'>seven</span> <span m='2034590'>times</span> <span
  m='2034950'>the</span> <span m='2035070'>identity,</span> <span
  m='2035880'>what</span> <span m='2036060'>will</span> <span
  m='2036210'>that</span> <span m='2036390'>ratio</span> <span
  m='2036900'>be?</span> <span m='2040380'>Say</span> <span
  m='2040590'>it,</span> <span m='2040890'>yeah.</span> <span
  m='2041760'>Seven.</span> <span m='2043340'>If</span> <span
  m='2043520'>A</span> <span m='2043730'>is</span> <span m='2044660'>7i,</span>
  <span m='2045110'>this</span> <span m='2046130'>will</span> <span
  m='2046250'>be</span> <span m='2046430'>7x</span> <span m='2047180'>and</span>
  <span m='2047300'>this</span> <span m='2047450'>will</span> <span
  m='2047540'>be</span> <span m='2047720'>x,</span> <span m='2048110'>and</span>
  <span m='2048710'>norms,</span> <span m='2049580'>the</span> <span
  m='2049730'>factor</span> <span m='2050150'>seven</span> <span
  m='2050570'>comes</span> <span m='2050900'>out,</span> <span
  m='2051560'>so</span> <span m='2051920'>that</span> <span
  m='2052100'>ratio</span> <span m='2052489'>will</span> <span
  m='2052670'>be</span> <span m='2052820'>seven.</span> <span
  m='2054662'>OK.</span> </p><p><span m='2056600'>For</span> <span
  m='2056719'>me,</span> <span m='2056989'>the</span> <span
  m='2057170'>norm</span> <span m='2058040'>is--</span> <span
  m='2059989'>that's</span> <span m='2060260'>the</span> <span
  m='2060409'>blow-up</span> <span m='2060860'>factor.</span> <span
  m='2063995'>So</span> <span m='2065340'>here's</span> <span
  m='2067020'>the</span> <span m='2067170'>idea</span> <span
  m='2067500'>of</span> <span m='2067620'>a</span> <span
  m='2067679'>matrix</span> <span m='2068429'>norm.</span> <span
  m='2069130'>Now</span> <span m='2069540'>I'm</span> <span
  m='2069690'>doing</span> <span m='2069960'>matrix.</span> <span
  m='2071159'>Matrix</span> <span m='2071820'>norm</span> <span
  m='2073020'>from</span> <span m='2074070'>vector</span> <span
  m='2074520'>norm.</span> <span m='2078830'>And</span> <span
  m='2079290'>the</span> <span m='2079440'>answer</span> <span
  m='2079770'>will</span> <span m='2079920'>be</span> <span
  m='2080835'>the</span> <span m='2081270'>maximum</span> <span
  m='2082429'>blow-up.</span> <span m='2086210'>The</span> <span
  m='2086360'>maximum</span> <span m='2087239'>of</span> <span
  m='2087480'>this</span> <span m='2087810'>ratio.</span> <span
  m='2088770'>I</span> <span m='2089190'>call</span> <span
  m='2089400'>that</span> <span m='2089580'>ratio</span> <span
  m='2089969'>the</span> <span m='2090090'>blow-up</span> <span
  m='2090480'>factor.</span> <span m='2090909'>That's</span> <span
  m='2091199'>just</span> <span m='2091440'>a</span> <span
  m='2092010'>made-up</span> <span m='2092550'>name.</span> <span
  m='2093210'>The</span> <span m='2093330'>maximum</span> <span
  m='2094110'>over</span> <span m='2095040'>all</span> <span
  m='2095310'>x.</span> <span m='2097731'>All</span> <span m='2098170'>of
  x.</span> </p><p><span m='2098760'>I</span> <span m='2098890'>look</span>
  <span m='2099100'>to</span> <span m='2099220'>see</span> <span
  m='2099490'>which</span> <span m='2099760'>vector</span> <span
  m='2100180'>gets</span> <span m='2100450'>blown</span> <span
  m='2100840'>up</span> <span m='2100990'>the</span> <span
  m='2101140'>most</span> <span m='2102590'>and</span> <span
  m='2102680'>that</span> <span m='2103070'>is</span> <span
  m='2105390'>the</span> <span m='2105540'>norm</span> <span
  m='2107300'>of</span> <span m='2107480'>the</span> <span
  m='2107600'>matrix.</span> <span m='2109670'>I've</span> <span
  m='2110720'>settled</span> <span m='2111230'>on</span> <span
  m='2111410'>norms</span> <span m='2111830'>of</span> <span
  m='2111920'>vectors.</span> <span m='2112460'>That's</span> <span
  m='2113120'>done</span> <span m='2113840'>upstairs</span> <span
  m='2114410'>there.</span> <span m='2115520'>Now</span> <span
  m='2115760'>I'm</span> <span m='2115940'>looking</span> <span
  m='2116360'>at</span> <span m='2116510'>norms</span> <span
  m='2116960'>of</span> <span m='2117110'>matrices.</span> <span
  m='2118580'>And</span> <span m='2119030'>this</span> <span
  m='2119360'>is</span> <span m='2119570'>one</span> <span
  m='2119870'>way</span> <span m='2120110'>to</span> <span
  m='2120230'>get</span> <span m='2120500'>a</span> <span
  m='2120620'>good</span> <span m='2121010'>norm</span> <span
  m='2121370'>of</span> <span m='2121490'>a</span> <span
  m='2121580'>matrix</span> <span m='2122450'>that</span> <span
  m='2122660'>kind</span> <span m='2122930'>of</span> <span
  m='2123050'>comes</span> <span m='2123500'>from</span> <span
  m='2123710'>the</span> <span m='2123830'>2</span> <span
  m='2124070'>norm.</span> <span m='2124760'>So</span> <span
  m='2124940'>there</span> <span m='2125060'>would</span> <span
  m='2125240'>be</span> <span m='2125450'>other</span> <span
  m='2125810'>norms</span> <span m='2126260'>for</span> <span
  m='2126440'>matrices</span> <span m='2127190'>coming</span> <span
  m='2127520'>from</span> <span m='2127760'>other</span> <span
  m='2128270'>vector</span> <span m='2128630'>norms,</span> <span
  m='2129770'>and</span> <span m='2129890'>those,</span> <span
  m='2130560'>we</span> <span m='2130670'>haven't</span> <span
  m='2130970'>seen,</span> <span m='2131300'>but</span> <span
  m='2131480'>the</span> <span m='2131630'>2</span> <span
  m='2132400'>norm</span> <span m='2132690'>is</span> <span m='2133910'>a</span>
  <span m='2133970'>very</span> <span m='2134270'>important</span> <span
  m='2134750'>one.</span> </p><p><span m='2135600'>So</span> <span
  m='2135830'>what</span> <span m='2136190'>is</span> <span
  m='2136430'>the</span> <span m='2136550'>maximum</span> <span
  m='2137160'>value</span> <span m='2137750'>of</span> <span
  m='2138440'>this?</span> <span m='2140030'>Of</span> <span
  m='2140180'>that</span> <span m='2140390'>ratio</span> <span
  m='2141700'>for</span> <span m='2141880'>a</span> <span
  m='2141950'>matrix</span> <span m='2142580'>A?</span> <span
  m='2143433'>The</span> <span m='2144300'>claim</span> <span
  m='2144750'>is</span> <span m='2145560'>that</span> <span
  m='2145740'>it's</span> <span m='2145860'>sigma</span> <span
  m='2146280'>1.</span> <span m='2147890'>I'll</span> <span
  m='2147980'>just</span> <span m='2148270'>put a</span> <span
  m='2148680'>big</span> <span m='2149070'>equality</span> <span
  m='2149610'>there.</span> <span m='2153090'>Now,</span> <span
  m='2153390'>can</span> <span m='2153600'>we</span> <span
  m='2153750'>see,</span> <span m='2154080'>why</span> <span
  m='2154500'>is</span> <span m='2155820'>sigma</span> <span
  m='2156300'>1</span> <span m='2156720'>the answer</span> <span
  m='2157260'>to</span> <span m='2157440'>this</span> <span
  m='2157890'>problem?</span> <span m='2163200'>I</span> <span
  m='2163290'>can</span> <span m='2163500'>see</span> <span m='2163740'>a</span>
  <span m='2163830'>couple</span> <span m='2164160'>of</span> <span
  m='2164220'>ways</span> <span m='2164550'>to</span> <span
  m='2164700'>think</span> <span m='2164910'>about</span> <span
  m='2165210'>that</span> <span m='2165400'>but</span> <span
  m='2165550'>that's</span> <span m='2165780'>a</span> <span
  m='2165840'>very</span> <span m='2166140'>important</span> <span
  m='2166590'>fact.</span> <span m='2167220'>In</span> <span
  m='2167520'>fact,</span> <span m='2168360'>this</span> <span
  m='2168660'>is</span> <span m='2168870'>a</span> <span m='2168990'>way</span>
  <span m='2170490'>to</span> <span m='2172390'>discover</span> <span
  m='2172930'>what</span> <span m='2173170'>sigma</span> <span
  m='2173590'>1</span> <span m='2173890'>is</span> <span
  m='2174850'>without</span> <span m='2175240'>all</span> <span
  m='2175390'>the</span> <span m='2175540'>other</span> <span
  m='2175780'>sigmas.</span> <span m='2176650'>If</span> <span
  m='2176800'>I</span> <span m='2176920'>look</span> <span
  m='2177220'>for</span> <span m='2177370'>the</span> <span m='2177550'>x</span>
  <span m='2178000'>that</span> <span m='2178180'>has</span> <span
  m='2178420'>the</span> <span m='2178510'>biggest</span> <span
  m='2178870'>blow-up</span> <span m='2179290'>factor--</span> <span
  m='2179860'>and</span> <span m='2179980'>by</span> <span
  m='2180190'>the</span> <span m='2180280'>way,</span> <span
  m='2180880'>which</span> <span m='2181210'>x</span> <span
  m='2181510'>will</span> <span m='2181720'>it</span> <span
  m='2181840'>be?</span> <span m='2182260'>Which</span> <span
  m='2182590'>x</span> <span m='2182890'>will</span> <span
  m='2183460'>win</span> <span m='2183760'>the</span> <span
  m='2184630'>max</span> <span m='2185080'>competition</span> <span
  m='2185890'>here</span> <span m='2186610'>and</span> <span
  m='2186790'>be</span> <span m='2187180'>sigma</span> <span
  m='2187630'>1</span> <span m='2187930'>times</span> <span
  m='2188410'>as</span> <span m='2188590'>large</span> <span
  m='2189040'>as--</span> <span m='2190300'>the</span> <span
  m='2193690'>ratio</span> <span m='2194110'>will be</span> <span
  m='2194260'>sigma</span> <span m='2194650'>1.</span> <span
  m='2194920'>That</span> <span m='2195070'>will</span> <span
  m='2195190'>be</span> <span m='2195340'>sigma</span> <span
  m='2195700'>1.</span> <span m='2196090'>When</span> <span
  m='2196360'>is</span> <span m='2196900'>this</span> <span
  m='2197170'>thing</span> <span m='2197470'>sigma</span> <span
  m='2197860'>1</span> <span m='2198160'>times</span> <span
  m='2198580'>as</span> <span m='2198730'>large</span> <span
  m='2199090'>as</span> <span m='2199270'>that?</span> <span
  m='2199540'>For</span> <span m='2199750'>which</span> <span
  m='2200050'>x?</span> </p><p><span m='2202220'>Not</span> <span
  m='2202520'>for</span> <span m='2202700'>an</span> <span
  m='2202850'>eigenvector.</span> <span m='2205120'>If</span> <span
  m='2205270'>x</span> <span m='2205510'>was</span> <span m='2205720'>an</span>
  <span m='2205870'>eigenvector,</span> <span m='2206590'>what</span> <span
  m='2206800'>would</span> <span m='2206950'>that</span> <span
  m='2207130'>ratio</span> <span m='2207520'>be?</span> <span
  m='2210210'>Lambda.</span> <span m='2213200'>But</span> <span
  m='2213500'>if</span> <span m='2213740'>A</span> <span m='2214100'>is</span>
  <span m='2214340'>not</span> <span m='2214640'>a</span> <span
  m='2214700'>symmetric</span> <span m='2215360'>matrix,</span> <span
  m='2216680'>maybe</span> <span m='2217100'>the</span> <span
  m='2217280'>eigenvectors</span> <span m='2218300'>don't</span> <span
  m='2218630'>tell</span> <span m='2218930'>you</span> <span
  m='2219140'>the</span> <span m='2221170'>exact</span> <span
  m='2221590'>way</span> <span m='2221830'>they</span> <span
  m='2221980'>go.</span> <span m='2223170'>So</span> <span
  m='2223360'>what</span> <span m='2223660'>vector</span> <span
  m='2224470'>would</span> <span m='2224710'>you</span> <span
  m='2224830'>now</span> <span m='2225130'>guess?</span> <span
  m='2226090'>It's</span> <span m='2226270'>not</span> <span
  m='2226570'>an</span> <span m='2226750'>eigenvector,</span> <span
  m='2227590'>it</span> <span m='2227740'>is</span> <span m='2227950'>a</span>
  <span m='2229350'>singular</span> <span m='2229980'>vector.</span> <span
  m='2230460'>And</span> <span m='2230590'>which</span> <span
  m='2230850'>singular</span> <span m='2231330'>vector</span> <span
  m='2231720'>is it</span> <span m='2231930'>probably</span> <span
  m='2232290'>going</span> <span m='2232440'>to</span> <span
  m='2232530'>be?</span> <span m='2234180'>v1.</span> <span
  m='2236140'>Yeah,</span> <span m='2236480'>v1</span> <span
  m='2236920'>makes</span> <span m='2237180'>sense.</span> <span
  m='2237550'>Winner.</span> </p><p><span m='2238370'>So</span> <span
  m='2238450'>the</span> <span m='2238570'>winner</span> <span
  m='2238930'>of</span> <span m='2239050'>this</span> <span
  m='2239290'>competition</span> <span m='2241240'>is</span> <span
  m='2241750'>x</span> <span m='2242050'>equal</span> <span
  m='2242370'>v1,</span> <span m='2245070'>the</span> <span
  m='2245260'>first</span> <span m='2246280'>right</span> <span
  m='2248200'>singular</span> <span m='2248970'>vector.</span> <span
  m='2252960'>And</span> <span m='2253110'>we</span> <span
  m='2253260'>better</span> <span m='2253500'>be</span> <span
  m='2253680'>able</span> <span m='2253920'>to</span> <span
  m='2254070'>check</span> <span m='2254370'>that.</span> <span
  m='2254700'>So</span> <span m='2255390'>again,</span> <span
  m='2257650'>this</span> <span m='2257920'>maximization</span> <span
  m='2258940'>problem,</span> <span m='2259510'>the</span> <span
  m='2259990'>answer</span> <span m='2262410'>is</span> <span
  m='2263380'>in</span> <span m='2263920'>terms</span> <span
  m='2264280'>of</span> <span m='2264400'>the</span> <span
  m='2264520'>singular</span> <span m='2264970'>vector.</span> <span
  m='2266440'>So</span> <span m='2266650'>that's</span> <span
  m='2266980'>a</span> <span m='2267040'>way</span> <span m='2267370'>to</span>
  <span m='2267490'>find</span> <span m='2268000'>this</span> <span
  m='2268390'>first</span> <span m='2268720'>singular</span> <span
  m='2269200'>vector</span> <span m='2269590'>without</span> <span
  m='2269950'>finding</span> <span m='2270430'>them</span> <span
  m='2270610'>all.</span> <span m='2272130'>And</span> <span
  m='2272670'>let's</span> <span m='2272910'>just</span> <span m='2273150'>plug
  in</span> <span m='2273720'>the</span> <span m='2273870'>first</span> <span
  m='2274170'>singular</span> <span m='2274680'>vector</span> <span
  m='2275850'>and</span> <span m='2276870'>see</span> <span
  m='2277230'>that</span> <span m='2277440'>the</span> <span
  m='2277560'>ratio</span> <span m='2278130'>is</span> <span
  m='2281700'>sigma</span> <span m='2282120'>1.</span> </p><p><span
  m='2282600'>So</span> <span m='2283230'>now</span> <span
  m='2283470'>let</span> <span m='2283620'>me</span> <span
  m='2283740'>plug</span> <span m='2284100'>it</span> <span
  m='2284190'>in.</span> <span m='2284890'>So</span> <span
  m='2285510'>what</span> <span m='2285690'>do</span> <span m='2285810'>I</span>
  <span m='2285930'>have?</span> <span m='2286290'>I</span> <span
  m='2286650'>want</span> <span m='2286920'>Av1</span> <span
  m='2289800'>over</span> <span m='2290310'>length</span> <span
  m='2290730'>of</span> <span m='2290820'>v1.</span> <span
  m='2292910'>OK.</span> <span m='2294750'>And</span> <span
  m='2294870'>I'm</span> <span m='2295020'>hoping</span> <span
  m='2295350'>to</span> <span m='2295440'>get</span> <span
  m='2295770'>that</span> <span m='2296220'>answer.</span> <span
  m='2297990'>Well</span> <span m='2298230'>what's</span> <span
  m='2298530'>the</span> <span m='2299310'>denominator</span> <span
  m='2300150'>here?</span> <span m='2300450'>The</span> <span
  m='2300570'>length</span> <span m='2300960'>of</span> <span
  m='2301050'>v1</span> <span m='2301710'>is</span> <span
  m='2302220'>one.</span> <span m='2303835'>So</span> <span
  m='2304520'>no</span> <span m='2304910'>big</span> <span
  m='2305150'>deal</span> <span m='2305420'>there.</span> <span
  m='2305690'>That's</span> <span m='2305960'>one.</span> </p><p><span
  m='2307350'>What's</span> <span m='2307760'>the</span> <span
  m='2307850'>length</span> <span m='2308360'>of</span> <span
  m='2308790'>the</span> <span m='2308930'>top</span> <span
  m='2309320'>one?</span> <span m='2312530'>Now</span> <span
  m='2312800'>what</span> <span m='2313100'>is</span> <span
  m='2313370'>Av1?</span> <span m='2314360'>If</span> <span
  m='2314540'>v1</span> <span m='2315080'>is</span> <span m='2315200'>the</span>
  <span m='2315350'>first</span> <span m='2317420'>right</span> <span
  m='2317960'>singular</span> <span m='2318530'>vector,</span> <span
  m='2319040'>than</span> <span m='2319300'>Av1</span> <span
  m='2320060'>is</span> <span m='2321760'>sigma</span> <span
  m='2322240'>1</span> <span m='2322600'>times</span> <span
  m='2323740'>u1.</span> <span m='2325558'>Remember,</span> <span
  m='2326470'>the</span> <span m='2327400'>singular</span> <span
  m='2328660'>vector</span> <span m='2329200'>deals</span> <span
  m='2329710'>were</span> <span m='2330070'>Av</span> <span
  m='2330325'>equals</span> <span m='2331460'>sigma</span> <span
  m='2331530'>u.</span> <span m='2332560'>Avk</span> <span
  m='2335600'>equals</span> <span m='2336080'>sigma</span> <span
  m='2336335'>k</span> <span m='2336590'>uk.</span> <span m='2338740'>You</span>
  <span m='2338890'>remember</span> <span m='2339260'>that.</span> <span
  m='2339890'>So</span> <span m='2340180'>they're</span> <span
  m='2340360'>not</span> <span m='2340640'>eigenvectors.</span> <span
  m='2341940'>They're</span> <span m='2342140'>singular</span> <span
  m='2342760'>vectors.</span> </p><p><span m='2343120'>So</span> <span
  m='2345700'>Av1</span> <span m='2347140'>is</span> <span
  m='2348490'>the</span> <span m='2348580'>length</span> <span
  m='2349030'>of</span> <span m='2349240'>sigma</span> <span
  m='2349660'>1</span> <span m='2349990'>u1</span> <span m='2351570'>and</span>
  <span m='2351760'>it's</span> <span m='2351940'>divided</span> <span
  m='2352390'>by</span> <span m='2352630'>1.</span> <span m='2353110'>And</span>
  <span m='2353770'>of</span> <span m='2353890'>course,</span> <span
  m='2354790'>u1</span> <span m='2355450'>is</span> <span
  m='2355660'>also</span> <span m='2356080'>a</span> <span
  m='2356200'>unit</span> <span m='2356680'>vector,</span> <span
  m='2357550'>so</span> <span m='2357820'>I</span> <span m='2357940'>just</span>
  <span m='2358180'>get sigma</span> <span m='2358420'>1.</span> <span
  m='2359128'>OK.</span> <span m='2363250'>So</span> <span
  m='2363460'>that's</span> <span m='2363790'>another</span> <span
  m='2364180'>way</span> <span m='2364360'>to</span> <span
  m='2364480'>say</span> <span m='2364900'>that</span> <span
  m='2365140'>you</span> <span m='2365290'>can</span> <span
  m='2365500'>find</span> <span m='2366010'>sigma</span> <span
  m='2366430'>1</span> <span m='2367360'>by</span> <span
  m='2367660'>solving</span> <span m='2368230'>this</span> <span
  m='2368530'>maximum</span> <span m='2369190'>problem.</span> <span
  m='2370420'>And</span> <span m='2370780'>you</span> <span
  m='2370990'>get</span> <span m='2371440'>that</span> <span
  m='2371710'>sigma</span> <span m='2372130'>1.</span> <span
  m='2373030'>OK.</span> <span m='2375200'>And</span> <span m='2375420'>I</span>
  <span m='2375540'>could</span> <span m='2375720'>get</span> <span
  m='2375960'>other</span> <span m='2377770'>matrix</span> <span
  m='2378370'>norms</span> <span m='2378960'>by</span> <span
  m='2379900'>maximizing</span> <span m='2380850'>that</span> <span
  m='2381060'>blow-up</span> <span m='2381540'>factor</span> <span
  m='2382440'>in</span> <span m='2382680'>that</span> <span
  m='2383220'>vector</span> <span m='2383505'>norm.</span> <span
  m='2384770'>I</span> <span m='2384950'>won't</span> <span
  m='2385200'>do</span> <span m='2385410'>that</span> <span
  m='2385630'>now,</span> <span m='2386470'>just</span> <span
  m='2386790'>to</span> <span m='2387600'>keep</span> <span
  m='2388680'>control</span> <span m='2389220'>of</span> <span
  m='2389340'>what</span> <span m='2389520'>we've</span> <span
  m='2389730'>got.</span> </p><p><span m='2390750'>Now</span> <span
  m='2391090'>what</span> <span m='2392010'>was</span> <span
  m='2392190'>the</span> <span m='2392310'>next</span> <span
  m='2392880'>matrix</span> <span m='2393540'>norm</span> <span
  m='2394000'>that</span> <span m='2394140'>came</span> <span
  m='2394470'>in</span> <span m='2394650'>last</span> <span
  m='2394950'>time?</span> <span m='2395970'>Very,</span> <span
  m='2396460'>very</span> <span m='2396690'>important</span> <span
  m='2397140'>one</span> <span m='2397410'>for</span> <span
  m='2397620'>deep</span> <span m='2397920'>learning</span> <span
  m='2398400'>and</span> <span m='2398970'>neural</span> <span
  m='2399300'>nets.</span> <span m='2401070'>Somehow</span> <span
  m='2401520'>it's</span> <span m='2401730'>a</span> <span
  m='2401790'>little</span> <span m='2402030'>simpler</span> <span
  m='2402630'>than</span> <span m='2402810'>this</span> <span
  m='2403110'>guy.</span> <span m='2404680'>And</span> <span
  m='2406420'>what</span> <span m='2406570'>was</span> <span
  m='2406780'>that</span> <span m='2406960'>matrix</span> <span
  m='2407570'>norm?</span> <span m='2407860'>What</span> <span
  m='2408310'>letter</span> <span m='2408760'>whose</span> <span
  m='2409060'>name</span> <span m='2409805'>goes</span> <span
  m='2410100'>here?</span> <span m='2412490'>Frobenius.</span> <span
  m='2413960'>So</span> <span m='2414540'>capital</span> <span
  m='2415050'>F</span> <span m='2415480'>for</span> <span
  m='2415770'>Frobenius.</span> <span m='2417200'>And</span> <span
  m='2417830'>what</span> <span m='2418070'>was</span> <span
  m='2418400'>that?</span> </p><p><span m='2419060'>That</span> <span
  m='2419240'>was</span> <span m='2419450'>the</span> <span
  m='2419570'>square</span> <span m='2420080'>root</span> <span
  m='2420560'>of</span> <span m='2420680'>the</span> <span
  m='2420770'>sum</span> <span m='2421190'>of</span> <span
  m='2421820'>all</span> <span m='2422300'>the--</span> <span
  m='2423410'>add</span> <span m='2425270'>all</span> <span
  m='2425630'>the</span> <span m='2426455'>aij</span> <span
  m='2427640'>squares,</span> <span m='2431330'>for</span> <span
  m='2431870'>all</span> <span m='2432110'>over</span> <span
  m='2432320'>the</span> <span m='2432470'>matrix,</span> <span
  m='2433670'>and</span> <span m='2433820'>then</span> <span
  m='2434030'>take</span> <span m='2434320'>the</span> <span
  m='2434420'>square</span> <span m='2434780'>root.</span> <span
  m='2436600'>And</span> <span m='2436650'>then</span> <span
  m='2437310'>somebody</span> <span m='2437700'>asked</span> <span
  m='2437920'>a</span> <span m='2437970'>good</span> <span
  m='2438180'>question</span> <span m='2438630'>after</span> <span
  m='2438960'>class</span> <span m='2440160'>on</span> <span
  m='2440580'>Wednesday,</span> <span m='2441450'>what</span> <span
  m='2441660'>has</span> <span m='2441840'>that</span> <span
  m='2442080'>got</span> <span m='2442350'>to</span> <span m='2442500'>do</span>
  <span m='2442830'>with</span> <span m='2443370'>the</span> <span
  m='2443520'>sigmas?</span> <span m='2444690'>Because</span> <span
  m='2445170'>my</span> <span m='2448140'>point</span> <span
  m='2448530'>was</span> <span m='2448830'>that</span> <span
  m='2449010'>these</span> <span m='2449400'>norms</span> <span
  m='2450120'>are</span> <span m='2450270'>the</span> <span
  m='2451230'>guys</span> <span m='2451830'>that</span> <span
  m='2452040'>go</span> <span m='2452310'>with</span> <span
  m='2453330'>the</span> <span m='2453430'>sigmas,</span> <span
  m='2454470'>that</span> <span m='2454710'>have</span> <span
  m='2454890'>nice</span> <span m='2455250'>formulas</span> <span
  m='2455820'>for</span> <span m='2455970'>the</span> <span
  m='2456090'>sigmas,</span> <span m='2456930'>and</span> <span
  m='2457050'>here</span> <span m='2457320'>it</span> <span
  m='2457440'>is.</span> <span m='2458220'>It's</span> <span
  m='2458430'>the</span> <span m='2458520'>square</span> <span
  m='2458910'>root</span> <span m='2459330'>of</span> <span
  m='2459450'>the</span> <span m='2459630'>sum</span> <span
  m='2459960'>of</span> <span m='2460020'>the</span> <span
  m='2460200'>squares</span> <span m='2461280'>of</span> <span
  m='2461430'>all</span> <span m='2461700'>the</span> <span
  m='2461850'>sigmas.</span> <span m='2467130'>So</span> <span
  m='2468090'>let</span> <span m='2468180'>me</span> <span
  m='2468330'>write</span> <span m='2468640'>Frobenius</span> <span
  m='2469530'>again.</span> <span m='2474810'>But</span> <span
  m='2476650'>this</span> <span m='2476920'>notation</span> <span
  m='2477550'>with</span> <span m='2477760'>an</span> <span m='2477880'>F</span>
  <span m='2478150'>is</span> <span m='2478300'>now</span> <span
  m='2478570'>pretty</span> <span m='2478930'>standard,</span> <span
  m='2480450'>and</span> <span m='2481440'>we</span> <span
  m='2481770'>should</span> <span m='2481980'>be</span> <span
  m='2482160'>able</span> <span m='2482370'>to</span> <span
  m='2482460'>see</span> <span m='2482790'>why</span> <span
  m='2483300'>that</span> <span m='2484620'>number</span> <span
  m='2485130'>is</span> <span m='2485280'>the</span> <span
  m='2485430'>same</span> <span m='2485790'>as</span> <span
  m='2485910'>that</span> <span m='2486210'>number.</span> </p><p><span
  m='2495050'>Yeah.</span> <span m='2499420'>I</span> <span
  m='2499510'>could</span> <span m='2499720'>give</span> <span
  m='2499960'>you</span> <span m='2500020'>a</span> <span
  m='2500110'>reason</span> <span m='2500500'>or</span> <span
  m='2500650'>I</span> <span m='2500740'>could</span> <span
  m='2501040'>put</span> <span m='2501310'>it</span> <span m='2501430'>on</span>
  <span m='2501580'>the</span> <span m='2501670'>problem</span> <span
  m='2501935'>set.</span> <span m='2506330'>Yeah,</span> <span
  m='2506620'>I</span> <span m='2506750'>think</span> <span
  m='2507250'>that's</span> <span m='2507490'>better</span> <span
  m='2507880'>on</span> <span m='2508000'>the</span> <span m='2508090'>problem
  set,</span> <span m='2508930'>because</span> <span m='2509980'>first</span>
  <span m='2510280'>of</span> <span m='2510370'>all,</span> <span
  m='2510640'>I</span> <span m='2510760'>get</span> <span m='2511030'>off</span>
  <span m='2511240'>the</span> <span m='2511330'>hook</span> <span
  m='2511570'>right</span> <span m='2511750'>away,</span> <span
  m='2512440'>and</span> <span m='2512680'>secondly,</span> <span
  m='2513790'>this</span> <span m='2514450'>connection</span> <span
  m='2515260'>between--</span> <span m='2516910'>in Frobenius,</span> <span
  m='2518210'>that's</span> <span m='2518680'>a</span> <span
  m='2518770'>beautiful</span> <span m='2519250'>fact</span> <span
  m='2519610'>about</span> <span m='2519880'>Frobenius</span> <span
  m='2520510'>norm</span> <span m='2520820'>that</span> <span
  m='2520990'>you</span> <span m='2521170'>add</span> <span
  m='2521410'>up</span> <span m='2521620'>all</span> <span
  m='2521830'>the</span> <span m='2522310'>sigma</span> <span
  m='2523030'>squares--</span> <span m='2523415'>it's</span> <span
  m='2523800'>just</span> <span m='2524050'>m</span> <span
  m='2524260'>times</span> <span m='2524680'>n of</span> <span
  m='2524890'>them</span> <span m='2525130'>because</span> <span
  m='2525400'>it's</span> <span m='2526380'>a</span> <span
  m='2526850'>filled</span> <span m='2527430'>matrix.</span> <span
  m='2529630'>So</span> <span m='2529870'>another</span> <span
  m='2530200'>way</span> <span m='2530350'>to</span> <span
  m='2530470'>say</span> <span m='2530800'>it</span> <span
  m='2530950'>is,</span> <span m='2532000'>we</span> <span
  m='2532180'>haven't</span> <span m='2532280'>written</span> <span
  m='2532750'>down</span> <span m='2532990'>the</span> <span
  m='2533450'>SVD</span> <span m='2534100'>today,</span> <span
  m='2534570'>A</span> <span m='2534920'>equal</span> <span m='2535090'>u</span>
  <span m='2535330'>sigma</span> <span m='2535580'>v</span> <span
  m='2535730'>transposed.</span> </p><p><span m='2540960'>And</span> <span
  m='2541290'>the</span> <span m='2541410'>point</span> <span
  m='2541830'>is</span> <span m='2542400'>that,</span> <span
  m='2543540'>for</span> <span m='2543720'>the</span> <span
  m='2544020'>Frobenius</span> <span m='2544590'>norm--</span> <span
  m='2546530'>actually,</span> <span m='2546980'>for</span> <span
  m='2547190'>all</span> <span m='2547400'>these</span> <span
  m='2547580'>norms--</span> <span m='2549300'>I</span> <span
  m='2549400'>can</span> <span m='2549580'>change</span> <span
  m='2550060'>u.</span> <span m='2550790'>It</span> <span
  m='2551170'>doesn't</span> <span m='2551470'>change</span> <span
  m='2551860'>the</span> <span m='2551980'>norm,</span> <span
  m='2552760'>so</span> <span m='2552880'>I</span> <span m='2552940'>can</span>
  <span m='2553060'>make</span> <span m='2553330'>u</span> <span
  m='2553540'>the</span> <span m='2553690'>identity.</span> <span
  m='2555240'>u,</span> <span m='2555640'>as</span> <span m='2555910'>we</span>
  <span m='2556150'>all</span> <span m='2556300'>know,</span> <span
  m='2556570'>is</span> <span m='2556720'>an</span> <span
  m='2556840'>orthogonal</span> <span m='2557470'>matrix,</span> <span
  m='2558070'>and</span> <span m='2558610'>what</span> <span
  m='2558760'>I'm</span> <span m='2558880'>saying</span> <span
  m='2559240'>is,</span> <span m='2559750'>orthogonal</span> <span
  m='2560350'>matrix</span> <span m='2560620'>u</span> <span
  m='2561220'>doesn't</span> <span m='2561580'>change</span> <span
  m='2561970'>any</span> <span m='2562180'>of</span> <span
  m='2562300'>these</span> <span m='2562630'>particular</span> <span
  m='2563230'>norms.</span> <span m='2563980'>So</span> <span
  m='2565120'>suppose</span> <span m='2565540'>it</span> <span
  m='2565630'>was</span> <span m='2565750'>the</span> <span
  m='2565900'>identity.</span> <span m='2566530'>Same</span> <span
  m='2566890'>here.</span> <span m='2567580'>That</span> <span
  m='2567760'>could</span> <span m='2567940'>be</span> <span
  m='2568150'>the</span> <span m='2568270'>identity</span> <span
  m='2568840'>without</span> <span m='2569200'>changing</span> <span
  m='2569740'>the</span> <span m='2569860'>norm.</span> </p><p><span
  m='2570580'>So</span> <span m='2570820'>we're</span> <span
  m='2571000'>down</span> <span m='2571390'>to</span> <span
  m='2572290'>the</span> <span m='2572710'>norm</span> <span
  m='2573190'>of</span> <span m='2574080'>Frobenius.</span> <span
  m='2575110'>So</span> <span m='2575320'>what's</span> <span
  m='2575620'>the</span> <span m='2575750'>Frobenius</span> <span
  m='2576520'>norm</span> <span m='2576910'>of</span> <span
  m='2577900'>that</span> <span m='2578170'>guy?</span> <span
  m='2581180'>What's</span> <span m='2581460'>the</span> <span
  m='2581560'>Frobenius</span> <span m='2582230'>norm</span> <span
  m='2582560'>of</span> <span m='2582710'>that</span> <span
  m='2582980'>diagonal</span> <span m='2583730'>matrix?</span> <span
  m='2586440'>Well</span> <span m='2586650'>you're</span> <span
  m='2586780'>supposed</span> <span m='2587070'>to</span> <span
  m='2587160'>add</span> <span m='2587520'>up</span> <span
  m='2587790'>the</span> <span m='2587940'>squares</span> <span
  m='2588660'>of</span> <span m='2588780'>all</span> <span
  m='2588990'>the</span> <span m='2589110'>numbers</span> <span
  m='2589650'>in</span> <span m='2589830'>the</span> <span
  m='2590310'>matrix</span> <span m='2590970'>and</span> <span
  m='2591150'>what</span> <span m='2591320'>do</span> <span
  m='2591390'>you</span> <span m='2591480'>get?</span> <span
  m='2593410'>You</span> <span m='2593530'>get</span> <span
  m='2593710'>that,</span> <span m='2594270'>right?</span> <span
  m='2595970'>So</span> <span m='2596210'>that's</span> <span
  m='2596540'>why</span> <span m='2597200'>this</span> <span
  m='2597560'>is</span> <span m='2597710'>the</span> <span
  m='2597830'>same</span> <span m='2598220'>as</span> <span
  m='2598370'>this</span> <span m='2598690'>because</span> <span
  m='2599180'>the</span> <span m='2599690'>orthogonal</span> <span
  m='2600350'>guy</span> <span m='2600740'>there</span> <span
  m='2601160'>and</span> <span m='2601280'>the</span> <span
  m='2601410'>orthogonal</span> <span m='2601970'>guy</span> <span
  m='2602150'>there</span> <span m='2602360'>make</span> <span
  m='2602600'>no</span> <span m='2602810'>difference</span> <span
  m='2603290'>in</span> <span m='2603440'>the</span> <span
  m='2603530'>norm.</span> <span m='2604220'>But</span> <span
  m='2604610'>that</span> <span m='2604850'>takes</span> <span
  m='2605460'>checking,</span> <span m='2606470'>right?</span> <span
  m='2607630'>Yeah.</span> <span m='2608880'>But</span> <span
  m='2609060'>that's</span> <span m='2609330'>another</span> <span
  m='2609690'>way</span> <span m='2609810'>to</span> <span
  m='2609930'>see</span> <span m='2610230'>why</span> <span
  m='2610820'>the</span> <span m='2611100'>Frobenius</span> <span
  m='2611580'>norm</span> <span m='2612170'>gives</span> <span
  m='2612390'>this.</span> </p><p><span m='2612810'>And</span> <span
  m='2612930'>then</span> <span m='2613140'>finally,</span> <span
  m='2614160'>this</span> <span m='2614430'>was</span> <span
  m='2614670'>the</span> <span m='2614800'>nuclear</span> <span
  m='2615065'>norm.</span> <span m='2618410'>And</span> <span
  m='2618560'>actually,</span> <span m='2619100'>just</span> <span
  m='2619370'>before</span> <span m='2620120'>my</span> <span
  m='2620900'>lunch</span> <span m='2621350'>lecture</span> <span
  m='2621980'>on</span> <span m='2622130'>the</span> <span
  m='2622280'>subject</span> <span m='2622535'>of</span> <span
  m='2622900'>probability--</span> <span m='2623440'>I've</span> <span
  m='2623870'>had a</span> <span m='2624500'>learning</span> <span
  m='2625010'>morning.</span> <span m='2627350'>The</span> <span
  m='2627680'>lunch</span> <span m='2628070'>lecture</span> <span
  m='2628460'>was</span> <span m='2628670'>about</span> <span
  m='2628970'>this</span> <span m='2629300'>crazy</span> <span
  m='2630410'>way</span> <span m='2630740'>that</span> <span
  m='2630950'>humans</span> <span m='2631430'>behave.</span> <span
  m='2632030'>Not</span> <span m='2632390'>us</span> <span
  m='2632750'>but</span> <span m='2634910'>other</span> <span
  m='2635240'>humans.</span> <span m='2638000'>Other</span> <span
  m='2638420'>actual--</span> <span m='2638870'>well,</span> <span
  m='2639390'>no,</span> <span m='2639590'>I</span> <span
  m='2639680'>don't</span> <span m='2639800'>want</span> <span
  m='2640060'>to</span> <span m='2640140'>say that.</span> <span
  m='2642310'>Take</span> <span m='2642590'>that</span> <span
  m='2642830'>out</span> <span m='2643000'>of</span> <span
  m='2643100'>the</span> <span m='2643220'>tape.</span> </p><p><span
  m='2646090'>Yeah,</span> <span m='2646540'>OK.</span> <span
  m='2646970'>Anyway,</span> <span m='2647470'>that</span> <span
  m='2647750'>was</span> <span m='2647930'>that</span> <span
  m='2648200'>lecture,</span> <span m='2648560'>but</span> <span
  m='2648710'>before</span> <span m='2649160'>that</span> <span
  m='2649370'>was</span> <span m='2649580'>a</span> <span
  m='2649760'>lecture</span> <span m='2650960'>for</span> <span
  m='2652040'>an</span> <span m='2652190'>hour</span> <span
  m='2652550'>plus</span> <span m='2654140'>about</span> <span
  m='2654800'>deep</span> <span m='2655130'>learning</span> <span
  m='2655580'>by</span> <span m='2655790'>somebody</span> <span
  m='2656240'>who</span> <span m='2656300'>really,</span> <span
  m='2656870'>really</span> <span m='2657530'>has</span> <span
  m='2658190'>begun</span> <span m='2658700'>to</span> <span
  m='2658820'>understand</span> <span m='2659600'>what</span> <span
  m='2659900'>is</span> <span m='2660050'>happening</span> <span
  m='2660980'>inside.</span> <span m='2661820'>How</span> <span
  m='2662030'>does</span> <span m='2662270'>that</span> <span
  m='2663200'>gradient</span> <span m='2663830'>descent</span> <span
  m='2664520'>optimization</span> <span m='2665510'>algorithm</span> <span
  m='2666110'>pick</span> <span m='2666470'>out,</span> <span
  m='2667540'>what</span> <span m='2668240'>does</span> <span
  m='2668480'>it</span> <span m='2668640'>pick</span> <span
  m='2668930'>out</span> <span m='2669170'>as</span> <span
  m='2671240'>the</span> <span m='2671420'>thing</span> <span
  m='2671660'>it</span> <span m='2671780'>learns.</span> <span
  m='2673550'>This</span> <span m='2673730'>is</span> <span
  m='2673940'>going</span> <span m='2674060'>to</span> <span
  m='2674180'>be</span> <span m='2674390'>our</span> <span
  m='2675710'>goal</span> <span m='2676250'>in</span> <span
  m='2677390'>this</span> <span m='2677600'>course.</span> <span
  m='2678200'>We're</span> <span m='2678380'>not</span> <span
  m='2678620'>there</span> <span m='2678920'>yet.</span> </p><p><span
  m='2679550'>But</span> <span m='2680360'>his</span> <span
  m='2680660'>conjecture</span> <span m='2681470'>is</span> <span
  m='2682420'>that--</span> <span m='2683870'>yeah,</span> <span
  m='2684230'>so</span> <span m='2684470'>it's</span> <span m='2684650'>a</span>
  <span m='2684710'>conjecture.</span> <span m='2685290'>He</span> <span
  m='2685460'>doesn't</span> <span m='2685760'>have</span> <span
  m='2685940'>a</span> <span m='2686010'>proof.</span> <span
  m='2686390'>He's</span> <span m='2686570'>got</span> <span
  m='2687170'>proofs</span> <span m='2687720'>of</span> <span
  m='2688460'>some</span> <span m='2688730'>nice</span> <span
  m='2689150'>cases</span> <span m='2689720'>where</span> <span
  m='2689900'>things</span> <span m='2690320'>commute</span> <span
  m='2690950'>but</span> <span m='2691160'>he</span> <span
  m='2691250'>hasn't</span> <span m='2691520'>got</span> <span
  m='2691850'>the</span> <span m='2691970'>whole</span> <span
  m='2692240'>thing</span> <span m='2692480'>yet,</span> <span
  m='2692720'>but</span> <span m='2693350'>it's</span> <span
  m='2694310'>pretty</span> <span m='2694760'>terrific</span> <span
  m='2695330'>work.</span> <span m='2695840'>So</span> <span
  m='2696190'>this</span> <span m='2696710'>was</span> <span
  m='2697370'>Professor</span> <span m='2697970'>Srebro</span> <span
  m='2699200'>who's</span> <span m='2700610'>in</span> <span
  m='2701060'>Chicago.</span> <span m='2703430'>So</span> <span
  m='2703570'>he</span> <span m='2703750'>just</span> <span
  m='2703990'>announced</span> <span m='2704500'>his</span> <span
  m='2704740'>conjecture,</span> <span m='2705610'>and</span> <span
  m='2705760'>his</span> <span m='2705970'>conjecture</span> <span
  m='2706630'>is</span> <span m='2706900'>that,</span> <span
  m='2707660'>in</span> <span m='2708340'>a</span> <span
  m='2708400'>modeled</span> <span m='2708940'>case,</span> <span
  m='2710360'>the</span> <span m='2710860'>deep</span> <span
  m='2711250'>learning</span> <span m='2711700'>that</span> <span
  m='2711880'>we'll</span> <span m='2712090'>learn</span> <span
  m='2712420'>about</span> <span m='2713110'>with the</span> <span
  m='2713460'>gradient</span> <span m='2714310'>descent</span> <span
  m='2714910'>that</span> <span m='2715120'>we'll</span> <span
  m='2715330'>learn</span> <span m='2715630'>about</span> <span
  m='2715960'>to</span> <span m='2716140'>find</span> <span
  m='2716590'>the</span> <span m='2716710'>best</span> <span
  m='2717250'>weights--</span> <span m='2719210'>the</span> <span
  m='2719440'>point</span> <span m='2719830'>is</span> <span
  m='2720070'>that,</span> <span m='2721040'>in</span> <span
  m='2721280'>a</span> <span m='2722050'>typical</span> <span
  m='2724130'>deep</span> <span m='2724430'>learning</span> <span
  m='2724880'>problem</span> <span m='2725330'>these</span> <span
  m='2725630'>days,</span> <span m='2726920'>there</span> <span
  m='2727130'>are</span> <span m='2727190'>many</span> <span
  m='2727520'>more</span> <span m='2727820'>weights</span> <span
  m='2728540'>than</span> <span m='2728900'>samples</span> <span
  m='2730050'>and</span> <span m='2730810'>so</span> <span
  m='2731110'>there</span> <span m='2731260'>are</span> <span
  m='2731300'>a</span> <span m='2731320'>lot</span> <span m='2731650'>of</span>
  <span m='2731770'>possible</span> <span m='2732970'>minima.</span> <span
  m='2734170'>Many</span> <span m='2734590'>different</span> <span
  m='2734950'>weights</span> <span m='2735310'>give</span> <span
  m='2735550'>the</span> <span m='2735640'>same</span> <span
  m='2736090'>minimum</span> <span m='2736690'>loss</span> <span
  m='2737230'>because</span> <span m='2738550'>there</span> <span
  m='2738640'>are</span> <span m='2738700'>so</span> <span
  m='2738940'>many</span> <span m='2739300'>weights.</span> <span
  m='2740050'>The</span> <span m='2740230'>problem</span> <span
  m='2740740'>is,</span> <span m='2741540'>like,</span> <span
  m='2741815'>got</span> <span m='2742090'>too</span> <span
  m='2742330'>many</span> <span m='2742660'>variables,</span> <span
  m='2744010'>but</span> <span m='2744250'>it</span> <span
  m='2744370'>turns</span> <span m='2744700'>out</span> <span
  m='2744850'>to</span> <span m='2744940'>be</span> <span m='2745090'>a</span>
  <span m='2745180'>very,</span> <span m='2745610'>very</span> <span
  m='2745810'>good</span> <span m='2746050'>thing.</span> <span
  m='2746440'>That's</span> <span m='2746830'>part</span> <span
  m='2747100'>of</span> <span m='2747160'>the</span> <span
  m='2747280'>success.</span> </p><p><span m='2748310'>And</span> <span
  m='2748900'>he</span> <span m='2749140'>believes</span> <span
  m='2749900'>that</span> <span m='2752200'>in</span> <span m='2752470'>a</span>
  <span m='2753310'>model</span> <span m='2753790'>situation,</span> <span
  m='2754780'>that</span> <span m='2757120'>optimization</span> <span
  m='2758110'>by</span> <span m='2758350'>gradient</span> <span
  m='2758920'>descent</span> <span m='2760090'>picks</span> <span
  m='2760570'>out</span> <span m='2761080'>the</span> <span
  m='2763930'>weights</span> <span m='2764530'>that</span> <span
  m='2764770'>minimize</span> <span m='2765700'>the</span> <span
  m='2765880'>nuclear</span> <span m='2766510'>norm.</span> <span
  m='2766970'>So</span> <span m='2767020'>this</span> <span
  m='2767230'>would</span> <span m='2767440'>be</span> <span
  m='2768130'>a</span> <span m='2768250'>norm</span> <span m='2768730'>of</span>
  <span m='2769030'>a</span> <span m='2769090'>lot</span> <span
  m='2769360'>of</span> <span m='2769480'>weights.</span> <span
  m='2770650'>And</span> <span m='2771670'>he</span> <span
  m='2771880'>thinks</span> <span m='2772240'>that's</span> <span
  m='2772630'>where</span> <span m='2773440'>the</span> <span
  m='2773560'>system</span> <span m='2774040'>goes.</span> <span
  m='2775120'>We'll</span> <span m='2775390'>see</span> <span
  m='2775660'>this.</span> <span m='2776155'>This</span> <span
  m='2776860'>comes</span> <span m='2777160'>up</span> <span
  m='2777340'>in</span> <span m='2777490'>compressed</span> <span
  m='2778000'>sensing,</span> <span m='2778510'>as</span> <span
  m='2778660'>I</span> <span m='2779110'>mentioned</span> <span
  m='2779530'>last</span> <span m='2779860'>time.</span> <span
  m='2781420'>But</span> <span m='2781600'>now</span> <span m='2782020'>I</span>
  <span m='2782410'>have</span> <span m='2782590'>to</span> <span
  m='2782710'>remember</span> <span m='2783250'>what</span> <span
  m='2783490'>was</span> <span m='2784690'>the</span> <span
  m='2784810'>definition.</span> </p><p><span m='2786840'>Do</span> <span
  m='2786940'>you</span> <span m='2787000'>remember</span> <span
  m='2787420'>what</span> <span m='2787780'>the</span> <span
  m='2787960'>nuclear</span> <span m='2788470'>norm?</span> <span
  m='2790580'>He</span> <span m='2790990'>often</span> <span
  m='2791380'>used</span> <span m='2792520'>a little</span> <span
  m='2792850'>star</span> <span m='2793390'>instead</span> <span
  m='2793840'>of</span> <span m='2793960'>an</span> <span m='2794060'>N.</span>
  <span m='2795060'>I'll</span> <span m='2795190'>put</span> <span
  m='2795430'>that</span> <span m='2795700'>in</span> <span
  m='2795820'>the</span> <span m='2795940'>notes.</span> <span
  m='2797020'>Other</span> <span m='2797260'>people</span> <span
  m='2797560'>call</span> <span m='2797860'>it</span> <span
  m='2797980'>the</span> <span m='2798130'>trace</span> <span
  m='2798640'>norm.</span> <span m='2799790'>But</span> <span
  m='2800020'>I</span> <span m='2800260'>think</span> <span
  m='2800650'>this</span> <span m='2800930'>N</span> <span
  m='2801850'>kind</span> <span m='2802120'>of</span> <span
  m='2802960'>gives</span> <span m='2803260'>it</span> <span
  m='2803410'>a</span> <span m='2805990'>notation</span> <span
  m='2806650'>you</span> <span m='2806800'>can</span> <span
  m='2807070'>remember.</span> <span m='2807730'>So</span> <span
  m='2807910'>let's</span> <span m='2808180'>call</span> <span
  m='2808450'>it</span> <span m='2808580'>the</span> <span
  m='2808690'>nuclear</span> <span m='2809160'>norm.</span> <span
  m='2809770'>Do</span> <span m='2809830'>you</span> <span
  m='2809890'>remember</span> <span m='2810220'>what</span> <span
  m='2810430'>that</span> <span m='2810610'>one</span> <span
  m='2810820'>was?</span> <span m='2814000'>Yeah,</span> <span
  m='2814300'>somebody's</span> <span m='2814660'>saying it</span> <span
  m='2815050'>right.</span> </p><p><span m='2816570'>Add</span> <span
  m='2816870'>the</span> <span m='2817030'>sigmas,</span> <span
  m='2817700'>yeah.</span> <span m='2818070'>Just</span> <span m='2818490'>the
  sum</span> <span m='2818880'>of</span> <span m='2819020'>the</span> <span
  m='2819090'>sigmas,</span> <span m='2821240'>like</span> <span
  m='2821490'>the</span> <span m='2821660'>l1</span> <span
  m='2822180'>norm,</span> <span m='2824800'>in</span> <span
  m='2824950'>a</span> <span m='2825010'>way.</span> <span m='2825620'>So</span>
  <span m='2825820'>that's</span> <span m='2826120'>the</span> <span
  m='2826270'>idea,</span> <span m='2826720'>is</span> <span
  m='2826900'>that</span> <span m='2827410'>this</span> <span
  m='2827680'>is</span> <span m='2827950'>the</span> <span
  m='2828490'>natural</span> <span m='2829270'>sort</span> <span
  m='2829540'>of</span> <span m='2829750'>l1</span> <span
  m='2830920'>type</span> <span m='2831340'>of</span> <span
  m='2831490'>norm</span> <span m='2832000'>for</span> <span
  m='2832360'>matrices.</span> <span m='2834210'>It's</span> <span
  m='2834390'>the</span> <span m='2834600'>l1</span> <span
  m='2835230'>norm</span> <span m='2835990'>for</span> <span
  m='2836340'>that</span> <span m='2836650'>sigma</span> <span
  m='2837040'>vector.</span> <span m='2837480'>This</span> <span
  m='2837720'>would</span> <span m='2837840'>be</span> <span
  m='2837990'>the</span> <span m='2838140'>l2</span> <span
  m='2838500'>norm</span> <span m='2838755'>of the sigma</span> <span
  m='2839010'>vector.</span> <span m='2839270'>That would</span> <span
  m='2839390'>be</span> <span m='2839430'>the</span> <span m='2840390'>l</span>
  <span m='2840570'>infinity</span> <span m='2841200'>norm.</span> <span
  m='2841870'>Notice</span> <span m='2842250'>that</span> <span
  m='2843060'>the</span> <span m='2843150'>vector</span> <span
  m='2843630'>numbers,</span> <span m='2844200'>infinity,</span> <span
  m='2845850'>2,</span> <span m='2846480'>and</span> <span m='2846780'>1,</span>
  <span m='2847530'>get</span> <span m='2848010'>changed</span> <span
  m='2848610'>around</span> <span m='2850750'>when</span> <span
  m='2851120'>you</span> <span m='2851730'>look</span> <span
  m='2852000'>at</span> <span m='2852090'>the</span> <span
  m='2852210'>matrix</span> <span m='2853200'>guy.</span> </p><p><span
  m='2855300'>So</span> <span m='2855480'>that's</span> <span
  m='2855750'>an</span> <span m='2855900'>exciting</span> <span
  m='2857740'>idea</span> <span m='2858690'>and</span> <span
  m='2858940'>it</span> <span m='2859060'>remains</span> <span
  m='2859630'>to</span> <span m='2859750'>be</span> <span
  m='2860530'>proved.</span> <span m='2862460'>And</span> <span
  m='2862790'>expert</span> <span m='2863170'>people</span> <span
  m='2863500'>are</span> <span m='2863620'>experimenting</span> <span
  m='2864430'>to</span> <span m='2864550'>see,</span> <span
  m='2865170'>is</span> <span m='2865930'>it</span> <span
  m='2866020'>true?</span> <span m='2867080'>Yeah.</span> <span
  m='2867910'>So</span> <span m='2868090'>that's</span> <span
  m='2868440'>a</span> <span m='2868930'>big</span> <span
  m='2869290'>thing</span> <span m='2869590'>for</span> <span
  m='2869770'>their</span> <span m='2869910'>future.</span> <span
  m='2870820'>Yes.</span> </p><p><span m='2871780'>OK,</span> <span
  m='2872230'>so</span> <span m='2873040'>today,</span> <span
  m='2873490'>we've</span> <span m='2873730'>talked</span> <span
  m='2874090'>about</span> <span m='2875020'>norms</span> <span
  m='2875560'>and</span> <span m='2875710'>this</span> <span
  m='2876490'>section</span> <span m='2876970'>of</span> <span
  m='2877090'>the</span> <span m='2877210'>notes</span> <span
  m='2877740'>will</span> <span m='2877960'>be</span> <span
  m='2878200'>all</span> <span m='2878410'>about</span> <span
  m='2879370'>norms.</span> <span m='2882540'>We've</span> <span
  m='2883410'>taken</span> <span m='2883830'>a</span> <span
  m='2884970'>big</span> <span m='2885210'>leap</span> <span
  m='2885600'>into</span> <span m='2887140'>a</span> <span
  m='2887410'>comment</span> <span m='2887950'>about</span> <span
  m='2888280'>deep</span> <span m='2888580'>learning</span> <span
  m='2889930'>and</span> <span m='2892360'>this</span> <span
  m='2892630'>is</span> <span m='2892780'>what</span> <span m='2892990'>I</span>
  <span m='2893080'>want</span> <span m='2893260'>to</span> <span
  m='2893350'>say</span> <span m='2893620'>the</span> <span
  m='2893740'>most.</span> <span m='2894880'>And</span> <span
  m='2895060'>I</span> <span m='2895210'>say</span> <span m='2895630'>it</span>
  <span m='2895750'>to</span> <span m='2896740'>every</span> <span
  m='2897040'>class</span> <span m='2897460'>I</span> <span
  m='2897580'>teach</span> <span m='2898120'>near</span> <span
  m='2898900'>the</span> <span m='2899020'>start</span> <span
  m='2899320'>of</span> <span m='2899380'>the</span> <span
  m='2899470'>semester.</span> <span m='2902050'>My</span> <span
  m='2902600'>feeling</span> <span m='2902930'>about</span> <span
  m='2903140'>what</span> <span m='2903290'>my</span> <span
  m='2903530'>job</span> <span m='2904250'>is</span> <span m='2904520'>to</span>
  <span m='2905270'>teach</span> <span m='2905600'>you</span> <span
  m='2905720'>things,</span> <span m='2906410'>or</span> <span
  m='2906560'>to</span> <span m='2906860'>join</span> <span
  m='2907880'>with</span> <span m='2908120'>you</span> <span
  m='2908300'>in</span> <span m='2908420'>learning</span> <span
  m='2908900'>things,</span> <span m='2909500'>as</span> <span
  m='2909830'>happened</span> <span m='2910130'>today.</span> <span
  m='2910880'>It's</span> <span m='2911090'>not</span> <span
  m='2911360'>to</span> <span m='2911480'>grade</span> <span
  m='2911900'>you.</span> <span m='2912260'>I</span> <span
  m='2912350'>don't</span> <span m='2912620'>spend</span> <span
  m='2913700'>any</span> <span m='2914060'>time</span> <span
  m='2916190'>losing</span> <span m='2916720'>sleep--</span> <span
  m='2917200'>you know,</span> <span m='2917810'>should</span> <span
  m='2918680'>that</span> <span m='2918920'>person</span> <span
  m='2919580'>take</span> <span m='2919910'>a</span> <span
  m='2920060'>one</span> <span m='2920330'>point</span> <span
  m='2920750'>or</span> <span m='2921170'>epsilon</span> <span
  m='2921830'>penalty</span> <span m='2922550'>for</span> <span
  m='2924500'>turning</span> <span m='2924890'>it</span> <span
  m='2925010'>in</span> <span m='2925190'>four</span> <span
  m='2925460'>minutes</span> <span m='2925850'>late?</span> <span m='2927461'>To
  Hell</span> <span m='2927870'>with</span> <span m='2928410'>that,</span> <span
  m='2929060'>right?</span> <span m='2929390'>We've</span> <span
  m='2929630'>got</span> <span m='2930020'>a</span> <span m='2930080'>lot</span>
  <span m='2930380'>to</span> <span m='2930530'>do</span> <span
  m='2930860'>here.</span> </p><p><span m='2932780'>So</span> <span
  m='2933260'>anyway,</span> <span m='2933710'>we'll</span> <span
  m='2933920'>get</span> <span m='2934130'>on</span> <span
  m='2934310'>with</span> <span m='2934460'>the</span> <span
  m='2934520'>job.</span> <span m='2935150'>So</span> <span
  m='2935630'>homework</span> <span m='2936170'>three</span> <span
  m='2937070'>coming</span> <span m='2937400'>up,</span> <span
  m='2938390'>and</span> <span m='2940600'>you'll</span> <span
  m='2940760'>be</span> <span m='2941090'>using</span> <span
  m='2941600'>the</span> <span m='2941750'>notes</span> <span
  m='2942130'>that</span> <span m='2942350'>you</span> <span
  m='2942530'>already</span> <span m='2942950'>have</span> <span
  m='2943370'>posted</span> <span m='2943940'>in</span> <span
  m='2944410'>Stellar</span> <span m='2944805'>for</span> <span
  m='2945200'>those</span> <span m='2945440'>sections</span> <span
  m='2946430'>eight</span> <span m='2946790'>and</span> <span
  m='2946880'>nine</span> <span m='2947410'>and</span> <span
  m='2948320'>so</span> <span m='2948560'>on.</span> <span
  m='2949130'>And</span> <span m='2949340'>we'll</span> <span
  m='2949520'>keep</span> <span m='2949760'>going</span> <span
  m='2950120'>on</span> <span m='2950720'>Monday.</span> <span
  m='2951270'>OK,</span> <span m='2951650'>see</span> <span
  m='2951890'>you</span> <span m='2951970'>on</span> <span
  m='2952010'>Monday</span> <span m='2952370'>and</span> <span
  m='2952490'>have</span> <span m='2952670'>a</span> <span
  m='2952760'>great</span> <span m='2953030'>weekend.</span> </p>
uid: eada4a9cece40c77ae4e54ab2b6f8e6a
type: course
layout: video
---
