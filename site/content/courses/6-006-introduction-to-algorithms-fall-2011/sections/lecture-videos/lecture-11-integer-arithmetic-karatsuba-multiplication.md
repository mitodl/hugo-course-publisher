---
about_this_resource_text: >-
  <p><strong>Description:</strong> This is the first of two lectures on
  numerics, covering irrational numbers, high-precision computation, and
  Karatsuba multiplication.</p> <p><strong>Instructor:</strong> Srini
  Devadas</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: eCaXlAaN2uE
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Video-YouTube-Stream
    type: Video
    uid: 4d2548a208d09abbefceeae397249ec0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/eCaXlAaN2uE/default.jpg'
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 819bf6041ae76f7db043b63b5e7211a3
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-11-integer-arithmetic/id585700718?i=126127759
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Video-iTunes U-MP4
    type: Video
    uid: 3951b96fc521975124c0d6b622092953
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec11_300k.mp4'
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Video-Internet Archive-MP4
    type: Video
    uid: f7542e24d45985eebf51074c93f2a3e0
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: eCaXlAaN2uE
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 54d882dacd967ea35fe72fb3481b3b22
  - id: eCaXlAaN2uE.srt
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-11-integer-arithmetic-karatsuba-multiplication/eCaXlAaN2uE.srt
    title: 3play caption file
    type: null
    uid: a85b12be3adab592b73238648c99650a
  - id: eCaXlAaN2uE.pdf
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-11-integer-arithmetic-karatsuba-multiplication/eCaXlAaN2uE.pdf
    title: 3play pdf file
    type: null
    uid: 17798b54cc1a7fdba6972ecd681eaf1e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d8d28705092b0630610f5c70f7d8e3b4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bf01629c2329ba5b7672f282b59f7c29
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 474924e97920a334f1d248e51c43d7e4
inline_embed_id: '87151594lecture11:integerarithmetic,karatsubamultiplication26650578'
order_index: 156
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-11-integer-arithmetic-karatsuba-multiplication
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-11-integer-arithmetic-karatsuba-multiplication
title: 'Lecture 11: Integer Arithmetic, Karatsuba Multiplication'
transcript: >-
  <p><span m='80'>The</span> <span m='210'>following</span> <span
  m='640'>content</span> <span m='1240'>is</span> <span m='1350'>provided</span>
  <span m='1800'>under</span> <span m='2080'>a</span> <span
  m='2120'>Creative</span> <span m='2520'>Commons</span> <span
  m='2930'>license.</span> <span m='4040'>Your</span> <span
  m='4220'>support</span> <span m='4730'>will</span> <span m='4890'>help</span>
  <span m='5130'>MIT</span> <span m='5580'>OpenCourseWare</span> <span
  m='6370'>continue</span> <span m='6890'>to</span> <span m='6960'>offer</span>
  <span m='7380'>high</span> <span m='7620'>quality</span> <span
  m='8140'>educational</span> <span m='8760'>resources</span> <span
  m='9390'>for</span> <span m='9540'>free.</span> <span m='10740'>To</span>
  <span m='10750'>make</span> <span m='10950'>a</span> <span
  m='11000'>donation</span> <span m='11690'>or</span> <span
  m='11950'>view</span> <span m='12390'>additional</span> <span
  m='12820'>materials</span> <span m='13350'>from</span> <span
  m='13500'>hundreds</span> <span m='13940'>of</span> <span m='14050'>MIT</span>
  <span m='14480'>courses,</span> <span m='15590'>visit</span> <span
  m='15800'>MIT</span> <span m='16230'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17440'>ocw.mit.edu.</span> </p><p><span
  m='23170'>PROFESSOR: I</span> <span m='23270'>hope</span> <span
  m='23490'>you're</span> <span m='23630'>all</span> <span
  m='23920'>recovered</span> <span m='24340'>from</span> <span
  m='24470'>the</span> <span m='24550'>quiz.</span> <span m='25960'>Our</span>
  <span m='26550'>apologies</span> <span m='28030'>for</span> <span
  m='29230'>hard</span> <span m='29460'>questions,</span> <span
  m='30380'>but</span> <span m='31990'>it's</span> <span m='32119'>just</span>
  <span m='32280'>the</span> <span m='32530'>first</span> <span
  m='32740'>quiz.</span> <span m='33570'>We</span> <span m='33730'>have</span>
  <span m='33910'>a</span> <span m='33950'>lot</span> <span
  m='34170'>more</span> <span m='34360'>fun</span> <span m='34690'>things</span>
  <span m='34970'>to</span> <span m='35060'>do</span> <span m='35220'>in</span>
  <span m='35330'>006.</span> <span m='37535'>So</span> <span
  m='37820'>today's</span> <span m='38130'>lecture</span> <span
  m='38800'>today's</span> <span m='39100'>lecture</span> <span
  m='39530'>is</span> <span m='40340'>a</span> <span m='40410'>light</span>
  <span m='40660'>lecture,</span> <span m='41230'>I</span> <span
  m='41470'>would</span> <span m='41560'>even</span> <span m='41760'>call</span>
  <span m='42030'>it</span> <span m='42140'>a</span> <span
  m='42440'>recreational</span> <span m='43130'>mathematics</span> <span
  m='43720'>lecture.</span> <span m='44590'>And so,</span> <span
  m='44850'>thanks</span> <span m='45110'>for</span> <span
  m='45370'>coming.</span> <span m='46220'>I'll</span> <span
  m='46400'>make</span> <span m='46640'>it</span> <span m='46770'>worth</span>
  <span m='47010'>your</span> <span m='47150'>while,</span> <span
  m='48060'>all</span> <span m='48160'>right?</span> </p><p><span
  m='49340'>So</span> <span m='49550'>we're</span> <span m='49630'>going</span>
  <span m='49740'>to</span> <span m='49790'>talk</span> <span
  m='49990'>about</span> <span m='50220'>irrationals.</span> <span
  m='51990'>The</span> <span m='52090'>motivation</span> <span
  m='52640'>behind</span> <span m='53010'>this</span> <span m='53250'>is</span>
  <span m='53410'>really</span> <span m='53700'>that</span> <span
  m='55000'>every</span> <span m='55250'>once</span> <span m='55500'>in</span>
  <span m='55590'>awhile</span> <span m='57010'>we are</span> <span
  m='57150'>going</span> <span m='57400'>to</span> <span m='57990'>have</span>
  <span m='58180'>a</span> <span m='58230'>situation</span> <span
  m='58870'>where</span> <span m='59660'>we</span> <span m='59790'>want</span>
  <span m='59950'>to</span> <span m='60260'>compute</span> <span
  m='61010'>with</span> <span m='61250'>numbers</span> <span
  m='62280'>that</span> <span m='62520'>are</span> <span m='63000'>much</span>
  <span m='63530'>longer</span> <span m='64440'>than</span> <span
  m='65110'>64</span> <span m='65910'>bits,</span> <span m='67120'>which</span>
  <span m='67250'>is</span> <span m='67400'>really</span> <span
  m='67640'>the</span> <span m='67770'>word</span> <span m='68080'>length</span>
  <span m='68530'>in</span> <span m='69100'>standard</span> <span
  m='69600'>computer</span> <span m='70000'>these</span> <span
  m='70250'>days.</span> <span m='70770'>It</span> <span m='70820'>used</span>
  <span m='71060'>to</span> <span m='71120'>be</span> <span m='71350'>8</span>
  <span m='71500'>bits</span> <span m='72640'>back</span> <span
  m='72850'>in</span> <span m='72930'>the</span> <span m='73030'>day.</span>
  <span m='73910'>For</span> <span m='75660'>most</span> <span
  m='75950'>of</span> <span m='76630'>my</span> <span m='76910'>adult</span>
  <span m='77230'>life</span> <span m='77590'>it</span> <span
  m='77730'>was</span> <span m='77930'>32</span> <span m='78330'>bits.</span>
  <span m='79070'>And</span> <span m='79300'>recently</span> <span
  m='80310'>Intel</span> <span m='80720'>and</span> <span m='80820'>AMD</span>
  <span m='81280'>have gone</span> <span m='81470'>to</span> <span
  m='81550'>64-bit</span> <span m='82200'>processors.</span> <span
  m='83320'>But</span> <span m='83530'>64</span> <span m='84140'>bits</span>
  <span m='85240'>ain't</span> <span m='85380'>near</span> <span
  m='85750'>enough</span> <span m='86920'>if</span> <span m='87060'>you</span>
  <span m='87170'>want</span> <span m='87320'>to</span> <span
  m='87400'>do</span> <span m='88140'>what's</span> <span
  m='88360'>called</span> <span m='88540'>high</span> <span
  m='88720'>precision</span> <span m='89280'>computation,</span> <span
  m='90430'>you</span> <span m='90740'>want</span> <span m='90910'>to</span>
  <span m='91710'>find</span> <span m='92660'>precisely</span> <span
  m='93400'>the</span> <span m='93500'>weight</span> <span m='93740'>of</span>
  <span m='93850'>a</span> <span m='93890'>neutrino,</span> <span
  m='94790'>if</span> <span m='94970'>you're</span> <span m='95270'>a</span>
  <span m='95390'>physicist,</span> <span m='95960'>for</span> <span
  m='96070'>example.</span> <span m='97080'>And</span> <span
  m='98130'>that,</span> <span m='98400'>you're</span> <span
  m='98570'>talking</span> <span m='98840'>about</span> <span
  m='101060'>literally</span> <span m='101680'>a</span> <span
  m='102120'>hundred</span> <span m='102680'>decimal</span> <span
  m='103160'>digits,</span> <span m='104100'>which</span> <span
  m='104340'>is</span> <span m='104640'>obviously</span> <span
  m='105020'>much</span> <span m='105430'>more</span> <span
  m='105590'>than</span> <span m='105720'>64</span> <span
  m='106160'>bits.</span> <span m='106900'>And</span> <span
  m='107380'>that's</span> <span m='107710'>just</span> <span
  m='107860'>one</span> <span m='108020'>example.</span> </p><p><span
  m='109690'>So</span> <span m='110260'>what</span> <span
  m='110440'>happens</span> <span m='110800'>if</span> <span
  m='111130'>you</span> <span m='111250'>want</span> <span m='111420'>to</span>
  <span m='111670'>compute</span> <span m='112860'>the</span> <span
  m='113170'>square</span> <span m='113540'>root</span> <span
  m='113720'>of</span> <span m='113870'>2</span> <span m='114820'>to</span>
  <span m='115090'>a</span> <span m='115360'>million</span> <span
  m='115730'>digits,</span> <span m='116340'>or</span> <span
  m='116510'>pi</span> <span m='117880'>to</span> <span m='119340'>10</span>
  <span m='119530'>million</span> <span m='119800'>digits?</span> <span
  m='120370'>How</span> <span m='120530'>do</span> <span m='120590'>you</span>
  <span m='120690'>do</span> <span m='120820'>that</span> <span
  m='121010'>on</span> <span m='121110'>a</span> <span
  m='121150'>computer?</span> <span m='123280'>So</span> <span
  m='123590'>that's</span> <span m='124340'>what</span> <span
  m='124570'>we're</span> <span m='124670'>going</span> <span
  m='124770'>to</span> <span m='124840'>do</span> <span m='125150'>for</span>
  <span m='125340'>this</span> <span m='125590'>module,</span> <span
  m='126130'>which</span> <span m='126280'>is</span> <span m='126390'>a</span>
  <span m='126460'>short</span> <span m='126840'>module</span> <span
  m='127260'>on</span> <span m='127380'>numerics.</span> </p><p><span
  m='128400'>We'll have</span> <span m='128590'>a</span> <span
  m='128810'>lecture</span> <span m='129090'>today</span> <span
  m='129430'>and</span> <span m='129780'>another</span> <span
  m='129979'>one</span> <span m='130360'>on</span> <span
  m='130630'>Tuesday</span> <span m='132900'>telling</span> <span
  m='133150'>you</span> <span m='133300'>about</span> <span
  m='133570'>techniques</span> <span m='134240'>that</span> <span
  m='134700'>use,</span> <span m='135680'>among</span> <span
  m='135920'>other</span> <span m='136070'>things,</span> <span
  m='136420'>Newton's</span> <span m='136840'>method</span> <span
  m='137760'>to</span> <span m='138110'>compute</span> <span
  m='139240'>irrational</span> <span m='139770'>numbers,</span> <span
  m='141370'>as</span> <span m='141560'>one</span> <span
  m='141740'>example,</span> <span m='142440'>to</span> <span
  m='142710'>arbitrary</span> <span m='143210'>precision</span> <span
  m='144440'>And</span> <span m='145110'>for</span> <span m='145190'>your</span>
  <span m='145300'>problem</span> <span m='145610'>set</span> <span
  m='147560'>you</span> <span m='147810'>are</span> <span m='147930'>you</span>
  <span m='148080'>going</span> <span m='148260'>to</span> <span
  m='148840'>look</span> <span m='149090'>at</span> <span
  m='149530'>different</span> <span m='149820'>application</span> <span
  m='150950'>that</span> <span m='151130'>corresponds</span> <span
  m='151730'>to</span> <span m='152580'>encryption,</span> <span
  m='153770'>RSA</span> <span m='154300'>encryption,</span> <span
  m='155210'>where</span> <span m='155880'>you</span> <span
  m='155980'>have</span> <span m='156090'>to</span> <span m='156180'>work</span>
  <span m='156460'>with</span> <span m='156960'>primes.</span> <span
  m='157850'>These</span> <span m='158140'>are</span> <span
  m='158250'>now</span> <span m='158480'>integers,</span> <span
  m='159480'>but</span> <span m='159620'>you</span> <span m='159750'>work</span>
  <span m='159950'>with</span> <span m='160110'>primes</span> <span
  m='160760'>that</span> <span m='160930'>are</span> <span
  m='161480'>thousands</span> <span m='161900'>of</span> <span
  m='161980'>bits</span> <span m='162260'>long,</span> <span
  m='163400'>so</span> <span m='163510'>again,</span> <span
  m='163900'>much</span> <span m='164380'>more</span> <span
  m='164710'>than</span> <span m='164870'>64</span> <span
  m='165360'>bits.</span> <span m='166160'>And</span> <span m='166430'>so</span>
  <span m='166740'>you</span> <span m='166870'>have</span> <span
  m='167070'>to</span> <span m='168080'>think</span> <span
  m='168260'>about</span> <span m='168500'>how</span> <span
  m='168610'>you're</span> <span m='168720'>going</span> <span
  m='168830'>to</span> <span m='168870'>multiply</span> <span
  m='169540'>numbers</span> <span m='169970'>that</span> <span
  m='170110'>are</span> <span m='170210'>thousands</span> <span
  m='170600'>of</span> <span m='170680'>bits</span> <span
  m='170910'>long,</span> <span m='171270'>how</span> <span
  m='171390'>you're</span> <span m='171480'>going</span> <span
  m='171580'>to</span> <span m='171670'>divide</span> <span
  m='172120'>numbers</span> <span m='172500'>that</span> <span
  m='172620'>are</span> <span m='172680'>thousands</span> <span
  m='173030'>of</span> <span m='173120'>bits</span> <span
  m='173350'>long,</span> <span m='174040'>and</span> <span
  m='174350'>that's</span> <span m='174560'>really</span> <span
  m='174780'>the</span> <span m='174950'>purpose</span> <span
  m='175290'>of</span> <span m='175400'>this</span> <span
  m='175530'>module.</span> </p><p><span m='178080'>So</span> <span
  m='178290'>let's</span> <span m='178480'>start</span> <span
  m='178680'>off</span> <span m='178860'>by</span> <span
  m='178960'>talking</span> <span m='179230'>about</span> <span
  m='179450'>irrationals.</span> <span m='184970'>And</span> <span
  m='186560'>Pythagoras,</span> <span m='187570'>whom</span> <span
  m='187760'>I'm</span> <span m='187940'>sure</span> <span
  m='188290'>you've</span> <span m='188430'>all</span> <span
  m='188620'>heard</span> <span m='188830'>of</span> <span m='192440'>is</span>
  <span m='192670'>credited</span> <span m='194670'>with</span> <span
  m='194900'>the</span> <span m='195120'>discovery</span> <span
  m='196250'>that</span> <span m='197620'>a</span> <span
  m='197740'>square's</span> <span m='198560'>diagonal</span> <span
  m='199740'>and</span> <span m='199890'>its</span> <span m='200110'>side</span>
  <span m='200980'>are</span> <span m='201740'>incommensurable.</span> <span
  m='203210'>So</span> <span m='203780'>you</span> <span m='204080'>can't</span>
  <span m='204400'>really</span> <span m='204720'>express</span> <span
  m='205300'>the</span> <span m='205450'>ratio</span> <span m='206560'>as</span>
  <span m='208540'>a</span> <span m='208630'>rational</span> <span
  m='209130'>number,</span> <span m='209510'>as</span> <span m='209990'>a</span>
  <span m='210100'>ratio</span> <span m='210670'>of</span> <span
  m='210770'>integers.</span> <span m='212160'>Now</span> <span
  m='212260'>it</span> <span m='212370'>turns</span> <span m='212630'>out
  that</span> <span m='212800'>the</span> <span m='213070'>Babylonians</span>
  <span m='213890'>and</span> <span m='213990'>the</span> <span
  m='214060'>Indians</span> <span m='214540'>knew</span> <span
  m='214710'>this</span> <span m='215030'>way</span> <span
  m='215240'>before</span> <span m='215580'>Pythagoras,</span> <span
  m='216650'>but</span> <span m='217580'>he</span> <span m='217740'>gets</span>
  <span m='217950'>credit</span> <span m='218260'>for</span> <span
  m='218350'>the</span> <span m='218480'>Pythagoras</span> <span
  m='219620'>theorem.</span> </p><p><span m='220230'>And</span> <span
  m='220770'>there's</span> <span m='221390'>also</span> <span
  m='221630'>a</span> <span m='221700'>Greek</span> <span
  m='221930'>philosopher,</span> <span m='223730'>in</span> <span
  m='223850'>fact,</span> <span m='224150'>maybe</span> <span m='224410'>he
  was</span> <span m='224750'>first</span> <span m='225030'>a</span> <span
  m='225090'>philosopher</span> <span m='225550'>and</span> <span
  m='225650'>then</span> <span m='225800'>a</span> <span
  m='225840'>mathematician,</span> <span m='227690'>and</span> <span
  m='228940'>he</span> <span m='229680'>the</span> <span
  m='229880'>espoused</span> <span m='230390'>a</span> <span
  m='230570'>philosophy</span> <span m='231410'>that,</span> <span
  m='231770'>I</span> <span m='231880'>guess,</span> <span m='232090'>is</span>
  <span m='232230'>called</span> <span m='233040'>Pythagorean</span> <span
  m='233390'>mysticism,</span> <span m='234570'>that</span> <span
  m='234730'>said</span> <span m='235010'>that</span> <span
  m='235400'>all</span> <span m='235700'>is</span> <span
  m='235860'>number,</span> <span m='237190'>so</span> <span
  m='237370'>the</span> <span m='237470'>world</span> <span m='237960'>is</span>
  <span m='238450'>about</span> <span m='238690'>numbers.</span> <span
  m='239730'>And</span> <span m='241060'>he</span> <span
  m='241540'>worshipped</span> <span m='241950'>numbers,</span> <span
  m='242380'>his</span> <span m='242800'>followers</span> <span
  m='243270'>worshipped</span> <span m='243690'>numbers.</span> <span
  m='250790'>And</span> <span m='252290'>the</span> <span
  m='252780'>problem</span> <span m='253330'>here</span> <span
  m='254730'>was</span> <span m='255250'>that</span> <span m='256190'>he
  didn't</span> <span m='256519'>really</span> <span m='256740'>like</span>
  <span m='257390'>the</span> <span m='257510'>square</span> <span
  m='257860'>root</span> <span m='257959'>of</span> <span m='258089'>2</span>
  <span m='258920'>because</span> <span m='259459'>he</span> <span
  m='259620'>couldn't</span> <span m='259860'>express</span> <span
  m='260339'>it</span> <span m='260769'>as</span> <span m='262100'>a</span>
  <span m='262160'>number,</span> <span m='262630'>of</span> <span
  m='262760'>what</span> <span m='262910'>he</span> <span
  m='263280'>thought</span> <span m='263480'>of</span> <span
  m='263660'>as</span> <span m='263770'>a</span> <span m='263830'>number,</span>
  <span m='264150'>which</span> <span m='264220'>was</span> <span
  m='264890'>1,</span> <span m='265160'>2,</span> <span m='265330'>3,</span>
  <span m='265640'>et</span> <span m='265720'>cetera,</span> <span
  m='266620'>integers,</span> <span m='267080'>whole</span> <span
  m='267240'>numbers.</span> </p><p><span m='268260'>So</span> <span
  m='268310'>he</span> <span m='268440'>called</span> <span
  m='268680'>this</span> <span m='268870'>ratio</span> <span
  m='270200'>speechless,</span> <span m='275490'>something</span> <span
  m='275810'>that</span> <span m='275890'>he really</span> <span
  m='276250'>couldn't</span> <span m='276430'>explain.</span> <span
  m='279480'>And</span> <span m='280010'>irrationals</span> <span
  m='280630'>were</span> <span m='280830'>actually</span> <span
  m='281080'>considered</span> <span m='281500'>a</span> <span
  m='281550'>threat</span> <span m='282400'>to</span> <span
  m='282520'>the</span> <span m='282630'>mystics</span> <span
  m='283690'>because</span> <span m='284010'>they</span> <span
  m='284090'>couldn't</span> <span m='284280'>really</span> <span
  m='284520'>explain</span> <span m='285390'>what</span> <span
  m='285820'>square</span> <span m='286210'>root</span> <span
  m='286300'>of</span> <span m='286410'>2</span> <span m='286580'>was.</span>
  <span m='287030'>They'd</span> <span m='287430'>try</span> <span
  m='287600'>and</span> <span m='287720'>measure</span> <span
  m='288060'>it,</span> <span m='288220'>and</span> <span m='288680'>they</span>
  <span m='288770'>would</span> <span m='288950'>come</span> <span
  m='289130'>up</span> <span m='289290'>with</span> <span m='289400'>the</span>
  <span m='289730'>right</span> <span m='289910'>answer</span> <span
  m='290340'>because</span> <span m='290590'>the</span> <span
  m='290660'>next</span> <span m='290880'>time</span> <span
  m='291080'>around</span> <span m='291960'>it</span> <span
  m='292060'>would</span> <span m='292400'>be</span> <span m='292660'>a</span>
  <span m='292690'>little</span> <span m='292850'>bit</span> <span
  m='293020'>different</span> <span m='293440'>If</span> <span
  m='293550'>they</span> <span m='294590'>did</span> <span
  m='294720'>things</span> <span m='295140'>a little</span> <span
  m='295320'>more</span> <span m='295470'>precisely,</span> <span
  m='296210'>or</span> <span m='296800'>not</span> <span m='297040'>so</span>
  <span m='297180'>precisely.</span> <span m='298380'>And</span> <span
  m='298840'>it</span> <span m='298950'>bothered</span> <span
  m='299290'>them</span> <span m='299450'>no</span> <span m='299590'>end.</span>
  </p><p><span m='300680'>And</span> <span m='300720'>so</span> <span
  m='300800'>they</span> <span m='300920'>tried</span> <span
  m='301220'>to</span> <span m='301300'>find</span> <span
  m='302260'>patterns</span> <span m='302790'>in</span> <span
  m='303130'>irrationals</span> <span m='305100'>because</span> <span
  m='305340'>they</span> <span m='305430'>considered</span> <span
  m='305870'>them</span> <span m='306010'>a threat.</span> <span
  m='307030'>And</span> <span m='308310'>they</span> <span
  m='308620'>obviously</span> <span m='309770'>didn't</span> <span
  m='310170'>find</span> <span m='310420'>patterns,</span> <span
  m='311500'>but</span> <span m='312060'>imagine</span> <span
  m='312680'>if</span> <span m='313020'>we</span> <span m='313270'>could</span>
  <span m='313420'>actually</span> <span m='313710'>find</span> <span
  m='313940'>patterns.</span> <span m='314820'>I</span> <span
  m='314910'>mean,</span> <span m='315010'>that</span> <span
  m='315120'>would</span> <span m='315190'>be</span> <span m='315330'>a</span>
  <span m='315460'>really</span> <span m='315870'>big</span> <span
  m='316110'>deal,</span> <span m='317910'>it would</span> <span
  m='317980'>be</span> <span m='318100'>better</span> <span
  m='318510'>than</span> <span m='318670'>p</span> <span
  m='318860'>equals</span> <span m='319170'>np,</span> <span
  m='320080'>if</span> <span m='320230'>you</span> <span m='320300'>know</span>
  <span m='320410'>what</span> <span m='320530'>I</span> <span
  m='320560'>mean.</span> <span m='322150'>If</span> <span m='322280'>you</span>
  <span m='322350'>don't</span> <span m='322570'>it</span> <span
  m='322650'>doesn't</span> <span m='322870'>matter.</span> </p><p><span
  m='326630'>So</span> <span m='326800'>that's</span> <span
  m='327070'>another</span> <span m='327380'>of</span> <span
  m='327470'>motivation</span> <span m='328050'>for</span> <span
  m='328700'>high</span> <span m='328900'>precision</span> <span
  m='329620'>arithmetic.</span> <span m='331210'>Let's</span> <span
  m='331440'>try</span> <span m='331630'>and</span> <span m='331730'>find</span>
  <span m='332950'>patterns</span> <span m='333550'>in</span> <span
  m='333680'>irrationals</span> <span m='334310'>if</span> <span
  m='334410'>you</span> <span m='334490'>go</span> <span m='334660'>to</span>
  <span m='334760'>millions</span> <span m='335290'>and</span> <span
  m='335410'>trillions</span> <span m='335810'>of</span> <span
  m='335930'>digits,</span> <span m='336420'>maybe</span> <span
  m='336660'>it's</span> <span m='336760'>just</span> <span m='336950'>a</span>
  <span m='337000'>matter</span> <span m='337300'>of</span> <span
  m='337380'>time</span> <span m='338150'>before</span> <span
  m='338440'>we</span> <span m='339270'>discover</span> <span
  m='340440'>that</span> <span m='341290'>there's</span> <span
  m='341530'>no</span> <span m='341650'>such</span> <span
  m='341900'>thing</span> <span m='342130'>as</span> <span
  m='342250'>irrational</span> <span m='342740'>numbers.</span> <span
  m='344240'>Who</span> <span m='344525'>knows?</span> <span
  m='345370'>So</span> <span m='345540'>let's</span> <span m='346140'>do</span>
  <span m='346240'>that</span> <span m='346540'>for</span> <span
  m='346660'>the</span> <span m='346760'>rest</span> <span m='346980'>of</span>
  <span m='347030'>this</span> <span m='347180'>lecture.</span> <span
  m='347500'>Let's</span> <span m='347710'>try</span> <span
  m='347880'>and</span> <span m='347980'>figure</span> <span
  m='348260'>out</span> <span m='348830'>how</span> <span
  m='349030'>we're</span> <span m='349160'>going</span> <span
  m='349280'>to</span> <span m='349350'>compute</span> <span
  m='351070'>irrational</span> <span m='351560'>numbers,</span> <span
  m='352000'>or</span> <span m='352280'>things</span> <span
  m='352490'>like</span> <span m='352630'>square</span> <span
  m='352900'>root</span> <span m='352990'>of</span> <span m='353110'>2,</span>
  <span m='353365'>to</span> <span m='353620'>arbitrary</span> <span
  m='354180'>precision.</span> <span m='355200'>So</span> <span
  m='355580'>we</span> <span m='355660'>can</span> <span m='355760'>go</span>
  <span m='356100'>play</span> <span m='356270'>around,</span> <span
  m='356670'>and</span> <span m='357000'>we'll</span> <span
  m='357270'>give</span> <span m='357370'>you</span> <span
  m='357460'>some</span> <span m='357640'>code,</span> <span
  m='357970'>and</span> <span m='358060'>you</span> <span m='358160'>can</span>
  <span m='358250'>play</span> <span m='358420'>with</span> <span
  m='358570'>it.</span> </p><p><span m='360020'>So</span> <span
  m='360150'>if</span> <span m='360200'>you</span> <span m='360280'>look</span>
  <span m='360430'>at</span> <span m='360520'>square</span> <span
  m='360780'>root</span> <span m='360870'>of</span> <span m='361000'>2--</span>
  <span m='361550'>I'll</span> <span m='361750'>just</span> <span
  m='361890'>put</span> <span m='362040'>this</span> <span m='362190'>up</span>
  <span m='362370'>here--</span> <span m='368680'>so</span> <span
  m='368890'>it's</span> <span m='369040'>1.414,</span> <span
  m='370870'>you</span> <span m='371010'>probably</span> <span
  m='371300'>all</span> <span m='371450'>know</span> <span
  m='371650'>that.</span> <span m='372540'>Then</span> <span
  m='372830'>it's</span> <span m='373020'>213,562,373,095,048</span> <span
  m='386010'>et</span> <span m='386130'>cetera.</span> <span m='388670'>I</span>
  <span m='388820'>mean,</span> <span m='388940'>I don't see</span> <span
  m='389090'>a</span> <span m='389150'>pattern</span> <span
  m='389460'>there.</span> <span m='389800'>I</span> <span m='389900'>see</span>
  <span m='390470'>a</span> <span m='390510'>zero,</span> <span
  m='391780'>a</span> <span m='392180'>couple</span> <span m='392400'>of</span>
  <span m='392450'>zeroes</span> <span m='393010'>here.</span> <span
  m='394730'>It's</span> <span m='395030'>hard</span> <span m='395320'>to</span>
  <span m='395370'>imagine--</span> <span m='395810'>you'd</span> <span
  m='396390'>probably</span> <span m='396680'>want</span> <span
  m='396910'>to</span> <span m='397390'>think</span> <span m='397580'>of</span>
  <span m='397690'>a</span> <span m='397760'>computer</span> <span
  m='399500'>program</span> <span m='400240'>that</span> <span
  m='400330'>generates</span> <span m='400920'>square</span> <span
  m='401240'>root</span> <span m='401340'>of</span> <span m='401460'>2,</span>
  <span m='401900'>and</span> <span m='402040'>then</span> <span
  m='402340'>maybe</span> <span m='402630'>a</span> <span
  m='402970'>different</span> <span m='403280'>computer</span> <span
  m='403600'>program</span> <span m='404030'>that's</span> <span
  m='404230'>looking</span> <span m='404550'>for</span> <span
  m='405470'>patterns.</span> </p><p><span m='408550'>So</span> <span
  m='408770'>let's</span> <span m='410410'>not</span> <span
  m='410650'>worry</span> <span m='410830'>about</span> <span
  m='411000'>the</span> <span m='411070'>square</span> <span
  m='411350'>root</span> <span m='411450'>of</span> <span m='411550'>2.</span>
  <span m='411860'>I</span> <span m='411930'>want</span> <span
  m='412110'>to</span> <span m='412340'>digress</span> <span m='412840'>a</span>
  <span m='412890'>little</span> <span m='413070'>bit.</span> <span
  m='413280'>I</span> <span m='413340'>did</span> <span m='413550'>say</span>
  <span m='413710'>this</span> <span m='413890'>was</span> <span
  m='414080'>a</span> <span m='414190'>bit</span> <span m='414360'>of</span>
  <span m='414460'>a</span> <span m='414550'>recreational</span> <span
  m='415090'>mathematics</span> <span m='415640'>lecture.</span> <span
  m='417340'>And</span> <span m='417950'>let's</span> <span
  m='418110'>talk</span> <span m='418280'>about</span> <span
  m='418560'>something</span> <span m='418800'>completely</span> <span
  m='419150'>different,</span> <span m='420090'>which</span> <span
  m='420300'>are</span> <span m='420700'>Catalan</span> <span
  m='421180'>numbers.</span> <span m='421880'>So</span> <span
  m='422020'>these</span> <span m='422210'>are</span> <span
  m='423170'>really</span> <span m='423400'>my</span> <span
  m='423560'>favorite</span> <span m='423980'>numbers</span> <span
  m='425090'>in</span> <span m='425170'>the</span> <span
  m='425260'>world.</span> <span m='427680'>And</span> <span
  m='428190'>people</span> <span m='428540'>like</span> <span
  m='428810'>primes,</span> <span m='430280'>some</span> <span
  m='430500'>people</span> <span m='430720'>like</span> <span
  m='430890'>irrationals,</span> <span m='431870'>I</span> <span
  m='431970'>like</span> <span m='432190'>Catalan</span> <span
  m='432520'>numbers.</span> </p><p><span m='433980'>Catalan</span> <span
  m='434370'>numbers</span> <span m='435060'>are--</span> <span
  m='435860'>they</span> <span m='435980'>show</span> <span m='436240'>up</span>
  <span m='437270'>all</span> <span m='437740'>over</span> <span
  m='438030'>the</span> <span m='438150'>place.</span> <span
  m='441010'>How</span> <span m='441120'>many</span> <span m='441280'>of</span>
  <span m='441350'>you</span> <span m='441480'>know</span> <span
  m='441620'>what</span> <span m='441800'>Catalan</span> <span
  m='442070'>numbers</span> <span m='442470'>are?</span> <span
  m='443150'>Oh</span> <span m='443310'>good.</span> <span
  m='443890'>Excellent.</span> <span m='445290'>So</span> <span
  m='446720'>Catalan</span> <span m='446790'>numbers</span> <span
  m='447390'>have</span> <span m='447650'>a</span> <span
  m='448050'>recursive</span> <span m='448530'>definition.</span> <span
  m='451320'>You</span> <span m='451500'>can</span> <span
  m='452060'>think</span> <span m='452320'>of</span> <span
  m='452430'>them</span> <span m='452740'>as</span> <span
  m='454600'>representing</span> <span m='455270'>the</span> <span
  m='455390'>cardinality</span> <span m='456990'>of</span> <span
  m='457200'>the</span> <span m='457290'>set</span> <span m='457800'>p</span>
  <span m='458730'>of</span> <span m='458940'>balanced</span> <span
  m='460510'>parentheses</span> <span m='462630'>strings.</span> </p><p><span
  m='465480'>And we're going to</span> <span m='465950'>recursively</span> <span
  m='466630'>define</span> <span m='467190'>these</span> <span
  m='467350'>strings</span> <span m='468470'>as</span> <span
  m='468660'>follows.</span> <span m='469605'>We're</span> <span
  m='469930'>going</span> <span m='470030'>to</span> <span
  m='470070'>have</span> <span m='470270'>lambda</span> <span
  m='471570'>belonging</span> <span m='472030'>to</span> <span
  m='472150'>p</span> <span m='473360'>where</span> <span
  m='473590'>lambda</span> <span m='474110'>is</span> <span
  m='474260'>the</span> <span m='474380'>empty</span> <span
  m='474740'>string.</span> <span m='482010'>And</span> <span
  m='483850'>that's</span> <span m='484040'>rule</span> <span
  m='484310'>one.</span> <span m='486250'>Rule</span> <span
  m='486590'>two</span> <span m='487900'>is</span> <span m='489640'>if</span>
  <span m='490890'>alpha</span> <span m='491390'>and</span> <span
  m='491570'>beta</span> <span m='492940'>belong</span> <span
  m='493290'>to</span> <span m='493400'>p</span> <span m='494990'>then</span>
  <span m='495950'>I'm</span> <span m='496020'>going</span> <span
  m='496090'>to</span> <span m='496160'>put</span> <span m='496310'>a</span>
  <span m='496360'>paren,</span> <span m='498210'>open</span> <span
  m='498470'>paren,</span> <span m='499310'>alpha,</span> <span
  m='500130'>close</span> <span m='500430'>paren,</span> <span
  m='501440'>and</span> <span m='501620'>then</span> <span
  m='501840'>beta.</span> <span m='502730'>And</span> <span
  m='502880'>that</span> <span m='503040'>belongs</span> <span
  m='503390'>to</span> <span m='503510'>p.</span> </p><p><span
  m='505310'>So</span> <span m='505930'>you</span> <span
  m='506760'>iteratively</span> <span m='507440'>or</span> <span
  m='507970'>recursively</span> <span m='508580'>apply</span> <span
  m='509030'>this</span> <span m='509300'>rule</span> <span
  m='510520'>over</span> <span m='510770'>and</span> <span
  m='510910'>over,</span> <span m='511730'>and</span> <span
  m='512110'>you</span> <span m='512220'>start</span> <span
  m='512600'>getting</span> <span m='514440'>strings</span> <span
  m='514909'>that</span> <span m='515020'>are</span> <span
  m='515110'>balanced.</span> <span m='516330'>So</span> <span
  m='517140'>this</span> <span m='517400'>is</span> <span
  m='517559'>balanced.</span> <span m='518400'>Now</span> <span
  m='518429'>that's</span> <span m='518659'>not</span> <span
  m='518929'>balanced,</span> <span m='520710'>this</span> <span
  m='521360'>is</span> <span m='521539'>not</span> <span
  m='521760'>balanced,</span> <span m='525770'>and</span> <span
  m='526130'>so</span> <span m='526240'>on</span> <span m='526360'>and</span>
  <span m='526440'>so</span> <span m='526570'>forth.</span> <span
  m='526870'>Obviously</span> <span m='527240'>things</span> <span
  m='527430'>get</span> <span m='527560'>more</span> <span
  m='527700'>complicated</span> <span m='529180'>in</span> <span
  m='529320'>terms</span> <span m='529580'>of</span> <span m='529690'>the</span>
  <span m='530440'>parentheses</span> <span m='531750'>if</span> <span
  m='531890'>when</span> <span m='532130'>you</span> <span
  m='532300'>have</span> <span m='532910'>more</span> <span
  m='535140'>brackets</span> <span m='535660'>or</span> <span
  m='535760'>parentheses.</span> </p><p><span m='536770'>And</span> <span
  m='536970'>so,</span> <span m='538180'>the</span> <span m='538300'>nice</span>
  <span m='538490'>thing</span> <span m='538620'>about</span> <span
  m='538840'>this</span> <span m='539000'>definition</span> <span
  m='539590'>is</span> <span m='539730'>that</span> <span m='541480'>you</span>
  <span m='541630'>can</span> <span m='541760'>get</span> <span
  m='542340'>every</span> <span m='545220'>non-empty</span> <span
  m='551790'>balanced</span> <span m='552380'>paren</span> <span
  m='552770'>string,</span> <span m='557190'>via</span> <span
  m='557470'>rule</span> <span m='557760'>two,</span> <span
  m='561520'>from</span> <span m='563150'>a</span> <span
  m='563260'>unique</span> <span m='567250'>alpha,</span> <span
  m='568830'>beta</span> <span m='569160'>pair.</span> <span
  m='570500'>So</span> <span m='570800'>as</span> <span m='571020'>an</span>
  <span m='571080'>example,</span> <span m='572310'>suppose</span> <span
  m='572820'>you</span> <span m='572970'>want</span> <span m='573130'>to</span>
  <span m='573190'>generate</span> <span m='574730'>the</span> <span
  m='574850'>string</span> <span m='575180'>that</span> <span
  m='575330'>looks</span> <span m='575560'>like</span> <span
  m='575790'>this--</span> <span m='576800'>So</span> <span
  m='576910'>that's</span> <span m='577090'>a</span> <span
  m='577140'>little</span> <span m='577270'>more</span> <span
  m='577420'>complicated</span> <span m='577680'>than</span> <span
  m='577940'>the</span> <span m='578220'>strings</span> <span m='578420'>that
  we</span> <span m='578640'>have</span> <span m='579050'>looked</span> <span
  m='579260'>at</span> <span m='579540'>so</span> <span m='579600'>far--</span>
  <span m='580510'>then</span> <span m='581030'>you</span> <span
  m='581200'>obtain</span> <span m='581630'>that</span> <span
  m='582030'>by</span> <span m='587570'>having</span> <span
  m='588310'>alpha</span> <span m='588840'>be</span> <span
  m='589050'>this</span> <span m='591120'>simple</span> <span
  m='591530'>string.</span> <span m='592600'>And</span> <span
  m='592740'>then</span> <span m='592880'>you</span> <span m='592990'>put</span>
  <span m='593180'>the</span> <span m='593260'>brackets</span> <span
  m='593680'>around</span> <span m='593920'>that,</span> <span
  m='595180'>and</span> <span m='595270'>then</span> <span
  m='595380'>your</span> <span m='595530'>beta</span> <span
  m='597070'>corresponds</span> <span m='597570'>to</span> <span
  m='597670'>this.</span> </p><p><span m='599560'>So</span> <span
  m='599670'>now</span> <span m='599810'>alpha</span> <span
  m='600190'>and</span> <span m='600290'>beta</span> <span
  m='600890'>were</span> <span m='601370'>previously</span> <span
  m='601850'>generated,</span> <span m='603430'>so</span> <span
  m='603550'>if</span> <span m='603640'>you</span> <span
  m='603710'>applied</span> <span m='603970'>rule</span> <span
  m='604230'>two</span> <span m='604716'>to</span> <span m='605202'>the</span>
  <span m='605790'>empty</span> <span m='606150'>string,</span> <span
  m='607570'>with</span> <span m='607780'>alpha</span> <span
  m='608140'>being</span> <span m='608320'>the</span> <span
  m='608400'>empty</span> <span m='608660'>string</span> <span
  m='609000'>and</span> <span m='609100'>beta</span> <span
  m='609350'>being</span> <span m='609550'>the</span> <span
  m='609640'>empty</span> <span m='609930'>string,</span> <span
  m='610750'>then</span> <span m='611600'>you</span> <span m='611780'>get</span>
  <span m='612140'>this</span> <span m='612380'>thing</span> <span
  m='612570'>here.</span> <span m='613860'>And</span> <span
  m='614090'>obviously</span> <span m='614390'>you</span> <span
  m='614510'>could</span> <span m='617500'>get</span> <span
  m='617610'>beta</span> <span m='618620'>by</span> <span
  m='618860'>setting</span> <span m='619180'>alpha</span> <span
  m='619580'>to</span> <span m='619640'>be</span> <span m='619790'>the</span>
  <span m='620240'>empty</span> <span m='620560'>string</span> <span
  m='620910'>and</span> <span m='621050'>beta</span> <span m='621290'>to</span>
  <span m='621360'>be</span> <span m='621490'>this</span> <span
  m='621690'>string</span> <span m='622730'>that</span> <span
  m='622900'>you</span> <span m='622990'>just</span> <span
  m='623170'>generated,</span> <span m='623620'>and</span> <span
  m='623730'>so</span> <span m='623850'>on</span> <span m='623950'>and</span>
  <span m='624030'>so</span> <span m='624160'>forth.</span> <span
  m='625370'>So</span> <span m='625610'>you</span> <span m='625730'>just</span>
  <span m='625880'>keep</span> <span m='626040'>going</span> <span
  m='626700'>and</span> <span m='627050'>the</span> <span
  m='627240'>strings</span> <span m='627460'>get</span> <span
  m='627600'>longer</span> <span m='627900'>and</span> <span
  m='628000'>longer.</span> <span m='628740'>The</span> <span
  m='628840'>cardinality</span> <span m='629530'>of</span> <span
  m='629610'>the</span> <span m='629700'>set</span> <span m='630170'>gets</span>
  <span m='630400'>bigger</span> <span m='630700'>and</span> <span
  m='630820'>bigger.</span> <span m='631550'>And</span> <span
  m='631840'>those</span> <span m='632040'>of</span> <span m='632100'>the</span>
  <span m='632180'>Catalan</span> <span m='632420'>numbers.</span> <span
  m='633640'>OK</span> </p><p><span m='635210'>And</span> <span
  m='635630'>so,</span> <span m='636950'>this</span> <span m='637150'>is</span>
  <span m='637250'>a</span> <span m='637300'>non-trivial</span> <span
  m='639140'>question,</span> <span m='640560'>which</span> <span
  m='640750'>is</span> <span m='641260'>I'd</span> <span m='641350'>like</span>
  <span m='641610'>to</span> <span m='641670'>enumerate</span> <span
  m='644400'>the</span> <span m='644580'>Catalan</span> <span
  m='644980'>numbers,</span> <span m='645430'>and</span> <span
  m='645580'>compute,</span> <span m='646130'>and</span> <span
  m='646260'>get</span> <span m='646400'>an</span> <span
  m='646540'>analytical</span> <span m='647150'>form</span> <span
  m='648240'>for</span> <span m='649260'>the</span> <span
  m='649420'>cardinality</span> <span m='650040'>of</span> <span
  m='650120'>the</span> <span m='650200'>set.</span> <span m='651020'>And</span>
  <span m='651140'>that's</span> <span m='651320'>really</span> <span
  m='651470'>what</span> <span m='651610'>the</span> <span
  m='651690'>Catalan</span> <span m='651900'>number</span> <span
  m='652255'>is.</span> <span m='652980'>It's</span> <span m='653200'>a</span>
  <span m='653230'>cardinality</span> <span m='653730'>of</span> <span
  m='653820'>the</span> <span m='653910'>set.</span> </p><p><span
  m='655180'>And</span> <span m='655440'>so</span> <span m='656360'>cn</span>
  <span m='658300'>is</span> <span m='658590'>the</span> <span
  m='658690'>number</span> <span m='661360'>of</span> <span
  m='663080'>balanced</span> <span m='665110'>parentheses</span> <span
  m='666020'>strings</span> <span m='668730'>with</span> <span
  m='669900'>exactly</span> <span m='672930'>n</span> <span
  m='675230'>pairs</span> <span m='675610'>of</span> <span
  m='675690'>parentheses.</span> <span m='682100'>And</span> <span
  m='682710'>I</span> <span m='682880'>have</span> <span m='683740'>c0</span>
  <span m='684470'>equals</span> <span m='684860'>1,</span> <span
  m='685700'>which</span> <span m='685860'>is</span> <span m='685970'>my</span>
  <span m='686110'>base</span> <span m='686460'>case.</span> <span
  m='690430'>And</span> <span m='690550'>that's</span> <span
  m='690690'>just</span> <span m='690830'>setting--</span> <span
  m='691150'>it's</span> <span m='691320'>an</span> <span
  m='691420'>empty</span> <span m='691710'>string.</span> <span
  m='692700'>I'm</span> <span m='692850'>going</span> <span m='692980'>to</span>
  <span m='695580'>say</span> <span m='695790'>that</span> <span
  m='695950'>empty</span> <span m='696210'>string</span> <span
  m='696500'>is</span> <span m='696640'>a</span> <span m='696710'>string,</span>
  <span m='697190'>and</span> <span m='697300'>that's</span> <span
  m='697730'>just</span> <span m='697900'>setting</span> <span
  m='698130'>up</span> <span m='698260'>the</span> <span m='698340'>base</span>
  <span m='698620'>case.</span> </p><p><span m='700190'>And</span> <span
  m='700380'>now</span> <span m='700600'>I</span> <span m='700710'>want</span>
  <span m='701370'>an</span> <span m='701540'>equation</span> <span
  m='703910'>for</span> <span m='704420'>cn</span> <span m='704760'>plus</span>
  <span m='705020'>1.</span> <span m='708630'>And</span> <span
  m='708900'>I</span> <span m='708930'>need</span> <span m='709250'>to</span>
  <span m='709340'>use</span> <span m='709440'>the</span> <span
  m='709550'>fact</span> <span m='710040'>that</span> <span m='710590'>I</span>
  <span m='710700'>can</span> <span m='710880'>get</span> <span
  m='711100'>cn</span> <span m='711460'>plus</span> <span m='711720'>1,</span>
  <span m='712370'>a</span> <span m='712450'>particular</span> <span
  m='714060'>strain</span> <span m='714990'>that</span> <span
  m='715210'>belongs</span> <span m='715790'>to</span> <span
  m='717060'>this</span> <span m='717190'>set,</span> <span
  m='719390'>where</span> <span m='719760'>I</span> <span m='719800'>have</span>
  <span m='719970'>n</span> <span m='720090'>plus</span> <span
  m='720290'>1</span> <span m='720790'>parenthesis</span> <span
  m='721770'>in</span> <span m='721900'>a</span> <span m='721940'>unique</span>
  <span m='722320'>way</span> <span m='722930'>from</span> <span
  m='723150'>a</span> <span m='723210'>string</span> <span
  m='723580'>I've</span> <span m='723710'>previously</span> <span
  m='724250'>generated</span> <span m='725340'>that</span> <span
  m='725460'>was</span> <span m='725660'>part</span> <span m='726070'>of</span>
  <span m='727010'>either</span> <span m='729020'>the</span> <span
  m='729450'>set</span> <span m='730440'>that</span> <span m='730660'>had</span>
  <span m='731610'>n</span> <span m='731800'>parentheses--</span> <span
  m='732830'>or</span> <span m='732950'>it</span> <span m='733000'>was</span>
  <span m='733140'>combined</span> <span m='733930'>using</span> <span
  m='734850'>strings,</span> <span m='736770'>where</span> <span
  m='737090'>alpha</span> <span m='737530'>was</span> <span m='737930'>in</span>
  <span m='738210'>some</span> <span m='738470'>set</span> <span
  m='738880'>that</span> <span m='739020'>was</span> <span
  m='739270'>maybe</span> <span m='739520'>generated</span> <span
  m='740900'>awhile</span> <span m='741330'>back</span> <span
  m='742230'>with</span> <span m='742520'>a</span> <span m='742590'>small</span>
  <span m='743700'>n, or</span> <span m='744000'>something</span> <span
  m='744290'>significantly</span> <span m='744880'>smaller</span> <span
  m='745170'>than</span> <span m='745330'>n,</span> <span m='746140'>and</span>
  <span m='746960'>another</span> <span m='747270'>thing</span> <span
  m='747500'>that</span> <span m='747640'>was</span> <span
  m='748120'>generated,</span> <span m='748920'>beta,</span> <span
  m='749640'>that</span> <span m='749760'>was</span> <span
  m='749880'>generated</span> <span m='750220'>later,</span> <span
  m='750660'>or</span> <span m='750760'>maybe</span> <span m='751010'>at
  the</span> <span m='751160'>same</span> <span m='751410'>time,</span> <span
  m='752050'>et</span> <span m='752120'>cetera.</span> </p><p><span
  m='753140'>So</span> <span m='753430'>can</span> <span
  m='753550'>someone</span> <span m='753800'>tell</span> <span
  m='753970'>me</span> <span m='756220'>what</span> <span m='756650'>an</span>
  <span m='756740'>equation</span> <span m='757350'>would</span> <span
  m='757520'>be</span> <span m='758290'>for</span> <span m='758600'>cn</span>
  <span m='758970'>plus</span> <span m='759190'>1</span> <span
  m='760050'>based</span> <span m='760480'>on</span> <span m='761550'>the</span>
  <span m='761760'>cis</span> <span m='762520'>that</span> <span
  m='762630'>are</span> <span m='762720'>less</span> <span
  m='763010'>than</span> <span m='763490'>n?</span> <span m='773970'>So</span>
  <span m='774300'>what</span> <span m='774630'>about</span> <span
  m='775100'>c1?</span> <span m='775470'>Maybe</span> <span m='775680'>I'll
  ask--</span> <span m='777480'>what</span> <span m='777600'>about</span> <span
  m='777800'>c1?</span> <span m='779186'>What's</span> <span
  m='779648'>c1?</span> <span m='781496'>1.</span> <span m='783000'>c1</span>
  <span m='783380'>is</span> <span m='783490'>1</span> <span
  m='785110'>because</span> <span m='785440'>all</span> <span
  m='785650'>I</span> <span m='785730'>have</span> <span m='786040'>is</span>
  <span m='788750'>this</span> <span m='788870'>string,</span> <span
  m='789160'>that's</span> <span m='789450'>the</span> <span
  m='789630'>only</span> <span m='790810'>balanced</span> <span
  m='791280'>string.</span> </p><p><span m='792750'>Now</span> <span
  m='792880'>I</span> <span m='792980'>have</span> <span m='793140'>c0</span>
  <span m='793620'>and</span> <span m='793750'>c1.</span> <span
  m='794940'>What's</span> <span m='795200'>an</span> <span
  m='795280'>equation</span> <span m='795860'>for</span> <span
  m='796290'>c2</span> <span m='798250'>in</span> <span m='798360'>terms</span>
  <span m='798560'>of</span> <span m='798630'>numbers.</span> <span
  m='799020'>I</span> <span m='799370'>want</span> <span m='799530'>a</span>
  <span m='799570'>number</span> <span m='800890'>for</span> <span
  m='801090'>c2</span> <span m='802090'>based</span> <span m='802390'>on</span>
  <span m='802520'>c0</span> <span m='802795'>and</span> <span
  m='803070'>c1.</span> <span m='804850'>Someone?</span> <span
  m='806696'>Yeah.</span> </p><p><span m='807660'>AUDIENCE: C0</span> <span
  m='808142'>plus</span> <span m='808624'>c1.</span> </p><p><span
  m='809590'>PROFESSOR: c0</span> <span m='810140'>plus</span> <span
  m='810440'>c1?</span> <span m='814810'>No,</span> <span m='815090'>not</span>
  <span m='815270'>quite</span> <span m='815480'>right.</span> <span
  m='818960'>How</span> <span m='819110'>many</span> <span
  m='820130'>strings</span> <span m='820360'>do</span> <span m='820460'>I</span>
  <span m='820550'>have?</span> <span m='823800'>c0</span> <span
  m='824250'>plus</span> <span m='824470'>c1.</span> <span m='824850'>Yeah,
  actually</span> <span m='825220'>you're</span> <span m='825600'>right.</span>
  <span m='827224'>Well,</span> <span m='827630'>the</span> <span
  m='827670'>number is</span> <span m='828030'>right</span> <span
  m='828370'>but</span> <span m='828510'>the</span> <span
  m='828590'>equation</span> <span m='828845'>is</span> <span
  m='829100'>wrong.</span> <span m='830620'>It's</span> <span
  m='830930'>not</span> <span m='831120'>quite</span> <span
  m='831480'>that.</span> <span m='833000'>You</span> <span
  m='833130'>get</span> <span m='833260'>a--</span> <span m='833590'>Yup.</span>
  </p><p><span m='834398'>AUDIENCE: So</span> <span m='834876'>when</span> <span
  m='835354'>something</span> <span m='835832'>like</span> <span
  m='836310'>c--</span> <span m='837744'>c1</span> <span m='838222'>times</span>
  <span m='838700'>c1</span> <span m='839656'>plus</span> <span
  m='840134'>c1.</span> </p><p><span m='841570'>PROFESSOR: c1</span> <span
  m='842390'>times</span> <span m='842630'>c1</span> <span
  m='843120'>plus</span> <span m='843390'>c1?</span> </p><p><span
  m='843833'>AUDIENCE: Yeah.</span> </p><p><span m='844720'>PROFESSOR: I
  think</span> <span m='844840'>you want</span> <span m='844980'>to use a</span>
  <span m='845310'>c0.</span> </p><p><span m='845790'>AUDIENCE: OK.</span> <span
  m='846247'>c0.</span> </p><p><span m='847620'>PROFESSOR: c0</span> <span
  m='847630'>Well,</span> <span m='847810'>that's</span> <span m='848285'>not
  quite</span> <span m='848760'>right</span> <span m='849130'>either.</span>
  <span m='851770'>Someone</span> <span m='852060'>else.</span> <span
  m='853570'>Yeah.</span> <span m='853710'>OK.</span> <span
  m='853940'>You.</span> </p><p><span m='854921'>AUDIENCE: c0</span> <span
  m='855362'>times</span> <span m='855803'>c1</span> <span
  m='856244'>plus</span> <span m='856685'>c1</span> <span
  m='857126'>[INAUDIBLE].</span> </p><p><span m='858010'>PROFESSOR: c0</span>
  <span m='858310'>times</span> <span m='858990'>c1--</span> <span
  m='860690'>c2</span> <span m='861215'>would be</span> <span
  m='861510'>c0</span> <span m='862140'>times</span> <span m='862450'>c1</span>
  <span m='863370'>plus</span> <span m='863680'>c1</span> <span
  m='864170'>times</span> <span m='864590'>c0.</span> <span
  m='865180'>OK.</span> <span m='865880'>And</span> <span m='866480'>if</span>
  <span m='866750'>you're</span> <span m='866900'>setting</span> <span
  m='867340'>the</span> <span m='867950'>alpha--</span> <span
  m='868100'>So</span> <span m='868485'>here's</span> <span
  m='868870'>the</span> <span m='868950'>thing,</span> <span
  m='869550'>you</span> <span m='869670'>set</span> <span m='869900'>the</span>
  <span m='869990'>alpha,</span> <span m='870620'>and</span> <span
  m='870720'>you</span> <span m='870820'>choose</span> <span
  m='871250'>the</span> <span m='871600'>alpha,</span> <span
  m='872670'>and</span> <span m='872850'>then you</span> <span
  m='873050'>choose</span> <span m='873340'>the</span> <span
  m='873430'>beta.</span> <span m='874840'>And</span> <span
  m='875320'>there's</span> <span m='875450'>a</span> <span m='875500'>couple
  of</span> <span m='875760'>different</span> <span m='876000'>ways</span> <span
  m='876250'>that</span> <span m='876350'>you</span> <span
  m='876440'>could</span> <span m='876540'>choose</span> <span
  m='876770'>the</span> <span m='876860'>alpha.</span> </p><p><span
  m='877800'>You could</span> <span m='878000'>choose</span> <span
  m='878140'>the</span> <span m='878240'>alpha</span> <span
  m='878690'>from--</span> <span m='880220'>you</span> <span
  m='880300'>could</span> <span m='880400'>make</span> <span
  m='880540'>it</span> <span m='880610'>a</span> <span m='880670'>string</span>
  <span m='881050'>that's</span> <span m='881200'>empty,</span> <span
  m='881940'>or</span> <span m='882230'>you could</span> <span
  m='882320'>make</span> <span m='882500'>it</span> <span m='882880'>the</span>
  <span m='882980'>one</span> <span m='883190'>string</span> <span
  m='883520'>that</span> <span m='883640'>you've</span> <span
  m='883760'>generated</span> <span m='884230'>so</span> <span
  m='884400'>far,</span> <span m='884720'>which</span> <span
  m='884890'>is</span> <span m='885910'>the</span> <span
  m='886190'>standard</span> <span m='887450'>simple</span> <span
  m='887780'>string,</span> <span m='888420'>the</span> <span
  m='888570'>non-empty,</span> <span m='889140'>the</span> <span
  m='889240'>non-trivial</span> <span m='890310'>balanced</span> <span
  m='890760'>string.</span> <span m='891530'>And</span> <span
  m='892080'>you</span> <span m='892170'>could</span> <span m='892280'>do</span>
  <span m='892360'>that</span> <span m='892560'>in</span> <span
  m='892960'>a</span> <span m='893060'>couple</span> <span
  m='893300'>different</span> <span m='893540'>ways</span> <span
  m='893840'>with</span> <span m='894340'>alpha.</span> <span
  m='895040'>And</span> <span m='895050'>that's</span> <span
  m='895190'>why</span> <span m='895310'>you</span> <span m='895400'>have</span>
  <span m='895560'>two</span> <span m='895690'>terms</span> <span
  m='896040'>over</span> <span m='896160'>there.</span> </p><p><span
  m='897360'>So</span> <span m='897860'>the</span> <span
  m='898020'>number,</span> <span m='899860'>in</span> <span
  m='900030'>terms</span> <span m='900300'>of</span> <span m='900680'>all</span>
  <span m='901110'>of the</span> <span m='901380'>equations</span> <span
  m='901810'>I</span> <span m='901870'>got,</span> <span m='903080'>they</span>
  <span m='903200'>all</span> <span m='903390'>came</span> <span
  m='903590'>out</span> <span m='903680'>to</span> <span m='903740'>be</span>
  <span m='903840'>the</span> <span m='903940'>same.</span> <span
  m='904480'>It's</span> <span m='904640'>2,</span> <span m='905160'>and</span>
  <span m='905250'>that's</span> <span m='905440'>correct.</span> <span
  m='908480'>But</span> <span m='909250'>this</span> <span m='909740'>is</span>
  <span m='909880'>the</span> <span m='910060'>equation</span> <span
  m='910480'>for</span> <span m='910680'>it.</span> <span m='911200'>And</span>
  <span m='911350'>so</span> <span m='911440'>now,</span> <span
  m='912010'>tell</span> <span m='912220'>me</span> <span m='912920'>what</span>
  <span m='913130'>a</span> <span m='913190'>general</span> <span
  m='913620'>equation</span> <span m='914150'>is</span> <span
  m='914940'>for</span> <span m='915160'>cn</span> <span m='915620'>plus</span>
  <span m='915860'>1</span> <span m='916960'>based</span> <span
  m='917370'>on</span> <span m='918540'>what</span> <span
  m='918740'>we've</span> <span m='919500'>learned</span> <span
  m='919860'>so</span> <span m='920030'>far</span> <span m='920410'>for</span>
  <span m='920670'>the</span> <span m='920780'>c2</span> <span
  m='921193'>equation?</span> <span m='923430'>Yeah,</span> <span
  m='923610'>back</span> <span m='923930'>to</span> <span m='924010'>you.</span>
  </p><p><span m='925170'>AUDIENCE: So</span> <span m='925645'>c0</span> <span
  m='926120'>times</span> <span m='926595'>cn</span> <span
  m='927070'>plus</span> <span m='927545'>c1</span> <span
  m='928020'>times</span> <span m='928495'>cn</span> <span
  m='928970'>minus</span> <span m='929445'>1</span> <span m='929920'>all</span>
  <span m='930395'>the</span> <span m='930870'>way to</span> <span
  m='931345'>cn</span> <span m='931820'>times</span> <span
  m='932295'>[INAUDIBLE].</span> </p><p><span m='932780'>PROFESSOR:
  Perfect.</span> <span m='933380'>Good.</span> <span m='933500'>That</span>
  <span m='933920'>deserves</span> <span m='934260'>a</span> <span
  m='934630'>cushion.</span> <span m='940165'>That</span> <span
  m='940460'>wasn't</span> <span m='940690'>me,</span> <span
  m='940990'>it</span> <span m='941140'>was</span> <span m='941410'>you.</span>
  <span m='942970'>And</span> <span m='943230'>put</span> <span
  m='943350'>it</span> <span m='943440'>right</span> <span
  m='943690'>there,</span> <span m='944430'>breadbasket.</span> </p><p><span
  m='949180'>So</span> <span m='949670'>cn</span> <span m='950050'>plus</span>
  <span m='950260'>1</span> <span m='952940'>equals</span> <span
  m='954260'>sigma,</span> <span m='955090'>so</span> <span
  m='955240'>you</span> <span m='955380'>give</span> <span m='955550'>me</span>
  <span m='955690'>a</span> <span m='955830'>summation,</span> <span
  m='957060'>k</span> <span m='957330'>equals</span> <span m='957690'>0</span>
  <span m='958080'>through</span> <span m='958470'>n,</span> <span
  m='960755'>ck,</span> <span m='962126'>cn</span> <span m='962740'>minus</span>
  <span m='963140'>k</span> <span m='965230'>where</span> <span
  m='965570'>n</span> <span m='965740'>is</span> <span m='965870'>greater</span>
  <span m='966040'>than</span> <span m='966180'>or</span> <span
  m='966270'>equal</span> <span m='966460'>to</span> <span m='966520'>0.</span>
  <span m='971570'>And</span> <span m='972420'>you</span> <span
  m='972570'>can</span> <span m='972960'>figure</span> <span
  m='973150'>this</span> <span m='973340'>out,</span> <span
  m='973560'>it's</span> <span m='973700'>not</span> <span
  m='974150'>particularly</span> <span m='974600'>important</span> <span
  m='975820'>as</span> <span m='976170'>to</span> <span
  m='978330'>exactly</span> <span m='979160'>why</span> <span
  m='979420'>this</span> <span m='979630'>is</span> <span
  m='979810'>true.</span> <span m='980760'>You can</span> <span
  m='980980'>think</span> <span m='981130'>about</span> <span
  m='981320'>it</span> <span m='981400'>offline.</span> </p><p><span
  m='982870'>But</span> <span m='983070'>the</span> <span
  m='983140'>interesting</span> <span m='983500'>thing</span> <span
  m='983690'>is</span> <span m='983820'>that</span> <span m='984800'>this</span>
  <span m='984940'>is</span> <span m='985070'>a</span> <span
  m='985150'>generator</span> <span m='985440'>of,</span> <span
  m='985860'>obviously,</span> <span m='987000'>and</span> <span
  m='987310'>it's</span> <span m='987590'>going</span> <span
  m='987880'>to</span> <span m='988170'>give</span> <span m='988380'>you</span>
  <span m='989760'>a</span> <span m='989860'>nice</span> <span
  m='990480'>looking</span> <span m='990780'>set</span> <span
  m='990990'>of</span> <span m='991080'>numbers.</span> <span
  m='992330'>And</span> <span m='994700'>I</span> <span m='994840'>came</span>
  <span m='995100'>in</span> <span m='995250'>early</span> <span
  m='996480'>and</span> <span m='999090'>wrote</span> <span
  m='999480'>that</span> <span m='999750'>the</span> <span
  m='999870'>Catalan</span> <span m='1000170'>in</span> <span
  m='1000260'>numbers</span> <span m='1000650'>up</span> <span
  m='1001200'>on</span> <span m='1001350'>the</span> <span
  m='1001420'>board</span> <span m='1002960'>going</span> <span
  m='1003220'>from</span> <span m='1004340'>c0,</span> <span
  m='1004900'>c1,</span> <span m='1005610'>c2,</span> <span
  m='1006060'>et</span> <span m='1006360'>cetera,</span> <span
  m='1007120'>just</span> <span m='1007520'>in</span> <span
  m='1007640'>case--</span> <span m='1008690'>just</span> <span
  m='1009020'>in</span> <span m='1009240'>case</span> <span
  m='1009520'>you</span> <span m='1009670'>ever</span> <span
  m='1009900'>see</span> <span m='1010040'>these</span> <span
  m='1010250'>numbers</span> <span m='1011530'>in</span> <span
  m='1011670'>real</span> <span m='1011860'>life,</span> <span
  m='1012930'>or</span> <span m='1013110'>when</span> <span
  m='1013180'>you're</span> <span m='1013300'>writing</span> <span
  m='1013550'>computer</span> <span m='1013860'>programs.</span> <span
  m='1014710'>Or</span> <span m='1014800'>you're</span> <span
  m='1014920'>driving</span> <span m='1015340'>on</span> <span
  m='1015430'>the</span> <span m='1015540'>road,</span> <span
  m='1015915'>the</span> <span m='1016290'>next</span> <span
  m='1016530'>time</span> <span m='1016730'>you</span> <span
  m='1016850'>see</span> <span m='1017120'>a</span> <span
  m='1017170'>license</span> <span m='1017620'>plate</span> <span
  m='1017870'>4862,</span> <span m='1018930'>turn</span> <span
  m='1019130'>around</span> <span m='1019430'>and</span> <span
  m='1019540'>tell</span> <span m='1019690'>your</span> <span
  m='1019810'>mom</span> <span m='1020630'>or</span> <span
  m='1020770'>dad,</span> <span m='1021140'>hey,</span> <span
  m='1021290'>that's</span> <span m='1021510'>the</span> <span
  m='1021620'>Catalan</span> <span m='1022020'>number.</span> <span
  m='1023810'>And</span> <span m='1024380'>maybe</span> <span
  m='1024589'>she'll</span> <span m='1024760'>be</span> <span
  m='1024859'>impressed.</span> </p><p><span m='1027910'>This,</span> <span
  m='1028220'>of</span> <span m='1028310'>course,</span> <span
  m='1028530'>you're</span> <span m='1028630'>not</span> <span
  m='1028790'>going</span> <span m='1028880'>to</span> <span
  m='1028940'>see</span> <span m='1029170'>on</span> <span m='1029250'>a</span>
  <span m='1029300'>license</span> <span m='1029780'>plate,</span> <span
  m='1030800'>but</span> <span m='1030910'>you can</span> <span
  m='1031040'>always</span> <span m='1031310'>make</span> <span
  m='1031500'>up</span> <span m='1031599'>a</span> <span
  m='1031670'>bumper</span> <span m='1032050'>sticker</span> <span
  m='1033730'>or</span> <span m='1033849'>something,</span> <span
  m='1034280'>and</span> <span m='1034380'>you can</span> <span
  m='1034530'>have</span> <span m='1034960'>the</span> <span
  m='1035160'>c17</span> <span m='1036089'>as</span> <span
  m='1036220'>being</span> <span m='1036420'>a</span> <span
  m='1036470'>bumper</span> <span m='1036780'>sticker</span> <span
  m='1037119'>on</span> <span m='1037220'>your</span> <span
  m='1037359'>car.</span> <span m='1038420'>I</span> <span
  m='1038730'>mean,</span> <span m='1038760'>that's</span> <span m='1038920'>the
  kind</span> <span m='1039290'>of thing that</span> <span
  m='1039390'>I'd</span> <span m='1039695'>do.</span> <span
  m='1043050'>Anyway,</span> <span m='1043420'>so</span> <span
  m='1043599'>it's</span> <span m='1043680'>just</span> <span
  m='1043990'>in</span> <span m='1044069'>case</span> <span
  m='1044260'>you</span> <span m='1044359'>see</span> <span
  m='1044490'>these</span> <span m='1044680'>numbers--</span> <span
  m='1047410'>we</span> <span m='1047450'>might</span> <span
  m='1048040'>come</span> <span m='1048170'>back</span> <span
  m='1048369'>to</span> <span m='1048450'>this</span> <span m='1048750'>a</span>
  <span m='1048790'>little</span> <span m='1048940'>bit</span> <span
  m='1049040'>later</span> <span m='1049350'>in</span> <span
  m='1049510'>the</span> <span m='1049660'>class,</span> <span
  m='1050700'>but--</span> </p><p><span m='1051450'>AUDIENCE: 42</span> <span
  m='1051940'>is on that list.</span> </p><p><span m='1052430'>PROFESSOR:
  42</span> <span m='1052830'>is</span> <span m='1052930'>on</span> <span
  m='1053040'>that</span> <span m='1053130'>list.</span> <span
  m='1053440'>Yeah,</span> <span m='1053820'>it has</span> <span m='1054200'>to
  be.</span> <span m='1054960'>42</span> <span m='1055320'>is</span> <span
  m='1055420'>on</span> <span m='1055480'>every</span> <span
  m='1055875'>list.</span> <span m='1057580'>42</span> <span
  m='1057800'>is</span> <span m='1057940'>the</span> <span
  m='1058160'>answer</span> <span m='1058995'>to</span> <span
  m='1059300'>every</span> <span m='1059590'>question.</span> <span
  m='1060590'>I</span> <span m='1060920'>am</span> <span m='1061230'>glad</span>
  <span m='1061500'>you</span> <span m='1061590'>guys</span> <span
  m='1061770'>didn't</span> <span m='1061920'>put</span> <span
  m='1062080'>42</span> <span m='1062490'>down</span> <span
  m='1062770'>in</span> <span m='1062850'>the</span> <span
  m='1062960'>answer</span> <span m='1063320'>to</span> <span
  m='1063540'>every</span> <span m='1063830'>quiz</span> <span
  m='1064080'>question.</span> <span m='1064560'>It</span> <span
  m='1065730'>doesn't</span> <span m='1066000'>quite</span> <span
  m='1066290'>work</span> <span m='1067080'>all</span> <span
  m='1067390'>the</span> <span m='1067500'>time,</span> <span
  m='1068240'>all</span> <span m='1068340'>right,</span> <span
  m='1068730'>but</span> <span m='1068940'>most of the</span> <span
  m='1069300'>time</span> <span m='1069530'>42</span> <span
  m='1069930'>is</span> <span m='1070030'>a</span> <span m='1070080'>good</span>
  <span m='1070230'>answer.</span> <span m='1072400'>Most</span> <span
  m='1072670'>of</span> <span m='1072830'>the</span> <span
  m='1073170'>time.</span> <span m='1074450'>OK</span> <span
  m='1074690'>good.</span> </p><p><span m='1075700'>So</span> <span
  m='1076700'>let's</span> <span m='1078430'>get</span> <span
  m='1078660'>down</span> <span m='1078850'>to</span> <span
  m='1078910'>business.</span> <span m='1080210'>So</span> <span
  m='1080330'>we</span> <span m='1080400'>talked</span> <span
  m='1080600'>about</span> <span m='1080770'>Catalan</span> <span
  m='1081050'>numbers</span> <span m='1081410'>as</span> <span
  m='1081540'>a</span> <span m='1081600'>digression.</span> <span
  m='1083680'>If</span> <span m='1083800'>you</span> <span
  m='1083920'>see</span> <span m='1084140'>them</span> <span
  m='1084720'>you'll</span> <span m='1084910'>recognize</span> <span
  m='1085400'>them,</span> <span m='1085620'>I</span> <span
  m='1085740'>think.</span> <span m='1087260'>Let's</span> <span
  m='1087750'>talk</span> <span m='1087890'>about</span> <span
  m='1088040'>how</span> <span m='1088200'>we</span> <span
  m='1088300'>could</span> <span m='1088440'>compute.</span> <span
  m='1088880'>Let's</span> <span m='1089080'>go</span> <span
  m='1089170'>back</span> <span m='1089400'>to</span> <span
  m='1089910'>irrationals</span> <span m='1090590'>and</span> <span
  m='1091280'>talk</span> <span m='1091460'>about</span> <span
  m='1091590'>how</span> <span m='1091710'>we</span> <span
  m='1091790'>could</span> <span m='1091920'>compute</span> <span
  m='1093040'>square</span> <span m='1093310'>root</span> <span
  m='1093430'>of</span> <span m='1093530'>2</span> <span m='1093790'>and</span>
  <span m='1093870'>other</span> <span m='1094060'>things</span> <span
  m='1094440'>to</span> <span m='1094690'>arbitrary</span> <span
  m='1095120'>precision.</span> </p><p><span m='1096360'>So</span> <span
  m='1096930'>what</span> <span m='1097090'>I</span> <span
  m='1097110'>want</span> <span m='1097260'>to</span> <span
  m='1097320'>do</span> <span m='1097450'>is</span> <span m='1097580'>to</span>
  <span m='1097690'>talk</span> <span m='1097930'>about</span> <span
  m='1098300'>Newton's</span> <span m='1098690'>method.</span> <span
  m='1106860'>And</span> <span m='1107530'>Newton's</span> <span
  m='1107680'>method</span> <span m='1108410'>is</span> <span
  m='1108550'>something</span> <span m='1108970'>you</span> <span
  m='1109110'>probably</span> <span m='1109450'>learned</span> <span
  m='1109680'>about</span> <span m='1111230'>in</span> <span
  m='1111440'>middle</span> <span m='1111670'>school,</span> <span
  m='1112020'>high</span> <span m='1112190'>school.</span> <span
  m='1116840'>And</span> <span m='1117010'>let's</span> <span
  m='1117180'>say</span> <span m='1117320'>you</span> <span
  m='1117390'>have</span> <span m='1117550'>a</span> <span
  m='1117620'>function</span> <span m='1118900'>y</span> <span
  m='1119320'>equals</span> <span m='1120300'>f</span> <span
  m='1120510'>of</span> <span m='1120680'>x</span> <span
  m='1121830'>where</span> <span m='1122940'>this</span> <span
  m='1123220'>is</span> <span m='1123380'>x</span> <span m='1124000'>and</span>
  <span m='1124390'>that's</span> <span m='1124650'>y,</span> <span
  m='1126410'>the</span> <span m='1126540'>coordinate</span> <span
  m='1126960'>axes.</span> <span m='1128100'>And</span> <span
  m='1128910'>we</span> <span m='1129030'>want</span> <span
  m='1129160'>to</span> <span m='1129360'>try</span> <span
  m='1129590'>and</span> <span m='1129700'>find</span> <span
  m='1130840'>the</span> <span m='1131010'>root</span> <span
  m='1132070'>of</span> <span m='1133120'>fx</span> <span
  m='1133570'>equals</span> <span m='1133950'>0</span> <span
  m='1138378'>through</span> <span m='1138870'>successive</span> <span
  m='1139410'>approximation.</span> </p><p><span m='1152550'>For</span> <span
  m='1152660'>example,</span> <span m='1153040'>we</span> <span
  m='1153120'>might</span> <span m='1153340'>have</span> <span
  m='1155150'>f</span> <span m='1155330'>of</span> <span m='1155470'>x</span>
  <span m='1155780'>equals</span> <span m='1156460'>x</span> <span
  m='1156660'>squared</span> <span m='1157060'>minus</span> <span
  m='1157330'>a.</span> <span m='1158790'>And</span> <span m='1159040'>if</span>
  <span m='1159100'>a</span> <span m='1159510'>is</span> <span
  m='1159825'>2</span> <span m='1160140'>then</span> <span
  m='1160950'>you're</span> <span m='1161140'>trying to</span> <span
  m='1161330'>use</span> <span m='1161630'>Newton's</span> <span
  m='1161900'>method</span> <span m='1163030'>to</span> <span
  m='1163160'>find</span> <span m='1163420'>the</span> <span
  m='1163490'>root,</span> <span m='1164400'>and</span> <span
  m='1164570'>you're</span> <span m='1164680'>going</span> <span
  m='1164800'>to</span> <span m='1164840'>end</span> <span m='1165060'>up</span>
  <span m='1167490'>trying</span> <span m='1167890'>to</span> <span
  m='1167940'>compute</span> <span m='1168350'>square</span> <span
  m='1168620'>root</span> <span m='1168720'>of</span> <span m='1168840'>2</span>
  <span m='1169200'>or</span> <span m='1169560'>plus</span> <span
  m='1169760'>minus</span> <span m='1170020'>square</span> <span
  m='1170250'>root</span> <span m='1170310'>of</span> <span
  m='1170410'>2,</span> <span m='1170560'>in</span> <span
  m='1170640'>this</span> <span m='1170780'>case.</span> <span
  m='1171690'>But</span> <span m='1172070'>you</span> <span
  m='1172200'>can</span> <span m='1172320'>go</span> <span
  m='1172530'>for</span> <span m='1172680'>a</span> <span
  m='1172730'>particular</span> <span m='1174470'>root,</span> <span
  m='1175080'>and</span> <span m='1175220'>you're</span> <span m='1175550'>try
  and</span> <span m='1175790'>converge</span> <span m='1176160'>to</span> <span
  m='1176240'>that.</span> </p><p><span m='1177930'>So</span> <span
  m='1179450'>the</span> <span m='1179550'>way</span> <span
  m='1179680'>Newton's</span> <span m='1180000'>method</span> <span
  m='1180320'>works</span> <span m='1180690'>is</span> <span
  m='1181370'>it</span> <span m='1183020'>tries,</span> <span
  m='1183820'>geometrically</span> <span m='1184380'>speaking,</span> <span
  m='1185330'>it</span> <span m='1185740'>tries</span> <span
  m='1186000'>to</span> <span m='1186100'>find</span> <span
  m='1187200'>tangents--</span> <span m='1188740'>and</span> <span
  m='1188910'>a</span> <span m='1189140'>different</span> <span
  m='1189460'>color</span> <span m='1189740'>chalk</span> <span
  m='1190110'>would</span> <span m='1190250'>be</span> <span
  m='1190410'>useful</span> <span m='1190770'>here</span> <span
  m='1191000'>but</span> <span m='1191290'>I</span> <span
  m='1191850'>don't</span> <span m='1192000'>seem</span> <span
  m='1192170'>to</span> <span m='1192260'>see</span> <span
  m='1192480'>one--</span> <span m='1193710'>So</span> <span
  m='1193920'>what</span> <span m='1194050'>would</span> <span
  m='1194140'>happen</span> <span m='1194420'>is,</span> <span
  m='1194590'>let's</span> <span m='1194770'>say</span> <span
  m='1194900'>you</span> <span m='1195180'>are</span> <span
  m='1195260'>sitting</span> <span m='1195530'>out</span> <span
  m='1195670'>here,</span> <span m='1197210'>and</span> <span
  m='1197640'>it's</span> <span m='1198090'>successive</span> <span
  m='1198460'>approximation</span> <span m='1199130'>method,</span> <span
  m='1200240'>so</span> <span m='1200550'>this</span> <span
  m='1201700'>would</span> <span m='1201930'>give</span> <span
  m='1202100'>you</span> <span m='1203850'>x</span> <span m='1204110'>of</span>
  <span m='1204200'>i.</span> <span m='1205200'>And</span> <span
  m='1205380'>now</span> <span m='1205550'>you</span> <span
  m='1205680'>want</span> <span m='1205810'>to</span> <span
  m='1206060'>compute</span> <span m='1206600'>x</span> <span
  m='1207130'>of</span> <span m='1207300'>i</span> <span m='1207700'>plus</span>
  <span m='1207960'>1.</span> <span m='1208870'>And</span> <span
  m='1209040'>what</span> <span m='1209180'>you're</span> <span
  m='1209270'>going</span> <span m='1209420'>to</span> <span
  m='1209490'>do</span> <span m='1209710'>is</span> <span
  m='1210000'>draw</span> <span m='1210300'>a</span> <span
  m='1210330'>tangent,</span> <span m='1211890'>like</span> <span
  m='1212170'>so,</span> <span m='1213730'>and</span> <span
  m='1214880'>find</span> <span m='1215340'>the</span> <span
  m='1216260'>intercept</span> <span m='1217280'>onto</span> <span
  m='1217650'>the</span> <span m='1217760'>x-axis,</span> <span
  m='1218540'>the</span> <span m='1218580'>x-intercept.</span> <span
  m='1220150'>And</span> <span m='1220570'>that</span> <span
  m='1220810'>is</span> <span m='1220940'>going</span> <span
  m='1221200'>to</span> <span m='1221280'>be</span> <span
  m='1222810'>your</span> <span m='1223110'>xi</span> <span
  m='1223570'>plus</span> <span m='1223830'>1.</span> </p><p><span
  m='1225720'>And</span> <span m='1226210'>you</span> <span
  m='1226350'>have</span> <span m='1226480'>to</span> <span
  m='1226690'>write</span> <span m='1226920'>an</span> <span
  m='1227010'>equation</span> <span m='1227480'>for</span> <span
  m='1227590'>that</span> <span m='1227800'>tangent.</span> <span
  m='1228900'>And</span> <span m='1229640'>this</span> <span
  m='1229940'>is,</span> <span m='1230240'>I</span> <span
  m='1230310'>guess,</span> <span m='1232060'>trying</span> <span
  m='1232250'>to</span> <span m='1232310'>figure</span> <span
  m='1232540'>out</span> <span m='1232670'>how</span> <span
  m='1232770'>much</span> <span m='1233030'>of</span> <span
  m='1233440'>middle</span> <span m='1233690'>school</span> <span
  m='1233960'>math</span> <span m='1234440'>or</span> <span
  m='1234700'>high</span> <span m='1234850'>school</span> <span
  m='1235100'>math</span> <span m='1235730'>that</span> <span
  m='1236290'>you</span> <span m='1236470'>remember.</span> <span
  m='1237220'>What</span> <span m='1237390'>is</span> <span
  m='1237550'>the</span> <span m='1237680'>equation</span> <span
  m='1238880'>for</span> <span m='1239820'>that</span> <span
  m='1240660'>tangent?</span> <span m='1241950'>Anybody?</span> <span
  m='1248520'>The</span> <span m='1248650'>equation</span> <span
  m='1249090'>for</span> <span m='1249200'>that</span> <span
  m='1249410'>tangent?</span> <span m='1250340'>What</span> <span
  m='1250510'>do</span> <span m='1250550'>you</span> <span m='1250650'>do</span>
  <span m='1250870'>in</span> <span m='1250980'>order</span> <span
  m='1251130'>to</span> <span m='1251190'>compute</span> <span
  m='1251520'>that</span> <span m='1251700'>tangent?</span> <span
  m='1253200'>Give</span> <span m='1253310'>me</span> <span m='1253430'>a</span>
  <span m='1253470'>name.</span> </p><p><span m='1254396'>AUDIENCE:
  Derivative?</span> </p><p><span m='1255090'>PROFESSOR: Derivative.</span>
  <span m='1255570'>Thank</span> <span m='1255780'>you.</span> <span
  m='1256460'>So</span> <span m='1256700'>what's</span> <span
  m='1256890'>the</span> <span m='1256970'>equation</span> <span
  m='1257380'>for</span> <span m='1257460'>that</span> <span
  m='1257650'>tangent?</span> <span m='1259380'>y</span> <span
  m='1259800'>equals--</span> <span m='1268630'>Someone?</span> </p><p><span
  m='1269602'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='1271080'>PROFESSOR:
  It's a</span> <span m='1271230'>good</span> <span m='1271520'>think
  your</span> <span m='1271570'>middle</span> <span m='1271770'>school,</span>
  <span m='1272110'>high</span> <span m='1272240'>school</span> <span
  m='1272470'>teachers</span> <span m='1272800'>aren't</span> <span
  m='1272990'>here.</span> <span m='1276140'>Not</span> <span
  m='1276770'>you.</span> <span m='1276855'>You</span> <span
  m='1276940'>already</span> <span m='1277120'>got</span> <span
  m='1277260'>a</span> <span m='1277310'>cushion.</span> <span
  m='1278610'>Someone</span> <span m='1278890'>else.</span> <span
  m='1283470'>Someone</span> <span m='1283750'>else.</span> <span
  m='1284580'>All</span> <span m='1284660'>right.</span> <span
  m='1284920'>I'll</span> <span m='1285100'>start</span> <span
  m='1285350'>giving</span> <span m='1285530'>you</span> <span
  m='1285670'>some</span> <span m='1286080'>hints</span> <span
  m='1286420'>here.</span> <span m='1290540'>f</span> <span
  m='1290860'>of</span> <span m='1291040'>xi</span> <span
  m='1293950'>plus--</span> <span m='1296930'>plus--</span> </p><p><span
  m='1297745'>ALL: f prime.</span> </p><p><span m='1298555'>PROFESSOR: f</span>
  <span m='1298960'>prime</span> <span m='1299220'>xi.</span> <span
  m='1299680'>Thank you.</span> <span m='1300190'>Thank</span> <span
  m='1300440'>you.</span> <span m='1301070'>All</span> <span
  m='1301210'>right.</span> <span m='1301350'>You</span> <span
  m='1301440'>get</span> <span m='1301560'>a</span> <span
  m='1301890'>cushion.</span> <span m='1302630'>I'm</span> <span
  m='1303000'>getting</span> <span m='1303220'>them.</span> <span
  m='1305371'>Whatever</span> <span m='1306330'>it</span> <span
  m='1306430'>takes.</span> <span m='1307820'>Here</span> <span
  m='1308170'>you</span> <span m='1308550'>go.</span> <span
  m='1310170'>Yeah.</span> <span m='1311020'>That</span> <span
  m='1311100'>was</span> <span m='1311200'>left-handed,</span> <span
  m='1311740'>by</span> <span m='1311860'>the</span> <span
  m='1311960'>way.</span> <span m='1312390'>I'm</span> <span
  m='1312550'>actually</span> <span m='1312810'>right-handed,</span> <span
  m='1313380'>as</span> <span m='1313530'>you</span> <span
  m='1313610'>know.</span> </p><p><span m='1315560'>So</span> <span
  m='1317190'>what</span> <span m='1317340'>do</span> <span
  m='1317380'>we</span> <span m='1317470'>have</span> <span
  m='1317680'>here?</span> <span m='1317900'>So</span> <span
  m='1318040'>we</span> <span m='1318130'>have</span> <span m='1318310'>f</span>
  <span m='1318590'>prime</span> <span m='1319390'>xi.</span> <span
  m='1321300'>Now</span> <span m='1321710'>come</span> <span
  m='1321830'>on,</span> <span m='1322010'>let's</span> <span
  m='1322360'>finish</span> <span m='1322590'>it,</span> <span
  m='1322890'>finish it.</span> </p><p><span m='1323190'>AUDIENCE: Times</span>
  <span m='1323662'>i</span> <span m='1324134'>minus</span> <span
  m='1324606'>xi.</span> </p><p><span m='1325550'>PROFESSOR: Times</span> <span
  m='1325850'>xi</span> <span m='1326020'>is</span> <span m='1326240'>xi.</span>
  <span m='1326640'>Thank</span> <span m='1326890'>you.</span> <span
  m='1327630'>OK.</span> <span m='1327890'>So</span> <span
  m='1328090'>now</span> <span m='1328220'>I</span> <span m='1328310'>get</span>
  <span m='1328500'>it.</span> <span m='1329190'>You</span> <span
  m='1329290'>thought</span> <span m='1329500'>this</span> <span
  m='1329780'>was</span> <span m='1330400'>too</span> <span m='1330560'>simple
  a</span> <span m='1330990'>question.</span> <span m='1331370'>You</span> <span
  m='1331460'>guys</span> <span m='1331680'>were</span> <span
  m='1332150'>insulted</span> <span m='1332760'>by</span> <span
  m='1332890'>the</span> <span m='1332990'>question.</span> <span
  m='1333930'>So</span> <span m='1334100'>that's</span> <span
  m='1334250'>why</span> <span m='1334360'>you</span> <span
  m='1334430'>didn't</span> <span m='1334580'>tell</span> <span
  m='1334710'>me</span> <span m='1334830'>what</span> <span
  m='1334950'>it</span> <span m='1335040'>was</span> <span m='1336050'>At</span>
  <span m='1336230'>least,</span> <span m='1336570'>that's</span> <span
  m='1336730'>what</span> <span m='1336920'>I'm</span> <span
  m='1337010'>going</span> <span m='1337120'>to</span> <span
  m='1337160'>pretend</span> <span m='1339230'>to</span> <span
  m='1339510'>make</span> <span m='1339680'>myself</span> <span
  m='1340050'>feel</span> <span m='1340230'>better.</span> </p><p><span
  m='1341780'>So</span> <span m='1341920'>y</span> <span
  m='1342170'>equals</span> <span m='1342470'>f</span> <span
  m='1342640'>of</span> <span m='1342780'>xi</span> <span
  m='1344780'>plus</span> <span m='1345230'>f</span> <span
  m='1345430'>prime</span> <span m='1345800'>xi,</span> <span
  m='1346055'>which</span> <span m='1346310'>is</span> <span
  m='1346390'>the</span> <span m='1346530'>derivative</span> <span
  m='1347180'>of</span> <span m='1348570'>f</span> <span
  m='1350000'>evaluated</span> <span m='1350350'>at</span> <span
  m='1350700'>xi</span> <span m='1351650'>times</span> <span
  m='1351990'>x</span> <span m='1352180'>minus</span> <span
  m='1352420'>xi,</span> <span m='1352830'>that's</span> <span
  m='1353020'>the</span> <span m='1353100'>equation</span> <span
  m='1353520'>for</span> <span m='1354140'>the</span> <span
  m='1354240'>line.</span> <span m='1355220'>And</span> <span
  m='1355360'>that's</span> <span m='1355550'>essentially</span> <span
  m='1356670'>what</span> <span m='1357940'>we</span> <span
  m='1358090'>have</span> <span m='1358260'>to</span> <span
  m='1358370'>do</span> <span m='1359630'>to</span> <span
  m='1360270'>compute</span> <span m='1360640'>things</span> <span
  m='1360900'>like</span> <span m='1361540'>square</span> <span
  m='1361880'>root</span> <span m='1362020'>of</span> <span
  m='1362120'>2,</span> <span m='1362480'>which</span> <span
  m='1362640'>is</span> <span m='1362980'>iteratively</span> <span
  m='1363530'>applied</span> <span m='1364140'>Newton's</span> <span
  m='1364520'>method.</span> <span m='1365220'>The</span> <span
  m='1365300'>only</span> <span m='1365580'>problem</span> <span
  m='1366090'>is</span> <span m='1366830'>this</span> <span
  m='1367010'>is</span> <span m='1367130'>all</span> <span
  m='1368190'>good</span> <span m='1369310'>in</span> <span
  m='1369560'>theory</span> <span m='1370630'>that</span> <span
  m='1370770'>we</span> <span m='1370910'>can</span> <span
  m='1371440'>do--</span> <span m='1374920'>take</span> <span
  m='1375130'>that</span> <span m='1375270'>equation</span> <span
  m='1375890'>turn</span> <span m='1376070'>it</span> <span
  m='1376350'>into</span> <span m='1376860'>xi</span> <span
  m='1376980'>plus</span> <span m='1377240'>1</span> <span
  m='1377750'>equals</span> <span m='1378160'>xi</span> <span
  m='1379310'>minus</span> <span m='1380870'>f</span> <span
  m='1381030'>of</span> <span m='1381170'>xi</span> <span
  m='1381760'>divided</span> <span m='1382100'>by</span> <span
  m='1382420'>f</span> <span m='1382630'>prime</span> <span
  m='1383020'>of</span> <span m='1383150'>xi.</span> <span
  m='1386320'>And</span> <span m='1386630'>if</span> <span
  m='1386790'>you</span> <span m='1386900'>end</span> <span
  m='1387080'>up</span> <span m='1387720'>doing</span> <span
  m='1388120'>f</span> <span m='1388300'>of</span> <span m='1388470'>x</span>
  <span m='1389490'>equals</span> <span m='1390090'>x</span> <span
  m='1390310'>squared</span> <span m='1391010'>minus</span> <span
  m='1391400'>a,</span> <span m='1393370'>then</span> <span
  m='1393870'>you</span> <span m='1393970'>have</span> <span
  m='1394930'>xi</span> <span m='1395280'>plus</span> <span m='1395520'>1</span>
  <span m='1397510'>equals</span> <span m='1397870'>xi</span> <span
  m='1398390'>minus</span> <span m='1402660'>xi</span> <span
  m='1403030'>squared</span> <span m='1403470'>minus</span> <span
  m='1403830'>a</span> <span m='1404910'>divided</span> <span
  m='1405280'>by</span> <span m='1405460'>2xi,</span> <span
  m='1405960'>which</span> <span m='1406430'>is</span> <span
  m='1406570'>the</span> <span m='1406660'>derivative</span> <span
  m='1407160'>of</span> <span m='1407410'>x</span> <span
  m='1407570'>squared</span> <span m='1408900'>minus</span> <span
  m='1409270'>a</span> <span m='1410410'>evaluated</span> <span
  m='1410705'>at</span> <span m='1411000'>xi.</span> <span
  m='1412050'>And</span> <span m='1412490'>finally</span> <span
  m='1412860'>you</span> <span m='1412980'>get</span> <span
  m='1413150'>this</span> <span m='1413290'>equation,</span> <span
  m='1414510'>xi</span> <span m='1414970'>plus</span> <span m='1415380'>a</span>
  <span m='1415610'>divided</span> <span m='1415940'>by</span> <span
  m='1416120'>xi</span> <span m='1417370'>divided</span> <span
  m='1417690'>by</span> <span m='1417820'>2.</span> </p><p><span
  m='1419850'>So</span> <span m='1420080'>it's</span> <span
  m='1420240'>fairly</span> <span m='1420500'>straightforward.</span> <span
  m='1421560'>xi</span> <span m='1421770'>plus</span> <span m='1421980'>1</span>
  <span m='1422620'>equals</span> <span m='1422950'>xi</span> <span
  m='1423300'>plus</span> <span m='1423540'>a</span> <span
  m='1423710'>divided</span> <span m='1424010'>by</span> <span
  m='1424250'>xi</span> <span m='1424790'>divided</span> <span
  m='1425070'>by</span> <span m='1425190'>2.</span> <span m='1426060'>And</span>
  <span m='1426240'>if</span> <span m='1426310'>you</span> <span
  m='1426380'>look</span> <span m='1426530'>at</span> <span
  m='1426610'>this,</span> <span m='1427540'>remember</span> <span
  m='1427970'>that</span> <span m='1429390'>a is</span> <span
  m='1429820'>typically</span> <span m='1430280'>a</span> <span
  m='1430350'>small</span> <span m='1430690'>number.</span> <span
  m='1431180'>I</span> <span m='1431440'>mean,</span> <span
  m='1431590'>it's</span> <span m='1431760'>two,</span> <span
  m='1432120'>in</span> <span m='1432200'>this</span> <span
  m='1432390'>case,</span> <span m='1432700'>if</span> <span
  m='1432800'>you're</span> <span m='1432930'>computing</span> <span
  m='1433280'>square</span> <span m='1433590'>root</span> <span
  m='1433660'>of</span> <span m='1433780'>2.</span> <span m='1434920'>it</span>
  <span m='1435300'>may</span> <span m='1435470'>even</span> <span
  m='1435650'>be</span> <span m='1435780'>an</span> <span
  m='1435860'>integer,</span> <span m='1436880'>maybe</span> <span
  m='1437190'>a</span> <span m='1437240'>fraction.</span> <span
  m='1438730'>But</span> <span m='1438980'>you</span> <span
  m='1439080'>have</span> <span m='1439260'>to</span> <span
  m='1439380'>do</span> <span m='1439560'>a</span> <span
  m='1439660'>division</span> <span m='1440170'>here.</span> <span
  m='1441310'>And</span> <span m='1441540'>remember</span> <span
  m='1441860'>that</span> <span m='1442150'>since</span> <span
  m='1442330'>we</span> <span m='1442400'>want</span> <span
  m='1442590'>to</span> <span m='1442640'>compute</span> <span
  m='1443000'>things</span> <span m='1443240'>to</span> <span
  m='1443350'>millions</span> <span m='1443710'>of</span> <span
  m='1443810'>digits,</span> <span m='1445250'>potentially,</span> <span
  m='1446340'>these</span> <span m='1446540'>numbers,</span> <span
  m='1447090'>the</span> <span m='1447180'>xi</span> <span
  m='1447520'>numbers,</span> <span m='1447900'>are</span> <span
  m='1447970'>going</span> <span m='1448100'>to</span> <span
  m='1448140'>have</span> <span m='1448820'>millions</span> <span
  m='1449150'>of</span> <span m='1449230'>digits.</span> </p><p><span
  m='1451690'>And</span> <span m='1451910'>so</span> <span m='1452570'>if</span>
  <span m='1452700'>you</span> <span m='1452830'>end</span> <span
  m='1453030'>up</span> <span m='1453730'>running</span> <span
  m='1454080'>this</span> <span m='1454290'>Newton</span> <span
  m='1454510'>method</span> <span m='1455620'>on</span> <span
  m='1456550'>a</span> <span m='1456800'>equals</span> <span
  m='1457270'>2,</span> <span m='1459670'>then</span> <span
  m='1461650'>if</span> <span m='1461820'>I</span> <span
  m='1461870'>simulate</span> <span m='1462560'>what</span> <span
  m='1462710'>happens</span> <span m='1464110'>without</span> <span
  m='1464390'>worrying</span> <span m='1464650'>about</span> <span
  m='1464880'>the</span> <span m='1464950'>implementation,</span> <span
  m='1467060'>and</span> <span m='1467290'>this</span> <span
  m='1467420'>is</span> <span m='1467520'>what</span> <span
  m='1467700'>you'll</span> <span m='1467800'>get.</span> <span
  m='1473300'>You</span> <span m='1473360'>have</span> <span
  m='1473500'>x0--</span> <span m='1474190'>you</span> <span
  m='1474320'>start</span> <span m='1474550'>with</span> <span
  m='1474630'>x0</span> <span m='1475000'>equals</span> <span
  m='1475330'>1</span> <span m='1476380'>with</span> <span m='1476500'>a</span>
  <span m='1476530'>bunch</span> <span m='1476780'>of</span> <span
  m='1478690'>zeros.</span> <span m='1480260'>xi</span> <span
  m='1481200'>equals</span> <span m='1482110'>1.5</span> <span
  m='1484460'>with</span> <span m='1484560'>a</span> <span
  m='1484600'>bunch</span> <span m='1484830'>of</span> <span
  m='1484880'>zeros,</span> <span m='1485170'>et</span> <span
  m='1485460'>cetera.</span> <span m='1487740'>And</span> <span
  m='1487910'>then,</span> <span m='1488510'>x2</span> <span
  m='1489010'>equals</span> <span m='1490090'>1.41666</span> <span
  m='1494130'>et</span> <span m='1494430'>cetera.</span> <span
  m='1495370'>That</span> <span m='1495520'>goes</span> <span
  m='1495720'>on.</span> <span m='1498140'>And</span> <span
  m='1498560'>we're</span> <span m='1498650'>not</span> <span
  m='1498790'>talking</span> <span m='1499000'>about</span> <span
  m='1499380'>fractions</span> <span m='1499930'>here,</span> <span
  m='1500600'>we're</span> <span m='1501110'>talking</span> <span
  m='1501380'>about</span> <span m='1503230'>floating</span> <span
  m='1503610'>point</span> <span m='1503840'>numbers</span> <span
  m='1504960'>that</span> <span m='1505920'>are</span> <span
  m='1506180'>integers</span> <span m='1506690'>with</span> <span
  m='1506880'>a</span> <span m='1506950'>certain</span> <span
  m='1507320'>amount</span> <span m='1507630'>of</span> <span
  m='1507730'>precision.</span> </p><p><span m='1508620'>So</span> <span
  m='1509340'>you've</span> <span m='1509580'>decided</span> <span
  m='1510180'>that</span> <span m='1510310'>you</span> <span
  m='1510410'>want</span> <span m='1510540'>to</span> <span
  m='1510590'>compute</span> <span m='1510960'>this</span> <span
  m='1511160'>to</span> <span m='1511280'>d</span> <span
  m='1511700'>digits</span> <span m='1511930'>of</span> <span
  m='1512020'>precision</span> <span m='1512280'>where</span> <span
  m='1512540'>d</span> <span m='1512900'>may be</span> <span
  m='1513180'>a</span> <span m='1513230'>million.</span> <span
  m='1514030'>And</span> <span m='1514200'>so,</span> <span
  m='1515100'>really,</span> <span m='1515420'>here</span> <span
  m='1515750'>you</span> <span m='1515860'>would</span> <span
  m='1515950'>have</span> <span m='1516180'>a</span> <span
  m='1516200'>representation</span> <span m='1517400'>that's</span> <span
  m='1517620'>a</span> <span m='1517680'>million</span> <span
  m='1517960'>digits</span> <span m='1518310'>long</span> <span
  m='1518640'>that</span> <span m='1519120'>where,</span> <span
  m='1519860'>basically,</span> <span m='1520290'>everything</span> <span
  m='1520540'>is</span> <span m='1520660'>zero,</span> <span
  m='1521450'>and</span> <span m='1521620'>here</span> <span
  m='1521940'>everything</span> <span m='1522230'>but</span> <span
  m='1522380'>one</span> <span m='1522800'>is</span> <span m='1522990'>0,</span>
  <span m='1523530'>or</span> <span m='1523600'>maybe</span> <span
  m='1523800'>a</span> <span m='1523860'>couple</span> <span m='1524250'>if
  you</span> <span m='1524350'>count</span> <span m='1525210'>the</span> <span
  m='1525380'>1</span> <span m='1525600'>here.</span> <span
  m='1526570'>And</span> <span m='1526720'>here</span> <span m='1526950'>you
  have</span> <span m='1527070'>all</span> <span m='1527310'>these</span> <span
  m='1527460'>sixes</span> <span m='1527880'>here,</span> <span
  m='1528790'>and</span> <span m='1528970'>so</span> <span m='1529110'>on</span>
  <span m='1529290'>and</span> <span m='1529390'>so</span> <span
  m='1529470'>forth.</span> <span m='1530280'>And</span> <span
  m='1530410'>you</span> <span m='1530580'>keep</span> <span
  m='1530780'>going,</span> <span m='1531100'>and</span> <span
  m='1531160'>you</span> <span m='1531240'>get</span> <span
  m='1531390'>x2</span> <span m='1531800'>equals</span> <span
  m='1533020'>1.414215686.</span> <span m='1542810'>And</span> <span
  m='1543010'>I</span> <span m='1543040'>want</span> <span m='1543170'>to</span>
  <span m='1543210'>write</span> <span m='1543370'>one</span> <span
  m='1543550'>more</span> <span m='1543940'>because</span> <span
  m='1544240'>I</span> <span m='1544270'>want</span> <span m='1544390'>to</span>
  <span m='1544450'>point</span> <span m='1544720'>out</span> <span
  m='1544900'>something</span> <span m='1545240'>that's</span> <span
  m='1545480'>important.</span> <span m='1546560'>1.414213562.</span>
  </p><p><span m='1554610'>And</span> <span m='1555890'>what's</span> <span
  m='1556410'>nice</span> <span m='1556700'>about</span> <span
  m='1556980'>this,</span> <span m='1557890'>if</span> <span
  m='1558010'>you</span> <span m='1558110'>go</span> <span
  m='1558250'>compare</span> <span m='1558620'>it</span> <span
  m='1558740'>with</span> <span m='1558990'>what</span> <span
  m='1559170'>you</span> <span m='1559280'>have</span> <span
  m='1559500'>up</span> <span m='1559660'>there,</span> <span
  m='1560630'>is</span> <span m='1560820'>that</span> <span
  m='1561060'>you</span> <span m='1561160'>have</span> <span
  m='1561360'>quadratic</span> <span m='1562090'>convergence</span> <span
  m='1563590'>using</span> <span m='1563940'>the</span> <span
  m='1564030'>Newton's</span> <span m='1564410'>method.</span> <span
  m='1565550'>And</span> <span m='1565650'>what</span> <span
  m='1565770'>do</span> <span m='1565830'>I</span> <span m='1565920'>mean</span>
  <span m='1566180'>by</span> <span m='1566330'>that?</span> <span
  m='1567970'>Well,</span> <span m='1568930'>quadratic</span> <span
  m='1569540'>convergence</span> <span m='1570180'>is</span> <span
  m='1570310'>a</span> <span m='1570360'>nice</span> <span
  m='1570610'>property.</span> <span m='1573800'>It's</span> <span
  m='1573920'>much</span> <span m='1574210'>better</span> <span
  m='1574440'>than</span> <span m='1574620'>linear</span> <span
  m='1574950'>convergence.</span> <span m='1575890'>Linear</span> <span
  m='1576150'>convergence</span> <span m='1576620'>would</span> <span
  m='1576830'>mean</span> <span m='1577160'>that</span> <span
  m='1577800'>you</span> <span m='1577930'>get</span> <span
  m='1578250'>an</span> <span m='1578650'>extra</span> <span
  m='1579130'>digit</span> <span m='1579570'>of</span> <span
  m='1579710'>precision</span> <span m='1581610'>for</span> <span
  m='1581920'>every</span> <span m='1582290'>iteration.</span> </p><p><span
  m='1584250'>So</span> <span m='1584370'>in</span> <span
  m='1584440'>this</span> <span m='1584590'>case,</span> <span
  m='1584820'>actually,</span> <span m='1585090'>a</span> <span
  m='1585180'>quadratic</span> <span m='1585680'>is</span> <span
  m='1585820'>better.</span> <span m='1586970'>Usually</span> <span
  m='1587250'>we</span> <span m='1587360'>think</span> <span
  m='1587490'>of</span> <span m='1587590'>quadratic</span> <span
  m='1588050'>algorithms,</span> <span m='1588600'>and</span> <span
  m='1588700'>we</span> <span m='1588990'>are</span> <span
  m='1589010'>going</span> <span m='1589130'>to</span> <span
  m='1589310'>throw</span> <span m='1589490'>up.</span> <span
  m='1590330'>But</span> <span m='1591610'>linear</span> <span
  m='1591940'>algorithms</span> <span m='1592350'>is</span> <span
  m='1592440'>what</span> <span m='1592620'>we</span> <span
  m='1592740'>like.</span> <span m='1593710'>But</span> <span
  m='1593820'>in</span> <span m='1593910'>this</span> <span
  m='1594080'>case</span> <span m='1594470'>it's</span> <span
  m='1594840'>actually</span> <span m='1595100'>a</span> <span
  m='1595150'>good</span> <span m='1595370'>thing.</span> <span
  m='1596020'>You</span> <span m='1596140'>have</span> <span
  m='1596550'>this</span> <span m='1596800'>extended</span> <span
  m='1597300'>this</span> <span m='1597440'>quadratic</span> <span
  m='1597940'>rate</span> <span m='1598140'>of</span> <span
  m='1598230'>convergence</span> <span m='1599330'>where</span> <span
  m='1599910'>the</span> <span m='1600060'>number</span> <span
  m='1600340'>of</span> <span m='1600610'>digits</span> <span
  m='1601580'>that</span> <span m='1601800'>are</span> <span
  m='1602095'>correct</span> <span m='1602880'>doubles</span> <span
  m='1603520'>with</span> <span m='1603670'>every</span> <span
  m='1603910'>iteration,</span> <span m='1604760'>as</span> <span
  m='1604920'>you</span> <span m='1605010'>can</span> <span
  m='1605120'>see.</span> </p><p><span m='1606100'>So</span> <span
  m='1606790'>here</span> <span m='1607040'>you</span> <span
  m='1607170'>have--</span> <span m='1608400'>you</span> <span
  m='1608590'>start</span> <span m='1608840'>with,</span> <span
  m='1609760'>roughly,</span> <span m='1610300'>if</span> <span
  m='1610400'>you</span> <span m='1610410'>rounded</span> <span
  m='1610770'>this</span> <span m='1610920'>up</span> <span
  m='1611200'>you</span> <span m='1611360'>would</span> <span
  m='1611810'>get</span> <span m='1612220'>5.</span> <span m='1613270'>So</span>
  <span m='1613550'>you're</span> <span m='1614000'>saying</span> <span
  m='1614210'>that</span> <span m='1614650'>that's</span> <span
  m='1615110'>one</span> <span m='1615340'>digit</span> <span
  m='1615670'>of</span> <span m='1615780'>precision</span> <span
  m='1616670'>in</span> <span m='1616850'>terms</span> <span
  m='1617050'>of</span> <span m='1617130'>the</span> <span
  m='1617210'>decimal.</span> <span m='1618120'>And</span> <span
  m='1618440'>then,</span> <span m='1618610'>now</span> <span
  m='1618840'>you're</span> <span m='1619150'>talking</span> <span
  m='1619400'>about</span> <span m='1619760'>41421356,</span> <span
  m='1630160'>so</span> <span m='1630280'>that's</span> <span
  m='1631110'>1,</span> <span m='1631552'>2,</span> <span m='1631994'>3,</span>
  <span m='1632436'>4,</span> <span m='1632878'>5, 6,</span> <span
  m='1633320'>7, 8,</span> <span m='1633560'>so</span> <span
  m='1633700'>that's</span> <span m='1634190'>eight</span> <span
  m='1634310'>digits of</span> <span m='1634720'>precision</span> <span
  m='1635160'>here,</span> <span m='1635475'>four</span> <span
  m='1635790'>here,</span> <span m='1636460'>and</span> <span
  m='1636620'>so</span> <span m='1636730'>on</span> <span m='1636840'>and</span>
  <span m='1636930'>so</span> <span m='1637070'>forth.</span> </p><p><span
  m='1638840'>So</span> <span m='1638980'>that's</span> <span
  m='1639210'>nice.</span> <span m='1639980'>That's</span> <span
  m='1640210'>why</span> <span m='1640390'>the</span> <span
  m='1640480'>Newton's</span> <span m='1640790'>method</span> <span
  m='1641040'>is</span> <span m='1641130'>actually</span> <span
  m='1641460'>used</span> <span m='1642250'>in</span> <span
  m='1642390'>practice</span> <span m='1643400'>because</span> <span
  m='1643700'>the</span> <span m='1643760'>number</span> <span
  m='1644110'>of</span> <span m='1645440'>digits</span> <span
  m='1646640'>doubles.</span> <span m='1649590'>This</span> <span
  m='1649740'>is</span> <span m='1649870'>a</span> <span
  m='1649950'>precision.</span> <span m='1653160'>So</span> <span
  m='1653290'>now</span> <span m='1653430'>you</span> <span
  m='1653540'>don't</span> <span m='1653710'>get</span> <span
  m='1654210'>too</span> <span m='1654410'>scared</span> <span
  m='1654780'>about</span> <span m='1655500'>calculating</span> <span
  m='1656020'>things</span> <span m='1656750'>that</span> <span
  m='1656980'>are</span> <span m='1657550'>a</span> <span
  m='1657600'>million</span> <span m='1658410'>because</span> <span
  m='1658660'>you</span> <span m='1658770'>kind</span> <span
  m='1658890'>of</span> <span m='1658940'>go</span> <span m='1659110'>and</span>
  <span m='1659220'>say,</span> <span m='1659430'>whoa,</span> <span
  m='1659800'>I</span> <span m='1659900'>mean,</span> <span
  m='1660000'>that's</span> <span m='1660010'>not</span> <span m='1660130'>so
  bad,</span> <span m='1660210'>that's</span> <span m='1660710'>only</span>
  <span m='1660890'>a</span> <span m='1660950'>logarithmic</span> <span
  m='1661650'>number</span> <span m='1661910'>of</span> <span
  m='1661990'>integrations.</span> <span m='1663910'>And</span> <span
  m='1664030'>it's</span> <span m='1664150'>not</span> <span
  m='1664290'>like</span> <span m='1664440'>you</span> <span m='1664500'>have
  to</span> <span m='1664650'>run</span> <span m='1664940'>for</span> <span
  m='1665170'>a million</span> <span m='1665280'>iterations.</span> <span
  m='1666420'>You</span> <span m='1666780'>go</span> <span m='1667010'>2,</span>
  <span m='1667290'>4,</span> <span m='1667960'>8,</span> <span
  m='1668210'>16,</span> <span m='1668490'>and</span> <span
  m='1668910'>now</span> <span m='1669350'>that</span> <span
  m='1669720'>exponential</span> <span m='1671210'>helps</span> <span
  m='1671500'>you,</span> <span m='1671790'>the</span> <span
  m='1671940'>geometric</span> <span m='1672380'>series</span> <span
  m='1672730'>helps</span> <span m='1672970'>you.</span> </p><p><span
  m='1675320'>So</span> <span m='1675440'>that's</span> <span
  m='1675620'>the</span> <span m='1675680'>nice</span> <span
  m='1675870'>thing</span> <span m='1676000'>about</span> <span
  m='1676180'>the</span> <span m='1676240'>Newton's</span> <span
  m='1676540'>method.</span> <span m='1677880'>Haven't</span> <span
  m='1678170'>quite</span> <span m='1679990'>told</span> <span
  m='1680350'>you</span> <span m='1681440'>how</span> <span m='1681690'>we
  are</span> <span m='1681830'>going</span> <span m='1681930'>to</span> <span
  m='1682020'>compute</span> <span m='1682530'>the</span> <span
  m='1682630'>most</span> <span m='1682960'>important</span> <span
  m='1683420'>thing</span> <span m='1683620'>here</span> <span
  m='1684650'>with</span> <span m='1684840'>respect</span> <span
  m='1685360'>to</span> <span m='1685520'>a</span> <span
  m='1685700'>divided</span> <span m='1686070'>by</span> <span
  m='1686240'>xi.</span> <span m='1687640'>So</span> <span
  m='1687760'>this</span> <span m='1687950'>is</span> <span
  m='1688070'>just</span> <span m='1688640'>additions.</span> <span
  m='1689200'>You</span> <span m='1689300'>can</span> <span
  m='1689410'>imagine</span> <span m='1690480'>that</span> <span
  m='1690750'>if</span> <span m='1690840'>you</span> <span
  m='1690920'>have</span> <span m='1691090'>long</span> <span
  m='1691410'>numbers</span> <span m='1692580'>you'd</span> <span
  m='1692830'>end</span> <span m='1693030'>up</span> <span
  m='1694730'>doing</span> <span m='1695960'>addition</span> <span
  m='1696430'>fairly</span> <span m='1696770'>straightforwardly</span> <span
  m='1697410'>because</span> <span m='1697630'>you</span> <span
  m='1697750'>only</span> <span m='1697930'>have</span> <span
  m='1698080'>to</span> <span m='1698170'>worry</span> <span
  m='1698390'>about</span> <span m='1698560'>one</span> <span
  m='1698860'>carry,</span> <span m='1700220'>and</span> <span
  m='1700430'>so</span> <span m='1700820'>you</span> <span m='1700940'>go</span>
  <span m='1701080'>off.</span> </p><p><span m='1701310'>And</span> <span
  m='1701590'>I'm</span> <span m='1701900'>sure</span> <span
  m='1702170'>you've</span> <span m='1702390'>added</span> <span
  m='1702870'>up</span> <span m='1703020'>numbers</span> <span
  m='1703410'>that</span> <span m='1703530'>are</span> <span
  m='1704040'>in</span> <span m='1704250'>tens,</span> <span
  m='1704660'>if</span> <span m='1704870'>not</span> <span
  m='1705030'>hundreds,</span> <span m='1705340'>of</span> <span
  m='1705440'>digits</span> <span m='1705810'>long</span> <span
  m='1706460'>but</span> <span m='1706670'>I'm</span> <span
  m='1706800'>guessing</span> <span m='1707270'>you</span> <span
  m='1707400'>haven't</span> <span m='1708200'>manually</span> <span
  m='1709190'>multiplied</span> <span m='1709780'>numbers</span> <span
  m='1710590'>that</span> <span m='1710780'>are</span> <span
  m='1711650'>hundreds</span> <span m='1712000'>of</span> <span
  m='1712520'>digits</span> <span m='1713020'>long.</span> <span
  m='1714330'>And</span> <span m='1714530'>if</span> <span
  m='1714610'>you</span> <span m='1714710'>have</span> <span
  m='1715610'>I'd</span> <span m='1715820'>be</span> <span
  m='1715920'>impressed,</span> <span m='1716740'>though</span> <span
  m='1716890'>I won't</span> <span m='1717260'>believe</span> <span
  m='1717500'>your</span> <span m='1717610'>result.</span> <span
  m='1718720'>But</span> <span m='1720490'>that's</span> <span
  m='1720950'>something</span> <span m='1721270'>that</span> <span
  m='1721650'>is</span> <span m='1721780'>kind</span> <span
  m='1721920'>of</span> <span m='1722740'>a</span> <span
  m='1722810'>painful</span> <span m='1723230'>thing</span> <span
  m='1723420'>to</span> <span m='1723520'>do.</span> <span
  m='1724380'>And</span> <span m='1724570'>so</span> <span
  m='1724670'>that's</span> <span m='1724850'>why</span> <span
  m='1724970'>we</span> <span m='1725080'>need</span> <span
  m='1725240'>computers.</span> <span m='1726200'>And</span> <span
  m='1726700'>that's</span> <span m='1726850'>multiplication</span> <span
  m='1727960'>and--</span> <span m='1729480'>has</span> <span
  m='1729640'>anybody</span> <span m='1730050'>divided</span> <span
  m='1730460'>a</span> <span m='1730510'>hundred-digit</span> <span
  m='1731160'>number</span> <span m='1731550'>by</span> <span
  m='1731700'>another</span> <span m='1732630'>50-digit</span> <span
  m='1733280'>number?</span> <span m='1734840'>No.</span> <span
  m='1735870'>So</span> <span m='1736070'>you</span> <span
  m='1736160'>need</span> <span m='1736300'>computers.</span> </p><p><span
  m='1737810'>So</span> <span m='1737980'>we've</span> <span
  m='1738080'>got</span> <span m='1738230'>to</span> <span m='1738280'>be</span>
  <span m='1738440'>able</span> <span m='1738600'>to</span> <span
  m='1738700'>do</span> <span m='1739260'>that</span> <span
  m='1739590'>division</span> <span m='1740060'>there,</span> <span
  m='1740370'>a</span> <span m='1740540'>divided</span> <span
  m='1740880'>by</span> <span m='1741040'>xi,</span> <span
  m='1742350'>using</span> <span m='1743390'>computers.</span> <span
  m='1744220'>And</span> <span m='1744360'>so</span> <span
  m='1744450'>that's</span> <span m='1744670'>really</span> <span
  m='1744870'>the</span> <span m='1744980'>purpose</span> <span
  m='1745330'>of</span> <span m='1745900'>this</span> <span
  m='1746190'>and</span> <span m='1746280'>the</span> <span
  m='1746350'>next</span> <span m='1746590'>lecture</span> <span
  m='1747420'>If</span> <span m='1747560'>you're</span> <span
  m='1747650'>only</span> <span m='1747820'>going</span> <span
  m='1747920'>to</span> <span m='1747990'>do a</span> <span
  m='1748120'>high</span> <span m='1748260'>precision</span> <span
  m='1748720'>multiplication</span> <span m='1749400'>here.</span> <span
  m='1750140'>And</span> <span m='1750720'>try</span> <span
  m='1751260'>see</span> <span m='1751470'>what</span> <span
  m='1751650'>an</span> <span m='1751800'>algorithm</span> <span
  m='1752250'>would</span> <span m='1752400'>be</span> <span
  m='1753000'>for</span> <span m='1753200'>high</span> <span
  m='1753370'>precision</span> <span m='1753830'>multiplication</span> <span
  m='1754910'>because</span> <span m='1755050'>what</span> <span
  m='1755200'>we're</span> <span m='1755310'>going</span> <span
  m='1755470'>to</span> <span m='1755560'>do</span> <span m='1755820'>is,</span>
  <span m='1756540'>essentially,</span> <span m='1757490'>take</span> <span
  m='1757750'>the</span> <span m='1758870'>reciprocal</span> <span
  m='1760010'>of</span> <span m='1760260'>one</span> <span
  m='1760500'>over</span> <span m='1760710'>xi</span> <span
  m='1761560'>and</span> <span m='1761680'>then</span> <span
  m='1761810'>multiply</span> <span m='1762240'>that</span> <span
  m='1762950'>by</span> <span m='1763220'>a.</span> <span m='1764010'>And</span>
  <span m='1764460'>we</span> <span m='1764590'>need--</span> <span
  m='1765320'>division</span> <span m='1765710'>is</span> <span
  m='1765800'>going</span> <span m='1765950'>to</span> <span
  m='1766000'>require</span> <span m='1766420'>multiplication.</span> <span
  m='1767510'>You</span> <span m='1767600'>don't</span> <span
  m='1767940'>really</span> <span m='1768290'>see</span> <span
  m='1768530'>a</span> <span m='1768570'>multiplication</span> <span
  m='1769210'>there</span> <span m='1769470'>other</span> <span
  m='1769680'>than</span> <span m='1769890'>a</span> <span
  m='1770100'>times</span> <span m='1770530'>1</span> <span
  m='1770750'>over</span> <span m='1770920'>xi.</span> </p><p><span
  m='1771770'>And</span> <span m='1771880'>you</span> <span
  m='1771950'>can</span> <span m='1772030'>say,</span> <span
  m='1772220'>well,</span> <span m='1772440'>do</span> <span
  m='1772530'>we</span> <span m='1772630'>really</span> <span
  m='1772840'>need</span> <span m='1773080'>multiplication?</span> <span
  m='1774150'>Well,</span> <span m='1774470'>the</span> <span
  m='1774590'>answer</span> <span m='1774950'>is</span> <span
  m='1776280'>the</span> <span m='1776420'>division</span> <span
  m='1776760'>algorithm</span> <span m='1777620'>that</span> <span
  m='1778030'>is</span> <span m='1778190'>used</span> <span
  m='1778440'>in</span> <span m='1778530'>practice</span> <span
  m='1779020'>in</span> <span m='1779310'>most</span> <span
  m='1779670'>division</span> <span m='1780000'>algorithms</span> <span
  m='1780820'>have</span> <span m='1781010'>multiplication</span> <span
  m='1781660'>as</span> <span m='1781770'>a</span> <span
  m='1781850'>subroutine.</span> <span m='1783430'>So</span> <span
  m='1784060'>we're</span> <span m='1784150'>going</span> <span
  m='1784250'>to</span> <span m='1784290'>have</span> <span
  m='1784580'>to</span> <span m='1785350'>figure</span> <span
  m='1785610'>out</span> <span m='1785750'>high</span> <span
  m='1785890'>precision</span> <span m='1786290'>multiplication</span> <span
  m='1786890'>first--</span> <span m='1787350'>It's</span> <span m='1787470'>a
  little</span> <span m='1787600'>bit</span> <span m='1787740'>easier</span>
  <span m='1788580'>than</span> <span m='1788720'>division--</span> <span
  m='1789430'>and</span> <span m='1789590'>use</span> <span
  m='1789820'>it</span> <span m='1789930'>as</span> <span m='1790050'>a</span>
  <span m='1790110'>subroutine</span> <span m='1791080'>for</span> <span
  m='1792320'>high</span> <span m='1792490'>precision</span> <span
  m='1792900'>division,</span> <span m='1793280'>which</span> <span
  m='1793580'>we'll do</span> <span m='1793720'>next</span> <span
  m='1794000'>time.</span> </p><p><span m='1796090'>So</span> <span
  m='1796190'>now</span> <span m='1796370'>we're</span> <span
  m='1796580'>sort</span> <span m='1796730'>of</span> <span
  m='1796790'>back</span> <span m='1797050'>in</span> <span
  m='1797160'>006</span> <span m='1798210'>land,</span> <span
  m='1799010'>if</span> <span m='1799150'>you</span> <span
  m='1799280'>will.</span> <span m='1799610'>We</span> <span
  m='1799760'>have</span> <span m='1799950'>a</span> <span
  m='1800010'>problem</span> <span m='1800920'>that is</span> <span
  m='1801170'>high</span> <span m='1801310'>precision</span> <span
  m='1801770'>multiplication,</span> <span m='1803040'>and</span> <span
  m='1803580'>we</span> <span m='1803730'>want</span> <span
  m='1804280'>to</span> <span m='1804500'>find</span> <span
  m='1804710'>an</span> <span m='1804810'>algorithm</span> <span
  m='1805170'>for</span> <span m='1805380'>it.</span> <span
  m='1805770'>And</span> <span m='1806290'>there's</span> <span
  m='1806580'>the</span> <span m='1806690'>vanilla</span> <span
  m='1807070'>algorithm</span> <span m='1808040'>that</span> <span
  m='1808540'>is</span> <span m='1809270'>going</span> <span
  m='1809430'>to</span> <span m='1809520'>take</span> <span
  m='1809910'>certain</span> <span m='1810190'>amounts</span> <span
  m='1810500'>of</span> <span m='1810580'>time,</span> <span
  m='1810950'>asymptotically</span> <span m='1811610'>speaking,</span> <span
  m='1812300'>and</span> <span m='1812400'>then</span> <span m='1812500'>there
  is</span> <span m='1812670'>better</span> <span m='1812990'>and</span> <span
  m='1813090'>better</span> <span m='1813330'>algorithms.</span> <span
  m='1814180'>As</span> <span m='1814350'>you</span> <span
  m='1814440'>can</span> <span m='1814540'>imagine,</span> <span
  m='1815950'>multiplication</span> <span m='1816325'>is</span> <span
  m='1816700'>just</span> <span m='1816900'>such</span> <span
  m='1817160'>a</span> <span m='1817240'>fundamental</span> <span
  m='1817960'>operation</span> <span m='1819670'>that</span> <span
  m='1820100'>people</span> <span m='1820400'>have</span> <span
  m='1820590'>looked</span> <span m='1820870'>at</span> <span
  m='1821450'>trying</span> <span m='1821720'>to</span> <span
  m='1821810'>reduce</span> <span m='1822210'>the</span> <span
  m='1822290'>complexity</span> <span m='1823300'>of</span> <span
  m='1823470'>high</span> <span m='1823610'>precision</span> <span
  m='1824070'>multiplication.</span> <span m='1825190'>So</span> <span
  m='1825210'>if</span> <span m='1825260'>you</span> <span
  m='1825330'>have</span> <span m='1825490'>n</span> <span
  m='1825760'>bits--</span> <span m='1826830'>So</span> <span m='1826970'>what
  is</span> <span m='1827150'>the</span> <span m='1827220'>standard</span> <span
  m='1827560'>algorithm</span> <span m='1827900'>for</span> <span
  m='1828000'>multiplication</span> <span m='1829040'>take</span> <span
  m='1829580'>if</span> <span m='1829690'>you</span> <span
  m='1829780'>have</span> <span m='1830130'>n</span> <span
  m='1830370'>bits</span> <span m='1830590'>of</span> <span
  m='1830660'>precision?</span> </p><p><span m='1832678'>AUDIENCE: N</span>
  <span m='1833164'>squared.</span> </p><p><span m='1833650'>PROFESSOR: n</span>
  <span m='1833860'>squared.</span> <span m='1834980'>But</span> <span
  m='1835220'>you</span> <span m='1835300'>can</span> <span
  m='1835380'>do</span> <span m='1835480'>better.</span> <span
  m='1836940'>And</span> <span m='1837440'>the</span> <span
  m='1837510'>people</span> <span m='1837820'>are</span> <span
  m='1838270'>work</span> <span m='1838530'>on</span> <span
  m='1838680'>it.</span> <span m='1838840'>You</span> <span
  m='1838930'>can</span> <span m='1839030'>do</span> <span
  m='1839160'>fast</span> <span m='1839430'>Fourier</span> <span
  m='1839670'>transforms.</span> <span m='1840680'>We</span> <span
  m='1840780'>won't</span> <span m='1840930'>quite</span> <span
  m='1841050'>do</span> <span m='1841220'>that</span> <span
  m='1841390'>here.</span> <span m='1842010'>If</span> <span
  m='1842340'>you</span> <span m='1842450'>take</span> <span
  m='1842620'>6.046</span> <span m='1843810'>you'll</span> <span
  m='1844160'>probably</span> <span m='1844440'>learn</span> <span
  m='1844600'>about</span> <span m='1844840'>that.</span> <span
  m='1845970'>But</span> <span m='1846200'>we'll</span> <span
  m='1846300'>do</span> <span m='1846500'>a</span> <span
  m='1846630'>couple</span> <span m='1846900'>of</span> <span
  m='1847390'>algorithms</span> <span m='1847910'>that</span> <span
  m='1847980'>are</span> <span m='1848040'>better</span> <span
  m='1848450'>than</span> <span m='1848630'>the</span> <span
  m='1848760'>order</span> <span m='1849110'>n</span> <span
  m='1849220'>squared</span> <span m='1850170'>method,</span> <span
  m='1851200'>and</span> <span m='1851300'>we'll</span> <span
  m='1851420'>do</span> <span m='1851530'>one</span> <span m='1851690'>of</span>
  <span m='1851770'>those</span> <span m='1852000'>today.</span> </p><p><span
  m='1859720'>So</span> <span m='1859900'>the</span> <span
  m='1860000'>way</span> <span m='1860150'>they're</span> <span
  m='1860290'>going</span> <span m='1860430'>to</span> <span
  m='1860510'>work</span> <span m='1860810'>with</span> <span
  m='1860960'>integers--</span> <span m='1861650'>one</span> <span
  m='1862310'>little</span> <span m='1865390'>point</span> <span
  m='1865700'>that</span> <span m='1865820'>I</span> <span
  m='1866100'>need</span> <span m='1866320'>to</span> <span
  m='1866390'>make</span> <span m='1866680'>before</span> <span
  m='1867020'>we</span> <span m='1869260'>move</span> <span
  m='1869510'>ahead</span> <span m='1869770'>here</span> <span
  m='1870710'>is,</span> <span m='1871620'>generally,</span> <span
  m='1872740'>we</span> <span m='1873000'>going</span> <span
  m='1873110'>to</span> <span m='1873170'>say,</span> <span
  m='1874340'>for</span> <span m='1874450'>the</span> <span
  m='1874540'>purposes</span> <span m='1874970'>of</span> <span
  m='1875440'>006,</span> <span m='1876860'>that</span> <span
  m='1877020'>we</span> <span m='1877120'>know</span> <span
  m='1877450'>the</span> <span m='1877530'>digits</span> <span
  m='1877880'>of</span> <span m='1877970'>precision</span> <span
  m='1881860'>up</span> <span m='1882090'>front</span> <span
  m='1882760'>because</span> <span m='1882950'>we</span> <span
  m='1883100'>want</span> <span m='1883270'>d</span> <span
  m='1883440'>digits</span> <span m='1883770'>of</span> <span
  m='1883840'>precision,</span> <span m='1884890'>maybe</span> <span
  m='1885080'>it's</span> <span m='1885230'>42,</span> <span
  m='1885870'>maybe</span> <span m='1886260'>it's</span> <span
  m='1886980'>125.</span> <span m='1888240'>In</span> <span m='1888380'>the
  case</span> <span m='1888430'>of</span> <span m='1888610'>our</span> <span
  m='1888770'>problem</span> <span m='1889060'>set</span> <span
  m='1889330'>in</span> <span m='1889470'>RSA</span> <span m='1890100'>we</span>
  <span m='1890150'>going</span> <span m='1890260'>to</span> <span
  m='1890300'>have</span> <span m='1890530'>it</span> <span
  m='1890910'>1,024-bit</span> <span m='1892100'>numbers,</span> <span
  m='1892980'>maybe</span> <span m='1893250'>2,048.</span> </p><p><span
  m='1894310'>So</span> <span m='1894430'>we</span> <span
  m='1894520'>know</span> <span m='1894660'>d</span> <span
  m='1894870'>beforehand.</span> <span m='1896680'>And</span> <span
  m='1897100'>so</span> <span m='1897280'>what</span> <span
  m='1897400'>we</span> <span m='1897510'>want</span> <span
  m='1897860'>is</span> <span m='1899110'>an</span> <span
  m='1899700'>integer,</span> <span m='1903380'>which</span> <span
  m='1903480'>is</span> <span m='1903640'>10</span> <span
  m='1903910'>raised</span> <span m='1904170'>to</span> <span
  m='1904660'>d</span> <span m='1905160'>times</span> <span
  m='1905400'>the</span> <span m='1905500'>square</span> <span
  m='1905710'>root</span> <span m='1905810'>of</span> <span
  m='1905940'>2,</span> <span m='1906746'>a</span> <span
  m='1907150'>floor,</span> <span m='1909020'>and</span> <span
  m='1909210'>which</span> <span m='1909330'>is</span> <span
  m='1909680'>essentially</span> <span m='1910120'>the</span> <span
  m='1910230'>same</span> <span m='1910590'>as</span> <span
  m='1916140'>that,</span> <span m='1916850'>2</span> <span
  m='1916990'>times</span> <span m='1917290'>10</span> <span
  m='1917510'>raised</span> <span m='1917890'>to</span> <span
  m='1918030'>2</span> <span m='1918270'>d.</span> <span m='1919270'>So</span>
  <span m='1919470'>we're</span> <span m='1919570'>going</span> <span
  m='1919670'>to</span> <span m='1919900'>treat</span> <span
  m='1920110'>these</span> <span m='1920310'>as</span> <span
  m='1920440'>integers,</span> <span m='1920890'>so</span> <span
  m='1921090'>we</span> <span m='1921180'>don't</span> <span
  m='1921300'>want</span> <span m='1921410'>to</span> <span
  m='1921560'>worry</span> <span m='1921640'>about</span> <span
  m='1921780'>decimal</span> <span m='1922110'>points</span> <span
  m='1922440'>and</span> <span m='1922540'>things</span> <span
  m='1922730'>like</span> <span m='1922880'>that.</span> <span
  m='1923360'>All</span> <span m='1923510'>of</span> <span
  m='1923570'>these</span> <span m='1923720'>things</span> <span
  m='1923910'>are</span> <span m='1923950'>going</span> <span
  m='1924060'>to</span> <span m='1924100'>be</span> <span
  m='1924190'>integers.</span> </p><p><span m='1926170'>And</span> <span
  m='1926540'>there's</span> <span m='1926680'>no</span> <span
  m='1926800'>problem</span> <span m='1927210'>here.</span> <span
  m='1927310'>We</span> <span m='1927390'>can</span> <span
  m='1927470'>still</span> <span m='1927690'>use</span> <span
  m='1927910'>Newton's</span> <span m='1928230'>method.</span> <span
  m='1935970'>It</span> <span m='1936150'>just</span> <span
  m='1936300'>works</span> <span m='1936540'>on</span> <span
  m='1936660'>integers.</span> <span m='1938500'>And</span> <span
  m='1939580'>let's</span> <span m='1939740'>take</span> <span
  m='1939870'>a</span> <span m='1939910'>look</span> <span m='1940080'>at</span>
  <span m='1940150'>how</span> <span m='1940390'>we</span> <span
  m='1940530'>would</span> <span m='1941240'>apply</span> <span
  m='1942550'>Newton's</span> <span m='1942900'>method</span> <span
  m='1947280'>in</span> <span m='1947430'>standard</span> <span
  m='1947900'>form.</span> </p><p><span m='1955360'>And</span> <span
  m='1955530'>we</span> <span m='1955600'>won't</span> <span
  m='1955800'>to</span> <span m='1955840'>really</span> <span
  m='1956180'>get</span> <span m='1956410'>to</span> <span
  m='1960440'>the</span> <span m='1960570'>part</span> <span
  m='1960870'>where</span> <span m='1962580'>we're</span> <span
  m='1962730'>going</span> <span m='1962840'>to</span> <span
  m='1962900'>go</span> <span m='1963090'>from</span> <span
  m='1963250'>division</span> <span m='1963620'>to</span> <span
  m='1963690'>multiplication</span> <span m='1964260'>today,</span> <span
  m='1964470'>as</span> <span m='1964600'>I</span> <span
  m='1964700'>said,</span> <span m='1965700'>we're</span> <span
  m='1965850'>just</span> <span m='1965990'>going</span> <span
  m='1966090'>to</span> <span m='1966130'>look</span> <span
  m='1966330'>at</span> <span m='1968100'>how</span> <span
  m='1968310'>you</span> <span m='1968420'>can</span> <span
  m='1968520'>multiply</span> <span m='1968950'>two</span> <span
  m='1969090'>numbers.</span> <span m='1970260'>So</span> <span
  m='1970580'>I</span> <span m='1970700'>didn't</span> <span
  m='1970840'>mean</span> <span m='1970940'>to</span> <span
  m='1971010'>say</span> <span m='1971180'>that</span> <span m='1971445'>we're
  going to</span> <span m='1971710'>look</span> <span m='1971870'>at</span>
  <span m='1971940'>Newton's</span> <span m='1972220'>method.</span> <span
  m='1972820'>We're going to</span> <span m='1972960'>look</span> <span
  m='1973070'>at</span> <span m='1973130'>high</span> <span
  m='1973280'>precision</span> <span m='1973710'>multiplication,</span> <span
  m='1974700'>and</span> <span m='1974760'>then,</span> <span
  m='1974850'>eventually,</span> <span m='1975280'>we're</span> <span
  m='1975370'>going</span> <span m='1975460'>to</span> <span
  m='1975500'>use</span> <span m='1975750'>that</span> <span
  m='1977370'>to</span> <span m='1977460'>build</span> <span
  m='1978870'>Newton's</span> <span m='1979570'>method</span> <span
  m='1979890'>which</span> <span m='1980100'>requires</span> <span
  m='1980590'>the</span> <span m='1980680'>division.</span> </p><p><span
  m='1988800'>So</span> <span m='1989390'>I</span> <span m='1989500'>have</span>
  <span m='1989740'>two</span> <span m='1991231'>n-digit</span> <span
  m='1992040'>numbers,</span> <span m='1998390'>and</span> <span
  m='2002810'>the</span> <span m='2002970'>radix</span> <span
  m='2003400'>could</span> <span m='2003600'>be--</span> <span
  m='2004040'>the</span> <span m='2004160'>base</span> <span
  m='2004600'>could</span> <span m='2004750'>be</span> <span
  m='2006500'>2,</span> <span m='2006930'>10.</span> <span
  m='2008620'>Normally,</span> <span m='2009045'>it</span> <span
  m='2009470'>doesn't</span> <span m='2009720'>really</span> <span
  m='2009840'>matter.</span> <span m='2012340'>0</span> <span
  m='2012780'>less</span> <span m='2013050'>than</span> <span
  m='2013250'>x,</span> <span m='2013800'>less</span> <span
  m='2014040'>than</span> <span m='2014190'>y,</span> <span
  m='2017120'>strictly</span> <span m='2017580'>less</span> <span
  m='2017820'>than</span> <span m='2017990'>r</span> <span
  m='2018320'>raised</span> <span m='2018650'>to</span> <span
  m='2019140'>n.</span> <span m='2019790'>That's</span> <span
  m='2020370'>standard</span> <span m='2022070'>for</span> <span
  m='2022410'>the</span> <span m='2022570'>ranges.</span> </p><p><span
  m='2024450'>And</span> <span m='2024870'>what</span> <span
  m='2025000'>I</span> <span m='2025050'>have</span> <span
  m='2025260'>here</span> <span m='2025520'>is--</span> <span
  m='2026310'>the</span> <span m='2026400'>way</span> <span
  m='2026530'>I'm</span> <span m='2026600'>going</span> <span
  m='2026710'>to</span> <span m='2026760'>do</span> <span
  m='2026890'>this</span> <span m='2027180'>is</span> <span
  m='2027770'>use</span> <span m='2027820'>our</span> <span
  m='2027950'>favorite</span> <span m='2028290'>strategy,</span> <span
  m='2029270'>which</span> <span m='2029460'>is</span> <span
  m='2029570'>divide</span> <span m='2029850'>and</span> <span
  m='2029970'>conquer,</span> <span m='2031210'>because</span> <span
  m='2031630'>I</span> <span m='2031760'>have</span> <span m='2031930'>n,</span>
  <span m='2032170'>which</span> <span m='2032330'>is</span> <span
  m='2032450'>large,</span> <span m='2033280'>need</span> <span
  m='2033470'>to</span> <span m='2033530'>break</span> <span
  m='2033780'>things</span> <span m='2034010'>down,</span> <span
  m='2034800'>break</span> <span m='2035055'>it</span> <span
  m='2035310'>into</span> <span m='2036480'>n</span> <span m='2036700'>by</span>
  <span m='2036980'>two-digit</span> <span m='2038910'>multiplications.</span>
  <span m='2040080'>And</span> <span m='2040300'>when,</span> <span
  m='2040460'>finally,</span> <span m='2040890'>I</span> <span
  m='2040950'>break</span> <span m='2041220'>things</span> <span
  m='2041450'>down,</span> <span m='2041790'>I</span> <span
  m='2041820'>get</span> <span m='2042010'>down</span> <span
  m='2042210'>to</span> <span m='2042270'>64</span> <span
  m='2042850'>bits,</span> <span m='2043580'>I</span> <span
  m='2043680'>just</span> <span m='2043900'>run</span> <span
  m='2044140'>one</span> <span m='2044340'>instruction</span> <span
  m='2045550'>on</span> <span m='2046690'>my</span> <span
  m='2046800'>computer</span> <span m='2047420'>to</span> <span
  m='2047490'>multiply</span> <span m='2048590'>the</span> <span
  m='2048670'>64-bit</span> <span m='2049330'>numbers.</span> <span
  m='2050030'>And</span> <span m='2050500'>the</span> <span
  m='2050710'>standard</span> <span m='2051080'>machines,</span> <span
  m='2052130'>you</span> <span m='2052350'>would</span> <span
  m='2052469'>get</span> <span m='2053090'>128</span> <span
  m='2053600'>bits</span> <span m='2053870'>of</span> <span
  m='2054040'>result</span> <span m='2054440'>back</span> <span
  m='2054989'>when</span> <span m='2055090'>you</span> <span
  m='2055150'>multiply</span> <span m='2055520'>64-bit</span> <span
  m='2056090'>numbers.</span> <span m='2057020'>So</span> <span
  m='2057139'>in</span> <span m='2057239'>some</span> <span
  m='2057409'>sense</span> <span m='2057630'>you</span> <span
  m='2057719'>only</span> <span m='2057860'>go</span> <span
  m='2058010'>down--</span> <span m='2058230'>you</span> <span
  m='2058310'>don't</span> <span m='2058449'>go</span> <span
  m='2058550'>down</span> <span m='2058770'>to</span> <span m='2059210'>1</span>
  <span m='2059440'>bit,</span> <span m='2060280'>you</span> <span
  m='2060429'>go</span> <span m='2060530'>down</span> <span
  m='2060750'>to</span> <span m='2060830'>64</span> <span m='2062130'>and</span>
  <span m='2062330'>your</span> <span m='2062440'>machine</span> <span
  m='2062949'>does</span> <span m='2063170'>the</span> <span
  m='2063280'>rest.</span> </p><p><span m='2065100'>So</span> <span
  m='2065739'>what</span> <span m='2065909'>we</span> <span
  m='2066020'>have</span> <span m='2066210'>here</span> <span
  m='2066469'>is</span> <span m='2066590'>you</span> <span
  m='2066710'>set</span> <span m='2067060'>x</span> <span m='2068070'>to</span>
  <span m='2068150'>be</span> <span m='2068310'>x1</span> <span
  m='2069889'>where</span> <span m='2070120'>x1</span> <span
  m='2070520'>is</span> <span m='2070610'>the</span> <span
  m='2070670'>high</span> <span m='2070949'>half,</span> <span
  m='2072409'>r</span> <span m='2072760'>raised</span> <span
  m='2073080'>to</span> <span m='2073199'>n</span> <span m='2073370'>over</span>
  <span m='2073620'>2</span> <span m='2074800'>plus</span> <span
  m='2075010'>x0.</span> <span m='2076420'>So</span> <span m='2076610'>x1</span>
  <span m='2078260'>is</span> <span m='2078550'>the</span> <span
  m='2079060'>more</span> <span m='2079260'>significant</span> <span
  m='2080170'>half</span> <span m='2081480'>and</span> <span
  m='2081790'>x0</span> <span m='2083270'>is</span> <span m='2083449'>the</span>
  <span m='2083530'>low</span> <span m='2083800'>half.</span> <span
  m='2087210'>And</span> <span m='2087330'>the</span> <span
  m='2087409'>same</span> <span m='2087659'>thing</span> <span
  m='2087840'>for</span> <span m='2087989'>y.</span> <span
  m='2090570'>y1,</span> <span m='2091870'>whoops,</span> <span
  m='2092360'>r</span> <span m='2092790'>raised</span> <span
  m='2093080'>to</span> <span m='2093170'>n</span> <span m='2093370'>over</span>
  <span m='2093610'>2</span> <span m='2094770'>plus</span> <span
  m='2095000'>y0.</span> <span m='2098750'>Now</span> <span
  m='2098980'>the</span> <span m='2099090'>ranges</span> <span
  m='2099730'>change.</span> <span m='2101690'>x0</span> <span
  m='2101960'>and</span> <span m='2102290'>x1</span> <span
  m='2103350'>are</span> <span m='2103500'>smaller,</span> <span
  m='2105970'>so</span> <span m='2106180'>that's</span> <span
  m='2106340'>what</span> <span m='2106480'>you</span> <span
  m='2106570'>have</span> <span m='2106800'>for</span> <span
  m='2106940'>x0</span> <span m='2107180'>and</span> <span
  m='2107580'>x1.</span> <span m='2114780'>Same</span> <span
  m='2115030'>thing</span> <span m='2115220'>for</span> <span
  m='2115500'>y0</span> <span m='2116030'>and</span> <span
  m='2116140'>y1.</span> </p><p><span m='2117080'>So</span> <span
  m='2117250'>that's</span> <span m='2117470'>a</span> <span
  m='2117670'>fairly</span> <span m='2118040'>straightforward</span> <span
  m='2120890'>decomposition</span> <span m='2123220'>of</span> <span
  m='2124500'>this</span> <span m='2124680'>multiplication</span> <span
  m='2125300'>operation.</span> <span m='2126470'>And</span> <span
  m='2126980'>again,</span> <span m='2127220'>if</span> <span
  m='2127310'>you</span> <span m='2127680'>do</span> <span
  m='2127840'>things</span> <span m='2128060'>in</span> <span
  m='2128160'>a</span> <span m='2128310'>straightforward</span> <span
  m='2128960'>way</span> <span m='2130700'>you</span> <span
  m='2130930'>will</span> <span m='2132070'>create</span> <span
  m='2132380'>a</span> <span m='2132430'>recursive</span> <span
  m='2133170'>multiply,</span> <span m='2135120'>as</span> <span
  m='2135340'>I'll</span> <span m='2135490'>write</span> <span
  m='2135730'>here.</span> </p><p><span m='2138050'>And</span> <span
  m='2140630'>what</span> <span m='2140780'>you</span> <span
  m='2140880'>do</span> <span m='2141210'>is</span> <span m='2142710'>you</span>
  <span m='2142850'>say</span> <span m='2143110'>let</span> <span
  m='2143650'>z0</span> <span m='2146010'>equal</span> <span
  m='2146650'>x0</span> <span m='2147310'>times</span> <span
  m='2147750'>y0,</span> <span m='2150110'>z</span> <span m='2150430'>two</span>
  <span m='2150770'>equals</span> <span m='2152000'>x2</span> <span
  m='2152510'>times</span> <span m='2152870'>y2,</span> <span
  m='2154910'>and--</span> <span m='2162360'>I</span> <span
  m='2162560'>missed</span> <span m='2162890'>z1,</span> <span
  m='2163260'>but</span> <span m='2163650'>z1</span> <span
  m='2164240'>equals</span> <span m='2165900'>x0,</span> <span
  m='2166470'>y1</span> <span m='2167660'>plus</span> <span
  m='2168700'>x1</span> <span m='2169270'>y0.</span> <span
  m='2172620'>And</span> <span m='2173070'>I</span> <span
  m='2173200'>have,</span> <span m='2173470'>overall,</span> <span
  m='2173970'>z</span> <span m='2174260'>equals</span> <span
  m='2174660'>y</span> <span m='2176450'>equals</span> <span
  m='2177070'>x1</span> <span m='2177800'>y1</span> <span
  m='2179080'>times</span> <span m='2179470'>r</span> <span
  m='2179760'>raised</span> <span m='2180050'>to</span> <span
  m='2180150'>n</span> <span m='2181580'>plus</span> <span m='2182250'>x0</span>
  <span m='2182910'>y1</span> <span m='2184430'>plus</span> <span
  m='2184940'>x1</span> <span m='2185430'>y0</span> <span
  m='2186620'>times</span> <span m='2187600'>r</span> <span
  m='2187860'>raised</span> <span m='2188130'>to</span> <span
  m='2188220'>n</span> <span m='2188370'>over</span> <span m='2188590'>2</span>
  <span m='2189440'>plus</span> <span m='2191260'>x0</span> <span
  m='2191680'>y0</span> <span m='2191840'>zero.</span> <span
  m='2194440'>And</span> <span m='2194750'>this</span> <span
  m='2194940'>part</span> <span m='2195210'>here</span> <span
  m='2197020'>was</span> <span m='2197380'>z0,</span> <span
  m='2199220'>this</span> <span m='2199440'>part</span> <span
  m='2199660'>here</span> <span m='2201290'>was</span> <span
  m='2201540'>z1,</span> <span m='2202770'>and</span> <span
  m='2202950'>this</span> <span m='2203110'>part</span> <span
  m='2203320'>here</span> <span m='2204110'>was</span> <span
  m='2204280'>z2.</span> </p><p><span m='2205810'>And</span> <span
  m='2206000'>if</span> <span m='2206080'>you</span> <span
  m='2206160'>look</span> <span m='2206300'>at,</span> <span
  m='2206420'>it</span> <span m='2206660'>you</span> <span
  m='2206780'>need</span> <span m='2206940'>four</span> <span
  m='2207250'>multiplies,</span> <span m='2210720'>1,</span> <span
  m='2211840'>2,</span> <span m='2212520'>3,</span> <span m='2213310'>4.</span>
  <span m='2214250'>And</span> <span m='2214450'>you</span> <span
  m='2214530'>need</span> <span m='2214690'>four</span> <span
  m='2214970'>multiplies</span> <span m='2215860'>of</span> <span
  m='2216310'>n</span> <span m='2216550'>by</span> <span
  m='2216730'>two--</span> <span m='2222420'>n</span> <span
  m='2222640'>by</span> <span m='2222790'>two-digit</span> <span
  m='2223380'>numbers.</span> <span m='2226980'>And</span> <span
  m='2227150'>by</span> <span m='2227270'>now,</span> <span
  m='2227680'>after</span> <span m='2227940'>you</span> <span
  m='2228180'>have</span> <span m='2229450'>prepared</span> <span
  m='2229820'>for</span> <span m='2230300'>quiz</span> <span
  m='2230550'>two,</span> <span m='2231270'>I</span> <span
  m='2231380'>will</span> <span m='2231510'>just</span> <span
  m='2231680'>say</span> <span m='2236660'>that</span> <span
  m='2237170'>it</span> <span m='2237320'>would</span> <span
  m='2237480'>take</span> <span m='2237780'>theta</span> <span
  m='2238160'>n</span> <span m='2238310'>square</span> <span
  m='2238600'>time</span> <span m='2239975'>because</span> <span
  m='2240430'>you're</span> <span m='2240580'>recursive</span> <span
  m='2241000'>equation</span> <span m='2241550'>is</span> <span
  m='2244720'>tn</span> <span m='2246120'>equals</span> <span
  m='2246840'>4t</span> <span m='2247770'>of</span> <span m='2247960'>n</span>
  <span m='2248130'>over</span> <span m='2248380'>2</span> <span
  m='2250210'>plus</span> <span m='2253510'>the</span> <span
  m='2253830'>linear</span> <span m='2254210'>time</span> <span
  m='2254530'>that</span> <span m='2254660'>you</span> <span
  m='2254760'>take</span> <span m='2255990'>for</span> <span
  m='2257540'>addition.</span> </p><p><span m='2258520'>So</span> <span
  m='2259050'>this</span> <span m='2259330'>is</span> <span
  m='2261210'>tn</span> <span m='2262990'>equals</span> <span
  m='2263410'>4t</span> <span m='2264820'>of</span> <span m='2265040'>n</span>
  <span m='2265190'>over</span> <span m='2265430'>2</span> <span
  m='2266500'>plus</span> <span m='2266870'>theta</span> <span
  m='2267130'>n.</span> <span m='2269370'>And you're</span> <span
  m='2269680'>assuming</span> <span m='2270040'>that the</span> <span
  m='2270270'>additions</span> <span m='2270760'>here</span> <span
  m='2271000'>take</span> <span m='2271220'>linear</span> <span
  m='2271520'>time.</span> <span m='2272930'>So</span> <span
  m='2273050'>that's</span> <span m='2273220'>how</span> <span
  m='2273310'>you</span> <span m='2273520'>get</span> <span
  m='2273690'>your</span> <span m='2273940'>theta n</span> <span
  m='2274090'>square</span> <span m='2274430'>algorithm.</span> <span
  m='2275470'>And</span> <span m='2276820'>we're</span> <span
  m='2276920'>not</span> <span m='2277080'>happy</span> <span
  m='2277370'>with</span> <span m='2277500'>that.</span> <span
  m='2278460'>We'd</span> <span m='2278580'>like</span> <span
  m='2278750'>to</span> <span m='2278840'>do</span> <span
  m='2278940'>better.</span> <span m='2280750'>And</span> <span
  m='2281550'>so</span> <span m='2281900'>how</span> <span m='2282010'>do</span>
  <span m='2282070'>you</span> <span m='2282140'>do</span> <span
  m='2282270'>better?</span> </p><p><span m='2283410'>Well,</span> <span
  m='2284230'>there's</span> <span m='2285220'>many</span> <span
  m='2285640'>ways</span> <span m='2285990'>of</span> <span
  m='2286080'>doing</span> <span m='2286300'>better.</span> <span
  m='2287310'>The</span> <span m='2287500'>simplest</span> <span
  m='2288020'>way</span> <span m='2289380'>off</span> <span
  m='2290100'>fairly,</span> <span m='2291530'>substantially</span> <span
  m='2292860'>lowering</span> <span m='2293330'>the</span> <span
  m='2293510'>complexity</span> <span m='2295930'>is</span> <span
  m='2298010'>due</span> <span m='2298110'>to</span> <span m='2298570'>a</span>
  <span m='2298830'>gentleman</span> <span m='2299390'>by</span> <span
  m='2299590'>the</span> <span m='2299690'>name</span> <span
  m='2299920'>of</span> <span m='2300780'>Karatsuba.</span> <span
  m='2309300'>This</span> <span m='2309330'>is</span> <span
  m='2309410'>one</span> <span m='2309550'>of</span> <span
  m='2309610'>those</span> <span m='2309800'>things</span> <span
  m='2310060'>where</span> <span m='2311310'>if</span> <span
  m='2311410'>you</span> <span m='2311520'>were</span> <span
  m='2311620'>born</span> <span m='2312030'>early</span> <span
  m='2312260'>enough</span> <span m='2312620'>you</span> <span
  m='2312720'>get</span> <span m='2312860'>your</span> <span
  m='2312960'>name</span> <span m='2313250'>on</span> <span
  m='2313350'>an</span> <span m='2313440'>algorithm.</span> </p><p><span
  m='2315870'>And</span> <span m='2316480'>what</span> <span
  m='2316610'>happens</span> <span m='2316890'>here</span> <span
  m='2317160'>is,</span> <span m='2317310'>using</span> <span
  m='2317660'>the</span> <span m='2317730'>z's</span> <span
  m='2318730'>that</span> <span m='2318870'>I</span> <span
  m='2318910'>have</span> <span m='2319120'>out</span> <span
  m='2319310'>there,</span> <span m='2322430'>you</span> <span
  m='2322810'>essentially</span> <span m='2323320'>say,</span> <span
  m='2323720'>look,</span> <span m='2323950'>I</span> <span
  m='2324040'>know</span> <span m='2324220'>z0</span> <span
  m='2324850'>equals</span> <span m='2325270'>x0</span> <span
  m='2325470'>and</span> <span m='2325870'>y0,</span> <span
  m='2326940'>I'm</span> <span m='2327070'>going</span> <span
  m='2327210'>to</span> <span m='2327250'>go</span> <span
  m='2327390'>ahead</span> <span m='2327620'>and</span> <span
  m='2327700'>multiply.</span> <span m='2329210'>z2</span> <span
  m='2329820'>equals</span> <span m='2331430'>x2</span> <span
  m='2332010'>and</span> <span m='2332120'>y2,</span> <span
  m='2333650'>go</span> <span m='2333780'>ahead</span> <span
  m='2333920'>and</span> <span m='2334030'>do</span> <span
  m='2334130'>that.</span> <span m='2334750'>And</span> <span
  m='2334880'>now</span> <span m='2335040'>I'm</span> <span
  m='2335190'>going</span> <span m='2335340'>to</span> <span
  m='2335380'>write</span> <span m='2335630'>z1</span> <span
  m='2337460'>as</span> <span m='2338460'>x0</span> <span
  m='2339140'>plus</span> <span m='2339460'>x1</span> <span
  m='2341240'>times</span> <span m='2342830'>y0</span> <span
  m='2343520'>plus</span> <span m='2343760'>y1</span> <span
  m='2345410'>minus</span> <span m='2346390'>z0</span> <span
  m='2346630'>minus</span> <span m='2347540'>z2.</span> <span m='2348430'>So
  you're</span> <span m='2348620'>actually</span> <span
  m='2348870'>computing</span> <span m='2349290'>z0</span> <span
  m='2349800'>and</span> <span m='2349930'>z2</span> <span
  m='2350390'>first,</span> <span m='2351420'>and</span> <span
  m='2351560'>then</span> <span m='2351710'>using</span> <span
  m='2352120'>them</span> <span m='2352950'>to</span> <span
  m='2353090'>compute</span> <span m='2354030'>z1.</span> </p><p><span
  m='2356470'>So</span> <span m='2357080'>someone</span> <span
  m='2357350'>tell</span> <span m='2357530'>me</span> <span
  m='2357760'>why</span> <span m='2358110'>this</span> <span
  m='2358310'>is</span> <span m='2358450'>interesting?</span> <span
  m='2360570'>And</span> <span m='2360780'>just</span> <span
  m='2360950'>take</span> <span m='2361100'>it</span> <span
  m='2361190'>all</span> <span m='2361350'>the</span> <span
  m='2361420'>way</span> <span m='2361810'>to</span> <span
  m='2362570'>the</span> <span m='2362690'>complexity</span> <span
  m='2363300'>of</span> <span m='2363410'>an</span> <span
  m='2363490'>algorithm.</span> <span m='2365030'>Explain</span> <span
  m='2365490'>to</span> <span m='2365610'>me</span> <span m='2366810'>why</span>
  <span m='2367100'>this</span> <span m='2367260'>is</span> <span
  m='2367380'>interesting</span> <span m='2368250'>and</span> <span
  m='2368430'>why</span> <span m='2368650'>Karatsuba's</span> <span
  m='2369390'>algorithm</span> <span m='2370400'>has--</span> <span
  m='2371460'>I'll</span> <span m='2371620'>give</span> <span
  m='2371750'>it</span> <span m='2371800'>away--</span> <span
  m='2372060'>a</span> <span m='2372200'>lower</span> <span
  m='2372430'>complexity</span> <span m='2372960'>than</span> <span
  m='2373120'>theta</span> <span m='2373340'>n</span> <span
  m='2373530'>square?</span> <span m='2374220'>But</span> <span
  m='2374360'>tell</span> <span m='2374480'>me</span> <span
  m='2374580'>what</span> <span m='2374740'>it</span> <span
  m='2374830'>is.</span> <span m='2377220'>Someone?</span> <span
  m='2377820'>Someone</span> <span m='2378050'>other than</span> <span
  m='2378210'>you.</span> <span m='2382490'>Someone</span> <span
  m='2382540'>way</span> <span m='2382770'>at</span> <span
  m='2382880'>the</span> <span m='2382920'>back.</span> <span
  m='2387460'>Yup.</span> <span m='2387765'>Out</span> <span
  m='2388070'>there.</span> </p><p><span m='2388610'>AUDIENCE: It's</span> <span
  m='2389104'>n</span> <span m='2389598'>to</span> <span m='2389762'>the</span>
  <span m='2389927'>log</span> <span m='2390092'>base 2 of</span> <span
  m='2390586'>3.</span> </p><p><span m='2392070'>PROFESSOR: n</span> <span
  m='2392340'>raised</span> <span m='2392740'>to--</span> </p><p><span
  m='2393215'>AUDIENCE: Log base</span> <span m='2393690'>2--</span>
  </p><p><span m='2393930'>PROFESSOR: --log</span> <span m='2394140'>base</span>
  <span m='2394260'>2  of</span> <span m='2394350'>3.</span> <span
  m='2394570'>That's</span> <span m='2395060'>exactly right.</span> <span
  m='2395550'>And</span> <span m='2395636'>now,</span> <span
  m='2395723'>why</span> <span m='2395810'>did</span> <span
  m='2395920'>you</span> <span m='2395990'>get</span> <span
  m='2396170'>that?</span> <span m='2396450'>Explain</span> <span
  m='2396850'>to</span> <span m='2396910'>me</span> <span m='2397110'>how
  you</span> <span m='2397210'>got</span> <span m='2397400'>there.</span>
  </p><p><span m='2397590'>AUDIENCE: If</span> <span m='2398036'>you're</span>
  <span m='2398482'>using</span> <span m='2398928'>three</span> <span
  m='2399374'>products--</span> </p><p><span m='2400270'>PROFESSOR:
  That's</span> <span m='2400430'>right.</span> <span m='2400670'>So</span>
  <span m='2400860'>first</span> <span m='2401220'>insight</span> <span
  m='2402130'>is</span> <span m='2402390'>that</span> <span
  m='2402750'>we're</span> <span m='2402930'>only</span> <span
  m='2403110'>doing</span> <span m='2403380'>three</span> <span
  m='2403630'>multiplications</span> <span m='2404470'>here.</span> <span
  m='2405230'>Additions</span> <span m='2405760'>are</span> <span
  m='2405870'>easy.</span> <span m='2407780'>And</span> <span
  m='2407830'>we're</span> <span m='2407920'>doing</span> <span
  m='2408430'>three</span> <span m='2408640'>multiplications</span> <span
  m='2409490'>as</span> <span m='2409710'>opposed</span> <span
  m='2410080'>to</span> <span m='2410680'>four.</span> <span
  m='2412300'>So</span> <span m='2412900'>tell</span> <span
  m='2413080'>me</span> <span m='2413180'>how</span> <span
  m='2413370'>that</span> <span m='2413500'>equation</span> <span
  m='2414020'>changed,</span> <span m='2414530'>of</span> <span
  m='2414680'>tn.</span> <span m='2416220'>tn</span> <span
  m='2416410'>equals--</span> </p><p><span m='2417550'>AUDIENCE: 3</span> <span
  m='2418030'>[INAUDIBLE].</span> </p><p><span m='2418510'>PROFESSOR: 3</span>
  <span m='2418840'>times</span> <span m='2419490'>t</span> <span
  m='2419840'>of</span> <span m='2420160'>n</span> <span m='2420360'>over</span>
  <span m='2420590'>2</span> <span m='2421060'>plus</span> <span
  m='2421403'>theta</span> <span m='2421746'>n</span> <span
  m='2423550'>because</span> <span m='2423770'>you're</span> <span
  m='2423850'>doing</span> <span m='2424070'>three</span> <span
  m='2424250'>multiplications</span> <span m='2425040'>rather</span> <span
  m='2425240'>than</span> <span m='2425870'>four.</span> <span
  m='2426600'>Multiplications</span> <span m='2426905'>are</span> <span
  m='2427210'>the</span> <span m='2427700'>complicated</span> <span
  m='2428460'>operation.</span> <span m='2429030'>Divisions</span> <span
  m='2429400'>are</span> <span m='2429490'>even</span> <span
  m='2429670'>more</span> <span m='2429850'>complicated,</span> <span
  m='2430700'>but</span> <span m='2430910'>additions</span> <span
  m='2431330'>are</span> <span m='2431430'>easy,</span> <span
  m='2431820'>and</span> <span m='2432000'>you</span> <span
  m='2432100'>could</span> <span m='2432230'>do</span> <span
  m='2432330'>those</span> <span m='2432590'>in</span> <span
  m='2432690'>linear</span> <span m='2432990'>time</span> <span
  m='2434170'>for</span> <span m='2434400'>n-digit</span> <span
  m='2435470'>numbers.</span> </p><p><span m='2436570'>And</span> <span
  m='2436800'>so,</span> <span m='2437070'>if</span> <span
  m='2437160'>you</span> <span m='2437250'>do</span> <span
  m='2437380'>that</span> <span m='2437950'>and</span> <span
  m='2438060'>then</span> <span m='2438170'>you</span> <span
  m='2438260'>go</span> <span m='2438730'>off</span> <span
  m='2438980'>and</span> <span m='2439120'>you</span> <span
  m='2439220'>say,</span> <span m='2439480'>well,</span> <span
  m='2439670'>that</span> <span m='2439960'>tells</span> <span
  m='2440240'>us</span> <span m='2440450'>that</span> <span
  m='2441180'>tn</span> <span m='2442350'>equals</span> <span
  m='2442890'>theta</span> <span m='2444050'>of</span> <span
  m='2444480'>n</span> <span m='2444770'>raised</span> <span
  m='2445240'>to</span> <span m='2446220'>log</span> <span
  m='2446700'>two</span> <span m='2446840'>of</span> <span
  m='2447510'>three,</span> <span m='2448900'>which</span> <span
  m='2449160'>is,</span> <span m='2449630'>by</span> <span
  m='2449690'>the</span> <span m='2449780'>way,</span> <span
  m='2450010'>theta</span> <span m='2450230'>of</span> <span
  m='2450530'>n</span> <span m='2450760'>raised</span> <span
  m='2451050'>to</span> <span m='2451130'>1.58,</span> <span
  m='2452880'>roughly</span> <span m='2453200'>speaking.</span> <span
  m='2453850'>And</span> <span m='2454180'>I</span> <span m='2454480'>do</span>
  <span m='2454630'>not</span> <span m='2454810'>want</span> <span
  m='2454930'>to</span> <span m='2454990'>compute</span> <span
  m='2455350'>that</span> <span m='2455990'>to</span> <span
  m='2456130'>arbitrary</span> <span m='2456610'>precision,</span> <span
  m='2457220'>though</span> <span m='2457320'>I</span> <span
  m='2457400'>could.</span> <span m='2458660'>But</span> <span
  m='2458790'>that</span> <span m='2458930'>goes</span> <span
  m='2459120'>on</span> <span m='2459280'>and</span> <span
  m='2459390'>on.</span> <span m='2459850'>Why don't</span> <span
  m='2460060'>you</span> <span m='2460160'>grab</span> <span
  m='2460310'>this</span> <span m='2460550'>after</span> <span
  m='2460710'>you're</span> <span m='2461310'>done.</span> <span
  m='2462190'>But</span> <span m='2462360'>that just</span> <span
  m='2462510'>goes</span> <span m='2462690'>on</span> <span
  m='2462860'>and</span> <span m='2462940'>on.</span> <span
  m='2463100'>1.58</span> <span m='2463870'>is</span> <span m='2464790'>a</span>
  <span m='2464850'>rough</span> <span m='2465080'>approximation.</span> <span
  m='2466800'>That's</span> <span m='2467000'>an</span> <span
  m='2467090'>irrational</span> <span m='2467500'>number</span> <span
  m='2467800'>too,</span> <span m='2469460'>assuming</span> <span
  m='2469940'>you</span> <span m='2470100'>think</span> <span
  m='2470290'>that</span> <span m='2470390'>irrational</span> <span
  m='2470810'>numbers</span> <span m='2471160'>exist.</span> <span
  m='2472170'>That's</span> <span m='2472320'>an</span> <span
  m='2472390'>irrational</span> <span m='2472790'>number.</span> </p><p><span
  m='2474500'>So</span> <span m='2474810'>good,</span> <span
  m='2475930'>that's</span> <span m='2476410'>really</span> <span
  m='2476600'>all</span> <span m='2476780'>I</span> <span
  m='2477210'>had.</span> <span m='2478970'>By</span> <span
  m='2479250'>the</span> <span m='2479320'>way,</span> <span
  m='2479400'>it's</span> <span m='2479510'>1.58490625.</span> <span
  m='2483290'>I really</span> <span m='2483530'>should</span> <span
  m='2483680'>have</span> <span m='2483780'>written</span> <span
  m='2483990'>that</span> <span m='2484160'>down.</span> <span
  m='2484860'>1.58--</span> <span m='2486140'>in</span> <span
  m='2486910'>the</span> <span m='2487010'>context</span> <span
  m='2487410'>of</span> <span m='2487500'>this</span> <span
  m='2487650'>lecture</span> <span m='2488710'>I</span> <span
  m='2488810'>think</span> <span m='2488910'>it's</span> <span
  m='2489010'>important</span> <span m='2489820'>that</span> <span
  m='2489940'>we</span> <span m='2490060'>get</span> <span m='2490950'>at</span>
  <span m='2491050'>least</span> <span m='2492290'>a</span> <span
  m='2492380'>few</span> <span m='2492600'>digits</span> <span
  m='2492950'>a</span> <span m='2493010'>precision.</span> </p><p><span
  m='2496740'>Now</span> <span m='2497010'>you</span> <span
  m='2497140'>can</span> <span m='2497240'>imagine</span> <span
  m='2497600'>that</span> <span m='2498330'>you</span> <span
  m='2498490'>could</span> <span m='2498630'>do</span> <span
  m='2499760'>it</span> <span m='2499940'>better</span> <span
  m='2500210'>than</span> <span m='2500350'>this.</span> <span
  m='2500730'>And</span> <span m='2501140'>it</span> <span
  m='2501150'>turns</span> <span m='2501410'>out</span> <span
  m='2501640'>that--</span> <span m='2502620'>we'll</span> <span
  m='2502970'>talk</span> <span m='2503120'>a</span> <span
  m='2503170'>little</span> <span m='2503270'>bit</span> <span
  m='2503390'>about</span> <span m='2503580'>this</span> <span
  m='2503710'>next</span> <span m='2503920'>time--</span> <span
  m='2504800'>But</span> <span m='2505060'>you</span> <span
  m='2505170'>can</span> <span m='2505260'>imagine</span> <span
  m='2505560'>breaking</span> <span m='2505950'>this</span> <span
  m='2506130'>up</span> <span m='2506340'>into</span> <span
  m='2507140'>not</span> <span m='2507460'>n</span> <span
  m='2507630'>over</span> <span m='2507910'>two</span> <span
  m='2508140'>chunks,</span> <span m='2508980'>but</span> <span
  m='2509120'>n</span> <span m='2509300'>over</span> <span
  m='2509450'>three</span> <span m='2509790'>chunks.</span> <span
  m='2510960'>Why</span> <span m='2511100'>don't</span> <span
  m='2511300'>I</span> <span m='2511370'>just</span> <span
  m='2511550'>break</span> <span m='2511800'>up</span> <span
  m='2512030'>x</span> <span m='2512520'>into</span> <span
  m='2514100'>the</span> <span m='2514190'>top</span> <span
  m='2514500'>third,</span> <span m='2514880'>the</span> <span
  m='2514950'>middle</span> <span m='2515220'>third,</span> <span
  m='2515950'>and</span> <span m='2516090'>then</span> <span
  m='2516200'>the</span> <span m='2516280'>bottom</span> <span
  m='2516580'>third,</span> <span m='2517280'>and</span> <span
  m='2517400'>then</span> <span m='2517520'>try</span> <span
  m='2517730'>and</span> <span m='2517840'>see</span> <span
  m='2518080'>if</span> <span m='2518200'>I</span> <span m='2518280'>can</span>
  <span m='2518470'>get</span> <span m='2518880'>away</span> <span
  m='2519710'>with</span> <span m='2519910'>fewer</span> <span
  m='2520260'>than</span> <span m='2520870'>eight</span> <span
  m='2521130'>multiplications?</span> <span m='2522760'>Because</span> <span
  m='2522970'>the</span> <span m='2523050'>original</span> <span
  m='2523420'>thing</span> <span m='2524480'>would</span> <span
  m='2524650'>have</span> <span m='2525310'>taken</span> <span
  m='2525590'>eight,</span> <span m='2525850'>and</span> <span
  m='2525950'>if</span> <span m='2526020'>I</span> <span m='2526120'>can</span>
  <span m='2526240'>do</span> <span m='2526400'>less</span> <span
  m='2526460'>than</span> <span m='2526900'>eight,</span> <span
  m='2527340'>maybe</span> <span m='2527550'>I</span> <span
  m='2527600'>can</span> <span m='2527740'>reduce</span> <span
  m='2528080'>that</span> <span m='2529220'>1.58</span> <span
  m='2529980'>number.</span> <span m='2531030'>So</span> <span
  m='2531470'>that's</span> <span m='2531650'>a</span> <span
  m='2531680'>little</span> <span m='2531780'>bit</span> <span
  m='2531890'>of</span> <span m='2531970'>a</span> <span
  m='2532060'>preview</span> <span m='2532410'>for</span> <span
  m='2532990'>what</span> <span m='2533130'>we'll</span> <span
  m='2533250'>do</span> <span m='2533350'>next</span> <span
  m='2533590'>time.</span> </p><p><span m='2534420'>But</span> <span
  m='2534590'>what I'd</span> <span m='2534610'>like</span> <span
  m='2534790'>to</span> <span m='2534880'>do</span> <span m='2535080'>is</span>
  <span m='2536310'>do</span> <span m='2536530'>a</span> <span
  m='2537080'>demo.</span> <span m='2538480'>And</span> <span
  m='2538710'>I</span> <span m='2538740'>want</span> <span
  m='2538930'>you</span> <span m='2538990'>to</span> <span
  m='2539090'>run</span> <span m='2539300'>that--</span> <span
  m='2540860'>it's</span> <span m='2541190'>out</span> <span
  m='2541910'>there</span> <span m='2542180'>so</span> <span
  m='2542240'>blank</span> <span m='2542570'>that</span> <span
  m='2542680'>out</span> <span m='2543470'>for</span> <span m='2543610'>a</span>
  <span m='2543650'>second.</span> <span m='2545920'>What</span> <span
  m='2546110'>I'd</span> <span m='2546170'>like</span> <span
  m='2546310'>to</span> <span m='2546400'>do</span> <span m='2546610'>is</span>
  <span m='2548810'>really</span> <span m='2549080'>look</span> <span
  m='2549280'>at</span> <span m='2550430'>a</span> <span
  m='2550520'>different</span> <span m='2550820'>problem</span> <span
  m='2551300'>than</span> <span m='2551330'>square</span> <span
  m='2551640'>root</span> <span m='2551710'>of</span> <span
  m='2551830'>2,</span> <span m='2552630'>and</span> <span
  m='2553670'>show</span> <span m='2553870'>you</span> <span
  m='2554910'>a</span> <span m='2554990'>demo</span> <span m='2555330'>of</span>
  <span m='2555510'>code</span> <span m='2555780'>that</span> <span
  m='2556210'>Victor</span> <span m='2556590'>wrote</span> <span
  m='2557610'>that</span> <span m='2557820'>computes</span> <span
  m='2559090'>this</span> <span m='2559310'>particular</span> <span
  m='2559720'>quantity</span> <span m='2562030'>that,</span> <span
  m='2562810'>you</span> <span m='2562950'>would</span> <span
  m='2563040'>argue,</span> <span m='2563360'>is</span> <span
  m='2563480'>irrational,</span> <span m='2565070'>to</span> <span
  m='2566790'>arbitrary</span> <span m='2567250'>digits.</span> <span
  m='2568060'>Though</span> <span m='2568140'>we'll</span> <span
  m='2568240'>probably</span> <span m='2568490'>only</span> <span
  m='2568670'>go</span> <span m='2568770'>up to</span> <span
  m='2568980'>about</span> <span m='2569210'>a</span> <span
  m='2569650'>thousand</span> <span m='2569870'>today.</span> </p><p><span
  m='2570760'>And</span> <span m='2571540'>if</span> <span m='2571630'>we</span>
  <span m='2571730'>just</span> <span m='2571940'>look</span> <span
  m='2572130'>at--</span> <span m='2572290'>root</span> <span
  m='2572760'>2</span> <span m='2572880'>is</span> <span m='2573370'>kind</span>
  <span m='2573480'>of</span> <span m='2573540'>boring,</span> <span
  m='2573880'>right?</span> <span m='2574580'>It's</span> <span
  m='2574730'>been</span> <span m='2574870'>around</span> <span
  m='2575150'>for</span> <span m='2575260'>a</span> <span
  m='2575360'>while.</span> <span m='2576530'>Let's</span> <span
  m='2578030'>go</span> <span m='2578160'>back</span> <span
  m='2578450'>and</span> <span m='2579560'>remember</span> <span
  m='2579990'>high</span> <span m='2580160'>school</span> <span
  m='2580390'>geometry.</span> <span m='2582530'>So</span> <span
  m='2583530'>I</span> <span m='2583610'>think</span> <span
  m='2583770'>your</span> <span m='2584520'>high</span> <span
  m='2584620'>school</span> <span m='2584820'>teachers</span> <span
  m='2585150'>would</span> <span m='2585280'>like</span> <span
  m='2585470'>this</span> <span m='2585600'>lecture.</span> <span
  m='2588240'>Nice</span> <span m='2588470'>little</span> <span
  m='2588670'>review.</span> </p><p><span m='2589520'>So</span> <span
  m='2589960'>what</span> <span m='2590080'>is</span> <span
  m='2590190'>that</span> <span m='2591310'>about?</span> <span
  m='2591610'>That's</span> <span m='2591700'>supposed</span> <span
  m='2591980'>to</span> <span m='2592020'>be</span> <span m='2592120'>a</span>
  <span m='2592180'>circle,</span> <span m='2592960'>I</span> <span
  m='2593040'>think,</span> <span m='2593320'>as</span> <span
  m='2593450'>you've</span> <span m='2593700'>forgotten.</span> <span
  m='2594840'>That's</span> <span m='2595010'>supposed</span> <span
  m='2595260'>to</span> <span m='2595310'>be</span> <span m='2595390'>a</span>
  <span m='2595450'>circle.</span> <span m='2597250'>And</span> <span
  m='2597790'>the</span> <span m='2597890'>circle</span> <span
  m='2598290'>here</span> <span m='2599340'>is</span> <span m='2600160'>a</span>
  <span m='2600220'>really</span> <span m='2600450'>big</span> <span
  m='2600640'>circle.</span> <span m='2602910'>It's</span> <span
  m='2603090'>a</span> <span m='2603180'>trillion</span> <span
  m='2604240'>units</span> <span m='2604640'>long.</span> <span
  m='2607670'>I'm</span> <span m='2607800'>into</span> <span
  m='2608010'>big</span> <span m='2608290'>numbers</span> <span
  m='2608670'>today,</span> <span m='2610530'>big</span> <span
  m='2610770'>numbers.</span> </p><p><span m='2611770'>And</span> <span
  m='2611980'>the</span> <span m='2612100'>center</span> <span
  m='2612460'>of</span> <span m='2612540'>the</span> <span
  m='2612620'>circle</span> <span m='2613770'>is</span> <span
  m='2613940'>c,</span> <span m='2615660'>c</span> <span m='2616090'>for</span>
  <span m='2616240'>center.</span> <span m='2617840'>That</span> <span
  m='2618600'>is</span> <span m='2618820'>what's</span> <span
  m='2619060'>called</span> <span m='2619270'>a</span> <span
  m='2619340'>radius,</span> <span m='2619960'>in</span> <span
  m='2620270'>case</span> <span m='2620450'>you'd</span> <span
  m='2620570'>forgotten.</span> <span m='2623410'>And</span> <span
  m='2623560'>that's</span> <span m='2623960'>b.</span> <span
  m='2624890'>And</span> <span m='2625060'>this</span> <span
  m='2625210'>is</span> <span m='2625320'>also</span> <span m='2625630'>a</span>
  <span m='2625710'>radius,</span> <span m='2627490'>and</span> <span
  m='2627760'>that's</span> <span m='2628430'>a.</span> </p><p><span
  m='2630160'>And</span> <span m='2630500'>what</span> <span
  m='2630610'>I'm</span> <span m='2630690'>going</span> <span
  m='2630820'>to</span> <span m='2630880'>do</span> <span m='2631060'>is</span>
  <span m='2631240'>I'm</span> <span m='2631370'>going--</span> <span
  m='2632065'>I want</span> <span m='2632360'>to make</span> <span
  m='2632660'>a</span> <span m='2632810'>drop</span> <span m='2636080'>a</span>
  <span m='2636230'>little,</span> <span m='2638720'>I</span> <span
  m='2638820'>guess,</span> <span m='2639050'>perpendicular</span> <span
  m='2640510'>down,</span> <span m='2641450'>which</span> <span
  m='2642400'>is</span> <span m='2642580'>one</span> <span
  m='2642830'>unit</span> <span m='2643120'>high.</span> <span
  m='2643910'>So</span> <span m='2644430'>the</span> <span
  m='2644530'>way</span> <span m='2644870'>that</span> <span
  m='2645330'>this</span> <span m='2645590'>is</span> <span
  m='2645680'>structured</span> <span m='2646590'>is</span> <span
  m='2646820'>that</span> <span m='2647140'>this</span> <span
  m='2647470'>is</span> <span m='2647570'>one</span> <span
  m='2647800'>unit</span> <span m='2648050'>high,</span> <span
  m='2648880'>this</span> <span m='2649130'>obviously</span> <span
  m='2649600'>is--</span> <span m='2650560'>someone</span> <span
  m='2650790'>tell me</span> <span m='2651020'>what</span> <span
  m='2651150'>that</span> <span m='2651310'>is,</span> <span
  m='2651840'>CB.</span> </p><p><span m='2653241'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='2654642'>PROFESSOR: Half</span> <span m='2655109'>a</span>
  <span m='2655580'>trillion.</span> <span m='2656630'>That's</span> <span
  m='2656800'>half</span> <span m='2657040'>a</span> <span
  m='2657120'>trillion.</span> <span m='2658510'>And</span> <span
  m='2658650'>obviously,</span> <span m='2659160'>CA</span> <span
  m='2659570'>is</span> <span m='2659720'>half</span> <span m='2659970'>a</span>
  <span m='2660050'>trillion.</span> <span m='2661600'>And</span> <span
  m='2661980'>if</span> <span m='2662110'>I</span> <span m='2662160'>call</span>
  <span m='2662490'>this</span> <span m='2662820'>D,</span> <span
  m='2664400'>somebody</span> <span m='2664800'>who</span> <span
  m='2664900'>remembers</span> <span m='2666890'>high</span> <span
  m='2667050'>school</span> <span m='2667410'>or</span> <span
  m='2667460'>middle</span> <span m='2667690'>school</span> <span
  m='2667920'>geometry</span> <span m='2668950'>give</span> <span
  m='2669140'>me</span> <span m='2669260'>an</span> <span
  m='2669350'>equation</span> <span m='2670390'>for</span> <span
  m='2670650'>AD.</span> <span m='2671130'>And</span> <span
  m='2671390'>that's</span> <span m='2671710'>definitely</span> <span
  m='2672000'>worth</span> <span m='2672170'>a</span> <span
  m='2672250'>cushion.</span> <span m='2674910'>so</span> <span
  m='2675070'>what's</span> <span m='2675250'>an</span> <span
  m='2675320'>equation</span> <span m='2675750'>for</span> <span
  m='2675900'>AD</span> <span m='2676190'>guys?</span> <span
  m='2677940'>Yeah.</span> <span m='2678360'>Go</span> <span
  m='2678685'>ahead.</span> </p><p><span m='2679480'>AUDIENCE: The</span> <span
  m='2679950'>radius,</span> <span m='2680420'>half-trillion</span> <span
  m='2681360'>minus</span> <span m='2682770'>the</span> <span
  m='2683240'>square</span> <span m='2683710'>root</span> <span
  m='2685120'>of--</span> </p><p><span m='2685600'>PROFESSOR: Square</span>
  <span m='2686060'>root of--</span> <span m='2686510'>Yeah?</span> </p><p><span
  m='2687070'>AUDIENCE: Minus</span> <span m='2688032'>the</span> <span
  m='2688513'>square</span> <span m='2688994'>root</span> <span
  m='2689475'>of</span> <span m='2690437'>[INAUDIBLE]</span> <span
  m='2690918'>square</span> <span m='2691399'>minus</span> <span
  m='2691880'>1?</span> </p><p><span m='2692370'>PROFESSOR: Perfect,</span>
  <span m='2692860'>perfect.</span> <span m='2693270'>OK</span> <span
  m='2693490'>good.</span> <span m='2694040'>So</span> <span
  m='2694370'>AD</span> <span m='2694720'>equals</span> <span
  m='2695090'>AC</span> <span m='2695690'>minus</span> <span
  m='2696140'>CD,</span> <span m='2697310'>and</span> <span
  m='2697700'>that</span> <span m='2697870'>is</span> <span
  m='2698000'>going</span> <span m='2698180'>to</span> <span
  m='2698260'>be</span> <span m='2699190'>half</span> <span m='2699560'>a</span>
  <span m='2699640'>trillion--</span> <span m='2701080'>that</span> <span
  m='2701230'>is</span> <span m='2701390'>500</span> <span
  m='2701890'>billion,</span> <span m='2702830'>a</span> <span
  m='2703180'>little</span> <span m='2703380'>bit</span> <span
  m='2703500'>less</span> <span m='2703700'>than</span> <span
  m='2703850'>bailout</span> <span m='2704270'>money,</span> <span
  m='2704560'>but</span> <span m='2704990'>it's</span> <span
  m='2705150'>close--</span> <span m='2707710'>500</span> <span
  m='2708136'>thousand</span> <span m='2709270'>minus</span> <span
  m='2710700'>square</span> <span m='2711390'>root</span> <span
  m='2712700'>of</span> <span m='2712980'>500--</span> <span
  m='2714570'>this,</span> <span m='2715190'>when</span> <span
  m='2715560'>you</span> <span m='2715666'>start</span> <span
  m='2715773'>squaring</span> <span m='2715880'>this,</span> <span
  m='2716230'>of course, is</span> <span m='2716460'>not</span> <span
  m='2716670'>even</span> <span m='2716870'>real,</span> <span
  m='2717820'>real</span> <span m='2718090'>big</span> <span
  m='2718290'>money.</span> <span m='2719730'>But</span> <span
  m='2720510'>500</span> <span m='2720850'>thousand</span> <span
  m='2721190'>squared</span> <span m='2723130'>minus</span> <span
  m='2723560'>1.</span> <span m='2725400'>So</span> <span
  m='2725740'>forget</span> <span m='2725830'>the</span> <span
  m='2725890'>square</span> <span m='2726150'>root</span> <span
  m='2726480'>of</span> <span m='2726580'>two.</span> <span
  m='2728100'>You</span> <span m='2728310'>can</span> <span
  m='2728410'>put</span> <span m='2728530'>the</span> <span
  m='2728590'>screen</span> <span m='2728820'>down.</span> <span
  m='2732110'>So</span> <span m='2732350'>is</span> <span m='2732450'>it</span>
  <span m='2732530'>on,</span> <span m='2732960'>the</span> <span
  m='2733140'>projector?</span> </p><p><span m='2734366'>AUDIENCE: It's</span>
  <span m='2734809'>on,</span> <span m='2735252'>it</span> <span
  m='2735695'>just</span> <span m='2735843'>needs</span> <span
  m='2735991'>a</span> <span m='2736140'>[INAUDIBLE].</span> </p><p><span
  m='2736430'>PROFESSOR: OK.</span> <span m='2736970'>You can</span> <span
  m='2737090'>turn</span> <span m='2737190'>that</span> <span
  m='2737290'>on.</span> </p><p><span m='2738697'>AUDIENCE: Rolling.</span>
  </p><p><span m='2741980'>PROFESSOR: So</span> <span m='2742120'>what</span>
  <span m='2742270'>we're</span> <span m='2742340'>going</span> <span
  m='2742450'>to</span> <span m='2742510'>do</span> <span m='2742690'>is,</span>
  <span m='2742870'>I'm</span> <span m='2743000'>just</span> <span
  m='2743140'>going</span> <span m='2743220'>to</span> <span
  m='2743260'>show</span> <span m='2743460'>you</span> <span
  m='2745370'>the</span> <span m='2745700'>digits</span> <span
  m='2746530'>of</span> <span m='2748430'>this</span> <span
  m='2748950'>crazy</span> <span m='2749270'>quantity</span> <span
  m='2751280'>being</span> <span m='2751820'>computed</span> <span
  m='2753030'>to</span> <span m='2754140'>tens</span> <span
  m='2754520'>of</span> <span m='2754620'>thousands</span> <span
  m='2755350'>of</span> <span m='2755460'>digits.</span> <span
  m='2756430'>And</span> <span m='2757470'>you</span> <span
  m='2757620'>argue</span> <span m='2757920'>that</span> <span
  m='2758110'>this</span> <span m='2758630'>is</span> <span
  m='2759390'>it</span> <span m='2759510'>something</span> <span
  m='2759850'>clearly</span> <span m='2760160'>that</span> <span
  m='2760310'>isn't</span> <span m='2760530'>a</span> <span
  m='2760590'>perfect</span> <span m='2761010'>square.</span> <span
  m='2761930'>You</span> <span m='2762040'>took</span> <span
  m='2762140'>a</span> <span m='2762220'>perfect</span> <span
  m='2762510'>square,</span> <span m='2763140'>subtracted</span> <span
  m='2763630'>1</span> <span m='2763840'>from</span> <span
  m='2764050'>it,</span> <span m='2764630'>and</span> <span
  m='2764870'>so</span> <span m='2764990'>you</span> <span
  m='2765110'>have</span> <span m='2765370'>an</span> <span
  m='2765640'>irrational</span> <span m='2766200'>quantity</span> <span
  m='2766610'>that</span> <span m='2767020'>is</span> <span
  m='2767110'>going</span> <span m='2767220'>to</span> <span
  m='2767260'>go</span> <span m='2767450'>on</span> <span m='2767670'>and</span>
  <span m='2767800'>on.</span> <span m='2768720'>And</span> <span
  m='2769230'>let's</span> <span m='2769400'>see</span> <span
  m='2769550'>what</span> <span m='2769810'>that</span> <span
  m='2769970'>number--</span> <span m='2771540'>what</span> <span
  m='2771690'>it</span> <span m='2771760'>looks</span> <span
  m='2771940'>like.</span> <span m='2773285'>OK?</span> </p><p><span
  m='2783630'>Get</span> <span m='2784030'>out of the</span> <span
  m='2784310'>way.</span> <span m='2788760'>I hope</span> <span m='2789080'>you
  can</span> <span m='2789260'>see from the</span> <span
  m='2789340'>back.</span> </p><p><span m='2792672'>AUDIENCE: Oh man,</span>
  <span m='2793169'>really?</span> </p><p><span m='2798650'>PROFESSOR:
  Looking</span> <span m='2798890'>pretty</span> <span m='2799070'>good</span>
  <span m='2799370'>so</span> <span m='2799420'>far,</span> <span
  m='2800950'>looking</span> <span m='2801210'>pretty</span> <span
  m='2801380'>good.</span> </p><p><span m='2802165'>AUDIENCE: That's
  crazy.</span> </p><p><span m='2807640'>PROFESSOR: Somebody</span> <span
  m='2807930'>see</span> <span m='2808130'>the</span> <span
  m='2808210'>numbers</span> <span m='2808850'>somewhere</span> <span
  m='2809190'>else?</span> <span m='2811710'>Have</span> <span
  m='2811820'>you</span> <span m='2811920'>see</span> <span
  m='2812110'>these</span> <span m='2812310'>numbers</span> <span
  m='2812630'>before?</span> <span m='2813970'>Like</span> <span
  m='2815070'>20</span> <span m='2815300'>minutes</span> <span
  m='2815580'>ago,</span> <span m='2816420'>like</span> <span
  m='2816620'>right</span> <span m='2816800'>in</span> <span
  m='2816900'>front</span> <span m='2817140'>of</span> <span
  m='2817560'>you?</span> <span m='2819240'>OK</span> <span
  m='2821070'>All</span> <span m='2821210'>right.</span> </p><p><span
  m='2821900'>So</span> <span m='2822690'>I</span> <span
  m='2822830'>think</span> <span m='2822920'>that's</span> <span
  m='2823080'>a</span> <span m='2823110'>good</span> <span
  m='2823240'>place</span> <span m='2823440'>to</span> <span
  m='2823530'>stop.</span> <span m='2825990'>If</span> <span
  m='2826150'>you</span> <span m='2826300'>want</span> <span
  m='2826760'>an</span> <span m='2826890'>explanation</span> <span
  m='2827530'>for</span> <span m='2827630'>this</span> <span
  m='2828870'>I</span> <span m='2829020'>think</span> <span
  m='2829290'>you</span> <span m='2829410'>can</span> <span
  m='2829540'>go</span> <span m='2829690'>to</span> <span
  m='2829810'>section</span> <span m='2830310'>tomorrow.</span> <span
  m='2831990'>I'm</span> <span m='2832120'>going to</span> <span
  m='2832320'>use</span> <span m='2832520'>a</span> <span
  m='2833050'>some</span> <span m='2833210'>attendance</span> <span
  m='2833690'>tomorrow.</span> <span m='2834880'>All</span> <span
  m='2834950'>right.</span> <span m='2836140'>Happy</span> <span
  m='2836310'>to</span> <span m='2836380'>answer</span> <span
  m='2836700'>questions</span> <span m='2837120'>about</span> <span
  m='2838420'>the</span> <span m='2838480'>rest</span> <span
  m='2838690'>of</span> <span m='2838750'>the</span> <span
  m='2838820'>lecture,</span> <span m='2840610'>and</span> <span
  m='2841030'>thanks</span> <span m='2841210'>for</span> <span
  m='2841510'>coming.</span> </p>
uid: bf01629c2329ba5b7672f282b59f7c29
type: courses
layout: video
---
