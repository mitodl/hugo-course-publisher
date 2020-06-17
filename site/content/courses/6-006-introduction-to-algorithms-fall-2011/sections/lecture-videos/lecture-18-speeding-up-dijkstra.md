---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers optimizations that can
  improve real-life, average case performance of shortest path algorithms. These
  include using Dijkstra for a single source and single target, bi-directional
  search, and goal-directed or A* search.</p> <p><strong>Instructor:</strong>
  Srini Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CHvQ3q_gJ7E
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Video-YouTube-Stream
    type: Video
    uid: e8c4cc370e4998d98d4b22b75244e4ad
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CHvQ3q_gJ7E/default.jpg'
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9c8e4a5ae0d80e7a91739d0690e26049
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-18-speeding-up-dijkstra/id585700718?i=126127768
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Video-iTunes U-MP4
    type: Video
    uid: fab99930891740e9bc12bbfc546c9fab
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec18_300k.mp4'
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8c9ce4684089644fe696ce3e6969ff76
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: CHvQ3q_gJ7E
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e5ea0db946c11d2ecbbc627b64b2a033
  - id: CHvQ3q_gJ7E.srt
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-18-speeding-up-dijkstra/CHvQ3q_gJ7E.srt
    title: 3play caption file
    type: null
    uid: e3d02b22bb0cac09d2a1d53962e8a2dc
  - id: CHvQ3q_gJ7E.pdf
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-18-speeding-up-dijkstra/CHvQ3q_gJ7E.pdf
    title: 3play pdf file
    type: null
    uid: 282bbe2fa7af77f4aea803bb47d8dead
  - id: Caption-3Play YouTube id-SRT
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8aa4d1a7a24a7484003978c3e5b39088
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: fb81fef88945bb4849a94dbe8c9f9b29
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8c5de54a67288d40a22be1df8bf23f52
inline_embed_id: '53916625lecture18:speedingupdijkstra15893163'
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-18-speeding-up-dijkstra
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-18-speeding-up-dijkstra
title: 'Lecture 18: Speeding up Dijkstra'
transcript: >-
  <p><span m='60'>The</span> <span m='180'>following</span> <span
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
  m='10970'>donation,</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13330'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15560'>visit</span> <span
  m='15770'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17240'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22560'>PROFESSOR: Thanks</span> <span m='22860'>for</span> <span
  m='22940'>coming.</span> <span m='23450'>I</span> <span m='23550'>know</span>
  <span m='23560'>there's</span> <span m='23710'>a</span> <span
  m='23770'>problem</span> <span m='24110'>set</span> <span
  m='24290'>due.</span> <span m='25490'>There's</span> <span m='25740'>a</span>
  <span m='25810'>quiz</span> <span m='26090'>coming</span> <span
  m='26380'>up</span> <span m='26940'>on</span> <span m='27160'>Thursday.</span>
  <span m='27890'>We</span> <span m='28020'>won't</span> <span
  m='28270'>have</span> <span m='28500'>lecture</span> <span m='28880'>on</span>
  <span m='29040'>Thursday.</span> <span m='30910'>But</span> <span
  m='31530'>we</span> <span m='31630'>will</span> <span m='31730'>have</span>
  <span m='31890'>a</span> <span m='31960'>quiz</span> <span m='33080'>in</span>
  <span m='34410'>the</span> <span m='34910'>evening.</span> <span
  m='35490'>And</span> <span m='35760'>there</span> <span m='35870'>will</span>
  <span m='36010'>be</span> <span m='36410'>a</span> <span
  m='36750'>recitation</span> <span m='37350'>section</span> <span
  m='37820'>tomorrow,</span> <span m='38750'>which</span> <span
  m='39030'>will</span> <span m='39430'>be</span> <span m='39570'>a</span> <span
  m='39670'>quiz</span> <span m='39910'>review.</span> </p><p><span
  m='41900'>So,</span> <span m='42870'>today's</span> <span
  m='43170'>lecture</span> <span m='43590'>is</span> <span m='43930'>the</span>
  <span m='44080'>last</span> <span m='44580'>of</span> <span
  m='44700'>the</span> <span m='44780'>lectures</span> <span m='45610'>in</span>
  <span m='46730'>the</span> <span m='46860'>shortest</span> <span
  m='47220'>path</span> <span m='47470'>module.</span> <span
  m='48720'>And,</span> <span m='49540'>unlike</span> <span
  m='51340'>previous</span> <span m='51810'>lectures,</span> <span
  m='52880'>we're</span> <span m='53020'>going</span> <span m='53150'>to</span>
  <span m='53190'>be</span> <span m='53330'>talking</span> <span
  m='53710'>about</span> <span m='54280'>optimizations</span> <span
  m='55850'>that</span> <span m='56100'>don't</span> <span
  m='56380'>change</span> <span m='57300'>the</span> <span
  m='57420'>worst</span> <span m='57770'>case,</span> <span m='58250'>or</span>
  <span m='58530'>asymptotic,</span> <span m='59180'>complexity.</span> <span
  m='60670'>But</span> <span m='61060'>improve</span> <span
  m='62730'>empirical,</span> <span m='64180'>real</span> <span
  m='64470'>life</span> <span m='64760'>performance.</span> <span
  m='65890'>Or</span> <span m='66380'>potentially,</span> <span
  m='67410'>and</span> <span m='67540'>we</span> <span m='67620'>can't</span>
  <span m='67800'>prove</span> <span m='68060'>this,</span> <span
  m='68800'>but</span> <span m='69100'>performance</span> <span
  m='69580'>in</span> <span m='69680'>the</span> <span m='69760'>average</span>
  <span m='70220'>case.</span> </p><p><span m='71640'>And</span> <span
  m='71950'>so</span> <span m='72150'>we</span> <span m='72290'>look</span>
  <span m='72520'>at</span> <span m='73300'>a</span> <span
  m='73400'>couple</span> <span m='73630'>of</span> <span
  m='73700'>examples.</span> <span m='75550'>The</span> <span
  m='75830'>first</span> <span m='76110'>one</span> <span
  m='76330'>you've</span> <span m='76470'>already</span> <span
  m='76800'>done.</span> <span m='78450'>You</span> <span m='78640'>can</span>
  <span m='78930'>optimize</span> <span m='79680'>Dijkstra</span> <span
  m='80980'>when</span> <span m='81470'>you're</span> <span
  m='81970'>looking</span> <span m='82370'>for</span> <span m='82650'>a</span>
  <span m='83130'>single</span> <span m='83710'>target.</span> </p><p><span
  m='85000'>So,</span> <span m='86650'>implicitly,</span> <span
  m='87530'>we've</span> <span m='87680'>assumed</span> <span
  m='88140'>that</span> <span m='88430'>we're</span> <span
  m='88610'>solving</span> <span m='89660'>the</span> <span
  m='89740'>single</span> <span m='90240'>source,</span> <span
  m='94400'>any</span> <span m='94860'>or</span> <span m='95050'>all</span>
  <span m='95400'>destination</span> <span m='98470'>problem,</span> <span
  m='99900'>when</span> <span m='100080'>we've</span> <span
  m='100210'>looked</span> <span m='100530'>at</span> <span
  m='101370'>the</span> <span m='101740'>original</span> <span
  m='102190'>Dijkstra</span> <span m='102650'>algorithm,</span> <span
  m='103610'>and</span> <span m='103850'>the Bellman-Ford</span> <span
  m='104540'>algorithm.</span> <span m='107020'>Many</span> <span
  m='107380'>a</span> <span m='107440'>time,</span> <span
  m='108630'>you're</span> <span m='108820'>going</span> <span
  m='109090'>to</span> <span m='109260'>have</span> <span m='109530'>a</span>
  <span m='109590'>source,</span> <span m='110230'>s.</span> <span
  m='111100'>And</span> <span m='111550'>you</span> <span m='111720'>want</span>
  <span m='111880'>to</span> <span m='111950'>find</span> <span
  m='112680'>the</span> <span m='112780'>shortest</span> <span
  m='113180'>path</span> <span m='113500'>to</span> <span m='113620'>a</span>
  <span m='113680'>specific</span> <span m='114290'>destination,</span> <span
  m='114970'>t.</span> </p><p><span m='115860'>And</span> <span
  m='116010'>you're</span> <span m='116120'>doing</span> <span
  m='116350'>this</span> <span m='116520'>in</span> <span m='116600'>your</span>
  <span m='116720'>problem</span> <span m='116990'>set.</span> <span
  m='117670'>And</span> <span m='117800'>you</span> <span m='117920'>can</span>
  <span m='118070'>do</span> <span m='118750'>some</span> <span
  m='118970'>optimization.</span> <span m='119800'>It</span> <span
  m='120190'>doesn't</span> <span m='120480'>change</span> <span
  m='120760'>the</span> <span m='120860'>worst</span> <span
  m='121110'>case</span> <span m='121310'>complexity.</span> <span
  m='122610'>But it</span> <span m='122800'>reduces</span> <span
  m='123700'>runtime.</span> <span m='125210'>And</span> <span
  m='125440'>then</span> <span m='125700'>you</span> <span
  m='125810'>have</span> <span m='126090'>a</span> <span
  m='126150'>specific</span> <span m='126550'>target.</span> <span
  m='126990'>Especially</span> <span m='127430'>if</span> <span
  m='127530'>the</span> <span m='127620'>target</span> <span
  m='128190'>is</span> <span m='128389'>close</span> <span m='128710'>to</span>
  <span m='128800'>you.</span> <span m='129240'>And</span> <span
  m='129360'>you</span> <span m='129460'>don't</span> <span
  m='129630'>have</span> <span m='129759'>to</span> <span
  m='129840'>traverse</span> <span m='130720'>the</span> <span
  m='130789'>entire</span> <span m='131160'>graph.</span> </p><p><span
  m='132170'>Obviously,</span> <span m='132590'>the</span> <span
  m='132670'>algorithm</span> <span m='133120'>has</span> <span
  m='133350'>to</span> <span m='133460'>prove</span> <span
  m='134400'>that</span> <span m='134540'>the</span> <span
  m='134630'>particular</span> <span m='135070'>path</span> <span
  m='135470'>that</span> <span m='135590'>was</span> <span
  m='135800'>chosen</span> <span m='136650'>is,</span> <span
  m='136860'>in</span> <span m='136980'>fact,</span> <span m='137290'>the</span>
  <span m='137370'>shortest</span> <span m='137740'>path</span> <span
  m='138000'>from</span> <span m='138160'>s</span> <span m='138340'>to</span>
  <span m='138460'>t.</span> <span m='139210'>But</span> <span
  m='139350'>it's</span> <span m='139450'>a</span> <span
  m='139520'>fairly</span> <span m='139850'>straightforward</span> <span
  m='140360'>modification.</span> <span m='141430'>And</span> <span
  m='141540'>I</span> <span m='141570'>will</span> <span m='141750'>go</span>
  <span m='141880'>over</span> <span m='142120'>it,</span> <span
  m='142480'>but</span> <span m='142610'>you're</span> <span
  m='142830'>actually</span> <span m='143100'>implementing</span> <span
  m='143590'>it</span> <span m='143700'>in</span> <span m='143890'>PS</span>
  <span m='144100'>6.</span> </p><p><span m='146120'>We</span> <span
  m='146270'>talked</span> <span m='146450'>about</span> <span
  m='146630'>bi-directional</span> <span m='147200'>search.</span> <span
  m='147620'>Again,</span> <span m='147910'>something</span> <span
  m='148320'>you're</span> <span m='148470'>doing</span> <span
  m='149160'>from</span> <span m='149340'>a</span> <span
  m='149390'>standpoint</span> <span m='150000'>of</span> <span
  m='150140'>breadth-first</span> <span m='150760'>search.</span> <span
  m='152330'>How</span> <span m='152500'>can</span> <span m='152650'>you</span>
  <span m='153440'>get</span> <span m='153930'>from</span> <span
  m='155390'>one</span> <span m='156860'>source</span> <span
  m='157410'>to</span> <span m='157590'>a</span> <span
  m='157680'>destination,</span> <span m='158860'>by</span> <span
  m='159030'>doing</span> <span m='159320'>bi-directional</span> <span
  m='160260'>Dijkstra?</span> </p><p><span m='161650'>And</span> <span
  m='162280'>you</span> <span m='162430'>can</span> <span
  m='162530'>think</span> <span m='162680'>of</span> <span
  m='162790'>this</span> <span m='163040'>as</span> <span m='163290'>a</span>
  <span m='163370'>frontier</span> <span m='164440'>off</span> <span
  m='165130'>shortest</span> <span m='165550'>paths</span> <span
  m='165900'>is</span> <span m='166030'>being</span> <span
  m='166290'>constructed</span> <span m='167610'>from</span> <span
  m='168000'>the</span> <span m='168100'>source,</span> <span
  m='168680'>s,</span> <span m='169510'>forward.</span> <span
  m='170700'>And</span> <span m='171160'>this</span> <span
  m='171320'>backward</span> <span m='171790'>frontier,</span> <span
  m='173150'>you're</span> <span m='173290'>falling</span> <span
  m='173820'>edges</span> <span m='174210'>backward,</span> <span
  m='175470'>is</span> <span m='175690'>being</span> <span
  m='175890'>constructed</span> <span m='176540'>from</span> <span
  m='176740'>the</span> <span m='176840'>destination.</span> <span
  m='178160'>And,</span> <span m='178440'>effectively,</span> <span
  m='178980'>when</span> <span m='179120'>these</span> <span
  m='179310'>two</span> <span m='179610'>frontiers</span> <span
  m='180190'>meet,</span> <span m='181280'>you're</span> <span
  m='181480'>going</span> <span m='181750'>to</span> <span m='182290'>be</span>
  <span m='182480'>able</span> <span m='182610'>to</span> <span
  m='182680'>discover</span> <span m='183100'>shortest</span> <span
  m='183450'>paths.</span> </p><p><span m='184380'>And,</span> <span
  m='184490'>it</span> <span m='184590'>turns</span> <span
  m='184850'>out,</span> <span m='185010'>it's</span> <span
  m='185150'>not</span> <span m='185360'>as</span> <span
  m='185550'>simple</span> <span m='186120'>as</span> <span
  m='186440'>what</span> <span m='186600'>I</span> <span m='186670'>just</span>
  <span m='186870'>described.</span> <span m='187980'>And</span> <span
  m='188090'>so</span> <span m='188260'>we'll</span> <span
  m='188360'>have</span> <span m='188510'>to</span> <span m='188620'>look</span>
  <span m='188770'>at</span> <span m='188860'>that a</span> <span
  m='189120'>little</span> <span m='189330'>more</span> <span
  m='189500'>carefully.</span> <span m='193350'>So</span> <span
  m='193420'>that</span> <span m='193620'>is</span> <span m='193760'>our</span>
  <span m='193890'>single</span> <span m='194220'>source,</span> <span
  m='194600'>single</span> <span m='194930'>target</span> <span
  m='195410'>problem.</span> <span m='196740'>We</span> <span
  m='196900'>won't</span> <span m='197120'>cover</span> <span
  m='197390'>this</span> <span m='197630'>in</span> <span m='197740'>006.</span>
  </p><p><span m='199280'>But</span> <span m='199440'>there's</span> <span
  m='199600'>also</span> <span m='199880'>this</span> <span
  m='200100'>notion</span> <span m='201450'>of</span> <span
  m='201800'>all</span> <span m='202070'>pairs</span> <span
  m='202490'>shortest</span> <span m='202990'>paths,</span> <span
  m='205810'>which</span> <span m='206050'>is</span> <span
  m='206160'>something</span> <span m='206580'>that</span> <span
  m='206820'>6046</span> <span m='207610'>covers.</span> <span
  m='208520'>And</span> <span m='208730'>that</span> <span m='209190'>is</span>
  <span m='209340'>something</span> <span m='209690'>that</span> <span
  m='209880'>says,</span> <span m='210360'>well,</span> <span
  m='210710'>I</span> <span m='210800'>don't</span> <span m='210960'>know</span>
  <span m='211080'>what</span> <span m='211220'>the</span> <span
  m='211300'>source</span> <span m='211745'>is.</span> <span m='212420'>I</span>
  <span m='212530'>don't</span> <span m='212670'>know</span> <span
  m='212770'>what</span> <span m='212900'>the</span> <span
  m='212980'>destination</span> <span m='213650'>is.</span> <span
  m='214330'>For</span> <span m='214700'>any</span> <span m='214980'>pair</span>
  <span m='215350'>of</span> <span m='215450'>vertices,</span> <span
  m='216490'>find</span> <span m='216755'>me</span> <span m='217020'>the</span>
  <span m='217120'>shortest</span> <span m='217560'>path</span> <span
  m='218350'>from</span> <span m='219450'>s</span> <span m='219700'>to</span>
  <span m='219830'>t,</span> <span m='220220'>given</span> <span
  m='220450'>that</span> <span m='220660'>pair.</span> </p><p><span
  m='222120'>And</span> <span m='222310'>so</span> <span m='222430'>that,</span>
  <span m='222740'>of</span> <span m='222850'>course,</span> <span
  m='223080'>is</span> <span m='223190'>more</span> <span m='223470'>work</span>
  <span m='224300'>than</span> <span m='224500'>even</span> <span
  m='224800'>the</span> <span m='224910'>single</span> <span
  m='225220'>source,</span> <span m='225590'>all</span> <span
  m='225820'>destination</span> <span m='226410'>problem</span> <span
  m='227320'>because</span> <span m='228020'>you're</span> <span
  m='228260'>varying</span> <span m='228650'>the</span> <span
  m='228740'>source.</span> <span m='229850'>All</span> <span
  m='229940'>right?</span> <span m='230480'>So</span> <span
  m='230640'>those</span> <span m='230890'>are</span> <span
  m='231540'>the</span> <span m='231730'>three</span> <span
  m='231950'>different</span> <span m='233810'>shortest</span> <span
  m='234250'>path</span> <span m='234520'>problems.</span> </p><p><span
  m='235080'>And</span> <span m='235190'>we've</span> <span
  m='236170'>looked</span> <span m='236410'>at</span> <span
  m='236500'>that.</span> <span m='237470'>And</span> <span m='237800'>we're
  going to</span> <span m='237910'>look</span> <span m='238150'>at</span> <span
  m='238310'>this</span> <span m='238510'>today.</span> <span m='240360'>And
  we</span> <span m='240600'>looked</span> <span m='240780'>at</span> <span
  m='240870'>it</span> <span m='241720'>in</span> <span m='241860'>the</span>
  <span m='241940'>problem</span> <span m='242180'>set.</span> <span
  m='243210'>But</span> <span m='243580'>we'll</span> <span
  m='243770'>spend</span> <span m='244050'>time,</span> <span
  m='245410'>specifically</span> <span m='246170'>on</span> <span
  m='246320'>this</span> <span m='246520'>one.</span> <span
  m='247410'>And</span> <span m='247850'>try</span> <span m='248050'>and</span>
  <span m='248160'>see</span> <span m='248440'>if</span> <span
  m='248550'>we</span> <span m='248660'>can</span> <span m='248810'>do</span>
  <span m='249080'>some</span> <span m='250720'>coding</span> <span
  m='251090'>optimizations,</span> <span m='251800'>if</span> <span
  m='251900'>you</span> <span m='252020'>will,</span> <span m='252620'>to</span>
  <span m='252880'>improve</span> <span m='253260'>run</span> <span
  m='253535'>time.</span> </p><p><span m='254640'>All</span> <span
  m='254700'>right?</span> <span m='254930'>So,</span> <span m='255090'>I</span>
  <span m='255210'>emphasize</span> <span m='255840'>that</span> <span
  m='256430'>worst</span> <span m='256730'>case</span> <span
  m='256930'>complexity</span> <span m='258250'>is</span> <span
  m='258600'>unchanged</span> <span m='259519'>for</span> <span
  m='259990'>all</span> <span m='260260'>of</span> <span m='260360'>the</span>
  <span m='260459'>Dijkstra</span> <span m='260959'>versions</span> <span
  m='262019'>that</span> <span m='262190'>we'll</span> <span
  m='262330'>be</span> <span m='262440'>looking</span> <span
  m='262720'>at</span> <span m='262860'>today.</span> <span m='265090'>So</span>
  <span m='265280'>I</span> <span m='265330'>want</span> <span
  m='265470'>to</span> <span m='265530'>put</span> <span m='265700'>up</span>
  <span m='265980'>a</span> <span m='268150'>pseudocode</span> <span
  m='268820'>that</span> <span m='270740'>you've</span> <span
  m='270920'>written</span> <span m='271180'>code</span> <span
  m='271520'>for</span> <span m='271780'>at</span> <span m='271870'>this</span>
  <span m='272060'>point,</span> <span m='272910'>which</span> <span
  m='272960'>is</span> <span m='273060'>the</span> <span
  m='273150'>Dijkstra</span> <span m='273590'>pseudocode.</span> <span
  m='274930'>Because</span> <span m='275210'>we'll</span> <span
  m='275320'>take</span> <span m='275480'>a</span> <span m='275530'>look</span>
  <span m='275710'>at</span> <span m='275810'>it,</span> <span
  m='275990'>and</span> <span m='277810'>modify</span> <span
  m='278330'>it,</span> <span m='278470'>and</span> <span m='279160'>execute
  it.</span> </p><p><span m='281960'>So</span> <span m='282260'>you</span> <span
  m='282400'>have</span> <span m='282770'>your</span> <span
  m='284800'>set</span> <span m='285060'>of</span> <span
  m='285200'>vertices</span> <span m='286360'>that</span> <span
  m='286540'>you</span> <span m='286650'>don't</span> <span
  m='286840'>know</span> <span m='287060'>the</span> <span
  m='287180'>shortest</span> <span m='287370'>paths</span> <span
  m='287920'>to.</span> <span m='288540'>So</span> <span m='288720'>we</span>
  <span m='289050'>do</span> <span m='289190'>have</span> <span
  m='289470'>initialize</span> <span m='289820'>is</span> <span
  m='290170'>going</span> <span m='290290'>to</span> <span m='290360'>set</span>
  <span m='291210'>d</span> <span m='291490'>of</span> <span m='291680'>s</span>
  <span m='292680'>to</span> <span m='292840'>be</span> <span
  m='292980'>0.</span> <span m='294090'>And</span> <span m='294340'>b</span>
  <span m='294560'>of</span> <span m='294690'>u,</span> <span
  m='295650'>not</span> <span m='295880'>equal</span> <span m='296170'>to</span>
  <span m='296290'>s,</span> <span m='296840'>to</span> <span
  m='296920'>be</span> <span m='297100'>infinity.</span> </p><p><span
  m='299120'>And</span> <span m='300140'>we</span> <span m='300240'>have</span>
  <span m='300490'>this</span> <span m='300710'>set,</span> <span
  m='302140'>Q,</span> <span m='303710'>that</span> <span
  m='303880'>we're</span> <span m='303980'>going</span> <span
  m='304110'>to</span> <span m='304170'>process</span> <span
  m='305680'>and</span> <span m='306490'>continually</span> <span
  m='307150'>extract</span> <span m='308900'>the</span> <span
  m='308980'>minimum</span> <span m='309470'>priority</span> <span
  m='311500'>from</span> <span m='311940'>Q.</span> <span m='313970'>And,</span>
  <span m='315190'>once</span> <span m='315510'>we</span> <span
  m='316000'>do</span> <span m='316160'>that,</span> <span m='317110'>we</span>
  <span m='317160'>actually</span> <span m='317440'>know</span> <span
  m='317680'>the</span> <span m='317780'>shortest</span> <span
  m='318170'>path</span> <span m='319030'>to</span> <span m='319130'>you</span>
  <span m='319400'>already.</span> <span m='321920'>That's</span> <span
  m='322160'>what</span> <span m='322910'>the</span> <span
  m='323040'>Dijkstra</span> <span m='323450'>invariant</span> <span
  m='324050'>is.</span> </p><p><span m='326490'>And</span> <span
  m='328520'>the</span> <span m='328650'>process</span> <span
  m='329080'>of</span> <span m='329190'>extracting</span> <span
  m='331160'>u</span> <span m='331730'>implies</span> <span
  m='332250'>that</span> <span m='332370'>we</span> <span m='332460'>have</span>
  <span m='332610'>to</span> <span m='332690'>do</span> <span
  m='332840'>a</span> <span m='333180'>relaxation</span> <span
  m='333900'>step</span> <span m='335540'>that</span> <span
  m='335920'>updates</span> <span m='336430'>the</span> <span
  m='336530'>priorities.</span> <span m='338090'>And</span> <span
  m='338270'>also</span> <span m='339490'>modifies</span> <span
  m='340120'>the</span> <span m='340230'>parent</span> <span
  m='340650'>pointers.</span> <span m='342160'>So</span> <span
  m='342340'>there's</span> <span m='342490'>also</span> <span
  m='342710'>the</span> <span m='342830'>pi</span> <span m='344120'>of</span>
  <span m='346510'>v</span> <span m='347560'>that is</span> <span
  m='347810'>set</span> <span m='348020'>to</span> <span m='348090'>u. </span>
  <span m='352660'>As</span> <span m='352850'>well</span> <span
  m='353050'>as</span> <span m='353350'>d of</span> <span m='353780'>v</span>
  <span m='355380'>getting</span> <span m='355920'>decremented.</span> <span
  m='358200'>OK?</span> <span m='359170'>So</span> <span
  m='359280'>that's</span> <span m='359500'>the</span> <span
  m='359610'>Dijkstra</span> <span m='359970'>algorithm.</span> </p><p><span
  m='361580'>And</span> <span m='362770'>one</span> <span m='362990'>of</span>
  <span m='363060'>the</span> <span m='363150'>things</span> <span
  m='363370'>that</span> <span m='363460'>we</span> <span m='363580'>can</span>
  <span m='363720'>do,</span> <span m='363890'>the</span> <span
  m='364230'>straightforward</span> <span m='364950'>thing,</span> <span
  m='365190'>which</span> <span m='365340'>is</span> <span m='365420'>one</span>
  <span m='365630'>line</span> <span m='365900'>of</span> <span
  m='366000'>code</span> <span m='366280'>literally,</span> <span
  m='367270'>is</span> <span m='367430'>to</span> <span m='367540'>say</span>
  <span m='367810'>that,</span> <span m='368010'>if</span> <span
  m='368120'>you</span> <span m='368250'>know</span> <span
  m='369450'>what</span> <span m='370450'>the</span> <span
  m='370710'>single</span> <span m='371160'>target</span> <span
  m='371690'>is,</span> <span m='372560'>then</span> <span m='372820'>you</span>
  <span m='372960'>simply</span> <span m='373370'>stop</span> <span
  m='376540'>if</span> <span m='376780'>u</span> <span m='377140'>equals</span>
  <span m='377630'>t.</span> <span m='379190'>So</span> <span
  m='379620'>no</span> <span m='379830'>need</span> <span m='380130'>to</span>
  <span m='380430'>stop</span> <span m='381560'>when</span> <span
  m='383900'>Q</span> <span m='384970'>becomes</span> <span
  m='385400'>null.</span> <span m='385900'>Or,</span> <span
  m='386170'>you</span> <span m='386270'>don't</span> <span
  m='386600'>get</span> <span m='386820'>to</span> <span m='386900'>the</span>
  <span m='387040'>point</span> <span m='387380'>where</span> <span
  m='387600'>Q</span> <span m='387850'>is</span> <span m='388010'>null.</span>
  </p><p><span m='388660'>You</span> <span m='388770'>stop</span> <span
  m='389170'>when</span> <span m='389710'>you've</span> <span
  m='389840'>lifted</span> <span m='390310'>off</span> <span
  m='392700'>the</span> <span m='392840'>y</span> <span m='393060'>vertex</span>
  <span m='393950'>from</span> <span m='394930'>Q.</span> <span
  m='395500'>All</span> <span m='395980'>right?</span> <span
  m='396220'>And</span> <span m='396380'>so,</span> <span
  m='396620'>obviously,</span> <span m='396950'>this will</span> <span
  m='397290'>run</span> <span m='397730'>faster,</span> <span
  m='398690'>assuming</span> <span m='399060'>this</span> <span
  m='399240'>check</span> <span m='399510'>is</span> <span m='401000'>a</span>
  <span m='401570'>0</span> <span m='401910'>time</span> <span
  m='402240'>check.</span> <span m='403870'>And</span> <span
  m='404490'>that's</span> <span m='404680'>really</span> <span
  m='404830'>one</span> <span m='405030'>instruction,</span> <span
  m='405930'>so</span> <span m='406930'>you</span> <span m='407080'>can</span>
  <span m='407870'>think</span> <span m='408020'>of</span> <span
  m='408140'>it</span> <span m='408240'>that</span> <span m='408400'>way.</span>
  <span m='409140'>And</span> <span m='409430'>you</span> <span
  m='409620'>will,</span> <span m='410370'>basically,</span> <span
  m='410900'>run</span> <span m='411190'>faster</span> <span
  m='412550'>for</span> <span m='412740'>sure,</span> <span
  m='415220'>when</span> <span m='415430'>you</span> <span
  m='415580'>have</span> <span m='415780'>a</span> <span
  m='415840'>specific</span> <span m='416270'>target.</span> </p><p><span
  m='417070'>It</span> <span m='417240'>may</span> <span m='417400'>be</span>
  <span m='417560'>the</span> <span m='417660'>case</span> <span
  m='418050'>that</span> <span m='418410'>your</span> <span
  m='418570'>target</span> <span m='419040'>is</span> <span
  m='419210'>the</span> <span m='419340'>last</span> <span
  m='419890'>vertex</span> <span m='420100'>that</span> <span
  m='420500'>you</span> <span m='420600'>find.</span> <span
  m='421090'>And</span> <span m='421490'>in</span> <span m='421690'>that</span>
  <span m='421880'>case,</span> <span m='422620'>you</span> <span
  m='422770'>run</span> <span m='423510'>no</span> <span
  m='423700'>slower.</span> <span m='425180'>All</span> <span
  m='425250'>right?</span> <span m='426130'>So</span> <span
  m='426730'>that's</span> <span m='426910'>something</span> <span
  m='427160'>that</span> <span m='427270'>you</span> <span
  m='427370'>looked</span> <span m='427610'>at.</span> <span
  m='429720'>And</span> <span m='432870'>that</span> <span
  m='433250'>takes</span> <span m='433510'>care</span> <span
  m='433760'>of</span> <span m='433910'>the</span> <span m='434280'>first</span>
  <span m='434720'>optimization</span> <span m='436020'>corresponding</span>
  <span m='436430'>to</span> <span m='436500'>single</span> <span
  m='436810'>source,</span> <span m='437140'>single</span> <span
  m='437430'>target.</span> </p><p><span m='438570'>Let's</span> <span
  m='438780'>talk</span> <span m='438960'>about</span> <span
  m='439150'>something</span> <span m='439460'>that's</span> <span
  m='439680'>a</span> <span m='439910'>little</span> <span
  m='440160'>more</span> <span m='440860'>interesting,</span> <span
  m='442710'>and</span> <span m='443990'>non-obvious,</span> <span
  m='445620'>which</span> <span m='445840'>is</span> <span m='445940'>the</span>
  <span m='446010'>notion</span> <span m='446360'>of</span> <span
  m='446480'>bi-directional</span> <span m='447180'>search.</span> <span
  m='450260'>And,</span> <span m='450670'>in</span> <span
  m='450830'>bi-directional</span> <span m='451450'>search,</span> <span
  m='455190'>we</span> <span m='455350'>have</span> <span m='455580'>s.</span>
  <span m='456800'>And</span> <span m='457000'>we</span> <span
  m='457090'>have</span> <span m='457320'>t.</span> <span m='459930'>And</span>
  <span m='460110'>we</span> <span m='460190'>have</span> <span
  m='460330'>a</span> <span m='460390'>bunch</span> <span m='460650'>of</span>
  <span m='460720'>nodes</span> <span m='461000'>in</span> <span
  m='461120'>between,</span> <span m='468170'>corresponding</span> <span
  m='468680'>to</span> <span m='469300'>this</span> <span
  m='474190'>graph</span> <span m='474550'>here.</span> </p><p><span
  m='476670'>And</span> <span m='477440'>what</span> <span m='477640'>you</span>
  <span m='477730'>do</span> <span m='478080'>is,</span> <span
  m='479090'>you</span> <span m='479820'>alternate</span> <span
  m='480450'>search</span> <span m='481540'>in</span> <span
  m='481670'>the</span> <span m='481770'>forward</span> <span
  m='482220'>direction</span> <span m='483420'>and</span> <span
  m='485150'>backward</span> <span m='485670'>direction.</span> <span
  m='486940'>So,</span> <span m='487610'>you're</span> <span
  m='487750'>going</span> <span m='487900'>to</span> <span m='487970'>do</span>
  <span m='488250'>one</span> <span m='488540'>step</span> <span
  m='491110'>of</span> <span m='491880'>Dijkstra,</span> <span
  m='492550'>standard</span> <span m='493070'>Dijkstra</span> <span
  m='495550'>that</span> <span m='495730'>starts</span> <span
  m='496190'>with</span> <span m='496370'>s.</span> <span m='499060'>And</span>
  <span m='499300'>goes</span> <span m='499540'>forward.</span> </p><p><span
  m='501360'>And</span> <span m='501590'>so,</span> <span m='501810'>you</span>
  <span m='501940'>could</span> <span m='502040'>imagine</span> <span
  m='502420'>that</span> <span m='502580'>you're</span> <span
  m='503220'>forward</span> <span m='503590'>search</span> <span
  m='504260'>in</span> <span m='504340'>the</span> <span m='504430'>first</span>
  <span m='504730'>step,</span> <span m='507910'>you're</span> <span
  m='508160'>going</span> <span m='508270'>to</span> <span
  m='508340'>pick</span> <span m='508600'>the</span> <span
  m='508670'>vertex,</span> <span m='509260'>s,</span> <span
  m='510410'>off</span> <span m='510690'>of</span> <span m='511590'>Q.</span>
  <span m='512380'>And</span> <span m='512530'>you're</span> <span
  m='512620'>going</span> <span m='512740'>to</span> <span
  m='512799'>process</span> <span m='514000'>the</span> <span
  m='514140'>edges</span> <span m='514600'>that</span> <span
  m='514870'>come</span> <span m='515159'>out</span> <span m='515360'>of</span>
  <span m='515510'>s.</span> <span m='516470'>And</span> <span
  m='516710'>that</span> <span m='516860'>would</span> <span
  m='517140'>correspond</span> <span m='517720'>with</span> <span
  m='517770'>these</span> <span m='518090'>two</span> <span
  m='518250'>edges.</span> <span m='519010'>And</span> <span
  m='519140'>so</span> <span m='519220'>that's</span> <span
  m='519580'>one</span> <span m='519880'>step of</span> <span
  m='520370'>forward</span> <span m='520789'>search,</span> <span
  m='521280'>going</span> <span m='521559'>forward.</span> </p><p><span
  m='523480'>And</span> <span m='523700'>then</span> <span m='524700'>you</span>
  <span m='524800'>stop</span> <span m='525210'>with</span> <span
  m='525480'>the</span> <span m='525610'>forward</span> <span
  m='526010'>search,</span> <span m='526860'>and</span> <span
  m='527000'>you</span> <span m='527100'>do</span> <span m='527690'>a</span>
  <span m='527780'>step</span> <span m='528130'>of</span> <span
  m='528270'>backward</span> <span m='528830'>search.</span> <span
  m='530170'>And</span> <span m='530340'>so,</span> <span m='530590'>you</span>
  <span m='530720'>go</span> <span m='531270'>backward</span> <span
  m='531780'>search,</span> <span m='532540'>and</span> <span
  m='532780'>I'll</span> <span m='532870'>explain</span> <span
  m='533230'>exactly</span> <span m='533570'>what</span> <span
  m='533720'>this</span> <span m='533870'>means,</span> <span
  m='536100'>backward</span> <span m='536520'>search</span> <span
  m='537800'>from</span> <span m='538060'>t.</span> <span m='539120'>And</span>
  <span m='539230'>the</span> <span m='539290'>important</span> <span
  m='539660'>thing</span> <span m='539850'>is</span> <span
  m='540010'>that</span> <span m='540320'>you're</span> <span
  m='540500'>following</span> <span m='543180'>edges</span> <span
  m='544880'>backward.</span> </p><p><span m='545380'>So</span> <span
  m='545470'>that</span> <span m='545620'>means</span> <span
  m='545860'>your</span> <span m='545940'>data</span> <span
  m='546220'>structure</span> <span m='548960'>has</span> <span
  m='549200'>to,</span> <span m='549450'>essentially,</span> <span
  m='549900'>have</span> <span m='550180'>these</span> <span
  m='550360'>edges</span> <span m='550740'>that</span> <span
  m='550890'>can</span> <span m='551050'>be</span> <span
  m='551570'>traversed</span> <span m='552070'>in</span> <span
  m='552650'>either</span> <span m='552910'>the</span> <span
  m='553010'>forward</span> <span m='553340'>direction,</span> <span
  m='553860'>or</span> <span m='554080'>the</span> <span
  m='554230'>reverse</span> <span m='554560'>direction.</span> <span
  m='555540'>So</span> <span m='555640'>that's</span> <span
  m='555700'>something</span> <span m='555970'>to</span> <span
  m='556040'>keep</span> <span m='556200'>in</span> <span
  m='556280'>mind.</span> <span m='557100'>But</span> <span
  m='557240'>what</span> <span m='557360'>will</span> <span
  m='557480'>happen</span> <span m='557760'>here</span> <span
  m='557940'>is</span> <span m='558020'>simply</span> <span
  m='558580'>that</span> <span m='559170'>your</span> <span
  m='559670'>first</span> <span m='561330'>frontier</span> <span
  m='562600'>of</span> <span m='563430'>backward</span> <span
  m='563890'>search,</span> <span m='564750'>t</span> <span
  m='565300'>now,</span> <span m='566060'>in</span> <span m='566320'>the</span>
  <span m='566450'>backward</span> <span m='566960'>search,</span> <span
  m='567890'>is</span> <span m='568650'>the</span> <span
  m='568780'>minimum</span> <span m='569240'>priority.</span> </p><p><span
  m='570360'>So ,</span> <span m='570390'>we're</span> <span
  m='570470'>going</span> <span m='570570'>to</span> <span
  m='570610'>have</span> <span m='570770'>to</span> <span m='570830'>have</span>
  <span m='571050'>two</span> <span m='571240'>priorities</span> <span
  m='572470'>corresponding</span> <span m='573060'>to</span> <span
  m='573450'>s</span> <span m='573800'>in</span> <span m='574570'>the</span>
  <span m='574790'>fourth</span> <span m='575110'>search,</span> <span
  m='575830'>where</span> <span m='576170'>that's</span> <span
  m='576420'>a</span> <span m='576470'>straightforward</span> <span
  m='576990'>one.</span> <span m='577590'>v</span> <span m='577740'>of</span>
  <span m='577860'>s</span> <span m='578090'>equals</span> <span
  m='578440'>0.</span> <span m='579630'>And</span> <span m='579800'>we
  should</span> <span m='580000'>think</span> <span m='580130'>of</span> <span
  m='580230'>it</span> <span m='580320'>as</span> <span m='581450'>d of</span>
  <span m='582815'>f</span> <span m='584220'>s</span> <span
  m='584670'>equals</span> <span m='585050'>0.</span> <span
  m='586210'>And</span> <span m='586760'>we</span> <span m='586890'>have</span>
  <span m='587260'>d of</span> <span m='588120'>b</span> <span
  m='589330'>t</span> <span m='590900'>equals</span> <span m='591300'>0.</span>
  <span m='592310'>And</span> <span m='592510'>these</span> <span
  m='592680'>subscripts</span> <span m='593790'>correspond</span> <span
  m='594260'>to</span> <span m='594320'>these</span> <span m='594560'>two</span>
  <span m='594750'>different</span> <span m='595100'>priorities.</span> <span
  m='596370'>And</span> <span m='596890'>it's</span> <span
  m='597260'>exactly</span> <span m='597920'>complimentary.</span> </p><p><span
  m='600240'>Only</span> <span m='600550'>the</span> <span
  m='600690'>source,</span> <span m='601220'>s,</span> <span
  m='601620'>in</span> <span m='601740'>the</span> <span
  m='601830'>forward</span> <span m='602220'>search,</span> <span
  m='602610'>has</span> <span m='602840'>0</span> <span
  m='603140'>priority</span> <span m='603650'>in</span> <span
  m='603730'>the</span> <span m='603810'>beginning.</span> <span
  m='604890'>Everything</span> <span m='605230'>else</span> <span
  m='605610'>has</span> <span m='605980'>infinite</span> <span
  m='606450'>priority.</span> <span m='608190'>Only</span> <span
  m='608440'>the</span> <span m='610230'>target,</span> <span
  m='610950'>or</span> <span m='611070'>destination,</span> <span
  m='612250'>has</span> <span m='613230'>0</span> <span
  m='613570'>priority</span> <span m='614100'>in</span> <span
  m='614180'>the</span> <span m='614270'>backward</span> <span
  m='614750'>search.</span> <span m='615530'>Everything</span> <span
  m='615900'>else</span> <span m='616120'>is</span> <span
  m='616250'>infinity.</span> </p><p><span m='617710'>And</span> <span
  m='619210'>you</span> <span m='619350'>go</span> <span
  m='620320'>forward,</span> <span m='620760'>backward,</span> <span
  m='621210'>forward,</span> <span m='621580'>backward.</span> <span
  m='622480'>And</span> <span m='622660'>so</span> <span m='622830'>on.</span>
  <span m='623540'>And</span> <span m='623690'>the</span> <span
  m='623770'>question</span> <span m='624090'>is,</span> <span m='624410'>when
  do</span> <span m='624530'>you</span> <span m='624680'>stop?</span> <span
  m='625600'>And</span> <span m='625720'>we</span> <span m='625780'>have</span>
  <span m='625900'>to</span> <span m='625970'>talk</span> <span
  m='626160'>about</span> <span m='626420'>that.</span> <span
  m='627180'>And,</span> <span m='627500'>it</span> <span
  m='627620'>turns</span> <span m='627860'>out,</span> <span
  m='628010'>it's</span> <span m='628180'>not</span> <span m='628510'>a</span>
  <span m='629170'>perfectly</span> <span m='629600'>straightforward</span>
  <span m='630230'>stopping</span> <span m='630600'>condition.</span> <span
  m='631480'>But</span> <span m='631630'>it's</span> <span
  m='631720'>something</span> <span m='632020'>that</span> <span
  m='632620'>will</span> <span m='632870'>make</span> <span
  m='633090'>sense,</span> <span m='633450'>hopefully,</span> <span
  m='634270'>when</span> <span m='634550'>I</span> <span m='634610'>get</span>
  <span m='634780'>around to</span> <span m='635080'>describing</span> <span
  m='635550'>it.</span> </p><p><span m='636980'>But,</span> <span
  m='638090'>having</span> <span m='638330'>said</span> <span
  m='638520'>all</span> <span m='638680'>that,</span> <span
  m='640280'>let's</span> <span m='640520'>just</span> <span
  m='641770'>put</span> <span m='642000'>down</span> <span m='643280'>all</span>
  <span m='643540'>of</span> <span m='643630'>the</span> <span
  m='643730'>different</span> <span m='644890'>data</span> <span
  m='645260'>structures</span> <span m='645770'>that</span> <span
  m='645900'>we</span> <span m='646430'>have</span> <span m='646630'>to</span>
  <span m='646730'>have.</span> <span m='647490'>And</span> <span
  m='647620'>it's</span> <span m='647730'>kind</span> <span m='647840'>of</span>
  <span m='647900'>a</span> <span m='647960'>doubling</span> <span
  m='648460'>of</span> <span m='648570'>the</span> <span m='648660'>data</span>
  <span m='648880'>structure,</span> <span m='649900'>right,</span> <span
  m='650210'>because</span> <span m='650550'>just</span> <span
  m='650760'>like</span> <span m='650950'>I</span> <span
  m='651030'>double</span> <span m='651440'>the</span> <span
  m='651540'>priorities,</span> <span m='652530'>I</span> <span
  m='652630'>also</span> <span m='652880'>need</span> <span
  m='653170'>two</span> <span m='653310'>different</span> <span
  m='653790'>min</span> <span m='654110'>priority</span> <span
  m='654650'>queues,</span> <span m='655880'>corresponding</span> <span
  m='656430'>to</span> <span m='656550'>Q</span> <span m='656740'>f and</span>
  <span m='657210'>Q b.</span> <span m='658750'>And,</span> <span
  m='658920'>as</span> <span m='659100'>I</span> <span m='659170'>said</span>
  <span m='659440'>before,</span> <span m='660490'>these</span> <span
  m='660650'>edges</span> <span m='661010'>have</span> <span
  m='661230'>to</span> <span m='661320'>be</span> <span
  m='661460'>traversable</span> <span m='662680'>in</span> <span
  m='662750'>the</span> <span m='662830'>backward</span> <span
  m='663320'>direction.</span> </p><p><span m='664090'>So</span> <span
  m='664220'>this</span> <span m='664440'>edge,</span> <span
  m='665300'>in</span> <span m='665680'>the</span> <span
  m='665790'>graph,</span> <span m='666280'>goes</span> <span
  m='666530'>this</span> <span m='666720'>way.</span> <span
  m='667250'>But</span> <span m='667440'>you're</span> <span
  m='667590'>going</span> <span m='668190'>in</span> <span m='668310'>the</span>
  <span m='668390'>backward</span> <span m='668780'>direction,</span> <span
  m='669590'>as</span> <span m='669820'>you</span> <span m='669960'>are</span>
  <span m='670070'>growing</span> <span m='670490'>your</span> <span
  m='670670'>backward</span> <span m='671150'>frontier.</span> <span
  m='672360'>OK?</span> <span m='673790'>That's</span> <span
  m='673970'>important</span> <span m='674300'>to</span> <span
  m='674340'>understand.</span> <span m='675760'>So</span> <span
  m='676350'>let</span> <span m='676480'>me</span> <span m='676590'>put</span>
  <span m='676750'>down</span> <span m='677700'>all</span> <span
  m='677960'>of</span> <span m='678090'>the</span> <span
  m='679790'>specifics</span> <span m='680660'>associated</span> <span
  m='681270'>with</span> <span m='682660'>these</span> <span
  m='682880'>data</span> <span m='683100'>structures.</span> </p><p><span
  m='683640'>df u</span> <span m='685550'>correspond</span> <span
  m='686030'>to</span> <span m='686100'>the</span> <span
  m='686220'>distances</span> <span m='688710'>for</span> <span
  m='688990'>the</span> <span m='689100'>forward</span> <span
  m='689520'>search.</span> <span m='693770'>And</span> <span
  m='694720'>db</span> <span m='695260'>u</span> <span
  m='698270'>correspond</span> <span m='698610'>to</span> <span
  m='698690'>the</span> <span m='698780'>distances</span> <span
  m='699390'>for</span> <span m='699510'>the</span> <span
  m='699580'>backward</span> <span m='700130'>search.</span> <span
  m='703528'>OK?</span> <span m='704840'>And,</span> <span m='705300'>of</span>
  <span m='705410'>course,</span> <span m='706650'>we're</span> <span
  m='706760'>going</span> <span m='706930'>to</span> <span
  m='706980'>have</span> <span m='707190'>to</span> <span m='707290'>have</span>
  <span m='711470'>priority</span> <span m='712090'>queues,</span> <span
  m='717120'>plural.</span> </p><p><span m='718500'>Qf</span> <span
  m='720030'>corresponding</span> <span m='720590'>to</span> <span
  m='720650'>the</span> <span m='720760'>forward</span> <span
  m='721160'>search.</span> <span m='723650'>And</span> <span
  m='723900'>Qb</span> <span m='725400'>corresponding</span> <span
  m='725910'>to</span> <span m='725970'>the</span> <span
  m='726060'>backward</span> <span m='726510'>search.</span> <span
  m='728230'>And</span> <span m='728430'>in</span> <span
  m='728620'>initialize,</span> <span m='729450'>as</span> <span
  m='729600'>I</span> <span m='729660'>said</span> <span
  m='729890'>before,</span> <span m='730960'>we're</span> <span
  m='730980'>going</span> <span m='731110'>to</span> <span
  m='731160'>initialize</span> <span m='731840'>df  s</span> <span
  m='732470'>to</span> <span m='732580'>be</span> <span m='732710'>0</span>
  <span m='733140'>and</span> <span m='733300'>db t</span> <span
  m='733940'>equals</span> <span m='734250'>0.</span> <span
  m='734940'>And</span> <span m='735130'>then</span> <span
  m='735440'>everything,</span> <span m='736880'>the</span> <span
  m='737010'>df's</span> <span m='737370'>and</span> <span m='737480'>the</span>
  <span m='737550'>db's,</span> <span m='737890'>are</span> <span
  m='738000'>going</span> <span m='738090'>to</span> <span m='738150'>be</span>
  <span m='738270'>infinity.</span> </p><p><span m='739420'>All</span> <span
  m='739520'>right?</span> <span m='741370'>OK.</span> <span
  m='741630'>Great.</span> <span m='742480'>So</span> <span
  m='743130'>that's</span> <span m='743290'>what</span> <span
  m='743410'>we</span> <span m='743510'>have</span> <span
  m='743800'>here.</span> <span m='744760'>Now,</span> <span
  m='746420'>first</span> <span m='746680'>question.</span> <span
  m='760230'>Roughly</span> <span m='760630'>speaking,</span> <span
  m='762310'>as</span> <span m='762490'>I</span> <span m='762550'>said,</span>
  <span m='763000'>you</span> <span m='763160'>can</span> <span
  m='763430'>imagine</span> <span m='764360'>intuitively</span> <span
  m='765040'>that</span> <span m='766090'>you're</span> <span
  m='766250'>going</span> <span m='766380'>to</span> <span
  m='766480'>terminate</span> <span m='767140'>the</span> <span
  m='767240'>search</span> <span m='768350'>when</span> <span
  m='768720'>these</span> <span m='768940'>frontiers</span> <span
  m='769480'>meet,</span> <span m='770610'>OK?</span> <span
  m='771260'>Clearly,</span> <span m='771520'>you can't</span> <span
  m='771870'>terminate</span> <span m='772125'>it</span> <span
  m='772380'>when</span> <span m='772530'>these</span> <span
  m='773450'>frontiers</span> <span m='773900'>look</span> <span
  m='774070'>like</span> <span m='774270'>this,</span> <span
  m='775360'>OK.</span> <span m='776460'>So</span> <span
  m='777930'>that's</span> <span m='779360'>the</span> <span
  m='779580'>intuition.</span> </p><p><span m='780780'>And</span> <span
  m='781030'>you</span> <span m='781470'>see</span> <span m='781750'>that</span>
  <span m='782010'>for the</span> <span m='782240'>[INAUDIBLE]</span> <span
  m='782460'>first,</span> <span m='782760'>as</span> <span
  m='782900'>well,</span> <span m='784000'>in</span> <span
  m='784130'>your</span> <span m='784250'>problem</span> <span
  m='784490'>set.</span> <span m='785050'>But</span> <span m='785220'>in</span>
  <span m='785340'>the</span> <span m='785560'>context</span> <span
  m='786080'>of</span> <span m='786220'>Dijkstra,</span> <span
  m='786810'>single</span> <span m='787240'>source,</span> <span
  m='787920'>single</span> <span m='788080'>target,</span> <span
  m='789370'>can</span> <span m='789500'>someone</span> <span
  m='789790'>tell</span> <span m='789970'>me</span> <span m='790770'>what</span>
  <span m='791170'>the</span> <span m='791260'>termination</span> <span
  m='791890'>condition</span> <span m='792450'>should</span> <span
  m='792810'>be</span> <span m='793830'>by</span> <span
  m='794010'>looking</span> <span m='794360'>at</span> <span
  m='795040'>the</span> <span m='795130'>code?</span> <span m='795930'>I</span>
  <span m='796180'>want</span> <span m='796440'>a</span> <span
  m='796490'>more</span> <span m='796760'>specific,</span> <span
  m='798120'>or</span> <span m='798360'>a</span> <span m='798510'>more</span>
  <span m='798780'>concrete,</span> <span m='799590'>termination</span> <span
  m='800120'>condition</span> <span m='800590'>that</span> <span
  m='800730'>I</span> <span m='800780'>can</span> <span
  m='800900'>actually</span> <span m='801220'>code</span> <span
  m='801520'>up,</span> <span m='801980'>as</span> <span
  m='802140'>opposed</span> <span m='802390'>to</span> <span
  m='802460'>saying,</span> <span m='802730'>the</span> <span
  m='802830'>frontiers</span> <span m='803420'>meet.</span> <span
  m='804070'>Which,</span> <span m='804390'>you know,</span> <span
  m='804800'>I</span> <span m='804910'>don't</span> <span m='805010'>know</span>
  <span m='805120'>how</span> <span m='805200'>to</span> <span
  m='805290'>code.</span> <span m='806380'>OK?</span> <span
  m='808450'>Someone</span> <span m='808580'>else?</span> <span
  m='810850'>All</span> <span m='810940'>right,  go for</span> <span
  m='811400'>it.</span> </p><p><span m='811886'>AUDIENCE: When</span> <span
  m='813830'>there's some</span> <span m='814316'>node</span> <span
  m='815774'>that can</span> <span m='816260'>keep track</span> <span
  m='816746'>of</span> <span m='817232'>two</span> <span
  m='817718'>different</span> <span m='820148'>cost values</span> <span
  m='820634'>from--</span> </p><p><span m='821610'>PROFESSOR: The</span> <span
  m='821780'>Qf</span> <span m='821940'>and</span> <span m='822230'>the
  Qb,</span> <span m='822710'>that's</span> <span m='823190'>correct.</span>
  <span m='823710'>And,</span> <span m='824160'>somehow--</span> </p><p><span
  m='825047'>AUDIENCE: Somehow</span> <span m='826001'>they're</span> <span
  m='826955'>cost</span> <span m='827432'>runs</span> <span m='828386'>to get
  there</span> <span m='828863'>from the</span> <span m='829340'>start</span>
  <span m='829817'>and from the</span> <span m='830294'>[INAUDIBLE].</span>
  </p><p><span m='833160'>PROFESSOR: OK.</span> <span m='833930'>It's</span>
  <span m='834990'>close.</span> <span m='835370'>It's</span> <span
  m='835520'>not</span> <span m='835760'>quite</span> <span
  m='836090'>something</span> <span m='837280'>I</span> <span
  m='837360'>can</span> <span m='837520'>code</span> <span m='837740'>up.</span>
  <span m='838070'>Someone</span> <span m='838340'>want</span> <span
  m='838490'>to</span> <span m='838530'>improve</span> <span
  m='838870'>that?</span> <span m='840120'>Someone want to</span> <span
  m='840460'>improve</span> <span m='840740'>that?</span> <span
  m='841680'>I</span> <span m='841740'>want</span> <span
  m='841910'>something</span> <span m='842140'>very,</span> <span
  m='842800'>very</span> <span m='842910'>specific.</span> <span
  m='844500'>Someone?</span> <span m='845390'>Go for</span> <span
  m='845790'>it.</span> </p><p><span m='846756'>AUDIENCE: The node</span> <span
  m='847239'>has</span> <span m='847722'>been extracted</span> <span
  m='848205'>from</span> <span m='848688'>both</span> <span m='849660'>Qf</span>
  <span m='850055'>and Qb.</span> </p><p><span m='850450'>PROFESSOR: The</span>
  <span m='850845'>node</span> <span m='851240'>which has been</span> <span
  m='851520'>extracted</span> <span m='852100'>from</span> <span
  m='852410'>both</span> <span m='852910'>Qf and Qb.</span> <span
  m='853580'>So,</span> <span m='853920'>the</span> <span
  m='854010'>reason</span> <span m='854260'>I</span> <span
  m='854340'>didn't</span> <span m='854590'>quite</span> <span
  m='854840'>buy</span> <span m='855060'>your</span> <span
  m='855160'>answer</span> <span m='855460'>was,</span> <span
  m='856680'>finite</span> <span m='857140'>part</span> <span
  m='859250'>is</span> <span m='859380'>obviously</span> <span
  m='859630'>correct.</span> <span m='860430'>But</span> <span
  m='860700'>I</span> <span m='860830'>wanted</span> <span m='861470'>a</span>
  <span m='861560'>specific</span> <span m='862010'>condition</span> <span
  m='862740'>that</span> <span m='863270'>says,</span> <span
  m='864550'>I'm</span> <span m='864670'>going</span> <span m='864880'>to
  do</span> <span m='864970'>extract-min,</span> <span m='865790'>just</span>
  <span m='865980'>like</span> <span m='866130'>I</span> <span
  m='866170'>said</span> <span m='866500'>when</span> <span m='866630'>I</span>
  <span m='866720'>extract-min</span> <span m='867150'>and</span> <span
  m='867470'>u</span> <span m='867640'>equals</span> <span m='868030'>t,</span>
  <span m='868375'>I</span> <span m='868720'>stop</span> <span
  m='869130'>with</span> <span m='869260'>the</span> <span
  m='869340'>single</span> <span m='869660'>source,</span> <span
  m='869980'>single</span> <span m='870270'>target.</span> </p><p><span
  m='871010'>In</span> <span m='871100'>the</span> <span
  m='871180'>bi-directional</span> <span m='871750'>case,</span> <span
  m='872510'>I</span> <span m='872620'>need</span> <span m='872780'>to</span>
  <span m='873440'>pull</span> <span m='873730'>out</span> <span
  m='873960'>a</span> <span m='874030'>node</span> <span m='874460'>from</span>
  <span m='874730'>Qf.</span> <span m='875810'>And</span> <span
  m='876070'>pull</span> <span m='876400'>out</span> <span m='876560'>a</span>
  <span m='876600'>node</span> <span m='877000'>from</span> <span
  m='877770'>Qb.</span> <span m='878510'>And</span> <span m='878630'>then</span>
  <span m='878760'>I</span> <span m='878800'>get</span> <span
  m='879010'>to</span> <span m='879090'>stop,</span> <span m='879840'>all</span>
  <span m='879930'>right?</span> <span m='880370'>So,</span> <span
  m='880980'>you</span> <span m='881130'>get</span> <span m='881220'>a</span>
  <span m='881280'>cushion.</span> </p><p><span m='883880'>You</span> <span
  m='883970'>don't</span> <span m='884080'>need</span> <span
  m='884220'>to</span> <span m='884290'>feel</span> <span m='884440'>too</span>
  <span m='884540'>bad</span> <span m='884770'>because</span> <span
  m='884930'>I</span> <span m='885000'>think</span> <span m='885140'>you</span>
  <span m='885220'>already</span> <span m='885460'>have</span> <span
  m='885700'>a</span> <span m='885760'>cushion.</span> <span
  m='887020'>Yeah.</span> <span m='887590'>I</span> <span m='887710'>know</span>
  <span m='887860'>that.</span> <span m='888150'>I</span> <span
  m='888250'>know</span> <span m='888680'>everyone</span> <span
  m='889050'>who</span> <span m='889170'>has</span> <span
  m='889350'>cushions.</span> <span m='890716'>Right.</span> <span
  m='892470'>Actually,</span> <span m='892770'>I</span> <span
  m='892810'>don't.</span> <span m='893180'>But</span> <span
  m='893320'>I'm</span> <span m='893400'>going</span> <span m='893500'>to</span>
  <span m='893700'>pretend</span> <span m='893920'>I</span> <span
  m='894060'>do.</span> </p><p><span m='896150'>So,</span> <span
  m='896460'>the</span> <span m='896610'>termination</span> <span
  m='897080'>condition</span> <span m='898120'>is</span> <span
  m='898600'>that</span> <span m='900050'>some</span> <span
  m='900390'>vertex,</span> <span m='903040'>and</span> <span
  m='903200'>this</span> <span m='903330'>is</span> <span
  m='903490'>correct,</span> <span m='904000'>some</span> <span
  m='904270'>vertex,</span> <span m='906280'>u,</span> <span
  m='907410'>has</span> <span m='908010'>been</span> <span
  m='908880'>processed,</span> <span m='909800'>both</span> <span
  m='910310'>in</span> <span m='910440'>the</span> <span
  m='910540'>forward</span> <span m='911010'>search</span> <span
  m='921880'>and</span> <span m='922280'>the</span> <span
  m='922360'>backward</span> <span m='922770'>search.</span> <span
  m='923880'>OK?</span> <span m='924670'>That</span> <span
  m='924910'>corresponds</span> <span m='925480'>to</span> <span
  m='926930'>the</span> <span m='927090'>frontiers</span> <span
  m='927650'>meeting.</span> <span m='928810'>But,</span> <span
  m='929220'>specifically,</span> <span m='931770'>it's</span> <span
  m='931980'>been</span> <span m='932380'>deleted,</span> <span
  m='933290'>or</span> <span m='933430'>extracted</span> <span
  m='936280'>from</span> <span m='936630'>both</span> <span m='938270'>Qf</span>
  <span m='939490'>and</span> <span m='939790'>Qb.</span> </p><p><span
  m='942020'>So</span> <span m='942160'>that's</span> <span
  m='943690'>actually</span> <span m='944020'>the</span> <span
  m='944150'>easier</span> <span m='944630'>question.</span> <span
  m='946090'>Visit</span> <span m='947420'>a</span> <span
  m='947470'>harder</span> <span m='947840'>question,</span> <span
  m='948350'>which</span> <span m='948580'>is</span> <span m='953180'>how</span>
  <span m='954230'>do</span> <span m='954300'>we</span> <span
  m='954440'>find</span> <span m='958130'>the</span> <span
  m='958220'>shortest</span> <span m='958770'>path</span> <span
  m='962110'>after</span> <span m='962480'>termination</span> <span
  m='964450'>from</span> <span m='964890'>s</span> <span m='966140'>to</span>
  <span m='966250'>t?</span> <span m='967705'>OK?</span> <span
  m='968480'>And</span> <span m='968990'>I</span> <span m='969130'>should</span>
  <span m='969330'>say</span> <span m='969680'>specifically,</span> <span
  m='970260'>that--</span> <span m='970600'>and</span> <span m='971090'>I</span>
  <span m='971270'>forgot</span> <span m='971490'>to</span> <span
  m='971550'>put</span> <span m='971690'>this</span> <span m='971850'>up,</span>
  <span m='972570'>which</span> <span m='972860'>I</span> <span
  m='972920'>should--</span> <span m='973690'>that</span> <span
  m='973860'>we're</span> <span m='974020'>going</span> <span
  m='974240'>to</span> <span m='974300'>have</span> <span m='974550'>to</span>
  <span m='974650'>have</span> <span m='975600'>pi</span> <span
  m='975960'>f</span> <span m='976460'>and</span> <span m='976720'>pi</span>
  <span m='976970'>b,</span> <span m='978290'>which</span> <span m='978680'>this
  is</span> <span m='978990'>the</span> <span m='979070'>normal</span> <span
  m='980380'>data</span> <span m='980620'>structure.</span> </p><p><span
  m='981690'>And</span> <span m='983330'>the</span> <span m='983470'>pi</span>
  <span m='983680'>b</span> <span m='983940'>is</span> <span
  m='984090'>following</span> <span m='984375'>the</span> <span
  m='984660'>edges</span> <span m='985090'>backward.</span> <span
  m='987960'>So,</span> <span m='988130'>in</span> <span m='988230'>some</span>
  <span m='988470'>sense,</span> <span m='988820'>the</span> <span
  m='989360'>predecessor,</span> <span m='991180'>in the case</span> <span
  m='991495'>of</span> <span m='991810'>pi</span> <span m='992050'>b,</span>
  <span m='993420'>what</span> <span m='993620'>you're</span> <span
  m='993760'>saying</span> <span m='994170'>is,</span> <span
  m='995100'>on</span> <span m='995300'>this</span> <span m='995650'>node</span>
  <span m='995990'>here--</span> <span m='1001380'>which I'll</span> <span
  m='1001630'>call</span> <span m='1001880'>v2</span> <span
  m='1002310'>for</span> <span m='1002430'>example--</span> <span
  m='1004420'>is,</span> <span m='1005170'>if</span> <span
  m='1005350'>I'm</span> <span m='1005490'>going</span> <span
  m='1005620'>to</span> <span m='1005680'>choose</span> <span
  m='1005990'>this</span> <span m='1006190'>path</span> <span
  m='1006460'>here--</span> <span m='1006730'>and</span> <span
  m='1007850'>I</span> <span m='1008100'>need</span> <span m='1008680'>to</span>
  <span m='1008940'>obviously</span> <span m='1009270'>choose</span> <span
  m='1009430'>this</span> <span m='1009650'>edge</span> <span
  m='1009880'>here</span> <span m='1010490'>in</span> <span
  m='1011080'>any</span> <span m='1011300'>shortest</span> <span
  m='1011690'>path</span> <span m='1012010'>that</span> <span
  m='1012200'>gets</span> <span m='1012450'>to</span> <span
  m='1012580'>t,</span> <span m='1013230'>right?</span> </p><p><span
  m='1013470'>Because</span> <span m='1013650'>that's</span> <span
  m='1013840'>the</span> <span m='1013910'>only</span> <span
  m='1014110'>edge</span> <span m='1014340'>that</span> <span
  m='1014510'>goes</span> <span m='1014710'>to</span> <span
  m='1014820'>t.</span> <span m='1015800'>And</span> <span
  m='1016150'>so,</span> <span m='1016960'>what</span> <span
  m='1017120'>I'm</span> <span m='1017200'>saying</span> <span
  m='1017460'>here</span> <span m='1017790'>is</span> <span
  m='1017990'>that</span> <span m='1022220'>a</span> <span
  m='1022410'>predecessor</span> <span m='1023010'>of</span> <span
  m='1023270'>pi</span> <span m='1023520'>b t</span> <span
  m='1025410'>equals</span> <span m='1025980'>v2.</span> <span
  m='1027660'>OK?</span> <span m='1030050'>That</span> <span
  m='1030130'>make</span> <span m='1030270'>sense?</span> </p><p><span
  m='1030990'>And</span> <span m='1031140'>then</span> <span
  m='1031260'>over</span> <span m='1031430'>here,</span> <span
  m='1032040'>if</span> <span m='1032170'>this</span> <span
  m='1032339'>was</span> <span m='1032520'>v1,</span> <span
  m='1033810'>then</span> <span m='1034050'>I</span> <span
  m='1034109'>would</span> <span m='1034240'>have</span> <span
  m='1034609'>pi</span> <span m='1035319'>f</span> <span m='1036670'>v1</span>
  <span m='1040119'>equals</span> <span m='1040500'>s.</span> <span
  m='1042240'>Right?</span> <span m='1043099'>That</span> <span m='1043210'>make
  sense?</span> <span m='1045000'>Everybody</span> <span m='1045230'>buy</span>
  <span m='1045420'>that?</span> <span m='1046660'>All</span> <span
  m='1046760'>right,</span> <span m='1047160'>so</span> <span
  m='1047550'>how</span> <span m='1047670'>do</span> <span m='1047770'>I</span>
  <span m='1047869'>find</span> <span m='1048970'>the</span> <span
  m='1049110'>shortest</span> <span m='1049530'>path</span> <span
  m='1050410'>from</span> <span m='1050730'>s</span> <span m='1050990'>to</span>
  <span m='1051150'>t,</span> <span m='1051980'>after</span> <span
  m='1052350'>these</span> <span m='1052570'>frontiers</span> <span
  m='1053180'>have</span> <span m='1053360'>met,</span> <span
  m='1054150'>and</span> <span m='1054440'>I've</span> <span
  m='1054590'>terminated</span> <span m='1055250'>the</span> <span
  m='1055380'>search?</span> <span m='1056820'>How</span> <span
  m='1056920'>do</span> <span m='1057000'>I</span> <span m='1057080'>do</span>
  <span m='1057210'>that?</span> <span m='1059410'>Someone?</span> <span
  m='1062570'>Go ahead.</span> </p><p></p><p><span m='1063160'>AUDIENCE:
  Well,</span> <span m='1063690'>given</span> <span m='1063930'>that</span>
  <span m='1064390'>data</span> <span m='1064850'>structure, you start</span>
  <span m='1065310'>at</span> <span m='1066130'>your</span> <span
  m='1066780'>t.</span> <span m='1067550'>And</span> <span m='1067940'>you
  keep</span> <span m='1068330'>on going</span> <span m='1068460'>back to
  the</span> <span m='1068926'>[INAUDIBLE]</span> <span m='1069392'>until</span>
  <span m='1070324'>you get to the</span> <span m='1070790'>point</span> <span
  m='1070940'>where</span> <span m='1071424'>they've peaked.</span> <span
  m='1072876'>Then you use the</span> <span m='1073360'>pi</span> <span
  m='1073844'>f</span> <span m='1074328'>to go from that</span> <span
  m='1074812'>node,</span> <span m='1075296'>all the way back</span> <span
  m='1075780'>to</span> <span m='1076264'>s.</span> </p><p></p><p><span
  m='1080590'>PROFESSOR: So,</span> <span m='1080770'>what</span> <span
  m='1080900'>I'm</span> <span m='1080990'>going</span> <span
  m='1081120'>to</span> <span m='1081180'>have</span> <span
  m='1081350'>to</span> <span m='1081460'>do</span> <span
  m='1081850'>is--</span> <span m='1083610'>but</span> <span
  m='1084220'>where</span> <span m='1084390'>do</span> <span
  m='1084490'>I</span> <span m='1084580'>switch,</span> <span
  m='1085050'>is</span> <span m='1085170'>the</span> <span
  m='1085260'>question.</span> <span m='1087470'>Where</span> <span
  m='1087660'>do</span> <span m='1087760'>I</span> <span
  m='1087860'>switch</span> <span m='1088320'>from</span> <span
  m='1089260'>pi</span> <span m='1089520'>f</span> <span m='1089890'>to
  pi</span> <span m='1090200'>b?</span> <span m='1091070'>There</span> <span
  m='1091220'>has</span> <span m='1091390'>to</span> <span m='1091470'>be</span>
  <span m='1091580'>some</span> <span m='1091890'>point</span> <span
  m='1092290'>where</span> <span m='1092480'>I</span> <span
  m='1092560'>switch</span> <span m='1093470'>from--</span> <span
  m='1093770'>Yeah,</span> <span m='1094055'>go</span> <span
  m='1094340'>ahead.</span> </p><p><span m='1096240'>AUDIENCE: At the</span>
  <span m='1097200'>meeting point</span> <span m='1097680'>of the node</span>
  <span m='1098160'>that</span> <span m='1098640'>was</span> <span
  m='1100080'>[INAUDIBLE]</span> <span m='1102480'>Q</span> <span
  m='1102960'>[INAUDIBLE].</span> </p><p><span m='1103440'>PROFESSOR: All</span>
  <span m='1103920'>right.</span> <span m='1104400'>Is that what you were
  saying,</span> <span m='1104620'>too?</span> <span m='1105310'>OK.</span>
  <span m='1108290'>So</span> <span m='1108510'>the</span> <span
  m='1108620'>claim</span> <span m='1109070'>is,</span> <span
  m='1110710'>if</span> <span m='1112290'>w</span> <span m='1113810'>was</span>
  <span m='1114850'>processed</span> <span m='1117510'>first,</span> <span
  m='1123160'>extracted</span> <span m='1123720'>from</span> <span
  m='1123900'>both</span> <span m='1124240'>Qf</span> <span m='1124430'>and
  Qb,</span> <span m='1126410'>then</span> <span m='1129830'>find</span> <span
  m='1131142'>the</span> <span m='1131490'>shortest</span> <span
  m='1131940'>path</span> <span m='1133340'>using</span> <span
  m='1135850'>pi</span> <span m='1136060'>f</span> <span m='1138630'>from</span>
  <span m='1140450'>s</span> <span m='1140850'>to</span> <span
  m='1141410'>w.</span> <span m='1142410'>Right?</span> <span
  m='1142680'>So,</span> <span m='1142760'>you</span> <span
  m='1142830'>can</span> <span m='1142910'>use</span> <span
  m='1143110'>pi</span> <span m='1143330'>f</span> <span m='1143620'>to</span>
  <span m='1143660'>get</span> <span m='1143900'>from</span> <span
  m='1144090'>s</span> <span m='1144280'>to</span> <span m='1144400'>w.</span>
  </p><p><span m='1145250'>And</span> <span m='1145410'>the</span> <span
  m='1145470'>way</span> <span m='1145620'>you</span> <span
  m='1145710'>do</span> <span m='1145840'>that</span> <span
  m='1146060'>is</span> <span m='1146170'>by</span> <span
  m='1146330'>applying</span> <span m='1146860'>pi</span> <span m='1147120'>f
  to</span> <span m='1147550'>w.</span> <span m='1148440'>And</span> <span
  m='1148600'>then</span> <span m='1148890'>keep</span> <span
  m='1149130'>applying</span> <span m='1149650'>it</span> <span
  m='1150120'>until</span> <span m='1150390'>you</span> <span
  m='1150520'>get</span> <span m='1150860'>to s,</span> <span
  m='1151772'>OK?</span> <span m='1152230'>This</span> <span
  m='1152420'>is</span> <span m='1152780'>normal</span> <span
  m='1153220'>search,</span> <span m='1153610'>right?</span> <span
  m='1153890'>Everybody</span> <span m='1154710'>knows</span> <span
  m='1154940'>this.</span> <span m='1155200'>You</span> <span
  m='1155350'>coded</span> <span m='1155690'>it.</span> <span
  m='1156270'>So</span> <span m='1156710'>I</span> <span m='1156800'>hope</span>
  <span m='1157010'>you</span> <span m='1157100'>know</span> <span
  m='1157300'>it.</span> </p><p><span m='1160690'>And</span> <span
  m='1160810'>then,</span> <span m='1161260'>we</span> <span
  m='1161430'>go</span> <span m='1161750'>find</span> <span
  m='1163340'>shortest</span> <span m='1163760'>path</span> <span
  m='1164960'>using</span> <span m='1166630'>pi</span> <span
  m='1166820'>b,</span> <span m='1167910'>right?</span> <span m='1168300'>And
  you're going to</span> <span m='1168410'>constantly</span> <span
  m='1168940'>apply</span> <span m='1170380'>pi</span> <span
  m='1170730'>b--</span> <span m='1172290'>and</span> <span
  m='1172420'>this</span> <span m='1172520'>is</span> <span
  m='1172580'>the</span> <span m='1172660'>backward</span> <span
  m='1173100'>path--</span> <span m='1174990'>from</span> <span
  m='1176220'>t</span> <span m='1177920'>to</span> <span m='1178030'>w.</span>
  <span m='1182620'>And</span> <span m='1183310'>this</span> <span
  m='1183530'>follows</span> <span m='1183850'>the</span> <span
  m='1183930'>edges</span> <span m='1184200'>backward,</span> <span
  m='1185670'>all</span> <span m='1185780'>right?</span> <span
  m='1188450'>This</span> <span m='1188670'>sounds</span> <span
  m='1188910'>pretty</span> <span m='1189080'>good?</span> <span
  m='1191050'>Everybody</span> <span m='1191370'>agree</span> <span
  m='1191560'>with</span> <span m='1191690'>this?</span> <span
  m='1194600'>Anybody</span> <span m='1194920'>disagree?</span> <span
  m='1196540'>Yeah.</span> </p><p></p><p><span m='1198088'>AUDIENCE: Pi</span>
  <span m='1198544'>b.</span> <span m='1199456'>If</span> <span
  m='1200370'>[INAUDIBLE],</span> <span m='1202510'>pi</span> <span
  m='1202790'>b</span> <span m='1202970'>would be</span> <span
  m='1203230'>like</span> <span m='1203460'>pi b</span> <span
  m='1203780'>b2</span> <span m='1204690'>equals</span> <span
  m='1205420'>t,</span> <span m='1207594'>because</span> <span
  m='1208080'>b2</span> <span m='1208566'>[INAUDIBLE]--</span> </p><p><span
  m='1209052'>PROFESSOR: That's a good</span> <span m='1209538'>question.</span>
  <span m='1210024'>I might</span> <span m='1210510'>have</span> <span
  m='1211482'>done</span> <span m='1211980'>this</span> <span
  m='1212140'>wrong.</span> <span m='1213070'>So,</span> <span
  m='1213220'>in</span> <span m='1213380'>the</span> <span
  m='1213470'>backward</span> <span m='1214050'>search,</span> <span
  m='1218570'>this</span> <span m='1219030'>can</span> <span
  m='1219460'>get</span> <span m='1219480'>pretty</span> <span
  m='1219630'>confusing.</span> <span m='1221230'>So</span> <span
  m='1222240'>what</span> <span m='1222540'>do</span> <span m='1222600'>I</span>
  <span m='1222690'>have</span> <span m='1222880'>here?</span> <span
  m='1223160'>I</span> <span m='1223270'>want</span> <span m='1223430'>to</span>
  <span m='1223490'>follow</span> <span m='1223950'>the</span> <span
  m='1224290'>predecessor.</span> <span m='1226630'>You're</span> <span
  m='1226820'>exactly</span> <span m='1227330'>right.</span> <span
  m='1228230'>You're</span> <span m='1228410'>exactly</span> <span
  m='1228790'>right.</span> <span m='1228990'>Thank</span> <span
  m='1229190'>you.</span> <span m='1229590'>Thank</span> <span
  m='1229750'>you</span> <span m='1229840'>for</span> <span
  m='1229950'>pointing</span> <span m='1230220'>that</span> <span
  m='1230370'>out.</span> </p><p><span m='1230980'>All</span> <span
  m='1231040'>right,</span> <span m='1231230'>so</span> <span
  m='1232770'>what</span> <span m='1232920'>I</span> <span
  m='1232980'>have</span> <span m='1233180'>here</span> <span
  m='1233490'>is</span> <span m='1235220'>when</span> <span m='1235480'>I</span>
  <span m='1235540'>look</span> <span m='1235700'>at</span> <span
  m='1235770'>this</span> <span m='1235940'>path</span> <span
  m='1236340'>that</span> <span m='1236520'>goes</span> <span
  m='1236780'>this</span> <span m='1236980'>way,</span> <span
  m='1237860'>all</span> <span m='1237930'>right?</span> <span
  m='1238760'>I'm</span> <span m='1238800'>going</span> <span
  m='1238940'>to</span> <span m='1238970'>look</span> <span
  m='1239120'>at</span> <span m='1239170'>the</span> <span
  m='1239240'>path</span> <span m='1239510'>that</span> <span
  m='1239670'>goes</span> <span m='1239880'>this</span> <span
  m='1240060'>way.</span> <span m='1242130'>s</span> <span m='1242410'>is</span>
  <span m='1242540'>the</span> <span m='1242650'>predecessor</span> <span
  m='1243260'>of</span> <span m='1243350'>v1.</span> <span m='1244190'>v1</span>
  <span m='1244640'>is</span> <span m='1244750'>a</span> <span
  m='1244800'>predecessor</span> <span m='1245490'>of,</span> <span
  m='1245650'>let's</span> <span m='1245880'>call</span> <span
  m='1246060'>this</span> <span m='1246260'>v3.</span> <span
  m='1247250'>v3</span> <span m='1247680'>is</span> <span m='1247810'>a</span>
  <span m='1247870'>predecessor</span> <span m='1248510'>of</span> <span
  m='1248630'>v4.</span> <span m='1249200'>I'm just talking</span> <span
  m='1249650'>about</span> <span m='1249780'>the</span> <span
  m='1249900'>regular</span> <span m='1250300'>forward</span> <span
  m='1250760'>path.</span> </p><p><span m='1251960'>We</span> <span
  m='1252070'>have</span> <span m='1252370'>s</span> <span m='1252650'>to</span>
  <span m='1252770'>v1.</span> <span m='1253300'>v1</span> <span
  m='1253640'>to</span> <span m='1253740'>v3.</span> <span m='1254510'>v3</span>
  <span m='1254900'>to</span> <span m='1254990'>v4.</span> <span
  m='1255990'>All</span> <span m='1256440'>the</span> <span
  m='1256520'>way</span> <span m='1256650'>to</span> <span m='1256780'>t,</span>
  <span m='1257230'>right?</span> <span m='1259370'>So</span> <span
  m='1259480'>what</span> <span m='1259610'>I</span> <span
  m='1259690'>have</span> <span m='1260100'>here</span> <span
  m='1260300'>is</span> <span m='1260430'>correct.</span> <span
  m='1261220'>The</span> <span m='1261500'>predecessor</span> <span
  m='1262000'>of</span> <span m='1262070'>v1</span> <span m='1262430'>is</span>
  <span m='1262550'>s.</span> <span m='1262860'>The</span> <span
  m='1262960'>predecessor</span> <span m='1263550'>of</span> <span
  m='1263640'>v3</span> <span m='1264140'>would</span> <span
  m='1264300'>be</span> <span m='1264900'>v1.</span> <span m='1265600'>So</span>
  <span m='1266110'>I</span> <span m='1266200'>could</span> <span
  m='1266350'>write,</span> <span m='1267100'>pi</span> <span
  m='1267370'>f</span> <span m='1268330'>v3</span> <span
  m='1269350'>equals</span> <span m='1269790'>v1.</span> <span
  m='1271050'>Et</span> <span m='1271200'>cetera.</span> <span
  m='1272550'>Now,</span> <span m='1272600'>let's</span> <span
  m='1272820'>just</span> <span m='1272970'>forget</span> <span
  m='1273180'>about</span> <span m='1273410'>the</span> <span
  m='1273490'>forward</span> <span m='1273880'>path,</span> <span
  m='1274190'>and</span> <span m='1274290'>let's</span> <span
  m='1274450'>just</span> <span m='1274610'>talk</span> <span
  m='1274800'>about</span> <span m='1274990'>the</span> <span
  m='1275060'>backward</span> <span m='1275510'>path.</span> </p><p><span
  m='1276250'>In</span> <span m='1276370'>the</span> <span
  m='1276450'>backwoods</span> <span m='1276910'>path,</span> <span
  m='1280400'>I</span> <span m='1280600'>want</span> <span m='1280750'>to</span>
  <span m='1280790'>be</span> <span m='1280860'>able</span> <span
  m='1280980'>to</span> <span m='1281050'>construct</span> <span
  m='1281510'>this</span> <span m='1281680'>backward</span> <span
  m='1282110'>path.</span> <span m='1282840'>It's</span> <span
  m='1283460'>got</span> <span m='1283630'>to</span> <span m='1283700'>be</span>
  <span m='1283960'>the</span> <span m='1284410'>reverse</span> <span
  m='1285140'>of</span> <span m='1285250'>what</span> <span m='1285410'>I</span>
  <span m='1285490'>have,</span> <span m='1286250'>OK?</span> <span
  m='1287070'>And,</span> <span m='1287540'>in</span> <span
  m='1287690'>that</span> <span m='1287860'>case,</span> <span
  m='1289030'>what</span> <span m='1289230'>I'm</span> <span
  m='1289320'>saying</span> <span m='1289670'>is</span> <span
  m='1290950'>that</span> <span m='1291690'>I</span> <span
  m='1291820'>want</span> <span m='1291990'>to</span> <span
  m='1292030'>move</span> <span m='1292680'>in</span> <span
  m='1292830'>this</span> <span m='1293090'>direction.</span> <span
  m='1294040'>So</span> <span m='1294060'>pretend</span> <span
  m='1294640'>that</span> <span m='1296340'>I've</span> <span
  m='1296620'>made</span> <span m='1296890'>the</span> <span
  m='1296980'>edges</span> <span m='1298140'>flip,</span> <span
  m='1299110'>OK?</span> </p><p><span m='1299830'>So,</span> <span
  m='1300290'>in</span> <span m='1300400'>that</span> <span
  m='1300610'>case,</span> <span m='1301700'>if</span> <span
  m='1301910'>I</span> <span m='1301980'>pretend</span> <span
  m='1302560'>that</span> <span m='1302870'>this</span> <span
  m='1303070'>edge</span> <span m='1303550'>is</span> <span
  m='1303740'>like</span> <span m='1304050'>that,</span> <span m='1305390'>and
  then</span> <span m='1305600'>I</span> <span m='1305690'>just</span> <span
  m='1305910'>apply the</span> <span m='1306340'>regular</span> <span
  m='1307310'>predecessor</span> <span m='1307850'>relationship,</span> <span
  m='1309050'>then</span> <span m='1309610'>t</span> <span m='1310210'>is</span>
  <span m='1310380'>the</span> <span m='1310500'>predecessor</span> <span
  m='1311780'>of</span> <span m='1311790'>v2.</span> <span
  m='1312220'>And</span> <span m='1312320'>that's</span> <span
  m='1312500'>the</span> <span m='1312600'>point</span> <span
  m='1313290'>you're</span> <span m='1313480'>making.</span> <span
  m='1314020'>OK?</span> <span m='1314453'>t</span> <span m='1315320'>is</span>
  <span m='1315440'>the</span> <span m='1315540'>predecessor</span> <span
  m='1316050'>of</span> <span m='1316130'>v2.</span> <span
  m='1316940'>And</span> <span m='1317140'>so,</span> <span
  m='1317900'>my</span> <span m='1318100'>apologies.</span> </p><p><span
  m='1322860'>I</span> <span m='1323040'>have</span> <span m='1323390'>pi</span>
  <span m='1323620'>b</span> <span m='1325720'>v2</span> <span
  m='1327180'>equals</span> <span m='1327630'>t.</span> <span
  m='1328120'>And,</span> <span m='1329590'>if</span> <span m='1329730'>I</span>
  <span m='1329820'>follow</span> <span m='1330220'>this</span> <span
  m='1330890'>edge</span> <span m='1331130'>here,</span> <span
  m='1331630'>then</span> <span m='1331690'>I'd</span> <span
  m='1331780'>have</span> <span m='1331990'>the</span> <span
  m='1332130'>appropriate</span> <span m='1332430'>relationship.</span> <span
  m='1332980'>But</span> <span m='1333110'>let's</span> <span
  m='1333290'>just</span> <span m='1333460'>stick to</span> <span
  m='1333600'>this</span> <span m='1333850'>one</span> <span
  m='1334060'>because</span> <span m='1334280'>that's</span> <span
  m='1335510'>the</span> <span m='1335630'>simple</span> <span
  m='1335910'>example.</span> </p><p><span m='1336510'>I</span> <span
  m='1336610'>don't</span> <span m='1336770'>quite</span> <span
  m='1337040'>know</span> <span m='1337870'>whether</span> <span
  m='1338620'>this</span> <span m='1338840'>edge</span> <span
  m='1339020'>is</span> <span m='1339110'>going</span> <span
  m='1339230'>to</span> <span m='1339270'>be</span> <span
  m='1339380'>part</span> <span m='1339570'>of</span> <span
  m='1339640'>my</span> <span m='1339740'>shortest</span> <span
  m='1340100'>path</span> <span m='1340550'>or</span> <span
  m='1340690'>not.</span> <span m='1341300'>It</span> <span
  m='1341410'>might</span> <span m='1341640'>be.</span> <span
  m='1342240'>And</span> <span m='1342460'>that's</span> <span
  m='1342620'>something</span> <span m='1342880'>that</span> <span
  m='1343120'>we'll</span> <span m='1343280'>compute.</span> <span
  m='1343720'>But</span> <span m='1344530'>what</span> <span
  m='1344760'>I</span> <span m='1344840'>have</span> <span
  m='1345080'>here</span> <span m='1345430'>is</span> <span
  m='1346360'>the</span> <span m='1347610'>predecessor</span> <span
  m='1348330'>relationship</span> <span m='1349150'>corresponding</span> <span
  m='1349760'>to</span> <span m='1350210'>the</span> <span
  m='1350330'>backward</span> <span m='1350970'>edge.</span> </p><p><span
  m='1351390'>And</span> <span m='1351540'>so,</span> <span
  m='1351620'>that's</span> <span m='1351830'>like</span> <span
  m='1352020'>flipping</span> <span m='1352350'>this</span> <span
  m='1352570'>edge.</span> <span m='1353300'>And,</span> <span
  m='1354320'>hopefully,</span> <span m='1355960'>that</span> <span
  m='1356320'>makes</span> <span m='1356510'>sense</span> <span
  m='1356800'>now.</span> <span m='1357910'>Thanks</span> <span
  m='1358080'>for</span> <span m='1358170'>pointing</span> <span
  m='1358430'>that</span> <span m='1358550'>out.</span> </p><p></p><p><span
  m='1360940'>And</span> <span m='1361150'>so,</span> <span
  m='1361280'>let's</span> <span m='1361490'>talk</span> <span
  m='1361670'>about</span> <span m='1362320'>what</span> <span
  m='1362440'>happens</span> <span m='1362700'>here.</span> <span
  m='1362930'>We</span> <span m='1363040'>know</span> <span
  m='1363190'>what</span> <span m='1363280'>happens</span> <span
  m='1363560'>in</span> <span m='1363620'>the</span> <span
  m='1363710'>forward</span> <span m='1363890'>search.</span> <span
  m='1364510'>You've</span> <span m='1364730'>done</span> <span
  m='1364900'>that</span> <span m='1365070'>before.</span> <span
  m='1366280'>In</span> <span m='1366410'>the</span> <span
  m='1366490'>backward</span> <span m='1366940'>search,</span> <span
  m='1368230'>what</span> <span m='1368410'>happens</span> <span
  m='1368770'>is</span> <span m='1369880'>that</span> <span m='1370060'>I</span>
  <span m='1371700'>need</span> <span m='1371910'>to</span> <span
  m='1372000'>start--</span> <span m='1372570'>according</span> <span
  m='1372890'>to</span> <span m='1372950'>this</span> <span
  m='1373150'>condition--</span> <span m='1374790'>just</span> <span
  m='1375120'>like</span> <span m='1375420'>in</span> <span
  m='1375520'>the</span> <span m='1375600'>forward</span> <span
  m='1375990'>search,</span> <span m='1376970'>I</span> <span
  m='1377360'>found</span> <span m='1377860'>a w.</span> <span m='1378760'>And
  I</span> <span m='1379210'>continually</span> <span m='1380060'>applied</span>
  <span m='1380870'>pi</span> <span m='1381180'>of</span> <span m='1381400'>f
  to</span> <span m='1382230'>w.</span> </p><p><span m='1383410'>So,</span>
  <span m='1383600'>this</span> <span m='1383800'>is</span> <span
  m='1384230'>apply</span> <span m='1385730'>pi</span> <span
  m='1385920'>of</span> <span m='1386130'>f</span> <span m='1387210'>to</span>
  <span m='1387280'>w.</span> <span m='1388190'>And</span> <span
  m='1388320'>then</span> <span m='1388560'>do</span> <span m='1388710'>pi
  of</span> <span m='1389090'>f</span> <span m='1390270'>pi</span> <span
  m='1390430'>of f</span> <span m='1390620'>w.</span> <span
  m='1392920'>And</span> <span m='1393100'>so</span> <span m='1393250'>on</span>
  <span m='1393390'>and</span> <span m='1393490'>so</span> <span
  m='1393650'>forth.</span> <span m='1394330'>And</span> <span
  m='1394380'>that's</span> <span m='1394530'>what</span> <span
  m='1394680'>you</span> <span m='1394770'>do</span> <span m='1395140'>in</span>
  <span m='1395290'>order</span> <span m='1395460'>to</span> <span
  m='1395530'>construct</span> <span m='1396180'>the</span> <span
  m='1396260'>shortest</span> <span m='1396600'>path.</span> <span
  m='1397840'>People</span> <span m='1398040'>buy</span> <span
  m='1398190'>that?</span> <span m='1398820'>Right?</span> </p><p><span
  m='1399440'>And</span> <span m='1399830'>what</span> <span
  m='1399990'>I</span> <span m='1400020'>want</span> <span m='1400170'>to</span>
  <span m='1400220'>do</span> <span m='1400320'>here</span> <span
  m='1401200'>is</span> <span m='1402300'>apply</span> <span
  m='1404400'>pi</span> <span m='1404820'>b</span> <span m='1407630'>to</span>
  <span m='1407760'>w.</span> <span m='1409520'>And</span> <span
  m='1409650'>then,</span> <span m='1409900'>pi</span> <span
  m='1410390'>b</span> <span m='1410910'>of</span> <span m='1413220'>pi</span>
  <span m='1413420'>b</span> <span m='1414470'>to</span> <span
  m='1414570'>w.</span> <span m='1415740'>And</span> <span m='1416000'>so</span>
  <span m='1416110'>on</span> <span m='1416250'>and</span> <span
  m='1416330'>so</span> <span m='1416480'>forth,</span> <span
  m='1416800'>till</span> <span m='1416990'>I</span> <span
  m='1417060'>get</span> <span m='1417310'>to</span> <span m='1417420'>t.</span>
  <span m='1418350'>Right?</span> <span m='1418630'>And</span> <span
  m='1418840'>this</span> <span m='1418990'>one,</span> <span
  m='1419530'>till</span> <span m='1419700'>I</span> <span m='1419770'>get
  to</span> <span m='1420070'>s.</span> <span m='1421100'>Right?</span>
  </p><p><span m='1421320'>So,</span> <span m='1421410'>what</span> <span
  m='1421550'>I</span> <span m='1421600'>wrote</span> <span
  m='1421790'>here,</span> <span m='1423700'>s to</span> <span m='1423990'>w,
  t</span> <span m='1424436'>to</span> <span m='1424882'>w.</span> <span
  m='1425330'>There's</span> <span m='1425500'>nothing</span> <span
  m='1426100'>incorrect</span> <span m='1426570'>about</span> <span
  m='1426810'>that.</span> <span m='1429000'>What's</span> <span
  m='1429410'>important</span> <span m='1429760'>to</span> <span
  m='1429810'>understand</span> <span m='1430290'>is</span> <span
  m='1430585'>the</span> <span m='1430880'>application</span> <span
  m='1431650'>of</span> <span m='1431900'>the</span> <span m='1432020'>pi</span>
  <span m='1432310'>f</span> <span m='1433200'>and</span> <span
  m='1433530'>the</span> <span m='1434110'>pi</span> <span m='1434320'>b.</span>
  <span m='1435210'>Both,</span> <span m='1435950'>according</span> <span
  m='1436290'>to</span> <span m='1436370'>this,</span> <span
  m='1437080'>start</span> <span m='1438180'>with</span> <span
  m='1438600'>w,</span> <span m='1439460'>which</span> <span
  m='1439730'>is</span> <span m='1439910'>this</span> <span
  m='1440540'>vertex</span> <span m='1441530'>that</span> <span
  m='1442380'>caused</span> <span m='1442820'>the termination</span> <span
  m='1444000'>to</span> <span m='1444120'>happen.</span> <span
  m='1445350'>All</span> <span m='1445400'>right?</span> </p><p><span
  m='1446790'>So,</span> <span m='1447450'>people</span> <span
  m='1447700'>buy</span> <span m='1447860'>this?</span> <span
  m='1449790'>Any</span> <span m='1449960'>other</span> <span
  m='1450100'>questions?</span> <span m='1451760'>All</span> <span
  m='1451850'>right.</span> <span m='1452150'>Turns</span> <span
  m='1452320'>out</span> <span m='1452460'>this</span> <span
  m='1452660'>is</span> <span m='1452800'>not</span> <span
  m='1453100'>quite</span> <span m='1453470'>correct.</span> <span
  m='1454830'>OK?</span> <span m='1455250'>This</span> <span
  m='1455420'>is</span> <span m='1455560'>not</span> <span
  m='1456630'>quite</span> <span m='1457190'>correct,</span> <span
  m='1458090'>right?</span> <span m='1458350'>And</span> <span
  m='1458430'>not</span> <span m='1458690'>because</span> <span
  m='1460260'>of</span> <span m='1461680'>the</span> <span m='1462090'>pi</span>
  <span m='1462280'>b</span> <span m='1462580'>inversion</span> <span
  m='1463120'>that</span> <span m='1463250'>I</span> <span
  m='1463300'>had</span> <span m='1463500'>before,</span> <span
  m='1464450'>right?</span> </p><p><span m='1464860'>So</span> <span
  m='1465040'>what have</span> <span m='1465260'>I</span> <span
  m='1465320'>said,</span> <span m='1465570'>so</span> <span
  m='1465730'>far?</span> <span m='1466870'>It</span> <span
  m='1466970'>makes</span> <span m='1467190'>perfect</span> <span
  m='1467470'>sense.</span> <span m='1467840'>It</span> <span
  m='1467970'>says,</span> <span m='1469860'>I</span> <span
  m='1469960'>have</span> <span m='1470220'>a</span> <span
  m='1470280'>vertex</span> <span m='1470880'>that</span> <span
  m='1471080'>caused</span> <span m='1471390'>the</span> <span
  m='1471490'>termination.</span> <span m='1472490'>I'm</span> <span
  m='1472600'>going</span> <span m='1472810'>to</span> <span
  m='1472870'>call</span> <span m='1473140'>it</span> <span
  m='1473260'>w.</span> <span m='1474556'>OK?</span> <span
  m='1474990'>And</span> <span m='1475200'>that</span> <span
  m='1475430'>vertex</span> <span m='1476470'>is</span> <span
  m='1477400'>on</span> <span m='1478070'>the</span> <span
  m='1478300'>intersection</span> <span m='1479080'>of</span> <span
  m='1479220'>these</span> <span m='1479450'>two</span> <span
  m='1479620'>frontiers,</span> <span m='1481100'>OK?</span> </p><p><span
  m='1482580'>And</span> <span m='1482770'>I'm</span> <span
  m='1482850'>going</span> <span m='1482960'>to</span> <span
  m='1483000'>use</span> <span m='1483280'>that</span> <span
  m='1483560'>to</span> <span m='1483640'>construct</span> <span
  m='1484130'>the</span> <span m='1484210'>shortest</span> <span
  m='1484630'>path</span> <span m='1485330'>by</span> <span
  m='1485440'>constructing</span> <span m='1486220'>two</span> <span
  m='1486450'>sub</span> <span m='1486800'>paths,</span> <span
  m='1487650'>using</span> <span m='1488030'>the</span> <span
  m='1488150'>forward</span> <span m='1488530'>pointers</span> <span
  m='1489500'>and</span> <span m='1490160'>the</span> <span
  m='1490370'>backward</span> <span m='1490720'>pointers.</span> <span
  m='1491840'>All</span> <span m='1491920'>right?</span> <span
  m='1492570'>So</span> <span m='1492810'>all of</span> <span
  m='1493100'>that</span> <span m='1493260'>makes</span> <span
  m='1493480'>sense</span> <span m='1493860'>except,</span> <span
  m='1495020'>it</span> <span m='1495220'>turns</span> <span
  m='1495610'>out,</span> <span m='1496650'>that</span> <span
  m='1496910'>w</span> <span m='1498100'>may</span> <span m='1498790'>not</span>
  <span m='1499160'>be</span> <span m='1502500'>on</span> <span
  m='1502830'>the</span> <span m='1502930'>shortest</span> <span
  m='1503320'>path.</span> <span m='1506350'>OK?</span> </p><p><span
  m='1509700'>And</span> <span m='1509850'>I'll</span> <span
  m='1509910'>show</span> <span m='1510120'>you</span> <span
  m='1510250'>an</span> <span m='1510320'>example</span> <span
  m='1511410'>where</span> <span m='1511570'>w</span> <span
  m='1512030'>is</span> <span m='1512190'>not</span> <span m='1512590'>on</span>
  <span m='1512750'>the</span> <span m='1512830'>shortest</span> <span
  m='1513230'>path.</span> <span m='1513700'>All</span> <span
  m='1514160'>right?</span> <span m='1514350'>So</span> <span
  m='1514450'>that's</span> <span m='1514780'>at</span> <span
  m='1515220'>a</span> <span m='1515290'>real</span> <span
  m='1515940'>subtle</span> <span m='1517070'>condition.</span> <span
  m='1517650'>So</span> <span m='1517750'>we</span> <span
  m='1517830'>have</span> <span m='1517970'>to</span> <span
  m='1518060'>actually</span> <span m='1518400'>augment</span> <span
  m='1519700'>the</span> <span m='1519850'>termination</span> <span
  m='1520510'>condition.</span> <span m='1522240'>Or,</span> <span
  m='1522730'>we</span> <span m='1523110'>have</span> <span
  m='1523210'>to</span> <span m='1523260'>do</span> <span
  m='1523380'>something</span> <span m='1523660'>more</span> <span
  m='1523930'>than</span> <span m='1524080'>the</span> <span
  m='1524170'>termination</span> <span m='1524640'>condition.</span>
  </p><p><span m='1525460'>So,</span> <span m='1525560'>I</span> <span
  m='1525570'>will</span> <span m='1525630'>tell</span> <span
  m='1525790'>you</span> <span m='1525940'>right</span> <span
  m='1526160'>away,</span> <span m='1527390'>the</span> <span
  m='1527490'>termination</span> <span m='1527970'>condition</span> <span
  m='1528420'>is</span> <span m='1528670'>correct.</span> <span
  m='1529690'>OK?</span> <span m='1530680'>And</span> <span
  m='1531100'>so,</span> <span m='1531790'>the</span> <span
  m='1531920'>guy</span> <span m='1532080'>who got</span> <span
  m='1532280'>the</span> <span m='1532340'>cushion,</span> <span
  m='1533410'>deserved</span> <span m='1533520'>the</span> <span
  m='1533660'>cushion.</span> <span m='1534620'>OK?</span> <span
  m='1535870'>So</span> <span m='1536470'>the</span> <span
  m='1536640'>termination</span> <span m='1537030'>condition</span> <span
  m='1537380'>as</span> <span m='1537530'>correct.</span> </p><p><span
  m='1538356'>You</span> <span m='1538770'>are</span> <span
  m='1538960'>going</span> <span m='1539150'>to</span> <span
  m='1539240'>run</span> <span m='1539780'>Dijkstra 's</span> <span
  m='1540460'>ultimate</span> <span m='1540950'>forward</span> <span
  m='1541310'>search</span> <span m='1541780'>and</span> <span
  m='1541960'>backward</span> <span m='1542340'>search.</span> <span
  m='1543150'>And</span> <span m='1543350'>you're</span> <span
  m='1543490'>going</span> <span m='1543690'>to</span> <span
  m='1543770'>terminate</span> <span m='1544520'>when</span> <span
  m='1544820'>a</span> <span m='1544880'>particular</span> <span
  m='1545280'>vertex,</span> <span m='1545950'>call</span> <span
  m='1546190'>it</span> <span m='1546300'>w,</span> <span m='1547660'>is</span>
  <span m='1547870'>going</span> <span m='1548040'>to</span> <span
  m='1548080'>get</span> <span m='1548340'>pulled</span> <span
  m='1548600'>out</span> <span m='1549080'>from</span> <span
  m='1549260'>both</span> <span m='1549620'>Qf</span> <span
  m='1550180'>and</span> <span m='1550520'>Qb.</span> <span
  m='1551510'>All</span> <span m='1551570'>right?</span> <span
  m='1552110'>What</span> <span m='1552380'>is</span> <span
  m='1552510'>incorrect</span> <span m='1553120'>here</span> <span
  m='1554020'>is</span> <span m='1554660'>the</span> <span
  m='1554830'>use</span> <span m='1555240'>of</span> <span m='1555400'>w</span>
  <span m='1557670'>to</span> <span m='1557800'>construct</span> <span
  m='1558610'>the</span> <span m='1558820'>shortest</span> <span
  m='1559080'>path.</span> <span m='1560130'>All</span> <span
  m='1560220'>right?</span> </p><p><span m='1560630'>It</span> <span
  m='1560770'>turns</span> <span m='1560960'>out,</span> <span
  m='1561180'>we</span> <span m='1561270'>have to do</span> <span
  m='1561430'>a</span> <span m='1561550'>little</span> <span
  m='1561870'>more</span> <span m='1562060'>work</span> <span
  m='1563070'>to</span> <span m='1563170'>go</span> <span
  m='1563550'>find</span> <span m='1564200'>the</span> <span
  m='1564320'>shortest</span> <span m='1564740'>path,</span> <span
  m='1565180'>after</span> <span m='1565490'>we've</span> <span
  m='1565680'>terminated.</span> <span m='1566630'>And</span> <span
  m='1567130'>w</span> <span m='1567560'>may</span> <span m='1567670'>not</span>
  <span m='1568000'>be</span> <span m='1568220'>on</span> <span
  m='1568340'>the</span> <span m='1568410'>shortest</span> <span
  m='1568780'>path.</span> <span m='1569660'>All</span> <span
  m='1569720'>right?</span> <span m='1571610'>Any</span> <span
  m='1571870'>ideas</span> <span m='1572300'>as</span> <span
  m='1572450'>to</span> <span m='1574460'>what</span> <span
  m='1574730'>we</span> <span m='1574750'>might</span> <span
  m='1575000'>do?</span> <span m='1575170'>This</span> <span
  m='1575360'>is</span> <span m='1575900'>a</span> <span m='1575990'>bit</span>
  <span m='1576110'>of</span> <span m='1576190'>an</span> <span
  m='1576250'>unfair</span> <span m='1576570'>question,</span> <span
  m='1576980'>but</span> <span m='1577230'>certainly</span> <span
  m='1577500'>worth</span> <span m='1577670'>a</span> <span
  m='1577760'>cushion.</span> </p><p><span m='1580280'>How</span> <span
  m='1580430'>do</span> <span m='1580490'>you</span> <span
  m='1580570'>think</span> <span m='1580700'>we</span> <span
  m='1580790'>can</span> <span m='1580890'>fix</span> <span
  m='1581190'>this?</span> <span m='1584300'>If</span> <span
  m='1584430'>w</span> <span m='1584770'>is</span> <span m='1584860'>not</span>
  <span m='1585040'>on</span> <span m='1585110'>the</span> <span
  m='1585180'>shortest</span> <span m='1585530'>path,</span> <span
  m='1586360'>what do</span> <span m='1586570'>you</span> <span
  m='1586690'>think</span> <span m='1587740'>would</span> <span
  m='1587980'>be</span> <span m='1588160'>on</span> <span m='1588250'>the</span>
  <span m='1588320'>shortest</span> <span m='1588650'>path?</span> <span
  m='1588880'>Is</span> <span m='1589030'>there</span> <span
  m='1589120'>a</span> <span m='1589170'>way</span> <span m='1589340'>of</span>
  <span m='1589430'>finding</span> <span m='1589960'>this</span> <span
  m='1590130'>vertex,</span> <span m='1590580'>so</span> <span
  m='1590690'>we</span> <span m='1590810'>can</span> <span
  m='1590930'>break</span> <span m='1591180'>this</span> <span
  m='1591360'>up?</span> </p><p><span m='1591900'>We</span> <span
  m='1592030'>absolutely</span> <span m='1592580'>have</span> <span
  m='1592900'>to</span> <span m='1593480'>use</span> <span
  m='1593800'>both</span> <span m='1593990'>pi</span> <span m='1594310'>f
  and</span> <span m='1594710'>pi</span> <span m='1594890'>b.</span> <span
  m='1595640'>There's</span> <span m='1595810'>no</span> <span
  m='1595930'>getting</span> <span m='1596120'>away</span> <span
  m='1596310'>from</span> <span m='1596490'>that</span> <span
  m='1597150'>because</span> <span m='1597410'>these</span> <span
  m='1597670'>two</span> <span m='1597770'>frontiers</span> <span
  m='1598220'>have just</span> <span m='1599240'>barely</span> <span
  m='1599820'>collided.</span> <span m='1600860'>The</span> <span
  m='1600990'>instant</span> <span m='1601420'>they</span> <span
  m='1601500'>barely</span> <span m='1602060'>collided,</span> <span
  m='1602620'>we've</span> <span m='1602750'>stopped.</span> <span
  m='1603760'>OK?</span> </p><p><span m='1604340'>So</span> <span
  m='1604480'>we</span> <span m='1604560'>can't</span> <span
  m='1604800'>use</span> <span m='1605020'>pi</span> <span m='1605200'>f</span>
  <span m='1605400'>all</span> <span m='1605570'>the</span> <span
  m='1605650'>way</span> <span m='1606380'>from</span> <span m='1606610'>s to 
  t.</span> <span m='1607230'>We</span> <span m='1607300'>can't</span> <span
  m='1607510'>use</span> <span m='1607700'>pi</span> <span m='1607900'>b</span>
  <span m='1608100'>all</span> <span m='1608240'>the</span> <span
  m='1608310'>way</span> <span m='1608480'>from</span> <span m='1608660'>t
  to</span> <span m='1608940'>s.</span> <span m='1609710'>These</span> <span
  m='1609870'>frontiers</span> <span m='1610300'>have</span> <span
  m='1610450'>just</span> <span m='1610840'>barely</span> <span
  m='1611150'>collided.</span> <span m='1611920'>OK?</span> <span
  m='1612930'>So</span> <span m='1613130'>what</span> <span
  m='1613270'>happens</span> <span m='1614450'>if</span> <span
  m='1614630'>w</span> <span m='1615070'>is</span> <span m='1615230'>not</span>
  <span m='1615420'>on</span> <span m='1615500'>the</span> <span
  m='1615570'>shortest</span> <span m='1615900'>path?</span> <span
  m='1616270'>And why</span> <span m='1616610'>is</span> <span
  m='1616750'>that</span> <span m='1616940'>the</span> <span
  m='1617010'>case?</span> <span m='1617640'>Yeah.</span> </p><p></p><p><span
  m='1618326'>AUDIENCE: I just had</span> <span m='1618812'>a question.</span>
  <span m='1619298'>Are all the</span> <span m='1619784'>edge</span> <span
  m='1620270'>weights</span> <span m='1620756'>identical?</span> <span
  m='1621242'>Or are they--</span> </p><p><span m='1621730'>PROFESSOR:
  So,</span> <span m='1621840'>the edge weights</span> <span
  m='1622180'>don't</span> <span m='1622520'>change.</span> <span
  m='1625680'>There</span> <span m='1625810'>are</span> <span
  m='1625840'>no</span> <span m='1628000'>new</span> <span
  m='1628250'>edges.</span> <span m='1628930'>The</span> <span
  m='1629080'>way</span> <span m='1629230'>you</span> <span
  m='1629320'>want</span> <span m='1629450'>to</span> <span
  m='1629510'>think</span> <span m='1629700'>about</span> <span
  m='1629950'>is</span> <span m='1630250'>that,</span> <span
  m='1630760'>you</span> <span m='1630910'>can</span> <span
  m='1631060'>traverse</span> <span m='1632190'>the</span> <span
  m='1632330'>edges</span> <span m='1632780'>backward.</span> <span
  m='1633850'>And</span> <span m='1634110'>so,</span> <span
  m='1637880'>it's</span> <span m='1638030'>not</span> <span m='1638170'>like
  there are  two</span> <span m='1638540'>edges</span> <span
  m='1638850'>here.</span> </p><p><span m='1639020'>Now,</span> <span
  m='1639120'>you</span> <span m='1639180'>could</span> <span
  m='1639330'>fake</span> <span m='1639590'>it,</span> <span
  m='1640100'>and</span> <span m='1640280'>have</span> <span
  m='1640510'>two</span> <span m='1640640'>edges</span> <span
  m='1640930'>with</span> <span m='1641080'>exactly</span> <span
  m='1641460'>the</span> <span m='1641540'>same</span> <span
  m='1641780'>weights</span> <span m='1642140'>over</span> <span
  m='1642360'>here.</span> <span m='1643290'>But</span> <span
  m='1643680'>are</span> <span m='1643770'>you</span> <span
  m='1643870'>saying</span> <span m='1644090'>there are</span> <span
  m='1644370'>edge</span> <span m='1644560'>weights</span> <span
  m='1644850'>in</span> <span m='1645030'>the</span> <span
  m='1645120'>graph,</span> <span m='1645490'>all</span> <span
  m='1645680'>identical</span> <span m='1646250'>across</span> <span
  m='1646670'>the</span> <span m='1646800'>edges?</span> <span m='1647200'>Or
  are</span> <span m='1647460'>you</span> <span m='1647600'>asking</span> <span
  m='1647920'>about</span> <span m='1648130'>the</span> <span
  m='1648200'>forward</span> <span m='1648520'>search</span> <span
  m='1648870'>versus</span> <span m='1649150'>the</span> <span
  m='1649210'>backward</span> <span m='1649600'>search? </span> </p><p><span
  m='1650047'>AUDIENCE: That's what I was asking.</span> <span m='1650494'>Is
  each</span> <span m='1650941'>edge weight</span> <span m='1651390'>the</span>
  <span m='1651650'>same</span> <span m='1652504'>in the</span> <span
  m='1652931'>graph.</span> </p><p><span m='1653360'>PROFESSOR: No.</span> <span
  m='1654090'>They're</span> <span m='1654400'>using</span> <span
  m='1654660'>Dijkstra.</span> <span m='1655130'>The</span> <span
  m='1655600'>edge ways</span> <span m='1656060'>can</span> <span
  m='1656210'>be</span> <span m='1656400'>arbitrary.</span> <span
  m='1657250'>But</span> <span m='1657460'>they're</span> <span
  m='1659260'>non-negative.</span> <span m='1661050'>OK?</span> <span
  m='1661410'>So</span> <span m='1661580'>that's</span> <span
  m='1661790'>the</span> <span m='1661900'>usual</span> <span
  m='1662270'>Dijkstra</span> <span m='1663180'>requirement.</span> <span
  m='1664050'>They</span> <span m='1664270'>could</span> <span
  m='1664390'>be</span> <span m='1664510'>real</span> <span
  m='1664730'>numbers.</span> <span m='1665210'>They</span> <span
  m='1665310'>could</span> <span m='1665320'>be</span> <span
  m='1665740'>irrational</span> <span m='1666210'>numbers.</span> <span
  m='1666620'>They</span> <span m='1666710'>could</span> <span
  m='1666820'>be</span> <span m='1666900'>whatever.</span> <span
  m='1668000'>But</span> <span m='1668090'>they're</span> <span
  m='1668260'>all</span> <span m='1669980'>non-negative.</span> <span
  m='1671190'>All</span> <span m='1671540'>right?</span> </p><p><span
  m='1671970'>Now,</span> <span m='1672650'>in</span> <span
  m='1672830'>the</span> <span m='1672930'>backward</span> <span
  m='1673330'>search</span> <span m='1673670'>and</span> <span
  m='1673740'>the</span> <span m='1673820'>forward</span> <span
  m='1674140'>search--</span> <span m='1674460'>just</span> <span
  m='1674670'>to</span> <span m='1674730'>make</span> <span
  m='1674880'>that</span> <span m='1675050'>clear--</span> <span
  m='1675730'>while</span> <span m='1676020'>I've</span> <span
  m='1676190'>drawn</span> <span m='1676520'>this</span> <span
  m='1676690'>particular</span> <span m='1677070'>edge,</span> <span
  m='1679270'>that</span> <span m='1679560'>weight</span> <span
  m='1680060'>hasn't</span> <span m='1680360'>changed,</span> <span
  m='1681090'>OK?</span> <span m='1681690'>That</span> <span
  m='1681870'>weight</span> <span m='1682170'>had</span> <span
  m='1682320'>better</span> <span m='1682510'>be</span> <span
  m='1682630'>the</span> <span m='1682710'>same.</span> <span
  m='1683620'>OK?</span> <span m='1685140'>All</span> <span
  m='1685250'>right,</span> <span m='1685660'>so</span> <span
  m='1686210'>I'll</span> <span m='1686330'>show you</span> <span
  m='1686570'>an</span> <span m='1686650'>example.</span> </p><p><span
  m='1688270'>And</span> <span m='1689250'>we'll</span> <span
  m='1689400'>take</span> <span m='1689590'>an</span> <span
  m='1689660'>example,</span> <span m='1691590'>a</span> <span
  m='1691690'>fairly</span> <span m='1691950'>straightforward</span> <span
  m='1692380'>example,</span> <span m='1692820'>it</span> <span
  m='1692910'>turns</span> <span m='1693160'>out.</span> <span m='1694630'>It
  took a</span> <span m='1694900'>while</span> <span m='1695170'>to</span> <span
  m='1695240'>concoct</span> <span m='1696280'>this</span> <span
  m='1696480'>five</span> <span m='1696830'>node</span> <span
  m='1697080'>example</span> <span m='1698050'>that</span> <span
  m='1698400'>shows</span> <span m='1698860'>the</span> <span
  m='1700150'>idea</span> <span m='1700580'>here.</span> <span
  m='1702450'>But</span> <span m='1702780'>what</span> <span
  m='1702910'>we're</span> <span m='1703010'>going</span> <span
  m='1703200'>to</span> <span m='1703270'>do</span> <span m='1703610'>is,</span>
  <span m='1704280'>take</span> <span m='1704460'>a</span> <span
  m='1704510'>look</span> <span m='1705660'>at</span> <span
  m='1706820'>the</span> <span m='1706960'>termination</span> <span
  m='1707480'>condition</span> <span m='1707970'>in</span> <span
  m='1708070'>a</span> <span m='1708130'>specific</span> <span
  m='1708650'>case,</span> <span m='1708990'>where we're</span> <span
  m='1709230'>going</span> <span m='1709400'>to</span> <span
  m='1709500'>do</span> <span m='1710080'>this</span> <span
  m='1710400'>alternation</span> <span m='1711690'>of</span> <span
  m='1711830'>forward</span> <span m='1712290'>and</span> <span
  m='1712420'>backward</span> <span m='1712830'>search.</span> <span
  m='1713570'>And</span> <span m='1713790'>we'll see,</span> <span
  m='1714230'>when it</span> <span m='1714400'>terminates,</span> <span
  m='1715390'>as</span> <span m='1715600'>to</span> <span
  m='1715710'>what</span> <span m='1715950'>the</span> <span
  m='1716140'>correct</span> <span m='1717510'>way</span> <span
  m='1717800'>is</span> <span m='1718170'>to</span> <span
  m='1718410'>construct</span> <span m='1718990'>the</span> <span
  m='1719060'>shortest</span> <span m='1719440'>path.</span> <span
  m='1719720'>All</span> <span m='1720135'>right?</span> </p><p><span
  m='1720550'>And,</span> <span m='1720720'>as</span> <span m='1720830'>I</span>
  <span m='1720880'>said</span> <span m='1721060'>before,</span> <span
  m='1721490'>the</span> <span m='1721590'>termination</span> <span
  m='1721930'>condition</span> <span m='1722290'>is</span> <span
  m='1722480'>correct.</span> <span m='1723210'>It's</span> <span
  m='1723330'>not</span> <span m='1723500'>like</span> <span
  m='1723680'>we</span> <span m='1723800'>stop</span> <span
  m='1724170'>too</span> <span m='1724360'>early.</span> <span
  m='1725480'>When</span> <span m='1725630'>one</span> <span
  m='1725790'>of</span> <span m='1725890'>those</span> <span
  m='1727860'>nodes</span> <span m='1728560'>gets</span> <span
  m='1728820'>off</span> <span m='1729080'>from</span> <span
  m='1729280'>Qf</span> <span m='1729740'>and</span> <span
  m='1729870'>Qb,</span> <span m='1730760'>you</span> <span
  m='1730900'>get</span> <span m='1731060'>to</span> <span
  m='1731140'>stop.</span> </p><p><span m='1732440'>So</span> <span
  m='1733290'>that's</span> <span m='1733540'>my</span> <span
  m='1733730'>s,</span> <span m='1735230'>over</span> <span
  m='1735400'>here.</span> <span m='1735890'>And I</span> <span
  m='1735930'>have</span> <span m='1736100'>a</span> <span
  m='1736370'>fairly</span> <span m='1736730'>straightforward</span> <span
  m='1738970'>graph.</span> <span m='1740660'>I have</span> <span
  m='1740840'>5,</span> <span m='1742840'>5,</span> <span m='1744340'>3,</span>
  <span m='1744840'>3,</span> <span m='1745840'>3.</span> <span
  m='1746740'>So</span> <span m='1746950'>we</span> <span
  m='1747030'>don't</span> <span m='1747160'>need</span> <span
  m='1747270'>a</span> <span m='1747310'>computer</span> <span
  m='1747670'>program</span> <span m='1748140'>to</span> <span
  m='1748250'>tell</span> <span m='1748450'>us</span> <span
  m='1748650'>that</span> <span m='1749190'>the</span> <span
  m='1749280'>shortest</span> <span m='1749640'>path</span> <span
  m='1749930'>from</span> <span m='1750120'>s</span> <span m='1750330'>to</span>
  <span m='1750460'>t</span> <span m='1751160'>is</span> <span
  m='1751390'>the</span> <span m='1751480'>path</span> <span
  m='1751870'>with</span> <span m='1752080'>three</span> <span
  m='1752360'>edges</span> <span m='1753660'>that</span> <span
  m='1753960'>goes</span> <span m='1754190'>on</span> <span
  m='1754350'>top,</span> <span m='1754970'>OK,</span> <span
  m='1755180'>which</span> <span m='1755350'>has</span> <span
  m='1755530'>a</span> <span m='1756090'>weight</span> <span
  m='1756360'>of</span> <span m='1756460'>9.</span> </p><p><span
  m='1757690'>All</span> <span m='1757790'>right.</span> <span
  m='1758340'>So</span> <span m='1759590'>this</span> <span
  m='1759930'>is</span> <span m='1760110'>a</span> <span
  m='1760210'>forward</span> <span m='1760560'>search.</span> <span
  m='1763120'>And</span> <span m='1763400'>I'm</span> <span
  m='1763470'>going</span> <span m='1763590'>to</span> <span
  m='1763650'>call</span> <span m='1764870'>all</span> <span
  m='1765030'>of</span> <span m='1765100'>these</span> <span
  m='1765270'>vertices</span> <span m='1765760'>names.</span> <span
  m='1766820'>So</span> <span m='1766920'>I</span> <span m='1767000'>have</span>
  <span m='1767140'>u</span> <span m='1768510'>prime.</span> <span
  m='1769600'>t.</span> <span m='1769880'>et</span> <span
  m='1770040'>cetera.</span> <span m='1771150'>OK?</span> </p><p><span
  m='1772220'>So,</span> <span m='1772470'>in</span> <span
  m='1772570'>the</span> <span m='1772650'>first</span> <span
  m='1772970'>step</span> <span m='1773260'>of</span> <span
  m='1773360'>the</span> <span m='1773440'>forward</span> <span
  m='1773820'>search,</span> <span m='1775790'>I'm</span> <span
  m='1776150'>going</span> <span m='1776290'>to</span> <span
  m='1776340'>be</span> <span m='1776530'>able</span> <span
  m='1776750'>to</span> <span m='1777560'>set--</span> <span
  m='1778570'>oh,</span> <span m='1778870'>I'm</span> <span
  m='1778980'>sorry.</span> <span m='1779160'>This</span> <span
  m='1779300'>one</span> <span m='1779430'>is a</span> <span
  m='1779540'>w.</span> <span m='1780930'>I'm</span> <span
  m='1781060'>going</span> <span m='1781180'>to</span> <span
  m='1781220'>be</span> <span m='1781270'>able</span> <span
  m='1781420'>to</span> <span m='1781490'>set</span> <span m='1782630'>df</span>
  <span m='1783520'>w</span> <span m='1784920'>equals</span> <span
  m='1785360'>5.</span> <span m='1787060'>And</span> <span m='1788260'>df</span>
  <span m='1788850'>u</span> <span m='1789930'>equals</span> <span
  m='1790360'>3.</span> <span m='1791220'>And,</span> <span
  m='1791520'>obviously,</span> <span m='1792710'>df</span> <span
  m='1793850'>of</span> <span m='1794090'>s</span> <span
  m='1794780'>equals</span> <span m='1795100'>0.</span> <span
  m='1795980'>And</span> <span m='1796290'>I'm not</span> <span
  m='1796350'>going</span> <span m='1796450'>to</span> <span
  m='1796490'>bother</span> <span m='1796890'>writing</span> <span
  m='1797200'>the</span> <span m='1797330'>infinities.</span> <span
  m='1797750'>It's</span> <span m='1798180'>just</span> <span
  m='1798360'>going</span> <span m='1798450'>to</span> <span
  m='1798520'>clutter</span> <span m='1798820'>up</span> <span
  m='1798940'>the</span> <span m='1799010'>board,</span> <span
  m='1799410'>all</span> <span m='1799800'>right?</span> </p><p><span
  m='1800400'>So,</span> <span m='1800910'>stop</span> <span m='1801110'>me if
  you</span> <span m='1801380'>have</span> <span m='1801810'>questions</span>
  <span m='1802710'>on</span> <span m='1803020'>anything</span> <span
  m='1803330'>I'm</span> <span m='1803410'>writing</span> <span
  m='1803710'>here.</span> <span m='1805740'>So</span> <span
  m='1805900'>that's</span> <span m='1806320'>a</span> <span
  m='1806450'>forward</span> <span m='1806780'>search.</span> <span
  m='1808730'>Now,</span> <span m='1809670'>let's</span> <span
  m='1809940'>do</span> <span m='1810080'>the</span> <span
  m='1810210'>first</span> <span m='1810530'>step</span> <span
  m='1810830'>of</span> <span m='1810950'>backward</span> <span
  m='1811410'>search,</span> <span m='1812490'>right?</span> <span
  m='1812940'>Alternate,</span> <span m='1813410'>remember?</span> </p><p><span
  m='1814440'>Alternate</span> <span m='1814830'>forward</span> <span
  m='1815120'>search,</span> <span m='1815440'>backward</span> <span
  m='1815770'>search,</span> <span m='1816190'>forward</span> <span
  m='1816470'>search,</span> <span m='1816760'>backward</span> <span
  m='1817120'>search.</span> <span m='1817890'>And</span> <span
  m='1818150'>I'm</span> <span m='1818220'>just</span> <span
  m='1818340'>going</span> <span m='1818420'>to</span> <span
  m='1818470'>write</span> <span m='1818660'>this</span> <span
  m='1818800'>out</span> <span m='1818930'>again,</span> <span
  m='1819170'>so</span> <span m='1819280'>bear</span> <span
  m='1819500'>with</span> <span m='1819620'>me,</span> <span
  m='1820120'>because</span> <span m='1820260'>I</span> <span
  m='1820330'>think</span> <span m='1820460'>it'd</span> <span
  m='1820580'>be</span> <span m='1820690'>clearer</span> <span
  m='1821500'>if</span> <span m='1821700'>you</span> <span
  m='1822020'>see</span> <span m='1822250'>this</span> <span
  m='1822450'>graph</span> <span m='1823270'>many</span> <span
  m='1823550'>times.</span> <span m='1826380'>As</span> <span
  m='1826590'>opposed</span> <span m='1826930'>to</span> <span
  m='1827430'>my</span> <span m='1827680'>erasing</span> <span
  m='1829470'>what</span> <span m='1829600'>I've</span> <span
  m='1829700'>written.</span> </p><p><span m='1830620'>So</span> <span
  m='1830820'>I've</span> <span m='1830930'>got</span> <span
  m='1831080'>an</span> <span m='1831150'>s,</span> <span
  m='1831310'>here.</span> <span m='1832296'>t</span> <span
  m='1832790'>there.</span> <span m='1834030'>u.</span> <span
  m='1834580'>u</span> <span m='1834830'>prime.</span> <span
  m='1835560'>w.</span> <span m='1836280'>And</span> <span
  m='1836520'>I'm</span> <span m='1836630'>going</span> <span
  m='1836720'>to</span> <span m='1836760'>hash</span> <span
  m='1837130'>this</span> <span m='1837340'>vertex</span> <span
  m='1838740'>vertically</span> <span m='1839790'>because</span> <span
  m='1840040'>that's</span> <span m='1840220'>my</span> <span
  m='1840360'>backward</span> <span m='1840750'>search.</span> <span
  m='1841600'>And</span> <span m='1842540'>db</span> <span m='1843950'>of</span>
  <span m='1844060'>t</span> <span m='1845010'>equals</span> <span
  m='1845460'>0.</span> <span m='1846690'>OK?</span> <span
  m='1847340'>And</span> <span m='1847470'>I'm</span> <span
  m='1847540'>going</span> <span m='1847640'>to</span> <span
  m='1847690'>follow</span> <span m='1848050'>this</span> <span
  m='1848520'>backward,</span> <span m='1849760'>and</span> <span
  m='1850020'>this</span> <span m='1850240'>backward.</span> </p><p><span
  m='1851470'>And</span> <span m='1851670'>my</span> <span
  m='1851810'>weights</span> <span m='1852200'>are</span> <span
  m='1852300'>the</span> <span m='1852390'>same.</span> <span
  m='1853810'>It's</span> <span m='1854160'>the</span> <span
  m='1854360'>same</span> <span m='1854590'>graph.</span> <span
  m='1855590'>So</span> <span m='1855920'>I'm</span> <span
  m='1856080'>going</span> <span m='1856190'>to</span> <span
  m='1856230'>have</span> <span m='1856520'>d of</span> <span
  m='1857710'>b</span> <span m='1858680'>u</span> <span m='1858950'>prime</span>
  <span m='1860240'>equals</span> <span m='1861600'>3.</span> <span
  m='1863544'>And</span> <span m='1864030'>db</span> <span m='1864580'>of</span>
  <span m='1864820'>w</span> <span m='1866190'>equals</span> <span
  m='1866710'>5.</span> <span m='1867770'>And</span> <span m='1868420'>I</span>
  <span m='1868570'>haven't</span> <span m='1868880'>seen</span> <span
  m='1870180'>u</span> <span m='1870460'>yet.</span> <span m='1871050'>I</span>
  <span m='1871180'>haven't</span> <span m='1871460'>seen</span> <span
  m='1871700'>s</span> <span m='1871980'>yet.</span> <span
  m='1873220'>And</span> <span m='1873410'>so,</span> <span
  m='1874060'>all</span> <span m='1874270'>I've</span> <span
  m='1874370'>done</span> <span m='1874570'>is</span> <span
  m='1874670'>mark</span> <span m='1875010'>these</span> <span
  m='1875230'>two.</span> <span m='1875790'>All</span> <span
  m='1876150'>right?</span> </p><p><span m='1877060'>So</span> <span
  m='1877210'>far,</span> <span m='1877410'>so</span> <span
  m='1877470'>good?</span> <span m='1878370'>Again,</span> <span
  m='1878750'>stop</span> <span m='1878960'>me</span> <span
  m='1879060'>if</span> <span m='1879130'>you</span> <span
  m='1879210'>have</span> <span m='1879830'>questions.</span> <span
  m='1881880'>We've got,</span> <span m='1883720'>obviously,</span> <span
  m='1884250'>a</span> <span m='1884380'>couple</span> <span
  m='1884620'>more</span> <span m='1884750'>steps</span> <span
  m='1885070'>to</span> <span m='1885160'>go</span> <span
  m='1885330'>here.</span> <span m='1886870'>And</span> <span
  m='1894170'>let's</span> <span m='1894360'>keep</span> <span
  m='1894520'>going.</span> <span m='1895280'>So</span> <span
  m='1895450'>now</span> <span m='1895610'>we</span> <span m='1895720'>do</span>
  <span m='1895960'>a</span> <span m='1896140'>forward</span> <span
  m='1896450'>search</span> <span m='1896750'>again.</span> </p><p><span
  m='1909690'>Yeah, that's fine.</span> <span m='1910430'>That's</span> <span
  m='1910630'>this</span> <span m='1910830'>hash</span> <span
  m='1911110'>that</span> <span m='1911340'>way,</span> <span
  m='1911540'>just</span> <span m='1912100'>to</span> <span
  m='1912160'>make</span> <span m='1912310'>sure.</span> <span
  m='1913320'>This</span> <span m='1913470'>is</span> <span
  m='1913610'>s,</span> <span m='1914080'>u,</span> <span m='1914550'>u</span>
  <span m='1915020'>prime,</span> <span m='1916140'>w,</span> <span
  m='1916580'>t. </span> <span m='1923020'>And</span> <span
  m='1923170'>what</span> <span m='1923310'>I</span> <span
  m='1923360'>have</span> <span m='1923630'>now</span> <span
  m='1923910'>is,</span> <span m='1924790'>I'm</span> <span
  m='1924950'>going</span> <span m='1925760'>process</span> <span
  m='1926290'>this</span> <span m='1926520'>vertex</span> <span
  m='1927000'>in</span> <span m='1927090'>the</span> <span
  m='1927170'>forward</span> <span m='1927510'>search</span> <span
  m='1928280'>because</span> <span m='1928500'>I</span> <span
  m='1928570'>have</span> <span m='1928670'>a</span> <span
  m='1928720'>choice</span> <span m='1929140'>in</span> <span
  m='1929190'>the</span> <span m='1929270'>forward</span> <span
  m='1929570'>search to</span> <span m='1930000'>either</span> <span
  m='1930140'>pick</span> <span m='1931080'>w or</span> <span
  m='1931526'>w.</span> </p><p><span m='1932420'>This</span> <span
  m='1932610'>clearly</span> <span m='1932940'>has</span> <span
  m='1933170'>lower</span> <span m='1933460'>priority</span> <span
  m='1934480'>because</span> <span m='1934870'>df w</span> <span
  m='1935750'>equals</span> <span m='1936550'>5.</span> <span
  m='1937380'>And</span> <span m='1937920'>df</span> <span m='1938610'>of</span>
  <span m='1938880'>u</span> <span m='1939340'>equals</span> <span
  m='1939830'>3.</span> <span m='1940660'>So</span> <span
  m='1940950'>extract-min</span> <span m='1941730'>is</span> <span
  m='1941840'>obviously</span> <span m='1942160'>going</span> <span
  m='1942290'>to</span> <span m='1942380'>pick</span> <span
  m='1942570'>u.</span> <span m='1943600'>And</span> <span
  m='1943990'>it's</span> <span m='1944130'>going</span> <span
  m='1944240'>to</span> <span m='1944290'>process</span> <span
  m='1944800'>this</span> <span m='1946070'>edge</span> <span
  m='1946400'>now,</span> <span m='1946850'>after</span> <span
  m='1947130'>extract-min.</span> <span m='1948340'>And</span> <span
  m='1948700'>I'm</span> <span m='1948770'>going</span> <span
  m='1948970'>have</span> <span m='1949220'>df</span> <span
  m='1949680'>of</span> <span m='1950110'>u</span> <span
  m='1950270'>prime</span> <span m='1951420'>equals</span> <span
  m='1951760'>6.</span> <span m='1953160'>OK?</span> </p><p><span
  m='1953590'>AUDIENCE: It's 3</span> <span m='1954077'>over there.</span>
  </p><p><span m='1955540'>PROFESSOR: Oh,</span> <span m='1955730'>it's</span>
  <span m='1955910'>3 over there.</span> <span m='1956020'>Thanks.</span> <span
  m='1956836'>Good.</span> <span m='1958660'>So,</span> <span m='1959300'>so
  far,</span> <span m='1959630'>so</span> <span m='1959770'>good?</span> <span
  m='1960740'>Yeah?</span> <span m='1961480'>All</span> <span
  m='1961560'>right.</span> <span m='1961920'>So</span> <span
  m='1962450'>now,</span> <span m='1963020'>I</span> <span m='1963150'>go</span>
  <span m='1963330'>to</span> <span m='1963800'>the</span> <span
  m='1964140'>backward</span> <span m='1964500'>search.</span> <span
  m='1975170'>And</span> <span m='1975250'>again,</span> <span
  m='1975470'>I</span> <span m='1975530'>have</span> <span m='1976790'>s,</span>
  <span m='1977890'>t,</span> <span m='1978510'>u,</span> <span
  m='1979040'>u</span> <span m='1979330'>prime,</span> <span
  m='1980500'>w.</span> </p><p><span m='1981550'>I'm</span> <span
  m='1981660'>going</span> <span m='1981770'>to</span> <span m='1981890'>go
  ahead</span> <span m='1982080'>and</span> <span m='1982880'>hash</span> <span
  m='1983720'>this.</span> <span m='1984190'>This</span> <span
  m='1984660'>has</span> <span m='1984810'>been</span> <span
  m='1985460'>hashed</span> <span m='1985800'>horizontally.</span> <span
  m='1986492'>The</span> <span m='1986840'>hash</span> <span
  m='1987090'>horizontally</span> <span m='1987610'>means</span> <span
  m='1987870'>that</span> <span m='1988030'>it's</span> <span
  m='1988170'>been</span> <span m='1988320'>removed</span> <span
  m='1988680'>from</span> <span m='1988860'>Qf.</span> <span
  m='1989780'>The</span> <span m='1989880'>hash</span> <span
  m='1990170'>vertically</span> <span m='1990600'>means</span> <span
  m='1990860'>that</span> <span m='1990990'>it's</span> <span
  m='1991130'>been</span> <span m='1991290'>removed</span> <span
  m='1991650'>from</span> <span m='1991870'>Qb.</span> </p><p><span
  m='1993220'>And</span> <span m='1993440'>so,</span> <span
  m='1993680'>when</span> <span m='1994170'>I</span> <span
  m='1994270'>look</span> <span m='1994410'>at</span> <span
  m='1994500'>this,</span> <span m='1995270'>and</span> <span
  m='1995390'>I</span> <span m='1995450'>do</span> <span m='1995630'>a</span>
  <span m='1995690'>backward</span> <span m='1996100'>search,</span> <span
  m='1997370'>I'm</span> <span m='1997550'>going</span> <span
  m='1997700'>to</span> <span m='1998460'>hash</span> <span
  m='1998790'>this.</span> <span m='2000180'>And</span> <span
  m='2000340'>I'm</span> <span m='2000410'>going</span> <span
  m='2000530'>to</span> <span m='2000590'>set</span> <span m='2001080'>db</span>
  <span m='2001844'>of</span> <span m='2002226'>u</span> <span
  m='2002610'>prime</span> <span m='2003680'>equals</span> <span
  m='2004150'>3.</span> <span m='2005360'>And</span> <span m='2006920'>I</span>
  <span m='2007040'>have</span> <span m='2007460'>db</span> <span
  m='2008312'>of</span> <span m='2008738'>w</span> <span
  m='2010000'>equals</span> <span m='2010410'>5.</span> <span
  m='2016370'>So,</span> <span m='2016560'>that</span> <span
  m='2016720'>I</span> <span m='2016800'>already</span> <span
  m='2017100'>had.</span> </p><p><span m='2018600'>And</span> <span
  m='2018810'>so,</span> <span m='2019320'>when</span> <span
  m='2019470'>I</span> <span m='2019520'>have</span> <span m='2019910'>db</span>
  <span m='2020340'>of</span> <span m='2020500'>w</span> <span
  m='2020830'>equals</span> <span m='2021160'>5</span> <span
  m='2022050'>and</span> <span m='2022270'>db</span> <span m='2022525'>of</span>
  <span m='2022780'>u</span> <span m='2022940'>prime</span> <span
  m='2023340'>equals</span> <span m='2023700'>3,</span> <span
  m='2024660'>then,</span> <span m='2025590'>obviously,</span> <span
  m='2025920'>I'm</span> <span m='2026000'>going</span> <span
  m='2026100'>to</span> <span m='2026170'>pick</span> <span
  m='2026430'>the</span> <span m='2026530'>one</span> <span
  m='2026830'>with</span> <span m='2029190'>the</span> <span
  m='2030130'>min</span> <span m='2031810'>priority.</span> <span
  m='2033050'>This</span> <span m='2033420'>corresponds</span> <span
  m='2033950'>to</span> <span m='2034680'>this</span> <span
  m='2034950'>one.</span> <span m='2035930'>And</span> <span
  m='2036740'>what</span> <span m='2036880'>it's</span> <span
  m='2036980'>going</span> <span m='2037140'>to</span> <span
  m='2037220'>do</span> <span m='2037520'>is,</span> <span
  m='2038300'>it's</span> <span m='2038510'>going</span> <span
  m='2038670'>to</span> <span m='2038710'>go</span> <span
  m='2038930'>process</span> <span m='2039380'>that</span> <span m='2039700'>and
  set</span> <span m='2040260'>db</span> <span m='2040690'>of</span> <span
  m='2041000'>u</span> <span m='2041900'>equals</span> <span
  m='2042240'>6.</span> <span m='2043175'>All</span> <span
  m='2043550'>right?</span> </p><p><span m='2044460'>So</span> <span
  m='2044690'>what</span> <span m='2044820'>happened</span> <span
  m='2045090'>here</span> <span m='2045310'>simply</span> <span
  m='2045700'>was</span> <span m='2046650'>that</span> <span
  m='2047120'>I</span> <span m='2047300'>picked</span> <span
  m='2047800'>this</span> <span m='2048080'>vertex</span> <span
  m='2048679'>off</span> <span m='2049034'>of</span> <span m='2049389'>Qb</span>
  <span m='2050650'>because</span> <span m='2050870'>that</span> <span
  m='2051000'>was</span> <span m='2051100'>the</span> <span
  m='2051190'>min</span> <span m='2051380'>priority.</span> <span
  m='2052310'>And</span> <span m='2052679'>all</span> <span m='2052800'>I</span>
  <span m='2052929'>did</span> <span m='2053170'>was</span> <span
  m='2053630'>relax</span> <span m='2054570'>this</span> <span
  m='2054760'>particular</span> <span m='2055190'>edge</span> <span
  m='2055560'>in</span> <span m='2055690'>the</span> <span
  m='2055800'>backward</span> <span m='2056239'>direction.</span> <span
  m='2057080'>And</span> <span m='2057260'>said</span> <span
  m='2057510'>db</span> <span m='2057830'>u</span> <span
  m='2058150'>equals</span> <span m='2058489'>6.</span> </p><p><span
  m='2059399'>All</span> <span m='2059870'>right?</span> <span
  m='2060170'>Almost</span> <span m='2060489'>there.</span> <span
  m='2061610'>Any</span> <span m='2061780'>questions</span> <span
  m='2062139'>so</span> <span m='2062280'>far?</span> <span
  m='2062790'>Any</span> <span m='2063260'>bugs</span> <span
  m='2063810'>you</span> <span m='2063889'>noticed</span> <span
  m='2064190'>so</span> <span m='2064350'>far,</span> <span
  m='2064620'>in</span> <span m='2065050'>what I've written?</span> <span
  m='2065889'>Yeah,</span> <span m='2066050'>back</span> <span
  m='2066219'>there,</span> <span m='2066389'>question.</span> </p><p><span
  m='2067727'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='2070199'>PROFESSOR:
  OK.</span> <span m='2071065'>Good.</span> <span m='2071500'>So</span> <span
  m='2071795'>people</span> <span m='2072090'>agree</span> <span
  m='2072290'>with</span> <span m='2072409'>this.</span> <span
  m='2072940'>All</span> <span m='2073050'>right,</span> <span
  m='2073239'>one</span> <span m='2073409'>more.</span> <span
  m='2074520'>One</span> <span m='2074730'>more</span> <span
  m='2074929'>board</span> <span m='2075860'>to</span> <span
  m='2075960'>draw.</span> <span m='2076710'>And</span> <span
  m='2077680'>we'll</span> <span m='2078030'>be</span> <span
  m='2078120'>done.</span> <span m='2078500'>We will</span> <span
  m='2078670'>have</span> <span m='2078830'>terminated.</span> <span
  m='2087409'>All</span> <span m='2087489'>right,</span> <span
  m='2087800'>so</span> <span m='2089020'>getting</span> <span
  m='2089290'>pretty</span> <span m='2089480'>close.</span> </p><p></p><p><span
  m='2106490'>So</span> <span m='2106720'>I'm</span> <span
  m='2106860'>set</span> <span m='2107060'>up</span> <span
  m='2107290'>this</span> <span m='2107530'>way.</span> <span m='2109050'>Oh,
  shoot.</span> <span m='2110360'>Sorry.</span> <span m='2113350'>This</span>
  <span m='2113520'>is</span> <span m='2113680'>horizontal.</span> <span
  m='2121290'>So,</span> <span m='2121460'>now</span> <span
  m='2121630'>I'm</span> <span m='2121780'>looking</span> <span
  m='2122070'>at</span> <span m='2122190'>it,</span> <span
  m='2122770'>and</span> <span m='2125090'>I've</span> <span
  m='2125310'>taken</span> <span m='2125590'>care</span> <span
  m='2125910'>of</span> <span m='2126680'>these</span> <span
  m='2127040'>two.</span> <span m='2127840'>And</span> <span
  m='2128090'>I'm</span> <span m='2128200'>talking</span> <span
  m='2128430'>about</span> <span m='2128610'>the</span> <span
  m='2128690'>forward</span> <span m='2129060'>search</span> <span
  m='2129400'>here.</span> <span m='2129820'>So</span> <span
  m='2129960'>this</span> <span m='2130100'>is,</span> <span
  m='2130140'>again,</span> <span m='2130390'>the</span> <span
  m='2130500'>forward.</span> <span m='2132060'>And</span> <span
  m='2132250'>that's</span> <span m='2132460'>the</span> <span
  m='2132550'>backward.</span> </p><p><span m='2134740'>And now</span> <span
  m='2135000'>I'm</span> <span m='2135180'>doing</span> <span
  m='2135360'>a</span> <span m='2135420'>forward</span> <span
  m='2135760'>again.</span> <span m='2137730'>And</span> <span
  m='2137990'>my</span> <span m='2138580'>only</span> <span
  m='2138870'>choice,</span> <span m='2139260'>now,</span> <span
  m='2139820'>is</span> <span m='2140070'>to</span> <span
  m='2140190'>pick</span> <span m='2140550'>the</span> <span
  m='2140650'>w</span> <span m='2141016'>vertex</span> <span
  m='2142060'>off</span> <span m='2142410'>of</span> <span
  m='2142510'>Qf.</span> <span m='2143840'>Right?</span> <span
  m='2144110'>Because</span> <span m='2144500'>df</span> <span
  m='2146080'>w</span> <span m='2146480'>equals</span> <span
  m='2146900'>5.</span> <span m='2147900'>And</span> <span
  m='2148490'>this</span> <span m='2148710'>one</span> <span
  m='2148850'>has</span> <span m='2148970'>already</span> <span
  m='2149240'>been</span> <span m='2149410'>processed.</span> <span
  m='2150450'>df</span> <span m='2150850'>of</span> <span m='2150980'>u</span>
  <span m='2151260'>equals</span> <span m='2151770'>3.</span> <span
  m='2152530'>But</span> <span m='2152660'>I've</span> <span
  m='2152780'>hashed</span> <span m='2153120'>that.</span> <span
  m='2154000'>And</span> <span m='2154190'>so</span> <span
  m='2154270'>I've</span> <span m='2154390'>gone</span> <span
  m='2154570'>ahead</span> <span m='2154780'>and</span> <span
  m='2155460'>processed</span> <span m='2155900'>that</span> <span
  m='2156130'>vertex.</span> </p><p><span m='2158100'>And</span> <span
  m='2158950'>this</span> <span m='2159200'>one,</span> <span
  m='2159740'>df</span> <span m='2161165'>of u</span> <span
  m='2161640'>prime</span> <span m='2162700'>equals</span> <span
  m='2163020'>6.</span> <span m='2163940'>So,</span> <span m='2165600'>in</span>
  <span m='2166170'>Qf,</span> <span m='2166580'>I</span> <span
  m='2166630'>would</span> <span m='2166730'>be</span> <span
  m='2166830'>comparing</span> <span m='2167290'>u</span> <span
  m='2167500'>prime</span> <span m='2168410'>and</span> <span
  m='2168640'>w.</span> <span m='2169550'>And</span> <span m='2169750'>I</span>
  <span m='2169780'>would</span> <span m='2169960'>take</span> <span
  m='2170140'>w,</span> <span m='2171200'>OK?</span> <span
  m='2172330'>People</span> <span m='2172550'>buy</span> <span
  m='2172680'>that?</span> <span m='2173860'>That's</span> <span
  m='2174460'>because,</span> <span m='2175040'>I</span> <span
  m='2175100'>guess</span> <span m='2175230'>you</span> <span
  m='2175310'>by</span> <span m='2175530'>the</span> <span
  m='2175630'>fact</span> <span m='2175880'>that</span> <span
  m='2176040'>5</span> <span m='2176290'>is</span> <span m='2176420'>less</span>
  <span m='2176630'>than</span> <span m='2176760'>6.</span> <span
  m='2177720'>I</span> <span m='2177830'>hope.</span> </p><p><span
  m='2179240'>So</span> <span m='2179830'>that's</span> <span
  m='2180010'>what</span> <span m='2180130'>happens</span> <span
  m='2181480'>in</span> <span m='2181900'>the</span> <span m='2182590'>step
  of</span> <span m='2182930'>forward</span> <span m='2183290'>search.</span>
  <span m='2184240'>And</span> <span m='2185220'>then</span> <span
  m='2185400'>you</span> <span m='2186040'>go</span> <span
  m='2186280'>ahead</span> <span m='2186490'>and</span> <span
  m='2187190'>process</span> <span m='2187650'>this.</span> <span
  m='2188800'>You're</span> <span m='2188980'>going</span> <span
  m='2189140'>to</span> <span m='2189220'>set</span> <span m='2191628'>df</span>
  <span m='2193060'>of</span> <span m='2193270'>t</span> <span
  m='2194270'>to</span> <span m='2194340'>be</span> <span m='2194490'>10.</span>
  <span m='2196030'>OK?</span> </p><p><span m='2197080'>And</span> <span
  m='2197210'>now</span> <span m='2197380'>you're</span> <span
  m='2197540'>starting</span> <span m='2197860'>to</span> <span
  m='2197930'>see</span> <span m='2198610'>why</span> <span
  m='2198760'>there</span> <span m='2198860'>may</span> <span
  m='2199000'>be</span> <span m='2199140'>a</span> <span m='2199190'>bit</span>
  <span m='2199310'>of</span> <span m='2199390'>a</span> <span
  m='2199460'>problem</span> <span m='2200390'>with</span> <span
  m='2200630'>our</span> <span m='2201180'>shortest</span> <span
  m='2201580'>path</span> <span m='2201820'>computation,</span> <span
  m='2203190'>right?</span> <span m='2203390'>Maybe.</span> <span
  m='2204720'>All</span> <span m='2204780'>right?</span> <span
  m='2205500'>Everything</span> <span m='2205760'>good?</span> <span
  m='2206010'>All</span> <span m='2206460'>right.</span> </p><p><span
  m='2206770'>So</span> <span m='2208000'>what</span> <span m='2208240'>have
  I</span> <span m='2208320'>done</span> <span m='2208500'>here?</span> <span
  m='2209020'>I've</span> <span m='2209190'>removed</span> <span
  m='2210590'>w</span> <span m='2212770'>from Qf.</span> <span
  m='2214700'>OK.</span> <span m='2215460'>I've</span> <span
  m='2215570'>removed</span> <span m='2215920'>w</span> <span
  m='2216270'>from</span> <span m='2216480'>Qf.</span> <span
  m='2217375'>All</span> <span m='2217770'>right.</span> <span
  m='2218000'>Now,</span> <span m='2218140'>let's</span> <span
  m='2218370'>look</span> <span m='2218490'>at</span> <span
  m='2218550'>the</span> <span m='2218610'>last</span> <span
  m='2218890'>step</span> <span m='2219150'>here,</span> <span
  m='2220000'>of</span> <span m='2220200'>the</span> <span
  m='2220270'>backward</span> <span m='2220640'>search.</span>
  </p><p></p><p><span m='2229890'>s,</span> <span m='2230170'>t.</span> <span
  m='2234370'>And</span> <span m='2234530'>so,</span> <span
  m='2234910'>this</span> <span m='2235140'>was</span> <span
  m='2235330'>hashed.</span> <span m='2236190'>That</span> <span
  m='2236370'>was</span> <span m='2236530'>hashed.</span> <span
  m='2242580'>And,</span> <span m='2242800'>if</span> <span m='2242900'>I</span>
  <span m='2242950'>look</span> <span m='2243120'>at</span> <span
  m='2243170'>what</span> <span m='2243310'>I</span> <span
  m='2243380'>have</span> <span m='2243590'>here,</span> <span
  m='2244560'>I</span> <span m='2244620'>have</span> <span m='2246310'>db</span>
  <span m='2248932'>u</span> <span m='2249370'>prime</span> <span
  m='2250080'>equals</span> <span m='2250450'>3.</span> <span
  m='2251790'>df</span> <span m='2253920'>u</span> <span
  m='2254350'>prime</span> <span m='2255050'>equals</span> <span
  m='2255260'>6.</span> <span m='2256790'>This</span> <span
  m='2257060'>was</span> <span m='2257430'>df</span> <span m='2258885'>w</span>
  <span m='2259370'>equals</span> <span m='2259850'>5.</span> <span
  m='2261130'>db</span> <span m='2261800'>w</span> <span
  m='2263060'>equals</span> <span m='2263460'>5.</span> <span
  m='2265250'>And</span> <span m='2265440'>so</span> <span m='2265570'>on</span>
  <span m='2265710'>and</span> <span m='2265800'>so</span> <span
  m='2265950'>forth.</span> </p><p><span m='2266630'>Again,</span> <span
  m='2266800'>you</span> <span m='2266940'>compare</span> <span
  m='2268290'>w.</span> <span m='2268910'>And</span> <span
  m='2269030'>you</span> <span m='2269120'>see</span> <span
  m='2269310'>that</span> <span m='2269430'>db</span> <span m='2269790'>w</span>
  <span m='2270120'>equals</span> <span m='2270450'>5.</span> <span
  m='2271330'>And</span> <span m='2271790'>df</span> <span m='2272030'>u</span>
  <span m='2272370'>prime</span> <span m='2272730'>equals</span> <span
  m='2273080'>6.</span> <span m='2273880'>So</span> <span
  m='2274030'>therefore,</span> <span m='2274530'>you</span> <span
  m='2274660'>will</span> <span m='2274810'>pick</span> <span
  m='2276200'>w.</span> <span m='2277655'>OK?</span> </p><p><span
  m='2278930'>You</span> <span m='2279060'>will</span> <span
  m='2279160'>pick</span> <span m='2279360'>w,</span> <span
  m='2279910'>and</span> <span m='2280130'>remove</span> <span
  m='2280410'>it</span> <span m='2280530'>from</span> <span
  m='2280770'>Qf.</span> <span m='2281990'>So</span> <span
  m='2283140'>remove</span> <span m='2284760'>w</span> <span
  m='2285220'>from</span> <span m='2285560'>Qf. </span> <span
  m='2287620'>All</span> <span m='2287700'>right?</span> <span
  m='2288340'>And</span> <span m='2288790'>process</span> <span
  m='2289260'>it.</span> <span m='2290050'>And</span> <span
  m='2290550'>what</span> <span m='2290740'>you</span> <span
  m='2290820'>end</span> <span m='2291040'>up</span> <span
  m='2291220'>with</span> <span m='2291520'>is</span> <span
  m='2292360'>df</span> <span m='2293810'>of</span> <span m='2294000'>s</span>
  <span m='2294950'>equals</span> <span m='2295400'>10.</span> <span
  m='2297080'>OK?</span> </p><p><span m='2298270'>That's</span> <span
  m='2298430'>what</span> <span m='2298570'>you</span> <span
  m='2298660'>get</span> <span m='2299120'>because</span> <span
  m='2299560'>this</span> <span m='2299690'>is</span> <span m='2299820'>a</span>
  <span m='2299890'>5.</span> <span m='2301030'>And</span> <span
  m='2301140'>that's</span> <span m='2301240'>a 5.</span> <span
  m='2304520'>OK?</span> <span m='2306155'>People</span> <span
  m='2306470'>see</span> <span m='2306560'>the</span> <span
  m='2306660'>problem</span> <span m='2306950'>here?</span> <span
  m='2308360'>What's</span> <span m='2308560'>the</span> <span
  m='2308630'>problem?</span> <span m='2310110'>Someone</span> <span
  m='2310300'>articulate</span> <span m='2310585'>the</span> <span
  m='2310870'>problem.</span> </p><p><span m='2311715'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='2313080'>PROFESSOR: Yeah.</span> <span
  m='2313490'>I mean,</span> <span m='2314020'>so,</span> <span
  m='2314180'>what</span> <span m='2314350'>I</span> <span
  m='2314870'>have</span> <span m='2315050'>so</span> <span
  m='2315200'>far</span> <span m='2315530'>is,</span> <span
  m='2316110'>I've</span> <span m='2316570'>terminated.</span> <span
  m='2317890'>But</span> <span m='2318130'>it</span> <span
  m='2318270'>looks</span> <span m='2318590'>like</span> <span
  m='2319890'>I</span> <span m='2320080'>end</span> <span m='2320280'>up</span>
  <span m='2320450'>with</span> <span m='2320670'>d of</span> <span
  m='2321160'>s.</span> <span m='2321650'>If</span> <span m='2321790'>I</span>
  <span m='2321840'>look</span> <span m='2322090'>at</span> <span
  m='2322170'>it</span> <span m='2322910'>from</span> <span m='2323130'>a</span>
  <span m='2323190'>standpoint</span> <span m='2323690'>of</span> <span
  m='2324260'>the</span> <span m='2324380'>forward</span> <span
  m='2325920'>weight,</span> <span m='2326880'>I</span> <span
  m='2326980'>got</span> <span m='2327120'>a</span> <span m='2327170'>10</span>
  <span m='2328280'>for</span> <span m='2328760'>t.</span> </p><p><span
  m='2329550'>I</span> <span m='2329640'>get</span> <span m='2329900'>db</span>
  <span m='2330243'>t</span> <span m='2330930'>equals</span> <span
  m='2331350'>10.</span> <span m='2332035'>If</span> <span m='2332380'>I</span>
  <span m='2332450'>look</span> <span m='2332800'>from</span> <span
  m='2332950'>a</span> <span m='2333000'>standpoint</span> <span
  m='2333440'>of</span> <span m='2333520'>the</span> <span
  m='2333590'>backward</span> <span m='2334110'>weight,</span> <span
  m='2334890'>I</span> <span m='2335010'>get</span> <span m='2335270'>db</span>
  <span m='2335636'>s</span> <span m='2336370'>equals</span> <span
  m='2336760'>10.</span> <span m='2337710'>OK?</span> <span
  m='2338020'>And</span> <span m='2338220'>we</span> <span
  m='2338320'>all</span> <span m='2338520'>know</span> <span
  m='2338740'>that</span> <span m='2338950'>the</span> <span
  m='2339270'>shortest</span> <span m='2339500'>path</span> <span
  m='2339740'>should</span> <span m='2339880'>be</span> <span
  m='2339980'>9.</span> <span m='2341080'>OK.</span> </p><p><span
  m='2341870'>So</span> <span m='2342140'>what</span> <span
  m='2342260'>happened</span> <span m='2342540'>here?</span> <span
  m='2343250'>Well,</span> <span m='2343510'>we</span> <span
  m='2343660'>terminated</span> <span m='2344200'>according</span> <span
  m='2344560'>to</span> <span m='2344660'>this</span> <span
  m='2344830'>condition.</span> <span m='2345760'>We</span> <span
  m='2345890'>terminated</span> <span m='2346810'>when</span> <span
  m='2347030'>w</span> <span m='2347410'>was</span> <span
  m='2347610'>pulled</span> <span m='2347940'>off</span> <span
  m='2348580'>from</span> <span m='2348930'>Qf</span> <span
  m='2349500'>and</span> <span m='2349830'>Qb</span> <span
  m='2350730'>because</span> <span m='2350870'>that</span> <span
  m='2351010'>was</span> <span m='2351290'>the</span> <span
  m='2351480'>short</span> <span m='2351850'>path,</span> <span
  m='2352220'>in</span> <span m='2352370'>some</span> <span
  m='2352550'>sense,</span> <span m='2352830'>in</span> <span
  m='2352930'>terms</span> <span m='2353140'>of</span> <span
  m='2353230'>number</span> <span m='2353430'>of</span> <span
  m='2353500'>edges,</span> <span m='2354410'>right?</span> </p><p><span
  m='2355720'>It</span> <span m='2356570'>was</span> <span
  m='2356950'>only</span> <span m='2357180'>of</span> <span
  m='2357230'>length</span> <span m='2357500'>2.</span> <span
  m='2358290'>And</span> <span m='2358350'>so,</span> <span
  m='2358690'>then</span> <span m='2358800'>the</span> <span
  m='2358970'>frontiers</span> <span m='2359410'>collide.</span> <span
  m='2360500'>This</span> <span m='2360650'>is</span> <span m='2360790'>a</span>
  <span m='2360860'>subtlety</span> <span m='2361150'>in</span> <span
  m='2361350'>the</span> <span m='2361420'>algorithm.</span> <span
  m='2362220'>The</span> <span m='2362320'>frontiers</span> <span
  m='2362870'>collide</span> <span m='2364170'>at</span> <span
  m='2364370'>some</span> <span m='2364630'>vertex,</span> <span
  m='2365540'>regardless</span> <span m='2366070'>of</span> <span
  m='2366190'>the</span> <span m='2366280'>weights</span> <span
  m='2367310'>of</span> <span m='2367440'>the</span> <span
  m='2367550'>edges.</span> <span m='2368630'>Because</span> <span
  m='2368960'>we are</span> <span m='2369120'>alternating</span> <span
  m='2369740'>the</span> <span m='2369840'>forward</span> <span
  m='2370240'>search</span> <span m='2370630'>and</span> <span
  m='2370700'>the</span> <span m='2370790'>backward</span> <span
  m='2371210'>search,</span> <span m='2372100'>in</span> <span
  m='2372320'>effect,</span> <span m='2373000'>the</span> <span
  m='2373090'>frontiers</span> <span m='2373570'>are</span> <span
  m='2373640'>going</span> <span m='2373760'>to</span> <span
  m='2373820'>collide</span> <span m='2374850'>on</span> <span
  m='2375070'>the</span> <span m='2375180'>shortest</span> <span
  m='2375870'>length</span> <span m='2376690'>path.</span> <span
  m='2377640'>Right?</span> <span m='2378020'>That</span> <span
  m='2378150'>makes</span> <span m='2378320'>sense,</span> <span
  m='2378730'>right? </span> </p><p></p><p><span m='2380070'>So</span> <span
  m='2380260'>this</span> <span m='2381660'>example</span> <span
  m='2382230'>is</span> <span m='2382320'>set</span> <span m='2382550'>up</span>
  <span m='2383120'>so</span> <span m='2383440'>the</span> <span
  m='2383550'>shortest</span> <span m='2384170'>length</span> <span
  m='2384730'>path</span> <span m='2385540'>is</span> <span
  m='2385710'>not</span> <span m='2385970'>the</span> <span
  m='2386040'>shortest</span> <span m='2386550'>weight</span> <span
  m='2386780'>path.</span> <span m='2387740'>OK?</span> <span
  m='2389260'>So</span> <span m='2391590'>we</span> <span
  m='2391780'>can't</span> <span m='2393980'>take</span> <span
  m='2394270'>the</span> <span m='2394380'>w</span> <span m='2395760'>and</span>
  <span m='2396460'>use</span> <span m='2396830'>pi</span> <span
  m='2397130'>f</span> <span m='2398030'>to</span> <span
  m='2398140'>construct</span> <span m='2399310'>part</span> <span
  m='2399600'>of</span> <span m='2399690'>the</span> <span
  m='2399770'>path,</span> <span m='2400770'>and</span> <span
  m='2400950'>use</span> <span m='2401180'>pi</span> <span m='2401400'>b</span>
  <span m='2401650'>to</span> <span m='2401750'>construct</span> <span
  m='2402300'>the</span> <span m='2402400'>other</span> <span
  m='2402640'>part</span> <span m='2402880'>of</span> <span
  m='2402940'>the</span> <span m='2403020'>path.</span> <span
  m='2403830'>And</span> <span m='2404020'>find</span> <span
  m='2404430'>the</span> <span m='2404510'>shortest</span> <span
  m='2405030'>weight</span> <span m='2405400'>path.</span> <span
  m='2406120'>We</span> <span m='2406240'>would</span> <span
  m='2406340'>get</span> <span m='2406480'>something</span> <span
  m='2406780'>incorrect.</span> <span m='2407155'>Right?</span> <span
  m='2407530'>We</span> <span m='2407710'>would</span> <span
  m='2407830'>get</span> <span m='2407980'>a</span> <span
  m='2408030'>path</span> <span m='2408260'>of</span> <span
  m='2408360'>length</span> <span m='2408600'>10,</span> <span
  m='2409280'>in</span> <span m='2409400'>this</span> <span m='2409570'>case,
  if</span> <span m='2409900'>we</span> <span m='2410080'>did</span> <span
  m='2410250'>that.</span> </p><p><span m='2411370'>So</span> <span
  m='2411570'>how</span> <span m='2411670'>do</span> <span m='2411750'>we</span>
  <span m='2411840'>fix</span> <span m='2412060'>it?</span> <span
  m='2414530'>How do we</span> <span m='2414730'>fix</span> <span
  m='2414890'>it?</span> <span m='2416460'>One</span> <span
  m='2416720'>little</span> <span m='2417080'>termination</span> <span
  m='2417550'>condition</span> <span m='2417930'>doesn't</span> <span
  m='2418180'>change.</span> <span m='2419410'>How</span> <span
  m='2419530'>do</span> <span m='2419580'>we</span> <span m='2419700'>fix</span>
  <span m='2419930'>it?</span> <span m='2420920'>Someone?</span> <span
  m='2422560'>Back</span> <span m='2422740'>there.</span> <span
  m='2423430'>Or,</span> <span m='2423560'>actually,</span> <span
  m='2423940'>you.</span> </p><p><span m='2424398'>AUDIENCE: Ordinate</span>
  <span m='2424856'>based</span> <span m='2425314'>on the</span> <span
  m='2425772'>weight.</span> </p><p><span m='2426690'>PROFESSOR: Ordinate</span>
  <span m='2426960'>based</span> <span m='2427240'>on</span> <span
  m='2427330'>the</span> <span m='2427420'>weight.</span> <span
  m='2428260'>So</span> <span m='2428730'>exactly</span> <span
  m='2429110'>how</span> <span m='2429300'>would we</span> <span
  m='2429520'>do</span> <span m='2429650'>that?</span> </p><p><span
  m='2430592'>AUDIENCE: At each</span> <span m='2431063'>point</span> <span
  m='2431534'>you take the</span> <span m='2432005'>one</span> <span
  m='2432476'>that</span> <span m='2432947'>has</span> <span
  m='2433418'>the</span> <span m='2433889'>[INAUDIBLE].</span> </p><p><span
  m='2435310'>PROFESSOR: But</span> <span m='2435480'>that's</span> <span
  m='2435610'>what</span> <span m='2435710'>we're</span> <span
  m='2435830'>doing</span> <span m='2436040'>now,</span> <span
  m='2436240'>right?</span> <span m='2439450'>So,</span> <span m='2439840'>are
  you</span> <span m='2440030'>changing</span> <span m='2440410'>the</span>
  <span m='2440490'>alternation</span> <span m='2441090'>between</span> <span
  m='2441350'>the</span> <span m='2441440'>forward</span> <span
  m='2441790'>search</span> <span m='2442160'>and</span> <span
  m='2442260'>the</span> <span m='2442330'>backward</span> <span
  m='2442690'>search?</span> </p><p><span m='2443140'>AUDIENCE: Yeah.</span>
  </p><p><span m='2444300'>PROFESSOR: You're</span> <span
  m='2444500'>saying</span> <span m='2444810'>that</span> <span
  m='2444960'>you're</span> <span m='2445070'>going</span> <span
  m='2445200'>to</span> <span m='2445260'>do</span> <span
  m='2445990'>more</span> <span m='2446550'>forward</span> <span
  m='2446910'>searches,</span> <span m='2447410'>as</span> <span
  m='2447540'>opposed</span> <span m='2447850'>to</span> <span
  m='2448540'>backward</span> <span m='2448900'>searches?</span> </p><p><span
  m='2449610'>AUDIENCE: If the</span> <span m='2450100'>overall</span> <span
  m='2450590'>cost is lower.</span> </p><p><span m='2451080'>PROFESSOR:
  Overall</span> <span m='2451490'>cost is</span> <span
  m='2451900'>lower.</span> <span m='2452615'>You know,</span> <span
  m='2453980'>if</span> <span m='2454100'>you</span> <span
  m='2454200'>code</span> <span m='2454460'>it</span> <span
  m='2454530'>up,</span> <span m='2455060'>you</span> <span
  m='2455200'>get</span> <span m='2455330'>to</span> <span
  m='2455380'>keep</span> <span m='2455570'>this.</span> <span
  m='2458010'>If</span> <span m='2458410'>I</span> <span m='2458530'>want</span>
  <span m='2458700'>a</span> <span m='2458750'>slightly</span> <span
  m='2459290'>different,</span> <span m='2461080'>simpler</span> <span
  m='2461880'>fix</span> <span m='2462840'>because</span> <span
  m='2463090'>I</span> <span m='2463150'>think</span> <span
  m='2463300'>what</span> <span m='2463430'>you're</span> <span
  m='2463550'>saying</span> <span m='2463830'>here--</span> <span
  m='2464190'>and</span> <span m='2464350'>I</span> <span
  m='2464370'>like</span> <span m='2464600'>the</span> <span
  m='2464670'>idea.</span> <span m='2465260'>I</span> <span
  m='2465480'>actually</span> <span m='2465760'>do</span> <span
  m='2465900'>like</span> <span m='2466070'>the</span> <span
  m='2466130'>idea.</span> </p><p><span m='2466860'>You're</span> <span
  m='2467010'>saying</span> <span m='2467290'>you're</span> <span
  m='2467450'>going</span> <span m='2467730'>to</span> <span
  m='2468900'>not</span> <span m='2469190'>do</span> <span
  m='2469330'>strict</span> <span m='2469790'>alternation.</span> <span
  m='2471170'>But</span> <span m='2471380'>you're</span> <span
  m='2471490'>going</span> <span m='2471710'>to</span> <span
  m='2471800'>do</span> <span m='2471970'>some</span> <span
  m='2472170'>sort</span> <span m='2472330'>of</span> <span
  m='2472460'>weighted</span> <span m='2472800'>alternation,</span> <span
  m='2473520'>from</span> <span m='2473690'>what</span> <span
  m='2473950'>I</span> <span m='2474040'>can</span> <span
  m='2474190'>tell,</span> <span m='2474770'>based</span> <span
  m='2475110'>on</span> <span m='2475210'>the</span> <span
  m='2475290'>weights.</span> <span m='2476020'>OK?</span> <span
  m='2476660'>And</span> <span m='2478790'>I</span> <span
  m='2478920'>think</span> <span m='2479120'>there's</span> <span
  m='2479230'>an</span> <span m='2479310'>algorithm</span> <span
  m='2479630'>there</span> <span m='2479810'>that's</span> <span
  m='2480030'>correct.</span> <span m='2480910'>OK?</span> </p><p><span
  m='2481180'>I</span> <span m='2482400'>probably</span> <span
  m='2482690'>won't</span> <span m='2482930'>be</span> <span
  m='2483000'>able</span> <span m='2483140'>to</span> <span
  m='2483830'>prove</span> <span m='2484360'>that</span> <span m='2484520'>it's
  correct</span> <span m='2484985'>to</span> <span m='2485450'>myself</span>
  <span m='2486660'>in</span> <span m='2487440'>five</span> <span
  m='2487700'>minutes.</span> <span m='2488330'>OK.</span> <span
  m='2488690'>Or</span> <span m='2489280'>10</span> <span
  m='2489470'>minutes.</span> <span m='2490080'>But</span> <span
  m='2490600'>let's</span> <span m='2491200'>talk</span> <span
  m='2491330'>about</span> <span m='2491520'>that</span> <span
  m='2492390'>offline.</span> <span m='2493150'>And</span> <span
  m='2493320'>see</span> <span m='2493500'>if</span> <span
  m='2493590'>there's</span> <span m='2493750'>a</span> <span
  m='2493810'>way.</span> </p><p><span m='2494340'>I'm</span> <span
  m='2494480'>a</span> <span m='2494540'>little</span> <span
  m='2494680'>worried</span> <span m='2495080'>that,</span> <span
  m='2496050'>if</span> <span m='2496170'>you</span> <span
  m='2496260'>have</span> <span m='2498150'>positive</span> <span
  m='2498670'>rational</span> <span m='2499140'>numbers,</span> <span
  m='2499620'>and</span> <span m='2499680'>you've got</span> <span
  m='2499880'>root</span> <span m='2500180'>2,</span> <span
  m='2501500'>square</span> <span m='2501860'>root</span> <span
  m='2501950'>of</span> <span m='2502080'>2,</span> <span m='2502500'>and</span>
  <span m='2502980'>pi.</span> <span m='2504110'>And</span> <span
  m='2504370'>the</span> <span m='2504450'>transcendental</span> <span
  m='2505110'>number</span> <span m='2505580'>corresponding</span> <span
  m='2506090'>to</span> <span m='2506140'>these</span> <span
  m='2506340'>weights,</span> <span m='2507170'>that</span> <span
  m='2507560'>this</span> <span m='2507750'>weighted</span> <span
  m='2508200'>alternation</span> <span m='2508870'>is</span> <span
  m='2508980'>going</span> <span m='2509170'>to</span> <span
  m='2509790'>be</span> <span m='2510040'>a</span> <span m='2510290'>bit</span>
  <span m='2510830'>hard</span> <span m='2511150'>to</span> <span
  m='2511210'>implement</span> <span m='2511580'>correctly.</span> <span
  m='2512630'>But</span> <span m='2512870'>it's</span> <span
  m='2513630'>a</span> <span m='2513670'>neat</span> <span
  m='2513900'>idea.</span> <span m='2514460'>I</span> <span
  m='2514840'>would</span> <span m='2514950'>actually</span> <span
  m='2515170'>like</span> <span m='2515330'>a</span> <span
  m='2515380'>follow</span> <span m='2515630'>up</span> <span
  m='2515820'>on</span> <span m='2515930'>that.</span> <span
  m='2516840'>Something</span> <span m='2517240'>that's</span> <span
  m='2517480'>a</span> <span m='2517540'>little--</span> <span
  m='2518250'>yeah,</span> <span m='2518390'>back</span> <span
  m='2518580'>there.</span> </p><p></p><p><span m='2520024'>AUDIENCE: Can you
  look at the</span> <span m='2520511'>neighbors</span> <span m='2520998'>of
  all</span> <span m='2521485'>the nodes</span> <span m='2521972'>that</span>
  <span m='2522459'>are in your</span> <span m='2522946'>forward</span> <span
  m='2523433'>[INAUDIBLE],</span> <span m='2523920'>and</span> <span
  m='2524407'>see if any of their</span> <span m='2524894'>neighbors</span>
  <span m='2525381'>are</span> <span m='2525868'>in</span> <span
  m='2526355'>backwards</span> <span m='2526842'>[INAUDIBLE]. And see</span>
  <span m='2527329'>if</span> <span m='2527816'>that's going to give you</span>
  <span m='2528303'>a shorter</span> <span m='2529277'>path</span> <span
  m='2529764'>than the</span> <span m='2530251'>one</span> <span
  m='2530738'>that</span> <span m='2531225'>you</span> <span m='2531712'>pulled
  out</span> <span m='2532199'>previously.</span> </p><p><span
  m='2532686'>PROFESSOR: That's</span> <span m='2533190'>correct.</span> <span
  m='2533680'>That's</span> <span m='2535350'>almost</span> <span
  m='2535690'>exactly</span> <span m='2536170'>correct.</span> <span
  m='2537140'>I</span> <span m='2537510'>won't</span> <span
  m='2537680'>bother</span> <span m='2537900'>throwing</span> <span
  m='2538140'>it</span> <span m='2538220'>over,</span> <span
  m='2538470'>but</span> <span m='2538740'>this</span> <span
  m='2538910'>is</span> <span m='2539000'>yours.</span> <span
  m='2539810'>You</span> <span m='2539940'>want</span> <span
  m='2540000'>to</span> <span m='2540090'>catch</span> <span
  m='2540320'>it?</span> </p><p><span m='2540750'>AUDIENCE: I already
  have</span> <span m='2541180'>one.</span> </p><p><span m='2541610'>PROFESSOR:
  You</span> <span m='2541740'>already</span> <span m='2541930'>have</span>
  <span m='2542070'>a</span> <span m='2542120'>cushion.</span> <span
  m='2543010'>All</span> <span m='2543090'>right.</span> <span
  m='2543360'>So</span> <span m='2543480'>how about</span> <span
  m='2543650'>I</span> <span m='2543690'>just</span> <span
  m='2543930'>throw</span> <span m='2544110'>it.</span> <span
  m='2544220'>And</span> <span m='2544600'>anybody who</span> <span
  m='2545010'>wants</span> <span m='2545280'>to catch</span> <span
  m='2545670'>it</span> <span m='2545880'>gets</span> <span
  m='2546050'>it.</span> <span m='2546480'>How's that?</span> <span
  m='2547210'>Whoa.</span> </p><p><span m='2548405'>All</span> <span
  m='2548720'>right.</span> <span m='2549140'>I</span> <span
  m='2549240'>didn't</span> <span m='2549400'>hit</span> <span
  m='2549520'>anybody.</span> <span m='2550420'>Anybody</span> <span
  m='2550720'>who</span> <span m='2550840'>wants</span> <span
  m='2551030'>it,</span> <span m='2551410'>who</span> <span
  m='2551530'>doesn't</span> <span m='2551730'>have</span> <span
  m='2551840'>a</span> <span m='2551910'>cushion.</span> <span
  m='2552860'>Right.</span> <span m='2553430'>We've</span> <span
  m='2553570'>got</span> <span m='2553690'>all</span> <span
  m='2553820'>these</span> <span m='2554000'>cushions</span> <span
  m='2554450'>in</span> <span m='2555140'>my</span> <span
  m='2555290'>office,</span> <span m='2555620'>and</span> <span
  m='2555740'>Eric's</span> <span m='2555960'>office.</span> <span
  m='2556630'>We've got</span> <span m='2556750'>to</span> <span
  m='2556790'>do</span> <span m='2556910'>something</span> <span
  m='2557140'>about</span> <span m='2557360'>them.</span> </p><p><span
  m='2559910'>They're actually</span> <span m='2560210'>not</span> <span
  m='2560400'>that</span> <span m='2560570'>great.</span> <span
  m='2563690'>You</span> <span m='2563780'>know,</span> <span
  m='2563960'>it's</span> <span m='2565330'>bit</span> <span
  m='2565460'>of</span> <span m='2565560'>an</span> <span
  m='2565660'>issue,</span> <span m='2566130'>I</span> <span
  m='2566230'>understand.</span> <span m='2566535'>You know,</span> <span
  m='2566840'>we've</span> <span m='2567115'>got</span> <span m='2567390'>to
  do</span> <span m='2567500'>Frisbees</span> <span m='2567980'>next</span>
  <span m='2568200'>time,</span> <span m='2568420'>or</span> <span
  m='2568490'>something.</span> <span m='2570630'>I</span> <span
  m='2571030'>can</span> <span m='2571190'>see</span> <span
  m='2571350'>why</span> <span m='2571580'>you're</span> <span
  m='2571680'>not</span> <span m='2571870'>enthusiastic</span> <span
  m='2572550'>about</span> <span m='2572800'>this.</span> <span
  m='2573640'>Right?</span> <span m='2574040'>OK.</span> </p><p><span
  m='2574980'>All</span> <span m='2575100'>right,</span> <span
  m='2575730'>so</span> <span m='2576490'>the</span> <span
  m='2576620'>answer</span> <span m='2577040'>was,</span> <span
  m='2577320'>in</span> <span m='2577420'>fact,</span> <span
  m='2577680'>correct. </span> <span m='2579100'>And</span> <span
  m='2579680'>let</span> <span m='2579840'>me</span> <span m='2583140'>write
  it</span> <span m='2583370'>up</span> <span m='2583550'>over</span> <span
  m='2583720'>here.</span> <span m='2584270'>So</span> <span
  m='2584410'>we</span> <span m='2584500'>had</span> <span m='2584620'>to</span>
  <span m='2584690'>do</span> <span m='2584800'>a</span> <span
  m='2584840'>little</span> <span m='2585090'>more</span> <span
  m='2585310'>work.</span> <span m='2586250'>We</span> <span
  m='2586420'>terminate</span> <span m='2586920'>properly.</span> <span
  m='2587970'>We</span> <span m='2588100'>do</span> <span m='2588280'>the</span>
  <span m='2588410'>strict</span> <span m='2588760'>alternation.</span> <span
  m='2589990'>But</span> <span m='2590470'>we</span> <span
  m='2590590'>have</span> <span m='2590700'>to</span> <span
  m='2590770'>do</span> <span m='2590870'>a</span> <span
  m='2590940'>little</span> <span m='2591120'>bit</span> <span
  m='2591280'>more</span> <span m='2591460'>work.</span> <span
  m='2593030'>OK.</span> </p><p><span m='2594750'>And</span> <span
  m='2595550'>the</span> <span m='2595900'>work</span> <span
  m='2596140'>we</span> <span m='2596270'>have</span> <span
  m='2596430'>to</span> <span m='2596530'>do</span> <span m='2597020'>is</span>
  <span m='2597810'>summarized</span> <span m='2598470'>very</span> <span
  m='2598690'>neatly</span> <span m='2599950'>by</span> <span
  m='2600110'>saying,</span> <span m='2601810'>we</span> <span
  m='2601960'>want</span> <span m='2602140'>to</span> <span
  m='2602310'>find</span> <span m='2608110'>an</span> <span
  m='2608340'>x,</span> <span m='2609410'>which</span> <span
  m='2609640'>is</span> <span m='2609770'>maybe</span> <span
  m='2610030'>different</span> <span m='2610370'>from</span> <span
  m='2610530'>w,</span> <span m='2611736'>possibly,</span> <span
  m='2620020'>that</span> <span m='2620250'>has</span> <span
  m='2620610'>minimum</span> <span m='2624370'>value</span> <span
  m='2626540'>of</span> <span m='2628980'>d</span> <span m='2629470'>of</span>
  <span m='2629640'>x</span> <span m='2631140'>plus</span> <span
  m='2631540'>db</span> <span m='2632530'>x.</span> <span m='2633895'>All</span>
  <span m='2634270'>right?</span> <span m='2634500'>So</span> <span
  m='2634580'>we</span> <span m='2634660'>have to</span> <span
  m='2634810'>actually</span> <span m='2635130'>look.</span> <span
  m='2635750'>And</span> <span m='2635920'>this</span> <span
  m='2636320'>x</span> <span m='2636510'>is</span> <span
  m='2636620'>going</span> <span m='2636750'>to</span> <span
  m='2636790'>be</span> <span m='2637250'>neighboring.</span> </p><p><span
  m='2638490'>But</span> <span m='2639220'>we</span> <span
  m='2639490'>don't</span> <span m='2639680'>really</span> <span
  m='2639860'>need</span> <span m='2639990'>to</span> <span
  m='2640070'>specify</span> <span m='2640570'>that.</span> <span
  m='2640880'>What</span> <span m='2641030'>we</span> <span
  m='2641130'>say</span> <span m='2641390'>is,</span> <span m='2641990'>you're
  going to</span> <span m='2642100'>have</span> <span m='2642300'>to</span>
  <span m='2642380'>look</span> <span m='2642600'>at</span> <span
  m='2642750'>Qf</span> <span m='2643090'>and</span> <span
  m='2643430'>Qb.</span> <span m='2645290'>And</span> <span
  m='2645450'>it's</span> <span m='2645590'>possible</span> <span
  m='2646170'>that</span> <span m='2646710'>w</span> <span m='2647140'>is</span>
  <span m='2647380'>the</span> <span m='2647470'>one</span> <span
  m='2648390'>that</span> <span m='2648580'>has</span> <span
  m='2648900'>minimum</span> <span m='2649290'>df</span> <span
  m='2649830'>w</span> <span m='2650400'>plus</span> <span m='2650520'>db</span>
  <span m='2650850'>w.</span> <span m='2651810'>But,</span> <span
  m='2652600'>clearly,</span> <span m='2652870'>that</span> <span
  m='2652990'>wasn't</span> <span m='2653210'>the</span> <span
  m='2653280'>case</span> <span m='2653490'>in</span> <span
  m='2653560'>this</span> <span m='2653720'>example.</span> </p><p><span
  m='2654820'>So,</span> <span m='2654850'>in</span> <span
  m='2654930'>this</span> <span m='2655080'>example,</span> <span
  m='2655910'>w</span> <span m='2656280'>caused</span> <span m='2656570'>the
  termination.</span> <span m='2657650'>But</span> <span m='2657770'>now</span>
  <span m='2657950'>we</span> <span m='2658040'>need</span> <span
  m='2658190'>to</span> <span m='2658260'>scan.</span> <span
  m='2658800'>And</span> <span m='2658940'>there's</span> <span
  m='2659100'>only</span> <span m='2659570'>two</span> <span
  m='2659660'>other</span> <span m='2659800'>vertices</span> <span
  m='2660100'>that</span> <span m='2660230'>are</span> <span
  m='2660320'>interesting</span> <span m='2660710'>here,</span> <span
  m='2661280'>which</span> <span m='2661440'>are</span> <span
  m='2661530'>u</span> <span m='2661870'>and u</span> <span
  m='2662210'>prime.</span> </p><p><span m='2662830'>And</span> <span
  m='2663010'>either of</span> <span m='2663350'>those</span> <span
  m='2663610'>will</span> <span m='2663780'>fit</span> <span
  m='2664000'>the</span> <span m='2664070'>bill</span> <span
  m='2664840'>because</span> <span m='2665060'>we</span> <span
  m='2665180'>see</span> <span m='2665430'>that</span> <span
  m='2665650'>df</span> <span m='2666140'>of</span> <span m='2666280'>u</span>
  <span m='2667300'>plus</span> <span m='2667690'>db</span> <span
  m='2668190'>of</span> <span m='2668320'>u</span> <span
  m='2669205'>equals</span> <span m='2669910'>3</span> <span
  m='2670150'>plus</span> <span m='2670500'>6</span> <span
  m='2671270'>equals</span> <span m='2671660'>9.</span> <span
  m='2672710'>And</span> <span m='2673200'>df</span> <span m='2674035'>of</span>
  <span m='2674480'>u</span> <span m='2674640'>prime</span> <span
  m='2675920'>plus</span> <span m='2677330'>db</span> <span
  m='2677650'>of</span> <span m='2677970'>u</span> <span
  m='2678110'>prime</span> <span m='2680000'>equals--</span> <span
  m='2680670'>I'm sorry,</span> <span m='2681070'>I should have out</span> <span
  m='2681360'>db</span> <span m='2681700'>here.</span> <span
  m='2682400'>db</span> <span m='2682840'>of</span> <span m='2683280'>u</span>
  <span m='2683430'>prime</span> <span m='2684340'>would</span> <span
  m='2684490'>be</span> <span m='2684650'>6</span> <span m='2684920'>plus</span>
  <span m='2685200'>3</span> <span m='2686560'>equals</span> <span
  m='2686990'>9.</span> <span m='2688370'>Right?</span> <span
  m='2688870'>So</span> <span m='2689060'>both</span> <span
  m='2689260'>of</span> <span m='2689340'>these</span> <span
  m='2689510'>are</span> <span m='2689640'>less</span> <span
  m='2689910'>than</span> <span m='2690080'>10.</span> </p><p><span
  m='2690930'>And</span> <span m='2691060'>so</span> <span m='2691190'>we</span>
  <span m='2691320'>had</span> <span m='2691460'>to</span> <span
  m='2691530'>pick</span> <span m='2691760'>one</span> <span
  m='2691940'>of</span> <span m='2692040'>these</span> <span
  m='2692750'>as</span> <span m='2692990'>our</span> <span m='2693210'>x.</span>
  <span m='2694450'>OK.</span> <span m='2695410'>And</span> <span
  m='2695940'>if</span> <span m='2696060'>you</span> <span
  m='2696160'>pick</span> <span m='2696330'>one</span> <span
  m='2696510'>of</span> <span m='2696590'>these</span> <span
  m='2696840'>as</span> <span m='2697000'>our</span> <span m='2697170'>x,</span>
  <span m='2698260'>then,</span> <span m='2699400'>at</span> <span
  m='2699530'>that</span> <span m='2699700'>point,</span> <span
  m='2701052'>we</span> <span m='2701510'>don't</span> <span
  m='2702530'>do</span> <span m='2703060'>w</span> <span
  m='2703390'>here.</span> <span m='2703670'>We</span> <span
  m='2703780'>do</span> <span m='2703950'>x.</span> <span m='2705606'>OK?</span>
  <span m='2709370'>Let me write it</span> <span m='2709780'>as</span> <span
  m='2709940'>x.</span> <span m='2710205'>It</span> <span
  m='2710470'>looks</span> <span m='2710670'>like</span> <span m='2710780'>a
  cross</span> <span m='2711220'>here.</span> </p><p><span m='2715570'>So</span>
  <span m='2715750'>that's</span> <span m='2715940'>what</span> <span
  m='2716050'>happens.</span> <span m='2716570'>So</span> <span
  m='2716760'>this</span> <span m='2716920'>small</span> <span
  m='2717160'>little</span> <span m='2717450'>tweak.</span> <span
  m='2718240'>Do</span> <span m='2718440'>the alternation.</span> <span
  m='2719350'>Do</span> <span m='2719440'>the</span> <span
  m='2719570'>termination.</span> <span m='2720700'>Once</span> <span
  m='2720910'>you do</span> <span m='2721080'>the</span> <span
  m='2721190'>termination,</span> <span m='2721770'>go</span> <span
  m='2721920'>look</span> <span m='2722210'>and</span> <span
  m='2722350'>see</span> <span m='2722610'>if</span> <span
  m='2722680'>you</span> <span m='2722790'>can</span> <span
  m='2722910'>minimize</span> <span m='2724650'>the</span> <span
  m='2724740'>shortest</span> <span m='2725050'>path</span> <span
  m='2725290'>length</span> <span m='2725860'>by</span> <span
  m='2725980'>finding</span> <span m='2726320'>an</span> <span
  m='2726400'>appropriate</span> <span m='2726960'>x.</span> </p><p><span
  m='2727680'>Which</span> <span m='2727850'>has</span> <span
  m='2728140'>the</span> <span m='2728280'>minimum</span> <span
  m='2728780'>sum</span> <span m='2729720'>of</span> <span
  m='2729870'>the</span> <span m='2729950'>forward</span> <span
  m='2730340'>and</span> <span m='2730420'>the</span> <span
  m='2730520'>backward</span> <span m='2731030'>priorities.</span> <span
  m='2732060'>And</span> <span m='2732210'>then,</span> <span
  m='2732760'>you're</span> <span m='2732890'>in</span> <span
  m='2732970'>business.</span> <span m='2734000'>And</span> <span
  m='2734120'>then,</span> <span m='2734220'>everything</span> <span
  m='2734500'>works.</span> <span m='2735530'>OK?</span> </p><p><span
  m='2737090'>All</span> <span m='2737150'>right.</span> <span
  m='2737350'>Great.</span> <span m='2738110'>So,</span> <span
  m='2738830'>so</span> <span m='2738940'>much</span> <span
  m='2739150'>for</span> <span m='2740970'>bi-directional</span> <span
  m='2741680'>search.</span> <span m='2742950'>Let</span> <span
  m='2743090'>me</span> <span m='2743180'>talk</span> <span m='2743370'>a</span>
  <span m='2743420'>little</span> <span m='2743580'>bit</span> <span
  m='2743730'>about</span> <span m='2744970'>heuristics</span> <span
  m='2745520'>that</span> <span m='2745690'>people</span> <span
  m='2746000'>use</span> <span m='2747120'>to</span> <span
  m='2748540'>modify</span> <span m='2749120'>the</span> <span
  m='2749240'>graph</span> <span m='2750180'>so</span> <span
  m='2750770'>things</span> <span m='2751270'>run</span> <span
  m='2751600'>faster</span> <span m='2753160'>in</span> <span
  m='2753290'>practice.</span> <span m='2754490'>So,</span> <span
  m='2754640'>in</span> <span m='2754830'>particular,</span> <span
  m='2758450'>you</span> <span m='2758600'>can</span> <span
  m='2758720'>think</span> <span m='2758910'>about</span> <span
  m='2759290'>the</span> <span m='2759730'>goal</span> <span
  m='2760020'>directed</span> <span m='2760480'>search,</span> <span
  m='2761500'>or</span> <span m='2761940'>a</span> <span
  m='2762100'>star,</span> <span m='2762720'>if</span> <span
  m='2762820'>you're</span> <span m='2762910'>taking</span> <span
  m='2763180'>6034.</span> <span m='2764400'>And</span> <span
  m='2764560'>there's</span> <span m='2765800'>some</span> <span
  m='2766080'>commonality</span> <span m='2767440'>between</span> <span
  m='2768800'>what</span> <span m='2768970'>I'm</span> <span
  m='2769040'>going</span> <span m='2769150'>to</span> <span
  m='2769210'>talk</span> <span m='2769390'>about</span> <span
  m='2769600'>here,</span> <span m='2770500'>and</span> <span
  m='2770680'>that</span> <span m='2770830'>material.</span> </p><p><span
  m='2773710'>The</span> <span m='2773820'>basic</span> <span
  m='2774150'>idea</span> <span m='2774560'>is</span> <span
  m='2776680'>that</span> <span m='2776860'>we're</span> <span
  m='2776960'>going</span> <span m='2777190'>to</span> <span
  m='2778720'>modify</span> <span m='2779330'>the</span> <span
  m='2779550'>edge</span> <span m='2780040'>weights</span> <span
  m='2786840'>in</span> <span m='2786980'>such</span> <span m='2787240'>a</span>
  <span m='2787310'>way</span> <span m='2789910'>that</span> <span
  m='2792030'>you</span> <span m='2792140'>go</span> <span
  m='2792510'>downhill</span> <span m='2794010'>toward</span> <span
  m='2794470'>the</span> <span m='2794560'>shortest</span> <span
  m='2794940'>path.</span> <span m='2796660'>And</span> <span
  m='2796990'>so,</span> <span m='2797200'>the</span> <span
  m='2797570'>priorities</span> <span m='2798660'>are</span> <span
  m='2798820'>modified</span> <span m='2799490'>heuristically.</span> <span
  m='2801640'>So</span> <span m='2801830'>things</span> <span
  m='2802080'>run</span> <span m='2802330'>a</span> <span
  m='2802350'>little</span> <span m='2802550'>bit</span> <span
  m='2802700'>quicker.</span> <span m='2804110'>You're</span> <span
  m='2804210'>trying</span> <span m='2804380'>to</span> <span
  m='2804450'>prune</span> <span m='2804750'>the</span> <span
  m='2804830'>search</span> <span m='2805200'>here.</span> </p><p><span
  m='2810020'>So</span> <span m='2810600'>we're</span> <span
  m='2810700'>going</span> <span m='2810780'>to</span> <span
  m='2810820'>modify</span> <span m='2811250'>edge</span> <span
  m='2811570'>weights.</span> <span m='2812620'>And</span> <span
  m='2812740'>we</span> <span m='2812790'>have</span> <span
  m='2812880'>to</span> <span m='2812920'>be</span> <span
  m='2812990'>careful</span> <span m='2813290'>when</span> <span
  m='2813430'>we</span> <span m='2813530'>do</span> <span
  m='2813650'>this,</span> <span m='2813870'>obviously.</span> <span
  m='2814680'>We</span> <span m='2814770'>don't</span> <span
  m='2814880'>want</span> <span m='2814990'>to</span> <span
  m='2815240'>do</span> <span m='2815640'>things</span> <span
  m='2815860'>that</span> <span m='2815950'>are</span> <span
  m='2816040'>incorrect.</span> </p><p><span m='2817810'>But</span> <span
  m='2818620'>the</span> <span m='2818720'>way</span> <span
  m='2818890'>we</span> <span m='2819000'>want</span> <span
  m='2819120'>to</span> <span m='2819160'>modify</span> <span
  m='2819560'>the</span> <span m='2819680'>edge</span> <span
  m='2819860'>weights</span> <span m='2823960'>is</span> <span
  m='2824290'>by</span> <span m='2824910'>having</span> <span
  m='2825210'>some</span> <span m='2825460'>sort</span> <span
  m='2825690'>of</span> <span m='2826050'>potential</span> <span
  m='2826720'>function</span> <span m='2827970'>that</span> <span
  m='2828190'>corresponds</span> <span m='2828840'>to</span> <span
  m='2829540'>lambda.</span> <span m='2830800'>And,</span> <span
  m='2831140'>if</span> <span m='2831280'>the</span> <span m='2831370'>edge
  is</span> <span m='2831790'>between</span> <span m='2832120'>u</span> <span
  m='2832330'>and</span> <span m='2832530'>v,</span> <span
  m='2833330'>then</span> <span m='2833540'>we</span> <span
  m='2833650'>have</span> <span m='2833970'>an</span> <span
  m='2834090'>equation</span> <span m='2834730'>given</span> <span
  m='2835000'>a</span> <span m='2835060'>lambda</span> <span
  m='2836530'>that</span> <span m='2836750'>says,</span> <span
  m='2837180'>the</span> <span m='2837320'>new</span> <span
  m='2837560'>w,</span> <span m='2838060'>w</span> <span m='2838560'>bar,</span>
  <span m='2839350'>is</span> <span m='2839520'>w</span> <span
  m='2839825'>u,</span> <span m='2840130'>v</span> <span
  m='2840630'>minus</span> <span m='2841000'>lambda</span> <span
  m='2841350'>u</span> <span m='2842150'>plus</span> <span
  m='2842390'>lambda</span> <span m='2842760'>v.</span> <span
  m='2843780'>OK?</span> </p><p><span m='2845140'>Now,</span> <span
  m='2845640'>we</span> <span m='2845710'>have to be</span> <span
  m='2845850'>a</span> <span m='2845910'>little</span> <span
  m='2846050'>careful</span> <span m='2846390'>here,</span> <span
  m='2848880'>with</span> <span m='2849050'>respect</span> <span
  m='2849320'>to</span> <span m='2849380'>the</span> <span
  m='2849470'>choice</span> <span m='2849810'>of</span> <span
  m='2849910'>lambda.</span> <span m='2850850'>But</span> <span
  m='2851010'>the</span> <span m='2851080'>basic</span> <span
  m='2851380'>idea,</span> <span m='2851970'>in</span> <span
  m='2852380'>terms</span> <span m='2852610'>of</span> <span
  m='2852700'>lambda,</span> <span m='2853730'>is</span> <span
  m='2853990'>that,</span> <span m='2854700'>suppose</span> <span
  m='2855110'>you</span> <span m='2855210'>have</span> <span
  m='2862180'>something</span> <span m='2862530'>like</span> <span
  m='2862700'>this,</span> <span m='2865720'>where</span> <span
  m='2865880'>you</span> <span m='2868300'>have</span> <span
  m='2868420'>a</span> <span m='2868480'>source</span> <span
  m='2868760'>vertex,</span> <span m='2868980'>s.</span> <span
  m='2869970'>And</span> <span m='2870140'>you're</span> <span
  m='2870330'>again</span> <span m='2870650'>trying to do</span> <span
  m='2870890'>a</span> <span m='2871010'>single</span> <span
  m='2871290'>source,</span> <span m='2871730'>single target</span> <span
  m='2872180'>going</span> <span m='2872540'>to</span> <span
  m='2872670'>t.</span> </p><p><span m='2873990'>And</span> <span
  m='2874430'>let's</span> <span m='2874590'>say</span> <span
  m='2875080'>I</span> <span m='2875170'>have</span> <span m='2875300'>an</span>
  <span m='2875370'>edge</span> <span m='2875590'>of</span> <span
  m='2875730'>weight</span> <span m='2876020'>5</span> <span
  m='2876350'>going</span> <span m='2876580'>out</span> <span m='2876810'>and
  an</span> <span m='2876970'>edge</span> <span m='2877130'>of</span> <span
  m='2877250'>a</span> <span m='2877360'>5</span> <span m='2877720'>going</span>
  <span m='2877950'>out</span> <span m='2878110'>this</span> <span
  m='2878290'>way.</span> <span m='2879430'>Is</span> <span
  m='2879600'>there</span> <span m='2879790'>a</span> <span
  m='2879840'>way</span> <span m='2880680'>that</span> <span
  m='2881150'>you</span> <span m='2881360'>can</span> <span
  m='2882740'>guess</span> <span m='2883790'>that</span> <span
  m='2884410'>this</span> <span m='2884760'>is</span> <span
  m='2884920'>the</span> <span m='2885010'>edge</span> <span
  m='2885740'>that</span> <span m='2885940'>is</span> <span
  m='2886050'>more</span> <span m='2886300'>likely</span> <span
  m='2886860'>to</span> <span m='2886950'>be</span> <span m='2887140'>on</span>
  <span m='2887270'>your</span> <span m='2887420'>shortest</span> <span
  m='2887860'>path?</span> <span m='2888550'>As</span> <span
  m='2888900'>opposed</span> <span m='2889070'>to</span> <span
  m='2889150'>this</span> <span m='2889400'>other</span> <span
  m='2889680'>edge?</span> </p><p><span m='2897430'>Essentially</span> <span
  m='2900170'>increase</span> <span m='2900540'>the</span> <span
  m='2900630'>potential</span> <span m='2901200'>of</span> <span
  m='2901710'>this</span> <span m='2902070'>node,</span> <span
  m='2903140'>all</span> <span m='2903200'>right?</span> <span
  m='2903690'>So</span> <span m='2903860'>this</span> <span
  m='2904080'>node</span> <span m='2904320'>here</span> <span m='2905060'>may
  be</span> <span m='2905380'>the</span> <span m='2905460'>node</span> <span
  m='2907230'>t2.</span> <span m='2908400'>And</span> <span
  m='2908600'>this</span> <span m='2908740'>node</span> <span m='2908950'>may
  be</span> <span m='2909190'>the node</span> <span m='2909350'>t1.</span>
  </p><p><span m='2910660'>You</span> <span m='2910780'>want</span> <span
  m='2910890'>to</span> <span m='2910930'>increase</span> <span
  m='2911340'>the</span> <span m='2911430'>potential</span> <span
  m='2912020'>of</span> <span m='2912130'>node</span> <span
  m='2912690'>t2,</span> <span m='2914390'>such</span> <span
  m='2914620'>that,</span> <span m='2915210'>you're</span> <span
  m='2915370'>actually</span> <span m='2915650'>trying</span> <span
  m='2915830'>to</span> <span m='2915880'>go</span> <span
  m='2916070'>uphill</span> <span m='2917440'>when</span> <span
  m='2917550'>you</span> <span m='2917650'>go</span> <span
  m='2917780'>this</span> <span m='2918010'>way.</span> <span
  m='2918400'>And</span> <span m='2918610'>this</span> <span
  m='2918800'>goes</span> <span m='2919050'>downhill.</span> <span
  m='2920050'>And</span> <span m='2920200'>that</span> <span
  m='2920340'>has</span> <span m='2920580'>the</span> <span
  m='2920660'>appropriate</span> <span m='2921150'>modifications</span> <span
  m='2922390'>on</span> <span m='2922570'>the</span> <span
  m='2922640'>edge</span> <span m='2922920'>weights,</span> <span
  m='2923650'>such</span> <span m='2923900'>that</span> <span
  m='2924440'>the</span> <span m='2924580'>Dijkstra</span> <span
  m='2925010'>algorithm</span> <span m='2925500'>is</span> <span
  m='2925740'>steered</span> <span m='2926180'>towards</span> <span
  m='2926970'>going</span> <span m='2927220'>downhill.</span> <span
  m='2928070'>And</span> <span m='2928240'>going</span> <span
  m='2928470'>down</span> <span m='2928690'>this</span> <span
  m='2928950'>path.</span> <span m='2929620'>And</span> <span
  m='2929700'>it</span> <span m='2929790'>terminates</span> <span
  m='2930550'>a</span> <span m='2930590'>little</span> <span
  m='2930810'>bit</span> <span m='2930980'>quicker.</span> <span
  m='2932020'>Right?</span> </p><p><span m='2932300'>It doesn't</span> <span
  m='2932550'>change</span> <span m='2932820'>as</span> <span
  m='2932940'>asymptotic</span> <span m='2933240'>complexity.</span> <span
  m='2934270'>It</span> <span m='2934390'>just</span> <span
  m='2934600'>makes</span> <span m='2934860'>things</span> <span
  m='2935300'>run,</span> <span m='2936130'>in</span> <span
  m='2936280'>practice,</span> <span m='2937070'>a</span> <span
  m='2937120'>little</span> <span m='2937250'>bit</span> <span
  m='2937410'>faster.</span> <span m='2938180'>If</span> <span
  m='2938270'>you</span> <span m='2938370'>choose</span> <span
  m='2938700'>the</span> <span m='2938780'>right</span> <span
  m='2939020'>potentials.</span> <span m='2940370'>Right?</span> <span
  m='2941320'>Feels</span> <span m='2941520'>like</span> <span
  m='2941660'>magic.</span> </p><p><span m='2942080'>How</span> <span
  m='2942230'>do</span> <span m='2942290'>you</span> <span
  m='2942380'>know</span> <span m='2943890'>how</span> <span
  m='2944070'>to</span> <span m='2944140'>increase</span> <span
  m='2945250'>the</span> <span m='2945370'>potential?</span> <span
  m='2946030'>What</span> <span m='2946490'>would</span> <span
  m='2946660'>you</span> <span m='2946840'>increase</span> <span
  m='2946960'>the</span> <span m='2947050'>potential</span> <span
  m='2947470'>for?</span> <span m='2950010'>What</span> <span m='2950280'>nodes
  do</span> <span m='2950520'>you</span> <span m='2950660'>want</span> <span
  m='2950750'>to</span> <span m='2950790'>make</span> <span
  m='2950980'>uphill?</span> <span m='2951700'>What</span> <span
  m='2951880'>nodes do</span> <span m='2952090'>you</span> <span
  m='2952200'>want</span> <span m='2952300'>to</span> <span
  m='2952340'>make</span> <span m='2952520'>downhill?</span> </p><p><span
  m='2955020'>So</span> <span m='2955140'>there's</span> <span
  m='2955570'>a</span> <span m='2955610'>bunch</span> <span
  m='2955790'>of</span> <span m='2955840'>questions.</span> <span
  m='2956910'>I'm</span> <span m='2957250'>not</span> <span
  m='2957380'>going</span> <span m='2957470'>to</span> <span
  m='2957510'>get</span> <span m='2957870'>into</span> <span m='2958070'>a lot
  of</span> <span m='2958250'>details.</span> <span m='2958730'>But</span> <span
  m='2958840'>I</span> <span m='2958900'>will</span> <span
  m='2959030'>tell</span> <span m='2959170'>you</span> <span
  m='2959350'>a</span> <span m='2959410'>couple</span> <span
  m='2959630'>of</span> <span m='2959720'>things.</span> </p><p><span
  m='2961380'>I'm</span> <span m='2961740'>going</span> <span
  m='2961840'>to</span> <span m='2961880'>give</span> <span
  m='2962010'>you,</span> <span m='2962840'>really</span> <span
  m='2963090'>quickly,</span> <span m='2965060'>a</span> <span
  m='2965130'>simple</span> <span m='2965440'>example</span> <span
  m='2966400'>that</span> <span m='2966560'>is</span> <span
  m='2966660'>both</span> <span m='2966930'>correct,</span> <span
  m='2968120'>in</span> <span m='2968320'>terms</span> <span
  m='2968640'>of</span> <span m='2969240'>the</span> <span
  m='2969350'>actual</span> <span m='2969690'>shortest</span> <span
  m='2970010'>path</span> <span m='2970830'>you</span> <span
  m='2970970'>will</span> <span m='2971080'>get</span> <span
  m='2971790'>is</span> <span m='2972490'>the</span> <span
  m='2972670'>correct</span> <span m='2972970'>one.</span> <span
  m='2973750'>And</span> <span m='2974230'>a</span> <span
  m='2974830'>particular</span> <span m='2975170'>mechanism</span> <span
  m='2976130'>off</span> <span m='2976570'>modifying</span> <span
  m='2977060'>the</span> <span m='2977150'>potentials</span> <span
  m='2978080'>that</span> <span m='2978300'>uses</span> <span
  m='2978640'>landmarks.</span> <span m='2980180'>Right.</span> <span
  m='2980410'>So</span> <span m='2982050'>the</span> <span
  m='2982190'>way</span> <span m='2982380'>we</span> <span
  m='2982970'>are</span> <span m='2983160'>going</span> <span
  m='2983330'>to</span> <span m='2983400'>do</span> <span
  m='2983530'>this</span> <span m='2983960'>is</span> <span
  m='2984220'>by</span> <span m='2984710'>saying</span> <span
  m='2985030'>that</span> <span m='2985780'>any</span> <span
  m='2986090'>path</span> <span m='2986740'>wp</span> <span
  m='2987850'>is</span> <span m='2988050'>going</span> <span
  m='2988210'>to</span> <span m='2988250'>get</span> <span
  m='2988420'>modified</span> <span m='2990230'>based</span> <span
  m='2990790'>on</span> <span m='2991270'>its</span> <span
  m='2996300'>destination</span> <span m='2998700'>and</span> <span
  m='3004310'>source.</span> </p><p><span m='3005720'>So</span> <span
  m='3008060'>the</span> <span m='3008200'>only</span> <span
  m='3008400'>way</span> <span m='3008630'>that</span> <span
  m='3008850'>we</span> <span m='3008960'>can</span> <span
  m='3009080'>use</span> <span m='3009290'>the</span> <span
  m='3009380'>potential</span> <span m='3009770'>method</span> <span
  m='3010490'>is</span> <span m='3010630'>by</span> <span
  m='3010770'>ensuring</span> <span m='3011810'>that</span> <span
  m='3011980'>all</span> <span m='3012310'>of</span> <span
  m='3012400'>the</span> <span m='3012580'>shortest</span> <span
  m='3012850'>paths</span> <span m='3013810'>between</span> <span
  m='3014150'>any</span> <span m='3014330'>pair</span> <span
  m='3014630'>of</span> <span m='3014830'>vertices,</span> <span
  m='3016820'>we're</span> <span m='3017010'>only</span> <span
  m='3017170'>concerned</span> <span m='3017490'>about</span> <span
  m='3017680'>single</span> <span m='3017930'>source,</span> <span
  m='3018330'>single</span> <span m='3018440'>target</span> <span
  m='3018750'>here.</span> <span m='3018990'>But,</span> <span
  m='3019240'>in</span> <span m='3019370'>general,</span> <span
  m='3019720'>it's</span> <span m='3019830'>a</span> <span
  m='3019880'>good</span> <span m='3020050'>thing</span> <span
  m='3020580'>to</span> <span m='3020690'>not</span> <span
  m='3021410'>change</span> <span m='3021900'>any</span> <span
  m='3022080'>of</span> <span m='3022150'>the</span> <span
  m='3022220'>shortest</span> <span m='3022550'>paths.</span> <span
  m='3022920'>So</span> <span m='3023120'>what</span> <span
  m='3023310'>used</span> <span m='3023530'>to</span> <span
  m='3023580'>be</span> <span m='3023700'>a shortest</span> <span
  m='3024080'>path</span> <span m='3024420'>should</span> <span
  m='3024600'>stay</span> <span m='3024850'>the</span> <span
  m='3024950'>shortest</span> <span m='3025300'>path.</span> </p><p><span
  m='3026060'>And</span> <span m='3026200'>the</span> <span
  m='3026250'>way</span> <span m='3026380'>you</span> <span
  m='3026480'>do</span> <span m='3026620'>that</span> <span
  m='3026880'>is</span> <span m='3027040'>by</span> <span
  m='3027680'>having</span> <span m='3027980'>a</span> <span
  m='3028050'>potential</span> <span m='3028540'>function</span> <span
  m='3029460'>that,</span> <span m='3029680'>if</span> <span
  m='3029790'>you</span> <span m='3029870'>have</span> <span
  m='3030070'>an</span> <span m='3030170'>arbitrary</span> <span
  m='3030710'>path,</span> <span m='3031690'>essentially--</span> <span
  m='3032910'>and</span> <span m='3033040'>this</span> <span
  m='3033180'>is</span> <span m='3033230'>a</span> <span m='3033290'>path</span>
  <span m='3033570'>from</span> <span m='3033770'>s</span> <span
  m='3033990'>to</span> <span m='3034120'>t.</span> <span
  m='3034920'>That</span> <span m='3035320'>you</span> <span
  m='3035460'>subtract</span> <span m='3035970'>out</span> <span
  m='3036140'>something</span> <span m='3036540'>based</span> <span
  m='3036880'>on</span> <span m='3037370'>a</span> <span
  m='3037480'>function</span> <span m='3038470'>of</span> <span
  m='3038590'>the</span> <span m='3038650'>vertex.</span> <span
  m='3039100'>In</span> <span m='3039190'>this</span> <span
  m='3039330'>case,</span> <span m='3039500'>you</span> <span
  m='3039590'>have</span> <span m='3039740'>s.</span> <span
  m='3040510'>And,</span> <span m='3040820'>in</span> <span
  m='3040950'>this</span> <span m='3041100'>case,</span> <span
  m='3041290'>you</span> <span m='3041380'>have</span> <span
  m='3041520'>t.</span> </p><p><span m='3042200'>So</span> <span
  m='3042350'>the</span> <span m='3042420'>nice</span> <span
  m='3042640'>thing</span> <span m='3042790'>is</span> <span
  m='3042910'>that,</span> <span m='3043230'>any</span> <span
  m='3043480'>path</span> <span m='3043810'>from</span> <span
  m='3043980'>s</span> <span m='3044140'>to</span> <span m='3044270'>t</span>
  <span m='3045020'>is</span> <span m='3045170'>going</span> <span
  m='3045310'>to</span> <span m='3045360'>get</span> <span
  m='3045530'>shifted</span> <span m='3045940'>by</span> <span
  m='3046050'>the</span> <span m='3046230'>same</span> <span
  m='3046460'>amount,</span> <span m='3047390'>corresponding</span> <span
  m='3048020'>to</span> <span m='3049060'>this</span> <span
  m='3049890'>additional</span> <span m='3050340'>term</span> <span
  m='3050610'>here.</span> <span m='3051380'>So</span> <span
  m='3052010'>what</span> <span m='3052200'>that</span> <span
  m='3052320'>means</span> <span m='3052560'>is</span> <span
  m='3052680'>that</span> <span m='3053060'>the</span> <span
  m='3053160'>final</span> <span m='3053470'>shortest</span> <span
  m='3053830'>path</span> <span m='3054080'>that</span> <span
  m='3054180'>you</span> <span m='3054270'>discover</span> <span
  m='3055180'>will</span> <span m='3055350'>be</span> <span
  m='3055490'>the</span> <span m='3055580'>correct</span> <span
  m='3055850'>shortest</span> <span m='3056170'>path.</span> <span
  m='3056790'>You</span> <span m='3056900'>just</span> <span
  m='3057110'>may,</span> <span m='3057480'>hopefully,</span> <span
  m='3057950'>discover</span> <span m='3058420'>it</span> <span
  m='3058860'>faster.</span> <span m='3060080'>All</span> <span
  m='3060160'>right?</span> </p><p><span m='3060710'>So</span> <span
  m='3060850'>that's</span> <span m='3061060'>the</span> <span
  m='3061160'>correctness</span> <span m='3061620'>check.</span> <span
  m='3062350'>And</span> <span m='3062930'>I'll</span> <span
  m='3064180'>put</span> <span m='3064320'>this</span> <span
  m='3064460'>in</span> <span m='3064540'>the</span> <span
  m='3064610'>notes.</span> <span m='3064970'>And</span> <span
  m='3065230'>maybe</span> <span m='3066530'>the</span> <span
  m='3066740'>TAs</span> <span m='3067030'>can</span> <span m='3067220'>cover
  it</span> <span m='3067560'>in</span> <span m='3067620'>the</span> <span
  m='3067710'>section.</span> <span m='3068580'>But</span> <span
  m='3068700'>one</span> <span m='3068930'>way</span> <span
  m='3069120'>of</span> <span m='3069240'>getting</span> <span
  m='3071310'>this</span> <span m='3071520'>potential</span> <span
  m='3071960'>function</span> <span m='3072860'>is</span> <span
  m='3073020'>to</span> <span m='3073100'>use</span> <span
  m='3073640'>what's</span> <span m='3073910'>called</span> <span
  m='3074100'>a</span> <span m='3074170'>landmark.</span> </p><p><span
  m='3075560'>And</span> <span m='3075760'>so</span> <span
  m='3075870'>the</span> <span m='3075970'>basic</span> <span
  m='3076310'>idea</span> <span m='3078080'>is</span> <span
  m='3078320'>that</span> <span m='3080060'>you</span> <span
  m='3080180'>have</span> <span m='3080330'>a</span> <span
  m='3080380'>landmark,</span> <span m='3083310'>l,</span> <span
  m='3085040'>which</span> <span m='3085200'>is</span> <span
  m='3085310'>a</span> <span m='3085350'>vertex</span> <span
  m='3085970'>belonging</span> <span m='3086410'>to</span> <span
  m='3086540'>v.</span> <span m='3087740'>And</span> <span
  m='3089250'>we're</span> <span m='3089440'>going</span> <span
  m='3089700'>to</span> <span m='3090650'>pre-compute</span> <span
  m='3093860'>delta</span> <span m='3095830'>of</span> <span
  m='3096430'>u</span> <span m='3096830'>comma</span> <span
  m='3097100'>l.</span> <span m='3097880'>So,</span> <span
  m='3098900'>for</span> <span m='3099130'>any</span> <span
  m='3100050'>input</span> <span m='3101500'>vertex,</span> <span
  m='3102000'>you</span> <span m='3102090'>want</span> <span
  m='3102200'>to</span> <span m='3102240'>find</span> <span
  m='3102450'>the</span> <span m='3102510'>shortest</span> <span
  m='3102890'>path</span> <span m='3103150'>to</span> <span
  m='3103240'>this</span> <span m='3103410'>landmark.</span> </p><p><span
  m='3104320'>So</span> <span m='3104440'>it's</span> <span
  m='3104570'>like,</span> <span m='3105070'>change</span> <span
  m='3105430'>the</span> <span m='3105530'>source,</span> <span
  m='3106300'>but</span> <span m='3106480'>the</span> <span
  m='3106550'>destination</span> <span m='3107110'>stays</span> <span
  m='3107440'>the</span> <span m='3107540'>same.</span> <span
  m='3108770'>And</span> <span m='3109140'>the</span> <span
  m='3109220'>potential</span> <span m='3110830'>lambda</span> <span
  m='3111280'>t</span> <span m='3112094'>u</span> <span m='3113160'>is</span>
  <span m='3113370'>defined</span> <span m='3113900'>as</span> <span
  m='3114510'>delta</span> <span m='3116030'>of u,</span> <span
  m='3116385'>l</span> <span m='3117240'>minus</span> <span
  m='3118430'>delta</span> <span m='3118990'>of</span> <span
  m='3119420'>t,</span> <span m='3119620'>l.</span> <span m='3120860'>OK?</span>
  <span m='3121340'>So</span> <span m='3121450'>you</span> <span
  m='3121570'>have</span> <span m='3121780'>the</span> <span
  m='3121850'>source,</span> <span m='3122180'>s.</span> <span
  m='3122890'>You</span> <span m='3123000'>have</span> <span
  m='3123150'>a</span> <span m='3123200'>destination,</span> <span
  m='3123750'>t.</span> <span m='3124310'>And</span> <span
  m='3124430'>now</span> <span m='3124570'>you</span> <span
  m='3124680'>have</span> <span m='3124840'>a</span> <span
  m='3124880'>landmark,</span> <span m='3125490'>l.</span> </p><p><span
  m='3128180'>I'm</span> <span m='3128370'>going</span> <span
  m='3128510'>to</span> <span m='3128580'>pre-compute</span> <span
  m='3130770'>delta</span> <span m='3131170'>u,l</span> <span
  m='3132540'>for</span> <span m='3132920'>all</span> <span m='3133260'>u</span>
  <span m='3135400'>belonging</span> <span m='3135840'>to</span> <span
  m='3135930'>v.</span> <span m='3136710'>And</span> <span
  m='3137160'>I'm</span> <span m='3137320'>also</span> <span
  m='3137530'>going</span> <span m='3137650'>to</span> <span
  m='3137700'>pre-compute,</span> <span m='3139020'>for</span> <span
  m='3139360'>a given</span> <span m='3139660'>t,</span> <span
  m='3141450'>delta</span> <span m='3141820'>t,</span> <span
  m='3142060'>l.</span> <span m='3142220'>So</span> <span
  m='3142330'>that's</span> <span m='3142510'>just</span> <span
  m='3142670'>a</span> <span m='3142730'>single</span> <span
  m='3143400'>t.</span> <span m='3143720'>So</span> <span
  m='3143870'>that's</span> <span m='3144050'>just</span> <span
  m='3144220'>one</span> <span m='3144430'>computation.</span> <span
  m='3145370'>This</span> <span m='3145510'>one</span> <span
  m='3145680'>is</span> <span m='3145770'>much</span> <span
  m='3145990'>more</span> <span m='3147250'>computation.</span> </p><p><span
  m='3148380'>And,</span> <span m='3148620'>if</span> <span m='3148730'>I</span>
  <span m='3148820'>use</span> <span m='3149790'>this</span> <span
  m='3150330'>potential,</span> <span m='3151380'>you</span> <span
  m='3151490'>can</span> <span m='3151600'>show</span> <span
  m='3151920'>that</span> <span m='3152780'>it's</span> <span
  m='3153180'>correct,</span> <span m='3155360'>using</span> <span
  m='3155630'>the</span> <span m='3155720'>triangle</span> <span
  m='3156160'>inequality.</span> <span m='3157350'>And</span> <span
  m='3158380'>this</span> <span m='3158580'>is</span> <span
  m='3158690'>not</span> <span m='3158810'>a heuristic.</span> <span
  m='3160240'>With</span> <span m='3160470'>the</span> <span
  m='3160570'>correct</span> <span m='3160920'>choice</span> <span
  m='3161290'>of</span> <span m='3161400'>landmark,</span> <span
  m='3162530'>Dijkstra,</span> <span m='3163590'>empirically,</span> <span
  m='3164450'>will</span> <span m='3164650'>run</span> <span
  m='3164880'>faster.</span> </p><p><span m='3165970'>So,</span> <span
  m='3166330'>if</span> <span m='3166440'>you</span> <span
  m='3166530'>know</span> <span m='3166860'>for</span> <span
  m='3167080'>sure</span> <span m='3167420'>that</span> <span
  m='3167580'>you</span> <span m='3167660'>need</span> <span
  m='3167810'>to</span> <span m='3167850'>go</span> <span
  m='3168010'>through</span> <span m='3168160'>middle</span> <span
  m='3168390'>America</span> <span m='3169180'>to</span> <span
  m='3169250'>get</span> <span m='3169430'>from</span> <span m='3169610'>Cal
  Tech</span> <span m='3170030'>to</span> <span m='3170130'>Boston--</span>
  <span m='3170940'>and</span> <span m='3172720'>there's</span> <span
  m='3172800'>one</span> <span m='3173000'>particular</span> <span
  m='3173320'>landmark</span> <span m='3174030'>you</span> <span
  m='3174100'>want</span> <span m='3174210'>to</span> <span
  m='3174250'>go</span> <span m='3174390'>through--</span> <span
  m='3176750'>Texas</span> <span m='3177170'>or</span> <span
  m='3177270'>something.</span> <span m='3178500'>And</span> <span
  m='3179290'>you</span> <span m='3179350'>pick</span> <span
  m='3179580'>Austin,</span> <span m='3179930'>Texas,</span> <span
  m='3180780'>then</span> <span m='3181020'>you</span> <span
  m='3181120'>can</span> <span m='3181240'>do</span> <span
  m='3181340'>this</span> <span m='3181510'>computation.</span> </p><p><span
  m='3182840'>And</span> <span m='3183880'>maybe</span> <span
  m='3184080'>Dijkstra</span> <span m='3184430'>runs</span> <span
  m='3184880'>2x</span> <span m='3185490'>faster,</span> <span
  m='3185960'>20%</span> <span m='3186450'>faster.</span> <span
  m='3187250'>All</span> <span m='3187310'>right?</span> <span m='3187770'>I'll
  put</span> <span m='3187990'>the</span> <span m='3188460'>argument</span>
  <span m='3188870'>about</span> <span m='3189080'>correctness,</span> <span
  m='3189740'>and</span> <span m='3189930'>the</span> <span
  m='3190010'>specifics</span> <span m='3190590'>of</span> <span
  m='3190890'>these</span> <span m='3191140'>things,</span> <span
  m='3191370'>in</span> <span m='3191470'>the</span> <span
  m='3191550'>notes.</span> <span m='3192790'>And</span> <span
  m='3193310'>you</span> <span m='3193440'>can</span> <span
  m='3193540'>take</span> <span m='3193680'>a</span> <span
  m='3193720'>look</span> <span m='3193850'>at</span> <span
  m='3193920'>it</span> <span m='3194400'>offline.</span> </p>
uid: fb81fef88945bb4849a94dbe8c9f9b29
type: courses
layout: video
---
