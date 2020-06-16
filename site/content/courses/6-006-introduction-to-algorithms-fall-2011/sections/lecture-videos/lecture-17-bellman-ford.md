---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture reviews shortest path notation,
  considers a generic shortest path algorithm, and then describes and proves the
  Bellman-Ford algorithm, which can handle graphs with negative cycles.</p>
  <p><strong>Instructor:</strong> Srini Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ozsuci5pIso
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Video-YouTube-Stream
    type: Video
    uid: 33900fc0c110170dcb1eebdffe06de14
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ozsuci5pIso/default.jpg'
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a1a056efe633428a12587afdb2edb0b4
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-17-bellman-ford/id585700718?i=126127752
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Video-iTunes U-MP4
    type: Video
    uid: 851204edd12516a850b52d0029c23587
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec17_300k.mp4'
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1028ff10fa80867e25d8116e58716e8c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ozsuci5pIso
    parent_uid: ae43980d9777639340a8b145999421d3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3460ad508e5501f4b10105831671b879
  - id: ozsuci5pIso.srt
    parent_uid: ae43980d9777639340a8b145999421d3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-17-bellman-ford/ozsuci5pIso.srt
    title: 3play caption file
    type: null
    uid: 68d6399df4ff430949a737313d97b36c
  - id: ozsuci5pIso.pdf
    parent_uid: ae43980d9777639340a8b145999421d3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-17-bellman-ford/ozsuci5pIso.pdf
    title: 3play pdf file
    type: null
    uid: f7c2c84db0aeaa78a340ef1812c33afe
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e8baeb45f9c2952e84c5e71fa7a63828
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ae43980d9777639340a8b145999421d3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: dc6d040d8ec82087896f99983f762104
inline_embed_id: '25511204lecture17:bellman-ford81065216'
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-17-bellman-ford
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-17-bellman-ford
title: 'Lecture 17: Bellman-Ford'
transcript: >-
  <p><span m='80'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4000'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13320'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='21916'>PROFESSOR:</span> <span m='22380'>Good morning,</span> <span
  m='22740'>everyone.</span> <span m='25410'>So</span> <span
  m='26290'>lecture</span> <span m='26750'>three</span> <span
  m='27160'>of</span> <span m='27770'>four</span> <span m='29290'>in</span>
  <span m='29820'>the</span> <span m='29900'>shortest</span> <span
  m='30250'>path</span> <span m='30470'>module</span> <span m='31520'>and</span>
  <span m='31870'>today</span> <span m='32150'>we'll</span> <span
  m='32580'>finally</span> <span m='33970'>confront</span> <span
  m='36590'>our</span> <span m='36700'>nemesis,</span> <span
  m='37390'>which</span> <span m='37640'>are</span> <span
  m='37760'>negative</span> <span m='38130'>cycles</span> <span
  m='38710'>and</span> <span m='38780'>negative</span> <span
  m='39130'>edges.</span> <span m='40220'>And</span> <span m='41260'>we</span>
  <span m='41450'>will</span> <span m='41820'>describe</span> <span
  m='42800'>an</span> <span m='42900'>algorithm</span> <span
  m='44240'>that</span> <span m='44420'>is</span> <span m='44580'>due</span>
  <span m='44810'>to</span> <span m='45170'>two</span> <span
  m='45330'>different</span> <span m='45640'>people.</span> <span
  m='46470'>They</span> <span m='46690'>didn't</span> <span
  m='46820'>collaborate</span> <span m='47660'>to</span> <span
  m='47840'>produce</span> <span m='48180'>this</span> <span
  m='48340'>algorithm.</span> </p><p><span m='49360'>Bellman</span> <span
  m='49930'>and</span> <span m='50100'>Ford.</span> <span m='52570'>This</span>
  <span m='52780'>computes</span> <span m='53190'>shortest</span> <span
  m='53710'>paths</span> <span m='55200'>in</span> <span m='55400'>a</span>
  <span m='55440'>graph</span> <span m='56940'>with</span> <span
  m='57240'>negative</span> <span m='57600'>edges.</span> <span
  m='58720'>And</span> <span m='58990'>not</span> <span m='59160'>only</span>
  <span m='59360'>that,</span> <span m='60320'>even</span> <span
  m='60550'>in</span> <span m='60630'>the</span> <span m='60730'>graph</span>
  <span m='61060'>has</span> <span m='61550'>negative</span> <span
  m='61900'>cycles</span> <span m='62390'>in</span> <span m='62510'>it,</span>
  <span m='63260'>the</span> <span m='63370'>algorithm</span> <span
  m='63890'>will</span> <span m='64720'>be</span> <span m='65170'>correct</span>
  <span m='65400'>in</span> <span m='65530'>the</span> <span
  m='65620'>sense</span> <span m='65980'>that</span> <span m='66680'>it</span>
  <span m='66800'>will</span> <span m='66940'>report</span> <span
  m='67740'>the</span> <span m='67900'>existence</span> <span
  m='68410'>of</span> <span m='68490'>a</span> <span m='68530'>negative</span>
  <span m='68830'>cycle</span> <span m='69830'>and,</span> <span
  m='70240'>essentially,</span> <span m='70740'>abort</span> <span
  m='71100'>the</span> <span m='71190'>computation</span> <span
  m='71940'>of</span> <span m='72710'>shortest</span> <span
  m='73000'>paths</span> <span m='73490'>that</span> <span m='73580'>are</span>
  <span m='73710'>undefined.</span> </p><p><span m='75290'>And</span> <span
  m='75690'>for</span> <span m='75870'>the</span> <span m='76020'>few</span>
  <span m='76690'>vertices</span> <span m='77320'>that</span> <span
  m='78360'>do</span> <span m='78520'>not</span> <span m='78730'>have</span>
  <span m='80200'>negative</span> <span m='80490'>cycles</span> <span
  m='80990'>in</span> <span m='81130'>between</span> <span m='81450'>them</span>
  <span m='81670'>and</span> <span m='81760'>the</span> <span
  m='81860'>source,</span> <span m='83020'>the</span> <span
  m='83150'>algorithm</span> <span m='83580'>will</span> <span
  m='83700'>report</span> <span m='84300'>correct</span> <span
  m='84590'>shortest</span> <span m='84940'>paths.</span> <span
  m='85980'>So</span> <span m='87090'>it</span> <span m='87220'>is</span> <span
  m='87550'>a</span> <span m='87680'>polynomial</span> <span
  m='88350'>time</span> <span m='88610'>algorithm.</span> <span
  m='89260'>It's</span> <span m='89530'>fairly</span> <span
  m='89840'>easy</span> <span m='90070'>to</span> <span
  m='90160'>describe.</span> <span m='90900'>And</span> <span
  m='91200'>what</span> <span m='91340'>we'll</span> <span m='91500'>do</span>
  <span m='91740'>is</span> <span m='92370'>describe</span> <span
  m='92830'>it,</span> <span m='93370'>analyze</span> <span m='93870'>its</span>
  <span m='94020'>complexity</span> <span m='95080'>and,</span> <span
  m='95720'>for</span> <span m='95870'>once,</span> <span m='96610'>we'll</span>
  <span m='96850'>do</span> <span m='97060'>a</span> <span
  m='97650'>formal</span> <span m='98440'>proof</span> <span m='98950'>of</span>
  <span m='99240'>its</span> <span m='99420'>correctness</span> <span
  m='100800'>to</span> <span m='100910'>show</span> <span m='101160'>that</span>
  <span m='101320'>it</span> <span m='101750'>reports</span> <span
  m='102420'>the</span> <span m='102540'>existence</span> <span
  m='103000'>of</span> <span m='103090'>negative</span> <span
  m='103400'>cycles</span> <span m='103940'>if</span> <span
  m='104050'>they</span> <span m='104160'>do</span> <span
  m='104340'>exist.</span> <span m='105140'>And</span> <span
  m='105350'>if</span> <span m='105420'>they</span> <span
  m='105510'>don't</span> <span m='105720'>exist,</span> <span
  m='106190'>it</span> <span m='106640'>correctly</span> <span
  m='107150'>computes</span> <span m='108130'>shortest</span> <span
  m='108550'>path</span> <span m='108800'>weights.</span> </p><p><span
  m='112720'>So</span> <span m='112920'>recall</span> <span
  m='113380'>that</span> <span m='114320'>when</span> <span m='114580'>we</span>
  <span m='115230'>look</span> <span m='115460'>at</span> <span
  m='115540'>the</span> <span m='115630'>general</span> <span
  m='116120'>case</span> <span m='119530'>of</span> <span m='120650'>the</span>
  <span m='120900'>shortest</span> <span m='121270'>path</span> <span
  m='121530'>problem.</span> <span m='122300'>We're</span> <span
  m='122430'>going</span> <span m='122600'>to</span> <span
  m='122670'>have,</span> <span m='124340'>let's</span> <span
  m='124420'>say,</span> <span m='125050'>a</span> <span m='125150'>vertex
  u</span> <span m='126280'>that,</span> <span m='126600'>in</span> <span
  m='126730'>this</span> <span m='126920'>case,</span> <span
  m='127150'>happens</span> <span m='127470'>to</span> <span
  m='127550'>be</span> <span m='127700'>our</span> <span
  m='127820'>source.</span> <span m='129490'>And</span> <span
  m='130370'>let's</span> <span m='130570'>say</span> <span
  m='130680'>for</span> <span m='130840'>argument's</span> <span
  m='131270'>sake</span> <span m='131640'>that</span> <span m='133110'>we</span>
  <span m='133240'>have</span> <span m='133460'>a</span> <span
  m='133520'>negative</span> <span m='133980'>weight</span> <span
  m='134290'>cycle</span> <span m='135090'>like</span> <span
  m='136300'>so.</span> <span m='137312'>So</span> <span m='137670'>let</span>
  <span m='137800'>me</span> <span m='137880'>to</span> <span
  m='138050'>draw</span> <span m='138260'>this</span> <span m='138460'>in</span>
  <span m='138610'>bold.</span> <span m='141810'>And</span> <span
  m='142120'>this</span> <span m='142280'>happens</span> <span
  m='142590'>to</span> <span m='142670'>be</span> <span m='142800'>a</span>
  <span m='142840'>negative</span> <span m='143140'>rate</span> <span
  m='143350'>cycle.</span> </p><p><span m='144560'>Let's</span> <span
  m='144680'>assume</span> <span m='145010'>that</span> <span
  m='146320'>all</span> <span m='146480'>of</span> <span m='146560'>these</span>
  <span m='146740'>edges</span> <span m='148740'>have</span> <span
  m='149070'>positive</span> <span m='149480'>weights.</span> <span
  m='150930'>Then,</span> <span m='152600'>if</span> <span m='152750'>you</span>
  <span m='152860'>have</span> <span m='155940'>an</span> <span
  m='156100'>algorithm</span> <span m='156680'>that</span> <span
  m='157640'>needs</span> <span m='157930'>to</span> <span
  m='158020'>work</span> <span m='158320'>on</span> <span m='158660'>this</span>
  <span m='159000'>type</span> <span m='159270'>of</span> <span
  m='159410'>graph,</span> <span m='161140'>what</span> <span
  m='161380'>you</span> <span m='161480'>want</span> <span m='161600'>to</span>
  <span m='161640'>be</span> <span m='161720'>able</span> <span
  m='161890'>to</span> <span m='162890'>do</span> <span m='163190'>is</span>
  <span m='163620'>to</span> <span m='163760'>detect</span> <span
  m='164540'>that</span> <span m='164760'>this</span> <span
  m='164930'>negative</span> <span m='165250'>cycle</span> <span
  m='165590'>exists.</span> <span m='166770'>And</span> <span
  m='167600'>you're</span> <span m='167750'>going</span> <span
  m='168000'>to,</span> <span m='168290'>essentially,</span> <span
  m='169190'>say</span> <span m='169980'>if</span> <span m='170140'>this</span>
  <span m='170470'>vertex</span> <span m='170950'>is</span> <span
  m='171610'>v1,</span> <span m='172160'>for</span> <span
  m='172280'>example,</span> <span m='173170'>you</span> <span
  m='173280'>want</span> <span m='173370'>to</span> <span m='173410'>be</span>
  <span m='173470'>able</span> <span m='173600'>to</span> <span
  m='173680'>say</span> <span m='173960'>delta</span> <span m='174340'>u</span>
  <span m='174510'>v1</span> <span m='176500'>is</span> <span
  m='176660'>undefined</span> <span m='178920'>and</span> <span
  m='179160'>similarly</span> <span m='179720'>for</span> <span
  m='180460'>v2,</span> <span m='181840'>v3,</span> <span m='182540'>et</span>
  <span m='182680'>cetera.</span> </p><p><span m='183660'>For</span> <span
  m='183800'>all</span> <span m='183930'>of</span> <span m='184010'>these</span>
  <span m='184180'>things,</span> <span m='184470'>the</span> <span
  m='184540'>shortest</span> <span m='184900'>path lengths</span> <span
  m='185400'>are</span> <span m='185520'>undefined</span> <span
  m='187330'>because</span> <span m='187580'>you</span> <span
  m='187680'>can</span> <span m='188580'>essentially</span> <span
  m='189010'>run</span> <span m='189230'>through</span> <span
  m='189430'>this</span> <span m='189620'>negative</span> <span
  m='189910'>cycle</span> <span m='190270'>any</span> <span
  m='190450'>number</span> <span m='190720'>of</span> <span
  m='190820'>times</span> <span m='191330'>and</span> <span
  m='191540'>get</span> <span m='191690'>whatever</span> <span
  m='192020'>shortest</span> <span m='192370'>path</span> <span
  m='192665'>weight</span> <span m='193240'>you</span> <span
  m='193380'>want.</span> <span m='196180'>For</span> <span
  m='196410'>this</span> <span m='196660'>node,</span> <span
  m='197320'>let's</span> <span m='197540'>call</span> <span
  m='197720'>that</span> <span m='197930'>v0,</span> <span m='199400'>we</span>
  <span m='199510'>have</span> <span m='199680'>delta</span> <span
  m='200020'>u</span> <span m='200900'>v0</span> <span m='202400'>equals</span>
  <span m='203240'>2.</span> <span m='205240'>And</span> <span
  m='206110'>there's</span> <span m='206310'>a</span> <span
  m='206390'>simple</span> <span m='206850'>path</span> <span
  m='207780'>of</span> <span m='208460'>length</span> <span m='208800'>1</span>
  <span m='209070'>in</span> <span m='209160'>this</span> <span
  m='209370'>case</span> <span m='210240'>that</span> <span
  m='210520'>gets</span> <span m='210720'>you</span> <span
  m='210880'>from</span> <span m='211120'>u</span> <span m='211300'>to</span>
  <span m='211380'>v0.</span> </p><p><span m='212390'>You</span> <span
  m='212510'>don't</span> <span m='212710'>encounter</span> <span
  m='214110'>a</span> <span m='214220'>cycle</span> <span m='214630'>or</span>
  <span m='214770'>negative</span> <span m='215070'>cycle</span> <span
  m='215500'>in</span> <span m='215610'>between.</span> <span
  m='216790'>So</span> <span m='217050'>that's</span> <span
  m='217290'>cool.</span> <span m='218480'>All right?</span> <span
  m='219850'>And</span> <span m='220060'>of</span> <span
  m='220140'>course,</span> <span m='220340'>if</span> <span
  m='220430'>you</span> <span m='220520'>have</span> <span m='221500'>a</span>
  <span m='221990'>vertex</span> <span m='223070'>over</span> <span
  m='223240'>here,</span> <span m='223500'>z,</span> <span
  m='224140'>that</span> <span m='224330'>can't</span> <span
  m='224700'>be</span> <span m='224850'>reached</span> <span
  m='225520'>from</span> <span m='225710'>u</span> <span m='226630'>then</span>
  <span m='227200'>we're</span> <span m='227360'>going</span> <span
  m='227480'>to</span> <span m='227520'>have</span> <span
  m='227760'>delta</span> <span m='228180'>uz</span> <span
  m='229860'>being</span> <span m='230170'>infinity.</span> </p><p><span
  m='231630'>And</span> <span m='231790'>you</span> <span m='231890'>can</span>
  <span m='232060'>assume</span> <span m='232390'>at</span> <span
  m='232590'>the</span> <span m='232720'>beginning</span> <span
  m='233230'>of</span> <span m='233810'>these</span> <span
  m='234060'>algorithms</span> <span m='235140'>that</span> <span
  m='235660'>the</span> <span m='235830'>source--</span> <span
  m='236910'>in</span> <span m='237050'>this</span> <span
  m='237220'>case,</span> <span m='237550'>I</span> <span m='237650'>call</span>
  <span m='237770'>the</span> <span m='237850'>source</span> <span
  m='238220'>u--</span> <span m='238840'>but</span> <span m='239440'>the</span>
  <span m='240700'>shortest</span> <span m='241080'>path</span> <span
  m='241660'>to</span> <span m='241900'>u</span> <span m='242450'>would</span>
  <span m='242610'>be</span> <span m='242720'>0.</span> <span
  m='243850'>And</span> <span m='244230'>all</span> <span m='244360'>of</span>
  <span m='244430'>the</span> <span m='244490'>other</span> <span
  m='244650'>ones</span> <span m='244900'>are</span> <span
  m='244980'>infinity.</span> <span m='246140'>And</span> <span
  m='246360'>some</span> <span m='246550'>of</span> <span m='246600'>them</span>
  <span m='246690'>may stay</span> <span m='247130'>infinity.</span> <span
  m='248250'>Some of</span> <span m='248310'>them</span> <span
  m='248460'>may</span> <span m='249760'>obtain</span> <span
  m='250390'>finite</span> <span m='251550'>shortest</span> <span
  m='252000'>path</span> <span m='252270'>weights.</span> <span
  m='253090'>And</span> <span m='253260'>some</span> <span m='253420'>of</span>
  <span m='253470'>them</span> <span m='253620'>will</span> <span
  m='253720'>be</span> <span m='253850'>undefined</span> <span
  m='254810'>if</span> <span m='254930'>you</span> <span m='255010'>have</span>
  <span m='255190'>a</span> <span m='255250'>graph</span> <span
  m='255880'>with</span> <span m='256160'>negative</span> <span
  m='256470'>cycles</span> <span m='256880'>in</span> <span
  m='256990'>it.</span> </p><p><span m='257820'>So</span> <span
  m='257899'>that's</span> <span m='258089'>sort</span> <span
  m='258250'>of</span> <span m='258350'>the</span> <span
  m='258910'>specification,</span> <span m='259720'>if</span> <span
  m='259820'>you</span> <span m='259920'>will,</span> <span m='260839'>of</span>
  <span m='260890'>the</span> <span m='260980'>requirements</span> <span
  m='261730'>on</span> <span m='262000'>the</span> <span
  m='262440'>Bellman-Ford</span> <span m='262670'>algorithm.</span> <span
  m='263530'>We</span> <span m='263640'>want it</span> <span
  m='263890'>to</span> <span m='263950'>be</span> <span m='264250'>able</span>
  <span m='264530'>to</span> <span m='264650'>do</span> <span
  m='265110'>all</span> <span m='265320'>of</span> <span m='265390'>the</span>
  <span m='265470'>things</span> <span m='265740'>I</span> <span
  m='265790'>just</span> <span m='265980'>described.</span> <span
  m='267270'>OK?</span> <span m='269300'>So</span> <span m='270450'>let's</span>
  <span m='270710'>take</span> <span m='272510'>a</span> <span
  m='272580'>second</span> <span m='272960'>look</span> <span
  m='274360'>at</span> <span m='277070'>our</span> <span
  m='277650'>generic</span> <span m='279890'>shortest</span> <span
  m='280290'>path</span> <span m='280540'>algorithm</span> <span
  m='283280'>that</span> <span m='284170'>I</span> <span m='284310'>put</span>
  <span m='284470'>up, I</span> <span m='284930'>think,</span> <span
  m='285260'>about</span> <span m='285480'>a</span> <span m='285540'>week</span>
  <span m='285740'>ago.</span> <span m='287510'>And</span> <span
  m='288860'>this</span> <span m='289030'>is</span> <span m='289090'>a</span>
  <span m='289160'>good</span> <span m='289360'>review</span> <span
  m='289700'>of</span> <span m='289830'>our</span> <span
  m='290800'>notation.</span> </p><p><span m='292400'>But</span> <span
  m='292880'>there are</span> <span m='293020'>a</span> <span
  m='293070'>couple</span> <span m='293310'>more</span> <span
  m='293470'>things</span> <span m='293840'>I</span> <span
  m='293890'>want</span> <span m='294040'>to</span> <span m='294080'>say</span>
  <span m='294350'>about</span> <span m='294560'>this</span> <span
  m='294700'>algorithm</span> <span m='296100'>that</span> <span
  m='296280'>I</span> <span m='296330'>didn't</span> <span m='296560'>get</span>
  <span m='296740'>to</span> <span m='296870'>last</span> <span
  m='297150'>time.</span> <span m='298490'>So</span> <span
  m='298640'>you're</span> <span m='298790'>given</span> <span
  m='299040'>a</span> <span m='299100'>graph</span> <span m='301560'>and</span>
  <span m='301700'>you</span> <span m='301800'>set</span> <span
  m='302110'>all</span> <span m='302300'>of</span> <span m='302390'>the</span>
  <span m='302480'>vertices</span> <span m='302910'>in</span> <span
  m='302990'>the</span> <span m='303090'>graph</span> <span m='304520'>to</span>
  <span m='304630'>have</span> <span m='305660'>infinite</span> <span
  m='306140'>shortest</span> <span m='306500'>path</span> <span
  m='306760'>weights,</span> <span m='307620'>initially.</span> <span
  m='310020'>Set</span> <span m='310280'>the</span> <span
  m='310370'>predecessors</span> <span m='311150'>to</span> <span
  m='311250'>be</span> <span m='311630'>null.</span> <span m='313220'>And</span>
  <span m='313400'>then</span> <span m='314500'>we'll</span> <span
  m='314760'>set</span> <span m='316060'>d</span> <span m='316290'>of</span>
  <span m='316420'>s</span> <span m='317710'>to</span> <span
  m='317910'>be</span> <span m='318010'>0.</span> <span m='318710'>That's</span>
  <span m='318960'>your</span> <span m='319120'>source.</span> <span
  m='320850'>And</span> <span m='321400'>the</span> <span m='321520'>main</span>
  <span m='322750'>loop</span> <span m='324040'>would</span> <span
  m='324220'>be</span> <span m='324350'>something</span> <span
  m='324690'>like</span> <span m='325490'>repeat,</span> <span
  m='330920'>select,</span> <span m='332980'>and</span> <span
  m='333150'>edge.</span> </p><p><span m='333910'>And</span> <span
  m='334790'>we</span> <span m='334950'>have</span> <span m='335610'>a</span>
  <span m='335710'>particular</span> <span m='336140'>way</span> <span
  m='336330'>of</span> <span m='336410'>selecting</span> <span
  m='336770'>this</span> <span m='336930'>edge.</span> <span
  m='337800'>And</span> <span m='337910'>we</span> <span m='337980'>have</span>
  <span m='338150'>positive</span> <span m='338610'>edge</span> <span
  m='338820'>weights</span> <span m='339810'>that</span> <span
  m='339950'>corresponds</span> <span m='340500'>to</span> <span
  m='340590'>the</span> <span m='341290'>minimum</span> <span
  m='341660'>priority.</span> <span m='342860'>And</span> <span
  m='342990'>we</span> <span m='343080'>talked</span> <span
  m='343280'>about</span> <span m='343480'>Dijkstra</span> <span
  m='344120'>but</span> <span m='344540'>we</span> <span m='344750'>have,</span>
  <span m='345000'>maybe,</span> <span m='345250'>different</span> <span
  m='345520'>ways</span> <span m='345730'>of</span> <span
  m='345820'>doing</span> <span m='346010'>that.</span> <span
  m='346380'>We</span> <span m='346420'>have</span> <span m='346580'>to</span>
  <span m='346660'>select</span> <span m='346970'>an</span> <span
  m='347070'>edge</span> <span m='347310'>somehow.</span> <span
  m='348530'>And</span> <span m='350400'>then,</span> <span m='350910'>we</span>
  <span m='351060'>relaxed</span> <span m='351540'>that</span> <span
  m='351760'>edge.</span> <span m='355370'>u,</span> <span m='355930'>v,</span>
  <span m='356580'>w.</span> </p><p><span m='358080'>And</span> <span
  m='358350'>you</span> <span m='358450'>know</span> <span
  m='358590'>about</span> <span m='358790'>the</span> <span
  m='358860'>relaxation</span> <span m='359460'>step.</span> <span
  m='360040'>I</span> <span m='360110'>won't</span> <span
  m='360300'>bother</span> <span m='360520'>writing</span> <span
  m='360800'>it</span> <span m='360880'>out</span> <span m='362540'>right</span>
  <span m='362800'>now.</span> <span m='363000'>But</span> <span
  m='363240'>it's</span> <span m='363560'>basically</span> <span
  m='364510'>something</span> <span m='364960'>where</span> <span
  m='365920'>you</span> <span m='366100'>look</span> <span m='366320'>at</span>
  <span m='366430'>the</span> <span m='366940'>value</span> <span
  m='367420'>of</span> <span m='367690'>d v.</span> <span m='368640'>And</span>
  <span m='368760'>if</span> <span m='368950'>d v</span> <span
  m='369340'>is</span> <span m='369690'>greater</span> <span
  m='370050'>than</span> <span m='370340'>d u</span> <span
  m='370730'>plus</span> <span m='371270'>the</span> <span
  m='371420'>weight,</span> <span m='372410'>you</span> <span
  m='372570'>relax</span> <span m='372920'>the</span> <span
  m='373010'>edge.</span> <span m='374280'>And</span> <span
  m='374870'>you</span> <span m='374990'>keep</span> <span
  m='375210'>doing</span> <span m='375460'>this.</span> <span
  m='377350'>The</span> <span m='377500'>other</span> <span
  m='377660'>thing</span> <span m='379000'>that</span> <span
  m='379190'>you</span> <span m='379280'>do in</span> <span
  m='379510'>the</span> <span m='379610'>relaxation</span> <span
  m='380250'>is</span> <span m='380400'>to</span> <span m='380560'>set</span>
  <span m='381070'>the</span> <span m='381290'>predecessor</span> <span
  m='381710'>pointers</span> <span m='382320'>to</span> <span
  m='382400'>be</span> <span m='382520'>correct.</span> <span
  m='383260'>And</span> <span m='383340'>that's</span> <span
  m='383510'>part</span> <span m='383730'>of</span> <span m='383820'>the</span>
  <span m='384110'>relax</span> <span m='384550'>routine.</span> </p><p><span
  m='385630'>And</span> <span m='385750'>you</span> <span m='385840'>keep</span>
  <span m='386030'>doing</span> <span m='386260'>this</span> <span
  m='386670'>until</span> <span m='389270'>you</span> <span
  m='389470'>can't</span> <span m='392180'>relax</span> <span
  m='393560'>anymore.</span> <span m='396900'>All</span> <span
  m='396970'>right?</span> <span m='397290'>So</span> <span
  m='397440'>that's</span> <span m='397660'>our</span> <span
  m='397780'>generic</span> <span m='398470'>shortest</span> <span
  m='398850'>path</span> <span m='399130'>algorithm.</span> <span
  m='400830'>There</span> <span m='401070'>are</span> <span
  m='401440'>two</span> <span m='401650'>problems</span> <span
  m='402120'>with</span> <span m='402270'>this</span> <span
  m='402440'>algorithm.</span> <span m='405050'>The</span> <span
  m='405160'>first,</span> <span m='406680'>which</span> <span
  m='406840'>we</span> <span m='406950'>talked</span> <span
  m='407180'>about</span> <span m='408120'>and</span> <span
  m='408260'>both</span> <span m='408430'>of</span> <span
  m='408510'>these</span> <span m='408700'>have</span> <span
  m='408840'>to</span> <span m='408930'>do</span> <span m='409060'>with</span>
  <span m='409150'>the</span> <span m='409240'>complexity</span> <span
  m='411710'>but</span> <span m='412070'>the</span> <span
  m='412160'>first</span> <span m='412410'>one</span> <span m='412880'>is</span>
  <span m='413180'>that</span> <span m='413360'>the</span> <span
  m='413450'>complexity</span> <span m='415970'>could</span> <span
  m='416170'>be</span> <span m='416350'>exponential</span> <span
  m='417060'>time,</span> <span m='420120'>even</span> <span
  m='420360'>for</span> <span m='420580'>positive</span> <span
  m='421100'>edge</span> <span m='421400'>weights.</span> </p><p><span
  m='428090'>And</span> <span m='428560'>the</span> <span
  m='428630'>particular</span> <span m='428960'>example</span> <span
  m='429360'>we</span> <span m='429470'>talked</span> <span
  m='429710'>about</span> <span m='430450'>was</span> <span
  m='431710'>something</span> <span m='432170'>where</span> <span
  m='433480'>you</span> <span m='433570'>had</span> <span m='433730'>an</span>
  <span m='433820'>exponential</span> <span m='434450'>number</span> <span
  m='434690'>of</span> <span m='434880'>paths.</span> <span
  m='436900'>And</span> <span m='438500'>if</span> <span m='438610'>you</span>
  <span m='438710'>had</span> <span m='439380'>a</span> <span
  m='439480'>graph</span> <span m='439800'>that</span> <span
  m='439930'>looks</span> <span m='440130'>like</span> <span
  m='440330'>this,</span> <span m='441370'>then</span> <span
  m='441690'>it's</span> <span m='441830'>possible</span> <span
  m='442270'>that</span> <span m='443100'>a</span> <span
  m='443250'>pathological</span> <span m='444140'>selection</span> <span
  m='444730'>of</span> <span m='444850'>edges</span> <span m='445950'>is</span>
  <span m='446140'>going</span> <span m='446420'>to</span> <span
  m='447150'>make</span> <span m='447440'>you</span> <span
  m='447920'>relax</span> <span m='448580'>edges</span> <span
  m='449680'>an</span> <span m='449900'>exponential</span> <span
  m='450550'>number</span> <span m='450780'>of</span> <span
  m='450850'>times.</span> <span m='451630'>And</span> <span
  m='451780'>in</span> <span m='451880'>particular,</span> <span
  m='452460'>if</span> <span m='452560'>you</span> <span m='452660'>have</span>
  <span m='452840'>n</span> <span m='453010'>nodes</span> <span
  m='454100'>in</span> <span m='454240'>this</span> <span
  m='454410'>graph,</span> <span m='455480'>it's</span> <span
  m='455650'>plausible</span> <span m='456100'>that</span> <span
  m='456240'>you'd</span> <span m='456410'>end</span> <span m='456610'>up</span>
  <span m='456780'>getting</span> <span m='457050'>the</span> <span
  m='457740'>complexity</span> <span m='458360'>of</span> <span
  m='459050'>order</span> <span m='459400'>2</span> <span
  m='459540'>raised</span> <span m='459770'>to</span> <span m='459840'>n</span>
  <span m='460090'>over</span> <span m='460290'>2.</span> <span
  m='461390'>OK?</span> <span m='462360'>So</span> <span
  m='462510'>that's</span> <span m='463060'>one</span> <span
  m='463240'>problem.</span> </p><p><span m='465350'>The</span> <span
  m='465370'>second</span> <span m='465650'>problem, which</span> <span
  m='465950'>is</span> <span m='466100'>actually</span> <span
  m='466350'>a</span> <span m='466390'>more</span> <span
  m='466650'>obvious</span> <span m='467030'>problem,</span> <span
  m='469560'>is</span> <span m='469950'>that</span> <span m='470910'>this</span>
  <span m='471110'>algorithm</span> <span m='472150'>might</span> <span
  m='472350'>not</span> <span m='472490'>even</span> <span
  m='472740'>terminate</span> <span m='479750'>if</span> <span
  m='479960'>this--</span> <span m='484230'>actually</span> <span
  m='484420'>will</span> <span m='484480'>not</span> <span
  m='484800'>terminate</span> <span m='487430'>the</span> <span
  m='487570'>way</span> <span m='487690'>it's</span> <span
  m='487830'>written</span> <span m='490110'>if</span> <span
  m='492470'>there's</span> <span m='492750'>a</span> <span
  m='493320'>negative</span> <span m='494570'>weight</span> <span
  m='494950'>cycle</span> <span m='497260'>reachable</span> <span
  m='497790'>from</span> <span m='497970'>the</span> <span
  m='498070'>source.</span> </p><p><span m='509180'>All</span> <span
  m='509280'>right,</span> <span m='509440'>so</span> <span
  m='509520'>there's</span> <span m='510030'>two</span> <span
  m='510170'>problems.</span> <span m='511380'>We</span> <span
  m='511530'>fixed</span> <span m='511800'>the</span> <span
  m='511900'>first</span> <span m='512169'>one.</span> <span
  m='513720'>In</span> <span m='513860'>the</span> <span m='513940'>case</span>
  <span m='514169'>of</span> <span m='514299'>positive</span> <span
  m='514799'>edges</span> <span m='516190'>are</span> <span
  m='516510'>non-negative</span> <span m='517059'>edges.</span> <span
  m='518549'>We</span> <span m='518730'>have</span> <span m='518950'>a</span>
  <span m='519289'>neat</span> <span m='519570'>algorithm</span> <span
  m='520049'>that</span> <span m='520409'>is</span> <span m='520580'>an</span>
  <span m='520650'>efficient</span> <span m='521010'>algorithm</span> <span
  m='521390'>called</span> <span m='521600'>Dijkstra</span> <span
  m='522070'>that</span> <span m='522210'>we</span> <span
  m='522320'>talked</span> <span m='522520'>about</span> <span
  m='522710'>last</span> <span m='522960'>time</span> <span
  m='523669'>that</span> <span m='523740'>fixed</span> <span
  m='523990'>the</span> <span m='524070'>first</span> <span
  m='524330'>part.</span> <span m='525200'>But</span> <span m='525650'>we</span>
  <span m='525780'>don't</span> <span m='525940'>know</span> <span
  m='526270'>yet</span> <span m='527010'>how</span> <span
  m='527230'>we're</span> <span m='527340'>going</span> <span
  m='527460'>to</span> <span m='527500'>handle</span> <span
  m='529400'>negative</span> <span m='529800'>cycles</span> <span
  m='530470'>in</span> <span m='530570'>the</span> <span
  m='530650'>general</span> <span m='530980'>case.</span> <span
  m='531750'>We</span> <span m='531760'>know</span> <span m='531860'>how</span>
  <span m='531940'>to</span> <span m='532020'>handle</span> <span
  m='532280'>negative</span> <span m='532580'>edges</span> <span
  m='532870'>in</span> <span m='532950'>the</span> <span m='533040'>case</span>
  <span m='533250'>of</span> <span m='533330'>a</span> <span
  m='533400'>DAG--</span> <span m='534230'>a</span> <span
  m='534250'>directed</span> <span m='534610'>acyclic</span> <span
  m='535030'>graph--</span> <span m='535650'>but</span> <span
  m='535810'>not</span> <span m='536490'>in</span> <span m='536560'>the</span>
  <span m='536630'>general</span> <span m='536940'>case.</span> <span
  m='537900'>OK?</span> </p><p><span m='541930'>So</span> <span
  m='542070'>there's</span> <span m='542260'>this</span> <span
  m='542440'>great</span> <span m='543780'>little</span> <span
  m='544030'>skit</span> <span m='545090'>from</span> <span
  m='545640'>Saturday</span> <span m='546030'>Night</span> <span
  m='546230'>Live</span> <span m='547150'>from</span> <span
  m='547320'>the</span> <span m='547380'>1980s--</span> <span m='548930'>so
  way</span> <span m='549390'>before</span> <span m='549690'>your</span> <span
  m='549860'>time--</span> <span m='550830'>called</span> <span
  m='551080'>The</span> <span m='551170'>Five</span> <span
  m='551680'>Minute</span> <span m='551970'>University.</span> <span
  m='553130'>Anybody</span> <span m='553320'>seen</span> <span
  m='553680'>this?</span> <span m='555350'>All right.</span> <span
  m='555600'>Look</span> <span m='555740'>it</span> <span m='555820'>up</span>
  <span m='555950'>on</span> <span m='556050'>YouTube.</span> <span
  m='556450'>Don't</span> <span m='556610'>look</span> <span
  m='556740'>it</span> <span m='556840'>up</span> <span m='557070'>during</span>
  <span m='557280'>lecture</span> <span m='557770'>but</span> <span
  m='557900'>afterwards.</span> </p><p><span m='560920'>So</span> <span
  m='561420'>the</span> <span m='561580'>character</span> <span
  m='561970'>here</span> <span m='562470'>is</span> <span m='563500'>a</span>
  <span m='563620'>person</span> <span m='563940'>by</span> <span
  m='564050'>the</span> <span m='564140'>name</span> <span
  m='564310'>of--</span> <span m='565170'>I</span> <span
  m='565530'>forget</span> <span m='565950'>his</span> <span
  m='566170'>real</span> <span m='566320'>name</span> <span
  m='566620'>but</span> <span m='566780'>his</span> <span m='567850'>fake</span>
  <span m='568160'>name</span> <span m='568360'>is</span> <span
  m='568910'>Father</span> <span m='569300'>Guido</span> <span
  m='569500'>Sarducci.</span> <span m='570200'>All right?</span> <span
  m='571470'>So</span> <span m='571660'>what's</span> <span
  m='571900'>this</span> <span m='572070'>Five</span> <span
  m='572350'>Minute</span> <span m='572560'>University</span> <span
  m='573150'>about?</span> <span m='573990'>Five</span> <span
  m='574260'>Minute</span> <span m='574450'>University,</span> <span
  m='575500'>he's</span> <span m='575860'>selling</span> <span
  m='576230'>this</span> <span m='576460'>notion</span> <span
  m='577940'>and</span> <span m='578070'>he</span> <span m='578260'>says,</span>
  <span m='578830'>look,</span> <span m='579760'>five</span> <span
  m='580240'>years</span> <span m='580520'>after</span> <span
  m='580750'>you</span> <span m='580880'>graduate</span> <span
  m='582040'>you,</span> <span m='582200'>essentially,</span> <span
  m='582455'>are</span> <span m='582710'>going to</span> <span
  m='582840'>remember</span> <span m='583310'>nothing.</span> <span
  m='584340'>OK?</span> </p><p><span m='584910'>I mean,</span> <span
  m='585080'>you're</span> <span m='585280'>not</span> <span m='585620'>going
  to</span> <span m='585740'>remember</span> <span m='586200'>anything</span>
  <span m='586800'>about</span> <span m='587220'>all</span> <span
  m='587480'>the</span> <span m='587560'>courses</span> <span
  m='587960'>you</span> <span m='588110'>took,</span> <span m='588660'>et</span>
  <span m='588790'>cetera.</span> <span m='589580'>So</span> <span
  m='589650'>why</span> <span m='590480'>waste</span> <span
  m='590780'>your</span> <span m='590920'>time</span> <span m='592100'>on</span>
  <span m='592280'>a</span> <span m='592330'>college</span> <span
  m='592630'>education</span> <span m='593300'>or</span> <span
  m='593370'>waste</span> <span m='593590'>money--</span> <span
  m='593910'>$100,000--</span> <span m='594800'>on</span> <span
  m='594870'>a</span> <span m='594900'>college</span> <span
  m='595200'>education?</span> <span m='595810'>You know,</span> <span
  m='596300'>for</span> <span m='596430'>$20</span> <span m='597840'>I'll</span>
  <span m='598380'>teach</span> <span m='598720'>you</span> <span
  m='599200'>in</span> <span m='599360'>five</span> <span
  m='599700'>minutes</span> <span m='600540'>what</span> <span
  m='600730'>you're</span> <span m='600850'>going</span> <span
  m='600990'>to</span> <span m='601070'>remember</span> <span
  m='602420'>five</span> <span m='602830'>years</span> <span
  m='603080'>after</span> <span m='603300'>you</span> <span
  m='603420'>graduate.</span> <span m='604320'>All</span> <span
  m='604760'>right?</span> </p><p><span m='605630'>So</span> <span
  m='606880'>let's</span> <span m='607090'>take</span> <span
  m='607240'>it</span> <span m='607350'>to an</span> <span
  m='607470'>extreme.</span> <span m='607960'>Here's</span> <span
  m='608090'>a</span> <span m='608180'>30</span> <span m='608470'>second</span>
  <span m='608830'>version</span> <span m='609950'>up</span> <span
  m='610140'>6006.</span> <span m='611550'>And</span> <span
  m='611660'>this</span> <span m='611770'>is</span> <span m='611920'>what</span>
  <span m='612260'>I</span> <span m='612370'>want</span> <span
  m='612590'>you</span> <span m='612690'>to</span> <span
  m='612740'>remember</span> <span m='614290'>five</span> <span
  m='614690'>years</span> <span m='615000'>or</span> <span m='615090'>10</span>
  <span m='615340'>years</span> <span m='615700'>or</span> <span
  m='615970'>whatever</span> <span m='616400'>after</span> <span
  m='616620'>you</span> <span m='616730'>graduate.</span> <span
  m='617180'>All</span> <span m='617560'>right?</span> <span
  m='618080'>And</span> <span m='618660'>maybe</span> <span
  m='618840'>the</span> <span m='618950'>10</span> <span
  m='619140'>second</span> <span m='619430'>version</span> <span
  m='619760'>as</span> <span m='620740'>polynomial</span> <span
  m='621330'>time</span> <span m='622110'>is</span> <span
  m='622320'>great.</span> <span m='623340'>OK?</span> <span
  m='623720'>Exponential</span> <span m='624370'>time</span> <span
  m='624720'>is</span> <span m='624870'>bad.</span> <span m='625800'>And</span>
  <span m='626030'>infinite</span> <span m='626450'>time</span> <span
  m='626780'>gets</span> <span m='626970'>you</span> <span
  m='627100'>fired.</span> <span m='628200'>OK?</span> </p><p><span
  m='629720'>So</span> <span m='630490'>that's</span> <span
  m='630700'>all</span> <span m='630820'>you</span> <span m='630890'>need</span>
  <span m='631040'>to</span> <span m='631090'>remember.</span> <span
  m='633390'>No,</span> <span m='633670'>that's</span> <span
  m='633870'>all</span> <span m='634110'>you</span> <span m='634210'>need</span>
  <span m='634340'>to</span> <span m='634380'>remember</span> <span
  m='634720'>for</span> <span m='634800'>the</span> <span
  m='634900'>final.</span> <span m='635350'>This</span> <span
  m='635500'>happens,</span> <span m='635920'>you know,</span> <span
  m='636030'>five</span> <span m='636380'>years</span> <span
  m='636640'>after</span> <span m='636920'>you</span> <span
  m='637040'>graduate.</span> <span m='638560'>So</span> <span
  m='638710'>you</span> <span m='638780'>need</span> <span m='638940'>to</span>
  <span m='638990'>remember</span> <span m='639240'>a</span> <span
  m='639290'>lot</span> <span m='639530'>more</span> <span m='639890'>if</span>
  <span m='639980'>you</span> <span m='640060'>want</span> <span
  m='640220'>to</span> <span m='640300'>take</span> <span m='640460'>your</span>
  <span m='640510'>quiz</span> <span m='640830'>next</span> <span
  m='641070'>week</span> <span m='641310'>and</span> <span m='641640'>the</span>
  <span m='641710'>final</span> <span m='641990'>exam.</span> </p><p><span
  m='642850'>But</span> <span m='643180'>I</span> <span m='643280'>think</span>
  <span m='643410'>that</span> <span m='643550'>summarized</span> <span
  m='644060'>over</span> <span m='644180'>here.</span> <span
  m='644450'>You</span> <span m='644540'>have</span> <span m='644690'>a</span>
  <span m='644750'>generic</span> <span m='645630'>shortest</span> <span
  m='646010'>path</span> <span m='646270'>algorithm.</span> <span
  m='647480'>And</span> <span m='648080'>you</span> <span
  m='648270'>realize</span> <span m='648720'>that</span> <span
  m='648950'>if</span> <span m='649180'>you</span> <span m='649240'>do</span>
  <span m='649380'>this</span> <span m='649590'>wrong</span> <span
  m='650530'>you</span> <span m='651000'>could</span> <span
  m='651650'>very</span> <span m='652000'>easily</span> <span
  m='653500'>get</span> <span m='653700'>into</span> <span m='653870'>a</span>
  <span m='653930'>situation</span> <span m='654450'>where</span> <span
  m='654680'>a</span> <span m='654760'>polynomial</span> <span
  m='655340'>time</span> <span m='655610'>algorithm,</span> <span
  m='656050'>and</span> <span m='656130'>we</span> <span m='656220'>know</span>
  <span m='656400'>one</span> <span m='656730'>for</span> <span
  m='656900'>Dijkstra,</span> <span m='657910'>turns into</span> <span
  m='658330'>exponential</span> <span m='659060'>time</span> <span
  m='659850'>in</span> <span m='660020'>the</span> <span m='660110'>worst</span>
  <span m='660390'>case,</span> <span m='660685'>you know,</span> <span
  m='660980'>for</span> <span m='661300'>a</span> <span m='661340'>graph</span>
  <span m='661640'>like</span> <span m='661850'>that</span> <span
  m='663010'>because</span> <span m='663200'>you're</span> <span
  m='663300'>selecting</span> <span m='663740'>edges</span> <span
  m='664640'>wrongly.</span> </p><p><span m='665890'>And</span> <span
  m='666540'>in</span> <span m='666700'>particular,</span> <span
  m='668290'>that's</span> <span m='668980'>problem</span> <span
  m='669250'>number</span> <span m='669460'>one.</span> <span
  m='669900'>And</span> <span m='670070'>problem</span> <span
  m='670310'>number</span> <span m='670540'>two</span> <span
  m='670800'>is</span> <span m='671440'>if</span> <span m='671550'>you</span>
  <span m='671630'>have</span> <span m='673180'>a</span> <span
  m='673270'>graph</span> <span m='673800'>that</span> <span
  m='674640'>isn't</span> <span m='674900'>what</span> <span
  m='675100'>you</span> <span m='675210'>expect.</span> <span
  m='676250'>In</span> <span m='676390'>this</span> <span
  m='676560'>case,</span> <span m='677770'>let's</span> <span
  m='677890'>say</span> <span m='677980'>you</span> <span
  m='678090'>expected</span> <span m='678660'>that</span> <span
  m='679400'>a</span> <span m='679470'>graph</span> <span m='679850'>with</span>
  <span m='680120'>no</span> <span m='680260'>negative</span> <span
  m='680570'>cycles</span> <span m='681030'>or</span> <span
  m='681080'>maybe</span> <span m='681290'>not</span> <span
  m='681440'>even</span> <span m='681740'>negative</span> <span
  m='682090'>edges</span> <span m='682400'>in</span> <span m='682520'>it.</span>
  <span m='683300'>You</span> <span m='683460'>could</span> <span
  m='683580'>easily</span> <span m='684400'>get</span> <span
  m='684510'>into</span> <span m='684640'>a</span> <span
  m='684700'>situation</span> <span m='685190'>where</span> <span
  m='685400'>your</span> <span m='685560'>termination</span> <span
  m='686060'>condition</span> <span m='686530'>is</span> <span
  m='686630'>such</span> <span m='686920'>that</span> <span
  m='687410'>your</span> <span m='687560'>algorithm</span> <span
  m='688150'>never</span> <span m='688370'>completes.</span> </p><p><span
  m='689520'>So</span> <span m='690400'>we</span> <span m='690530'>need</span>
  <span m='690670'>to</span> <span m='690730'>fix</span> <span
  m='691260'>problem</span> <span m='691560'>number</span> <span
  m='691800'>two</span> <span m='691990'>today</span> <span
  m='692910'>using</span> <span m='694660'>this</span> <span
  m='694870'>algorithm</span> <span m='695240'>called</span> <span
  m='695450'>Bellman-Ford.</span> <span m='696830'>And</span> <span
  m='697230'>as</span> <span m='697370'>it</span> <span m='697460'>turns</span>
  <span m='697730'>out,</span> <span m='699600'>this</span> <span
  m='700190'>algorithm</span> <span m='700760'>is</span> <span
  m='701830'>incredibly</span> <span m='702350'>straightforward.</span> <span
  m='703300'>I mean,</span> <span m='703490'>its</span> <span
  m='703610'>complexity</span> <span m='704200'>we'll</span> <span
  m='704370'>have</span> <span m='704490'>to</span> <span m='704570'>look</span>
  <span m='704750'>at.</span> <span m='705640'>But</span> <span
  m='705970'>from</span> <span m='706160'>a</span> <span
  m='706200'>description</span> <span m='706670'>standpoint,</span> <span
  m='707850'>it's</span> <span m='708070'>four</span> <span
  m='708280'>lines</span> <span m='708600'>of</span> <span
  m='708700'>code.</span> </p><p><span m='710440'>And</span> <span
  m='711370'>let</span> <span m='711560'>me</span> <span m='711610'>put</span>
  <span m='711750'>that</span> <span m='711880'>up.</span> <span
  m='714670'>So</span> <span m='714830'>Bellman-Ford</span> <span
  m='717780'>takes</span> <span m='718450'>a</span> <span
  m='718510'>graph,</span> <span m='719640'>weights,</span> <span
  m='720430'>and</span> <span m='720600'>a</span> <span m='720680'>source</span>
  <span m='721780'>s.</span> <span m='724270'>And</span> <span
  m='724650'>you</span> <span m='724810'>can</span> <span m='725000'>assume
  an</span> <span m='725390'>adjacency</span> <span m='731150'>list</span> <span
  m='731570'>specification</span> <span m='732310'>of</span> <span
  m='732480'>the</span> <span m='732570'>graph</span> <span m='732990'>or</span>
  <span m='733080'>the</span> <span m='733240'>representation</span> <span
  m='733840'>of</span> <span m='733930'>the</span> <span
  m='734000'>graph.</span> </p><p><span m='734840'>And</span> <span
  m='735020'>we</span> <span m='735110'>do</span> <span m='735290'>some</span>
  <span m='735480'>initialization.</span> <span m='737050'>It's</span> <span
  m='737410'>exactly</span> <span m='737780'>the</span> <span
  m='737890'>same</span> <span m='738200'>as</span> <span m='738700'>in</span>
  <span m='738920'>the</span> <span m='739030'>generic</span> <span
  m='739440'>case</span> <span m='740330'>except</span> <span
  m='740680'>the</span> <span m='741070'>d</span> <span m='741480'>values</span>
  <span m='741890'>will</span> <span m='742050'>still</span> <span
  m='742270'>be</span> <span m='742580'>looking</span> <span
  m='742860'>at</span> <span m='742960'>the d</span> <span
  m='743190'>values</span> <span m='743750'>and</span> <span
  m='743910'>talking</span> <span m='744180'>about</span> <span
  m='744780'>the</span> <span m='744930'>relaxation</span> <span
  m='745550'>operation.</span> <span m='746500'>So</span> <span m='746590'>we
  do</span> <span m='746890'>an</span> <span m='747140'>initialization.</span>
  <span m='748710'>And</span> <span m='748880'>then,</span> <span
  m='750220'>this</span> <span m='750670'>algorithm</span> <span
  m='751040'>has</span> <span m='751340'>multiple</span> <span
  m='751840'>passes</span> <span m='753210'>because</span> <span
  m='753430'>for</span> <span m='753620'>I</span> <span m='753820'>equals</span>
  <span m='754140'>1</span> <span m='756750'>to</span> <span m='757060'>v</span>
  <span m='757270'>minus</span> <span m='757620'>1.</span> <span
  m='758120'>So</span> <span m='758620'>it</span> <span m='758730'>does</span>
  <span m='759700'>v</span> <span m='759920'>minus</span> <span
  m='760200'>1</span> <span m='760420'>passes</span> <span
  m='761300'>roughly</span> <span m='761740'>order</span> <span
  m='762010'>v</span> <span m='762210'>passes</span> <span
  m='762650'>where</span> <span m='762820'>v</span> <span m='762980'>is</span>
  <span m='763350'>the</span> <span m='763470'>number</span> <span
  m='763700'>of</span> <span m='763860'>vertices.</span> </p><p><span
  m='765040'>And</span> <span m='765850'>in</span> <span m='766040'>each</span>
  <span m='766290'>of</span> <span m='766380'>these</span> <span
  m='766570'>passes</span> <span m='768030'>for</span> <span
  m='768290'>each</span> <span m='768660'>edge</span> <span m='771550'>u</span>
  <span m='771780'>v</span> <span m='772380'>belonging</span> <span
  m='772870'>to</span> <span m='773050'>e</span> <span m='773410'>relaxes</span>
  <span m='773920'>every</span> <span m='774240'>edge.</span> <span
  m='782850'>And</span> <span m='783730'>just</span> <span m='784040'>so</span>
  <span m='784470'>everyone</span> <span m='784790'>remembers,</span> <span
  m='787280'>relax</span> <span m='788110'>u, v, w</span> <span
  m='790260'>is</span> <span m='791260'>if</span> <span m='792590'>d</span>
  <span m='792790'>of</span> <span m='792950'>v</span> <span
  m='794060'>is</span> <span m='794250'>greater</span> <span
  m='794550'>than</span> <span m='795320'>d</span> <span m='795510'>of</span>
  <span m='795610'>u</span> <span m='797070'>plus</span> <span
  m='797460'>w</span> <span m='797800'>u</span> <span m='798140'>v</span> <span
  m='799910'>then</span> <span m='801050'>we'll</span> <span
  m='801300'>set</span> <span m='803110'>d</span> <span m='803475'>v</span>
  <span m='803840'>to</span> <span m='804330'>be--</span> <span m='809450'>and
  we</span> <span m='809700'>also</span> <span m='809950'>set</span> <span
  m='810110'>pi</span> <span m='810570'>v</span> <span m='811030'>to</span>
  <span m='811300'>be</span> <span m='811750'>u.</span> <span
  m='815200'>OK.</span> </p><p><span m='821080'>That's</span> <span
  m='821360'>relax</span> <span m='822710'>operation</span> <span
  m='823310'>over</span> <span m='823570'>here.</span> <span
  m='825730'>So</span> <span m='825860'>that's</span> <span
  m='827220'>the</span> <span m='827320'>algorithm.</span> <span
  m='828460'>And</span> <span m='829580'>if</span> <span m='831872'>you</span>
  <span m='833810'>know</span> <span m='834720'>magically</span> <span
  m='836100'>that</span> <span m='837230'>they're</span> <span
  m='837460'>no</span> <span m='837630'>negative</span> <span
  m='838680'>cycles</span> <span m='839930'>in</span> <span
  m='840130'>the</span> <span m='840230'>graph.</span> <span
  m='841840'>So</span> <span m='842240'>if  they're</span> <span
  m='842470'>no</span> <span m='842630'>negative</span> <span
  m='842940'>cycles</span> <span m='843410'>in</span> <span
  m='843560'>the</span> <span m='843660'>graph,</span> <span
  m='844810'>then</span> <span m='845240'>after</span> <span
  m='845680'>these--</span> <span m='846080'>we'll have</span> <span
  m='846340'>to</span> <span m='846400'>prove</span> <span
  m='846640'>this.</span> <span m='847360'>But</span> <span
  m='847420'>after</span> <span m='847740'>these</span> <span
  m='848025'>v</span> <span m='848310'>minus</span> <span m='848760'>1</span>
  <span m='849030'>passes</span> <span m='850130'>you're</span> <span
  m='850310'>going to</span> <span m='850370'>get</span> <span
  m='850630'>the</span> <span m='850720'>correct</span> <span
  m='851130'>shortest</span> <span m='851510'>pathways.</span> <span
  m='852900'>OK?</span> </p><p><span m='855760'>You</span> <span
  m='855890'>want</span> <span m='856070'>to do a</span> <span
  m='856110'>little</span> <span m='856290'>bit</span> <span
  m='856430'>more,</span> <span m='856800'>right?</span> <span
  m='857460'>I</span> <span m='857590'>motivated</span> <span
  m='859020'>what</span> <span m='859730'>we</span> <span m='859920'>want</span>
  <span m='860130'>Bellman-Ford</span> <span m='860770'>to</span> <span
  m='860860'>do</span> <span m='861950'>earlier</span> <span
  m='862220'>in</span> <span m='862310'>the</span> <span
  m='862390'>lecture.</span> <span m='863700'>So</span> <span
  m='863810'>you</span> <span m='863960'>can</span> <span m='864070'>also</span>
  <span m='864300'>do</span> <span m='864470'>a</span> <span
  m='864550'>check.</span> <span m='866010'>So</span> <span
  m='866170'>you</span> <span m='866280'>may</span> <span m='866350'>not</span>
  <span m='866570'>know</span> <span m='868220'>if</span> <span
  m='868290'>they're</span> <span m='868380'>negative</span> <span
  m='868970'>weight</span> <span m='869270'>cycles</span> <span
  m='869700'>or</span> <span m='869750'>not.</span> <span m='870750'>But</span>
  <span m='870880'>at</span> <span m='870960'>this</span> <span
  m='871160'>point,</span> <span m='871710'>you</span> <span
  m='871910'>can</span> <span m='872030'>say</span> <span m='872390'>I'm</span>
  <span m='872520'>going</span> <span m='872630'>to</span> <span
  m='872690'>do</span> <span m='872820'>one</span> <span m='873270'>more</span>
  <span m='874320'>pass</span> <span m='874900'>so</span> <span
  m='875110'>the</span> <span m='875910'>v</span> <span m='876310'>path--</span>
  <span m='876670'>the</span> <span m='876930'>v</span> <span m='877190'>is
  the</span> <span m='877470'>number</span> <span m='877690'>of</span> <span
  m='877750'>vertices--</span> <span m='880460'>over</span> <span
  m='880660'>the</span> <span m='880770'>graph.</span> </p><p><span
  m='881440'>So</span> <span m='881540'>for</span> <span m='881700'>each</span>
  <span m='882010'>edge</span> <span m='882300'>in</span> <span
  m='882380'>the</span> <span m='882480'>graph,</span> <span
  m='885350'>if</span> <span m='885600'>you</span> <span m='886900'>do</span>
  <span m='887120'>one</span> <span m='887340'>more</span> <span
  m='887540'>relaxation</span> <span m='888940'>and</span> <span
  m='889080'>you</span> <span m='889200'>see</span> <span m='889510'>that</span>
  <span m='889790'>d</span> <span m='890160'>v is</span> <span
  m='890530'>greater</span> <span m='890980'>than</span> <span m='892150'>d
  u</span> <span m='892500'>plus</span> <span m='894740'>w</span> <span
  m='895133'>u</span> <span m='895526'>v.</span> <span m='895920'>So</span>
  <span m='896100'>you're</span> <span m='896180'>not</span> <span
  m='896320'>doing</span> <span m='896490'>a</span> <span
  m='896520'>relaxation.</span> <span m='897050'>You're</span> <span
  m='897180'>doing</span> <span m='897370'>a</span> <span
  m='897430'>check</span> <span m='897970'>to</span> <span m='898290'>see</span>
  <span m='898500'>if</span> <span m='898590'>you</span> <span
  m='898700'>can</span> <span m='898830'>relax</span> <span
  m='900780'>the</span> <span m='900930'>edge.</span> <span
  m='902180'>Then</span> <span m='903960'>report</span> <span
  m='905940'>minus</span> <span m='906350'>v</span> <span
  m='909400'>negative</span> <span m='909730'>cycle</span> <span
  m='910030'>exists.</span> </p><p><span m='911860'>So</span> <span
  m='912010'>this</span> <span m='913950'>is</span> <span m='914150'>the</span>
  <span m='914260'>check.</span> <span m='915930'>And</span> <span
  m='916310'>the</span> <span m='916430'>first</span> <span
  m='916680'>part</span> <span m='916900'>is</span> <span m='917010'>the</span>
  <span m='917430'>computation.</span> <span m='922310'>So</span> <span
  m='922450'>that's</span> <span m='922610'>kind</span> <span
  m='922730'>of</span> <span m='922770'>neat.</span> <span m='923290'>I</span>
  <span m='923370'>mean,</span> <span m='923470'>it</span> <span
  m='923580'>fit's</span> <span m='923730'>on</span> <span m='923820'>a</span>
  <span m='923870'>board.</span> <span m='926720'>We</span> <span
  m='926860'>talk</span> <span m='927030'>about</span> <span
  m='927210'>the</span> <span m='927270'>correctness.</span> <span
  m='929140'>The</span> <span m='929220'>functionality,</span> <span
  m='930160'>I</span> <span m='930250'>hope</span> <span
  m='930430'>everyone</span> <span m='930750'>got.</span> <span
  m='931085'>Do</span> <span m='931420'>people</span> <span
  m='931610'>understand</span> <span m='933490'>what's</span> <span
  m='933710'>happening</span> <span m='933950'>here</span> <span m='934190'>with
  respect</span> <span m='934370'>to</span> <span
  m='934550'>functionality?</span> <span m='935100'>Any</span> <span
  m='935220'>questions?</span> <span m='938000'>Not</span> <span
  m='938160'>about</span> <span m='938340'>correctness</span> <span
  m='938760'>but</span> <span m='938900'>functionality?</span> <span
  m='939155'>Yeah?</span> </p><p><span m='939410'>AUDIENCE:</span> <span
  m='939861'>Where</span> <span m='940312'>does the</span> <span
  m='940763'>[INAUDIBLE]</span> <span m='941214'>get used</span> <span
  m='941665'>in the</span> <span m='942116'>formula?</span> </p><p><span
  m='942567'>PROFESSOR:</span> <span m='943020'>Oh,</span> <span m='943500'>it
  doesn't.</span> <span m='946780'>It's</span> <span m='946910'>just</span>
  <span m='947070'>a</span> <span m='947130'>counter</span> <span
  m='947760'>that</span> <span m='948020'>makes</span> <span
  m='948180'>sure</span> <span m='948380'>that</span> <span
  m='948550'>you</span> <span m='948710'>do</span> <span m='949160'>v</span>
  <span m='949580'>minus</span> <span m='949850'>1</span> <span
  m='950080'>passes.</span> <span m='954760'>So</span> <span
  m='954970'>what's</span> <span m='955160'>that</span> <span
  m='955660'>complexity</span> <span m='956330'>of</span> <span
  m='956460'>this</span> <span m='956620'>algorithm</span> <span
  m='957690'>using</span> <span m='958700'>the</span> <span
  m='958830'>best</span> <span m='959160'>data</span> <span
  m='959380'>structure</span> <span m='960710'>that</span> <span
  m='961320'>we</span> <span m='961460'>can</span> <span m='961580'>think</span>
  <span m='961770'>of?</span> <span m='963610'>Anyone?</span> <span
  m='967958'>Yeah,</span> <span m='968454'>go ahead.</span> </p><p><span
  m='968950'>AUDIENCE:</span> <span m='969446'>[INAUDIBLE]</span> <span
  m='969942'>v</span> <span m='970438'>plus</span> <span m='970934'>e</span>
  <span m='971430'>if you're</span> <span m='971926'>using a</span> <span
  m='972422'>[INAUDIBLE]</span> <span m='972918'>to</span> <span
  m='973414'>access</span> <span m='973910'>[INAUDIBLE]?</span> </p><p><span
  m='974410'>PROFESSOR:</span> <span m='974700'>v</span> <span
  m='974740'>plus</span> <span m='974890'>e?</span> </p><p><span
  m='975220'>AUDIENCE:</span> <span m='975676'>Or</span> <span
  m='976132'>v</span> <span m='976588'>e</span> <span m='977044'>plus</span>
  <span m='977500'>e.</span> </p><p><span m='978412'>PROFESSOR:</span> <span
  m='978870'>So</span> <span m='979160'>that</span> <span
  m='979410'>would</span> <span m='979530'>be?</span> </p><p><span
  m='980632'>AUDIENCE:</span> <span m='981040'>That's</span> <span
  m='981490'>using</span> <span m='981826'>a</span> <span
  m='982162'>dictionary?</span> </p><p><span m='982500'>PROFESSOR: Yeah, I
  know.</span> <span m='982660'>v</span> <span m='982790'>e</span> <span
  m='983250'>plus</span> <span m='983410'>e</span> <span m='983550'>would
  be?</span> <span m='984170'>That's</span> <span m='984490'>correct</span>
  <span m='984810'>but.</span> </p><p><span m='985260'>AUDIENCE:</span> <span
  m='985710'>[INAUDIBLE].</span> </p><p><span m='986120'>PROFESSOR:
  Right.</span> <span m='986360'>But I</span> <span m='986640'>mean</span> <span
  m='986940'>when do</span> <span m='987090'>v e plus</span> <span
  m='987370'>e</span> <span m='987760'>you can</span> <span
  m='989510'>ignore</span> <span m='989610'>the e.</span> <span
  m='991800'>So</span> <span m='994016'>say</span> <span m='994444'>you</span>
  <span m='994872'>have</span> <span m='995300'>just v</span> <span
  m='995670'>times</span> <span m='995770'>e.</span> <span m='996750'>All
  right.</span> <span m='997250'>Good.</span> <span m='997580'>Here you
  go.</span> </p><p><span m='1001190'>So</span> <span m='1001690'>this</span>
  <span m='1001920'>part</span> <span m='1002170'>here</span> <span
  m='1002420'>is</span> <span m='1002730'>v</span> <span
  m='1002780'>times</span> <span m='1003100'>e.</span> <span
  m='1004830'>And</span> <span m='1005570'>it</span> <span
  m='1005680'>doesn't</span> <span m='1005940'>really</span> <span
  m='1006050'>matter.</span> <span m='1006490'>I mean,</span> <span
  m='1006750'>you</span> <span m='1006900'>can use</span> <span m='1007020'>an
  array</span> <span m='1007130'>structure</span> <span
  m='1008660'>adjacency</span> <span m='1009410'>list.</span> <span
  m='1009990'>It's</span> <span m='1010120'>not</span> <span
  m='1010330'>like</span> <span m='1010540'>Dijkstra</span> <span
  m='1010820'>where</span> <span m='1011120'>we</span> <span
  m='1011220'>have</span> <span m='1011480'>this</span> <span
  m='1013340'>neat</span> <span m='1013640'>requirement</span> <span
  m='1014230'>for</span> <span m='1014380'>a</span> <span
  m='1014440'>priority</span> <span m='1014910'>queue</span> <span
  m='1015250'>and</span> <span m='1015340'>there's</span> <span
  m='1015480'>different</span> <span m='1015790'>ways</span> <span
  m='1016100'>of</span> <span m='1016230'>implementing</span> <span
  m='1016640'>the</span> <span m='1016730'>priority</span> <span
  m='1017210'>queue.</span> <span m='1018840'>This</span> <span
  m='1019150'>part</span> <span m='1020970'>would</span> <span
  m='1021160'>be</span> <span m='1021290'>order of</span> <span
  m='1021540'>v</span> <span m='1021580'>e.</span> <span m='1022280'>And</span>
  <span m='1022470'>that</span> <span m='1022790'>gives</span> <span
  m='1023020'>you</span> <span m='1023690'>the</span> <span
  m='1024010'>overall</span> <span m='1024410'>complexity.</span> </p><p><span
  m='1025060'>This</span> <span m='1025240'>part</span> <span
  m='1025430'>here</span> <span m='1025650'>is</span> <span
  m='1025750'>only</span> <span m='1025940'>one</span> <span
  m='1026260'>pass</span> <span m='1026950'>through</span> <span
  m='1027150'>the</span> <span m='1027250'>edges.</span> <span
  m='1027640'>So</span> <span m='1027720'>that's</span> <span
  m='1028060'>order</span> <span m='1028290'>e,</span> <span
  m='1028560'>like</span> <span m='1028740'>you</span> <span
  m='1028880'>said.</span> <span m='1030390'>So</span> <span
  m='1030520'>the</span> <span m='1031050'>complexities</span> <span
  m='1031589'>order</span> <span m='1031760'>v</span> <span
  m='1031800'>e.</span> <span m='1033329'>And</span> <span
  m='1033730'>this</span> <span m='1033900'>could</span> <span
  m='1034079'>be</span> <span m='1034520'>large,</span> <span
  m='1035220'>as</span> <span m='1035520'>I</span> <span m='1035579'>said</span>
  <span m='1035780'>before</span> <span m='1036970'>in,</span> <span
  m='1037290'>I</span> <span m='1037390'>think,</span> <span
  m='1037520'>the</span> <span m='1037589'>first</span> <span
  m='1037819'>lecture.</span> <span m='1038930'>e</span> <span
  m='1041800'>is</span> <span m='1042010'>order of</span> <span
  m='1042250'>v</span> <span m='1042400'>square</span> <span
  m='1043329'>in</span> <span m='1045520'>a</span> <span
  m='1045680'>simple</span> <span m='1045980'>graph.</span> <span
  m='1046710'>So</span> <span m='1046859'>you</span> <span
  m='1047040'>might</span> <span m='1047210'>end</span> <span
  m='1047380'>up</span> <span m='1047569'>with</span> <span m='1048109'>a
  v</span> <span m='1048440'>cubed</span> <span m='1048720'>complexity</span>
  <span m='1049240'>if</span> <span m='1049330'>you</span> <span
  m='1049440'>run</span> <span m='1049630'>Bellman-Ford.</span> </p><p><span
  m='1050690'>So</span> <span m='1050820'>there's</span> <span
  m='1051000'>no</span> <span m='1051130'>question</span> <span
  m='1051510'>that</span> <span m='1052010'>Bellman-Ford</span> <span
  m='1053410'>is,</span> <span m='1054220'>from</span> <span
  m='1054340'>a</span> <span m='1054410'>practical</span> <span
  m='1054880'>standpoint,</span> <span m='1056050'>substantially</span> <span
  m='1056760'>slower</span> <span m='1057170'>than</span> <span
  m='1057340'>Dijkstra.</span> <span m='1058880'>You</span> <span
  m='1059110'>can</span> <span m='1059230'>get</span> <span
  m='1059430'>Dijkstra</span> <span m='1059830'>down</span> <span
  m='1061300'>to</span> <span m='1064150'>linear</span> <span
  m='1064480'>complexity.</span> <span m='1066460'>But</span> <span
  m='1067030'>this</span> <span m='1067220'>would</span> <span
  m='1067790'>potentially,</span> <span m='1068210'>at</span> <span
  m='1068350'>least</span> <span m='1068470'>in</span> <span
  m='1068560'>terms</span> <span m='1068750'>of</span> <span
  m='1068840'>vertices,</span> <span m='1069050'>be</span> <span
  m='1070970'>cubic</span> <span m='1071280'>complexity.</span> </p><p><span
  m='1072320'>So</span> <span m='1072760'>when</span> <span
  m='1072890'>you</span> <span m='1072970'>have</span> <span
  m='1073100'>a</span> <span m='1073150'>chance,</span> <span
  m='1073460'>you</span> <span m='1073550'>want</span> <span
  m='1073650'>to</span> <span m='1073690'>use</span> <span
  m='1073940'>Dijkstra.</span> <span m='1075020'>And</span> <span
  m='1075230'>you're</span> <span m='1075360'>forced</span> <span
  m='1075680'>to</span> <span m='1075740'>use</span> <span
  m='1075910'>Bellman-Ford</span> <span m='1076520'>because</span> <span
  m='1077320'>you</span> <span m='1077470'>could</span> <span
  m='1077600'>potentially</span> <span m='1078010'>have</span> <span
  m='1078350'>negative</span> <span m='1078620'>weight</span> <span
  m='1078840'>cycles</span> <span m='1079510'>while</span> <span
  m='1079720'>you're</span> <span m='1079830'>stuck</span> <span
  m='1080030'>with</span> <span m='1080130'>that.</span> <span m='1081100'>All
  right?</span> <span m='1083100'>OK,</span> <span m='1083440'>so</span> <span
  m='1083600'>why</span> <span m='1083750'>does</span> <span
  m='1083870'>this</span> <span m='1084020'>work?</span> <span
  m='1084770'>This</span> <span m='1085160'>looks</span> <span
  m='1085420'>a</span> <span m='1085470'>bit</span> <span
  m='1085630'>like</span> <span m='1086110'>magic.</span> <span
  m='1086830'>It</span> <span m='1086940'>turns</span> <span
  m='1087130'>out</span> <span m='1087960'>we</span> <span
  m='1088110'>can</span> <span m='1088430'>actually</span> <span
  m='1088730'>do</span> <span m='1088980'>a</span> <span
  m='1089050'>fairly</span> <span m='1090500'>straightforward</span> <span
  m='1091200'>proof</span> <span m='1092260'>of</span> <span
  m='1092430'>correctness</span> <span m='1092875'>of</span> <span
  m='1093320'>Bellman-Ford.</span> </p><p><span m='1094480'>And</span> <span
  m='1094610'>we're</span> <span m='1094690'>going</span> <span
  m='1094790'>to</span> <span m='1094860'>do</span> <span m='1094980'>two</span>
  <span m='1095180'>things.</span> <span m='1095985'>We're</span> <span
  m='1096350'>going</span> <span m='1096640'>to</span> <span
  m='1096890'>not</span> <span m='1097110'>only</span> <span
  m='1097720'>show</span> <span m='1098240'>that</span> <span
  m='1098890'>if</span> <span m='1099010'>negative</span> <span
  m='1099550'>weight</span> <span m='1099850'>cycles</span> <span
  m='1100680'>don't</span> <span m='1100960'>exist</span> <span
  m='1102340'>that</span> <span m='1103080'>this</span> <span
  m='1103270'>will</span> <span m='1105080'>correctly</span> <span
  m='1105540'>compute</span> <span m='1106720'>shorter</span> <span
  m='1107120'>stats.</span> <span m='1107720'>But</span> <span
  m='1107930'>we</span> <span m='1108270'>also</span> <span
  m='1108540'>have</span> <span m='1108680'>to</span> <span
  m='1108730'>show</span> <span m='1109000'>that</span> <span
  m='1109500'>it</span> <span m='1109610'>will</span> <span
  m='1109730'>detect</span> <span m='1110910'>negative</span> <span
  m='1111320'>weight</span> <span m='1111480'>cycles</span> <span
  m='1111930'>if</span> <span m='1112050'>they</span> <span
  m='1112320'>in</span> <span m='1112430'>fact</span> <span
  m='1112670'>exist.</span> <span m='1113900'>So</span> <span
  m='1114040'>there's</span> <span m='1114240'>two</span> <span
  m='1114370'>parts</span> <span m='1114720'>to</span> <span
  m='1114800'>this.</span> <span m='1115670'>And</span> <span
  m='1116160'>let's</span> <span m='1116380'>start.</span> </p><p><span
  m='1119480'>So</span> <span m='1121690'>what</span> <span
  m='1121830'>we</span> <span m='1121940'>have</span> <span
  m='1122140'>here</span> <span m='1122470'>for</span> <span
  m='1122570'>this</span> <span m='1122770'>algorithm</span> <span
  m='1123840'>is</span> <span m='1128120'>that</span> <span
  m='1128680'>it</span> <span m='1128880'>can</span> <span
  m='1130030'>guarantee</span> <span m='1131580'>in a</span> <span
  m='1132050'>graph</span> <span m='1132710'>g</span> <span
  m='1135030'>equals</span> <span m='1135440'>v</span> <span
  m='1135705'>E.</span> <span m='1141730'>If</span> <span m='1141870'>it</span>
  <span m='1141990'>contains</span> <span m='1142950'>no</span> <span
  m='1144260'>negative</span> <span m='1144690'>weight</span> <span
  m='1145040'>cycles</span> <span m='1151130'>then</span> <span
  m='1153150'>after</span> <span m='1155910'>Bellman-Ford</span> <span
  m='1157880'>finishes</span> <span m='1158530'>execution,</span> <span
  m='1161850'>d</span> <span m='1162240'>v</span> <span
  m='1162630'>equals</span> <span m='1164120'>delta</span> <span
  m='1164720'>s</span> <span m='1165000'>v</span> <span m='1167880'>for
  all</span> <span m='1170120'>v</span> <span m='1170370'>belonging</span> <span
  m='1170730'>to</span> <span m='1170830'>v.</span> <span m='1172230'>All</span>
  <span m='1172320'>right?</span> </p><p><span m='1173300'>And</span> <span
  m='1173480'>then</span> <span m='1173800'>there's</span> <span
  m='1175100'>that.</span> <span m='1175460'>That's</span> <span
  m='1175550'>the</span> <span m='1175660'>theorem</span> <span
  m='1175930'>you</span> <span m='1176020'>want</span> <span
  m='1176120'>to</span> <span m='1176180'>prove.</span> <span
  m='1177290'>And</span> <span m='1177950'>the</span> <span
  m='1178110'>second</span> <span m='1178780'>piece</span> <span
  m='1179050'>of</span> <span m='1179190'>it</span> <span m='1179520'>is</span>
  <span m='1183620'>corollary</span> <span m='1184230'>that</span> <span
  m='1184360'>we</span> <span m='1184440'>want</span> <span
  m='1184590'>to</span> <span m='1184650'>prove.</span> <span
  m='1186210'>And</span> <span m='1186350'>that</span> <span
  m='1186470'>has</span> <span m='1186630'>to</span> <span m='1186710'>do</span>
  <span m='1186810'>with</span> <span m='1186940'>the</span> <span
  m='1186990'>check.</span> <span m='1188260'>And</span> <span
  m='1188360'>this</span> <span m='1188580'>says</span> <span
  m='1191090'>if</span> <span m='1191180'>a</span> <span
  m='1191270'>value</span> <span m='1193350'>of</span> <span
  m='1193610'>d</span> <span m='1193900'>of</span> <span m='1194070'>v</span>
  <span m='1195460'>fails</span> <span m='1196040'>to</span> <span
  m='1196150'>converge</span> <span m='1201480'>after</span> <span
  m='1203850'>v</span> <span m='1204120'>minus</span> <span m='1204450'>1</span>
  <span m='1205530'>passes</span> <span m='1209840'>there</span> <span
  m='1210130'>exists</span> <span m='1214060'>a</span> <span
  m='1214150'>negative</span> <span m='1214500'>weight</span> <span
  m='1214680'>cycle</span> <span m='1216300'>reachable</span> <span
  m='1216760'>from</span> <span m='1216950'>s.</span> </p><p><span
  m='1224120'>So</span> <span m='1224230'>those</span> <span
  m='1224810'>are</span> <span m='1224880'>the</span> <span
  m='1224980'>two</span> <span m='1225110'>things</span> <span
  m='1226290'>that</span> <span m='1226470'>we</span> <span
  m='1226560'>need</span> <span m='1226730'>to</span> <span
  m='1226770'>show.</span> <span m='1229400'>I'll</span> <span
  m='1229430'>probably</span> <span m='1229790'>take a</span> <span
  m='1229830'>few</span> <span m='1229990'>minutes</span> <span
  m='1230220'>to</span> <span m='1230300'>do</span> <span
  m='1230370'>each</span> <span m='1230550'>of</span> <span
  m='1230640'>these.</span> <span m='1231670'>That</span> <span
  m='1231930'>theorem</span> <span m='1232210'>is</span> <span
  m='1233350'>a</span> <span m='1233410'>little</span> <span
  m='1233680'>more</span> <span m='1233900'>involved.</span> <span
  m='1237580'>So</span> <span m='1237760'>one</span> <span m='1237880'>of</span>
  <span m='1237920'>the</span> <span m='1238000'>first</span> <span
  m='1238210'>things</span> <span m='1238330'>that</span> <span
  m='1238440'>we</span> <span m='1238520'>have</span> <span
  m='1238670'>to</span> <span m='1238750'>do</span> <span m='1239540'>in</span>
  <span m='1239680'>order</span> <span m='1239810'>to</span> <span
  m='1239890'>prove</span> <span m='1240110'>this</span> <span
  m='1240230'>theorem</span> <span m='1241940'>is</span> <span
  m='1242240'>to</span> <span m='1242830'>think</span> <span
  m='1243070'>about</span> <span m='1244170'>exactly</span> <span
  m='1245240'>what</span> <span m='1249360'>the</span> <span
  m='1249470'>shortest</span> <span m='1249880'>path</span> <span
  m='1250280'>corresponds</span> <span m='1250880'>to</span> <span
  m='1252090'>in</span> <span m='1252260'>a</span> <span
  m='1252310'>generic</span> <span m='1252810'>sense.</span> </p><p><span
  m='1253310'>So</span> <span m='1253470'>when we</span> <span
  m='1253700'>have</span> <span m='1255160'>source</span> <span
  m='1255550'>vertex</span> <span m='1256990'>s</span> <span
  m='1258390'>and</span> <span m='1258620'>you</span> <span
  m='1258720'>have</span> <span m='1258900'>a</span> <span
  m='1258980'>particular</span> <span m='1259400'>vertex</span> <span
  m='1259860'>v</span> <span m='1261370'>then</span> <span
  m='1262310'>there's</span> <span m='1262810'>the</span> <span
  m='1262900'>picture</span> <span m='1265790'>that</span> <span
  m='1265960'>we</span> <span m='1266020'>need</span> <span
  m='1266180'>to</span> <span m='1266470'>keep</span> <span
  m='1266670'>in</span> <span m='1266750'>mind</span> <span
  m='1267330'>as</span> <span m='1267500'>we</span> <span m='1267590'>try</span>
  <span m='1267760'>and</span> <span m='1267860'>prove</span> <span
  m='1268120'>this</span> <span m='1268290'>theorem.</span> <span
  m='1269780'>So</span> <span m='1269920'>you</span> <span
  m='1270000'>have</span> <span m='1270130'>v0,</span> <span
  m='1270840'>v1,</span> <span m='1273080'>v2,</span> <span m='1275480'>et
  cetera</span> <span m='1276340'>all</span> <span m='1276530'>the</span> <span
  m='1276610'>way</span> <span m='1276740'>to</span> <span
  m='1276830'>vk.</span> </p><p><span m='1278230'>This</span> <span
  m='1279070'>is</span> <span m='1279300'>my</span> <span
  m='1279420'>vertex</span> <span m='1279900'>v.</span> <span
  m='1280730'>This</span> <span m='1280880'>is</span> <span
  m='1281040'>s.</span> <span m='1281460'>So</span> <span m='1281690'>s</span>
  <span m='1282030'>equals</span> <span m='1282410'>v0.</span> <span
  m='1284860'>V</span> <span m='1285020'>equals</span> <span
  m='1285390'>vk.</span> <span m='1286150'>All right?</span> <span
  m='1286870'>So</span> <span m='1287770'>I'm</span> <span
  m='1287910'>going</span> <span m='1288020'>to</span> <span
  m='1288060'>have</span> <span m='1288190'>a</span> <span
  m='1288250'>path</span> <span m='1288690'>p.</span> <span
  m='1289970'>That</span> <span m='1290200'>is</span> <span
  m='1290950'>v0,</span> <span m='1291840'>v1,</span> <span
  m='1293326'>all</span> <span m='1293670'>the</span> <span
  m='1293870'>way</span> <span m='1294010'>to</span> <span
  m='1294110'>vk.</span> <span m='1295790'>OK?</span> </p><p><span
  m='1300810'>How</span> <span m='1301040'>big</span> <span
  m='1301410'>is</span> <span m='1301720'>k</span> <span m='1303310'>in</span>
  <span m='1304020'>the</span> <span m='1304130'>worst</span> <span
  m='1304420'>case?</span> <span m='1306200'>How</span> <span
  m='1306370'>big</span> <span m='1306610'>is</span> <span m='1306770'>k?</span>
  <span m='1310940'>Anybody?</span> <span m='1311950'>How</span> <span
  m='1312030'>big</span> <span m='1312140'>is</span> <span m='1312210'>k?</span>
  <span m='1315150'>It's</span> <span m='1315600'>up</span> <span
  m='1315770'>on</span> <span m='1315860'>the</span> <span
  m='1315920'>black</span> <span m='1316170'>board.</span> </p><p><span
  m='1316535'>AUDIENCE:</span> <span m='1316900'>[INAUDIBLE].</span>
  </p><p><span m='1318190'>PROFESSOR: v</span> <span m='1318620'>minus</span>
  <span m='1318900'>1,</span> <span m='1319390'>right?</span> <span
  m='1319660'>Why?</span> <span m='1323370'>What</span> <span
  m='1323500'>would</span> <span m='1323940'>happen if k is</span> <span
  m='1324210'>larger</span> <span m='1324550'>than</span> <span
  m='1325390'>v</span> <span m='1325530'>minus</span> <span
  m='1325960'>1?</span> <span m='1328520'>I'd have a cycle.</span> <span
  m='1329550'>I'd</span> <span m='1329710'>be</span> <span
  m='1329830'>visiting</span> <span m='1330240'>a</span> <span
  m='1330290'>vertex</span> <span m='1330720'>more</span> <span
  m='1330880'>than</span> <span m='1331010'>once.</span> <span
  m='1331780'>And</span> <span m='1331910'>it</span> <span
  m='1332010'>wouldn't</span> <span m='1332200'>be</span> <span
  m='1332590'>a</span> <span m='1332720'>simple</span> <span
  m='1333090'>path.</span> <span m='1333930'>Right?</span> </p><p><span
  m='1337300'>So</span> <span m='1337500'>k</span> <span m='1337820'>is</span>
  <span m='1338150'>less</span> <span m='1338310'>than</span> <span
  m='1338410'>or</span> <span m='1338530'>equal</span> <span
  m='1338790'>to</span> <span m='1338950'>v</span> <span
  m='1339160'>minus</span> <span m='1339490'>1</span> <span
  m='1341160'>else</span> <span m='1342880'>I'd</span> <span
  m='1342990'>have</span> <span m='1343140'>a</span> <span
  m='1343200'>cycle.</span> <span m='1344810'>OK?</span> <span
  m='1346590'>I</span> <span m='1346690'>wouldn't</span> <span
  m='1346830'>have</span> <span m='1346940'>a</span> <span
  m='1346990'>simple</span> <span m='1347230'>path.</span> <span
  m='1348630'>And</span> <span m='1348750'>we're</span> <span
  m='1348850'>looking</span> <span m='1349110'>for</span> <span
  m='1349580'>the</span> <span m='1349680'>shortest,</span> <span
  m='1350730'>simple</span> <span m='1351100'>paths</span> <span
  m='1351520'>because</span> <span m='1351840'>if</span> <span
  m='1351970'>you</span> <span m='1352150'>ever</span> <span
  m='1352430'>get</span> <span m='1352630'>to</span> <span
  m='1352700'>the</span> <span m='1352800'>point</span> <span
  m='1353150'>where--</span> <span m='1353740'>why are we</span> <span
  m='1353880'>looking</span> <span m='1354160'>for</span> <span
  m='1354310'>shortest,</span> <span m='1354620'>simple</span> <span
  m='1355010'>paths?</span> </p><p><span m='1355470'>Well,</span> <span
  m='1357110'>in</span> <span m='1357240'>this</span> <span
  m='1357410'>case,</span> <span m='1359130'>we're</span> <span
  m='1359210'>looking</span> <span m='1359460'>for</span> <span
  m='1359550'>shortest,</span> <span m='1359830'>simple</span> <span
  m='1360120'>paths.</span> <span m='1360570'>And</span> <span
  m='1360700'>if</span> <span m='1360810'>there's</span> <span
  m='1360940'>a</span> <span m='1361000'>negative</span> <span
  m='1361370'>cycle,</span> <span m='1363350'>we're</span> <span
  m='1363700'>in</span> <span m='1363800'>trouble</span> <span
  m='1364620'>because</span> <span m='1364980'>the</span> <span
  m='1365030'>shortest</span> <span m='1365420'>path</span> <span
  m='1365810'>is</span> <span m='1365990'>not</span> <span
  m='1366900'>necessarily</span> <span m='1368050'>the</span> <span
  m='1368740'>simple</span> <span m='1369040'>path</span> <span
  m='1369410'>because</span> <span m='1369600'>you</span> <span
  m='1369690'>could</span> <span m='1369800'>go</span> <span m='1369940'>around
  the</span> <span m='1370180'>cycle</span> <span m='1370580'>a</span> <span
  m='1370630'>bunch</span> <span m='1370830'>of</span> <span
  m='1370890'>times.</span> <span m='1372730'>I'll</span> <span
  m='1372860'>get</span> <span m='1373030'>back</span> <span
  m='1373210'>to</span> <span m='1373290'>that.</span> </p><p><span
  m='1374080'>But</span> <span m='1375220'>in</span> <span
  m='1375760'>the</span> <span m='1375850'>case</span> <span
  m='1376070'>where</span> <span m='1376470'>we're</span> <span
  m='1376640'>trying</span> <span m='1376830'>to</span> <span
  m='1376900'>prove</span> <span m='1377100'>the</span> <span
  m='1377190'>theorem,</span> <span m='1378680'>we</span> <span
  m='1378830'>know</span> <span m='1379020'>that</span> <span
  m='1379190'>no</span> <span m='1379700'>negative</span> <span
  m='1380090'>cycles</span> <span m='1380480'>exist.</span> <span m='1380910'>We
  can</span> <span m='1381400'>assume that</span> <span m='1381520'>no</span>
  <span m='1381670'>negative</span> <span m='1381990'>cycles</span> <span
  m='1382350'>exist</span> <span m='1382740'>for</span> <span
  m='1382830'>the</span> <span m='1382920'>case</span> <span
  m='1383130'>of</span> <span m='1383210'>the</span> <span
  m='1383320'>theorem.</span> <span m='1384060'>And</span> <span
  m='1384190'>we</span> <span m='1384250'>want</span> <span
  m='1384390'>to</span> <span m='1384440'>show</span> <span
  m='1384670'>that</span> <span m='1385480'>Bellman-Ford</span> <span
  m='1387450'>correctly</span> <span m='1387940'>computes</span> <span
  m='1389590'>each</span> <span m='1389780'>of</span> <span
  m='1389840'>the</span> <span m='1389920'>shortest</span> <span
  m='1390240'>path</span> <span m='1390500'>weights.</span> <span
  m='1391230'>And</span> <span m='1391380'>in</span> <span
  m='1391460'>that</span> <span m='1391650'>case,</span> <span
  m='1392310'>there's</span> <span m='1392480'>no negative</span> <span
  m='1392900'>weight</span> <span m='1393110'>cycles.</span> </p><p><span
  m='1393970'>We're</span> <span m='1394100'>guaranteed</span> <span
  m='1394860'>that</span> <span m='1395020'>k</span> <span m='1395220'>is</span>
  <span m='1395370'>less</span> <span m='1395540'>than</span> <span
  m='1395640'>or</span> <span m='1395730'>equal</span> <span
  m='1395970'>to</span> <span m='1396060'>v</span> <span
  m='1396190'>minus</span> <span m='1396470'>1.</span> <span m='1396955'>All
  right?</span> <span m='1398880'>Everybody</span> <span m='1399430'>buy
  that?</span> <span m='1401190'>Good.</span> <span m='1401880'>All</span> <span
  m='1401980'>right.</span> <span m='1402170'>So</span> <span
  m='1402250'>that's</span> <span m='1402490'>the</span> <span
  m='1402570'>picture</span> <span m='1402860'>I</span> <span
  m='1402880'>want</span> <span m='1403080'>you</span> <span m='1403200'>keep
  in</span> <span m='1403440'>mind.</span> <span m='1404500'>Let's</span> <span
  m='1406200'>dive</span> <span m='1406480'>in</span> <span
  m='1406580'>and</span> <span m='1406700'>prove</span> <span
  m='1406940'>this</span> <span m='1407660'>theorem.</span> <span
  m='1410475'>And</span> <span m='1410956'>we</span> <span
  m='1411920'>prove</span> <span m='1412150'>it</span> <span
  m='1412590'>using</span> <span m='1412840'>induction.</span> </p><p><span
  m='1431560'>So</span> <span m='1431770'>let</span> <span m='1432030'>v</span>
  <span m='1432290'>be</span> <span m='1433040'>any</span> <span
  m='1433450'>vertex.</span> <span m='1434830'>And</span> <span
  m='1435100'>let's</span> <span m='1435260'>say</span> <span
  m='1435380'>that</span> <span m='1435560'>we're</span> <span
  m='1435650'>looking</span> <span m='1435860'>at a</span> <span
  m='1435960'>path.</span> <span m='1437780'>v0,</span> <span
  m='1438155'>v1,</span> <span m='1439530'>v2,</span> <span
  m='1439690'>to</span> <span m='1440670'>vk.</span> <span
  m='1441780'>And</span> <span m='1441930'>like</span> <span
  m='1442110'>I</span> <span m='1442150'>said,</span> <span
  m='1442910'>from</span> <span m='1443120'>v0</span> <span
  m='1443483'>equals</span> <span m='1444210'>s</span> <span
  m='1445470'>to</span> <span m='1446080'>vk</span> <span
  m='1446570'>equals</span> <span m='1446930'>v.</span> <span
  m='1452700'>And</span> <span m='1453250'>in</span> <span
  m='1453410'>particular,</span> <span m='1453940'>I'm</span> <span
  m='1454100'>not</span> <span m='1454270'>going</span> <span
  m='1454370'>to</span> <span m='1454440'>say</span> <span
  m='1454700'>that</span> <span m='1454990'>this</span> <span
  m='1455210'>path</span> <span m='1458602'>p</span> <span m='1461530'>is</span>
  <span m='1462270'>a</span> <span m='1462530'>shortest</span> <span
  m='1462830'>path</span> <span m='1467600'>with</span> <span
  m='1467740'>the</span> <span m='1467810'>minimum</span> <span
  m='1468170'>number</span> <span m='1468430'>of</span> <span
  m='1468530'>edges.</span> </p><p><span m='1473550'>So</span> <span
  m='1473600'>there</span> <span m='1473690'>may</span> <span
  m='1473820'>be</span> <span m='1473950'>many</span> <span
  m='1474200'>shortest</span> <span m='1474520'>paths.</span> <span
  m='1475770'>And</span> <span m='1476180'>I'm</span> <span
  m='1476260'>going</span> <span m='1476360'>to</span> <span
  m='1476420'>pick</span> <span m='1476720'>the</span> <span
  m='1476810'>one</span> <span m='1477110'>that</span> <span
  m='1477230'>has</span> <span m='1477440'>the</span> <span
  m='1477530'>minimum</span> <span m='1477830'>number</span> <span
  m='1478040'>of</span> <span m='1478130'>edges.</span> <span
  m='1479040'>If</span> <span m='1479190'>there's</span> <span
  m='1479370'>a</span> <span m='1479410'>unique</span> <span
  m='1479730'>shortest</span> <span m='1480070'>path,</span> <span
  m='1480430'>then</span> <span m='1481080'>that's</span> <span
  m='1481270'>a</span> <span m='1481320'>given.</span> <span
  m='1482020'>But</span> <span m='1482140'>it</span> <span
  m='1482210'>may</span> <span m='1482340'>be</span> <span
  m='1482450'>that</span> <span m='1482590'>I</span> <span
  m='1482650'>have</span> <span m='1482850'>a</span> <span
  m='1482930'>path</span> <span m='1483770'>with</span> <span
  m='1484560'>four</span> <span m='1484820'>edges</span> <span
  m='1486450'>that</span> <span m='1486580'>has</span> <span
  m='1486750'>the</span> <span m='1486830'>same</span> <span
  m='1487060'>weight</span> <span m='1487270'>as</span> <span
  m='1487380'>another</span> <span m='1487540'>path</span> <span
  m='1487860'>with</span> <span m='1487940'>three</span> <span
  m='1488170'>edges.</span> <span m='1488880'>I'm</span> <span
  m='1489040'>going</span> <span m='1489150'>to</span> <span
  m='1489200'>pick</span> <span m='1489360'>the</span> <span
  m='1489440'>one</span> <span m='1489810'>that</span> <span
  m='1489940'>has</span> <span m='1490150'>three</span> <span
  m='1490360'>edges.</span> <span m='1491390'>OK?</span> </p><p><span
  m='1491890'>So</span> <span m='1492130'>it</span> <span m='1492560'>may</span>
  <span m='1492670'>not</span> <span m='1492860'>be</span> <span
  m='1493620'>unique</span> <span m='1494020'>with</span> <span
  m='1494160'>respect</span> <span m='1494510'>that they're</span> <span
  m='1494820'>not</span> <span m='1494980'>necessarily</span> <span
  m='1495380'>unique</span> <span m='1495620'>shortest</span> <span
  m='1495950'>paths.</span> <span m='1496530'>But</span> <span m='1496680'>I
  can</span> <span m='1496810'>certainly</span> <span m='1497020'>pick</span>
  <span m='1497200'>one.</span> <span m='1499900'>And</span> <span
  m='1502010'>no</span> <span m='1502190'>negative</span> <span
  m='1502550'>weight</span> <span m='1502820'>cycles</span> <span
  m='1504880'>implies</span> <span m='1505590'>that</span> <span
  m='1506610'>p</span> <span m='1506850'>is</span> <span
  m='1507000'>simple.</span> <span m='1510390'>And</span> <span
  m='1511940'>that</span> <span m='1512140'>implies</span> <span
  m='1512620'>that</span> <span m='1513430'>k</span> <span m='1513760'>is</span>
  <span m='1514230'>less</span> <span m='1514450'>than</span> <span
  m='1514560'>or</span> <span m='1514660'>equal</span> <span
  m='1514910'>to</span> <span m='1515050'>v</span> <span
  m='1515220'>minus</span> <span m='1515520'>1,</span> <span
  m='1516660'>which</span> <span m='1516890'>is</span> <span
  m='1516960'>what</span> <span m='1517120'>I</span> <span
  m='1517180'>just</span> <span m='1517400'>argued.</span> </p><p><span
  m='1519470'>Now</span> <span m='1520460'>keep</span> <span
  m='1520630'>in</span> <span m='1520710'>mind</span> <span
  m='1521010'>that</span> <span m='1521200'>picture</span> <span
  m='1522710'>over</span> <span m='1522880'>there</span> <span
  m='1523100'>to</span> <span m='1523200'>the</span> <span
  m='1523290'>right.</span> <span m='1524560'>And</span> <span
  m='1527620'>basically,</span> <span m='1528100'>the</span> <span
  m='1528180'>argument</span> <span m='1528530'>is</span> <span
  m='1528600'>going</span> <span m='1528720'>to</span> <span
  m='1528760'>go</span> <span m='1528960'>as</span> <span
  m='1529050'>follows.</span> <span m='1530850'>Remember</span> <span
  m='1531240'>that</span> <span m='1531430'>I'm</span> <span
  m='1531570'>going</span> <span m='1531830'>to</span> <span
  m='1532280'>be</span> <span m='1532550'>relaxing</span> <span
  m='1533250'>every</span> <span m='1533930'>edge</span> <span
  m='1535730'>in</span> <span m='1535940'>each</span> <span
  m='1536370'>pass</span> <span m='1536760'>of</span> <span
  m='1536870'>the</span> <span m='1537010'>algorithm.</span> <span
  m='1538310'>OK?</span> <span m='1539120'>There's</span> <span
  m='1539360'>no</span> <span m='1541810'>choices</span> <span
  m='1542230'>here.</span> <span m='1542450'>I'm</span> <span
  m='1542540'>going</span> <span m='1542650'>be</span> <span
  m='1542780'>relaxing</span> <span m='1543170'>every</span> <span
  m='1543480'>edge in</span> <span m='1543830'>each</span> <span
  m='1544060'>pass of the</span> <span m='1544460'>algorithm.</span>
  </p><p><span m='1545490'>And</span> <span m='1545970'>essentially,</span>
  <span m='1546410'>the</span> <span m='1546510'>proof</span> <span
  m='1546750'>goes</span> <span m='1546990'>as</span> <span
  m='1547110'>follows.</span> <span m='1548680'>I'm</span> <span
  m='1548760'>going</span> <span m='1549070'>to</span> <span
  m='1549200'>be</span> <span m='1549360'>moving</span> <span
  m='1550500'>closer</span> <span m='1550910'>and</span> <span
  m='1551010'>closer</span> <span m='1552564'>to</span> <span
  m='1553340'>vk</span> <span m='1553930'>and</span> <span
  m='1554150'>constructing</span> <span m='1555770'>this</span> <span
  m='1556370'>shortest</span> <span m='1556840'>path</span> <span
  m='1558180'>at</span> <span m='1558390'>every</span> <span
  m='1558730'>pass.</span> <span m='1560170'>So</span> <span
  m='1560270'>at</span> <span m='1560410'>some</span> <span
  m='1560700'>point</span> <span m='1562490'>in</span> <span
  m='1562640'>the</span> <span m='1562740'>first</span> <span
  m='1563150'>pass,</span> <span m='1564140'>I'm</span> <span
  m='1564280'>going</span> <span m='1564430'>to</span> <span
  m='1564520'>relax</span> <span m='1565010'>this</span> <span
  m='1565230'>edge</span> <span m='1565660'>v0,</span> <span
  m='1566270'>v1.</span> <span m='1567620'>OK?</span> <span
  m='1568600'>And</span> <span m='1568840'>at</span> <span
  m='1568900'>that</span> <span m='1569060'>point,</span> <span
  m='1570890'>thanks</span> <span m='1571200'>to</span> <span
  m='1571270'>the</span> <span m='1571390'>optimal</span> <span
  m='1571850'>substructure</span> <span m='1572560'>property,</span> <span
  m='1574640'>given</span> <span m='1574870'>that</span> <span
  m='1575040'>this</span> <span m='1575400'>is</span> <span
  m='1575580'>the</span> <span m='1575660'>shortest</span> <span
  m='1576020'>path,</span> <span m='1576800'>this</span> <span
  m='1577050'>has</span> <span m='1577250'>to</span> <span m='1577310'>be</span>
  <span m='1577450'>a</span> <span m='1577480'>shortest</span> <span
  m='1577820'>path,</span> <span m='1578040'>as</span> <span
  m='1578150'>well.</span> </p><p><span m='1579380'>Any</span> <span
  m='1579600'>subset</span> <span m='1580000'>of</span> <span
  m='1580100'>the</span> <span m='1580600'>shortest</span> <span
  m='1580930'>path</span> <span m='1581100'>has</span> <span
  m='1581270'>to</span> <span m='1581330'>be</span> <span m='1581440'>a</span>
  <span m='1581470'>shortest</span> <span m='1581790'>path.</span> <span
  m='1582880'>I'm</span> <span m='1583100'>going</span> <span
  m='1583310'>to</span> <span m='1584060'>relax</span> <span m='1584560'>this
  edge and</span> <span m='1584980'>I'm</span> <span m='1585150'>going</span>
  <span m='1585280'>to</span> <span m='1585330'>get</span> <span
  m='1586490'>the</span> <span m='1586560'>value</span> <span
  m='1586990'>of</span> <span m='1588300'>delta</span> <span
  m='1589670'>from</span> <span m='1589970'>s</span> <span m='1590260'>to</span>
  <span m='1590370'>v1.</span> <span m='1591100'>And</span> <span
  m='1591310'>it's</span> <span m='1591600'>going</span> <span
  m='1591710'>to</span> <span m='1591750'>be</span> <span
  m='1591850'>this</span> <span m='1592670'>relaxation</span> <span
  m='1593290'>that's</span> <span m='1593430'>going</span> <span
  m='1593530'>to</span> <span m='1593570'>get</span> <span m='1593710'>me</span>
  <span m='1593810'>that</span> <span m='1593950'>value.</span> </p><p><span
  m='1595050'>And</span> <span m='1595250'>after</span> <span
  m='1595440'>the</span> <span m='1595530'>first</span> <span
  m='1595810'>pass,</span> <span m='1596090'>I'm</span> <span
  m='1596170'>going</span> <span m='1596280'>to</span> <span
  m='1596320'>be</span> <span m='1596390'>able</span> <span
  m='1596560'>to</span> <span m='1596610'>get</span> <span m='1596800'>to</span>
  <span m='1596880'>v1.</span> <span m='1597360'>After</span> <span
  m='1597520'>the</span> <span m='1597590'>second</span> <span
  m='1597860'>pass,</span> <span m='1598340'>I can</span> <span
  m='1598450'>get</span> <span m='1598520'>to</span> <span
  m='1598700'>v2.</span> <span m='1599420'>And after</span> <span m='1599840'>k
  passes,</span> <span m='1600220'>I'm</span> <span m='1600310'>going</span>
  <span m='1600390'>to</span> <span m='1600430'>be</span> <span
  m='1600500'>able</span> <span m='1600640'>to</span> <span
  m='1600690'>get</span> <span m='1600860'>to</span> <span
  m='1600930'>vk.</span> <span m='1602220'>So</span> <span
  m='1602320'>I'm</span> <span m='1602400'>just</span> <span
  m='1602600'>growing</span> <span m='1602930'>this frontier</span> <span
  m='1604690'>one</span> <span m='1605140'>node</span> <span
  m='1605990'>every</span> <span m='1606260'>pass.</span> <span
  m='1607100'>And</span> <span m='1607240'>that's</span> <span
  m='1607730'>your</span> <span m='1608410'>induction.</span> <span
  m='1609380'>And</span> <span m='1610000'>you</span> <span
  m='1610140'>can</span> <span m='1610690'>write</span> <span
  m='1610880'>that</span> <span m='1611050'>out.</span> <span
  m='1611580'>And</span> <span m='1611830'>I'll</span> <span
  m='1612480'>write</span> <span m='1612650'>it</span> <span
  m='1612770'>out</span> <span m='1612930'>here.</span> <span
  m='1613660'>But</span> <span m='1613770'>that's</span> <span
  m='1613940'>basically</span> <span m='1614320'>it.</span> </p><p><span
  m='1615640'>So</span> <span m='1616140'>after</span> <span
  m='1616490'>one</span> <span m='1616790'>pass</span> <span
  m='1620360'>through</span> <span m='1620710'>all</span> <span
  m='1620920'>of</span> <span m='1621020'>the</span> <span
  m='1621150'>edges</span> <span m='1621580'>e,</span> <span
  m='1625400'>we</span> <span m='1625550'>have</span> <span m='1627730'>d</span>
  <span m='1628250'>of</span> <span m='1628550'>v1</span> <span
  m='1630640'>to</span> <span m='1630800'>be</span> <span
  m='1630930'>delta</span> <span m='1632080'>s</span> <span
  m='1632380'>v1.</span> <span m='1635890'>And</span> <span
  m='1636110'>the</span> <span m='1636170'>reason</span> <span
  m='1636410'>for</span> <span m='1636510'>this</span> <span
  m='1636750'>is</span> <span m='1638620'>because</span> <span
  m='1638910'>we'll</span> <span m='1639030'>relax.</span> <span
  m='1645310'>We're</span> <span m='1645440'>guaranteed</span> <span
  m='1645840'>to</span> <span m='1645920'>relax</span> <span
  m='1646250'>all</span> <span m='1646810'>the</span> <span
  m='1646920'>edges.</span> <span m='1647300'>And</span> <span
  m='1647390'>we'll</span> <span m='1647560'>relax</span> <span
  m='1647855'>the</span> <span m='1648460'>edge</span> <span
  m='1651810'>v0,</span> <span m='1652300'>v1</span> <span
  m='1653080'>during</span> <span m='1653340'>this</span> <span
  m='1653520'>pass.</span> </p><p><span m='1656540'>And</span> <span
  m='1657530'>we</span> <span m='1657670'>can't</span> <span m='1657890'>find
  a</span> <span m='1658170'>shorter</span> <span m='1658450'>path</span> <span
  m='1658780'>than</span> <span m='1658880'>this</span> <span
  m='1659080'>path</span> <span m='1659480'>because,</span> <span
  m='1659700'>otherwise</span> <span m='1660030'>we'd</span> <span
  m='1660170'>violate</span> <span m='1660690'>the</span> <span
  m='1660780'>optimum</span> <span m='1661240'>substructure</span> <span
  m='1661950'>property.</span> <span m='1664000'>And</span> <span
  m='1665350'>that</span> <span m='1665510'>means</span> <span
  m='1665770'>that</span> <span m='1666520'>it's</span> <span
  m='1666680'>a</span> <span m='1666720'>contradiction</span> <span
  m='1667270'>that</span> <span m='1667420'>we</span> <span
  m='1667730'>selected</span> <span m='1668200'>a</span> <span
  m='1668470'>shortest</span> <span m='1668840'>path</span> <span
  m='1669090'>in</span> <span m='1669160'>the</span> <span
  m='1669240'>first</span> <span m='1669490'>place.</span> <span
  m='1670370'>So</span> <span m='1671470'>can</span> <span
  m='1671700'>argue</span> <span m='1672030'>that</span> <span
  m='1672640'>we</span> <span m='1672730'>have</span> <span
  m='1672940'>delta</span> <span m='1674630'>s</span> <span
  m='1674930'>v1</span> <span m='1675400'>after</span> <span
  m='1675630'>the</span> <span m='1675740'>first</span> <span
  m='1676040'>pass.</span> </p><p><span m='1677070'>And</span> <span
  m='1677640'>this</span> <span m='1677790'>goes</span> <span
  m='1677980'>on.</span> <span m='1678510'>I'm</span> <span
  m='1678820'>going</span> <span m='1678920'>to</span> <span
  m='1678960'>write</span> <span m='1679130'>out this</span> <span
  m='1679210'>proof</span> <span m='1679620'>because</span> <span
  m='1679860'>I</span> <span m='1679920'>think</span> <span
  m='1680070'>it's</span> <span m='1680170'>important</span> <span
  m='1681230'>for</span> <span m='1681280'>you</span> <span
  m='1681380'>guys</span> <span m='1681590'>to</span> <span
  m='1681700'>see</span> <span m='1684920'>the</span> <span
  m='1685060'>full</span> <span m='1685510'>proof.</span> <span
  m='1686340'>But</span> <span m='1686900'>you</span> <span
  m='1687000'>can</span> <span m='1687110'>probably</span> <span
  m='1687390'>guess</span> <span m='1687640'>the</span> <span
  m='1687770'>rest</span> <span m='1688060'>at</span> <span
  m='1688160'>this</span> <span m='1688310'>point.</span> <span
  m='1696780'>After</span> <span m='1697000'>one</span> <span m='1697220'>pass,
  that's</span> <span m='1697630'>what</span> <span m='1697770'>you</span> <span
  m='1697860'>get.</span> <span m='1698320'>After</span> <span
  m='1698620'>two</span> <span m='1698790'>passes</span> <span
  m='1704330'>through</span> <span m='1704810'>e</span> <span
  m='1705390'>we</span> <span m='1705530'>have</span> <span m='1705940'>d</span>
  <span m='1706420'>v2</span> <span m='1708630'>equals</span> <span
  m='1709120'>delta</span> <span m='1709440'>s</span> <span
  m='1709740'>v2</span> <span m='1712480'>because</span> <span
  m='1712780'>in</span> <span m='1712860'>the</span> <span
  m='1712950'>second</span> <span m='1713320'>pass</span> <span
  m='1713710'>we're</span> <span m='1713810'>going</span> <span
  m='1713950'>to</span> <span m='1714010'>relax</span> <span
  m='1714460'>edge</span> <span m='1718030'>v1,</span> <span
  m='1718250'>v2.</span> </p><p><span m='1727020'>So</span> <span
  m='1727220'>it'</span> <span m='1727480'>a different</span> <span
  m='1727600'>edge</span> <span m='1728000'>that</span> <span
  m='1728190'>needs</span> <span m='1728340'>to</span> <span
  m='1728430'>be</span> <span m='1728570'>relaxed.</span> <span
  m='1728990'>But</span> <span m='1729090'>that's</span> <span
  m='1729280'>cool</span> <span m='1729520'>because</span> <span
  m='1729780'>I'm</span> <span m='1729860'>relaxing</span> <span
  m='1730260'>all</span> <span m='1730430'>the</span> <span
  m='1730520'>edges.</span> <span m='1731400'>And</span> <span
  m='1732010'>I'm</span> <span m='1732160'>going</span> <span
  m='1732280'>to</span> <span m='1732320'>be</span> <span
  m='1732370'>able</span> <span m='1732490'>to</span> <span
  m='1732560'>grow</span> <span m='1732750'>my</span> <span
  m='1732900'>frontier.</span> <span m='1733740'>I'm</span> <span
  m='1733890'>going</span> <span m='1734010'>to</span> <span
  m='1734060'>be</span> <span m='1734100'>able</span> <span
  m='1734230'>to</span> <span m='1734290'>compute</span> <span
  m='1735120'>delta</span> <span m='1735420'>s v2</span> <span
  m='1736720'>and</span> <span m='1736860'>the end</span> <span
  m='1737020'>of</span> <span m='1737100'>my</span> <span
  m='1737220'>second</span> <span m='1737540'>pass</span> <span
  m='1738360'>and</span> <span m='1738680'>so</span> <span m='1738830'>on</span>
  <span m='1738970'>and</span> <span m='1739060'>so</span> <span
  m='1739200'>forth.</span> </p><p><span m='1740820'>So</span> <span
  m='1741660'>after</span> <span m='1742050'>k</span> <span
  m='1742360'>passes,</span> <span m='1748660'>we</span> <span
  m='1748790'>have</span> <span m='1748980'>d</span> <span m='1749160'>vk</span>
  <span m='1751710'>equals</span> <span m='1752190'>delta</span> <span
  m='1752630'>s</span> <span m='1752970'>vk.</span> <span m='1756100'>And</span>
  <span m='1759060'>if</span> <span m='1761680'>I</span> <span
  m='1761730'>run</span> <span m='1761990'>through</span> <span
  m='1763100'>v</span> <span m='1763260'>minus</span> <span m='1763580'>1</span>
  <span m='1766140'>passes,</span> <span m='1766280'>which is</span> <span
  m='1766360'>what</span> <span m='1766520'>I</span> <span m='1766590'>do</span>
  <span m='1766760'>in</span> <span m='1766880'>the</span> <span
  m='1767100'>algorithm,</span> <span m='1769440'>all</span> <span
  m='1770830'>reachable</span> <span m='1774790'>vertices</span> <span
  m='1777070'>have</span> <span m='1777680'>delta</span> <span
  m='1778320'>values.</span> <span m='1781432'>All right?</span> <span
  m='1781910'>That's</span> <span m='1782110'>basically</span> <span
  m='1782440'>it.</span> <span m='1784420'>Any</span> <span
  m='1784550'>questions?</span> </p><p><span m='1791220'>It's</span> <span
  m='1791330'>actually</span> <span m='1791580'>a</span> <span
  m='1791630'>simpler</span> <span m='1791960'>proof</span> <span
  m='1792340'>than</span> <span m='1793380'>the</span> <span
  m='1793470'>Dijkstra</span> <span m='1793790'>proof,</span> <span
  m='1795710'>which</span> <span m='1795960'>I</span> <span
  m='1796260'>just</span> <span m='1796530'>sketched</span> <span
  m='1796870'>last</span> <span m='1797130'>time.</span> <span m='1797600'>I'll
  just</span> <span m='1797770'>give</span> <span m='1797900'>you</span> <span
  m='1797980'>some</span> <span m='1798340'>intuition</span> <span
  m='1798830'>of</span> <span m='1798910'>the</span> <span
  m='1799150'>Dijkstra</span> <span m='1799440'>proof.</span> <span
  m='1799850'>It's</span> <span m='1800210'>probably</span> <span m='1800500'>a
  little</span> <span m='1800700'>too</span> <span m='1802310'>painful</span>
  <span m='1802810'>to</span> <span m='1802890'>do</span> <span
  m='1803310'>in</span> <span m='1803430'>a</span> <span
  m='1803520'>lecture.</span> <span m='1804590'>But</span> <span
  m='1804850'>this</span> <span m='1804990'>one</span> <span
  m='1805520'>is,</span> <span m='1806200'>as</span> <span
  m='1806390'>you</span> <span m='1806490'>can</span> <span
  m='1806580'>see,</span> <span m='1807670'>nice</span> <span
  m='1807900'>and</span> <span m='1808010'>clean</span> <span
  m='1808880'>and</span> <span m='1809350'>fits</span> <span
  m='1809660'>on</span> <span m='1810030'>two</span> <span
  m='1810200'>boards,</span> <span m='1810610'>which</span> <span
  m='1810800'>is</span> <span m='1811290'>kind of</span> <span
  m='1811400'>an</span> <span m='1811540'>important</span> <span
  m='1812110'>criterion</span> <span m='1812600'>here.</span> <span
  m='1814620'>So</span> <span m='1815920'>good.</span> </p><p><span
  m='1816370'>All right,</span> <span m='1817660'>so</span> <span
  m='1817800'>that</span> <span m='1818030'>takes</span> <span
  m='1818190'>care</span> <span m='1818330'>of</span> <span
  m='1818400'>the</span> <span m='1818490'>theorem.</span> <span
  m='1819940'>Hopefully</span> <span m='1820380'>you're all on</span> <span
  m='1820620'>board</span> <span m='1820980'>with</span> <span
  m='1821150'>the</span> <span m='1821430'>theorem.</span> <span
  m='1821940'>And</span> <span m='1822810'>one</span> <span
  m='1822980'>thing</span> <span m='1823130'>that</span> <span
  m='1823240'>we</span> <span m='1823320'>haven't</span> <span
  m='1823550'>done</span> <span m='1823830'>is</span> <span
  m='1824110'>talk</span> <span m='1824310'>about</span> <span
  m='1824580'>the</span> <span m='1824650'>check.</span> <span
  m='1826230'>So</span> <span m='1826750'>the</span> <span
  m='1826850'>argument</span> <span m='1828410'>with</span> <span
  m='1828590'>respect</span> <span m='1828930'>to</span> <span
  m='1829010'>the</span> <span m='1829780'>corollary</span> <span
  m='1831180'>bootstraps</span> <span m='1832190'>this</span> <span
  m='1832430'>particular</span> <span m='1834000'>argument</span> <span
  m='1835250'>for</span> <span m='1835360'>the</span> <span
  m='1835500'>theorem.</span> <span m='1836490'>But</span> <span
  m='1837660'>this</span> <span m='1837890'>requires</span> <span
  m='1840070'>the</span> <span m='1840180'>insight</span> <span
  m='1840870'>that</span> <span m='1843200'>if</span> <span
  m='1843490'>after</span> <span m='1843950'>v</span> <span
  m='1844110'>minus</span> <span m='1844430'>1</span> <span
  m='1844710'>passes,</span> <span m='1846160'>if</span> <span
  m='1846340'>you</span> <span m='1846450'>can</span> <span
  m='1846580'>find</span> <span m='1847140'>an</span> <span
  m='1847330'>edge</span> <span m='1847650'>that</span> <span
  m='1847830'>can</span> <span m='1847970'>be</span> <span
  m='1848120'>relaxed,</span> <span m='1849790'>well</span> <span
  m='1850140'>what</span> <span m='1850260'>does</span> <span
  m='1850360'>that</span> <span m='1850550'>mean?</span> </p><p><span
  m='1863494'>So</span> <span m='1863966'>at</span> <span
  m='1864440'>this</span> <span m='1864620'>point,</span> <span
  m='1865170'>let's</span> <span m='1865370'>say</span> <span
  m='1865540'>that</span> <span m='1866170'>I've</span> <span
  m='1866340'>done</span> <span m='1866590'>my v</span> <span
  m='1867020'>minus</span> <span m='1867410'>1</span> <span
  m='1867650'>passes</span> <span m='1871280'>and</span> <span
  m='1873400'>we</span> <span m='1873560'>find</span> <span
  m='1873880'>an</span> <span m='1873980'>edge</span> <span
  m='1878950'>that</span> <span m='1879160'>can</span> <span
  m='1879300'>be</span> <span m='1879430'>relaxed.</span> <span
  m='1883310'>Well,</span> <span m='1885710'>this</span> <span
  m='1885880'>means</span> <span m='1886170'>that</span> <span
  m='1886610'>the</span> <span m='1887830'>current</span> <span
  m='1890870'>shortest</span> <span m='1891340'>path</span> <span
  m='1898030'>from</span> <span m='1898430'>s</span> <span m='1899210'>to</span>
  <span m='1899330'>some</span> <span m='1899630'>vertex</span> <span
  m='1902920'>that</span> <span m='1903080'>is</span> <span
  m='1903170'>obviously</span> <span m='1903550'>reachable</span> <span
  m='1906000'>v</span> <span m='1907200'>is</span> <span m='1908600'>not</span>
  <span m='1908960'>simple</span> <span m='1911930'>once</span> <span
  m='1912190'>I've</span> <span m='1912290'>relaxed this</span> <span
  m='1912790'>edge</span> <span m='1915950'>because</span> <span
  m='1916240'>I</span> <span m='1916370'>have</span> <span m='1920420'>a</span>
  <span m='1920490'>repeated</span> <span m='1920900'>vertex.</span>
  </p><p><span m='1928000'>So</span> <span m='1928170'>that</span> <span
  m='1928350'>means</span> <span m='1929370'>it's</span> <span
  m='1929530'>not</span> <span m='1929700'>simple to</span> <span
  m='1930070'>have a</span> <span m='1930210'>repeated</span> <span
  m='1930570'>vertex</span> <span m='1931020'>that's</span> <span
  m='1931160'>the</span> <span m='1931220'>same</span> <span
  m='1931500'>as</span> <span m='1932250'>I</span> <span
  m='1932350'>found</span> <span m='1932620'>a</span> <span
  m='1932660'>cycle.</span> <span m='1937040'>And</span> <span
  m='1937520'>it's</span> <span m='1937690'>a</span> <span
  m='1937740'>negative</span> <span m='1938050'>weight</span> <span
  m='1938230'>cycle</span> <span m='1939240'>because</span> <span
  m='1939880'>I</span> <span m='1939940'>was</span> <span
  m='1940060'>able</span> <span m='1940250'>to</span> <span
  m='1940320'>relax</span> <span m='1940680'>the</span> <span
  m='1940750'>edge</span> <span m='1941130'>and</span> <span
  m='1941360'>reduce</span> <span m='1942590'>the</span> <span
  m='1942760'>weight</span> <span m='1944380'>after</span> <span
  m='1944690'>I</span> <span m='1944800'>added</span> <span m='1945140'>a</span>
  <span m='1945180'>vertex</span> <span m='1945950'>that</span> <span
  m='1946450'>cost</span> <span m='1946800'>a</span> <span
  m='1946850'>cycle.</span> <span m='1948160'>All</span> <span
  m='1948230'>right?</span> <span m='1948620'>So</span> <span
  m='1948700'>this</span> <span m='1948850'>cycle</span> <span
  m='1949670'>has</span> <span m='1949930'>to</span> <span m='1950000'>be</span>
  <span m='1950100'>negative</span> <span m='1950440'>weight.</span> <span
  m='1952290'>Found</span> <span m='1952700'>a</span> <span
  m='1952740'>cycle</span> <span m='1953070'>that</span> <span
  m='1953200'>is</span> <span m='1953330'>negative</span> <span
  m='1953620'>weight.</span> </p><p><span m='1959930'>All right.</span> <span
  m='1960880'>That's</span> <span m='1961090'>pretty</span> <span
  m='1961230'>much</span> <span m='1961400'>it.</span> <span
  m='1966200'>So</span> <span m='1966440'>it's,</span> <span
  m='1967980'>I</span> <span m='1968090'>guess,</span> <span
  m='1968820'>a</span> <span m='1968980'>painful</span> <span
  m='1969440'>algorithm</span> <span m='1969920'>from</span> <span
  m='1970110'>a</span> <span m='1970160'>standpoint</span> <span
  m='1970730'>of</span> <span m='1970980'>it's</span> <span
  m='1971350'>not</span> <span m='1971500'>particularly</span> <span
  m='1971940'>smart.</span> <span m='1972780'>It's</span> <span
  m='1972960'>just</span> <span m='1973150'>relaxing</span> <span
  m='1973570'>all</span> <span m='1973810'>of</span> <span
  m='1973890'>the</span> <span m='1973960'>edges</span> <span
  m='1974340'>a</span> <span m='1974410'>certain</span> <span
  m='1974740'>fixed</span> <span m='1975120'>number</span> <span
  m='1975330'>of</span> <span m='1975410'>times.</span> </p><p><span
  m='1976560'>And</span> <span m='1976730'>it</span> <span
  m='1976780'>just</span> <span m='1976950'>works</span> <span
  m='1977230'>out</span> <span m='1977880'>because</span> <span
  m='1979110'>you</span> <span m='1979270'>will</span> <span
  m='1980410'>find</span> <span m='1981530'>these</span> <span
  m='1981800'>cycles.</span> <span m='1982940'>And</span> <span
  m='1983180'>if</span> <span m='1983330'>you</span> <span
  m='1984240'>keep</span> <span m='1984440'>going,</span> <span
  m='1984740'>it's</span> <span m='1984860'>like</span> <span
  m='1985010'>this</span> <span m='1985160'>termination</span> <span
  m='1985670'>condition.</span> <span m='1986620'>What</span> <span
  m='1986750'>is</span> <span m='1986870'>neat</span> <span
  m='1987070'>is</span> <span m='1987190'>that</span> <span m='1987400'>I</span>
  <span m='1987440'>don't</span> <span m='1987550'>have</span> <span
  m='1987690'>the</span> <span m='1987770'>generic</span> <span
  m='1988210'>shortest</span> <span m='1988550'>path</span> <span
  m='1988760'>algorithm</span> <span m='1989120'>up there</span> <span
  m='1989280'>anymore.</span> <span m='1990450'>But</span> <span
  m='1990560'>in</span> <span m='1990680'>effect,</span> <span
  m='1991520'>what</span> <span m='1991710'>you're</span> <span
  m='1991820'>saying</span> <span m='1992150'>is</span> <span
  m='1992830'>after</span> <span m='1993080'>a</span> <span
  m='1993130'>certain</span> <span m='1993560'>number</span> <span
  m='1993800'>of</span> <span m='1993860'>passes,</span> <span
  m='1994760'>if</span> <span m='1994940'>you</span> <span
  m='1995060'>haven't</span> <span m='1995350'>finished,</span> <span
  m='1995840'>you</span> <span m='1995970'>can</span> <span
  m='1996100'>quit</span> <span m='1996750'>because</span> <span
  m='1997090'>you</span> <span m='1997860'>have</span> <span
  m='1998010'>found</span> <span m='1998250'>a</span> <span
  m='1998280'>negative</span> <span m='1998570'>cycle.</span> </p><p><span
  m='1999600'>So</span> <span m='1999760'>it's</span> <span
  m='1999900'>very</span> <span m='2000080'>similar</span> <span
  m='2000440'>to</span> <span m='2000490'>the</span> <span
  m='2000770'>generic</span> <span m='2001200'>shortest</span> <span
  m='2001550'>path</span> <span m='2002710'>algorithm.</span> <span
  m='2003990'>You're</span> <span m='2004220'>not</span> <span
  m='2004510'>really</span> <span m='2004690'>selecting</span> <span
  m='2005070'>the</span> <span m='2005150'>edges.</span> <span
  m='2005600'>You're</span> <span m='2006010'>selecting all</span> <span
  m='2006140'>of</span> <span m='2006230'>them,</span> <span
  m='2006880'>in</span> <span m='2007180'>this</span> <span
  m='2007350'>case.</span> <span m='2008080'>And</span> <span
  m='2008420'>you're</span> <span m='2008630'>running</span> <span
  m='2008890'>through</span> <span m='2009110'>a</span> <span
  m='2009170'>bunch</span> <span m='2009870'>of</span> <span
  m='2009930'>different</span> <span m='2010160'>passes.</span> <span
  m='2011310'>All right?</span> </p><p><span m='2014260'>So</span> <span
  m='2014440'>that's</span> <span m='2014810'>it</span> <span
  m='2015030'>with</span> <span m='2015170'>respect</span> <span
  m='2015450'>to</span> <span m='2015510'>Bellman-Ford.</span> <span
  m='2016770'>I</span> <span m='2016860'>want</span> <span m='2017020'>to</span>
  <span m='2017090'>do</span> <span m='2017230'>a</span> <span
  m='2017310'>couple</span> <span m='2017570'>of</span> <span
  m='2018010'>special</span> <span m='2018400'>cases</span> <span
  m='2018800'>and</span> <span m='2018920'>revisit</span> <span
  m='2019420'>the</span> <span m='2019620'>directed</span> <span
  m='2020140'>acyclic</span> <span m='2020560'>graph.</span> <span
  m='2021740'>But</span> <span m='2022190'>stop</span> <span
  m='2022470'>me</span> <span m='2022580'>here</span> <span
  m='2022840'>if</span> <span m='2023140'>you</span> <span
  m='2023210'>have</span> <span m='2023330'>any</span> <span
  m='2023440'>questions</span> <span m='2023820'>about</span> <span
  m='2025080'>Bellman-Ford.</span> <span m='2028270'>You</span> <span
  m='2028470'>first</span> <span m='2028810'>and</span> <span
  m='2028900'>then</span> <span m='2029010'>back</span> <span
  m='2029503'>there.</span> <span m='2029996'>Yeah?</span> </p><p><span
  m='2030489'>AUDIENCE:</span> <span m='2030982'>Maybe I'm</span> <span
  m='2031475'>just</span> <span m='2031968'>confused about the</span> <span
  m='2032461'>definition</span> <span m='2032954'>of a</span> <span
  m='2033447'>cycle.</span> <span m='2034926'>But</span> <span m='2035430'>if
  you had, like,</span> <span m='2035650'>a tree,</span> <span
  m='2036071'>which</span> <span m='2036492'>had a negative</span> <span
  m='2036913'>weight edge,</span> <span m='2037334'>wouldn't it produce
  the</span> <span m='2037755'>same</span> <span m='2038180'>situation</span>
  <span m='2038850'>where</span> <span m='2040460'>you relaxed</span> <span
  m='2040910'>that edge.</span> </p><p><span m='2041360'>PROFESSOR: But you
  would have</span> <span m='2041980'>relaxed</span> <span
  m='2042470'>that</span> <span m='2042960'>edge</span> <span
  m='2043340'>previously.</span> </p><p><span m='2043840'>AUDIENCE: But it
  wouldn't be a cycle, right?</span> </p><p><span m='2044810'>PROFESSOR:
  Yeah,</span> <span m='2045295'>it</span> <span m='2045780'>wouldn't</span>
  <span m='2046265'>be a cycle.</span> <span m='2046750'>So let's</span> <span
  m='2046960'>look at that.</span> <span m='2047040'>That's a fine</span> <span
  m='2047490'>question.</span> </p><p><span m='2049120'>AUDIENCE:</span> <span
  m='2049607'>Doesn't that</span> <span m='2050094'>make assumptions
  about</span> <span m='2050581'>this  structure?</span> </p><p><span
  m='2052529'>PROFESSOR:</span> <span m='2053020'>Well</span> <span
  m='2053480'>if</span> <span m='2053580'>you</span> <span
  m='2053639'>had</span> <span m='2053739'>a</span> <span
  m='2053790'>tree--</span> <span m='2054899'>I mean,</span> <span m='2055239'>a
  tree</span> <span m='2055790'>is</span> <span m='2055840'>a really</span>
  <span m='2055870'>simple</span> <span m='2056170'>case.</span> <span
  m='2056909'>But</span> <span m='2058110'>if</span> <span
  m='2058290'>you</span> <span m='2058370'>had</span> <span
  m='2059050'>something</span> <span m='2059310'>like</span> <span
  m='2059510'>this</span> <span m='2060340'>and</span> <span
  m='2060469'>if</span> <span m='2060530'>you</span> <span
  m='2060600'>did</span> <span m='2060790'>have</span> <span
  m='2061889'>a</span> <span m='2062000'>minus</span> <span m='2062350'>1</span>
  <span m='2064130'>edge</span> <span m='2064420'>here,</span> <span
  m='2065610'>right--</span> <span m='2066320'>we'll</span> <span
  m='2066780'>do</span> <span m='2066860'>a</span> <span m='2067050'>more</span>
  <span m='2067219'>complicated</span> <span m='2067639'>example.</span> <span
  m='2068100'>But</span> <span m='2068350'>let's</span> <span
  m='2068550'>say</span> <span m='2068639'>you</span> <span
  m='2068719'>had</span> <span m='2068889'>something</span> <span
  m='2069120'>like</span> <span m='2069290'>this.</span> <span
  m='2069520'>2</span> <span m='2069770'>3</span> <span m='2070090'>minus</span>
  <span m='2070370'>1.</span> </p><p><span m='2071179'>And</span> <span
  m='2071540'>what</span> <span m='2071690'>will</span> <span
  m='2071770'>happen</span> <span m='2072050'>is</span> <span
  m='2072179'>if</span> <span m='2072280'>this</span> <span
  m='2072460'>happens</span> <span m='2072790'>to</span> <span
  m='2072880'>be</span> <span m='2073179'>your</span> <span m='2073989'>s</span>
  <span m='2074230'>vertex</span> <span m='2075070'>and</span> <span
  m='2075900'>in the</span> <span m='2076380'>first step</span> <span
  m='2077010'>you</span> <span m='2077550'>relax</span> <span
  m='2077880'>all</span> <span m='2078020'>the</span> <span
  m='2078130'>edges.</span> <span m='2078949'>And</span> <span
  m='2079120'>this</span> <span m='2079230'>one</span> <span
  m='2079389'>would</span> <span m='2079520'>get</span> <span
  m='2079770'>two.</span> <span m='2081530'>And</span> <span
  m='2081670'>then,</span> <span m='2082670'>depending</span> <span
  m='2082929'>on</span> <span m='2083010'>the</span> <span
  m='2083090'>order</span> <span m='2083540'>in</span> <span
  m='2083639'>which</span> <span m='2083820'>you</span> <span
  m='2083960'>relaxed,</span> <span m='2085380'>it's</span> <span
  m='2085590'>quite</span> <span m='2085870'>possible</span> <span
  m='2086400'>that</span> <span m='2087090'>if</span> <span
  m='2087280'>you</span> <span m='2087530'>relax</span> <span
  m='2087900'>this</span> <span m='2088170'>edge</span> <span
  m='2088480'>first--</span> <span m='2090199'>let's</span> <span
  m='2090380'>say</span> <span m='2093030'>in</span> <span
  m='2093159'>the</span> <span m='2093239'>first</span> <span
  m='2093550'>pass</span> <span m='2094380'>the</span> <span
  m='2094560'>ordering</span> <span m='2095030'>of</span> <span
  m='2095190'>the</span> <span m='2095330'>relaxation</span> <span
  m='2096070'>is</span> <span m='2096300'>1,</span> <span m='2097410'>2,</span>
  <span m='2098540'>and</span> <span m='2098790'>3.</span> </p><p><span
  m='2099570'>So</span> <span m='2099710'>the</span> <span
  m='2099820'>edges</span> <span m='2100160'>are</span> <span
  m='2100280'>ordered</span> <span m='2100740'>in</span> <span
  m='2100840'>a</span> <span m='2100900'>certain</span> <span
  m='2101280'>way</span> <span m='2102390'>each</span> <span
  m='2102790'>time,</span> <span m='2103280'>and</span> <span
  m='2103390'>you're</span> <span m='2103480'>going</span> <span
  m='2103580'>to</span> <span m='2103620'>be</span> <span
  m='2103720'>relaxing</span> <span m='2104110'>the</span> <span
  m='2104180'>edges</span> <span m='2104500'>in</span> <span
  m='2104570'>exactly</span> <span m='2105100'>the</span> <span
  m='2105220'>same</span> <span m='2105540'>order</span> <span
  m='2105950'>each</span> <span m='2106260'>time.</span> <span
  m='2106990'>All</span> <span m='2107030'>right?</span> <span
  m='2107940'>It</span> <span m='2108050'>doesn't</span> <span
  m='2108290'>matter.</span> <span m='2109100'>The</span> <span
  m='2109460'>beauty</span> <span m='2109710'>of</span> <span
  m='2109770'>Bellman-Ford</span> <span m='2110310'>is</span> <span
  m='2110390'>that--</span> <span m='2110510'>let's</span> <span m='2110660'>say
  you</span> <span m='2110830'>relax</span> <span m='2111140'>this</span> <span
  m='2111340'>edge.</span> <span m='2111950'>Initially,</span> <span
  m='2112310'>this</span> <span m='2112480'>is</span> <span
  m='2112620'>at</span> <span m='2112720'>infinity.</span> <span
  m='2114010'>So</span> <span m='2114320'>this</span> <span
  m='2114530'>is</span> <span m='2114630'>at</span> <span m='2114750'>0.</span>
  <span m='2115120'>This</span> <span m='2115290'>is</span> <span
  m='2115420'>at</span> <span m='2115500'>infinity.</span> <span
  m='2116030'>This</span> <span m='2116210'>is</span> <span
  m='2116330'>at</span> <span m='2116410'>infinity.</span> <span
  m='2116930'>This</span> <span m='2117100'>is</span> <span
  m='2117220'>at</span> <span m='2117290'>infinity.</span> </p><p><span
  m='2118800'>If</span> <span m='2118930'>you</span> <span
  m='2119030'>relax</span> <span m='2119310'>this</span> <span
  m='2119500'>edge,</span> <span m='2119990'>nothing</span> <span
  m='2120280'>happens.</span> <span m='2121420'>All</span> <span
  m='2121490'>right?</span> <span m='2122920'>Then</span> <span
  m='2123280'>you</span> <span m='2123410'>relax,</span> <span
  m='2123790'>let's</span> <span m='2123950'>say,</span> <span
  m='2124050'>this</span> <span m='2124180'>edge</span> <span
  m='2124500'>because</span> <span m='2124690'>that's</span> <span
  m='2124890'>number</span> <span m='2125120'>two.</span> <span
  m='2125830'>This</span> <span m='2126060'>gets</span> <span
  m='2126280'>set</span> <span m='2126510'>to</span> <span
  m='2126600'>two.</span> <span m='2127820'>You</span> <span
  m='2127930'>relax</span> <span m='2128260'>this</span> <span
  m='2128500'>edge</span> <span m='2128810'>because</span> <span
  m='2129020'>that's</span> <span m='2129270'>3.</span> <span
  m='2130190'>And</span> <span m='2130430'>this</span> <span
  m='2130540'>is</span> <span m='2130650'>infinity</span> <span
  m='2131250'>so</span> <span m='2131280'>nothing</span> <span
  m='2131490'>happens.</span> </p><p><span m='2131910'>Of course,</span> <span
  m='2132240'>this is</span> <span m='2132430'>already</span> <span
  m='2132710'>at</span> <span m='2132840'>two</span> <span m='2133270'>so</span>
  <span m='2133450'>nothing</span> <span m='2133670'>would</span> <span
  m='2133770'>happen.</span> <span m='2134480'>So</span> <span
  m='2134660'>the</span> <span m='2134740'>end</span> <span
  m='2134930'>of</span> <span m='2135000'>the</span> <span
  m='2135080'>first</span> <span m='2135450'>pass,</span> <span
  m='2136380'>what</span> <span m='2136540'>you</span> <span
  m='2136640'>have</span> <span m='2137030'>is</span> <span
  m='2137580'>this</span> <span m='2137760'>is</span> <span
  m='2137890'>0.</span> <span m='2138420'>That's</span> <span
  m='2138740'>2.</span> <span m='2139330'>This</span> <span
  m='2139480'>is</span> <span m='2139590'>still</span> <span
  m='2139820'>infinity.</span> <span m='2141060'>That's</span> <span
  m='2141570'>still</span> <span m='2141840'>infinity.</span> <span
  m='2142770'>OK?</span> <span m='2143690'>That's</span> <span
  m='2143870'>going</span> <span m='2143970'>to</span> <span
  m='2144030'>stay</span> <span m='2144200'>infinity</span> <span
  m='2144710'>because</span> <span m='2144870'>you</span> <span
  m='2144950'>can't</span> <span m='2145140'>reach</span> <span
  m='2145410'>it</span> <span m='2145540'>from</span> <span
  m='2145730'>s.</span> <span m='2146180'>So</span> <span m='2146350'>we</span>
  <span m='2146420'>can,</span> <span m='2146510'>sort</span> <span
  m='2146640'>of,</span> <span m='2146690'>ignore</span> <span
  m='2146960'>that.</span> </p><p><span m='2147800'>And</span> <span
  m='2147900'>then,</span> <span m='2148060'>of</span> <span
  m='2148160'>the</span> <span m='2148260'>second</span> <span
  m='2148470'>pass,</span> <span m='2150270'>what</span> <span
  m='2150600'>you</span> <span m='2150710'>have</span> <span
  m='2150980'>is</span> <span m='2151220'>you</span> <span
  m='2151340'>start</span> <span m='2151560'>with</span> <span
  m='2151680'>this</span> <span m='2151830'>edge</span> <span
  m='2152000'>again</span> <span m='2153770'>because</span> <span
  m='2154060'>that's</span> <span m='2154360'>the</span> <span
  m='2154580'>ordering.</span> <span m='2155420'>And</span> <span
  m='2155670'>this</span> <span m='2155890'>2</span> <span
  m='2156340'>minus</span> <span m='2156630'>1</span> <span
  m='2157260'>would</span> <span m='2157660'>give</span> <span
  m='2157870'>this</span> <span m='2158780'>a</span> <span m='2159260'>1.</span>
  <span m='2161240'>And</span> <span m='2161500'>then</span> <span
  m='2161640'>you</span> <span m='2162040'>relax</span> <span
  m='2162610'>this</span> <span m='2162850'>edge</span> <span
  m='2163190'>or</span> <span m='2163250'>try</span> <span m='2163410'>to</span>
  <span m='2163500'>relax</span> <span m='2163780'>this</span> <span
  m='2163960'>edge.</span> <span m='2164720'>Nothing</span> <span
  m='2164960'>happens.</span> <span m='2166080'>Try</span> <span m='2166440'>to
  relax</span> <span m='2166800'>this edge.</span> <span
  m='2167020'>Nothing</span> <span m='2167220'>happens.</span> </p><p><span
  m='2168460'>And</span> <span m='2168740'>at</span> <span
  m='2168810'>this</span> <span m='2168960'>point,</span> <span
  m='2169540'>you</span> <span m='2169660'>have</span> <span
  m='2169760'>one</span> <span m='2169910'>more</span> <span
  m='2170070'>pass</span> <span m='2170320'>to</span> <span
  m='2170410'>go</span> <span m='2170590'>because</span> <span
  m='2170790'>you</span> <span m='2170860'>got</span> <span m='2170990'>4</span>
  <span m='2171390'>vertices.</span> <span m='2172110'>And</span> <span
  m='2172410'>in that</span> <span m='2172620'>past,</span> <span
  m='2172960'>nothing</span> <span m='2173210'>changes</span> <span
  m='2173560'>again.</span> <span m='2175820'>So</span> <span
  m='2175920'>that's</span> <span m='2176110'>what</span> <span
  m='2176260'>you</span> <span m='2176350'>end</span> <span
  m='2176490'>up</span> <span m='2176620'>with.</span> <span
  m='2176820'>You</span> <span m='2177200'>end</span> <span
  m='2177360'>up</span> <span m='2177510'>with</span> <span m='2178360'>2</span>
  <span m='2178520'>for</span> <span m='2178670'>this</span> <span
  m='2179430'>and</span> <span m='2179600'>1</span> <span m='2179770'>for</span>
  <span m='2179880'>that.</span> <span m='2181000'>OK?</span> <span
  m='2182260'>That</span> <span m='2182360'>makes</span> <span
  m='2182500'>sense?</span> </p><p><span m='2185200'>So</span> <span
  m='2186160'>the</span> <span m='2186300'>important</span> <span
  m='2186630'>thing</span> <span m='2186770'>to</span> <span
  m='2186840'>understand</span> <span m='2187330'>is</span> <span
  m='2187450'>that</span> <span m='2187830'>you</span> <span
  m='2188050'>are</span> <span m='2188210'>actually</span> <span
  m='2188580'>relaxing</span> <span m='2188980'>all</span> <span
  m='2189180'>of</span> <span m='2189260'>the</span> <span
  m='2189340'>edges</span> <span m='2190460'>in</span> <span
  m='2190670'>every</span> <span m='2190980'>pass.</span> <span
  m='2192020'>And</span> <span m='2192280'>there's</span> <span
  m='2192410'>a</span> <span m='2192570'>slightly</span> <span
  m='2192850'>more</span> <span m='2193000'>complicated</span> <span
  m='2193450'>example</span> <span m='2193830'>than</span> <span
  m='2193950'>this</span> <span m='2194270'>that</span> <span
  m='2194830'>is</span> <span m='2194970'>in</span> <span m='2195070'>the</span>
  <span m='2195150'>notes.</span> <span m='2195910'>And</span> <span
  m='2196260'>you</span> <span m='2196360'>can</span> <span
  m='2196450'>take</span> <span m='2196590'>a</span> <span
  m='2196630'>look</span> <span m='2196760'>at</span> <span
  m='2196820'>that</span> <span m='2197300'>offline.</span> <span
  m='2198210'>There's</span> <span m='2198380'>another</span> <span
  m='2198580'>question</span> <span m='2198870'>in</span> <span
  m='2198970'>the</span> <span m='2199070'>back.</span> <span
  m='2200120'>Did</span> <span m='2200520'>you</span> <span m='2200690'>have
  a</span> <span m='2200810'>question?</span> <span m='2202050'>Someone
  raised</span> <span m='2202300'>their hand.</span> <span
  m='2203330'>Yeah?</span> </p><p><span m='2203520'>AUDIENCE:</span> <span
  m='2204013'>Yes,</span> <span m='2204506'>I'm just curious--</span> <span
  m='2204999'>is there</span> <span m='2205492'>a</span> <span
  m='2205985'>unknown</span> <span m='2206478'>better</span> <span
  m='2206971'>algorithm</span> <span m='2207464'>that can do</span> <span
  m='2207957'>the same</span> <span m='2208450'>thing?</span> </p><p><span
  m='2209436'>PROFESSOR:</span> <span m='2209940'>No,</span> <span
  m='2210235'>there's</span> <span m='2210530'>no known</span> <span
  m='2210710'>better</span> <span m='2210950'>algorithm</span> <span
  m='2211350'>for</span> <span m='2211580'>solving</span> <span
  m='2211940'>the</span> <span m='2212030'>general</span> <span
  m='2212420'>case</span> <span m='2212770'>like</span> <span
  m='2212980'>this.</span> <span m='2213670'>There</span> <span
  m='2213910'>are</span> <span m='2214880'>a</span> <span
  m='2215000'>couple</span> <span m='2215210'>of</span> <span
  m='2215310'>algorithms</span> <span m='2215830'>that</span> <span
  m='2216450'>assume</span> <span m='2217450'>weights</span> <span
  m='2219160'>within</span> <span m='2219430'>a</span> <span
  m='2219500'>certain</span> <span m='2219800'>range.</span> <span
  m='2220400'>And</span> <span m='2220560'>then</span> <span
  m='2220720'>there</span> <span m='2220870'>complexities</span> <span
  m='2222300'>include</span> <span m='2222760'>both</span> <span
  m='2223010'>v</span> <span m='2223320'>and</span> <span m='2223470'>e,</span>
  <span m='2223800'>as</span> <span m='2223970'>well</span> <span
  m='2224130'>as</span> <span m='2224320'>w</span> <span
  m='2225390'>where</span> <span m='2225520'>w</span> <span
  m='2225990'>is</span> <span m='2226190'>the</span> <span
  m='2226460'>dynamic</span> <span m='2226920'>range</span> <span
  m='2227260'>of</span> <span m='2227340'>the</span> <span
  m='2227430'>weights.</span> </p><p><span m='2228250'>And</span> <span
  m='2228830'>depending</span> <span m='2229140'>on</span> <span
  m='2229300'>what</span> <span m='2229880'>w</span> <span
  m='2230240'>is,</span> <span m='2232060'>you</span> <span
  m='2232160'>could</span> <span m='2232280'>argue</span> <span
  m='2232540'>that</span> <span m='2232700'>they</span> <span
  m='2232770'>have</span> <span m='2232930'>better</span> <span
  m='2233110'>complexity.</span> <span m='2233750'>But</span> <span
  m='2233840'>they're</span> <span m='2233980'>kind</span> <span
  m='2234130'>of</span> <span m='2234200'>incomparable</span> <span
  m='2235350'>in</span> <span m='2235470'>the</span> <span
  m='2235560'>sense</span> <span m='2235800'>that</span> <span
  m='2235910'>they</span> <span m='2235970'>have</span> <span
  m='2236120'>this</span> <span m='2236260'>extra</span> <span
  m='2236660'>parameter,</span> <span m='2237580'>which</span> <span
  m='2237670'>is</span> <span m='2237740'>the</span> <span
  m='2237840'>dynamic</span> <span m='2238260'>range</span> <span
  m='2238530'>of</span> <span m='2238620'>the w.</span> <span
  m='2238690'>OK?</span> <span m='2240650'>Now</span> <span
  m='2240840'>there's</span> <span m='2241270'>lots</span> <span
  m='2241500'>of</span> <span m='2241600'>special</span> <span
  m='2241930'>cases,</span> <span m='2242430'>like</span> <span
  m='2242470'>I</span> <span m='2242510'>said,</span> <span
  m='2242760'>and</span> <span m='2242860'>well</span> <span
  m='2243150'>take</span> <span m='2243290'>a</span> <span
  m='2243340'>look</span> <span m='2243530'>at</span> <span
  m='2243620'>the</span> <span m='2243720'>DAG</span> <span
  m='2244060'>special</span> <span m='2244400'>case</span> <span
  m='2245150'>in</span> <span m='2245440'>a</span> <span
  m='2245500'>second</span> <span m='2246190'>where</span> <span
  m='2246410'>you</span> <span m='2246560'>could</span> <span
  m='2247150'>imagine</span> <span m='2247550'>doing</span> <span
  m='2247770'>better</span> <span m='2248490'>but</span> <span
  m='2249010'>not</span> <span m='2249330'>for</span> <span
  m='2249450'>the</span> <span m='2249570'>case</span> <span
  m='2249880'>where</span> <span m='2250050'>you</span> <span
  m='2250150'>have</span> <span m='2250350'>an</span> <span
  m='2250460'>arbitrary</span> <span m='2250940'>graph</span> <span
  m='2251570'>that</span> <span m='2252040'>could</span> <span
  m='2252210'>have</span> <span m='2252350'>negative</span> <span
  m='2252630'>cycles</span> <span m='2253050'>in</span> <span
  m='2253150'>it</span> <span m='2253270'>because</span> <span
  m='2253530'>it's</span> <span m='2253680'>got</span> <span
  m='2254300'>negative</span> <span m='2254630'>rate</span> <span
  m='2254820'>edges.</span> <span m='2256950'>Yeah?</span> </p><p><span
  m='2257922'>AUDIENCE: In</span> <span m='2258270'>the</span> <span
  m='2258460'>corollary,</span> <span m='2259090'>does</span> <span
  m='2259280'>that</span> <span m='2259400'>assume</span> <span m='2259580'>you
  have</span> <span m='2259800'>a</span> <span m='2260200'>connected</span>
  <span m='2260663'>graph</span> <span m='2261126'>because,</span> <span
  m='2261590'>you know,</span> <span m='2262041'>you</span> <span
  m='2262492'>could</span> <span m='2262943'>have</span> <span
  m='2263394'>a</span> <span m='2263845'>negative weight</span> <span
  m='2264296'>edge in a</span> <span m='2264750'>separate</span> <span
  m='2265470'>part</span> <span m='2265670'>of the</span> <span
  m='2266166'>graph,</span> <span m='2266662'>which</span> <span
  m='2267158'>isn't</span> <span m='2267654'>reachable</span> <span
  m='2268150'>from this.</span> </p><p><span m='2271622'>PROFESSOR:</span> <span
  m='2272130'>Yeah.</span> <span m='2272540'>So</span> <span
  m='2275130'>you're</span> <span m='2275520'>going</span> <span
  m='2275630'>to</span> <span m='2275690'>start</span> <span
  m='2279320'>when</span> <span m='2279460'>you</span> <span
  m='2279560'>have</span> <span m='2279990'>an</span> <span
  m='2280110'>undefined</span> <span m='2281740'>weight.</span> <span
  m='2283420'>Remember</span> <span m='2284820'>your</span> <span
  m='2284950'>initialization</span> <span m='2285720'>condition.</span> <span
  m='2286180'>What</span> <span m='2286760'>is</span> <span
  m='2286880'>affected</span> <span m='2287300'>by</span> <span
  m='2287460'>s?</span> <span m='2288290'>Initialize</span> <span
  m='2289262'>is</span> <span m='2289750'>affected</span> <span
  m='2290160'>by</span> <span m='2290310'>s.</span> <span m='2290760'>The</span>
  <span m='2290850'>rest</span> <span m='2291090'>of</span> <span
  m='2291200'>it</span> <span m='2291340'>isn't</span> <span
  m='2291610'>affected</span> <span m='2292010'>by</span> <span
  m='2292160'>s</span> <span m='2292450'>because</span> <span
  m='2292670'>you're</span> <span m='2292800'>just</span> <span
  m='2292990'>relaxing</span> <span m='2293410'>the</span> <span
  m='2293490'>edges.</span> </p><p><span m='2294810'>Initialize</span> <span
  m='2295205'>is</span> <span m='2295600'>affected</span> <span
  m='2296020'>by</span> <span m='2296170'>s</span> <span
  m='2296490'>because</span> <span m='2296810'>d</span> <span
  m='2297000'>of</span> <span m='2297100'>s</span> <span
  m='2297310'>starts</span> <span m='2297710'>out</span> <span
  m='2297890'>being</span> <span m='2298100'>0,</span> <span
  m='2298550'>like</span> <span m='2298800'>I</span> <span
  m='2298860'>put</span> <span m='2299040'>over</span> <span
  m='2299220'>here,</span> <span m='2299900'>and</span> <span
  m='2300080'>the</span> <span m='2300170'>rest</span> <span
  m='2300470'>of</span> <span m='2300550'>them</span> <span
  m='2300740'>are</span> <span m='2300910'>infinity.</span> <span
  m='2302910'>So</span> <span m='2303090'>there</span> <span
  m='2303300'>is</span> <span m='2303400'>an</span> <span
  m='2303490'>effect</span> <span m='2303860'>of</span> <span
  m='2304020'>the</span> <span m='2304110'>choice</span> <span
  m='2304880'>of</span> <span m='2305150'>the</span> <span
  m='2305240'>starting</span> <span m='2305610'>vertex.</span> <span
  m='2306500'>And</span> <span m='2307400'>the</span> <span
  m='2307550'>rest</span> <span m='2307790'>of</span> <span
  m='2307910'>it</span> <span m='2308110'>follows</span> <span
  m='2309180'>that</span> <span m='2310040'>you</span> <span
  m='2310240'>will</span> <span m='2310420'>get</span> <span
  m='2311620'>an</span> <span m='2312490'>undefined</span> <span
  m='2313100'>value,</span> <span m='2313600'>or</span> <span
  m='2313710'>you</span> <span m='2313820'>will</span> <span
  m='2313940'>find</span> <span m='2314510'>that</span> <span
  m='2315370'>negative</span> <span m='2315650'>cycle</span> <span
  m='2315970'>exists</span> <span m='2317220'>based</span> <span
  m='2317660'>on</span> <span m='2317830'>whether</span> <span
  m='2318000'>you</span> <span m='2318120'>can</span> <span
  m='2318240'>reach</span> <span m='2318450'>it</span> <span
  m='2318560'>from</span> <span m='2318730'>s or not.</span> </p><p><span
  m='2319500'>So</span> <span m='2319650'>if</span> <span m='2319700'>you</span>
  <span m='2319790'>happen</span> <span m='2320100'>to</span> <span
  m='2320160'>have</span> <span m='2320530'>s</span> <span
  m='2322260'>over</span> <span m='2322470'>here,</span> <span m='2322800'>and
  it's</span> <span m='2322980'>just</span> <span m='2323140'>the</span> <span
  m='2323230'>one</span> <span m='2323580'>node,</span> <span
  m='2324370'>and</span> <span m='2324500'>then</span> <span
  m='2325090'>it</span> <span m='2325140'>has</span> <span m='2325310'>no</span>
  <span m='2325510'>edges</span> <span m='2325870'>going</span> <span
  m='2326100'>out</span> <span m='2326230'>of</span> <span
  m='2326370'>it,</span> <span m='2328330'>this</span> <span
  m='2329530'>algorithm</span> <span m='2329870'>would</span> <span
  m='2330000'>just</span> <span m='2330180'>be</span> <span
  m='2330920'>trivial.</span> <span m='2331660'>But</span> <span
  m='2332290'>it</span> <span m='2332410'>wouldn't</span> <span
  m='2332600'>detect</span> <span m='2333180'>any</span> <span
  m='2333380'>negative</span> <span m='2333670'>cycles</span> <span
  m='2334070'>that</span> <span m='2334180'>aren't</span> <span
  m='2334440'>reachable</span> <span m='2334820'>from</span> <span
  m='2334990'>s.</span> <span m='2335960'>That</span> <span
  m='2336290'>make</span> <span m='2336450'>sense?</span> </p><p><span
  m='2336725'>AUDIENCE: Yeah.</span> </p><p><span m='2338600'>PROFESSOR:</span>
  <span m='2338890'>So</span> <span m='2339150'>there is</span> <span
  m='2339340'>this--</span> <span m='2339990'>it's</span> <span
  m='2340210'>kind</span> <span m='2340330'>of</span> <span
  m='2340370'>hidden</span> <span m='2340670'>over</span> <span
  m='2340820'>there.</span> <span m='2341410'>So</span> <span
  m='2341520'>I'm</span> <span m='2341620'>glad</span> <span
  m='2341840'>you</span> <span m='2341920'>asked</span> <span
  m='2342090'>that</span> <span m='2342220'>question.</span> <span
  m='2342920'>But</span> <span m='2343070'>initialize</span> <span
  m='2343536'>is</span> <span m='2344470'>setting</span> <span
  m='2344800'>things</span> <span m='2345060'>up.</span> <span
  m='2345410'>And</span> <span m='2345480'>that</span> <span
  m='2346130'>is</span> <span m='2346730'>something</span> <span
  m='2347040'>that</span> <span m='2347760'>affects</span> <span
  m='2348060'>the</span> <span m='2348140'>rest</span> <span
  m='2348350'>of</span> <span m='2348430'>the</span> <span
  m='2348490'>algorithm</span> <span m='2348860'>because</span> <span
  m='2349100'>d</span> <span m='2349240'>of</span> <span m='2349350'>s</span>
  <span m='2349510'>is</span> <span m='2349620'>0</span> <span
  m='2350190'>and</span> <span m='2350290'>the</span> <span
  m='2350340'>rest</span> <span m='2350560'>of</span> <span
  m='2350620'>them</span> <span m='2350770'>are</span> <span
  m='2350870'>set</span> <span m='2351100'>to</span> <span
  m='2351160'>infinity.</span> <span m='2352410'>All right?</span> </p><p><span
  m='2354540'>So</span> <span m='2356672'>if</span> <span
  m='2357070'>there</span> <span m='2357330'>are</span> <span
  m='2357570'>no</span> <span m='2357700'>other</span> <span
  m='2357880'>questions,</span> <span m='2359330'>I'll</span> <span
  m='2359810'>move</span> <span m='2359930'>on</span> <span
  m='2360180'>to</span> <span m='2360290'>the</span> <span
  m='2360870'>case</span> <span m='2361130'>of</span> <span
  m='2361230'>the</span> <span m='2361300'>DAG</span> <span
  m='2361870'>and</span> <span m='2362050'>talk</span> <span
  m='2362230'>a</span> <span m='2362290'>little</span> <span
  m='2362490'>bit</span> <span m='2362650'>about</span> <span
  m='2363300'>shortest</span> <span m='2363730'>paths</span> <span
  m='2364030'>versus</span> <span m='2364320'>longest</span> <span
  m='2364750'>paths.</span> <span m='2365810'>And</span> <span
  m='2366260'>this</span> <span m='2366800'>is</span> <span
  m='2367300'>somewhat</span> <span m='2367570'>of</span> <span
  m='2367660'>a</span> <span m='2367740'>preview</span> <span
  m='2368160'>of</span> <span m='2368310'>a</span> <span
  m='2368370'>lecture</span> <span m='2368710'>that</span> <span
  m='2370470'>Eric</span> <span m='2371010'>is</span> <span
  m='2371310'>going</span> <span m='2371440'>to</span> <span
  m='2371480'>give</span> <span m='2371920'>a</span> <span
  m='2371990'>month</span> <span m='2372270'>from</span> <span
  m='2372440'>now</span> <span m='2372640'>on</span> <span
  m='2373230'>complexity</span> <span m='2374010'>and</span> <span
  m='2374260'>the</span> <span m='2374300'>difference</span> <span
  m='2374740'>between</span> <span m='2374820'>polynomial</span> <span
  m='2375340'>time</span> <span m='2376120'>and</span> <span
  m='2376280'>exponential</span> <span m='2376810'>time,</span> <span
  m='2377430'>though</span> <span m='2377530'>I'm</span> <span
  m='2377610'>not</span> <span m='2377760'>going</span> <span
  m='2377850'>to</span> <span m='2377900'>go</span> <span
  m='2378100'>into</span> <span m='2378560'>much</span> <span
  m='2378870'>depth</span> <span m='2379140'>here.</span> </p><p><span
  m='2379910'>But</span> <span m='2380250'>there's</span> <span
  m='2380380'>some</span> <span m='2380540'>interesting</span> <span
  m='2381970'>relationships</span> <span m='2382630'>between</span> <span
  m='2382820'>the</span> <span m='2382890'>shortest</span> <span
  m='2383270'>path</span> <span m='2385790'>problem</span> <span
  m='2386220'>and</span> <span m='2386340'>the</span> <span
  m='2386410'>longest</span> <span m='2386720'>path</span> <span
  m='2386950'>problem</span> <span m='2388010'>that</span> <span
  m='2388230'>I'd</span> <span m='2388290'>like</span> <span
  m='2388430'>to</span> <span m='2388510'>get</span> <span
  m='2388660'>to.</span> <span m='2389400'>But</span> <span
  m='2389800'>any</span> <span m='2390010'>other</span> <span
  m='2390130'>questions</span> <span m='2391140'>on</span> <span
  m='2391290'>this?</span> <span m='2394140'>OK,</span> <span
  m='2394820'>so</span> <span m='2394970'>let</span> <span m='2395080'>me</span>
  <span m='2395170'>ask</span> <span m='2395360'>a</span> <span
  m='2395410'>question.</span> </p><p><span m='2398940'>Suppose</span> <span
  m='2399720'>I</span> <span m='2399860'>wanted</span> <span
  m='2400140'>to</span> <span m='2400210'>find</span> <span
  m='2400630'>longest</span> <span m='2401140'>paths</span> <span
  m='2402020'>in</span> <span m='2402180'>a</span> <span
  m='2402250'>graph</span> <span m='2404270'>and</span> <span
  m='2404520'>let's</span> <span m='2404700'>say</span> <span
  m='2404850'>that</span> <span m='2405030'>this</span> <span
  m='2405200'>graph</span> <span m='2406200'>had</span> <span
  m='2406770'>all</span> <span m='2407190'>positive</span> <span
  m='2407670'>edge</span> <span m='2407880'>weights.</span> <span
  m='2409960'>OK.</span> <span m='2412240'>What</span> <span
  m='2412570'>if</span> <span m='2412920'>I</span> <span
  m='2413330'>negated</span> <span m='2414940'>all</span> <span
  m='2415230'>of</span> <span m='2415350'>the</span> <span
  m='2415440'>edge</span> <span m='2415720'>weights</span> <span
  m='2417320'>and</span> <span m='2417750'>ran</span> <span m='2419380'>a</span>
  <span m='2419490'>Bellman-Ford?</span> <span m='2423110'>Would</span> <span
  m='2423280'>I</span> <span m='2423500'>find</span> <span
  m='2424840'>the</span> <span m='2425090'>longest</span> <span
  m='2425570'>path</span> <span m='2426280'>in</span> <span
  m='2426490'>the</span> <span m='2426580'>graph?</span> <span m='2429650'>Do
  people</span> <span m='2429830'>understand</span> <span m='2430180'>the</span>
  <span m='2430240'>question?</span> <span m='2435240'>I</span> <span
  m='2435410'>don't</span> <span m='2435470'>need</span> <span
  m='2435620'>this.</span> </p><p><span m='2445500'>So</span> <span
  m='2445700'>maybe</span> <span m='2445970'>we</span> <span
  m='2446070'>can</span> <span m='2446870'>talk</span> <span
  m='2447250'>about</span> <span m='2447430'>what</span> <span
  m='2447540'>a</span> <span m='2447590'>longest</span> <span
  m='2447790'>path</span> <span m='2448170'>means</span> <span
  m='2448510'>first.</span> <span m='2457150'>So if</span> <span
  m='2457400'>this</span> <span m='2457660'>was</span> <span
  m='2457870'>s</span> <span m='2458480'>and</span> <span
  m='2458660'>this</span> <span m='2458800'>v1,</span> <span
  m='2460240'>v2,</span> <span m='2461240'>v3,</span> <span
  m='2462530'>fairly</span> <span m='2462870'>straightforward,</span> <span
  m='2463180'>you know how</span> <span m='2463490'>to</span> <span
  m='2463850'>compute</span> <span m='2464140'>shortest</span> <span
  m='2464450'>paths</span> <span m='2464780'>now.</span> <span
  m='2465700'>These</span> <span m='2465910'>are</span> <span
  m='2465970'>all</span> <span m='2466120'>positive.</span> <span
  m='2466900'>Even</span> <span m='2467140'>easier.</span> </p><p><span
  m='2468450'>The</span> <span m='2468580'>longest</span> <span
  m='2468910'>path</span> <span m='2469240'>to</span> <span
  m='2469310'>v3</span> <span m='2470270'>is</span> <span m='2471020'>of</span>
  <span m='2471130'>length.</span> <span m='2473120'>Six</span> <span
  m='2473720'>because</span> <span m='2473850'>I</span> <span
  m='2473910'>go</span> <span m='2474090'>here,</span> <span
  m='2474640'>go</span> <span m='2474670'>there,</span> <span
  m='2474980'>and</span> <span m='2475160'>go</span> <span
  m='2475270'>there,</span> <span m='2475570'>right?</span> <span
  m='2476180'>So</span> <span m='2476280'>that's</span> <span
  m='2476460'>my</span> <span m='2476590'>longest</span> <span
  m='2476920'>path.</span> <span m='2478050'>OK?</span> <span
  m='2480440'>And</span> <span m='2480610'>the</span> <span
  m='2480680'>shortest</span> <span m='2481000'>path</span> <span
  m='2481190'>to</span> <span m='2481280'>v3</span> <span m='2481640'>is</span>
  <span m='2481750'>of</span> <span m='2481810'>length</span> <span
  m='2482070'>4.</span> </p><p><span m='2483930'>So</span> <span
  m='2484800'>shortest</span> <span m='2484990'>path,</span> <span
  m='2485400'>longest</span> <span m='2485710'>paths,</span> <span
  m='2486370'>have</span> <span m='2486610'>these</span> <span
  m='2486720'>nice</span> <span m='2486960'>duality.</span> <span
  m='2489080'>What</span> <span m='2489370'>if</span> <span m='2491290'>I</span>
  <span m='2491640'>said,</span> <span m='2491880'>well,</span> <span
  m='2492260'>you know,</span> <span m='2492480'>I can solve</span> <span
  m='2492650'>the</span> <span m='2492720'>longest</span> <span
  m='2493060'>path</span> <span m='2493330'>problem,</span> <span
  m='2493740'>as</span> <span m='2493870'>well,</span> <span
  m='2494630'>given</span> <span m='2494820'>all</span> <span
  m='2495010'>of</span> <span m='2495160'>what</span> <span
  m='2495410'>I've</span> <span m='2495550'>learned</span> <span
  m='2495910'>about</span> <span m='2496130'>shortest</span> <span
  m='2496490'>paths</span> <span m='2497440'>simply</span> <span
  m='2498060'>by</span> <span m='2499720'>negating</span> <span
  m='2504620'>each</span> <span m='2504850'>of</span> <span
  m='2504950'>these</span> <span m='2505130'>edges</span> <span
  m='2506430'>and</span> <span m='2506700'>running</span> <span
  m='2506970'>Bellman-Ford.</span> <span m='2509750'>What</span> <span
  m='2509910'>would</span> <span m='2510000'>happen?</span> <span
  m='2512272'>Yeah?</span> </p><p><span m='2512770'>AUDIENCE:</span> <span
  m='2513268'>[INAUDIBLE]</span> <span m='2514264'>shortest</span> <span
  m='2514762'>path</span> <span m='2515260'>branch</span> <span
  m='2515758'>[INAUDIBLE]</span> <span m='2519244'>values,</span> <span
  m='2519742'>and</span> <span m='2520240'>if</span> <span
  m='2520738'>you</span> <span m='2521236'>switched to</span> <span
  m='2521734'>absolute</span> <span m='2522232'>value,</span> <span
  m='2522730'>it will</span> <span m='2523228'>give you the</span> <span
  m='2523726'>longest</span> <span m='2524224'>path.</span> </p><p><span
  m='2525220'>PROFESSOR:</span> <span m='2525740'>So</span> <span
  m='2525860'>you</span> <span m='2525960'>think</span> <span m='2526326'>it
  works?</span> </p><p><span m='2526692'>AUDIENCE: Yeah.</span> <span
  m='2527060'>It will</span> <span m='2527535'>also</span> <span
  m='2528010'>check</span> <span m='2528485'>the</span> <span
  m='2528960'>cycles.</span> <span m='2529435'>So the</span> <span
  m='2529910'>negative</span> <span m='2530385'>cycles</span> <span
  m='2530860'>will</span> <span m='2531335'>be the</span> <span
  m='2531810'>longest</span> <span m='2532285'>path cycles that</span> <span
  m='2532760'>[INAUDIBLE].</span> </p><p><span m='2533710'>PROFESSOR:</span>
  <span m='2534190'>But</span> <span m='2534500'>I</span> <span
  m='2535280'>think</span> <span m='2535390'>that's</span> <span
  m='2535620'>the</span> <span m='2535710'>key</span> <span
  m='2535880'>question.</span> <span m='2536840'>What</span> <span
  m='2537110'>will</span> <span m='2537390'>Bellman-Ford</span> <span
  m='2537830'>do</span> <span m='2538310'>when it</span> <span
  m='2538560'>is</span> <span m='2538710'>run</span> <span m='2538940'>on</span>
  <span m='2539080'>this?</span> <span m='2539550'>What</span> <span
  m='2539710'>would it</span> <span m='2540160'>return?</span> </p><p><span
  m='2542492'>AUDIENCE:</span> <span m='2542955'>[INAUDIBLE].</span>
  </p><p><span m='2544807'>PROFESSOR:</span> <span m='2545270'>No,</span> <span
  m='2545350'>what</span> <span m='2545560'>will</span> <span
  m='2545870'>Bellman-Ford</span> <span m='2545990'>return?</span> <span
  m='2546320'>I'm</span> <span m='2546650'>asking.</span> <span
  m='2548390'>Someone</span> <span m='2549000'>else?</span> <span
  m='2551000'>What</span> <span m='2551160'>will</span> <span
  m='2551590'>Bellman-Ford</span> <span m='2551840'>return</span> <span
  m='2552337'>if I ran this?</span> <span m='2553830'>Undefined.</span> <span
  m='2554840'>Right?</span> <span m='2555910'>Undefined</span> <span
  m='2556890'>because</span> <span m='2557140'>you</span> <span
  m='2557230'>got</span> <span m='2557360'>this</span> <span
  m='2557490'>negative</span> <span m='2558620'>weight</span> <span
  m='2558920'>cycle</span> <span m='2559240'>here.</span> </p><p><span
  m='2559650'>AUDIENCE:</span> <span m='2560070'>[INAUDIBLE].</span>
  </p><p><span m='2560490'>PROFESSOR:</span> <span m='2560910'>Sorry?</span>
  <span m='2561540'>Oh!</span> <span m='2563420'>Let's</span> <span
  m='2563580'>put</span> <span m='2563670'>another</span> <span
  m='2563850'>one</span> <span m='2564200'>in there.</span> <span
  m='2565920'>Oops,</span> <span m='2566560'>sorry.</span> <span
  m='2567190'>Now</span> <span m='2567320'>I</span> <span
  m='2567430'>see.</span> <span m='2567610'>You're</span> <span
  m='2567780'>right.</span> <span m='2568120'>You're</span> <span
  m='2568280'>right.</span> <span m='2569070'>I'm</span> <span
  m='2569260'>wrong.</span> <span m='2570010'>And</span> <span
  m='2570130'>why</span> <span m='2570250'>did</span> <span
  m='2570380'>you</span> <span m='2570490'>say</span> <span
  m='2570630'>undefined?</span> </p><p><span m='2571110'>AUDIENCE:</span> <span
  m='2571605'>I was</span> <span m='2572100'>wrong.</span> </p><p><span
  m='2572595'>PROFESSOR:</span> <span m='2573090'>OK,</span> <span
  m='2573585'>good.</span> <span m='2574080'>I</span> <span
  m='2574575'>got</span> <span m='2575070'>company.</span> <span
  m='2575565'>Thank you.</span> <span m='2576060'>Thank you.</span> <span
  m='2578040'>Good.</span> <span m='2578520'>Let's</span> <span
  m='2579530'>take</span> <span m='2579640'>it</span> <span
  m='2579730'>all</span> <span m='2579920'>over</span> <span
  m='2580140'>again.</span> <span m='2581020'>All</span> <span
  m='2581270'>over</span> <span m='2581420'>again.</span> <span
  m='2582080'>All</span> <span m='2582180'>right.</span> <span
  m='2590570'>All</span> <span m='2590640'>right,</span> <span
  m='2591030'>start</span> <span m='2591330'>over.</span> <span
  m='2592500'>s</span> <span m='2593220'>v1</span> <span m='2594330'>v2</span>
  <span m='2595620'>v3.</span> <span m='2598950'>Yeah,</span> <span
  m='2599090'>that</span> <span m='2599220'>is</span> <span m='2599340'>a</span>
  <span m='2599410'>cycle.</span> <span m='2600630'>All</span> <span
  m='2600670'>right,</span> <span m='2601350'>good.</span> <span
  m='2603560'>Cycle.</span> </p><p><span m='2607640'>So</span> <span
  m='2608130'>when</span> <span m='2608250'>you</span> <span
  m='2608390'>actually</span> <span m='2609280'>negate</span> <span
  m='2609930'>each of</span> <span m='2609990'>these</span> <span
  m='2610210'>edges,</span> <span m='2613580'>you</span> <span
  m='2614270'>end</span> <span m='2614490'>up</span> <span
  m='2614680'>with</span> <span m='2616000'>a</span> <span
  m='2616060'>negative</span> <span m='2616360'>weight</span> <span
  m='2616520'>cycle.</span> <span m='2617270'>So</span> <span
  m='2617400'>it's</span> <span m='2617520'>plausible</span> <span
  m='2618040'>that</span> <span m='2618220'>you</span> <span
  m='2618320'>could</span> <span m='2618410'>have</span> <span
  m='2618580'>a</span> <span m='2618640'>graph</span> <span
  m='2619060'>like</span> <span m='2619210'>this</span> <span
  m='2619380'>one</span> <span m='2620250'>where</span> <span
  m='2621130'>this</span> <span m='2621300'>strategy</span> <span
  m='2621700'>won't</span> <span m='2621890'>work</span> <span
  m='2623890'>because</span> <span m='2624250'>what</span> <span
  m='2624420'>would</span> <span m='2624510'>happen</span> <span
  m='2624800'>is</span> <span m='2625000'>Bellman-Ford</span> <span
  m='2625540'>would</span> <span m='2625680'>come</span> <span
  m='2625850'>back</span> <span m='2626820'>with,</span> <span
  m='2627750'>essentially,</span> <span m='2629330'>an</span> <span
  m='2629560'>abort</span> <span m='2630510'>that</span> <span
  m='2630740'>says</span> <span m='2631710'>I</span> <span
  m='2631820'>can't</span> <span m='2632050'>compute</span> <span
  m='2632160'>shortest paths</span> <span m='2632860'>because</span> <span
  m='2633070'>they're</span> <span m='2633160'>undefined.</span> <span
  m='2634500'>All</span> <span m='2634620'>right?</span> </p><p><span
  m='2635190'>Now</span> <span m='2635300'>it</span> <span m='2635530'>turns
  out</span> <span m='2635680'>it's</span> <span m='2635820'>actually</span>
  <span m='2636440'>more</span> <span m='2637500'>subtle</span> <span
  m='2637870'>than</span> <span m='2638020'>that.</span> <span
  m='2640060'>What</span> <span m='2640500'>we're</span> <span
  m='2640620'>trying</span> <span m='2640890'>to</span> <span
  m='2640980'>do</span> <span m='2641270'>in</span> <span
  m='2641450'>Bellman-Ford</span> <span m='2643390'>is,</span> <span
  m='2643690'>in</span> <span m='2643840'>the</span> <span
  m='2643960'>case</span> <span m='2644340'>where</span> <span
  m='2644880'>negative</span> <span m='2645190'>weight</span> <span
  m='2645490'>cycles</span> <span m='2646300'>don't</span> <span
  m='2646720'>exist,</span> <span m='2651770'>we</span> <span
  m='2651930'>report</span> <span m='2652310'>on</span> <span
  m='2652470'>the</span> <span m='2652570'>shortest</span> <span
  m='2654740'>simple</span> <span m='2655140'>path.</span> <span
  m='2658870'>That's</span> <span m='2659500'>the</span> <span
  m='2659590'>whole</span> <span m='2659820'>notion</span> <span
  m='2660100'>of</span> <span m='2660180'>the</span> <span
  m='2660260'>proof.</span> </p><p><span m='2660860'>We</span> <span
  m='2661030'>say</span> <span m='2661230'>that the</span> <span
  m='2661430'>path</span> <span m='2661690'>has</span> <span
  m='2661870'>a</span> <span m='2662320'>certain</span> <span
  m='2662580'>length,</span> <span m='2663300'>which</span> <span
  m='2663460'>is,</span> <span m='2663570'>at</span> <span
  m='2663700'>most,</span> <span m='2664150'>v</span> <span
  m='2664320'>minus</span> <span m='2664600'>1</span> <span
  m='2665730'>and</span> <span m='2666200'>so</span> <span m='2666330'>on</span>
  <span m='2666460'>and</span> <span m='2666550'>so</span> <span
  m='2666690'>forth.</span> <span m='2667290'>We</span> <span
  m='2667420'>get</span> <span m='2667570'>the</span> <span
  m='2667630'>shortest</span> <span m='2668070'>simple</span> <span
  m='2668470'>path.</span> <span m='2674620'>But</span> <span
  m='2674890'>if</span> <span m='2676010'>you</span> <span
  m='2676100'>actually</span> <span m='2676460'>have</span> <span
  m='2676710'>a</span> <span m='2676780'>problem</span> <span
  m='2678120'>where</span> <span m='2679450'>you</span> <span
  m='2679590'>say--</span> <span m='2687890'>let</span> <span
  m='2688310'>me</span> <span m='2688490'>start</span> <span
  m='2688780'>over</span> <span m='2688940'>again.</span> </p><p><span
  m='2689310'>Let's</span> <span m='2689620'>say</span> <span
  m='2689970'>I</span> <span m='2690270'>want</span> <span m='2690440'>to</span>
  <span m='2690490'>find</span> <span m='2690880'>the</span> <span
  m='2690930'>shortest</span> <span m='2691320'>simple</span> <span
  m='2691720'>path</span> <span m='2692090'>for a</span> <span
  m='2692340'>different</span> <span m='2694110'>graph</span> <span
  m='2695690'>and</span> <span m='2695910'>it</span> <span
  m='2695990'>happens</span> <span m='2696380'>to</span> <span
  m='2696520'>have</span> <span m='2698920'>a</span> <span
  m='2698990'>negative</span> <span m='2699320'>weight</span> <span
  m='2699480'>cycle</span> <span m='2699940'>in</span> <span
  m='2700050'>it.</span> <span m='2701280'>So</span> <span m='2701470'>I</span>
  <span m='2701550'>have</span> <span m='2701680'>something</span> <span
  m='2701930'>like</span> <span m='2702110'>this.</span> <span
  m='2702630'>2</span> <span m='2703510'>3</span> <span m='2704110'>minus</span>
  <span m='2704530'>6,</span> <span m='2705850'>3</span> <span
  m='2706160'>over</span> <span m='2706330'>here,</span> <span
  m='2707470'>3</span> <span m='2707720'>over</span> <span
  m='2707900'>here,</span> <span m='2709490'>and</span> <span
  m='2709580'>so</span> <span m='2709750'>on.</span> <span
  m='2710240'>Maybe</span> <span m='2710450'>2</span> <span
  m='2710640'>here.</span> <span m='2711750'>And</span> <span
  m='2711950'>I</span> <span m='2711980'>want</span> <span m='2712140'>to</span>
  <span m='2712200'>find</span> <span m='2714160'>the</span> <span
  m='2714310'>shortest</span> <span m='2715030'>simple</span> <span
  m='2715820'>path</span> <span m='2717340'>that</span> <span
  m='2719430'>reaches</span> <span m='2720020'>v</span> <span
  m='2721220'>from</span> <span m='2721580'>s.</span> <span
  m='2723250'>OK?</span> </p><p><span m='2724110'>What</span> <span
  m='2724290'>is</span> <span m='2724390'>the</span> <span
  m='2724480'>shortest</span> <span m='2724910'>simple</span> <span
  m='2725300'>path</span> <span m='2725700'>that</span> <span
  m='2725850'>reaches</span> <span m='2726270'>v</span> <span
  m='2726560'>from</span> <span m='2726850'>s?</span> <span
  m='2727670'>It's</span> <span m='2727850'>this</span> <span
  m='2728070'>path</span> <span m='2728510'>that</span> <span
  m='2728670'>goes</span> <span m='2728870'>horizontally,</span> <span
  m='2729890'>which</span> <span m='2730840'>has</span> <span
  m='2731010'>a</span> <span m='2731070'>weight</span> <span
  m='2731350'>3</span> <span m='2731540'>plus</span> <span m='2731800'>2,</span>
  <span m='2732090'>5,</span> <span m='2732580'>5</span> <span
  m='2732820'>plus</span> <span m='2733050'>3,</span> <span
  m='2733452'>8,</span> <span m='2733854'>8</span> <span m='2734660'>plus</span>
  <span m='2734940'>3,</span> <span m='2735413'>11,</span> <span
  m='2735886'>11</span> <span m='2736360'>plus</span> <span
  m='2736730'>2,</span> <span m='2737140'>13.</span> <span
  m='2738470'>All</span> <span m='2738540'>right?</span> <span
  m='2739240'>So</span> <span m='2740270'>the</span> <span
  m='2740360'>shortest</span> <span m='2744090'>simple</span> <span
  m='2744670'>path</span> <span m='2747270'>is</span> <span
  m='2747490'>13.</span> <span m='2748580'>Will</span> <span
  m='2748720'>Bellman-Ford</span> <span m='2750200'>give</span> <span
  m='2750370'>you</span> <span m='2750500'>any</span> <span
  m='2750800'>information</span> <span m='2751430'>about</span> <span
  m='2751670'>this</span> <span m='2751830'>path?</span> </p><p><span
  m='2754610'>AUDIENCE:</span> <span m='2755060'>[INAUDIBLE].</span>
  </p><p><span m='2755510'>PROFESSOR: No</span> <span m='2756520'>because</span>
  <span m='2756780'>in</span> <span m='2756920'>[INAUDIBLE].</span> <span
  m='2757910'>After</span> <span m='2759060'>it</span> <span
  m='2759540'>does</span> <span m='2759830'>its</span> <span
  m='2760000'>v</span> <span m='2760500'>minus</span> <span m='2760750'>1</span>
  <span m='2760950'>passes,</span> <span m='2762660'>v</span> <span
  m='2763620'>is</span> <span m='2764720'>reachable</span> <span
  m='2765240'>from</span> <span m='2765390'>s.</span> <span
  m='2766200'>But</span> <span m='2767280'>you</span> <span
  m='2769620'>potentially</span> <span m='2770140'>go</span> <span
  m='2770310'>through</span> <span m='2770520'>a</span> <span
  m='2770570'>negative</span> <span m='2770870'>weight</span> <span
  m='2771040'>cycle</span> <span m='2771480'>before</span> <span
  m='2771770'>you</span> <span m='2771900'>reach</span> <span
  m='2772140'>v.</span> <span m='2773230'>OK?</span> <span m='2774700'>So</span>
  <span m='2774830'>it</span> <span m='2774950'>turns</span> <span
  m='2775210'>out</span> <span m='2775530'>that</span> <span
  m='2776460'>if</span> <span m='2776690'>you</span> <span
  m='2776830'>have</span> <span m='2777050'>a</span> <span
  m='2777110'>graph</span> <span m='2777630'>with</span> <span
  m='2777850'>negative</span> <span m='2778280'>weight</span> <span
  m='2778550'>cycles,</span> <span m='2779930'>finding</span> <span
  m='2780370'>the</span> <span m='2780450'>shortest</span> <span
  m='2780880'>simple</span> <span m='2781370'>path</span> <span
  m='2782470'>is</span> <span m='2782660'>an</span> <span
  m='2782960'>NP-hard</span> <span m='2783520'>problem.</span> <span
  m='2784520'>It's a</span> <span m='2784680'>really</span> <span
  m='2784860'>hard</span> <span m='2785210'>problem.</span> <span
  m='2786240'>That's</span> <span m='2786340'>what</span> <span
  m='2786500'>NP</span> <span m='2786820'>means.</span> </p><p><span
  m='2787680'>No,</span> <span m='2788650'>it</span> <span
  m='2788800'>means</span> <span m='2789520'>something</span> <span
  m='2789790'>else</span> <span m='2789980'>that</span> <span
  m='2790170'>Eric</span> <span m='2790420'>will</span> <span
  m='2790530'>explain</span> <span m='2790870'>to</span> <span
  m='2790940'>you</span> <span m='2791500'>in</span> <span m='2792620'>a</span>
  <span m='2792650'>month</span> <span m='2792910'>or</span> <span
  m='2792990'>so.</span> <span m='2793550'>But</span> <span
  m='2793780'>it</span> <span m='2793990'>means</span> <span
  m='2794220'>that</span> <span m='2794370'>we</span> <span
  m='2794470'>don't</span> <span m='2794670'>know</span> <span
  m='2795280'>any</span> <span m='2795500'>algorithm</span> <span
  m='2796440'>that</span> <span m='2796600'>is</span> <span
  m='2796720'>better</span> <span m='2797020'>than</span> <span
  m='2797180'>exponential</span> <span m='2797870'>time</span> <span
  m='2798800'>to</span> <span m='2798900'>solve</span> <span
  m='2799220'>this</span> <span m='2799380'>problem.</span> <span
  m='2800500'>OK?</span> <span m='2802140'>So</span> <span
  m='2804040'>amazingly,</span> <span m='2805430'>all</span> <span
  m='2805630'>you've</span> <span m='2805760'>done</span> <span
  m='2805990'>is</span> <span m='2806110'>taken</span> <span
  m='2807130'>the</span> <span m='2807270'>shortest</span> <span
  m='2807650'>path</span> <span m='2807940'>problem</span> <span
  m='2808620'>and</span> <span m='2808840'>changed</span> <span
  m='2809220'>it</span> <span m='2809580'>ever</span> <span
  m='2809840'>so</span> <span m='2810010'>slightly.</span> </p><p><span
  m='2811170'>You</span> <span m='2811280'>said</span> <span
  m='2811460'>I</span> <span m='2811480'>want</span> <span m='2811620'>to</span>
  <span m='2811670'>look</span> <span m='2811860'>for</span> <span
  m='2811950'>the</span> <span m='2812050'>shortest</span> <span
  m='2812450'>simple</span> <span m='2812830'>path</span> <span
  m='2813610'>in</span> <span m='2813800'>the</span> <span
  m='2813910'>general</span> <span m='2814340'>case</span> <span
  m='2815440'>where</span> <span m='2816280'>I</span> <span
  m='2816380'>could,</span> <span m='2816520'>potentially,</span> <span
  m='2816970'>have</span> <span m='2817400'>negative</span> <span
  m='2817930'>weight</span> <span m='2818240'>cycles</span> <span
  m='2819410'>in</span> <span m='2819560'>my</span> <span
  m='2819690'>graph.</span> <span m='2820770'>And when</span> <span
  m='2821050'>you</span> <span m='2821170'>do</span> <span
  m='2821290'>that,</span> <span m='2822070'>all</span> <span
  m='2822250'>bets</span> <span m='2822480'>are</span> <span
  m='2822590'>off.</span> <span m='2823370'>You're</span> <span
  m='2823550'>not</span> <span m='2823730'>in</span> <span
  m='2823800'>the</span> <span m='2823890'>polynomial</span> <span
  m='2824840'>time</span> <span m='2825230'>complexity</span> <span
  m='2825710'>domain</span> <span m='2826020'>anymore.</span> <span
  m='2826470'>At</span> <span m='2826570'>least,</span> <span
  m='2827050'>not</span> <span m='2827190'>that</span> <span
  m='2827310'>we</span> <span m='2827410'>know</span> <span
  m='2827610'>of.</span> <span m='2828630'>And</span> <span
  m='2829490'>the</span> <span m='2829630'>best</span> <span
  m='2829870'>that</span> <span m='2829980'>you</span> <span
  m='2830080'>can</span> <span m='2830220'>do</span> <span m='2830490'>is</span>
  <span m='2831230'>an</span> <span m='2831450'>exponential</span> <span
  m='2831960'>time</span> <span m='2832220'>algorithm</span> <span
  m='2833045'>to</span> <span m='2833400'>find</span> <span
  m='2833780'>shorter</span> <span m='2834080'>simple</span> <span
  m='2834480'>paths.</span> </p><p><span m='2835430'>And</span> <span
  m='2835800'>this</span> <span m='2836000'>problem,</span> <span
  m='2836590'>as</span> <span m='2836740'>it</span> <span
  m='2836810'>turns</span> <span m='2837100'>out,</span> <span
  m='2837370'>is</span> <span m='2837540'>equivalent</span> <span
  m='2838520'>to</span> <span m='2838900'>the</span> <span
  m='2839490'>longest</span> <span m='2842720'>path</span> <span
  m='2843040'>problem</span> <span m='2844390'>in</span> <span
  m='2844500'>the</span> <span m='2844600'>sense</span> <span
  m='2844850'>that</span> <span m='2844940'>they're</span> <span
  m='2845040'>both</span> <span m='2845290'>NP-hard.</span> <span
  m='2846700'>If</span> <span m='2846880'>you</span> <span m='2847030'>can
  solve</span> <span m='2847190'>one,</span> <span m='2847380'>you</span> <span
  m='2847480'>could</span> <span m='2847590'>solve</span> <span
  m='2847820'>the</span> <span m='2847880'>other.</span> <span
  m='2849840'>So</span> <span m='2850300'>to</span> <span
  m='2850390'>summarize,</span> <span m='2851690'>what</span> <span
  m='2851860'>happens</span> <span m='2852190'>here</span> <span
  m='2852660'>simply</span> <span m='2853050'>is</span> <span
  m='2853220'>that</span> <span m='2854280'>in</span> <span
  m='2854410'>the</span> <span m='2854490'>case</span> <span
  m='2854790'>of</span> <span m='2854920'>Bellman-Ford</span> <span
  m='2856140'>running</span> <span m='2856590'>on</span> <span
  m='2858210'>the</span> <span m='2859740'>original</span> <span
  m='2860210'>shortest</span> <span m='2860580'>path</span> <span
  m='2860840'>problem,</span> <span m='2861910'>you're</span> <span
  m='2862500'>allowed</span> <span m='2862810'>to</span> <span
  m='2862870'>abort</span> <span m='2864140'>when</span> <span
  m='2864720'>you</span> <span m='2865420'>detect</span> <span
  m='2865860'>the</span> <span m='2866070'>fact</span> <span
  m='2866380'>that</span> <span m='2866510'>there's</span> <span
  m='2866650'>a</span> <span m='2866700'>negative</span> <span
  m='2867040'>cycle.</span> </p><p><span m='2868640'>So</span> <span
  m='2868890'>given</span> <span m='2869140'>that</span> <span
  m='2869260'>you're</span> <span m='2869390'>allowed</span> <span
  m='2869710'>to</span> <span m='2869810'>abort</span> <span
  m='2870460'>when</span> <span m='2870690'>there's</span> <span
  m='2870880'>a</span> <span m='2870940'>negative</span> <span
  m='2871260'>cycle,</span> <span m='2872170'>you</span> <span
  m='2872270'>have</span> <span m='2872400'>a</span> <span
  m='2872470'>polynomial</span> <span m='2873040'>time</span> <span
  m='2873750'>solution</span> <span m='2875090'>using</span> <span
  m='2875420'>Bellman-Ford</span> <span m='2876720'>that</span> <span
  m='2877180'>is</span> <span m='2877490'>not</span> <span
  m='2877750'>necessarily</span> <span m='2878760'>going</span> <span
  m='2878910'>to</span> <span m='2878950'>give</span> <span
  m='2879180'>you</span> <span m='2879520'>shortest</span> <span
  m='2879880'>path</span> <span m='2880110'>weights</span> <span
  m='2881320'>but</span> <span m='2882660'>will</span> <span
  m='2882980'>in</span> <span m='2883060'>the</span> <span
  m='2883160'>case</span> <span m='2883830'>of</span> <span
  m='2884370'>no</span> <span m='2884600'>negative</span> <span
  m='2884890'>cycles.</span> <span m='2886120'>All</span> <span
  m='2886190'>right?</span> <span m='2887610'>But</span> <span
  m='2887790'>if</span> <span m='2887880'>you</span> <span
  m='2888030'>ask</span> <span m='2888430'>for</span> <span
  m='2888620'>more--</span> <span m='2888976'>a</span> <span
  m='2889690'>little</span> <span m='2889920'>bit</span> <span
  m='2890110'>more--</span> <span m='2891030'>you</span> <span
  m='2891170'>said,</span> <span m='2891770'>you</span> <span
  m='2891870'>know,</span> <span m='2892530'>it'd</span> <span
  m='2892640'>be</span> <span m='2892740'>great</span> <span
  m='2893150'>if</span> <span m='2893320'>you</span> <span
  m='2893480'>could</span> <span m='2893650'>somehow</span> <span
  m='2894040'>process</span> <span m='2894455'>these</span> <span
  m='2894870'>negative</span> <span m='2895230'>cycles</span> <span
  m='2896530'>and</span> <span m='2897020'>tell</span> <span
  m='2897350'>me</span> <span m='2898080'>that</span> <span
  m='2898300'>if</span> <span m='2898600'>I</span> <span m='2899160'>had</span>
  <span m='2899530'>a</span> <span m='2899590'>simple</span> <span
  m='2899980'>path</span> <span m='2900570'>and</span> <span
  m='2901020'>I</span> <span m='2901560'>don't</span> <span
  m='2901810'>go</span> <span m='2901950'>through</span> <span
  m='2902130'>cycles</span> <span m='2902980'>what</span> <span
  m='2903140'>would</span> <span m='2903270'>the</span> <span
  m='2903340'>shortest</span> <span m='2903900'>weight</span> <span
  m='2904110'>be,</span> <span m='2904425'>it</span> <span
  m='2904740'>becomes</span> <span m='2905030'>a</span> <span
  m='2905080'>much</span> <span m='2905520'>more</span> <span
  m='2905700'>difficult</span> <span m='2906040'>problem.</span> </p><p><span
  m='2907660'>It</span> <span m='2907790'>goes</span> <span
  m='2908000'>from</span> <span m='2908180'>order of</span> <span
  m='2908380'>ve</span> <span m='2908790'>complexity</span> <span
  m='2909450'>to</span> <span m='2909640'>exponential</span> <span
  m='2910230'>time</span> <span m='2910450'>complexity</span> <span
  m='2911410'>to</span> <span m='2911480'>the</span> <span
  m='2911560'>best</span> <span m='2911770'>of</span> <span
  m='2911830'>our</span> <span m='2911960'>knowledge.</span> <span
  m='2914260'>So</span> <span m='2914980'>that's</span> <span
  m='2915290'>what</span> <span m='2915460'>I'd</span> <span
  m='2915560'>like</span> <span m='2915720'>to</span> <span
  m='2915800'>leave</span> <span m='2915970'>you</span> <span
  m='2916080'>with.</span> <span m='2916770'>That</span> <span
  m='2917010'>there's</span> <span m='2917180'>much</span> <span
  m='2917420'>more</span> <span m='2918320'>to</span> <span
  m='2919770'>algorithms</span> <span m='2920060'>than</span> <span
  m='2920480'>just</span> <span m='2920700'>the</span> <span
  m='2920900'>ones</span> <span m='2921160'>that</span> <span
  m='2921300'>we're</span> <span m='2921420'>looking</span> <span
  m='2921690'>at.</span> <span m='2922230'>And</span> <span
  m='2922380'>we</span> <span m='2922480'>get</span> <span m='2922620'>a</span>
  <span m='2922920'>little</span> <span m='2923120'>bit</span> <span
  m='2923240'>of</span> <span m='2923310'>a</span> <span
  m='2923380'>preview</span> <span m='2923730'>of</span> <span
  m='2923850'>this--</span> <span m='2924460'>so</span> <span
  m='2924600'>the</span> <span m='2924690'>difference</span> <span
  m='2925080'>between</span> <span m='2925300'>polynomial</span> <span
  m='2925800'>time</span> <span m='2926120'>an</span> <span
  m='2926200'>exponential</span> <span m='2926720'>time--</span> <span
  m='2927360'>later</span> <span m='2927620'>on</span> <span
  m='2927770'>in</span> <span m='2927880'>the</span> <span
  m='2927960'>term.</span> </p>
uid: ae43980d9777639340a8b145999421d3
type: courses
layout: video
---
