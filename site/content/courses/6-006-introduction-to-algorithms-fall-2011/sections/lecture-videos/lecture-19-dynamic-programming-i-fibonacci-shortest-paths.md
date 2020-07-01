---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture introduces dynamic programming,
  in which careful exhaustive search can be used to design polynomial-time
  algorithms. The Fibonacci and shortest paths problems are used to introduce
  guessing, memoization, and reusing solutions to subproblems.</p>
  <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: OQ5jsbhAv_M
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Video-YouTube-Stream
    type: Video
    uid: 704ccf4aa1374db3da0ac654c3630e58
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/OQ5jsbhAv_M/default.jpg'
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f63b0968acf5e88c6abdb26ca8541ac4
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-19-dynamic-programming/id585700718?i=126127757
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Video-iTunes U-MP4
    type: Video
    uid: 62f5972db6040a7681266aa7c9d79bab
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec19_300k.mp4'
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Video-Internet Archive-MP4
    type: Video
    uid: 389b3eb2476ee2fdf3e899bce2d6c417
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: OQ5jsbhAv_M
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 883801fdbd21f9d0464b4ed2601eabe2
  - id: OQ5jsbhAv_M.srt
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/OQ5jsbhAv_M.srt
    title: 3play caption file
    type: null
    uid: 31ab184e04090d9b74a744411fd68de4
  - id: OQ5jsbhAv_M.pdf
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/OQ5jsbhAv_M.pdf
    title: 3play pdf file
    type: null
    uid: 3eb48db83a86800455567bc7daa7c0f9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f24fd0ba705336ab6fbc74f77d2d54f8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 57d2b18993565b569a7fe3bb3033de75
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 663bb4250b2e094eeec3cb374c13a86e
inline_embed_id: '92198792lecture19:dynamicprogrammingi:fibonacci,shortestpaths82685712'
order_index: 236
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-19-dynamic-programming-i-fibonacci-shortest-paths
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths
title: 'Lecture 19: Dynamic Programming I: Fibonacci, Shortest Paths'
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4710'>will</span> <span m='4860'>help</span>
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
  m='21370'>PROFESSOR: We're going to</span> <span m='21410'>start</span> <span
  m='21780'>a</span> <span m='21820'>brand</span> <span m='22290'>new,</span>
  <span m='22670'>exciting</span> <span m='23080'>topic,</span> <span
  m='23630'>dynamic</span> <span m='24230'>programming.</span> </p><p><span
  m='25435'>AUDIENCE: Yes!</span> </p><p><span m='25870'>PROFESSOR: Yeah!</span>
  <span m='26830'>So</span> <span m='27360'>exciting.</span> <span
  m='28300'>Actually,</span> <span m='28600'>I am</span> <span
  m='28850'>really</span> <span m='29090'>excited</span> <span
  m='29530'>because</span> <span m='29830'>dynamic</span> <span
  m='30140'>programming</span> <span m='30620'>is</span> <span
  m='30740'>my</span> <span m='30950'>favorite</span> <span
  m='31470'>thing</span> <span m='31640'>in</span> <span m='31710'>the</span>
  <span m='31800'>world,</span> <span m='32350'>in</span> <span
  m='32509'>algorithms.</span> <span m='33820'>And</span> <span
  m='35050'>it's</span> <span m='35260'>going</span> <span m='35390'>to</span>
  <span m='35450'>be</span> <span m='35580'>the</span> <span
  m='35690'>next</span> <span m='36020'>four</span> <span
  m='36380'>lectures,</span> <span m='37070'>it's</span> <span
  m='37170'>so</span> <span m='37320'>exciting.</span> <span m='38640'>It</span>
  <span m='38850'>has</span> <span m='39060'>lots</span> <span
  m='39350'>of</span> <span m='39460'>different</span> <span
  m='39880'>facets.</span> <span m='40380'>It's</span> <span m='40560'>a</span>
  <span m='40620'>very</span> <span m='41430'>general,</span> <span
  m='42220'>powerful</span> <span m='43220'>design</span> <span
  m='43690'>technique.</span> <span m='44720'>We</span> <span
  m='44830'>don't</span> <span m='45040'>talk</span> <span m='45280'>a</span>
  <span m='45340'>lot</span> <span m='45650'>about</span> <span
  m='45880'>algorithm</span> <span m='46340'>design</span> <span
  m='46700'>in</span> <span m='46780'>this</span> <span m='46940'>class,</span>
  <span m='47390'>but</span> <span m='47610'>dynamic</span> <span
  m='47950'>programming</span> <span m='48380'>is</span> <span
  m='48490'>one</span> <span m='48750'>that's</span> <span m='49460'>so</span>
  <span m='49670'>important.</span> <span m='50060'>And</span> <span
  m='50200'>also</span> <span m='50450'>takes</span> <span m='50720'>a</span>
  <span m='50770'>little</span> <span m='50980'>while</span> <span
  m='51260'>to</span> <span m='51330'>settle</span> <span m='51730'>in.</span>
  <span m='52000'>We</span> <span m='52710'>like</span> <span
  m='52910'>to</span> <span m='53510'>injected</span> <span m='54030'>it
  into</span> <span m='54270'>you</span> <span m='54890'>now,</span> <span
  m='55720'>in</span> <span m='55860'>006.</span> </p><p><span
  m='57510'>So</span> <span m='57680'>in</span> <span m='57770'>general,</span>
  <span m='59730'>our</span> <span m='59880'>motivation</span> <span
  m='60540'>is</span> <span m='60730'>designing</span> <span
  m='61140'>new</span> <span m='61370'>algorithms</span> <span
  m='65920'>and</span> <span m='66510'>dynamic</span> <span
  m='66880'>programming,</span> <span m='68250'>also</span> <span
  m='68610'>called</span> <span m='69090'>DP,</span> <span m='70600'>is</span>
  <span m='71830'>a</span> <span m='71930'>great</span> <span
  m='72190'>way--</span> <span m='74130'>or</span> <span m='74230'>a</span>
  <span m='74400'>very</span> <span m='74780'>general,</span> <span
  m='77310'>powerful</span> <span m='77690'>way</span> <span m='77840'>to</span>
  <span m='77930'>do</span> <span m='78050'>this.</span> </p><p><span
  m='93860'>It's</span> <span m='94120'>especially</span> <span
  m='95180'>good,</span> <span m='95630'>and intended</span> <span
  m='96350'>for,</span> <span m='96700'>optimization</span> <span
  m='97540'>problems,</span> <span m='98010'>things</span> <span
  m='98240'>like</span> <span m='98400'>shortest</span> <span
  m='98750'>paths.</span> <span m='99100'>You</span> <span m='99210'>want</span>
  <span m='99360'>to</span> <span m='99410'>find</span> <span
  m='99660'>the</span> <span m='99730'>best</span> <span m='100100'>way</span>
  <span m='100240'>to</span> <span m='100350'>do</span> <span
  m='100520'>something.</span> <span m='101510'>Shortest</span> <span
  m='101830'>path</span> <span m='102080'>is</span> <span m='102280'>you want to
  find</span> <span m='102450'>the</span> <span m='102520'>shortest</span> <span
  m='103190'>path,</span> <span m='104050'>the</span> <span
  m='104140'>minimum-length</span> <span m='105160'>path.</span> <span
  m='106600'>You</span> <span m='106710'>want</span> <span m='106840'>to</span>
  <span m='107060'>minimize,</span> <span m='107610'>maximize</span> <span
  m='108090'>something,</span> <span m='108400'>that's</span> <span
  m='108610'>an</span> <span m='108690'>optimization</span> <span
  m='109350'>problem,</span> <span m='109830'>and</span> <span
  m='110280'>typically</span> <span m='111320'>good</span> <span
  m='111510'>algorithms</span> <span m='111920'>to</span> <span
  m='112030'>solve</span> <span m='112320'>them</span> <span
  m='112460'>involve</span> <span m='112810'>dynamic</span> <span
  m='113180'>programming.</span> <span m='114090'>It's a</span> <span
  m='114430'>bit</span> <span m='114570'>of</span> <span m='114660'>a</span>
  <span m='114710'>broad</span> <span m='115020'>statement.</span> </p><p><span
  m='116390'>You</span> <span m='116570'>can</span> <span m='116710'>also</span>
  <span m='116990'>think</span> <span m='117220'>of</span> <span
  m='117310'>dynamic</span> <span m='117740'>programming</span> <span
  m='118320'>as</span> <span m='118600'>a</span> <span m='118670'>kind</span>
  <span m='118970'>of</span> <span m='119050'>exhaustive</span> <span
  m='119620'>search.</span> <span m='121700'>Which</span> <span
  m='121930'>is</span> <span m='122000'>usually</span> <span m='122410'>a</span>
  <span m='122460'>bad</span> <span m='122810'>thing</span> <span
  m='122990'>to</span> <span m='123110'>do</span> <span
  m='123270'>because</span> <span m='123580'>it leads</span> <span
  m='123640'>to</span> <span m='123940'>exponential</span> <span
  m='124560'>time.</span> <span m='125260'>But</span> <span m='125370'>if</span>
  <span m='125490'>you</span> <span m='125630'>do</span> <span
  m='125860'>it</span> <span m='126330'>in</span> <span m='126460'>a</span>
  <span m='126510'>clever</span> <span m='126950'>way,</span> <span
  m='128039'>via</span> <span m='128210'>dynamic</span> <span
  m='128630'>programming,</span> <span m='129449'>you</span> <span
  m='129740'>typically</span> <span m='130210'>get</span> <span
  m='131020'>polynomial</span> <span m='131610'>time.</span> </p><p><span
  m='133670'>So</span> <span m='134250'>one</span> <span
  m='134580'>perspective</span> <span m='135990'>is</span> <span
  m='136320'>that</span> <span m='136550'>dynamic</span> <span
  m='136890'>programming</span> <span m='137430'>is</span> <span
  m='137560'>approximately</span> <span m='140220'>careful</span> <span
  m='141900'>brute</span> <span m='142140'>force.</span> <span
  m='143170'>It's</span> <span m='143500'>kind</span> <span m='143690'>of</span>
  <span m='143800'>a</span> <span m='143950'>funny</span> <span
  m='144150'>combination.</span> <span m='145650'>A</span> <span m='146090'>bit
  of</span> <span m='146530'>an</span> <span m='146800'>oxymoron.</span> <span
  m='149340'>But</span> <span m='149750'>we</span> <span m='150000'>take</span>
  <span m='150230'>the</span> <span m='150330'>idea of</span> <span
  m='150580'>brute</span> <span m='150830'>force,</span> <span
  m='151210'>which</span> <span m='151410'>is,</span> <span
  m='151600'>try</span> <span m='151970'>all</span> <span
  m='152220'>possibilities</span> <span m='154200'>and</span> <span
  m='154450'>you</span> <span m='154520'>do</span> <span m='154640'>it</span>
  <span m='154730'>carefully</span> <span m='155690'>and</span> <span
  m='155860'>you</span> <span m='155960'>get</span> <span m='156110'>it
  to</span> <span m='156350'>polynomial</span> <span m='156860'>time.</span>
  <span m='157110'>There</span> <span m='157240'>are</span> <span
  m='157260'>a</span> <span m='157320'>lot</span> <span m='157580'>of</span>
  <span m='157680'>problems</span> <span m='158180'>where</span> <span
  m='158370'>essentially</span> <span m='158860'>the</span> <span
  m='159080'>only</span> <span m='159450'>known</span> <span
  m='159730'>polynomial</span> <span m='160280'>time</span> <span
  m='160520'>algorithm</span> <span m='161480'>is</span> <span
  m='161650'>via</span> <span m='161830'>dynamic</span> <span
  m='162270'>programming.</span> <span m='162650'>It doesn't</span> <span
  m='162940'>always</span> <span m='163190'>work,</span> <span
  m='163700'>there's</span> <span m='163850'>some</span> <span
  m='164010'>problems</span> <span m='164440'>where</span> <span
  m='164590'>we</span> <span m='164710'>don't</span> <span
  m='164900'>think</span> <span m='165070'>there</span> <span
  m='165310'>are</span> <span m='165540'>polynomial</span> <span
  m='166040'>time</span> <span m='166270'>algorithms,</span> <span
  m='166810'>but</span> <span m='168790'>when</span> <span
  m='168950'>it's</span> <span m='169090'>possible</span> <span
  m='169620'>DP</span> <span m='169940'>is</span> <span m='170120'>a</span>
  <span m='170220'>nice,</span> <span m='170500'>sort</span> <span
  m='170660'>of,</span> <span m='170770'>general</span> <span
  m='171160'>approach</span> <span m='171570'>to</span> <span
  m='171730'>it.</span> </p><p><span m='174290'>And</span> <span
  m='174480'>we're</span> <span m='174600'>going</span> <span
  m='174700'>to</span> <span m='174740'>be</span> <span
  m='174850'>talking</span> <span m='175200'>a</span> <span
  m='175250'>lot</span> <span m='175500'>about</span> <span
  m='175740'>dynamic</span> <span m='175960'>programming.</span> <span
  m='176620'>There's</span> <span m='176770'>a</span> <span
  m='176820'>lot</span> <span m='177000'>of</span> <span
  m='177080'>different</span> <span m='178290'>ways</span> <span
  m='178450'>to</span> <span m='178540'>think</span> <span
  m='178750'>about</span> <span m='179040'>it.</span> <span
  m='179850'>We'll</span> <span m='180220'>look at a</span> <span
  m='180260'>few</span> <span m='181260'>today.</span> <span
  m='182690'>We're</span> <span m='182830'>going</span> <span
  m='182950'>to</span> <span m='183490'>warm</span> <span m='183880'>up</span>
  <span m='184040'>today</span> <span m='184330'>with</span> <span
  m='184470'>some</span> <span m='184630'>fairly</span> <span
  m='185050'>easy</span> <span m='185380'>problems</span> <span
  m='185760'>that</span> <span m='185870'>we</span> <span
  m='186020'>already</span> <span m='186390'>know</span> <span
  m='186580'>how</span> <span m='186680'>to</span> <span
  m='186770'>solve,</span> <span m='187170'>namely</span> <span
  m='188010'>computing</span> <span m='188410'>Fibonacci</span> <span
  m='189010'>numbers.</span> <span m='189690'>It's</span> <span
  m='190190'>pretty</span> <span m='190430'>easy.</span> <span
  m='191210'>And</span> <span m='191650'>computing</span> <span
  m='192190'>shortest</span> <span m='192465'>paths.</span> <span
  m='193170'>And</span> <span m='193390'>then</span> <span m='193520'>in</span>
  <span m='193600'>the</span> <span m='193690'>next</span> <span
  m='193960'>three</span> <span m='194120'>lectures</span> <span
  m='194550'>we're</span> <span m='194720'>going</span> <span
  m='194850'>to</span> <span m='194900'>get</span> <span m='195090'>to</span>
  <span m='195200'>more</span> <span m='195500'>interesting</span> <span
  m='195890'>examples</span> <span m='196530'>where</span> <span
  m='198320'>it's</span> <span m='198550'>pretty</span> <span
  m='199030'>surprising</span> <span m='199660'>that</span> <span
  m='199770'>you</span> <span m='199890'>can</span> <span m='200020'>even</span>
  <span m='200210'>solve</span> <span m='200480'>the</span> <span
  m='200570'>problem</span> <span m='201090'>in</span> <span
  m='201250'>polynomial</span> <span m='201770'>time.</span> </p><p><span
  m='204160'>Probably</span> <span m='204660'>the</span> <span
  m='204910'>first</span> <span m='205170'>burning</span> <span
  m='205750'>question</span> <span m='205960'>on</span> <span
  m='206060'>your</span> <span m='206170'>mind,</span> <span
  m='206470'>though,</span> <span m='206760'>is</span> <span
  m='207045'>why</span> <span m='207330'>is</span> <span m='207500'>it</span>
  <span m='207610'>called</span> <span m='208170'>dynamic</span> <span
  m='208740'>programming?</span> <span m='209280'>What</span> <span
  m='209400'>does</span> <span m='209520'>that</span> <span
  m='209670'>even</span> <span m='210000'>mean?</span> <span
  m='211240'>And</span> <span m='211640'>I</span> <span m='211710'>used</span>
  <span m='212000'>to</span> <span m='212110'>have</span> <span
  m='212400'>this</span> <span m='212690'>spiel</span> <span
  m='213020'>about,</span> <span m='214150'>well,</span> <span
  m='214620'>you</span> <span m='214760'>know,</span> <span
  m='214920'>programming</span> <span m='215730'>refers</span> <span
  m='216270'>to</span> <span m='216410'>the--</span> <span m='217170'>I</span>
  <span m='217300'>think</span> <span m='217480'>it's</span> <span
  m='217620'>the</span> <span m='217680'>British</span> <span
  m='218210'>notion</span> <span m='218640'>of</span> <span
  m='218760'>the</span> <span m='218870'>word,</span> <span
  m='219550'>where</span> <span m='219700'>it's</span> <span
  m='219830'>about</span> <span m='220290'>optimization.</span> <span
  m='222040'>Optimization</span> <span m='223130'>in</span> <span
  m='223530'>American</span> <span m='223910'>English</span> <span
  m='224270'>is</span> <span m='224360'>something</span> <span
  m='224750'>like</span> <span m='225300'>programming</span> <span
  m='226100'>in</span> <span m='226410'>British</span> <span
  m='226740'>English,</span> <span m='227690'>where</span> <span
  m='228910'>you</span> <span m='229240'>want</span> <span m='229350'>to</span>
  <span m='229390'>set</span> <span m='229590'>up</span> <span
  m='229780'>the</span> <span m='229920'>program--</span> <span
  m='230350'>the</span> <span m='230430'>schedule</span> <span
  m='230930'>for</span> <span m='231210'>your</span> <span
  m='231450'>trains</span> <span m='231920'>or</span> <span
  m='232030'>something,</span> <span m='232800'>where</span> <span
  m='232950'>programming</span> <span m='233390'>comes</span> <span
  m='233640'>from</span> <span m='233750'>originally.</span> </p><p><span
  m='234850'>But</span> <span m='235140'>I</span> <span m='235290'>looked</span>
  <span m='235580'>up</span> <span m='235750'>the</span> <span
  m='236030'>actual</span> <span m='237030'>history</span> <span
  m='237480'>of,</span> <span m='237675'>why</span> <span m='237870'>is</span>
  <span m='238000'>it</span> <span m='238110'>called</span> <span
  m='238350'>dynamic</span> <span m='238730'>programming.</span> <span
  m='240730'>Dynamic</span> <span m='241080'>programming</span> <span
  m='241400'>was</span> <span m='241550'>invented</span> <span
  m='241960'>by</span> <span m='242140'>a</span> <span m='242170'>guy</span>
  <span m='242350'>named</span> <span m='243430'>Richard</span> <span
  m='243930'>Bellman.</span> <span m='244960'>You</span> <span
  m='245080'>may</span> <span m='245290'>have</span> <span
  m='245410'>heard</span> <span m='245610'>of</span> <span
  m='245680'>Bellman</span> <span m='246280'>in</span> <span
  m='246440'>the</span> <span m='246530'>Bellman-Ford</span> <span
  m='247240'>algorithm.</span> <span m='247850'>So</span> <span
  m='248050'>this</span> <span m='248260'>is</span> <span
  m='248470'>actually</span> <span m='248750'>the</span> <span
  m='248860'>precursor</span> <span m='249520'>to</span> <span
  m='249590'>Bellman-Ford.</span> <span m='250360'>And</span> <span
  m='250640'>we're</span> <span m='250800'>going</span> <span
  m='250880'>to</span> <span m='250950'>see</span> <span
  m='251150'>Bellman-Ford</span> <span m='251840'>come</span> <span
  m='252080'>up</span> <span m='252660'>naturally</span> <span
  m='253290'>in</span> <span m='253410'>this</span> <span
  m='253510'>setting.</span> </p><p><span m='255480'>So</span> <span
  m='255650'>here's</span> <span m='256519'>a</span> <span
  m='256680'>quote</span> <span m='256980'>about</span> <span
  m='257300'>him.</span> <span m='257519'>It says,</span> <span
  m='258200'>Bellman</span> <span m='258600'>explained</span> <span
  m='259050'>that</span> <span m='259140'>he</span> <span
  m='259300'>invented</span> <span m='259690'>the</span> <span
  m='259790'>name</span> <span m='260160'>dynamic</span> <span
  m='260670'>programming</span> <span m='261220'>to</span> <span
  m='261320'>hide</span> <span m='261740'>the</span> <span
  m='261810'>fact</span> <span m='262250'>that</span> <span m='262340'>he</span>
  <span m='262450'>was</span> <span m='262620'>doing</span> <span
  m='262860'>mathematical</span> <span m='263630'>research.</span> <span
  m='265840'>He</span> <span m='265960'>was</span> <span
  m='266080'>working</span> <span m='266410'>at</span> <span
  m='266530'>this</span> <span m='266680'>place</span> <span
  m='266880'>called</span> <span m='267050'>Rand,</span> <span
  m='267950'>and</span> <span m='268880'>under</span> <span m='269240'>a</span>
  <span m='269400'>secretary</span> <span m='269665'>of</span> <span
  m='269930'>defense</span> <span m='270290'>who</span> <span
  m='270380'>had</span> <span m='270580'>a</span> <span
  m='270650'>pathological</span> <span m='271510'>fear</span> <span
  m='271890'>and</span> <span m='272070'>hatred</span> <span
  m='272520'>for</span> <span m='272630'>the</span> <span m='272770'>term</span>
  <span m='273460'>research.</span> <span m='275120'>So</span> <span
  m='275280'>he</span> <span m='275440'>settled</span> <span
  m='275750'>on</span> <span m='275850'>the</span> <span m='275950'>term</span>
  <span m='276160'>dynamic</span> <span m='276530'>programming</span> <span
  m='276970'>because</span> <span m='277300'>it</span> <span
  m='277390'>would</span> <span m='278330'>be</span> <span
  m='278460'>difficult</span> <span m='279110'>to</span> <span
  m='279200'>give</span> <span m='279450'>a</span> <span
  m='279530'>pejorative</span> <span m='280330'>meaning</span> <span
  m='281300'>to</span> <span m='281560'>it.</span> <span m='282000'>And</span>
  <span m='282200'>because</span> <span m='282520'>it</span> <span
  m='282600'>was</span> <span m='283030'>something</span> <span
  m='283440'>not</span> <span m='283650'>even</span> <span m='283870'>a</span>
  <span m='283970'>congressman</span> <span m='284770'>could</span> <span
  m='284950'>object</span> <span m='285360'>to.</span> <span
  m='285830'>Basically,</span> <span m='286280'>it</span> <span
  m='286410'>sounded</span> <span m='286780'>cool.</span> </p><p><span
  m='289430'>So</span> <span m='290420'>that's</span> <span
  m='291050'>the</span> <span m='291170'>origin</span> <span
  m='291500'>of</span> <span m='291600'>the</span> <span m='291660'>name</span>
  <span m='291820'>dynamic</span> <span m='292160'>programming.</span> <span
  m='292540'>So</span> <span m='292660'>why</span> <span m='292820'>is</span>
  <span m='292880'>the</span> <span m='292970'>called</span> <span
  m='293160'>that?</span> <span m='293630'>Who</span> <span
  m='293810'>knows.</span> <span m='295450'>I</span> <span
  m='295550'>mean,</span> <span m='295750'>now</span> <span
  m='295910'>you</span> <span m='296060'>know.</span> <span
  m='296780'>But</span> <span m='297010'>it's</span> <span
  m='297230'>not--</span> <span m='298330'>it's</span> <span m='298700'>a</span>
  <span m='298770'>weird</span> <span m='299010'>term.</span> <span
  m='299430'>Just</span> <span m='299640'>take</span> <span m='299830'>it</span>
  <span m='299930'>for</span> <span m='300040'>what</span> <span
  m='300200'>it</span> <span m='300310'>is.</span> <span m='304150'>It</span>
  <span m='304320'>may</span> <span m='304470'>make some kind of</span> <span
  m='304720'>sense,</span> <span m='305720'>but--</span> </p><p><span
  m='306820'>All</span> <span m='307220'>right.</span> <span
  m='307500'>So</span> <span m='307660'>we</span> <span m='307830'>are</span>
  <span m='307900'>going</span> <span m='308130'>to</span> <span
  m='308290'>start</span> <span m='313470'>with</span> <span
  m='313670'>this</span> <span m='313850'>example</span> <span
  m='314260'>of</span> <span m='314330'>how</span> <span m='314570'>to</span>
  <span m='314680'>compute</span> <span m='315100'>Fibonacci</span> <span
  m='315740'>numbers.</span> <span m='316800'>And</span> <span
  m='317060'>maybe</span> <span m='317300'>before</span> <span
  m='317660'>we</span> <span m='317920'>actually</span> <span
  m='318340'>start</span> <span m='318700'>I'm</span> <span
  m='318860'>going</span> <span m='319110'>to</span> <span
  m='319710'>give</span> <span m='319940'>you</span> <span m='320140'>a</span>
  <span m='320770'>sneak</span> <span m='321150'>peak</span> <span
  m='322456'>of</span> <span m='322890'>what</span> <span m='323250'>you</span>
  <span m='323370'>can</span> <span m='323510'>think</span> <span
  m='323670'>of</span> <span m='323740'>dynamic</span> <span
  m='324130'>programming</span> <span m='324600'>as.</span> <span
  m='326480'>And</span> <span m='334690'>this</span> <span
  m='336060'>equation,</span> <span m='337030'>so</span> <span
  m='337160'>to</span> <span m='337230'>speak,</span> <span m='337620'>is</span>
  <span m='337830'>going</span> <span m='338070'>to</span> <span
  m='339780'>change</span> <span m='340760'>throughout</span> <span
  m='341430'>today's</span> <span m='341810'>lecture.</span> <span
  m='342400'>In</span> <span m='342770'>the</span> <span m='342960'>end</span>
  <span m='343140'>we'll</span> <span m='343250'>settle</span> <span
  m='343560'>on</span> <span m='343730'>a</span> <span m='343790'>sort</span>
  <span m='343970'>of</span> <span m='344070'>more</span> <span
  m='344820'>accurate</span> <span m='345310'>perspective.</span> </p><p><span
  m='346760'>The</span> <span m='346850'>basic</span> <span
  m='347660'>idea</span> <span m='347870'>of</span> <span
  m='347940'>dynamic</span> <span m='348370'>programming</span> <span
  m='349020'>is</span> <span m='349290'>to</span> <span m='349470'>take</span>
  <span m='349720'>a</span> <span m='349770'>problem,</span> <span
  m='351050'>split</span> <span m='351450'>it into</span> <span
  m='351760'>subproblems,</span> <span m='353120'>solve</span> <span
  m='353490'>those</span> <span m='353660'>subproblems,</span> <span
  m='354280'>and</span> <span m='354500'>reuse</span> <span
  m='355380'>the</span> <span m='355510'>solutions</span> <span
  m='355780'>to</span> <span m='356050'>your</span> <span
  m='356280'>subproblems.</span> <span m='356720'>It's</span> <span
  m='357150'>like</span> <span m='357330'>a</span> <span
  m='357400'>lesson</span> <span m='357720'>in</span> <span
  m='357810'>recycling.</span> <span m='359520'>So</span> <span
  m='359750'>we'll</span> <span m='359900'>see</span> <span
  m='360130'>that</span> <span m='361590'>in</span> <span
  m='361860'>Fibonacci</span> <span m='362430'>numbers.</span> </p><p><span
  m='363290'>So</span> <span m='363440'>you</span> <span
  m='363590'>remember</span> <span m='363880'>Fibonacci</span> <span
  m='364390'>numbers,</span> <span m='364770'>right?</span> <span
  m='366270'>The</span> <span m='366720'>number</span> <span
  m='367120'>of</span> <span m='367220'>rabbits</span> <span
  m='367640'>you</span> <span m='367750'>have on</span> <span m='367940'>day
  n,</span> <span m='368850'>if</span> <span m='369100'>they</span> <span
  m='370050'>reproduce.</span> <span m='375020'>We've</span> <span
  m='376220'>mentioned</span> <span m='376480'>them</span> <span
  m='376740'>before,</span> <span m='377200'>we're</span> <span
  m='377390'>talking</span> <span m='377680'>about</span> <span
  m='377920'>AVL</span> <span m='378320'>trees,</span> <span m='378630'>I</span>
  <span m='378710'>think.</span> <span m='379910'>So</span> <span
  m='380110'>this</span> <span m='380330'>is</span> <span m='380990'>the</span>
  <span m='381460'>usual--</span> <span m='382900'>you</span> <span
  m='383010'>can</span> <span m='383140'>think</span> <span m='383290'>of</span>
  <span m='383380'>it as</span> <span m='383550'>a</span> <span
  m='383600'>recursive</span> <span m='384140'>definition</span> <span
  m='385010'>or</span> <span m='385260'>recurrence</span> <span
  m='385810'>on</span> <span m='386220'>Fibonacci</span> <span
  m='386710'>numbers.</span> <span m='387770'>It's</span> <span
  m='387820'>the</span> <span m='387910'>definition</span> <span
  m='388580'>of</span> <span m='388710'>what</span> <span m='389040'>the</span>
  <span m='389240'>nth</span> <span m='389480'>Fibonacci</span> <span
  m='390000'>number</span> <span m='390290'>is.</span> </p><p><span
  m='390890'>So</span> <span m='391050'>let's</span> <span
  m='391250'>suppose</span> <span m='391660'>our</span> <span
  m='391810'>goal--</span> <span m='393570'>an</span> <span
  m='393700'>algorithmic</span> <span m='394220'>problem</span> <span
  m='394580'>is,</span> <span m='394810'>compute</span> <span
  m='395290'>the</span> <span m='395430'>nth</span> <span
  m='395900'>Fibonacci</span> <span m='396400'>number.</span> <span
  m='399220'>And</span> <span m='399520'>I'm</span> <span
  m='399630'>going</span> <span m='399840'>to</span> <span
  m='399970'>assume</span> <span m='400290'>here</span> <span
  m='400550'>that</span> <span m='401362'>that</span> <span
  m='401770'>fits</span> <span m='402070'>in</span> <span m='402180'>a</span>
  <span m='402260'>word.</span> <span m='402710'>And</span> <span
  m='402850'>so</span> <span m='403570'>basic</span> <span
  m='403930'>arithmetic,</span> <span m='404540'>addition,</span> <span
  m='404980'>whatever's</span> <span m='405440'>constant</span> <span
  m='405850'>time</span> <span m='406210'>per</span> <span
  m='406600'>operation.</span> <span m='408100'>So</span> <span
  m='409550'>how</span> <span m='409780'>do</span> <span m='409850'>we</span>
  <span m='409960'>do</span> <span m='410130'>it?</span> <span
  m='410590'>You</span> <span m='410820'>all</span> <span m='410930'>know</span>
  <span m='411110'>how</span> <span m='411260'>to</span> <span
  m='411360'>do</span> <span m='411550'>it.</span> <span
  m='412200'>Anyways--</span> <span m='413140'>but</span> <span
  m='413300'>I'm</span> <span m='413430'>going</span> <span m='413650'>to</span>
  <span m='413760'>give</span> <span m='413990'>you</span> <span
  m='415410'>the</span> <span m='415610'>dynamic</span> <span
  m='416130'>programming</span> <span m='416610'>perspective</span> <span
  m='417310'>on</span> <span m='417470'>things.</span> <span
  m='417790'>So</span> <span m='417890'>this</span> <span m='418140'>will</span>
  <span m='418290'>seem</span> <span m='419410'>kind</span> <span
  m='419590'>of</span> <span m='419660'>obvious,</span> <span
  m='420500'>but</span> <span m='420660'>it</span> <span m='420760'>is--</span>
  <span m='421790'>we're</span> <span m='422000'>going</span> <span
  m='422120'>to</span> <span m='422180'>apply</span> <span
  m='422530'>exactly</span> <span m='422940'>the</span> <span
  m='423010'>same</span> <span m='423200'>principles</span> <span
  m='423610'>that we will</span> <span m='423910'>apply</span> <span
  m='424290'>over</span> <span m='424610'>and</span> <span
  m='424670'>over</span> <span m='425440'>in</span> <span
  m='425570'>dynamic</span> <span m='425940'>programming.</span> <span
  m='426610'>But</span> <span m='426750'>here</span> <span
  m='426990'>it's</span> <span m='427120'>in</span> <span m='427230'>a</span>
  <span m='427270'>very</span> <span m='427550'>familiar</span> <span
  m='429710'>setting.</span> </p><p><span m='431910'>So</span> <span
  m='432620'>we're</span> <span m='432750'>going</span> <span
  m='432860'>to</span> <span m='432930'>start</span> <span
  m='433370'>with</span> <span m='434100'>the</span> <span
  m='434190'>naive</span> <span m='435500'>recursive</span> <span
  m='436040'>algorithm.</span> <span m='444850'>And</span> <span
  m='445410'>that</span> <span m='445640'>is,</span> <span m='446996'>if</span>
  <span m='447380'>you</span> <span m='447480'>want</span> <span
  m='447590'>to</span> <span m='447650'>compute</span> <span
  m='448120'>the</span> <span m='448430'>nth</span> <span
  m='448630'>Fibonacci</span> <span m='449150'>number,</span> <span
  m='450210'>you</span> <span m='450400'>check</span> <span
  m='450730'>whether</span> <span m='450920'>you're</span> <span
  m='451120'>in</span> <span m='451210'>the</span> <span m='451290'>base</span>
  <span m='451560'>case.</span> <span m='455890'>I'm going to</span> <span
  m='456375'>write it</span> <span m='457830'>this</span> <span
  m='458060'>way.</span> <span m='475230'>So</span> <span m='475450'>f</span>
  <span m='475710'>is</span> <span m='476010'>just</span> <span
  m='476350'>our</span> <span m='476500'>return</span> <span
  m='476860'>value.</span> <span m='477320'>You'll</span> <span
  m='477520'>see</span> <span m='477710'>why</span> <span m='477900'>I</span>
  <span m='478120'>write</span> <span m='478290'>it</span> <span
  m='478390'>this</span> <span m='478550'>way</span> <span m='478670'>in</span>
  <span m='478760'>a</span> <span m='478800'>moment.</span> <span
  m='479470'>Then</span> <span m='479660'>you</span> <span
  m='479770'>return</span> <span m='480100'>f.</span> <span m='481270'>In</span>
  <span m='481400'>the</span> <span m='481470'>base</span> <span
  m='481720'>case</span> <span m='481920'>it's</span> <span m='482040'>1,</span>
  <span m='482570'>otherwise</span> <span m='483030'>you</span> <span
  m='483160'>recursively</span> <span m='483850'>call</span> <span
  m='484630'>Fibonacci</span> <span m='484770'>of</span> <span
  m='484800'>n</span> <span m='485010'>minus</span> <span m='485640'>1.</span>
  <span m='485860'>You</span> <span m='485980'>recursively</span> <span
  m='486500'>call</span> <span m='486820'>Fibonacci</span> <span m='487270'>of
  n</span> <span m='487380'>minus</span> <span m='487710'>2.</span> <span
  m='488520'>Add</span> <span m='488710'>them</span> <span
  m='488840'>together,</span> <span m='489540'>return</span> <span
  m='489860'>that.</span> <span m='490600'>This</span> <span
  m='490810'>is</span> <span m='490930'>a</span> <span m='491010'>correct</span>
  <span m='491470'>algorithm.</span> </p><p><span m='492762'>Is it</span> <span
  m='493270'>a</span> <span m='493320'>good</span> <span
  m='493530'>algorithm?</span> <span m='495160'>No.</span> <span
  m='496255'>It's</span> <span m='496640'>very</span> <span
  m='496880'>bad.</span> <span m='497230'>Exponential</span> <span
  m='497780'>time.</span> <span m='503450'>How</span> <span m='503660'>do</span>
  <span m='503730'>we</span> <span m='503840'>know</span> <span
  m='503980'>it's</span> <span m='504100'>exponential</span> <span
  m='504620'>time,</span> <span m='505480'>other</span> <span
  m='505640'>than</span> <span m='505930'>from</span> <span
  m='506170'>experience?</span> <span m='507730'>Well,</span> <span
  m='507960'>we</span> <span m='508080'>can</span> <span m='508220'>write</span>
  <span m='508700'>the</span> <span m='508800'>running</span> <span
  m='509040'>time</span> <span m='509410'>as</span> <span
  m='509540'>recurrence.</span> <span m='511880'>T</span> <span
  m='512150'>of</span> <span m='512240'>n</span> <span
  m='512809'>represents</span> <span m='513370'>the</span> <span
  m='513470'>time</span> <span m='513799'>to</span> <span
  m='513870'>compute</span> <span m='514190'>the</span> <span
  m='514299'>nth</span> <span m='514500'>Fibonacci</span> <span
  m='514990'>number.</span> <span m='515780'>How</span> <span
  m='515820'>can</span> <span m='516020'>I</span> <span m='516240'>write</span>
  <span m='516409'>the</span> <span m='516470'>recurrence?</span> <span
  m='519440'>You're</span> <span m='519580'>gonna</span> <span
  m='519600'>throwback</span> <span m='520190'>to</span> <span
  m='520289'>the</span> <span m='520390'>early</span> <span
  m='520679'>lectures,</span> <span m='521330'>divide</span> <span
  m='521630'>and</span> <span m='522118'>conquer.</span> <span m='528950'>I
  hear</span> <span m='529438'>whispers.</span> <span m='530902'>Yeah?</span>
  </p><p><span m='531390'>AUDIENCE:</span> <span m='531878'>[INAUDIBLE].</span>
  </p><p><span m='535320'>PROFESSOR: Yeah.</span> <span m='537081'>T of n</span>
  <span m='537550'>minus</span> <span m='537880'>1</span> <span
  m='539240'>plus</span> <span m='539610'>t</span> <span m='539800'>of</span>
  <span m='539880'>n</span> <span m='540010'>minus</span> <span
  m='540360'>2</span> <span m='541540'>plus</span> <span
  m='542940'>constant.</span> <span m='547190'>I</span> <span m='547680'>don't
  know</span> <span m='547950'>how</span> <span m='548060'>many</span> <span
  m='548340'>you have</span> <span m='548570'>by now.</span> <span
  m='551510'>So</span> <span m='552430'>to</span> <span m='552590'>create</span>
  <span m='552780'>the</span> <span m='552850'>nth</span> <span
  m='553000'>Fibonacci</span> <span m='553470'>number</span> <span
  m='553790'>we</span> <span m='553890'>have</span> <span m='553990'>to</span>
  <span m='554090'>compute</span> <span m='554270'>the</span> <span
  m='554340'>n</span> <span m='554460'>minus</span> <span
  m='554740'>first</span> <span m='555000'>Fibonacci</span> <span
  m='555490'>number,</span> <span m='555790'>and</span> <span m='555870'>the
  n</span> <span m='556060'>minus</span> <span m='556300'>second</span> <span
  m='556610'>Fibonacci</span> <span m='557050'>number.</span> <span
  m='557270'>That's</span> <span m='557550'>these</span> <span
  m='557770'>two</span> <span m='558590'>recursions.</span> <span
  m='559890'>And</span> <span m='560020'>then</span> <span m='560190'>we</span>
  <span m='560310'>take</span> <span m='560550'>constant</span> <span
  m='560940'>time</span> <span m='561200'>otherwise.</span> <span
  m='561760'>We</span> <span m='561880'>do</span> <span
  m='562150'>constant</span> <span m='562450'>number</span> <span
  m='562640'>of</span> <span m='562710'>additions,</span> <span
  m='563450'>comparisons.</span> <span m='564910'>Return</span> <span
  m='565270'>all</span> <span m='565430'>these</span> <span
  m='565780'>operations--</span> <span m='566370'>take</span> <span
  m='566710'>constant</span> <span m='566870'>time.</span> <span
  m='567920'>So</span> <span m='568060'>that's</span> <span m='568300'>a</span>
  <span m='568330'>recurrence.</span> </p><p><span m='569550'>How</span> <span
  m='569700'>do</span> <span m='569770'>we</span> <span m='569860'>solve</span>
  <span m='570150'>this</span> <span m='570310'>recurrence?</span> <span
  m='571390'>Well</span> <span m='571580'>one</span> <span m='571790'>way</span>
  <span m='572180'>is</span> <span m='572440'>to</span> <span
  m='572550'>see</span> <span m='573030'>this</span> <span m='573400'>is</span>
  <span m='574030'>the</span> <span m='574500'>Fibonacci</span> <span
  m='575130'>recurrence.</span> <span m='575720'>So</span> <span
  m='576150'>it's</span> <span m='576280'>the</span> <span
  m='576360'>same</span> <span m='576650'>thing.</span> <span
  m='577350'>There's</span> <span m='577470'>this</span> <span
  m='577620'>plus</span> <span m='578200'>whatever.</span> <span
  m='578970'>But</span> <span m='579150'>in</span> <span
  m='579230'>particular,</span> <span m='579620'>this is</span> <span
  m='579900'>at</span> <span m='579970'>least</span> <span m='580240'>the</span>
  <span m='580350'>nth</span> <span m='580530'>Fibonacci</span> <span
  m='580990'>number.</span> <span m='581720'>And</span> <span
  m='581910'>if</span> <span m='582010'>you</span> <span m='582090'>know</span>
  <span m='582210'>Fibonacci</span> <span m='582750'>stuff,</span> <span
  m='583100'>that's</span> <span m='583350'>about</span> <span
  m='585320'>the</span> <span m='585420'>golden</span> <span
  m='585690'>ratio</span> <span m='586600'>to</span> <span m='586740'>the</span>
  <span m='586840'>nth</span> <span m='587060'>power.</span> <span
  m='588440'>Which</span> <span m='588530'>is</span> <span
  m='588620'>bad.</span> <span m='590650'>We</span> <span m='590840'>had</span>
  <span m='591010'>a</span> <span m='591060'>similar</span> <span
  m='591400'>recurrence</span> <span m='591800'>in</span> <span
  m='591870'>AVL</span> <span m='592250'>trees.</span> </p><p><span
  m='592930'>And</span> <span m='593040'>so</span> <span
  m='593170'>another</span> <span m='593460'>way</span> <span
  m='593670'>to</span> <span m='594530'>solve</span> <span
  m='594900'>it--</span> <span m='595495'>it's</span> <span
  m='595850'>just</span> <span m='596070'>good</span> <span
  m='596350'>review--</span> <span m='597290'>say,</span> <span
  m='597610'>oh</span> <span m='597930'>well,</span> <span
  m='598820'>that's</span> <span m='599100'>at</span> <span
  m='599190'>least</span> <span m='600460'>2</span> <span
  m='600680'>times</span> <span m='601876'>t</span> <span m='602212'>of</span>
  <span m='602550'>n</span> <span m='602660'>minus</span> <span
  m='603020'>2.</span> <span m='603600'>Because</span> <span
  m='603780'>it's</span> <span m='604120'>going</span> <span
  m='604260'>to</span> <span m='604330'>be</span> <span
  m='604470'>monotone.</span> <span m='605020'>The</span> <span
  m='605090'>bigger</span> <span m='605410'>n</span> <span m='605560'>is,</span>
  <span m='605730'>the</span> <span m='605810'>more</span> <span
  m='606020'>work</span> <span m='606250'>you</span> <span
  m='606330'>have</span> <span m='606540'>to</span> <span m='606660'>do.</span>
  <span m='607470'>Because</span> <span m='607970'>to</span> <span m='608060'>do
  the</span> <span m='608180'>nth thing</span> <span m='608550'>you</span> <span
  m='608670'>have</span> <span m='608830'>to</span> <span m='608940'>do</span>
  <span m='609050'>the</span> <span m='609150'>n</span> <span
  m='609260'>minus</span> <span m='609550'>first</span> <span
  m='609830'>thing.</span> <span m='610770'>So</span> <span m='611030'>we</span>
  <span m='611160'>could</span> <span m='611280'>just</span> <span
  m='611600'>reduce</span> <span m='612475'>t</span> <span m='612780'>of</span>
  <span m='612860'>n</span> <span m='612970'>minus</span> <span
  m='613240'>1</span> <span m='613390'>to</span> <span m='613480'>t</span> <span
  m='613630'>of</span> <span m='613710'>n</span> <span m='613820'>minus</span>
  <span m='614100'>2.</span> <span m='614260'>That</span> <span
  m='614450'>will</span> <span m='614570'>give</span> <span m='614740'>us</span>
  <span m='614870'>a</span> <span m='614920'>lower</span> <span
  m='615200'>bound.</span> </p><p><span m='616620'>And</span> <span
  m='617280'>now</span> <span m='617630'>these</span> <span
  m='617810'>two</span> <span m='618000'>terms--</span> <span
  m='618390'>now</span> <span m='618600'>this</span> <span m='618760'>is</span>
  <span m='618860'>sort</span> <span m='619010'>of</span> <span
  m='619080'>an</span> <span m='619170'>easy</span> <span
  m='619500'>thing.</span> <span m='619700'>You</span> <span
  m='619790'>see</span> <span m='619970'>that</span> <span
  m='620100'>you're</span> <span m='620210'>multiplying</span> <span
  m='620690'>by</span> <span m='620830'>2</span> <span m='621060'>each</span>
  <span m='621300'>time.</span> <span m='622950'>You're</span> <span
  m='623080'>subtracting</span> <span m='623680'>2</span> <span
  m='623840'>from</span> <span m='624060'>n</span> <span m='624230'>each</span>
  <span m='624400'>time.</span> <span m='624670'>How</span> <span
  m='624820'>many</span> <span m='625050'>times</span> <span m='625350'>can
  I</span> <span m='625520'>subtract</span> <span m='625940'>2</span> <span
  m='626060'>from</span> <span m='626280'>n?</span> <span m='627270'>N/2</span>
  <span m='627770'>times,</span> <span m='628670'>before</span> <span
  m='628920'>I</span> <span m='628950'>get</span> <span m='629130'>down</span>
  <span m='629330'>to</span> <span m='629400'>a</span> <span
  m='629470'>constant.</span> <span m='630390'>And</span> <span
  m='630800'>so</span> <span m='630820'>this</span> <span m='631070'>is</span>
  <span m='631400'>equal</span> <span m='631780'>to</span> <span
  m='632100'>2</span> <span m='632600'>to the</span> <span m='634310'>n</span>
  <span m='635490'>over</span> <span m='635790'>2--</span> <span
  m='637740'>I</span> <span m='637910'>mean,</span> <span
  m='638190'>times</span> <span m='638560'>some</span> <span
  m='638760'>constant,</span> <span m='639340'>which</span> <span
  m='639460'>is</span> <span m='639580'>what</span> <span m='639740'>you</span>
  <span m='639830'>get</span> <span m='640000'>in the</span> <span
  m='640050'>base</span> <span m='640410'>case.</span> <span m='641900'>So
  I</span> <span m='641990'>guess</span> <span m='642210'>I</span> <span
  m='642250'>should</span> <span m='642500'>say</span> <span
  m='643630'>theta.</span> <span m='645970'>This</span> <span
  m='646190'>thing</span> <span m='646410'>is</span> <span
  m='646680'>theta</span> <span m='646960'>that.</span> <span
  m='648960'>OK.</span> <span m='649390'>So</span> <span m='649550'>it's</span>
  <span m='649670'>at</span> <span m='649760'>least</span> <span
  m='650710'>that</span> <span m='650950'>big.</span> <span
  m='651320'>And</span> <span m='651700'>the</span> <span
  m='651880'>right</span> <span m='652510'>constant</span> <span
  m='653760'>is</span> <span m='654510'>phi.</span> <span m='656302'>And
  the</span> <span m='656750'>base of</span> <span m='657100'>the
  exponent.</span> </p><p><span m='658890'>OK.</span> <span m='659120'>So</span>
  <span m='659270'>that's</span> <span m='659500'>a</span> <span
  m='659540'>bad</span> <span m='659760'>algorithm.</span> <span
  m='660200'>We</span> <span m='660310'>all</span> <span m='660440'>know</span>
  <span m='660580'>it's a</span> <span m='660720'>bad</span> <span
  m='660930'>algorithm.</span> <span m='663690'>But</span> <span
  m='664540'>I'm</span> <span m='664730'>going</span> <span m='664920'>to</span>
  <span m='665020'>give</span> <span m='665180'>you</span> <span
  m='665300'>a</span> <span m='665360'>general</span> <span
  m='665780'>approach</span> <span m='666220'>for</span> <span
  m='666360'>making</span> <span m='666670'>bad</span> <span
  m='666940'>algorithms</span> <span m='667380'>like</span> <span
  m='667540'>this</span> <span m='668180'>good.</span> <span
  m='669000'>And</span> <span m='669150'>that</span> <span
  m='669310'>general</span> <span m='669620'>approach</span> <span
  m='670140'>is</span> <span m='670420'>called</span> <span
  m='670690'>memoization.</span> <span m='674170'>We'll go</span> <span
  m='674658'>over</span> <span m='676130'>here.</span> <span
  m='679910'>And</span> <span m='680140'>this</span> <span m='680330'>is</span>
  <span m='680480'>a</span> <span m='680670'>technique</span> <span
  m='680990'>of</span> <span m='681080'>dynamic</span> <span
  m='681500'>programming.</span> </p><p><span m='684708'>So I'm going</span>
  <span m='685180'>to</span> <span m='685310'>call</span> <span
  m='685530'>this</span> <span m='685815'>the</span> <span
  m='686100'>memoized</span> <span m='687530'>dynamic</span> <span
  m='687930'>programming</span> <span m='688430'>algorithm.</span> <span
  m='696840'>So</span> <span m='701990'>did</span> <span m='702110'>I
  settle</span> <span m='702360'>on</span> <span m='702580'>using</span> <span
  m='702860'>memo</span> <span m='703150'>in the</span> <span
  m='703440'>notes?</span> <span m='704520'>Yeah.</span> <span
  m='708570'>The</span> <span m='708690'>idea</span> <span m='708900'>is</span>
  <span m='708980'>simple.</span> </p><p><span m='710520'>Whenever</span> <span
  m='710880'>we</span> <span m='711040'>compute</span> <span m='711430'>a</span>
  <span m='711820'>Fibonacci</span> <span m='712350'>number</span> <span
  m='712870'>we</span> <span m='713030'>put</span> <span m='713230'>it</span>
  <span m='713330'>in</span> <span m='713430'>a</span> <span
  m='713500'>dictionary.</span> <span m='715290'>And</span> <span
  m='715480'>then</span> <span m='715670'>when we</span> <span
  m='715900'>need</span> <span m='716060'>to</span> <span
  m='716140'>compute</span> <span m='716520'>the</span> <span
  m='716640'>nth</span> <span m='716790'>Fibonacci</span> <span
  m='717250'>number</span> <span m='717500'>we</span> <span
  m='717640'>check,</span> <span m='717930'>is</span> <span m='718090'>it</span>
  <span m='718180'>already</span> <span m='718410'>in</span> <span
  m='718480'>the</span> <span m='718550'>dictionary?</span> <span
  m='718825'>Did</span> <span m='719100'>we</span> <span
  m='719290'>already</span> <span m='719490'>solve</span> <span
  m='719730'>this</span> <span m='719850'>problem?</span> <span
  m='720220'>If</span> <span m='720360'>so,</span> <span
  m='721340'>return</span> <span m='721680'>that</span> <span
  m='721830'>answer.</span> <span m='723020'>Otherwise,</span> <span
  m='723490'>computer</span> <span m='723870'>it.</span> <span
  m='725220'>You'll</span> <span m='725320'>see</span> <span
  m='725500'>the</span> <span m='725650'>transformation</span> <span
  m='726320'>is</span> <span m='726390'>very</span> <span
  m='726550'>simple.</span> </p><p></p><p><span m='777810'>OK.</span> <span
  m='779040'>These</span> <span m='779250'>two</span> <span
  m='779410'>lines</span> <span m='780570'>are</span> <span
  m='780670'>identical</span> <span m='782190'>to</span> <span
  m='782260'>these</span> <span m='782470'>two</span> <span
  m='782650'>lines.</span> <span m='784650'>So</span> <span
  m='784820'>you</span> <span m='784930'>can</span> <span m='785050'>see</span>
  <span m='785360'>how</span> <span m='785530'>the</span> <span
  m='785660'>transformation</span> <span m='786320'>works</span> <span
  m='786550'>in</span> <span m='786640'>general.</span> <span
  m='787730'>You</span> <span m='787780'>could</span> <span m='788020'>do</span>
  <span m='788140'>this</span> <span m='788310'>with</span> <span
  m='788470'>any</span> <span m='788770'>recursive</span> <span
  m='789180'>algorithm.</span> <span m='790856'>The</span> <span
  m='791240'>memoization</span> <span m='792350'>transformation</span> <span
  m='793160'>on</span> <span m='793290'>that</span> <span
  m='793430'>algorithm--</span> <span m='794700'>which</span> <span
  m='794710'>is,</span> <span m='794840'>we</span> <span
  m='795150'>initially</span> <span m='795580'>make</span> <span
  m='795820'>an</span> <span m='795930'>empty</span> <span
  m='796570'>dictionary</span> <span m='797120'>called</span> <span
  m='797420'>memo.</span> <span m='799050'>And</span> <span
  m='800300'>before</span> <span m='800870'>we</span> <span
  m='801050'>actually</span> <span m='801400'>do</span> <span
  m='801820'>the</span> <span m='801950'>computation</span> <span
  m='802620'>we</span> <span m='802720'>say,</span> <span
  m='802950'>well,</span> <span m='803340'>check</span> <span
  m='803700'>whether</span> <span m='804000'>this</span> <span
  m='805200'>version</span> <span m='805610'>of</span> <span
  m='805720'>the</span> <span m='805810'>Fibonacci</span> <span
  m='806360'>problem,</span> <span m='806820'>computing</span> <span
  m='807220'>f</span> <span m='807470'>of</span> <span m='807560'>n,</span>
  <span m='809150'>is</span> <span m='809430'>already</span> <span
  m='809970'>in</span> <span m='810230'>our</span> <span
  m='810420'>dictionary.</span> </p><p><span m='811810'>So</span> <span
  m='811950'>if</span> <span m='812020'>that</span> <span m='812240'>key</span>
  <span m='812450'>is</span> <span m='812580'>already</span> <span
  m='812780'>in</span> <span m='812850'>the</span> <span
  m='812940'>dictionary,</span> <span m='813265'>we</span> <span
  m='813590'>return</span> <span m='813940'>the</span> <span
  m='814040'>corresponding</span> <span m='814600'>value</span> <span
  m='815430'>in</span> <span m='815570'>the</span> <span
  m='815650'>dictionary.</span> <span m='818960'>And</span> <span
  m='819130'>then</span> <span m='819430'>once</span> <span
  m='819720'>we've</span> <span m='819870'>computed</span> <span
  m='820490'>the</span> <span m='820600'>nth</span> <span
  m='820770'>Fibonacci</span> <span m='821260'>number,</span> <span
  m='821590'>if</span> <span m='821740'>we</span> <span
  m='821870'>bothered</span> <span m='822270'>to</span> <span
  m='822410'>do</span> <span m='822540'>this,</span> <span m='823290'>if</span>
  <span m='823450'>this</span> <span m='823640'>didn't</span> <span
  m='823840'>apply,</span> <span m='824780'>then</span> <span
  m='824960'>we</span> <span m='825080'>store</span> <span m='825490'>it</span>
  <span m='825600'>in</span> <span m='825790'>the</span> <span
  m='825870'>memo</span> <span m='826170'>table.</span> <span
  m='827140'>So</span> <span m='827350'>we</span> <span m='828120'>say</span>
  <span m='828360'>well,</span> <span m='828590'>if</span> <span
  m='828690'>you</span> <span m='828850'>ever</span> <span
  m='829090'>need</span> <span m='829250'>to</span> <span
  m='829320'>compute</span> <span m='829670'>f</span> <span m='829840'>of</span>
  <span m='829920'>n</span> <span m='830110'>again,</span> <span
  m='830900'>here</span> <span m='831090'>it</span> <span m='831140'>is.</span>
  <span m='832370'>And</span> <span m='832500'>then</span> <span
  m='832600'>we</span> <span m='832710'>return</span> <span
  m='833010'>that</span> <span m='833170'>value.</span> </p><p><span
  m='834820'>So</span> <span m='834970'>this</span> <span m='835160'>is</span>
  <span m='835280'>a</span> <span m='835350'>general</span> <span
  m='835710'>procedure.</span> <span m='837192'>It can</span> <span
  m='837580'>apply</span> <span m='837900'>to any</span> <span
  m='838070'>recursive</span> <span m='838490'>algorithm</span> <span
  m='840910'>with</span> <span m='841310'>no</span> <span m='841470'>side</span>
  <span m='841750'>effects</span> <span m='842130'>I</span> <span
  m='842190'>guess,</span> <span m='842880'>technically.</span> <span
  m='844900'>And it</span> <span m='845200'>turns</span> <span
  m='845460'>out,</span> <span m='845660'>this</span> <span
  m='845820'>makes</span> <span m='846050'>the</span> <span
  m='846170'>algorithm</span> <span m='846550'>efficient.</span> <span
  m='847820'>Now</span> <span m='847990'>there's</span> <span
  m='848170'>a</span> <span m='848250'>lot</span> <span m='848470'>of</span>
  <span m='848590'>ways</span> <span m='848940'>to</span> <span
  m='849060'>see</span> <span m='849310'>why</span> <span m='849530'>it's</span>
  <span m='849650'>efficient.</span> <span m='852680'>In</span> <span
  m='852870'>general,</span> <span m='853300'>maybe</span> <span
  m='853530'>it's</span> <span m='853640'>helpful</span> <span
  m='853980'>to</span> <span m='854180'>think</span> <span
  m='854430'>about</span> <span m='854700'>the</span> <span
  m='854930'>recursion</span> <span m='855260'>tree.</span> </p><p><span
  m='856220'>So</span> <span m='856360'>if</span> <span m='856430'>you</span>
  <span m='856550'>want</span> <span m='856720'>to</span> <span
  m='856790'>compute</span> <span m='857130'>fn</span> <span
  m='858180'>in</span> <span m='858330'>the</span> <span m='858470'>old</span>
  <span m='858700'>algorithm,</span> <span m='859660'>we</span> <span
  m='859790'>compute</span> <span m='860170'>fn</span> <span
  m='860460'>minus</span> <span m='860790'>1</span> <span m='861620'>and</span>
  <span m='861740'>fn</span> <span m='862080'>minus</span> <span
  m='862390'>two</span> <span m='862550'>completely</span> <span
  m='863010'>separately.</span> <span m='863940'>To</span> <span
  m='864090'>compute</span> <span m='864430'>fn</span> <span
  m='864720'>minus</span> <span m='865040'>1</span> <span m='865720'>we</span>
  <span m='865900'>compute</span> <span m='866270'>fn</span> <span
  m='866620'>minus</span> <span m='866960'>2</span> <span m='867830'>and
  fn</span> <span m='868290'>minus</span> <span m='868660'>3.</span> <span
  m='869820'>To</span> <span m='870020'>compute</span> <span
  m='870320'>fn</span> <span m='870540'>minus</span> <span m='870820'>2
  we</span> <span m='871080'>compute</span> <span m='871550'>fn</span> <span
  m='871690'>minus</span> <span m='871980'>3</span> <span m='872760'>and</span>
  <span m='873000'>fn</span> <span m='873290'>minus</span> <span
  m='873670'>4.</span> <span m='874720'>And</span> <span m='874880'>so</span>
  <span m='875080'>on.</span> <span m='875620'>And</span> <span
  m='876010'>you</span> <span m='876160'>can</span> <span m='876500'>see</span>
  <span m='876680'>why</span> <span m='876850'>that's</span> <span
  m='877120'>exponential</span> <span m='878880'>in n.</span> <span
  m='879490'>Because</span> <span m='879710'>we're</span> <span
  m='879840'>only</span> <span m='880310'>decrementing</span> <span
  m='880980'>n</span> <span m='881310'>by</span> <span m='881490'>one</span>
  <span m='881700'>or</span> <span m='881780'>two</span> <span
  m='881990'>each</span> <span m='882190'>time.</span> </p><p><span
  m='884250'>But</span> <span m='884380'>then</span> <span m='884540'>you</span>
  <span m='884660'>observe,</span> <span m='885470'>hey,</span> <span
  m='886200'>these</span> <span m='886470'>fn</span> <span
  m='886770'>minus</span> <span m='887060'>3's</span> <span
  m='887340'>are</span> <span m='887450'>the</span> <span
  m='887610'>same.</span> <span m='888200'>I</span> <span
  m='888280'>should</span> <span m='888460'>really</span> <span
  m='888750'>only</span> <span m='888960'>have</span> <span m='889130'>to</span>
  <span m='889240'>compute</span> <span m='889590'>them</span> <span
  m='889680'>once.</span> <span m='891280'>And</span> <span
  m='891430'>that's</span> <span m='891640'>what</span> <span
  m='891710'>we're</span> <span m='891850'>doing</span> <span
  m='892100'>here.</span> <span m='892310'>The</span> <span
  m='892420'>first</span> <span m='892750'>time</span> <span
  m='892950'>you</span> <span m='893070'>call</span> <span m='893750'>fn</span>
  <span m='894050'>minus</span> <span m='894320'>3,</span> <span
  m='894530'>you</span> <span m='894630'>do</span> <span m='894830'>work.</span>
  <span m='895660'>But</span> <span m='895790'>once</span> <span
  m='896000'>it's</span> <span m='896170'>done</span> <span
  m='897000'>and</span> <span m='897330'>you</span> <span m='897490'>go</span>
  <span m='897700'>over</span> <span m='897890'>to</span> <span
  m='897980'>this</span> <span m='898140'>other</span> <span
  m='898350'>recursive</span> <span m='898780'>call,</span> <span
  m='899460'>this</span> <span m='899720'>will</span> <span
  m='899910'>just</span> <span m='900120'>get</span> <span m='900290'>cut</span>
  <span m='900470'>off.</span> <span m='900760'>There's</span> <span
  m='900960'>no</span> <span m='901130'>tree</span> <span
  m='901440'>here.</span> <span m='902040'>Here</span> <span
  m='902280'>we</span> <span m='902390'>might</span> <span
  m='902540'>have</span> <span m='902680'>some</span> <span
  m='902840'>recursive</span> <span m='903310'>calling.</span> <span
  m='904180'>Here</span> <span m='904360'>we</span> <span
  m='904470'>won't,</span> <span m='904890'>because</span> <span
  m='905320'>it's</span> <span m='905450'>already</span> <span
  m='905740'>in</span> <span m='905840'>the</span> <span m='905910'>memo</span>
  <span m='906190'>table.</span> <span m='908700'>In</span> <span
  m='908820'>fact,</span> <span m='909210'>this</span> <span
  m='909390'>already</span> <span m='909840'>happens</span> <span
  m='910260'>with</span> <span m='910380'>fn</span> <span
  m='910490'>minus</span> <span m='910790'>2.</span> <span
  m='911930'>This</span> <span m='912120'>whole</span> <span
  m='912300'>tree</span> <span m='913040'>disappears</span> <span
  m='914550'>because</span> <span m='914910'>fn</span> <span
  m='915170'>minus</span> <span m='915480'>2</span> <span m='915600'>has</span>
  <span m='915810'>already</span> <span m='916080'>been</span> <span
  m='916290'>done.</span> </p><p><span m='917980'>OK.</span> <span
  m='918110'>So</span> <span m='918280'>it's</span> <span
  m='918420'>clear</span> <span m='918640'>why</span> <span m='918830'>it</span>
  <span m='918890'>improves</span> <span m='919310'>things.</span> <span
  m='921090'>So</span> <span m='921290'>in</span> <span m='921490'>fact</span>
  <span m='922250'>you</span> <span m='922430'>can</span> <span
  m='922560'>argue</span> <span m='922980'>that this</span> <span
  m='923400'>call</span> <span m='923680'>will</span> <span m='923810'>be</span>
  <span m='923990'>free</span> <span m='924750'>because</span> <span
  m='925040'>you</span> <span m='925170'>already</span> <span
  m='925400'>did</span> <span m='925570'>the</span> <span m='925660'>work
  in</span> <span m='925990'>here.</span> <span m='927540'>But</span> <span
  m='927770'>I</span> <span m='928370'>want</span> <span m='928580'>to</span>
  <span m='928630'>give</span> <span m='928800'>you</span> <span
  m='928910'>a</span> <span m='928940'>very</span> <span
  m='929240'>particular</span> <span m='929780'>way</span> <span
  m='929940'>of</span> <span m='930060'>thinking</span> <span
  m='930700'>about</span> <span m='931120'>why</span> <span
  m='931330'>this</span> <span m='931520'>is</span> <span
  m='931620'>efficient,</span> <span m='937280'>which</span> <span
  m='937580'>is</span> <span m='939720'>following.</span> </p><p></p><p><span
  m='966550'>So</span> <span m='967880'>you</span> <span m='968050'>could</span>
  <span m='968280'>write</span> <span m='968480'>down</span> <span
  m='968670'>a</span> <span m='968710'>recurrence</span> <span
  m='969340'>for</span> <span m='969470'>the</span> <span
  m='969570'>running</span> <span m='969820'>time</span> <span
  m='970060'>here.</span> <span m='970300'>But</span> <span m='970940'>in</span>
  <span m='971040'>some</span> <span m='971250'>sense</span> <span
  m='971500'>recurrences</span> <span m='972040'>aren't</span> <span
  m='972280'>quite</span> <span m='972660'>the</span> <span
  m='972750'>right</span> <span m='972930'>way</span> <span m='973050'>of</span>
  <span m='973140'>thinking</span> <span m='973430'>about</span> <span
  m='973720'>this</span> <span m='973960'>because</span> <span
  m='974910'>recursion</span> <span m='975240'>is</span> <span
  m='975570'>kind</span> <span m='975880'>of</span> <span m='975960'>a</span>
  <span m='976070'>rare</span> <span m='976320'>thing.</span> <span
  m='977220'>If</span> <span m='977380'>you're</span> <span
  m='977550'>calling</span> <span m='977950'>Fibonacci</span> <span
  m='978470'>of</span> <span m='978520'>some</span> <span
  m='978730'>value,</span> <span m='979110'>k,</span> <span
  m='980840'>you're</span> <span m='981220'>only</span> <span
  m='981580'>going</span> <span m='981810'>to</span> <span
  m='981910'>make</span> <span m='982110'>recursive</span> <span
  m='982560'>calls</span> <span m='982940'>the</span> <span
  m='983040'>first</span> <span m='983440'>time</span> <span
  m='983700'>you</span> <span m='983820'>call</span> <span
  m='984060'>Fibonacci</span> <span m='984570'>of</span> <span
  m='984630'>k.</span> <span m='984930'>Because</span> <span
  m='985320'>henceforth,</span> <span m='987330'>you've</span> <span
  m='987810'>put</span> <span m='988170'>it in</span> <span
  m='988330'>the</span> <span m='988390'>memo</span> <span
  m='988660'>table</span> <span m='989000'>you</span> <span
  m='989150'>will</span> <span m='989240'>not</span> <span
  m='989460'>recurse.</span> </p><p><span m='990860'>So</span> <span
  m='991210'>you</span> <span m='991440'>can</span> <span
  m='991620'>think</span> <span m='991910'>of</span> <span
  m='993900'>there</span> <span m='994100'>being</span> <span
  m='994340'>two</span> <span m='994870'>versions</span> <span
  m='995370'>of</span> <span m='995640'>calling</span> <span
  m='995970'>Fibonacci</span> <span m='996430'>of k.</span> <span
  m='996640'>There's</span> <span m='996830'>the</span> <span
  m='996930'>first</span> <span m='997270'>time,</span> <span
  m='997710'>which</span> <span m='997800'>is</span> <span m='997960'>the</span>
  <span m='998080'>non-memoized</span> <span m='999030'>version</span> <span
  m='1000020'>that</span> <span m='1000950'>does</span> <span
  m='1001180'>recursion--</span> <span m='1001710'>does</span> <span
  m='1001880'>some</span> <span m='1002080'>work.</span> <span
  m='1002960'>And</span> <span m='1003120'>then</span> <span
  m='1003370'>every</span> <span m='1003820'>time</span> <span
  m='1004090'>henceforth</span> <span m='1005090'>you're</span> <span
  m='1006090'>doing</span> <span m='1006340'>memoized</span> <span
  m='1006940'>calls</span> <span m='1007170'>of</span> <span
  m='1007240'>Fibonacci</span> <span m='1007495'>of</span> <span
  m='1007750'>k,</span> <span m='1008080'>and those</span> <span
  m='1008340'>cost</span> <span m='1009270'>constant</span> <span
  m='1009680'>time.</span> <span m='1011620'>So</span> <span
  m='1011900'>the</span> <span m='1012080'>memoized</span> <span
  m='1015560'>calls</span> <span m='1018760'>cost</span> <span
  m='1019160'>constant</span> <span m='1019580'>time.</span> <span
  m='1019820'>So</span> <span m='1019980'>we</span> <span m='1020100'>can</span>
  <span m='1020250'>think</span> <span m='1020460'>of</span> <span
  m='1020540'>them</span> <span m='1020710'>as</span> <span
  m='1020840'>basically</span> <span m='1021410'>free.</span> </p><p><span
  m='1023120'>That's</span> <span m='1023570'>when</span> <span
  m='1023800'>you</span> <span m='1023970'>call</span> <span
  m='1024920'>Fibonacci</span> <span m='1025510'>of</span> <span
  m='1025619'>n</span> <span m='1025760'>minus</span> <span
  m='1026050'>2,</span> <span m='1026210'>because</span> <span
  m='1026540'>that's</span> <span m='1026750'>a</span> <span
  m='1026790'>memoized</span> <span m='1027329'>call,</span> <span
  m='1028839'>you really</span> <span m='1029210'>don't</span> <span
  m='1029670'>pay</span> <span m='1029890'>anything</span> <span
  m='1030290'>for</span> <span m='1030770'>it.</span> <span m='1030990'>I mean,
  you're already</span> <span m='1031210'>paying</span> <span
  m='1031440'>constant</span> <span m='1031770'>time</span> <span
  m='1031950'>to</span> <span m='1032030'>do</span> <span
  m='1032150'>addition</span> <span m='1032800'>and</span> <span
  m='1032920'>whatever.</span> <span m='1034250'>So</span> <span
  m='1034300'>you</span> <span m='1034410'>don't have</span> <span
  m='1034540'>to</span> <span m='1034650'>worry</span> <span
  m='1034880'>about</span> <span m='1035180'>the</span> <span
  m='1035280'>time.</span> <span m='1036089'>There's</span> <span
  m='1036250'>no</span> <span m='1036490'>recursion</span> <span
  m='1037010'>here.</span> <span m='1038900'>And</span> <span
  m='1039270'>then</span> <span m='1039680'>what</span> <span
  m='1039819'>we</span> <span m='1039940'>care</span> <span
  m='1040140'>about</span> <span m='1040349'>is</span> <span m='1040480'>that
  the</span> <span m='1040710'>number</span> <span m='1041670'>of</span> <span
  m='1041880'>non-memorized</span> <span m='1042760'>calls,</span> <span
  m='1045800'>which</span> <span m='1046000'>is</span> <span
  m='1046119'>the</span> <span m='1046210'>first</span> <span
  m='1046589'>time</span> <span m='1046819'>you</span> <span
  m='1046950'>call</span> <span m='1047730'>Fibonacci</span> <span
  m='1047880'>of</span> <span m='1048109'>k,</span> <span m='1052140'>is</span>
  <span m='1052240'>n.</span> <span m='1053925'>No</span> <span
  m='1054330'>theta</span> <span m='1054560'>is</span> <span
  m='1054720'>even</span> <span m='1055090'>necessary.</span> </p><p><span
  m='1055640'>We are</span> <span m='1055960'>going</span> <span
  m='1056210'>to</span> <span m='1056310'>call</span> <span
  m='1057260'>Fibonacci</span> <span m='1057545'>of</span> <span
  m='1057830'>1.</span> <span m='1058990'>At</span> <span
  m='1059070'>some</span> <span m='1059260'>point</span> <span
  m='1060130'>we're</span> <span m='1060240'>going</span> <span
  m='1060470'>to</span> <span m='1060540'>call</span> <span
  m='1060910'>Fibonacci</span> <span m='1061430'>of</span> <span m='1061780'>2
  at</span> <span m='1061940'>some</span> <span m='1062120'>point,</span> <span
  m='1063070'>and</span> <span m='1063420'>the</span> <span
  m='1063540'>original</span> <span m='1063950'>call</span> <span
  m='1064430'>is</span> <span m='1064530'>Fibonacci</span> <span
  m='1064630'>of</span> <span m='1064990'>n.</span> <span m='1066080'>All</span>
  <span m='1066290'>of</span> <span m='1066380'>those</span> <span
  m='1066590'>things</span> <span m='1066820'>will</span> <span
  m='1067000'>be</span> <span m='1067130'>called</span> <span
  m='1067520'>at</span> <span m='1067620'>some</span> <span
  m='1067790'>point.</span> <span m='1068080'>That's</span> <span
  m='1068230'>pretty</span> <span m='1068440'>easy</span> <span
  m='1068710'>to</span> <span m='1068810'>see.</span> <span m='1069650'>But
  in</span> <span m='1069770'>particular,</span> <span
  m='1070160'>certainly</span> <span m='1070510'>at</span> <span
  m='1070620'>most</span> <span m='1071020'>this,</span> <span m='1072050'>we
  never</span> <span m='1072410'>call</span> <span m='1072630'>Fibonacci</span>
  <span m='1073090'>of</span> <span m='1073160'>n</span> <span
  m='1073270'>plus</span> <span m='1073500'>1</span> <span m='1073900'>to</span>
  <span m='1074010'>compute</span> <span m='1074390'>Fibonacci</span> <span
  m='1074880'>of</span> <span m='1074950'>n.</span> <span m='1075820'>So</span>
  <span m='1075940'>it's</span> <span m='1076070'>at</span> <span
  m='1076160'>most</span> <span m='1076440'>n</span> <span
  m='1076610'>calls.</span> <span m='1077460'>Indeed</span> <span
  m='1077830'>it</span> <span m='1077900'>will</span> <span
  m='1078080'>be</span> <span m='1078210'>exactly</span> <span
  m='1078730'>n</span> <span m='1078920'>calls</span> <span
  m='1079810'>that</span> <span m='1079950'>are</span> <span
  m='1080030'>not</span> <span m='1080350'>memoized.</span> <span
  m='1081000'>Those</span> <span m='1081240'>ones</span> <span
  m='1081430'>we</span> <span m='1081500'>have</span> <span
  m='1081600'>to</span> <span m='1081690'>pay</span> <span
  m='1081920'>for.</span> </p><p><span m='1082130'>How</span> <span
  m='1082260'>much</span> <span m='1082470'>do</span> <span
  m='1082560'>we</span> <span m='1082630'>have</span> <span
  m='1082740'>to</span> <span m='1082850'>pay?</span> <span
  m='1083650'>Well,</span> <span m='1084470'>if</span> <span
  m='1084610'>you</span> <span m='1084730'>don't</span> <span
  m='1085520'>count</span> <span m='1085810'>the</span> <span
  m='1085900'>recursion--</span> <span m='1087430'>which</span> <span
  m='1087610'>is</span> <span m='1087730'>what</span> <span
  m='1088060'>this</span> <span m='1088300'>recurrence</span> <span
  m='1088810'>does--</span> <span m='1089250'>if</span> <span
  m='1089290'>you</span> <span m='1089410'>ignore</span> <span
  m='1089840'>recursion</span> <span m='1091200'>then</span> <span
  m='1091360'>the</span> <span m='1091460'>total</span> <span
  m='1091720'>amount</span> <span m='1091920'>of</span> <span
  m='1092010'>work</span> <span m='1092340'>done</span> <span
  m='1092620'>here</span> <span m='1092850'>is</span> <span
  m='1092960'>constant.</span> <span m='1096110'>So</span> <span
  m='1097300'>I</span> <span m='1097370'>will</span> <span
  m='1097540'>say</span> <span m='1097910'>the</span> <span
  m='1099170'>non-recursive</span> <span m='1100250'>work</span> <span
  m='1105670'>per</span> <span m='1106790'>call</span> <span
  m='1108410'>is</span> <span m='1108640'>constant.</span> <span
  m='1110630'>And</span> <span m='1110790'>therefore</span> <span
  m='1111180'>I</span> <span m='1111220'>claim</span> <span
  m='1112190'>that</span> <span m='1112380'>the</span> <span
  m='1112500'>running</span> <span m='1112770'>time</span> <span
  m='1113790'>is</span> <span m='1114010'>constant--</span> <span
  m='1115110'>I'm sorry, is</span> <span m='1115500'>linear.</span> <span
  m='1117870'>Constant would</span> <span m='1118360'>be</span> <span
  m='1118520'>pretty</span> <span m='1118760'>amazing.</span> </p><p><span
  m='1121390'>This</span> <span m='1121590'>is</span> <span
  m='1121760'>actually</span> <span m='1122100'>not</span> <span
  m='1122370'>the</span> <span m='1122440'>best</span> <span
  m='1122730'>algorithm--</span> <span m='1123180'>as</span> <span
  m='1123370'>an</span> <span m='1123540'>aside.</span> <span
  m='1124310'>The</span> <span m='1124460'>best</span> <span
  m='1124740'>algorithm</span> <span m='1125040'>for</span> <span
  m='1125180'>computing</span> <span m='1125550'>the nth</span> <span
  m='1125760'>Fibonacci</span> <span m='1126230'>number</span> <span
  m='1126720'>uses</span> <span m='1127110'>log</span> <span
  m='1127570'>n</span> <span m='1129470'>arithmetic</span> <span
  m='1129940'>operations.</span> <span m='1130650'>So</span> <span
  m='1130680'>you</span> <span m='1130760'>can</span> <span
  m='1130890'>do</span> <span m='1131010'>better,</span> <span
  m='1131440'>but</span> <span m='1131510'>if</span> <span
  m='1131620'>you</span> <span m='1131730'>want</span> <span
  m='1131840'>to</span> <span m='1131890'>see</span> <span
  m='1132040'>that</span> <span m='1132510'>you</span> <span
  m='1132600'>should</span> <span m='1132770'>take</span> <span
  m='1132960'>6046.</span> </p><p><span m='1135430'>OK.</span> <span
  m='1135950'>We're</span> <span m='1136110'>just</span> <span
  m='1136280'>going</span> <span m='1136390'>to</span> <span
  m='1136450'>get</span> <span m='1136590'>to</span> <span
  m='1136710'>linear</span> <span m='1137080'>today,</span> <span
  m='1137410'>which</span> <span m='1137620'>is</span> <span
  m='1137850'>a</span> <span m='1137920'>lot</span> <span
  m='1138150'>better</span> <span m='1138420'>than</span> <span
  m='1138610'>exponential.</span> <span m='1141430'>So</span> <span
  m='1142860'>why</span> <span m='1143180'>linear?</span> <span
  m='1143890'>Because</span> <span m='1144220'>there's</span> <span
  m='1144470'>n</span> <span m='1145130'>non-memoize</span> <span
  m='1145920'>calls,</span> <span m='1147050'>and</span> <span
  m='1147250'>each</span> <span m='1147480'>of</span> <span
  m='1147530'>them</span> <span m='1147700'>cost</span> <span
  m='1148090'>constant.</span> <span m='1148690'>So</span> <span
  m='1148810'>it's</span> <span m='1148920'>the</span> <span
  m='1149020'>product</span> <span m='1149550'>of</span> <span
  m='1149640'>those</span> <span m='1149880'>two</span> <span
  m='1150020'>numbers.</span> <span m='1152330'>This</span> <span
  m='1152500'>is</span> <span m='1152660'>an</span> <span
  m='1152750'>important</span> <span m='1154210'>idea.</span> <span
  m='1154820'>And it's</span> <span m='1155140'>so</span> <span
  m='1155380'>important</span> <span m='1155850'>I'm</span> <span
  m='1156130'>going</span> <span m='1156390'>to</span> <span
  m='1158010'>write</span> <span m='1158210'>it</span> <span
  m='1158320'>down</span> <span m='1158610'>again</span> <span
  m='1162930'>in</span> <span m='1163100'>a</span> <span
  m='1163310'>slightly</span> <span m='1163700'>more</span> <span
  m='1163900'>general</span> <span m='1164210'>framework.</span> </p><p><span
  m='1165080'>In</span> <span m='1165240'>general,</span> <span
  m='1167960'>in</span> <span m='1168160'>dynamic</span> <span
  m='1168600'>programming--</span> <span m='1177400'>I</span> <span
  m='1177560'>didn't</span> <span m='1177890'>say</span> <span
  m='1178140'>why</span> <span m='1178370'>it's</span> <span
  m='1178500'>called</span> <span m='1178690'>memoization.</span> <span
  m='1180540'>The</span> <span m='1180620'>idea is</span> <span
  m='1180930'>you</span> <span m='1181050'>have</span> <span
  m='1181360'>this</span> <span m='1181530'>memo</span> <span
  m='1181900'>pad</span> <span m='1182210'>where you write</span> <span
  m='1182670'>down</span> <span m='1182880'>all</span> <span
  m='1183100'>your</span> <span m='1183630'>scratch</span> <span
  m='1184000'>work.</span> <span m='1184810'>That's</span> <span
  m='1185080'>this</span> <span m='1185270'>memo</span> <span
  m='1185580'>dictionary.</span> <span m='1186495'>And to</span> <span
  m='1186750'>memoize</span> <span m='1187700'>is</span> <span
  m='1187830'>to</span> <span m='1188000'>write</span> <span
  m='1188290'>down</span> <span m='1188510'>on</span> <span
  m='1188620'>your</span> <span m='1188730'>memo pad.</span> <span
  m='1189390'>I</span> <span m='1189500'>didn't</span> <span
  m='1189720'>make</span> <span m='1189920'>it</span> <span
  m='1190010'>up.</span> <span m='1190530'>Another</span> <span
  m='1190800'>crazy</span> <span m='1191130'>term.</span> <span
  m='1192630'>It</span> <span m='1192810'>means</span> <span
  m='1193140'>remember.</span> <span m='1195450'>And</span> <span
  m='1195660'>then</span> <span m='1196460'>you</span> <span
  m='1196670'>remember</span> <span m='1197450'>all</span> <span
  m='1197660'>the</span> <span m='1197720'>solutions</span> <span
  m='1198160'>that</span> <span m='1198310'>you've</span> <span
  m='1198470'>done.</span> <span m='1199610'>And</span> <span
  m='1199740'>then</span> <span m='1199850'>you</span> <span
  m='1199980'>reuse</span> <span m='1200340'>those</span> <span
  m='1200520'>solutions.</span> </p><p><span m='1202380'>Now</span> <span
  m='1202520'>these</span> <span m='1202690'>solutions</span> <span
  m='1203300'>are</span> <span m='1203420'>not</span> <span
  m='1203660'>really</span> <span m='1203880'>a</span> <span
  m='1203940'>solution</span> <span m='1204460'>to</span> <span
  m='1204680'>the</span> <span m='1204910'>problem</span> <span
  m='1205720'>that</span> <span m='1205860'>I</span> <span
  m='1205930'>care</span> <span m='1206240'>about.</span> <span
  m='1206470'>The</span> <span m='1206560'>problem</span> <span
  m='1206860'>I</span> <span m='1206940'>care</span> <span
  m='1207200'>about</span> <span m='1207410'>is</span> <span
  m='1207540'>computing</span> <span m='1207980'>the</span> <span
  m='1208180'>nth</span> <span m='1208450'>Fibonacci</span> <span
  m='1208970'>number.</span> <span m='1209850'>To</span> <span
  m='1210240'>get</span> <span m='1210530'>there</span> <span
  m='1210740'>I</span> <span m='1210780'>had</span> <span m='1210960'>to</span>
  <span m='1211040'>compute</span> <span m='1211440'>other</span> <span
  m='1211700'>Fibonacci</span> <span m='1212240'>numbers.</span> <span
  m='1213230'>Why?</span> <span m='1215060'>Because</span> <span
  m='1215290'>I</span> <span m='1215350'>had</span> <span m='1215530'>a</span>
  <span m='1215590'>recursive</span> <span m='1216110'>formulation.</span>
  </p><p><span m='1216730'>This is</span> <span m='1216920'>not</span> <span
  m='1217140'>always</span> <span m='1217450'>the</span> <span
  m='1217560'>way</span> <span m='1217710'>to</span> <span
  m='1217800'>solve</span> <span m='1218030'>a</span> <span
  m='1218090'>problem.</span> <span m='1219220'>But</span> <span
  m='1221220'>usually</span> <span m='1221690'>when</span> <span
  m='1221800'>you're</span> <span m='1221900'>solving</span> <span
  m='1222200'>something</span> <span m='1222550'>you</span> <span
  m='1222720'>can</span> <span m='1222860'>split</span> <span
  m='1223110'>it</span> <span m='1223220'>into</span> <span
  m='1224160'>parts,</span> <span m='1224550'>into</span> <span
  m='1225060'>subproblems,</span> <span m='1225850'>we</span> <span
  m='1225940'>call</span> <span m='1226420'>them.</span> <span
  m='1228030'>They're</span> <span m='1228180'>not</span> <span
  m='1228430'>always</span> <span m='1228750'>of</span> <span
  m='1228920'>the</span> <span m='1229060'>same</span> <span
  m='1229360'>flavor</span> <span m='1229780'>as</span> <span
  m='1229880'>your</span> <span m='1230060'>original</span> <span
  m='1230490'>goal</span> <span m='1230730'>problem,</span> <span
  m='1231130'>but</span> <span m='1231300'>there's</span> <span
  m='1231450'>some</span> <span m='1231660'>kind</span> <span
  m='1231850'>of</span> <span m='1231950'>related</span> <span
  m='1233020'>parts.</span> </p><p><span m='1234290'>And</span> <span
  m='1234500'>this</span> <span m='1234720'>is</span> <span
  m='1235500'>the</span> <span m='1235630'>big</span> <span
  m='1235840'>challenge</span> <span m='1236280'>in</span> <span
  m='1236380'>designing</span> <span m='1236980'>a</span> <span
  m='1237190'>dynamic</span> <span m='1237600'>program,</span> <span
  m='1238040'>is</span> <span m='1238230'>to</span> <span
  m='1238380'>figure</span> <span m='1238700'>out</span> <span
  m='1239190'>what</span> <span m='1239410'>are</span> <span
  m='1239590'>the</span> <span m='1239730'>subproblems.</span> <span
  m='1241410'>Let's</span> <span m='1241560'>say,</span> <span
  m='1241930'>the</span> <span m='1242050'>first</span> <span
  m='1242420'>thing</span> <span m='1242760'>I</span> <span
  m='1242860'>want</span> <span m='1243080'>to</span> <span
  m='1243130'>know</span> <span m='1243270'>about</span> <span
  m='1243470'>a</span> <span m='1243590'>dynamic</span> <span
  m='1243920'>program,</span> <span m='1244410'>is</span> <span
  m='1244530'>what</span> <span m='1244750'>are</span> <span m='1244820'>the
  subproblems.</span> <span m='1247610'>Somehow</span> <span
  m='1248040'>they</span> <span m='1248170'>are</span> <span
  m='1248260'>designed</span> <span m='1249400'>to</span> <span
  m='1249790'>help</span> <span m='1250070'>solve</span> <span
  m='1250570'>your</span> <span m='1250750'>actual</span> <span
  m='1251170'>problem.</span> </p><p><span m='1258650'>And</span> <span
  m='1258920'>the</span> <span m='1259020'>idea of</span> <span
  m='1259310'>memoization</span> <span m='1260040'>is,</span> <span
  m='1260190'>once</span> <span m='1260400'>you</span> <span
  m='1260490'>solve</span> <span m='1260760'>a</span> <span
  m='1260810'>subproblem,</span> <span m='1261650'>write</span> <span
  m='1261860'>down</span> <span m='1262050'>the</span> <span
  m='1262170'>answer.</span> <span m='1262650'>If</span> <span
  m='1262760'>you</span> <span m='1262840'>ever</span> <span
  m='1263010'>need</span> <span m='1263150'>to</span> <span
  m='1263220'>solve</span> <span m='1263500'>that</span> <span
  m='1263730'>same</span> <span m='1263980'>problem</span> <span
  m='1264460'>again</span> <span m='1265350'>you</span> <span
  m='1265580'>reuse</span> <span m='1265950'>the</span> <span
  m='1266060'>answer.</span> <span m='1267400'>So</span> <span
  m='1267530'>that</span> <span m='1267740'>is</span> <span
  m='1267920'>the</span> <span m='1268030'>core</span> <span
  m='1268280'>idea.</span> <span m='1269150'>And</span> <span
  m='1269350'>so</span> <span m='1269440'>in</span> <span
  m='1269520'>this</span> <span m='1269620'>sense</span> <span
  m='1269950'>dynamic</span> <span m='1270320'>programming</span> <span
  m='1270800'>is</span> <span m='1270920'>essentially</span> <span
  m='1272390'>recursion</span> <span m='1274390'>plus</span> <span
  m='1275650'>memoization.</span> </p><p><span m='1283490'>And</span> <span
  m='1284350'>so</span> <span m='1284600'>in</span> <span
  m='1284810'>this</span> <span m='1285020'>case</span> <span
  m='1286230'>these</span> <span m='1286450'>are</span> <span m='1286490'>the
  subproblems.</span> <span m='1287450'>Fibonacci</span> <span m='1287940'>of
  1</span> <span m='1288320'>through</span> <span m='1288470'>Fibonacci</span>
  <span m='1288990'>of</span> <span m='1289050'>n.</span> <span
  m='1289950'>The</span> <span m='1290050'>one</span> <span
  m='1290210'>we</span> <span m='1290340'>care</span> <span
  m='1290600'>about</span> <span m='1290810'>is</span> <span
  m='1290910'>Fibonacci</span> <span m='1291390'>of</span> <span
  m='1291460'>n.</span> <span m='1292270'>But</span> <span m='1292430'>to</span>
  <span m='1292510'>get</span> <span m='1292700'>there</span> <span
  m='1292840'>we solve</span> <span m='1293160'>these</span> <span
  m='1293340'>other</span> <span m='1293550'>subproblems.</span> <span
  m='1296290'>In</span> <span m='1296460'>all</span> <span
  m='1296680'>cases,</span> <span m='1297230'>if</span> <span
  m='1297430'>this</span> <span m='1297680'>is</span> <span
  m='1297810'>the</span> <span m='1297900'>situation--</span> <span
  m='1300090'>so</span> <span m='1300180'>for</span> <span
  m='1300340'>any</span> <span m='1300510'>dynamic</span> <span
  m='1300910'>program,</span> <span m='1301900'>the</span> <span
  m='1302040'>running</span> <span m='1302320'>time</span> <span
  m='1303280'>is</span> <span m='1303440'>going</span> <span
  m='1303650'>to</span> <span m='1303730'>be</span> <span
  m='1304180'>equal</span> <span m='1304500'>to</span> <span
  m='1305130'>the</span> <span m='1305240'>number</span> <span
  m='1305610'>of</span> <span m='1305660'>different</span> <span
  m='1306000'>subproblems</span> <span m='1306560'>you</span> <span
  m='1306680'>might</span> <span m='1306870'>have</span> <span
  m='1307030'>to</span> <span m='1307160'>solve,</span> <span m='1308180'>or
  that</span> <span m='1308410'>you</span> <span m='1308520'>do</span> <span
  m='1308670'>solve,</span> <span m='1310590'>times</span> <span
  m='1311910'>the</span> <span m='1312020'>amount</span> <span
  m='1312240'>of</span> <span m='1312340'>time</span> <span
  m='1312680'>you</span> <span m='1312780'>spend</span> <span
  m='1313980'>per</span> <span m='1314230'>subproblem.</span> </p><p><span
  m='1321160'>OK.</span> <span m='1321450'>In</span> <span
  m='1321600'>this</span> <span m='1321790'>situation</span> <span
  m='1323460'>we</span> <span m='1323640'>had</span> <span m='1324030'>n</span>
  <span m='1324310'>subproblems.</span> <span m='1326960'>And</span> <span
  m='1327370'>for</span> <span m='1327520'>each</span> <span
  m='1327740'>of</span> <span m='1327810'>them</span> <span
  m='1328140'>we</span> <span m='1328280'>spent</span> <span
  m='1328580'>constant</span> <span m='1329030'>time.</span> <span
  m='1330900'>And</span> <span m='1331100'>when</span> <span
  m='1331270'>I</span> <span m='1331370'>measure</span> <span
  m='1332420'>the</span> <span m='1332530'>time</span> <span
  m='1332790'>per</span> <span m='1332930'>subproblem</span> <span
  m='1333580'>which,</span> <span m='1333780'>in</span> <span
  m='1333850'>the</span> <span m='1333960'>Fibonacci</span> <span
  m='1334490'>case</span> <span m='1334750'>I</span> <span
  m='1334810'>claim</span> <span m='1335060'>is</span> <span
  m='1335170'>constant,</span> <span m='1335890'>I</span> <span
  m='1336050'>ignore</span> <span m='1336740'>recursive</span> <span
  m='1337260'>calls.</span> <span m='1338790'>That's</span> <span
  m='1339020'>the</span> <span m='1339130'>key.</span> <span
  m='1339980'>We</span> <span m='1340110'>don't</span> <span
  m='1340310'>have</span> <span m='1340440'>to</span> <span
  m='1340560'>solve</span> <span m='1340790'>recurrences</span> <span
  m='1341330'>with</span> <span m='1341390'>dynamic</span> <span
  m='1341800'>programming.</span> <span m='1342630'>Yay.</span> <span
  m='1343355'>No</span> <span m='1343610'>recurrences</span> <span
  m='1344150'>necessary.</span> <span m='1345250'>OK.</span> <span
  m='1345750'>Don't</span> <span m='1348000'>count</span> <span
  m='1349760'>recursions.</span> </p><p><span m='1354280'>Obviously,</span>
  <span m='1354680'>don't</span> <span m='1354890'>count</span> <span
  m='1355150'>memoized</span> <span m='1355730'>recursions.</span> <span
  m='1356800'>The</span> <span m='1356910'>reason</span> <span
  m='1357260'>is,</span> <span m='1358100'>I</span> <span
  m='1358210'>only</span> <span m='1358450'>need</span> <span
  m='1358620'>to</span> <span m='1358690'>count</span> <span
  m='1358950'>them</span> <span m='1359100'>once.</span> <span
  m='1359750'>After</span> <span m='1360030'>the</span> <span
  m='1360130'>first</span> <span m='1360400'>time</span> <span
  m='1360580'>I</span> <span m='1360630'>do</span> <span m='1360830'>it,</span>
  <span m='1360920'>it's</span> <span m='1361070'>free.</span> <span
  m='1362540'>So</span> <span m='1363010'>I</span> <span
  m='1363150'>count</span> <span m='1363660'>how</span> <span
  m='1363890'>many</span> <span m='1364100'>different</span> <span
  m='1365110'>subproblems</span> <span m='1365620'>do</span> <span
  m='1365710'>I</span> <span m='1365770'>need</span> <span m='1365940'>to</span>
  <span m='1366030'>do?</span> <span m='1366200'>These</span> <span
  m='1366450'>are</span> <span m='1366510'>they</span> <span
  m='1366640'>going</span> <span m='1366790'>to</span> <span
  m='1366850'>be</span> <span m='1367000'>the</span> <span
  m='1367120'>expensive</span> <span m='1367630'>recursions</span> <span
  m='1368030'>where</span> <span m='1368210'>I</span> <span
  m='1368240'>do</span> <span m='1368460'>work,</span> <span
  m='1369200'>I</span> <span m='1369330'>do</span> <span m='1369510'>some</span>
  <span m='1369780'>amount</span> <span m='1370010'>of</span> <span
  m='1370100'>work,</span> <span m='1370350'>but</span> <span
  m='1370460'>I</span> <span m='1370530'>don't</span> <span
  m='1370730'>count</span> <span m='1370930'>the recursions</span> <span
  m='1371460'>because</span> <span m='1371610'>otherwise</span> <span
  m='1371990'>I'd</span> <span m='1372060'>be</span> <span
  m='1372230'>double</span> <span m='1372490'>counting.</span> <span
  m='1373600'>I only</span> <span m='1373810'>want</span> <span
  m='1373970'>to</span> <span m='1374390'>count</span> <span
  m='1374660'>each</span> <span m='1374830'>subproblem</span> <span
  m='1375420'>once,</span> <span m='1376930'>and</span> <span
  m='1377110'>then</span> <span m='1377260'>this</span> <span
  m='1377430'>will</span> <span m='1377870'>solve</span> <span
  m='1378100'>it.</span> </p><p><span m='1379010'>So a</span> <span
  m='1379190'>simple</span> <span m='1379510'>idea.</span> <span
  m='1380840'>In</span> <span m='1380970'>general,</span> <span
  m='1381300'>dynamic</span> <span m='1381660'>programming</span> <span
  m='1382100'>is a</span> <span m='1382210'>super</span> <span
  m='1382680'>simple</span> <span m='1383030'>idea.</span> <span
  m='1383860'>It's</span> <span m='1384060'>nothing</span> <span
  m='1384370'>fancy.</span> <span m='1385390'>It's</span> <span
  m='1385530'>basically</span> <span m='1385880'>just</span> <span
  m='1386060'>memoization.</span> <span m='1387440'>There</span> <span
  m='1387600'>is</span> <span m='1387700'>one</span> <span
  m='1387930'>extra</span> <span m='1388560'>trick</span> <span
  m='1388920'>we're</span> <span m='1389030'>going</span> <span
  m='1389160'>to</span> <span m='1389260'>pull</span> <span
  m='1389520'>out,</span> <span m='1390730'>but</span> <span
  m='1391970'>that's</span> <span m='1392190'>the</span> <span
  m='1392380'>idea.</span> </p><p><span m='1392770'>All</span> <span
  m='1392840'>right.</span> <span m='1394110'>Let</span> <span
  m='1394350'>me</span> <span m='1394500'>tell</span> <span
  m='1394840'>you</span> <span m='1401520'>another</span> <span
  m='1401990'>perspective.</span> <span m='1404010'>This</span> <span
  m='1404250'>is</span> <span m='1404350'>the</span> <span
  m='1404460'>one</span> <span m='1404680'>maybe</span> <span
  m='1404950'>most</span> <span m='1405210'>commonly</span> <span
  m='1405680'>taught.</span> <span m='1408050'>Is</span> <span
  m='1408290'>to</span> <span m='1408430'>think</span> <span
  m='1408840'>of--</span> <span m='1409320'>but</span> <span
  m='1409800'>I'm</span> <span m='1410020'>not</span> <span m='1410190'>a</span>
  <span m='1410250'>particular</span> <span m='1410700'>fan</span> <span
  m='1411020'>of it.</span> <span m='1411260'>I</span> <span
  m='1411310'>really</span> <span m='1411580'>like</span> <span
  m='1411800'>memoization.</span> <span m='1412470'>I</span> <span
  m='1412590'>think</span> <span m='1412770'>it's</span> <span
  m='1412950'>a</span> <span m='1413000'>simple</span> <span
  m='1413330'>idea.</span> <span m='1415240'>And</span> <span
  m='1415380'>as</span> <span m='1415490'>long</span> <span
  m='1415750'>as</span> <span m='1415830'>you</span> <span
  m='1415970'>remember</span> <span m='1416800'>this</span> <span
  m='1417040'>formula</span> <span m='1417500'>here,</span> <span
  m='1418500'>it's</span> <span m='1418690'>really</span> <span
  m='1418960'>easy</span> <span m='1419200'>to</span> <span
  m='1419290'>work</span> <span m='1419520'>with.</span> <span
  m='1423240'>But</span> <span m='1423360'>some</span> <span
  m='1423530'>people</span> <span m='1423840'>like</span> <span
  m='1424080'>to</span> <span m='1424220'>think</span> <span
  m='1424410'>of</span> <span m='1424510'>it</span> <span
  m='1424610'>this</span> <span m='1424800'>way.</span> <span
  m='1425560'>And</span> <span m='1425880'>so</span> <span
  m='1426080'>you</span> <span m='1426250'>can</span> <span
  m='1426410'>pick</span> <span m='1426580'>whichever</span> <span
  m='1426910'>way</span> <span m='1427060'>you</span> <span
  m='1427180'>find</span> <span m='1427440'>most</span> <span
  m='1427710'>intuitive.</span> </p><p><span m='1429390'>Instead</span> <span
  m='1429720'>of</span> <span m='1429810'>thinking</span> <span m='1430150'>of
  a</span> <span m='1430250'>recursive</span> <span
  m='1430790'>algorithm,</span> <span m='1431370'>which</span> <span
  m='1431440'>in</span> <span m='1431510'>some</span> <span
  m='1431720'>sense</span> <span m='1432010'>starts</span> <span
  m='1432300'>at</span> <span m='1432400'>the</span> <span
  m='1432510'>top</span> <span m='1433586'>of</span> <span
  m='1435040'>what</span> <span m='1435200'>you</span> <span
  m='1435310'>want</span> <span m='1435470'>to</span> <span
  m='1435540'>solve</span> <span m='1435940'>and</span> <span
  m='1436050'>works</span> <span m='1436300'>its</span> <span
  m='1436420'>way</span> <span m='1436590'>down,</span> <span
  m='1437780'>you</span> <span m='1437930'>could</span> <span
  m='1438080'>do</span> <span m='1438160'>the</span> <span
  m='1438270'>reverse.</span> <span m='1438660'>You could</span> <span
  m='1438880'>start</span> <span m='1439090'>at</span> <span
  m='1439170'>the</span> <span m='1439250'>bottom</span> <span
  m='1439950'>and</span> <span m='1440130'>work</span> <span
  m='1440320'>your</span> <span m='1440440'>way</span> <span
  m='1440610'>up.</span> <span m='1440950'>And</span> <span
  m='1441100'>this</span> <span m='1441250'>is</span> <span
  m='1441360'>probably</span> <span m='1441680'>how</span> <span
  m='1441780'>you</span> <span m='1441980'>normally</span> <span
  m='1442370'>think</span> <span m='1442550'>about</span> <span
  m='1442800'>computing</span> <span m='1443160'>Fibonacci</span> <span
  m='1443650'>numbers</span> <span m='1443990'>or</span> <span
  m='1444050'>how</span> <span m='1444180'>you</span> <span
  m='1444330'>learned</span> <span m='1444620'>it</span> <span
  m='1445080'>before.</span> <span m='1446030'>I'm</span> <span
  m='1446170'>going</span> <span m='1446260'>to</span> <span
  m='1446350'>write</span> <span m='1446530'>it</span> <span
  m='1446650'>in</span> <span m='1446800'>a</span> <span
  m='1446870'>slightly</span> <span m='1447240'>funny</span> <span
  m='1447550'>way.</span> </p><p></p><p><span m='1471730'>The</span> <span
  m='1471860'>point</span> <span m='1472100'>I</span> <span
  m='1472150'>want</span> <span m='1472300'>to</span> <span
  m='1472360'>make</span> <span m='1472590'>is</span> <span m='1472730'>that
  the</span> <span m='1473090'>transformation</span> <span
  m='1473780'>I'm</span> <span m='1473890'>doing</span> <span
  m='1474940'>from</span> <span m='1476500'>the</span> <span
  m='1476800'>naive</span> <span m='1477190'>recursive</span> <span
  m='1477730'>algorithm,</span> <span m='1478840'>to</span> <span
  m='1479040'>the</span> <span m='1479150'>memoized</span> <span
  m='1479700'>algorithm,</span> <span m='1480750'>to</span> <span
  m='1480990'>the</span> <span m='1481090'>bottom-up</span> <span
  m='1481570'>algorithm</span> <span m='1482080'>is</span> <span
  m='1482310'>completely</span> <span m='1483180'>automated.</span> <span
  m='1484030'>I'm</span> <span m='1484170'>not</span> <span
  m='1484490'>thinking,</span> <span m='1485120'>I'm</span> <span
  m='1485270'>just</span> <span m='1485510'>doing.</span> <span
  m='1486650'>OK.</span> <span m='1487470'>It's</span> <span
  m='1487640'>easy.</span> <span m='1489500'>This</span> <span
  m='1489720'>code</span> <span m='1490490'>is</span> <span
  m='1490660'>exactly</span> <span m='1491140'>the</span> <span
  m='1491260'>same</span> <span m='1491700'>as</span> <span
  m='1491880'>this</span> <span m='1492080'>code</span> <span
  m='1492470'>and</span> <span m='1492590'>as</span> <span
  m='1492700'>that</span> <span m='1492950'>code,</span> <span
  m='1493200'>except</span> <span m='1493490'>I replaced</span> <span
  m='1493920'>n</span> <span m='1494090'>by</span> <span m='1494220'>k.</span>
  <span m='1496590'>Just</span> <span m='1496780'>because</span> <span
  m='1496980'>I</span> <span m='1497050'>needed</span> <span
  m='1497250'>a</span> <span m='1497340'>couple of</span> <span
  m='1497730'>different</span> <span m='1498020'>n</span> <span
  m='1498180'>values</span> <span m='1499360'>here.</span> <span m='1499850'>Or
  I</span> <span m='1500000'>want</span> <span m='1500180'>to</span> <span
  m='1500560'>iterate</span> <span m='1500690'>over</span> <span
  m='1500900'>n</span> <span m='1501050'>values.</span> </p><p><span
  m='1504110'>And</span> <span m='1504250'>then</span> <span
  m='1504380'>there's</span> <span m='1504560'>this</span> <span
  m='1505100'>stuff</span> <span m='1505500'>around</span> <span
  m='1505950'>that</span> <span m='1506160'>code</span> <span
  m='1506490'>which</span> <span m='1506860'>is</span> <span
  m='1507030'>just</span> <span m='1507250'>formulaic.</span> <span
  m='1511000'>A</span> <span m='1511040'>little</span> <span
  m='1511410'>bit</span> <span m='1511560'>of</span> <span
  m='1511660'>thought</span> <span m='1512030'>goes</span> <span
  m='1512290'>into</span> <span m='1512560'>this</span> <span
  m='1512760'>for</span> <span m='1513010'>loop,</span> <span
  m='1513460'>but</span> <span m='1513590'>that's</span> <span
  m='1513830'>it.</span> <span m='1515470'>OK.</span> <span
  m='1515660'>This</span> <span m='1515860'>does</span> <span
  m='1516100'>exactly</span> <span m='1516700'>the</span> <span
  m='1516810'>same</span> <span m='1517070'>thing</span> <span
  m='1517940'>as</span> <span m='1518250'>the</span> <span
  m='1518330'>memoized</span> <span m='1518850'>algorithm.</span> <span
  m='1522700'>Maybe it</span> <span m='1522950'>takes</span> <span
  m='1523210'>a</span> <span m='1523260'>little</span> <span
  m='1523470'>bit</span> <span m='1523600'>of</span> <span
  m='1523710'>thinking</span> <span m='1524150'>to</span> <span
  m='1524290'>realize,</span> <span m='1524660'>if</span> <span
  m='1524790'>you</span> <span m='1524940'>unroll</span> <span
  m='1525510'>all</span> <span m='1525740'>the</span> <span
  m='1525830'>recursion</span> <span m='1526310'>that's</span> <span
  m='1526460'>happening</span> <span m='1526840'>here</span> <span
  m='1527030'>and</span> <span m='1527100'>just</span> <span
  m='1527280'>write</span> <span m='1527530'>it</span> <span
  m='1527640'>out</span> <span m='1528120'>sequentially,</span> <span
  m='1529350'>this</span> <span m='1529540'>is</span> <span
  m='1529650'>exactly</span> <span m='1530200'>what's</span> <span
  m='1530390'>happening.</span> </p><p><span m='1531830'>This</span> <span
  m='1532040'>code</span> <span m='1532340'>does</span> <span
  m='1532490'>exactly</span> <span m='1533080'>the</span> <span
  m='1533180'>same</span> <span m='1533420'>additions,</span> <span
  m='1533980'>exactly</span> <span m='1534580'>the</span> <span
  m='1534690'>same</span> <span m='1534930'>computations</span> <span
  m='1536140'>as</span> <span m='1536300'>this.</span> <span
  m='1537020'>The</span> <span m='1537140'>only</span> <span
  m='1537420'>difference</span> <span m='1537840'>is</span> <span
  m='1538730'>how</span> <span m='1538920'>you</span> <span
  m='1539110'>get</span> <span m='1539350'>there.</span> <span
  m='1539690'>Here</span> <span m='1539890'>we're</span> <span
  m='1540000'>using</span> <span m='1540260'>a</span> <span
  m='1540310'>loop,</span> <span m='1540580'>here</span> <span
  m='1540760'>we're</span> <span m='1540850'>using</span> <span
  m='1541090'>recursion.</span> <span m='1542310'>But</span> <span
  m='1542470'>the</span> <span m='1542550'>same</span> <span
  m='1542810'>things</span> <span m='1543050'>happen</span> <span
  m='1543420'>in</span> <span m='1543510'>the</span> <span
  m='1543600'>same</span> <span m='1543870'>order.</span> <span
  m='1545610'>It's</span> <span m='1545710'>really</span> <span
  m='1545930'>no</span> <span m='1546080'>difference</span> <span
  m='1546540'>between</span> <span m='1546710'>the</span> <span
  m='1546800'>code.</span> <span m='1547350'>This</span> <span
  m='1547530'>code's</span> <span m='1547760'>probably</span> <span
  m='1548060'>going</span> <span m='1548190'>to</span> <span
  m='1548250'>be</span> <span m='1548370'>more</span> <span
  m='1548540'>efficient</span> <span m='1548980'>practice</span> <span
  m='1549500'>because</span> <span m='1550010'>you</span> <span
  m='1550130'>don't</span> <span m='1550920'>make</span> <span
  m='1551270'>function</span> <span m='1551640'>calls</span> <span
  m='1552440'>so</span> <span m='1552510'>much.</span> </p><p><span
  m='1552980'>In fact</span> <span m='1553690'>I made a</span> <span
  m='1554150'>little</span> <span m='1554790'>mistake</span> <span
  m='1555500'>here.</span> <span m='1555840'>This is</span> <span
  m='1555980'>not</span> <span m='1556130'>a</span> <span
  m='1556170'>function</span> <span m='1556520'>call,</span> <span
  m='1557130'>it's</span> <span m='1557240'>just</span> <span
  m='1557400'>a</span> <span m='1557480'>lookup</span> <span
  m='1557870'>into</span> <span m='1558100'>a</span> <span
  m='1558190'>table.</span> <span m='1559470'>Here</span> <span
  m='1559640'>I'm</span> <span m='1559720'>using</span> <span
  m='1560010'>a</span> <span m='1560040'>hash</span> <span
  m='1560300'>table</span> <span m='1560600'>to</span> <span
  m='1560680'>be</span> <span m='1560810'>simple,</span> <span
  m='1561180'>but</span> <span m='1561330'>of</span> <span
  m='1561440'>course</span> <span m='1561650'>you</span> <span
  m='1561750'>could</span> <span m='1561860'>use</span> <span
  m='1562010'>an</span> <span m='1562090'>array.</span> <span
  m='1565920'>But</span> <span m='1566080'>they're</span> <span
  m='1566200'>both</span> <span m='1566430'>constant</span> <span
  m='1566820'>time</span> <span m='1568720'>with</span> <span
  m='1568980'>good</span> <span m='1569140'>hashing.</span> <span
  m='1570520'>All</span> <span m='1570600'>right.</span> <span
  m='1570830'>So</span> <span m='1571060'>is</span> <span m='1571180'>it</span>
  <span m='1571300'>clear</span> <span m='1571520'>what</span> <span
  m='1571850'>this</span> <span m='1571980'>is</span> <span
  m='1572080'>doing?</span> <span m='1572380'>I</span> <span
  m='1572420'>think</span> <span m='1572640'>so.</span> <span
  m='1573580'>I</span> <span m='1573770'>think</span> <span m='1574090'>I</span>
  <span m='1574530'>made a</span> <span m='1574810'>little</span> <span
  m='1575090'>typo.</span> </p><p><span m='1576410'>So</span> <span
  m='1576700'>we</span> <span m='1577170'>have</span> <span
  m='1577380'>to</span> <span m='1577490'>compute--</span> <span
  m='1579220'>oh,</span> <span m='1580666'>another typo.</span> <span
  m='1581630'>We have</span> <span m='1581800'>to</span> <span
  m='1581870'>compute</span> <span m='1582200'>f1</span> <span
  m='1583470'>up</span> <span m='1583670'>to</span> <span m='1584000'>fn,</span>
  <span m='1584530'>which</span> <span m='1584720'>in</span> <span
  m='1584810'>python</span> <span m='1585170'>is</span> <span
  m='1585620'>that.</span> <span m='1587010'>And</span> <span
  m='1589060'>we</span> <span m='1589340'>compute it</span> <span
  m='1589610'>exactly</span> <span m='1590280'>how</span> <span
  m='1590450'>we</span> <span m='1590560'>used</span> <span
  m='1590810'>to.</span> <span m='1591860'>Except</span> <span
  m='1592200'>now,</span> <span m='1592410'>instead</span> <span
  m='1592680'>of</span> <span m='1592760'>recursing,</span> <span
  m='1594020'>I</span> <span m='1594140'>know</span> <span
  m='1594510'>that</span> <span m='1594740'>when</span> <span
  m='1594910'>I'm</span> <span m='1595010'>computing</span> <span
  m='1595520'>the</span> <span m='1595630'>k</span> <span
  m='1595840'>Fibonacci</span> <span m='1596420'>number--</span> <span
  m='1597376'>man.</span> <span m='1598170'>So</span> <span
  m='1598460'>many</span> <span m='1598730'>typos.</span> </p><p><span
  m='1599135'>AUDIENCE:</span> <span m='1599540'>[LAUGHTER]</span> </p><p><span
  m='1600504'>PROFESSOR:</span> <span m='1600986'>You guys are laughing.</span>
  <span m='1602920'>When</span> <span m='1603090'>I</span> <span
  m='1603130'>compute</span> <span m='1603320'>the</span> <span
  m='1603490'>kth</span> <span m='1603920'>Fibonacci</span> <span
  m='1604500'>number</span> <span m='1605230'>I</span> <span
  m='1605400'>know</span> <span m='1605630'>that</span> <span
  m='1605770'>I've</span> <span m='1605930'>already</span> <span
  m='1606330'>computed</span> <span m='1606830'>the</span> <span
  m='1606920'>previous</span> <span m='1607410'>two.</span> <span
  m='1608370'>Why?</span> <span m='1608730'>Because</span> <span
  m='1609070'>I'm</span> <span m='1609130'>doing</span> <span
  m='1609350'>them</span> <span m='1609500'>in</span> <span
  m='1609560'>increasing</span> <span m='1609990'>order.</span> <span
  m='1610550'>Nothing</span> <span m='1611480'>fancy.</span> </p><p><span
  m='1612620'>Then</span> <span m='1613070'>I</span> <span
  m='1613220'>can</span> <span m='1613380'>just</span> <span
  m='1613590'>do</span> <span m='1613720'>this</span> <span
  m='1614470'>and</span> <span m='1614630'>the</span> <span
  m='1614730'>solutions</span> <span m='1615230'>will</span> <span
  m='1615350'>just</span> <span m='1615510'>be</span> <span
  m='1615640'>waiting</span> <span m='1615990'>there.</span> <span
  m='1616750'>If</span> <span m='1616910'>they</span> <span
  m='1617040'>work,</span> <span m='1617370'>I'd</span> <span
  m='1617520'>get</span> <span m='1617640'>a</span> <span m='1617760'>key
  error.</span> <span m='1618450'>So</span> <span m='1618590'>I'd</span> <span
  m='1618810'>know</span> <span m='1618970'>that there's</span> <span
  m='1619290'>a</span> <span m='1619330'>bug.</span> <span
  m='1620120'>But</span> <span m='1620400'>in</span> <span
  m='1620520'>fact,</span> <span m='1620900'>I</span> <span
  m='1621000'>won't</span> <span m='1621040'>get</span> <span
  m='1621140'>a</span> <span m='1621230'>key error.</span> <span
  m='1621670'>I</span> <span m='1621770'>will</span> <span
  m='1621950'>have</span> <span m='1622110'>always</span> <span
  m='1622860'>computed</span> <span m='1623200'>these</span> <span
  m='1623370'>things</span> <span m='1623580'>already.</span> <span
  m='1625090'>Then</span> <span m='1625270'>I</span> <span m='1625340'>store
  it</span> <span m='1625670'>in</span> <span m='1625730'>my</span> <span
  m='1625870'>table.</span> <span m='1626610'>Then</span> <span
  m='1626770'>I</span> <span m='1626860'>iterate.</span> <span
  m='1627290'>Eventually</span> <span m='1628310'>I've</span> <span
  m='1628440'>solved</span> <span m='1628740'>all</span> <span
  m='1629010'>the</span> <span m='1629090'>subproblems,</span> <span
  m='1629860'>f1</span> <span m='1630260'>through</span> <span
  m='1630400'>fn.</span> <span m='1631250'>And</span> <span
  m='1631420'>the</span> <span m='1631490'>one</span> <span m='1631640'>I</span>
  <span m='1631690'>cared</span> <span m='1631930'>about</span> <span
  m='1632150'>was</span> <span m='1632310'>the</span> <span
  m='1632450'>nth</span> <span m='1632880'>one.</span> </p><p><span
  m='1634400'>OK.</span> <span m='1634640'>So</span> <span
  m='1636090'>straightforward.</span> <span m='1637490'>I</span> <span
  m='1637670'>do</span> <span m='1637850'>this</span> <span
  m='1638590'>because</span> <span m='1638810'>I</span> <span
  m='1638870'>don't</span> <span m='1639070'>really</span> <span
  m='1639340'>want</span> <span m='1639560'>to</span> <span
  m='1639600'>have</span> <span m='1639820'>to</span> <span
  m='1639950'>go</span> <span m='1640110'>through</span> <span
  m='1640270'>this</span> <span m='1640440'>transformation</span> <span
  m='1641140'>for</span> <span m='1641270'>every</span> <span
  m='1641530'>single</span> <span m='1641820'>problem</span> <span
  m='1642120'>we</span> <span m='1642240'>do.</span> <span m='1642870'>I'm
  doing</span> <span m='1643140'>it</span> <span m='1643220'>in</span> <span
  m='1643290'>Fibonacci</span> <span m='1643790'>because</span> <span
  m='1643960'>it's</span> <span m='1644120'>super</span> <span
  m='1644420'>easy</span> <span m='1645150'>to</span> <span
  m='1645290'>write</span> <span m='1645540'>the</span> <span
  m='1645650'>code</span> <span m='1645900'>out</span> <span
  m='1646020'>explicitly.</span> <span m='1647080'>But</span> <span
  m='1647200'>you</span> <span m='1647310'>can</span> <span
  m='1647450'>do</span> <span m='1647540'>it</span> <span m='1647630'>for</span>
  <span m='1647850'>all</span> <span m='1648170'>of</span> <span
  m='1648310'>the</span> <span m='1648420'>dynamic</span> <span
  m='1648740'>programs</span> <span m='1649200'>that</span> <span
  m='1649370'>we</span> <span m='1649510'>cover</span> <span
  m='1651040'>in</span> <span m='1651180'>the</span> <span
  m='1651260'>next</span> <span m='1651510'>four</span> <span
  m='1651730'>lectures.</span> </p><p><span m='1653330'>OK.</span> <span
  m='1653630'>I'm</span> <span m='1653790'>going</span> <span
  m='1653900'>to</span> <span m='1653980'>give</span> <span
  m='1654210'>you</span> <span m='1654360'>now</span> <span
  m='1654650'>the</span> <span m='1654850'>general</span> <span
  m='1655240'>case.</span> <span m='1655810'>This</span> <span
  m='1655990'>was</span> <span m='1656170'>the</span> <span
  m='1656280'>special</span> <span m='1657380'>Fibonacci</span> <span
  m='1657930'>version.</span> <span m='1659260'>In</span> <span
  m='1659420'>general,</span> <span m='1660240'>the</span> <span
  m='1660340'>bottom-up</span> <span m='1660860'>does</span> <span
  m='1661340'>exactly</span> <span m='1661820'>the same</span> <span
  m='1662180'>computation</span> <span m='1664230'>as the</span> <span
  m='1664490'>memoized</span> <span m='1665090'>version.</span> <span
  m='1671270'>And</span> <span m='1671470'>what</span> <span
  m='1671650'>we're</span> <span m='1671770'>doing</span> <span
  m='1672670'>is</span> <span m='1672870'>actually</span> <span
  m='1674230'>a</span> <span m='1674320'>topological</span> <span
  m='1675230'>sort</span> <span m='1679920'>of</span> <span
  m='1681490'>the</span> <span m='1681650'>subproblem</span> <span
  m='1684220'>dependency</span> <span m='1684880'>DAG.</span> </p><p><span
  m='1693840'>So</span> <span m='1694720'>in</span> <span
  m='1694850'>this</span> <span m='1695030'>case,</span> <span
  m='1695370'>the</span> <span m='1695480'>dependency</span> <span
  m='1695930'>DAG</span> <span m='1696150'>is</span> <span
  m='1696250'>very</span> <span m='1696430'>simple.</span> <span
  m='1697240'>In</span> <span m='1697430'>order</span> <span
  m='1697670'>to</span> <span m='1697800'>compute--</span> <span
  m='1699504'>I'll</span> <span m='1699961'>do it</span> <span
  m='1700420'>backwards.</span> <span m='1701330'>In</span> <span
  m='1701490'>order</span> <span m='1701660'>to</span> <span
  m='1701760'>compute</span> <span m='1702080'>fn,</span> <span
  m='1703230'>I</span> <span m='1703340'>need</span> <span m='1703620'>to</span>
  <span m='1703750'>know</span> <span m='1704660'>fn</span> <span
  m='1705060'>minus</span> <span m='1705400'>1</span> <span
  m='1706450'>and</span> <span m='1706680'>fn</span> <span
  m='1707050'>minus</span> <span m='1707400'>2.</span> <span
  m='1708820'>If</span> <span m='1708900'>I</span> <span m='1709720'>know</span>
  <span m='1709940'>those</span> <span m='1710450'>I</span> <span
  m='1710530'>can</span> <span m='1710700'>compute</span> <span
  m='1711030'>fn.</span> <span m='1712090'>Then</span> <span
  m='1712420'>there's</span> <span m='1712840'>fn</span> <span
  m='1713190'>minus</span> <span m='1713630'>3,</span> <span
  m='1714750'>which</span> <span m='1714970'>is</span> <span
  m='1715080'>necessary</span> <span m='1715560'>to</span> <span
  m='1715630'>compute</span> <span m='1715940'>this</span> <span
  m='1716140'>one,</span> <span m='1716410'>and</span> <span
  m='1716660'>that</span> <span m='1716900'>one,</span> <span
  m='1717800'>and</span> <span m='1717960'>so</span> <span
  m='1718110'>on.</span> <span m='1718450'>So you</span> <span
  m='1718810'>see</span> <span m='1719050'>what</span> <span
  m='1719210'>this</span> <span m='1719310'>DAG</span> <span
  m='1719620'>looks</span> <span m='1719840'>like.</span> </p><p><span
  m='1720470'>Now,</span> <span m='1720590'>I've</span> <span
  m='1720880'>drawn</span> <span m='1721330'>it</span> <span
  m='1721400'>conveniently</span> <span m='1722000'>so</span> <span
  m='1722160'>all</span> <span m='1722340'>the</span> <span
  m='1722470'>edges</span> <span m='1722710'>go</span> <span
  m='1722820'>left</span> <span m='1723040'>to</span> <span
  m='1723140'>right.</span> <span m='1723510'>So</span> <span
  m='1723610'>this</span> <span m='1723690'>is</span> <span m='1723880'>a</span>
  <span m='1724280'>topological</span> <span m='1724680'>order</span> <span
  m='1725580'>from</span> <span m='1725780'>left</span> <span
  m='1725990'>to</span> <span m='1726070'>right.</span> <span
  m='1726420'>And</span> <span m='1726570'>so</span> <span m='1726740'>I</span>
  <span m='1726840'>just</span> <span m='1727060'>need</span> <span
  m='1727190'>to</span> <span m='1727270'>do</span> <span m='1727530'>f1,</span>
  <span m='1728070'>f2,</span> <span m='1728970'>up to</span> <span
  m='1729050'>fn</span> <span m='1729400'>in</span> <span
  m='1729570'>order.</span> <span m='1730760'>Usually</span> <span
  m='1731980'>it's</span> <span m='1732260'>totally</span> <span
  m='1732860'>obvious</span> <span m='1733400'>what</span> <span
  m='1733570'>order</span> <span m='1733850'>to</span> <span m='1734010'>solve
  the</span> <span m='1734420'>subproblems</span> <span m='1735040'>in.</span>
  <span m='1735560'>But</span> <span m='1735700'>in</span> <span
  m='1735810'>general,</span> <span m='1736600'>what</span> <span
  m='1736870'>you</span> <span m='1737180'>should</span> <span
  m='1737770'>have</span> <span m='1737970'>in</span> <span
  m='1738060'>mind</span> <span m='1738320'>is</span> <span
  m='1738410'>that</span> <span m='1738500'>we</span> <span
  m='1738610'>are</span> <span m='1738670'>doing</span> <span
  m='1738930'>a</span> <span m='1739000'>topological</span> <span
  m='1739640'>sort.</span> <span m='1740430'>Here</span> <span
  m='1740580'>we</span> <span m='1740680'>just</span> <span
  m='1740850'>did</span> <span m='1741000'>it in</span> <span
  m='1741120'>our</span> <span m='1741270'>heads</span> <span
  m='1741580'>because</span> <span m='1741760'>it's</span> <span
  m='1741880'>so</span> <span m='1742050'>easy.</span> <span
  m='1743070'>And</span> <span m='1743210'>usually</span> <span
  m='1743610'>it's</span> <span m='1743750'>so</span> <span
  m='1743930'>easy.</span> <span m='1744220'>It's</span> <span
  m='1744320'>just</span> <span m='1744390'>a</span> <span
  m='1744430'>for</span> <span m='1744630'>loop.</span> <span
  m='1745480'>Nothing</span> <span m='1745930'>fancy.</span> </p><p><span
  m='1749900'>All</span> <span m='1750000'>right.</span> <span
  m='1753404'>I'm</span> <span m='1753890'>missing an</span> <span
  m='1754140'>arrow.</span> <span m='1760030'>All</span> <span
  m='1760440'>right.</span> <span m='1762700'>Let's</span> <span
  m='1762910'>do</span> <span m='1763010'>something</span> <span
  m='1763350'>a</span> <span m='1763410'>little</span> <span
  m='1763540'>more</span> <span m='1763710'>interesting,</span> <span
  m='1764170'>shall</span> <span m='1764480'>we?</span> <span m='1778300'>All
  right.</span> <span m='1778470'>One</span> <span m='1778760'>thing</span>
  <span m='1778930'>you</span> <span m='1779080'>can</span> <span
  m='1779360'>do</span> <span m='1779530'>from</span> <span
  m='1779740'>this</span> <span m='1779930'>bottom-up</span> <span
  m='1781060'>perspective</span> <span m='1781770'>is</span> <span
  m='1781900'>you</span> <span m='1782020'>can</span> <span
  m='1782190'>save</span> <span m='1782460'>space.</span> <span
  m='1786310'>Storage</span> <span m='1786680'>space</span> <span
  m='1787000'>in</span> <span m='1787050'>the</span> <span
  m='1787150'>algorithm.</span> <span m='1788572'>We don't</span> <span
  m='1789020'>usually</span> <span m='1789500'>worry</span> <span
  m='1789720'>about</span> <span m='1789980'>space</span> <span
  m='1790460'>in</span> <span m='1790570'>this</span> <span
  m='1790740'>class,</span> <span m='1791110'>but</span> <span
  m='1793280'>it</span> <span m='1793420'>matters</span> <span
  m='1794210'>in</span> <span m='1794770'>reality.</span> </p><p><span
  m='1795910'>So</span> <span m='1796090'>here</span> <span
  m='1796330'>we're</span> <span m='1796460'>building</span> <span
  m='1796810'>a</span> <span m='1796870'>table</span> <span
  m='1797230'>size,</span> <span m='1797500'>n,</span> <span
  m='1798450'>but</span> <span m='1798600'>in</span> <span
  m='1798690'>fact</span> <span m='1799060'>we</span> <span
  m='1799200'>really</span> <span m='1799470'>only</span> <span
  m='1799670'>need</span> <span m='1799830'>to</span> <span
  m='1799920'>remember</span> <span m='1800210'>the</span> <span
  m='1800330'>last</span> <span m='1800690'>two</span> <span
  m='1800830'>values.</span> <span m='1802280'>So</span> <span
  m='1802700'>you</span> <span m='1802850'>could</span> <span
  m='1802960'>just</span> <span m='1803110'>store</span> <span
  m='1803340'>the</span> <span m='1803420'>last</span> <span
  m='1803680'>two</span> <span m='1803770'>values,</span> <span
  m='1804190'>and</span> <span m='1804390'>each</span> <span
  m='1804610'>time</span> <span m='1804830'>you</span> <span
  m='1804920'>make</span> <span m='1805090'>a</span> <span
  m='1805140'>new</span> <span m='1805270'>one</span> <span m='1805730'>delete
  the</span> <span m='1805830'>oldest.</span> <span m='1807620'>so</span> <span
  m='1808830'>by</span> <span m='1809000'>thinking</span> <span
  m='1809350'>a</span> <span m='1809410'>little</span> <span
  m='1809610'>bit</span> <span m='1809750'>here</span> <span
  m='1809980'>you</span> <span m='1810100'>realize</span> <span
  m='1810410'>you</span> <span m='1810530'>only</span> <span
  m='1810640'>need</span> <span m='1810850'>constant</span> <span
  m='1811320'>space.</span> <span m='1812470'>Still</span> <span
  m='1812720'>linear</span> <span m='1813010'>time,</span> <span
  m='1813725'>but</span> <span m='1814060'>constant</span> <span
  m='1814430'>space.</span> <span m='1815790'>And</span> <span
  m='1815970'>that's</span> <span m='1816800'>often</span> <span
  m='1817210'>the</span> <span m='1817300'>case.</span> <span
  m='1817610'>From</span> <span m='1817780'>the</span> <span
  m='1817860'>bottom-up</span> <span m='1818280'>perspective</span> <span
  m='1818730'>you</span> <span m='1818860'>see</span> <span
  m='1819060'>what</span> <span m='1819220'>you</span> <span
  m='1819340'>really</span> <span m='1819570'>need</span> <span
  m='1819730'>to</span> <span m='1819810'>store,</span> <span
  m='1820810'>what</span> <span m='1820930'>you</span> <span
  m='1821010'>need</span> <span m='1821170'>to</span> <span
  m='1821410'>keep</span> <span m='1821590'>track</span> <span
  m='1821850'>of.</span> </p><p><span m='1824830'>All</span> <span
  m='1824900'>right.</span> <span m='1826560'>I</span> <span
  m='1826670'>guess</span> <span m='1826870'>another</span> <span
  m='1827160'>nice</span> <span m='1827390'>thing</span> <span
  m='1827540'>about</span> <span m='1827740'>this</span> <span
  m='1827890'>perspective</span> <span m='1828400'>is,</span> <span
  m='1828500'>the</span> <span m='1828600'>running</span> <span
  m='1828860'>time</span> <span m='1829170'>is</span> <span
  m='1829280'>totally</span> <span m='1829700'>obvious.</span> <span
  m='1830710'>This</span> <span m='1830910'>is</span> <span
  m='1831010'>clearly</span> <span m='1831370'>constant</span> <span
  m='1831780'>time.</span> <span m='1832430'>So</span> <span
  m='1832560'>this</span> <span m='1832700'>is</span> <span
  m='1832800'>clearly</span> <span m='1833130'>linear</span> <span
  m='1833450'>time.</span> <span m='1834730'>Whereas,</span> <span
  m='1835170'>in</span> <span m='1835290'>this</span> <span
  m='1835450'>memoized</span> <span m='1835910'>algorithm</span> <span
  m='1837030'>you</span> <span m='1837100'>have</span> <span
  m='1837270'>to</span> <span m='1837550'>think</span> <span
  m='1837860'>about,</span> <span m='1839570'>when's</span> <span
  m='1840030'>it</span> <span m='1840110'>going</span> <span
  m='1840240'>to</span> <span m='1840300'>be</span> <span
  m='1840400'>memoized,</span> <span m='1840990'>when is</span> <span
  m='1841210'>it</span> <span m='1841380'>not?</span> <span m='1842150'>I</span>
  <span m='1842310'>still</span> <span m='1842550'>like</span> <span
  m='1842730'>this</span> <span m='1842870'>perspective</span> <span
  m='1843410'>because,</span> <span m='1843820'>with</span> <span
  m='1843970'>this</span> <span m='1844160'>rule,</span> <span
  m='1845070'>just</span> <span m='1845240'>multiply a</span> <span
  m='1845660'>number of</span> <span m='1845980'>subproblems</span> <span
  m='1846520'>by</span> <span m='1846700'>time</span> <span
  m='1846990'>per</span> <span m='1847120'>subproblem,</span> <span
  m='1847630'>you</span> <span m='1847730'>get</span> <span
  m='1847930'>the</span> <span m='1848050'>answer.</span> <span
  m='1849110'>But</span> <span m='1849550'>it's</span> <span
  m='1849850'>a</span> <span m='1849920'>little</span> <span
  m='1850190'>less</span> <span m='1850790'>obvious</span> <span
  m='1851360'>than</span> <span m='1853180'>code</span> <span
  m='1853620'>like</span> <span m='1853820'>this.</span> <span
  m='1854300'>So</span> <span m='1855450'>choose</span> <span
  m='1855760'>however</span> <span m='1856040'>you</span> <span
  m='1856170'>like</span> <span m='1856340'>to</span> <span
  m='1856430'>think</span> <span m='1856570'>about</span> <span
  m='1856840'>it.</span> </p><p><span m='1860364'>All right.</span> <span
  m='1860840'>We</span> <span m='1860970'>move</span> <span
  m='1861220'>onto</span> <span m='1861940'>shortest</span> <span
  m='1862380'>paths.</span> <span m='1888890'>So</span> <span
  m='1889160'>I'm</span> <span m='1889310'>again,</span> <span
  m='1890200'>as</span> <span m='1890340'>usual,</span> <span
  m='1890760'>thinking</span> <span m='1891060'>about</span> <span
  m='1891390'>single-source</span> <span m='1891970'>shortest</span> <span
  m='1892310'>paths.</span> <span m='1893980'>So</span> <span
  m='1894100'>we</span> <span m='1894140'>want</span> <span
  m='1894360'>to</span> <span m='1894430'>compute</span> <span
  m='1895600'>the</span> <span m='1895710'>shortest</span> <span
  m='1896030'>pathway</span> <span m='1896620'>from</span> <span
  m='1896820'>s</span> <span m='1897040'>to</span> <span m='1897140'>v</span>
  <span m='1897930'>for</span> <span m='1898060'>all</span> <span
  m='1898300'>v.</span> <span m='1901310'>OK.</span> <span
  m='1901550'>I'd</span> <span m='1901730'>like</span> <span
  m='1901940'>to</span> <span m='1902120'>write</span> <span
  m='1902390'>this</span> <span m='1903960'>initially</span> <span
  m='1904440'>as</span> <span m='1904570'>a</span> <span
  m='1904630'>naive</span> <span m='1904940'>recursive</span> <span
  m='1905410'>algorithm,</span> <span m='1906040'>which</span> <span
  m='1906190'>I</span> <span m='1906280'>can</span> <span
  m='1906430'>then</span> <span m='1906580'>memoize,</span> <span
  m='1907260'>which</span> <span m='1907440'>I</span> <span
  m='1907510'>can</span> <span m='1907680'>then</span> <span
  m='1907970'>bottom-upify.</span> <span m='1909900'>I just</span> <span
  m='1910050'>made</span> <span m='1910260'>that up.</span> </p><p><span
  m='1913040'>So</span> <span m='1914130'>how</span> <span
  m='1914390'>could</span> <span m='1914550'>I</span> <span
  m='1914620'>write</span> <span m='1914930'>this</span> <span
  m='1915190'>as</span> <span m='1915370'>a</span> <span
  m='1915440'>naive</span> <span m='1915820'>recursive</span> <span
  m='1916320'>algorithm?</span> <span m='1917080'>It's</span> <span
  m='1917290'>not</span> <span m='1917480'>so</span> <span
  m='1917660'>obvious.</span> <span m='1919710'>But</span> <span
  m='1922470'>first</span> <span m='1922690'>I'm</span> <span
  m='1922770'>going</span> <span m='1922870'>to</span> <span
  m='1922960'>tell</span> <span m='1923180'>you</span> <span
  m='1923320'>how,</span> <span m='1924430'>just</span> <span
  m='1924830'>as</span> <span m='1925070'>an</span> <span
  m='1926220'>oracle</span> <span m='1926570'>tells</span> <span
  m='1926850'>you,</span> <span m='1926950'>here's</span> <span
  m='1927160'>what</span> <span m='1927300'>you</span> <span
  m='1927390'>should</span> <span m='1927580'>do.</span> <span
  m='1928470'>But</span> <span m='1928510'>then</span> <span
  m='1928680'>we're</span> <span m='1928780'>going</span> <span
  m='1928880'>to</span> <span m='1928960'>think</span> <span
  m='1929160'>about--</span> <span m='1929570'>go</span> <span
  m='1929700'>back,</span> <span m='1930020'>step</span> <span
  m='1930240'>back.</span> <span m='1930950'>Actually,</span> <span
  m='1931250'>it's</span> <span m='1931410'>up to</span> <span
  m='1931665'>you.</span> <span m='1932450'>I</span> <span
  m='1932520'>could</span> <span m='1932690'>tell</span> <span
  m='1932830'>you</span> <span m='1932910'>the</span> <span
  m='1933030'>answer</span> <span m='1933320'>and</span> <span
  m='1933380'>then</span> <span m='1933460'>we</span> <span
  m='1933550'>could</span> <span m='1933670'>figure</span> <span
  m='1933890'>out</span> <span m='1933960'>how</span> <span
  m='1934090'>we</span> <span m='1934180'>got</span> <span
  m='1934410'>there,</span> <span m='1935070'>or</span> <span
  m='1935190'>we</span> <span m='1935290'>could</span> <span
  m='1935390'>just</span> <span m='1935550'>figure</span> <span
  m='1935820'>out</span> <span m='1935910'>the</span> <span
  m='1936030'>answer.</span> <span m='1938540'>Preferences?</span> <span
  m='1942350'>Figure</span> <span m='1942650'>it</span> <span
  m='1942720'>out.</span> <span m='1943090'>All right.</span> <span
  m='1943415'>Good.</span> <span m='1944050'>No</span> <span
  m='1944260'>divine</span> <span m='1944600'>inspiration</span> <span
  m='1945130'>allowed.</span> </p><p><span m='1946140'>So</span> <span
  m='1955320'>let</span> <span m='1955440'>me</span> <span
  m='1955550'>give</span> <span m='1955720'>you</span> <span
  m='1955850'>a</span> <span m='1955920'>tool.</span> <span m='1957584'>The
  tool</span> <span m='1958000'>is</span> <span m='1958350'>guessing.</span>
  <span m='1962660'>This may</span> <span m='1962860'>sound</span> <span
  m='1963180'>silly,</span> <span m='1964040'>but</span> <span
  m='1964230'>it's</span> <span m='1964450'>a</span> <span
  m='1964500'>very</span> <span m='1965000'>powerful</span> <span
  m='1965400'>tool.</span> <span m='1968500'>The</span> <span
  m='1968560'>general</span> <span m='1968870'>idea</span> <span
  m='1969210'>is,</span> <span m='1969620'>suppose</span> <span
  m='1970130'>you</span> <span m='1970230'>don't</span> <span
  m='1970440'>know</span> <span m='1970590'>something</span> <span
  m='1971320'>but</span> <span m='1971450'>you'd</span> <span
  m='1971590'>like</span> <span m='1971800'>to</span> <span
  m='1971910'>know</span> <span m='1972160'>it.</span> <span
  m='1973360'>So</span> <span m='1974080'>what's</span> <span
  m='1974250'>the</span> <span m='1974320'>answer</span> <span
  m='1974530'>to</span> <span m='1974630'>this</span> <span
  m='1974730'>question?</span> <span m='1975350'>I</span> <span
  m='1975520'>don't</span> <span m='1975700'>know.</span> <span
  m='1976630'>Man,</span> <span m='1976840'>I</span> <span
  m='1976890'>really</span> <span m='1977100'>want</span> <span
  m='1977250'>a</span> <span m='1977310'>cushion.</span> <span
  m='1977860'>How</span> <span m='1978050'>am I</span> <span
  m='1978180'>going</span> <span m='1978280'>to</span> <span
  m='1978320'>answer</span> <span m='1978550'>the</span> <span
  m='1978650'>question?</span> <span m='1979650'>Guess.</span> <span
  m='1980650'>OK?</span> </p><p><span m='1980940'>AUDIENCE:</span> <span
  m='1981337'>[LAUGHTER]</span> </p><p><span m='1982530'>PROFESSOR: It's</span>
  <span m='1982960'>a</span> <span m='1983090'>tried</span> <span
  m='1983530'>and</span> <span m='1983650'>tested</span> <span
  m='1984000'>method</span> <span m='1984310'>for</span> <span
  m='1984420'>solving</span> <span m='1984790'>any</span> <span
  m='1985000'>problem.</span> <span m='1996920'>I'm kind of</span> <span
  m='1997050'>belaboring</span> <span m='1997550'>the</span> <span
  m='1997640'>point</span> <span m='1997880'>here.</span> <span
  m='1999720'>The</span> <span m='1999860'>algorithmic</span> <span
  m='2000500'>concept</span> <span m='2001110'>is,</span> <span
  m='2001590'>don't</span> <span m='2001790'>just</span> <span
  m='2001990'>try</span> <span m='2002150'>any</span> <span
  m='2002380'>guess.</span> <span m='2003610'>Try</span> <span
  m='2003880'>them</span> <span m='2004130'>all.</span> <span
  m='2005960'>OK?</span> </p><p><span m='2006747'>AUDIENCE:</span> <span
  m='2007204'>[LAUGHTER]</span> </p><p><span m='2009490'>PROFESSOR: Also</span>
  <span m='2010180'>pretty</span> <span m='2010520'>simple.</span> <span
  m='2010810'>I</span> <span m='2010940'>said</span> <span
  m='2011210'>dynamic</span> <span m='2011620'>programming</span> <span
  m='2012100'>was</span> <span m='2012240'>simple.</span> <span
  m='2013100'>OK.</span> <span m='2018400'>Try</span> <span
  m='2019020'>all</span> <span m='2020470'>guesses.</span> <span
  m='2023030'>This</span> <span m='2023250'>is</span> <span
  m='2023410'>central</span> <span m='2024300'>to</span> <span
  m='2024420'>the</span> <span m='2024610'>dynamic</span> <span
  m='2024950'>programming.</span> <span m='2025430'>I</span> <span
  m='2025540'>know</span> <span m='2025690'>it</span> <span
  m='2025800'>sounds</span> <span m='2026070'>obvious,</span> <span
  m='2026990'>but</span> <span m='2027350'>if</span> <span m='2027580'>I</span>
  <span m='2027670'>want</span> <span m='2027870'>to</span> <span
  m='2027930'>fix</span> <span m='2028190'>my</span> <span
  m='2028340'>equation</span> <span m='2028780'>here,</span> <span
  m='2032470'>dynamic</span> <span m='2032740'>programming</span> <span
  m='2033430'>is</span> <span m='2033780'>roughly</span> <span
  m='2035270'>recursion</span> <span m='2035760'>plus</span> <span
  m='2036000'>memoization.</span> <span m='2038260'>This</span> <span
  m='2038360'>should</span> <span m='2038560'>really</span> <span
  m='2038830'>be,</span> <span m='2039190'>plus</span> <span
  m='2039630'>guessing.</span> <span m='2041800'>Memoization,</span> <span
  m='2042910'>which</span> <span m='2043210'>is</span> <span
  m='2043690'>obvious,</span> <span m='2044640'>guessing</span> <span
  m='2045220'>which</span> <span m='2045420'>is</span> <span
  m='2045700'>obvious,</span> <span m='2046340'>are</span> <span
  m='2046550'>the</span> <span m='2046840'>central</span> <span
  m='2047230'>concepts</span> <span m='2047760'>to</span> <span
  m='2047870'>dynamic</span> <span m='2048260'>programming.</span> <span
  m='2049190'>I'm trying</span> <span m='2049409'>to</span> <span
  m='2049469'>make</span> <span m='2049630'>it</span> <span
  m='2049760'>sound</span> <span m='2050030'>easy</span> <span
  m='2050290'>because</span> <span m='2050670'>usually</span> <span
  m='2050989'>people</span> <span m='2051219'>have</span> <span
  m='2051320'>trouble</span> <span m='2051620'>with dynamic</span> <span
  m='2051940'>programming.</span> <span m='2052330'>It is</span> <span
  m='2052690'>easy.</span> </p><p><span m='2055310'>Try</span> <span
  m='2055620'>all</span> <span m='2055790'>the</span> <span
  m='2055870'>guesses.</span> <span m='2057070'>That's</span> <span
  m='2057260'>something</span> <span m='2057520'>a</span> <span
  m='2057590'>computer</span> <span m='2058000'>can</span> <span m='2058120'>do
  great.</span> <span m='2058500'>This</span> <span m='2058670'>is</span> <span
  m='2058810'>the</span> <span m='2058900'>brute</span> <span
  m='2059130'>force</span> <span m='2059460'>part.</span> <span
  m='2060440'>OK.</span> <span m='2060610'>But</span> <span
  m='2060810'>we're</span> <span m='2060940'>going</span> <span
  m='2061070'>to</span> <span m='2061159'>do</span> <span m='2061300'>it</span>
  <span m='2061719'>carefully.</span> <span m='2063690'>Not</span> <span
  m='2064210'>that</span> <span m='2064429'>carefully.</span> <span
  m='2064689'>I mean,</span> <span m='2064949'>we're</span> <span
  m='2065210'>just</span> <span m='2065409'>trying</span> <span
  m='2065730'>all</span> <span m='2065830'>the</span> <span
  m='2065920'>guesses.</span> <span m='2066690'>Take</span> <span
  m='2066949'>the</span> <span m='2067030'>best</span> <span
  m='2067330'>one.</span> <span m='2073960'>That's</span> <span
  m='2074219'>kind</span> <span m='2074389'>of</span> <span
  m='2074480'>important</span> <span m='2074929'>that</span> <span
  m='2075070'>we</span> <span m='2075190'>can</span> <span
  m='2075340'>choose</span> <span m='2075639'>one</span> <span
  m='2075980'>to</span> <span m='2076110'>be</span> <span
  m='2076250'>called</span> <span m='2076550'>best.</span> <span
  m='2076980'>That's</span> <span m='2077100'>why</span> <span
  m='2077250'>dynamic</span> <span m='2077659'>programming</span> <span
  m='2078100'>is</span> <span m='2078239'>good</span> <span
  m='2078409'>for</span> <span m='2078570'>optimization</span> <span
  m='2079260'>problems.</span> <span m='2079610'>You want</span> <span
  m='2079770'>to</span> <span m='2079820'>maximize</span> <span
  m='2080260'>something,</span> <span m='2080989'>minimize</span> <span
  m='2081380'>something,</span> <span m='2082110'>you</span> <span
  m='2082210'>try</span> <span m='2082449'>them</span> <span
  m='2082570'>all</span> <span m='2083300'>and</span> <span
  m='2083480'>then</span> <span m='2083630'>you</span> <span
  m='2083770'>can</span> <span m='2084030'>forget</span> <span
  m='2084400'>about</span> <span m='2084610'>all</span> <span
  m='2084870'>of</span> <span m='2084940'>them</span> <span
  m='2085130'>and</span> <span m='2085230'>just</span> <span
  m='2085420'>reduce</span> <span m='2085780'>it</span> <span
  m='2085889'>down</span> <span m='2086150'>to</span> <span
  m='2086260'>one</span> <span m='2086540'>thing</span> <span
  m='2086820'>which</span> <span m='2087020'>is</span> <span
  m='2087780'>the</span> <span m='2087909'>best</span> <span
  m='2088219'>one,</span> <span m='2088380'>or</span> <span m='2088530'>a</span>
  <span m='2088679'>best</span> <span m='2089010'>one.</span> </p><p><span
  m='2091050'>OK.</span> <span m='2091389'>So</span> <span
  m='2091600'>now</span> <span m='2092480'>I</span> <span
  m='2092620'>want</span> <span m='2092889'>you</span> <span
  m='2092989'>to</span> <span m='2093080'>try</span> <span m='2093300'>to</span>
  <span m='2093380'>apply</span> <span m='2093830'>this</span> <span
  m='2094040'>principle</span> <span m='2095370'>to</span> <span
  m='2095469'>shortest</span> <span m='2095920'>paths.</span> <span
  m='2096639'>Now</span> <span m='2096870'>I'm</span> <span
  m='2096989'>going</span> <span m='2097090'>to</span> <span
  m='2097160'>draw</span> <span m='2097330'>a</span> <span
  m='2097390'>picture</span> <span m='2097740'>which</span> <span
  m='2097910'>may</span> <span m='2098040'>help.</span> <span
  m='2099380'>We</span> <span m='2099770'>have</span> <span
  m='2100020'>the</span> <span m='2100110'>source,</span> <span
  m='2101270'>s,</span> <span m='2108060'>we</span> <span
  m='2108160'>have</span> <span m='2108230'>some</span> <span
  m='2108420'>vertex,</span> <span m='2108790'>v.</span> <span
  m='2109990'>We'd</span> <span m='2110160'>like</span> <span
  m='2110320'>to</span> <span m='2110420'>find</span> <span
  m='2110700'>the</span> <span m='2110770'>shortest--</span> <span
  m='2111370'>a</span> <span m='2111490'>shortest</span> <span
  m='2111880'>path</span> <span m='2112150'>from</span> <span
  m='2112320'>s</span> <span m='2112500'>to</span> <span m='2112600'>v.</span>
  </p><p><span m='2113870'>Suppose</span> <span m='2114660'>I</span> <span
  m='2114910'>want</span> <span m='2115160'>to</span> <span
  m='2115220'>know</span> <span m='2115330'>what</span> <span
  m='2115440'>this</span> <span m='2115530'>shortest</span> <span
  m='2115850'>path</span> <span m='2116070'>is.</span> <span
  m='2116250'>Suppose</span> <span m='2116600'>this</span> <span
  m='2116810'>was</span> <span m='2116970'>it.</span> <span m='2118092'>You
  have</span> <span m='2118560'>an idea</span> <span m='2119460'>already?</span>
  <span m='2119790'>Yeah.</span> </p><p><span m='2121245'>AUDIENCE:</span> <span
  m='2121730'>What you could do</span> <span m='2122215'>is</span> <span
  m='2123670'>you</span> <span m='2124155'>could</span> <span
  m='2125610'>look</span> <span m='2126095'>at</span> <span
  m='2127065'>everywhere</span> <span m='2127550'>you can</span> <span
  m='2128035'>go</span> <span m='2128520'>from s.</span> <span
  m='2129490'>[INAUDIBLE]</span> <span m='2130945'>shortest</span> <span
  m='2131430'>path</span> <span m='2131672'>of</span> <span
  m='2131915'>each</span> <span m='2132400'>of</span> <span
  m='2132642'>those</span> <span m='2132885'>notes.</span> </p><p><span
  m='2133390'>PROFESSOR: Good.</span> <span m='2133740'>So I</span> <span
  m='2133820'>can</span> <span m='2133960'>look</span> <span
  m='2134140'>at</span> <span m='2135220'>all</span> <span
  m='2135430'>the</span> <span m='2135510'>places</span> <span
  m='2135890'>I</span> <span m='2135960'>could</span> <span
  m='2136140'>go</span> <span m='2136290'>from</span> <span
  m='2136490'>s,</span> <span m='2137920'>and</span> <span
  m='2138090'>then</span> <span m='2138220'>look</span> <span
  m='2138390'>at</span> <span m='2138440'>the</span> <span
  m='2138530'>shortest</span> <span m='2138900'>paths</span> <span
  m='2139260'>from</span> <span m='2139530'>there</span> <span
  m='2140870'>to</span> <span m='2141050'>v.</span> <span m='2141790'>So</span>
  <span m='2141950'>we</span> <span m='2142090'>could</span> <span
  m='2142210'>call</span> <span m='2142410'>this</span> <span
  m='2142660'>s</span> <span m='2143000'>prime.</span> <span
  m='2145600'>So</span> <span m='2145830'>here's</span> <span
  m='2146030'>the</span> <span m='2146130'>idea.</span> <span
  m='2146730'>There's</span> <span m='2146920'>some</span> <span
  m='2147200'>hypothetical</span> <span m='2147820'>shortest</span> <span
  m='2148130'>path.</span> <span m='2150720'>I</span> <span
  m='2150870'>don't</span> <span m='2151050'>know</span> <span
  m='2151250'>where</span> <span m='2151420'>it</span> <span
  m='2151490'>goes</span> <span m='2151720'>first,</span> <span
  m='2153460'>so</span> <span m='2153660'>I</span> <span m='2153760'>will</span>
  <span m='2153920'>guess</span> <span m='2154240'>where</span> <span
  m='2154400'>it</span> <span m='2154460'>goes</span> <span
  m='2154660'>first.</span> <span m='2156080'>I</span> <span
  m='2156320'>know</span> <span m='2157310'>the</span> <span
  m='2157420'>first</span> <span m='2157730'>edge</span> <span
  m='2158070'>must</span> <span m='2158320'>be</span> <span
  m='2158510'>one</span> <span m='2158800'>of</span> <span
  m='2158910'>the</span> <span m='2159090'>outgoing</span> <span
  m='2159470'>edges</span> <span m='2159790'>from s.</span> <span
  m='2160090'>I</span> <span m='2160170'>don't</span> <span
  m='2160300'>know</span> <span m='2160420'>which</span> <span
  m='2160610'>one.</span> <span m='2161100'>Try</span> <span
  m='2161400'>them</span> <span m='2161580'>all.</span> <span
  m='2163210'>Very</span> <span m='2163380'>simple</span> <span
  m='2163700'>idea.</span> <span m='2164570'>Then</span> <span
  m='2164760'>from</span> <span m='2164930'>each</span> <span
  m='2165100'>of</span> <span m='2165170'>those,</span> <span
  m='2165400'>if</span> <span m='2165500'>somehow</span> <span
  m='2165930'>I</span> <span m='2166020'>can</span> <span
  m='2166160'>compute</span> <span m='2166490'>the</span> <span
  m='2166560'>shortest</span> <span m='2166870'>path</span> <span
  m='2167100'>from</span> <span m='2167320'>there</span> <span
  m='2168210'>to</span> <span m='2168390'>v,</span> <span
  m='2170590'>just</span> <span m='2170860'>do</span> <span
  m='2171010'>that</span> <span m='2171500'>and</span> <span
  m='2172190'>take</span> <span m='2172490'>the</span> <span
  m='2172580'>best</span> <span m='2173330'>choice</span> <span
  m='2173740'>for</span> <span m='2173860'>what</span> <span
  m='2174020'>that</span> <span m='2174240'>first</span> <span
  m='2174520'>edge</span> <span m='2174710'>was.</span> <span
  m='2175650'>So</span> <span m='2175790'>this</span> <span
  m='2175980'>would</span> <span m='2176090'>be</span> <span
  m='2176250'>the</span> <span m='2176540'>guess</span> <span
  m='2177590'>first</span> <span m='2177960'>edge</span> <span
  m='2178200'>approach.</span> </p><p><span m='2182340'>It's</span> <span
  m='2182470'>a</span> <span m='2182500'>very</span> <span
  m='2182740'>good</span> <span m='2182890'>idea.</span> <span
  m='2183690'>Not</span> <span m='2183990'>quite</span> <span m='2184480'>the
  one</span> <span m='2184720'>I</span> <span m='2184780'>wanted</span> <span
  m='2185730'>because</span> <span m='2187470'>unfortunately</span> <span
  m='2188470'>that</span> <span m='2188780'>changes</span> <span
  m='2189450'>s.</span> <span m='2190970'>And</span> <span m='2191180'>so</span>
  <span m='2191270'>this</span> <span m='2191440'>would</span> <span
  m='2191560'>work,</span> <span m='2191780'>it</span> <span
  m='2191860'>would</span> <span m='2191970'>just</span> <span
  m='2192130'>be</span> <span m='2192240'>slightly</span> <span
  m='2192570'>less</span> <span m='2192770'>efficient</span> <span
  m='2193210'>if</span> <span m='2193350'>I'm</span> <span
  m='2193450'>solving</span> <span m='2193940'>single-source</span> <span
  m='2194610'>shortest</span> <span m='2194970'>paths.</span> <span
  m='2196090'>So</span> <span m='2196200'>I'm</span> <span
  m='2196290'>going</span> <span m='2196390'>to</span> <span
  m='2196470'>tweak</span> <span m='2196670'>that</span> <span
  m='2196820'>idea</span> <span m='2197100'>slightly</span> <span
  m='2198010'>by</span> <span m='2198130'>guessing</span> <span
  m='2198500'>the</span> <span m='2198610'>last</span> <span
  m='2199020'>edge</span> <span m='2199430'>instead</span> <span m='2199600'>of
  the</span> <span m='2199750'>first</span> <span m='2200050'>edge.</span> <span
  m='2200310'>They're</span> <span m='2200470'>really</span> <span
  m='2200740'>equivalent.</span> <span m='2202100'>If</span> <span
  m='2202240'>I</span> <span m='2202320'>was</span> <span
  m='2202470'>doing</span> <span m='2202710'>this</span> <span
  m='2202860'>I'd</span> <span m='2203030'>essentially</span> <span
  m='2203420'>be</span> <span m='2203550'>solving</span> <span
  m='2204600'>a</span> <span m='2204840'>single-target</span> <span
  m='2205810'>shortest</span> <span m='2206170'>paths,</span> <span
  m='2206480'>which</span> <span m='2206640'>we</span> <span
  m='2206750'>talked</span> <span m='2207000'>about</span> <span
  m='2209280'>before.</span> </p><p><span m='2209820'>So</span> <span
  m='2210360'>I'm</span> <span m='2210570'>going</span> <span
  m='2210770'>to</span> <span m='2210860'>draw</span> <span
  m='2211010'>the</span> <span m='2211120'>same</span> <span
  m='2211360'>picture.</span> <span m='2216510'>I</span> <span
  m='2216620'>want</span> <span m='2216860'>to</span> <span
  m='2216910'>get</span> <span m='2217100'>to</span> <span m='2217190'>v.</span>
  <span m='2217890'>I'm</span> <span m='2218050'>going</span> <span
  m='2218180'>to</span> <span m='2218250'>guess</span> <span
  m='2218610'>the</span> <span m='2218710'>last</span> <span
  m='2219130'>edge,</span> <span m='2219430'>call it</span> <span
  m='2219820'>uv.</span> <span m='2221560'>I</span> <span
  m='2221690'>know</span> <span m='2221860'>it's</span> <span
  m='2221990'>one</span> <span m='2222330'>of</span> <span
  m='2222510'>the</span> <span m='2222780'>incoming</span> <span
  m='2223310'>edges</span> <span m='2223570'>to</span> <span
  m='2223690'>v--</span> <span m='2225130'>unless</span> <span
  m='2225450'>s</span> <span m='2225650'>equals</span> <span
  m='2225940'>v,</span> <span m='2226260'>then</span> <span
  m='2226390'>there's</span> <span m='2226570'>a</span> <span
  m='2226630'>special</span> <span m='2226990'>case.</span> <span
  m='2227780'>As</span> <span m='2227880'>long</span> <span
  m='2228100'>as</span> <span m='2228170'>this</span> <span
  m='2228320'>path</span> <span m='2228570'>has</span> <span
  m='2228700'>length</span> <span m='2228920'>of at</span> <span
  m='2228990'>least</span> <span m='2229240'>1,</span> <span
  m='2229910'>there's</span> <span m='2230060'>some</span> <span
  m='2230300'>last</span> <span m='2230620'>edge.</span> <span
  m='2231290'>What</span> <span m='2231460'>is</span> <span
  m='2231590'>it?</span> <span m='2232040'>I</span> <span
  m='2232150'>don't</span> <span m='2232300'>know.</span> <span
  m='2232840'>Guess.</span> <span m='2234070'>Guess</span> <span
  m='2234340'>all</span> <span m='2234700'>the</span> <span
  m='2234790'>possible</span> <span m='2235530'>incoming</span> <span
  m='2236020'>edges</span> <span m='2236310'>to</span> <span
  m='2236400'>v,</span> <span m='2238230'>and</span> <span
  m='2238440'>then</span> <span m='2239010'>recursively</span> <span
  m='2240110'>compute</span> <span m='2240940'>the</span> <span
  m='2241030'>shortest</span> <span m='2241390'>path</span> <span
  m='2241640'>from</span> <span m='2241790'>s to</span> <span
  m='2242145'>u.</span> <span m='2243130'>And</span> <span
  m='2243270'>then</span> <span m='2243430'>add</span> <span
  m='2243740'>on</span> <span m='2243910'>the</span> <span
  m='2244060'>edge</span> <span m='2244340'>v.</span> </p><p><span
  m='2246200'>OK.</span> <span m='2246370'>So</span> <span
  m='2246570'>what</span> <span m='2246760'>is</span> <span
  m='2246890'>this</span> <span m='2246980'>shortest</span> <span
  m='2247350'>path?</span> <span m='2247750'>It's</span> <span
  m='2248000'>delta</span> <span m='2248410'>of</span> <span
  m='2248680'>s</span> <span m='2248970'>comma</span> <span
  m='2249280'>u,</span> <span m='2250690'>which</span> <span
  m='2251230'>looks</span> <span m='2251540'>the</span> <span
  m='2251640'>same.</span> <span m='2252160'>It's</span> <span
  m='2252340'>another</span> <span m='2252710'>subproblem</span> <span
  m='2253310'>that</span> <span m='2253440'>I</span> <span
  m='2253490'>want</span> <span m='2253720'>to</span> <span
  m='2253770'>solve.</span> <span m='2254910'>There's</span> <span
  m='2255210'>v</span> <span m='2255660'>subproblems</span> <span
  m='2256280'>here</span> <span m='2256500'>I</span> <span
  m='2256550'>care</span> <span m='2256790'>about.</span> <span
  m='2257170'>.</span> <span m='2257780'>So</span> <span
  m='2257930'>that's</span> <span m='2258160'>good.</span> <span
  m='2258660'>I</span> <span m='2258790'>take</span> <span
  m='2259040'>that.</span> <span m='2259780'>I add</span> <span
  m='2260080'>on</span> <span m='2260600'>the</span> <span
  m='2260720'>weight</span> <span m='2260900'>of</span> <span m='2261000'>the
  edge</span> <span m='2261470'>uv.</span> <span m='2264800'>And</span> <span
  m='2265060'>that</span> <span m='2265510'>should</span> <span
  m='2265690'>hopefully</span> <span m='2266070'>give</span> <span
  m='2266300'>me</span> <span m='2267290'>delta</span> <span
  m='2267570'>of</span> <span m='2268070'>s</span> <span
  m='2268360'>comma</span> <span m='2268710'>v.</span> </p><p><span
  m='2270020'>Well,</span> <span m='2270530'>if</span> <span
  m='2270740'>I</span> <span m='2270840'>was</span> <span
  m='2271020'>lucky</span> <span m='2271390'>and</span> <span
  m='2271460'>I</span> <span m='2271520'>guessed</span> <span
  m='2271800'>the</span> <span m='2271920'>right</span> <span
  m='2272130'>choice</span> <span m='2272410'>of</span> <span
  m='2272520'>u.</span> <span m='2273460'>In</span> <span
  m='2273860'>reality,</span> <span m='2274360'>I'm</span> <span
  m='2274490'>not</span> <span m='2274690'>lucky.</span> <span
  m='2275490'>So</span> <span m='2275670'>I</span> <span m='2275770'>have</span>
  <span m='2275960'>to</span> <span m='2276070'>minimize</span> <span
  m='2278470'>over</span> <span m='2278820'>all</span> <span
  m='2279940'>edges</span> <span m='2280510'>uv.</span> <span
  m='2282790'>So</span> <span m='2283010'>this</span> <span
  m='2283250'>is</span> <span m='2283560'>the--</span> <span
  m='2284580'>we're</span> <span m='2284830'>minimizing</span> <span
  m='2285370'>over</span> <span m='2285510'>the</span> <span
  m='2285640'>choice</span> <span m='2286010'>of</span> <span
  m='2286120'>u.</span> <span m='2286580'>V is</span> <span
  m='2286780'>already</span> <span m='2287010'>given</span> <span
  m='2287320'>here.</span> <span m='2288420'>So</span> <span
  m='2288440'>I</span> <span m='2288490'>take</span> <span
  m='2288710'>the</span> <span m='2288810'>minimum</span> <span m='2290170'>over
  all</span> <span m='2290620'>edges</span> <span m='2291520'>of</span> <span
  m='2291720'>the</span> <span m='2291800'>shortest</span> <span
  m='2292130'>path</span> <span m='2292340'>from</span> <span m='2292470'>s
  to</span> <span m='2292845'>u,</span> <span m='2293430'>plus</span> <span
  m='2294310'>the</span> <span m='2294440'>weight</span> <span
  m='2295760'>of</span> <span m='2295860'>the</span> <span
  m='2295980'>edge</span> <span m='2296140'>uv.</span> <span
  m='2297380'>That</span> <span m='2297620'>should</span> <span
  m='2297870'>give</span> <span m='2298040'>me</span> <span
  m='2298160'>the</span> <span m='2298250'>shortest</span> <span
  m='2298630'>path</span> <span m='2299030'>because</span> <span
  m='2299260'>this</span> <span m='2299470'>gave</span> <span
  m='2299650'>me</span> <span m='2299740'>the</span> <span
  m='2299830'>shortest</span> <span m='2300160'>path</span> <span
  m='2300380'>from</span> <span m='2300500'>s to</span> <span
  m='2300810'>u.</span> <span m='2301580'>Then</span> <span m='2301720'>I</span>
  <span m='2301760'>added</span> <span m='2302170'>on</span> <span
  m='2302500'>the</span> <span m='2302640'>edge</span> <span
  m='2302990'>I</span> <span m='2303090'>need</span> <span m='2303110'>to</span>
  <span m='2303200'>get</span> <span m='2303430'>there.</span> </p><p><span
  m='2304110'>And</span> <span m='2304750'>wherever</span> <span
  m='2305210'>the</span> <span m='2305310'>shortest</span> <span
  m='2305660'>path</span> <span m='2305910'>is,</span> <span
  m='2306460'>it</span> <span m='2308010'>uses</span> <span
  m='2308340'>some</span> <span m='2308580'>last</span> <span
  m='2308880'>edge,</span> <span m='2309200'>uv.</span> <span
  m='2310120'>There's</span> <span m='2310270'>got</span> <span
  m='2310450'>to</span> <span m='2310500'>be</span> <span
  m='2310620'>some</span> <span m='2310860'>choice</span> <span
  m='2311100'>of</span> <span m='2311200'>u</span> <span m='2311330'>that
  is</span> <span m='2311540'>the</span> <span m='2311670'>right</span> <span
  m='2311910'>one.</span> <span m='2312650'>That's</span> <span
  m='2313880'>the</span> <span m='2314110'>good</span> <span
  m='2314360'>guess</span> <span m='2314640'>that</span> <span
  m='2314740'>we're</span> <span m='2314900'>hoping</span> <span
  m='2315200'>for.</span> <span m='2315850'>We</span> <span
  m='2315950'>don't</span> <span m='2316060'>know</span> <span
  m='2316160'>what</span> <span m='2316270'>the</span> <span
  m='2316340'>good</span> <span m='2316520'>guess is</span> <span
  m='2316850'>so</span> <span m='2316970'>we</span> <span
  m='2317050'>just</span> <span m='2317200'>try</span> <span
  m='2317400'>them</span> <span m='2317560'>all.</span> <span
  m='2318650'>But</span> <span m='2318780'>whatever</span> <span
  m='2319120'>it</span> <span m='2319170'>is,</span> <span
  m='2319680'>this</span> <span m='2319920'>will</span> <span
  m='2320090'>be</span> <span m='2321000'>the</span> <span
  m='2321120'>weight</span> <span m='2322210'>of</span> <span
  m='2322370'>that</span> <span m='2322570'>path.</span> <span
  m='2323630'>It's</span> <span m='2323730'>going</span> <span
  m='2323830'>to</span> <span m='2323900'>take</span> <span
  m='2324090'>the</span> <span m='2324170'>best</span> <span m='2324490'>path
  from</span> <span m='2324700'>s to</span> <span m='2325080'>u</span> <span
  m='2325220'>because</span> <span m='2325550'>sub</span> <span
  m='2325780'>paths</span> <span m='2326040'>are</span> <span
  m='2326400'>shortest</span> <span m='2326650'>paths</span> <span
  m='2327020'>are shortest paths.</span> <span m='2327290'>Optimal</span> <span
  m='2327660'>substructure.</span> <span m='2328900'>So</span> <span
  m='2329140'>this</span> <span m='2329460'>part</span> <span
  m='2329950'>will</span> <span m='2330130'>be</span> <span
  m='2330390'>delta</span> <span m='2330730'>of</span> <span
  m='2331093'>su.</span> <span m='2331456'>This</span> <span
  m='2331820'>part</span> <span m='2332030'>is</span> <span
  m='2332160'>obviously</span> <span m='2332780'>w</span> <span
  m='2333110'>of</span> <span m='2333180'>uv.</span> <span m='2333950'>So</span>
  <span m='2334100'>this</span> <span m='2334300'>will</span> <span
  m='2334520'>give</span> <span m='2334790'>the</span> <span
  m='2334910'>right</span> <span m='2335110'>answer.</span> <span
  m='2337760'>Hopefully.</span> <span m='2339610'>OK.</span> <span
  m='2340865'>It's</span> <span m='2341200'>certainly</span> <span
  m='2341760'>going to--</span> <span m='2342040'>I</span> <span
  m='2342070'>mean,</span> <span m='2342240'>this</span> <span
  m='2342430'>is</span> <span m='2342690'>the</span> <span
  m='2343090'>analog</span> <span m='2343670'>of</span> <span
  m='2343760'>the</span> <span m='2343860'>naive</span> <span
  m='2344220'>recursive</span> <span m='2344700'>algorithm</span> <span
  m='2345100'>for</span> <span m='2345240'>Fibonacci.</span> <span
  m='2345830'>So</span> <span m='2345990'>it's</span> <span
  m='2346100'>not</span> <span m='2346260'>going</span> <span
  m='2346350'>to</span> <span m='2346390'>be</span> <span
  m='2346500'>efficient</span> <span m='2347520'>if</span> <span
  m='2347710'>I--</span> <span m='2347990'>I mean,</span> <span
  m='2348190'>this</span> <span m='2348370'>is</span> <span
  m='2348510'>an</span> <span m='2348610'>algorithm,</span> <span
  m='2349240'>right?</span> <span m='2349850'>You</span> <span
  m='2350010'>could</span> <span m='2350210'>say--</span> <span
  m='2351140'>this</span> <span m='2351320'>is</span> <span m='2351450'>a</span>
  <span m='2351500'>recursive</span> <span m='2352030'>call.</span> <span
  m='2353720'>We're going to</span> <span m='2353790'>treat</span> <span
  m='2354010'>this</span> <span m='2354230'>as</span> <span
  m='2354530'>recursive</span> <span m='2354940'>call</span> <span
  m='2357240'>instead</span> <span m='2357520'>of</span> <span
  m='2357570'>just</span> <span m='2357800'>a</span> <span
  m='2357880'>definition.</span> <span m='2359910'>Then</span> <span
  m='2360130'>this</span> <span m='2360330'>is</span> <span m='2360480'>a</span>
  <span m='2360640'>recursive</span> <span m='2361100'>algorithm.</span> <span
  m='2363290'>How</span> <span m='2363830'>good</span> <span
  m='2364020'>or</span> <span m='2364100'>bad</span> <span m='2364440'>is</span>
  <span m='2364560'>this</span> <span m='2364720'>recursive</span> <span
  m='2365160'>algorithm?</span> </p><p><span m='2367086'>AUDIENCE:</span> <span
  m='2367548'>Terrible.</span> </p><p><span m='2368010'>PROFESSOR:
  Terrible.</span> <span m='2368850'>Very</span> <span m='2369060'>good.</span>
  <span m='2369960'>Very</span> <span m='2370160'>bad,</span> <span
  m='2370680'>I</span> <span m='2370720'>should</span> <span
  m='2370940'>say.</span> <span m='2374000'>It's</span> <span
  m='2374120'>definitely</span> <span m='2374500'>going</span> <span
  m='2374630'>to</span> <span m='2374700'>be</span> <span
  m='2374810'>exponential</span> <span m='2378080'>without</span> <span
  m='2378430'>memoization.</span> <span m='2379120'>But</span> <span
  m='2379400'>we</span> <span m='2379510'>know.</span> <span
  m='2380040'>We</span> <span m='2380240'>know</span> <span
  m='2380410'>how</span> <span m='2380590'>to</span> <span
  m='2380680'>make</span> <span m='2380890'>algorithms</span> <span
  m='2381290'>better.</span> <span m='2381540'>We</span> <span
  m='2381680'>memoize.</span> <span m='2382990'>OK.</span> <span
  m='2383140'>So</span> <span m='2384040'>I</span> <span
  m='2384130'>think</span> <span m='2384340'>you know how</span> <span
  m='2384650'>to</span> <span m='2384740'>write</span> <span
  m='2384930'>this</span> <span m='2385080'>as</span> <span m='2385200'>a</span>
  <span m='2385270'>memoized</span> <span m='2385730'>algorithm.</span>
  </p><p><span m='2386850'>To</span> <span m='2387020'>define</span> <span
  m='2387390'>the</span> <span m='2387470'>function</span> <span
  m='2387900'>delta</span> <span m='2388300'>of</span> <span
  m='2388742'>sv,</span> <span m='2389626'>you</span> <span
  m='2391250'>first</span> <span m='2391530'>check,</span> <span
  m='2391820'>is</span> <span m='2392090'>s</span> <span
  m='2392320'>comma</span> <span m='2392610'>v</span> <span
  m='2392810'>in</span> <span m='2393000'>the</span> <span
  m='2393080'>memo</span> <span m='2393400'>table?</span> <span
  m='2394080'>If</span> <span m='2394240'>so</span> <span
  m='2394480'>return</span> <span m='2394780'>that</span> <span
  m='2394950'>value.</span> <span m='2395560'>Otherwise,</span> <span
  m='2396490'>do</span> <span m='2396630'>this</span> <span
  m='2396820'>computation</span> <span m='2397940'>where</span> <span
  m='2398110'>this</span> <span m='2398260'>is</span> <span m='2398360'>a</span>
  <span m='2398420'>recursive</span> <span m='2398860'>call</span> <span
  m='2399450'>and</span> <span m='2399620'>then</span> <span
  m='2399750'>stored</span> <span m='2400200'>it in</span> <span
  m='2400310'>the</span> <span m='2400380'>memo</span> <span
  m='2400640'>table.</span> <span m='2402820'>OK.</span> <span
  m='2403460'>I</span> <span m='2403520'>don't</span> <span
  m='2403810'>think</span> <span m='2403970'>I</span> <span
  m='2404020'>need</span> <span m='2404190'>to</span> <span
  m='2404290'>write</span> <span m='2404460'>that</span> <span
  m='2404610'>down.</span> <span m='2404900'>It's just</span> <span
  m='2405120'>like</span> <span m='2405660'>the</span> <span
  m='2405760'>memoized</span> <span m='2406160'>code</span> <span
  m='2406360'>over</span> <span m='2406520'>there.</span> <span
  m='2407360'>Just</span> <span m='2407620'>there's</span> <span
  m='2407840'>now</span> <span m='2407990'>two</span> <span
  m='2408180'>arguments</span> <span m='2408580'>instead</span> <span
  m='2408820'>of</span> <span m='2408900'>one.</span> <span
  m='2411190'>In</span> <span m='2411290'>fact,</span> <span
  m='2411610'>s</span> <span m='2411750'>isn't</span> <span
  m='2411970'>changing.</span> <span m='2412390'>So</span> <span m='2412560'>I
  only</span> <span m='2412770'>need</span> <span m='2412940'>to</span> <span
  m='2413220'>store</span> <span m='2413960'>with</span> <span
  m='2414210'>v</span> <span m='2414670'>instead</span> <span
  m='2414920'>of</span> <span m='2415030'>s</span> <span
  m='2415200'>comma</span> <span m='2415455'>v.</span> </p><p><span
  m='2418500'>Is</span> <span m='2418650'>that</span> <span m='2418860'>a</span>
  <span m='2418910'>good</span> <span m='2419080'>algorithm?</span> <span
  m='2419845'>I</span> <span m='2420100'>claim</span> <span
  m='2420360'>memoization</span> <span m='2421030'>makes</span> <span
  m='2421250'>everything</span> <span m='2421680'>faster.</span> <span
  m='2423570'>Is</span> <span m='2423740'>that</span> <span m='2424740'>a</span>
  <span m='2424890'>fast</span> <span m='2425230'>algorithm?</span> <span
  m='2436560'>Not so</span> <span m='2436740'>obvious, I</span> <span
  m='2437210'>guess.</span> <span m='2451080'>Yes?</span> <span
  m='2452570'>How</span> <span m='2452670'>many</span> <span
  m='2452830'>people</span> <span m='2453070'>think,</span> <span
  m='2453250'>yes,</span> <span m='2453480'>that's</span> <span
  m='2453620'>a</span> <span m='2453660'>good</span> <span
  m='2453810'>algorithm?</span> </p><p><span m='2454990'>AUDIENCE:
  Better.</span> </p><p><span m='2455750'>PROFESSOR: Better.</span> <span
  m='2456030'>Definitely</span> <span m='2456450'>better.</span> <span
  m='2457090'>Can't</span> <span m='2457270'>be</span> <span
  m='2457380'>worse.</span> <span m='2458340'>How many</span> <span
  m='2458510'>people</span> <span m='2458700'>think</span> <span
  m='2458990'>it's</span> <span m='2459110'>a bad</span> <span
  m='2459766'>algorithm</span> <span m='2460480'>still?</span> <span
  m='2461080'>OK.</span> <span m='2461460'>So</span> <span
  m='2461790'>three</span> <span m='2462040'>for</span> <span
  m='2462180'>yes,</span> <span m='2463050'>zero for</span> <span
  m='2463410'>no.</span> <span m='2464760'>How</span> <span
  m='2465140'>many</span> <span m='2465750'>people</span> <span
  m='2465970'>aren't</span> <span m='2466170'>sure?</span> <span
  m='2468840'>Including</span> <span m='2469290'>the</span> <span
  m='2469460'>yes</span> <span m='2469640'>votes?</span> <span
  m='2469970'>Good.</span> </p><p><span m='2472970'>All</span> <span
  m='2473040'>right.</span> <span m='2473570'>It's</span> <span
  m='2473820'>not</span> <span m='2473990'>so</span> <span
  m='2474090'>tricky.</span> <span m='2474410'>Let</span> <span
  m='2474550'>me</span> <span m='2474700'>draw</span> <span
  m='2474880'>you</span> <span m='2475050'>a</span> <span
  m='2475090'>graph.</span> <span m='2487372'>Something like</span> <span
  m='2487866'>that.</span> <span m='2490350'>So</span> <span
  m='2490510'>we</span> <span m='2490650'>wanted</span> <span
  m='2490860'>to</span> <span m='2490970'>commit</span> <span m='2491280'>delta
  of</span> <span m='2491750'>s</span> <span m='2492020'>comma</span> <span
  m='2492330'>v.</span> <span m='2494430'>Let</span> <span m='2494540'>me</span>
  <span m='2494660'>give</span> <span m='2494850'>these</span> <span
  m='2495050'>guys</span> <span m='2495510'>names,</span> <span
  m='2495870'>a</span> <span m='2496270'>and b.</span> <span m='2496670'>So
  we</span> <span m='2496760'>compute</span> <span m='2497170'>delta</span>
  <span m='2497640'>of s</span> <span m='2497870'>comma</span> <span
  m='2498160'>v.</span> <span m='2498580'>To</span> <span
  m='2498930'>compute</span> <span m='2499380'>that</span> <span
  m='2500150'>we</span> <span m='2500330'>need</span> <span
  m='2500560'>to</span> <span m='2500820'>know</span> <span
  m='2501780'>delta</span> <span m='2502510'>of</span> <span
  m='2502970'>s</span> <span m='2503330'>comma</span> <span m='2503770'>a</span>
  <span m='2504850'>and</span> <span m='2505370'>delta</span> <span
  m='2505830'>of</span> <span m='2506400'>s</span> <span
  m='2506650'>comma</span> <span m='2506960'>v.</span> <span m='2507680'>All
  right?</span> <span m='2508110'>Those</span> <span m='2508300'>are</span>
  <span m='2508380'>the</span> <span m='2508520'>two</span> <span
  m='2508750'>ways--</span> <span m='2509460'>sorry,</span> <span
  m='2509690'>actually</span> <span m='2509940'>we</span> <span
  m='2510050'>just</span> <span m='2510230'>need</span> <span
  m='2510350'>one.</span> <span m='2511990'>Only</span> <span
  m='2512180'>one</span> <span m='2512430'>incoming</span> <span
  m='2512870'>edge</span> <span m='2513080'>to</span> <span
  m='2513190'>v.</span> <span m='2513880'>So</span> <span m='2514200'>its</span>
  <span m='2514370'>delta</span> <span m='2514920'>of</span> <span
  m='2515510'>s</span> <span m='2516050'>comma</span> <span
  m='2517460'>a.</span> <span m='2520950'>Sorry--</span> <span
  m='2521230'>I</span> <span m='2521680'>should</span> <span
  m='2521870'>have</span> <span m='2521970'>put</span> <span
  m='2522100'>a</span> <span m='2522440'>base</span> <span
  m='2522750'>case</span> <span m='2523020'>here</span> <span
  m='2523200'>too.</span> <span m='2524090'>Delta</span> <span
  m='2525000'>of</span> <span m='2525900'>s</span> <span
  m='2526080'>comma</span> <span m='2526350'>s</span> <span
  m='2526600'>equals</span> <span m='2526900'>0.</span> </p><p><span
  m='2530490'>OK.</span> <span m='2530700'>Delta</span> <span m='2531010'>of
  s</span> <span m='2531210'>comma</span> <span m='2531350'>a</span> <span
  m='2531660'>plus</span> <span m='2532040'>the</span> <span
  m='2532170'>edge.</span> <span m='2533140'>OK.</span> <span m='2533300'>There
  is</span> <span m='2533500'>some</span> <span m='2533650'>shortest</span>
  <span m='2534000'>path</span> <span m='2534390'>to a.</span> <span
  m='2534940'>To</span> <span m='2535100'>compute</span> <span m='2535710'>the
  shortest</span> <span m='2536010'>path to a</span> <span m='2536430'>we</span>
  <span m='2536520'>look</span> <span m='2536710'>at</span> <span
  m='2536770'>all</span> <span m='2536970'>the</span> <span
  m='2537040'>incoming</span> <span m='2537500'>edges</span> <span
  m='2537620'>to a.</span> <span m='2537740'>There's</span> <span
  m='2538140'>only</span> <span m='2538360'>one.</span> <span
  m='2539400'>So</span> <span m='2539570'>delta</span> <span
  m='2540260'>of</span> <span m='2540626'>s comma</span> <span
  m='2540992'>b.</span> <span m='2542320'>Now I</span> <span
  m='2542490'>want</span> <span m='2542660'>to</span> <span
  m='2542720'>compute</span> <span m='2542990'>the</span> <span
  m='2543060'>shortest</span> <span m='2543370'>paths</span> <span
  m='2543790'>from b.</span> <span m='2544620'>Well,</span> <span
  m='2545030'>there's</span> <span m='2545280'>two</span> <span
  m='2545480'>ways</span> <span m='2545710'>to</span> <span
  m='2545790'>get</span> <span m='2545960'>to</span> <span m='2546040'>b.</span>
  <span m='2546220'>One</span> <span m='2546450'>of</span> <span
  m='2546540'>them</span> <span m='2546820'>is</span> <span
  m='2547180'>delta</span> <span m='2548130'>of</span> <span
  m='2548510'>s</span> <span m='2548800'>comma</span> <span
  m='2549140'>b--</span> <span m='2550760'>sorry,</span> <span
  m='2551770'>s</span> <span m='2551960'>comma</span> <span
  m='2552170'>s.</span> <span m='2553730'>Came</span> <span
  m='2553960'>from</span> <span m='2554400'>s.</span> <span
  m='2555470'>The</span> <span m='2555670'>other</span> <span
  m='2555910'>way</span> <span m='2556390'>is</span> <span
  m='2556740'>delta</span> <span m='2557440'>of</span> <span
  m='2557920'>s</span> <span m='2558380'>comma</span> <span
  m='2558810'>v.</span> <span m='2560295'>Do</span> <span m='2560700'>you</span>
  <span m='2560810'>see</span> <span m='2560940'>a</span> <span
  m='2561000'>problem?</span> <span m='2562760'>Yeah.</span> <span
  m='2564540'>Delta</span> <span m='2564860'>of s</span> <span
  m='2565532'>comma</span> <span m='2565870'>v</span> <span m='2566230'>is what
  we were</span> <span m='2566320'>trying</span> <span m='2566570'>to</span>
  <span m='2566630'>figure</span> <span m='2566950'>out.</span> </p><p><span
  m='2570080'>Now</span> <span m='2570190'>you</span> <span
  m='2570310'>might</span> <span m='2570520'>say,</span> <span
  m='2570780'>oh,</span> <span m='2571000'>it's</span> <span
  m='2571030'>OK</span> <span m='2571410'>because</span> <span
  m='2571900'>we're</span> <span m='2571990'>going</span> <span
  m='2572120'>to</span> <span m='2572170'>memoize</span> <span
  m='2572710'>our</span> <span m='2572830'>answer to</span> <span
  m='2573130'>delta</span> <span m='2573470'>s</span> <span
  m='2573650'>comma</span> <span m='2573870'>v</span> <span
  m='2574060'>and</span> <span m='2574170'>then</span> <span
  m='2574300'>we</span> <span m='2574400'>can</span> <span
  m='2574540'>reuse</span> <span m='2574850'>it</span> <span
  m='2574920'>here.</span> <span m='2575100'>Except,</span> <span
  m='2575710'>we</span> <span m='2575830'>haven't</span> <span
  m='2576150'>finished</span> <span m='2576500'>computing</span> <span
  m='2577000'>delta</span> <span m='2577370'>of s</span> <span
  m='2577530'>comma</span> <span m='2577780'>v.</span> <span
  m='2577930'>We</span> <span m='2578080'>can</span> <span
  m='2578260'>only</span> <span m='2578550'>put</span> <span
  m='2578740'>it</span> <span m='2578850'>in</span> <span m='2578940'>the</span>
  <span m='2578980'>memo</span> <span m='2579270'>table</span> <span
  m='2580070'>once</span> <span m='2580250'>we're</span> <span
  m='2580360'>done.</span> <span m='2582340'>So</span> <span
  m='2583130'>when</span> <span m='2583340'>this</span> <span
  m='2583570'>call</span> <span m='2583830'>happens</span> <span
  m='2585170'>the</span> <span m='2585300'>memo</span> <span m='2585530'>table
  has</span> <span m='2585870'>not</span> <span m='2586060'>been</span> <span
  m='2586200'>set.</span> <span m='2586730'>And</span> <span
  m='2586880'>we're</span> <span m='2586980'>going</span> <span
  m='2587070'>to</span> <span m='2587120'>do</span> <span m='2587220'>the</span>
  <span m='2587320'>same</span> <span m='2587540'>thing</span> <span
  m='2587930'>over</span> <span m='2588550'>and</span> <span
  m='2588710'>over</span> <span m='2589330'>and</span> <span
  m='2589410'>over</span> <span m='2589670'>again.</span> <span
  m='2589840'>This</span> <span m='2589960'>is</span> <span
  m='2590080'>an</span> <span m='2590270'>infinite</span> <span
  m='2591120'>algorithm.</span> <span m='2592890'>Oops.</span> <span
  m='2594740'>Not</span> <span m='2594930'>so</span> <span
  m='2595070'>hot.</span> <span m='2599410'>So</span> <span
  m='2599870'>it's</span> <span m='2600000'>going</span> <span
  m='2600140'>to</span> <span m='2600220'>be</span> <span
  m='2600410'>infinite</span> <span m='2603900'>time</span> <span
  m='2606670'>on</span> <span m='2606960'>graphs</span> <span
  m='2609490'>with</span> <span m='2609670'>cycles.</span> </p><p><span
  m='2615520'>OK.</span> <span m='2615655'>For</span> <span
  m='2615790'>DAGs,</span> <span m='2617192'>for</span> <span
  m='2617590'>acyclic</span> <span m='2618100'>graphs,</span> <span
  m='2618980'>it</span> <span m='2619110'>actually</span> <span
  m='2619420'>runs</span> <span m='2619760'>in</span> <span m='2619930'>v</span>
  <span m='2619970'>plus</span> <span m='2620420'>e</span> <span
  m='2620600'>time.</span> <span m='2622400'>This</span> <span
  m='2622580'>is</span> <span m='2622690'>the</span> <span
  m='2622800'>good</span> <span m='2622970'>case.</span> <span
  m='2623670'>In</span> <span m='2623860'>this</span> <span
  m='2624040'>situation</span> <span m='2625130'>we</span> <span
  m='2625200'>can</span> <span m='2625340'>use</span> <span
  m='2625560'>this</span> <span m='2626200'>formula.</span> <span
  m='2626930'>The</span> <span m='2627020'>time</span> <span
  m='2627400'>is</span> <span m='2627540'>equal</span> <span
  m='2627810'>to</span> <span m='2627910'>the</span> <span m='2628000'>number
  of</span> <span m='2628400'>subproblems</span> <span m='2628940'>times</span>
  <span m='2629230'>the</span> <span m='2629350'>time</span> <span
  m='2629670'>per</span> <span m='2629900'>subproblem.</span> <span
  m='2632320'>So</span> <span m='2632580'>I</span> <span
  m='2632630'>guess</span> <span m='2632860'>we have to</span> <span
  m='2633070'>think</span> <span m='2633320'>about</span> <span
  m='2633540'>that</span> <span m='2633700'>a</span> <span
  m='2633750'>little</span> <span m='2633960'>bit.</span> <span
  m='2635040'>Where's</span> <span m='2635240'>my</span> <span
  m='2635370'>code?</span> <span m='2635720'>Here's</span> <span
  m='2635940'>my</span> <span m='2636060'>code.</span> <span
  m='2637190'>Number</span> <span m='2637590'>of</span> <span
  m='2637650'>subproblems</span> <span m='2638670'>is</span> <span
  m='2639500'>v.</span> <span m='2640480'>There's</span> <span
  m='2640660'>v</span> <span m='2640860'>different</span> <span
  m='2641150'>subproblems</span> <span m='2642230'>that</span> <span
  m='2642340'>I'm</span> <span m='2642450'>using</span> <span
  m='2642750'>here.</span> <span m='2643110'>I'm always</span> <span
  m='2643500'>reusing</span> <span m='2643890'>subproblems</span> <span
  m='2644430'>of</span> <span m='2644580'>the</span> <span
  m='2644660'>form</span> <span m='2645000'>delta</span> <span
  m='2645360'>s</span> <span m='2645600'>comma</span> <span
  m='2645860'>something.</span> <span m='2646400'>The</span> <span
  m='2646720'>something</span> <span m='2647140'>could</span> <span
  m='2647270'>be</span> <span m='2647400'>any</span> <span m='2648110'>of</span>
  <span m='2648250'>the v</span> <span m='2648320'>vertices.</span> </p><p><span
  m='2650310'>How</span> <span m='2650440'>much</span> <span
  m='2650660'>time</span> <span m='2651000'>do</span> <span m='2651130'>I</span>
  <span m='2651230'>spend</span> <span m='2651890'>per</span> <span
  m='2652150'>subproblem?</span> <span m='2654620'>That's</span> <span
  m='2654790'>a</span> <span m='2654840'>little</span> <span
  m='2655060'>tricky.</span> <span m='2655790'>It's the</span> <span
  m='2655930'>number</span> <span m='2656190'>of</span> <span
  m='2656290'>incoming</span> <span m='2656830'>edges</span> <span
  m='2657640'>to</span> <span m='2657800'>v.</span> <span m='2658990'>So</span>
  <span m='2661300'>time</span> <span m='2663410'>for</span> <span
  m='2664040'>a</span> <span m='2664120'>sub</span> <span
  m='2664410'>problem</span> <span m='2667450'>delta</span> <span
  m='2667680'>of</span> <span m='2667870'>sv</span> <span m='2670710'>is</span>
  <span m='2671200'>the</span> <span m='2671590'>indegree</span> <span
  m='2674300'>of v.</span> <span m='2674600'>The</span> <span
  m='2674720'>number</span> <span m='2674970'>of</span> <span
  m='2675030'>incoming</span> <span m='2675440'>edges</span> <span
  m='2675730'>to</span> <span m='2675860'>v.</span> <span m='2676850'>So</span>
  <span m='2677550'>this</span> <span m='2677700'>depends</span> <span
  m='2678060'>on v.</span> <span m='2678200'>So</span> <span
  m='2678670'>I</span> <span m='2678770'>can't</span> <span
  m='2679050'>just</span> <span m='2679230'>take</span> <span
  m='2679380'>a</span> <span m='2679440'>straightforward</span> <span
  m='2680010'>product</span> <span m='2680440'>here.</span> <span
  m='2681050'>What</span> <span m='2681190'>this</span> <span
  m='2681340'>is</span> <span m='2681410'>really</span> <span
  m='2681680'>saying</span> <span m='2681950'>is,</span> <span
  m='2682040'>you</span> <span m='2682120'>should</span> <span
  m='2682320'>sum</span> <span m='2682670'>up</span> <span m='2682860'>over
  all</span> <span m='2683310'>sub</span> <span m='2683530'>problems</span>
  <span m='2684130'>of</span> <span m='2684290'>the</span> <span
  m='2684410'>time</span> <span m='2684670'>per</span> <span
  m='2684840'>sub</span> <span m='2685030'>problem.</span> </p><p><span
  m='2686600'>So</span> <span m='2687020'>total</span> <span
  m='2687300'>time</span> <span m='2691740'>is</span> <span
  m='2692040'>the</span> <span m='2692110'>sum</span> <span
  m='2692720'>over</span> <span m='2693010'>all</span> <span
  m='2693250'>v</span> <span m='2693490'>and</span> <span m='2693640'>v,</span>
  <span m='2695100'>the</span> <span m='2695190'>indegree</span> <span
  m='2696926'>of</span> <span m='2697400'>v.</span> <span m='2698360'>And</span>
  <span m='2698510'>we</span> <span m='2698630'>know</span> <span
  m='2698960'>this</span> <span m='2699230'>is</span> <span
  m='2700710'>number</span> <span m='2700940'>of</span> <span
  m='2701010'>edges.</span> <span m='2702920'>It's</span> <span
  m='2703200'>really--</span> <span m='2703730'>so</span> <span
  m='2703880'>indegree</span> <span m='2704260'>plus</span> <span
  m='2704480'>1,</span> <span m='2705485'>indegree</span> <span
  m='2705810'>plus</span> <span m='2706090'>1.</span> <span
  m='2706650'>So</span> <span m='2706790'>this</span> <span
  m='2707050'>is</span> <span m='2707790'>v</span> <span m='2708060'>plus</span>
  <span m='2708360'>v.</span> <span m='2710860'>OK.</span> <span
  m='2711000'>Handshaking</span> <span m='2712436'>again.</span> </p><p><span
  m='2714060'>OK.</span> <span m='2714680'>Now</span> <span
  m='2714860'>we</span> <span m='2715010'>already</span> <span m='2715270'>knew
  an</span> <span m='2715590'>algorithm</span> <span m='2716000'>for</span>
  <span m='2716140'>shortest</span> <span m='2716320'>paths</span> <span
  m='2716690'>and</span> <span m='2717015'>DAGs.</span> <span
  m='2717340'>And</span> <span m='2717530'>it</span> <span
  m='2717600'>ran</span> <span m='2717800'>a</span> <span m='2717850'>v
  plus</span> <span m='2718220'>e</span> <span m='2718340'>time.</span> <span
  m='2718650'>So</span> <span m='2719300'>it's</span> <span
  m='2719430'>another</span> <span m='2719760'>way</span> <span
  m='2719950'>to</span> <span m='2720110'>do</span> <span m='2720240'>the</span>
  <span m='2720330'>same</span> <span m='2720600'>thing.</span> <span
  m='2721370'>If</span> <span m='2721520'>you</span> <span
  m='2721640'>think</span> <span m='2721860'>about</span> <span
  m='2722180'>it</span> <span m='2722460'>long</span> <span
  m='2722670'>enough,</span> <span m='2723930'>this</span> <span
  m='2724140'>algorithm</span> <span m='2725070'>memoized,</span> <span
  m='2726540'>is</span> <span m='2726830'>essentially</span> <span
  m='2727340'>doing</span> <span m='2727590'>a</span> <span
  m='2727650'>depth</span> <span m='2727880'>first</span> <span
  m='2728080'>search</span> <span m='2729440'>to</span> <span
  m='2729590'>do</span> <span m='2729700'>a topological</span> <span
  m='2730360'>sort</span> <span m='2730770'>to</span> <span
  m='2731140'>run</span> <span m='2731380'>one</span> <span
  m='2731800'>round</span> <span m='2732170'>of</span> <span
  m='2732240'>Bellman-Ford.</span> <span m='2733440'>So</span> <span
  m='2733780'>we</span> <span m='2734050'>had</span> <span
  m='2734300'>topological</span> <span m='2734830'>sort</span> <span
  m='2735250'>plus</span> <span m='2735410'>one round</span> <span
  m='2735610'>of</span> <span m='2735650'>Bellman-Ford.</span> <span
  m='2736120'>This</span> <span m='2736290'>is</span> <span
  m='2736410'>kind</span> <span m='2736570'>of</span> <span m='2736660'>it
  all</span> <span m='2737060'>rolled</span> <span m='2737310'>into</span> <span
  m='2737530'>one.</span> <span m='2738160'>This</span> <span
  m='2738330'>should</span> <span m='2738560'>look</span> <span
  m='2738780'>kind</span> <span m='2739040'>of</span> <span
  m='2739100'>like</span> <span m='2739290'>the</span> <span
  m='2739370'>Bellman</span> <span m='2739710'>Ford</span> <span
  m='2739970'>relaxation</span> <span m='2740630'>step,</span> <span
  m='2740970'>or</span> <span m='2741160'>shortest</span> <span
  m='2741540'>paths</span> <span m='2741730'>relaxation</span> <span
  m='2742270'>step.</span> <span m='2742960'>It</span> <span
  m='2743100'>is.</span> <span m='2744150'>This</span> <span
  m='2744330'>min</span> <span m='2744700'>is</span> <span
  m='2744890'>really</span> <span m='2745130'>doing</span> <span
  m='2745380'>the</span> <span m='2745440'>same</span> <span
  m='2745720'>thing.</span> <span m='2746970'>So</span> <span
  m='2746990'>it's</span> <span m='2747090'>really</span> <span
  m='2747290'>the</span> <span m='2747410'>same</span> <span
  m='2747700'>algorithm.</span> <span m='2748140'>But</span> <span
  m='2748410'>we</span> <span m='2748550'>come</span> <span
  m='2748810'>at</span> <span m='2748910'>it</span> <span
  m='2749050'>from</span> <span m='2749210'>a</span> <span
  m='2749260'>different</span> <span m='2749560'>perspective.</span>
  </p><p><span m='2752400'>OK.</span> <span m='2753470'>But</span> <span
  m='2753870'>I</span> <span m='2754020'>claim</span> <span m='2754470'>I</span>
  <span m='2754600'>can</span> <span m='2754770'>use</span> <span
  m='2755020'>this</span> <span m='2755120'>same</span> <span
  m='2755420'>approach</span> <span m='2755870'>to</span> <span
  m='2755980'>solve</span> <span m='2756260'>shortest</span> <span
  m='2756610'>paths</span> <span m='2757410'>in</span> <span
  m='2757580'>general</span> <span m='2757940'>graphs,</span> <span
  m='2758300'>even</span> <span m='2758570'>when</span> <span
  m='2758730'>they</span> <span m='2758830'>have</span> <span
  m='2759100'>cycles.</span> <span m='2761540'>How</span> <span
  m='2761980'>am</span> <span m='2762080'>I</span> <span
  m='2762150'>going</span> <span m='2762310'>to</span> <span
  m='2762390'>do</span> <span m='2762530'>that?</span> <span
  m='2764170'>DAGs</span> <span m='2764550'>seem</span> <span
  m='2764890'>fine--</span> <span m='2767050'>oh,</span> <span
  m='2767440'>what</span> <span m='2767610'>was</span> <span
  m='2767750'>the</span> <span m='2767850'>lesson</span> <span
  m='2768200'>learned</span> <span m='2768470'>here?</span> <span
  m='2768980'>Lesson</span> <span m='2769370'>learned</span> <span
  m='2770190'>is</span> <span m='2770500'>that</span> <span
  m='2771080'>subproblem</span> <span m='2775480'>dependencies</span> <span
  m='2778400'>should</span> <span m='2778620'>be</span> <span
  m='2778750'>acyclic.</span> <span m='2779450'>Otherwise,</span> <span
  m='2779920'>we</span> <span m='2780020'>get</span> <span m='2780160'>an</span>
  <span m='2780270'>infinite</span> <span m='2780780'>algorithm.</span> <span
  m='2782240'>For</span> <span m='2782340'>memoization</span> <span
  m='2783060'>to</span> <span m='2783180'>work</span> <span
  m='2783700'>this</span> <span m='2783900'>is</span> <span
  m='2784040'>what</span> <span m='2784220'>you</span> <span
  m='2784320'>need.</span> <span m='2784990'>It's</span> <span
  m='2785440'>all</span> <span m='2785700'>you</span> <span
  m='2785820'>need.</span> </p><p><span m='2789940'>OK.</span> <span
  m='2790090'>We've</span> <span m='2790410'>almost</span> <span
  m='2790870'>seen</span> <span m='2791230'>this</span> <span
  m='2791440'>already.</span> <span m='2792460'>Because</span> <span
  m='2792970'>I</span> <span m='2793110'>said</span> <span
  m='2793640'>that,</span> <span m='2793990'>to</span> <span
  m='2794090'>do</span> <span m='2794200'>a</span> <span
  m='2794220'>bottom</span> <span m='2794540'>up</span> <span
  m='2794700'>algorithm</span> <span m='2795090'>you</span> <span
  m='2795210'>do</span> <span m='2795320'>a</span> <span
  m='2795440'>topological</span> <span m='2796180'>sort</span> <span
  m='2796420'>of</span> <span m='2796500'>this</span> <span
  m='2796590'>subproblem</span> <span m='2797340'>dependency</span> <span
  m='2798020'>DAG.</span> <span m='2799140'>I already</span> <span
  m='2799410'>said</span> <span m='2799750'>it</span> <span
  m='2799840'>should</span> <span m='2800090'>be</span> <span
  m='2800240'>acyclic.</span> <span m='2800980'>OK.</span> <span
  m='2801140'>We</span> <span m='2801230'>just</span> <span
  m='2801930'>forgot.</span> <span m='2802490'>I</span> <span
  m='2802600'>didn't</span> <span m='2802800'>tell</span> <span
  m='2802950'>you</span> <span m='2803050'>yet.</span> <span
  m='2803890'>So</span> <span m='2804080'>for</span> <span
  m='2804190'>that</span> <span m='2804370'>to</span> <span
  m='2804470'>work</span> <span m='2804670'>it</span> <span
  m='2804780'>better</span> <span m='2805000'>be</span> <span
  m='2805120'>acyclic.</span> <span m='2805580'>For</span> <span
  m='2805720'>DP</span> <span m='2806100'>to</span> <span
  m='2806200'>work,</span> <span m='2806940'>for</span> <span
  m='2807180'>memoization</span> <span m='2807770'>to</span> <span
  m='2807920'>work,</span> <span m='2807965'>it</span> <span
  m='2808010'>better</span> <span m='2808240'>be</span> <span
  m='2808360'>acyclic.</span> <span m='2808870'>If</span> <span
  m='2809530'>you're</span> <span m='2809660'>acyclic</span> <span
  m='2810850'>then</span> <span m='2812560'>this</span> <span
  m='2813040'>is</span> <span m='2813200'>the</span> <span
  m='2813290'>running</span> <span m='2813520'>time.</span> <span
  m='2815530'>So</span> <span m='2815800'>that's</span> <span
  m='2816130'>all</span> <span m='2817250'>general.</span> </p><p><span
  m='2819940'>OK.</span> <span m='2820090'>So somehow</span> <span
  m='2820590'>I</span> <span m='2820670'>need</span> <span m='2820840'>to</span>
  <span m='2820920'>take</span> <span m='2821190'>a</span> <span
  m='2821630'>cyclic</span> <span m='2821700'>graph</span> <span
  m='2822060'>and</span> <span m='2822180'>make</span> <span
  m='2822390'>it</span> <span m='2822550'>acyclic.</span> <span
  m='2828480'>We've</span> <span m='2828600'>actually</span> <span
  m='2828860'>done</span> <span m='2829040'>this</span> <span
  m='2829220'>already</span> <span m='2829550'>in</span> <span
  m='2829640'>recitation.</span> <span m='2838740'>So</span> <span
  m='2839150'>if</span> <span m='2839330'>I</span> <span m='2839470'>have</span>
  <span m='2839680'>a</span> <span m='2839750'>graph--</span> <span
  m='2842250'>let's</span> <span m='2842610'>take</span> <span
  m='2842830'>a</span> <span m='2843030'>very</span> <span
  m='2843280'>simple</span> <span m='2844240'>cyclic</span> <span
  m='2844760'>graph.</span> <span m='2846230'>OK.</span> <span
  m='2846350'>One</span> <span m='2846550'>thing</span> <span
  m='2846750'>I</span> <span m='2846810'>could</span> <span
  m='2846940'>do</span> <span m='2847050'>is</span> <span
  m='2847190'>explode</span> <span m='2847675'>it</span> <span
  m='2848520'>into</span> <span m='2848820'>multiple</span> <span
  m='2849270'>layers.</span> <span m='2849570'>We did</span> <span
  m='2849740'>this</span> <span m='2849960'>on</span> <span
  m='2850050'>quiz</span> <span m='2850370'>two</span> <span
  m='2850650'>in</span> <span m='2850930'>various</span> <span
  m='2851300'>forms.</span> <span m='2852400'>It's</span> <span
  m='2852640'>like</span> <span m='2853400'>the</span> <span
  m='2853540'>only</span> <span m='2853790'>cool</span> <span
  m='2853990'>thing</span> <span m='2854200'>you</span> <span
  m='2854330'>can</span> <span m='2854480'>do</span> <span
  m='2854630'>with</span> <span m='2854700'>shortest</span> <span
  m='2854880'>paths,</span> <span m='2855020'>I</span> <span
  m='2855400'>feel</span> <span m='2855760'>like.</span> <span
  m='2857882'>If</span> <span m='2858360'>you</span> <span
  m='2858440'>want</span> <span m='2858570'>to</span> <span
  m='2858630'>make</span> <span m='2858890'>a</span> <span
  m='2858950'>shortest</span> <span m='2859240'>path problem</span> <span
  m='2859840'>harder,</span> <span m='2860200'>require</span> <span
  m='2860640'>that</span> <span m='2860780'>you</span> <span
  m='2861020'>reduce</span> <span m='2861520'>your</span> <span
  m='2861650'>graph</span> <span m='2862020'>to</span> <span
  m='2863260'>k</span> <span m='2863490'>copies</span> <span
  m='2863930'>of</span> <span m='2864010'>the</span> <span
  m='2864100'>graph.</span> </p><p><span m='2865960'>I'm</span> <span
  m='2866030'>going</span> <span m='2866110'>to</span> <span
  m='2866190'>do</span> <span m='2866300'>it</span> <span m='2866370'>in</span>
  <span m='2866480'>a</span> <span m='2866550'>particular</span> <span
  m='2867010'>way</span> <span m='2867180'>here--</span> <span
  m='2867460'>which</span> <span m='2867580'>I</span> <span
  m='2867680'>think</span> <span m='2867890'>you've</span> <span
  m='2868000'>seen</span> <span m='2868330'>in</span> <span
  m='2868600'>recitation--</span> <span m='2870390'>which</span> <span
  m='2870580'>is</span> <span m='2870690'>to</span> <span
  m='2870810'>think</span> <span m='2871040'>of</span> <span
  m='2871130'>this</span> <span m='2871340'>axis</span> <span
  m='2871750'>as</span> <span m='2872030'>time,</span> <span
  m='2873370'>or</span> <span m='2873480'>however</span> <span
  m='2873810'>you</span> <span m='2873940'>want,</span> <span
  m='2874360'>and</span> <span m='2874510'>make</span> <span
  m='2874710'>all</span> <span m='2874960'>of</span> <span
  m='2875040'>the</span> <span m='2875170'>edges</span> <span
  m='2875470'>go</span> <span m='2875790'>from</span> <span
  m='2876600'>each</span> <span m='2876830'>layer</span> <span
  m='2877090'>to</span> <span m='2877240'>the</span> <span
  m='2877370'>next</span> <span m='2877660'>layer.</span> <span
  m='2881080'>This</span> <span m='2881190'>should</span> <span
  m='2881350'>be</span> <span m='2881460'>a</span> <span
  m='2881520'>familiar</span> <span m='2882510'>technique.</span> <span
  m='2883470'>So</span> <span m='2883880'>the idea</span> <span
  m='2884240'>is,</span> <span m='2884390'>every</span> <span
  m='2884670'>time</span> <span m='2884900'>I</span> <span
  m='2884970'>follow</span> <span m='2885340'>an</span> <span
  m='2885420'>edge</span> <span m='2885920'>I</span> <span m='2885940'>go</span>
  <span m='2886140'>down</span> <span m='2886400'>to</span> <span
  m='2886490'>the</span> <span m='2886590'>next</span> <span
  m='2886840'>layer.</span> <span m='2887440'>This</span> <span
  m='2887640'>makes</span> <span m='2887930'>any</span> <span
  m='2888150'>graph</span> <span m='2888480'>acyclic.</span> <span
  m='2889740'>Done.</span> <span m='2891510'>What</span> <span
  m='2891820'>in</span> <span m='2891950'>the</span> <span
  m='2892050'>world</span> <span m='2892850'>does</span> <span
  m='2893070'>this</span> <span m='2893260'>mean?</span> <span
  m='2893640'>What</span> <span m='2893780'>is</span> <span
  m='2893910'>it</span> <span m='2894060'>doing?</span> <span m='2900070'>What
  does</span> <span m='2900390'>it mean?</span> <span m='2901960'>Double</span>
  <span m='2902240'>rainbow.</span> <span m='2903110'>All</span> <span
  m='2903210'>right.</span> </p><p><span m='2903600'>AUDIENCE:</span> <span
  m='2903865'>[LAUGHTER]</span> </p><p><span m='2904130'>PROFESSOR:</span> <span
  m='2904576'>So--</span> <span m='2906620'>I</span> <span m='2906650'>don't
  know how I've</span> <span m='2906930'>gone</span> <span m='2907110'>so</span>
  <span m='2907300'>long</span> <span m='2907510'>in the</span> <span
  m='2907650'>semester</span> <span m='2908060'>without</span> <span
  m='2908240'>referring</span> <span m='2908610'>to</span> <span
  m='2908670'>double</span> <span m='2908930'>rainbow.</span> <span
  m='2909200'>It used</span> <span m='2909400'>to</span> <span
  m='2909470'>be</span> <span m='2909590'>my</span> <span
  m='2909740'>favorite.</span> <span m='2910870'>All right.</span> </p><p><span
  m='2911180'>So</span> <span m='2913560'>here's</span> <span
  m='2913820'>what</span> <span m='2913950'>it</span> <span
  m='2914020'>means.</span> <span m='2914570'>Delta</span> <span
  m='2914980'>sub</span> <span m='2915230'>k</span> <span m='2916070'>of</span>
  <span m='2916490'>sv.</span> <span m='2917140'>I'm</span> <span
  m='2917230'>going</span> <span m='2917320'>to</span> <span
  m='2917400'>define</span> <span m='2917840'>this</span> <span
  m='2918070'>first--</span> <span m='2918390'>this</span> <span
  m='2918560'>is</span> <span m='2918670'>a</span> <span m='2918740'>new</span>
  <span m='2918950'>kind</span> <span m='2919190'>of</span> <span
  m='2919260'>subproblem--</span> <span m='2921460'>which</span> <span
  m='2921640'>is,</span> <span m='2922000'>what</span> <span
  m='2922300'>is</span> <span m='2922500'>the</span> <span
  m='2922650'>shortest--</span> <span m='2924300'>what is</span> <span
  m='2924510'>the</span> <span m='2924620'>weight</span> <span
  m='2925800'>of</span> <span m='2925880'>the</span> <span
  m='2925970'>shortest</span> <span m='2929220'>s</span> <span
  m='2929460'>to</span> <span m='2929570'>v path</span> <span
  m='2932940'>that</span> <span m='2933080'>uses,</span> <span
  m='2933560'>at</span> <span m='2933710'>most,</span> <span
  m='2933990'>k</span> <span m='2934260'>edges.</span> </p><p><span
  m='2938980'>So</span> <span m='2939130'>I</span> <span m='2939230'>want</span>
  <span m='2939540'>it to</span> <span m='2939610'>be</span> <span
  m='2939690'>shortest</span> <span m='2940070'>in</span> <span
  m='2940140'>terms</span> <span m='2940340'>of</span> <span
  m='2940430'>total</span> <span m='2940720'>weight,</span> <span
  m='2940940'>but</span> <span m='2941070'>I</span> <span
  m='2941130'>also</span> <span m='2941360'>want</span> <span m='2941500'>it
  to</span> <span m='2941680'>use</span> <span m='2941840'>few</span> <span
  m='2942070'>edges</span> <span m='2942380'>total.</span> <span
  m='2943090'>So</span> <span m='2943220'>this</span> <span
  m='2943450'>is</span> <span m='2943570'>going</span> <span
  m='2943700'>to</span> <span m='2943770'>be</span> <span m='2943910'>0.</span>
  <span m='2945200'>In</span> <span m='2945370'>some sense,</span> <span
  m='2945640'>if</span> <span m='2945760'>you</span> <span
  m='2945910'>look</span> <span m='2946160'>at--</span> <span
  m='2947020'>so</span> <span m='2947180'>here's</span> <span
  m='2947940'>s</span> <span m='2948580'>and</span> <span m='2950660'>I'm</span>
  <span m='2951010'>always</span> <span m='2951110'>going to</span> <span
  m='2951160'>make</span> <span m='2951360'>s</span> <span
  m='2951620'>this.</span> <span m='2951890'>And</span> <span
  m='2951990'>then</span> <span m='2952110'>this</span> <span
  m='2952270'>is</span> <span m='2952330'>going</span> <span
  m='2952450'>to</span> <span m='2952500'>be</span> <span m='2952660'>v</span>
  <span m='2953026'>in</span> <span m='2953392'>the</span> <span
  m='2953760'>zero</span> <span m='2954150'>situation.</span> <span
  m='2955370'>This is</span> <span m='2955520'>going</span> <span
  m='2955650'>to</span> <span m='2955710'>be</span> <span m='2955870'>v</span>
  <span m='2956185'>in</span> <span m='2956500'>the</span> <span
  m='2956590'>one</span> <span m='2956800'>situation,</span> <span
  m='2957460'>v--</span> <span m='2958150'>so</span> <span m='2958510'>if</span>
  <span m='2958700'>I</span> <span m='2958760'>look</span> <span
  m='2958980'>at</span> <span m='2959060'>this</span> <span
  m='2959455'>v,</span> <span m='2959850'>I</span> <span m='2959960'>look</span>
  <span m='2960190'>at</span> <span m='2960260'>the</span> <span
  m='2960340'>shortest</span> <span m='2960600'>path from</span> <span
  m='2960920'>s</span> <span m='2961060'>to</span> <span m='2961150'>v,</span>
  <span m='2961300'>that</span> <span m='2961620'>is</span> <span
  m='2961890'>delta</span> <span m='2962190'>sub</span> <span
  m='2962370'>0</span> <span m='2962720'>of</span> <span m='2962800'>sv.</span>
  <span m='2964040'>So</span> <span m='2964190'>maybe</span> <span
  m='2964380'>I'll</span> <span m='2964480'>call this</span> <span
  m='2964780'>v</span> <span m='2964910'>sub</span> <span m='2965110'>0,</span>
  <span m='2965890'>v sub</span> <span m='2965990'>1,</span> <span
  m='2966685'>v</span> <span m='2967040'>sub</span> <span m='2967150'>2.</span>
  </p><p><span m='2968820'>OK.</span> <span m='2968960'>Shortest</span> <span
  m='2969220'>path</span> <span m='2969560'>from here</span> <span
  m='2969720'>to</span> <span m='2969770'>here</span> <span
  m='2970040'>is,</span> <span m='2970585'>there's</span> <span m='2970990'>no
  way</span> <span m='2971130'>to</span> <span m='2971200'>get</span> <span
  m='2971400'>there</span> <span m='2971490'>on</span> <span
  m='2971670'>0</span> <span m='2971760'>edges.</span> <span
  m='2972390'>Shortest path from</span> <span m='2972570'>here to</span> <span
  m='2972910'>here,</span> <span m='2973490'>that</span> <span
  m='2973970'>is</span> <span m='2974230'>the</span> <span
  m='2974490'>best</span> <span m='2974730'>way</span> <span
  m='2974840'>to</span> <span m='2974910'>get</span> <span
  m='2975110'>there</span> <span m='2975350'>with,</span> <span
  m='2975560'>at</span> <span m='2975720'>most,</span> <span
  m='2976890'>one</span> <span m='2977130'>edge.</span> <span
  m='2978280'>Shortest</span> <span m='2978580'>path</span> <span
  m='2978790'>from</span> <span m='2978910'>here</span> <span
  m='2979080'>to</span> <span m='2979130'>here--</span> <span
  m='2979540'>well,</span> <span m='2979720'>if</span> <span
  m='2979850'>I</span> <span m='2979940'>add</span> <span
  m='2980620'>some</span> <span m='2980800'>vertical</span> <span
  m='2981300'>edges</span> <span m='2981420'>too,</span> <span m='2981770'>I
  guess,</span> <span m='2982580'>cheating</span> <span m='2982780'>a</span>
  <span m='2982830'>little</span> <span m='2983010'>bit.</span> <span
  m='2983530'>Then</span> <span m='2983680'>this</span> <span
  m='2983830'>is</span> <span m='2983920'>the</span> <span
  m='2984010'>best</span> <span m='2984270'>way</span> <span
  m='2984350'>to</span> <span m='2984420'>get</span> <span
  m='2984660'>from</span> <span m='2984830'>s</span> <span m='2985060'>to</span>
  <span m='2985160'>v</span> <span m='2985440'>using</span> <span
  m='2985730'>at</span> <span m='2985820'>most</span> <span
  m='2986060'>two</span> <span m='2986230'>edges.</span> <span
  m='2986960'>And</span> <span m='2987140'>then</span> <span
  m='2987270'>you</span> <span m='2987380'>get</span> <span m='2987530'>a</span>
  <span m='2987570'>recurrence</span> <span m='2990760'>which</span> <span
  m='2991000'>is</span> <span m='2991130'>the</span> <span
  m='2991220'>min</span> <span m='2992480'>over</span> <span
  m='2992850'>all</span> <span m='2993220'>last</span> <span
  m='2993610'>edges.</span> <span m='2994750'>So I'm</span> <span
  m='2994810'>just</span> <span m='2995000'>copying</span> <span
  m='2995410'>that</span> <span m='2995570'>recurrence,</span> <span
  m='2996570'>but</span> <span m='2996750'>realizing</span> <span
  m='2997860'>that</span> <span m='2998490'>the</span> <span m='2999940'>s to
  u</span> <span m='3000480'>part</span> <span m='3000820'>uses</span> <span
  m='3001140'>one</span> <span m='3001440'>fewer</span> <span
  m='3001780'>edge.</span> <span m='3003040'>And</span> <span
  m='3003300'>then</span> <span m='3003390'>I use</span> <span m='3003580'>the
  edge</span> <span m='3003850'>uv.</span> </p><p><span m='3007217'>OK.</span>
  <span m='3007698'>That's</span> <span m='3008180'>our</span> <span
  m='3008280'>new</span> <span m='3008440'>recurrence.</span> <span
  m='3009330'>By</span> <span m='3009470'>adding</span> <span
  m='3009870'>this</span> <span m='3010050'>k</span> <span
  m='3010280'>parameter</span> <span m='3010920'>I've</span> <span
  m='3011100'>made</span> <span m='3011380'>this</span> <span
  m='3011650'>recurrence</span> <span m='3012410'>on</span> <span
  m='3012600'>subproblems</span> <span m='3013230'>acyclic.</span> <span
  m='3014180'>Unfortunately,</span> <span m='3014730'>I've</span> <span
  m='3014880'>increased</span> <span m='3015330'>the</span> <span
  m='3015410'>number</span> <span m='3015660'>of</span> <span
  m='3015720'>subproblems.</span> <span m='3017050'>The</span> <span
  m='3017150'>number</span> <span m='3017290'>of</span> <span
  m='3017350'>subproblems</span> <span m='3020720'>now</span> <span
  m='3024300'>is</span> <span m='3025750'>v</span> <span
  m='3025870'>squared.</span> <span m='3028250'>Technically,</span> <span
  m='3029370'>v</span> <span m='3029560'>times</span> <span m='3029860'>v</span>
  <span m='3029980'>minus</span> <span m='3030290'>1.</span> <span
  m='3030840'>Because</span> <span m='3031040'>I</span> <span
  m='3031130'>really--</span> <span m='3032140'>actually,</span> <span
  m='3032410'>v squared.</span> <span m='3032880'>Sorry.</span> <span
  m='3034130'>I</span> <span m='3034230'>start</span> <span
  m='3034510'>at</span> <span m='3034600'>0.</span> <span m='3036860'>And</span>
  <span m='3037050'>what</span> <span m='3037190'>I</span> <span
  m='3037260'>care</span> <span m='3037640'>about,</span> <span
  m='3038820'>my</span> <span m='3039140'>goal,</span> <span
  m='3042210'>is</span> <span m='3042790'>delta</span> <span
  m='3043160'>sub</span> <span m='3043500'>v</span> <span
  m='3043670'>minus</span> <span m='3044110'>1</span> <span
  m='3045390'>of</span> <span m='3045550'>sv.</span> <span
  m='3046210'>Because</span> <span m='3046550'>by</span> <span
  m='3046730'>Bellman-Ford</span> <span m='3047320'>analysis</span> <span
  m='3047820'>I</span> <span m='3047900'>know</span> <span
  m='3048190'>that</span> <span m='3048370'>I</span> <span
  m='3048480'>only</span> <span m='3048740'>care</span> <span
  m='3049040'>about</span> <span m='3049540'>simple</span> <span
  m='3049840'>paths,</span> <span m='3050780'>paths</span> <span
  m='3051010'>of</span> <span m='3051100'>length</span> <span m='3051270'>at
  most</span> <span m='3051570'>v</span> <span m='3051660'>minus</span> <span
  m='3051900'>1.</span> <span m='3052040'>I'm</span> <span
  m='3052130'>assuming</span> <span m='3052480'>here</span> <span
  m='3052610'>no</span> <span m='3052740'>negative</span> <span
  m='3053090'>weight</span> <span m='3053300'>cycles.</span> <span m='3053790'>I
  should've</span> <span m='3054030'>said</span> <span m='3054220'>that</span>
  <span m='3054370'>earlier.</span> </p><p><span m='3055450'>If</span> <span
  m='3055500'>you</span> <span m='3055590'>assume</span> <span
  m='3055880'>that,</span> <span m='3056570'>then</span> <span
  m='3056710'>this</span> <span m='3056910'>is</span> <span
  m='3057010'>what</span> <span m='3057160'>I</span> <span
  m='3057230'>care</span> <span m='3057490'>about.</span> <span
  m='3058620'>So</span> <span m='3058810'>k</span> <span
  m='3059140'>ranges</span> <span m='3059480'>from</span> <span
  m='3059620'>0</span> <span m='3059910'>to</span> <span m='3059980'>v</span>
  <span m='3060100'>minus 1.</span> <span m='3060380'>So</span> <span
  m='3060670'>there are</span> <span m='3060860'>v</span> <span
  m='3061070'>choices</span> <span m='3061490'>for</span> <span
  m='3061620'>k.</span> <span m='3062160'>There are</span> <span
  m='3062340'>v</span> <span m='3062510'>choices</span> <span
  m='3062910'>for</span> <span m='3063050'>v.</span> <span m='3063736'>So
  the</span> <span m='3064080'>number</span> <span m='3064470'>of
  subproblems</span> <span m='3064860'>is</span> <span m='3064980'>v</span>
  <span m='3065130'>squared.</span> <span m='3065510'>How</span> <span
  m='3065610'>much</span> <span m='3065710'>time</span> <span m='3065950'>do
  I</span> <span m='3066070'>spend</span> <span m='3066370'>per</span> <span
  m='3066520'>subproblem?</span> <span m='3067230'>Well, the</span> <span
  m='3067300'>same</span> <span m='3067560'>as</span> <span
  m='3067660'>before.</span> <span m='3068010'>The indegree--</span> <span
  m='3069530'>where did I write it?</span> <span m='3069890'>Up here--</span>
  <span m='3071370'>the</span> <span m='3071520'>indegree</span> <span
  m='3072000'>of</span> <span m='3072080'>that</span> <span
  m='3072310'>problem.</span> <span m='3073030'>So</span> <span
  m='3073100'>what</span> <span m='3073220'>I'm</span> <span
  m='3073310'>really</span> <span m='3073550'>doing</span> <span
  m='3073810'>is</span> <span m='3073910'>summing</span> <span
  m='3074470'>over</span> <span m='3074750'>all</span> <span
  m='3075210'>v</span> <span m='3076512'>of the</span> <span
  m='3076860'>indegree.</span> <span m='3077400'>And</span> <span
  m='3077480'>then</span> <span m='3077590'>I</span> <span
  m='3077630'>multiply</span> <span m='3078140'>it by</span> <span
  m='3078360'>v.</span> <span m='3078880'>So</span> <span m='3079070'>the</span>
  <span m='3079230'>running</span> <span m='3079530'>time,</span> <span
  m='3079850'>total</span> <span m='3080150'>running</span> <span
  m='3080410'>time</span> <span m='3083120'>is</span> <span
  m='3083480'>ve.</span> <span m='3085240'>Sound</span> <span
  m='3085560'>familiar?</span> <span m='3086740'>This</span> <span
  m='3087070'>is</span> <span m='3087330'>Bellman-Ford's</span> <span
  m='3088130'>algorithm</span> <span m='3088770'>again.</span> <span
  m='3089660'>And</span> <span m='3089810'>this</span> <span
  m='3089940'>is</span> <span m='3090060'>actually</span> <span
  m='3090380'>where</span> <span m='3091490'>Bellman-Ford</span> <span
  m='3091980'>algorithm</span> <span m='3092410'>came</span> <span
  m='3092650'>from</span> <span m='3093275'>is</span> <span
  m='3093550'>this</span> <span m='3094010'>view</span> <span
  m='3094380'>on</span> <span m='3094540'>dynamic</span> <span
  m='3094900'>programming.</span> <span m='3095810'>So</span> <span
  m='3095990'>we're</span> <span m='3096080'>seeing</span> <span
  m='3096330'>yet</span> <span m='3096540'>another</span> <span
  m='3096860'>way</span> <span m='3097150'>to</span> <span m='3097320'>do</span>
  <span m='3098050'>Bellman-Ford.</span> <span m='3098640'>It</span> <span
  m='3098710'>may</span> <span m='3098850'>seem</span> <span
  m='3099060'>familiar.</span> <span m='3100010'>But</span> <span
  m='3100180'>in</span> <span m='3100270'>the</span> <span
  m='3100340'>next</span> <span m='3100540'>three</span> <span
  m='3100690'>lectures</span> <span m='3101070'>we're</span> <span
  m='3101160'>going</span> <span m='3101270'>to</span> <span
  m='3101340'>see</span> <span m='3101470'>a</span> <span
  m='3101490'>whole</span> <span m='3101780'>bunch</span> <span
  m='3101990'>of</span> <span m='3102070'>problems</span> <span
  m='3102470'>that</span> <span m='3102580'>can</span> <span
  m='3102790'>succumb</span> <span m='3103230'>to</span> <span
  m='3103330'>the</span> <span m='3103450'>same</span> <span
  m='3104090'>approach.</span> <span m='3104650'>And</span> <span
  m='3105010'>that's</span> <span m='3105220'>super</span> <span
  m='3105490'>cool.</span> </p>
uid: 57d2b18993565b569a7fe3bb3033de75
type: courses
layout: video
---
