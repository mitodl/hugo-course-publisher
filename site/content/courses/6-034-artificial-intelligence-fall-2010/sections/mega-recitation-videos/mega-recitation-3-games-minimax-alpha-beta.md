---
about_this_resource_text: >-
  <p><strong>Description:</strong> This mega-recitation covers Problem 1 from
  Quiz 2, Fall 2007.  We start with a minimax search of the game tree, and then
  work an example using alpha-beta pruning. We also discuss static evaluation
  and progressive deepening (Problem 1-C, Fall 2008 Quiz 2).</p>
  <p><strong>Instructor:</strong> Mark Seifter</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: hM2EAvMkhtk
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Video-YouTube-Stream
    type: Video
    uid: d7e1ec7a67e6b0ef42bc9efb7f2e1f9c
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/mega-recitation-3-games-minimax/id765641080?i=194482898
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Video-iTunes U-MP4
    type: Video
    uid: 343bf972b5300de011dff90cf7d1c089
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_rec03_300k.mp4'
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5daaca39017845a7b23b579f7726fb04
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hM2EAvMkhtk/default.jpg'
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2cc6983aeee8a010cc09194e31290054
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: hM2EAvMkhtk
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 480478d65198cd768ab3a6aa47458eb3
  - id: hM2EAvMkhtk.srt
    parent_uid: b605863f59de0428fe1c8571132dfba5
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-3-games-minimax-alpha-beta/hM2EAvMkhtk.srt
    title: 3play caption file
    type: null
    uid: 5ac5495c27d588587d71371a42f133ee
  - id: hM2EAvMkhtk.pdf
    parent_uid: b605863f59de0428fe1c8571132dfba5
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-3-games-minimax-alpha-beta/hM2EAvMkhtk.pdf
    title: 3play pdf file
    type: null
    uid: e83131e9d1eddde294b6a86bb6580c55
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5fd78a59c5c6d4ba0ebdd44d155609ea
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b605863f59de0428fe1c8571132dfba5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8c727dfcbbe91a62638ab5a4051ebaf2
inline_embed_id: '17954351mega-recitation3:games,minimax,alpha-beta5029076'
parent_uid: 6be7704ddfe26b4e12703167347dd5bb
related_resources_text: "<p><a href=\"./resolveuid/152ed05f169a4db08df7ae2b5a81895a\" target=\"_blank\">Quiz 2, Fall 2007 (PDF)</a><br />\r\n<a href=\"./resolveuid/b44d4614a858950c7dfea5e00ed4b1f2\" target=\"_blank\">Quiz 2, Fall 2008 (PDF)</a></p>"
short_url: mega-recitation-3-games-minimax-alpha-beta
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-3-games-minimax-alpha-beta
title: 'Mega-Recitation 3: Games, Minimax, Alpha-Beta'
transcript: >-
  <p><span m='70'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1220'>is</span> <span m='1330'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10740'>make</span> <span m='10940'>a</span> <span
  m='10990'>donation</span> <span m='11680'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12810'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13930'>of</span> <span m='14040'>MIT</span>
  <span m='14470'>courses,</span> <span m='15570'>visit</span> <span
  m='15800'>MIT</span> <span m='16219'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17430'>ocw.mit.edu.</span> </p><p><span
  m='21066'>PROFESSOR: Today</span> <span m='21550'>we're</span> <span
  m='21650'>going</span> <span m='21850'>to</span> <span m='21900'>be</span>
  <span m='22020'>talking</span> <span m='22430'>about</span> <span
  m='23030'>games.</span> <span m='24390'>And</span> <span m='25890'>I</span>
  <span m='26080'>know</span> <span m='26260'>you</span> <span
  m='26430'>guys</span> <span m='27490'>as</span> <span m='27630'>well</span>
  <span m='28060'>as</span> <span m='28280'>I</span> <span m='28330'>hope</span>
  <span m='28580'>I</span> <span m='28680'>do.</span> <span m='29840'>The</span>
  <span m='29860'>main</span> <span m='30190'>thing</span> <span m='30430'>that
  you</span> <span m='30740'>guys</span> <span m='30780'>want</span> <span
  m='30950'>to</span> <span m='31020'>talk</span> <span m='31250'>about
  with</span> <span m='31660'>games</span> <span m='32140'>is</span> <span
  m='32259'>how</span> <span m='32430'>to</span> <span m='32520'>do</span> <span
  m='32720'>that</span> <span m='33000'>alpha-beta</span> <span
  m='33640'>thing.</span> <span m='34330'>Because</span> <span
  m='34960'>it's</span> <span m='35130'>pretty</span> <span
  m='35360'>confusing.</span> <span m='36300'>And</span> <span
  m='37750'>it's</span> <span m='38170'>easy</span> <span m='38410'>to</span>
  <span m='38480'>get</span> <span m='38950'>lost</span> <span
  m='39310'>in</span> <span m='39370'>a</span> <span m='39430'>corner</span>
  <span m='39900'>or</span> <span m='39960'>something.</span> <span
  m='40490'>Whereas</span> <span m='40890'>doing</span> <span
  m='41070'>the</span> <span m='41180'>regular</span> <span
  m='41570'>minimax,</span> <span m='42990'>in</span> <span m='43110'>my</span>
  <span m='43270'>experience,</span> <span m='43820'>most</span> <span
  m='44080'>6034</span> <span m='44680'>students</span> <span
  m='45010'>can</span> <span m='45190'>do</span> <span m='45320'>that.</span>
  <span m='45590'>And</span> <span m='45860'>they</span> <span
  m='45990'>do</span> <span m='46150'>it</span> <span m='46270'>right</span>
  <span m='47000'>pretty</span> <span m='47200'>much</span> <span
  m='47440'>all</span> <span m='47600'>the</span> <span m='47700'>time.</span>
  </p><p><span m='48450'>However,</span> <span m='49110'>we're</span> <span
  m='49290'>going</span> <span m='49440'>to</span> <span m='49500'>focus</span>
  <span m='49920'>on</span> <span m='50380'>all</span> <span
  m='50640'>the</span> <span m='50710'>different</span> <span
  m='51000'>components</span> <span m='51560'>of</span> <span
  m='51690'>games.</span> <span m='52940'>And</span> <span m='53350'>I</span>
  <span m='53500'>put</span> <span m='53680'>up</span> <span
  m='53850'>two</span> <span m='54080'>provocative</span> <span
  m='55430'>silver</span> <span m='56000'>star</span> <span
  m='56450'>ideas</span> <span m='56910'>up</span> <span m='57060'>on</span>
  <span m='57190'>the</span> <span m='57260'>board,</span> <span
  m='57750'>which</span> <span m='59270'>will</span> <span m='59440'>come</span>
  <span m='59610'>into</span> <span m='59770'>play</span> <span
  m='60010'>here.</span> <span m='60370'>The</span> <span m='60470'>Snow</span>
  <span m='60830'>White</span> <span m='61100'>principle</span> <span
  m='61720'>is</span> <span m='62240'>a</span> <span m='62330'>new</span> <span
  m='62550'>name.</span> <span m='62840'>And</span> <span m='63130'>it</span>
  <span m='63420'>has</span> <span m='63590'>never</span> <span
  m='63840'>been</span> <span m='63980'>revealed</span> <span
  m='64470'>until</span> <span m='64840'>today.</span> <span
  m='65489'>Because</span> <span m='65720'>I</span> <span m='65800'>made</span>
  <span m='66020'>up</span> <span m='66130'>name</span> <span
  m='66590'>recently.</span> <span m='68050'>So</span> <span
  m='68540'>you</span> <span m='68730'>will</span> <span m='68830'>be</span>
  <span m='68920'>the</span> <span m='69020'>first</span> <span
  m='69370'>people</span> <span m='69770'>to</span> <span m='69870'>hear</span>
  <span m='70160'>it</span> <span m='70450'>and</span> <span
  m='70650'>decide</span> <span m='71000'>if</span> <span m='71100'>it</span>
  <span m='71170'>works</span> <span m='71430'>better</span> <span
  m='71650'>than</span> <span m='71900'>the</span> <span m='72360'>term</span>
  <span m='72535'>"grandfather</span> <span m='73310'>clause"</span> <span
  m='73790'>for</span> <span m='73930'>the</span> <span m='74030'>thing</span>
  <span m='74190'>that</span> <span m='74280'>I'm</span> <span
  m='74380'>trying</span> <span m='74580'>to</span> <span
  m='74660'>describe.</span> <span m='75630'>Because</span> <span
  m='75950'>most</span> <span m='76230'>grandfathers</span> <span
  m='77690'>don't</span> <span m='77960'>eat</span> <span m='78110'>their</span>
  <span m='78250'>children.</span> </p><p><span m='79420'>So</span> <span
  m='82430'>here</span> <span m='82890'>we've</span> <span m='83060'>got</span>
  <span m='83320'>a</span> <span m='83380'>beautiful</span> <span
  m='83840'>game</span> <span m='84150'>tree.</span> <span m='85300'>It</span>
  <span m='85370'>has</span> <span m='85700'>nodes</span> <span
  m='86780'>from</span> <span m='87140'>A</span> <span m='87440'>through</span>
  <span m='87740'>R.</span> <span m='89470'>This</span> <span
  m='89970'>is</span> <span m='90100'>our</span> <span m='90230'>standard</span>
  <span m='90690'>game</span> <span m='91060'>tree</span> <span
  m='91320'>from</span> <span m='91470'>6034.</span> <span
  m='93250'>We've</span> <span m='93490'>got</span> <span m='93860'>a</span>
  <span m='93940'>maximizer</span> <span m='95110'>up</span> <span
  m='95350'>at</span> <span m='95470'>the</span> <span m='95590'>top</span>
  <span m='96060'>who's</span> <span m='96280'>trying</span> <span
  m='96520'>to</span> <span m='96560'>get</span> <span m='96690'>the</span>
  <span m='96760'>highest</span> <span m='97130'>score</span> <span
  m='97400'>possible.</span> <span m='97880'>The</span> <span
  m='98360'>minimizer</span> <span m='99480'>is</span> <span
  m='100460'>her</span> <span m='100650'>opponent.</span> <span
  m='101770'>And</span> <span m='102080'>the</span> <span
  m='102130'>minimizer</span> <span m='102790'>is</span> <span
  m='102980'>trying</span> <span m='103320'>to</span> <span
  m='103410'>get</span> <span m='103790'>to</span> <span m='103890'>the</span>
  <span m='104000'>lowest</span> <span m='104230'>score</span> <span
  m='104530'>possible.</span> <span m='105930'>And</span> <span
  m='107120'>it's</span> <span m='107300'>really</span> <span
  m='107650'>unclear</span> <span m='108160'>who</span> <span
  m='108330'>wins</span> <span m='108630'>or</span> <span
  m='108700'>loses</span> <span m='109130'>at</span> <span
  m='109210'>each</span> <span m='109420'>point.</span> <span
  m='109660'>They're</span> <span m='109770'>just</span> <span
  m='110010'>trying</span> <span m='110250'>to</span> <span
  m='110290'>get</span> <span m='110430'>it</span> <span m='110540'>to</span>
  <span m='110740'>the</span> <span m='110870'>highest</span> <span
  m='111190'>or the</span> <span m='111270'>lowest</span> <span
  m='111680'>score.</span> </p><p><span m='114140'>All right,</span> <span
  m='114760'>so</span> <span m='115370'>let's</span> <span m='115630'>do</span>
  <span m='115750'>a</span> <span m='115830'>refresher.</span> <span
  m='116660'>Hopefully</span> <span m='117290'>the</span> <span
  m='117390'>quiz</span> <span m='117800'>didn't</span> <span
  m='118180'>put</span> <span m='118410'>people</span> <span
  m='118650'>into</span> <span m='118720'>such</span> <span
  m='119100'>panic</span> <span m='119430'>modes that</span> <span
  m='119750'>they</span> <span m='119840'>forgot</span> <span
  m='120190'>Monday's</span> <span m='120560'>lecture.</span> <span
  m='121180'>So</span> <span m='121800'>let's</span> <span
  m='122040'>make</span> <span m='122200'>sure</span> <span
  m='122370'>that</span> <span m='122490'>we</span> <span m='122600'>can</span>
  <span m='122850'>do</span> <span m='123710'>regular</span> <span
  m='124880'>minimax</span> <span m='126130'>algorithm</span> <span
  m='127600'>on</span> <span m='127790'>this</span> <span m='127970'>tree</span>
  <span m='128639'>and</span> <span m='128820'>figure</span> <span
  m='129050'>out</span> <span m='129130'>the</span> <span
  m='129190'>minimax</span> <span m='129639'>value</span> <span
  m='130030'>at</span> <span m='130259'>A.</span> </p><p><span
  m='131270'>So</span> <span m='132190'>let's</span> <span m='132400'>see</span>
  <span m='132490'>how</span> <span m='132640'>that</span> <span
  m='132790'>works.</span> <span m='133900'>All</span> <span
  m='134310'>right,</span> <span m='135440'>as</span> <span
  m='135600'>you</span> <span m='135660'>guys</span> <span
  m='135860'>remember,</span> <span m='136540'>the</span> <span
  m='137280'>game</span> <span m='138100'>search</span> <span
  m='139010'>when</span> <span m='139180'>using</span> <span
  m='139560'>regular</span> <span m='139950'>minimax</span> <span
  m='141060'>is</span> <span m='141540'>essentially</span> <span
  m='142320'>a</span> <span m='142420'>depth</span> <span
  m='142920'>first</span> <span m='143240'>search.</span> <span
  m='144550'>And</span> <span m='144720'>at</span> <span m='144820'>each</span>
  <span m='145100'>level,</span> <span m='145680'>it</span> <span
  m='146690'>chooses</span> <span m='147570'>between</span> <span
  m='147825'>all</span> <span m='148080'>of</span> <span m='148390'>the</span>
  <span m='148540'>children</span> <span m='149770'>whichever</span> <span
  m='150180'>value</span> <span m='150830'>that</span> <span
  m='151650'>the</span> <span m='151770'>parent</span> <span
  m='152150'>wants.</span> <span m='152510'>So</span> <span
  m='152660'>here</span> <span m='152900'>after</span> <span m='153320'>it
  would</span> <span m='153800'>choose the</span> <span
  m='154020'>maximum</span> <span m='154560'>of</span> <span m='154720'>K</span>
  <span m='154960'>and</span> <span m='155100'>L,</span> <span
  m='155480'>for</span> <span m='155590'>instance.</span> <span
  m='156330'>But</span> <span m='156460'>that's</span> <span
  m='156680'>getting</span> <span m='156850'>ahead</span> <span
  m='157020'>of</span> <span m='157100'>ourselves.</span> <span
  m='157570'>Because</span> <span m='157880'>it's a</span> <span
  m='157980'>depth</span> <span m='158210'>first</span> <span
  m='158440'>search.</span> <span m='158730'>So</span> <span m='159050'>we
  best</span> <span m='159420'>start</span> <span m='159680'>at</span> <span
  m='159760'>the</span> <span m='159890'>top.</span> </p><p><span
  m='160900'>I'll</span> <span m='161230'>help</span> <span
  m='161410'>you</span> <span m='161480'>guys</span> <span m='161660'>up</span>
  <span m='161840'>for</span> <span m='161920'>a</span> <span
  m='161990'>while.</span> <span m='162290'>So</span> <span
  m='162440'>we're</span> <span m='162530'>doing</span> <span
  m='162860'>A.</span> <span m='163115'>We need</span> <span
  m='163370'>the</span> <span m='163460'>maximum</span> <span
  m='163880'>of</span> <span m='164240'>B, C, D,</span> <span
  m='164600'>depth</span> <span m='164870'>first</span> <span
  m='165130'>search.</span> <span m='165770'>We</span> <span
  m='165850'>go</span> <span m='165990'>to</span> <span m='166050'>B.</span>
  <span m='167080'>We're</span> <span m='167190'>looking</span> <span
  m='167490'>for</span> <span m='167600'>the</span> <span
  m='167680'>minimum</span> <span m='168120'>of</span> <span m='168330'>E</span>
  <span m='168640'>and F.</span> <span m='169760'>So</span> <span
  m='170130'>having</span> <span m='170460'>looked</span> <span
  m='170660'>at</span> <span m='170890'>E,</span> <span m='172600'>our</span>
  <span m='172770'>current</span> <span m='173080'>minimum</span> <span
  m='174410'>of</span> <span m='175140'>E</span> <span m='175290'>and</span>
  <span m='175380'>F</span> <span m='175980'>is</span> <span
  m='176230'>just</span> <span m='176590'>2</span> <span m='178050'>for</span>
  <span m='178220'>the</span> <span m='178300'>moment.</span> <span
  m='178780'>So</span> <span m='179140'>this</span> <span m='179320'>is</span>
  <span m='179440'>going</span> <span m='179560'>to</span> <span
  m='179600'>be</span> <span m='179840'>less</span> <span m='180240'>than</span>
  <span m='180590'>or</span> <span m='181060'>equal</span> <span
  m='181350'>to</span> <span m='181530'>2.</span> </p><p><span
  m='184040'>All</span> <span m='184130'>right,</span> <span
  m='184330'>then</span> <span m='184460'>we</span> <span m='184550'>go</span>
  <span m='184660'>down to</span> <span m='184940'>F, which</span> <span
  m='185400'>is</span> <span m='185490'>a</span> <span
  m='185540'>maximizer.</span> <span m='186690'>And its</span> <span
  m='187140'>children</span> <span m='187560'>are K</span> <span m='187870'>and
  L.</span> <span m='188890'>So</span> <span m='189430'>now</span> <span
  m='189800'>I'm going to</span> <span m='189950'>start making</span> <span
  m='190300'>you</span> <span m='190410'>guys</span> <span m='190710'>do</span>
  <span m='190890'>stuff.</span> <span m='191650'>So</span> <span
  m='193350'>what</span> <span m='193490'>do</span> <span m='193530'>you</span>
  <span m='193610'>think?</span> <span m='193960'>What</span> <span
  m='194150'>is</span> <span m='194270'>going</span> <span m='194350'>to
  be</span> <span m='194610'>the</span> <span m='195020'>minimax</span> <span
  m='195400'>value</span> <span m='195680'>at F?</span> <span
  m='197620'>The</span> <span m='197720'>minimax</span> <span
  m='199280'>value</span> <span m='199570'>at</span> <span m='199720'>F,</span>
  <span m='199980'>what will that</span> <span m='200240'>be?</span>
  </p><p><span m='201082'>AUDIENCE: [INAUDIBLE]</span> </p><p><span
  m='205150'>PROFESSOR: So</span> <span m='205650'>that</span> <span
  m='205970'>level</span> <span m='206380'>is</span> <span m='206840'>a</span>
  <span m='207260'>maximizer--</span> <span m='208060'>max,</span> <span
  m='208440'>min,</span> <span m='208740'>max.</span> <span m='209090'>F</span>
  <span m='209320'>is</span> <span m='209460'>a</span> <span
  m='209510'>maximizer.</span> <span m='210280'>K and</span> <span
  m='210750'>L</span> <span m='211290'>themselves</span> <span
  m='211780'>are</span> <span m='211850'>minimizers.</span> <span
  m='212420'>But</span> <span m='212690'>they're</span> <span
  m='212900'>pretty</span> <span m='213170'>impotent</span> <span
  m='213620'>minimizers.</span> <span m='214200'>Because</span> <span
  m='214520'>they</span> <span m='214610'>don't</span> <span
  m='214820'>get</span> <span m='214990'>to</span> <span
  m='215090'>choose.</span> <span m='215590'>They</span> <span
  m='215660'>just</span> <span m='215910'>have</span> <span m='216020'>to</span>
  <span m='216220'>do K</span> <span m='216440'>or</span> <span
  m='216910'>L.</span> <span m='217235'>So</span> <span m='217560'>the</span>
  <span m='218540'>minimax</span> <span m='218890'>value</span> <span
  m='219230'>is</span> <span m='219400'>three.</span> <span
  m='219950'>And</span> <span m='220210'>yeah, the</span> <span m='220450'>path
  it</span> <span m='220910'>would</span> <span m='221070'>like</span> <span
  m='221280'>to</span> <span m='221370'>go is</span> <span m='221770'>K.</span>
  <span m='222660'>So</span> <span m='222870'>we'll</span> <span
  m='222980'>say</span> <span m='223150'>that the</span> <span
  m='223280'>minimax</span> <span m='223750'>value</span> <span
  m='224170'>here</span> <span m='224650'>is</span> <span m='225260'>3.</span>
  <span m='225510'>It's</span> <span m='225690'>in</span> <span
  m='225790'>fact</span> <span m='226010'>exactly</span> <span
  m='226460'>equal</span> <span m='226750'>to</span> <span m='226830'>3.</span>
  <span m='228680'>So if</span> <span m='228920'>this</span> <span
  m='229160'>is</span> <span m='229340'>3</span> <span m='230390'>and</span>
  <span m='230560'>this</span> <span m='230700'>is</span> <span
  m='230880'>2,</span> <span m='232250'>then</span> <span
  m='232670'>everyone,</span> <span m='233410'>we</span> <span
  m='233570'>know</span> <span m='233820'>that</span> <span
  m='233930'>the</span> <span m='233990'>value</span> <span m='234240'>of</span>
  <span m='234300'>B</span> <span m='234520'>is?</span> </p><p><span
  m='235476'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='237710'>PROFESSOR:
  I</span> <span m='237850'>hear</span> <span m='238080'>3</span> <span
  m='238360'>and</span> <span m='238550'>2.</span> <span m='238960'>Which</span>
  <span m='239150'>one is</span> <span m='239420'>it?</span> </p><p><span
  m='240326'>AUDIENCE: 2.</span> </p><p><span m='240780'>PROFESSOR: 2,
  that's</span> <span m='240980'>right.</span> <span m='243150'>So</span> <span
  m='243300'>the</span> <span m='243360'>value</span> <span
  m='243650'>here</span> <span m='243900'>is</span> <span m='244070'>2.</span>
  <span m='244600'>Great,</span> <span m='245170'>let's</span> <span
  m='245310'>go</span> <span m='245410'>down</span> <span m='245780'>into
  this</span> <span m='245990'>branch.</span> <span m='246790'>So</span> <span
  m='247020'>C</span> <span m='247440'>is</span> <span m='247540'>going</span>
  <span m='247650'>to</span> <span m='247690'>be</span> <span
  m='247750'>the</span> <span m='247840'>minimum</span> <span
  m='248270'>of</span> <span m='248500'>G</span> <span m='248890'>and</span>
  <span m='249160'>6.</span> <span m='249580'>But</span> <span
  m='249810'>we</span> <span m='249910'>don't</span> <span m='250110'>see</span>
  <span m='250230'>that</span> <span m='250430'>yet. Because</span> <span
  m='250590'>we're</span> <span m='250830'>doing a</span> <span
  m='250970'>depth</span> <span m='251170'>first</span> <span
  m='251270'>search.</span> <span m='251540'>It's</span> <span
  m='251650'>going</span> <span m='251780'>to</span> <span m='251820'>be</span>
  <span m='251930'>the</span> <span m='252020'>minimum</span> <span
  m='252290'>of</span> <span m='252500'>G.</span> <span m='253840'>Now</span>
  <span m='254010'>we</span> <span m='254090'>need</span> <span
  m='254220'>the</span> <span m='254280'>maximum</span> <span
  m='254590'>of</span> <span m='255030'>M and</span> <span m='255250'>N.</span>
  <span m='256540'>We're going to</span> <span m='256690'>need</span> <span
  m='256950'>the</span> <span m='257060'>minimum.</span> <span
  m='258160'>M</span> <span m='258430'>is</span> <span m='258589'>the</span>
  <span m='258670'>minimum</span> <span m='259170'>of</span> <span
  m='259310'>Q</span> <span m='259570'>and</span> <span m='259700'>R.</span>
  <span m='260740'>So</span> <span m='261450'>let's</span> <span
  m='262540'>switch</span> <span m='262900'>sides.</span> <span
  m='263530'>The</span> <span m='263870'>minimum</span> <span m='264230'>of
  Q</span> <span m='264480'>and</span> <span m='264570'>R</span> <span
  m='264850'>is?</span> </p><p><span m='267100'>AUDIENCE: 1.</span> </p><p><span
  m='268440'>PROFESSOR: Let's</span> <span m='268710'>see.</span> <span
  m='269180'>That's</span> <span m='269450'>right,</span> <span m='269890'>it's
  1.</span> <span m='270570'>So</span> <span m='270860'>M</span> <span
  m='271080'>has</span> <span m='271220'>a</span> <span m='271260'>value</span>
  <span m='271530'>of</span> <span m='271650'>1.</span> <span
  m='272170'>But</span> <span m='272860'>I'm</span> <span
  m='273110'>going</span> <span m='273200'>to</span> <span
  m='273260'>stay</span> <span m='273510'>over</span> <span
  m='273700'>here.</span> <span m='274240'>Because</span> <span
  m='274490'>M</span> <span m='274750'>has</span> <span m='274890'>a</span>
  <span m='274920'>value</span> <span m='275160'>of</span> <span
  m='275280'>1.</span> <span m='276140'>Knowing</span> <span
  m='276470'>that,</span> <span m='276900'>then</span> <span
  m='277170'>we</span> <span m='277260'>know</span> <span m='277400'>that</span>
  <span m='277540'>G has</span> <span m='278040'>a</span> <span
  m='278070'>value</span> <span m='278420'>of?</span> </p><p><span
  m='279130'>AUDIENCE: 7</span> </p><p><span m='279600'>PROFESSOR: That's</span>
  <span m='279820'>right.</span> <span m='280230'>7</span> <span
  m='280550'>is</span> <span m='280660'>higher</span> <span
  m='280870'>than</span> <span m='281040'>1.</span> <span m='281930'>And</span>
  <span m='282120'>since</span> <span m='282350'>G</span> <span
  m='282570'>is</span> <span m='282700'>a</span> <span m='282760'>7,</span>
  <span m='283730'>we</span> <span m='283990'>now</span> <span
  m='284240'>know</span> <span m='284500'>going</span> <span
  m='284720'>up</span> <span m='284840'>to</span> <span m='284950'>C</span>
  <span m='285550'>that</span> <span m='285770'>C</span> <span
  m='286030'>has</span> <span m='286260'>a</span> <span m='286290'>value</span>
  <span m='286610'>of?</span> </p><p><span m='287850'>AUDIENCE: 6.</span>
  </p><p><span m='288850'>PROFESSOR: Yes,</span> <span m='289420'>C</span> <span
  m='289690'>has</span> <span m='290020'>a</span> <span m='290240'>value</span>
  <span m='290510'>of</span> <span m='290580'>6.</span> <span
  m='290830'>That's</span> <span m='290960'>the</span> <span
  m='291040'>minimum</span> <span m='291420'>6</span> <span
  m='291660'>and</span> <span m='291810'>7.</span> <span m='292710'>So</span>
  <span m='293330'>now</span> <span m='293560'>I'm</span> <span
  m='293670'>going</span> <span m='293780'>to</span> <span m='293820'>go</span>
  <span m='293930'>back</span> <span m='294120'>down.</span> <span
  m='294600'>Because</span> <span m='295750'>we've</span> <span
  m='295990'>done</span> <span m='296250'>one of</span> <span
  m='296330'>the</span> <span m='296420'>other</span> <span
  m='296620'>sub-trees.</span> <span m='297370'>This</span> <span
  m='297550'>is</span> <span m='297620'>a 6.</span> <span m='298751'>All</span>
  <span m='299130'>right,</span> <span m='299510'>great.</span> <span
  m='299950'>Now</span> <span m='300160'>we're</span> <span
  m='300240'>going</span> <span m='300350'>to</span> <span m='300390'>go</span>
  <span m='300500'>down</span> <span m='300700'>to D.</span> <span
  m='300810'>Hopefully</span> <span m='301750'>it</span> <span
  m='302220'>won't</span> <span m='302440'>be</span> <span m='302580'>too</span>
  <span m='302750'>bad.</span> </p><p><span m='303900'>These</span> <span
  m='304130'>things</span> <span m='304370'>usually</span> <span
  m='304910'>aren't</span> <span m='305280'>terrible.</span> <span
  m='305760'>Because</span> <span m='306060'>they're</span> <span
  m='306180'>made</span> <span m='306460'>to</span> <span m='306540'>be</span>
  <span m='306680'>pruned</span> <span m='307000'>a</span> <span
  m='307050'>lot</span> <span m='307380'>in</span> <span
  m='307470'>alpha-beta.</span> <span m='308710'>So</span> <span
  m='308960'>let's</span> <span m='309150'>see,</span> <span
  m='309245'>in</span> <span m='309340'>D,</span> <span m='309950'>we</span>
  <span m='310070'>go</span> <span m='310190'>down</span> <span
  m='310290'>to</span> <span m='310390'>I.</span> <span m='310640'>And</span>
  <span m='310760'>that's</span> <span m='310900'>just</span> <span
  m='311000'>a</span> <span m='311090'>1.</span> <span m='312350'>We</span>
  <span m='312490'>go</span> <span m='312610'>down</span> <span
  m='312810'>to</span> <span m='312930'>J.</span> <span m='313980'>And</span>
  <span m='314420'>let's</span> <span m='314580'>see,</span> <span
  m='314680'>what's</span> <span m='314880'>the</span> <span
  m='314980'>minimax</span> <span m='315110'>value</span> <span
  m='315220'>of</span> <span m='315590'>J?</span> </p><p><span
  m='317040'>AUDIENCE: It's 20.</span> </p><p><span m='318000'>PROFESSOR:
  That's</span> <span m='318480'>right.</span> <span m='318860'>20</span> <span
  m='319120'>is the</span> <span m='319200'>maximum of</span> <span
  m='319630'>20</span> <span m='319970'>and</span> <span m='320230'>2.</span>
  <span m='321120'>Great,</span> <span m='321810'>so</span> <span
  m='322040'>what's</span> <span m='322140'>the</span> <span
  m='322380'>minimax</span> <span m='322830'>value of D?</span> <span
  m='324780'>Everyone</span> <span m='325140'>said</span> <span
  m='325420'>it--</span> <span m='325540'>1.</span> <span m='325990'>All
  right,</span> <span m='326160'>so</span> <span m='326320'>what's</span> <span
  m='326460'>the</span> <span m='326650'>minimax</span> <span m='326920'>value
  at A?</span> </p><p><span m='327946'>AUDIENCE: 6.</span> </p><p><span
  m='329810'>PROFESSOR: 6</span> <span m='330060'>is</span> <span
  m='330190'>right.</span> <span m='330490'>6</span> <span m='330750'>is</span>
  <span m='330850'>higher</span> <span m='331070'>than</span> <span
  m='331260'>2.</span> <span m='331660'>It's</span> <span m='331840'>higher
  than</span> <span m='332190'>1.</span> <span m='332740'>Our</span> <span
  m='332850'>value</span> <span m='333170'>is</span> <span m='333280'>6.</span>
  <span m='334020'>And</span> <span m='334220'>our</span> <span
  m='334300'>path</span> <span m='334730'>is--</span> <span
  m='335090'>everyone--</span> <span m='335620'>A,</span> <span
  m='336305'>C,</span> <span m='337538'>H.</span> <span m='339060'>That's</span>
  <span m='339350'>it.</span> <span m='341960'>Great,</span> <span
  m='343980'>is</span> <span m='344160'>everyone</span> <span
  m='344320'>good</span> <span m='344460'>with</span> <span
  m='344590'>minimax?</span> <span m='346360'>I</span> <span
  m='346500'>know</span> <span m='346720'>that</span> <span
  m='346900'>usually</span> <span m='347210'>a</span> <span
  m='347280'>lot</span> <span m='347500'>of</span> <span
  m='347600'>people</span> <span m='347890'>are. There's</span> <span
  m='348100'>usually</span> <span m='348520'>a few</span> <span
  m='348730'>people who</span> <span m='349160'>aren't.</span> <span
  m='349510'>So</span> <span m='349680'>if</span> <span m='349760'>you're</span>
  <span m='349890'>one</span> <span m='350020'>of</span> <span
  m='350100'>the</span> <span m='350200'>people</span> <span
  m='350660'>who</span> <span m='350950'>would</span> <span
  m='351070'>like</span> <span m='351230'>some</span> <span
  m='351340'>clarifications</span> <span m='351570'>on</span> <span
  m='351970'>minimax,</span> <span m='353270'>raise</span> <span
  m='353470'>your</span> <span m='353600'>hand.</span> <span
  m='354150'>There's</span> <span m='354450'>probably a few</span> <span
  m='354930'>other</span> <span m='355120'>people who</span> <span
  m='355510'>would</span> <span m='355630'>like</span> <span
  m='355820'>some</span> <span m='356040'>too.</span> <span
  m='358680'>OK.</span> </p><p><span m='360536'>AUDIENCE: When</span> <span
  m='361029'>you're</span> <span m='361522'>doing</span> <span
  m='362015'>this</span> <span m='362180'>minimax,</span> <span
  m='363220'>whatever values</span> <span m='363350'>are not</span> <span
  m='363836'>showing,</span> <span m='364808'>you keep</span> <span
  m='365294'>going down</span> <span m='365780'>the</span> <span
  m='366266'>tree</span> <span m='366752'>and</span> <span m='367238'>then
  just</span> <span m='367724'>look at</span> <span m='368210'>whether you're
  trying to</span> <span m='368696'>find the</span> <span
  m='369182'>minimax.</span> <span m='369670'>And just</span> <span
  m='369805'>whatever</span> <span m='369940'>values</span> <span m='370215'>you
  get you go back</span> <span m='370490'>up</span> <span m='371630'>one?</span>
  </p><p><span m='372380'>PROFESSOR: Yes.</span> <span m='374710'>The</span>
  <span m='374920'>question</span> <span m='375390'>was,</span> <span
  m='376220'>when</span> <span m='376590'>you</span> <span m='376750'>go</span>
  <span m='377980'>to</span> <span m='378070'>do</span> <span
  m='378180'>the</span> <span m='378260'>minimax--</span> <span
  m='379770'>and</span> <span m='380100'>let's</span> <span
  m='380340'>say</span> <span m='380490'>you</span> <span m='380670'>got</span>
  <span m='380940'>E</span> <span m='381150'>was</span> <span
  m='381380'>2,</span> <span m='381750'>and</span> <span m='381830'>you</span>
  <span m='381930'>know</span> <span m='382080'>that</span> <span
  m='382170'>B</span> <span m='382370'>is</span> <span m='382490'>going</span>
  <span m='382590'>to</span> <span m='382630'>be</span> <span
  m='382720'>less</span> <span m='382970'>than</span> <span m='383070'>or</span>
  <span m='383120'>equal</span> <span m='383310'>to</span> <span
  m='383420'>2,</span> <span m='383640'>but</span> <span m='383770'>you</span>
  <span m='383870'>don't</span> <span m='384110'>know</span> <span
  m='384300'>F</span> <span m='384530'>yet.</span> <span m='385160'>The</span>
  <span m='385260'>question</span> <span m='385610'>is,</span> <span
  m='385770'>do</span> <span m='385860'>you</span> <span m='385970'>go</span>
  <span m='386150'>down</span> <span m='386370'>the</span> <span
  m='386460'>tree,</span> <span m='387230'>find</span> <span
  m='387510'>the</span> <span m='387560'>value</span> <span m='387880'>at</span>
  <span m='387920'>F,</span> <span m='388350'>and</span> <span
  m='388490'>then</span> <span m='388620'>go</span> <span m='388750'>back</span>
  <span m='388980'>up?</span> <span m='389460'>The</span> <span
  m='389550'>answer</span> <span m='389780'>is</span> <span
  m='390440'>yes.</span> </p><p><span m='391270'>By</span> <span
  m='391470'>default,</span> <span m='391990'>we</span> <span
  m='392110'>use</span> <span m='392310'>a</span> <span m='392380'>depth</span>
  <span m='392710'>first</span> <span m='392970'>search.</span> <span
  m='393300'>However,</span> <span m='393780'>in</span> <span
  m='394070'>non</span> <span m='394400'>alpha-beta</span> <span
  m='394990'>version,</span> <span m='395370'>just</span> <span
  m='395590'>regular</span> <span m='395930'>minimax,</span> <span
  m='396550'>it</span> <span m='396990'>turns</span> <span m='397500'>out</span>
  <span m='398320'>it</span> <span m='398510'>probably</span> <span
  m='399040'>doesn't</span> <span m='399360'>matter</span> <span
  m='399670'>what</span> <span m='399880'>you</span> <span m='400030'>do.</span>
  <span m='401140'>I</span> <span m='401270'>suggested</span> <span
  m='401600'>doing a</span> <span m='401930'>depth first</span> <span
  m='402110'>search</span> <span m='402540'>to</span> <span
  m='402620'>get</span> <span m='402800'>yourself</span> <span
  m='403150'>in</span> <span m='403240'>the</span> <span
  m='403300'>mindset</span> <span m='403950'>of</span> <span
  m='404070'>alpha-beta.</span> <span m='404630'>Because</span> <span
  m='404910'>order</span> <span m='405200'>is</span> <span
  m='405390'>very,</span> <span m='406140'>very</span> <span
  m='406380'>important in</span> <span m='406860'>alpha-beta.</span>
  </p><p><span m='409290'>But</span> <span m='409450'>here,</span> <span
  m='410360'>I</span> <span m='410480'>don't</span> <span
  m='410620'>know,</span> <span m='410750'>you</span> <span
  m='410880'>could</span> <span m='411030'>do</span> <span
  m='411150'>some</span> <span m='411420'>weird</span> <span
  m='411810'>bottom</span> <span m='412150'>up</span> <span
  m='412650'>search.</span> <span m='413110'>Whatever</span> <span
  m='413870'>you</span> <span m='414050'>want,</span> <span
  m='414280'>it's</span> <span m='414470'>going</span> <span
  m='414600'>to</span> <span m='414650'>give</span> <span m='414800'>you</span>
  <span m='414890'>the</span> <span m='415010'>right</span> <span
  m='415240'>answer</span> <span m='416010'>unless</span> <span
  m='416130'>it</span> <span m='416340'>asks</span> <span m='416690'>what</span>
  <span m='416880'>order</span> <span m='417160'>they</span> <span
  m='417380'>evaluated.</span> <span m='418380'>But</span> <span
  m='418530'>here's</span> <span m='418740'>a</span> <span
  m='418780'>hint.</span> <span m='419280'>The</span> <span
  m='419360'>order</span> <span m='419570'>they're</span> <span
  m='419760'>evaluated</span> <span m='420560'>in</span> <span
  m='422380'>is</span> <span m='422870'>depth</span> <span
  m='423100'>first</span> <span m='423200'>search</span> <span
  m='423490'>order.</span> <span m='423790'>So</span> <span m='424070'>without
  even</span> <span m='424440'>doing</span> <span m='424760'>anything,</span>
  <span m='425770'>E,</span> <span m='426152'>K,</span> <span
  m='426534'>L,</span> <span m='427300'>Q,</span> <span m='427660'>R,</span>
  <span m='428020'>N,</span> <span m='428400'>H,</span> <span
  m='428793'>I,</span> <span m='429186'>O,</span> <span m='429580'>P</span>
  <span m='429620'>are</span> <span m='429660'>the</span> <span
  m='429780'>order</span> <span m='430140'>of</span> <span
  m='430205'>starting</span> <span m='430270'>evaluation</span> <span
  m='431050'>in</span> <span m='432270'>this</span> <span
  m='432585'>tree.</span> </p><p><span m='433740'>AUDIENCE: [INAUDIBLE]</span>
  </p><p><span m='440330'>PROFESSOR: So</span> <span m='440880'>the</span> <span
  m='440960'>question</span> <span m='441350'>is,</span> <span
  m='442650'>nodes</span> <span m='442940'>like</span> <span m='443180'>M</span>
  <span m='443440'>and</span> <span m='443620'>G</span> <span
  m='443950'>we</span> <span m='444060'>don't</span> <span
  m='444200'>have</span> <span m='444310'>to</span> <span m='444400'>put</span>
  <span m='444610'>values</span> <span m='445070'>next to.</span> <span
  m='446130'>Technically,</span> <span m='446660'>if</span> <span
  m='446780'>we</span> <span m='446860'>were</span> <span
  m='446980'>doing</span> <span m='447230'>this</span> <span
  m='447360'>very</span> <span m='447740'>formally,</span> <span
  m='448420'>and</span> <span m='449060'>we</span> <span
  m='449270'>couldn't</span> <span m='449530'>remember,</span> <span
  m='450100'>and</span> <span m='450320'>I</span> <span m='450350'>wasn't</span>
  <span m='450560'>up</span> <span m='450760'>there</span> <span
  m='450910'>among</span> <span m='451200'>the</span> <span
  m='451310'>people,</span> <span m='452110'>we</span> <span
  m='452220'>would</span> <span m='452780'>put</span> <span m='452980'>1</span>
  <span m='453150'>there.</span> <span m='453780'>So</span> <span
  m='454060'>at</span> <span m='454340'>M,</span> <span m='454690'>we</span>
  <span m='454830'>would</span> <span m='454960'>put</span> <span m='455180'>a
  1.</span> <span m='456580'>But</span> <span m='456830'>people</span> <span
  m='457140'>remembered</span> <span m='457500'>that.</span> <span
  m='457880'>So</span> <span m='458030'>we</span> <span m='458140'>didn't</span>
  <span m='458350'>do</span> <span m='458490'>it.</span> </p><p><span
  m='458620'>But</span> <span m='458790'>then at</span> <span
  m='458860'>G,</span> <span m='459250'>we would</span> <span
  m='459480'>put</span> <span m='459670'>a</span> <span m='459740'>7.</span>
  <span m='460770'>So</span> <span m='461060'>if we</span> <span
  m='461170'>were</span> <span m='461280'>writing it</span> <span
  m='461560'>out</span> <span m='461730'>very</span> <span
  m='461950'>formally,</span> <span m='462390'>we</span> <span
  m='462490'>would</span> <span m='462620'>have</span> <span m='462880'>a</span>
  <span m='462970'>1</span> <span m='463295'>and</span> <span
  m='463620'>a</span> <span m='463930'>7.</span> <span m='465280'>And</span>
  <span m='465580'>at</span> <span m='465880'>this</span> <span
  m='466250'>D,</span> <span m='466470'>we</span> <span m='466600'>would</span>
  <span m='466740'>have</span> <span m='466950'>a</span> <span
  m='467020'>1.</span> <span m='467920'>And</span> <span m='468100'>then</span>
  <span m='468370'>at</span> <span m='468530'>the</span> <span
  m='468680'>A,</span> <span m='469055'>we would put a</span> <span
  m='469430'>6.</span> <span m='470650'>And</span> <span m='470820'>then</span>
  <span m='470950'>that's</span> <span m='471710'>the</span> <span
  m='471830'>answer.</span> </p><p><span m='473140'>Also,</span> <span
  m='473530'>we've</span> <span m='473700'>even</span> <span
  m='473930'>put</span> <span m='474130'>things</span> <span
  m='474330'>like</span> <span m='474490'>less</span> <span
  m='474840'>than</span> <span m='475040'>or</span> <span
  m='475220'>greater</span> <span m='475510'>than</span> <span
  m='475860'>part</span> <span m='476120'>way</span> <span
  m='476210'>along</span> <span m='476480'>the</span> <span
  m='476560'>way.</span> <span m='477070'>However,</span> <span
  m='477610'>I</span> <span m='477720'>believe</span> <span
  m='478840'>that</span> <span m='479300'>our</span> <span
  m='479450'>alpha-beta</span> <span m='480120'>search</span> <span
  m='480590'>is</span> <span m='480760'>going</span> <span m='480890'>to</span>
  <span m='480960'>definitely</span> <span m='481610'>fulfill</span> <span
  m='482760'>everyone's</span> <span m='483400'>quota</span> <span
  m='483960'>of</span> <span m='484220'>pedantically</span> <span
  m='484790'>putting</span> <span m='485080'>lots</span> <span
  m='485420'>of</span> <span m='485540'>numbers</span> <span
  m='485970'>next</span> <span m='486280'>to</span> <span
  m='486630'>nodes</span> <span m='487030'>on</span> <span m='487470'>a</span>
  <span m='487530'>game</span> <span m='487780'>tree.</span> <span
  m='488650'>And</span> <span m='488870'>so</span> <span m='490140'>once</span>
  <span m='490450'>you've</span> <span m='490630'>done</span> <span
  m='490830'>alpha-beta,</span> <span m='491470'>if you</span> <span
  m='491823'>can</span> <span m='492530'>do</span> <span m='492680'>it</span>
  <span m='492790'>correctly,</span> <span m='493630'>you'll</span> <span
  m='493870'>think,</span> <span m='494050'>oh,</span> <span
  m='494280'>minimax,</span> <span m='494810'>oh,</span> <span
  m='495400'>those</span> <span m='495650'>were</span> <span
  m='495720'>the</span> <span m='495840'>days.</span> <span
  m='496260'>It's</span> <span m='496510'>going</span> <span
  m='496620'>to</span> <span m='496660'>be</span> <span m='496780'>easy.</span>
  <span m='497590'>Because</span> <span m='498300'>alpha-beta</span> <span
  m='498970'>is</span> <span m='499070'>a</span> <span m='499130'>little</span>
  <span m='499340'>bit</span> <span m='499460'>more</span> <span
  m='499650'>complicated.</span> </p><p><span m='502170'>There's</span> <span
  m='502220'>a</span> <span m='502290'>lot</span> <span m='502500'>of</span>
  <span m='502590'>things</span> <span m='502830'>that</span> <span
  m='502960'>trip</span> <span m='503210'>people</span> <span
  m='503440'>up</span> <span m='503590'>here.</span> <span m='504490'>For</span>
  <span m='504565'>alpha-beta,</span> <span m='504930'>however,</span> <span
  m='505270'>I</span> <span m='505330'>will</span> <span m='505560'>erase</span>
  <span m='506270'>some</span> <span m='506480'>of</span> <span
  m='506590'>these</span> <span m='506790'>numbers</span> <span
  m='507570'>for</span> <span m='507670'>the</span> <span
  m='507760'>moment.</span> <span m='508750'>They're</span> <span
  m='508940'>still</span> <span m='509390'>right.</span> <span
  m='510660'>But</span> <span m='511960'>we</span> <span m='512080'>do</span>
  <span m='512260'>it</span> <span m='512320'>a</span> <span
  m='512370'>little</span> <span m='512620'>differently.</span> </p><p><span
  m='513700'>So</span> <span m='514750'>what</span> <span m='515030'>do</span>
  <span m='515090'>alpha-beta</span> <span m='515980'>and</span> <span
  m='516210'>beta</span> <span m='516450'>add</span> <span m='516720'>to</span>
  <span m='516820'>this</span> <span m='517840'>formula?</span> <span
  m='518470'>Well,</span> <span m='518630'>this is</span> <span
  m='518830'>all</span> <span m='519090'>sort</span> <span m='519450'>of</span>
  <span m='519539'>a</span> <span m='519620'>winning</span> <span
  m='519919'>formula,</span> <span m='520710'>except</span> <span
  m='520770'>for</span> <span m='521360'>it's</span> <span
  m='521429'>not.</span> <span m='521679'>Because</span> <span
  m='521870'>it</span> <span m='521990'>takes</span> <span m='522260'>too</span>
  <span m='522450'>long.</span> <span m='523490'>But</span> <span
  m='524260'>it's</span> <span m='524420'>a</span> <span m='524460'>very</span>
  <span m='524680'>nice</span> <span m='524980'>formula.</span> <span
  m='525620'>U</span> <span m='525930'>is</span> <span m='526060'>the</span>
  <span m='526140'>maximizer,</span> <span m='526860'>say.</span> <span
  m='527600'>I would</span> <span m='527720'>try</span> <span
  m='527930'>to</span> <span m='528010'>think,</span> <span m='528890'>if</span>
  <span m='529040'>I</span> <span m='529150'>do</span> <span
  m='529300'>this,</span> <span m='529610'>what's</span> <span
  m='529810'>he</span> <span m='529920'>going</span> <span m='530050'>to</span>
  <span m='530120'>do?</span> <span m='530410'>And</span> <span
  m='530690'>then</span> <span m='530735'>if</span> <span m='530780'>he</span>
  <span m='530890'>does</span> <span m='531090'>that,</span> <span
  m='531340'>what am</span> <span m='531520'>I</span> <span
  m='531660'>going</span> <span m='531790'>to</span> <span m='531870'>do?</span>
  <span m='532430'>And</span> <span m='532690'>then</span> <span
  m='532880'>what</span> <span m='533020'>is</span> <span m='533430'>he going
  to</span> <span m='533700'>do</span> <span m='534100'>if</span> <span
  m='534230'>I</span> <span m='534340'>do</span> <span m='534470'>that,</span>
  <span m='534750'>et</span> <span m='534920'>cetera,</span> <span
  m='535190'>et</span> <span m='535400'>cetera,</span> <span m='535890'>all the
  way</span> <span m='536220'>to</span> <span m='536280'>the</span> <span
  m='536350'>bottom.</span> <span m='537040'>With</span> <span
  m='537240'>alpha</span> <span m='537580'>and</span> <span
  m='537700'>beta,</span> <span m='537980'>we</span> <span m='538130'>add
  in</span> <span m='538450'>what</span> <span m='538560'>I</span> <span
  m='538680'>like</span> <span m='538840'>to</span> <span m='538990'>call</span>
  <span m='539740'>nuclear</span> <span m='540240'>options.</span> </p><p><span
  m='542700'>I'd</span> <span m='543110'>like</span> <span m='543310'>in</span>
  <span m='543460'>this</span> <span m='543670'>game</span> <span
  m='543910'>of</span> <span m='544040'>maximizer</span> <span
  m='544250'>minimizer--</span> <span m='544560'>you</span> <span
  m='544790'>can</span> <span m='544970'>think</span> <span m='545120'>of</span>
  <span m='545220'>it</span> <span m='545280'>as</span> <span
  m='545430'>like</span> <span m='546200'>the</span> <span
  m='546350'>Cold</span> <span m='546680'>War</span> <span m='546990'>or
  the</span> <span m='547110'>Peloponnesian</span> <span m='547840'>War,</span>
  <span m='548220'>except</span> <span m='548330'>the</span> <span
  m='548420'>Peloponnesian</span> <span m='548740'>War</span> <span
  m='548830'>didn't</span> <span m='548990'>have</span> <span
  m='549130'>nukes,</span> <span m='549580'>so</span> <span
  m='549680'>probably</span> <span m='550110'>the</span> <span
  m='550230'>Cold</span> <span m='550570'>War.</span> <span
  m='552710'>And</span> <span m='553160'>in</span> <span m='553280'>the</span>
  <span m='553390'>Cold</span> <span m='553730'>War,</span> <span
  m='556200'>or</span> <span m='556380'>any</span> <span
  m='556630'>situation</span> <span m='557200'>where</span> <span
  m='557330'>you're</span> <span m='557430'>up</span> <span
  m='557580'>against</span> <span m='557920'>an</span> <span
  m='558010'>adversary</span> <span m='559100'>who--</span> <span
  m='559420'>actually,</span> <span m='560040'>this</span> <span
  m='560210'>doesn't</span> <span m='560430'>really</span> <span m='560580'>work
  as well</span> <span m='560820'>for</span> <span m='561000'>the</span> <span
  m='561100'>Cold War.</span> <span m='561560'>But in</span> <span
  m='561660'>any</span> <span m='561800'>situation</span> <span
  m='561900'>where</span> <span m='562030'>you're</span> <span m='562190'>up
  against</span> <span m='562630'>an</span> <span m='562710'>adversary</span>
  <span m='563190'>whose</span> <span m='563480'>only</span> <span
  m='564270'>goal</span> <span m='564580'>in</span> <span m='564630'>life</span>
  <span m='564920'>is</span> <span m='565040'>to</span> <span
  m='565170'>destroy</span> <span m='565620'>you,</span> <span
  m='566340'>you</span> <span m='566700'>always</span> <span
  m='567030'>want</span> <span m='567260'>to</span> <span m='567350'>find</span>
  <span m='567640'>out</span> <span m='567930'>what</span> <span
  m='568080'>the</span> <span m='568150'>best</span> <span
  m='568510'>thing</span> <span m='568650'>you</span> <span
  m='568770'>can</span> <span m='568880'>possibly</span> <span
  m='569260'>do</span> <span m='569480'>is</span> <span m='570100'>if</span>
  <span m='570490'>they</span> <span m='570640'>hit</span> <span
  m='570830'>that</span> <span m='571040'>button</span> <span m='571450'>and
  send</span> <span m='571680'>nukes in</span> <span m='572170'>from</span>
  <span m='572350'>Cuba,</span> <span m='572850'>or</span> <span
  m='572980'>if</span> <span m='573070'>they</span> <span m='573190'>send</span>
  <span m='573940'>fighter</span> <span m='574270'>pilots,</span> <span
  m='574790'>or</span> <span m='574870'>whatever is</span> <span
  m='575290'>going</span> <span m='575540'>on.</span> </p><p><span
  m='576270'>So</span> <span m='576380'>the</span> <span m='576490'>idea</span>
  <span m='576780'>of</span> <span m='576940'>alpha</span> <span
  m='577460'>and</span> <span m='577610'>beta</span> <span m='578330'>is</span>
  <span m='578490'>that they</span> <span m='578600'>are</span> <span
  m='578980'>numbers</span> <span m='580230'>that</span> <span
  m='580400'>represent</span> <span m='582410'>the</span> <span
  m='583090'>fail-safe,</span> <span m='584240'>the</span> <span
  m='584330'>worst</span> <span m='584760'>case.</span> <span
  m='585030'>Because</span> <span m='585200'>obviously</span> <span
  m='586320'>in</span> <span m='586400'>the</span> <span m='586510'>Cold</span>
  <span m='586790'>War,</span> <span m='587590'>sending</span> <span
  m='587960'>nukes</span> <span m='588640'>was</span> <span
  m='588790'>not</span> <span m='589010'>a</span> <span m='589050'>good</span>
  <span m='589400'>plan.</span> <span m='590820'>But</span> <span
  m='593380'>presumably,</span> <span m='594370'>us sending</span> <span
  m='594810'>nukes</span> <span m='595110'>would</span> <span
  m='595230'>be</span> <span m='595330'>better</span> <span
  m='595570'>than</span> <span m='595760'>just</span> <span
  m='595970'>being</span> <span m='596210'>attacked</span> <span
  m='596640'>and</span> <span m='596800'>killed.</span> </p><p><span
  m='597880'>So</span> <span m='598940'>the</span> <span m='599160'>alpha</span>
  <span m='599490'>and</span> <span m='599590'>beta</span> <span
  m='599880'>represent</span> <span m='600440'>the</span> <span
  m='602810'>worst</span> <span m='603260'>possible</span> <span
  m='603680'>outcome</span> <span m='604150'>you'd</span> <span
  m='604420'>be</span> <span m='604540'>willing</span> <span
  m='604860'>to</span> <span m='605020'>accept</span> <span
  m='606160'>for</span> <span m='606370'>your</span> <span
  m='606590'>side.</span> <span m='607470'>Because</span> <span
  m='608390'>right</span> <span m='608680'>now,</span> <span
  m='609500'>you</span> <span m='609670'>know</span> <span
  m='609950'>you're</span> <span m='610080'>guaranteed</span> <span
  m='610670'>to</span> <span m='610750'>be</span> <span m='610910'>able</span>
  <span m='611140'>to</span> <span m='612810'>force</span> <span
  m='613300'>the</span> <span m='613400'>conflict</span> <span
  m='614740'>to</span> <span m='614890'>that</span> <span
  m='615170'>point</span> <span m='615400'>or</span> <span
  m='615520'>better.</span> <span m='616840'>So</span> <span
  m='616990'>the</span> <span m='617110'>alpha</span> <span m='617620'>is</span>
  <span m='618150'>the</span> <span m='618260'>nuclear</span> <span
  m='618650'>option,</span> <span m='618910'>the</span> <span
  m='618990'>fail-safe,</span> <span m='619780'>of</span> <span
  m='619910'>the</span> <span m='619980'>maximizer.</span> <span
  m='622420'>Nuclear</span> <span m='622560'>options--</span> <span
  m='624340'>alpha</span> <span m='626160'>is</span> <span
  m='626330'>maximizer's</span> <span m='627260'>nuclear</span> <span
  m='627570'>option.</span> <span m='634980'>And</span> <span
  m='636020'>beta</span> <span m='637480'>is</span> <span m='638240'>the</span>
  <span m='638340'>minimizer's</span> <span m='639750'>nuclear</span> <span
  m='640120'>option.</span> </p><p><span m='647100'>So</span> <span
  m='647280'>we</span> <span m='647400'>ask</span> <span
  m='647640'>ourselves--</span> <span m='648120'>and</span> <span
  m='648300'>people</span> <span m='648580'>who</span> <span
  m='648770'>were</span> <span m='648950'>paying</span> <span
  m='649160'>attention at</span> <span m='649660'>lecture</span> <span
  m='650110'>or</span> <span m='650255'>wrote</span> <span
  m='650400'>stuff</span> <span m='650510'>down</span> <span
  m='650770'>know</span> <span m='650920'>the</span> <span
  m='651060'>answer</span> <span m='651290'>already--</span> <span
  m='652240'>what</span> <span m='652520'>could</span> <span
  m='652630'>we</span> <span m='652760'>possibly</span> <span
  m='653120'>set</span> <span m='654020'>to</span> <span m='654110'>start</span>
  <span m='654500'>off?</span> <span m='655240'>Before</span> <span
  m='655600'>we</span> <span m='655810'>explore</span> <span
  m='656170'>the</span> <span m='656300'>tree and</span> <span
  m='656560'>find</span> <span m='656860'>anything,</span> <span
  m='657230'>what</span> <span m='657540'>will we</span> <span
  m='657670'>set</span> <span m='658750'>as</span> <span m='658920'>our</span>
  <span m='659090'>nuclear</span> <span m='659400'>option,</span> <span
  m='659760'>as</span> <span m='660010'>our</span> <span m='660220'>sort</span>
  <span m='660450'>of</span> <span m='660750'>fail-safe?</span> <span
  m='661280'>We</span> <span m='661390'>could</span> <span
  m='661500'>always</span> <span m='661800'>fall</span> <span
  m='662050'>back</span> <span m='662310'>on</span> <span m='662510'>this</span>
  <span m='662710'>number.</span> </p><p><span m='664490'>So</span> <span
  m='665520'>you</span> <span m='665630'>could</span> <span
  m='665830'>set</span> <span m='666020'>0.</span> <span m='666630'>You</span>
  <span m='666770'>could</span> <span m='666970'>try</span> <span
  m='667080'>to</span> <span m='667150'>set</span> <span m='668060'>some</span>
  <span m='668480'>low</span> <span m='668780'>number</span> <span
  m='669130'>for</span> <span m='669270'>the</span> <span
  m='669330'>maximizer.</span> <span m='670580'>Because</span> <span
  m='670820'>if</span> <span m='670940'>you</span> <span m='671050'>set</span>
  <span m='671270'>a</span> <span m='671480'>high</span> <span
  m='671740'>number</span> <span m='672020'>for</span> <span
  m='672150'>the</span> <span m='672250'>maximizer</span> <span
  m='672960'>as</span> <span m='673090'>its fail-safe,</span> <span
  m='674310'>it's</span> <span m='674500'>going</span> <span
  m='674620'>to</span> <span m='674660'>be</span> <span m='674770'>really</span>
  <span m='675070'>snooty</span> <span m='675620'>and</span> <span
  m='675750'>just</span> <span m='675950'>say,</span> <span
  m='676150'>oh,</span> <span m='676250'>I</span> <span m='676350'>won't</span>
  <span m='676580'>take</span> <span m='676780'>this</span> <span
  m='676950'>path.</span> <span m='677310'>I</span> <span
  m='677480'>already</span> <span m='677790'>have</span> <span
  m='678100'>a</span> <span m='678135'>fail-safe</span> <span
  m='678610'>that's</span> <span m='678770'>better</span> <span
  m='679010'>than</span> <span m='679150'>all</span> <span
  m='679410'>these</span> <span m='679670'>paths.</span> <span m='679970'>If
  you</span> <span m='680080'>set,</span> <span m='680250'>like,</span> <span
  m='680380'>100,</span> <span m='681680'>you</span> <span
  m='681850'>have</span> <span m='682080'>no</span> <span
  m='682220'>tree.</span> </p><p><span m='683460'>Our</span> <span
  m='683660'>default</span> <span m='684090'>usually,</span> <span
  m='684600'>in</span> <span m='684700'>6034,</span> <span m='685510'>is</span>
  <span m='685610'>to</span> <span m='685700'>set</span> <span
  m='686130'>negative</span> <span m='686450'>infinity</span> <span
  m='686990'>for</span> <span m='687140'>alpha</span> <span m='687550'>or</span>
  <span m='687750'>negative</span> <span m='688260'>some</span> <span
  m='688560'>very</span> <span m='688940'>large</span> <span
  m='689360'>number</span> <span m='689770'>if</span> <span
  m='689900'>you're</span> <span m='690000'>doing</span> <span
  m='690270'>it</span> <span m='690340'>in</span> <span m='690540'>your</span>
  <span m='690670'>lab.</span> <span m='692770'>So</span> <span
  m='693010'>if</span> <span m='693090'>we</span> <span m='693200'>set</span>
  <span m='693630'>negative</span> <span m='693880'>infinity</span> <span
  m='695840'>as</span> <span m='696070'>a</span> <span m='696120'>default</span>
  <span m='696590'>for</span> <span m='696900'>alpha,</span> <span
  m='697670'>that</span> <span m='698020'>negative</span> <span
  m='698340'>infinity is</span> <span m='698600'>basically</span> <span
  m='699960'>maximizer</span> <span m='700630'>loses.</span> <span
  m='701600'>So</span> <span m='701720'>the</span> <span
  m='701780'>maximizer</span> <span m='702250'>goes</span> <span
  m='702510'>in</span> <span m='702660'>thinking,</span> <span
  m='703020'>oh</span> <span m='703210'>my</span> <span m='703350'>god,</span>
  <span m='703700'>if</span> <span m='703810'>I</span> <span
  m='703890'>don't</span> <span m='704110'>look</span> <span
  m='704250'>at</span> <span m='704310'>this</span> <span m='704390'>game
  tree,</span> <span m='704780'>I</span> <span m='704880'>automatically</span>
  <span m='705440'>lose.</span> <span m='706260'>He's</span> <span
  m='706650'>willing</span> <span m='707000'>to</span> <span
  m='707090'>take</span> <span m='708000'>the</span> <span
  m='708120'>first</span> <span m='708600'>path</span> <span
  m='709200'>possibly</span> <span m='709690'>presented.</span> <span
  m='711070'>And</span> <span m='711810'>that's</span> <span
  m='712040'>why</span> <span m='712240'>that</span> <span
  m='712420'>negative</span> <span m='712740'>infinity</span> <span
  m='712940'>is a</span> <span m='713000'>good</span> <span
  m='713180'>default</span> <span m='713410'>for</span> <span
  m='713560'>alpha.</span> <span m='713930'>Anyone</span> <span
  m='714210'>have</span> <span m='714350'>a</span> <span m='714390'>good</span>
  <span m='714510'>idea</span> <span m='714790'>what</span> <span m='714980'>a
  good</span> <span m='715100'>default</span> <span m='715390'>for</span> <span
  m='715520'>beta</span> <span m='715770'>is,</span> <span m='716070'>or</span>
  <span m='716210'>just</span> <span m='716400'>remember?</span> </p><p><span
  m='717710'>Positive</span> <span m='717970'>infinity,</span> <span
  m='718510'>that's</span> <span m='718720'>right.</span> <span
  m='719090'>Because the</span> <span m='719160'>minimizer</span> <span
  m='719550'>comes</span> <span m='719880'>in,</span> <span
  m='720090'>and</span> <span m='720210'>she's</span> <span
  m='720410'>like,</span> <span m='720580'>oh</span> <span
  m='720750'>crap,</span> <span m='721200'>the</span> <span
  m='721290'>maximizer</span> <span m='721800'>automatically</span> <span
  m='722340'>wins</span> <span m='723180'>if</span> <span m='723320'>I</span>
  <span m='723430'>don't</span> <span m='723640'>look</span> <span
  m='723820'>at</span> <span m='724080'>this</span> <span m='725390'>node</span>
  <span m='725660'>here.</span> <span m='726320'>That</span> <span
  m='726570'>makes</span> <span m='726740'>sure</span> <span
  m='726990'>the</span> <span m='727080'>maximizer</span> <span m='727500'>and
  the</span> <span m='727590'>minimizer</span> <span m='728010'>both</span>
  <span m='728460'>are</span> <span m='728620'>willing</span> <span
  m='729020'>to</span> <span m='729180'>look</span> <span m='729580'>at</span>
  <span m='729690'>the</span> <span m='729770'>first</span> <span
  m='730200'>path</span> <span m='730460'>they</span> <span
  m='730600'>see</span> <span m='731010'>every</span> <span
  m='731280'>time.</span> <span m='732240'>Because</span> <span
  m='733060'>look</span> <span m='733210'>on</span> <span m='733310'>this</span>
  <span m='733400'>tree. If</span> <span m='733870'>10</span> <span
  m='734250'>was</span> <span m='734700'>alpha,</span> <span
  m='735600'>the</span> <span m='735680'>maximizer</span> <span
  m='736270'>would</span> <span m='736390'>just</span> <span
  m='736560'>reject</span> <span m='736970'>out</span> <span
  m='737140'>of</span> <span m='737220'>hand</span> <span
  m='737530'>everything</span> <span m='737970'>except</span> <span
  m='738300'>for</span> <span m='738430'>P.</span> <span m='739020'>And</span>
  <span m='739190'>then</span> <span m='739380'>we</span> <span
  m='739490'>wouldn't</span> <span m='739710'>have</span> <span
  m='739910'>a</span> <span m='739990'>tree.</span> <span m='740440'>The</span>
  <span m='740930'>maximizer</span> <span m='741430'>would</span> <span
  m='741550'>lose,</span> <span m='741870'>because</span> <span
  m='742580'>he</span> <span m='742700'>would</span> <span m='742830'>be</span>
  <span m='742940'>like,</span> <span m='743440'>hmm,</span> <span
  m='744750'>this</span> <span m='745000'>test</span> <span
  m='745260'>game</span> <span m='745450'>is</span> <span m='745560'>very</span>
  <span m='745860'>interesting.</span> <span m='746790'>However,</span> <span
  m='747660'>I</span> <span m='747850'>have</span> <span
  m='748000'>another</span> <span m='748300'>option--</span> <span
  m='748660'>pft,</span> <span m='749120'>and</span> <span
  m='749220'>then</span> <span m='749325'>you</span> <span
  m='749535'>throw</span> <span m='749640'>over</span> <span
  m='749920'>the</span> <span m='750050'>table.</span> </p><p><span
  m='751380'>That's</span> <span m='751680'>10</span> <span
  m='752000'>for</span> <span m='752160'>me,</span> <span
  m='752410'>because</span> <span m='752760'>you</span> <span
  m='753080'>have</span> <span m='753200'>to</span> <span m='753310'>pick</span>
  <span m='753500'>up</span> <span m='753600'>the</span> <span
  m='753700'>pieces.</span> <span m='754070'>I</span> <span
  m='754180'>don't</span> <span m='754340'>own</span> <span
  m='754490'>this</span> <span m='754590'>set.</span> <span m='754850'>I</span>
  <span m='755110'>don't</span> <span m='755580'>know.</span> <span
  m='756990'>So</span> <span m='757910'>that</span> <span m='758280'>is</span>
  <span m='758400'>why</span> <span m='758630'>we</span> <span
  m='758760'>set</span> <span m='759090'>negative</span> <span
  m='759210'>infinity</span> <span m='759630'>and</span> <span
  m='759710'>positive</span> <span m='760070'>infinity</span> <span
  m='760440'>as</span> <span m='760560'>the</span> <span
  m='760640'>default</span> <span m='761100'>for</span> <span m='761200'>alpha
  and</span> <span m='761620'>beta.</span> <span m='762770'>So</span> <span
  m='762960'>how</span> <span m='763190'>do</span> <span m='763290'>alpha</span>
  <span m='763490'>and</span> <span m='763690'>beta</span> <span
  m='763950'>propagate?</span> <span m='764240'>And</span> <span
  m='764530'>what</span> <span m='764720'>do</span> <span m='764810'>they</span>
  <span m='764970'>do?</span> <span m='765870'>The</span> <span
  m='765960'>main</span> <span m='766380'>purpose</span> <span
  m='766830'>of</span> <span m='767010'>alpha</span> <span m='767300'>and</span>
  <span m='767410'>beta</span> <span m='767640'>is</span> <span
  m='767950'>that,</span> <span m='768110'>as</span> <span m='768300'>we</span>
  <span m='768410'>said,</span> <span m='769110'>alpha--</span> <span
  m='769980'>let's</span> <span m='770220'>say</span> <span m='770310'>we</span>
  <span m='770410'>have</span> <span m='770620'>some</span> <span
  m='770820'>chart of</span> <span m='771170'>values.</span> <span
  m='772130'>Alpha,</span> <span m='772250'>which</span> <span
  m='772420'>starts</span> <span m='772800'>at</span> <span
  m='772910'>negative</span> <span m='773240'>infinity,</span> <span
  m='775700'>is</span> <span m='775980'>the</span> <span m='776080'>worst</span>
  <span m='776435'>that</span> <span m='776790'>the</span> <span
  m='776850'>maximizer</span> <span m='777145'>is</span> <span
  m='777840'>willing</span> <span m='778150'>to</span> <span
  m='778260'>accept.</span> <span m='778950'>Because</span> <span
  m='779180'>they</span> <span m='779280'>know</span> <span
  m='779580'>they</span> <span m='779710'>can</span> <span m='779890'>get</span>
  <span m='780080'>that</span> <span m='780260'>much</span> <span
  m='780470'>or</span> <span m='780570'>better.</span> </p><p><span
  m='781060'>It</span> <span m='781410'>starts</span> <span
  m='781730'>out,</span> <span m='781950'>that's</span> <span
  m='782480'>the</span> <span m='782540'>worst</span> <span
  m='782880'>thing</span> <span m='783020'>you</span> <span
  m='783140'>can</span> <span m='783280'>have.</span> <span m='783800'>So</span>
  <span m='784030'>it's</span> <span m='784130'>not</span> <span
  m='784310'>a</span> <span m='784360'>problem.</span> <span
  m='785470'>Infinity</span> <span m='786090'>is</span> <span
  m='786220'>the</span> <span m='786750'>highest</span> <span
  m='787410'>that</span> <span m='787490'>the</span> <span m='787560'>minimizer
  is</span> <span m='788080'>willing</span> <span m='788340'>to</span> <span
  m='788460'>accept.</span> <span m='789890'>That's</span> <span
  m='790140'>beta.</span> <span m='791430'>As</span> <span m='791650'>you</span>
  <span m='791740'>go</span> <span m='791870'>along,</span> <span
  m='792230'>though,</span> <span m='792680'>the</span> <span
  m='792770'>minimizer</span> <span m='793250'>sees,</span> <span
  m='793500'>oh,</span> <span m='793780'>look</span> <span m='793990'>at</span>
  <span m='794100'>that.</span> <span m='794970'>I</span> <span
  m='795110'>can</span> <span m='795320'>guarantee</span> <span
  m='795930'>that</span> <span m='796140'>at</span> <span m='796320'>best</span>
  <span m='796630'>the maximizer</span> <span m='796840'>gets</span> <span
  m='797510'>100.</span> <span m='798610'>Haha,</span> <span
  m='799480'>beta</span> <span m='799710'>is</span> <span m='799880'>now</span>
  <span m='800070'>100.</span> <span m='800700'>The</span> <span
  m='801100'>maximizer</span> <span m='801385'>says,</span> <span
  m='801830'>oh</span> <span m='801970'>yeah?</span> <span
  m='802790'>Well</span> <span m='803140'>I</span> <span m='803280'>can</span>
  <span m='803450'>guarantee</span> <span m='805320'>that</span> <span
  m='805910'>the</span> <span m='806050'>lowest</span> <span
  m='806420'>you</span> <span m='806530'>can</span> <span m='806680'>get</span>
  <span m='806870'>me</span> <span m='807020'>to</span> <span
  m='807080'>go</span> <span m='807310'>to</span> <span m='807490'>is</span>
  <span m='807840'>0.</span> <span m='808280'>So</span> <span
  m='809680'>it's</span> <span m='809850'>going</span> <span
  m='809960'>to</span> <span m='810000'>be</span> <span m='810120'>0.</span>
  </p><p><span m='811330'>And</span> <span m='811590'>this</span> <span
  m='811740'>keeps</span> <span m='812140'>going</span> <span
  m='812460'>on</span> <span m='812740'>until</span> <span
  m='813160'>maybe</span> <span m='813600'>at</span> <span m='814230'>6--</span>
  <span m='816670'>note,</span> <span m='816990'>not</span> <span
  m='817230'>drawn</span> <span m='817450'>to</span> <span
  m='817550'>scale.</span> <span m='818670'>Maybe</span> <span
  m='819030'>at</span> <span m='819170'>6,</span> <span m='819540'>the</span>
  <span m='819850'>maximizer</span> <span m='820310'>said,</span> <span
  m='820717'>haha,</span> <span m='821940'>you</span> <span
  m='822100'>can't</span> <span m='822340'>make</span> <span
  m='822480'>me</span> <span m='822560'>go</span> <span m='822690'>lower</span>
  <span m='822910'>than</span> <span m='823060'>6.</span> <span
  m='824030'>And</span> <span m='824140'>the</span> <span
  m='824200'>minimizer</span> <span m='824390'>says,</span> <span
  m='824550'>aha,</span> <span m='825270'>you</span> <span
  m='825420'>can't</span> <span m='825590'>make me</span> <span
  m='825850'>go</span> <span m='825970'>higher</span> <span
  m='826230'>than</span> <span m='826400'>6.</span> <span m='827650'>And</span>
  <span m='827810'>then</span> <span m='827970'>6</span> <span
  m='828180'>is</span> <span m='828640'>the</span> <span
  m='828780'>answer.</span> </p><p><span m='830120'>If</span> <span
  m='830160'>you</span> <span m='830320'>ever</span> <span m='830530'>get</span>
  <span m='830750'>to</span> <span m='831020'>a</span> <span
  m='831100'>point</span> <span m='831780'>where</span> <span
  m='834770'>beta</span> <span m='835090'>gets</span> <span
  m='835290'>lower</span> <span m='835720'>than</span> <span
  m='835920'>alpha,</span> <span m='836950'>or</span> <span
  m='837260'>alpha</span> <span m='837560'>gets</span> <span
  m='837790'>lower</span> <span m='838030'>than</span> <span
  m='838140'>beta,</span> <span m='839790'>then</span> <span
  m='840000'>you</span> <span m='840110'>just</span> <span
  m='840330'>say,</span> <span m='840980'>screw</span> <span
  m='841380'>this.</span> <span m='842000'>I'm</span> <span m='842150'>not
  even</span> <span m='842450'>going</span> <span m='842530'>to</span> <span
  m='842600'>look</span> <span m='843970'>at</span> <span m='844100'>the</span>
  <span m='844170'>remaining</span> <span m='844610'>stuff.</span> <span
  m='845570'>I'm</span> <span m='846510'>going</span> <span m='846720'>to</span>
  <span m='846860'>just</span> <span m='847460'>prune</span> <span
  m='847840'>now</span> <span m='848055'>and</span> <span m='848270'>go</span>
  <span m='848430'>somewhere</span> <span m='848770'>else</span> <span
  m='849100'>that's</span> <span m='849870'>less</span> <span
  m='850380'>pointless</span> <span m='850860'>than</span> <span
  m='851010'>this.</span> <span m='851780'>Because</span> <span
  m='852640'>if</span> <span m='852800'>the</span> <span m='852980'>alpha</span>
  <span m='853340'>gets</span> <span m='853450'>higher</span> <span
  m='853660'>than</span> <span m='853810'>the</span> <span
  m='853880'>beta,</span> <span m='854800'>what</span> <span
  m='854990'>that's</span> <span m='855220'>saying</span> <span m='855410'>is
  the</span> <span m='855540'>maximizer</span> <span m='855990'>says,</span>
  <span m='856160'>oh</span> <span m='856630'>man,</span> <span
  m='857350'>look</span> <span m='857540'>at</span> <span
  m='857650'>this,</span> <span m='858060'>minimizer.</span> <span
  m='858515'>The</span> <span m='858970'>lowest</span> <span
  m='859430'>you</span> <span m='859530'>can</span> <span m='859690'>make</span>
  <span m='859860'>me</span> <span m='859960'>go</span> <span
  m='860290'>is,</span> <span m='861530'>say,</span> <span m='861800'>50.</span>
  <span m='862450'>And the</span> <span m='862740'>minimizer</span> <span
  m='863090'>says,</span> <span m='863440'>that's</span> <span
  m='863780'>strange.</span> <span m='864300'>Because</span> <span
  m='865510'>the</span> <span m='865650'>highest</span> <span
  m='866210'>that</span> <span m='866290'>you</span> <span m='866470'>can</span>
  <span m='866630'>make me</span> <span m='866940'>go</span> <span
  m='867270'>is</span> <span m='867520'>40.</span> </p><p><span
  m='868760'>So</span> <span m='869040'>something's</span> <span
  m='869750'>generally</span> <span m='871350'>amiss</span> <span
  m='872030'>there. It</span> <span m='872390'>usually</span> <span
  m='873400'>means</span> <span m='873980'>that</span> <span
  m='874320'>one</span> <span m='874530'>of</span> <span m='874630'>the</span>
  <span m='874730'>two</span> <span m='874940'>of</span> <span
  m='875030'>them</span> <span m='875220'>doesn't</span> <span
  m='875460'>even</span> <span m='875650'>want</span> <span m='875820'>to</span>
  <span m='875860'>be</span> <span m='875950'>exploring</span> <span
  m='876370'>that</span> <span m='876530'>branch</span> <span
  m='876810'>at</span> <span m='876880'>all.</span> <span m='877890'>So</span>
  <span m='878440'>you</span> <span m='878600'>prune</span> <span
  m='878920'>at</span> <span m='879020'>that</span> <span
  m='879210'>point.</span> </p><p><span m='880816'>All right,</span> <span
  m='881270'>so</span> <span m='881580'>given</span> <span
  m='881880'>that</span> <span m='882020'>that's</span> <span
  m='882250'>what</span> <span m='882390'>we're</span> <span
  m='882530'>looking</span> <span m='882910'>for,</span> <span
  m='883470'>how</span> <span m='883700'>do</span> <span m='883780'>we</span>
  <span m='884090'>move</span> <span m='884450'>the</span> <span
  m='884580'>alphas</span> <span m='884920'>and</span> <span
  m='885030'>betas</span> <span m='885370'>throughout</span> <span
  m='885650'>the</span> <span m='885750'>tree?</span> <span
  m='886700'>There's</span> <span m='886880'>a</span> <span
  m='886940'>few</span> <span m='887220'>different</span> <span
  m='887490'>ways</span> <span m='887700'>to</span> <span m='887820'>draw</span>
  <span m='888090'>them.</span> <span m='888400'>And</span> <span
  m='888530'>some of</span> <span m='888780'>them</span> <span
  m='888990'>I</span> <span m='889130'>consider</span> <span
  m='889620'>to</span> <span m='889750'>be</span> <span m='889910'>very</span>
  <span m='890280'>busy.</span> <span m='892830'>Probably</span> <span
  m='893400'>in</span> <span m='893520'>recitation</span> <span
  m='894080'>and</span> <span m='894270'>tutorial</span> <span
  m='894930'>you</span> <span m='894980'>will</span> <span m='895160'>see</span>
  <span m='895350'>a</span> <span m='895410'>way</span> <span
  m='895560'>that's</span> <span m='895770'>busier</span> <span
  m='896150'>and</span> <span m='896220'>has</span> <span m='896490'>more</span>
  <span m='896710'>numbers.</span> </p><p><span m='897980'>Technically,</span>
  <span m='898630'>every</span> <span m='898950'>node</span> <span
  m='899240'>has</span> <span m='899440'>both an</span> <span
  m='899720'>alpha</span> <span m='900070'>and a</span> <span
  m='900320'>beta.</span> <span m='901060'>However,</span> <span
  m='901395'>the</span> <span m='901730'>one</span> <span m='902180'>that</span>
  <span m='902450'>that</span> <span m='902660'>node is</span> <span
  m='902860'>paying</span> <span m='903130'>attention</span> <span
  m='903790'>to</span> <span m='904560'>is</span> <span m='904710'>the</span>
  <span m='904870'>alpha,</span> <span m='905130'>if</span> <span
  m='905390'>it's</span> <span m='905470'>a</span> <span
  m='905560'>maximizer,</span> <span m='906190'>and</span> <span
  m='906310'>the</span> <span m='906370'>beta</span> <span m='906800'>if
  it's</span> <span m='906920'>a</span> <span m='907010'>minimizer.</span> <span
  m='908360'>So</span> <span m='909200'>I</span> <span
  m='909380'>generally,</span> <span m='910060'>for</span> <span
  m='910250'>my</span> <span m='910430'>purposes,</span> <span
  m='910850'>only</span> <span m='911110'>draw</span> <span
  m='911420'>the</span> <span m='911590'>alpha</span> <span
  m='911950'>out</span> <span m='912290'>for</span> <span m='912370'>the</span>
  <span m='912450'>maximizer</span> <span m='913510'>and</span> <span
  m='913900'>only</span> <span m='914120'>draw</span> <span
  m='914300'>the</span> <span m='914400'>beta</span> <span m='914690'>out</span>
  <span m='914950'>for</span> <span m='915030'>the</span> <span
  m='915120'>minimizer.</span> <span m='916330'>Very</span> <span
  m='916740'>rarely,</span> <span m='917550'>but</span> <span
  m='917970'>it</span> <span m='918100'>happens,</span> <span
  m='918610'>they'll</span> <span m='918790'>sometimes</span> <span
  m='919220'>ask</span> <span m='919560'>you,</span> <span
  m='919750'>well,</span> <span m='919960'>what's</span> <span
  m='920200'>the</span> <span m='920280'>beta</span> <span m='920650'>of</span>
  <span m='920780'>this</span> <span m='921020'>node,</span> <span
  m='921390'>which</span> <span m='921450'>is</span> <span m='921520'>a</span>
  <span m='921570'>maximizer</span> <span m='922190'>node?</span> <span
  m='922460'>So</span> <span m='922610'>it's</span> <span m='922760'>good</span>
  <span m='922940'>to</span> <span m='923050'>know</span> <span
  m='923300'>how</span> <span m='923580'>it's</span> <span
  m='923740'>derived.</span> <span m='924680'>But</span> <span
  m='924810'>I</span> <span m='924910'>think</span> <span m='925140'>that
  it</span> <span m='925600'>wastes</span> <span m='925950'>your</span> <span
  m='926090'>time</span> <span m='926470'>to</span> <span
  m='926820'>write</span> <span m='927010'>it</span> <span
  m='927110'>out.</span> <span m='927540'>That's</span> <span
  m='927770'>my</span> <span m='927930'>opinion.</span> <span
  m='928520'>We'll</span> <span m='928680'>see</span> <span
  m='928860'>how</span> <span m='928970'>it</span> <span m='929060'>goes.</span>
  </p><p><span m='929820'>So</span> <span m='930360'>the</span> <span
  m='930450'>way</span> <span m='930630'>that it</span> <span
  m='930870'>works,</span> <span m='931690'>the</span> <span
  m='931850'>way</span> <span m='932090'>that alpha</span> <span
  m='932260'>and</span> <span m='932410'>beta</span> <span
  m='932540'>works,</span> <span m='932720'>is</span> <span
  m='932810'>the</span> <span m='932900'>Snow</span> <span
  m='933220'>White</span> <span m='933520'>principal.</span> <span
  m='933970'>So</span> <span m='934160'>does</span> <span
  m='934320'>everyone</span> <span m='934610'>know</span> <span
  m='934750'>the</span> <span m='934970'>story of</span> <span
  m='935275'>Snow</span> <span m='935580'>White?</span> <span
  m='937100'>So</span> <span m='937640'>there's</span> <span m='937880'>a</span>
  <span m='937950'>beautiful</span> <span m='938370'>princess.</span> <span
  m='938860'>There's</span> <span m='939070'>an</span> <span
  m='939170'>evil</span> <span m='939420'>queen</span> <span
  m='940270'>stepmother.</span> <span m='940800'>Mirror</span> <span
  m='941030'>mirror</span> <span m='941210'>on</span> <span
  m='941340'>the</span> <span m='941410'>wall,</span> <span
  m='941660'>who's</span> <span m='941840'>the</span> <span
  m='941920'>fairest</span> <span m='942230'>of</span> <span
  m='942330'>them</span> <span m='942500'>all,</span> <span
  m='943070'>finds</span> <span m='943420'>out</span> <span
  m='944760'>that</span> <span m='945080'>it's</span> <span
  m='945380'>the</span> <span m='945760'>stepdaughter.</span> <span
  m='946620'>So</span> <span m='947260'>much</span> <span m='947460'>like</span>
  <span m='947590'>in</span> <span m='947690'>the</span> <span
  m='947800'>real</span> <span m='947980'>world,</span> <span
  m='948260'>in</span> <span m='948350'><i>Snow</i></span> <span
  m='948630'><i>White</i>,</span> <span m='949130'>the</span> <span
  m='949240'>stepdaughter,</span> <span m='950270'>Snow</span> <span
  m='950550'>White,</span> <span m='950860'>had</span> <span
  m='951060'>the</span> <span m='951120'>beauty</span> <span
  m='951690'>of</span> <span m='951850'>her</span> <span
  m='951970'>parents.</span> <span m='952440'>She</span> <span
  m='952740'>inherited</span> <span m='953300'>those.</span> </p><p><span
  m='954070'>However,</span> <span m='954880'>much</span> <span
  m='955170'>like</span> <span m='955360'>in</span> <span m='955450'>the</span>
  <span m='955540'>real</span> <span m='955720'>world,</span> <span
  m='956160'>maybe</span> <span m='956560'>or</span> <span
  m='956660'>perhaps</span> <span m='957050'>not,</span> <span
  m='958100'>the</span> <span m='958540'>stepmother</span> <span
  m='959040'>had</span> <span m='959310'>an</span> <span m='959420'>even</span>
  <span m='959650'>better</span> <span m='959980'>plan.</span> <span
  m='960810'>She</span> <span m='961030'>hired</span> <span m='961520'>a</span>
  <span m='961680'>hunter</span> <span m='962080'>to</span> <span
  m='963710'>sort</span> <span m='963900'>of</span> <span m='963990'>hunt</span>
  <span m='964350'>Snow</span> <span m='964590'>White,</span> <span
  m='964980'>pull</span> <span m='965235'>out</span> <span m='965490'>Snow
  White's</span> <span m='965750'>heart,</span> <span m='966720'>and</span>
  <span m='967210'>feed</span> <span m='967440'>it</span> <span
  m='967560'>to</span> <span m='967660'>her</span> <span m='967950'>so</span>
  <span m='968240'>that</span> <span m='968520'>she could</span> <span
  m='968960'>gain</span> <span m='969350'>Snow White's</span> <span
  m='969710'>beauty</span> <span m='970020'>for</span> <span
  m='970250'>herself.</span> <span m='971590'>How</span> <span
  m='971730'>many</span> <span m='971860'>people</span> <span
  m='972040'>knew</span> <span m='972170'>that</span> <span
  m='972380'>version</span> <span m='972660'>of</span> <span m='972884'>the
  story?</span> <span m='974900'>A</span> <span m='974970'>few</span> <span
  m='975200'>people.</span> <span m='975590'>That's</span> <span
  m='975840'>the</span> <span m='975980'>original</span> <span
  m='976360'>version</span> <span m='976600'>of</span> <span
  m='976650'>the</span> <span m='976720'>story.</span> <span
  m='977000'>Disney</span> <span m='977300'>didn't</span> <span
  m='977530'>put</span> <span m='977690'>that</span> <span m='977870'>in.</span>
  </p><p><span m='978570'>The</span> <span m='978670'>hunter</span> <span
  m='978980'>then</span> <span m='979150'>brought</span> <span
  m='979370'>the</span> <span m='979440'>heart</span> <span m='979640'>of</span>
  <span m='979710'>a</span> <span m='979780'>deer,</span> <span
  m='980280'>which</span> <span m='980360'>I</span> <span
  m='980410'>think</span> <span m='980680'>in</span> <span
  m='980810'>Disney</span> <span m='981200'>the</span> <span
  m='981290'>hunter</span> <span m='981640'>did</span> <span
  m='982050'>kill</span> <span m='982250'>a</span> <span m='982310'>deer</span>
  <span m='982760'>arbitrarily,</span> <span m='983480'>but</span> <span
  m='983590'>it</span> <span m='983670'>was</span> <span m='983830'>not</span>
  <span m='984130'>explained</span> <span m='984630'>that</span> <span
  m='984730'>that's</span> <span m='984960'>why</span> <span m='985180'>he
  was</span> <span m='985400'>doing</span> <span m='985680'>it.</span> <span
  m='986260'>So</span> <span m='986820'>in</span> <span
  m='987200'>alpha-beta,</span> <span m='987790'>it's</span> <span
  m='988090'>just</span> <span m='988400'>like</span> <span
  m='988700'>that.</span> <span m='989540'>By</span> <span
  m='989960'>which</span> <span m='990180'>I</span> <span m='990280'>mean</span>
  <span m='991220'>you</span> <span m='991370'>start</span> <span
  m='991760'>by</span> <span m='991920'>inheriting</span> <span
  m='992270'>the</span> <span m='992480'>alpha</span> <span
  m='992760'>and</span> <span m='992870'>beta</span> <span m='993090'>of</span>
  <span m='993200'>your</span> <span m='993350'>parents.</span> <span
  m='994400'>But</span> <span m='994560'>if</span> <span m='994690'>you</span>
  <span m='994980'>see</span> <span m='995470'>something</span> <span
  m='995790'>that</span> <span m='995920'>you</span> <span
  m='996070'>like</span> <span m='996460'>amongst</span> <span
  m='996840'>your</span> <span m='996980'>children,</span> <span
  m='998360'>you</span> <span m='998530'>take</span> <span m='998810'>it</span>
  <span m='998940'>for</span> <span m='999030'>yourself--</span> <span
  m='1001300'>the</span> <span m='1001510'>Snow</span> <span
  m='1001560'>White</span> <span m='1001680'>principle.</span> </p><p><span
  m='1002810'>So</span> <span m='1003070'>let's</span> <span
  m='1003290'>see</span> <span m='1003390'>how</span> <span
  m='1003540'>that</span> <span m='1003720'>goes.</span> <span
  m='1004100'>Well,</span> <span m='1004430'>I</span> <span
  m='1004550'>told</span> <span m='1004860'>you</span> <span
  m='1004970'>guys</span> <span m='1005940'>that</span> <span
  m='1006280'>the</span> <span m='1006750'>default</span> <span
  m='1007250'>alpha</span> <span m='1007560'>was--</span> </p><p><span
  m='1008200'>AUDIENCE: Negative</span> <span m='1008673'>infinity.</span>
  </p><p><span m='1009620'>PROFESSOR: Negative</span> <span
  m='1009990'>infinity.</span> <span m='1010820'>So</span> <span
  m='1011030'>here</span> <span m='1011350'>alpha</span> <span
  m='1011670'>is</span> <span m='1011820'>negative</span> <span
  m='1012130'>infinity.</span> <span m='1014300'>And</span> <span
  m='1014520'>I</span> <span m='1014590'>told</span> <span
  m='1014820'>you</span> <span m='1014900'>that the</span> <span
  m='1015060'>default</span> <span m='1015490'>beta</span> <span
  m='1015760'>was</span> <span m='1017290'>positive</span> <span
  m='1017680'>infinity.</span> <span m='1018310'>We're</span> <span
  m='1018450'>doing</span> <span m='1018680'>a</span> <span
  m='1018720'>depth</span> <span m='1018990'>first</span> <span
  m='1019230'>search</span> <span m='1019460'>here.</span> <span m='1021110'>All
  right,</span> <span m='1021490'>beta</span> <span m='1021830'>is</span> <span
  m='1022170'>infinity.</span> <span m='1023590'>All</span> <span
  m='1024060'>right,</span> <span m='1024710'>so</span> <span
  m='1026680'>we</span> <span m='1026819'>come</span> <span
  m='1027060'>here</span> <span m='1027200'>to</span> <span
  m='1027349'>E.</span> <span m='1027819'>Now,</span> <span
  m='1027950'>we</span> <span m='1028069'>could</span> <span
  m='1028359'>put</span> <span m='1028640'>an</span> <span
  m='1028730'>alpha.</span> <span m='1029099'>But</span> <span
  m='1029420'>I</span> <span m='1029720'>never</span> <span
  m='1030000'>put</span> <span m='1031260'>an</span> <span
  m='1031349'>alpha</span> <span m='1031660'>or a</span> <span
  m='1031839'>beta</span> <span m='1032140'>for</span> <span
  m='1032930'>one</span> <span m='1033109'>of</span> <span
  m='1033220'>the</span> <span m='1033579'>terminal</span> <span
  m='1033930'>nodes.</span> <span m='1034250'>Because</span> <span
  m='1034970'>it</span> <span m='1035190'>can't</span> <span
  m='1035450'>really</span> <span m='1035650'>do</span> <span
  m='1035810'>anything.</span> <span m='1037329'>It's</span> <span
  m='1037510'>just</span> <span m='1037760'>2.</span> </p><p><span
  m='1039060'>So</span> <span m='1040180'>as</span> <span m='1040380'>we</span>
  <span m='1040480'>go</span> <span m='1040690'>down,</span> <span
  m='1041069'>we</span> <span m='1041280'>take</span> <span
  m='1041740'>the</span> <span m='1041819'>alpha and</span> <span
  m='1042230'>beta</span> <span m='1042369'>from our</span> <span
  m='1042550'>parents.</span> <span m='1043060'>But</span> <span
  m='1043520'>as</span> <span m='1043710'>we</span> <span m='1043810'>go</span>
  <span m='1044190'>up</span> <span m='1044460'>to</span> <span
  m='1044589'>a</span> <span m='1044670'>parent,</span> <span
  m='1045160'>if</span> <span m='1045270'>the</span> <span
  m='1045380'>parent</span> <span m='1045710'>likes what</span> <span
  m='1045950'>it sees</span> <span m='1046160'>in</span> <span
  m='1046500'>the</span> <span m='1046619'>child,</span> <span
  m='1047060'>it</span> <span m='1047170'>takes it</span> <span
  m='1047510'>instead.</span> <span m='1048450'>So</span> <span
  m='1049080'>I</span> <span m='1049190'>ask</span> <span m='1049510'>you</span>
  <span m='1049630'>all</span> <span m='1049990'>the</span> <span
  m='1050100'>question,</span> <span m='1050620'>would</span> <span
  m='1050790'>the</span> <span m='1050860'>minimizer</span> <span
  m='1051440'>prefer</span> <span m='1051930'>this</span> <span
  m='1052260'>2</span> <span m='1052535'>that it</span> <span
  m='1052870'>sees</span> <span m='1053190'>from its</span> <span
  m='1053430'>child</span> <span m='1054160'>or</span> <span
  m='1054480'>its</span> <span m='1054570'>own</span> <span
  m='1054830'>infinity</span> <span m='1055490'>for</span> <span
  m='1055670'>a</span> <span m='1055720'>beta?</span> </p><p><span
  m='1056630'>AUDIENCE: 2</span> </p><p><span m='1057390'>PROFESSOR: It</span>
  <span m='1057500'>likes</span> <span m='1057880'>the</span> <span
  m='1058020'>2.</span> <span m='1058790'>That's</span> <span
  m='1059040'>absolutely</span> <span m='1059480'>right.</span> <span
  m='1060190'>So</span> <span m='1062210'>2.</span> <span m='1064060'>All</span>
  <span m='1064140'>right,</span> <span m='1064440'>great,</span> <span
  m='1065640'>so</span> <span m='1065810'>now</span> <span m='1066060'>we</span>
  <span m='1066170'>go</span> <span m='1066320'>down</span> <span
  m='1066590'>to</span> <span m='1066880'>F.</span> <span
  m='1067550'>What</span> <span m='1067770'>is</span> <span
  m='1067940'>F's</span> <span m='1068200'>alpha?</span> <span
  m='1071854'>Who</span> <span m='1072340'>says</span> <span
  m='1073570'>negative</span> <span m='1073880'>infinity?</span> <span
  m='1075938'>Who says</span> <span m='1076394'>2?</span> <span
  m='1078220'>No</span> <span m='1078460'>one--</span> <span
  m='1079450'>oh,</span> <span m='1079650'>you</span> <span
  m='1080390'>guys</span> <span m='1080830'>are</span> <span
  m='1081190'>good.</span> <span m='1081690'>It's</span> <span
  m='1081840'>negative</span> <span m='1082140'>infinity.</span> </p><p><span
  m='1083220'>Technically,</span> <span m='1083740'>it</span> <span
  m='1083860'>also</span> <span m='1084230'>will</span> <span
  m='1084600'>have</span> <span m='1084800'>a</span> <span
  m='1084860'>beta</span> <span m='1085630'>of</span> <span
  m='1085850'>2.</span> <span m='1086110'>But</span> <span
  m='1086290'>we're</span> <span m='1086430'>ignoring</span> <span
  m='1086730'>the</span> <span m='1086820'>beta.</span> <span
  m='1087260'>And</span> <span m='1087880'>the</span> <span
  m='1088160'>alphas</span> <span m='1088610'>that</span> <span
  m='1088700'>have</span> <span m='1088790'>been</span> <span
  m='1088930'>progressing</span> <span m='1089370'>downward</span> <span
  m='1089890'>from</span> <span m='1090160'>the</span> <span
  m='1090380'>parents--</span> <span m='1091500'>negative</span> <span
  m='1091830'>infinity.</span> <span m='1092240'>That's</span> <span
  m='1092430'>why I called it</span> <span m='1092890'>the</span> <span
  m='1092980'>grandfather</span> <span m='1093550'>clause</span> <span
  m='1093790'>before.</span> <span m='1094170'>Because</span> <span
  m='1094370'>you</span> <span m='1094500'>would</span> <span
  m='1094710'>often</span> <span m='1095050'>look</span> <span
  m='1095260'>up</span> <span m='1095490'>to</span> <span
  m='1095630'>your</span> <span m='1096130'>grandparent</span> <span
  m='1097340'>to</span> <span m='1098940'>see</span> <span
  m='1099090'>what</span> <span m='1099280'>your</span> <span
  m='1099820'>default</span> <span m='1100420'>number</span> <span
  m='1100750'>is.</span> <span m='1101800'>So</span> <span m='1102070'>we</span>
  <span m='1102180'>get</span> <span m='1102350'>an</span> <span
  m='1102470'>alpha</span> <span m='1102770'>of</span> <span
  m='1102850'>negative</span> <span m='1103190'>infinity.</span> <span
  m='1103830'>We</span> <span m='1103930'>then</span> <span
  m='1104160'>go</span> <span m='1104260'>down</span> <span
  m='1104430'>to</span> <span m='1104520'>the</span> <span m='1104620'>K.</span>
  <span m='1104970'>It's</span> <span m='1105120'>a</span> <span
  m='1105170'>static</span> <span m='1105540'>evaluation.</span> </p><p><span
  m='1106590'>And</span> <span m='1106730'>now</span> <span m='1106950'>I'm
  going to</span> <span m='1107100'>start</span> <span
  m='1107400'>calling</span> <span m='1107580'>on</span> <span
  m='1107660'>people</span> <span m='1107940'>individually.</span> <span
  m='1108550'>So</span> <span m='1108770'>hopefully</span> <span
  m='1109520'>people</span> <span m='1109850'>paid</span> <span
  m='1110040'>attention</span> <span m='1110450'>to</span> <span
  m='1110550'>the</span> <span m='1110630'>mob,</span> <span
  m='1111090'>who</span> <span m='1111300'>were</span> <span
  m='1111440'>always</span> <span m='1111720'>correct.</span> <span
  m='1114010'>All</span> <span m='1114060'>right,</span> <span
  m='1114470'>so</span> <span m='1114870'>we</span> <span m='1114960'>go</span>
  <span m='1115090'>down</span> <span m='1115250'>to</span> <span
  m='1115350'>K.</span> <span m='1116660'>And</span> <span m='1117080'>we</span>
  <span m='1117150'>see</span> <span m='1117470'>a</span> <span
  m='1117570'>3.</span> <span m='1118520'>F</span> <span m='1118830'>is</span>
  <span m='1118980'>a</span> <span m='1119030'>maximizer</span> <span
  m='1119680'>node.</span> <span m='1120520'>So</span> <span
  m='1121130'>what</span> <span m='1121370'>does</span> <span
  m='1121550'>F</span> <span m='1121910'>do now?</span> </p><p><span
  m='1123300'>AUDIENCE: Switches</span> <span m='1123730'>its alpha</span> <span
  m='1124160'>to</span> <span m='1124590'>3.</span> </p><p><span
  m='1125450'>PROFESSOR: Yes,</span> <span m='1126100'>switches</span> <span
  m='1126230'>its</span> <span m='1126450'>alpha</span> <span
  m='1126750'>to</span> <span m='1126850'>3,</span> <span
  m='1127920'>great.</span> <span m='1135430'>All</span> <span
  m='1135560'>right,</span> <span m='1136260'>so</span> <span
  m='1137370'>that's</span> <span m='1138290'>already</span> <span
  m='1138600'>quite</span> <span m='1138880'>good. It</span> <span
  m='1139130'>switches</span> <span m='1139390'>alpha</span> <span
  m='1139560'>to</span> <span m='1139700'>3.</span> <span
  m='1140075'>It's</span> <span m='1140450'>very</span> <span
  m='1140690'>happy.</span> <span m='1141330'>It's</span> <span
  m='1141460'>got</span> <span m='1141640'>a</span> <span m='1141700'>3</span>
  <span m='1142010'>here.</span> <span m='1143526'>That's</span> <span
  m='1143960'>a</span> <span m='1144160'>nice</span> <span
  m='1145170'>value.</span> <span m='1146360'>So</span> <span
  m='1148350'>what</span> <span m='1148740'>does</span> <span
  m='1148960'>it</span> <span m='1149150'>do</span> <span m='1152400'>at</span>
  <span m='1152570'>L,</span> <span m='1154768'>the</span> <span
  m='1155260'>next</span> <span m='1155752'>node?</span> <span
  m='1156736'>It's</span> <span m='1157230'>gone to K,</span> <span
  m='1157680'>went</span> <span m='1158150'>back</span> <span
  m='1158310'>up</span> <span m='1158490'>to F.</span> <span
  m='1158950'>Depth</span> <span m='1159090'>first</span> <span
  m='1159350'>search,</span> <span m='1159730'>the next one would</span> <span
  m='1159900'>be</span> <span m='1160090'>L,</span> <span
  m='1160260'>right?</span> </p><p><span m='1163662'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='1167376'>PROFESSOR: Well,</span> <span
  m='1167770'>technically</span> <span m='1168310'>F</span> <span
  m='1168570'>could</span> <span m='1168850'>take</span> <span
  m='1169300'>L's</span> <span m='1171210'>value</span> <span
  m='1171690'>of</span> <span m='1172020'>0</span> <span m='1172420'>if</span>
  <span m='1172530'>it</span> <span m='1172650'>liked</span> <span
  m='1172890'>it</span> <span m='1173030'>better</span> <span
  m='1173290'>than</span> <span m='1173570'>3.</span> <span m='1174690'>But
  it's</span> <span m='1174870'>a</span> <span m='1174970'>maximizer.</span>
  <span m='1175590'>So</span> <span m='1176120'>does</span> <span
  m='1176280'>it</span> <span m='1176370'>want</span> <span
  m='1176550'>to</span> <span m='1176650'>take</span> <span
  m='1176890'>that?</span> </p><p><span m='1177560'>AUDIENCE: [INAUDIBLE]</span>
  </p><p><span m='1178410'>PROFESSOR: OK,</span> <span m='1178970'>that</span>
  <span m='1179260'>technically</span> <span m='1179630'>would</span> <span
  m='1179800'>be</span> <span m='1179930'>correct.</span> <span
  m='1180310'>But</span> <span m='1180410'>I'm</span> <span
  m='1180560'>sorry.</span> <span m='1180880'>I</span> <span
  m='1180960'>burdened</span> <span m='1181330'>you</span> <span
  m='1181450'>with</span> <span m='1181590'>a</span> <span
  m='1181650'>trick</span> <span m='1181880'>question.</span> <span
  m='1183830'>In</span> <span m='1183990'>fact,</span> <span
  m='1185960'>we</span> <span m='1186140'>don't</span> <span
  m='1186380'>look</span> <span m='1186560'>at</span> <span m='1186640'>L</span>
  <span m='1186910'>at all.</span> <span m='1191780'>Does</span> <span
  m='1191900'>everyone</span> <span m='1192160'>see</span> <span
  m='1192310'>that?</span> <span m='1193510'>I'll</span> <span
  m='1193890'>explain.</span> </p><p><span m='1194740'>The</span> <span
  m='1194940'>alpha</span> <span m='1195310'>at</span> <span
  m='1195570'>F</span> <span m='1195830'>has</span> <span
  m='1196135'>reached</span> <span m='1196440'>3.</span> <span
  m='1197190'>But</span> <span m='1197350'>the</span> <span
  m='1197430'>beta</span> <span m='1198410'>at</span> <span m='1198690'>B</span>
  <span m='1199000'>is</span> <span m='1199410'>2.</span> <span
  m='1200700'>So</span> <span m='1200920'>B</span> <span
  m='1201200'>looks</span> <span m='1201520'>down</span> <span
  m='1201830'>and</span> <span m='1201970'>says,</span> <span
  m='1202700'>wait</span> <span m='1203000'>a</span> <span
  m='1203080'>minute.</span> <span m='1203600'>If</span> <span
  m='1203800'>I</span> <span m='1203930'>go</span> <span m='1204110'>down</span>
  <span m='1204460'>to</span> <span m='1204600'>F,</span> <span
  m='1205490'>my</span> <span m='1205790'>enemy's</span> <span
  m='1206400'>nuclear</span> <span m='1206780'>option,</span> <span
  m='1206990'>my</span> <span m='1207200'>enemy</span> <span
  m='1207510'>is</span> <span m='1207810'>the</span> <span
  m='1207950'>worst</span> <span m='1208380'>it</span> <span
  m='1208470'>can</span> <span m='1208650'>be</span> <span
  m='1208860'>for--</span> <span m='1209960'>the</span> <span
  m='1210070'>best</span> <span m='1210370'>it</span> <span
  m='1210450'>can</span> <span m='1210620'>be</span> <span
  m='1210790'>for</span> <span m='1210950'>me</span> <span m='1211120'>is</span>
  <span m='1211390'>3.</span> <span m='1211960'>F</span> <span
  m='1212700'>is</span> <span m='1212870'>trumpeting</span> <span
  m='1213150'>it</span> <span m='1213430'>around.</span> <span
  m='1214320'>I</span> <span m='1214460'>was</span> <span
  m='1214620'>thinking</span> <span m='1215000'>of</span> <span
  m='1215130'>eating</span> <span m='1215630'>his</span> <span
  m='1215750'>heart, or</span> <span m='1216130'>whatever,</span> <span
  m='1216530'>but</span> <span m='1216680'>I</span> <span
  m='1216750'>didn't</span> <span m='1216910'>want</span> <span
  m='1217130'>to.</span> <span m='1217310'>But</span> <span
  m='1217650'>it's</span> <span m='1217790'>going</span> <span
  m='1217910'>to</span> <span m='1217960'>be</span> <span m='1218150'>3.</span>
  <span m='1219050'>It's</span> <span m='1219240'>going</span> <span
  m='1219350'>to</span> <span m='1219400'>be</span> <span m='1219570'>3</span>
  <span m='1220240'>or</span> <span m='1220410'>higher</span> <span
  m='1222410'>down</span> <span m='1222620'>there</span> <span m='1222850'>at
  F.</span> </p><p><span m='1224150'>There's</span> <span m='1224390'>no</span>
  <span m='1224530'>way</span> <span m='1224740'>I</span> <span
  m='1224790'>want</span> <span m='1225060'>that.</span> <span
  m='1225270'>I</span> <span m='1225430'>already</span> <span
  m='1225640'>have</span> <span m='1226130'>my</span> <span
  m='1227620'>own</span> <span m='1227820'>default</span> <span
  m='1228270'>escape</span> <span m='1228640'>plan.</span> <span
  m='1229310'>And</span> <span m='1229430'>that's</span> <span
  m='1229720'>2.</span> <span m='1230510'>That's</span> <span
  m='1230800'>going</span> <span m='1230900'>to</span> <span
  m='1230940'>be</span> <span m='1231060'>better</span> <span
  m='1231340'>than</span> <span m='1231490'>whatever</span> <span
  m='1231910'>comes</span> <span m='1232170'>out</span> <span
  m='1232260'>of</span> <span m='1232320'>that</span> <span
  m='1232450'>horrible</span> <span m='1232850'>F.</span> <span
  m='1233310'>So</span> <span m='1233730'>screw</span> <span
  m='1234070'>it.</span> <span m='1235871'>And</span> <span
  m='1236250'>we</span> <span m='1236440'>never</span> <span
  m='1236670'>look</span> <span m='1236830'>at</span> <span
  m='1236930'>L.</span> <span m='1238700'>Does</span> <span
  m='1238830'>everyone</span> <span m='1239070'>get</span> <span
  m='1239270'>that?</span> <span m='1239535'>That</span> <span
  m='1239800'>is</span> <span m='1239950'>the</span> <span
  m='1240265'>main</span> <span m='1240580'>principle</span> <span
  m='1241150'>of</span> <span m='1241260'>alpha-beta</span> <span
  m='1241860'>pruning.</span> <span m='1243520'>If</span> <span
  m='1243620'>you</span> <span m='1243750'>see</span> <span
  m='1244140'>an</span> <span m='1244240'>alpha</span> <span
  m='1245140'>that's</span> <span m='1245400'>higher</span> <span
  m='1245900'>than</span> <span m='1246050'>the</span> <span
  m='1246130'>beta</span> <span m='1246510'>above</span> <span
  m='1246790'>it--</span> <span m='1247100'>as</span> <span m='1247230'>I</span>
  <span m='1247300'>said,</span> <span m='1247910'>if</span> <span
  m='1248050'>alpha</span> <span m='1248380'>goes</span> <span
  m='1248630'>up</span> <span m='1248810'>above</span> <span
  m='1249090'>the</span> <span m='1249180'>beta--</span> <span
  m='1250020'>or</span> <span m='1250220'>if</span> <span m='1250290'>you</span>
  <span m='1250360'>see</span> <span m='1250560'>a</span> <span
  m='1250610'>beta,</span> <span m='1252440'>like</span> <span
  m='1252640'>if</span> <span m='1252750'>there's</span> <span
  m='1252920'>a</span> <span m='1252960'>beta</span> <span
  m='1253320'>down</span> <span m='1255050'>here,</span> <span
  m='1255360'>and</span> <span m='1255760'>it's</span> <span
  m='1256000'>lower</span> <span m='1256420'>than</span> <span
  m='1256570'>the</span> <span m='1256640'>alpha</span> <span
  m='1257000'>above</span> <span m='1257290'>it,</span> <span m='1258630'>prune
  it.</span> <span m='1259450'>Stop</span> <span m='1259930'>doing</span> <span
  m='1260170'>that.</span> </p><p><span m='1262450'>And</span> <span
  m='1262940'>the</span> <span m='1263030'>question</span> <span
  m='1263310'>is,</span> <span m='1263420'>who</span> <span
  m='1263720'>prunes?</span> <span m='1264270'>Who</span> <span
  m='1264490'>decides</span> <span m='1264880'>that you</span> <span
  m='1265040'>don't</span> <span m='1265230'>look</span> <span
  m='1265400'>at</span> <span m='1265530'>L?</span> <span m='1266840'>The</span>
  <span m='1266950'>person</span> <span m='1267480'>who</span> <span
  m='1267680'>is</span> <span m='1267860'>thinking</span> <span
  m='1268210'>not</span> <span m='1268420'>to</span> <span
  m='1268510'>look</span> <span m='1268700'>at</span> <span m='1268800'>L</span>
  <span m='1269560'>is</span> <span m='1269710'>always</span> <span
  m='1270880'>up</span> <span m='1271430'>higher</span> <span
  m='1272210'>by</span> <span m='1272490'>at</span> <span
  m='1272630'>least</span> <span m='1272880'>two</span> <span
  m='1273020'>levels.</span> <span m='1273460'>So up</span> <span
  m='1273720'>here,</span> <span m='1273910'>B</span> <span
  m='1274140'>is</span> <span m='1274260'>saying,</span> <span
  m='1274620'>hmm,</span> <span m='1275390'>I</span> <span
  m='1275530'>don't</span> <span m='1275670'>want</span> <span
  m='1275790'>to</span> <span m='1275860'>look</span> <span
  m='1276090'>at</span> <span m='1276190'>L.</span> <span
  m='1276410'>Because</span> <span m='1276730'>F</span> <span
  m='1276980'>is</span> <span m='1277110'>already</span> <span
  m='1277530'>so</span> <span m='1277750'>terrible</span> <span
  m='1278240'>for</span> <span m='1278410'>me</span> <span
  m='1279130'>that</span> <span m='1279560'>it's</span> <span
  m='1279680'>just</span> <span m='1279910'>beyond</span> <span
  m='1280160'>belief.</span> <span m='1282890'>If</span> <span
  m='1283200'>this</span> <span m='1283450'>is</span> <span
  m='1283530'>100,</span> <span m='1284090'>it</span> <span
  m='1284180'>might</span> <span m='1284320'>be</span> <span
  m='1284400'>100.</span> <span m='1285920'>Even</span> <span
  m='1286360'>if</span> <span m='1286430'>it's</span> <span
  m='1286610'>lower,</span> <span m='1286950'>I'm still</span> <span
  m='1287230'>going</span> <span m='1287350'>to</span> <span
  m='1287390'>get</span> <span m='1287550'>a</span> <span
  m='1287610'>three.</span> </p><p><span m='1289350'>There's</span> <span
  m='1289590'>a</span> <span m='1289660'>sanity</span> <span
  m='1290150'>check</span> <span m='1290460'>that</span> <span
  m='1290630'>I've</span> <span m='1290850'>written</span> <span
  m='1292250'>that</span> <span m='1292430'>I</span> <span
  m='1292860'>sort</span> <span m='1292990'>of</span> <span
  m='1293090'>came</span> <span m='1293330'>up</span> <span
  m='1293460'>with</span> <span m='1294060'>just</span> <span
  m='1294350'>in</span> <span m='1294450'>case</span> <span
  m='1294740'>you're</span> <span m='1294830'>not</span> <span
  m='1295120'>sure</span> <span m='1295520'>that you</span> <span
  m='1295640'>can</span> <span m='1295770'>skip</span> <span
  m='1296060'>it.</span> <span m='1296180'>Because</span> <span
  m='1296340'>on</span> <span m='1296430'>a</span> <span m='1296490'>lot</span>
  <span m='1296710'>of</span> <span m='1296770'>these</span> <span
  m='1296960'>tests,</span> <span m='1297420'>we</span> <span
  m='1297570'>ask</span> <span m='1297790'>you,</span> <span
  m='1298060'>which</span> <span m='1298240'>one's</span> <span m='1298570'>do
  you</span> <span m='1298720'>evaluate,</span> <span m='1299240'>which</span>
  <span m='1299380'>ones</span> <span m='1299630'>do you</span> <span
  m='1299770'>skip,</span> <span m='1300180'>right?</span> <span
  m='1301100'>Or</span> <span m='1301450'>we</span> <span
  m='1301600'>just</span> <span m='1301770'>say,</span> <span
  m='1301880'>which</span> <span m='1302050'>ones</span> <span m='1302230'>do
  you</span> <span m='1302350'>evaluate,</span> <span m='1302675'>and</span>
  <span m='1303000'>you</span> <span m='1303120'>don't</span> <span
  m='1303310'>write</span> <span m='1303510'>the</span> <span
  m='1303600'>ones</span> <span m='1303770'>that</span> <span
  m='1303890'>you</span> <span m='1304325'>skip.</span> </p><p><span
  m='1304760'>Here's</span> <span m='1305000'>my</span> <span
  m='1305170'>sanity</span> <span m='1305660'>test</span> <span
  m='1306140'>to</span> <span m='1306230'>see</span> <span m='1307010'>if</span>
  <span m='1307170'>you</span> <span m='1307350'>can</span> <span
  m='1307520'>skip</span> <span m='1307780'>it.</span> <span
  m='1308860'>Ask</span> <span m='1309230'>yourself,</span> <span
  m='1310410'>if</span> <span m='1310580'>that</span> <span
  m='1310960'>node</span> <span m='1311870'>that</span> <span
  m='1311990'>I'm</span> <span m='1312080'>about</span> <span
  m='1312310'>to</span> <span m='1312380'>skip</span> <span
  m='1312630'>contained a</span> <span m='1313050'>negative</span> <span
  m='1313500'>infinity</span> <span m='1314040'>or</span> <span
  m='1314120'>some</span> <span m='1314420'>arbitrarily</span> <span
  m='1314940'>small</span> <span m='1315300'>number,</span> <span
  m='1316040'>negative</span> <span m='1316295'>infinity</span> <span
  m='1316550'>being</span> <span m='1316720'>the</span> <span
  m='1316790'>minimizer</span> <span m='1317220'>wins,</span> <span
  m='1318640'>would it</span> <span m='1318880'>change</span> <span
  m='1319240'>anything?</span> <span m='1321260'>Now</span> <span
  m='1321430'>that</span> <span m='1321540'>I've</span> <span
  m='1321670'>answered</span> <span m='1321980'>that,</span> <span
  m='1322420'>if it</span> <span m='1322920'>contained</span> <span
  m='1323220'>a</span> <span m='1323330'>positive</span> <span
  m='1323870'>infinity,</span> <span m='1325440'>would</span> <span
  m='1325480'>it</span> <span m='1325570'>change</span> <span
  m='1325880'>anything?</span> </p><p><span m='1327350'>If</span> <span
  m='1327520'>the</span> <span m='1327700'>answer</span> <span
  m='1328140'>is</span> <span m='1328390'>no</span> <span
  m='1329170'>both</span> <span m='1329510'>times,</span> <span
  m='1331080'>then</span> <span m='1331530'>you're</span> <span
  m='1331820'>definitely</span> <span m='1332330'>correct</span> <span
  m='1332800'>in pruning</span> <span m='1333055'>it.</span> <span
  m='1333760'>So</span> <span m='1334000'>look</span> <span
  m='1334220'>at</span> <span m='1334350'>that</span> <span
  m='1334570'>0.</span> <span m='1334850'>If</span> <span m='1334940'>it</span>
  <span m='1335020'>was</span> <span m='1335170'>a</span> <span
  m='1335260'>negative</span> <span m='1335760'>infinity,</span> <span
  m='1336020'>minimizer</span> <span m='1336440'>wins,</span> <span
  m='1336810'>what</span> <span m='1336970'>would</span> <span
  m='1337080'>happen?</span> <span m='1337705'>The</span> <span
  m='1338030'>maximizer</span> <span m='1338315'>would</span> <span
  m='1338600'>say,</span> <span m='1338950'>I'm</span> <span
  m='1339120'>not</span> <span m='1339300'>touching</span> <span
  m='1339540'>that</span> <span m='1339690'>was</span> <span
  m='1339780'>a</span> <span m='1339850'>10</span> <span m='1340080'>foot</span>
  <span m='1340320'>pole,</span> <span m='1341020'>choosing</span> <span
  m='1341410'>3.</span> <span m='1342370'>The</span> <span
  m='1342450'>minimizer</span> <span m='1342930'>would say,</span> <span
  m='1343430'>screw</span> <span m='1343580'>that,</span> <span
  m='1343850'>I'll</span> <span m='1344050'>take</span> <span
  m='1344250'>E.</span> </p><p><span m='1346380'>Let's</span> <span
  m='1346620'>say</span> <span m='1346700'>it</span> <span
  m='1346790'>was</span> <span m='1346940'>a</span> <span
  m='1347170'>positive</span> <span m='1347650'>infinity.</span> <span
  m='1348005'>The</span> <span m='1348360'>maximizer</span> <span
  m='1348700'>would</span> <span m='1348840'>say,</span> <span
  m='1349140'>eureka,</span> <span m='1349750'>holy</span> <span
  m='1350020'>grain,</span> <span m='1350340'>I</span> <span
  m='1350470'>win.</span> <span m='1351075'>The</span> <span
  m='1351420'>minimizer</span> <span m='1351550'>would</span> <span
  m='1351750'>say,</span> <span m='1351920'>yeah,</span> <span
  m='1352230'>if</span> <span m='1352360'>I'm</span> <span m='1352520'>a</span>
  <span m='1352570'>moron,</span> <span m='1353080'>and</span> <span
  m='1353200'>go</span> <span m='1353320'>down</span> <span
  m='1353570'>to</span> <span m='1353690'>F,</span> <span m='1354050'>and</span>
  <span m='1354190'>then</span> <span m='1354290'>would</span> <span
  m='1354370'>go</span> <span m='1354540'>to E</span> <span
  m='1354890'>and</span> <span m='1355190'>take</span> <span
  m='1355490'>2.</span> <span m='1356450'>So</span> <span m='1356720'>no</span>
  <span m='1356820'>matter</span> <span m='1357050'>what</span> <span
  m='1357270'>was</span> <span m='1357470'>there,</span> <span
  m='1359002'>the</span> <span m='1359420'>minimizer</span> <span
  m='1359695'>would</span> <span m='1359970'>go</span> <span
  m='1360200'>to</span> <span m='1360290'>E.</span> </p><p><span
  m='1361640'>And</span> <span m='1361760'>you</span> <span
  m='1361890'>could</span> <span m='1362030'>say,</span> <span
  m='1362280'>well,</span> <span m='1362560'>what</span> <span m='1362700'>if
  it</span> <span m='1362870'>was</span> <span m='1362980'>exactly</span> <span
  m='1363460'>2?</span> <span m='1364100'>But</span> <span
  m='1364880'>still</span> <span m='1365135'>the</span> <span
  m='1365390'>maximizer would</span> <span m='1365880'>choose</span> <span
  m='1366130'>K.</span> <span m='1366400'>The</span> <span
  m='1366490'>minimizer</span> <span m='1366890'>would go to</span> <span
  m='1367175'>E.</span> <span m='1367710'>So</span> <span
  m='1368170'>there's</span> <span m='1368520'>no</span> <span
  m='1368770'>reason</span> <span m='1369020'>to</span> <span
  m='1369070'>go</span> <span m='1369190'>down</span> <span
  m='1369460'>there.</span> <span m='1369680'>We</span> <span
  m='1369800'>can</span> <span m='1369960'>just</span> <span
  m='1370170'>prune</span> <span m='1370330'>it</span> <span
  m='1370410'>off</span> <span m='1370610'>right</span> <span
  m='1370800'>now.</span> <span m='1371410'>Does</span> <span
  m='1371720'>everyone</span> <span m='1371930'>agree,</span> <span
  m='1373550'>everyone</span> <span m='1373830'>see</span> <span
  m='1374070'>what</span> <span m='1374200'>I'm</span> <span
  m='1374310'>talking</span> <span m='1374570'>about</span> <span
  m='1374780'>here?</span> </p><p><span m='1375720'>Great,</span> <span
  m='1376510'>so</span> <span m='1377460'>we're</span> <span
  m='1377580'>now</span> <span m='1378400'>done</span> <span
  m='1379160'>with</span> <span m='1379640'>this</span> <span
  m='1379940'>branch.</span> <span m='1380225'>Because</span> <span
  m='1380510'>beta</span> <span m='1380840'>is</span> <span
  m='1381080'>2.</span> <span m='1381790'>So</span> <span m='1381980'>now</span>
  <span m='1382220'>we're</span> <span m='1382330'>up</span> <span
  m='1382500'>at</span> <span m='1382740'>old</span> <span
  m='1383070'>grandpappy</span> <span m='1384220'>A.</span> <span
  m='1385280'>And</span> <span m='1385540'>he has</span> <span m='1385690'>an
  alpha of</span> <span m='1385870'>negative</span> <span
  m='1386140'>infinity.</span> <span m='1386940'>Everyone,</span> <span
  m='1388380'>what</span> <span m='1388550'>will</span> <span
  m='1388700'>he</span> <span m='1388820'>do?</span> <span
  m='1391660'>He'll</span> <span m='1391940'>take</span> <span
  m='1392230'>the</span> <span m='1392340'>2.</span> <span
  m='1392750'>It's</span> <span m='1392920'>better than</span> <span
  m='1393370'>negative</span> <span m='1393590'>infinity</span> <span
  m='1394010'>for</span> <span m='1394410'>him. It's</span> <span
  m='1394590'>not</span> <span m='1394820'>wonderful.</span> <span
  m='1395600'>But</span> <span m='1395830'>certainly</span> <span
  m='1396310'>anything</span> <span m='1396670'>is</span> <span
  m='1396780'>better</span> <span m='1396980'>than an</span> <span
  m='1397180'>automatic</span> <span m='1397680'>loss.</span> </p><p><span
  m='1399670'>All</span> <span m='1399730'>right,</span> <span
  m='1400810'>now</span> <span m='1402250'>our</span> <span
  m='1402420'>highest</span> <span m='1402890'>node</span> <span m='1403200'>is
  a</span> <span m='1403320'>2.</span> <span m='1403780'>So</span> <span
  m='1403990'>let's</span> <span m='1404210'>keep</span> <span
  m='1404370'>that</span> <span m='1404520'>in</span> <span
  m='1404610'>mind</span> <span m='1404990'>for</span> <span
  m='1405260'>our</span> <span m='1405380'>alpha.</span> <span
  m='1407380'>OK,</span> <span m='1408100'>so</span> <span
  m='1408400'>let's</span> <span m='1408600'>go</span> <span
  m='1408870'>over</span> <span m='1409070'>here.</span> <span
  m='1409820'>Let's</span> <span m='1410100'>see,</span> <span
  m='1410910'>so</span> <span m='1411310'>what</span> <span
  m='1411490'>will</span> <span m='1411590'>be</span> <span
  m='1411690'>the</span> <span m='1411770'>value</span> <span
  m='1412010'>at</span> <span m='1412180'>C?</span> <span m='1412940'>What
  will</span> <span m='1413200'>be</span> <span m='1413370'>the</span> <span
  m='1413480'>beta</span> <span m='1413590'>value?</span> </p><p><span
  m='1417366'>AUDIENCE: [INAUDIBLE]</span> </p><p></p><p><span
  m='1422712'>PROFESSOR: You go</span> <span m='1423198'>back to which
  one?</span> <span m='1424660'>To</span> <span m='1424860'>G.</span> <span
  m='1426130'>I'm</span> <span m='1426340'>not</span> <span
  m='1426520'>at</span> <span m='1426690'>G yet.</span> <span
  m='1427090'>I'm</span> <span m='1427240'>actually</span> <span
  m='1428180'>just</span> <span m='1428400'>starting</span> <span
  m='1428880'>the</span> <span m='1428940'>middle</span> <span
  m='1429200'>branch.</span> <span m='1429800'>So</span> <span
  m='1430020'>I'm</span> <span m='1430120'>going</span> <span
  m='1430350'>to</span> <span m='1430430'>C.</span> <span m='1431070'>And</span>
  <span m='1431330'>what's</span> <span m='1431560'>going</span> <span
  m='1431660'>to</span> <span m='1431700'>be its</span> <span
  m='1431830'>starting</span> <span m='1432280'>beta</span> <span
  m='1432840'>before</span> <span m='1433290'>I</span> <span
  m='1434000'>go</span> <span m='1434160'>down?</span> </p><p><span
  m='1434902'>AUDIENCE: Infinity.</span> </p><p><span m='1436170'>PROFESSOR:
  Infinity,</span> <span m='1436670'>that's</span> <span
  m='1436870'>right--</span> <span m='1437080'>default</span> <span
  m='1437430'>value.</span> <span m='1438910'>It's</span> <span
  m='1439140'>easier</span> <span m='1439430'>than</span> <span
  m='1439590'>it</span> <span m='1439710'>seemed.</span> <span
  m='1440570'>All</span> <span m='1440640'>right,</span> <span
  m='1440990'>so</span> <span m='1441730'>yes,</span> <span
  m='1442320'>beta</span> <span m='1442720'>is</span> <span
  m='1442990'>equal</span> <span m='1443240'>to</span> <span
  m='1443330'>infinity.</span> <span m='1446370'>This</span> <span
  m='1446520'>should</span> <span m='1446670'>be</span> <span
  m='1446790'>better</span> <span m='1447200'>erased.</span> <span
  m='1448090'>I</span> <span m='1448190'>think</span> <span
  m='1448390'>it's</span> <span m='1448570'>confusing</span> <span
  m='1448970'>people.</span> <span m='1449570'>Great,</span> <span
  m='1450490'>OK,</span> <span m='1451140'>so</span> <span
  m='1451960'>beta</span> <span m='1452350'>is</span> <span
  m='1452440'>equal</span> <span m='1452610'>to</span> <span
  m='1452680'>infinity</span> <span m='1453320'>at</span> <span
  m='1453430'>C.</span> <span m='1454790'>Now</span> <span m='1454970'>we</span>
  <span m='1455070'>go</span> <span m='1455210'>down</span> <span
  m='1455520'>depth</span> <span m='1455690'>first</span> <span
  m='1455940'>search to</span> <span m='1456250'>G.</span> <span
  m='1457040'>What's</span> <span m='1457110'>going</span> <span
  m='1457210'>to</span> <span m='1457250'>be</span> <span m='1457320'>our</span>
  <span m='1457440'>alpha</span> <span m='1457730'>at G?</span> </p><p><span
  m='1458460'>AUDIENCE: Minus</span> <span m='1458846'>infinity.</span>
  </p><p><span m='1459620'>PROFESSOR: Ahh,</span> <span m='1460190'>it</span>
  <span m='1460320'>would</span> <span m='1460460'>seem</span> <span
  m='1460880'>so.</span> <span m='1461560'>However,</span> <span
  m='1462700'>take</span> <span m='1462900'>a</span> <span
  m='1462950'>look</span> <span m='1463140'>up</span> <span
  m='1463260'>at</span> <span m='1464030'>the</span> <span
  m='1464710'>great-grandpappy</span> <span m='1465580'>A.</span> <span
  m='1466110'>It</span> <span m='1466290'>seems</span> <span m='1466530'>to
  have</span> <span m='1466710'>changed</span> <span m='1467110'>to</span> <span
  m='1467190'>2.</span> <span m='1468490'>So</span> <span
  m='1468670'>this</span> <span m='1468980'>time</span> <span
  m='1469250'>it's</span> <span m='1469450'>2.</span> <span
  m='1469930'>Why</span> <span m='1470270'>is</span> <span m='1470400'>it</span>
  <span m='1470540'>2</span> <span m='1470910'>instead of negative</span> <span
  m='1471190'>infinity?</span> <span m='1471680'>Why can</span> <span
  m='1472030'>we</span> <span m='1472160'>let</span> <span m='1472410'>A</span>
  <span m='1472715'>be</span> <span m='1473020'>so</span> <span
  m='1473360'>noxious</span> <span m='1473870'>and</span> <span
  m='1474040'>not</span> <span m='1474370'>start</span> <span
  m='1474575'>with</span> <span m='1474780'>saying, oh, I</span> <span
  m='1475060'>automatically</span> <span m='1475710'>lose?</span> <span
  m='1476710'>Well, A</span> <span m='1476970'>knows</span> <span
  m='1477790'>that</span> <span m='1477940'>no</span> <span
  m='1478050'>matter</span> <span m='1478420'>how</span> <span
  m='1478850'>awful</span> <span m='1479380'>things</span> <span
  m='1479760'>get</span> <span m='1480040'>in</span> <span
  m='1480140'>that</span> <span m='1480320'>middle</span> <span
  m='1480530'>branch,</span> <span m='1482070'>he</span> <span
  m='1482260'>can</span> <span m='1482370'>just</span> <span
  m='1482540'>say,</span> <span m='1482750'>screw</span> <span
  m='1483030'>the</span> <span m='1483100'>whole</span> <span
  m='1483390'>middle</span> <span m='1483600'>branch.</span> <span
  m='1483930'>I'm</span> <span m='1484020'>going</span> <span
  m='1484220'>to</span> <span m='1484280'>B.</span> </p><p><span
  m='1485110'>That's</span> <span m='1485330'>something</span> <span
  m='1485660'>that</span> <span m='1486930'>the</span> <span
  m='1486990'>minimizer</span> <span m='1487460'>can't</span> <span
  m='1487880'>do.</span> <span m='1488130'>And</span> <span
  m='1488250'>we</span> <span m='1488350'>have</span> <span
  m='1488510'>to</span> <span m='1488610'>start</span> <span
  m='1488830'>at</span> <span m='1488920'>infinity</span> <span
  m='1489330'>for</span> <span m='1489440'>the</span> <span
  m='1489520'>minimizer.</span> <span m='1489920'>But</span> <span
  m='1490050'>the</span> <span m='1490120'>maximizer</span> <span
  m='1490660'>can.</span> <span m='1491140'>Because</span> <span m='1491270'>he
  has</span> <span m='1491450'>the</span> <span m='1491560'>choice</span> <span
  m='1491850'>at</span> <span m='1491940'>the</span> <span
  m='1492060'>top.</span> <span m='1492790'>Does</span> <span
  m='1492910'>everyone</span> <span m='1493150'>see</span> <span
  m='1493310'>that?</span> <span m='1493850'>He</span> <span
  m='1493930'>can</span> <span m='1494030'>just</span> <span
  m='1494160'>say,</span> <span m='1494340'>oh,</span> <span m='1494700'>I'm not
  even</span> <span m='1494870'>going</span> <span m='1495190'>to</span> <span
  m='1495300'>C.</span> <span m='1496165'>Yeah,</span> <span
  m='1496440'>shows</span> <span m='1496770'>you.</span> <span
  m='1497330'>I'm</span> <span m='1497550'>going</span> <span
  m='1497750'>to</span> <span m='1497830'>A and</span> <span
  m='1498220'>taking</span> <span m='1498590'>the 2.</span> <span
  m='1499320'>So</span> <span m='1499520'>therefore</span> <span
  m='1500040'>alpha</span> <span m='1500390'>is</span> <span
  m='1500530'>actually</span> <span m='1500910'>2</span> <span
  m='1501370'>at</span> <span m='1501824'>G.</span> </p><p><span
  m='1503640'>All</span> <span m='1503740'>right,</span> <span
  m='1503980'>great,</span> <span m='1504790'>so</span> <span
  m='1505590'>we've</span> <span m='1505730'>got</span> <span
  m='1505835'>an</span> <span m='1505940'>alpha</span> <span
  m='1506290'>that's</span> <span m='1506500'>2</span> <span m='1506760'>at
  G.</span> <span m='1507840'>We're</span> <span m='1507990'>going</span> <span
  m='1508100'>to</span> <span m='1508150'>go</span> <span
  m='1508290'>down</span> <span m='1508480'>to</span> <span
  m='1508690'>M.</span> <span m='1509310'>It's</span> <span m='1509610'>a</span>
  <span m='1509830'>minimizer.</span> <span m='1510790'>All</span> <span
  m='1510860'>right,</span> <span m='1511100'>what's</span> <span
  m='1511320'>going</span> <span m='1511420'>to</span> <span
  m='1511460'>be</span> <span m='1511580'>our</span> <span
  m='1511860'>beta</span> <span m='1512060'>value</span> <span m='1512330'>at
  M?</span> </p><p><span m='1514790'>AUDIENCE: [INAUDIBLE]</span> </p><p><span
  m='1519230'>PROFESSOR: Or</span> <span m='1519535'>which</span> <span
  m='1519840'>is the</span> <span m='1520130'>beta</span> <span
  m='1520470'>default,</span> <span m='1520950'>minus</span> <span
  m='1521330'>or</span> <span m='1521440'>positive</span> <span
  m='1521850'>infinity?</span> <span m='1522200'>What</span> <span
  m='1522550'>would be</span> <span m='1522940'>the</span> <span
  m='1523120'>minimizer?</span> </p><p><span m='1524950'>AUDIENCE:
  Positive.</span> </p><p><span m='1525345'>PROFESSOR: Positive</span> <span
  m='1525740'>infinity,</span> <span m='1526170'>that's</span> <span
  m='1526420'>right.</span> <span m='1527180'>M is</span> <span
  m='1527680'>going</span> <span m='1527790'>to</span> <span m='1527830'>be
  a</span> <span m='1527990'>positive</span> <span m='1528440'>infinity</span>
  <span m='1528880'>for</span> <span m='1529010'>beta.</span> <span
  m='1529250'>Again,</span> <span m='1529630'>it</span> <span
  m='1529780'>picks</span> <span m='1530000'>it</span> <span
  m='1530060'>up</span> <span m='1530230'>from</span> <span
  m='1530400'>C.</span> <span m='1533590'>Great,</span> <span
  m='1534670'>now</span> <span m='1535040'>we</span> <span
  m='1535140'>get</span> <span m='1535360'>to</span> <span
  m='1535460'>some</span> <span m='1535700'>actual</span> <span
  m='1536230'>values.</span> <span m='1539030'>So</span> <span
  m='1539840'>we're</span> <span m='1540020'>at</span> <span
  m='1540170'>some</span> <span m='1540290'>actual</span> <span
  m='1540630'>values.</span> <span m='1541390'>We</span> <span
  m='1541600'>are</span> <span m='1542100'>at</span> <span m='1542820'>Q.</span>
  <span m='1543360'>So</span> <span m='1543760'>what's</span> <span
  m='1545000'>going</span> <span m='1545120'>to</span> <span
  m='1545170'>happen</span> <span m='1545520'>at M</span> <span
  m='1545860'>when</span> <span m='1545990'>M</span> <span
  m='1546180'>sees</span> <span m='1546410'>that</span> <span m='1546530'>Q
  is</span> <span m='1546860'>1?</span> </p><p><span m='1553431'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='1555350'>PROFESSOR: What</span> <span
  m='1555490'>is</span> <span m='1555930'>beta?</span> <span m='1556040'>It
  says</span> <span m='1556190'>infinity. I'm</span> <span
  m='1556553'>sorry,</span> <span m='1556916'>it's</span> <span m='1557280'>hard
  to read.</span> <span m='1557890'>Beta</span> <span m='1558110'>is</span>
  <span m='1558200'>infinity</span> <span m='1558465'>at</span> <span
  m='1558730'>M.</span> </p><p><span m='1559486'>AUDIENCE: OK,</span> <span
  m='1559982'>so it's going to</span> <span m='1560478'>minimize,</span> <span
  m='1560974'>right?</span> <span m='1561470'>So it's going to be</span> <span
  m='1561966'>like,</span> <span m='1562462'>OK,</span> <span
  m='1562958'>[INAUDIBLE].</span> </p><p><span m='1565200'>PROFESSOR:
  That's</span> <span m='1565440'>right.</span> <span m='1566000'>So</span>
  <span m='1566730'>they're</span> <span m='1566950'>going to</span> <span
  m='1567230'>put</span> <span m='1567420'>beta</span> <span
  m='1567720'>to</span> <span m='1567820'>1.</span> <span
  m='1568270'>Because</span> <span m='1568510'>it</span> <span
  m='1568640'>sees</span> <span m='1568940'>Q.</span> <span
  m='1569930'>Great,</span> <span m='1572080'>so</span> <span
  m='1572810'>my</span> <span m='1573160'>next</span> <span
  m='1573400'>question</span> <span m='1573790'>is,</span> <span
  m='1576250'>what's</span> <span m='1576520'>going</span> <span
  m='1576600'>to</span> <span m='1576640'>happen</span> <span
  m='1576860'>at</span> <span m='1577200'>R?</span> </p><p><span
  m='1579124'>AUDIENCE: [INAUDIBLE]</span> </p><p></p><p><span
  m='1588030'>PROFESSOR: Very</span> <span m='1588100'>smart.</span> <span
  m='1590010'>You've</span> <span m='1590350'>detected</span> <span
  m='1590750'>my</span> <span m='1590890'>trap.</span> <span
  m='1591700'>The</span> <span m='1591800'>question</span> <span
  m='1592110'>is,</span> <span m='1592230'>does</span> <span
  m='1592380'>it</span> <span m='1592480'>look</span> <span
  m='1592690'>at</span> <span m='1592770'>R?</span> <span m='1592855'>The</span>
  <span m='1592940'>answer</span> <span m='1593320'>is,</span> <span
  m='1594570'>no.</span> <span m='1595170'>It</span> <span
  m='1595250'>doesn't</span> <span m='1595530'>look</span> <span
  m='1595710'>at</span> <span m='1595800'>R.</span> <span m='1596260'>Why</span>
  <span m='1596490'>doesn't it</span> <span m='1596720'>look</span> <span
  m='1596870'>at</span> <span m='1596930'>R?</span> <span
  m='1597100'>Does</span> <span m='1597220'>everyone</span> <span
  m='1597530'>see?</span> <span m='1599020'>Yeah,</span> <span
  m='1599340'>alpha</span> <span m='1599810'>is</span> <span
  m='1600020'>now</span> <span m='1600360'>greater</span> <span
  m='1601060'>than</span> <span m='1601290'>the</span> <span
  m='1601350'>beta</span> <span m='1601630'>below</span> <span
  m='1602110'>it.</span> <span m='1602330'>Beta has</span> <span
  m='1602510'>gotten</span> <span m='1602820'>lower</span> <span
  m='1603150'>than</span> <span m='1603310'>alpha.</span> </p><p><span
  m='1604020'>This</span> <span m='1604220'>is</span> <span
  m='1604310'>the</span> <span m='1604400'>same</span> <span
  m='1604690'>thing</span> <span m='1604870'>I</span> <span
  m='1604890'>was</span> <span m='1605040'>talking</span> <span
  m='1605280'>about</span> <span m='1605460'>before,</span> <span
  m='1606000'>when</span> <span m='1606080'>we</span> <span
  m='1606190'>figured</span> <span m='1606460'>out</span> <span m='1606570'>that
  the</span> <span m='1606730'>alpha here</span> <span m='1607040'>is</span>
  <span m='1607260'>2.</span> <span m='1608090'>The</span> <span
  m='1608170'>maximizer</span> <span m='1608790'>says,</span> <span
  m='1610180'>wait</span> <span m='1610990'>a</span> <span
  m='1611030'>minute.</span> <span m='1612470'>The</span> <span
  m='1612640'>maximizer</span> <span m='1612830'>G</span> <span
  m='1613090'>says,</span> <span m='1613340'>if</span> <span
  m='1613500'>I</span> <span m='1613640'>go</span> <span m='1613800'>to</span>
  <span m='1613870'>M,</span> <span m='1614770'>the</span> <span
  m='1614860'>best</span> <span m='1615220'>I'm</span> <span
  m='1615300'>getting</span> <span m='1615540'>out</span> <span m='1615740'>of
  this</span> <span m='1615850'>is</span> <span m='1615980'>1.</span> <span
  m='1616940'>Because</span> <span m='1617150'>if</span> <span
  m='1617270'>this</span> <span m='1617450'>is</span> <span
  m='1617540'>negative</span> <span m='1617830'>infinity,</span> <span
  m='1618300'>the</span> <span m='1618720'>minimizer</span> <span
  m='1619120'>will</span> <span m='1619290'>choose</span> <span
  m='1619540'>it.</span> <span m='1619730'>If</span> <span m='1619920'>this
  is</span> <span m='1620330'>positive</span> <span m='1620520'>infinity,</span>
  <span m='1620750'>he'll choose</span> <span m='1620950'>1.</span> <span
  m='1621555'>The</span> <span m='1621820'>best</span> <span
  m='1622100'>I'm</span> <span m='1622210'>going</span> <span
  m='1622310'>to</span> <span m='1622350'>get</span> <span
  m='1622510'>out</span> <span m='1622670'>of here is</span> <span
  m='1622930'>1.</span> </p><p><span m='1624310'>If</span> <span
  m='1624490'>that's</span> <span m='1624910'>the</span> <span
  m='1625020'>case,</span> <span m='1625470'>I</span> <span
  m='1625570'>might</span> <span m='1625720'>as</span> <span m='1625780'>well
  have</span> <span m='1625980'>just</span> <span m='1626150'>gone</span> <span
  m='1626320'>to</span> <span m='1626390'>B</span> <span m='1626810'>and</span>
  <span m='1626910'>not</span> <span m='1627080'>even</span> <span
  m='1627250'>gone</span> <span m='1627520'>to</span> <span
  m='1627590'>C.</span> <span m='1628140'>So</span> <span m='1628290'>I'm</span>
  <span m='1628460'>not</span> <span m='1628680'>going</span> <span
  m='1628800'>to</span> <span m='1628840'>go</span> <span m='1629110'>to</span>
  <span m='1629270'>M.</span> <span m='1629600'>I'll go</span> <span
  m='1629930'>to N,</span> <span m='1630180'>maybe.</span> <span
  m='1630440'>Maybe</span> <span m='1630680'>N is</span> <span
  m='1630960'>better.</span> <span m='1633370'>Does</span> <span
  m='1633510'>everyone</span> <span m='1633760'>see</span> <span
  m='1633890'>that?</span> <span m='1635300'>Great,</span> <span
  m='1636440'>so</span> <span m='1637690'>let's</span> <span
  m='1637980'>say</span> <span m='1638170'>that</span> <span
  m='1638400'>the</span> <span m='1638470'>maximizer</span> <span
  m='1639350'>does</span> <span m='1639650'>go</span> <span
  m='1639840'>to</span> <span m='1639980'>N.</span> <span m='1640270'>So</span>
  <span m='1640590'>what's</span> <span m='1640830'>going</span> <span
  m='1640950'>to</span> <span m='1641000'>happen</span> <span m='1641300'>with
  this</span> <span m='1641710'>alpha?</span> </p><p><span m='1643379'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='1644800'>PROFESSOR: That's</span> <span
  m='1645195'>right,</span> <span m='1645590'>it's</span> <span
  m='1646070'>going</span> <span m='1646180'>to</span> <span
  m='1646220'>be</span> <span m='1646320'>7.</span> <span m='1646640'>7</span>
  <span m='1647100'>is</span> <span m='1647310'>better</span> <span
  m='1647600'>than</span> <span m='1647820'>2.</span> <span
  m='1648080'>And</span> <span m='1648180'>the</span> <span
  m='1648230'>maximizer</span> <span m='1648780'>has</span> <span
  m='1649050'>control</span> <span m='1650020'>to</span> <span m='1650110'>get
  to</span> <span m='1650270'>that</span> <span m='1650530'>seven,</span> <span
  m='1650960'>at</span> <span m='1651090'>least</span> <span
  m='1651330'>if</span> <span m='1651420'>it</span> <span
  m='1651520'>gets</span> <span m='1651810'>to</span> <span
  m='1651930'>G.</span> <span m='1654160'>All</span> <span
  m='1654495'>right,</span> <span m='1655190'>now</span> <span
  m='1655470'>the</span> <span m='1655570'>minimizer</span> <span
  m='1656120'>at</span> <span m='1656280'>C--</span> <span
  m='1656940'>we'll</span> <span m='1657240'>do</span> <span
  m='1657480'>everyone</span> <span m='1657870'>this</span> <span
  m='1658050'>time.</span> <span m='1658580'>The</span> <span
  m='1658680'>minimizer</span> <span m='1659170'>at</span> <span
  m='1659330'>C,</span> <span m='1659910'>seeing</span> <span
  m='1660240'>that</span> <span m='1660450'>7,</span> <span m='1660805'>what
  does</span> <span m='1661380'>the</span> <span m='1661420'>minimizer</span>
  <span m='1661830'>do?</span> <span m='1663811'>Anyone?</span> </p><p><span
  m='1668200'>So</span> <span m='1668460'>it</span> <span
  m='1668580'>sees</span> <span m='1668800'>the</span> <span
  m='1668890'>7.</span> <span m='1669210'>What</span> <span m='1669350'>does
  it</span> <span m='1669510'>do</span> <span m='1669670'>to its</span> <span
  m='1669800'>beta?</span> <span m='1670680'>It</span> <span
  m='1670940'>takes</span> <span m='1671395'>the</span> <span
  m='1671850'>7--</span> <span m='1673050'>better</span> <span
  m='1673340'>than</span> <span m='1673490'>infinity,</span> <span
  m='1673930'>anyway.</span> <span m='1675330'>And</span> <span
  m='1675490'>yeah,</span> <span m='1675550'>then</span> <span
  m='1675750'>it</span> <span m='1676020'>checks</span> <span
  m='1676420'>H.</span> <span m='1677210'>And</span> <span
  m='1677580'>everybody,</span> <span m='1677940'>again,</span> <span
  m='1678140'>what</span> <span m='1678290'>happens</span> <span
  m='1678560'>at</span> <span m='1678990'>H?</span> <span m='1680100'>It</span>
  <span m='1680535'>takes the 6.</span> <span m='1680970'>It's</span> <span
  m='1681140'>lower</span> <span m='1681400'>than</span> <span
  m='1681570'>7.</span> </p><p><span m='1684730'>All</span> <span
  m='1684880'>right,</span> <span m='1685460'>now</span> <span
  m='1686290'>we'll</span> <span m='1686410'>go</span> <span
  m='1686600'>back</span> <span m='1686850'>to</span> <span
  m='1687550'>having</span> <span m='1687820'>people</span> <span
  m='1688100'>do</span> <span m='1688210'>it</span> <span m='1688270'>on</span>
  <span m='1688390'>their</span> <span m='1688550'>own.</span> <span
  m='1688830'>Well,</span> <span m='1689130'>all the</span> <span
  m='1689360'>way</span> <span m='1689480'>back</span> <span
  m='1689680'>to</span> <span m='1689770'>the</span> <span
  m='1689840'>top,</span> <span m='1690160'>what</span> <span
  m='1690370'>does</span> <span m='1690570'>A do</span> <span
  m='1690830'>when</span> <span m='1690980'>it</span> <span
  m='1691090'>sees</span> <span m='1691310'>the</span> <span
  m='1691390'>6</span> <span m='1691770'>coming out of</span> <span
  m='1692252'>C?</span> </p><p><span m='1693216'>AUDIENCE: Changes</span> <span
  m='1693698'>to 6.</span> </p><p><span m='1695150'>PROFESSOR: Changes</span>
  <span m='1695250'>to 6,</span> <span m='1695660'>that's</span> <span
  m='1696050'>right.</span> <span m='1697330'>Alpha</span> <span
  m='1697620'>equals</span> <span m='1697920'>6.</span> <span
  m='1698910'>Great--</span> <span m='1701500'>homestretch,</span> <span
  m='1702250'>people,</span> <span m='1703550'>homestretch.</span> <span
  m='1704620'>So</span> <span m='1706610'>the</span> <span
  m='1706690'>minimizer,</span> <span m='1707450'>everyone,</span> <span
  m='1707990'>has</span> <span m='1708240'>a</span> <span
  m='1708280'>beta</span> <span m='1708600'>of</span> <span
  m='1710150'>infinity.</span> <span m='1711650'>And</span> <span
  m='1711950'>if</span> <span m='1712170'>I</span> <span
  m='1712460'>wasn't</span> <span m='1712850'>a</span> <span
  m='1713110'>static</span> <span m='1713320'>node,</span> <span
  m='1713740'>it</span> <span m='1713850'>would</span> <span
  m='1713970'>have</span> <span m='1714150'>an</span> <span
  m='1714220'>alpha</span> <span m='1714710'>of 6.</span> <span
  m='1715070'>But</span> <span m='1715200'>it is</span> <span
  m='1715570'>a</span> <span m='1715770'>static</span> <span
  m='1715930'>node.</span> <span m='1716090'>So</span> <span
  m='1716250'>it</span> <span m='1716380'>just</span> <span
  m='1716560'>has</span> <span m='1716680'>a</span> <span
  m='1716720'>value</span> <span m='1717160'>of</span> <span
  m='1717320'>1.</span> </p><p><span m='1718570'>So</span> <span
  m='1719050'>since</span> <span m='1719260'>it</span> <span
  m='1719360'>has</span> <span m='1719500'>a value</span> <span m='1719820'>of
  1,</span> <span m='1720070'>everyone,</span> <span m='1720500'>the</span>
  <span m='1720570'>beta</span> <span m='1720840'>becomes</span> <span
  m='1722380'>1.</span> <span m='1723380'>And</span> <span
  m='1723570'>what</span> <span m='1723750'>next,</span> <span
  m='1724040'>everyone?</span> </p><p><span m='1725440'>AUDIENCE: Prune.</span>
  </p><p><span m='1725930'>PROFESSOR: Prune,</span> <span
  m='1727080'>that's</span> <span m='1727340'>right.</span> <span
  m='1729960'>Why</span> <span m='1730230'>prune?</span> <span
  m='1731110'>Well,</span> <span m='1731330'>this</span> <span
  m='1731550'>time</span> <span m='1732370'>it's</span> <span
  m='1732730'>A</span> <span m='1733010'>himself</span> <span m='1733870'>who
  can</span> <span m='1734020'>prune.</span> <span m='1734650'>A</span> <span
  m='1734830'>says,</span> <span m='1735220'>well</span> <span
  m='1735560'>darn,</span> <span m='1735900'>if</span> <span
  m='1736010'>I</span> <span m='1736050'>go</span> <span m='1736180'>to</span>
  <span m='1736280'>D,</span> <span m='1736635'>I'm going to get</span> <span
  m='1736990'>1</span> <span m='1737250'>or</span> <span
  m='1737640'>something</span> <span m='1737800'>even</span> <span
  m='1738050'>worse</span> <span m='1738380'>than</span> <span
  m='1738530'>1.</span> <span m='1739360'>I</span> <span
  m='1739810'>might</span> <span m='1740030'>as</span> <span
  m='1740140'>well</span> <span m='1740320'>take</span> <span
  m='1740470'>my</span> <span m='1740600'>6</span> <span
  m='1741040'>while</span> <span m='1741290'>I</span> <span
  m='1741540'>have</span> <span m='1741805'>it,</span> <span
  m='1742550'>prune</span> <span m='1742950'>all</span> <span
  m='1743410'>the</span> <span m='1743500'>rest</span> <span
  m='1743950'>all</span> <span m='1744260'>the</span> <span
  m='1744320'>way</span> <span m='1744480'>down.</span> </p><p><span
  m='1749210'>Everyone</span> <span m='1749480'>see</span> <span
  m='1749640'>that?</span> <span m='1750620'>Everyone</span> <span
  m='1750950'>cool with</span> <span m='1751260'>that?</span> <span
  m='1752710'>It's</span> <span m='1752860'>not</span> <span
  m='1753140'>too</span> <span m='1753290'>bad</span> <span
  m='1753780'>if</span> <span m='1753880'>you</span> <span
  m='1753970'>take</span> <span m='1754200'>it</span> <span
  m='1754230'>one</span> <span m='1754440'>step at a</span> <span
  m='1754830'>time.</span> <span m='1756060'>We</span> <span
  m='1756220'>did</span> <span m='1756480'>it.</span> <span
  m='1758410'>Our</span> <span m='1758930'>question</span> <span
  m='1759320'>is,</span> <span m='1759510'>which</span> <span
  m='1759760'>nodes</span> <span m='1760080'>are</span> <span
  m='1760180'>evaluated</span> <span m='1760720'>in</span> <span
  m='1760980'>order?</span> <span m='1761966'>Our</span> <span
  m='1762460'>answer</span> <span m='1762790'>is,</span> <span
  m='1763450'>everyone--</span> <span m='1764510'>E,</span> <span
  m='1765926'>K,</span> <span m='1767830'>Q,</span> <span m='1770680'>N,</span>
  <span m='1771740'>H,</span> <span m='1772640'>I.</span> <span
  m='1774530'>OK,</span> <span m='1774750'>not so</span> <span
  m='1775020'>obvious,</span> <span m='1775380'>I</span> <span
  m='1775440'>guess.</span> <span m='1775670'>A</span> <span
  m='1775960'>few</span> <span m='1776190'>people</span> <span
  m='1776490'>followed</span> <span m='1776840'>me.</span> <span
  m='1776980'>But</span> <span m='1777160'>it</span> <span m='1777270'>is</span>
  <span m='1777510'>E,</span> <span m='1777870'>K,</span> <span
  m='1778330'>Q,</span> <span m='1778620'>N,</span> <span m='1778890'>H,</span>
  <span m='1779160'>I.</span> <span m='1779465'>It's just</span> <span
  m='1779770'>depth</span> <span m='1780050'>first</span> <span
  m='1780290'>order.</span> <span m='1780590'>And</span> <span
  m='1780670'>we</span> <span m='1780850'>pruned</span> <span
  m='1781110'>some</span> <span m='1781310'>of</span> <span
  m='1781373'>them</span> <span m='1781436'>away.</span> </p><p><span
  m='1783220'>Great,</span> <span m='1784530'>so</span> <span
  m='1785380'>that</span> <span m='1785630'>is</span> <span
  m='1785720'>alpha-beta.</span> <span m='1787260'>Any</span> <span
  m='1787510'>questions</span> <span m='1787930'>about</span> <span
  m='1788130'>that</span> <span m='1788300'>before</span> <span
  m='1788690'>I</span> <span m='1788810'>give</span> <span
  m='1789080'>some</span> <span m='1789210'>questions</span> <span
  m='1789470'>about</span> <span m='1789760'>progressive</span> <span
  m='1790270'>deepening?</span> <span m='1792130'>All</span> <span
  m='1792230'>right,</span> <span m='1792450'>we've</span> <span
  m='1792580'>got</span> <span m='1792750'>a</span> <span
  m='1792810'>bunch.</span> <span m='1793230'>So</span> <span
  m='1793540'>first</span> <span m='1793800'>question.</span> </p><p><span
  m='1795182'>AUDIENCE: [INAUDIBLE]</span> <span m='1799070'>nodes</span> <span
  m='1799556'>like</span> <span m='1800042'>F,</span> <span
  m='1800528'>B,</span> <span m='1801014'>C,</span> <span m='1801500'>and
  D?</span> </p><p><span m='1802480'>PROFESSOR: The</span> <span
  m='1802690'>question</span> <span m='1803100'>is,</span> <span
  m='1803630'>when</span> <span m='1803860'>asked</span> <span
  m='1804190'>for</span> <span m='1804270'>the</span> <span
  m='1804360'>order</span> <span m='1804660'>of</span> <span
  m='1804700'>evaluation,</span> <span m='1805030'>are</span> <span
  m='1805520'>we</span> <span m='1805940'>excluding</span> <span
  m='1806560'>F,</span> <span m='1806790'>B,</span> <span m='1807055'>C,</span>
  <span m='1807320'>and</span> <span m='1807510'>D?</span> <span
  m='1807900'>The</span> <span m='1808160'>answer</span> <span
  m='1808490'>is</span> <span m='1808570'>we're</span> <span
  m='1808710'>talking</span> <span m='1808930'>about</span> <span
  m='1809220'>here</span> <span m='1809410'>static</span> <span
  m='1810010'>evaluation.</span> <span m='1811250'>The</span> <span
  m='1811350'>static</span> <span m='1811700'>evaluator</span> <span
  m='1812280'>is</span> <span m='1812380'>a</span> <span m='1812420'>very</span>
  <span m='1813610'>important</span> <span m='1814020'>and</span> <span
  m='1814210'>interesting</span> <span m='1814720'>function.</span> <span
  m='1815400'>And</span> <span m='1816280'>I'll</span> <span
  m='1816430'>get</span> <span m='1816620'>back</span> <span
  m='1816780'>to</span> <span m='1816880'>something</span> <span
  m='1817200'>a</span> <span m='1817250'>few</span> <span
  m='1817440'>students</span> <span m='1817750'>have</span> <span
  m='1817860'>asked</span> <span m='1818160'>me</span> <span m='1818230'>about
  the</span> <span m='1818530'>static</span> <span m='1818810'>evaluator</span>
  <span m='1819370'>later</span> <span m='1819760'>and</span> <span
  m='1820100'>try</span> <span m='1820280'>to</span> <span
  m='1820340'>explain</span> <span m='1820710'>what</span> <span
  m='1820930'>it</span> <span m='1821040'>is.</span> <span
  m='1821630'>It's</span> <span m='1821830'>basically</span> <span
  m='1822190'>the</span> <span m='1822290'>thing</span> <span
  m='1822470'>that</span> <span m='1822600'>pops</span> <span
  m='1822890'>out</span> <span m='1823020'>those</span> <span
  m='1823210'>numbers</span> <span m='1823650'>at</span> <span
  m='1823770'>the</span> <span m='1823820'>bottom</span> <span
  m='1824070'>of</span> <span m='1824200'>the</span> <span
  m='1824290'>leaves.</span> </p><p><span m='1825220'>So</span> <span
  m='1825480'>when we</span> <span m='1825600'>ask,</span> <span
  m='1825990'>what</span> <span m='1826190'>is</span> <span
  m='1826270'>the</span> <span m='1826350'>order</span> <span
  m='1826550'>of</span> <span m='1826640'>nodes that</span> <span
  m='1826890'>were</span> <span m='1827040'>statically</span> <span
  m='1827480'>evaluated,</span> <span m='1828180'>we</span> <span
  m='1828300'>mean</span> <span m='1828890'>leaves</span> <span
  m='1829480'>only.</span> <span m='1831510'>That's</span> <span
  m='1831680'>a</span> <span m='1831720'>good</span> <span
  m='1831910'>question.</span> <span m='1832580'>Any</span> <span
  m='1832650'>other</span> <span m='1832830'>questions?</span> <span
  m='1833620'>Let's</span> <span m='1833860'>see,</span> <span m='1834260'>there
  was</span> <span m='1834450'>one</span> <span m='1834630'>up</span> <span
  m='1834760'>here</span> <span m='1834920'>before.</span> <span
  m='1835430'>But</span> <span m='1835610'>it's</span> <span
  m='1835820'>gone.</span> <span m='1836170'>It might have been</span> <span
  m='1836520'>the same</span> <span m='1836986'>one.</span> <span
  m='1837918'>Question?</span> </p><p><span m='1838384'>AUDIENCE: So</span>
  <span m='1838850'>a similar question.</span> <span m='1839316'>When you</span>
  <span m='1839782'>say,</span> <span m='1840015'>static</span> <span
  m='1840248'>nodes,</span> <span m='1840714'>that</span> <span m='1841180'>just
  means</span> <span m='1841646'>the leaf nodes?</span> </p><p><span
  m='1842578'>PROFESSOR: Means</span> <span m='1842735'>the</span> <span
  m='1842892'>leaf</span> <span m='1843050'>nodes,</span> <span
  m='1843340'>that's</span> <span m='1843560'>right.</span> <span
  m='1843750'>The</span> <span m='1843820'>question</span> <span
  m='1844110'>is,</span> <span m='1844280'>does</span> <span
  m='1844380'>static</span> <span m='1844830'>nodes</span> <span
  m='1845070'>mean</span> <span m='1845320'>the leaf</span> <span
  m='1845540'>nodes.</span> <span m='1845710'>The</span> <span
  m='1845870'>answer</span> <span m='1846230'>is</span> <span
  m='1846740'>yes.</span> </p><p><span m='1847440'>AUDIENCE: And</span> <span
  m='1847790'>so</span> <span m='1847988'>static</span> <span
  m='1848187'>evaluation is when</span> <span m='1848584'>you</span> <span
  m='1848981'>compare</span> <span m='1849380'>the value</span> <span
  m='1849550'>of a</span> <span m='1849945'>static</span> <span
  m='1850340'>node</span> <span m='1850680'>to</span> <span
  m='1851420'>something?</span> </p><p><span m='1852140'>PROFESSOR:
  Static</span> <span m='1852500'>evaluation</span> <span m='1852920'>is</span>
  <span m='1853020'>when</span> <span m='1853180'>you</span> <span
  m='1853250'>get</span> <span m='1853570'>that</span> <span
  m='1853780'>number,</span> <span m='1854260'>the</span> <span
  m='1854500'>static node.</span> <span m='1855180'>Let</span> <span
  m='1855400'>me</span> <span m='1855580'>explain.</span> <span
  m='1856480'>Unless</span> <span m='1856840'>someone</span> <span
  m='1857050'>else</span> <span m='1857220'>has</span> <span
  m='1857460'>another</span> <span m='1858090'>question</span> <span
  m='1858320'>about</span> <span m='1858650'>alpha-beta,</span> <span
  m='1859140'>let</span> <span m='1859260'>me</span> <span
  m='1859340'>explain</span> <span m='1859710'>static</span> <span
  m='1860090'>values.</span> <span m='1860500'>Because</span> <span
  m='1860660'>I</span> <span m='1860720'>was</span> <span
  m='1860860'>about</span> <span m='1861140'>to</span> <span
  m='1861240'>do</span> <span m='1861370'>that.</span> <span
  m='1862030'>There</span> <span m='1862210'>is</span> <span
  m='1862340'>a</span> <span m='1862390'>question</span> <span
  m='1862680'>about</span> <span m='1863030'>alpha-beta.</span> <span
  m='1863190'>I'll</span> <span m='1863410'>come</span> <span
  m='1863610'>back</span> <span m='1863820'>to</span> <span
  m='1863920'>both</span> <span m='1864140'>of</span> <span
  m='1864240'>yours</span> <span m='1864600'>after I</span> <span
  m='1864770'>answer</span> <span m='1865060'>this.</span> </p><p><span
  m='1866326'>AUDIENCE: You</span> <span m='1866779'>were mentioning</span>
  <span m='1867232'>[INAUDIBLE].</span> <span m='1869437'>And</span> <span
  m='1869924'>I'm a</span> <span m='1870411'>little bit confused.</span> <span
  m='1871385'>If</span> <span m='1871872'>you're looking at one</span> <span
  m='1872359'>node,</span> <span m='1872846'>and</span> <span m='1873333'>you're
  seeing</span> <span m='1873820'>either</span> <span m='1874307'>grab</span>
  <span m='1874794'>the</span> <span m='1875281'>value from the</span> <span
  m='1875768'>grandparent</span> <span m='1876255'>or grab</span> <span
  m='1876742'>it</span> <span m='1877229'>from the--</span> </p><p><span
  m='1878203'>PROFESSOR: So</span> <span m='1878690'>it</span> <span
  m='1878950'>always</span> <span m='1879360'>starts--</span> <span
  m='1880490'>the</span> <span m='1880540'>question</span> <span
  m='1880850'>is,</span> <span m='1881130'>what</span> <span
  m='1881270'>is</span> <span m='1881400'>the</span> <span
  m='1881490'>Snow</span> <span m='1881660'>White</span> <span
  m='1881940'>principle?</span> <span m='1882300'>How</span> <span
  m='1882380'>does</span> <span m='1882500'>it</span> <span
  m='1882560'>work?</span> <span m='1883380'>Every</span> <span
  m='1883720'>node</span> <span m='1884040'>always</span> <span
  m='1884400'>starts</span> <span m='1884820'>off</span> <span
  m='1885690'>with</span> <span m='1885870'>taking</span> <span
  m='1886760'>the</span> <span m='1887860'>value</span> <span
  m='1888200'>of</span> <span m='1888340'>the</span> <span
  m='1888420'>same</span> <span m='1888780'>type,</span> <span
  m='1889230'>alpha</span> <span m='1889490'>or</span> <span
  m='1889610'>beta,</span> <span m='1890000'>from</span> <span m='1890180'>its
  grandparent.</span> <span m='1890740'>It</span> <span
  m='1890920'>always</span> <span m='1891310'>starts</span> <span
  m='1891790'>that</span> <span m='1892010'>way.</span> <span
  m='1893010'>Now,</span> <span m='1893590'>you</span> <span
  m='1893760'>say,</span> <span m='1893870'>why the</span> <span
  m='1894120'>grandparent?</span> <span m='1894910'>Wouldn't</span> <span
  m='1895240'>it take it</span> <span m='1895470'>from the</span> <span
  m='1895550'>parent? It</span> <span m='1896050'>actually</span> <span
  m='1896510'>does.</span> <span m='1897050'>But</span> <span
  m='1897230'>I'm</span> <span m='1897370'>not</span> <span
  m='1897610'>drawing</span> <span m='1897880'>out</span> <span
  m='1898090'>the</span> <span m='1898210'>alphas</span> <span
  m='1898550'>at</span> <span m='1898780'>all</span> <span
  m='1898910'>the</span> <span m='1898980'>minimizer</span> <span
  m='1899430'>levels.</span> <span m='1899700'>Because</span> <span
  m='1899810'>they</span> <span m='1899920'>don't</span> <span
  m='1900190'>do</span> <span m='1900340'>anything.</span> <span
  m='1900810'>They're</span> <span m='1901570'>only</span> <span
  m='1901910'>even</span> <span m='1902150'>there</span> <span
  m='1902450'>to</span> <span m='1902580'>pass</span> <span
  m='1902900'>them</span> <span m='1903040'>down.</span> </p><p><span
  m='1904200'>So</span> <span m='1904525'>all</span> <span m='1904850'>of</span>
  <span m='1905170'>the</span> <span m='1905240'>values</span> <span
  m='1905690'>pass</span> <span m='1905970'>down,</span> <span
  m='1906400'>down,</span> <span m='1906770'>down,</span> <span
  m='1907220'>down,</span> <span m='1907470'>down</span> <span
  m='1908110'>to</span> <span m='1908230'>begin.</span> <span
  m='1909050'>Every</span> <span m='1910830'>node, in fact,</span> <span
  m='1911320'>starts</span> <span m='1913200'>off</span> <span
  m='1913980'>with</span> <span m='1914670'>its</span> <span
  m='1914840'>grandparents</span> <span m='1915390'>with</span> <span
  m='1915510'>its</span> <span m='1915680'>parents'</span> <span
  m='1916130'>values,</span> <span m='1916790'>OK?</span> <span
  m='1917920'>But</span> <span m='1918080'>then</span> <span
  m='1919190'>when</span> <span m='1919380'>the</span> <span
  m='1919450'>node</span> <span m='1919840'>sees</span> <span
  m='1920130'>a</span> <span m='1920240'>child,</span> <span
  m='1920730'>it's</span> <span m='1920930'>completely</span> <span
  m='1921590'>done</span> <span m='1921970'>evaluating.</span> <span
  m='1922780'>It's</span> <span m='1922990'>finished.</span> <span
  m='1925360'>It</span> <span m='1925880'>can't</span> <span
  m='1926110'>be</span> <span m='1926220'>in</span> <span m='1926300'>the</span>
  <span m='1926380'>process.</span> </p><p><span m='1928380'>Let's</span> <span
  m='1928870'>say</span> <span m='1929000'>C.</span> <span
  m='1930000'>When</span> <span m='1930140'>C</span> <span
  m='1931145'>sees</span> <span m='1931730'>that</span> <span
  m='1931980'>G</span> <span m='1932455'>is</span> <span
  m='1932930'>completely</span> <span m='1933550'>done</span> <span
  m='1933900'>with</span> <span m='1934040'>all</span> <span m='1934400'>of
  its</span> <span m='1934610'>sub-branches</span> <span m='1935780'>and</span>
  <span m='1936010'>is</span> <span m='1936070'>ready</span> <span
  m='1936350'>to</span> <span m='1936420'>return</span> <span
  m='1936790'>a</span> <span m='1936820'>value,</span> <span
  m='1937860'>or</span> <span m='1938150'>if</span> <span
  m='1938460'>it's</span> <span m='1938600'>just</span> <span
  m='1938760'>a</span> <span m='1938810'>static</span> <span
  m='1939200'>evaluation,</span> <span m='1939720'>then it's</span> <span
  m='1939980'>automatically</span> <span m='1940610'>completely</span> <span
  m='1941040'>done.</span> <span m='1942120'>Because</span> <span
  m='1942290'>it</span> <span m='1942360'>has</span> <span m='1942620'>no</span>
  <span m='1942750'>children.</span> </p><p><span m='1945020'>A</span> <span
  m='1945100'>static</span> <span m='1945460'>value</span> <span
  m='1945810'>like</span> <span m='1946320'>K</span> <span m='1946760'>of</span>
  <span m='1947010'>3</span> <span m='1947610'>is</span> <span
  m='1947760'>automatically</span> <span m='1948450'>completely</span> <span
  m='1948940'>done.</span> <span m='1949550'>It's</span> <span
  m='1949750'>got</span> <span m='1950070'>a</span> <span m='1950400'>3.</span>
  <span m='1950830'>Similarly,</span> <span m='1951390'>when</span> <span
  m='1951540'>we</span> <span m='1951650'>came</span> <span
  m='1951840'>back</span> <span m='1951970'>to</span> <span m='1952070'>G</span>
  <span m='1952330'>after</span> <span m='1952630'>going</span> <span
  m='1952850'>to</span> <span m='1953010'>N,</span> <span m='1953360'>and
  we</span> <span m='1953430'>knew</span> <span m='1953680'>that the</span>
  <span m='1953770'>value</span> <span m='1954020'>was</span> <span
  m='1954150'>7,</span> <span m='1954990'>that</span> <span
  m='1955130'>was</span> <span m='1955240'>completely</span> <span
  m='1955710'>done.</span> <span m='1956140'>The</span> <span
  m='1956220'>value</span> <span m='1956490'>was</span> <span
  m='1956640'>definitely</span> <span m='1957130'>7.</span> <span
  m='1957730'>There</span> <span m='1957850'>was</span> <span
  m='1958040'>no</span> <span m='1958280'>other</span> <span
  m='1958490'>possibilities.</span> </p><p><span m='1959480'>AUDIENCE:
  That's</span> <span m='1959780'>after looking at the</span> <span
  m='1960130'>children,</span> <span m='1960480'>right?</span> </p><p><span
  m='1960830'>PROFESSOR: Yes.</span> <span m='1961500'>So</span> <span
  m='1961680'>once</span> <span m='1962040'>you're</span> <span
  m='1962150'>done</span> <span m='1962880'>with</span> <span
  m='1963080'>all</span> <span m='1963310'>the</span> <span
  m='1963390'>children</span> <span m='1963720'>of</span> <span
  m='1963830'>G,</span> <span m='1964630'>then</span> <span m='1965080'>G</span>
  <span m='1965340'>comes</span> <span m='1965520'>up</span> <span
  m='1965680'>and</span> <span m='1965780'>says,</span> <span
  m='1965980'>guess</span> <span m='1966090'>what?</span> <span
  m='1966250'>Guess</span> <span m='1966430'>what,</span> <span
  m='1966630'>guys?</span> <span m='1967660'>So</span> <span
  m='1967800'>technically</span> <span m='1968240'>before</span> <span
  m='1968560'>that,</span> <span m='1968770'>you</span> <span
  m='1968880'>would</span> <span m='1968950'>have</span> <span
  m='1969040'>said</span> <span m='1969320'>that</span> <span
  m='1969460'>G's</span> <span m='1969890'>alpha</span> <span
  m='1970320'>is</span> <span m='1970550'>greater</span> <span
  m='1970890'>than</span> <span m='1971090'>or</span> <span
  m='1971200'>equal</span> <span m='1971570'>to</span> <span
  m='1971910'>1</span> <span m='1973210'>when</span> <span m='1974310'>we</span>
  <span m='1974400'>looked</span> <span m='1974590'>at</span> <span
  m='1974710'>Q.</span> <span m='1974970'>And</span> <span
  m='1975040'>then</span> <span m='1975130'>we</span> <span
  m='1975220'>looked</span> <span m='1975480'>at</span> <span
  m='1975640'>M.</span> <span m='1975720'>We'd</span> <span
  m='1975810'>say,</span> <span m='1975950'>it's</span> <span
  m='1976140'>equal</span> <span m='1976480'>exactly</span> <span
  m='1977080'>to</span> <span m='1977140'>7.</span> <span
  m='1977640'>We're</span> <span m='1977800'>done</span> <span
  m='1978080'>here.</span> </p><p><span m='1978890'>And</span> <span
  m='1979080'>then</span> <span m='1979340'>at</span> <span
  m='1979510'>that</span> <span m='1979790'>point,</span> <span m='1981100'>when
  it's</span> <span m='1981230'>fresh and</span> <span m='1981560'>ripe</span>
  <span m='1982170'>and</span> <span m='1982270'>has</span> <span
  m='1982480'>all of its</span> <span m='1982940'>highest</span> <span
  m='1983320'>value</span> <span m='1983700'>or its</span> <span
  m='1983960'>best</span> <span m='1984230'>value,</span> <span
  m='1984890'>that's</span> <span m='1985160'>when</span> <span
  m='1985260'>the</span> <span m='1985370'>parent</span> <span
  m='1985750'>can</span> <span m='1986160'>eat</span> <span
  m='1986330'>its</span> <span m='1986470'>heart and</span> <span
  m='1986970'>gain</span> <span m='1987610'>that</span> <span
  m='1987800'>value</span> <span m='1988100'>itself.</span> <span
  m='1988980'>So</span> <span m='1989110'>that's</span> <span
  m='1989350'>when</span> <span m='1989480'>C</span> <span
  m='1989720'>says,</span> <span m='1990510'>for</span> <span
  m='1990690'>instance,</span> <span m='1991910'>oh</span> <span
  m='1992080'>man,</span> <span m='1992340'>I</span> <span
  m='1992430'>have</span> <span m='1993000'>an</span> <span
  m='1993080'>infinity.</span> <span m='1994550'>I</span> <span
  m='1994700'>really</span> <span m='1995050'>like</span> <span
  m='1995230'>that</span> <span m='1995400'>7</span> <span
  m='1995730'>better.</span> <span m='1996060'>And it</span> <span
  m='1996180'>takes</span> <span m='1996430'>the</span> <span
  m='1996520'>7.</span> </p><p><span m='1997390'>But</span> <span
  m='1997530'>then</span> <span m='1997700'>it</span> <span
  m='1997870'>saw</span> <span m='1998040'>H.</span> <span m='1998500'>And it
  said,</span> <span m='1998660'>oh</span> <span m='1998830'>man,</span> <span
  m='1999290'>that's a</span> <span m='1999520'>6.</span> <span
  m='1999840'>That's</span> <span m='2000010'>even</span> <span
  m='2000240'>better</span> <span m='2000480'>than</span> <span
  m='2000650'>7.</span> <span m='2000980'>So it</span> <span
  m='2001140'>took</span> <span m='2001390'>the</span> <span
  m='2001490'>6.</span> </p><p><span m='2001765'>AUDIENCE: So</span> <span
  m='2002040'>shouldn't the alpha</span> <span m='2002534'>take 7</span> <span
  m='2003028'>then?</span> </p><p><span m='2004510'>PROFESSOR: So</span> <span
  m='2004910'>alpha</span> <span m='2005190'>takes</span> <span
  m='2005400'>6.</span> <span m='2005780'>Because</span> <span
  m='2006220'>C</span> <span m='2006540'>is</span> <span m='2006650'>a</span>
  <span m='2006700'>minimizer.</span> <span m='2007300'>C</span> <span
  m='2007570'>took</span> <span m='2007760'>the</span> <span
  m='2007870'>7</span> <span m='2008280'>from</span> <span m='2008470'>G,</span>
  <span m='2008900'>but</span> <span m='2009320'>then</span> <span
  m='2009770'>right</span> <span m='2009960'>after</span> <span
  m='2010220'>that</span> <span m='2010410'>C saw</span> <span
  m='2010880'>H</span> <span m='2011145'>and</span> <span
  m='2011410'>took</span> <span m='2011540'>the</span> <span
  m='2011630'>6.</span> <span m='2012810'>Because</span> <span
  m='2013060'>6</span> <span m='2013270'>is</span> <span m='2013390'>even</span>
  <span m='2013630'>lower</span> <span m='2015170'>than</span> <span
  m='2015400'>7.</span> <span m='2015880'>And</span> <span
  m='2016070'>then</span> <span m='2016440'>alpha</span> <span
  m='2016790'>took</span> <span m='2017010'>the</span> <span
  m='2017100'>6.</span> <span m='2018160'>Because</span> <span
  m='2018470'>6</span> <span m='2018730'>was</span> <span
  m='2019130'>higher</span> <span m='2019610'>than</span> <span
  m='2019870'>2.</span> </p><p><span m='2020260'>AUDIENCE: So</span> <span
  m='2020750'>it's not</span> <span m='2021240'>going to look</span> <span
  m='2021730'>below the</span> <span m='2022220'>branch?</span> </p><p><span
  m='2023690'>PROFESSOR: Yeah,</span> <span m='2024155'>the problem is
  that</span> <span m='2024620'>the</span> <span m='2024680'>maximizer</span>
  <span m='2025170'>doesn't</span> <span m='2025240'>have</span> <span
  m='2025530'>control</span> <span m='2026040'>there.</span> <span
  m='2026490'>The</span> <span m='2026580'>minimizer</span> <span
  m='2026955'>has</span> <span m='2027330'>got</span> <span
  m='2027540'>control</span> <span m='2027885'>at</span> <span
  m='2028230'>C.</span> <span m='2028900'>And the</span> <span
  m='2029110'>minimizer</span> <span m='2029580'>is going</span> <span
  m='2029690'>to</span> <span m='2029730'>make</span> <span
  m='2029880'>sure</span> <span m='2030060'>it's</span> <span
  m='2030170'>as</span> <span m='2030320'>low</span> <span m='2030850'>as</span>
  <span m='2031000'>possible.</span> <span m='2032020'>The</span> <span
  m='2032110'>maximizer</span> <span m='2032470'>at</span> <span
  m='2032830'>A,</span> <span m='2033620'>his</span> <span
  m='2033900'>only</span> <span m='2034250'>control,</span> <span
  m='2034970'>or</span> <span m='2035580'>her</span> <span
  m='2035830'>only</span> <span m='2036030'>control,</span> <span
  m='2036470'>is</span> <span m='2036610'>the</span> <span
  m='2036690'>ability</span> <span m='2037030'>to</span> <span
  m='2037100'>send</span> <span m='2037520'>either</span> <span
  m='2037710'>way</span> <span m='2038010'>to</span> <span m='2038170'>B</span>
  <span m='2038730'>or</span> <span m='2038880'>C</span> <span
  m='2039460'>or</span> <span m='2039600'>D.</span> <span m='2040670'>And</span>
  <span m='2040980'>then</span> <span m='2041410'>at</span> <span
  m='2041490'>that</span> <span m='2041740'>point,</span> <span m='2042070'>at
  C,</span> <span m='2042450'>the</span> <span m='2042510'>minimizer</span>
  <span m='2042860'>gets</span> <span m='2043210'>to</span> <span
  m='2043350'>choose</span> <span m='2043590'>if</span> <span
  m='2043710'>we</span> <span m='2043790'>go</span> <span m='2043900'>to</span>
  <span m='2044000'>G or H.</span> <span m='2044345'>And it's</span> <span
  m='2044690'>never</span> <span m='2044980'>going to</span> <span
  m='2045150'>choose</span> <span m='2045410'>G.</span> <span
  m='2045710'>Because</span> <span m='2046010'>G is</span> <span
  m='2046200'>higher</span> <span m='2046460'>than</span> <span
  m='2046630'>H.</span> <span m='2047300'>All right,</span> <span
  m='2047940'>awesome,</span> <span m='2048560'>was</span> <span
  m='2048780'>there</span> <span m='2048889'>another</span> <span
  m='2049120'>question?</span> </p><p><span m='2049829'>All</span> <span
  m='2050139'>right,</span> <span m='2050820'>let's</span> <span
  m='2051060'>go</span> <span m='2051150'>back</span> <span
  m='2051310'>to</span> <span m='2051409'>static</span> <span
  m='2051750'>evaluations.</span> <span m='2052830'>When</span> <span
  m='2052969'>I</span> <span m='2053060'>first</span> <span
  m='2053389'>took</span> <span m='2053550'>this</span> <span
  m='2053730'>class,</span> <span m='2055230'>I</span> <span
  m='2055550'>had</span> <span m='2055790'>some</span> <span
  m='2055960'>weird</span> <span m='2056190'>thoughts about static</span> <span
  m='2056590'>evolutions.</span> <span m='2057139'>I</span> <span
  m='2057230'>heard</span> <span m='2057480'>some</span> <span
  m='2057580'>students</span> <span m='2057880'>ask</span> <span
  m='2058150'>me</span> <span m='2058260'>this.</span> <span
  m='2058739'>I</span> <span m='2058940'>almost</span> <span
  m='2059830'>got</span> <span m='2060020'>a</span> <span
  m='2060090'>question</span> <span m='2060429'>about</span> <span
  m='2060670'>it</span> <span m='2060750'>onto</span> <span
  m='2060969'>one</span> <span m='2061100'>of</span> <span
  m='2061179'>the</span> <span m='2061290'>tests,</span> <span
  m='2061630'>but</span> <span m='2061730'>it</span> <span
  m='2061830'>was</span> <span m='2061969'>edited</span> <span
  m='2062370'>to</span> <span m='2062449'>some</span> <span
  m='2062679'>other</span> <span m='2062860'>weird</span> <span
  m='2063100'>question</span> <span m='2063540'>that</span> <span
  m='2063600'>was</span> <span m='2063750'>m</span> <span m='2064010'>to</span>
  <span m='2064110'>the</span> <span m='2064119'>b</span> <span
  m='2064129'>to</span> <span m='2064139'>the</span> <span m='2064149'>d</span>
  <span m='2064159'>minus</span> <span m='2065040'>1</span> <span
  m='2065280'>or</span> <span m='2065380'>something</span> <span
  m='2065659'>like that at</span> <span m='2065820'>the</span> <span
  m='2065880'>last</span> <span m='2066170'>minute.</span> <span
  m='2066659'>So</span> <span m='2066909'>I'm</span> <span
  m='2067014'>going</span> <span m='2067119'>to</span> <span
  m='2067224'>pose</span> <span m='2067330'>you</span> <span
  m='2067449'>guys</span> <span m='2067760'>the</span> <span
  m='2067909'>actual</span> <span m='2068250'>question</span> <span
  m='2068690'>that</span> <span m='2068780'>would</span> <span
  m='2068900'>have</span> <span m='2069000'>been</span> <span
  m='2069210'>on</span> <span m='2069969'>one</span> <span m='2070260'>of</span>
  <span m='2070449'>the</span> <span m='2070670'>older</span> <span
  m='2071020'>test,</span> <span m='2071460'>which</span> <span
  m='2071520'>is</span> <span m='2071620'>the</span> <span
  m='2071699'>following.</span> </p><p><span m='2072790'>I had a student
  who</span> <span m='2072949'>came</span> <span m='2073159'>to</span> <span
  m='2073230'>me</span> <span m='2073389'>and</span> <span
  m='2073520'>said,</span> <span m='2073710'>you</span> <span
  m='2073800'>know,</span> <span m='2074170'>[INAUDIBLE],</span> <span
  m='2075040'>when</span> <span m='2075230'>we</span> <span
  m='2075850'>do</span> <span m='2076170'>this</span> <span
  m='2076280'>alpha-beta</span> <span m='2076670'>pruning,</span> <span
  m='2077120'>and</span> <span m='2077219'>all</span> <span
  m='2077489'>this</span> <span m='2077630'>other</span> <span
  m='2077900'>stuff,</span> <span m='2078719'>we're</span> <span
  m='2078989'>trying</span> <span m='2079270'>to</span> <span
  m='2079320'>assume</span> <span m='2079780'>that</span> <span
  m='2080090'>we're</span> <span m='2080280'>really</span> <span
  m='2080560'>saving</span> <span m='2081010'>that</span> <span
  m='2081219'>much</span> <span m='2081429'>time</span> <span
  m='2081810'>by</span> <span m='2082510'>getting</span> <span
  m='2082750'>rid</span> <span m='2082870'>of</span> <span m='2082949'>a</span>
  <span m='2083000'>few</span> <span m='2083219'>static</span> <span
  m='2083580'>evaluations.</span> <span m='2084800'>In</span> <span
  m='2084920'>fact,</span> <span m='2085150'>when</span> <span
  m='2085239'>we</span> <span m='2085310'>do</span> <span
  m='2085409'>progressive</span> <span m='2085790'>deepening,</span> <span
  m='2086110'>we're</span> <span m='2086230'>always</span> <span
  m='2086429'>just</span> <span m='2086610'>counting,</span> <span
  m='2086949'>how</span> <span m='2087139'>many</span> <span
  m='2087340'>static</span> <span m='2087699'>evaluations</span> <span
  m='2088039'>do</span> <span m='2088380'>we</span> <span
  m='2088489'>have</span> <span m='2088639'>to</span> <span
  m='2088750'>do?</span> </p><p><span m='2089290'>And</span> <span
  m='2089610'>he</span> <span m='2089760'>said,</span> <span
  m='2090000'>I</span> <span m='2090150'>look</span> <span m='2090400'>at</span>
  <span m='2090480'>these</span> <span m='2090630'>static</span> <span
  m='2090850'>evaluations.</span> <span m='2091590'>And</span> <span
  m='2091699'>there's</span> <span m='2091840'>just</span> <span
  m='2092020'>a</span> <span m='2092080'>3</span> <span
  m='2092420'>there.</span> <span m='2092710'>It takes</span> <span
  m='2093030'>no</span> <span m='2093300'>time</span> <span
  m='2094270'>to</span> <span m='2094880'>do</span> <span m='2095130'>the
  static</span> <span m='2095280'>evaluation.</span> <span
  m='2096520'>It's</span> <span m='2096690'>on</span> <span
  m='2096940'>the</span> <span m='2097010'>board.</span> <span
  m='2097890'>It</span> <span m='2098040'>takes</span> <span
  m='2098320'>much</span> <span m='2098670'>longer</span> <span
  m='2098950'>to</span> <span m='2099030'>do</span> <span m='2099140'>the</span>
  <span m='2099230'>alpha-beta.</span> <span m='2099920'>It's</span> <span
  m='2100060'>faster</span> <span m='2100500'>by</span> <span
  m='2100650'>far</span> <span m='2101080'>to</span> <span
  m='2101190'>not</span> <span m='2101520'>do</span> <span
  m='2101950'>alpha-beta.</span> <span m='2102770'>So</span> <span
  m='2102920'>I</span> <span m='2103040'>then</span> <span
  m='2103610'>tried</span> <span m='2103850'>to</span> <span
  m='2103890'>explain</span> <span m='2104210'>to that</span> <span
  m='2104510'>student.</span> <span m='2104680'>I</span> <span
  m='2104750'>said,</span> <span m='2104930'>OK,</span> <span
  m='2105860'>we</span> <span m='2106040'>need</span> <span
  m='2106200'>to</span> <span m='2106390'>be</span> <span
  m='2106560'>clear</span> <span m='2106740'>about</span> <span
  m='2106880'>what</span> <span m='2107050'>static</span> <span
  m='2107270'>evaluations</span> <span m='2107800'>are.</span> <span
  m='2108340'>You</span> <span m='2108520'>guys</span> <span
  m='2108770'>get</span> <span m='2108905'>it</span> <span
  m='2109040'>easy.</span> <span m='2109590'>We</span> <span
  m='2109780'>put</span> <span m='2110020'>these</span> <span
  m='2110210'>numbers</span> <span m='2110450'>on</span> <span
  m='2110540'>the</span> <span m='2110610'>board.</span> </p><p><span
  m='2111670'>A</span> <span m='2111750'>static</span> <span
  m='2112060'>evaluation--</span> <span m='2112750'>let's</span> <span
  m='2112980'>say</span> <span m='2113110'>you're</span> <span
  m='2113240'>playing</span> <span m='2113550'>a</span> <span
  m='2113570'>game</span> <span m='2113820'>like</span> <span
  m='2115190'>chess.</span> <span m='2117010'>Static</span> <span
  m='2117190'>evaluation</span> <span m='2117760'>takes</span> <span
  m='2117910'>a</span> <span m='2117980'>long</span> <span
  m='2118330'>time.</span> <span m='2119050'>When</span> <span
  m='2119130'>I</span> <span m='2119220'>was</span> <span m='2119380'>in</span>
  <span m='2119520'>6170,</span> <span m='2120810'>Java</span> <span
  m='2121120'>[INAUDIBLE],</span> <span m='2121910'>the</span> <span
  m='2122030'>class</span> <span m='2122320'>that used</span> <span
  m='2122460'>to</span> <span m='2122540'>exist,</span> <span
  m='2123420'>we</span> <span m='2123580'>had</span> <span m='2123680'>a</span>
  <span m='2123740'>program</span> <span m='2124150'>called</span> <span
  m='2124380'>Anti-Chess</span> <span m='2125010'>where</span> <span
  m='2125090'>I</span> <span m='2125190'>used</span> <span m='2125380'>my</span>
  <span m='2125500'>6034</span> <span m='2126360'>skills</span> <span
  m='2126970'>to</span> <span m='2127080'>write</span> <span m='2127280'>the
  AI.</span> <span m='2128440'>And</span> <span m='2129180'>the</span> <span
  m='2129270'>static</span> <span m='2129660'>evaluator</span> <span
  m='2130540'>took</span> <span m='2130740'>a</span> <span
  m='2130810'>long</span> <span m='2131440'>time.</span> <span
  m='2131890'>And</span> <span m='2132080'>we</span> <span
  m='2132190'>were</span> <span m='2132350'>timed.</span> </p><p><span
  m='2132970'>So</span> <span m='2133380'>getting</span> <span m='2133670'>the 
  static</span> <span m='2133995'>evaluator</span> <span
  m='2134320'>faster,</span> <span m='2134970'>that</span> <span
  m='2135190'>was</span> <span m='2135320'>the</span> <span
  m='2135360'>most</span> <span m='2135500'>important</span> <span
  m='2135910'>thing.</span> <span m='2136720'>Why</span> <span
  m='2136930'>does</span> <span m='2137050'>it</span> <span
  m='2137130'>take</span> <span m='2137260'>a</span> <span
  m='2137320'>long</span> <span m='2137510'>time?</span> <span m='2137810'>Well,
  the</span> <span m='2137980'>static</span> <span m='2138330'>evaluator</span>
  <span m='2138870'>is</span> <span m='2139140'>an</span> <span
  m='2139410'>evaluation</span> <span m='2139875'>of</span> <span
  m='2140340'>the</span> <span m='2140780'>board</span> <span
  m='2141320'>position,</span> <span m='2142075'>the</span> <span
  m='2142420'>state</span> <span m='2142760'>of</span> <span
  m='2142840'>the</span> <span m='2142910'>game,</span> <span
  m='2143730'>at</span> <span m='2143840'>a</span> <span
  m='2143890'>snapshot</span> <span m='2144450'>of</span> <span
  m='2144540'>time.</span> <span m='2145610'>And</span> <span
  m='2145720'>that's</span> <span m='2145980'>not</span> <span
  m='2146300'>as</span> <span m='2146410'>easy</span> <span
  m='2146790'>as</span> <span m='2146890'>just</span> <span
  m='2147030'>saying,</span> <span m='2147210'>oh,</span> <span
  m='2147380'>here's</span> <span m='2147600'>the</span> <span
  m='2147700'>answer.</span> </p><p><span m='2148060'>Because</span> <span
  m='2148310'>in</span> <span m='2148470'>chess,</span> <span
  m='2149590'>first</span> <span m='2150030'>of</span> <span
  m='2150110'>all,</span> <span m='2150980'>not</span> <span
  m='2151260'>only</span> <span m='2151500'>did</span> <span
  m='2151670'>I</span> <span m='2151720'>have</span> <span m='2151840'>to</span>
  <span m='2151940'>look</span> <span m='2152230'>at</span> <span
  m='2152490'>how</span> <span m='2152660'>many</span> <span
  m='2152840'>pieces</span> <span m='2153200'>I</span> <span
  m='2153310'>had,</span> <span m='2153780'>what</span> <span
  m='2154010'>areas</span> <span m='2155220'>that</span> <span
  m='2155390'>I</span> <span m='2155470'>controlled.</span> <span
  m='2156520'>Also--</span> <span m='2157470'>well, it</span> <span
  m='2157650'>was</span> <span m='2157780'>anti-chess.</span> <span
  m='2158430'>But</span> <span m='2158550'>that's</span> <span
  m='2158840'>not</span> <span m='2159120'>withstanding.</span> <span
  m='2159320'>Let's</span> <span m='2159460'>pretend it's</span> <span
  m='2159820'>regular</span> <span m='2160150'>chess.</span> <span
  m='2161110'>I</span> <span m='2161250'>also</span> <span
  m='2161610'>had</span> <span m='2161810'>to</span> <span
  m='2161910'>look,</span> <span m='2162410'>if</span> <span
  m='2162550'>it</span> <span m='2162640'>was</span> <span m='2162790'>in</span>
  <span m='2162920'>regular</span> <span m='2163240'>chess--</span> <span
  m='2163980'>and</span> <span m='2164070'>I</span> <span
  m='2164140'>still</span> <span m='2164340'>had to</span> <span
  m='2164470'>do</span> <span m='2164630'>this</span> <span
  m='2164780'>in</span> <span m='2164950'>anti-chess--</span> <span
  m='2165650'>if</span> <span m='2165810'>my</span> <span
  m='2165920'>king</span> <span m='2166230'>was</span> <span
  m='2166380'>in</span> <span m='2166755'>check.</span> </p><p><span
  m='2167130'>And</span> <span m='2167240'>what</span> <span
  m='2167370'>that</span> <span m='2167550'>meant</span> <span
  m='2167750'>is</span> <span m='2167890'>I</span> <span m='2167950'>had</span>
  <span m='2168130'>to</span> <span m='2168190'>look</span> <span
  m='2168350'>at</span> <span m='2168480'>all</span> <span m='2168800'>of
  my</span> <span m='2168950'>opponent's</span> <span m='2169440'>moves,</span>
  <span m='2170320'>possible</span> <span m='2170670'>moves,</span> <span
  m='2171040'>to see if</span> <span m='2171330'>anyone</span> <span
  m='2171690'>of them could</span> <span m='2171850'>take</span> <span
  m='2172030'>my</span> <span m='2172150'>king.</span> <span
  m='2173120'>Because</span> <span m='2173900'>in</span> <span
  m='2174240'>regular</span> <span m='2174500'>chess,</span> <span
  m='2174700'>it's</span> <span m='2174800'>illegal</span> <span
  m='2175290'>to</span> <span m='2175400'>put</span> <span
  m='2175640'>your</span> <span m='2175800'>king</span> <span
  m='2175960'>into</span> <span m='2176120'>check.</span> <span
  m='2176420'>So</span> <span m='2176610'>you</span> <span
  m='2176720'>better</span> <span m='2176990'>not</span> <span
  m='2177340'>even</span> <span m='2177530'>allow</span> <span
  m='2177800'>that</span> <span m='2178020'>move.</span> <span
  m='2178830'>And</span> <span m='2179150'>regardless,</span> <span
  m='2179700'>getting</span> <span m='2179900'>into</span> <span
  m='2180060'>checkmate</span> <span m='2180500'>is</span> <span
  m='2180960'>negative</span> <span m='2181300'>infinity</span> <span
  m='2181810'>for</span> <span m='2181980'>you.</span> </p><p><span
  m='2182670'>So</span> <span m='2184010'>it</span> <span
  m='2184160'>takes</span> <span m='2184470'>a</span> <span
  m='2184660'>really</span> <span m='2184960'>long</span> <span
  m='2185330'>time</span> <span m='2185690'>to</span> <span
  m='2185800'>do</span> <span m='2185930'>static</span> <span
  m='2186140'>evaluations,</span> <span m='2187100'>at</span> <span
  m='2187140'>least</span> <span m='2187440'>good</span> <span
  m='2187650'>ones,</span> <span m='2188210'>usually.</span> <span
  m='2189380'>You</span> <span m='2189540'>want</span> <span
  m='2189820'>to</span> <span m='2189900'>avoid</span> <span
  m='2190270'>them.</span> <span m='2190400'>Because</span> <span
  m='2190620'>they're</span> <span m='2190740'>not</span> <span
  m='2190980'>just</span> <span m='2191170'>some</span> <span
  m='2191380'>number</span> <span m='2191660'>on</span> <span
  m='2191800'>the</span> <span m='2191890'>page.</span> <span
  m='2192740'>They</span> <span m='2193100'>are</span> <span
  m='2193320'>some</span> <span m='2193640'>function</span> <span
  m='2194080'>you</span> <span m='2194260'>wrote</span> <span
  m='2194600'>that</span> <span m='2194730'>does</span> <span
  m='2194910'>a</span> <span m='2194950'>very</span> <span
  m='2195380'>careful</span> <span m='2195750'>analysis</span> <span
  m='2196430'>of</span> <span m='2196580'>the state</span> <span
  m='2196740'>of</span> <span m='2196840'>the</span> <span
  m='2197020'>game</span> <span m='2197310'>and</span> <span
  m='2197420'>says,</span> <span m='2198230'>I'm</span> <span
  m='2198370'>good</span> <span m='2198560'>to</span> <span
  m='2198710'>heuristically</span> <span m='2199350'>guess</span> <span
  m='2200150'>that</span> <span m='2200260'>my</span> <span
  m='2200390'>value</span> <span m='2200810'>is</span> <span
  m='2201770'>pi,</span> <span m='2203440'>or</span> <span
  m='2203570'>some</span> <span m='2203790'>other</span> <span
  m='2204020'>number,</span> <span m='2204550'>and</span> <span
  m='2204740'>then</span> <span m='2205230'>rates</span> <span
  m='2205580'>that</span> <span m='2205790'>compared</span> <span
  m='2206180'>to</span> <span m='2206260'>other</span> <span
  m='2206560'>states.</span> <span m='2207060'>Does</span> <span
  m='2207500'>that</span> <span m='2207720'>make</span> <span m='2207900'>sense
  to</span> <span m='2208150'>everyone?</span> </p><p><span
  m='2209530'>So</span> <span m='2209860'>the</span> <span
  m='2210040'>answer</span> <span m='2210280'>to</span> <span
  m='2210370'>the</span> <span m='2210950'>hypothetical</span> <span
  m='2211470'>question</span> <span m='2211790'>that</span> <span
  m='2211890'>might</span> <span m='2212080'>have</span> <span
  m='2212200'>been</span> <span m='2212340'>on</span> <span
  m='2212450'>the</span> <span m='2212530'>old</span> <span
  m='2212720'>test,</span> <span m='2213690'>when</span> <span
  m='2213880'>the</span> <span m='2213960'>person</span> <span
  m='2214230'>said,</span> <span m='2214490'>I've</span> <span
  m='2214620'>got</span> <span m='2214890'>this</span> <span
  m='2214980'>great</span> <span m='2215190'>idea</span> <span m='2215460'>where
  you</span> <span m='2215670'>do</span> <span m='2215930'>tons of static</span>
  <span m='2216400'>evaluation,</span> <span m='2216850'>and you</span> <span
  m='2216950'>don't</span> <span m='2217060'>have</span> <span
  m='2217150'>to</span> <span m='2217250'>do</span> <span
  m='2217360'>this</span> <span m='2217470'>long</span> <span
  m='2217720'>alpha-beta,</span> <span m='2218850'>is,</span> <span
  m='2219970'>don't</span> <span m='2220210'>do</span> <span
  m='2220340'>that.</span> <span m='2220620'>The</span> <span
  m='2220690'>static</span> <span m='2220950'>evaluations</span> <span
  m='2221540'>actually</span> <span m='2221880'>take</span> <span
  m='2222080'>a</span> <span m='2222130'>long</span> <span
  m='2222420'>time.</span> </p><p><span m='2225000'>Does</span> <span
  m='2225120'>that</span> <span m='2225320'>clear</span> <span
  m='2225510'>it</span> <span m='2225560'>up</span> <span m='2225730'>for</span>
  <span m='2225860'>people</span> <span m='2226140'>who asked</span> <span
  m='2226410'>me</span> <span m='2226680'>before</span> <span
  m='2226970'>about</span> <span m='2227800'>what</span> <span
  m='2228030'>is</span> <span m='2228140'>a</span> <span
  m='2228210'>static</span> <span m='2228450'>evaluation,</span> <span
  m='2230490'>why are the</span> <span m='2230940'>leaf</span> <span
  m='2231130'>nodes</span> <span m='2231400'>called</span> <span
  m='2231700'>static?</span> <span m='2234730'>And</span> <span
  m='2235040'>you</span> <span m='2235310'>might</span> <span
  m='2235480'>ask,</span> <span m='2235710'>why</span> <span
  m='2235950'>are</span> <span m='2236070'>some</span> <span
  m='2236310'>of</span> <span m='2236460'>these</span> <span
  m='2236810'>static</span> <span m='2237340'>just</span> <span
  m='2237550'>arbitrarily?</span> <span m='2239140'>The</span> <span
  m='2239260'>answer</span> <span m='2239670'>is,</span> <span
  m='2240700'>when</span> <span m='2240900'>you're</span> <span
  m='2241070'>running</span> <span m='2241370'>out</span> <span
  m='2241460'>of</span> <span m='2241550'>time</span> <span
  m='2242260'>to</span> <span m='2242440'>expand</span> <span
  m='2243030'>deeper,</span> <span m='2244090'>and</span> <span
  m='2244270'>you</span> <span m='2244390'>just</span> <span
  m='2244640'>need</span> <span m='2244790'>to</span> <span
  m='2244870'>stop</span> <span m='2245480'>that</span> <span
  m='2245690'>stage</span> <span m='2245910'>of</span> <span
  m='2245970'>the</span> <span m='2246030'>game--</span> <span
  m='2246270'>maybe</span> <span m='2246500'>it's</span> <span
  m='2246590'>just</span> <span m='2246770'>getting</span> <span
  m='2247070'>too</span> <span m='2247260'>hairy,</span> <span
  m='2248040'>maybe</span> <span m='2248260'>it's spreading</span> <span
  m='2248670'>out</span> <span m='2248830'>too</span> <span
  m='2248930'>much,</span> <span m='2249160'>you</span> <span
  m='2249270'>have</span> <span m='2249480'>some</span> <span
  m='2249730'>heuristic</span> <span m='2249975'>that</span> <span
  m='2250220'>says,</span> <span m='2250760'>this</span> <span
  m='2250940'>is</span> <span m='2251040'>where</span> <span
  m='2251170'>I</span> <span m='2251230'>stop</span> <span
  m='2251660'>for</span> <span m='2251820'>now--</span> <span
  m='2253350'>it's</span> <span m='2253500'>a</span> <span
  m='2253540'>heuristic</span> <span m='2253950'>guess</span> <span
  m='2255300'>of</span> <span m='2255440'>the</span> <span
  m='2255500'>value.</span> </p><p><span m='2256000'>It's</span> <span
  m='2256150'>kind</span> <span m='2256360'>of</span> <span
  m='2256430'>like</span> <span m='2256580'>those</span> <span
  m='2256760'>heuristic</span> <span m='2257120'>values</span> <span
  m='2257480'>in</span> <span m='2257590'>the</span> <span
  m='2257670'>search</span> <span m='2257990'>tree.</span> <span
  m='2258330'>It's</span> <span m='2258500'>a</span> <span
  m='2258550'>guess</span> <span m='2258860'>of</span> <span
  m='2258940'>how</span> <span m='2259090'>much</span> <span
  m='2259280'>work</span> <span m='2259530'>you</span> <span
  m='2259610'>have</span> <span m='2259760'>left</span> <span
  m='2260060'>to</span> <span m='2260130'>get</span> <span m='2260320'>to</span>
  <span m='2260410'>the</span> <span m='2260490'>goal.</span> <span
  m='2261340'>Here,</span> <span m='2261970'>you</span> <span
  m='2262070'>say,</span> <span m='2262320'>well,</span> <span
  m='2262510'>I</span> <span m='2262620'>wish</span> <span m='2262900'>I</span>
  <span m='2262990'>could</span> <span m='2263120'>go</span> <span
  m='2263260'>deeper.</span> <span m='2263720'>But</span> <span
  m='2263740'>I</span> <span m='2263850'>just</span> <span
  m='2264050'>don't</span> <span m='2264220'>have</span> <span
  m='2264370'>the</span> <span m='2264470'>time.</span> <span
  m='2265100'>So</span> <span m='2265330'>here's</span> <span
  m='2266250'>how</span> <span m='2266440'>I</span> <span
  m='2266540'>think</span> <span m='2266930'>I'm</span> <span
  m='2267080'>doing</span> <span m='2267380'>at</span> <span
  m='2267480'>this</span> <span m='2267690'>level.</span> <span
  m='2268250'>It's</span> <span m='2268280'>not</span> <span
  m='2268450'>always</span> <span m='2268680'>right.</span> </p><p><span
  m='2269580'>And</span> <span m='2269750'>that's</span> <span
  m='2269970'>going</span> <span m='2270080'>to</span> <span
  m='2270150'>lead</span> <span m='2270320'>us</span> <span
  m='2270440'>into</span> <span m='2270780'>the</span> <span
  m='2271080'>answer</span> <span m='2271150'>to</span> <span
  m='2271220'>one</span> <span m='2271460'>of the</span> <span
  m='2271520'>questions</span> <span m='2271890'>about</span> <span
  m='2272040'>progressive</span> <span m='2272460'>deepening.</span> <span
  m='2273210'>So</span> <span m='2273320'>I'll</span> <span
  m='2273470'>put</span> <span m='2273670'>up the</span> <span
  m='2273760'>progressive</span> <span m='2274310'>deepening</span> <span
  m='2274640'>question</span> <span m='2275010'>really</span> <span
  m='2275280'>quickly.</span> <span m='2276050'>So</span> <span
  m='2277550'>the</span> <span m='2277620'>question</span> <span
  m='2277990'>is</span> <span m='2278110'>this.</span> <span
  m='2280610'>Let</span> <span m='2280700'>me</span> <span
  m='2280800'>see,</span> <span m='2280930'>this</span> <span
  m='2281080'>is</span> <span m='2281120'>a</span> <span
  m='2281180'>maximizer--</span> <span m='2282050'>yes.</span> <span
  m='2282610'>Suppose</span> <span m='2283290'>that</span> <span
  m='2286665'>we</span> <span m='2287110'>do</span> <span
  m='2287410'>progressive</span> <span m='2287930'>deepening</span> <span
  m='2288690'>on</span> <span m='2289860'>the</span> <span
  m='2290010'>tree</span> <span m='2290370'>that is</span> <span
  m='2290660'>only</span> <span m='2290930'>two</span> <span
  m='2291090'>levels</span> <span m='2291410'>deep.</span> <span
  m='2291600'>What is</span> <span m='2291880'>progressive</span> <span
  m='2292300'>deepening</span> <span m='2292670'>in</span> <span
  m='2292740'>a</span> <span m='2292800'>nutshell</span> <span
  m='2293250'>if</span> <span m='2293330'>you</span> <span
  m='2293430'>don't</span> <span m='2293620'>remember</span> <span
  m='2293850'>from</span> <span m='2293960'>the</span> <span
  m='2294060'>lecture?</span> </p><p><span m='2294930'>The</span> <span
  m='2295040'>idea</span> <span m='2295340'>is</span> <span
  m='2295550'>this.</span> <span m='2297890'>In</span> <span
  m='2298286'>this</span> <span m='2298682'>tree,</span> <span
  m='2299360'>it</span> <span m='2299540'>doesn't</span> <span
  m='2299790'>work.</span> <span m='2300080'>But</span> <span m='2300230'>in
  trees</span> <span m='2300660'>that</span> <span m='2300760'>actually</span>
  <span m='2301150'>branch</span> <span m='2301650'>like</span> <span
  m='2301850'>2</span> <span m='2302020'>to the</span> <span
  m='2302210'>n,</span> <span m='2302550'>it</span> <span
  m='2302890'>doesn't</span> <span m='2303220'>take</span> <span
  m='2303380'>that</span> <span m='2303530'>much</span> <span
  m='2303740'>time</span> <span m='2303980'>to</span> <span
  m='2304080'>do</span> <span m='2305380'>some</span> <span
  m='2305560'>of</span> <span m='2305600'>the</span> <span
  m='2305710'>top</span> <span m='2306020'>levels</span> <span
  m='2306280'>first</span> <span m='2307370'>and</span> <span
  m='2307570'>then</span> <span m='2307800'>move</span> <span
  m='2308040'>on</span> <span m='2308280'>to</span> <span m='2308400'>the</span>
  <span m='2308460'>bottom</span> <span m='2308810'>levels.</span> <span
  m='2309240'>Just</span> <span m='2309480'>do them</span> <span
  m='2309750'>one</span> <span m='2310050'>at</span> <span m='2310110'>a</span>
  <span m='2310220'>time.</span> </p><p><span m='2311250'>So</span> <span
  m='2311300'>let's</span> <span m='2311560'>say</span> <span
  m='2311680'>we</span> <span m='2311870'>only</span> <span
  m='2312120'>did</span> <span m='2312280'>it</span> <span m='2312390'>up</span>
  <span m='2312590'>through</span> <span m='2312720'>J.</span> <span
  m='2313370'>We</span> <span m='2313510'>only</span> <span
  m='2313700'>did</span> <span m='2313840'>the</span> <span
  m='2313990'>top</span> <span m='2314330'>two</span> <span
  m='2314500'>levels</span> <span m='2314840'>of</span> <span
  m='2314950'>the</span> <span m='2315030'>tree.</span> <span
  m='2315890'>We'd</span> <span m='2316040'>like</span> <span
  m='2316280'>to</span> <span m='2316420'>reorder</span> <span
  m='2316900'>the</span> <span m='2317020'>tree</span> <span
  m='2317540'>so</span> <span m='2317740'>that</span> <span
  m='2318120'>alpha-beta</span> <span m='2318690'>can</span> <span
  m='2318810'>prune</span> <span m='2319340'>as</span> <span
  m='2319480'>much</span> <span m='2319780'>as</span> <span
  m='2319850'>it</span> <span m='2319900'>possibly</span> <span
  m='2320490'>can,</span> <span m='2320930'>at</span> <span
  m='2321250'>least</span> <span m='2321530'>we</span> <span
  m='2321640'>hope.</span> <span m='2323250'>So</span> <span
  m='2323450'>let's</span> <span m='2323670'>pretend</span> <span
  m='2324490'>that</span> <span m='2324660'>we</span> <span
  m='2324750'>had</span> <span m='2324870'>a</span> <span
  m='2324930'>psychic</span> <span m='2325460'>awesome</span> <span
  m='2326840'>genius</span> <span m='2327240'>friend</span> <span
  m='2327900'>who</span> <span m='2328140'>told</span> <span
  m='2328420'>us</span> <span m='2328580'>that</span> <span
  m='2328690'>the</span> <span m='2328770'>static</span> <span
  m='2329270'>values</span> <span m='2329780'>when</span> <span
  m='2329920'>we</span> <span m='2330010'>went</span> <span
  m='2330230'>up</span> <span m='2330520'>to two</span> <span
  m='2330670'>levels--</span> <span m='2331550'>remember,</span> <span
  m='2331870'>when we</span> <span m='2331960'>go</span> <span m='2332120'>to
  two</span> <span m='2332310'>levels,</span> <span m='2332680'>F,</span> <span
  m='2332920'>G, and</span> <span m='2333180'>J</span> <span
  m='2333490'>have</span> <span m='2333680'>to</span> <span
  m='2333750'>get</span> <span m='2333850'>a</span> <span
  m='2333910'>static</span> <span m='2334330'>value,</span> <span
  m='2334750'>right?</span> <span m='2335440'>Because</span> <span
  m='2335800'>we're</span> <span m='2335960'>not</span> <span
  m='2336180'>going</span> <span m='2336420'>down.</span> <span
  m='2336750'>We</span> <span m='2336860'>do a</span> <span
  m='2337070'>static</span> <span m='2337420'>evaluation.</span> <span
  m='2338180'>They</span> <span m='2338290'>get</span> <span
  m='2338430'>the</span> <span m='2338490'>exact</span> <span
  m='2338990'>correct</span> <span m='2339230'>numbers--</span> <span
  m='2339760'>3,</span> <span m='2340420'>7,</span> <span m='2340910'>and</span>
  <span m='2341080'>20.</span> <span m='2342410'>Genius,</span> <span
  m='2342830'>brilliant.</span> </p><p><span m='2343573'>All</span> <span
  m='2343916'>right,</span> <span m='2344260'>so</span> <span
  m='2344900'>if</span> <span m='2345040'>that</span> <span
  m='2345240'>happens,</span> <span m='2347330'>what</span> <span
  m='2347500'>is</span> <span m='2347630'>the</span> <span
  m='2347710'>best</span> <span m='2348000'>way</span> <span
  m='2348180'>that</span> <span m='2348265'>we</span> <span
  m='2348350'>could</span> <span m='2348580'>reorder</span> <span
  m='2349030'>that</span> <span m='2349320'>tree?</span> <span
  m='2350200'>Oh</span> <span m='2350320'>yeah,</span> <span
  m='2351550'>so</span> <span m='2351900'>it's</span> <span
  m='2352090'>A,</span> <span m='2352350'>B,</span> <span m='2352550'>C,</span>
  <span m='2352750'>D</span> <span m='2353150'>with</span> <span
  m='2353360'>values</span> <span m='2353700'>of</span> <span
  m='2353850'>2,</span> <span m='2354278'>3,</span> <span m='2355134'>7,</span>
  <span m='2355562'>6,</span> <span m='2355990'>1,</span> <span
  m='2356350'>20.</span> <span m='2358880'>I'll</span> <span
  m='2359110'>draw</span> <span m='2359320'>that.</span> <span
  m='2361880'>This</span> <span m='2362080'>is</span> <span
  m='2362200'>the</span> <span m='2362280'>non-reordered</span> <span
  m='2362990'>tree.</span> </p><p><span m='2369890'>Let's</span> <span
  m='2370140'>see,</span> <span m='2370250'>so</span> <span
  m='2370440'>it's</span> <span m='2370610'>2,</span> <span
  m='2371030'>3,</span> <span m='2373710'>7,</span> <span m='2374895'>6,</span>
  <span m='2378860'>1,</span> <span m='2380710'>20.</span> <span
  m='2381410'>So</span> <span m='2381560'>what's</span> <span
  m='2381780'>the</span> <span m='2381870'>best</span> <span
  m='2382060'>way</span> <span m='2382150'>to</span> <span
  m='2382240'>reorder?</span> <span m='2383590'>Well, first</span> <span
  m='2383920'>of all,</span> <span m='2384200'>does</span> <span
  m='2384350'>anyone</span> <span m='2384610'>remember</span> <span
  m='2385250'>what</span> <span m='2385540'>Patrick</span> <span
  m='2385900'>said</span> <span m='2386190'>when he</span> <span
  m='2386400'>talked</span> <span m='2386590'>about</span> <span
  m='2386760'>progressive</span> <span m='2387015'>deepening?</span> <span
  m='2389300'>Usually</span> <span m='2389780'>no</span> <span
  m='2389890'>one</span> <span m='2390000'>does,</span> <span
  m='2390230'>so</span> <span m='2390620'>don't</span> <span
  m='2390830'>worry</span> <span m='2391020'>about</span> <span
  m='2391380'>it.</span> <span m='2393800'>Because</span> <span
  m='2394410'>at</span> <span m='2394550'>that</span> <span
  m='2394760'>time</span> <span m='2394960'>you</span> <span
  m='2395120'>guys</span> <span m='2395360'>didn't</span> <span
  m='2395610'>think,</span> <span m='2395880'>oh,</span> <span
  m='2396090'>I</span> <span m='2396170'>have</span> <span m='2396320'>to</span>
  <span m='2396430'>do</span> <span m='2396570'>this</span> <span
  m='2396760'>for</span> <span m='2396870'>the</span> <span
  m='2397000'>quiz.</span> <span m='2397390'>You were</span> <span
  m='2397520'>just</span> <span m='2397700'>thinking,</span> <span
  m='2398020'>oh</span> <span m='2398170'>man,</span> <span
  m='2398850'>we've</span> <span m='2399050'>already</span> <span
  m='2399290'>heard</span> <span m='2399460'>alpha-beta</span> <span
  m='2399850'>and</span> <span m='2399950'>all</span> <span
  m='2400120'>this</span> <span m='2400290'>other</span> <span
  m='2400550'>stuff.</span> <span m='2401070'>And</span> <span
  m='2401340'>this</span> <span m='2401520'>is</span> <span
  m='2401610'>just</span> <span m='2401780'>a</span> <span
  m='2401830'>small</span> <span m='2402220'>fact.</span> <span
  m='2402570'>But</span> <span m='2402680'>it's</span> <span
  m='2402820'>a</span> <span m='2402860'>very</span> <span
  m='2403320'>important</span> <span m='2403970'>fact.</span> </p><p><span
  m='2404650'>And</span> <span m='2404840'>now</span> <span
  m='2405050'>you</span> <span m='2405400'>know you have</span> <span
  m='2405510'>to</span> <span m='2405600'>do it</span> <span
  m='2405720'>for</span> <span m='2405840'>the</span> <span
  m='2405950'>quiz.</span> <span m='2406720'>So</span> <span
  m='2406800'>you're</span> <span m='2406980'>probably</span> <span
  m='2407133'>going</span> <span m='2407286'>to</span> <span
  m='2407440'>remember</span> <span m='2407900'>it.</span> <span
  m='2408600'>The</span> <span m='2408700'>way</span> <span
  m='2408990'>you</span> <span m='2409160'>do</span> <span m='2409620'>it</span>
  <span m='2409720'>is</span> <span m='2410260'>you</span> <span
  m='2410490'>try</span> <span m='2410780'>to</span> <span
  m='2411070'>guess,</span> <span m='2412160'>and</span> <span
  m='2412290'>you</span> <span m='2412380'>say,</span> <span
  m='2413510'>which</span> <span m='2413790'>one</span> <span
  m='2413970'>of</span> <span m='2414080'>these</span> <span
  m='2414340'>is</span> <span m='2414520'>going</span> <span
  m='2414740'>to</span> <span m='2414800'>be</span> <span m='2414930'>a</span>
  <span m='2414980'>winner?</span> <span m='2416030'>Whichever</span> <span
  m='2416390'>one</span> <span m='2416530'>I</span> <span
  m='2416620'>think</span> <span m='2416780'>is</span> <span
  m='2416870'>going</span> <span m='2416980'>to</span> <span
  m='2417020'>be</span> <span m='2417100'>a</span> <span
  m='2417170'>winner</span> <span m='2417580'>at</span> <span
  m='2417700'>that</span> <span m='2417900'>level,</span> <span
  m='2419530'>I</span> <span m='2419670'>put</span> <span
  m='2419950'>first.</span> <span m='2421360'>Why is that</span> <span
  m='2421720'>the</span> <span m='2422110'>case?</span> </p><p><span
  m='2422500'>Well,</span> <span m='2424210'>something</span> <span
  m='2424550'>interesting</span> <span m='2424950'>you</span> <span
  m='2425060'>may have</span> <span m='2425200'>noticed</span> <span
  m='2425620'>here--</span> <span m='2427110'>whenever</span> <span
  m='2427420'>you</span> <span m='2427570'>have</span> <span
  m='2427850'>a</span> <span m='2427980'>winner,</span> <span
  m='2429700'>like</span> <span m='2429910'>the</span> <span
  m='2429990'>middle</span> <span m='2430280'>node,</span> <span
  m='2430590'>or</span> <span m='2431500'>whenever</span> <span
  m='2431830'>you</span> <span m='2431940'>have</span> <span
  m='2432210'>whatever</span> <span m='2432520'>is the</span> <span
  m='2432680'>current</span> <span m='2433090'>best</span> <span
  m='2434060'>for</span> <span m='2434220'>your</span> <span
  m='2434360'>alpha,</span> <span m='2435320'>you</span> <span m='2435400'>sort
  of</span> <span m='2435700'>have</span> <span m='2435990'>to</span> <span
  m='2436080'>explore</span> <span m='2436570'>out</span> <span
  m='2436790'>a</span> <span m='2436880'>lot</span> <span m='2437210'>of</span>
  <span m='2437320'>that</span> <span m='2437510'>area.</span> <span
  m='2439160'>Like</span> <span m='2439370'>for</span> <span
  m='2439480'>instance,</span> <span m='2440120'>the</span> <span
  m='2440210'>left</span> <span m='2440535'>node was</span> <span
  m='2440860'>our</span> <span m='2440990'>current</span> <span
  m='2441390'>best</span> <span m='2441860'>at</span> <span
  m='2442125'>2.</span> <span m='2442390'>The</span> <span
  m='2442470'>middle</span> <span m='2442820'>branch</span> <span
  m='2443340'>was</span> <span m='2443500'>our</span> <span
  m='2443640'>current</span> <span m='2443970'>best,</span> <span
  m='2444250'>at</span> <span m='2444330'>that</span> <span
  m='2444530'>time</span> <span m='2444740'>was</span> <span
  m='2444850'>6.</span> <span m='2445130'>It</span> <span m='2445200'>was</span>
  <span m='2445390'>the</span> <span m='2445480'>total</span> <span
  m='2445790'>best.</span> </p><p><span m='2446680'>We</span> <span
  m='2446780'>had</span> <span m='2446910'>to</span> <span
  m='2446950'>explore</span> <span m='2447280'>a</span> <span
  m='2447340'>good</span> <span m='2447510'>number</span> <span
  m='2447680'>of</span> <span m='2447770'>nodes.</span> <span m='2448090'>But
  on</span> <span m='2448190'>the</span> <span m='2448340'>right,</span> <span
  m='2448650'>we</span> <span m='2448730'>just</span> <span
  m='2448860'>saw,</span> <span m='2449100'>oh, there's</span> <span
  m='2449330'>1.</span> <span m='2450370'>We're</span> <span
  m='2450520'>done.</span> <span m='2450930'>We</span> <span
  m='2451040'>cut</span> <span m='2451270'>everything</span> <span
  m='2451620'>off.</span> <span m='2453070'>In</span> <span
  m='2453110'>other</span> <span m='2453270'>words,</span> <span
  m='2454080'>the</span> <span m='2454110'>branch</span> <span
  m='2454520'>that</span> <span m='2454640'>turns</span> <span
  m='2454940'>out</span> <span m='2455150'>to</span> <span m='2455240'>be</span>
  <span m='2455480'>the</span> <span m='2455590'>one</span> <span
  m='2455800'>that</span> <span m='2455930'>you</span> <span
  m='2456070'>take,</span> <span m='2456810'>you</span> <span
  m='2456950'>have</span> <span m='2457110'>to</span> <span
  m='2457190'>do</span> <span m='2457300'>a</span> <span
  m='2457360'>pretty</span> <span m='2457700'>good</span> <span
  m='2457910'>amount</span> <span m='2458100'>of</span> <span
  m='2458170'>exploration</span> <span m='2458760'>to</span> <span
  m='2459110'>prove</span> <span m='2459540'>that</span> <span
  m='2459660'>it's</span> <span m='2459800'>the</span> <span
  m='2459940'>right</span> <span m='2460210'>one.</span> <span
  m='2460800'>Whereas</span> <span m='2460940'>if</span> <span
  m='2461050'>it's</span> <span m='2461160'>the</span> <span
  m='2461290'>wrong</span> <span m='2461620'>one,</span> <span
  m='2461870'>you</span> <span m='2461970'>can</span> <span
  m='2462090'>sometimes</span> <span m='2462520'>with</span> <span
  m='2462640'>just</span> <span m='2462850'>one</span> <span
  m='2463060'>node</span> <span m='2463340'>say,</span> <span m='2463570'>this
  is</span> <span m='2463690'>wrong,</span> <span m='2464110'>done.</span>
  </p><p><span m='2465320'>So</span> <span m='2465640'>therefore,</span> <span
  m='2465950'>if</span> <span m='2466260'>the</span> <span
  m='2466340'>one</span> <span m='2466590'>that</span> <span
  m='2466730'>turns</span> <span m='2466970'>out</span> <span
  m='2467100'>to</span> <span m='2467150'>be</span> <span m='2467220'>the</span>
  <span m='2467310'>eventual</span> <span m='2467730'>winner</span> <span
  m='2468120'>is</span> <span m='2468590'>first</span> <span
  m='2469310'>of</span> <span m='2469450'>all,</span> <span
  m='2470510'>then</span> <span m='2470640'>it's</span> <span
  m='2470760'>really</span> <span m='2471180'>easy</span> <span
  m='2471540'>to</span> <span m='2471670'>reject</span> <span
  m='2472100'>all</span> <span m='2472330'>the</span> <span
  m='2472430'>other</span> <span m='2472610'>branches.</span> <span
  m='2473290'>Do</span> <span m='2473400'>people</span> <span
  m='2473680'>see</span> <span m='2473810'>that</span> <span
  m='2474100'>sort</span> <span m='2474270'>of</span> <span
  m='2475000'>conceptually</span> <span m='2475720'>a</span> <span
  m='2475790'>little</span> <span m='2476030'>bit,</span> <span
  m='2476490'>that</span> <span m='2476670'>if</span> <span
  m='2476760'>you</span> <span m='2476860'>get</span> <span
  m='2477170'>the</span> <span m='2477250'>best</span> <span
  m='2477640'>node</span> <span m='2478210'>right</span> <span
  m='2478440'>away,</span> <span m='2479250'>you</span> <span
  m='2479380'>can</span> <span m='2479500'>just</span> <span
  m='2479660'>reject</span> <span m='2480000'>all</span> <span
  m='2480180'>the</span> <span m='2480270'>wrong</span> <span
  m='2480500'>ones</span> <span m='2480860'>pretty</span> <span
  m='2481190'>quickly?</span> <span m='2482390'>That's</span> <span
  m='2482690'>our</span> <span m='2482860'>goal.</span> </p><p><span
  m='2483560'>So</span> <span m='2483800'>how</span> <span
  m='2484020'>can</span> <span m='2484120'>we,</span> <span
  m='2484260'>quote,</span> <span m='2484550'>"get</span> <span
  m='2484720'>the</span> <span m='2484850'>right</span> <span
  m='2485040'>one,"</span> <span m='2485340'>the</span> <span
  m='2485510'>best</span> <span m='2485760'>one</span> <span
  m='2485970'>right</span> <span m='2486150'>away?</span> <span
  m='2487040'>Well,</span> <span m='2487720'>here's</span> <span
  m='2487970'>how</span> <span m='2488100'>we</span> <span m='2488210'>do</span>
  <span m='2488360'>it.</span> <span m='2490050'>Let's</span> <span
  m='2490340'>say</span> <span m='2490470'>we're</span> <span
  m='2490650'>at</span> <span m='2490850'>B.</span> <span
  m='2491810'>Which</span> <span m='2492050'>one is</span> <span
  m='2492300'>the</span> <span m='2492380'>minimizer</span> <span
  m='2492800'>likely</span> <span m='2493170'>to</span> <span
  m='2493250'>pick</span> <span m='2493590'>assuming</span> <span
  m='2493950'>that</span> <span m='2494070'>our</span> <span
  m='2494180'>heuristic</span> <span m='2494770'>is</span> <span
  m='2495020'>good</span> <span m='2495800'>and</span> <span
  m='2496000'>that</span> <span m='2496510'>these</span> <span
  m='2496980'>guesses</span> <span m='2497370'>are</span> <span
  m='2497470'>pretty</span> <span m='2497770'>much</span> <span
  m='2497990'>close</span> <span m='2498240'>to</span> <span
  m='2498330'>the</span> <span m='2498420'>truth?</span> <span m='2498920'>It
  turns</span> <span m='2499150'>out they're</span> <span
  m='2499500'>perfect,</span> <span m='2499920'>so</span> <span
  m='2500150'>this</span> <span m='2500260'>is</span> <span
  m='2500370'>going</span> <span m='2500480'>to</span> <span
  m='2500540'>work.</span> <span m='2501420'>So</span> <span
  m='2501540'>which</span> <span m='2501720'>one</span> <span
  m='2501880'>will</span> <span m='2501940'>the</span> <span
  m='2502000'>minimizer</span> <span m='2502400'>pick</span> <span
  m='2502760'>if</span> <span m='2502920'>it</span> <span m='2503010'>has</span>
  <span m='2503140'>to</span> <span m='2503220'>choose</span> <span
  m='2503390'>between</span> <span m='2503690'>E and</span> <span
  m='2503940'>F,</span> <span m='2504210'>do we</span> <span
  m='2504310'>think?</span> </p><p><span m='2504705'>AUDIENCE: E.</span>
  </p><p><span m='2505580'>PROFESSOR: E,</span> <span
  m='2506060'>perfect.</span> <span m='2506450'>Which</span> <span
  m='2506620'>one will it</span> <span m='2506890'>pick</span> <span
  m='2507080'>between</span> <span m='2507425'>G</span> <span
  m='2507770'>and</span> <span m='2508020'>H?</span> </p><p><span
  m='2508994'>AUDIENCE: H.</span> </p><p><span m='2509481'>PROFESSOR: H.</span>
  <span m='2509970'>Which</span> <span m='2510120'>one will</span> <span
  m='2510410'>it</span> <span m='2510490'>pick</span> <span
  m='2510690'>between</span> <span m='2510760'>I</span> <span
  m='2510980'>and</span> <span m='2511240'>J?</span> </p><p><span
  m='2511400'>AUDIENCE: I.</span> </p><p><span m='2512470'>PROFESSOR: OK,</span>
  <span m='2513230'>so</span> <span m='2513940'>what</span> <span
  m='2514170'>we're</span> <span m='2514310'>saying</span> <span
  m='2514660'>is</span> <span m='2514830'>we</span> <span
  m='2514980'>think</span> <span m='2515110'>it's</span> <span
  m='2515220'>going</span> <span m='2515310'>to</span> <span
  m='2515360'>pick</span> <span m='2515600'>E.</span> <span
  m='2516790'>We</span> <span m='2516900'>think</span> <span
  m='2517070'>it's</span> <span m='2517190'>going</span> <span
  m='2517280'>to</span> <span m='2517320'>pick</span> <span
  m='2517560'>H.</span> <span m='2518680'>We</span> <span m='2518900'>think
  it's</span> <span m='2519000'>going to</span> <span m='2519310'>pick</span>
  <span m='2519443'>I.</span> <span m='2519576'>So</span> <span
  m='2519710'>first</span> <span m='2520020'>of</span> <span
  m='2520080'>all,</span> <span m='2520320'>we</span> <span
  m='2520420'>should</span> <span m='2520530'>put</span> <span
  m='2520830'>E</span> <span m='2521000'>before</span> <span
  m='2521320'>F,</span> <span m='2521990'>H</span> <span
  m='2522240'>before</span> <span m='2522540'>G,</span> <span
  m='2522830'>and</span> <span m='2523030'>I</span> <span
  m='2523190'>before</span> <span m='2523450'>J.</span> <span
  m='2523950'>Because</span> <span m='2524180'>we</span> <span
  m='2524330'>think</span> <span m='2524490'>it's</span> <span
  m='2524620'>going</span> <span m='2524730'>to</span> <span
  m='2524790'>pick</span> <span m='2525230'>those</span> <span
  m='2525580'>first.</span> <span m='2526490'>Those</span> <span
  m='2526730'>are</span> <span m='2526810'>probably</span> <span
  m='2527290'>our</span> <span m='2527480'>best</span> <span
  m='2527750'>ones</span> <span m='2527960'>to</span> <span
  m='2528070'>invalidate</span> <span m='2528970'>a</span> <span
  m='2529080'>poor</span> <span m='2529410'>branch.</span> <span
  m='2530190'>So</span> <span m='2530350'>now</span> <span
  m='2530620'>between</span> <span m='2530950'>2,</span> <span
  m='2531190'>6,</span> <span m='2531500'>and</span> <span m='2531670'>1,</span>
  <span m='2532230'>which</span> <span m='2532360'>is</span> <span
  m='2532430'>what</span> <span m='2532600'>we</span> <span
  m='2532740'>think</span> <span m='2532890'>we're</span> <span
  m='2533030'>going</span> <span m='2533130'>to</span> <span
  m='2533170'>get,</span> <span m='2534540'>which</span> <span
  m='2534740'>one</span> <span m='2534910'>do</span> <span m='2534975'>we</span>
  <span m='2535040'>think the</span> <span m='2535240'>maximizer is</span> <span
  m='2535690'>going</span> <span m='2535940'>to</span> <span
  m='2536010'>take?</span> </p><p><span m='2536735'>AUDIENCE: 6.</span>
  </p><p><span m='2537190'>PROFESSOR: 6.</span> <span m='2538050'>Then</span>
  <span m='2538510'>if</span> <span m='2538650'>it</span> <span
  m='2538830'>couldn't</span> <span m='2539100'>take</span> <span
  m='2539310'>6,</span> <span m='2539630'>what</span> <span
  m='2539780'>would</span> <span m='2539860'>be</span> <span
  m='2540070'>its</span> <span m='2540260'>next best</span> <span
  m='2540675'>choice?</span> <span m='2541940'>2,</span> <span
  m='2542520'>then</span> <span m='2542760'>1.</span> <span
  m='2543690'>That's</span> <span m='2543910'>just our</span> <span
  m='2544030'>order--</span> <span m='2544810'>simple</span> <span
  m='2545150'>as</span> <span m='2545240'>that.</span> <span
  m='2547120'>It</span> <span m='2547420'>couldn't</span> <span
  m='2547700'>be</span> <span m='2547850'>anything</span> <span
  m='2548170'>easier</span> <span m='2548470'>that</span> <span
  m='2548630'>evolves</span> <span m='2549080'>really</span> <span
  m='2549320'>complex</span> <span m='2549790'>trees,</span> <span
  m='2550170'>a</span> <span m='2550210'>huge</span> <span
  m='2550450'>number</span> <span m='2550680'>of</span> <span
  m='2550760'>numbers,</span> <span m='2551130'>and</span> <span
  m='2551250'>reordering</span> <span m='2551720'>those</span> <span
  m='2551960'>trees.</span> </p><p><span m='2553200'>So</span> <span
  m='2556100'>C--</span> <span m='2557550'>you</span> <span
  m='2557720'>guys</span> <span m='2557970'>told</span> <span
  m='2558150'>me</span> <span m='2558320'>C,</span> <span m='2558770'>B,</span>
  <span m='2559670'>D.</span> <span m='2560950'>You</span> <span
  m='2561110'>told</span> <span m='2561300'>me</span> <span
  m='2561410'>C,</span> <span m='2561786'>B,</span> <span m='2562162'>D,</span>
  <span m='2562540'>I</span> <span m='2562630'>think?</span> <span
  m='2563080'>Yeah,</span> <span m='2563310'>those</span> <span
  m='2563550'>are</span> <span m='2563600'>the</span> <span
  m='2563680'>ones</span> <span m='2563850'>the</span> <span
  m='2563920'>maximizer</span> <span m='2564460'>likes.</span> <span
  m='2564780'>And</span> <span m='2564890'>then</span> <span m='2565070'>the
  ones</span> <span m='2565230'>the</span> <span m='2565300'>minimizer</span>
  <span m='2565760'>likes</span> <span m='2565990'>you</span> <span
  m='2566120'>told</span> <span m='2566400'>me</span> <span
  m='2566540'>was</span> <span m='2567790'>H,</span> <span
  m='2569740'>and</span> <span m='2570220'>before</span> <span
  m='2570540'>G.</span> <span m='2571040'>Because</span> <span
  m='2571330'>H</span> <span m='2571580'>is</span> <span
  m='2571680'>smaller</span> <span m='2571970'>than</span> <span
  m='2572150'>G.</span> <span m='2573150'>You</span> <span
  m='2573230'>guys</span> <span m='2573490'>told</span> <span m='2573710'>me
  E</span> <span m='2574010'>before</span> <span m='2574370'>F.</span> <span
  m='2577000'>And</span> <span m='2577380'>you</span> <span
  m='2577480'>guys</span> <span m='2577790'>told</span> <span
  m='2578140'>me</span> <span m='2579240'>I</span> <span
  m='2579420'>before</span> <span m='2579770'>J.</span> <span
  m='2583710'>And</span> <span m='2583990'>you</span> <span
  m='2584080'>guys</span> <span m='2584330'>would</span> <span
  m='2584460'>be</span> <span m='2584600'>correct</span> <span
  m='2585090'>in</span> <span m='2585430'>all</span> <span
  m='2585810'>regards.</span> </p><p><span m='2587120'>We</span> <span
  m='2587340'>have</span> <span m='2588040'>6,</span> <span
  m='2588320'>7,</span> <span m='2589160'>2,</span> <span m='2589420'>3,</span>
  <span m='2590300'>1,</span> <span m='2591177'>20.</span> <span
  m='2592490'>All</span> <span m='2592750'>the</span> <span
  m='2592830'>minimizers</span> <span m='2593480'>choose</span> <span
  m='2593750'>from</span> <span m='2594020'>smallest</span> <span m='2594390'>to
  highest.</span> <span m='2595450'>The</span> <span
  m='2595540'>maximizer</span> <span m='2596160'>chooses</span> <span
  m='2596580'>from</span> <span m='2597510'>highest</span> <span
  m='2597980'>to</span> <span m='2598070'>lowest</span> <span
  m='2599165'>of</span> <span m='2599550'>the</span> <span
  m='2599650'>ones</span> <span m='2599840'>that the</span> <span
  m='2599950'>minimizers</span> <span m='2600540'>will</span> <span
  m='2600710'>take.</span> <span m='2601690'>And</span> <span
  m='2602110'>if</span> <span m='2602270'>we</span> <span m='2602400'>did</span>
  <span m='2602580'>that,</span> <span m='2602900'>you</span> <span
  m='2602970'>can</span> <span m='2603110'>see</span> <span
  m='2603810'>we</span> <span m='2603940'>would</span> <span
  m='2604080'>probably</span> <span m='2604320'>save</span> <span
  m='2604590'>some</span> <span m='2604780'>time.</span> </p><p><span
  m='2606160'>Let's</span> <span m='2606390'>see</span> <span
  m='2606510'>how</span> <span m='2606620'>much</span> <span
  m='2606880'>time.</span> <span m='2607640'>Let's</span> <span
  m='2607860'>say</span> <span m='2607950'>we</span> <span
  m='2608070'>looked</span> <span m='2608240'>at</span> <span
  m='2608370'>H</span> <span m='2608750'>first.</span> <span
  m='2610770'>Well,</span> <span m='2611260'>if</span> <span
  m='2611510'>we</span> <span m='2611620'>looked</span> <span
  m='2611840'>at</span> <span m='2612010'>H</span> <span
  m='2612360'>first,</span> <span m='2613680'>we</span> <span
  m='2614010'>would</span> <span m='2614260'>still</span> <span
  m='2614900'>have</span> <span m='2615180'>actually</span> <span
  m='2615620'>had</span> <span m='2615810'>to</span> <span
  m='2615910'>look</span> <span m='2616240'>at</span> <span m='2616500'>Q</span>
  <span m='2617240'>and</span> <span m='2617615'>N.</span> <span
  m='2618630'>However,</span> <span m='2619060'>we</span> <span
  m='2619190'>would</span> <span m='2619380'>not</span> <span
  m='2619650'>have</span> <span m='2619800'>had</span> <span
  m='2620040'>to</span> <span m='2620130'>look</span> <span
  m='2620330'>at</span> <span m='2620570'>K.</span> <span m='2621780'>Do</span>
  <span m='2621880'>people</span> <span m='2622130'>see</span> <span
  m='2622300'>why?</span> <span m='2623340'>If</span> <span
  m='2623460'>we</span> <span m='2623590'>already</span> <span
  m='2623880'>knew</span> <span m='2624040'>this</span> <span m='2624190'>branch
  was</span> <span m='2624620'>6,</span> <span m='2624970'>as</span> <span
  m='2625070'>soon</span> <span m='2625230'>as</span> <span
  m='2625330'>we</span> <span m='2625420'>saw</span> <span m='2625590'>2</span>
  <span m='2626020'>for</span> <span m='2626170'>the</span> <span
  m='2626250'>beta</span> <span m='2626515'>here--</span> <span
  m='2626780'>2</span> <span m='2627000'>is</span> <span m='2627110'>less</span>
  <span m='2627310'>than</span> <span m='2627450'>6--</span> <span
  m='2628160'>we</span> <span m='2628270'>could</span> <span m='2628620'>have
  pruned.</span> <span m='2629840'>We</span> <span m='2629940'>still</span>
  <span m='2630140'>would have</span> <span m='2630240'>had</span> <span
  m='2630460'>to</span> <span m='2630510'>look</span> <span
  m='2630610'>at</span> <span m='2630780'>I</span> <span m='2631040'>over</span>
  <span m='2631360'>here.</span> <span m='2631710'>Because</span> <span
  m='2632220'>you</span> <span m='2632300'>have</span> <span
  m='2632520'>to</span> <span m='2632630'>look</span> <span m='2632820'>at
  at</span> <span m='2632970'>least</span> <span m='2633150'>one</span> <span
  m='2633480'>thing</span> <span m='2633940'>in</span> <span
  m='2634090'>the</span> <span m='2634180'>new</span> <span
  m='2634360'>sub-branch.</span> </p><p><span m='2635760'>And</span> <span
  m='2636520'>it</span> <span m='2636670'>actually</span> <span
  m='2636990'>only</span> <span m='2637200'>would</span> <span m='2637390'>have
  saved</span> <span m='2637530'>us</span> <span m='2637680'>one</span> <span
  m='2638000'>node--</span> <span m='2639420'>oops.</span> <span
  m='2640500'>So</span> <span m='2641670'>it</span> <span
  m='2641840'>winds</span> <span m='2642160'>up</span> <span
  m='2642440'>that</span> <span m='2643500'>in</span> <span
  m='2643650'>total,</span> <span m='2644200'>how</span> <span
  m='2644290'>many</span> <span m='2644480'>nodes</span> <span m='2644690'>would
  we</span> <span m='2644790'>have</span> <span m='2644910'>evaluated</span>
  <span m='2645680'>if</span> <span m='2645830'>we</span> <span
  m='2645940'>did</span> <span m='2647950'>that</span> <span
  m='2648170'>little</span> <span m='2648480'>scheme</span> <span
  m='2649310'>of</span> <span m='2649530'>reordering?</span> <span
  m='2650350'>Well,</span> <span m='2651060'>we</span> <span
  m='2651250'>normally</span> <span m='2651630'>had</span> <span
  m='2651800'>to</span> <span m='2651900'>do</span> <span
  m='2652050'>six--</span> <span m='2653330'>E,</span> <span
  m='2653620'>K,</span> <span m='2653910'>Q,</span> <span m='2654380'>N,</span>
  <span m='2655194'>H,</span> <span m='2656010'>I.</span> <span
  m='2657050'>How</span> <span m='2657240'>many</span> <span m='2657400'>do
  we</span> <span m='2657510'>evaluate</span> <span m='2658150'>if</span> <span
  m='2658310'>we</span> <span m='2658430'>do</span> <span
  m='2658640'>this</span> <span m='2659740'>progressive</span> <span
  m='2660130'>deepening</span> <span m='2660490'>scheme?</span> <span
  m='2660890'>How</span> <span m='2661030'>many</span> <span
  m='2661190'>times</span> <span m='2661530'>do we</span> <span
  m='2661660'>run</span> <span m='2661940'>the</span> <span
  m='2662130'>static</span> <span m='2662310'>evaluator,</span> <span
  m='2663200'>which</span> <span m='2663450'>of course</span> <span
  m='2663840'>you</span> <span m='2663920'>know</span> <span
  m='2664180'>the</span> <span m='2664400'>static</span> <span
  m='2664600'>evaluator</span> <span m='2664800'>takes</span> <span
  m='2664970'>a</span> <span m='2665020'>long</span> <span
  m='2665290'>time?</span> <span m='2666620'>Anyone have</span> <span
  m='2667090'>a</span> <span m='2667520'>guess?</span> </p><p><span
  m='2669400'>I</span> <span m='2669600'>told</span> <span m='2669950'>you
  the</span> <span m='2670110'>only</span> <span m='2670290'>one</span> <span
  m='2670480'>we</span> <span m='2670600'>don't</span> <span
  m='2670890'>evaluate</span> <span m='2671490'>is</span> <span
  m='2671710'>K.</span> <span m='2675670'>Raise</span> <span
  m='2675830'>your</span> <span m='2675940'>hand.</span> <span
  m='2676170'>I</span> <span m='2676640'>won't</span> <span
  m='2676860'>make</span> <span m='2677080'>anyone</span> <span
  m='2678290'>give</span> <span m='2678480'>this</span> <span
  m='2678640'>one.</span> <span m='2680460'>So</span> <span m='2681740'>I</span>
  <span m='2681850'>said</span> <span m='2682030'>the</span> <span
  m='2682110'>only</span> <span m='2682280'>one</span> <span
  m='2682390'>we</span> <span m='2682470'>save</span> <span
  m='2682780'>on</span> <span m='2682930'>is</span> <span m='2683070'>K.</span>
  <span m='2683410'>So</span> <span m='2683570'>we</span> <span
  m='2683660'>still</span> <span m='2683940'>do</span> <span
  m='2684210'>E,</span> <span m='2684500'>Q,</span> <span m='2685040'>N,</span>
  <span m='2685870'>H,</span> <span m='2686150'>and</span> <span
  m='2686290'>I</span> <span m='2686480'>over</span> <span
  m='2686710'>here.</span> <span m='2689270'>There's</span> <span
  m='2689510'>two</span> <span m='2689690'>possible</span> <span
  m='2690150'>answers</span> <span m='2690550'>that I</span> <span
  m='2690640'>will</span> <span m='2690770'>accept.</span> <span
  m='2691180'>So</span> <span m='2691900'>you</span> <span
  m='2691990'>have</span> <span m='2692120'>a</span> <span
  m='2692160'>higher</span> <span m='2692510'>chance</span> <span
  m='2692720'>of</span> <span m='2692830'>guessing</span> <span
  m='2693180'>it.</span> <span m='2693340'>Anyway?</span> </p><p><span
  m='2697200'>Does</span> <span m='2697265'>everyone</span> <span
  m='2697330'>agree</span> <span m='2697640'>that</span> <span
  m='2697770'>we</span> <span m='2697890'>did</span> <span
  m='2698130'>six</span> <span m='2699060'>before?</span> <span
  m='2699405'>If</span> <span m='2699750'>we</span> <span
  m='2699910'>didn't</span> <span m='2700190'>do</span> <span
  m='2700380'>any</span> <span m='2700540'>progressive</span> <span
  m='2700880'>deepening,</span> <span m='2701210'>we</span> <span
  m='2701300'>just</span> <span m='2701660'>did</span> <span
  m='2702140'>E,</span> <span m='2702510'>K,</span> <span m='2702850'>Q,</span>
  <span m='2703190'>N,</span> <span m='2703340'>H,</span> <span
  m='2703450'>I.</span> <span m='2705190'>And</span> <span
  m='2705410'>now</span> <span m='2705600'>we're</span> <span
  m='2705700'>not</span> <span m='2705920'>doing</span> <span
  m='2706110'>K.</span> <span m='2708790'>OK,</span> <span
  m='2709000'>people</span> <span m='2709110'>are</span> <span
  m='2709210'>saying</span> <span m='2709400'>five.</span> <span
  m='2709890'>All</span> <span m='2710280'>right,</span> <span
  m='2710720'>good.</span> <span m='2711280'>That's</span> <span
  m='2711450'>not</span> <span m='2711660'>the</span> <span
  m='2711730'>right</span> <span m='2711920'>answer.</span> <span
  m='2712240'>But</span> <span m='2712490'>it at least</span> <span
  m='2712650'>shows</span> <span m='2713120'>that</span> <span
  m='2713260'>you</span> <span m='2713470'>can</span> <span
  m='2713710'>do</span> <span m='2714250'>taking</span> <span
  m='2714450'>away</span> <span m='2714730'>the</span> <span
  m='2714820'>one.</span> <span m='2715680'>We</span> <span
  m='2715800'>did</span> <span m='2716090'>at</span> <span
  m='2716170'>least</span> <span m='2716540'>five</span> <span
  m='2716850'>over</span> <span m='2717080'>here.</span> </p><p><span
  m='2717870'>There's</span> <span m='2718100'>two</span> <span
  m='2718290'>possible</span> <span m='2718690'>answers,</span> <span
  m='2718930'>though.</span> <span m='2719030'>Because</span> <span
  m='2719350'>look</span> <span m='2719560'>over</span> <span
  m='2719790'>there.</span> <span m='2720610'>In</span> <span
  m='2720770'>order</span> <span m='2720990'>to</span> <span
  m='2721120'>do</span> <span m='2721250'>the</span> <span
  m='2721350'>progressive</span> <span m='2721710'>deepening,</span> <span
  m='2722120'>we</span> <span m='2722230'>had</span> <span m='2722420'>to</span>
  <span m='2722490'>do</span> <span m='2723160'>those</span> <span
  m='2723570'>static</span> <span m='2723880'>evaluations,</span> <span
  m='2726140'>right?</span> <span m='2727850'>So</span> <span
  m='2728780'>we</span> <span m='2729350'>either</span> <span
  m='2729800'>did</span> <span m='2732200'>all</span> <span
  m='2732610'>those</span> <span m='2733310'>static</span> <span
  m='2733600'>evaluations</span> <span m='2734190'>and</span> <span
  m='2734730'>these</span> <span m='2735400'>five--</span> <span
  m='2735920'>E,</span> <span m='2736210'>K,</span> <span m='2736540'>Q,</span>
  <span m='2736880'>N,</span> <span m='2737220'>H, I--</span> <span
  m='2738640'>static</span> <span m='2738950'>evaluations.</span> <span
  m='2739470'>Because</span> <span m='2739540'>we</span> <span
  m='2739620'>didn't</span> <span m='2739830'>do</span> <span
  m='2739940'>the</span> <span m='2740080'>K.</span> </p><p><span
  m='2742590'>Or</span> <span m='2744290'>we</span> <span
  m='2744410'>might</span> <span m='2744660'>have</span> <span
  m='2744750'>saved</span> <span m='2745080'>ourselves.</span> <span
  m='2746010'>Because</span> <span m='2746550'>maybe</span> <span
  m='2746950'>we</span> <span m='2747060'>were</span> <span m='2747180'>smart
  and</span> <span m='2747710'>decided</span> <span m='2747970'>to</span> <span
  m='2748050'>cache</span> <span m='2748810'>the</span> <span
  m='2749030'>static</span> <span m='2749370'>values</span> <span
  m='2750230'>when</span> <span m='2750450'>we were</span> <span
  m='2750590'>going</span> <span m='2750800'>down</span> <span
  m='2750980'>the</span> <span m='2751070'>tree.</span> <span m='2751910'>It's
  an</span> <span m='2752050'>implementation</span> <span
  m='2752790'>detail</span> <span m='2753250'>that on</span> <span
  m='2753440'>this</span> <span m='2753690'>test</span> <span
  m='2754010'>when</span> <span m='2754130'>we</span> <span
  m='2754230'>asked</span> <span m='2754440'>that</span> <span
  m='2754600'>question</span> <span m='2754930'>we</span> <span
  m='2755040'>didn't</span> <span m='2755350'>say.</span> <span
  m='2756210'>What</span> <span m='2756360'>I</span> <span
  m='2756410'>mean</span> <span m='2756600'>by</span> <span
  m='2756670'>cache</span> <span m='2757100'>is</span> <span
  m='2757350'>when</span> <span m='2757480'>we</span> <span
  m='2757590'>did</span> <span m='2757770'>it</span> <span
  m='2757850'>here</span> <span m='2758210'>and saw</span> <span
  m='2758400'>that</span> <span m='2758660'>E</span> <span
  m='2759290'>was</span> <span m='2759500'>a</span> <span m='2759590'>2,</span>
  <span m='2760330'>and</span> <span m='2760440'>then</span> <span
  m='2760580'>here--</span> <span m='2761210'>oh,</span> <span
  m='2761440'>we</span> <span m='2761540'>have</span> <span
  m='2761820'>to</span> <span m='2761863'>do</span> <span m='2761906'>the</span>
  <span m='2761950'>static</span> <span m='2762260'>value</span> <span
  m='2762630'>at</span> <span m='2762900'>E.</span> <span m='2763170'>If</span>
  <span m='2763380'>we</span> <span m='2763500'>were</span> <span
  m='2763670'>smart,</span> <span m='2763990'>we</span> <span m='2764310'>might
  have</span> <span m='2764550'>made</span> <span m='2764740'>a</span> <span
  m='2764800'>little</span> <span m='2765000'>hash</span> <span
  m='2765260'>table</span> <span m='2765580'>or</span> <span
  m='2765640'>something</span> <span m='2766520'>and</span> <span
  m='2766710'>put</span> <span m='2766890'>down</span> <span
  m='2767160'>2</span> <span m='2767650'>so</span> <span m='2767830'>we</span>
  <span m='2767930'>didn't</span> <span m='2768160'>have</span> <span
  m='2768340'>to</span> <span m='2768440'>do</span> <span m='2768610'>a</span>
  <span m='2768680'>static</span> <span m='2768940'>evaluation</span> <span
  m='2769290'>at E.</span> <span m='2769985'>And</span> <span
  m='2770330'>if</span> <span m='2770530'>that</span> <span
  m='2770720'>happened,</span> <span m='2771170'>well,</span> <span
  m='2771330'>we</span> <span m='2771430'>save</span> <span
  m='2771930'>E,</span> <span m='2772190'>H,</span> <span m='2772450'>and I,
  and</span> <span m='2772680'>we</span> <span m='2772830'>do</span> <span
  m='2772970'>three</span> <span m='2773340'>fewer.</span> <span
  m='2775270'>Does</span> <span m='2775420'>everyone</span> <span
  m='2775680'>see</span> <span m='2775830'>that?</span> </p><p><span
  m='2776660'>However,</span> <span m='2777080'>that's</span> <span
  m='2777310'>still</span> <span m='2777520'>more</span> <span
  m='2777720'>than</span> <span m='2777910'>six.</span> <span m='2778210'>So
  it</span> <span m='2778330'>didn't</span> <span m='2778620'>save</span> <span
  m='2778850'>us</span> <span m='2779010'>time.</span> <span
  m='2779260'>So</span> <span m='2779330'>you</span> <span
  m='2779430'>might</span> <span m='2779640'>say,</span> <span
  m='2779870'>oh,</span> <span m='2780250'>progressive</span> <span
  m='2780590'>deepening</span> <span m='2780800'>is a</span> <span
  m='2780910'>waste</span> <span m='2781240'>of</span> <span
  m='2781340'>time.</span> <span m='2782250'>But</span> <span
  m='2782350'>it's</span> <span m='2782570'>not.</span> <span
  m='2783670'>Because</span> <span m='2784010'>this</span> <span
  m='2784190'>is</span> <span m='2784370'>a</span> <span
  m='2784430'>very,</span> <span m='2785010'>very</span> <span
  m='2785300'>small,</span> <span m='2785950'>not</span> <span
  m='2786140'>very</span> <span m='2786370'>branchy</span> <span
  m='2786920'>tree</span> <span m='2788050'>that</span> <span
  m='2788280'>was</span> <span m='2788430'>made</span> <span m='2788820'>so
  that</span> <span m='2789020'>you</span> <span m='2789170'>guys</span> <span
  m='2789460'>could</span> <span m='2789690'>easily</span> <span
  m='2790750'>do</span> <span m='2791260'>alpha-beta</span> <span
  m='2791840'>and</span> <span m='2791990'>take</span> <span
  m='2792210'>the</span> <span m='2792300'>quiz,</span> <span m='2792680'>and
  it</span> <span m='2792820'>wouldn't</span> <span m='2793000'>be</span> <span
  m='2793140'>bad.</span> <span m='2794060'>If</span> <span
  m='2794220'>this</span> <span m='2794580'>was</span> <span
  m='2794800'>actually</span> <span m='2795920'>branching</span> <span
  m='2798590'>even</span> <span m='2798860'>double</span> <span
  m='2799170'>at</span> <span m='2799480'>each</span> <span
  m='2799730'>level,</span> <span m='2800120'>it</span> <span
  m='2800180'>would</span> <span m='2800340'>have,</span> <span
  m='2801250'>what,</span> <span m='2802060'>16</span> <span
  m='2802660'>nodes</span> <span m='2802980'>down</span> <span m='2803250'>here
  at</span> <span m='2803360'>the</span> <span m='2803420'>bottom.</span> <span
  m='2804310'>Then</span> <span m='2804620'>you</span> <span
  m='2804810'>would</span> <span m='2804950'>want</span> <span
  m='2805270'>to</span> <span m='2805460'>be</span> <span
  m='2805580'>doing</span> <span m='2805800'>that</span> <span
  m='2805970'>progressive</span> <span m='2806380'>deepening.</span>
  </p><p><span m='2807390'>So</span> <span m='2807610'>now</span> <span
  m='2808470'>I</span> <span m='2808680'>ask</span> <span m='2808960'>you</span>
  <span m='2809060'>a</span> <span m='2809610'>conceptual</span> <span
  m='2810420'>riddle</span> <span m='2810680'>question.</span> <span
  m='2811360'>It's</span> <span m='2811520'>not</span> <span
  m='2811730'>really</span> <span m='2811900'>that</span> <span m='2812090'>much
  of</span> <span m='2812260'>a</span> <span m='2812440'>riddle.</span> <span
  m='2813180'>But</span> <span m='2813280'>we'll</span> <span
  m='2813360'>see</span> <span m='2813480'>if</span> <span
  m='2813560'>anyone</span> <span m='2813800'>wants to</span> <span
  m='2814000'>answer.</span> <span m='2814310'>Again,</span> <span m='2814780'>I
  won't</span> <span m='2815250'>call on</span> <span m='2815390'>you for
  this.</span> <span m='2817670'>According</span> <span m='2817970'>to</span>
  <span m='2818040'>this</span> <span m='2818210'>test,</span> <span
  m='2819500'>a</span> <span m='2819620'>student</span> <span
  m='2819730'>named</span> <span m='2819920'>Steve</span> <span
  m='2820350'>says,</span> <span m='2820850'>OK,</span> <span
  m='2821140'>I</span> <span m='2821220'>know</span> <span m='2821430'>I</span>
  <span m='2821530'>have</span> <span m='2821730'>to</span> <span
  m='2821850'>pay</span> <span m='2822790'>to</span> <span m='2823030'>do</span>
  <span m='2823350'>the</span> <span m='2823440'>progressive</span> <span
  m='2823850'>deepening</span> <span m='2824210'>here.</span> <span
  m='2825320'>But</span> <span m='2825460'>let's</span> <span
  m='2825650'>ignore</span> <span m='2825970'>that.</span> <span
  m='2826490'>Because</span> <span m='2826690'>it's</span> <span
  m='2827010'>small</span> <span m='2827640'>in</span> <span
  m='2827760'>a</span> <span m='2827820'>large</span> <span
  m='2828480'>tree,</span> <span m='2828860'>right?</span> <span
  m='2829320'>It's</span> <span m='2829500'>not</span> <span
  m='2829680'>going</span> <span m='2829790'>to</span> <span
  m='2829830'>take</span> <span m='2830010'>that</span> <span
  m='2830190'>much.</span> </p><p><span m='2831320'>Let's</span> <span
  m='2831550'>ignore</span> <span m='2831950'>the</span> <span
  m='2832090'>costs</span> <span m='2832670'>of</span> <span
  m='2832850'>the</span> <span m='2832950'>progressive</span> <span
  m='2833330'>deepening</span> <span m='2833720'>and</span> <span
  m='2833850'>only</span> <span m='2834170'>look</span> <span
  m='2834820'>at</span> <span m='2835040'>how</span> <span
  m='2835240'>much</span> <span m='2835350'>we</span> <span
  m='2835470'>do</span> <span m='2835640'>here.</span> <span
  m='2836450'>He</span> <span m='2836620'>says,</span> <span m='2837230'>when
  it</span> <span m='2837420'>comes</span> <span m='2837680'>to</span> <span
  m='2837770'>performing</span> <span m='2838180'>the</span> <span
  m='2838310'>alpha-beta</span> <span m='2838920'>on</span> <span
  m='2839070'>the</span> <span m='2839140'>final</span> <span
  m='2839640'>level,</span> <span m='2840140'>I'm</span> <span
  m='2840480'>guaranteed</span> <span m='2841220'>to</span> <span
  m='2841320'>always</span> <span m='2841670'>prune</span> <span
  m='2842010'>at</span> <span m='2842200'>least</span> <span
  m='2842480'>as</span> <span m='2842580'>well</span> <span
  m='2842960'>or</span> <span m='2843060'>better</span> <span
  m='2843600'>if</span> <span m='2843730'>I</span> <span
  m='2843830'>rearrange</span> <span m='2844300'>the</span> <span
  m='2844390'>nodes</span> <span m='2844730'>based</span> <span
  m='2844990'>on</span> <span m='2845080'>the</span> <span
  m='2845150'>best</span> <span m='2845630'>result</span> <span
  m='2845970'>from</span> <span m='2846090'>progressive</span> <span
  m='2846500'>deepening.</span> <span m='2847830'>Do</span> <span
  m='2848260'>you agree?</span> </p><p><span m='2852252'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2852751'>PROFESSOR: Can</span> <span
  m='2853250'>I repeat</span> <span m='2853749'>it?</span> <span
  m='2854250'>OK,</span> <span m='2854900'>the</span> <span
  m='2854980'>question</span> <span m='2855350'>is,</span> <span
  m='2855670'>ignoring</span> <span m='2856310'>the</span> <span
  m='2856420'>cost</span> <span m='2856850'>that</span> <span
  m='2856910'>we</span> <span m='2857040'>pay</span> <span
  m='2857450'>progressively</span> <span m='2858070'>deepening</span> <span
  m='2858460'>here--</span> <span m='2858890'>just</span> <span
  m='2859170'>forget</span> <span m='2859460'>about</span> <span
  m='2859700'>it--</span> <span m='2860250'>at</span> <span
  m='2860380'>the</span> <span m='2860470'>final</span> <span
  m='2861030'>step,</span> <span m='2861440'>at</span> <span
  m='2861520'>the</span> <span m='2861600'>final</span> <span
  m='2861930'>iteration,</span> <span m='2862295'>the</span> <span
  m='2862900'>question</span> <span m='2863170'>is,</span> <span
  m='2863410'>am</span> <span m='2863630'>I</span> <span
  m='2863730'>guaranteed</span> <span m='2864840'>to</span> <span
  m='2864960'>do</span> <span m='2865090'>at</span> <span
  m='2865170'>least</span> <span m='2865480'>as</span> <span
  m='2865590'>well</span> <span m='2865840'>or</span> <span
  m='2865950'>better</span> <span m='2866225'>in</span> <span
  m='2866500'>my</span> <span m='2866600'>alpha-beta</span> <span
  m='2867090'>pruning</span> <span m='2867530'>when</span> <span
  m='2867710'>I</span> <span m='2867770'>reorder</span> <span
  m='2868270'>based</span> <span m='2868540'>on</span> <span
  m='2868620'>the</span> <span m='2868690'>best</span> <span
  m='2871190'>order</span> <span m='2871390'>for</span> <span
  m='2871540'>progressive</span> <span m='2871920'>deepening?</span> <span
  m='2872220'>Here</span> <span m='2872760'>certainly</span> <span
  m='2873080'>we</span> <span m='2873230'>did.</span> <span
  m='2873935'>But</span> <span m='2874250'>the</span> <span
  m='2874400'>question</span> <span m='2874690'>is, is</span> <span
  m='2875020'>Steve</span> <span m='2875470'>guaranteed?</span> <span
  m='2877020'>Answer?</span> </p><p><span m='2878526'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2879915'>PROFESSOR: What</span> <span
  m='2880378'>did you say?</span> </p><p><span m='2880841'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2882230'>PROFESSOR: That's</span> <span
  m='2882540'>the</span> <span m='2882640'>answer</span> <span
  m='2883060'>and</span> <span m='2883310'>the</span> <span
  m='2883380'>why,</span> <span m='2883870'>which we</span> <span
  m='2883980'>asked</span> <span m='2884220'>to</span> <span
  m='2884290'>explain.</span> <span m='2885150'>The</span> <span
  m='2885210'>answer</span> <span m='2885550'>we</span> <span
  m='2885670'>got</span> <span m='2885870'>is,</span> <span
  m='2886070'>doesn't</span> <span m='2886310'>that</span> <span
  m='2887160'>depend on</span> <span m='2887240'>the</span> <span
  m='2887300'>heuristic?</span> <span m='2888160'>Perfectly</span> <span
  m='2888660'>correct.</span> <span m='2889025'>The</span> <span
  m='2889390'>answer</span> <span m='2889750'>is,</span> <span
  m='2890050'>no,</span> <span m='2890330'>we're</span> <span
  m='2890440'>not</span> <span m='2890630'>guaranteed,</span> <span
  m='2891130'>and</span> <span m='2891250'>it</span> <span
  m='2891340'>depends</span> <span m='2891640'>on</span> <span
  m='2891710'>the</span> <span m='2891770'>heuristic.</span> <span
  m='2892780'>So</span> <span m='2892910'>if</span> <span m='2893020'>we</span>
  <span m='2893130'>were</span> <span m='2893410'>guaranteed,</span> <span
  m='2894640'>that</span> <span m='2894810'>would</span> <span
  m='2894920'>be</span> <span m='2895060'>our</span> <span
  m='2895340'>heuristic</span> <span m='2895620'>was</span> <span
  m='2895790'>godlike,</span> <span m='2896360'>like</span> <span
  m='2896550'>this</span> <span m='2896750'>heuristic.</span> </p><p><span
  m='2897310'>If</span> <span m='2897730'>your</span> <span
  m='2897990'>heuristic</span> <span m='2898110'>already</span> <span
  m='2898380'>tells</span> <span m='2898830'>you</span> <span m='2898960'>the
  correct</span> <span m='2899390'>answer</span> <span m='2899650'>no</span>
  <span m='2899770'>matter</span> <span m='2900020'>what,</span> <span
  m='2900700'>don't</span> <span m='2900950'>do</span> <span
  m='2901110'>game</span> <span m='2901390'>search.</span> <span
  m='2902180'>Just</span> <span m='2902970'>go</span> <span
  m='2903200'>to</span> <span m='2903370'>the</span> <span
  m='2903890'>empty</span> <span m='2904610'>chess</span> <span
  m='2904975'>board,</span> <span m='2905340'>put</span> <span
  m='2905500'>all</span> <span m='2905670'>the</span> <span
  m='2905760'>pieces</span> <span m='2906610'>in</span> <span
  m='2906710'>the</span> <span m='2906790'>front</span> <span
  m='2907080'>rows,</span> <span m='2908170'>and</span> <span
  m='2908330'>run</span> <span m='2908610'>static</span> <span
  m='2908900'>evaluator</span> <span m='2909430'>on</span> <span
  m='2909640'>that.</span> <span m='2909990'>And</span> <span
  m='2910340'>it'll</span> <span m='2910470'>say,</span> <span
  m='2910650'>oh,</span> <span m='2911040'>it</span> <span
  m='2911390'>looks</span> <span m='2911640'>like</span> <span
  m='2912200'>with</span> <span m='2912480'>this</span> <span
  m='2912640'>game</span> <span m='2912850'>not</span> <span
  m='2913110'>started</span> <span m='2913890'>that</span> <span
  m='2914050'>white</span> <span m='2914300'>is</span> <span
  m='2914390'>stupid,</span> <span m='2914880'>so</span> <span m='2915010'>black
  will</span> <span m='2915480'>win in</span> <span m='2915850'>15</span> <span
  m='2916250'>turns.</span> <span m='2916560'>And</span> <span
  m='2916620'>then</span> <span m='2916780'>you're</span> <span
  m='2916920'>done.</span> <span m='2917340'>And you</span> <span
  m='2917440'>don't</span> <span m='2917520'>do</span> <span
  m='2917620'>a</span> <span m='2917680'>search.</span> </p><p><span
  m='2918690'>We</span> <span m='2918870'>know</span> <span m='2919120'>that
  our</span> <span m='2919240'>heuristic</span> <span m='2919790'>is</span>
  <span m='2919920'>flawed</span> <span m='2920410'>in</span> <span
  m='2920530'>some</span> <span m='2920810'>way.</span> <span
  m='2921290'>It</span> <span m='2921320'>could</span> <span
  m='2921560'>be</span> <span m='2921670'>very</span> <span
  m='2922130'>flawed.</span> <span m='2922790'>If</span> <span
  m='2922960'>it's</span> <span m='2923140'>flawed</span> <span
  m='2923580'>so</span> <span m='2923850'>badly</span> <span
  m='2924270'>that</span> <span m='2924410'>it</span> <span
  m='2924530'>tells</span> <span m='2924830'>us a</span> <span
  m='2924870'>very</span> <span m='2925260'>bad</span> <span
  m='2925630'>result</span> <span m='2926060'>of</span> <span
  m='2926160'>what's</span> <span m='2926450'>actually</span> <span
  m='2926820'>going</span> <span m='2926940'>to</span> <span
  m='2926980'>happen,</span> <span m='2927320'>even</span> <span
  m='2927480'>though</span> <span m='2927590'>we</span> <span
  m='2927750'>think</span> <span m='2928020'>the</span> <span
  m='2928090'>minimizer</span> <span m='2928400'>is</span> <span
  m='2928540'>going</span> <span m='2928630'>to</span> <span
  m='2928670'>go</span> <span m='2928750'>to</span> <span m='2928840'>H,</span>
  <span m='2929646'>maybe</span> <span m='2930050'>it's</span> <span
  m='2930190'>wrong</span> <span m='2930590'>by</span> <span
  m='2930720'>a</span> <span m='2930800'>lot</span> <span m='2931030'>and
  it</span> <span m='2931110'>goes</span> <span m='2931300'>to</span> <span
  m='2931390'>G.</span> <span m='2932070'>It</span> <span
  m='2932230'>could</span> <span m='2932570'>take</span> <span
  m='2932800'>us</span> <span m='2933160'>up an</span> <span
  m='2933660'>even</span> <span m='2933890'>worse</span> <span m='2934550'>path
  and</span> <span m='2934630'>make us</span> <span m='2934920'>take</span>
  <span m='2935140'>longer.</span> <span m='2936180'>Question?</span>
  </p><p><span m='2936972'>AUDIENCE: If it's</span> <span m='2937444'>the</span>
  <span m='2937916'>heuristic,</span> <span m='2938388'>how</span> <span
  m='2938506'>could</span> <span m='2938624'>you</span> <span
  m='2938742'>cache</span> <span m='2938860'>the values</span> <span
  m='2939332'>so you didn't</span> <span m='2939804'>have to</span> <span
  m='2940276'>recalculate them</span> <span m='2940748'>later?</span>
  </p><p><span m='2941220'>PROFESSOR: The</span> <span
  m='2941570'>question</span> <span m='2942060'>is, how</span> <span
  m='2942270'>can</span> <span m='2942410'>you</span> <span
  m='2942510'>cache</span> <span m='2942860'>the</span> <span
  m='2942920'>values</span> <span m='2943460'>if</span> <span
  m='2943590'>it's</span> <span m='2943730'>a</span> <span
  m='2943800'>heuristic</span> <span m='2944370'>so</span> <span
  m='2944460'>you</span> <span m='2944590'>don't</span> <span
  m='2944780'>have</span> <span m='2944920'>to</span> <span
  m='2945150'>recalculate</span> <span m='2945510'>them</span> <span
  m='2945680'>later?</span> <span m='2946390'>The</span> <span
  m='2946410'>answer</span> <span m='2946740'>is,</span> <span
  m='2948070'>it</span> <span m='2948220'>wouldn't</span> <span
  m='2948520'>help</span> <span m='2949010'>if</span> <span
  m='2949330'>there</span> <span m='2949460'>weren't</span> <span
  m='2949770'>these</span> <span m='2949940'>weird</span> <span
  m='2950400'>multi-level</span> <span m='2951160'>things</span> <span
  m='2951540'>where</span> <span m='2951780'>we</span> <span
  m='2951940'>stop</span> <span m='2952290'>at</span> <span m='2952420'>E</span>
  <span m='2953170'>for</span> <span m='2953300'>some</span> <span
  m='2953510'>reason,</span> <span m='2953910'>even</span> <span
  m='2954020'>though</span> <span m='2954240'>it</span> <span
  m='2954370'>goes</span> <span m='2954640'>down</span> <span
  m='2954860'>to</span> <span m='2954950'>five</span> <span
  m='2955330'>levels.</span> <span m='2956270'>The</span> <span
  m='2956410'>way</span> <span m='2956760'>you could</span> <span
  m='2957110'>cache</span> <span m='2957500'>it</span> <span
  m='2957853'>is</span> <span m='2958206'>it</span> <span m='2958560'>is
  a</span> <span m='2958640'>heuristic.</span> </p><p><span
  m='2959430'>But</span> <span m='2960230'>it's</span> <span
  m='2960320'>consistent.</span> <span m='2960635'>And</span> <span
  m='2960950'>I</span> <span m='2961020'>don't</span> <span
  m='2961260'>mean</span> <span m='2961450'>consistent</span> <span
  m='2961920'>from</span> <span m='2962120'>search.</span> <span
  m='2962960'>I</span> <span m='2963090'>mean</span> <span
  m='2963270'>it's</span> <span m='2963380'>a</span> <span
  m='2963430'>consistent</span> <span m='2963930'>heuristic</span> <span
  m='2964630'>in--</span> <span m='2964900'>the</span> <span
  m='2965420'>game</span> <span m='2965610'>state</span> <span
  m='2965890'>E</span> <span m='2966360'>is,</span> <span
  m='2966550'>let's</span> <span m='2966760'>say</span> <span
  m='2966850'>that's</span> <span m='2967060'>the</span> <span
  m='2967160'>state</span> <span m='2967540'>where</span> <span
  m='2968610'>I</span> <span m='2969030'>moved</span> <span
  m='2969110'>out</span> <span m='2969190'>my</span> <span
  m='2969300'>knight</span> <span m='2970340'>as</span> <span
  m='2970580'>the</span> <span m='2970860'>maximizer,</span> <span
  m='2970990'>and</span> <span m='2971006'>the</span> <span
  m='2971023'>minimizer</span> <span m='2971280'>said,</span> <span
  m='2971530'>you're</span> <span m='2971670'>doing</span> <span
  m='2971900'>the</span> <span m='2971990'>knight</span> <span
  m='2972330'>opening,</span> <span m='2972720'>really,</span> <span
  m='2973270'>and</span> <span m='2973390'>then</span> <span m='2973570'>did
  a</span> <span m='2973800'>counterattack.</span> </p><p><span
  m='2975820'>No</span> <span m='2975960'>matter</span> <span
  m='2976230'>how</span> <span m='2976480'>we</span> <span
  m='2976600'>get</span> <span m='2976830'>to</span> <span m='2976960'>E,</span>
  <span m='2977320'>or</span> <span m='2977470'>where</span> <span
  m='2977740'>we</span> <span m='2977860'>go</span> <span m='2978100'>to get
  to</span> <span m='2978350'>E,</span> <span m='2979340'>that's</span> <span
  m='2979590'>always</span> <span m='2979990'>going</span> <span
  m='2980100'>to</span> <span m='2980140'>be</span> <span
  m='2980360'>state</span> <span m='2980740'>E.</span> <span
  m='2980980'>It's</span> <span m='2981140'>always</span> <span
  m='2981380'>going</span> <span m='2981470'>to</span> <span
  m='2981510'>have</span> <span m='2981630'>the same</span> <span
  m='2981800'>heuristic</span> <span m='2982340'>value.</span> <span
  m='2983430'>It's</span> <span m='2983630'>not</span> <span
  m='2983810'>like</span> <span m='2983960'>some</span> <span
  m='2984220'>guy</span> <span m='2984700'>who</span> <span
  m='2985170'>goes</span> <span m='2985400'>around</span> <span
  m='2985850'>and</span> <span m='2985950'>just</span> <span
  m='2986150'>randomly</span> <span m='2986530'>pulls</span> <span
  m='2986730'>a</span> <span m='2986830'>number</span> <span
  m='2987120'>out</span> <span m='2987173'>of</span> <span m='2987226'>a</span>
  <span m='2987280'>hat.</span> <span m='2989020'>We're</span> <span
  m='2989170'>going</span> <span m='2989260'>to</span> <span
  m='2989300'>have</span> <span m='2989470'>some</span> <span
  m='2989760'>value</span> <span m='2990380'>that</span> <span
  m='2990470'>gives</span> <span m='2990710'>us</span> <span
  m='2990840'>points</span> <span m='2991200'>based</span> <span
  m='2991560'>on</span> <span m='2991770'>state</span> <span
  m='2992090'>E.</span> <span m='2992300'>And it's</span> <span
  m='2992510'>going</span> <span m='2992650'>to</span> <span
  m='2992690'>be</span> <span m='2992790'>the</span> <span
  m='2992890'>same</span> <span m='2993615'>any</span> <span
  m='2993890'>time</span> <span m='2994040'>we</span> <span
  m='2994110'>go</span> <span m='2994250'>to</span> <span
  m='2994340'>state</span> <span m='2994670'>E.</span> <span
  m='2995642'>Does</span> <span m='2996130'>that</span> <span
  m='2996260'>make</span> <span m='2996400'>sense?</span> <span
  m='2997020'>It</span> <span m='2997170'>is</span> <span m='2997330'>a</span>
  <span m='2997440'>heuristic.</span> <span m='2997980'>But</span> <span
  m='2998280'>it's</span> <span m='2998440'>always</span> <span
  m='2998720'>going</span> <span m='2998840'>to</span> <span
  m='2998890'>give</span> <span m='2999150'>the</span> <span
  m='2999220'>same</span> <span m='2999550'>value</span> <span
  m='2999890'>at</span> <span m='3000030'>E</span> <span m='3000490'>no</span>
  <span m='3000600'>matter</span> <span m='3001250'>how</span> <span
  m='3001430'>you</span> <span m='3001540'>got</span> <span
  m='3001830'>to</span> <span m='3001980'>E.</span> </p><p><span
  m='3004500'>But</span> <span m='3004770'>it</span> <span
  m='3004880'>could</span> <span m='3005010'>be</span> <span
  m='3005140'>really</span> <span m='3005380'>bad.</span> <span
  m='3005880'>In</span> <span m='3005990'>fact,</span> <span
  m='3006160'>you</span> <span m='3006260'>might</span> <span
  m='3006440'>consider a</span> <span m='3006810'>heuristic</span> <span
  m='3007330'>that's</span> <span m='3007520'>the</span> <span
  m='3007660'>opposite</span> <span m='3008140'>of</span> <span
  m='3008270'>correct and</span> <span m='3008730'>always</span> <span
  m='3009000'>tells</span> <span m='3009260'>us</span> <span
  m='3009370'>the</span> <span m='3009450'>worst</span> <span m='3009790'>move
  and</span> <span m='3010110'>claims it's</span> <span m='3010540'>the</span>
  <span m='3011020'>best.</span> <span m='3011380'>That's</span> <span
  m='3011590'>the</span> <span m='3011690'>heuristic</span> <span
  m='3012190'>that</span> <span m='3012240'>the</span> <span
  m='3012310'>minimizer</span> <span m='3012850'>program did</span> <span
  m='3013290'>to</span> <span m='3013460'>our</span> <span
  m='3013600'>computer,</span> <span m='3014040'>perhaps.</span> <span
  m='3014860'>In</span> <span m='3015020'>that</span> <span
  m='3015250'>case,</span> <span m='3015860'>when</span> <span
  m='3016010'>we</span> <span m='3016120'>do</span> <span
  m='3016280'>progressive</span> <span m='3016700'>deepening</span> <span
  m='3017180'>and</span> <span m='3017350'>we</span> <span
  m='3017450'>reorder,</span> <span m='3017930'>we'll</span> <span
  m='3018100'>probably</span> <span m='3018680'>get</span> <span
  m='3018830'>the</span> <span m='3018910'>worst</span> <span
  m='3019350'>pruning</span> <span m='3019690'>possible.</span> <span
  m='3022100'>We</span> <span m='3022210'>might</span> <span
  m='3022420'>not.</span> <span m='3022880'>But</span> <span
  m='3023040'>we</span> <span m='3023160'>may.</span> </p><p><span
  m='3023830'>So</span> <span m='3024130'>in</span> <span
  m='3024210'>that</span> <span m='3024440'>case,</span> <span
  m='3024900'>you're</span> <span m='3025060'>not</span> <span
  m='3025370'>guaranteed.</span> <span m='3026560'>I</span> <span
  m='3026620'>hope that's</span> <span m='3026810'>given</span> <span
  m='3027040'>a</span> <span m='3027520'>few</span> <span
  m='3027750'>clues.</span> <span m='3028450'>In</span> <span
  m='3028620'>tutorial,</span> <span m='3029290'>you</span> <span
  m='3029380'>guys</span> <span m='3029570'>are</span> <span
  m='3029630'>going</span> <span m='3029740'>to</span> <span
  m='3029800'>see</span> <span m='3030090'>some</span> <span
  m='3030800'>more</span> <span m='3031410'>interesting</span> <span
  m='3031860'>problems</span> <span m='3032340'>that</span> <span
  m='3032500'>go</span> <span m='3032670'>into</span> <span m='3032840'>a</span>
  <span m='3032890'>few</span> <span m='3033070'>other</span> <span
  m='3033250'>details.</span> <span m='3033870'>I</span> <span m='3034090'>at
  least</span> <span m='3034360'>plan</span> <span m='3034660'>on</span> <span
  m='3034810'>doing</span> <span m='3035120'>[INAUDIBLE]</span> <span
  m='3035510'>interesting</span> <span m='3035920'>game</span> <span
  m='3036160'>problem</span> <span m='3036560'>from</span> <span
  m='3036740'>last</span> <span m='3037040'>year,</span> <span
  m='3037240'>which</span> <span m='3037500'>asked</span> <span
  m='3037950'>a</span> <span m='3039510'>bunch</span> <span
  m='3039810'>of</span> <span m='3041520'>varied</span> <span
  m='3041870'>things</span> <span m='3042100'>that are</span> <span
  m='3042180'>a</span> <span m='3042250'>little</span> <span
  m='3042420'>bit</span> <span m='3042540'>different</span> <span
  m='3042840'>from</span> <span m='3043000'>these.</span> <span
  m='3043440'>So</span> <span m='3044030'>it</span> <span
  m='3044130'>should</span> <span m='3044820'>be</span> <span
  m='3044920'>a</span> <span m='3044990'>lot</span> <span m='3045180'>of</span>
  <span m='3045290'>fun,</span> <span m='3045660'>hopefully,</span> <span
  m='3046120'>or</span> <span m='3046200'>at</span> <span
  m='3046290'>least</span> <span m='3046530'>useful,</span> <span
  m='3047360'>to</span> <span m='3048390'>do</span> <span m='3048510'>the</span>
  <span m='3048620'>next</span> <span m='3048910'>quiz.</span> <span
  m='3049910'>So</span> <span m='3050760'>have</span> <span m='3050960'>a</span>
  <span m='3051000'>great</span> <span m='3051230'>weekend.</span> <span
  m='3051550'>Don't</span> <span m='3051870'>stress</span> <span
  m='3052170'>out</span> <span m='3052340'>too</span> <span
  m='3052470'>much</span> <span m='3052830'>about</span> <span
  m='3053260'>the</span> <span m='3053400'>quiz.</span> </p>
uid: b605863f59de0428fe1c8571132dfba5
type: courses
layout: video
---
