---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture begins with a review of graphs
  and applications of graph search, discusses graph representations such as
  adjacency lists, and covers breadth-first search.</p>
  <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: s-CYnVz-uh4
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Video-YouTube-Stream
    type: Video
    uid: 42fddc3e5c34f2fad24d1b6acb4aa421
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/s-CYnVz-uh4/default.jpg'
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9110c90794b1477d9d50c62c04da3a8a
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-13-breadth-first-search/id585700718?i=126127766
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Video-iTunes U-MP4
    type: Video
    uid: 2815d689d523edcbd6648dc3bde1905e
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec13_300k.mp4'
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Video-Internet Archive-MP4
    type: Video
    uid: ffcf46decba1837d70c8d6ecee6f29ef
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: s-CYnVz-uh4
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3df3e7a87c93ab06e6027a7e237b33fb
  - id: s-CYnVz-uh4.srt
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-13-breadth-first-search-bfs/s-CYnVz-uh4.srt
    title: 3play caption file
    type: null
    uid: 48fc4f7fbda53bb1f794910d6fe87f0d
  - id: s-CYnVz-uh4.pdf
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-13-breadth-first-search-bfs/s-CYnVz-uh4.pdf
    title: 3play pdf file
    type: null
    uid: e8b259b758c98d918d9e86aaecf368f8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 94a330d6a35180cd54ba52126bc53cf5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 24d637b65c931a49c3417e24796b2885
