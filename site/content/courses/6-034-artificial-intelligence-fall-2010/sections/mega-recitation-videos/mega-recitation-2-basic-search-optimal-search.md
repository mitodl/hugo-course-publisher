---
about_this_resource_text: >-
  <p><strong>Description:</strong> This mega-recitation covers Problem 2 from
  Quiz 1, Fall 2008.  We start with depth-first search and breadth-first search,
  using a goal tree in each case. We then discuss branch and bound and A*, and
  why they give different answers in this problem.</p>
  <p><strong>Instructor:</strong> Mark Seifter</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Tl_p5pgBsyM
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Video-YouTube-Stream
    type: Video
    uid: dc65d9783b79274c3b53e18778912bf0
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/mega-recitation-2-basic-search/id765641080?i=194482716
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Video-iTunes U-MP4
    type: Video
    uid: 3b88ad87e1887885f5cf2c1185bd8dcc
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_rec02_300k.mp4'
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1702ad0fe60e20fb4b5f5a746f13f612
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Tl_p5pgBsyM/default.jpg'
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ef26319b0e2615aae0c0b8d1b8b61def
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Tl_p5pgBsyM
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: bc34cd0d3889c7b6b6f1d21f5994d30d
  - id: Tl_p5pgBsyM.srt
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-2-basic-search-optimal-search/Tl_p5pgBsyM.srt
    title: 3play caption file
    type: null
    uid: a3c41c501c0de39f1ca31179abb6eebd
  - id: Tl_p5pgBsyM.pdf
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-2-basic-search-optimal-search/Tl_p5pgBsyM.pdf
    title: 3play pdf file
    type: null
    uid: 020270f53204e7c28646ee56314d3612
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 995cb76ccaee688bd2befb3ebc8fd56f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 92eec3e5962365ab83ff7f3a2206b1c6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f9d3f0d8f5cb6c2d99835715942b538d
inline_embed_id: '94747347mega-recitation2:basicsearch,optimalsearch42421660'
order_index: 260
parent_uid: 6be7704ddfe26b4e12703167347dd5bb
related_resources_text: >-
  <p><a href="./resolveuid/d9abc0c6a12e6b2dfa4ca2b488c63842"
  target="_blank">Quiz 1, Fall 2008 (PDF)</a></p>
