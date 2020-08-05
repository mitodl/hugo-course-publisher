---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Professor Strang starts this lecture
  asking the question &ldquo;Which matrices can be completed to have a rank of
  1?&rdquo; He then provides several examples. In the second part, he introduces
  convolution and cyclic convolution.</p> <h2 class="subhead">Summary</h2>
  <p>Which matrices can be completed to have rank = 1?<br /> Perfect answer: No
  cycles in a certain graph<br /> Cyclic permutation \(P\) and circulant
  matrices<br /> \(c_0 I + c_1 P + c_2 P^2 + \cdots\)<br /> Start of Fourier
  analysis for vectors</p> <p>Related section in textbook: IV.8 and IV.2</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: p-bXJIa7QVI
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: Video-YouTube-Stream
    type: Video
    uid: 93e982f6bd6642571e74f5e8bee9be10
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/p-bXJIa7QVI/default.jpg'
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6d50cee37e27768118665d97eae197a2
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: p-bXJIa7QVI
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 157a1871e9113941fcdf6c4125acfb56
  - id: p-bXJIa7QVI.srt
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-30-completing-a-rank-one-matrix-circulants/p-bXJIa7QVI.srt
    title: 3play caption file
    type: null
    uid: ad7e834776e7f7a4ed92713f0455e90c
  - id: p-bXJIa7QVI.pdf
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-30-completing-a-rank-one-matrix-circulants/p-bXJIa7QVI.pdf
    title: 3play pdf file
    type: null
    uid: 6c9f30071c8710266271fd85880c0262
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b74ff209cacb10d69a640f3e9f34f9a5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7482e4581ad14dc60cac318c2ffc67c0
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture30_300k.mp4'
    parent_uid: 498c2c9321ce4bd8842ed9c6f02e8c04
    title: Video-Internet Archive-MP4
    type: Video
    uid: a62a0dd78c694786f3e9dd60d9818a64