inline_embed_id: '85030642lecture13:breadth-firstsearch(bfs)42156202'
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-13-breadth-first-search-bfs
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-13-breadth-first-search-bfs
title: 'Lecture 13: Breadth-First Search (BFS)'
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13330'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15560'>visit</span> <span
  m='15770'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17240'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22340'>PROFESSOR: Today</span> <span m='22620'>we're</span> <span
  m='22720'>going</span> <span m='22820'>to</span> <span
  m='22870'>introduce</span> <span m='23530'>graph</span> <span
  m='23720'>search</span> <span m='23980'>in</span> <span
  m='24070'>general</span> <span m='24570'>and</span> <span
  m='24690'>talk</span> <span m='24870'>about</span> <span m='25100'>one</span>
  <span m='25270'>algorithm,</span> <span m='25820'>which</span> <span
  m='25890'>is</span> <span m='26020'>breadth-first</span> <span
  m='26480'>search,</span> <span m='27370'>and</span> <span
  m='27600'>understand</span> <span m='28090'>how</span> <span
  m='28390'>in</span> <span m='28550'>principle</span> <span
  m='29310'>you</span> <span m='29340'>can</span> <span m='29510'>solve</span>
  <span m='29910'>a</span> <span m='29980'>puzzle</span> <span
  m='30440'>like</span> <span m='30810'>the</span> <span
  m='31050'>Rubik's</span> <span m='31380'>Cube.</span> <span
  m='33180'>So</span> <span m='34440'>before</span> <span m='34930'>I</span>
  <span m='34990'>get</span> <span m='35170'>to</span> <span
  m='35270'>Rubik's</span> <span m='35610'>Cubes</span> <span
  m='36000'>let</span> <span m='36190'>me</span> <span m='37250'>remind</span>
  <span m='37770'>you</span> <span m='37990'>of</span> <span
  m='38150'>some</span> <span m='39200'>basic</span> <span
  m='39770'>stuff</span> <span m='40150'>about</span> <span
  m='40450'>graphs.</span> <span m='41942'>Or I can</span> <span
  m='42330'>tell</span> <span m='42680'>you</span> <span m='43450'>to</span>
  <span m='43850'>start</span> <span m='44200'>out</span> <span
  m='44420'>with,</span> <span m='45390'>graph</span> <span
  m='45730'>search</span> <span m='50070'>is</span> <span m='50380'>about</span>
  <span m='51810'>exploring</span> <span m='52510'>a</span> <span
  m='52580'>graph.</span> <span m='55890'>And</span> <span
  m='56270'>there's</span> <span m='56410'>many</span> <span
  m='56710'>different</span> <span m='57010'>notions</span> <span
  m='57400'>of</span> <span m='57540'>exploring</span> <span m='57980'>a</span>
  <span m='58040'>graph.</span> </p><p><span m='58980'>Maybe</span> <span
  m='59890'>I</span> <span m='60050'>give</span> <span m='60320'>you</span>
  <span m='60540'>some</span> <span m='60830'>node</span> <span
  m='61050'>in</span> <span m='61160'>a</span> <span m='61210'>graph,</span>
  <span m='61630'>s,</span> <span m='61950'>and</span> <span
  m='62090'>some</span> <span m='62250'>other</span> <span m='62430'>node</span>
  <span m='62620'>in a</span> <span m='62730'>graph,</span> <span
  m='63135'>t,</span> <span m='63790'>and I'd</span> <span m='64050'>like</span>
  <span m='64330'>to</span> <span m='64440'>find</span> <span m='64760'>a</span>
  <span m='64810'>path</span> <span m='66710'>that's</span> <span
  m='66940'>going</span> <span m='67070'>to</span> <span
  m='67140'>represent</span> <span m='67660'>a</span> <span
  m='67720'>problem</span> <span m='68200'>like</span> <span m='68830'>I</span>
  <span m='68950'>give</span> <span m='69210'>you</span> <span
  m='69390'>a</span> <span m='69480'>particular</span> <span
  m='70580'>state</span> <span m='70970'>of</span> <span m='71070'>a</span>
  <span m='71160'>Rubik's</span> <span m='71520'>Cube</span> <span
  m='72340'>and</span> <span m='72550'>I</span> <span m='72590'>want</span>
  <span m='72810'>to</span> <span m='72880'>know</span> <span
  m='73140'>is</span> <span m='73360'>there</span> <span m='73520'>some</span>
  <span m='73690'>path</span> <span m='74450'>that</span> <span
  m='74610'>gets</span> <span m='74860'>me</span> <span m='75110'>into</span>
  <span m='75950'>a</span> <span m='76070'>solved</span> <span
  m='76420'>state?</span> <span m='76800'>Do I</span> <span
  m='76950'>really</span> <span m='77160'>want</span> <span m='77300'>to</span>
  <span m='77340'>solve</span> <span m='77640'>this</span> <span
  m='77840'>on</span> <span m='77940'>stage?</span> <span m='78200'>What</span>
  <span m='78460'>the</span> <span m='78860'>hell?</span> <span
  m='79230'>We</span> <span m='79330'>started.</span> <span m='81650'>So</span>
  <span m='82120'>this</span> <span m='82310'>is</span> <span m='82460'>a</span>
  <span m='82530'>particularly</span> <span m='83150'>easy</span> <span
  m='83430'>state</span> <span m='83750'>to</span> <span m='83970'>solve,</span>
  <span m='84410'>which</span> <span m='84700'>is why</span> <span
  m='84990'>I</span> <span m='85130'>set</span> <span m='85430'>up</span> <span
  m='85620'>this</span> <span m='85780'>way.</span> <span m='86820'>All</span>
  <span m='87210'>right,</span> <span m='87450'>so</span> <span
  m='87580'>there</span> <span m='87770'>you</span> <span m='87830'>go.</span>
  <span m='87940'>Seven</span> <span m='88360'>by</span> <span
  m='88510'>seven</span> <span m='88840'>by</span> <span m='88990'>seven</span>
  <span m='89720'>Rubik's</span> <span m='90050'>Cube</span> <span
  m='90210'>solved</span> <span m='90680'>in</span> <span m='90870'>10</span>
  <span m='91110'>seconds.</span> <span m='91510'>Amazing.</span> <span
  m='93650'>New</span> <span m='93830'>world</span> <span
  m='94140'>record.</span> </p><p><span m='96030'>So</span> <span
  m='96780'>you're</span> <span m='96960'>given</span> <span
  m='97320'>some</span> <span m='97510'>initial</span> <span
  m='98300'>state</span> <span m='98570'>of</span> <span m='98840'>the</span>
  <span m='99140'>Rubik's</span> <span m='99470'>Cube.</span> <span
  m='99670'>You're</span> <span m='99790'>given</span> <span
  m='100100'>the</span> <span m='100230'>targets</span> <span m='100630'>that
  you know</span> <span m='100740'>what</span> <span m='101250'>solved</span>
  <span m='101530'>looks</span> <span m='101740'>like.</span> <span
  m='102160'>You</span> <span m='102320'>want</span> <span m='102450'>to</span>
  <span m='102570'>find</span> <span m='102840'>this</span> <span
  m='103020'>path.</span> <span m='105000'>Maybe</span> <span
  m='106070'>you</span> <span m='106250'>want</span> <span m='106440'>to</span>
  <span m='106500'>find</span> <span m='106740'>all</span> <span
  m='106950'>paths</span> <span m='107400'>from</span> <span
  m='107685'>s.</span> <span m='107970'>Maybe you</span> <span
  m='108240'>just</span> <span m='108410'>want</span> <span m='108540'>to</span>
  <span m='108580'>explore</span> <span m='109040'>all</span> <span
  m='109360'>the</span> <span m='109460'>nodes</span> <span m='109720'>in</span>
  <span m='109810'>a</span> <span m='109860'>graph</span> <span
  m='110280'>you</span> <span m='110320'>can</span> <span
  m='110450'>reach</span> <span m='110660'>from</span> <span
  m='110830'>s.</span> <span m='111160'>Maybe</span> <span m='111410'>you want
  to</span> <span m='111570'>explore</span> <span m='111980'>all</span> <span
  m='112260'>the</span> <span m='112370'>nodes</span> <span m='112610'>in</span>
  <span m='112710'>a</span> <span m='112760'>graph</span> <span
  m='113090'>or</span> <span m='113150'>maybe</span> <span m='113460'>all</span>
  <span m='113630'>the</span> <span m='113760'>edges</span> <span
  m='114040'>in</span> <span m='114100'>a</span> <span m='114180'>graph.</span>
  <span m='114460'>These</span> <span m='114660'>are</span> <span
  m='114770'>all</span> <span m='115040'>exploration</span> <span
  m='115660'>problems.</span> <span m='116450'>They're</span> <span
  m='116580'>all</span> <span m='116700'>going</span> <span m='116800'>to</span>
  <span m='116850'>be</span> <span m='116960'>solved</span> <span
  m='117310'>by</span> <span m='117450'>algorithms</span> <span
  m='117910'>from</span> <span m='118040'>this</span> <span
  m='118220'>class</span> <span m='118690'>and</span> <span
  m='118890'>next</span> <span m='119100'>class.</span> </p><p><span
  m='121640'>So</span> <span m='122930'>before</span> <span m='123280'>we</span>
  <span m='123380'>go</span> <span m='123520'>further</span> <span
  m='123830'>though,</span> <span m='124190'>I</span> <span
  m='124350'>should</span> <span m='125490'>remind</span> <span
  m='125900'>you</span> <span m='126020'>what</span> <span m='126160'>a</span>
  <span m='126220'>graph</span> <span m='126630'>is</span> <span
  m='127330'>and</span> <span m='127560'>sort</span> <span m='127740'>of</span>
  <span m='127810'>basic</span> <span m='128970'>features</span> <span
  m='129410'>of</span> <span m='129550'>graphs</span> <span
  m='130169'>that</span> <span m='130289'>we're</span> <span
  m='130410'>going</span> <span m='130539'>to</span> <span m='130600'>be</span>
  <span m='130720'>using.</span> <span m='132230'>This</span> <span
  m='132520'>is</span> <span m='132680'>also</span> <span m='133020'>6042</span>
  <span m='133570'>material</span> <span m='134060'>so</span> <span
  m='134180'>you</span> <span m='134300'>should</span> <span
  m='134510'>know</span> <span m='134640'>it</span> <span m='134740'>very</span>
  <span m='134950'>well.</span> <span m='135390'>If</span> <span
  m='135770'>you</span> <span m='136055'>don't,</span> <span
  m='136340'>there's</span> <span m='136590'>an</span> <span
  m='136680'>appendix</span> <span m='137120'>in</span> <span
  m='137170'>the</span> <span m='137260'>textbook</span> <span
  m='137690'>about</span> <span m='137980'>it.</span> <span m='138820'>We</span>
  <span m='138970'>have a</span> <span m='139120'>set of</span> <span
  m='139320'>vertices.</span> <span m='140310'>We</span> <span
  m='140400'>have</span> <span m='140480'>a</span> <span m='140540'>set</span>
  <span m='140720'>of</span> <span m='140780'>edges.</span> <span
  m='153360'>Edges</span> <span m='154780'>are</span> <span
  m='155290'>either</span> <span m='157500'>unordered</span> <span
  m='158270'>pairs--</span> <span m='161460'>some</span> <span
  m='161790'>sets</span> <span m='162580'>of</span> <span m='162760'>two</span>
  <span m='163920'>items--</span> <span m='167140'>or</span> <span
  m='170000'>ordered</span> <span m='170360'>pairs.</span> <span
  m='178230'>In</span> <span m='178480'>this</span> <span
  m='178660'>case,</span> <span m='179160'>we</span> <span
  m='179360'>call</span> <span m='179740'>the</span> <span
  m='179820'>graph</span> <span m='180170'>undirected.</span> <span
  m='182270'>In</span> <span m='182420'>this</span> <span
  m='182620'>case,</span> <span m='182860'>we</span> <span
  m='182970'>call</span> <span m='183180'>the</span> <span
  m='183270'>graph</span> <span m='183570'>directed.</span> <span
  m='184920'>Usually,</span> <span m='186500'>there's</span> <span
  m='186680'>only</span> <span m='186980'>one</span> <span
  m='187280'>type.</span> <span m='187630'>Either</span> <span
  m='187880'>all</span> <span m='188070'>the</span> <span
  m='188190'>edges</span> <span m='188450'>are</span> <span
  m='188510'>directed</span> <span m='189030'>or</span> <span
  m='189220'>all</span> <span m='189380'>the</span> <span
  m='189510'>edges</span> <span m='189810'>are</span> <span
  m='189910'>undirected.</span> <span m='191720'>There</span> <span
  m='191930'>is</span> <span m='192030'>a</span> <span m='192110'>study</span>
  <span m='192450'>of</span> <span m='192510'>graphs</span> <span
  m='192800'>that</span> <span m='192880'>have</span> <span
  m='193020'>both,</span> <span m='193440'>but</span> <span m='193810'>we</span>
  <span m='194160'>are</span> <span m='194290'>not</span> <span
  m='194500'>doing</span> <span m='194680'>that</span> <span
  m='194970'>here.</span> </p><p><span m='198720'>Some</span> <span
  m='199740'>simple</span> <span m='200040'>examples.</span> <span
  m='203350'>Here is</span> <span m='203660'>a</span> <span
  m='203710'>graph.</span> <span m='209570'>This</span> <span
  m='209610'>is</span> <span m='209660'>an</span> <span
  m='209850'>undirected</span> <span m='210370'>graph.</span> <span
  m='222820'>This</span> <span m='223010'>is</span> <span m='223110'>a</span>
  <span m='223180'>directed</span> <span m='223590'>graph.</span> <span
  m='228590'>The</span> <span m='228680'>set</span> <span m='228870'>of</span>
  <span m='228920'>vertices</span> <span m='229350'>here is</span> <span
  m='229630'>a,</span> <span m='229820'>b, c, d.</span> <span
  m='230115'>The</span> <span m='230410'>set</span> <span m='230610'>of</span>
  <span m='230650'>vertices</span> <span m='231060'>here is</span> <span
  m='231430'>a,</span> <span m='231780'>b,</span> <span m='232130'>c.</span>
  <span m='232525'>The</span> <span m='232920'>set</span> <span
  m='233100'>of</span> <span m='233190'>edges</span> <span
  m='233530'>here</span> <span m='234000'>is--</span> <span m='235180'>E</span>
  <span m='236640'>is</span> <span m='236830'>going</span> <span
  m='236990'>to</span> <span m='237070'>be</span> <span m='238520'>things</span>
  <span m='238940'>like</span> <span m='239360'>a,</span> <span
  m='239540'>b;</span> <span m='241895'>b,</span> <span m='242366'>c;</span>
  <span m='243779'>c, d--</span> <span m='244250'>I think</span> <span
  m='244870'>you</span> <span m='244960'>get</span> <span m='245120'>the</span>
  <span m='245220'>idea.</span> <span m='249780'>Just</span> <span
  m='250060'>for</span> <span m='250200'>completeness,</span> <span
  m='251250'>V</span> <span m='251630'>is</span> <span m='252070'>a, b,
  c,</span> <span m='252410'>d.</span> <span m='252750'>Just</span> <span
  m='252960'>so</span> <span m='253110'>you</span> <span
  m='253250'>remember</span> <span m='253620'>notations</span> <span
  m='253980'>and so</span> <span m='254340'>on.</span> </p><p><span
  m='257480'>One</span> <span m='257750'>of</span> <span m='257880'>the</span>
  <span m='258029'>issues</span> <span m='258430'>we're</span> <span
  m='258570'>going</span> <span m='258680'>to</span> <span
  m='258750'>talk</span> <span m='258950'>about</span> <span
  m='259130'>in</span> <span m='259180'>this</span> <span
  m='259339'>class</span> <span m='259589'>is</span> <span m='259690'>how</span>
  <span m='259920'>do</span> <span m='259990'>you</span> <span
  m='260170'>represent</span> <span m='260720'>a</span> <span
  m='260779'>graph</span> <span m='261079'>like</span> <span
  m='261269'>this</span> <span m='262100'>for</span> <span m='262460'>an</span>
  <span m='262700'>algorithm?</span> <span m='263630'>So</span> <span
  m='263760'>it's</span> <span m='263880'>all</span> <span
  m='264030'>fine</span> <span m='264280'>to</span> <span m='264350'>say,</span>
  <span m='264670'>oh,</span> <span m='264800'>this</span> <span
  m='264850'>is</span> <span m='264970'>a</span> <span m='265040'>set</span>
  <span m='265240'>of</span> <span m='265350'>things.</span> <span
  m='265770'>This</span> <span m='265820'>is</span> <span m='265950'>a</span>
  <span m='266010'>set</span> <span m='266220'>of</span> <span
  m='266320'>things.</span> <span m='267070'>An</span> <span
  m='267160'>obvious</span> <span m='267480'>representation</span> <span
  m='268230'>is,</span> <span m='268390'>you</span> <span m='268490'>have</span>
  <span m='268710'>a</span> <span m='268810'>list</span> <span m='269590'>or
  an</span> <span m='269760'>array</span> <span m='270190'>of</span> <span
  m='270260'>vertices.</span> <span m='271120'>You</span> <span
  m='271230'>have</span> <span m='271420'>an</span> <span
  m='271490'>array</span> <span m='271930'>of</span> <span
  m='272100'>edges.</span> <span m='272520'>Each</span> <span
  m='272740'>edge</span> <span m='273070'>knows</span> <span
  m='273300'>its</span> <span m='273440'>two</span> <span m='273590'>end</span>
  <span m='273750'>points.</span> <span m='274320'>That</span> <span
  m='274470'>would</span> <span m='274550'>be</span> <span m='274650'>a</span>
  <span m='274770'>horrible</span> <span m='275410'>representation</span> <span
  m='276970'>for a</span> <span m='277240'>graph</span> <span
  m='277650'>because</span> <span m='277940'>if</span> <span
  m='278070'>you're,</span> <span m='278510'>I don't</span> <span
  m='278740'>know,</span> <span m='279250'>at</span> <span m='279540'>vertex,
  a,</span> <span m='279920'>and</span> <span m='280130'>you</span> <span
  m='280240'>want</span> <span m='280400'>to</span> <span m='280450'>know,
  well</span> <span m='280730'>what</span> <span m='280950'>are</span> <span
  m='281010'>the</span> <span m='281130'>neighbors</span> <span
  m='281550'>of</span> <span m='281670'>a?</span> <span m='282340'>b</span>
  <span m='282500'>and</span> <span m='282630'>c.</span> <span
  m='283260'>You'd</span> <span m='283370'>have</span> <span
  m='283560'>to</span> <span m='283660'>go</span> <span
  m='283810'>through</span> <span m='283980'>the</span> <span
  m='284110'>entire</span> <span m='284710'>edge</span> <span
  m='284900'>list</span> <span m='285290'>to</span> <span
  m='285390'>figure</span> <span m='285650'>out</span> <span
  m='285770'>the</span> <span m='285850'>neighbors of</span> <span
  m='286970'>a.</span> <span m='287380'>So it's been</span> <span
  m='287810'>linear</span> <span m='288160'>time</span> <span
  m='288500'>just</span> <span m='288730'>to</span> <span m='288810'>know</span>
  <span m='289310'>where</span> <span m='289460'>you</span> <span
  m='289550'>can</span> <span m='289650'>go</span> <span m='289800'>from</span>
  <span m='289980'>a.</span> <span m='290780'>So</span> <span
  m='290860'>we're</span> <span m='290960'>not</span> <span
  m='291170'>going</span> <span m='291270'>to</span> <span m='291310'>use</span>
  <span m='291460'>that</span> <span m='291640'>representation.</span> <span
  m='292340'>We're</span> <span m='292470'>going</span> <span
  m='292590'>to</span> <span m='292640'>use</span> <span m='293450'>some</span>
  <span m='293690'>better</span> <span m='293940'>representations.</span> <span
  m='295430'>Something</span> <span m='296020'>called an</span> <span
  m='296220'>adjacency</span> <span m='296750'>list.</span> </p><p><span
  m='301560'>Over</span> <span m='301790'>here,</span> <span
  m='302010'>you've</span> <span m='302190'>got</span> <span
  m='302500'>things</span> <span m='302750'>like</span> <span
  m='303670'>a,</span> <span m='304166'>c;</span> <span m='305158'>b,</span>
  <span m='305654'>c;</span> <span m='306970'>and</span> <span
  m='307400'>c,</span> <span m='307685'>b.</span> <span m='307970'>So</span>
  <span m='308110'>you</span> <span m='308220'>can</span> <span
  m='308340'>have</span> <span m='308510'>edges</span> <span
  m='308790'>in</span> <span m='308870'>both</span> <span
  m='309100'>directions.</span> <span m='310716'>What am I</span> <span
  m='311120'>missing?</span> <span m='311640'>b,</span> <span
  m='311880'>a.</span> <span m='314892'>So</span> <span m='315360'>that's</span>
  <span m='315620'>E,</span> <span m='316420'>in</span> <span
  m='316820'>that</span> <span m='317220'>case.</span> <span m='322180'>There
  are a</span> <span m='322310'>whole</span> <span m='322590'>lot</span> <span
  m='322780'>of</span> <span m='322870'>applications</span> <span
  m='323700'>of</span> <span m='323880'>graph</span> <span
  m='324120'>search.</span> <span m='325484'>I'll</span> <span m='325936'>make
  you a</span> <span m='326390'>little</span> <span m='326790'>list</span> <span
  m='327055'>to</span> <span m='327320'>talk</span> <span
  m='327570'>about</span> <span m='327950'>few of them.</span> </p><p><span
  m='332270'>So</span> <span m='332750'>we've</span> <span m='332880'>got</span>
  <span m='334500'>web</span> <span m='334750'>crawling.</span> <span
  m='339010'>You're</span> <span m='339170'>Google.</span> <span
  m='339605'>You</span> <span m='340040'>want</span> <span m='340200'>to</span>
  <span m='340240'>find</span> <span m='340470'>all</span> <span
  m='340610'>the</span> <span m='340680'>pages</span> <span m='341030'>on</span>
  <span m='341100'>the</span> <span m='341190'>web.</span> <span
  m='342100'>Most</span> <span m='342320'>people</span> <span
  m='342580'>don't</span> <span m='342770'>just</span> <span
  m='342940'>tell</span> <span m='343110'>you,</span> <span
  m='343210'>hey,</span> <span m='343580'>I've</span> <span
  m='343680'>got</span> <span m='343710'>a</span> <span m='343760'>new</span>
  <span m='343890'>page,</span> <span m='345050'>please</span> <span
  m='345400'>index</span> <span m='345830'>it.</span> <span
  m='346450'>You</span> <span m='346590'>have</span> <span m='346820'>to</span>
  <span m='347100'>just</span> <span m='347460'>keep</span> <span
  m='347710'>following</span> <span m='348190'>links--</span> <span
  m='348520'>in</span> <span m='348610'>the</span> <span m='348690'>early</span>
  <span m='348960'>days of</span> <span m='349200'>the</span> <span
  m='349300'>web,</span> <span m='349510'>this</span> <span
  m='349690'>was</span> <span m='349790'>a</span> <span m='349840'>big</span>
  <span m='350040'>deal--</span> <span m='350710'>following</span> <span
  m='351130'>links</span> <span m='351520'>finding</span> <span
  m='351920'>everything</span> <span m='352870'>that's</span> <span
  m='353050'>out</span> <span m='353270'>there.</span> <span
  m='353920'>It's</span> <span m='354010'>a</span> <span
  m='354050'>little</span> <span m='354260'>bit</span> <span
  m='354420'>of</span> <span m='354520'>an</span> <span m='354610'>issue</span>
  <span m='354950'>because</span> <span m='355370'>if</span> <span
  m='355410'>you</span> <span m='355500'>define</span> <span
  m='355870'>it</span> <span m='356010'>wrong,</span> <span
  m='356200'>the</span> <span m='356300'>internet</span> <span
  m='356650'>is</span> <span m='356810'>infinite</span> <span
  m='358280'>because</span> <span m='358560'>of</span> <span
  m='358690'>all</span> <span m='358840'>those</span> <span
  m='359180'>dynamically</span> <span m='359690'>generated</span> <span
  m='360120'>pages.</span> <span m='360600'>But</span> <span
  m='361580'>to</span> <span m='361720'>deal</span> <span m='361930'>with</span>
  <span m='362070'>that,</span> <span m='362820'>Google</span> <span
  m='363140'>goes</span> <span m='363330'>sort of</span> <span
  m='363580'>breadth-first</span> <span m='364560'>for</span> <span
  m='364670'>the</span> <span m='364750'>most</span> <span
  m='365020'>part.</span> <span m='365350'>It's prioritized</span> <span
  m='368150'>You</span> <span m='368280'>want</span> <span m='368550'>to</span>
  <span m='368860'>see</span> <span m='369120'>all the</span> <span
  m='369390'>things</span> <span m='369600'>you</span> <span
  m='369710'>can</span> <span m='369810'>reach</span> <span
  m='370380'>from</span> <span m='371210'>pages</span> <span
  m='371510'>you</span> <span m='371640'>already</span> <span
  m='371850'>have</span> <span m='372570'>and</span> <span
  m='372700'>keep</span> <span m='372880'>going.</span> <span
  m='375440'>At</span> <span m='375890'>some</span> <span
  m='376040'>point,</span> <span m='376340'>you</span> <span
  m='376450'>give</span> <span m='376650'>up</span> <span m='376890'>when</span>
  <span m='376960'>you</span> <span m='377040'>run</span> <span
  m='377210'>out</span> <span m='377300'>of</span> <span m='377400'>time.</span>
  </p><p><span m='379130'>Social</span> <span m='379480'>networking.</span>
  <span m='381130'>You're</span> <span m='381620'>on</span> <span
  m='381730'>Facebook.</span> <span m='382000'>You</span> <span
  m='382270'>use</span> <span m='382530'>Friend</span> <span
  m='382820'>Finder.</span> <span m='383500'>It</span> <span
  m='383960'>tries</span> <span m='384210'>to</span> <span
  m='384290'>find</span> <span m='384640'>the</span> <span
  m='384720'>friends</span> <span m='385030'>that</span> <span
  m='385130'>are</span> <span m='385220'>nearest</span> <span
  m='385640'>to</span> <span m='385730'>you.</span> <span m='386260'>Or</span>
  <span m='386430'>friends</span> <span m='386810'>of</span> <span
  m='386920'>friends</span> <span m='388620'>is</span> <span
  m='388850'>sort</span> <span m='389030'>of</span> <span m='389110'>a</span>
  <span m='389170'>level</span> <span m='389610'>to</span> <span
  m='390310'>search.</span> <span m='391140'>That's</span> <span
  m='391400'>essentially a</span> <span m='391880'>graph</span> <span
  m='392160'>search</span> <span m='392460'>problem.</span> <span
  m='393340'>You</span> <span m='393460'>want</span> <span m='393610'>to</span>
  <span m='393680'>know</span> <span m='395800'>what's</span> <span
  m='396270'>two</span> <span m='396440'>levels</span> <span
  m='396870'>or</span> <span m='396930'>three</span> <span
  m='397130'>levels</span> <span m='397410'>of</span> <span
  m='397480'>separation</span> <span m='398070'>from</span> <span
  m='398250'>you.</span> <span m='399180'>And</span> <span
  m='399360'>then</span> <span m='399710'>you</span> <span
  m='400960'>loop</span> <span m='401260'>over</span> <span m='401450'>those
  and</span> <span m='401740'>look</span> <span m='401940'>for</span> <span
  m='402110'>other</span> <span m='403180'>signs</span> <span
  m='403730'>that</span> <span m='403830'>you</span> <span
  m='403940'>might</span> <span m='404190'>be</span> <span
  m='404280'>good</span> <span m='404490'>friends.</span> </p><p><span
  m='409560'>You are on a</span> <span m='409760'>network</span> <span
  m='412190'>like</span> <span m='412660'>the</span> <span
  m='412770'>internet</span> <span m='413280'>or</span> <span
  m='413470'>some</span> <span m='413700'>intranet.</span> <span
  m='414460'>You</span> <span m='414570'>want</span> <span m='414670'>to</span>
  <span m='414710'>broadcast</span> <span m='415230'>a</span> <span
  m='415270'>message.</span> <span m='416110'>So</span> <span
  m='416210'>here's</span> <span m='416490'>you.</span> <span
  m='417340'>You</span> <span m='417510'>want</span> <span m='417660'>to</span>
  <span m='417730'>send</span> <span m='418490'>data</span> <span
  m='418790'>out.</span> <span m='419350'>That's</span> <span
  m='419550'>essentially</span> <span m='419990'>a</span> <span
  m='420050'>graph</span> <span m='420710'>exploration</span> <span
  m='421430'>problem.</span> <span m='421830'>That</span> <span
  m='422130'>message,</span> <span m='422950'>that</span> <span
  m='423160'>packet,</span> <span m='423640'>is</span> <span
  m='423820'>going</span> <span m='423940'>to</span> <span
  m='423980'>explore</span> <span m='424340'>the</span> <span
  m='424450'>graph.</span> </p><p><span m='429460'>Garbage</span> <span
  m='429920'>collection.</span> <span m='434340'>I</span> <span
  m='434690'>hope</span> <span m='434900'>you</span> <span m='435020'>all
  know</span> <span m='435170'>that</span> <span m='436220'>modern</span> <span
  m='436610'>languages</span> <span m='437090'>have</span> <span
  m='437390'>garbage</span> <span m='437720'>collection.</span> <span
  m='438160'>This</span> <span m='438310'>is</span> <span m='438390'>why</span>
  <span m='439000'>you</span> <span m='439100'>don't</span> <span
  m='439250'>have</span> <span m='439420'>to</span> <span
  m='439530'>worry</span> <span m='439750'>about</span> <span
  m='440090'>freeing</span> <span m='440530'>things.</span> <span
  m='441740'>Even</span> <span m='442080'>in</span> <span
  m='442190'>Python--</span> <span m='442630'>even in</span> <span
  m='442950'>CPython,</span> <span m='443800'>I</span> <span
  m='443950'>learned--</span> <span m='444350'>there</span> <span
  m='444500'>is</span> <span m='444670'>a</span> <span m='444730'>garbage</span>
  <span m='445090'>collector</span> <span m='445930'>as</span> <span
  m='446160'>of</span> <span m='446260'>version</span> <span
  m='446610'>two.</span> <span m='447600'>But</span> <span m='447730'>also
  in</span> <span m='448030'>PyPy,</span> <span m='448820'>and</span> <span
  m='449440'>JPython</span> <span m='450015'>and</span> <span
  m='450300'>in</span> <span m='450690'>Java--</span> <span
  m='451590'>pretty</span> <span m='451840'>much</span> <span
  m='452070'>every</span> <span m='454370'>fairly</span> <span
  m='454750'>modern</span> <span m='455090'>language</span> <span
  m='455610'>you</span> <span m='455720'>have</span> <span
  m='456010'>garbage</span> <span m='456350'>collection.</span> <span
  m='456730'>Meaning,</span> <span m='457510'>if</span> <span
  m='457910'>there's</span> <span m='458100'>some</span> <span
  m='458370'>data</span> <span m='458690'>that's</span> <span
  m='458930'>unreachable</span> <span m='459860'>from--</span> <span
  m='460780'>So</span> <span m='460900'>you</span> <span m='461030'>have</span>
  <span m='461240'>your</span> <span m='461360'>variables.</span> <span
  m='463820'>Variables</span> <span m='464290'>that</span> <span
  m='464370'>can</span> <span m='464470'>be</span> <span
  m='464560'>accessed</span> <span m='464890'>by</span> <span
  m='464990'>the</span> <span m='465090'>program.</span> <span
  m='465890'>Everything</span> <span m='466300'>that's</span> <span
  m='466450'>reachable</span> <span m='466910'>from</span> <span
  m='467060'>there</span> <span m='467240'>you</span> <span
  m='467320'>have</span> <span m='467510'>to</span> <span
  m='467620'>keep.</span> <span m='468410'>But</span> <span m='468560'>if</span>
  <span m='468650'>some</span> <span m='469490'>data</span> <span
  m='469720'>structure</span> <span m='470170'>becomes</span> <span
  m='470500'>no</span> <span m='470630'>longer</span> <span
  m='470900'>reachable,</span> <span m='472020'>you</span> <span
  m='472240'>can</span> <span m='472680'>throw</span> <span m='472960'>it</span>
  <span m='473010'>away</span> <span m='473590'>and</span> <span
  m='474780'>regain</span> <span m='475190'>memory.</span> <span
  m='478040'>So</span> <span m='478190'>that's</span> <span
  m='478420'>happening</span> <span m='478790'>behind</span> <span
  m='479080'>the</span> <span m='479150'>scenes</span> <span
  m='479390'>all</span> <span m='479510'>the</span> <span
  m='479600'>time,</span> <span m='480020'>and</span> <span
  m='480170'>the</span> <span m='480250'>way</span> <span m='480420'>it's</span>
  <span m='480570'>being</span> <span m='480790'>done</span> <span
  m='481460'>is</span> <span m='481610'>with</span> <span
  m='481750'>their</span> <span m='481860'>breadth-first</span> <span
  m='482300'>search,</span> <span m='483080'>which</span> <span
  m='483170'>is</span> <span m='483270'>what</span> <span
  m='483400'>we're</span> <span m='483510'>going</span> <span
  m='483600'>to</span> <span m='483680'>talk</span> <span
  m='483920'>about</span> <span m='484560'>today.</span> </p><p><span
  m='487620'>Another</span> <span m='488100'>one.</span> <span
  m='488450'>Model</span> <span m='488790'>checking.</span> <span
  m='494890'>Model</span> <span m='495140'>checking</span> <span
  m='495540'>is--</span> <span m='495640'>you</span> <span
  m='495760'>have</span> <span m='496820'>some</span> <span
  m='498060'>finite</span> <span m='498470'>model</span> <span
  m='498755'>of</span> <span m='500870'>either</span> <span m='501250'>a</span>
  <span m='501320'>piece</span> <span m='501520'>of</span> <span
  m='501620'>code,</span> <span m='502250'>or</span> <span m='502690'>a</span>
  <span m='502760'>circuit,</span> <span m='503340'>or</span> <span
  m='503470'>chip,</span> <span m='503860'>whatever,</span> <span
  m='504205'>and</span> <span m='504550'>you</span> <span m='504690'>want</span>
  <span m='504870'>to</span> <span m='504940'>prove</span> <span
  m='505640'>that</span> <span m='505780'>it</span> <span
  m='505880'>actually</span> <span m='506220'>does</span> <span
  m='506420'>what</span> <span m='506520'>you</span> <span
  m='506630'>think</span> <span m='506840'>it</span> <span
  m='506930'>does.</span> <span m='507620'>And</span> <span m='507740'>so</span>
  <span m='507820'>you've</span> <span m='508130'>drawn</span> <span
  m='508480'>a</span> <span m='508540'>graph.</span> <span m='509530'>The</span>
  <span m='509630'>graph</span> <span m='509950'>is</span> <span
  m='510320'>all</span> <span m='510560'>the</span> <span
  m='510640'>possible</span> <span m='511220'>states</span> <span
  m='511790'>that</span> <span m='511950'>your</span> <span
  m='512799'>circuit</span> <span m='513350'>or</span> <span
  m='513530'>your</span> <span m='513710'>computer</span> <span
  m='514080'>program</span> <span m='514490'>could</span> <span
  m='514890'>reach,</span> <span m='516000'>or</span> <span
  m='516350'>that</span> <span m='516750'>it</span> <span
  m='516919'>could</span> <span m='517070'>possibly</span> <span
  m='517539'>have.</span> <span m='518419'>You</span> <span m='518549'>start
  in</span> <span m='519039'>some</span> <span m='519230'>initial</span> <span
  m='519559'>state, and</span> <span m='519960'>you</span> <span
  m='520059'>want</span> <span m='520240'>to know</span> <span
  m='520299'>among</span> <span m='520799'>all</span> <span
  m='520970'>the</span> <span m='521049'>states that</span> <span
  m='521330'>you</span> <span m='521520'>can</span> <span
  m='521669'>reach,</span> <span m='521980'>does</span> <span
  m='522159'>it</span> <span m='522240'>have</span> <span m='522450'>some</span>
  <span m='522650'>property.</span> <span m='523400'>And</span> <span
  m='523500'>so</span> <span m='523580'>you</span> <span m='523840'>need</span>
  <span m='523990'>to</span> <span m='524059'>visit</span> <span
  m='524370'>all</span> <span m='524660'>the</span> <span
  m='524720'>vertices</span> <span m='525850'>that</span> <span
  m='526050'>are</span> <span m='526130'>reachable</span> <span
  m='526550'>from</span> <span m='526730'>a</span> <span
  m='526810'>particular</span> <span m='527200'>place.</span> <span
  m='528500'>And</span> <span m='528680'>usually</span> <span
  m='529070'>people</span> <span m='529330'>do</span> <span
  m='529440'>that</span> <span m='529680'>using</span> <span
  m='530500'>breadth-first</span> <span m='530860'>search.</span> </p><p><span
  m='533720'>I</span> <span m='533930'>use</span> <span
  m='534360'>breadth-first</span> <span m='534610'>search</span> <span
  m='534960'>a</span> <span m='535020'>lot,</span> <span
  m='535390'>myself,</span> <span m='537190'>to</span> <span
  m='537440'>check</span> <span m='538530'>mathematical</span> <span
  m='539180'>conjectures.</span> <span m='539860'>So</span> <span
  m='540070'>if</span> <span m='540150'>you're a</span> <span
  m='540300'>mathematician,</span> <span m='544690'>and</span> <span
  m='545540'>you</span> <span m='545680'>think</span> <span
  m='545930'>something</span> <span m='546270'>is</span> <span
  m='546390'>true.</span> <span m='547722'>Like</span> <span
  m='548110'>maybe--</span> <span m='549810'>It's hard</span> <span
  m='549970'>to</span> <span m='550020'>give</span> <span m='550190'>an</span>
  <span m='550250'>example</span> <span m='550640'>of</span> <span
  m='550710'>that.</span> <span m='551600'>But</span> <span m='552120'>you
  can</span> <span m='552390'>imagine</span> <span m='552760'>some</span> <span
  m='552980'>graph</span> <span m='553740'>of</span> <span m='553990'>all</span>
  <span m='554240'>the</span> <span m='554330'>possible</span> <span
  m='555110'>inputs</span> <span m='555690'>to</span> <span
  m='555820'>that</span> <span m='556520'>theorem,</span> <span
  m='556930'>and</span> <span m='557010'>you</span> <span m='557100'>need</span>
  <span m='557330'>to</span> <span m='557410'>check</span> <span
  m='557700'>them</span> <span m='558330'>for</span> <span
  m='558430'>every</span> <span m='558670'>possible</span> <span
  m='559050'>input--</span> <span m='559600'>If this</span> <span
  m='559800'>is</span> <span m='559930'>true--</span> <span
  m='560390'>the</span> <span m='560645'>typical</span> <span
  m='560900'>way</span> <span m='561020'>to</span> <span m='561120'>do</span>
  <span m='561250'>that</span> <span m='561450'>is</span> <span
  m='561770'>breadth-first</span> <span m='562170'>searching</span> <span
  m='562600'>through</span> <span m='563390'>that</span> <span
  m='563610'>entire</span> <span m='564010'>graph</span> <span
  m='564480'>of</span> <span m='564650'>states.</span> </p><p><span
  m='567100'>Usually,</span> <span m='567540'>we're</span> <span
  m='567700'>testing</span> <span m='568160'>finite,</span> <span
  m='569060'>special</span> <span m='569460'>cases</span> <span
  m='569900'>of</span> <span m='570000'>a</span> <span m='570060'>general</span>
  <span m='570410'>conjecture,</span> <span m='570930'>but</span> <span
  m='571040'>if</span> <span m='571130'>we</span> <span m='571230'>find</span>
  <span m='571440'>a</span> <span m='571480'>counter-example,</span> <span
  m='572110'>we're</span> <span m='572230'>done.</span> <span
  m='572900'>Don't</span> <span m='573060'>have</span> <span
  m='573210'>to</span> <span m='573410'>work on</span> <span
  m='573630'>it</span> <span m='573770'>anymore.</span> <span
  m='574720'>If</span> <span m='574910'>we</span> <span m='574990'>don't</span>
  <span m='575190'>find</span> <span m='575360'>a</span> <span
  m='575400'>counter-example,</span> <span m='576080'>usually</span> <span
  m='576440'>then</span> <span m='576590'>we</span> <span m='576680'>have</span>
  <span m='576800'>to</span> <span m='576880'>do</span> <span
  m='576990'>the</span> <span m='577080'>mathematics.</span> <span m='578270'>It
  doesn't</span> <span m='578470'>solve</span> <span
  m='578680'>everything,</span> <span m='579607'>but</span> <span
  m='582230'>it's</span> <span m='582440'>helpful.</span> </p><p><span
  m='587600'>And</span> <span m='587690'>then,</span> <span
  m='591620'>the</span> <span m='591740'>fun</span> <span
  m='592000'>thing</span> <span m='592210'>we're</span> <span
  m='592320'>going</span> <span m='592430'>to</span> <span
  m='592520'>talk</span> <span m='592760'>about</span> <span m='592990'>a</span>
  <span m='593040'>little</span> <span m='593210'>bit</span> <span
  m='593380'>today,</span> <span m='594070'>is</span> <span m='594160'>if</span>
  <span m='594250'>you</span> <span m='594380'>want</span> <span
  m='594530'>to</span> <span m='594590'>solve</span> <span
  m='594870'>something</span> <span m='595170'>like</span> <span
  m='595360'>a</span> <span m='595420'>two</span> <span m='595570'>by</span>
  <span m='595700'>two</span> <span m='595850'>by</span> <span
  m='595990'>two</span> <span m='596210'>Rubik's</span> <span
  m='596530'>Cube</span> <span m='597150'>optimally,</span> <span
  m='598080'>you</span> <span m='598210'>can</span> <span m='598360'>do</span>
  <span m='598490'>that</span> <span m='598860'>using</span> <span
  m='599120'>breadth-first</span> <span m='599470'>search.</span> <span
  m='599730'>And</span> <span m='599810'>you're</span> <span
  m='599930'>going</span> <span m='600040'>to</span> <span m='600130'>do</span>
  <span m='600240'>that</span> <span m='600440'>on</span> <span
  m='600610'>your</span> <span m='600740'>problem</span> <span
  m='601060'>set.</span> <span m='602935'>To</span> <span m='603410'>do</span>
  <span m='603570'>it</span> <span m='603670'>solving</span> <span
  m='603990'>this</span> <span m='604180'>one</span> <span
  m='604360'>optimally</span> <span m='604850'>using</span> <span
  m='605100'>breadth-first</span> <span m='605340'>search</span> <span
  m='607480'>would</span> <span m='607730'>probably--</span> <span
  m='608800'>would</span> <span m='609020'>definitely--</span> <span
  m='609560'>take</span> <span m='609950'>more</span> <span
  m='610330'>than</span> <span m='610550'>the</span> <span
  m='610680'>lifetime</span> <span m='611140'>of</span> <span
  m='611200'>the</span> <span m='611280'>universe.</span> <span
  m='612330'>So</span> <span m='612630'>don't</span> <span m='612970'>try</span>
  <span m='613740'>seven</span> <span m='614020'>by</span> <span
  m='614130'>seven</span> <span m='614380'>by</span> <span
  m='614500'>seven.</span> <span m='617610'>Leave</span> <span
  m='617770'>that</span> <span m='618000'>to</span> <span m='618100'>the</span>
  <span m='618350'>cubing</span> <span m='618770'>experts,</span> <span
  m='619360'>I</span> <span m='619430'>guess.</span> <span m='621180'>I</span>
  <span m='621440'>think</span> <span m='621610'>no</span> <span
  m='621770'>one</span> <span m='621880'>will</span> <span
  m='622020'>ever</span> <span m='622230'>solve</span> <span m='622570'>a</span>
  <span m='622630'>seven</span> <span m='622890'>by</span> <span
  m='623000'>seven</span> <span m='623260'>by</span> <span
  m='623360'>seven</span> <span m='623610'>Rubik's</span> <span
  m='623990'>Cube</span> <span m='624190'>optimally.</span> <span
  m='626150'>There</span> <span m='626370'>are</span> <span
  m='626450'>ways</span> <span m='626650'>to</span> <span m='626750'>find</span>
  <span m='626990'>a</span> <span m='627110'>solution</span> <span
  m='627520'>just</span> <span m='627730'>not</span> <span m='627860'>the</span>
  <span m='627940'>best</span> <span m='628200'>one.</span> </p><p><span
  m='630190'>So</span> <span m='630380'>let</span> <span m='630510'>me</span>
  <span m='630640'>tell</span> <span m='630900'>you</span> <span
  m='631110'>just</span> <span m='631510'>for</span> <span
  m='631900'>fun,</span> <span m='632370'>as</span> <span m='632715'>an</span>
  <span m='633060'>example.</span> <span m='636930'>This</span> <span
  m='637310'>Pocket</span> <span m='637680'>Cube,</span> <span
  m='638190'>which</span> <span m='638270'>is a</span> <span
  m='638430'>two</span> <span m='638580'>by</span> <span m='638720'>two</span>
  <span m='638880'>by</span> <span m='639010'>two</span> <span
  m='639210'>Rubik's</span> <span m='639540'>Cube.</span> <span
  m='641530'>What</span> <span m='641770'>we</span> <span m='641880'>have</span>
  <span m='642090'>in</span> <span m='642180'>mind</span> <span
  m='643710'>is</span> <span m='644170'>called</span> <span
  m='644470'>the</span> <span m='644620'>configuration</span> <span
  m='645290'>graph</span> <span m='645780'>or</span> <span
  m='645990'>sometimes</span> <span m='646380'>configuration</span> <span
  m='646785'>space.</span> <span m='648480'>But</span> <span
  m='648670'>it's</span> <span m='648820'>a</span> <span
  m='648870'>graph,</span> <span m='649270'>so</span> <span m='649747'>we'll
  call it a</span> <span m='650224'>graph.</span> <span m='654040'>This</span>
  <span m='654490'>graph</span> <span m='654920'>has</span> <span
  m='655175'>a</span> <span m='655430'>vertex</span> <span m='657660'>for</span>
  <span m='658010'>each</span> <span m='658270'>possible</span> <span
  m='658880'>state</span> <span m='660531'>of</span> <span m='661000'>the</span>
  <span m='661140'>cube.</span> <span m='670340'>So</span> <span
  m='671770'>this</span> <span m='671940'>is</span> <span m='672060'>a</span>
  <span m='672120'>state.</span> <span m='675140'>This</span> <span
  m='675310'>is</span> <span m='675420'>a</span> <span m='675500'>state.</span>
  <span m='676820'>This</span> <span m='677020'>is</span> <span
  m='677140'>a</span> <span m='677210'>state.</span> <span
  m='677640'>This</span> <span m='678070'>is</span> <span m='678290'>a</span>
  <span m='678370'>state.</span> <span m='679240'>Now</span> <span
  m='679570'>I'm</span> <span m='679830'>hopelessly</span> <span
  m='680250'>lost.</span> <span m='681790'>Anyone</span> <span
  m='682080'>want</span> <span m='682190'>to</span> <span m='682260'>work</span>
  <span m='682460'>on</span> <span m='682540'>this?</span> <span
  m='683540'>Bored?</span> <span m='685802'>No</span> <span
  m='686260'>one?</span> <span m='686560'>Alright,</span> <span
  m='687090'>I'll</span> <span m='687300'>leave</span> <span
  m='687490'>it</span> <span m='687960'>unsolved</span> <span
  m='688170'>then.</span> <span m='691040'>So</span> <span m='691390'>all</span>
  <span m='691730'>those</span> <span m='691990'>are</span> <span
  m='692080'>vertices.</span> <span m='692790'>There's</span> <span
  m='692940'>actually</span> <span m='693160'>a</span> <span
  m='693200'>lot</span> <span m='693390'>of</span> <span
  m='693460'>vertices.</span> <span m='693980'>There</span> <span
  m='694230'>are</span> <span m='695210'>264</span> <span
  m='696060'>million</span> <span m='696390'>vertices</span> <span
  m='697330'>or</span> <span m='697440'>so.</span> <span m='698690'>If</span>
  <span m='698860'>you</span> <span m='699000'>want.</span> <span
  m='699310'>To</span> <span m='699720'>the</span> <span m='699890'>side</span>
  <span m='700240'>here.</span> <span m='701560'>Number</span> <span
  m='701820'>of</span> <span m='701910'>vertices</span> <span
  m='703626'>is</span> <span m='704090'>something</span> <span
  m='704430'>like</span> <span m='706710'>8</span> <span
  m='707180'>factorial</span> <span m='708560'>times</span> <span
  m='709010'>3</span> <span m='709300'>to</span> <span m='709380'>the</span>
  <span m='709590'>8.</span> <span m='711950'>And</span> <span
  m='712260'>one</span> <span m='712480'>way</span> <span m='712740'>to</span>
  <span m='712930'>see</span> <span m='713210'>that</span> <span m='716300'>is
  to</span> <span m='716760'>draw</span> <span m='717100'>a</span> <span
  m='717180'>two by two</span> <span m='717680'>by two</span> <span
  m='717965'>Rubik's</span> <span m='718250'>Cube.</span> </p><p><span
  m='721458'>So</span> <span m='721960'>these</span> <span m='722225'>are</span>
  <span m='731990'>what</span> <span m='732170'>you</span> <span
  m='732290'>might</span> <span m='732490'>call</span> <span
  m='732700'>cubelets,</span> <span m='732890'>or</span> <span
  m='733330'>cubies</span> <span m='733550'>I</span> <span m='733970'>think is
  the</span> <span m='734270'>standard</span> <span m='734690'>term</span> <span
  m='735020'>in</span> <span m='735710'>Rubik's</span> <span
  m='736050'>Cube</span> <span m='736370'>land.</span> <span
  m='741220'>There's</span> <span m='741570'>eight</span> <span
  m='741760'>of</span> <span m='741880'>them</span> <span m='742130'>in</span>
  <span m='742210'>a</span> <span m='742290'>two</span> <span
  m='742410'>by</span> <span m='742540'>two</span> <span m='742690'>by</span>
  <span m='742820'>two.</span> <span m='743125'>Two</span> <span
  m='743430'>cubed.</span> <span m='744750'>You</span> <span
  m='744910'>can</span> <span m='745010'>essentially</span> <span
  m='745430'>permute</span> <span m='745930'>those</span> <span
  m='746150'>cubies</span> <span m='747060'>within</span> <span
  m='748100'>the</span> <span m='748200'>cube</span> <span
  m='748520'>however</span> <span m='748830'>you</span> <span
  m='748950'>like.</span> <span m='749160'>That's</span> <span
  m='749360'>8</span> <span m='749570'>factorial.</span> <span
  m='751020'>And</span> <span m='751200'>then</span> <span
  m='751360'>each</span> <span m='751600'>of</span> <span m='751700'>them</span>
  <span m='751920'>has</span> <span m='752160'>three</span> <span
  m='752380'>possible</span> <span m='752890'>twists.</span> <span
  m='753300'>It</span> <span m='753350'>could</span> <span m='753460'>be</span>
  <span m='753570'>like</span> <span m='753740'>this.</span> <span
  m='754150'>It</span> <span m='754430'>could</span> <span m='754520'>be</span>
  <span m='754620'>like</span> <span m='754800'>this.</span> <span m='755180'>Or
  it</span> <span m='755580'>could</span> <span m='755660'>be</span> <span
  m='755780'>like</span> <span m='755960'>this.</span> <span
  m='757700'>So</span> <span m='757870'>you've</span> <span
  m='757970'>got</span> <span m='758890'>three</span> <span
  m='759090'>for</span> <span m='759230'>each.</span> <span
  m='759470'>And</span> <span m='759580'>this</span> <span m='759760'>is</span>
  <span m='759930'>actually an</span> <span m='760300'>accurate</span> <span
  m='760610'>count.</span> <span m='760980'>You're not</span> <span
  m='761170'>over-counting</span> <span m='762080'>the</span> <span
  m='762170'>number</span> <span m='762400'>of</span> <span
  m='762460'>configurations.</span> <span m='763180'>All</span> <span
  m='763340'>of</span> <span m='763440'>those</span> <span
  m='763830'>are,</span> <span m='764110'>at</span> <span
  m='764180'>least</span> <span m='764610'>in</span> <span
  m='764710'>principle,</span> <span m='765160'>conceivable.</span> <span
  m='765760'>If</span> <span m='765840'>you</span> <span m='765940'>take</span>
  <span m='766160'>apart</span> <span m='766420'>the</span> <span
  m='766510'>cube,</span> <span m='767120'>you</span> <span
  m='767240'>can</span> <span m='767360'>reassemble</span> <span
  m='767930'>it</span> <span m='768060'>in</span> <span m='768230'>each</span>
  <span m='768430'>of</span> <span m='768520'>those</span> <span
  m='768700'>states.</span> <span m='769590'>And</span> <span
  m='769770'>that</span> <span m='769960'>number</span> <span
  m='770340'>is</span> <span m='770530'>about</span> <span m='772130'>264</span>
  <span m='773640'>million.</span> <span m='777720'>Which</span> <span
  m='777890'>is</span> <span m='778000'>not</span> <span m='778220'>so</span>
  <span m='778380'>bad</span> <span m='779250'>for</span> <span
  m='779380'>computers.</span> <span m='780000'>You</span> <span
  m='780120'>could</span> <span m='780440'>search</span> <span
  m='780730'>that.</span> </p><p><span m='781930'>Life</span> <span
  m='782150'>is</span> <span m='782270'>a</span> <span m='782330'>little</span>
  <span m='782530'>bit</span> <span m='782650'>easier.</span> <span
  m='782930'>You get</span> <span m='783210'>to</span> <span
  m='783310'>divide</span> <span m='783700'>by</span> <span m='783830'>24</span>
  <span m='784400'>because</span> <span m='784730'>there's</span> <span
  m='784940'>24</span> <span m='785350'>symmetries</span> <span
  m='785810'>of</span> <span m='785910'>the</span> <span m='786000'>cube.</span>
  <span m='786800'>Eight</span> <span m='787180'>times</span> <span
  m='787440'>three.</span> <span m='788190'>You</span> <span
  m='788320'>can</span> <span m='788430'>divide</span> <span
  m='788710'>by</span> <span m='788810'>three,</span> <span
  m='789110'>also,</span> <span m='789440'>because</span> <span
  m='791110'>only</span> <span m='792030'>a</span> <span m='792120'>third</span>
  <span m='792490'>of</span> <span m='792600'>the</span> <span
  m='792700'>configuration</span> <span m='793280'>space</span> <span
  m='793560'>is</span> <span m='793670'>actually</span> <span
  m='793930'>reachable.</span> <span m='794370'>If</span> <span
  m='794420'>you're</span> <span m='794530'>not</span> <span
  m='794730'>allowed</span> <span m='794970'>to</span> <span
  m='795050'>take</span> <span m='795240'>the</span> <span
  m='795330'>parts</span> <span m='795620'>apart,</span> <span
  m='796070'>if</span> <span m='796290'>you</span> <span m='796380'>have</span>
  <span m='796490'>to</span> <span m='796600'>get</span> <span
  m='796800'>there</span> <span m='796950'>by a</span> <span
  m='797140'>motion,</span> <span m='797720'>you</span> <span
  m='798030'>can</span> <span m='798150'>only</span> <span m='798330'>get</span>
  <span m='798490'>to</span> <span m='798590'>1/3</span> <span
  m='799160'>of</span> <span m='799320'>the</span> <span m='799420'>two</span>
  <span m='799990'>by</span> <span m='800130'>two</span> <span
  m='800260'>by</span> <span m='800390'>two.</span> <span m='801210'>So</span>
  <span m='801390'>it's</span> <span m='801490'>a</span> <span
  m='801540'>little</span> <span m='801710'>bit</span> <span
  m='801860'>smaller</span> <span m='802180'>than</span> <span
  m='802320'>that,</span> <span m='802720'>if</span> <span
  m='802910'>you're</span> <span m='803090'>actually</span> <span
  m='803370'>doing</span> <span m='803610'>a</span> <span
  m='803650'>breadth-first</span> <span m='804050'>search,</span> <span
  m='804350'>which</span> <span m='804550'>is</span> <span
  m='804650'>what</span> <span m='804780'>you're</span> <span
  m='804850'>going</span> <span m='804960'>to</span> <span m='805020'>be</span>
  <span m='805120'>doing on</span> <span m='805410'>your</span> <span
  m='805520'>problem</span> <span m='805770'>set.</span> <span
  m='806060'>But</span> <span m='806210'>in</span> <span m='806330'>any</span>
  <span m='806470'>case,</span> <span m='806800'>it's</span> <span
  m='806830'>feasible.</span> </p><p><span m='809350'>That was</span> <span
  m='809610'>vertices.</span> <span m='810370'>We</span> <span
  m='810800'>should</span> <span m='810910'>talk</span> <span
  m='811100'>about</span> <span m='811310'>edges.</span> <span
  m='822240'>For</span> <span m='822450'>every</span> <span
  m='822720'>move--</span> <span m='826340'>every</span> <span
  m='826590'>move</span> <span m='827190'>takes</span> <span
  m='827450'>you</span> <span m='827570'>from</span> <span m='827800'>one</span>
  <span m='827990'>configuration</span> <span m='828650'>to</span> <span
  m='828750'>another.</span> <span m='829870'>You</span> <span
  m='830030'>could</span> <span m='830300'>traverse</span> <span
  m='830670'>it</span> <span m='830910'>in</span> <span m='831070'>one</span>
  <span m='831240'>direction</span> <span m='832330'>and</span> <span
  m='832420'>make</span> <span m='832600'>that</span> <span
  m='832790'>move.</span> <span m='833020'>You</span> <span
  m='833120'>could</span> <span m='833230'>also</span> <span
  m='833520'>undo</span> <span m='833820'>that</span> <span
  m='834010'>move.</span> <span m='834210'>Because</span> <span
  m='834500'>every</span> <span m='834810'>move</span> <span
  m='835030'>is</span> <span m='835170'>undoable</span> <span
  m='836110'>in</span> <span m='836310'>a</span> <span m='836380'>Rubik's</span>
  <span m='836710'>Cube,</span> <span m='837230'>this</span> <span
  m='837390'>graph</span> <span m='837750'>is</span> <span
  m='838040'>undirected.</span> <span m='838940'>Or</span> <span
  m='839070'>you</span> <span m='839140'>can</span> <span
  m='839280'>think</span> <span m='839450'>of</span> <span m='839530'>it</span>
  <span m='839590'>as</span> <span m='839690'>every</span> <span
  m='839980'>edge</span> <span m='840590'>works</span> <span
  m='840820'>in</span> <span m='840920'>both</span> <span
  m='841110'>directions.</span> <span m='842570'>So</span> <span
  m='843040'>this</span> <span m='843230'>is</span> <span m='843340'>a</span>
  <span m='843400'>move.</span> <span m='843610'>It's</span> <span
  m='843720'>called</span> <span m='843890'>a</span> <span
  m='843940'>quarter</span> <span m='844200'>twist.</span> <span m='845830'>This
  is</span> <span m='846010'>a</span> <span m='846080'>controversy</span> <span
  m='846770'>if</span> <span m='846880'>you</span> <span m='847010'>will.</span>
  <span m='847640'>Some</span> <span m='847860'>people</span> <span
  m='848180'>allow a</span> <span m='848460'>whole</span> <span
  m='848720'>half</span> <span m='849010'>twist</span> <span
  m='849390'>as</span> <span m='849560'>a</span> <span m='849620'>single</span>
  <span m='850000'>move.</span> <span m='850430'>Whether</span> <span
  m='850970'>you</span> <span m='851110'>define that</span> <span
  m='851440'>as</span> <span m='851640'>a</span> <span m='851700'>single</span>
  <span m='851990'>move</span> <span m='852360'>or a</span> <span
  m='852430'>double</span> <span m='852700'>move</span> <span
  m='853030'>is</span> <span m='853520'>not</span> <span m='853730'>that</span>
  <span m='853890'>big</span> <span m='854060'>a</span> <span
  m='854110'>deal.</span> <span m='854380'>It</span> <span
  m='854650'>just</span> <span m='854860'>changes</span> <span
  m='855920'>some</span> <span m='856130'>of</span> <span m='856180'>the</span>
  <span m='856270'>answers.</span> <span m='857920'>But</span> <span
  m='859120'>you're</span> <span m='859280'>still</span> <span
  m='859520'>exploring</span> <span m='859920'>essentially</span> <span
  m='860320'>the</span> <span m='860420'>same</span> <span
  m='860650'>graph.</span> </p><p><span m='863600'>So</span> <span
  m='863790'>that's</span> <span m='864030'>the</span> <span
  m='864110'>graph</span> <span m='864450'>and</span> <span
  m='864530'>you'd</span> <span m='864680'>like</span> <span
  m='864870'>to</span> <span m='864970'>know</span> <span m='865130'>some</span>
  <span m='865310'>properties</span> <span m='865740'>about</span> <span
  m='866040'>it.</span> <span m='866240'>So</span> <span m='866430'>let</span>
  <span m='866550'>me</span> <span m='866660'>draw</span> <span
  m='867660'>a</span> <span m='867740'>picture</span> <span m='868110'>of</span>
  <span m='868180'>the</span> <span m='868260'>graph.</span> <span
  m='868580'>I'm</span> <span m='868650'>not</span> <span
  m='868810'>going</span> <span m='868910'>to</span> <span
  m='868990'>draw</span> <span m='869350'>all</span> <span m='869550'>264</span>
  <span m='870290'>million</span> <span m='870650'>vertices.</span> <span
  m='871560'>But</span> <span m='871750'>in</span> <span
  m='871880'>particular,</span> <span m='872780'>there's</span> <span
  m='873060'>the</span> <span m='873140'>solved</span> <span
  m='873610'>state--</span> <span m='874960'>we</span> <span
  m='875040'>kind</span> <span m='875260'>of</span> <span m='875340'>care</span>
  <span m='875570'>about</span> <span m='875820'>that</span> <span
  m='876010'>one,</span> <span m='876930'>where</span> <span
  m='877090'>all</span> <span m='877270'>the</span> <span
  m='877660'>colors</span> <span m='878000'>are</span> <span
  m='878100'>aligned--</span> <span m='880070'>then</span> <span
  m='880380'>there's</span> <span m='881950'>all</span> <span
  m='882210'>of</span> <span m='882360'>the</span> <span
  m='882640'>configurations</span> <span m='884100'>you</span> <span
  m='884250'>could</span> <span m='884390'>reach</span> <span
  m='884670'>by</span> <span m='884820'>one</span> <span m='885080'>move.</span>
  <span m='886040'>So</span> <span m='886180'>these</span> <span
  m='886430'>are</span> <span m='886520'>the</span> <span
  m='886630'>possible</span> <span m='887110'>moves</span> <span
  m='888830'>from</span> <span m='889140'>the</span> <span
  m='889220'>solved</span> <span m='889520'>state.</span> <span
  m='892950'>And</span> <span m='893150'>then</span> <span
  m='893480'>from</span> <span m='893610'>those</span> <span
  m='893850'>configurations,</span> <span m='895400'>there's</span> <span
  m='895650'>more</span> <span m='895890'>places</span> <span
  m='896290'>you</span> <span m='896420'>can</span> <span m='896530'>go.</span>
  <span m='897970'>Maybe</span> <span m='898220'>there's</span> <span
  m='898400'>multiple</span> <span m='898860'>ways</span> <span
  m='899220'>to</span> <span m='899330'>get</span> <span m='899520'>to</span>
  <span m='899610'>the</span> <span m='899710'>same</span> <span
  m='899970'>node.</span> <span m='903320'>But</span> <span
  m='903460'>these</span> <span m='903650'>would</span> <span
  m='903750'>be</span> <span m='903980'>all</span> <span m='904290'>the</span>
  <span m='904390'>configurations</span> <span m='905250'>you</span> <span
  m='905410'>can</span> <span m='905560'>reach</span> <span m='906460'>in
  two</span> <span m='906890'>moves.</span> <span m='915170'>And</span> <span
  m='915390'>so</span> <span m='915620'>on.</span> </p><p><span
  m='916940'>And</span> <span m='917090'>at</span> <span m='917200'>some</span>
  <span m='917380'>point,</span> <span m='918150'>you</span> <span
  m='918300'>run</span> <span m='918470'>out</span> <span m='918560'>of</span>
  <span m='918650'>graph.</span> <span m='919100'>So</span> <span
  m='919440'>there</span> <span m='919780'>might</span> <span
  m='919960'>be</span> <span m='921410'>a</span> <span m='921450'>few</span>
  <span m='923440'>nodes</span> <span m='923700'>out</span> <span
  m='923890'>here.</span> <span m='926250'>The</span> <span
  m='926620'>way</span> <span m='926820'>I'm</span> <span
  m='926920'>drawing</span> <span m='927280'>this,</span> <span
  m='927750'>this</span> <span m='928220'>is</span> <span
  m='928300'>everything</span> <span m='928580'>you</span> <span
  m='928660'>can</span> <span m='928780'>reach</span> <span m='928990'>in</span>
  <span m='929050'>one</span> <span m='929270'>move,</span> <span m='929580'>in
  two</span> <span m='929890'>movies,</span> <span m='930200'>in</span> <span
  m='930310'>three</span> <span m='930510'>moves.</span> <span
  m='931240'>At</span> <span m='931390'>the</span> <span m='931530'>end,</span>
  <span m='931700'>this</span> <span m='931870'>would</span> <span
  m='931980'>be</span> <span m='932480'>11</span> <span m='932910'>moves,</span>
  <span m='935010'>if</span> <span m='935320'>you</span> <span
  m='935630'>allow</span> <span m='935820'>half</span> <span
  m='936170'>twists.</span> <span m='937760'>And</span> <span
  m='939610'>as</span> <span m='939850'>puzzlers,</span> <span
  m='940720'>we're</span> <span m='940920'>particularly</span> <span
  m='941470'>interested</span> <span m='942330'>in</span> <span
  m='942500'>this</span> <span m='942740'>number,</span> <span
  m='944180'>which</span> <span m='944430'>you</span> <span
  m='944740'>would</span> <span m='944970'>call,</span> <span
  m='945890'>as</span> <span m='946090'>a</span> <span m='946760'>graph</span>
  <span m='947020'>theorist,</span> <span m='947360'>the</span> <span
  m='947490'>diameter</span> <span m='948200'>of</span> <span
  m='948290'>the</span> <span m='948380'>graph.</span> <span
  m='950760'>Puzzlers</span> <span m='951420'>call</span> <span
  m='951720'>it</span> <span m='952050'>God's</span> <span
  m='952470'>number.</span> <span m='953200'>If</span> <span
  m='953280'>you</span> <span m='953410'>were</span> <span m='953530'>God</span>
  <span m='953990'>or</span> <span m='954130'>some</span> <span
  m='956356'>omni--</span> <span m='957110'>something</span> <span
  m='958200'>being.</span> <span m='959020'>You</span> <span
  m='959150'>have</span> <span m='959350'>the</span> <span
  m='959480'>optimal</span> <span m='960050'>algorithm</span> <span
  m='960500'>for</span> <span m='960650'>solving</span> <span
  m='960990'>the</span> <span m='961060'>Rubik's</span> <span
  m='961370'>Cube.</span> <span m='961860'>How</span> <span
  m='962090'>many</span> <span m='962300'>moves</span> <span
  m='963050'>do</span> <span m='963150'>you</span> <span m='963340'>need</span>
  <span m='963760'>If</span> <span m='963920'>you</span> <span
  m='964090'>always</span> <span m='964220'>follow</span> <span
  m='964500'>the</span> <span m='964620'>best</span> <span
  m='964890'>path?</span> <span m='966100'>And</span> <span
  m='966270'>the</span> <span m='966370'>answer</span> <span
  m='966690'>is,</span> <span m='966880'>in</span> <span m='966940'>the</span>
  <span m='967020'>worst</span> <span m='967270'>case,</span> <span
  m='967610'>11.</span> <span m='968650'>So we're interested</span> <span
  m='969300'>in</span> <span m='969480'>the</span> <span m='969560'>worst</span>
  <span m='969850'>case</span> <span m='970310'>of</span> <span
  m='971110'>the</span> <span m='971240'>best</span> <span
  m='971570'>algorithm.</span> </p><p><span m='974130'>For</span> <span
  m='974330'>two</span> <span m='974460'>by</span> <span m='974600'>two</span>
  <span m='974730'>by</span> <span m='974860'>two,</span> <span
  m='975320'>the</span> <span m='975400'>answer</span> <span
  m='975650'>is</span> <span m='975730'>11.</span> <span m='976880'>For</span>
  <span m='977090'>three</span> <span m='977280'>by</span> <span
  m='977420'>three</span> <span m='977590'>by</span> <span
  m='977730'>three,</span> <span m='978840'>the</span> <span
  m='979030'>answer</span> <span m='979250'>is</span> <span
  m='979340'>20.</span> <span m='980050'>That</span> <span m='980200'>was</span>
  <span m='980330'>just</span> <span m='980520'>proved</span> <span
  m='980740'>last</span> <span m='981060'>summer</span> <span
  m='981950'>with</span> <span m='982570'>a</span> <span
  m='982800'>couple</span> <span m='983070'>years</span> <span
  m='983350'>of</span> <span m='983460'>computer</span> <span
  m='983810'>time.</span> <span m='984650'>For</span> <span
  m='984830'>four</span> <span m='985010'>by</span> <span m='985150'>four
  by</span> <span m='985475'>four--</span> <span m='985800'>I don't</span> <span
  m='985830'>have</span> <span m='986020'>one</span> <span
  m='986170'>here--</span> <span m='986850'>I</span> <span
  m='986930'>think</span> <span m='987130'>we'll</span> <span
  m='987220'>never</span> <span m='987440'>know</span> <span
  m='987540'>the</span> <span m='987660'>answer.</span> <span
  m='987990'>For</span> <span m='988140'>five</span> <span m='988360'>by</span>
  <span m='988450'>five</span> <span m='988680'>by</span> <span
  m='988790'>five,</span> <span m='989130'>we'll</span> <span
  m='989260'>never</span> <span m='989480'>know</span> <span
  m='989580'>the</span> <span m='989750'>answer.</span> <span
  m='990525'>For</span> <span m='990820'>six,</span> <span m='991360'>for</span>
  <span m='991470'>seven,</span> <span m='991880'>same</span> <span
  m='992450'>deal.</span> <span m='993820'>But</span> <span
  m='994500'>for</span> <span m='994730'>two</span> <span m='994850'>by</span>
  <span m='995000'>two</span> <span m='995140'>by</span> <span
  m='995260'>two,</span> <span m='995500'>you</span> <span m='995660'>can</span>
  <span m='995800'>compute</span> <span m='996140'>it.</span> <span
  m='996330'>You</span> <span m='996470'>will</span> <span m='996580'>compute
  it</span> <span m='996910'>on</span> <span m='997040'>your</span> <span
  m='997140'>problem</span> <span m='997400'>set.</span> <span
  m='998180'>And</span> <span m='999020'>it's</span> <span
  m='999170'>kind</span> <span m='999340'>of</span> <span m='999390'>nice</span>
  <span m='999650'>to</span> <span m='999750'>know</span> <span
  m='999980'>because</span> <span m='1000300'>it</span> <span
  m='1000400'>says</span> <span m='1001600'>whatever</span> <span
  m='1002010'>configuration</span> <span m='1002820'>I'm</span> <span
  m='1002880'>in,</span> <span m='1003450'>I</span> <span m='1003560'>can</span>
  <span m='1003890'>solve</span> <span m='1004300'>it</span> <span
  m='1004420'>in</span> <span m='1004600'>11</span> <span
  m='1004930'>moves.</span> </p><p><span m='1006800'>But the</span> <span
  m='1007000'>best</span> <span m='1007080'>known</span> <span
  m='1007500'>way</span> <span m='1007700'>to</span> <span
  m='1008420'>compute</span> <span m='1008790'>it,</span> <span
  m='1009440'>is</span> <span m='1009750'>basically</span> <span
  m='1010190'>to</span> <span m='1010270'>construct</span> <span
  m='1010690'>this</span> <span m='1010860'>graph</span> <span
  m='1012370'>one</span> <span m='1012730'>layer</span> <span
  m='1013050'>at</span> <span m='1013130'>a</span> <span m='1013200'>time</span>
  <span m='1014220'>until</span> <span m='1014490'>you're</span> <span
  m='1014620'>done.</span> <span m='1015470'>And</span> <span
  m='1015520'>then</span> <span m='1015640'>you know what</span> <span
  m='1016050'>the</span> <span m='1016130'>diameter</span> <span
  m='1016630'>is.</span> <span m='1017310'>The</span> <span
  m='1017410'>trouble</span> <span m='1017810'>is,</span> <span
  m='1018050'>in</span> <span m='1018200'>between</span> <span
  m='1018550'>here</span> <span m='1018720'>this</span> <span
  m='1019030'>grows</span> <span m='1019700'>exponentially.</span> <span
  m='1020910'>At</span> <span m='1021000'>some</span> <span
  m='1021160'>point,</span> <span m='1021570'>it</span> <span
  m='1021730'>decreases</span> <span m='1022220'>a</span> <span
  m='1022270'>little</span> <span m='1022480'>bit.</span> <span
  m='1023180'>But</span> <span m='1023340'>getting</span> <span
  m='1023630'>over</span> <span m='1023830'>that</span> <span
  m='1024040'>exponential</span> <span m='1024599'>hump</span> <span
  m='1024970'>is</span> <span m='1025310'>really</span> <span
  m='1025619'>hard.</span> <span m='1026640'>And</span> <span
  m='1026890'>for</span> <span m='1027000'>three</span> <span
  m='1027180'>by</span> <span m='1027319'>three</span> <span
  m='1027490'>by</span> <span m='1027670'>three,</span> <span
  m='1027859'>they</span> <span m='1027960'>used</span> <span
  m='1028180'>a</span> <span m='1028250'>lot</span> <span m='1028460'>of</span>
  <span m='1028540'>tricks</span> <span m='1028980'>to</span> <span
  m='1029720'>speed</span> <span m='1030109'>up</span> <span
  m='1031400'>the</span> <span m='1031560'>algorithm,</span> <span
  m='1032390'>but</span> <span m='1032839'>in</span> <span
  m='1033060'>the</span> <span m='1033210'>end</span> <span
  m='1033490'>it's</span> <span m='1033619'>essentially</span> <span
  m='1033939'>a</span> <span m='1034260'>breadth-first</span> <span
  m='1034750'>search.</span> <span m='1035760'>What's</span> <span
  m='1035970'>a</span> <span m='1036020'>breadth-first</span> <span
  m='1036430'>search?</span> <span m='1037359'>This</span> <span
  m='1037730'>going</span> <span m='1038040'>layer</span> <span
  m='1038339'>by</span> <span m='1038510'>layer.</span> <span
  m='1039060'>So</span> <span m='1039099'>we're</span> <span
  m='1039210'>going</span> <span m='1039310'>to</span> <span
  m='1039369'>formalize</span> <span m='1039849'>that</span> <span
  m='1040440'>in</span> <span m='1040609'>a</span> <span
  m='1040660'>moment.</span> <span m='1042430'>But</span> <span
  m='1042609'>that</span> <span m='1042839'>is</span> <span
  m='1043270'>the</span> <span m='1043619'>problem.</span> </p><p><span
  m='1045089'>So</span> <span m='1045680'>just</span> <span
  m='1045930'>for</span> <span m='1046030'>fun,</span> <span
  m='1055460'>any</span> <span m='1055690'>guesses</span> <span
  m='1057050'>what</span> <span m='1057320'>the</span> <span
  m='1057420'>right</span> <span m='1057600'>answer</span> <span
  m='1057920'>is</span> <span m='1058090'>for an</span> <span
  m='1058400'>n</span> <span m='1058580'>by</span> <span m='1058740'>n</span>
  <span m='1058910'>by</span> <span m='1059060'>n</span> <span
  m='1059240'>Rubik's</span> <span m='1059640'>cube?</span> <span
  m='1060020'>What's</span> <span m='1060230'>the</span> <span
  m='1060290'>diameter?</span> <span m='1061940'>Not</span> <span
  m='1062200'>an</span> <span m='1062290'>exact</span> <span
  m='1062670'>answer,</span> <span m='1062950'>because</span> <span
  m='1063150'>I</span> <span m='1063220'>think</span> <span
  m='1063380'>we'll</span> <span m='1063490'>never</span> <span
  m='1063720'>know</span> <span m='1063850'>the</span> <span
  m='1063960'>exact</span> <span m='1064330'>answer.</span> <span
  m='1064850'>But</span> <span m='1065480'>if</span> <span m='1065660'>I</span>
  <span m='1065770'>want</span> <span m='1066280'>theta</span> <span
  m='1067150'>something,</span> <span m='1068386'>what do</span> <span
  m='1068730'>you</span> <span m='1068970'>think</span> <span
  m='1069380'>the</span> <span m='1069450'>something</span> <span
  m='1069880'>is?</span> <span m='1074940'>How</span> <span
  m='1075030'>many</span> <span m='1075190'>people here</span> <span
  m='1075450'>have solved</span> <span m='1075840'>the</span> <span
  m='1076000'>Rubik's</span> <span m='1076290'>Cube?</span> <span
  m='1076732'>Ever?</span> <span m='1078130'>So you know what</span> <span
  m='1078430'>we're</span> <span m='1078820'>talking</span> <span
  m='1079070'>about</span> <span m='1079300'>here.</span> <span
  m='1080510'>Most</span> <span m='1080770'>people</span> <span
  m='1081010'>have</span> <span m='1081270'>worked</span> <span
  m='1081450'>on</span> <span m='1081940'>it.</span> <span m='1084390'>To</span>
  <span m='1084880'>think</span> <span m='1085070'>about</span> <span
  m='1085290'>an n</span> <span m='1085520'>by  n</span> <span m='1085790'>by
  n</span> <span m='1086070'>Rubik's</span> <span m='1086450'>Cube,</span> <span
  m='1088280'>each</span> <span m='1088500'>side</span> <span
  m='1088890'>has</span> <span m='1089960'>area</span> <span
  m='1090230'>n</span> <span m='1090430'>squared.</span> <span
  m='1091420'>So</span> <span m='1091610'>total</span> <span
  m='1092760'>surface</span> <span m='1093120'>area is</span> <span
  m='1093360'>6</span> <span m='1093640'>n</span> <span
  m='1093790'>squared.</span> <span m='1094210'>So there's,</span> <span
  m='1094460'>roughly,</span> <span m='1095450'>stata</span> <span
  m='1095830'>n</span> <span m='1096060'>squared</span> <span
  m='1096540'>little</span> <span m='1096740'>cubies</span> <span
  m='1097120'>here.</span> <span m='1099140'>So</span> <span m='1099330'>what
  do</span> <span m='1099450'>you</span> <span m='1099530'>think</span> <span
  m='1099690'>the</span> <span m='1099790'>right</span> <span
  m='1099950'>[INAUDIBLE]</span> <span m='1100470'>is</span> <span
  m='1100660'>for</span> <span m='1100810'>n by n by n?</span> <span
  m='1106702'>No</span> <span m='1107200'>guesses?</span> </p><p><span
  m='1112095'>AUDIENCE: n</span> <span m='1112546'>cubed?</span> </p><p><span
  m='1113450'>PROFESSOR: n</span> <span m='1113690'>cubed?</span> <span
  m='1114900'>Reasonable</span> <span m='1115290'>guess.</span> <span
  m='1116540'>But</span> <span m='1116830'>wrong.</span> <span
  m='1118045'>It's</span> <span m='1118360'>an</span> <span
  m='1118460'>upper</span> <span m='1118680'>bounds.</span> <span
  m='1119690'>Why</span> <span m='1120140'>n</span> <span
  m='1120540'>cubed?</span> </p><p><span m='1123854'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='1129300'>PROFESSOR: Oh,</span> <span
  m='1129580'>you're</span> <span m='1129730'>guessing</span> <span
  m='1130100'>based</span> <span m='1130340'>on</span> <span
  m='1130410'>the</span> <span m='1130500'>numbers.</span> <span
  m='1131000'>Yeah.</span> <span m='1131400'>The</span> <span
  m='1131450'>numbers</span> <span m='1131850'>are</span> <span
  m='1131910'>misleading,</span> <span m='1132420'>unfortunately.</span> <span
  m='1133500'>It's</span> <span m='1133880'>the</span> <span
  m='1133930'>law</span> <span m='1134430'>of</span> <span
  m='1134690'>small</span> <span m='1134960'>numbers</span> <span
  m='1135340'>I</span> <span m='1135400'>guess.</span> <span
  m='1136466'>It</span> <span m='1136870'>doesn't</span> <span
  m='1137160'>really</span> <span m='1137530'>look</span> <span
  m='1138020'>right.</span> <span m='1139300'>I</span> <span
  m='1139440'>know</span> <span m='1139590'>the</span> <span
  m='1139720'>answer.</span> <span m='1140900'>I</span> <span
  m='1140990'>know</span> <span m='1141110'>the</span> <span
  m='1141230'>answer</span> <span m='1141460'>because</span> <span
  m='1141660'>we</span> <span m='1141760'>just</span> <span
  m='1142010'>wrote</span> <span m='1142140'>a</span> <span
  m='1142190'>paper</span> <span m='1142480'>with</span> <span
  m='1142620'>the</span> <span m='1142740'>answer.</span> <span m='1143060'>This
  is</span> <span m='1143370'>a</span> <span m='1143420'>new</span> <span
  m='1143600'>result.</span> <span m='1144490'>From</span> <span
  m='1144640'>this</span> <span m='1144740'>summer.</span> <span
  m='1145940'>But</span> <span m='1146090'>I'm</span> <span
  m='1146210'>curious.</span> <span m='1148330'>To</span> <span
  m='1148450'>me</span> <span m='1148630'>the</span> <span
  m='1148790'>obvious</span> <span m='1149100'>answer</span> <span
  m='1149390'>is</span> <span m='1149510'>n</span> <span
  m='1149690'>squared</span> <span m='1150410'>because</span> <span
  m='1150690'>there's</span> <span m='1151050'>about</span> <span
  m='1151360'>n</span> <span m='1151490'>squared</span> <span
  m='1151810'>cubies.</span> <span m='1152700'>And</span> <span
  m='1153160'>it's</span> <span m='1153490'>not</span> <span
  m='1153760'>so</span> <span m='1153900'>hard</span> <span
  m='1154080'>to</span> <span m='1154140'>show</span> <span
  m='1154310'>in</span> <span m='1154390'>a</span> <span
  m='1154460'>constant</span> <span m='1154850'>number</span> <span
  m='1155060'>moves</span> <span m='1155340'>you</span> <span
  m='1155460'>can</span> <span m='1155590'>solve</span> <span
  m='1156970'>a</span> <span m='1157050'>constant</span> <span
  m='1157470'>number</span> <span m='1157780'>of</span> <span
  m='1157860'>cubies.</span> <span m='1159170'>If</span> <span
  m='1159320'>you</span> <span m='1159420'>think</span> <span
  m='1159610'>about</span> <span m='1160020'>the</span> <span
  m='1160110'>general</span> <span m='1160380'>algorithms,</span> <span
  m='1160760'>like if</span> <span m='1160880'>you've</span> <span
  m='1161090'>ever</span> <span m='1161300'>looked</span> <span
  m='1161550'>up</span> <span m='1161730'>professor's</span> <span
  m='1162220'>cube</span> <span m='1162670'>and how</span> <span
  m='1162820'>to</span> <span m='1162890'>solve</span> <span
  m='1163200'>it,</span> <span m='1163730'>you're</span> <span
  m='1163850'>doing</span> <span m='1164310'>like</span> <span
  m='1164590'>10</span> <span m='1164860'>moves,</span> <span
  m='1165200'>and</span> <span m='1165290'>then</span> <span m='1166130'>maybe
  you</span> <span m='1166370'>swap</span> <span m='1166870'>two</span> <span
  m='1167260'>cubies</span> <span m='1167720'>which</span> <span
  m='1167900'>you</span> <span m='1167980'>can</span> <span
  m='1168110'>use</span> <span m='1168360'>to</span> <span
  m='1168490'>solve</span> <span m='1169680'>a</span> <span m='1169790'>couple
  of</span> <span m='1170060'>cubies</span> <span m='1170530'>in</span> <span
  m='1170670'>a</span> <span m='1170750'>constant</span> <span
  m='1171070'>number of</span> <span m='1171300'>moves.</span> </p><p><span
  m='1171910'>So</span> <span m='1172030'>n</span> <span
  m='1172200'>squared</span> <span m='1172530'>would</span> <span
  m='1172690'>be</span> <span m='1174850'>the</span> <span
  m='1175110'>standard</span> <span m='1175570'>answer</span> <span
  m='1176400'>if</span> <span m='1176590'>you're</span> <span
  m='1176730'>following</span> <span m='1177280'>standard</span> <span
  m='1177670'>algorithms.</span> <span m='1178600'>But</span> <span
  m='1178710'>it</span> <span m='1178780'>turns</span> <span
  m='1179020'>out,</span> <span m='1179160'>you</span> <span
  m='1179270'>can</span> <span m='1179370'>do</span> <span m='1179470'>a</span>
  <span m='1179500'>little</span> <span m='1179740'>bit</span> <span
  m='1179890'>better.</span> <span m='1181240'>And</span> <span
  m='1181280'>the</span> <span m='1181350'>right</span> <span m='1181530'>answer
  is</span> <span m='1181880'>n</span> <span m='1182040'>squared</span> <span
  m='1182260'>divided</span> <span m='1182570'>by</span> <span
  m='1182650'>log</span> <span m='1182940'>n.</span> <span m='1183350'>I</span>
  <span m='1183470'>think</span> <span m='1183630'>it's</span> <span
  m='1183790'>cool.</span> <span m='1185050'>Hopefully,</span> <span
  m='1185430'>you</span> <span m='1185490'>guys</span> <span
  m='1186030'>can</span> <span m='1186180'>appreciate</span> <span
  m='1186670'>that.</span> <span m='1186970'>Not</span> <span
  m='1187130'>a</span> <span m='1187180'>lot</span> <span m='1187350'>of</span>
  <span m='1187420'>people</span> <span m='1187690'>can</span> <span
  m='1187810'>appreciate</span> <span m='1188290'>n</span> <span
  m='1188430'>squared</span> <span m='1188670'>divided</span> <span
  m='1188980'>by</span> <span m='1189090'>log</span> <span m='1189390'>n,</span>
  <span m='1189550'>but</span> <span m='1189740'>here in</span> <span
  m='1189950'>algorithms,</span> <span m='1191350'>we're</span> <span
  m='1191580'>all</span> <span m='1191780'>about</span> <span m='1192170'>n
  squared</span> <span m='1192560'>over</span> <span m='1192800'>log n.</span>
  <span m='1197770'>If</span> <span m='1197840'>you're</span> <span
  m='1197950'>interested,</span> <span m='1198930'>the</span> <span
  m='1199390'>paper's</span> <span m='1199730'>on</span> <span
  m='1199840'>my</span> <span m='1199940'>website.</span> <span
  m='1200420'>I</span> <span m='1200670'>think its</span> <span
  m='1200960'>called,</span> <span m='1201160'>Algorithms</span> <span
  m='1201630'>For</span> <span m='1202270'>Solving</span> <span
  m='1202590'>Rubik's</span> <span m='1202930'>Cubes.</span> </p><p><span
  m='1203590'>There's</span> <span m='1203750'>a</span> <span
  m='1203810'>constant</span> <span m='1204270'>there.</span> <span
  m='1205110'>Current</span> <span m='1205390'>constant</span> <span
  m='1205670'>is</span> <span m='1205890'>not</span> <span m='1206090'>so</span>
  <span m='1206220'>good.</span> <span m='1206980'>Let's</span> <span
  m='1207170'>say</span> <span m='1207280'>it's</span> <span
  m='1207410'>in</span> <span m='1207520'>the</span> <span
  m='1207590'>millions.</span> </p><p><span m='1208320'>[LAUGHTER]</span>
  </p><p><span m='1212050'>You've</span> <span m='1212160'>got</span> <span
  m='1212320'>to</span> <span m='1212390'>start</span> <span
  m='1212650'>somewhere.</span> <span m='1215880'>The</span> <span
  m='1216040'>next</span> <span m='1216340'>open</span> <span
  m='1216600'>problem</span> <span m='1216840'>will</span> <span
  m='1216960'>be</span> <span m='1217070'>to</span> <span
  m='1217120'>improve</span> <span m='1217420'>that</span> <span
  m='1217600'>constant to</span> <span m='1218000'>something</span> <span
  m='1218290'>reasonable</span> <span m='1218605'>that</span> <span
  m='1218920'>maybe</span> <span m='1219640'>is</span> <span
  m='1219790'>close</span> <span m='1220140'>to</span> <span
  m='1220240'>20.</span> <span m='1220720'>But</span> <span
  m='1221880'>we're</span> <span m='1222090'>far</span> <span
  m='1222400'>from</span> <span m='1222570'>that.</span> </p><p><span
  m='1225250'>Let's</span> <span m='1225440'>talk</span> <span
  m='1225630'>about</span> <span m='1226380'>graph</span> <span
  m='1226650'>representation.</span> <span m='1231300'>Before</span> <span
  m='1231620'>we</span> <span m='1231740'>can</span> <span
  m='1231870'>talk</span> <span m='1232100'>about</span> <span
  m='1232290'>exporting a</span> <span m='1232720'>graph,</span> <span
  m='1233080'>we</span> <span m='1233170'>need</span> <span
  m='1233330'>to</span> <span m='1233430'>know</span> <span
  m='1233790'>what</span> <span m='1234040'>we're</span> <span
  m='1234170'>given</span> <span m='1234450'>as</span> <span
  m='1234570'>input.</span> <span m='1236680'>And</span> <span
  m='1237610'>there's</span> <span m='1237840'>basically</span> <span
  m='1238310'>one</span> <span m='1238680'>standard</span> <span
  m='1239010'>representation</span> <span m='1239950'>and</span> <span
  m='1240400'>a</span> <span m='1240470'>bunch</span> <span
  m='1240740'>of</span> <span m='1240790'>variations</span> <span
  m='1241390'>of</span> <span m='1241540'>it.</span> <span
  m='1243510'>And</span> <span m='1243710'>they're</span> <span
  m='1243920'>called</span> <span m='1244290'>adjacency</span> <span
  m='1244860'>lists.</span> <span m='1248090'>So</span> <span
  m='1248310'>the</span> <span m='1248430'>idea</span> <span m='1248630'>with
  an</span> <span m='1248740'>adjacency</span> <span m='1249340'>list,</span>
  <span m='1249720'>is</span> <span m='1249910'>you</span> <span
  m='1250010'>have</span> <span m='1250220'>an</span> <span
  m='1250310'>array</span> <span m='1252830'>called</span> <span
  m='1253840'>Adj,</span> <span m='1254400'>for</span> <span
  m='1254560'>adjacency</span> <span m='1258436'>of</span> <span
  m='1258880'>size</span> <span m='1259280'>V.</span> <span
  m='1260620'>Each</span> <span m='1260830'>element</span> <span
  m='1261220'>in</span> <span m='1261280'>the</span> <span
  m='1261450'>array</span> <span m='1262290'>is</span> <span
  m='1262500'>a</span> <span m='1262540'>pointer</span> <span
  m='1263030'>to</span> <span m='1263180'>a</span> <span
  m='1263230'>linked</span> <span m='1263440'>list.</span> <span
  m='1267610'>And</span> <span m='1268320'>the</span> <span
  m='1268440'>idea</span> <span m='1268710'>is</span> <span
  m='1269050'>that</span> <span m='1270320'>this array</span> <span
  m='1270790'>is</span> <span m='1270970'>indexed</span> <span
  m='1271430'>by</span> <span m='1271770'>a</span> <span
  m='1271860'>vertex.</span> </p><p><span m='1278960'>So</span> <span
  m='1279090'>we're</span> <span m='1279310'>imagining</span> <span
  m='1280230'>a</span> <span m='1280320'>world</span> <span
  m='1280790'>where</span> <span m='1281010'>we</span> <span
  m='1281170'>can</span> <span m='1281330'>index</span> <span
  m='1281750'>arrays</span> <span m='1282240'>by</span> <span
  m='1282470'>vertices.</span> <span m='1283500'>So</span> <span
  m='1283570'>maybe,</span> <span m='1284460'>you</span> <span
  m='1284680'>just</span> <span m='1285030'>label</span> <span
  m='1285390'>your</span> <span m='1285500'>vertices</span> <span
  m='1285960'>zero</span> <span m='1286270'>through</span> <span
  m='1286580'>v</span> <span m='1286730'>minus</span> <span
  m='1287040'>1.</span> <span m='1287730'>Then</span> <span
  m='1287940'>that's</span> <span m='1288260'>a</span> <span
  m='1288370'>regular</span> <span m='1288800'>array.</span> <span
  m='1289760'>Or,</span> <span m='1290270'>if</span> <span
  m='1290380'>you</span> <span m='1290520'>want</span> <span
  m='1290920'>to</span> <span m='1290990'>get</span> <span
  m='1291180'>fancy,</span> <span m='1291595'>you can</span> <span
  m='1292010'>think</span> <span m='1292230'>of</span> <span
  m='1292370'>a</span> <span m='1292820'>vertex</span> <span
  m='1293320'>as</span> <span m='1293420'>an</span> <span
  m='1293500'>arbitrary</span> <span m='1293970'>hashable</span> <span
  m='1294440'>thing,</span> <span m='1295200'>and</span> <span
  m='1295870'>Adj</span> <span m='1296430'>is</span> <span
  m='1296540'>actually</span> <span m='1296880'>a</span> <span
  m='1296900'>hash</span> <span m='1297150'>table.</span> <span
  m='1297700'>And</span> <span m='1297800'>that's</span> <span m='1297900'>how
  you</span> <span m='1298090'>probably</span> <span m='1298380'>do</span> <span
  m='1298510'>it in</span> <span m='1298590'>Python.</span> <span
  m='1299810'>Maybe</span> <span m='1300060'>your</span> <span
  m='1300280'>vertices</span> <span m='1300730'>are</span> <span
  m='1300830'>objects,</span> <span m='1302020'>and</span> <span
  m='1302280'>this</span> <span m='1302430'>is</span> <span
  m='1302560'>just</span> <span m='1302910'>hashing</span> <span
  m='1303290'>based</span> <span m='1303510'>on</span> <span
  m='1303670'>the</span> <span m='1304050'>address of</span> <span
  m='1304460'>the</span> <span m='1304610'>object.</span> <span
  m='1305280'>But</span> <span m='1305410'>we're</span> <span
  m='1305520'>not</span> <span m='1305660'>going</span> <span
  m='1305750'>to</span> <span m='1305810'>worry</span> <span
  m='1305980'>about</span> <span m='1306190'>that.</span> <span
  m='1306430'>We're just</span> <span m='1306590'>going</span> <span
  m='1306700'>to</span> <span m='1306750'>write</span> <span
  m='1306920'>Adj</span> <span m='1307510'>of</span> <span m='1307860'>u.</span>
  <span m='1308370'>Assume</span> <span m='1308670'>that</span> <span
  m='1308790'>somehow</span> <span m='1309140'>you can</span> <span
  m='1309370'>get</span> <span m='1309670'>to</span> <span
  m='1309740'>the</span> <span m='1310080'>linked</span> <span
  m='1310290'>list</span> <span m='1310560'>corresponding</span> <span
  m='1311060'>to</span> <span m='1311110'>that</span> <span
  m='1311280'>vertex.</span> </p><p><span m='1320680'>And</span> <span
  m='1320800'>the</span> <span m='1320880'>idea</span> <span
  m='1321130'>is,</span> <span m='1321390'>for</span> <span
  m='1321510'>every</span> <span m='1321710'>vertex</span> <span
  m='1322420'>we</span> <span m='1322700'>just store</span> <span
  m='1323330'>its</span> <span m='1323470'>neighbors,</span> <span
  m='1325900'>namely</span> <span m='1326260'>the</span> <span
  m='1326470'>vertices</span> <span m='1326960'>you</span> <span
  m='1327080'>can</span> <span m='1327210'>reach</span> <span
  m='1327530'>by</span> <span m='1327670'>one</span> <span
  m='1327980'>step</span> <span m='1328850'>from</span> <span
  m='1329120'>u.</span> <span m='1330220'>So</span> <span m='1330400'>I'm</span>
  <span m='1330500'>going</span> <span m='1330600'>to</span> <span
  m='1330680'>define</span> <span m='1331030'>that</span> <span
  m='1331750'>a</span> <span m='1331830'>little</span> <span
  m='1332000'>more</span> <span m='1332170'>formally.</span> <span
  m='1333150'>Adj</span> <span m='1333740'>of</span> <span m='1333840'>u</span>
  <span m='1334620'>is</span> <span m='1334830'>going</span> <span
  m='1334970'>to</span> <span m='1335040'>be</span> <span m='1335350'>the</span>
  <span m='1335450'>set</span> <span m='1335790'>of</span> <span
  m='1335970'>all</span> <span m='1336530'>vertices,</span> <span
  m='1337080'>V,</span> <span m='1338170'>such</span> <span
  m='1338550'>that</span> <span m='1339110'>u,</span> <span m='1339380'>v</span>
  <span m='1341690'>is</span> <span m='1341900'>an</span> <span
  m='1342000'>edge.</span> <span m='1351320'>So</span> <span
  m='1351510'>if</span> <span m='1351750'>I</span> <span m='1351830'>have</span>
  <span m='1352100'>a</span> <span m='1352160'>vertex</span> <span
  m='1352730'>like</span> <span m='1353560'>b,</span> <span
  m='1355050'>Adj</span> <span m='1355355'>of</span> <span m='1355660'>b</span>
  <span m='1355990'>is</span> <span m='1356300'>going</span> <span
  m='1356420'>to</span> <span m='1356480'>be</span> <span
  m='1356610'>both</span> <span m='1357090'>a</span> <span
  m='1357280'>and</span> <span m='1357450'>c</span> <span
  m='1357850'>because</span> <span m='1358140'>in</span> <span
  m='1358220'>one</span> <span m='1358430'>step</span> <span m='1358685'>there
  are</span> <span m='1358940'>outgoing</span> <span m='1359490'>edges</span>
  <span m='1360180'>from</span> <span m='1360330'>b</span> <span
  m='1360490'>to</span> <span m='1360580'>a</span> <span m='1361170'>and</span>
  <span m='1361320'>b</span> <span m='1361450'>to</span> <span
  m='1361540'>c.</span> <span m='1362010'>So</span> <span m='1362220'>Adj</span>
  <span m='1362470'>of b</span> <span m='1363130'>is</span> <span
  m='1364140'>a,</span> <span m='1364390'>c.</span> <span m='1372260'>In</span>
  <span m='1372420'>that</span> <span m='1372730'>graph.</span> <span
  m='1373530'>I should have</span> <span m='1373760'>labeled</span> <span
  m='1374030'>the vertices</span> <span m='1374480'>something</span> <span
  m='1374870'>different.</span> <span m='1376620'>Adj</span> <span
  m='1377450'>of</span> <span m='1378250'>a</span> <span m='1379680'>is</span>
  <span m='1379860'>going</span> <span m='1380010'>to</span> <span
  m='1380080'>be</span> <span m='1380360'>just</span> <span m='1380870'>c</span>
  <span m='1381830'>because</span> <span m='1382140'>you</span> <span
  m='1382310'>can't</span> <span m='1382670'>get</span> <span
  m='1383430'>with</span> <span m='1383610'>one</span> <span
  m='1383810'>step</span> <span m='1384070'>from</span> <span
  m='1384160'>a</span> <span m='1384360'>to</span> <span m='1384430'>b.</span>
  <span m='1385145'>The edge is</span> <span m='1385590'>in</span> <span
  m='1385680'>the</span> <span m='1385770'>wrong</span> <span
  m='1386000'>direction.</span> <span m='1388080'>And</span> <span
  m='1388190'>Adj</span> <span m='1388595'>of</span> <span m='1388860'>c</span>
  <span m='1391740'>is</span> <span m='1392770'>b.</span> <span
  m='1397480'>I</span> <span m='1397580'>think</span> <span
  m='1397930'>that</span> <span m='1398090'>definition's</span> <span
  m='1398530'>pretty</span> <span m='1398730'>clear.</span> </p><p><span
  m='1399260'>For</span> <span m='1399440'>undirected</span> <span
  m='1399980'>graphs,</span> <span m='1400910'>you</span> <span
  m='1401020'>just</span> <span m='1401200'>put</span> <span
  m='1401380'>braces</span> <span m='1401920'>here.</span> <span
  m='1403290'>Which</span> <span m='1403410'>means</span> <span
  m='1403800'>you</span> <span m='1403980'>store--</span> <span
  m='1404710'>I</span> <span m='1404810'>mean, it's</span> <span
  m='1404960'>the</span> <span m='1405030'>same</span> <span
  m='1405540'>thing.</span> <span m='1405980'>Here</span> <span
  m='1406320'>Adj</span> <span m='1406490'>of</span> <span m='1406800'>c</span>
  <span m='1407110'>is</span> <span m='1407240'>going</span> <span
  m='1407370'>to</span> <span m='1407440'>be</span> <span m='1407620'>a,</span>
  <span m='1407820'>b,</span> <span m='1408040'>and</span> <span
  m='1408190'>d,</span> <span m='1408870'>as</span> <span m='1409030'>you</span>
  <span m='1409180'>can</span> <span m='1409300'>get</span> <span
  m='1409520'>in</span> <span m='1409640'>one</span> <span
  m='1409820'>step</span> <span m='1410090'>from</span> <span m='1410230'>c
  to</span> <span m='1410510'>a,</span> <span m='1410790'>from c to</span> <span
  m='1411150'>b,</span> <span m='1411390'>from c to</span> <span
  m='1411863'>d.</span> <span m='1413200'>For</span> <span
  m='1413370'>pretty</span> <span m='1413610'>much</span> <span
  m='1413850'>every--</span> <span m='1414520'>At</span> <span
  m='1414650'>least</span> <span m='1414870'>for</span> <span
  m='1414990'>graph</span> <span m='1415240'>exploration</span> <span
  m='1415910'>problems,</span> <span m='1416700'>this</span> <span
  m='1416910'>is</span> <span m='1417020'>the</span> <span
  m='1417130'>representation</span> <span m='1417810'>you</span> <span
  m='1417930'>want.</span> <span m='1418580'>Because</span> <span
  m='1418630'>you're</span> <span m='1418760'>at</span> <span
  m='1418870'>some</span> <span m='1419000'>vertex, and</span> <span
  m='1419400'>you</span> <span m='1419480'>want</span> <span
  m='1419640'>to</span> <span m='1419690'>know,</span> <span
  m='1419850'>where</span> <span m='1420050'>can</span> <span
  m='1420190'>I</span> <span m='1420240'>go</span> <span
  m='1420400'>next.</span> <span m='1420930'>And</span> <span
  m='1421120'>Adj</span> <span m='1421290'>of</span> <span
  m='1421630'>that</span> <span m='1421870'>vertex</span> <span
  m='1422260'>tells</span> <span m='1422450'>you</span> <span
  m='1422520'>exactly</span> <span m='1423000'>where</span> <span
  m='1423140'>you</span> <span m='1423240'>can</span> <span
  m='1423360'>go</span> <span m='1423480'>next.</span> <span
  m='1424560'>So</span> <span m='1424600'>this</span> <span
  m='1424880'>is</span> <span m='1425280'>what</span> <span
  m='1425460'>you</span> <span m='1425580'>want.</span> </p><p><span
  m='1430030'>There's</span> <span m='1430140'>a</span> <span
  m='1430200'>lot</span> <span m='1430430'>of</span> <span
  m='1430540'>different</span> <span m='1430900'>ways</span> <span
  m='1431190'>to</span> <span m='1431340'>actually</span> <span
  m='1431930'>implement</span> <span m='1433040'>adjacency</span> <span
  m='1433600'>lists.</span> <span m='1436540'>I've</span> <span
  m='1436730'>talked</span> <span m='1436970'>about</span> <span
  m='1437230'>two</span> <span m='1437380'>of</span> <span
  m='1437500'>them.</span> <span m='1439440'>You</span> <span
  m='1439590'>could</span> <span m='1439780'>have</span> <span
  m='1439980'>the</span> <span m='1440060'>vertices</span> <span
  m='1440560'>labeled</span> <span m='1440815'>zero</span> <span
  m='1441600'>to</span> <span m='1441870'>v</span> <span
  m='1442020'>minus</span> <span m='1442340'>1,</span> <span
  m='1442720'>and</span> <span m='1442910'>then</span> <span
  m='1443040'>this</span> <span m='1443210'>is,</span> <span
  m='1443340'>literally,</span> <span m='1443770'>an</span> <span
  m='1443860'>array.</span> <span m='1445020'>And</span> <span
  m='1445230'>you</span> <span m='1445330'>have--</span> <span
  m='1446120'>I</span> <span m='1446180'>guess</span> <span m='1446380'>I</span>
  <span m='1446430'>should</span> <span m='1446710'>draw.</span> <span
  m='1448460'>In</span> <span m='1448680'>this</span> <span
  m='1448910'>picture,</span> <span m='1450550'>Adj</span> <span
  m='1452700'>is</span> <span m='1453130'>an</span> <span
  m='1453200'>array.</span> <span m='1453730'>So</span> <span
  m='1453940'>you've</span> <span m='1454050'>got</span> <span
  m='1454710'>a,</span> <span m='1455080'>b,</span> <span m='1455480'>and</span>
  <span m='1456160'>c.</span> <span m='1457080'>Each</span> <span
  m='1457250'>one</span> <span m='1457430'>of</span> <span
  m='1457500'>them</span> <span m='1457720'>is</span> <span m='1457840'>a</span>
  <span m='1457900'>pointer</span> <span m='1458960'>to</span> <span
  m='1459230'>a</span> <span m='1459260'>linked</span> <span
  m='1459490'>list.</span> <span m='1460490'>This</span> <span
  m='1460680'>one's</span> <span m='1460930'>actually</span> <span
  m='1461260'>going</span> <span m='1461430'>to</span> <span
  m='1461480'>be</span> <span m='1462040'>a,</span> <span m='1464080'>c,</span>
  <span m='1464770'>and</span> <span m='1465070'>we're</span> <span
  m='1465200'>done.</span> <span m='1467510'>Sorry,</span> <span
  m='1467750'>that</span> <span m='1467970'>was</span> <span
  m='1468220'>b.</span> <span m='1470820'>Who</span> <span m='1470930'>said it
  had</span> <span m='1471260'>to</span> <span m='1471320'>be</span> <span
  m='1471440'>alphabetical</span> <span m='1471710'>order?</span> <span
  m='1473520'>A</span> <span m='1473830'>is</span> <span m='1474140'>a</span>
  <span m='1474450'>pointer</span> <span m='1474760'>to</span> <span
  m='1475096'>c,</span> <span m='1475432'>c</span> <span m='1475770'>is</span>
  <span m='1475870'>a</span> <span m='1475950'>pointer</span> <span
  m='1476370'>to</span> <span m='1476590'>b.</span> <span
  m='1478110'>That's</span> <span m='1478450'>explicitly</span> <span
  m='1479010'>how</span> <span m='1479180'>you</span> <span
  m='1479340'>might</span> <span m='1479540'>represent</span> <span
  m='1480020'>it.</span> <span m='1480570'>This</span> <span
  m='1480750'>might</span> <span m='1480990'>be</span> <span
  m='1481120'>a</span> <span m='1481190'>hash</span> <span
  m='1481500'>table</span> <span m='1481870'>instead</span> <span
  m='1482210'>of</span> <span m='1482310'>an</span> <span
  m='1482645'>array,</span> <span m='1483350'>if</span> <span
  m='1483540'>you</span> <span m='1483770'>have</span> <span
  m='1484110'>weirder</span> <span m='1484450'>vertices.</span> </p><p><span
  m='1485870'>You</span> <span m='1486060'>can</span> <span
  m='1486210'>also</span> <span m='1486490'>do</span> <span
  m='1486680'>it</span> <span m='1486820'>in</span> <span m='1487020'>a</span>
  <span m='1487060'>more</span> <span m='1487370'>object-oriented</span> <span
  m='1488100'>fashion.</span> <span m='1495590'>For</span> <span
  m='1495710'>every</span> <span m='1495880'>vertex,</span> <span
  m='1496300'>v,</span> <span m='1496530'>you can</span> <span
  m='1496600'>make</span> <span m='1496960'>the</span> <span
  m='1497530'>vertices</span> <span m='1498110'>objects,</span> <span
  m='1499090'>and</span> <span m='1499320'>v dot</span> <span
  m='1499510'>neighbors</span> <span m='1503350'>could</span> <span
  m='1503590'>store</span> <span m='1505516'>what</span> <span
  m='1505930'>we're</span> <span m='1506140'>defining</span> <span
  m='1506660'>over</span> <span m='1506850'>there</span> <span
  m='1507060'>to</span> <span m='1507160'>be</span> <span m='1507380'>Adj</span>
  <span m='1508460'>of</span> <span m='1508880'>v.</span> <span
  m='1510480'>This</span> <span m='1510730'>would</span> <span
  m='1510900'>be</span> <span m='1511300'>the</span> <span
  m='1511390'>more</span> <span m='1511850'>object-oriented</span> <span
  m='1512240'>way</span> <span m='1512380'>to</span> <span m='1512530'>do</span>
  <span m='1512680'>it</span> <span m='1513630'>I've</span> <span
  m='1513760'>thought</span> <span m='1514010'>a</span> <span
  m='1514070'>lot</span> <span m='1514280'>about</span> <span
  m='1514540'>this,</span> <span m='1514900'>and</span> <span
  m='1515320'>I</span> <span m='1515450'>like</span> <span
  m='1515770'>this,</span> <span m='1516040'>and</span> <span
  m='1516150'>usually</span> <span m='1516460'>when</span> <span
  m='1516580'>I</span> <span m='1516620'>implement</span> <span
  m='1517000'>graphs</span> <span m='1517280'>this</span> <span
  m='1517440'>is</span> <span m='1517540'>what</span> <span m='1517700'>I</span>
  <span m='1517770'>do.</span> <span m='1519010'>But</span> <span
  m='1520310'>it</span> <span m='1520490'>is</span> <span
  m='1520710'>actually</span> <span m='1521290'>convenient</span> <span
  m='1521950'>to</span> <span m='1522030'>have</span> <span
  m='1522280'>this</span> <span m='1522440'>representation.</span> <span
  m='1523200'>There's</span> <span m='1523330'>a</span> <span
  m='1523420'>reason</span> <span m='1523710'>the</span> <span
  m='1523810'>textbook</span> <span m='1524270'>uses</span> <span
  m='1524580'>this</span> <span m='1524740'>representation.</span> <span
  m='1525910'>Because,</span> <span m='1526210'>if</span> <span
  m='1526310'>you've</span> <span m='1526460'>already</span> <span
  m='1526700'>got</span> <span m='1526910'>some</span> <span
  m='1527030'>vertices</span> <span m='1527430'>lying</span> <span
  m='1527690'>around</span> <span m='1528040'>and</span> <span
  m='1528140'>you</span> <span m='1528240'>want</span> <span
  m='1528390'>to</span> <span m='1528430'>have</span> <span
  m='1528650'>multiple</span> <span m='1529260'>graphs</span> <span
  m='1529760'>on</span> <span m='1529920'>those</span> <span
  m='1530100'>vertices,</span> <span m='1531150'>this</span> <span
  m='1531370'>lets</span> <span m='1531610'>you</span> <span
  m='1531710'>do</span> <span m='1531880'>that.</span> <span
  m='1533710'>You</span> <span m='1533780'>can</span> <span
  m='1533900'>define</span> <span m='1534450'>multiple</span> <span
  m='1534990'>Adj</span> <span m='1536110'>arrays,</span> <span
  m='1536690'>one</span> <span m='1537000'>for</span> <span
  m='1537190'>graph</span> <span m='1537490'>one,</span> <span
  m='1537800'>one</span> <span m='1538010'>for</span> <span
  m='1538140'>graph</span> <span m='1538380'>two,</span> <span
  m='1538630'>one</span> <span m='1538780'>for</span> <span
  m='1538900'>graph</span> <span m='1539140'>three</span> <span m='1539350'>but
  they</span> <span m='1539570'>can</span> <span m='1539660'>all</span> <span
  m='1539910'>talk</span> <span m='1540220'>about</span> <span
  m='1540480'>the</span> <span m='1540570'>same</span> <span
  m='1540840'>vertices.</span> <span m='1541790'>Whereas</span> <span
  m='1542040'>here,</span> <span m='1543190'>vertex</span> <span
  m='1543810'>can</span> <span m='1543930'>only</span> <span
  m='1544380'>belong</span> <span m='1544720'>to</span> <span
  m='1544840'>one</span> <span m='1545080'>graph.</span> <span
  m='1545410'>It</span> <span m='1545740'>can</span> <span
  m='1545850'>only</span> <span m='1546030'>have</span> <span
  m='1546230'>one</span> <span m='1547050'>neighbor</span> <span
  m='1547340'>structure</span> <span m='1548260'>that</span> <span
  m='1548380'>says</span> <span m='1548620'>what</span> <span
  m='1548790'>happens.</span> <span m='1549390'>If</span> <span
  m='1549470'>you're</span> <span m='1549590'>only</span> <span
  m='1549740'>dealing</span> <span m='1550050'>with</span> <span
  m='1550120'>one</span> <span m='1550290'>graph,</span> <span
  m='1551000'>this</span> <span m='1551230'>is</span> <span
  m='1551380'>probably</span> <span m='1551810'>cleaner.</span> <span
  m='1552850'>But</span> <span m='1553130'>with</span> <span
  m='1553320'>multiple</span> <span m='1553710'>graphs,</span> <span
  m='1554180'>which</span> <span m='1554380'>will</span> <span
  m='1554540'>happen</span> <span m='1554910'>even</span> <span
  m='1555140'>in</span> <span m='1555230'>this</span> <span
  m='1555390'>class,</span> <span m='1556220'>adjacency</span> <span
  m='1557040'>lists</span> <span m='1557320'>are</span> <span m='1558440'>kind
  of</span> <span m='1558810'>the</span> <span m='1558900'>way</span> <span
  m='1559030'>to</span> <span m='1559110'>go.</span> </p><p><span
  m='1560650'>You</span> <span m='1560830'>can</span> <span
  m='1560950'>also</span> <span m='1561190'>do</span> <span
  m='1561290'>implicitly-represented</span> <span m='1562180'>graphs.</span>
  <span m='1573580'>Which</span> <span m='1573790'>would</span> <span
  m='1573930'>be</span> <span m='1574160'>to</span> <span
  m='1574300'>say,</span> <span m='1576530'>Adj</span> <span
  m='1578441'>of</span> <span m='1578820'>u</span> <span m='1579940'>is</span>
  <span m='1580120'>a</span> <span m='1580170'>function.</span> <span
  m='1583960'>Or</span> <span m='1586100'>v dot</span> <span
  m='1586530'>neighbors</span> <span m='1592070'>is</span> <span
  m='1592280'>a</span> <span m='1592330'>method</span> <span
  m='1593596'>of</span> <span m='1594040'>the</span> <span
  m='1594390'>vertex</span> <span m='1594830'>class.</span> <span
  m='1596660'>Meaning,</span> <span m='1596950'>it's</span> <span
  m='1597100'>not</span> <span m='1597270'>just</span> <span
  m='1597420'>stored</span> <span m='1597750'>there</span> <span
  m='1597940'>explicitly.</span> <span m='1599210'>Whenever</span> <span
  m='1599640'>you</span> <span m='1599760'>need</span> <span
  m='1600020'>it,</span> <span m='1600310'>you</span> <span
  m='1600420'>call</span> <span m='1600670'>this</span> <span
  m='1600860'>function</span> <span m='1601270'>and it</span> <span
  m='1601480'>computes</span> <span m='1602450'>what</span> <span
  m='1602620'>you</span> <span m='1602730'>want.</span> <span
  m='1605500'>This</span> <span m='1605690'>is</span> <span
  m='1605770'>useful</span> <span m='1606080'>because</span> <span
  m='1606400'>it</span> <span m='1606480'>uses</span> <span
  m='1606800'>less</span> <span m='1607000'>space.</span> <span
  m='1607420'>You</span> <span m='1607520'>could</span> <span
  m='1607660'>say</span> <span m='1607850'>this</span> <span
  m='1608030'>uses</span> <span m='1608790'>zero</span> <span
  m='1609120'>space</span> <span m='1609680'>or</span> <span
  m='1609870'>maybe</span> <span m='1610440'>v</span> <span
  m='1610940'>space.</span> <span m='1612030'>One</span> <span
  m='1612220'>for</span> <span m='1612360'>each</span> <span
  m='1612510'>vertex.</span> <span m='1613470'>It</span> <span
  m='1613740'>depends.</span> <span m='1614370'>Maybe</span> <span
  m='1614630'>you</span> <span m='1614690'>don't</span> <span
  m='1614840'>even</span> <span m='1615000'>need</span> <span
  m='1615160'>to</span> <span m='1615230'>explicitly</span> <span
  m='1615760'>represent</span> <span m='1616180'>all</span> <span
  m='1616300'>the</span> <span m='1616350'>vertices.</span> <span
  m='1618080'>You</span> <span m='1618200'>start</span> <span
  m='1618630'>with</span> <span m='1618770'>some</span> <span
  m='1619130'>vertex,</span> <span m='1620330'>and</span> <span
  m='1621930'>given</span> <span m='1622310'>a</span> <span
  m='1622360'>vertex,</span> <span m='1623010'>somehow</span> <span
  m='1623500'>you know how</span> <span m='1623970'>to</span> <span
  m='1624070'>compute,</span> <span m='1624480'>let's</span> <span
  m='1624670'>say</span> <span m='1624990'>in</span> <span
  m='1625470'>constant</span> <span m='1625890'>time</span> <span
  m='1626280'>or</span> <span m='1626350'>linear</span> <span
  m='1626610'>time</span> <span m='1626940'>or</span> <span
  m='1627020'>something,</span> <span m='1627840'>the</span> <span
  m='1627990'>neighbors</span> <span m='1628420'>of</span> <span
  m='1628490'>that</span> <span m='1628680'>vertex.</span> <span
  m='1630270'>And</span> <span m='1630480'>then</span> <span
  m='1630630'>from</span> <span m='1630780'>there,</span> <span
  m='1631070'>you</span> <span m='1631180'>can</span> <span
  m='1631330'>keep</span> <span m='1631950'>searching,</span> <span
  m='1632330'>keep</span> <span m='1632540'>computing</span> <span
  m='1632890'>neighbors,</span> <span m='1633340'>until</span> <span
  m='1633630'>you</span> <span m='1633750'>find</span> <span
  m='1634000'>what</span> <span m='1634130'>you</span> <span
  m='1634220'>want.</span> <span m='1634590'>Maybe you</span> <span
  m='1634850'>don't</span> <span m='1635050'>have</span> <span
  m='1635240'>to</span> <span m='1635340'>build</span> <span
  m='1635570'>the</span> <span m='1635630'>whole</span> <span
  m='1635810'>graph,</span> <span m='1636260'>you</span> <span
  m='1636590'>just</span> <span m='1636740'>need</span> <span
  m='1636890'>to</span> <span m='1637330'>build</span> <span
  m='1637560'>enough</span> <span m='1637840'>of</span> <span
  m='1637980'>it</span> <span m='1638320'>until</span> <span
  m='1638700'>you</span> <span m='1638900'>find</span> <span
  m='1639200'>your</span> <span m='1639370'>answer.</span> <span
  m='1639830'>Whatever</span> <span m='1640170'>answer</span> <span
  m='1640450'>you're searching</span> <span m='1640790'>for.</span> </p><p><span
  m='1641315'>Can</span> <span m='1641610'>you</span> <span
  m='1641720'>think</span> <span m='1641920'>of</span> <span
  m='1642050'>a</span> <span m='1642140'>situation</span> <span
  m='1642720'>where</span> <span m='1642830'>that</span> <span
  m='1643020'>might</span> <span m='1643180'>be</span> <span
  m='1643270'>the</span> <span m='1643360'>case?</span> <span
  m='1647440'>Where</span> <span m='1647700'>implicit</span> <span
  m='1648120'>representation</span> <span m='1648420'>would be a</span> <span
  m='1648720'>good</span> <span m='1648960'>idea?</span> <span
  m='1649330'>Yes.</span> <span m='1649580'>Rubik's</span> <span
  m='1649830'>Cubes.</span> <span m='1650710'>They're</span> <span
  m='1650810'>really</span> <span m='1650990'>good.</span> <span
  m='1651160'>I</span> <span m='1651240'>never</span> <span
  m='1651600'>want</span> <span m='1651770'>to</span> <span
  m='1651820'>build</span> <span m='1652050'>this</span> <span
  m='1652160'>space.</span> <span m='1653170'>It</span> <span
  m='1653290'>has</span> <span m='1654100'>a</span> <span
  m='1654190'>bajillion</span> <span m='1655010'>states.</span> <span
  m='1656060'>A</span> <span m='1656200'>bajillion</span> <span
  m='1656520'>vertices.</span> <span m='1657170'>It</span> <span
  m='1657450'>would</span> <span m='1657790'>take</span> <span
  m='1657990'>forever.</span> <span m='1658780'>There's</span> <span
  m='1658970'>more</span> <span m='1659760'>configurations</span> <span
  m='1661040'>of</span> <span m='1661140'>this</span> <span
  m='1661310'>cube</span> <span m='1661580'>than</span> <span
  m='1661710'>there</span> <span m='1661850'>are</span> <span
  m='1661930'>particles</span> <span m='1662580'>in</span> <span
  m='1662740'>the</span> <span m='1662810'>known</span> <span
  m='1662980'>universe.</span> <span m='1665590'>I</span> <span
  m='1666060'>just</span> <span m='1666350'>computed</span> <span
  m='1666700'>that in</span> <span m='1666880'>my</span> <span
  m='1667000'>head.</span> </p><p><span m='1667701'>[LAUGHTER]</span>
  </p><p><span m='1670120'>I</span> <span m='1670410'>have</span> <span
  m='1670790'>done</span> <span m='1670980'>this</span> <span
  m='1671160'>computation</span> <span m='1671690'>recently,</span> <span
  m='1672130'>and</span> <span m='1672210'>for</span> <span
  m='1672310'>five</span> <span m='1672530'>by</span> <span
  m='1672630'>five</span> <span m='1672820'>by</span> <span
  m='1672930'>five</span> <span m='1673180'>it's</span> <span
  m='1673310'>like</span> <span m='1673490'>10</span> <span
  m='1673760'>to</span> <span m='1673870'>the</span> <span m='1674650'>40</span>
  <span m='1675000'>states.</span> <span m='1675620'>Or</span> <span
  m='1677100'>10</span> <span m='1677250'>to</span> <span m='1677310'>the</span>
  <span m='1677400'>40,</span> <span m='1677630'>10 to the</span> <span
  m='1677950'>60.</span> <span m='1678630'>There's</span> <span
  m='1678760'>about</span> <span m='1679030'>10</span> <span
  m='1679200'>to</span> <span m='1679280'>the</span> <span m='1679350'>80</span>
  <span m='1679600'>particles</span> <span m='1680070'>in</span> <span
  m='1680270'>the known</span> <span m='1680400'>universe.</span> <span
  m='1680940'>10</span> <span m='1681200'>to the</span> <span
  m='1681370'>83</span> <span m='1681860'>or</span> <span
  m='1681940'>something.</span> <span m='1682240'>So</span> <span
  m='1682360'>this</span> <span m='1682580'>is</span> <span
  m='1682710'>probably</span> <span m='1684410'>10</span> <span
  m='1684620'>to</span> <span m='1684710'>the</span> <span
  m='1684820'>200</span> <span m='1685230'>or</span> <span
  m='1685350'>so.</span> <span m='1686750'>It's</span> <span
  m='1686830'>a</span> <span m='1686880'>lot.</span> <span
  m='1687940'>You</span> <span m='1688020'>never</span> <span
  m='1688280'>want</span> <span m='1688420'>to</span> <span
  m='1688470'>build</span> <span m='1688730'>that.</span> </p><p><span
  m='1689070'>But,</span> <span m='1689420'>it's</span> <span
  m='1689580'>very</span> <span m='1689860'>easy</span> <span
  m='1690120'>to</span> <span m='1690240'>represent</span> <span
  m='1690730'>this</span> <span m='1690920'>state.</span> <span
  m='1691820'>Just</span> <span m='1691920'>store</span> <span
  m='1692260'>where</span> <span m='1692420'>all</span> <span
  m='1692520'>the</span> <span m='1692600'>cubies</span> <span
  m='1693010'>are.</span> <span m='1693520'>And</span> <span
  m='1693810'>it's</span> <span m='1693970'>very</span> <span
  m='1694180'>easy</span> <span m='1694390'>to</span> <span
  m='1694550'>see</span> <span m='1694960'>what</span> <span
  m='1695170'>are</span> <span m='1695270'>all</span> <span
  m='1695370'>the</span> <span m='1695450'>configurations</span> <span
  m='1696250'>you</span> <span m='1696410'>can</span> <span
  m='1696530'>reach</span> <span m='1696780'>in</span> <span
  m='1696830'>one</span> <span m='1697020'>move.</span> <span
  m='1697640'>Just</span> <span m='1697790'>try</span> <span
  m='1697960'>this</span> <span m='1698150'>move,</span> <span
  m='1698550'>try</span> <span m='1698770'>this</span> <span
  m='1699030'>move,</span> <span m='1699420'>try</span> <span
  m='1699610'>this</span> <span m='1699830'>move.</span> <span
  m='1700630'>Put</span> <span m='1700750'>it</span> <span
  m='1700820'>back</span> <span m='1701480'>and</span> <span
  m='1701640'>try</span> <span m='1701780'>the</span> <span
  m='1701860'>next</span> <span m='1702130'>move.</span> <span m='1702405'>And
  so</span> <span m='1702680'>on.</span> <span m='1705660'>For</span> <span
  m='1705800'>an</span> <span m='1705870'>m</span> <span m='1706000'>by</span>
  <span m='1706140'>n</span> <span m='1706280'>by</span> <span
  m='1706420'>n</span> <span m='1706570'>cube</span> <span m='1706990'>in</span>
  <span m='1707140'>order</span> <span m='1707390'>n</span> <span
  m='1707600'>time,</span> <span m='1707880'>you</span> <span
  m='1707970'>can</span> <span m='1708090'>list</span> <span
  m='1708340'>all</span> <span m='1708490'>the</span> <span
  m='1708580'>order</span> <span m='1708870'>n</span> <span
  m='1709470'>next</span> <span m='1709700'>states.</span> <span
  m='1710210'>You</span> <span m='1710320'>can</span> <span
  m='1710430'>list</span> <span m='1710630'>all</span> <span
  m='1710740'>the</span> <span m='1710820'>order</span> <span
  m='1711080'>n</span> <span m='1711160'>neighbors.</span> <span
  m='1712050'>And</span> <span m='1712210'>so</span> <span
  m='1712290'>you</span> <span m='1712390'>can</span> <span
  m='1712530'>keep</span> <span m='1712740'>exploring,</span> <span
  m='1713900'>searching</span> <span m='1714410'>for</span> <span
  m='1714530'>your</span> <span m='1714700'>state.</span> <span
  m='1715290'>Now</span> <span m='1715410'>you</span> <span
  m='1715520'>don't</span> <span m='1715680'>want</span> <span
  m='1715790'>to</span> <span m='1715830'>explore</span> <span
  m='1716110'>too</span> <span m='1716270'>far</span> <span
  m='1716610'>for</span> <span m='1716740'>that</span> <span
  m='1716980'>cube,</span> <span m='1717390'>but</span> <span
  m='1718740'>at</span> <span m='1718850'>least</span> <span
  m='1719100'>you're</span> <span m='1719220'>not</span> <span
  m='1720410'>hosed</span> <span m='1720770'>just</span> <span
  m='1721020'>from</span> <span m='1721220'>the</span> <span
  m='1721330'>problem</span> <span m='1721740'>of</span> <span
  m='1722120'>representing</span> <span m='1722780'>the</span> <span
  m='1722860'>graph.</span> <span m='1724190'>So</span> <span
  m='1724700'>even</span> <span m='1724930'>for</span> <span
  m='1725080'>two</span> <span m='1725210'>by</span> <span
  m='1725360'>two</span> <span m='1725520'>by</span> <span
  m='1725660'>two,</span> <span m='1725910'>it's</span> <span
  m='1726030'>useful</span> <span m='1726330'>to</span> <span
  m='1726410'>do</span> <span m='1726540'>this</span> <span
  m='1727180'>mostly</span> <span m='1727490'>to</span> <span
  m='1727550'>save</span> <span m='1727830'>space.</span> <span
  m='1728165'>You're</span> <span m='1728500'>not</span> <span
  m='1728630'>really</span> <span m='1728790'>saving</span> <span
  m='1729110'>time.</span> <span m='1730310'>But</span> <span
  m='1730930'>you'd</span> <span m='1731180'>like</span> <span
  m='1731440'>to</span> <span m='1731570'>not</span> <span
  m='1731960'>have</span> <span m='1732210'>to</span> <span
  m='1732320'>store</span> <span m='1733210'>all</span> <span
  m='1733470'>264</span> <span m='1734230'>million</span> <span
  m='1734550'>states</span> <span m='1734960'>because</span> <span
  m='1735270'>it's</span> <span m='1735430'>going</span> <span
  m='1735570'>to</span> <span m='1735640'>be</span> <span
  m='1736390'>several</span> <span m='1736720'>gigabytes</span> <span
  m='1737340'>and</span> <span m='1739500'>it's</span> <span
  m='1739610'>annoying.</span> </p><p><span m='1741850'>Speaking</span> <span
  m='1742270'>of</span> <span m='1742350'>space--</span> <span
  m='1743510'>ignoring</span> <span m='1743920'>the</span> <span
  m='1744010'>implicit</span> <span m='1744390'>representation--</span> <span
  m='1745650'>how</span> <span m='1745830'>much</span> <span
  m='1746090'>space</span> <span m='1747000'>does</span> <span
  m='1747250'>this</span> <span m='1747440'>representation</span> <span
  m='1748470'>require?</span> <span m='1759820'>V</span> <span
  m='1760000'>plus</span> <span m='1760240'>E.</span> <span
  m='1760580'>This</span> <span m='1761020'>Is</span> <span
  m='1761170'>going</span> <span m='1761300'>to</span> <span
  m='1761380'>be</span> <span m='1762180'>the</span> <span
  m='1762270'>bread</span> <span m='1762590'>and</span> <span
  m='1762710'>butter</span> <span m='1763090'>of</span> <span
  m='1763320'>our</span> <span m='1764200'>graph</span> <span
  m='1764470'>algorithms.</span> <span m='1764930'>Most</span> <span
  m='1765230'>of</span> <span m='1765290'>the</span> <span
  m='1765370'>things</span> <span m='1765590'>we're</span> <span
  m='1765670'>going</span> <span m='1765760'>to</span> <span
  m='1765840'>talk</span> <span m='1766080'>about</span> <span
  m='1766360'>achieve</span> <span m='1766640'>V</span> <span m='1766840'>plus
  E</span> <span m='1767150'>time.</span> <span m='1767470'>This</span> <span
  m='1767620'>is</span> <span m='1767740'>essentially</span> <span
  m='1768240'>optimal.</span> <span m='1769090'>It's</span> <span
  m='1769260'>linear</span> <span m='1769700'>in</span> <span
  m='1769770'>the</span> <span m='1769860'>size</span> <span
  m='1770480'>of</span> <span m='1770730'>your</span> <span
  m='1770940'>graph.</span> <span m='1772162'>You've</span> <span
  m='1772500'>got V</span> <span m='1772690'>vertices,</span> <span
  m='1773660'>E</span> <span m='1773820'>edges.</span> <span
  m='1774700'>Technically,</span> <span m='1775460'>in</span> <span
  m='1775560'>case</span> <span m='1775770'>you're</span> <span
  m='1775880'>curious,</span> <span m='1777160'>this</span> <span
  m='1777420'>is</span> <span m='1777530'>really</span> <span
  m='1777840'>the</span> <span m='1778290'>size of</span> <span
  m='1778740'>V</span> <span m='1779020'>plus the</span> <span
  m='1779300'>size</span> <span m='1779680'>of</span> <span
  m='1779760'>E.</span> <span m='1780560'>But</span> <span m='1780750'>in</span>
  <span m='1781070'>the</span> <span m='1781180'>textbook,</span> <span
  m='1783070'>and</span> <span m='1783410'>I</span> <span
  m='1783470'>guess</span> <span m='1783710'>in</span> <span
  m='1783840'>the</span> <span m='1783920'>world,</span> <span
  m='1784770'>we</span> <span m='1784820'>just</span> <span
  m='1784980'>omit</span> <span m='1785060'>those</span> <span
  m='1785405'>sizes</span> <span m='1785750'>of</span> <span
  m='1786050'>whenever</span> <span m='1786340'>they're</span> <span
  m='1786500'>in</span> <span m='1786590'>a</span> <span
  m='1786660'>theta</span> <span m='1786980'>notation</span> <span
  m='1787520'>or</span> <span m='1787670'>Big</span> <span m='1787930'>O</span>
  <span m='1788000'>notation.</span> <span m='1789180'>So</span> <span
  m='1789340'>number</span> <span m='1789620'>vertices</span> <span
  m='1790070'>plus</span> <span m='1790290'>number</span> <span
  m='1790550'>of</span> <span m='1790630'>edges.</span> <span
  m='1790930'>that</span> <span m='1791090'>sort</span> <span
  m='1791250'>of</span> <span m='1791290'>the</span> <span
  m='1791400'>bare</span> <span m='1791670'>minimum</span> <span
  m='1792090'>you</span> <span m='1792220'>need</span> <span
  m='1792430'>if</span> <span m='1792540'>you</span> <span
  m='1792650'>want</span> <span m='1792810'>an</span> <span
  m='1792910'>explicit</span> <span m='1793750'>representation</span> <span
  m='1794460'>of</span> <span m='1794510'>the</span> <span
  m='1794590'>graph.</span> <span m='1795470'>And</span> <span
  m='1795610'>we</span> <span m='1795730'>achieve</span> <span
  m='1796090'>that</span> <span m='1796380'>because</span> <span
  m='1796720'>we've</span> <span m='1796830'>got</span> <span m='1797220'>we've
  got</span> <span m='1797510'>v</span> <span m='1797920'>space</span> <span
  m='1798440'>just</span> <span m='1798720'>to</span> <span
  m='1798830'>store</span> <span m='1799150'>the</span> <span
  m='1799290'>vertices</span> <span m='1799900'>in</span> <span
  m='1800010'>an</span> <span m='1800130'>array.</span> <span
  m='1800880'>And</span> <span m='1801090'>then</span> <span
  m='1801240'>if</span> <span m='1801340'>you</span> <span
  m='1802000'>add</span> <span m='1802290'>up--</span> <span
  m='1803820'>Each</span> <span m='1804050'>of</span> <span
  m='1804130'>these</span> <span m='1804350'>is</span> <span
  m='1804470'>an</span> <span m='1804580'>edge.</span> <span m='1806910'>You
  have</span> <span m='1807030'>to</span> <span m='1807090'>be</span> <span
  m='1807190'>a</span> <span m='1807240'>little</span> <span
  m='1807460'>careful.</span> <span m='1808010'>In</span> <span
  m='1808290'>undirected</span> <span m='1808870'>graphs,</span> <span
  m='1809650'>each</span> <span m='1809840'>of</span> <span
  m='1809920'>these</span> <span m='1810120'>is</span> <span
  m='1810230'>a</span> <span m='1810280'>half</span> <span
  m='1810650'>edge.</span> <span m='1811570'>So</span> <span
  m='1811740'>there's</span> <span m='1811900'>actually</span> <span
  m='1812380'>two</span> <span m='1812680'>times</span> <span
  m='1813100'>e</span> <span m='1813810'>nodes</span> <span
  m='1814120'>over</span> <span m='1814330'>here.</span> <span
  m='1815340'>But</span> <span m='1816280'>it's</span> <span
  m='1816620'>theta</span> <span m='1817010'>E.</span> <span
  m='1818000'>So</span> <span m='1818270'>theta</span> <span
  m='1818660'>V</span> <span m='1818900'>plus</span> <span m='1819150'>E</span>
  <span m='1819390'>is the</span> <span m='1819800'>amount</span> <span
  m='1820000'>of</span> <span m='1820060'>space</span> <span m='1820380'>we
  need.</span> <span m='1822140'>And</span> <span m='1822330'>ideally,</span>
  <span m='1822980'>all</span> <span m='1823180'>our</span> <span
  m='1823390'>algorithms</span> <span m='1823880'>will</span> <span
  m='1824000'>run</span> <span m='1824200'>in</span> <span
  m='1824280'>this</span> <span m='1824460'>much</span> <span
  m='1824680'>time.</span> <span m='1825090'>Because</span> <span
  m='1826750'>that's</span> <span m='1826950'>what</span> <span
  m='1827040'>you</span> <span m='1827130'>need</span> <span
  m='1827420'>just</span> <span m='1827680'>to</span> <span
  m='1827760'>look</span> <span m='1827990'>at</span> <span
  m='1828080'>the</span> <span m='1828150'>graph.</span> </p><p><span
  m='1866710'>So</span> <span m='1867020'>let's</span> <span
  m='1867250'>do</span> <span m='1867370'>an</span> <span
  m='1867460'>actual</span> <span m='1867790'>algorithm,</span> <span
  m='1870214'>which</span> <span m='1870447'>is</span> <span
  m='1870680'>breadth-first</span> <span m='1871180'>search.</span> <span
  m='1874920'>So to</span> <span m='1875200'>the</span> <span
  m='1875330'>simplest</span> <span m='1875740'>algorithm</span> <span
  m='1876400'>you</span> <span m='1876580'>can</span> <span
  m='1876740'>think</span> <span m='1876970'>of</span> <span
  m='1877210'>in</span> <span m='1877510'>graphs.</span> <span
  m='1878420'>I've</span> <span m='1878640'>already</span> <span
  m='1878960'>outlined</span> <span m='1879370'>it</span> <span
  m='1879480'>several</span> <span m='1879750'>times.</span> <span
  m='1881090'>You</span> <span m='1881170'>start</span> <span
  m='1881450'>at</span> <span m='1881620'>some node.</span> <span
  m='1882640'>You</span> <span m='1882750'>look</span> <span
  m='1882930'>at</span> <span m='1882990'>all</span> <span
  m='1883170'>the</span> <span m='1883280'>nodes</span> <span m='1883530'>you
  can</span> <span m='1883710'>get</span> <span m='1883870'>to</span> <span
  m='1883990'>from</span> <span m='1884140'>there.</span> <span
  m='1884810'>You</span> <span m='1884930'>look</span> <span
  m='1885090'>at</span> <span m='1885160'>all</span> <span
  m='1885300'>the</span> <span m='1885430'>nodes</span> <span m='1885590'>you
  can</span> <span m='1885690'>get</span> <span m='1885950'>to</span> <span
  m='1886050'>from</span> <span m='1886210'>there.</span> <span
  m='1886860'>Keep</span> <span m='1887060'>going</span> <span
  m='1887650'>until</span> <span m='1887920'>you're</span> <span
  m='1888060'>done.</span> <span m='1889300'>So</span> <span
  m='1889340'>this</span> <span m='1889510'>is</span> <span
  m='1889610'>going</span> <span m='1889840'>to</span> <span
  m='1889970'>explore</span> <span m='1890760'>all</span> <span
  m='1891080'>of</span> <span m='1891200'>the</span> <span
  m='1891270'>vertices</span> <span m='1892000'>that</span> <span
  m='1892110'>are</span> <span m='1892210'>reachable</span> <span
  m='1893290'>from</span> <span m='1893690'>a</span> <span
  m='1893720'>node.</span> </p><p><span m='1896720'>The</span> <span
  m='1897060'>challenge--</span> <span m='1898470'>The</span> <span
  m='1898550'>one</span> <span m='1898760'>annoying</span> <span
  m='1899090'>thing</span> <span m='1899330'>about</span> <span
  m='1899590'>breadth-first</span> <span m='1900000'>search</span> <span
  m='1900340'>and</span> <span m='1900390'>why</span> <span
  m='1900550'>this</span> <span m='1900730'>is</span> <span
  m='1900840'>not</span> <span m='1901010'>trivial</span> <span
  m='1901520'>is</span> <span m='1901910'>that</span> <span
  m='1902180'>there</span> <span m='1902320'>can</span> <span
  m='1902470'>be</span> <span m='1902590'>some</span> <span
  m='1902860'>edges</span> <span m='1904190'>that</span> <span
  m='1904280'>go</span> <span m='1904520'>sort of</span> <span
  m='1904810'>backwards,</span> <span m='1906530'>like</span> <span
  m='1906650'>that,</span> <span m='1908970'>to</span> <span
  m='1909150'>some</span> <span m='1909400'>previous</span> <span
  m='1909810'>layer.</span> <span m='1912340'>Actually,</span> <span
  m='1912610'>that's</span> <span m='1912830'>not</span> <span
  m='1913010'>true,</span> <span m='1913280'>is</span> <span
  m='1913761'>it?</span> <span m='1918090'>This</span> <span
  m='1918300'>can't</span> <span m='1918500'>happen.</span> <span
  m='1919275'>You</span> <span m='1919550'>see</span> <span
  m='1919730'>why?</span> <span m='1922220'>Because</span> <span
  m='1922720'>if</span> <span m='1922990'>that</span> <span
  m='1923710'>edge</span> <span m='1923900'>existed,</span> <span
  m='1924500'>then</span> <span m='1924930'>from</span> <span
  m='1925170'>this</span> <span m='1925410'>node</span> <span
  m='1926280'>you'd</span> <span m='1926470'>be</span> <span
  m='1926660'>able</span> <span m='1927450'>to</span> <span
  m='1927550'>get</span> <span m='1927780'>here.</span> <span m='1928205'>So
  in</span> <span m='1928510'>an</span> <span m='1928600'>undirected</span>
  <span m='1929170'>graph,</span> <span m='1929440'>that</span> <span
  m='1929610'>can't</span> <span m='1929790'>happen.</span> <span
  m='1930180'>In</span> <span m='1930270'>a</span> <span
  m='1930360'>directed</span> <span m='1930800'>graph,</span> <span
  m='1931640'>you</span> <span m='1931770'>could</span> <span
  m='1931950'>conceivably</span> <span m='1932520'>have</span> <span
  m='1932710'>a</span> <span m='1932780'>back</span> <span
  m='1933060'>edge</span> <span m='1933240'>like</span> <span
  m='1933410'>that.</span> <span m='1933660'>You'd</span> <span
  m='1933750'>have</span> <span m='1933930'>to</span> <span
  m='1934070'>realize,</span> <span m='1935060'>oh,</span> <span
  m='1935250'>that's</span> <span m='1935490'>a</span> <span
  m='1935540'>vertex</span> <span m='1935950'>I've</span> <span
  m='1936070'>already</span> <span m='1936270'>seen,</span> <span
  m='1936930'>I</span> <span m='1937060'>don't</span> <span
  m='1937300'>want</span> <span m='1937430'>to</span> <span
  m='1937490'>put</span> <span m='1937680'>it</span> <span
  m='1937780'>here,</span> <span m='1938920'>even</span> <span
  m='1939060'>though</span> <span m='1939210'>it's</span> <span
  m='1939450'>something</span> <span m='1939800'>I</span> <span
  m='1939850'>can</span> <span m='1940010'>reach</span> <span
  m='1940330'>from</span> <span m='1940550'>this</span> <span
  m='1940740'>node,</span> <span m='1941270'>because</span> <span
  m='1941470'>I've</span> <span m='1941620'>already</span> <span
  m='1941880'>been</span> <span m='1942100'>there.</span> <span
  m='1943350'>We've</span> <span m='1943430'>got</span> <span
  m='1943570'>to</span> <span m='1943640'>worry</span> <span
  m='1943850'>about</span> <span m='1944080'>things</span> <span
  m='1944280'>like</span> <span m='1944420'>that.</span> <span
  m='1947260'>That's,</span> <span m='1947680'>I</span> <span
  m='1947790'>guess,</span> <span m='1947990'>the</span> <span
  m='1948070'>main</span> <span m='1948260'>thing</span> <span
  m='1948826'>to</span> <span m='1949192'>worry</span> <span
  m='1949560'>about.</span> </p><p><span m='1954620'>So</span> <span
  m='1954730'>our</span> <span m='1954880'>goal</span> <span
  m='1955150'>is</span> <span m='1955260'>to</span> <span
  m='1955360'>visit</span> <span m='1955750'>all</span> <span
  m='1956150'>the</span> <span m='1956230'>nodes--</span> <span
  m='1960950'>the</span> <span m='1961070'>vertices--</span> <span
  m='1962240'>reachable</span> <span m='1963890'>from</span> <span
  m='1965940'>given</span> <span m='1966300'>node,</span> <span
  m='1967160'>s.</span> <span m='1971470'>We</span> <span
  m='1971700'>want</span> <span m='1971950'>to</span> <span
  m='1972040'>achieve</span> <span m='1973780'>V</span> <span m='1974010'>plus
  E</span> <span m='1974380'>time.</span> <span m='1980190'>And</span> <span
  m='1980370'>the</span> <span m='1980490'>idea</span> <span
  m='1980830'>is</span> <span m='1981100'>to</span> <span
  m='1989510'>look</span> <span m='1989750'>at</span> <span
  m='1989820'>the</span> <span m='1989910'>nodes</span> <span
  m='1990320'>that</span> <span m='1990440'>are</span> <span
  m='1990530'>reachable</span> <span m='1992400'>first</span> <span
  m='1992760'>in</span> <span m='1993010'>zero</span> <span
  m='1993390'>moves.</span> <span m='1995780'>Zero</span> <span
  m='1996060'>moves.</span> <span m='1997040'>That's</span> <span
  m='1997360'>s.</span> <span m='2000390'>Then</span> <span
  m='2000830'>in</span> <span m='2001020'>one</span> <span
  m='2001310'>move.</span> <span m='2003480'>Well</span> <span
  m='2003930'>that's</span> <span m='2005590'>everything</span> <span
  m='2005950'>you</span> <span m='2006080'>can</span> <span
  m='2006220'>reach</span> <span m='2006420'>from</span> <span
  m='2006600'>s</span> <span m='2006980'>in</span> <span m='2007090'>one</span>
  <span m='2007310'>step.</span> <span m='2007650'>That's</span> <span
  m='2007890'>adjacency</span> <span m='2008500'>of</span> <span
  m='2008580'>s.</span> <span m='2009430'>And</span> <span
  m='2009530'>then</span> <span m='2009900'>two</span> <span
  m='2010090'>moves,</span> <span m='2011065'>and</span> <span
  m='2011410'>three</span> <span m='2011610'>moves,</span> <span
  m='2012510'>and</span> <span m='2012630'>so</span> <span m='2012810'>on</span>
  <span m='2013050'>until</span> <span m='2014040'>we</span> <span
  m='2014160'>run</span> <span m='2014380'>out</span> <span
  m='2014490'>of</span> <span m='2014610'>graph.</span> <span
  m='2016910'>But</span> <span m='2017030'>we</span> <span
  m='2017160'>need</span> <span m='2017370'>to</span> <span
  m='2017480'>be</span> <span m='2017630'>careful</span> <span
  m='2021990'>to</span> <span m='2022290'>avoid</span> <span
  m='2026330'>duplicates.</span> <span m='2027800'>We</span> <span
  m='2027910'>want</span> <span m='2028070'>to</span> <span
  m='2028110'>avoid</span> <span m='2029020'>revisiting</span> <span
  m='2029660'>vertices</span> <span m='2031120'>for</span> <span
  m='2031280'>a</span> <span m='2031320'>couple of</span> <span
  m='2031610'>reasons.</span> <span m='2032090'>One</span> <span
  m='2032210'>is</span> <span m='2032340'>if</span> <span m='2032490'>we
  didn't,</span> <span m='2032795'>we</span> <span m='2033100'>would</span>
  <span m='2033280'>spend</span> <span m='2033530'>infinite</span> <span
  m='2033980'>time.</span> <span m='2035110'>Because</span> <span
  m='2035380'>we'd</span> <span m='2035650'>just</span> <span
  m='2036070'>go</span> <span m='2036310'>there</span> <span
  m='2036610'>and</span> <span m='2036710'>come</span> <span
  m='2036870'>back,</span> <span m='2037200'>and</span> <span
  m='2037300'>go</span> <span m='2037460'>there</span> <span
  m='2037630'>and</span> <span m='2037700'>come</span> <span
  m='2037860'>back.</span> <span m='2038070'>As</span> <span
  m='2038210'>long</span> <span m='2038390'>as</span> <span
  m='2038450'>there's</span> <span m='2038600'>at</span> <span
  m='2038650'>least</span> <span m='2038890'>one</span> <span
  m='2039040'>cycle,</span> <span m='2039740'>you're</span> <span
  m='2039830'>going</span> <span m='2039920'>to</span> <span
  m='2039980'>keep</span> <span m='2040140'>going</span> <span
  m='2040380'>around</span> <span m='2040530'>the</span> <span
  m='2040590'>cycle</span> <span m='2040920'>forever</span> <span
  m='2041320'>and</span> <span m='2041400'>ever</span> <span
  m='2042020'>if</span> <span m='2042160'>you</span> <span
  m='2042250'>don't</span> <span m='2042440'>try</span> <span
  m='2042600'>to</span> <span m='2042680'>avoid</span> <span
  m='2042960'>duplicates.</span> </p><p><span m='2045880'>So</span> <span
  m='2046100'>let</span> <span m='2046220'>me</span> <span
  m='2046360'>write</span> <span m='2046510'>down</span> <span
  m='2046680'>some</span> <span m='2046840'>code</span> <span
  m='2047110'>for</span> <span m='2047200'>this</span> <span
  m='2047350'>algorithm.</span> <span m='2047790'>It's</span> <span
  m='2047930'>pretty</span> <span m='2048159'>straightforward.</span> <span
  m='2049580'>So</span> <span m='2049750'>straightforward,</span> <span
  m='2050389'>we</span> <span m='2050409'>can</span> <span m='2050550'>be</span>
  <span m='2050820'>completely</span> <span m='2051199'>explicit</span> <span
  m='2052190'>and</span> <span m='2052389'>write</span> <span
  m='2053409'>[INAUDIBLE]</span> <span m='2053830'>code.</span> <span
  m='2059190'>There's</span> <span m='2059389'>a</span> <span
  m='2059620'>few</span> <span m='2059760'>different</span> <span
  m='2060000'>ways</span> <span m='2060199'>to</span> <span
  m='2060280'>implement</span> <span m='2060690'>this</span> <span
  m='2060850'>algorithm.</span> <span m='2061199'>I'll</span> <span
  m='2061429'>show</span> <span m='2061600'>you</span> <span
  m='2061820'>my</span> <span m='2062520'>favorite.</span> <span
  m='2063780'>The</span> <span m='2064210'>textbook</span> <span
  m='2064690'>has</span> <span m='2064900'>a</span> <span
  m='2064940'>different</span> <span m='2065260'>favorite.</span> <span
  m='2082040'>I'm</span> <span m='2082170'>going</span> <span
  m='2082290'>to</span> <span m='2082380'>write</span> <span
  m='2082600'>in</span> <span m='2083310'>pure</span> <span
  m='2083739'>Python,</span> <span m='2084044'>I</span> <span
  m='2084350'>believe.</span> </p><p><span m='2157370'>Almost</span> <span
  m='2157720'>done.</span> <span m='2190650'>I</span> <span
  m='2190670'>think</span> <span m='2190850'>I</span> <span
  m='2190930'>got</span> <span m='2191250'>that</span> <span
  m='2191740'>right.</span> <span m='2193160'>So</span> <span
  m='2193320'>this</span> <span m='2193510'>is</span> <span
  m='2193640'>at</span> <span m='2193790'>the</span> <span
  m='2193930'>end</span> <span m='2194190'>of</span> <span
  m='2194290'>the</span> <span m='2194390'>while-loop.</span> <span
  m='2196594'>And</span> <span m='2197050'>at that point</span> <span
  m='2197510'>we</span> <span m='2197710'>should</span> <span
  m='2197910'>be</span> <span m='2198010'>done.</span> <span
  m='2199330'>We</span> <span m='2199410'>can</span> <span m='2199520'>do</span>
  <span m='2199610'>an</span> <span m='2199700'>actual</span> <span
  m='2199950'>example,</span> <span m='2200380'>maybe.</span> </p><p><span
  m='2236610'>I'm</span> <span m='2236880'>going</span> <span
  m='2237010'>to</span> <span m='2237090'>do</span> <span m='2237220'>it</span>
  <span m='2237300'>on</span> <span m='2238480'>an</span> <span
  m='2238610'>undirected</span> <span m='2239170'>graph,</span> <span
  m='2239560'>but</span> <span m='2239680'>this</span> <span
  m='2239860'>algorithm</span> <span m='2240260'>works</span> <span
  m='2240500'>just</span> <span m='2240730'>as</span> <span
  m='2240820'>well</span> <span m='2241220'>on directed</span> <span
  m='2242020'>and</span> <span m='2242310'>undirected</span> <span
  m='2242670'>graphs.</span> <span m='2248330'>There's</span> <span
  m='2248600'>an</span> <span m='2248690'>undirected</span> <span
  m='2249180'>graph.</span> <span m='2250950'>We're</span> <span
  m='2251140'>given</span> <span m='2251610'>some</span> <span
  m='2251910'>start</span> <span m='2252240'>vertex,</span> <span
  m='2252680'>s,</span> <span m='2254890'>and</span> <span
  m='2255260'>we're</span> <span m='2255400'>given</span> <span
  m='2255960'>the</span> <span m='2256060'>graph</span> <span
  m='2256770'>by</span> <span m='2257220'>being</span> <span
  m='2257430'>given</span> <span m='2257980'>the</span> <span
  m='2258160'>adjacency</span> <span m='2258720'>lists.</span> <span
  m='2259850'>So</span> <span m='2260190'>you</span> <span
  m='2260350'>could</span> <span m='2260490'>iterate</span> <span
  m='2260790'>over</span> <span m='2260940'>the</span> <span
  m='2261040'>vertices</span> <span m='2261490'>of</span> <span
  m='2261560'>that</span> <span m='2261780'>thing.</span> <span
  m='2262600'>Given</span> <span m='2262840'>a</span> <span
  m='2262870'>vertex,</span> <span m='2263300'>you</span> <span
  m='2263430'>can</span> <span m='2263580'>list</span> <span
  m='2263830'>all</span> <span m='2263960'>the</span> <span
  m='2264090'>edges</span> <span m='2264420'>you</span> <span
  m='2264580'>can</span> <span m='2264710'>reach</span> <span
  m='2265040'>in</span> <span m='2265130'>one</span> <span
  m='2265340'>step.</span> <span m='2267250'>And</span> <span
  m='2267370'>then</span> <span m='2267600'>the</span> <span m='2267690'>top
  of</span> <span m='2267940'>the</span> <span m='2268070'>algorithm's</span>
  <span m='2268570'>just</span> <span m='2268690'>some</span> <span
  m='2268910'>initialization.</span> <span m='2270400'>The</span> <span
  m='2270500'>basic</span> <span m='2270930'>structure--</span> <span
  m='2271980'>We</span> <span m='2272080'>have</span> <span
  m='2272200'>this</span> <span m='2272370'>thing</span> <span
  m='2272570'>called</span> <span m='2272790'>the</span> <span
  m='2272870'>frontier,</span> <span m='2273460'>which</span> <span
  m='2273660'>is</span> <span m='2274990'>what</span> <span
  m='2275340'>we</span> <span m='2275510'>just</span> <span
  m='2275890'>reached</span> <span m='2276200'>on</span> <span
  m='2276360'>the</span> <span m='2276440'>previous</span> <span
  m='2276950'>level.</span> <span m='2278920'>I</span> <span
  m='2279300'>think</span> <span m='2279720'>that's</span> <span
  m='2280230'>going</span> <span m='2280380'>to</span> <span
  m='2280450'>be</span> <span m='2281440'>level</span> <span
  m='2283540'>i</span> <span m='2283720'>minus</span> <span
  m='2284170'>one.</span> <span m='2284480'>Just</span> <span m='2284740'>don't
  want</span> <span m='2284940'>to make an</span> <span m='2285350'>index</span>
  <span m='2285970'>error.</span> <span m='2288930'>These</span> <span
  m='2289110'>are</span> <span m='2289170'>going</span> <span
  m='2289290'>to</span> <span m='2289340'>be</span> <span m='2289500'>all</span>
  <span m='2289830'>the</span> <span m='2289930'>things</span> <span
  m='2290180'>you</span> <span m='2290280'>can</span> <span
  m='2290410'>reach</span> <span m='2291110'>using</span> <span
  m='2291920'>exactly</span> <span m='2292620'>i</span> <span
  m='2292790'>minus</span> <span m='2293150'>one</span> <span
  m='2293750'>moves.</span> <span m='2294970'>And</span> <span
  m='2295180'>then</span> <span m='2295380'>next</span> <span
  m='2295850'>is</span> <span m='2295960'>going</span> <span
  m='2296100'>to</span> <span m='2296170'>be</span> <span m='2296440'>all</span>
  <span m='2296670'>the</span> <span m='2296760'>things</span> <span
  m='2297020'>you</span> <span m='2297150'>can</span> <span
  m='2297290'>reach</span> <span m='2298130'>in</span> <span
  m='2298270'>i</span> <span m='2298480'>moves.</span> </p><p><span
  m='2301310'>So</span> <span m='2301510'>to</span> <span m='2301590'>get</span>
  <span m='2301790'>started,</span> <span m='2302850'>what</span> <span
  m='2303060'>we</span> <span m='2303190'>know</span> <span
  m='2303540'>is</span> <span m='2304010'>s.</span> <span m='2304976'>s</span>
  <span m='2305460'>is</span> <span m='2305590'>what</span> <span
  m='2305740'>you</span> <span m='2305890'>can</span> <span
  m='2306030'>reach</span> <span m='2306450'>in</span> <span
  m='2306670'>zero</span> <span m='2307030'>moves.</span> <span
  m='2308580'>So</span> <span m='2309020'>we</span> <span m='2309150'>set</span>
  <span m='2309860'>the</span> <span m='2309970'>level</span> <span
  m='2310420'>of</span> <span m='2310520'>s</span> <span m='2310770'>to</span>
  <span m='2310890'>be</span> <span m='2311030'>zero.</span> <span
  m='2311540'>That's</span> <span m='2311790'>the</span> <span
  m='2311870'>first</span> <span m='2312200'>line</span> <span
  m='2312920'>of</span> <span m='2313030'>the</span> <span
  m='2313120'>code.</span> <span m='2313760'>There's</span> <span
  m='2313890'>this</span> <span m='2314030'>other</span> <span
  m='2314200'>thing</span> <span m='2314380'>called</span> <span
  m='2314560'>the</span> <span m='2314620'>parent.</span> <span
  m='2315010'>We'll</span> <span m='2315120'>worry</span> <span
  m='2315290'>about</span> <span m='2315530'>that</span> <span
  m='2315720'>later.</span> <span m='2316650'>It's</span> <span
  m='2316790'>optional.</span> <span m='2317720'>It</span> <span
  m='2317940'>gives</span> <span m='2318140'>us</span> <span
  m='2318250'>some</span> <span m='2318520'>other</span> <span
  m='2318770'>fun</span> <span m='2318970'>structure.</span> <span
  m='2320700'>We</span> <span m='2320870'>set</span> <span m='2321160'>i</span>
  <span m='2321280'>to</span> <span m='2321360'>be</span> <span
  m='2321660'>one</span> <span m='2322090'>because</span> <span
  m='2322600'>we</span> <span m='2322730'>just</span> <span
  m='2323120'>finished</span> <span m='2323480'>level</span> <span
  m='2323810'>zero.</span> <span m='2324950'>Frontier</span> <span
  m='2326400'>of</span> <span m='2327150'>what</span> <span
  m='2327390'>you</span> <span m='2327480'>can</span> <span
  m='2327600'>reach</span> <span m='2327840'>in</span> <span m='2327900'>level
  zero</span> <span m='2328130'>is</span> <span m='2328500'>just</span> <span
  m='2328800'>s</span> <span m='2329070'>itself.</span> <span
  m='2329600'>So</span> <span m='2329910'>we're</span> <span
  m='2329950'>going</span> <span m='2330070'>to</span> <span
  m='2330150'>put</span> <span m='2330310'>that</span> <span m='2330380'>on
  the</span> <span m='2330775'>list.</span> <span m='2331560'>That</span> <span
  m='2331760'>is</span> <span m='2331870'>level</span> <span
  m='2332090'>zero.</span> <span m='2332490'>i</span> <span
  m='2332650'>equals</span> <span m='2332870'>one</span> <span
  m='2333240'>So</span> <span m='2333400'>one</span> <span
  m='2333580'>minus</span> <span m='2333830'>one</span> <span
  m='2334000'>is</span> <span m='2334120'>zero.</span> <span
  m='2334870'>All</span> <span m='2335070'>good.</span> <span
  m='2336360'>And</span> <span m='2336460'>then</span> <span
  m='2336630'>we're</span> <span m='2336750'>going</span> <span
  m='2336950'>to</span> <span m='2337040'>iterate.</span> <span
  m='2337810'>And</span> <span m='2337950'>this</span> <span
  m='2338100'>is</span> <span m='2338200'>going</span> <span
  m='2338340'>to</span> <span m='2338410'>be</span> <span
  m='2338540'>looking</span> <span m='2338890'>at--</span> <span
  m='2339540'>The</span> <span m='2340070'>end</span> <span
  m='2340250'>of</span> <span m='2340300'>the</span> <span
  m='2340400'>iteration</span> <span m='2340820'>is</span> <span
  m='2340900'>to</span> <span m='2340990'>increment</span> <span
  m='2341470'>i.</span> <span m='2342356'>So</span> <span m='2342800'>you</span>
  <span m='2342860'>could</span> <span m='2342990'>also</span> <span
  m='2343200'>call</span> <span m='2343370'>this</span> <span
  m='2343480'>a</span> <span m='2343540'>for-loop</span> <span
  m='2343930'>except</span> <span m='2344210'>we</span> <span
  m='2344280'>don't</span> <span m='2344450'>know</span> <span
  m='2344570'>when</span> <span m='2344700'>it's</span> <span
  m='2344840'>going</span> <span m='2344940'>to</span> <span
  m='2344990'>end.</span> <span m='2345430'>So</span> <span
  m='2345720'>it's</span> <span m='2346390'>easier</span> <span
  m='2346690'>to</span> <span m='2346750'>think</span> <span
  m='2346960'>of</span> <span m='2347080'>i</span> <span
  m='2348480'>incrementing</span> <span m='2349020'>each</span> <span
  m='2349180'>step</span> <span m='2349890'>not</span> <span
  m='2350170'>knowing</span> <span m='2350400'>when</span> <span
  m='2350490'>we're</span> <span m='2350630'>going</span> <span
  m='2350740'>to</span> <span m='2350800'>stop.</span> <span
  m='2351150'>We're</span> <span m='2351240'>going</span> <span
  m='2351370'>to</span> <span m='2351430'>stop</span> <span
  m='2351810'>whenever</span> <span m='2352090'>we</span> <span
  m='2352180'>run</span> <span m='2352390'>out</span> <span
  m='2352480'>of</span> <span m='2352570'>nodes.</span> <span
  m='2353000'>So</span> <span m='2353190'>whenever</span> <span
  m='2354050'>frontier is</span> <span m='2354550'>a</span> <span
  m='2354610'>non-empty</span> <span m='2355130'>list.</span> </p><p><span
  m='2356850'>the</span> <span m='2357010'>bulk</span> <span
  m='2357330'>of</span> <span m='2357390'>the</span> <span
  m='2357480'>work</span> <span m='2357690'>here is</span> <span
  m='2357930'>computing</span> <span m='2358370'>what</span> <span
  m='2358590'>the</span> <span m='2358670'>next</span> <span
  m='2358990'>level</span> <span m='2359330'>is.</span> <span
  m='2359520'>That's</span> <span m='2359760'>called</span> <span
  m='2360010'>next.</span> <span m='2360860'>It's</span> <span
  m='2360990'>going</span> <span m='2361100'>to</span> <span
  m='2361150'>be</span> <span m='2361280'>level</span> <span
  m='2361500'>i.</span> <span m='2362330'>We</span> <span m='2362430'>do</span>
  <span m='2362540'>some</span> <span m='2362710'>computation.</span> <span
  m='2363310'>Eventually</span> <span m='2363720'>we</span> <span
  m='2363850'>have</span> <span m='2364610'>what's</span> <span
  m='2364990'>on</span> <span m='2365290'>the</span> <span
  m='2365440'>next</span> <span m='2365680'>level.</span> <span
  m='2366020'>Then</span> <span m='2366090'>we</span> <span
  m='2366200'>set</span> <span m='2366480'>frontier</span> <span
  m='2366870'>next.</span> <span m='2368240'>Because</span> <span
  m='2368550'>that's</span> <span m='2368820'>our</span> <span
  m='2368960'>new</span> <span m='2369100'>level.</span> <span
  m='2369380'>We</span> <span m='2369510'>increment</span> <span
  m='2369940'>i,</span> <span m='2370650'>and</span> <span
  m='2370960'>then</span> <span m='2371140'>invariant</span> <span
  m='2371820'>of</span> <span m='2372290'>frontier</span> <span
  m='2372740'>being</span> <span m='2372930'>level</span> <span
  m='2373180'>i</span> <span m='2373250'>minus</span> <span m='2373570'>1</span>
  <span m='2374130'>is</span> <span m='2374350'>preserved.</span> <span
  m='2375730'>Right</span> <span m='2375860'>after</span> <span
  m='2376080'>here.</span> <span m='2376350'>And</span> <span
  m='2376430'>then</span> <span m='2376760'>we</span> <span
  m='2376970'>just</span> <span m='2377160'>keep</span> <span
  m='2377320'>going</span> <span m='2377660'>till we</span> <span
  m='2377880'>run</span> <span m='2378090'>out</span> <span
  m='2378180'>of</span> <span m='2378290'>nodes.</span> </p><p><span
  m='2380100'>How</span> <span m='2380640'>do</span> <span m='2380760'>we</span>
  <span m='2381080'>compute</span> <span m='2381430'>next?</span> <span
  m='2382230'>Well,</span> <span m='2382390'>we</span> <span
  m='2382480'>look</span> <span m='2382660'>at</span> <span
  m='2382720'>every</span> <span m='2382970'>node</span> <span
  m='2383180'>in</span> <span m='2383260'>the</span> <span
  m='2383350'>frontier,</span> <span m='2384210'>and</span> <span
  m='2384370'>we</span> <span m='2384510'>look</span> <span
  m='2384650'>at</span> <span m='2384700'>all</span> <span
  m='2384930'>the</span> <span m='2385020'>nodes</span> <span
  m='2385270'>you</span> <span m='2385390'>can</span> <span
  m='2385510'>reach</span> <span m='2385790'>from</span> <span
  m='2385940'>those</span> <span m='2386150'>nodes.</span> <span
  m='2387660'>So</span> <span m='2388000'>every</span> <span
  m='2388220'>node,</span> <span m='2388410'>u,</span> <span
  m='2388540'>in</span> <span m='2388600'>the</span> <span
  m='2388690'>frontier</span> <span m='2389120'>and then</span> <span
  m='2389270'>we</span> <span m='2389380'>look</span> <span
  m='2389640'>at--</span> <span m='2390730'>So</span> <span
  m='2390900'>this</span> <span m='2391150'>means</span> <span m='2391400'>there
  is</span> <span m='2391590'>an</span> <span m='2391750'>edge</span> <span
  m='2392600'>from</span> <span m='2392910'>u</span> <span m='2393110'>to</span>
  <span m='2393190'>v</span> <span m='2394652'>through</span> <span
  m='2395040'>the</span> <span m='2395110'>picture.</span> <span
  m='2395660'>We</span> <span m='2395930'>look</span> <span
  m='2396160'>at</span> <span m='2396240'>all</span> <span
  m='2396530'>the</span> <span m='2396670'>edges</span> <span
  m='2397100'>from</span> <span m='2397570'>all</span> <span
  m='2397780'>the</span> <span m='2397870'>frontier</span> <span
  m='2398280'>nodes</span> <span m='2398520'>where</span> <span
  m='2398700'>you</span> <span m='2398850'>can</span> <span
  m='2399020'>go.</span> </p><p><span m='2399870'>And</span> <span
  m='2400040'>then</span> <span m='2400250'>the</span> <span
  m='2400340'>key</span> <span m='2400570'>thing</span> <span
  m='2400750'>is</span> <span m='2400850'>we</span> <span
  m='2400970'>check</span> <span m='2401220'>for</span> <span
  m='2401320'>duplicates.</span> <span m='2402330'>We</span> <span
  m='2402420'>see,</span> <span m='2402640'>have</span> <span
  m='2402950'>we</span> <span m='2403060'>seen</span> <span
  m='2403290'>this</span> <span m='2403470'>node</span> <span
  m='2403690'>before?</span> <span m='2404830'>If</span> <span
  m='2405060'>we</span> <span m='2405365'>have,</span> <span m='2405670'>we
  would</span> <span m='2405830'>have</span> <span m='2406000'>set</span> <span
  m='2406340'>it's</span> <span m='2406500'>level</span> <span
  m='2406850'>to</span> <span m='2406950'>be</span> <span
  m='2407110'>something.</span> <span m='2408270'>If</span> <span
  m='2408430'>we</span> <span m='2408530'>haven't</span> <span
  m='2408860'>seen</span> <span m='2409080'>it,</span> <span
  m='2409270'>it</span> <span m='2409410'>will</span> <span
  m='2409560'>not</span> <span m='2409870'>be</span> <span m='2410110'>in</span>
  <span m='2410260'>the</span> <span m='2410370'>level</span> <span
  m='2411040'>hash</span> <span m='2411310'>table</span> <span
  m='2412235'>or</span> <span m='2412600'>the</span> <span
  m='2412740'>level</span> <span m='2413020'>dictionary.</span> <span
  m='2414160'>And</span> <span m='2414510'>so</span> <span m='2414750'>if</span>
  <span m='2414840'>it's</span> <span m='2414960'>not</span> <span
  m='2415160'>in</span> <span m='2415290'>there,</span> <span
  m='2416570'>we'll</span> <span m='2416800'>put</span> <span
  m='2417000'>it</span> <span m='2417100'>in</span> <span
  m='2417250'>there</span> <span m='2418350'>and</span> <span
  m='2418560'>add</span> <span m='2418780'>it</span> <span m='2418930'>to</span>
  <span m='2419040'>the</span> <span m='2419150'>next</span> <span
  m='2419430'>layer.</span> <span m='2420640'>So</span> <span
  m='2420830'>that's</span> <span m='2421050'>how</span> <span
  m='2421130'>you</span> <span m='2421400'>avoid</span> <span
  m='2421720'>duplicates.</span> <span m='2422860'>You</span> <span
  m='2422960'>set</span> <span m='2423150'>its</span> <span
  m='2423290'>level</span> <span m='2423860'>to</span> <span
  m='2423980'>make</span> <span m='2424120'>sure</span> <span
  m='2424250'>you</span> <span m='2424310'>will</span> <span
  m='2424540'>never</span> <span m='2424790'>visit it</span> <span
  m='2425150'>again,</span> <span m='2425890'>you</span> <span
  m='2426010'>add</span> <span m='2426230'>it</span> <span m='2426360'>to</span>
  <span m='2426460'>the</span> <span m='2426560'>next</span> <span
  m='2426820'>frontier,</span> <span m='2427550'>you</span> <span
  m='2427940'>iterate,</span> <span m='2428430'>you're</span> <span
  m='2428570'>done.</span> <span m='2431450'>This</span> <span
  m='2431600'>is</span> <span m='2431720'>one</span> <span
  m='2431970'>version</span> <span m='2432340'>of</span> <span
  m='2432440'>what</span> <span m='2432590'>you</span> <span
  m='2432700'>might</span> <span m='2432900'>call a</span> <span
  m='2433160'>breadth-first</span> <span m='2433550'>search.</span> <span
  m='2434240'>And it</span> <span m='2434530'>achieves</span> <span
  m='2434980'>this</span> <span m='2435190'>goal,</span> <span
  m='2435920'>visiting</span> <span m='2436270'>all</span> <span
  m='2436430'>the</span> <span m='2436510'>nodes</span> <span
  m='2436770'>reachable</span> <span m='2437140'>from</span> <span
  m='2437330'>s,</span> <span m='2438250'>in</span> <span
  m='2438430'>linear</span> <span m='2438720'>time.</span> <span
  m='2439220'>Let's</span> <span m='2439430'>see</span> <span
  m='2439570'>how</span> <span m='2439750'>it</span> <span
  m='2439790'>works</span> <span m='2440050'>on</span> <span
  m='2440170'>a</span> <span m='2440230'>real</span> <span
  m='2440440'>example.</span> </p><p><span m='2441640'>So</span> <span
  m='2441850'>first</span> <span m='2442140'>frontier</span> <span
  m='2443000'>is</span> <span m='2443170'>this</span> <span
  m='2443380'>thing.</span> <span m='2446670'>Frontier</span> <span
  m='2447130'>just</span> <span m='2447340'>has</span> <span
  m='2447610'>the</span> <span m='2447660'>node</span> <span
  m='2447850'>s,</span> <span m='2448130'>so</span> <span m='2448240'>we</span>
  <span m='2448350'>just</span> <span m='2448610'>look</span> <span
  m='2448760'>at</span> <span m='2448830'>s,</span> <span m='2449120'>and</span>
  <span m='2449200'>we</span> <span m='2449290'>look</span> <span
  m='2449510'>at</span> <span m='2449560'>all</span> <span
  m='2449760'>the</span> <span m='2449900'>edges</span> <span
  m='2450160'>from</span> <span m='2450270'>s.</span> <span
  m='2450930'>We</span> <span m='2451080'>get a</span> <span
  m='2451300'>and</span> <span m='2451550'>x.</span> <span m='2452440'>So</span>
  <span m='2452600'>those</span> <span m='2452910'>get</span> <span
  m='2453130'>added</span> <span m='2453560'>to</span> <span
  m='2453790'>the</span> <span m='2453900'>next</span> <span
  m='2454160'>frontier.</span> <span m='2456460'>Maybe</span> <span
  m='2456730'>before</span> <span m='2457050'>I</span> <span
  m='2457100'>go</span> <span m='2457250'>too</span> <span
  m='2457450'>far,</span> <span m='2459330'>let</span> <span
  m='2459650'>me</span> <span m='2460270'>switch</span> <span
  m='2460670'>colors.</span> <span m='2465700'>Multimedia</span> <span
  m='2466370'>here.</span> <span m='2468080'>So</span> <span
  m='2468290'>here's</span> <span m='2469600'>level</span> <span
  m='2470140'>one.</span> <span m='2472576'>All</span> <span
  m='2473030'>of</span> <span m='2473340'>these</span> <span
  m='2473550'>guys,</span> <span m='2475170'>we're</span> <span
  m='2475480'>going</span> <span m='2475560'>to</span> <span
  m='2475640'>set</span> <span m='2475870'>their</span> <span
  m='2476000'>level</span> <span m='2476320'>to</span> <span
  m='2476450'>one.</span> <span m='2477270'>They</span> <span
  m='2477370'>can</span> <span m='2477500'>be</span> <span
  m='2477640'>reached</span> <span m='2477920'>in</span> <span
  m='2478020'>one</span> <span m='2478240'>step.</span> <span
  m='2479180'>That's</span> <span m='2479320'>pretty</span> <span
  m='2479490'>clear.</span> <span m='2479710'>So</span> <span
  m='2479840'>now</span> <span m='2480050'>frontier</span> <span m='2480560'>is
  a</span> <span m='2480740'>and</span> <span m='2481090'>x.</span> <span
  m='2482570'>That's</span> <span m='2482860'>what</span> <span
  m='2483520'>next</span> <span m='2483870'>becomes.</span> <span
  m='2484380'>Then</span> <span m='2484520'>frontier</span> <span
  m='2484880'>becomes</span> <span m='2485270'>next.</span> <span
  m='2486240'>And</span> <span m='2486380'>so</span> <span m='2486490'>we</span>
  <span m='2486590'>look</span> <span m='2486760'>at</span> <span
  m='2486800'>all</span> <span m='2487000'>the</span> <span
  m='2487120'>edges</span> <span m='2487390'>from</span> <span
  m='2487570'>a.</span> <span m='2488510'>That's</span> <span
  m='2488690'>going</span> <span m='2488800'>to</span> <span
  m='2488860'>be</span> <span m='2489120'>s</span> <span m='2489710'>and</span>
  <span m='2489910'>z.</span> <span m='2491110'>s,</span> <span
  m='2491750'>we've</span> <span m='2491960'>already</span> <span
  m='2492210'>looked</span> <span m='2492460'>at,</span> <span
  m='2492590'>it</span> <span m='2492670'>already</span> <span
  m='2492870'>has</span> <span m='2493060'>a</span> <span
  m='2493110'>level</span> <span m='2493420'>set,</span> <span
  m='2493730'>so</span> <span m='2493850'>we</span> <span
  m='2493980'>ignore</span> <span m='2494270'>that.</span> <span
  m='2495200'>So</span> <span m='2495260'>we</span> <span
  m='2495360'>look</span> <span m='2495540'>at</span> <span
  m='2495630'>z.</span> <span m='2495880'>Z</span> <span m='2496130'>does</span>
  <span m='2496290'>not</span> <span m='2496500'>have</span> <span
  m='2496690'>a</span> <span m='2496750'>level</span> <span
  m='2497110'>indicated</span> <span m='2497550'>here,</span> <span
  m='2498200'>so</span> <span m='2498380'>we're</span> <span
  m='2498500'>going</span> <span m='2498600'>to</span> <span
  m='2498670'>set</span> <span m='2498880'>it</span> <span m='2499070'>to</span>
  <span m='2499560'>i</span> <span m='2499800'>which</span> <span
  m='2499990'>happens</span> <span m='2500300'>to</span> <span
  m='2500370'>be</span> <span m='2500550'>two</span> <span m='2500840'>at</span>
  <span m='2500940'>this</span> <span m='2501110'>point.</span> <span
  m='2502340'>And</span> <span m='2502420'>we</span> <span
  m='2502500'>look</span> <span m='2502670'>at</span> <span
  m='2502740'>x.</span> <span m='2503200'>It</span> <span m='2503290'>has</span>
  <span m='2503480'>neighbors</span> <span m='2503820'>s,</span> <span
  m='2504166'>d,</span> <span m='2504512'>and</span> <span m='2504860'>c.</span>
  <span m='2505160'>We</span> <span m='2505260'>look</span> <span
  m='2505450'>at</span> <span m='2505590'>s</span> <span
  m='2505850'>again.</span> <span m='2506330'>We say, oh,</span> <span
  m='2506810'>we've</span> <span m='2507010'>already</span> <span
  m='2507200'>seen</span> <span m='2507410'>that</span> <span
  m='2507660'>yet</span> <span m='2507870'>again.</span> </p><p><span
  m='2508680'>So</span> <span m='2509070'>we're</span> <span
  m='2509200'>worried</span> <span m='2509460'>about</span> <span
  m='2509720'>this</span> <span m='2509870'>taking</span> <span
  m='2510150'>a</span> <span m='2510200'>lot of</span> <span
  m='2510450'>time</span> <span m='2510800'>because</span> <span
  m='2510890'>we</span> <span m='2510980'>look</span> <span
  m='2511150'>at</span> <span m='2511240'>s</span> <span
  m='2511655'>three</span> <span m='2512070'>times</span> <span
  m='2512440'>in</span> <span m='2512570'>total.</span> <span
  m='2514090'>Then</span> <span m='2514480'>we</span> <span
  m='2515210'>look</span> <span m='2515400'>at</span> <span
  m='2515490'>d.</span> <span m='2516290'>d</span> <span
  m='2516690'>hasn't</span> <span m='2516990'>been</span> <span
  m='2517120'>set,</span> <span m='2517360'>so</span> <span
  m='2517500'>we</span> <span m='2517610'>set</span> <span m='2517780'>it
  to</span> <span m='2517890'>two.</span> <span m='2518240'>c</span> <span
  m='2518510'>hasn't</span> <span m='2518630'>been</span> <span
  m='2518710'>set,</span> <span m='2519240'>so</span> <span m='2519440'>we set
  it</span> <span m='2519590'>to</span> <span m='2519640'>two.</span> <span
  m='2520220'>So</span> <span m='2520390'>the</span> <span
  m='2520490'>frontier</span> <span m='2521720'>at</span> <span
  m='2521870'>level</span> <span m='2522120'>two</span> <span
  m='2523590'>is</span> <span m='2523800'>that.</span> <span
  m='2526190'>Then</span> <span m='2526500'>we</span> <span
  m='2526610'>look</span> <span m='2526790'>at</span> <span
  m='2526860'>all</span> <span m='2527000'>the</span> <span
  m='2527070'>neighbors</span> <span m='2527380'>of z.</span> <span
  m='2527570'>There's</span> <span m='2527900'>a.</span> <span
  m='2528040'>a's</span> <span m='2528690'>already</span> <span
  m='2528860'>been</span> <span m='2529010'>set.</span> <span
  m='2529590'>Look</span> <span m='2529800'>at</span> <span
  m='2529880'>all</span> <span m='2530000'>the</span> <span
  m='2530070'>neighbors of</span> <span m='2530500'>d.</span> <span
  m='2530780'>There's</span> <span m='2531050'>x.</span> <span
  m='2531510'>There's</span> <span m='2531690'>c.</span> <span m='2531870'>Those
  have</span> <span m='2532070'>been</span> <span m='2532300'>set.</span> <span
  m='2532550'>There's</span> <span m='2532830'>f.</span> <span
  m='2533850'>This</span> <span m='2534010'>one</span> <span
  m='2534250'>gets</span> <span m='2534530'>added.</span> <span
  m='2536440'>Then</span> <span m='2536770'>we</span> <span
  m='2536860'>look</span> <span m='2537050'>at</span> <span
  m='2537150'>c.</span> <span m='2537480'>There's</span> <span
  m='2537710'>x.</span> <span m='2538020'>That's</span> <span
  m='2538220'>been</span> <span m='2538360'>done.</span> <span
  m='2538750'>d's</span> <span m='2538970'>been</span> <span
  m='2539150'>done.</span> <span m='2539770'>f's</span> <span
  m='2540010'>been</span> <span m='2540160'>done.</span> <span
  m='2540690'>v</span> <span m='2540850'>has</span> <span m='2541030'>not</span>
  <span m='2541270'>been</span> <span m='2541430'>done.</span> <span
  m='2543370'>So</span> <span m='2543560'>this</span> <span
  m='2543760'>becomes</span> <span m='2544160'>a</span> <span
  m='2544250'>frontier</span> <span m='2545250'>at</span> <span
  m='2545420'>level</span> <span m='2545670'>three.</span> <span
  m='2547300'>Then</span> <span m='2547670'>we</span> <span
  m='2547790'>look</span> <span m='2547960'>at</span> <span
  m='2548010'>level</span> <span m='2548260'>three.</span> <span
  m='2548930'>There's</span> <span m='2549130'>f.</span> <span
  m='2549620'>D's</span> <span m='2549820'>been done,</span> <span
  m='2550020'>c's</span> <span m='2550330'>been</span> <span
  m='2550670'>done,</span> <span m='2550830'>b's</span> <span
  m='2551010'>been</span> <span m='2551130'>done.</span> <span
  m='2551410'>We</span> <span m='2551870'>look</span> <span
  m='2552020'>at</span> <span m='2552150'>v.</span> <span m='2552440'>c's</span>
  <span m='2552730'>been</span> <span m='2553080'>done.</span> <span
  m='2553340'>f's</span> <span m='2553580'>been</span> <span
  m='2553730'>done.</span> <span m='2554530'>Nothing</span> <span
  m='2554900'>to</span> <span m='2554980'>add</span> <span m='2555240'>to</span>
  <span m='2555360'>next.</span> <span m='2555710'>Next</span> <span
  m='2556060'>becomes</span> <span m='2556390'>empty.</span> <span
  m='2556780'>Frontier</span> <span m='2557220'>becomes</span> <span
  m='2557560'>empty.</span> <span m='2558240'>The</span> <span
  m='2558340'>while-loop</span> <span m='2558740'>finishes.</span> <span
  m='2559530'>TA</span> <span m='2559750'>DA!</span> <span
  m='2560760'>We've</span> <span m='2560970'>computed--</span> <span
  m='2561850'>we've</span> <span m='2561970'>visited</span> <span
  m='2562350'>all</span> <span m='2562510'>the</span> <span
  m='2562570'>vertices.</span> </p><p><span m='2563510'>Question.</span>
  </p><p><span m='2564886'>AUDIENCE: [INAUDIBLE].</span> <span
  m='2571325'>What</span> <span m='2571782'>notation?</span> </p><p><span
  m='2572910'>PROFESSOR: This</span> <span m='2573160'>is</span> <span
  m='2573270'>Python</span> <span m='2573720'>notation.</span> <span
  m='2574460'>You</span> <span m='2574550'>may</span> <span
  m='2574650'>have</span> <span m='2574730'>heard</span> <span
  m='2574880'>of</span> <span m='2574940'>Python.</span> <span
  m='2576860'>This</span> <span m='2577140'>is</span> <span m='2578240'>a</span>
  <span m='2578340'>dictionary</span> <span m='2580100'>which</span> <span
  m='2580550'>has</span> <span m='2580790'>one</span> <span
  m='2581180'>key</span> <span m='2581370'>value,</span> <span
  m='2581720'>s,</span> <span m='2582150'>and has</span> <span
  m='2582320'>one</span> <span m='2582500'>value,</span> <span
  m='2583190'>zero.</span> <span m='2583720'>So</span> <span
  m='2583890'>you</span> <span m='2584660'>could--</span> <span
  m='2586110'>That's</span> <span m='2586310'>shorthand</span> <span
  m='2586770'>in</span> <span m='2586850'>Python</span> <span
  m='2587280'>for--</span> <span m='2588300'>Usually</span> <span
  m='2588680'>you</span> <span m='2588780'>have</span> <span
  m='2589180'>a</span> <span m='2589290'>comma</span> <span
  m='2589640'>separated</span> <span m='2590080'>list.</span> <span
  m='2590440'>The</span> <span m='2590540'>colon</span> <span
  m='2590990'>is</span> <span m='2592760'>specifying</span> <span
  m='2593310'>key</span> <span m='2593580'>value</span> <span
  m='2593850'>pairs.</span> </p><p><span m='2597300'>I</span> <span
  m='2597380'>didn't</span> <span m='2597550'>talk</span> <span
  m='2597720'>about</span> <span m='2598000'>parent.</span> <span
  m='2599760'>We</span> <span m='2599900'>can</span> <span m='2600030'>do</span>
  <span m='2600140'>that</span> <span m='2600450'>for</span> <span
  m='2600760'>a</span> <span m='2600800'>little</span> <span
  m='2600950'>bit.</span> <span m='2603310'>So</span> <span
  m='2603490'>parent</span> <span m='2604090'>we're</span> <span
  m='2604240'>initializing</span> <span m='2604910'>to</span> <span
  m='2604980'>say,</span> <span m='2605640'>the</span> <span
  m='2605940'>parent</span> <span m='2606220'>of</span> <span m='2606310'>s 
  is</span> <span m='2606740'>nobody,</span> <span m='2608280'>and</span> <span
  m='2608430'>then</span> <span m='2608580'>whenever</span> <span
  m='2609010'>we</span> <span m='2609920'>visit</span> <span
  m='2610210'>a</span> <span m='2610290'>new</span> <span
  m='2610430'>vertex,</span> <span m='2610890'>v,</span> <span
  m='2611590'>we</span> <span m='2611720'>set</span> <span
  m='2611910'>its</span> <span m='2612030'>parent</span> <span
  m='2612430'>to</span> <span m='2612510'>be</span> <span m='2612690'>the</span>
  <span m='2612770'>vertex</span> <span m='2613200'>that</span> <span
  m='2613310'>we</span> <span m='2613460'>came</span> <span
  m='2613830'>from.</span> <span m='2614900'>So</span> <span
  m='2615080'>we</span> <span m='2615160'>had</span> <span
  m='2615320'>this</span> <span m='2615430'>vertex,</span> <span
  m='2615770'>v.</span> <span m='2615940'>We</span> <span m='2616040'>had</span>
  <span m='2616210'>an</span> <span m='2616320'>edge</span> <span
  m='2616650'>to</span> <span m='2616910'>v</span> <span m='2617340'>from</span>
  <span m='2617550'>some</span> <span m='2617740'>vertex,</span> <span
  m='2618400'>u.</span> <span m='2618560'>We</span> <span m='2618690'>set</span>
  <span m='2619090'>the parent of</span> <span m='2619370'>v</span> <span
  m='2619550'>to  be</span> <span m='2619680'>u.</span> </p><p><span
  m='2620720'>So</span> <span m='2620910'>let</span> <span m='2621070'>me</span>
  <span m='2621960'>add</span> <span m='2622250'>in</span> <span
  m='2622850'>what</span> <span m='2623130'>that</span> <span
  m='2623360'>becomes.</span> <span m='2624140'>I'll</span> <span
  m='2624640'>change</span> <span m='2624910'>colors</span> <span
  m='2625270'>yet</span> <span m='2625480'>again.</span> <span
  m='2627300'>Although</span> <span m='2627665'>it</span> <span
  m='2627930'>gets</span> <span m='2628130'>hard</span> <span
  m='2628380'>to</span> <span m='2628460'>see</span> <span
  m='2628900'>any</span> <span m='2629110'>color</span> <span
  m='2629370'>but</span> <span m='2629635'>red.</span> <span
  m='2631820'>So</span> <span m='2632030'>we</span> <span
  m='2632140'>have</span> <span m='2633820'>s.</span> <span
  m='2635340'>When</span> <span m='2635510'>we</span> <span
  m='2635620'>visited</span> <span m='2636040'>a,</span> <span
  m='2636940'>then</span> <span m='2637790'>the</span> <span
  m='2637860'>parent</span> <span m='2638300'>of</span> <span
  m='2638510'>a</span> <span m='2638860'>would</span> <span
  m='2638950'>become</span> <span m='2639960'>s.</span> <span
  m='2640810'>When</span> <span m='2641150'>we</span> <span
  m='2641420'>visited</span> <span m='2641830'>z,</span> <span
  m='2642200'>the</span> <span m='2642300'>parent</span> <span
  m='2642700'>of</span> <span m='2642820'>z</span> <span
  m='2643220'>would</span> <span m='2643460'>be</span> <span
  m='2643940'>a.</span> <span m='2645150'>Parent of</span> <span
  m='2645580'>x</span> <span m='2645960'>is</span> <span
  m='2646120'>going</span> <span m='2646280'>to</span> <span
  m='2646350'>be</span> <span m='2646620'>s.</span> <span
  m='2647640'>Parent</span> <span m='2648140'>of</span> <span
  m='2648420'>d</span> <span m='2648800'>is</span> <span
  m='2648980'>going</span> <span m='2649110'>to</span> <span
  m='2649300'>be</span> <span m='2649630'>x.</span> <span m='2649925'>The</span>
  <span m='2650220'>parent of</span> <span m='2650610'>c</span> <span
  m='2650910'>is</span> <span m='2651110'>going</span> <span
  m='2651250'>to</span> <span m='2651330'>be</span> <span m='2651610'>x.</span>
  <span m='2652765'>The</span> <span m='2653200'>parent</span> <span
  m='2653495'>of</span> <span m='2653790'>f--</span> <span m='2654530'>it</span>
  <span m='2654760'>could</span> <span m='2654960'>have</span> <span
  m='2655050'>been</span> <span m='2655180'>either</span> <span
  m='2655430'>way,</span> <span m='2655620'>but</span> <span
  m='2655780'>the</span> <span m='2655870'>way</span> <span m='2656010'>I</span>
  <span m='2656080'>did it,</span> <span m='2656530'>d</span> <span
  m='2656950'>went</span> <span m='2657120'>first,</span> <span
  m='2658860'>and</span> <span m='2658990'>so</span> <span
  m='2659320'>that</span> <span m='2659560'>became</span> <span
  m='2659870'>its</span> <span m='2660000'>parent.</span> <span
  m='2661200'>And</span> <span m='2661490'>I</span> <span m='2661550'>think
  for</span> <span m='2661880'>v,</span> <span m='2662320'>c</span> <span
  m='2662800'>was</span> <span m='2662980'>its</span> <span
  m='2663170'>parent.</span> </p><p><span m='2665670'>So</span> <span
  m='2665800'>that's</span> <span m='2666040'>what</span> <span
  m='2666110'>the</span> <span m='2666210'>parent</span> <span
  m='2666490'>pointers</span> <span m='2666890'>will</span> <span
  m='2667020'>look</span> <span m='2667210'>like.</span> <span
  m='2667410'>They</span> <span m='2667560'>always</span> <span
  m='2667800'>follow</span> <span m='2668210'>edges.</span> <span
  m='2668820'>They</span> <span m='2669180'>actually</span> <span
  m='2669430'>follow</span> <span m='2669700'>edges</span> <span
  m='2669980'>backwards.</span> <span m='2670760'>If</span> <span
  m='2670880'>this</span> <span m='2671040'>was</span> <span
  m='2671170'>a</span> <span m='2671250'>directed</span> <span
  m='2671660'>graph,</span> <span m='2672040'>the</span> <span
  m='2672370'>graph</span> <span m='2672620'>might</span> <span
  m='2672790'>be</span> <span m='2672870'>directed</span> <span
  m='2673230'>that</span> <span m='2673450'>way</span> <span
  m='2674090'>but</span> <span m='2674570'>the</span> <span
  m='2674840'>parent</span> <span m='2675110'>pointers</span> <span
  m='2675420'>go</span> <span m='2675630'>back</span> <span
  m='2675930'>along</span> <span m='2676170'>the</span> <span
  m='2676280'>edges.</span> <span m='2677270'>So</span> <span
  m='2677300'>it's</span> <span m='2677410'>a</span> <span
  m='2677470'>way</span> <span m='2677620'>to</span> <span
  m='2677710'>return.</span> <span m='2678390'>It's</span> <span
  m='2678690'>a</span> <span m='2678780'>way</span> <span m='2678900'>to</span>
  <span m='2678970'>return</span> <span m='2679350'>to</span> <span
  m='2679580'>s.</span> <span m='2681710'>If</span> <span m='2681830'>you</span>
  <span m='2681940'>follow</span> <span m='2682310'>these</span> <span
  m='2682610'>pointers,</span> <span m='2683310'>all</span> <span
  m='2683660'>roads</span> <span m='2683960'>lead</span> <span
  m='2684170'>to</span> <span m='2684280'>s.</span> <span
  m='2688140'>Because</span> <span m='2688590'>we</span> <span
  m='2688680'>started</span> <span m='2689040'>at</span> <span
  m='2689130'>s,</span> <span m='2689420'>that's</span> <span
  m='2689650'>the</span> <span m='2689730'>property</span> <span
  m='2690170'>we</span> <span m='2690280'>have.</span> <span
  m='2690550'>In</span> <span m='2690660'>fact,</span> <span
  m='2691430'>these</span> <span m='2691630'>pointers</span> <span
  m='2692030'>always</span> <span m='2692310'>form a</span> <span
  m='2692640'>tree,</span> <span m='2694180'>and</span> <span
  m='2694310'>the</span> <span m='2694420'>root</span> <span
  m='2694630'>of</span> <span m='2694720'>the</span> <span
  m='2694810'>tree</span> <span m='2695430'>is</span> <span
  m='2695630'>s.</span> <span m='2696280'>In</span> <span
  m='2696440'>fact,</span> <span m='2696900'>these</span> <span
  m='2697090'>pointers</span> <span m='2697530'>form</span> <span
  m='2697830'>what</span> <span m='2697940'>are</span> <span
  m='2698030'>called</span> <span m='2698240'>shortest</span> <span
  m='2698730'>paths.</span> <span m='2699860'>Let</span> <span
  m='2700010'>me</span> <span m='2700170'>write</span> <span
  m='2700400'>down</span> <span m='2701500'>a</span> <span
  m='2701560'>little</span> <span m='2701860'>bit</span> <span
  m='2702020'>about</span> <span m='2705300'>this.</span> </p><p><span
  m='2719970'>Shortest</span> <span m='2720500'>path</span> <span
  m='2720900'>properties.</span> <span m='2745910'>If</span> <span
  m='2746000'>you</span> <span m='2746090'>take a</span> <span
  m='2746460'>node,</span> <span m='2749880'>and</span> <span
  m='2750120'>you</span> <span m='2750240'>take</span> <span
  m='2750980'>its</span> <span m='2751130'>parent,</span> <span m='2751400'>and
  you</span> <span m='2751670'>take</span> <span m='2751840'>the</span> <span
  m='2751930'>parent</span> <span m='2752320'>of the</span> <span
  m='2752370'>parent,</span> <span m='2753170'>and</span> <span
  m='2753390'>so</span> <span m='2753580'>on,</span> <span
  m='2754230'>eventually</span> <span m='2754790'>you</span> <span
  m='2754900'>get</span> <span m='2755080'>to</span> <span m='2755170'>s.</span>
  <span m='2756600'>And</span> <span m='2756790'>if</span> <span
  m='2756870'>you</span> <span m='2757040'>read</span> <span
  m='2757210'>it</span> <span m='2757350'>backwards,</span> <span
  m='2758890'>that</span> <span m='2759180'>will</span> <span
  m='2759320'>actually</span> <span m='2759540'>be</span> <span
  m='2759660'>a</span> <span m='2759740'>path</span> <span m='2760090'>in</span>
  <span m='2760180'>the</span> <span m='2760280'>graph.</span> <span
  m='2761880'>And</span> <span m='2762050'>it</span> <span
  m='2762090'>will</span> <span m='2762220'>be</span> <span m='2762470'>a</span>
  <span m='2762600'>shortest</span> <span m='2763220'>path,</span> <span
  m='2765120'>in</span> <span m='2765240'>the</span> <span
  m='2765310'>graph,</span> <span m='2769420'>from</span> <span
  m='2769790'>s</span> <span m='2770050'>to</span> <span m='2770170'>v.</span>
  <span m='2773320'>Meaning,</span> <span m='2774170'>if</span> <span
  m='2774320'>you</span> <span m='2774450'>look</span> <span
  m='2774610'>at</span> <span m='2774700'>all</span> <span
  m='2775050'>paths</span> <span m='2775370'>in</span> <span
  m='2775450'>the</span> <span m='2775540'>graph</span> <span
  m='2776000'>that</span> <span m='2776100'>go</span> <span
  m='2776310'>from</span> <span m='2776560'>s</span> <span m='2776790'>to</span>
  <span m='2776920'>v--</span> <span m='2777180'>So</span> <span
  m='2777340'>say</span> <span m='2777510'>we're</span> <span
  m='2777640'>going</span> <span m='2777860'>from</span> <span
  m='2778060'>s</span> <span m='2778360'>to</span> <span m='2778540'>v,</span>
  <span m='2778830'>how</span> <span m='2779120'>about</span> <span
  m='2779380'>that,</span> <span m='2781460'>we</span> <span
  m='2781770'>compute</span> <span m='2782020'>this</span> <span
  m='2782190'>path</span> <span m='2782500'>out</span> <span
  m='2782660'>of</span> <span m='2782720'>BFS.</span> <span
  m='2783230'>Which</span> <span m='2783400'>is,</span> <span
  m='2783530'>follow</span> <span m='2783820'>a</span> <span
  m='2783880'>parent</span> <span m='2784160'>of v</span> <span m='2784280'>is
  c,</span> <span m='2785060'>parent</span> <span m='2785450'>of c</span> <span
  m='2785560'>is x,</span> <span m='2785820'>parent</span> <span
  m='2786080'>of</span> <span m='2786180'>x</span> <span m='2786390'>is</span>
  <span m='2786500'>s.</span> <span m='2787670'>Read</span> <span
  m='2787850'>it</span> <span m='2787930'>backwards.</span> <span
  m='2788600'>That</span> <span m='2788760'>gives</span> <span
  m='2788910'>us</span> <span m='2789030'>a</span> <span m='2789110'>path</span>
  <span m='2789400'>from</span> <span m='2789540'>s</span> <span
  m='2789710'>to</span> <span m='2789810'>v.</span> </p><p><span
  m='2790590'>The</span> <span m='2790730'>claim</span> <span
  m='2790990'>is,</span> <span m='2791120'>that</span> <span
  m='2791330'>is</span> <span m='2791490'>the</span> <span
  m='2791600'>shortest</span> <span m='2792140'>way</span> <span
  m='2792310'>to</span> <span m='2792380'>get</span> <span
  m='2792570'>from</span> <span m='2792730'>s</span> <span m='2792880'>to</span>
  <span m='2792980'>v.</span> <span m='2793350'>It</span> <span
  m='2793620'>might</span> <span m='2793790'>not</span> <span
  m='2793960'>be</span> <span m='2794080'>the</span> <span
  m='2794240'>only</span> <span m='2794530'>one.</span> <span
  m='2795420'>Like</span> <span m='2795650'>if</span> <span
  m='2795710'>you're</span> <span m='2795820'>going</span> <span
  m='2796010'>from</span> <span m='2796190'>s</span> <span m='2796410'>to</span>
  <span m='2796540'>f,</span> <span m='2797000'>there's</span> <span
  m='2797240'>two</span> <span m='2797610'>short</span> <span
  m='2797910'>paths.</span> <span m='2798330'>There's</span> <span
  m='2798530'>this</span> <span m='2798740'>one</span> <span
  m='2799350'>of</span> <span m='2799490'>length</span> <span
  m='2799760'>three.</span> <span m='2800330'>There's</span> <span
  m='2800560'>this</span> <span m='2800760'>one</span> <span
  m='2801300'>of</span> <span m='2801480'>length</span> <span
  m='2801740'>three..</span> <span m='2802160'>Uses</span> <span
  m='2802280'>three</span> <span m='2802520'>edges.</span> <span
  m='2803390'>Same</span> <span m='2803650'>length.</span> <span
  m='2805300'>And</span> <span m='2805660'>in</span> <span
  m='2805860'>the</span> <span m='2805940'>parent pointers,</span> <span
  m='2806460'>we</span> <span m='2806740'>can</span> <span
  m='2806880'>only</span> <span m='2807110'>afford</span> <span
  m='2807410'>to</span> <span m='2807460'>encode</span> <span
  m='2807730'>one</span> <span m='2807960'>of</span> <span
  m='2808030'>those</span> <span m='2808230'>paths</span> <span
  m='2808640'>because in</span> <span m='2808800'>general</span> <span
  m='2809080'>there</span> <span m='2809170'>might</span> <span
  m='2809350'>be</span> <span m='2809480'>exponentially</span> <span
  m='2810110'>many</span> <span m='2810300'>ways</span> <span
  m='2810540'>to</span> <span m='2810620'>get</span> <span
  m='2810830'>from</span> <span m='2811420'>one</span> <span
  m='2811630'>node</span> <span m='2811820'>to</span> <span
  m='2811910'>another.</span> <span m='2812690'>We</span> <span
  m='2812820'>find</span> <span m='2813190'>a</span> <span
  m='2813420'>shortest</span> <span m='2813820'>path,</span> <span
  m='2814220'>not</span> <span m='2814400'>necessarily</span> <span
  m='2815240'>the</span> <span m='2815390'>only</span> <span
  m='2815640'>one.</span> <span m='2816940'>And</span> <span
  m='2817260'>the</span> <span m='2817360'>length</span> <span
  m='2817680'>of</span> <span m='2817760'>that</span> <span
  m='2818000'>path--</span> <span m='2820600'>So</span> <span
  m='2820780'>shortest</span> <span m='2821075'>here</span> <span
  m='2821370'>means</span> <span m='2821610'>that</span> <span
  m='2821720'>you</span> <span m='2821870'>use</span> <span
  m='2822140'>the</span> <span m='2822230'>fewest</span> <span
  m='2822640'>edges.</span> <span m='2823750'>And</span> <span
  m='2823970'>the</span> <span m='2824050'>length</span> <span
  m='2824430'>will</span> <span m='2824650'>be</span> <span
  m='2825700'>level</span> <span m='2826120'>of</span> <span
  m='2826210'>v.</span> <span m='2827690'>That's</span> <span
  m='2827910'>what</span> <span m='2827980'>we're</span> <span
  m='2828090'>keeping</span> <span m='2828410'>track</span> <span
  m='2828740'>of.</span> <span m='2831070'>If the</span> <span
  m='2831170'>level's</span> <span m='2831450'>zero,</span> <span
  m='2831790'>you</span> <span m='2831950'>can</span> <span
  m='2832080'>get</span> <span m='2832230'>there</span> <span
  m='2832370'>with</span> <span m='2832520'>zero</span> <span
  m='2832760'>steps.</span> <span m='2833020'>If</span> <span
  m='2833280'>the</span> <span m='2833410'>level's</span> <span
  m='2833730'>one,</span> <span m='2833990'>you</span> <span
  m='2834170'>get</span> <span m='2834300'>there</span> <span
  m='2834430'>with</span> <span m='2834530'>one</span> <span
  m='2834710'>steps.</span> <span m='2835060'>Because</span> <span
  m='2835250'>we're</span> <span m='2835350'>visiting</span> <span
  m='2835730'>everything</span> <span m='2836150'>you</span> <span
  m='2836260'>can</span> <span m='2836400'>possibly</span> <span
  m='2836850'>get</span> <span m='2837380'>in</span> <span m='2837550'>k</span>
  <span m='2837750'>steps,</span> <span m='2838140'>the</span> <span
  m='2838240'>level</span> <span m='2838580'>is</span> <span
  m='2838660'>telling</span> <span m='2838970'>you</span> <span
  m='2839500'>what</span> <span m='2839830'>that</span> <span
  m='2840020'>shortest</span> <span m='2840350'>path</span> <span
  m='2840630'>distance</span> <span m='2841010'>is.</span> <span
  m='2841790'>And</span> <span m='2841930'>the</span> <span
  m='2842000'>parent</span> <span m='2842310'>pointers</span> <span
  m='2842440'>are</span> <span m='2842580'>actually</span> <span
  m='2842910'>giving</span> <span m='2843360'>you</span> <span
  m='2843520'>the</span> <span m='2843640'>shortest</span> <span
  m='2844070'>path.</span> </p><p><span m='2845030'>That's</span> <span
  m='2845250'>the</span> <span m='2845340'>cool</span> <span
  m='2845590'>thing</span> <span m='2846250'>about</span> <span
  m='2846580'>BFS.</span> <span m='2847090'>Yeah,</span> <span
  m='2847300'>BFS</span> <span m='2847770'>explores</span> <span
  m='2848140'>the</span> <span m='2848180'>vertices.</span> <span
  m='2848620'>Sometimes,</span> <span m='2849070'>that's</span> <span
  m='2849240'>all</span> <span m='2849360'>you</span> <span
  m='2849470'>care</span> <span m='2849700'>about.</span> <span
  m='2850480'>But</span> <span m='2850580'>in</span> <span
  m='2850680'>some</span> <span m='2850710'>sense,</span> <span
  m='2851080'>what</span> <span m='2851240'>really</span> <span
  m='2851540'>matters,</span> <span m='2852040'>is</span> <span
  m='2852180'>it</span> <span m='2852310'>finds</span> <span
  m='2852660'>the</span> <span m='2852750'>shortest</span> <span
  m='2853250'>way</span> <span m='2854190'>to</span> <span
  m='2854730'>get</span> <span m='2854940'>from</span> <span
  m='2855110'>anywhere</span> <span m='2855400'>to</span> <span
  m='2855450'>anywhere.</span> <span m='2856200'>For a</span> <span
  m='2856360'>Rubik's</span> <span m='2856710'>Cube,</span> <span
  m='2857320'>that's</span> <span m='2857560'>nice</span> <span
  m='2857910'>because</span> <span m='2860070'>you</span> <span
  m='2860200'>run</span> <span m='2860590'>BFS</span> <span
  m='2861380'>from</span> <span m='2861560'>the</span> <span
  m='2861640'>start</span> <span m='2861970'>state</span> <span m='2862275'>of
  the</span> <span m='2862580'>Rubik's</span> <span m='2862990'>Cube.</span>
  <span m='2863260'>Then</span> <span m='2863410'>you</span> <span
  m='2863490'>say,</span> <span m='2863760'>oh,</span> <span
  m='2863900'>I'm</span> <span m='2864100'>in</span> <span
  m='2864210'>this</span> <span m='2864400'>state.</span> <span
  m='2865190'>You</span> <span m='2865350'>look</span> <span
  m='2865520'>up</span> <span m='2865650'>this</span> <span
  m='2865830'>state.</span> <span m='2866740'>You</span> <span
  m='2866880'>look</span> <span m='2867060'>at</span> <span
  m='2867100'>its</span> <span m='2867260'>level.</span> <span m='2867640'>It
  says,</span> <span m='2867930'>oh,</span> <span m='2868190'>you</span> <span
  m='2868450'>can</span> <span m='2868780'>get</span> <span
  m='2868970'>there</span> <span m='2869210'>in</span> <span
  m='2869350'>nine</span> <span m='2869630'>steps.</span> <span
  m='2870590'>That's,</span> <span m='2870850'>I</span> <span
  m='2870910'>think,</span> <span m='2871100'>the</span> <span
  m='2871230'>average.</span> <span m='2872260'>So</span> <span
  m='2872430'>I'm</span> <span m='2872530'>guessing.</span> <span
  m='2873700'>I</span> <span m='2873780'>don't</span> <span
  m='2873930'>know</span> <span m='2874080'>how</span> <span
  m='2874190'>to</span> <span m='2874280'>do</span> <span
  m='2874360'>this</span> <span m='2874470'>in</span> <span
  m='2874640'>nine</span> <span m='2874840'>steps.</span> </p><p><span
  m='2878470'>Great,</span> <span m='2878770'>so</span> <span
  m='2878870'>now</span> <span m='2879000'>you</span> <span
  m='2879130'>know</span> <span m='2879610'>how</span> <span
  m='2879790'>to</span> <span m='2879860'>solve</span> <span
  m='2880190'>it.</span> <span m='2880690'>You</span> <span
  m='2880790'>just</span> <span m='2880860'>look</span> <span
  m='2880990'>at</span> <span m='2881060'>the</span> <span
  m='2881140'>parent</span> <span m='2881460'>pointer.</span> <span
  m='2881720'>The</span> <span m='2881800'>parent</span> <span
  m='2882100'>pointer</span> <span m='2882290'>gives</span> <span
  m='2882460'>you</span> <span m='2882530'>another</span> <span
  m='2882770'>configuration.</span> <span m='2883095'>You say,</span> <span
  m='2883420'>oh, what</span> <span m='2883660'>move</span> <span
  m='2884010'>was</span> <span m='2884370'>that?</span> <span
  m='2885030'>And</span> <span m='2885170'>then</span> <span m='2885310'>you
  do</span> <span m='2885480'>that</span> <span m='2885690'>move.</span> <span
  m='2886480'>I'm</span> <span m='2886570'>not</span> <span
  m='2886700'>going</span> <span m='2886790'>to</span> <span
  m='2886830'>solve</span> <span m='2887120'>it.</span> <span m='2887940'>Then
  you</span> <span m='2888120'>look</span> <span m='2888250'>at</span> <span
  m='2888290'>the</span> <span m='2888390'>parent pointer</span> <span
  m='2888830'>of</span> <span m='2888910'>that.</span> <span
  m='2889360'>You</span> <span m='2889460'>do</span> <span
  m='2889580'>that</span> <span m='2889770'>move.</span> <span
  m='2890045'>You</span> <span m='2890320'>look at</span> <span
  m='2890450'>the</span> <span m='2890510'>parent</span> <span
  m='2890610'>pointer</span> <span m='2890890'>of</span> <span
  m='2891060'>that.</span> <span m='2891510'>You</span> <span
  m='2891620'>do</span> <span m='2891740'>that move.</span> <span
  m='2892080'>Eventually,</span> <span m='2892550'>you'll</span> <span
  m='2892750'>get</span> <span m='2892910'>to the</span> <span
  m='2893070'>solved</span> <span m='2893350'>state,</span> <span
  m='2893610'>and</span> <span m='2893710'>you</span> <span
  m='2893800'>will</span> <span m='2893900'>do</span> <span
  m='2894060'>it</span> <span m='2894150'>using</span> <span
  m='2894390'>the</span> <span m='2894470'>fewest</span> <span
  m='2894930'>possible</span> <span m='2895400'>moves.</span> <span
  m='2896430'>So</span> <span m='2896600'>if</span> <span m='2896670'>you</span>
  <span m='2896800'>can</span> <span m='2896920'>afford</span> <span
  m='2897400'>to</span> <span m='2897750'>put</span> <span
  m='2897920'>the</span> <span m='2898010'>whole</span> <span
  m='2898190'>graph</span> <span m='2898450'>in</span> <span
  m='2898550'>memory,</span> <span m='2900360'>which</span> <span
  m='2900590'>you</span> <span m='2900750'>can't</span> <span m='2901140'>for
  a</span> <span m='2901370'>big</span> <span m='2901720'>Rubik's Cube</span>
  <span m='2901930'>but</span> <span m='2902120'>you</span> <span
  m='2902300'>can</span> <span m='2902470'>for a</span> <span
  m='2902640'>small</span> <span m='2902950'>one,</span> <span
  m='2903450'>then</span> <span m='2903610'>this</span> <span
  m='2903800'>will</span> <span m='2903900'>give</span> <span
  m='2904100'>you</span> <span m='2904870'>a</span> <span
  m='2905200'>strategy,</span> <span m='2905880'>the</span> <span
  m='2906080'>optimal</span> <span m='2906540'>strategy,</span> <span
  m='2907560'>God's</span> <span m='2907870'>algorithm</span> <span
  m='2908310'>if</span> <span m='2908400'>you</span> <span
  m='2908520'>will,</span> <span m='2908870'>for</span> <span
  m='2910820'>every</span> <span m='2911160'>configuration.</span> <span
  m='2912400'>It</span> <span m='2912580'>solves</span> <span
  m='2912850'>all</span> <span m='2913150'>of</span> <span
  m='2913270'>them.</span> <span m='2914200'>Which</span> <span
  m='2914570'>is</span> <span m='2914680'>great.</span> </p><p><span
  m='2916240'>What</span> <span m='2916540'>is</span> <span
  m='2916710'>the</span> <span m='2916900'>running</span> <span m='2917190'>time
  of</span> <span m='2917400'>this</span> <span m='2917580'>algorithm?</span>
  <span m='2917990'>I</span> <span m='2918060'>claim</span> <span
  m='2918430'>it's</span> <span m='2918560'>order</span> <span
  m='2918770'>V</span> <span m='2918960'>plus</span> <span m='2919180'>E.</span>
  <span m='2920660'>But</span> <span m='2920850'>it</span> <span
  m='2920920'>looked</span> <span m='2921160'>a</span> <span
  m='2921220'>little</span> <span m='2921440'>wasteful</span> <span
  m='2921870'>because</span> <span m='2922160'>it</span> <span
  m='2922240'>was</span> <span m='2922420'>checking</span> <span
  m='2922760'>vertices</span> <span m='2923220'>over</span> <span
  m='2923560'>and</span> <span m='2923630'>over</span> <span
  m='2923850'>and</span> <span m='2923920'>over.</span> <span
  m='2925300'>But</span> <span m='2925440'>if</span> <span
  m='2925550'>you</span> <span m='2925660'>think</span> <span
  m='2925870'>about</span> <span m='2926110'>it</span> <span
  m='2926200'>carefully,</span> <span m='2927260'>you're</span> <span
  m='2927480'>only</span> <span m='2927780'>looking--</span> <span
  m='2929246'>what's</span> <span m='2929620'>the</span> <span
  m='2929830'>right</span> <span m='2930010'>way</span> <span
  m='2930110'>to</span> <span m='2930200'>say</span> <span
  m='2930370'>this--</span> <span m='2931270'>you</span> <span
  m='2931500'>only</span> <span m='2932840'>check</span> <span
  m='2933240'>every</span> <span m='2933690'>edge</span> <span
  m='2934900'>once.</span> <span m='2935590'>Or</span> <span
  m='2935790'>in</span> <span m='2935850'>undirected</span> <span
  m='2936290'>graphs,</span> <span m='2936490'>you</span> <span
  m='2936630'>check</span> <span m='2936860'>them</span> <span
  m='2937030'>twice,</span> <span m='2937500'>once</span> <span
  m='2937780'>from</span> <span m='2937940'>each</span> <span
  m='2938130'>side.</span> <span m='2940820'>A</span> <span
  m='2940900'>vertex</span> <span m='2941420'>enters</span> <span
  m='2941790'>the</span> <span m='2941880'>frontier</span> <span
  m='2942650'>only</span> <span m='2942960'>once.</span> <span
  m='2944290'>Because</span> <span m='2944660'>once</span> <span
  m='2944940'>it's</span> <span m='2945050'>in</span> <span
  m='2945140'>the</span> <span m='2945220'>frontier,</span> <span m='2945710'>it
  gets</span> <span m='2945890'>a</span> <span m='2945940'>level</span> <span
  m='2946270'>set.</span> <span m='2947610'>And</span> <span
  m='2947880'>once</span> <span m='2948110'>it</span> <span
  m='2948180'>has</span> <span m='2948300'>a</span> <span
  m='2948340'>level</span> <span m='2948580'>set,</span> <span
  m='2948780'>it'll</span> <span m='2948960'>never</span> <span
  m='2949240'>go</span> <span m='2949440'>in</span> <span
  m='2949550'>again.</span> <span m='2951450'>It'll</span> <span
  m='2951650'>never</span> <span m='2951900'>get</span> <span
  m='2952100'>added</span> <span m='2952430'>to</span> <span
  m='2952530'>next.</span> <span m='2954450'>So</span> <span
  m='2954940'>s</span> <span m='2955220'>gets</span> <span
  m='2955360'>added</span> <span m='2955580'>once</span> <span
  m='2955930'>then</span> <span m='2956070'>we</span> <span
  m='2956180'>check</span> <span m='2956420'>all</span> <span
  m='2956540'>the</span> <span m='2956620'>neighbors</span> <span
  m='2956950'>of</span> <span m='2957060'>s.</span> <span m='2957440'>a</span>
  <span m='2957630'>gets</span> <span m='2957830'>added</span> <span
  m='2958100'>once,</span> <span m='2958400'>then</span> <span m='2958510'>we
  check</span> <span m='2958690'>all the</span> <span
  m='2958920'>neighbors</span> <span m='2959210'>of</span> <span
  m='2959310'>a.</span> <span m='2959910'>Each</span> <span
  m='2960060'>of</span> <span m='2960120'>these</span> <span
  m='2960280'>guys</span> <span m='2960550'>gets</span> <span
  m='2960710'>added</span> <span m='2960940'>once.</span> <span
  m='2961520'>We</span> <span m='2961640'>check</span> <span
  m='2961870'>all</span> <span m='2962000'>the</span> <span
  m='2962080'>neighbors.</span> <span m='2962950'>So</span> <span
  m='2963120'>the</span> <span m='2963260'>total</span> <span
  m='2963610'>running</span> <span m='2963900'>time</span> <span
  m='2964170'>is</span> <span m='2964280'>going</span> <span
  m='2964410'>to</span> <span m='2964470'>be</span> <span m='2964590'>the</span>
  <span m='2964690'>sum</span> <span m='2965080'>over</span> <span
  m='2965310'>all</span> <span m='2965470'>vertices</span> <span
  m='2966590'>of</span> <span m='2966950'>the</span> <span
  m='2967040'>size</span> <span m='2967490'>of</span> <span
  m='2967570'>the</span> <span m='2967690'>adjacency</span> <span
  m='2968260'>list</span> <span m='2969740'>of</span> <span
  m='2969890'>v.</span> <span m='2972120'>So</span> <span
  m='2972250'>this</span> <span m='2972470'>is</span> <span
  m='2972620'>the</span> <span m='2972730'>number</span> <span
  m='2973080'>of</span> <span m='2973140'>neighbors</span> <span
  m='2973530'>that</span> <span m='2973650'>v</span> <span
  m='2973810'>has.</span> <span m='2975220'>And</span> <span
  m='2975440'>this</span> <span m='2975630'>is</span> <span
  m='2975740'>going</span> <span m='2975980'>to</span> <span
  m='2976110'>be?</span> <span m='2977606'>Answer?</span> </p><p><span
  m='2982336'>AUDIENCE: Two</span> <span m='2982809'>times the</span> <span
  m='2983282'>number of</span> <span m='2983755'>edges.</span> </p><p><span
  m='2984230'>PROFESSOR: Sorry</span> </p><p><span m='2984670'>AUDIENCE: Double
  the number</span> <span m='2985145'>of edges.</span> </p><p><span
  m='2985620'>PROFESSOR: Twice</span> <span m='2985940'>the</span> <span
  m='2986000'>number</span> <span m='2986230'>of</span> <span
  m='2986310'>edges</span> <span m='2987270'>for</span> <span
  m='2987960'>undirected</span> <span m='2988540'>graphs.</span> <span
  m='2988930'>It's</span> <span m='2989120'>going</span> <span
  m='2989240'>to</span> <span m='2989290'>be</span> <span m='2989400'>the</span>
  <span m='2989490'>number</span> <span m='2989820'>of</span> <span
  m='2989900'>edges</span> <span m='2990350'>for</span> <span
  m='2990710'>directed</span> <span m='2991060'>graphs.</span> <span
  m='2991330'>This</span> <span m='2991510'>is</span> <span
  m='2991630'>the</span> <span m='2991720'>Handshaking</span> <span
  m='2992410'>Lemma.</span> <span m='2992770'>If you</span> <span
  m='2992880'>don't</span> <span m='2993090'>remember</span> <span
  m='2993360'>the</span> <span m='2993420'>Handshaking</span> <span
  m='2993940'>Lemma,</span> <span m='2994670'>you</span> <span
  m='2994760'>should</span> <span m='2995040'>read</span> <span
  m='2995220'>the</span> <span m='2995300'>textbook.</span> <span
  m='2997330'>Six</span> <span m='2997650'>o</span> <span
  m='2997870'>four</span> <span m='2998200'>two</span> <span
  m='2998658'>stuff.</span> <span m='3003300'>Basically</span> <span
  m='3003690'>you</span> <span m='3003940'>visit</span> <span
  m='3004030'>every</span> <span m='3004280'>edge</span> <span
  m='3004450'>twice.</span> <span m='3006780'>For</span> <span
  m='3006920'>directed</span> <span m='3007220'>graphs,</span> <span
  m='3007480'>you</span> <span m='3007570'>visit</span> <span
  m='3007800'>every</span> <span m='3008040'>edge</span> <span
  m='3008190'>once.</span> <span m='3010870'>But</span> <span
  m='3011120'>it's</span> <span m='3011270'>order</span> <span
  m='3011550'>E.</span> <span m='3012380'>We</span> <span
  m='3012550'>also</span> <span m='3012800'>spend</span> <span
  m='3013100'>order</span> <span m='3013320'>V</span> <span
  m='3013590'>because</span> <span m='3013890'>we</span> <span
  m='3014020'>touch</span> <span m='3014300'>every</span> <span
  m='3014490'>vertex.</span> <span m='3015790'>So</span> <span
  m='3015860'>the</span> <span m='3015930'>total</span> <span
  m='3016220'>running</span> <span m='3016460'>time</span> <span
  m='3016730'>is</span> <span m='3016840'>order</span> <span
  m='3017160'>V</span> <span m='3017290'>plus</span> <span m='3017610'>E.</span>
  <span m='3018770'>In</span> <span m='3018930'>fact,</span> <span
  m='3020160'>the</span> <span m='3020170'>way</span> <span
  m='3020340'>this</span> <span m='3020560'>is</span> <span
  m='3020710'>going,</span> <span m='3022120'>you</span> <span
  m='3022310'>can</span> <span m='3022440'>be</span> <span m='3022630'>a</span>
  <span m='3022680'>little</span> <span m='3022910'>tighter</span> <span
  m='3023240'>and</span> <span m='3023340'>say</span> <span
  m='3023470'>it's</span> <span m='3023630'>order</span> <span
  m='3023980'>E.</span> <span m='3024940'>I</span> <span m='3025040'>just</span>
  <span m='3025200'>want</span> <span m='3025330'>to</span> <span
  m='3025380'>mention</span> <span m='3025860'>in</span> <span
  m='3026210'>reality--</span> <span m='3027010'>Sometimes</span> <span
  m='3027490'>you</span> <span m='3027590'>don't</span> <span
  m='3027740'>care</span> <span m='3027920'>about</span> <span
  m='3028170'>just</span> <span m='3028420'>what</span> <span
  m='3028510'>you</span> <span m='3028600'>can</span> <span
  m='3028700'>reach</span> <span m='3028930'>from</span> <span
  m='3029090'>s,</span> <span m='3029410'>you</span> <span
  m='3029520'>really</span> <span m='3029730'>want</span> <span
  m='3029880'>to</span> <span m='3029930'>visit</span> <span
  m='3030260'>every</span> <span m='3030520'>vertex.</span> <span
  m='3031410'>Then</span> <span m='3031550'>you</span> <span
  m='3031630'>need</span> <span m='3031810'>another</span> <span
  m='3032290'>outer</span> <span m='3032600'>loop</span> <span
  m='3033430'>that's</span> <span m='3033710'>iterating</span> <span
  m='3034370'>over</span> <span m='3034650'>all</span> <span
  m='3034730'>the</span> <span m='3034790'>vertices</span> <span
  m='3035270'>as</span> <span m='3035450'>potential</span> <span
  m='3036120'>choices</span> <span m='3036620'>for</span> <span
  m='3036800'>s.</span> <span m='3038170'>And</span> <span
  m='3038610'>you</span> <span m='3038950'>then</span> <span
  m='3039250'>can</span> <span m='3039380'>visit</span> <span
  m='3039640'>all</span> <span m='3039850'>the vertices</span> <span
  m='3040310'>in</span> <span m='3040360'>the</span> <span
  m='3040430'>entire</span> <span m='3040850'>graph</span> <span
  m='3041160'>even</span> <span m='3041410'>if</span> <span
  m='3041520'>it's</span> <span m='3041700'>disconnected.</span> <span
  m='3042930'>We'll</span> <span m='3043080'>talk</span> <span
  m='3043330'>more</span> <span m='3043530'>about</span> <span
  m='3043770'>that</span> <span m='3044140'>next</span> <span
  m='3044340'>class.</span> <span m='3045040'>That's</span> <span
  m='3045250'>it</span> <span m='3045400'>for</span> <span
  m='3045540'>BFS.</span> </p>
uid: b65b8bf0e34e8fb4a3d34c0f51f75d6c
type: courses
layout: video
---
