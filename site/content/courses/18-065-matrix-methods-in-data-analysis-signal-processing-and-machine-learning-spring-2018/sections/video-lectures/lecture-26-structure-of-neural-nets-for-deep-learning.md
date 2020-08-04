---
about_this_resource_text: "<h2 class=\"subhead\"><strong>Description</strong></h2>\r\n<p>This lecture is about the central structure of deep neural networks, which are a major force in machine learning. The aim is to find the function that’s constructed to learn the training data and then apply it to the test data.</p>\r\n<h2 class=\"subhead\"><strong>Summary</strong></h2><p>The net has layers of nodes. Layer zero is the data.<br />\r\nWe choose matrix of &quot;weights&quot; from layer to layer.<br />\r\nNonlinear step at each layer! Negative values become zero!<br />\r\nWe know correct class for the training data.<br />\r\nWeights optimized to (usually) output that correct class.</p>\r\n<p>Related section in textbook: VII.1</p>\r\n<p><strong>Instructor:</strong> Prof. Gilbert Strang</p>"
embedded_media:
  - id: Video-YouTube-Stream
    media_location: sx00s7nYmRM
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: Video-YouTube-Stream
    type: Video
    uid: 12a0e0c2cf7909615d871fa85f85f268
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/sx00s7nYmRM/default.jpg'
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d8429a53c9e417a9a5496ccb565375eb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: sx00s7nYmRM
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fd8fd601b78543a48f10204e5e19adec
  - id: sx00s7nYmRM.srt
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-26-structure-of-neural-nets-for-deep-learning/sx00s7nYmRM.srt
    title: 3play caption file
    type: null
    uid: 0e4b6ebed6d87dc2010d6403626803d8
  - id: sx00s7nYmRM.pdf
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-26-structure-of-neural-nets-for-deep-learning/sx00s7nYmRM.pdf
    title: 3play pdf file
    type: null
    uid: a9535204dab31ed87499c11cd579c49d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 720e39a3a9300d38f357540a44fb21f3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b3f37e4fa003325231e2498c3a68f539
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://ia801404.us.archive.org/25/items/MIT18.065S18/MIT18_065S18_Lecture26_300k.mp4
    parent_uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1cafd81288d77d653caf0500dfee1d85
