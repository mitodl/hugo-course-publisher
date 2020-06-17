---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this lecture, Professor Strang
  reviews counting the free parameters in a variety of key matrices. He then
  moves on to finding saddle points from constraints and Lagrange
  multipliers.</p> <h2 class="subhead">Summary</h2> <p><strong>Topic 1:</strong>
  Find<i>&nbsp;\(n^2\)</i>&nbsp;parameters in \(L\) and \(U\), \(Q\) and \(R\),
  ...<br /> Find \((m + n - r)r\) parameters in a matrix of rank \(r\)<br />
  <strong>Topic 2:</strong> Find saddle points from constraints and Lagrange
  multipliers</p> <p>Related section in textbook: III.2</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xaSL8yFgqig
    parent_uid: 372ba2977de951f257035e929fb72095
    title: Video-YouTube-Stream
    type: Video
    uid: 27323aa67de54939a69305605eb0f6fd
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xaSL8yFgqig/default.jpg'
    parent_uid: 372ba2977de951f257035e929fb72095
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2c34c5d8c5ce4ba5bd90044f41ee2f46
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: xaSL8yFgqig
    parent_uid: 372ba2977de951f257035e929fb72095
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2893f282b9473dca0f9e8f0c6d3c77f8
  - id: xaSL8yFgqig.srt
    parent_uid: 372ba2977de951f257035e929fb72095
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-18-counting-parameters-in-svd-lu-qr-saddle-points/xaSL8yFgqig.srt
    title: 3play caption file
    type: null
    uid: 2f69ef7bdb136a4508cb2aaf0f820965
  - id: xaSL8yFgqig.pdf
    parent_uid: 372ba2977de951f257035e929fb72095
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-18-counting-parameters-in-svd-lu-qr-saddle-points/xaSL8yFgqig.pdf
    title: 3play pdf file
    type: null
    uid: ade37003589b2c2d0030ea38cea605b0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 372ba2977de951f257035e929fb72095
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8067c10b53a42c13a4d43d7808ae22f6
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 372ba2977de951f257035e929fb72095
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e4e4b95c6089963b6c66bfc445f12124
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture18_300k.mp4'
    parent_uid: 372ba2977de951f257035e929fb72095
    title: Video-Internet Archive-MP4
    type: Video
    uid: b986b2a53560cb1f179d2bb21837827c