short_url: mega-recitation-2-basic-search-optimal-search
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-2-basic-search-optimal-search
title: 'Mega-Recitation 2: Basic Search, Optimal Search'
transcript: >-
  <p><span m='60'>The</span> <span m='180'>following</span> <span
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
  m='10990'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12810'>materials</span> <span m='13340'>from</span> <span
  m='13500'>hundreds</span> <span m='13930'>of</span> <span m='14040'>MIT</span>
  <span m='14470'>courses,</span> <span m='15590'>visit</span> <span
  m='15790'>MIT</span> <span m='16219'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17430'>ocw.mit.edu.</span> </p><p><span
  m='21130'>PROFESSOR: This</span> <span m='21350'>week's</span> <span
  m='21500'>problem</span> <span m='21770'>is</span> <span m='21900'>from</span>
  <span m='22040'>the</span> <span m='22200'>2008</span> <span
  m='23940'>quiz</span> <span m='24210'>one</span> <span m='24590'>on</span>
  <span m='24850'>search.</span> <span m='25710'>It is</span> <span
  m='25860'>motivated</span> <span m='26630'>by</span> <span
  m='26780'>the</span> <span m='26870'>search</span> <span m='27210'>of</span>
  <span m='27420'>evil</span> <span m='28000'>overlord,</span> <span
  m='28710'>Mark</span> <span m='29090'>Vader,</span> <span m='29910'>who</span>
  <span m='30060'>is</span> <span m='30130'>shopping</span> <span
  m='30520'>for</span> <span m='30680'>a</span> <span m='30730'>new</span> <span
  m='30950'>evil</span> <span m='31330'>stronghold.</span> <span
  m='32780'>He</span> <span m='32930'>starts</span> <span m='33290'>from
  his</span> <span m='33570'>current</span> <span m='33900'>stronghold,</span>
  <span m='34720'>which</span> <span m='34900'>is</span> <span
  m='35040'>S,</span> <span m='35330'>the</span> <span
  m='35450'>Depth-First</span> <span m='36170'>Search</span> <span
  m='36480'>Star.</span> <span m='37450'>Now the</span> <span
  m='37910'>Depth-First</span> <span m='38560'>Search</span> <span
  m='38790'>Star</span> <span m='39160'>has</span> <span m='39390'>the</span>
  <span m='39460'>following</span> <span m='39800'>qualities.</span> <span
  m='40420'>It</span> <span m='40540'>has</span> <span m='40920'>a</span> <span
  m='41120'>small,</span> <span m='41540'>thermal</span> <span
  m='41900'>Exhaust</span> <span m='42310'>Pipe</span> <span
  m='42610'>Weakness.</span> <span m='44530'>It</span> <span
  m='44700'>has</span> <span m='44930'>the</span> <span m='45010'>quality</span>
  <span m='45480'>of</span> <span m='45630'>That's</span> <span
  m='45920'>No</span> <span m='46100'>Moon,</span> <span m='47240'>but</span>
  <span m='47420'>it</span> <span m='47510'>does</span> <span
  m='47690'>not</span> <span m='47980'>have</span> <span m='48280'>a</span>
  <span m='48390'>Race</span> <span m='48630'>of</span> <span
  m='48730'>Enslaved</span> <span m='49140'>Minions,</span> <span m='49870'>or
  a</span> <span m='50130'>Secret</span> <span m='50510'>Escape</span> <span
  m='50870'>Route,</span> <span m='51220'>or</span> <span
  m='51560'>Sharks</span> <span m='51890'>with</span> <span
  m='52040'>Laser</span> <span m='52370'>Beams.</span> </p><p><span
  m='54240'>Now</span> <span m='54480'>when</span> <span m='54660'>I</span>
  <span m='54750'>originally</span> <span m='55220'>wrote</span> <span
  m='55380'>this</span> <span m='55530'>problem</span> <span m='55770'>in</span>
  <span m='55860'>2008,</span> <span m='56360'>there</span> <span
  m='56450'>was</span> <span m='56560'>another</span> <span
  m='56990'>quality</span> <span m='57460'>that</span> <span
  m='57580'>very</span> <span m='57850'>important.</span> <span
  m='58810'>It</span> <span m='58910'>was</span> <span m='59020'>a</span> <span
  m='59140'>giant</span> <span m='60030'>Laser,</span> <span
  m='61030'>and</span> <span m='61290'>it</span> <span m='61440'>did</span>
  <span m='61610'>have</span> <span m='61900'>that</span> <span
  m='62160'>property,</span> <span m='62680'>as</span> <span
  m='62960'>did</span> <span m='63060'>Dr. Evil's</span> <span
  m='63415'>Moon</span> <span m='63770'>Base,</span> <span m='64230'>but</span>
  <span m='64769'>that</span> <span m='64940'>was</span> <span
  m='65030'>removed</span> <span m='65470'>to</span> <span m='65590'>make</span>
  <span m='65800'>it</span> <span m='65890'>easier</span> <span
  m='66170'>to</span> <span m='66320'>solve.</span> <span m='66710'>So</span>
  <span m='67550'>we're</span> <span m='67740'>going</span> <span
  m='67850'>to</span> <span m='67910'>solve</span> <span m='68180'>it</span>
  <span m='68250'>without</span> <span m='69230'>the</span> <span
  m='69320'>giant</span> <span m='69690'>laser,</span> <span
  m='70110'>that</span> <span m='70250'>we</span> <span m='70390'>can</span>
  <span m='70510'>just</span> <span m='70670'>have</span> <span
  m='70790'>the</span> <span m='70870'>Sharks</span> <span m='71150'>with</span>
  <span m='71270'>Laser</span> <span m='71500'>Beams.</span> </p><p><span
  m='72520'>So</span> <span m='75850'>Mark</span> <span m='76370'>Vader</span>
  <span m='76670'>has</span> <span m='76820'>gone</span> <span
  m='77150'>to</span> <span m='77690'>Ackbar's</span> <span
  m='77980'>Emporium</span> <span m='78690'>of</span> <span m='80470'>New</span>
  <span m='80830'>Evil</span> <span m='81030'>Strongholds,</span> <span
  m='81640'>which</span> <span m='81840'>are</span> <span
  m='81920'>listed</span> <span m='82670'>on</span> <span m='82840'>the</span>
  <span m='82910'>left,</span> <span m='84260'>and</span> <span
  m='85180'>he's</span> <span m='85380'>trying</span> <span m='85590'>to</span>
  <span m='85650'>figure</span> <span m='85910'>out</span> <span
  m='87020'>the</span> <span m='87100'>best</span> <span m='87420'>way</span>
  <span m='87790'>to</span> <span m='88830'>get</span> <span
  m='89120'>from</span> <span m='89320'>his</span> <span
  m='89540'>current</span> <span m='89820'>stronghold</span> <span
  m='91160'>to</span> <span m='91480'>his</span> <span m='91730'>goal</span>
  <span m='92040'>stronghold,</span> <span m='92590'>the</span> <span
  m='92670'>603</span> <span m='93280'>Fortress,</span> <span
  m='94100'>which</span> <span m='94290'>has</span> <span m='94530'>the</span>
  <span m='94650'>admirable</span> <span m='95100'>qualities</span> <span
  m='95510'>of</span> <span m='95640'>no</span> <span m='95970'>small</span>
  <span m='96360'>thermal</span> <span m='96510'>Exhaust</span> <span
  m='96770'>Pipe</span> <span m='97170'>Weakness,</span> <span
  m='98310'>and</span> <span m='99200'>it</span> <span m='99360'>still</span>
  <span m='99600'>has</span> <span m='99950'>That's</span> <span
  m='100220'>No</span> <span m='100380'>Moon.</span> <span m='100980'>It</span>
  <span m='101110'>has</span> <span m='101270'>a</span> <span
  m='101350'>Race</span> <span m='101590'>of</span> <span
  m='101690'>Enslaved</span> <span m='102090'>Minions,</span> <span
  m='102660'>and</span> <span m='102890'>a Secret</span> <span
  m='103250'>Escape</span> <span m='103560'>Route,</span> <span
  m='103920'>and</span> <span m='104290'>Sharks</span> <span
  m='104580'>with</span> <span m='104650'>Laser</span> <span
  m='105010'>Beams.</span> <span m='105480'>So</span> <span
  m='105600'>it's</span> <span m='105760'>got</span> <span
  m='105920'>everything</span> <span m='106310'>you would</span> <span
  m='106420'>want</span> <span m='107260'>and</span> <span m='107400'>no</span>
  <span m='107600'>weakness.</span> </p><p><span m='108640'>However,</span>
  <span m='109110'>he</span> <span m='109300'>can</span> <span
  m='109470'>only</span> <span m='110500'>move</span> <span
  m='111600'>between</span> <span m='112280'>fortresses</span> <span
  m='112990'>that</span> <span m='113120'>have</span> <span
  m='113280'>exactly</span> <span m='113770'>one</span> <span
  m='114170'>difference.</span> <span m='116430'>Fortunately,</span> <span
  m='117080'>Mark</span> <span m='117380'>remembers</span> <span
  m='117740'>how</span> <span m='117830'>to</span> <span
  m='117920'>perform</span> <span m='118300'>the</span> <span
  m='118750'>search</span> <span m='118980'>techniques</span> <span
  m='119430'>he</span> <span m='119550'>learned</span> <span
  m='119830'>in</span> <span m='120060'>6.034</span> <span
  m='120590'>from</span> <span m='120810'>his</span> <span
  m='120930'>mentor,</span> <span m='121450'>Emperor</span> <span
  m='121810'>Palpatine.</span> <span m='123140'>So</span> <span
  m='124470'>we've</span> <span m='124650'>got</span> <span
  m='125080'>several</span> <span m='125330'>fortresses</span> <span
  m='125840'>here.</span> <span m='126040'>We've</span> <span
  m='126180'>got</span> <span m='126330'>the</span> <span
  m='126400'>Depth-First</span> <span m='126870'>Search</span> <span
  m='127090'>Star.</span> <span m='127980'>We've</span> <span
  m='128150'>also</span> <span m='129560'>got</span> <span
  m='129910'>Shaoul</span> <span m='130370'>Ghoul,</span> <span
  m='131680'>which</span> <span m='132070'>has</span> <span
  m='133200'>the</span> <span m='133620'>qualities,</span> <span
  m='134400'>basically,</span> <span m='135070'>of</span> <span
  m='135230'>That's</span> <span m='135510'>No</span> <span
  m='135660'>Moon,</span> <span m='135980'>and</span> <span m='136360'>none of
  the</span> <span m='136420'>other</span> <span m='136610'>qualities.</span>
  <span m='137620'>Dol</span> <span m='137900'>Guldur</span> <span
  m='138410'>here,</span> <span m='139420'>has</span> <span
  m='139650'>got</span> <span m='140070'>the</span> <span
  m='141410'>Exhaust</span> <span m='141820'>Pipe</span> <span
  m='142020'>Weakness</span> <span m='142280'>somehow,</span> <span
  m='142740'>despite</span> <span m='143170'>being</span> <span
  m='143600'>Sauron's</span> <span m='144010'>stronghold.</span> <span
  m='145450'>It's</span> <span m='145660'>not</span> <span m='145850'>a</span>
  <span m='145890'>moon,</span> <span m='146210'>and</span> <span
  m='146350'>it</span> <span m='146400'>has</span> <span m='146680'>those</span>
  <span m='147410'>enslaved</span> <span m='147820'>minions.</span> <span
  m='148630'>I</span> <span m='148700'>guess the</span> <span
  m='149030'>Orcs</span> <span m='149240'>are enslaved.</span> </p><p><span
  m='150120'>Moonraker,</span> <span m='150710'>here,</span> <span
  m='152110'>only</span> <span m='152370'>has</span> <span m='152570'>the</span>
  <span m='152610'>Exhaust</span> <span m='153020'>Pipe</span> <span
  m='153220'>Weakness,</span> <span m='153565'>so</span> <span
  m='153910'>it's</span> <span m='154090'>not</span> <span
  m='154280'>very</span> <span m='154470'>good.</span> <span
  m='155230'>But</span> <span m='155560'>James</span> <span
  m='155870'>Bond</span> <span m='156220'>didn't</span> <span
  m='156430'>need</span> <span m='156710'>to</span> <span m='157620'>deal</span>
  <span m='157860'>with</span> <span m='157990'>stuff.</span> <span
  m='159100'>Zeal</span> <span m='159390'>Underwater</span> <span
  m='160010'>Palace</span> <span m='161200'>has</span> <span
  m='161990'>That's</span> <span m='162340'>No</span> <span
  m='162490'>Moon</span> <span m='163050'>and</span> <span m='163330'>a</span>
  <span m='163400'>Secret</span> <span m='163640'>Escape</span> <span
  m='163960'>Route.</span> <span m='164760'>Zeromus'</span> <span
  m='165220'>Lunar</span> <span m='165780'>Core</span> <span
  m='166330'>has</span> <span m='167140'>an</span> <span
  m='167550'>Exhaust</span> <span m='167990'>Pipe</span> <span
  m='168200'>Weakness</span> <span m='168750'>and a</span> <span m='169000'>Race
  of</span> <span m='169260'>Enslaved</span> <span m='169670'>Minions.</span>
  <span m='170620'>Whalers</span> <span m='171090'>of</span> <span
  m='171190'>the</span> <span m='171260'>Moon</span> <span
  m='171520'>Ride</span> <span m='172180'>has</span> <span m='173390'>the</span>
  <span m='173810'>Exhaust</span> <span m='174180'>Pipe</span> <span
  m='174370'>Weakness,</span> <span m='174950'>Race of</span> <span
  m='175210'>Enslaved</span> <span m='175660'>Minions,</span> <span
  m='176110'>and</span> <span m='176330'>Sharks</span> <span
  m='176560'>with</span> <span m='176680'>Laser</span> <span
  m='176970'>Beams.</span> </p><p><span m='177980'>6.03</span> <span
  m='178420'>Fortress</span> <span m='178840'>we've</span> <span
  m='179030'>already</span> <span m='179220'>been</span> <span
  m='179400'>over.</span> <span m='179730'>Atlantis</span> <span
  m='180360'>has</span> <span m='180930'>all</span> <span
  m='181230'>qualities</span> <span m='181660'>except</span> <span
  m='181940'>for a Secret</span> <span m='182260'>Escape</span> <span
  m='182640'>Route.</span> <span m='183350'>Willy</span> <span
  m='183620'>Wonka's</span> <span m='183950'>Factory</span> <span
  m='184490'>has</span> <span m='185220'>some of</span> <span
  m='185700'>everything.</span> <span m='187230'>It</span> <span
  m='187330'>is,</span> <span m='187590'>after</span> <span
  m='187850'>all,</span> <span m='187960'>Willy</span> <span
  m='188120'>Wonka's</span> <span m='188420'>Factory.</span> <span
  m='189240'>Highlight,</span> <span m='189770'>the</span> <span m='189880'>Race
  of</span> <span m='190070'>Enslaved</span> <span m='190480'>Minions,</span>
  <span m='190840'>the</span> <span m='190940'>Oompa</span> <span
  m='191320'>Loompas.</span> <span m='192012'>And</span> <span
  m='192360'>Dr.</span> <span m='192720'>Evil's</span> <span
  m='193040'>Moon</span> <span m='193250'>Base</span> <span m='193740'>is</span>
  <span m='193970'>only</span> <span m='194260'>missing</span> <span
  m='194620'>That's</span> <span m='194890'>No</span> <span
  m='195040'>Moon,</span> <span m='195570'>because</span> <span
  m='195840'>it</span> <span m='195960'>is</span> <span m='196120'>a</span>
  <span m='196170'>moon,</span> <span m='196630'>because</span> <span
  m='196830'>it's</span> <span m='197010'>a</span> <span m='197060'>moon</span>
  <span m='197300'>base.</span> </p><p><span m='199860'>So</span> <span
  m='202020'>if</span> <span m='202150'>you</span> <span m='202310'>got</span>
  <span m='202610'>all</span> <span m='202860'>the</span> <span
  m='202950'>references</span> <span m='203800'>that</span> <span
  m='203970'>were</span> <span m='204090'>used in</span> <span m='204410'>making
  those</span> <span m='204690'>fortresses,</span> <span m='205960'>I'm</span>
  <span m='206150'>sorry.</span> <span m='207160'>There's</span> <span
  m='207250'>nothing</span> <span m='207470'>I</span> <span
  m='207530'>can</span> <span m='207690'>do</span> <span m='207840'>for</span>
  <span m='207990'>you.</span> <span m='217110'>Now,</span> <span
  m='217430'>Mark,</span> <span m='217695'>being</span> <span
  m='217960'>a</span> <span m='218040'>clever</span> <span
  m='218790'>evil</span> <span m='219080'>overlord,</span> <span
  m='219920'>realizes</span> <span m='221380'>that</span> <span
  m='221720'>he</span> <span m='221810'>can</span> <span
  m='222580'>produce</span> <span m='222880'>a</span> <span
  m='222940'>graph</span> <span m='223840'>of</span> <span m='224730'>the</span>
  <span m='224960'>exploration</span> <span m='225540'>choices</span> <span
  m='226890'>with</span> <span m='227100'>edges</span> <span
  m='227450'>joining</span> <span m='227740'>strongholds</span> <span
  m='228410'>that</span> <span m='228510'>differ</span> <span
  m='228850'>by</span> <span m='228970'>just</span> <span m='229180'>one</span>
  <span m='229360'>feature.</span> <span m='230160'>So</span> <span
  m='230930'>although</span> <span m='231070'>this</span> <span
  m='231210'>is</span> <span m='231290'>a</span> <span m='231470'>graph</span>
  <span m='231800'>here,</span> <span m='232150'>as</span> <span
  m='232340'>Patrick</span> <span m='232930'>often</span> <span
  m='233310'>says--</span> <span m='234120'>and</span> <span
  m='234610'>you</span> <span m='234910'>get</span> <span m='235080'>to</span>
  <span m='235150'>hear</span> <span m='235280'>again</span> <span
  m='235540'>right</span> <span m='235690'>now--</span> <span
  m='236380'>search</span> <span m='236690'>is</span> <span
  m='236790'>about</span> <span m='237110'>choice,</span> <span
  m='237700'>not</span> <span m='237930'>just</span> <span
  m='238090'>about</span> <span m='238300'>maps.</span> </p><p><span
  m='238720'>So</span> <span m='238880'>we're</span> <span m='239000'>not</span>
  <span m='239200'>moving</span> <span m='239490'>around</span> <span
  m='239810'>anywhere</span> <span m='240100'>in</span> <span
  m='240170'>the</span> <span m='240270'>real</span> <span
  m='240470'>world,</span> <span m='241450'>but</span> <span
  m='242460'>we</span> <span m='242600'>certainly</span> <span
  m='242950'>are</span> <span m='243260'>going</span> <span m='243560'>to</span>
  <span m='243670'>move</span> <span m='243870'>around</span> <span
  m='244080'>this</span> <span m='244250'>graph</span> <span
  m='244840'>to</span> <span m='245350'>pick</span> <span
  m='245500'>between</span> <span m='245790'>these</span> <span
  m='245950'>many</span> <span m='246260'>stronghold</span> <span
  m='246730'>choices.</span> <span m='247200'>How</span> <span
  m='247390'>can</span> <span m='247480'>we</span> <span
  m='247600'>decide</span> <span m='248140'>where</span> <span
  m='248300'>to</span> <span m='248380'>travel?</span> <span
  m='249010'>Well,</span> <span m='249300'>we're</span> <span
  m='249410'>about</span> <span m='249600'>to</span> <span
  m='249690'>find</span> <span m='249940'>out.</span> <span m='250660'>So</span>
  <span m='251050'>we've</span> <span m='251200'>got</span> <span
  m='251450'>this</span> <span m='251640'>lovely</span> <span
  m='252000'>graph</span> <span m='252280'>right</span> <span
  m='252490'>here,</span> <span m='253730'>and</span> <span
  m='254330'>now</span> <span m='254520'>we're</span> <span
  m='254640'>going</span> <span m='254760'>to</span> <span m='254800'>get</span>
  <span m='254990'>to</span> <span m='255100'>do</span> <span
  m='255290'>depth-first</span> <span m='255770'>search</span> <span
  m='256980'>on</span> <span m='257170'>the</span> <span
  m='257240'>graph.</span> <span m='259019'>Now</span> <span
  m='259050'>there's</span> <span m='259209'>a</span> <span
  m='259279'>lot</span> <span m='259550'>of</span> <span m='259630'>ways</span>
  <span m='259890'>to</span> <span m='260010'>do</span> <span
  m='260240'>search,</span> <span m='261550'>and</span> <span
  m='261950'>you've</span> <span m='262130'>seen</span> <span
  m='262420'>Patrick</span> <span m='262910'>do</span> <span
  m='263090'>it,</span> <span m='263310'>you</span> <span m='263410'>may</span>
  <span m='263610'>have seen</span> <span m='263850'>some</span> <span
  m='264900'>people</span> <span m='265110'>do it in</span> <span
  m='265420'>recitation.</span> <span m='266710'>And</span> <span m='267365'>I'm
  going to</span> <span m='267640'>offer you</span> <span m='267980'>guys</span>
  <span m='268220'>a unique</span> <span m='268570'>opportunity</span> <span
  m='269210'>to</span> <span m='269310'>see</span> <span m='269490'>me</span>
  <span m='269650'>do</span> <span m='269860'>search</span> <span
  m='270460'>in</span> <span m='270670'>one</span> <span m='270840'>of</span>
  <span m='270920'>several</span> <span m='271270'>ways,</span> <span
  m='271720'>or</span> <span m='271810'>possibly</span> <span
  m='272330'>more.</span> </p><p><span m='273650'>I</span> <span
  m='273830'>have</span> <span m='274380'>the</span> <span
  m='274820'>tried</span> <span m='275170'>and</span> <span
  m='275320'>true</span> <span m='275530'>method.</span> <span
  m='275920'>You</span> <span m='276040'>have</span> <span m='276320'>the</span>
  <span m='276450'>queue,</span> <span m='276780'>or</span> <span
  m='277020'>agenda,</span> <span m='277480'>or</span> <span
  m='277600'>whatever</span> <span m='277870'>you</span> <span
  m='277960'>want</span> <span m='278090'>to</span> <span m='278150'>call</span>
  <span m='278440'>it.</span> <span m='278930'>You</span> <span
  m='279080'>keep</span> <span m='279290'>track</span> <span
  m='279600'>of</span> <span m='279710'>it</span> <span m='279970'>at</span>
  <span m='280130'>every</span> <span m='280450'>level.</span> <span
  m='280970'>You</span> <span m='281080'>make</span> <span
  m='281420'>damn</span> <span m='281690'>sure</span> <span
  m='282670'>that</span> <span m='282810'>everything</span> <span
  m='283180'>you're</span> <span m='283300'>doing</span> <span
  m='283560'>is</span> <span m='283680'>right.</span> <span m='284180'>It</span>
  <span m='284300'>takes</span> <span m='284520'>a</span> <span
  m='284580'>long</span> <span m='284900'>time,</span> <span
  m='285460'>and</span> <span m='285590'>you</span> <span m='285650'>get</span>
  <span m='285780'>the</span> <span m='285830'>answer</span> <span
  m='286190'>right.</span> <span m='287340'>Or</span> <span
  m='287970'>there's</span> <span m='288160'>one</span> <span
  m='288380'>where</span> <span m='288510'>you</span> <span
  m='288660'>only</span> <span m='288920'>work</span> <span
  m='289310'>with</span> <span m='289460'>the</span> <span
  m='289540'>goal</span> <span m='289810'>tree,</span> <span
  m='290170'>and</span> <span m='290310'>you</span> <span m='290390'>draw</span>
  <span m='290570'>it</span> <span m='290640'>really</span> <span
  m='290890'>fast,</span> <span m='291970'>and</span> <span
  m='292720'>you</span> <span m='292860'>might make</span> <span
  m='293130'>a</span> <span m='293190'>mistake,</span> <span
  m='293920'>but</span> <span m='294230'>it's</span> <span
  m='294390'>going</span> <span m='294520'>to</span> <span
  m='294590'>solve</span> <span m='294930'>it</span> <span
  m='295020'>more</span> <span m='295190'>quickly.</span> </p><p><span
  m='296070'>So</span> <span m='296440'>who</span> <span m='296580'>would</span>
  <span m='296730'>rather</span> <span m='297030'>see</span> <span
  m='297310'>the</span> <span m='297550'>reliable,</span> <span
  m='298210'>but</span> <span m='298370'>slower,</span> <span
  m='298820'>approach?</span> <span m='303070'>Who</span> <span
  m='303200'>would</span> <span m='303320'>rather</span> <span
  m='303580'>see</span> <span m='303760'>the</span> <span
  m='303960'>faster,</span> <span m='304490'>but</span> <span
  m='304650'>less</span> <span m='304880'>reliable,</span> <span
  m='305380'>approach?</span> <span m='306490'>All</span> <span
  m='306560'>right.</span> <span m='306770'>Monte</span> <span
  m='307040'>Carlo</span> <span m='307410'>people</span> <span
  m='307740'>here,</span> <span m='308200'>rather</span> <span
  m='308450'>than</span> <span m='308840'>Las</span> <span
  m='309150'>Vegas.</span> <span m='309630'>If you</span> <span
  m='309770'>don't</span> <span m='309940'>know what</span> <span
  m='310070'>that</span> <span m='310260'>is,</span> <span
  m='310430'>you'll</span> <span m='310500'>learn it in</span> <span
  m='310940'>algorithms</span> <span m='311480'>class.</span> <span
  m='312200'>All</span> <span m='312330'>right.</span> <span
  m='312750'>Then</span> <span m='312990'>there's</span> <span
  m='313170'>a</span> <span m='313270'>third</span> <span
  m='313540'>approach</span> <span m='313920'>that</span> <span
  m='314030'>I</span> <span m='314110'>probably</span> <span
  m='314520'>won't</span> <span m='314790'>show</span> <span
  m='314970'>you</span> <span m='315110'>unless</span> <span
  m='315300'>there's</span> <span m='315400'>overwhelming</span> <span
  m='315920'>favor</span> <span m='316230'>for it.</span> <span
  m='316450'>That</span> <span m='316810'>is</span> <span m='317000'>the</span>
  <span m='317090'>approach</span> <span m='317980'>that</span> <span
  m='318140'>is</span> <span m='318350'>manically</span> <span
  m='318960'>fast</span> <span m='319390'>and</span> <span
  m='319500'>will</span> <span m='319610'>solve</span> <span
  m='319940'>depth-first</span> <span m='320460'>search</span> <span
  m='320790'>in</span> <span m='320930'>no</span> <span m='321090'>time</span>
  <span m='321310'>at</span> <span m='321370'>all,</span> <span
  m='321670'>but</span> <span m='321820'>it is</span> <span
  m='321950'>very</span> <span m='322250'>likely</span> <span m='322620'>to
  make</span> <span m='322820'>mistakes.</span> </p><p><span
  m='324560'>That</span> <span m='324630'>is</span> <span m='324990'>the</span>
  <span m='325330'>approach</span> <span m='325730'>that I</span> <span
  m='325850'>use</span> <span m='326160'>when</span> <span
  m='326310'>solving</span> <span m='326660'>depth-first</span> <span
  m='327080'>search.</span> <span m='327800'>I've</span> <span m='327900'>used
  it</span> <span m='328140'>enough</span> <span m='328420'>times that</span>
  <span m='328750'>I</span> <span m='328860'>don't</span> <span
  m='329020'>make</span> <span m='329180'>mistakes</span> <span
  m='329470'>that</span> <span m='329670'>often,</span> <span
  m='330040'>but</span> <span m='330560'>even</span> <span m='330780'>I</span>
  <span m='330890'>still</span> <span m='331250'>do.</span> <span
  m='331910'>So</span> <span m='332390'>does anyone</span> <span
  m='332530'>want</span> <span m='332770'>to</span> <span m='332810'>see</span>
  <span m='332980'>that</span> <span m='333250'>one?</span> <span
  m='336080'>OK.</span> <span m='336240'>Not</span> <span m='336470'>that
  many</span> <span m='336750'>people.</span> <span m='337530'>Well,</span>
  <span m='337730'>it</span> <span m='337830'>doesn't</span> <span
  m='337930'>take</span> <span m='338040'>much</span> <span
  m='338220'>time,</span> <span m='338480'>but</span> <span
  m='338570'>I'm</span> <span m='338650'>just</span> <span
  m='338800'>afraid</span> <span m='339190'>that if</span> <span
  m='339320'>I</span> <span m='339400'>show it</span> <span
  m='339730'>you,</span> <span m='339970'>that</span> <span m='340160'>you'll be
  like,</span> <span m='340535'>ooh, that's</span> <span m='340910'>the</span>
  <span m='341000'>only</span> <span m='341160'>way</span> <span
  m='341310'>to</span> <span m='341410'>do</span> <span m='341600'>it.</span>
  <span m='341760'>So</span> <span m='342960'>we'll</span> <span
  m='343220'>save</span> <span m='343470'>that</span> <span
  m='343590'>for</span> <span m='343700'>later</span> <span m='344100'>if</span>
  <span m='344470'>we</span> <span m='344650'>have</span> <span
  m='344810'>more</span> <span m='344980'>time.</span> <span
  m='345370'>It</span> <span m='345490'>essentially,</span> <span
  m='347050'>for</span> <span m='347130'>people</span> <span m='347210'>that
  are</span> <span m='347330'>interested,</span> <span
  m='347690'>involves</span> <span m='348180'>just</span> <span
  m='348340'>using</span> <span m='348650'>your</span> <span m='349300'>chalk
  or</span> <span m='349730'>finger</span> <span m='350010'>to</span> <span
  m='350110'>trace</span> <span m='350500'>through the</span> <span
  m='350800'>tree</span> <span m='351050'>really</span> <span
  m='351370'>fast</span> <span m='351820'>and</span> <span
  m='351990'>figure</span> <span m='352220'>out</span> <span
  m='352370'>what</span> <span m='352520'>it's</span> <span
  m='352690'>doing</span> <span m='353220'>by</span> <span
  m='355110'>drawing</span> <span m='355440'>little</span> <span m='355670'>tiny
  lines.</span> <span m='356440'>It</span> <span m='356940'>is</span> <span
  m='357100'>very</span> <span m='357390'>fast,</span> <span
  m='357780'>but</span> <span m='357970'>it's</span> <span m='358220'>not</span>
  <span m='358450'>very</span> <span m='358710'>accurate.</span> <span
  m='359540'>And</span> <span m='359810'>you</span> <span m='359930'>have</span>
  <span m='360110'>shown,</span> <span m='360480'>basically,</span> <span
  m='360960'>no</span> <span m='361140'>work</span> <span m='361460'>if</span>
  <span m='361560'>you</span> <span m='361640'>get</span> <span
  m='361780'>it</span> <span m='361850'>wrong,</span> <span m='362230'>so</span>
  <span m='362570'>shame</span> <span m='362830'>on</span> <span
  m='362960'>you.</span> <span m='363800'>OK.</span> </p><p><span
  m='366330'>Well,</span> <span m='366590'>let's</span> <span
  m='366800'>do</span> <span m='366910'>the</span> <span
  m='367000'>somewhat</span> <span m='367350'>faster</span> <span
  m='367690'>way</span> <span m='367820'>where we</span> <span
  m='368090'>don't</span> <span m='368300'>draw</span> <span
  m='368500'>out</span> <span m='368650'>the</span> <span
  m='368730'>entire</span> <span m='369080'>agenda,</span> <span
  m='370270'>and</span> <span m='370630'>then</span> <span
  m='370850'>people</span> <span m='371220'>who</span> <span
  m='371850'>were</span> <span m='372070'>the</span> <span
  m='372260'>almost</span> <span m='372570'>nobody who</span> <span
  m='372980'>raised</span> <span m='373220'>their</span> <span
  m='373330'>hand</span> <span m='373550'>for</span> <span
  m='373660'>that</span> <span m='373850'>way</span> <span m='374100'>can</span>
  <span m='375230'>check</span> <span m='375450'>it</span> <span m='375550'>out
  in</span> <span m='375790'>tutorial</span> <span m='376990'>the</span> <span
  m='377100'>way</span> <span m='377270'>that</span> <span m='377420'>you</span>
  <span m='377500'>do</span> <span m='377640'>it</span> <span
  m='377770'>using</span> <span m='378010'>the</span> <span
  m='378100'>agenda.</span> <span m='378580'>So</span> <span
  m='378630'>let's</span> <span m='378880'>do it</span> <span
  m='379080'>using</span> <span m='379220'>the</span> <span
  m='379310'>goal</span> <span m='379560'>tree.</span> <span
  m='379800'>So</span> <span m='380050'>it's</span> <span m='380190'>a</span>
  <span m='380250'>bit</span> <span m='380480'>faster</span> <span
  m='380830'>that</span> <span m='381020'>way.</span> <span m='381620'>So</span>
  <span m='382370'>we're</span> <span m='382500'>going</span> <span
  m='382750'>to</span> <span m='382810'>start,</span> <span
  m='383120'>starting</span> <span m='383520'>at</span> <span
  m='383640'>S,</span> <span m='384460'>the</span> <span m='384590'>start node,
  and</span> <span m='385090'>going</span> <span m='385300'>to</span> <span
  m='385370'>G,</span> <span m='385680'>the</span> <span m='385770'>goal</span>
  <span m='386060'>node.</span> <span m='386480'>That's</span> <span
  m='386710'>a</span> <span m='386860'>standard</span> <span
  m='387340'>notation,</span> <span m='388310'>but</span> <span
  m='388660'>make</span> <span m='388990'>sure</span> <span
  m='389490'>that</span> <span m='389790'>when</span> <span
  m='389950'>you're</span> <span m='390070'>taking</span> <span
  m='390320'>the</span> <span m='390440'>test,</span> <span
  m='390750'>you</span> <span m='390860'>check</span> <span m='391130'>to</span>
  <span m='391210'>make</span> <span m='391410'>sure</span> <span
  m='392870'>where</span> <span m='393170'>the</span> <span
  m='393270'>start</span> <span m='393550'>node</span> <span
  m='393740'>is,</span> <span m='393920'>where</span> <span
  m='394060'>the</span> <span m='394150'>goal node</span> <span
  m='394540'>is.</span> </p><p><span m='395900'>It's</span> <span
  m='396160'>pretty</span> <span m='397520'>much</span> <span
  m='398660'>an</span> <span m='398830'>asshole</span> <span
  m='399220'>move</span> <span m='399550'>to</span> <span m='399630'>have</span>
  <span m='399780'>a</span> <span m='399850'>G node</span> <span
  m='400240'>that</span> <span m='400350'>isn't the</span> <span
  m='400680'>goal</span> <span m='400840'>node,</span> <span
  m='401510'>but</span> <span m='401670'>sometimes</span> <span
  m='402030'>there</span> <span m='402150'>won't</span> <span
  m='402440'>be</span> <span m='402580'>an</span> <span m='402650'>S
  node.</span> <span m='403040'>That's</span> <span m='403290'>a</span> <span
  m='403360'>pretty</span> <span m='403580'>good</span> <span
  m='403770'>clue</span> <span m='404010'>that</span> <span
  m='404180'>something</span> <span m='404450'>else</span> <span
  m='404650'>is</span> <span m='404780'>the</span> <span m='404870'>start</span>
  <span m='405150'>node.</span> <span m='406250'>Now</span> <span
  m='406410'>there's</span> <span m='406560'>a</span> <span
  m='406610'>few</span> <span m='407540'>little</span> <span
  m='407950'>white</span> <span m='408260'>star</span> <span
  m='408570'>ideas</span> <span m='409030'>that</span> <span
  m='409170'>we</span> <span m='409330'>have,</span> <span m='409650'>or</span>
  <span m='409770'>silver star</span> <span m='410200'>ideas,</span> <span
  m='410790'>for</span> <span m='411200'>search.</span> <span
  m='412080'>One</span> <span m='412400'>is</span> <span
  m='412620'>lexicography.</span> <span m='413870'>What</span> <span
  m='414070'>it</span> <span m='414230'>lexicography?</span> <span
  m='414940'>Who</span> <span m='415080'>cares?</span> <span
  m='415640'>Well,</span> <span m='416760'>the</span> <span m='416980'>most
  famous</span> <span m='417220'>lexicographer</span> <span m='417750'>I
  know</span> <span m='418020'>of</span> <span m='418330'>is</span> <span
  m='418610'>Samuel</span> <span m='418940'>Johnson,</span> <span
  m='419520'>who</span> <span m='420350'>wrote</span> <span m='420510'>a</span>
  <span m='420550'>really</span> <span m='420750'>famous</span> <span
  m='421070'>dictionary.</span> <span m='422220'>And</span> <span
  m='422480'>the</span> <span m='422540'>only</span> <span
  m='422690'>reason</span> <span m='422920'>we</span> <span
  m='423050'>care</span> <span m='423290'>about</span> <span
  m='423520'>it</span> <span m='423640'>in</span> <span m='423760'>this</span>
  <span m='423930'>class</span> <span m='424480'>is</span> <span
  m='424650'>because</span> <span m='425390'>you'll</span> <span
  m='425570'>always</span> <span m='425920'>see</span> <span
  m='426060'>the</span> <span m='426140'>instructions</span> <span
  m='426710'>"break</span> <span m='427060'>ties</span> <span
  m='427500'>in</span> <span m='427600'>lexicographic</span> <span
  m='428490'>order."</span> <span m='429560'>And</span> <span
  m='429630'>then</span> <span m='429760'>you</span> <span
  m='429850'>might</span> <span m='430010'>be</span> <span
  m='430120'>like,</span> <span m='430460'>wow,</span> <span
  m='430770'>that's</span> <span m='431900'>really</span> <span
  m='432230'>rather</span> <span m='432560'>a</span> <span
  m='432630'>wordy</span> <span m='433220'>word,</span> <span m='434500'>or
  a</span> <span m='434890'>sesquipedalion</span> <span m='435430'>word,</span>
  <span m='435680'>or</span> <span m='436190'>whatever</span> <span
  m='436560'>really</span> <span m='436800'>long</span> <span
  m='437040'>word</span> <span m='437190'>you</span> <span
  m='437320'>want</span> <span m='437430'>to</span> <span m='437480'>use</span>
  <span m='437820'>to</span> <span m='437920'>describe</span> <span
  m='438450'>the</span> <span m='438540'>word</span> <span
  m='438850'>"lexicographic."</span> <span m='439280'>What</span> <span
  m='439580'>the</span> <span m='439690'>heck</span> <span
  m='439880'>does</span> <span m='440000'>it</span> <span
  m='440100'>mean?</span> </p><p><span m='440860'>Basically,</span> <span
  m='441380'>it</span> <span m='441460'>means</span> <span
  m='441890'>alphabetical</span> <span m='442550'>order,</span> <span
  m='444040'>like</span> <span m='444290'>you</span> <span
  m='444400'>would</span> <span m='444590'>do</span> <span m='444820'>in</span>
  <span m='444920'>a</span> <span m='444960'>dictionary.</span> <span
  m='447670'>So</span> <span m='448030'>for</span> <span
  m='448210'>instance,</span> <span m='450240'>in</span> <span
  m='450390'>alphabetical</span> <span m='450960'>order,</span> <span
  m='451290'>A</span> <span m='451470'>comes</span> <span
  m='451780'>before</span> <span m='452160'>B.</span> <span m='452730'>So</span>
  <span m='453090'>you</span> <span m='453280'>would go</span> <span
  m='453420'>to</span> <span m='453490'>A</span> <span m='453650'>before</span>
  <span m='454040'>B.</span> <span m='454810'>No,</span> <span
  m='455030'>even</span> <span m='455350'>beyond</span> <span
  m='455700'>that</span> <span m='455940'>point,</span> <span
  m='456310'>there's</span> <span m='456420'>several</span> <span
  m='457020'>ways</span> <span m='457860'>to</span> <span m='457980'>do</span>
  <span m='458180'>a</span> <span m='458630'>lexicographic</span> <span
  m='459130'>tiebreak.</span> <span m='460450'>And</span> <span
  m='461380'>it's</span> <span m='461590'>not</span> <span
  m='461800'>always</span> <span m='461970'>consistent</span> <span
  m='462370'>between</span> <span m='462680'>algorithms</span> <span
  m='463220'>how</span> <span m='463620'>you would</span> <span
  m='463810'>do</span> <span m='464080'>a</span> <span
  m='464270'>lexicographic</span> <span m='464710'>tiebreaker.</span> <span
  m='465830'>In</span> <span m='465940'>the</span> <span m='465990'>most</span>
  <span m='466250'>recent</span> <span m='466570'>time</span> <span
  m='466790'>that</span> <span m='466940'>Patrick</span> <span
  m='467410'>was</span> <span m='467660'>kind</span> <span m='467900'>of</span>
  <span m='468230'>randomly</span> <span m='468650'>talking</span> <span
  m='469060'>to</span> <span m='469160'>the</span> <span
  m='469260'>staff,</span> <span m='469700'>he</span> <span
  m='469800'>made</span> <span m='469960'>it</span> <span
  m='470060'>clear</span> <span m='470330'>that</span> <span
  m='470470'>the</span> <span m='471420'>way</span> <span m='471550'>he</span>
  <span m='471650'>would</span> <span m='471870'>like</span> <span
  m='472050'>us</span> <span m='472180'>to</span> <span m='472280'>do</span>
  <span m='472480'>it,</span> <span m='472600'>and</span> <span
  m='472720'>therefore,</span> <span m='473050'>the</span> <span
  m='473150'>way</span> <span m='473350'>we'd</span> <span
  m='473590'>like</span> <span m='473790'>you</span> <span m='473970'>to</span>
  <span m='474060'>do</span> <span m='474260'>it,</span> <span
  m='475000'>is</span> <span m='475350'>to</span> <span
  m='475480'>tiebreak</span> <span m='476040'>based</span> <span
  m='476330'>on</span> <span m='476610'>the</span> <span m='476670'>very</span>
  <span m='477180'>latest</span> <span m='477770'>nodes</span> <span
  m='478150'>at</span> <span m='478340'>the</span> <span m='478530'>end.</span>
  </p><p><span m='479710'>So</span> <span m='479720'>you</span> <span
  m='479830'>might</span> <span m='479970'>say,</span> <span
  m='480070'>that's</span> <span m='480330'>not</span> <span
  m='480500'>really</span> <span m='480710'>lexicographic.</span> <span
  m='481430'>Wouldn't</span> <span m='481720'>SAB</span> <span
  m='482590'>come</span> <span m='482830'>before</span> <span
  m='483580'>SGA</span> <span m='485430'>in</span> <span m='485730'>the</span>
  <span m='485820'>dictionary?</span> <span m='488880'>And</span> <span
  m='489350'>my</span> <span m='489560'>answer</span> <span m='490820'>to</span>
  <span m='490840'>you</span> <span m='491140'>is,</span> <span
  m='492300'>yes,</span> <span m='492550'>it</span> <span
  m='492620'>would.</span> <span m='495980'>Yes,</span> <span
  m='496430'>yes,</span> <span m='496720'>it</span> <span
  m='496840'>definitely</span> <span m='497300'>would.</span> <span
  m='499180'>However,</span> <span m='502200'>that</span> <span
  m='502550'>is</span> <span m='503970'>apparently</span> <span
  m='504550'>what</span> <span m='504740'>we're</span> <span
  m='504820'>doing,</span> <span m='505130'>according</span> <span
  m='505460'>to</span> <span m='505540'>the</span> <span m='505640'>last</span>
  <span m='505960'>thing</span> <span m='506080'>that</span> <span
  m='506170'>Patrick</span> <span m='506570'>said,</span> <span
  m='506890'>and</span> <span m='507020'>we</span> <span m='507100'>will</span>
  <span m='507200'>keep</span> <span m='507380'>you</span> <span
  m='507500'>updated</span> <span m='508060'>if</span> <span
  m='508590'>he</span> <span m='508710'>decides</span> <span
  m='509030'>to</span> <span m='509080'>go</span> <span m='509210'>back</span>
  <span m='509530'>to</span> <span m='510400'>dictionary</span> <span
  m='510910'>order.</span> </p><p><span m='511960'>So</span> <span
  m='513860'>that's</span> <span m='515169'>lexicography.</span> <span
  m='515760'>You</span> <span m='515870'>might be</span> <span
  m='516100'>wondering</span> <span m='516330'>what</span> <span
  m='516440'>the</span> <span m='516520'>picture</span> <span
  m='516860'>here</span> <span m='517130'>is.</span> <span
  m='517260'>Well,</span> <span m='517870'>this</span> <span
  m='518110'>is</span> <span m='518250'>our</span> <span
  m='518400'>friend,</span> <span m='518710'>the</span> <span
  m='519049'>ouroboros.</span> <span m='519720'>Long</span> <span
  m='519990'>has</span> <span m='520159'>it</span> <span m='520299'>been</span>
  <span m='520490'>a</span> <span m='520549'>symbol</span> <span
  m='521039'>in</span> <span m='521179'>alchemy</span> <span
  m='521840'>of</span> <span m='522070'>infinity,</span> <span
  m='522929'>eternity,</span> <span m='523600'>or</span> <span
  m='523700'>maybe</span> <span m='524310'>a</span> <span m='527360'>sort</span>
  <span m='527660'>of</span> <span m='528490'>infinite</span> <span
  m='528910'>energy</span> <span m='529350'>engine,</span> <span
  m='530260'>turning</span> <span m='530590'>iron</span> <span
  m='530800'>into</span> <span m='530960'>gold.</span> <span
  m='531680'>But</span> <span m='532010'>today,</span> <span
  m='532480'>unfortunately,</span> <span m='533880'>the</span> <span
  m='534320'>ouroboros</span> <span m='534900'>is an</span> <span
  m='535080'>endangered</span> <span m='535550'>species</span> <span
  m='536130'>because</span> <span m='540580'>no</span> <span
  m='541060'>biting</span> <span m='541110'>your own</span> <span
  m='541260'>tail</span> <span m='542100'>in</span> <span
  m='542390'>6.034.</span> <span m='543860'>A lot</span> <span
  m='544160'>of</span> <span m='544250'>people</span> <span
  m='544490'>mess</span> <span m='544800'>up</span> <span m='544960'>from</span>
  <span m='545180'>this.</span> <span m='545630'>It's</span> <span
  m='545780'>an</span> <span m='545880'>honest</span> <span
  m='546210'>mistake.</span> <span m='547550'>I</span> <span
  m='547750'>mean,</span> <span m='548000'>we've</span> <span
  m='548270'>gotten</span> <span m='548510'>some emails</span> <span
  m='548810'>from</span> <span m='549000'>staff</span> <span
  m='549500'>members</span> <span m='550040'>who</span> <span
  m='551390'>couldn't solve</span> <span m='551820'>one</span> <span
  m='551950'>of</span> <span m='552030'>the</span> <span
  m='552110'>problems</span> <span m='552450'>because</span> <span
  m='552580'>they</span> <span m='552680'>forgot</span> <span
  m='553000'>about</span> <span m='553190'>this.</span> <span m='553420'>So
  it's</span> <span m='553700'>OK</span> <span m='553980'>if</span> <span
  m='554100'>you</span> <span m='554230'>forget,</span> <span
  m='554970'>but</span> <span m='555430'>try</span> <span m='555640'>your</span>
  <span m='555760'>best to</span> <span m='556050'>remember.</span> <span
  m='556870'>No biting</span> <span m='557350'>your</span> <span
  m='557460'>own</span> <span m='557640'>tail</span> <span m='558210'>is</span>
  <span m='558360'>the</span> <span m='558550'>only</span> <span
  m='558880'>smart</span> <span m='559135'>thing</span> <span
  m='559520'>our</span> <span m='559610'>system</span> <span
  m='559980'>does.</span> </p><p><span m='560360'>You'll</span> <span
  m='560460'>remember</span> <span m='561380'>last</span> <span
  m='561850'>week</span> <span m='562210'>when</span> <span m='562340'>we
  were</span> <span m='562510'>talking</span> <span m='562780'>about</span>
  <span m='562970'>rules,</span> <span m='563540'>and</span> <span
  m='563670'>we</span> <span m='563750'>were</span> <span
  m='563840'>saying</span> <span m='564660'>that</span> <span
  m='565000'>the</span> <span m='565140'>rule</span> <span
  m='565400'>system</span> <span m='565670'>is</span> <span
  m='565790'>not</span> <span m='566160'>a</span> <span m='566230'>smart</span>
  <span m='566730'>creature.</span> <span m='570280'>It</span> <span
  m='570490'>doesn't</span> <span m='570750'>know</span> <span
  m='570990'>that</span> <span m='571910'>"not</span> <span
  m='572960'>Polly</span> <span m='573330'>is</span> <span
  m='573520'>dead"</span> <span m='573820'>should</span> <span
  m='573940'>be</span> <span m='574020'>the</span> <span m='574110'>same</span>
  <span m='574320'>as</span> <span m='574450'>"Polly</span> <span
  m='574770'>is</span> <span m='574880'>not</span> <span
  m='575150'>dead",</span> <span m='575380'>or</span> <span
  m='575500'>something</span> <span m='575740'>like</span> <span
  m='575940'>that.</span> <span m='576220'>It's</span> <span
  m='576480'>too</span> <span m='576670'>dumb</span> <span m='577110'>to</span>
  <span m='577500'>figure</span> <span m='577750'>that</span> <span
  m='577980'>out.</span> <span m='578990'>Well,</span> <span
  m='579400'>this</span> <span m='579710'>system</span> <span
  m='580050'>is</span> <span m='580150'>also</span> <span
  m='580550'>dumb,</span> <span m='580970'>but</span> <span
  m='581340'>one</span> <span m='581720'>thing it</span> <span
  m='582010'>knows</span> <span m='582230'>is</span> <span
  m='582770'>that</span> <span m='582880'>Patrick</span> <span
  m='583330'>really</span> <span m='583660'>hates</span> <span
  m='584140'>if</span> <span m='584300'>the</span> <span m='584390'>same</span>
  <span m='584720'>node</span> <span m='585000'>appears</span> <span
  m='585380'>twice</span> <span m='586800'>within</span> <span
  m='587150'>the</span> <span m='587240'>same</span> <span
  m='588290'>path.</span> <span m='589010'>And</span> <span m='589280'>it</span>
  <span m='589440'>will</span> <span m='589790'>destroy</span> <span
  m='590300'>that</span> <span m='590570'>immediately,</span> <span
  m='591210'>before</span> <span m='591600'>even</span> <span
  m='591850'>adding</span> <span m='592170'>it</span> <span m='592320'>to
  the</span> <span m='592600'>queue.</span> <span m='593330'>It's</span> <span
  m='593530'>gone.</span> <span m='593860'>It's</span> <span
  m='594030'>not</span> <span m='594310'>considered.</span> <span
  m='595090'>It's</span> <span m='595270'>out of</span> <span
  m='595560'>there.</span> <span m='595920'>So</span> <span
  m='597280'>very</span> <span m='597550'>important,</span> <span
  m='599140'>sad</span> <span m='599630'>ouroboros,</span> <span m='600320'>no
  biting</span> <span m='600690'>your own</span> <span m='601040'>tail.</span>
  </p><p><span m='602740'>All right.</span> <span m='603640'>So</span> <span
  m='604090'>now that</span> <span m='604220'>I've</span> <span
  m='604420'>gotten</span> <span m='604630'>through</span> <span
  m='604740'>that,</span> <span m='604960'>let's</span> <span
  m='605250'>actually</span> <span m='605580'>solve</span> <span
  m='605860'>the</span> <span m='605940'>problem</span> <span
  m='606300'>with</span> <span m='606440'>some</span> <span
  m='606590'>depth-first</span> <span m='607100'>search.</span> <span
  m='608130'>How will</span> <span m='608400'>we</span> <span
  m='608560'>do</span> <span m='608690'>that?</span> <span
  m='609020'>Well,</span> <span m='609220'>we're</span> <span
  m='609320'>not</span> <span m='609430'>going to use</span> <span
  m='609670'>the</span> <span m='609770'>queue,</span> <span
  m='610150'>as</span> <span m='610580'>popular</span> <span
  m='610900'>demand,</span> <span m='611280'>we're</span> <span
  m='611410'>going</span> <span m='611600'>to</span> <span m='611640'>use</span>
  <span m='611870'>a</span> <span m='611910'>goal</span> <span
  m='612150'>tree.</span> <span m='612820'>So</span> <span
  m='613580'>we'll</span> <span m='613740'>start</span> <span
  m='614120'>at</span> <span m='614310'>node</span> <span m='614560'>S.</span>
  <span m='616510'>What</span> <span m='616780'>are</span> <span
  m='616900'>our</span> <span m='616950'>choices</span> <span
  m='617290'>at</span> <span m='617430'>node</span> <span m='617700'>S?</span>
  <span m='619560'>Well,</span> <span m='620832'>I'm</span> <span
  m='621170'>going to</span> <span m='621220'>force</span> <span
  m='621460'>you</span> <span m='621580'>guys</span> <span m='621850'>to
  help.</span> <span m='622850'>So</span> <span m='623560'>it</span> <span
  m='623710'>won't</span> <span m='623920'>be</span> <span
  m='624030'>quite</span> <span m='624220'>as</span> <span
  m='624320'>fast,</span> <span m='624740'>but</span> <span
  m='624910'>it'll</span> <span m='625100'>be</span> <span
  m='625230'>fun.</span> <span m='626020'>So</span> <span m='626270'>what are
  our</span> <span m='626555'>choices at</span> <span m='626840'>node</span>
  <span m='627000'>S?</span> <span m='628730'>You.</span> </p><p></p><p><span
  m='630314'>AUDIENCE: Me?</span> </p><p><span m='630771'>PROFESSOR: Yes.</span>
  </p><p><span m='631685'>AUDIENCE: A or</span> <span m='632142'>B?</span>
  </p><p><span m='633520'>PROFESSOR: Not</span> <span m='634010'>quite,</span>
  <span m='634650'>and</span> <span m='634860'>this</span> <span
  m='635000'>is</span> <span m='635110'>something</span> <span
  m='635370'>I</span> <span m='635440'>like</span> <span m='635610'>about</span>
  <span m='635790'>this</span> <span m='635920'>problem.</span> <span
  m='636510'>You</span> <span m='636680'>got</span> <span m='636890'>most</span>
  <span m='637160'>of</span> <span m='637270'>them.</span> <span m='637680'>Do
  you</span> <span m='637870'>see</span> <span m='638130'>that</span> <span
  m='638290'>there</span> <span m='638400'>might</span> <span
  m='638540'>be</span> <span m='638640'>another</span> <span
  m='638900'>choice?</span> <span m='641040'>Everyone?</span> <span
  m='641560'>Yeah,</span> <span m='641920'>C.</span> <span
  m='642700'>This</span> <span m='642870'>is</span> <span m='642950'>a</span>
  <span m='643000'>big</span> <span m='643310'>problem that</span> <span
  m='643730'>has</span> <span m='643880'>happened</span> <span
  m='644320'>on</span> <span m='644560'>a</span> <span m='644690'>few</span>
  <span m='645350'>different</span> <span m='645750'>quiz</span> <span
  m='646000'>problems</span> <span m='646460'>where</span> <span
  m='648770'>there's</span> <span m='648870'>a</span> <span
  m='649010'>sort</span> <span m='649160'>of</span> <span m='649500'>a</span>
  <span m='650370'>grid</span> <span m='650620'>that</span> <span
  m='650750'>looks</span> <span m='650970'>like</span> <span m='651110'>a</span>
  <span m='651190'>tree,</span> <span m='651540'>or</span> <span
  m='651610'>a</span> <span m='651650'>graph</span> <span m='651920'>that</span>
  <span m='652010'>looks like a</span> <span m='652060'>tree,</span> <span
  m='652800'>where</span> <span m='653000'>people</span> <span
  m='654040'>aren't</span> <span m='654270'>as</span> <span
  m='654380'>willing</span> <span m='654570'>to</span> <span
  m='654650'>go</span> <span m='654870'>up</span> <span m='655170'>as</span>
  <span m='655350'>they</span> <span m='655460'>are</span> <span
  m='655570'>to</span> <span m='655620'>go</span> <span m='655770'>down.</span>
  <span m='656210'>You</span> <span m='656370'>can</span> <span m='656490'>see
  it on</span> <span m='656760'>some</span> <span m='656950'>of</span> <span
  m='656990'>the</span> <span m='657050'>other</span> <span
  m='657240'>past</span> <span m='657535'>quiz</span> <span
  m='657830'>problems</span> <span m='658150'>too.</span> </p><p><span
  m='659090'>Make</span> <span m='659290'>sure</span> <span
  m='660200'>that</span> <span m='660590'>you</span> <span
  m='660760'>check</span> <span m='660990'>the</span> <span
  m='661070'>connectivity,</span> <span m='661780'>and</span> <span
  m='661970'>also</span> <span m='662320'>note</span> <span
  m='662710'>that</span> <span m='662860'>unless</span> <span
  m='663250'>otherwise</span> <span m='663650'>specified--</span> <span
  m='664570'>and</span> <span m='664700'>I</span> <span m='664760'>don't</span>
  <span m='665100'>think</span> <span m='665250'>we've</span> <span
  m='665460'>really</span> <span m='665700'>done</span> <span
  m='665930'>this</span> <span m='666120'>much--</span> <span
  m='666980'>the</span> <span m='669160'>little</span> <span
  m='670250'>connecting</span> <span m='671040'>edges</span> <span
  m='671400'>in</span> <span m='671510'>our</span> <span
  m='671630'>graphs</span> <span m='672090'>are</span> <span
  m='672390'>bidirectional.</span> <span m='673390'>You'll</span> <span
  m='673570'>see</span> <span m='673790'>a</span> <span m='673840'>big</span>
  <span m='674370'>arrow,</span> <span m='674780'>and</span> <span
  m='674930'>probably</span> <span m='675320'>instructions</span> <span
  m='675930'>written</span> <span m='676190'>at</span> <span
  m='676280'>least</span> <span m='676920'>eight</span> <span
  m='677160'>font</span> <span m='677390'>sizes</span> <span
  m='677750'>higher</span> <span m='678050'>than</span> <span
  m='678180'>all</span> <span m='678360'>the</span> <span m='678450'>rest</span>
  <span m='678670'>of</span> <span m='678740'>them,</span> <span
  m='678900'>and</span> <span m='679080'>bold,</span> <span m='679570'>if</span>
  <span m='680270'>we're</span> <span m='680410'>going</span> <span
  m='680530'>to</span> <span m='680590'>do</span> <span
  m='680760'>something</span> <span m='681110'>different</span> <span
  m='681500'>for</span> <span m='681660'>this</span> <span
  m='681880'>quiz.</span> <span m='682610'>It</span> <span
  m='682750'>happens</span> <span m='683190'>that</span> <span
  m='683330'>they</span> <span m='683460'>do</span> <span m='683670'>it</span>
  <span m='683800'>sometimes,</span> <span m='684240'>where I'll  just</span>
  <span m='684610'>say in</span> <span m='685100'>recitation,</span> <span
  m='685430'>we</span> <span m='685520'>never</span> <span m='685740'>do</span>
  <span m='685890'>this.</span> <span m='686140'>And</span> <span
  m='686220'>then</span> <span m='686340'>on</span> <span m='686460'>the</span>
  <span m='686580'>quiz,</span> <span m='686680'>they</span> <span
  m='686880'>do</span> <span m='687100'>it.</span> </p><p><span
  m='687350'>But</span> <span m='688260'>it</span> <span m='688350'>will</span>
  <span m='688480'>be in</span> <span m='688770'>giant</span> <span
  m='689230'>bold</span> <span m='689510'>letters,</span> <span
  m='690200'>which</span> <span m='690380'>also</span> <span
  m='690680'>leads</span> <span m='690910'>me</span> <span m='691050'>to</span>
  <span m='691160'>another</span> <span m='691600'>silver</span> <span
  m='691900'>star</span> <span m='692090'>idea</span> <span
  m='692350'>that</span> <span m='692490'>I</span> <span
  m='692520'>forgot</span> <span m='693050'>to</span> <span
  m='693190'>tell</span> <span m='693400'>you</span> <span
  m='693460'>guys</span> <span m='693670'>last</span> <span m='693950'>week. 
  So</span> <span m='694220'>I</span> <span m='694300'>hope</span> <span
  m='694610'>people</span> <span m='694840'>didn't</span> <span
  m='695120'>ditch</span> <span m='695300'>out on</span> <span m='695585'>me,
  like,</span> <span m='695870'>oh,</span> <span m='696040'>Mark's</span> <span
  m='696310'>boring.</span> <span m='696670'>We won't</span> <span
  m='696820'>come</span> <span m='697010'>next</span> <span
  m='697250'>week.</span> <span m='697490'>And</span> <span
  m='697620'>then</span> <span m='697780'>miss</span> <span
  m='698020'>this</span> <span m='698160'>one</span> <span
  m='698890'>because</span> <span m='699420'>it</span> <span
  m='699530'>just</span> <span m='699710'>came</span> <span m='699860'>to</span>
  <span m='699910'>my</span> <span m='700010'>mind.</span> <span
  m='700380'>That</span> <span m='700540'>is,</span> <span
  m='701310'>read</span> <span m='701650'>the</span> <span
  m='701830'>instructions.</span> <span m='702975'>It is a</span> <span
  m='703320'>very</span> <span m='703730'>important</span> <span
  m='704140'>thing</span> <span m='704320'>for</span> <span
  m='704540'>the</span> <span m='704730'>quizzes,</span> <span
  m='705410'>and</span> <span m='706660'>Patrick</span> <span
  m='707070'>will,</span> <span m='707260'>in</span> <span m='707360'>a</span>
  <span m='707420'>later</span> <span m='707710'>lecture,</span> <span
  m='708140'>tell</span> <span m='708360'>you</span> <span
  m='708460'>guys,</span> <span m='708830'>ask</span> <span
  m='709080'>why</span> <span m='709400'>five</span> <span
  m='709730'>times,</span> <span m='710170'>and he'll</span> <span
  m='710420'>explain</span> <span m='710860'>why</span> <span
  m='711020'>that's</span> <span m='711200'>a</span> <span
  m='711240'>gold</span> <span m='711470'>star</span> <span
  m='711590'>idea.</span> </p><p><span m='712430'>My</span> <span
  m='712770'>parallel</span> <span m='713280'>to</span> <span
  m='713370'>this</span> <span m='713560'>is</span> <span m='713780'>read
  the</span> <span m='714150'>instructions</span> <span m='714800'>five</span>
  <span m='715130'>times.</span> <span m='715880'>Maybe</span> <span
  m='716110'>not</span> <span m='716340'>five,</span> <span
  m='716580'>maybe</span> <span m='716940'>three</span> <span
  m='717160'>or</span> <span m='717260'>four,</span> <span m='717640'>but</span>
  <span m='717830'>at</span> <span m='717970'>least</span> <span
  m='718460'>three.</span> <span m='719580'>Read</span> <span
  m='719670'>the</span> <span m='719750'>instructions.</span> <span
  m='721020'>Read</span> <span m='721240'>them</span> <span
  m='721330'>again.</span> <span m='722190'>Then</span> <span
  m='722360'>read</span> <span m='722520'>them</span> <span m='722610'>a</span>
  <span m='722770'>third</span> <span m='723080'>time</span> <span
  m='723310'>only</span> <span m='723570'>paying</span> <span
  m='723790'>attention</span> <span m='724180'>to</span> <span
  m='724280'>whatever</span> <span m='724710'>is</span> <span
  m='724820'>bold</span> <span m='725280'>and</span> <span
  m='725530'>eight</span> <span m='725930'>sizes</span> <span
  m='726310'>larger</span> <span m='726690'>than</span> <span
  m='726890'>all</span> <span m='727090'>the</span> <span
  m='727190'>other</span> <span m='727380'>ones,</span> <span
  m='727790'>cause</span> <span m='728250'>there's</span> <span
  m='728660'>going</span> <span m='728780'>to</span> <span m='728830'>be</span>
  <span m='728990'>something</span> <span m='729370'>there that's</span> <span
  m='729690'>that</span> <span m='730010'>size.</span> <span
  m='730680'>And</span> <span m='731010'>it</span> <span m='731180'>going</span>
  <span m='731360'>to</span> <span m='731410'>be</span> <span
  m='731950'>the</span> <span m='732200'>thing</span> <span
  m='732410'>that</span> <span m='732530'>everyone</span> <span
  m='732910'>misses.</span> <span m='733800'>So</span> <span
  m='734510'>make</span> <span m='734740'>sure</span> <span
  m='734880'>you're</span> <span m='735170'>not</span> <span
  m='735640'>everyone,</span> <span m='736750'>and</span> <span
  m='737080'>you</span> <span m='737220'>read the</span> <span
  m='737500'>instructions</span> <span m='737910'>a</span> <span
  m='737970'>lot</span> <span m='738160'>of</span> <span
  m='738270'>times.</span> </p><p><span m='739140'>But</span> <span
  m='739240'>anyway,</span> <span m='739900'>so</span> <span
  m='740110'>yeah,</span> <span m='740320'>we've</span> <span m='740460'>got
  it</span> <span m='740720'>right.</span> <span m='740990'>S</span> <span
  m='741190'>goes</span> <span m='741350'>to</span> <span m='741460'>A,</span>
  <span m='741600'>B,</span> <span m='741750'>and</span> <span
  m='741870'>C.</span> <span m='744160'>OK.</span> <span m='746140'>We're</span>
  <span m='746260'>looking</span> <span m='746570'>at</span> <span
  m='746690'>A,</span> <span m='746820'>B, and C</span> <span
  m='747220'>as</span> <span m='747330'>possibilities.</span> <span
  m='748070'>Everyone,</span> <span m='749040'>help</span> <span
  m='749290'>me</span> <span m='749400'>make</span> <span m='749590'>the</span>
  <span m='749660'>lexicographic</span> <span m='750380'>tiebreak.</span> <span
  m='751110'>Where</span> <span m='751340'>do</span> <span m='751400'>we</span>
  <span m='751500'>go?</span> </p><p><span m='752140'>AUDIENCE: A.</span>
  </p><p><span m='752760'>PROFESSOR: A.</span> <span m='753060'>That's</span>
  <span m='753310'>right.</span> <span m='757240'>Actually,</span> <span
  m='757690'>I'll</span> <span m='758030'>call</span> <span m='758210'>on</span>
  <span m='758350'>you</span> <span m='758430'>guys</span> <span
  m='758690'>for</span> <span m='759900'>other</span> <span
  m='760160'>ones,</span> <span m='760390'>but</span> <span
  m='760510'>that</span> <span m='760690'>first step</span> <span
  m='760980'>is</span> <span m='761150'>pretty</span> <span
  m='761340'>simple.</span> <span m='761670'>We</span> <span
  m='761790'>could</span> <span m='761930'>have</span> <span
  m='762100'>everyone</span> <span m='762420'>do it</span> <span
  m='762740'>together.</span> <span m='763390'>Everyone,</span> <span
  m='763790'>A</span> <span m='763990'>only</span> <span m='764210'>leads</span>
  <span m='764500'>to?</span> </p><p><span m='765100'>AUDIENCE: D.</span>
  </p><p><span m='765890'>PROFESSOR: That's</span> <span
  m='766110'>right.</span> <span m='766470'>Why</span> <span
  m='766680'>doesn't</span> <span m='766830'>it</span> <span
  m='766970'>lead</span> <span m='767210'>to</span> <span m='767340'>S</span>
  <span m='767670'>as</span> <span m='767750'>well?</span> </p><p><span
  m='769232'>AUDIENCE: [CHATTER]</span> </p><p><span m='770790'>PROFESSOR:
  No</span> <span m='771040'>biting</span> <span m='771340'>your</span> <span
  m='771480'>own</span> <span m='771650'>tail.</span> <span
  m='772100'>Everyone's</span> <span m='772510'>right.</span> <span
  m='773020'>Good</span> <span m='773180'>job,</span> <span
  m='773440'>everyone.</span> <span m='774220'>All right.</span> <span
  m='774480'>S</span> <span m='775830'>leads</span> <span m='776110'>to</span>
  <span m='776170'>these</span> <span m='776360'>three.</span> <span
  m='776460'>You</span> <span m='776600'>go</span> <span m='776720'>to</span>
  <span m='776830'>A,</span> <span m='777090'>go</span> <span m='777260'>to 
  D.</span> <span m='778950'>Dead</span> <span m='779210'>end.</span> <span
  m='781060'>Backtrack.</span> <span m='782170'>OK.</span> <span
  m='782455'>When</span> <span m='782740'>we</span> <span
  m='783020'>backtrack,</span> <span m='783770'>we</span> <span
  m='783850'>backtrack</span> <span m='784280'>up</span> <span
  m='784390'>to</span> <span m='784510'>A.</span> <span
  m='784760'>There's</span> <span m='785030'>no</span> <span
  m='785290'>other</span> <span m='785730'>children.</span> <span
  m='786450'>We</span> <span m='786530'>backtrack</span> <span
  m='786910'>up</span> <span m='787020'>to</span> <span m='787150'>S.</span>
  <span m='787780'>Where</span> <span m='788140'>will we</span> <span
  m='788270'>go</span> <span m='788410'>now?</span> </p><p><span
  m='789110'>AUDIENCE: B.</span> </p><p><span m='789540'>PROFESSOR: B.</span>
  <span m='789840'>It's</span> <span m='790010'>the</span> <span m='790140'>next
  one</span> <span m='790460'>alphabetically.</span> <span m='791110'>All</span>
  <span m='791210'>right.</span> <span m='791800'>B</span> <span
  m='792180'>can't</span> <span m='792480'>go</span> <span m='792590'>to</span>
  <span m='792690'>S,</span> <span m='792990'>so</span> <span
  m='793120'>it</span> <span m='793200'>only</span> <span m='793420'>goes</span>
  <span m='793700'>to?</span> </p><p><span m='794290'>AUDIENCE: H.</span>
  </p><p><span m='795190'>PROFESSOR: Yes.</span> <span m='795800'>When</span>
  <span m='796080'>we're at</span> <span m='796390'>H,</span> <span
  m='796920'>we</span> <span m='797130'>can</span> <span m='797300'>go</span>
  <span m='797530'>to?</span> </p><p><span m='798300'>AUDIENCE: [CHATTER]</span>
  </p><p><span m='799440'>PROFESSOR: F or</span> <span m='799810'>I.</span>
  <span m='800190'>That's</span> <span m='800310'>right.</span> <span
  m='801380'>You</span> <span m='801470'>guys</span> <span m='801740'>get</span>
  <span m='802050'>this.</span> <span m='802685'>Depth-first</span> <span
  m='802980'>search</span> <span m='803350'>is</span> <span
  m='803450'>easy.</span> <span m='804140'>All</span> <span
  m='804270'>right.</span> <span m='805080'>But</span> <span
  m='805300'>we</span> <span m='805440'>choose?</span> <span
  m='806900'>F.</span> <span m='807500'>That's</span> <span
  m='807720'>right.</span> <span m='808080'>When</span> <span
  m='808250'>we're</span> <span m='808440'>at F, we can</span> <span
  m='808850'>go</span> <span m='809010'>to?</span> <span m='810750'>E</span>
  <span m='810840'>and</span> <span m='811230'>J.</span> <span
  m='812045'>That's</span> <span m='812490'>right.</span> <span
  m='813450'>We'll</span> <span m='813630'>choose?</span> <span
  m='815030'>E.</span> <span m='815320'>When</span> <span m='815430'>we're
  at</span> <span m='815820'>E, we can</span> <span m='815930'>go</span> <span
  m='816230'>to?</span> <span m='819550'>We</span> <span m='820020'>can</span>
  <span m='820310'>go</span> <span m='820470'>to</span> <span
  m='820570'>C.</span> <span m='821060'>It's</span> <span m='821250'>not</span>
  <span m='821500'>on</span> <span m='821660'>this</span> <span
  m='821830'>particular</span> <span m='822220'>path.</span> <span
  m='822610'>People</span> <span m='823530'>are</span> <span
  m='823690'>correct</span> <span m='823980'>when</span> <span
  m='824090'>they</span> <span m='824200'>say</span> <span m='824410'>C.</span>
  <span m='825340'>When</span> <span m='825600'>we</span> <span
  m='825750'>go</span> <span m='825900'>to</span> <span m='825980'>C,</span>
  <span m='826300'>we</span> <span m='826430'>can</span> <span
  m='826660'>go</span> <span m='826840'>to</span> <span
  m='828040'>nowhere.</span> <span m='828680'>We're</span> <span
  m='828820'>dead.</span> <span m='829280'>Backtrack.</span> </p><p><span
  m='830350'>We</span> <span m='830500'>backtrack.</span> <span
  m='831230'>We</span> <span m='831690'>can't do</span> <span
  m='831930'>anything at</span> <span m='832340'>E.</span> <span m='832450'>We
  go</span> <span m='832600'>to</span> <span m='832750'>F.</span> <span
  m='833800'>Now</span> <span m='834890'>I</span> <span m='835020'>forgot</span>
  <span m='835430'>to</span> <span m='835520'>tell</span> <span
  m='835760'>you</span> <span m='835880'>guys,</span> <span m='836190'>but this
  is</span> <span m='836310'>an</span> <span m='836370'>important</span> <span
  m='836890'>note.</span> <span m='837380'>Someone's</span> <span
  m='837810'>going</span> <span m='837910'>to</span> <span m='837950'>get</span>
  <span m='838150'>this</span> <span m='838320'>wrong.</span> <span
  m='838920'>It's</span> <span m='839080'>going</span> <span
  m='839230'>to</span> <span m='839270'>be</span> <span m='839370'>one</span>
  <span m='839580'>of</span> <span m='839690'>you.</span> <span
  m='841200'>Look</span> <span m='841400'>around</span> <span
  m='841780'>you,</span> <span m='842130'>all through</span> <span
  m='842490'>the</span> <span m='842630'>room.</span> <span m='843410'>At</span>
  <span m='843510'>least</span> <span m='843790'>one</span> <span m='843980'>of
  you</span> <span m='844150'>is</span> <span m='844290'>going</span> <span
  m='844470'>to</span> <span m='844560'>do</span> <span m='844700'>this.</span>
  <span m='845730'>So,</span> <span m='845980'>now</span> <span
  m='846110'>I'm</span> <span m='846200'>going</span> <span m='846290'>to</span>
  <span m='846350'>tell</span> <span m='846520'>you</span> <span
  m='846630'>not</span> <span m='846860'>to</span> <span m='846950'>do</span>
  <span m='847110'>this,</span> <span m='847650'>and</span> <span
  m='847830'>then</span> <span m='848170'>hopefully,</span> <span
  m='849120'>that</span> <span m='849340'>will</span> <span
  m='849440'>still</span> <span m='850020'>be</span> <span
  m='850170'>true,</span> <span m='850420'>but</span> <span
  m='850710'>for</span> <span m='851060'>fewer</span> <span
  m='851280'>people.</span> </p><p><span m='852350'>When</span> <span
  m='852570'>I</span> <span m='852670'>went</span> <span m='852920'>to</span>
  <span m='853040'>D,</span> <span m='853786'>and</span> <span
  m='854160'>then</span> <span m='854270'>I</span> <span
  m='854340'>backtracked,</span> <span m='854610'>and</span> <span
  m='854880'>I</span> <span m='854960'>went</span> <span m='855160'>to</span>
  <span m='855250'>S,</span> <span m='855550'>how</span> <span
  m='855750'>many</span> <span m='855940'>times</span> <span
  m='856260'>did</span> <span m='856360'>I</span> <span
  m='856450'>backtrack?</span> <span m='858870'>Once.</span> <span
  m='860760'>I</span> <span m='860880'>backtracked</span> <span
  m='861320'>once.</span> <span m='862100'>This</span> <span
  m='862310'>would</span> <span m='862460'>have</span> <span
  m='862520'>been</span> <span m='862690'>more</span> <span
  m='862920'>obvious</span> <span m='863390'>if</span> <span
  m='863510'>we</span> <span m='863590'>were</span> <span
  m='863670'>doing</span> <span m='863920'>the</span> <span
  m='864050'>really</span> <span m='864400'>slow</span> <span
  m='864790'>boring</span> <span m='865150'>agenda</span> <span
  m='865490'>way,</span> <span m='866480'>or</span> <span
  m='866600'>queue</span> <span m='866870'>way,</span> <span
  m='867930'>because</span> <span m='869050'>when</span> <span
  m='869250'>we</span> <span m='869380'>got</span> <span m='869680'>to</span>
  <span m='870100'>SAD,</span> <span m='871990'>and</span> <span
  m='872060'>we</span> <span m='872130'>expanded</span> <span
  m='872690'>it,</span> <span m='872900'>and</span> <span
  m='873000'>there</span> <span m='873080'>was</span> <span
  m='873210'>nothing</span> <span m='873510'>left,</span> <span
  m='874810'>we</span> <span m='875020'>throw</span> <span m='875330'>it</span>
  <span m='875390'>off</span> <span m='875570'>the</span> <span
  m='875670'>top</span> <span m='875870'>of</span> <span m='875950'>the</span>
  <span m='876040'>queue,</span> <span m='876380'>and</span> <span
  m='876460'>go</span> <span m='876570'>to</span> <span m='876640'>the</span>
  <span m='876750'>next</span> <span m='877000'>thing</span> <span
  m='877140'>on</span> <span m='877250'>the</span> <span
  m='877360'>queue.</span> <span m='877720'>And it</span> <span
  m='877920'>turns</span> <span m='878180'>out</span> <span
  m='878310'>the</span> <span m='878370'>next</span> <span m='878560'>thing on
  the</span> <span m='878770'>queue is</span> <span m='878990'>SB.</span> <span
  m='880130'>That</span> <span m='880510'>step</span> <span
  m='880650'>was</span> <span m='880740'>only</span> <span
  m='880930'>taken</span> <span m='881240'>once.</span> <span
  m='882840'>Since</span> <span m='883050'>we're</span> <span
  m='883210'>using</span> <span m='883320'>the</span> <span
  m='883410'>goal</span> <span m='883700'>tree,</span> <span
  m='883890'>which</span> <span m='884020'>is</span> <span
  m='884140'>faster,</span> <span m='884490'>it</span> <span
  m='884630'>looked</span> <span m='884970'>like</span> <span
  m='885210'>we</span> <span m='885370'>did</span> <span m='885800'>two,</span>
  <span m='886750'>but</span> <span m='886860'>we</span> <span
  m='886990'>didn't.</span> <span m='887760'>And</span> <span
  m='888020'>if</span> <span m='888120'>you</span> <span m='888210'>use</span>
  <span m='888430'>the</span> <span m='888530'>queue,</span> <span
  m='888720'>you'll</span> <span m='888930'>see</span> <span
  m='889110'>that</span> <span m='889650'>because</span> <span
  m='889830'>it'll</span> <span m='890000'>go</span> <span m='891040'>S,</span>
  <span m='891520'>and</span> <span m='891650'>then</span> <span
  m='891740'>we</span> <span m='891870'>expand</span> <span
  m='892080'>that,</span> <span m='892220'>SASBSC.</span> <span
  m='892510'>SBIC</span> <span m='893490'>OK.</span> <span m='893690'>We</span>
  <span m='893800'>expand</span> <span m='894020'>SA.</span> <span
  m='894430'>SADSBSC.</span> <span m='895990'>We</span> <span
  m='896110'>expand</span> <span m='896400'>SAD.</span> <span
  m='896740'>It's</span> <span m='897220'>dead.</span> <span
  m='897550'>SBSC.</span> <span m='898660'>One</span> <span
  m='898900'>backtrack.</span> <span m='899540'>We're</span> <span
  m='899770'>back at</span> <span m='900155'>SB.</span> </p><p><span
  m='900930'>So,</span> <span m='901130'>so</span> <span m='901320'>far</span>
  <span m='901510'>we've</span> <span m='901700'>done</span> <span
  m='901940'>two,</span> <span m='902260'>not</span> <span
  m='902570'>four.</span> <span m='904650'>It's</span> <span
  m='904890'>pretty</span> <span m='905220'>intuitive</span> <span
  m='905750'>to</span> <span m='905870'>say</span> <span m='906080'>that</span>
  <span m='906210'>you</span> <span m='906330'>did</span> <span
  m='906560'>two</span> <span m='906750'>there.</span> <span
  m='907980'>It</span> <span m='908180'>turns</span> <span m='908380'>out</span>
  <span m='908520'>you</span> <span m='908620'>didn't</span> <span
  m='908970'>because</span> <span m='909430'>of</span> <span
  m='909730'>the</span> <span m='909880'>algorithm</span> <span
  m='910970'>that's</span> <span m='911160'>backing</span> <span
  m='912190'>what</span> <span m='912510'>lets</span> <span m='912730'>us</span>
  <span m='912870'>do</span> <span m='912980'>this</span> <span
  m='913170'>goal</span> <span m='913440'>tree</span> <span
  m='913710'>search.</span> <span m='915820'>So</span> <span
  m='916500'>try</span> <span m='916640'>to</span> <span m='916700'>make</span>
  <span m='916850'>sure</span> <span m='917030'>you're</span> <span
  m='917190'>not</span> <span m='917360'>the</span> <span m='917450'>one</span>
  <span m='917720'>who</span> <span m='917940'>says</span> <span
  m='918290'>two.</span> <span m='919850'>And</span> <span m='919980'>I,</span>
  <span m='920170'>on the other</span> <span m='920525'>hand,</span> <span
  m='920880'>will</span> <span m='920990'>try</span> <span m='921240'>to</span>
  <span m='922240'>make</span> <span m='922460'>sure</span> <span
  m='922700'>that</span> <span m='922880'>we</span> <span
  m='922990'>don't</span> <span m='923210'>take off</span> <span
  m='923440'>too</span> <span m='923560'>many</span> <span
  m='923730'>points</span> <span m='924170'>if</span> <span
  m='924280'>you</span> <span m='924380'>do.</span> <span
  m='924940'>Question?</span> </p><p><span m='925370'>AUDIENCE: So</span> <span
  m='925838'>any time you</span> <span m='926306'>backtrack,</span> <span
  m='927710'>regardless</span> <span m='928178'>of</span> <span m='929114'>how
  much it</span> <span m='929590'>chains,</span> <span m='930865'>any</span>
  <span m='931310'>backtracking</span> <span m='931760'>is just</span> <span
  m='932210'>considered</span> <span m='932660'>once.</span> </p><p><span
  m='932945'>PROFESSOR: It</span> <span m='933230'>is</span> <span
  m='933430'>always</span> <span m='933850'>going</span> <span
  m='933960'>to</span> <span m='934010'>be</span> <span
  m='934130'>considered</span> <span m='934630'>one</span> <span
  m='934910'>step.</span> <span m='936580'>It's</span> <span
  m='936760'>possible</span> <span m='937260'>to</span> <span
  m='937360'>backtrack</span> <span m='937770'>two</span> <span
  m='937910'>times</span> <span m='938200'>in a</span> <span
  m='938370'>row.</span> <span m='938740'>Like,</span> <span
  m='939110'>if</span> <span m='939410'>B</span> <span m='939710'>didn't</span>
  <span m='939890'>go</span> <span m='939980'>to</span> <span
  m='940060'>anything,</span> <span m='940650'>instead</span> <span
  m='940930'>of</span> <span m='941000'>going</span> <span m='941160'>to</span>
  <span m='941280'>H,</span> <span m='942110'>then</span> <span
  m='942440'>we</span> <span m='942550'>might</span> <span
  m='942780'>backtrack</span> <span m='943100'>twice</span> <span
  m='943420'>before</span> <span m='943660'>we</span> <span
  m='943770'>got</span> <span m='943940'>to</span> <span m='944000'>SC.</span>
  <span m='945370'>Generally,</span> <span m='945860'>anytime</span> <span
  m='946320'>you</span> <span m='946430'>draw a</span> <span
  m='946860'>swizzle,</span> <span m='947080'>if</span> <span
  m='947420'>you're</span> <span m='947530'>like</span> <span m='947750'>me, and
  you</span> <span m='948060'>draw a</span> <span m='948330'>swizzle--</span>
  <span m='948690'>I</span> <span m='948790'>suggest</span> <span
  m='949150'>the</span> <span m='949230'>swizzles.</span> <span
  m='949690'>They're</span> <span m='949740'>very</span> <span
  m='950020'>nice</span> <span m='950560'>little</span> <span
  m='951040'>things.</span> <span m='951570'>But</span> <span
  m='951980'>any</span> <span m='952190'>time</span> <span m='952380'>you</span>
  <span m='952440'>draw a</span> <span m='952760'>swizzle</span> <span
  m='952920'>on</span> <span m='953180'>your</span> <span
  m='953310'>graph,</span> <span m='953980'>you</span> <span
  m='954210'>have</span> <span m='954350'>backtracked</span> <span
  m='955360'>once.</span> <span m='956450'>You</span> <span
  m='956570'>could</span> <span m='956700'>even</span> <span
  m='956860'>write</span> <span m='957200'>BT</span> <span
  m='957680'>next</span> <span m='957840'>to</span> <span m='957920'>the</span>
  <span m='958000'>swizzle,</span> <span m='958750'>and</span> <span
  m='958940'>go</span> <span m='959070'>back</span> <span m='959190'>and</span>
  <span m='959390'>count</span> <span m='959600'>those,</span> <span
  m='959910'>or</span> <span m='960110'>even</span> <span m='960300'>just</span>
  <span m='960510'>count</span> <span m='960740'>the</span> <span
  m='960880'>swizzles</span> <span m='961270'>at</span> <span
  m='961420'>the</span> <span m='961550'>end.</span> <span m='961940'>You've
  got</span> <span m='962380'>it.</span> <span m='962820'>You got</span> <span
  m='963000'>the</span> <span m='963080'>answer.</span> <span
  m='963510'>Because</span> <span m='963600'>they</span> <span
  m='963720'>often</span> <span m='964030'>ask,</span> <span
  m='964660'>how</span> <span m='964800'>many</span> <span
  m='964920'>times</span> <span m='965180'>have you</span> <span
  m='965370'>backtracked?</span> </p><p><span m='968910'>All</span> <span
  m='969110'>right.</span> <span m='969330'>So</span> <span
  m='970080'>good</span> <span m='970290'>questions,</span> <span
  m='970730'>everyone.</span> <span m='971590'>So anyway,</span> <span
  m='972050'>we</span> <span m='972270'>backtracked</span> <span
  m='972700'>from</span> <span m='972850'>C.</span> <span m='973790'>Nothing
  at</span> <span m='974120'>E.</span> <span m='974320'>We</span> <span
  m='974430'>go</span> <span m='974560'>back.</span> <span m='974740'>We</span>
  <span m='974830'>were</span> <span m='975290'>at</span> <span
  m='975520'>F.</span> <span m='976300'>So</span> <span m='976580'>we</span>
  <span m='976690'>were</span> <span m='976750'>at</span> <span
  m='977050'>SBHF.</span> <span m='978460'>We</span> <span m='978580'>go</span>
  <span m='978800'>to</span> <span m='979590'>J.</span> <span m='980060'>It's
  the</span> <span m='980190'>only</span> <span m='980430'>choice.</span> <span
  m='981090'>At</span> <span m='981290'>J,</span> <span m='981720'>we</span>
  <span m='981850'>can</span> <span m='981980'>only</span> <span
  m='982180'>go</span> <span m='982350'>to?</span> </p><p><span
  m='983265'>AUDIENCE: I.</span> </p><p><span m='983680'>PROFESSOR: And
  at</span> <span m='984010'>I,</span> <span m='984270'>we can</span> <span
  m='984490'>only</span> <span m='984680'>go</span> <span m='984840'>to?</span>
  <span m='986140'>And</span> <span m='986540'>we</span> <span
  m='986670'>win.</span> <span m='988000'>It's</span> <span
  m='988200'>not</span> <span m='988400'>an</span> <span
  m='988500'>optimal</span> <span m='988940'>search,</span> <span m='989270'>so
  as</span> <span m='989440'>soon</span> <span m='989660'>as</span> <span
  m='989740'>we</span> <span m='989870'>see</span> <span
  m='990440'>anything</span> <span m='990950'>with a</span> <span m='991070'>G
  on</span> <span m='991570'>the</span> <span m='991650'>queue,</span> <span
  m='992770'>boom.</span> <span m='993450'>Winner.</span> <span
  m='995310'>All</span> <span m='995410'>right.</span> <span
  m='996020'>And</span> <span m='997250'>we're</span> <span
  m='997450'>done.</span> <span m='997960'>We</span> <span m='998110'>did</span>
  <span m='998310'>it.</span> <span m='998830'>That</span> <span
  m='998990'>wasn't</span> <span m='999300'>too</span> <span
  m='999450'>bad.</span> <span m='1000440'>For</span> <span
  m='1000580'>those</span> <span m='1000820'>of</span> <span
  m='1000920'>you</span> <span m='1001100'>who</span> <span
  m='1001230'>are</span> <span m='1001370'>vaguely</span> <span
  m='1001810'>interested</span> <span m='1002210'>in</span> <span
  m='1002290'>seeing</span> <span m='1002550'>how</span> <span
  m='1002810'>I</span> <span m='1002930'>would</span> <span
  m='1003130'>do</span> <span m='1003330'>it</span> <span m='1004290'>the</span>
  <span m='1004500'>really</span> <span m='1004860'>super</span> <span
  m='1005140'>fast</span> <span m='1005420'>way,</span> <span m='1005590'>it
  goes</span> <span m='1005740'>something</span> <span m='1005970'>like</span>
  <span m='1006110'>this.</span> </p><p><span m='1006420'>All right.</span>
  <span m='1006850'>ABC.</span> <span m='1007400'>A</span> <span
  m='1007630'>comes</span> <span m='1007740'>first.</span> <span
  m='1008520'>Only</span> <span m='1008920'>D.</span> <span
  m='1009140'>Backtrack.</span> <span m='1011412'>All right.</span> <span
  m='1011860'>B</span> <span m='1011940'>comes</span> <span
  m='1012300'>first.</span> <span m='1013360'>H.</span> <span
  m='1014560'>F</span> <span m='1014720'>comes</span> <span
  m='1014950'>first.</span> <span m='1015630'>E.</span> <span
  m='1016480'>C.</span> <span m='1017060'>Nothing.</span> <span
  m='1017350'>Backtrack.</span> <span m='1020250'>We</span> <span
  m='1020410'>came</span> <span m='1020660'>that</span> <span
  m='1020830'>way.</span> <span m='1021240'>JIG.</span> <span
  m='1024450'>So</span> <span m='1024800'>that's</span> <span
  m='1025040'>the</span> <span m='1025160'>really</span> <span
  m='1025400'>fast</span> <span m='1025640'>way to</span> <span
  m='1025880'>do</span> <span m='1025960'>depth-first</span> <span
  m='1026160'>search.</span> <span m='1026940'>Don't</span> <span
  m='1027190'>do</span> <span m='1027359'>that,</span> <span
  m='1027750'>kids.</span> <span m='1028950'>We</span> <span
  m='1029099'>don't</span> <span m='1029369'>like--</span> <span
  m='1030050'>well,</span> <span m='1030740'>maybe</span> <span
  m='1031010'>you</span> <span m='1031140'>can.</span> <span
  m='1032210'>If</span> <span m='1032329'>you</span> <span
  m='1032430'>get</span> <span m='1032599'>it</span> <span
  m='1032690'>right,</span> <span m='1032980'>we're</span> <span
  m='1033089'>not</span> <span m='1033270'>going</span> <span
  m='1033380'>to</span> <span m='1033470'>take</span> <span
  m='1034630'>off</span> <span m='1034780'>points</span> <span
  m='1035200'>usually.</span> <span m='1036349'>Generally,</span> <span
  m='1036859'>when</span> <span m='1037000'>we</span> <span
  m='1037089'>say</span> <span m='1037290'>draw</span> <span
  m='1037520'>the</span> <span m='1037640'>goal</span> <span
  m='1037910'>tree</span> <span m='1038140'>below,</span> <span
  m='1038720'>it's</span> <span m='1038920'>just</span> <span
  m='1039140'>assigned</span> <span m='1039280'>partial</span> <span
  m='1039660'>credit.</span> </p><p><span m='1040250'>However,</span> <span
  m='1040700'>we</span> <span m='1040859'>are</span> <span
  m='1041050'>pretty</span> <span m='1041730'>strict</span> <span
  m='1042099'>about</span> <span m='1042349'>that.</span> <span
  m='1042990'>If</span> <span m='1043310'>anything</span> <span
  m='1043950'>is</span> <span m='1044089'>wrong,</span> <span
  m='1045420'>except</span> <span m='1045520'>for</span> <span
  m='1045780'>maybe,</span> <span m='1046060'>like,</span> <span
  m='1046369'>OK,</span> <span m='1046660'>you</span> <span
  m='1046780'>write</span> <span m='1047079'>everything</span> <span
  m='1047430'>exactly</span> <span m='1047760'>right,</span> <span
  m='1047990'>and</span> <span m='1048130'>forget</span> <span
  m='1048520'>G</span> <span m='1048760'>at</span> <span m='1048870'>the</span>
  <span m='1048990'>end.</span> <span m='1049510'>If</span> <span
  m='1049680'>anything</span> <span m='1050180'>that's</span> <span
  m='1050340'>not</span> <span m='1050580'>completely</span> <span
  m='1051120'>understandable</span> <span m='1051760'>is</span> <span
  m='1051850'>wrong,</span> <span m='1052100'>you</span> <span
  m='1052190'>will</span> <span m='1052310'>probably</span> <span
  m='1052660'>lose</span> <span m='1053110'>all of</span> <span
  m='1053610'>the</span> <span m='1053700'>points,</span> <span m='1054070'>and
  it'll</span> <span m='1054300'>be</span> <span m='1054400'>a</span> <span
  m='1054470'>lot</span> <span m='1054670'>of</span> <span
  m='1054770'>points</span> <span m='1055020'>if</span> <span
  m='1055120'>you</span> <span m='1055210'>don't draw</span> <span
  m='1055410'>the goal</span> <span m='1055880'>tree.</span> <span
  m='1057450'>I</span> <span m='1057580'>will</span> <span
  m='1057870'>emphasize</span> <span m='1058970'>drawing</span> <span
  m='1059190'>the</span> <span m='1059260'>goal</span> <span
  m='1059550'>tree</span> <span m='1059840'>is</span> <span m='1060000'>a</span>
  <span m='1060050'>good</span> <span m='1060240'>idea.</span> </p><p><span
  m='1061970'>All</span> <span m='1062020'>right.</span> <span
  m='1062450'>So</span> <span m='1062920'>now</span> <span
  m='1063060'>let's</span> <span m='1063240'>do</span> <span
  m='1063360'>a</span> <span m='1063460'>breadth-first</span> <span
  m='1064090'>search.</span> <span m='1066130'>Before</span> <span
  m='1066450'>we</span> <span m='1066560'>do</span> <span m='1066770'>the</span>
  <span m='1066880'>breadth-first</span> <span m='1067390'>search</span> <span
  m='1067670'>on</span> <span m='1068350'>this</span> <span
  m='1068440'>tree,</span> <span m='1069740'>I</span> <span
  m='1069970'>will</span> <span m='1070210'>tell</span> <span
  m='1070450'>you</span> <span m='1070570'>guys</span> <span
  m='1071110'>that</span> <span m='1071420'>there</span> <span
  m='1071570'>is</span> <span m='1071810'>also</span> <span m='1072200'>a</span>
  <span m='1072260'>fast</span> <span m='1072590'>way</span> <span
  m='1072800'>to do the</span> <span m='1073060'>breadth-first</span> <span
  m='1073470'>search</span> <span m='1074790'>which</span> <span
  m='1075200'>is</span> <span m='1075450'>less</span> <span
  m='1075740'>risky,</span> <span m='1076550'>and</span> <span
  m='1076800'>it</span> <span m='1076890'>really</span> <span
  m='1077080'>depends</span> <span m='1077410'>on</span> <span
  m='1077520'>how</span> <span m='1077690'>nice</span> <span
  m='1078090'>they</span> <span m='1078280'>are</span> <span
  m='1078650'>about</span> <span m='1078990'>what</span> <span
  m='1079250'>they</span> <span m='1079470'>ask</span> <span
  m='1079900'>for.</span> <span m='1081060'>In</span> <span
  m='1081220'>this</span> <span m='1081410'>case,</span> <span m='1081660'>the
  breadth-first</span> <span m='1082230'>search</span> <span
  m='1082640'>question</span> <span m='1082970'>asks,</span> <span
  m='1083250'>what</span> <span m='1083600'>path</span> <span
  m='1084170'>does</span> <span m='1084310'>Mark</span> <span
  m='1084740'>find</span> <span m='1085260'>using</span> <span
  m='1085710'>breadth-first search?</span> <span m='1086100'>Rather</span> <span
  m='1086370'>than</span> <span m='1086520'>saying,</span> <span
  m='1087050'>what</span> <span m='1087300'>nodes does</span> <span
  m='1087710'>he</span> <span m='1087850'>expand</span> <span
  m='1088140'>in</span> <span m='1088260'>order,</span> <span
  m='1088820'>or</span> <span m='1089140'>anything</span> <span
  m='1089450'>like</span> <span m='1089630'>that.</span> </p><p><span
  m='1090065'>That</span> <span m='1090500'>is</span> <span
  m='1090580'>important.</span> <span m='1091350'>If</span> <span
  m='1091510'>that</span> <span m='1091770'>question</span> <span
  m='1092140'>is</span> <span m='1092320'>asked</span> <span
  m='1092790'>you,</span> <span m='1093750'>there</span> <span
  m='1094010'>is</span> <span m='1094350'>a</span> <span
  m='1094510'>trick</span> <span m='1094980'>that</span> <span
  m='1095100'>will</span> <span m='1095240'>let</span> <span
  m='1095410'>you</span> <span m='1095520'>solve</span> <span
  m='1095950'>it</span> <span m='1096070'>very,</span> <span
  m='1096620'>very</span> <span m='1096930'>quickly.</span> <span
  m='1097650'>In</span> <span m='1097780'>fact,</span> <span
  m='1098150'>faster</span> <span m='1098445'>than</span> <span
  m='1098740'>depth-first search.</span> <span m='1099020'>You</span> <span
  m='1099400'>can</span> <span m='1099510'>solve</span> <span
  m='1099780'>it</span> <span m='1099890'>by</span> <span
  m='1100010'>inspection</span> <span m='1100315'>in</span> <span
  m='1100620'>about</span> <span m='1100910'>30</span> <span
  m='1101170'>seconds.</span> <span m='1102030'>Does</span> <span
  m='1102150'>anyone</span> <span m='1102600'>know what</span> <span
  m='1102830'>the</span> <span m='1102950'>answer</span> <span
  m='1103270'>is?</span> <span m='1103890'>What</span> <span m='1104110'>path
  did he</span> <span m='1104450'>find?</span> </p><p><span
  m='1104924'>AUDIENCE: [CHATTER]</span> </p><p><span m='1106820'>PROFESSOR:
  That's</span> <span m='1107150'>correct.</span> <span m='1107390'>So</span>
  <span m='1107500'>the answer</span> <span m='1107850'>is?</span> <span
  m='1109390'>On</span> <span m='1109560'>this</span> <span
  m='1109740'>graph,</span> <span m='1110040'>the answer</span> <span
  m='1110380'>is?</span> </p><p><span m='1111173'>AUDIENCE: SBHIG.</span>
  </p><p><span m='1112640'>PROFESSOR: SBHIG.</span> <span
  m='1113870'>That's</span> <span m='1114100'>the</span> <span
  m='1114200'>answer.</span> <span m='1114690'>You would</span> <span
  m='1114890'>have</span> <span m='1115200'>your</span> <span
  m='1115320'>five</span> <span m='1115610'>points.</span> <span
  m='1117400'>Did</span> <span m='1117540'>people</span> <span
  m='1117820'>see</span> <span m='1117970'>that?</span> <span
  m='1118660'>It</span> <span m='1118850'>doesn't</span> <span
  m='1119060'>always</span> <span m='1119340'>work,</span> <span
  m='1119620'>so</span> <span m='1119780'>we're</span> <span
  m='1119910'>going</span> <span m='1120050'>to</span> <span
  m='1120100'>actually</span> <span m='1120480'>solve</span> <span
  m='1120820'>it.</span> <span m='1121430'>But</span> <span
  m='1121590'>did</span> <span m='1121650'>everyone</span> <span
  m='1121990'>see</span> <span m='1122160'>that</span> <span
  m='1122350'>sometimes</span> <span m='1122860'>you</span> <span
  m='1122930'>can</span> <span m='1123050'>get</span> <span
  m='1123170'>away</span> <span m='1123310'>with</span> <span
  m='1123430'>not</span> <span m='1123690'>doing</span> <span
  m='1123970'>it?</span> <span m='1124150'>Because</span> <span
  m='1124980'>breadth-first</span> <span m='1125330'>search</span> <span
  m='1125590'>is</span> <span m='1125720'>guaranteed</span> <span
  m='1126320'>to</span> <span m='1126410'>give</span> <span
  m='1126640'>you</span> <span m='1126800'>the</span> <span
  m='1127120'>path,</span> <span m='1127900'>as</span> <span
  m='1128360'>we</span> <span m='1128660'>heard</span> <span
  m='1128860'>correctly,</span> <span m='1129510'>with</span> <span
  m='1129680'>the</span> <span m='1129770'>least</span> <span
  m='1130040'>number</span> <span m='1130230'>of</span> <span
  m='1130330'>jumps,</span> <span m='1131300'>and</span> <span
  m='1132050'>if</span> <span m='1132220'>there are</span> <span
  m='1132340'>more</span> <span m='1132510'>than</span> <span
  m='1132630'>one</span> <span m='1132950'>that</span> <span
  m='1133090'>tie</span> <span m='1133400'>with the</span> <span
  m='1133530'>least</span> <span m='1133650'>number of jumps,</span> <span
  m='1134150'>you</span> <span m='1134320'>can</span> <span
  m='1134460'>just</span> <span m='1135090'>lexicographically</span> <span
  m='1135960'>figure</span> <span m='1136280'>it</span> <span
  m='1136350'>out,</span> <span m='1136630'>in</span> <span
  m='1136730'>this</span> <span m='1136910'>case</span> <span
  m='1137180'>with</span> <span m='1137350'>actual</span> <span
  m='1137690'>dictionary</span> <span m='1138200'>order.</span> </p><p><span
  m='1139470'>But</span> <span m='1140220'>SBHIG</span> <span
  m='1140880'>is</span> <span m='1140980'>the</span> <span
  m='1141060'>only</span> <span m='1141300'>one.</span> <span
  m='1142320'>Let's</span> <span m='1142600'>do</span> <span
  m='1142800'>an</span> <span m='1142920'>actual</span> <span
  m='1143390'>breadth-first</span> <span m='1143940'>search</span> <span
  m='1144210'>though,</span> <span m='1144500'>so</span> <span
  m='1144710'>we</span> <span m='1144830'>can</span> <span
  m='1145050'>feel</span> <span m='1145270'>better</span> <span
  m='1145560'>about</span> <span m='1145780'>ourselves.</span> <span
  m='1147680'>OK.</span> <span m='1148370'>So</span> <span
  m='1150380'>you've</span> <span m='1150530'>got</span> <span
  m='1150800'>S,</span> <span m='1151500'>and</span> <span m='1151830'>S</span>
  <span m='1152110'>goes</span> <span m='1152440'>to,</span> <span
  m='1152790'>as</span> <span m='1152970'>we</span> <span m='1153070'>saw</span>
  <span m='1153270'>before,</span> <span m='1153680'>ABC.</span> <span
  m='1155430'>Maybe</span> <span m='1156700'>that doesn't</span> <span
  m='1157100'>have</span> <span m='1157230'>to</span> <span
  m='1157300'>go</span> <span m='1157470'>quite</span> <span
  m='1157700'>so</span> <span m='1157860'>high.</span> <span
  m='1160040'>All</span> <span m='1160130'>right.</span> <span m='1160590'>As
  we</span> <span m='1160810'>saw</span> <span m='1161190'>before,</span> <span
  m='1161420'>S</span> <span m='1161580'>goes</span> <span m='1161750'>to</span>
  <span m='1161830'>ABC.</span> <span m='1163440'>And</span> <span
  m='1163820'>you</span> <span m='1163970'>already</span> <span
  m='1164210'>told</span> <span m='1164470'>me</span> <span
  m='1164570'>that</span> <span m='1164830'>A goes</span> <span
  m='1165100'>to</span> <span m='1165210'>D,</span> <span m='1165910'>and</span>
  <span m='1166210'>you</span> <span m='1166300'>told</span> <span
  m='1166490'>me</span> <span m='1166560'>that</span> <span m='1166660'>B goes
  to</span> <span m='1167140'>H.</span> <span m='1168140'>But</span> <span
  m='1168340'>what</span> <span m='1168530'>does</span> <span
  m='1168690'>C</span> <span m='1168940'>go</span> <span m='1169140'>to?</span>
  <span m='1170820'>E.</span> <span m='1171390'>That's</span> <span
  m='1171600'>right.</span> </p><p><span m='1172830'>As you</span> <span
  m='1173310'>can</span> <span m='1173420'>see,</span> <span
  m='1173600'>we're</span> <span m='1173750'>expanding</span> <span
  m='1174170'>it</span> <span m='1174260'>level</span> <span
  m='1174540'>by</span> <span m='1174690'>level,</span> <span
  m='1175310'>left</span> <span m='1175590'>to</span> <span
  m='1175710'>right.</span> <span m='1177170'>All</span> <span
  m='1177270'>right.</span> <span m='1178080'>So</span> <span
  m='1179060'>SAD,</span> <span m='1181830'>were</span> <span
  m='1182100'>does</span> <span m='1182330'>SAD</span> <span
  m='1183000'>go</span> <span m='1183210'>to?</span> <span
  m='1185260'>SAD</span> <span m='1186010'>goes</span> <span
  m='1186310'>to</span> <span m='1186410'>nowhere.</span> <span
  m='1186950'>It's</span> <span m='1187160'>dead.</span> <span
  m='1188300'>SBH.</span> <span m='1189580'>Now,</span> <span
  m='1189750'>wait.</span> <span m='1190090'>You</span> <span
  m='1190230'>might</span> <span m='1190470'>say,</span> <span
  m='1190740'>wait</span> <span m='1190850'>a</span> <span
  m='1190890'>minute.</span> <span m='1191110'>Patrick</span> <span
  m='1191520'>said</span> <span m='1191740'>that</span> <span
  m='1191890'>we're</span> <span m='1192340'>using</span> <span
  m='1192660'>this</span> <span m='1192810'>weird</span> <span
  m='1193050'>dictionary</span> <span m='1193490'>order</span> <span
  m='1193720'>where</span> <span m='1193890'>E</span> <span
  m='1194430'>is</span> <span m='1194640'>at the</span> <span m='1194780'>end
  that</span> <span m='1194950'>comes</span> <span m='1195210'>before</span>
  <span m='1195410'>H.</span> <span m='1196300'>That's</span> <span
  m='1196560'>our</span> <span m='1196700'>tiebreak</span> <span
  m='1197210'>order,</span> <span m='1197850'>but</span> <span
  m='1198040'>it</span> <span m='1198160'>turns</span> <span
  m='1198390'>out</span> <span m='1198720'>that</span> <span
  m='1199110'>breadth-first</span> <span m='1199360'>search</span> <span
  m='1199680'>and</span> <span m='1199790'>depth-first search</span> <span
  m='1200280'>don't</span> <span m='1200570'>sort</span> <span
  m='1201760'>in</span> <span m='1201910'>any</span> <span
  m='1202120'>way.</span> <span m='1203860'>It's</span> <span
  m='1204050'>very</span> <span m='1204240'>important.</span> <span
  m='1204510'>They</span> <span m='1204610'>don't</span> <span
  m='1205040'>sort</span> <span m='1205630'>the</span> <span
  m='1205750'>paths</span> <span m='1206090'>that are</span> <span
  m='1206230'>currently</span> <span m='1206630'>on</span> <span
  m='1206960'>the</span> <span m='1207040'>queue.</span> </p><p><span
  m='1207830'>So</span> <span m='1208640'>you're</span> <span
  m='1208910'>going</span> <span m='1209090'>to</span> <span
  m='1209170'>just</span> <span m='1209500'>go</span> <span
  m='1210390'>left</span> <span m='1210710'>to</span> <span
  m='1210840'>right,</span> <span m='1211470'>left to</span> <span
  m='1211820'>right,</span> <span m='1212490'>left</span> <span
  m='1212800'>to</span> <span m='1212910'>right.</span> <span
  m='1213300'>And</span> <span m='1213490'>only</span> <span
  m='1213760'>at</span> <span m='1213910'>each</span> <span m='1214140'>node
  are</span> <span m='1214460'>you</span> <span m='1214630'>going</span> <span
  m='1214740'>to</span> <span m='1214790'>break</span> <span
  m='1215410'>ties</span> <span m='1215930'>in</span> <span
  m='1216060'>lexicographic</span> <span m='1216320'>order.</span> <span
  m='1216710'>All right?</span> <span m='1217820'>So</span> <span
  m='1218580'>SBH.</span> <span m='1219080'>H</span> <span
  m='1219580'>goes</span> <span m='1219870'>to,</span> <span
  m='1220150'>as</span> <span m='1220370'>we</span> <span
  m='1220620'>already</span> <span m='1220930'>know,</span> <span
  m='1221230'>F</span> <span m='1221450'>and</span> <span m='1221630'>I.</span>
  <span m='1225130'>E,</span> <span m='1225630'>we</span> <span
  m='1226130'>think</span> <span m='1226360'>we</span> <span
  m='1226490'>already</span> <span m='1226720'>know,</span> <span
  m='1226980'>but</span> <span m='1227160'>we</span> <span
  m='1227280'>don't</span> <span m='1227570'>quite</span> <span
  m='1227920'>because</span> <span m='1228290'>this</span> <span
  m='1228440'>is</span> <span m='1228560'>E coming</span> <span
  m='1228890'>from</span> <span m='1228990'>the</span> <span
  m='1229080'>other</span> <span m='1229230'>direction.</span> <span
  m='1229580'>E,</span> <span m='1229780'>this</span> <span
  m='1229950'>time</span> <span m='1230130'>goes</span> <span
  m='1230400'>to</span> <span m='1231420'>F.</span> <span
  m='1231750'>That's</span> <span m='1231960'>right.</span> <span
  m='1232250'>Well,</span> <span m='1232390'>actually,</span> <span
  m='1232650'>you</span> <span m='1232740'>guys</span> <span
  m='1233060'>do</span> <span m='1233180'>already</span> <span m='1233450'>know
  it.</span> <span m='1233860'>All right.</span> <span m='1234170'>Great.</span>
  </p><p><span m='1234860'>Now</span> <span m='1235060'>we</span> <span
  m='1235150'>come</span> <span m='1235320'>over</span> <span
  m='1235520'>here.</span> <span m='1236430'>HF</span> <span
  m='1237270'>goes</span> <span m='1237610'>to,</span> <span
  m='1237790'>as</span> <span m='1237930'>we</span> <span
  m='1238050'>already</span> <span m='1238270'>know,</span> <span m='1238530'>E
  and</span> <span m='1238820'>J.</span> <span m='1242610'>I</span> <span
  m='1243400'>goes</span> <span m='1243730'>to,</span> <span
  m='1244210'>as</span> <span m='1244860'>we</span> <span
  m='1245570'>don't</span> <span m='1245890'>already</span> <span
  m='1246150'>know,</span> <span m='1246810'>HI</span> <span
  m='1247320'>goes</span> <span m='1247720'>to</span> <span m='1250060'>G</span>
  <span m='1250370'>and</span> <span m='1250510'>J.</span> <span
  m='1250865'>That's</span> <span m='1251220'>right.</span> <span
  m='1256100'>And</span> <span m='1256680'>as</span> <span m='1256890'>it</span>
  <span m='1257090'>turns</span> <span m='1257580'>out,</span> <span
  m='1257870'>by</span> <span m='1258000'>an</span> <span
  m='1258070'>implementation</span> <span m='1258740'>detail,</span> <span
  m='1259130'>we're</span> <span m='1259250'>done.</span> <span
  m='1262980'>Questions?</span> <span m='1263570'>Does</span> <span
  m='1263680'>it</span> <span m='1263760'>not</span> <span m='1264050'>expand
  depth</span> <span m='1264420'>at all?</span> <span m='1264710'>Now</span>
  <span m='1264800'>this</span> <span m='1264950'>is</span> <span
  m='1265000'>an</span> <span m='1265120'>implementation</span> <span
  m='1265800'>detail.</span> <span m='1266290'>It's</span> <span
  m='1266720'>perfectly</span> <span m='1267550'>sane</span> <span
  m='1268710'>and</span> <span m='1268940'>reasonable</span> <span
  m='1269620'>to</span> <span m='1269730'>make</span> <span m='1269970'>a</span>
  <span m='1270840'>breadth-first</span> <span m='1271130'>search</span> <span
  m='1271520'>that</span> <span m='1272250'>likes</span> <span
  m='1272510'>to</span> <span m='1272600'>finish</span> <span
  m='1272900'>its</span> <span m='1273070'>entire</span> <span
  m='1273440'>level</span> <span m='1273760'>that it's</span> <span
  m='1273930'>working</span> <span m='1274240'>on.</span> <span
  m='1274990'>However,</span> <span m='1275270'>in</span> <span
  m='1275400'>our</span> <span m='1275540'>implementation,</span> <span
  m='1276300'>and</span> <span m='1276400'>we</span> <span
  m='1276520'>would</span> <span m='1276630'>have</span> <span
  m='1276720'>seen</span> <span m='1276910'>this</span> <span
  m='1277070'>if</span> <span m='1277190'>we</span> <span m='1277400'>had</span>
  <span m='1277570'>been</span> <span m='1278010'>pedantic</span> <span
  m='1278350'>and</span> <span m='1278470'>drawn</span> <span
  m='1278740'>out</span> <span m='1278800'>the</span> <span
  m='1278890'>entire</span> <span m='1279220'>queue--</span> <span
  m='1279970'>that's</span> <span m='1280100'>another</span> <span
  m='1280420'>reason</span> <span m='1280650'>why</span> <span
  m='1280790'>drawing</span> <span m='1281010'>out</span> <span
  m='1281070'>the</span> <span m='1281160'>entire</span> <span
  m='1281460'>queue</span> <span m='1281800'>is,</span> <span m='1282040'>as
  I</span> <span m='1282330'>said,</span> <span m='1282400'>more</span> <span
  m='1282590'>reliable.</span> </p><p><span m='1284700'>In</span> <span
  m='1284880'>our</span> <span m='1285110'>implementation,</span> <span
  m='1285780'>since</span> <span m='1286060'>it's</span> <span
  m='1286220'>not</span> <span m='1286540'>an</span> <span
  m='1286650'>optimal</span> <span m='1287050'>search,</span> <span
  m='1287480'>the</span> <span m='1287670'>moment</span> <span
  m='1288550'>anywhere</span> <span m='1289110'>on</span> <span
  m='1289240'>the</span> <span m='1289340'>queue,</span> <span
  m='1289630'>you</span> <span m='1289820'>add</span> <span
  m='1290070'>something</span> <span m='1290310'>with</span> <span m='1290460'>a
  G</span> <span m='1290930'>at</span> <span m='1291060'>the</span> <span
  m='1291160'>end,</span> <span m='1291740'>you</span> <span
  m='1292020'>finish.</span> <span m='1293200'>And</span> <span
  m='1293580'>because</span> <span m='1293970'>of</span> <span
  m='1294030'>the</span> <span m='1294100'>fact</span> <span
  m='1294350'>that</span> <span m='1294430'>the</span> <span
  m='1294520'>way</span> <span m='1294760'>breadth-first</span> <span
  m='1295200'>search</span> <span m='1295450'>does</span> <span
  m='1295770'>its</span> <span m='1295900'>mojo,</span> <span
  m='1296950'>is</span> <span m='1297190'>that it</span> <span
  m='1297440'>adds</span> <span m='1297690'>everything</span> <span
  m='1298020'>to</span> <span m='1298120'>the</span> <span
  m='1298240'>end</span> <span m='1298450'>of</span> <span
  m='1298550'>the</span> <span m='1298650'>queue.</span> <span
  m='1300060'>That's</span> <span m='1300290'>how</span> <span
  m='1300540'>it</span> <span m='1300630'>does</span> <span
  m='1300880'>it</span> <span m='1301090'>level</span> <span
  m='1301350'>by</span> <span m='1301490'>level,</span> <span
  m='1301790'>right?</span> <span m='1301990'>It</span> <span m='1302080'>adds
  it</span> <span m='1302320'>to</span> <span m='1302410'>the</span> <span
  m='1302500'>end</span> <span m='1302650'>of</span> <span
  m='1302720'>the</span> <span m='1302830'>queue, instead</span> <span
  m='1303220'>of</span> <span m='1303300'>the</span> <span
  m='1303370'>front.</span> <span m='1304180'>Well,</span> <span
  m='1304640'>then</span> <span m='1305730'>you'll</span> <span m='1305860'>add
  it</span> <span m='1306130'>to</span> <span m='1306220'>the</span> <span
  m='1306340'>end</span> <span m='1306560'>of</span> <span
  m='1306660'>the</span> <span m='1306760'>queue,</span> <span
  m='1307440'>and</span> <span m='1307630'>then</span> <span
  m='1307770'>you</span> <span m='1307890'>will</span> <span
  m='1308200'>have</span> <span m='1308420'>it</span> <span
  m='1308480'>on</span> <span m='1308600'>the</span> <span
  m='1308690'>queue</span> <span m='1308880'>with</span> <span
  m='1309040'>a</span> <span m='1309100'>G.</span> <span m='1309425'>So</span>
  <span m='1309750'>you</span> <span m='1309900'>won't</span> <span
  m='1310130'>have</span> <span m='1310290'>to</span> <span
  m='1310400'>do</span> <span m='1310650'>SCEF.</span> <span
  m='1313930'>Another</span> <span m='1314240'>question?</span> </p><p><span
  m='1314595'>AUDIENCE: I'm</span> <span m='1314950'>just wondering,</span>
  <span m='1315428'>so</span> <span m='1315906'>the</span> <span
  m='1316384'>breadth-first</span> <span m='1316862'>search, there</span> <span
  m='1317340'>was no</span> <span m='1317818'>backtracking</span> <span
  m='1318296'>[INAUDIBLE]</span> <span m='1318774'>had no</span> <span
  m='1319252'>other--</span> </p><p><span m='1320686'>PROFESSOR: Ah.</span>
  <span m='1322190'>That's</span> <span m='1322360'>a</span> <span
  m='1322400'>good</span> <span m='1322630'>question.</span> <span
  m='1323200'>So</span> <span m='1324860'>the</span> <span
  m='1325010'>question</span> <span m='1325410'>was,</span> <span
  m='1326580'>so</span> <span m='1326840'>for</span> <span
  m='1326960'>the</span> <span m='1327040'>breadth-first</span> <span
  m='1327330'>search,</span> <span m='1327800'>there</span> <span
  m='1327970'>was</span> <span m='1328130'>no</span> <span
  m='1328270'>backtracking.</span> <span m='1329370'>D</span> <span
  m='1329690'>died.</span> <span m='1329960'>Why didn't</span> <span
  m='1330320'>we</span> <span m='1330470'>backtrack</span> <span
  m='1331010'>or</span> <span m='1331100'>something?</span> <span
  m='1332470'>The</span> <span m='1332950'>answer to</span> <span
  m='1333280'>that</span> <span m='1333490'>one</span> <span
  m='1333650'>is,</span> <span m='1334710'>for</span> <span
  m='1334870'>breadth-first</span> <span m='1335320'>search,</span> <span
  m='1335640'>backtracking</span> <span m='1336470'>doesn't</span> <span
  m='1336810'>really,</span> <span m='1337980'>it</span> <span
  m='1338110'>isn't</span> <span m='1338300'>really</span> <span
  m='1338560'>a</span> <span m='1338650'>thing,</span> <span
  m='1339410'>like</span> <span m='1339590'>it</span> <span
  m='1339670'>is</span> <span m='1339780'>for</span> <span
  m='1339890'>depth-first</span> <span m='1340330'>search.</span> <span
  m='1340980'>Why?</span> <span m='1341260'>Well,</span> <span
  m='1341550'>because</span> <span m='1341680'>breadth-first</span> <span
  m='1342180'>search,</span> <span m='1342740'>we're</span> <span
  m='1342880'>sending</span> <span m='1343360'>our</span> <span
  m='1343520'>infinite</span> <span m='1343950'>monkeys</span> <span
  m='1344500'>down</span> <span m='1344750'>every</span> <span
  m='1345070'>path.</span> <span m='1347040'>In</span> <span
  m='1347190'>depth-first</span> <span m='1347430'>search,</span> <span
  m='1348050'>we're</span> <span m='1348250'>really</span> <span
  m='1348540'>focused</span> <span m='1349030'>in</span> <span
  m='1349120'>now.</span> <span m='1349400'>We're like,</span> <span
  m='1349710'>we</span> <span m='1349800'>want</span> <span
  m='1349920'>to</span> <span m='1349960'>get</span> <span
  m='1350190'>there.</span> <span m='1350770'>We</span> <span
  m='1350910'>want</span> <span m='1351010'>to</span> <span m='1351050'>get
  there.</span> <span m='1351220'>Ooh,</span> <span m='1351430'>this</span>
  <span m='1351650'>way,</span> <span m='1351900'>this</span> <span
  m='1351990'>way,</span> <span m='1352240'>this</span> <span
  m='1352330'>way,</span> <span m='1352550'>this</span> <span
  m='1352650'>way.</span> <span m='1352910'>And</span> <span
  m='1353010'>might</span> <span m='1353230'>have</span> <span
  m='1353300'>gone</span> <span m='1353380'>the</span> <span
  m='1353470'>wrong</span> <span m='1353730'>way,</span> <span
  m='1353950'>and</span> <span m='1354060'>then</span> <span
  m='1354150'>we</span> <span m='1354230'>hit a</span> <span
  m='1354470'>dead</span> <span m='1354610'>end,</span> <span
  m='1354760'>we're</span> <span m='1354860'>like,</span> <span
  m='1355100'>oh,</span> <span m='1355530'>crap.</span> <span
  m='1356410'>And</span> <span m='1356540'>we</span> <span m='1356630'>go</span>
  <span m='1356790'>backwards.</span> </p><p><span m='1357580'>But</span> <span
  m='1357890'>for</span> <span m='1358390'>breadth-first</span> <span
  m='1358640'>search,</span> <span m='1359390'>we</span> <span
  m='1359720'>really</span> <span m='1359950'>are like an</span> <span
  m='1360270'>evil</span> <span m='1360510'>overlord.</span> <span
  m='1361100'>And</span> <span m='1361570'>we're like</span> <span
  m='1361760'>Mark</span> <span m='1362015'>Vader</span> <span
  m='1362450'>saying,</span> <span m='1363290'>storm</span> <span
  m='1363660'>troopers,</span> <span m='1364150'>go</span> <span
  m='1364420'>every</span> <span m='1364770'>direction.</span> <span
  m='1365600'>And</span> <span m='1365760'>then</span> <span
  m='1365940'>from</span> <span m='1366110'>there,</span> <span
  m='1366340'>go</span> <span m='1366640'>every</span> <span
  m='1366960'>other</span> <span m='1367220'>direction.</span> <span
  m='1368320'>And</span> <span m='1368520'>so,</span> <span
  m='1368860'>even</span> <span m='1369080'>though,</span> <span
  m='1369200'>yes,</span> <span m='1369500'>when</span> <span
  m='1369680'>we</span> <span m='1369790'>got</span> <span m='1369970'>to</span>
  <span m='1370080'>D, some of</span> <span m='1370560'>the</span> <span
  m='1370690'>storm</span> <span m='1370920'>troopers</span> <span
  m='1371040'>hit</span> <span m='1371340'>a</span> <span
  m='1371430'>dead</span> <span m='1371640'>end,</span> <span
  m='1372020'>and</span> <span m='1372170'>probably</span> <span
  m='1372960'>it</span> <span m='1373030'>was</span> <span
  m='1373120'>reflective,</span> <span m='1373610'>and</span> <span
  m='1373710'>they</span> <span m='1373790'>shot it,</span> <span
  m='1374170'>and</span> <span m='1374270'>hit</span> <span
  m='1374430'>themselves</span> <span m='1375000'>or</span> <span
  m='1375110'>something</span> <span m='1375360'>like</span> <span
  m='1375520'>that.</span> <span m='1376610'>Meanwhile,</span> <span
  m='1377040'>the</span> <span m='1377120'>storm</span> <span
  m='1377430'>troopers</span> <span m='1377530'>we sent</span> <span
  m='1377910'>to</span> <span m='1378090'>B</span> <span m='1378280'>and</span>
  <span m='1378370'>C</span> <span m='1378560'>are</span> <span
  m='1378650'>still</span> <span m='1378900'>fine,</span> <span
  m='1379290'>so</span> <span m='1379380'>we</span> <span
  m='1379470'>don't</span> <span m='1379630'>need</span> <span
  m='1379810'>to</span> <span m='1379920'>backtrack.</span> </p><p><span
  m='1380185'>AUDIENCE: Cause there are,</span> <span m='1380450'>like,
  other</span> <span m='1380922'>troops going</span> <span m='1381394'>down
  the</span> <span m='1381866'>tree.</span> </p><p><span m='1382340'>PROFESSOR:
  Yeah,</span> <span m='1382570'>there</span> <span m='1382680'>are</span> <span
  m='1382700'>other</span> <span m='1382910'>troops</span> <span
  m='1383140'>going</span> <span m='1383330'>down</span> <span
  m='1383490'>the</span> <span m='1383570'>tree</span> <span
  m='1383800'>in</span> <span m='1383890'>every</span> <span
  m='1384140'>direction.</span> <span m='1384670'>Whereas</span> <span
  m='1384810'>in</span> <span m='1384960'>the</span> <span
  m='1385310'>depth-first</span> <span m='1385730'>search,</span> <span
  m='1385930'>we</span> <span m='1386100'>only</span> <span
  m='1386430'>sent--</span> <span m='1387060'>we were</span> <span
  m='1387220'>like,</span> <span m='1387530'>there</span> <span
  m='1387670'>are</span> <span m='1387750'>definitely</span> <span
  m='1388250'>no</span> <span m='1388530'>droids</span> <span
  m='1388840'>on</span> <span m='1388960'>this</span> <span
  m='1389110'>escape</span> <span m='1389470'>pod.</span> <span
  m='1389910'>Send</span> <span m='1390090'>everyone</span> <span
  m='1390600'>this</span> <span m='1390770'>straight</span> <span
  m='1391210'>direction,</span> <span m='1391485'>and</span> <span
  m='1391760'>we</span> <span m='1391880'>only</span> <span m='1392070'>sent
  them</span> <span m='1392370'>to</span> <span m='1392490'>A and</span> <span
  m='1392750'>D.</span> <span m='1393510'>And</span> <span
  m='1393670'>then,</span> <span m='1393830'>so</span> <span
  m='1393960'>we</span> <span m='1394050'>had</span> <span m='1394230'>to</span>
  <span m='1394290'>backtrack</span> <span m='1394870'>because</span> <span
  m='1395490'>we</span> <span m='1395640'>hit a</span> <span m='1395850'>dead
  end.</span> <span m='1396310'>Does</span> <span m='1396420'>that</span> <span
  m='1396560'>make</span> <span m='1396690'>sense?</span> <span
  m='1397560'>Another</span> <span m='1397830'>question?</span> </p><p><span
  m='1399246'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='1402640'>PROFESSOR:
  So the question</span> <span m='1403060'>is,</span> <span
  m='1403480'>in</span> <span m='1403860'>this</span> <span
  m='1404640'>breadth-first</span> <span m='1405070'>search,</span> <span
  m='1405540'>did</span> <span m='1405860'>lexicographic</span> <span
  m='1406620'>order</span> <span m='1406820'>ever</span> <span
  m='1407020'>come</span> <span m='1407170'>into</span> <span
  m='1407310'>play?</span> <span m='1407570'>The</span> <span
  m='1407670'>answer</span> <span m='1407920'>is</span> <span
  m='1408050'>yes,</span> <span m='1408360'>in a</span> <span
  m='1408670'>very</span> <span m='1409000'>subtle</span> <span
  m='1409870'>and</span> <span m='1409980'>sneaky</span> <span
  m='1410500'>way.</span> <span m='1411360'>Which</span> <span
  m='1411610'>is,</span> <span m='1412740'>I</span> <span
  m='1412880'>wrote</span> <span m='1413210'>E</span> <span
  m='1413360'>before</span> <span m='1413720'>J,</span> <span
  m='1414175'>F</span> <span m='1414630'>before</span> <span
  m='1414790'>I,</span> <span m='1415210'>and</span> <span m='1415360'>G</span>
  <span m='1415520'>before</span> <span m='1415830'>J.</span> <span
  m='1417570'>If</span> <span m='1417730'>I</span> <span m='1417830'>was</span>
  <span m='1417940'>not</span> <span m='1418120'>using</span> <span
  m='1418530'>lexicographic</span> <span m='1418950'>order,</span> <span
  m='1419290'>it</span> <span m='1419450'>might</span> <span
  m='1419630'>have</span> <span m='1419710'>been</span> <span
  m='1420370'>reasonable</span> <span m='1420870'>to</span> <span
  m='1421020'>write,</span> <span m='1421380'>for</span> <span
  m='1421480'>instance,</span> <span m='1421960'>when</span> <span m='1422160'>I
  was</span> <span m='1422330'>expanding</span> <span m='1422440'>I,</span>
  <span m='1422510'>to</span> <span m='1422910'>write</span> <span
  m='1423150'>J</span> <span m='1423340'>before</span> <span
  m='1423630'>G</span> <span m='1423850'>because</span> <span
  m='1424150'>J</span> <span m='1424330'>was</span> <span
  m='1424480'>higher</span> <span m='1424890'>up</span> <span
  m='1425040'>on</span> <span m='1425240'>the</span> <span
  m='1425360'>tree</span> <span m='1425570'>or something</span> <span
  m='1425910'>like</span> <span m='1426060'>that.</span> </p><p><span
  m='1426850'>But</span> <span m='1427420'>the</span> <span
  m='1427640'>only</span> <span m='1427850'>way it</span> <span
  m='1428010'>came</span> <span m='1428200'>into</span> <span
  m='1428370'>play</span> <span m='1428640'>is</span> <span
  m='1428790'>that</span> <span m='1428950'>I</span> <span
  m='1429060'>wrote</span> <span m='1429420'>them</span> <span
  m='1429620'>left</span> <span m='1429870'>to</span> <span
  m='1430020'>right</span> <span m='1430480'>in</span> <span
  m='1430600'>alphabetical</span> <span m='1431070'>order</span> <span
  m='1431280'>every</span> <span m='1431500'>time,</span> <span m='1431770'>and
  I</span> <span m='1431810'>wrote</span> <span m='1432020'>ABC.</span> <span
  m='1434890'>Another</span> <span m='1435160'>question?</span> </p><p><span
  m='1436023'>AUDIENCE: We see the</span> <span m='1436506'>F node</span> <span
  m='1436989'>twice.</span> <span m='1437472'>Suppose that</span> <span
  m='1437955'>the goal node</span> <span m='1438438'>wasn't reached</span> <span
  m='1438921'>[INAUDIBLE],</span> <span m='1439404'>then</span> <span
  m='1439887'>you would</span> <span m='1440370'>have visited</span> <span
  m='1440853'>F again.</span> </p><p><span m='1441819'>PROFESSOR: And we would
  have</span> <span m='1442310'>visited</span> <span m='1442645'>F</span> <span
  m='1442980'>again.</span> <span m='1443230'>That's</span> <span
  m='1443470'>correct.</span> <span m='1443850'>The</span> <span
  m='1443940'>question</span> <span m='1444310'>is,</span> <span
  m='1445070'>F</span> <span m='1445320'>is</span> <span
  m='1445460'>listed</span> <span m='1445790'>twice.</span> <span
  m='1446760'>So</span> <span m='1447280'>if</span> <span m='1447400'>we</span>
  <span m='1447560'>hadn't</span> <span m='1447810'>reached</span> <span
  m='1448000'>the</span> <span m='1448090'>goal</span> <span
  m='1448360'>node,</span> <span m='1448500'>let's</span> <span
  m='1448740'>say</span> <span m='1448880'>that</span> <span
  m='1449150'>down</span> <span m='1449390'>there,</span> <span
  m='1450000'>after</span> <span m='1450410'>I</span> <span
  m='1450820'>is</span> <span m='1451550'>Z,</span> <span m='1451990'>and</span>
  <span m='1452110'>after</span> <span m='1452350'>Z</span> <span
  m='1452540'>is</span> <span m='1452680'>the</span> <span
  m='1452760'>goal</span> <span m='1452970'>node,</span> <span
  m='1453355'>then</span> <span m='1453840'>would</span> <span
  m='1453960'>we</span> <span m='1454090'>have</span> <span
  m='1454130'>visited</span> <span m='1454480'>F</span> <span
  m='1454690'>again?</span> <span m='1454990'>The</span> <span
  m='1455070'>answer</span> <span m='1455330'>is</span> <span
  m='1455450'>yes.</span> <span m='1455880'>As</span> <span m='1456250'>I</span>
  <span m='1456480'>said,</span> <span m='1456730'>this</span> <span
  m='1456890'>is</span> <span m='1457030'>the</span> <span
  m='1457150'>approach</span> <span m='1457520'>that</span> <span
  m='1457650'>throws</span> <span m='1457920'>your</span> <span
  m='1458080'>troops</span> <span m='1458450'>every</span> <span
  m='1458770'>possible</span> <span m='1459200'>way.</span> <span
  m='1459490'>So</span> <span m='1459600'>there's</span> <span
  m='1459750'>storm</span> <span m='1459990'>troopers</span> <span
  m='1460180'>going</span> <span m='1460340'>from</span> <span
  m='1460560'>E</span> <span m='1460720'>to</span> <span m='1460860'>F,
  and</span> <span m='1461150'>there's storm</span> <span
  m='1461440'>troopers</span> <span m='1461710'>going</span> <span
  m='1461910'>from</span> <span m='1462090'>H to F,</span> <span
  m='1462550'>and</span> <span m='1462640'>they're</span> <span
  m='1462740'>going</span> <span m='1462960'>everywhere.</span> </p><p><span
  m='1463900'>Now</span> <span m='1464100'>there</span> <span
  m='1464250'>is</span> <span m='1464440'>a</span> <span m='1464500'>way</span>
  <span m='1464800'>to</span> <span m='1464950'>cut</span> <span
  m='1465190'>down</span> <span m='1465400'>on</span> <span
  m='1465550'>this.</span> <span m='1466100'>You</span> <span
  m='1466280'>could</span> <span m='1466560'>do</span> <span
  m='1466690'>breadth-first</span> <span m='1466980'>search</span> <span
  m='1467270'>with an</span> <span m='1467500'>extended</span> <span
  m='1468070'>list.</span> <span m='1469040'>If</span> <span
  m='1469260'>you</span> <span m='1469410'>did</span> <span
  m='1470210'>do</span> <span m='1470330'>breadth-first</span> <span
  m='1470760'>search</span> <span m='1470970'>with</span> <span
  m='1471110'>an</span> <span m='1471190'>extended</span> <span
  m='1471690'>list,</span> <span m='1472560'>that</span> <span m='1472820'>would
  be</span> <span m='1473140'>sort of</span> <span m='1473300'>equivalent</span>
  <span m='1473820'>to</span> <span m='1474920'>as</span> <span
  m='1474990'>soon</span> <span m='1475190'>as</span> <span
  m='1475260'>you</span> <span m='1475380'>expand</span> <span
  m='1475870'>one</span> <span m='1476060'>node,</span> <span m='1476520'>as
  soon</span> <span m='1477180'>you</span> <span m='1477320'>send</span> <span
  m='1477610'>storm</span> <span m='1477830'>troopers</span> <span
  m='1478220'>out of</span> <span m='1478560'>I</span> <span
  m='1478810'>to</span> <span m='1478920'>look</span> <span
  m='1479160'>at</span> <span m='1479280'>G and</span> <span
  m='1479565'>J,</span> <span m='1480080'>one</span> <span m='1480350'>of</span>
  <span m='1480440'>them</span> <span m='1480560'>stays</span> <span
  m='1480810'>at</span> <span m='1481050'>I,</span> <span m='1481340'>and</span>
  <span m='1481500'>if any</span> <span m='1481820'>other</span> <span
  m='1482070'>storm</span> <span m='1482190'>troopers</span> <span
  m='1482290'>come to</span> <span m='1482750'>I,</span> <span
  m='1483440'>and</span> <span m='1483640'>they're like,</span> <span
  m='1484050'>we</span> <span m='1484190'>want</span> <span
  m='1484290'>to</span> <span m='1484340'>see</span> <span
  m='1484500'>what's</span> <span m='1484660'>past</span> <span m='1484935'>I,
  he's</span> <span m='1485210'>like,</span> <span m='1485350'>no,</span> <span
  m='1485500'>no,</span> <span m='1485620'>no.</span> <span
  m='1485790'>We've</span> <span m='1485960'>already</span> <span
  m='1486140'>sent troops</span> <span m='1486580'>past</span> <span
  m='1486810'>I.</span> <span m='1487390'>We've</span> <span
  m='1487610'>got</span> <span m='1487840'>this.</span> <span
  m='1488260'>Go</span> <span m='1488440'>back</span> <span
  m='1488700'>home.</span> <span m='1490370'>It's</span> <span
  m='1490600'>OK.</span> <span m='1490900'>There</span> <span
  m='1491020'>are</span> <span m='1491050'>no</span> <span
  m='1491250'>rebels</span> <span m='1491630'>here,</span> <span
  m='1492290'>but</span> <span m='1492420'>it</span> <span
  m='1492500'>might</span> <span m='1492700'>be</span> <span m='1492870'>Han
  Solo</span> <span m='1493310'>dressed</span> <span m='1493690'>up as</span>
  <span m='1493810'>a</span> <span m='1493870'>storm</span> <span
  m='1494175'>trooper,</span> <span m='1494480'>as</span> <span
  m='1494590'>we'll</span> <span m='1494690'>see</span> <span
  m='1494840'>in</span> <span m='1494910'>the</span> <span
  m='1494980'>next</span> <span m='1495250'>problem.</span> <span
  m='1496570'>Where</span> <span m='1496950'>our</span> <span
  m='1497150'>extended</span> <span m='1497480'>list</span> <span
  m='1497860'>screws</span> <span m='1498180'>us</span> <span
  m='1498330'>over.</span> </p><p><span m='1499530'>But</span> <span
  m='1500210'>for</span> <span m='1500340'>this</span> <span
  m='1500570'>problem,</span> <span m='1501220'>do</span> <span
  m='1501660'>you</span> <span m='1501820'>see</span> <span
  m='1501970'>what</span> <span m='1502050'>I</span> <span
  m='1502120'>mean?</span> <span m='1502440'>With an</span> <span
  m='1502690'>extended</span> <span m='1503130'>list,</span> <span
  m='1503290'>we</span> <span m='1503410'>could</span> <span
  m='1503570'>avoid</span> <span m='1503930'>this</span> <span
  m='1504200'>because</span> <span m='1504510'>the</span> <span
  m='1504590'>extended</span> <span m='1504980'>list</span> <span
  m='1505500'>basically</span> <span m='1505880'>says,</span> <span
  m='1506180'>once</span> <span m='1506430'>I've</span> <span
  m='1506570'>expanded</span> <span m='1506870'>and</span> <span
  m='1507170'>searched</span> <span m='1507420'>past</span> <span
  m='1507750'>here,</span> <span m='1508260'>don't</span> <span
  m='1508480'>do</span> <span m='1508580'>it</span> <span
  m='1508660'>again.</span> <span m='1509590'>But</span> <span
  m='1509760'>if</span> <span m='1509870'>you</span> <span
  m='1509970'>don't</span> <span m='1510200'>have</span> <span
  m='1510450'>one,</span> <span m='1510860'>yeah,</span> <span
  m='1511050'>you'll</span> <span m='1511230'>do</span> <span
  m='1511390'>F</span> <span m='1511630'>twice.</span> <span
  m='1512300'>In</span> <span m='1512410'>fact,</span> <span
  m='1512780'>didn't</span> <span m='1512980'>we</span> <span
  m='1513110'>do</span> <span m='1513460'>something</span> <span
  m='1513890'>twice</span> <span m='1514280'>here?</span> <span m='1515572'>Oh,
  it</span> <span m='1515980'>turns out</span> <span m='1516090'>we</span> <span
  m='1516190'>didn't.</span> <span m='1516850'>But</span> <span
  m='1517190'>we</span> <span m='1517540'>easily</span> <span
  m='1517920'>could</span> <span m='1518110'>have.</span> <span
  m='1518480'>We</span> <span m='1518650'>almost</span> <span m='1519020'>did
  E</span> <span m='1519280'>twice.</span> <span m='1519620'>We</span> <span
  m='1519750'>almost</span> <span m='1520110'>did</span> <span
  m='1521950'>F</span> <span m='1522270'>twice.</span> <span
  m='1522710'>It</span> <span m='1522820'>turns</span> <span
  m='1523050'>out</span> <span m='1523150'>we</span> <span
  m='1523260'>didn't,</span> <span m='1523530'>but</span> <span
  m='1523690'>we</span> <span m='1523800'>could</span> <span
  m='1523970'>have.</span> <span m='1524980'>Another</span> <span
  m='1525250'>question?</span> </p><p><span m='1526177'>AUDIENCE:
  [INAUDIBLE]</span> <span m='1527171'>for the</span> <span
  m='1527668'>implementation</span> <span m='1528165'>of</span> <span
  m='1528662'>the queue</span> <span m='1529159'>that</span> <span
  m='1530650'>when</span> <span m='1531147'>you expand</span> <span
  m='1531644'>I, that</span> <span m='1532141'>both</span> <span m='1532638'>G
  and</span> <span m='1533135'>J</span> <span m='1533632'>were added</span>
  <span m='1534129'>simultaneously</span> <span m='1534626'>and</span> <span
  m='1535123'>in</span> <span m='1535620'>lexicographic</span> <span
  m='1536614'>order?</span> <span m='1539596'>Or is there a</span> <span
  m='1540093'>piece where</span> <span m='1540590'>it would be</span> <span
  m='1542081'>[INAUDIBLE]</span> <span m='1543075'>order,</span> <span
  m='1543572'>G got</span> <span m='1544069'>added before</span> <span
  m='1545063'>J,</span> <span m='1545560'>so hence,</span> <span m='1546057'>it
  stopped</span> <span m='1546554'>[INAUDIBLE]?</span> </p><p><span
  m='1547051'>PROFESSOR: Ha.</span> <span m='1547548'>That is a</span> <span
  m='1548045'>very good</span> <span m='1548542'>question</span> <span
  m='1549050'>that</span> <span m='1549430'>provokes</span> <span
  m='1549850'>a</span> <span m='1549910'>minor</span> <span
  m='1550340'>change.</span> <span m='1550670'>The</span> <span
  m='1550760'>question</span> <span m='1551210'>is,</span> <span
  m='1552190'>when</span> <span m='1552390'>you</span> <span
  m='1552580'>expand</span> <span m='1553170'>SBHI,</span> <span
  m='1555620'>is</span> <span m='1556110'>SBHIG</span> <span
  m='1557300'>added</span> <span m='1557670'>before</span> <span
  m='1557940'>SBHIJ</span> <span m='1558650'>because</span> <span
  m='1558920'>of</span> <span m='1559030'>lexicographic</span> <span
  m='1559550'>ordering,</span> <span m='1559770'>or are</span> <span
  m='1559880'>they</span> <span m='1560010'>both</span> <span m='1560270'>added
  at</span> <span m='1560510'>the</span> <span m='1560600'>same</span> <span
  m='1560870'>time?</span> <span m='1561650'>The</span> <span
  m='1561750'>answer</span> <span m='1561910'>is,</span> <span
  m='1562340'>simultaneous.</span> <span m='1563480'>When</span> <span
  m='1563590'>you</span> <span m='1563690'>do</span> <span
  m='1563830'>the</span> <span m='1563940'>expansion,</span> <span
  m='1564910'>you</span> <span m='1565080'>instantly</span> <span
  m='1565530'>receive</span> <span m='1566570'>say,</span> <span
  m='1566780'>a</span> <span m='1566870'>list</span> <span
  m='1567200'>maybe,</span> <span m='1567520'>or</span> <span
  m='1567640'>whatever</span> <span m='1568500'>data</span> <span
  m='1568710'>structure</span> <span m='1568900'>you</span> <span
  m='1569110'>like,</span> <span m='1569720'>containing</span> <span
  m='1570220'>all</span> <span m='1570540'>of</span> <span
  m='1570710'>the</span> <span m='1570810'>children,</span> <span
  m='1571660'>and</span> <span m='1571810'>they</span> <span
  m='1572680'>get</span> <span m='1572880'>appended</span> <span
  m='1573310'>to</span> <span m='1573390'>the</span> <span
  m='1573480'>queue</span> <span m='1573900'>at</span> <span
  m='1574080'>once</span> <span m='1574640'>in</span> <span
  m='1574790'>order.</span> </p><p><span m='1576440'>So</span> <span
  m='1577360'>you</span> <span m='1577510'>will</span> <span
  m='1577720'>receive</span> <span m='1578030'>all</span> <span m='1578350'>of
  them.</span> <span m='1579140'>I</span> <span m='1579420'>suppose</span> <span
  m='1579770'>you could</span> <span m='1579990'>create</span> <span
  m='1580250'>some</span> <span m='1580400'>kind</span> <span
  m='1580540'>of</span> <span m='1580600'>search</span> <span
  m='1580890'>problem</span> <span m='1581330'>where</span> <span
  m='1581460'>you</span> <span m='1581630'>have,</span> <span
  m='1581870'>like,</span> <span m='1582110'>an</span> <span
  m='1582280'>adversary</span> <span m='1582990'>node,</span> <span
  m='1583390'>like</span> <span m='1583660'>a</span> <span
  m='1583770'>wumpus,</span> <span m='1584350'>or</span> <span
  m='1584490'>you're</span> <span m='1584640'>hunting</span> <span
  m='1584750'>a</span> <span m='1584940'>wumpus.</span> <span
  m='1585190'>And</span> <span m='1585290'>if</span> <span
  m='1585560'>you</span> <span m='1586030'>don't</span> <span
  m='1586240'>want</span> <span m='1586380'>to</span> <span
  m='1586430'>add</span> <span m='1586710'>the</span> <span
  m='1586800'>exact</span> <span m='1587200'>wumpus</span> <span
  m='1587650'>to</span> <span m='1587760'>your</span> <span m='1587900'>search
  tree,</span> <span m='1588270'>or</span> <span m='1588440'>you</span> <span
  m='1588570'>lose.</span> <span m='1589010'>You</span> <span
  m='1589170'>only</span> <span m='1589360'>want</span> <span
  m='1589590'>to</span> <span m='1589730'>add</span> <span
  m='1589990'>the</span> <span m='1590060'>one</span> <span
  m='1590240'>next</span> <span m='1590500'>to</span> <span
  m='1590640'>the</span> <span m='1590870'>wumpus.</span> <span
  m='1592060'>I</span> <span m='1592220'>don't</span> <span
  m='1592360'>know.</span> <span m='1592540'>I'm</span> <span
  m='1592700'>making</span> <span m='1592990'>this</span> <span
  m='1593170'>up.</span> <span m='1593630'>And</span> <span
  m='1593810'>unfortunately,</span> <span m='1594530'>you would</span> <span
  m='1594650'>have</span> <span m='1595890'>to add</span> <span
  m='1596070'>all</span> <span m='1596220'>the</span> <span
  m='1596320'>children</span> <span m='1596740'>at once.</span> <span
  m='1597630'>Our</span> <span m='1597820'>current</span> <span
  m='1598100'>algorithm</span> <span m='1598530'>does</span> <span
  m='1598740'>not</span> <span m='1599120'>add</span> <span
  m='1599880'>one</span> <span m='1599980'>at</span> <span m='1600080'>a</span>
  <span m='1600380'>time.</span> </p><p><span m='1602440'>All</span> <span
  m='1602540'>right.</span> <span m='1602700'>So</span> <span
  m='1603110'>we've</span> <span m='1603230'>done</span> <span
  m='1603390'>a</span> <span m='1603430'>breadth-first</span> <span
  m='1603870'>search.</span> <span m='1604420'>Great.</span> <span
  m='1604940'>Now</span> <span m='1605170'>we're</span> <span
  m='1605250'>going</span> <span m='1605350'>to</span> <span m='1605500'>do
  some</span> <span m='1605680'>optimal</span> <span m='1606110'>search.</span>
  <span m='1607530'>That</span> <span m='1608070'>is</span> <span
  m='1608610'>going</span> <span m='1608820'>to</span> <span
  m='1608900'>require</span> <span m='1609300'>me</span> <span
  m='1609450'>to</span> <span m='1609530'>draw</span> <span m='1609790'>a</span>
  <span m='1609900'>slightly</span> <span m='1610750'>different</span> <span
  m='1611310'>graph.</span> <span m='1612510'>I</span> <span
  m='1612620'>will</span> <span m='1612800'>draw</span> <span
  m='1613080'>it</span> <span m='1613290'>on</span> <span
  m='1614215'>what</span> <span m='1614650'>is</span> <span
  m='1614750'>left</span> <span m='1615030'>of</span> <span
  m='1615120'>the</span> <span m='1615180'>bottom</span> <span
  m='1615560'>here.</span> <span m='1617050'>And</span> <span
  m='1617190'>then</span> <span m='1617290'>we'll</span> <span
  m='1617430'>solve</span> <span m='1617810'>it</span> <span
  m='1618220'>on</span> <span m='1618790'>what</span> <span
  m='1618950'>is</span> <span m='1619070'>left</span> <span
  m='1619200'>of</span> <span m='1619290'>the</span> <span
  m='1619380'>bottom</span> <span m='1619680'>here.</span> <span
  m='1621810'>All</span> <span m='1621900'>right.</span> <span
  m='1622120'>Mark</span> <span m='1622370'>has his</span> <span
  m='1622710'>new</span> <span m='1622790'>stronghold,</span> <span
  m='1623520'>and</span> <span m='1623630'>he</span> <span
  m='1623700'>wants</span> <span m='1623910'>to</span> <span
  m='1624000'>invade</span> <span m='1624370'>parallel</span> <span
  m='1624800'>universes.</span> <span m='1627070'>Now</span> <span
  m='1627340'>he's</span> <span m='1628530'>programmed</span> <span
  m='1628880'>his</span> <span m='1628980'>evil</span> <span
  m='1629280'>supercomputer</span> <span m='1630450'>to</span> <span
  m='1630600'>find</span> <span m='1630820'>the</span> <span
  m='1630870'>shortest</span> <span m='1631230'>path</span> <span
  m='1631470'>of</span> <span m='1631580'>jumps</span> <span
  m='1631960'>from</span> <span m='1632160'>his</span> <span
  m='1632280'>starting</span> <span m='1632580'>universe</span> <span
  m='1633120'>to</span> <span m='1633260'>the</span> <span
  m='1633360'>goal</span> <span m='1633660'>universe,</span> <span
  m='1634085'>G.</span> <span m='1637610'>It</span> <span
  m='1637850'>takes</span> <span m='1638030'>a</span> <span
  m='1638100'>certain</span> <span m='1638300'>amount</span> <span
  m='1638440'>of</span> <span m='1638580'>energy</span> <span
  m='1638920'>to</span> <span m='1638980'>move</span> <span
  m='1639140'>from</span> <span m='1639300'>universe</span> <span
  m='1639555'>to</span> <span m='1639810'>universe</span> <span
  m='1640410'>based</span> <span m='1640770'>on</span> <span
  m='1641030'>the</span> <span m='1641160'>differing</span> <span
  m='1641650'>factors</span> <span m='1642100'>between</span> <span
  m='1642440'>those</span> <span m='1642650'>universes.</span> </p><p><span
  m='1643250'>Like</span> <span m='1643410'>maybe</span> <span
  m='1643650'>in</span> <span m='1643800'>one</span> <span
  m='1644070'>universe,</span> <span m='1645780'>a</span> <span
  m='1645860'>butterfly</span> <span m='1646290'>didn't</span> <span
  m='1646560'>flap its</span> <span m='1646890'>wings</span> <span
  m='1647110'>in</span> <span m='1647240'>China,</span> <span
  m='1647850'>whereas</span> <span m='1648150'>in</span> <span
  m='1648290'>the</span> <span m='1648400'>other</span> <span
  m='1648610'>universe,</span> <span m='1651370'>sentient</span> <span
  m='1651840'>reptiles</span> <span m='1652520'>rule</span> <span
  m='1652790'>the</span> <span m='1652870'>earth.</span> <span
  m='1654480'>And</span> <span m='1654710'>so,</span> <span
  m='1655970'>Mark's</span> <span m='1656270'>supercomputer</span> <span
  m='1656600'>has</span> <span m='1656930'>tried</span> <span
  m='1657170'>to</span> <span m='1657250'>create</span> <span
  m='1657560'>a</span> <span m='1657690'>heuristic</span> <span
  m='1658580'>value</span> <span m='1659370'>that</span> <span
  m='1659500'>determines</span> <span m='1659890'>how</span> <span
  m='1660170'>different</span> <span m='1660520'>the</span> <span
  m='1660620'>universes</span> <span m='1661150'>are</span> <span
  m='1661760'>to</span> <span m='1661880'>guess,</span> <span
  m='1662560'>sort</span> <span m='1662750'>of,</span> <span
  m='1662820'>how</span> <span m='1662970'>much</span> <span
  m='1663120'>energy</span> <span m='1663450'>it's</span> <span
  m='1663580'>going</span> <span m='1663730'>to</span> <span
  m='1663820'>take</span> <span m='1664420'>to</span> <span
  m='1664520'>get</span> <span m='1664810'>from</span> <span
  m='1665000'>his</span> <span m='1665150'>start</span> <span
  m='1665520'>universe,</span> <span m='1665990'>S,</span> <span m='1666550'>to
  his</span> <span m='1666820'>goal</span> <span m='1667040'>universe,</span>
  <span m='1667525'>G,</span> <span m='1668550'>given</span> <span
  m='1668790'>that</span> <span m='1670240'>currently</span> <span
  m='1670630'>his</span> <span m='1670760'>armies</span> <span
  m='1671070'>are</span> <span m='1671190'>at</span> <span m='1671440'>a</span>
  <span m='1671500'>particular</span> <span m='1671980'>universe.</span>
  </p><p><span m='1673080'>In</span> <span m='1673230'>other</span> <span
  m='1673400'>words,</span> <span m='1674220'>OK,</span> <span
  m='1674840'>it's</span> <span m='1675040'>not</span> <span
  m='1675350'>A</span> <span m='1675520'>you put</span> <span
  m='1675850'>in</span> <span m='1676020'>search,</span> <span
  m='1676870'>but</span> <span m='1677230'>dammit,</span> <span
  m='1677600'>we're</span> <span m='1677730'>going</span> <span
  m='1677960'>to</span> <span m='1678330'>have</span> <span m='1678710'>a</span>
  <span m='1679060'>heuristic</span> <span m='1679520'>distance</span> <span
  m='1679860'>to</span> <span m='1679940'>the</span> <span
  m='1680030'>goal.</span> <span m='1680590'>And</span> <span
  m='1680820'>we're</span> <span m='1680950'>going</span> <span
  m='1681130'>to</span> <span m='1681190'>have</span> <span m='1681350'>a</span>
  <span m='1681410'>graph</span> <span m='1681740'>with</span> <span
  m='1682130'>distances.</span> <span m='1682710'>So</span> <span
  m='1683340'>let's</span> <span m='1683550'>see what</span> <span
  m='1683660'>it</span> <span m='1683790'>looks</span> <span
  m='1684000'>like.</span> <span m='1686660'>All</span> <span
  m='1686860'>right.</span> <span m='1713320'>And</span> <span
  m='1713490'>down</span> <span m='1713790'>here</span> <span
  m='1713980'>is</span> <span m='1714290'>G.</span> <span m='1715820'>So</span>
  <span m='1716040'>this</span> <span m='1716280'>otherwise</span> <span
  m='1717310'>unassuming</span> <span m='1717700'>heart</span> <span
  m='1717960'>shape</span> <span m='1718350'>hides</span> <span m='1718770'>an
  evil</span> <span m='1718890'>invasion</span> <span m='1719540'>force.</span>
  <span m='1720800'>So</span> <span m='1722890'>let's</span> <span
  m='1723130'>see.</span> </p><p><span m='1723640'>The</span> <span
  m='1723740'>distance</span> <span m='1724170'>here is</span> <span
  m='1724320'>100.</span> <span m='1725146'>The</span> <span
  m='1725560'>distance</span> <span m='1725880'>here</span> <span
  m='1726000'>is</span> <span m='1726170'>3,</span> <span m='1727040'>4.</span>
  <span m='1728275'>The</span> <span m='1728640'>distance</span> <span
  m='1729000'>here</span> <span m='1729150'>is</span> <span
  m='1729260'>4.</span> <span m='1730600'>The</span> <span m='1730720'>distance
  here is</span> <span m='1731190'>50,</span> <span m='1732690'>50,</span> <span
  m='1735190'>14,</span> <span m='1736660'>4,</span> <span
  m='1738070'>16,</span> <span m='1739480'>16.</span> <span
  m='1740890'>Oh</span> <span m='1741360'>sorry,</span> <span
  m='1741580'>these</span> <span m='1741780'>are</span> <span
  m='1741860'>connected.</span> <span m='1743430'>30</span> <span
  m='1745500'>and</span> <span m='1745860'>10.</span> <span
  m='1747410'>The</span> <span m='1747530'>heuristic</span> <span
  m='1748090'>values</span> <span m='1748490'>are</span> <span
  m='1749080'>0</span> <span m='1749560'>at</span> <span m='1749650'>the</span>
  <span m='1749740'>start</span> <span m='1750090'>node,</span> <span
  m='1752810'>50</span> <span m='1753320'>at</span> <span m='1753500'>B,</span>
  <span m='1755680'>60</span> <span m='1756290'>at</span> <span
  m='1756500'>A,</span> <span m='1758850'>55</span> <span m='1759245'>at</span>
  <span m='1759640'>C,</span> <span m='1762140'>50</span> <span
  m='1762820'>at</span> <span m='1763060'>D,</span> <span m='1769550'>56</span>
  <span m='1770310'>at</span> <span m='1770560'>E,</span> <span
  m='1773260'>50</span> <span m='1773660'>at</span> <span m='1773880'>F,</span>
  <span m='1778290'>0</span> <span m='1778670'>at</span> <span
  m='1778940'>G</span> <span m='1779480'>because</span> <span
  m='1779850'>it's</span> <span m='1780090'>the</span> <span
  m='1780190'>goal</span> <span m='1780430'>node,</span> <span
  m='1782210'>39</span> <span m='1782790'>at</span> <span m='1782980'>H.</span>
  <span m='1783760'>I'll</span> <span m='1784060'>draw the</span> <span
  m='1784320'>little</span> <span m='1784580'>H</span> <span
  m='1784740'>smaller.</span> <span m='1789500'>And</span> <span
  m='1789680'>0</span> <span m='1789935'>at</span> <span m='1790190'>I.</span>
  <span m='1792016'>Well,</span> <span m='1792460'>after</span> <span
  m='1792800'>all,</span> <span m='1793020'>I</span> <span m='1793200'>goes
  right</span> <span m='1793550'>to</span> <span m='1793700'>G.</span> <span
  m='1794020'>It</span> <span m='1794340'>can</span> <span m='1794440'>be</span>
  <span m='1794550'>0.</span> <span m='1795030'>It'll</span> <span
  m='1795200'>be</span> <span m='1795290'>great.</span> <span
  m='1796083'>OK.</span> </p><p><span m='1798940'>Now,</span> <span
  m='1799190'>this</span> <span m='1799510'>time</span> <span
  m='1799960'>Mark</span> <span m='1800350'>is</span> <span
  m='1800460'>trying</span> <span m='1800620'>to</span> <span
  m='1800670'>conserve</span> <span m='1801380'>the</span> <span
  m='1801530'>energy</span> <span m='1802020'>of</span> <span
  m='1802410'>his</span> <span m='1802590'>parallel</span> <span
  m='1802980'>universe</span> <span m='1803410'>jump.</span> <span
  m='1803700'>That,</span> <span m='1804050'>understandably,</span> <span
  m='1804890'>takes</span> <span m='1805170'>a</span> <span
  m='1805220'>lot</span> <span m='1805420'>of</span> <span
  m='1805500'>energy.</span> <span m='1806150'>So</span> <span
  m='1806400'>he</span> <span m='1806560'>needs</span> <span
  m='1806770'>to</span> <span m='1807930'>program</span> <span
  m='1808340'>in</span> <span m='1808490'>the</span> <span
  m='1808560'>shortest</span> <span m='1809180'>number</span> <span
  m='1809500'>of</span> <span m='1809630'>universe</span> <span
  m='1810140'>jumps</span> <span m='1810950'>that</span> <span
  m='1811090'>will</span> <span m='1811220'>get</span> <span m='1811400'>him
  to</span> <span m='1811650'>the</span> <span m='1811720'>goal.</span> <span
  m='1813830'>He</span> <span m='1814020'>doesn't</span> <span
  m='1814270'>mean</span> <span m='1814410'>the</span> <span
  m='1814510'>least</span> <span m='1814750'>number</span> <span
  m='1814850'>of</span> <span m='1814960'>jumps.</span> <span m='1815180'>He
  means</span> <span m='1815360'>the</span> <span m='1815440'>least</span> <span
  m='1815680'>amount</span> <span m='1815820'>of</span> <span
  m='1815910'>energy</span> <span m='1816300'>on</span> <span
  m='1816430'>these</span> <span m='1816610'>edges.</span> <span
  m='1816900'>He's</span> <span m='1817080'>not</span> <span
  m='1817420'>interested</span> <span m='1817950'>in</span> <span
  m='1818830'>getting</span> <span m='1819090'>to</span> <span
  m='1819230'>this</span> <span m='1819360'>new</span> <span
  m='1819610'>world,</span> <span m='1820010'>and</span> <span
  m='1820100'>not</span> <span m='1820340'>having</span> <span
  m='1820470'>enough</span> <span m='1820710'>energy</span> <span
  m='1821020'>left</span> <span m='1821300'>to</span> <span m='1821390'>blast
  the</span> <span m='1821850'>crap</span> <span m='1822090'>out</span> <span
  m='1822250'>of</span> <span m='1822340'>it.</span> </p><p><span
  m='1823000'>So</span> <span m='1824090'>we</span> <span
  m='1824240'>need</span> <span m='1824410'>to</span> <span
  m='1824510'>find</span> <span m='1824740'>the</span> <span
  m='1824790'>shortest</span> <span m='1825180'>path.</span> <span
  m='1826140'>So</span> <span m='1826320'>first</span> <span
  m='1826660'>Mark</span> <span m='1826920'>programs</span> <span
  m='1827390'>a</span> <span m='1827470'>simple</span> <span
  m='1827780'>branch</span> <span m='1828150'>and bound</span> <span
  m='1828560'>search.</span> <span m='1829680'>He</span> <span
  m='1829850'>adds</span> <span m='1830080'>in an</span> <span
  m='1830400'>extended</span> <span m='1830830'>list</span> <span m='1831390'>to
  his</span> <span m='1831770'>branch</span> <span m='1832040'>and</span> <span
  m='1832140'>bound</span> <span m='1832780'>just</span> <span
  m='1832950'>to</span> <span m='1833010'>make</span> <span
  m='1833150'>it</span> <span m='1833220'>a</span> <span
  m='1833290'>little</span> <span m='1833470'>bit</span> <span
  m='1833620'>faster.</span> <span m='1834630'>As</span> <span
  m='1834880'>usual,</span> <span m='1835180'>he</span> <span
  m='1835320'>breaks</span> <span m='1835680'>ties</span> <span
  m='1835970'>of</span> <span m='1836060'>equal</span> <span
  m='1836330'>length</span> <span m='1836600'>in</span> <span
  m='1836990'>lexicographic</span> <span m='1837390'>order.</span> <span
  m='1838470'>So</span> <span m='1840010'>let's</span> <span
  m='1840280'>list</span> <span m='1840510'>the</span> <span
  m='1840590'>nodes</span> <span m='1840880'>that</span> <span
  m='1840970'>Mark's</span> <span m='1841230'>computer</span> <span
  m='1841720'>adds</span> <span m='1842450'>to</span> <span
  m='1842590'>the</span> <span m='1842670'>extended</span> <span
  m='1843080'>list</span> <span m='1843750'>in</span> <span
  m='1843920'>order.</span> <span m='1845640'>Distances</span> <span
  m='1845990'>are</span> <span m='1846170'>shown</span> <span m='1846400'>next
  to</span> <span m='1846510'>the</span> <span m='1846680'>edges.</span> <span
  m='1847050'>Ignore</span> <span m='1847430'>the</span> <span
  m='1847540'>number</span> <span m='1847810'>in</span> <span
  m='1847900'>parentheses</span> <span m='1848890'>for</span> <span
  m='1849060'>now.</span> <span m='1849530'>They</span> <span
  m='1849680'>are</span> <span m='1849810'>heuristics,</span> <span
  m='1850490'>and</span> <span m='1850690'>we're</span> <span
  m='1850800'>not</span> <span m='1851100'>using</span> <span
  m='1851380'>them.</span> </p><p><span m='1852180'>So</span> <span
  m='1852520'>that</span> <span m='1852830'>brings</span> <span
  m='1853010'>me</span> <span m='1853160'>to</span> <span
  m='1853230'>another</span> <span m='1853480'>point</span> <span
  m='1853740'>that</span> <span m='1853860'>I'd</span> <span
  m='1853980'>like</span> <span m='1854150'>to</span> <span
  m='1854230'>drive</span> <span m='1854460'>home</span> <span
  m='1854700'>before</span> <span m='1855060'>we</span> <span
  m='1855720'>go</span> <span m='1855900'>for</span> <span
  m='1856050'>the</span> <span m='1856180'>home</span> <span
  m='1856410'>stretch</span> <span m='1856820'>and</span> <span
  m='1857110'>solve</span> <span m='1857400'>these</span> <span
  m='1857570'>problems.</span> <span m='1859320'>What</span> <span
  m='1859590'>the heck</span> <span m='1859870'>is</span> <span
  m='1859970'>the</span> <span m='1860040'>difference between</span> <span
  m='1860520'>branch</span> <span m='1860860'>and bound</span> <span
  m='1861740'>and</span> <span m='1861870'>A*?</span> <span
  m='1863290'>OK.</span> <span m='1864130'>I</span> <span
  m='1864290'>like</span> <span m='1864490'>to</span> <span
  m='1864620'>liken</span> <span m='1865000'>it</span> <span
  m='1865150'>to</span> <span m='1865250'>the</span> <span
  m='1865320'>following.</span> <span m='1865740'>I</span> <span
  m='1865810'>probably</span> <span m='1866140'>should</span> <span
  m='1866390'>have,</span> <span m='1867240'>I'll</span> <span
  m='1867430'>make</span> <span m='1867630'>this</span> <span
  m='1867780'>a</span> <span m='1867910'>silver</span> <span
  m='1868240'>star</span> <span m='1868580'>idea.</span> <span
  m='1875580'>OK.</span> <span m='1876130'>The</span> <span m='1876480'>silver
  star</span> <span m='1876550'>idea</span> <span m='1876830'>is</span> <span
  m='1877010'>pizza.</span> <span m='1878420'>It</span> <span
  m='1878550'>doesn't</span> <span m='1878770'>really</span> <span
  m='1878920'>look</span> <span m='1879060'>like</span> <span
  m='1879280'>pizza,</span> <span m='1879610'>but that's</span> <span
  m='1879720'>the</span> <span m='1880030'>silver star</span> <span
  m='1880200'>idea.</span> <span m='1880930'>Branch</span> <span
  m='1881230'>and</span> <span m='1881350'>bound</span> <span
  m='1881650'>is</span> <span m='1881780'>a</span> <span
  m='1881860'>cheese</span> <span m='1882150'>pizza.</span> <span
  m='1883230'>It's</span> <span m='1883420'>simple.</span> <span m='1884210'>If
  you</span> <span m='1884460'>order it</span> <span m='1884870'>for</span>
  <span m='1885000'>a</span> <span m='1885050'>large</span> <span
  m='1885440'>group</span> <span m='1885600'>event</span> <span
  m='1885840'>of</span> <span m='1885930'>college</span> <span
  m='1886250'>students,</span> <span m='1886680'>they</span> <span
  m='1886800'>will</span> <span m='1886980'>eat</span> <span
  m='1887160'>it,</span> <span m='1887390'>and</span> <span
  m='1887900'>things</span> <span m='1888100'>will</span> <span
  m='1888230'>be</span> <span m='1888340'>OK.</span> </p><p><span
  m='1890650'>Now</span> <span m='1890840'>A*</span> <span
  m='1891370'>search</span> <span m='1891790'>is</span> <span
  m='1892380'>some</span> <span m='1892600'>kind</span> <span
  m='1892710'>of</span> <span m='1892860'>meat</span> <span m='1893040'>lover's
  or</span> <span m='1893430'>supreme</span> <span m='1893840'>pizza.</span>
  <span m='1894330'>Maybe</span> <span m='1894580'>a</span> <span
  m='1894620'>meat</span> <span m='1894870'>lover's</span> <span
  m='1895160'>pizza.</span> <span m='1895530'>It's got</span> <span
  m='1895770'>all</span> <span m='1896010'>these</span> <span
  m='1896200'>extra</span> <span m='1896500'>toppings.</span> <span
  m='1896960'>A</span> <span m='1897010'>lot</span> <span m='1897230'>of</span>
  <span m='1897300'>people</span> <span m='1897540'>are</span> <span
  m='1897600'>really</span> <span m='1897820'>going</span> <span
  m='1897940'>to</span> <span m='1898010'>like</span> <span
  m='1898290'>it.</span> <span m='1898620'>It might</span> <span
  m='1898840'>be</span> <span m='1898950'>better.</span> <span
  m='1899650'>But</span> <span m='1899680'>then</span> <span
  m='1899880'>you've</span> <span m='1900000'>got</span> <span
  m='1900130'>a</span> <span m='1900150'>vegetarian,</span> <span
  m='1900610'>and</span> <span m='1901070'>everything's</span> <span
  m='1901470'>screwed</span> <span m='1901810'>up.</span> <span
  m='1903840'>So</span> <span m='1905450'>basically,</span> <span
  m='1907050'>A*</span> <span m='1907500'>is</span> <span
  m='1907650'>just</span> <span m='1907910'>branch</span> <span
  m='1908190'>and</span> <span m='1908290'>bound</span> <span
  m='1908520'>with</span> <span m='1908700'>some</span> <span
  m='1908800'>extra</span> <span m='1909130'>toppings</span> <span
  m='1909600'>added</span> <span m='1909820'>on.</span> <span
  m='1909990'>In</span> <span m='1910110'>this</span> <span
  m='1910300'>case,</span> <span m='1910910'>one</span> <span
  m='1911120'>of</span> <span m='1911200'>the</span> <span
  m='1911310'>toppings</span> <span m='1911940'>is</span> <span
  m='1912440'>an</span> <span m='1912700'>extended</span> <span
  m='1913270'>list,</span> <span m='1914970'>an</span> <span
  m='1915050'>extended</span> <span m='1915490'>list</span> <span
  m='1915810'>which</span> <span m='1916340'>we'll</span> <span
  m='1916540'>see</span> <span m='1917090'>keeps</span> <span
  m='1917320'>track</span> <span m='1917540'>of</span> <span
  m='1917670'>where</span> <span m='1917890'>we've</span> <span
  m='1918790'>passed</span> <span m='1919310'>through</span> <span
  m='1919600'>and</span> <span m='1919700'>already</span> <span
  m='1920430'>expanded</span> <span m='1920920'>out,</span> <span
  m='1921710'>and</span> <span m='1921850'>it</span> <span
  m='1921930'>never</span> <span m='1922140'>goes</span> <span
  m='1922330'>back.</span> </p><p><span m='1923140'>The</span> <span
  m='1923320'>other</span> <span m='1923640'>topping</span> <span
  m='1924790'>that</span> <span m='1925120'>we're</span> <span
  m='1925560'>going</span> <span m='1925660'>to</span> <span
  m='1925720'>add</span> <span m='1926160'>is</span> <span m='1926440'>a</span>
  <span m='1926710'>heuristic.</span> <span m='1926980'>A</span> <span
  m='1927380'>heuristic</span> <span m='1927850'>tells</span> <span
  m='1928100'>us</span> <span m='1928210'>about</span> <span
  m='1928630'>how</span> <span m='1928830'>far</span> <span
  m='1929090'>we</span> <span m='1929220'>think</span> <span
  m='1929380'>we</span> <span m='1929450'>have</span> <span
  m='1929590'>left</span> <span m='1929890'>until</span> <span m='1930110'>we're
  at</span> <span m='1930250'>the</span> <span m='1930450'>end,</span> <span
  m='1931210'>so</span> <span m='1931430'>we</span> <span
  m='1931550'>don't</span> <span m='1931820'>go</span> <span m='1932310'>through
  really</span> <span m='1932600'>short</span> <span m='1932880'>paths</span>
  <span m='1933280'>that go</span> <span m='1933480'>completely</span> <span
  m='1933830'>in</span> <span m='1933900'>the</span> <span
  m='1934000'>wrong</span> <span m='1934260'>direction.</span> <span
  m='1935330'>All</span> <span m='1935400'>right?</span> <span
  m='1936480'>Between</span> <span m='1936860'>the</span> <span
  m='1936970'>two</span> <span m='1937170'>of</span> <span
  m='1937320'>those,</span> <span m='1938330'>we</span> <span
  m='1938460'>get</span> <span m='1938680'>our</span> <span
  m='1938780'>supreme</span> <span m='1939190'>pizza,</span> <span
  m='1939700'>but</span> <span m='1939910'>sometimes,</span> <span
  m='1940320'>as</span> <span m='1940440'>we'll</span> <span
  m='1940550'>see,</span> <span m='1942070'>they</span> <span
  m='1942180'>sort</span> <span m='1942340'>of</span> <span
  m='1942410'>mess</span> <span m='1942670'>each</span> <span
  m='1942840'>other</span> <span m='1943070'>up.</span> <span
  m='1944280'>So</span> <span m='1944510'>one</span> <span m='1944810'>of
  the</span> <span m='1945110'>toppings</span> <span m='1945400'>just</span>
  <span m='1945580'>doesn't</span> <span m='1945840'>go</span> <span
  m='1945980'>well</span> <span m='1946270'>with the</span> <span
  m='1946360'>other</span> <span m='1946600'>one.</span> <span
  m='1946840'>Maybe</span> <span m='1947560'>someone</span> <span
  m='1947810'>doesn't</span> <span m='1948020'>Hawaiian.</span> <span
  m='1948660'>They</span> <span m='1948770'>think</span> <span
  m='1948980'>that</span> <span m='1949120'>the</span> <span
  m='1950560'>ham</span> <span m='1950840'>doesn't</span> <span
  m='1951070'>go</span> <span m='1951230'>well with</span> <span
  m='1951400'>the</span> <span m='1951490'>pineapple.</span> </p><p><span
  m='1955640'>So</span> <span m='1956930'>let's</span> <span
  m='1957200'>do</span> <span m='1957310'>a</span> <span
  m='1957370'>branch</span> <span m='1957690'>and bound</span> <span
  m='1958060'>that</span> <span m='1958150'>just</span> <span
  m='1958360'>has</span> <span m='1958540'>an</span> <span
  m='1958620'>extended</span> <span m='1959090'>list.</span> <span
  m='1960290'>Maybe</span> <span m='1960570'>we've</span> <span
  m='1960760'>got</span> <span m='1960910'>some</span> <span
  m='1961020'>green</span> <span m='1961250'>peppers</span> <span
  m='1961670'>on</span> <span m='1961790'>this</span> <span
  m='1961880'>pizza.</span> <span m='1962650'>This</span> <span
  m='1962830'>is</span> <span m='1962960'>going</span> <span
  m='1963080'>to</span> <span m='1963120'>be</span> <span
  m='1963260'>safe.</span> <span m='1966220'>All</span> <span
  m='1966370'>right.</span> <span m='1967020'>So</span> <span
  m='1967200'>we're</span> <span m='1967320'>going to</span> <span
  m='1967550'>list</span> <span m='1967820'>the</span> <span
  m='1967910'>nodes</span> <span m='1968400'>as</span> <span m='1968610'>to
  the</span> <span m='1968790'>extended</span> <span m='1969120'>list,</span>
  <span m='1969480'>and</span> <span m='1969880'>the way</span> <span
  m='1970030'>we're</span> <span m='1970100'>going</span> <span
  m='1970200'>to</span> <span m='1970270'>do</span> <span
  m='1970410'>that</span> <span m='1970930'>is,</span> <span
  m='1971350'>well,</span> <span m='1971580'>you</span> <span
  m='1971650'>guys</span> <span m='1971840'>said you</span> <span
  m='1972070'>like</span> <span m='1972260'>goal</span> <span
  m='1972600'>tree</span> <span m='1972940'>more</span> <span
  m='1973090'>than</span> <span m='1973280'>queue,</span> <span
  m='1973690'>so</span> <span m='1973880'>let's</span> <span
  m='1974110'>do</span> <span m='1974250'>it with a</span> <span
  m='1974390'>goal</span> <span m='1974650'>tree.</span> <span
  m='1975770'>So</span> <span m='1976090'>we've</span> <span
  m='1976280'>got</span> <span m='1977920'>S,</span> <span
  m='1979040'>and</span> <span m='1979320'>as</span> <span m='1979520'>we</span>
  <span m='1979670'>already</span> <span m='1979960'>know,</span> <span
  m='1983620'>S is</span> <span m='1983820'>the</span> <span
  m='1983990'>only</span> <span m='1984290'>path.</span> <span
  m='1986170'>Our</span> <span m='1986350'>current</span> <span
  m='1986640'>length at</span> <span m='1987060'>S</span> <span
  m='1987430'>is</span> <span m='1987610'>0.</span> <span
  m='1988460'>That's</span> <span m='1988750'>the</span> <span
  m='1988830'>lowest</span> <span m='1989370'>of</span> <span
  m='1989510'>all</span> <span m='1989770'>of our</span> <span
  m='1989900'>lengths</span> <span m='1990220'>on</span> <span
  m='1990320'>the</span> <span m='1990420'>tree</span> <span
  m='1990720'>cause</span> <span m='1991020'>it's</span> <span
  m='1991280'>the</span> <span m='1991430'>only</span> <span
  m='1991830'>length.</span> </p><p><span m='1992650'>So</span> <span
  m='1992950'>we</span> <span m='1993070'>go</span> <span m='1993290'>to</span>
  <span m='1993600'>A,</span> <span m='1993790'>B,</span> <span
  m='1993990'>and</span> <span m='1994150'>C.</span> <span m='1999490'>It</span>
  <span m='1999600'>may</span> <span m='1999750'>be</span> <span
  m='1999840'>hard</span> <span m='2000090'>to</span> <span
  m='2000180'>see,</span> <span m='2001110'>so</span> <span
  m='2001770'>the</span> <span m='2001880'>length</span> <span
  m='2002110'>of</span> <span m='2002230'>SA</span> <span m='2003100'>is</span>
  <span m='2003440'>100.</span> <span m='2006260'>The</span> <span
  m='2006360'>length</span> <span m='2006600'>of</span> <span
  m='2006740'>SB</span> <span m='2007930'>is--</span> </p><p><span
  m='2008250'>AUDIENCE: You mean</span> <span m='2008570'>ABEF?</span>
  </p><p><span m='2009935'>AUDIENCE: Yeah.</span> <span
  m='2012300'>[CHATTER]</span> </p><p><span m='2013570'>PROFESSOR: Oh. 
  You're</span> <span m='2013970'>right.</span> <span m='2014190'>It's</span>
  <span m='2014310'>a</span> <span m='2014360'>different</span> <span
  m='2014690'>tree.</span> <span m='2015080'>I</span> <span
  m='2015210'>was</span> <span m='2015380'>doing</span> <span m='2015590'>A, B,
  and C</span> <span m='2016020'>from the</span> <span m='2016210'>other</span>
  <span m='2016400'>tree.</span> <span m='2017060'>Thank</span> <span
  m='2017350'>you,</span> <span m='2017700'>friends,</span> <span
  m='2018260'>for</span> <span m='2018820'>correcting</span> <span
  m='2019200'>my</span> <span m='2019420'>foolishness.</span> <span
  m='2023480'>The</span> <span m='2023680'>length</span> <span
  m='2023830'>of</span> <span m='2023970'>SB</span> <span m='2024500'>is</span>
  <span m='2024760'>3.</span> <span m='2025330'>It is</span> <span
  m='2025560'>a</span> <span m='2025640'>different</span> <span
  m='2026370'>tree.</span> <span m='2026690'>I</span> <span
  m='2026780'>was</span> <span m='2026940'>trying</span> <span
  m='2027170'>to</span> <span m='2027350'>save</span> <span
  m='2028430'>work</span> <span m='2028810'>that</span> <span m='2029000'>wound
  up</span> <span m='2029480'>creating</span> <span m='2029760'>more</span>
  <span m='2030140'>because</span> <span m='2030330'>someone's</span> <span
  m='2030760'>going</span> <span m='2030980'>to</span> <span
  m='2032080'>be</span> <span m='2032210'>confused</span> <span
  m='2032540'>by</span> <span m='2032760'>this.</span> <span
  m='2032920'>So</span> <span m='2032990'>the</span> <span
  m='2033050'>length</span> <span m='2033350'>of</span> <span
  m='2033520'>A,</span> <span m='2033830'>B,</span> <span m='2034280'>E,
  and</span> <span m='2034580'>F</span> <span m='2034905'>are</span> <span
  m='2035350'>100,</span> <span m='2035760'>3,</span> <span
  m='2036170'>14,</span> <span m='2036526'>and</span> <span
  m='2036882'>14.</span> <span m='2037680'>Which</span> <span
  m='2037900'>one</span> <span m='2038050'>do</span> <span m='2038130'>we</span>
  <span m='2038340'>choose?</span> <span m='2038820'>Lexicographically,</span>
  <span m='2039520'>it's</span> <span m='2039650'>A.</span> <span
  m='2040280'>We</span> <span m='2040370'>choose</span> <span
  m='2040490'>that</span> <span m='2040640'>one,</span> <span
  m='2040800'>right?</span> </p><p><span m='2041360'>AUDIENCE: [CHATTER]</span>
  </p><p><span m='2042760'>PROFESSOR: F</span> <span m='2042980'>is</span> <span
  m='2043120'>going</span> <span m='2043230'>to</span> <span
  m='2043280'>be</span> <span m='2043370'>14.</span> <span m='2044530'>That'
  a</span> <span m='2044670'>1.</span> <span m='2045030'>Sorry.</span>
  </p><p><span m='2045305'>AUDIENCE: 4.</span> <span m='2047150'>4.</span>
  </p><p><span m='2047980'>PROFESSOR: Oh, it's</span> <span
  m='2048250'>4?</span> <span m='2051040'>I</span> <span
  m='2051190'>wrote</span> <span m='2051420'>this</span> <span
  m='2051580'>problem.</span> <span m='2051860'>I</span> <span
  m='2051980'>should</span> <span m='2052170'>know</span> <span
  m='2052290'>it.</span> <span m='2052420'>You're</span> <span
  m='2052590'>right.</span> <span m='2052840'>F</span> <span
  m='2053270'>is</span> <span m='2053400'>4.</span> <span m='2054120'>My</span>
  <span m='2054300'>apologies</span> <span m='2054760'>once</span> <span
  m='2055090'>more.</span> <span m='2055775'>That's what</span> <span
  m='2056050'>I</span> <span m='2056190'>get.</span> <span m='2056600'>All
  right.</span> <span m='2057060'>I'm going to</span> <span m='2057280'>stand
  over</span> <span m='2057480'>here</span> <span m='2058070'>from</span> <span
  m='2058210'>now</span> <span m='2058400'>on</span> <span
  m='2058909'>when</span> <span m='2059070'>I</span> <span
  m='2059139'>write</span> <span m='2059400'>over</span> <span
  m='2059590'>there.</span> <span m='2062050'>OK.</span> <span
  m='2062840'>So</span> <span m='2063280'>which</span> <span
  m='2063489'>one</span> <span m='2063679'>of</span> <span
  m='2063750'>these</span> <span m='2063969'>are</span> <span
  m='2064030'>we</span> <span m='2064139'>going</span> <span
  m='2064330'>to</span> <span m='2064610'>choose?</span> <span
  m='2065060'>Even</span> <span m='2065350'>with</span> <span
  m='2065530'>the</span> <span m='2065620'>4,</span> <span
  m='2066139'>we're</span> <span m='2066239'>going</span> <span
  m='2066370'>to</span> <span m='2066449'>choose</span> <span
  m='2067489'>B.</span> <span m='2067960'>That's</span> <span
  m='2068179'>right.</span> <span m='2068730'>Lexicographic</span> <span
  m='2069090'>be</span> <span m='2069580'>damned.</span> <span
  m='2069889'>It's</span> <span m='2070020'>only</span> <span
  m='2070219'>for</span> <span m='2070370'>tiebreaks.</span> <span
  m='2071120'>We</span> <span m='2071260'>want</span> <span
  m='2071440'>the</span> <span m='2071510'>shortest</span> <span
  m='2071940'>path.</span> <span m='2072960'>Our</span> <span
  m='2073409'>special</span> <span m='2073850'>thing</span> <span
  m='2074020'>with branch and</span> <span m='2074320'>bound</span> <span
  m='2074540'>is</span> <span m='2074620'>we</span> <span
  m='2074739'>take</span> <span m='2074940'>the</span> <span
  m='2075030'>currently</span> <span m='2075530'>shortest</span> <span
  m='2075900'>path,</span> <span m='2076159'>whatever</span> <span
  m='2076489'>it</span> <span m='2076550'>is.</span> <span
  m='2077420'>Great.</span> </p><p><span m='2078659'>So</span> <span
  m='2078790'>we</span> <span m='2078889'>expand</span> <span
  m='2079250'>B.</span> <span m='2079969'>Fortunately,</span> <span
  m='2080560'>and</span> <span m='2080650'>I'm</span> <span
  m='2080739'>pretty</span> <span m='2080969'>sure</span> <span
  m='2081400'>I've</span> <span m='2081560'>got</span> <span
  m='2081750'>this</span> <span m='2081909'>correct</span> <span
  m='2082164'>this</span> <span m='2082420'>time--</span> <span
  m='2082920'>oh</span> <span m='2083370'>wait,</span> <span
  m='2083630'>I've</span> <span m='2083780'>got an</span> <span
  m='2083940'>even</span> <span m='2084110'>better</span> <span
  m='2084320'>idea.</span> <span m='2085560'>I'll</span> <span
  m='2085590'>just</span> <span m='2085880'>take</span> <span
  m='2086139'>this</span> <span m='2086320'>little</span> <span
  m='2086580'>hand</span> <span m='2086840'>sheet</span> <span
  m='2087100'>with</span> <span m='2087310'>me,</span> <span m='2087480'>and
  then</span> <span m='2087650'>I</span> <span m='2087710'>don't</span> <span
  m='2087889'>have</span> <span m='2088040'>to</span> <span
  m='2088150'>look</span> <span m='2088389'>at that at</span> <span
  m='2088750'>all.</span> <span m='2089540'>OK.</span> <span
  m='2090030'>So</span> <span m='2090360'>once</span> <span
  m='2090550'>we</span> <span m='2090699'>expand</span> <span m='2091070'>B,
  B</span> <span m='2091520'>goes</span> <span m='2091780'>to</span> <span
  m='2091909'>D.</span> <span m='2094049'>Our</span> <span
  m='2094480'>path</span> <span m='2094820'>length</span> <span
  m='2095110'>from</span> <span m='2095230'>B to D</span> <span
  m='2095550'>is</span> <span m='2095679'>4,</span> <span m='2096230'>so</span>
  <span m='2096550'>what</span> <span m='2096810'>will we</span> <span
  m='2097040'>write</span> <span m='2097310'>next</span> <span
  m='2097520'>to</span> <span m='2097640'>little</span> <span
  m='2097870'>G</span> <span m='2098090'>here?</span> <span
  m='2099000'>7.</span> <span m='2099630'>That's</span> <span
  m='2099800'>right.</span> <span m='2099920'>We</span> <span m='2100080'>add
  them</span> <span m='2100300'>all together.</span> <span
  m='2103270'>I'm</span> <span m='2103400'>going</span> <span
  m='2103510'>to</span> <span m='2103560'>ask</span> <span
  m='2103820'>you</span> <span m='2103900'>guys</span> <span
  m='2104120'>again</span> <span m='2105190'>the</span> <span
  m='2105300'>next</span> <span m='2105580'>time</span> <span
  m='2105740'>we</span> <span m='2105840'>do</span> <span
  m='2105950'>this</span> <span m='2106140'>with</span> <span
  m='2106350'>the</span> <span m='2106640'>heuristics,</span> <span
  m='2106955'>which is</span> <span m='2107270'>going to</span> <span
  m='2107360'>be</span> <span m='2107450'>the</span> <span
  m='2107530'>next</span> <span m='2107740'>part</span> <span
  m='2107860'>of</span> <span m='2107900'>the</span> <span
  m='2107980'>problem,</span> <span m='2108360'>and</span> <span
  m='2108620'>someone's</span> <span m='2108920'>going to give</span> <span
  m='2109150'>me</span> <span m='2109210'>the</span> <span
  m='2109320'>wrong</span> <span m='2109570'>answer</span> <span
  m='2109940'>next</span> <span m='2110130'>time.</span> <span
  m='2110780'>So</span> <span m='2111300'>stay</span> <span
  m='2111500'>tuned</span> <span m='2111720'>for</span> <span
  m='2111850'>that.</span> </p><p><span m='2112620'>All right.</span> <span
  m='2112780'>So we've</span> <span m='2113130'>got</span> <span
  m='2113440'>SBD.</span> <span m='2113960'>We've</span> <span
  m='2114080'>got</span> <span m='2114220'>all of</span> <span
  m='2114460'>these.</span> <span m='2114660'>Where</span> <span m='2114880'>do
  we</span> <span m='2114980'>go</span> <span m='2115130'>next?</span> <span
  m='2116000'>F.</span> <span m='2116760'>That's</span> <span
  m='2116970'>right,</span> <span m='2117550'>because</span> <span
  m='2117760'>currently</span> <span m='2118110'>4</span> <span
  m='2118520'>is</span> <span m='2118610'>the</span> <span
  m='2118730'>shortest</span> <span m='2119110'>because</span> <span
  m='2119510'>you</span> <span m='2119660'>guys</span> <span
  m='2119910'>corrected</span> <span m='2120280'>me</span> <span
  m='2120490'>correctly.</span> <span m='2121570'>So</span> <span
  m='2122000'>SF.</span> <span m='2122650'>4</span> <span m='2122860'>is</span>
  <span m='2122940'>the</span> <span m='2123040'>shortest.</span> <span
  m='2123940'>F</span> <span m='2124260'>only</span> <span
  m='2124480'>goes</span> <span m='2124710'>to</span> <span
  m='2124830'>H.</span> <span m='2126230'>And</span> <span
  m='2126380'>what</span> <span m='2126510'>do</span> <span
  m='2126570'>we</span> <span m='2126670'>write</span> <span
  m='2126850'>next</span> <span m='2127000'>to</span> <span
  m='2127060'>the</span> <span m='2127180'>H?</span> <span
  m='2128104'>20.</span> <span m='2129030'>That's</span> <span
  m='2129270'>right.</span> <span m='2130980'>16</span> <span
  m='2131440'>plus</span> <span m='2131650'>4,</span> <span
  m='2132055'>20.</span> <span m='2132460'>All right.</span> <span
  m='2132940'>Where's</span> <span m='2133280'>our</span> <span
  m='2133390'>current</span> <span m='2133690'>shortest?</span> <span
  m='2135130'>It's</span> <span m='2135300'>the</span> <span
  m='2135420'>D,</span> <span m='2135903'>SBD.</span> <span
  m='2136870'>All</span> <span m='2136920'>right?</span> <span
  m='2137400'>So</span> <span m='2137840'>SBD.</span> <span m='2138265'>D</span>
  <span m='2138690'>only</span> <span m='2138900'>goes</span> <span
  m='2139190'>to I,</span> <span m='2140790'>and</span> <span
  m='2140870'>we've</span> <span m='2141010'>got</span> <span
  m='2141250'>a</span> <span m='2141330'>57.</span> </p><p><span
  m='2149950'>Wait</span> <span m='2150120'>a</span> <span
  m='2150160'>minute.</span> <span m='2150430'>I</span> <span
  m='2150550'>want</span> <span m='2150650'>to</span> <span
  m='2150690'>get</span> <span m='2150800'>this</span> <span
  m='2150950'>problem</span> <span m='2151320'>right,</span> <span
  m='2151780'>so</span> <span m='2152350'>we</span> <span
  m='2152740'>better</span> <span m='2153020'>actually</span> <span
  m='2153430'>write</span> <span m='2153620'>the</span> <span
  m='2153760'>extended</span> <span m='2154130'>list,</span> <span
  m='2154650'>[INAUDIBLE]</span> <span m='2155230'>because</span> <span
  m='2155490'>that's</span> <span m='2155660'>the</span> <span
  m='2155740'>only</span> <span m='2155910'>thing</span> <span
  m='2156040'>they're</span> <span m='2156130'>asking us</span> <span
  m='2156460'>for.</span> <span m='2157120'>So</span> <span
  m='2157520'>first</span> <span m='2157770'>we</span> <span
  m='2157840'>extended</span> <span m='2158260'>S.</span> <span m='2158930'>Then
  we</span> <span m='2159120'>extended</span> <span m='2159610'>B.</span> <span
  m='2161340'>Then</span> <span m='2161520'>we</span> <span
  m='2161650'>extended</span> <span m='2161870'>F.</span> <span
  m='2164300'>Then</span> <span m='2164580'>we</span> <span
  m='2164670'>extended</span> <span m='2165180'>D.</span> <span m='2167360'>All
  right.</span> <span m='2168050'>So</span> <span m='2168350'>far,</span> <span
  m='2168680'>so</span> <span m='2168880'>good.</span> <span
  m='2169190'>And</span> <span m='2169300'>I</span> <span
  m='2169400'>have</span> <span m='2169510'>the</span> <span
  m='2169590'>answer</span> <span m='2169860'>key, so</span> <span
  m='2170170'>I</span> <span m='2170260'>know</span> <span
  m='2170470'>we're</span> <span m='2170580'>doing</span> <span
  m='2170790'>it</span> <span m='2170880'>right.</span> <span
  m='2171840'>OK.</span> <span m='2172520'>What</span> <span
  m='2172690'>are</span> <span m='2172750'>we</span> <span
  m='2172840'>doing</span> <span m='2173100'>next?</span> <span
  m='2174340'>E.</span> <span m='2174820'>That's</span> <span
  m='2175060'>right.</span> <span m='2175890'>So we</span> <span
  m='2176060'>extend</span> <span m='2176540'>E.</span> <span
  m='2177035'>E</span> <span m='2177530'>goes</span> <span m='2177840'>to</span>
  <span m='2178000'>H.</span> <span m='2180630'>And</span> <span
  m='2181190'>when</span> <span m='2181380'>E</span> <span
  m='2181510'>goes</span> <span m='2181700'>to</span> <span
  m='2181790'>H,</span> <span m='2182070'>we've</span> <span
  m='2182210'>got</span> <span m='2182480'>a</span> <span
  m='2182620'>length</span> <span m='2182890'>of</span> <span
  m='2183700'>30.</span> <span m='2185010'>All right.</span> </p><p><span
  m='2185650'>Who's</span> <span m='2185870'>our</span> <span
  m='2185980'>winner</span> <span m='2186300'>now?</span> <span
  m='2187590'>Which</span> <span m='2187860'>H?</span> <span
  m='2189210'>SFH.</span> <span m='2190010'>That's</span> <span
  m='2190210'>right.</span> <span m='2190490'>SFH</span> <span
  m='2190780'>is</span> <span m='2191120'>length</span> <span
  m='2191360'>20.</span> <span m='2192620'>Oh</span> <span
  m='2192740'>yeah,</span> <span m='2192870'>of</span> <span
  m='2193030'>course</span> <span m='2193220'>I</span> <span
  m='2193280'>should</span> <span m='2193460'>write</span> <span
  m='2193640'>an</span> <span m='2193750'>E in</span> <span
  m='2194070'>here.</span> <span m='2194350'>I</span> <span
  m='2194400'>always</span> <span m='2194630'>forget</span> <span
  m='2194920'>to</span> <span m='2195010'>do</span> <span
  m='2195150'>that.</span> <span m='2195920'>SFH</span> <span
  m='2196490'>is</span> <span m='2196600'>length</span> <span
  m='2196820'>20,</span> <span m='2197430'>so</span> <span m='2197705'>we
  will</span> <span m='2197980'>extend</span> <span m='2198510'>H,</span> <span
  m='2199070'>and</span> <span m='2199200'>I'm</span> <span
  m='2199280'>going</span> <span m='2199370'>to</span> <span
  m='2199450'>write</span> <span m='2199770'>it here</span> <span
  m='2199900'>preemptively.</span> <span m='2201680'>When</span> <span
  m='2201830'>we</span> <span m='2201960'>extend</span> <span
  m='2202300'>H</span> <span m='2202610'>over</span> <span
  m='2202840'>here,</span> <span m='2203160'>H</span> <span
  m='2203390'>only</span> <span m='2203570'>goes</span> <span
  m='2203890'>to</span> <span m='2204050'>I,</span> <span
  m='2205330'>with</span> <span m='2205530'>length</span> <span
  m='2205860'>50.</span> <span m='2207050'>Great.</span> <span
  m='2207780'>What's</span> <span m='2208030'>the</span> <span
  m='2208120'>next</span> <span m='2208440'>shortest?</span> <span
  m='2211170'>The</span> <span m='2211310'>next</span> <span
  m='2211520'>shortest</span> <span m='2211890'>is</span> <span
  m='2212100'>the</span> <span m='2212250'>other</span> <span
  m='2212590'>H.</span> <span m='2212990'>However,</span> <span
  m='2213590'>will</span> <span m='2213780'>we</span> <span
  m='2213880'>expand</span> <span m='2214280'>it?</span> <span
  m='2215440'>You</span> <span m='2215580'>guessed</span> <span
  m='2215860'>that</span> <span m='2216020'>because</span> <span
  m='2216300'>I</span> <span m='2216540'>asked</span> <span
  m='2216810'>that</span> <span m='2216980'>question</span> <span m='2217370'>in
  that</span> <span m='2217550'>way.</span> <span m='2217700'>You</span> <span
  m='2217790'>knew</span> <span m='2217920'>the</span> <span
  m='2218020'>answer</span> <span m='2218310'>was</span> <span
  m='2218420'>no.</span> <span m='2218900'>Why</span> <span
  m='2219150'>don't</span> <span m='2219270'>we</span> <span
  m='2219430'>expand</span> <span m='2219790'>it?</span> <span
  m='2221510'>It's</span> <span m='2221680'>already</span> <span m='2221975'>on
  the</span> <span m='2222270'>extended</span> <span m='2222780'>list.</span>
  <span m='2223140'>That's</span> <span m='2223390'>right.</span> </p><p><span
  m='2223920'>So</span> <span m='2224710'>since</span> <span
  m='2224860'>it's</span> <span m='2225010'>already</span> <span
  m='2225350'>on</span> <span m='2225630'>the</span> <span
  m='2225730'>extended</span> <span m='2226680'>list,</span> <span
  m='2226850'>this</span> <span m='2227010'>one</span> <span
  m='2227230'>dies</span> <span m='2228030'>a</span> <span
  m='2228130'>horrible</span> <span m='2228590'>death.</span> <span
  m='2229360'>I</span> <span m='2229480'>like</span> <span
  m='2229860'>writing</span> <span m='2230110'>an</span> <span
  m='2230220'>X</span> <span m='2230560'>through</span> <span
  m='2230750'>it</span> <span m='2231010'>instead</span> <span
  m='2231340'>of</span> <span m='2231430'>writing</span> <span
  m='2231600'>a</span> <span m='2231740'>swizzle</span> <span
  m='2231920'>at</span> <span m='2232110'>the</span> <span
  m='2232170'>bottom.</span> <span m='2233370'>You</span> <span
  m='2233550'>can</span> <span m='2233680'>do</span> <span
  m='2233780'>whatever</span> <span m='2234060'>you</span> <span
  m='2234200'>want.</span> <span m='2235090'>All</span> <span
  m='2235360'>right,</span> <span m='2235660'>it's</span> <span
  m='2235920'>gone.</span> <span m='2236350'>It's</span> <span
  m='2236510'>not</span> <span m='2236690'>a</span> <span
  m='2236750'>choice.</span> <span m='2237120'>What's</span> <span
  m='2237370'>the</span> <span m='2237450'>next</span> <span
  m='2237830'>best</span> <span m='2238140'>one?</span> <span
  m='2240260'>SFHI.</span> <span m='2241510'>That's</span> <span
  m='2241720'>right.</span> <span m='2242370'>That</span> <span
  m='2242660'>goes</span> <span m='2242870'>to</span> <span
  m='2242990'>G,</span> <span m='2244230'>and the</span> <span
  m='2244410'>length</span> <span m='2244670'>is</span> <span
  m='2244810'>60.</span> <span m='2245770'>And</span> <span
  m='2245910'>we've</span> <span m='2246000'>extended</span> <span
  m='2246380'>I.</span> <span m='2248210'>All</span> <span
  m='2248330'>right.</span> <span m='2251100'>Question</span> <span
  m='2251510'>is,</span> <span m='2251710'>are</span> <span
  m='2251930'>we</span> <span m='2252090'>done?</span> </p><p><span
  m='2255650'>The</span> <span m='2256100'>people</span> <span
  m='2256390'>who</span> <span m='2256510'>say</span> <span
  m='2256750'>no,</span> <span m='2257400'>I</span> <span
  m='2257580'>like</span> <span m='2257830'>you.</span> <span
  m='2258210'>You're</span> <span m='2258380'>smart.</span> <span
  m='2258890'>You</span> <span m='2259000'>realize</span> <span
  m='2259390'>that</span> <span m='2259620'>just</span> <span
  m='2259810'>because</span> <span m='2260190'>the G</span> <span
  m='2260310'>is</span> <span m='2260480'>on</span> <span
  m='2260670'>there,</span> <span m='2261250'>that</span> <span
  m='2261730'>we</span> <span m='2261850'>can't</span> <span
  m='2262090'>end.</span> <span m='2262850'>However,</span> <span
  m='2263040'>the</span> <span m='2263120'>people</span> <span
  m='2263320'>who</span> <span m='2263430'>said</span> <span
  m='2263680'>yes,</span> <span m='2264410'>you</span> <span
  m='2264610'>are</span> <span m='2264760'>either</span> <span
  m='2266320'>oblivious</span> <span m='2267010'>or</span> <span
  m='2267460'>really,</span> <span m='2267820'>really</span> <span
  m='2268070'>smart,</span> <span m='2268560'>and</span> <span
  m='2268710'>I'm</span> <span m='2268780'>going to</span> <span
  m='2269030'>choose to</span> <span m='2269220'>assume</span> <span
  m='2269400'>you're</span> <span m='2269530'>all</span> <span
  m='2269700'>really,</span> <span m='2270010'>really</span> <span
  m='2270160'>smart</span> <span m='2271140'>because</span> <span
  m='2271580'>the</span> <span m='2271680'>really,</span> <span
  m='2271980'>really</span> <span m='2272090'>smart</span> <span
  m='2272300'>people</span> <span m='2272520'>said,</span> <span
  m='2272800'>OK.</span> <span m='2273300'>Yes,</span> <span
  m='2273610'>we're</span> <span m='2273730'>not</span> <span
  m='2274010'>quite</span> <span m='2274310'>done</span> <span
  m='2274520'>just</span> <span m='2274740'>because</span> <span
  m='2274920'>we</span> <span m='2275050'>added</span> <span
  m='2275260'>a</span> <span m='2275340'>G.</span> <span m='2275570'>We</span>
  <span m='2275700'>still have</span> <span m='2276050'>to</span> <span
  m='2276130'>check</span> <span m='2276320'>to</span> <span
  m='2276430'>make</span> <span m='2276570'>sure</span> <span m='2276700'>there
  are</span> <span m='2276840'>no</span> <span m='2277000'>lengths</span> <span
  m='2277180'>with</span> <span m='2277260'>shorter</span> <span
  m='2277520'>path,</span> <span m='2277840'>but</span> <span
  m='2278040'>look.</span> <span m='2278660'>The</span> <span
  m='2278790'>only</span> <span m='2279010'>one with a</span> <span
  m='2279320'>shorter</span> <span m='2279610'>path</span> <span
  m='2281180'>is</span> <span m='2281420'>I,</span> <span
  m='2282480'>which</span> <span m='2282670'>is</span> <span
  m='2282770'>already</span> <span m='2282990'>on the</span> <span
  m='2283120'>extended</span> <span m='2283550'>list.</span> <span
  m='2284340'>So</span> <span m='2284620'>actually,</span> <span
  m='2284990'>we</span> <span m='2285130'>are</span> <span
  m='2285290'>done.</span> <span m='2285930'>Double</span> <span
  m='2286230'>check.</span> <span m='2287120'>We've</span> <span
  m='2287310'>got</span> <span m='2287730'>it.</span> </p><p><span
  m='2287940'>So</span> <span m='2288130'>these</span> <span
  m='2288400'>are</span> <span m='2288450'>the</span> <span
  m='2288560'>paths</span> <span m='2288960'>we</span> <span
  m='2289130'>extended</span> <span m='2289540'>in</span> <span
  m='2289670'>order,</span> <span m='2289970'>and</span> <span
  m='2290070'>our</span> <span m='2290190'>final</span> <span
  m='2290610'>path</span> <span m='2290900'>is?</span> <span
  m='2291640'>Everyone.</span> </p><p><span m='2292625'>AUDIENCE:
  [CHATTER]</span> </p><p><span m='2295050'>PROFESSOR: That's</span> <span
  m='2295300'>right.</span> <span m='2296620'>SFHIG.</span> <span
  m='2298770'>I</span> <span m='2299130'>claim</span> <span
  m='2299390'>that</span> <span m='2299530'>is</span> <span
  m='2299600'>the</span> <span m='2299690'>correct</span> <span
  m='2300030'>path.</span> <span m='2301180'>However,</span> <span
  m='2301940'>Mark is</span> <span m='2302330'>frustrated</span> <span
  m='2302870'>by</span> <span m='2302980'>branch</span> <span
  m='2303250'>and</span> <span m='2303360'>bound's speed.</span> <span
  m='2303740'>I</span> <span m='2304070'>don't</span> <span
  m='2304380'>know.</span> <span m='2304550'>I</span> <span
  m='2304650'>wasn't</span> <span m='2304890'>that</span> <span
  m='2305160'>frustrated.</span> <span m='2305670'>Seemed</span> <span
  m='2305840'>pretty</span> <span m='2306060'>good.</span> <span
  m='2306610'>But</span> <span m='2307310'>Mark is</span> <span
  m='2307710'>frustrated</span> <span m='2308130'>by</span> <span
  m='2308240'>branch and</span> <span m='2308540'>bound's</span> <span
  m='2308870'>speed,</span> <span m='2309330'>so</span> <span
  m='2309560'>he</span> <span m='2309680'>reprograms</span> <span
  m='2310590'>his</span> <span m='2310720'>computer</span> <span
  m='2311100'>to</span> <span m='2311220'>use</span> <span
  m='2311500'>A*.</span> <span m='2312980'>Mark</span> <span
  m='2313270'>counts</span> <span m='2313560'>the</span> <span
  m='2313650'>number</span> <span m='2313960'>of</span> <span
  m='2314050'>subspace</span> <span m='2314580'>anomalies</span> <span
  m='2315020'>between</span> <span m='2315340'>each</span> <span
  m='2315510'>universe</span> <span m='2315930'>and</span> <span
  m='2316040'>the</span> <span m='2316100'>goal,</span> <span
  m='2316770'>and</span> <span m='2316900'>uses</span> <span
  m='2317070'>this</span> <span m='2317290'>count</span> <span m='2317510'>as
  the</span> <span m='2317620'>heuristic</span> <span m='2318110'>for</span>
  <span m='2318280'>A*.</span> <span m='2318770'>These</span> <span
  m='2318960'>numbers</span> <span m='2319260'>are</span> <span
  m='2319350'>in</span> <span m='2319430'>parentheses.</span> <span
  m='2320060'>Hopefully,</span> <span m='2320390'>you</span> <span
  m='2320500'>can</span> <span m='2320640'>read</span> <span
  m='2320820'>them.</span> <span m='2322550'>Yes?</span> <span
  m='2322910'>Oh,</span> <span m='2323130'>we've</span> <span
  m='2323250'>got</span> <span m='2323360'>a</span> <span
  m='2323410'>question.</span> <span m='2324820'>Right</span> <span
  m='2325000'>here?</span> </p><p><span m='2325600'>AUDIENCE: So,</span> <span
  m='2326592'>given</span> <span m='2326840'>the</span> <span
  m='2327088'>implementation,</span> <span m='2327584'>you said that</span>
  <span m='2328080'>you expand</span> <span m='2328576'>all possible</span>
  <span m='2329072'>nodes.</span> <span m='2329568'>So why doesn't</span> <span
  m='2330064'>I</span> <span m='2330560'>go to C</span> <span m='2331056'>and
  D,</span> <span m='2331552'>as well as</span> <span
  m='2332048'>[INAUDIBLE]?</span> <span m='2332544'>Like,</span> <span
  m='2333040'>why doesn't it</span> <span m='2333536'>expand</span> <span
  m='2334032'>to</span> <span m='2334528'>[INAUDIBLE]?</span> </p><p><span
  m='2335040'>PROFESSOR: Ah.</span> <span m='2335750'>That</span> <span
  m='2335870'>is a</span> <span m='2335890'>very</span> <span
  m='2336140'>good</span> <span m='2336380'>question.</span> <span
  m='2337330'>And the</span> <span m='2337510'>answer</span> <span
  m='2337870'>is,</span> <span m='2338390'>a</span> <span
  m='2338820'>very</span> <span m='2339080'>simple</span> <span
  m='2339470'>answer.</span> <span m='2341000'>You</span> <span
  m='2341160'>guys</span> <span m='2341500'>tricked</span> <span
  m='2341670'>me.</span> <span m='2342070'>No,</span> <span
  m='2342230'>but</span> <span m='2342350'>I should have</span> <span
  m='2342680'>been able to</span> <span m='2342890'>figure it</span> <span
  m='2343140'>out.</span> <span m='2343240'>It</span> <span
  m='2343380'>does</span> <span m='2343640'>go</span> <span
  m='2343770'>to</span> <span m='2343860'>C and</span> <span
  m='2344140'>D.</span> <span m='2346530'>The</span> <span
  m='2346900'>correct</span> <span m='2347260'>tree,</span> <span
  m='2347620'>which</span> <span m='2348100'>we</span> <span
  m='2348450'>wouldn't</span> <span m='2348580'>have</span> <span
  m='2348710'>lost</span> <span m='2348950'>points</span> <span m='2349170'>for
  having the</span> <span m='2349620'>incorrect tree</span> <span
  m='2350060'>here</span> <span m='2350270'>cause we did</span> <span
  m='2350490'>get the correct</span> <span m='2350820'>answer,</span> <span
  m='2351800'>yes.</span> <span m='2353000'>The</span> <span
  m='2353150'>reason</span> <span m='2353380'>why it</span> <span
  m='2353550'>is,</span> <span m='2353820'>that</span> <span
  m='2354000'>same</span> <span m='2354230'>reason</span> <span
  m='2354500'>that</span> <span m='2354710'>very</span> <span
  m='2355100'>first</span> <span m='2355420'>time</span> <span m='2355600'>I
  asked</span> <span m='2355940'>someone</span> <span
  m='2356230'>something,</span> <span m='2356550'>he</span> <span
  m='2356660'>didn't</span> <span m='2356880'>remember</span> <span
  m='2357200'>the</span> <span m='2357330'>C.</span> <span
  m='2357705'>It's</span> <span m='2358080'>easy</span> <span
  m='2358330'>to</span> <span m='2358400'>forget</span> <span
  m='2358920'>to</span> <span m='2358990'>go</span> <span m='2359190'>up</span>
  <span m='2359340'>the</span> <span m='2359440'>tree.</span> <span
  m='2360860'>It</span> <span m='2361030'>does</span> <span
  m='2361390'>actually</span> <span m='2361760'>have a</span> <span
  m='2361900'>C and</span> <span m='2362280'>D.</span> <span
  m='2362520'>However,</span> <span m='2362890'>they</span> <span
  m='2363070'>are</span> <span m='2363630'>horrendous</span> <span
  m='2364470'>paths.</span> <span m='2364830'>They are</span> <span
  m='2365550'>100</span> <span m='2365980'>and</span> <span
  m='2366410'>100</span> <span m='2368670'>on</span> <span
  m='2369390'>their</span> <span m='2369600'>path</span> <span
  m='2369890'>length,</span> <span m='2370100'>and</span> <span
  m='2370260'>so</span> <span m='2370390'>it</span> <span
  m='2370470'>doesn't</span> <span m='2370720'>matter.</span> <span
  m='2370980'>But</span> <span m='2371270'>you</span> <span
  m='2371590'>were</span> <span m='2371650'>correct.</span> <span
  m='2372280'>The</span> <span m='2372340'>official</span> <span
  m='2372645'>answer</span> <span m='2372950'>we</span> <span m='2373030'>had
  up</span> <span m='2373220'>there is</span> <span m='2373400'>wrong.</span>
  </p><p><span m='2374239'>AUDIENCE: Would the D</span> <span
  m='2374738'>get</span> <span m='2375237'>added</span> <span
  m='2375736'>to</span> <span m='2376235'>this</span> <span m='2376734'>list
  of</span> <span m='2377233'>children</span> <span m='2377732'>that's
  already</span> <span m='2378231'>in the</span> <span m='2378730'>extended
  list?</span> </p><p><span m='2379460'>PROFESSOR: Good</span> <span
  m='2379630'>question.</span> <span m='2380750'>The</span> <span
  m='2380860'>question</span> <span m='2381160'>is,</span> <span
  m='2381330'>would</span> <span m='2381640'>the</span> <span
  m='2381710'>D</span> <span m='2382150'>get</span> <span
  m='2382370'>added</span> <span m='2383230'>to the</span> <span
  m='2383420'>children?</span> <span m='2384040'>After</span> <span
  m='2384290'>all,</span> <span m='2384400'>it's</span> <span
  m='2384510'>already</span> <span m='2384720'>in the</span> <span
  m='2384800'>extended</span> <span m='2385180'>list.</span> <span
  m='2386000'>The</span> <span m='2386090'>answer</span> <span
  m='2386490'>is,</span> <span m='2387080'>we</span> <span
  m='2387810'>search</span> <span m='2388530'>for,</span> <span
  m='2389170'>and</span> <span m='2389330'>remove,</span> <span
  m='2389650'>and</span> <span m='2389970'>kill</span> <span m='2390400'>all
  of</span> <span m='2390760'>the</span> <span m='2390920'>attempts</span> <span
  m='2391370'>to</span> <span m='2392330'>extend</span> <span
  m='2392770'>something</span> <span m='2393010'>that's</span> <span
  m='2393130'>already</span> <span m='2393280'>on the</span> <span
  m='2393400'>expanded</span> <span m='2393780'>list</span> <span
  m='2394020'>at</span> <span m='2394150'>the</span> <span
  m='2394260'>time</span> <span m='2394530'>we</span> <span
  m='2394660'>try</span> <span m='2394920'>to</span> <span
  m='2395110'>expand</span> <span m='2395610'>it.</span> <span
  m='2396400'>The</span> <span m='2396510'>time</span> <span
  m='2396720'>we</span> <span m='2396810'>try</span> <span m='2397050'>to</span>
  <span m='2397130'>expand</span> <span m='2397590'>it</span> <span
  m='2397740'>is</span> <span m='2397950'>only</span> <span
  m='2398240'>when</span> <span m='2398380'>it's</span> <span
  m='2398500'>on</span> <span m='2398610'>the</span> <span
  m='2398680'>front</span> <span m='2399020'>of</span> <span
  m='2399110'>the</span> <span m='2399210'>queue</span> <span
  m='2399510'>because</span> <span m='2399770'>it's</span> <span
  m='2399950'>the</span> <span m='2400320'>currently</span> <span
  m='2400680'>shortest</span> <span m='2401080'>path.</span> <span
  m='2401890'>So</span> <span m='2402000'>that</span> <span
  m='2402160'>means</span> <span m='2402430'>they</span> <span
  m='2402530'>get</span> <span m='2402810'>added.</span> <span
  m='2403860'>It's</span> <span m='2404010'>just</span> <span
  m='2404170'>that</span> <span m='2404320'>when</span> <span
  m='2404480'>it</span> <span m='2404560'>comes</span> <span
  m='2404790'>time</span> <span m='2405020'>to</span> <span
  m='2405110'>expand</span> <span m='2405570'>it,</span> <span
  m='2405650'>it</span> <span m='2405770'>will</span> <span
  m='2406000'>get</span> <span m='2406170'>crossed</span> <span
  m='2406480'>off</span> <span m='2406650'>no</span> <span
  m='2406760'>matter</span> <span m='2406990'>what.</span> <span
  m='2407745'>Turns</span> <span m='2408080'>out,</span> <span
  m='2408310'>it</span> <span m='2408420'>escaped</span> <span
  m='2408990'>execution</span> <span m='2409670'>because</span> <span
  m='2409960'>of</span> <span m='2410100'>the fact that</span> <span
  m='2410390'>we</span> <span m='2410500'>never</span> <span
  m='2410750'>expanded</span> <span m='2411160'>it.</span> </p><p><span
  m='2411440'>AUDIENCE: So H</span> <span m='2411936'>should go</span> <span
  m='2412432'>to E</span> <span m='2412928'>as well?</span> </p><p><span
  m='2413920'>PROFESSOR: So</span> <span m='2414150'>H</span> <span
  m='2414500'>should</span> <span m='2414680'>go</span> <span
  m='2414830'>to</span> <span m='2414960'>E as</span> <span
  m='2415250'>well,</span> <span m='2415740'>is</span> <span
  m='2415860'>the</span> <span m='2415940'>question.</span> <span
  m='2416350'>The</span> <span m='2416450'>answer</span> <span
  m='2416690'>is</span> <span m='2417040'>yes.</span> <span m='2417520'>H</span>
  <span m='2417660'>should</span> <span m='2417890'>go</span> <span
  m='2418120'>to E as</span> <span m='2418440'>well.</span> <span
  m='2420140'>A</span> <span m='2420230'>lot</span> <span
  m='2420550'>slipped</span> <span m='2420800'>past</span> <span
  m='2421060'>me</span> <span m='2421190'>this</span> <span
  m='2421420'>time.</span> <span m='2421710'>H</span> <span m='2422070'>should
  go to E</span> <span m='2422530'>as</span> <span m='2422620'>well,</span>
  <span m='2422970'>with</span> <span m='2423150'>a</span> <span
  m='2423280'>length</span> <span m='2423680'>of</span> <span
  m='2425030'>36,</span> <span m='2425750'>and</span> <span
  m='2425990'>it</span> <span m='2426140'>dies</span> <span
  m='2426510'>there.</span> <span m='2430340'>This</span> <span
  m='2430490'>one</span> <span m='2430650'>will</span> <span
  m='2430790'>actually</span> <span m='2431280'>be</span> <span
  m='2431555'>checked,</span> <span m='2431830'>so</span> <span
  m='2432150'>it</span> <span m='2432200'>actually</span> <span
  m='2432510'>does</span> <span m='2432730'>make</span> <span
  m='2432940'>a</span> <span m='2433010'>difference.</span> <span
  m='2433400'>If</span> <span m='2433520'>we</span> <span m='2433620'>ask</span>
  <span m='2434100'>how</span> <span m='2434270'>many</span> <span
  m='2434460'>times</span> <span m='2434880'>was</span> <span
  m='2435060'>a</span> <span m='2435120'>node</span> <span
  m='2436390'>executed</span> <span m='2437070'>due to</span> <span
  m='2438850'>already</span> <span m='2439070'>being on the</span> <span
  m='2439360'>extended</span> <span m='2439790'>list?</span> <span
  m='2441060'>Very</span> <span m='2441360'>good.</span> <span
  m='2441910'>Very</span> <span m='2442190'>good</span> <span
  m='2442390'>notice.</span> <span m='2442930'>It</span> <span
  m='2443050'>should</span> <span m='2443250'>be</span> <span
  m='2443380'>on</span> <span m='2443560'>there.</span> <span
  m='2444210'>We'll</span> <span m='2444380'>get</span> <span
  m='2444480'>it</span> <span m='2444570'>right</span> <span
  m='2444790'>next</span> <span m='2445050'>time.</span> </p><p><span
  m='2446821'>All right,</span> <span m='2447260'>everyone.</span> <span
  m='2448150'>So</span> <span m='2448810'>I'm</span> <span
  m='2448980'>working</span> <span m='2449220'>together</span> <span
  m='2449540'>with</span> <span m='2449690'>you.</span> <span
  m='2450670'>I</span> <span m='2450800'>made</span> <span
  m='2450990'>the</span> <span m='2451040'>mistake</span> <span
  m='2451410'>too.</span> <span m='2452000'>Easy</span> <span
  m='2452250'>one</span> <span m='2452390'>to</span> <span
  m='2452450'>make.</span> <span m='2452950'>It</span> <span
  m='2453070'>can</span> <span m='2453540'>mess</span> <span
  m='2453790'>you</span> <span m='2453890'>up.  It</span> <span
  m='2454010'>didn't</span> <span m='2454350'>this</span> <span
  m='2454550'>time.</span> <span m='2455130'>We're</span> <span
  m='2455260'>going</span> <span m='2455360'>to</span> <span
  m='2455400'>get</span> <span m='2455540'>it--</span> <span
  m='2455950'>question?</span> </p><p><span m='2457252'>AUDIENCE: If</span>
  <span m='2457733'>G's</span> <span m='2458214'>the</span> <span
  m='2458695'>goal</span> <span m='2459176'>at the</span> <span
  m='2459657'>end,</span> <span m='2460138'>and you</span> <span
  m='2460619'>get</span> <span m='2461100'>G</span> <span m='2461600'>in
  your</span> <span m='2462685'>outcomes,</span> <span m='2463170'>and</span>
  <span m='2463655'>you</span> <span m='2464140'>know</span> <span
  m='2464625'>the number</span> <span m='2465110'>that's</span> <span
  m='2465595'>shorter than everything</span> <span m='2466080'>else,</span>
  <span m='2466565'>do you</span> <span m='2467050'>have to actually</span>
  <span m='2467535'>extend</span> <span m='2468030'>at</span> <span
  m='2468600'>G?</span> </p><p><span m='2469600'>PROFESSOR: So,</span> <span
  m='2470100'>the</span> <span m='2470160'>question</span> <span
  m='2470480'>is,</span> <span m='2470560'>do you</span> <span
  m='2471410'>actually</span> <span m='2471690'>extend</span> <span
  m='2472130'>G?</span> <span m='2472610'>Should</span> <span
  m='2472900'>we</span> <span m='2473050'>even</span> <span
  m='2473300'>put</span> <span m='2473540'>G</span> <span m='2473650'>in</span>
  <span m='2473730'>the</span> <span m='2473850'>extended</span> <span
  m='2474170'>list?</span> <span m='2474720'>The</span> <span
  m='2474790'>answer</span> <span m='2475090'>is,</span> <span
  m='2476670'>the</span> <span m='2476820'>answer</span> <span
  m='2477110'>to</span> <span m='2477210'>that</span> <span
  m='2477370'>question</span> <span m='2477750'>is,</span> <span
  m='2478075'>it</span> <span m='2478400'>is a</span> <span
  m='2478440'>matter</span> <span m='2478790'>of</span> <span
  m='2478930'>taste.</span> <span m='2480170'>And</span> <span
  m='2480580'>in</span> <span m='2480730'>the</span> <span
  m='2480820'>questions</span> <span m='2481320'>where</span> <span
  m='2481610'>we,</span> <span m='2482410'>in</span> <span m='2482530'>my</span>
  <span m='2482650'>opinion,</span> <span m='2482900'>rather</span> <span
  m='2483100'>foolishly,</span> <span m='2483560'>asked</span> <span
  m='2483720'>how</span> <span m='2483920'>many</span> <span m='2484130'>nodes
  were</span> <span m='2484310'>extended,</span> <span m='2484890'>rather</span>
  <span m='2485170'>than ask</span> <span m='2485430'>you</span> <span
  m='2485580'>to</span> <span m='2485710'>write</span> <span
  m='2485920'>them</span> <span m='2486070'>out,</span> <span
  m='2486870'>we</span> <span m='2487110'>generally</span> <span
  m='2487580'>accept</span> <span m='2487860'>the</span> <span
  m='2487940'>answer</span> <span m='2488310'>where</span> <span
  m='2488440'>you</span> <span m='2488520'>didn't</span> <span
  m='2488720'>extend</span> <span m='2489230'>or</span> <span
  m='2489450'>where</span> <span m='2489600'>you</span> <span
  m='2489720'>did</span> <span m='2489870'>extend</span> <span
  m='2490175'>G.</span> <span m='2490910'>It's</span> <span
  m='2491100'>an</span> <span m='2491170'>implementation</span> <span
  m='2491890'>detail.</span> <span m='2492310'>You</span> <span
  m='2492440'>can</span> <span m='2492560'>either</span> <span
  m='2492850'>have</span> <span m='2493260'>a</span> <span m='2493370'>fail
  safe</span> <span m='2494100'>that,</span> <span m='2494600'>as</span> <span
  m='2494670'>soon</span> <span m='2494860'>as</span> <span
  m='2494950'>it</span> <span m='2495090'>sees</span> <span m='2495440'>G
  at</span> <span m='2495650'>the</span> <span m='2495750'>beginning</span>
  <span m='2496130'>of</span> <span m='2496220'>the</span> <span
  m='2496310'>list,</span> <span m='2496710'>says,</span> <span
  m='2497090'>we're out.</span> <span m='2497540'>We're</span> <span
  m='2497660'>not going to</span> <span m='2497940'>extend.</span> <span
  m='2498520'>We're</span> <span m='2498660'>done.</span> <span
  m='2498870'>We</span> <span m='2498980'>win.</span> <span m='2499500'>Or
  a</span> <span m='2499850'>fail safe</span> <span m='2500350'>that,</span>
  <span m='2500510'>when</span> <span m='2500650'>you're</span> <span
  m='2500760'>about</span> <span m='2501010'>to</span> <span
  m='2501050'>extend</span> <span m='2501530'>something,</span> <span
  m='2502250'>and</span> <span m='2502420'>you</span> <span
  m='2502730'>go</span> <span m='2502930'>into</span> <span
  m='2503080'>the</span> <span m='2503150'>extension</span> <span
  m='2503640'>process,</span> <span m='2504190'>and</span> <span
  m='2504330'>it</span> <span m='2504470'>sees</span> <span
  m='2504910'>that</span> <span m='2505060'>it ends in</span> <span
  m='2505250'>G,</span> <span m='2505340'>that</span> <span
  m='2505710'>it</span> <span m='2505820'>wins.</span> </p><p><span
  m='2506650'>So</span> <span m='2507610'>it is</span> <span
  m='2507820'>a</span> <span m='2507880'>matter</span> <span
  m='2508210'>of</span> <span m='2508340'>taste.</span> <span
  m='2509340'>If</span> <span m='2509500'>you</span> <span
  m='2509730'>kind</span> <span m='2509930'>of</span> <span
  m='2510050'>like</span> <span m='2510240'>to</span> <span
  m='2510350'>watch</span> <span m='2510990'>your</span> <span
  m='2511200'>little</span> <span m='2511450'>guy</span> <span
  m='2511720'>doing</span> <span m='2511920'>the</span> <span
  m='2512000'>search</span> <span m='2512300'>win,</span> <span
  m='2512750'>and</span> <span m='2512870'>have</span> <span
  m='2513030'>an</span> <span m='2513110'>S and a</span> <span
  m='2513500'>G,</span> <span m='2514040'>you</span> <span
  m='2514190'>can</span> <span m='2514310'>put</span> <span
  m='2514460'>it</span> <span m='2514560'>on.</span> <span m='2514835'>If</span>
  <span m='2515110'>you</span> <span m='2515330'>don't,</span> <span
  m='2516130'>you</span> <span m='2516250'>can not</span> <span
  m='2516600'>put</span> <span m='2516730'>it</span> <span
  m='2516820'>on.</span> <span m='2517670'>We</span> <span
  m='2517780'>won't</span> <span m='2518040'>take</span> <span
  m='2518240'>off</span> <span m='2518380'>points</span> <span
  m='2518850'>for</span> <span m='2519070'>whether</span> <span
  m='2519290'>or</span> <span m='2519320'>not</span> <span m='2519490'>it</span>
  <span m='2519550'>has</span> <span m='2519800'>a</span> <span
  m='2519870'>G</span> <span m='2520120'>at</span> <span m='2520200'>the</span>
  <span m='2520300'>end</span> <span m='2521090'>because</span> <span
  m='2521540'>clearly,</span> <span m='2521920'>if</span> <span
  m='2522040'>you</span> <span m='2522180'>did</span> <span
  m='2522480'>all</span> <span m='2522810'>the</span> <span
  m='2522920'>other</span> <span m='2523180'>crazy</span> <span
  m='2523530'>stuff</span> <span m='2523850'>correct,</span> <span
  m='2525060'>well,</span> <span m='2525710'>you</span> <span
  m='2525850'>could</span> <span m='2526020'>have</span> <span
  m='2526150'>written</span> <span m='2526340'>in a G</span> <span
  m='2526710'>if</span> <span m='2526990'>you</span> <span
  m='2527090'>wanted</span> <span m='2527410'>to.</span> <span
  m='2528240'>I</span> <span m='2528380'>think,</span> <span
  m='2528730'>unless</span> <span m='2529390'>there's</span> <span
  m='2529560'>someone</span> <span m='2529830'>who</span> <span
  m='2530440'>mis-solves</span> <span m='2531180'>the</span> <span
  m='2531340'>problem</span> <span m='2531780'>right</span> <span
  m='2531960'>at</span> <span m='2532020'>the</span> <span
  m='2532140'>end,</span> <span m='2532300'>is</span> <span
  m='2532440'>like,</span> <span m='2532500'>oh,</span> <span
  m='2533010'>who</span> <span m='2533160'>cares</span> <span
  m='2533390'>about</span> <span m='2533580'>G?</span> <span
  m='2534020'>Oh</span> <span m='2534330'>no,</span> <span
  m='2534550'>it's</span> <span m='2534760'>stuck. It's a</span> <span
  m='2535190'>dead</span> <span m='2535350'>end.</span> <span
  m='2535500'>We</span> <span m='2535600'>lose.</span> <span
  m='2536570'>But</span> <span m='2537070'>that</span> <span
  m='2537300'>would</span> <span m='2537380'>be</span> <span
  m='2537550'>probably</span> <span m='2537950'>pretty</span> <span
  m='2538170'>rare.</span> </p><p><span m='2539650'>So</span> <span
  m='2540280'>let's</span> <span m='2540560'>solve</span> <span
  m='2540970'>the</span> <span m='2542470'>A*.</span> <span
  m='2543350'>So</span> <span m='2544040'>I'm</span> <span
  m='2544180'>not</span> <span m='2544390'>going</span> <span
  m='2544490'>to</span> <span m='2544530'>make</span> <span
  m='2544730'>the</span> <span m='2544810'>same</span> <span
  m='2544980'>mistake</span> <span m='2545480'>twice.</span> <span
  m='2545600'>We</span> <span m='2545710'>go</span> <span m='2546100'>from S
  to</span> <span m='2546490'>ABEF.</span> <span m='2549690'>And</span> <span
  m='2550140'>S,</span> <span m='2550480'>by</span> <span m='2550640'>the</span>
  <span m='2550750'>way,</span> <span m='2551120'>had</span> <span
  m='2551556'>a</span> <span m='2552430'>value</span> <span
  m='2552720'>of</span> <span m='2552830'>0.</span> <span m='2553980'>All</span>
  <span m='2554080'>right.</span> <span m='2554410'>What</span> <span
  m='2554570'>is</span> <span m='2554630'>the</span> <span
  m='2554690'>value</span> <span m='2554970'>at</span> <span
  m='2555140'>A?</span> <span m='2556550'>Well,</span> <span
  m='2558100'>I</span> <span m='2558240'>think</span> <span
  m='2558380'>it's</span> <span m='2558500'>160.</span> <span
  m='2561040'>The</span> <span m='2561120'>question</span> <span
  m='2561410'>is,</span> <span m='2561520'>how</span> <span
  m='2561660'>do</span> <span m='2561700'>we</span> <span
  m='2561800'>calculate</span> <span m='2562180'>this?</span> <span
  m='2562360'>Well, it's</span> <span m='2562680'>the</span> <span
  m='2562770'>path</span> <span m='2563740'>that</span> <span
  m='2563860'>we've</span> <span m='2564000'>traveled</span> <span
  m='2564350'>so</span> <span m='2564550'>far</span> <span
  m='2565050'>plus</span> <span m='2565330'>the</span> <span
  m='2565460'>heuristic</span> <span m='2565940'>value</span> <span
  m='2566300'>at</span> <span m='2566690'>the</span> <span
  m='2566780'>final</span> <span m='2567250'>node.</span> <span
  m='2569070'>This</span> <span m='2569300'>is</span> <span
  m='2569400'>why</span> <span m='2569600'>someone's</span> <span
  m='2569870'>going</span> <span m='2569990'>to</span> <span
  m='2570030'>give</span> <span m='2570140'>me</span> <span
  m='2570240'>the</span> <span m='2570370'>wrong</span> <span
  m='2570610'>answer</span> <span m='2571170'>at</span> <span
  m='2571600'>BD,</span> <span m='2572370'>but</span> <span
  m='2572790'>let's</span> <span m='2573080'>see.</span> </p><p><span
  m='2573580'>So</span> <span m='2573820'>we</span> <span
  m='2573910'>have</span> <span m='2574030'>160</span> <span
  m='2574910'>here.</span> <span m='2576040'>OK.</span> <span
  m='2576940'>So</span> <span m='2577340'>SB.</span> <span
  m='2580050'>What</span> <span m='2580300'>is</span> <span m='2580420'>the
  heuristic</span> <span m='2580700'>value</span> <span m='2580890'>here?</span>
  <span m='2581140'>We've</span> <span m='2581260'>got</span> <span
  m='2581530'>3</span> <span m='2581940'>for the</span> <span
  m='2582330'>path,</span> <span m='2582830'>and</span> <span
  m='2583050'>50</span> <span m='2583400'>for</span> <span
  m='2583800'>the</span> <span m='2584020'>heuristic,</span> <span
  m='2584850'>so</span> <span m='2585140'>it's</span> <span
  m='2585260'>53.</span> <span m='2587790'>SE.</span> <span m='2588640'>What
  have</span> <span m='2588870'>we</span> <span m='2588970'>got</span> <span
  m='2589180'>here?</span> <span m='2589430'>We've</span> <span
  m='2589630'>got</span> <span m='2590560'>14</span> <span
  m='2590950'>for</span> <span m='2591040'>the</span> <span
  m='2591150'>path,</span> <span m='2591710'>56</span> <span
  m='2592190'>for</span> <span m='2592280'>the</span> <span
  m='2592410'>heuristic,</span> <span m='2592860'>so</span> <span
  m='2593115'>it's</span> <span m='2593370'>70.</span> <span
  m='2595420'>All</span> <span m='2595640'>right.</span> <span
  m='2596467'>SF.</span> <span m='2597720'>We've</span> <span
  m='2597840'>got</span> <span m='2598080'>4</span> <span m='2598460'>for
  the</span> <span m='2598580'>path,</span> <span m='2599030'>50</span> <span
  m='2599300'>for</span> <span m='2599440'>the</span> <span
  m='2599550'>heuristic,</span> <span m='2600010'>54.</span> <span
  m='2602290'>OK.</span> <span m='2602980'>Who's</span> <span
  m='2603190'>our</span> <span m='2603290'>winner?</span> <span
  m='2604680'>It's</span> <span m='2604930'>B</span> <span
  m='2605220'>again.</span> <span m='2605800'>Barely,</span> <span
  m='2606500'>but</span> <span m='2606760'>it</span> <span m='2606880'>is</span>
  <span m='2607060'>the</span> <span m='2607150'>winner.</span> <span
  m='2608370'>Extended</span> <span m='2608770'>list</span> <span
  m='2608970'>up</span> <span m='2609140'>here.</span> <span
  m='2609450'>SB.</span> <span m='2610110'>All</span> <span
  m='2610370'>right.</span> <span m='2610680'>B,</span> <span
  m='2610990'>as</span> <span m='2611130'>we</span> <span
  m='2611250'>saw,</span> <span m='2612040'>goes</span> <span
  m='2612310'>only</span> <span m='2612600'>to</span> <span
  m='2613096'>D.</span> </p><p><span m='2615080'>What</span> <span
  m='2615280'>is</span> <span m='2615400'>the</span> <span
  m='2615470'>value</span> <span m='2615720'>that I</span> <span
  m='2615930'>should</span> <span m='2616020'>write</span> <span
  m='2616230'>here?</span> </p><p><span m='2616550'>AUDIENCE: [CHATTER]</span>
  </p><p><span m='2619240'>PROFESSOR: OK.</span> <span m='2619900'>I am</span>
  <span m='2620170'>happy</span> <span m='2620530'>I</span> <span
  m='2620620'>heard</span> <span m='2620860'>all</span> <span
  m='2621080'>the</span> <span m='2621190'>things</span> <span
  m='2621510'>that</span> <span m='2621610'>I</span> <span
  m='2621650'>expected</span> <span m='2622100'>to</span> <span
  m='2622150'>hear.</span> <span m='2623060'>I</span> <span
  m='2623230'>heard</span> <span m='2623510'>the</span> <span
  m='2623590'>correct</span> <span m='2623890'>answer,</span> <span
  m='2624080'>which</span> <span m='2624290'>is</span> <span
  m='2624970'>57.</span> <span m='2625580'>I</span> <span
  m='2625680'>also</span> <span m='2625940'>heard</span> <span
  m='2626260'>someone</span> <span m='2626510'>say</span> <span
  m='2626660'>107.</span> <span m='2628160'>So</span> <span
  m='2629060'>why</span> <span m='2629320'>is</span> <span m='2629560'>it</span>
  <span m='2629780'>57,</span> <span m='2630146'>and not</span> <span
  m='2630512'>107?</span> <span m='2632160'>Someone</span> <span
  m='2632610'>does</span> <span m='2632820'>it</span> <span
  m='2632910'>this</span> <span m='2633060'>way</span> <span
  m='2633220'>every</span> <span m='2633550'>time.</span> <span
  m='2633930'>Do</span> <span m='2634080'>not</span> <span m='2634380'>add
  up</span> <span m='2634710'>all</span> <span m='2634930'>the</span> <span
  m='2635010'>heuristics</span> <span m='2635420'>along</span> <span
  m='2635760'>the</span> <span m='2635830'>way.</span> <span m='2636250'>I
  will</span> <span m='2636450'>try</span> <span m='2636690'>to</span> <span
  m='2636790'>explain</span> <span m='2637120'>to</span> <span
  m='2637290'>you</span> <span m='2637390'>why</span> <span m='2637490'>you
  would</span> <span m='2637630'>never</span> <span m='2637860'>want</span>
  <span m='2637980'>to</span> <span m='2638060'>do</span> <span
  m='2638190'>that.</span> <span m='2638910'>The</span> <span
  m='2639020'>heuristic</span> <span m='2639510'>value</span> <span
  m='2639800'>at</span> <span m='2639890'>any</span> <span
  m='2640060'>given</span> <span m='2640360'>node</span> <span
  m='2641000'>says,</span> <span m='2643040'>given</span> <span
  m='2643230'>that</span> <span m='2643350'>I'm</span> <span
  m='2643550'>here,</span> <span m='2644090'>how</span> <span
  m='2644260'>much</span> <span m='2644640'>work</span> <span
  m='2644990'>do</span> <span m='2645080'>I</span> <span
  m='2645170'>think</span> <span m='2645430'>I</span> <span
  m='2645500'>have</span> <span m='2645810'>left</span> <span
  m='2646400'>to</span> <span m='2646500'>get</span> <span m='2646960'>to</span>
  <span m='2647050'>the</span> <span m='2647220'>end?</span> </p><p><span
  m='2648620'>All</span> <span m='2648690'>right?</span> <span
  m='2649430'>It's</span> <span m='2649620'>sort</span> <span
  m='2649810'>of</span> <span m='2649910'>like,</span> <span
  m='2650380'>let's</span> <span m='2650670'>guess</span> <span
  m='2650910'>the</span> <span m='2651020'>last</span> <span
  m='2651360'>few</span> <span m='2651510'>nodes</span> <span
  m='2651780'>in</span> <span m='2651890'>the</span> <span
  m='2651980'>path</span> <span m='2652210'>that</span> <span
  m='2652280'>we</span> <span m='2652380'>haven't</span> <span
  m='2652640'>done</span> <span m='2652830'>out</span> <span
  m='2653030'>yet.</span> <span m='2653400'>So</span> <span
  m='2653880'>you</span> <span m='2654030'>can</span> <span
  m='2654150'>see</span> <span m='2654320'>why</span> <span m='2654520'>it
  would</span> <span m='2654790'>be</span> <span m='2654810'>bad</span> <span
  m='2655020'>to</span> <span m='2655100'>add</span> <span
  m='2655330'>that</span> <span m='2656590'>for</span> <span
  m='2656700'>every</span> <span m='2656950'>node</span> <span
  m='2657250'>in</span> <span m='2657330'>your</span> <span
  m='2657460'>list</span> <span m='2657790'>because</span> <span
  m='2658110'>then</span> <span m='2658300'>you're</span> <span
  m='2658850'>double</span> <span m='2659200'>counting</span> <span
  m='2659770'>all</span> <span m='2660080'>of the</span> <span
  m='2660150'>last</span> <span m='2660510'>nodes.</span> <span
  m='2661330'>So</span> <span m='2661820'>add</span> <span
  m='2662030'>the</span> <span m='2662110'>path</span> <span
  m='2662470'>so</span> <span m='2662650'>far</span> <span m='2663320'>to</span>
  <span m='2663420'>the</span> <span m='2663500'>very</span> <span
  m='2663920'>final</span> <span m='2664300'>heuristic.</span> <span
  m='2664730'>That's</span> <span m='2665070'>3</span> <span
  m='2665360'>plus</span> <span m='2665590'>4</span> <span
  m='2665810'>plus</span> <span m='2666030'>the</span> <span
  m='2666300'>50</span> <span m='2666620'>that's</span> <span
  m='2666880'>with</span> <span m='2667110'>D</span> <span m='2667720'>is</span>
  <span m='2667910'>57.</span> <span m='2669050'>So</span> <span
  m='2669660'>our</span> <span m='2669850'>current</span> <span
  m='2670170'>winner,</span> <span m='2670470'>then,</span> <span
  m='2671410'>is</span> <span m='2673420'>54,</span> <span
  m='2674000'>with</span> <span m='2674170'>F.</span> <span m='2674760'>Just
  the</span> <span m='2674830'>same</span> <span m='2675100'>as</span> <span
  m='2675190'>last</span> <span m='2675440'>time.</span> <span
  m='2675680'>F</span> <span m='2675950'>goes</span> <span m='2676230'>to</span>
  <span m='2676520'>H.</span> <span m='2678200'>And</span> <span
  m='2678540'>what's</span> <span m='2678760'>our</span> <span
  m='2679300'>total</span> <span m='2679540'>value at</span> <span
  m='2679940'>H?</span> <span m='2682780'>20</span> <span
  m='2683090'>plus,</span> <span m='2683330'>that's</span> <span
  m='2683520'>a</span> <span m='2683620'>39,</span> <span m='2684200'>59.</span>
  <span m='2685880'>So</span> <span m='2686590'>who</span> <span
  m='2686740'>wins</span> <span m='2687070'>now?</span> <span
  m='2688510'>D,</span> <span m='2688790'>with</span> <span
  m='2688930'>57.</span> </p><p><span m='2690960'>But</span> <span
  m='2692030'>we</span> <span m='2692210'>extended</span> <span
  m='2692490'>F,</span> <span m='2692820'>yes.</span> <span
  m='2694500'>All</span> <span m='2694600'>right.</span> <span
  m='2694790'>So</span> <span m='2694900'>D</span> <span m='2695140'>was</span>
  <span m='2695270'>57.</span> <span m='2696020'>All</span> <span
  m='2696100'>right.</span> <span m='2696400'>So</span> <span
  m='2696660'>D</span> <span m='2697530'>was</span> <span m='2697720'>not</span>
  <span m='2697910'>one</span> <span m='2698030'>of</span> <span
  m='2698080'>the</span> <span m='2698140'>ones</span> <span
  m='2698480'>that</span> <span m='2698600'>I</span> <span
  m='2698710'>tricked</span> <span m='2698900'>myself</span> <span
  m='2699260'>with.</span> <span m='2699420'>D</span> <span
  m='2699700'>only</span> <span m='2699910'>goes</span> <span
  m='2700120'>to</span> <span m='2700200'>I.</span> <span
  m='2702660'>What's</span> <span m='2702950'>our</span> <span
  m='2703050'>value</span> <span m='2703240'>at I?</span> <span
  m='2707240'>I</span> <span m='2707370'>think</span> <span
  m='2707590'>our</span> <span m='2707710'>value</span> <span
  m='2707940'>is</span> <span m='2708100'>57</span> <span
  m='2708720'>because</span> <span m='2708890'>I</span> <span m='2709110'>has
  a</span> <span m='2709340'>heuristic</span> <span m='2709560'>of</span> <span
  m='2709730'>0.</span> <span m='2711390'>Yes.</span> <span m='2711810'>I</span>
  <span m='2711960'>has</span> <span m='2712150'>a heuristic</span> <span
  m='2712520'>of</span> <span m='2712610'>0.</span> <span m='2712990'>Our</span>
  <span m='2713150'>value at</span> <span m='2713500'>I is</span> <span
  m='2713750'>57.</span> <span m='2716550'>OK?</span> <span m='2717430'>And
  I</span> <span m='2717580'>extended</span> <span m='2718090'>D.</span> <span
  m='2718830'>Who's</span> <span m='2719060'>the</span> <span
  m='2719140'>winner</span> <span m='2719350'>now?</span> <span
  m='2720870'>I?</span> <span m='2721460'>OK.</span> <span m='2721950'>So</span>
  <span m='2722110'>I</span> <span m='2722370'>is</span> <span
  m='2722520'>the</span> <span m='2722610'>winner.</span> <span
  m='2723510'>With</span> <span m='2723710'>I</span> <span m='2723920'>as</span>
  <span m='2724070'>the</span> <span m='2724140'>winner,</span> <span
  m='2724450'>we</span> <span m='2724550'>extend</span> <span
  m='2724990'>I.</span> <span m='2725890'>I</span> <span m='2726050'>goes</span>
  <span m='2726350'>to</span> <span m='2727290'>C, D.</span> <span
  m='2728360'>Ha ha.</span> <span m='2729210'>Good</span> <span
  m='2729430'>call,</span> <span m='2729810'>whoever</span> <span
  m='2730320'>back</span> <span m='2730540'>there</span> <span
  m='2731380'>figured</span> <span m='2731710'>out</span> <span
  m='2732070'>my</span> <span m='2732710'>secret</span> <span
  m='2733050'>error</span> <span m='2733290'>before.</span> <span m='2733980'>C,
  D,</span> <span m='2734520'>and</span> <span m='2734650'>G.</span>
  </p><p><span m='2735510'>AUDIENCE: [CHATTER]</span> </p><p><span
  m='2737140'>PROFESSOR: C, H,</span> <span m='2737610'>and G?</span> <span
  m='2739870'>Oh,</span> <span m='2740390'>you're</span> <span
  m='2740500'>right.</span> <span m='2740680'>We</span> <span
  m='2740740'>already</span> <span m='2740920'>went</span> <span
  m='2741170'>to</span> <span m='2741310'>D.</span> <span
  m='2742230'>Aha.</span> <span m='2742690'>C, H,</span> <span
  m='2743150'>and</span> <span m='2743370'>G. You're</span> <span
  m='2743830'>correct.</span> <span m='2745500'>Everyone</span> <span
  m='2745790'>see</span> <span m='2745910'>that?</span> <span m='2746230'>C,
  H,</span> <span m='2746790'>and</span> <span m='2746910'>G.</span> <span
  m='2747470'>Absolutely</span> <span m='2748000'>right.</span> <span
  m='2749280'>I</span> <span m='2749460'>goes</span> <span m='2749610'>to</span>
  <span m='2749770'>C, H,</span> <span m='2750200'>and</span> <span
  m='2750320'>G.</span> <span m='2750920'>So</span> <span m='2751610'>the</span>
  <span m='2751720'>path</span> <span m='2752096'>to C,</span> <span
  m='2752850'>H, and</span> <span m='2753160'>G</span> <span
  m='2753400'>is</span> <span m='2754280'>a</span> <span m='2754340'>hard</span>
  <span m='2754650'>path.</span> <span m='2756700'>To</span> <span
  m='2756820'>C,</span> <span m='2757130'>we</span> <span
  m='2757320'>got,</span> <span m='2757930'>what did</span> <span
  m='2758210'>we</span> <span m='2758300'>have?</span> <span
  m='2758500'>57</span> <span m='2758990'>plus</span> <span
  m='2759170'>50</span> <span m='2759380'>is</span> <span
  m='2759470'>127.</span> <span m='2761480'>Oh,</span> <span m='2761830'>and
  by</span> <span m='2761950'>the</span> <span m='2762140'>way,</span> <span
  m='2763450'>C, G,</span> <span m='2763755'>and</span> <span
  m='2764060'>H.</span> <span m='2764335'>We've got</span> <span m='2764610'>to
  do it</span> <span m='2765030'>in lexicographic</span> <span
  m='2765730'>order.</span> <span m='2766490'>So</span> <span
  m='2766780'>127</span> <span m='2767670'>to</span> <span m='2767780'>C.</span>
  <span m='2768440'>To</span> <span m='2768610'>G,</span> <span
  m='2769410'>we</span> <span m='2769590'>have</span> <span
  m='2770190'>67.</span> <span m='2773150'>And to</span> <span
  m='2773560'>H,</span> <span m='2774110'>we</span> <span
  m='2774310'>have</span> <span m='2776850'>87.</span> </p><p><span
  m='2779860'>So</span> <span m='2780580'>who</span> <span
  m='2780750'>wins</span> <span m='2781060'>now?</span> <span
  m='2784630'>H.</span> <span m='2784980'>H,</span> <span
  m='2785330'>with</span> <span m='2785480'>59.</span> <span
  m='2786130'>That's</span> <span m='2786350'>right.</span> <span
  m='2788750'>H,</span> <span m='2789000'>with</span> <span
  m='2789090'>59.</span> <span m='2790560'>And</span> <span
  m='2790920'>as</span> <span m='2791100'>we</span> <span
  m='2791200'>already</span> <span m='2791450'>know,</span> <span
  m='2791690'>cause it</span> <span m='2791900'>was the</span> <span
  m='2792020'>winner</span> <span m='2792340'>last</span> <span
  m='2792620'>time,</span> <span m='2793130'>H,</span> <span
  m='2793270'>with</span> <span m='2793490'>59,</span> <span
  m='2794610'>goes</span> <span m='2794960'>to</span> <span
  m='2795280'>I,</span> <span m='2799550'>which</span> <span
  m='2799840'>has,</span> <span m='2800270'>I</span> <span
  m='2800340'>believe,</span> <span m='2801380'>50.</span> <span
  m='2805050'>Well,</span> <span m='2805400'>it's</span> <span
  m='2805520'>still</span> <span m='2805660'>gets</span> <span
  m='2805750'>added.</span> <span m='2806620'>Remember?</span> <span
  m='2807170'>We're</span> <span m='2807310'>only</span> <span
  m='2807490'>going</span> <span m='2807590'>to</span> <span
  m='2807650'>kill</span> <span m='2807900'>it</span> <span
  m='2807970'>when</span> <span m='2808090'>it</span> <span
  m='2808160'>gets</span> <span m='2808370'>extended.</span> <span
  m='2809190'>So</span> <span m='2809860'>who's</span> <span
  m='2810080'>the</span> <span m='2810160'>shortest?</span> <span
  m='2811190'>So</span> <span m='2811400'>you</span> <span
  m='2811560'>were</span> <span m='2811840'>a</span> <span
  m='2811910'>step</span> <span m='2812140'>ahead,</span> <span
  m='2812400'>whoever</span> <span m='2812500'>asked me</span> <span
  m='2812710'>that</span> <span m='2812850'>question.</span> <span
  m='2813120'>Who's</span> <span m='2813260'>the</span> <span
  m='2813340'>shortest?</span> <span m='2815840'>H</span> <span
  m='2816070'>also</span> <span m='2816320'>goes to</span> <span
  m='2816460'>E.</span> <span m='2817020'>Absolutely</span> <span
  m='2817480'>right.</span> <span m='2818990'>H</span> <span
  m='2819210'>also</span> <span m='2819460'>goes</span> <span
  m='2819650'>to</span> <span m='2819720'>E.</span> <span m='2820686'>I</span>
  <span m='2821030'>was</span> <span m='2821270'>getting</span> <span
  m='2821540'>ahead</span> <span m='2821720'>of</span> <span
  m='2821770'>myself</span> <span m='2822170'>here.</span> <span
  m='2822350'>H</span> <span m='2822580'>also</span> <span m='2822750'>goes
  to</span> <span m='2822860'>E</span> <span m='2823070'>with</span> <span
  m='2823180'>a</span> <span m='2823270'>length</span> <span
  m='2823490'>of</span> <span m='2823560'>extra</span> <span
  m='2823870'>16.</span> <span m='2824900'>So</span> <span
  m='2825160'>we've</span> <span m='2825350'>got</span> <span
  m='2826430'>20</span> <span m='2826820'>plus</span> <span
  m='2827100'>16</span> <span m='2827450'>is</span> <span m='2827570'>36</span>
  <span m='2828270'>plus</span> <span m='2828960'>56</span> <span
  m='2829580'>is</span> <span m='2829790'>92.</span> <span
  m='2831750'>All</span> <span m='2831860'>right.</span> <span
  m='2832100'>That's</span> <span m='2832350'>good.</span> </p><p><span
  m='2834060'>So</span> <span m='2834480'>who's</span> <span
  m='2834650'>the</span> <span m='2834840'>shortest?</span> <span m='2837180'>I
  is the</span> <span m='2837580'>shortest.</span> <span m='2837810'>Do</span>
  <span m='2837960'>we</span> <span m='2838080'>extend</span> <span
  m='2838420'>it?</span> <span m='2839290'>No.</span> <span
  m='2839700'>It's</span> <span m='2839860'>on the</span> <span
  m='2840010'>extended</span> <span m='2840430'>list.</span> <span
  m='2842910'>All</span> <span m='2842950'>right.</span> <span
  m='2843460'>Who's</span> <span m='2843650'>the</span> <span
  m='2843730'>shortest</span> <span m='2844060'>now?</span> <span
  m='2845710'>It's</span> <span m='2845840'>hard</span> <span
  m='2846100'>to</span> <span m='2846240'>read,</span> <span
  m='2846535'>but</span> <span m='2846830'>the</span> <span
  m='2846970'>shortest</span> <span m='2847250'>is</span> <span
  m='2847340'>this</span> <span m='2847450'>67</span> <span
  m='2848100'>on</span> <span m='2848220'>the</span> <span m='2848310'>G.</span>
  <span m='2849036'>So</span> <span m='2849400'>we're</span> <span
  m='2849510'>done.</span> <span m='2849800'>We</span> <span
  m='2849920'>win.</span> <span m='2850940'>Our</span> <span
  m='2851060'>path</span> <span m='2851450'>is</span> <span
  m='2852330'>SBDIG.</span> <span m='2853840'>Yeah,</span> <span
  m='2854115'>for</span> <span m='2854390'>A*.</span> <span
  m='2854550'>It</span> <span m='2854880'>gets</span> <span
  m='2855090'>the</span> <span m='2855490'>right</span> <span
  m='2855740'>answer,</span> <span m='2856150'>right?</span> <span
  m='2856600'>No.</span> <span m='2858390'>Unfortunately</span> <span
  m='2859010'>not.</span> <span m='2859990'>So</span> <span
  m='2860300'>what</span> <span m='2860530'>happened</span> <span
  m='2861000'>here?</span> <span m='2861670'>Why</span> <span m='2861955'>did
  we</span> <span m='2862240'>not</span> <span m='2862380'>get</span> <span
  m='2862500'>the</span> <span m='2862580'>right</span> <span
  m='2862790'>answer?</span> <span m='2863310'>Be</span> <span
  m='2863480'>as</span> <span m='2863560'>specific</span> <span
  m='2863950'>as</span> <span m='2864070'>possible.</span> <span
  m='2868260'>What are</span> <span m='2868500'>people</span> <span
  m='2868730'>saying</span> <span m='2868990'>about</span> <span
  m='2869410'>heuristics?</span> </p><p><span m='2869850'>AUDIENCE:
  [CHATTER]</span> </p><p><span m='2872410'>PROFESSOR: All right.</span> <span
  m='2872750'>People</span> <span m='2873010'>are</span> <span
  m='2873090'>saying the</span> <span m='2873370'>heuristic</span> <span
  m='2873760'>must</span> <span m='2873950'>be</span> <span
  m='2874070'>consistent.</span> <span m='2875320'>That</span> <span
  m='2875510'>is</span> <span m='2875670'>both</span> <span
  m='2875980'>correct</span> <span m='2876400'>and</span> <span
  m='2876610'>specific,</span> <span m='2876890'>so</span> <span
  m='2877170'>I</span> <span m='2877260'>applaud</span> <span
  m='2877670'>you.</span> <span m='2878250'>Too</span> <span
  m='2878440'>easy</span> <span m='2878760'>to</span> <span
  m='2878850'>say</span> <span m='2879020'>the</span> <span
  m='2879090'>heuristic</span> <span m='2879390'>was</span> <span
  m='2879560'>inadmissible.</span> <span m='2880210'>It</span> <span
  m='2880330'>actually</span> <span m='2880630'>was</span> <span
  m='2880780'>completely</span> <span m='2881380'>admissible</span> <span
  m='2881870'>everywhere.</span> <span m='2883140'>So</span> <span
  m='2884070'>that</span> <span m='2884290'>leads us</span> <span
  m='2884550'>into</span> <span m='2884730'>our</span> <span
  m='2884840'>very</span> <span m='2885060'>last</span> <span
  m='2885320'>point</span> <span m='2885560'>for</span> <span
  m='2885630'>the</span> <span m='2885760'>day.</span> <span m='2886900'>What
  the</span> <span m='2887170'>hell are</span> <span m='2887440'>these</span>
  <span m='2887630'>heuristic</span> <span m='2888350'>consistency</span> <span
  m='2888645'>and</span> <span m='2888940'>admissibility</span> <span
  m='2889740'>things,</span> <span m='2890100'>and</span> <span
  m='2890250'>why</span> <span m='2890460'>do</span> <span m='2890550'>I</span>
  <span m='2890640'>care?</span> <span m='2891650'>Well,</span> <span
  m='2891710'>the</span> <span m='2891790'>reason</span> <span
  m='2891960'>why</span> <span m='2892070'>you</span> <span
  m='2892180'>care</span> <span m='2892590'>is</span> <span
  m='2892740'>many</span> <span m='2893050'>fold,</span> <span
  m='2893430'>one</span> <span m='2893630'>of</span> <span
  m='2893710'>which</span> <span m='2893890'>is</span> <span
  m='2894010'>that</span> <span m='2894160'>it's</span> <span
  m='2894600'>almost</span> <span m='2895000'>guaranteed</span> <span
  m='2895380'>to</span> <span m='2895430'>be</span> <span m='2895630'>on</span>
  <span m='2895810'>the</span> <span m='2895880'>quiz.</span> <span
  m='2896700'>But</span> <span m='2896970'>what</span> <span
  m='2897180'>are</span> <span m='2897340'>they?</span> </p><p><span
  m='2897920'>Admissibility</span> <span m='2898820'>is</span> <span
  m='2898940'>a check</span> <span m='2899520'>at</span> <span
  m='2899710'>every</span> <span m='2900020'>point</span> <span
  m='2900650'>to</span> <span m='2900790'>make</span> <span
  m='2900980'>sure</span> <span m='2901180'>your</span> <span
  m='2901330'>heuristic</span> <span m='2901810'>at</span> <span
  m='2902080'>that</span> <span m='2902360'>point,</span> <span
  m='2902840'>which</span> <span m='2902990'>is</span> <span
  m='2903080'>supposed</span> <span m='2903420'>to</span> <span
  m='2903460'>be</span> <span m='2903550'>an</span> <span
  m='2903620'>estimate</span> <span m='2903940'>of</span> <span
  m='2904020'>how</span> <span m='2904180'>much</span> <span
  m='2904360'>work</span> <span m='2904560'>you</span> <span
  m='2904670'>have</span> <span m='2904810'>left</span> <span
  m='2905060'>to</span> <span m='2905150'>do,</span> <span m='2905880'>is</span>
  <span m='2906040'>always</span> <span m='2906370'>an</span> <span
  m='2906550'>underestimate</span> <span m='2907440'>or</span> <span
  m='2907820'>an</span> <span m='2907950'>accurate</span> <span
  m='2908390'>estimate.</span> <span m='2908720'>It</span> <span
  m='2908790'>can</span> <span m='2908930'>never</span> <span
  m='2909150'>be</span> <span m='2909270'>an</span> <span
  m='2909400'>overestimate.</span> <span m='2910550'>Why</span> <span
  m='2910790'>not?</span> <span m='2911160'>Well, as</span> <span
  m='2911400'>Patrick</span> <span m='2911780'>showed</span> <span
  m='2912080'>you</span> <span m='2912290'>with</span> <span
  m='2912560'>his</span> <span m='2912780'>mostly</span> <span
  m='2913120'>correct</span> <span m='2913430'>example</span> <span
  m='2914410'>in</span> <span m='2914590'>lecture,</span> <span
  m='2915380'>if</span> <span m='2915510'>it's</span> <span
  m='2915650'>an</span> <span m='2915770'>overestimate,</span> <span
  m='2916490'>it's</span> <span m='2916670'>never</span> <span
  m='2916920'>going</span> <span m='2917070'>to</span> <span
  m='2917130'>expand</span> <span m='2917440'>that</span> <span
  m='2917570'>node</span> <span m='2917840'>cause it's</span> <span
  m='2918030'>going</span> <span m='2918150'>to</span> <span
  m='2918260'>think,</span> <span m='2918580'>you know,</span> <span
  m='2918880'>if you</span> <span m='2918960'>write</span> <span
  m='2919200'>one</span> <span m='2919420'>million</span> <span m='2919870'>as
  a</span> <span m='2920140'>heuristic,</span> <span m='2920620'>it's</span>
  <span m='2920750'>going</span> <span m='2920870'>to</span> <span
  m='2920940'>think</span> <span m='2921110'>it</span> <span
  m='2921220'>needs</span> <span m='2921360'>to</span> <span
  m='2921430'>do</span> <span m='2921490'>one million</span> <span
  m='2921945'>after</span> <span m='2922400'>it's</span> <span
  m='2922560'>done</span> <span m='2922790'>going</span> <span
  m='2923000'>that</span> <span m='2923110'>way.</span> <span
  m='2923210'>It's</span> <span m='2923340'>not</span> <span
  m='2923590'>going</span> <span m='2923690'>to</span> <span
  m='2923740'>want</span> <span m='2923890'>to</span> <span
  m='2923940'>go</span> <span m='2924090'>that</span> <span
  m='2924290'>way.</span> <span m='2924970'>All</span> <span
  m='2925300'>right?</span> </p><p><span m='2926670'>So</span> <span
  m='2926840'>it's</span> <span m='2926950'>always</span> <span m='2927200'>got
  to be</span> <span m='2927370'>an</span> <span
  m='2927510'>underestimate</span> <span m='2928620'>or</span> <span
  m='2929310'>an</span> <span m='2929640'>equal</span> <span
  m='2929920'>estimate.</span> <span m='2930220'>But</span> <span
  m='2930380'>let's</span> <span m='2930610'>say</span> <span
  m='2930730'>that</span> <span m='2930910'>you,</span> <span
  m='2931450'>at</span> <span m='2931570'>the</span> <span
  m='2931670'>quiz,</span> <span m='2932410'>and</span> <span
  m='2932780'>you</span> <span m='2932930'>forget</span> <span
  m='2933320'>Mark</span> <span m='2933610'>told</span> <span m='2933830'>me
  this.</span> <span m='2934100'>You</span> <span m='2934210'>didn't</span>
  <span m='2934440'>bring</span> <span m='2934610'>any</span> <span
  m='2934780'>notes.</span> <span m='2935360'>You're</span> <span
  m='2935500'>just</span> <span m='2935660'>having</span> <span
  m='2935850'>a</span> <span m='2935890'>brain</span> <span m='2936230'>freeze. 
  You're like,</span> <span m='2936520'>oh</span> <span m='2936810'>no.</span>
  <span m='2937320'>Is</span> <span m='2937420'>it</span> <span
  m='2937560'>supposed to</span> <span m='2937710'>be an</span> <span
  m='2937870'>overestimate</span> <span m='2938420'>or an</span> <span
  m='2938530'>underestimate?</span> <span m='2939110'>I</span> <span
  m='2939180'>can't</span> <span m='2939390'>remember</span> <span
  m='2939750'>which</span> <span m='2939940'>one.</span> <span
  m='2940430'>How</span> <span m='2940750'>can I</span> <span m='2940850'>figure
  it</span> <span m='2941140'>out?</span> <span m='2941260'>How</span> <span
  m='2941390'>can I</span> <span m='2941560'>figure</span> <span
  m='2941790'>it</span> <span m='2941860'>out?</span> <span m='2942420'>I</span>
  <span m='2942530'>propose</span> <span m='2942830'>you</span> <span
  m='2943130'>the</span> <span m='2943210'>following</span> <span
  m='2943810'>calm,</span> <span m='2944684'>soothing</span> <span
  m='2945560'>mantra</span> <span m='2946360'>slash sutra</span> <span
  m='2946930'>that</span> <span m='2947110'>will</span> <span
  m='2947230'>help</span> <span m='2947760'>protect</span> <span
  m='2948180'>you.</span> </p><p><span m='2948760'>Think to</span> <span
  m='2949050'>yourself</span> <span m='2949535'>of</span> <span
  m='2950020'>the</span> <span m='2950210'>following</span> <span
  m='2950700'>question.</span> <span m='2952100'>We</span> <span
  m='2952280'>know</span> <span m='2952500'>that A*</span> <span
  m='2952730'>sometimes</span> <span m='2953210'>messes</span> <span
  m='2953440'>up</span> <span m='2953530'>with</span> <span
  m='2953630'>the</span> <span m='2953730'>heuristic.</span> <span
  m='2953950'>Does</span> <span m='2954320'>branch</span> <span m='2954680'>and
  bound</span> <span m='2955450'>always</span> <span m='2955750'>get</span>
  <span m='2955880'>it</span> <span m='2955970'>right?</span> <span
  m='2957170'>Yes.</span> <span m='2957910'>What</span> <span
  m='2958160'>heuristic</span> <span m='2958540'>values</span> <span
  m='2958980'>does</span> <span m='2959080'>branch</span> <span
  m='2959320'>and</span> <span m='2959420'>bound</span> <span
  m='2959740'>add</span> <span m='2960120'>everywhere?</span> <span
  m='2961480'>0.</span> <span m='2962460'>Right?</span> <span
  m='2962690'>It</span> <span m='2962750'>has</span> <span m='2962900'>no</span>
  <span m='2963120'>heuristic.</span> <span m='2963380'>It</span> <span
  m='2963510'>essentially</span> <span m='2963930'>adds</span> <span
  m='2964130'>0.</span> <span m='2965400'>Is</span> <span m='2965550'>0</span>
  <span m='2965920'>an</span> <span m='2966080'>overestimate</span> <span
  m='2966360'>or</span> <span m='2966640'>an</span> <span
  m='2966780'>underestimate?</span> <span m='2968280'>An</span> <span
  m='2968410'>underestimate.</span> <span m='2969160'>Therefore,</span> <span
  m='2970400'>since</span> <span m='2970620'>branch and</span> <span
  m='2970920'>bound</span> <span m='2971250'>always</span> <span
  m='2971450'>works,</span> <span m='2972180'>the one</span> <span
  m='2972390'>you're</span> <span m='2972530'>looking for is an</span> <span
  m='2972890'>underestimate.</span> </p><p><span m='2973825'>And</span> <span
  m='2974120'>I</span> <span m='2974250'>know</span> <span
  m='2974480'>from</span> <span m='2974680'>when</span> <span
  m='2974820'>I</span> <span m='2974890'>was</span> <span
  m='2975000'>taking</span> <span m='2975170'>the</span> <span
  m='2975250'>class,</span> <span m='2975710'>I</span> <span
  m='2975910'>always</span> <span m='2976130'>had</span> <span
  m='2976270'>a</span> <span m='2976310'>moment</span> <span
  m='2976630'>where</span> <span m='2976740'>I</span> <span m='2976870'>had
  to</span> <span m='2977060'>spend,</span> <span m='2977490'>like,</span> <span
  m='2977890'>two</span> <span m='2978130'>minutes</span> <span
  m='2978420'>convincing</span> <span m='2978740'>myself,</span> <span
  m='2979030'>OK,</span> <span m='2979360'>I'm</span> <span
  m='2979450'>going</span> <span m='2979590'>for</span> <span
  m='2979710'>underestimate,</span> <span m='2980220'>not</span> <span
  m='2980390'>overestimate.</span> <span m='2981230'>This</span> <span
  m='2981420'>will</span> <span m='2981560'>help.</span> <span m='2981970'>It
  will take</span> <span m='2982280'>fewer</span> <span m='2982560'>than</span>
  <span m='2982740'>two</span> <span m='2982890'>minutes</span> <span
  m='2983130'>to</span> <span m='2983240'>do</span> <span
  m='2983350'>that.</span> </p><p><span m='2984030'>So</span> <span
  m='2984150'>what is</span> <span m='2984460'>consistency?</span> <span
  m='2985720'>Consistency</span> <span m='2986240'>is</span> <span
  m='2986350'>a</span> <span m='2986450'>little</span> <span
  m='2986750'>bit</span> <span m='2986970'>stronger</span> <span
  m='2987500'>of</span> <span m='2987570'>a claim.</span> <span
  m='2987950'>When</span> <span m='2988080'>you</span> <span
  m='2988180'>claim</span> <span m='2988430'>that</span> <span
  m='2988670'>a</span> <span m='2988850'>graph</span> <span
  m='2989080'>is</span> <span m='2989180'>consistent,</span> <span
  m='2990130'>what</span> <span m='2990310'>you're</span> <span
  m='2990430'>saying</span> <span m='2990880'>is,</span> <span
  m='2991650'>between</span> <span m='2992370'>any</span> <span
  m='2992670'>two</span> <span m='2992920'>nodes,</span> <span
  m='2993640'>or</span> <span m='2994170'>to</span> <span m='2994260'>do</span>
  <span m='2994370'>it</span> <span m='2994470'>more</span> <span
  m='2994620'>simply,</span> <span m='2994990'>between</span> <span
  m='2995340'>any</span> <span m='2995600'>two</span> <span
  m='2996250'>adjacent</span> <span m='2996820'>nodes,</span> <span
  m='2997750'>the</span> <span m='2997880'>distance</span> <span
  m='2998530'>between</span> <span m='2998850'>the</span> <span
  m='2998920'>heuristics</span> <span m='3000230'>is</span> <span
  m='3000480'>less</span> <span m='3001680'>than</span> <span
  m='3001850'>the</span> <span m='3001940'>distance</span> <span
  m='3002950'>between</span> <span m='3003370'>the</span> <span
  m='3003450'>nodes.</span> <span m='3003890'>In</span> <span
  m='3004050'>other</span> <span m='3004230'>words,</span> <span
  m='3005850'>admissibility</span> <span m='3006860'>is</span> <span
  m='3007000'>a</span> <span m='3007080'>sort</span> <span
  m='3007400'>of,</span> <span m='3007520'>like,</span> <span
  m='3007900'>consistency</span> <span m='3008520'>between</span> <span
  m='3008820'>every</span> <span m='3009030'>node</span> <span m='3009330'>in
  G.</span> <span m='3010500'>Whereas</span> <span
  m='3010690'>consistency</span> <span m='3011220'>is</span> <span
  m='3011330'>consistency</span> <span m='3011910'>between</span> <span
  m='3012210'>every</span> <span m='3012440'>node</span> <span
  m='3012780'>and</span> <span m='3012890'>every</span> <span
  m='3013130'>other</span> <span m='3013320'>node.</span> <span
  m='3014390'>All</span> <span m='3014460'>right?</span> <span
  m='3015430'>Consistency</span> <span m='3016030'>is</span> <span
  m='3016310'>a</span> <span m='3016370'>stronger</span> <span
  m='3016860'>claim.</span> <span m='3017680'>Any</span> <span m='3017940'>graph
  that's</span> <span m='3018380'>consistent</span> <span m='3018900'>is</span>
  <span m='3019120'>always</span> <span m='3019630'>admissible.</span> <span
  m='3020740'>Any</span> <span m='3020950'>graph</span> <span
  m='3021700'>that</span> <span m='3021850'>is</span> <span
  m='3022360'>inadmissible</span> <span m='3023780'>is</span> <span
  m='3023940'>always</span> <span m='3024260'>inconsistent.</span> <span
  m='3025620'>That's</span> <span m='3025840'>the</span> <span
  m='3025910'>contrapositive.</span> <span m='3026610'>Question?</span>
  </p><p><span m='3026980'>AUDIENCE: Less than</span> <span m='3027450'>or
  less</span> <span m='3027920'>than or equal</span> <span
  m='3028390'>to?</span> </p><p><span m='3028830'>PROFESSOR: Equal</span> <span
  m='3029170'>to</span> <span m='3029350'>is</span> <span
  m='3029450'>still</span> <span m='3029770'>OK.</span> <span
  m='3031080'>Equal</span> <span m='3031340'>to</span> <span m='3031570'>is
  always</span> <span m='3031840'>OK.</span> <span m='3032350'>That's</span>
  <span m='3032610'>great.</span> <span m='3032960'>It's</span> <span
  m='3033070'>a</span> <span m='3033130'>perfect</span> <span
  m='3033540'>estimate.</span> <span m='3033890'>But</span> <span
  m='3034080'>never</span> <span m='3034420'>greater.</span> <span
  m='3035420'>Now,</span> <span m='3036360'>if</span> <span m='3036550'>a</span>
  <span m='3036620'>graph is</span> <span m='3036850'>inconsistent,</span> <span
  m='3037470'>will</span> <span m='3037700'>you</span> <span
  m='3037860'>lose?</span> <span m='3038980'>Will</span> <span m='3039210'>you
  lose?</span> <span m='3039510'>Why</span> <span m='3039730'>is</span> <span
  m='3039840'>it</span> <span m='3039940'>called</span> <span
  m='3040290'>admissible,</span> <span m='3040820'>then,</span> <span
  m='3040990'>if</span> <span m='3042080'>it's</span> <span
  m='3042250'>sometimes</span> <span m='3042620'>not</span> <span
  m='3042830'>admissible?</span> <span m='3045260'>Why</span> <span
  m='3045410'>do we</span> <span m='3045560'>lose?</span> <span
  m='3045870'>The</span> <span m='3045950'>answer</span> <span
  m='3046160'>is</span> <span m='3046250'>the</span> <span
  m='3046340'>extended</span> <span m='3046830'>list,</span> <span
  m='3047140'>and</span> <span m='3047260'>you</span> <span
  m='3047360'>see</span> <span m='3047620'>that</span> <span
  m='3047810'>here.</span> <span m='3048390'>If</span> <span
  m='3048590'>a</span> <span m='3048670'>graph</span> <span
  m='3049060'>is</span> <span m='3049250'>admissible,</span> <span
  m='3050260'>you</span> <span m='3050400'>will</span> <span
  m='3050630'>always</span> <span m='3051090'>get</span> <span
  m='3051300'>the</span> <span m='3051420'>right</span> <span
  m='3051690'>answer</span> <span m='3054280'>unless</span> <span
  m='3054630'>you</span> <span m='3054710'>use</span> <span
  m='3054930'>an</span> <span m='3054990'>extended</span> <span
  m='3055410'>list</span> <span m='3055690'>because</span> <span
  m='3056090'>you're</span> <span m='3056210'>checking</span> <span
  m='3056590'>from</span> <span m='3056730'>every</span> <span
  m='3056960'>node</span> <span m='3057250'>to</span> <span
  m='3057350'>the</span> <span m='3057430'>goal</span> <span
  m='3057760'>node.</span> <span m='3058200'>And</span> <span
  m='3058330'>you're</span> <span m='3058430'>sure</span> <span
  m='3058700'>that</span> <span m='3058830'>your</span> <span
  m='3059040'>estimates</span> <span m='3059400'>are</span> <span
  m='3059510'>right.</span> <span m='3060120'>But</span> <span
  m='3060310'>if</span> <span m='3060440'>estimates</span> <span
  m='3060830'>within</span> <span m='3061210'>nodes</span> <span
  m='3061470'>aren't</span> <span m='3061670'>correct,</span> <span
  m='3062240'>you</span> <span m='3062390'>might</span> <span
  m='3062640'>go</span> <span m='3062830'>through</span> <span
  m='3062960'>them</span> <span m='3063120'>out</span> <span
  m='3063290'>of</span> <span m='3063400'>order,</span> <span
  m='3063700'>and</span> <span m='3063810'>that</span> <span
  m='3064090'>violates</span> <span m='3064680'>your</span> <span
  m='3064790'>assumption</span> <span m='3065270'>that</span> <span
  m='3065370'>you</span> <span m='3065480'>made</span> <span
  m='3066090'>when</span> <span m='3066290'>you</span> <span
  m='3066420'>decided</span> <span m='3066800'>to</span> <span
  m='3066850'>use</span> <span m='3067030'>the</span> <span
  m='3067100'>extended</span> <span m='3067480'>list that</span> <span
  m='3067770'>you</span> <span m='3067880'>would</span> <span
  m='3067950'>always</span> <span m='3068230'>go</span> <span
  m='3068410'>through</span> <span m='3068610'>the</span> <span
  m='3069900'>sub-graphs</span> <span m='3070490'>in</span> <span
  m='3070590'>order.</span> </p><p><span m='3070980'>This</span> <span
  m='3071190'>graph</span> <span m='3071430'>is</span> <span
  m='3072110'>very</span> <span m='3072480'>expertly</span> <span
  m='3073040'>crafted</span> <span m='3073480'>to</span> <span
  m='3073560'>do</span> <span m='3073680'>that</span> <span m='3073890'>to
  you</span> <span m='3074020'>cause</span> <span m='3074230'>I</span> <span
  m='3074500'>might</span> <span m='3074740'>as</span> <span
  m='3074850'>well</span> <span m='3075080'>be</span> <span
  m='3075260'>sort</span> <span m='3075420'>of</span> <span m='3075470'>a</span>
  <span m='3075550'>bottleneck,</span> <span m='3076110'>goal</span> <span
  m='3076340'>node,</span> <span m='3076620'>and</span> <span
  m='3076830'>I</span> <span m='3077210'>has</span> <span m='3077380'>an</span>
  <span m='3077460'>inconsistency.</span> <span m='3078540'>There's</span> <span
  m='3078700'>a</span> <span m='3078760'>few</span> <span
  m='3078970'>other</span> <span m='3079200'>inconsistencies</span> <span
  m='3079725'>in this</span> <span m='3080030'>graph,</span> <span
  m='3080410'>but</span> <span m='3080500'>they</span> <span
  m='3080600'>don't</span> <span m='3080780'>do</span> <span
  m='3080910'>anything</span> <span m='3081290'>to</span> <span
  m='3081360'>you.</span> <span m='3081860'>In</span> <span
  m='3081990'>fact,</span> <span m='3082330'>even</span> <span
  m='3082610'>inadmissibilities</span> <span m='3083380'>sometimes</span> <span
  m='3083960'>don't</span> <span m='3084130'>mess</span> <span
  m='3084330'>you</span> <span m='3084460'>up.</span> <span
  m='3085200'>So</span> <span m='3085400'>you</span> <span
  m='3085520'>can't</span> <span m='3085770'>just</span> <span
  m='3085940'>say,</span> <span m='3086220'>blindly,</span> <span
  m='3086880'>it's</span> <span m='3087050'>inadmissible,</span> <span
  m='3087480'>so it</span> <span m='3087650'>will</span> <span
  m='3087770'>never</span> <span m='3088060'>work.</span> <span
  m='3088340'>It</span> <span m='3088430'>might</span> <span
  m='3088700'>work.</span> </p><p><span m='3089180'>It</span> <span
  m='3089320'>turns</span> <span m='3089570'>out</span> <span
  m='3089690'>the</span> <span m='3089770'>only</span> <span
  m='3090110'>inconsistency</span> <span m='3090600'>that</span> <span
  m='3090700'>matters</span> <span m='3091050'>here</span> <span
  m='3091510'>is</span> <span m='3091670'>not</span> <span
  m='3091950'>the</span> <span m='3092020'>inconsistency</span> <span
  m='3092590'>between,</span> <span m='3093270'>say,</span> <span
  m='3093630'>S</span> <span m='3094130'>and</span> <span m='3094360'>F.</span>
  <span m='3094710'>That</span> <span m='3094880'>doesn't</span> <span
  m='3095110'>turn</span> <span m='3095280'>out</span> <span
  m='3095390'>to</span> <span m='3095450'>matter.  It's the</span> <span
  m='3095870'>inconsistency</span> <span m='3096440'>between</span> <span
  m='3097840'>some</span> <span m='3098040'>of</span> <span
  m='3098110'>these</span> <span m='3098320'>nodes,</span> <span
  m='3098560'>including</span> <span m='3098980'>I</span> <span
  m='3099570'>and</span> <span m='3099820'>H,</span> <span
  m='3100420'>specifically.</span> </p><p><span m='3101570'>So</span> <span
  m='3104300'>have</span> <span m='3104470'>a good</span> <span
  m='3104720'>weekend.</span> <span m='3105360'>Come</span> <span
  m='3105610'>in</span> <span m='3105730'>on</span> <span m='3105820'>Monday
  and</span> <span m='3106220'>Tuesday to</span> <span
  m='3106470'>tutorial.</span> <span m='3107090'>Ask</span> <span
  m='3107350'>about</span> <span m='3107700'>the</span> <span
  m='3108050'>queue</span> <span m='3108260'>method,</span> <span
  m='3108690'>or</span> <span m='3109210'>other</span> <span
  m='3109420'>methods.</span> <span m='3109770'>Ask</span> <span
  m='3109950'>about</span> <span m='3110120'>anything</span> <span
  m='3110430'>that's</span> <span m='3110580'>niggling</span> <span
  m='3110950'>in</span> <span m='3111040'>your</span> <span
  m='3111160'>brain.</span> <span m='3111780'>But</span> <span
  m='3111910'>hopefully,</span> <span m='3112700'>you</span> <span
  m='3112830'>guys</span> <span m='3113050'>have</span> <span
  m='3113170'>got</span> <span m='3113400'>this.</span> <span
  m='3113780'>You're</span> <span m='3113930'>going</span> <span
  m='3114050'>to</span> <span m='3114110'>do</span> <span
  m='3114230'>fine.</span> </p>
uid: 92eec3e5962365ab83ff7f3a2206b1c6
type: course
layout: video
---