inline_embed_id: 39745636lecture26structureofneuralnetsfordeeplearning44312604
order_index: 260
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-26-structure-of-neural-nets-for-deep-learning
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-26-structure-of-neural-nets-for-deep-learning
title: 'Lecture 26: Structure of Neural Nets for Deep Learning'
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
  m='18290'>ocw.mit.edu.</span> </p><p><span m='22500'>GILBERT STRANG:</span>
  <span m='22705'>OK,</span> <span m='22910'>so</span> <span
  m='23100'>this</span> <span m='23310'>is</span> <span m='23460'>an</span>
  <span m='23580'>important</span> <span m='24060'>day,</span> <span
  m='25020'>and</span> <span m='25200'>Friday</span> <span m='25620'>was</span>
  <span m='25860'>an</span> <span m='25980'>important</span> <span
  m='26430'>day.</span> <span m='27730'>I</span> <span m='28200'>hope</span>
  <span m='28500'>you</span> <span m='28650'>enjoyed</span> <span
  m='29130'>Professor</span> <span m='29790'>Sra's</span> <span
  m='31270'>terrific</span> <span m='31930'>lecture</span> <span
  m='32380'>as</span> <span m='32530'>much</span> <span m='32800'>as</span>
  <span m='32950'>I</span> <span m='33130'>did.</span> <span
  m='33610'>You</span> <span m='33760'>probably</span> <span
  m='34090'>saw</span> <span m='34330'>me</span> <span m='34870'>taking</span>
  <span m='35230'>notes</span> <span m='35620'>like</span> <span
  m='35830'>mad</span> <span m='36910'>for</span> <span m='37210'>the</span>
  <span m='38440'>section</span> <span m='39070'>that's</span> <span
  m='39430'>now</span> <span m='39760'>to</span> <span m='39880'>be</span> <span
  m='40090'>written</span> <span m='40510'>about</span> <span
  m='41050'>stochastic</span> <span m='41860'>gradient</span> <span
  m='42400'>descent.</span> </p><p><span m='44020'>And</span> <span
  m='44290'>he</span> <span m='45130'>promised</span> <span m='46690'>a</span>
  <span m='46750'>theorem,</span> <span m='47740'>if</span> <span
  m='47890'>you</span> <span m='48040'>remember,</span> <span
  m='49020'>and</span> <span m='49150'>there</span> <span
  m='49240'>wasn't</span> <span m='49570'>time.</span> <span
  m='50710'>And</span> <span m='51160'>so</span> <span m='51400'>he</span> <span
  m='51490'>was</span> <span m='51670'>going</span> <span m='51830'>to</span>
  <span m='51910'>send</span> <span m='52240'>it</span> <span
  m='52330'>to</span> <span m='52540'>me</span> <span m='52720'>or</span> <span
  m='52840'>still</span> <span m='53200'>is</span> <span m='53440'>going</span>
  <span m='53550'>to</span> <span m='53680'>send</span> <span
  m='53980'>it</span> <span m='54070'>to</span> <span m='54250'>me.</span> <span
  m='54760'>I'll</span> <span m='55000'>report,</span> <span m='55480'>I</span>
  <span m='55570'>haven't</span> <span m='55870'>got</span> <span
  m='56110'>it</span> <span m='56230'>yet,</span> <span m='57520'>but</span>
  <span m='57700'>I'll</span> <span m='58780'>bring</span> <span
  m='59050'>it</span> <span m='59170'>to</span> <span m='59350'>class,</span>
  <span m='60880'>waiting</span> <span m='61210'>to</span> <span
  m='61300'>see,</span> <span m='61720'>hopefully.</span> <span
  m='64599'>And</span> <span m='64720'>that</span> <span m='64849'>will</span>
  <span m='65050'>give</span> <span m='65230'>us</span> <span m='65410'>a</span>
  <span m='65470'>chance</span> <span m='65860'>to</span> <span
  m='65980'>review</span> <span m='68140'>stochastic</span> <span
  m='68800'>gradient</span> <span m='69280'>descent,</span> <span
  m='70030'>the</span> <span m='70210'>central</span> <span
  m='70750'>algorithm</span> <span m='71320'>of</span> <span
  m='71710'>deep</span> <span m='72010'>learning.</span> </p><p><span
  m='73930'>And</span> <span m='74080'>then</span> <span m='74470'>this</span>
  <span m='74860'>today</span> <span m='75460'>is</span> <span
  m='75670'>about</span> <span m='76150'>the</span> <span
  m='77830'>central</span> <span m='79360'>structure</span> <span
  m='80980'>of</span> <span m='81610'>deep</span> <span m='82000'>neural</span>
  <span m='82360'>nets.</span> <span m='82780'>And</span> <span
  m='84340'>some</span> <span m='84610'>of</span> <span m='84730'>you</span>
  <span m='84850'>will</span> <span m='85090'>know</span> <span
  m='85330'>already</span> <span m='87070'>how</span> <span
  m='87310'>they're</span> <span m='88090'>connected,</span> <span
  m='88780'>what</span> <span m='90280'>the</span> <span
  m='92170'>function</span> <span m='94360'>F,</span> <span m='94750'>the</span>
  <span m='94900'>learning</span> <span m='95560'>function--</span> <span
  m='96800'>you</span> <span m='97000'>could</span> <span m='97660'>call</span>
  <span m='97990'>it</span> <span m='98100'>the</span> <span
  m='98230'>learning</span> <span m='98650'>function--</span> <span
  m='100360'>that's</span> <span m='100690'>constructed.</span> <span
  m='101980'>The</span> <span m='102100'>whole</span> <span
  m='102490'>system</span> <span m='103090'>is</span> <span
  m='103240'>aiming</span> <span m='103810'>at</span> <span
  m='104110'>constructing</span> <span m='104980'>this</span> <span
  m='106480'>function</span> <span m='106990'>F</span> <span
  m='108850'>which</span> <span m='109120'>learns</span> <span
  m='109690'>the</span> <span m='110110'>training</span> <span
  m='110650'>data</span> <span m='111760'>and</span> <span
  m='111940'>then</span> <span m='112180'>applying</span> <span
  m='112720'>it</span> <span m='112870'>to</span> <span m='113140'>the</span>
  <span m='113980'>test</span> <span m='114340'>data.</span> <span
  m='115480'>And</span> <span m='115720'>the</span> <span
  m='116560'>miracle</span> <span m='117160'>is</span> <span
  m='117490'>that</span> <span m='117670'>it</span> <span m='117760'>does</span>
  <span m='118090'>so</span> <span m='118420'>well</span> <span
  m='119980'>in</span> <span m='120910'>practice.</span> <span
  m='121570'>That's</span> <span m='121840'>what</span> <span
  m='122680'>has</span> <span m='122950'>transformed</span> <span
  m='125560'>deep</span> <span m='125860'>learning</span> <span
  m='126280'>into</span> <span m='126760'>such</span> <span m='127150'>an</span>
  <span m='127720'>important</span> <span m='130509'>application.</span>
  </p><p><span m='137230'>Chapter</span> <span m='137620'>7</span> <span
  m='138100'>has</span> <span m='138340'>been</span> <span m='138730'>up</span>
  <span m='139030'>for</span> <span m='139300'>months</span> <span
  m='139900'>on</span> <span m='140170'>the</span> <span
  m='142270'>math.mit.edu/learningfromdata</span> <span m='146590'>site,</span>
  <span m='147340'>and</span> <span m='147490'>I'll</span> <span
  m='147670'>add</span> <span m='147880'>it</span> <span m='148030'>to</span>
  <span m='148210'>Stellar.</span> <span m='148525'>Of</span> <span
  m='148840'>course,</span> <span m='149110'>that's</span> <span
  m='149380'>where</span> <span m='149620'>you'll</span> <span
  m='150010'>be</span> <span m='151330'>looking</span> <span
  m='151750'>for</span> <span m='152020'>it.</span> <span m='153270'>OK,</span>
  <span m='154000'>and</span> <span m='154150'>then</span> <span
  m='155020'>the</span> <span m='155140'>second,</span> <span
  m='156430'>the</span> <span m='156580'>back</span> <span
  m='156850'>propagation,</span> <span m='157630'>the</span> <span
  m='157750'>way</span> <span m='157930'>to</span> <span
  m='158050'>compute</span> <span m='158560'>the</span> <span
  m='158650'>gradient,</span> <span m='160970'>I'll</span> <span
  m='162940'>probably</span> <span m='163390'>reach</span> <span
  m='163960'>that</span> <span m='164440'>idea</span> <span
  m='164860'>today.</span> <span m='165940'>And</span> <span
  m='166930'>you'll</span> <span m='167170'>see</span> <span
  m='167860'>it's</span> <span m='168190'>the</span> <span
  m='168370'>chain</span> <span m='168700'>rule,</span> <span
  m='169180'>but</span> <span m='169480'>how</span> <span m='169780'>is</span>
  <span m='169930'>it</span> <span m='170110'>organized.</span> </p><p><span
  m='171070'>OK,</span> <span m='172170'>so</span> <span
  m='172390'>what's</span> <span m='172690'>the</span> <span
  m='172780'>structure?</span> <span m='173290'>What's</span> <span
  m='173590'>the</span> <span m='173710'>plan</span> <span m='174160'>for</span>
  <span m='174760'>deep</span> <span m='175030'>neural</span> <span
  m='175360'>nets?</span> <span m='177360'>Good.</span> <span
  m='178830'>Starting</span> <span m='179280'>here,</span> <span
  m='180580'>so</span> <span m='180630'>what</span> <span m='180870'>we</span>
  <span m='181020'>have</span> <span m='181410'>is</span> <span
  m='181950'>training</span> <span m='182430'>data.</span> <span
  m='186200'>So</span> <span m='186310'>we</span> <span m='186490'>have</span>
  <span m='186880'>vectors,</span> <span m='190690'>x1</span> <span
  m='191540'>to</span> <span m='192140'>x--</span> <span m='193640'>what</span>
  <span m='193820'>should</span> <span m='194060'>I</span> <span
  m='194180'>use</span> <span m='194600'>for</span> <span m='194810'>the</span>
  <span m='195740'>number</span> <span m='196310'>of</span> <span
  m='197240'>samples</span> <span m='197840'>that</span> <span
  m='197930'>we</span> <span m='198080'>have</span> <span m='198350'>in</span>
  <span m='200080'>the</span> <span m='200450'>training</span> <span
  m='200960'>data?</span> <span m='201590'>Well,</span> <span
  m='201950'>let's</span> <span m='202190'>say</span> <span m='202430'>D</span>
  <span m='202910'>for</span> <span m='203690'>Data.</span> <span
  m='204480'>OK.</span> </p><p><span m='206120'>And</span> <span
  m='206300'>each</span> <span m='206570'>vector,</span> <span
  m='208370'>those</span> <span m='208670'>are</span> <span
  m='208820'>called</span> <span m='209210'>feature</span> <span
  m='209720'>vectors,</span> <span m='210980'>so</span> <span
  m='212210'>equals</span> <span m='216260'>feature</span> <span
  m='216710'>vectors.</span> <span m='220200'>So</span> <span
  m='220470'>each</span> <span m='220770'>one,</span> <span
  m='221400'>each</span> <span m='221700'>x,</span> <span m='224610'>has</span>
  <span m='225690'>like</span> <span m='226770'>m</span> <span
  m='227310'>features.</span> <span m='228010'>So</span> <span
  m='228750'>maybe</span> <span m='229860'>my</span> <span
  m='230130'>notation</span> <span m='230850'>isn't</span> <span
  m='232320'>so</span> <span m='232560'>hot</span> <span m='232910'>here.</span>
  <span m='235230'>I</span> <span m='235380'>have</span> <span
  m='235560'>a</span> <span m='235590'>whole</span> <span m='235800'>lot</span>
  <span m='236100'>of</span> <span m='237540'>vectors.</span> <span
  m='238640'>Let</span> <span m='238850'>me</span> <span m='238980'>not</span>
  <span m='239220'>use</span> <span m='239710'>the</span> <span
  m='240540'>subscript</span> <span m='241230'>for</span> <span
  m='241440'>those</span> <span m='242790'>right</span> <span
  m='243090'>away.</span> </p><p><span m='243510'>So</span> <span
  m='244560'>vectors,</span> <span m='245160'>feature</span> <span
  m='245640'>vectors,</span> <span m='246720'>and</span> <span
  m='247080'>each</span> <span m='247350'>vector</span> <span
  m='248010'>has</span> <span m='248310'>got</span> <span
  m='248560'>maybe</span> <span m='249410'>shall</span> <span
  m='249570'>we</span> <span m='249720'>say</span> <span m='250020'>m</span>
  <span m='251760'>features?</span> <span m='253170'>Like,</span> <span
  m='253620'>if</span> <span m='253800'>we</span> <span m='253980'>were</span>
  <span m='254160'>measuring</span> <span m='254820'>height</span> <span
  m='255300'>and</span> <span m='255510'>age</span> <span m='256050'>and</span>
  <span m='256740'>weight</span> <span m='257250'>and</span> <span
  m='257399'>so</span> <span m='257670'>on,</span> <span m='257950'>those</span>
  <span m='258300'>would</span> <span m='258510'>be</span> <span
  m='259290'>features.</span> <span m='263100'>The</span> <span
  m='264530'>job</span> <span m='264870'>of</span> <span m='265020'>the</span>
  <span m='265140'>neural</span> <span m='265440'>network</span> <span
  m='266970'>is</span> <span m='267180'>to</span> <span
  m='267270'>create--</span> <span m='268140'>and</span> <span
  m='268500'>we're</span> <span m='268650'>going</span> <span
  m='268830'>to</span> <span m='268920'>classify.</span> <span
  m='269730'>Maybe</span> <span m='270030'>we're</span> <span
  m='270120'>going</span> <span m='270290'>to</span> <span
  m='270360'>classify</span> <span m='272010'>men</span> <span
  m='272280'>and</span> <span m='272400'>women</span> <span m='273870'>or</span>
  <span m='274830'>boys</span> <span m='275220'>and</span> <span
  m='275340'>girls.</span> <span m='276080'>So</span> <span
  m='277170'>let's</span> <span m='277410'>make</span> <span
  m='277680'>it</span> <span m='277800'>a</span> <span
  m='278190'>classification</span> <span m='279540'>problem,</span> <span
  m='281330'>just</span> <span m='282170'>binary.</span> </p><p><span
  m='283720'>So</span> <span m='283860'>the</span> <span
  m='283950'>classification</span> <span m='284970'>problem</span> <span
  m='285450'>is--</span> <span m='287610'>what</span> <span
  m='287860'>shall</span> <span m='288000'>we</span> <span
  m='288120'>say?</span> <span m='288600'>Minus</span> <span m='289050'>1</span>
  <span m='289315'>or</span> <span m='289580'>1,</span> <span
  m='296220'>or</span> <span m='296430'>0</span> <span m='296910'>or</span>
  <span m='297060'>1,</span> <span m='297660'>or</span> <span
  m='297930'>boy</span> <span m='298320'>or</span> <span m='298470'>girl,</span>
  <span m='299040'>or</span> <span m='299190'>cat</span> <span
  m='299580'>or</span> <span m='299730'>dog,</span> <span m='300360'>or</span>
  <span m='300990'>truck</span> <span m='301440'>or</span> <span
  m='301710'>car,</span> <span m='303030'>or</span> <span
  m='303540'>anyway,</span> <span m='304700'>just</span> <span
  m='305070'>two</span> <span m='305430'>classes.</span> <span
  m='308290'>So</span> <span m='308370'>I'm</span> <span m='309060'>just</span>
  <span m='309270'>going</span> <span m='309380'>to</span> <span
  m='309510'>do</span> <span m='309720'>two-class</span> <span
  m='311370'>classification.</span> <span m='315240'>We</span> <span
  m='315390'>know</span> <span m='315600'>which</span> <span
  m='315870'>class</span> <span m='316350'>the</span> <span
  m='316500'>training</span> <span m='316920'>data</span> <span
  m='317220'>is</span> <span m='317760'>in.</span> <span m='318480'>For</span>
  <span m='318660'>each</span> <span m='318840'>vector</span> <span
  m='319230'>x,</span> <span m='319530'>we</span> <span m='319680'>know</span>
  <span m='319890'>the</span> <span m='320010'>right</span> <span
  m='320310'>answer.</span> </p><p><span m='321970'>So</span> <span
  m='322020'>we</span> <span m='322170'>want</span> <span m='322380'>to</span>
  <span m='322440'>create</span> <span m='322860'>a</span> <span
  m='322920'>function</span> <span m='323430'>that</span> <span
  m='323580'>gives</span> <span m='323940'>the</span> <span
  m='324060'>right</span> <span m='324360'>answer,</span> <span
  m='325660'>and</span> <span m='325680'>then</span> <span
  m='325890'>we'll</span> <span m='326040'>use</span> <span
  m='326370'>that</span> <span m='326610'>function</span> <span
  m='327780'>on</span> <span m='328020'>other</span> <span
  m='328290'>data.</span> <span m='330460'>So</span> <span m='330840'>let</span>
  <span m='331020'>me</span> <span m='331170'>write</span> <span
  m='331440'>that</span> <span m='331650'>down.</span> <span
  m='333420'>Create</span> <span m='333750'>a</span> <span
  m='333810'>function</span> <span m='335790'>F</span> <span
  m='336660'>of</span> <span m='336870'>x</span> <span m='339680'>so</span>
  <span m='340380'>that</span> <span m='341910'>gets--</span> <span
  m='342600'>most</span> <span m='343080'>of</span> <span m='344900'>gets</span>
  <span m='345330'>the</span> <span m='345480'>class</span> <span
  m='347640'>correct.</span> <span m='350140'>In</span> <span
  m='350160'>other</span> <span m='350310'>words,</span> <span
  m='351430'>F</span> <span m='351570'>of</span> <span m='351720'>x</span> <span
  m='353280'>should</span> <span m='353580'>be</span> <span
  m='353790'>negative</span> <span m='355620'>for</span> <span
  m='356370'>when</span> <span m='358010'>the</span> <span
  m='361050'>classification</span> <span m='362170'>is</span> <span
  m='362680'>minus</span> <span m='363100'>1,</span> <span m='364220'>and</span>
  <span m='364420'>F</span> <span m='364630'>of</span> <span m='364750'>x</span>
  <span m='364960'>should</span> <span m='365200'>be</span> <span
  m='365380'>positive</span> <span m='367210'>when</span> <span
  m='367390'>the</span> <span m='367510'>classification</span> <span
  m='368560'>is</span> <span m='368680'>plus</span> <span m='369050'>1.</span>
  </p><p><span m='371470'>And</span> <span m='371950'>as</span> <span
  m='372160'>we</span> <span m='372370'>know,</span> <span m='373270'>we</span>
  <span m='373450'>don't</span> <span m='373660'>necessarily</span> <span
  m='374080'>have</span> <span m='374230'>to</span> <span m='374320'>get</span>
  <span m='374530'>every</span> <span m='375190'>x,</span> <span
  m='375940'>every</span> <span m='376330'>sample,</span> <span
  m='376810'>right.</span> <span m='377860'>That</span> <span
  m='378070'>may</span> <span m='378300'>be</span> <span
  m='378550'>over-fitting.</span> <span m='379990'>If</span> <span
  m='380170'>there's</span> <span m='380330'>some</span> <span
  m='380650'>sample</span> <span m='381130'>that's</span> <span
  m='381370'>just</span> <span m='381640'>truly</span> <span
  m='382120'>weird,</span> <span m='384220'>by</span> <span
  m='384490'>getting</span> <span m='384850'>that</span> <span
  m='385060'>right</span> <span m='385390'>we're</span> <span
  m='385600'>going</span> <span m='385720'>to</span> <span m='385870'>be</span>
  <span m='385990'>looking</span> <span m='386380'>for</span> <span
  m='386560'>a</span> <span m='386590'>truly</span> <span
  m='387010'>weird</span> <span m='389950'>data</span> <span
  m='390370'>in</span> <span m='390550'>the</span> <span m='390670'>test</span>
  <span m='391450'>set,</span> <span m='392100'>and</span> <span
  m='392500'>that's</span> <span m='392860'>not</span> <span m='393160'>a</span>
  <span m='393220'>good</span> <span m='393430'>idea.</span> <span
  m='399620'>We're</span> <span m='400150'>trying</span> <span
  m='400420'>to</span> <span m='400510'>discover</span> <span
  m='401020'>the</span> <span m='401110'>rule</span> <span
  m='401470'>that</span> <span m='401650'>covers</span> <span
  m='402190'>almost</span> <span m='402700'>all</span> <span
  m='402910'>cases</span> <span m='403480'>but</span> <span
  m='403690'>not</span> <span m='403960'>every</span> <span
  m='404350'>crazy,</span> <span m='405380'>weird</span> <span
  m='405640'>case.</span> <span m='406420'>OK?</span> <span m='407290'>So</span>
  <span m='407470'>that's</span> <span m='407740'>our</span> <span
  m='407860'>job,</span> <span m='408940'>to</span> <span
  m='409060'>create</span> <span m='409450'>a</span> <span
  m='409510'>function</span> <span m='410020'>F</span> <span
  m='410230'>of</span> <span m='410380'>x</span> <span m='412540'>that</span>
  <span m='413050'>is</span> <span m='413350'>correct</span> <span
  m='414760'>on</span> <span m='416170'>almost</span> <span
  m='416650'>all</span> <span m='416920'>of</span> <span m='417070'>the</span>
  <span m='417220'>training</span> <span m='417670'>data.</span> <span
  m='422150'>Yeah.</span> </p><p><span m='425900'>So</span> <span
  m='427610'>before</span> <span m='427970'>I</span> <span
  m='429320'>draw</span> <span m='429750'>the</span> <span
  m='430220'>picture</span> <span m='430730'>of</span> <span
  m='430970'>the</span> <span m='431630'>network,</span> <span
  m='432760'>let</span> <span m='432920'>me</span> <span m='433130'>just</span>
  <span m='433580'>remember</span> <span m='436370'>to</span> <span
  m='436500'>mention</span> <span m='440180'>the</span> <span
  m='441110'>site</span> <span m='441680'>Playground.</span> <span
  m='443750'>I</span> <span m='443840'>don't</span> <span m='444020'>know</span>
  <span m='444170'>if</span> <span m='444290'>you've</span> <span
  m='444530'>looked</span> <span m='444830'>at</span> <span
  m='444950'>that,</span> <span m='445360'>so</span> <span m='445520'>I'm</span>
  <span m='445670'>going</span> <span m='445790'>to</span> <span
  m='445850'>ask</span> <span m='446240'>you,</span> <span
  m='446840'>playground@tensorflow.org.</span> <span m='456650'>How</span> <span
  m='456770'>many of you</span> <span m='457100'>know</span> <span
  m='457400'>that</span> <span m='457970'>site</span> <span m='458540'>or</span>
  <span m='458690'>have</span> <span m='459080'>met</span> <span
  m='459440'>with</span> <span m='459620'>it?</span> <span
  m='460140'>Just</span> <span m='460940'>a</span> <span m='461000'>few,</span>
  <span m='461360'>OK.</span> <span m='462530'>OK,</span> <span
  m='463280'>so</span> <span m='463490'>it's</span> <span m='463670'>not</span>
  <span m='463910'>a</span> <span m='463970'>very</span> <span
  m='464270'>sophisticated</span> <span m='465110'>site.</span> <span
  m='466140'>It's</span> <span m='466190'>got</span> <span
  m='466400'>only</span> <span m='466700'>four</span> <span
  m='467000'>examples,</span> <span m='468930'>four</span> <span
  m='469230'>examples.</span> </p><p><span m='477060'>So</span> <span
  m='477540'>one</span> <span m='477810'>example</span> <span
  m='478410'>is</span> <span m='478650'>a</span> <span m='478710'>whole</span>
  <span m='478890'>lot</span> <span m='479100'>of</span> <span
  m='479190'>points</span> <span m='482290'>that</span> <span
  m='482470'>are</span> <span m='482530'>blue,</span> <span m='483590'>B</span>
  <span m='483840'>for</span> <span m='484060'>Blue,</span> <span
  m='484990'>inside</span> <span m='486820'>a</span> <span
  m='486880'>bunch</span> <span m='487240'>of</span> <span
  m='487330'>points</span> <span m='488830'>that</span> <span
  m='489100'>are</span> <span m='492490'>another</span> <span
  m='492850'>set</span> <span m='493270'>that</span> <span m='493540'>are</span>
  <span m='494500'>O</span> <span m='494770'>for</span> <span
  m='495040'>Orange,</span> <span m='496590'>orange,</span> <span
  m='497350'>blue.</span> <span m='498760'>OK,</span> <span m='500500'>so</span>
  <span m='500680'>those</span> <span m='500950'>are</span> <span
  m='501010'>the</span> <span m='501130'>two</span> <span
  m='501370'>classes,</span> <span m='501970'>orange</span> <span
  m='502390'>and</span> <span m='502540'>blue.</span> <span m='503350'>So</span>
  <span m='503560'>the</span> <span m='503690'>points</span> <span
  m='504130'>x</span> <span m='504910'>and</span> <span m='505090'>the</span>
  <span m='505810'>feature</span> <span m='506230'>vector</span> <span
  m='511210'>here</span> <span m='511960'>is</span> <span m='512140'>just</span>
  <span m='512470'>the</span> <span m='513250'>xy,</span> <span
  m='514480'>the</span> <span m='515260'>coordinates</span> <span
  m='516429'>features</span> <span m='517059'>are</span> <span
  m='517409'>the</span> <span m='517640'>xy</span> <span
  m='519190'>coordinates</span> <span m='521289'>of</span> <span
  m='521440'>the</span> <span m='521559'>points.</span> <span
  m='522820'>And</span> <span m='523030'>our</span> <span m='523179'>job</span>
  <span m='523570'>is</span> <span m='523870'>to</span> <span
  m='525130'>find</span> <span m='525460'>a</span> <span
  m='525520'>function</span> <span m='526060'>that's</span> <span
  m='526420'>positive</span> <span m='527200'>on</span> <span
  m='527620'>these</span> <span m='528040'>points</span> <span
  m='528880'>and</span> <span m='529090'>negative</span> <span
  m='529600'>on</span> <span m='529750'>those</span> <span
  m='530050'>points.</span> </p><p><span m='531400'>So</span> <span
  m='531580'>there</span> <span m='531720'>is</span> <span m='531880'>a</span>
  <span m='532300'>simple</span> <span m='532840'>model</span> <span
  m='533380'>problem,</span> <span m='534250'>and</span> <span
  m='534400'>I</span> <span m='535060'>recommend--</span> <span
  m='535910'>well,</span> <span m='536260'>just</span> <span
  m='536560'>partly--</span> <span m='538060'>if</span> <span
  m='538240'>you're</span> <span m='538450'>a</span> <span
  m='538750'>expert</span> <span m='539260'>in</span> <span
  m='540130'>deep</span> <span m='540400'>learning.</span> <span
  m='540910'>This</span> <span m='541180'>is</span> <span m='542350'>for</span>
  <span m='542530'>children,</span> <span m='543130'>but</span> <span
  m='544480'>morally</span> <span m='545080'>here,</span> <span
  m='546190'>I</span> <span m='546400'>certainly</span> <span
  m='547150'>learned</span> <span m='547660'>from</span> <span
  m='548890'>playing</span> <span m='549370'>in</span> <span
  m='549490'>this</span> <span m='550420'>playground.</span> <span
  m='550960'>So</span> <span m='551200'>you</span> <span m='552590'>set</span>
  <span m='555020'>the</span> <span m='558710'>step</span> <span
  m='559040'>size.</span> <span m='562930'>Do</span> <span m='563160'>you</span>
  <span m='563330'>set</span> <span m='563650'>it,</span> <span
  m='563780'>or</span> <span m='563910'>does</span> <span m='564180'>it</span>
  <span m='564360'>set it?</span> <span m='565980'>I</span> <span
  m='566100'>guess</span> <span m='566310'>you</span> <span
  m='566430'>can</span> <span m='566610'>change</span> <span
  m='566970'>it.</span> <span m='567570'>I</span> <span m='567690'>don't</span>
  <span m='567900'>think</span> <span m='568140'>I've</span> <span
  m='568320'>changed</span> <span m='568770'>it.</span> </p><p><span
  m='570310'>What</span> <span m='570510'>else</span> <span m='570720'>do</span>
  <span m='570810'>you</span> <span m='570960'>set?</span> <span
  m='571320'>Oh,</span> <span m='571530'>you</span> <span m='572290'>set</span>
  <span m='573350'>the</span> <span m='575790'>nonlinear</span> <span
  m='576510'>activation,</span> <span m='577410'>the</span> <span
  m='577530'>nonlinear</span> <span m='581460'>activation</span> <span
  m='582300'>function,</span> <span m='584280'>active</span> <span
  m='584800'>I'll</span> <span m='584970'>say</span> <span
  m='585270'>function.</span> <span m='586590'>And</span> <span
  m='586710'>let</span> <span m='586860'>me</span> <span m='586980'>just</span>
  <span m='587250'>go</span> <span m='587430'>over</span> <span
  m='587670'>here</span> <span m='587940'>and</span> <span m='588090'>say</span>
  <span m='589170'>what</span> <span m='589470'>function</span> <span
  m='590820'>people</span> <span m='591180'>now</span> <span
  m='591570'>mostly</span> <span m='592080'>use.</span> </p><p><span
  m='592500'>The</span> <span m='593340'>activation</span> <span
  m='594210'>function</span> <span m='597780'>is</span> <span
  m='599010'>called</span> <span m='599520'>ReLU</span> <span
  m='602030'>pronounced</span> <span m='602750'>different</span> <span
  m='603080'>ways.</span> <span m='603570'>I</span> <span
  m='603670'>don't</span> <span m='603740'>know</span> <span
  m='603890'>how</span> <span m='604130'>we</span> <span m='604280'>got</span>
  <span m='604550'>into</span> <span m='604820'>that</span> <span
  m='605750'>crazy</span> <span m='606140'>thing.</span> <span
  m='606470'>For</span> <span m='606680'>this</span> <span
  m='606950'>function,</span> <span m='607610'>that</span> <span
  m='607970'>is</span> <span m='609230'>0</span> <span m='610850'>and</span>
  <span m='611120'>x.</span> <span m='613430'>So</span> <span
  m='613670'>the</span> <span m='613820'>function,</span> <span
  m='614390'>ReLU</span> <span m='614840'>is</span> <span m='615110'>a</span>
  <span m='615200'>function</span> <span m='615680'>of</span> <span
  m='615800'>x</span> <span m='616160'>is</span> <span m='616420'>the</span>
  <span m='616980'>maximum</span> <span m='617630'>the</span> <span
  m='617750'>larger</span> <span m='618680'>of</span> <span m='619670'>0</span>
  <span m='620300'>and</span> <span m='620620'>x.</span> </p><p><span
  m='624080'>The</span> <span m='624170'>point</span> <span
  m='624470'>is,</span> <span m='624650'>it's</span> <span m='624830'>not</span>
  <span m='625070'>linear,</span> <span m='626800'>and</span> <span
  m='627010'>the</span> <span m='627100'>point</span> <span m='627400'>is</span>
  <span m='627670'>that</span> <span m='627910'>if</span> <span
  m='628090'>we</span> <span m='628570'>didn't</span> <span
  m='629110'>allow</span> <span m='629570'>nonlinearity</span> <span
  m='630580'>in</span> <span m='630730'>here</span> <span
  m='630940'>somewhere,</span> <span m='631690'>we</span> <span
  m='631870'>couldn't</span> <span m='632170'>even</span> <span
  m='632440'>solve</span> <span m='632770'>this</span> <span
  m='633040'>playground</span> <span m='633640'>problem.</span> <span
  m='634630'>Because</span> <span m='635020'>if</span> <span
  m='635200'>our</span> <span m='635920'>classifiers</span> <span
  m='636850'>were</span> <span m='637120'>all</span> <span
  m='637420'>linear</span> <span m='638050'>classifiers,</span> <span
  m='638980'>like</span> <span m='639610'>support</span> <span
  m='640240'>vector</span> <span m='640750'>machines,</span> <span
  m='641890'>I</span> <span m='642040'>couldn't</span> <span
  m='642730'>separate</span> <span m='643960'>the</span> <span
  m='644080'>blue</span> <span m='644410'>from</span> <span
  m='644620'>the</span> <span m='644740'>orange</span> <span
  m='645820'>with</span> <span m='646060'>a</span> <span
  m='646630'>plane.</span> <span m='648685'>It's</span> <span
  m='649090'>got</span> <span m='649300'>to</span> <span
  m='649510'>somehow</span> <span m='650080'>create</span> <span
  m='650440'>some</span> <span m='650680'>nonlinear</span> <span
  m='651280'>function</span> <span m='651850'>which</span> <span
  m='652720'>maybe</span> <span m='653130'>the</span> <span
  m='653320'>function</span> <span m='653800'>is</span> <span
  m='654640'>trying</span> <span m='654970'>to</span> <span
  m='655060'>be--</span> <span m='655610'>a</span> <span m='656200'>good</span>
  <span m='656890'>function</span> <span m='657430'>would</span> <span
  m='657670'>be</span> <span m='659740'>a</span> <span
  m='659830'>function</span> <span m='660310'>of</span> <span
  m='660430'>r</span> <span m='660640'>and</span> <span m='660730'>theta</span>
  <span m='661150'>maybe,</span> <span m='663430'>maybe</span> <span
  m='664360'>r</span> <span m='664810'>minus</span> <span m='665810'>5.</span>
  </p><p><span m='667060'>So</span> <span m='667840'>maybe</span> <span
  m='668320'>the</span> <span m='668440'>distance</span> <span
  m='669010'>out</span> <span m='669220'>to</span> <span m='669880'>that.</span>
  <span m='670210'>Let's</span> <span m='670450'>suppose</span> <span
  m='670930'>that</span> <span m='671110'>distance</span> <span
  m='671620'>is</span> <span m='671830'>5.</span> <span m='673970'>Then,</span>
  <span m='674140'>r</span> <span m='674380'>minus</span> <span
  m='674800'>5</span> <span m='675190'>will</span> <span m='675400'>be</span>
  <span m='675640'>negative</span> <span m='676240'>on</span> <span
  m='676390'>the</span> <span m='676510'>blues,</span> <span
  m='677680'>because</span> <span m='678160'>r</span> <span m='678400'>is</span>
  <span m='678520'>small.</span> <span m='679630'>And</span> <span
  m='679810'>r</span> <span m='679990'>minus</span> <span m='680350'>5</span>
  <span m='680650'>will</span> <span m='680740'>be</span> <span
  m='680950'>positive</span> <span m='681640'>on</span> <span
  m='681790'>the</span> <span m='681940'>oranges,</span> <span
  m='682720'>because</span> <span m='682990'>r</span> <span m='683230'>is</span>
  <span m='683380'>bigger.</span> <span m='684340'>And</span> <span
  m='684550'>therefore,</span> <span m='685490'>we</span> <span
  m='685670'>will</span> <span m='686350'>have</span> <span
  m='686530'>the</span> <span m='686650'>right</span> <span
  m='686990'>signs,</span> <span m='690030'>less</span> <span
  m='690360'>than</span> <span m='690510'>0 or</span> <span
  m='690900'>greater</span> <span m='691260'>than</span> <span
  m='691470'>0,</span> <span m='692370'>and</span> <span m='694110'>it'll</span>
  <span m='694350'>classify</span> <span m='695310'>this</span> <span
  m='697590'>data,</span> <span m='698100'>this</span> <span
  m='698340'>training</span> <span m='698820'>data.</span> <span
  m='699960'>Yeah.</span> </p><p><span m='701450'>So</span> <span
  m='701640'>it</span> <span m='701730'>has</span> <span m='701940'>to</span>
  <span m='702060'>do</span> <span m='702270'>that.</span> <span
  m='703230'>This</span> <span m='703440'>is</span> <span m='703560'>not</span>
  <span m='703830'>a</span> <span m='703890'>hard</span> <span
  m='704190'>one</span> <span m='704430'>to</span> <span m='704580'>do.</span>
  <span m='705060'>There</span> <span m='705540'>are</span> <span
  m='707070'>four</span> <span m='707550'>examples,</span> <span
  m='708240'>as</span> <span m='708420'>I</span> <span m='708510'>say,</span>
  <span m='708780'>two</span> <span m='709050'>are</span> <span
  m='709170'>trivial.</span> <span m='711450'>It</span> <span
  m='711630'>finds</span> <span m='712080'>a</span> <span m='712170'>good</span>
  <span m='712810'>function.</span> <span m='713430'>Well</span> <span
  m='714180'>yeah,</span> <span m='714430'>I've</span> <span
  m='714540'>forgotten,</span> <span m='715090'>they're</span> <span
  m='715260'>so</span> <span m='715530'>trivial,</span> <span
  m='716760'>they</span> <span m='718350'>shouldn't</span> <span
  m='719070'>be</span> <span m='719220'>mentioned,</span> <span
  m='721400'>and</span> <span m='721540'>then</span> <span
  m='722340'>this</span> <span m='722730'>is</span> <span m='723040'>the</span>
  <span m='723630'>medium</span> <span m='726690'>test.</span> </p><p><span
  m='727920'>And</span> <span m='728100'>then</span> <span m='728520'>the</span>
  <span m='728640'>hard</span> <span m='729060'>test</span> <span
  m='729630'>is</span> <span m='729900'>when</span> <span m='730230'>you</span>
  <span m='730350'>have</span> <span m='732900'>a</span> <span
  m='732990'>sort</span> <span m='733350'>of</span> <span
  m='733410'>spiral</span> <span m='734100'>of</span> <span
  m='734250'>oranges,</span> <span m='737370'>and</span> <span
  m='737550'>inside,</span> <span m='738180'>you</span> <span
  m='738300'>have</span> <span m='738450'>a</span> <span
  m='738510'>spiral</span> <span m='739200'>of</span> <span
  m='739320'>blues.</span> <span m='740880'>That</span> <span
  m='741120'>was</span> <span m='742880'>cooked</span> <span
  m='743240'>up</span> <span m='743420'>by</span> <span m='743660'>a</span>
  <span m='744600'>fiend.</span> <span m='749590'>So</span> <span
  m='750080'>the</span> <span m='752380'>system</span> <span
  m='752950'>is</span> <span m='753100'>trying</span> <span m='753430'>to</span>
  <span m='753520'>find</span> <span m='753910'>a</span> <span
  m='753970'>function</span> <span m='755020'>that's</span> <span
  m='755560'>positive</span> <span m='756280'>on</span> <span
  m='757360'>one</span> <span m='757690'>spiral</span> <span
  m='758320'>and</span> <span m='758470'>negative</span> <span
  m='758980'>on</span> <span m='759160'>the</span> <span m='759280'>other</span>
  <span m='759580'>spiral,</span> <span m='760240'>and</span> <span
  m='760420'>that</span> <span m='760660'>takes</span> <span
  m='761620'>quite</span> <span m='761890'>a</span> <span m='761950'>bit</span>
  <span m='762160'>of</span> <span m='762610'>time,</span> <span
  m='763540'>many,</span> <span m='764030'>many</span> <span
  m='764800'>epochs.</span> </p><p><span m='765670'>I</span> <span
  m='765790'>learned</span> <span m='766090'>what</span> <span
  m='766300'>an</span> <span m='766420'>epoch</span> <span m='766990'>is.</span>
  <span m='770140'>Did</span> <span m='770320'>you</span> <span
  m='770470'>know</span> <span m='770710'>what</span> <span m='770860'>an</span>
  <span m='770980'>epoch</span> <span m='771520'>is?</span> <span
  m='771670'>I</span> <span m='772300'>didn't</span> <span
  m='772480'>know</span> <span m='772790'>whether it</span> <span
  m='772870'>was</span> <span m='773080'>just</span> <span m='773320'>a</span>
  <span m='773380'>fancy</span> <span m='773800'>word</span> <span
  m='774070'>for</span> <span m='775510'>counting</span> <span
  m='775990'>the</span> <span m='776110'>steps</span> <span m='776710'>in</span>
  <span m='776890'>gradient</span> <span m='777400'>descent.</span> <span
  m='778780'>But</span> <span m='779020'>it</span> <span
  m='779200'>counts</span> <span m='781630'>the</span> <span
  m='781720'>steps,</span> <span m='782230'>all</span> <span
  m='782340'>right,</span> <span m='783250'>but</span> <span
  m='783460'>one</span> <span m='783790'>epoch</span> <span m='784420'>is</span>
  <span m='785710'>the</span> <span m='785950'>number</span> <span
  m='786460'>of</span> <span m='786640'>steps</span> <span
  m='787180'>that</span> <span m='787330'>matches</span> <span
  m='787930'>the</span> <span m='789410'>size</span> <span m='789890'>of</span>
  <span m='790010'>the</span> <span m='790100'>training</span> <span
  m='790610'>data.</span> <span m='791610'>So</span> <span m='791690'>if</span>
  <span m='791780'>you</span> <span m='791930'>have</span> <span
  m='792080'>a</span> <span m='792140'>million</span> <span
  m='792590'>samples--</span> <span m='794710'>where</span> <span
  m='795730'>ordinary</span> <span m='796240'>gradient</span> <span
  m='796750'>descent</span> <span m='797230'>you</span> <span
  m='797380'>would</span> <span m='797620'>be</span> <span
  m='797830'>doing</span> <span m='798190'>a</span> <span
  m='798250'>million--</span> <span m='798760'>you'd</span> <span
  m='798890'>have</span> <span m='799660'>a</span> <span
  m='799720'>million</span> <span m='800230'>by</span> <span m='800420'>a</span>
  <span m='800480'>million</span> <span m='800890'>problem</span> <span
  m='802300'>per</span> <span m='802600'>step.</span> </p><p><span
  m='803780'>Of</span> <span m='803800'>course,</span> <span
  m='804940'>stochastic</span> <span m='805630'>gradient</span> <span
  m='806050'>descent</span> <span m='807040'>just</span> <span
  m='807390'>does</span> <span m='807700'>a</span> <span
  m='807850'>mini-batch</span> <span m='808750'>of</span> <span
  m='808930'>1</span> <span m='809530'>or</span> <span m='809740'>32</span>
  <span m='810580'>or</span> <span m='810700'>something,</span> <span
  m='811640'>but</span> <span m='812350'>anyway.</span> <span
  m='817810'>So</span> <span m='819250'>you</span> <span m='819580'>have</span>
  <span m='819760'>to</span> <span m='819880'>do</span> <span
  m='820090'>it</span> <span m='820660'>enough</span> <span
  m='820960'>mini-batches</span> <span m='821860'>so</span> <span
  m='822100'>that</span> <span m='822280'>the</span> <span
  m='822400'>total</span> <span m='822790'>number</span> <span
  m='823150'>you've</span> <span m='823840'>covered</span> <span
  m='824440'>is</span> <span m='824680'>the</span> <span
  m='824950'>equivalent</span> <span m='825580'>of</span> <span
  m='825700'>one</span> <span m='826660'>full</span> <span m='829180'>run</span>
  <span m='829510'>through</span> <span m='829840'>the</span> <span
  m='830410'>training</span> <span m='830890'>data,</span> <span
  m='834580'>and</span> <span m='834730'>that</span> <span m='834910'>was
  an</span> <span m='835150'>interesting</span> <span m='835660'>point.</span>
  <span m='835980'>Did</span> <span m='836170'>you</span> <span
  m='836320'>pick</span> <span m='836560'>up</span> <span m='836710'>that</span>
  <span m='836890'>point?</span> <span m='837340'>That</span> <span
  m='838930'>in</span> <span m='839110'>stochastic</span> <span
  m='839770'>gradient</span> <span m='840220'>descent,</span> <span
  m='841690'>you</span> <span m='841840'>could</span> <span
  m='842080'>either</span> <span m='842500'>do</span> <span m='843790'>a</span>
  <span m='843880'>mini-batch,</span> <span m='845810'>and</span> <span
  m='845950'>then</span> <span m='846340'>put</span> <span
  m='846580'>them</span> <span m='846760'>back</span> <span m='847090'>in</span>
  <span m='847240'>the</span> <span m='847890'>soup,</span> <span
  m='849160'>so</span> <span m='849340'>with</span> <span
  m='849730'>replacement.</span> <span m='851320'>Or</span> <span
  m='851920'>you</span> <span m='852100'>could</span> <span
  m='852940'>just</span> <span m='853930'>put</span> <span
  m='854200'>your</span> <span m='854980'>data</span> <span m='855370'>in</span>
  <span m='855610'>some</span> <span m='856120'>order,</span> <span
  m='857760'>from</span> <span m='858040'>one</span> <span m='858300'>to</span>
  <span m='858510'>a</span> <span m='858550'>zillion.</span> </p><p><span
  m='860610'>So</span> <span m='860890'>here's</span> <span m='863040'>a</span>
  <span m='863130'>first</span> <span m='863610'>x</span> <span
  m='864060'>and</span> <span m='864180'>then</span> <span m='864570'>more
  and</span> <span m='865020'>more</span> <span m='865290'>x's,</span> <span
  m='866130'>and</span> <span m='866280'>then</span> <span
  m='867870'>just</span> <span m='868530'>randomize</span> <span
  m='869280'>the</span> <span m='869460'>order.</span> <span
  m='870330'>So</span> <span m='870480'>you'd</span> <span
  m='870660'>have</span> <span m='870840'>to</span> <span
  m='870960'>randomize</span> <span m='871710'>the</span> <span
  m='871830'>order</span> <span m='872160'>for</span> <span
  m='873060'>stochastic</span> <span m='873530'>gradient</span> <span
  m='874050'>descent</span> <span m='874410'>to</span> <span
  m='874500'>be</span> <span m='875370'>reasonable,</span> <span
  m='876540'>and</span> <span m='876690'>then</span> <span
  m='876930'>take</span> <span m='877350'>a</span> <span
  m='877410'>mini-batch</span> <span m='878100'>and</span> <span
  m='878220'>a</span> <span m='878280'>mini-batch</span> <span
  m='878940'>and</span> <span m='879040'>a</span> <span
  m='879120'>mini-batch</span> <span m='879820'>and</span> <span
  m='879920'>a</span> <span m='880020'>mini-batch.</span> <span
  m='880600'>And</span> <span m='880620'>when</span> <span m='880800'>you</span>
  <span m='881160'>get</span> <span m='881370'>to</span> <span
  m='881490'>the</span> <span m='881580'>bottom,</span> <span
  m='881970'>you've</span> <span m='882150'>finished</span> <span
  m='882660'>one</span> <span m='882990'>epoch.</span> <span
  m='884070'>And</span> <span m='884160'>then</span> <span
  m='884370'>you'd</span> <span m='885000'>probably</span> <span
  m='885510'>randomize</span> <span m='886260'>again,</span> <span
  m='886680'>maybe,</span> <span m='887070'>if</span> <span
  m='887280'>you</span> <span m='889750'>wanted</span> <span
  m='890100'>to</span> <span m='890190'>live</span> <span
  m='890460'>right.</span> <span m='891510'>And</span> <span
  m='892410'>go</span> <span m='892650'>through</span> <span
  m='893070'>the</span> <span m='894330'>mini-batches</span> <span
  m='895140'>again,</span> <span m='896040'>and</span> <span
  m='896250'>probably</span> <span m='896760'>do</span> <span
  m='897060'>1,000</span> <span m='897630'>times</span> <span
  m='900060'>or</span> <span m='900210'>more.</span> </p><p><span
  m='901320'>Anyway,</span> <span m='901800'>so</span> <span m='902070'>I</span>
  <span m='902670'>haven't</span> <span m='903090'>said</span> <span
  m='903550'>yet</span> <span m='903820'>what</span> <span m='904260'>you</span>
  <span m='904470'>do,</span> <span m='904820'>what</span> <span
  m='905160'>this</span> <span m='905420'>F</span> <span m='905640'>of</span>
  <span m='905790'>x</span> <span m='906060'>is</span> <span
  m='906240'>like,</span> <span m='906930'>but</span> <span
  m='907500'>you</span> <span m='907620'>can</span> <span m='907800'>sort</span>
  <span m='908040'>of</span> <span m='908130'>see</span> <span
  m='908430'>it</span> <span m='908550'>on</span> <span m='908700'>the</span>
  <span m='908820'>screen.</span> <span m='909870'>Because</span> <span
  m='911070'>as</span> <span m='911310'>it</span> <span
  m='912000'>creates</span> <span m='912590'>this</span> <span
  m='912800'>function</span> <span m='913350'>F,</span> <span
  m='914410'>it</span> <span m='914880'>kind</span> <span m='915120'>of</span>
  <span m='915240'>plots</span> <span m='915840'>it.</span> <span
  m='917150'>And</span> <span m='917340'>what</span> <span m='917610'>you</span>
  <span m='917790'>see</span> <span m='918420'>on</span> <span
  m='918600'>the</span> <span m='918720'>screen</span> <span
  m='919320'>is</span> <span m='921780'>the</span> <span m='921900'>0</span>
  <span m='922380'>set</span> <span m='922680'>for</span> <span
  m='922860'>that</span> <span m='923070'>function.</span> <span
  m='923680'>So</span> <span m='924390'>perfect</span> <span
  m='924990'>would</span> <span m='925170'>be</span> <span m='925920'>for</span>
  <span m='926160'>it</span> <span m='926250'>to</span> <span
  m='926370'>go</span> <span m='926670'>through</span> <span
  m='927060'>0--</span> <span m='927810'>if</span> <span m='927960'>I</span>
  <span m='928110'>had</span> <span m='928290'>another</span> <span
  m='929220'>color.</span> <span m='929640'>Oh,</span> <span m='929790'>I</span>
  <span m='929940'>do</span> <span m='930180'>have</span> <span
  m='930420'>another</span> <span m='930780'>color.</span> <span
  m='931290'>Look,</span> <span m='932010'>this</span> <span
  m='932160'>is</span> <span m='932280'>the</span> <span m='932370'>first</span>
  <span m='932700'>time</span> <span m='933000'>the</span> <span
  m='933090'>whole</span> <span m='933270'>semester</span> <span
  m='934740'>blue</span> <span m='935150'>is</span> <span m='935360'>up</span>
  <span m='935520'>here.</span> </p><p><span m='936160'>OK,</span> <span
  m='937720'>so</span> <span m='939030'>if</span> <span m='940260'>the</span>
  <span m='940380'>function</span> <span m='940860'>was</span> <span
  m='941100'>positive</span> <span m='941790'>there--</span> <span
  m='943310'>in</span> <span m='943440'>this</span> <span
  m='943650'>part,</span> <span m='943980'>on</span> <span m='944100'>the</span>
  <span m='944190'>blues--</span> <span m='945390'>and</span> <span
  m='945540'>negative</span> <span m='947340'>outside</span> <span
  m='947790'>that</span> <span m='948870'>region</span> <span
  m='950360'>for</span> <span m='950510'>the</span> <span
  m='950660'>oranges,</span> <span m='951350'>that</span> <span
  m='951560'>would</span> <span m='951680'>be</span> <span
  m='951920'>just</span> <span m='952220'>what</span> <span m='952400'>we</span>
  <span m='952550'>want.</span> <span m='952940'>Right?</span> <span
  m='953840'>That</span> <span m='953990'>would</span> <span
  m='954140'>be</span> <span m='954530'>what</span> <span m='954800'>this</span>
  <span m='955100'>little</span> <span m='955310'>Playground</span> <span
  m='955970'>site</span> <span m='956280'>is</span> <span
  m='956720'>creating.</span> <span m='957530'>And</span> <span
  m='957800'>on</span> <span m='957980'>the</span> <span
  m='958100'>screen,</span> <span m='958610'>you'll</span> <span
  m='958910'>see</span> <span m='959330'>it.</span> <span
  m='959780'>You'll</span> <span m='959990'>see</span> <span
  m='960350'>this</span> <span m='963020'>curve,</span> <span
  m='963530'>where</span> <span m='963710'>it</span> <span
  m='963830'>crosses</span> <span m='964250'>0.</span> </p><p><span
  m='965210'>So</span> <span m='965390'>that</span> <span
  m='965600'>curve,</span> <span m='965930'>where</span> <span
  m='966110'>it</span> <span m='966200'>crosses</span> <span
  m='966590'>0,</span> <span m='967040'>is</span> <span
  m='967130'>supposed</span> <span m='967610'>to</span> <span
  m='967730'>separate</span> <span m='968270'>the</span> <span
  m='968390'>two</span> <span m='968630'>sets.</span> <span
  m='970130'>One</span> <span m='970280'>set</span> <span m='970540'>is</span>
  <span m='970660'>positive,</span> <span m='971140'>one</span> <span
  m='971320'>set</span> <span m='971530'>is</span> <span
  m='971680'>negative,</span> <span m='972610'>where</span> <span
  m='972940'>0</span> <span m='973690'>is</span> <span m='973960'>in</span>
  <span m='974080'>between.</span> <span m='975250'>And</span> <span
  m='975400'>the</span> <span m='975490'>point</span> <span
  m='975850'>is,</span> <span m='976120'>it's</span> <span m='976300'>not</span>
  <span m='976570'>a</span> <span m='976630'>straight</span> <span
  m='976990'>line,</span> <span m='978040'>because</span> <span
  m='979510'>we've</span> <span m='979870'>got</span> <span
  m='980380'>this</span> <span m='980890'>nonlinear</span> <span
  m='981610'>function.</span> <span m='982100'>This</span> <span
  m='984520'>is</span> <span m='984670'>nonlinear,</span> <span
  m='987230'>and</span> <span m='987430'>it</span> <span
  m='987550'>allows</span> <span m='988120'>us</span> <span m='988360'>to</span>
  <span m='993280'>have</span> <span m='993490'>functions</span> <span
  m='994030'>like</span> <span m='994360'>r</span> <span m='995050'>minus</span>
  <span m='995440'>5.</span> <span m='996520'>And</span> <span
  m='998170'>so</span> <span m='998550'>at</span> <span m='999650'>5,</span>
  <span m='1000750'>that's</span> <span m='1000990'>where</span> <span
  m='1001290'>the</span> <span m='1001410'>function</span> <span
  m='1001860'>would</span> <span m='1002010'>be</span> <span
  m='1002190'>0,</span> <span m='1002640'>and</span> <span
  m='1003090'>you'll</span> <span m='1003300'>see</span> <span
  m='1003540'>that</span> <span m='1003780'>on</span> <span
  m='1003900'>the</span> <span m='1003990'>screen.</span> </p><p><span
  m='1005290'>You</span> <span m='1005310'>might</span> <span
  m='1005520'>just</span> <span m='1007890'>go</span> <span
  m='1008100'>to</span> <span m='1008850'>playground@tensorflow.</span> <span
  m='1010110'>Of</span> <span m='1010200'>course,</span> <span
  m='1010470'>TensorFlow</span> <span m='1011070'>is</span> <span
  m='1011280'>a</span> <span m='1011370'>big</span> <span
  m='1012810'>system.</span> <span m='1013650'>This</span> <span
  m='1013890'>is</span> <span m='1015330'>the</span> <span
  m='1015510'>child's</span> <span m='1016080'>department,</span> <span
  m='1017550'>but</span> <span m='1018790'>I</span> <span
  m='1020150'>thought</span> <span m='1020360'>it</span> <span
  m='1020450'>was</span> <span m='1020630'>pretty</span> <span
  m='1020900'>good.</span> <span m='1021150'>And</span> <span
  m='1021290'>then</span> <span m='1022070'>on</span> <span
  m='1022280'>this</span> <span m='1022460'>site,</span> <span
  m='1022910'>you</span> <span m='1023480'>decide</span> <span
  m='1024470'>how</span> <span m='1024650'>many</span> <span
  m='1025160'>layers</span> <span m='1025670'>there</span> <span
  m='1025790'>will</span> <span m='1025940'>be,</span> <span
  m='1026780'>how</span> <span m='1026900'>many</span> <span
  m='1027230'>neurons</span> <span m='1027859'>in</span> <span
  m='1028010'>each</span> <span m='1028280'>layer.</span> <span
  m='1028800'>So</span> <span m='1028880'>you</span> <span
  m='1029089'>create</span> <span m='1030500'>the</span> <span
  m='1030740'>structure</span> <span m='1031250'>that</span> <span
  m='1031430'>I'm</span> <span m='1031609'>about</span> <span
  m='1031940'>to</span> <span m='1032089'>draw.</span> </p><p><span
  m='1033140'>And</span> <span m='1035210'>you</span> <span
  m='1035300'>won't</span> <span m='1035540'>be</span> <span
  m='1035660'>able</span> <span m='1035930'>to</span> <span
  m='1037550'>get</span> <span m='1038240'>to</span> <span
  m='1038390'>solve</span> <span m='1038810'>this</span> <span
  m='1040730'>problem</span> <span m='1041180'>to</span> <span
  m='1041359'>find</span> <span m='1041750'>a</span> <span
  m='1041839'>function</span> <span m='1042349'>F</span> <span
  m='1042619'>that</span> <span m='1042770'>learns</span> <span
  m='1043240'>that</span> <span m='1043550'>data</span> <span
  m='1045290'>without</span> <span m='1046690'>a</span> <span
  m='1046730'>number</span> <span m='1047329'>of</span> <span
  m='1047750'>layers</span> <span m='1048860'>and</span> <span
  m='1049010'>a</span> <span m='1049070'>number</span> <span
  m='1049430'>of</span> <span m='1049550'>neurons.</span> <span
  m='1051440'>If</span> <span m='1051680'>you</span> <span
  m='1051800'>don't</span> <span m='1052010'>give</span> <span
  m='1052220'>it</span> <span m='1052310'>enough,</span> <span
  m='1052730'>you'll</span> <span m='1052940'>see</span> <span
  m='1053210'>it</span> <span m='1053360'>struggling.</span> <span
  m='1059250'>The</span> <span m='1059480'>0</span> <span m='1059900'>set</span>
  <span m='1060530'>tries</span> <span m='1061010'>to</span> <span
  m='1061160'>follow</span> <span m='1061700'>this,</span> <span
  m='1062060'>but</span> <span m='1062270'>it</span> <span
  m='1063650'>gives</span> <span m='1063950'>up</span> <span
  m='1064130'>at</span> <span m='1064250'>some</span> <span
  m='1064490'>point.</span> <span m='1066120'>This</span> <span
  m='1066360'>one</span> <span m='1066660'>doesn't</span> <span
  m='1067020'>take</span> <span m='1067260'>too</span> <span
  m='1067500'>many</span> <span m='1067830'>layers,</span> <span
  m='1068850'>and</span> <span m='1069000'>the</span> <span
  m='1069120'>two</span> <span m='1069390'>trivial</span> <span
  m='1069920'>examples,</span> <span m='1072030'>just</span> <span
  m='1072330'>a</span> <span m='1072390'>few</span> <span
  m='1072810'>neurons</span> <span m='1073680'>do</span> <span
  m='1074100'>the</span> <span m='1074250'>job.</span> </p><p><span
  m='1074910'>OK.</span> <span m='1075720'>So</span> <span
  m='1076020'>now,</span> <span m='1077430'>that's</span> <span
  m='1077760'>a</span> <span m='1077820'>little</span> <span
  m='1078120'>commented</span> <span m='1078550'>on</span> <span
  m='1079920'>one</span> <span m='1080350'>website.</span> <span
  m='1082350'>If</span> <span m='1082560'>you</span> <span
  m='1082680'>know</span> <span m='1082950'>other</span> <span
  m='1083190'>websites</span> <span m='1083910'>that</span> <span
  m='1084060'>I</span> <span m='1084180'>should</span> <span
  m='1084480'>know</span> <span m='1085530'>and</span> <span
  m='1085680'>should</span> <span m='1086310'>call</span> <span
  m='1086640'>attention</span> <span m='1087180'>to,</span> <span
  m='1087780'>could</span> <span m='1087990'>you</span> <span
  m='1088290'>send</span> <span m='1088560'>me</span> <span
  m='1088710'>an</span> <span m='1088810'>email?</span> <span
  m='1090430'>I'm</span> <span m='1090540'>just</span> <span
  m='1090750'>not</span> <span m='1090990'>aware</span> <span
  m='1091350'>of</span> <span m='1091500'>everything</span> <span
  m='1092010'>that's</span> <span m='1092610'>out</span> <span
  m='1092820'>there.</span> </p><p><span m='1095000'>Or</span> <span
  m='1095330'>if</span> <span m='1095450'>you</span> <span
  m='1095600'>know</span> <span m='1095870'>a</span> <span
  m='1099020'>good</span> <span m='1100690'>Convolutional</span> <span
  m='1101420'>Neural</span> <span m='1101720'>Net,</span> <span
  m='1102020'>CNN,</span> <span m='1102650'>that</span> <span
  m='1103820'>is</span> <span m='1104030'>available</span> <span
  m='1104630'>to</span> <span m='1105500'>practice</span> <span
  m='1106040'>on,</span> <span m='1107450'>where</span> <span
  m='1107660'>you</span> <span m='1107780'>could</span> <span
  m='1108020'>give</span> <span m='1108290'>it</span> <span
  m='1110300'>the</span> <span m='1110720'>training</span> <span
  m='1111200'>set.</span> <span m='1112760'>That's</span> <span
  m='1113100'>what</span> <span m='1113260'>I'm</span> <span
  m='1113750'>talking</span> <span m='1114170'>about</span> <span
  m='1114380'>here.</span> <span m='1118680'>I'd</span> <span
  m='1118830'>be</span> <span m='1118980'>glad</span> <span
  m='1119280'>to</span> <span m='1119370'>know,</span> <span
  m='1119870'>because</span> <span m='1120120'>I</span> <span
  m='1120840'>just</span> <span m='1121050'>don't</span> <span
  m='1121260'>know</span> <span m='1121500'>all</span> <span
  m='1121680'>that</span> <span m='1122510'>I</span> <span
  m='1122640'>should.</span> </p><p><span m='1123300'>OK.</span> <span
  m='1123930'>So</span> <span m='1124080'>what</span> <span
  m='1124290'>does</span> <span m='1124410'>the</span> <span
  m='1124500'>function</span> <span m='1124950'>look</span> <span
  m='1125190'>like?</span> <span m='1127430'>Well,</span> <span
  m='1127700'>as</span> <span m='1127880'>I</span> <span m='1128000'>say,</span>
  <span m='1129790'>linear</span> <span m='1130240'>isn't</span> <span
  m='1130480'>going</span> <span m='1130600'>to</span> <span
  m='1130720'>do</span> <span m='1130960'>it,</span> <span
  m='1131230'>but</span> <span m='1131440'>linear</span> <span
  m='1132070'>is</span> <span m='1133240'>a</span> <span m='1133330'>very</span>
  <span m='1133720'>important</span> <span m='1134170'>part</span> <span
  m='1134470'>of</span> <span m='1134590'>it,</span> <span m='1135490'>of</span>
  <span m='1136150'>this</span> <span m='1136360'>function</span> <span
  m='1136840'>F.</span> <span m='1138010'>So</span> <span m='1138250'>the</span>
  <span m='1138370'>function</span> <span m='1138820'>F</span> <span
  m='1139030'>really</span> <span m='1139420'>has</span> <span
  m='1139660'>the</span> <span m='1139780'>form--</span> <span
  m='1141220'>well,</span> <span m='1142420'>so</span> <span
  m='1143970'>we</span> <span m='1144160'>start</span> <span
  m='1144490'>here</span> <span m='1144790'>with</span> <span
  m='1145090'>a</span> <span m='1145780'>vector</span> <span
  m='1146290'>of</span> <span m='1147610'>one,</span> <span
  m='1148000'>two,</span> <span m='1148480'>three,</span> <span
  m='1148990'>four,</span> <span m='1149860'>m is</span> <span
  m='1150240'>five.</span> <span m='1151840'>This</span> <span
  m='1153490'>is</span> <span m='1153650'>the</span> <span
  m='1153760'>vector</span> <span m='1154180'>x,</span> <span
  m='1156980'>five</span> <span m='1157310'>components.</span> <span
  m='1159840'>OK,</span> <span m='1160780'>so</span> <span
  m='1161650'>let</span> <span m='1161800'>me</span> <span
  m='1161980'>erase</span> <span m='1162400'>that</span> <span
  m='1162550'>now.</span> </p><p><span m='1163690'>OK,</span> <span
  m='1164470'>so</span> <span m='1164710'>then</span> <span
  m='1165070'>we</span> <span m='1165310'>have</span> <span
  m='1167170'>layer</span> <span m='1167470'>1</span> <span
  m='1172020'>with</span> <span m='1174570'>some</span> <span
  m='1174810'>number</span> <span m='1175080'>of</span> <span
  m='1175170'>points.</span> <span m='1176700'>Let's</span> <span
  m='1176970'>say,</span> <span m='1179440'>n1</span> <span
  m='1180310'>is</span> <span m='1181420'>6</span> <span
  m='1181870'>neurons,</span> <span m='1185130'>and</span> <span
  m='1186140'>let</span> <span m='1186290'>me</span> <span
  m='1186440'>make</span> <span m='1186650'>this</span> <span
  m='1187100'>simple.</span> <span m='1187670'>I'll</span> <span
  m='1187850'>just</span> <span m='1188120'>have</span> <span
  m='1188300'>that</span> <span m='1188450'>one</span> <span
  m='1188780'>layer,</span> <span m='1189740'>and</span> <span
  m='1189890'>then</span> <span m='1190490'>I'll</span> <span
  m='1190640'>have</span> <span m='1190820'>the</span> <span
  m='1190970'>output.</span> <span m='1191420'>This</span> <span
  m='1191930'>will</span> <span m='1192080'>be</span> <span
  m='1192230'>the</span> <span m='1192350'>output</span> <span
  m='1192830'>layer,</span> <span m='1196880'>and</span> <span
  m='1197030'>it's</span> <span m='1197270'>just</span> <span
  m='1197600'>going</span> <span m='1197790'>to</span> <span
  m='1197870'>be</span> <span m='1198140'>one</span> <span
  m='1198440'>number.</span> </p><p><span m='1201490'>So</span> <span
  m='1201770'>I'm</span> <span m='1202060'>going</span> <span
  m='1202170'>to</span> <span m='1202280'>have</span> <span m='1202490'>a</span>
  <span m='1202550'>matrix,</span> <span m='1203210'>A1,</span> <span
  m='1206120'>that</span> <span m='1206810'>takes</span> <span
  m='1207260'>me</span> <span m='1207680'>from</span> <span
  m='1208070'>this.</span> <span m='1208970'>A1</span> <span
  m='1209540'>will</span> <span m='1209690'>be</span> <span m='1212180'>6</span>
  <span m='1212510'>by</span> <span m='1212690'>5,</span> <span
  m='1214140'>because</span> <span m='1214350'>I</span> <span
  m='1214410'>want</span> <span m='1214680'>6</span> <span
  m='1215070'>outputs</span> <span m='1216630'>and</span> <span
  m='1216810'>5</span> <span m='1217260'>inputs.</span> <span
  m='1218040'>6</span> <span m='1218400'>by</span> <span m='1218580'>5</span>
  <span m='1218910'>matrix,</span> <span m='1219370'>so I have</span> <span
  m='1219580'>30</span> <span m='1220050'>weights</span> <span
  m='1220650'>to</span> <span m='1220830'>choose</span> <span
  m='1221310'>there.</span> <span m='1223570'>And</span> <span
  m='1225960'>so</span> <span m='1226290'>the</span> <span m='1228660'>y</span>
  <span m='1229470'>that</span> <span m='1230250'>comes</span> <span
  m='1230640'>out</span> <span m='1230940'>is</span> <span
  m='1231090'>going</span> <span m='1231230'>to</span> <span
  m='1231330'>be</span> <span m='1232050'>y1</span> <span
  m='1233690'>will</span> <span m='1233940'>be</span> <span
  m='1234210'>A1</span> <span m='1235290'>times</span> <span
  m='1235800'>x0.</span> <span m='1236730'>So</span> <span m='1237000'>x0</span>
  <span m='1237660'>is</span> <span m='1239190'>the</span> <span
  m='1240330'>feature</span> <span m='1240810'>vector</span> <span
  m='1241440'>with</span> <span m='1241650'>5</span> <span
  m='1242020'>components.</span> </p><p><span m='1244140'>So</span> <span
  m='1244380'>that's</span> <span m='1244710'>a</span> <span
  m='1244800'>purely</span> <span m='1245400'>linear</span> <span
  m='1246000'>thing,</span> <span m='1246450'>but</span> <span
  m='1246720'>we</span> <span m='1247320'>also</span> <span
  m='1247740'>want</span> <span m='1248250'>an</span> <span
  m='1252430'>offset</span> <span m='1252970'>function,</span> <span
  m='1253480'>offset</span> <span m='1253990'>vector.</span> <span
  m='1254650'>So</span> <span m='1254800'>that's a</span> <span
  m='1255130'>vector.</span> <span m='1256120'>Then,</span> <span
  m='1257110'>this,</span> <span m='1258340'>the</span> <span
  m='1258520'>y</span> <span m='1258940'>that's</span> <span
  m='1259180'>coming</span> <span m='1259510'>out,</span> <span
  m='1259750'>has</span> <span m='1259960'>6</span> <span
  m='1260350'>components.</span> <span m='1262060'>The</span> <span
  m='1262210'>A1</span> <span m='1262930'>is</span> <span m='1263230'>6</span>
  <span m='1263590'>by</span> <span m='1263800'>5,</span> <span
  m='1265780'>the</span> <span m='1265960'>x0</span> <span
  m='1266560'>was</span> <span m='1266830'>5</span> <span m='1267220'>by</span>
  <span m='1267460'>1,</span> <span m='1267940'>and</span> <span
  m='1268060'>then</span> <span m='1268270'>of</span> <span
  m='1268360'>course,</span> <span m='1268660'>this</span> <span
  m='1268960'>is</span> <span m='1269140'>6</span> <span m='1269500'>by</span>
  <span m='1269770'>1.</span> <span m='1270550'>So</span> <span
  m='1270730'>these</span> <span m='1271030'>are</span> <span
  m='1272380'>the</span> <span m='1272530'>weights.</span> <span
  m='1275500'>Yeah,</span> <span m='1275850'>I'll</span> <span
  m='1276070'>call</span> <span m='1276340'>them</span> <span
  m='1276550'>all</span> <span m='1276790'>weights,</span> <span
  m='1278440'>weights</span> <span m='1278920'>to</span> <span
  m='1279190'>compute.</span> </p><p><span m='1285940'>So</span> <span
  m='1286180'>these</span> <span m='1286510'>are</span> <span
  m='1286690'>connected.</span> <span m='1287020'>The</span> <span
  m='1287350'>usual</span> <span m='1287800'>picture</span> <span
  m='1289090'>is</span> <span m='1289480'>to</span> <span
  m='1290200'>show</span> <span m='1292060'>all</span> <span
  m='1292270'>these</span> <span m='1292600'>connections.</span> <span
  m='1294450'>I'll</span> <span m='1294640'>just</span> <span
  m='1295390'>put</span> <span m='1295660'>in</span> <span
  m='1296110'>some</span> <span m='1296380'>of</span> <span
  m='1296440'>them.</span> <span m='1298270'>So</span> <span
  m='1298510'>in</span> <span m='1298660'>here,</span> <span
  m='1298840'>we</span> <span m='1299050'>have</span> <span
  m='1299500'>30</span> <span m='1300400'>plus</span> <span m='1300910'>6</span>
  <span m='1304390'>parameters,</span> <span m='1307330'>36</span> <span
  m='1308020'>parameters,</span> <span m='1309010'>and</span> <span
  m='1309160'>then</span> <span m='1309400'>I'm</span> <span
  m='1309610'>going</span> <span m='1309850'>to</span> <span
  m='1310600'>close</span> <span m='1311180'>this.</span> <span
  m='1312070'>It's</span> <span m='1312300'>going</span> <span
  m='1312500'>to</span> <span m='1312580'>be</span> <span m='1312700'>a</span>
  <span m='1312760'>very</span> <span m='1313060'>shallow</span> <span
  m='1315470'>thing,</span> <span m='1315850'>so</span> <span
  m='1316120'>that</span> <span m='1316360'>will</span> <span
  m='1316540'>be</span> <span m='1316780'>just</span> <span m='1322720'>1</span>
  <span m='1322960'>by</span> <span m='1323140'>6.</span> <span
  m='1323930'>Yeah.</span> <span m='1325110'>OK.</span> </p><p><span
  m='1328780'>Right,</span> <span m='1329350'>so</span> <span
  m='1329560'>we're</span> <span m='1329650'>just</span> <span
  m='1329890'>getting</span> <span m='1330160'>one</span> <span
  m='1330490'>output.</span> <span m='1331210'>So</span> <span
  m='1331660'>that's</span> <span m='1331990'>just</span> <span
  m='1332230'>a</span> <span m='1332290'>vector</span> <span
  m='1333400'>at</span> <span m='1333550'>this</span> <span
  m='1334600'>final</span> <span m='1336370'>point,</span> <span
  m='1336820'>but</span> <span m='1337810'>of</span> <span
  m='1337930'>course,</span> <span m='1338290'>that</span> <span
  m='1338600'>the</span> <span m='1338950'>whole</span> <span
  m='1339400'>idea</span> <span m='1339880'>of</span> <span
  m='1340060'>deep</span> <span m='1340450'>neural</span> <span
  m='1340780'>nets</span> <span m='1341170'>is</span> <span
  m='1341380'>that</span> <span m='1341560'>you</span> <span
  m='1341710'>have</span> <span m='1342190'>many</span> <span
  m='1342610'>layers.</span> <span m='1343810'>So</span> <span
  m='1345420'>36</span> <span m='1346270'>more</span> <span
  m='1346480'>realistically</span> <span m='1347380'>is</span> <span
  m='1347560'>in</span> <span m='1347710'>the</span> <span
  m='1347830'>tens</span> <span m='1348250'>of</span> <span
  m='1348370'>thousands,</span> <span m='1349420'>and</span> <span
  m='1349570'>you</span> <span m='1349690'>have</span> <span
  m='1349960'>it</span> <span m='1350860'>multiple</span> <span
  m='1351460'>times.</span> <span m='1352330'>And</span> <span
  m='1352480'>the</span> <span m='1352660'>idea</span> <span
  m='1353110'>seems</span> <span m='1353500'>to</span> <span
  m='1353620'>be</span> <span m='1356060'>that</span> <span
  m='1360020'>you</span> <span m='1360170'>can</span> <span
  m='1360650'>separate</span> <span m='1361760'>what</span> <span
  m='1362000'>layer</span> <span m='1362360'>one</span> <span
  m='1364130'>learns</span> <span m='1365270'>about</span> <span
  m='1365660'>the</span> <span m='1366380'>data</span> <span
  m='1367280'>and</span> <span m='1367670'>from</span> <span
  m='1367940'>what</span> <span m='1368150'>layer</span> <span
  m='1368480'>two</span> <span m='1368810'>learns</span> <span
  m='1369200'>about</span> <span m='1369500'>the</span> <span
  m='1369620'>data.</span> </p><p><span m='1370400'>Layer</span> <span
  m='1370800'>one--</span> <span m='1371510'>this</span> <span
  m='1371780'>A1,</span> <span m='1372950'>apparently</span> <span
  m='1374790'>by</span> <span m='1375090'>just</span> <span
  m='1376170'>looking</span> <span m='1376650'>after</span> <span
  m='1377130'>the</span> <span m='1377520'>computation--</span> <span
  m='1378810'>this</span> <span m='1379180'>learns</span> <span
  m='1379610'>some</span> <span m='1381570'>basic</span> <span
  m='1382080'>facts</span> <span m='1382470'>about</span> <span
  m='1382770'>the</span> <span m='1382890'>data.</span> <span
  m='1384630'>The</span> <span m='1384780'>next,</span> <span
  m='1386280'>A2</span> <span m='1387600'>which</span> <span
  m='1387840'>would</span> <span m='1387990'>go</span> <span
  m='1388260'>in</span> <span m='1388410'>here,</span> <span
  m='1388860'>would</span> <span m='1389160'>learn</span> <span
  m='1390570'>more</span> <span m='1392790'>detail,</span> <span
  m='1393930'>and</span> <span m='1394050'>then</span> <span
  m='1394290'>A3</span> <span m='1394800'>would</span> <span
  m='1394950'>learn</span> <span m='1395220'>more</span> <span
  m='1395490'>details.</span> <span m='1396000'>So</span> <span
  m='1396180'>we</span> <span m='1396360'>would</span> <span
  m='1396510'>have</span> <span m='1398010'>a</span> <span
  m='1398070'>number</span> <span m='1398430'>of</span> <span
  m='1398580'>layers,</span> <span m='1399540'>and</span> <span
  m='1399690'>it's</span> <span m='1399930'>that</span> <span
  m='1401100'>construction</span> <span m='1401940'>that</span> <span
  m='1404300'>has</span> <span m='1404510'>made</span> <span
  m='1405230'>neural</span> <span m='1405560'>net</span> <span
  m='1405800'>successful.</span> <span m='1407150'>But</span> <span
  m='1407360'>I</span> <span m='1407450'>haven't</span> <span
  m='1407690'>finished,</span> <span m='1408200'>because</span> <span
  m='1409700'>right</span> <span m='1409940'>now,</span> <span
  m='1410210'>it's</span> <span m='1410420'>only</span> <span
  m='1410720'>linear.</span> <span m='1412670'>Right</span> <span
  m='1412850'>now,</span> <span m='1413090'>I</span> <span
  m='1413210'>just</span> <span m='1413420'>have,</span> <span
  m='1413720'>I'll</span> <span m='1413930'>call</span> <span
  m='1414260'>it</span> <span m='1414410'>A2</span> <span m='1414920'>in</span>
  <span m='1415040'>here.</span> </p><p><span m='1416090'>Right</span> <span
  m='1416300'>now,</span> <span m='1416540'>I</span> <span
  m='1416690'>would</span> <span m='1416840'>just</span> <span
  m='1417080'>have</span> <span m='1417290'>a</span> <span
  m='1417350'>matrix</span> <span m='1417890'>multiplication</span> <span
  m='1418700'>apply</span> <span m='1419120'>A1</span> <span
  m='1419690'>and</span> <span m='1419810'>then</span> <span
  m='1420020'>apply</span> <span m='1420380'>A2,</span> <span
  m='1421250'>but</span> <span m='1421760'>in</span> <span
  m='1421970'>between</span> <span m='1423250'>there</span> <span
  m='1423500'>is</span> <span m='1425690'>a</span> <span m='1427400'>1</span>
  <span m='1427850'>by</span> <span m='1428150'>1</span> <span
  m='1430490'>action</span> <span m='1431120'>on</span> <span
  m='1431390'>each</span> <span m='1434790'>by</span> <span
  m='1435120'>this</span> <span m='1435450'>function.</span> <span
  m='1438580'>So</span> <span m='1438790'>that</span> <span
  m='1439120'>function</span> <span m='1440170'>acts</span> <span
  m='1440620'>on</span> <span m='1440860'>that</span> <span
  m='1441130'>number</span> <span m='1442860'>to</span> <span
  m='1443040'>give</span> <span m='1443340'>that</span> <span
  m='1443580'>number</span> <span m='1443910'>back</span> <span
  m='1444270'>again</span> <span m='1444720'>or</span> <span
  m='1444930'>to</span> <span m='1445050'>give</span> <span
  m='1445260'>0.</span> <span m='1446610'>So</span> <span m='1448110'>in</span>
  <span m='1448290'>there</span> <span m='1448650'>is</span> <span
  m='1448830'>ReLU.</span> <span m='1449850'>In</span> <span
  m='1450540'>this</span> <span m='1451890'>comes</span> <span
  m='1453000'>ReLU</span> <span m='1454170'>on</span> <span
  m='1454560'>each,</span> <span m='1455520'>6</span> <span
  m='1456390'>copies</span> <span m='1456930'>of</span> <span
  m='1457050'>ReLU</span> <span m='1457830'>acting</span> <span
  m='1458340'>on</span> <span m='1458520'>each</span> <span
  m='1458760'>of</span> <span m='1458820'>those</span> <span
  m='1459090'>6</span> <span m='1459480'>numbers.</span> <span
  m='1460820'>Right?</span> <span m='1461630'>So</span> <span
  m='1462350'>really</span> <span m='1463460'>x1</span> <span
  m='1466250'>comes</span> <span m='1466520'>from</span> <span
  m='1466820'>y1</span> <span m='1468260'>by</span> <span
  m='1468590'>applying</span> <span m='1469220'>ReLU</span> <span
  m='1469700'>to</span> <span m='1469940'>it.</span> </p><p><span
  m='1472460'>Then,</span> <span m='1472820'>that</span> <span
  m='1473090'>gives</span> <span m='1473480'>the</span> <span
  m='1473660'>x.</span> <span m='1474470'>So</span> <span
  m='1474680'>here</span> <span m='1474890'>are</span> <span
  m='1474980'>the</span> <span m='1475070'>y's</span> <span
  m='1476240'>from</span> <span m='1476480'>the</span> <span
  m='1476570'>linear</span> <span m='1476990'>part,</span> <span
  m='1477830'>and</span> <span m='1477950'>here</span> <span
  m='1478160'>are</span> <span m='1478220'>the</span> <span
  m='1478370'>x--</span> <span m='1479540'>that's</span> <span
  m='1479900'>y1.</span> <span m='1480480'>That's</span> <span
  m='1480710'>a</span> <span m='1480770'>vector</span> <span
  m='1481100'>y1</span> <span m='1482750'>from</span> <span
  m='1482990'>just</span> <span m='1483280'>the</span> <span
  m='1483380'>linear</span> <span m='1484460'>plus</span> <span
  m='1485330'>an</span> <span m='1485480'>affine</span> <span
  m='1486080'>map.</span> <span m='1486920'>Linear</span> <span
  m='1487370'>plus</span> <span m='1487790'>constant,</span> <span
  m='1489170'>that's</span> <span m='1489620'>affine.</span> <span
  m='1491120'>And</span> <span m='1491270'>then</span> <span
  m='1491660'>the</span> <span m='1491960'>next</span> <span
  m='1492290'>step</span> <span m='1492770'>is</span> <span
  m='1493610'>component</span> <span m='1494120'>by</span> <span
  m='1494300'>component</span> <span m='1495590'>we</span> <span
  m='1495920'>apply</span> <span m='1496340'>this</span> <span
  m='1496610'>function,</span> <span m='1497660'>and</span> <span
  m='1499190'>we</span> <span m='1499340'>get</span> <span
  m='1499670'>x1,</span> <span m='1502640'>and</span> <span
  m='1502760'>then</span> <span m='1502970'>do</span> <span
  m='1503150'>it</span> <span m='1503240'>again</span> <span
  m='1503630'>and</span> <span m='1503750'>again</span> <span
  m='1504110'>and</span> <span m='1504260'>again.</span> </p><p><span
  m='1505100'>So</span> <span m='1505310'>do</span> <span m='1505400'>you</span>
  <span m='1505490'>see</span> <span m='1506060'>the</span> <span
  m='1506330'>function?</span> <span m='1507660'>How</span> <span
  m='1507800'>do</span> <span m='1507950'>I</span> <span
  m='1508070'>describe</span> <span m='1508670'>now</span> <span
  m='1509000'>the</span> <span m='1509120'>function</span> <span
  m='1510080'>F</span> <span m='1510260'>of</span> <span m='1510440'>x?</span>
  <span m='1514150'>So</span> <span m='1514430'>the</span> <span
  m='1514550'>learning</span> <span m='1515000'>function</span> <span
  m='1521230'>which</span> <span m='1521560'>depends</span> <span
  m='1522160'>on</span> <span m='1524320'>the</span> <span
  m='1524380'>weights,</span> <span m='1526390'>on</span> <span
  m='1526570'>the</span> <span m='1526720'>A's</span> <span
  m='1528160'>and</span> <span m='1528340'>b's.</span> <span
  m='1532150'>So</span> <span m='1532360'>I</span> <span
  m='1532450'>start</span> <span m='1532810'>with</span> <span
  m='1532990'>an</span> <span m='1533140'>x,</span> <span m='1534610'>I</span>
  <span m='1534760'>apply</span> <span m='1536520'>A1</span> <span
  m='1537100'>to</span> <span m='1537340'>it.</span> <span
  m='1539270'>Yeah,</span> <span m='1539610'>let</span> <span
  m='1539710'>me</span> <span m='1539890'>do</span> <span
  m='1540100'>this.</span> </p><p><span m='1541610'>This</span> <span
  m='1541880'>is</span> <span m='1542180'>the</span> <span
  m='1542260'>function</span> <span m='1542770'>F</span> <span
  m='1543700'>of</span> <span m='1543880'>x.</span> <span m='1544600'>F
  of</span> <span m='1544930'>x</span> <span m='1545230'>is</span> <span
  m='1545410'>going</span> <span m='1545620'>to</span> <span
  m='1545710'>be</span> <span m='1546370'>F3,</span> <span
  m='1547870'>let's</span> <span m='1548140'>say,</span> <span
  m='1548710'>of</span> <span m='1548980'>F2</span> <span m='1550000'>of</span>
  <span m='1550360'>F1</span> <span m='1551500'>of</span> <span
  m='1551770'>x,</span> <span m='1555220'>one,</span> <span
  m='1555670'>two,</span> <span m='1556180'>three,</span> <span
  m='1556790'>parentheses,</span> <span m='1557620'>right?</span> <span
  m='1558520'>OK,</span> <span m='1558910'>so</span> <span
  m='1559150'>it's</span> <span m='1559360'>a</span> <span
  m='1559480'>chain,</span> <span m='1560260'>you</span> <span
  m='1560440'>could</span> <span m='1560620'>say.</span> <span
  m='1561520'>F</span> <span m='1561790'>is</span> <span m='1562000'>a--</span>
  <span m='1562810'>what's</span> <span m='1563110'>the</span> <span
  m='1563230'>right</span> <span m='1563500'>word</span> <span
  m='1563800'>for</span> <span m='1564070'>a</span> <span
  m='1564130'>chain</span> <span m='1564730'>of</span> <span
  m='1565360'>functions,</span> <span m='1566830'>if</span> <span
  m='1566980'>I</span> <span m='1567100'>take</span> <span m='1567370'>a</span>
  <span m='1567460'>function</span> <span m='1568030'>of</span> <span
  m='1568180'>a</span> <span m='1568240'>function?</span> <span
  m='1569890'>The</span> <span m='1570010'>reason</span> <span
  m='1570340'>I</span> <span m='1570400'>use</span> <span m='1570640'>the</span>
  <span m='1570730'>word</span> <span m='1570940'>chain</span> <span
  m='1571420'>is</span> <span m='1571600'>that</span> <span
  m='1571840'>the</span> <span m='1571960'>chain</span> <span
  m='1572380'>rule</span> <span m='1572800'>gives</span> <span
  m='1573140'>the</span> <span m='1573250'>derivative.</span> </p><p><span
  m='1574360'>So</span> <span m='1574600'>a</span> <span
  m='1574690'>function</span> <span m='1575380'>of</span> <span
  m='1575560'>a</span> <span m='1575650'>function</span> <span
  m='1576250'>of</span> <span m='1576370'>a</span> <span
  m='1576460'>function,</span> <span m='1579190'>that's</span> <span
  m='1579430'>called</span> <span m='1579970'>composition,</span> <span
  m='1581680'>composing</span> <span m='1582580'>function.</span> <span
  m='1583570'>So</span> <span m='1583810'>this</span> <span
  m='1583990'>is</span> <span m='1584140'>a</span> <span
  m='1584230'>composition.</span> <span m='1587720'>I</span> <span
  m='1587750'>don't</span> <span m='1587900'>know</span> <span
  m='1588100'>if</span> <span m='1588170'>there's</span> <span
  m='1588410'>a</span> <span m='1588500'>standard</span> <span
  m='1589160'>symbol</span> <span m='1589700'>for</span> <span
  m='1590420'>starting</span> <span m='1590900'>with</span> <span
  m='1591170'>F1</span> <span m='1591950'>and</span> <span m='1592070'>do</span>
  <span m='1592340'>some</span> <span m='1593150'>composition</span> <span
  m='1594770'>and</span> <span m='1594920'>do</span> <span
  m='1595130'>some</span> <span m='1595490'>composition.</span> <span
  m='1596820'>And</span> <span m='1596930'>now</span> <span
  m='1597110'>what</span> <span m='1597710'>are</span> <span
  m='1597800'>those</span> <span m='1598010'>separate</span> <span
  m='1598520'>F's?</span> <span m='1603180'>So</span> <span
  m='1603460'>the</span> <span m='1603710'>separate</span> <span
  m='1604160'>F's</span> <span m='1604640'>are</span> <span
  m='1604970'>the--</span> <span m='1607670'>F1</span> <span
  m='1609080'>of</span> <span m='1610000'>a</span> <span
  m='1610100'>vector</span> <span m='1611030'>would</span> <span
  m='1611240'>be--</span> <span m='1611720'>it</span> <span
  m='1611810'>includes</span> <span m='1612410'>the</span> <span
  m='1612530'>ReLU</span> <span m='1613130'>part,</span> <span
  m='1613610'>the</span> <span m='1613730'>nonlinear</span> <span
  m='1614360'>part,</span> <span m='1614810'>of</span> <span
  m='1615920'>A1,</span> <span m='1617960'>x0</span> <span
  m='1618920'>plus</span> <span m='1619460'>b1.</span> </p><p><span
  m='1621900'>So</span> <span m='1622040'>two</span> <span
  m='1622250'>parts,</span> <span m='1622850'>you</span> <span
  m='1623660'>do</span> <span m='1623870'>the</span> <span
  m='1623990'>linear</span> <span m='1625250'>or</span> <span
  m='1625600'>affine</span> <span m='1627140'>map</span> <span
  m='1627590'>on</span> <span m='1627860'>your</span> <span
  m='1628850'>feature</span> <span m='1629240'>vector,</span> <span
  m='1630350'>and</span> <span m='1630530'>then</span> <span
  m='1632600'>component</span> <span m='1633080'>by</span> <span
  m='1633260'>component</span> <span m='1633890'>you</span> <span
  m='1635960'>apply</span> <span m='1636470'>that</span> <span
  m='1636770'>nonlinear</span> <span m='1637460'>function.</span> <span
  m='1638560'>And</span> <span m='1639290'>it</span> <span
  m='1639580'>took</span> <span m='1639890'>some</span> <span
  m='1640250'>years</span> <span m='1640730'>before</span> <span
  m='1641090'>that</span> <span m='1641720'>nonlinear</span> <span
  m='1642320'>function</span> <span m='1642770'>became</span> <span
  m='1645610'>a</span> <span m='1645770'>big</span> <span
  m='1646010'>favorite.</span> <span m='1647630'>People</span> <span
  m='1647960'>imagined</span> <span m='1648560'>that</span> <span
  m='1648830'>it</span> <span m='1648980'>was</span> <span
  m='1649220'>better,</span> <span m='1649670'>it</span> <span
  m='1649760'>was</span> <span m='1649970'>important,</span> <span
  m='1650480'>to</span> <span m='1650660'>have</span> <span m='1650960'>a</span>
  <span m='1651500'>smooth</span> <span m='1651980'>function.</span> <span
  m='1653180'>So</span> <span m='1653480'>the</span> <span
  m='1653660'>original</span> <span m='1654230'>functions</span> <span
  m='1654860'>were</span> <span m='1656180'>sigmoids,</span> <span
  m='1657290'>like</span> <span m='1657920'>S</span> <span
  m='1658190'>curves,</span> <span m='1662950'>but</span> <span
  m='1663590'>of</span> <span m='1663710'>course,</span> <span
  m='1664780'>it</span> <span m='1664970'>turned</span> <span
  m='1665300'>out</span> <span m='1665450'>that</span> <span
  m='1665660'>experiments</span> <span m='1666260'>showed</span> <span
  m='1666560'>that</span> <span m='1666710'>this</span> <span
  m='1666980'>worked</span> <span m='1667370'>even</span> <span
  m='1667610'>better.</span> </p><p><span m='1668630'>Yeah,</span> <span
  m='1668830'>so</span> <span m='1669050'>that</span> <span
  m='1669260'>would</span> <span m='1669440'>be</span> <span
  m='1669650'>F1,</span> <span m='1670760'>and</span> <span
  m='1670910'>then</span> <span m='1671600'>F2</span> <span
  m='1672140'>would</span> <span m='1672290'>have</span> <span
  m='1672500'>the</span> <span m='1672590'>same</span> <span
  m='1672950'>form,</span> <span m='1673340'>and</span> <span
  m='1673430'>F3</span> <span m='1673940'>would</span> <span
  m='1674120'>have</span> <span m='1674300'>the</span> <span
  m='1674390'>same</span> <span m='1674750'>form.</span> <span
  m='1675780'>So</span> <span m='1675920'>maybe</span> <span
  m='1676220'>this</span> <span m='1676460'>had</span> <span
  m='1676700'>36</span> <span m='1677510'>weights,</span> <span
  m='1678110'>and</span> <span m='1678200'>the</span> <span
  m='1678290'>next</span> <span m='1678590'>one</span> <span
  m='1679640'>would</span> <span m='1679820'>have</span> <span
  m='1680000'>another</span> <span m='1680330'>number</span> <span
  m='1680780'>and</span> <span m='1680900'>the</span> <span
  m='1680990'>next</span> <span m='1681350'>another</span> <span
  m='1681710'>number.</span> <span m='1684440'>You</span> <span
  m='1684590'>get</span> <span m='1684830'>quite</span> <span
  m='1685130'>complicated</span> <span m='1685850'>functions</span> <span
  m='1687440'>by</span> <span m='1687950'>composition,</span> <span
  m='1688940'>by</span> <span m='1689660'>like</span> <span m='1690320'>e</span>
  <span m='1690550'>to</span> <span m='1690680'>the</span> <span
  m='1690860'>sine</span> <span m='1691430'>of</span> <span
  m='1691580'>x,</span> <span m='1692060'>or</span> <span m='1692210'>e</span>
  <span m='1692480'>to</span> <span m='1692630'>the</span> <span
  m='1692750'>sign</span> <span m='1693290'>of</span> <span
  m='1693440'>the</span> <span m='1693920'>logarithm</span> <span
  m='1694640'>of</span> <span m='1694790'>x,</span> <span m='1695240'>or</span>
  <span m='1695420'>things</span> <span m='1695780'>like</span> <span
  m='1696020'>that.</span> <span m='1698510'>Pure</span> <span
  m='1698720'>math</span> <span m='1699110'>has</span> <span
  m='1699320'>asked,</span> <span m='1701120'>what</span> <span
  m='1701390'>functions</span> <span m='1701960'>can</span> <span
  m='1702260'>you</span> <span m='1702410'>get?</span> <span
  m='1703190'>Try</span> <span m='1703430'>to</span> <span
  m='1703550'>think</span> <span m='1703790'>of</span> <span
  m='1703910'>them</span> <span m='1704120'>all.</span> </p><p><span
  m='1704780'>Now,</span> <span m='1704990'>what</span> <span
  m='1705590'>kind</span> <span m='1705840'>of</span> <span
  m='1705930'>functions</span> <span m='1706460'>do</span> <span
  m='1706550'>we</span> <span m='1706730'>have</span> <span
  m='1706970'>here?</span> <span m='1707690'>What</span> <span
  m='1707900'>can</span> <span m='1708140'>I</span> <span m='1708290'>say</span>
  <span m='1708650'>about</span> <span m='1709100'>F</span> <span
  m='1709340'>of</span> <span m='1709490'>x</span> <span m='1710360'>as</span>
  <span m='1710570'>a</span> <span m='1710660'>function,</span> <span
  m='1711740'>as</span> <span m='1711920'>a</span> <span m='1711980'>math</span>
  <span m='1712370'>person?</span> <span m='1713870'>What</span> <span
  m='1714950'>kind</span> <span m='1715310'>of</span> <span m='1715360'>a</span>
  <span m='1715490'>function</span> <span m='1716000'>is</span> <span
  m='1716210'>it?</span> <span m='1717140'>So</span> <span
  m='1717380'>it's</span> <span m='1717590'>created</span> <span
  m='1718250'>out</span> <span m='1718580'>of</span> <span
  m='1720950'>matrices</span> <span m='1721820'>and</span> <span
  m='1721970'>vectors,</span> <span m='1722660'>out</span> <span
  m='1722870'>of</span> <span m='1723020'>a</span> <span
  m='1723650'>linear</span> <span m='1724160'>or</span> <span
  m='1724380'>affine</span> <span m='1724820'>map,</span> <span
  m='1725750'>followed</span> <span m='1726350'>by</span> <span
  m='1728410'>a</span> <span m='1728680'>nonlinear,</span> <span
  m='1729980'>by</span> <span m='1730190'>that</span> <span
  m='1730430'>particular</span> <span m='1731120'>nonlinear</span> <span
  m='1731780'>function.</span> <span m='1734490'>So</span> <span
  m='1734670'>what</span> <span m='1734910'>kind</span> <span
  m='1735120'>of</span> <span m='1735240'>a</span> <span
  m='1735300'>function</span> <span m='1735780'>is</span> <span
  m='1735930'>it?</span> </p><p><span m='1736980'>Well,</span> <span
  m='1737280'>I've</span> <span m='1737430'>written</span> <span
  m='1737970'>those</span> <span m='1738270'>words</span> <span
  m='1738630'>down</span> <span m='1739750'>up</span> <span
  m='1739960'>here,</span> <span m='1743080'>and</span> <span
  m='1743340'>F</span> <span m='1743550'>of</span> <span m='1743700'>x</span>
  <span m='1744000'>is</span> <span m='1744180'>going</span> <span
  m='1744360'>to</span> <span m='1744480'>be</span> <span m='1745580'>a</span>
  <span m='1745650'>continuous</span> <span m='1746430'>piecewise</span> <span
  m='1747150'>linear</span> <span m='1747510'>function.</span> <span
  m='1750630'>Because</span> <span m='1751050'>every</span> <span
  m='1751350'>step</span> <span m='1752910'>is</span> <span
  m='1753990'>continuous,</span> <span m='1755580'>that's</span> <span
  m='1755880'>a</span> <span m='1755940'>continuous</span> <span
  m='1756630'>function.</span> <span m='1757800'>Linear</span> <span
  m='1758190'>functions</span> <span m='1758700'>are</span> <span
  m='1758790'>a</span> <span m='1758820'>continuous</span> <span
  m='1759480'>functions,</span> <span m='1759900'>so</span> <span
  m='1761490'>we're</span> <span m='1761700'>taking</span> <span
  m='1762030'>a</span> <span m='1762360'>composition</span> <span
  m='1763320'>of</span> <span m='1763440'>continuous</span> <span
  m='1764190'>function,</span> <span m='1764700'>so</span> <span
  m='1764910'>it's</span> <span m='1765090'>continuous.</span> <span
  m='1766500'>And</span> <span m='1766980'>it's</span> <span
  m='1767160'>piecewise</span> <span m='1767790'>linear,</span> <span
  m='1768240'>because</span> <span m='1769230'>part</span> <span
  m='1769530'>of</span> <span m='1769680'>it</span> <span m='1769770'>is</span>
  <span m='1769950'>linear,</span> <span m='1770940'>and</span> <span
  m='1771120'>part</span> <span m='1771420'>of</span> <span
  m='1771540'>it</span> <span m='1771660'>is</span> <span
  m='1771870'>piecewise</span> <span m='1772560'>linear.</span> <span
  m='1775460'>So</span> <span m='1776250'>this</span> <span
  m='1776550'>is</span> <span m='1776730'>some</span> <span
  m='1777960'>continuous,</span> <span m='1780860'>piecewise,</span> <span
  m='1783390'>linear</span> <span m='1788570'>function</span> <span
  m='1791480'>of</span> <span m='1791690'>x,</span> <span m='1793904'>x</span>
  <span m='1794360'>in</span> <span m='1796050'>m</span> <span
  m='1796370'>dimensions.</span> <span m='1799040'>OK.</span> </p><p><span
  m='1802830'>So</span> <span m='1804260'>one</span> <span
  m='1804860'>little</span> <span m='1805110'>math</span> <span
  m='1805470'>question</span> <span m='1807030'>which</span> <span
  m='1807390'>I</span> <span m='1807510'>think</span> <span
  m='1807810'>helps</span> <span m='1808470'>to</span> <span
  m='1809430'>understand,</span> <span m='1811000'>to</span> <span
  m='1811650'>like</span> <span m='1812960'>to</span> <span
  m='1813150'>swallow</span> <span m='1813810'>the</span> <span
  m='1813990'>idea</span> <span m='1815480'>of</span> <span m='1815700'>a</span>
  <span m='1816510'>chain,</span> <span m='1817140'>of</span> <span
  m='1818310'>the</span> <span m='1818430'>kind</span> <span
  m='1818670'>of</span> <span m='1818760'>chain</span> <span
  m='1819150'>we</span> <span m='1819330'>have</span> <span
  m='1819690'>here,</span> <span m='1819960'>of</span> <span
  m='1820110'>linear</span> <span m='1820980'>followed</span> <span
  m='1821430'>by</span> <span m='1822210'>ReLU.</span> <span
  m='1827850'>So</span> <span m='1828120'>here's</span> <span
  m='1828390'>my</span> <span m='1828930'>question.</span> <span
  m='1829470'>This</span> <span m='1829680'>is</span> <span
  m='1829830'>the</span> <span m='1829890'>question</span> <span
  m='1830280'>I'm</span> <span m='1830400'>going</span> <span
  m='1830540'>to</span> <span m='1830670'>ask.</span> <span
  m='1831450'>And</span> <span m='1831990'>by</span> <span
  m='1832230'>the</span> <span m='1832320'>way,</span> <span
  m='1833100'>back</span> <span m='1833370'>propagation</span> <span
  m='1834150'>is</span> <span m='1834270'>certainly</span> <span
  m='1834660'>going</span> <span m='1834850'>to</span> <span
  m='1834930'>come</span> <span m='1835910'>Wednesday</span> <span
  m='1836520'>rather</span> <span m='1836820'>than</span> <span
  m='1837060'>today.</span> <span m='1837510'>That's</span> <span
  m='1837810'>a</span> <span m='1838470'>major</span> <span
  m='1838920'>topic</span> <span m='1839400'>in</span> <span
  m='1839520'>itself.</span> </p><p><span m='1841120'>So</span> <span
  m='1841530'>let</span> <span m='1841770'>me</span> <span
  m='1842100'>keep</span> <span m='1842430'>going</span> <span
  m='1842820'>with</span> <span m='1843150'>this</span> <span
  m='1843995'>function.</span> <span m='1847180'>Could</span> <span
  m='1847360'>you</span> <span m='1847450'>get</span> <span
  m='1847660'>any</span> <span m='1847900'>function</span> <span
  m='1848350'>whatsoever</span> <span m='1849010'>this</span> <span
  m='1849310'>way?</span> <span m='1850750'>Well,</span> <span
  m='1850930'>no,</span> <span m='1851260'>you</span> <span
  m='1851410'>only</span> <span m='1851680'>get</span> <span
  m='1851890'>continuous,</span> <span m='1852720'>piecewise,</span> <span
  m='1853270'>linear</span> <span m='1853630'>functions.</span> <span
  m='1856500'>It's</span> <span m='1856920'>an</span> <span
  m='1857040'>interesting</span> <span m='1857610'>case.</span> </p><p><span
  m='1859060'>Let</span> <span m='1859200'>me</span> <span
  m='1859350'>just</span> <span m='1860010'>ask</span> <span
  m='1860400'>you.</span> <span m='1861840'>One</span> <span
  m='1862050'>of</span> <span m='1862110'>the</span> <span
  m='1862260'>exercises</span> <span m='1863080'>says,</span> <span
  m='1863430'>if</span> <span m='1864120'>I</span> <span m='1864240'>took</span>
  <span m='1864810'>two</span> <span m='1865350'>continuous,</span> <span
  m='1866190'>piecewise,</span> <span m='1866760'>linear</span> <span
  m='1867120'>functions--</span> <span m='1869790'>the</span> <span
  m='1869970'>next</span> <span m='1870660'>20</span> <span
  m='1871020'>minutes</span> <span m='1871440'>are</span> <span
  m='1872070'>an</span> <span m='1872220'>attempt</span> <span
  m='1872640'>to</span> <span m='1873600'>give</span> <span
  m='1873900'>us</span> <span m='1874110'>a</span> <span
  m='1874200'>picture</span> <span m='1874920'>of</span> <span
  m='1875070'>the</span> <span m='1875220'>graph</span> <span
  m='1875850'>of</span> <span m='1876000'>a</span> <span
  m='1876090'>piecewise,</span> <span m='1876780'>linear</span> <span
  m='1877110'>function</span> <span m='1880830'>in</span> <span
  m='1881730'>say</span> <span m='1881940'>a</span> <span
  m='1882000'>function</span> <span m='1882390'>of</span> <span
  m='1882480'>two</span> <span m='1882720'>variables.</span> <span
  m='1883605'>So</span> <span m='1883860'>I</span> <span m='1884120'>have</span>
  <span m='1884520'>m</span> <span m='1884790'>equal</span> <span
  m='1885080'>to</span> <span m='1885290'>2,</span> <span m='1888790'>and</span>
  <span m='1888970'>I</span> <span m='1889060'>draw</span> <span
  m='1889360'>its</span> <span m='1889510'>graph.</span> </p><p><span
  m='1890160'>OK,</span> <span m='1890910'>help</span> <span
  m='1891130'>me</span> <span m='1891280'>to</span> <span
  m='1891400'>draw</span> <span m='1891700'>this</span> <span
  m='1891880'>graph.</span> <span m='1892340'>So</span> <span
  m='1892540'>this</span> <span m='1892780'>would</span> <span
  m='1892870'>be</span> <span m='1892960'>a</span> <span
  m='1893020'>graph</span> <span m='1893380'>of</span> <span
  m='1893530'>F</span> <span m='1894790'>of</span> <span m='1895540'>x1,</span>
  <span m='1896120'>x2,</span> <span m='1898330'>and</span> <span
  m='1898510'>it's</span> <span m='1898630'>going</span> <span
  m='1898740'>to</span> <span m='1898870'>be</span> <span
  m='1899050'>continuous</span> <span m='1899830'>and</span> <span
  m='1899950'>piecewise</span> <span m='1900520'>linear.</span> <span
  m='1901000'>So</span> <span m='1901180'>what</span> <span
  m='1901510'>does</span> <span m='1901780'>its</span> <span
  m='1901960'>graph</span> <span m='1902410'>look</span> <span
  m='1902710'>like?</span> <span m='1903550'>That's</span> <span
  m='1904510'>the</span> <span m='1904600'>question.</span> <span
  m='1905680'>What's</span> <span m='1905980'>the</span> <span
  m='1906070'>graph</span> <span m='1906490'>of</span> <span
  m='1906640'>a</span> <span m='1906720'>piecewise,</span> <span
  m='1907350'>linear</span> <span m='1908350'>function</span> <span
  m='1908800'>looks</span> <span m='1909100'>like?</span> </p><p><span
  m='1910540'>Well,</span> <span m='1911770'>it's</span> <span
  m='1911860'>got</span> <span m='1912130'>flat</span> <span
  m='1912520'>pieces</span> <span m='1915230'>in</span> <span
  m='1915440'>between</span> <span m='1916070'>the</span> <span
  m='1916670'>change</span> <span m='1917330'>from--</span> <span
  m='1920220'>I</span> <span m='1920300'>do</span> <span m='1920510'>say</span>
  <span m='1920780'>piecewise,</span> <span m='1921670'>that</span> <span
  m='1921770'>means</span> <span m='1922160'>it's</span> <span
  m='1923150'>got</span> <span m='1923330'>different</span> <span
  m='1923720'>pieces.</span> <span m='1924230'>But</span> <span
  m='1924470'>within</span> <span m='1924890'>a</span> <span
  m='1924950'>piece,</span> <span m='1926710'>it's</span> <span
  m='1927310'>linear,</span> <span m='1928850'>and</span> <span
  m='1929030'>the</span> <span m='1929120'>pieces</span> <span
  m='1931400'>with</span> <span m='1931610'>each</span> <span
  m='1931820'>other,</span> <span m='1932060'>because</span> <span
  m='1932480'>it's</span> <span m='1932660'>continuous.</span> <span
  m='1933800'>So</span> <span m='1934100'>I</span> <span
  m='1934310'>visualize,</span> <span m='1937640'>well,</span> <span
  m='1937850'>it's</span> <span m='1938030'>like</span> <span
  m='1938300'>origami.</span> <span m='1940050'>This</span> <span
  m='1940200'>is</span> <span m='1940350'>the</span> <span
  m='1940470'>theory</span> <span m='1940890'>of</span> <span
  m='1941010'>origami</span> <span m='1942850'>almost.</span> <span
  m='1944760'>So</span> <span m='1944980'>right,</span> <span
  m='1945340'>origami,</span> <span m='1945980'>you</span> <span
  m='1946120'>take</span> <span m='1946510'>a</span> <span
  m='1946630'>flat</span> <span m='1946990'>thing,</span> <span
  m='1947320'>and</span> <span m='1947440'>you</span> <span
  m='1947560'>fold</span> <span m='1947950'>it</span> <span
  m='1948670'>along</span> <span m='1949660'>straight</span> <span
  m='1950050'>folds.</span> </p><p><span m='1952580'>So</span> <span
  m='1952810'>what's</span> <span m='1953170'>different</span> <span
  m='1953530'>from</span> <span m='1953700'>origami?</span> <span
  m='1954330'>Maybe</span> <span m='1954610'>not</span> <span
  m='1954850'>much.</span> <span m='1958136'>Well,</span> <span
  m='1958600'>maybe</span> <span m='1958940'>origami</span> <span
  m='1959590'>allows</span> <span m='1960160'>more</span> <span
  m='1961560'>than</span> <span m='1961870'>we</span> <span
  m='1962080'>allow</span> <span m='1962440'>here,</span> <span
  m='1963520'>or</span> <span m='1963700'>origami</span> <span
  m='1964150'>would</span> <span m='1964330'>allow</span> <span
  m='1964660'>you</span> <span m='1964750'>to</span> <span
  m='1964840'>fold</span> <span m='1965230'>it</span> <span
  m='1965350'>up</span> <span m='1965560'>and</span> <span
  m='1965710'>over.</span> <span m='1966790'>So</span> <span
  m='1967330'>origami</span> <span m='1968080'>would</span> <span
  m='1968290'>give</span> <span m='1968500'>you</span> <span
  m='1968590'>a</span> <span m='1968680'>multi-valued</span> <span
  m='1970720'>thing,</span> <span m='1971050'>because</span> <span
  m='1972430'>it's</span> <span m='1972610'>got</span> <span
  m='1972820'>a</span> <span m='1972910'>top</span> <span m='1973330'>and</span>
  <span m='1973450'>a</span> <span m='1973540'>bottom</span> <span
  m='1974050'>and</span> <span m='1974680'>other</span> <span
  m='1974920'>folds.</span> <span m='1975880'>This</span> <span
  m='1976150'>is</span> <span m='1976330'>just</span> <span
  m='1976900'>going</span> <span m='1977290'>out</span> <span
  m='1978190'>to</span> <span m='1978400'>infinity</span> <span
  m='1979540'>in</span> <span m='1979720'>flat</span> <span
  m='1980110'>pieces,</span> <span m='1982980'>and</span> <span
  m='1983100'>the</span> <span m='1983220'>question</span> <span
  m='1983670'>will</span> <span m='1983790'>be,</span> <span
  m='1983970'>how</span> <span m='1984150'>many</span> <span
  m='1984420'>pieces?</span> </p><p><span m='1986020'>So</span> <span
  m='1986210'>let</span> <span m='1986360'>me</span> <span
  m='1986570'>ask</span> <span m='1986900'>you</span> <span
  m='1986990'>that</span> <span m='1987230'>question.</span> <span
  m='1987710'>How</span> <span m='1987920'>many</span> <span
  m='1988190'>pieces</span> <span m='1989930'>do</span> <span
  m='1990110'>I</span> <span m='1990230'>have?</span> <span
  m='1991890'>Do</span> <span m='1992290'>you</span> <span
  m='1992760'>see</span> <span m='1992970'>what</span> <span
  m='1993120'>I</span> <span m='1993180'>mean</span> <span m='1993420'>by</span>
  <span m='1993600'>a</span> <span m='1993660'>piece?</span> <span
  m='1995440'>So</span> <span m='1995700'>I'm</span> <span
  m='1995850'>thinking</span> <span m='1996180'>of</span> <span
  m='1996300'>a</span> <span m='1996360'>graph</span> <span
  m='1996870'>that</span> <span m='1997020'>has</span> <span
  m='1997680'>these</span> <span m='1997890'>flat</span> <span
  m='1998310'>pieces,</span> <span m='1999300'>and</span> <span
  m='1999450'>they're</span> <span m='2000080'>connected</span> <span
  m='2000740'>along</span> <span m='2001790'>straight</span> <span
  m='2002210'>edges.</span> <span m='2003880'>And</span> <span
  m='2004540'>those</span> <span m='2004840'>straight</span> <span
  m='2005290'>edges</span> <span m='2005890'>come</span> <span
  m='2006340'>from</span> <span m='2008150'>the</span> <span
  m='2008980'>ReLU</span> <span m='2009370'>operation.</span> </p><p><span
  m='2010870'>Well,</span> <span m='2011050'>that's</span> <span
  m='2011350'>got</span> <span m='2011530'>two</span> <span
  m='2011770'>pieces.</span> <span m='2013520'>Actually,</span> <span
  m='2013970'>we</span> <span m='2014120'>could</span> <span
  m='2014270'>do</span> <span m='2014540'>it</span> <span m='2014720'>1D.</span>
  <span m='2015290'>In</span> <span m='2015440'>1D,</span> <span
  m='2015980'>we</span> <span m='2016160'>could</span> <span
  m='2016400'>count</span> <span m='2016850'>the</span> <span
  m='2016910'>number</span> <span m='2017210'>of</span> <span
  m='2017270'>pieces</span> <span m='2017720'>pretty</span> <span
  m='2018050'>easily.</span> <span m='2019170'>So</span> <span
  m='2019850'>what</span> <span m='2020000'>would</span> <span
  m='2020150'>be</span> <span m='2020300'>a</span> <span
  m='2020360'>piecewise</span> <span m='2020960'>linear?</span> <span
  m='2021450'>Let</span> <span m='2021470'>me</span> <span
  m='2021590'>put</span> <span m='2021830'>it</span> <span
  m='2021950'>over</span> <span m='2022160'>here</span> <span
  m='2022310'>on</span> <span m='2022400'>the</span> <span
  m='2022500'>side</span> <span m='2023530'>and</span> <span
  m='2023920'>erase</span> <span m='2024290'>it</span> <span
  m='2024480'>soon.</span> <span m='2025260'>OK.</span> </p><p><span
  m='2028140'>So</span> <span m='2028380'>here's</span> <span
  m='2028760'>m</span> <span m='2028970'>equal</span> <span
  m='2029170'>1,</span> <span m='2030570'>a</span> <span
  m='2031050'>continuous,</span> <span m='2032810'>piecewise,</span> <span
  m='2034710'>linear</span> <span m='2036350'>F.</span> <span
  m='2037930'>I'll</span> <span m='2038110'>just</span> <span
  m='2038390'>draw</span> <span m='2038600'>its</span> <span
  m='2038760'>graph.</span> <span m='2040380'>So</span> <span
  m='2040800'>OK,</span> <span m='2042060'>so</span> <span
  m='2044220'>it's</span> <span m='2044460'>got</span> <span
  m='2046650'>straight</span> <span m='2047010'>pieces,</span> <span
  m='2048159'>straight</span> <span m='2048540'>pieces</span> <span
  m='2050580'>like</span> <span m='2050820'>so.</span> <span
  m='2051300'>Yeah,</span> <span m='2051639'>you've</span> <span
  m='2052250'>got</span> <span m='2052440'>the</span> <span
  m='2052590'>idea.</span> <span m='2052855'>It's</span> <span
  m='2053120'>a</span> <span m='2053250'>broken</span> <span
  m='2053670'>line</span> <span m='2054060'>type.</span> <span
  m='2054540'>Sometimes,</span> <span m='2055080'>people</span> <span
  m='2055380'>say</span> <span m='2055590'>broken</span> <span
  m='2056010'>line,</span> <span m='2056310'>but</span> <span
  m='2057300'>I'm</span> <span m='2057510'>never</span> <span
  m='2057840'>sure</span> <span m='2058219'>that's</span> <span
  m='2058620'>a</span> <span m='2059280'>good</span> <span
  m='2059460'>description</span> <span m='2060239'>of</span> <span
  m='2060420'>this.</span> </p><p><span m='2061350'>Piecewise,</span> <span
  m='2062090'>linear,</span> <span m='2062520'>continuous,</span> <span
  m='2063210'>so</span> <span m='2063690'>it's</span> <span
  m='2063810'>continuous</span> <span m='2064500'>because</span> <span
  m='2064980'>the</span> <span m='2065550'>pieces</span> <span
  m='2066060'>meet,</span> <span m='2067500'>and</span> <span
  m='2069120'>it's</span> <span m='2069540'>piecewise,</span> <span
  m='2070070'>linear,</span> <span m='2070429'>obviously.</span> <span
  m='2071900'>OK,</span> <span m='2072360'>so</span> <span
  m='2072570'>that's</span> <span m='2072870'>the</span> <span
  m='2072989'>kind</span> <span m='2073260'>of</span> <span
  m='2074340'>picture</span> <span m='2074909'>I</span> <span
  m='2075090'>have</span> <span m='2076650'>for</span> <span
  m='2076860'>a</span> <span m='2076920'>function</span> <span
  m='2077340'>of</span> <span m='2077400'>one</span> <span
  m='2077699'>variable.</span> <span m='2079460'>Now,</span> <span
  m='2080040'>my</span> <span m='2080250'>question</span> <span
  m='2080850'>is--</span> <span m='2082650'>as</span> <span
  m='2082860'>an</span> <span m='2082980'>aid</span> <span m='2083340'>to</span>
  <span m='2083550'>try</span> <span m='2083850'>to</span> <span
  m='2083969'>visualize</span> <span m='2084810'>this</span> <span
  m='2085080'>function</span> <span m='2085830'>in</span> <span
  m='2086040'>2D--</span> <span m='2087630'>is</span> <span
  m='2087989'>to</span> <span m='2089100'>see</span> <span m='2089340'>if</span>
  <span m='2089460'>we</span> <span m='2089580'>can</span> <span
  m='2089699'>count</span> <span m='2090010'>the</span> <span
  m='2090120'>pieces,</span> <span m='2091500'>see</span> <span
  m='2091739'>if</span> <span m='2091860'>we</span> <span m='2092010'>can</span>
  <span m='2092219'>count</span> <span m='2092670'>the</span> <span
  m='2092850'>pieces.</span> <span m='2093540'>Yes.</span> <span
  m='2095639'>So</span> <span m='2095820'>that's</span> <span
  m='2096150'>in</span> <span m='2096330'>the</span> <span
  m='2097620'>notes.</span> <span m='2098060'>I</span> <span
  m='2098220'>found</span> <span m='2098580'>it</span> <span
  m='2098730'>in</span> <span m='2098850'>a</span> <span
  m='2098910'>paper</span> <span m='2099390'>by</span> <span
  m='2102310'>five</span> <span m='2102730'>authors</span> <span
  m='2103570'>for</span> <span m='2103840'>a</span> <span
  m='2105790'>meeting.</span> <span m='2108946'>So</span> <span
  m='2109750'>actually,</span> <span m='2110920'>the</span> <span
  m='2111190'>whole</span> <span m='2112210'>world</span> <span
  m='2112780'>of</span> <span m='2114370'>neural</span> <span
  m='2114670'>nets,</span> <span m='2116390'>it's</span> <span
  m='2117490'>the</span> <span m='2119200'>conferences</span> <span
  m='2119980'>every</span> <span m='2120250'>couple</span> <span
  m='2120550'>of</span> <span m='2120610'>years</span> <span
  m='2121150'>that</span> <span m='2121720'>everybody</span> <span
  m='2122200'>prepares</span> <span m='2122800'>for,</span> <span
  m='2124210'>submits</span> <span m='2125350'>more</span> <span
  m='2125590'>than</span> <span m='2125710'>one</span> <span
  m='2126190'>paper.</span> </p><p><span m='2127150'>So</span> <span
  m='2127300'>it's</span> <span m='2127420'>kind</span> <span
  m='2127630'>of</span> <span m='2127720'>a</span> <span
  m='2127780'>piecewise,</span> <span m='2128350'>linear</span> <span
  m='2128710'>conference,</span> <span m='2130450'>and</span> <span
  m='2131420'>those</span> <span m='2132060'>are</span> <span
  m='2132250'>the</span> <span m='2134380'>big</span> <span
  m='2134620'>conferences.</span> <span m='2135460'>OK.</span> <span
  m='2136300'>So</span> <span m='2136510'>this</span> <span
  m='2136720'>is</span> <span m='2136870'>the</span> <span
  m='2136990'>back</span> <span m='2137290'>propagation</span> <span
  m='2138040'>section,</span> <span m='2138550'>and</span> <span
  m='2138670'>I</span> <span m='2138790'>want</span> <span m='2138970'>to</span>
  <span m='2139060'>look</span> <span m='2139330'>at</span> <span
  m='2140590'>the--</span> <span m='2142940'>OK.</span> <span
  m='2146560'>So</span> <span m='2146970'>this is a</span> <span
  m='2147180'>paper</span> <span m='2147510'>by</span> <span
  m='2147840'>Kleinberg</span> <span m='2148620'>and</span> <span
  m='2148740'>four</span> <span m='2149010'>others.</span> <span
  m='2149400'>Kleinberg,</span> <span m='2150840'>he's</span> <span
  m='2151050'>a</span> <span m='2152220'>computer</span> <span
  m='2152700'>science</span> <span m='2153090'>guy</span> <span
  m='2153340'>at</span> <span m='2153390'>Cornell.</span> <span
  m='2154530'>He</span> <span m='2154620'>was</span> <span m='2154800'>a</span>
  <span m='2154860'>PhD</span> <span m='2155530'>from</span> <span
  m='2155670'>here</span> <span m='2156090'>in</span> <span
  m='2156300'>math,</span> <span m='2156780'>and</span> <span
  m='2157080'>he's</span> <span m='2157440'>a</span> <span
  m='2158340'>very</span> <span m='2159480'>cool</span> <span
  m='2161320'>and</span> <span m='2161700'>significant</span> <span
  m='2162390'>person,</span> <span m='2164700'>not</span> <span
  m='2165030'>so</span> <span m='2165240'>much</span> <span
  m='2165630'>on</span> <span m='2165810'>neural</span> <span
  m='2166140'>networks</span> <span m='2166710'>as</span> <span
  m='2167340'>just</span> <span m='2169390'>this</span> <span
  m='2173390'>whole</span> <span m='2173600'>part</span> <span
  m='2173930'>of</span> <span m='2174050'>computer</span> <span
  m='2174530'>science.</span> <span m='2175130'>Right.</span> </p><p><span
  m='2175820'>So</span> <span m='2176150'>anyway,</span> <span
  m='2177200'>they</span> <span m='2177650'>and</span> <span
  m='2177830'>other</span> <span m='2178100'>people</span> <span
  m='2178670'>too</span> <span m='2179390'>have</span> <span
  m='2179600'>asked</span> <span m='2179900'>this</span> <span
  m='2180060'>same</span> <span m='2180470'>problem.</span> <span
  m='2183450'>Suppose</span> <span m='2183710'>I'm</span> <span
  m='2183870'>in</span> <span m='2184010'>two</span> <span
  m='2184250'>variables.</span> <span m='2188250'>So</span> <span
  m='2188910'>what</span> <span m='2189240'>are</span> <span
  m='2189270'>you</span> <span m='2189360'>imagining</span> <span
  m='2190050'>now</span> <span m='2190380'>for</span> <span
  m='2190590'>the</span> <span m='2191460'>surface,</span> <span
  m='2193830'>the</span> <span m='2194400'>graph</span> <span
  m='2195180'>of</span> <span m='2196470'>F</span> <span m='2196680'>of</span>
  <span m='2196830'>x</span> <span m='2197070'>and</span> <span
  m='2197190'>y?</span> <span m='2199200'>It</span> <span m='2199320'>has</span>
  <span m='2199530'>these</span> <span m='2199770'>lines,</span> <span
  m='2200900'>fold</span> <span m='2201360'>lines,</span> <span
  m='2203080'>right?</span> <span m='2203520'>I'm</span> <span
  m='2203890'>thinking</span> <span m='2204250'>it</span> <span
  m='2204370'>has</span> <span m='2204700'>fold</span> <span
  m='2205130'>lines.</span> </p><p><span m='2208840'>So</span> <span
  m='2209050'>I</span> <span m='2209470'>can</span> <span
  m='2209680'>start</span> <span m='2209980'>with</span> <span
  m='2210130'>a</span> <span m='2210190'>complete</span> <span
  m='2210640'>plane,</span> <span m='2211070'>and</span> <span
  m='2211210'>I</span> <span m='2211360'>fold</span> <span m='2211580'>it</span>
  <span m='2211890'>along</span> <span m='2212890'>one</span> <span
  m='2213130'>line.</span> <span m='2213520'>So</span> <span
  m='2213700'>now,</span> <span m='2214030'>it's</span> <span
  m='2214750'>like</span> <span m='2215050'>ReLU.</span> <span
  m='2215920'>It's</span> <span m='2216070'>one</span> <span
  m='2217330'>half</span> <span m='2217690'>plane</span> <span
  m='2218050'>there</span> <span m='2218830'>going</span> <span
  m='2219080'>into</span> <span m='2219280'>a</span> <span
  m='2219340'>different</span> <span m='2219730'>half</span> <span
  m='2220000'>plane</span> <span m='2220300'>there.</span> <span
  m='2220570'>Everybody</span> <span m='2220960'>with</span> <span
  m='2221170'>it?</span> <span m='2223130'>And</span> <span
  m='2223340'>now,</span> <span m='2223700'>I</span> <span
  m='2223820'>take</span> <span m='2224090'>that</span> <span
  m='2224330'>function,</span> <span m='2226430'>that</span> <span
  m='2226820'>surface</span> <span m='2228170'>which</span> <span
  m='2228470'>just</span> <span m='2228710'>has</span> <span
  m='2228950'>two</span> <span m='2229250'>parts,</span> <span
  m='2230450'>and</span> <span m='2230630'>I</span> <span m='2230870'>put</span>
  <span m='2231250'>in</span> <span m='2231380'>another</span> <span
  m='2231740'>fold.</span> </p><p><span m='2234020'>OK,</span> <span
  m='2234420'>how</span> <span m='2234540'>many</span> <span
  m='2234720'>parts</span> <span m='2235050'>have</span> <span
  m='2235140'>I</span> <span m='2235230'>got</span> <span
  m='2235470'>now?</span> <span m='2237850'>I</span> <span
  m='2237940'>think</span> <span m='2238180'>four,</span> <span
  m='2239080'>am</span> <span m='2239380'>I</span> <span
  m='2239560'>right?</span> <span m='2240450'>Four</span> <span
  m='2240960'>parts,</span> <span m='2241630'>yes,</span> <span
  m='2242440'>because</span> <span m='2243640'>this</span> <span
  m='2244090'>will</span> <span m='2244330'>be</span> <span
  m='2244570'>different</span> <span m='2244990'>from</span> <span
  m='2245200'>this,</span> <span m='2246430'>because</span> <span
  m='2246640'>it</span> <span m='2246700'>was</span> <span
  m='2246850'>folded</span> <span m='2247330'>along</span> <span
  m='2247720'>that</span> <span m='2247930'>line.</span> <span
  m='2248840'>So</span> <span m='2248980'>these</span> <span
  m='2249460'>will</span> <span m='2249550'>be</span> <span
  m='2249700'>four</span> <span m='2250060'>different</span> <span
  m='2250510'>pieces.</span> <span m='2251380'>They</span> <span
  m='2252760'>have</span> <span m='2252880'>the</span> <span
  m='2253000'>same</span> <span m='2253330'>value</span> <span
  m='2253750'>at</span> <span m='2253840'>the</span> <span
  m='2253960'>center</span> <span m='2254440'>there,</span> <span
  m='2254820'>and</span> <span m='2255970'>they</span> <span
  m='2256120'>match</span> <span m='2256540'>along</span> <span
  m='2256960'>the</span> <span m='2257200'>lines.</span> </p><p><span
  m='2259230'>So</span> <span m='2259540'>the</span> <span
  m='2259630'>number</span> <span m='2260140'>of</span> <span
  m='2260800'>flat</span> <span m='2261160'>pieces</span> <span
  m='2261730'>is</span> <span m='2261880'>four</span> <span
  m='2262300'>for</span> <span m='2262720'>this.</span> <span
  m='2263800'>So</span> <span m='2263980'>that's</span> <span
  m='2264280'>with</span> <span m='2264520'>two</span> <span
  m='2264790'>folds,</span> <span m='2265900'>and</span> <span
  m='2266020'>now</span> <span m='2266350'>I</span> <span
  m='2266710'>just</span> <span m='2266920'>want</span> <span
  m='2267100'>to</span> <span m='2267160'>ask</span> <span
  m='2267490'>you,</span> <span m='2267640'>with</span> <span
  m='2267880'>m</span> <span m='2268270'>folds</span> <span
  m='2269260'>how</span> <span m='2269410'>many</span> <span
  m='2269680'>pieces</span> <span m='2270250'>are</span> <span
  m='2270400'>there?</span> <span m='2271975'>Can</span> <span
  m='2272440'>I</span> <span m='2272520'>get</span> <span m='2272700'>up</span>
  <span m='2272820'>to</span> <span m='2272940'>three</span> <span
  m='2273380'>folds?</span> <span m='2276330'>So</span> <span
  m='2276540'>I'm</span> <span m='2276690'>going</span> <span
  m='2276840'>to</span> <span m='2276900'>look</span> <span
  m='2277170'>for</span> <span m='2277320'>the</span> <span
  m='2277440'>number</span> <span m='2277950'>of</span> <span
  m='2278070'>folds.</span> </p><p><span m='2279390'>So</span> <span
  m='2279570'>let</span> <span m='2279740'>me</span> <span
  m='2280110'>just</span> <span m='2280350'>use</span> <span
  m='2280660'>a</span> <span m='2281610'>notation,</span> <span
  m='2282360'>maybe</span> <span m='2282750'>r.</span> <span
  m='2284690'>r</span> <span m='2285170'>is</span> <span m='2285360'>the</span>
  <span m='2286080'>number</span> <span m='2287070'>of</span> <span
  m='2287160'>flat</span> <span m='2287520'>pieces,</span> <span
  m='2293020'>and</span> <span m='2293350'>m</span> <span m='2294640'>is</span>
  <span m='2295030'>the</span> <span m='2295120'>dimension</span> <span
  m='2300500'>of</span> <span m='2300750'>x.</span> <span m='2302910'>In</span>
  <span m='2303080'>my</span> <span m='2303290'>picture,</span> <span
  m='2303770'>it's</span> <span m='2303950'>two,</span> <span
  m='2305130'>and</span> <span m='2305822'>N</span> <span m='2307220'>is</span>
  <span m='2307490'>the</span> <span m='2308570'>number</span> <span
  m='2309050'>of</span> <span m='2309200'>folds.</span> </p><p><span
  m='2313750'>So</span> <span m='2313900'>let</span> <span m='2314020'>me</span>
  <span m='2314170'>say</span> <span m='2314380'>it</span> <span
  m='2314470'>again.</span> <span m='2315340'>I'm</span> <span
  m='2315430'>taking</span> <span m='2315880'>a</span> <span
  m='2315940'>plane.</span> <span m='2320200'>I'll</span> <span
  m='2320380'>fold</span> <span m='2320810'>that</span> <span
  m='2321700'>plane--</span> <span m='2322240'>because</span> <span
  m='2323290'>the</span> <span m='2323500'>dimension</span> <span
  m='2324010'>was</span> <span m='2324250'>two--</span> <span
  m='2325060'>I'll</span> <span m='2326020'>fold</span> <span
  m='2326450'>it</span> <span m='2326630'>N</span> <span
  m='2326890'>times.</span> <span m='2331260'>How</span> <span
  m='2331440'>many</span> <span m='2331740'>pieces?</span> <span
  m='2332860'>How</span> <span m='2332910'>many</span> <span
  m='2333180'>flat</span> <span m='2333540'>pieces?</span> </p><p><span
  m='2346190'>This</span> <span m='2346430'>would</span> <span
  m='2346550'>be</span> <span m='2346740'>a</span> <span
  m='2348280'>central</span> <span m='2348800'>step</span> <span
  m='2349220'>in</span> <span m='2349370'>understanding</span> <span
  m='2350150'>how</span> <span m='2350420'>close</span> <span
  m='2351650'>the</span> <span m='2351890'>function--</span> <span
  m='2353750'>what</span> <span m='2354050'>freedom</span> <span
  m='2354500'>you</span> <span m='2354620'>have</span> <span
  m='2354920'>in</span> <span m='2355010'>the</span> <span
  m='2355100'>function</span> <span m='2355580'>F.</span> <span
  m='2356720'>For</span> <span m='2356870'>example,</span> <span
  m='2358730'>can</span> <span m='2359090'>you</span> <span
  m='2359270'>approximate</span> <span m='2360110'>any</span> <span
  m='2360530'>continuous</span> <span m='2361310'>function</span> <span
  m='2362850'>by</span> <span m='2363630'>one</span> <span m='2363930'>of</span>
  <span m='2363990'>these</span> <span m='2364350'>functions</span> <span
  m='2364980'>F</span> <span m='2365430'>by</span> <span
  m='2365670'>taking</span> <span m='2366090'>enough</span> <span
  m='2366330'>folds?</span> <span m='2367910'>Seems</span> <span
  m='2368270'>like</span> <span m='2368690'>the</span> <span
  m='2368840'>answer</span> <span m='2369170'>should</span> <span
  m='2369380'>be</span> <span m='2369530'>yes,</span> <span
  m='2369860'>and</span> <span m='2370010'>it</span> <span m='2370160'>is</span>
  <span m='2370430'>yes.</span> <span m='2374020'>For</span> <span
  m='2374270'>pure</span> <span m='2374540'>math,</span> <span
  m='2375470'>that's</span> <span m='2375800'>one</span> <span
  m='2376130'>question.</span> <span m='2378380'>Is</span> <span
  m='2378650'>this</span> <span m='2378920'>class</span> <span
  m='2379370'>of</span> <span m='2379460'>functions</span> <span
  m='2380090'>universal?</span> </p><p><span m='2381830'>So</span> <span
  m='2382160'>the</span> <span m='2382340'>universality</span> <span
  m='2383570'>theorem</span> <span m='2384020'>would</span> <span
  m='2384230'>be</span> <span m='2384410'>to</span> <span m='2384530'>say</span>
  <span m='2385010'>that</span> <span m='2385820'>any</span> <span
  m='2387590'>function--</span> <span m='2389060'>sine</span> <span
  m='2389480'>x,</span> <span m='2389780'>whatever--</span> <span
  m='2391130'>could</span> <span m='2391400'>be</span> <span
  m='2392090'>approximated</span> <span m='2393680'>as</span> <span
  m='2393800'>close</span> <span m='2394160'>as</span> <span
  m='2394280'>you</span> <span m='2394400'>like</span> <span
  m='2394790'>by</span> <span m='2395960'>one</span> <span m='2396230'>of</span>
  <span m='2396290'>these</span> <span m='2396620'>guys</span> <span
  m='2397190'>with</span> <span m='2397730'>enough</span> <span
  m='2398060'>folds.</span> <span m='2399380'>And</span> <span
  m='2399560'>over</span> <span m='2399800'>here,</span> <span
  m='2400370'>we're</span> <span m='2401390'>kind</span> <span
  m='2401600'>of</span> <span m='2401660'>making</span> <span
  m='2402080'>it</span> <span m='2402200'>more</span> <span
  m='2404170'>numerical.</span> <span m='2405010'>We're</span> <span
  m='2405250'>going</span> <span m='2405370'>to</span> <span
  m='2405550'>count</span> <span m='2405970'>the</span> <span
  m='2406120'>number</span> <span m='2406420'>of</span> <span
  m='2406480'>pieces</span> <span m='2407570'>just</span> <span
  m='2407860'>to</span> <span m='2408010'>see</span> <span
  m='2408430'>how</span> <span m='2408790'>quickly</span> <span
  m='2409330'>do</span> <span m='2409450'>they</span> <span
  m='2409660'>grow.</span> </p><p><span m='2410480'>So</span> <span
  m='2410740'>what</span> <span m='2410980'>happens</span> <span
  m='2411400'>here?</span> <span m='2412490'>So</span> <span
  m='2412600'>I</span> <span m='2412690'>have</span> <span
  m='2412900'>four</span> <span m='2413430'>folds.</span> <span
  m='2414760'>Right</span> <span m='2415000'>now,</span> <span
  m='2415300'>I</span> <span m='2415420'>have</span> <span m='2416590'>N</span>
  <span m='2416770'>equal</span> <span m='2417070'>2.</span> <span
  m='2418660'>m</span> <span m='2418940'>is</span> <span m='2419140'>2</span>
  <span m='2419500'>here</span> <span m='2419770'>in</span> <span
  m='2420790'>this</span> <span m='2421000'>picture.</span> <span
  m='2423080'>And</span> <span m='2423190'>I'm</span> <span
  m='2423340'>trying</span> <span m='2423670'>to</span> <span
  m='2423760'>draw</span> <span m='2424060'>this</span> <span
  m='2424210'>surface,</span> <span m='2424780'>in</span> <span
  m='2424900'>here</span> <span m='2425210'>I've</span> <span
  m='2425320'>put</span> <span m='2425560'>in</span> <span m='2426250'>2.</span>
  </p><p><span m='2427030'>Did</span> <span m='2427240'>I</span> <span
  m='2427360'>take</span> <span m='2427660'>N?</span> <span
  m='2428050'>Yeah,</span> <span m='2428650'>two</span> <span
  m='2428890'>folds,</span> <span m='2430780'>and</span> <span
  m='2430900'>now</span> <span m='2431140'>I'm</span> <span
  m='2431320'>going</span> <span m='2431430'>to</span> <span
  m='2431560'>go</span> <span m='2431740'>up</span> <span m='2431890'>to</span>
  <span m='2432070'>three</span> <span m='2432430'>folds.</span> <span
  m='2434030'>OK.</span> <span m='2434720'>So</span> <span
  m='2434890'>let</span> <span m='2435040'>me</span> <span
  m='2435220'>fold</span> <span m='2435570'>it</span> <span
  m='2435700'>along</span> <span m='2436060'>that</span> <span
  m='2436300'>line.</span> <span m='2437890'>How</span> <span
  m='2438070'>many</span> <span m='2438310'>pieces</span> <span
  m='2438790'>of</span> <span m='2438940'>I</span> <span m='2439030'>got</span>
  <span m='2439270'>now?</span> </p><p><span m='2444240'>Let's</span> <span
  m='2444440'>see,</span> <span m='2445940'>can</span> <span
  m='2446150'>I</span> <span m='2446240'>count</span> <span
  m='2446540'>those</span> <span m='2448040'>pieces?</span> <span
  m='2449600'>Is</span> <span m='2449820'>it</span> <span
  m='2449990'>seven?</span> <span m='2452360'>So</span> <span
  m='2452540'>what</span> <span m='2452780'>is</span> <span m='2452950'>a</span>
  <span m='2453010'>formula?</span> <span m='2454340'>What</span> <span
  m='2454520'>if</span> <span m='2454670'>I</span> <span m='2454760'>do</span>
  <span m='2454970'>another</span> <span m='2455330'>fold?</span> <span
  m='2459890'>Yeah,</span> <span m='2460120'>let's</span> <span
  m='2460390'>pretend</span> <span m='2460810'>we</span> <span
  m='2460960'>do</span> <span m='2461110'>another</span> <span
  m='2461470'>fold.</span> <span m='2461910'>Yeah?</span> </p><p><span
  m='2462630'>AUDIENCE:</span> <span m='2462705'>[INAUDIBLE]</span> </p><p><span
  m='2464260'>GILBERT STRANG:</span> <span m='2464500'>Uh,</span> <span
  m='2464740'>yeah.</span> <span m='2466600'>Well,</span> <span
  m='2468850'>maybe</span> <span m='2469150'>that's</span> <span
  m='2469420'>going</span> <span m='2469620'>to</span> <span
  m='2469660'>be</span> <span m='2469840'>it.</span> <span
  m='2472580'>It's</span> <span m='2472760'>a</span> <span
  m='2472820'>kind</span> <span m='2473030'>of</span> <span
  m='2473090'>nice</span> <span m='2473480'>question,</span> <span
  m='2473990'>because</span> <span m='2474290'>it</span> <span
  m='2474560'>asks</span> <span m='2475020'>you to</span> <span
  m='2475130'>visualize</span> <span m='2475820'>this</span> <span
  m='2476060'>thing.</span> <span m='2477040'>OK.</span> <span
  m='2480290'>So</span> <span m='2480500'>what</span> <span
  m='2480740'>happened?</span> <span m='2482030'>How</span> <span
  m='2482180'>many</span> <span m='2482450'>of</span> <span
  m='2482540'>those</span> <span m='2482900'>lines</span> <span
  m='2483590'>will</span> <span m='2483800'>be--</span> <span
  m='2484250'>if</span> <span m='2484460'>I</span> <span m='2485120'>put</span>
  <span m='2485390'>in</span> <span m='2485540'>a</span> <span
  m='2485600'>fourth</span> <span m='2485960'>line--</span> <span
  m='2487190'>how</span> <span m='2487370'>many?</span> <span
  m='2489040'>Yeah,</span> <span m='2489480'>how</span> <span
  m='2489630'>many</span> <span m='2491370'>new</span> <span
  m='2491580'>folds</span> <span m='2492090'>do</span> <span
  m='2492240'>I</span> <span m='2492390'>create?</span> </p><p><span
  m='2493300'>That's</span> <span m='2493590'>kind</span> <span
  m='2493830'>of</span> <span m='2493890'>the</span> <span
  m='2494010'>question,</span> <span m='2494530'>and</span> <span
  m='2494670'>I'm</span> <span m='2494850'>assuming</span> <span
  m='2495270'>that</span> <span m='2495450'>fourth</span> <span
  m='2495840'>line</span> <span m='2497010'>doesn't</span> <span
  m='2497430'>go</span> <span m='2497700'>through</span> <span
  m='2498060'>any</span> <span m='2498300'>of</span> <span
  m='2498390'>these</span> <span m='2498630'>points.</span> <span
  m='2499110'>It's</span> <span m='2499250'>sort</span> <span
  m='2499500'>of</span> <span m='2499650'>in</span> <span
  m='2499830'>general</span> <span m='2500340'>position.</span> <span
  m='2503660'>So</span> <span m='2503870'>I</span> <span m='2503960'>put</span>
  <span m='2504170'>it</span> <span m='2504200'>in</span> <span
  m='2504320'>a</span> <span m='2504380'>fourth</span> <span
  m='2504710'>line,</span> <span m='2505530'>da-da-da-da,</span> <span
  m='2506420'>there</span> <span m='2506690'>it</span> <span
  m='2506780'>is.</span> <span m='2507650'>OK,</span> <span
  m='2508130'>so</span> <span m='2508370'>what</span> <span
  m='2508580'>happened</span> <span m='2508940'>here?</span> <span
  m='2510620'>How</span> <span m='2510740'>many</span> <span
  m='2511040'>new</span> <span m='2511280'>ones</span> <span
  m='2511610'>did</span> <span m='2511820'>it</span> <span
  m='2511940'>create?</span> </p><p><span m='2513890'>How</span> <span
  m='2514010'>many</span> <span m='2514280'>new</span> <span
  m='2514520'>ones</span> <span m='2514790'>did</span> <span
  m='2514970'>it</span> <span m='2515060'>create?</span> <span
  m='2518690'>Let</span> <span m='2518810'>me</span> <span
  m='2519380'>make</span> <span m='2519620'>that</span> <span
  m='2519830'>one</span> <span m='2520040'>green,</span> <span
  m='2520610'>because</span> <span m='2520840'>I'm</span> <span
  m='2521390'>distinguishing</span> <span m='2522350'>that's</span> <span
  m='2522710'>the</span> <span m='2522860'>guy</span> <span
  m='2523190'>that's</span> <span m='2523460'>added</span> <span
  m='2524750'>after</span> <span m='2525170'>the</span> <span
  m='2525290'>original.</span> <span m='2526580'>We</span> <span
  m='2526730'>had</span> <span m='2526970'>seven.</span> <span
  m='2527660'>We</span> <span m='2527840'>had</span> <span
  m='2527990'>seven</span> <span m='2528380'>pieces,</span> <span
  m='2531470'>and</span> <span m='2531620'>now</span> <span
  m='2533000'>we've</span> <span m='2533150'>got</span> <span
  m='2533330'>more.</span> <span m='2534860'>Was</span> <span
  m='2535100'>it</span> <span m='2535220'>seven?</span> </p><p><span
  m='2535580'>It</span> <span m='2535670'>was,</span> <span
  m='2536030'>wasn't</span> <span m='2536300'>it?</span> <span
  m='2536390'>One,</span> <span m='2536852'>two,</span> <span
  m='2537314'>three,</span> <span m='2537776'>four,</span> <span
  m='2538238'>five,</span> <span m='2538700'>six,</span> <span
  m='2539162'>seven,</span> <span m='2539930'>but</span> <span
  m='2540110'>now</span> <span m='2540350'>how</span> <span
  m='2540530'>many</span> <span m='2540800'>pieces</span> <span
  m='2541280'>have</span> <span m='2541420'>I</span> <span
  m='2541550'>got?</span> <span m='2542090'>Or</span> <span
  m='2542450'>how</span> <span m='2542630'>many</span> <span
  m='2543770'>pieces</span> <span m='2544440'>did</span> <span
  m='2544640'>this</span> <span m='2547710'>new</span> <span
  m='2547980'>line</span> <span m='2548400'>create?</span> <span
  m='2550160'>We</span> <span m='2550350'>want</span> <span
  m='2550560'>to</span> <span m='2550620'>build</span> <span
  m='2551010'>it</span> <span m='2551160'>up,</span> <span
  m='2551390'>use</span> <span m='2551610'>a</span> <span
  m='2551700'>recursion.</span> <span m='2552750'>How</span> <span
  m='2552870'>many</span> <span m='2553140'>pieces</span> <span
  m='2553650'>did</span> <span m='2553750'>this</span> <span
  m='2554010'>new--</span> <span m='2555150'>well,</span> <span
  m='2555810'>this</span> <span m='2556410'>new</span> <span
  m='2556710'>line</span> <span m='2558540'>created</span> <span
  m='2558930'>one</span> <span m='2559140'>new</span> <span
  m='2559320'>piece</span> <span m='2559650'>there.</span> <span
  m='2559920'>Right?</span> <span m='2560910'>One</span> <span
  m='2561120'>new</span> <span m='2561270'>piece</span> <span
  m='2561630'>there,</span> <span m='2562470'>one</span> <span
  m='2562650'>new</span> <span m='2562800'>piece</span> <span
  m='2563130'>there,</span> <span m='2563760'>one</span> <span
  m='2563940'>new</span> <span m='2564090'>piece</span> <span
  m='2564450'>there,</span> <span m='2566380'>so</span> <span
  m='2566620'>there</span> <span m='2566770'>are</span> <span
  m='2566830'>four</span> <span m='2567190'>new</span> <span
  m='2567370'>pieces.</span> <span m='2570050'>OK.</span> </p><p><span
  m='2572410'>Yes,</span> <span m='2573100'>so</span> <span
  m='2573370'>there's</span> <span m='2573550'>some</span> <span
  m='2573790'>formula</span> <span m='2575210'>that's</span> <span
  m='2575490'>going</span> <span m='2575640'>to</span> <span
  m='2575890'>tell</span> <span m='2576220'>us</span> <span
  m='2576400'>that,</span> <span m='2576710'>and</span> <span
  m='2576820'>now</span> <span m='2577660'>what</span> <span
  m='2577960'>would</span> <span m='2578140'>the</span> <span
  m='2578230'>next</span> <span m='2578590'>one</span> <span
  m='2578800'>create?</span> <span m='2579430'>Well,</span> <span
  m='2580570'>now</span> <span m='2580810'>I</span> <span
  m='2580930'>have</span> <span m='2581230'>one,</span> <span
  m='2581430'>two,</span> <span m='2581710'>three,</span> <span
  m='2582400'>four</span> <span m='2582820'>lines.</span> <span
  m='2583870'>So</span> <span m='2584110'>now,</span> <span
  m='2584440'>I'm</span> <span m='2584590'>going</span> <span
  m='2584710'>to</span> <span m='2584830'>put</span> <span
  m='2585040'>through</span> <span m='2585250'>a</span> <span
  m='2585340'>fifth</span> <span m='2585910'>line,</span> <span
  m='2586870'>and</span> <span m='2586990'>that</span> <span
  m='2587170'>will</span> <span m='2587350'>create</span> <span
  m='2587830'>a</span> <span m='2587890'>whole</span> <span
  m='2588310'>bunch</span> <span m='2588670'>of</span> <span
  m='2588730'>pieces.</span> <span m='2589300'>I'm</span> <span
  m='2589570'>losing</span> <span m='2591760'>the</span> <span
  m='2591880'>thread</span> <span m='2592210'>of</span> <span
  m='2592330'>this</span> <span m='2592840'>argument,</span> <span
  m='2593830'>but</span> <span m='2594040'>you're</span> <span
  m='2594370'>onto</span> <span m='2594790'>it.</span> <span
  m='2594970'>Right?</span> <span m='2596410'>Yeah,</span> <span
  m='2596970'>so</span> <span m='2598300'>any</span> <span
  m='2599050'>suggestions?</span> <span m='2599800'>Yeah.</span> </p><p><span
  m='2600860'>AUDIENCE:</span> <span m='2600940'>Yeah,</span> <span
  m='2601020'>I</span> <span m='2601330'>think</span> <span
  m='2601540'>you</span> <span m='2601945'>add</span> <span
  m='2602200'>essentially</span> <span m='2602680'>the</span> <span
  m='2602800'>number</span> <span m='2603250'>of</span> <span
  m='2603580'>lines</span> <span m='2603910'>that</span> <span
  m='2604030'>you</span> <span m='2604120'>have</span> <span
  m='2604420'>each</span> <span m='2604790'>time you</span> <span
  m='2605160'>add</span> <span m='2605440'>a line</span> <span
  m='2605906'>at</span> <span m='2606372'>most.</span> </p><p><span
  m='2606840'>GILBERT STRANG:</span> <span m='2607012'>OK.</span> <span
  m='2607960'>Yes.</span> <span m='2610230'>That's</span> <span
  m='2610630'>right.</span> <span m='2610930'>So</span> <span
  m='2611170'>there</span> <span m='2611250'>is</span> <span
  m='2611470'>a</span> <span m='2611530'>recursion</span> <span
  m='2612220'>formula</span> <span m='2612640'>that</span> <span
  m='2612820'>I</span> <span m='2612910'>want</span> <span m='2613120'>to</span>
  <span m='2613210'>know,</span> <span m='2614290'>and</span> <span
  m='2614500'>I</span> <span m='2614980'>learned</span> <span
  m='2615400'>it</span> <span m='2615550'>from</span> <span
  m='2615820'>Kleinberg's</span> <span m='2616420'>paper.</span> <span
  m='2619820'>And</span> <span m='2619940'>then</span> <span
  m='2620810'>we</span> <span m='2620930'>have</span> <span
  m='2621110'>an</span> <span m='2621230'>addition</span> <span
  m='2621740'>to</span> <span m='2621860'>do,</span> <span m='2622210'>so</span>
  <span m='2622400'>the</span> <span m='2622490'>recursion</span> <span
  m='2623060'>will</span> <span m='2623240'>tell</span> <span
  m='2623450'>me</span> <span m='2623990'>how</span> <span
  m='2624140'>much</span> <span m='2624560'>it</span> <span
  m='2624710'>goes</span> <span m='2625010'>up</span> <span
  m='2625970'>with</span> <span m='2626210'>each</span> <span
  m='2626480'>new</span> <span m='2626720'>function,</span> <span
  m='2627830'>and</span> <span m='2627980'>then</span> <span
  m='2628250'>we</span> <span m='2628400'>have</span> <span
  m='2628580'>to</span> <span m='2628700'>add.</span> <span
  m='2629330'>OK.</span> <span m='2629960'>So</span> <span
  m='2630140'>the</span> <span m='2630260'>recursion</span> <span
  m='2630890'>formula,</span> <span m='2631250'>let</span> <span
  m='2631370'>me</span> <span m='2631520'>write</span> <span
  m='2631760'>that</span> <span m='2631970'>down.</span> </p><p><span
  m='2636520'>So</span> <span m='2637830'>this</span> <span
  m='2638040'>is</span> <span m='2638250'>r</span> <span m='2638820'>of</span>
  <span m='2640260'>N</span> <span m='2640600'>and</span> <span
  m='2640940'>m</span> <span m='2643200'>that</span> <span
  m='2643680'>I'd</span> <span m='2643860'>like</span> <span
  m='2644070'>to</span> <span m='2644160'>find</span> <span m='2644490'>a</span>
  <span m='2644550'>formula</span> <span m='2645000'>for.</span> <span
  m='2646030'>It's</span> <span m='2646140'>the</span> <span
  m='2646260'>number</span> <span m='2646740'>of</span> <span
  m='2646890'>flat</span> <span m='2647280'>pieces</span> <span
  m='2648540'>with</span> <span m='2649980'>an</span> <span m='2650250'>m</span>
  <span m='2650520'>dimensional</span> <span m='2651120'>surface--</span> <span
  m='2652260'>well,</span> <span m='2652530'>we're</span> <span
  m='2652680'>taking</span> <span m='2653070'>m</span> <span
  m='2653250'>to</span> <span m='2653340'>be</span> <span m='2653520'>2--</span>
  <span m='2654510'>and</span> <span m='2655290'>N</span> <span
  m='2655770'>folds.</span> <span m='2658790'>So</span> <span
  m='2660360'>N</span> <span m='2660720'>equal</span> <span
  m='2660960'>1,</span> <span m='2661500'>2,</span> <span m='2661980'>3.</span>
  <span m='2662340'>Let's</span> <span m='2662850'>write</span> <span
  m='2663120'>down</span> <span m='2664290'>the</span> <span
  m='2664410'>numbers</span> <span m='2664830'>we</span> <span
  m='2665010'>know.</span> </p><p><span m='2665982'>With</span> <span
  m='2666470'>one</span> <span m='2666750'>fold,</span> <span
  m='2667210'>how</span> <span m='2667320'>many</span> <span
  m='2667530'>pieces?</span> <span m='2669630'>Two,</span> <span
  m='2670230'>good,</span> <span m='2671820'>so</span> <span
  m='2672030'>far</span> <span m='2672270'>so</span> <span
  m='2672450'>good.</span> <span m='2675760'>With</span> <span
  m='2675940'>one</span> <span m='2676210'>fold,</span> <span
  m='2676450'>there</span> <span m='2676630'>were</span> <span
  m='2676750'>two</span> <span m='2677050'>pieces.</span> <span
  m='2678940'>So</span> <span m='2679150'>this</span> <span
  m='2679420'>is</span> <span m='2679600'>the</span> <span
  m='2679720'>count</span> <span m='2680210'>r,</span> <span
  m='2682120'>and</span> <span m='2682570'>then</span> <span
  m='2682840'>with</span> <span m='2683080'>two</span> <span
  m='2683560'>folds,</span> <span m='2684270'>how</span> <span
  m='2684460'>many?</span> <span m='2684640'>Oh,</span> <span
  m='2685090'>we've</span> <span m='2685420'>gone</span> <span
  m='2685690'>past</span> <span m='2686080'>that</span> <span
  m='2686350'>point.</span> <span m='2686740'>So</span> <span
  m='2687730'>can</span> <span m='2687970'>we</span> <span
  m='2688060'>get</span> <span m='2688240'>back</span> <span
  m='2688540'>to</span> <span m='2688660'>just</span> <span
  m='2689080'>those</span> <span m='2689590'>two?</span> <span
  m='2690130'>Was</span> <span m='2690400'>it</span> <span
  m='2690490'>four?</span> </p><p><span m='2691280'>AUDIENCE:</span> <span
  m='2691465'>Yes.</span> </p><p><span m='2692020'>GILBERT STRANG:</span> <span
  m='2692215'>OK,</span> <span m='2692410'>thanks.</span> <span
  m='2695050'>Now,</span> <span m='2695380'>when</span> <span
  m='2695620'>I</span> <span m='2695740'>put</span> <span m='2696010'>in</span>
  <span m='2696190'>that</span> <span m='2696460'>third</span> <span
  m='2697150'>fold,</span> <span m='2697810'>how</span> <span
  m='2697990'>many</span> <span m='2698290'>did</span> <span
  m='2698530'>I</span> <span m='2698650'>have</span> <span
  m='2699790'>without</span> <span m='2700210'>the</span> <span
  m='2700360'>green</span> <span m='2700750'>line</span> <span
  m='2701110'>yet?</span> <span m='2702550'>Seven,</span> <span
  m='2703090'>was</span> <span m='2703300'>it</span> <span
  m='2703420'>seven?</span> <span m='2706180'>And</span> <span
  m='2708340'>when</span> <span m='2708490'>the</span> <span
  m='2708610'>fourth</span> <span m='2708970'>one</span> <span
  m='2709370'>went</span> <span m='2709750'>in,</span> <span
  m='2710050'>that</span> <span m='2711160'>green</span> <span
  m='2711520'>one,</span> <span m='2711750'>how</span> <span
  m='2711850'>many</span> <span m='2712060'>have</span> <span
  m='2712180'>I</span> <span m='2712300'>got</span> <span m='2712570'>in</span>
  <span m='2712690'>this</span> <span m='2712900'>picture?</span> <span
  m='2715990'>So</span> <span m='2716530'>the</span> <span
  m='2716950'>question</span> <span m='2717310'>is</span> <span
  m='2717400'>how</span> <span m='2717520'>many</span> <span
  m='2717790'>new</span> <span m='2718000'>ones</span> <span
  m='2718270'>did</span> <span m='2718480'>I</span> <span
  m='2718600'>create,</span> <span m='2719110'>I</span> <span
  m='2719230'>guess.</span> <span m='2719860'>So</span> <span
  m='2720100'>that</span> <span m='2721210'>line</span> <span
  m='2721720'>got</span> <span m='2721960'>chopped</span> <span
  m='2722440'>into</span> <span m='2722800'>that</span> <span
  m='2723130'>piece,</span> <span m='2723580'>that</span> <span
  m='2723880'>piece,</span> <span m='2724270'>that</span> <span
  m='2724570'>piece,</span> <span m='2724930'>that</span> <span
  m='2725200'>piece,</span> <span m='2725470'>four</span> <span
  m='2725740'>pieces</span> <span m='2726580'>for</span> <span
  m='2726730'>the</span> <span m='2726850'>new</span> <span
  m='2727090'>line.</span> </p><p><span m='2727930'>Four</span> <span
  m='2728230'>pieces</span> <span m='2728650'>for</span> <span
  m='2728800'>the</span> <span m='2728920'>new</span> <span
  m='2729130'>line,</span> <span m='2730000'>and</span> <span
  m='2730240'>then</span> <span m='2730870'>each</span> <span
  m='2731140'>of</span> <span m='2731230'>those</span> <span
  m='2731500'>pieces</span> <span m='2732400'>like</span> <span
  m='2734320'>added</span> <span m='2735940'>a</span> <span
  m='2736000'>flat</span> <span m='2736360'>bit.</span> <span
  m='2736720'>Because</span> <span m='2737590'>that</span> <span
  m='2737860'>piece</span> <span m='2739090'>from</span> <span
  m='2739270'>here</span> <span m='2739480'>to</span> <span
  m='2739600'>here</span> <span m='2740350'>separated</span> <span
  m='2741280'>these</span> <span m='2741700'>two</span> <span
  m='2742060'>which</span> <span m='2742330'>were</span> <span
  m='2742570'>previously</span> <span m='2743260'>just</span> <span
  m='2743470'>one</span> <span m='2743770'>piece,</span> <span
  m='2744160'>one</span> <span m='2744430'>flat</span> <span
  m='2744760'>piece.</span> <span m='2745770'>I</span> <span
  m='2745930'>folded</span> <span m='2746500'>on</span> <span
  m='2746650'>that</span> <span m='2746830'>line.</span> <span
  m='2747400'>I</span> <span m='2747490'>folded</span> <span
  m='2747970'>on</span> <span m='2748120'>this.</span> <span
  m='2748420'>I</span> <span m='2748540'>folded</span> <span
  m='2748900'>there.</span> <span m='2749380'>I</span> <span
  m='2749530'>think</span> <span m='2750220'>it</span> <span
  m='2750310'>went</span> <span m='2750580'>up</span> <span
  m='2750730'>by</span> <span m='2750940'>4</span> <span m='2751300'>to</span>
  <span m='2751490'>11.</span> </p><p><span m='2755510'>So</span> <span
  m='2755720'>now,</span> <span m='2755960'>we</span> <span
  m='2756080'>just</span> <span m='2756260'>have</span> <span
  m='2756470'>to</span> <span m='2756590'>guess</span> <span
  m='2756910'>a</span> <span m='2756980'>formula</span> <span
  m='2758090'>that</span> <span m='2759740'>matches</span> <span
  m='2760190'>those</span> <span m='2760550'>numbers,</span> <span
  m='2761720'>and</span> <span m='2761900'>then</span> <span
  m='2762080'>of</span> <span m='2762200'>course,</span> <span
  m='2762500'>we</span> <span m='2762680'>really</span> <span
  m='2762950'>should</span> <span m='2764090'>guess</span> <span
  m='2764420'>it</span> <span m='2764900'>for</span> <span
  m='2765110'>any</span> <span m='2765440'>m</span> <span m='2765830'>and</span>
  <span m='2765920'>any</span> <span m='2766250'>N.</span> <span
  m='2769490'>And</span> <span m='2769940'>I'll</span> <span
  m='2770180'>write</span> <span m='2770450'>down</span> <span
  m='2770810'>the</span> <span m='2770990'>formula</span> <span
  m='2771590'>that</span> <span m='2771800'>they</span> <span
  m='2772970'>found.</span> <span m='2776340'>It</span> <span
  m='2776990'>involves</span> <span m='2777760'>binomial</span> <span
  m='2778450'>numbers.</span> <span m='2779410'>Everything</span> <span
  m='2780400'>in</span> <span m='2780490'>the</span> <span
  m='2780580'>world</span> <span m='2780970'>involves</span> <span
  m='2782080'>binomial</span> <span m='2782800'>numbers,</span> <span
  m='2784450'>because</span> <span m='2784660'>they</span> <span
  m='2784810'>satisfy</span> <span m='2785410'>every</span> <span
  m='2786580'>identity</span> <span m='2787150'>you</span> <span
  m='2787330'>could</span> <span m='2788020'>think</span> <span
  m='2788410'>of.</span> </p><p><span m='2794060'>So</span> <span
  m='2794330'>here's</span> <span m='2794660'>their</span> <span
  m='2794810'>formula.</span> <span m='2798920'>r</span> <span
  m='2799430'>with</span> <span m='2799670'>N</span> <span
  m='2800090'>folds,</span> <span m='2801350'>and</span> <span
  m='2801560'>we're</span> <span m='2801740'>in</span> <span
  m='2801980'>m</span> <span m='2802280'>dimensions.</span> <span
  m='2803180'>So</span> <span m='2803270'>we've</span> <span
  m='2803580'>really</span> <span m='2804320'>in</span> <span
  m='2804440'>our</span> <span m='2804590'>thinking</span> <span
  m='2805010'>had</span> <span m='2805340'>m</span> <span
  m='2805520'>equal</span> <span m='2805830'>to</span> <span
  m='2806040'>2,</span> <span m='2806300'>but</span> <span m='2807520'>we</span>
  <span m='2808090'>should</span> <span m='2809660'>grow</span> <span
  m='2810440'>up</span> <span m='2810650'>and</span> <span
  m='2811460'>get</span> <span m='2811880'>m</span> <span m='2812150'>to</span>
  <span m='2812240'>be</span> <span m='2812450'>five</span> <span
  m='2812810'>dimensional.</span> <span m='2813470'>So</span> <span
  m='2813650'>we</span> <span m='2813740'>have</span> <span m='2813860'>a</span>
  <span m='2813920'>five</span> <span m='2814250'>dimensional--</span> <span
  m='2815540'>let's</span> <span m='2815780'>not</span> <span
  m='2816530'>think</span> <span m='2816830'>about</span> <span
  m='2817070'>that.</span> <span m='2817700'>OK.</span> </p><p><span
  m='2820180'>So</span> <span m='2820390'>it</span> <span
  m='2820480'>turns</span> <span m='2820840'>out</span> <span
  m='2821170'>it's</span> <span m='2821710'>binomial</span> <span
  m='2822400'>numbers--</span> <span m='2823030'>N 0,</span> <span m='2825910'>N
  1,</span> <span m='2828740'>up</span> <span m='2828970'>to</span> <span
  m='2831340'>N m.</span> <span m='2836260'>So</span> <span
  m='2836980'>for</span> <span m='2837160'>m</span> <span
  m='2837370'>equals</span> <span m='2837770'>2,</span> <span
  m='2839920'>which</span> <span m='2840220'>is</span> <span
  m='2840790'>my</span> <span m='2840970'>picture,</span> <span
  m='2842270'>it's</span> <span m='2844080'>N 0</span> <span
  m='2846310'>plus</span> <span m='2847210'>N 1</span> <span
  m='2848880'>plus</span> <span m='2849220'>N 2,</span> <span
  m='2851290'>and</span> <span m='2851920'>what</span> <span
  m='2852190'>are</span> <span m='2852250'>these?</span> <span
  m='2852750'>What</span> <span m='2853150'>does</span> <span
  m='2853300'>that</span> <span m='2854020'>N 2</span> <span
  m='2854710'>mean,</span> <span m='2855130'>for</span> <span
  m='2855370'>example?</span> <span m='2857560'>That's</span> <span
  m='2857860'>a</span> <span m='2857920'>binomial</span> <span
  m='2858580'>number.</span> <span m='2861040'>I</span> <span
  m='2861130'>don't</span> <span m='2861250'>know</span> <span
  m='2861430'>if</span> <span m='2861580'>you're</span> <span
  m='2863390'>keen</span> <span m='2863750'>on</span> <span
  m='2863960'>binomial</span> <span m='2864590'>numbers.</span> <span
  m='2865640'>Some</span> <span m='2865850'>people,</span> <span
  m='2866780'>their</span> <span m='2866990'>whole</span> <span
  m='2867170'>lives</span> <span m='2867650'>go</span> <span
  m='2867920'>into</span> <span m='2868190'>binomial</span> <span
  m='2868760'>numbers.</span> </p><p><span m='2870170'>So</span> <span
  m='2870440'>it's</span> <span m='2871220'>something</span> <span
  m='2871700'>like--</span> <span m='2873290'>is</span> <span
  m='2873440'>it</span> <span m='2873530'>N</span> <span
  m='2873800'>factorial</span> <span m='2874580'>divided</span> <span
  m='2875180'>by</span> <span m='2877340'>N</span> <span
  m='2877700'>minus</span> <span m='2878150'>2</span> <span
  m='2878600'>factorial</span> <span m='2880140'>and</span> <span
  m='2880250'>2</span> <span m='2880610'>factorial?</span> <span
  m='2885590'>I</span> <span m='2885660'>think</span> <span
  m='2885900'>that's</span> <span m='2886170'>what</span> <span
  m='2886380'>that</span> <span m='2886830'>number</span> <span
  m='2887160'>means.</span> <span m='2888070'>That's</span> <span
  m='2888330'>the</span> <span m='2888390'>binomial</span> <span
  m='2889020'>number.</span> <span m='2892860'>So</span> <span
  m='2893250'>at</span> <span m='2893430'>this</span> <span
  m='2893670'>point,</span> <span m='2894000'>I'm</span> <span
  m='2894180'>hoping</span> <span m='2895110'>to</span> <span
  m='2895260'>get</span> <span m='2895470'>the</span> <span
  m='2895590'>answer</span> <span m='2896060'>seven,</span> <span
  m='2896580'>I</span> <span m='2896700'>think.</span> <span
  m='2902290'>I'm</span> <span m='2902490'>in</span> <span m='2902730'>m</span>
  <span m='2903110'>equal</span> <span m='2903270'>to--</span> <span
  m='2905200'>I've</span> <span m='2905320'>gone</span> <span
  m='2905560'>up</span> <span m='2905740'>to</span> <span m='2905920'>2.</span>
  </p><p><span m='2907690'>Yeah,</span> <span m='2908770'>so</span> <span
  m='2909040'>I</span> <span m='2909130'>think</span> <span
  m='2912100'>I've</span> <span m='2912340'>obviously</span> <span
  m='2912880'>allowed</span> <span m='2913270'>for</span> <span
  m='2914900'>three</span> <span m='2915460'>cuts,</span> <span
  m='2916510'>and</span> <span m='2917980'>the</span> <span
  m='2918220'>r,</span> <span m='2919110'>when</span> <span
  m='2919300'>we</span> <span m='2919420'>had</span> <span
  m='2919600'>just</span> <span m='2919840'>three,</span> <span
  m='2920710'>was</span> <span m='2920950'>7.</span> <span m='2926380'>So</span>
  <span m='2926620'>this</span> <span m='2926860'>is</span> <span
  m='2926950'>now</span> <span m='2927130'>I'm</span> <span
  m='2927280'>taking</span> <span m='2927640'>N</span> <span
  m='2927880'>to</span> <span m='2927970'>be</span> <span m='2928130'>3,</span>
  <span m='2929110'>and</span> <span m='2929290'>I'm</span> <span
  m='2929440'>hoping</span> <span m='2929890'>for</span> <span
  m='2932380'>answer</span> <span m='2934520'>is</span> <span
  m='2935720'>7.</span> <span m='2941370'>So</span> <span m='2941760'>I add
  these</span> <span m='2941940'>three</span> <span m='2942240'>things.</span>
  <span m='2943170'>So</span> <span m='2943380'>what</span> <span
  m='2943590'>is</span> <span m='2943830'>3,</span> <span m='2945450'>the</span>
  <span m='2945570'>binomial</span> <span m='2946170'>number</span> <span
  m='2946560'>3</span> <span m='2947520'>with</span> <span m='2947730'>2?</span>
  <span m='2948490'>I've</span> <span m='2948610'>forgotten</span> <span
  m='2949050'>how</span> <span m='2949170'>to</span> <span
  m='2949260'>say</span> <span m='2949560'>that.</span> </p><p><span
  m='2950550'>I'm</span> <span m='2950670'>ashamed</span> <span
  m='2951030'>to</span> <span m='2951180'>admit.</span> <span
  m='2951660'>3</span> <span m='2952050'>choose</span> <span
  m='2952380'>2,</span> <span m='2952670'>thanks.</span> <span
  m='2953380'>I</span> <span m='2953470'>knew</span> <span
  m='2953640'>there</span> <span m='2953730'>was</span> <span
  m='2953880'>a</span> <span m='2953940'>good</span> <span
  m='2954090'>way.</span> <span m='2954550'>So</span> <span
  m='2954630'>what</span> <span m='2954810'>is</span> <span m='2954960'>3</span>
  <span m='2955260'>choose</span> <span m='2955620'>2?</span> <span
  m='2958700'>Well,</span> <span m='2959060'>put</span> <span
  m='2959360'>in</span> <span m='2959510'>3,</span> <span m='2961500'>and</span>
  <span m='2961680'>2</span> <span m='2962040'>is</span> <span
  m='2962250'>in</span> <span m='2962400'>there</span> <span
  m='2962610'>already,</span> <span m='2963450'>so</span> <span
  m='2963840'>that'd</span> <span m='2964110'>be</span> <span
  m='2964290'>6</span> <span m='2964860'>over</span> <span m='2967230'>1</span>
  <span m='2967800'>times</span> <span m='2968190'>2.</span> <span
  m='2968520'>This</span> <span m='2968700'>would</span> <span
  m='2968880'>be</span> <span m='2969120'>3.</span> <span
  m='2969690'>Would</span> <span m='2969810'>that</span> <span
  m='2969990'>be</span> <span m='2970140'>3?</span> <span m='2975520'>And</span>
  <span m='2975670'>what</span> <span m='2975970'>is</span> <span
  m='2976370'>3</span> <span m='2976990'>choose</span> <span
  m='2977500'>1?</span> </p><p><span m='2979639'>AUDIENCE:</span> <span
  m='2979885'>3.</span> </p><p><span m='2981120'>GILBERT STRANG:</span> <span
  m='2981165'>How</span> <span m='2981210'>do</span> <span
  m='2981270'>you</span> <span m='2981360'>know</span> <span
  m='2981540'>that?</span> <span m='2982780'>You're</span> <span
  m='2982870'>probably</span> <span m='2983200'>right.</span> <span
  m='2985730'>3,</span> <span m='2986180'>I</span> <span
  m='2986270'>think,</span> <span m='2986480'>yeah.</span> <span
  m='2988190'>Oh</span> <span m='2988310'>yeah,</span> <span
  m='2988520'>probably</span> <span m='2988910'>a</span> <span
  m='2989000'>theorem</span> <span m='2989450'>that</span> <span
  m='2990170'>if</span> <span m='2990500'>these</span> <span
  m='2990890'>add</span> <span m='2991400'>3.</span> <span
  m='2992800'>Yeah,</span> <span m='2993380'>so</span> <span
  m='2993770'>I'm</span> <span m='2993950'>doing</span> <span
  m='2994220'>N</span> <span m='2994370'>equals</span> <span
  m='2994640'>3</span> <span m='2994950'>here.</span> </p><p><span
  m='2995450'>OK.</span> <span m='2995840'>So</span> <span
  m='2996530'>yeah,</span> <span m='2996710'>I</span> <span
  m='2996890'>agree.</span> <span m='2997270'>That's</span> <span
  m='2997490'>3,</span> <span m='2998120'>and</span> <span
  m='2998270'>what</span> <span m='2998450'>about</span> <span
  m='2998750'>N</span> <span m='2999015'>to</span> <span m='2999280'>0?</span>
  <span m='3001000'>That</span> <span m='3001210'>you</span> <span
  m='3001360'>have</span> <span m='3001600'>to</span> <span
  m='3002290'>live</span> <span m='3002530'>with</span> <span
  m='3002750'>0</span> <span m='3003220'>factorial,</span> <span
  m='3005580'>but</span> <span m='3006510'>0</span> <span
  m='3006850'>factorial</span> <span m='3007310'>is</span> <span
  m='3007450'>by</span> <span m='3007660'>no</span> <span
  m='3007870'>means</span> <span m='3008170'>0.</span> <span
  m='3010000'>So</span> <span m='3010240'>what</span> <span
  m='3010540'>is</span> <span m='3010780'>0</span> <span
  m='3011850'>factorial?</span> <span m='3013200'>1,</span> <span
  m='3014612'>yeah.</span> </p><p><span m='3017470'>I</span> <span
  m='3017560'>remember</span> <span m='3017950'>when</span> <span
  m='3018160'>I</span> <span m='3018250'>was</span> <span m='3018460'>an</span>
  <span m='3018520'>undergraduate</span> <span m='3019210'>having</span> <span
  m='3019510'>a</span> <span m='3019570'>bet</span> <span m='3020050'>on</span>
  <span m='3020230'>that.</span> <span m='3024890'>I</span> <span
  m='3025580'>won,</span> <span m='3025900'>but</span> <span
  m='3026110'>he</span> <span m='3026200'>didn't</span> <span
  m='3026470'>pay</span> <span m='3026770'>off.</span> <span
  m='3029030'>Yeah,</span> <span m='3029670'>so</span> <span
  m='3030000'>it's</span> <span m='3030370'>3.</span> <span
  m='3031480'>This</span> <span m='3031750'>is</span> <span m='3031840'>3</span>
  <span m='3032140'>factorial</span> <span m='3032890'>over</span> <span
  m='3033250'>3</span> <span m='3033550'>factorial</span> <span
  m='3034210'>times</span> <span m='3034450'>0</span> <span
  m='3034750'>factorial.</span> <span m='3035320'>So</span> <span
  m='3035530'>it's</span> <span m='3035980'>6</span> <span
  m='3036340'>over</span> <span m='3036550'>6</span> <span m='3036910'>times
  1.</span> </p><p><span m='3037060'>So</span> <span m='3037340'>it's</span>
  <span m='3037680'>1.</span> <span m='3038130'>Yeah,</span> <span
  m='3038580'>1</span> <span m='3038840'>and</span> <span m='3038970'>3</span>
  <span m='3039220'>and</span> <span m='3039310'>3</span> <span
  m='3039520'>make</span> <span m='3039730'>7.</span> <span
  m='3041496'>So</span> <span m='3041980'>that</span> <span
  m='3042250'>proves</span> <span m='3042700'>the</span> <span
  m='3043570'>formula.</span> <span m='3044450'>Well,</span> <span
  m='3044790'>it doesn't</span> <span m='3045060'>quite</span> <span
  m='3045340'>prove</span> <span m='3045670'>the</span> <span
  m='3045760'>formula,</span> <span m='3046190'>but</span> <span
  m='3047760'>the</span> <span m='3047910'>way</span> <span
  m='3048220'>to</span> <span m='3048340'>prove</span> <span
  m='3048730'>it</span> <span m='3048850'>is</span> <span m='3049060'>by
  an</span> <span m='3049520'>induction.</span> </p><p><span
  m='3051380'>If</span> <span m='3051580'>you</span> <span
  m='3051760'>like</span> <span m='3052270'>this</span> <span
  m='3054700'>stuff,</span> <span m='3055060'>the</span> <span
  m='3057910'>recursion</span> <span m='3059530'>that</span> <span
  m='3059740'>you</span> <span m='3060190'>use</span> <span
  m='3060910'>induction</span> <span m='3061480'>on.</span> <span
  m='3061850'>Which</span> <span m='3062380'>is</span> <span
  m='3062530'>just</span> <span m='3062800'>what</span> <span
  m='3062950'>we</span> <span m='3063070'>did</span> <span
  m='3063280'>now,</span> <span m='3063760'>what</span> <span
  m='3063910'>we</span> <span m='3064030'>did</span> <span
  m='3064210'>here.</span> <span m='3064810'>Here</span> <span
  m='3065000'>comes</span> <span m='3065350'>in</span> <span
  m='3065530'>a</span> <span m='3065590'>number</span> <span
  m='3065930'>4,</span> <span m='3068880'>and</span> <span m='3069210'>it</span>
  <span m='3069390'>cuts</span> <span m='3069840'>through,</span> <span
  m='3071130'>and</span> <span m='3071220'>then</span> <span
  m='3071400'>we</span> <span m='3071520'>just</span> <span
  m='3071760'>counted</span> <span m='3073070'>the</span> <span
  m='3073320'>4</span> <span m='3073680'>pieces</span> <span
  m='3074250'>there.</span> <span m='3074910'>So</span> <span
  m='3075300'>yeah,</span> <span m='3076150'>so</span> <span
  m='3076500'>let</span> <span m='3076650'>me</span> <span
  m='3077430'>just</span> <span m='3079050'>tell</span> <span
  m='3079320'>you</span> <span m='3079470'>what</span> <span
  m='3079760'>the</span> <span m='3082290'>r</span> <span
  m='3082570'>then</span> <span m='3082830'>and</span> <span
  m='3082980'>m.</span> </p><p><span m='3083250'>The</span> <span
  m='3083370'>number</span> <span m='3083700'>we're</span> <span
  m='3083880'>looking</span> <span m='3084270'>for</span> <span
  m='3085350'>is</span> <span m='3085740'>the</span> <span
  m='3085890'>number</span> <span m='3086250'>that</span> <span
  m='3086400'>we</span> <span m='3086610'>had</span> <span
  m='3088500'>with</span> <span m='3088770'>one</span> <span
  m='3089130'>less</span> <span m='3089520'>cut.</span> <span
  m='3090780'>So</span> <span m='3090960'>that's</span> <span
  m='3091980'>the</span> <span m='3092070'>previous</span> <span
  m='3093060'>count</span> <span m='3093540'>of</span> <span
  m='3093630'>flat</span> <span m='3094050'>pieces</span> <span
  m='3095310'>plus</span> <span m='3096390'>the</span> <span
  m='3096810'>number</span> <span m='3100170'>that</span> <span
  m='3100320'>was</span> <span m='3100890'>here</span> <span
  m='3101160'>was</span> <span m='3101400'>4,</span> <span
  m='3101850'>the</span> <span m='3101970'>number</span> <span
  m='3102360'>of</span> <span m='3102540'>pieces</span> <span
  m='3103080'>that</span> <span m='3103230'>cut</span> <span
  m='3103470'>that.</span> <span m='3104310'>And</span> <span
  m='3104520'>that's</span> <span m='3105180'>r</span> <span
  m='3105630'>of</span> <span m='3106870'>N</span> <span
  m='3107250'>minus</span> <span m='3107670'>1,</span> <span
  m='3109070'>m</span> <span m='3109500'>minus</span> <span
  m='3109980'>1.</span> <span m='3112000'>Yeah,</span> <span
  m='3113050'>and</span> <span m='3114310'>I</span> <span
  m='3114550'>won't</span> <span m='3115780'>go</span> <span
  m='3116620'>further.</span> </p><p><span m='3117790'>Time's</span> <span
  m='3118240'>up,</span> <span m='3118450'>but</span> <span
  m='3120550'>that</span> <span m='3120880'>rule</span> <span
  m='3121390'>for</span> <span m='3121990'>recursion</span> <span
  m='3122800'>is</span> <span m='3123040'>proved</span> <span
  m='3123610'>in</span> <span m='3124470'>the</span> <span
  m='3124900'>section</span> <span m='3125380'>7.1</span> <span
  m='3127090'>taken</span> <span m='3127570'>from</span> <span
  m='3127900'>the</span> <span m='3128020'>paper</span> <span
  m='3128440'>by</span> <span m='3128800'>Kleinberg</span> <span
  m='3130180'>and</span> <span m='3130360'>others.</span> <span
  m='3131200'>Yeah.</span> <span m='3131530'>So</span> <span
  m='3131740'>OK,</span> <span m='3132610'>I</span> <span
  m='3132940'>think</span> <span m='3133180'>this</span> <span
  m='3133420'>is--</span> <span m='3134320'>I</span> <span
  m='3134410'>don't</span> <span m='3134560'>know</span> <span
  m='3134710'>what</span> <span m='3134960'>you</span> <span
  m='3135070'>feel.</span> <span m='3136180'>For</span> <span
  m='3136330'>me,</span> <span m='3136690'>this</span> <span
  m='3137140'>like</span> <span m='3137650'>gave</span> <span
  m='3138130'>me</span> <span m='3138310'>a</span> <span
  m='3139330'>better</span> <span m='3139780'>feeling</span> <span
  m='3140380'>that</span> <span m='3140590'>I</span> <span
  m='3140770'>was</span> <span m='3141100'>understanding</span> <span
  m='3142150'>what</span> <span m='3143200'>kind</span> <span
  m='3143440'>of</span> <span m='3143530'>functions</span> <span
  m='3144100'>we</span> <span m='3144250'>had</span> <span
  m='3144640'>here.</span> <span m='3145660'>And</span> <span
  m='3148300'>so</span> <span m='3148480'>then</span> <span
  m='3148720'>the</span> <span m='3149410'>question</span> <span
  m='3150010'>is--</span> <span m='3153270'>with</span> <span
  m='3153570'>this</span> <span m='3153840'>family</span> <span
  m='3154270'>of</span> <span m='3154320'>functions,</span> <span
  m='3155050'>we</span> <span m='3155220'>want</span> <span
  m='3155550'>to</span> <span m='3157650'>choose</span> <span
  m='3159720'>the</span> <span m='3159900'>A's</span> <span
  m='3160350'>and</span> <span m='3160500'>the</span> <span
  m='3160650'>weights,</span> <span m='3161070'>the</span> <span
  m='3161250'>A's</span> <span m='3161610'>and</span> <span
  m='3161820'>b's,</span> <span m='3165880'>to</span> <span
  m='3166380'>match</span> <span m='3167010'>the</span> <span
  m='3167550'>training</span> <span m='3167970'>data.</span> <span
  m='3170130'>So</span> <span m='3170430'>that</span> <span
  m='3170610'>we</span> <span m='3170790'>have</span> <span m='3170970'>a</span>
  <span m='3171030'>problem</span> <span m='3171560'>in</span> <span
  m='3173640'>minimizing</span> <span m='3174540'>the</span> <span
  m='3174630'>total</span> <span m='3174990'>loss,</span> <span
  m='3176190'>and</span> <span m='3176490'>we</span> <span
  m='3176700'>have</span> <span m='3178440'>a</span> <span
  m='3178650'>gradient</span> <span m='3179610'>descent</span> <span
  m='3180060'>problem.</span> </p><p><span m='3180480'>So</span> <span
  m='3180660'>we</span> <span m='3180780'>have</span> <span
  m='3180930'>to</span> <span m='3181050'>find</span> <span
  m='3181290'>the</span> <span m='3181380'>gradient,</span> <span
  m='3182140'>so</span> <span m='3182220'>that</span> <span
  m='3182610'>Wednesday's</span> <span m='3183300'>job.</span> <span
  m='3184370'>Wednesday's</span> <span m='3184980'>job</span> <span
  m='3185370'>is</span> <span m='3185530'>to</span> <span
  m='3185840'>find</span> <span m='3186450'>the</span> <span
  m='3186570'>gradient</span> <span m='3187170'>of</span> <span
  m='3187310'>F,</span> <span m='3189330'>and</span> <span
  m='3189420'>that's</span> <span m='3189750'>back</span> <span
  m='3190050'>propagation.</span> <span m='3191340'>Good.</span> <span
  m='3191760'>Thank</span> <span m='3192060'>you</span> <span
  m='3192150'>very</span> <span m='3192420'>much.</span> <span
  m='3194040'>7.1</span> <span m='3194940'>is</span> <span
  m='3195240'>done.</span> </p>
uid: 2cf9f8cbf7d406397a5cf4361ec9fc66
type: course
layout: video
---