inline_embed_id: 86917761lecture18countingparametersinsvdluqrsaddlepoints19530502
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-18-counting-parameters-in-svd-lu-qr-saddle-points
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-18-counting-parameters-in-svd-lu-qr-saddle-points
title: 'Lecture 18: Counting Parameters in SVD, LU, QR, Saddle Points'
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
  m='23080'>PROFESSOR:</span> <span m='23225'>OK.</span> <span
  m='23660'>So</span> <span m='24140'>I</span> <span m='24290'>thought</span>
  <span m='24530'>I'd</span> <span m='24710'>begin</span> <span
  m='25130'>today</span> <span m='25610'>with,</span> <span m='26720'>as</span>
  <span m='26900'>we're</span> <span m='27080'>coming</span> <span
  m='27410'>to</span> <span m='27560'>the</span> <span m='27770'>end</span>
  <span m='28070'>of</span> <span m='28220'>the</span> <span
  m='28760'>sort</span> <span m='29000'>of</span> <span m='29090'>focus</span>
  <span m='29750'>on</span> <span m='29960'>linear</span> <span
  m='30320'>algebra</span> <span m='31320'>and</span> <span
  m='31640'>moving</span> <span m='32090'>on</span> <span m='32420'>to</span>
  <span m='32910'>a</span> <span m='33040'>little</span> <span
  m='33290'>probability,</span> <span m='35340'>a</span> <span
  m='35390'>little</span> <span m='35660'>more</span> <span
  m='36230'>optimization,</span> <span m='37880'>and</span> <span
  m='38750'>a</span> <span m='38810'>lot</span> <span m='39200'>of</span> <span
  m='40190'>deep</span> <span m='40550'>learning.</span> <span
  m='42170'>So</span> <span m='42410'>this</span> <span m='42650'>was</span>
  <span m='43010'>like,</span> <span m='43280'>by</span> <span
  m='43490'>way</span> <span m='43760'>of</span> <span m='43880'>review,</span>
  <span m='44930'>to</span> <span m='45050'>write</span> <span
  m='45380'>down</span> <span m='45950'>the</span> <span m='47360'>big</span>
  <span m='47630'>factorizations</span> <span m='48770'>of</span> <span
  m='48950'>a</span> <span m='49010'>matrix.</span> </p><p><span
  m='50540'>And</span> <span m='52340'>so</span> <span m='52520'>my</span> <span
  m='52760'>idea,</span> <span m='53400'>and</span> <span m='53750'>I</span>
  <span m='53930'>kind</span> <span m='54200'>of</span> <span
  m='54320'>enjoyed</span> <span m='54830'>it,</span> <span m='55490'>is</span>
  <span m='55940'>checking</span> <span m='56600'>that</span> <span
  m='56950'>the</span> <span m='57110'>number</span> <span m='57650'>of</span>
  <span m='57800'>free</span> <span m='58160'>parameters,</span> <span
  m='59780'>say</span> <span m='60200'>an</span> <span m='60410'>L</span> <span
  m='60680'>and</span> <span m='60830'>U</span> <span m='61880'>or</span> <span
  m='62120'>a</span> <span m='62330'>Q</span> <span m='62690'>and</span> <span
  m='62840'>R</span> <span m='63320'>or</span> <span m='63980'>every--</span>
  <span m='64310'>each</span> <span m='64640'>of</span> <span
  m='64760'>those,</span> <span m='65900'>that</span> <span m='66110'>the</span>
  <span m='66230'>number</span> <span m='66530'>of</span> <span
  m='66590'>free</span> <span m='66890'>parameters</span> <span
  m='67940'>agrees</span> <span m='68510'>with</span> <span m='68840'>the</span>
  <span m='69080'>number</span> <span m='69500'>of</span> <span
  m='69590'>parameters</span> <span m='70760'>in A</span> <span
  m='71140'>itself,</span> <span m='71690'>like</span> <span m='71960'>n</span>
  <span m='72200'>squared,</span> <span m='72710'>usually.</span> </p><p><span
  m='73890'>So</span> <span m='74090'>A</span> <span m='74270'>usually</span>
  <span m='74750'>has</span> <span m='74990'>n</span> <span
  m='75230'>squared.</span> <span m='76340'>And</span> <span
  m='76520'>then</span> <span m='77300'>can</span> <span m='77600'>we</span>
  <span m='77930'>replace</span> <span m='78590'>A</span> <span
  m='79580'>if--</span> <span m='79910'>after</span> <span
  m='80210'>we've</span> <span m='80420'>computed</span> <span
  m='81020'>L</span> <span m='81140'>and</span> <span m='81340'>U,</span> <span
  m='81560'>can</span> <span m='81770'>we</span> <span m='81920'>throw</span>
  <span m='82250'>away</span> <span m='82670'>A?</span> <span
  m='83150'>Yes,</span> <span m='84110'>because</span> <span
  m='84800'>all</span> <span m='84980'>the</span> <span
  m='85160'>information</span> <span m='85940'>is</span> <span
  m='86120'>in</span> <span m='86450'>L and</span> <span m='86840'>U.</span>
  <span m='87680'>And</span> <span m='88520'>it</span> <span
  m='88640'>fills</span> <span m='89780'>that</span> <span m='90020'>same</span>
  <span m='90710'>n</span> <span m='90920'>by</span> <span m='91160'>n</span>
  <span m='91310'>matrix.</span> <span m='92520'>Well,</span> <span
  m='92720'>that's</span> <span m='93020'>kind</span> <span m='93290'>of</span>
  <span m='93410'>obvious</span> <span m='93920'>because</span> <span
  m='94400'>L</span> <span m='95420'>is</span> <span m='97440'>lower</span>
  <span m='98070'>triangular,</span> <span m='99200'>and</span> <span
  m='99380'>the</span> <span m='99470'>diagonal,</span> <span
  m='100340'>all</span> <span m='100460'>ones,</span> <span
  m='101450'>are</span> <span m='101570'>not</span> <span m='101840'>free</span>
  <span m='102140'>parameters.</span> <span m='103520'>And</span> <span
  m='103820'>U</span> <span m='104990'>is</span> <span
  m='105200'>triangular,</span> <span m='106220'>upper</span> <span
  m='106520'>triangular.</span> <span m='107780'>And</span> <span
  m='107930'>it's</span> <span m='108170'>diagonal</span> <span
  m='108560'>to</span> <span m='108950'>the</span> <span
  m='109070'>pivots.</span> <span m='110180'>Those</span> <span
  m='110510'>are</span> <span m='110780'>free</span> <span
  m='111110'>parameters</span> <span m='111770'>so</span> <span
  m='112120'>that--</span> <span m='112580'>but</span> <span
  m='112910'>can</span> <span m='113150'>I</span> <span m='113240'>just</span>
  <span m='113450'>write</span> <span m='113690'>down</span> <span
  m='113990'>the</span> <span m='114110'>count?</span> </p><p><span
  m='115490'>So</span> <span m='115820'>I'll</span> <span m='115970'>go</span>
  <span m='116180'>through</span> <span m='116450'>each</span> <span
  m='116750'>of</span> <span m='116870'>these</span> <span
  m='118250'>just</span> <span m='118730'>quickly</span> <span
  m='120080'>after</span> <span m='120530'>I've</span> <span
  m='121190'>figured</span> <span m='121640'>out</span> <span
  m='121850'>how--</span> <span m='122180'>these</span> <span
  m='122480'>are</span> <span m='123710'>sort</span> <span m='123950'>of</span>
  <span m='124010'>the</span> <span m='124880'>building</span> <span
  m='125330'>blocks.</span> <span m='126500'>So</span> <span
  m='126980'>how</span> <span m='127190'>many</span> <span
  m='127520'>free</span> <span m='127820'>parameters</span> <span
  m='128630'>are</span> <span m='128840'>there</span> <span m='129080'>in</span>
  <span m='129860'>these</span> <span m='130220'>two</span> <span
  m='130669'>triangular</span> <span m='131480'>matrices?</span> <span
  m='132740'>Well,</span> <span m='132950'>I</span> <span
  m='133040'>think</span> <span m='133310'>the</span> <span
  m='133520'>answer</span> <span m='133910'>is</span> <span
  m='134090'>1/2</span> <span m='135320'>n,</span> <span m='136040'>n</span>
  <span m='136340'>minus</span> <span m='136940'>1,</span> <span
  m='137660'>and</span> <span m='138380'>1/2</span> <span m='139220'>n,</span>
  <span m='140150'>n</span> <span m='140450'>plus</span> <span
  m='140900'>1.</span> <span m='142350'>That's</span> <span m='142580'>a</span>
  <span m='142790'>familiar</span> <span m='144190'>number.</span> <span
  m='148280'>You</span> <span m='148430'>recognize</span> <span
  m='149090'>that</span> <span m='149360'>as</span> <span m='149510'>the</span>
  <span m='149630'>sum</span> <span m='149990'>of</span> <span
  m='150140'>1</span> <span m='150500'>plus</span> <span m='150890'>2,</span>
  <span m='151370'>up</span> <span m='151550'>to</span> <span
  m='151880'>n.</span> <span m='152980'>And</span> <span m='153290'>you</span>
  <span m='153470'>have</span> <span m='154460'>one</span> <span
  m='154790'>free</span> <span m='155180'>para--</span> <span
  m='155930'>in</span> <span m='156080'>the</span> <span m='156350'>upper</span>
  <span m='156620'>triangular</span> <span m='157250'>U.</span> <span
  m='157730'>You've</span> <span m='157910'>got</span> <span
  m='158120'>one</span> <span m='158390'>free</span> <span
  m='159110'>parameter</span> <span m='159740'>up</span> <span
  m='159920'>in</span> <span m='160010'>the</span> <span
  m='160130'>corner,</span> <span m='161120'>two</span> <span
  m='161540'>in</span> <span m='161660'>the</span> <span m='161750'>next</span>
  <span m='162140'>one.</span> <span m='162470'>And</span> <span
  m='162590'>as</span> <span m='162710'>you're</span> <span
  m='162860'>coming</span> <span m='163220'>down,</span> <span
  m='163970'>you</span> <span m='164150'>end</span> <span m='164360'>up</span>
  <span m='164510'>with</span> <span m='164780'>n</span> <span
  m='165170'>on</span> <span m='165380'>the</span> <span m='165470'>main</span>
  <span m='165800'>diagonal.</span> <span m='166820'>And</span> <span
  m='166940'>they</span> <span m='167150'>add</span> <span m='167390'>up</span>
  <span m='167570'>to</span> <span m='167750'>that.</span> <span
  m='168500'>And</span> <span m='168620'>you</span> <span m='168800'>see</span>
  <span m='169130'>that</span> <span m='169340'>those</span> <span
  m='169700'>two</span> <span m='170000'>are</span> <span
  m='170840'>different</span> <span m='171320'>by</span> <span
  m='171740'>n,</span> <span m='172310'>which</span> <span m='172610'>is</span>
  <span m='173270'>what</span> <span m='173420'>we</span> <span
  m='173570'>want.</span> </p><p><span m='174620'>OK.</span> <span
  m='175520'>Diagonal.</span> <span m='176300'>The</span> <span
  m='176760'>answer</span> <span m='177190'>is</span> <span
  m='177320'>obviously</span> <span m='177920'>n.</span> </p><p><span
  m='180980'>How</span> <span m='181100'>about</span> <span
  m='181310'>the</span> <span m='181460'>eigenvector</span> <span
  m='182300'>matrix?</span> <span m='185910'>This</span> <span
  m='186150'>whole</span> <span m='186450'>exercise</span> <span
  m='187290'>is</span> <span m='187440'>like</span> <span
  m='188370'>something</span> <span m='188760'>I've</span> <span
  m='188940'>never</span> <span m='189270'>seen</span> <span
  m='189630'>in</span> <span m='189780'>a</span> <span
  m='189840'>textbook.</span> <span m='192390'>But</span> <span
  m='192840'>for</span> <span m='193050'>me</span> <span m='193290'>it</span>
  <span m='193380'>brings</span> <span m='193800'>back</span> <span
  m='194250'>all</span> <span m='194460'>these</span> <span
  m='196170'>key--</span> <span m='197910'>really</span> <span
  m='198420'>the</span> <span m='199080'>condensed</span> <span
  m='200550'>course</span> <span m='201000'>in</span> <span
  m='201150'>linear</span> <span m='201450'>algebra</span> <span
  m='201900'>is</span> <span m='202050'>on</span> <span m='202200'>that</span>
  <span m='202380'>top</span> <span m='202740'>line.</span> <span
  m='203580'>So</span> <span m='203820'>how</span> <span m='204000'>many</span>
  <span m='204360'>free</span> <span m='204660'>parameters</span> <span
  m='205380'>in</span> <span m='205530'>an</span> <span
  m='205680'>eigenvector</span> <span m='206580'>matrix?</span> </p><p><span
  m='207760'>OK.</span> <span m='208620'>And</span> <span m='208740'>of</span>
  <span m='208830'>course,</span> <span m='209670'>if</span> <span
  m='209970'>you're</span> <span m='210510'>sort</span> <span
  m='210780'>of</span> <span m='210900'>thinking,</span> <span
  m='211400'>what's</span> <span m='212310'>the</span> <span
  m='212790'>rule</span> <span m='213180'>for</span> <span
  m='213480'>free</span> <span m='214020'>parameters?</span> <span
  m='216980'>My</span> <span m='217250'>answer</span> <span m='217670'>is</span>
  <span m='217820'>going</span> <span m='217980'>to</span> <span
  m='218090'>be,</span> <span m='219410'>for</span> <span m='219590'>the</span>
  <span m='219710'>number</span> <span m='220010'>of</span> <span
  m='220070'>free</span> <span m='220430'>parameters,</span> <span
  m='221010'>so</span> <span m='221060'>this</span> <span m='221270'>is</span>
  <span m='221390'>an</span> <span m='221540'>n</span> <span
  m='221720'>by</span> <span m='221960'>n</span> <span m='222140'>matrix</span>
  <span m='222740'>with</span> <span m='223010'>the</span> <span
  m='223130'>n</span> <span m='223370'>eigenvectors</span> <span
  m='224270'>in</span> <span m='224420'>it.</span> <span m='226360'>But</span>
  <span m='226600'>there's</span> <span m='226870'>a</span> <span
  m='226960'>certain</span> <span m='228100'>freedom</span> <span
  m='228730'>there.</span> <span m='230250'>And</span> <span
  m='230480'>what</span> <span m='230690'>is</span> <span
  m='230870'>that?</span> <span m='231290'>What</span> <span
  m='231560'>freedom</span> <span m='232040'>do</span> <span
  m='232160'>we</span> <span m='232310'>have</span> <span m='232670'>in</span>
  <span m='232820'>choosing</span> <span m='233330'>the</span> <span
  m='233480'>eigenvector</span> <span m='234290'>matrix?</span> </p><p><span
  m='236540'>Every</span> <span m='236900'>eigenvector</span> <span
  m='237740'>can</span> <span m='238040'>be</span> <span
  m='238190'>multiplied</span> <span m='238940'>by</span> <span
  m='240250'>a</span> <span m='240350'>scalar.</span> <span m='241730'>If</span>
  <span m='241910'>x</span> <span m='242180'>is</span> <span
  m='242360'>an</span> <span m='242510'>eigenvector,</span> <span
  m='243260'>so</span> <span m='243530'>is</span> <span m='243710'>2x.</span>
  <span m='244250'>So</span> <span m='244490'>is</span> <span
  m='244610'>3x.</span> <span m='245540'>So</span> <span m='246170'>we</span>
  <span m='246320'>could</span> <span m='247370'>make</span> <span
  m='247640'>a</span> <span m='247700'>convention</span> <span
  m='248105'>that</span> <span m='248510'>the</span> <span
  m='248870'>first</span> <span m='249230'>component</span> <span
  m='249740'>was</span> <span m='249950'>always</span> <span
  m='250340'>1.</span> <span m='251570'>Maybe</span> <span
  m='251840'>that</span> <span m='252020'>wouldn't</span> <span
  m='252290'>be</span> <span m='252500'>the</span> <span m='252920'>most</span>
  <span m='253370'>intelligent</span> <span m='254390'>convention</span> <span
  m='255080'>in</span> <span m='255170'>the</span> <span
  m='255260'>world.</span> <span m='256140'>But</span> <span
  m='256250'>it</span> <span m='256310'>would</span> <span
  m='256519'>show</span> <span m='256850'>that</span> <span
  m='257000'>that</span> <span m='257690'>top</span> <span m='258019'>row</span>
  <span m='258290'>of</span> <span m='258440'>ones</span> <span
  m='259610'>were</span> <span m='260149'>not</span> <span m='260450'>to</span>
  <span m='260600'>be</span> <span m='260779'>counted.</span> <span
  m='261320'>So</span> <span m='261560'>I</span> <span m='261740'>get</span>
  <span m='262040'>n</span> <span m='262380'>squared</span> <span
  m='262790'>minus</span> <span m='263330'>n</span> <span m='264290'>for</span>
  <span m='264470'>that.</span> </p><p><span m='266180'>Oh,</span> <span
  m='266330'>yeah.</span> <span m='266570'>Well,</span> <span
  m='266840'>having</span> <span m='267140'>done</span> <span
  m='267350'>those</span> <span m='267680'>two,</span> <span
  m='268670'>let</span> <span m='268820'>me</span> <span m='269030'>look</span>
  <span m='269300'>at</span> <span m='270500'>this</span> <span
  m='270770'>one.</span> <span m='272240'>Does</span> <span
  m='272480'>that</span> <span m='272690'>come</span> <span
  m='272990'>out</span> <span m='273710'>a</span> <span m='273800'>total</span>
  <span m='274220'>of n</span> <span m='274490'>squared?</span> <span
  m='275090'>Yes,</span> <span m='276030'>because</span> <span
  m='276520'>the</span> <span m='276720'>eigenvector</span> <span
  m='277520'>x</span> <span m='278510'>has</span> <span m='278780'>n</span>
  <span m='278960'>squared</span> <span m='279350'>minus</span> <span
  m='279605'>n</span> <span m='280100'>by</span> <span m='280310'>this</span>
  <span m='280640'>reasoning,</span> <span m='281970'>little</span> <span
  m='282380'>hokey</span> <span m='282890'>reasoning</span> <span
  m='283430'>that</span> <span m='283580'>I</span> <span m='283730'>just</span>
  <span m='284120'>gave.</span> <span m='285050'>And</span> <span
  m='285200'>then</span> <span m='285440'>there</span> <span m='285680'>are
  n</span> <span m='285980'>more</span> <span m='286430'>for</span> <span
  m='286700'>the</span> <span m='287570'>eigenvalue</span> <span
  m='288710'>matrix.</span> <span m='289490'>And</span> <span
  m='289700'>there's</span> <span m='290930'>nothing</span> <span
  m='291410'>left</span> <span m='291770'>for</span> <span m='292040'>the</span>
  <span m='292220'>eigen--</span> <span m='292730'>the</span> <span
  m='292910'>inverse</span> <span m='293900'>because</span> <span
  m='294350'>it's</span> <span m='294590'>determined</span> <span
  m='295190'>by</span> <span m='295440'>x.</span> <span m='295760'>So</span>
  <span m='296000'>do</span> <span m='296090'>you</span> <span
  m='296180'>see</span> <span m='296450'>the</span> <span
  m='296600'>count</span> <span m='297740'>adding</span> <span
  m='298130'>up</span> <span m='298250'>to</span> <span m='298370'>n</span>
  <span m='298580'>squared</span> <span m='299060'>for</span> <span
  m='299240'>those?</span> </p><p><span m='300650'>Now,</span> <span
  m='300950'>I</span> <span m='301100'>left</span> <span m='301430'>open</span>
  <span m='301760'>the</span> <span m='301880'>orthogonal</span> <span
  m='302600'>one.</span> <span m='302950'>I</span> <span m='303020'>think</span>
  <span m='303290'>we</span> <span m='303440'>kind</span> <span
  m='303680'>of</span> <span m='304250'>talked</span> <span
  m='304640'>about</span> <span m='304940'>that</span> <span m='305210'>during
  the--</span> <span m='306110'>when</span> <span m='306560'>we</span> <span
  m='306680'>met</span> <span m='306980'>it.</span> <span m='308120'>And</span>
  <span m='308390'>it's</span> <span m='309260'>a</span> <span
  m='309290'>little</span> <span m='309920'>less</span> <span
  m='310400'>obvious.</span> <span m='310970'>But</span> <span
  m='311210'>do</span> <span m='311360'>you</span> <span
  m='311420'>remember?</span> <span m='312140'>So</span> <span
  m='312350'>I'm</span> <span m='312500'>talking</span> <span
  m='312830'>about</span> <span m='313040'>an</span> <span m='313160'>n</span>
  <span m='313370'>by</span> <span m='313670'>n</span> <span
  m='314000'>orthogonal</span> <span m='314600'>matrix,</span> <span
  m='315300'>Q.</span> <span m='317150'>So</span> <span m='317510'>how</span>
  <span m='317690'>many</span> <span m='317990'>free</span> <span
  m='318230'>parameters</span> <span m='318920'>in</span> <span
  m='319130'>column</span> <span m='319520'>one?</span> <span
  m='320900'>That</span> <span m='321410'>column</span> <span
  m='321830'>is</span> <span m='322010'>what</span> <span m='322160'>we</span>
  <span m='322310'>always</span> <span m='322640'>call</span> <span
  m='322910'>Q1.</span> <span m='324410'>Does</span> <span m='324680'>it</span>
  <span m='324800'>have</span> <span m='325070'>n</span> <span
  m='325340'>free</span> <span m='325640'>parameters?</span> <span
  m='326390'>Or</span> <span m='326570'>is</span> <span m='326750'>there</span>
  <span m='326960'>a</span> <span m='327050'>condition</span> <span
  m='328610'>that</span> <span m='329300'>cuts</span> <span
  m='329620'>that</span> <span m='329870'>back?</span> </p><p><span
  m='331280'>There</span> <span m='331550'>is</span> <span m='331850'>a</span>
  <span m='333080'>condition,</span> <span m='333710'>right?</span> <span
  m='334020'>And</span> <span m='334100'>what's</span> <span
  m='334400'>the</span> <span m='334490'>condition</span> <span
  m='335090'>on</span> <span m='335240'>the</span> <span m='335330'>first</span>
  <span m='335660'>column</span> <span m='336440'>that</span> <span
  m='337070'>removes</span> <span m='338210'>one</span> <span
  m='338480'>parameter?</span> <span m='340780'>It's</span> <span
  m='341590'>normalized.</span> <span m='342400'>Its</span> <span
  m='342610'>length</span> <span m='342970'>is</span> <span m='343150'>1.</span>
  <span m='343900'>So</span> <span m='344110'>I</span> <span
  m='344230'>only</span> <span m='344470'>get</span> <span m='344920'>n</span>
  <span m='345160'>minus</span> <span m='345580'>1</span> <span
  m='347140'>from</span> <span m='347380'>the</span> <span
  m='347500'>first</span> <span m='347860'>column.</span> <span
  m='349560'>And</span> <span m='349690'>now</span> <span m='350350'>if</span>
  <span m='350560'>I</span> <span m='350710'>move</span> <span
  m='351010'>over</span> <span m='351250'>to</span> <span m='351370'>the</span>
  <span m='351520'>second</span> <span m='351880'>column,</span> <span
  m='352330'>how</span> <span m='352450'>many</span> <span
  m='352720'>free</span> <span m='352990'>parameters</span> <span
  m='353590'>there?</span> <span m='355030'>Again,</span> <span
  m='355450'>it's</span> <span m='355660'>a</span> <span m='355720'>unit</span>
  <span m='356080'>vector.</span> <span m='357350'>But</span> <span
  m='357520'>also,</span> <span m='358210'>it</span> <span m='358450'>is</span>
  <span m='360190'>orthogonal</span> <span m='360790'>to</span> <span
  m='360910'>the</span> <span m='361030'>first.</span> <span
  m='362290'>So</span> <span m='362900'>two</span> <span
  m='363160'>parameters</span> <span m='363700'>got</span> <span
  m='363940'>you--</span> <span m='364210'>two</span> <span
  m='364630'>rules</span> <span m='365200'>got</span> <span
  m='365980'>imposed.</span> <span m='366760'>And</span> <span
  m='366880'>two</span> <span m='367060'>parameters</span> <span
  m='367660'>got</span> <span m='367870'>removed.</span> <span
  m='368860'>So</span> <span m='369130'>this</span> <span m='369370'>is</span>
  <span m='369520'>n</span> <span m='369730'>minus</span> <span
  m='370150'>2.</span> <span m='371050'>And</span> <span m='371200'>then</span>
  <span m='371470'>finally,</span> <span m='372110'>whatever.</span> <span
  m='372880'>So</span> <span m='373120'>I</span> <span m='373270'>think</span>
  <span m='373570'>that</span> <span m='373780'>that--</span> <span
  m='374380'>sum</span> <span m='374800'>of</span> <span m='374950'>these</span>
  <span m='375310'>guys</span> <span m='375790'>is</span> <span
  m='375970'>exactly</span> <span m='376630'>the</span> <span
  m='376750'>same</span> <span m='377220'>that</span> <span m='377320'>we</span>
  <span m='377500'>had</span> <span m='377800'>up</span> <span
  m='377980'>here.</span> <span m='378910'>I</span> <span
  m='379000'>think</span> <span m='379270'>it's</span> <span
  m='379480'>also</span> <span m='379870'>1/2</span> <span m='381010'>n,</span>
  <span m='381780'>n</span> <span m='382060'>minus</span> <span
  m='382510'>1,</span> <span m='382930'>or</span> <span m='383350'>1/2n</span>
  <span m='384790'>squared</span> <span m='385180'>minus</span> <span
  m='385600'>n.</span> <span m='386290'>Yeah.</span> <span
  m='386940'>Yeah,</span> <span m='387160'>so</span> <span m='387400'>not</span>
  <span m='387700'>as</span> <span m='387850'>many</span> <span
  m='388150'>as</span> <span m='388330'>you</span> <span m='388420'>might</span>
  <span m='388690'>think</span> <span m='389020'>because</span> <span
  m='389320'>the</span> <span m='389860'>matrix</span> <span
  m='390430'>is</span> <span m='391220'>size</span> <span m='391640'>n</span>
  <span m='391870'>squared.</span> </p><p><span m='392930'>Now,</span> <span
  m='393310'>can</span> <span m='393550'>I</span> <span m='393640'>use</span>
  <span m='394030'>those?</span> <span m='395380'>Because</span> <span
  m='395590'>these</span> <span m='395890'>are</span> <span
  m='396010'>the--</span> <span m='397090'>like</span> <span
  m='397360'>the</span> <span m='397480'>building</span> <span
  m='397930'>blocks.</span> <span m='398770'>Can</span> <span
  m='398950'>I</span> <span m='399070'>just</span> <span m='399310'>check</span>
  <span m='399670'>these?</span> <span m='400100'>Let's</span> <span
  m='400240'>see.</span> <span m='400870'>I'll</span> <span
  m='400990'>just</span> <span m='401230'>go</span> <span
  m='401410'>along</span> <span m='401710'>the</span> <span
  m='401800'>list.</span> </p><p><span m='402240'>L</span> <span
  m='402520'>times</span> <span m='402970'>U.</span> <span m='403720'>So</span>
  <span m='403930'>L</span> <span m='404320'>had</span> <span
  m='405580'>this.</span> <span m='406120'>And</span> <span m='406270'>U</span>
  <span m='406570'>had</span> <span m='406750'>that.</span> <span
  m='407170'>And</span> <span m='407320'>when</span> <span m='407560'>I</span>
  <span m='407710'>add</span> <span m='407950'>those,</span> <span
  m='408550'>it</span> <span m='408700'>adds</span> <span m='409030'>up</span>
  <span m='409210'>to</span> <span m='409330'>n</span> <span
  m='409540'>squared.</span> <span m='410770'>Right?</span> <span
  m='411170'>The</span> <span m='411260'>minus</span> <span
  m='411940'>cancels</span> <span m='412480'>the</span> <span
  m='412600'>plus.</span> <span m='413560'>And</span> <span
  m='413740'>the</span> <span m='413860'>1/2n</span> <span
  m='414350'>squared</span> <span m='414820'>twice</span> <span
  m='415450'>gives</span> <span m='415720'>me</span> <span m='415960'>n</span>
  <span m='416140'>squared.</span> <span m='416750'>So</span> <span
  m='417340'>good</span> <span m='417580'>for</span> <span
  m='417760'>that</span> <span m='417970'>one.</span> </p><p><span
  m='418750'>What</span> <span m='418900'>about</span> <span
  m='419200'>QR?</span> <span m='421750'>Well,</span> <span m='422080'>R</span>
  <span m='422500'>is</span> <span m='422740'>upper</span> <span
  m='423040'>triangular</span> <span m='424900'>like</span> <span
  m='425170'>so.</span> <span m='426580'>And</span> <span m='426790'>then</span>
  <span m='427490'>Q,</span> <span m='428290'>we</span> <span
  m='428470'>just</span> <span m='428680'>got</span> <span m='428860'>it</span>
  <span m='428980'>right</span> <span m='429220'>there.</span> <span
  m='429910'>So</span> <span m='430270'>for</span> <span m='430480'>Q</span>
  <span m='430930'>times</span> <span m='431380'>R,</span> <span
  m='432160'>it's</span> <span m='432490'>that</span> <span
  m='432790'>plus</span> <span m='433150'>that</span> <span
  m='433660'>again,</span> <span m='435070'>adding</span> <span
  m='435400'>to</span> <span m='435610'>n</span> <span
  m='435790'>squared.</span> <span m='437580'>Good</span> <span
  m='437760'>for</span> <span m='437940'>that</span> <span
  m='438090'>one.</span> <span m='438630'>n</span> <span
  m='439050'>squared</span> <span m='439380'>for</span> <span
  m='439500'>that</span> <span m='439680'>one.</span> </p><p><span
  m='440630'>And</span> <span m='440970'>this</span> <span m='441210'>one</span>
  <span m='441420'>we</span> <span m='441570'>just</span> <span
  m='441810'>did.</span> <span m='443810'>n</span> <span
  m='443990'>squared</span> <span m='444290'>minus</span> <span
  m='444740'>n</span> <span m='445030'>in</span> <span m='445190'>x.</span>
  <span m='446690'>n</span> <span m='446960'>on</span> <span
  m='447140'>the</span> <span m='447230'>diagonal.</span> <span
  m='447980'>Total</span> <span m='448430'>n</span> <span
  m='448610'>squared.</span> </p><p><span m='449540'>What</span> <span
  m='449690'>about</span> <span m='449960'>this</span> <span
  m='450200'>guy?</span> <span m='453400'>What</span> <span
  m='453630'>about</span> <span m='454170'>the</span> <span
  m='454560'>big,</span> <span m='455400'>really</span> <span
  m='455850'>fundamental</span> <span m='456450'>one</span> <span
  m='456870'>that</span> <span m='457050'>I</span> <span m='457200'>would</span>
  <span m='457830'>normally</span> <span m='458280'>write</span> <span
  m='458590'>to</span> <span m='458700'>matrix</span> <span m='459330'>as</span>
  <span m='459690'>S</span> <span m='460110'>instead</span> <span
  m='460530'>of</span> <span m='460650'>A</span> <span m='461400'>to</span>
  <span m='461580'>remind</span> <span m='462150'>us</span> <span
  m='462390'>that</span> <span m='462680'>it--</span> <span
  m='463260'>that</span> <span m='463520'>the</span> <span
  m='463620'>matrix</span> <span m='464250'>here</span> <span
  m='464670'>is</span> <span m='465720'>symmetric?</span> <span
  m='467400'>So</span> <span m='468000'>I'm</span> <span m='468240'>not</span>
  <span m='468630'>expecting</span> <span m='469970'>n</span> <span
  m='470190'>squared</span> <span m='471980'>for</span> <span
  m='472170'>a</span> <span m='472200'>symmetric</span> <span
  m='472510'>ma--</span> <span m='473040'>oh,</span> <span m='473220'>I</span>
  <span m='473340'>should've</span> <span m='473640'>put</span> <span
  m='473820'>that</span> <span m='474030'>on</span> <span m='474150'>my</span>
  <span m='474300'>list.</span> </p><p><span m='474960'>What's</span> <span
  m='475260'>the</span> <span m='475380'>count</span> <span
  m='475770'>for</span> <span m='476010'>a</span> <span
  m='476100'>symmetric</span> <span m='476790'>matrix?</span> <span
  m='480120'>Because</span> <span m='480510'>this</span> <span
  m='480690'>is</span> <span m='480900'>an</span> <span m='481110'>S</span>
  <span m='481920'>here.</span> <span m='482760'>So</span> <span
  m='482940'>I'm</span> <span m='483090'>not</span> <span
  m='483330'>expecting</span> <span m='483990'>to</span> <span
  m='484620'>get</span> <span m='485100'>n</span> <span
  m='485310'>squared.</span> <span m='485880'>I'm</span> <span
  m='486090'>only</span> <span m='486360'>expecting</span> <span
  m='486900'>to</span> <span m='486990'>get</span> <span m='487200'>the</span>
  <span m='487320'>number</span> <span m='487740'>of</span> <span
  m='491090'>symmetric</span> <span m='491750'>S.</span> </p><p><span
  m='492230'>What's</span> <span m='492530'>the</span> <span
  m='492950'>number</span> <span m='493310'>of</span> <span
  m='493370'>free</span> <span m='493640'>parameters</span> <span
  m='494300'>that</span> <span m='494450'>I</span> <span
  m='494570'>would--</span> <span m='495230'>that</span> <span
  m='495530'>I</span> <span m='495620'>start</span> <span m='495980'>with</span>
  <span m='496400'>that</span> <span m='496550'>I</span> <span
  m='497120'>hope</span> <span m='497420'>will</span> <span
  m='498260'>reappear</span> <span m='499100'>in</span> <span
  m='499370'>Q</span> <span m='499700'>and</span> <span
  m='499790'>lambda?</span> <span m='504601'>What's</span> <span
  m='505090'>the</span> <span m='505180'>deal</span> <span m='505450'>for</span>
  <span m='505600'>a</span> <span m='505660'>symmetric</span> <span
  m='506260'>matrix?</span> <span m='509130'>Let's</span> <span
  m='509260'>see.</span> <span m='510590'>I'm</span> <span
  m='510720'>free</span> <span m='511020'>to</span> <span
  m='511140'>choose.</span> </p><p><span m='512309'>Is</span> <span
  m='512809'>it</span> <span m='512909'>the</span> <span m='513030'>same</span>
  <span m='513330'>count</span> <span m='513690'>as</span> <span
  m='513870'>this?</span> <span m='515340'>Yeah,</span> <span
  m='515780'>because</span> <span m='516030'>I'm</span> <span
  m='516210'>free</span> <span m='516450'>to</span> <span
  m='516539'>choose</span> <span m='517080'>the</span> <span
  m='517230'>upper</span> <span m='517620'>triangular</span> <span
  m='518220'>part</span> <span m='519000'>and</span> <span m='519210'>the</span>
  <span m='519330'>diagonal,</span> <span m='520440'>but</span> <span
  m='520590'>I'm</span> <span m='520710'>not</span> <span m='520919'>free</span>
  <span m='521100'>to</span> <span m='521220'>choose</span> <span
  m='521610'>the</span> <span m='521730'>lower.</span> <span
  m='522929'>So</span> <span m='523200'>I'd</span> <span m='523380'>say</span>
  <span m='523730'>that's</span> <span m='523919'>1/2n</span> <span
  m='525390'>times</span> <span m='525810'>n</span> <span
  m='525960'>minus</span> <span m='526380'>1.</span> <span m='528150'>And</span>
  <span m='528900'>plus</span> <span m='529260'>1.</span> <span
  m='529530'>Sorry.</span> <span m='530205'>The</span> <span
  m='530610'>diagonal's</span> <span m='531360'>in</span> <span
  m='531480'>there.</span> </p><p><span m='532720'>OK.</span> <span
  m='533430'>So</span> <span m='533640'>do</span> <span m='533820'>I</span>
  <span m='533970'>get</span> <span m='534210'>that</span> <span
  m='534540'>total,</span> <span m='535950'>1/2</span> <span
  m='536430'>of</span> <span m='536580'>n</span> <span m='536790'>squared</span>
  <span m='537210'>plus</span> <span m='537570'>n,</span> <span
  m='538650'>from</span> <span m='540060'>these</span> <span
  m='540390'>guys?</span> <span m='542220'>Well,</span> <span
  m='542760'>I</span> <span m='542880'>probably</span> <span
  m='543300'>do.</span> <span m='544890'>The</span> <span
  m='545100'>diagonal</span> <span m='545820'>guy</span> <span
  m='546270'>gives</span> <span m='546570'>me</span> <span m='546780'>n.</span>
  <span m='547330'>This</span> <span m='547640'>gives</span> <span
  m='547860'>me</span> <span m='548070'>n.</span> <span m='548970'>And</span>
  <span m='549150'>that's</span> <span m='549450'>a</span> <span
  m='549540'>Q,</span> <span m='550270'>which</span> <span m='550470'>is</span>
  <span m='550650'>my</span> <span m='551040'>other</span> <span
  m='552300'>favorite</span> <span m='552810'>number</span> <span
  m='553230'>there.</span> <span m='554580'>And</span> <span
  m='554940'>when</span> <span m='555150'>I</span> <span m='555330'>add</span>
  <span m='555900'>that</span> <span m='556380'>to</span> <span
  m='556590'>that,</span> <span m='558660'>that</span> <span
  m='558900'>becomes</span> <span m='559380'>a</span> <span
  m='559470'>plus</span> <span m='559800'>sign.</span> <span
  m='560730'>And</span> <span m='561540'>I'm</span> <span
  m='561720'>good.</span> <span m='562760'>Yeah.</span> <span
  m='564000'>You</span> <span m='564120'>see</span> <span m='564360'>how</span>
  <span m='564570'>I</span> <span m='564690'>enjoy</span> <span
  m='565410'>doing</span> <span m='565710'>this,</span> <span
  m='566220'>right?</span> <span m='566510'>But</span> <span
  m='566700'>I'm</span> <span m='567000'>near</span> <span m='567240'>the</span>
  <span m='567420'>end.</span> <span m='567630'>But</span> <span
  m='567810'>the</span> <span m='567930'>last</span> <span m='568290'>one</span>
  <span m='568530'>is</span> <span m='569460'>kind</span> <span
  m='569730'>of</span> <span m='572220'>not</span> <span m='572490'>well</span>
  <span m='572720'>known.</span> </p><p><span m='573570'>OK.</span> <span
  m='573870'>Q</span> <span m='574140'>times</span> <span m='574550'>S.</span>
  <span m='575720'>Do</span> <span m='575810'>you</span> <span
  m='575870'>remember</span> <span m='576180'>that</span> <span
  m='576450'>factorization?</span> <span m='577350'>That's</span> <span
  m='577770'>called</span> <span m='578010'>the</span> <span
  m='578130'>polar</span> <span m='579170'>decomposition.</span> <span
  m='580470'>It's</span> <span m='581940'>an</span> <span
  m='582090'>orthogonal</span> <span m='582690'>times</span> <span
  m='583080'>the</span> <span m='583140'>symmetric.</span> <span
  m='584730'>And</span> <span m='585150'>it</span> <span m='585900'>is</span>
  <span m='586140'>often</span> <span m='586470'>used</span> <span
  m='586800'>in</span> <span m='586950'>engineering</span> <span
  m='589690'>as</span> <span m='589950'>a</span> <span m='590310'>way</span>
  <span m='590550'>to</span> <span m='590700'>decompose</span> <span
  m='591670'>a</span> <span m='592590'>displacement,</span> <span
  m='595750'>strain</span> <span m='596290'>matrix.</span> <span
  m='596980'>Anyway,</span> <span m='597750'>Q</span> <span
  m='597980'>times</span> <span m='598380'>S.</span> <span m='598720'>And</span>
  <span m='598900'>it--</span> <span m='599470'>actually,</span> <span
  m='600080'>it's</span> <span m='600490'>very,</span> <span
  m='601010'>very</span> <span m='601210'>close</span> <span
  m='601570'>to</span> <span m='601720'>the</span> <span m='601870'>SVD.</span>
  <span m='603370'>And</span> <span m='603520'>I</span> <span
  m='603640'>have</span> <span m='603760'>friends</span> <span
  m='604150'>who</span> <span m='604330'>say,</span> <span
  m='605140'>better</span> <span m='605440'>to</span> <span
  m='605560'>compute</span> <span m='606030'>QS</span> <span
  m='606640'>than</span> <span m='606850'>the</span> <span m='606990'>SVD</span>
  <span m='607660'>and</span> <span m='608260'>then</span> <span
  m='608440'>just</span> <span m='608920'>move</span> <span
  m='609490'>along.</span> </p><p><span m='609870'>Anyway,</span> <span
  m='610840'>Q</span> <span m='611080'>times</span> <span m='611510'>S.</span>
  <span m='611800'>So</span> <span m='612220'>Q</span> <span
  m='612760'>is</span> <span m='613510'>this</span> <span m='613780'>guy.</span>
  <span m='616120'>And</span> <span m='616420'>S.</span> <span
  m='618110'>What's</span> <span m='618500'>S?</span> <span
  m='619890'>Symmetric.</span> <span m='620650'>That's</span> <span
  m='620950'>this</span> <span m='621190'>guy.</span> <span m='624220'>So</span>
  <span m='624400'>that's</span> <span m='624790'>Q.</span> <span
  m='625870'>Let</span> <span m='625960'>me</span> <span m='626110'>write</span>
  <span m='626380'>that</span> <span m='626530'>letter</span> <span
  m='626860'>Q</span> <span m='627280'>and</span> <span m='627400'>S</span>
  <span m='627640'>so</span> <span m='627850'>I</span> <span
  m='627940'>don't</span> <span m='628180'>lose</span> <span
  m='628480'>it.</span> <span m='630280'>What</span> <span m='630600'>do</span>
  <span m='630730'>those</span> <span m='631030'>add</span> <span
  m='631240'>up</span> <span m='631360'>to?</span> <span m='634650'>N</span>
  <span m='634820'>squared.</span> <span m='635900'>Happy.</span> </p><p><span
  m='636910'>OK.</span> <span m='637720'>So</span> <span
  m='637930'>finally,</span> <span m='638470'>the</span> <span
  m='638710'>SVD.</span> <span m='640730'>Finally,</span> <span
  m='641180'>the</span> <span m='641380'>SVD.</span> <span
  m='643170'>What's</span> <span m='643500'>the</span> <span
  m='643650'>count?</span> <span m='645560'>Now</span> <span
  m='645810'>I've</span> <span m='645960'>got</span> <span
  m='646140'>rectangular</span> <span m='646890'>stuff</span> <span
  m='647280'>in</span> <span m='647400'>there.</span> <span
  m='649900'>I'm</span> <span m='650310'>ready</span> <span
  m='650580'>for</span> <span m='650760'>this</span> <span
  m='651060'>one.</span> <span m='652360'>And</span> <span m='652590'>I</span>
  <span m='652680'>have</span> <span m='652860'>to</span> <span
  m='652980'>think</span> <span m='653340'>a</span> <span
  m='653400'>little</span> <span m='653640'>bit.</span> </p><p><span
  m='657450'>And</span> <span m='657600'>we</span> <span m='657750'>may</span>
  <span m='657930'>have</span> <span m='658020'>done</span> <span
  m='658290'>this.</span> <span m='661940'>Let's</span> <span
  m='662370'>suppose</span> <span m='663150'>that</span> <span
  m='663360'>m</span> <span m='664290'>is</span> <span m='664500'>less</span>
  <span m='664930'>or</span> <span m='664950'>equal</span> <span
  m='665400'>n.</span> <span m='666920'>Suppose</span> <span
  m='667400'>that.</span> <span m='669680'>Yeah.</span> <span
  m='670980'>Otherwise,</span> <span m='671460'>we</span> <span
  m='671610'>would</span> <span m='671730'>just</span> <span
  m='672000'>transpose</span> <span m='672720'>and</span> <span
  m='673200'>look</span> <span m='673380'>at</span> <span m='673490'>SVD.</span>
  <span m='674100'>So</span> <span m='674730'>let's</span> <span
  m='675000'>say</span> <span m='675660'>m</span> <span m='675940'>less</span>
  <span m='676140'>or</span> <span m='676350'>equal</span> <span
  m='676650'>n.</span> <span m='677310'>So</span> <span m='677490'>let's</span>
  <span m='677730'>say</span> <span m='678000'>it's</span> <span
  m='678240'>got</span> <span m='678540'>full</span> <span
  m='678930'>rank.</span> <span m='682230'>And</span> <span
  m='682350'>what's</span> <span m='682650'>the</span> <span
  m='682770'>largest</span> <span m='683370'>rank</span> <span
  m='684030'>that</span> <span m='684390'>the</span> <span
  m='684510'>matrix</span> <span m='685050'>can</span> <span
  m='685260'>have?</span> <span m='686640'>m,</span> <span
  m='687060'>clearly.</span> <span m='688110'>Full</span> <span
  m='688320'>rank</span> <span m='688770'>m.</span> </p><p><span
  m='689820'>So</span> <span m='690000'>the</span> <span m='690150'>SVD</span>
  <span m='690870'>will</span> <span m='691140'>be</span> <span
  m='692220'>m</span> <span m='692790'>by</span> <span m='693390'>m.</span>
  <span m='695130'>Let's</span> <span m='695400'>remember</span> <span
  m='695880'>the</span> <span m='696660'>U,</span> <span m='697290'>the</span>
  <span m='697770'>sigma,</span> <span m='698840'>and</span> <span
  m='698970'>the V</span> <span m='699060'>transpose.</span> <span
  m='700950'>This</span> <span m='701190'>will</span> <span m='701370'>be</span>
  <span m='701550'>m</span> <span m='701850'>by</span> <span
  m='702150'>n.</span> <span m='703440'>And</span> <span m='703560'>this</span>
  <span m='703740'>will</span> <span m='703830'>be</span> <span
  m='704040'>n</span> <span m='704280'>by</span> <span m='704550'>n.</span>
  <span m='705960'>For</span> <span m='706170'>the</span> <span
  m='706320'>full</span> <span m='706620'>scale</span> <span
  m='707040'>SVD.</span> <span m='708360'>And</span> <span m='708510'>if</span>
  <span m='708600'>the</span> <span m='708720'>rank</span> <span
  m='709140'>is</span> <span m='709320'>equal</span> <span m='709680'>to</span>
  <span m='709830'>m,</span> <span m='712190'>then</span> <span
  m='713540'>I</span> <span m='713720'>really</span> <span
  m='714200'>expect</span> <span m='714620'>to</span> <span
  m='714740'>get--</span> <span m='715770'>I</span> <span
  m='715880'>expect</span> <span m='716180'>it</span> <span m='716370'>to</span>
  <span m='716540'>add</span> <span m='716810'>up</span> <span
  m='716990'>to</span> <span m='717890'>the</span> <span m='718010'>total</span>
  <span m='718430'>for</span> <span m='718812'>A.</span> <span
  m='719576'>For</span> <span m='719960'>A,</span> <span m='720320'>the</span>
  <span m='720410'>original</span> <span m='720665'>A</span> <span
  m='723380'>has</span> <span m='725690'>mn,</span> <span
  m='726230'>right?</span> <span m='726770'>It's</span> <span
  m='726980'>an</span> <span m='727100'>m</span> <span m='727310'>by</span>
  <span m='727520'>n</span> <span m='727730'>matrix.</span> <span
  m='729740'>The</span> <span m='730040'>matrix</span> <span m='730550'>A</span>
  <span m='732350'>is</span> <span m='732620'>m</span> <span
  m='732770'>by</span> <span m='733010'>n</span> <span m='735220'>with</span>
  <span m='736220'>the m</span> <span m='736500'>less</span> <span
  m='736820'>or</span> <span m='736960'>equal</span> <span m='737310'>n,</span>
  <span m='737890'>giving</span> <span m='738190'>me</span> <span
  m='738400'>these</span> <span m='738610'>things.</span> <span
  m='738970'>So</span> <span m='739240'>it has</span> <span m='739540'>mn</span>
  <span m='740830'>parameters.</span> </p><p><span m='745570'>So</span> <span
  m='745780'>do</span> <span m='745870'>we</span> <span m='746020'>get</span>
  <span m='746470'>m</span> <span m='746680'>times</span> <span
  m='746990'>n</span> <span m='747340'>from</span> <span m='747640'>this?</span>
  <span m='749380'>I</span> <span m='749500'>hope</span> <span
  m='749740'>we</span> <span m='749860'>do.</span> <span m='751190'>I</span>
  <span m='751310'>know</span> <span m='751550'>how</span> <span
  m='751730'>many</span> <span m='752000'>we</span> <span m='752150'>get</span>
  <span m='752390'>from</span> <span m='752600'>sigma.</span> <span
  m='753290'>What?</span> <span m='753620'>How</span> <span
  m='753770'>many</span> <span m='754040'>was</span> <span m='754270'>the</span>
  <span m='754370'>count</span> <span m='754670'>for</span> <span
  m='754880'>sigma?</span> <span m='756390'>m.</span> <span
  m='758450'>And</span> <span m='758670'>what's</span> <span
  m='758970'>the</span> <span m='759060'>count</span> <span
  m='759420'>for</span> <span m='759870'>V?</span> <span m='761670'>So</span>
  <span m='761910'>that's</span> <span m='762240'>an</span> <span
  m='762390'>n</span> <span m='762750'>by</span> <span m='763110'>n.</span>
  <span m='763410'>And</span> <span m='763710'>what's</span> <span
  m='764010'>the</span> <span m='764120'>count</span> <span
  m='764460'>for</span> <span m='764700'>U?</span> <span m='766370'>OK.</span>
  <span m='767090'>Yeah.</span> </p><p><span m='767870'>They're</span> <span
  m='768160'>orthogonal</span> <span m='768700'>matrices.</span> <span
  m='769330'>So</span> <span m='770180'>I</span> <span m='770380'>should</span>
  <span m='770620'>be</span> <span m='770770'>able</span> <span
  m='771010'>to</span> <span m='771130'>go</span> <span m='771340'>up</span>
  <span m='771460'>to</span> <span m='771580'>that</span> <span
  m='771820'>line.</span> <span m='772720'>This</span> <span
  m='772960'>was</span> <span m='773200'>an</span> <span m='773350'>m</span>
  <span m='773530'>by</span> <span m='773740'>n one.</span> <span
  m='775270'>Is</span> <span m='775450'>that</span> <span m='775600'>a</span>
  <span m='775690'>1/2n,</span> <span m='776515'>n</span> <span
  m='776860'>minus</span> <span m='777280'>1?</span> <span m='777700'>Am
  I</span> <span m='778570'>copying</span> <span m='779020'>that</span> <span
  m='779230'>correctly</span> <span m='779860'>out</span> <span
  m='780040'>of</span> <span m='780130'>this</span> <span
  m='781000'>circle</span> <span m='781570'>there?</span> <span
  m='784420'>That's</span> <span m='784610'>an</span> <span m='784730'>m</span>
  <span m='784910'>by</span> <span m='785180'>m</span> <span
  m='785600'>orthogonal</span> <span m='786200'>matrix.</span> <span
  m='787130'>Oh,</span> <span m='787490'>but</span> <span m='787700'>I</span>
  <span m='787790'>have</span> <span m='787910'>to</span> <span
  m='788030'>write</span> <span m='788300'>m.</span> <span
  m='788600'>That</span> <span m='788780'>was</span> <span
  m='789530'>foolish.</span> <span m='790250'>OK.</span> <span
  m='790610'>m.</span> <span m='792774'>m.</span> <span m='794120'>Yeah,</span>
  <span m='794590'>because</span> <span m='794730'>that</span> <span
  m='794990'>matrix</span> <span m='796030'>is of</span> <span
  m='796250'>size</span> <span m='796730'>m.</span> <span m='797690'>So</span>
  <span m='797870'>that's</span> <span m='798140'>an</span> <span
  m='798290'>m.</span> </p><p><span m='800270'>And</span> <span
  m='800480'>then</span> <span m='801020'>I</span> <span m='801200'>have</span>
  <span m='801410'>that.</span> <span m='803030'>And</span> <span
  m='803210'>then</span> <span m='803420'>I</span> <span m='803600'>have</span>
  <span m='804890'>whatever</span> <span m='805220'>V</span> <span
  m='805550'>transpose</span> <span m='806750'>n</span> <span
  m='807050'>by</span> <span m='807320'>n.</span> <span m='808540'>Oh,</span>
  <span m='808910'>what's</span> <span m='809330'>the</span> <span
  m='809480'>deal</span> <span m='809840'>in</span> <span
  m='809960'>there?</span> <span m='810340'>Hmm.</span> <span
  m='813760'>Do</span> <span m='813970'>I</span> <span m='814090'>want</span>
  <span m='814420'>all</span> <span m='814720'>of</span> <span
  m='814870'>the</span> <span m='815870'>1/2n,</span> <span m='816700'>n</span>
  <span m='817480'>minus</span> <span m='817980'>1?</span> <span
  m='821773'>Oh,</span> <span m='822262'>God.</span> <span m='823730'>I</span>
  <span m='823790'>thought</span> <span m='824030'>I had</span> <span
  m='824270'>got</span> <span m='824510'>this</span> <span
  m='824720'>straight.</span> <span m='826920'>Let's</span> <span
  m='827210'>see.</span> <span m='831380'>I</span> <span m='831470'>could</span>
  <span m='831740'>subtract</span> <span m='832250'>this</span> <span
  m='832520'>from</span> <span m='832730'>this</span> <span
  m='833720'>and</span> <span m='834230'>find</span> <span m='834530'>out</span>
  <span m='834680'>what</span> <span m='834920'>I</span> <span
  m='835040'>should</span> <span m='835290'>say.</span> <span
  m='835730'>Whoa.</span> <span m='837860'>Students</span> <span
  m='838350'>have</span> <span m='838460'>been</span> <span
  m='838640'>known</span> <span m='838940'>to</span> <span m='839060'>do</span>
  <span m='839300'>this</span> <span m='839570'>too.</span> <span
  m='841350'>Let's</span> <span m='841760'>see.</span> <span
  m='842740'>Well,</span> <span m='843120'>let's</span> <span
  m='843380'>try</span> <span m='843620'>to</span> <span m='843740'>think</span>
  <span m='844260'>anyway.</span> </p><p><span m='845300'>So</span> <span
  m='845590'>I have</span> <span m='845930'>this</span> <span
  m='846200'>n</span> <span m='846440'>by</span> <span m='846680'>n</span> <span
  m='847130'>symmet--</span> <span m='847730'>this</span> <span
  m='848180'>n</span> <span m='848330'>by</span> <span m='848570'>n</span> <span
  m='848760'>orthogonal</span> <span m='849440'>matrix.</span> <span
  m='853100'>First,</span> <span m='854580'>it</span> <span
  m='854730'>could</span> <span m='854910'>be</span> <span m='855090'>any</span>
  <span m='855360'>orthogonal</span> <span m='856050'>matrix.</span> <span
  m='857880'>Yeah.</span> <span m='860210'>But</span> <span m='860450'>is</span>
  <span m='860660'>it</span> <span m='860810'>only</span> <span
  m='861200'>the</span> <span m='861380'>first</span> <span m='862640'>m</span>
  <span m='863780'>columns</span> <span m='864480'>that</span> <span
  m='865840'>I</span> <span m='865930'>really</span> <span
  m='866290'>need?</span> <span m='866860'>The</span> <span
  m='867010'>rest</span> <span m='867340'>I</span> <span m='867430'>could</span>
  <span m='867640'>just</span> <span m='868360'>throw</span> <span
  m='868660'>away.</span> <span m='871120'>Let</span> <span m='871240'>me</span>
  <span m='871390'>try</span> <span m='872650'>to</span> <span
  m='872830'>imagine</span> <span m='873430'>that</span> <span
  m='873640'>it's</span> <span m='873850'>just</span> <span
  m='874130'>the</span> <span m='874240'>first.</span> <span
  m='875620'>Well,</span> <span m='875770'>then</span> <span m='875950'>I</span>
  <span m='876040'>won't</span> <span m='876250'>have</span> <span
  m='876460'>any</span> <span m='876730'>n</span> <span m='877030'>in</span>
  <span m='877210'>here.</span> <span m='879400'>So</span> <span
  m='879640'>maybe</span> <span m='879910'>I</span> <span
  m='880000'>better</span> <span m='880300'>take</span> <span
  m='880630'>a</span> <span m='880720'>1/2n--</span> <span m='882610'>no.</span>
  <span m='884250'>Help.</span> <span m='884670'>Oh,</span> <span
  m='885540'>oh,</span> <span m='885960'>yes,</span> <span m='886440'>of</span>
  <span m='886530'>course.</span> <span m='887040'>Ha.</span> <span
  m='888450'>I've</span> <span m='888570'>got</span> <span
  m='890410'>only</span> <span m='891100'>m</span> <span
  m='891400'>columns</span> <span m='891970'>that</span> <span
  m='892090'>matter,</span> <span m='894150'>the--</span> <span
  m='895330'>everybody</span> <span m='895840'>sort</span> <span
  m='896110'>of</span> <span m='896380'>now</span> <span
  m='896890'>understands</span> <span m='897450'>that</span> <span
  m='897610'>SVD.</span> <span m='899825'>The</span> <span
  m='900120'>rank</span> <span m='900450'>is</span> <span m='900640'>m.</span>
  <span m='901090'>Don't</span> <span m='901330'>forget</span> <span
  m='901630'>that.</span> </p><p><span m='902690'>OK.</span> <span
  m='903370'>Then</span> <span m='903640'>the</span> <span
  m='905440'>first</span> <span m='905890'>R,</span> <span m='906230'>the</span>
  <span m='906370'>first</span> <span m='906730'>m</span> <span
  m='908500'>columns</span> <span m='909100'>of</span> <span m='909160'>V</span>
  <span m='909490'>are</span> <span m='909610'>important.</span> <span
  m='910270'>Those</span> <span m='910570'>are</span> <span
  m='910720'>the</span> <span m='911350'>singular</span> <span
  m='911860'>vectors</span> <span m='912400'>that</span> <span
  m='912520'>go</span> <span m='912790'>with</span> <span
  m='913750'>nonzero</span> <span m='914560'>singular</span> <span
  m='915070'>values</span> <span m='915640'>that</span> <span
  m='915790'>really</span> <span m='916120'>matter.</span> <span
  m='918280'>And</span> <span m='918430'>the</span> <span m='918520'>rest</span>
  <span m='919030'>really</span> <span m='919450'>don't</span> <span
  m='919780'>matter.</span> <span m='921310'>So</span> <span
  m='921580'>I'm</span> <span m='921760'>going</span> <span m='921870'>to</span>
  <span m='922000'>just--</span> <span m='923010'>I</span> <span
  m='923230'>have</span> <span m='923350'>to</span> <span
  m='923470'>count</span> <span m='924250'>how</span> <span
  m='924580'>many--</span> <span m='925090'>so,</span> <span
  m='925900'>sorry.</span> <span m='926930'>V,</span> <span
  m='928840'>the</span> <span m='928960'>important</span> <span
  m='929410'>part</span> <span m='929650'>of</span> <span m='929770'>V</span>
  <span m='930670'>has</span> <span m='936890'>how</span> <span
  m='937340'>many</span> <span m='938080'>on</span> <span m='938280'>the</span>
  <span m='938420'>m</span> <span m='938780'>columns.</span> <span
  m='939930'>But</span> <span m='940040'>it's</span> <span m='940280'>an</span>
  <span m='940430'>n</span> <span m='940700'>by</span> <span m='940970'>n</span>
  <span m='941180'>matrix.</span> <span m='942590'>And</span> <span
  m='942800'>those</span> <span m='943070'>columns</span> <span
  m='943550'>are</span> <span m='943640'>orthogonal.</span> <span
  m='944330'>So</span> <span m='944660'>the</span> <span
  m='944810'>answer</span> <span m='945110'>is</span> <span
  m='945200'>not</span> <span m='945470'>mn</span> <span m='945950'>for</span>
  <span m='946190'>this</span> <span m='946490'>guy.</span> <span
  m='947600'>I</span> <span m='947750'>have</span> <span m='947900'>to</span>
  <span m='948020'>go</span> <span m='948260'>through</span> <span
  m='948500'>this</span> <span m='949490'>foolish</span> <span
  m='949970'>reasoning</span> <span m='950540'>again.</span> </p><p><span
  m='951560'>I</span> <span m='952160'>have</span> <span m='953450'>n</span>
  <span m='953780'>minus</span> <span m='954320'>1,</span> <span
  m='955070'>plus</span> <span m='955700'>n</span> <span m='956000'>minus</span>
  <span m='956540'>2,</span> <span m='957650'>plus</span> <span
  m='958020'>so</span> <span m='958370'>on,</span> <span m='958670'>plus</span>
  <span m='959240'>n</span> <span m='959570'>minus</span> <span
  m='960200'>m.</span> <span m='965230'>There</span> <span
  m='965350'>were</span> <span m='965590'>n</span> <span m='965770'>minus</span>
  <span m='966070'>1</span> <span m='966310'>parameters</span> <span
  m='966940'>in</span> <span m='967060'>the</span> <span m='967150'>first</span>
  <span m='967780'>orthogonal</span> <span m='968380'>vector--</span> <span
  m='969020'>unit</span> <span m='969430'>vector,</span> <span
  m='970240'>n</span> <span m='970420'>minus</span> <span m='970840'>2</span>
  <span m='971080'>in</span> <span m='971200'>the</span> <span
  m='971320'>second</span> <span m='971710'>one,</span> <span
  m='971950'>up</span> <span m='972100'>to</span> <span m='972250'>n</span>
  <span m='972460'>minus</span> <span m='972820'>m</span> <span
  m='973000'>in</span> <span m='973090'>the</span> <span
  m='973210'>third.</span> <span m='974020'>And</span> <span
  m='974170'>then</span> <span m='974770'>V</span> <span m='975190'>has</span>
  <span m='975530'>some</span> <span m='975730'>more</span> <span
  m='976030'>columns</span> <span m='976930'>that</span> <span
  m='977240'>are</span> <span m='977380'>coming,</span> <span
  m='977770'>really,</span> <span m='978100'>from</span> <span
  m='978370'>a</span> <span m='978460'>null</span> <span
  m='978730'>space,</span> <span m='979840'>that</span> <span
  m='982810'>are</span> <span m='982900'>not</span> <span
  m='983410'>important.</span> </p><p><span m='984400'>I</span> <span
  m='984550'>believe</span> <span m='984970'>this</span> <span
  m='985960'>is</span> <span m='986170'>the</span> <span m='986320'>right</span>
  <span m='986650'>thing</span> <span m='986980'>to</span> <span
  m='987130'>do.</span> <span m='989780'>I'm</span> <span
  m='990050'>hoping</span> <span m='990410'>you</span> <span
  m='990620'>agree.</span> <span m='993120'>And I</span> <span
  m='993600'>mean,</span> <span m='993870'>I'm</span> <span
  m='994080'>hoping</span> <span m='994440'>even</span> <span
  m='994740'>more</span> <span m='994980'>that</span> <span
  m='995160'>those</span> <span m='995460'>add</span> <span m='995670'>up</span>
  <span m='995790'>to</span> <span m='995970'>m</span> <span
  m='996210'>times</span> <span m='996550'>n.</span> <span m='998760'>OK.</span>
  <span m='999150'>I</span> <span m='999270'>have</span> <span
  m='999540'>a</span> <span m='999630'>1/2n</span> <span m='1000110'>s--</span>
  <span m='1000820'>oh,</span> <span m='1001210'>I</span> <span
  m='1001580'>really</span> <span m='1001880'>have</span> <span
  m='1002060'>to</span> <span m='1002210'>total</span> <span
  m='1002660'>this</span> <span m='1002990'>thing.</span> <span
  m='1003820'>OK.</span> <span m='1004250'>This</span> <span
  m='1004520'>had</span> <span m='1004895'>m</span> <span
  m='1006440'>terms.</span> <span m='1007640'>So</span> <span
  m='1007910'>there's</span> <span m='1008240'>m</span> <span
  m='1009650'>of</span> <span m='1009770'>these</span> <span
  m='1010160'>n's.</span> <span m='1012620'>And</span> <span
  m='1012800'>then</span> <span m='1012980'>I</span> <span
  m='1013070'>have</span> <span m='1013250'>to</span> <span
  m='1013370'>subtract</span> <span m='1014030'>off</span> <span
  m='1014240'>1</span> <span m='1014600'>plus</span> <span m='1014900'>2</span>
  <span m='1015200'>plus</span> <span m='1015470'>3,</span> <span
  m='1015950'>up</span> <span m='1016160'>to</span> <span m='1016610'>m.</span>
  <span m='1017660'>And</span> <span m='1017810'>so</span> <span
  m='1017990'>what</span> <span m='1018170'>am</span> <span m='1018320'>I</span>
  <span m='1018470'>subtracting</span> <span m='1019280'>off?</span> <span
  m='1020510'>What's</span> <span m='1020720'>that sum?</span> <span
  m='1021500'>1</span> <span m='1021770'>plus</span> <span m='1022010'>2</span>
  <span m='1022250'>plus</span> <span m='1022550'>3,</span> <span
  m='1022940'>stopping</span> <span m='1023410'>at</span> <span
  m='1023510'>m?</span> <span m='1027079'>It's</span> <span
  m='1027310'>one</span> <span m='1027520'>of</span> <span
  m='1027579'>these</span> <span m='1027849'>guys,</span> <span
  m='1028420'>1/2--</span> <span m='1030099'>is</span> <span
  m='1030280'>it</span> <span m='1030369'>1/2m,</span> <span
  m='1031329'>m</span> <span m='1031569'>plus</span> <span m='1031940'>1?</span>
  <span m='1033670'>Yeah,</span> <span m='1034030'>1/2m,</span> <span
  m='1034960'>m</span> <span m='1035200'>plus</span> <span m='1035560'>1.</span>
  <span m='1037300'>Sorry.</span> <span m='1037510'>1/2m,</span> <span
  m='1038200'>m</span> <span m='1038530'>plus</span> <span m='1038869'>1.</span>
  </p><p><span m='1041020'>I'm</span> <span m='1041230'>supposed</span> <span
  m='1041619'>to</span> <span m='1041770'>enjoy</span> <span
  m='1042160'>this.</span> <span m='1042430'>And</span> <span
  m='1042520'>now</span> <span m='1043200'>it</span> <span
  m='1043490'>gets</span> <span m='1044890'>a</span> <span
  m='1045380'>little</span> <span m='1045550'>nervous.</span> <span
  m='1046089'>But</span> <span m='1046510'>OK.</span> <span
  m='1047290'>So</span> <span m='1047500'>I</span> <span
  m='1047650'>believe</span> <span m='1048160'>that</span> <span
  m='1048339'>that</span> <span m='1049600'>is</span> <span
  m='1049900'>that.</span> <span m='1050470'>OK.</span> <span
  m='1051280'>Well,</span> <span m='1051490'>we</span> <span
  m='1051640'>have</span> <span m='1051850'>the</span> <span
  m='1052000'>mn.</span> <span m='1052510'>That's</span> <span
  m='1052780'>a</span> <span m='1052810'>good</span> <span
  m='1053050'>sign</span> <span m='1054100'>that</span> <span
  m='1054250'>we're</span> <span m='1054430'>shooting</span> <span
  m='1054820'>for.</span> <span m='1056180'>So</span> <span
  m='1056320'>does</span> <span m='1056590'>the</span> <span
  m='1056680'>rest</span> <span m='1057010'>of</span> <span
  m='1057130'>it</span> <span m='1057250'>add</span> <span m='1057480'>to</span>
  <span m='1057640'>nothing?</span> <span m='1059020'>Well,</span> <span
  m='1059890'>I</span> <span m='1059980'>guess,</span> <span
  m='1061000'>yeah,</span> <span m='1061180'>I</span> <span
  m='1061300'>guess</span> <span m='1061540'>it</span> <span
  m='1061630'>does.</span> <span m='1062440'>When</span> <span
  m='1062590'>I</span> <span m='1062650'>put</span> <span
  m='1062890'>these</span> <span m='1063430'>two</span> <span
  m='1063670'>together,</span> <span m='1064510'>I</span> <span
  m='1064660'>have</span> <span m='1064900'>1/2m,</span> <span
  m='1065830'>m</span> <span m='1066190'>plus</span> <span m='1066670'>1.</span>
  <span m='1067600'>And</span> <span m='1067720'>then</span> <span
  m='1067870'>I'm</span> <span m='1067990'>subtracting</span> <span
  m='1068680'>it</span> <span m='1068800'>away</span> <span
  m='1069070'>again.</span> <span m='1069950'>So</span> <span
  m='1070060'>I</span> <span m='1070150'>get</span> <span m='1070450'>mn.</span>
  <span m='1070980'>Hooray.</span> </p><p><span m='1073420'>Well,</span> <span
  m='1073780'>it</span> <span m='1074110'>had</span> <span m='1074320'>to</span>
  <span m='1074440'>happen,</span> <span m='1074980'>or</span> <span
  m='1076000'>we</span> <span m='1076150'>wouldn't--</span> <span
  m='1078090'>anything--</span> <span m='1078460'>before</span> <span
  m='1078820'>I</span> <span m='1078970'>erase</span> <span
  m='1079360'>that</span> <span m='1079510'>board</span> <span
  m='1079870'>and</span> <span m='1080440'>consign</span> <span
  m='1081040'>that</span> <span m='1081250'>to</span> <span
  m='1081430'>history,</span> <span m='1082630'>is</span> <span
  m='1082790'>there--</span> <span m='1082930'>should</span> <span
  m='1083170'>I</span> <span m='1083560'>pause</span> <span m='1084010'>a</span>
  <span m='1084100'>little</span> <span m='1084310'>more?</span> <span
  m='1085120'>Minute?</span> <span m='1086210'>This</span> <span
  m='1086410'>will</span> <span m='1086560'>be,</span> <span
  m='1087280'>like,</span> <span m='1087520'>I'm</span> <span
  m='1087670'>hoping,</span> <span m='1088030'>a</span> <span
  m='1088120'>one-page</span> <span m='1088840'>appendix</span> <span
  m='1089500'>to</span> <span m='1089710'>the</span> <span
  m='1090760'>notes</span> <span m='1091210'>and</span> <span
  m='1091330'>the</span> <span m='1091420'>book.</span> <span
  m='1091840'>And</span> <span m='1091960'>you'll</span> <span
  m='1092140'>see</span> <span m='1092410'>it.</span> </p><p><span
  m='1092980'>But</span> <span m='1093160'>I</span> <span m='1093280'>do</span>
  <span m='1093490'>have</span> <span m='1093700'>one</span> <span
  m='1094060'>more</span> <span m='1096670'>count</span> <span
  m='1097090'>to</span> <span m='1097240'>do.</span> <span
  m='1098050'>And</span> <span m='1098170'>then</span> <span
  m='1098350'>I'm</span> <span m='1100340'>good</span> <span
  m='1100670'>with</span> <span m='1100880'>this</span> <span
  m='1101090'>review</span> <span m='1101750'>and</span> <span
  m='1101990'>ready</span> <span m='1102350'>to</span> <span
  m='1102500'>move</span> <span m='1102830'>onward</span> <span
  m='1104000'>to</span> <span m='1104720'>the</span> <span
  m='1104900'>topic</span> <span m='1105440'>of</span> <span
  m='1105620'>saddle</span> <span m='1106040'>points</span> <span
  m='1107120'>and</span> <span m='1107270'>ready</span> <span
  m='1107570'>to</span> <span m='1107690'>move</span> <span
  m='1107990'>onward</span> <span m='1108470'>after</span> <span
  m='1108830'>that.</span> <span m='1109220'>Well,</span> <span
  m='1109490'>I'll</span> <span m='1109640'>say</span> <span
  m='1109910'>a</span> <span m='1109970'>little</span> <span
  m='1110210'>bit</span> <span m='1110450'>about</span> <span
  m='1110930'>the</span> <span m='1111890'>next</span> <span
  m='1112400'>lab</span> <span m='1112850'>homework</span> <span
  m='1113990'>that</span> <span m='1114170'>I'm</span> <span
  m='1114860'>creating.</span> <span m='1115880'>And</span> <span
  m='1116480'>then</span> <span m='1117770'>our</span> <span
  m='1117890'>next</span> <span m='1118220'>topic</span> <span
  m='1118700'>will</span> <span m='1118910'>be,</span> <span
  m='1119390'>like,</span> <span m='1119630'>covariance</span> <span
  m='1120560'>matrices,</span> <span m='1122330'>a</span> <span
  m='1122420'>little</span> <span m='1122720'>statistics</span> <span
  m='1123500'>this</span> <span m='1123740'>week.</span> <span
  m='1125890'>Then</span> <span m='1126220'>we</span> <span
  m='1126320'>get</span> <span m='1126560'>a</span> <span
  m='1127340'>week</span> <span m='1127640'>off</span> <span
  m='1127910'>we</span> <span m='1128030'>could--</span> <span
  m='1128180'>to</span> <span m='1128330'>digest</span> <span
  m='1128930'>it.</span> <span m='1129560'>And</span> <span
  m='1129710'>then</span> <span m='1130790'>come</span> <span
  m='1131030'>back</span> <span m='1131390'>for</span> <span
  m='1133070'>gradient</span> <span m='1133580'>descent,</span> <span
  m='1134330'>and</span> <span m='1134600'>deep</span> <span
  m='1134930'>learning,</span> <span m='1135440'>and</span> <span
  m='1136580'>those</span> <span m='1136970'>things.</span> <span
  m='1137550'>OK.</span> <span m='1139190'>Everybody</span> <span
  m='1139940'>happy</span> <span m='1140210'>with</span> <span
  m='1140360'>that?</span> </p><p><span m='1141020'>So</span> <span
  m='1141170'>what's</span> <span m='1141410'>my</span> <span
  m='1141620'>final</span> <span m='1143300'>question?</span> <span
  m='1144260'>My</span> <span m='1144410'>final</span> <span
  m='1144800'>question</span> <span m='1145340'>is</span> <span
  m='1145550'>the</span> <span m='1145730'>SVD</span> <span
  m='1148540'>for</span> <span m='1150950'>any</span> <span
  m='1152990'>matrix</span> <span m='1156780'>of</span> <span
  m='1157590'>rank</span> <span m='1159280'>R.</span> <span
  m='1160770'>So</span> <span m='1161010'>it's</span> <span
  m='1161160'>an</span> <span m='1162060'>m</span> <span m='1162300'>by</span>
  <span m='1162570'>n</span> <span m='1162810'>matrix.</span> <span
  m='1165550'>But</span> <span m='1165870'>the</span> <span
  m='1166000'>rank</span> <span m='1166480'>is</span> <span
  m='1166630'>only</span> <span m='1167050'>R.</span> <span
  m='1169330'>It's</span> <span m='1169630'>a</span> <span
  m='1169720'>natural</span> <span m='1170170'>question--</span> <span
  m='1170950'>how</span> <span m='1171100'>many</span> <span
  m='1171430'>parameters</span> <span m='1172120'>are</span> <span
  m='1172360'>there</span> <span m='1173680'>in</span> <span
  m='1173980'>a</span> <span m='1174820'>rank</span> <span m='1175300'>R</span>
  <span m='1175660'>matrix?</span> <span m='1179020'>We</span> <span
  m='1179260'>may</span> <span m='1179470'>even</span> <span
  m='1179710'>have</span> <span m='1179860'>touched</span> <span
  m='1180280'>on</span> <span m='1180430'>this</span> <span
  m='1180670'>question.</span> </p><p><span m='1181840'>And</span> <span
  m='1182230'>I</span> <span m='1182350'>have</span> <span
  m='1182620'>two</span> <span m='1182890'>ways</span> <span
  m='1183340'>to</span> <span m='1183550'>answer</span> <span
  m='1183910'>it.</span> <span m='1184840'>And</span> <span
  m='1184990'>one</span> <span m='1185290'>way</span> <span
  m='1185560'>is</span> <span m='1185740'>the</span> <span
  m='1185890'>SVD.</span> <span m='1188250'>And</span> <span
  m='1188570'>that</span> <span m='1188790'>will</span> <span
  m='1188950'>be</span> <span m='1189130'>similar</span> <span
  m='1189670'>to</span> <span m='1189820'>what</span> <span m='1190090'>I</span>
  <span m='1190630'>just</span> <span m='1190930'>pushed</span> <span
  m='1191380'>up</span> <span m='1191650'>there.</span> <span
  m='1192460'>So</span> <span m='1192730'>if</span> <span m='1192880'>the</span>
  <span m='1192970'>rank is</span> <span m='1193570'>R,</span> <span
  m='1195010'>the</span> <span m='1195250'>SVD</span> <span
  m='1195880'>of</span> <span m='1196030'>this</span> <span
  m='1196720'>typical</span> <span m='1197320'>rank</span> <span
  m='1197740'>R</span> <span m='1197950'>matrix</span> <span
  m='1198880'>will</span> <span m='1199090'>be</span> <span m='1199360'>U</span>
  <span m='1199840'>sigma</span> <span m='1200410'>V</span> <span
  m='1200740'>transpose.</span> <span m='1202510'>But</span> <span
  m='1202750'>U,</span> <span m='1203320'>now</span> <span
  m='1203680'>this</span> <span m='1203890'>is</span> <span
  m='1204100'>the--</span> <span m='1205590'>like</span> <span
  m='1205940'>the</span> <span m='1207150'>condensed</span> <span
  m='1208560'>thing,</span> <span m='1209070'>where</span> <span
  m='1209310'>I've</span> <span m='1209490'>thrown</span> <span
  m='1209850'>away</span> <span m='1210210'>stuff</span> <span
  m='1210630'>that's</span> <span m='1210930'>automatically</span> <span
  m='1211740'>zero</span> <span m='1212820'>because</span> <span
  m='1213210'>if</span> <span m='1213330'>the</span> <span m='1213420'>rank
  is</span> <span m='1213900'>only</span> <span m='1214230'>R,</span> <span
  m='1214860'>like</span> <span m='1215100'>if</span> <span
  m='1215190'>the</span> <span m='1215280'>rank</span> <span
  m='1215580'>was</span> <span m='1215820'>1,</span> <span
  m='1216330'>suppose</span> <span m='1216840'>the</span> <span
  m='1216900'>rank</span> <span m='1217200'>was</span> <span
  m='1217470'>1,</span> <span m='1218520'>then</span> <span
  m='1218820'>I'd</span> <span m='1219000'>have</span> <span
  m='1219180'>1</span> <span m='1219540'>column</span> <span
  m='1220560'>times</span> <span m='1220920'>1</span> <span
  m='1221280'>sigma</span> <span m='1222240'>times</span> <span
  m='1222600'>1</span> <span m='1222960'>row,</span> <span
  m='1223770'>right?</span> <span m='1224790'>And</span> <span
  m='1225960'>I</span> <span m='1226080'>could</span> <span
  m='1226290'>do</span> <span m='1226530'>that</span> <span
  m='1226770'>count</span> <span m='1227160'>for</span> <span
  m='1227470'>R</span> <span m='1227730'>equal</span> <span
  m='1228030'>1.</span> </p><p><span m='1228780'>Now</span> <span
  m='1229230'>I</span> <span m='1229440'>have</span> <span m='1229890'>R</span>
  <span m='1230190'>columns.</span> <span m='1231340'>So</span> <span
  m='1231450'>this</span> <span m='1231660'>is</span> <span m='1233670'>m</span>
  <span m='1233940'>by</span> <span m='1234210'>R.</span> <span
  m='1236086'>Then</span> <span m='1236580'>sigma</span> <span
  m='1238820'>is</span> <span m='1239070'>diagonal,</span> <span
  m='1239670'>of</span> <span m='1239820'>course.</span> <span
  m='1240195'>So</span> <span m='1240570'>I'm</span> <span
  m='1240750'>going</span> <span m='1240870'>to</span> <span
  m='1240960'>get</span> <span m='1241140'>R</span> <span
  m='1241380'>numbers</span> <span m='1241830'>out</span> <span
  m='1242010'>of</span> <span m='1242070'>that.</span> <span
  m='1242760'>And</span> <span m='1242910'>this</span> <span
  m='1243150'>one</span> <span m='1243330'>is</span> <span
  m='1243510'>now</span> <span m='1243840'>R</span> <span m='1244140'>by</span>
  <span m='1244410'>n.</span> </p><p><span m='1245500'>In</span> <span
  m='1245600'>other</span> <span m='1245640'>words,</span> <span
  m='1246100'>maybe</span> <span m='1246330'>I</span> <span
  m='1246420'>should,</span> <span m='1247380'>like,</span> <span
  m='1247770'>save</span> <span m='1248280'>this</span> <span
  m='1248580'>little</span> <span m='1251100'>bit</span> <span
  m='1251370'>here</span> <span m='1251760'>that</span> <span
  m='1251940'>was</span> <span m='1252150'>helpful.</span> <span
  m='1253380'>But</span> <span m='1253560'>now</span> <span
  m='1253890'>I've</span> <span m='1254070'>got</span> <span
  m='1254430'>m</span> <span m='1254790'>is</span> <span
  m='1255330'>reduced</span> <span m='1255870'>to</span> <span
  m='1256730'>R.</span> <span m='1257400'>So</span> <span m='1257580'>I</span>
  <span m='1257700'>believe</span> <span m='1258060'>that</span> <span
  m='1258270'>if</span> <span m='1258420'>I</span> <span
  m='1258540'>count</span> <span m='1259350'>these</span> <span
  m='1259710'>three,</span> <span m='1260700'>I'll</span> <span
  m='1260880'>get</span> <span m='1261120'>the</span> <span
  m='1261240'>right</span> <span m='1261540'>number</span> <span
  m='1261870'>of</span> <span m='1262020'>parameters</span> <span
  m='1262740'>for</span> <span m='1262960'>a</span> <span
  m='1263010'>rank</span> <span m='1263430'>R</span> <span
  m='1263700'>matrix.</span> <span m='1264540'>And</span> <span
  m='1264660'>that's</span> <span m='1264990'>not</span> <span
  m='1265380'>so</span> <span m='1265980'>obvious</span> <span
  m='1267150'>because</span> <span m='1268940'>the</span> <span
  m='1269070'>rank</span> <span m='1269400'>R</span> <span
  m='1269580'>matrices</span> <span m='1270270'>are</span> <span
  m='1270360'>not</span> <span m='1270630'>a--</span> <span
  m='1271230'>we</span> <span m='1271380'>don't</span> <span
  m='1271590'>have</span> <span m='1271770'>a</span> <span
  m='1272460'>subspace.</span> <span m='1273990'>If</span> <span
  m='1274140'>I</span> <span m='1274270'>add</span> <span m='1274440'>a</span>
  <span m='1274530'>rank</span> <span m='1274860'>R</span> <span
  m='1275010'>matrix</span> <span m='1275520'>to</span> <span
  m='1275640'>another</span> <span m='1275940'>rank</span> <span
  m='1276240'>R</span> <span m='1276360'>matrix,</span> <span
  m='1277720'>well,</span> <span m='1277920'>the</span> <span
  m='1278040'>rank</span> <span m='1278280'>could</span> <span
  m='1278460'>be</span> <span m='1278640'>as</span> <span m='1278790'>big</span>
  <span m='1279000'>as</span> <span m='1279150'>2R</span> <span
  m='1279720'>and</span> <span m='1279810'>probably</span> <span
  m='1280200'>will</span> <span m='1280440'>be.</span> </p><p><span
  m='1285200'>You</span> <span m='1285500'>know,</span> <span
  m='1285750'>it's</span> <span m='1286020'>just</span> <span
  m='1286230'>a</span> <span m='1286260'>little</span> <span
  m='1287340'>interesting</span> <span m='1287940'>to</span> <span
  m='1288050'>get</span> <span m='1288270'>your</span> <span
  m='1288420'>hands</span> <span m='1288930'>on</span> <span
  m='1290670'>matrices</span> <span m='1291450'>of</span> <span
  m='1291570'>rank</span> <span m='1291930'>R</span> <span
  m='1292240'>because</span> <span m='1292410'>they're</span> <span
  m='1292560'>kind</span> <span m='1292830'>of</span> <span m='1292950'>a</span>
  <span m='1293830'>thin,</span> <span m='1295630'>like</span> <span
  m='1295930'>a,</span> <span m='1297510'>well,</span> <span m='1297900'>a
  mass--</span> <span m='1298500'>person</span> <span m='1298920'>would</span>
  <span m='1299100'>call</span> <span m='1299370'>it</span> <span
  m='1299490'>a</span> <span m='1299550'>manifold,</span> <span
  m='1300450'>some</span> <span m='1300690'>kind</span> <span
  m='1300930'>of</span> <span m='1301050'>a</span> <span
  m='1301140'>surface</span> <span m='1302250'>within</span> <span
  m='1303480'>matrix</span> <span m='1303990'>space.</span> <span
  m='1305190'>Have</span> <span m='1305370'>you</span> <span
  m='1305460'>ever</span> <span m='1305640'>thought</span> <span
  m='1305850'>about</span> <span m='1306120'>matrix</span> <span
  m='1306630'>space?</span> <span m='1307220'>So</span> <span
  m='1307350'>that's</span> <span m='1308100'>vector</span> <span
  m='1308490'>space</span> <span m='1308970'>because</span> <span
  m='1309180'>we</span> <span m='1309300'>can</span> <span
  m='1309510'>add</span> <span m='1309750'>matrices.</span> <span
  m='1310580'>We</span> <span m='1310680'>can</span> <span
  m='1311340'>multiply</span> <span m='1311880'>them</span> <span
  m='1312030'>by</span> <span m='1312180'>constants.</span> <span
  m='1312840'>We</span> <span m='1312960'>can</span> <span
  m='1313110'>take</span> <span m='1313380'>linear</span> <span
  m='1313710'>combinations.</span> <span m='1315630'>We</span> <span
  m='1315840'>could</span> <span m='1316020'>call</span> <span
  m='1316350'>them</span> <span m='1316530'>vectors</span> <span
  m='1317040'>if</span> <span m='1317160'>we</span> <span
  m='1317310'>like.</span> <span m='1318240'>There</span> <span
  m='1318390'>would</span> <span m='1318570'>be</span> <span
  m='1318750'>a</span> <span m='1318810'>vector</span> <span
  m='1319230'>space</span> <span m='1319800'>of</span> <span
  m='1321270'>m</span> <span m='1321480'>by</span> <span m='1321720'>n</span>
  <span m='1321930'>matrices.</span> <span m='1322740'>What</span> <span
  m='1322920'>would</span> <span m='1323040'>be</span> <span
  m='1323220'>the</span> <span m='1323370'>dimension</span> <span
  m='1324000'>of</span> <span m='1324120'>that</span> <span
  m='1324390'>space?</span> <span m='1327030'>So</span> <span
  m='1327330'>the</span> <span m='1327480'>vector</span> <span
  m='1327960'>space</span> <span m='1328380'>of</span> <span
  m='1328500'>all</span> <span m='1328770'>3</span> <span m='1329160'>by</span>
  <span m='1329400'>4</span> <span m='1329730'>matrices.</span> <span
  m='1332280'>That</span> <span m='1332610'>has</span> <span
  m='1333510'>what</span> <span m='1333690'>dimension?</span> <span
  m='1335260'>12.</span> <span m='1336400'>12,</span> <span
  m='1336850'>because</span> <span m='1337060'>you've</span> <span
  m='1337150'>got</span> <span m='1337340'>12</span> <span
  m='1337630'>numbers</span> <span m='1338050'>to</span> <span
  m='1338170'>choose.</span> <span m='1339400'>And</span> <span
  m='1339610'>it</span> <span m='1339730'>is</span> <span m='1339940'>a</span>
  <span m='1340030'>space</span> <span m='1340480'>because</span> <span
  m='1340870'>you can</span> <span m='1341200'>add.</span> </p><p><span
  m='1342070'>Now</span> <span m='1342430'>if</span> <span m='1342580'>I</span>
  <span m='1342740'>say</span> <span m='1343030'>3</span> <span
  m='1343330'>by</span> <span m='1343540'>4</span> <span
  m='1343750'>matrices</span> <span m='1344470'>of</span> <span
  m='1344590'>rank</span> <span m='1344890'>2,</span> <span m='1347890'>I</span>
  <span m='1347980'>don't</span> <span m='1348250'>have</span> <span
  m='1348430'>a</span> <span m='1348520'>space</span> <span
  m='1349030'>anymore.</span> <span m='1350840'>That</span> <span
  m='1351030'>word,</span> <span m='1351290'>space,</span> <span
  m='1352550'>is</span> <span m='1353090'>seriously</span> <span
  m='1353780'>preserved</span> <span m='1354830'>for</span> <span
  m='1356150'>meaning</span> <span m='1356630'>vector</span> <span
  m='1357170'>space,</span> <span m='1357590'>meaning</span> <span
  m='1358010'>I</span> <span m='1358100'>can</span> <span
  m='1358310'>take</span> <span m='1358550'>combinations.</span> <span
  m='1359390'>But</span> <span m='1359570'>if</span> <span m='1359690'>I</span>
  <span m='1359780'>take</span> <span m='1360020'>a</span> <span
  m='1360080'>rank</span> <span m='1360380'>2</span> <span
  m='1360590'>matrix</span> <span m='1361070'>plus</span> <span
  m='1361310'>a</span> <span m='1361370'>rank</span> <span m='1361640'>2</span>
  <span m='1361850'>matrix,</span> <span m='1362330'>I'm</span> <span
  m='1362480'>not--</span> <span m='1363110'>so</span> <span
  m='1363320'>it's</span> <span m='1363650'>sort</span> <span
  m='1363950'>of</span> <span m='1364100'>a</span> <span
  m='1364580'>surface</span> <span m='1365300'>within</span> <span
  m='1366010'>12d,</span> <span m='1368320'>the</span> <span
  m='1368620'>2--</span> <span m='1369220'>the</span> <span m='1369430'>3</span>
  <span m='1369790'>by</span> <span m='1370030'>4</span> <span
  m='1370300'>matrices</span> <span m='1371080'>of</span> <span
  m='1371230'>rank</span> <span m='1371530'>2.</span> <span
  m='1371830'>And</span> <span m='1371950'>we're</span> <span
  m='1372130'>about</span> <span m='1372400'>to</span> <span
  m='1372550'>find</span> <span m='1372880'>the</span> <span
  m='1373360'>dimension</span> <span m='1374200'>of</span> <span
  m='1374320'>that</span> <span m='1374590'>surface.</span> <span
  m='1375790'>Does</span> <span m='1375940'>your</span> <span
  m='1376510'>mind</span> <span m='1376930'>sort</span> <span
  m='1377170'>of</span> <span m='1377230'>visualize</span> <span
  m='1378060'>a</span> <span m='1378130'>surface</span> <span
  m='1378670'>in</span> <span m='1379120'>12</span> <span
  m='1379450'>dimensions?</span> <span m='1381910'>Yeah,</span> <span
  m='1382260'>well,</span> <span m='1382810'>give</span> <span
  m='1382990'>it</span> <span m='1383050'>a</span> <span m='1383140'>shot</span>
  <span m='1383620'>anyway.</span> <span m='1385540'>But</span> <span
  m='1386110'>that</span> <span m='1386560'>surface</span> <span
  m='1387220'>could</span> <span m='1387490'>have--</span> <span
  m='1388420'>be</span> <span m='1388600'>11</span> <span
  m='1389110'>dimensional,</span> <span m='1389950'>so</span> <span
  m='1390230'>to</span> <span m='1390320'>speak,</span> <span
  m='1391090'>like,</span> <span m='1391660'>meaning</span> <span
  m='1392110'>locally,</span> <span m='1393370'>the--</span> <span
  m='1395460'>it</span> <span m='1395770'>wouldn't</span> <span
  m='1396010'>have</span> <span m='1396160'>to</span> <span
  m='1396250'>be</span> <span m='1396400'>a</span> <span m='1396490'>pl--</span>
  <span m='1397210'>an</span> <span m='1397360'>11</span> <span
  m='1397780'>dimensional</span> <span m='1398710'>plane</span> <span
  m='1400060'>going</span> <span m='1400330'>through</span> <span
  m='1400540'>the</span> <span m='1400690'>origin.</span> <span m='1402370'>In
  fact,</span> <span m='1402760'>it</span> <span m='1402850'>wouldn't</span>
  <span m='1403180'>go</span> <span m='1403360'>through</span> <span
  m='1403600'>the</span> <span m='1403750'>origin</span> <span
  m='1404170'>because</span> <span m='1404410'>the</span> <span
  m='1404530'>origin</span> <span m='1404920'>won't</span> <span
  m='1405160'>have</span> <span m='1405370'>rank</span> <span
  m='1405610'>R.</span> <span m='1406910'>So</span> <span
  m='1407310'>it's</span> <span m='1407430'>some</span> <span
  m='1407680'>kind</span> <span m='1407950'>of</span> <span m='1408070'>a</span>
  <span m='1408130'>surface.</span> <span m='1408910'>And</span> <span
  m='1409060'>maybe</span> <span m='1409360'>it's</span> <span
  m='1409540'>got</span> <span m='1409750'>some</span> <span
  m='1410230'>different</span> <span m='1410620'>pieces.</span> <span
  m='1411610'>Probably,</span> <span m='1412780'>some</span> <span
  m='1413290'>smart</span> <span m='1413650'>person</span> <span
  m='1414070'>knows</span> <span m='1414550'>what</span> <span
  m='1414730'>that</span> <span m='1414970'>surface</span> <span
  m='1415480'>looks</span> <span m='1415750'>like.</span> <span
  m='1416890'>But</span> <span m='1417280'>we're</span> <span
  m='1417580'>just</span> <span m='1417820'>going</span> <span
  m='1418020'>to</span> <span m='1418090'>find</span> <span
  m='1418480'>out</span> <span m='1419890'>something</span> <span
  m='1420220'>about</span> <span m='1420460'>its</span> <span
  m='1421550'>number</span> <span m='1421900'>of</span> <span
  m='1421990'>parameters,</span> <span m='1422740'>its</span> <span
  m='1422920'>local</span> <span m='1423370'>dimension.</span> <span
  m='1424210'>Well,</span> <span m='1424510'>I</span> <span
  m='1424690'>know</span> <span m='1425020'>that</span> <span
  m='1425190'>this</span> <span m='1425500'>answer</span> <span
  m='1425920'>is</span> <span m='1426235'>R</span> <span
  m='1427765'>because</span> <span m='1428170'>I've</span> <span
  m='1428290'>got</span> <span m='1428830'>R</span> <span
  m='1429680'>sigmas.</span> <span m='1430840'>And</span> <span
  m='1431110'>this</span> <span m='1431410'>one,</span> <span
  m='1431810'>I'm</span> <span m='1431920'>pretty</span> <span
  m='1432250'>good</span> <span m='1432550'>at.</span> <span
  m='1433450'>But</span> <span m='1433690'>now</span> <span
  m='1434410'>it's</span> <span m='1434650'>not--</span> <span
  m='1435760'>it's</span> <span m='1436390'>R</span> <span m='1436690'>by</span>
  <span m='1437140'>n,</span> <span m='1437650'>so</span> <span
  m='1437920'>it's--</span> <span m='1439020'>instead</span> <span
  m='1439390'>of--</span> <span m='1440290'>here</span> <span
  m='1440530'>R</span> <span m='1440740'>was</span> <span m='1441040'>m.</span>
  <span m='1442765'>But</span> <span m='1443020'>now,</span> <span
  m='1443290'>down</span> <span m='1443590'>here,</span> <span
  m='1443860'>R</span> <span m='1444130'>is</span> <span m='1444340'>R.</span>
  <span m='1444640'>So</span> <span m='1444880'>I</span> <span
  m='1445300'>think</span> <span m='1445600'>it's</span> <span
  m='1447010'>rn</span> <span m='1449110'>minus</span> <span
  m='1451180'>1/2.</span> <span m='1454120'>What's</span> <span
  m='1454410'>that?</span> <span m='1454900'>Is</span> <span
  m='1455020'>that</span> <span m='1455200'>an</span> <span
  m='1455350'>m?</span> <span m='1456790'>So</span> <span m='1457010'>now</span>
  <span m='1457220'>it's</span> <span m='1457400'>an</span> <span
  m='1457550'>r.</span> <span m='1458830'>r</span> <span m='1459230'>plus</span>
  <span m='1459640'>1.</span> <span m='1461120'>I</span> <span
  m='1461240'>think.</span> <span m='1463100'>I</span> <span
  m='1463190'>think.</span> </p><p><span m='1465500'>And</span> <span
  m='1465830'>what</span> <span m='1466040'>about</span> <span
  m='1466550'>the</span> <span m='1466910'>U?</span> <span m='1468770'>So</span>
  <span m='1469040'>U</span> <span m='1469360'>is</span> <span
  m='1469550'>going</span> <span m='1469660'>to</span> <span
  m='1469790'>be</span> <span m='1470000'>similar,</span> <span
  m='1471910'>except</span> <span m='1472600'>instead</span> <span
  m='1473080'>of</span> <span m='1473200'>the</span> <span m='1473350'>n</span>
  <span m='1473740'>here,</span> <span m='1474040'>we've</span> <span
  m='1474310'>got</span> <span m='1474580'>an</span> <span m='1474730'>m.</span>
  <span m='1475690'>So</span> <span m='1476050'>I</span> <span
  m='1476170'>think</span> <span m='1477490'>for</span> <span
  m='1477670'>you,</span> <span m='1478840'>we'll</span> <span
  m='1479050'>have</span> <span m='1479350'>m</span> <span
  m='1479650'>minus</span> <span m='1480130'>1,</span> <span
  m='1480550'>plus</span> <span m='1480850'>m</span> <span
  m='1481090'>minus</span> <span m='1481510'>2,</span> <span
  m='1481870'>plus--</span> <span m='1482960'>so</span> <span
  m='1483790'>let</span> <span m='1483940'>me</span> <span
  m='1484060'>write</span> <span m='1484360'>it</span> <span
  m='1484420'>here.</span> <span m='1485110'>m</span> <span
  m='1485320'>minus</span> <span m='1485790'>1.</span> <span
  m='1486966'>So</span> <span m='1487360'>U,</span> <span m='1487750'>I'm</span>
  <span m='1487900'>talking</span> <span m='1488200'>about</span> <span
  m='1488380'>U</span> <span m='1488650'>here,</span> <span
  m='1489400'>it's</span> <span m='1489580'>got</span> <span
  m='1489790'>R</span> <span m='1490000'>columns.</span> <span
  m='1491290'>The</span> <span m='1491380'>first</span> <span
  m='1491800'>one</span> <span m='1492010'>has</span> <span m='1492340'>m</span>
  <span m='1492430'>minus 1</span> <span m='1492910'>because</span> <span
  m='1493660'>I</span> <span m='1493750'>throw</span> <span
  m='1494010'>away</span> <span m='1494290'>1</span> <span
  m='1494740'>because</span> <span m='1495040'>it's</span> <span
  m='1495190'>a</span> <span m='1495280'>unit</span> <span
  m='1495580'>vector,</span> <span m='1496510'>up</span> <span
  m='1496690'>to</span> <span m='1497950'>m</span> <span
  m='1498220'>minus</span> <span m='1498730'>r.</span> <span
  m='1499130'>That's</span> <span m='1499470'>r's</span> <span
  m='1500170'>column.</span> <span m='1501190'>OK.</span> <span
  m='1502150'>And</span> <span m='1502270'>now</span> <span
  m='1504070'>so</span> <span m='1504280'>how--</span> <span
  m='1504490'>what</span> <span m='1505000'>does</span> <span
  m='1505150'>that</span> <span m='1505390'>add</span> <span
  m='1505570'>up</span> <span m='1505690'>to?</span> <span
  m='1505990'>Well,</span> <span m='1506230'>I</span> <span
  m='1506650'>put</span> <span m='1506860'>all</span> <span m='1507010'>the
  m's</span> <span m='1507550'>together.</span> <span m='1508200'>So</span>
  <span m='1508300'>that's</span> <span m='1508630'>rm,</span> <span
  m='1510206'>or</span> <span m='1510580'>let</span> <span m='1510670'>me</span>
  <span m='1510820'>say</span> <span m='1511120'>mr.</span> <span
  m='1513190'>And</span> <span m='1513370'>then</span> <span
  m='1513580'>I'm</span> <span m='1513700'>subtracting</span> <span
  m='1514420'>on</span> <span m='1514600'>1</span> <span m='1514930'>plus</span>
  <span m='1515260'>2</span> <span m='1515500'>plus</span> <span
  m='1515800'>3,</span> <span m='1516580'>up</span> <span m='1516730'>to</span>
  <span m='1516910'>r.</span> <span m='1517540'>Now</span> <span
  m='1517750'>tell</span> <span m='1517960'>me</span> <span
  m='1518080'>again</span> <span m='1518470'>what</span> <span
  m='1518710'>that</span> <span m='1519520'>adds</span> <span
  m='1519820'>up</span> <span m='1519970'>to.</span> <span m='1520750'>1</span>
  <span m='1520990'>plus</span> <span m='1521260'>2</span> <span
  m='1521500'>plus</span> <span m='1521800'>3,</span> <span
  m='1522160'>stop</span> <span m='1522550'>at</span> <span
  m='1522700'>r.</span> <span m='1523900'>That's</span> <span
  m='1524170'>what</span> <span m='1524350'>we</span> <span
  m='1524500'>had</span> <span m='1525160'>here.</span> <span
  m='1526640'>And</span> <span m='1526820'>we've</span> <span
  m='1527060'>got</span> <span m='1527330'>it</span> <span
  m='1528000'>for</span> <span m='1528200'>V.</span> <span
  m='1528590'>And</span> <span m='1528710'>we've</span> <span
  m='1528890'>got</span> <span m='1529130'>it</span> <span
  m='1529280'>again</span> <span m='1529570'>here.</span> <span
  m='1530240'>Minus</span> <span m='1530660'>1/2</span> <span
  m='1531650'>r,</span> <span m='1532490'>r</span> <span m='1532850'>plus</span>
  <span m='1533310'>1.</span> <span m='1535850'>Are</span> <span
  m='1536010'>you</span> <span m='1536160'>OK</span> <span
  m='1536460'>with</span> <span m='1536580'>that?</span> </p><p><span
  m='1537890'>And</span> <span m='1538240'>now</span> <span m='1538530'>I</span>
  <span m='1538590'>just</span> <span m='1538770'>want</span> <span
  m='1538950'>to</span> <span m='1539010'>add</span> <span
  m='1539220'>them</span> <span m='1539400'>up.</span> <span
  m='1541370'>So</span> <span m='1541580'>I</span> <span m='1541660'>have</span>
  <span m='1541820'>mr.</span> <span m='1543350'>And</span> <span m='1543500'>I
  have</span> <span m='1543710'>nr.</span> <span m='1545240'>And</span> <span
  m='1545390'>then</span> <span m='1545600'>I</span> <span
  m='1545690'>have</span> <span m='1545900'>two</span> <span
  m='1546170'>of</span> <span m='1546230'>these.</span> <span
  m='1546980'>So</span> <span m='1548000'>let</span> <span m='1548120'>me</span>
  <span m='1548420'>get</span> <span m='1548660'>it</span> <span
  m='1548780'>here.</span> <span m='1549440'>mr</span> <span
  m='1551330'>and</span> <span m='1551585'>nr.</span> <span
  m='1553250'>And</span> <span m='1553370'>now</span> <span m='1553610'>I</span>
  <span m='1553700'>have</span> <span m='1553910'>to</span> <span
  m='1554090'>look</span> <span m='1554360'>at--</span> <span
  m='1554640'>so</span> <span m='1554810'>mr,</span> <span
  m='1555410'>check.</span> <span m='1556340'>nr,</span> <span
  m='1556850'>check.</span> <span m='1558140'>Now</span> <span
  m='1558350'>I</span> <span m='1558500'>have</span> <span
  m='1558770'>two</span> <span m='1559040'>of</span> <span
  m='1559100'>these</span> <span m='1559430'>guys.</span> <span
  m='1559910'>So</span> <span m='1560120'>they</span> <span
  m='1560360'>combine</span> <span m='1561530'>into</span> <span
  m='1562400'>r</span> <span m='1562610'>squared</span> <span
  m='1562970'>plus</span> <span m='1563330'>r.</span> <span
  m='1564170'>And</span> <span m='1564260'>then</span> <span
  m='1564440'>I--</span> <span m='1565100'>r</span> <span
  m='1565490'>squared,</span> <span m='1567980'>yeah,</span> <span
  m='1568420'>minus</span> <span m='1569020'>r</span> <span
  m='1569170'>squared</span> <span m='1569470'>plus</span> <span
  m='1569710'>r.</span> <span m='1569860'>Sorry.</span> <span
  m='1570490'>They</span> <span m='1570610'>combine</span> <span
  m='1571090'>into</span> <span m='1571330'>minus</span> <span
  m='1572110'>r</span> <span m='1572290'>squared</span> <span
  m='1573010'>plus</span> <span m='1573310'>r.</span> <span
  m='1573580'>And</span> <span m='1573700'>then</span> <span
  m='1574300'>here's</span> <span m='1575005'>r</span> <span
  m='1575410'>coming</span> <span m='1575710'>in</span> <span
  m='1575800'>with</span> <span m='1575980'>a</span> <span
  m='1576010'>plus.</span> <span m='1576730'>I</span> <span
  m='1576850'>think</span> <span m='1577120'>we</span> <span
  m='1577270'>have</span> <span m='1577420'>a</span> <span
  m='1577480'>minus</span> <span m='1577960'>r</span> <span
  m='1578140'>squared.</span> <span m='1581600'>And</span> <span
  m='1581710'>that</span> <span m='1581920'>is</span> <span
  m='1582100'>the</span> <span m='1582190'>right</span> <span
  m='1582460'>answer.</span> <span m='1584280'>Yeah.</span> </p><p><span
  m='1585010'>OK.</span> <span m='1586000'>So</span> <span m='1587400'>I</span>
  <span m='1587850'>took</span> <span m='1588150'>a</span> <span
  m='1588210'>bit</span> <span m='1588390'>longer</span> <span
  m='1588750'>than</span> <span m='1588930'>I</span> <span
  m='1589380'>intended.</span> <span m='1590110'>But</span> <span
  m='1590820'>this</span> <span m='1591030'>is</span> <span m='1591180'>a</span>
  <span m='1591270'>number</span> <span m='1592760'>that's</span> <span
  m='1593040'>sort</span> <span m='1593340'>of</span> <span
  m='1593490'>interesting.</span> <span m='1595150'>I</span> <span
  m='1595250'>mentioned</span> <span m='1595560'>saddle</span> <span
  m='1595890'>points</span> <span m='1596220'>sort</span> <span
  m='1596450'>of,</span> <span m='1596520'>like,</span> <span
  m='1596760'>separately</span> <span m='1597390'>from</span> <span
  m='1597630'>maxima</span> <span m='1598230'>and</span> <span
  m='1598320'>minima</span> <span m='1599490'>just</span> <span
  m='1599700'>because</span> <span m='1600120'>they</span> <span
  m='1600360'>are</span> <span m='1600570'>definitely</span> <span
  m='1602340'>not</span> <span m='1602580'>as</span> <span
  m='1602730'>easy</span> <span m='1603060'>to</span> <span
  m='1603180'>work</span> <span m='1603510'>with.</span> <span
  m='1604710'>You</span> <span m='1604860'>understand</span> <span
  m='1605370'>what</span> <span m='1605550'>I</span> <span
  m='1605640'>mean</span> <span m='1605880'>by</span> <span
  m='1606120'>saddle</span> <span m='1606540'>points?</span> <span
  m='1607870'>The</span> <span m='1608280'>matrices</span> <span
  m='1609810'>involved</span> <span m='1610530'>have--</span> <span
  m='1612280'>are</span> <span m='1612400'>not</span> <span
  m='1612700'>positive</span> <span m='1613240'>definite.</span> <span
  m='1614850'>Those</span> <span m='1615170'>would</span> <span
  m='1615330'>go</span> <span m='1615600'>with</span> <span m='1615840'>a</span>
  <span m='1615900'>maximum.</span> <span m='1618510'>They're</span> <span
  m='1618660'>not</span> <span m='1620370'>negati--</span> <span
  m='1621060'>they're</span> <span m='1621240'>not--</span> <span
  m='1622250'>well,</span> <span m='1622840'>those</span> <span
  m='1623080'>would</span> <span m='1623220'>go</span> <span
  m='1623430'>with</span> <span m='1623640'>maxima</span> <span
  m='1624240'>and</span> <span m='1624330'>minima.</span> <span
  m='1624750'>But</span> <span m='1624990'>we're</span> <span
  m='1625800'>looking</span> <span m='1626190'>in</span> <span
  m='1626350'>between.</span> <span m='1626880'>So</span> <span
  m='1627130'>saddle</span> <span m='1627450'>points.</span> <span
  m='1628390'>OK.</span> <span m='1628910'>Well,</span> <span
  m='1629360'>I'll</span> <span m='1629650'>get</span> <span
  m='1629970'>going</span> <span m='1630330'>on</span> <span
  m='1630450'>those.</span> </p><p><span m='1631330'>OK.</span> <span
  m='1631770'>I</span> <span m='1632190'>sort</span> <span m='1632430'>of</span>
  <span m='1632520'>realized</span> <span m='1633120'>that</span> <span
  m='1633360'>there</span> <span m='1633540'>are</span> <span
  m='1633630'>two</span> <span m='1634050'>main</span> <span
  m='1635610'>sources</span> <span m='1636450'>of</span> <span
  m='1636630'>saddle</span> <span m='1637020'>points.</span> <span
  m='1639630'>One</span> <span m='1640070'>of</span> <span
  m='1640190'>them</span> <span m='1640400'>is</span> <span
  m='1641600'>when</span> <span m='1641810'>I</span> <span
  m='1641960'>have</span> <span m='1642290'>problems</span> <span
  m='1643520'>that--</span> <span m='1644210'>when</span> <span
  m='1644540'>I--</span> <span m='1645350'>let's</span> <span
  m='1645740'>say</span> <span m='1646010'>I</span> <span
  m='1646160'>minimize.</span> <span m='1646870'>So</span> <span
  m='1647180'>this</span> <span m='1647480'>will</span> <span
  m='1647630'>be</span> <span m='1648020'>the</span> <span
  m='1649310'>constraint.</span> <span m='1650892'>The</span> <span
  m='1651350'>saddle</span> <span m='1651680'>points</span> <span
  m='1652040'>have</span> <span m='1652150'>come</span> <span
  m='1652370'>from</span> <span m='1652580'>the</span> <span
  m='1652700'>constraint.</span> <span m='1653960'>So</span> <span
  m='1656030'>Lagrange</span> <span m='1656540'>is</span> <span
  m='1656680'>going</span> <span m='1656810'>to</span> <span
  m='1656930'>be</span> <span m='1657050'>responsible</span> <span
  m='1657740'>for</span> <span m='1657890'>these</span> <span
  m='1658340'>saddle</span> <span m='1658700'>points.</span> <span
  m='1659450'>So</span> <span m='1659630'>we</span> <span
  m='1659720'>might</span> <span m='1659960'>have</span> <span
  m='1660140'>some</span> <span m='1660350'>minimum</span> <span
  m='1660830'>problem</span> <span m='1661690'>like</span> <span
  m='1661940'>minimize,</span> <span m='1663530'>some</span> <span
  m='1663770'>positive</span> <span m='1664400'>definite</span> <span
  m='1664910'>thing.</span> <span m='1667110'>And</span> <span
  m='1667230'>of</span> <span m='1667350'>course,</span> <span
  m='1667710'>if</span> <span m='1667830'>we</span> <span
  m='1667950'>don't</span> <span m='1668220'>say</span> <span
  m='1668480'>anymore,</span> <span m='1669720'>the</span> <span
  m='1669810'>minimum</span> <span m='1670320'>is</span> <span
  m='1670470'>zero.</span> <span m='1671520'>Right?</span> <span
  m='1672670'>Because</span> <span m='1672940'>otherwise,</span> <span
  m='1673450'>it's</span> <span m='1673630'>positive.</span> </p><p><span
  m='1674860'>But</span> <span m='1675420'>we're</span> <span
  m='1675590'>going</span> <span m='1675720'>to</span> <span
  m='1675820'>put</span> <span m='1676060'>on</span> <span
  m='1676270'>constraints,</span> <span m='1677640'>Ax</span> <span
  m='1678250'>equal</span> <span m='1678550'>b.</span> <span
  m='1679720'>So</span> <span m='1679870'>this</span> <span
  m='1680110'>is</span> <span m='1680290'>the</span> <span
  m='1680620'>classical</span> <span m='1683920'>constrained</span> <span
  m='1685480'>optimization</span> <span m='1686440'>problem,</span> <span
  m='1687340'>quadratic</span> <span m='1689280'>cost</span> <span
  m='1689760'>function,</span> <span m='1690450'>linear</span> <span
  m='1690960'>constraints.</span> <span m='1692310'>We</span> <span
  m='1692880'>could</span> <span m='1693120'>solve</span> <span
  m='1693510'>this</span> <span m='1693780'>exactly.</span> <span
  m='1696000'>But</span> <span m='1696300'>let's</span> <span
  m='1696600'>just</span> <span m='1696870'>see</span> <span
  m='1697290'>where</span> <span m='1697650'>saddle</span> <span
  m='1698020'>points</span> <span m='1698400'>is</span> <span
  m='1698520'>going</span> <span m='1698700'>to</span> <span
  m='1698770'>arise.</span> </p><p><span m='1701690'>So</span> <span
  m='1702290'>this</span> <span m='1702620'>S</span> <span m='1702860'>is</span>
  <span m='1703070'>positive</span> <span m='1703580'>definite.</span> <span
  m='1705440'>But</span> <span m='1705650'>now</span> <span
  m='1705920'>how</span> <span m='1706100'>do</span> <span m='1706190'>we</span>
  <span m='1706340'>deal</span> <span m='1706580'>with</span> <span
  m='1706730'>that</span> <span m='1706910'>problem?</span> <span
  m='1708410'>Well,</span> <span m='1708650'>Lagrange</span> <span
  m='1709130'>said</span> <span m='1709490'>what</span> <span
  m='1709700'>to</span> <span m='1709850'>do.</span> <span
  m='1710990'>Lagrange</span> <span m='1711440'>said,</span> <span
  m='1711920'>look</span> <span m='1712280'>at</span> <span
  m='1713270'>the</span> <span m='1713570'>Lagrangium.</span> <span
  m='1716500'>Well,</span> <span m='1716970'>OK.</span> <span
  m='1718220'>He</span> <span m='1718460'>introduced</span> <span
  m='1719210'>lambda.</span> <span m='1722420'>This</span> <span
  m='1722690'>x</span> <span m='1724010'>is</span> <span m='1724250'>in</span>
  <span m='1724430'>n</span> <span m='1724610'>dimensions.</span> <span
  m='1725270'>That's</span> <span m='1725540'>an</span> <span
  m='1725660'>n</span> <span m='1725840'>by</span> <span m='1726080'>n</span>
  <span m='1726260'>matrix.</span> <span m='1727100'>But</span> <span
  m='1727280'>I</span> <span m='1727340'>have</span> <span m='1727610'>m</span>
  <span m='1728000'>constraints.</span> <span m='1728810'>So</span> <span
  m='1728960'>the</span> <span m='1729080'>matrix</span> <span
  m='1729620'>A</span> <span m='1729980'>is</span> <span m='1730160'>m</span>
  <span m='1730460'>by</span> <span m='1730730'>n.</span> <span
  m='1736460'>I've</span> <span m='1736640'>m</span> <span
  m='1736900'>constraints.</span> <span m='1738010'>And</span> <span
  m='1738190'>then</span> <span m='1739390'>I'm</span> <span
  m='1739600'>going</span> <span m='1739720'>to</span> <span
  m='1739840'>follow</span> <span m='1740170'>the</span> <span
  m='1740230'>rules</span> <span m='1740680'>and</span> <span
  m='1740830'>introduce</span> <span m='1741400'>m,</span> <span
  m='1741790'>Lagrange</span> <span m='1742300'>multipliers.</span> <span
  m='1746970'>That's</span> <span m='1747210'>an</span> <span
  m='1747360'>m.</span> </p><p><span m='1750530'>And</span> <span
  m='1750710'>then</span> <span m='1752180'>the</span> <span
  m='1752360'>neat</span> <span m='1752690'>part</span> <span
  m='1753080'>of</span> <span m='1753230'>the</span> <span
  m='1753450'>Legra--</span> <span m='1754010'>and</span> <span
  m='1754220'>what?</span> <span m='1754475'>What</span> <span
  m='1754730'>is</span> <span m='1754910'>this?</span> <span
  m='1755750'>Well,</span> <span m='1756140'>it's--</span> <span
  m='1756920'>I</span> <span m='1756980'>take</span> <span
  m='1757310'>the</span> <span m='1757430'>function,</span> <span
  m='1759650'>and</span> <span m='1759770'>then</span> <span
  m='1760040'>I</span> <span m='1761570'>introduce--</span> <span
  m='1762530'>remember,</span> <span m='1762950'>lambda's</span> <span
  m='1763430'>a</span> <span m='1763490'>vector</span> <span
  m='1764100'>now,</span> <span m='1765020'>not</span> <span
  m='1765230'>just</span> <span m='1765500'>a</span> <span
  m='1765560'>number.</span> <span m='1766100'>We</span> <span
  m='1766280'>had</span> <span m='1766550'>some</span> <span
  m='1766820'>application</span> <span m='1767420'>where</span> <span
  m='1767540'>it</span> <span m='1767600'>was</span> <span
  m='1767780'>just--</span> <span m='1768550'>there</span> <span
  m='1768680'>was</span> <span m='1768860'>just</span> <span
  m='1769100'>one</span> <span m='1769400'>constraint.</span> <span
  m='1769940'>But</span> <span m='1770060'>now</span> <span m='1770300'>I</span>
  <span m='1770390'>have</span> <span m='1770540'>m</span> <span
  m='1770870'>constraints.</span> <span m='1772050'>So</span> <span
  m='1772130'>I</span> <span m='1772220'>take</span> <span m='1772490'>a</span>
  <span m='1772520'>lambda.</span> <span m='1773150'>So</span> <span
  m='1773870'>lambda</span> <span m='1774290'>transposed</span> <span
  m='1775040'>times</span> <span m='1775610'>Ax</span> <span
  m='1776480'>minus</span> <span m='1776930'>b.</span> <span
  m='1779690'>And</span> <span m='1779930'>the</span> <span
  m='1779990'>plus</span> <span m='1780380'>or the</span> <span
  m='1780620'>minus</span> <span m='1781010'>sign</span> <span
  m='1781370'>here</span> <span m='1781640'>is</span> <span
  m='1781880'>not</span> <span m='1783320'>important.</span> <span
  m='1784220'>I</span> <span m='1784280'>mean,</span> <span
  m='1784580'>you</span> <span m='1785030'>can</span> <span
  m='1785300'>choose</span> <span m='1785660'>it</span> <span
  m='1785780'>because</span> <span m='1786050'>that</span> <span
  m='1786180'>will</span> <span m='1786320'>determine</span> <span
  m='1786950'>the</span> <span m='1787310'>sign</span> <span
  m='1787760'>of</span> <span m='1787880'>lambda.</span> <span
  m='1788440'>But</span> <span m='1789680'>either</span> <span
  m='1789980'>way,</span> <span m='1790190'>it's</span> <span
  m='1791000'>correct.</span> <span m='1792260'>OK.</span> </p><p><span
  m='1793310'>So</span> <span m='1794300'>we've</span> <span
  m='1794600'>introduced</span> <span m='1796970'>a</span> <span
  m='1797060'>function</span> <span m='1797660'>that</span> <span
  m='1797870'>now</span> <span m='1798170'>depends</span> <span
  m='1798800'>on</span> <span m='1799550'>x</span> <span m='1799970'>and</span>
  <span m='1800180'>also</span> <span m='1800690'>on</span> <span
  m='1800810'>lambda.</span> <span m='1802940'>And</span> <span
  m='1803120'>there</span> <span m='1803240'>is</span> <span m='1803410'>a
  l--</span> <span m='1804110'>and</span> <span m='1804260'>they</span> <span
  m='1804680'>multiply</span> <span m='1805280'>each</span> <span
  m='1805460'>other</span> <span m='1805700'>in there.</span> <span
  m='1808010'>And</span> <span m='1808190'>my</span> <span
  m='1808430'>point</span> <span m='1808790'>is</span> <span
  m='1810140'>that</span> <span m='1811480'>Lagrange</span> <span
  m='1811940'>says,</span> <span m='1812330'>take</span> <span
  m='1812600'>the</span> <span m='1812720'>derivatives</span> <span
  m='1814400'>with</span> <span m='1814610'>respect</span> <span
  m='1814970'>to</span> <span m='1815090'>x</span> <span m='1815600'>and</span>
  <span m='1815840'>lambda.</span> <span m='1816410'>So</span> <span
  m='1816650'>that's</span> <span m='1816960'>the</span> <span
  m='1817220'>cool</span> <span m='1817790'>thing</span> <span
  m='1818120'>that</span> <span m='1818270'>he's</span> <span
  m='1818510'>contributed.</span> <span m='1819200'>He</span> <span
  m='1819350'>says</span> <span m='1819650'>if</span> <span
  m='1819800'>you</span> <span m='1819890'>only</span> <span
  m='1820760'>create</span> <span m='1821120'>my</span> <span
  m='1821330'>function,</span> <span m='1822750'>now</span> <span
  m='1822950'>you</span> <span m='1823160'>can</span> <span
  m='1823460'>take</span> <span m='1824480'>x derivative</span> <span
  m='1825410'>and</span> <span m='1825620'>lambda</span> <span
  m='1826040'>derivative.</span> <span m='1826610'>That</span> <span
  m='1826770'>will</span> <span m='1826860'>give</span> <span
  m='1827090'>you</span> <span m='1828340'>n</span> <span
  m='1828610'>equation</span> <span m='1829310'>for</span> <span
  m='1830150'>the</span> <span m='1830300'>x--</span> <span
  m='1831080'>from</span> <span m='1831320'>this</span> <span
  m='1831620'>one,</span> <span m='1832040'>from</span> <span
  m='1832190'>the</span> <span m='1832310'>x derivative</span> <span
  m='1833120'>and</span> <span m='1833230'>the</span> <span m='1833450'>m</span>
  <span m='1833650'>equation</span> <span m='1834240'>from</span> <span
  m='1834500'>the</span> <span m='1834590'>lambda</span> <span
  m='1835070'>derivative.</span> <span m='1835400'>It</span> <span
  m='1835730'>will</span> <span m='1835850'>be</span> <span m='1836030'>n</span>
  <span m='1836270'>plus</span> <span m='1836660'>m.</span> <span
  m='1837260'>It</span> <span m='1837530'>will</span> <span
  m='1837620'>determine</span> <span m='1838310'>the</span> <span
  m='1838430'>good</span> <span m='1838760'>x</span> <span
  m='1839090'>and</span> <span m='1839210'>the</span> <span
  m='1839300'>lambda.</span> <span m='1840200'>But</span> <span
  m='1840380'>I'm</span> <span m='1840620'>saying</span> <span
  m='1841670'>that's</span> <span m='1842030'>all</span> <span
  m='1842240'>true</span> <span m='1842690'>and</span> <span
  m='1842840'>all</span> <span m='1843080'>important.</span> <span
  m='1844190'>But</span> <span m='1844430'>I'm</span> <span
  m='1844580'>saying</span> <span m='1844850'>that</span> <span
  m='1845000'>the</span> <span m='1845180'>x</span> <span m='1845510'>and</span>
  <span m='1845630'>that</span> <span m='1846200'>pair</span> <span
  m='1846620'>x</span> <span m='1847010'>lambda</span> <span
  m='1847550'>will</span> <span m='1847790'>be</span> <span m='1848030'>a</span>
  <span m='1848150'>saddle</span> <span m='1848660'>point</span> <span
  m='1849590'>of</span> <span m='1849740'>this</span> <span
  m='1849980'>function.</span> <span m='1850880'>This</span> <span
  m='1851120'>function</span> <span m='1851570'>has</span> <span
  m='1851780'>saddle</span> <span m='1852230'>points,</span> <span
  m='1852710'>not</span> <span m='1854690'>a</span> <span
  m='1854750'>maximum.</span> </p><p><span m='1856590'>OK.</span> <span
  m='1857260'>Let's</span> <span m='1857500'>just</span> <span
  m='1857710'>take</span> <span m='1858010'>the</span> <span
  m='1858130'>derivatives</span> <span m='1858790'>and</span> <span
  m='1858940'>see</span> <span m='1859180'>what</span> <span
  m='1859360'>we</span> <span m='1859510'>get.</span> <span
  m='1860210'>So</span> <span m='1860320'>the</span> <span
  m='1861570'>derivatives</span> <span m='1862380'>with</span> <span
  m='1862530'>respect</span> <span m='1862920'>to</span> <span
  m='1863040'>x,</span> <span m='1863690'>d</span> <span m='1863880'>by</span>
  <span m='1864090'>dx--</span> <span m='1865650'>x</span> <span
  m='1866100'>is</span> <span m='1866230'>now</span> <span m='1866460'>a</span>
  <span m='1866520'>vector,</span> <span m='1867060'>so</span> <span
  m='1867240'>I</span> <span m='1867360'>really</span> <span
  m='1867660'>should</span> <span m='1867870'>say</span> <span
  m='1869080'>the</span> <span m='1869370'>gradient</span> <span
  m='1870330'>in</span> <span m='1870510'>the</span> <span m='1870660'>x</span>
  <span m='1870900'>direction.</span> <span m='1872910'>I</span> <span
  m='1873000'>get</span> <span m='1874230'>Sx.</span> <span
  m='1877050'>And</span> <span m='1877470'>here,</span> <span
  m='1877800'>the</span> <span m='1877980'>derivative</span> <span
  m='1878520'>with</span> <span m='1878610'>respect to</span> <span
  m='1879040'>x,</span> <span m='1879960'>what</span> <span
  m='1880450'>that's--</span> <span m='1881460'>that</span> <span
  m='1881820'>is</span> <span m='1883080'>A</span> <span
  m='1883320'>transpose</span> <span m='1884190'>lambda</span> <span
  m='1885540'>because this is</span> <span m='1886140'>the</span> <span
  m='1886260'>dot</span> <span m='1886560'>product</span> <span
  m='1887070'>of</span> <span m='1887220'>A</span> <span
  m='1887370'>transpose</span> <span m='1887970'>lambda</span> <span
  m='1888420'>with</span> <span m='1888660'>x.</span> <span
  m='1889360'>You</span> <span m='1889860'>know,</span> <span
  m='1890070'>I've</span> <span m='1890190'>put</span> <span
  m='1890430'>parentheses</span> <span m='1891210'>around</span> <span
  m='1891630'>it</span> <span m='1892220'>and</span> <span
  m='1892670'>followed</span> <span m='1893060'>the</span> <span
  m='1893220'>transpose</span> <span m='1893880'>rule.</span> <span
  m='1894610'>So</span> <span m='1894840'>that's</span> <span
  m='1895290'>the</span> <span m='1895860'>dot</span> <span
  m='1896130'>product</span> <span m='1896550'>of</span> <span
  m='1896670'>A</span> <span m='1896790'>transpose</span> <span
  m='1897330'>lambda</span> <span m='1897660'>with</span> <span
  m='1897870'>x.</span> <span m='1898200'>It's</span> <span
  m='1898380'>linear</span> <span m='1898890'>in</span> <span
  m='1899040'>x.</span> <span m='1899370'>So</span> <span
  m='1899580'>it's</span> <span m='1899730'>derivative.</span> <span
  m='1900300'>It's</span> <span m='1900450'>just</span> <span
  m='1901020'>A</span> <span m='1901170'>transpose</span> <span
  m='1901680'>lambda.</span> <span m='1902460'>And</span> <span
  m='1902580'>that's</span> <span m='1903210'>zero.</span> </p><p><span
  m='1905950'>And</span> <span m='1906040'>now</span> <span m='1906340'>I</span>
  <span m='1906490'>take</span> <span m='1906790'>the</span> <span
  m='1906970'>other</span> <span m='1907210'>one,</span> <span
  m='1908130'>the</span> <span m='1908530'>lambda</span> <span
  m='1909040'>derivative.</span> <span m='1911506'>The</span> <span
  m='1911950'>lambda</span> <span m='1912430'>derivative,</span> <span
  m='1912940'>this</span> <span m='1913150'>doesn't</span> <span
  m='1913480'>depend</span> <span m='1913870'>on</span> <span
  m='1914020'>lambda.</span> <span m='1914305'>The</span> <span
  m='1914590'>lambda</span> <span m='1915040'>derivative</span> <span
  m='1915700'>is</span> <span m='1915850'>just</span> <span
  m='1916180'>Ax</span> <span m='1916570'>minus</span> <span
  m='1916900'>b.</span> <span m='1917080'>It</span> <span
  m='1917260'>brings</span> <span m='1917650'>back</span> <span
  m='1918010'>the</span> <span m='1918550'>constraints.</span> <span
  m='1923400'>So</span> <span m='1923610'>that's</span> <span
  m='1923910'>pretty</span> <span m='1924660'>simple.</span> <span
  m='1926130'>It</span> <span m='1926200'>doesn't</span> <span
  m='1926630'>even</span> <span m='1926970'>require</span> <span
  m='1927450'>much</span> <span m='1927780'>thought</span> <span
  m='1928170'>because</span> <span m='1928410'>you</span> <span
  m='1928620'>just</span> <span m='1928980'>know</span> <span
  m='1929310'>the</span> <span m='1929460'>constraints</span> <span
  m='1930060'>are</span> <span m='1930150'>coming</span> <span
  m='1930480'>back.</span> <span m='1931290'>And</span> <span
  m='1931440'>of</span> <span m='1931530'>course,</span> <span
  m='1931830'>b</span> <span m='1932340'>should</span> <span
  m='1932610'>be</span> <span m='1932760'>put</span> <span
  m='1933030'>over</span> <span m='1933330'>on</span> <span
  m='1933960'>this</span> <span m='1934170'>side</span> <span
  m='1936240'>because</span> <span m='1936930'>it's a</span> <span
  m='1937260'>constant.</span> <span m='1938310'>So</span> <span
  m='1938490'>there</span> <span m='1938730'>we</span> <span
  m='1938940'>see</span> <span m='1940710'>two--</span> <span
  m='1941910'>a</span> <span m='1942100'>block.</span> <span
  m='1943560'>We</span> <span m='1943740'>see</span> <span m='1943980'>an</span>
  <span m='1944370'>important,</span> <span m='1945090'>very</span> <span
  m='1945540'>important</span> <span m='1946080'>class</span> <span
  m='1946590'>of</span> <span m='1946830'>problems.</span> <span
  m='1947910'>And</span> <span m='1948030'>the</span> <span
  m='1948120'>matrix</span> <span m='1948720'>we're</span> <span
  m='1948900'>seeing,</span> <span m='1949380'>we</span> <span
  m='1949560'>could</span> <span m='1949740'>write</span> <span
  m='1950000'>this</span> <span m='1950410'>in</span> <span
  m='1950690'>block</span> <span m='1951120'>matrix</span> <span
  m='1951720'>form,</span> <span m='1952080'>S</span> <span
  m='1954230'>minus</span> <span m='1954770'>A</span> <span
  m='1955040'>transpose.</span> </p><p><span m='1957020'>Oh,</span> <span
  m='1958070'>I'm</span> <span m='1958340'>going</span> <span
  m='1958440'>to</span> <span m='1958580'>change</span> <span
  m='1958990'>that</span> <span m='1959110'>into</span> <span
  m='1959270'>a</span> <span m='1959330'>plus</span> <span
  m='1959840'>because</span> <span m='1960080'>I'm</span> <span
  m='1960710'>more</span> <span m='1960890'>of</span> <span m='1961010'>a</span>
  <span m='1961100'>plus</span> <span m='1961550'>person.</span> <span
  m='1962660'>OK.</span> <span m='1963230'>A</span> <span
  m='1963560'>transpose</span> <span m='1965300'>and</span> <span
  m='1966430'>A,</span> <span m='1967920'>yeah,</span> <span
  m='1968640'>yeah.</span> <span m='1969050'>When</span> <span
  m='1970250'>I</span> <span m='1970340'>took</span> <span
  m='1970580'>the</span> <span m='1970700'>derivative</span> <span
  m='1971160'>with respect</span> <span m='1971400'>to</span> <span
  m='1971540'>lambda,</span> <span m='1971930'>I</span> <span
  m='1972050'>didn't</span> <span m='1972740'>put</span> <span
  m='1972950'>the</span> <span m='1973070'>minus</span> <span
  m='1973430'>sign</span> <span m='1973790'>in</span> <span
  m='1973940'>here.</span> <span m='1974210'>And</span> <span
  m='1974330'>I</span> <span m='1974390'>didn't</span> <span
  m='1974660'>want</span> <span m='1974960'>to.</span> <span
  m='1975260'>So</span> <span m='1975920'>let's</span> <span
  m='1976130'>make</span> <span m='1976370'>it</span> <span m='1976460'>a</span>
  <span m='1976520'>plus.</span> <span m='1977380'>A</span> <span
  m='1978260'>and</span> <span m='1978620'>then</span> <span
  m='1979150'>there's</span> <span m='1981410'>nothing</span> <span
  m='1982220'>there.</span> <span m='1983420'>And</span> <span
  m='1983630'>the</span> <span m='1983780'>x,</span> <span
  m='1984470'>and</span> <span m='1984650'>the</span> <span
  m='1984740'>lambda,</span> <span m='1986060'>and</span> <span
  m='1986310'>the</span> <span m='1986450'>zero,</span> <span
  m='1987110'>and</span> <span m='1987320'>the</span> <span
  m='1987440'>B.</span> </p><p><span m='1991740'>That</span> <span
  m='1992010'>is</span> <span m='1992250'>the</span> <span
  m='1992370'>model</span> <span m='1993150'>of</span> <span
  m='1993450'>a</span> <span m='1994590'>constrained</span> <span
  m='1995880'>minimum,</span> <span m='1996380'>a</span> <span
  m='1996480'>minimum</span> <span m='1996960'>problem</span> <span
  m='1997380'>with</span> <span m='1997590'>constraint.</span> <span
  m='1998940'>It's</span> <span m='1999150'>the</span> <span
  m='1999210'>model</span> <span m='1999600'>because</span> <span
  m='2000830'>the</span> <span m='2000920'>function</span> <span
  m='2001400'>here</span> <span m='2001610'>is</span> <span
  m='2001730'>quadratic</span> <span m='2002930'>and</span> <span
  m='2003080'>the</span> <span m='2003170'>constraints</span> <span
  m='2003800'>are</span> <span m='2003920'>linear.</span> <span
  m='2006770'>In</span> <span m='2008310'>Course</span> <span
  m='2008600'>6,</span> <span m='2009050'>it's</span> <span
  m='2010220'>everywhere,</span> <span m='2012080'>constantly</span> <span
  m='2012830'>appearing</span> <span m='2013850'>as</span> <span
  m='2014060'>the</span> <span m='2014180'>simplest</span> <span
  m='2014810'>model.</span> <span m='2015920'>OK.</span> <span
  m='2016280'>And</span> <span m='2016430'>my</span> <span
  m='2016670'>point</span> <span m='2017270'>today</span> <span
  m='2017870'>is</span> <span m='2018050'>just</span> <span
  m='2019660'>that</span> <span m='2019915'>the</span> <span
  m='2020170'>solution</span> <span m='2020950'>x</span> <span
  m='2021310'>lambda,</span> <span m='2022780'>that</span> <span
  m='2025740'>total</span> <span m='2026130'>solution,</span> <span
  m='2027490'>the</span> <span m='2028290'>x</span> <span
  m='2028620'>together</span> <span m='2029040'>with</span> <span
  m='2029240'>a</span> <span m='2029310'>lambda,</span> <span
  m='2030180'>that</span> <span m='2030390'>that</span> <span
  m='2030720'>is</span> <span m='2031050'>a</span> <span
  m='2031320'>saddle</span> <span m='2031980'>point</span> <span
  m='2033510'>of</span> <span m='2036450'>the</span> <span
  m='2036570'>Lagrangian</span> <span m='2037290'>function</span> <span
  m='2037700'>L.</span> <span m='2038190'>It's</span> <span m='2038430'>a</span>
  <span m='2038490'>saddle</span> <span m='2038880'>point,</span> <span
  m='2039180'>not</span> <span m='2039600'>a</span> <span
  m='2039690'>minimum.</span> </p><p><span m='2040860'>It's</span> <span
  m='2041010'>sort</span> <span m='2041280'>of</span> <span m='2041370'>a</span>
  <span m='2041460'>minimum</span> <span m='2042120'>in</span> <span
  m='2042240'>the</span> <span m='2042390'>x</span> <span
  m='2042660'>direction</span> <span m='2045425'>because</span> <span
  m='2046570'>this</span> <span m='2046900'>is</span> <span
  m='2047080'>positive</span> <span m='2047590'>definite.</span> <span
  m='2050230'>As</span> <span m='2050440'>a</span> <span
  m='2050500'>function</span> <span m='2050949'>of</span> <span
  m='2051070'>x,</span> <span m='2051400'>it's</span> <span
  m='2051639'>going</span> <span m='2051940'>up.</span> <span
  m='2054280'>But</span> <span m='2054960'>somehow</span> <span
  m='2055920'>the</span> <span m='2057780'>appearance</span> <span
  m='2058260'>of</span> <span m='2058380'>lambda</span> <span
  m='2059460'>makes</span> <span m='2059850'>this</span> <span
  m='2060150'>matrix</span> <span m='2061560'>indefinite.</span> <span
  m='2062940'>It</span> <span m='2063090'>starts</span> <span
  m='2063540'>positive</span> <span m='2064020'>definite,</span> <span
  m='2065280'>but</span> <span m='2065580'>it</span> <span
  m='2065730'>has</span> <span m='2066090'>this</span> <span
  m='2066480'>A</span> <span m='2066690'>transpose</span> <span
  m='2067079'>A</span> <span m='2067469'>and</span> <span
  m='2067770'>that</span> <span m='2068000'>0.</span> </p><p><span
  m='2069060'>It</span> <span m='2069179'>couldn't</span> <span
  m='2069449'>be</span> <span m='2069600'>p--</span> <span
  m='2069900'>actually,</span> <span m='2070590'>if</span> <span
  m='2070739'>I</span> <span m='2070830'>look</span> <span m='2071070'>at</span>
  <span m='2071159'>that</span> <span m='2071370'>matrix,</span> <span
  m='2071940'>I</span> <span m='2072060'>see</span> <span
  m='2072420'>it's</span> <span m='2072570'>not</span> <span
  m='2072780'>positive</span> <span m='2073260'>definite.</span> <span
  m='2074199'>What</span> <span m='2074639'>do</span> <span m='2074790'>I</span>
  <span m='2074940'>see?</span> <span m='2075760'>Why</span> <span
  m='2075840'>do</span> <span m='2075989'>I</span> <span m='2076080'>say</span>
  <span m='2076350'>that</span> <span m='2076590'>immediately?</span> <span
  m='2077580'>When</span> <span m='2077730'>I</span> <span
  m='2077820'>look</span> <span m='2078060'>at</span> <span
  m='2078150'>that</span> <span m='2078330'>matrix,</span> <span
  m='2078870'>it's</span> <span m='2079050'>not</span> <span
  m='2079290'>a</span> <span m='2079350'>positive</span> <span
  m='2079800'>definite</span> <span m='2080219'>matrix</span> <span
  m='2081239'>because</span> <span m='2085010'>when</span> <span
  m='2085159'>I</span> <span m='2085310'>see</span> <span
  m='2085550'>that</span> <span m='2085790'>0</span> <span m='2086630'>on</span>
  <span m='2086810'>the</span> <span m='2086900'>diagonal,</span> <span
  m='2088460'>that</span> <span m='2088989'>shoots</span> <span
  m='2089420'>positive</span> <span m='2089920'>definite.</span> <span
  m='2090230'>Couldn't</span> <span m='2090500'>be.</span> </p><p><span
  m='2090980'>Take,</span> <span m='2091580'>as</span> <span
  m='2091730'>an</span> <span m='2091880'>example,</span> <span
  m='2092760'>S</span> <span m='2093179'>equal</span> <span
  m='2094159'>3,</span> <span m='2095059'>1,</span> <span m='2095509'>and
  1,</span> <span m='2096409'>0.</span> <span m='2096830'>Take</span> <span
  m='2097070'>that</span> <span m='2097250'>matrix.</span> <span
  m='2098510'>Just</span> <span m='2099380'>random.</span> <span
  m='2101990'>I</span> <span m='2102050'>made</span> <span m='2102290'>it</span>
  <span m='2102380'>2</span> <span m='2102590'>by</span> <span
  m='2102770'>2</span> <span m='2103100'>instead</span> <span
  m='2103460'>of</span> <span m='2103550'>size</span> <span m='2104300'>m</span>
  <span m='2104540'>plus</span> <span m='2104930'>n.</span> <span
  m='2106250'>Do</span> <span m='2106390'>you</span> <span m='2106540'>see?
  Or</span> <span m='2106980'>how</span> <span m='2107090'>do</span> <span
  m='2107270'>I</span> <span m='2107360'>know</span> <span
  m='2107690'>that</span> <span m='2107840'>the</span> <span
  m='2108050'>eigenvalues</span> <span m='2108920'>of</span> <span
  m='2109010'>that</span> <span m='2109190'>matrix,</span> <span
  m='2111140'>one</span> <span m='2111530'>is</span> <span
  m='2111680'>plus</span> <span m='2112040'>and</span> <span
  m='2112160'>one</span> <span m='2112370'>is</span> <span
  m='2112520'>minus?</span> <span m='2114810'>The</span> <span
  m='2114960'>determinant</span> <span m='2115710'>is</span> <span
  m='2116910'>negative.</span> <span m='2119990'>So</span> <span
  m='2120200'>that</span> <span m='2120380'>tells</span> <span
  m='2120620'>me</span> <span m='2120740'>right</span> <span
  m='2120950'>away</span> <span m='2121250'>that</span> <span
  m='2121370'>one</span> <span m='2121610'>is</span> <span
  m='2121730'>plus</span> <span m='2122030'>and</span> <span m='2122100'>one
  is</span> <span m='2122290'>minus.</span> <span m='2122810'>Thanks.</span>
  <span m='2123530'>Yes.</span> <span m='2123970'>Yeah,</span> <span
  m='2124300'>yeah.</span> <span m='2124450'>The</span> <span
  m='2124850'>determinant</span> <span m='2125450'>is</span> <span
  m='2125570'>negative.</span> <span m='2126020'>And</span> <span
  m='2126140'>somehow</span> <span m='2126860'>here,</span> <span
  m='2127220'>the</span> <span m='2127400'>determinate,</span> <span
  m='2127890'>a</span> <span m='2128020'>similar</span> <span
  m='2128510'>calculation,</span> <span m='2129350'>would</span> <span
  m='2129530'>produce</span> <span m='2130730'>A</span> <span
  m='2130910'>transpose</span> <span m='2131630'>A</span> <span
  m='2131900'>or</span> <span m='2132030'>something</span> <span
  m='2133640'>with</span> <span m='2133880'>a</span> <span
  m='2133940'>minus</span> <span m='2134500'>because</span> <span
  m='2134720'>I'm</span> <span m='2135360'>going</span> <span
  m='2135560'>this</span> <span m='2135800'>way.</span> </p><p><span
  m='2137000'>Well,</span> <span m='2137300'>I</span> <span
  m='2137420'>could</span> <span m='2138740'>do</span> <span
  m='2138920'>better</span> <span m='2139220'>than</span> <span
  m='2139400'>that.</span> <span m='2142010'>But</span> <span
  m='2142400'>you</span> <span m='2142610'>saw</span> <span
  m='2142850'>the</span> <span m='2142970'>point.</span> <span
  m='2145190'>That</span> <span m='2145910'>simple</span> <span
  m='2146390'>example</span> <span m='2146990'>of</span> <span
  m='2147140'>this</span> <span m='2149190'>has</span> <span
  m='2151590'>eigenvalues</span> <span m='2152340'>of</span> <span
  m='2152400'>both</span> <span m='2152700'>signs.</span> <span
  m='2153660'>Let</span> <span m='2153840'>me</span> <span
  m='2154050'>just</span> <span m='2154470'>quickly</span> <span
  m='2154920'>say,</span> <span m='2155310'>and</span> <span
  m='2155430'>I'll</span> <span m='2155700'>put</span> <span
  m='2156000'>it</span> <span m='2156150'>in</span> <span m='2156330'>the</span>
  <span m='2156930'>notes</span> <span m='2158580'>or</span> <span
  m='2158730'>in</span> <span m='2158850'>that</span> <span
  m='2159060'>chapter,</span> <span m='2159690'>I</span> <span
  m='2160050'>guess</span> <span m='2160320'>that</span> <span
  m='2160440'>all</span> <span m='2160650'>this</span> <span
  m='2160950'>is</span> <span m='2161130'>coming--</span> <span
  m='2162500'>is</span> <span m='2163320'>still</span> <span
  m='2164910'>3.2.</span> <span m='2167900'>That</span> <span
  m='2168090'>was</span> <span m='2168330'>originally</span> <span
  m='2168810'>4.2.</span> <span m='2169970'>And</span> <span
  m='2170550'>you</span> <span m='2170660'>will</span> <span
  m='2170790'>see</span> <span m='2171120'>it.</span> </p><p><span
  m='2173130'>So</span> <span m='2173370'>what</span> <span
  m='2173610'>do</span> <span m='2173730'>I</span> <span m='2173850'>want</span>
  <span m='2174030'>to</span> <span m='2174120'>say?</span> <span
  m='2174450'>I'd</span> <span m='2174660'>like</span> <span
  m='2174870'>to</span> <span m='2174990'>say</span> <span
  m='2175560'>that</span> <span m='2175950'>that</span> <span
  m='2176580'>example</span> <span m='2177510'>is</span> <span
  m='2177630'>pretty</span> <span m='2177960'>convincing</span> <span
  m='2178650'>to</span> <span m='2178800'>me</span> <span
  m='2179160'>that</span> <span m='2180180'>these</span> <span
  m='2181200'>KKT</span> <span m='2182670'>matrices,</span> <span
  m='2184320'>if</span> <span m='2184650'>you</span> <span
  m='2186510'>talk</span> <span m='2186810'>to</span> <span
  m='2186960'>people</span> <span m='2187440'>in</span> <span
  m='2193360'>optimization,</span> <span m='2195190'>that's</span> <span
  m='2195580'>Karush,</span> <span m='2196420'>Kuhn,</span> <span
  m='2197050'>and</span> <span m='2197230'>Tucker,</span> <span
  m='2197680'>three</span> <span m='2198070'>famous</span> <span
  m='2198580'>guys,</span> <span m='2199060'>and</span> <span
  m='2199180'>these</span> <span m='2199450'>are</span> <span
  m='2199540'>the</span> <span m='2200050'>KKT</span> <span
  m='2201220'>conditions</span> <span m='2202460'>that</span> <span
  m='2203950'>they</span> <span m='2204250'>derived</span> <span
  m='2205390'>following</span> <span m='2205900'>Lagrange.</span> <span
  m='2207000'>Right.</span> </p><p><span m='2207730'>And</span> <span
  m='2207940'>my</span> <span m='2208540'>point</span> <span
  m='2208900'>is--</span> <span m='2209480'>and</span> <span
  m='2209950'>this</span> <span m='2210160'>is</span> <span m='2210310'>a</span>
  <span m='2210430'>typical</span> <span m='2211440'>sort,</span> <span
  m='2212500'>so</span> <span m='2212740'>it's</span> <span
  m='2213850'>an</span> <span m='2213970'>indefinite</span> <span
  m='2214630'>matrix.</span> <span m='2215650'>I</span> <span
  m='2215830'>believe</span> <span m='2216460'>it</span> <span
  m='2216610'>has</span> <span m='2220040'>that</span> <span
  m='2221060'>if</span> <span m='2221270'>I</span> <span m='2221390'>do</span>
  <span m='2221570'>an</span> <span m='2221630'>elimination,</span> <span
  m='2222290'>yeah,</span> <span m='2222560'>tell</span> <span
  m='2222800'>me</span> <span m='2222950'>this.</span> <span m='2224590'>This
  is</span> <span m='2224920'>a</span> <span m='2225010'>good</span> <span
  m='2225190'>way</span> <span m='2225340'>to</span> <span
  m='2225460'>look</span> <span m='2225760'>at</span> <span
  m='2225910'>it.</span> <span m='2227080'>Suppose</span> <span
  m='2227470'>I</span> <span m='2227590'>do</span> <span
  m='2227800'>elimination</span> <span m='2228670'>on</span> <span
  m='2229420'>this</span> <span m='2229690'>one</span> <span
  m='2229990'>or</span> <span m='2230200'>on</span> <span
  m='2230350'>this</span> <span m='2230620'>one.</span> <span
  m='2230830'>Well,</span> <span m='2231130'>suppose</span> <span
  m='2231490'>I</span> <span m='2231610'>do</span> <span
  m='2231820'>elimination</span> <span m='2232480'>there.</span> <span
  m='2233200'>What</span> <span m='2233440'>is</span> <span
  m='2233560'>the</span> <span m='2233680'>first</span> <span
  m='2234010'>pivot?</span> <span m='2236070'>3.</span> <span
  m='2236960'>Positive.</span> </p><p><span m='2238170'>So</span> <span
  m='2238470'>now</span> <span m='2238740'>let</span> <span
  m='2238890'>me</span> <span m='2239010'>turn</span> <span
  m='2239250'>down</span> <span m='2239520'>to</span> <span
  m='2239610'>here.</span> <span m='2240270'>What</span> <span
  m='2240450'>if</span> <span m='2240570'>I</span> <span m='2240720'>do</span>
  <span m='2240930'>elimination</span> <span m='2241770'>on</span> <span
  m='2241890'>this</span> <span m='2243260'>block</span> <span
  m='2243650'>matrix?</span> <span m='2246120'>Then</span> <span
  m='2246330'>I</span> <span m='2246450'>start</span> <span
  m='2246780'>up</span> <span m='2246930'>here.</span> <span
  m='2247250'>And</span> <span m='2247860'>that</span> <span
  m='2248040'>first</span> <span m='2248370'>pivot</span> <span
  m='2248760'>is?</span> <span m='2250420'>Positive</span> <span
  m='2251150'>again,</span> <span m='2251440'>right?</span> <span
  m='2251890'>This</span> <span m='2252430'>S</span> <span m='2252760'>is</span>
  <span m='2252970'>a</span> <span m='2253060'>positive</span> <span
  m='2253600'>definite</span> <span m='2254020'>matrix.</span> <span
  m='2254530'>Don't</span> <span m='2254740'>forget.</span> <span
  m='2255520'>In</span> <span m='2255670'>fact,</span> <span
  m='2256510'>the</span> <span m='2256660'>first</span> <span
  m='2257260'>n</span> <span m='2257710'>pivots</span> <span
  m='2258210'>will</span> <span m='2258430'>all</span> <span
  m='2258610'>be</span> <span m='2258760'>positive</span> <span
  m='2259300'>because</span> <span m='2259540'>the</span> <span
  m='2259900'>first</span> <span m='2260230'>n</span> <span
  m='2260470'>pivots,</span> <span m='2260920'>you're</span> <span
  m='2261730'>working</span> <span m='2262150'>away</span> <span
  m='2262450'>in</span> <span m='2262570'>this</span> <span
  m='2262780'>corner.</span> <span m='2264130'>And</span> <span
  m='2264370'>if</span> <span m='2264520'>you're</span> <span
  m='2264590'>only</span> <span m='2265450'>thinking</span> <span
  m='2265720'>about</span> <span m='2265960'>the</span> <span
  m='2266050'>first</span> <span m='2266470'>n,</span> <span
  m='2267280'>this</span> <span m='2267520'>corner</span> <span
  m='2268060'>is</span> <span m='2268180'>size</span> <span m='2268690'>n</span>
  <span m='2268900'>by</span> <span m='2269110'>n,</span> <span
  m='2270820'>then</span> <span m='2271150'>you</span> <span
  m='2271480'>don't</span> <span m='2271660'>even</span> <span
  m='2271870'>see</span> <span m='2272290'>A.</span> <span
  m='2272710'>You're</span> <span m='2273370'>doing</span> <span
  m='2273670'>some</span> <span m='2273880'>subtractions.</span> <span
  m='2275410'>And</span> <span m='2275590'>I'll</span> <span
  m='2275740'>do</span> <span m='2275980'>those.</span> <span
  m='2276700'>But</span> <span m='2276940'>the</span> <span
  m='2277060'>pivots</span> <span m='2277540'>themselves</span> <span
  m='2278140'>are</span> <span m='2278260'>coming--</span> <span
  m='2279230'>all</span> <span m='2279310'>coming</span> <span
  m='2279670'>from</span> <span m='2279940'>S.</span> <span
  m='2280240'>And</span> <span m='2280390'>S</span> <span m='2280570'>is</span>
  <span m='2280750'>positive</span> <span m='2281260'>definite.</span> <span
  m='2281770'>So</span> <span m='2282400'>we</span> <span
  m='2282550'>know</span> <span m='2282790'>that</span> <span
  m='2282940'>one</span> <span m='2283120'>of</span> <span
  m='2283210'>the</span> <span m='2283360'>tests</span> <span
  m='2283750'>for</span> <span m='2283990'>a</span> <span
  m='2284050'>positive</span> <span m='2284560'>definite</span> <span
  m='2284980'>matrix</span> <span m='2285490'>is</span> <span
  m='2286090'>all</span> <span m='2286360'>pivots</span> <span
  m='2286870'>are</span> <span m='2286960'>positive.</span> <span
  m='2287830'>So</span> <span m='2288010'>I</span> <span
  m='2288100'>think</span> <span m='2288370'>all</span> <span
  m='2288730'>n</span> <span m='2289630'>of</span> <span m='2289720'>the</span>
  <span m='2289840'>first</span> <span m='2290170'>pivots</span> <span
  m='2290590'>will</span> <span m='2290740'>be</span> <span
  m='2290920'>positive.</span> <span m='2292000'>And</span> <span
  m='2292780'>when</span> <span m='2292960'>we</span> <span
  m='2293140'>use</span> <span m='2293500'>them,</span> <span
  m='2294100'>let's</span> <span m='2294370'>just</span> <span
  m='2294550'>see</span> <span m='2294790'>what</span> <span
  m='2294970'>happens</span> <span m='2295390'>when</span> <span
  m='2295600'>we</span> <span m='2295730'>use</span> <span
  m='2296020'>them.</span> </p><p><span m='2298990'>So</span> <span
  m='2299230'>here</span> <span m='2299470'>is</span> <span
  m='2299620'>the</span> <span m='2300210'>KKT</span> <span
  m='2301090'>matrix</span> <span m='2301690'>that</span> <span
  m='2301870'>I</span> <span m='2301960'>start</span> <span
  m='2302320'>with.</span> <span m='2305030'>And</span> <span
  m='2305240'>what</span> <span m='2305430'>do</span> <span m='2305600'>I</span>
  <span m='2305750'>end</span> <span m='2305930'>up</span> <span
  m='2306140'>with?</span> <span m='2309610'>Well,</span> <span
  m='2311560'>really,</span> <span m='2312040'>what</span> <span
  m='2312250'>I'm</span> <span m='2312430'>doing</span> <span
  m='2312880'>is</span> <span m='2313210'>I'm</span> <span
  m='2313420'>multiplying</span> <span m='2314230'>that</span> <span
  m='2314500'>block</span> <span m='2314980'>row</span> <span
  m='2315430'>by</span> <span m='2315700'>something</span> <span
  m='2316770'>to--</span> <span m='2317310'>and</span> <span
  m='2317470'>subtracting</span> <span m='2318350'>to</span> <span
  m='2318700'>kill</span> <span m='2319000'>that</span> <span
  m='2319240'>A.</span> <span m='2320440'>So</span> <span
  m='2320680'>these</span> <span m='2321640'>rows--</span> <span
  m='2322880'>well,</span> <span m='2323250'>near</span> <span
  m='2323550'>enough.</span> <span m='2324180'>Let</span> <span
  m='2324290'>me</span> <span m='2324520'>do</span> <span
  m='2324740'>block</span> <span m='2325960'>elimination.</span> <span
  m='2326740'>Block</span> <span m='2327160'>elimination</span> <span
  m='2327880'>is,</span> <span m='2328120'>like,</span> <span
  m='2328400'>easier.</span> <span m='2328740'>I</span> <span
  m='2328790'>don't</span> <span m='2328880'>have</span> <span
  m='2329050'>to</span> <span m='2329170'>write</span> <span
  m='2329410'>down</span> <span m='2330160'>all</span> <span
  m='2330340'>little</span> <span m='2330610'>tiny</span> <span
  m='2331030'>numbers.</span> <span m='2332830'>So</span> <span
  m='2333010'>I</span> <span m='2333100'>just</span> <span
  m='2333340'>want</span> <span m='2333550'>to</span> <span
  m='2333610'>multiply</span> <span m='2334150'>this</span> <span
  m='2334480'>row</span> <span m='2335770'>by</span> <span
  m='2335950'>something.</span> <span m='2337450'>Tell</span> <span
  m='2337660'>me</span> <span m='2337960'>what.</span> <span
  m='2339040'>And</span> <span m='2339220'>subtract</span> <span
  m='2339850'>from</span> <span m='2340090'>this</span> <span
  m='2341290'>second</span> <span m='2341710'>row.</span> </p><p><span
  m='2342520'>Suppose</span> <span m='2342940'>they're</span> <span
  m='2343120'>numbers</span> <span m='2345160'>or</span> <span
  m='2345340'>letters.</span> <span m='2347110'>I</span> <span
  m='2347170'>guess</span> <span m='2347380'>they</span> <span
  m='2347530'>are</span> <span m='2347680'>letters.</span> <span
  m='2349110'>What</span> <span m='2349510'>do I</span> <span
  m='2349860'>multiply</span> <span m='2350460'>that</span> <span
  m='2350670'>first</span> <span m='2351690'>row</span> <span
  m='2352080'>by</span> <span m='2352470'>and</span> <span
  m='2352620'>subtract?</span> <span m='2358130'>Let's see.</span> <span
  m='2359576'>If</span> <span m='2360070'>these</span> <span
  m='2360340'>were</span> <span m='2360460'>just</span> <span
  m='2361030'>little</span> <span m='2361330'>tiny</span> <span
  m='2361780'>numbers,</span> <span m='2364670'>as</span> <span
  m='2364930'>like</span> <span m='2365370'>in</span> <span m='2365590'>3,
  1,</span> <span m='2366055'>1,</span> <span m='2366520'>0,</span> <span
  m='2367240'>what</span> <span m='2367390'>do</span> <span m='2367510'>I</span>
  <span m='2367570'>multiply</span> <span m='2368020'>that</span> <span
  m='2368230'>row</span> <span m='2368440'>by</span> <span
  m='2368770'>and</span> <span m='2368890'>subtract</span> <span
  m='2369400'>from</span> <span m='2369610'>this?</span> </p><p><span
  m='2371200'>I</span> <span m='2371350'>multiply</span> <span
  m='2371980'>by</span> <span m='2372400'>A</span> <span m='2372670'>over</span>
  <span m='2373030'>S,</span> <span m='2373420'>right?</span> <span
  m='2373870'>I</span> <span m='2373990'>do</span> <span
  m='2374320'>multiply</span> <span m='2374740'>by</span> <span
  m='2374950'>A</span> <span m='2375160'>over</span> <span m='2375390'>S,</span>
  <span m='2375670'>which</span> <span m='2375940'>puts</span> <span
  m='2376210'>an</span> <span m='2376360'>A</span> <span
  m='2376690'>there.</span> <span m='2377400'>Then</span> <span
  m='2377590'>I</span> <span m='2377680'>subtract.</span> </p><p><span
  m='2378730'>So</span> <span m='2378940'>here</span> <span
  m='2379150'>I'll</span> <span m='2379270'>multiply</span> <span
  m='2379720'>by</span> <span m='2379990'>A</span> <span m='2380230'>over</span>
  <span m='2380470'>S.</span> <span m='2380710'>But</span> <span
  m='2381550'>these</span> <span m='2381790'>are</span> <span
  m='2381880'>matrices,</span> <span m='2382600'>so</span> <span
  m='2383700'>I</span> <span m='2383920'>multiply</span> <span
  m='2384610'>by</span> <span m='2388210'>S--</span> <span m='2388750'>by</span>
  <span m='2389050'>AS</span> <span m='2389960'>inverse,</span> <span
  m='2390510'>right?</span> <span m='2391210'>When</span> <span
  m='2391300'>I</span> <span m='2391390'>multiply</span> <span
  m='2391870'>by</span> <span m='2392350'>AS</span> <span
  m='2392920'>inverse</span> <span m='2393340'>times</span> <span
  m='2393670'>this</span> <span m='2393880'>S,</span> <span m='2394300'>I</span>
  <span m='2394405'>get</span> <span m='2394510'>A.</span> <span
  m='2394960'>And</span> <span m='2395380'>then</span> <span
  m='2395500'>I</span> <span m='2395590'>subtract.</span> <span
  m='2396220'>And</span> <span m='2396370'>I</span> <span m='2396460'>get</span>
  <span m='2396640'>the</span> <span m='2396790'>0.</span> <span
  m='2398080'>And</span> <span m='2398200'>when</span> <span
  m='2398350'>I</span> <span m='2398410'>multiply</span> <span
  m='2398950'>by</span> <span m='2399190'>this</span> <span
  m='2399520'>guy</span> <span m='2400450'>and</span> <span
  m='2400600'>subtract,</span> <span m='2401440'>I</span> <span
  m='2401620'>get</span> <span m='2401890'>minus</span> <span
  m='2402670'>because</span> <span m='2402880'>I'm</span> <span
  m='2403060'>subtracting</span> <span m='2404350'>this</span> <span
  m='2404770'>thing,</span> <span m='2406000'>minus</span> <span
  m='2406660'>AS</span> <span m='2407950'>inverse,</span> <span
  m='2408910'>A</span> <span m='2409870'>transpose.</span> <span
  m='2414600'>That</span> <span m='2414840'>was</span> <span
  m='2415200'>block</span> <span m='2415590'>elimination,</span> <span
  m='2416580'>which</span> <span m='2417240'>just,</span> <span
  m='2417990'>in</span> <span m='2418170'>other</span> <span
  m='2418350'>words,</span> <span m='2418740'>it's</span> <span
  m='2418950'>just--</span> <span m='2422730'>you've</span> <span
  m='2422910'>learned</span> <span m='2423180'>about</span> <span
  m='2423450'>2</span> <span m='2423630'>by</span> <span m='2423810'>2</span>
  <span m='2423990'>matrices,</span> <span m='2425910'>3x</span> <span
  m='2426540'>plus</span> <span m='2426780'>4y</span> <span
  m='2427470'>equals</span> <span m='2427800'>7</span> <span
  m='2428310'>and</span> <span m='2428520'>stuff.</span> <span
  m='2429270'>Now</span> <span m='2429540'>I'm</span> <span
  m='2429660'>just</span> <span m='2429870'>doing</span> <span
  m='2430180'>it</span> <span m='2430240'>with</span> <span
  m='2432060'>blocks</span> <span m='2432600'>instead</span> <span
  m='2432990'>of</span> <span m='2433080'>single</span> <span
  m='2433440'>numbers.</span> </p><p><span m='2434280'>But</span> <span
  m='2434520'>you</span> <span m='2434670'>see,</span> <span
  m='2435900'>this</span> <span m='2436440'>produced</span> <span
  m='2437070'>those</span> <span m='2437460'>positive</span> <span
  m='2438120'>pivots.</span> <span m='2439200'>And</span> <span
  m='2439440'>what</span> <span m='2439710'>can</span> <span
  m='2439920'>you</span> <span m='2440040'>tell</span> <span
  m='2440250'>me</span> <span m='2440400'>about</span> <span
  m='2440700'>that</span> <span m='2441000'>matrix?</span> <span
  m='2443080'>What</span> <span m='2443870'>kind</span> <span
  m='2444200'>of--</span> <span m='2444530'>what</span> <span
  m='2444770'>can</span> <span m='2444920'>you</span> <span
  m='2445040'>tell</span> <span m='2445250'>me</span> <span
  m='2445370'>about</span> <span m='2445640'>the</span> <span
  m='2445760'>signs</span> <span m='2446510'>or</span> <span
  m='2446630'>the</span> <span m='2446810'>eigenvalues</span> <span
  m='2447710'>or</span> <span m='2447830'>whatever</span> <span
  m='2448820'>of</span> <span m='2449030'>this</span> <span
  m='2449360'>matrix?</span> <span m='2453810'>Suppose</span> <span
  m='2454310'>S</span> <span m='2454590'>was</span> <span m='2454800'>the</span>
  <span m='2454950'>identity.</span> <span m='2456430'>What</span> <span
  m='2456660'>could</span> <span m='2456900'>you</span> <span
  m='2456990'>tell</span> <span m='2457230'>me</span> <span
  m='2457410'>about</span> <span m='2457710'>minus</span> <span
  m='2458280'>AA</span> <span m='2458730'>transpose?</span> <span
  m='2461310'>Minus</span> <span m='2462150'>AA</span> <span
  m='2462550'>transpose.</span> <span m='2463080'>And my</span> <span
  m='2463290'>voice</span> <span m='2463590'>should</span> <span
  m='2463920'>emphasize</span> <span m='2464520'>that</span> <span
  m='2464670'>minus.</span> </p><p><span m='2466120'>It's</span> <span
  m='2466680'>that</span> <span m='2466930'>matrix</span> <span
  m='2467560'>there</span> <span m='2468010'>is</span> <span
  m='2469710'>negative</span> <span m='2470400'>definite.</span> <span
  m='2472060'>So</span> <span m='2472330'>all</span> <span
  m='2472600'>the</span> <span m='2473110'>next</span> <span
  m='2473470'>set</span> <span m='2473770'>of</span> <span m='2474070'>m</span>
  <span m='2474670'>pivots</span> <span m='2475210'>that</span> <span
  m='2475330'>come</span> <span m='2475570'>from</span> <span
  m='2475810'>here</span> <span m='2476140'>will</span> <span
  m='2476350'>all</span> <span m='2476500'>be</span> <span
  m='2476680'>negative.</span> <span m='2477290'>So</span> <span
  m='2477430'>I</span> <span m='2477550'>get</span> <span m='2478390'>m</span>
  <span m='2479185'>or</span> <span m='2479560'>rather</span> <span
  m='2479950'>n,</span> <span m='2483022'>n</span> <span
  m='2483460'>positive,</span> <span m='2485350'>and</span> <span
  m='2486070'>n</span> <span m='2486820'>negative</span> <span
  m='2488230'>pivots.</span> <span m='2491820'>And</span> <span
  m='2492010'>then</span> <span m='2492220'>I</span> <span
  m='2492940'>remember</span> <span m='2493510'>that</span> <span
  m='2493690'>the</span> <span m='2493840'>pivots</span> <span
  m='2494320'>actually</span> <span m='2494710'>have</span> <span
  m='2494890'>the</span> <span m='2494980'>same</span> <span
  m='2495340'>sign</span> <span m='2495760'>as</span> <span
  m='2495940'>the</span> <span m='2496090'>eigenvalues.</span> <span
  m='2497590'>That's</span> <span m='2497860'>just</span> <span
  m='2498280'>a</span> <span m='2498400'>beautiful</span> <span
  m='2498940'>fact.</span> <span m='2499390'>We</span> <span
  m='2499600'>know</span> <span m='2499870'>that</span> <span
  m='2500140'>for</span> <span m='2501690'>positive</span> <span
  m='2502200'>definite</span> <span m='2502650'>ones.</span> <span
  m='2503640'>The</span> <span m='2503790'>eigenvalues</span> <span
  m='2504390'>are</span> <span m='2504480'>all</span> <span
  m='2504660'>positive.</span> <span m='2505200'>The</span> <span
  m='2505320'>pivots</span> <span m='2505770'>are</span> <span
  m='2505890'>all</span> <span m='2506040'>positive.</span> </p><p><span
  m='2507220'>But</span> <span m='2507360'>it's</span> <span
  m='2507600'>even</span> <span m='2507900'>better</span> <span
  m='2508170'>than</span> <span m='2508350'>that.</span> <span
  m='2509550'>If</span> <span m='2509820'>we</span> <span
  m='2510000'>have</span> <span m='2510180'>some</span> <span
  m='2510390'>mixture</span> <span m='2512010'>for</span> <span
  m='2512280'>the</span> <span m='2512430'>signs</span> <span
  m='2512880'>of</span> <span m='2513000'>the</span> <span
  m='2513090'>pivots,</span> <span m='2514140'>that</span> <span
  m='2514590'>tells</span> <span m='2515010'>us</span> <span
  m='2515250'>the</span> <span m='2515370'>signs</span> <span
  m='2515850'>of</span> <span m='2515970'>the</span> <span
  m='2516120'>eigenvalues.</span> <span m='2516990'>That's a</span> <span
  m='2517230'>really</span> <span m='2517650'>neat</span> <span
  m='2518340'>fact.</span> <span m='2519180'>So</span> <span
  m='2519480'>I'll</span> <span m='2519720'>just</span> <span
  m='2519930'>write</span> <span m='2520200'>that</span> <span
  m='2520380'>down.</span> <span m='2522120'>Plus</span> <span
  m='2522480'>and</span> <span m='2522570'>minus</span> <span
  m='2522930'>signs</span> <span m='2523860'>of</span> <span
  m='2524040'>pivots</span> <span m='2528730'>give</span> <span
  m='2529030'>us</span> <span m='2529280'>the</span> <span
  m='2529420'>plus</span> <span m='2529810'>and</span> <span
  m='2529900'>minus</span> <span m='2530260'>signs</span> <span
  m='2533020'>of</span> <span m='2533260'>the</span> <span
  m='2533470'>eigenvalues.</span> <span m='2536480'>So</span> <span
  m='2536560'>I've</span> <span m='2537640'>sneaked</span> <span
  m='2538030'>in</span> <span m='2538240'>a</span> <span m='2538870'>nice</span>
  <span m='2539800'>matrix</span> <span m='2540460'>there</span> <span
  m='2541360'>that--</span> <span m='2542190'>for</span> <span
  m='2543100'>symmetric</span> <span m='2543730'>matrices.</span> <span
  m='2545020'>This</span> <span m='2545230'>is</span> <span
  m='2545380'>symmetric</span> <span m='2545950'>matrices.</span> </p><p><span
  m='2547080'>OK.</span> <span m='2550510'>That's</span> <span
  m='2550690'>what</span> <span m='2550870'>I</span> <span
  m='2550930'>wanted</span> <span m='2551230'>to</span> <span
  m='2551320'>say</span> <span m='2551620'>about</span> <span
  m='2554990'>constraint</span> <span m='2556610'>and</span> <span
  m='2556760'>saddle</span> <span m='2557100'>points</span> <span
  m='2557510'>coming</span> <span m='2557870'>from</span> <span
  m='2558110'>there.</span> <span m='2559390'>And</span> <span
  m='2559510'>then</span> <span m='2559750'>I</span> <span
  m='2560230'>now</span> <span m='2560560'>want</span> <span
  m='2560770'>to</span> <span m='2560860'>say</span> <span
  m='2561130'>something</span> <span m='2561610'>about</span> <span
  m='2561970'>constraints</span> <span m='2562720'>and--</span> <span
  m='2564310'>not</span> <span m='2564610'>constraints</span> <span
  m='2565300'>now.</span> <span m='2565990'>I'm</span> <span
  m='2566110'>going</span> <span m='2566220'>to</span> <span
  m='2566290'>look</span> <span m='2566560'>at</span> <span m='2566690'>a</span>
  <span m='2566790'>second</span> <span m='2567370'>source</span> <span
  m='2567910'>of</span> <span m='2571630'>saddle</span> <span
  m='2571990'>points.</span> <span m='2573350'>So</span> <span
  m='2573460'>these</span> <span m='2573760'>will be</span> <span
  m='2574120'>saddles</span> <span m='2578210'>from</span> <span
  m='2580550'>this</span> <span m='2581600'>remarkable</span> <span
  m='2583520'>function</span> <span m='2584090'>that</span> <span
  m='2584300'>we</span> <span m='2590090'>know.</span> <span
  m='2593360'>So</span> <span m='2594260'>I</span> <span m='2594380'>now</span>
  <span m='2594620'>have</span> <span m='2594860'>a</span> <span
  m='2594920'>symmetric</span> <span m='2595610'>matrix</span> <span
  m='2596210'>S.</span> <span m='2598560'>Could</span> <span
  m='2598770'>be</span> <span m='2598950'>even</span> <span
  m='2599190'>positive</span> <span m='2599700'>definite.</span> <span
  m='2600150'>Usually,</span> <span m='2600600'>it</span> <span
  m='2600720'>is</span> <span m='2600990'>here.</span> </p><p><span
  m='2603020'>Do</span> <span m='2603110'>you</span> <span
  m='2603170'>know</span> <span m='2603350'>what</span> <span
  m='2603560'>the</span> <span m='2603680'>name</span> <span
  m='2604220'>for</span> <span m='2604460'>R</span> <span m='2604970'>is?</span>
  <span m='2605390'>It's</span> <span m='2605570'>a</span> <span
  m='2605630'>ratio</span> <span m='2606500'>or a</span> <span
  m='2606680'>quotient.</span> <span m='2607910'>It's</span> <span
  m='2608030'>named</span> <span m='2608480'>after</span> <span
  m='2609650'>somebody</span> <span m='2610230'>starting</span> <span
  m='2610700'>with</span> <span m='2610910'>R.</span> <span
  m='2611360'>Who's</span> <span m='2611660'>that?</span> <span
  m='2612920'>Rayleigh.</span> <span m='2613680'>Right.</span> <span
  m='2614210'>It's</span> <span m='2614330'>Rayleigh</span> <span
  m='2614850'>quotient.</span> </p><p><span m='2621590'>And</span> <span
  m='2621770'>what</span> <span m='2622010'>is</span> <span
  m='2622220'>the</span> <span m='2622370'>largest</span> <span
  m='2623300'>value,</span> <span m='2623810'>possible</span> <span
  m='2624290'>value</span> <span m='2624740'>of</span> <span
  m='2624830'>the</span> <span m='2624950'>Rayleigh</span> <span
  m='2625280'>quotient?</span> <span m='2629670'>We've</span> <span
  m='2629880'>seen</span> <span m='2630270'>this</span> <span
  m='2630720'>idea.</span> <span m='2632990'>It</span> <span
  m='2633170'>is</span> <span m='2633630'>the</span> <span
  m='2633740'>maximum</span> <span m='2634430'>value</span> <span
  m='2634880'>of</span> <span m='2634970'>that</span> <span
  m='2635180'>Rayleigh</span> <span m='2635600'>quotient,</span> <span
  m='2635965'>of</span> <span m='2636330'>that</span> <span
  m='2636590'>ratio,</span> <span m='2639800'>is</span> <span
  m='2640040'>lambda</span> <span m='2640460'>max.</span> <span
  m='2641410'>Right.</span> <span m='2641720'>Lambda</span> <span
  m='2642200'>1,</span> <span m='2642650'>the</span> <span
  m='2642800'>biggest</span> <span m='2643190'>one.</span> <span
  m='2644030'>And</span> <span m='2644180'>the</span> <span m='2644330'>x</span>
  <span m='2644690'>that</span> <span m='2644810'>does</span> <span
  m='2645140'>it</span> <span m='2645320'>is</span> <span m='2646190'>the</span>
  <span m='2646310'>eigenvector.</span> <span m='2647900'>Right?</span> <span
  m='2648710'>So</span> <span m='2648920'>max</span> <span m='2651580'>is</span>
  <span m='2651890'>lambda</span> <span m='2652310'>1</span> <span
  m='2653660'>and</span> <span m='2654230'>at</span> <span m='2655790'>x</span>
  <span m='2656240'>equal</span> <span m='2656750'>q1</span> <span
  m='2658070'>because</span> <span m='2659090'>q1</span> <span
  m='2660320'>transpose</span> <span m='2661220'>Sq</span> <span
  m='2661990'>1,</span> <span m='2662930'>over</span> <span
  m='2663800'>transpose</span> <span m='2664580'>q1.</span> <span
  m='2666020'>So</span> <span m='2666140'>I'm</span> <span
  m='2666290'>plugging</span> <span m='2666770'>in</span> <span
  m='2666950'>this</span> <span m='2667400'>winner.</span> <span
  m='2669680'>And</span> <span m='2670190'>Sq1</span> <span
  m='2671300'>is</span> <span m='2672260'>lambda</span> <span
  m='2672740'>1q1.</span> <span m='2673650'>Right?</span> <span
  m='2673970'>It's</span> <span m='2674310'>the</span> <span
  m='2674960'>first</span> <span m='2675350'>eigenvector.</span> <span
  m='2677000'>And</span> <span m='2677270'>so</span> <span m='2677510'>a</span>
  <span m='2677570'>lambda</span> <span m='2677990'>1</span> <span
  m='2678290'>comes</span> <span m='2678650'>out.</span> <span
  m='2679080'>So</span> <span m='2679220'>I</span> <span m='2679310'>get</span>
  <span m='2679520'>lambda 1.</span> </p><p><span m='2683260'>I</span> <span
  m='2683350'>know</span> <span m='2683560'>everything</span> <span
  m='2684070'>about</span> <span m='2684370'>that.</span> <span
  m='2685820'>And</span> <span m='2685870'>what</span> <span
  m='2686110'>I</span> <span m='2686230'>know</span> <span m='2686590'>is</span>
  <span m='2687670'>if</span> <span m='2687820'>I</span> <span
  m='2687910'>put</span> <span m='2688160'>in</span> <span
  m='2688360'>any</span> <span m='2688750'>x,</span> <span
  m='2690290'>what</span> <span m='2690450'>do</span> <span m='2690630'>I</span>
  <span m='2690720'>know?</span> <span m='2691800'>If</span> <span
  m='2691920'>I</span> <span m='2692010'>put</span> <span m='2692250'>in</span>
  <span m='2692590'>any</span> <span m='2693000'>x</span> <span
  m='2693300'>whatever</span> <span m='2694350'>and</span> <span
  m='2694500'>look</span> <span m='2694800'>at</span> <span
  m='2694890'>this</span> <span m='2695160'>number,</span> <span
  m='2696100'>what</span> <span m='2696300'>do</span> <span m='2696480'>I</span>
  <span m='2696570'>know</span> <span m='2696840'>about</span> <span
  m='2697110'>that</span> <span m='2697320'>number?</span> <span
  m='2699570'>It's</span> <span m='2699860'>smaller</span> <span
  m='2700670'>than</span> <span m='2701150'>lambda</span> <span
  m='2701720'>1.</span> <span m='2702890'>Or</span> <span m='2703070'>it</span>
  <span m='2703160'>might</span> <span m='2703490'>hit</span> <span
  m='2703760'>lambda</span> <span m='2704180'>1.</span> <span
  m='2704450'>But</span> <span m='2704630'>it's</span> <span
  m='2704780'>not</span> <span m='2705050'>bigger.</span> </p><p><span
  m='2705410'>That's</span> <span m='2705680'>why</span> <span
  m='2705890'>maxima</span> <span m='2706550'>are</span> <span
  m='2706760'>easy.</span> <span m='2707540'>You</span> <span
  m='2707720'>put</span> <span m='2707960'>in</span> <span
  m='2708170'>any</span> <span m='2708440'>vector,</span> <span
  m='2709220'>and</span> <span m='2709340'>you</span> <span
  m='2709490'>know</span> <span m='2709670'>what's</span> <span
  m='2709910'>happening.</span> <span m='2710990'>You</span> <span
  m='2711110'>know,</span> <span m='2711350'>it</span> <span
  m='2711440'>doesn't--</span> <span m='2712150'>it's</span> <span
  m='2712730'>not</span> <span m='2712970'>above</span> <span
  m='2713240'>the</span> <span m='2713360'>max,</span> <span
  m='2713870'>obviously.</span> </p><p><span m='2715430'>And</span> <span
  m='2715580'>what</span> <span m='2715760'>about</span> <span
  m='2716000'>the</span> <span m='2716090'>min?</span> <span
  m='2719900'>That's</span> <span m='2720530'>equally</span> <span
  m='2720980'>simple,</span> <span m='2721440'>of</span> <span
  m='2721550'>course.</span> <span m='2721940'>It's</span> <span
  m='2722180'>at</span> <span m='2722270'>the</span> <span
  m='2722390'>bottom.</span> <span m='2723470'>So</span> <span
  m='2723860'>what</span> <span m='2724160'>would</span> <span
  m='2724340'>be</span> <span m='2724490'>the</span> <span
  m='2724610'>minimum</span> <span m='2725580'>of</span> <span
  m='2725920'>that</span> <span m='2727080'>Rayleigh--</span> <span
  m='2727720'>of</span> <span m='2727870'>that</span> <span
  m='2728080'>quotient</span> <span m='2728650'>if</span> <span
  m='2728800'>I</span> <span m='2728950'>was</span> <span
  m='2729040'>looking</span> <span m='2729400'>for</span> <span
  m='2730210'>what</span> <span m='2730450'>eigenvector</span> <span
  m='2731230'>and</span> <span m='2731350'>eigenvalue</span> <span
  m='2732010'>will</span> <span m='2732190'>I</span> <span
  m='2732310'>find</span> <span m='2733240'>when</span> <span
  m='2733390'>I</span> <span m='2733480'>look</span> <span m='2734620'>at</span>
  <span m='2734710'>the</span> <span m='2734830'>bottom</span> <span
  m='2735430'>of</span> <span m='2735610'>this?</span> <span
  m='2736870'>I</span> <span m='2737020'>will</span> <span
  m='2737200'>find</span> <span m='2737620'>lambda</span> <span
  m='2739780'>n,</span> <span m='2740200'>the last guy.</span> <span
  m='2741010'>Lambda</span> <span m='2741430'>min.</span> <span m='2745220'>At
  the</span> <span m='2745460'>winning</span> <span m='2745670'>x</span> <span
  m='2745850'>will be</span> <span m='2747040'>its</span> <span
  m='2747410'>eigenvector.</span> <span m='2748310'>And</span> <span
  m='2748460'>again,</span> <span m='2749480'>this</span> <span
  m='2749660'>stuff</span> <span m='2750140'>will</span> <span
  m='2750470'>equal</span> <span m='2751550'>lambda</span> <span
  m='2751940'>n.</span> </p><p><span m='2755030'>So</span> <span
  m='2755240'>that's</span> <span m='2755540'>easy.</span> <span
  m='2755900'>I</span> <span m='2756050'>know</span> <span
  m='2756320'>that</span> <span m='2756500'>if</span> <span m='2756650'>I</span>
  <span m='2756980'>put</span> <span m='2757310'>in</span> <span
  m='2757550'>any</span> <span m='2757820'>vector</span> <span
  m='2758210'>whatever,</span> <span m='2761260'>just</span> <span
  m='2761740'>choose</span> <span m='2762130'>any</span> <span
  m='2762370'>vector</span> <span m='2762890'>in</span> <span
  m='2763180'>dimensions</span> <span m='2763810'>and</span> <span
  m='2764320'>compute</span> <span m='2764770'>r</span> <span
  m='2764980'>of</span> <span m='2765130'>x,</span> <span
  m='2765400'>what</span> <span m='2765550'>do</span> <span m='2765730'>I</span>
  <span m='2766210'>now</span> <span m='2766570'>also</span> <span
  m='2766960'>know</span> <span m='2767170'>about</span> <span
  m='2767440'>our--</span> <span m='2768220'>that</span> <span
  m='2768460'>R</span> <span m='2768760'>of</span> <span m='2768880'>that</span>
  <span m='2769120'>vector?</span> <span m='2770660'>It's</span> <span
  m='2771170'>greater</span> <span m='2771740'>than</span> <span
  m='2773660'>lambda</span> <span m='2774510'>n.</span> <span
  m='2776730'>Below</span> <span m='2777210'>the</span> <span
  m='2777330'>max,</span> <span m='2777960'>above</span> <span
  m='2778320'>the</span> <span m='2778440'>min.</span> </p><p><span
  m='2782480'>Now</span> <span m='2782720'>what</span> <span
  m='2782960'>about</span> <span m='2783320'>the</span> <span
  m='2783500'>other</span> <span m='2783770'>lambdas?</span> <span
  m='2784550'>Well,</span> <span m='2784820'>the</span> <span
  m='2785240'>point</span> <span m='2785570'>is</span> <span
  m='2785720'>that</span> <span m='2785900'>those</span> <span
  m='2786200'>are</span> <span m='2786320'>saddle</span> <span
  m='2786710'>points.</span> <span m='2788200'>The</span> <span
  m='2788390'>beautiful</span> <span m='2788870'>thing</span> <span
  m='2789110'>about</span> <span m='2789410'>this</span> <span
  m='2789740'>Rayleigh</span> <span m='2790160'>quotient</span> <span
  m='2790760'>is</span> <span m='2791650'>its</span> <span
  m='2791930'>derivative</span> <span m='2792680'>equals</span> <span
  m='2793070'>0</span> <span m='2793730'>right</span> <span
  m='2794090'>at</span> <span m='2794460'>the saddle point--</span> <span
  m='2796250'>at</span> <span m='2796370'>the</span> <span
  m='2796490'>eigenvectors.</span> <span m='2798790'>And</span> <span
  m='2799100'>its</span> <span m='2799230'>value</span> <span
  m='2799760'>at</span> <span m='2799850'>the</span> <span
  m='2800000'>eigenvectors</span> <span m='2800810'>is</span> <span
  m='2800990'>the</span> <span m='2801140'>eigenvalue.</span> </p><p><span
  m='2804290'>You</span> <span m='2804830'>see</span> <span
  m='2805010'>what</span> <span m='2805160'>I'm</span> <span
  m='2805280'>saying?</span> <span m='2806030'>I</span> <span
  m='2806090'>have</span> <span m='2806270'>lambda</span> <span
  m='2806780'>1</span> <span m='2808010'>here,</span> <span m='2808530'>a</span>
  <span m='2808600'>max,</span> <span m='2809660'>lambda</span> <span
  m='2810110'>n</span> <span m='2810470'>here,</span> <span m='2810740'>a</span>
  <span m='2810820'>min.</span> <span m='2811370'>And</span> <span
  m='2811730'>in</span> <span m='2812000'>between</span> <span
  m='2812570'>I</span> <span m='2812660'>have</span> <span m='2812900'>a</span>
  <span m='2812960'>bunch</span> <span m='2813290'>of</span> <span
  m='2813410'>other</span> <span m='2813680'>lambdas,</span> <span
  m='2815270'>which</span> <span m='2815510'>are</span> <span
  m='2815630'>saddle</span> <span m='2816050'>points.</span> <span
  m='2817460'>And</span> <span m='2817610'>if</span> <span m='2817760'>I</span>
  <span m='2817890'>put</span> <span m='2818750'>an</span> <span
  m='2818930'>x</span> <span m='2819290'>into</span> <span m='2821300'>r</span>
  <span m='2821540'>of</span> <span m='2821690'>x</span> <span
  m='2821990'>and</span> <span m='2822080'>look</span> <span
  m='2822320'>to</span> <span m='2822470'>see</span> <span
  m='2822740'>what</span> <span m='2822950'>happens,</span> <span
  m='2824000'>I</span> <span m='2824150'>have</span> <span m='2824360'>no</span>
  <span m='2824720'>idea</span> <span m='2825830'>whether</span> <span
  m='2826460'>I'm</span> <span m='2826700'>on</span> <span
  m='2826880'>this</span> <span m='2827120'>side,</span> <span
  m='2827710'>below</span> <span m='2828110'>it,</span> <span
  m='2829100'>or</span> <span m='2829340'>this</span> <span
  m='2829490'>side,</span> <span m='2829880'>above</span> <span
  m='2830480'>lambda</span> <span m='2830930'>i.</span> <span
  m='2832040'>So</span> <span m='2832370'>the</span> <span
  m='2832550'>saddle</span> <span m='2832910'>points</span> <span
  m='2833630'>are</span> <span m='2834530'>more</span> <span
  m='2834740'>difficult</span> <span m='2835430'>and</span> <span
  m='2836630'>take</span> <span m='2837050'>a</span> <span
  m='2837110'>little</span> <span m='2837470'>more</span> <span
  m='2839160'>patience.</span> </p><p><span m='2840630'>So</span> <span
  m='2840740'>that's</span> <span m='2841040'>the</span> <span
  m='2841190'>other</span> <span m='2841430'>source</span> <span
  m='2841790'>of</span> <span m='2841880'>saddle</span> <span
  m='2842210'>points.</span> <span m='2850740'>Let</span> <span
  m='2850860'>me</span> <span m='2850980'>just</span> <span
  m='2851520'>emphasize</span> <span m='2852090'>again</span> <span
  m='2852360'>what</span> <span m='2852570'>I'm</span> <span
  m='2852720'>saying.</span> <span m='2853650'>At</span> <span
  m='2853890'>lambda</span> <span m='2854460'>at</span> <span
  m='2855630'>x</span> <span m='2855930'>equal</span> <span
  m='2857160'>qk,</span> <span m='2859860'>I</span> <span
  m='2860070'>have</span> <span m='2863850'>some</span> <span
  m='2864210'>number</span> <span m='2865980'>the--</span> <span m='2868320'>r
  of</span> <span m='2868660'>x</span> <span m='2869100'>has</span> <span
  m='2870980'>some</span> <span m='2871340'>number</span> <span
  m='2871790'>of</span> <span m='2871970'>positive</span> <span
  m='2872570'>eigenvalues</span> <span m='2873740'>and</span> <span
  m='2873860'>some</span> <span m='2874100'>number</span> <span
  m='2874400'>of</span> <span m='2874490'>negative</span> <span
  m='2874940'>ones</span> <span m='2877520'>for</span> <span
  m='2877700'>the</span> <span m='2877940'>things</span> <span
  m='2878330'>above</span> <span m='2879260'>and</span> <span
  m='2879590'>below</span> <span m='2880070'>qk.</span> </p><p><span
  m='2880880'>OK.</span> <span m='2881780'>I've</span> <span
  m='2881960'>run</span> <span m='2882170'>out</span> <span
  m='2882320'>of</span> <span m='2882410'>time</span> <span
  m='2882860'>to</span> <span m='2883910'>follow</span> <span
  m='2884420'>up</span> <span m='2884660'>on</span> <span m='2885000'>the</span>
  <span m='2886250'>saddle</span> <span m='2886700'>point</span> <span
  m='2887900'>part</span> <span m='2888230'>of</span> <span m='2888790'>the-- on
  the</span> <span m='2888920'>details</span> <span m='2889610'>of</span> <span
  m='2889730'>this</span> <span m='2890900'>picture.</span> <span
  m='2893870'>That</span> <span m='2894040'>will</span> <span
  m='2894140'>be</span> <span m='2894320'>on</span> <span m='2894470'>the</span>
  <span m='2894570'>notes.</span> <span m='2895200'>And</span> <span
  m='2895310'>I</span> <span m='2895790'>might</span> <span
  m='2896510'>come</span> <span m='2896720'>back</span> <span
  m='2896960'>to</span> <span m='2897110'>it</span> <span m='2897440'>at</span>
  <span m='2897560'>the</span> <span m='2897650'>very</span> <span
  m='2897920'>start</span> <span m='2898310'>of</span> <span
  m='2898430'>next</span> <span m='2898730'>time.</span> </p><p><span
  m='2901580'>Before</span> <span m='2901970'>that,</span> <span
  m='2902300'>you</span> <span m='2902480'>will</span> <span
  m='2902720'>have</span> <span m='2906780'>the</span> <span
  m='2907980'>lab</span> <span m='2908280'>number</span> <span
  m='2908610'>three.</span> <span m='2910180'>And</span> <span
  m='2910420'>then</span> <span m='2910810'>I</span> <span
  m='2910960'>think</span> <span m='2911200'>we</span> <span
  m='2911320'>should</span> <span m='2911470'>discuss</span> <span
  m='2911980'>it</span> <span m='2912220'>because</span> <span
  m='2913180'>I</span> <span m='2913330'>haven't</span> <span
  m='2913570'>done</span> <span m='2913810'>this</span> <span
  m='2914080'>lab.</span> <span m='2916610'>It's</span> <span
  m='2917470'>intended</span> <span m='2918010'>to</span> <span
  m='2918130'>give</span> <span m='2918370'>you</span> <span
  m='2918970'>some</span> <span m='2919240'>feeling</span> <span
  m='2919720'>for</span> <span m='2919960'>overfitting</span> <span
  m='2921130'>and</span> <span m='2921310'>also</span> <span
  m='2921700'>intended</span> <span m='2922180'>to</span> <span
  m='2922300'>give</span> <span m='2922480'>you</span> <span
  m='2922570'>a</span> <span m='2922600'>little</span> <span
  m='2922930'>introduction</span> <span m='2923650'>to</span> <span
  m='2924550'>deep</span> <span m='2924820'>learning.</span> <span
  m='2926390'>And</span> <span m='2926990'>so</span> <span
  m='2927620'>I'll</span> <span m='2927830'>get</span> <span
  m='2928070'>it</span> <span m='2928190'>to</span> <span
  m='2928460'>you,</span> <span m='2929270'>and</span> <span
  m='2929480'>we</span> <span m='2929660'>can</span> <span
  m='2929930'>talk</span> <span m='2930230'>about</span> <span
  m='2930530'>it</span> <span m='2930830'>Wednesday.</span> <span
  m='2932360'>And</span> <span m='2932570'>again,</span> <span
  m='2933000'>it</span> <span m='2933100'>won't</span> <span
  m='2933230'>be</span> <span m='2933410'>due</span> <span
  m='2933650'>until</span> <span m='2933950'>the</span> <span
  m='2934100'>Wednesday</span> <span m='2934700'>after</span> <span
  m='2935600'>break.</span> </p><p><span m='2936350'>OK.</span> <span
  m='2936830'>Thanks.</span> <span m='2937190'>So</span> <span
  m='2937370'>I'll</span> <span m='2937460'>see</span> <span
  m='2937700'>you</span> <span m='2937820'>Wednesday.</span> </p>
uid: 372ba2977de951f257035e929fb72095
type: courses
layout: video
---