inline_embed_id: 41295484lecture30completingarankonematrixcirculants82133623
order_index: 278
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-30-completing-a-rank-one-matrix-circulants
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-30-completing-a-rank-one-matrix-circulants
title: 'Lecture 30: Completing a Rank-One Matrix, Circulants!'
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
  m='22470'>GILBERT STRANG:</span> <span m='22660'>OK,</span> <span
  m='23160'>let</span> <span m='23250'>me</span> <span m='23370'>start</span>
  <span m='23700'>again.</span> <span m='24450'>Thanks</span> <span
  m='24750'>for</span> <span m='25500'>helping</span> <span
  m='28320'>with</span> <span m='28500'>Professor</span> <span
  m='29010'>Rao</span> <span m='29430'>and</span> <span m='29550'>working</span>
  <span m='29940'>on</span> <span m='30060'>the</span> <span
  m='30150'>labs</span> <span m='31370'>the</span> <span m='31570'>last</span>
  <span m='31920'>two</span> <span m='32130'>times.</span> <span
  m='34470'>I</span> <span m='34560'>was</span> <span m='34680'>saying</span>
  <span m='35040'>the</span> <span m='35160'>labs</span> <span
  m='35580'>were</span> <span m='35760'>really</span> <span m='36420'>for</span>
  <span m='36690'>his</span> <span m='36930'>class,</span> <span
  m='37350'>which</span> <span m='37590'>is</span> <span m='38130'>90</span>
  <span m='38550'>minutes,</span> <span m='39000'>so</span> <span
  m='39320'>that</span> <span m='39550'>we</span> <span m='39820'>were</span>
  <span m='40140'>kind</span> <span m='40380'>of</span> <span
  m='40440'>running</span> <span m='40800'>out</span> <span m='40950'>of</span>
  <span m='41070'>time</span> <span m='42090'>just</span> <span
  m='42450'>answering</span> <span m='42930'>those</span> <span
  m='43650'>questions,</span> <span m='45260'>getting</span> <span
  m='46050'>the</span> <span m='46290'>system</span> <span m='46800'>to</span>
  <span m='46920'>say,</span> <span m='47220'>OK,</span> <span
  m='47880'>keep</span> <span m='48120'>going.</span> <span
  m='48660'>Anyway,</span> <span m='50150'>he's</span> <span
  m='50440'>going</span> <span m='50690'>to</span> <span
  m='50790'>develop</span> <span m='51330'>those.</span> <span
  m='53700'>And</span> <span m='54330'>I</span> <span m='54450'>think</span>
  <span m='54660'>they'll</span> <span m='54840'>be</span> <span
  m='54990'>a</span> <span m='55050'>good</span> <span m='55290'>thing.</span>
  </p><p><span m='56740'>So</span> <span m='57030'>actually,</span> <span
  m='57570'>the</span> <span m='57720'>second</span> <span m='58140'>lab,</span>
  <span m='60750'>as</span> <span m='61620'>I</span> <span m='61800'>was</span>
  <span m='62190'>watching</span> <span m='62700'>it,</span> <span
  m='64140'>I</span> <span m='64230'>was</span> <span m='64379'>thinking</span>
  <span m='64650'>of</span> <span m='64769'>a</span> <span m='64860'>math</span>
  <span m='65220'>question.</span> <span m='66000'>And</span> <span
  m='66270'>may</span> <span m='66540'>I</span> <span m='67320'>report</span>
  <span m='67770'>to</span> <span m='67920'>you</span> <span m='68100'>on</span>
  <span m='68280'>that</span> <span m='68520'>math</span> <span
  m='68850'>question?</span> <span m='69940'>So</span> <span
  m='70550'>you</span> <span m='70650'>remember</span> <span
  m='70950'>the</span> <span m='71100'>lab</span> <span m='71580'>was</span>
  <span m='73410'>completing</span> <span m='74100'>a</span> <span
  m='74160'>matrix.</span> <span m='75810'>You</span> <span m='76020'>got</span>
  <span m='76320'>some</span> <span m='76650'>entries.</span> <span
  m='77710'>And</span> <span m='77820'>you</span> <span m='78360'>can</span>
  <span m='78540'>put</span> <span m='78840'>in</span> <span
  m='79200'>any</span> <span m='79500'>other</span> <span
  m='79800'>entries</span> <span m='80490'>in</span> <span m='81030'>the</span>
  <span m='81150'>other</span> <span m='81390'>positions.</span> <span
  m='82860'>And</span> <span m='83550'>the</span> <span
  m='83670'>question</span> <span m='84120'>was</span> <span
  m='84540'>can</span> <span m='84780'>you</span> <span
  m='84930'>complete</span> <span m='85410'>it</span> <span m='85500'>to</span>
  <span m='85710'>a</span> <span m='85800'>rank</span> <span m='86130'>1</span>
  <span m='86430'>matrix?</span> </p><p><span m='90690'>Here's</span> <span
  m='90930'>my</span> <span m='91200'>question.</span> <span
  m='92110'>What</span> <span m='92220'>positions</span> <span
  m='93630'>are</span> <span m='93810'>OK?</span> <span m='94380'>And</span>
  <span m='94560'>what</span> <span m='94770'>positions</span> <span
  m='95610'>could</span> <span m='95940'>you</span> <span m='96060'>maybe</span>
  <span m='96390'>not</span> <span m='96870'>be</span> <span
  m='97110'>able</span> <span m='97470'>to</span> <span
  m='99000'>complete</span> <span m='99510'>to</span> <span m='99670'>a</span>
  <span m='99720'>rank</span> <span m='100050'>1</span> <span
  m='100290'>matrix?</span> <span m='101160'>Examples</span> <span
  m='101820'>are</span> <span m='101910'>the</span> <span
  m='102000'>best.</span> <span m='104310'>So</span> <span m='104580'>I'm</span>
  <span m='106020'>looking</span> <span m='106320'>at</span> <span
  m='106410'>this</span> <span m='106650'>question</span> <span
  m='107190'>here.</span> </p><p><span m='109370'>OK,</span> <span
  m='113880'>I'm</span> <span m='114240'>looking</span> <span
  m='114570'>for</span> <span m='114720'>a</span> <span m='114780'>rank</span>
  <span m='115140'>1</span> <span m='115410'>matrix</span> <span
  m='116130'>of</span> <span m='116310'>the</span> <span m='116400'>form</span>
  <span m='116820'>x</span> <span m='117690'>column</span> <span
  m='118590'>y</span> <span m='118890'>transpose,</span> <span
  m='120480'>or</span> <span m='120630'>uv</span> <span
  m='121200'>transpose,</span> <span m='121860'>I</span> <span
  m='121980'>guess.</span> <span m='124530'>Those</span> <span
  m='124770'>are</span> <span m='124860'>the</span> <span
  m='124950'>letters</span> <span m='125430'>where</span> <span
  m='125600'>you</span> <span m='125760'>used</span> <span m='125970'>to,</span>
  <span m='127110'>uv</span> <span m='128190'>transpose.</span> <span
  m='131039'>And</span> <span m='131160'>that</span> <span
  m='131370'>means</span> <span m='131760'>of</span> <span
  m='131880'>course</span> <span m='132270'>that</span> <span
  m='133300'>aij</span> <span m='135330'>is</span> <span m='135630'>ui</span>
  <span m='136940'>times</span> <span m='137580'>vj.</span> <span
  m='143020'>So</span> <span m='143830'>we're</span> <span
  m='144340'>able</span> <span m='144610'>to</span> <span
  m='144730'>choose--</span> <span m='147140'>we</span> <span
  m='147220'>have</span> <span m='147370'>m</span> <span m='148600'>u's.</span>
  </p><p><span m='152740'>Let</span> <span m='152920'>me</span> <span
  m='153280'>ask</span> <span m='153600'>a</span> <span
  m='153670'>question.</span> <span m='154680'>Could</span> <span
  m='154930'>I</span> <span m='155080'>complete--</span> <span
  m='156280'>so</span> <span m='156470'>let</span> <span m='156610'>me</span>
  <span m='156730'>take</span> <span m='157030'>m</span> <span
  m='157270'>equal</span> <span m='157630'>n</span> <span
  m='157810'>equal</span> <span m='158110'>3.</span> <span m='160330'>So</span>
  <span m='160540'>a</span> <span m='160600'>3</span> <span m='160870'>by</span>
  <span m='161050'>3</span> <span m='161290'>matrix.</span> <span
  m='162740'>I'm</span> <span m='162820'>going</span> <span m='162920'>to</span>
  <span m='163090'>give</span> <span m='163330'>you</span> <span
  m='163570'>m</span> <span m='163900'>plus</span> <span m='164320'>n</span>
  <span m='164620'>minus</span> <span m='165100'>1,</span> <span
  m='165650'>which</span> <span m='165820'>is</span> <span m='166420'>3</span>
  <span m='166810'>plus</span> <span m='167110'>3</span> <span
  m='167380'>minus</span> <span m='167830'>1,</span> <span m='168640'>five
  positions.</span> </p><p><span m='175910'>And</span> <span
  m='176270'>suppose</span> <span m='176810'>I</span> <span
  m='178670'>give</span> <span m='180110'>non-zeros</span> <span
  m='183950'>in</span> <span m='185450'>which</span> <span
  m='188020'>five</span> <span m='188680'>positions?</span> <span
  m='190600'>So</span> <span m='193130'>where</span> <span m='193280'>is</span>
  <span m='193430'>that</span> <span m='193660'>number</span> <span
  m='194020'>m</span> <span m='194335'>plus</span> <span m='194650'>n</span>
  <span m='194830'>minus</span> <span m='195010'>1</span> <span
  m='195190'>coming</span> <span m='195820'>from?</span> <span
  m='197230'>Well,</span> <span m='197620'>because</span> <span
  m='198070'>I</span> <span m='198220'>have</span> <span m='198370'>m</span>
  <span m='198750'>u's</span> <span m='199830'>and</span> <span
  m='199990'>I</span> <span m='200110'>have</span> <span m='200260'>n</span>
  <span m='200590'>v's</span> <span m='202330'>for</span> <span
  m='202450'>a</span> <span m='202570'>rank</span> <span m='202930'>1</span>
  <span m='203890'>matrix--</span> <span m='204490'>i</span> <span
  m='204700'>goes</span> <span m='205000'>from</span> <span m='205180'>1</span>
  <span m='205390'>to</span> <span m='205510'>m,</span> <span
  m='205990'>j</span> <span m='206770'>goes</span> <span m='207190'>from</span>
  <span m='208000'>1</span> <span m='208240'>to</span> <span
  m='208450'>n.</span> <span m='208990'>So</span> <span m='209260'>I</span>
  <span m='209380'>have</span> <span m='209560'>m</span> <span
  m='209770'>plus</span> <span m='210160'>n.</span> <span m='210940'>But</span>
  <span m='211180'>obviously</span> <span m='214210'>I</span> <span
  m='214330'>could</span> <span m='214750'>require</span> <span
  m='216010'>the</span> <span m='216460'>first</span> <span m='216940'>u</span>
  <span m='217270'>to</span> <span m='217390'>be</span> <span
  m='217600'>a</span> <span m='217660'>1.</span> <span m='218210'>In</span>
  <span m='218290'>other</span> <span m='218470'>words,</span> <span
  m='218780'>when</span> <span m='218860'>I'm</span> <span
  m='218950'>multiplying</span> <span m='219610'>those,</span> <span
  m='220300'>there</span> <span m='220480'>is</span> <span m='220600'>one</span>
  <span m='220870'>degree</span> <span m='221200'>of</span> <span
  m='221290'>freedom</span> <span m='222100'>that</span> <span
  m='223900'>is</span> <span m='224560'>sort</span> <span m='224800'>of</span>
  <span m='224860'>repeated</span> <span m='225430'>here,</span> <span
  m='225700'>because</span> <span m='229540'>if</span> <span
  m='229660'>I'm</span> <span m='229810'>just</span> <span
  m='230050'>given--</span> <span m='235480'>anyway,</span> <span
  m='236290'>you</span> <span m='237160'>see</span> <span m='237440'>it,</span>
  <span m='238220'>that</span> <span m='241090'>I</span> <span
  m='241210'>can</span> <span m='241390'>rescale</span> <span
  m='242050'>the</span> <span m='242200'>u</span> <span m='242710'>so</span>
  <span m='243040'>that</span> <span m='243220'>the</span> <span
  m='243370'>first</span> <span m='243790'>u</span> <span m='244060'>is</span>
  <span m='244210'>a</span> <span m='244310'>1.</span> <span
  m='245470'>And</span> <span m='246520'>that</span> <span
  m='246760'>leave</span> <span m='247120'>me</span> <span m='247570'>m</span>
  <span m='247780'>plus</span> <span m='248200'>n</span> <span
  m='248470'>minus</span> <span m='248980'>1.</span> </p><p><span
  m='250580'>So</span> <span m='250810'>could</span> <span m='251080'>I</span>
  <span m='251290'>give</span> <span m='251710'>you</span> <span
  m='252790'>these</span> <span m='253150'>five</span> <span
  m='253630'>numbers</span> <span m='255700'>and</span> <span
  m='255880'>could</span> <span m='256120'>you</span> <span
  m='256269'>complete</span> <span m='256779'>that</span> <span
  m='257079'>to</span> <span m='257399'>a</span> <span m='258839'>rank</span>
  <span m='259110'>1</span> <span m='259380'>matrix?</span> <span
  m='260490'>So</span> <span m='260670'>those</span> <span m='260940'>are</span>
  <span m='261180'>non-zeros.</span> <span m='261899'>Why</span> <span
  m='262110'>do</span> <span m='262260'>I</span> <span m='262380'>say</span>
  <span m='262620'>non-zeros?</span> <span m='264300'>Because</span> <span
  m='265620'>if</span> <span m='265800'>that</span> <span
  m='266070'>number</span> <span m='266430'>happened</span> <span
  m='266820'>to</span> <span m='266910'>be</span> <span m='267060'>a</span>
  <span m='267150'>zero,</span> <span m='267690'>I'd</span> <span
  m='267870'>have</span> <span m='268080'>bad</span> <span
  m='268410'>news</span> <span m='268890'>there.</span> <span
  m='269370'>If</span> <span m='269580'>I</span> <span
  m='269700'>prescribed</span> <span m='270360'>that</span> <span
  m='270600'>one</span> <span m='271160'>and</span> <span m='271380'>I</span>
  <span m='271530'>prescribed</span> <span m='272160'>it</span> <span
  m='272250'>to</span> <span m='272370'>be</span> <span m='272550'>zero,</span>
  <span m='273510'>then</span> <span m='275640'>if</span> <span
  m='275970'>every</span> <span m='276270'>column</span> <span
  m='276690'>has</span> <span m='276930'>to</span> <span m='277020'>be</span>
  <span m='277140'>a</span> <span m='277200'>multiple</span> <span
  m='277680'>of</span> <span m='277770'>that</span> <span
  m='278010'>column,</span> <span m='278640'>these</span> <span
  m='279030'>would</span> <span m='279210'>all</span> <span
  m='279450'>have</span> <span m='279720'>to</span> <span m='279810'>be</span>
  <span m='280020'>0.</span> <span m='280710'>So</span> <span
  m='280890'>I</span> <span m='280980'>don't</span> <span m='281130'>want</span>
  <span m='281580'>that.</span> <span m='281970'>I</span> <span
  m='282120'>want</span> <span m='283800'>to</span> <span m='283950'>be</span>
  <span m='284130'>able</span> <span m='284340'>to</span> <span
  m='284820'>prescribe</span> <span m='285990'>five</span> <span
  m='286650'>numbers.</span> <span m='287790'>And</span> <span
  m='288330'>therefore,</span> <span m='288780'>they</span> <span
  m='288960'>better</span> <span m='290760'>not</span> <span
  m='291000'>be</span> <span m='291240'>zero.</span> </p><p><span
  m='293970'>Could</span> <span m='294180'>you</span> <span
  m='294300'>complete</span> <span m='294720'>the</span> <span
  m='294840'>job</span> <span m='295260'>with</span> <span
  m='295470'>that</span> <span m='296370'>choice</span> <span
  m='296850'>of</span> <span m='297530'>a</span> <span m='297930'>five</span>
  <span m='298410'>positions?</span> <span m='300980'>I</span> <span
  m='301070'>think</span> <span m='301340'>you</span> <span
  m='301430'>could.</span> <span m='302270'>Because</span> <span
  m='302690'>how</span> <span m='302900'>would</span> <span
  m='303140'>you</span> <span m='303230'>decide</span> <span
  m='303770'>on</span> <span m='303920'>that</span> <span
  m='304130'>number?</span> <span m='306800'>Well,</span> <span
  m='307300'>I</span> <span m='307380'>mean</span> <span m='307460'>at</span>
  <span m='307550'>least</span> <span m='307760'>one</span> <span
  m='308000'>way</span> <span m='308150'>to</span> <span m='308270'>look</span>
  <span m='308540'>at</span> <span m='308720'>it</span> <span
  m='308900'>is,</span> <span m='309830'>what</span> <span
  m='310310'>would</span> <span m='310460'>that</span> <span
  m='310670'>number</span> <span m='311030'>be</span> <span
  m='311330'>there?</span> </p><p><span m='315320'>That</span> <span
  m='315620'>number</span> <span m='315950'>would</span> <span
  m='316160'>be</span> <span m='316490'>chosen.</span> <span
  m='317740'>There</span> <span m='318170'>would</span> <span
  m='318290'>be</span> <span m='318680'>one</span> <span m='319070'>and</span>
  <span m='319190'>only</span> <span m='319490'>one</span> <span
  m='319760'>choice</span> <span m='320210'>for</span> <span
  m='320390'>that</span> <span m='321680'>that</span> <span
  m='321860'>would</span> <span m='322040'>give</span> <span
  m='322280'>rank</span> <span m='322610'>1.</span> <span m='323360'>In</span>
  <span m='323480'>fact,</span> <span m='323810'>that</span> <span
  m='323990'>little</span> <span m='324320'>2</span> <span m='324620'>by</span>
  <span m='324860'>2</span> <span m='325130'>determinant</span> <span
  m='325880'>would</span> <span m='326090'>have</span> <span
  m='326330'>to</span> <span m='326480'>be?</span> <span m='328730'>0,</span>
  <span m='330940'>right?</span> <span m='332710'>All</span> <span
  m='332980'>the</span> <span m='333820'>columns</span> <span
  m='334330'>are</span> <span m='334420'>supposed</span> <span
  m='334810'>to</span> <span m='334930'>be</span> <span
  m='335080'>multiples</span> <span m='335680'>of</span> <span
  m='336100'>one</span> <span m='336400'>column.</span> <span
  m='337690'>All</span> <span m='337870'>the</span> <span m='337960'>rows</span>
  <span m='338245'>are</span> <span m='338530'>supposed</span> <span
  m='338670'>to</span> <span m='338810'>be</span> <span
  m='338950'>multiples</span> <span m='339490'>of</span> <span
  m='339610'>one</span> <span m='339880'>row.</span> <span m='340360'>All</span>
  <span m='340570'>the</span> <span m='340720'>2</span> <span
  m='340990'>by</span> <span m='341230'>2s</span> <span m='344100'>are</span>
  <span m='345300'>rank</span> <span m='345780'>1.</span> <span
  m='346830'>And</span> <span m='347040'>rank</span> <span m='347430'>1</span>
  <span m='347820'>for</span> <span m='348030'>a</span> <span
  m='348120'>2</span> <span m='348300'>by</span> <span m='348510'>2</span> <span
  m='348780'>means</span> <span m='349620'>determinant</span> <span
  m='350280'>0.</span> </p><p><span m='351210'>So</span> <span
  m='351510'>I</span> <span m='351630'>would</span> <span m='351840'>know</span>
  <span m='352050'>what</span> <span m='352260'>that</span> <span
  m='352470'>one</span> <span m='352650'>had</span> <span m='352860'>to</span>
  <span m='352950'>be.</span> <span m='353910'>That</span> <span
  m='354150'>number</span> <span m='354510'>would</span> <span
  m='354690'>have</span> <span m='354930'>to</span> <span m='355050'>be</span>
  <span m='357270'>a 1 2</span> <span m='358500'>times</span> <span m='359010'>a
  2 1</span> <span m='360200'>over</span> <span m='361020'>a 1 1.</span> <span
  m='368450'>Every</span> <span m='368780'>2</span> <span m='369020'>by</span>
  <span m='369440'>determinant</span> <span m='369950'>has</span> <span
  m='370160'>to</span> <span m='370250'>be</span> <span m='370400'>0</span>
  <span m='370820'>here.</span> <span m='371090'>If</span> <span
  m='371270'>I</span> <span m='371390'>want</span> <span m='371600'>rank</span>
  <span m='371930'>1,</span> <span m='372290'>I</span> <span
  m='372410'>can't</span> <span m='372710'>stand</span> <span
  m='373190'>any</span> <span m='373730'>2</span> <span m='373940'>by</span>
  <span m='374150'>2s</span> <span m='375200'>that</span> <span
  m='376460'>are</span> <span m='376640'>invertible</span> <span
  m='377210'>matrices.</span> <span m='378230'>So</span> <span
  m='379580'>all</span> <span m='379730'>the</span> <span
  m='379880'>determinants</span> <span m='380480'>have</span> <span
  m='380690'>to</span> <span m='380810'>be</span> <span m='380990'>zero.</span>
  </p><p><span m='382250'>And,</span> <span m='382400'>of</span> <span
  m='382490'>course,</span> <span m='382850'>then</span> <span
  m='383750'>these</span> <span m='384320'>three</span> <span
  m='384650'>numbers</span> <span m='385160'>would</span> <span
  m='385310'>allow</span> <span m='385610'>me</span> <span m='385760'>to</span>
  <span m='385880'>fill</span> <span m='386240'>in</span> <span
  m='386420'>there.</span> <span m='387560'>Those</span> <span
  m='388550'>three</span> <span m='389000'>numbers</span> <span
  m='389480'>would</span> <span m='389630'>allow</span> <span
  m='389900'>me</span> <span m='390020'>to</span> <span m='390140'>fill</span>
  <span m='390440'>that.</span> <span m='391160'>Those</span> <span
  m='391640'>three</span> <span m='392150'>numbers</span> <span
  m='392630'>will</span> <span m='392780'>allow</span> <span
  m='392990'>me</span> <span m='393140'>to</span> <span m='393200'>fill</span>
  <span m='393410'>that.</span> <span m='393580'>It</span> <span
  m='393900'>would</span> <span m='394015'>be</span> <span
  m='394130'>easy,</span> <span m='395720'>easy.</span> <span
  m='396770'>So</span> <span m='397100'>that</span> <span m='397610'>I</span>
  <span m='397790'>can</span> <span m='398000'>see</span> <span
  m='398330'>that</span> <span m='399050'>those</span> <span
  m='399410'>are</span> <span m='399530'>five</span> <span
  m='399890'>positions</span> <span m='400610'>that</span> <span
  m='400760'>work.</span> </p><p><span m='402290'>Now,</span> <span
  m='402510'>give</span> <span m='402650'>me</span> <span m='402830'>five</span>
  <span m='403190'>positions</span> <span m='403850'>that</span> <span
  m='404030'>won't</span> <span m='404300'>work.</span> <span
  m='405500'>So</span> <span m='405860'>this</span> <span m='406070'>is</span>
  <span m='406250'>good.</span> <span m='407000'>This</span> <span
  m='407180'>is</span> <span m='407340'>check.</span> <span
  m='408410'>Now,</span> <span m='408590'>I</span> <span m='408710'>want</span>
  <span m='408980'>one</span> <span m='409370'>where</span> <span
  m='409610'>I</span> <span m='409700'>can't</span> <span m='410060'>make</span>
  <span m='410300'>it</span> <span m='410390'>work.</span> </p><p><span
  m='412370'>So</span> <span m='412580'>let</span> <span m='412700'>me</span>
  <span m='412850'>give</span> <span m='413210'>that</span> <span
  m='413510'>number,</span> <span m='415640'>that</span> <span
  m='415940'>number.</span> <span m='419570'>So</span> <span
  m='419870'>I'm</span> <span m='419990'>looking</span> <span
  m='420290'>for</span> <span m='420470'>something</span> <span
  m='420920'>that</span> <span m='421070'>fails,</span> <span
  m='422240'>a</span> <span m='422300'>set</span> <span m='422570'>of</span>
  <span m='422690'>positions</span> <span m='423290'>that</span> <span
  m='423440'>fails.</span> <span m='424010'>And</span> <span
  m='424130'>then</span> <span m='424340'>I</span> <span m='424490'>want</span>
  <span m='424730'>to</span> <span m='425330'>be</span> <span
  m='425480'>able</span> <span m='425720'>to</span> <span
  m='425840'>test,</span> <span m='426710'>does</span> <span
  m='427090'>the</span> <span m='427160'>set</span> <span m='427460'>of</span>
  <span m='427520'>positions</span> <span m='428090'>work</span> <span
  m='429140'>for</span> <span m='429320'>any</span> <span
  m='429590'>non-zeros</span> <span m='431090'>or</span> <span
  m='431300'>does</span> <span m='431600'>it</span> <span m='432500'>not</span>
  <span m='432800'>work?</span> </p><p><span m='436270'>What</span> <span
  m='436430'>am</span> <span m='436550'>I</span> <span m='436640'>looking</span>
  <span m='436910'>for</span> <span m='437150'>here?</span> <span
  m='437360'>A</span> <span m='437840'>different</span> <span
  m='438230'>one</span> <span m='438410'>that</span> <span
  m='438560'>works?</span> <span m='440970'>OK,</span> <span
  m='442020'>so</span> <span m='442170'>what</span> <span m='442410'>else</span>
  <span m='442620'>would</span> <span m='442860'>work,</span> <span
  m='443340'>apart</span> <span m='443700'>from</span> <span
  m='443940'>that?</span> </p><p><span m='445320'>Let's</span> <span
  m='445560'>see,</span> <span m='445830'>I</span> <span
  m='446280'>suppose</span> <span m='446670'>I</span> <span
  m='446790'>take</span> <span m='447030'>that</span> <span
  m='447270'>one.</span> <span m='447870'>Now,</span> <span
  m='448050'>what</span> <span m='448260'>about</span> <span
  m='448560'>that</span> <span m='448920'>position</span> <span
  m='449490'>there?</span> <span m='451290'>I</span> <span
  m='451380'>must</span> <span m='451680'>not</span> <span
  m='452490'>choose</span> <span m='452910'>that</span> <span
  m='453090'>one,</span> <span m='453330'>right?</span> <span
  m='453600'>I</span> <span m='453720'>must</span> <span m='454020'>not</span>
  <span m='454260'>choose</span> <span m='454620'>that</span> <span
  m='454800'>one,</span> <span m='454980'>because</span> <span
  m='455340'>that</span> <span m='455610'>would</span> <span
  m='456390'>complete</span> <span m='456900'>a</span> <span m='456990'>2</span>
  <span m='457260'>by</span> <span m='457470'>2.</span> <span
  m='457940'>And</span> <span m='458100'>if</span> <span m='458970'>I</span>
  <span m='459090'>gave</span> <span m='459390'>the</span> <span
  m='459510'>wrong</span> <span m='459840'>numbers,</span> <span
  m='460740'>the</span> <span m='460860'>determinant</span> <span
  m='461460'>wouldn't</span> <span m='461760'>be</span> <span
  m='461910'>zero.</span> <span m='462330'>And</span> <span m='462450'>I</span>
  <span m='462570'>would</span> <span m='462780'>be</span> <span
  m='462990'>failed.</span> <span m='463740'>So</span> <span m='463860'>I</span>
  <span m='463980'>must</span> <span m='464250'>not</span> <span
  m='464430'>give</span> <span m='464640'>that</span> <span
  m='464850'>position.</span> </p><p><span m='465330'>Maybe</span> <span
  m='465600'>I</span> <span m='465720'>could</span> <span m='465900'>give</span>
  <span m='466110'>that</span> <span m='466320'>position.</span> <span
  m='467370'>Maybe</span> <span m='467640'>I</span> <span
  m='467760'>could</span> <span m='467940'>give</span> <span
  m='468330'>this</span> <span m='468690'>one.</span> <span
  m='469550'>How's</span> <span m='469900'>that?</span> <span
  m='471930'>If</span> <span m='472110'>I</span> <span m='472230'>had</span>
  <span m='472380'>those</span> <span m='472710'>five,</span> <span
  m='473340'>would</span> <span m='473550'>I</span> <span m='473670'>be</span>
  <span m='473880'>able</span> <span m='474120'>to</span> <span
  m='474240'>complete?</span> <span m='475470'>It</span> <span
  m='475560'>looks</span> <span m='475860'>good</span> <span
  m='476190'>anyway.</span> <span m='479160'>It</span> <span
  m='479280'>looks</span> <span m='479610'>good.</span> </p><p><span
  m='481250'>Let's</span> <span m='481380'>see,</span> <span
  m='481590'>how</span> <span m='481800'>would</span> <span m='481980'>I</span>
  <span m='482100'>go</span> <span m='482310'>about</span> <span
  m='482640'>completing</span> <span m='483390'>that?</span> <span
  m='484770'>Let's</span> <span m='485010'>see,</span> <span m='486180'>I</span>
  <span m='486570'>would</span> <span m='486720'>know</span> <span
  m='486900'>what</span> <span m='487050'>that</span> <span
  m='487230'>number</span> <span m='487530'>had</span> <span
  m='487710'>to</span> <span m='487770'>be</span> <span m='487980'>from</span>
  <span m='488190'>this</span> <span m='488430'>2</span> <span
  m='488610'>by</span> <span m='488820'>2.</span> <span m='490380'>From</span>
  <span m='490650'>this</span> <span m='490950'>2</span> <span
  m='491190'>by</span> <span m='491400'>2,</span> <span m='491640'>I</span>
  <span m='491760'>would</span> <span m='491910'>know</span> <span
  m='492180'>that</span> <span m='492420'>number.</span> <span
  m='494280'>From</span> <span m='495180'>this--</span> <span
  m='496260'>where</span> <span m='496560'>now?</span> <span
  m='496980'>This</span> <span m='497430'>and</span> <span
  m='497640'>this</span> <span m='498150'>and</span> <span
  m='498810'>this,</span> <span m='500430'>no,</span> <span
  m='500640'>that's</span> <span m='500910'>not</span> <span
  m='501150'>any</span> <span m='501350'>good.</span> </p><p><span
  m='501900'>What</span> <span m='502080'>do</span> <span m='502200'>I</span>
  <span m='502290'>do</span> <span m='502470'>now?</span> <span
  m='504840'>How</span> <span m='505080'>would</span> <span m='505260'>I</span>
  <span m='505380'>get</span> <span m='505590'>this</span> <span
  m='505950'>number?</span> <span m='510380'>Oh,</span> <span
  m='510730'>OK,</span> <span m='511030'>I</span> <span m='511150'>guess</span>
  <span m='511390'>I</span> <span m='511480'>have</span> <span
  m='511750'>to</span> <span m='511870'>use--</span> <span
  m='513760'>this</span> <span m='514390'>would</span> <span
  m='514570'>complete</span> <span m='515140'>that.</span> <span
  m='516010'>Oh,</span> <span m='516159'>this</span> <span m='516429'>2</span>
  <span m='516610'>by</span> <span m='516820'>2,</span> <span
  m='517030'>oh,</span> <span m='517240'>yeah,</span> <span
  m='517580'>OK,</span> <span m='518140'>no</span> <span
  m='518320'>problem.</span> <span m='519000'>That</span> <span
  m='519179'>would</span> <span m='519610'>complete</span> <span
  m='520000'>that</span> <span m='520210'>one,</span> <span
  m='520500'>right?</span> </p><p><span m='521950'>But</span> <span
  m='522100'>this</span> <span m='522520'>one,</span> <span m='524049'>I</span>
  <span m='524140'>don't</span> <span m='524410'>think</span> <span
  m='524680'>I</span> <span m='524770'>can</span> <span m='524980'>get</span>
  <span m='525280'>immediately.</span> <span m='527710'>But</span> <span
  m='528100'>I</span> <span m='528250'>can</span> <span m='528670'>get</span>
  <span m='528910'>it.</span> <span m='529000'>Once</span> <span
  m='529390'>I</span> <span m='529510'>know</span> <span
  m='529840'>these,</span> <span m='530770'>then</span> <span
  m='531040'>obviously</span> <span m='531520'>I</span> <span
  m='531610'>can</span> <span m='531820'>get</span> <span
  m='532840'>that,</span> <span m='533170'>right?</span> <span
  m='533950'>So</span> <span m='534900'>it's</span> <span m='535300'>sort</span>
  <span m='535540'>of</span> <span m='535630'>nice</span> <span
  m='536620'>combinatorial</span> <span m='537430'>problem.</span> <span
  m='538840'>Which</span> <span m='539680'>five</span> <span
  m='540040'>positions</span> <span m='540670'>will</span> <span
  m='540880'>work?</span> <span m='541300'>Which</span> <span
  m='541570'>five</span> <span m='543130'>will</span> <span
  m='543310'>not</span> <span m='543550'>work?</span> <span
  m='543980'>How</span> <span m='544060'>do</span> <span m='544210'>I</span>
  <span m='544330'>tell?</span> </p><p><span m='547510'>Of</span> <span
  m='547630'>course,</span> <span m='547980'>that's</span> <span
  m='548200'>for</span> <span m='548275'>a</span> <span m='548350'>3</span>
  <span m='548620'>by</span> <span m='548830'>3.</span> <span
  m='550210'>Yeah,</span> <span m='550570'>so</span> <span m='550810'>let</span>
  <span m='550960'>me--</span> <span m='551530'>I</span> <span
  m='551620'>had</span> <span m='553840'>like</span> <span m='554080'>a</span>
  <span m='554740'>bigger</span> <span m='555100'>example.</span> <span
  m='555580'>Let</span> <span m='555700'>me</span> <span m='556180'>move</span>
  <span m='556420'>up</span> <span m='556570'>to</span> <span
  m='556720'>4</span> <span m='557020'>by</span> <span m='557260'>4.</span>
  </p><p><span m='558390'>So</span> <span m='560980'>here</span> <span
  m='561130'>comes</span> <span m='561460'>the</span> <span
  m='561580'>idea</span> <span m='562600'>that</span> <span m='562960'>I</span>
  <span m='563110'>learned</span> <span m='563470'>last</span> <span
  m='563830'>night</span> <span m='564190'>from</span> <span m='564520'>a</span>
  <span m='565600'>math</span> <span m='565930'>professor</span> <span
  m='566470'>who</span> <span m='566620'>does</span> <span
  m='566950'>combinatorics.</span> <span m='568360'>So</span> <span
  m='568570'>these</span> <span m='569020'>people</span> <span
  m='569350'>who</span> <span m='569440'>do</span> <span
  m='569620'>combinatorics,</span> <span m='570350'>they</span> <span
  m='570600'>know</span> <span m='571660'>stuff</span> <span
  m='572050'>that</span> <span m='572230'>the</span> <span
  m='572350'>rest</span> <span m='572620'>of</span> <span m='572710'>us</span>
  <span m='572860'>don't.</span> </p><p><span m='574570'>So</span> <span
  m='575800'>his</span> <span m='576580'>view</span> <span m='576940'>is</span>
  <span m='581170'>these</span> <span m='581570'>would</span> <span
  m='581770'>be</span> <span m='581920'>rows,</span> <span
  m='583850'>one,</span> <span m='584330'>two,</span> <span
  m='584870'>three.</span> <span m='585850'>I</span> <span m='585940'>may</span>
  <span m='587140'>add</span> <span m='587350'>another</span> <span
  m='587740'>row.</span> <span m='588070'>Let</span> <span m='588190'>me</span>
  <span m='588340'>do</span> <span m='588520'>a</span> <span m='588580'>4</span>
  <span m='588880'>by</span> <span m='589090'>4.</span> <span
  m='589860'>And</span> <span m='589990'>these</span> <span
  m='590260'>would</span> <span m='590440'>be</span> <span
  m='590590'>columns,</span> <span m='592540'>one,</span> <span
  m='593170'>two,</span> <span m='593800'>three,</span> <span
  m='594370'>four.</span> <span m='596440'>Now,</span> <span
  m='596590'>I'm</span> <span m='596845'>looking</span> <span
  m='597100'>for</span> <span m='597490'>seven--</span> <span
  m='598810'>so</span> <span m='599410'>if</span> <span m='599560'>I</span>
  <span m='599710'>prescribe</span> <span m='600460'>an</span> <span
  m='600610'>entry,</span> <span m='601510'>I'll</span> <span
  m='601660'>put</span> <span m='601930'>in</span> <span m='602130'>an</span>
  <span m='602590'>edge</span> <span m='603190'>between</span> <span
  m='603610'>them.</span> <span m='604330'>So</span> <span m='604510'>let</span>
  <span m='604660'>me</span> <span m='605080'>let</span> <span
  m='605230'>me</span> <span m='605380'>hype</span> <span m='606100'>this</span>
  <span m='606310'>one</span> <span m='606490'>up</span> <span
  m='606640'>to</span> <span m='606790'>4</span> <span m='607090'>by</span>
  <span m='607300'>4.</span> </p><p><span m='611410'>Here,</span> <span
  m='611790'>a</span> <span m='611850'>good</span> <span m='612030'>one.</span>
  <span m='612360'>Actually,</span> <span m='612930'>I'll</span> <span
  m='613050'>just</span> <span m='613320'>draw</span> <span
  m='613710'>this</span> <span m='614820'>picture.</span> <span
  m='616980'>So</span> <span m='617220'>suppose</span> <span m='617760'>I</span>
  <span m='617970'>prescribe</span> <span m='618540'>the</span> <span
  m='618650'>1,</span> <span m='618980'>1--</span> <span m='619350'>oh,</span>
  <span m='619500'>yeah,</span> <span m='620100'>and</span> <span
  m='620220'>over</span> <span m='620460'>here</span> <span
  m='620680'>I'll</span> <span m='620910'>show</span> <span
  m='621240'>you</span> <span m='621480'>what</span> <span
  m='621660'>I've</span> <span m='621780'>done.</span> <span
  m='622530'>So</span> <span m='622920'>that</span> <span m='623130'>I'm</span>
  <span m='623370'>putting</span> <span m='623730'>in</span> <span
  m='623910'>the</span> <span m='624030'>1,</span> <span m='624330'>1</span>
  <span m='624630'>position.</span> <span m='626160'>I'm</span> <span
  m='626310'>looking</span> <span m='626640'>for</span> <span
  m='626840'>7,</span> <span m='627360'>right?</span> <span m='628620'>4</span>
  <span m='629040'>plus</span> <span m='629370'>4</span> <span
  m='629700'>minus</span> <span m='630120'>1,</span> <span
  m='630510'>seven</span> <span m='630960'>numbers.</span> <span
  m='631860'>OK.</span> </p><p><span m='632670'>Then,</span> <span
  m='633090'>I'll</span> <span m='633210'>put</span> <span m='633510'>in,</span>
  <span m='634530'>this</span> <span m='634830'>is</span> <span
  m='635040'>row</span> <span m='635400'>2</span> <span m='635850'>column</span>
  <span m='636240'>1.</span> <span m='637320'>Row</span> <span
  m='637530'>2</span> <span m='637830'>column</span> <span m='638160'>1,</span>
  <span m='638370'>that</span> <span m='638520'>would</span> <span
  m='638670'>be</span> <span m='638850'>there.</span> <span
  m='640110'>Then</span> <span m='640320'>I'll</span> <span
  m='640440'>put</span> <span m='640740'>in</span> <span m='640980'>a</span>
  <span m='641080'>2</span> <span m='642300'>to</span> <span
  m='642450'>4.</span> <span m='643930'>So</span> <span m='644010'>that</span>
  <span m='644220'>would</span> <span m='644430'>be</span> <span
  m='644760'>row</span> <span m='645090'>2,</span> <span
  m='646740'>column</span> <span m='647070'>4.</span> <span
  m='649140'>Then</span> <span m='649350'>I'll</span> <span
  m='649470'>put</span> <span m='649740'>in</span> <span m='649950'>a</span>
  <span m='650010'>3</span> <span m='650440'>to</span> <span
  m='650550'>4.</span> <span m='652530'>So</span> <span m='652950'>that</span>
  <span m='653160'>would</span> <span m='653310'>be</span> <span
  m='653490'>row</span> <span m='653760'>3,</span> <span
  m='654210'>column</span> <span m='654570'>4.</span> </p><p><span
  m='655920'>And</span> <span m='656220'>finally,</span> <span
  m='656760'>I'll</span> <span m='657000'>put</span> <span
  m='657420'>in--</span> <span m='660290'>let's</span> <span
  m='660480'>see,</span> <span m='662040'>so</span> <span m='662280'>how</span>
  <span m='662400'>many</span> <span m='662670'>have</span> <span
  m='662790'>I</span> <span m='662880'>done?</span> <span m='663100'>One,</span>
  <span m='663370'>two,</span> <span m='663650'>three,</span> <span
  m='663970'>four,</span> <span m='664410'>and</span> <span
  m='664530'>I've</span> <span m='664710'>got</span> <span m='664850'>to</span>
  <span m='664980'>get</span> <span m='665130'>up</span> <span
  m='665280'>to</span> <span m='666690'>seven,</span> <span
  m='667500'>prescribed</span> <span m='668160'>seven.</span> <span
  m='668970'>Well,</span> <span m='670650'>I'll</span> <span
  m='670770'>put</span> <span m='672180'>more</span> <span m='672450'>in.</span>
  <span m='675060'>So</span> <span m='675360'>on</span> <span
  m='675510'>row</span> <span m='675800'>4,</span> <span m='676290'>I</span>
  <span m='676470'>gave</span> <span m='677670'>2,</span> <span
  m='678120'>3,</span> <span m='678570'>and</span> <span m='678720'>4.</span>
  </p><p><span m='682590'>And</span> <span m='682830'>did</span> <span
  m='683010'>I</span> <span m='683130'>put</span> <span m='683400'>in</span>
  <span m='683550'>this</span> <span m='683760'>one?</span> <span
  m='685080'>Yes,</span> <span m='685500'>I</span> <span m='685620'>did.</span>
  </p><p><span m='693010'>So</span> <span m='693310'>I've</span> <span
  m='693550'>now</span> <span m='693820'>prescribed</span> <span
  m='695470'>seven</span> <span m='695830'>numbers.</span> <span
  m='697090'>Could</span> <span m='697450'>I</span> <span
  m='699000'>complete</span> <span m='699520'>the</span> <span
  m='699610'>matrix</span> <span m='700180'>to</span> <span m='700285'>a</span>
  <span m='700390'>rank</span> <span m='700690'>1</span> <span
  m='700930'>matrix?</span> <span m='704790'>You</span> <span
  m='704930'>see</span> <span m='705170'>the</span> <span m='705260'>math</span>
  <span m='705590'>question.</span> <span m='706340'>If</span> <span
  m='706490'>I'm</span> <span m='706670'>given</span> <span
  m='707060'>seven</span> <span m='707540'>positions</span> <span
  m='708230'>there--</span> <span m='709850'>this</span> <span
  m='710120'>is</span> <span m='710240'>another</span> <span
  m='710600'>way</span> <span m='710810'>to</span> <span m='710930'>look</span>
  <span m='711170'>at</span> <span m='711290'>the</span> <span
  m='711410'>same</span> <span m='711740'>picture.</span> </p><p><span
  m='712850'>This</span> <span m='713090'>is</span> <span m='713330'>I</span>
  <span m='713510'>put</span> <span m='713780'>in</span> <span
  m='713960'>an</span> <span m='714140'>edge</span> <span m='715160'>for</span>
  <span m='715370'>every</span> <span m='715700'>x.</span> <span
  m='716810'>So</span> <span m='717020'>if</span> <span m='717170'>I</span>
  <span m='717260'>have</span> <span m='717560'>seven</span> <span
  m='718010'>x's,</span> <span m='718490'>I've</span> <span
  m='718670'>got</span> <span m='718880'>seven</span> <span
  m='719390'>edges.</span> <span m='722070'>And</span> <span
  m='722540'>this</span> <span m='722750'>is</span> <span
  m='722900'>called</span> <span m='723260'>a</span> <span
  m='723320'>bipartite</span> <span m='724490'>graph.</span> <span
  m='725060'>So</span> <span m='725300'>it's</span> <span m='725420'>a</span>
  <span m='725480'>graph.</span> </p><p><span m='727050'>I've</span> <span
  m='727070'>got</span> <span m='727760'>four</span> <span
  m='728060'>nodes</span> <span m='728480'>here,</span> <span
  m='728810'>four</span> <span m='729080'>nodes</span> <span
  m='729410'>here.</span> <span m='729680'>So</span> <span m='729830'>I</span>
  <span m='729905'>have</span> <span m='729980'>eight</span> <span
  m='730220'>nodes.</span> <span m='731960'>It's</span> <span
  m='732140'>a</span> <span m='732230'>bipartite</span> <span
  m='733250'>graph</span> <span m='733670'>because</span> <span
  m='735540'>I</span> <span m='735690'>have</span> <span m='735800'>one</span>
  <span m='736130'>part</span> <span m='736430'>of</span> <span
  m='736550'>nodes</span> <span m='736970'>over</span> <span
  m='737210'>there,</span> <span m='738050'>one</span> <span
  m='738320'>part</span> <span m='738620'>of</span> <span
  m='738740'>nodes</span> <span m='739100'>here.</span> <span
  m='739370'>Bipartite</span> <span m='740270'>means</span> <span
  m='740660'>two</span> <span m='740960'>parts.</span> </p><p><span
  m='741980'>So</span> <span m='742250'>the</span> <span m='742400'>rows</span>
  <span m='742940'>give</span> <span m='743120'>me</span> <span
  m='743300'>one</span> <span m='743600'>part</span> <span m='743900'>of</span>
  <span m='744400'>the</span> <span m='744650'>edges.</span> <span
  m='745460'>The</span> <span m='746030'>columns</span> <span
  m='746600'>give</span> <span m='746780'>me</span> <span m='746930'>the</span>
  <span m='747080'>other</span> <span m='747320'>part</span> <span
  m='747560'>of</span> <span m='747650'>the</span> <span
  m='747800'>edges.</span> <span m='748550'>And</span> <span
  m='748730'>all</span> <span m='748970'>the</span> <span
  m='749120'>connections</span> <span m='749870'>go</span> <span
  m='750920'>between</span> <span m='751400'>the</span> <span
  m='751520'>parts.</span> <span m='753500'>I</span> <span
  m='753590'>don't</span> <span m='754130'>have</span> <span
  m='754340'>any</span> <span m='754940'>lines</span> <span
  m='755480'>from</span> <span m='757310'>a</span> <span m='757370'>row</span>
  <span m='757730'>to</span> <span m='757970'>a</span> <span
  m='758030'>row,</span> <span m='758420'>because</span> <span
  m='759740'>the</span> <span m='760790'>whole</span> <span
  m='761060'>code</span> <span m='761630'>is</span> <span m='762470'>that</span>
  <span m='764870'>this</span> <span m='765140'>tells</span> <span
  m='765500'>me</span> <span m='766640'>where</span> <span
  m='766880'>those</span> <span m='767180'>seven</span> <span
  m='769100'>positions</span> <span m='769700'>are.</span> </p><p><span
  m='770930'>Now,</span> <span m='771140'>I'm</span> <span
  m='771290'>just</span> <span m='771530'>going</span> <span
  m='771680'>ask</span> <span m='772130'>you,</span> <span m='773270'>can</span>
  <span m='773510'>I</span> <span m='773630'>complete</span> <span
  m='774160'>the</span> <span m='774260'>graph?</span> <span
  m='776360'>Can</span> <span m='776600'>I</span> <span
  m='776720'>complete</span> <span m='777170'>the</span> <span
  m='777260'>matrix?</span> <span m='778340'>Can</span> <span
  m='778550'>I</span> <span m='778880'>complete</span> <span
  m='779990'>rank</span> <span m='780320'>1</span> <span
  m='780590'>matrix</span> <span m='781160'>there?</span> <span
  m='784300'>What</span> <span m='784460'>do</span> <span m='784520'>you</span>
  <span m='784610'>think?</span> </p><p><span m='786060'>And</span> <span
  m='787240'>the</span> <span m='787400'>real</span> <span
  m='787760'>question</span> <span m='788300'>is,</span> <span
  m='789300'>what's</span> <span m='789500'>the</span> <span
  m='789650'>rule?</span> <span m='792380'>How</span> <span
  m='792620'>can</span> <span m='792830'>I</span> <span m='792950'>see</span>
  <span m='793340'>when</span> <span m='793550'>I</span> <span
  m='793700'>can't</span> <span m='794780'>complete</span> <span
  m='795260'>the</span> <span m='795380'>matrix,</span> <span
  m='796520'>something</span> <span m='797000'>gets</span> <span
  m='797270'>in</span> <span m='797420'>the</span> <span m='797510'>way?</span>
  <span m='798290'>Here,</span> <span m='798650'>what</span> <span
  m='798860'>got</span> <span m='799160'>in</span> <span m='799280'>the</span>
  <span m='799400'>way</span> <span m='799730'>was</span> <span
  m='800540'>this</span> <span m='800840'>2</span> <span m='801080'>by</span>
  <span m='801290'>2.</span> </p><p><span m='803490'>And</span> <span
  m='803810'>actually,</span> <span m='804230'>I</span> <span
  m='804470'>asked</span> <span m='804900'>the</span> <span
  m='805130'>question</span> <span m='805880'>on</span> <span
  m='806120'>email,</span> <span m='807830'>can</span> <span m='808070'>I</span>
  <span m='808220'>always</span> <span m='808610'>complete</span> <span
  m='809090'>it--</span> <span m='809320'>yeah,</span> <span
  m='809570'>so</span> <span m='810140'>that</span> <span
  m='810320'>would</span> <span m='810500'>be</span> <span m='810620'>the</span>
  <span m='810740'>question</span> <span m='811160'>I</span> <span
  m='811280'>could</span> <span m='811490'>ask</span> <span
  m='811760'>you.</span> <span m='812390'>Can</span> <span m='812720'>I</span>
  <span m='812870'>always</span> <span m='813320'>complete</span> <span
  m='813800'>the</span> <span m='813920'>graph--</span> <span
  m='815420'>complete</span> <span m='815840'>the</span> <span
  m='815960'>matrix</span> <span m='817580'>to</span> <span
  m='817730'>have</span> <span m='817970'>rank</span> <span m='818300'>1</span>
  <span m='820500'>when</span> <span m='821870'>I</span> <span
  m='821990'>don't</span> <span m='822290'>run</span> <span
  m='822560'>into</span> <span m='822860'>this?</span> <span
  m='823430'>Is</span> <span m='824360'>that</span> <span m='824720'>all</span>
  <span m='824990'>I</span> <span m='825110'>have</span> <span
  m='825290'>to</span> <span m='825470'>avoid,</span> <span m='826900'>a</span>
  <span m='827120'>2</span> <span m='827390'>by</span> <span
  m='827600'>2,</span> <span m='828050'>where</span> <span m='830390'>I'm</span>
  <span m='830540'>given</span> <span m='830840'>all</span> <span
  m='830990'>four</span> <span m='831350'>entries--</span> <span
  m='831770'>oh,</span> <span m='831920'>yeah,</span> <span
  m='832430'>this</span> <span m='832700'>I</span> <span m='833240'>was</span>
  <span m='833540'>able</span> <span m='833810'>to</span> <span
  m='833900'>complete.</span> <span m='836600'>Sorry</span> <span
  m='837010'>to--</span> <span m='838070'>let's</span> <span
  m='838850'>do</span> <span m='839040'>one.</span> </p><p><span
  m='840200'>If</span> <span m='840950'>I'm</span> <span m='841160'>given</span>
  <span m='842750'>those</span> <span m='843140'>entries</span> <span
  m='845120'>and</span> <span m='845330'>maybe</span> <span
  m='845660'>some</span> <span m='845900'>others,</span> <span
  m='848720'>I</span> <span m='848780'>guess</span> <span
  m='849010'>seven</span> <span m='849500'>altogether,</span> <span
  m='850520'>that's</span> <span m='850820'>a</span> <span
  m='850880'>failure.</span> <span m='854540'>I</span> <span
  m='854690'>can't</span> <span m='855020'>prescribe</span> <span
  m='855740'>any</span> <span m='856100'>non-zeros</span> <span
  m='857030'>in</span> <span m='857150'>those</span> <span
  m='857390'>seven</span> <span m='857780'>positions,</span> <span
  m='858440'>because</span> <span m='859220'>if</span> <span m='859400'>I</span>
  <span m='859520'>prescribe</span> <span m='860070'>any</span> <span
  m='860330'>non-zeros,</span> <span m='861380'>I</span> <span
  m='861500'>probably</span> <span m='862100'>won't</span> <span
  m='862430'>have</span> <span m='863470'>a</span> <span m='863570'>zero</span>
  <span m='863990'>determinant</span> <span m='864680'>here.</span> <span
  m='865790'>I</span> <span m='865880'>won't</span> <span m='866210'>have</span>
  <span m='866660'>rank</span> <span m='867050'>1.</span> <span
  m='868260'>That</span> <span m='868910'>column</span> <span
  m='869840'>will</span> <span m='870050'>not</span> <span m='870320'>be</span>
  <span m='870500'>a</span> <span m='870560'>multiple</span> <span
  m='871040'>of</span> <span m='871130'>that</span> <span
  m='871370'>column.</span> <span m='872030'>Whatever</span> <span
  m='872540'>I</span> <span m='872660'>do</span> <span m='872930'>here,</span>
  <span m='873590'>I've</span> <span m='873740'>screwed</span> <span
  m='874220'>up</span> <span m='874640'>already.</span> <span
  m='875390'>So</span> <span m='875600'>that's</span> <span m='875940'>a</span>
  <span m='876060'>fail.</span> </p><p><span m='883910'>Let</span> <span
  m='884120'>me</span> <span m='884270'>take</span> <span m='884600'>that</span>
  <span m='884900'>picture</span> <span m='885890'>and</span> <span
  m='886400'>turn</span> <span m='886700'>it</span> <span m='886850'>into</span>
  <span m='887090'>this</span> <span m='887330'>picture,</span> <span
  m='888230'>so</span> <span m='888530'>rows,</span> <span
  m='890040'>columns.</span> <span m='891570'>So</span> <span
  m='891620'>if</span> <span m='891740'>I</span> <span m='891830'>take</span>
  <span m='892070'>these</span> <span m='892280'>seven,</span> <span
  m='893090'>that's</span> <span m='893330'>a</span> <span m='893360'>row</span>
  <span m='893720'>1--</span> <span m='895040'>row</span> <span
  m='895250'>1,</span> <span m='895610'>2,</span> <span m='895880'>3,</span>
  <span m='896210'>4,</span> <span m='896900'>so</span> <span
  m='897280'>row</span> <span m='897470'>1</span> <span m='897860'>goes</span>
  <span m='898220'>to</span> <span m='898400'>1</span> <span
  m='898760'>and</span> <span m='898910'>2.</span> <span m='900050'>Row</span>
  <span m='900290'>2</span> <span m='900770'>goes</span> <span
  m='901280'>to</span> <span m='901850'>1</span> <span m='902240'>and</span>
  <span m='902450'>2.</span> <span m='903470'>Row</span> <span
  m='903740'>3</span> <span m='904310'>goes</span> <span m='904850'>to</span>
  <span m='905105'>4.</span> <span m='906530'>And</span> <span
  m='906710'>row</span> <span m='906950'>4</span> <span m='907430'>goes</span>
  <span m='907910'>to</span> <span m='908690'>3</span> <span
  m='908990'>and</span> <span m='909140'>4.</span> </p><p><span
  m='913290'>That's</span> <span m='913560'>a</span> <span
  m='913650'>failure.</span> <span m='915360'>And</span> <span
  m='915480'>how</span> <span m='915690'>do</span> <span m='915870'>I</span>
  <span m='915960'>know</span> <span m='916200'>it's</span> <span
  m='916410'>a</span> <span m='916470'>failure?</span> <span m='917040'>I</span>
  <span m='917380'>want</span> <span m='917610'>to</span> <span
  m='917700'>now</span> <span m='918900'>come</span> <span m='919140'>up</span>
  <span m='919320'>with</span> <span m='919590'>the</span> <span
  m='919920'>answer.</span> </p><p><span m='922750'>So</span> <span
  m='923250'>if</span> <span m='923430'>I</span> <span m='923580'>give</span>
  <span m='924150'>any</span> <span m='924630'>seven</span> <span
  m='925080'>positions</span> <span m='925830'>or</span> <span
  m='926010'>any</span> <span m='926370'>m</span> <span m='926670'>plus</span>
  <span m='927000'>n</span> <span m='927180'>minus</span> <span
  m='927570'>1</span> <span m='927840'>positions</span> <span
  m='928830'>like</span> <span m='929070'>that,</span> <span m='930180'>I</span>
  <span m='930300'>can</span> <span m='930540'>create</span> <span
  m='931140'>a</span> <span m='931230'>graph</span> <span m='931560'>like</span>
  <span m='931800'>that,</span> <span m='933270'>just</span> <span
  m='933510'>following</span> <span m='934050'>the</span> <span
  m='934380'>rule</span> <span m='934740'>that</span> <span
  m='934890'>you</span> <span m='935070'>saw.</span> <span
  m='935730'>Those</span> <span m='935970'>seven</span> <span
  m='937890'>positions</span> <span m='938640'>gave</span> <span
  m='938910'>me</span> <span m='939090'>seven</span> <span
  m='939570'>edges</span> <span m='940050'>in</span> <span m='940170'>my</span>
  <span m='940380'>graph.</span> <span m='941270'>And</span> <span
  m='941400'>it's</span> <span m='941580'>a</span> <span
  m='941640'>bipartite</span> <span m='942540'>graph</span> <span
  m='942930'>because</span> <span m='943320'>every</span> <span
  m='943710'>edge</span> <span m='943980'>goes</span> <span
  m='944280'>from</span> <span m='944760'>this</span> <span
  m='945210'>part</span> <span m='945990'>over</span> <span m='946260'>to</span>
  <span m='946350'>this</span> <span m='946650'>park.</span> <span
  m='949230'>And</span> <span m='949470'>that's</span> <span m='949740'>a</span>
  <span m='949830'>failure.</span> </p><p><span m='951000'>And</span> <span
  m='951150'>the</span> <span m='951210'>reason</span> <span
  m='951690'>it's</span> <span m='951870'>a</span> <span
  m='951930'>failure</span> <span m='952500'>is</span> <span
  m='955860'>that</span> <span m='957960'>I</span> <span m='958140'>have</span>
  <span m='958500'>here</span> <span m='958860'>a</span> <span
  m='958950'>cycle.</span> <span m='959790'>If</span> <span m='959970'>I</span>
  <span m='960060'>go</span> <span m='960810'>across,</span> <span
  m='961530'>down,</span> <span m='962160'>across,</span> <span
  m='962910'>down,</span> <span m='963300'>I</span> <span m='963390'>come</span>
  <span m='963570'>back</span> <span m='963870'>where</span> <span
  m='963990'>I</span> <span m='964080'>started.</span> <span
  m='964560'>That</span> <span m='964740'>would</span> <span
  m='964920'>be</span> <span m='965070'>a</span> <span m='965130'>cycle</span>
  <span m='969720'>equals</span> <span m='970350'>failure.</span> </p><p><span
  m='976420'>Everybody</span> <span m='976840'>see</span> <span
  m='977170'>I</span> <span m='977260'>can't</span> <span m='977650'>give</span>
  <span m='977890'>these</span> <span m='978130'>four</span> <span
  m='978400'>numbers</span> <span m='979630'>generally.</span> <span
  m='982480'>Once</span> <span m='983020'>I've</span> <span
  m='983150'>given</span> <span m='983420'>you</span> <span
  m='983590'>three,</span> <span m='984040'>I</span> <span
  m='984130'>don't</span> <span m='984370'>have</span> <span
  m='984490'>any</span> <span m='984670'>freedom</span> <span
  m='985120'>left</span> <span m='985420'>with</span> <span
  m='985570'>that</span> <span m='985750'>fourth</span> <span
  m='986110'>one.</span> <span m='987170'>And</span> <span m='988050'>the</span>
  <span m='988400'>way</span> <span m='988610'>to</span> <span
  m='988720'>see</span> <span m='989020'>that</span> <span m='989290'>in</span>
  <span m='989410'>this</span> <span m='989680'>picture</span> <span
  m='990220'>is</span> <span m='991330'>that</span> <span
  m='992530'>there's</span> <span m='992800'>a</span> <span
  m='992860'>cycle.</span> </p><p><span m='993700'>So</span> <span
  m='993940'>here</span> <span m='994090'>is</span> <span m='994310'>the</span>
  <span m='994690'>combinatorics</span> <span m='995620'>thing</span> <span
  m='995890'>that</span> <span m='996520'>Professor</span> <span
  m='1000250'>Postnikov</span> <span m='1001020'>told</span> <span
  m='1001260'>me</span> <span m='1001410'>about</span> <span
  m='1001710'>last</span> <span m='1002070'>night.</span> <span
  m='1006120'>You</span> <span m='1006270'>can</span> <span
  m='1006450'>complete</span> <span m='1007380'>to</span> <span
  m='1007620'>a</span> <span m='1007680'>rank</span> <span m='1008040'>1</span>
  <span m='1008280'>matrix</span> <span m='1008910'>if</span> <span
  m='1009150'>and</span> <span m='1009300'>only</span> <span
  m='1009630'>if</span> <span m='1010290'>no</span> <span
  m='1010560'>cycles.</span> <span m='1012750'>So</span> <span
  m='1012990'>that</span> <span m='1016710'>just</span> <span
  m='1017130'>answered</span> <span m='1017490'>my</span> <span
  m='1017670'>question</span> <span m='1018180'>perfectly.</span> <span
  m='1019710'>This</span> <span m='1019980'>one</span> <span
  m='1020190'>is</span> <span m='1020370'>one</span> <span
  m='1020670'>where</span> <span m='1020820'>I</span> <span
  m='1020910'>can't</span> <span m='1021240'>complete,</span> <span
  m='1022020'>and</span> <span m='1022980'>it's</span> <span
  m='1023190'>got</span> <span m='1023430'>a</span> <span
  m='1023490'>cycle.</span> <span m='1024030'>A</span> <span
  m='1024540'>cycle</span> <span m='1024990'>meaning</span> <span
  m='1027060'>you</span> <span m='1027390'>come</span> <span
  m='1027630'>back</span> <span m='1027900'>to</span> <span
  m='1028050'>where</span> <span m='1028260'>you</span> <span
  m='1028380'>started.</span> </p><p><span m='1033190'>So</span> <span
  m='1033329'>my</span> <span m='1033480'>question</span> <span
  m='1033900'>to</span> <span m='1033990'>him</span> <span
  m='1035099'>was,</span> <span m='1038140'>can</span> <span
  m='1038380'>you</span> <span m='1038530'>always</span> <span
  m='1038920'>complete</span> <span m='1039290'>it</span> <span
  m='1039560'>if</span> <span m='1039760'>there</span> <span
  m='1039970'>are</span> <span m='1040030'>no</span> <span m='1040329'>2</span>
  <span m='1040464'>by</span> <span m='1040599'>2s</span> <span
  m='1040810'>in</span> <span m='1041410'>the</span> <span
  m='1041530'>way?</span> <span m='1044599'>And</span> <span
  m='1044900'>his</span> <span m='1045140'>answers</span> <span
  m='1045710'>told</span> <span m='1046069'>me</span> <span
  m='1047000'>that</span> <span m='1047240'>maybe</span> <span
  m='1047660'>the</span> <span m='1047839'>2</span> <span m='1048050'>by</span>
  <span m='1048260'>2s</span> <span m='1048890'>could</span> <span
  m='1049130'>be</span> <span m='1049310'>OK,</span> <span
  m='1049760'>but</span> <span m='1049940'>there</span> <span
  m='1050120'>could</span> <span m='1050330'>be</span> <span
  m='1050510'>a</span> <span m='1050600'>bigger</span> <span
  m='1050990'>cycle,</span> <span m='1051560'>a</span> <span
  m='1051650'>longer</span> <span m='1052160'>cycle</span> <span
  m='1052940'>that</span> <span m='1053120'>would</span> <span
  m='1053330'>screw</span> <span m='1053720'>you</span> <span
  m='1053900'>up.</span> <span m='1054200'>So</span> <span
  m='1054410'>let</span> <span m='1054590'>me</span> <span
  m='1055250'>close</span> <span m='1056150'>with</span> <span
  m='1057020'>an</span> <span m='1057170'>example</span> <span
  m='1057680'>of</span> <span m='1057800'>that</span> <span
  m='1058010'>sort.</span> </p><p><span m='1060590'>So</span> <span
  m='1060770'>this</span> <span m='1060980'>is</span> <span
  m='1061160'>going</span> <span m='1061370'>to</span> <span
  m='1061430'>be</span> <span m='1061580'>fail</span> <span
  m='1064190'>again.</span> <span m='1066230'>But</span> <span
  m='1067760'>no</span> <span m='1069200'>2</span> <span m='1069530'>by</span>
  <span m='1069800'>2</span> <span m='1070310'>is</span> <span
  m='1070490'>responsible.</span> <span m='1072470'>In</span> <span
  m='1072590'>other</span> <span m='1072740'>words,</span> <span
  m='1075210'>it's</span> <span m='1075290'>going</span> <span
  m='1075400'>to</span> <span m='1075530'>fail.</span> <span
  m='1075950'>I</span> <span m='1076040'>won't</span> <span
  m='1076250'>be</span> <span m='1076370'>able</span> <span
  m='1076580'>to</span> <span m='1076670'>complete</span> <span
  m='1077120'>this</span> <span m='1077360'>matrix,</span> <span
  m='1078680'>even</span> <span m='1079120'>though</span> <span
  m='1080120'>there</span> <span m='1080630'>aren't</span> <span
  m='1080900'>any</span> <span m='1081830'>completed</span> <span
  m='1082460'>2</span> <span m='1082730'>by</span> <span m='1082940'>2s.</span>
  <span m='1083810'>The</span> <span m='1084020'>2</span> <span
  m='1084530'>by</span> <span m='1084710'>2,</span> <span m='1085550'>I</span>
  <span m='1085670'>knew</span> <span m='1085880'>immediately</span> <span
  m='1086480'>was</span> <span m='1086690'>failure.</span> <span
  m='1087440'>So</span> <span m='1087680'>let</span> <span m='1087860'>me</span>
  <span m='1088010'>see</span> <span m='1088220'>if</span> <span
  m='1088340'>I</span> <span m='1088430'>can</span> <span m='1088610'>do</span>
  <span m='1088790'>that.</span> </p><p><span m='1091850'>So</span> <span
  m='1092060'>here's</span> <span m='1092420'>a</span> <span
  m='1092510'>failure.</span> <span m='1094880'>This</span> <span
  m='1095150'>is</span> <span m='1095300'>rows</span> <span
  m='1095840'>1,</span> <span m='1096210'>2,</span> <span m='1096540'>3,</span>
  <span m='1096850'>4.</span> <span m='1099440'>And</span> <span
  m='1099590'>this</span> <span m='1099860'>is</span> <span
  m='1100010'>columns</span> <span m='1100520'>1,</span> <span
  m='1100760'>2,</span> <span m='1100960'>3,</span> <span m='1101280'>4.</span>
  <span m='1102000'>And</span> <span m='1102140'>I</span> <span
  m='1102290'>think</span> <span m='1102560'>I'm</span> <span
  m='1102740'>going</span> <span m='1102900'>to</span> <span
  m='1102950'>have</span> <span m='1104670'>1</span> <span
  m='1104990'>given</span> <span m='1105290'>there.</span> <span
  m='1106790'>And</span> <span m='1107420'>I</span> <span
  m='1107870'>sort</span> <span m='1108110'>of</span> <span
  m='1108200'>started</span> <span m='1108590'>this</span> <span
  m='1108800'>before.</span> <span m='1109550'>And</span> <span
  m='1109700'>2</span> <span m='1110270'>goes</span> <span m='1110720'>to</span>
  <span m='1111350'>1</span> <span m='1112070'>and</span> <span
  m='1112460'>4.</span> <span m='1114290'>And</span> <span m='1114410'>3</span>
  <span m='1115100'>goes</span> <span m='1115640'>to</span> <span
  m='1117260'>4.</span> <span m='1120260'>And</span> <span m='1122480'>4</span>
  <span m='1122930'>goes</span> <span m='1123410'>to--</span> <span
  m='1125760'>let's</span> <span m='1126000'>see.</span> </p><p><span
  m='1129360'>OK,</span> <span m='1129840'>now,</span> <span
  m='1130110'>I've</span> <span m='1130260'>only</span> <span
  m='1130500'>put</span> <span m='1130770'>it</span> <span m='1130810'>in</span>
  <span m='1131190'>2,</span> <span m='1131490'>4,</span> <span
  m='1131520'>5.</span> <span m='1132150'>And</span> <span
  m='1132270'>I'm</span> <span m='1132450'>allowed</span> <span
  m='1132900'>seven.</span> <span m='1134680'>But</span> <span
  m='1134880'>I</span> <span m='1135000'>think</span> <span
  m='1135330'>I'm</span> <span m='1135540'>already</span> <span
  m='1136200'>in</span> <span m='1136380'>trouble</span> <span
  m='1136800'>here.</span> <span m='1137760'>So</span> <span
  m='1139380'>let</span> <span m='1139470'>me</span> <span
  m='1139620'>draw</span> <span m='1139950'>this</span> <span
  m='1140280'>picture</span> <span m='1140820'>for</span> <span
  m='1141060'>that.</span> </p><p><span m='1141570'>So</span> <span
  m='1141780'>this</span> <span m='1141990'>is</span> <span
  m='1142200'>rows</span> <span m='1143760'>1,</span> <span
  m='1144150'>2,</span> <span m='1144570'>3,</span> <span m='1144960'>4.</span>
  <span m='1146020'>And</span> <span m='1146130'>this</span> <span
  m='1146340'>is</span> <span m='1146610'>column</span> <span
  m='1148420'>1,</span> <span m='1148910'>2,</span> <span m='1149360'>3,</span>
  <span m='1149780'>4.</span> <span m='1150330'>And</span> <span
  m='1150480'>now,</span> <span m='1151080'>I've</span> <span
  m='1151860'>prescribed</span> <span m='1152550'>that</span> <span
  m='1152880'>one.</span> <span m='1156930'>Oh,</span> <span
  m='1157440'>no,</span> <span m='1157830'>that</span> <span
  m='1158040'>goes</span> <span m='1158370'>from--</span> <span
  m='1159300'>oh,</span> <span m='1159960'>I've</span> <span
  m='1160070'>forgotten</span> <span m='1160620'>the</span> <span
  m='1160710'>right</span> <span m='1160980'>way</span> <span
  m='1161160'>to</span> <span m='1161280'>do</span> <span m='1161460'>the</span>
  <span m='1161580'>picture.</span> <span m='1166340'>My</span> <span
  m='1166680'>bipartite</span> <span m='1167420'>graph</span> <span
  m='1167760'>wasn't</span> <span m='1169170'>what</span> <span
  m='1169320'>it</span> <span m='1169410'>should</span> <span
  m='1169650'>have</span> <span m='1169740'>been.</span> <span
  m='1170740'>So</span> <span m='1170980'>the</span> <span m='1174540'>1,</span>
  <span m='1174930'>2,</span> <span m='1175380'>3,</span> <span
  m='1175950'>4.</span> </p><p><span m='1176660'>OK,</span> <span
  m='1177160'>now</span> <span m='1177370'>I'm</span> <span
  m='1177460'>going</span> <span m='1177580'>to</span> <span
  m='1177670'>do</span> <span m='1177870'>the</span> <span
  m='1178900'>bipartite</span> <span m='1179740'>graph</span> <span
  m='1180160'>picture</span> <span m='1180640'>that</span> <span
  m='1180820'>goes</span> <span m='1181120'>with</span> <span
  m='1181300'>this</span> <span m='1181510'>picture.</span> <span
  m='1182170'>So</span> <span m='1182320'>1</span> <span m='1182680'>to</span>
  <span m='1182830'>1.</span> <span m='1184870'>2</span> <span
  m='1185170'>to</span> <span m='1185290'>1.</span> <span m='1188100'>2</span>
  <span m='1188490'>to</span> <span m='1188640'>4.</span> </p><p><span
  m='1190190'>But</span> <span m='1191100'>what</span> <span
  m='1191610'>I'm</span> <span m='1191760'>going</span> <span
  m='1191900'>to</span> <span m='1192000'>do--</span> <span
  m='1193500'>let</span> <span m='1193590'>me</span> <span
  m='1193710'>just</span> <span m='1193920'>say</span> <span
  m='1194250'>what</span> <span m='1194430'>I'm</span> <span
  m='1194580'>going</span> <span m='1194700'>to</span> <span
  m='1194820'>do.</span> <span m='1195660'>I'm</span> <span
  m='1195840'>going</span> <span m='1195950'>to</span> <span
  m='1196080'>create</span> <span m='1196620'>a</span> <span
  m='1196710'>cycle</span> <span m='1197340'>over</span> <span
  m='1197610'>here</span> <span m='1199100'>of</span> <span
  m='1199280'>length</span> <span m='1199610'>6.</span> <span
  m='1201370'>A</span> <span m='1201650'>cycle</span> <span
  m='1202100'>of</span> <span m='1202220'>length</span> <span
  m='1202490'>4</span> <span m='1202910'>is</span> <span m='1203060'>what</span>
  <span m='1203270'>I</span> <span m='1203360'>got</span> <span
  m='1203630'>from</span> <span m='1203870'>a</span> <span m='1203930'>2</span>
  <span m='1204140'>by</span> <span m='1204320'>2.</span> <span
  m='1206340'>From</span> <span m='1206570'>my</span> <span m='1206660'>2</span>
  <span m='1206870'>by</span> <span m='1207080'>2,</span> <span
  m='1207500'>that</span> <span m='1207770'>took</span> <span
  m='1208070'>me</span> <span m='1208850'>one</span> <span
  m='1210050'>way,</span> <span m='1210410'>back</span> <span
  m='1210860'>another,</span> <span m='1211280'>back</span> <span
  m='1211620'>another,</span> <span m='1211940'>back</span> <span
  m='1212190'>another.</span> <span m='1212560'>I</span> <span
  m='1212690'>completed</span> <span m='1213350'>a</span> <span
  m='1213410'>cycle.</span> <span m='1213920'>I</span> <span
  m='1214010'>came</span> <span m='1214250'>back</span> <span
  m='1214520'>to</span> <span m='1214640'>where</span> <span
  m='1214820'>I</span> <span m='1214910'>started</span> <span
  m='1215930'>with</span> <span m='1216170'>just</span> <span
  m='1216440'>four</span> <span m='1217160'>edges.</span> </p><p><span
  m='1218390'>Now,</span> <span m='1218660'>I</span> <span
  m='1218780'>want</span> <span m='1218960'>to</span> <span
  m='1219050'>complete</span> <span m='1221555'>a</span> <span
  m='1221810'>cycle</span> <span m='1222230'>with</span> <span
  m='1222410'>six</span> <span m='1222800'>edges.</span> <span
  m='1223740'>So</span> <span m='1224210'>let</span> <span m='1224360'>me</span>
  <span m='1225230'>draw</span> <span m='1225510'>it</span> <span
  m='1225590'>in</span> <span m='1225710'>the</span> <span
  m='1225770'>picture</span> <span m='1226040'>here.</span> <span
  m='1227000'>Now,</span> <span m='1227240'>I'm</span> <span
  m='1227390'>going</span> <span m='1227540'>to</span> <span
  m='1227630'>put</span> <span m='1227880'>an</span> <span
  m='1228080'>edge</span> <span m='1228860'>from</span> <span
  m='1229100'>4</span> <span m='1229490'>back</span> <span m='1229790'>to</span>
  <span m='1229940'>1.</span> <span m='1231410'>So</span> <span
  m='1233120'>1</span> <span m='1233570'>to</span> <span m='1234020'>1,</span>
  <span m='1236270'>1</span> <span m='1237230'>to</span> <span
  m='1237410'>4,</span> <span m='1240320'>2</span> <span m='1240650'>to</span>
  <span m='1240800'>1,</span> <span m='1241520'>2</span> <span
  m='1241880'>to</span> <span m='1242030'>4.</span> </p><p><span
  m='1244550'>Have</span> <span m='1244700'>I</span> <span
  m='1244820'>got</span> <span m='1245060'>any--</span> <span
  m='1245930'>I</span> <span m='1245990'>think</span> <span
  m='1247130'>1,</span> <span m='1247620'>2,</span> <span m='1247905'>ah,</span>
  <span m='1248600'>damn.</span> <span m='1251660'>I</span> <span
  m='1251810'>didn't</span> <span m='1252050'>want</span> <span
  m='1252290'>a</span> <span m='1252350'>short</span> <span
  m='1252770'>cycle.</span> <span m='1253280'>I</span> <span
  m='1253370'>want</span> <span m='1253610'>a</span> <span
  m='1253760'>bigger,</span> <span m='1254210'>longer</span> <span
  m='1254720'>cycle.</span> <span m='1255740'>Let</span> <span
  m='1255860'>me</span> <span m='1256010'>get</span> <span
  m='1256370'>the</span> <span m='1256550'>darn</span> <span
  m='1256880'>thing</span> <span m='1257090'>here.</span> </p><p><span
  m='1257690'>So</span> <span m='1258290'>2</span> <span m='1258530'>to</span>
  <span m='1258650'>4</span> <span m='1259690'>is</span> <span
  m='1259850'>not</span> <span m='1260090'>what</span> <span
  m='1260270'>I</span> <span m='1260360'>want.</span> <span
  m='1261140'>So</span> <span m='1261390'>I</span> <span
  m='1261650'>start</span> <span m='1262060'>a</span> <span
  m='1262100'>cycle.</span> <span m='1262630'>OK,</span> <span
  m='1263390'>go</span> <span m='1263780'>somewhere.</span> <span
  m='1264500'>Go</span> <span m='1264740'>back.</span> <span
  m='1265460'>Go</span> <span m='1265670'>somewhere.</span> <span
  m='1266270'>Go</span> <span m='1266480'>back.</span> <span
  m='1267380'>Go</span> <span m='1267620'>somewhere.</span> <span
  m='1268610'>Go</span> <span m='1268790'>back.</span> <span
  m='1269300'>Now,</span> <span m='1269570'>there</span> <span
  m='1269870'>I</span> <span m='1269960'>got</span> <span m='1270170'>it.</span>
  <span m='1270970'>Length</span> <span m='1271280'>six.</span> <span
  m='1272340'>Length</span> <span m='1272600'>six.</span> </p><p><span
  m='1273030'>So</span> <span m='1273440'>let</span> <span m='1273590'>me</span>
  <span m='1273740'>put</span> <span m='1273920'>the</span> <span
  m='1274130'>x's</span> <span m='1274580'>in</span> <span
  m='1274760'>where</span> <span m='1274970'>they</span> <span
  m='1275120'>belong.</span> <span m='1276180'>So</span> <span
  m='1276260'>1</span> <span m='1276590'>is</span> <span
  m='1276800'>connected</span> <span m='1277310'>to</span> <span
  m='1277460'>1</span> <span m='1277730'>and</span> <span m='1277880'>4.</span>
  <span m='1278240'>That's</span> <span m='1278510'>right.</span> <span
  m='1279200'>2</span> <span m='1279470'>is</span> <span
  m='1279650'>connected</span> <span m='1280130'>to</span> <span
  m='1280310'>2</span> <span m='1280730'>and</span> <span m='1280940'>4.</span>
  <span m='1285810'>3</span> <span m='1287520'>is</span> <span
  m='1287670'>not</span> <span m='1287850'>connected</span> <span
  m='1288300'>to</span> <span m='1288450'>anybody.</span> <span
  m='1288920'>Let's</span> <span m='1289440'>put</span> <span
  m='1290190'>that</span> <span m='1290400'>one</span> <span
  m='1290640'>in.</span> <span m='1291690'>And</span> <span m='1291900'>4</span>
  <span m='1292320'>is</span> <span m='1292500'>connected</span> <span
  m='1293050'>to</span> <span m='1293190'>1</span> <span m='1293610'>and</span>
  <span m='1293820'>2.</span> <span m='1294910'>4</span> <span
  m='1295230'>is</span> <span m='1295380'>connected</span> <span
  m='1295890'>to</span> <span m='1295950'>1</span> <span m='1296310'>and</span>
  <span m='1296520'>2.</span> <span m='1297090'>OK,</span> <span
  m='1298140'>I</span> <span m='1298260'>believe</span> <span
  m='1301260'>that</span> <span m='1301770'>picture</span> <span
  m='1302370'>goes</span> <span m='1302760'>with</span> <span
  m='1303030'>that</span> <span m='1303360'>picture.</span> </p><p><span
  m='1305280'>Now,</span> <span m='1305610'>my</span> <span
  m='1305850'>claim</span> <span m='1306270'>is</span> <span
  m='1306630'>that</span> <span m='1306810'>there</span> <span
  m='1307020'>are</span> <span m='1307140'>no</span> <span
  m='1309780'>there</span> <span m='1310370'>is</span> <span
  m='1310500'>no</span> <span m='1311160'>2</span> <span m='1311400'>by</span>
  <span m='1311580'>2</span> <span m='1312990'>in</span> <span
  m='1313380'>here</span> <span m='1313670'>that</span> <span
  m='1313810'>shows</span> <span m='1314220'>me</span> <span
  m='1314400'>immediately</span> <span m='1315210'>failure.</span> <span
  m='1317260'>But</span> <span m='1318310'>I</span> <span
  m='1318430'>will</span> <span m='1318730'>fail--</span> <span
  m='1319360'>I</span> <span m='1319480'>can't</span> <span
  m='1320350'>live</span> <span m='1320590'>with</span> <span
  m='1321790'>those--</span> <span m='1322420'>that</span> <span
  m='1322660'>looks</span> <span m='1322900'>like</span> <span
  m='1323160'>eight.</span> <span m='1324520'>Sorry,</span> <span
  m='1327250'>I</span> <span m='1327400'>only</span> <span
  m='1327610'>want</span> <span m='1327910'>seven.</span> <span
  m='1330980'>So</span> <span m='1331730'>shall</span> <span
  m='1332050'>I</span> <span m='1332150'>just</span> <span
  m='1332390'>take--</span> <span m='1332990'>sorry?</span> </p><p><span
  m='1334264'>AUDIENCE:</span> <span m='1334507'>You've</span> <span
  m='1334751'>got</span> <span m='1335238'>3,</span> <span m='1335725'>4</span>
  <span m='1336212'>in</span> <span m='1336455'>the</span> <span
  m='1336699'>wrong</span> <span m='1337186'>spot.</span> </p><p><span
  m='1338160'>GILBERT STRANG:</span> <span m='1338355'>3,</span> <span
  m='1338550'>4,</span> <span m='1338940'>and</span> <span m='1339080'>it</span>
  <span m='1339210'>shouldn't</span> <span m='1339540'>be</span> <span
  m='1339720'>there.</span> <span m='1340120'>All</span> <span
  m='1340170'>right,</span> <span m='1340350'>OK,</span> <span
  m='1340710'>thanks.</span> <span m='1343130'>Right.</span> <span
  m='1344270'>You</span> <span m='1344420'>see</span> <span
  m='1344630'>I'm</span> <span m='1344810'>not</span> <span m='1345110'>a</span>
  <span m='1345170'>combinatorics</span> <span m='1346040'>person.</span> <span
  m='1346400'>But</span> <span m='1346580'>it's</span> <span
  m='1346730'>so</span> <span m='1347030'>beautiful</span> <span
  m='1348350'>to</span> <span m='1348800'>have</span> <span
  m='1349070'>the</span> <span m='1349250'>inspiration</span> <span
  m='1350450'>to</span> <span m='1350600'>convert</span> <span
  m='1351080'>that</span> <span m='1351350'>picture</span> <span
  m='1352460'>to</span> <span m='1352640'>this</span> <span
  m='1352940'>picture</span> <span m='1353930'>and</span> <span
  m='1354050'>then</span> <span m='1354260'>realize</span> <span
  m='1355220'>that</span> <span m='1356330'>a</span> <span
  m='1356390'>problem</span> <span m='1356960'>in</span> <span
  m='1357080'>this</span> <span m='1357350'>picture</span> <span
  m='1358410'>is</span> <span m='1358640'>a</span> <span
  m='1358730'>cycle</span> <span m='1359570'>in</span> <span
  m='1359750'>this</span> <span m='1359990'>picture.</span> <span
  m='1360650'>That's</span> <span m='1360950'>the</span> <span
  m='1361040'>whole</span> <span m='1361250'>message.</span> </p><p><span
  m='1362360'>That's</span> <span m='1362610'>the</span> <span
  m='1362690'>whole</span> <span m='1362900'>message,</span> <span
  m='1364550'>that</span> <span m='1364850'>when</span> <span
  m='1365060'>I'm</span> <span m='1365210'>looking</span> <span
  m='1365510'>here</span> <span m='1366230'>a</span> <span
  m='1366290'>cycle</span> <span m='1366860'>means</span> <span
  m='1367760'>that</span> <span m='1367970'>I've</span> <span
  m='1369170'>built</span> <span m='1369770'>in</span> <span
  m='1370070'>a</span> <span m='1370190'>requirement,</span> <span
  m='1371460'>which</span> <span m='1372320'>random</span> <span
  m='1372830'>non-zeros</span> <span m='1373580'>won't</span> <span
  m='1373820'>satisfy.</span> <span m='1374780'>So</span> <span
  m='1375020'>you</span> <span m='1375200'>see</span> <span
  m='1375470'>that</span> <span m='1375740'>anyway.</span> <span
  m='1376130'>You</span> <span m='1376250'>see</span> <span
  m='1376520'>the</span> <span m='1376700'>cycle,</span> <span
  m='1378000'>1,</span> <span m='1378500'>2,</span> <span m='1381000'>3,</span>
  <span m='1382000'>4,</span> <span m='1382500'>5,</span> <span
  m='1383000'>6,</span> <span m='1384440'>yeah.</span> <span
  m='1385580'>So</span> <span m='1386090'>there's</span> <span
  m='1386390'>a</span> <span m='1386450'>cycle</span> <span
  m='1386960'>there.</span> </p><p><span m='1387710'>So</span> <span
  m='1387920'>somehow</span> <span m='1389300'>those</span> <span
  m='1389660'>six</span> <span m='1390290'>x's,</span> <span
  m='1392120'>whichever</span> <span m='1392600'>they</span> <span
  m='1392810'>are--</span> <span m='1393320'>I</span> <span
  m='1393380'>guess</span> <span m='1394250'>all</span> <span
  m='1394490'>but</span> <span m='1394670'>the</span> <span m='1394820'>3</span>
  <span m='1395120'>by</span> <span m='1395840'>3.</span> <span
  m='1396140'>So</span> <span m='1396320'>I</span> <span
  m='1396440'>could</span> <span m='1396620'>take</span> <span
  m='1398030'>away</span> <span m='1399020'>this</span> <span
  m='1399290'>part</span> <span m='1399590'>of</span> <span
  m='1399650'>the</span> <span m='1399740'>graph</span> <span
  m='1401030'>and</span> <span m='1401150'>just</span> <span
  m='1401480'>have</span> <span m='1401840'>3</span> <span
  m='1402590'>and</span> <span m='1402830'>3,</span> <span
  m='1403730'>and</span> <span m='1404810'>there</span> <span
  m='1405140'>would</span> <span m='1405290'>be</span> <span
  m='1405500'>6</span> <span m='1405920'>numbers</span> <span
  m='1406400'>in</span> <span m='1406550'>there</span> <span
  m='1406820'>and</span> <span m='1406910'>that's</span> <span
  m='1407210'>too</span> <span m='1407420'>many.</span> </p><p><span
  m='1409540'>OK,</span> <span m='1410060'>I'm</span> <span
  m='1410210'>going</span> <span m='1410330'>to</span> <span
  m='1410420'>stop</span> <span m='1410720'>there</span> <span
  m='1412640'>exactly</span> <span m='1413210'>half</span> <span
  m='1413400'>way</span> <span m='1413660'>through</span> <span
  m='1413960'>that</span> <span m='1414110'>class.</span> <span
  m='1417050'>Well,</span> <span m='1417320'>I'm</span> <span
  m='1417410'>going</span> <span m='1417530'>to</span> <span
  m='1417620'>stop</span> <span m='1417920'>there</span> <span
  m='1418130'>with</span> <span m='1418340'>a</span> <span
  m='1418400'>question,</span> <span m='1419450'>which</span> <span
  m='1419780'>I</span> <span m='1419900'>don't</span> <span
  m='1420080'>know</span> <span m='1420650'>if</span> <span m='1420740'>I</span>
  <span m='1420890'>dare</span> <span m='1422180'>send</span> <span
  m='1422510'>another</span> <span m='1422900'>question</span> <span
  m='1423295'>to</span> <span m='1423690'>Professor</span> <span
  m='1424100'>Postnikov,</span> <span m='1424790'>who</span> <span
  m='1424910'>answered</span> <span m='1425240'>this</span> <span
  m='1425450'>one</span> <span m='1425600'>perfectly.</span> <span
  m='1426830'>But</span> <span m='1427490'>my</span> <span
  m='1427670'>question</span> <span m='1428150'>would</span> <span
  m='1428330'>be,</span> <span m='1429230'>when</span> <span
  m='1429560'>could</span> <span m='1429800'>you</span> <span
  m='1429950'>complete</span> <span m='1430670'>a</span> <span
  m='1430730'>rank</span> <span m='1431060'>2</span> <span
  m='1431390'>matrix?</span> <span m='1432920'>What</span> <span
  m='1433850'>positions</span> <span m='1434510'>could</span> <span
  m='1434720'>you</span> <span m='1434870'>fill</span> <span
  m='1435200'>in</span> <span m='1436040'>and</span> <span m='1436220'>be</span>
  <span m='1436400'>able</span> <span m='1436730'>to</span> <span
  m='1436970'>reach</span> <span m='1437450'>rank</span> <span
  m='1437780'>2?</span> </p><p><span m='1438920'>That</span> <span
  m='1439280'>would</span> <span m='1439520'>be</span> <span
  m='1440270'>trouble,</span> <span m='1441380'>right?</span> <span
  m='1441860'>I</span> <span m='1441980'>don't</span> <span
  m='1442130'>know</span> <span m='1442310'>where</span> <span
  m='1442700'>we</span> <span m='1442910'>would</span> <span
  m='1443090'>go</span> <span m='1443300'>with</span> <span
  m='1443510'>that.</span> <span m='1445850'>But</span> <span
  m='1446720'>for</span> <span m='1446930'>us,</span> <span
  m='1447350'>for</span> <span m='1447590'>18.065,</span> <span
  m='1448550'>that's</span> <span m='1448880'>the</span> <span
  m='1448970'>natural</span> <span m='1449420'>question.</span> <span
  m='1451670'>Rank</span> <span m='1452000'>1</span> <span m='1452240'>is</span>
  <span m='1453020'>super</span> <span m='1453440'>special</span> <span
  m='1453950'>for</span> <span m='1454190'>us.</span> <span
  m='1454460'>And</span> <span m='1454640'>rank</span> <span
  m='1454940'>2</span> <span m='1456160'>or</span> <span m='1456320'>rank</span>
  <span m='1457130'>R</span> <span m='1457520'>would</span> <span
  m='1457730'>be</span> <span m='1457970'>the</span> <span
  m='1458120'>general</span> <span m='1458570'>case.</span> <span
  m='1461330'>So</span> <span m='1461540'>they're</span> <span
  m='1462200'>good</span> <span m='1462440'>math</span> <span
  m='1462740'>questions.</span> </p><p><span m='1463510'>Now,</span> <span
  m='1465320'>topic</span> <span m='1465740'>2,</span> <span
  m='1468530'>convolution.</span> <span m='1472500'>So</span> <span
  m='1472580'>the</span> <span m='1472720'>first</span> <span
  m='1475840'>lab</span> <span m='1476260'>in</span> <span
  m='1476380'>the</span> <span m='1476470'>course</span> <span
  m='1478210'>just</span> <span m='1478450'>happened</span> <span
  m='1478810'>to</span> <span m='1478900'>have</span> <span m='1479170'>a</span>
  <span m='1479800'>convolution</span> <span m='1480670'>and</span> <span
  m='1480820'>used</span> <span m='1481150'>that</span> <span
  m='1481390'>word</span> <span m='1481810'>and</span> <span
  m='1481960'>so</span> <span m='1482200'>on.</span> <span
  m='1489590'>But</span> <span m='1489790'>we</span> <span
  m='1489940'>didn't</span> <span m='1491320'>connect</span> <span
  m='1491740'>that</span> <span m='1491950'>with</span> <span
  m='1492190'>the</span> <span m='1492280'>lectures.</span> <span
  m='1493030'>So</span> <span m='1493270'>now,</span> <span
  m='1493540'>I'd</span> <span m='1493720'>like</span> <span
  m='1493960'>to</span> <span m='1494110'>talk</span> <span
  m='1494410'>about</span> <span m='1494680'>convolutions,</span> <span
  m='1496150'>which</span> <span m='1496390'>are</span> <span
  m='1496630'>extremely</span> <span m='1497890'>important.</span> </p><p><span
  m='1499360'>And</span> <span m='1499540'>they</span> <span
  m='1499940'>are</span> <span m='1500080'>important</span> <span
  m='1500500'>in</span> <span m='1500590'>machine</span> <span
  m='1501040'>learning</span> <span m='1503440'>because</span> <span
  m='1504790'>they</span> <span m='1505180'>give</span> <span
  m='1505510'>you</span> <span m='1505780'>a</span> <span m='1505870'>set</span>
  <span m='1506320'>of</span> <span m='1508810'>weights</span> <span
  m='1511750'>connecting--</span> <span m='1516060'>they're</span> <span
  m='1516310'>an</span> <span m='1516430'>efficient</span> <span
  m='1516970'>way</span> <span m='1517540'>to--</span> <span
  m='1518800'>let</span> <span m='1518950'>me</span> <span
  m='1519040'>show</span> <span m='1519280'>you.</span> <span
  m='1519760'>Let</span> <span m='1519910'>me</span> <span
  m='1520060'>show</span> <span m='1520280'>you.</span> </p><p><span
  m='1521600'>So</span> <span m='1522250'>a</span> <span
  m='1522400'>convolution</span> <span m='1523180'>matrix--</span> <span
  m='1530880'>and</span> <span m='1531270'>this</span> <span
  m='1531540'>will</span> <span m='1531720'>be</span> <span m='1532110'>a</span>
  <span m='1532860'>cyclic</span> <span m='1533940'>convolution</span> <span
  m='1534720'>matrix.</span> <span m='1536760'>And</span> <span
  m='1536790'>the</span> <span m='1540460'>shorthand</span> <span
  m='1541180'>for</span> <span m='1542230'>cyclic</span> <span
  m='1542620'>convolution</span> <span m='1543460'>matrix</span> <span
  m='1544030'>is</span> <span m='1544180'>circulant.</span> <span
  m='1544940'>So</span> <span m='1545020'>what</span> <span
  m='1545110'>does</span> <span m='1545200'>a</span> <span
  m='1545350'>circulant</span> <span m='1545440'>look</span> <span
  m='1545725'>like?</span> <span m='1546280'>I'll</span> <span
  m='1546550'>call</span> <span m='1546790'>it</span> <span
  m='1546940'>C.</span> </p><p><span m='1548990'>A</span> <span
  m='1549250'>circulant</span> <span m='1551800'>has</span> <span
  m='1552040'>constant</span> <span m='1552520'>diagonals.</span> <span
  m='1554140'>That's</span> <span m='1554320'>what</span> <span
  m='1554500'>convolution</span> <span m='1555280'>means</span> <span
  m='1555910'>matrix</span> <span m='1556480'>wise.</span> <span
  m='1557080'>Convolution</span> <span m='1557890'>means</span> <span
  m='1559120'>constant</span> <span m='1561940'>down</span> <span
  m='1562300'>each</span> <span m='1562570'>diagonal.</span> <span
  m='1573550'>And</span> <span m='1573730'>cyclic</span> <span
  m='1574300'>means</span> <span m='1575740'>complete,</span> <span
  m='1577510'>circle</span> <span m='1577960'>around</span> <span
  m='1578320'>again.</span> <span m='1579640'>The</span> <span
  m='1579730'>diagonals</span> <span m='1586570'>circle</span> <span
  m='1587110'>around.</span> <span m='1587560'>So</span> <span
  m='1587950'>I'll</span> <span m='1588100'>just</span> <span
  m='1588340'>show</span> <span m='1588610'>you</span> <span
  m='1588760'>what</span> <span m='1588910'>I</span> <span
  m='1589000'>mean.</span> </p><p><span m='1594380'>So</span> <span
  m='1594820'>4</span> <span m='1595090'>by</span> <span m='1595270'>4,</span>
  <span m='1595540'>let's</span> <span m='1595750'>say.</span> <span
  m='1596500'>So</span> <span m='1596710'>it</span> <span m='1596800'>has</span>
  <span m='1597010'>some</span> <span m='1597400'>entry</span> <span
  m='1597880'>to--</span> <span m='1598480'>there's</span> <span
  m='1598810'>one</span> <span m='1599050'>diagonal.</span> <span
  m='1601010'>Here</span> <span m='1601200'>is</span> <span
  m='1601330'>another</span> <span m='1601720'>diagonal.</span> <span
  m='1605370'>So</span> <span m='1605550'>now</span> <span m='1605820'>I</span>
  <span m='1606240'>have</span> <span m='1606360'>constant</span> <span
  m='1606870'>diagonals.</span> <span m='1608130'>But</span> <span
  m='1608340'>if</span> <span m='1608460'>it's</span> <span
  m='1608610'>going</span> <span m='1608710'>to</span> <span
  m='1608850'>be</span> <span m='1609000'>a</span> <span
  m='1609090'>circulant</span> <span m='1609750'>matrix--</span> <span
  m='1610440'>and</span> <span m='1610830'>this</span> <span
  m='1611100'>is</span> <span m='1611250'>the</span> <span
  m='1611340'>best</span> <span m='1612300'>family</span> <span
  m='1612690'>of</span> <span m='1612780'>matrices</span> <span
  m='1613470'>in</span> <span m='1613590'>the</span> <span
  m='1613680'>world.</span> <span m='1615810'>The</span> <span
  m='1616050'>algebra</span> <span m='1616620'>is</span> <span
  m='1616800'>just</span> <span m='1617820'>terrific</span> <span
  m='1618390'>for</span> <span m='1618540'>these</span> <span
  m='1618780'>matrices.</span> <span m='1619500'>And</span> <span
  m='1619590'>that's</span> <span m='1619890'>why</span> <span
  m='1620190'>they're</span> <span m='1620460'>the</span> <span
  m='1621450'>heart</span> <span m='1621840'>of</span> <span
  m='1622020'>signal</span> <span m='1622410'>processing.</span> </p><p><span
  m='1624130'>So</span> <span m='1624810'>this</span> <span
  m='1625020'>is</span> <span m='1625170'>a</span> <span
  m='1625260'>constant</span> <span m='1625740'>diagonal</span> <span
  m='1626280'>matrix.</span> <span m='1626820'>But</span> <span
  m='1627000'>it's</span> <span m='1627210'>not</span> <span
  m='1627540'>yet</span> <span m='1627660'>a</span> <span
  m='1627870'>circulant.</span> <span m='1628980'>That</span> <span
  m='1629310'>diagonal</span> <span m='1630030'>circles</span> <span
  m='1630660'>around</span> <span m='1634010'>to</span> <span
  m='1634140'>be</span> <span m='1634380'>completed.</span> <span
  m='1635040'>Every</span> <span m='1635280'>diagonal</span> <span
  m='1635790'>has</span> <span m='1635970'>four</span> <span
  m='1636360'>entries</span> <span m='1636840'>here.</span> </p><p><span
  m='1638050'>So</span> <span m='1638400'>let</span> <span m='1638550'>me</span>
  <span m='1638730'>take</span> <span m='1639030'>another</span> <span
  m='1639390'>one,</span> <span m='1640590'>say</span> <span
  m='1641220'>1,</span> <span m='1641880'>1.</span> <span
  m='1642840'>Then</span> <span m='1643020'>that</span> <span
  m='1643230'>would</span> <span m='1643410'>circle</span> <span
  m='1643830'>around</span> <span m='1644200'>to</span> <span
  m='1644320'>1,</span> <span m='1644700'>1.</span> <span m='1645660'>And</span>
  <span m='1645900'>this</span> <span m='1646170'>guy</span> <span
  m='1646470'>could</span> <span m='1646680'>be</span> <span
  m='1646890'>0.</span> <span m='1650190'>There's</span> <span
  m='1650490'>a</span> <span m='1650580'>circulant</span> <span
  m='1651120'>matrix.</span> </p><p><span m='1654540'>Do</span> <span
  m='1654900'>you</span> <span m='1654990'>understand</span> <span
  m='1655590'>then</span> <span m='1655860'>what</span> <span
  m='1658520'>the</span> <span m='1658880'>entry--</span> <span
  m='1659760'>you</span> <span m='1660000'>only</span> <span
  m='1660330'>need</span> <span m='1660570'>four</span> <span
  m='1660870'>numbers,</span> <span m='1663260'>say</span> <span
  m='1663510'>the</span> <span m='1663630'>first</span> <span
  m='1663930'>column.</span> <span m='1664350'>If</span> <span
  m='1664950'>you</span> <span m='1665040'>prescribe</span> <span
  m='1665550'>the</span> <span m='1665640'>first</span> <span
  m='1665970'>column</span> <span m='1666330'>of</span> <span
  m='1666480'>a</span> <span m='1666540'>circulant</span> <span
  m='1667050'>matrix,</span> <span m='1668190'>then</span> <span
  m='1668460'>you've</span> <span m='1668610'>told</span> <span
  m='1668940'>Matlab,</span> <span m='1669420'>for</span> <span
  m='1669600'>example,</span> <span m='1670780'>all</span> <span
  m='1671040'>it</span> <span m='1671130'>needs</span> <span
  m='1671490'>to</span> <span m='1671640'>know.</span> <span
  m='1672420'>If</span> <span m='1672570'>you</span> <span
  m='1672660'>tell</span> <span m='1672890'>it</span> <span
  m='1673020'>one</span> <span m='1673260'>column,</span> <span
  m='1674440'>it</span> <span m='1674490'>can</span> <span
  m='1674760'>get</span> <span m='1675000'>all</span> <span
  m='1675180'>the</span> <span m='1675300'>other</span> <span
  m='1675540'>columns</span> <span m='1676050'>just</span> <span
  m='1676290'>by</span> <span m='1676680'>cyclic</span> <span
  m='1677460'>shift.</span> </p><p><span m='1678320'>There's</span> <span
  m='1678570'>the</span> <span m='1678660'>first</span> <span
  m='1678990'>column,</span> <span m='1679740'>2,</span> <span
  m='1680060'>0,</span> <span m='1680490'>1,</span> <span m='1680820'>5.</span>
  <span m='1681720'>The</span> <span m='1681840'>second</span> <span
  m='1682230'>column</span> <span m='1682680'>is</span> <span
  m='1682830'>2,</span> <span m='1683130'>0,</span> <span m='1683520'>1,</span>
  <span m='1683880'>5</span> <span m='1684960'>shifted</span> <span
  m='1685380'>down</span> <span m='1685740'>by</span> <span
  m='1685950'>one.</span> <span m='1686880'>The</span> <span
  m='1687000'>next</span> <span m='1687510'>column</span> <span
  m='1687900'>is</span> <span m='1688150'>again</span> <span
  m='1688440'>shifted</span> <span m='1688860'>down</span> <span
  m='1689160'>by</span> <span m='1689310'>one,</span> <span
  m='1689580'>2,</span> <span m='1689940'>0,</span> <span m='1690330'>1,</span>
  <span m='1690630'>5.</span> <span m='1691590'>And</span> <span
  m='1691740'>the</span> <span m='1691830'>last</span> <span
  m='1692220'>column</span> <span m='1692610'>is</span> <span
  m='1692760'>2,</span> <span m='1693210'>0,</span> <span m='1693570'>1,</span>
  <span m='1693900'>5.</span> <span m='1694680'>So</span> <span
  m='1694890'>they're</span> <span m='1695070'>all</span> <span
  m='1695310'>the</span> <span m='1695460'>same</span> <span
  m='1695880'>columns</span> <span m='1699000'>after</span> <span
  m='1699480'>a</span> <span m='1699660'>cyclic</span> <span
  m='1700350'>shift.</span> </p><p><span m='1701790'>So</span> <span
  m='1702000'>the</span> <span m='1702150'>key</span> <span
  m='1702390'>matrix</span> <span m='1702990'>in</span> <span
  m='1703140'>this</span> <span m='1704280'>is</span> <span
  m='1704520'>really</span> <span m='1705980'>a</span> <span
  m='1706050'>cyclic</span> <span m='1706590'>shift</span> <span
  m='1707070'>matrix.</span> <span m='1707610'>Say</span> <span
  m='1708100'>0,</span> <span m='1709890'>1,</span> <span m='1710550'>0,</span>
  <span m='1711484'>0,</span> <span m='1712418'>0,</span> <span
  m='1712885'>0--</span> <span m='1713352'>so</span> <span m='1713820'>it</span>
  <span m='1713910'>just</span> <span m='1714170'>has</span> <span
  m='1714690'>one</span> <span m='1715050'>non-zero</span> <span
  m='1715860'>diagonal.</span> <span m='1717540'>And</span> <span
  m='1717690'>then</span> <span m='1718830'>it's</span> <span
  m='1719010'>cyclic.</span> </p><p><span m='1723370'>Do</span> <span
  m='1723460'>you</span> <span m='1723580'>see</span> <span
  m='1723790'>that</span> <span m='1723970'>in</span> <span
  m='1724120'>fact</span> <span m='1724810'>this</span> <span
  m='1725050'>matrix</span> <span m='1725560'>C,</span> <span
  m='1728050'>I</span> <span m='1728200'>can</span> <span
  m='1728620'>produce</span> <span m='1729100'>this</span> <span
  m='1729310'>matrix</span> <span m='1729790'>C</span> <span
  m='1730120'>from</span> <span m='1730780'>P</span> <span
  m='1731440'>and</span> <span m='1731650'>P</span> <span
  m='1731920'>squared?</span> <span m='1734380'>What</span> <span
  m='1734770'>would</span> <span m='1734920'>P</span> <span
  m='1735190'>squared</span> <span m='1735640'>be?</span> <span
  m='1738860'>And</span> <span m='1739330'>I'll</span> <span
  m='1739420'>write</span> <span m='1739690'>it</span> <span
  m='1739780'>here</span> <span m='1740200'>without</span> <span
  m='1743370'>while</span> <span m='1743590'>keeping</span> <span
  m='1743950'>our</span> <span m='1744100'>eye</span> <span
  m='1744250'>on</span> <span m='1744400'>P.</span> </p><p><span
  m='1745030'>So</span> <span m='1745210'>if</span> <span m='1745330'>I</span>
  <span m='1745450'>square</span> <span m='1745840'>that</span> <span
  m='1746080'>matrix,</span> <span m='1746750'>what</span> <span
  m='1747340'>matrix</span> <span m='1747850'>would</span> <span
  m='1748030'>I</span> <span m='1748150'>get?</span> <span m='1750160'>So</span>
  <span m='1750700'>this</span> <span m='1751060'>is</span> <span
  m='1751240'>a</span> <span m='1751330'>shift</span> <span
  m='1751780'>by</span> <span m='1752050'>one.</span> <span
  m='1753820'>If</span> <span m='1754030'>I</span> <span
  m='1754210'>shift</span> <span m='1754540'>by</span> <span
  m='1754750'>one</span> <span m='1755020'>again,</span> <span
  m='1755500'>that's</span> <span m='1755860'>multiplying</span> <span
  m='1756400'>it</span> <span m='1756440'>again</span> <span
  m='1756790'>by</span> <span m='1757060'>P.</span> <span m='1757540'>So</span>
  <span m='1757750'>that</span> <span m='1757930'>would</span> <span
  m='1758050'>give</span> <span m='1758200'>me</span> <span m='1758380'>P</span>
  <span m='1758680'>squared.</span> <span m='1759790'>What</span> <span
  m='1760270'>what's</span> <span m='1760810'>in</span> <span
  m='1760990'>the--</span> <span m='1765260'>OK,</span> <span
  m='1766520'>so</span> <span m='1767630'>what</span> <span
  m='1767870'>happens</span> <span m='1768350'>now?</span> <span
  m='1770540'>It's</span> <span m='1770870'>a</span> <span
  m='1770940'>shift</span> <span m='1771510'>by</span> <span
  m='1771870'>two</span> <span m='1772560'>I</span> <span
  m='1772710'>guess.</span> </p><p><span m='1774390'>So</span> <span
  m='1774660'>this</span> <span m='1774930'>will</span> <span
  m='1775020'>be</span> <span m='1775230'>0,</span> <span m='1775780'>0,</span>
  <span m='1776180'>1,</span> <span m='1776760'>0.</span> <span
  m='1777744'>This</span> <span m='1777990'>will</span> <span
  m='1778236'>be</span> <span m='1778728'>0,</span> <span m='1779220'>0,</span>
  <span m='1779712'>0,</span> <span m='1780210'>1.</span> <span
  m='1780740'>Then</span> <span m='1781120'>it's</span> <span
  m='1781640'>cyclic</span> <span m='1782140'>still.</span> <span
  m='1783090'>So</span> <span m='1783350'>I'll</span> <span
  m='1783990'>put</span> <span m='1784240'>in</span> <span
  m='1784350'>the</span> <span m='1784440'>1s</span> <span
  m='1784880'>there</span> <span m='1785160'>and</span> <span
  m='1785310'>then</span> <span m='1785520'>just</span> <span
  m='1785820'>fill</span> <span m='1786120'>in</span> <span
  m='1786340'>the</span> <span m='1786430'>0s.</span> <span
  m='1792660'>So</span> <span m='1792840'>P</span> <span
  m='1793110'>squared,</span> <span m='1793620'>shift</span> <span
  m='1793950'>by</span> <span m='1794160'>two.</span> <span
  m='1795700'>You</span> <span m='1795840'>start</span> <span
  m='1796170'>out</span> <span m='1796350'>with</span> <span
  m='1796590'>this</span> <span m='1796920'>one.</span> </p><p><span
  m='1801590'>Is</span> <span m='1801680'>that</span> <span
  m='1801830'>right?</span> <span m='1804000'>Yes.</span> <span
  m='1804780'>Yes.</span> <span m='1805290'>OK.</span> <span
  m='1806280'>OK.</span> </p><p><span m='1806850'>Yeah,</span> <span
  m='1807450'>let's</span> <span m='1807720'>just</span> <span
  m='1808770'>make</span> <span m='1809070'>it</span> <span
  m='1809160'>multiply</span> <span m='1809730'>a</span> <span
  m='1809790'>vector,</span> <span m='1810690'>x0,</span> <span
  m='1811290'>x1,</span> <span m='1811830'>x2,</span> <span
  m='1812280'>x3.</span> <span m='1814760'>What</span> <span
  m='1815060'>it</span> <span m='1815790'>does</span> <span
  m='1816300'>is</span> <span m='1817350'>it</span> <span
  m='1817560'>puts--</span> <span m='1821170'>well,</span> <span
  m='1821540'>I've</span> <span m='1821670'>started</span> <span
  m='1822360'>the</span> <span m='1822510'>numbering</span> <span
  m='1822960'>with</span> <span m='1823140'>2</span> <span
  m='1823500'>here.</span> <span m='1824160'>x2,</span> <span
  m='1825920'>x3,</span> <span m='1828700'>x0,</span> <span
  m='1829790'>and</span> <span m='1829910'>x1.</span> <span
  m='1831860'>So</span> <span m='1832040'>it's</span> <span
  m='1832160'>shifted</span> <span m='1832700'>it</span> <span
  m='1833270'>by</span> <span m='1833480'>two</span> <span
  m='1834930'>and</span> <span m='1836900'>cyclically.</span> <span
  m='1837710'>So</span> <span m='1837980'>the</span> <span
  m='1838670'>x2,</span> <span m='1839090'>x3</span> <span
  m='1839540'>that</span> <span m='1839640'>got</span> <span
  m='1839840'>shifted</span> <span m='1840290'>off</span> <span
  m='1840530'>the</span> <span m='1840650'>bottom</span> <span
  m='1841040'>come</span> <span m='1841250'>back</span> <span
  m='1841490'>to</span> <span m='1841610'>the</span> <span
  m='1841760'>top.</span> </p><p><span m='1846770'>So</span> <span
  m='1847010'>the</span> <span m='1847130'>first</span> <span
  m='1847460'>property</span> <span m='1848090'>is,</span> <span
  m='1849310'>of</span> <span m='1849660'>circulants--</span> <span
  m='1851690'>so</span> <span m='1851960'>I</span> <span
  m='1852080'>suppose</span> <span m='1852590'>I</span> <span
  m='1852740'>have</span> <span m='1852890'>matrices</span> <span
  m='1853580'>C</span> <span m='1853940'>and</span> <span m='1854150'>D</span>
  <span m='1854810'>circulants.</span> <span m='1859740'>So</span> <span
  m='1859990'>fact</span> <span m='1860350'>1,</span> <span m='1863890'>C</span>
  <span m='1864260'>times</span> <span m='1864670'>D</span> <span
  m='1865190'>is</span> <span m='1865370'>also</span> <span m='1866150'>a</span>
  <span m='1866230'>circulant.</span> <span m='1873720'>So</span> <span
  m='1874400'>if</span> <span m='1874550'>I</span> <span
  m='1874640'>multiply</span> <span m='1875090'>circulant</span> <span
  m='1875630'>matrices,</span> <span m='1876360'>I</span> <span
  m='1876380'>get</span> <span m='1876590'>more</span> <span
  m='1876890'>circulant</span> <span m='1877460'>matrices.</span> <span
  m='1878630'>And</span> <span m='1878780'>the</span> <span
  m='1878930'>identity</span> <span m='1879560'>is</span> <span
  m='1879740'>a</span> <span m='1879830'>circulant</span> <span
  m='1880430'>matrix.</span> <span m='1881230'>I</span> <span
  m='1881430'>have</span> <span m='1881570'>a</span> <span
  m='1881630'>little</span> <span m='1881900'>group</span> <span
  m='1882320'>of</span> <span m='1882470'>matrices,</span> <span
  m='1883160'>the</span> <span m='1883310'>best</span> <span
  m='1883730'>little</span> <span m='1884000'>group</span> <span
  m='1884300'>of</span> <span m='1884360'>matrices</span> <span
  m='1885110'>there</span> <span m='1885350'>is.</span> <span
  m='1886910'>I</span> <span m='1887010'>can</span> <span
  m='1887210'>multiply</span> <span m='1888290'>two</span> <span
  m='1888560'>guys</span> <span m='1889040'>in</span> <span
  m='1889190'>the</span> <span m='1889280'>group,</span> <span
  m='1890420'>and</span> <span m='1890540'>I</span> <span m='1890630'>get</span>
  <span m='1890810'>another</span> <span m='1891200'>one</span> <span
  m='1891620'>in</span> <span m='1891770'>the</span> <span
  m='1891860'>group.</span> </p><p><span m='1892470'>Why</span> <span
  m='1892780'>is</span> <span m='1892910'>CD</span> <span
  m='1893600'>also</span> <span m='1894050'>a</span> <span
  m='1894110'>circulant?</span> <span m='1896960'>Let's</span> <span
  m='1897200'>see,</span> <span m='1897470'>can</span> <span
  m='1897680'>we</span> <span m='1897890'>see</span> <span
  m='1898220'>why</span> <span m='1898430'>that</span> <span
  m='1898640'>fact</span> <span m='1899030'>is</span> <span
  m='1899210'>true?</span> <span m='1902230'>I</span> <span
  m='1902380'>guess</span> <span m='1902690'>here</span> <span
  m='1902930'>here's</span> <span m='1903220'>my</span> <span
  m='1904030'>way</span> <span m='1904270'>to</span> <span
  m='1904390'>look</span> <span m='1904660'>at</span> <span
  m='1904840'>it.</span> </p><p><span m='1905560'>A</span> <span
  m='1905620'>circulant</span> <span m='1906190'>matrix--</span> <span
  m='1907240'>let</span> <span m='1907390'>me</span> <span
  m='1907540'>put</span> <span m='1908350'>it</span> <span
  m='1908470'>here--</span> <span m='1909040'>a</span> <span
  m='1909100'>circulant</span> <span m='1909640'>matrix,</span> <span
  m='1913210'>every</span> <span m='1913800'>circulant</span> <span
  m='1914310'>matrix</span> <span m='1916680'>is</span> <span
  m='1918000'>C0</span> <span m='1918720'>times</span> <span
  m='1919230'>the</span> <span m='1919380'>identity</span> <span
  m='1920100'>circulant</span> <span m='1921250'>plus</span> <span
  m='1921590'>C1</span> <span m='1922470'>times</span> <span
  m='1923040'>the</span> <span m='1924630'>single</span> <span
  m='1925060'>shift</span> <span m='1925860'>plus</span> <span
  m='1926220'>C2</span> <span m='1927120'>times</span> <span
  m='1927580'>the</span> <span m='1927690'>double</span> <span
  m='1928050'>shift</span> <span m='1928430'>plus</span> <span
  m='1928670'>C3</span> <span m='1929640'>times</span> <span
  m='1930110'>the</span> <span m='1930630'>triple</span> <span
  m='1931050'>shift.</span> <span m='1932580'>That's</span> <span
  m='1932940'>what</span> <span m='1933150'>it</span> <span
  m='1933240'>takes</span> <span m='1933720'>to</span> <span
  m='1933840'>put</span> <span m='1934940'>C0,</span> <span
  m='1935940'>C1,</span> <span m='1936780'>C2,</span> <span
  m='1937500'>and</span> <span m='1937620'>C3</span> <span m='1938280'>on</span>
  <span m='1938460'>those</span> <span m='1938760'>diagonals.</span>
  </p><p><span m='1939980'>C0I</span> <span m='1941100'>is</span> <span
  m='1941280'>obviously</span> <span m='1941850'>on</span> <span
  m='1942030'>the</span> <span m='1942150'>main</span> <span
  m='1942450'>diagonal.</span> <span m='1943590'>C1P--</span> <span
  m='1945420'>remember</span> <span m='1945810'>what</span> <span
  m='1945980'>P</span> <span m='1946320'>is--</span> <span
  m='1947100'>that</span> <span m='1947460'>puts</span> <span
  m='1948270'>C1</span> <span m='1949020'>on</span> <span m='1949260'>the</span>
  <span m='1949620'>next</span> <span m='1950880'>diagonal.</span> <span
  m='1952470'>Then</span> <span m='1952800'>C2P</span> <span
  m='1953580'>squared,</span> <span m='1954690'>when</span> <span
  m='1954870'>I</span> <span m='1955650'>square</span> <span
  m='1956280'>this,</span> <span m='1957740'>I've</span> <span
  m='1957870'>shifted</span> <span m='1958320'>by</span> <span
  m='1958530'>one</span> <span m='1958830'>more.</span> <span
  m='1959580'>So</span> <span m='1959820'>it</span> <span
  m='1959940'>will</span> <span m='1960120'>put</span> <span
  m='1960420'>C2</span> <span m='1961110'>on</span> <span
  m='1961260'>that</span> <span m='1961470'>diagonal.</span> <span
  m='1962100'>And</span> <span m='1962220'>finally,</span> <span
  m='1963060'>C3</span> <span m='1963810'>would</span> <span
  m='1964050'>go</span> <span m='1964320'>in</span> <span
  m='1964440'>those</span> <span m='1964770'>positions.</span> </p><p><span
  m='1968020'>So</span> <span m='1968550'>every</span> <span
  m='1971870'>circulant</span> <span m='1972380'>matrix</span> <span
  m='1972950'>is</span> <span m='1973130'>a</span> <span
  m='1973190'>polynomial</span> <span m='1974780'>in</span> <span
  m='1974990'>P,</span> <span m='1975920'>in</span> <span m='1976370'>a</span>
  <span m='1976430'>single</span> <span m='1976880'>shift.</span> <span
  m='1977840'>This</span> <span m='1978050'>is</span> <span
  m='1978230'>any</span> <span m='1978980'>combination</span> <span
  m='1979820'>of</span> <span m='1979940'>shifts.</span> <span
  m='1981290'>This</span> <span m='1981560'>is</span> <span m='1981800'>a</span>
  <span m='1982190'>single</span> <span m='1982640'>shift.</span> <span
  m='1983160'>That's</span> <span m='1983390'>a</span> <span
  m='1983450'>double</span> <span m='1983810'>shift.</span> <span
  m='1984270'>That's</span> <span m='1984470'>a</span> <span
  m='1984530'>triple</span> <span m='1984950'>shift.</span> <span
  m='1985410'>That's</span> <span m='1985610'>a</span> <span
  m='1985800'>zero</span> <span m='1986120'>shift.</span> <span
  m='1987140'>And</span> <span m='1987320'>if</span> <span m='1987470'>I</span>
  <span m='1987590'>take</span> <span m='1987830'>combinations</span> <span
  m='1989030'>I</span> <span m='1989150'>get</span> <span m='1991250'>a</span>
  <span m='1991820'>circulant</span> <span m='1992390'>matrix.</span>
  </p><p><span m='1994870'>So</span> <span m='1995150'>now,</span> <span
  m='1995420'>I</span> <span m='1995540'>can</span> <span m='1995780'>see</span>
  <span m='1996110'>why</span> <span m='1997040'>CD</span> <span
  m='1997580'>is</span> <span m='1997760'>also</span> <span m='1998120'>a</span>
  <span m='1998180'>circulant,</span> <span m='1998720'>because</span> <span
  m='1999080'>this</span> <span m='1999320'>is</span> <span m='1999530'>a</span>
  <span m='2000280'>polynomial</span> <span m='2002860'>in</span> <span
  m='2003250'>P.</span> <span m='2005710'>And</span> <span
  m='2005890'>this</span> <span m='2006190'>is</span> <span m='2006430'>a</span>
  <span m='2007300'>polynomial</span> <span m='2010360'>in</span> <span
  m='2010630'>P.</span> <span m='2011020'>And</span> <span
  m='2011170'>when</span> <span m='2011350'>I</span> <span
  m='2011440'>multiply</span> <span m='2012070'>those</span> <span
  m='2012340'>together,</span> <span m='2012790'>I</span> <span
  m='2012910'>get</span> <span m='2013150'>a</span> <span
  m='2013630'>polynomial</span> <span m='2015640'>in</span> <span
  m='2015850'>P.</span> </p><p><span m='2017170'>But</span> <span
  m='2020020'>usually,</span> <span m='2020680'>if</span> <span
  m='2020830'>I</span> <span m='2020950'>multiply</span> <span
  m='2021720'>a</span> <span m='2022330'>third</span> <span
  m='2022570'>degree</span> <span m='2022930'>polynomial</span> <span
  m='2024340'>by</span> <span m='2024820'>another</span> <span
  m='2025210'>third</span> <span m='2025500'>degree</span> <span
  m='2025870'>polynomial--</span> <span m='2027380'>so</span> <span
  m='2027750'>say</span> <span m='2028210'>I'm</span> <span
  m='2028360'>looking</span> <span m='2028750'>at</span> <span
  m='2028840'>4</span> <span m='2029110'>by</span> <span m='2029320'>4</span>
  <span m='2029590'>circulant</span> <span m='2030130'>matrices--</span> <span
  m='2031660'>so</span> <span m='2031870'>this</span> <span
  m='2032110'>would</span> <span m='2032260'>be</span> <span
  m='2032410'>a</span> <span m='2032470'>polynomial</span> <span
  m='2032845'>of</span> <span m='2033220'>P</span> <span m='2034060'>in</span>
  <span m='2034240'>P</span> <span m='2034930'>third</span> <span
  m='2036310'>degree</span> <span m='2036740'>3.</span> <span
  m='2040540'>And</span> <span m='2040690'>this</span> <span
  m='2040930'>would</span> <span m='2041080'>be</span> <span
  m='2041230'>a</span> <span m='2041290'>polynomial</span> <span
  m='2041980'>of</span> <span m='2042080'>degree</span> <span
  m='2042490'>3.</span> <span m='2045670'>So</span> <span
  m='2045810'>that</span> <span m='2045960'>would</span> <span
  m='2046080'>give</span> <span m='2046230'>me</span> <span m='2046350'>a</span>
  <span m='2046410'>polynomial</span> <span m='2047010'>of</span> <span
  m='2047100'>degree</span> <span m='2047460'>6.</span> </p><p><span
  m='2049440'>But</span> <span m='2049710'>I</span> <span
  m='2049800'>don't</span> <span m='2050040'>want</span> <span
  m='2050340'>that.</span> <span m='2050745'>That</span> <span
  m='2051150'>somehow</span> <span m='2051750'>I</span> <span
  m='2051870'>have</span> <span m='2052110'>to</span> <span
  m='2052949'>define</span> <span m='2053460'>multiplication</span> <span
  m='2054370'>so</span> <span m='2054510'>that</span> <span m='2055350'>I</span>
  <span m='2055530'>want</span> <span m='2057239'>this</span> <span
  m='2057540'>to</span> <span m='2057659'>be</span> <span
  m='2057880'>degree--</span> <span m='2058230'>these</span> <span
  m='2058500'>are</span> <span m='2058650'>all</span> <span
  m='2058800'>supposed</span> <span m='2059250'>to</span> <span
  m='2059340'>be</span> <span m='2060719'>4</span> <span m='2061020'>by</span>
  <span m='2061230'>4</span> <span m='2061469'>matrices,</span> <span
  m='2065010'>just</span> <span m='2065219'>like</span> <span
  m='2065429'>that</span> <span m='2065610'>one.</span> <span
  m='2066420'>That's</span> <span m='2067110'>twice</span> <span
  m='2067560'>the</span> <span m='2067679'>identity</span> <span
  m='2068310'>plus</span> <span m='2068639'>five</span> <span
  m='2069090'>P</span> <span m='2069570'>plus</span> <span m='2070020'>1P</span>
  <span m='2070710'>squared</span> <span m='2071159'>plus</span> <span
  m='2071340'>0P</span> <span m='2071969'>cubed.</span> </p><p><span
  m='2073020'>And</span> <span m='2073139'>suppose</span> <span
  m='2073560'>I</span> <span m='2073710'>square</span> <span
  m='2074190'>that.</span> <span m='2075300'>Then,</span> <span
  m='2075630'>again,</span> <span m='2076020'>I'm</span> <span
  m='2076199'>going</span> <span m='2076310'>to</span> <span
  m='2076469'>get</span> <span m='2076710'>up</span> <span m='2077030'>a</span>
  <span m='2077159'>circulant</span> <span m='2077730'>matrix.</span> <span
  m='2078810'>And</span> <span m='2078929'>I</span> <span
  m='2079020'>don't</span> <span m='2079170'>want</span> <span
  m='2079380'>it</span> <span m='2079469'>to</span> <span m='2079590'>go</span>
  <span m='2079830'>up</span> <span m='2080010'>to</span> <span
  m='2080159'>degree</span> <span m='2081000'>7.</span> <span
  m='2082920'>I</span> <span m='2083040'>just</span> <span
  m='2083250'>want</span> <span m='2083489'>four</span> <span
  m='2084449'>terms</span> <span m='2085230'>in</span> <span
  m='2085380'>my</span> <span m='2085560'>polynomial.</span> <span
  m='2087540'>I</span> <span m='2087659'>just</span> <span
  m='2087929'>want</span> <span m='2089280'>the</span> <span
  m='2089370'>main</span> <span m='2089670'>diagonal</span> <span
  m='2090210'>and</span> <span m='2090330'>the</span> <span
  m='2090449'>next</span> <span m='2090870'>three</span> <span
  m='2091260'>diagonals</span> <span m='2091949'>and</span> <span
  m='2092070'>then</span> <span m='2093600'>cycling</span> <span
  m='2094170'>around</span> <span m='2094560'>completes</span> <span
  m='2095070'>the</span> <span m='2095190'>matrix.</span> </p><p><span
  m='2096000'>So</span> <span m='2102060'>how</span> <span m='2102360'>to</span>
  <span m='2102510'>get</span> <span m='2103020'>degrees</span> <span
  m='2103540'>3?</span> <span m='2111610'>That's</span> <span
  m='2111880'>the</span> <span m='2111990'>question</span> <span
  m='2112480'>then.</span> <span m='2113280'>Can</span> <span
  m='2113490'>you</span> <span m='2113580'>just</span> <span
  m='2113760'>tell</span> <span m='2114000'>me</span> <span
  m='2114150'>the</span> <span m='2114240'>answer?</span> <span
  m='2117130'>So</span> <span m='2117370'>I'm</span> <span
  m='2118000'>multiplying--</span> <span m='2120130'>yeah,</span> <span
  m='2120490'>let's</span> <span m='2120730'>just</span> <span
  m='2121210'>do</span> <span m='2121510'>an</span> <span
  m='2121630'>example.</span> <span m='2122260'>So</span> <span
  m='2122290'>I've</span> <span m='2122500'>C0,</span> <span
  m='2123670'>C1P,</span> <span m='2125350'>C2P</span> <span
  m='2126130'>squared,</span> <span m='2127400'>C3P</span> <span
  m='2128230'>cubed</span> <span m='2130150'>times</span> <span
  m='2131560'>D0</span> <span m='2132550'>plus</span> <span
  m='2133060'>D1P</span> <span m='2135100'>plus</span> <span
  m='2135400'>D2P</span> <span m='2136120'>squared</span> <span
  m='2137250'>and</span> <span m='2137440'>D3P</span> <span
  m='2138250'>cubed.</span> <span m='2139730'>So</span> <span
  m='2142120'>P</span> <span m='2142390'>is</span> <span m='2142630'>4</span>
  <span m='2142960'>by</span> <span m='2143200'>4</span> <span
  m='2144910'>circular</span> <span m='2145630'>shift.</span> </p><p><span
  m='2153920'>And</span> <span m='2154170'>I'm</span> <span
  m='2154320'>writing</span> <span m='2154740'>the</span> <span
  m='2155400'>4</span> <span m='2155670'>by</span> <span m='2155850'>4</span>
  <span m='2156120'>matrix</span> <span m='2156900'>that</span> <span
  m='2157140'>way.</span> <span m='2157380'>This</span> <span
  m='2157950'>should</span> <span m='2158190'>be</span> <span
  m='2158400'>the</span> <span m='2158550'>identity,</span> <span
  m='2159240'>of</span> <span m='2159390'>course.</span> <span
  m='2161020'>You</span> <span m='2161090'>knew</span> <span
  m='2161340'>that.</span> </p><p><span m='2162450'>OK,</span> <span
  m='2162870'>so</span> <span m='2163080'>when</span> <span m='2163290'>I</span>
  <span m='2163380'>multiply</span> <span m='2163860'>those</span> <span
  m='2164130'>guys,</span> <span m='2164550'>why</span> <span
  m='2164880'>do</span> <span m='2165090'>I</span> <span m='2165210'>not</span>
  <span m='2165510'>get</span> <span m='2165780'>degree</span> <span
  m='2166860'>six?</span> <span m='2169650'>Why</span> <span
  m='2170160'>is</span> <span m='2170340'>that</span> <span
  m='2171210'>product--</span> <span m='2171990'>like</span> <span
  m='2172320'>P</span> <span m='2172620'>cubed</span> <span
  m='2173010'>times</span> <span m='2173430'>P</span> <span
  m='2173670'>cubed</span> <span m='2174930'>C3P</span> <span
  m='2175710'>cubed</span> <span m='2176130'>times</span> <span
  m='2176475'>DP3</span> <span m='2177060'>cubed,</span> <span
  m='2177450'>that</span> <span m='2177630'>gives</span> <span
  m='2177900'>me</span> <span m='2178800'>C3D3</span> <span m='2180330'>P</span>
  <span m='2180600'>to</span> <span m='2180720'>the</span> <span
  m='2180840'>sixth</span> <span m='2181230'>power.</span> <span
  m='2181810'>So</span> <span m='2181920'>what's</span> <span
  m='2182220'>up?</span> <span m='2183480'>What</span> <span
  m='2183600'>do</span> <span m='2183690'>I</span> <span m='2183780'>do?</span>
  <span m='2184020'>Yeah.</span> </p><p><span m='2184680'>AUDIENCE:</span> <span
  m='2184805'>Does</span> <span m='2184930'>P</span> <span m='2185140'>to</span>
  <span m='2185340'>the</span> <span m='2185470'>4</span> <span
  m='2185790'>equal</span> <span m='2186130'>to</span> <span
  m='2186420'>identity?</span> </p><p><span m='2186820'>GILBERT STRANG:</span>
  <span m='2187070'>Yes,</span> <span m='2187320'>that's</span> <span
  m='2187710'>the</span> <span m='2187830'>key.</span> <span
  m='2188790'>That's</span> <span m='2189180'>the</span> <span
  m='2189330'>periodic</span> <span m='2190050'>part.</span> <span
  m='2190670'>P</span> <span m='2190950'>to</span> <span m='2191085'>the</span>
  <span m='2191220'>4</span> <span m='2191490'>equal</span> <span
  m='2191840'>the</span> <span m='2192000'>identity.</span> <span
  m='2192900'>Thank</span> <span m='2193330'>you.</span> <span
  m='2194350'>Yeah.</span> </p><p><span m='2195480'>So</span> <span
  m='2195720'>the</span> <span m='2195840'>P</span> <span m='2196080'>to</span>
  <span m='2196170'>the</span> <span m='2196320'>sixth</span> <span
  m='2196710'>term</span> <span m='2197190'>is</span> <span
  m='2197370'>really</span> <span m='2197700'>a</span> <span
  m='2197790'>P</span> <span m='2198060'>squared</span> <span
  m='2198570'>term.</span> <span m='2199740'>The</span> <span
  m='2199860'>P</span> <span m='2200130'>to</span> <span m='2200220'>the</span>
  <span m='2200340'>fifth</span> <span m='2200700'>term</span> <span
  m='2201180'>is</span> <span m='2201330'>really</span> <span
  m='2201690'>a</span> <span m='2201750'>P</span> <span m='2202200'>term.</span>
  <span m='2203440'>P</span> <span m='2203790'>the</span> <span
  m='2203880'>fourth</span> <span m='2204240'>term</span> <span
  m='2204570'>is</span> <span m='2204720'>really</span> <span
  m='2205140'>a</span> <span m='2205530'>P</span> <span m='2205695'>to</span>
  <span m='2205860'>the</span> <span m='2205980'>zero</span> <span
  m='2206460'>term.</span> </p><p><span m='2208800'>So</span> <span
  m='2209660'>I'm</span> <span m='2209790'>just</span> <span
  m='2210030'>doing</span> <span m='2213170'>cyclic</span> <span
  m='2213980'>convolution</span> <span m='2214980'>actually.</span> <span
  m='2216570'>Let</span> <span m='2216750'>me</span> <span
  m='2216900'>just</span> <span m='2217890'>say</span> <span
  m='2218280'>when</span> <span m='2218490'>I'm</span> <span
  m='2218640'>multiplying--</span> <span m='2219870'>yeah,</span> <span
  m='2221800'>so</span> <span m='2222230'>now,</span> <span
  m='2222610'>I'm</span> <span m='2223290'>telling</span> <span
  m='2223650'>you</span> <span m='2223770'>what--</span> <span
  m='2224450'>I</span> <span m='2224790'>can</span> <span
  m='2224970'>first</span> <span m='2225240'>tell</span> <span
  m='2225420'>you</span> <span m='2225510'>what</span> <span
  m='2225690'>convolution</span> <span m='2226500'>is</span> <span
  m='2227100'>and</span> <span m='2227220'>then</span> <span
  m='2227460'>what</span> <span m='2227670'>cyclic</span> <span
  m='2228180'>convolution</span> <span m='2228960'>is.</span> <span
  m='2229170'>And</span> <span m='2229800'>listen</span> <span
  m='2230220'>up</span> <span m='2230430'>to</span> <span
  m='2230580'>this,</span> <span m='2230910'>because</span> <span
  m='2231360'>it's</span> <span m='2232230'>a</span> <span
  m='2232290'>good</span> <span m='2232500'>thing</span> <span
  m='2232740'>to</span> <span m='2232860'>know.</span> </p><p><span
  m='2235200'>So,</span> <span m='2235440'>first</span> <span
  m='2235740'>of</span> <span m='2235860'>all,</span> <span
  m='2236010'>convolution.</span> <span m='2237340'>So</span> <span
  m='2237480'>suppose</span> <span m='2237960'>I</span> <span
  m='2238080'>want</span> <span m='2238290'>to</span> <span
  m='2238410'>take</span> <span m='2238760'>the</span> <span
  m='2238860'>convolution</span> <span m='2239670'>of</span> <span
  m='2239760'>3,</span> <span m='2240420'>1,</span> <span m='2241270'>2--</span>
  <span m='2243480'>that's</span> <span m='2243780'>often</span> <span
  m='2244190'>the</span> <span m='2244260'>symbol</span> <span
  m='2244710'>for</span> <span m='2244900'>a</span> <span
  m='2244920'>convolution--</span> <span m='2245760'>with</span> <span
  m='2246720'>4,</span> <span m='2247632'>6,</span> <span m='2250290'>1.</span>
  <span m='2253410'>So</span> <span m='2254730'>what</span> <span
  m='2255180'>does</span> <span m='2255330'>that</span> <span
  m='2255510'>mean?</span> <span m='2255870'>I've</span> <span
  m='2256200'>got</span> <span m='2256380'>a</span> <span
  m='2256470'>vector.</span> </p><p><span m='2257400'>So</span> <span
  m='2258330'>for</span> <span m='2258510'>me,</span> <span
  m='2258720'>what's</span> <span m='2258990'>hiding</span> <span
  m='2259410'>there</span> <span m='2260100'>is</span> <span
  m='2263670'>polynomial</span> <span m='2264440'>3</span> <span
  m='2265020'>plus</span> <span m='2265440'>x</span> <span
  m='2265770'>plus</span> <span m='2266070'>2x</span> <span
  m='2266490'>squared</span> <span m='2268920'>times</span> <span
  m='2269760'>4</span> <span m='2270210'>plus</span> <span m='2270540'>6x</span>
  <span m='2271290'>plus</span> <span m='2271600'>1x</span> <span
  m='2272180'>squared.</span> <span m='2273380'>And</span> <span
  m='2273540'>I</span> <span m='2273630'>just</span> <span
  m='2273840'>multiply</span> <span m='2274410'>them</span> <span
  m='2274590'>out.</span> <span m='2275340'>And</span> <span
  m='2275460'>I</span> <span m='2275550'>get</span> <span m='2276840'>5--</span>
  <span m='2281570'>so</span> <span m='2281960'>I</span> <span
  m='2282080'>get</span> <span m='2282350'>3</span> <span
  m='2282680'>times</span> <span m='2283010'>4</span> <span
  m='2283340'>gives</span> <span m='2283580'>me</span> <span
  m='2283730'>a</span> <span m='2283790'>12.</span> <span m='2285830'>3</span>
  <span m='2286220'>times</span> <span m='2286640'>6x</span> <span
  m='2287390'>is</span> <span m='2287550'>18x.</span> <span
  m='2288650'>But</span> <span m='2288890'>I've</span> <span
  m='2289040'>also</span> <span m='2289400'>got</span> <span
  m='2289730'>4x</span> <span m='2290450'>from</span> <span
  m='2290660'>here.</span> <span m='2291060'>So</span> <span
  m='2291140'>I've</span> <span m='2291290'>got</span> <span
  m='2291470'>22x.</span> </p><p><span m='2293780'>So</span> <span
  m='2294850'>I</span> <span m='2294920'>just</span> <span m='2295880'>do</span>
  <span m='2296150'>that</span> <span m='2296330'>multiplication</span> <span
  m='2297380'>as</span> <span m='2297690'>of</span> <span
  m='2297860'>polynomials.</span> <span m='2299150'>And</span> <span
  m='2299390'>what</span> <span m='2299570'>I'm</span> <span
  m='2299750'>doing</span> <span m='2300140'>is</span> <span
  m='2301010'>convolution</span> <span m='2301850'>with</span> <span
  m='2302140'>the</span> <span m='2302450'>vectors.</span> <span
  m='2303410'>And</span> <span m='2303890'>here's</span> <span
  m='2304310'>the</span> <span m='2304430'>way</span> <span
  m='2304670'>you</span> <span m='2304820'>wrote</span> <span
  m='2305150'>it</span> <span m='2305300'>in</span> <span
  m='2308300'>first</span> <span m='2308630'>grade.</span> </p><p><span
  m='2310400'>So</span> <span m='2310610'>here's</span> <span
  m='2310910'>first</span> <span m='2311210'>grade.</span> <span
  m='2313070'>2,</span> <span m='2313934'>12,</span> <span m='2314798'>8.</span>
  <span m='2316700'>You</span> <span m='2317000'>haven't</span> <span
  m='2317270'>learned</span> <span m='2317510'>to</span> <span
  m='2317630'>carry</span> <span m='2318750'>yet.</span> <span
  m='2319160'>So</span> <span m='2319580'>12</span> <span
  m='2320030'>goes</span> <span m='2320390'>in</span> <span
  m='2320510'>there</span> <span m='2320720'>as</span> <span
  m='2320990'>12.</span> <span m='2321950'>Then</span> <span
  m='2322190'>1</span> <span m='2322700'>is</span> <span m='2322880'>4,</span>
  <span m='2323390'>6,</span> <span m='2323540'>1.</span> <span
  m='2325070'>And</span> <span m='2325280'>3</span> <span m='2325790'>is</span>
  <span m='2326070'>12,</span> <span m='2326880'>18,</span> <span
  m='2328760'>3.</span> </p><p><span m='2329900'>And</span> <span
  m='2329990'>then</span> <span m='2330170'>you</span> <span
  m='2330320'>add</span> <span m='2330590'>up.</span> <span
  m='2331490'>So</span> <span m='2331710'>you</span> <span
  m='2331820'>have</span> <span m='2332000'>2,</span> <span
  m='2332960'>13,</span> <span m='2335240'>17,</span> <span
  m='2337430'>22,</span> <span m='2338690'>and</span> <span
  m='2338930'>12.</span> <span m='2341090'>So</span> <span
  m='2341720'>that's</span> <span m='2342050'>the</span> <span
  m='2342200'>answer</span> <span m='2342590'>there.</span> <span
  m='2343160'>That's</span> <span m='2343500'>the</span> <span
  m='2343670'>convolution--</span> <span m='2344690'>I</span> <span
  m='2344840'>guess</span> <span m='2345080'>I</span> <span
  m='2345160'>have</span> <span m='2345230'>to</span> <span
  m='2345350'>take</span> <span m='2345650'>it</span> <span
  m='2345740'>from--</span> <span m='2346990'>yeah--</span> <span
  m='2348000'>12.</span> <span m='2349130'>3</span> <span
  m='2349370'>times</span> <span m='2349610'>four</span> <span
  m='2349910'>gave</span> <span m='2350150'>12.</span> <span
  m='2351080'>Now,</span> <span m='2351380'>3</span> <span
  m='2351680'>times</span> <span m='2351980'>6</span> <span
  m='2352370'>plus</span> <span m='2352610'>1</span> <span
  m='2352880'>times</span> <span m='2353240'>4</span> <span
  m='2353540'>that's</span> <span m='2353840'>the</span> <span
  m='2353960'>22.</span> <span m='2355100'>Oh,</span> <span
  m='2355280'>yeah,</span> <span m='2355520'>we</span> <span
  m='2355700'>already</span> <span m='2355970'>started</span> <span
  m='2356480'>here.</span> </p><p><span m='2357140'>But</span> <span
  m='2357290'>now,</span> <span m='2358370'>what's</span> <span
  m='2358700'>after</span> <span m='2359030'>that</span> <span
  m='2359390'>17?</span> <span m='2360510'>Why</span> <span
  m='2360740'>did</span> <span m='2360920'>I</span> <span m='2361070'>say</span>
  <span m='2361310'>17?</span> </p><p><span m='2363432'>AUDIENCE:</span> <span
  m='2363658'>8</span> <span m='2363884'>plus</span> <span m='2364336'>6</span>
  <span m='2364788'>plus</span> <span m='2365240'>3.</span> </p><p><span
  m='2365692'>GILBERT STRANG:</span> <span m='2365921'>Oh,</span> <span
  m='2366150'>8</span> <span m='2366520'>plus</span> <span m='2366635'>6</span>
  <span m='2366750'>plus</span> <span m='2366960'>3.</span> <span
  m='2367390'>Thanks.</span> <span m='2368210'>17.</span> <span
  m='2370560'>And</span> <span m='2370680'>then</span> <span
  m='2370860'>12</span> <span m='2371100'>plus</span> <span
  m='2371400'>1,</span> <span m='2371780'>13.</span> <span
  m='2372900'>And</span> <span m='2373020'>then</span> <span
  m='2373200'>2.</span> <span m='2374020'>That's</span> <span
  m='2374360'>non-cyclic.</span> <span m='2379950'>So that's</span> <span
  m='2380220'>convolution.</span> </p><p><span m='2381010'>Oh,</span> <span
  m='2381660'>if</span> <span m='2382260'>I</span> <span m='2382350'>want</span>
  <span m='2382500'>it</span> <span m='2382650'>to</span> <span
  m='2382740'>be</span> <span m='2382890'>non-cyclic,</span> <span
  m='2383730'>I</span> <span m='2383820'>don't</span> <span
  m='2384120'>put</span> <span m='2384330'>a</span> <span
  m='2384390'>circle</span> <span m='2384870'>in.</span> <span
  m='2389040'>So</span> <span m='2389220'>that's</span> <span
  m='2389550'>a</span> <span m='2389610'>symbol</span> <span
  m='2390060'>for</span> <span m='2390330'>ordinary</span> <span
  m='2390960'>convolution.</span> <span m='2391740'>If</span> <span
  m='2391920'>you</span> <span m='2392190'>do</span> <span
  m='2392430'>the</span> <span m='2392550'>Matlab</span> <span
  m='2393030'>command</span> <span m='2393990'>conv</span> <span
  m='2395040'>for</span> <span m='2395250'>convolution,</span> <span
  m='2396600'>if</span> <span m='2396750'>you</span> <span
  m='2396930'>gave</span> <span m='2397170'>it</span> <span
  m='2397260'>those</span> <span m='2397530'>vectors,</span> <span
  m='2398010'>it</span> <span m='2398070'>would</span> <span
  m='2398250'>give</span> <span m='2398490'>you</span> <span
  m='2399390'>a</span> <span m='2401190'>vector</span> <span
  m='2401580'>with</span> <span m='2401760'>five</span> <span
  m='2402090'>components</span> <span m='2402810'>as</span> <span
  m='2403020'>a</span> <span m='2403080'>result.</span> </p><p><span
  m='2404200'>But</span> <span m='2405690'>now,</span> <span
  m='2406350'>let</span> <span m='2406560'>me</span> <span
  m='2406680'>make</span> <span m='2406950'>it</span> <span
  m='2407070'>cyclic.</span> <span m='2409920'>So</span> <span
  m='2410130'>what's</span> <span m='2410370'>going</span> <span
  m='2410530'>to</span> <span m='2410610'>happen</span> <span
  m='2410940'>now</span> <span m='2411210'>when</span> <span
  m='2411390'>I</span> <span m='2411480'>make</span> <span m='2411720'>it</span>
  <span m='2411840'>cyclic?</span> <span m='2413360'>So</span> <span
  m='2413580'>this</span> <span m='2413880'>represents</span> <span
  m='2414570'>12,</span> <span m='2415350'>22P,</span> <span
  m='2416610'>17P</span> <span m='2417540'>squared,</span> <span
  m='2418320'>13P</span> <span m='2419420'>cubed.</span> <span
  m='2420540'>And</span> <span m='2421275'>what's</span> <span
  m='2421850'>13P</span> <span m='2422700'>cubed?</span> <span
  m='2425370'>If</span> <span m='2425580'>n</span> <span m='2425820'>is</span>
  <span m='2426030'>3</span> <span m='2426510'>and</span> <span
  m='2426630'>I'm</span> <span m='2426780'>doing</span> <span
  m='2427380'>3</span> <span m='2427650'>by</span> <span m='2427830'>3</span>
  <span m='2428100'>matrices,</span> <span m='2429450'>then</span> <span
  m='2429690'>13P</span> <span m='2430530'>cubed</span> <span
  m='2430940'>is</span> <span m='2431100'>the</span> <span
  m='2431190'>same</span> <span m='2431610'>as?</span> <span
  m='2433940'>13,</span> <span m='2435200'>right?</span> <span
  m='2435860'>P</span> <span m='2436070'>cube</span> <span m='2436460'>is</span>
  <span m='2436610'>I.</span> </p><p><span m='2437360'>So</span> <span
  m='2437540'>the</span> <span m='2437660'>13</span> <span
  m='2438320'>will</span> <span m='2438500'>go</span> <span
  m='2438710'>back</span> <span m='2439070'>there.</span> <span
  m='2440090'>And</span> <span m='2440240'>the</span> <span m='2440330'>2</span>
  <span m='2440780'>will</span> <span m='2440930'>be</span> <span
  m='2441170'>P</span> <span m='2441530'>fourth.</span> <span
  m='2442670'>And</span> <span m='2442760'>it</span> <span
  m='2442860'>will</span> <span m='2443000'>go</span> <span
  m='2443180'>back</span> <span m='2443600'>as</span> <span
  m='2443870'>P.</span> <span m='2445370'>So</span> <span m='2446540'>now</span>
  <span m='2446870'>with</span> <span m='2448370'>convolution,</span> <span
  m='2449540'>cyclic</span> <span m='2450010'>convolution</span> <span
  m='2451190'>gives</span> <span m='2453020'>12</span> <span
  m='2453380'>and</span> <span m='2453500'>13,</span> <span
  m='2454040'>25,</span> <span m='2456200'>22</span> <span
  m='2456890'>and</span> <span m='2457040'>2,</span> <span
  m='2457490'>24,</span> <span m='2459080'>and</span> <span
  m='2459380'>the</span> <span m='2459510'>17.</span> <span
  m='2463590'>So</span> <span m='2463880'>I'm</span> <span
  m='2464030'>getting</span> <span m='2464330'>back</span> <span
  m='2464630'>a</span> <span m='2464690'>vector</span> <span
  m='2465080'>of</span> <span m='2465170'>length</span> <span
  m='2465440'>3</span> <span m='2467990'>just</span> <span m='2468350'>as</span>
  <span m='2468470'>I</span> <span m='2468590'>wanted</span> <span
  m='2468860'>to.</span> </p><p><span m='2469010'>If</span> <span
  m='2469160'>I</span> <span m='2469270'>have</span> <span m='2469340'>a</span>
  <span m='2469400'>3</span> <span m='2469700'>by</span> <span
  m='2469880'>3</span> <span m='2470120'>matrix,</span> <span
  m='2473240'>convolution</span> <span m='2474140'>cyclic</span> <span
  m='2474830'>circulant</span> <span m='2475430'>matrix,</span> <span
  m='2476030'>with</span> <span m='2476150'>those</span> <span
  m='2476540'>three</span> <span m='2476810'>diagonals</span> <span
  m='2478040'>and</span> <span m='2478190'>these</span> <span
  m='2478490'>three</span> <span m='2478730'>diagonals,</span> <span
  m='2479300'>then</span> <span m='2479510'>I</span> <span
  m='2479600'>want</span> <span m='2479840'>the</span> <span
  m='2479930'>answer</span> <span m='2480290'>to</span> <span
  m='2480410'>be</span> <span m='2480590'>a</span> <span m='2480650'>3</span>
  <span m='2480980'>by</span> <span m='2481190'>3</span> <span
  m='2481460'>matrix</span> <span m='2482030'>with</span> <span
  m='2482150'>these</span> <span m='2482450'>diagonals.</span> <span
  m='2485220'>So</span> <span m='2485520'>again,</span> <span
  m='2486510'>matrix</span> <span m='2486990'>multiplication</span> <span
  m='2488430'>of</span> <span m='2488760'>circulant</span> <span
  m='2489540'>matrices</span> <span m='2490830'>corresponds</span> <span
  m='2491520'>exactly</span> <span m='2492210'>to</span> <span
  m='2493350'>multiplying</span> <span m='2494100'>polynomials</span> <span
  m='2495750'>cyclically.</span> <span m='2497610'>And</span> <span
  m='2498150'>that's</span> <span m='2498660'>cyclic</span> <span
  m='2499140'>convolution.</span> </p><p><span m='2501420'>And</span> <span
  m='2501570'>then</span> <span m='2501780'>there's</span> <span
  m='2501990'>just</span> <span m='2502230'>one</span> <span
  m='2502920'>little</span> <span m='2503220'>trick</span> <span
  m='2503520'>to</span> <span m='2503640'>see</span> <span m='2503940'>if</span>
  <span m='2504060'>you've</span> <span m='2504180'>got</span> <span
  m='2504480'>the</span> <span m='2504960'>numbers.</span> <span
  m='2506340'>I</span> <span m='2506460'>believe</span> <span
  m='2507090'>that</span> <span m='2508020'>it</span> <span
  m='2508200'>should</span> <span m='2508440'>be</span> <span
  m='2508590'>true</span> <span m='2509190'>that</span> <span
  m='2509580'>if</span> <span m='2509890'>3</span> <span m='2510270'>plus</span>
  <span m='2510570'>1</span> <span m='2510780'>plus</span> <span
  m='2511050'>2</span> <span m='2511290'>is</span> <span m='2511440'>6,</span>
  <span m='2512790'>4</span> <span m='2513090'>plus</span> <span
  m='2513330'>6</span> <span m='2513630'>plus</span> <span m='2513900'>1</span>
  <span m='2514140'>is</span> <span m='2514330'>11,</span> <span
  m='2515870'>and</span> <span m='2516030'>I</span> <span
  m='2516180'>believe</span> <span m='2516720'>that</span> <span
  m='2516840'>those</span> <span m='2517200'>should</span> <span
  m='2517500'>add</span> <span m='2517830'>to</span> <span
  m='2520050'>what?</span> <span m='2521950'>What</span> <span
  m='2522180'>do</span> <span m='2522360'>I</span> <span m='2522480'>hope</span>
  <span m='2522750'>that</span> <span m='2522870'>they</span> <span
  m='2523110'>add</span> <span m='2523320'>to?</span> <span
  m='2524124'>66.</span> </p><p><span m='2527600'>I'm</span> <span
  m='2527750'>a</span> <span m='2527810'>little</span> <span
  m='2529580'>nervous</span> <span m='2530090'>about</span> <span
  m='2530420'>doing</span> <span m='2530780'>it,</span> <span
  m='2530900'>but</span> <span m='2531110'>I</span> <span
  m='2531200'>think</span> <span m='2532160'>we</span> <span
  m='2532340'>can.</span> <span m='2532920'>Yeah,</span> <span
  m='2534220'>so</span> <span m='2534470'>49,</span> <span
  m='2535490'>59,</span> <span m='2536360'>66,</span> <span
  m='2537410'>check.</span> <span m='2538430'>Yeah,</span> <span
  m='2539150'>so</span> <span m='2539390'>the</span> <span
  m='2539840'>digits,</span> <span m='2540560'>the</span> <span
  m='2540680'>sum</span> <span m='2541010'>of</span> <span
  m='2541070'>the</span> <span m='2541220'>digits</span> <span
  m='2541760'>of</span> <span m='2542540'>one</span> <span
  m='2543140'>factor</span> <span m='2544760'>multiplies</span> <span
  m='2545420'>the</span> <span m='2545510'>sum</span> <span
  m='2545750'>of</span> <span m='2545810'>the</span> <span
  m='2545930'>digits</span> <span m='2546380'>of</span> <span
  m='2546500'>the</span> <span m='2546620'>other</span> <span
  m='2546830'>factor</span> <span m='2547280'>to</span> <span
  m='2547400'>give</span> <span m='2547700'>the</span> <span
  m='2548210'>sum</span> <span m='2548480'>of</span> <span
  m='2548540'>the</span> <span m='2548660'>digits</span> <span
  m='2549350'>in</span> <span m='2549620'>the</span> <span
  m='2550010'>convolution.</span> <span m='2551460'>And</span> <span
  m='2551570'>that</span> <span m='2551750'>would</span> <span
  m='2551900'>be</span> <span m='2552080'>true</span> <span
  m='2552380'>whether</span> <span m='2552680'>we're</span> <span
  m='2552890'>doing</span> <span m='2553270'>cyclic,</span> <span
  m='2554300'>which</span> <span m='2554570'>is</span> <span
  m='2554690'>bringing</span> <span m='2555200'>the</span> <span
  m='2555830'>13</span> <span m='2556610'>and</span> <span
  m='2556700'>the</span> <span m='2556820'>2</span> <span
  m='2557150'>back</span> <span m='2557630'>in</span> <span
  m='2558350'>or</span> <span m='2558830'>not</span> <span
  m='2559230'>cyclic,</span> <span m='2560150'>where</span> <span
  m='2561020'>we</span> <span m='2561170'>have</span> <span m='2561350'>5</span>
  <span m='2561710'>numbers.</span> </p><p><span m='2564680'>That's</span> <span
  m='2564890'>actually</span> <span m='2565280'>a</span> <span
  m='2565370'>check</span> <span m='2565820'>that</span> <span
  m='2568910'>I</span> <span m='2569000'>don't</span> <span
  m='2569150'>know</span> <span m='2569330'>if</span> <span
  m='2569540'>you</span> <span m='2569750'>ever</span> <span
  m='2570680'>thought</span> <span m='2570890'>about</span> <span
  m='2571190'>that</span> <span m='2571400'>in</span> <span
  m='2571550'>second</span> <span m='2571910'>grade,</span> <span
  m='2573980'>multiplying</span> <span m='2575570'>these</span> <span
  m='2575930'>numbers,</span> <span m='2577340'>multiplying</span> <span
  m='2577730'>that</span> <span m='2577940'>number</span> <span
  m='2578240'>by</span> <span m='2578480'>that</span> <span
  m='2578720'>number</span> <span m='2580820'>and</span> <span
  m='2580970'>getting</span> <span m='2581360'>some</span> <span
  m='2582020'>answer,</span> <span m='2583940'>which</span> <span
  m='2584240'>probably</span> <span m='2584630'>half</span> <span
  m='2584920'>the</span> <span m='2585050'>class</span> <span
  m='2585570'>did</span> <span m='2585790'>not</span> <span
  m='2586130'>get</span> <span m='2586910'>right.</span> <span
  m='2587960'>Then</span> <span m='2588440'>fifth</span> <span
  m='2588830'>grade,</span> <span m='2589160'>they're</span> <span
  m='2590090'>kind</span> <span m='2590300'>of</span> <span
  m='2590360'>getting</span> <span m='2590720'>it.</span> <span
  m='2592370'>But</span> <span m='2593540'>if</span> <span
  m='2593780'>they</span> <span m='2593930'>knew</span> <span
  m='2594290'>a</span> <span m='2594410'>check,</span> <span
  m='2595010'>so</span> <span m='2595220'>they</span> <span
  m='2595370'>could</span> <span m='2595640'>have</span> <span
  m='2595760'>just</span> <span m='2596060'>added</span> <span
  m='2596450'>these</span> <span m='2596810'>numbers</span> <span
  m='2597230'>to</span> <span m='2597310'>get</span> <span
  m='2597570'>11,</span> <span m='2598390'>added</span> <span
  m='2598670'>these</span> <span m='2599000'>numbers</span> <span
  m='2599390'>to</span> <span m='2599480'>get</span> <span m='2599930'>6,</span>
  <span m='2600740'>multiplied</span> <span m='2601310'>those</span> <span
  m='2601610'>to</span> <span m='2601700'>get</span> <span
  m='2601850'>66,</span> <span m='2602630'>and</span> <span
  m='2603050'>check</span> <span m='2603410'>that</span> <span
  m='2605120'>those</span> <span m='2605450'>added</span> <span
  m='2605645'>to</span> <span m='2605840'>66.</span> <span
  m='2608840'>That</span> <span m='2609130'>never</span> <span
  m='2609490'>occurred</span> <span m='2609790'>to</span> <span
  m='2609910'>me</span> <span m='2610270'>I</span> <span
  m='2610390'>admit</span> <span m='2610870'>in</span> <span
  m='2611470'>second</span> <span m='2611830'>grade</span> <span
  m='2612150'>either.</span> <span m='2614780'>But</span> <span
  m='2615280'>now</span> <span m='2615550'>you</span> <span
  m='2615700'>know.</span> <span m='2616450'>Now</span> <span
  m='2616690'>you</span> <span m='2616840'>can</span> <span
  m='2617500'>pass</span> <span m='2617830'>second</span> <span
  m='2618220'>grade.</span> </p><p><span m='2620830'>So</span> <span
  m='2621100'>this</span> <span m='2621400'>is</span> <span
  m='2623570'>the</span> <span m='2623740'>picture</span> <span
  m='2624250'>for</span> <span m='2624550'>cyclic</span> <span
  m='2624970'>convolution.</span> <span m='2626200'>And</span> <span
  m='2626380'>I</span> <span m='2626470'>just</span> <span
  m='2626740'>have</span> <span m='2626920'>a</span> <span
  m='2626980'>few</span> <span m='2627250'>minutes</span> <span
  m='2627580'>left</span> <span m='2627850'>to</span> <span
  m='2628000'>tell</span> <span m='2628240'>you</span> <span
  m='2628390'>about</span> <span m='2628630'>the</span> <span
  m='2628810'>eigenvalues</span> <span m='2629770'>and</span> <span
  m='2629920'>eigenvectors</span> <span m='2631510'>of</span> <span
  m='2631720'>these</span> <span m='2632170'>matrices.</span> <span
  m='2634700'>So</span> <span m='2634810'>what</span> <span
  m='2635320'>can</span> <span m='2635560'>you</span> <span
  m='2635680'>tell</span> <span m='2635920'>me</span> <span
  m='2636070'>about</span> <span m='2636310'>the</span> <span
  m='2636460'>eigenvalues--</span> <span m='2637350'>or</span> <span
  m='2638740'>say,</span> <span m='2639040'>the</span> <span
  m='2639190'>eigenvectors?</span> </p><p><span m='2641450'>I</span> <span
  m='2641610'>have</span> <span m='2641740'>a</span> <span
  m='2641800'>matrix</span> <span m='2642340'>P.</span> <span
  m='2643180'>It</span> <span m='2643540'>happens</span> <span
  m='2643930'>to</span> <span m='2644020'>be</span> <span m='2644170'>a</span>
  <span m='2644260'>permutation</span> <span m='2645070'>matrix.</span> <span
  m='2646150'>But</span> <span m='2646720'>it's</span> <span
  m='2646870'>a</span> <span m='2646930'>matrix.</span> </p><p><span
  m='2648310'>Then</span> <span m='2648520'>I</span> <span
  m='2649300'>take</span> <span m='2649600'>this</span> <span
  m='2649870'>polynomial</span> <span m='2650740'>in</span> <span
  m='2650890'>the</span> <span m='2650980'>matrix.</span> <span
  m='2653650'>What</span> <span m='2653890'>can</span> <span
  m='2654100'>you</span> <span m='2654220'>tell</span> <span
  m='2654430'>me</span> <span m='2654580'>about</span> <span
  m='2654880'>eigenvectors</span> <span m='2656050'>of</span> <span
  m='2656200'>this</span> <span m='2657430'>matrix</span> <span
  m='2657990'>C?</span> <span m='2660290'>So</span> <span m='2661850'>my</span>
  <span m='2662030'>C</span> <span m='2662420'>looks</span> <span
  m='2662780'>like</span> <span m='2664850'>that.</span> <span
  m='2665120'>And</span> <span m='2665240'>I'm</span> <span
  m='2665420'>asking</span> <span m='2665780'>you</span> <span
  m='2665900'>for</span> <span m='2666050'>the</span> <span
  m='2666200'>eigenvectors</span> <span m='2667070'>of</span> <span
  m='2667190'>that.</span> <span m='2668240'>And</span> <span
  m='2668420'>I'm</span> <span m='2668570'>saying</span> <span
  m='2668900'>that</span> <span m='2669050'>that</span> <span
  m='2669530'>is</span> <span m='2672530'>a</span> <span
  m='2672590'>polynomial,</span> <span m='2673520'>sum</span> <span
  m='2673790'>of</span> <span m='2674660'>powers</span> <span
  m='2675290'>of</span> <span m='2675440'>P,</span> <span
  m='2677730'>like</span> <span m='2677960'>so.</span> <span
  m='2679570'>In</span> <span m='2679690'>fact,</span> <span
  m='2680150'>the</span> <span m='2680710'>numbers</span> <span
  m='2681250'>here</span> <span m='2681490'>just</span> <span
  m='2681850'>come</span> <span m='2682180'>off</span> <span
  m='2682460'>the</span> <span m='2682600'>diagonals.</span> <span
  m='2684460'>So</span> <span m='2684670'>what</span> <span
  m='2684880'>about</span> <span m='2685090'>the</span> <span
  m='2685220'>eigenvectors?</span> </p><p><span m='2687610'>AUDIENCE:</span>
  <span m='2687849'>All</span> <span m='2688088'>1s.</span> </p><p><span
  m='2690000'>GILBERT STRANG:</span> <span m='2690127'>Well,</span> <span
  m='2690510'>that</span> <span m='2690780'>is</span> <span
  m='2690960'>an</span> <span m='2691100'>eigenvector.</span> <span
  m='2692070'>That's</span> <span m='2692370'>true.</span> <span
  m='2692700'>The</span> <span m='2692820'>vector</span> <span
  m='2693180'>of</span> <span m='2693300'>all</span> <span m='2693510'>1s</span>
  <span m='2693960'>will</span> <span m='2694230'>be</span> <span
  m='2694410'>an</span> <span m='2694560'>eigenvector.</span> <span
  m='2696000'>With</span> <span m='2696210'>what</span> <span
  m='2696450'>eigenvalue</span> <span m='2697290'>actually?</span> </p><p><span
  m='2698560'>AUDIENCE:</span> <span m='2698780'>C2</span> <span
  m='2699000'>plus</span> <span m='2699440'>C1.</span> </p><p><span
  m='2700320'>GILBERT STRANG:</span> <span m='2700470'>Yeah.</span> <span
  m='2701760'>So</span> <span m='2702510'>what</span> <span m='2702870'>I</span>
  <span m='2702970'>want</span> <span m='2703580'>you</span> <span
  m='2703830'>to</span> <span m='2704100'>see</span> <span m='2704700'>is</span>
  <span m='2705690'>the</span> <span m='2705900'>eigenvectors</span> <span
  m='2707490'>of</span> <span m='2707820'>C</span> <span m='2708420'>are</span>
  <span m='2708570'>the</span> <span m='2708720'>same</span> <span
  m='2709170'>as</span> <span m='2709320'>the</span> <span
  m='2709440'>eigenvectors</span> <span m='2710190'>of</span> <span
  m='2710310'>P.</span> <span m='2711300'>If</span> <span m='2711450'>I</span>
  <span m='2711600'>have</span> <span m='2711780'>an</span> <span
  m='2712050'>eigenvector</span> <span m='2712590'>of</span> <span
  m='2712710'>P,</span> <span m='2713070'>that's</span> <span
  m='2713370'>also</span> <span m='2713700'>an</span> <span
  m='2713820'>eigenvector</span> <span m='2714420'>of</span> <span
  m='2714510'>P</span> <span m='2714750'>squared</span> <span
  m='2715230'>and</span> <span m='2715350'>P</span> <span
  m='2715590'>cubed</span> <span m='2716070'>in</span> <span
  m='2716150'>a</span> <span m='2716230'>combination.</span> <span
  m='2718050'>So</span> <span m='2718470'>eigenvectors</span> <span
  m='2721920'>of</span> <span m='2723270'>P</span> <span m='2724144'>are</span>
  <span m='2726330'>eigenvectors</span> <span m='2728670'>of</span> <span
  m='2729120'>C.</span> </p><p><span m='2732270'>So</span> <span
  m='2732480'>then</span> <span m='2732690'>the</span> <span
  m='2732810'>question</span> <span m='2733290'>is,</span> <span
  m='2733590'>what</span> <span m='2733890'>are</span> <span
  m='2734010'>the</span> <span m='2734160'>eigenvectors</span> <span
  m='2734940'>of</span> <span m='2735030'>P?</span> <span m='2736260'>You</span>
  <span m='2736590'>see</span> <span m='2736770'>what</span> <span
  m='2736920'>I</span> <span m='2736980'>mean?</span> <span
  m='2738710'>It</span> <span m='2738870'>didn't</span> <span
  m='2739200'>really</span> <span m='2739620'>matter</span> <span
  m='2740580'>if</span> <span m='2740730'>I'm</span> <span
  m='2741750'>looking</span> <span m='2742140'>for</span> <span
  m='2742380'>eigenvectors</span> <span m='2743280'>what</span> <span
  m='2743490'>those</span> <span m='2743760'>numbers</span> <span
  m='2744210'>were.</span> <span m='2745670'>The</span> <span
  m='2745760'>point</span> <span m='2746120'>is</span> <span
  m='2747200'>that</span> <span m='2747410'>those</span> <span
  m='2747860'>numbers</span> <span m='2748370'>were</span> <span
  m='2748530'>constant</span> <span m='2749180'>on</span> <span
  m='2749330'>diagonals</span> <span m='2750620'>and</span> <span
  m='2750800'>that</span> <span m='2751430'>therefore</span> <span
  m='2753490'>it's</span> <span m='2753740'>built</span> <span
  m='2754070'>out</span> <span m='2754220'>of</span> <span m='2754280'>1</span>
  <span m='2754520'>matrix</span> <span m='2755090'>P,</span> <span
  m='2756410'>built</span> <span m='2756680'>out</span> <span
  m='2756830'>of</span> <span m='2756920'>1</span> <span
  m='2757130'>matrix</span> <span m='2757610'>P.</span> <span
  m='2757940'>So</span> <span m='2758270'>all</span> <span m='2758570'>I</span>
  <span m='2758660'>have</span> <span m='2758810'>to</span> <span
  m='2758930'>know</span> <span m='2759170'>is</span> <span
  m='2759380'>the</span> <span m='2759530'>eigenvectors</span> <span
  m='2760430'>of</span> <span m='2760610'>P.</span> <span m='2762840'>So</span>
  <span m='2763020'>that's</span> <span m='2763290'>the</span> <span
  m='2763410'>final</span> <span m='2764160'>step</span> <span
  m='2764610'>here.</span> <span m='2765390'>What</span> <span
  m='2765600'>are</span> <span m='2765690'>the</span> <span
  m='2765870'>eigenvectors</span> <span m='2766890'>and</span> <span
  m='2767100'>eigenvalues</span> <span m='2768420'>of</span> <span
  m='2768510'>P?</span> </p><p><span m='2773710'>So</span> <span
  m='2774310'>eigenvectors,</span> <span m='2777340'>eigenvalues</span> <span
  m='2780010'>for</span> <span m='2780430'>P</span> <span
  m='2780960'>equal</span> <span m='2784090'>1,</span> <span
  m='2784720'>1,</span> <span m='2785320'>1,</span> <span m='2785800'>and</span>
  <span m='2785980'>1,</span> <span m='2786520'>say.</span> <span
  m='2787660'>And</span> <span m='2788050'>otherwise</span> <span
  m='2788560'>zeros.</span> <span m='2794140'>So</span> <span
  m='2794350'>somebody</span> <span m='2794740'>mentioned</span> <span
  m='2795850'>that</span> <span m='2796030'>the</span> <span
  m='2796150'>vector</span> <span m='2796600'>of</span> <span
  m='2797290'>1,</span> <span m='2797620'>1,</span> <span m='2797860'>1,</span>
  <span m='2798130'>1,</span> <span m='2799900'>that</span> <span
  m='2800170'>is</span> <span m='2800410'>an</span> <span
  m='2800790'>eigenvector,</span> <span m='2802510'>because</span> <span
  m='2802960'>if</span> <span m='2803080'>I</span> <span m='2803170'>do</span>
  <span m='2803380'>that</span> <span m='2803590'>multiplication,</span> <span
  m='2804340'>it</span> <span m='2804490'>shifts</span> <span
  m='2804970'>this</span> <span m='2805210'>vector</span> <span
  m='2805630'>down</span> <span m='2806050'>and</span> <span
  m='2806260'>cyclically</span> <span m='2806950'>around.</span> <span
  m='2807380'>But</span> <span m='2807970'>that</span> <span
  m='2808150'>just</span> <span m='2808450'>brings</span> <span
  m='2808840'>back</span> <span m='2809110'>the</span> <span
  m='2809260'>same</span> <span m='2810880'>vector.</span> <span
  m='2811400'>So</span> <span m='2811570'>lambda</span> <span
  m='2812110'>is</span> <span m='2812320'>1.</span> <span m='2813750'>And</span>
  <span m='2813910'>that's</span> <span m='2814300'>an</span> <span
  m='2814870'>eigenvector</span> <span m='2820110'>with</span> <span
  m='2820350'>eigenvalue</span> <span m='2821010'>1.</span> <span
  m='2823560'>But</span> <span m='2823770'>this</span> <span
  m='2824010'>is</span> <span m='2824130'>a</span> <span m='2824190'>4</span>
  <span m='2824430'>by</span> <span m='2824640'>4</span> <span
  m='2824990'>matrix.</span> </p><p><span m='2825930'>AUDIENCE:</span> <span
  m='2826165'>1</span> <span m='2826400'>minus</span> <span
  m='2826870'>1,</span> <span m='2827340'>1</span> <span
  m='2827575'>minus</span> <span m='2827810'>1.</span> </p><p><span
  m='2828280'>GILBERT STRANG:</span> <span m='2828420'>Ah,</span> <span
  m='2828880'>now</span> <span m='2828960'>you're</span> <span
  m='2829140'>guessing</span> <span m='2829500'>1</span> <span
  m='2829770'>minus</span> <span m='2830160'>1,</span> <span
  m='2830390'>1</span> <span m='2830640'>minus</span> <span
  m='2831070'>1.</span> <span m='2833830'>Interesting.</span> <span
  m='2836220'>Well,</span> <span m='2836880'>tell</span> <span
  m='2837120'>me</span> <span m='2837270'>an</span> <span
  m='2837520'>eigenvector</span> <span m='2838080'>for</span> <span
  m='2838290'>minus</span> <span m='2838545'>1.</span> <span
  m='2843102'>Do</span> <span m='2843580'>you</span> <span
  m='2843740'>want</span> <span m='2843950'>to</span> <span
  m='2844250'>just</span> <span m='2845240'>alternate</span> <span
  m='2845940'>signs</span> <span m='2846430'>there?</span> <span
  m='2847780'>So</span> <span m='2848020'>let</span> <span m='2848200'>me</span>
  <span m='2848650'>let</span> <span m='2848830'>me</span> <span
  m='2848980'>do</span> <span m='2849190'>that</span> <span
  m='2849400'>multiplication</span> <span m='2852720'>times</span> <span
  m='2853730'>1</span> <span m='2854160'>minus</span> <span
  m='2854580'>1,</span> <span m='2854970'>1</span> <span
  m='2855270'>minus</span> <span m='2855585'>1.</span> </p><p><span
  m='2856860'>Of</span> <span m='2856950'>course,</span> <span
  m='2857220'>I</span> <span m='2857340'>don't</span> <span
  m='2857490'>have</span> <span m='2857670'>to</span> <span
  m='2857790'>do</span> <span m='2857970'>that</span> <span
  m='2858300'>multiplication.</span> <span m='2859350'>I'm</span> <span
  m='2859920'>just</span> <span m='2860130'>going</span> <span
  m='2860230'>to</span> <span m='2860340'>shift</span> <span
  m='2860700'>this.</span> <span m='2861540'>So</span> <span
  m='2861690'>I'm</span> <span m='2861780'>going</span> <span
  m='2861900'>to</span> <span m='2861990'>shift</span> <span
  m='2862440'>that</span> <span m='2862710'>down,</span> <span
  m='2863790'>1</span> <span m='2864270'>minus</span> <span m='2864660'>1</span>
  <span m='2865060'>and</span> <span m='2866340'>cyclically</span> <span
  m='2867010'>around.</span> </p><p><span m='2868180'>And</span> <span
  m='2868320'>now,</span> <span m='2868560'>what's</span> <span
  m='2868910'>the</span> <span m='2869070'>eigenvalue?</span> <span
  m='2871150'>It</span> <span m='2871320'>is</span> <span m='2871530'>an</span>
  <span m='2871680'>eigenvector.</span> <span m='2873540'>And</span> <span
  m='2877300'>what</span> <span m='2877500'>multiple</span> <span
  m='2878070'>of</span> <span m='2878190'>that</span> <span
  m='2878430'>vector</span> <span m='2878850'>gives</span> <span
  m='2880080'>that</span> <span m='2880260'>vector?</span> </p><p><span
  m='2880770'>AUDIENCE:</span> <span m='2880951'>Minus</span> <span
  m='2881133'>1.</span> </p><p><span m='2881860'>GILBERT STRANG:</span> <span
  m='2882055'>Minus</span> <span m='2882250'>1.</span> <span
  m='2887740'>So</span> <span m='2887940'>that</span> <span
  m='2888090'>was</span> <span m='2888270'>a</span> <span
  m='2888360'>good</span> <span m='2888600'>idea.</span> <span
  m='2890980'>But</span> <span m='2891200'>the</span> <span
  m='2891800'>rest</span> <span m='2892100'>of</span> <span
  m='2892190'>what</span> <span m='2892370'>you</span> <span
  m='2892490'>said</span> <span m='2892730'>was</span> <span
  m='2893420'>a</span> <span m='2893510'>bad</span> <span
  m='2893780'>idea,</span> <span m='2895520'>because</span> <span
  m='2898950'>the</span> <span m='2899180'>next</span> <span
  m='2899530'>eigenvectors</span> <span m='2900900'>got</span> <span
  m='2901120'>to</span> <span m='2901250'>be</span> <span
  m='2901430'>somewhere</span> <span m='2901880'>else.</span> <span
  m='2904500'>We've</span> <span m='2904740'>just</span> <span
  m='2905010'>got</span> <span m='2905190'>one</span> <span
  m='2905550'>eigenvalue</span> <span m='2906270'>there</span> <span
  m='2906570'>and</span> <span m='2906690'>one</span> <span
  m='2906930'>there.</span> <span m='2907200'>And</span> <span
  m='2907290'>we</span> <span m='2907440'>haven't</span> <span
  m='2907740'>got</span> <span m='2908940'>the</span> <span
  m='2909090'>other</span> <span m='2909330'>two.</span> <span
  m='2909850'>So</span> <span m='2909930'>what</span> <span
  m='2910170'>are</span> <span m='2910260'>the</span> <span
  m='2910440'>other</span> <span m='2910710'>two</span> <span
  m='2911100'>eigenvalues</span> <span m='2912450'>of</span> <span
  m='2912690'>this</span> <span m='2914010'>permutation</span> <span
  m='2914415'>matrix?</span> </p><p><span m='2916230'>AUDIENCE:</span> <span
  m='2916465'>1.</span> </p><p><span m='2918580'>GILBERT STRANG:</span> <span
  m='2918752'>1,</span> <span m='2919270'>that's</span> <span
  m='2919600'>right.</span> <span m='2920140'>We're</span> <span
  m='2920470'>in</span> <span m='2920650'>a</span> <span
  m='2920980'>circulant</span> <span m='2921760'>world.</span> <span
  m='2922750'>Draw</span> <span m='2923110'>a</span> <span
  m='2923140'>circle.</span> <span m='2924490'>So</span> <span
  m='2924670'>the</span> <span m='2924820'>eigenvectors</span> <span
  m='2925930'>are</span> <span m='2926320'>the</span> <span
  m='2926530'>four</span> <span m='2927010'>roots</span> <span
  m='2928270'>of</span> <span m='2928480'>1.</span> <span
  m='2929530'>Complex.</span> <span m='2930660'>So</span> <span
  m='2930910'>1</span> <span m='2931420'>and</span> <span
  m='2931570'>minus</span> <span m='2932020'>1</span> <span
  m='2932290'>you've</span> <span m='2932440'>got.</span> <span
  m='2933280'>These</span> <span m='2933550'>are</span> <span
  m='2933610'>the</span> <span m='2933730'>lambdas.</span> <span
  m='2935230'>But</span> <span m='2935440'>the</span> <span
  m='2935590'>other</span> <span m='2935830'>ones</span> <span
  m='2936070'>are</span> <span m='2936220'>I</span> <span m='2936580'>and</span>
  <span m='2936730'>minus</span> <span m='2937160'>I.</span> <span
  m='2938160'>Yeah.</span> <span m='2938970'>Yeah.</span> </p><p><span
  m='2941050'>Why</span> <span m='2941200'>don't</span> <span
  m='2941410'>I,</span> <span m='2943030'>since</span> <span
  m='2943330'>time's</span> <span m='2943750'>up,</span> <span
  m='2944590'>let</span> <span m='2944710'>me</span> <span
  m='2944890'>leave</span> <span m='2945250'>until</span> <span
  m='2945610'>Friday</span> <span m='2946240'>the</span> <span
  m='2946450'>eigenvalues</span> <span m='2948250'>and</span> <span
  m='2948470'>eigenvectors</span> <span m='2951250'>for</span> <span
  m='2951610'>in</span> <span m='2951790'>general,</span> <span
  m='2954520'>for</span> <span m='2955030'>arbitrary</span> <span
  m='2955720'>size.</span> <span m='2956710'>But</span> <span
  m='2957190'>that's</span> <span m='2957640'>a</span> <span
  m='2957730'>picture</span> <span m='2958300'>of</span> <span
  m='2958450'>the</span> <span m='2958630'>eigen--</span> <span
  m='2959380'>we're</span> <span m='2960250'>close</span> <span
  m='2961480'>to</span> <span m='2961630'>the</span> <span
  m='2961780'>eigenvectors</span> <span m='2962530'>and</span> <span
  m='2962650'>eigenvalues</span> <span m='2963460'>of</span> <span
  m='2963610'>every--</span> <span m='2964690'>all</span> <span
  m='2965200'>circulants</span> <span m='2965980'>have</span> <span
  m='2966160'>the</span> <span m='2966280'>same</span> <span
  m='2966880'>eigenvectors.</span> <span m='2969070'>All</span> <span
  m='2969340'>circulants</span> <span m='2970000'>have</span> <span
  m='2970240'>that</span> <span m='2971480'>eigenvector,</span> <span
  m='2972730'>4</span> <span m='2973000'>by</span> <span m='2973180'>4.</span>
  <span m='2973900'>All</span> <span m='2974080'>circulants</span> <span
  m='2974710'>have</span> <span m='2974890'>that</span> <span
  m='2975130'>eigenvector</span> <span m='2975820'>4</span> <span
  m='2976120'>by</span> <span m='2976360'>4.</span> <span m='2976900'>And</span>
  <span m='2977050'>we'll</span> <span m='2977230'>find</span> <span
  m='2977530'>the</span> <span m='2977680'>other</span> <span
  m='2977920'>two.</span> </p><p><span m='2978610'>OK,</span> <span
  m='2979030'>so</span> <span m='2979240'>I'll</span> <span
  m='2979330'>see</span> <span m='2979570'>you</span> <span
  m='2980200'>Friday</span> <span m='2980890'>for</span> <span
  m='2981130'>those</span> <span m='2982120'>and</span> <span
  m='2982660'>the</span> <span m='2983590'>convolution</span> <span
  m='2984400'>rule,</span> <span m='2984730'>which</span> <span
  m='2985060'>is</span> <span m='2985240'>the</span> <span
  m='2986050'>most</span> <span m='2986470'>important</span> <span
  m='2986980'>rule</span> <span m='2987370'>in</span> <span
  m='2988420'>signal</span> <span m='2988810'>processing.</span> <span
  m='2989810'>OK.</span> <span m='2990110'>Thanks.</span> </p>
uid: 498c2c9321ce4bd8842ed9c6f02e8c04
type: course
layout: video
---
