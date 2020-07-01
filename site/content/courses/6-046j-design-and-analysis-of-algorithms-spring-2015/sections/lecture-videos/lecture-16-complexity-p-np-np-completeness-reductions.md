---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine introduces
  NP-completeness.</p> <p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: eHZifpgyH_4
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4917bbc300ec906bf20bb933bf308777
  - id: Video-YouTube-Stream
    media_location: eHZifpgyH_4
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Video-YouTube-Stream
    type: Video
    uid: 1dcf494992b23f25f129fac4f448b569
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Video-iTunes U-MP4
    type: Video
    uid: 99aeecca6cdb8be87a1a1342bd08184a
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec16_300k.mp4'
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Video-Internet Archive-MP4
    type: Video
    uid: 384692b602053debccbee47c9e995acc
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/eHZifpgyH_4/default.jpg'
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6ad7245435e0eaebf86e3ff0d4ad5ba0
  - id: eHZifpgyH_4.srt
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-16-complexity-p-np-np-completeness-reductions/eHZifpgyH_4.srt
    title: 3play caption file
    type: null
    uid: dc85648702c30ebab4df4ab1c5d0a59d
  - id: eHZifpgyH_4.pdf
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-16-complexity-p-np-np-completeness-reductions/eHZifpgyH_4.pdf
    title: 3play pdf file
    type: null
    uid: 9ccf3a4c0821d97d93073e217880f94d
  - id: Caption-3Play YouTube id-SRT_1
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 914edea78ae39e3fd4940b232a062c07
  - id: Transcript-3Play YouTube id-PDF_1
    parent_uid: 66adf7af367162d6bd07836a1700cd03
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fc2b51f7e7fbd080c3a100d6f202e291
inline_embed_id: '13699014lecture16:complexity:p,np,np-completeness,reductions53336196'
order_index: 257
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-16-complexity-p-np-np-completeness-reductions
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-16-complexity-p-np-np-completeness-reductions
title: 'Lecture 16: Complexity: P, NP, NP-completeness, Reductions'
transcript: >-
  <p><span m='40'>The</span> <span m='170'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1320'>provided</span>
  <span m='1780'>under</span> <span m='2029'>a</span> <span
  m='2080'>Creative</span> <span m='2480'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4180'>support</span> <span m='4730'>will</span> <span m='4880'>help</span>
  <span m='5100'>MIT</span> <span m='5550'>OpenCourseWare</span> <span
  m='6340'>continue</span> <span m='6850'>to</span> <span m='6960'>offer</span>
  <span m='7370'>high</span> <span m='7590'>quality</span> <span
  m='8100'>educational</span> <span m='8740'>resources</span> <span
  m='9310'>for</span> <span m='9500'>free.</span> <span m='10690'>To</span>
  <span m='10720'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11900'>view</span> <span m='12360'>additional</span> <span
  m='12800'>materials</span> <span m='13320'>from</span> <span
  m='13510'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14440'>courses,</span> <span m='15510'>visit</span> <span
  m='15810'>MIT</span> <span m='16190'>OpenCourseWare</span> <span
  m='17240'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='26350'>ERIC DEMAINE: All</span> <span m='26500'>right,</span> <span
  m='27980'>today</span> <span m='29070'>we</span> <span m='29290'>do</span>
  <span m='30340'>NP</span> <span m='30690'>completeness,</span> <span
  m='32340'>an</span> <span m='32470'>entire</span> <span m='32940'>field</span>
  <span m='33370'>in</span> <span m='33490'>one</span> <span
  m='33780'>lecture.</span> <span m='35420'>Should</span> <span
  m='35640'>be</span> <span m='35740'>fun.</span> <span m='36010'>I
  actually</span> <span m='36400'>taught</span> <span m='36760'>an</span> <span
  m='36890'>entire</span> <span m='37310'>class</span> <span
  m='37730'>about</span> <span m='38030'>this</span> <span
  m='38190'>topic</span> <span m='38590'>last</span> <span
  m='38890'>semester,</span> <span m='39850'>but</span> <span
  m='40020'>now</span> <span m='40180'>we're</span> <span m='40260'>going</span>
  <span m='40380'>to</span> <span m='40460'>do</span> <span m='40640'>it</span>
  <span m='40750'>in</span> <span m='40880'>80</span> <span
  m='41090'>minutes.</span> <span m='42620'>And</span> <span
  m='42860'>we're</span> <span m='42950'>going</span> <span m='43110'>to</span>
  <span m='43400'>look</span> <span m='43670'>at</span> <span
  m='43760'>lots</span> <span m='44090'>of</span> <span
  m='44180'>different</span> <span m='44490'>problems,</span> <span
  m='45610'>from</span> <span m='45810'>Super</span> <span
  m='46110'>Mario</span> <span m='46430'>Brothers</span> <span
  m='46810'>to</span> <span m='46910'>jigsaw</span> <span
  m='47310'>puzzles,</span> <span m='48440'>and</span> <span
  m='48840'>show</span> <span m='49070'>that</span> <span
  m='49220'>they're</span> <span m='49430'>NP</span> <span
  m='49710'>-complete.</span> </p><p><span m='51000'>This</span> <span
  m='51130'>is</span> <span m='51250'>a</span> <span m='51300'>fun</span> <span
  m='51560'>area.</span> <span m='51930'>As</span> <span m='52220'>Srini</span>
  <span m='52440'>mentioned</span> <span m='52770'>last</span> <span
  m='53010'>class,</span> <span m='53330'>it's</span> <span m='53470'>all</span>
  <span m='53660'>about</span> <span m='53920'>reductions.</span> <span
  m='54550'>It's</span> <span m='54680'>all</span> <span m='54850'>about</span>
  <span m='55100'>converting</span> <span m='55550'>one</span> <span
  m='55730'>problem</span> <span m='56040'>into</span> <span
  m='56270'>another,</span> <span m='57010'>which</span> <span
  m='57230'>is</span> <span m='57360'>a</span> <span m='57410'>fun</span> <span
  m='58100'>kind</span> <span m='58320'>of</span> <span m='58450'>puzzle</span>
  <span m='58870'>in</span> <span m='58950'>itself.</span> <span
  m='59380'>It's</span> <span m='59540'>an</span> <span
  m='59640'>algorithmic</span> <span m='60190'>challenge.</span> <span
  m='61170'>And</span> <span m='61780'>we're</span> <span m='61930'>going</span>
  <span m='62060'>to</span> <span m='62120'>do</span> <span m='62220'>it</span>
  <span m='62300'>a</span> <span m='62350'>lot.</span> </p><p><span
  m='63410'>But</span> <span m='64010'>first</span> <span m='64650'>I'm</span>
  <span m='64830'>going</span> <span m='64970'>to</span> <span
  m='65319'>remind</span> <span m='65820'>you</span> <span m='65920'>of</span>
  <span m='66000'>some</span> <span m='66160'>of</span> <span
  m='66220'>the</span> <span m='66280'>things</span> <span m='66520'>you</span>
  <span m='66600'>learned</span> <span m='66800'>from</span> <span
  m='66970'>006,</span> <span m='67810'>and</span> <span m='68490'>tell</span>
  <span m='68700'>you</span> <span m='68870'>what</span> <span
  m='69120'>we</span> <span m='69230'>need</span> <span m='69400'>to</span>
  <span m='69520'>do</span> <span m='69730'>in</span> <span
  m='69810'>order</span> <span m='70010'>to</span> <span m='70150'>prove</span>
  <span m='71580'>all</span> <span m='71810'>of</span> <span
  m='71890'>these</span> <span m='72090'>relations,</span> <span
  m='73570'>what</span> <span m='73750'>exactly</span> <span m='74200'>we</span>
  <span m='74300'>need</span> <span m='74430'>to</span> <span
  m='74580'>show</span> <span m='74830'>for</span> <span m='74970'>each</span>
  <span m='75180'>of</span> <span m='75260'>those</span> <span
  m='75540'>arrows,</span> <span m='75990'>and</span> <span m='76190'>why</span>
  <span m='76990'>it's</span> <span m='77180'>interesting.</span> </p><p><span
  m='78750'>So</span> <span m='81100'>this</span> <span m='81290'>is</span>
  <span m='81370'>generally</span> <span m='81740'>around</span> <span
  m='81950'>the</span> <span m='82020'>P</span> <span m='82250'>versus</span>
  <span m='82580'>NP</span> <span m='82900'>problem.</span> <span
  m='83490'>So</span> <span m='83930'>remember,</span> <span m='84340'>P</span>
  <span m='85260'>is</span> <span m='85370'>all</span> <span
  m='85680'>the</span> <span m='85770'>problems</span> <span m='86190'>we</span>
  <span m='86310'>know</span> <span m='86490'>how</span> <span
  m='86630'>to</span> <span m='86740'>solve</span> <span m='87120'>in</span>
  <span m='87240'>polynomial</span> <span m='87730'>time.</span> <span
  m='88300'>Well</span> <span m='88490'>not</span> <span m='88650'>just</span>
  <span m='88800'>the</span> <span m='88860'>ones</span> <span
  m='89030'>we</span> <span m='89130'>know</span> <span m='89280'>how</span>
  <span m='89380'>to</span> <span m='89480'>solve,</span> <span
  m='89790'>but</span> <span m='89940'>also</span> <span m='90140'>the
  ones</span> <span m='90380'>that can</span> <span m='90690'>be</span> <span
  m='90790'>solved,</span> <span m='96290'>which</span> <span
  m='96430'>is</span> <span m='96590'>pretty</span> <span
  m='96810'>much--</span> <span m='100450'>which</span> <span
  m='100710'>is</span> <span m='100840'>the</span> <span m='100930'>topic</span>
  <span m='101550'>of</span> <span m='101800'>6.006,</span> <span
  m='102680'>and</span> <span m='102860'>6.046</span> <span m='104210'>up</span>
  <span m='104490'>till</span> <span m='104720'>now.</span> <span
  m='105250'>But</span> <span m='105670'>for</span> <span m='105830'>now,</span>
  <span m='106210'>in</span> <span m='106360'>the</span> <span
  m='106440'>next</span> <span m='106660'>few</span> <span
  m='106840'>lectures,</span> <span m='107210'>we'll</span> <span
  m='107340'>be</span> <span m='107440'>talking</span> <span
  m='107730'>about</span> <span m='107910'>problems</span> <span
  m='108290'>that</span> <span m='108450'>are</span> <span
  m='108530'>probably</span> <span m='109150'>not</span> <span
  m='109480'>polynomially</span> <span m='110040'>solvable,</span> <span
  m='111140'>and</span> <span m='111280'>what</span> <span m='111420'>to</span>
  <span m='111530'>do</span> <span m='111680'>about</span> <span
  m='112000'>them.</span> </p><p><span m='112940'>Polynomial,</span> <span
  m='113880'>as</span> <span m='114240'>you now,</span> <span
  m='114600'>is</span> <span m='114750'>like</span> <span m='114990'>n</span>
  <span m='115270'>to</span> <span m='115410'>the</span> <span
  m='116170'>some</span> <span m='116450'>constant.</span> <span
  m='117590'>Polynomial</span> <span m='118050'>good</span> <span
  m='118360'>exponential</span> <span m='118880'>bad.</span> <span
  m='123490'>What</span> <span m='123730'>is</span> <span m='123910'>n?</span>
  <span m='124300'>I guess</span> <span m='124600'>n</span> <span
  m='124830'>is</span> <span m='124960'>the</span> <span m='125040'>size</span>
  <span m='125300'>of</span> <span m='125360'>the</span> <span
  m='125420'>problem,</span> <span m='128410'>which</span> <span
  m='128630'>we'll</span> <span m='128740'>have</span> <span
  m='128870'>to</span> <span m='128960'>be</span> <span m='129050'>a</span>
  <span m='129110'>little</span> <span m='129289'>bit</span> <span
  m='129430'>careful</span> <span m='129740'>about</span> <span
  m='130000'>today.</span> <span m='131150'>And</span> <span
  m='131370'>then</span> <span m='132410'>NP</span> <span m='135210'>is</span>
  <span m='135430'>not</span> <span m='136060'>problem</span> <span
  m='136390'>solvable</span> <span m='137240'>not</span> <span
  m='137560'>in</span> <span m='137660'>polynomial</span> <span
  m='138110'>time,</span> <span m='138380'>but</span> <span
  m='138500'>it's</span> <span m='138650'>problem</span> <span
  m='138920'>solvable</span> <span m='139480'>in</span> <span
  m='139650'>nondeterministic</span> <span m='140910'>polynomial</span> <span
  m='141450'>time.</span> </p><p><span m='144720'>And</span> <span
  m='145520'>in</span> <span m='145680'>this</span> <span m='145870'>case</span>
  <span m='146130'>we</span> <span m='146280'>need</span> <span
  m='146480'>to</span> <span m='146600'>focus</span> <span m='147060'>on</span>
  <span m='147200'>a</span> <span m='147240'>particular</span> <span
  m='147770'>type</span> <span m='148070'>of</span> <span
  m='148160'>problem,</span> <span m='148700'>which</span> <span
  m='148790'>is</span> <span m='148910'>decision</span> <span
  m='149330'>problems.</span> <span m='152010'>Decision</span> <span
  m='152660'>just</span> <span m='152900'>means</span> <span
  m='153250'>that</span> <span m='153490'>the</span> <span
  m='153640'>answer</span> <span m='154240'>is</span> <span
  m='154440'>either</span> <span m='154750'>yes</span> <span
  m='155060'>or</span> <span m='155160'>no.</span> <span m='155520'>So</span>
  <span m='155780'>it's a</span> <span m='155830'>single</span> <span
  m='156220'>bit</span> <span m='157190'>answer.</span> <span
  m='163130'>We</span> <span m='163220'>will</span> <span m='163340'>see</span>
  <span m='163550'>why</span> <span m='164240'>we</span> <span
  m='164370'>need</span> <span m='164530'>to</span> <span
  m='164650'>restrict</span> <span m='165070'>to</span> <span
  m='165150'>that</span> <span m='165380'>kind</span> <span m='165540'>of</span>
  <span m='165610'>problem</span> <span m='165900'>in</span> <span
  m='165980'>a</span> <span m='166020'>moment.</span> </p><p><span
  m='191030'>So</span> <span m='191510'>this</span> <span m='191990'>is</span>
  <span m='192470'>problems</span> <span m='192790'>you</span> <span
  m='192890'>can</span> <span m='193030'>solve</span> <span m='193290'>in</span>
  <span m='193380'>polynomial</span> <span m='193910'>time.</span> <span
  m='194370'>Same</span> <span m='194700'>notion</span> <span
  m='194990'>of</span> <span m='195070'>polynomials,</span> <span
  m='195780'>same</span> <span m='195860'>notion</span> <span
  m='196200'>of</span> <span m='196300'>n,</span> <span m='196960'>but</span>
  <span m='197160'>in</span> <span m='197300'>a</span> <span
  m='197350'>totally</span> <span m='197850'>unrealistic</span> <span
  m='198580'>model</span> <span m='198860'>of</span> <span
  m='198950'>computation.</span> <span m='199640'>Which</span> <span
  m='199870'>is</span> <span m='200020'>a</span> <span
  m='200060'>nondeterministic</span> <span m='201070'>model.</span> <span
  m='202080'>In</span> <span m='202260'>a</span> <span
  m='202300'>nondeterministic</span> <span m='203140'>model,</span> <span
  m='203850'>what</span> <span m='204060'>you</span> <span m='204160'>can</span>
  <span m='204350'>do</span> <span m='205160'>is</span> <span
  m='206570'>say</span> <span m='207910'>instead</span> <span
  m='208320'>of</span> <span m='208660'>computing</span> <span
  m='209150'>something</span> <span m='209690'>from</span> <span
  m='209870'>something</span> <span m='210200'>you</span> <span m='210610'>know,
  you</span> <span m='211020'>could</span> <span m='211180'>make</span> <span
  m='211380'>a</span> <span m='211430'>guess.</span> <span m='213010'>So</span>
  <span m='213340'>you</span> <span m='213520'>can</span> <span
  m='216310'>guess</span> <span m='220040'>one</span> <span
  m='221621'>out</span> <span m='222020'>of</span> <span
  m='223650'>polynomially</span> <span m='224420'>many</span> <span
  m='224730'>options</span> <span m='238840'>in</span> <span
  m='239010'>constant</span> <span m='239480'>time.</span> </p><p><span
  m='242090'>So</span> <span m='242250'>normally</span> <span
  m='242640'>a</span> <span m='242680'>constant</span> <span
  m='243030'>time</span> <span m='243220'>operation,</span> <span
  m='243505'>in</span> <span m='243790'>regular</span> <span
  m='244260'>models,</span> <span m='244680'>like</span> <span
  m='244860'>you</span> <span m='244980'>add</span> <span m='245200'>two</span>
  <span m='245350'>numbers,</span> <span m='246030'>or</span> <span
  m='246110'>you</span> <span m='246190'>do</span> <span m='246360'>an</span>
  <span m='246450'>if,</span> <span m='247110'>that</span> <span
  m='247250'>sort</span> <span m='247410'>of</span> <span
  m='247470'>thing.</span> <span m='248230'>Here</span> <span
  m='248940'>we</span> <span m='249180'>can</span> <span m='249620'>make</span>
  <span m='249830'>a</span> <span m='249880'>guess.</span> <span
  m='250870'>I</span> <span m='251530'>give</span> <span m='251900'>the</span>
  <span m='252470'>computer</span> <span m='252980'>polynomially</span> <span
  m='253570'>many</span> <span m='253810'>options</span> <span
  m='254190'>I'm</span> <span m='254290'>interested</span> <span
  m='254660'>in.</span> <span m='255290'>Computer's</span> <span
  m='255690'>going</span> <span m='255810'>to</span> <span
  m='255880'>give</span> <span m='256110'>me</span> <span m='256269'>one</span>
  <span m='256510'>of</span> <span m='256620'>them.</span> <span
  m='257050'>It's</span> <span m='257160'>going</span> <span
  m='257300'>to</span> <span m='257910'>give</span> <span m='258120'>me</span>
  <span m='258740'>a</span> <span m='258870'>good</span> <span
  m='259160'>guess.</span> <span m='260570'>Guess</span> <span
  m='260820'>is</span> <span m='260920'>guaranteed</span> <span
  m='261420'>to</span> <span m='261500'>be</span> <span m='261630'>good.</span>
  <span m='261959'>And</span> <span m='262140'>good</span> <span
  m='262440'>means</span> <span m='262940'>here</span> <span
  m='263350'>that</span> <span m='263560'>I</span> <span m='263660'>want</span>
  <span m='263990'>to</span> <span m='264110'>get</span> <span
  m='264290'>to</span> <span m='264450'>a</span> <span m='264560'>yes</span>
  <span m='264870'>answer</span> <span m='265580'>if</span> <span
  m='265780'>I</span> <span m='265900'>can.</span> <span m='267110'>So</span>
  <span m='268340'>the</span> <span m='268430'>formal</span> <span
  m='268780'>statement</span> <span m='269330'>is,</span> <span
  m='270570'>if</span> <span m='270920'>any</span> <span m='271230'>guess</span>
  <span m='275630'>would</span> <span m='275910'>lead</span> <span
  m='276490'>to</span> <span m='278130'>a</span> <span m='278280'>yes</span>
  <span m='278550'>answer,</span> <span m='281900'>then</span> <span
  m='285490'>we</span> <span m='285970'>get</span> <span m='286220'>such</span>
  <span m='286480'>a</span> <span m='286530'>guess.</span> <span
  m='291096'>OK,</span> <span m='291590'>this</span> <span m='291860'>is</span>
  <span m='291970'>weird.</span> <span m='292580'>And</span> <span
  m='292890'>it's</span> <span m='293010'>asymmetric.</span> <span
  m='293610'>It's</span> <span m='293740'>biased</span> <span
  m='294170'>towards</span> <span m='294470'>yes.</span> <span
  m='295060'>And</span> <span m='295190'>this</span> <span m='295370'>is</span>
  <span m='295470'>why</span> <span m='296200'>we</span> <span
  m='296340'>can</span> <span m='296530'>only</span> <span
  m='296770'>think</span> <span m='296970'>about</span> <span
  m='297200'>decision</span> <span m='297540'>problems,</span> <span
  m='298010'>yes</span> <span m='298290'>or</span> <span m='298360'>no.</span>
  <span m='299090'>You</span> <span m='299200'>could</span> <span
  m='299340'>bias</span> <span m='299620'>towards</span> <span
  m='299940'>no.</span> <span m='300360'>You get</span> <span
  m='300540'>something</span> <span m='300820'>else</span> <span
  m='301030'>called</span> <span m='301500'>coNP.</span> <span
  m='302060'>But</span> <span m='302250'>we'll</span> <span
  m='302390'>focus</span> <span m='302750'>here</span> <span
  m='302950'>just</span> <span m='303130'>on</span> <span m='303270'>NP.</span>
  </p><p><span m='304560'>So</span> <span m='304740'>the</span> <span
  m='304820'>idea</span> <span m='305080'>is</span> <span m='305590'>I'd</span>
  <span m='306060'>really</span> <span m='306440'>like</span> <span
  m='306710'>to</span> <span m='306800'>find</span> <span m='307960'>a</span>
  <span m='308100'>guess</span> <span m='308570'>that</span> <span
  m='308820'>leads</span> <span m='309130'>to</span> <span m='309270'>a</span>
  <span m='309320'>yes</span> <span m='309530'>answer.</span> <span
  m='309980'>And</span> <span m='310080'>the</span> <span
  m='310140'>machine</span> <span m='310530'>magically</span> <span
  m='311040'>gives</span> <span m='311280'>me</span> <span m='311420'>one</span>
  <span m='311650'>if</span> <span m='311800'>there</span> <span
  m='311920'>is</span> <span m='312080'>one.</span> <span
  m='312670'>Which</span> <span m='312880'>means</span> <span
  m='313090'>if</span> <span m='313240'>I</span> <span m='313350'>end</span>
  <span m='313500'>up</span> <span m='314020'>saying</span> <span
  m='314380'>no,</span> <span m='314990'>that</span> <span
  m='315170'>means</span> <span m='315330'>there</span> <span
  m='315420'>was</span> <span m='315710'>absolutely</span> <span
  m='316370'>no</span> <span m='316540'>path</span> <span m='316940'>that</span>
  <span m='317060'>would</span> <span m='317180'>lead</span> <span
  m='317350'>to</span> <span m='317510'>a</span> <span m='317560'>yes.</span>
  <span m='318790'>So</span> <span m='319400'>when</span> <span
  m='319790'>you</span> <span m='319850'>get</span> <span m='319990'>a</span>
  <span m='320050'>no,</span> <span m='320230'>you</span> <span
  m='320310'>get</span> <span m='320430'>a</span> <span m='320480'>lot</span>
  <span m='320710'>of</span> <span m='320790'>information.</span> <span
  m='321300'>When</span> <span m='321410'>you</span> <span m='321520'>get</span>
  <span m='321800'>a</span> <span m='321900'>yes,</span> <span
  m='322300'>you</span> <span m='322370'>get</span> <span m='322550'>some</span>
  <span m='322780'>information.</span> <span m='323250'>But</span> <span
  m='323500'>hey,</span> <span m='323590'>you</span> <span
  m='323670'>were</span> <span m='323780'>lucky.</span> <span
  m='324170'>Hard</span> <span m='325120'>to</span> <span
  m='325180'>complain.</span> <span m='325700'>So</span> <span
  m='326240'>in</span> <span m='326550'>006,</span> <span m='326930'>I</span>
  <span m='327310'>often</span> <span m='327580'>call</span> <span
  m='327730'>this</span> <span m='327930'>the</span> <span
  m='328390'>lucky</span> <span m='328830'>model</span> <span
  m='329170'>of</span> <span m='329260'>computation.</span> <span
  m='330340'>That's</span> <span m='330580'>the</span> <span
  m='330670'>informal</span> <span m='331580'>version.</span> <span
  m='331960'>But</span> <span m='332200'>nondeterminism</span> <span
  m='333070'>is</span> <span m='333190'>what's</span> <span
  m='333410'>really</span> <span m='333610'>going</span> <span
  m='333880'>on</span> <span m='334030'>here.</span> </p><p><span
  m='335740'>So</span> <span m='338310'>maybe</span> <span
  m='338540'>it's</span> <span m='338700'>useful</span> <span
  m='339090'>to</span> <span m='340810'>get</span> <span m='341000'>an</span>
  <span m='341090'>example.</span> <span m='341820'>So</span> <span
  m='342780'>here's</span> <span m='343000'>a</span> <span
  m='343060'>problem</span> <span m='343550'>we'll--</span> <span
  m='344640'>this</span> <span m='344770'>is</span> <span m='346350'>sort</span>
  <span m='346560'>of the</span> <span m='346660'>granddaddy</span> <span
  m='347240'>of</span> <span m='347350'>all</span> <span
  m='347700'>NP-complete</span> <span m='348560'>problems.</span> <span
  m='349080'>We'll</span> <span m='349220'>get</span> <span m='349390'>to</span>
  <span m='349490'>completeness</span> <span m='349970'>in</span> <span
  m='350050'>a</span> <span m='350090'>moment.</span> <span
  m='351560'>3SAT--</span> <span m='360380'>SAT</span> <span
  m='360580'>stands</span> <span m='361140'>for</span> <span
  m='361390'>satisfiability.</span> <span m='370030'>So</span> <span
  m='370420'>in</span> <span m='370550'>3SAT,</span> <span m='371120'>the</span>
  <span m='371310'>input</span> <span m='371680'>to</span> <span
  m='371770'>the</span> <span m='371860'>problem</span> <span
  m='372590'>looks</span> <span m='373530'>something</span> <span
  m='373900'>like</span> <span m='374120'>this.</span> <span
  m='374470'>I'm</span> <span m='374490'>just</span> <span
  m='374670'>going</span> <span m='374800'>to</span> <span
  m='375360'>give</span> <span m='375490'>an</span> <span
  m='375560'>example.</span> <span m='386930'>And</span> <span
  m='387290'>in</span> <span m='387350'>case</span> <span
  m='387660'>you've</span> <span m='387760'>forgotten</span> <span
  m='388230'>your</span> <span m='389270'>weird</span> <span
  m='389560'>logic</span> <span m='389920'>notation,</span> <span
  m='390870'>this</span> <span m='391130'>is an</span> <span
  m='391370'>and.</span> <span m='393520'>These</span> <span
  m='393830'>are</span> <span m='394000'>ORs.</span> <span m='396580'>And</span>
  <span m='396940'>I'm</span> <span m='397050'>using</span> <span
  m='397480'>this</span> <span m='398280'>for</span> <span
  m='398720'>negation,</span> <span m='400270'>not.</span> </p><p><span
  m='402680'>So</span> <span m='403460'>in</span> <span m='403550'>other</span>
  <span m='403690'>words,</span> <span m='404200'>I'm</span> <span
  m='404380'>given</span> <span m='404610'>a</span> <span
  m='404650'>formula</span> <span m='405140'>which</span> <span
  m='405370'>is</span> <span m='405520'>and</span> <span m='405720'>of</span>
  <span m='406980'>ORs.</span> <span m='408050'>And</span> <span
  m='408160'>each</span> <span m='408590'>or</span> <span
  m='409220'>clause</span> <span m='410380'>only</span> <span
  m='410650'>has</span> <span m='410920'>three</span> <span
  m='411250'>things</span> <span m='411660'>in</span> <span
  m='411760'>it.</span> <span m='412440'>These</span> <span
  m='412640'>things</span> <span m='412930'>are</span> <span
  m='413010'>called</span> <span m='413340'>literals.</span> <span
  m='420300'>And</span> <span m='421010'>a</span> <span
  m='421120'>literal</span> <span m='421570'>is</span> <span
  m='421760'>either</span> <span m='422300'>a</span> <span
  m='422380'>variable</span> <span m='422960'>x</span> <span
  m='423220'>sub</span> <span m='423300'>i,</span> <span m='423990'>or</span>
  <span m='424320'>it's</span> <span m='424530'>the</span> <span
  m='424630'>negation</span> <span m='425110'>of</span> <span
  m='425200'>a</span> <span m='425260'>variable,</span> <span
  m='425680'>not</span> <span m='426070'>x</span> <span m='426320'>sub</span>
  <span m='426410'>i.</span> </p><p><span m='428020'>So</span> <span
  m='428310'>this</span> <span m='428530'>is</span> <span m='428640'>a</span>
  <span m='428690'>typical</span> <span m='429050'>example.</span> <span
  m='429500'>You</span> <span m='429600'>could</span> <span
  m='429780'>have</span> <span m='430490'>no</span> <span
  m='430670'>negations.</span> <span m='431380'>You</span> <span
  m='431470'>could</span> <span m='431740'>here</span> <span
  m='431990'>have</span> <span m='432170'>one</span> <span
  m='432400'>negation,</span> <span m='432470'>two</span> <span
  m='432990'>negations,</span> <span m='433510'>any</span> <span
  m='433670'>number</span> <span m='433870'>of</span> <span
  m='433950'>negations</span> <span m='434440'>per</span> <span
  m='434630'>clause.</span> <span m='435950'>These</span> <span
  m='437280'>groups</span> <span m='437650'>of</span> <span
  m='437750'>three--</span> <span m='438520'>these</span> <span
  m='438830'>or</span> <span m='439250'>of</span> <span m='439340'>three</span>
  <span m='439580'>things,</span> <span m='440070'>three</span> <span
  m='440270'>literals,</span> <span m='440740'>are</span> <span
  m='440860'>called</span> <span m='441080'>clauses.</span> <span
  m='443900'>And</span> <span m='445330'>they're</span> <span
  m='445500'>all</span> <span m='445790'>ANDed</span> <span
  m='446070'>together.</span> <span m='446960'>And</span> <span
  m='447140'>my</span> <span m='447300'>goal</span> <span m='448260'>is,</span>
  <span m='448650'>this</span> <span m='448870'>should</span> <span
  m='449050'>be</span> <span m='449190'>a</span> <span
  m='449240'>decision</span> <span m='449680'>question,</span> <span
  m='450100'>so</span> <span m='450260'>I</span> <span m='450350'>have</span>
  <span m='450510'>a</span> <span m='450590'>yes</span> <span
  m='450820'>or</span> <span m='450870'>no</span> <span
  m='451020'>question.</span> <span m='451960'>And</span> <span
  m='452060'>that</span> <span m='452070'>question</span> <span
  m='452420'>is,</span> <span m='453870'>can</span> <span m='454170'>you</span>
  <span m='454320'>set</span> <span m='454640'>the</span> <span
  m='454710'>variables--</span> <span m='464030'>So they're</span> <span
  m='464190'>x1</span> <span m='467600'>to</span> <span m='470060'>true</span>
  <span m='470410'>or</span> <span m='470510'>false?</span> <span
  m='472010'>So</span> <span m='472170'>each</span> <span
  m='472380'>variable</span> <span m='472780'>I</span> <span
  m='472840'>get</span> <span m='472990'>to</span> <span
  m='473070'>choose</span> <span m='473400'>a</span> <span
  m='473470'>true</span> <span m='473770'>or</span> <span
  m='473910'>false</span> <span m='474300'>designation</span> <span
  m='476020'>such</span> <span m='476400'>that</span> <span
  m='476620'>the</span> <span m='476690'>formula</span> <span
  m='477140'>comes</span> <span m='477400'>out</span> <span
  m='477560'>true.</span> </p><p><span m='484870'>I</span> <span
  m='485010'>use</span> <span m='485220'>T</span> <span m='485440'>and</span>
  <span m='485550'>F</span> <span m='485760'>for</span> <span
  m='485930'>true</span> <span m='486110'>and</span> <span
  m='486210'>false.</span> <span m='487390'>So</span> <span m='487480'>I</span>
  <span m='487540'>want</span> <span m='487770'>to</span> <span
  m='487840'>set</span> <span m='488430'>these</span> <span
  m='488650'>variables</span> <span m='489230'>such</span> <span
  m='489650'>that</span> <span m='490270'>every</span> <span
  m='490690'>clause</span> <span m='491170'>comes</span> <span
  m='491440'>out</span> <span m='491590'>true,</span> <span
  m='491850'>because</span> <span m='492060'>they're</span> <span
  m='492230'>ANDed</span> <span m='492550'>together.</span> <span
  m='492970'>So</span> <span m='493090'>I</span> <span m='493120'>have</span>
  <span m='493210'>to</span> <span m='493300'>satisfy</span> <span
  m='493710'>this</span> <span m='493890'>clause</span> <span
  m='494450'>in</span> <span m='494580'>one</span> <span m='494760'>of</span>
  <span m='494840'>three</span> <span m='495070'>ways.</span> <span
  m='495910'>Maybe</span> <span m='496420'>I</span> <span
  m='496550'>satisfy</span> <span m='497090'>it</span> <span
  m='497290'>all</span> <span m='497470'>three</span> <span
  m='497680'>ways.</span> <span m='497970'>Doesn't</span> <span
  m='498170'>matter,</span> <span m='498670'>as</span> <span
  m='498740'>long</span> <span m='498880'>as</span> <span m='498960'>at</span>
  <span m='499070'>least</span> <span m='499340'>one</span> <span
  m='499480'>of</span> <span m='499550'>these</span> <span
  m='499700'>should</span> <span m='499840'>be</span> <span
  m='499940'>true,</span> <span m='500570'>and</span> <span m='500940'>at</span>
  <span m='501030'>least</span> <span m='501250'>one</span> <span
  m='501380'>of</span> <span m='501450'>these</span> <span
  m='501620'>should</span> <span m='501770'>be</span> <span
  m='501860'>true,</span> <span m='502490'>and</span> <span m='502750'>at</span>
  <span m='502810'>least</span> <span m='503010'>one</span> <span
  m='503120'>of</span> <span m='503590'>each</span> <span
  m='504030'>clause</span> <span m='504820'>should</span> <span
  m='504990'>be</span> <span m='505060'>true.</span> </p><p><span
  m='505940'>So</span> <span m='506110'>that's</span> <span
  m='507140'>the</span> <span m='507240'>3SAT</span> <span
  m='507660'>problem.</span> <span m='508300'>This</span> <span
  m='508480'>is</span> <span m='508590'>a</span> <span m='508650'>hard</span>
  <span m='508940'>problem.</span> <span m='509560'>We</span> <span
  m='509660'>don't</span> <span m='509770'>know</span> <span m='509880'>a</span>
  <span m='509930'>polynomial</span> <span m='510440'>time</span> <span
  m='510670'>algorithm.</span> <span m='511170'>There</span> <span
  m='511280'>probably</span> <span m='511620'>isn't</span> <span
  m='511840'>one.</span> <span m='512520'>But</span> <span
  m='513690'>there</span> <span m='513909'>is</span> <span m='514419'>a</span>
  <span m='514530'>polynomial</span> <span m='515190'>time</span> <span
  m='516190'>nondeterministic</span> <span m='517130'>algorithm.</span> <span
  m='517669'>So</span> <span m='517960'>this</span> <span
  m='518230'>problem</span> <span m='518590'>is</span> <span
  m='518909'>in</span> <span m='519110'>NP</span> <span
  m='522970'>because</span> <span m='531610'>if</span> <span m='531830'>I</span>
  <span m='531950'>have</span> <span m='532250'>lucky</span> <span
  m='532520'>guesses,</span> <span m='534140'>it's</span> <span
  m='534280'>kind</span> <span m='534460'>of</span> <span
  m='534550'>designed</span> <span m='535040'>to</span> <span
  m='535140'>solve</span> <span m='535390'>this</span> <span
  m='535510'>kind</span> <span m='535690'>of</span> <span
  m='535760'>problem.</span> <span m='536460'>What</span> <span
  m='536670'>I'm</span> <span m='536730'>going</span> <span m='536850'>to</span>
  <span m='536940'>do</span> <span m='537630'>is</span> <span
  m='537910'>guess</span> <span m='539240'>whether</span> <span
  m='539740'>x1</span> <span m='541410'>is</span> <span m='541750'>true</span>
  <span m='542000'>or</span> <span m='542070'>false.</span> </p><p><span
  m='543730'>So</span> <span m='543900'>I</span> <span m='543980'>have</span>
  <span m='544290'>two</span> <span m='544610'>choices.</span> <span
  m='545490'>And</span> <span m='545610'>I'm</span> <span
  m='545690'>going</span> <span m='545810'>to</span> <span m='545880'>ask</span>
  <span m='546120'>my</span> <span m='546220'>machine</span> <span
  m='546640'>to</span> <span m='546790'>make</span> <span m='547420'>the</span>
  <span m='547560'>right</span> <span m='547810'>choice,</span> <span
  m='548240'>whether</span> <span m='548440'>it</span> <span
  m='548500'>should</span> <span m='548650'>be</span> <span
  m='548740'>true</span> <span m='548930'>or</span> <span
  m='549010'>false.</span> <span m='550120'>Then</span> <span
  m='550400'>I'll</span> <span m='550540'>guess</span> <span
  m='551070'>x2.</span> <span m='553760'>Each</span> <span m='553970'>of</span>
  <span m='554040'>these</span> <span m='554250'>guess</span> <span
  m='554510'>operations</span> <span m='555160'>takes</span> <span
  m='555890'>constant</span> <span m='556290'>time.</span> <span
  m='557480'>So</span> <span m='557600'>I</span> <span m='557670'>do</span>
  <span m='557790'>it</span> <span m='557860'>for</span> <span
  m='557990'>every</span> <span m='558220'>variable.</span> <span
  m='559250'>And</span> <span m='559440'>then</span> <span m='559820'>I'm</span>
  <span m='559900'>going</span> <span m='560020'>to</span> <span
  m='560140'>check</span> <span m='560540'>whether</span> <span
  m='560870'>I</span> <span m='561000'>happen</span> <span m='561410'>to</span>
  <span m='561630'>satisfy</span> <span m='562090'>the</span> <span
  m='562180'>formula.</span> <span m='568960'>And</span> <span
  m='569310'>if</span> <span m='569500'>it</span> <span m='569790'>comes</span>
  <span m='570060'>out</span> <span m='570200'>true,</span> <span
  m='571040'>then</span> <span m='571270'>I'll</span> <span
  m='571400'>return</span> <span m='571740'>yes.</span> <span
  m='573140'>And</span> <span m='573360'>if</span> <span m='573450'>it</span>
  <span m='573530'>comes</span> <span m='573740'>out</span> <span
  m='573850'>false,</span> <span m='574240'>I'll</span> <span
  m='574440'>return</span> <span m='574780'>no.</span> </p><p><span
  m='583720'>And</span> <span m='584020'>because</span> <span
  m='584990'>NP</span> <span m='585660'>is</span> <span m='585860'>biased</span>
  <span m='586430'>towards</span> <span m='586880'>yes</span> <span
  m='587160'>answers,</span> <span m='587720'>it</span> <span
  m='587890'>always</span> <span m='588180'>finds</span> <span
  m='588560'>a</span> <span m='588620'>yes</span> <span m='588840'>answer</span>
  <span m='589200'>if</span> <span m='589606'>you can.</span> <span
  m='590824'>If</span> <span m='591230'>there's</span> <span
  m='591390'>some</span> <span m='591750'>way</span> <span m='591910'>to</span>
  <span m='592000'>satisfy</span> <span m='592520'>the</span> <span
  m='592610'>formula,</span> <span m='593560'>then</span> <span
  m='594420'>I</span> <span m='594610'>will</span> <span m='594750'>get</span>
  <span m='594960'>it.</span> <span m='595160'>If</span> <span
  m='595300'>there's</span> <span m='595420'>some</span> <span
  m='595670'>way</span> <span m='595780'>to</span> <span m='595850'>make</span>
  <span m='596010'>the</span> <span m='596080'>formula</span> <span
  m='596420'>come</span> <span m='596650'>out</span> <span
  m='596770'>true,</span> <span m='597550'>then</span> <span
  m='598040'>this</span> <span m='598270'>algorithm</span> <span
  m='598710'>will</span> <span m='598860'>return</span> <span
  m='599180'>yes.</span> <span m='599890'>If</span> <span
  m='600050'>there's</span> <span m='600230'>no</span> <span
  m='600440'>way</span> <span m='600570'>to</span> <span
  m='600640'>satisfy</span> <span m='601240'>it,</span> <span
  m='601710'>then</span> <span m='603930'>this</span> <span
  m='604250'>nondeterministic</span> <span m='604940'>algorithm</span> <span
  m='605280'>will</span> <span m='605390'>return</span> <span
  m='605730'>no.</span> <span m='606000'>That's</span> <span
  m='606180'>just</span> <span m='606380'>the</span> <span
  m='606450'>definition</span> <span m='607000'>of</span> <span
  m='607100'>how</span> <span m='607370'>nondeterministic</span> <span
  m='608170'>machines</span> <span m='608500'>work.</span> <span
  m='609340'>It's</span> <span m='609440'>a</span> <span
  m='609480'>little</span> <span m='609660'>weird.</span> <span
  m='610410'>But</span> <span m='611340'>you</span> <span m='611520'>can</span>
  <span m='611680'>see</span> <span m='611930'>from</span> <span
  m='612200'>this</span> <span m='612660'>kind</span> <span m='612830'>of</span>
  <span m='612910'>prototype</span> <span m='613670'>of</span> <span
  m='613870'>a</span> <span m='613920'>nondeterministic</span> <span
  m='614700'>algorithm,</span> <span m='615960'>you</span> <span
  m='616130'>can</span> <span m='616320'>actually</span> <span
  m='617260'>always</span> <span m='617800'>arrange</span> <span
  m='618200'>for</span> <span m='618290'>your</span> <span
  m='618400'>guessing</span> <span m='618850'>to</span> <span
  m='618980'>be</span> <span m='619130'>at</span> <span m='619250'>the</span>
  <span m='619320'>beginning.</span> <span m='620920'>And</span> <span
  m='621130'>then</span> <span m='621490'>you</span> <span m='621640'>do</span>
  <span m='621770'>some</span> <span m='622690'>regular</span> <span
  m='623130'>polynomial</span> <span m='623730'>time</span> <span
  m='624340'>checking</span> <span m='625830'>or</span> <span
  m='626160'>deterministic</span> <span m='627040'>checking.</span> </p><p><span
  m='629010'>So</span> <span m='629280'>when</span> <span m='629460'>you</span>
  <span m='629580'>rewrite</span> <span m='629910'>your</span> <span
  m='630030'>algorithm</span> <span m='630440'>like</span> <span
  m='630630'>this</span> <span m='630810'>with</span> <span
  m='630940'>guesses</span> <span m='631330'>up</span> <span
  m='631430'>front</span> <span m='632100'>and</span> <span
  m='632240'>then</span> <span m='632370'>checking,</span> <span
  m='632820'>you</span> <span m='632930'>can</span> <span m='633100'>also</span>
  <span m='633400'>think</span> <span m='633660'>of</span> <span
  m='633780'>it</span> <span m='633930'>as</span> <span m='634150'>a</span>
  <span m='634200'>verification</span> <span m='635000'>algorithm.</span> <span
  m='636360'>So</span> <span m='636540'>you</span> <span m='636610'>can</span>
  <span m='636750'>say,</span> <span m='637520'>your</span> <span
  m='637640'>friend</span> <span m='638330'>claims</span> <span
  m='638900'>that</span> <span m='639820'>this</span> <span
  m='640000'>3SAT</span> <span m='640430'>formula</span> <span
  m='641050'>is</span> <span m='641610'>satisfiable,</span> <span
  m='642700'>meaning</span> <span m='642980'>there's</span> <span
  m='643150'>a</span> <span m='643220'>way</span> <span m='643420'>to</span>
  <span m='643510'>set</span> <span m='643760'>the</span> <span
  m='643830'>variable</span> <span m='644240'>so</span> <span
  m='644420'>that</span> <span m='644570'>it</span> <span
  m='644660'>comes</span> <span m='644910'>out</span> <span
  m='645050'>true.</span> <span m='646140'>So</span> <span
  m='646300'>this</span> <span m='646440'>is</span> <span
  m='646550'>called</span> <span m='646840'>a</span> <span
  m='647010'>satisfying</span> <span m='647810'>assignment.</span> <span
  m='650990'>Satisfying</span> <span m='651620'>just</span> <span
  m='651760'>means</span> <span m='651930'>make</span> <span
  m='652160'>true.</span> <span m='656830'>And</span> <span
  m='657220'>you're</span> <span m='657350'>like,</span> <span
  m='657660'>no,</span> <span m='658390'>I</span> <span m='658430'>don't</span>
  <span m='658590'>believe</span> <span m='658890'>you.</span> <span
  m='659355'>And</span> <span m='659820'>your</span> <span
  m='659950'>friend</span> <span m='660180'>says</span> <span
  m='660340'>no,</span> <span m='660510'>no,</span> <span m='660600'>no,</span>
  <span m='660830'>really,</span> <span m='661220'>it's</span> <span
  m='661420'>true.</span> <span m='661940'>And</span> <span
  m='662130'>here's</span> <span m='662390'>how</span> <span m='662500'>I</span>
  <span m='662610'>can</span> <span m='662770'>prove</span> <span
  m='663020'>it.</span> <span m='663460'>You</span> <span m='663580'>set</span>
  <span m='663790'>x1</span> <span m='664020'>to</span> <span
  m='664280'>false.</span> <span m='664720'>You</span> <span
  m='664790'>set</span> <span m='664980'>x2</span> <span m='665200'>to</span>
  <span m='665370'>true.</span> <span m='665725'>You</span> <span
  m='666080'>set</span> <span m='666320'>x3--</span> <span
  m='666830'>basically</span> <span m='667180'>they</span> <span
  m='667300'>give</span> <span m='667550'>you</span> <span m='667670'>the</span>
  <span m='667780'>guesses.</span> </p><p><span m='669260'>And</span> <span
  m='669510'>then</span> <span m='670170'>you</span> <span
  m='670380'>don't</span> <span m='670530'>have</span> <span
  m='670720'>to</span> <span m='671160'>be</span> <span
  m='671310'>convinced</span> <span m='671950'>that</span> <span
  m='672080'>those</span> <span m='672270'>are</span> <span
  m='672320'>the</span> <span m='672430'>right</span> <span
  m='672630'>guesses,</span> <span m='672980'>you</span> <span
  m='673080'>can</span> <span m='673260'>check</span> <span m='673570'>that
  it's</span> <span m='673900'>the right</span> <span m='674150'>guess.</span>
  <span m='674480'>You</span> <span m='674580'>can</span> <span
  m='674770'>compute</span> <span m='675240'>this</span> <span
  m='675410'>formula</span> <span m='676260'>in</span> <span
  m='676440'>linear</span> <span m='676720'>time,</span> <span
  m='677090'>see</span> <span m='677280'>what</span> <span m='677470'>the</span>
  <span m='677590'>outcome</span> <span m='678010'>is.</span> <span
  m='678510'>If</span> <span m='678650'>someone</span> <span
  m='678890'>tells</span> <span m='679150'>you</span> <span
  m='679250'>what</span> <span m='679390'>the</span> <span
  m='679480'>xi's</span> <span m='679950'>are,</span> <span
  m='680420'>you</span> <span m='680560'>can</span> <span m='680680'>very</span>
  <span m='680890'>quickly</span> <span m='681260'>see</span> <span
  m='681510'>whether</span> <span m='681780'>that</span> <span
  m='681980'>was</span> <span m='682190'>a</span> <span
  m='682650'>satisfying</span> <span m='683200'>assignment.</span> <span
  m='684310'>So</span> <span m='684410'>you</span> <span m='684510'>could</span>
  <span m='684650'>call</span> <span m='684830'>this</span> <span
  m='684990'>a</span> <span m='685050'>solution,</span> <span
  m='686440'>and</span> <span m='686540'>then</span> <span
  m='686680'>there's</span> <span m='686840'>a</span> <span
  m='686890'>polynomial</span> <span m='687520'>time</span> <span
  m='687980'>verification</span> <span m='688650'>algorithm</span> <span
  m='689040'>that</span> <span m='689200'>checks</span> <span
  m='689670'>that</span> <span m='690210'>solutions</span> <span
  m='691410'>are</span> <span m='691570'>valid.</span> </p><p><span
  m='692700'>But,</span> <span m='693550'>you</span> <span m='693660'>can</span>
  <span m='693850'>only</span> <span m='694160'>do</span> <span
  m='694300'>that</span> <span m='694510'>for</span> <span m='694680'>yes</span>
  <span m='695070'>answers.</span> <span m='696170'>Your</span> <span
  m='696270'>friend</span> <span m='696540'>says</span> <span
  m='696880'>no,</span> <span m='697310'>this</span> <span m='697640'>is</span>
  <span m='697800'>not</span> <span m='698150'>satisfiable,</span> <span
  m='699510'>they</span> <span m='699650'>have</span> <span m='699820'>no</span>
  <span m='700160'>way</span> <span m='700330'>of</span> <span
  m='700420'>proving</span> <span m='700740'>it</span> <span
  m='700860'>to</span> <span m='700990'>you.</span> <span m='702270'>I</span>
  <span m='702320'>mean,</span> <span m='702590'>other</span> <span
  m='702830'>than</span> <span m='703110'>checking</span> <span
  m='703490'>all</span> <span m='703790'>the</span> <span
  m='705280'>assignments</span> <span m='705860'>separately,</span> <span
  m='706450'>which</span> <span m='706740'>would</span> <span
  m='706840'>take</span> <span m='707040'>exponential</span> <span
  m='707570'>time,</span> <span m='708290'>there's</span> <span
  m='708480'>no</span> <span m='708700'>easy</span> <span m='708950'>way</span>
  <span m='709170'>to</span> <span m='709280'>confirm</span> <span
  m='709800'>that</span> <span m='710170'>the</span> <span
  m='710330'>answer</span> <span m='710620'>to</span> <span
  m='710730'>this</span> <span m='710850'>problem</span> <span
  m='711140'>is</span> <span m='711240'>no.</span> <span m='711670'>But</span>
  <span m='712200'>there</span> <span m='712370'>is</span> <span
  m='712600'>an</span> <span m='712690'>easy</span> <span m='712930'>way</span>
  <span m='713130'>to</span> <span m='713200'>check</span> <span
  m='713470'>that</span> <span m='713570'>the</span> <span
  m='713700'>answer</span> <span m='713940'>is</span> <span
  m='714030'>yes,</span> <span m='714430'>namely</span> <span
  m='714710'>I</span> <span m='714800'>give</span> <span m='715040'>you</span>
  <span m='715220'>the</span> <span m='715320'>satisfying</span> <span
  m='715830'>assignment.</span> </p><p><span m='717600'>So</span> <span
  m='717800'>this</span> <span m='718050'>definition</span> <span
  m='718480'>of</span> <span m='718580'>NP</span> <span m='719760'>is</span>
  <span m='720090'>what</span> <span m='720360'>I'll</span> <span
  m='720610'>stick</span> <span m='720930'>to.</span> <span
  m='721130'>It's</span> <span m='721370'>this</span> <span
  m='721480'>sort</span> <span m='721730'>of--</span> <span m='723360'>I</span>
  <span m='723480'>like</span> <span m='723720'>guessing</span> <span
  m='724120'>because</span> <span m='724810'>it's</span> <span
  m='725100'>like</span> <span m='725650'>dynamic</span> <span
  m='726050'>programming.</span> <span m='726500'>With</span> <span
  m='726610'>dynamic</span> <span m='726980'>programming</span> <span
  m='727380'>we</span> <span m='727510'>also</span> <span
  m='727870'>guess,</span> <span m='729340'>and</span> <span
  m='729570'>guessing</span> <span m='729970'>actually</span> <span
  m='730290'>originally</span> <span m='730620'>comes</span> <span
  m='730850'>from</span> <span m='730980'>this</span> <span
  m='731170'>world,</span> <span m='731620'>nondeterminism.</span> <span
  m='733390'>In</span> <span m='733740'>dynamic</span> <span
  m='734180'>programming,</span> <span m='734720'>we</span> <span
  m='734840'>don't</span> <span m='735240'>allow</span> <span
  m='735590'>this</span> <span m='735760'>kind</span> <span m='735940'>of</span>
  <span m='736010'>model.</span> <span m='736790'>And</span> <span
  m='737040'>so</span> <span m='737220'>we</span> <span m='737320'>have</span>
  <span m='737480'>to</span> <span m='737580'>check</span> <span
  m='737870'>the</span> <span m='737940'>guesses</span> <span
  m='738260'>separately.</span> <span m='739030'>And</span> <span
  m='739170'>so</span> <span m='739330'>we</span> <span m='739430'>spend</span>
  <span m='739850'>lots</span> <span m='740070'>of</span> <span
  m='740160'>time.</span> <span m='740790'>Here,</span> <span
  m='741260'>magically,</span> <span m='741850'>you</span> <span
  m='741970'>always</span> <span m='742240'>get</span> <span
  m='742400'>the</span> <span m='742490'>right</span> <span
  m='742680'>guess</span> <span m='743100'>in</span> <span
  m='743240'>only</span> <span m='743410'>constant</span> <span
  m='743820'>time.</span> </p><p><span m='744320'>So</span> <span
  m='744420'>this</span> <span m='744530'>is</span> <span m='744590'>a</span>
  <span m='744630'>much</span> <span m='744850'>more</span> <span
  m='744990'>powerful</span> <span m='745310'>model.</span> <span
  m='746070'>Of</span> <span m='746140'>course</span> <span
  m='746340'>there's</span> <span m='746460'>no</span> <span
  m='746580'>computers</span> <span m='747100'>that</span> <span
  m='747230'>work</span> <span m='747440'>like</span> <span
  m='747610'>this,</span> <span m='748190'>sadly,</span> <span
  m='750251'>or</span> <span m='750740'>I</span> <span m='750870'>guess</span>
  <span m='751110'>more</span> <span m='751300'>interestingly.</span> <span
  m='752280'>So</span> <span m='753210'>this</span> <span m='753410'>is</span>
  <span m='753510'>more</span> <span m='753730'>about</span> <span
  m='754590'>confirming</span> <span m='755260'>that</span> <span
  m='755390'>your</span> <span m='755510'>problem</span> <span
  m='756140'>is</span> <span m='756450'>not</span> <span
  m='756870'>totally</span> <span m='758080'>impossible.</span> <span
  m='758830'>At</span> <span m='758930'>least</span> <span m='759050'>you</span>
  <span m='759120'>can</span> <span m='759270'>check</span> <span
  m='759560'>the</span> <span m='759680'>answers</span> <span
  m='760410'>in</span> <span m='760570'>polynomial</span> <span
  m='761050'>time.</span> <span m='762560'>So</span> <span
  m='764090'>that's</span> <span m='765670'>one</span> <span
  m='766630'>thing.</span> </p><p><span m='811110'>So</span> <span
  m='811380'>this</span> <span m='811570'>is</span> <span m='811670'>an</span>
  <span m='811750'>equivalent</span> <span m='812240'>definition</span> <span
  m='812700'>of</span> <span m='812790'>NP</span> <span
  m='813210'>because</span> <span m='813800'>you</span> <span
  m='813900'>can</span> <span m='814040'>take</span> <span m='814260'>a</span>
  <span m='814300'>nondeterministic</span> <span m='815060'>algorithm</span>
  <span m='815430'>and</span> <span m='815530'>put</span> <span
  m='815700'>the</span> <span m='815770'>guessing</span> <span
  m='816150'>up</span> <span m='816280'>top.</span> <span m='817300'>You</span>
  <span m='817450'>can</span> <span m='817610'>call</span> <span
  m='817890'>the</span> <span m='817970'>results</span> <span
  m='818390'>of</span> <span m='818500'>those</span> <span
  m='818710'>guesses</span> <span m='819200'>a</span> <span
  m='819350'>certificate</span> <span m='820270'>that</span> <span
  m='820480'>an</span> <span m='820610'>answer</span> <span m='820910'>is</span>
  <span m='821040'>yes.</span> <span m='822060'>And</span> <span
  m='822330'>then</span> <span m='822480'>you</span> <span
  m='822580'>have</span> <span m='823360'>a</span> <span
  m='823470'>regular</span> <span m='824000'>old</span> <span
  m='824560'>deterministic</span> <span m='825220'>polynomial</span> <span
  m='825700'>time</span> <span m='825940'>algorithm</span> <span
  m='826780'>that,</span> <span m='827010'>given</span> <span
  m='827380'>that</span> <span m='827570'>certificate,</span> <span
  m='828430'>will</span> <span m='828620'>verify</span> <span
  m='831690'>that</span> <span m='832140'>it</span> <span
  m='832350'>actually</span> <span m='833180'>proves</span> <span
  m='833550'>that</span> <span m='833670'>the</span> <span
  m='833790'>answer</span> <span m='834020'>is</span> <span
  m='834110'>yes.</span> <span m='837820'>It's</span> <span
  m='838000'>just</span> <span m='838190'>that</span> <span
  m='838360'>certificate</span> <span m='838960'>has</span> <span
  m='839170'>to</span> <span m='839240'>be</span> <span
  m='839350'>polynomial</span> <span m='839900'>size.</span> <span
  m='840730'>You</span> <span m='840840'>can't</span> <span
  m='841170'>guess</span> <span m='841550'>something</span> <span
  m='841910'>of</span> <span m='842020'>exponential</span> <span
  m='842590'>size.</span> <span m='842960'>You</span> <span
  m='843040'>can</span> <span m='843170'>only</span> <span
  m='843340'>guess</span> <span m='843500'>something</span> <span
  m='843780'>of</span> <span m='844060'>polynomial</span> <span
  m='844310'>size</span> <span m='845210'>in</span> <span m='845280'>this</span>
  <span m='845400'>model.</span> </p><p><span m='847010'>So</span> <span
  m='848780'>seems</span> <span m='849060'>a</span> <span
  m='849110'>little</span> <span m='849350'>weird.</span> <span
  m='850410'>But</span> <span m='850870'>we'll</span> <span
  m='850990'>see</span> <span m='851170'>why</span> <span m='851450'>this</span>
  <span m='851650'>is</span> <span m='852320'>useful</span> <span
  m='853510'>in</span> <span m='853700'>a</span> <span m='853730'>little</span>
  <span m='853900'>bit.</span> <span m='856610'>So</span> <span
  m='857020'>let</span> <span m='857250'>me</span> <span m='857500'>go</span>
  <span m='857740'>to</span> <span m='858260'>NP</span> <span
  m='858400'>completeness.</span> <span m='864740'>So</span> <span
  m='864930'>if</span> <span m='865020'>I</span> <span m='865110'>have</span>
  <span m='865260'>a</span> <span m='865320'>problem</span> <span
  m='865710'>X,</span> <span m='871180'>it's</span> <span
  m='871400'>NP-complete</span> <span m='873770'>if</span> <span
  m='874590'>X</span> <span m='874850'>is</span> <span m='874980'>in</span>
  <span m='875100'>NP</span> <span m='877320'>and</span> <span
  m='877820'>X</span> <span m='878090'>is</span> <span
  m='878670'>NP-hard.</span> <span m='881760'>But</span> <span
  m='881930'>I</span> <span m='881960'>haven't</span> <span
  m='882180'>told</span> <span m='882370'>you</span> <span
  m='882480'>what</span> <span m='882630'>NP-hard</span> <span
  m='883140'>is.</span> <span m='884130'>Maybe</span> <span
  m='884370'>you</span> <span m='884460'>remember</span> <span
  m='884880'>from</span> <span m='885080'>006,</span> <span
  m='886072'>but</span> <span m='889048'>let</span> <span m='889550'>me</span>
  <span m='889780'>remind</span> <span m='890030'>you.</span> </p><p><span
  m='924860'>So,</span> <span m='926844'>I</span> <span m='927340'>need</span>
  <span m='927560'>to</span> <span m='927660'>define</span> <span
  m='928050'>reduce.</span> <span m='928840'>So</span> <span
  m='929160'>maybe</span> <span m='929470'>I'll</span> <span
  m='929610'>do</span> <span m='929740'>that</span> <span m='929920'>as</span>
  <span m='930040'>well,</span> <span m='930720'>then</span> <span
  m='930750'>we</span> <span m='930840'>can</span> <span m='930960'>talk</span>
  <span m='931160'>about</span> <span m='931370'>all</span> <span
  m='931560'>these.</span> </p><p><span m='986130'>OK,</span> <span
  m='986540'>a</span> <span m='986660'>lot</span> <span m='986940'>of</span>
  <span m='987060'>definitions.</span> <span m='989110'>But</span> <span
  m='989300'>the</span> <span m='989410'>idea</span> <span m='989720'>of</span>
  <span m='989900'>NP</span> <span m='990190'>hardness</span> <span
  m='990810'>is</span> <span m='990920'>very</span> <span
  m='991100'>simple.</span> <span m='992970'>If</span> <span
  m='993090'>problem</span> <span m='993420'>X</span> <span m='993720'>is</span>
  <span m='993840'>NP-hard,</span> <span m='994600'>it</span> <span
  m='994740'>means</span> <span m='995140'>that</span> <span
  m='995690'>it's</span> <span m='995930'>at</span> <span
  m='996050'>least</span> <span m='996450'>as</span> <span
  m='996550'>hard</span> <span m='997560'>as--</span> <span
  m='999540'>sorry,</span> <span m='999890'>that</span> <span
  m='1000020'>is</span> <span m='1000160'>a Y--</span> <span
  m='1001300'>it's</span> <span m='1001490'>at</span> <span
  m='1001580'>least</span> <span m='1001890'>as</span> <span
  m='1002000'>hard</span> <span m='1002360'>as</span> <span
  m='1002610'>all</span> <span m='1002950'>problems</span> <span
  m='1003560'>in</span> <span m='1003680'>NP.</span> <span
  m='1006280'>Intuitively,</span> <span m='1006830'>X</span> <span
  m='1007130'>means</span> <span m='1007530'>it's</span> <span
  m='1007730'>at</span> <span m='1007820'>least</span> <span
  m='1008050'>as</span> <span m='1008140'>hard</span> <span
  m='1008340'>as</span> <span m='1008610'>everything</span> <span
  m='1009140'>in</span> <span m='1009250'>NP.</span> <span
  m='1010280'>Whereas</span> <span m='1010690'>being</span> <span
  m='1011070'>in</span> <span m='1011180'>NP</span> <span m='1012060'>is</span>
  <span m='1012290'>a</span> <span m='1012350'>positive</span> <span
  m='1012910'>statement.</span> <span m='1013310'>That</span> <span
  m='1013370'>says</span> <span m='1013610'>it's</span> <span
  m='1013740'>not</span> <span m='1014130'>too</span> <span
  m='1014420'>hard,</span> <span m='1014820'>at</span> <span
  m='1014920'>least</span> <span m='1015240'>there's</span> <span
  m='1015490'>a</span> <span m='1015560'>polynomial</span> <span
  m='1016150'>time</span> <span m='1016370'>verification</span> <span
  m='1016950'>algorithm.</span> <span m='1017760'>So</span> <span
  m='1017910'>being</span> <span m='1018110'>in</span> <span
  m='1018190'>NP</span> <span m='1018500'>is</span> <span
  m='1019020'>good</span> <span m='1019790'>news.</span> <span
  m='1020060'>It</span> <span m='1020130'>says</span> <span
  m='1020380'>you're</span> <span m='1020490'>no</span> <span
  m='1020730'>harder</span> <span m='1021160'>than</span> <span
  m='1021330'>NP.</span> <span m='1022650'>NP-hard</span> <span
  m='1023250'>says</span> <span m='1023520'>you're</span> <span
  m='1023700'>at</span> <span m='1023770'>least</span> <span
  m='1023990'>as</span> <span m='1024079'>hard</span> <span
  m='1024329'>as</span> <span m='1024450'>everything</span> <span
  m='1024930'>in</span> <span m='1025030'>NP.</span> <span
  m='1025920'>And</span> <span m='1026089'>so</span> <span
  m='1026790'>NP-complete</span> <span m='1027520'>is</span> <span
  m='1027650'>a</span> <span m='1027700'>nice</span> <span
  m='1027950'>answer</span> <span m='1028230'>because</span> <span
  m='1028400'>this</span> <span m='1028579'>says</span> <span
  m='1028720'>you're</span> <span m='1028920'>exactly</span> <span
  m='1029700'>as</span> <span m='1029839'>hard</span> <span
  m='1030170'>as</span> <span m='1030329'>everything</span> <span
  m='1030750'>in</span> <span m='1030849'>NP--</span> <span
  m='1031579'>no</span> <span m='1031849'>harder,</span> <span
  m='1032300'>no</span> <span m='1032490'>easier.</span> </p><p><span
  m='1033849'>If</span> <span m='1034030'>you</span> <span
  m='1034150'>draw,</span> <span m='1035150'>in</span> <span
  m='1035329'>this</span> <span m='1035490'>vague</span> <span
  m='1035790'>sense,</span> <span m='1037099'>computational</span> <span
  m='1037810'>difficulty</span> <span m='1039829'>on</span> <span
  m='1040089'>one</span> <span m='1040270'>axis--</span> <span
  m='1042740'>which</span> <span m='1042890'>is</span> <span
  m='1043329'>not</span> <span m='1043589'>really</span> <span
  m='1043819'>accurate,</span> <span m='1044260'>but</span> <span
  m='1044540'>I</span> <span m='1044660'>like</span> <span m='1044859'>to</span>
  <span m='1044950'>do</span> <span m='1045060'>it</span> <span
  m='1045140'>anyway--</span> <span m='1046380'>and</span> <span
  m='1046530'>you</span> <span m='1046619'>have</span> <span
  m='1047970'>P</span> <span m='1048870'>is</span> <span m='1049110'>all</span>
  <span m='1049310'>of</span> <span m='1049410'>these</span> <span
  m='1049640'>easy</span> <span m='1049940'>problems</span> <span
  m='1050340'>down</span> <span m='1050540'>here.</span> <span
  m='1051320'>And</span> <span m='1051530'>NP</span> <span m='1052700'>is</span>
  <span m='1052940'>some</span> <span m='1053250'>larger</span> <span
  m='1053590'>set</span> <span m='1053810'>like</span> <span
  m='1054000'>this.</span> <span m='1055460'>NP-hard</span> <span
  m='1056760'>is</span> <span m='1057030'>from</span> <span
  m='1057240'>here</span> <span m='1057650'>over.</span> <span
  m='1062540'>And</span> <span m='1062850'>this</span> <span
  m='1063090'>point</span> <span m='1063590'>right</span> <span
  m='1063810'>here</span> <span m='1064560'>is</span> <span
  m='1064790'>NP-complete.</span> </p><p><span m='1069500'>Being</span> <span
  m='1069920'>in</span> <span m='1070090'>NP</span> <span
  m='1070460'>means</span> <span m='1070700'>you're</span> <span
  m='1070820'>left</span> <span m='1071120'>of</span> <span
  m='1071210'>this</span> <span m='1071390'>line,</span> <span
  m='1072120'>or</span> <span m='1072370'>on</span> <span m='1072580'>the</span>
  <span m='1072650'>line.</span> <span m='1073350'>And</span> <span
  m='1073540'>being</span> <span m='1073730'>NP-hard</span> <span
  m='1074220'>means</span> <span m='1074490'>you're</span> <span
  m='1074740'>right</span> <span m='1075000'>of</span> <span
  m='1075100'>this</span> <span m='1075270'>line,</span> <span
  m='1075600'>or</span> <span m='1075820'>on</span> <span m='1076020'>the</span>
  <span m='1076090'>line.</span> <span m='1076480'>NP-complete</span> <span
  m='1077040'>means</span> <span m='1077200'>you're</span> <span
  m='1077370'>right</span> <span m='1077670'>there.</span> <span
  m='1078610'>So</span> <span m='1078810'>that's</span> <span
  m='1078940'>a</span> <span m='1078990'>very</span> <span
  m='1079180'>definitive</span> <span m='1079780'>sense</span> <span
  m='1080310'>of</span> <span m='1081070'>hardness.</span> </p><p><span
  m='1082510'>Now</span> <span m='1082870'>there</span> <span
  m='1083050'>is</span> <span m='1083180'>this</span> <span
  m='1083740'>slight</span> <span m='1084070'>catch,</span> <span
  m='1084520'>which</span> <span m='1084690'>is</span> <span
  m='1084800'>we</span> <span m='1084910'>don't</span> <span
  m='1085100'>know</span> <span m='1085320'>whether</span> <span
  m='1085550'>P</span> <span m='1085860'>equals</span> <span
  m='1086120'>NP.</span> <span m='1086550'>So</span> <span
  m='1086740'>maybe</span> <span m='1087590'>this</span> <span
  m='1087870'>is</span> <span m='1088010'>the</span> <span
  m='1088080'>same</span> <span m='1088900'>as</span> <span
  m='1089080'>this,</span> <span m='1090240'>but</span> <span
  m='1090500'>probably</span> <span m='1090990'>not.</span> <span
  m='1091450'>Unless</span> <span m='1091810'>you</span> <span
  m='1092540'>believe</span> <span m='1092880'>in</span> <span
  m='1093020'>luck,</span> <span m='1093600'>basically,</span> <span
  m='1094530'>unless</span> <span m='1094880'>you</span> <span
  m='1095010'>imagine</span> <span m='1095430'>that</span> <span
  m='1095560'>a</span> <span m='1095600'>computer</span> <span
  m='1096140'>could</span> <span m='1096400'>engineer</span> <span
  m='1096950'>luck</span> <span m='1097820'>and</span> <span
  m='1098050'>always</span> <span m='1098360'>guess</span> <span
  m='1098620'>the</span> <span m='1098700'>right</span> <span
  m='1098920'>things</span> <span m='1099830'>without</span> <span
  m='1100180'>spending</span> <span m='1100470'>a</span> <span
  m='1100530'>lot</span> <span m='1100680'>of</span> <span
  m='1100770'>time,</span> <span m='1101640'>then</span> <span
  m='1101970'>P</span> <span m='1102350'>does</span> <span
  m='1102500'>not</span> <span m='1102670'>equal</span> <span
  m='1102940'>NP.</span> <span m='1103630'>And</span> <span
  m='1103800'>in</span> <span m='1103890'>that</span> <span
  m='1104120'>world,</span> <span m='1105130'>what</span> <span
  m='1105310'>we</span> <span m='1105420'>get</span> <span m='1105790'>is</span>
  <span m='1106000'>that</span> <span m='1106270'>if</span> <span
  m='1106410'>you</span> <span m='1106500'>have</span> <span
  m='1106680'>an</span> <span m='1106760'>NP-complete</span> <span
  m='1107380'>problem,</span> <span m='1107780'>or</span> <span
  m='1107860'>actually</span> <span m='1108130'>any</span> <span
  m='1108400'>NP-hard</span> <span m='1108910'>problem,</span> <span
  m='1109650'>you</span> <span m='1109820'>know</span> <span
  m='1110270'>it</span> <span m='1110420'>cannot</span> <span
  m='1110940'>be</span> <span m='1111130'>NP.</span> </p><p><span
  m='1113590'>So</span> <span m='1113760'>if</span> <span m='1114010'>you</span>
  <span m='1114160'>have</span> <span m='1114650'>that</span> <span
  m='1114840'>X</span> <span m='1115070'>is</span> <span
  m='1115180'>NP-hard,</span> <span m='1118240'>then</span> <span
  m='1118500'>you</span> <span m='1118780'>know that</span> <span
  m='1119060'>X</span> <span m='1119880'>is</span> <span m='1120060'>not</span>
  <span m='1120350'>in</span> <span m='1120520'>P</span> <span
  m='1121880'>unless</span> <span m='1123590'>all</span> <span
  m='1123970'>of</span> <span m='1124080'>NP</span> <span m='1124405'>is
  in</span> <span m='1124730'>P.</span> <span m='1125670'>So</span> <span
  m='1125810'>unless</span> <span m='1125870'>P</span> <span
  m='1126030'>equals</span> <span m='1126670'>NP.</span> <span
  m='1127690'>And</span> <span m='1128100'>most</span> <span
  m='1128610'>reasonable</span> <span m='1129100'>people</span> <span
  m='1129700'>do</span> <span m='1129810'>not</span> <span
  m='1130070'>believe</span> <span m='1130410'>this.</span> <span
  m='1131040'>And</span> <span m='1131230'>so</span> <span
  m='1131360'>instead</span> <span m='1131890'>they</span> <span
  m='1132140'>have</span> <span m='1132350'>to</span> <span
  m='1132450'>believe</span> <span m='1132750'>this,</span> <span
  m='1133160'>that</span> <span m='1133410'>your</span> <span
  m='1133560'>problem</span> <span m='1134020'>is</span> <span
  m='1134200'>not</span> <span m='1134790'>polynomially</span> <span
  m='1135380'>solvable.</span> </p><p><span m='1137580'>So</span> <span
  m='1137860'>why</span> <span m='1138170'>is</span> <span
  m='1138300'>this</span> <span m='1138450'>true?</span> <span
  m='1139740'>Because</span> <span m='1140350'>if</span> <span
  m='1140600'>your</span> <span m='1140770'>problem</span> <span
  m='1141050'>is</span> <span m='1141140'>NP-hard,</span> <span
  m='1141680'>it</span> <span m='1141850'>is</span> <span m='1141920'>at</span>
  <span m='1141980'>least</span> <span m='1142300'>as</span> <span
  m='1142400'>hard</span> <span m='1142660'>as</span> <span
  m='1142890'>every</span> <span m='1143280'>problem</span> <span
  m='1143720'>in</span> <span m='1143810'>NP.</span> <span
  m='1145880'>And</span> <span m='1146630'>if</span> <span
  m='1146920'>you</span> <span m='1147010'>believe</span> <span
  m='1147310'>that</span> <span m='1147430'>there</span> <span
  m='1147530'>is</span> <span m='1147590'>some</span> <span
  m='1147930'>problem</span> <span m='1148350'>in</span> <span
  m='1148440'>NP--</span> <span m='1148770'>we</span> <span
  m='1148870'>don't</span> <span m='1149050'>necessarily</span> <span
  m='1149440'>know</span> <span m='1149570'>which</span> <span
  m='1149750'>one--</span> <span m='1149990'>but</span> <span
  m='1150100'>if</span> <span m='1150190'>there is</span> <span
  m='1150500'>any</span> <span m='1150770'>problem</span> <span
  m='1151180'>out</span> <span m='1151340'>there</span> <span
  m='1151470'>in</span> <span m='1151550'>NP</span> <span
  m='1151900'>that</span> <span m='1152020'>is</span> <span
  m='1152170'>not</span> <span m='1152570'>in</span> <span m='1152710'>P,</span>
  <span m='1154280'>then</span> <span m='1155480'>X</span> <span
  m='1155850'>has</span> <span m='1156080'>to</span> <span m='1156180'>be</span>
  <span m='1157620'>at</span> <span m='1157780'>least</span> <span
  m='1158030'>as</span> <span m='1158110'>hard</span> <span
  m='1158410'>as</span> <span m='1158540'>it.</span> <span m='1158710'>So</span>
  <span m='1158930'>it</span> <span m='1159050'>also</span> <span
  m='1159520'>requires</span> <span m='1161280'>nonpolynomial</span> <span
  m='1162170'>time,</span> <span m='1162410'>something</span> <span
  m='1162730'>larger</span> <span m='1163040'>than</span> <span
  m='1163190'>polynomial</span> <span m='1163690'>time.</span> </p><p><span
  m='1165060'>What</span> <span m='1165380'>does</span> <span
  m='1165510'>at</span> <span m='1165620'>least</span> <span
  m='1165880'>as</span> <span m='1165970'>hard</span> <span
  m='1166230'>mean</span> <span m='1166550'>though?</span> <span
  m='1167090'>We're</span> <span m='1167230'>going</span> <span
  m='1167370'>to</span> <span m='1167600'>define</span> <span
  m='1167980'>it</span> <span m='1168070'>in</span> <span
  m='1168140'>terms</span> <span m='1168390'>of</span> <span
  m='1168530'>reductions.</span> <span m='1169690'>Reduction</span> <span
  m='1170330'>from</span> <span m='1170560'>one</span> <span
  m='1170750'>problem</span> <span m='1171040'>to</span> <span
  m='1171180'>another</span> <span m='1171530'>is</span> <span
  m='1171660'>just</span> <span m='1171960'>a</span> <span
  m='1172640'>polynomial</span> <span m='1173260'>time</span> <span
  m='1173520'>algorithm,</span> <span m='1173910'>regular</span> <span
  m='1174320'>deterministic</span> <span m='1174990'>polynomial</span> <span
  m='1175480'>time,</span> <span m='1176130'>that</span> <span
  m='1176300'>converts</span> <span m='1176700'>an</span> <span
  m='1176830'>input</span> <span m='1177210'>to</span> <span
  m='1177310'>the</span> <span m='1177380'>problem</span> <span
  m='1177740'>A</span> <span m='1178440'>into</span> <span m='1178850'>an</span>
  <span m='1178930'>equivalent</span> <span m='1180000'>input</span> <span
  m='1180480'>to</span> <span m='1180590'>problem</span> <span
  m='1180980'>B.</span> <span m='1181180'>Equivalent</span> <span
  m='1181800'>means</span> <span m='1183060'>that</span> <span
  m='1183290'>it</span> <span m='1183430'>has</span> <span
  m='1183660'>the</span> <span m='1183740'>same</span> <span
  m='1184580'>yes</span> <span m='1184860'>or</span> <span m='1184920'>no</span>
  <span m='1185110'>answer.</span> <span m='1188220'>And</span> <span
  m='1188390'>we'll</span> <span m='1188480'>just</span> <span
  m='1188640'>be</span> <span m='1188740'>thinking</span> <span
  m='1188990'>about</span> <span m='1189210'>decision</span> <span
  m='1189620'>problems</span> <span m='1190080'>today.</span> </p><p><span
  m='1195410'>So</span> <span m='1197230'>why</span> <span
  m='1197470'>would</span> <span m='1197620'>I</span> <span
  m='1197680'>care</span> <span m='1197910'>about</span> <span
  m='1198110'>a</span> <span m='1198170'>reduction?</span> <span
  m='1199610'>Because</span> <span m='1201070'>what</span> <span
  m='1201280'>it</span> <span m='1201460'>tells</span> <span
  m='1201750'>me</span> <span m='1201940'>is</span> <span
  m='1202100'>that</span> <span m='1202240'>if</span> <span m='1202450'>I</span>
  <span m='1202680'>know</span> <span m='1202930'>how</span> <span
  m='1203060'>to</span> <span m='1203140'>solve</span> <span
  m='1203560'>problem</span> <span m='1203960'>B,</span> <span
  m='1204700'>then</span> <span m='1204900'>I</span> <span
  m='1205070'>also</span> <span m='1205460'>know</span> <span
  m='1205700'>how</span> <span m='1205800'>to</span> <span
  m='1205890'>solve</span> <span m='1206180'>problem</span> <span
  m='1206560'>A.</span> <span m='1207670'>If</span> <span m='1207770'>I</span>
  <span m='1207860'>have</span> <span m='1208160'>a,</span> <span
  m='1208380'>say,</span> <span m='1208570'>a</span> <span
  m='1208630'>polynomial</span> <span m='1209160'>time</span> <span
  m='1209390'>algorithm</span> <span m='1209760'>for</span> <span
  m='1209900'>solving</span> <span m='1210260'>B</span> <span
  m='1211180'>and</span> <span m='1211380'>I</span> <span
  m='1211440'>want</span> <span m='1211710'>one</span> <span
  m='1211850'>for</span> <span m='1212010'>A,</span> <span m='1212590'>I</span>
  <span m='1212730'>just</span> <span m='1212930'>take</span> <span
  m='1213120'>my A</span> <span m='1213290'>input.</span> <span
  m='1213960'>I</span> <span m='1214050'>convert</span> <span
  m='1214550'>it</span> <span m='1214670'>into</span> <span
  m='1214980'>the</span> <span m='1215080'>equivalent</span> <span
  m='1215620'>B</span> <span m='1215810'>input.</span> <span
  m='1216550'>Then</span> <span m='1216720'>I</span> <span
  m='1216790'>run</span> <span m='1217050'>my</span> <span
  m='1217210'>algorithm</span> <span m='1217560'>for</span> <span
  m='1217690'>B,</span> <span m='1217910'>and</span> <span
  m='1218000'>then</span> <span m='1218110'>it</span> <span
  m='1218190'>gives</span> <span m='1218400'>me</span> <span
  m='1218570'>the</span> <span m='1218720'>answer</span> <span
  m='1219030'>to</span> <span m='1219170'>the A</span> <span
  m='1219260'>problem</span> <span m='1219880'>because</span> <span
  m='1220650'>the</span> <span m='1220830'>answers</span> <span
  m='1221160'>are</span> <span m='1221230'>the</span> <span
  m='1221320'>same.</span> </p><p><span m='1222920'>So</span> <span
  m='1223250'>if</span> <span m='1223430'>you</span> <span
  m='1223540'>have</span> <span m='1223770'>a</span> <span
  m='1223820'>reduction</span> <span m='1224270'>like</span> <span
  m='1224460'>this</span> <span m='1225820'>and</span> <span
  m='1226300'>if</span> <span m='1227200'>say,</span> <span
  m='1227480'>B,</span> <span m='1227830'>has</span> <span m='1228070'>a</span>
  <span m='1228120'>polynomial</span> <span m='1228640'>time</span> <span
  m='1228880'>algorithm,</span> <span m='1229940'>then</span> <span
  m='1230650'>so</span> <span m='1230940'>does</span> <span
  m='1231110'>A,</span> <span m='1232820'>because</span> <span
  m='1233200'>you</span> <span m='1233290'>can</span> <span
  m='1233420'>just</span> <span m='1233610'>convert</span> <span
  m='1234400'>A</span> <span m='1234480'>into</span> <span m='1234730'>B,</span>
  <span m='1235410'>and</span> <span m='1235570'>then</span> <span
  m='1235910'>solve</span> <span m='1236230'>B.</span> <span
  m='1238470'>Also</span> <span m='1239360'>this</span> <span
  m='1239550'>works</span> <span m='1239870'>for</span> <span
  m='1241940'>nondeterministic</span> <span m='1242570'>algorithms.</span> <span
  m='1248540'>Not</span> <span m='1248910'>too</span> <span
  m='1249850'>important.</span> </p><p><span m='1253360'>So</span> <span
  m='1254300'>what</span> <span m='1254520'>this</span> <span
  m='1254660'>tells</span> <span m='1254940'>us</span> <span
  m='1255250'>is</span> <span m='1255500'>that</span> <span
  m='1255660'>in</span> <span m='1255770'>a</span> <span
  m='1255820'>certain</span> <span m='1256120'>sense--</span> <span
  m='1256710'>get</span> <span m='1257240'>this</span> <span
  m='1257560'>right--</span> <span m='1259750'>well</span> <span
  m='1260240'>this</span> <span m='1260470'>is</span> <span
  m='1260550'>saying,</span> <span m='1260850'>if</span> <span
  m='1261030'>I</span> <span m='1261120'>can</span> <span
  m='1261270'>solve</span> <span m='1261610'>B,</span> <span
  m='1262530'>that</span> <span m='1262710'>I</span> <span
  m='1262760'>can</span> <span m='1262920'>solve</span> <span
  m='1263415'>A.</span> <span m='1266320'>So</span> <span
  m='1266740'>this</span> <span m='1266930'>is</span> <span
  m='1267010'>saying</span> <span m='1267420'>that</span> <span
  m='1270990'>B</span> <span m='1271380'>is</span> <span m='1271530'>at</span>
  <span m='1271630'>least</span> <span m='1271910'>as</span> <span
  m='1272020'>hard</span> <span m='1272290'>as</span> <span
  m='1272600'>A.</span> <span m='1274140'>I think I</span> <span
  m='1274330'>got</span> <span m='1274520'>that</span> <span
  m='1274670'>right,</span> <span m='1275420'>a</span> <span
  m='1275450'>little</span> <span m='1275610'>tricky.</span> </p><p><span
  m='1278020'>So</span> <span m='1278800'>if</span> <span m='1279000'>we</span>
  <span m='1279110'>want</span> <span m='1279300'>to</span> <span
  m='1279370'>prove</span> <span m='1279570'>the</span> <span
  m='1279660'>problem</span> <span m='1279980'>is</span> <span
  m='1280110'>NP</span> <span m='1280360'>hard,</span> <span
  m='1281210'>what</span> <span m='1281400'>we</span> <span
  m='1281520'>do</span> <span m='1282170'>is</span> <span
  m='1282370'>show</span> <span m='1282600'>that</span> <span
  m='1282820'>every</span> <span m='1283180'>problem</span> <span
  m='1283620'>in</span> <span m='1283720'>NP</span> <span m='1284560'>can</span>
  <span m='1284890'>be</span> <span m='1285050'>reduced</span> <span
  m='1285840'>to</span> <span m='1285960'>the</span> <span
  m='1286020'>problem</span> <span m='1286390'>of X.</span> <span
  m='1287230'>So</span> <span m='1287400'>now</span> <span m='1287560'>we</span>
  <span m='1287660'>can</span> <span m='1287770'>go</span> <span
  m='1287880'>back</span> <span m='1288150'>and</span> <span
  m='1288240'>say</span> <span m='1288490'>well,</span> <span
  m='1288880'>if</span> <span m='1289050'>we</span> <span
  m='1289140'>believe</span> <span m='1289480'>that</span> <span
  m='1289590'>there</span> <span m='1289680'>is</span> <span
  m='1289740'>some</span> <span m='1290080'>problem</span> <span
  m='1290590'>Y,</span> <span m='1291390'>that</span> <span
  m='1291540'>is</span> <span m='1291720'>in</span> <span m='1292000'>NP</span>
  <span m='1292580'>minus</span> <span m='1292980'>P,</span> <span
  m='1293290'>if</span> <span m='1293410'>there's</span> <span
  m='1293560'>something</span> <span m='1294030'>out</span> <span
  m='1294180'>here</span> <span m='1294410'>that</span> <span
  m='1294520'>is</span> <span m='1294630'>not</span> <span m='1295000'>in</span>
  <span m='1295130'>P,</span> <span m='1296680'>then</span> <span
  m='1297210'>we</span> <span m='1297360'>can</span> <span
  m='1297470'>take</span> <span m='1297690'>that</span> <span
  m='1297850'>problem</span> <span m='1298300'>Y,</span> <span
  m='1298780'>and</span> <span m='1299060'>by</span> <span
  m='1299290'>this</span> <span m='1299450'>definition,</span> <span
  m='1299960'>we</span> <span m='1300090'>can</span> <span
  m='1300310'>reduce</span> <span m='1300690'>it</span> <span
  m='1300790'>to</span> <span m='1300870'>X,</span> <span
  m='1301160'>because</span> <span m='1301360'>everything</span> <span
  m='1301900'>in</span> <span m='1302010'>NP</span> <span
  m='1302310'>reduces</span> <span m='1302730'>to</span> <span
  m='1302810'>X.</span> <span m='1303750'>And</span> <span m='1303910'>so</span>
  <span m='1304530'>then</span> <span m='1304960'>I</span> <span
  m='1305150'>can</span> <span m='1306090'>solve</span> <span
  m='1307560'>my</span> <span m='1307770'>problem</span> <span
  m='1309250'>Y,</span> <span m='1309570'>which</span> <span
  m='1309800'>is</span> <span m='1309940'>in</span> <span m='1310170'>NP</span>
  <span m='1310540'>minus</span> <span m='1310860'>P,</span> <span
  m='1311420'>by</span> <span m='1311560'>converting</span> <span
  m='1311960'>it</span> <span m='1312050'>to</span> <span m='1312130'>X</span>
  <span m='1312390'>and</span> <span m='1312500'>solving</span> <span
  m='1312810'>X.</span> <span m='1313060'>So</span> <span
  m='1313150'>that</span> <span m='1313340'>means</span> <span
  m='1313910'>X</span> <span m='1314200'>better</span> <span
  m='1314520'>not</span> <span m='1314720'>have</span> <span
  m='1314900'>a</span> <span m='1314950'>polynomial</span> <span
  m='1315520'>time</span> <span m='1315770'>algorithm,</span> <span
  m='1316750'>because</span> <span m='1317290'>if</span> <span
  m='1317430'>it</span> <span m='1317510'>did,</span> <span m='1318440'>Y</span>
  <span m='1318810'>would</span> <span m='1318970'>also</span> <span
  m='1319240'>have</span> <span m='1319370'>a</span> <span
  m='1319420'>polynomial</span> <span m='1319920'>time</span> <span
  m='1320160'>algorithm.</span> <span m='1320650'>And</span> <span
  m='1320810'>then</span> <span m='1321450'>in</span> <span
  m='1321660'>general,</span> <span m='1322040'>P</span> <span
  m='1322340'>would</span> <span m='1322480'>equal</span> <span
  m='1322740'>NP,</span> <span m='1323110'>because</span> <span
  m='1323520'>every</span> <span m='1323890'>problem</span> <span
  m='1324290'>in</span> <span m='1324390'>NP</span> <span m='1324710'>can</span>
  <span m='1324860'>be</span> <span m='1324940'>converted</span> <span
  m='1325290'>to</span> <span m='1325360'>X.</span> <span m='1325730'>So
  if</span> <span m='1325900'>X</span> <span m='1326150'>has</span> <span
  m='1326310'>a</span> <span m='1326370'>polynomial</span> <span
  m='1326840'>time</span> <span m='1327070'>algorithm,</span> <span
  m='1327780'>then</span> <span m='1328030'>every</span> <span
  m='1328410'>problem</span> <span m='1328890'>Y</span> <span
  m='1329020'>does.</span> <span m='1330470'>Question?</span> </p><p><span
  m='1331810'>AUDIENCE: For the</span> <span m='1332290'>second if</span> <span
  m='1332770'>statement,</span> <span m='1333250'>why can't</span> <span
  m='1333730'>you say</span> <span m='1334210'>that</span> <span
  m='1335170'>if</span> <span m='1335650'>A</span> <span m='1336130'>is
  in</span> <span m='1336200'>NP,</span> <span m='1336666'>B</span> <span
  m='1337132'>is in</span> <span m='1337598'>NP?</span> </p><p><span
  m='1338064'>ERIC DEMAINE: So you're</span> <span m='1338530'>asked</span>
  <span m='1338840'>us</span> <span m='1339100'>about</span> <span
  m='1339310'>the</span> <span m='1339390'>reverse</span> <span
  m='1339770'>question.</span> <span m='1340190'>If</span> <span
  m='1340440'>is</span> <span m='1340840'>A in</span> <span
  m='1340960'>NP,</span> <span m='1341940'>can</span> <span
  m='1342100'>we</span> <span m='1342200'>conclude</span> <span
  m='1342560'>that</span> <span m='1342670'>B</span> <span m='1342860'>is</span>
  <span m='1342980'>in</span> <span m='1343070'>NP?</span> <span
  m='1343900'>And</span> <span m='1344110'>the</span> <span
  m='1344220'>answer</span> <span m='1344570'>is</span> <span
  m='1344900'>no.</span> <span m='1350890'>Because</span> <span
  m='1351190'>this</span> <span m='1351380'>reduction</span> <span
  m='1351950'>only</span> <span m='1352270'>lets</span> <span
  m='1352510'>us</span> <span m='1352650'>convert</span> <span
  m='1352980'>from</span> <span m='1353170'>A</span> <span m='1353290'>to</span>
  <span m='1353390'>B.</span> <span m='1353880'>It</span> <span
  m='1354030'>doesn't</span> <span m='1354560'>let</span> <span
  m='1354700'>us</span> <span m='1354800'>do</span> <span
  m='1354940'>anything</span> <span m='1355340'>for</span> <span
  m='1355460'>converting</span> <span m='1355850'>from</span> <span
  m='1356030'>B</span> <span m='1356160'>to</span> <span m='1356330'>A.</span>
  <span m='1357100'>So</span> <span m='1357370'>if</span> <span
  m='1357470'>we</span> <span m='1357590'>know</span> <span
  m='1357780'>how</span> <span m='1357860'>to</span> <span
  m='1357960'>solve</span> <span m='1358270'>A</span> <span
  m='1358685'>and</span> <span m='1359100'>we</span> <span
  m='1359230'>also</span> <span m='1359580'>know</span> <span
  m='1359710'>how</span> <span m='1359790'>to</span> <span
  m='1359870'>convert</span> <span m='1360310'>A into</span> <span
  m='1360700'>B,</span> <span m='1361705'>it</span> <span
  m='1362170'>doesn't</span> <span m='1362500'>tell</span> <span
  m='1362680'>us</span> <span m='1362810'>anything.</span> <span
  m='1363180'>It</span> <span m='1363370'>could</span> <span
  m='1363530'>be</span> <span m='1363670'>B</span> <span m='1363900'>is</span>
  <span m='1365440'>a</span> <span m='1365580'>much</span> <span
  m='1365890'>harder</span> <span m='1366230'>problem</span> <span
  m='1366700'>than</span> <span m='1366870'>A,</span> <span
  m='1367345'>in</span> <span m='1367820'>that</span> <span
  m='1367970'>situation.</span> <span m='1373440'>That's,</span> <span
  m='1373760'>I</span> <span m='1373890'>think,</span> <span
  m='1374140'>as</span> <span m='1374270'>good</span> <span
  m='1374430'>as</span> <span m='1374530'>I</span> <span m='1374600'>can</span>
  <span m='1374730'>do</span> <span m='1374850'>for</span> <span
  m='1374980'>that.</span> <span m='1375310'>Other</span> <span
  m='1375510'>questions?</span> </p><p><span m='1379120'>All</span> <span
  m='1379220'>right.</span> <span m='1379390'>It</span> <span
  m='1379550'>is</span> <span m='1379930'>really</span> <span
  m='1380270'>tricky</span> <span m='1380610'>to</span> <span
  m='1380700'>get</span> <span m='1380890'>these</span> <span
  m='1381040'>directions</span> <span m='1381530'>right.</span> <span
  m='1381860'>So</span> <span m='1383180'>let</span> <span m='1383470'>me</span>
  <span m='1383700'>give</span> <span m='1383920'>you</span> <span
  m='1384670'>a</span> <span m='1384840'>handy</span> <span
  m='1385160'>guide</span> <span m='1385630'>on</span> <span
  m='1385840'>how</span> <span m='1386000'>to</span> <span
  m='1386650'>not</span> <span m='1386870'>make</span> <span
  m='1387040'>a</span> <span m='1387070'>mistake.</span> <span
  m='1389410'>So</span> <span m='1390160'>maybe</span> <span
  m='1390440'>over</span> <span m='1390620'>here.</span> </p><p><span
  m='1400410'>What</span> <span m='1400610'>we</span> <span
  m='1400740'>care</span> <span m='1401010'>about,</span> <span
  m='1402390'>from</span> <span m='1402590'>an</span> <span
  m='1402660'>algorithmic</span> <span m='1403140'>perspective,</span> <span
  m='1404430'>is</span> <span m='1406290'>proving</span> <span
  m='1406810'>the</span> <span m='1406900'>problems</span> <span
  m='1407410'>are</span> <span m='1407500'>NP-complete.</span> <span
  m='1417740'>Because</span> <span m='1417990'>if</span> <span
  m='1418110'>we</span> <span m='1418200'>prove</span> <span
  m='1418490'>NP-completeness--</span> <span m='1419320'>I</span> <span
  m='1419390'>mean,</span> <span m='1419590'>really</span> <span
  m='1419840'>we</span> <span m='1419940'>care</span> <span
  m='1420110'>about</span> <span m='1420330'>NP-hardness,</span> <span
  m='1421110'>but</span> <span m='1421320'>we</span> <span
  m='1421420'>might</span> <span m='1421610'>as</span> <span
  m='1421700'>well</span> <span m='1421810'>do</span> <span
  m='1421920'>NP-completeness.</span> <span m='1422710'>Most</span> <span
  m='1422870'>of</span> <span m='1422930'>the</span> <span
  m='1423000'>problems</span> <span m='1424110'>that</span> <span
  m='1424270'>we'll</span> <span m='1424380'>see</span> <span m='1424790'>that
  are</span> <span m='1424970'>NP-hard</span> <span m='1425250'>are</span> <span
  m='1425650'>also</span> <span m='1425910'>NP-complete.</span> </p><p><span
  m='1427950'>So</span> <span m='1429480'>when</span> <span
  m='1429620'>we</span> <span m='1429740'>prove</span> <span
  m='1430020'>this,</span> <span m='1430260'>we</span> <span
  m='1430370'>prove</span> <span m='1430590'>that</span> <span
  m='1430710'>there</span> <span m='1430840'>is</span> <span
  m='1430990'>basically</span> <span m='1431450'>no</span> <span
  m='1431670'>polynomial</span> <span m='1432240'>time</span> <span
  m='1432500'>algorithm</span> <span m='1432860'>for</span> <span
  m='1433010'>that</span> <span m='1433210'>problem.</span> <span
  m='1433990'>So</span> <span m='1434450'>that's</span> <span
  m='1434740'>good</span> <span m='1434920'>to</span> <span
  m='1435020'>know,</span> <span m='1435250'>because</span> <span
  m='1435580'>then</span> <span m='1435730'>we</span> <span
  m='1435810'>can</span> <span m='1435990'>just</span> <span
  m='1436220'>give</span> <span m='1436420'>up</span> <span
  m='1436620'>searching</span> <span m='1437080'>for</span> <span
  m='1437410'>a</span> <span m='1437490'>polynomial</span> <span
  m='1437980'>time</span> <span m='1438220'>algorithm.</span> <span
  m='1439840'>So</span> <span m='1441010'>all</span> <span
  m='1441090'>the</span> <span m='1441170'>problems</span> <span
  m='1441480'>we've</span> <span m='1441600'>seen</span> <span
  m='1441810'>so</span> <span m='1442000'>far</span> <span
  m='1442300'>have</span> <span m='1442650'>polynomial</span> <span
  m='1443140'>time</span> <span m='1443480'>algorithms,</span> <span
  m='1443690'>except</span> <span m='1444050'>a</span> <span
  m='1444090'>couple</span> <span m='1444560'>in</span> <span
  m='1444640'>your</span> <span m='1444740'>problem</span> <span
  m='1445050'>sets,</span> <span m='1445420'>which</span> <span
  m='1445630'>were</span> <span m='1445750'>actually</span> <span
  m='1446120'>NP-complete.</span> <span m='1447110'>And</span> <span
  m='1447310'>the</span> <span m='1447370'>best</span> <span
  m='1447620'>you</span> <span m='1447710'>could</span> <span
  m='1447870'>have</span> <span m='1447980'>done</span> <span
  m='1448230'>was</span> <span m='1448440'>exponential,</span> <span
  m='1449130'>unless</span> <span m='1449610'>P</span> <span m='1449970'>equals
  NP.</span> <span m='1451420'>So</span> <span m='1453370'>here's</span> <span
  m='1453740'>how</span> <span m='1454200'>you</span> <span
  m='1454330'>can</span> <span m='1454460'>prove</span> <span
  m='1454740'>this</span> <span m='1454860'>kind</span> <span
  m='1455040'>of</span> <span m='1455140'>lower</span> <span
  m='1455400'>bound</span> <span m='1455630'>to</span> <span
  m='1455690'>say</span> <span m='1455870'>look,</span> <span
  m='1456130'>I</span> <span m='1456230'>don't</span> <span
  m='1456550'>need</span> <span m='1456780'>to</span> <span
  m='1456880'>look</span> <span m='1457030'>for</span> <span
  m='1457150'>algorithms</span> <span m='1457550'>any</span> <span
  m='1457690'>more</span> <span m='1457930'>because</span> <span
  m='1458240'>my</span> <span m='1458360'>problem</span> <span
  m='1458720'>is</span> <span m='1458830'>just</span> <span
  m='1459060'>too</span> <span m='1459230'>hard.</span> <span
  m='1459970'>It's</span> <span m='1460080'>as</span> <span
  m='1460180'>hard</span> <span m='1460430'>as</span> <span
  m='1460560'>everything</span> <span m='1461070'>in</span> <span
  m='1461180'>NP.</span> </p><p><span m='1462580'>So</span> <span
  m='1463100'>this</span> <span m='1463310'>is</span> <span
  m='1463400'>just</span> <span m='1463600'>a</span> <span
  m='1463640'>summary</span> <span m='1464050'>of</span> <span
  m='1464160'>those</span> <span m='1464370'>definitions.</span> <span
  m='1465700'>The</span> <span m='1465800'>first</span> <span
  m='1465970'>thing</span> <span m='1466100'>you</span> <span
  m='1466210'>do</span> <span m='1466830'>is</span> <span
  m='1466990'>prove</span> <span m='1467220'>that</span> <span
  m='1467380'>X</span> <span m='1467570'>is</span> <span m='1468730'>in</span>
  <span m='1468930'>NP.</span> <span m='1469820'>The</span> <span
  m='1469930'>second</span> <span m='1470220'>thing</span> <span
  m='1470350'>you</span> <span m='1470460'>do</span> <span m='1470670'>is</span>
  <span m='1470890'>prove</span> <span m='1471180'>that</span> <span
  m='1471330'>X</span> <span m='1471930'>is</span> <span
  m='1472160'>NP-hard.</span> <span m='1473140'>And</span> <span
  m='1473300'>to</span> <span m='1473410'>do</span> <span
  m='1473550'>that,</span> <span m='1474240'>you</span> <span
  m='1474460'>reduce</span> <span m='1476050'>from</span> <span
  m='1477910'>some</span> <span m='1478280'>known</span> <span
  m='1478860'>NP-complete</span> <span m='1479460'>problem--</span> <span
  m='1481200'>or</span> <span m='1481540'>I</span> <span
  m='1481710'>guess</span> <span m='1482000'>NP-hard,</span> <span
  m='1483230'>but</span> <span m='1484200'>we'll</span> <span
  m='1484430'>use</span> <span m='1484550'>NP-complete--</span> <span
  m='1493860'>to</span> <span m='1494180'>your</span> <span
  m='1494430'>problem</span> <span m='1495600'>X.</span> <span
  m='1496330'>Maybe</span> <span m='1496510'>I'll</span> <span
  m='1496920'>give</span> <span m='1497120'>this</span> <span
  m='1497990'>a</span> <span m='1498070'>name</span> <span m='1498330'>Y.</span>
  </p><p><span m='1506030'>OK,</span> <span m='1506350'>so</span> <span
  m='1506530'>to</span> <span m='1506620'>prove</span> <span
  m='1506840'>that</span> <span m='1506980'>X</span> <span m='1507190'>is</span>
  <span m='1507310'>in</span> <span m='1507420'>NP,</span> <span
  m='1507890'>you</span> <span m='1508080'>do</span> <span
  m='1508220'>something</span> <span m='1508580'>like</span> <span
  m='1508800'>what</span> <span m='1508960'>we</span> <span
  m='1509050'>did</span> <span m='1509210'>over</span> <span
  m='1509390'>here,</span> <span m='1509970'>which</span> <span
  m='1510140'>is</span> <span m='1510290'>to</span> <span
  m='1510400'>give</span> <span m='1510730'>a</span> <span
  m='1510780'>nondeterministic</span> <span m='1511590'>algorithm.</span> <span
  m='1512390'>Or</span> <span m='1512660'>you</span> <span
  m='1512780'>can</span> <span m='1512930'>think</span> <span
  m='1513130'>of</span> <span m='1513230'>it</span> <span m='1513320'>as</span>
  <span m='1513440'>defining</span> <span m='1513970'>what</span> <span
  m='1514130'>the</span> <span m='1514200'>certificate</span> <span
  m='1514770'>is</span> <span m='1515080'>and</span> <span
  m='1515300'>then</span> <span m='1515940'>giving</span> <span
  m='1516350'>a</span> <span m='1516480'>polynomial</span> <span
  m='1517020'>time</span> <span m='1519290'>verification</span> <span
  m='1519940'>algorithm.</span> </p><p><span m='1522050'>So</span> <span
  m='1522310'>sort</span> <span m='1522480'>of</span> <span
  m='1522560'>two</span> <span m='1523390'>approaches.</span> <span
  m='1524812'>You</span> <span m='1525170'>can</span> <span
  m='1525270'>give</span> <span m='1525450'>a</span> <span
  m='1525500'>nondeterministic</span> <span m='1526310'>polynomial</span> <span
  m='1526960'>time</span> <span m='1527210'>algorithm,</span> <span
  m='1529710'>or</span> <span m='1530150'>you</span> <span
  m='1530320'>give</span> <span m='1531870'>a</span> <span
  m='1531950'>certificate</span> <span m='1532590'>and a</span> <span
  m='1532750'>verifier.</span> <span m='1539360'>There's</span> <span
  m='1539560'>no</span> <span m='1539760'>right</span> <span
  m='1539990'>or</span> <span m='1540070'>wrong</span> <span
  m='1540420'>certificate.</span> <span m='1541230'>I</span> <span
  m='1541310'>mean,</span> <span m='1541460'>a</span> <span
  m='1541500'>certificate,</span> <span m='1542100'>you</span> <span
  m='1542180'>can</span> <span m='1542300'>define</span> <span
  m='1542580'>however</span> <span m='1542850'>you</span> <span
  m='1542970'>want,</span> <span m='1543730'>as</span> <span
  m='1543950'>long</span> <span m='1544270'>as</span> <span
  m='1544520'>the</span> <span m='1544620'>verifier</span> <span
  m='1545130'>can</span> <span m='1545270'>actually</span> <span
  m='1545770'>check</span> <span m='1546070'>it</span> <span
  m='1546190'>and</span> <span m='1546320'>when</span> <span
  m='1546430'>it</span> <span m='1546580'>says</span> <span
  m='1546910'>yes,</span> <span m='1547790'>then</span> <span
  m='1547850'>the</span> <span m='1547970'>answer</span> <span
  m='1548280'>to</span> <span m='1548370'>the</span> <span
  m='1548440'>problem</span> <span m='1548820'>was</span> <span
  m='1548910'>yes.</span> <span m='1549480'>So</span> <span
  m='1550420'>it's</span> <span m='1550580'>really</span> <span
  m='1550760'>the</span> <span m='1550830'>same</span> <span
  m='1551070'>thing.</span> <span m='1551900'>Just</span> <span m='1552000'>want
  to</span> <span m='1552060'>say</span> <span m='1552230'>there's</span> <span
  m='1552370'>some</span> <span m='1552800'>certificate</span> <span
  m='1553710'>that</span> <span m='1553850'>a</span> <span
  m='1553890'>verifier</span> <span m='1554360'>could</span> <span
  m='1554530'>actually</span> <span m='1554840'>check.</span> <span
  m='1557260'>So</span> <span m='1557500'>that's</span> <span
  m='1557740'>proving</span> <span m='1558100'>that</span> <span
  m='1558190'>your</span> <span m='1558290'>problem</span> <span
  m='1558550'>is</span> <span m='1558680'>in</span> <span m='1558780'>NP.</span>
  <span m='1559110'>It's</span> <span m='1559250'>sort</span> <span
  m='1559470'>of</span> <span m='1559540'>an</span> <span
  m='1559620'>algorithmic</span> <span m='1560280'>thing.</span> </p><p><span
  m='1561660'>The</span> <span m='1561760'>second</span> <span
  m='1562080'>part</span> <span m='1562320'>is</span> <span
  m='1562450'>all</span> <span m='1562590'>about</span> <span
  m='1562830'>reductions.</span> <span m='1563490'>Now</span> <span
  m='1563590'>the</span> <span m='1563680'>definition</span> <span
  m='1564320'>says</span> <span m='1564770'>that</span> <span
  m='1564920'>I</span> <span m='1565060'>should</span> <span
  m='1565270'>reduce</span> <span m='1565770'>every</span> <span
  m='1566230'>problem</span> <span m='1566700'>in</span> <span
  m='1567050'>NP</span> <span m='1567750'>to</span> <span m='1568010'>my</span>
  <span m='1568170'>problem</span> <span m='1568580'>X.</span> <span
  m='1569070'>That's</span> <span m='1569380'>tedious,</span> <span
  m='1569770'>because</span> <span m='1569970'>there</span> <span
  m='1570120'>are</span> <span m='1570150'>a</span> <span m='1570210'>lot</span>
  <span m='1570470'>of</span> <span m='1570550'>problems</span> <span
  m='1570940'>in</span> <span m='1571020'>the</span> <span
  m='1571090'>world.</span> <span m='1571610'>So</span> <span
  m='1572330'>I</span> <span m='1572450'>don't</span> <span
  m='1572570'>want</span> <span m='1572690'>to</span> <span
  m='1572750'>do</span> <span m='1572830'>it</span> <span m='1572900'>for</span>
  <span m='1573060'>every</span> <span m='1573410'>problem</span> <span
  m='1573730'>in</span> <span m='1573810'>NP.</span> <span
  m='1574530'>I'd</span> <span m='1574720'>like</span> <span
  m='1574920'>to</span> <span m='1575040'>just</span> <span
  m='1575210'>do</span> <span m='1575320'>it</span> <span m='1575400'>for</span>
  <span m='1575550'>one.</span> </p><p><span m='1576030'>Now</span> <span
  m='1576430'>if</span> <span m='1576600'>I</span> <span
  m='1576680'>reduce</span> <span m='1576990'>sorting</span> <span
  m='1577460'>to</span> <span m='1577570'>my</span> <span
  m='1577710'>problem,</span> <span m='1578180'>that's</span> <span
  m='1578340'>not</span> <span m='1578500'>very</span> <span
  m='1578700'>interesting.</span> <span m='1579160'>It says</span> <span
  m='1579380'>my</span> <span m='1579520'>problem</span> <span
  m='1579830'>is</span> <span m='1579940'>at</span> <span
  m='1580030'>least</span> <span m='1580280'>as</span> <span
  m='1580370'>hard</span> <span m='1580580'>as</span> <span
  m='1580660'>sorting.</span> <span m='1582980'>But</span> <span
  m='1583150'>I</span> <span m='1583210'>already</span> <span
  m='1583380'>know</span> <span m='1583540'>how</span> <span
  m='1583610'>to</span> <span m='1583690'>solve</span> <span
  m='1583960'>sorting.</span> <span m='1584940'>But</span> <span
  m='1585330'>if</span> <span m='1585530'>I</span> <span
  m='1585750'>start</span> <span m='1586280'>from</span> <span
  m='1586560'>an</span> <span m='1586630'>NP-complete</span> <span
  m='1587460'>problem,</span> <span m='1588960'>then</span> <span
  m='1589160'>I</span> <span m='1589350'>know,</span> <span
  m='1589880'>by</span> <span m='1590040'>the</span> <span
  m='1590130'>definition,</span> <span m='1590710'>that</span> <span
  m='1590920'>every</span> <span m='1591350'>problem</span> <span
  m='1591810'>in</span> <span m='1591900'>NP</span> <span m='1592720'>can</span>
  <span m='1592960'>be</span> <span m='1593090'>reduced</span> <span
  m='1593470'>to</span> <span m='1593560'>that</span> <span
  m='1593770'>problem.</span> <span m='1594550'>And</span> <span
  m='1594700'>if</span> <span m='1594840'>I</span> <span m='1595040'>show</span>
  <span m='1595270'>how</span> <span m='1595370'>to</span> <span
  m='1595460'>reduce</span> <span m='1595780'>the</span> <span
  m='1595880'>NP-complete</span> <span m='1596410'>problem</span> <span
  m='1596760'>to</span> <span m='1596900'>me,</span> <span
  m='1597770'>then</span> <span m='1597950'>I</span> <span
  m='1598010'>know</span> <span m='1598180'>that</span> <span
  m='1598340'>I'm</span> <span m='1598590'>NP-complete</span> <span
  m='1599140'>too.</span> <span m='1599830'>Because</span> <span
  m='1600300'>if</span> <span m='1600450'>I</span> <span m='1600590'>have</span>
  <span m='1601060'>any</span> <span m='1601890'>problem</span> <span
  m='1602160'>Z</span> <span m='1602430'>in</span> <span m='1602867'>NP,</span>
  <span m='1604180'>by</span> <span m='1604320'>the</span> <span
  m='1604420'>definition</span> <span m='1604850'>of</span> <span
  m='1604950'>NP-complete</span> <span m='1605480'>of</span> <span
  m='1605570'>Y</span> <span m='1605920'>I</span> <span m='1606130'>can</span>
  <span m='1606310'>reduce</span> <span m='1606770'>that</span> <span
  m='1607650'>to</span> <span m='1607800'>Y.</span> <span m='1609510'>And</span>
  <span m='1609730'>then</span> <span m='1610030'>if</span> <span
  m='1610760'>I</span> <span m='1610830'>can</span> <span
  m='1610990'>build</span> <span m='1611210'>a</span> <span
  m='1611250'>reduction</span> <span m='1611800'>from</span> <span
  m='1612030'>Y</span> <span m='1612190'>to</span> <span m='1612290'>X,</span>
  <span m='1613330'>then</span> <span m='1614050'>I</span> <span
  m='1614190'>get</span> <span m='1614360'>this</span> <span
  m='1614540'>reduction.</span> <span m='1615520'>And</span> <span
  m='1615690'>so</span> <span m='1615800'>that</span> <span
  m='1615970'>means</span> <span m='1616160'>I</span> <span
  m='1616240'>can</span> <span m='1616400'>convert</span> <span
  m='1616860'>any</span> <span m='1617140'>problem</span> <span
  m='1617550'>in</span> <span m='1617780'>NP</span> <span m='1618380'>to</span>
  <span m='1618510'>my</span> <span m='1618660'>problem</span> <span
  m='1619040'>X,</span> <span m='1619270'>which</span> <span
  m='1619480'>means</span> <span m='1620170'>X</span> <span
  m='1620450'>is</span> <span m='1620570'>NP-hard.</span> <span
  m='1621310'>That's</span> <span m='1621550'>the</span> <span
  m='1621610'>definition.</span> </p><p><span m='1623190'>So</span> <span
  m='1624220'>all</span> <span m='1624500'>this</span> <span
  m='1624670'>is</span> <span m='1624800'>to</span> <span m='1624920'>say</span>
  <span m='1625760'>the</span> <span m='1625890'>first</span> <span
  m='1626380'>time</span> <span m='1626650'>you</span> <span
  m='1626730'>prove</span> <span m='1626930'>a</span> <span
  m='1626980'>problem</span> <span m='1627350'>is</span> <span
  m='1627480'>NP-complete</span> <span m='1628860'>in</span> <span
  m='1629090'>the</span> <span m='1629170'>world--</span> <span
  m='1629600'>this</span> <span m='1629740'>happened</span> <span
  m='1630080'>in</span> <span m='1630440'>the</span> <span
  m='1630640'>'70s</span> <span m='1632690'>by</span> <span
  m='1632900'>Cook.</span> <span m='1634700'>Basically</span> <span
  m='1635360'>he</span> <span m='1635540'>proved</span> <span
  m='1635820'>that</span> <span m='1635960'>3SAT</span> <span
  m='1636520'>is</span> <span m='1636680'>NP-complete.</span> <span
  m='1639970'>That</span> <span m='1640200'>was</span> <span
  m='1640320'>annoying,</span> <span m='1640740'>because</span> <span
  m='1640910'>he</span> <span m='1641000'>had</span> <span m='1641100'>to</span>
  <span m='1641160'>start</span> <span m='1641380'>from</span> <span
  m='1641570'>any</span> <span m='1642200'>problem</span> <span
  m='1642550'>in</span> <span m='1642630'>NP,</span> <span
  m='1643030'>and</span> <span m='1643150'>he</span> <span
  m='1643210'>had</span> <span m='1643330'>to</span> <span
  m='1643410'>show</span> <span m='1643670'>that</span> <span
  m='1643780'>you</span> <span m='1643870'>could</span> <span
  m='1644020'>reduce</span> <span m='1644370'>any</span> <span
  m='1644570'>problem</span> <span m='1644870'>in</span> <span
  m='1644950'>NP</span> <span m='1645230'>to</span> <span
  m='1645370'>3SAT.</span> </p><p><span m='1646810'>But</span> <span
  m='1647110'>now</span> <span m='1647320'>that that</span> <span
  m='1647620'>hard</span> <span m='1647820'>work</span> <span
  m='1648020'>is</span> <span m='1648140'>done,</span> <span
  m='1648740'>our</span> <span m='1648900'>life</span> <span
  m='1649110'>is</span> <span m='1649210'>much</span> <span
  m='1649430'>easier.</span> <span m='1649820'>And</span> <span
  m='1650170'>in</span> <span m='1650260'>this</span> <span
  m='1650400'>class</span> <span m='1650710'>all</span> <span
  m='1650940'>you</span> <span m='1651030'>need</span> <span
  m='1651190'>to</span> <span m='1651270'>think</span> <span
  m='1651470'>about</span> <span m='1651780'>is</span> <span
  m='1651890'>picking</span> <span m='1652660'>your</span> <span
  m='1652840'>favorite</span> <span m='1653350'>NP-complete</span> <span
  m='1653880'>problem.</span> <span m='1654620'>3SAT's</span> <span
  m='1655130'>a</span> <span m='1655180'>good</span> <span
  m='1655350'>choice</span> <span m='1655690'>for</span> <span
  m='1655850'>almost</span> <span m='1656120'>anything,</span> <span
  m='1656900'>but</span> <span m='1657100'>we'll</span> <span
  m='1657190'>see</span> <span m='1657340'>a</span> <span
  m='1657390'>bunch</span> <span m='1657610'>of</span> <span
  m='1657730'>other</span> <span m='1657890'>problems</span> <span
  m='1658740'>today</span> <span m='1659290'>from</span> <span
  m='1659520'>here.</span> <span m='1660190'>And</span> <span
  m='1660350'>then</span> <span m='1660500'>reduce</span> <span
  m='1661460'>from</span> <span m='1662170'>that</span> <span
  m='1662490'>known</span> <span m='1662840'>problem</span> <span
  m='1663650'>to</span> <span m='1663790'>your</span> <span
  m='1664100'>problem</span> <span m='1664520'>that</span> <span
  m='1664620'>you're</span> <span m='1664720'>trying</span> <span
  m='1664970'>to</span> <span m='1665060'>prove</span> <span
  m='1665340'>is</span> <span m='1665470'>NP-hard.</span> <span
  m='1666690'>If</span> <span m='1666760'>you</span> <span
  m='1666840'>can</span> <span m='1666970'>do</span> <span
  m='1667100'>that,</span> <span m='1667370'>you</span> <span
  m='1667470'>know</span> <span m='1667590'>your</span> <span
  m='1667710'>problem</span> <span m='1668010'>is</span> <span
  m='1668270'>NP-hard.</span> <span m='1670220'>So</span> <span
  m='1670490'>we</span> <span m='1670560'>only</span> <span
  m='1670740'>need</span> <span m='1670930'>one</span> <span
  m='1671180'>reduction</span> <span m='1671720'>for</span> <span
  m='1671870'>each</span> <span m='1672130'>hardness</span> <span
  m='1672490'>result,</span> <span m='1672890'>which</span> <span
  m='1673050'>is</span> <span m='1673140'>nice.</span> </p><p><span
  m='1673470'>And</span> <span m='1673640'>this</span> <span
  m='1673810'>picture</span> <span m='1674720'>is</span> <span
  m='1674990'>a</span> <span m='1675030'>collection</span> <span
  m='1675400'>of</span> <span m='1675490'>reductions.</span> <span
  m='1676060'>We're</span> <span m='1676150'>going</span> <span
  m='1676270'>to</span> <span m='1676340'>start</span> <span
  m='1676650'>from</span> <span m='1676810'>3SAT.</span> <span
  m='1677360'>I'm</span> <span m='1677450'>not</span> <span
  m='1677630'>going</span> <span m='1677750'>to</span> <span
  m='1677820'>prove</span> <span m='1678040'>that</span> <span
  m='1678150'>it's</span> <span m='1678280'>NP-complete,</span> <span
  m='1679010'>although I'll</span> <span m='1679240'>give</span> <span
  m='1679420'>you</span> <span m='1679550'>a</span> <span
  m='1679620'>hint</span> <span m='1679790'>as to</span> <span
  m='1679870'>why</span> <span m='1680070'>that's</span> <span
  m='1680290'>true.</span> <span m='1681150'>We're</span> <span
  m='1681270'>going</span> <span m='1681390'>to</span> <span
  m='1681450'>reduce</span> <span m='1681830'>it</span> <span
  m='1681950'>to</span> <span m='1682050'>Super</span> <span
  m='1682290'>Mario</span> <span m='1682540'>Brothers.</span> <span
  m='1682850'>We're</span> <span m='1682920'>going</span> <span
  m='1683040'>to</span> <span m='1683100'>reduce</span> <span
  m='1683410'>it</span> <span m='1683510'>to</span> <span
  m='1683870'>three</span> <span m='1684050'>dimensional</span> <span
  m='1684410'>matching.</span> <span m='1684890'>We're going</span> <span
  m='1685020'>to</span> <span m='1685090'>reduce</span> <span
  m='1685320'>three</span> <span m='1685480'>dimensional</span> <span
  m='1685820'>matching</span> <span m='1686290'>to</span> <span
  m='1686360'>subsets</span> <span m='1686790'>sum,</span> <span
  m='1687000'>to</span> <span m='1687100'>partition,</span> <span
  m='1687520'>to</span> <span m='1687560'>rectangle</span> <span
  m='1688090'>packing,</span> <span m='1688490'>to</span> <span
  m='1688570'>jig</span> <span m='1688810'>saw</span> <span
  m='1688920'>puzzles.</span> <span m='1690165'>And</span> <span
  m='1690580'>we're</span> <span m='1690700'>going</span> <span
  m='1690820'>to</span> <span m='1690890'>do</span> <span m='1691240'>all</span>
  <span m='1691420'>those</span> <span m='1691610'>reductions,</span> <span
  m='1692050'>hopefully.</span> <span m='1693310'>And</span> <span
  m='1695500'>that's</span> <span m='1695990'>proving</span> <span
  m='1697150'>NP-hardness</span> <span m='1697910'>of</span> <span
  m='1698010'>all</span> <span m='1698140'>those</span> <span
  m='1698300'>problems.</span> <span m='1698920'>They're</span> <span
  m='1699120'>also</span> <span m='1699350'>all</span> <span
  m='1699620'>in</span> <span m='1699810'>NP.</span> </p><p><span
  m='1704990'>So</span> <span m='1707970'>30</span> <span
  m='1708240'>second</span> <span m='1708570'>intuition</span> <span
  m='1709090'>why</span> <span m='1709440'>3SAT</span> <span
  m='1710280'>is</span> <span m='1710500'>NP-hard.</span> <span
  m='1711610'>Well,</span> <span m='1713000'>if</span> <span
  m='1713170'>you</span> <span m='1713280'>have</span> <span
  m='1713600'>any</span> <span m='1713860'>problem</span> <span
  m='1714290'>in</span> <span m='1714380'>NP,</span> <span
  m='1715310'>that</span> <span m='1715500'>means</span> <span
  m='1715740'>there</span> <span m='1715900'>is</span> <span
  m='1716810'>one</span> <span m='1716990'>of</span> <span
  m='1717090'>these</span> <span m='1718100'>nondeterministic</span> <span
  m='1719050'>polynomial</span> <span m='1719580'>time</span> <span
  m='1719830'>algorithms,</span> <span m='1721660'>or</span> <span
  m='1721870'>there</span> <span m='1722030'>is</span> <span
  m='1722840'>some</span> <span m='1723690'>verifier</span> <span
  m='1724590'>given</span> <span m='1724870'>a</span> <span
  m='1724930'>polynomial</span> <span m='1725450'>size</span> <span
  m='1725690'>certificate.</span> <span m='1726740'>So</span> <span
  m='1726930'>that</span> <span m='1727110'>verifier</span> <span
  m='1727660'>is</span> <span m='1727780'>just</span> <span
  m='1728010'>some</span> <span m='1728210'>algorithm.</span> <span
  m='1729250'>And</span> <span m='1730260'>software</span> <span
  m='1731010'>and</span> <span m='1731100'>hardware</span> <span
  m='1731390'>are</span> <span m='1731440'>basically</span> <span
  m='1731760'>the</span> <span m='1731840'>same</span> <span
  m='1732080'>thing,</span> <span m='1732360'>right?</span> <span
  m='1732570'>So</span> <span m='1732700'>you</span> <span
  m='1732780'>can</span> <span m='1732910'>convert</span> <span
  m='1733180'>that</span> <span m='1733350'>algorithm</span> <span
  m='1734200'>into</span> <span m='1734440'>a</span> <span
  m='1734480'>circuit</span> <span m='1735310'>that</span> <span
  m='1735490'>implements</span> <span m='1735910'>the</span> <span
  m='1736030'>algorithm.</span> <span m='1737150'>And</span> <span
  m='1737280'>if</span> <span m='1737390'>I</span> <span m='1737450'>have</span>
  <span m='1737560'>a</span> <span m='1737600'>circuit</span> <span
  m='1738100'>with</span> <span m='1738240'>like</span> <span
  m='1738440'>ANDs</span> <span m='1738710'>and</span> <span
  m='1738780'>ORs</span> <span m='1739000'>and</span> <span
  m='1739100'>NOTs,</span> <span m='1739840'>I</span> <span
  m='1739970'>can</span> <span m='1740110'>convert</span> <span
  m='1740490'>that</span> <span m='1740720'>into</span> <span
  m='1741150'>a</span> <span m='1741220'>Boolean</span> <span
  m='1741580'>formula</span> <span m='1742570'>with</span> <span
  m='1742760'>ANDs,</span> <span m='1743020'>ORs,</span> <span
  m='1743220'>and</span> <span m='1743310'>NOTs.</span> <span
  m='1743510'>Circuits</span> <span m='1743980'>and</span> <span
  m='1744090'>formulas</span> <span m='1744560'>are</span> <span
  m='1744610'>about</span> <span m='1744830'>the</span> <span
  m='1744900'>same.</span> </p><p><span m='1746030'>And</span> <span
  m='1746180'>if</span> <span m='1746270'>I</span> <span m='1746320'>have</span>
  <span m='1746480'>a</span> <span m='1746520'>formula--</span> <span
  m='1747960'>fun</span> <span m='1748300'>fact,</span> <span
  m='1748710'>although this</span> <span m='1748980'>is</span> <span
  m='1749080'>a</span> <span m='1749170'>little</span> <span
  m='1749340'>less</span> <span m='1749550'>obvious--</span> <span
  m='1750040'>you</span> <span m='1750070'>can</span> <span
  m='1750230'>convert</span> <span m='1750640'>it</span> <span
  m='1750810'>into</span> <span m='1751050'>this</span> <span
  m='1751280'>form,</span> <span m='1752580'>an</span> <span
  m='1752860'>AND</span> <span m='1753700'>of</span> <span
  m='1754380'>triple</span> <span m='1754810'>ORs.</span> <span
  m='1757120'>And</span> <span m='1757450'>once</span> <span
  m='1757700'>you've</span> <span m='1757810'>done</span> <span
  m='1757990'>that,</span> <span m='1758220'>that</span> <span
  m='1758410'>formula</span> <span m='1758850'>is</span> <span
  m='1758960'>equivalent</span> <span m='1759530'>to</span> <span
  m='1759640'>the</span> <span m='1759770'>original</span> <span
  m='1760200'>algorithm.</span> <span m='1762120'>And</span> <span
  m='1762610'>the</span> <span m='1762940'>inputs</span> <span
  m='1763590'>to</span> <span m='1764700'>that</span> <span
  m='1764890'>verification</span> <span m='1765470'>algorithm,</span> <span
  m='1765840'>the</span> <span m='1765930'>certificate,</span> <span
  m='1766560'>are</span> <span m='1766660'>represented</span> <span
  m='1767240'>by</span> <span m='1767370'>these</span> <span
  m='1767550'>variables,</span> <span m='1768050'>the</span> <span
  m='1768140'>xi's.</span> <span m='1769220'>And</span> <span
  m='1769390'>so</span> <span m='1769530'>deciding</span> <span
  m='1770160'>whether</span> <span m='1770400'>there's</span> <span
  m='1770580'>some</span> <span m='1770900'>way</span> <span
  m='1771040'>to</span> <span m='1771110'>set</span> <span
  m='1771330'>the</span> <span m='1771430'>xi's</span> <span
  m='1771890'>to</span> <span m='1771990'>make</span> <span
  m='1772150'>the</span> <span m='1772210'>formula</span> <span
  m='1772610'>true</span> <span m='1773160'>is</span> <span
  m='1773400'>the</span> <span m='1773480'>same</span> <span
  m='1773750'>thing</span> <span m='1773960'>as</span> <span
  m='1774060'>saying</span> <span m='1774420'>is</span> <span
  m='1774650'>there</span> <span m='1774770'>some</span> <span
  m='1775520'>certificate</span> <span m='1776780'>where</span> <span
  m='1777040'>the</span> <span m='1777130'>verifier</span> <span
  m='1777660'>says</span> <span m='1777900'>yes,</span> <span
  m='1778560'>which</span> <span m='1778760'>is</span> <span
  m='1778860'>the</span> <span m='1778930'>same</span> <span
  m='1779200'>thing</span> <span m='1779410'>as</span> <span
  m='1779510'>saying</span> <span m='1780220'>that</span> <span
  m='1781460'>the</span> <span m='1781590'>problem</span> <span
  m='1782120'>has</span> <span m='1782360'>answer</span> <span
  m='1782640'>yes.</span> <span m='1784120'>So</span> <span
  m='1784340'>given</span> <span m='1784630'>an</span> <span
  m='1784740'>NP</span> <span m='1785130'>algorithm,</span> <span
  m='1786360'>one</span> <span m='1786520'>of</span> <span
  m='1786580'>these</span> <span m='1786690'>nondeterministic</span> <span
  m='1787410'>funny</span> <span m='1787670'>algorithms,</span> <span
  m='1788080'>we</span> <span m='1788180'>can</span> <span
  m='1788310'>convert</span> <span m='1788640'>it</span> <span
  m='1788780'>into</span> <span m='1789160'>a</span> <span
  m='1789550'>formula</span> <span m='1790070'>satisfaction</span> <span
  m='1790700'>problem.</span> <span m='1791670'>And</span> <span
  m='1791750'>that's</span> <span m='1792080'>how</span> <span
  m='1792420'>you</span> <span m='1792540'>prove</span> <span
  m='1792820'>3SAT</span> <span m='1793190'>is</span> <span
  m='1793400'>NP-complete.</span> <span m='1793800'>But</span> <span
  m='1793950'>to</span> <span m='1794050'>do</span> <span
  m='1794220'>that</span> <span m='1794460'>can</span> <span
  m='1794590'>take</span> <span m='1794960'>many</span> <span
  m='1795220'>lectures,</span> <span m='1795680'>so</span> <span
  m='1796930'>I'm</span> <span m='1797050'>not</span> <span
  m='1797230'>going</span> <span m='1797350'>to</span> <span
  m='1797570'>do</span> <span m='1797690'>the</span> <span
  m='1797790'>details.</span> <span m='1801230'>The</span> <span
  m='1801340'>main</span> <span m='1801580'>annoying</span> <span
  m='1801860'>part</span> <span m='1802070'>is</span> <span
  m='1802200'>being</span> <span m='1802400'>formal</span> <span
  m='1802780'>about</span> <span m='1803020'>what</span> <span
  m='1803160'>exactly</span> <span m='1803570'>an</span> <span
  m='1803740'>algorithm</span> <span m='1804240'>is,</span> <span
  m='1805090'>which</span> <span m='1805500'>we</span> <span
  m='1805620'>don't</span> <span m='1805800'>do</span> <span
  m='1805920'>in</span> <span m='1806000'>this</span> <span
  m='1806140'>class.</span> <span m='1808220'>If</span> <span
  m='1808280'>you're</span> <span m='1808370'>interested,</span> <span
  m='1808680'>take</span> <span m='1808880'>6.045,</span> <span
  m='1811820'>which</span> <span m='1812090'>is</span> <span
  m='1812420'>some</span> <span m='1812660'>people</span> <span
  m='1812930'>are</span> <span m='1813050'>actually</span> <span
  m='1813350'>in</span> <span m='1813440'>the</span> <span
  m='1813500'>overlap</span> <span m='1813810'>this</span> <span
  m='1814000'>semester.</span> </p><p><span m='1816120'>Cool.</span> <span
  m='1816550'>Let's</span> <span m='1816950'>do</span> <span
  m='1817090'>some</span> <span m='1817310'>reductions.</span> <span
  m='1817850'>This</span> <span m='1818020'>is</span> <span
  m='1818150'>where</span> <span m='1818280'>things</span> <span
  m='1818550'>get</span> <span m='1818700'>fun.</span> <span
  m='1819500'>So</span> <span m='1819740'>we're</span> <span
  m='1819840'>going</span> <span m='1819970'>to</span> <span
  m='1820050'>start</span> <span m='1820440'>with</span> <span
  m='1821490'>reducing</span> <span m='1822110'>3SAT</span> <span
  m='1823230'>to</span> <span m='1823490'>Super</span> <span
  m='1823790'>Mario</span> <span m='1824100'>Brothers.</span> <span
  m='1827400'>So</span> <span m='1828580'>how</span> <span
  m='1828760'>many</span> <span m='1828930'>people</span> <span
  m='1829380'>have</span> <span m='1829570'>played</span> <span
  m='1829840'>Super</span> <span m='1830100'>Mario</span> <span
  m='1830350'>Brothers?</span> <span m='1831320'>Easy</span> <span
  m='1831680'>one.</span> <span m='1831880'>I</span> <span
  m='1831960'>hope</span> <span m='1832170'>if</span> <span
  m='1832300'>you</span> <span m='1832390'>haven't</span> <span
  m='1832640'>played,</span> <span m='1832910'>you've</span> <span
  m='1833050'>seen</span> <span m='1833260'>it,</span> <span
  m='1833930'>because</span> <span m='1834130'>we're</span> <span
  m='1834210'>going</span> <span m='1834330'>to</span> <span
  m='1834420'>rely</span> <span m='1834780'>very</span> <span
  m='1834980'>much</span> <span m='1835330'>on</span> <span
  m='1835510'>Super</span> <span m='1835770'>Mario</span> <span
  m='1836020'>Brothers</span> <span m='1836310'>physics,</span> <span
  m='1836840'>which</span> <span m='1837510'>I</span> <span
  m='1837630'>hope</span> <span m='1837810'>is</span> <span
  m='1837920'>fairly</span> <span m='1838190'>intuitive.</span> <span
  m='1838720'>But</span> <span m='1839790'>if</span> <span
  m='1839850'>you</span> <span m='1839930'>haven't</span> <span
  m='1840160'>played,</span> <span m='1840450'>you</span> <span
  m='1840550'>should,</span> <span m='1841550'>obviously.</span> <span
  m='1846180'>And</span> <span m='1846550'>we're</span> <span
  m='1846750'>going</span> <span m='1847020'>to</span> <span
  m='1847180'>reduce</span> <span m='1848080'>3SAT</span> <span
  m='1849350'>to</span> <span m='1849520'>Super</span> <span
  m='1849820'>Mario</span> <span m='1850110'>Brothers.</span> </p><p><span
  m='1864480'>Now</span> <span m='1867580'>this</span> <span
  m='1868160'>is</span> <span m='1868290'>a</span> <span
  m='1868660'>theorem</span> <span m='1869160'>by</span> <span
  m='1870580'>a</span> <span m='1871160'>bunch</span> <span
  m='1871380'>of</span> <span m='1871470'>people,</span> <span
  m='1871920'>one</span> <span m='1872540'>MIT</span> <span
  m='1873180'>grad</span> <span m='1873440'>student,</span> <span
  m='1874230'>myself,</span> <span m='1874900'>and</span> <span
  m='1875090'>a</span> <span m='1875120'>couple</span> <span
  m='1875390'>other</span> <span m='1875550'>collaborators</span> <span
  m='1877590'>not</span> <span m='1877820'>at</span> <span
  m='1877890'>MIT.</span> <span m='1879550'>And</span> <span
  m='1880210'>of</span> <span m='1880320'>course</span> <span
  m='1880890'>this</span> <span m='1881110'>result</span> <span
  m='1881430'>holds</span> <span m='1881670'>for</span> <span
  m='1881870'>all</span> <span m='1882150'>versions</span> <span
  m='1882510'>of</span> <span m='1882600'>Super</span> <span
  m='1882860'>Mario</span> <span m='1883220'>Brothers</span> <span
  m='1883730'>so</span> <span m='1883910'>far</span> <span
  m='1884170'>released,</span> <span m='1885150'>I</span> <span
  m='1885250'>think.</span> <span m='1886880'>The</span> <span
  m='1887030'>proofs</span> <span m='1887350'>are</span> <span
  m='1887420'>a</span> <span m='1887480'>little</span> <span
  m='1887670'>bit</span> <span m='1887820'>different</span> <span
  m='1888110'>for</span> <span m='1888210'>each</span> <span
  m='1888430'>one,</span> <span m='1888590'>especially</span> <span
  m='1889070'>Mario</span> <span m='1889420'>2,</span> <span
  m='1889690'>which</span> <span m='1889890'>is</span> <span
  m='1890490'>its</span> <span m='1890650'>own</span> <span
  m='1890820'>universe.</span> <span m='1893710'>What</span> <span
  m='1893930'>I'm</span> <span m='1894050'>going</span> <span
  m='1894180'>to</span> <span m='1894370'>talk</span> <span
  m='1894580'>about</span> <span m='1894880'>the</span> <span
  m='1895010'>original</span> <span m='1895530'>Super</span> <span
  m='1895830'>Mario</span> <span m='1896080'>Brothers,</span> <span
  m='1896430'>NES</span> <span m='1897220'>classic</span> <span
  m='1897720'>which</span> <span m='1898080'>I</span> <span
  m='1898670'>grew</span> <span m='1898810'>up</span> <span
  m='1898920'>with.</span> </p><p><span m='1902020'>Now</span> <span
  m='1902310'>the</span> <span m='1902420'>real</span> <span
  m='1902950'>Super</span> <span m='1903290'>Mario</span> <span
  m='1903580'>Brothers</span> <span m='1903970'>is</span> <span m='1904170'>on
  a</span> <span m='1904490'>320</span> <span m='1905240'>by</span> <span
  m='1905430'>240</span> <span m='1905910'>screen.</span> <span
  m='1906450'>It's</span> <span m='1906610'>a</span> <span
  m='1906680'>little</span> <span m='1906890'>bit</span> <span
  m='1907030'>small.</span> <span m='1907480'>Once</span> <span
  m='1907750'>you</span> <span m='1907830'>go</span> <span
  m='1908000'>right,</span> <span m='1908280'>you</span> <span
  m='1908350'>can't</span> <span m='1908600'>go</span> <span
  m='1908710'>back</span> <span m='1909000'>left,</span> <span
  m='1910150'>except</span> <span m='1910500'>in</span> <span
  m='1910620'>the</span> <span m='1910690'>maze</span> <span
  m='1911110'>levels</span> <span m='1911460'>anyway.</span> <span
  m='1913020'>So</span> <span m='1913650'>I</span> <span m='1913830'>need</span>
  <span m='1914000'>to</span> <span m='1914090'>generalize</span> <span
  m='1914650'>a</span> <span m='1914720'>little</span> <span
  m='1914980'>bit.</span> <span m='1915190'>Because</span> <span
  m='1915880'>if</span> <span m='1916070'>you</span> <span
  m='1916280'>assume</span> <span m='1916690'>that</span> <span
  m='1916850'>the</span> <span m='1917350'>screen</span> <span
  m='1917690'>size</span> <span m='1918000'>of</span> <span
  m='1918080'>Super</span> <span m='1918320'>Mario</span> <span
  m='1918540'>Brothers</span> <span m='1918850'>is</span> <span
  m='1918990'>constant,</span> <span m='1919870'>in</span> <span
  m='1920010'>fact</span> <span m='1920300'>you</span> <span
  m='1920380'>can</span> <span m='1920530'>dynamic</span> <span
  m='1920910'>program</span> <span m='1921260'>your</span> <span
  m='1921380'>way</span> <span m='1921530'>through</span> <span
  m='1921770'>and</span> <span m='1921860'>find</span> <span
  m='1922060'>the</span> <span m='1922140'>optimal</span> <span
  m='1922460'>solution</span> <span m='1922890'>in</span> <span
  m='1923050'>polynomial</span> <span m='1923530'>time.</span> </p><p><span
  m='1924670'>So</span> <span m='1924940'>I</span> <span m='1925020'>need</span>
  <span m='1925180'>to</span> <span m='1925270'>generalize</span> <span
  m='1925770'>a</span> <span m='1925830'>little</span> <span
  m='1926050'>bit</span> <span m='1929590'>to</span> <span
  m='1931690'>arbitrary</span> <span m='1932270'>board</span> <span
  m='1932510'>size,</span> <span m='1933080'>arbitrary</span> <span
  m='1933610'>screen</span> <span m='1933890'>size.</span> <span
  m='1935640'>So</span> <span m='1935810'>in</span> <span
  m='1935900'>fact,</span> <span m='1936310'>my</span> <span
  m='1936420'>entire</span> <span m='1937000'>level</span> <span
  m='1937820'>will</span> <span m='1937980'>be</span> <span
  m='1938150'>in</span> <span m='1938260'>one</span> <span
  m='1938620'>screen,</span> <span m='1940320'>no</span> <span
  m='1940490'>scrolling.</span> <span m='1942010'>Never</span> <span
  m='1942240'>mind</span> <span m='1942490'>this</span> <span
  m='1942640'>is</span> <span m='1942770'>a</span> <span m='1942840'>side</span>
  <span m='1943120'>scrolling</span> <span m='1943480'>adventure.</span> <span
  m='1944890'>And</span> <span m='1945790'>so</span> <span
  m='1946040'>that's</span> <span m='1946290'>my</span> <span
  m='1946440'>generalized</span> <span m='1946850'>problem.</span> <span
  m='1947160'>And</span> <span m='1947290'>I</span> <span
  m='1947330'>claim</span> <span m='1947630'>this</span> <span
  m='1947870'>is</span> <span m='1947990'>NP-hard.</span> <span
  m='1948400'>If</span> <span m='1948480'>I</span> <span m='1948550'>give</span>
  <span m='1948780'>you</span> <span m='1948900'>a</span> <span
  m='1948950'>level</span> <span m='1949470'>and</span> <span
  m='1949630'>I</span> <span m='1950400'>ask</span> <span
  m='1950700'>you,</span> <span m='1950820'>can</span> <span
  m='1951250'>you</span> <span m='1951980'>get</span> <span
  m='1952250'>to</span> <span m='1952370'>the</span> <span
  m='1952500'>end</span> <span m='1952690'>of</span> <span
  m='1952760'>this</span> <span m='1952930'>level?</span> <span
  m='1954070'>That</span> <span m='1954310'>problem</span> <span
  m='1954610'>is</span> <span m='1954770'>NP-hard.</span> <span
  m='1956890'>Also</span> <span m='1957360'>no</span> <span
  m='1957500'>time</span> <span m='1957790'>limit.</span> <span
  m='1958410'>The</span> <span m='1958690'>time</span> <span
  m='1958890'>limit</span> <span m='1959100'>would</span> <span
  m='1959230'>be</span> <span m='1959350'>OK,</span> <span
  m='1959740'>but</span> <span m='1959860'>you</span> <span
  m='1959920'>have</span> <span m='1960010'>to</span> <span
  m='1960090'>generalize</span> <span m='1960610'>it.</span> <span
  m='1960700'>Instead</span> <span m='1960980'>of</span> <span
  m='1961620'>300</span> <span m='1962050'>seconds</span> <span
  m='1962440'>or</span> <span m='1962480'>whatever,</span> <span
  m='1963240'>it</span> <span m='1963440'>has</span> <span m='1963630'>to</span>
  <span m='1963730'>be</span> <span m='1963870'>an</span> <span
  m='1963950'>arbitrary</span> <span m='1964620'>value.</span> </p><p><span
  m='1967370'>So</span> <span m='1967700'>how</span> <span m='1967870'>are
  we</span> <span m='1967940'>going</span> <span m='1968070'>to</span> <span
  m='1968130'>do</span> <span m='1968240'>this?</span> <span
  m='1968410'>We're</span> <span m='1968510'>going</span> <span
  m='1968640'>to</span> <span m='1968720'>reduce</span> <span
  m='1969560'>from</span> <span m='1969870'>3SAT</span> <span
  m='1971030'>to</span> <span m='1971150'>Super</span> <span
  m='1971440'>Mario</span> <span m='1971760'>Brothers.</span> <span
  m='1972100'>So</span> <span m='1972220'>that</span> <span
  m='1972390'>means</span> <span m='1972570'>I'm</span> <span
  m='1972860'>given--</span> <span m='1973630'>I</span> <span
  m='1973730'>don't</span> <span m='1973920'>get</span> <span
  m='1974060'>to</span> <span m='1974140'>choose.</span> <span
  m='1974480'>I'm</span> <span m='1974610'>given</span> <span
  m='1974900'>one</span> <span m='1975060'>of</span> <span
  m='1975130'>these</span> <span m='1975300'>formulas.</span> <span
  m='1976470'>And</span> <span m='1976570'>I</span> <span
  m='1976620'>have</span> <span m='1976790'>to</span> <span
  m='1976890'>convert</span> <span m='1977340'>it</span> <span
  m='1977480'>into</span> <span m='1977740'>an</span> <span
  m='1977810'>equivalent</span> <span m='1978730'>Super</span> <span
  m='1979090'>Mario</span> <span m='1979430'>Brother</span> <span
  m='1979800'>instance.</span> <span m='1980550'>So</span> <span
  m='1980750'>I</span> <span m='1980840'>have</span> <span m='1981030'>to</span>
  <span m='1981150'>convert</span> <span m='1981530'>it</span> <span
  m='1981660'>into</span> <span m='1982220'>a</span> <span
  m='1982320'>level,</span> <span m='1983260'>a</span> <span
  m='1983390'>hypothetical</span> <span m='1984030'>level</span> <span
  m='1984300'>of</span> <span m='1984380'>Super</span> <span
  m='1984630'>Mario</span> <span m='1984850'>Brothers.</span> <span
  m='1985310'>Given</span> <span m='1985830'>a</span> <span
  m='1986030'>formula,</span> <span m='1986820'>I</span> <span
  m='1986890'>have</span> <span m='1987010'>to</span> <span
  m='1987100'>build</span> <span m='1987320'>a</span> <span
  m='1987360'>level</span> <span m='1987730'>that</span> <span
  m='1988000'>implements</span> <span m='1988540'>that</span> <span
  m='1988720'>formula.</span> </p><p><span m='1991150'>So</span> <span
  m='1992020'>here's</span> <span m='1992260'>what</span> <span
  m='1992400'>it's</span> <span m='1992510'>going</span> <span
  m='1992630'>to</span> <span m='1992690'>look</span> <span
  m='1992900'>like.</span> <span m='1993230'>I'm</span> <span
  m='1993370'>going</span> <span m='1993490'>to</span> <span
  m='1993560'>start</span> <span m='1993890'>out</span> <span
  m='1994700'>somewhere.</span> <span m='1995300'>Here's</span> <span
  m='1996650'>my</span> <span m='1996810'>drawing</span> <span
  m='1997150'>of</span> <span m='1997240'>Mario.</span> <span
  m='1999180'>Mario--</span> <span m='2000780'>or</span> <span
  m='2001000'>you</span> <span m='2001120'>could</span> <span
  m='2001260'>play</span> <span m='2001430'>Luigi.</span> <span
  m='2001840'>It</span> <span m='2001920'>doesn't</span> <span
  m='2002190'>matter.</span> <span m='2003920'>First</span> <span
  m='2004240'>thing</span> <span m='2004380'>it's</span> <span
  m='2004490'>going</span> <span m='2004620'>to</span> <span
  m='2004700'>do</span> <span m='2004840'>is</span> <span
  m='2004970'>enter</span> <span m='2005300'>a</span> <span
  m='2005370'>little</span> <span m='2005560'>black</span> <span
  m='2005850'>box</span> <span m='2006190'>called</span> <span
  m='2006900'>a</span> <span m='2007000'>variable.</span> <span
  m='2009220'>This</span> <span m='2009460'>is</span> <span
  m='2009550'>supposed</span> <span m='2009920'>to</span> <span
  m='2010010'>represent,</span> <span m='2010890'>let's</span> <span
  m='2011090'>call</span> <span m='2011300'>it</span> <span
  m='2011440'>x1.</span> <span m='2013800'>And</span> <span
  m='2014070'>so</span> <span m='2014210'>it's</span> <span
  m='2014510'>some</span> <span m='2014860'>black</span> <span
  m='2015190'>box.</span> <span m='2015450'>I'm</span> <span
  m='2015510'>going</span> <span m='2015630'>to</span> <span
  m='2015700'>tell</span> <span m='2015830'>you</span> <span
  m='2015910'>what</span> <span m='2016050'>it</span> <span
  m='2016140'>is</span> <span m='2016270'>in</span> <span m='2016340'>a</span>
  <span m='2016370'>moment.</span> <span m='2016910'>And</span> <span
  m='2017120'>it</span> <span m='2017180'>has</span> <span
  m='2017400'>two</span> <span m='2017640'>outputs.</span> <span
  m='2018180'>There's</span> <span m='2018400'>the</span> <span
  m='2018490'>true</span> <span m='2019070'>output</span> <span
  m='2019710'>and</span> <span m='2019870'>the</span> <span
  m='2019930'>false</span> <span m='2020300'>output.</span> <span
  m='2021020'>And</span> <span m='2021120'>the</span> <span
  m='2021190'>idea</span> <span m='2021500'>is</span> <span
  m='2021810'>that</span> <span m='2021970'>Mario</span> <span
  m='2022330'>has</span> <span m='2022490'>to</span> <span
  m='2022590'>choose</span> <span m='2022930'>whether</span> <span
  m='2023200'>to</span> <span m='2023280'>set</span> <span m='2023580'>x1</span>
  <span m='2024040'>to</span> <span m='2024130'>true</span> <span
  m='2024470'>or</span> <span m='2024570'>false.</span> <span
  m='2026470'>Let</span> <span m='2026590'>me</span> <span
  m='2026710'>show</span> <span m='2026900'>you</span> <span
  m='2027010'>that</span> <span m='2027220'>gadget.</span> </p><p><span
  m='2032326'>So</span> <span m='2032800'>here's</span> <span
  m='2033250'>the--</span> <span m='2034540'>whoops,</span> <span
  m='2034930'>upside</span> <span m='2035220'>down--</span> <span
  m='2036670'>here</span> <span m='2036880'>is</span> <span
  m='2036990'>the</span> <span m='2037060'>variable</span> <span
  m='2037400'>gadget.</span> <span m='2039330'>So</span> <span
  m='2039710'>here's</span> <span m='2039870'>Mario.</span> <span
  m='2040950'>Could</span> <span m='2041190'>enter</span> <span
  m='2041470'>from</span> <span m='2041720'>this</span> <span
  m='2041890'>way</span> <span m='2042140'>or</span> <span
  m='2042210'>that</span> <span m='2042430'>way.</span> <span
  m='2042630'>We'll</span> <span m='2042820'>need</span> <span
  m='2043000'>a</span> <span m='2043030'>couple</span> <span
  m='2043320'>of</span> <span m='2043380'>entrances</span> <span
  m='2043830'>in</span> <span m='2043910'>a</span> <span
  m='2043950'>moment.</span> <span m='2044610'>And</span> <span
  m='2044830'>then</span> <span m='2045650'>falls</span> <span
  m='2045990'>down.</span> <span m='2046630'>Once</span> <span
  m='2047080'>Mario</span> <span m='2047360'>is</span> <span
  m='2047410'>down</span> <span m='2047620'>here,</span> <span
  m='2047830'>if</span> <span m='2047920'>you</span> <span
  m='2047990'>check</span> <span m='2048230'>the</span> <span
  m='2048300'>jump</span> <span m='2048560'>height,</span> <span
  m='2048760'>you</span> <span m='2048850'>cannot</span> <span
  m='2049270'>get</span> <span m='2049429'>back</span> <span
  m='2049699'>up</span> <span m='2049820'>to</span> <span
  m='2049909'>here.</span> <span m='2050199'>So</span> <span
  m='2050360'>this</span> <span m='2050480'>is</span> <span
  m='2050580'>like</span> <span m='2050730'>a</span> <span
  m='2050780'>one</span> <span m='2051020'>way.</span> </p><p><span
  m='2051600'>Once</span> <span m='2051920'>you're</span> <span
  m='2052010'>down</span> <span m='2052239'>here,</span> <span
  m='2052560'>you</span> <span m='2052690'>have</span> <span
  m='2052810'>a</span> <span m='2052850'>choice.</span> <span
  m='2053159'>Should</span> <span m='2053340'>I</span> <span
  m='2053409'>fall</span> <span m='2053750'>to</span> <span
  m='2053860'>the</span> <span m='2053929'>left</span> <span
  m='2054270'>or</span> <span m='2054400'>fall</span> <span
  m='2054679'>to</span> <span m='2054790'>the</span> <span
  m='2054880'>right?</span> <span m='2055270'>And</span> <span
  m='2055370'>if</span> <span m='2055469'>you</span> <span
  m='2055570'>make</span> <span m='2055670'>these</span> <span
  m='2056010'>falls</span> <span m='2056489'>large</span> <span
  m='2056780'>enough,</span> <span m='2058290'>once</span> <span
  m='2058600'>you</span> <span m='2058719'>fall,</span> <span
  m='2059150'>you</span> <span m='2059280'>can't</span> <span
  m='2059690'>unfall.</span> <span m='2061550'>So</span> <span
  m='2061940'>once</span> <span m='2062150'>you</span> <span
  m='2062230'>make</span> <span m='2062429'>a</span> <span
  m='2062570'>choice</span> <span m='2062989'>of</span> <span
  m='2063070'>whether</span> <span m='2063290'>I</span> <span
  m='2063389'>leave</span> <span m='2063679'>on</span> <span
  m='2063780'>the</span> <span m='2063860'>true</span> <span
  m='2064139'>exit</span> <span m='2064710'>or</span> <span
  m='2064880'>the</span> <span m='2065659'>false</span> <span
  m='2066090'>exit,</span> <span m='2066780'>that's</span> <span
  m='2067080'>a</span> <span m='2067360'>permanent</span> <span
  m='2067830'>choice.</span> <span m='2068230'>So</span> <span
  m='2068340'>you</span> <span m='2068420'>can't</span> <span
  m='2068699'>undo</span> <span m='2069000'>it,</span> <span
  m='2069389'>unless</span> <span m='2069810'>you</span> <span
  m='2069900'>can</span> <span m='2070030'>come</span> <span
  m='2070199'>back</span> <span m='2070400'>to</span> <span
  m='2070480'>here.</span> <span m='2070730'>But</span> <span
  m='2070870'>we'll</span> <span m='2071060'>set</span> <span
  m='2071290'>up</span> <span m='2071389'>so</span> <span
  m='2071520'>that</span> <span m='2071679'>never</span> <span
  m='2071880'>happens.</span> </p><p><span m='2073820'>I</span> <span
  m='2073920'>mean,</span> <span m='2074150'>if</span> <span
  m='2074290'>you're</span> <span m='2074380'>trying</span> <span
  m='2074610'>to</span> <span m='2074670'>solve</span> <span
  m='2074920'>the</span> <span m='2074980'>level,</span> <span
  m='2075320'>you</span> <span m='2076100'>don't</span> <span
  m='2076280'>know</span> <span m='2076429'>which</span> <span
  m='2076620'>way</span> <span m='2076750'>to</span> <span
  m='2076830'>go.</span> <span m='2077100'>You</span> <span
  m='2077219'>have</span> <span m='2077389'>to</span> <span
  m='2077480'>guess.</span> <span m='2078360'>Can</span> <span
  m='2078520'>I</span> <span m='2078580'>go</span> <span m='2078840'>fall</span>
  <span m='2079100'>to</span> <span m='2079190'>the</span> <span
  m='2079250'>left</span> <span m='2079520'>or</span> <span
  m='2079560'>fall</span> <span m='2079780'>to</span> <span
  m='2079870'>the</span> <span m='2079949'>right,</span> <span
  m='2080170'>or</span> <span m='2080969'>do</span> <span
  m='2081060'>something.</span> <span m='2083370'>So</span> <span
  m='2084340'>the</span> <span m='2084639'>existence</span> <span
  m='2085270'>of</span> <span m='2085400'>a</span> <span m='2085460'>play
  through,</span> <span m='2086250'>this</span> <span m='2086480'>level,</span>
  <span m='2087100'>is</span> <span m='2087260'>the</span> <span
  m='2087340'>same</span> <span m='2087710'>as</span> <span
  m='2087790'>saying</span> <span m='2088000'>there</span> <span
  m='2088110'>is</span> <span m='2088380'>a</span> <span
  m='2088429'>choice</span> <span m='2088900'>for</span> <span
  m='2089420'>the</span> <span m='2089530'>x1</span> <span
  m='2089960'>variable.</span> </p><p><span m='2090870'>Now</span> <span
  m='2091050'>we</span> <span m='2091150'>have</span> <span
  m='2091260'>to</span> <span m='2091370'>do</span> <span
  m='2091489'>this</span> <span m='2091699'>for</span> <span
  m='2091840'>lots</span> <span m='2092070'>of</span> <span
  m='2092150'>variables.</span> <span m='2093573'>So</span> <span
  m='2094020'>there's</span> <span m='2094469'>x2</span> <span
  m='2094820'>variable,</span> <span m='2096440'>x3</span> <span
  m='2096800'>variable,</span> <span m='2097310'>and</span> <span m='2097793'>so
  on.</span> <span m='2098760'>Each</span> <span m='2099000'>one</span> <span
  m='2099280'>has</span> <span m='2099530'>a</span> <span
  m='2099590'>true</span> <span m='2099870'>exit</span> <span
  m='2100940'>and</span> <span m='2101070'>a</span> <span
  m='2101100'>false</span> <span m='2101536'>exit.</span> <span
  m='2103950'>So</span> <span m='2104020'>the</span> <span
  m='2104090'>actual</span> <span m='2104460'>level</span> <span
  m='2104760'>will</span> <span m='2104910'>have</span> <span
  m='2105830'>n</span> <span m='2106090'>instances</span> <span
  m='2106570'>of</span> <span m='2106680'>this</span> <span
  m='2106890'>if</span> <span m='2107000'>we</span> <span
  m='2107080'>have</span> <span m='2107220'>n</span> <span
  m='2107410'>variables.</span> </p><p><span m='2108530'>Now,</span> <span
  m='2109490'>what</span> <span m='2110050'>do</span> <span m='2110160'>I</span>
  <span m='2110270'>do</span> <span m='2110700'>once</span> <span
  m='2111010'>Mario</span> <span m='2111280'>decides</span> <span
  m='2111750'>that</span> <span m='2111860'>this</span> <span
  m='2112030'>is</span> <span m='2112130'>a</span> <span m='2112180'>true</span>
  <span m='2113220'>thing?</span> <span m='2114220'>What</span> <span
  m='2114430'>I'm</span> <span m='2114490'>going</span> <span
  m='2114610'>to</span> <span m='2114690'>do</span> <span m='2114850'>is</span>
  <span m='2114970'>have--</span> <span m='2115470'>this</span> <span
  m='2115680'>is</span> <span m='2115780'>called</span> <span
  m='2115970'>a</span> <span m='2116010'>gadget</span> <span
  m='2116480'>by</span> <span m='2116650'>the</span> <span
  m='2116750'>way.</span> <span m='2117150'>In</span> <span
  m='2117210'>general,</span> <span m='2118090'>most</span> <span
  m='2118320'>NP-hardness</span> <span m='2118890'>proofs</span> <span
  m='2119680'>use</span> <span m='2120030'>these</span> <span
  m='2120180'>things</span> <span m='2120360'>called</span> <span
  m='2120580'>gadgets,</span> <span m='2121030'>which</span> <span
  m='2121180'>is</span> <span m='2121260'>just</span> <span
  m='2121440'>saying,</span> <span m='2121950'>we</span> <span
  m='2122090'>take</span> <span m='2122370'>various</span> <span
  m='2122840'>features</span> <span m='2123510'>of</span> <span
  m='2123800'>the</span> <span m='2123950'>input,</span> <span
  m='2124790'>and</span> <span m='2124950'>we</span> <span
  m='2125030'>convert</span> <span m='2125470'>them</span> <span
  m='2125610'>into</span> <span m='2125800'>corresponding</span> <span
  m='2126510'>features</span> <span m='2126940'>on</span> <span
  m='2127030'>the</span> <span m='2127140'>output.</span> <span
  m='2127890'>So</span> <span m='2128100'>here</span> <span
  m='2128490'>I'm</span> <span m='2128630'>taking</span> <span
  m='2128940'>each</span> <span m='2129200'>variable,</span> <span
  m='2129650'>x1,</span> <span m='2130030'>x2,</span> <span
  m='2130380'>x3,</span> <span m='2130770'>and</span> <span
  m='2130870'>so</span> <span m='2131010'>on,</span> <span
  m='2131540'>and</span> <span m='2131810'>building</span> <span
  m='2132240'>this</span> <span m='2132430'>little</span> <span
  m='2132800'>gadget</span> <span m='2133270'>for</span> <span
  m='2134040'>each</span> <span m='2134210'>of</span> <span
  m='2134280'>those</span> <span m='2134430'>variables.</span> </p><p><span
  m='2135330'>Now</span> <span m='2135470'>the</span> <span
  m='2135610'>other</span> <span m='2136490'>main</span> <span
  m='2136700'>thing</span> <span m='2136870'>you</span> <span
  m='2136970'>have</span> <span m='2137210'>in</span> <span
  m='2137280'>3SAT</span> <span m='2137810'>are</span> <span
  m='2137950'>the</span> <span m='2138030'>clauses.</span> <span
  m='2139260'>We</span> <span m='2139390'>have</span> <span
  m='2139570'>triples</span> <span m='2140070'>of</span> <span
  m='2140150'>variables</span> <span m='2140740'>or</span> <span
  m='2140930'>their</span> <span m='2141060'>negations.</span> <span
  m='2142100'>They</span> <span m='2142790'>have</span> <span
  m='2142940'>to</span> <span m='2143040'>come</span> <span
  m='2143270'>together</span> <span m='2144220'>and</span> <span
  m='2144420'>be</span> <span m='2144510'>satisfied.</span> <span
  m='2145640'>One</span> <span m='2145840'>of</span> <span
  m='2145900'>them</span> <span m='2146050'>has</span> <span
  m='2146230'>to</span> <span m='2146320'>be</span> <span
  m='2146430'>true.</span> </p><p><span m='2147320'>So</span> <span
  m='2147630'>down</span> <span m='2147870'>here</span> <span
  m='2148690'>I'm</span> <span m='2148870'>going</span> <span
  m='2149070'>to</span> <span m='2149170'>have</span> <span
  m='2150370'>some</span> <span m='2150850'>clause</span> <span
  m='2151300'>gadgets,</span> <span m='2155120'>which</span> <span
  m='2156220'>I</span> <span m='2156380'>will</span> <span
  m='2156680'>show</span> <span m='2156900'>you</span> <span
  m='2157040'>in</span> <span m='2157120'>a</span> <span
  m='2157160'>moment.</span> <span m='2165630'>OK,</span> <span
  m='2166550'>and</span> <span m='2166930'>I</span> <span
  m='2166960'>think</span> <span m='2167130'>I'll</span> <span
  m='2167630'>switch</span> <span m='2167920'>colors.</span> <span
  m='2168510'>This</span> <span m='2168720'>is</span> <span
  m='2168780'>about</span> <span m='2169060'>to</span> <span
  m='2169140'>get</span> <span m='2169300'>messy.</span> </p><p><span
  m='2170220'>So</span> <span m='2170320'>the</span> <span
  m='2170430'>idea</span> <span m='2170690'>is</span> <span
  m='2170940'>that</span> <span m='2171100'>some</span> <span
  m='2171480'>of</span> <span m='2171590'>the</span> <span
  m='2171670'>clauses</span> <span m='2172550'>have</span> <span
  m='2173630'>x1</span> <span m='2174150'>in</span> <span
  m='2174270'>them.</span> <span m='2176132'>The</span> <span
  m='2176550'>true</span> <span m='2176770'>version</span> <span
  m='2177060'>of</span> <span m='2177160'>x1,</span> <span
  m='2177740'>not</span> <span m='2177970'>x1</span> <span
  m='2178290'>bar.</span> <span m='2179440'>So</span> <span
  m='2179630'>for</span> <span m='2179800'>those</span> <span
  m='2180060'>clauses,</span> <span m='2181070'>I</span> <span
  m='2181240'>want</span> <span m='2181550'>to</span> <span
  m='2182470'>connect.</span> <span m='2182920'>I'm</span> <span
  m='2182980'>going</span> <span m='2183100'>to</span> <span
  m='2183180'>dip</span> <span m='2183580'>into</span> <span
  m='2183800'>the</span> <span m='2183890'>clause</span> <span
  m='2184300'>briefly.</span> <span m='2185010'>So</span> <span
  m='2185200'>from</span> <span m='2185430'>this</span> <span
  m='2185580'>wire</span> <span m='2185900'>going</span> <span
  m='2186020'>to</span> <span m='2186090'>dip</span> <span
  m='2186330'>into</span> <span m='2186510'>the</span> <span
  m='2186590'>clause</span> <span m='2186970'>here.</span> <span
  m='2187960'>And</span> <span m='2188160'>then</span> <span
  m='2188300'>I'm</span> <span m='2188400'>going</span> <span
  m='2188520'>to</span> <span m='2188590'>go</span> <span m='2188910'>to</span>
  <span m='2189060'>the</span> <span m='2189160'>next</span> <span
  m='2189430'>clause</span> <span m='2189780'>that</span> <span
  m='2189880'>has</span> <span m='2190090'>x1.</span> <span
  m='2190950'>Maybe</span> <span m='2191160'>it's</span> <span
  m='2191290'>this</span> <span m='2191470'>one,</span> <span
  m='2192230'>and</span> <span m='2192450'>the</span> <span
  m='2192510'>next</span> <span m='2192740'>one,</span> <span
  m='2193050'>and</span> <span m='2193150'>so</span> <span
  m='2193290'>on.</span> <span m='2195020'>All</span> <span
  m='2195310'>the</span> <span m='2195390'>clauses</span> <span
  m='2195800'>that</span> <span m='2195910'>have</span> <span
  m='2196060'>x1</span> <span m='2196440'>in</span> <span m='2196530'>it,</span>
  <span m='2196890'>I</span> <span m='2197410'>dip</span> <span
  m='2197690'>into.</span> <span m='2198360'>The</span> <span
  m='2198490'>other</span> <span m='2198650'>ones</span> <span
  m='2198870'>I</span> <span m='2198940'>don't.</span> <span
  m='2200240'>And</span> <span m='2200410'>then</span> <span
  m='2200580'>once</span> <span m='2200780'>I'm</span> <span
  m='2200880'>done,</span> <span m='2201390'>I'm</span> <span
  m='2201520'>going</span> <span m='2201640'>to</span> <span
  m='2201710'>come</span> <span m='2201990'>back</span> <span
  m='2202960'>and</span> <span m='2203400'>feed</span> <span
  m='2203760'>into</span> <span m='2203990'>x2.</span> </p><p><span
  m='2208620'>Next,</span> <span m='2209920'>I</span> <span
  m='2210140'>look</span> <span m='2210380'>at</span> <span
  m='2210510'>this</span> <span m='2210910'>false</span> <span
  m='2211280'>wire</span> <span m='2211540'>for</span> <span
  m='2211670'>x1.</span> <span m='2212180'>So</span> <span
  m='2212340'>all</span> <span m='2212590'>the</span> <span
  m='2212660'>clauses</span> <span m='2213110'>that</span> <span
  m='2213240'>have</span> <span m='2213470'>x1</span> <span
  m='2213980'>bar</span> <span m='2214340'>in</span> <span
  m='2214490'>them,</span> <span m='2215260'>I'm</span> <span
  m='2215520'>going</span> <span m='2215790'>to</span> <span
  m='2216070'>connect.</span> <span m='2216720'>So</span> <span
  m='2217060'>I</span> <span m='2217120'>don't</span> <span
  m='2217260'>know</span> <span m='2217360'>which</span> <span
  m='2217510'>ones</span> <span m='2217670'>they</span> <span
  m='2217820'>are.</span> <span m='2218770'>Maybe</span> <span
  m='2219950'>this</span> <span m='2220180'>one,</span> <span
  m='2220910'>or</span> <span m='2221320'>this</span> <span
  m='2221730'>one,</span> <span m='2222550'>something.</span> <span
  m='2225420'>And</span> <span m='2225580'>then</span> <span
  m='2226020'>I</span> <span m='2226320'>come</span> <span
  m='2226520'>here.</span> </p><p><span m='2228270'>And</span> <span
  m='2228330'>so</span> <span m='2228440'>the</span> <span
  m='2228550'>idea</span> <span m='2228810'>is</span> <span
  m='2229080'>that</span> <span m='2229610'>Mario</span> <span
  m='2229940'>makes</span> <span m='2230150'>a</span> <span
  m='2230200'>choice</span> <span m='2231150'>whether</span> <span
  m='2231400'>x1</span> <span m='2231760'>is</span> <span
  m='2231850'>true</span> <span m='2232000'>or</span> <span
  m='2232070'>false.</span> <span m='2232540'>If</span> <span
  m='2232760'>x1</span> <span m='2233130'>is</span> <span
  m='2233230'>true,</span> <span m='2235190'>Mario</span> <span
  m='2235430'>is</span> <span m='2235530'>going</span> <span
  m='2235650'>to</span> <span m='2235720'>visit</span> <span
  m='2236100'>all</span> <span m='2236310'>of</span> <span
  m='2236410'>the</span> <span m='2236470'>clauses</span> <span
  m='2237470'>that</span> <span m='2237640'>have</span> <span
  m='2237830'>x1</span> <span m='2238150'>true</span> <span
  m='2238460'>in</span> <span m='2238660'>them.</span> <span
  m='2239400'>And</span> <span m='2239560'>then</span> <span
  m='2239700'>it's</span> <span m='2239840'>going</span> <span
  m='2239960'>to</span> <span m='2240040'>go</span> <span m='2240230'>to</span>
  <span m='2240360'>the</span> <span m='2240440'>x2</span> <span
  m='2240870'>choice.</span> <span m='2241260'>Then</span> <span
  m='2241430'>it's</span> <span m='2241530'>going</span> <span
  m='2241650'>to</span> <span m='2241710'>choose</span> <span
  m='2241980'>whether</span> <span m='2242180'>x2</span> <span
  m='2242520'>is</span> <span m='2242610'>true</span> <span
  m='2242780'>or</span> <span m='2242830'>false,</span> <span
  m='2243210'>and</span> <span m='2243380'>repeat.</span> <span
  m='2245620'>Or</span> <span m='2245850'>Mario</span> <span
  m='2246150'>decides</span> <span m='2246510'>x1</span> <span
  m='2246790'>should</span> <span m='2246930'>be</span> <span
  m='2247030'>false.</span> <span m='2247900'>That</span> <span
  m='2248110'>will</span> <span m='2248220'>satisfy</span> <span
  m='2249450'>all</span> <span m='2249690'>the</span> <span
  m='2249770'>clauses</span> <span m='2250420'>that</span> <span
  m='2250550'>have</span> <span m='2251740'>x1</span> <span
  m='2252200'>bar</span> <span m='2252510'>in</span> <span
  m='2252720'>them.</span> <span m='2254550'>And</span> <span
  m='2254760'>then</span> <span m='2254980'>again,</span> <span
  m='2255790'>we</span> <span m='2255970'>feed</span> <span
  m='2256230'>back</span> <span m='2256470'>into</span> <span
  m='2256630'>x2.</span> </p><p><span m='2257220'>So</span> <span
  m='2257390'>this</span> <span m='2257570'>is</span> <span
  m='2257650'>why</span> <span m='2257900'>we</span> <span
  m='2258030'>have</span> <span m='2258300'>two</span> <span
  m='2258520'>inputs</span> <span m='2258950'>into</span> <span
  m='2259140'>the</span> <span m='2259210'>x2</span> <span
  m='2259570'>gadget.</span> <span m='2259950'>One</span> <span
  m='2260160'>of</span> <span m='2260230'>them</span> <span
  m='2260390'>is</span> <span m='2260520'>when</span> <span
  m='2260660'>the</span> <span m='2260720'>previous</span> <span
  m='2261170'>variable</span> <span m='2261520'>was</span> <span
  m='2261680'>true.</span> <span m='2262400'>The</span> <span
  m='2262450'>other</span> <span m='2262630'>is</span> <span
  m='2262740'>when</span> <span m='2262890'>the</span> <span
  m='2262960'>previous</span> <span m='2263340'>variable was</span> <span
  m='2263790'>false.</span> <span m='2265200'>The</span> <span
  m='2265280'>choice</span> <span m='2265610'>of</span> <span
  m='2265710'>x2</span> <span m='2266080'>doesn't</span> <span
  m='2266330'>depend</span> <span m='2266770'>on</span> <span
  m='2266890'>the</span> <span m='2266970'>choice</span> <span
  m='2267240'>of</span> <span m='2267350'>x1.</span> <span m='2267780'>So</span>
  <span m='2267980'>they</span> <span m='2268110'>feed</span> <span
  m='2268380'>into</span> <span m='2268580'>the</span> <span
  m='2268660'>same</span> <span m='2268930'>thing.</span> <span
  m='2269640'>And</span> <span m='2269940'>you</span> <span
  m='2270020'>have</span> <span m='2270140'>to</span> <span
  m='2270230'>make</span> <span m='2270390'>your</span> <span
  m='2270490'>choice.</span> <span m='2273960'>So</span> <span
  m='2274190'>far,</span> <span m='2274370'>so</span> <span
  m='2274540'>good.</span> </p><p><span m='2275330'>Now</span> <span
  m='2275480'>the</span> <span m='2275550'>question</span> <span
  m='2275830'>is,</span> <span m='2275910'>what's</span> <span
  m='2276130'>happening</span> <span m='2276540'>in</span> <span
  m='2276640'>these</span> <span m='2276790'>clauses.</span> <span
  m='2278970'>And</span> <span m='2279170'>then</span> <span
  m='2279480'>there's</span> <span m='2282100'>one</span> <span
  m='2282370'>other</span> <span m='2282550'>aspect,</span> <span
  m='2283580'>which</span> <span m='2283840'>is</span> <span
  m='2284110'>after</span> <span m='2284490'>you've</span> <span
  m='2284670'>set</span> <span m='2285010'>all</span> <span
  m='2285310'>of</span> <span m='2285420'>the</span> <span
  m='2285490'>variables,</span> <span m='2286500'>at</span> <span
  m='2286700'>the</span> <span m='2286780'>very</span> <span
  m='2287180'>end,</span> <span m='2287740'>after</span> <span
  m='2288160'>this</span> <span m='2288840'>last</span> <span
  m='2289130'>variable</span> <span m='2289590'>xn,</span> <span
  m='2292270'>at</span> <span m='2292460'>the</span> <span
  m='2292530'>very</span> <span m='2292860'>end,</span> <span
  m='2293350'>what</span> <span m='2293770'>we're</span> <span
  m='2294010'>going</span> <span m='2294140'>to</span> <span
  m='2294220'>do</span> <span m='2295010'>is</span> <span
  m='2295250'>come</span> <span m='2296150'>and</span> <span
  m='2296340'>go</span> <span m='2296490'>through</span> <span
  m='2297160'>all</span> <span m='2297490'>the</span> <span
  m='2297570'>clauses.</span> <span m='2299650'>And</span> <span
  m='2299850'>then</span> <span m='2300070'>this</span> <span
  m='2300480'>is</span> <span m='2300830'>the</span> <span
  m='2300940'>flag.</span> <span m='2301440'>This</span> <span
  m='2301650'>is</span> <span m='2301740'>where</span> <span
  m='2301880'>you</span> <span m='2302030'>win</span> <span
  m='2302240'>the</span> <span m='2302320'>level.</span> <span
  m='2302970'>Sorry,</span> <span m='2303150'>I</span> <span
  m='2303300'>drew</span> <span m='2303440'>it</span> <span
  m='2303520'>backwards.</span> <span m='2304110'>But</span> <span
  m='2305310'>the</span> <span m='2305420'>goal</span> <span
  m='2305840'>is</span> <span m='2305970'>for</span> <span
  m='2306080'>Martin</span> <span m='2306320'>to</span> <span
  m='2306380'>start</span> <span m='2306640'>here</span> <span
  m='2307170'>and</span> <span m='2307330'>get</span> <span
  m='2307510'>to</span> <span m='2307620'>here.</span> <span
  m='2309600'>In</span> <span m='2309830'>order</span> <span
  m='2310000'>to</span> <span m='2310140'>do</span> <span
  m='2310290'>that,</span> <span m='2310690'>you</span> <span
  m='2310700'>have</span> <span m='2310870'>to</span> <span
  m='2310980'>be</span> <span m='2311070'>able</span> <span
  m='2311230'>to</span> <span m='2311300'>traverse</span> <span
  m='2311800'>through</span> <span m='2311930'>these</span> <span
  m='2312100'>clauses.</span> </p><p><span m='2312420'>So</span> <span
  m='2312640'>what</span> <span m='2312790'>do</span> <span
  m='2312860'>the</span> <span m='2312920'>clauses</span> <span
  m='2313330'>look</span> <span m='2313500'>like?</span> <span
  m='2314750'>This</span> <span m='2314980'>is</span> <span m='2315070'>a</span>
  <span m='2315160'>little</span> <span m='2315390'>bit</span> <span
  m='2315580'>more</span> <span m='2316420'>elaborate.</span> <span
  m='2317780'>So</span> <span m='2318270'>here</span> <span m='2318760'>we
  are.</span> <span m='2323095'>This</span> <span m='2323570'>is</span> <span
  m='2323680'>a</span> <span m='2323730'>clause</span> <span
  m='2324120'>gadget.</span> <span m='2324970'>So</span> <span
  m='2325470'>there</span> <span m='2325680'>are</span> <span
  m='2325740'>three</span> <span m='2326260'>ways</span> <span
  m='2326700'>to</span> <span m='2326850'>dip</span> <span
  m='2327160'>into</span> <span m='2327440'>the</span> <span
  m='2327530'>clause.</span> <span m='2327950'>It's</span> <span
  m='2328090'>actually</span> <span m='2328380'>upside</span> <span
  m='2328710'>down</span> <span m='2329000'>relative</span> <span
  m='2329360'>to</span> <span m='2329460'>that</span> <span
  m='2329620'>picture,</span> <span m='2330030'>but</span> <span
  m='2330290'>that's</span> <span m='2330860'>not</span> <span
  m='2331060'>a</span> <span m='2331100'>problem.</span> </p><p><span
  m='2334180'>So</span> <span m='2335060'>if</span> <span
  m='2335310'>Mario</span> <span m='2335660'>comes</span> <span
  m='2336000'>here,</span> <span m='2337580'>then</span> <span
  m='2337860'>he</span> <span m='2337940'>can</span> <span
  m='2338090'>hit</span> <span m='2338260'>the</span> <span
  m='2338330'>question</span> <span m='2338650'>mark</span> <span
  m='2338830'>from</span> <span m='2338970'>below.</span> <span
  m='2339850'>And</span> <span m='2340020'>inside</span> <span
  m='2340340'>this</span> <span m='2340460'>question</span> <span
  m='2340790'>mark</span> <span m='2341050'>is</span> <span
  m='2341200'>an</span> <span m='2341270'>invincibility</span> <span
  m='2341930'>star.</span> <span m='2343070'>And</span> <span
  m='2343170'>the</span> <span m='2343320'>invincibility</span> <span
  m='2343630'>star</span> <span m='2343860'>will</span> <span
  m='2343950'>come</span> <span m='2344160'>up</span> <span
  m='2344290'>here</span> <span m='2344550'>and</span> <span
  m='2344730'>just</span> <span m='2344950'>bounce</span> <span
  m='2345360'>around</span> <span m='2346460'>forever.</span> <span
  m='2347710'>We</span> <span m='2347780'>checked.</span> <span
  m='2348610'>The</span> <span m='2348820'>star</span> <span
  m='2349210'>will</span> <span m='2349320'>just</span> <span
  m='2349400'>stay</span> <span m='2349650'>there</span> <span
  m='2349920'>for</span> <span m='2350040'>as</span> <span
  m='2350160'>long</span> <span m='2350540'>as</span> <span
  m='2350660'>you</span> <span m='2350790'>let</span> <span
  m='2350980'>it</span> <span m='2351200'>sit.</span> </p><p><span
  m='2352350'>Unfortunately,</span> <span m='2353120'>all</span> <span
  m='2353310'>of</span> <span m='2353390'>these</span> <span
  m='2353590'>are</span> <span m='2353670'>solid</span> <span
  m='2353980'>blocks,</span> <span m='2354290'>so</span> <span
  m='2354370'>Mario</span> <span m='2354590'>can't</span> <span
  m='2354810'>actually</span> <span m='2355080'>get</span> <span
  m='2355310'>up</span> <span m='2355430'>to</span> <span
  m='2355520'>here</span> <span m='2356240'>to</span> <span
  m='2356560'>get</span> <span m='2356760'>the</span> <span
  m='2356830'>star.</span> <span m='2358420'>But</span> <span
  m='2358770'>as</span> <span m='2358930'>long</span> <span
  m='2359220'>as</span> <span m='2359350'>Mario</span> <span
  m='2359690'>can</span> <span m='2359860'>visit</span> <span
  m='2360100'>this</span> <span m='2360250'>question</span> <span
  m='2360510'>mark</span> <span m='2360750'>or</span> <span
  m='2360980'>this</span> <span m='2361150'>question</span> <span
  m='2361450'>mark</span> <span m='2361690'>or</span> <span
  m='2361910'>this</span> <span m='2362060'>question</span> <span
  m='2362350'>mark,</span> <span m='2362500'>then</span> <span
  m='2362650'>there</span> <span m='2362710'>will</span> <span
  m='2362810'>be</span> <span m='2362940'>at</span> <span
  m='2363020'>least</span> <span m='2363370'>one</span> <span
  m='2363580'>star</span> <span m='2363940'>up</span> <span
  m='2364070'>here.</span> <span m='2365410'>So</span> <span
  m='2365510'>the</span> <span m='2365610'>idea</span> <span
  m='2365870'>is</span> <span m='2366000'>that</span> <span
  m='2366140'>each</span> <span m='2366380'>of</span> <span
  m='2366450'>these</span> <span m='2366650'>represents</span> <span
  m='2367180'>one</span> <span m='2367380'>of</span> <span
  m='2367590'>the</span> <span m='2367850'>literals</span> <span
  m='2368500'>that's</span> <span m='2368650'>in</span> <span
  m='2368840'>the</span> <span m='2368900'>clause.</span> <span
  m='2370140'>And</span> <span m='2370430'>if</span> <span m='2370700'>we</span>
  <span m='2370850'>choose--</span> <span m='2372020'>so</span> <span
  m='2372380'>let's</span> <span m='2372550'>look</span> <span
  m='2372660'>at</span> <span m='2372720'>this</span> <span
  m='2372860'>first</span> <span m='2373090'>clause,</span> <span
  m='2373420'>x1</span> <span m='2373900'>or</span> <span m='2374100'>x3</span>
  <span m='2374560'>or</span> <span m='2374760'>x6</span> <span
  m='2375230'>bar.</span> <span m='2375860'>So</span> <span
  m='2376050'>if</span> <span m='2376250'>we</span> <span
  m='2376350'>choose</span> <span m='2376670'>x1</span> <span
  m='2377170'>to</span> <span m='2377260'>be</span> <span
  m='2377390'>true,</span> <span m='2378160'>then</span> <span
  m='2379110'>we'll</span> <span m='2379230'>follow</span> <span
  m='2379640'>the</span> <span m='2379730'>path</span> <span
  m='2380150'>and</span> <span m='2380250'>we'll</span> <span
  m='2380360'>be</span> <span m='2380480'>able</span> <span
  m='2380660'>to</span> <span m='2380740'>hit</span> <span
  m='2380930'>the</span> <span m='2381000'>star.</span> <span
  m='2382040'>Or</span> <span m='2382410'>if</span> <span m='2382590'>we</span>
  <span m='2382710'>choose</span> <span m='2383660'>x3</span> <span
  m='2384160'>to</span> <span m='2384240'>be</span> <span
  m='2384380'>true,</span> <span m='2385090'>then</span> <span
  m='2385320'>we'll</span> <span m='2385460'>come</span> <span
  m='2385710'>in</span> <span m='2385790'>here</span> <span
  m='2386150'>and</span> <span m='2386300'>hit</span> <span
  m='2386460'>this</span> <span m='2386620'>star.</span> <span
  m='2387910'>Or</span> <span m='2388240'>if</span> <span m='2388410'>we</span>
  <span m='2388500'>choose</span> <span m='2388940'>x6</span> <span
  m='2389800'>to</span> <span m='2389920'>be</span> <span
  m='2390050'>false,</span> <span m='2391250'>then</span> <span
  m='2391600'>that</span> <span m='2391810'>path</span> <span
  m='2392220'>will</span> <span m='2392340'>lead</span> <span
  m='2392570'>to</span> <span m='2392650'>here</span> <span
  m='2392890'>and</span> <span m='2392980'>we'll</span> <span
  m='2393080'>be</span> <span m='2393210'>able</span> <span
  m='2393410'>to</span> <span m='2393500'>hit</span> <span
  m='2393740'>this</span> <span m='2393900'>question</span> <span
  m='2394220'>mark</span> <span m='2394740'>and</span> <span
  m='2394920'>get</span> <span m='2395060'>the</span> <span m='2395130'>star
  up</span> <span m='2395460'>here.</span> <span m='2395800'>So</span> <span
  m='2396420'>as</span> <span m='2396580'>long</span> <span
  m='2396820'>as</span> <span m='2396910'>we</span> <span
  m='2397020'>satisfy</span> <span m='2397600'>the</span> <span
  m='2397690'>clause,</span> <span m='2398570'>there</span> <span
  m='2398720'>will</span> <span m='2398830'>be</span> <span
  m='2398960'>at</span> <span m='2399060'>least</span> <span
  m='2399340'>one</span> <span m='2399530'>star.</span> <span
  m='2399990'>Won't</span> <span m='2400230'>help</span> <span
  m='2400500'>if</span> <span m='2400610'>you</span> <span
  m='2400690'>have</span> <span m='2400790'>multiple</span> <span
  m='2401160'>stars.</span> </p><p><span m='2402880'>Then</span> <span
  m='2404440'>the</span> <span m='2404550'>final</span> <span
  m='2405060'>traversal</span> <span m='2405570'>part--</span> <span
  m='2405920'>so</span> <span m='2405980'>that</span> <span
  m='2406100'>was</span> <span m='2406210'>this</span> <span
  m='2406370'>first</span> <span m='2406600'>clause.</span> <span
  m='2407220'>And</span> <span m='2407500'>now</span> <span
  m='2407610'>we're</span> <span m='2407700'>traversing</span> <span
  m='2408210'>through.</span> <span m='2408960'>Actually</span> <span
  m='2409300'>in</span> <span m='2409360'>this</span> <span
  m='2409500'>picture,</span> <span m='2409740'>it's</span> <span
  m='2409870'>left</span> <span m='2410060'>to</span> <span
  m='2410160'>right.</span> <span m='2410960'>Just</span> <span
  m='2411380'>turn</span> <span m='2411620'>your</span> <span
  m='2411780'>head.</span> <span m='2413420'>And</span> <span
  m='2414740'>so</span> <span m='2414910'>now</span> <span
  m='2415290'>Mario</span> <span m='2415500'>is</span> <span
  m='2415600'>going</span> <span m='2415730'>to</span> <span
  m='2415850'>have</span> <span m='2416040'>to</span> <span
  m='2416180'>traverse</span> <span m='2416670'>this</span> <span
  m='2416800'>gadget</span> <span m='2417130'>from</span> <span
  m='2417340'>left</span> <span m='2417580'>to</span> <span
  m='2417690'>right</span> <span m='2417950'>on</span> <span
  m='2418090'>this</span> <span m='2418290'>top</span> <span
  m='2418600'>part.</span> <span m='2419450'>And</span> <span
  m='2419650'>if</span> <span m='2419750'>Mario</span> <span
  m='2420070'>comes</span> <span m='2420360'>in</span> <span
  m='2420460'>here</span> <span m='2420800'>and</span> <span
  m='2420910'>you</span> <span m='2420980'>can</span> <span
  m='2421570'>barely</span> <span m='2421890'>jump</span> <span
  m='2422120'>over</span> <span m='2422310'>that.</span> <span
  m='2422810'>If</span> <span m='2423030'>there's</span> <span
  m='2423230'>a</span> <span m='2423280'>star,</span> <span
  m='2424110'>you</span> <span m='2424240'>can</span> <span
  m='2424370'>collect</span> <span m='2424700'>the</span> <span
  m='2424760'>star</span> <span m='2425120'>and</span> <span
  m='2425260'>then</span> <span m='2425460'>run</span> <span
  m='2425690'>through</span> <span m='2426010'>all</span> <span
  m='2426260'>of</span> <span m='2426350'>these</span> <span
  m='2426840'>flaming</span> <span m='2427850'>bars</span> <span
  m='2428260'>of</span> <span m='2428360'>death.</span> <span
  m='2429700'>If</span> <span m='2429890'>there's</span> <span
  m='2430080'>no</span> <span m='2430280'>star,</span> <span
  m='2431030'>you</span> <span m='2431210'>can't.</span> <span
  m='2432030'>You'll</span> <span m='2432200'>die</span> <span
  m='2432480'>if</span> <span m='2432620'>you</span> <span
  m='2432690'>try</span> <span m='2432880'>to</span> <span
  m='2432980'>traverse.</span> </p><p><span m='2434170'>So</span> <span
  m='2434530'>in</span> <span m='2434720'>order</span> <span
  m='2435150'>to</span> <span m='2435440'>be</span> <span
  m='2435580'>able</span> <span m='2435770'>to</span> <span
  m='2436090'>traverse</span> <span m='2436560'>all</span> <span
  m='2436870'>these</span> <span m='2437070'>clauses,</span> <span
  m='2438530'>they</span> <span m='2438690'>must</span> <span
  m='2439030'>all</span> <span m='2439330'>be</span> <span
  m='2439510'>true.</span> <span m='2440630'>And</span> <span
  m='2440820'>them</span> <span m='2441000'>all</span> <span
  m='2441270'>being</span> <span m='2441500'>true</span> <span
  m='2441740'>is</span> <span m='2441840'>the</span> <span
  m='2441910'>same</span> <span m='2442200'>is</span> <span
  m='2442320'>their</span> <span m='2442510'>AND</span> <span
  m='2442890'>being</span> <span m='2443120'>true.</span> <span
  m='2444180'>So</span> <span m='2444370'>you</span> <span
  m='2444520'>will</span> <span m='2444630'>be</span> <span
  m='2444780'>able</span> <span m='2445020'>to</span> <span
  m='2445160'>survive</span> <span m='2445820'>through</span> <span
  m='2446120'>all</span> <span m='2446270'>these</span> <span
  m='2446430'>clauses</span> <span m='2447300'>if</span> <span
  m='2447530'>and</span> <span m='2447620'>only</span> <span
  m='2447890'>if</span> <span m='2448710'>this</span> <span
  m='2449560'>formula</span> <span m='2450120'>has</span> <span
  m='2450460'>a</span> <span m='2450520'>satisfying</span> <span
  m='2451090'>assignment.</span> <span m='2451500'>The</span> <span
  m='2451570'>satisfying</span> <span m='2452040'>assignment</span> <span
  m='2452510'>would</span> <span m='2452680'>be</span> <span
  m='2452820'>given</span> <span m='2453250'>to</span> <span
  m='2453430'>you</span> <span m='2453620'>by</span> <span
  m='2454510'>the</span> <span m='2456930'>level</span> <span
  m='2457250'>play.</span> <span m='2457990'>The</span> <span
  m='2458110'>choices</span> <span m='2458580'>that</span> <span
  m='2458710'>Mario</span> <span m='2459020'>makes</span> <span
  m='2459330'>in</span> <span m='2459440'>this</span> <span
  m='2459670'>gadget</span> <span m='2460400'>will</span> <span
  m='2460520'>tell</span> <span m='2460770'>you</span> <span
  m='2461040'>whether</span> <span m='2461980'>each</span> <span
  m='2462320'>variable</span> <span m='2462750'>should</span> <span
  m='2462940'>be</span> <span m='2463040'>true</span> <span
  m='2463250'>or</span> <span m='2463340'>false.</span> </p><p><span
  m='2465310'>So</span> <span m='2467170'>to</span> <span
  m='2467350'>elaborate</span> <span m='2467605'>just</span> <span
  m='2467860'>a</span> <span m='2467940'>little</span> <span
  m='2468180'>bit</span> <span m='2468340'>more</span> <span
  m='2468520'>in</span> <span m='2468600'>general,</span> <span
  m='2469010'>when</span> <span m='2469140'>you</span> <span
  m='2469240'>have</span> <span m='2469430'>a</span> <span
  m='2469500'>reduction</span> <span m='2469920'>like</span> <span
  m='2470080'>this,</span> <span m='2470600'>to</span> <span
  m='2470730'>prove</span> <span m='2470970'>that</span> <span
  m='2471100'>it</span> <span m='2471160'>actually</span> <span
  m='2471480'>works,</span> <span m='2472330'>you</span> <span
  m='2472450'>need</span> <span m='2472600'>to</span> <span
  m='2472670'>check</span> <span m='2472950'>two</span> <span
  m='2473120'>things.</span> <span m='2473600'>You</span> <span
  m='2473680'>need</span> <span m='2473820'>to</span> <span
  m='2473890'>check</span> <span m='2474220'>that</span> <span
  m='2474770'>if</span> <span m='2475030'>there</span> <span
  m='2475190'>is</span> <span m='2475440'>a</span> <span m='2475500'>way</span>
  <span m='2475690'>to</span> <span m='2475760'>satisfy</span> <span
  m='2476260'>this</span> <span m='2476410'>formula,</span> <span
  m='2477150'>then</span> <span m='2477530'>there</span> <span
  m='2477670'>is</span> <span m='2477780'>a</span> <span m='2477830'>way</span>
  <span m='2477980'>to</span> <span m='2478060'>play</span> <span
  m='2478290'>this</span> <span m='2478450'>level.</span> <span
  m='2479300'>And</span> <span m='2479440'>then</span> <span
  m='2479560'>conversely</span> <span m='2480050'>you</span> <span
  m='2480120'>need</span> <span m='2480240'>to</span> <span
  m='2480320'>show</span> <span m='2480490'>that</span> <span
  m='2480620'>if</span> <span m='2480760'>there's</span> <span
  m='2480930'>a</span> <span m='2480980'>way</span> <span m='2481120'>to</span>
  <span m='2481180'>play</span> <span m='2481410'>this</span> <span
  m='2481560'>level,</span> <span m='2482190'>then</span> <span
  m='2482700'>the</span> <span m='2482990'>formula</span> <span
  m='2483610'>has</span> <span m='2483880'>a</span> <span
  m='2483950'>satisfying</span> <span m='2484430'>assignment.</span>
  </p><p><span m='2485150'>So</span> <span m='2485200'>for</span> <span
  m='2485320'>that</span> <span m='2485480'>latter</span> <span
  m='2485700'>part,</span> <span m='2488670'>in</span> <span
  m='2488820'>order</span> <span m='2488980'>to</span> <span
  m='2489120'>convert</span> <span m='2489450'>a</span> <span
  m='2489500'>level</span> <span m='2489840'>play</span> <span
  m='2490230'>into</span> <span m='2490530'>a</span> <span
  m='2490570'>satisfying</span> <span m='2491040'>assignment,</span> <span
  m='2491460'>you</span> <span m='2491540'>just</span> <span
  m='2491730'>check</span> <span m='2491980'>which</span> <span
  m='2492150'>way</span> <span m='2492310'>Mario</span> <span
  m='2492650'>falls</span> <span m='2493130'>in</span> <span
  m='2493230'>each</span> <span m='2493380'>of</span> <span
  m='2493450'>these</span> <span m='2493570'>gadgets,</span> <span
  m='2494020'>left</span> <span m='2494230'>or</span> <span
  m='2494290'>right.</span> <span m='2494820'>That</span> <span
  m='2495010'>tells</span> <span m='2495270'>you</span> <span
  m='2495380'>the</span> <span m='2495460'>variable</span> <span
  m='2495830'>assignment.</span> <span m='2496700'>And</span> <span
  m='2496810'>because</span> <span m='2497080'>of</span> <span
  m='2497140'>the</span> <span m='2497200'>way</span> <span
  m='2497350'>the</span> <span m='2497420'>clauses</span> <span
  m='2497880'>work,</span> <span m='2498860'>you'll</span> <span
  m='2499100'>only</span> <span m='2499370'>be</span> <span
  m='2499460'>able</span> <span m='2499640'>to</span> <span
  m='2499720'>finish</span> <span m='2500110'>the</span> <span
  m='2500200'>level</span> <span m='2500870'>if</span> <span
  m='2501080'>there</span> <span m='2501200'>was</span> <span
  m='2501320'>at</span> <span m='2501410'>least</span> <span
  m='2501630'>one</span> <span m='2501780'>star</span> <span
  m='2502110'>here.</span> <span m='2502910'>And</span> <span
  m='2503140'>stars</span> <span m='2503480'>run</span> <span
  m='2503660'>out</span> <span m='2503990'>after</span> <span
  m='2504300'>some</span> <span m='2504490'>time.</span> <span
  m='2504780'>So</span> <span m='2505930'>you</span> <span
  m='2506080'>can</span> <span m='2506360'>barely</span> <span
  m='2506710'>make</span> <span m='2506930'>it</span> <span
  m='2507000'>through</span> <span m='2507210'>all</span> <span
  m='2507420'>the</span> <span m='2507580'>flaming</span> <span
  m='2508270'>bars</span> <span m='2508530'>of</span> <span
  m='2508620'>death.</span> <span m='2509300'>Then</span> <span
  m='2509520'>you</span> <span m='2509590'>get</span> <span
  m='2509720'>to</span> <span m='2509820'>the</span> <span
  m='2509900'>next</span> <span m='2510110'>clause.</span> <span
  m='2510400'>You</span> <span m='2510490'>need</span> <span
  m='2510670'>another</span> <span m='2510980'>star</span> <span
  m='2511380'>for</span> <span m='2511470'>each</span> <span
  m='2511650'>one.</span> </p><p><span m='2513230'>Conversely,</span> <span
  m='2514580'>if</span> <span m='2514880'>there</span> <span
  m='2515070'>is</span> <span m='2515300'>a</span> <span
  m='2515370'>satisfying</span> <span m='2515880'>assignment,</span> <span
  m='2516300'>you</span> <span m='2516390'>can</span> <span
  m='2516670'>actually</span> <span m='2516960'>play</span> <span
  m='2517180'>through</span> <span m='2517310'>the</span> <span
  m='2517390'>level,</span> <span m='2518060'>you</span> <span
  m='2518170'>just</span> <span m='2518390'>make</span> <span
  m='2518620'>these</span> <span m='2518780'>choices</span> <span
  m='2519210'>according</span> <span m='2519560'>to</span> <span
  m='2519670'>what</span> <span m='2519820'>the</span> <span
  m='2519890'>satisfying</span> <span m='2520350'>assignment</span> <span
  m='2520750'>is.</span> <span m='2521180'>So</span> <span
  m='2521820'>either</span> <span m='2522120'>way</span> <span
  m='2522580'>it's</span> <span m='2522860'>equivalent.</span> <span
  m='2523330'>We</span> <span m='2523480'>always</span> <span
  m='2523780'>get</span> <span m='2524890'>a</span> <span m='2525020'>yes</span>
  <span m='2525250'>or</span> <span m='2525300'>no</span> <span
  m='2525500'>answer</span> <span m='2525770'>here</span> <span
  m='2526480'>whenever</span> <span m='2527090'>we</span> <span
  m='2527190'>get</span> <span m='2527360'>a</span> <span
  m='2527770'>corresponding</span> <span m='2528220'>yes</span> <span
  m='2528400'>or</span> <span m='2528470'>no</span> <span
  m='2528610'>answer</span> <span m='2529300'>to</span> <span
  m='2529450'>the</span> <span m='2529520'>3SAT</span> <span
  m='2529900'>process.</span> </p><p><span m='2531460'>You</span> <span
  m='2531540'>also</span> <span m='2531760'>need</span> <span
  m='2531910'>to</span> <span m='2531990'>check</span> <span
  m='2532280'>that</span> <span m='2532380'>this</span> <span
  m='2532530'>reduction</span> <span m='2532870'>is</span> <span
  m='2532960'>polynomial</span> <span m='2533640'>size.</span> <span
  m='2535330'>It</span> <span m='2535480'>can</span> <span m='2535620'>be</span>
  <span m='2535710'>computed</span> <span m='2536180'>in</span> <span
  m='2536270'>polynomial</span> <span m='2536760'>time.</span> <span
  m='2537690'>So</span> <span m='2537790'>there's</span> <span
  m='2537930'>an</span> <span m='2538020'>issue.</span> <span
  m='2538530'>Given</span> <span m='2538820'>this</span> <span
  m='2538980'>thing,</span> <span m='2539200'>you</span> <span
  m='2539290'>have</span> <span m='2539420'>to</span> <span
  m='2539700'>lay</span> <span m='2539920'>this</span> <span
  m='2540100'>out</span> <span m='2540350'>in</span> <span m='2540460'>a</span>
  <span m='2540510'>grid</span> <span m='2541420'>and</span> <span
  m='2542120'>draw</span> <span m='2542330'>all</span> <span
  m='2542450'>these</span> <span m='2542600'>wires.</span> </p><p><span
  m='2543780'>And</span> <span m='2543920'>there's</span> <span
  m='2544070'>one</span> <span m='2544750'>problem</span> <span
  m='2545350'>here,</span> <span m='2546730'>which</span> <span
  m='2547010'>is,</span> <span m='2548290'>these</span> <span
  m='2548490'>wires</span> <span m='2548830'>cross</span> <span
  m='2549230'>each</span> <span m='2549430'>other.</span> <span
  m='2551010'>And</span> <span m='2551450'>that's</span> <span
  m='2552360'>a</span> <span m='2552400'>little</span> <span
  m='2552670'>awkward,</span> <span m='2552980'>because</span> <span
  m='2553270'>these</span> <span m='2553470'>wires</span> <span
  m='2553870'>are</span> <span m='2553940'>basically</span> <span
  m='2554280'>just</span> <span m='2554530'>long</span> <span
  m='2554840'>tunnels</span> <span m='2555240'>for</span> <span
  m='2555380'>Mario</span> <span m='2555640'>to</span> <span
  m='2555720'>walk</span> <span m='2555940'>through.</span> <span
  m='2556660'>But</span> <span m='2556900'>what</span> <span
  m='2557030'>does</span> <span m='2557160'>it</span> <span
  m='2557270'>mean</span> <span m='2557470'>to</span> <span
  m='2557570'>have</span> <span m='2557820'>a</span> <span
  m='2557870'>crossing</span> <span m='2558430'>wire?</span> <span
  m='2558910'>Really,</span> <span m='2559710'>if</span> <span
  m='2559940'>Mario's</span> <span m='2560290'>coming</span> <span
  m='2560570'>this</span> <span m='2560780'>way,</span> <span
  m='2561400'>I</span> <span m='2561540'>don't</span> <span
  m='2561860'>want</span> <span m='2562090'>them</span> <span
  m='2562240'>to</span> <span m='2562380'>be</span> <span
  m='2562500'>able</span> <span m='2562690'>to</span> <span
  m='2562930'>go</span> <span m='2563110'>up</span> <span
  m='2563240'>here.</span> <span m='2564630'>He</span> <span
  m='2564820'>has</span> <span m='2565020'>to</span> <span m='2565120'>go</span>
  <span m='2565240'>straight.</span> <span m='2566100'>Otherwise</span> <span
  m='2566470'>this</span> <span m='2566670'>reduction</span> <span
  m='2567030'>won't</span> <span m='2567200'>work.</span> </p><p><span
  m='2567900'>So</span> <span m='2568060'>I</span> <span m='2568140'>need</span>
  <span m='2568760'>what's</span> <span m='2568940'>called</span> <span
  m='2569120'>a</span> <span m='2569150'>crossover</span> <span
  m='2569810'>gadget.</span> <span m='2570800'>And</span> <span
  m='2571060'>everywhere</span> <span m='2571450'>here</span> <span
  m='2571900'>I</span> <span m='2572000'>have</span> <span m='2572210'>a</span>
  <span m='2572280'>crossing,</span> <span m='2573840'>I</span> <span
  m='2574000'>have</span> <span m='2574150'>a</span> <span
  m='2574190'>crossover.</span> <span m='2576940'>And</span> <span
  m='2577040'>this</span> <span m='2577160'>gadget</span> <span
  m='2577570'>has</span> <span m='2577830'>to</span> <span
  m='2577940'>guarantee</span> <span m='2578560'>that</span> <span
  m='2579220'>I</span> <span m='2579360'>can</span> <span m='2579570'>go</span>
  <span m='2579710'>through</span> <span m='2579930'>one</span> <span
  m='2580180'>way</span> <span m='2580480'>or</span> <span
  m='2580740'>the</span> <span m='2580900'>other</span> <span
  m='2581060'>way,</span> <span m='2581220'>but</span> <span
  m='2581350'>there's</span> <span m='2581510'>no</span> <span
  m='2581680'>leakage</span> <span m='2582290'>from</span> <span
  m='2583040'>one</span> <span m='2583340'>path</span> <span
  m='2583670'>to</span> <span m='2583770'>the</span> <span
  m='2583870'>other</span> <span m='2584030'>path.</span> </p><p><span
  m='2584860'>Actually,</span> <span m='2585640'>if</span> <span
  m='2586820'>I</span> <span m='2586930'>first</span> <span
  m='2587290'>traverse</span> <span m='2587610'>through</span> <span
  m='2587760'>here,</span> <span m='2588550'>and</span> <span
  m='2588800'>then</span> <span m='2589000'>I</span> <span
  m='2589090'>traverse</span> <span m='2589470'>through</span> <span
  m='2589600'>here,</span> <span m='2589800'>it's</span> <span
  m='2589920'>OK</span> <span m='2590160'>if</span> <span m='2590260'>I</span>
  <span m='2590350'>leak</span> <span m='2590600'>back.</span> <span
  m='2590950'>Because</span> <span m='2591250'>once</span> <span
  m='2591480'>I</span> <span m='2591590'>visit</span> <span m='2591900'>a</span>
  <span m='2591950'>wire,</span> <span m='2592710'>it's</span> <span
  m='2592870'>kind</span> <span m='2593020'>of</span> <span
  m='2593100'>done.</span> <span m='2594310'>But</span> <span
  m='2595050'>I</span> <span m='2595180'>can't</span> <span
  m='2595450'>have</span> <span m='2595590'>leakage</span> <span
  m='2595900'>if</span> <span m='2596030'>only</span> <span
  m='2596260'>one</span> <span m='2596550'>of</span> <span
  m='2596610'>them</span> <span m='2596750'>is</span> <span
  m='2596850'>traversed.</span> </p><p><span m='2597430'>So</span> <span
  m='2598270'>this</span> <span m='2598480'>is</span> <span
  m='2598590'>the</span> <span m='2598760'>last</span> <span
  m='2599090'>gadget,</span> <span m='2601610'>the</span> <span
  m='2601990'>most</span> <span m='2602230'>complicated</span> <span
  m='2602850'>of</span> <span m='2602930'>them</span> <span
  m='2603060'>all.</span> <span m='2603570'>So</span> <span
  m='2603880'>this</span> <span m='2604060'>took</span> <span
  m='2604250'>a</span> <span m='2604300'>while</span> <span
  m='2604620'>to</span> <span m='2604780'>construct,</span> <span
  m='2605310'>as</span> <span m='2605430'>you</span> <span
  m='2605520'>might</span> <span m='2605700'>imagine.</span> <span
  m='2608710'>So</span> <span m='2608990'>this</span> <span
  m='2609220'>is</span> <span m='2609370'>what</span> <span
  m='2609560'>we</span> <span m='2609660'>call</span> <span m='2609950'>a</span>
  <span m='2610690'>unidirectional</span> <span m='2611670'>crossover.</span>
  <span m='2612470'>You</span> <span m='2612520'>can</span> <span
  m='2612720'>either</span> <span m='2613100'>go</span> <span
  m='2613310'>from</span> <span m='2613600'>left</span> <span
  m='2614610'>to</span> <span m='2614790'>right</span> <span
  m='2615750'>or</span> <span m='2616060'>from</span> <span
  m='2616360'>bottom</span> <span m='2617200'>to</span> <span
  m='2617350'>top,</span> <span m='2618690'>but</span> <span
  m='2618850'>you</span> <span m='2618940'>cannot</span> <span
  m='2619340'>go</span> <span m='2619470'>from</span> <span
  m='2619690'>bottom</span> <span m='2620100'>to</span> <span
  m='2620240'>right</span> <span m='2620640'>or</span> <span
  m='2620730'>bottom</span> <span m='2621180'>to</span> <span
  m='2621310'>left</span> <span m='2621730'>or</span> <span
  m='2621840'>left</span> <span m='2622270'>to</span> <span
  m='2622490'>bottom,</span> <span m='2623380'>that</span> <span
  m='2623540'>kind</span> <span m='2623670'>of</span> <span
  m='2623740'>thing.</span> </p><p><span m='2624480'>So</span> <span
  m='2624780'>I'm</span> <span m='2624970'>told</span> <span
  m='2625250'>that</span> <span m='2625360'>Mario</span> <span
  m='2625600'>is</span> <span m='2625700'>only</span> <span
  m='2625860'>going</span> <span m='2625980'>to</span> <span
  m='2626040'>enter</span> <span m='2626260'>from</span> <span
  m='2626450'>here</span> <span m='2626580'>to</span> <span
  m='2626660'>here,</span> <span m='2626850'>because</span> <span
  m='2627430'>all</span> <span m='2627740'>of</span> <span
  m='2627810'>these</span> <span m='2627950'>wires,</span> <span
  m='2628450'>I</span> <span m='2628560'>can</span> <span
  m='2628720'>make</span> <span m='2629110'>one</span> <span
  m='2629370'>way</span> <span m='2629540'>wires.</span> <span
  m='2630010'>I</span> <span m='2630040'>only</span> <span
  m='2630260'>have</span> <span m='2630440'>to</span> <span
  m='2630560'>think</span> <span m='2630750'>about</span> <span
  m='2631400'>going</span> <span m='2631660'>in</span> <span
  m='2631740'>a</span> <span m='2631790'>particular</span> <span
  m='2632300'>direction.</span> <span m='2633440'>I</span> <span
  m='2633570'>can</span> <span m='2633700'>have</span> <span
  m='2633850'>falls</span> <span m='2634340'>to</span> <span
  m='2634540'>force</span> <span m='2634860'>Mario</span> <span
  m='2635170'>to</span> <span m='2635260'>only</span> <span
  m='2635480'>go</span> <span m='2635620'>one</span> <span
  m='2635790'>way</span> <span m='2635950'>along</span> <span
  m='2636180'>these</span> <span m='2636330'>wires.</span> </p><p><span
  m='2637840'>And</span> <span m='2639040'>so</span> <span
  m='2639220'>let</span> <span m='2639350'>me</span> <span
  m='2639430'>show</span> <span m='2639590'>you</span> <span
  m='2639680'>the</span> <span m='2639770'>valid</span> <span
  m='2640130'>traversals.</span> <span m='2641790'>Maybe</span> <span
  m='2642250'>the</span> <span m='2642380'>simplest</span> <span
  m='2642780'>one</span> <span m='2642980'>is</span> <span
  m='2643350'>from</span> <span m='2643560'>here.</span> <span
  m='2643900'>So</span> <span m='2644030'>let's</span> <span
  m='2644200'>say</span> <span m='2644300'>Mario</span> <span
  m='2644580'>comes</span> <span m='2644810'>in</span> <span
  m='2644880'>here,</span> <span m='2645100'>falls.</span> <span m='2645910'>So
  I</span> <span m='2646070'>can't</span> <span m='2646610'>backtrack,</span>
  <span m='2647150'>can</span> <span m='2647350'>jump</span> <span
  m='2647670'>up</span> <span m='2647850'>here.</span> <span
  m='2648480'>And</span> <span m='2648660'>then</span> <span
  m='2648780'>if</span> <span m='2649200'>Mario's</span> <span
  m='2649600'>big,</span> <span m='2650490'>he</span> <span
  m='2650530'>can</span> <span m='2650710'>break</span> <span
  m='2650940'>this</span> <span m='2651080'>block,</span> <span
  m='2651960'>break</span> <span m='2652220'>this</span> <span
  m='2652370'>block.</span> <span m='2652890'>But</span> <span
  m='2653010'>if</span> <span m='2653110'>he's</span> <span
  m='2653270'>big--</span> <span m='2655220'>there</span> <span
  m='2655330'>should</span> <span m='2655530'>be</span> <span
  m='2655690'>a</span> <span m='2655810'>couple</span> <span
  m='2656120'>more</span> <span m='2656280'>zig</span> <span
  m='2656460'>zags</span> <span m='2656730'>here.</span> <span
  m='2657490'>Let's</span> <span m='2657820'>try</span> <span
  m='2658060'>to</span> <span m='2658470'>run.</span> <span
  m='2658790'>You</span> <span m='2659510'>can</span> <span
  m='2659700'>crouch</span> <span m='2660120'>slide</span> <span
  m='2660390'>through</span> <span m='2660620'>here.</span> <span
  m='2661800'>But</span> <span m='2661970'>then</span> <span
  m='2662200'>you'll</span> <span m='2662470'>sort</span> <span
  m='2662650'>of</span> <span m='2662720'>lose</span> <span
  m='2662910'>your</span> <span m='2663030'>momentum,</span> <span
  m='2663520'>and</span> <span m='2663610'>you</span> <span
  m='2663700'>won't</span> <span m='2663880'>be</span> <span
  m='2664000'>able</span> <span m='2664240'>to</span> <span
  m='2664590'>go</span> <span m='2664760'>through</span> <span
  m='2664970'>all</span> <span m='2665070'>these</span> <span
  m='2665190'>traversals</span> <span m='2665670'>as</span> <span
  m='2666010'>big</span> <span m='2666260'>Mario.</span> </p><p><span
  m='2667990'>So</span> <span m='2669090'>you</span> <span
  m='2669250'>can</span> <span m='2669410'>break</span> <span
  m='2669610'>these</span> <span m='2669790'>blocks</span> <span
  m='2670300'>and</span> <span m='2670470'>then</span> <span
  m='2670720'>get</span> <span m='2670980'>up</span> <span m='2671210'>to</span>
  <span m='2671310'>the</span> <span m='2671390'>top</span> <span
  m='2671800'>and</span> <span m='2671820'>leave.</span> <span
  m='2672800'>Or,</span> <span m='2673260'>if</span> <span
  m='2673630'>big</span> <span m='2673910'>Mario</span> <span
  m='2674190'>comes</span> <span m='2674410'>from</span> <span
  m='2674570'>over</span> <span m='2674770'>this</span> <span
  m='2674960'>way,</span> <span m='2675520'>you</span> <span
  m='2675660'>can</span> <span m='2675800'>first</span> <span
  m='2676350'>take</span> <span m='2676710'>a</span> <span
  m='2676760'>damage,</span> <span m='2677450'>become</span> <span
  m='2677750'>small</span> <span m='2678110'>Mario.</span> <span
  m='2678940'>Then</span> <span m='2679400'>you</span> <span
  m='2679510'>can</span> <span m='2679930'>fit</span> <span
  m='2680190'>through</span> <span m='2680530'>these</span> <span
  m='2681240'>wiggly</span> <span m='2681610'>blocks.</span> <span
  m='2682010'>But</span> <span m='2682980'>you</span> <span
  m='2683170'>cannot</span> <span m='2683530'>break</span> <span
  m='2683790'>blocks</span> <span m='2684050'>anymore</span> <span
  m='2684390'>as</span> <span m='2684470'>small</span> <span
  m='2684730'>Mario.</span> <span m='2685090'>So</span> <span
  m='2685260'>once</span> <span m='2685510'>you've</span> <span
  m='2685710'>committed</span> <span m='2686220'>to</span> <span
  m='2686600'>going</span> <span m='2686900'>small,</span> <span
  m='2688230'>you</span> <span m='2688550'>have</span> <span
  m='2688700'>to</span> <span m='2688790'>stay</span> <span
  m='2689010'>small,</span> <span m='2689600'>until</span> <span
  m='2689880'>you</span> <span m='2689980'>get</span> <span
  m='2690130'>to</span> <span m='2690220'>here.</span> <span
  m='2690520'>And</span> <span m='2690660'>then</span> <span
  m='2691310'>there's</span> <span m='2691560'>a</span> <span
  m='2691610'>mushroom</span> <span m='2692030'>in</span> <span
  m='2692120'>this</span> <span m='2692280'>block.</span> <span
  m='2692920'>So</span> <span m='2693090'>you</span> <span
  m='2693150'>can</span> <span m='2693250'>get</span> <span
  m='2693380'>big</span> <span m='2693540'>again,</span> <span
  m='2693860'>and</span> <span m='2693990'>then</span> <span
  m='2694090'>you</span> <span m='2694160'>can</span> <span
  m='2694290'>break</span> <span m='2694470'>this</span> <span
  m='2694600'>block</span> <span m='2694860'>and</span> <span
  m='2694960'>leave.</span> <span m='2696020'>But</span> <span
  m='2696160'>once</span> <span m='2696370'>you're</span> <span
  m='2696480'>big,</span> <span m='2696800'>you</span> <span
  m='2696900'>can't</span> <span m='2697210'>backtrack</span> <span
  m='2697700'>because</span> <span m='2698080'>big</span> <span
  m='2698250'>Mario</span> <span m='2698500'>can't</span> <span
  m='2698760'>fit</span> <span m='2698960'>through</span> <span
  m='2699110'>these</span> <span m='2699290'>tiny</span> <span
  m='2699530'>tubes.</span> <span m='2700690'>See</span> <span
  m='2700830'>it</span> <span m='2700900'>clear,</span> <span
  m='2701290'>right?</span> </p><p><span m='2703430'>So</span> <span
  m='2704820'>slight</span> <span m='2705250'>detail,</span> <span
  m='2705870'>which</span> <span m='2706110'>is</span> <span
  m='2706340'>at</span> <span m='2706510'>the</span> <span
  m='2706590'>beginning,</span> <span m='2707260'>we</span> <span
  m='2707370'>need</span> <span m='2707560'>to</span> <span
  m='2707660'>make</span> <span m='2707840'>Mario</span> <span
  m='2708160'>big--</span> <span m='2708490'>so</span> <span
  m='2708850'>there's</span> <span m='2709080'>a</span> <span
  m='2709150'>little</span> <span m='2709550'>mushroom.</span> <span
  m='2710660'>I</span> <span m='2710780'>think</span> <span
  m='2710990'>they</span> <span m='2711120'>have</span> <span
  m='2711360'>three</span> <span m='2711630'>spots--</span> <span
  m='2713400'>at</span> <span m='2713610'>the</span> <span
  m='2713680'>beginning.</span> <span m='2714450'>And</span> <span
  m='2714700'>also</span> <span m='2715030'>at</span> <span
  m='2715150'>the</span> <span m='2715280'>end,</span> <span
  m='2715620'>there</span> <span m='2715740'>has</span> <span
  m='2715970'>to</span> <span m='2716060'>be</span> <span
  m='2716180'>something</span> <span m='2716970'>like</span> <span
  m='2717260'>this</span> <span m='2717500'>that</span> <span
  m='2717690'>checks</span> <span m='2718080'>that</span> <span
  m='2718190'>you</span> <span m='2718300'>actually</span> <span
  m='2718600'>have</span> <span m='2718800'>a</span> <span
  m='2718860'>mushroom.</span> <span m='2719640'>So</span> <span
  m='2719900'>the</span> <span m='2720060'>only</span> <span
  m='2720400'>time</span> <span m='2720700'>you're</span> <span
  m='2720810'>allowed</span> <span m='2721090'>to</span> <span
  m='2721190'>take</span> <span m='2721380'>damage</span> <span
  m='2722180'>is</span> <span m='2722670'>briefly</span> <span
  m='2723210'>in</span> <span m='2723300'>this</span> <span
  m='2723440'>gadget</span> <span m='2723780'>you</span> <span
  m='2723870'>take</span> <span m='2724140'>damage.</span> <span
  m='2724580'>If</span> <span m='2724680'>you</span> <span
  m='2724760'>tried</span> <span m='2725000'>to</span> <span
  m='2725070'>backtrack,</span> <span m='2725520'>you would</span> <span
  m='2725730'>get</span> <span m='2725900'>stuck.</span> <span
  m='2726190'>There's</span> <span m='2726370'>a</span> <span
  m='2726740'>long</span> <span m='2727030'>fall</span> <span
  m='2727350'>here.</span> <span m='2728120'>And</span> <span
  m='2728620'>then</span> <span m='2728760'>you</span> <span
  m='2728860'>have</span> <span m='2729130'>to</span> <span
  m='2729210'>get</span> <span m='2729350'>the</span> <span
  m='2729430'>mushroom</span> <span m='2729820'>so</span> <span
  m='2729960'>you</span> <span m='2730050'>can</span> <span
  m='2730630'>escape</span> <span m='2731020'>again.</span> <span
  m='2732610'>So</span> <span m='2732930'>at</span> <span m='2733030'>the</span>
  <span m='2733150'>end</span> <span m='2733420'>there's</span> <span
  m='2733630'>like</span> <span m='2733850'>a</span> <span
  m='2734940'>mushroom</span> <span m='2737450'>check.</span> <span
  m='2739250'>Make</span> <span m='2739420'>sure</span> <span
  m='2739560'>you</span> <span m='2739670'>have</span> <span
  m='2739880'>it.</span> </p><p><span m='2740950'>So</span> <span
  m='2741220'>most</span> <span m='2741450'>of</span> <span
  m='2741510'>the</span> <span m='2741570'>time</span> <span
  m='2741830'>Mario</span> <span m='2742090'>is</span> <span
  m='2742190'>big.</span> <span m='2742790'>And</span> <span
  m='2742980'>just</span> <span m='2743200'>in</span> <span
  m='2743270'>these</span> <span m='2743420'>little</span> <span
  m='2743590'>crossovers</span> <span m='2744260'>you</span> <span
  m='2744340'>have</span> <span m='2744470'>to</span> <span
  m='2744550'>make</span> <span m='2744730'>these</span> <span
  m='2744870'>decisions.</span> <span m='2745460'>This</span> <span
  m='2745570'>would</span> <span m='2745660'>make</span> <span
  m='2745860'>a</span> <span m='2745910'>giant</span> <span
  m='2746710'>level,</span> <span m='2747370'>but</span> <span
  m='2747660'>it</span> <span m='2747740'>is</span> <span
  m='2747890'>polynomial</span> <span m='2748440'>size,</span> <span
  m='2751250'>probably</span> <span m='2751530'>quadratic</span> <span
  m='2752200'>or</span> <span m='2752260'>something.</span> <span
  m='2754680'>Therefore</span> <span m='2755130'>Super</span> <span
  m='2755420'>Mario</span> <span m='2755680'>Brothers</span> <span
  m='2756010'>is</span> <span m='2756140'>NP-hard.</span> </p><p><span
  m='2759050'>So</span> <span m='2759720'>if</span> <span m='2759890'>you</span>
  <span m='2759980'>want</span> <span m='2760190'>more</span> <span
  m='2760370'>fun</span> <span m='2760600'>examples</span> <span
  m='2761040'>like</span> <span m='2761210'>this,</span> <span
  m='2761420'>you</span> <span m='2761520'>should</span> <span
  m='2761810'>check</span> <span m='2762090'>out</span> <span
  m='2762320'>6.890,</span> <span m='2763360'>the</span> <span
  m='2763490'>class</span> <span m='2763770'>I</span> <span
  m='2763820'>taught</span> <span m='2764030'>last</span> <span
  m='2764240'>semester,</span> <span m='2764650'>which</span> <span
  m='2764920'>has</span> <span m='2765360'>online</span> <span
  m='2766210'>video</span> <span m='2766440'>lectures,</span> <span
  m='2766830'>soon</span> <span m='2767020'>to</span> <span
  m='2767090'>be</span> <span m='2767260'>on</span> <span
  m='2767390'>OpenCourseWare.</span> <span m='2768100'>So</span> <span
  m='2768910'>you</span> <span m='2769090'>can</span> <span
  m='2770440'>play</span> <span m='2770630'>with</span> <span
  m='2770750'>that.</span> </p><p><span m='2772310'>Any</span> <span
  m='2772500'>questions</span> <span m='2773040'>about</span> <span
  m='2773890'>Mario?</span> <span m='2777340'>All</span> <span
  m='2777430'>right,</span> <span m='2777730'>I</span> <span
  m='2777800'>hope</span> <span m='2778000'>you all</span> <span
  m='2778240'>play.</span> </p><p><span m='2787380'>So</span> <span
  m='2787720'>the</span> <span m='2787780'>next</span> <span
  m='2788080'>topic</span> <span m='2789770'>is</span> <span
  m='2789860'>a</span> <span m='2789920'>problem</span> <span
  m='2790270'>you</span> <span m='2790340'>probably</span> <span
  m='2790730'>haven't</span> <span m='2791010'>heard</span> <span
  m='2791200'>about,</span> <span m='2792230'>three</span> <span
  m='2792460'>dimensional</span> <span m='2792910'>matching.</span> <span
  m='2803880'>This</span> <span m='2804070'>is</span> <span m='2804230'>a</span>
  <span m='2804470'>kind</span> <span m='2804820'>of</span> <span
  m='2804900'>a</span> <span m='2804970'>graph</span> <span
  m='2805260'>theory</span> <span m='2805460'>problem.</span> <span
  m='2806980'>We're</span> <span m='2807150'>going</span> <span
  m='2807280'>to</span> <span m='2807350'>call</span> <span
  m='2807650'>it</span> <span m='2808300'>3DM</span> <span
  m='2809190'>for</span> <span m='2809280'>short.</span> <span
  m='2810590'>And</span> <span m='2810940'>you've</span> <span
  m='2811070'>seen</span> <span m='2811590'>matching</span> <span
  m='2811990'>problems</span> <span m='2812450'>based</span> <span
  m='2812710'>on</span> <span m='2812830'>flow.</span> <span
  m='2813640'>Matching</span> <span m='2814030'>problems</span> <span
  m='2814390'>are</span> <span m='2814480'>usually</span> <span
  m='2814880'>about</span> <span m='2815160'>pairs</span> <span
  m='2815630'>of</span> <span m='2815720'>things.</span> <span
  m='2816030'>You're</span> <span m='2816160'>pairing</span> <span
  m='2816560'>them</span> <span m='2816700'>up,</span> <span
  m='2817570'>which</span> <span m='2818040'>you</span> <span
  m='2818130'>might</span> <span m='2818300'>call</span> <span
  m='2818490'>two</span> <span m='2818710'>dimensional</span> <span
  m='2819110'>matching.</span> <span m='2819470'>That</span> <span
  m='2819690'>can</span> <span m='2819810'>be</span> <span
  m='2819910'>solved</span> <span m='2820370'>in</span> <span
  m='2820480'>polynomial</span> <span m='2820980'>time.</span> <span
  m='2821700'>But</span> <span m='2821890'>if</span> <span
  m='2821970'>you</span> <span m='2822060'>change</span> <span
  m='2822400'>two</span> <span m='2822550'>to</span> <span
  m='2822630'>three</span> <span m='2823130'>and</span> <span
  m='2823290'>you're</span> <span m='2823850'>tripling</span> <span
  m='2824410'>things</span> <span m='2824690'>up,</span> <span
  m='2825380'>then</span> <span m='2825860'>suddenly</span> <span
  m='2826260'>the</span> <span m='2826330'>problem</span> <span
  m='2826600'>becomes</span> <span m='2827480'>NP-complete.</span> <span
  m='2828420'>So</span> <span m='2829690'>it's</span> <span m='2829850'>a</span>
  <span m='2829920'>useful</span> <span m='2830530'>starting</span> <span
  m='2830910'>point,</span> <span m='2832520'>similar</span> <span
  m='2833010'>to</span> <span m='2833080'>3SAT.</span> </p><p><span
  m='2840090'>So</span> <span m='2840510'>you're</span> <span
  m='2840680'>given</span> <span m='2846910'>a</span> <span
  m='2847010'>set</span> <span m='2847390'>X</span> <span m='2847620'>of</span>
  <span m='2847860'>elements,</span> <span m='2848250'>a</span> <span
  m='2848310'>set</span> <span m='2848520'>Y</span> <span m='2848710'>of</span>
  <span m='2848910'>elements,</span> <span m='2849290'>a</span> <span
  m='2849555'>set</span> <span m='2849820'>Z</span> <span m='2849920'>of</span>
  <span m='2850010'>elements.</span> <span m='2850810'>None</span> <span
  m='2850990'>of</span> <span m='2851060'>them</span> <span
  m='2851210'>are</span> <span m='2851280'>shared.</span> <span
  m='2852770'>But</span> <span m='2852910'>more</span> <span
  m='2853050'>importantly,</span> <span m='2853660'>you</span> <span
  m='2853780'>are</span> <span m='2853880'>given</span> <span
  m='2854730'>a</span> <span m='2854870'>bunch</span> <span
  m='2855140'>of</span> <span m='2855490'>triples.</span> <span
  m='2857020'>These</span> <span m='2857280'>are</span> <span
  m='2857510'>the</span> <span m='2857630'>allowable</span> <span
  m='2858240'>triples.</span> <span m='2860850'>So</span> <span
  m='2861080'>we'll</span> <span m='2861200'>call</span> <span
  m='2861440'>the</span> <span m='2861510'>set</span> <span
  m='2861720'>of</span> <span m='2861930'>allowable</span> <span
  m='2862370'>triples</span> <span m='2863338'>T.</span> <span
  m='2864790'>And</span> <span m='2865150'>so</span> <span
  m='2865350'>we're</span> <span m='2865480'>looking</span> <span
  m='2865750'>at</span> <span m='2865900'>the</span> <span
  m='2865980'>cross</span> <span m='2866370'>product.</span> <span
  m='2867100'>This</span> <span m='2867310'>is</span> <span
  m='2867430'>the</span> <span m='2867500'>set</span> <span
  m='2867700'>of</span> <span m='2867790'>all</span> <span
  m='2868390'>triples</span> <span m='2869180'>X,</span> <span
  m='2869465'>Y,</span> <span m='2869750'>and</span> <span m='2869870'>Z,</span>
  <span m='2870290'>or</span> <span m='2870470'>X</span> <span
  m='2870680'>is</span> <span m='2870800'>in X,</span> <span
  m='2870890'>Y</span> <span m='2871310'>is in</span> <span
  m='2871490'>Y,</span> <span m='2871690'>and</span> <span m='2871790'>Z is
  in</span> <span m='2872080'>Z.</span> <span m='2873160'>But</span> <span
  m='2873420'>not</span> <span m='2873670'>all</span> <span
  m='2873810'>triples</span> <span m='2874160'>are</span> <span
  m='2874220'>allowed.</span> <span m='2874620'>Only</span> <span
  m='2874870'>some</span> <span m='2875080'>subset</span> <span
  m='2875950'>of</span> <span m='2876100'>triples</span> <span
  m='2876720'>is</span> <span m='2876940'>allowed.</span> <span
  m='2878210'>And</span> <span m='2878430'>your</span> <span
  m='2878560'>goal</span> <span m='2879810'>is</span> <span
  m='2880260'>to</span> <span m='2882250'>choose</span> <span
  m='2882740'>among</span> <span m='2883080'>those</span> <span
  m='2883240'>subsets--</span> <span m='2884520'>sorry,</span> <span
  m='2884800'>among</span> <span m='2885290'>those</span> <span
  m='2885510'>triples</span> <span m='2887590'>a</span> <span
  m='2887670'>subset</span> <span m='2888060'>of</span> <span
  m='2888130'>the</span> <span m='2888190'>triples.</span> <span
  m='2889440'>So</span> <span m='2889800'>we're</span> <span
  m='2889910'>trying</span> <span m='2890110'>to</span> <span
  m='2890180'>choose</span> <span m='2890460'>a</span> <span
  m='2890540'>subset</span> <span m='2891020'>S</span> <span
  m='2891450'>of</span> <span m='2891690'>T</span> <span m='2893280'>such</span>
  <span m='2893690'>that</span> <span m='2898190'>every</span> <span
  m='2898570'>element--</span> <span m='2905200'>so</span> <span
  m='2905460'>the</span> <span m='2905540'>things</span> <span
  m='2905870'>in</span> <span m='2905990'>X, Y,</span> <span
  m='2906420'>and</span> <span m='2906530'>Z</span> <span m='2906700'>are</span>
  <span m='2906760'>called</span> <span m='2907040'>elements.</span> <span
  m='2907500'>So</span> <span m='2907960'>I'm</span> <span
  m='2908420'>just</span> <span m='2908785'>taking</span> <span
  m='2909150'>somebody</span> <span m='2909910'>in</span> <span
  m='2910100'>the</span> <span m='2910230'>union</span> <span
  m='2910550'>XYZ.</span> <span m='2913240'>It</span> <span
  m='2913470'>should</span> <span m='2913720'>be</span> <span
  m='2913970'>in</span> <span m='2915560'>exactly</span> <span
  m='2919230'>one</span> <span m='2921280'>triple</span> <span
  m='2921860'>s</span> <span m='2922420'>in</span> <span m='2922900'>big</span>
  <span m='2923205'>S.</span> </p><p><span m='2928620'>This</span> <span
  m='2928730'>is</span> <span m='2928790'>a</span> <span
  m='2928820'>little</span> <span m='2929020'>weird,</span> <span
  m='2929310'>but</span> <span m='2929480'>you</span> <span
  m='2929590'>can</span> <span m='2929740'>think</span> <span
  m='2929950'>of</span> <span m='2930030'>this</span> <span
  m='2930180'>problem</span> <span m='2930600'>as</span> <span
  m='2930990'>you</span> <span m='2931150'>have</span> <span
  m='2932350'>an</span> <span m='2932570'>alien</span> <span
  m='2932990'>race</span> <span m='2933700'>with</span> <span
  m='2934400'>three</span> <span m='2934820'>genders--</span> <span
  m='2936140'>male,</span> <span m='2936520'>female,</span> <span
  m='2936960'>neuter</span> <span m='2937460'>I</span> <span
  m='2937540'>guess.</span> <span m='2938340'>Those</span> <span
  m='2938580'>are</span> <span m='2938620'>the</span> <span m='2938720'>X,
  Y,</span> <span m='2939150'>and</span> <span m='2939250'>Z's.</span> <span
  m='2939420'>There's</span> <span m='2939560'>an</span> <span
  m='2939640'>equal</span> <span m='2939940'>number</span> <span
  m='2940210'>of</span> <span m='2940290'>each.</span> <span
  m='2942420'>And</span> <span m='2943570'>every</span> <span
  m='2943910'>triple</span> <span m='2944970'>reports</span> <span
  m='2945440'>to</span> <span m='2945520'>you</span> <span
  m='2945600'>whether</span> <span m='2945850'>that</span> <span
  m='2946010'>is</span> <span m='2946160'>a</span> <span
  m='2946280'>compatible</span> <span m='2947400'>matching.</span> <span
  m='2948270'>Who</span> <span m='2948380'>knows</span> <span
  m='2948570'>what</span> <span m='2948680'>they're</span> <span
  m='2948780'>doing,</span> <span m='2949150'>all</span> <span
  m='2949320'>three</span> <span m='2949530'>of</span> <span
  m='2949590'>them?</span> </p><p><span m='2951130'>So</span> <span
  m='2951860'>you're</span> <span m='2952100'>told</span> <span
  m='2952580'>up</span> <span m='2952680'>front--</span> <span
  m='2953380'>you</span> <span m='2953470'>take</span> <span
  m='2953650'>a</span> <span m='2953690'>survey.</span> <span
  m='2954110'>There's</span> <span m='2954240'>only</span> <span m='2954460'>n
  cubed</span> <span m='2954850'>different</span> <span
  m='2955290'>triples.</span> <span m='2955790'>For</span> <span
  m='2955880'>each</span> <span m='2956120'>of</span> <span
  m='2956190'>them</span> <span m='2956390'>they</span> <span
  m='2956510'>say,</span> <span m='2957040'>yeah,</span> <span
  m='2957630'>I'd</span> <span m='2957880'>do</span> <span
  m='2958040'>that.</span> <span m='2959992'>So</span> <span
  m='2960970'>you</span> <span m='2961080'>were</span> <span
  m='2961200'>given</span> <span m='2961760'>that</span> <span
  m='2961970'>subset.</span> <span m='2962630'>And</span> <span
  m='2962800'>now</span> <span m='2962980'>your</span> <span
  m='2963290'>goal</span> <span m='2964220'>is</span> <span
  m='2964510'>to</span> <span m='2964990'>permanently</span> <span
  m='2965870'>triple</span> <span m='2966230'>up</span> <span
  m='2966400'>these</span> <span m='2966610'>guys.</span> <span
  m='2967380'>And</span> <span m='2967670'>everybody</span> <span
  m='2968720'>wants</span> <span m='2969020'>to</span> <span
  m='2969120'>be</span> <span m='2969400'>in</span> <span
  m='2969550'>exactly</span> <span m='2970020'>one</span> <span
  m='2970210'>triple.</span> <span m='2970630'>So</span> <span
  m='2970890'>it's</span> <span m='2971040'>a</span> <span
  m='2971120'>monogamous</span> <span m='2971920'>race,</span> <span
  m='2973090'>imagine.</span> <span m='2974860'>So</span> <span
  m='2975970'>everybody</span> <span m='2976410'>wants</span> <span
  m='2976610'>to</span> <span m='2976670'>be</span> <span m='2976760'>put</span>
  <span m='2976960'>in</span> <span m='2977050'>one</span> <span
  m='2977230'>triple,</span> <span m='2977580'>but</span> <span
  m='2977770'>only</span> <span m='2978010'>one</span> <span
  m='2978190'>triple.</span> <span m='2979380'>And</span> <span
  m='2979470'>the</span> <span m='2979530'>question</span> <span
  m='2979860'>is,</span> <span m='2980250'>is this</span> <span
  m='2980440'>possible?</span> <span m='2980900'>This</span> <span
  m='2981060'>is</span> <span m='2981160'>three</span> <span
  m='2981300'>dimensional</span> <span m='2981620'>matching.</span> <span
  m='2981920'>Certainly</span> <span m='2982280'>not</span> <span
  m='2982470'>always</span> <span m='2982640'>going</span> <span
  m='2982770'>to</span> <span m='2982850'>be</span> <span
  m='2982940'>possible,</span> <span m='2984120'>but</span> <span
  m='2984210'>sometimes</span> <span m='2984580'>it</span> <span
  m='2984660'>is.</span> <span m='2985450'>If</span> <span m='2985640'>it</span>
  <span m='2985710'>is,</span> <span m='2985890'>you</span> <span
  m='2985990'>want</span> <span m='2986150'>to</span> <span
  m='2986210'>answer</span> <span m='2986440'>yes.</span> <span
  m='2986810'>If</span> <span m='2986920'>it's</span> <span
  m='2987030'>not</span> <span m='2987200'>possible,</span> <span
  m='2987550'>you</span> <span m='2987630'>want</span> <span
  m='2987760'>to</span> <span m='2987820'>answer</span> <span
  m='2988030'>no.</span> </p><p><span m='2990060'>This</span> <span
  m='2990250'>problem</span> <span m='2990510'>is</span> <span
  m='2990620'>NP-complete.</span> <span m='2992180'>Why</span> <span
  m='2992480'>is it</span> <span m='2992690'>in</span> <span
  m='2992820'>NP?</span> <span m='2994150'>Because</span> <span
  m='2994660'>I</span> <span m='2994740'>can</span> <span
  m='2994930'>basically</span> <span m='2995450'>guess</span> <span
  m='2996240'>which</span> <span m='2996690'>elements</span> <span
  m='2997060'>of</span> <span m='2997160'>T</span> <span m='2997440'>are</span>
  <span m='2997610'>in</span> <span m='2997810'>S.</span> <span
  m='2998140'>There's</span> <span m='2998470'>only</span> <span
  m='2999160'>at</span> <span m='2999320'>most</span> <span m='2999520'>n</span>
  <span m='2999680'>cubed</span> <span m='2999970'>of</span> <span
  m='3000060'>them.</span> <span m='3000730'>So</span> <span
  m='3001080'>for</span> <span m='3001180'>each</span> <span
  m='3001330'>one,</span> <span m='3001510'>it</span> <span
  m='3001600'>is</span> <span m='3001700'>guess</span> <span
  m='3001980'>yes</span> <span m='3002190'>or</span> <span
  m='3002240'>no,</span> <span m='3002510'>is</span> <span
  m='3002780'>that</span> <span m='3002980'>element</span> <span
  m='3003250'>of</span> <span m='3003310'>T</span> <span m='3003550'>in</span>
  <span m='3003700'>S?</span> <span m='3004310'>And</span> <span
  m='3004450'>then</span> <span m='3004550'>I</span> <span
  m='3004620'>check</span> <span m='3004970'>whether</span> <span
  m='3005210'>this</span> <span m='3005430'>coverage</span> <span
  m='3005920'>constraint</span> <span m='3006660'>holds.</span> </p><p><span
  m='3007270'>So</span> <span m='3007420'>it's</span> <span
  m='3007510'>very</span> <span m='3007680'>easy</span> <span
  m='3008470'>to</span> <span m='3008530'>prove</span> <span
  m='3008720'>this</span> <span m='3008870'>is</span> <span
  m='3008980'>in</span> <span m='3009130'>NP.</span> <span
  m='3012540'>The</span> <span m='3012630'>challenge</span> <span
  m='3013090'>is</span> <span m='3013210'>to</span> <span
  m='3013310'>prove</span> <span m='3013750'>that</span> <span
  m='3013920'>it's</span> <span m='3014080'>NP-hard.</span> <span
  m='3015940'>And</span> <span m='3016120'>we're</span> <span
  m='3016210'>going</span> <span m='3016330'>to</span> <span
  m='3016400'>do</span> <span m='3016570'>that,</span> <span
  m='3016830'>again,</span> <span m='3017630'>by</span> <span
  m='3017850'>reducing</span> <span m='3018480'>from</span> <span
  m='3020360'>3SAT.</span> </p><p><span m='3032510'>So</span> <span
  m='3032960'>we're</span> <span m='3033080'>going</span> <span
  m='3033230'>to</span> <span m='3033850'>make</span> <span m='3034020'>a</span>
  <span m='3034070'>reduction</span> <span m='3035260'>from</span> <span
  m='3035790'>3SAT</span> <span m='3036640'>to</span> <span
  m='3037770'>three</span> <span m='3037960'>dimensional</span> <span
  m='3038330'>matching.</span> <span m='3038850'>Direction</span> <span
  m='3039230'>is</span> <span m='3039330'>important.</span> <span
  m='3039840'>Always</span> <span m='3040180'>reduce</span> <span
  m='3040480'>from</span> <span m='3040940'>the</span> <span
  m='3041000'>thing</span> <span m='3041210'>you</span> <span
  m='3041330'>know</span> <span m='3041590'>is</span> <span
  m='3041690'>hard</span> <span m='3042030'>and</span> <span
  m='3042410'>reduce</span> <span m='3042800'>to</span> <span
  m='3043080'>the</span> <span m='3043160'>thing</span> <span
  m='3043400'>you</span> <span m='3043490'>don't</span> <span
  m='3043720'>know</span> <span m='3043880'>is</span> <span
  m='3043990'>hard.</span> </p><p><span m='3045230'>So</span> <span
  m='3045740'>again,</span> <span m='3046220'>we're</span> <span
  m='3046340'>given</span> <span m='3046630'>a</span> <span
  m='3046680'>formula.</span> <span m='3047320'>And</span> <span
  m='3047750'>we</span> <span m='3047910'>want</span> <span
  m='3048060'>to</span> <span m='3048120'>convert</span> <span
  m='3048590'>that</span> <span m='3048770'>formula</span> <span
  m='3049640'>into</span> <span m='3049960'>an</span> <span
  m='3050040'>equivalent</span> <span m='3050940'>three</span> <span
  m='3051140'>dimensional</span> <span m='3051540'>matching</span> <span
  m='3052050'>input.</span> <span m='3053670'>So</span> <span
  m='3054280'>the</span> <span m='3054410'>formula</span> <span
  m='3054930'>has</span> <span m='3055850'>variables</span> <span
  m='3056520'>and</span> <span m='3056650'>clauses.</span> <span
  m='3057310'>For</span> <span m='3057410'>each</span> <span
  m='3057630'>variable,</span> <span m='3058090'>we're</span> <span
  m='3058190'>going</span> <span m='3058320'>to</span> <span
  m='3058380'>build</span> <span m='3058590'>a</span> <span
  m='3058640'>gadget</span> <span m='3059480'>that</span> <span
  m='3059630'>looks</span> <span m='3060190'>like</span> <span
  m='3060390'>this.</span> <span m='3061940'>And</span> <span
  m='3062300'>for</span> <span m='3062420'>each</span> <span
  m='3062570'>clause</span> <span m='3063010'>we're</span> <span
  m='3063110'>going</span> <span m='3063210'>to</span> <span
  m='3063310'>build</span> <span m='3063350'>a</span> <span
  m='3063390'>gadget.</span> </p><p><span m='3063860'>So</span> <span
  m='3064060'>here's</span> <span m='3064280'>what</span> <span
  m='3064400'>they</span> <span m='3064500'>look</span> <span
  m='3064700'>like.</span> <span m='3066720'>If</span> <span
  m='3066890'>we</span> <span m='3067010'>have</span> <span m='3068580'>a</span>
  <span m='3068670'>variable</span> <span m='3069614'>x1,</span> <span
  m='3071980'>we're</span> <span m='3072110'>going</span> <span
  m='3072370'>to</span> <span m='3072480'>convert</span> <span
  m='3072890'>that</span> <span m='3073730'>into</span> <span
  m='3074990'>this</span> <span m='3075230'>picture.</span> <span
  m='3090490'>Stay</span> <span m='3090850'>monochromatic</span> <span
  m='3091530'>for</span> <span m='3091660'>now.</span> <span
  m='3096660'>Looks</span> <span m='3096900'>pretty</span> <span
  m='3097060'>crazy</span> <span m='3097370'>at</span> <span
  m='3097460'>the</span> <span m='3097530'>moment,</span> <span
  m='3099890'>but</span> <span m='3099990'>it's</span> <span
  m='3100180'>not</span> <span m='3100380'>so</span> <span
  m='3100700'>crazy.</span> </p><p><span m='3116510'>This</span> <span
  m='3116700'>is</span> <span m='3116830'>not</span> <span
  m='3117060'>supposed</span> <span m='3117330'>to</span> <span
  m='3117400'>be</span> <span m='3117540'>obvious.</span> <span
  m='3118490'>You</span> <span m='3118620'>have</span> <span
  m='3118800'>to</span> <span m='3118890'>think</span> <span
  m='3119780'>for</span> <span m='3119950'>a</span> <span
  m='3120020'>while.</span> <span m='3120330'>It's</span> <span
  m='3120520'>a</span> <span m='3120570'>puzzle</span> <span
  m='3120900'>to</span> <span m='3120970'>figure</span> <span
  m='3121260'>out</span> <span m='3121570'>this</span> <span
  m='3121700'>kind</span> <span m='3121870'>of</span> <span
  m='3121960'>thing.</span> <span m='3123310'>But</span> <span
  m='3123570'>I</span> <span m='3123710'>call</span> <span
  m='3123980'>this</span> <span m='3124130'>thing</span> <span
  m='3124360'>a</span> <span m='3124410'>variable</span> <span
  m='3124910'>gadget</span> <span m='3125380'>because</span> <span
  m='3126500'>locally--</span> <span m='3128610'>so</span> <span
  m='3128750'>there's</span> <span m='3128840'>basically</span> <span
  m='3129670'>a</span> <span m='3129760'>wheel</span> <span
  m='3130140'>in</span> <span m='3130250'>the</span> <span
  m='3130310'>center</span> <span m='3130620'>here.</span> <span
  m='3131450'>And</span> <span m='3131630'>then</span> <span
  m='3131750'>there's</span> <span m='3131920'>these</span> <span
  m='3132100'>extra</span> <span m='3133320'>dots</span> <span
  m='3133740'>for</span> <span m='3133890'>every</span> <span
  m='3134160'>pair</span> <span m='3134410'>of</span> <span
  m='3134520'>dots,</span> <span m='3134850'>consecutive</span> <span
  m='3135280'>pairs of</span> <span m='3135760'>dots in</span> <span
  m='3135860'>a</span> <span m='3135920'>wheel.</span> <span
  m='3137100'>And</span> <span m='3137550'>what</span> <span
  m='3137680'>I've</span> <span m='3137790'>drawn</span> <span
  m='3138100'>is</span> <span m='3138240'>the</span> <span
  m='3138310'>set</span> <span m='3138510'>of</span> <span
  m='3138590'>triples</span> <span m='3139040'>that</span> <span
  m='3139180'>are</span> <span m='3139290'>allowed.</span> <span
  m='3139960'>There's</span> <span m='3140160'>tons</span> <span
  m='3140430'>of</span> <span m='3140530'>other</span> <span
  m='3140670'>triples</span> <span m='3141050'>which</span> <span
  m='3141210'>are</span> <span m='3141270'>forbidden.</span> <span
  m='3142620'>The</span> <span m='3142700'>triples</span> <span
  m='3143090'>that</span> <span m='3143200'>are</span> <span
  m='3143280'>in</span> <span m='3143510'>T</span> <span m='3144180'>are</span>
  <span m='3144370'>the</span> <span m='3144450'>ones</span> <span
  m='3144670'>that</span> <span m='3144780'>I</span> <span m='3144850'>draw
  as</span> <span m='3145280'>little</span> <span m='3145460'>triangles.</span>
  </p><p><span m='3147490'>And</span> <span m='3147750'>two</span> <span
  m='3148060'>color</span> <span m='3148380'>them</span> <span
  m='3148580'>because</span> <span m='3149070'>there</span> <span
  m='3149190'>are</span> <span m='3149220'>exactly</span> <span
  m='3149850'>two</span> <span m='3150180'>ways</span> <span
  m='3150480'>to</span> <span m='3150580'>solve</span> <span
  m='3150880'>this</span> <span m='3151030'>gadget</span> <span
  m='3151380'>locally.</span> <span m='3151850'>Now</span> <span
  m='3152020'>these</span> <span m='3152290'>dots</span> <span
  m='3153140'>are</span> <span m='3153300'>going</span> <span
  m='3153500'>to</span> <span m='3153560'>be</span> <span
  m='3153810'>connected</span> <span m='3154180'>to</span> <span
  m='3154270'>other</span> <span m='3154490'>gadgets.</span> <span
  m='3155310'>But</span> <span m='3155490'>these</span> <span
  m='3155710'>dots</span> <span m='3156120'>only</span> <span
  m='3156470'>exist</span> <span m='3157520'>in</span> <span
  m='3157720'>this</span> <span m='3157890'>gadget,</span> <span
  m='3158770'>which</span> <span m='3158960'>means</span> <span
  m='3159670'>they've</span> <span m='3159840'>got</span> <span
  m='3160000'>to</span> <span m='3160060'>be</span> <span
  m='3160150'>covered.</span> <span m='3160490'>They've</span> <span
  m='3160620'>got</span> <span m='3160750'>to</span> <span m='3160820'>be</span>
  <span m='3160910'>covered</span> <span m='3161210'>exactly</span> <span
  m='3161600'>once.</span> </p><p><span m='3161990'>So</span> <span
  m='3162260'>either</span> <span m='3162570'>you</span> <span
  m='3162730'>choose</span> <span m='3163070'>the</span> <span
  m='3163150'>blue</span> <span m='3164860'>triangles,</span> <span
  m='3165470'>or</span> <span m='3165670'>you</span> <span
  m='3165750'>choose</span> <span m='3165980'>the</span> <span
  m='3166080'>red</span> <span m='3166260'>triangles.</span> <span
  m='3167050'>Each</span> <span m='3167260'>of</span> <span
  m='3167340'>them</span> <span m='3167500'>will</span> <span
  m='3167630'>exactly</span> <span m='3168160'>cover</span> <span
  m='3168960'>each</span> <span m='3169170'>of</span> <span
  m='3169240'>these</span> <span m='3169370'>guys</span> <span
  m='3169710'>once.</span> <span m='3171840'>You</span> <span
  m='3171970'>cannot</span> <span m='3172430'>mix</span> <span
  m='3172680'>and</span> <span m='3172770'>match</span> <span
  m='3173030'>red</span> <span m='3173180'>and</span> <span
  m='3173280'>blue,</span> <span m='3173890'>because</span> <span
  m='3174070'>you</span> <span m='3174220'>either</span> <span
  m='3174490'>get</span> <span m='3174700'>overlap</span> <span
  m='3175690'>if</span> <span m='3175860'>you</span> <span
  m='3175950'>choose</span> <span m='3176230'>two</span> <span
  m='3176370'>guys</span> <span m='3176690'>that</span> <span m='3176810'>share
  a</span> <span m='3177105'>point,</span> <span m='3177640'>or</span> <span
  m='3177860'>you'd</span> <span m='3177980'>miss</span> <span
  m='3178240'>one.</span> <span m='3179250'>If</span> <span m='3179350'>I</span>
  <span m='3179450'>choose</span> <span m='3179850'>like</span> <span
  m='3180090'>this</span> <span m='3180290'>blue</span> <span
  m='3180950'>and</span> <span m='3181110'>this</span> <span
  m='3181280'>red,</span> <span m='3181770'>then</span> <span
  m='3181910'>I</span> <span m='3181970'>can't</span> <span
  m='3182270'>cover</span> <span m='3182550'>this</span> <span
  m='3182730'>point</span> <span m='3183580'>because</span> <span
  m='3183940'>both</span> <span m='3184180'>of</span> <span
  m='3184280'>these</span> <span m='3184550'>would</span> <span
  m='3184670'>overlap</span> <span m='3185140'>those</span> <span
  m='3185360'>two.</span> <span m='3185910'>And</span> <span
  m='3186090'>over</span> <span m='3186250'>here</span> <span
  m='3186440'>you</span> <span m='3186580'>have</span> <span
  m='3186910'>to</span> <span m='3187020'>choose</span> <span
  m='3187870'>[INAUDIBLE]</span> <span m='3188330'>triples.</span> <span
  m='3189080'>They</span> <span m='3189200'>can't</span> <span
  m='3189410'>overlap</span> <span m='3189790'>at</span> <span
  m='3189870'>all.</span> <span m='3190590'>And</span> <span
  m='3191640'>everybody</span> <span m='3192090'>has</span> <span
  m='3192260'>to</span> <span m='3192350'>get</span> <span
  m='3192510'>covered.</span> </p><p><span m='3193270'>So</span> <span
  m='3194010'>just</span> <span m='3194260'>given</span> <span
  m='3194480'>those</span> <span m='3194650'>constraints,</span> <span
  m='3195160'>locally</span> <span m='3195560'>you</span> <span
  m='3195640'>can</span> <span m='3195770'>see</span> <span
  m='3195930'>you</span> <span m='3196040'>have</span> <span
  m='3196300'>to</span> <span m='3196390'>choose</span> <span
  m='3196640'>red</span> <span m='3197490'>or</span> <span
  m='3197660'>blue.</span> <span m='3198260'>Guess</span> <span
  m='3198500'>what?</span> <span m='3198920'>One</span> <span
  m='3199120'>of</span> <span m='3199200'>them</span> <span
  m='3199340'>is</span> <span m='3199460'>true,</span> <span
  m='3200070'>the</span> <span m='3200190'>other</span> <span
  m='3200340'>one</span> <span m='3200460'>is</span> <span
  m='3200570'>false.</span> <span m='3201800'>Let's</span> <span
  m='3201980'>say</span> <span m='3202170'>that</span> <span
  m='3202590'>red</span> <span m='3202970'>is</span> <span
  m='3203230'>true</span> <span m='3204450'>and</span> <span
  m='3204740'>blue</span> <span m='3204990'>is</span> <span
  m='3205110'>false.</span> <span m='3205580'>In</span> <span
  m='3205710'>general,</span> <span m='3206290'>when</span> <span
  m='3206470'>you're</span> <span m='3206560'>trying</span> <span
  m='3206760'>to</span> <span m='3206840'>build</span> <span
  m='3207010'>a</span> <span m='3207040'>variable</span> <span
  m='3207430'>gadget,</span> <span m='3207830'>you</span> <span
  m='3208140'>build</span> <span m='3208380'>something</span> <span
  m='3209130'>that</span> <span m='3209290'>has</span> <span
  m='3209670'>exactly</span> <span m='3210180'>two</span> <span
  m='3210380'>solutions,</span> <span m='3211330'>one</span> <span
  m='3211530'>representing</span> <span m='3211960'>true,</span> <span
  m='3212180'>one</span> <span m='3212360'>representing</span> <span
  m='3212780'>false.</span> </p><p><span m='3213220'>Now</span> <span
  m='3213280'>how</span> <span m='3213580'>big</span> <span
  m='3213820'>do</span> <span m='3213950'>I</span> <span m='3214030'>make</span>
  <span m='3214270'>this</span> <span m='3215160'>wheel?</span> <span
  m='3216850'>Big</span> <span m='3217060'>enough.</span> <span
  m='3219800'>You</span> <span m='3219990'>could</span> <span
  m='3220160'>make</span> <span m='3220340'>it</span> <span
  m='3220420'>as</span> <span m='3220550'>big</span> <span m='3220790'>as</span>
  <span m='3220930'>the</span> <span m='3221000'>number</span> <span
  m='3221240'>of</span> <span m='3221320'>clauses.</span> <span
  m='3221970'>I'm</span> <span m='3222080'>going</span> <span
  m='3222200'>to</span> <span m='3222260'>make</span> <span
  m='3222540'>it</span> <span m='3223580'>into</span> <span
  m='3224810'>two</span> <span m='3225550'>and</span> <span
  m='3225996'>x1.</span> <span m='3226890'>So</span> <span
  m='3229210'>wheel--</span> <span m='3231320'>and</span> <span
  m='3232280'>this</span> <span m='3232670'>number</span> <span
  m='3233060'>is</span> <span m='3233320'>the</span> <span
  m='3233570'>number</span> <span m='3234080'>of</span> <span
  m='3234250'>occurrences</span> <span m='3239110'>of</span> <span
  m='3239340'>x1</span> <span m='3241250'>in</span> <span m='3241490'>the</span>
  <span m='3241550'>formula.</span> <span m='3243680'>So</span> <span
  m='3243750'>this</span> <span m='3243960'>is</span> <span
  m='3244100'>the</span> <span m='3244200'>number</span> <span
  m='3244490'>of</span> <span m='3244580'>clauses</span> <span
  m='3245070'>that</span> <span m='3245200'>contain</span> <span
  m='3245700'>either</span> <span m='3245940'>xi</span> <span
  m='3246410'>or</span> <span m='3246590'>xi</span> <span
  m='3246900'>bar.</span> <span m='3248720'>That's</span> <span m='3249100'>in
  xi.</span> </p><p><span m='3249585'>I'm</span> <span m='3250070'>going</span>
  <span m='3250220'>to</span> <span m='3250280'>double</span> <span
  m='3250600'>that.</span> <span m='3251580'>Because</span> <span
  m='3252080'>what</span> <span m='3252280'>I</span> <span
  m='3252360'>get</span> <span m='3252720'>over</span> <span
  m='3252890'>here</span> <span m='3253190'>is</span> <span
  m='3253330'>basically</span> <span m='3253870'>xi</span> <span
  m='3254960'>being</span> <span m='3255900'>true</span> <span
  m='3257350'>for</span> <span m='3259200'>those</span> <span
  m='3259530'>guys.</span> <span m='3261540'>Actually,</span> <span
  m='3263200'>yeah,</span> <span m='3263810'>that's</span> <span
  m='3264050'>actually</span> <span m='3264320'>right.</span> <span
  m='3265020'>It</span> <span m='3265120'>looks</span> <span
  m='3265290'>backwards.</span> <span m='3267220'>And</span> <span
  m='3267420'>false</span> <span m='3267880'>for</span> <span
  m='3268000'>these</span> <span m='3268210'>guys.</span> <span
  m='3271670'>One</span> <span m='3271860'>way</span> <span
  m='3271960'>or</span> <span m='3272020'>the</span> <span
  m='3272130'>other,</span> <span m='3272420'>we'll</span> <span
  m='3272510'>figure</span> <span m='3272780'>it</span> <span
  m='3272850'>out.</span> </p><p><span m='3275380'>So</span> <span
  m='3276810'>in</span> <span m='3277140'>order</span> <span
  m='3277370'>for</span> <span m='3277610'>xi</span> <span m='3277950'>to</span>
  <span m='3278120'>appear</span> <span m='3278720'>in,</span> <span
  m='3278950'>say,</span> <span m='3279230'>five</span> <span
  m='3279590'>different</span> <span m='3279900'>clauses,</span> <span
  m='3280800'>I</span> <span m='3280930'>want</span> <span
  m='3281270'>five</span> <span m='3282050'>of</span> <span
  m='3282280'>the</span> <span m='3282360'>true</span> <span
  m='3282630'>things</span> <span m='3283350'>and</span> <span
  m='3283550'>five</span> <span m='3283860'>of</span> <span
  m='3283990'>the</span> <span m='3284060'>false</span> <span
  m='3284420'>things.</span> <span m='3285590'>And</span> <span
  m='3285810'>so</span> <span m='3285930'>I</span> <span m='3285990'>need</span>
  <span m='3286140'>to</span> <span m='3286230'>double</span> <span
  m='3286650'>in</span> <span m='3286750'>order</span> <span
  m='3286940'>to</span> <span m='3287070'>get--</span> <span
  m='3289030'>potentially</span> <span m='3289980'>I</span> <span
  m='3290100'>have</span> <span m='3290210'>twice</span> <span
  m='3290470'>as</span> <span m='3290560'>many</span> <span
  m='3290740'>as</span> <span m='3290840'>I</span> <span
  m='3290940'>actually</span> <span m='3291270'>need,</span> <span
  m='3291520'>but</span> <span m='3291660'>this</span> <span
  m='3291810'>way</span> <span m='3291960'>I'm</span> <span
  m='3292060'>guaranteed</span> <span m='3292480'>to</span> <span
  m='3292580'>have</span> <span m='3292890'>false</span> <span
  m='3293170'>or</span> <span m='3293220'>true,</span> <span
  m='3293490'>whichever</span> <span m='3293880'>I</span> <span
  m='3294000'>need.</span> <span m='3295830'>In</span> <span
  m='3295960'>reality</span> <span m='3296360'>I</span> <span
  m='3296430'>have</span> <span m='3296600'>some</span> <span
  m='3296810'>true</span> <span m='3297010'>occurrences.</span> <span
  m='3297560'>I</span> <span m='3297640'>have</span> <span
  m='3297780'>some</span> <span m='3297920'>false</span> <span
  m='3298230'>occurrences,</span> <span m='3298810'>some</span> <span
  m='3299010'>x1's,</span> <span m='3299840'>some</span> <span
  m='3300060'>x1</span> <span m='3300360'>bars.</span> <span
  m='3301210'>This</span> <span m='3301390'>will</span> <span
  m='3301480'>guarantee</span> <span m='3301850'>that</span> <span
  m='3301980'>I</span> <span m='3302050'>have</span> <span
  m='3302230'>enough</span> <span m='3302680'>of</span> <span
  m='3302860'>these</span> <span m='3305080'>free</span> <span
  m='3305570'>points</span> <span m='3306600'>to</span> <span
  m='3306760'>connect</span> <span m='3307160'>into</span> <span
  m='3307340'>my</span> <span m='3307490'>clause</span> <span
  m='3307850'>gadgets.</span> </p><p><span m='3309720'>How</span> <span
  m='3309840'>do</span> <span m='3309930'>I</span> <span m='3310000'>do</span>
  <span m='3310120'>a</span> <span m='3310170'>clause</span> <span
  m='3310570'>gadget?</span> <span m='3311400'>It's</span> <span
  m='3311530'>actually</span> <span m='3311800'>really</span> <span
  m='3312000'>easy.</span> <span m='3317160'>So</span> <span
  m='3317240'>these</span> <span m='3317390'>would</span> <span
  m='3317480'>be</span> <span m='3317580'>pretty</span> <span
  m='3317800'>boring</span> <span m='3318130'>by</span> <span
  m='3318270'>themselves.</span> <span m='3325590'>So</span> <span m='3325790'>a
  clause</span> <span m='3326230'>always</span> <span m='3326480'>looks</span>
  <span m='3326670'>like</span> <span m='3326840'>this.</span> <span
  m='3327180'>Maybe</span> <span m='3327440'>there's</span> <span
  m='3327610'>some</span> <span m='3327780'>negations.</span> <span
  m='3330860'>Yeah,</span> <span m='3331130'>let's</span> <span
  m='3331620'>do</span> <span m='3332110'>something</span> <span
  m='3332610'>like</span> <span m='3332760'>that.</span> <span
  m='3334620'>I'm</span> <span m='3334760'>going</span> <span
  m='3334880'>to</span> <span m='3334940'>convert</span> <span
  m='3335340'>it</span> <span m='3335500'>into a</span> <span
  m='3335980'>very</span> <span m='3336220'>simple</span> <span
  m='3336520'>picture.</span> <span m='3343810'>It's</span> <span
  m='3343960'>going</span> <span m='3344110'>to</span> <span
  m='3344170'>be</span> <span m='3344520'>xi</span> <span
  m='3344937'>dot,</span> <span m='3346190'>and</span> <span
  m='3346370'>xj</span> <span m='3346800'>bar</span> <span
  m='3347020'>dot,</span> <span m='3348290'>and</span> <span
  m='3348500'>xk</span> <span m='3349306'>dot.</span> <span
  m='3350700'>And</span> <span m='3351090'>then--</span> <span
  m='3353880'>well</span> <span m='3354680'>maybe</span> <span
  m='3354980'>I'll</span> <span m='3355060'>stick</span> <span
  m='3355340'>to</span> <span m='3355740'>these</span> <span
  m='3355920'>colors.</span> </p><p><span m='3362400'>Again,</span> <span
  m='3364040'>these</span> <span m='3364360'>two</span> <span
  m='3364490'>points</span> <span m='3364940'>only</span> <span
  m='3365340'>appear</span> <span m='3365750'>in</span> <span
  m='3365910'>this</span> <span m='3366070'>clause</span> <span
  m='3366420'>gadget.</span> <span m='3366940'>These</span> <span
  m='3367260'>dots</span> <span m='3368340'>are</span> <span
  m='3368480'>actually</span> <span m='3369020'>these</span> <span
  m='3369350'>dots.</span> <span m='3370410'>So</span> <span
  m='3370830'>there's</span> <span m='3371160'>one</span> <span
  m='3371320'>of</span> <span m='3371400'>these</span> <span
  m='3371560'>pictures</span> <span m='3371960'>for</span> <span
  m='3372150'>x1.</span> <span m='3372570'>There's</span> <span
  m='3372710'>another</span> <span m='3372890'>one</span> <span
  m='3372990'>for</span> <span m='3373100'>x2,</span> <span
  m='3373530'>x3.</span> <span m='3374330'>And</span> <span
  m='3374470'>so</span> <span m='3374610'>xi</span> <span m='3375220'>has</span>
  <span m='3375610'>one</span> <span m='3375750'>of</span> <span
  m='3375830'>these</span> <span m='3376000'>wheels.</span> <span
  m='3376770'>I</span> <span m='3376880'>want</span> <span
  m='3377150'>this</span> <span m='3377290'>dot</span> <span
  m='3377650'>to</span> <span m='3377750'>be</span> <span m='3377900'>one</span>
  <span m='3378110'>of</span> <span m='3378200'>these</span> <span
  m='3378420'>dots</span> <span m='3378810'>of</span> <span
  m='3378980'>the</span> <span m='3379060'>wheel.</span> <span
  m='3380190'>And</span> <span m='3380390'>then</span> <span
  m='3381150'>I</span> <span m='3381250'>want</span> <span
  m='3381480'>this</span> <span m='3381650'>dot</span> <span
  m='3381920'>to</span> <span m='3382050'>be</span> <span m='3382720'>one</span>
  <span m='3382900'>of</span> <span m='3382960'>the</span> <span
  m='3383020'>dots</span> <span m='3383340'>in</span> <span
  m='3383580'>the</span> <span m='3383920'>xj</span> <span
  m='3384660'>wheel</span> <span m='3384970'>with</span> <span
  m='3385110'>the</span> <span m='3385170'>false</span> <span
  m='3385760'>setting,</span> <span m='3386160'>one</span> <span
  m='3386300'>of</span> <span m='3386370'>the</span> <span
  m='3386460'>red</span> <span m='3386660'>dots.</span> <span
  m='3387600'>I</span> <span m='3387730'>want</span> <span
  m='3387970'>this</span> <span m='3388190'>one</span> <span
  m='3388810'>to</span> <span m='3388960'>be</span> <span m='3389850'>xk</span>
  <span m='3390340'>true</span> <span m='3390670'>setting</span> <span
  m='3391270'>in</span> <span m='3391600'>the</span> <span m='3392370'>xk</span>
  <span m='3393370'>wheel.</span> </p><p><span m='3395130'>So</span> <span
  m='3395360'>these</span> <span m='3395520'>things</span> <span
  m='3395690'>are</span> <span m='3395770'>all</span> <span
  m='3395990'>connected</span> <span m='3396390'>together</span> <span
  m='3396730'>in</span> <span m='3396800'>a</span> <span
  m='3396850'>complicated</span> <span m='3397420'>pattern.</span> <span
  m='3398310'>But</span> <span m='3398490'>the</span> <span
  m='3398550'>point</span> <span m='3398780'>is</span> <span
  m='3398860'>that</span> <span m='3399280'>within</span> <span
  m='3399600'>this</span> <span m='3399750'>gadget,</span> <span
  m='3400110'>I</span> <span m='3400170'>only</span> <span
  m='3400400'>have</span> <span m='3400580'>three</span> <span
  m='3401280'>allowed</span> <span m='3401890'>triples.</span> <span
  m='3402910'>And</span> <span m='3403090'>these</span> <span
  m='3403240'>points</span> <span m='3403610'>only</span> <span
  m='3403890'>appear</span> <span m='3404160'>in</span> <span
  m='3404240'>this</span> <span m='3404380'>gadget,</span> <span
  m='3404790'>which</span> <span m='3404960'>means</span> <span
  m='3405190'>they</span> <span m='3405310'>have</span> <span
  m='3405450'>to</span> <span m='3405530'>be</span> <span
  m='3405620'>covered</span> <span m='3406110'>in</span> <span
  m='3406270'>this</span> <span m='3406410'>gadget.</span> <span
  m='3408010'>They</span> <span m='3408160'>can</span> <span
  m='3408290'>be</span> <span m='3408370'>covered</span> <span
  m='3408620'>by</span> <span m='3408740'>this</span> <span
  m='3408880'>triple</span> <span m='3409150'>or</span> <span
  m='3409330'>this</span> <span m='3409460'>triple</span> <span
  m='3409720'>or</span> <span m='3409850'>this</span> <span
  m='3409980'>triple.</span> <span m='3411200'>But</span> <span
  m='3411420'>once</span> <span m='3411620'>you</span> <span
  m='3411700'>choose</span> <span m='3411930'>one,</span> <span
  m='3412190'>you</span> <span m='3412260'>can't</span> <span
  m='3412490'>choose</span> <span m='3412690'>the</span> <span
  m='3412800'>others.</span> </p><p><span m='3414480'>What</span> <span
  m='3414680'>this</span> <span m='3414840'>means</span> <span
  m='3415270'>is</span> <span m='3415840'>if</span> <span m='3416090'>I</span>
  <span m='3416900'>set</span> <span m='3417220'>x1</span> <span
  m='3417890'>to</span> <span m='3418030'>be</span> <span
  m='3418240'>true,</span> <span m='3419540'>it</span> <span
  m='3419760'>leaves</span> <span m='3420350'>behind</span> <span
  m='3421510'>these</span> <span m='3422060'>points</span> <span
  m='3422490'>marked</span> <span m='3422900'>true.</span> <span
  m='3423540'>If</span> <span m='3423620'>I</span> <span
  m='3423700'>choose</span> <span m='3423990'>the</span> <span
  m='3424100'>red</span> <span m='3424330'>things,</span> <span
  m='3425250'>then</span> <span m='3425490'>it's</span> <span
  m='3425640'>the</span> <span m='3425720'>blue</span> <span
  m='3425970'>points</span> <span m='3426330'>that</span> <span
  m='3426440'>are</span> <span m='3426530'>left</span> <span
  m='3426760'>behind.</span> <span m='3428290'>Leaving</span> <span
  m='3428610'>points</span> <span m='3428860'>behind</span> <span
  m='3429190'>in</span> <span m='3429250'>this</span> <span
  m='3429380'>case</span> <span m='3429600'>is</span> <span
  m='3429680'>going</span> <span m='3429810'>to</span> <span
  m='3429880'>be</span> <span m='3429980'>good,</span> <span
  m='3430800'>because</span> <span m='3431200'>this</span> <span
  m='3431380'>clause,</span> <span m='3431980'>in</span> <span
  m='3432070'>order</span> <span m='3432240'>to</span> <span
  m='3432320'>satisfy</span> <span m='3432760'>this</span> <span
  m='3432890'>clause,</span> <span m='3433210'>in</span> <span
  m='3433280'>order</span> <span m='3433480'>to</span> <span
  m='3433570'>choose</span> <span m='3433920'>one</span> <span
  m='3434180'>of</span> <span m='3434300'>these</span> <span
  m='3435030'>three</span> <span m='3435340'>triples,</span> <span
  m='3436210'>at</span> <span m='3436380'>least</span> <span
  m='3436740'>one</span> <span m='3436930'>of</span> <span
  m='3437030'>these</span> <span m='3437330'>must</span> <span
  m='3437770'>be</span> <span m='3439630'>left</span> <span
  m='3439950'>behind</span> <span m='3441060'>by</span> <span
  m='3441290'>the</span> <span m='3441390'>wheel.</span> <span
  m='3442500'>If</span> <span m='3442730'>all</span> <span m='3443000'>of</span>
  <span m='3443090'>these</span> <span m='3443290'>are</span> <span
  m='3443360'>covered</span> <span m='3443790'>by</span> <span
  m='3443950'>their</span> <span m='3444070'>wheels,</span> <span
  m='3444480'>then</span> <span m='3444590'>there's</span> <span
  m='3444760'>no</span> <span m='3445060'>way.</span> <span m='3445290'>I</span>
  <span m='3445340'>can't</span> <span m='3445590'>choose</span> <span
  m='3445850'>any</span> <span m='3446100'>of</span> <span
  m='3446210'>these</span> <span m='3446660'>guys.</span> <span
  m='3447750'>But</span> <span m='3448070'>if</span> <span m='3448190'>at</span>
  <span m='3448300'>least</span> <span m='3448600'>one</span> <span
  m='3448790'>of</span> <span m='3448870'>these</span> <span
  m='3449120'>is</span> <span m='3449260'>left</span> <span
  m='3449460'>behind</span> <span m='3449890'>by</span> <span
  m='3450020'>the</span> <span m='3450120'>wheel,</span> <span
  m='3450810'>then</span> <span m='3451640'>I</span> <span
  m='3452010'>can</span> <span m='3452170'>choose</span> <span
  m='3452510'>the</span> <span m='3452590'>corresponding</span> <span
  m='3453120'>triple</span> <span m='3453780'>and</span> <span
  m='3453960'>cover</span> <span m='3454220'>these</span> <span
  m='3454410'>points.</span> <span m='3454760'>So</span> <span
  m='3454940'>I'll</span> <span m='3455010'>be</span> <span
  m='3455190'>able</span> <span m='3455420'>to</span> <span
  m='3455480'>cover</span> <span m='3455780'>these</span> <span
  m='3455960'>points</span> <span m='3456310'>if</span> <span
  m='3456540'>and</span> <span m='3456640'>only</span> <span
  m='3456880'>if</span> <span m='3457950'>at</span> <span
  m='3458080'>least</span> <span m='3458350'>one</span> <span
  m='3458500'>of</span> <span m='3458570'>these</span> <span
  m='3458760'>is</span> <span m='3458870'>true.</span> </p><p><span
  m='3460010'>And</span> <span m='3460100'>that's</span> <span
  m='3460280'>a</span> <span m='3460320'>clause.</span> <span
  m='3460780'>That's</span> <span m='3460980'>what</span> <span
  m='3461100'>a</span> <span m='3461130'>clause</span> <span
  m='3461430'>is</span> <span m='3461520'>supposed</span> <span
  m='3461820'>to</span> <span m='3461900'>do</span> <span m='3462530'>in</span>
  <span m='3462660'>3SAT.</span> <span m='3463440'>If</span> <span
  m='3463650'>at</span> <span m='3463740'>least</span> <span
  m='3463980'>one</span> <span m='3464140'>of</span> <span
  m='3464210'>these</span> <span m='3464410'>is</span> <span
  m='3464510'>true,</span> <span m='3465200'>then</span> <span
  m='3465280'>the</span> <span m='3465350'>clause</span> <span
  m='3465620'>is</span> <span m='3465710'>satisfied.</span> <span
  m='3466590'>I</span> <span m='3466720'>need</span> <span
  m='3466930'>all</span> <span m='3467170'>the</span> <span
  m='3467250'>clauses</span> <span m='3467760'>to</span> <span
  m='3467860'>be</span> <span m='3467960'>satisfied</span> <span
  m='3468380'>because</span> <span m='3468620'>I</span> <span
  m='3468670'>need</span> <span m='3468820'>to</span> <span
  m='3468890'>cover</span> <span m='3469420'>of</span> <span
  m='3469500'>these</span> <span m='3469690'>points</span> <span
  m='3470390'>for</span> <span m='3470570'>all</span> <span
  m='3470720'>the</span> <span m='3470820'>instances</span> <span
  m='3471270'>of</span> <span m='3471360'>these</span> <span
  m='3471520'>clauses.</span> <span m='3473760'>And</span> <span
  m='3473830'>that's</span> <span m='3474000'>how</span> <span
  m='3474100'>it</span> <span m='3474160'>works.</span> </p><p><span
  m='3475310'>Now,</span> <span m='3475740'>slight</span> <span
  m='3476200'>catch.</span> <span m='3477540'>If</span> <span
  m='3477700'>you</span> <span m='3477800'>do</span> <span
  m='3478010'>this,</span> <span m='3478840'>not</span> <span
  m='3479190'>all</span> <span m='3479330'>the</span> <span
  m='3479400'>points</span> <span m='3479710'>will</span> <span
  m='3479810'>be</span> <span m='3479920'>covered,</span> <span
  m='3481050'>even</span> <span m='3481340'>so.</span> <span
  m='3484650'>Maybe</span> <span m='3484930'>all</span> <span
  m='3485160'>of</span> <span m='3485240'>these</span> <span
  m='3485430'>are</span> <span m='3485500'>true.</span> <span
  m='3485970'>And</span> <span m='3486440'>so</span> <span
  m='3486540'>they're</span> <span m='3486690'>all</span> <span
  m='3486940'>left</span> <span m='3487170'>behind.</span> <span
  m='3487890'>And</span> <span m='3488050'>I</span> <span m='3488120'>can</span>
  <span m='3488260'>only</span> <span m='3488420'>cover</span> <span
  m='3488690'>one</span> <span m='3488890'>of</span> <span
  m='3488970'>them</span> <span m='3489110'>with</span> <span
  m='3489240'>the</span> <span m='3489300'>clause.</span> </p><p><span
  m='3490580'>It's</span> <span m='3490830'>a</span> <span
  m='3491300'>little</span> <span m='3491530'>messy.</span> <span
  m='3492560'>You</span> <span m='3492720'>need</span> <span
  m='3492890'>another</span> <span m='3493170'>gadget,</span> <span
  m='3495020'>which</span> <span m='3495300'>is</span> <span
  m='3495430'>called</span> <span m='3496800'>garbage</span> <span
  m='3497210'>collection.</span> <span m='3503910'>I</span> <span
  m='3503980'>don't</span> <span m='3504090'>want</span> <span
  m='3504220'>to</span> <span m='3504280'>spend</span> <span
  m='3504730'>too</span> <span m='3504900'>much</span> <span
  m='3505150'>time</span> <span m='3505420'>on</span> <span
  m='3505550'>it.</span> <span m='3506650'>But</span> <span
  m='3506840'>you</span> <span m='3506950'>have</span> <span
  m='3508030'>two</span> <span m='3508570'>dots.</span> <span
  m='3510900'>And</span> <span m='3512690'>then</span> <span
  m='3513260'>you</span> <span m='3513420'>have</span> <span
  m='3514260'>every</span> <span m='3514850'>single</span> <span
  m='3519040'>xi--</span> <span m='3520500'>these</span> <span
  m='3521060'>dots,</span> <span m='3522610'>all</span> <span
  m='3524090'>true</span> <span m='3524800'>and</span> <span
  m='3525000'>false</span> <span m='3525410'>dots.</span> <span
  m='3527490'>And</span> <span m='3527690'>you're</span> <span
  m='3527780'>going</span> <span m='3527900'>to</span> <span
  m='3527960'>have</span> <span m='3528250'>this</span> <span
  m='3528440'>triple,</span> <span m='3529410'>and</span> <span
  m='3529630'>this</span> <span m='3529830'>triple,</span> <span
  m='3530570'>and</span> <span m='3530960'>this</span> <span
  m='3531230'>triple,</span> <span m='3531670'>and</span> <span
  m='3532110'>this</span> <span m='3532200'>triple,</span> <span
  m='3532690'>and</span> <span m='3532790'>so</span> <span
  m='3532800'>on.</span> <span m='3533220'>It</span> <span
  m='3533390'>looks</span> <span m='3533800'>an</span> <span
  m='3533910'>awful</span> <span m='3534130'>lot</span> <span
  m='3534310'>like</span> <span m='3534530'>a</span> <span
  m='3534580'>clause.</span> <span m='3536230'>But</span> <span
  m='3536260'>this</span> <span m='3536440'>is</span> <span
  m='3536530'>like</span> <span m='3536710'>a</span> <span
  m='3536750'>clause</span> <span m='3537330'>that's</span> <span
  m='3537520'>connected</span> <span m='3537940'>to</span> <span
  m='3538140'>everybody</span> <span m='3539190'>in</span> <span
  m='3539340'>the</span> <span m='3539420'>entire</span> <span
  m='3539790'>universe.</span> <span m='3540820'>And</span> <span
  m='3541060'>you</span> <span m='3541160'>repeat</span> <span
  m='3541540'>this</span> <span m='3542340'>the</span> <span
  m='3542470'>appropriate</span> <span m='3543020'>number</span> <span
  m='3543260'>of</span> <span m='3543340'>times,</span> <span
  m='3543820'>which</span> <span m='3544280'>is</span> <span
  m='3546000'>something</span> <span m='3546410'>like</span> <span
  m='3546680'>sum</span> <span m='3547120'>of</span> <span m='3547480'>nx</span>
  <span m='3549380'>minus</span> <span m='3549980'>the</span> <span
  m='3550060'>number</span> <span m='3550310'>of</span> <span
  m='3550390'>clauses.</span> </p><p><span m='3554100'>OK,</span> <span
  m='3554310'>why?</span> <span m='3554850'>Because</span> <span
  m='3555530'>if</span> <span m='3555720'>you</span> <span
  m='3555830'>look</span> <span m='3555990'>at</span> <span m='3556060'>a</span>
  <span m='3556120'>wheel,</span> <span m='3556740'>it</span> <span
  m='3556880'>has</span> <span m='3557030'>size</span> <span
  m='3557540'>2</span> <span m='3557790'>times</span> <span
  m='3558120'>nx</span> <span m='3559580'>for</span> <span m='3559860'>a</span>
  <span m='3559910'>variable</span> <span m='3560290'>x.</span> <span
  m='3561780'>And</span> <span m='3562270'>half</span> <span
  m='3562660'>of</span> <span m='3562810'>the</span> <span
  m='3562890'>points</span> <span m='3563420'>will</span> <span
  m='3563590'>be</span> <span m='3564050'>left</span> <span
  m='3564490'>uncovered.</span> <span m='3566300'>So</span> <span
  m='3566450'>that</span> <span m='3566690'>means</span> <span
  m='3566980'>nx</span> <span m='3567380'>of</span> <span
  m='3567500'>them</span> <span m='3567660'>will</span> <span
  m='3567800'>be</span> <span m='3567950'>uncovered.</span> </p><p><span
  m='3569630'>Then</span> <span m='3569820'>the</span> <span
  m='3569890'>clause,</span> <span m='3570510'>if</span> <span
  m='3570680'>everything</span> <span m='3571250'>works</span> <span
  m='3571540'>out</span> <span m='3571780'>correctly,</span> <span
  m='3573110'>the</span> <span m='3573250'>clause</span> <span
  m='3573590'>will</span> <span m='3573700'>cover</span> <span
  m='3574000'>exactly</span> <span m='3574460'>one</span> <span
  m='3574770'>of</span> <span m='3574890'>those</span> <span
  m='3575120'>points.</span> <span m='3577710'>So</span> <span
  m='3578060'>for</span> <span m='3578180'>each</span> <span
  m='3578330'>clause</span> <span m='3578710'>we</span> <span
  m='3578960'>cover</span> <span m='3579250'>one</span> <span
  m='3579420'>of</span> <span m='3579480'>the</span> <span
  m='3579550'>points.</span> <span m='3580090'>That</span> <span
  m='3580190'>means</span> <span m='3580860'>this</span> <span
  m='3581700'>difference</span> <span m='3582540'>is</span> <span
  m='3582710'>exactly</span> <span m='3583140'>how</span> <span
  m='3583270'>many</span> <span m='3583440'>points</span> <span
  m='3583750'>are</span> <span m='3583810'>left</span> <span
  m='3584160'>uncovered.</span> <span m='3585470'>And</span> <span
  m='3585630'>so</span> <span m='3585800'>we</span> <span
  m='3585920'>make</span> <span m='3586250'>this</span> <span
  m='3586410'>gadget</span> <span m='3586960'>exactly</span> <span
  m='3587430'>that</span> <span m='3587600'>many</span> <span
  m='3587790'>times.</span> <span m='3588720'>And</span> <span
  m='3588910'>it's</span> <span m='3589060'>free</span> <span
  m='3589330'>to</span> <span m='3589470'>cover</span> <span
  m='3589860'>anybody.</span> <span m='3590530'>So</span> <span
  m='3591160'>whatever is</span> <span m='3591570'>left</span> <span
  m='3591840'>over,</span> <span m='3592640'>this</span> <span
  m='3593060'>garbage</span> <span m='3593440'>collector</span> <span
  m='3593860'>will</span> <span m='3594140'>clean</span> <span
  m='3594420'>up.</span> <span m='3595160'>And</span> <span
  m='3595210'>if</span> <span m='3595310'>we</span> <span m='3595410'>use</span>
  <span m='3595560'>exactly</span> <span m='3596090'>the</span> <span
  m='3596190'>right</span> <span m='3596380'>number</span> <span
  m='3596660'>of</span> <span m='3596760'>them,</span> <span
  m='3597200'>this</span> <span m='3597390'>garbage</span> <span
  m='3597720'>collector</span> <span m='3598030'>won't</span> <span
  m='3598260'>run</span> <span m='3598500'>out</span> <span
  m='3598760'>of</span> <span m='3599410'>things</span> <span
  m='3599680'>to</span> <span m='3599770'>collect.</span> <span
  m='3601170'>So</span> <span m='3601530'>this</span> <span
  m='3602620'>makes</span> <span m='3602820'>the</span> <span
  m='3602890'>proof</span> <span m='3603290'>messy.</span> <span
  m='3603830'>But</span> <span m='3605260'>I</span> <span
  m='3605390'>want</span> <span m='3605540'>to</span> <span
  m='3605600'>move</span> <span m='3605780'>on</span> <span
  m='3605960'>to</span> <span m='3606580'>somewhat</span> <span
  m='3607010'>simpler</span> <span m='3607320'>proofs</span> <span
  m='3607740'>and</span> <span m='3607930'>for</span> <span
  m='3608120'>other</span> <span m='3608300'>problems.</span> <span
  m='3608670'>Yeah?</span> </p><p><span m='3609832'>AUDIENCE: Real</span> <span
  m='3610318'>quick,</span> <span m='3610804'>what about</span> <span
  m='3611290'>the t</span> <span m='3611776'>or f</span> <span
  m='3612262'>points</span> <span m='3612748'>that  we</span> <span
  m='3613234'>didn't cover</span> <span m='3613720'>because we</span> <span
  m='3614206'>didn't actually</span> <span m='3614692'>need that</span> <span
  m='3615178'>many?</span> </p><p><span m='3615670'>ERIC DEMAINE: Right.</span>
  <span m='3615980'>So</span> <span m='3616150'>this</span> <span
  m='3616810'>also</span> <span m='3617200'>includes</span> <span
  m='3617700'>the</span> <span m='3617780'>points</span> <span
  m='3618190'>that</span> <span m='3618330'>weren't</span> <span
  m='3618530'>even</span> <span m='3618710'>connected</span> <span
  m='3619210'>to</span> <span m='3619280'>clauses.</span> <span
  m='3620950'>I</span> <span m='3621070'>think</span> <span
  m='3621510'>this</span> <span m='3621740'>is</span> <span
  m='3621830'>the</span> <span m='3621930'>right</span> <span
  m='3622100'>number</span> <span m='3622360'>no</span> <span
  m='3622460'>matter</span> <span m='3622700'>what,</span> <span
  m='3623330'>because</span> <span m='3623910'>this</span> <span
  m='3624150'>is</span> <span m='3624250'>counting</span> <span
  m='3624600'>the</span> <span m='3624670'>total</span> <span
  m='3625020'>number</span> <span m='3625280'>of</span> <span
  m='3625410'>uncovered</span> <span m='3625880'>guys,</span> <span
  m='3626180'>whether</span> <span m='3626390'>they're</span> <span
  m='3626510'>connected</span> <span m='3626860'>to</span> <span
  m='3626920'>clauses</span> <span m='3627300'>or</span> <span
  m='3627380'>not.</span> <span m='3628310'>Each</span> <span
  m='3628530'>clause</span> <span m='3628860'>will,</span> <span
  m='3629390'>in</span> <span m='3629540'>a</span> <span
  m='3629590'>satisfied</span> <span m='3630200'>situation,</span> <span
  m='3630890'>it</span> <span m='3631030'>will</span> <span
  m='3631250'>cover</span> <span m='3632010'>exactly</span> <span
  m='3632470'>one</span> <span m='3632640'>of</span> <span
  m='3632720'>those</span> <span m='3632910'>points.</span> <span
  m='3633780'>The</span> <span m='3633900'>ones</span> <span
  m='3634080'>that</span> <span m='3634180'>are</span> <span
  m='3634280'>connected</span> <span m='3634610'>to</span> <span
  m='3634710'>the</span> <span m='3634810'>clauses</span> <span
  m='3635090'>won't</span> <span m='3635320'>be</span> <span
  m='3635400'>covered</span> <span m='3635720'>at</span> <span
  m='3635810'>all,</span> <span m='3636100'>but</span> <span
  m='3636510'>that</span> <span m='3636680'>will</span> <span
  m='3636770'>still</span> <span m='3637010'>be</span> <span
  m='3637180'>in</span> <span m='3637280'>this</span> <span
  m='3637440'>difference.</span> <span m='3638000'>So</span> <span
  m='3638180'>yeah,</span> <span m='3638570'>it's</span> <span
  m='3638810'>good</span> <span m='3638950'>to</span> <span
  m='3639020'>check</span> <span m='3639250'>that.</span> <span
  m='3639990'>The</span> <span m='3640120'>first</span> <span
  m='3640370'>time</span> <span m='3640520'>I</span> <span
  m='3640560'>wrote</span> <span m='3640710'>this</span> <span
  m='3640820'>down</span> <span m='3641030'>I</span> <span
  m='3641360'>forgot</span> <span m='3641670'>about</span> <span
  m='3641860'>those</span> <span m='3642010'>points</span> <span
  m='3642250'>and</span> <span m='3642340'>got</span> <span
  m='3642470'>it</span> <span m='3642550'>wrong.</span> <span
  m='3642780'>But</span> <span m='3643000'>I</span> <span
  m='3643050'>think</span> <span m='3643270'>this</span> <span
  m='3643440'>is</span> <span m='3643550'>right,</span> <span
  m='3643970'>hopefully.</span> </p><p><span m='3645930'>I</span> <span
  m='3646100'>did</span> <span m='3646230'>not</span> <span
  m='3646380'>come</span> <span m='3646540'>up</span> <span
  m='3646630'>with</span> <span m='3646730'>this</span> <span
  m='3646880'>proof.</span> <span m='3647980'>Garey</span> <span
  m='3648240'>and</span> <span m='3648350'>Johnson</span> <span
  m='3648800'>I</span> <span m='3648900'>think--</span> <span
  m='3649550'>or</span> <span m='3649690'>no.</span> <span
  m='3649950'>This</span> <span m='3650130'>is--</span> <span
  m='3651551'>I</span> <span m='3651960'>forgot.</span> <span
  m='3652906'>Yeah,</span> <span m='3653250'>this is</span> <span m='3653330'>a
  Garey and</span> <span m='3653660'>Johnson</span> <span
  m='3653970'>proof.</span> <span m='3654710'>There's</span> <span
  m='3654890'>a</span> <span m='3654940'>cool</span> <span
  m='3655160'>book</span> <span m='3655550'>from</span> <span
  m='3655900'>the</span> <span m='3655960'>late</span> <span
  m='3656110'>'70s</span> <span m='3656700'>by</span> <span m='3657330'>Garey
  and</span> <span m='3657630'>Johnson,</span> <span m='3658610'>does</span>
  <span m='3658780'>a</span> <span m='3658850'>lot</span> <span
  m='3659130'>of</span> <span m='3659220'>NP-completeness,</span> <span
  m='3662152'>if</span> <span m='3662616'>you're</span> <span
  m='3663080'>curious.</span> </p><p><span m='3664320'>All</span> <span
  m='3664470'>right,</span> <span m='3664850'>so</span> <span
  m='3665380'>hopefully</span> <span m='3665800'>you</span> <span
  m='3665890'>believe</span> <span m='3666790'>three</span> <span
  m='3667010'>dimensional</span> <span m='3667420'>matching</span> <span
  m='3667800'>is</span> <span m='3667920'>hard.</span> <span
  m='3668160'>Now</span> <span m='3668340'>I'm</span> <span
  m='3668400'>going</span> <span m='3668520'>to</span> <span
  m='3668640'>use</span> <span m='3668850'>it</span> <span m='3668970'>to</span>
  <span m='3669070'>prove</span> <span m='3669370'>that</span> <span
  m='3669500'>some</span> <span m='3669690'>very</span> <span
  m='3669870'>different</span> <span m='3670270'>types</span> <span
  m='3670520'>of</span> <span m='3670610'>problems</span> <span
  m='3670930'>are</span> <span m='3671010'>hard.</span> <span
  m='3671650'>This</span> <span m='3671820'>is</span> <span m='3671930'>a</span>
  <span m='3671980'>kind</span> <span m='3672370'>of</span> <span
  m='3672460'>graph</span> <span m='3672740'>theory</span> <span
  m='3672960'>problem.</span> <span m='3674270'>You'll</span> <span
  m='3674480'>see</span> <span m='3674670'>more</span> <span
  m='3674870'>graph</span> <span m='3675110'>theory</span> <span
  m='3675310'>problems</span> <span m='3675730'>in</span> <span
  m='3675920'>recitation.</span> <span m='3678070'>This</span> <span
  m='3678260'>one,</span> <span m='3678410'>I</span> <span
  m='3678480'>can</span> <span m='3678680'>erase</span> <span
  m='3679100'>3SAT</span> <span m='3679610'>and</span> <span
  m='3679920'>Mario.</span> </p><p><span m='3681800'>So</span> <span
  m='3684140'>in</span> <span m='3684840'>the</span> <span
  m='3684920'>world,</span> <span m='3686190'>most</span> <span
  m='3686760'>NP-hardness</span> <span m='3687370'>proofs</span> <span
  m='3687660'>are</span> <span m='3687810'>reductions</span> <span
  m='3688300'>from</span> <span m='3688520'>3SAT,</span> <span
  m='3689890'>or</span> <span m='3690090'>some</span> <span
  m='3690400'>variation</span> <span m='3690910'>of</span> <span
  m='3691000'>3SAT.</span> <span m='3691520'>In</span> <span
  m='3691640'>some</span> <span m='3691830'>sense,</span> <span
  m='3693030'>you</span> <span m='3693100'>can</span> <span
  m='3693250'>think</span> <span m='3693490'>of</span> <span
  m='3693570'>three</span> <span m='3693730'>dimensional</span> <span
  m='3694110'>matching</span> <span m='3694450'>as</span> <span
  m='3694870'>kind</span> <span m='3695300'>of</span> <span
  m='3695390'>like</span> <span m='3695640'>a</span> <span
  m='3695690'>version</span> <span m='3696050'>of</span> <span
  m='3696130'>3SAT,</span> <span m='3697870'>but</span> <span
  m='3698190'>it's</span> <span m='3698370'>a</span> <span
  m='3698430'>little</span> <span m='3698690'>bit</span> <span
  m='3698870'>more</span> <span m='3699330'>stringent.</span> <span
  m='3699840'>And</span> <span m='3699950'>that</span> <span
  m='3700570'>stringency</span> <span m='3701630'>helps</span> <span
  m='3701950'>us</span> <span m='3702150'>to</span> <span m='3702240'>do</span>
  <span m='3702510'>other</span> <span m='3702700'>reductions.</span>
  </p><p><span m='3704980'>So</span> <span m='3705200'>here's</span> <span
  m='3705450'>another</span> <span m='3705710'>problem</span> <span
  m='3706660'>where</span> <span m='3706880'>we'll</span> <span
  m='3707070'>reduce</span> <span m='3707620'>from</span> <span
  m='3708460'>three</span> <span m='3708630'>dimensional</span> <span
  m='3709020'>matching.</span> <span m='3711710'>It's</span> <span
  m='3711820'>called</span> <span m='3712060'>subset</span> <span
  m='3712440'>sum.</span> <span m='3720220'>So</span> <span
  m='3720420'>you're</span> <span m='3720530'>given</span> <span
  m='3722040'>n</span> <span m='3722280'>integers,</span> <span
  m='3724670'>a1</span> <span m='3727350'>up</span> <span m='3727540'>to</span>
  <span m='3727660'>an.</span> <span m='3729830'>And</span> <span
  m='3730110'>you're</span> <span m='3730220'>given</span> <span
  m='3730790'>a</span> <span m='3730890'>target</span> <span
  m='3731390'>sum,</span> <span m='3732150'>also</span> <span
  m='3732440'>an</span> <span m='3732520'>integer.</span> <span
  m='3735090'>Call</span> <span m='3735330'>it</span> <span
  m='3735785'>t.</span> <span m='3737150'>What</span> <span
  m='3737410'>you'd</span> <span m='3737550'>like</span> <span
  m='3737760'>to</span> <span m='3737860'>know</span> <span
  m='3738560'>is,</span> <span m='3738885'>is</span> <span
  m='3739210'>there</span> <span m='3739390'>a</span> <span
  m='3739450'>subset</span> <span m='3740070'>of</span> <span
  m='3740290'>the</span> <span m='3740410'>integers</span> <span
  m='3741160'>that</span> <span m='3741330'>adds</span> <span
  m='3741600'>up</span> <span m='3741750'>to</span> <span
  m='3741860'>that</span> <span m='3742070'>target.</span> <span
  m='3754380'>Can</span> <span m='3754610'>you</span> <span
  m='3754710'>choose</span> <span m='3755025'>a</span> <span
  m='3755340'>sum</span> <span m='3755650'>of</span> <span
  m='3755710'>the</span> <span m='3755830'>integers</span> <span
  m='3756230'>so</span> <span m='3756380'>that--</span> <span
  m='3756620'>I'll</span> <span m='3756790'>write</span> <span m='3756980'>it
  the</span> <span m='3757160'>sum</span> <span m='3758490'>of</span> <span
  m='3758800'>S.</span> <span m='3759800'>But</span> <span
  m='3759970'>what</span> <span m='3760100'>this</span> <span
  m='3760270'>means</span> <span m='3760660'>is</span> <span
  m='3760990'>the</span> <span m='3761090'>sum</span> <span
  m='3762060'>over</span> <span m='3762660'>the</span> <span
  m='3762790'>ai's</span> <span m='3763520'>that</span> <span
  m='3763670'>are</span> <span m='3763880'>in</span> <span m='3764120'>S</span>
  <span m='3765250'>of</span> <span m='3765560'>the</span> <span
  m='3765650'>value</span> <span m='3766220'>ai.</span> <span
  m='3767576'>I</span> <span m='3768030'>want</span> <span
  m='3768370'>that</span> <span m='3768740'>to</span> <span
  m='3769560'>equal</span> <span m='3769960'>t.</span> <span
  m='3771540'>So</span> <span m='3771690'>this</span> <span
  m='3771850'>is</span> <span m='3771960'>the</span> <span
  m='3772010'>definition.</span> <span m='3772980'>This</span> <span
  m='3773170'>is</span> <span m='3773290'>the</span> <span
  m='3773370'>constraint.</span> </p><p><span m='3775530'>So</span> <span
  m='3775660'>I</span> <span m='3775690'>give</span> <span
  m='3775840'>you</span> <span m='3775900'>a</span> <span
  m='3775940'>bunch</span> <span m='3776150'>of</span> <span
  m='3776210'>numbers.</span> <span m='3776580'>Do</span> <span
  m='3776790'>any</span> <span m='3776930'>subset</span> <span
  m='3777300'>of</span> <span m='3777370'>them</span> <span
  m='3777490'>add</span> <span m='3777660'>up</span> <span m='3777770'>to</span>
  <span m='3777870'>t?</span> <span m='3778480'>That's</span> <span
  m='3778700'>all</span> <span m='3778830'>this</span> <span
  m='3778990'>is</span> <span m='3779060'>asking.</span> </p><p><span
  m='3779720'>This</span> <span m='3779910'>problem</span> <span
  m='3780430'>is</span> <span m='3781120'>NP-hard.</span> <span
  m='3782740'>It's</span> <span m='3782860'>NP-complete,</span> <span
  m='3783600'>in</span> <span m='3783700'>fact,</span> <span
  m='3784470'>when</span> <span m='3784530'>you</span> <span
  m='3784610'>can</span> <span m='3784810'>guess</span> <span
  m='3785810'>which</span> <span m='3786040'>integers</span> <span
  m='3786450'>should</span> <span m='3786640'>go</span> <span
  m='3786830'>in</span> <span m='3786910'>the</span> <span
  m='3786970'>subset,</span> <span m='3787490'>and</span> <span
  m='3787620'>then</span> <span m='3787740'>add</span> <span
  m='3787850'>them</span> <span m='3787980'>up</span> <span
  m='3788140'>to</span> <span m='3788200'>see</span> <span m='3788290'>if</span>
  <span m='3788390'>you</span> <span m='3788450'>got</span> <span
  m='3788610'>it</span> <span m='3788700'>right.</span> </p><p><span
  m='3791886'>It</span> <span m='3792300'>is</span> <span
  m='3792460'>NP-hard,</span> <span m='3793010'>but</span> <span
  m='3793180'>it's</span> <span m='3793500'>something</span> <span
  m='3793900'>special</span> <span m='3794320'>we</span> <span
  m='3794440'>call</span> <span m='3795040'>weakly</span> <span
  m='3795650'>NP-hard.</span> <span m='3802430'>And</span> <span
  m='3802750'>why</span> <span m='3803070'>don't</span> <span
  m='3803470'>I</span> <span m='3803590'>come</span> <span
  m='3804000'>back</span> <span m='3804270'>to</span> <span
  m='3804540'>the</span> <span m='3804630'>definition</span> <span
  m='3805100'>of</span> <span m='3805180'>that</span> <span
  m='3805618'>in</span> <span m='3806056'>a moment?</span> <span
  m='3808690'>Let</span> <span m='3808840'>me</span> <span
  m='3808930'>first</span> <span m='3809180'>show</span> <span
  m='3809300'>you</span> <span m='3809390'>the</span> <span
  m='3809460'>proof.</span> <span m='3810020'>It's</span> <span
  m='3810120'>actually</span> <span m='3810380'>really</span> <span
  m='3810640'>easy</span> <span m='3812440'>now</span> <span
  m='3812630'>that</span> <span m='3812740'>we</span> <span
  m='3812850'>have</span> <span m='3813180'>this</span> <span
  m='3813330'>three</span> <span m='3813510'>dimensional</span> <span
  m='3813890'>matching</span> <span m='3814240'>problem.</span> <span
  m='3817120'>It's</span> <span m='3817250'>pretty</span> <span
  m='3817430'>cool.</span> </p><p><span m='3818820'>So</span> <span
  m='3819170'>these</span> <span m='3819350'>numbers</span> <span
  m='3819770'>are</span> <span m='3819830'>going</span> <span
  m='3820020'>to</span> <span m='3820110'>be</span> <span
  m='3820660'>huge.</span> <span m='3822530'>What</span> <span
  m='3822730'>we're</span> <span m='3822840'>going</span> <span
  m='3822960'>to</span> <span m='3823060'>say</span> <span
  m='3823780'>is,</span> <span m='3826790'>let's</span> <span
  m='3827040'>view--</span> <span m='3828190'>so</span> <span
  m='3828370'>again,</span> <span m='3828600'>we're</span> <span
  m='3828900'>given</span> <span m='3829580'>a</span> <span
  m='3829640'>three</span> <span m='3829850'>dimensional</span> <span
  m='3830270'>matching</span> <span m='3830680'>instance.</span> <span
  m='3831620'>Get</span> <span m='3831790'>the</span> <span
  m='3831870'>directions,</span> <span m='3832300'>right?</span> <span
  m='3832670'>We're</span> <span m='3832800'>given</span> <span
  m='3833140'>a</span> <span m='3833180'>set</span> <span m='3833400'>of</span>
  <span m='3833480'>triples.</span> <span m='3834520'>We</span> <span
  m='3834650'>want</span> <span m='3834810'>to</span> <span
  m='3834870'>solve</span> <span m='3835190'>this</span> <span
  m='3835330'>problem</span> <span m='3835720'>by</span> <span
  m='3835890'>reducing</span> <span m='3836480'>it</span> <span
  m='3837100'>to</span> <span m='3838020'>a</span> <span
  m='3838740'>subset</span> <span m='3839220'>sum.</span> <span
  m='3839520'>So</span> <span m='3839690'>we</span> <span m='3839850'>get</span>
  <span m='3840030'>to</span> <span m='3840120'>construct</span> <span
  m='3840910'>integers</span> <span m='3841950'>that</span> <span
  m='3842100'>represent</span> <span m='3843040'>triples.</span> <span
  m='3844688'>That's</span> <span m='3845100'>what</span> <span
  m='3845250'>we're</span> <span m='3845310'>going</span> <span
  m='3845440'>to</span> <span m='3845500'>do.</span> </p><p><span
  m='3846220'>So</span> <span m='3847050'>here</span> <span
  m='3847310'>we</span> <span m='3847390'>go.</span> <span m='3849560'>We</span>
  <span m='3849630'>get</span> <span m='3849780'>to</span> <span
  m='3849860'>choose</span> <span m='3850100'>a</span> <span
  m='3850140'>number.</span> <span m='3850560'>So</span> <span
  m='3850750'>I'm</span> <span m='3850850'>going</span> <span
  m='3850970'>to</span> <span m='3851030'>think</span> <span
  m='3851250'>of</span> <span m='3851370'>them</span> <span
  m='3852180'>in</span> <span m='3852430'>a</span> <span
  m='3852480'>particular</span> <span m='3852970'>base,</span> <span
  m='3854526'>b,</span> <span m='3856440'>which</span> <span
  m='3856550'>is</span> <span m='3856650'>going</span> <span
  m='3856800'>to</span> <span m='3856890'>be</span> <span m='3857130'>1</span>
  <span m='3857690'>plus</span> <span m='3858210'>the</span> <span
  m='3858330'>max</span> <span m='3860090'>of</span> <span
  m='3860310'>the</span> <span m='3860650'>mxi's.</span> <span
  m='3863420'>So</span> <span m='3863570'>again,</span> <span
  m='3863940'>this</span> <span m='3864080'>is</span> <span
  m='3864170'>the</span> <span m='3864250'>number</span> <span
  m='3864490'>of</span> <span m='3864560'>occurrences</span> <span
  m='3865140'>of</span> <span m='3865390'>variable</span> <span
  m='3865810'>xi</span> <span m='3866310'>in</span> <span m='3866420'>a</span>
  <span m='3866470'>true</span> <span m='3866850'>or</span> <span
  m='3867060'>false</span> <span m='3867440'>form.</span> <span
  m='3868610'>So</span> <span m='3868770'>I</span> <span m='3868820'>take</span>
  <span m='3869080'>the</span> <span m='3869570'>maximum</span> <span
  m='3870000'>occurrence</span> <span m='3870340'>of</span> <span
  m='3870440'>any</span> <span m='3870570'>variable,</span> <span
  m='3870980'>add</span> <span m='3871180'>1.</span> <span
  m='3871490'>That's</span> <span m='3871760'>my</span> <span
  m='3871910'>base.</span> <span m='3872490'>It</span> <span
  m='3872930'>just</span> <span m='3873190'>has</span> <span
  m='3873320'>to</span> <span m='3873400'>be</span> <span
  m='3873500'>large</span> <span m='3873760'>enough.</span> </p><p><span
  m='3877010'>And</span> <span m='3879430'>this</span> <span
  m='3879620'>is</span> <span m='3879710'>basically</span> <span
  m='3880100'>the</span> <span m='3880200'>entire</span> <span
  m='3880520'>reduction,</span> <span m='3880980'>is</span> <span
  m='3881290'>one</span> <span m='3881690'>line.</span> <span
  m='3883420'>If</span> <span m='3883570'>I</span> <span m='3883720'>have</span>
  <span m='3884010'>three</span> <span m='3884260'>triples--</span> <span
  m='3886610'>if</span> <span m='3886780'>I</span> <span m='3886870'>have</span>
  <span m='3887030'>a</span> <span m='3887120'>triple</span> <span
  m='3887540'>xi,</span> <span m='3887945'>xj,</span> <span
  m='3888350'>xk,</span> <span m='3889790'>I'm</span> <span
  m='3889940'>going</span> <span m='3890070'>to</span> <span
  m='3890130'>convert</span> <span m='3890580'>that</span> <span
  m='3891730'>into</span> <span m='3892040'>a</span> <span
  m='3892120'>number</span> <span m='3893400'>that</span> <span
  m='3893530'>looks</span> <span m='3893780'>like</span> <span
  m='3894000'>this</span> <span m='3899010'>where</span> <span
  m='3899310'>the</span> <span m='3899780'>one</span> <span
  m='3900100'>positions</span> <span m='3901590'>are--</span> <span
  m='3902640'>I</span> <span m='3902750'>don't</span> <span
  m='3902950'>really</span> <span m='3903150'>know</span> <span
  m='3903320'>the</span> <span m='3903450'>order,</span> <span
  m='3903870'>but</span> <span m='3904050'>they are</span> <span m='3904500'>i,
  j,</span> <span m='3904810'>and</span> <span m='3904910'>k.</span> <span
  m='3906650'>Everything</span> <span m='3907090'>else</span> <span
  m='3907320'>is</span> <span m='3907410'>zero.</span> <span
  m='3908190'>And</span> <span m='3908330'>this</span> <span
  m='3908470'>is</span> <span m='3908590'>in</span> <span
  m='3908710'>base</span> <span m='3909060'>b,</span> <span
  m='3909450'>not</span> <span m='3909760'>base</span> <span
  m='3910000'>2.</span> <span m='3911300'>It's</span> <span m='3911450'>a</span>
  <span m='3911480'>little</span> <span m='3911680'>weird.</span> <span
  m='3912460'>All</span> <span m='3912670'>my</span> <span
  m='3912810'>digits</span> <span m='3913220'>are</span> <span
  m='3913440'>0</span> <span m='3913810'>or</span> <span m='3913910'>1,</span>
  <span m='3914770'>but</span> <span m='3914950'>I'm</span> <span
  m='3915040'>in</span> <span m='3915130'>base</span> <span
  m='3915400'>b.</span> <span m='3916120'>And</span> <span
  m='3916320'>three</span> <span m='3916650'>of</span> <span
  m='3916760'>the</span> <span m='3916840'>digits</span> <span
  m='3917220'>are</span> <span m='3917300'>1.</span> <span
  m='3918500'>And</span> <span m='3918690'>the</span> <span m='3918770'>rest
  are</span> <span m='3919150'>zero.</span> </p><p><span m='3919720'>Why?</span>
  <span m='3920440'>Because</span> <span m='3921670'>of</span> <span
  m='3921780'>my</span> <span m='3921880'>target</span> <span
  m='3922340'>sum.</span> <span m='3922680'>Target</span> <span
  m='3923060'>sum</span> <span m='3923810'>is</span> <span
  m='3923930'>going</span> <span m='3924080'>to</span> <span
  m='3924160'>be</span> <span m='3924500'>1111111111.</span> <span
  m='3928470'>So</span> <span m='3929430'>this</span> <span
  m='3929740'>number,</span> <span m='3930630'>in</span> <span
  m='3930980'>algebra,</span> <span m='3931450'>you're</span> <span
  m='3931580'>write</span> <span m='3931780'>this</span> <span
  m='3931950'>as</span> <span m='3932140'>b</span> <span m='3932310'>to</span>
  <span m='3932380'>the</span> <span m='3932550'>i</span> <span
  m='3933300'>plus</span> <span m='3933480'>b</span> <span m='3933720'>to</span>
  <span m='3933800'>the</span> <span m='3933890'>j</span> <span
  m='3934800'>plus</span> <span m='3935060'>b to</span> <span
  m='3935130'>the</span> <span m='3935190'>k.</span> <span
  m='3936280'>This</span> <span m='3936640'>you</span> <span
  m='3936740'>would</span> <span m='3936870'>write</span> <span
  m='3937570'>as</span> <span m='3938330'>the</span> <span
  m='3938430'>sum</span> <span m='3939200'>of</span> <span m='3939480'>b</span>
  <span m='3939835'>to</span> <span m='3940190'>the i</span> <span
  m='3940640'>for</span> <span m='3940810'>all</span> <span
  m='3940980'>i.</span> </p><p><span m='3943500'>Do</span> <span
  m='3943560'>you</span> <span m='3943620'>see</span> <span
  m='3943770'>why</span> <span m='3943910'>this</span> <span
  m='3944060'>works?</span> <span m='3944520'>It's</span> <span
  m='3944980'>actually</span> <span m='3945330'>really</span> <span
  m='3945540'>simple.</span> <span m='3951890'>For</span> <span
  m='3952060'>this</span> <span m='3952260'>instance,</span> <span
  m='3952610'>my</span> <span m='3953120'>goal</span> <span
  m='3953490'>is</span> <span m='3953630'>to</span> <span
  m='3953730'>choose</span> <span m='3954100'>a</span> <span
  m='3954170'>subset</span> <span m='3954670'>of</span> <span
  m='3954740'>these</span> <span m='3954910'>numbers</span> <span
  m='3955820'>that</span> <span m='3956010'>add</span> <span
  m='3956190'>up</span> <span m='3956310'>to</span> <span
  m='3956430'>this</span> <span m='3956640'>number.</span> <span
  m='3957890'>How</span> <span m='3958090'>could</span> <span
  m='3958240'>that</span> <span m='3958400'>possibly</span> <span
  m='3958860'>happen?</span> <span m='3959330'>Well,</span> <span
  m='3959490'>I've</span> <span m='3959660'>got</span> <span
  m='3959860'>to</span> <span m='3959920'>choose--</span> <span
  m='3960910'>every</span> <span m='3961160'>time</span> <span
  m='3961440'>I</span> <span m='3961520'>choose</span> <span
  m='3961810'>one</span> <span m='3961960'>of</span> <span
  m='3962030'>the</span> <span m='3962100'>numbers,</span> <span
  m='3963320'>those</span> <span m='3963690'>three</span> <span
  m='3963970'>digits</span> <span m='3964490'>get</span> <span
  m='3964680'>set</span> <span m='3964950'>to</span> <span m='3965070'>1</span>
  <span m='3965350'>in</span> <span m='3965460'>my</span> <span
  m='3965580'>sum.</span> <span m='3966930'>If</span> <span m='3967130'>I</span>
  <span m='3967270'>ever</span> <span m='3968240'>have</span> <span
  m='3968430'>a</span> <span m='3968460'>collision,</span> <span
  m='3969050'>if</span> <span m='3969200'>I</span> <span m='3969300'>add</span>
  <span m='3969610'>two</span> <span m='3969850'>1s</span> <span
  m='3970220'>together,</span> <span m='3970790'>I'm</span> <span
  m='3970840'>going</span> <span m='3970970'>to</span> <span
  m='3971030'>get</span> <span m='3971170'>a</span> <span m='3971230'>2.</span>
  <span m='3972760'>That's</span> <span m='3972960'>not</span> <span
  m='3973140'>good,</span> <span m='3973370'>because</span> <span
  m='3973570'>once</span> <span m='3973790'>I</span> <span
  m='3973840'>get</span> <span m='3973990'>a</span> <span m='3974040'>2,</span>
  <span m='3974320'>I'll</span> <span m='3974390'>never</span> <span
  m='3974670'>be</span> <span m='3974780'>able</span> <span
  m='3974930'>to</span> <span m='3975000'>get</span> <span
  m='3975150'>back</span> <span m='3975380'>to</span> <span m='3975480'>a</span>
  <span m='3975540'>1,</span> <span m='3976390'>because</span> <span
  m='3976970'>my</span> <span m='3977110'>base</span> <span
  m='3977440'>is</span> <span m='3977550'>really</span> <span
  m='3977750'>big.</span> </p><p><span m='3980150'>This</span> <span
  m='3980370'>base</span> <span m='3980680'>is</span> <span
  m='3980800'>designed</span> <span m='3981220'>so</span> <span
  m='3981340'>that</span> <span m='3981500'>the</span> <span
  m='3981580'>total--</span> <span m='3981980'>this</span> <span
  m='3982140'>is</span> <span m='3982250'>the</span> <span
  m='3982350'>total</span> <span m='3982750'>number</span> <span
  m='3983090'>of</span> <span m='3983200'>colliding</span> <span
  m='3983710'>1s.</span> <span m='3986060'>So</span> <span m='3986270'>we</span>
  <span m='3986370'>set</span> <span m='3986530'>it</span> <span
  m='3986620'>one</span> <span m='3986820'>larger</span> <span
  m='3987120'>than</span> <span m='3987260'>that,</span> <span
  m='3987580'>which</span> <span m='3987640'>means</span> <span
  m='3987800'>you'll</span> <span m='3987910'>never</span> <span
  m='3988270'>get</span> <span m='3988410'>a</span> <span
  m='3988450'>carry</span> <span m='3989260'>when</span> <span
  m='3989370'>you're</span> <span m='3989500'>adding</span> <span
  m='3989770'>up</span> <span m='3989920'>in</span> <span
  m='3990000'>this</span> <span m='3990110'>base.</span> <span
  m='3991000'>That's</span> <span m='3991220'>why</span> <span
  m='3991340'>I</span> <span m='3991370'>set</span> <span m='3991600'>the</span>
  <span m='3991670'>base</span> <span m='3991920'>to</span> <span
  m='3992020'>be</span> <span m='3992320'>something</span> <span
  m='3992640'>large,</span> <span m='3992980'>not</span> <span
  m='3993170'>base</span> <span m='3993400'>2.</span> <span
  m='3994420'>Base</span> <span m='3994610'>2</span> <span
  m='3994780'>might</span> <span m='3995110'>work,</span> <span
  m='3995340'>but</span> <span m='3995460'>this</span> <span
  m='3995640'>is</span> <span m='3996050'>much</span> <span
  m='3996310'>safer.</span> </p><p><span m='3999040'>So</span> <span
  m='3999860'>what</span> <span m='4000110'>that</span> <span
  m='4000260'>means</span> <span m='4000550'>is</span> <span
  m='4000740'>for</span> <span m='4000860'>each</span> <span
  m='4001140'>of</span> <span m='4001220'>these</span> <span
  m='4001460'>1s</span> <span m='4002750'>in</span> <span m='4003490'>the</span>
  <span m='4003550'>target</span> <span m='4003910'>sum,</span> <span
  m='4004540'>I've</span> <span m='4004740'>got</span> <span
  m='4004940'>to</span> <span m='4005000'>find</span> <span m='4005230'>a</span>
  <span m='4005270'>triple</span> <span m='4005660'>that</span> <span
  m='4005780'>has</span> <span m='4006130'>those</span> <span
  m='4006380'>1s.</span> <span m='4007140'>And</span> <span
  m='4007300'>those</span> <span m='4007430'>triples</span> <span
  m='4007840'>can't</span> <span m='4008110'>overlap.</span> <span
  m='4009120'>So</span> <span m='4009280'>that</span> <span
  m='4009410'>means</span> <span m='4009630'>choosing</span> <span
  m='4010030'>a</span> <span m='4010070'>set</span> <span m='4010260'>of</span>
  <span m='4010340'>numbers</span> <span m='4010660'>that</span> <span
  m='4010780'>add</span> <span m='4010920'>up</span> <span m='4011020'>to</span>
  <span m='4011120'>this</span> <span m='4011360'>is</span> <span
  m='4011500'>exactly</span> <span m='4011980'>the</span> <span
  m='4012070'>same</span> <span m='4012710'>as</span> <span
  m='4012870'>choosing</span> <span m='4013190'>a</span> <span
  m='4013230'>set</span> <span m='4013440'>of</span> <span
  m='4013520'>triples</span> <span m='4014290'>that</span> <span
  m='4014460'>covers</span> <span m='4014890'>all</span> <span
  m='4015110'>of</span> <span m='4015200'>the</span> <span
  m='4015290'>elements.</span> <span m='4016970'>Done,</span> <span
  m='4018420'>super</span> <span m='4018730'>easy</span> <span
  m='4019980'>once</span> <span m='4020200'>you</span> <span
  m='4020300'>have</span> <span m='4020490'>the</span> <span
  m='4020580'>right</span> <span m='4020760'>problem.</span> <span
  m='4023150'>OK,</span> <span m='4024730'>good.</span> </p><p><span
  m='4025690'>Now</span> <span m='4026130'>why</span> <span
  m='4026380'>do</span> <span m='4026490'>I</span> <span m='4026550'>call</span>
  <span m='4026750'>this</span> <span m='4026930'>weekly</span> <span
  m='4027450'>NP-hard?</span> <span m='4028750'>Because</span> <span
  m='4029410'>these</span> <span m='4029620'>numbers</span> <span
  m='4030050'>are</span> <span m='4030200'>giant.</span> <span
  m='4032010'>If</span> <span m='4032200'>I</span> <span m='4032380'>have</span>
  <span m='4034650'>n</span> <span m='4034920'>elements</span> <span
  m='4035700'>in</span> <span m='4036030'>X,</span> <span m='4036426'>Y,</span>
  <span m='4036822'>Z</span> <span m='4037220'>over</span> <span
  m='4037390'>there--</span> <span m='4038240'>I</span> <span
  m='4038470'>guess</span> <span m='4038930'>here</span> <span
  m='4039230'>they're</span> <span m='4039410'>called</span> <span
  m='4039750'>xi,</span> <span m='4040215'>yk,</span> <span
  m='4041610'>zk.</span> <span m='4042130'>Sorry,</span> <span
  m='4042450'>maybe</span> <span m='4042660'>I</span> <span
  m='4042730'>should've</span> <span m='4042960'>called</span> <span
  m='4043180'>them</span> <span m='4044010'>that</span> <span
  m='4044210'>here.</span> <span m='4044490'>Doesn't</span> <span
  m='4044680'>matter.</span> </p><p><span m='4046980'>If</span> <span
  m='4047190'>I</span> <span m='4047410'>have</span> <span m='4048640'>n</span>
  <span m='4049045'>of</span> <span m='4049450'>those</span> <span
  m='4050380'>elements</span> <span m='4051520'>in</span> <span
  m='4051750'>X</span> <span m='4052460'>union</span> <span m='4052690'>Y</span>
  <span m='4052850'>union</span> <span m='4053190'>Z,</span> <span
  m='4054120'>the</span> <span m='4054240'>number</span> <span
  m='4054680'>of</span> <span m='4055180'>digits</span> <span
  m='4055600'>here</span> <span m='4056010'>is</span> <span
  m='4056470'>n.</span> <span m='4058760'>So</span> <span m='4058860'>the</span>
  <span m='4060880'>number</span> <span m='4061140'>of</span> <span
  m='4061230'>digits</span> <span m='4064050'>in</span> <span
  m='4064340'>order</span> <span m='4064690'>n.</span> <span
  m='4066030'>This</span> <span m='4066240'>is</span> <span
  m='4066370'>fine</span> <span m='4066720'>from</span> <span
  m='4066930'>an</span> <span m='4067000'>NP-completeness</span> <span
  m='4067830'>standpoint.</span> <span m='4068430'>This</span> <span
  m='4068600'>is</span> <span m='4068690'>polynomial</span> <span
  m='4069280'>size.</span> <span m='4069600'>The</span> <span
  m='4069690'>number</span> <span m='4070040'>of</span> <span
  m='4070120'>digits</span> <span m='4070460'>in</span> <span
  m='4070540'>my</span> <span m='4070650'>numbers</span> <span
  m='4071640'>is</span> <span m='4072710'>a</span> <span
  m='4073700'>polynomial.</span> <span m='4075170'>And</span> <span
  m='4075380'>this</span> <span m='4075520'>base</span> <span
  m='4075840'>is</span> <span m='4075950'>also</span> <span
  m='4076170'>pretty</span> <span m='4076400'>small.</span> <span
  m='4076730'>So</span> <span m='4077020'>if</span> <span m='4077120'>you</span>
  <span m='4077230'>wrote</span> <span m='4077420'>it</span> <span
  m='4077500'>out</span> <span m='4077620'>in</span> <span
  m='4077710'>binary,</span> <span m='4078130'>it would</span> <span
  m='4078230'>also</span> <span m='4078480'>be</span> <span
  m='4078590'>polynomial.</span> <span m='4079290'>So</span> <span
  m='4079520'>just</span> <span m='4079680'>lost a</span> <span
  m='4079720'>log</span> <span m='4080050'>factor.</span> </p><p><span
  m='4081600'>But</span> <span m='4081910'>the</span> <span
  m='4082150'>size</span> <span m='4082810'>of</span> <span
  m='4082920'>the</span> <span m='4083010'>numbers,</span> <span
  m='4083420'>the</span> <span m='4083510'>actual</span> <span
  m='4083850'>values</span> <span m='4085390'>of</span> <span
  m='4085530'>the</span> <span m='4085630'>numbers,</span> <span
  m='4090460'>is</span> <span m='4091610'>exponential.</span> <span
  m='4097350'>With</span> <span m='4097609'>weak</span> <span
  m='4098090'>NP-hardness,</span> <span m='4099470'>that's</span> <span
  m='4099680'>allowed.</span> <span m='4100550'>With</span> <span
  m='4100750'>strong</span> <span m='4101569'>NP-hardness,</span> <span
  m='4102760'>that's</span> <span m='4103000'>forbidden.</span> <span
  m='4103920'>In</span> <span m='4104040'>strong</span> <span
  m='4104390'>NP-hardness,</span> <span m='4105050'>you</span> <span
  m='4105149'>want</span> <span m='4105380'>the</span> <span
  m='4105450'>values</span> <span m='4105930'>of</span> <span
  m='4106029'>the</span> <span m='4106100'>numbers</span> <span
  m='4106460'>to</span> <span m='4106569'>be</span> <span
  m='4106700'>polynomial.</span> <span m='4108370'>So</span> <span
  m='4108910'>in</span> <span m='4109040'>this</span> <span
  m='4109189'>case,</span> <span m='4109620'>the</span> <span
  m='4109720'>number</span> <span m='4109790'>of</span> <span
  m='4109850'>bits</span> <span m='4110069'>is</span> <span
  m='4110160'>small,</span> <span m='4110950'>but</span> <span
  m='4111120'>the</span> <span m='4111200'>actual</span> <span
  m='4111550'>values</span> <span m='4112000'>are</span> <span
  m='4112490'>giant,</span> <span m='4113840'>because</span> <span
  m='4114149'>you</span> <span m='4114220'>have</span> <span
  m='4114319'>to</span> <span m='4114439'>exponentiate.</span> </p><p><span
  m='4116271'>It</span> <span m='4116729'>would</span> <span
  m='4116850'>be</span> <span m='4116960'>cool.</span> <span
  m='4117550'>And</span> <span m='4117640'>this</span> <span
  m='4117790'>problem</span> <span m='4118090'>is</span> <span
  m='4118210'>only</span> <span m='4118460'>weakly</span> <span
  m='4118779'>NP-hard.</span> <span m='4119279'>Maybe</span> <span
  m='4119510'>you</span> <span m='4119640'>actually</span> <span
  m='4119950'>know</span> <span m='4120479'>a</span> <span
  m='4120560'>pseudo-polynomial</span> <span m='4121450'>time</span> <span
  m='4121700'>algorithm</span> <span m='4122069'>for</span> <span
  m='4122200'>this.</span> <span m='4122660'>It's</span> <span
  m='4122779'>basically</span> <span m='4123200'>a</span> <span
  m='4123229'>knapsack.</span> <span m='4124500'>If</span> <span
  m='4124700'>these</span> <span m='4124890'>numbers</span> <span
  m='4125439'>have</span> <span m='4126250'>polynomial</span> <span
  m='4126819'>value,</span> <span m='4128359'>then</span> <span
  m='4129740'>you</span> <span m='4129960'>can</span> <span
  m='4130430'>basically,</span> <span m='4131660'>in</span> <span
  m='4131819'>your</span> <span m='4131979'>subproblems</span> <span
  m='4132790'>in</span> <span m='4132930'>dynamic</span> <span
  m='4133270'>programming,</span> <span m='4133800'>you</span> <span
  m='4133960'>can</span> <span m='4134720'>write</span> <span
  m='4135189'>down</span> <span m='4135430'>the</span> <span
  m='4135490'>number</span> <span m='4135779'>t</span> <span
  m='4137149'>and</span> <span m='4137350'>just</span> <span
  m='4137609'>solve</span> <span m='4137930'>it</span> <span
  m='4138020'>for</span> <span m='4138180'>all</span> <span
  m='4138380'>values</span> <span m='4138700'>of</span> <span
  m='4138810'>t.</span> <span m='4139149'>And</span> <span
  m='4139399'>it's</span> <span m='4139520'>easy</span> <span
  m='4139760'>to</span> <span m='4140100'>solve</span> <span
  m='4140399'>it</span> <span m='4140479'>in</span> <span
  m='4140560'>polynomial</span> <span m='4141050'>time,</span> <span
  m='4141790'>polynomial</span> <span m='4142390'>in</span> <span
  m='4142649'>the</span> <span m='4144050'>integer</span> <span
  m='4144540'>values.</span> </p><p><span m='4145399'>So</span> <span
  m='4145580'>we</span> <span m='4145670'>call</span> <span
  m='4145840'>that</span> <span m='4146010'>pseudo-polynomial,</span> <span
  m='4146990'>because</span> <span m='4147149'>it's</span> <span
  m='4147260'>not</span> <span m='4147450'>really</span> <span
  m='4147660'>polynomial.</span> <span m='4148229'>It's</span> <span
  m='4148350'>not</span> <span m='4148590'>polynomial</span> <span
  m='4149140'>in</span> <span m='4149399'>the</span> <span
  m='4149490'>number</span> <span m='4149740'>of</span> <span
  m='4149819'>digits</span> <span m='4150319'>that</span> <span
  m='4150529'>you</span> <span m='4150670'>have</span> <span
  m='4150810'>to</span> <span m='4150910'>write</span> <span
  m='4151060'>down</span> <span m='4151229'>the</span> <span
  m='4151290'>number.</span> <span m='4151689'>It's</span> <span
  m='4151970'>Polynomial</span> <span m='4152490'>in</span> <span
  m='4152560'>the</span> <span m='4152620'>values.</span> <span
  m='4153800'>Weak</span> <span m='4153910'>NP-hardness</span> <span
  m='4154740'>goes</span> <span m='4155000'>together</span> <span
  m='4155350'>with</span> <span m='4155479'>pseudo-polynomial.</span> <span
  m='4158180'>That's</span> <span m='4158630'>kind</span> <span
  m='4159080'>of</span> <span m='4159149'>a</span> <span
  m='4159200'>matching</span> <span m='4159580'>result.</span> <span
  m='4159890'>Say</span> <span m='4160080'>look,</span> <span
  m='4160540'>pseudo-polynomial</span> <span m='4161170'>is</span> <span
  m='4161350'>the</span> <span m='4161439'>best</span> <span
  m='4161770'>you</span> <span m='4161850'>can</span> <span
  m='4162010'>do.</span> <span m='4162890'>You</span> <span
  m='4163229'>can't</span> <span m='4163580'>hope</span> <span
  m='4163740'>for</span> <span m='4163819'>a</span> <span
  m='4163870'>polynomial</span> <span m='4164510'>because</span> <span
  m='4165140'>if</span> <span m='4165380'>you</span> <span
  m='4165520'>let</span> <span m='4165870'>the</span> <span
  m='4165939'>numbers</span> <span m='4166300'>get</span> <span
  m='4166460'>huge,</span> <span m='4167350'>then</span> <span
  m='4168060'>the</span> <span m='4168140'>problem</span> <span
  m='4168510'>is</span> <span m='4168720'>NP-complete.</span> <span
  m='4170330'>But</span> <span m='4170510'>if</span> <span
  m='4170700'>you</span> <span m='4170910'>force</span> <span
  m='4171270'>the</span> <span m='4171330'>numbers</span> <span
  m='4171600'>to</span> <span m='4171680'>be</span> <span
  m='4171779'>small,</span> <span m='4172430'>this</span> <span
  m='4172580'>problem</span> <span m='4172890'>is</span> <span
  m='4173010'>easy.</span> <span m='4174029'>So</span> <span
  m='4174870'>subset</span> <span m='4175260'>sum</span> <span
  m='4175439'>is</span> <span m='4175520'>a</span> <span
  m='4175569'>little</span> <span m='4175779'>funny</span> <span
  m='4176220'>in</span> <span m='4176330'>that</span> <span
  m='4176540'>sense.</span> <span m='4180240'>Cool.</span> </p><p><span
  m='4211400'>Let</span> <span m='4211520'>me</span> <span
  m='4211610'>tell</span> <span m='4211770'>you</span> <span
  m='4211830'>about</span> <span m='4211980'>another</span> <span
  m='4212240'>problem,</span> <span m='4214870'>partition.</span> <span
  m='4219360'>So</span> <span m='4219590'>partition</span> <span
  m='4220030'>is</span> <span m='4220340'>pretty</span> <span
  m='4220550'>much</span> <span m='4220760'>the</span> <span
  m='4220830'>same</span> <span m='4221030'>set</span> <span
  m='4221270'>up.</span> <span m='4221560'>I'm</span> <span
  m='4221770'>given</span> <span m='4222520'>n</span> <span
  m='4222700'>integers.</span> <span m='4231880'>Let's</span> <span
  m='4232260'>say</span> <span m='4232430'>they're</span> <span
  m='4232530'>positive.</span> <span m='4233860'>And</span> <span
  m='4234460'>I</span> <span m='4234590'>want</span> <span m='4234830'>to</span>
  <span m='4234940'>know,</span> <span m='4237260'>is</span> <span
  m='4237420'>there</span> <span m='4237530'>a</span> <span
  m='4237590'>subset--</span> <span m='4238650'>I'm</span> <span
  m='4238780'>not</span> <span m='4239040'>given</span> <span
  m='4239290'>a</span> <span m='4239340'>target</span> <span
  m='4239670'>sum</span> <span m='4239910'>t.</span> <span
  m='4241200'>Target</span> <span m='4241600'>sum</span> <span
  m='4241640'>is</span> <span m='4241800'>basically</span> <span
  m='4242370'>forced.</span> <span m='4250240'>What</span> <span
  m='4250440'>I</span> <span m='4250480'>would</span> <span
  m='4250640'>like</span> <span m='4251120'>is</span> <span
  m='4251910'>the</span> <span m='4252040'>sum</span> <span
  m='4252440'>of</span> <span m='4252560'>all</span> <span
  m='4252730'>the</span> <span m='4252800'>values</span> <span
  m='4253290'>in</span> <span m='4253400'>S</span> <span m='4253880'>to</span>
  <span m='4254050'>equal</span> <span m='4254880'>the</span> <span
  m='4254980'>sum</span> <span m='4255240'>of</span> <span
  m='4255350'>all</span> <span m='4255490'>the</span> <span
  m='4255550'>values</span> <span m='4255950'>not</span> <span
  m='4256320'>in</span> <span m='4256440'>S.</span> <span
  m='4256860'>That's</span> <span m='4257490'>A</span> <span
  m='4257760'>minus</span> <span m='4258160'>S,</span> <span
  m='4259450'>which</span> <span m='4260030'>in</span> <span
  m='4260160'>other</span> <span m='4260300'>words</span> <span
  m='4260490'>is</span> <span m='4260560'>going</span> <span
  m='4260700'>to</span> <span m='4260770'>be</span> <span m='4260870'>the</span>
  <span m='4260950'>sum</span> <span m='4261270'>of</span> <span
  m='4261380'>all</span> <span m='4261570'>values</span> <span m='4261920'>in
  A</span> <span m='4262880'>divided</span> <span m='4263260'>by</span> <span
  m='4263380'>2.</span> </p><p><span m='4264790'>So</span> <span
  m='4265760'>this</span> <span m='4266040'>is</span> <span
  m='4266160'>called</span> <span m='4266660'>partition</span> <span
  m='4267180'>because</span> <span m='4267470'>you're</span> <span
  m='4267570'>taking</span> <span m='4268030'>a</span> <span
  m='4268080'>set,</span> <span m='4268610'>you're</span> <span
  m='4268750'>splitting</span> <span m='4269150'>it</span> <span
  m='4269260'>into</span> <span m='4269470'>two</span> <span
  m='4269570'>halves</span> <span m='4271130'>of</span> <span
  m='4271290'>equal</span> <span m='4271620'>sum.</span> <span
  m='4271990'>Every</span> <span m='4272250'>element</span> <span
  m='4272560'>has</span> <span m='4272710'>to</span> <span m='4272800'>go</span>
  <span m='4272920'>in</span> <span m='4273000'>one</span> <span
  m='4273170'>of</span> <span m='4273250'>the</span> <span
  m='4273310'>two</span> <span m='4273410'>halves.</span> <span
  m='4274290'>And</span> <span m='4274770'>they're</span> <span
  m='4275090'>called</span> <span m='4275400'>S and</span> <span
  m='4275790'>A</span> <span m='4275870'>minus</span> <span
  m='4276240'>S,</span> <span m='4276590'>like</span> <span
  m='4276800'>cuts</span> <span m='4277520'>in</span> <span
  m='4277720'>the</span> <span m='4277950'>flow</span> <span
  m='4278180'>stuff.</span> <span m='4279510'>And</span> <span
  m='4280410'>you</span> <span m='4280550'>want</span> <span
  m='4280780'>those</span> <span m='4280950'>two</span> <span
  m='4281070'>halves</span> <span m='4281290'>to</span> <span
  m='4281350'>have</span> <span m='4281460'>exactly</span> <span
  m='4281810'>the</span> <span m='4281870'>same</span> <span
  m='4282050'>sum,</span> <span m='4282310'>which</span> <span
  m='4282490'>means</span> <span m='4282700'>they</span> <span
  m='4282810'>will</span> <span m='4282960'>be</span> <span
  m='4283120'>the</span> <span m='4283210'>sum</span> <span
  m='4283510'>divided</span> <span m='4283830'>by</span> <span
  m='4283940'>2.</span> <span m='4284620'>So</span> <span
  m='4284810'>that</span> <span m='4284960'>better</span> <span
  m='4285160'>be</span> <span m='4285350'>even,</span> <span
  m='4286020'>otherwise</span> <span m='4286320'>it's</span> <span
  m='4286480'>not</span> <span m='4286590'>going</span> <span
  m='4286710'>to</span> <span m='4286770'>be</span> <span
  m='4286840'>possible.</span> <span m='4287840'>So</span> <span
  m='4287910'>again,</span> <span m='4288350'>you</span> <span
  m='4288510'>want</span> <span m='4288690'>to</span> <span
  m='4288860'>decide</span> <span m='4289810'>whether</span> <span
  m='4290030'>this</span> <span m='4290190'>is</span> <span
  m='4290280'>possible</span> <span m='4291140'>or</span> <span
  m='4291300'>impossible,</span> <span m='4291870'>yes</span> <span
  m='4292130'>or</span> <span m='4292180'>no.</span> </p><p><span
  m='4294720'>I</span> <span m='4294860'>claim</span> <span
  m='4295160'>this</span> <span m='4295300'>problem</span> <span
  m='4295550'>is</span> <span m='4295680'>also</span> <span
  m='4296110'>weakly</span> <span m='4296650'>NP-complete,</span> <span
  m='4298200'>and</span> <span m='4298550'>we</span> <span
  m='4298650'>can</span> <span m='4298850'>reduce</span> <span
  m='4300030'>from</span> <span m='4300350'>subset</span> <span
  m='4300850'>sum</span> <span m='4301370'>to</span> <span
  m='4301540'>partition.</span> <span m='4303100'>This</span> <span
  m='4303280'>is</span> <span m='4303410'>a</span> <span
  m='4303470'>little</span> <span m='4303720'>interesting</span> <span
  m='4304150'>because</span> <span m='4304360'>partition</span> <span
  m='4304820'>is</span> <span m='4304950'>actually</span> <span
  m='4305350'>a</span> <span m='4305440'>special</span> <span
  m='4306000'>case</span> <span m='4306530'>of</span> <span
  m='4306680'>subset</span> <span m='4307085'>sum.</span> <span
  m='4308560'>It</span> <span m='4308660'>is</span> <span m='4308870'>the</span>
  <span m='4308970'>case</span> <span m='4309360'>where</span> <span
  m='4310190'>t</span> <span m='4311020'>equals</span> <span
  m='4311470'>this.</span> <span m='4313500'>Subset</span> <span
  m='4313880'>sum,</span> <span m='4314310'>you're</span> <span
  m='4314460'>trying</span> <span m='4314660'>to</span> <span
  m='4314720'>solve</span> <span m='4315010'>it</span> <span
  m='4315170'>no</span> <span m='4315330'>matter</span> <span
  m='4315600'>what</span> <span m='4315930'>t</span> <span
  m='4316200'>is.</span> <span m='4316490'>t</span> <span m='4316650'>is</span>
  <span m='4316780'>a</span> <span m='4316840'>given</span> <span
  m='4317540'>input.</span> <span m='4318280'>So</span> <span
  m='4318490'>there's</span> <span m='4318640'>more</span> <span
  m='4318930'>instances</span> <span m='4319630'>over</span> <span
  m='4319860'>here.</span> <span m='4320750'>Some</span> <span
  m='4321100'>of</span> <span m='4321180'>them,</span> <span
  m='4322010'>some</span> <span m='4322250'>of</span> <span
  m='4322350'>these</span> <span m='4322560'>instances</span> <span
  m='4323150'>are</span> <span m='4323320'>the</span> <span
  m='4323400'>case</span> <span m='4323770'>where</span> <span
  m='4323930'>t</span> <span m='4324260'>equals</span> <span
  m='4324640'>the</span> <span m='4324710'>sum</span> <span
  m='4324940'>over</span> <span m='4325130'>2.</span> <span
  m='4325650'>Those</span> <span m='4325940'>are</span> <span
  m='4326010'>partition</span> <span m='4326450'>instances.</span> <span
  m='4327010'>So</span> <span m='4327110'>this</span> <span
  m='4327310'>is</span> <span m='4327460'>like</span> <span m='4327610'>a</span>
  <span m='4327650'>subset</span> <span m='4328140'>of</span> <span
  m='4328290'>the</span> <span m='4328370'>possible</span> <span
  m='4328820'>inputs</span> <span m='4329550'>as</span> <span
  m='4329730'>over</span> <span m='4329910'>there,</span> <span
  m='4330210'>which</span> <span m='4330270'>means</span> <span
  m='4330470'>this</span> <span m='4330610'>problem</span> <span
  m='4331570'>is</span> <span m='4331900'>easier</span> <span
  m='4332510'>than</span> <span m='4332700'>this</span> <span
  m='4332880'>one--</span> <span m='4333610'>no</span> <span
  m='4334060'>harder</span> <span m='4334630'>anyway.</span> </p><p><span
  m='4336470'>In</span> <span m='4336540'>other</span> <span
  m='4336690'>words,</span> <span m='4337110'>I</span> <span
  m='4337170'>can</span> <span m='4337520'>reduce</span> <span
  m='4338730'>partition</span> <span m='4340140'>to</span> <span
  m='4340360'>subset</span> <span m='4340840'>sum.</span> <span
  m='4341580'>I</span> <span m='4341660'>just</span> <span
  m='4341850'>compute</span> <span m='4342280'>this</span> <span
  m='4342460'>value</span> <span m='4342890'>and</span> <span
  m='4343040'>set</span> <span m='4343240'>that</span> <span
  m='4343410'>to</span> <span m='4343510'>t,</span> <span m='4343750'>and</span>
  <span m='4343850'>then</span> <span m='4344090'>leave</span> <span
  m='4344350'>the</span> <span m='4344440'>a's</span> <span
  m='4344730'>alone.</span> <span m='4345880'>That</span> <span
  m='4346060'>will</span> <span m='4346220'>reduce</span> <span
  m='4347050'>partition</span> <span m='4347650'>to</span> <span
  m='4347750'>subset</span> <span m='4348050'>sum.</span> </p><p><span
  m='4348350'>But</span> <span m='4348460'>that's</span> <span
  m='4348640'>not</span> <span m='4348830'>the</span> <span
  m='4348900'>direction</span> <span m='4349310'>I</span> <span
  m='4349720'>want.</span> <span m='4350130'>I want</span> <span
  m='4350260'>to</span> <span m='4350320'>reduce</span> <span
  m='4350640'>from</span> <span m='4350840'>subset</span> <span
  m='4351275'>sum,</span> <span m='4351710'>a</span> <span
  m='4351820'>problem</span> <span m='4352170'>I</span> <span
  m='4352240'>can</span> <span m='4352400'>prove</span> <span
  m='4352690'>is</span> <span m='4352800'>NP-complete,</span> <span
  m='4353850'>to</span> <span m='4354210'>partition,</span> <span
  m='4355150'>because</span> <span m='4355300'>I</span> <span
  m='4355360'>want</span> <span m='4355490'>to</span> <span
  m='4355560'>prove</span> <span m='4355810'>that</span> <span
  m='4355950'>partition</span> <span m='4356400'>is</span> <span
  m='4356540'>NP-complete.</span> </p><p><span m='4357400'>So</span> <span
  m='4357610'>in</span> <span m='4357810'>this</span> <span
  m='4357950'>case,</span> <span m='4358270'>there's</span> <span
  m='4358310'>an</span> <span m='4358390'>easy</span> <span
  m='4358600'>reduction</span> <span m='4359040'>in</span> <span
  m='4360030'>both</span> <span m='4360310'>directions.</span> <span
  m='4362090'>This</span> <span m='4362280'>direction</span> <span
  m='4362580'>is</span> <span m='4362640'>a</span> <span
  m='4362670'>little</span> <span m='4362850'>harder.</span> <span
  m='4364750'>So</span> <span m='4365720'>reduction</span> <span
  m='4368452'>from</span> <span m='4370810'>subset</span> <span
  m='4371110'>sum.</span> <span m='4375440'>So</span> <span
  m='4375880'>I'm</span> <span m='4376100'>given</span> <span
  m='4376710'>a</span> <span m='4376800'>bunch</span> <span
  m='4377050'>of</span> <span m='4377140'>ai's.</span> <span
  m='4377700'>I'm</span> <span m='4377810'>not</span> <span
  m='4378000'>going</span> <span m='4378130'>to</span> <span
  m='4378420'>touch</span> <span m='4378700'>them.</span> <span
  m='4379380'>And</span> <span m='4379510'>I'm</span> <span
  m='4379640'>given</span> <span m='4379920'>a</span> <span
  m='4379980'>target</span> <span m='4380390'>sum</span> <span
  m='4380640'>t.</span> <span m='4381010'>And</span> <span m='4381100'>I</span>
  <span m='4381150'>basically</span> <span m='4381480'>want</span> <span
  m='4381640'>to</span> <span m='4382230'>make</span> <span
  m='4382580'>that</span> <span m='4382730'>target</span> <span
  m='4383030'>sum</span> <span m='4383230'>into</span> <span
  m='4383490'>this</span> <span m='4383700'>half.</span> </p><p><span
  m='4384820'>To</span> <span m='4384970'>do</span> <span
  m='4385140'>that,</span> <span m='4385320'>I'm</span> <span
  m='4385390'>going</span> <span m='4385510'>to</span> <span
  m='4385580'>add</span> <span m='4386010'>two</span> <span
  m='4386220'>numbers</span> <span m='4388700'>to</span> <span
  m='4388880'>my</span> <span m='4389020'>set.</span> <span
  m='4389480'>So</span> <span m='4389950'>I'm</span> <span
  m='4390100'>going</span> <span m='4390230'>to</span> <span
  m='4390350'>let</span> <span m='4391750'>sigma</span> <span
  m='4392730'>be</span> <span m='4393030'>the</span> <span
  m='4393130'>sum</span> <span m='4393810'>of</span> <span
  m='4394850'>the</span> <span m='4394970'>given</span> <span
  m='4395290'>a's.</span> <span m='4397660'>And</span> <span
  m='4397880'>then</span> <span m='4398110'>I'm</span> <span
  m='4398250'>going</span> <span m='4398460'>to</span> <span
  m='4398620'>add--</span> <span m='4399700'>so I'm</span> <span
  m='4399940'>given</span> <span m='4400260'>a1</span> <span
  m='4400680'>through</span> <span m='4400870'>an.</span> <span
  m='4401300'>I'm</span> <span m='4401400'>going</span> <span
  m='4401530'>to</span> <span m='4401630'>add</span> <span m='4402470'>an</span>
  <span m='4404200'>plus</span> <span m='4404450'>1,</span> <span
  m='4405420'>is</span> <span m='4405570'>going</span> <span
  m='4405730'>to</span> <span m='4405810'>be</span> <span
  m='4407360'>sigma</span> <span m='4408690'>plus</span> <span
  m='4409125'>t.</span> <span m='4410720'>And</span> <span
  m='4410990'>I'm</span> <span m='4411100'>going</span> <span
  m='4411280'>to</span> <span m='4411370'>add</span> <span m='4413846'>an</span>
  <span m='4414630'>plus</span> <span m='4414900'>2</span> <span
  m='4417240'>to</span> <span m='4417430'>be</span> <span m='4418600'>2</span>
  <span m='4419040'>sigma</span> <span m='4419780'>minus</span> <span
  m='4420360'>t.</span> </p><p><span m='4425050'>Why?</span> <span
  m='4425990'>So</span> <span m='4426130'>these</span> <span
  m='4426350'>are</span> <span m='4426440'>two</span> <span
  m='4426780'>basically</span> <span m='4427250'>huge</span> <span
  m='4427730'>numbers.</span> <span m='4431100'>Because</span> <span
  m='4431280'>sigma</span> <span m='4431680'>is</span> <span
  m='4431840'>bigger</span> <span m='4432180'>than--</span> <span m='4432380'>I
  mean,</span> <span m='4432720'>it's the</span> <span m='4432790'>sum</span>
  <span m='4433080'>of</span> <span m='4433180'>all</span> <span
  m='4433300'>the</span> <span m='4433380'>numbers,</span> <span
  m='4433730'>so</span> <span m='4433940'>it's</span> <span
  m='4434130'>bigger</span> <span m='4434360'>than</span> <span
  m='4434500'>all</span> <span m='4434690'>of</span> <span
  m='4434770'>them.</span> <span m='4436140'>And</span> <span
  m='4436190'>so</span> <span m='4437240'>imagine</span> <span
  m='4437680'>for</span> <span m='4437810'>a</span> <span
  m='4437870'>moment</span> <span m='4438130'>that</span> <span
  m='4438270'>I</span> <span m='4438320'>put</span> <span
  m='4438650'>these</span> <span m='4438910'>two</span> <span
  m='4439630'>in</span> <span m='4439830'>the</span> <span
  m='4439900'>same</span> <span m='4440290'>side</span> <span
  m='4440560'>of</span> <span m='4440620'>the</span> <span
  m='4440700'>partition.</span> <span m='4442020'>I</span> <span
  m='4442290'>put</span> <span m='4442540'>them</span> <span
  m='4442670'>both</span> <span m='4442910'>in</span> <span m='4443030'>S  or
  I</span> <span m='4443430'>put</span> <span m='4443590'>them</span> <span
  m='4443700'>both</span> <span m='4443930'>out</span> <span
  m='4444100'>of</span> <span m='4444200'>S.</span> <span
  m='4444780'>Their</span> <span m='4445010'>sum</span> <span
  m='4445710'>by</span> <span m='4445870'>themselves</span> <span
  m='4446500'>is</span> <span m='4447110'>3</span> <span
  m='4447520'>sigma.</span> <span m='4449060'>The</span> <span
  m='4449140'>t's</span> <span m='4449360'>cancel.</span> <span
  m='4450450'>Whereas</span> <span m='4450930'>all</span> <span
  m='4451250'>the</span> <span m='4451400'>other</span> <span
  m='4451660'>items,</span> <span m='4452380'>their</span> <span
  m='4452580'>sum</span> <span m='4452850'>is</span> <span
  m='4452960'>sigma.</span> <span m='4453940'>So</span> <span
  m='4455300'>I'm</span> <span m='4455460'>host.</span> <span
  m='4455830'>If</span> <span m='4455980'>I</span> <span m='4456050'>have</span>
  <span m='4456210'>3</span> <span m='4456360'>sigma</span> <span
  m='4456610'>on</span> <span m='4456670'>one</span> <span
  m='4456930'>side</span> <span m='4457140'>and</span> <span
  m='4457170'>sigma</span> <span m='4457450'>on</span> <span
  m='4457520'>the</span> <span m='4457620'>other,</span> <span
  m='4457830'>I'm</span> <span m='4457920'>not</span> <span
  m='4458050'>going</span> <span m='4458170'>to</span> <span
  m='4458230'>make</span> <span m='4458390'>them</span> <span
  m='4458510'>equal.</span> </p><p><span m='4459830'>So</span> <span
  m='4460240'>in</span> <span m='4460360'>fact,</span> <span
  m='4460760'>these</span> <span m='4460980'>two</span> <span
  m='4461160'>elements</span> <span m='4461630'>have</span> <span
  m='4461830'>to</span> <span m='4461920'>be</span> <span m='4462070'>on</span>
  <span m='4462210'>opposite</span> <span m='4462650'>sides.</span> <span
  m='4463670'>So</span> <span m='4463890'>there's</span> <span
  m='4464070'>a</span> <span m='4464130'>side</span> <span
  m='4464410'>that</span> <span m='4464510'>has</span> <span
  m='4464760'>sigma</span> <span m='4465060'>plus t.</span> <span
  m='4465690'>There's</span> <span m='4466080'>a</span> <span
  m='4466150'>side</span> <span m='4466410'>has</span> <span
  m='4466610'>2</span> <span m='4466750'>sigma</span> <span
  m='4467080'>minus</span> <span m='4467440'>t.</span> <span
  m='4468880'>And</span> <span m='4469090'>then</span> <span
  m='4469240'>there's</span> <span m='4469390'>all</span> <span
  m='4469550'>the</span> <span m='4469680'>other</span> <span
  m='4469920'>n</span> <span m='4470080'>items,</span> <span
  m='4470700'>and</span> <span m='4470790'>some</span> <span
  m='4471020'>of</span> <span m='4471100'>them</span> <span
  m='4471210'>are</span> <span m='4471280'>going</span> <span
  m='4471410'>to</span> <span m='4471480'>go</span> <span m='4471670'>to</span>
  <span m='4471790'>this</span> <span m='4471950'>side,</span> <span
  m='4472530'>some</span> <span m='4472810'>of</span> <span
  m='4472870'>them</span> <span m='4472990'>are</span> <span
  m='4473050'>going</span> <span m='4473200'>to</span> <span
  m='4473410'>go</span> <span m='4473600'>to</span> <span
  m='4473760'>this</span> <span m='4473910'>side.</span> <span
  m='4475660'>Their</span> <span m='4475830'>total</span> <span
  m='4476340'>value</span> <span m='4476760'>is</span> <span
  m='4476870'>sigma.</span> </p><p><span m='4478310'>Right</span> <span
  m='4478570'>now</span> <span m='4478740'>this</span> <span
  m='4478930'>is</span> <span m='4479050'>close</span> <span
  m='4479380'>to</span> <span m='4479490'>sigma.</span> <span
  m='4480260'>This</span> <span m='4480470'>is</span> <span
  m='4480560'>close</span> <span m='4480810'>to</span> <span
  m='4480930'>2</span> <span m='4481090'>sigma.</span> <span
  m='4481540'>So</span> <span m='4481590'>they</span> <span
  m='4481720'>have</span> <span m='4481880'>to</span> <span
  m='4481980'>kind</span> <span m='4482210'>of</span> <span
  m='4482440'>meet</span> <span m='4482710'>in</span> <span
  m='4482810'>the</span> <span m='4482880'>middle.</span> <span
  m='4483650'>In</span> <span m='4483760'>fact,</span> <span
  m='4484580'>what</span> <span m='4484690'>you'll</span> <span
  m='4484840'>have</span> <span m='4485050'>to</span> <span
  m='4485160'>do</span> <span m='4485980'>is</span> <span m='4486810'>add</span>
  <span m='4491450'>sigma</span> <span m='4491960'>minus</span> <span
  m='4492360'>t</span> <span m='4492650'>over</span> <span
  m='4492880'>here</span> <span m='4494540'>and</span> <span
  m='4496188'>add</span> <span m='4499092'>t</span> <span
  m='4499580'>over</span> <span m='4499790'>here.</span> </p><p><span
  m='4501350'>Think</span> <span m='4501580'>about</span> <span
  m='4501810'>it</span> <span m='4501880'>for</span> <span m='4501950'>a</span>
  <span m='4502010'>second.</span> <span m='4502360'>If</span> <span
  m='4502460'>I</span> <span m='4502560'>add</span> <span
  m='4502640'>sigma</span> <span m='4502940'>minus</span> <span
  m='4503220'>t,</span> <span m='4503410'>this</span> <span
  m='4503610'>comes</span> <span m='4503850'>out</span> <span
  m='4503960'>to</span> <span m='4504040'>2</span> <span
  m='4504170'>sigma.</span> <span m='4504910'>If</span> <span
  m='4505000'>I</span> <span m='4505040'>add</span> <span m='4505270'>t</span>
  <span m='4505440'>to</span> <span m='4505550'>this,</span> <span
  m='4505910'>this</span> <span m='4506270'>comes</span> <span
  m='4506480'>out</span> <span m='4506590'>to</span> <span m='4506670'>2</span>
  <span m='4506820'>sigma.</span> <span m='4507910'>That</span> <span
  m='4508070'>would</span> <span m='4508170'>be</span> <span
  m='4508260'>good</span> <span m='4508460'>because</span> <span
  m='4508650'>they're</span> <span m='4508770'>equal.</span> <span
  m='4509330'>And</span> <span m='4509530'>notice</span> <span
  m='4509900'>that</span> <span m='4510090'>this</span> <span
  m='4510250'>is</span> <span m='4510330'>sigma</span> <span
  m='4510630'>minus</span> <span m='4510960'>t.</span> <span
  m='4511490'>This</span> <span m='4511700'>is</span> <span
  m='4511840'>t.</span> <span m='4512130'>Their</span> <span
  m='4512320'>sum</span> <span m='4512840'>is</span> <span
  m='4513030'>sigma.</span> </p><p><span m='4513770'>So</span> <span
  m='4513930'>in</span> <span m='4514000'>fact,</span> <span
  m='4514320'>it</span> <span m='4514420'>has</span> <span m='4514570'>to</span>
  <span m='4514660'>be</span> <span m='4514800'>like</span> <span
  m='4515010'>this.</span> <span m='4516870'>You</span> <span
  m='4517060'>add</span> <span m='4517350'>something</span> <span
  m='4517810'>over</span> <span m='4517970'>here,</span> <span
  m='4518600'>and</span> <span m='4518800'>sigma</span> <span
  m='4519140'>minus</span> <span m='4519460'>something</span> <span
  m='4519800'>over</span> <span m='4519960'>here</span> <span
  m='4520210'>for</span> <span m='4520370'>all</span> <span
  m='4520530'>the</span> <span m='4520660'>other</span> <span
  m='4520900'>ai's.</span> <span m='4521980'>And</span> <span
  m='4522290'>the</span> <span m='4522350'>something</span> <span
  m='4522760'>has</span> <span m='4522980'>to</span> <span m='4523070'>be</span>
  <span m='4523200'>t</span> <span m='4523470'>in</span> <span
  m='4523560'>order</span> <span m='4523750'>for</span> <span
  m='4523900'>these</span> <span m='4524260'>two</span> <span
  m='4524500'>values</span> <span m='4524920'>to</span> <span
  m='4525000'>equalize.</span> <span m='4526390'>So</span> <span
  m='4527170'>in</span> <span m='4527340'>order</span> <span
  m='4527610'>to</span> <span m='4527800'>solve</span> <span
  m='4528300'>this</span> <span m='4528460'>slightly</span> <span
  m='4528980'>larger</span> <span m='4529840'>partition</span> <span
  m='4530420'>problem,</span> <span m='4531290'>you</span> <span
  m='4531460'>have</span> <span m='4531730'>to</span> <span
  m='4531830'>actually</span> <span m='4532210'>solve</span> <span
  m='4532500'>the</span> <span m='4532570'>subset</span> <span
  m='4533000'>sum</span> <span m='4533260'>problem</span> <span
  m='4533640'>because</span> <span m='4533860'>you</span> <span
  m='4533930'>have</span> <span m='4534030'>to</span> <span
  m='4534120'>construct</span> <span m='4535420'>a</span> <span
  m='4535470'>subset</span> <span m='4536190'>that</span> <span
  m='4536380'>adds</span> <span m='4536600'>up</span> <span
  m='4536730'>to</span> <span m='4536840'>t.</span> <span m='4537540'>t</span>
  <span m='4537890'>was</span> <span m='4538040'>an</span> <span
  m='4538110'>arbitrary</span> <span m='4538620'>given</span> <span
  m='4538870'>value.</span> <span m='4540260'>So</span> <span
  m='4540380'>this</span> <span m='4540530'>is</span> <span
  m='4540630'>pretty</span> <span m='4541100'>nifty.</span> <span
  m='4543820'>We're</span> <span m='4544210'>adding</span> <span
  m='4544600'>some</span> <span m='4544760'>values</span> <span
  m='4545360'>so</span> <span m='4545490'>that</span> <span
  m='4546080'>the</span> <span m='4546210'>new</span> <span
  m='4546580'>target</span> <span m='4546840'>sum</span> <span
  m='4547510'>is</span> <span m='4547910'>the 50/50</span> <span
  m='4547990'>split</span> <span m='4549550'>when</span> <span
  m='4549990'>we're</span> <span m='4550140'>given</span> <span
  m='4550520'>some</span> <span m='4550690'>values</span> <span
  m='4551210'>that</span> <span m='4551330'>have</span> <span
  m='4551520'>an</span> <span m='4551630'>arbitrary</span> <span
  m='4552470'>target</span> <span m='4552830'>sum.</span> <span
  m='4555140'>So</span> <span m='4555540'>partition</span> <span
  m='4556650'>is</span> <span m='4557130'>weakly</span> <span
  m='4557600'>NP-complete.</span> </p><p><span m='4559380'>Let</span> <span
  m='4559660'>me</span> <span m='4559810'>go</span> <span m='4560120'>to</span>
  <span m='4562220'>rectangle</span> <span m='4562780'>packing.</span> <span
  m='4587690'>So</span> <span m='4588050'>rectangle</span> <span
  m='4588480'>packing--</span> <span m='4589090'>I'm</span> <span
  m='4589360'>going</span> <span m='4589480'>to</span> <span
  m='4589540'>draw</span> <span m='4589780'>a</span> <span
  m='4589810'>picture.</span> <span m='4590810'>I</span> <span
  m='4591210'>give</span> <span m='4591430'>you</span> <span
  m='4591670'>a</span> <span m='4591780'>bunch</span> <span
  m='4592090'>of</span> <span m='4592260'>rectangles</span> <span
  m='4592850'>of</span> <span m='4592950'>varying</span> <span
  m='4593250'>sizes.</span> <span m='4594780'>And</span> <span
  m='4595130'>I</span> <span m='4595230'>give</span> <span
  m='4595440'>you</span> <span m='4595630'>a</span> <span
  m='4595710'>target</span> <span m='4596270'>rectangle.</span> <span
  m='4597692'>Let's</span> <span m='4598166'>call it</span> <span
  m='4598640'>T.</span> <span m='4599760'>These</span> <span
  m='4600030'>are</span> <span m='4600190'>the</span> <span
  m='4600450'>Ri's.</span> <span m='4602240'>I</span> <span
  m='4602390'>want</span> <span m='4602550'>to</span> <span
  m='4602620'>put</span> <span m='4602960'>these</span> <span
  m='4603160'>rectangles</span> <span m='4604350'>into</span> <span
  m='4604660'>this</span> <span m='4606390'>picture</span> <span
  m='4608900'>without</span> <span m='4609290'>any</span> <span
  m='4609470'>overlaps.</span> <span m='4612000'>Each</span> <span
  m='4612260'>of</span> <span m='4612350'>these</span> <span
  m='4612680'>rectangles</span> <span m='4613250'>here</span> <span
  m='4613810'>corresponds</span> <span m='4614310'>to</span> <span
  m='4614490'>one</span> <span m='4614630'>of</span> <span
  m='4614690'>the</span> <span m='4614760'>rectangles</span> <span
  m='4615280'>over</span> <span m='4615450'>here.</span> </p><p><span
  m='4616510'>So</span> <span m='4616950'>I'll</span> <span
  m='4617350'>tell</span> <span m='4617610'>you</span> <span
  m='4617810'>that</span> <span m='4618440'>the</span> <span
  m='4618800'>sum</span> <span m='4619840'>of</span> <span
  m='4619910'>the</span> <span m='4619980'>areas</span> <span
  m='4620410'>of</span> <span m='4620490'>these</span> <span
  m='4620680'>rectangles</span> <span m='4621180'>is</span> <span
  m='4621340'>equal</span> <span m='4621660'>to</span> <span
  m='4621800'>the</span> <span m='4621920'>area</span> <span
  m='4622220'>of</span> <span m='4622320'>T.</span> <span m='4623270'>And</span>
  <span m='4623450'>the</span> <span m='4623510'>question</span> <span
  m='4623860'>is,</span> <span m='4624010'>can</span> <span
  m='4624270'>you</span> <span m='4624370'>pack</span> <span
  m='4624870'>those</span> <span m='4625260'>rectangles</span> <span
  m='4626090'>into</span> <span m='4626390'>T</span> <span
  m='4627000'>without</span> <span m='4627370'>any</span> <span
  m='4627530'>overlaps,</span> <span m='4628080'>and</span> <span
  m='4628200'>therefore</span> <span m='4628550'>without</span> <span
  m='4628850'>any</span> <span m='4628990'>gaps,</span> <span
  m='4629590'>because</span> <span m='4629910'>the</span> <span
  m='4629990'>areas</span> <span m='4630410'>are</span> <span
  m='4630480'>exactly</span> <span m='4630850'>the</span> <span
  m='4630950'>same.</span> </p><p><span m='4632090'>I</span> <span
  m='4632230'>claim</span> <span m='4632540'>this</span> <span
  m='4632700'>problem</span> <span m='4633090'>is</span> <span
  m='4633340'>weakly</span> <span m='4633940'>NP-hard--</span> <span
  m='4636000'>I</span> <span m='4636050'>guess</span> <span
  m='4636340'>NP-complete</span> <span m='4639380'>by</span> <span
  m='4639870'>reduction</span> <span m='4640400'>from</span> <span
  m='4640610'>partition.</span> <span m='4644740'>This</span> <span
  m='4645030'>will</span> <span m='4645270'>be</span> <span
  m='4645510'>super</span> <span m='4645780'>easy</span> <span
  m='4650770'>if</span> <span m='4650860'>you</span> <span
  m='4650950'>followed</span> <span m='4651530'>what</span> <span
  m='4651800'>the</span> <span m='4651910'>definition</span> <span
  m='4652330'>of</span> <span m='4652400'>partition</span> <span
  m='4652830'>is.</span> <span m='4653270'>We're</span> <span
  m='4653490'>given</span> <span m='4654590'>some</span> <span
  m='4654820'>integers</span> <span m='4655176'>ai.</span> <span
  m='4656490'>And</span> <span m='4656700'>we're</span> <span
  m='4656780'>going</span> <span m='4656900'>to</span> <span
  m='4656990'>take</span> <span m='4657240'>each</span> <span
  m='4657460'>of</span> <span m='4657550'>them</span> <span
  m='4658090'>and</span> <span m='4658280'>convert</span> <span
  m='4658650'>them</span> <span m='4658870'>into</span> <span
  m='4659350'>a,</span> <span m='4661100'>let's</span> <span
  m='4661310'>say,</span> <span m='4661550'>1</span> <span m='4662680'>by</span>
  <span m='4663160'>3ai</span> <span m='4664850'>rectangle.</span> <span
  m='4666330'>Three</span> <span m='4667170'>is</span> <span
  m='4667550'>to</span> <span m='4667700'>avoid</span> <span
  m='4668060'>some</span> <span m='4668260'>rotation</span> <span
  m='4668520'>we'll</span> <span m='4668780'>see.</span> </p><p><span
  m='4669490'>And</span> <span m='4669700'>then</span> <span
  m='4670260'>we're</span> <span m='4670410'>also</span> <span
  m='4670610'>given</span> <span m='4670870'>the</span> <span
  m='4670940'>targets.</span> <span m='4671225'>Oh</span> <span
  m='4671510'>no,</span> <span m='4671860'>target</span> <span
  m='4672250'>sum</span> <span m='4672360'>is</span> <span
  m='4672530'>given.</span> <span m='4673330'>Target</span> <span
  m='4673750'>sum</span> <span m='4673960'>is</span> <span
  m='4674160'>the</span> <span m='4674240'>sum</span> <span
  m='4674630'>over</span> <span m='4674840'>2.</span> <span
  m='4675210'>But</span> <span m='4675430'>anyway,</span> <span
  m='4676410'>we're</span> <span m='4676560'>going</span> <span
  m='4676690'>to</span> <span m='4676760'>build</span> <span
  m='4677060'>our</span> <span m='4677190'>target</span> <span
  m='4678840'>rectangle</span> <span m='4679520'>to</span> <span
  m='4679680'>be--</span> <span m='4682980'>it's</span> <span
  m='4683100'>actually</span> <span m='4683370'>going</span> <span
  m='4683490'>to</span> <span m='4683560'>be</span> <span
  m='4683690'>really</span> <span m='4684840'>big.</span> <span
  m='4686970'>It's</span> <span m='4687160'>going</span> <span
  m='4687300'>to</span> <span m='4687370'>be</span> <span m='4688580'>2</span>
  <span m='4690060'>by</span> <span m='4691250'>3</span> <span
  m='4691870'>times</span> <span m='4692530'>t.</span> <span
  m='4693820'>So</span> <span m='4694040'>this</span> <span
  m='4694230'>is</span> <span m='4695270'>that</span> <span
  m='4695470'>thing.</span> <span m='4696020'>So</span> <span
  m='4696230'>this</span> <span m='4696380'>is</span> <span
  m='4696500'>3/2</span> <span m='4697880'>sum</span> <span
  m='4698450'>of</span> <span m='4698690'>the</span> <span
  m='4698760'>a's.</span> <span m='4701580'>OK,</span> <span
  m='4703340'>that's</span> <span m='4703510'>about</span> <span
  m='4703820'>it.</span> </p><p><span m='4704720'>In</span> <span
  m='4704860'>order</span> <span m='4705040'>to</span> <span
  m='4705180'>pack</span> <span m='4705510'>these</span> <span
  m='4705690'>rectangles</span> <span m='4706180'>into</span> <span
  m='4706310'>here,</span> <span m='4706600'>because</span> <span
  m='4706970'>each</span> <span m='4707250'>of</span> <span
  m='4707320'>them</span> <span m='4707450'>is</span> <span
  m='4707570'>at</span> <span m='4707650'>least</span> <span
  m='4707900'>three</span> <span m='4708140'>long,</span> <span
  m='4708730'>you</span> <span m='4708880'>cannot</span> <span
  m='4709230'>pack</span> <span m='4709470'>them</span> <span
  m='4709580'>vertically.</span> <span m='4709960'>They</span> <span
  m='4710090'>have</span> <span m='4710300'>to</span> <span
  m='4710390'>be</span> <span m='4710490'>horizontal.</span> <span
  m='4711790'>So</span> <span m='4711890'>in</span> <span
  m='4711960'>fact</span> <span m='4712300'>what</span> <span
  m='4712440'>your</span> <span m='4712560'>packing</span> <span
  m='4712910'>will</span> <span m='4713020'>look</span> <span
  m='4713230'>like</span> <span m='4714430'>is</span> <span
  m='4715320'>they'll</span> <span m='4715490'>be</span> <span
  m='4715670'>the</span> <span m='4715760'>top</span> <span
  m='4716120'>half</span> <span m='4716570'>and</span> <span
  m='4716690'>the</span> <span m='4716750'>bottom</span> <span
  m='4717080'>half.</span> <span m='4718070'>And</span> <span
  m='4718290'>the</span> <span m='4718350'>top</span> <span
  m='4718690'>half,</span> <span m='4719140'>the</span> <span
  m='4719320'>total</span> <span m='4719690'>length</span> <span
  m='4719920'>of</span> <span m='4719980'>those</span> <span
  m='4720150'>rectangles</span> <span m='4720620'>has</span> <span
  m='4720810'>to</span> <span m='4720910'>add</span> <span m='4721150'>up</span>
  <span m='4721690'>to</span> <span m='4722870'>3/2</span> <span
  m='4723660'>sum</span> <span m='4723930'>of</span> <span m='4724040'>A.</span>
  <span m='4724360'>Everything</span> <span m='4724680'>was</span> <span
  m='4724940'>scaled</span> <span m='4725330'>up</span> <span
  m='4725430'>by</span> <span m='4725560'>3,</span> <span m='4725940'>so</span>
  <span m='4726120'>that's</span> <span m='4726770'>1/2</span> <span
  m='4727370'>of</span> <span m='4727470'>A</span> <span m='4728640'>on</span>
  <span m='4728770'>the</span> <span m='4728840'>top</span> <span
  m='4729210'>and</span> <span m='4729310'>the</span> <span
  m='4729370'>bottom.</span> <span m='4729690'>That's</span> <span
  m='4729890'>a</span> <span m='4729940'>partition.</span> <span
  m='4730790'>In</span> <span m='4731200'>order</span> <span
  m='4731380'>to</span> <span m='4731450'>pack</span> <span
  m='4731710'>the</span> <span m='4731790'>rectangles</span> <span
  m='4732240'>into</span> <span m='4732340'>here,</span> <span
  m='4732620'>you</span> <span m='4732730'>have</span> <span
  m='4732890'>to</span> <span m='4732990'>solve</span> <span
  m='4733170'>the</span> <span m='4733240'>partition</span> <span
  m='4733650'>problem,</span> <span m='4733890'>and</span> <span
  m='4733980'>vice</span> <span m='4734210'>versa.</span> <span
  m='4735570'>Easy.</span> </p><p><span m='4737580'>OK,</span> <span
  m='4738670'>let me</span> <span m='4738770'>show</span> <span
  m='4739030'>you</span> <span m='4739511'>one</span> <span m='4739992'>more
  thing,</span> <span m='4750980'>jigsaw</span> <span
  m='4751510'>puzzles.</span> <span m='4756790'>This</span> <span
  m='4757000'>is</span> <span m='4757910'>not</span> <span
  m='4758510'>the</span> <span m='4758600'>jigsaw</span> <span
  m='4758940'>puzzles</span> <span m='4759290'>you</span> <span
  m='4759380'>grew</span> <span m='4759610'>up</span> <span
  m='4759750'>on,</span> <span m='4760580'>somewhat</span> <span
  m='4761060'>more</span> <span m='4761360'>generalized.</span> <span
  m='4763150'>So</span> <span m='4763540'>a</span> <span
  m='4763590'>piece</span> <span m='4764370'>is</span> <span
  m='4764550'>going</span> <span m='4764690'>to</span> <span
  m='4764760'>look</span> <span m='4765070'>something</span> <span
  m='4765560'>like</span> <span m='4766840'>this.</span> <span
  m='4770480'>I</span> <span m='4770630'>drew</span> <span
  m='4770830'>them</span> <span m='4771010'>intentionally</span> <span
  m='4772150'>different.</span> <span m='4773860'>So</span> <span
  m='4774340'>on</span> <span m='4774510'>each,</span> <span
  m='4774800'>you</span> <span m='4774910'>have</span> <span
  m='4775050'>a</span> <span m='4775570'>unit</span> <span
  m='4775900'>square.</span> <span m='4776820'>Some</span> <span
  m='4777070'>of</span> <span m='4777150'>the</span> <span
  m='4777220'>sides</span> <span m='4777860'>can</span> <span
  m='4778060'>be</span> <span m='4778990'>flat.</span> <span
  m='4779620'>Some</span> <span m='4779860'>of</span> <span
  m='4779930'>them</span> <span m='4780090'>can</span> <span
  m='4780230'>be</span> <span m='4780360'>tabs.</span> <span
  m='4780840'>Some</span> <span m='4781120'>of</span> <span
  m='4781180'>them</span> <span m='4781320'>can</span> <span
  m='4781440'>be</span> <span m='4781540'>pockets.</span> <span
  m='4782500'>Each</span> <span m='4782790'>tab</span> <span
  m='4783070'>and</span> <span m='4783180'>pocket</span> <span
  m='4783500'>has</span> <span m='4783660'>a</span> <span
  m='4783720'>shape.</span> <span m='4785000'>And</span> <span
  m='4785930'>they're</span> <span m='4786250'>not</span> <span
  m='4786640'>in</span> <span m='4786750'>a</span> <span
  m='4786810'>perfect</span> <span m='4787130'>matching</span> <span
  m='4787460'>with</span> <span m='4787600'>each</span> <span
  m='4787800'>other.</span> <span m='4788110'>So</span> <span
  m='4788750'>there</span> <span m='4788900'>could</span> <span
  m='4789100'>be</span> <span m='4789380'>seven</span> <span
  m='4789860'>of</span> <span m='4790000'>these</span> <span
  m='4790350'>tabs</span> <span m='4790950'>and</span> <span
  m='4791130'>seven</span> <span m='4791490'>of</span> <span
  m='4791580'>these</span> <span m='4791780'>pockets,</span> <span
  m='4792490'>all</span> <span m='4792730'>the</span> <span
  m='4792810'>same</span> <span m='4793150'>shape.</span> <span
  m='4793550'>This</span> <span m='4793720'>is</span> <span
  m='4793800'>what</span> <span m='4793940'>you</span> <span
  m='4794010'>might</span> <span m='4794170'>call</span> <span
  m='4794400'>ambiguous</span> <span m='4795130'>jigsaw</span> <span
  m='4795420'>puzzles.</span> <span m='4795810'>Plus,</span> <span
  m='4796560'>there</span> <span m='4796710'>is</span> <span
  m='4796810'>no</span> <span m='4797070'>image</span> <span
  m='4797390'>on</span> <span m='4797490'>the</span> <span
  m='4797550'>piece,</span> <span m='4798240'>so</span> <span
  m='4798510'>this</span> <span m='4798680'>is</span> <span
  m='4798780'>like</span> <span m='4798990'>hardcore</span> <span
  m='4799460'>jigsaw</span> <span m='4799820'>puzzles.</span> <span
  m='4801900'>This</span> <span m='4802520'>is</span> <span
  m='4802840'>NP-complete.</span> </p><p><span m='4805100'>And</span> <span
  m='4805280'>what</span> <span m='4805420'>I'd</span> <span
  m='4805530'>like</span> <span m='4805850'>to</span> <span
  m='4805980'>do</span> <span m='4807710'>is</span> <span m='4808550'>to</span>
  <span m='4808870'>simulate</span> <span m='4809490'>a</span> <span
  m='4809580'>rectangle</span> <span m='4810860'>with</span> <span
  m='4811080'>a</span> <span m='4811120'>bunch</span> <span
  m='4811410'>of</span> <span m='4811500'>jigsaw</span> <span
  m='4811890'>pieces.</span> <span m='4813110'>So</span> <span
  m='4813420'>it</span> <span m='4813530'>would</span> <span
  m='4813660'>look</span> <span m='4813840'>something</span> <span
  m='4814290'>like</span> <span m='4815300'>this.</span> <span
  m='4824080'>If</span> <span m='4824260'>I</span> <span m='4824370'>have</span>
  <span m='4824770'>a</span> <span m='4825220'>1</span> <span
  m='4825650'>buy</span> <span m='4825890'>something</span> <span
  m='4826300'>rectangle,</span> <span m='4827350'>I'm</span> <span
  m='4827370'>going</span> <span m='4827490'>to</span> <span
  m='4827570'>simulate</span> <span m='4828070'>it</span> <span
  m='4828460'>with</span> <span m='4828930'>that</span> <span
  m='4829450'>same</span> <span m='4829940'>something,</span> <span
  m='4831370'>little</span> <span m='4831920'>jigsaw</span> <span
  m='4832360'>pieces.</span> <span m='4834020'>And</span> <span
  m='4834350'>I'm</span> <span m='4834420'>going</span> <span
  m='4834540'>to</span> <span m='4834610'>make</span> <span
  m='4834900'>these</span> <span m='4835600'>shapes</span> <span
  m='4836560'>only</span> <span m='4836870'>match</span> <span
  m='4837160'>each</span> <span m='4837380'>other.</span> <span
  m='4838290'>And</span> <span m='4838450'>so</span> <span
  m='4838740'>for</span> <span m='4838960'>every</span> <span
  m='4839230'>rectangle,</span> <span m='4841010'>they're</span> <span
  m='4841140'>going</span> <span m='4841270'>to</span> <span
  m='4841330'>have</span> <span m='4841530'>a</span> <span
  m='4841880'>different</span> <span m='4842350'>shape.</span> <span
  m='4843920'>This</span> <span m='4844220'>one</span> <span
  m='4844350'>will</span> <span m='4844430'>be</span> <span
  m='4844530'>squares.</span> <span m='4845700'>At</span> <span
  m='4845890'>that</span> <span m='4845940'>point</span> <span
  m='4846230'>I</span> <span m='4846320'>ran</span> <span m='4846510'>out</span>
  <span m='4846610'>of</span> <span m='4846680'>shapes</span> <span
  m='4847040'>I</span> <span m='4847090'>can</span> <span
  m='4847230'>easily</span> <span m='4847510'>draw,</span> <span
  m='4847860'>but</span> <span m='4848310'>you</span> <span
  m='4848400'>get</span> <span m='4848510'>the</span> <span
  m='4848610'>idea.</span> <span m='4848970'>Each</span> <span
  m='4849220'>rectangle</span> <span m='4850110'>has</span> <span
  m='4850350'>a</span> <span m='4850390'>different</span> <span
  m='4850700'>shape.</span> <span m='4850980'>And</span> <span
  m='4851070'>so</span> <span m='4851200'>these</span> <span
  m='4851390'>have</span> <span m='4851660'>to</span> <span
  m='4851760'>match</span> <span m='4851970'>to</span> <span
  m='4852080'>each</span> <span m='4852270'>other.</span> <span
  m='4852930'>You</span> <span m='4853010'>can't</span> <span
  m='4853240'>mix</span> <span m='4853540'>the</span> <span
  m='4853620'>tiles,</span> <span m='4854580'>which</span> <span
  m='4854750'>means</span> <span m='4854900'>you</span> <span
  m='4855000'>have</span> <span m='4855280'>to</span> <span
  m='4855390'>build</span> <span m='4855580'>this</span> <span
  m='4855750'>rectangle.</span> <span m='4856470'>You</span> <span
  m='4856600'>have</span> <span m='4856850'>to</span> <span
  m='4856930'>build</span> <span m='4857100'>this</span> <span
  m='4857270'>rectangle.</span> <span m='4858300'>And</span> <span
  m='4858510'>then</span> <span m='4858830'>if</span> <span
  m='4859480'>the</span> <span m='4859630'>jigsaw</span> <span
  m='4859890'>problem</span> <span m='4860270'>is,</span> <span
  m='4860460'>can</span> <span m='4860720'>you</span> <span
  m='4860850'>fit</span> <span m='4861130'>these</span> <span
  m='4861350'>into</span> <span m='4861590'>a</span> <span
  m='4861630'>given</span> <span m='4861880'>rectangle,</span> <span
  m='4862830'>then</span> <span m='4863000'>you</span> <span
  m='4863080'>get</span> <span m='4863250'>rectangle</span> <span
  m='4863640'>packing.</span> </p><p><span m='4864460'>But</span> <span
  m='4864700'>this</span> <span m='4865340'>is</span> <span
  m='4865570'>not</span> <span m='4866160'>a</span> <span
  m='4866260'>valid</span> <span m='4866890'>reduction.</span> <span
  m='4870610'>You</span> <span m='4870770'>can't</span> <span
  m='4871230'>reduce</span> <span m='4874270'>from</span> <span
  m='4874550'>partition.</span> <span m='4878550'>Why?</span> <span
  m='4880150'>Because</span> <span m='4883410'>these</span> <span
  m='4883620'>numbers</span> <span m='4883990'>are</span> <span
  m='4884050'>huge.</span> <span m='4886040'>Remember,</span> <span
  m='4886350'>the</span> <span m='4886470'>values</span> <span
  m='4887000'>of</span> <span m='4887120'>the</span> <span
  m='4887200'>numbers</span> <span m='4887670'>in</span> <span
  m='4887810'>my</span> <span m='4887950'>partition</span> <span
  m='4888430'>instance</span> <span m='4888860'>are</span> <span
  m='4889020'>exponential.</span> <span m='4890550'>So</span> <span
  m='4890720'>if</span> <span m='4890830'>I</span> <span m='4890960'>have</span>
  <span m='4891110'>a</span> <span m='4891160'>value</span> <span
  m='4891560'>ai</span> <span m='4892110'>and</span> <span
  m='4892250'>it's</span> <span m='4892420'>exponential</span> <span
  m='4893300'>in</span> <span m='4893590'>my</span> <span
  m='4893720'>problem</span> <span m='4894020'>size,</span> <span
  m='4894970'>and</span> <span m='4895160'>I</span> <span
  m='4895240'>tried</span> <span m='4895500'>to</span> <span
  m='4895610'>make</span> <span m='4896560'>ai</span> <span
  m='4897000'>have</span> <span m='4897100'>little</span> <span
  m='4897330'>tiles,</span> <span m='4898030'>that</span> <span
  m='4898180'>means</span> <span m='4898370'>a</span> <span
  m='4898410'>number</span> <span m='4898840'>of</span> <span
  m='4899300'>jigsaw</span> <span m='4899650'>pieces</span> <span
  m='4900040'>will</span> <span m='4900170'>be</span> <span
  m='4900380'>exponential</span> <span m='4901760'>in</span> <span
  m='4901970'>n.</span> <span m='4902820'>That's</span> <span
  m='4903030'>not</span> <span m='4903200'>good.</span> <span
  m='4903480'>That's</span> <span m='4903560'>not</span> <span
  m='4903710'>allowed.</span> <span m='4905910'>This</span> <span
  m='4906140'>is</span> <span m='4906260'>why</span> <span
  m='4906530'>weak</span> <span m='4906940'>NP-hardness</span> <span
  m='4907590'>is</span> <span m='4907690'>annoying.</span> </p><p><span
  m='4909780'>So</span> <span m='4909840'>instead,</span> <span
  m='4912160'>we</span> <span m='4912480'>need</span> <span m='4912850'>a</span>
  <span m='4912940'>strong</span> <span m='4913770'>NP-hard</span> <span
  m='4914250'>problem.</span> <span m='4920020'>This</span> <span
  m='4920170'>is</span> <span m='4920270'>a</span> <span
  m='4920320'>problem</span> <span m='4920680'>that's</span> <span
  m='4920850'>NP-hard</span> <span m='4921380'>even</span> <span
  m='4921680'>when</span> <span m='4921810'>the</span> <span
  m='4921890'>numbers</span> <span m='4922310'>are</span> <span
  m='4922620'>polynomial</span> <span m='4923240'>in</span> <span
  m='4923400'>value,</span> <span m='4923850'>not</span> <span
  m='4924090'>just</span> <span m='4924300'>in</span> <span
  m='4924400'>size.</span> <span m='4926090'>And</span> <span
  m='4926730'>it's</span> <span m='4926890'>called</span> <span
  m='4927100'>4-partition.</span> <span m='4931670'>4-partition,</span> <span
  m='4932520'>you're</span> <span m='4932650'>given</span> <span
  m='4934350'>n</span> <span m='4934550'>integers,</span> <span
  m='4936500'>as</span> <span m='4936710'>usual.</span> <span
  m='4940380'>Say</span> <span m='4940590'>set</span> <span
  m='4941130'>is</span> <span m='4941230'>A.</span> <span m='4942680'>And</span>
  <span m='4942970'>you</span> <span m='4943070'>want</span> <span
  m='4943380'>to</span> <span m='4944390'>split</span> <span
  m='4946440'>those</span> <span m='4946700'>integers</span> <span
  m='4948110'>into</span> <span m='4949840'>n</span> <span
  m='4950090'>over</span> <span m='4950410'>4</span> <span
  m='4953490'>quadruples</span> <span m='4958880'>of</span> <span
  m='4959090'>the</span> <span m='4959160'>same</span> <span
  m='4959490'>sum.</span> <span m='4966860'>So</span> <span
  m='4967040'>this</span> <span m='4967190'>would</span> <span
  m='4967280'>be</span> <span m='4967440'>the</span> <span
  m='4967910'>sum</span> <span m='4968380'>of</span> <span m='4968850'>A</span>
  <span m='4969320'>divided</span> <span m='4969780'>by</span> <span
  m='4970040'>n</span> <span m='4970140'>over</span> <span
  m='4970350'>four.</span> <span m='4971400'>That's</span> <span
  m='4971660'>your</span> <span m='4971760'>target</span> <span
  m='4972140'>sum.</span> </p><p><span m='4973240'>So</span> <span
  m='4973400'>before</span> <span m='4973760'>we</span> <span
  m='4973870'>had</span> <span m='4973960'>to</span> <span
  m='4974020'>split</span> <span m='4974280'>into</span> <span
  m='4974500'>two</span> <span m='4974740'>parts</span> <span
  m='4975180'>that</span> <span m='4975300'>had</span> <span
  m='4975470'>the</span> <span m='4975540'>same</span> <span
  m='4975790'>sum.</span> <span m='4976500'>That</span> <span
  m='4976650'>was</span> <span m='4976780'>partition.</span> <span
  m='4977600'>Now</span> <span m='4977870'>we</span> <span
  m='4977960'>have</span> <span m='4978070'>to</span> <span
  m='4978170'>split</span> <span m='4978450'>into</span> <span
  m='4978800'>n</span> <span m='4978990'>over</span> <span m='4979220'>4</span>
  <span m='4979560'>parts.</span> <span m='4980330'>Each</span> <span
  m='4980560'>part</span> <span m='4980850'>will</span> <span
  m='4980950'>have</span> <span m='4981120'>exactly</span> <span
  m='4981520'>four</span> <span m='4982290'>numbers,</span> <span
  m='4982830'>four</span> <span m='4983010'>integers.</span> <span
  m='4984040'>And</span> <span m='4984180'>they</span> <span
  m='4984260'>should</span> <span m='4984450'>all</span> <span
  m='4984820'>have</span> <span m='4985030'>the</span> <span
  m='4985100'>same</span> <span m='4985370'>sum.</span> </p><p><span
  m='4986840'>This</span> <span m='4987080'>problem</span> <span
  m='4987540'>is</span> <span m='4987680'>hard</span> <span
  m='4988550'>even</span> <span m='4988870'>when</span> <span
  m='4989030'>the</span> <span m='4989170'>integers</span> <span
  m='4989660'>have</span> <span m='4989880'>polynomial</span> <span
  m='4990600'>value.</span> <span m='4992345'>So</span> <span
  m='4992740'>the</span> <span m='4993710'>values</span> <span
  m='4995680'>are</span> <span m='4997490'>at</span> <span
  m='4997660'>most</span> <span m='4997920'>some</span> <span
  m='4998080'>polynomial</span> <span m='4998680'>in</span> <span
  m='4998810'>n.</span> <span m='5000970'>I</span> <span
  m='5001080'>won't</span> <span m='5001280'>prove</span> <span
  m='5001460'>it</span> <span m='5001550'>here,</span> <span
  m='5001780'>but</span> <span m='5001920'>it's</span> <span
  m='5002090'>in</span> <span m='5002260'>my</span> <span
  m='5002370'>lecture</span> <span m='5002660'>notes</span> <span
  m='5002890'>if</span> <span m='5002950'>you're</span> <span
  m='5003050'>curious.</span> <span m='5003420'>It's</span> <span
  m='5003580'>like</span> <span m='5003860'>this</span> <span
  m='5004020'>proof,</span> <span m='5005010'>but</span> <span
  m='5005400'>harder.</span> <span m='5007290'>You</span> <span
  m='5007530'>end</span> <span m='5007730'>up,</span> <span
  m='5007960'>instead</span> <span m='5008320'>of</span> <span
  m='5008410'>having</span> <span m='5008890'>n</span> <span
  m='5009350'>digit</span> <span m='5009650'>numbers,</span> <span
  m='5010090'>you</span> <span m='5010210'>have</span> <span
  m='5010540'>five</span> <span m='5010860'>digit</span> <span
  m='5011140'>numbers.</span> <span m='5012080'>Each</span> <span
  m='5012380'>digit</span> <span m='5013980'>only</span> <span
  m='5014270'>has</span> <span m='5014610'>a</span> <span
  m='5014670'>polynomial</span> <span m='5015140'>in</span> <span
  m='5015220'>n</span> <span m='5015350'>different</span> <span
  m='5015610'>values.</span> <span m='5016130'>So</span> <span
  m='5016160'>the</span> <span m='5016260'>total</span> <span
  m='5017900'>value</span> <span m='5018210'>of</span> <span
  m='5018290'>the</span> <span m='5018360'>numbers</span> <span
  m='5019270'>is</span> <span m='5019580'>only</span> <span
  m='5019810'>polynomial.</span> <span m='5020470'>It's</span> <span
  m='5020770'>like</span> <span m='5021070'>n</span> <span m='5021250'>to</span>
  <span m='5021360'>the</span> <span m='5021440'>fifth</span> <span
  m='5021800'>or</span> <span m='5021870'>something.</span> </p><p><span
  m='5023380'>Good</span> <span m='5023560'>news</span> <span
  m='5024460'>is</span> <span m='5024700'>that</span> <span
  m='5025030'>this</span> <span m='5025360'>reduction</span> <span
  m='5025860'>I</span> <span m='5025950'>just</span> <span
  m='5026160'>gave</span> <span m='5026390'>you</span> <span
  m='5028020'>is</span> <span m='5028260'>also a</span> <span
  m='5028620'>reduction</span> <span m='5029070'>from</span> <span
  m='5029320'>4-partition</span> <span m='5036710'>because</span> <span
  m='5039150'>it's</span> <span m='5039310'>the</span> <span
  m='5039370'>same</span> <span m='5039620'>set</span> <span
  m='5039830'>up.</span> <span m='5039950'>Again,</span> <span
  m='5040200'>I'm</span> <span m='5040310'>given</span> <span
  m='5040590'>integers.</span> <span m='5041260'>Each</span> <span
  m='5041450'>integer</span> <span m='5041900'>I'm</span> <span
  m='5041990'>going</span> <span m='5042110'>to</span> <span
  m='5042180'>represent</span> <span m='5042750'>by</span> <span
  m='5043810'>that</span> <span m='5044100'>many</span> <span
  m='5044330'>tiles.</span> <span m='5045340'>Now</span> <span
  m='5045660'>the</span> <span m='5045750'>number</span> <span
  m='5046000'>of</span> <span m='5046070'>tiles</span> <span
  m='5046410'>is</span> <span m='5046520'>only</span> <span
  m='5046710'>polynomial,</span> <span m='5047390'>so</span> <span
  m='5047530'>this</span> <span m='5047700'>is</span> <span m='5047800'>a</span>
  <span m='5047850'>valid</span> <span m='5048190'>reduction.</span> <span
  m='5049560'>And</span> <span m='5049620'>again,</span> <span
  m='5049970'>if</span> <span m='5049980'>I</span> <span m='5050090'>have</span>
  <span m='5050270'>to</span> <span m='5050370'>pack</span> <span
  m='5050790'>all</span> <span m='5051050'>of</span> <span
  m='5051120'>these</span> <span m='5051270'>tiles</span> <span
  m='5051650'>into</span> <span m='5051920'>a</span> <span
  m='5052000'>rectangular</span> <span m='5052550'>board,</span> <span
  m='5053210'>that's</span> <span m='5053400'>exactly</span> <span
  m='5053840'>the</span> <span m='5053920'>same</span> <span
  m='5054360'>as</span> <span m='5054570'>packing</span> <span
  m='5055790'>these</span> <span m='5056140'>integers.</span> </p><p><span
  m='5057530'>Well,</span> <span m='5057850'>I</span> <span
  m='5057940'>guess</span> <span m='5058170'>I</span> <span
  m='5058300'>should</span> <span m='5058500'>do</span> <span
  m='5058620'>rectangle</span> <span m='5059040'>packing</span> <span
  m='5059360'>again.</span> <span m='5059670'>So</span> <span
  m='5059830'>this</span> <span m='5060010'>is</span> <span m='5060100'>a</span>
  <span m='5060160'>proof</span> <span m='5060610'>rectangle</span> <span
  m='5060790'>packing</span> <span m='5061140'>was</span> <span
  m='5061640'>weakly</span> <span m='5062070'>NP-hard.</span> <span
  m='5062590'>But</span> <span m='5062710'>in</span> <span
  m='5062770'>fact</span> <span m='5063040'>it's</span> <span
  m='5063100'>strongly</span> <span m='5063590'>NP-hard.</span> <span
  m='5064800'>You</span> <span m='5064900'>just</span> <span
  m='5065110'>change</span> <span m='5065440'>these</span> <span
  m='5065610'>dimensions.</span> <span m='5066160'>You</span> <span
  m='5066240'>say</span> <span m='5066470'>well,</span> <span
  m='5069200'>I</span> <span m='5069460'>need</span> <span
  m='5070250'>whatever,</span> <span m='5070650'>n</span> <span
  m='5070850'>over</span> <span m='5071040'>4</span> <span
  m='5071980'>different</span> <span m='5072330'>parts,</span> <span
  m='5073310'>each</span> <span m='5073470'>of</span> <span
  m='5073580'>size</span> <span m='5074260'>the</span> <span
  m='5074360'>sum</span> <span m='5074790'>over</span> <span
  m='5075100'>n</span> <span m='5075230'>over</span> <span m='5075440'>4.</span>
  <span m='5076820'>You</span> <span m='5076960'>need</span> <span
  m='5077100'>some</span> <span m='5077270'>scale</span> <span
  m='5077610'>factor</span> <span m='5077970'>here.</span> <span
  m='5078260'>Three</span> <span m='5078560'>doesn't</span> <span
  m='5078820'>work.</span> <span m='5079360'>Use</span> <span m='5079500'>n
  or</span> <span m='5079890'>something--</span> <span m='5081680'>n</span>
  <span m='5082200'>and</span> <span m='5082860'>n.</span> <span
  m='5083950'>That</span> <span m='5084170'>will</span> <span
  m='5084300'>prove</span> <span m='5084780'>that</span> <span
  m='5085180'>rectangle</span> <span m='5085650'>packing</span> <span
  m='5085960'>is</span> <span m='5086060'>actually</span> <span
  m='5086330'>strongly</span> <span m='5086970'>NP-hard</span> <span
  m='5088020'>because</span> <span m='5088190'>we're</span> <span
  m='5088280'>reducing</span> <span m='5088640'>for</span> <span
  m='5088780'>4-partition</span> <span m='5089510'>instead</span> <span
  m='5089790'>of</span> <span m='5089870'>partition.</span> <span
  m='5090680'>And</span> <span m='5090830'>then</span> <span
  m='5090980'>you</span> <span m='5091070'>can</span> <span
  m='5091190'>reduce</span> <span m='5091510'>rectangle</span> <span
  m='5091950'>packing</span> <span m='5092320'>to</span> <span
  m='5092420'>jigsaw</span> <span m='5092780'>puzzles</span> <span
  m='5093230'>because</span> <span m='5093410'>you</span> <span
  m='5093480'>have</span> <span m='5093580'>strong</span> <span
  m='5093950'>hardness</span> <span m='5094320'>over</span> <span
  m='5094480'>here.</span> </p><p><span m='5095200'>Over</span> <span
  m='5095420'>here</span> <span m='5095610'>we</span> <span
  m='5095710'>don't</span> <span m='5095970'>have</span> <span
  m='5096150'>numbers.</span> <span m='5096520'>We</span> <span
  m='5096630'>just</span> <span m='5096910'>have</span> <span
  m='5098060'>these</span> <span m='5098300'>pieces.</span> <span
  m='5099800'>So</span> <span m='5100030'>whenever</span> <span
  m='5100330'>you</span> <span m='5100440'>convert</span> <span
  m='5100790'>from</span> <span m='5100960'>a</span> <span
  m='5100990'>number</span> <span m='5101320'>problem</span> <span
  m='5101710'>to</span> <span m='5101850'>a</span> <span
  m='5101890'>non-number</span> <span m='5102440'>problem,</span> <span
  m='5103980'>if</span> <span m='5104160'>you're</span> <span
  m='5104280'>representing</span> <span m='5104750'>the</span> <span
  m='5104810'>numbers</span> <span m='5105110'>in</span> <span
  m='5105240'>unary,</span> <span m='5105530'>which</span> <span
  m='5105790'>is</span> <span m='5105880'>what's</span> <span
  m='5106080'>going</span> <span m='5106320'>on</span> <span
  m='5106440'>here,</span> <span m='5107060'>you</span> <span
  m='5107190'>need</span> <span m='5107460'>strong</span> <span
  m='5107880'>NP-hardness</span> <span m='5108490'>for</span> <span
  m='5108610'>it</span> <span m='5108700'>to</span> <span
  m='5108800'>work.</span> <span m='5109620'>Weak</span> <span
  m='5109750'>NP-hardness</span> <span m='5110040'>isn't</span> <span
  m='5110470'>enough.</span> <span m='5111340'>Then</span> <span
  m='5111530'>we</span> <span m='5111610'>get</span> <span
  m='5112110'>jigsaw</span> <span m='5112440'>puzzles,</span> <span
  m='5112840'>which</span> <span m='5113000'>we</span> <span
  m='5113080'>know</span> <span m='5113240'>and</span> <span
  m='5113350'>love,</span> <span m='5113970'>are</span> <span
  m='5114130'>NP-complete.</span> <span m='5115220'>That's</span> <span
  m='5115520'>it.</span> </p>
uid: 66adf7af367162d6bd07836a1700cd03
type: courses
layout: video
---
