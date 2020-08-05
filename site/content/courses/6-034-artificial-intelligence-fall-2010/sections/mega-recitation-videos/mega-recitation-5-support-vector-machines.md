---
about_this_resource_text: >-
  <p><strong>Description:</strong> We start by discussing what a support vector
  is, using two-dimensional graphs as an example. We work Problem 1 of Quiz 4,
  Fall 2008: identifying support vectors, describing the classifier, and using a
  kernel function to project points into a new space.</p>
  <p><strong>Instructor:</strong> Mark Seifter</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 6nDqY8MPLDM
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Video-YouTube-Stream
    type: Video
    uid: 26c8fad46880dc77513428a8bc293be0
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/mega-recitation-5-support/id765641080?i=194482764
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Video-iTunes U-MP4
    type: Video
    uid: 1ff7b594eeba4ecafc0e9b93b3dbab2f
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_rec05_300k.mp4'
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Video-Internet Archive-MP4
    type: Video
    uid: d9d0513671a2554e47be46000cde4c67
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/6nDqY8MPLDM/default.jpg'
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0a29f58541c6dff6e564fa05335d4186
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 6nDqY8MPLDM
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 0b2a59719f31aec67164652acbd46242
  - id: 6nDqY8MPLDM.srt
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-5-support-vector-machines/6nDqY8MPLDM.srt
    title: 3play caption file
    type: null
    uid: de25c99fbfd76d0248140d26d00976ed
  - id: 6nDqY8MPLDM.pdf
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-5-support-vector-machines/6nDqY8MPLDM.pdf
    title: 3play pdf file
    type: null
    uid: 03e696f347acd224c31d6a68eb2ceafc
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0ec097077cbe590fbaade16475f5eb4a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9ee21cee870951df49203ea2ca822c05
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9b61f5c225ae91c94119b5f194a4b4a0
inline_embed_id: '49313491mega-recitation5:supportvectormachines27386558'
order_index: 290
parent_uid: 6be7704ddfe26b4e12703167347dd5bb
related_resources_text: >-
  <p><a href="./resolveuid/b0d5ec844c188de34ba938365c875711"
  target="_blank">Quiz 4, Fall 2008 (PDF)</a></p>
short_url: mega-recitation-5-support-vector-machines
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/mega-recitation-videos/mega-recitation-5-support-vector-machines
title: 'Mega-Recitation 5: Support Vector Machines'
transcript: >-
  <p><span m='70'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1220'>is</span> <span m='1330'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high-quality</span> <span m='8119'>educational</span> <span
  m='8750'>resources</span> <span m='9370'>for</span> <span
  m='9520'>free.</span> <span m='10730'>To</span> <span m='10740'>make</span>
  <span m='10940'>a</span> <span m='10990'>donation</span> <span
  m='11680'>or</span> <span m='11940'>view</span> <span
  m='12380'>additional</span> <span m='12810'>materials</span> <span
  m='13340'>from</span> <span m='13490'>hundreds</span> <span
  m='13930'>of</span> <span m='14040'>MIT</span> <span m='14470'>courses,</span>
  <span m='15570'>visit</span> <span m='15790'>MIT</span> <span
  m='16219'>OpenCourseWare</span> <span m='17270'>at</span> <span
  m='17430'>ocw.mit.edu.</span> </p><p><span m='21530'>PROFESSOR: Hope</span>
  <span m='21880'>everyone</span> <span m='22300'>had</span> <span
  m='22660'>a</span> <span m='23180'>great</span> <span
  m='24400'>Veteran's</span> <span m='25020'>Day</span> <span
  m='25280'>break</span> <span m='25640'>yesterday,</span> <span
  m='26390'>spending</span> <span m='26910'>it,</span> <span m='27650'>of</span>
  <span m='27730'>course,</span> <span m='28670'>as</span> <span
  m='29370'>I</span> <span m='29590'>check</span> <span m='29830'>my</span>
  <span m='29930'>test</span> <span m='30220'>audience,</span> <span
  m='30570'>spending</span> <span m='30890'>it</span> <span
  m='31000'>mostly</span> <span m='31360'>doing</span> <span
  m='32049'>your</span> <span m='32270'>[INAUDIBLE]</span> <span
  m='32630'>research</span> <span m='33230'>or</span> <span
  m='33520'>PSETs.</span> <span m='34050'>But</span> <span m='34620'>at</span>
  <span m='34690'>least</span> <span m='35130'>one</span> <span
  m='35460'>person</span> <span m='36520'>got</span> <span m='36770'>to</span>
  <span m='36910'>watch</span> <span m='37240'>TV.</span> <span
  m='37910'>So</span> <span m='38500'>at</span> <span m='38620'>least</span>
  <span m='38820'>one</span> <span m='39050'>person</span> <span m='39620'>got
  to</span> <span m='39900'>have</span> <span m='40260'>a real</span> <span
  m='40450'>break,</span> <span m='40830'>and</span> <span
  m='40960'>that's</span> <span m='41660'>something</span> <span
  m='42040'>truly</span> <span m='42360'>amazing</span> <span
  m='42670'>and</span> <span m='42980'>special.</span> </p><p><span
  m='44170'>So</span> <span m='46170'>now</span> <span m='46400'>we're</span>
  <span m='46530'>going</span> <span m='46680'>to</span> <span
  m='46750'>talk</span> <span m='46930'>about</span> <span
  m='47090'>SVMs.</span> <span m='48160'>They're</span> <span
  m='48340'>pretty</span> <span m='48530'>much</span> <span m='48740'>the</span>
  <span m='48850'>hardest</span> <span m='49290'>thing</span> <span
  m='49890'>in</span> <span m='50040'>6.034.</span> <span
  m='51990'>However,</span> <span m='56008'>in</span> <span
  m='56490'>recent</span> <span m='56890'>years</span> <span m='57170'>a</span>
  <span m='57250'>few</span> <span m='57550'>shortcuts</span> <span
  m='58280'>have</span> <span m='58510'>popped</span> <span m='58970'>up</span>
  <span m='59710'>that</span> <span m='59790'>will</span> <span
  m='59920'>sometimes</span> <span m='60690'>allow</span> <span
  m='61050'>you</span> <span m='61210'>to</span> <span m='61370'>solve</span>
  <span m='61690'>the</span> <span m='61770'>question,</span> <span
  m='62180'>depending</span> <span m='62510'>on</span> <span
  m='62560'>what</span> <span m='62680'>they're</span> <span
  m='62800'>asking</span> <span m='63220'>for,</span> <span
  m='63950'>without</span> <span m='64780'>solving</span> <span
  m='65700'>some</span> <span m='66210'>vast</span> <span m='66900'>ugly</span>
  <span m='67180'>set</span> <span m='67390'>of</span> <span
  m='67480'>equations</span> <span m='68170'>with</span> <span
  m='68340'>a</span> <span m='68410'>vast</span> <span m='68740'>ugly</span>
  <span m='69170'>number</span> <span m='69540'>of</span> <span
  m='69620'>unknowns.</span> <span m='70630'>So</span> <span
  m='70650'>I'm</span> <span m='70750'>going</span> <span m='70850'>to</span>
  <span m='70900'>show</span> <span m='71100'>that to</span> <span
  m='71300'>you</span> <span m='71470'>guys.</span> </p><p><span
  m='72410'>I'm</span> <span m='72520'>also</span> <span m='72780'>going</span>
  <span m='72910'>to</span> <span m='72980'>try</span> <span m='73180'>to</span>
  <span m='73300'>explain</span> <span m='73990'>all</span> <span
  m='74290'>the</span> <span m='74390'>alphabet</span> <span
  m='74910'>soup</span> <span m='75700'>that's  in</span> <span
  m='75910'>[INAUDIBLE]</span> <span m='76920'>and</span> <span
  m='77370'>what</span> <span m='77620'>all the letters</span> <span
  m='78010'>stand</span> <span m='78620'>for</span> <span
  m='79110'>because</span> <span m='82210'>it</span> <span m='82320'>took</span>
  <span m='82580'>me</span> <span m='82970'>a</span> <span m='83040'>few</span>
  <span m='83350'>times</span> <span m='84860'>going</span> <span
  m='85040'>through</span> <span m='85620'>SVMs.</span> <span
  m='86260'>It</span> <span m='86360'>took</span> <span m='86500'>me</span>
  <span m='86600'>a</span> <span m='86660'>few</span> <span
  m='86840'>times</span> <span m='87160'>going</span> <span
  m='87380'>through</span> <span m='87600'>SVMs</span> <span m='88810'>to</span>
  <span m='89690'>actually</span> <span m='90150'>find</span> <span
  m='90450'>out</span> <span m='91040'>for</span> <span m='91210'>sure</span>
  <span m='92110'>what</span> <span m='92290'>all</span> <span
  m='92530'>those</span> <span m='92770'>letters</span> <span
  m='93180'>stood</span> <span m='93260'>for.</span> <span m='93340'>And</span>
  <span m='93700'>if</span> <span m='93880'>you</span> <span
  m='93980'>guys</span> <span m='94240'>figure</span> <span m='94470'>it</span>
  <span m='94530'>out</span> <span m='95160'>first</span> <span
  m='95550'>try,</span> <span m='96630'>that's</span> <span
  m='96900'>going</span> <span m='97000'>to</span> <span m='97040'>be</span>
  <span m='97140'>great,</span> <span m='97720'>and</span> <span
  m='98150'>you</span> <span m='98230'>guys</span> <span m='98520'>will</span>
  <span m='98600'>be</span> <span m='98800'>just</span> <span
  m='99040'>fine.</span> </p><p><span m='100130'>So</span> <span
  m='101830'>let's</span> <span m='102120'>take</span> <span m='102310'>a</span>
  <span m='102380'>look</span> <span m='102890'>at</span> <span
  m='103480'>the</span> <span m='103610'>problem</span> <span
  m='104020'>that's</span> <span m='104150'>perhaps</span> <span
  m='104490'>most</span> <span m='104860'>optimized</span> <span
  m='105710'>for</span> <span m='107050'>using</span> <span
  m='107430'>some</span> <span m='107620'>of</span> <span m='107660'>the</span>
  <span m='107750'>shortcuts</span> <span m='108600'>to</span> <span
  m='108720'>solving</span> <span m='109160'>it</span> <span
  m='109470'>and</span> <span m='110920'>not</span> <span
  m='111530'>putting</span> <span m='111750'>up</span> <span
  m='111900'>all</span> <span m='112080'>the</span> <span
  m='112180'>equations.</span> <span m='113560'>Then</span> <span
  m='114000'>I</span> <span m='114260'>will--</span> <span m='116060'>not</span>
  <span m='116300'>because</span> <span m='116540'>I'm</span> <span
  m='116650'>sadistic,</span> <span m='117180'>but</span> <span
  m='117370'>because</span> <span m='117680'>I'm</span> <span
  m='117840'>being</span> <span m='118040'>nice,</span> <span
  m='118350'>I</span> <span m='118390'>will</span> <span m='118520'>force</span>
  <span m='119030'>you</span> <span m='119960'>with</span> <span
  m='120180'>me</span> <span m='120630'>to</span> <span m='120780'>solve</span>
  <span m='121680'>some</span> <span m='122030'>of</span> <span
  m='122070'>the</span> <span m='122150'>things</span> <span
  m='122410'>they</span> <span m='122530'>didn't</span> <span
  m='122930'>ask</span> <span m='123800'>for</span> <span m='123970'>us</span>
  <span m='124140'>to</span> <span m='124240'>solve</span> <span
  m='125130'>so</span> <span m='125240'>that</span> <span m='125410'>you</span>
  <span m='125530'>can</span> <span m='125650'>see</span> <span
  m='125860'>that</span> <span m='126380'>we</span> <span
  m='126780'>can't</span> <span m='127010'>get</span> <span
  m='127120'>away</span> <span m='127260'>with</span> <span
  m='127400'>everything</span> <span m='127880'>without</span> <span
  m='128800'>doing</span> <span m='129050'>some</span> <span
  m='129590'>of</span> <span m='129710'>the</span> <span
  m='129789'>harder</span> <span m='130100'>stuff.</span> </p><p><span
  m='131680'>And</span> <span m='132870'>of</span> <span
  m='133000'>course,</span> <span m='134240'>definitely</span> <span
  m='134960'>ask</span> <span m='135460'>questions</span> <span
  m='136020'>as</span> <span m='136190'>always,</span> <span
  m='136770'>but</span> <span m='136960'>this</span> <span
  m='137100'>time</span> <span m='137360'>even</span> <span
  m='137620'>more</span> <span m='137860'>so.</span> <span m='139330'>You</span>
  <span m='139600'>guys,</span> <span m='140160'>well,</span> <span
  m='140510'>if</span> <span m='140630'>you</span> <span m='140750'>were</span>
  <span m='140820'>looking</span> <span m='141040'>around,</span> <span
  m='141350'>you</span> <span m='141470'>saw</span> <span
  m='142220'>nobody</span> <span m='143010'>in</span> <span
  m='143420'>this</span> <span m='144570'>entire</span> <span
  m='144950'>lecture</span> <span m='145300'>hall</span> <span
  m='145520'>raised</span> <span m='145750'>their</span> <span
  m='145900'>hand</span> <span m='146200'>that</span> <span m='146360'>they
  are</span> <span m='146610'>already</span> <span m='147390'>set</span> <span
  m='147760'>and</span> <span m='147860'>ready</span> <span
  m='148880'>and</span> <span m='149150'>know</span> <span
  m='149520'>SVMs.</span> <span m='150120'>So  if</span> <span
  m='150520'>you</span> <span m='151140'>have</span> <span m='151300'>a</span>
  <span m='151360'>question,</span> <span m='152390'>maybe</span> <span
  m='152690'>everybody</span> <span m='153180'>else</span> <span
  m='153430'>does.</span> </p><p><span m='154390'>So</span> <span
  m='156360'>let's</span> <span m='156670'>go.</span> <span
  m='158030'>We'll</span> <span m='158180'>start</span> <span
  m='159070'>right</span> <span m='159380'>here.</span> <span
  m='161180'>As</span> <span m='161470'>always,</span> <span
  m='161990'>pretend</span> <span m='162370'>that</span> <span
  m='162490'>I</span> <span m='162580'>can</span> <span m='162790'>draw,</span>
  <span m='163520'>and that</span> <span m='163870'>therefore</span> <span
  m='164430'>all</span> <span m='164590'>the</span> <span
  m='164690'>pluses</span> <span m='164950'>and</span> <span
  m='165050'>minuses</span> <span m='165480'>are</span> <span
  m='165640'>only</span> <span m='165870'>on</span> <span
  m='166080'>integer</span> <span m='167720'>coordinates.</span> <span
  m='170690'>So</span> <span m='171250'>we are</span> <span
  m='171530'>asked</span> <span m='172260'>in</span> <span
  m='172430'>this</span> <span m='172630'>problem</span> <span
  m='173170'>to</span> <span m='173350'>circle</span> <span
  m='173610'>the</span> <span m='173870'>support</span> <span
  m='174130'>vectors.</span> <span m='175620'>Draw</span> <span
  m='176030'>the</span> <span m='176360'>edges</span> <span m='177020'>of</span>
  <span m='177280'>the</span> <span m='177350'>street</span> <span
  m='177970'>and</span> <span m='178160'>then</span> <span m='178340'>the</span>
  <span m='178430'>dotted</span> <span m='178730'>line</span> <span
  m='179020'>in</span> <span m='179230'>the</span> <span
  m='179300'>middle</span> <span m='179950'>that</span> <span
  m='180190'>separates</span> <span m='180620'>them,</span> <span
  m='180850'>the</span> <span m='180940'>separator,</span> <span
  m='183980'>as</span> <span m='184180'>a</span> <span m='184260'>dashed</span>
  <span m='184580'>line.</span> <span m='185940'>And</span> <span
  m='186040'>then</span> <span m='186580'>to</span> <span m='187250'>give</span>
  <span m='188910'>w</span> <span m='189400'>and</span> <span
  m='189860'>b.</span> </p><p><span m='191140'>So</span> <span
  m='191580'>what</span> <span m='191840'>are</span> <span m='192110'>w</span>
  <span m='192680'>and</span> <span m='193020'>b?</span> <span
  m='194920'>Well,</span> <span m='195380'>there's</span> <span
  m='195580'>a</span> <span m='195630'>few</span> <span
  m='196150'>important</span> <span m='196540'>equations</span> <span
  m='200480'>in</span> <span m='200660'>SVMs</span> <span m='201300'>that</span>
  <span m='201900'>we</span> <span m='202080'>really</span> <span
  m='202400'>hope--</span> <span m='202810'>and</span> <span
  m='203010'>I'm</span> <span m='203080'>going</span> <span m='203180'>to</span>
  <span m='203250'>tell</span> <span m='203430'>you</span> <span
  m='203650'>we're</span> <span m='203840'>lucky</span> <span
  m='204200'>in</span> <span m='204280'>this</span> <span
  m='204390'>because</span> <span m='204510'>we</span> <span
  m='204620'>don't</span> <span m='204860'>have</span> <span
  m='205110'>to--</span> <span m='205340'>but</span> <span m='205520'>we</span>
  <span m='205640'>really</span> <span m='205890'>hope that</span> <span
  m='206140'>we</span> <span m='206330'>don't</span> <span
  m='206640'>have</span> <span m='206910'>to</span> <span m='207020'>use</span>
  <span m='207910'>because</span> <span m='208370'>they</span> <span
  m='208510'>provide</span> <span m='208900'>a</span> <span
  m='208950'>huge</span> <span m='209280'>number</span> <span
  m='209700'>of</span> <span m='209770'>variables.</span> </p><p><span
  m='210960'>So</span> <span m='211230'>one</span> <span m='211450'>of</span>
  <span m='211530'>those</span> <span m='212710'>crucial</span> <span
  m='212830'>equations</span> <span m='213500'>is</span> <span
  m='214700'>that</span> <span m='216364'>for a</span> <span
  m='216766'>plus</span> <span m='217170'>support</span> <span
  m='217650'>vector,</span> <span m='219630'>w</span> <span
  m='219980'>vector</span> <span m='220600'>dot</span> <span m='221570'>x</span>
  <span m='222740'>plus,</span> <span m='223190'>the</span> <span
  m='223280'>plus</span> <span m='223580'>support</span> <span
  m='223910'>vector,</span> <span m='225120'>plus</span> <span
  m='225400'>b</span> <span m='227320'>equals</span> <span m='227630'>1.</span>
  <span m='230885'>w</span> <span m='231350'>dot</span> <span
  m='231820'>x</span> <span m='231930'>minus</span> <span m='232930'>plus</span>
  <span m='233320'>b</span> <span m='234310'>equals</span> <span
  m='234770'>minus</span> <span m='235110'>1.</span> <span m='235630'>And</span>
  <span m='236820'>w</span> <span m='237240'>dot</span> <span
  m='238700'>that</span> <span m='239000'>dotted</span> <span
  m='239320'>line--</span> <span m='239960'>I don't know,</span> <span
  m='240490'>we'll</span> <span m='240690'>call it</span> <span m='240960'>dot
  dot</span> <span m='241365'>dot--</span> <span m='241770'>plus</span> <span
  m='242175'>b</span> <span m='243740'>equals</span> <span m='244110'>0.</span>
  </p><p><span m='246140'>So</span> <span m='246380'>what</span> <span
  m='246520'>does</span> <span m='246640'>this</span> <span
  m='246790'>mean?</span> <span m='247410'>There</span> <span
  m='247580'>are</span> <span m='247620'>a</span> <span m='247670'>lot</span>
  <span m='247870'>of</span> <span m='247960'>vectors.</span> <span
  m='249400'>Well,</span> <span m='249900'>I</span> <span
  m='250030'>mean,</span> <span m='250610'>we're</span> <span
  m='251050'>usually</span> <span m='251390'>in</span> <span
  m='251470'>two-dimensional</span> <span m='252000'>space,</span> <span
  m='252430'>so</span> <span m='252530'>we</span> <span m='252630'>can</span>
  <span m='252680'>basically</span> <span m='253180'>just</span> <span
  m='253430'>say</span> <span m='254400'>that</span> <span
  m='254570'>there's</span> <span m='254810'>two</span> <span
  m='255010'>components</span> <span m='255650'>of</span> <span
  m='255800'>this</span> <span m='255990'>w</span> <span
  m='256279'>vector,</span> <span m='256579'>w1</span> <span
  m='256930'>and</span> <span m='257240'>w2.</span> <span m='257899'>And</span>
  <span m='258000'>they're</span> <span m='258100'>just</span> <span
  m='258430'>two</span> <span m='258670'>coefficients</span> <span
  m='260130'>in</span> <span m='260300'>a</span> <span m='260360'>linear</span>
  <span m='260690'>equation.</span> <span m='261810'>So</span> <span
  m='263330'>for</span> <span m='263510'>instance,</span> <span
  m='264310'>what</span> <span m='264520'>we're</span> <span
  m='264700'>interested</span> <span m='265180'>in</span> <span
  m='265290'>finding,</span> <span m='265850'>this</span> <span
  m='266080'>dot</span> <span m='266300'>dot</span> <span m='266500'>dot</span>
  <span m='266790'>line,</span> <span m='267380'>we'll</span> <span
  m='267490'>just</span> <span m='267690'>call</span> <span
  m='268080'>that</span> <span m='268880'>x,</span> <span m='269170'>so
  with</span> <span m='269460'>nothing</span> <span m='269760'>on it.</span>
  <span m='269920'>Actually,</span> <span m='270470'>maybe</span> <span
  m='270660'>that'll</span> <span m='270890'>be</span> <span
  m='271010'>easier.</span> </p><p><span m='271840'>This</span> <span
  m='272840'>is</span> <span m='273230'>equivalent</span> <span
  m='273810'>to</span> <span m='273870'>saying</span> <span
  m='275270'>w1x1</span> <span m='278880'>plus</span> <span
  m='280360'>w2x2</span> <span m='281990'>plus</span> <span m='282320'>b</span>
  <span m='282900'>equals</span> <span m='283240'>0,</span> <span
  m='284900'>where</span> <span m='285160'>x1</span> <span m='285920'>is</span>
  <span m='286850'>this,</span> <span m='287315'>and</span> <span
  m='287780'>x2</span> <span m='288390'>is</span> <span m='288720'>this.</span>
  <span m='289380'>We</span> <span m='289540'>would</span> <span
  m='290100'>possibly</span> <span m='290520'>call</span> <span
  m='290710'>them</span> <span m='290860'>x</span> <span m='291090'>and</span>
  <span m='291250'>y.</span> <span m='292210'>So</span> <span
  m='292600'>one</span> <span m='292830'>way</span> <span m='292940'>to</span>
  <span m='293050'>think</span> <span m='293240'>about it</span> <span
  m='293510'>is</span> <span m='295380'>w1,</span> <span m='295690'>we'll</span>
  <span m='295990'>call it</span> <span m='296240'>a,</span> <span
  m='297155'>ax</span> <span m='298230'>plus--</span> <span
  m='299930'>call</span> <span m='300150'>w2</span> <span m='300520'>b--</span>
  <span m='300943'>by.</span> <span m='303200'>Oh,</span> <span
  m='303520'>don't</span> <span m='303800'>call it</span> <span
  m='304060'>b.</span> <span m='305890'>Well,</span> <span m='306270'>ax</span>
  <span m='306460'>plus</span> <span m='306770'>cy</span> <span
  m='308040'>plus</span> <span m='308400'>b</span> <span
  m='309560'>equals--</span> <span m='311380'>I'll</span> <span
  m='311800'>put</span> <span m='311970'>this</span> <span m='312120'>all
  in</span> <span m='312340'>parentheses--</span> <span m='313370'>this</span>
  <span m='313580'>is</span> <span m='313730'>basically</span> <span
  m='314670'>an</span> <span m='314770'>equation</span> <span
  m='315120'>like</span> <span m='315340'>this.</span> <span
  m='315740'>Or</span> <span m='318361'>y</span> <span m='319200'>equals</span>
  <span m='324320'>negative</span> <span m='324850'>a</span> <span
  m='325020'>over</span> <span m='325550'>c</span> <span m='326110'>x</span>
  <span m='327720'>minus</span> <span m='328050'>b</span> <span
  m='328300'>over</span> <span m='328540'>c.</span> </p><p><span
  m='329830'>It's</span> <span m='329980'>basically</span> <span
  m='330330'>y</span> <span m='330570'>equals</span> <span m='330840'>mx</span>
  <span m='331090'>plus</span> <span m='331290'>b.</span> <span
  m='333270'>Does</span> <span m='333370'>everyone</span> <span
  m='333730'>see</span> <span m='333870'>that?</span> <span
  m='334520'>This</span> <span m='334910'>thing</span> <span
  m='335080'>that</span> <span m='335170'>we're</span> <span
  m='335280'>looking</span> <span m='335630'>for,</span> <span
  m='335810'>this</span> <span m='336070'>w</span> <span m='336420'>dot</span>
  <span m='336760'>x</span> <span m='337040'>plus</span> <span
  m='337300'>b</span> <span m='337480'>equals</span> <span m='337760'>0,</span>
  <span m='338960'>is</span> <span m='339120'>the</span> <span
  m='339180'>equation</span> <span m='339490'>of</span> <span
  m='339570'>a</span> <span m='339650'>line</span> <span m='341950'>in</span>
  <span m='342090'>Cartesian</span> <span m='342540'>coordinates.</span> <span
  m='343440'>It</span> <span m='343570'>just</span> <span
  m='344100'>looks</span> <span m='344410'>uglier.</span> </p><p><span
  m='345840'>Normally,</span> <span m='347070'>when</span> <span
  m='347190'>we're</span> <span m='347320'>doing</span> <span
  m='347550'>all</span> <span m='347760'>this</span> <span
  m='348000'>solving</span> <span m='348400'>for</span> <span
  m='348630'>w</span> <span m='349370'>and</span> <span m='349600'>b,</span>
  <span m='350320'>we</span> <span m='350440'>would</span> <span
  m='350630'>have</span> <span m='350860'>to</span> <span m='350970'>put</span>
  <span m='351150'>in</span> <span m='353760'>tons</span> <span
  m='354060'>of</span> <span m='354120'>equations,</span> <span m='354790'>plug
  in</span> <span m='356080'>all of</span> <span m='356410'>the</span> <span
  m='356840'>support</span> <span m='357130'>vectors</span> <span
  m='357460'>in</span> <span m='357600'>there.</span> <span
  m='357940'>And</span> <span m='358230'>we'd</span> <span
  m='358370'>have</span> <span m='358660'>to</span> <span m='358750'>use</span>
  <span m='360020'>these</span> <span m='360220'>little</span> <span
  m='360480'>devils</span> <span m='360860'>called</span> <span
  m='361140'>alphas.</span> <span m='363220'>Alphas</span> <span
  m='364080'>essentially--</span> <span m='365160'>if</span> <span
  m='365340'>it</span> <span m='365440'>wasn't</span> <span
  m='365740'>clear</span> <span m='366280'>in</span> <span m='366370'>the</span>
  <span m='366450'>lecture,</span> <span m='366820'>which it</span> <span
  m='367030'>usually</span> <span m='367640'>isn't</span> <span
  m='367960'>completely</span> <span m='368650'>clear</span> <span
  m='368970'>to</span> <span m='369080'>everyone,</span> <span
  m='369710'>wasn't</span> <span m='370060'>clear</span> <span
  m='370230'>to</span> <span m='370280'>me</span> <span
  m='371050'>completely--</span> <span m='371530'>alphas,</span> <span
  m='372420'>the</span> <span m='372520'>way</span> <span m='372700'>I</span>
  <span m='372740'>like</span> <span m='372930'>to</span> <span
  m='373050'>think</span> <span m='373240'>about</span> <span
  m='373540'>them,</span> <span m='374120'>the</span> <span
  m='374250'>alphas</span> <span m='374620'>in</span> <span
  m='374710'>this</span> <span m='374870'>problem</span> <span
  m='375760'>is</span> <span m='376420'>they</span> <span m='376630'>are</span>
  <span m='376750'>the</span> <span m='376860'>weight</span> <span
  m='377440'>of</span> <span m='377570'>how</span> <span
  m='378010'>significant</span> <span m='379310'>any</span> <span
  m='379620'>particular</span> <span m='380390'>point</span> <span
  m='380740'>on</span> <span m='380850'>the</span> <span m='380930'>graph</span>
  <span m='381260'>is</span> <span m='382400'>towards</span> <span
  m='383170'>creating</span> <span m='383570'>the</span> <span
  m='383640'>boundary.</span> </p><p><span m='385280'>The</span> <span
  m='385910'>higher</span> <span m='386420'>the</span> <span
  m='386600'>alpha</span> <span m='387050'>is,</span> <span
  m='388550'>the</span> <span m='388660'>more that</span> <span
  m='389030'>that</span> <span m='389470'>point</span> <span
  m='390300'>narrows</span> <span m='390840'>in</span> <span
  m='391040'>the</span> <span m='391120'>boundary.</span> <span
  m='392210'>The</span> <span m='392310'>lower</span> <span
  m='392670'>the</span> <span m='392780'>alpha</span> <span
  m='393040'>is,</span> <span m='393340'>the</span> <span m='393440'>less</span>
  <span m='393820'>that</span> <span m='393930'>that</span> <span
  m='394140'>point</span> <span m='394380'>narrows</span> <span
  m='394740'>in</span> <span m='394830'>the</span> <span
  m='394910'>boundary,</span> <span m='395310'>the</span> <span
  m='396070'>wider</span> <span m='396640'>the</span> <span
  m='396800'>road</span> <span m='397100'>can</span> <span m='397370'>be.</span>
  <span m='398570'>And if</span> <span m='398840'>that</span> <span
  m='399010'>point</span> <span m='399270'>doesn't</span> <span
  m='399650'>do</span> <span m='399800'>anything,</span> <span
  m='400320'>if</span> <span m='400400'>that</span> <span
  m='400590'>point</span> <span m='400770'>is</span> <span
  m='400860'>irrelevant</span> <span m='401520'>and</span> <span
  m='401780'>could</span> <span m='401880'>be</span> <span
  m='402010'>removed</span> <span m='402430'>and  it</span> <span
  m='402540'>wouldn't</span> <span m='402680'>affect</span> <span
  m='402970'>the</span> <span m='403030'>boundary,</span> <span
  m='403380'>the</span> <span m='403470'>alpha</span> <span
  m='403790'>is?</span> <span m='404410'>Everyone?</span> </p><p><span
  m='405230'>AUDIENCE: Zero.</span> </p><p><span m='406010'>PROFESSOR:
  Zero.</span> <span m='406630'>Well,</span> <span m='406880'>that was</span>
  <span m='406980'>one</span> <span m='407260'>person,</span> <span
  m='407680'>but</span> <span m='408820'>you</span> <span m='409010'>can</span>
  <span m='409150'>suffice</span> <span m='409490'>for</span> <span
  m='409580'>everyone.</span> <span m='409940'>The alpha</span> <span
  m='410150'>is</span> <span m='410400'>0.</span> <span m='411060'>And</span>
  <span m='411210'>that</span> <span m='411350'>means</span> <span
  m='411500'>if</span> <span m='411580'>it's</span> <span m='411750'>not</span>
  <span m='411950'>a</span> <span m='412010'>support</span> <span
  m='412460'>vector,</span> <span m='413130'>if</span> <span
  m='413240'>it's</span> <span m='413390'>not</span> <span m='413620'>one</span>
  <span m='413750'>of the</span> <span m='413830'>vectors</span> <span
  m='414230'>on</span> <span m='414550'>the</span> <span
  m='414630'>boundary</span> <span m='415110'>lines,</span> <span
  m='416520'>it</span> <span m='416620'>will</span> <span
  m='416810'>always</span> <span m='417250'>have</span> <span
  m='417440'>an</span> <span m='417510'>alpha</span> <span m='417870'>of</span>
  <span m='417990'>0</span> <span m='419780'>because</span> <span
  m='420110'>it</span> <span m='420220'>doesn't</span> <span
  m='420540'>affect.</span> <span m='422210'>So</span> <span
  m='424500'>keeping</span> <span m='424760'>that</span> <span
  m='424940'>in</span> <span m='425010'>mind,</span> <span
  m='425290'>there's</span> <span m='425480'>a</span> <span
  m='425540'>few</span> <span m='426190'>fun and</span> <span
  m='426570'>important</span> <span m='426980'>equations</span> <span
  m='427410'>about</span> <span m='427660'>alphas</span> <span
  m='428180'>that</span> <span m='428340'>we'll</span> <span
  m='428580'>need</span> <span m='428860'>if</span> <span
  m='429060'>we're</span> <span m='429160'>solving</span> <span
  m='429580'>many</span> <span m='429690'>equations</span> <span
  m='430030'>for</span> <span m='430150'>many</span> <span
  m='430370'>unknowns,</span> <span m='430620'>which</span> <span
  m='430830'>hopefully</span> <span m='431190'>we</span> <span
  m='431260'>won't</span> <span m='431570'>have</span> <span
  m='431690'>to</span> <span m='431800'>do.</span> </p><p><span
  m='433990'>The</span> <span m='434130'>sum</span> <span m='435110'>over</span>
  <span m='436810'>the</span> <span m='436900'>positive</span> <span
  m='437400'>alphas</span> <span m='438050'>equals</span> <span
  m='438380'>the</span> <span m='438480'>sum</span> <span m='438960'>over</span>
  <span m='440310'>the</span> <span m='440460'>alphas--</span> <span
  m='441110'>the</span> <span m='441310'>negative</span> <span
  m='441760'>points.</span> <span m='443300'>And</span> <span
  m='443800'>this</span> <span m='444000'>is</span> <span m='444090'>true</span>
  <span m='444370'>over</span> <span m='444570'>all the</span> <span
  m='444940'>points.</span> <span m='445530'>But</span> <span
  m='445830'>since</span> <span m='446200'>all of</span> <span
  m='446600'>the</span> <span m='447600'>alphas</span> <span
  m='448060'>are</span> <span m='448350'>0,</span> <span
  m='448830'>except</span> <span m='449110'>for</span> <span
  m='449180'>the</span> <span m='449270'>support</span> <span
  m='449570'>vectors,</span> <span m='450140'>it</span> <span
  m='450240'>also</span> <span m='450560'>means</span> <span
  m='450770'>the</span> <span m='450860'>alphas</span> <span
  m='451720'>of</span> <span m='451840'>the</span> <span
  m='451930'>positive</span> <span m='452370'>support</span> <span
  m='452710'>vectors</span> <span m='453380'>are</span> <span
  m='453520'>equal</span> <span m='453770'>to</span> <span m='453850'>the</span>
  <span m='453940'>alphas</span> <span m='454290'>of</span> <span
  m='454390'>the</span> <span m='454480'>negative</span> <span
  m='454920'>support</span> <span m='455250'>vectors.</span> </p><p><span
  m='456490'>Additionally,</span> <span m='458490'>our old</span> <span
  m='458760'>buddy, the</span> <span m='459050'>w</span> <span
  m='459590'>vector,</span> <span m='461070'>is</span> <span
  m='461640'>equal</span> <span m='462070'>to</span> <span m='462240'>the</span>
  <span m='462490'>sum</span> <span m='463030'>over</span> <span
  m='465520'>all</span> <span m='466010'>i</span> <span m='466300'>that</span>
  <span m='466450'>are</span> <span m='466590'>plus</span> <span
  m='467010'>vectors</span> <span m='467780'>of</span> <span
  m='470480'>wi</span> <span m='472250'>alpha</span> <span m='472450'>i</span>
  <span m='473620'>minus</span> <span m='475830'>m</span> <span
  m='475980'>over</span> <span m='476230'>j</span> <span m='476800'>minus</span>
  <span m='477230'>vectors</span> <span m='478270'>of</span> <span
  m='479710'>wj</span> <span m='480860'>alpha</span> <span m='481170'>j.</span>
  <span m='484060'>Now,</span> <span m='484330'>all</span> <span
  m='484520'>of</span> <span m='484620'>these</span> <span
  m='484810'>equations</span> <span m='485300'>can</span> <span
  m='485450'>be</span> <span m='485560'>used</span> <span m='486090'>in</span>
  <span m='486370'>a</span> <span m='486610'>bloody</span> <span
  m='486910'>mess</span> <span m='487510'>to</span> <span
  m='488920'>figure</span> <span m='489250'>out</span> <span
  m='489450'>the</span> <span m='489580'>answer</span> <span
  m='489880'>to</span> <span m='489980'>what</span> <span
  m='490130'>we're</span> <span m='490250'>trying</span> <span
  m='490530'>to</span> <span m='490600'>find,</span> <span
  m='491110'>which</span> <span m='491360'>is</span> <span
  m='492640'>circles--</span> <span m='493180'>well,</span> <span
  m='493500'>actually,</span> <span m='493820'>they</span> <span
  m='493940'>can't   be used</span> <span m='494370'>as</span> <span
  m='494460'>circle</span> <span m='494810'>support</span> <span
  m='495170'>vectors</span> <span m='495580'>and</span> <span
  m='497020'>draw</span> <span m='497210'>the</span> <span
  m='497340'>dotted</span> <span m='497600'>line.</span> </p><p><span
  m='497820'>But</span> <span m='498050'>once</span> <span m='498270'>we</span>
  <span m='498370'>do</span> <span m='498500'>that,</span> <span
  m='499360'>all</span> <span m='499590'>these</span> <span
  m='499760'>equations</span> <span m='500450'>can</span> <span
  m='500620'>be</span> <span m='500740'>used</span> <span m='501600'>in</span>
  <span m='501720'>a</span> <span m='501750'>bloody</span> <span
  m='502100'>mess</span> <span m='502380'>to</span> <span m='502480'>give</span>
  <span m='502640'>us</span> <span m='503150'>the</span> <span
  m='503220'>next</span> <span m='503560'>thing that</span> <span
  m='503730'>we</span> <span m='503860'>want,</span> <span
  m='504080'>which</span> <span m='504250'>is</span> <span m='504430'>w</span>
  <span m='504850'>and</span> <span m='505040'>b.</span> <span
  m='510390'>So</span> <span m='511740'>fortunately,</span> <span
  m='512289'>there's</span> <span m='512470'>another</span> <span
  m='512789'>way</span> <span m='512970'>to</span> <span m='513020'>get</span>
  <span m='513240'>w and</span> <span m='513570'>b.</span> <span
  m='515120'>If</span> <span m='515260'>you</span> <span m='515370'>guys</span>
  <span m='515640'>really</span> <span m='515980'>want,</span> <span
  m='517320'>at</span> <span m='517750'>the</span> <span m='517870'>end</span>
  <span m='518020'>of</span> <span m='518100'>the</span> <span
  m='518200'>hour</span> <span m='518429'>we</span> <span m='518539'>can</span>
  <span m='518690'>also</span> <span m='520850'>try</span> <span
  m='520980'>to</span> <span m='521070'>derive</span> <span m='521549'>w</span>
  <span m='521960'>and</span> <span m='522130'>b</span> <span
  m='522789'>using</span> <span m='523080'>the</span> <span
  m='523150'>many</span> <span m='523380'>equations</span> <span
  m='523809'>in</span> <span m='523890'>many</span> <span
  m='524130'>unknowns,</span> <span m='524740'>but</span> <span
  m='524930'>it's</span> <span m='525090'>a</span> <span m='525130'>bit</span>
  <span m='525380'>painful.</span> <span m='526200'>We'll</span> <span
  m='526340'>try</span> <span m='526520'>to</span> <span m='526600'>do</span>
  <span m='526710'>it</span> <span m='526820'>the</span> <span
  m='526920'>cool</span> <span m='527390'>way.</span> </p><p><span
  m='527930'>So</span> <span m='529380'>let's</span> <span
  m='529700'>start</span> <span m='529990'>off.</span> <span
  m='530720'>This</span> <span m='530950'>is the</span> <span
  m='531090'>one</span> <span m='531320'>we're</span> <span
  m='531430'>looking</span> <span m='531730'>at.</span> <span
  m='531920'>We</span> <span m='532030'>need</span> <span m='532200'>to</span>
  <span m='532280'>find</span> <span m='532550'>where</span> <span
  m='532630'>the</span> <span m='532720'>support</span> <span
  m='533120'>vectors</span> <span m='533530'>are.</span> <span
  m='534590'>So</span> <span m='535680'>the</span> <span m='535980'>first</span>
  <span m='536330'>thing</span> <span m='536550'>we</span> <span
  m='536640'>need</span> <span m='536780'>to</span> <span m='536860'>do</span>
  <span m='537560'>is</span> <span m='537730'>simply</span> <span
  m='538120'>eye  it.</span> <span m='539010'>Fortunately,</span> <span
  m='539530'>on</span> <span m='539640'>the</span> <span m='539750'>test,</span>
  <span m='540370'>there</span> <span m='540520'>will</span> <span
  m='540630'>always</span> <span m='540970'>be</span> <span
  m='541320'>ones</span> <span m='541640'>that</span> <span m='541750'>you
  can</span> <span m='542120'>eye if</span> <span m='542490'>you're</span> <span
  m='542650'>supposed</span> <span m='542960'>to</span> <span
  m='543040'>circle</span> <span m='543340'>the</span> <span
  m='543550'>support</span> <span m='543760'>vectors.</span> </p><p><span
  m='544850'>There's</span> <span m='545170'>obviously</span> <span
  m='547260'>some</span> <span m='547580'>number of</span> <span
  m='547890'>pluses</span> <span m='548200'>and some</span> <span
  m='548470'>number</span> <span m='548710'>of</span> <span
  m='548790'>minuses.</span> <span m='549460'>I</span> <span
  m='549540'>say</span> <span m='549780'>obviously,</span> <span
  m='550320'>but</span> <span m='550470'>maybe</span> <span
  m='550710'>not.</span> <span m='551710'>But</span> <span
  m='551910'>hopefully</span> <span m='552330'>obviously, and</span> <span
  m='552820'>we'll</span> <span m='552980'>find</span> <span
  m='553300'>out</span> <span m='553550'>because</span> <span
  m='553790'>I'm</span> <span m='553950'>going</span> <span m='554070'>to</span>
  <span m='554140'>call</span> <span m='554330'>on</span> <span
  m='554700'>random</span> <span m='554740'>people.</span> <span
  m='555490'>So</span> <span m='556070'>give</span> <span m='556230'>me</span>
  <span m='556980'>a</span> <span m='557120'>positive</span> <span
  m='557580'>support</span> <span m='557890'>vector.</span> </p><p><span
  m='559899'>AUDIENCE: Um,</span> <span m='561831'>going</span> <span
  m='563763'>to</span> <span m='565212'>the</span> <span m='566178'>one</span>
  <span m='566661'>that looked</span> <span m='567144'>like</span> <span
  m='567627'>[INAUDIBLE]?</span> </p><p><span m='568120'>PROFESSOR: Which</span>
  <span m='568300'>plus</span> <span m='568480'>sign,</span> <span
  m='568935'>[INAUDIBLE]?</span> </p><p><span m='571210'>AUDIENCE: One on
  the</span> <span m='571665'>right.</span> </p><p><span m='572580'>PROFESSOR:
  The</span> <span m='572855'>one</span> <span m='572900'>all</span> <span
  m='572946'>the</span> <span m='572992'>way</span> <span m='573038'>on</span>
  <span m='573084'>the</span> <span m='573130'>right.</span> <span
  m='573380'>Yeah,</span> <span m='574072'>that</span> <span
  m='574514'>plus</span> <span m='574735'>sign</span> <span m='574956'>is</span>
  <span m='575066'>a</span> <span m='575177'>positive</span> <span
  m='575287'>support</span> <span m='575398'>vector.</span> <span
  m='575840'>That's good.</span> <span m='577170'>All</span> <span
  m='577240'>right?</span> <span m='577920'>Excellent.</span> <span
  m='579360'>Now, give me</span> <span m='579650'>a</span> <span
  m='579880'>negative</span> <span m='580421'>support</span> <span
  m='580530'>vector.</span> <span m='585020'>That one?</span> <span
  m='589360'>No?</span> </p><p><span m='590230'>AUDIENCE: Yeah,</span> <span
  m='590630'>sorry.</span> </p><p><span m='591030'>PROFESSOR: Ah,</span> <span
  m='591430'>no</span> <span m='591690'>problem.</span> <span m='591960'>Give me
  a</span> <span m='592230'>negative</span> <span m='592935'>support</span>
  <span m='593076'>vector.</span> </p><p><span m='593995'>AUDIENCE: I</span>
  <span m='594490'>should definitely ask you,</span> <span m='594985'>what's
  a</span> <span m='595480'>support</span> <span m='595975'>vector?</span>
  </p><p><span m='596470'>[LAUGHTER]</span> </p><p><span m='597955'>PROFESSOR:
  That is a  good</span> <span m='598450'>question.</span> <span
  m='599440'>The</span> <span m='599940'>question</span> <span
  m='600220'>is,</span> <span m='600500'>what</span> <span m='601320'>is</span>
  <span m='601890'>a</span> <span m='601980'>support</span> <span
  m='602390'>vector?</span> <span m='603720'>How</span> <span
  m='603880'>many</span> <span m='604060'>other</span> <span
  m='604270'>people</span> <span m='605160'>will</span> <span
  m='605380'>admit</span> <span m='605580'>to</span> <span
  m='605640'>having</span> <span m='605910'>this</span> <span
  m='606090'>question?</span> <span m='608800'>See?</span> <span
  m='609100'>You're</span> <span m='609380'>not</span> <span
  m='609710'>alone.</span> <span m='612360'>OK.</span> <span
  m='615510'>Before</span> <span m='615860'>I</span> <span m='615930'>go</span>
  <span m='616100'>on,</span> <span m='616630'>I'm</span> <span
  m='616820'>going</span> <span m='617070'>to</span> <span
  m='617170'>assume--</span> <span m='617550'>you</span> <span
  m='617960'>guys</span> <span m='618210'>make</span> <span
  m='618390'>sure</span> <span m='618610'>I'm</span> <span
  m='618730'>correct--</span> <span m='619460'>Monday</span> <span
  m='619740'>was,</span> <span m='621660'>just</span> <span
  m='621890'>being</span> <span m='622080'>sure</span> <span
  m='622520'>so</span> <span m='622620'>I</span> <span m='622700'>can</span>
  <span m='622870'>tailor</span> <span m='623190'>based</span> <span
  m='623320'>on</span> <span m='623450'>this.</span> <span
  m='623580'>Monday</span> <span m='623850'>was</span> <span
  m='624310'>the</span> <span m='624620'>support</span> <span m='624900'>vector
  machine</span> <span m='625390'>lecture.</span> <span m='627230'>But</span>
  <span m='628150'>it</span> <span m='628260'>was</span> <span
  m='628380'>also</span> <span m='628740'>very</span> <span
  m='628980'>difficult</span> <span m='629350'>to</span> <span
  m='629420'>follow.</span> <span m='630470'>That's</span> <span m='630730'>what
  I</span> <span m='630990'>usually</span> <span m='631450'>expect.</span>
  </p><p><span m='632460'>So</span> <span m='633860'>what</span> <span
  m='634090'>is</span> <span m='634240'>a</span> <span m='634330'>support</span>
  <span m='634650'>vector?</span> <span m='635170'>Well,</span> <span
  m='635890'>all</span> <span m='636210'>these</span> <span
  m='636400'>pluses</span> <span m='636630'>and</span> <span
  m='636740'>minuses,</span> <span m='639120'>if we</span> <span
  m='639415'>were</span> <span m='639710'>me,</span> <span m='640350'>and</span>
  <span m='641450'>if,</span> <span m='641930'>I</span> <span
  m='642060'>guess--</span> <span m='642410'>yeah,</span> <span
  m='642630'>if</span> <span m='642750'>we</span> <span m='642860'>were</span>
  <span m='642980'>me</span> <span m='643600'>and</span> <span
  m='643860'>if</span> <span m='644540'>I</span> <span m='644710'>was</span>
  <span m='644860'>describing</span> <span m='645330'>this</span> <span
  m='645520'>problem,</span> <span m='646650'>the</span> <span
  m='646760'>one</span> <span m='646990'>that</span> <span m='647060'>we</span>
  <span m='647200'>work</span> <span m='647490'>out</span> <span
  m='647650'>in</span> <span m='647780'>class,</span> <span m='648370'>I</span>
  <span m='648540'>would</span> <span m='648650'>call</span> <span
  m='648910'>them</span> <span m='649100'>points</span> <span
  m='649970'>because</span> <span m='650230'>they're</span> <span
  m='650500'>on</span> <span m='651310'>the</span> <span
  m='651400'>graph.</span> <span m='651840'>They're</span> <span
  m='651980'>points.</span> <span m='653320'>They're</span> <span
  m='653460'>data</span> <span m='653770'>points.</span> <span
  m='655515'>But</span> <span m='655940'>however,</span> <span
  m='657280'>in</span> <span m='657780'>more</span> <span
  m='658030'>difficult</span> <span m='658420'>versions</span> <span
  m='658730'>of</span> <span m='658810'>this</span> <span
  m='658960'>problem</span> <span m='659240'>that</span> <span
  m='659400'>have</span> <span m='659780'>n</span> <span
  m='659980'>dimensions,</span> <span m='661140'>where</span> <span
  m='661310'>n</span> <span m='661530'>is</span> <span m='661760'>some</span>
  <span m='662030'>ridiculous</span> <span m='662570'>number</span> <span
  m='662770'>of</span> <span m='662850'>dimensions</span> <span
  m='663330'>that</span> <span m='663450'>you're</span> <span
  m='663530'>never</span> <span m='663780'>going</span> <span
  m='663900'>to</span> <span m='663950'>graph.</span> </p><p><span
  m='665040'>Like</span> <span m='665310'>say</span> <span
  m='667020'>some</span> <span m='667260'>of</span> <span m='667300'>the</span>
  <span m='667370'>research</span> <span m='667700'>I'm</span> <span
  m='667820'>doing</span> <span m='668030'>now,</span> <span m='668310'>I</span>
  <span m='668440'>could</span> <span m='668680'>use</span> <span
  m='668810'>support</span> <span m='669180'>vector</span> <span
  m='669430'>machines</span> <span m='670060'>on</span> <span
  m='670930'>some</span> <span m='671110'>of</span> <span
  m='671170'>these</span> <span m='671350'>articles</span> <span
  m='672180'>that</span> <span m='673840'>I'm</span> <span
  m='674030'>reading</span> <span m='674250'>about</span> <span
  m='674560'>cyber</span> <span m='674920'>events</span> <span
  m='675420'>to</span> <span m='675540'>try</span> <span m='675720'>to</span>
  <span m='675810'>figure</span> <span m='676070'>out</span> <span
  m='676230'>if</span> <span m='676370'>there's</span> <span m='676580'>a</span>
  <span m='676710'>real</span> <span m='677090'>event</span> <span
  m='677520'>or</span> <span m='677660'>if</span> <span m='677740'>it's</span>
  <span m='677860'>just</span> <span m='677960'>someone</span> <span
  m='678530'>complaining</span> <span m='679080'>about</span> <span
  m='679370'>how</span> <span m='679570'>we're</span> <span
  m='679780'>really</span> <span m='680020'>vulnerable</span> <span
  m='680710'>or</span> <span m='680850'>something</span> <span
  m='681080'>like</span> <span m='681280'>that</span> <span
  m='681540'>and</span> <span m='681690'>no</span> <span m='681900'>event</span>
  <span m='682230'>actually</span> <span m='682600'>happened.</span>
  </p><p><span m='683550'>So</span> <span m='683740'>the</span> <span
  m='683840'>reason</span> <span m='684050'>why</span> <span
  m='684170'>they</span> <span m='684290'>call</span> <span
  m='684590'>these</span> <span m='684870'>guys</span> <span
  m='685130'>vectors</span> <span m='685610'>is</span> <span
  m='685820'>when</span> <span m='686020'>you're</span> <span
  m='686140'>not</span> <span m='686690'>able</span> <span m='686920'>to</span>
  <span m='687020'>graph</span> <span m='687300'>them</span> <span
  m='687420'>on</span> <span m='687530'>a</span> <span
  m='687600'>Cartesian</span> <span m='688070'>plane,</span> <span
  m='688990'>there's</span> <span m='689190'>still</span> <span
  m='689560'>this</span> <span m='689820'>long</span> <span
  m='691290'>vector</span> <span m='691850'>of</span> <span
  m='691950'>many</span> <span m='692240'>different</span> <span
  m='692570'>dimensions.</span> <span m='693790'>Right</span> <span
  m='694030'>now,</span> <span m='694290'>though,</span> <span
  m='694720'>these</span> <span m='695000'>points</span> <span
  m='695600'>represent</span> <span m='696170'>the</span> <span
  m='696250'>vectors.</span> <span m='697750'>This is</span> <span
  m='698000'>very</span> <span m='698470'>simple.</span> <span
  m='699170'>It's</span> <span m='699330'>easier</span> <span
  m='699600'>to</span> <span m='699720'>view</span> <span m='699880'>them</span>
  <span m='700080'>this</span> <span m='700270'>way.</span> <span
  m='700550'>But</span> <span m='701290'>for</span> <span
  m='701430'>instance,</span> <span m='701800'>that</span> <span
  m='701950'>plus</span> <span m='702630'>at</span> <span
  m='702910'>negative</span> <span m='703220'>1,</span> <span
  m='703890'>2</span> <span m='705080'>represents</span> <span m='705350'>the
  fact</span> <span m='705620'>that</span> <span m='705710'>there</span> <span
  m='705910'>is</span> <span m='706060'>a</span> <span m='706120'>vector</span>
  <span m='707480'>going in</span> <span m='707710'>the</span> <span
  m='707810'>direction</span> <span m='708360'>of</span> <span
  m='708540'>negative</span> <span m='708830'>1,</span> <span
  m='709070'>2</span> <span m='709670'>with</span> <span m='709790'>a</span>
  <span m='709870'>magnitude</span> <span m='710910'>such</span> <span
  m='711520'>that</span> <span m='713070'>it</span> <span
  m='713180'>reaches</span> <span m='713550'>negative</span> <span
  m='713880'>1,</span> <span m='714140'>2.</span> </p><p><span
  m='715650'>So</span> <span m='715990'>all</span> <span m='716200'>these</span>
  <span m='716380'>points</span> <span m='716710'>are</span> <span
  m='716790'>just</span> <span m='716950'>a</span> <span m='717000'>point</span>
  <span m='717250'>representation</span> <span m='717540'>of</span> <span
  m='717830'>a</span> <span m='717910'>vector.</span> <span
  m='718180'>You</span> <span m='718310'>probably,</span> <span
  m='719080'>in</span> <span m='719240'>any</span> <span m='719430'>class</span>
  <span m='719850'>that</span> <span m='719940'>worked</span> <span
  m='720130'>with</span> <span m='720270'>vectors,</span> <span m='721400'>saw
  this,</span> <span m='722250'>saw</span> <span m='722710'>vectors</span> <span
  m='723030'>being</span> <span m='723210'>represented</span> <span
  m='723690'>as</span> <span m='723820'>points.</span> <span
  m='724530'>Question?</span> </p><p></p><p><span m='725593'>AUDIENCE:
  Always</span> <span m='726056'>from the respect</span> <span m='726519'>to the
  origin?</span> </p><p><span m='728120'>PROFESSOR: Yes.</span> <span
  m='728490'>The</span> <span m='728928'>question</span> <span m='729366'>is
  always</span> <span m='729804'>with respect</span> <span m='730242'>to the
  origin.</span> <span m='730680'>The answer is</span> <span
  m='731560'>canonically,</span> <span m='731930'>when</span> <span
  m='732386'>vectors</span> <span m='732842'>are represented</span> <span
  m='733298'>as</span> <span m='733754'>points,</span> <span
  m='734210'>yes,</span> <span m='734690'>it's</span> <span
  m='735060'>always</span> <span m='735340'>with respect</span> <span
  m='735670'>to</span> <span m='735750'>the</span> <span
  m='735820'>origin.</span> </p><p><span m='737820'>So</span> <span
  m='738740'>that's</span> <span m='739000'>the</span> <span
  m='739080'>basic</span> <span m='739490'>idea</span> <span
  m='739730'>is</span> <span m='739810'>that</span> <span m='740000'>all</span>
  <span m='740140'>these</span> <span m='740310'>points</span> <span
  m='740670'>are</span> <span m='740830'>vectors.</span> <span
  m='741710'>So</span> <span m='741860'>what</span> <span m='742000'>are</span>
  <span m='742080'>support</span> <span m='742460'>vectors?</span> <span
  m='742770'>Well,</span> <span m='743050'>you</span> <span
  m='743170'>could</span> <span m='743310'>call</span> <span
  m='743490'>them</span> <span m='743610'>support</span> <span
  m='744060'>points</span> <span m='744620'>for</span> <span
  m='744750'>this</span> <span m='745050'>case.</span> <span
  m='745400'>But</span> <span m='745670'>the</span> <span
  m='745720'>reason</span> <span m='745920'>we</span> <span
  m='746020'>call</span> <span m='746180'>them</span> <span m='746370'>support
  vectors</span> <span m='746720'>is</span> <span m='746940'>again,</span> <span
  m='747710'>in</span> <span m='747840'>the</span> <span
  m='747920'>generalized</span> <span m='748510'>case</span> <span
  m='748800'>that you</span> <span m='749000'>might</span> <span
  m='749200'>be</span> <span m='749300'>doing</span> <span m='749550'>in
  the</span> <span m='749700'>real</span> <span m='749890'>world</span> <span
  m='750460'>with</span> <span m='750750'>real</span> <span
  m='751160'>AI,</span> <span m='752090'>you're</span> <span
  m='752280'>going</span> <span m='752390'>to</span> <span
  m='752470'>have</span> <span m='752660'>a</span> <span m='752750'>giant</span>
  <span m='753100'>vector.</span> <span m='753480'>And it's</span> <span
  m='753620'>not</span> <span m='753880'>just</span> <span m='754080'>going to
  be</span> <span m='754310'>points</span> <span m='754600'>on</span> <span
  m='754700'>a</span> <span m='754770'>graph.</span> <span
  m='756560'>Well,</span> <span m='756620'>usually.</span> </p><p><span
  m='757850'>So</span> <span m='759630'>the</span> <span
  m='759830'>support</span> <span m='760250'>vectors,</span> <span
  m='760830'>the</span> <span m='760930'>support</span> <span
  m='761330'>points,</span> <span m='761970'>we</span> <span
  m='762110'>found</span> <span m='762410'>one</span> <span m='762640'>of</span>
  <span m='762780'>them</span> <span m='763160'>correctly.</span> <span
  m='764000'>It's</span> <span m='764210'>this</span> <span
  m='764520'>guy.</span> <span m='765660'>They're</span> <span
  m='765940'>going</span> <span m='766150'>to</span> <span m='766200'>be</span>
  <span m='766300'>the</span> <span m='766420'>ones</span> <span
  m='768110'>that</span> <span m='769910'>again,</span> <span
  m='770210'>they</span> <span m='770340'>don't</span> <span
  m='770580'>have</span> <span m='770690'>an</span> <span
  m='770760'>alpha</span> <span m='770960'>of</span> <span
  m='771070'>zero.</span> <span m='771290'>They're</span> <span m='771510'>the
  ones</span> <span m='771720'>that</span> <span m='771780'>bind</span> <span
  m='772510'>in</span> <span m='773340'>the,</span> <span m='773870'>as</span>
  <span m='774040'>Petra</span> <span m='774400'>calls it,</span> <span
  m='774740'>the road,</span> <span m='775870'>the</span> <span
  m='775960'>boundary</span> <span m='776430'>lines.</span> <span
  m='777780'>They're</span> <span m='778050'>going</span> <span
  m='778210'>to</span> <span m='778250'>be</span> <span m='778410'>on</span>
  <span m='778560'>the</span> <span m='778760'>edge</span> <span
  m='779200'>of</span> <span m='779350'>plus.</span> <span
  m='779930'>Whichever</span> <span m='780320'>direction</span> <span
  m='780710'>we</span> <span m='780830'>draw</span> <span m='781120'>it,</span>
  <span m='781390'>this</span> <span m='781620'>plus</span> <span
  m='782010'>is</span> <span m='782150'>the</span> <span m='782320'>edge</span>
  <span m='782640'>of</span> <span m='782790'>the</span> <span
  m='782900'>plus</span> <span m='783420'>region.</span> <span
  m='784616'>If</span> <span m='785050'>we</span> <span m='785170'>made</span>
  <span m='785470'>this</span> <span m='785840'>the edge of the</span> <span
  m='786160'>plus</span> <span m='786460'>region</span> <span
  m='787290'>and</span> <span m='787610'>everything</span> <span
  m='788030'>on</span> <span m='788130'>this side</span> <span
  m='788330'>is</span> <span m='788520'>plus</span> <span m='788760'>and</span>
  <span m='788950'>everything on</span> <span m='789110'>this side</span> <span
  m='789280'>is</span> <span m='789430'>minus,</span> <span
  m='789800'>we'd</span> <span m='789960'>be</span> <span
  m='790110'>screwed</span> <span m='790710'>because</span> <span
  m='790970'>there's</span> <span m='791180'>two</span> <span
  m='791350'>pluses</span> <span m='791850'>on</span> <span
  m='792190'>the</span> <span m='793540'>other</span> <span
  m='793710'>side</span> <span m='793990'>of</span> <span
  m='794080'>that.</span> </p><p><span m='795170'>Generally,</span> <span
  m='796450'>when</span> <span m='796710'>trying</span> <span
  m='797000'>to</span> <span m='797060'>find a</span> <span
  m='797330'>support</span> <span m='797640'>vector,</span> <span
  m='798040'>you</span> <span m='798130'>do</span> <span
  m='798280'>something</span> <span m='798630'>a</span> <span
  m='798690'>little</span> <span m='798930'>bit</span> <span
  m='799110'>similar</span> <span m='799520'>to</span> <span
  m='800720'>my</span> <span m='800960'>crazy</span> <span
  m='801330'>method</span> <span m='802100'>of</span> <span
  m='803360'>doing</span> <span m='803970'>nearest</span> <span
  m='804250'>neighbors,</span> <span m='804670'>and</span> <span
  m='804810'>try</span> <span m='804950'>to</span> <span m='805030'>find</span>
  <span m='808220'>a</span> <span m='808290'>plus-minus</span> <span
  m='808830'>pair that's</span> <span m='809260'>close</span> <span
  m='809550'>to</span> <span m='809630'>each</span> <span
  m='809850'>other.</span> <span m='810860'>Sometimes</span> <span
  m='811460'>though,</span> <span m='811650'>it's</span> <span
  m='811970'>not</span> <span m='812150'>just</span> <span m='812410'>two</span>
  <span m='812560'>points</span> <span m='813770'>because</span> <span
  m='814030'>sometimes</span> <span m='814460'>if</span> <span
  m='814540'>you</span> <span m='814650'>try</span> <span m='814890'>to</span>
  <span m='814980'>draw</span> <span m='815160'>the</span> <span
  m='815250'>simple-minded</span> <span m='815900'>thing,</span> <span
  m='816310'>which</span> <span m='816510'>is</span> <span m='817700'>the</span>
  <span m='817960'>perpendicular</span> <span m='818760'>bisector</span> <span
  m='819370'>of</span> <span m='819460'>the</span> <span m='819560'>two</span>
  <span m='819730'>points,</span> <span m='820590'>you</span> <span
  m='820720'>get</span> <span m='820960'>screwed</span> <span
  m='821420'>because</span> <span m='821630'>there's</span> <span
  m='821780'>another</span> <span m='822100'>point</span> <span
  m='822360'>in</span> <span m='822470'>your</span> <span m='822590'>way.</span>
  </p><p><span m='823800'>So</span> <span m='824300'>now that</span> <span
  m='824470'>I've</span> <span m='824720'>given</span> <span
  m='824920'>away</span> <span m='825190'>a</span> <span m='825280'>clue,</span>
  <span m='826400'>let's</span> <span m='826560'>go--</span> <span
  m='827230'>and</span> <span m='827520'>hopefully</span> <span
  m='827900'>that</span> <span m='828120'>made</span> <span
  m='828300'>sense</span> <span m='828540'>to you</span> <span
  m='828660'>guys.</span> <span m='829010'>The support</span> <span
  m='829150'>vectors</span> <span m='829440'>are</span> <span
  m='829480'>the</span> <span m='829590'>ones</span> <span m='829800'>on</span>
  <span m='829940'>the</span> <span m='830200'>edges</span> <span
  m='830710'>that are</span> <span m='830900'>just</span> <span
  m='831190'>barely</span> <span m='831690'>a</span> <span
  m='831930'>plus</span> <span m='832370'>for sure,</span> <span
  m='832500'>or</span> <span m='832940'>just</span> <span
  m='833070'>barely</span> <span m='833320'>a minus</span> <span m='833570'>for
  sure.</span> <span m='834390'>Let's</span> <span m='834580'>go</span> <span
  m='834720'>back.</span> <span m='835040'>Can</span> <span
  m='835220'>you</span> <span m='835360'>give</span> <span m='835500'>me
  a</span> <span m='835620'>negative</span> <span m='835960'>support</span>
  <span m='836220'>vector?</span> </p><p><span m='836900'>AUDIENCE:  The</span>
  <span m='837376'>top one?</span> </p><p><span m='837852'>PROFESSOR: 
  Hmm?</span> </p><p><span m='838328'>AUDIENCE:  The</span> <span m='838804'>top
  negative</span> <span m='839280'>point?</span> </p><p><span
  m='840055'>PROFESSOR: The</span> <span m='840350'>one</span> <span
  m='840660'>on the</span> <span m='841110'>top</span> <span
  m='841440'>left?</span> <span m='842590'>Yes.</span> <span
  m='847330'>And</span> <span m='847640'>does</span> <span
  m='847780'>anyone</span> <span m='848090'>think that</span> <span
  m='848310'>there's</span> <span m='848560'>a</span> <span
  m='848640'>third</span> <span m='848960'>support</span> <span
  m='849290'>vector?</span> <span m='849630'>Well,</span> <span
  m='849770'>let's</span> <span m='850010'>simple-mindedly</span> <span
  m='850780'>try</span> <span m='851100'>the</span> <span
  m='851230'>thing</span> <span m='851500'>that--</span> <span
  m='851990'>remember,</span> <span m='852420'>support</span> <span
  m='852710'>vectors</span> <span m='853080'>always</span> <span
  m='853420'>attempt</span> <span m='853800'>to</span> <span
  m='853860'>have</span> <span m='854160'>the</span> <span
  m='854240'>widest</span> <span m='855010'>possible</span> <span
  m='855670'>space</span> <span m='856340'>between</span> <span
  m='856830'>the</span> <span m='856930'>pluses</span> <span
  m='857290'>and</span> <span m='857490'>minuses</span> <span
  m='858470'>that</span> <span m='858630'>they</span> <span
  m='858750'>can.</span> <span m='859600'>So</span> <span
  m='859770'>let's</span> <span m='860140'>simple-mindedly</span> <span
  m='860950'>try</span> <span m='861150'>to</span> <span m='861250'>do</span>
  <span m='861460'>the</span> <span m='862070'>perpendicular</span> <span
  m='862580'>bisector</span> <span m='863240'>and</span> <span
  m='863360'>see</span> <span m='863550'>if</span> <span
  m='864700'>screws</span> <span m='865070'>us</span> <span
  m='865250'>over.</span> </p><p><span m='866380'>So</span> <span
  m='866610'>when</span> <span m='866730'>we</span> <span
  m='866840'>simple-mindedly</span> <span m='867580'>do</span> <span
  m='867680'>the</span> <span m='867790'>perpendicular</span> <span
  m='868290'>bisector,</span> <span m='869050'>it</span> <span
  m='869190'>goes</span> <span m='869570'>through</span> <span
  m='871320'>here</span> <span m='876280'>like</span> <span
  m='876560'>this.</span> <span m='879330'>And</span> <span
  m='879820'>it's</span> <span m='880090'>just</span> <span
  m='880320'>fine.</span> <span m='881810'>So</span> <span
  m='882080'>these</span> <span m='882320'>are</span> <span
  m='882370'>the</span> <span m='882500'>only</span> <span m='882690'>two</span>
  <span m='882840'>support</span> <span m='883160'>vectors.</span> <span
  m='899620'>And</span> <span m='900290'>there's</span> <span
  m='900560'>our</span> <span m='900670'>divider</span> <span
  m='901060'>line.</span> </p><p><span m='902490'>So</span> <span
  m='904670'>we're</span> <span m='905350'>on</span> <span m='905510'>the</span>
  <span m='905570'>home</span> <span m='905820'>stretch.</span> <span
  m='906210'>But</span> <span m='906320'>we</span> <span m='906410'>have</span>
  <span m='906540'>to</span> <span m='906630'>find</span> <span
  m='906860'>w</span> <span m='907200'>and</span> <span m='907380'>b.</span>
  <span m='908160'>In</span> <span m='908500'>olden</span> <span
  m='908770'>days,</span> <span m='909850'>we would</span> <span
  m='910060'>find</span> <span m='910330'>w and b</span> <span
  m='910820'>by</span> <span m='911570'>plugging</span> <span
  m='912240'>in</span> <span m='912940'>w</span> <span m='913430'>dot</span>
  <span m='914160'>the</span> <span m='914280'>plus</span> <span
  m='914610'>support</span> <span m='914950'>vector,</span> <span
  m='915350'>plus</span> <span m='915590'>b</span> <span
  m='915960'>equals</span> <span m='916290'>1.</span> <span
  m='917130'>Oh,</span> <span m='917190'>that's</span> <span
  m='917380'>very</span> <span m='917660'>crucial.</span> <span
  m='918600'>These</span> <span m='918930'>w</span> <span m='919430'>dot</span>
  <span m='920540'>x</span> <span m='920720'>plus</span> <span
  m='920930'>x</span> <span m='921120'>minus</span> <span m='921450'>are</span>
  <span m='921570'>only</span> <span m='921800'>true</span> <span
  m='922630'>equaling</span> <span m='923000'>1</span> <span
  m='923270'>or</span> <span m='923350'>negative</span> <span
  m='923610'>1?</span> <span m='923780'>Or</span> <span m='923850'>only</span>
  <span m='924060'>true</span> <span m='924230'>for</span> <span
  m='924410'>support</span> <span m='924770'>vectors?</span> </p><p><span
  m='926540'>It's</span> <span m='926720'>always</span> <span
  m='927140'>true</span> <span m='927320'>that</span> <span m='927460'>w</span>
  <span m='927780'>dot</span> <span m='928220'>any</span> <span
  m='928720'>positive</span> <span m='929610'>point</span> <span
  m='930950'>plus</span> <span m='931210'>b</span> <span m='931450'>will</span>
  <span m='931630'>be</span> <span m='931880'>some</span> <span
  m='932190'>positive</span> <span m='932910'>number.</span> <span
  m='934520'>But</span> <span m='934980'>it</span> <span m='935080'>won't</span>
  <span m='935380'>always</span> <span m='937270'>be</span> <span
  m='937380'>1.</span> <span m='937730'>In</span> <span m='937870'>fact,</span>
  <span m='939290'>it</span> <span m='939440'>will</span> <span
  m='939890'>always</span> <span m='940100'>be</span> <span
  m='940280'>greater</span> <span m='940810'>than</span> <span
  m='940940'>1</span> <span m='941560'>up</span> <span m='941980'>over</span>
  <span m='942300'>here.</span> <span m='942870'>It</span> <span
  m='942950'>will</span> <span m='943020'>always</span> <span
  m='943210'>be</span> <span m='943380'>less</span> <span m='943790'>than</span>
  <span m='943970'>-1</span> <span m='944540'>down</span> <span
  m='944810'>over</span> <span m='945010'>there.</span> </p><p><span
  m='948310'>In olden</span> <span m='948490'>days,</span> <span
  m='948780'>we</span> <span m='948900'>would</span> <span
  m='949090'>plug</span> <span m='949355'>in</span> <span m='950390'>-1,</span>
  <span m='950830'>2</span> <span m='951730'>into</span> <span
  m='951960'>this</span> <span m='952150'>equation.</span> <span m='953330'>We
  would</span> <span m='953510'>plug</span> <span m='953940'>in</span> <span
  m='954810'>3,</span> <span m='955410'>-2</span> <span m='956520'>into</span>
  <span m='956740'>this</span> <span m='956960'>equation.</span> <span
  m='957670'>We'd</span> <span m='957840'>plug in</span> <span
  m='958220'>alpha</span> <span m='958510'>plus</span> <span
  m='958810'>equals</span> <span m='958970'>alpha</span> <span
  m='959260'>minus</span> <span m='959660'>in its</span> <span
  m='960020'>sums.</span> <span m='960560'>And</span> <span
  m='960710'>since</span> <span m='960870'>there's</span> <span
  m='961020'>only</span> <span m='961190'>1</span> <span m='961470'>plus</span>
  <span m='961660'>1</span> <span m='961840'>minus,</span> <span
  m='962140'>we'd</span> <span m='962250'>know</span> <span
  m='962470'>they</span> <span m='962630'>were</span> <span
  m='962760'>equal.</span> <span m='964030'>And</span> <span
  m='964230'>then</span> <span m='964630'>we'd</span> <span
  m='965350'>fidget</span> <span m='965650'>around</span> <span
  m='965940'>with</span> <span m='966130'>this</span> <span m='966370'>w</span>
  <span m='966830'>equation.</span> </p><p><span m='967440'>However,</span>
  <span m='968150'>there</span> <span m='968310'>is</span> <span
  m='968540'>a</span> <span m='968590'>better</span> <span m='968920'>way</span>
  <span m='969270'>to</span> <span m='969430'>do</span> <span
  m='969690'>it.</span> <span m='970880'>And</span> <span m='971090'>so</span>
  <span m='971210'>let's</span> <span m='971400'>use</span> <span
  m='971570'>this</span> <span m='971780'>cheap</span> <span
  m='972030'>strategy</span> <span m='974720'>to</span> <span
  m='974840'>solve</span> <span m='975260'>this</span> <span
  m='975990'>version</span> <span m='976320'>of</span> <span
  m='976390'>the</span> <span m='976680'>SVM.</span> <span
  m='977310'>Here's</span> <span m='977570'>how.</span> <span
  m='978180'>First,</span> <span m='980240'>and</span> <span m='980540'>I</span>
  <span m='980600'>know</span> <span m='980760'>I</span> <span
  m='980840'>didn't</span> <span m='981070'>draw</span> <span
  m='981310'>these</span> <span m='981580'>completely</span> <span
  m='981950'>straight.</span> <span m='982730'>Sorry.</span> <span
  m='984030'>But</span> <span m='984210'>can</span> <span
  m='984460'>anyone,</span> <span m='985760'>by</span> <span
  m='985940'>looking</span> <span m='986250'>at--</span> <span
  m='986650'>this</span> <span m='986830'>is</span> <span
  m='987190'>three,</span> <span m='987650'>-2.</span> <span m='988060'>2</span>
  <span m='988410'>And</span> <span m='988550'>this</span> <span
  m='988710'>is</span> <span m='988910'>-1,</span> <span m='989180'>2.</span>
  <span m='990150'>Can</span> <span m='990300'>anyone</span> <span
  m='990620'>tell</span> <span m='990870'>me</span> <span m='991830'>what</span>
  <span m='992040'>the</span> <span m='992120'>equation--</span> <span
  m='993742'>you</span> <span m='994120'>can do</span> <span m='994470'>y</span>
  <span m='994680'>equals</span> <span m='994900'>mx</span> <span
  m='995090'>plus</span> <span m='995300'>b.</span> <span m='995720'>Can</span>
  <span m='995760'>anyone</span> <span m='995900'>tell me what</span> <span
  m='996060'>the</span> <span m='996150'>equation</span> <span m='996610'>of the
  dotted</span> <span m='996830'>line</span> <span m='997220'>is</span> <span
  m='997350'>supposed</span> <span m='997670'>to</span> <span
  m='997740'>be</span> <span m='997940'>if</span> <span m='998100'>I</span>
  <span m='998260'>was</span> <span m='998610'>good</span> <span
  m='998860'>at</span> <span m='999090'>drawing?</span> </p><p><span
  m='1000354'>AUDIENCE:</span> <span m='1000836'>[SEVERAL ANSWERS]</span>
  </p><p><span m='1002764'>PROFESSOR:  People</span> <span
  m='1003246'>say</span> <span m='1003728'>y</span> <span m='1004210'>equals
  x</span> <span m='1004692'>minus</span> <span m='1005174'>1.</span> <span
  m='1006138'>And</span> <span m='1006620'>I</span> <span m='1007102'>say</span>
  <span m='1007590'>yes,</span> <span m='1008350'>y</span> <span
  m='1008750'>equals</span> <span m='1009200'>x minus 1.</span> <span
  m='1010100'>So</span> <span m='1010260'>therefore,</span> <span
  m='1010900'>the</span> <span m='1011010'>pluses</span> <span
  m='1011490'>would</span> <span m='1011640'>be</span> <span
  m='1011800'>y</span> <span m='1012090'>is</span> <span
  m='1012240'>greater</span> <span m='1012530'>than</span> <span
  m='1013520'>or</span> <span m='1013640'>equal</span> <span
  m='1013840'>to</span> <span m='1014740'>x</span> <span
  m='1015180'>minus</span> <span m='1015440'>1</span> <span
  m='1016310'>indeed.</span> <span m='1017330'>So</span> <span
  m='1017940'>we've</span> <span m='1018180'>already</span> <span
  m='1018470'>seen</span> <span m='1019040'>that</span> <span
  m='1019450'>w</span> <span m='1019740'>dot</span> <span m='1020010'>x</span>
  <span m='1020300'>plus</span> <span m='1020550'>b</span> <span
  m='1022070'>somehow</span> <span m='1022530'>can</span> <span
  m='1022710'>be</span> <span m='1022840'>converted</span> <span
  m='1023340'>into</span> <span m='1023550'>this</span> <span
  m='1023790'>form.</span> <span m='1025640'>Right?</span> <span
  m='1026480'>So</span> <span m='1026579'>therefore,</span> <span
  m='1026979'>if</span> <span m='1027380'>we</span> <span
  m='1027430'>have</span> <span m='1027710'>y</span> <span
  m='1027849'>equals</span> <span m='1028079'>x</span> <span
  m='1028300'>minus</span> <span m='1028560'>1,</span> <span
  m='1029730'>then</span> <span m='1029859'>we</span> <span
  m='1029980'>know</span> <span m='1031619'>that</span> <span
  m='1032069'>we</span> <span m='1032200'>have</span> <span
  m='1035050'>we</span> <span m='1035170'>have</span> <span m='1036280'>w</span>
  <span m='1036650'>dot</span> <span m='1037020'>x</span> <span
  m='1037390'>plus</span> <span m='1037680'>b</span> <span
  m='1037920'>equals</span> <span m='1038250'>0.</span> <span
  m='1039490'>Let's</span> <span m='1039770'>do</span> <span
  m='1039890'>that</span> <span m='1040089'>here.</span> <span
  m='1041250'>So</span> <span m='1041510'>we</span> <span
  m='1041599'>know</span> <span m='1041740'>that</span> <span
  m='1041880'>w1</span> <span m='1046569'>x1.</span> <span m='1048730'>We
  can</span> <span m='1049090'>even</span> <span m='1049320'>call</span> <span
  m='1049520'>it</span> <span m='1049600'>x</span> <span m='1049830'>and</span>
  <span m='1049950'>y.</span> <span m='1050450'>I</span> <span
  m='1050550'>think</span> <span m='1050740'>it'll</span> <span
  m='1050880'>be</span> <span m='1051010'>fine.</span> <span m='1052170'>No
  one</span> <span m='1052320'>will</span> <span m='1052570'>come</span> <span
  m='1052810'>after</span> <span m='1053150'>us.</span> <span
  m='1053720'>w2</span> <span m='1054260'>y</span> <span m='1055690'>plus</span>
  <span m='1056000'>b</span> <span m='1056700'>equals</span> <span
  m='1057500'>0.</span> <span m='1059160'>But</span> <span m='1059290'>we</span>
  <span m='1059400'>also</span> <span m='1059700'>know</span> <span
  m='1059940'>that</span> <span m='1060080'>y</span> <span
  m='1060290'>equals</span> <span m='1060500'>x</span> <span
  m='1060670'>minus</span> <span m='1060900'>1,</span> <span
  m='1061770'>which</span> <span m='1061960'>means</span> <span
  m='1062970'>that</span> <span m='1064390'>if</span> <span m='1066420'>y</span>
  <span m='1066640'>equals</span> <span m='1066910'>x</span> <span
  m='1067130'>minus</span> <span m='1067440'>1,</span> <span
  m='1068060'>then</span> <span m='1068820'>according</span> <span
  m='1069110'>to</span> <span m='1069220'>this</span> <span
  m='1069460'>thing</span> <span m='1069610'>we</span> <span
  m='1069780'>have</span> <span m='1069990'>over</span> <span
  m='1070210'>here,</span> <span m='1071310'>then</span> <span
  m='1072670'>negative</span> <span m='1074390'>w1</span> <span
  m='1075430'>over</span> <span m='1075710'>w2</span> <span
  m='1077470'>equals--</span> </p><p><span m='1081020'>So</span> <span
  m='1081480'>we</span> <span m='1081610'>know</span> <span
  m='1081770'>that</span> <span m='1082180'>negative</span> <span
  m='1082610'>w1</span> <span m='1083060'>over</span> <span
  m='1083220'>w2--</span> <span m='1086840'>and</span> <span
  m='1087000'>we</span> <span m='1087100'>have</span> <span
  m='1089310'>-b</span> <span m='1089960'>over</span> <span
  m='1090190'>w2.</span> <span m='1092340'>So</span> <span m='1092570'>y</span>
  <span m='1092810'>equals</span> <span m='1093090'>x</span> <span
  m='1093250'>minus</span> <span m='1093520'>1.</span> <span
  m='1095960'>And</span> <span m='1096070'>if</span> <span m='1096180'>we</span>
  <span m='1096270'>solve</span> <span m='1096590'>this</span> <span
  m='1096740'>equation</span> <span m='1097320'>to</span> <span
  m='1097450'>make</span> <span m='1097610'>it</span> <span
  m='1097740'>look</span> <span m='1097920'>like</span> <span
  m='1098140'>this,</span> <span m='1098330'>we</span> <span
  m='1098410'>would</span> <span m='1098540'>have</span> <span
  m='1098850'>y</span> <span m='1099230'>equals</span> <span
  m='1101080'>negative</span> <span m='1101430'>w1</span> <span
  m='1101920'>over</span> <span m='1102100'>w2</span> <span
  m='1104970'>Minus</span> <span m='1106160'>b</span> <span
  m='1106910'>over</span> <span m='1107180'>w2.</span> <span
  m='1109220'>So</span> <span m='1109430'>we</span> <span
  m='1109530'>know</span> <span m='1110110'>that</span> <span
  m='1110680'>in</span> <span m='1110810'>some</span> <span
  m='1111180'>way,</span> <span m='1111950'>shape,</span> <span
  m='1112390'>or</span> <span m='1112490'>form--</span> <span
  m='1116740'>we</span> <span m='1116920'>know</span> <span
  m='1117050'>that</span> <span m='1117920'>then</span> <span
  m='1118240'>therefore,</span> <span m='1119040'>w1</span> <span
  m='1119490'>over</span> <span m='1119660'>w2</span> <span
  m='1121010'>is</span> <span m='1121170'>some</span> <span
  m='1122300'>scalar</span> <span m='1123100'>multiple</span> <span
  m='1124860'>of</span> <span m='1126340'>minus</span> <span
  m='1126800'>1.</span> <span m='1127900'>And</span> <span m='1128030'>we</span>
  <span m='1128120'>know</span> <span m='1128330'>that</span> <span
  m='1129180'>b</span> <span m='1129440'>over</span> <span m='1129620'>w2</span>
  <span m='1131700'>is,</span> <span m='1132080'>in</span> <span
  m='1132250'>fact,</span> <span m='1132700'>some</span> <span
  m='1133000'>scalar</span> <span m='1133280'>multiple</span> <span
  m='1133810'>of</span> <span m='1134050'>positive</span> <span
  m='1134520'>1.</span> </p><p><span m='1135270'>Scalar</span> <span
  m='1135600'>multiple,</span> <span m='1135930'>what's</span> <span
  m='1136110'>a scalar</span> <span m='1136300'>multiple?</span> <span
  m='1136660'>Well,</span> <span m='1137180'>why</span> <span
  m='1137430'>is</span> <span m='1137600'>it</span> <span m='1137670'>a</span>
  <span m='1137730'>scalar</span> <span m='1137980'>multiple?</span> <span
  m='1138410'>Why</span> <span m='1138580'>isn't</span> <span
  m='1138710'>it</span> <span m='1138930'>just</span> <span
  m='1139860'>going</span> <span m='1140070'>to</span> <span
  m='1140110'>be</span> <span m='1140290'>negative</span> <span
  m='1140590'>1</span> <span m='1140780'>or</span> <span
  m='1140850'>positive</span> <span m='1141250'>1?</span> <span
  m='1145510'>Just</span> <span m='1145700'>because</span> <span
  m='1146320'>in</span> <span m='1146650'>this</span> <span
  m='1146810'>equation,</span> <span m='1147380'>we</span> <span
  m='1147530'>can</span> <span m='1147700'>multiply</span> <span
  m='1148480'>the</span> <span m='1148910'>entire</span> <span
  m='1149320'>equation</span> <span m='1149880'>by</span> <span
  m='1150090'>any</span> <span m='1150320'>number</span> <span
  m='1151510'>and</span> <span m='1151660'>it will</span> <span
  m='1151770'>still</span> <span m='1152070'>have</span> <span
  m='1152200'>the</span> <span m='1152270'>same</span> <span
  m='1152510'>boundary</span> <span m='1152940'>line.</span> <span
  m='1156480'>You</span> <span m='1156600'>guys</span> <span
  m='1156800'>see</span> <span m='1156940'>that?</span> <span m='1159834'>Oh,
  there's</span> <span m='1160331'>an x</span> <span m='1160828'>here.</span>
  <span m='1162320'>If</span> <span m='1162420'>we</span> <span
  m='1162510'>multiplied</span> <span m='1162970'>everything,</span> <span
  m='1164770'>since</span> <span m='1164790'>it's</span> <span
  m='1165000'>all</span> <span m='1165220'>divided</span> <span
  m='1165510'>by</span> <span m='1165610'>w2.</span> <span m='1166170'>If</span>
  <span m='1166260'>we</span> <span m='1166370'>double</span> <span
  m='1166780'>w2,</span> <span m='1167920'>but</span> <span
  m='1168040'>also</span> <span m='1169090'>doubled</span> <span
  m='1169330'>b</span> <span m='1169655'>and</span> <span m='1169980'>w1,</span>
  <span m='1171310'>it</span> <span m='1171420'>would</span> <span
  m='1171550'>be</span> <span m='1171760'>the</span> <span
  m='1171850'>exact</span> <span m='1172180'>same</span> <span
  m='1172510'>equation.</span> <span m='1173125'>Do</span> <span
  m='1173420'>you</span> <span m='1173570'>guys</span> <span
  m='1173770'>agree?</span> </p><p><span m='1175010'>So</span> <span
  m='1175220'>there's,</span> <span m='1175380'>in</span> <span
  m='1175480'>fact,</span> <span m='1175770'>infinitely</span> <span
  m='1176270'>many</span> <span m='1176540'>possible</span> <span
  m='1176880'>equations.</span> <span m='1177380'>You</span> <span
  m='1177460'>say,</span> <span m='1177660'>well,</span> <span
  m='1177950'>great,</span> <span m='1178215'>Mark.</span> <span
  m='1178480'>You've</span> <span m='1178580'>figured</span> <span
  m='1178880'>out</span> <span m='1178990'>what</span> <span
  m='1179220'>form</span> <span m='1179480'>it</span> <span
  m='1179570'>is.</span> <span m='1180450'>So</span> <span
  m='1180590'>you</span> <span m='1180730'>figured</span> <span
  m='1181040'>out</span> <span m='1181280'>that</span> <span
  m='1182830'>w1</span> <span m='1183340'>over</span> <span
  m='1183530'>w2</span> <span m='1185260'>equals</span> <span
  m='1188870'>some</span> <span m='1189160'>scalar</span> <span
  m='1189450'>multiple</span> <span m='1190170'>of</span> <span
  m='1190360'>negative</span> <span m='1190720'>1.</span> <span
  m='1191040'>So</span> <span m='1191300'>it's</span> <span
  m='1191450'>negative</span> <span m='1191800'>1</span> <span
  m='1192060'>times--</span> <span m='1193370'>what's</span> <span
  m='1193600'>everyone's</span> <span m='1193890'>favorite</span> <span
  m='1194400'>letter?</span> </p><p><span m='1195446'>AUDIENCE: k.</span>
  </p><p><span m='1196240'>PROFESSOR: k.</span> <span
  m='1196720'>Negative</span> <span m='1197000'>1</span> <span
  m='1197210'>times</span> <span m='1197470'>k.</span> <span
  m='1198440'>And</span> <span m='1198820'>we</span> <span
  m='1198980'>figured</span> <span m='1199260'>out</span> <span
  m='1199460'>that</span> <span m='1199870'>b</span> <span
  m='1200970'>over</span> <span m='1201230'>w2</span> <span
  m='1202760'>is--</span> <span m='1205180'>I</span> <span
  m='1205430'>guess</span> <span m='1205650'>we can</span> <span
  m='1205860'>just do</span> <span m='1206200'>negative</span> <span
  m='1206500'>--</span> <span m='1206860'>is</span> <span
  m='1207070'>positive</span> <span m='1207440'>k.</span> <span
  m='1208320'>But</span> <span m='1208480'>what's</span> <span
  m='1208760'>k?</span> <span m='1209000'>How</span> <span
  m='1209170'>are</span> <span m='1209230'>we going to</span> <span
  m='1209410'>figure it</span> <span m='1209740'>out?</span> <span
  m='1210030'>Well,</span> <span m='1210790'>it's a</span> <span
  m='1210920'>good</span> <span m='1211170'>question.</span> <span
  m='1211600'>And I will</span> <span m='1211690'>tell</span> <span
  m='1211920'>you</span> <span m='1212070'>how.</span> </p><p><span
  m='1215440'>I</span> <span m='1215580'>will</span> <span
  m='1215670'>assert</span> <span m='1216030'>the</span> <span
  m='1216120'>following</span> <span m='1216540'>fact</span> <span
  m='1216930'>as</span> <span m='1217090'>true</span> <span
  m='1217400'>without</span> <span m='1217860'>proof.</span> <span
  m='1219090'>Then</span> <span m='1219300'>I</span> <span
  m='1219390'>will</span> <span m='1219580'>not</span> <span
  m='1219840'>prove</span> <span m='1220070'>it.</span> <span
  m='1223720'>1</span> <span m='1224280'>over</span> <span
  m='1225370'>the</span> <span m='1225500'>magnitude</span> <span
  m='1226080'>of</span> <span m='1226230'>w,</span> <span
  m='1227330'>which</span> <span m='1227510'>is</span> <span
  m='1227630'>this</span> <span m='1227810'>vector</span> <span
  m='1228220'>here</span> <span m='1228640'>with</span> <span
  m='1228830'>w1</span> <span m='1229110'>and</span> <span
  m='1229290'>w2,</span> <span m='1230650'>equals</span> <span
  m='1232670'>this</span> <span m='1236110'>where</span> <span
  m='1236300'>this</span> <span m='1236620'>is</span> <span
  m='1236840'>that</span> <span m='1237050'>line</span> <span
  m='1237200'>that</span> <span m='1237310'>I</span> <span
  m='1237410'>just</span> <span m='1237630'>drew,</span> <span
  m='1237750'>the</span> <span m='1237860'>line</span> <span
  m='1238100'>from</span> <span m='1238290'>here</span> <span
  m='1238720'>to</span> <span m='1239140'>this</span> <span
  m='1239580'>point.</span> <span m='1245690'>1</span> <span
  m='1245950'>over</span> <span m='1246100'>the</span> <span
  m='1246160'>magnitude</span> <span m='1246570'>of</span> <span
  m='1246680'>w</span> <span m='1246960'>equals</span> <span
  m='1247360'>this.</span> <span m='1250850'>Therefore,</span> <span
  m='1251300'>since</span> <span m='1251530'>1</span> <span
  m='1251810'>over</span> <span m='1251980'>the</span> <span
  m='1252040'>magnitude</span> <span m='1252460'>of</span> <span
  m='1252560'>w</span> <span m='1252890'>equals</span> <span
  m='1253350'>this,</span> <span m='1254970'>and</span> <span
  m='1255200'>this</span> <span m='1255480'>equals,</span> <span
  m='1256580'>I</span> <span m='1256680'>believe,</span> <span
  m='1257070'>2</span> <span m='1257280'>root</span> <span m='1257550'>2,</span>
  <span m='1258250'>because</span> <span m='1259600'>we're</span> <span
  m='1259770'>going</span> <span m='1261510'>over</span> <span
  m='1261770'>to,</span> <span m='1262470'>down</span> <span
  m='1262770'>to,</span> <span m='1263550'>Pythagorean</span> <span
  m='1264100'>Theorem,</span> <span m='1264500'>2,</span> <span
  m='1264660'>root</span> <span m='1264860'>2.</span> <span
  m='1269930'>So</span> <span m='1270130'>therefore,</span> <span
  m='1272170'>flip</span> <span m='1272550'>everything</span> <span
  m='1272970'>over.</span> <span m='1273760'>Magnitude</span> <span
  m='1274200'>of</span> <span m='1274290'>w</span> <span
  m='1274640'>equals</span> <span m='1275130'>1</span> <span
  m='1275320'>over</span> <span m='1275510'>2</span> <span m='1275820'>root
  2.</span> <span m='1276740'>So</span> <span m='1276980'>therefore,</span>
  <span m='1277360'>magnitude</span> <span m='1277790'>of</span> <span
  m='1277850'>w</span> <span m='1278120'>equals</span> <span
  m='1278360'>root</span> <span m='1278580'>2</span> <span
  m='1278740'>over</span> <span m='1278950'>4.</span> </p><p><span
  m='1283520'>But</span> <span m='1283710'>why</span> <span
  m='1283890'>are</span> <span m='1283970'>we</span> <span
  m='1284120'>OK?</span> <span m='1286130'>Well,</span> <span
  m='1287900'>how</span> <span m='1288090'>do</span> <span m='1288140'>we</span>
  <span m='1288260'>calculate</span> <span m='1288620'>the</span> <span
  m='1288690'>magnitude</span> <span m='1289160'>of</span> <span
  m='1289260'>w?</span> <span m='1289900'>Do</span> <span
  m='1290020'>people</span> <span m='1290250'>know,</span> <span
  m='1291000'>in</span> <span m='1291100'>general,</span> <span
  m='1291430'>magnitudes</span> <span m='1291880'>of</span> <span
  m='1291960'>vectors?</span> <span m='1293560'>Generally,</span> <span
  m='1294060'>for</span> <span m='1296060'>these</span> <span
  m='1296830'>vectors,</span> <span m='1297250'>we</span> <span
  m='1297410'>do</span> <span m='1297590'>it</span> <span m='1297720'>by</span>
  <span m='1297880'>the</span> <span m='1298140'>square</span> <span
  m='1298530'>root</span> <span m='1299070'>of</span> <span
  m='1299550'>the</span> <span m='1299690'>sum</span> <span
  m='1299960'>of</span> <span m='1300050'>the</span> <span
  m='1300120'>components</span> <span m='1300670'>squared.</span> <span
  m='1301990'>So</span> <span m='1302030'>the</span> <span
  m='1302130'>square</span> <span m='1302460'>root</span> <span
  m='1302650'>of</span> <span m='1303396'>w1</span> <span
  m='1303990'>squared</span> <span m='1305750'>plus</span> <span
  m='1306590'>w2</span> <span m='1307080'>squared</span> <span
  m='1309290'>equals</span> <span m='1309520'>root</span> <span
  m='1309680'>2</span> <span m='1309850'>over</span> <span m='1310040'>4.</span>
  <span m='1310300'>But</span> <span m='1310410'>that's</span> <span
  m='1310650'>not</span> <span m='1310850'>all.</span> <span
  m='1312610'>That's</span> <span m='1312900'>not</span> <span
  m='1313060'>all,</span> <span m='1313620'>we</span> <span
  m='1313750'>say,</span> <span m='1314690'>because</span> <span
  m='1314950'>we</span> <span m='1315110'>know</span> <span
  m='1315980'>from</span> <span m='1316780'>this</span> <span
  m='1318250'>over</span> <span m='1318510'>here</span> <span
  m='1320710'>that</span> <span m='1321090'>the</span> <span
  m='1321200'>ratio</span> <span m='1321660'>of</span> <span
  m='1321740'>w1</span> <span m='1322160'>and</span> <span m='1322580'>w2</span>
  <span m='1323050'>is--</span> </p><p><span m='1324412'>AUDIENCE:</span> <span
  m='1324858'>[SEVERAL ANSWERS]</span> </p><p><span m='1327090'>PROFESSOR:
  Yeah,</span> <span m='1329680'>the</span> <span m='1330020'>ratio</span> <span
  m='1330340'>of</span> <span m='1330440'>w1</span> <span m='1331260'>and</span>
  <span m='1331740'>w2</span> <span m='1333900'>is</span> <span
  m='1334470'>going</span> <span m='1334810'>to</span> <span
  m='1334900'>be--</span> <span m='1335970'>actually,</span> <span
  m='1337020'>sorry.</span> <span m='1338340'>I</span> <span
  m='1338460'>shouldn't</span> <span m='1338720'>put</span> <span
  m='1338830'>a</span> <span m='1338890'>k</span> <span m='1339170'>here.</span>
  <span m='1340150'>I</span> <span m='1340290'>realize</span> <span
  m='1340600'>I</span> <span m='1341040'>probably</span> <span m='1341380'>have
  been</span> <span m='1341750'>confusing</span> <span m='1342100'>you</span>
  <span m='1342250'>guys</span> <span m='1342490'>a</span> <span
  m='1342540'>lot.</span> <span m='1343490'>w1</span> <span
  m='1343730'>over</span> <span m='1343880'>w2</span> <span
  m='1344330'>is</span> <span m='1344470'>just</span> <span
  m='1344730'>-1.</span> <span m='1345475'>B</span> <span
  m='1345890'>Over</span> <span m='1346080'>w2</span> <span
  m='1346490'>is</span> <span m='1346670'>just</span> <span
  m='1346960'>1.</span> <span m='1347510'>That's</span> <span
  m='1347730'>just</span> <span m='1347890'>a</span> <span
  m='1347930'>fact.</span> <span m='1349570'>There's</span> <span
  m='1349820'>no</span> <span m='1349940'>k.</span> <span m='1350600'>The</span>
  <span m='1350720'>k</span> <span m='1351390'>is</span> <span
  m='1351910'>to</span> <span m='1352040'>determine</span> <span
  m='1352330'>what</span> <span m='1352500'>w1</span> <span
  m='1352750'>and</span> <span m='1353000'>w2</span> <span
  m='1355000'>are.</span> <span m='1355630'>So</span> <span
  m='1355800'>w1</span> <span m='1356460'>equals</span> <span
  m='1357520'>-k.</span> <span m='1358403'>And</span> <span
  m='1358786'>w2</span> <span m='1359480'>equals</span> <span
  m='1360420'>positive</span> <span m='1360860'>k.</span> <span
  m='1361760'>And</span> <span m='1362180'>b</span> <span
  m='1362540'>equals</span> <span m='1362850'>also</span> <span
  m='1363280'>positive</span> <span m='1363670'>k.</span> </p><p><span
  m='1367560'>By the</span> <span m='1367640'>way,</span> <span
  m='1368190'>here's</span> <span m='1368420'>a</span> <span
  m='1368470'>question</span> <span m='1368830'>for</span> <span
  m='1368930'>you.</span> <span m='1369790'>Could</span> <span
  m='1370000'>I</span> <span m='1370110'>have</span> <span
  m='1370310'>put</span> <span m='1373310'>the</span> <span
  m='1373400'>negative</span> <span m='1373670'>sign</span> <span m='1373960'>on
  w2</span> <span m='1374460'>and</span> <span m='1374590'>b</span> <span
  m='1374830'>instead</span> <span m='1375150'>of</span> <span
  m='1375240'>on</span> <span m='1375500'>w1?</span> <span m='1378600'>So</span>
  <span m='1378810'>many people</span> <span m='1379220'>said</span> <span
  m='1379595'>yes.</span> <span m='1379970'>That's</span> <span
  m='1380210'>a</span> <span m='1380310'>very</span> <span
  m='1380640'>smart</span> <span m='1380945'>answer.</span> <span
  m='1381250'>Actually,</span> <span m='1381684'>no,</span> <span
  m='1384290'>because</span> <span m='1384740'>of the</span> <span
  m='1384800'>fact</span> <span m='1385080'>that</span> <span
  m='1385200'>the</span> <span m='1385290'>pluses</span> <span
  m='1385700'>are</span> <span m='1385790'>on</span> <span
  m='1385880'>the</span> <span m='1385960'>negative</span> <span
  m='1386440'>x-axis.</span> <span m='1389270'>It's</span> <span
  m='1389410'>just</span> <span m='1389820'>a</span> <span
  m='1389940'>little</span> <span m='1390190'>trick</span> <span
  m='1391010'>I</span> <span m='1391150'>picked</span> <span
  m='1391440'>up.</span> <span m='1391640'>When</span> <span
  m='1391750'>one</span> <span m='1391920'>of</span> <span m='1392020'>them
  is</span> <span m='1392200'>negative</span> <span m='1392480'>and</span> <span
  m='1392560'>the</span> <span m='1392640'>other</span> <span
  m='1392790'>one</span> <span m='1392930'>isn't,</span> <span
  m='1393090'>follow</span> <span m='1393902'>the</span> <span
  m='1394310'>pluses.</span> </p><p><span m='1395400'>So</span> <span
  m='1395970'>we</span> <span m='1396090'>know</span> <span
  m='1396300'>that</span> <span m='1396590'>w1</span> <span
  m='1396760'>is</span> <span m='1396850'>-k,</span> <span m='1397400'>w2</span>
  <span m='1397820'>is</span> <span m='1397950'>positive</span> <span
  m='1398340'>k,</span> <span m='1398620'>and b</span> <span
  m='1398900'>Is</span> <span m='1399050'>positive</span> <span
  m='1399450'>k.</span> <span m='1400196'>w1</span> <span
  m='1400930'>over</span> <span m='1401140'>w2</span> <span
  m='1401530'>is</span> <span m='1401690'>-1.</span> <span m='1402455'>b</span>
  <span m='1402870'>over</span> <span m='1403060'>w2</span> <span
  m='1403510'>is</span> <span m='1403650'>positive</span> <span
  m='1404060'>1.</span> <span m='1404700'>So</span> <span
  m='1404870'>what</span> <span m='1405070'>do</span> <span
  m='1405140'>we</span> <span m='1405230'>know</span> <span
  m='1405580'>about</span> <span m='1405810'>the</span> <span
  m='1405880'>ratio</span> <span m='1406170'>of</span> <span
  m='1406250'>w1</span> <span m='1406625'>and</span> <span
  m='1407000'>w2?</span> <span m='1410600'>It's</span> <span
  m='1410770'>equal</span> <span m='1410990'>to</span> <span
  m='1411050'>-1.</span> <span m='1412720'>And that</span> <span
  m='1413180'>means</span> <span m='1413590'>that when</span> <span
  m='1413760'>we</span> <span m='1413860'>square</span> <span
  m='1414330'>it,</span> <span m='1414810'>w1</span> <span
  m='1415550'>squared</span> <span m='1415980'>equals</span> <span
  m='1416420'>w2</span> <span m='1416930'>squared.</span> <span
  m='1418290'>So</span> <span m='1418470'>therefore,</span> <span
  m='1419260'>this  is</span> <span m='1419700'>the</span> <span
  m='1419790'>square</span> <span m='1420110'>root</span> <span
  m='1420720'>of</span> <span m='1421910'>2</span> <span m='1422600'>w1</span>
  <span m='1422890'>squared,</span> <span m='1423830'>which</span> <span
  m='1423900'>equals</span> <span m='1425516'>root</span> <span
  m='1425940'>2</span> <span m='1426230'>w1.</span> <span
  m='1430860'>Well,</span> <span m='1431190'>actually</span> <span
  m='1432770'>no,</span> <span m='1433120'>it</span> <span
  m='1433240'>doesn't</span> <span m='1433550'>equal</span> <span
  m='1434030'>root 2</span> <span m='1434180'>w1</span> <span
  m='1434460'>because</span> <span m='1434850'>w1</span> <span
  m='1435250'>is</span> <span m='1435820'>actually</span> <span
  m='1436130'>negative.</span> <span m='1437340'>So</span> <span
  m='1441010'>it's</span> <span m='1441400'>negative</span> <span
  m='1441655'>root</span> <span m='1441910'>2</span> <span
  m='1442110'>w1.</span> <span m='1442420'>It</span> <span
  m='1442560'>doesn't</span> <span m='1442790'>matter.</span> </p><p><span
  m='1443430'>The</span> <span m='1443480'>point</span> <span
  m='1443810'>is</span> <span m='1444780'>that</span> <span
  m='1444960'>if</span> <span m='1445100'>that</span> <span
  m='1445370'>equals</span> <span m='1447200'>root</span> <span
  m='1447410'>2</span> <span m='1447520'>over</span> <span m='1447710'>4,</span>
  <span m='1449100'>then</span> <span m='1449190'>w1</span> <span
  m='1449820'>is--</span> <span m='1451030'>everyone?</span> </p><p><span
  m='1452300'>AUDIENCE:</span> <span m='1452650'>Negative 1/4.</span>
  </p><p><span m='1453000'>PROFESSOR: Negative</span> <span
  m='1453340'>1/4.</span> <span m='1454210'>Bingo.</span> <span
  m='1455042'>And</span> <span m='1455460'>if</span> <span m='1455870'>w1</span>
  <span m='1456390'>is</span> <span m='1456500'>-1/4,</span> <span
  m='1456760'>1</span> <span m='1457180'>everything</span> <span
  m='1457530'>else</span> <span m='1457720'>falls</span> <span
  m='1457960'>into</span> <span m='1458110'>place.</span> <span
  m='1458690'>What</span> <span m='1458740'>are</span> <span
  m='1458810'>w2</span> <span m='1459080'>and</span> <span m='1459270'>b?</span>
  <span m='1459630'>Everyone?</span> </p><p><span m='1460460'>AUDIENCE: 
  Positive</span> <span m='1460840'>1/4.</span> </p><p><span
  m='1461600'>PROFESSOR: Positive</span> <span m='1462020'>1/4.</span> <span
  m='1462720'>We</span> <span m='1462860'>got</span> <span
  m='1463140'>it.</span> <span m='1463600'>We're</span> <span m='1463810'>done
  with</span> <span m='1464180'>this</span> <span m='1464400'>part</span> <span
  m='1464640'>of</span> <span m='1464730'>problem.</span> <span
  m='1465720'>However,</span> <span m='1466010'>bonus.</span> <span
  m='1467210'>Let's</span> <span m='1467740'>come</span> <span
  m='1467940'>to</span> <span m='1468020'>the</span> <span
  m='1468180'>alphas,</span> <span m='1468590'>which</span> <span
  m='1468690'>they</span> <span m='1468800'>didn't</span> <span
  m='1469030'>ask</span> <span m='1469250'>you to</span> <span
  m='1469410'>calculate.</span> <span m='1470420'>Actually,</span> <span
  m='1470800'>you know</span> <span m='1471060'>what?</span> <span
  m='1471900'>We'll</span> <span m='1472080'>do</span> <span
  m='1472180'>the</span> <span m='1472310'>alphas</span> <span m='1472780'>if
  we</span> <span m='1472790'>have</span> <span m='1472920'>enough</span> <span
  m='1473100'>time,</span> <span m='1473510'>since</span> <span
  m='1473640'>they</span> <span m='1473740'>didn't</span> <span
  m='1473920'>actually</span> <span m='1474200'>ask</span> <span
  m='1474430'>you</span> <span m='1474500'>to</span> <span
  m='1474570'>calculate</span> <span m='1474900'>them.</span> <span
  m='1475630'>However,</span> <span m='1476120'>my</span> <span
  m='1476300'>recommendation</span> <span m='1476930'>is</span> <span
  m='1477550'>since</span> <span m='1477790'>there's</span> <span
  m='1477950'>only</span> <span m='1478240'>one</span> <span
  m='1478520'>alpha-plus</span> <span m='1479070'>and</span> <span
  m='1479120'>one</span> <span m='1479330'>alpha-minus,</span> <span
  m='1480040'>they</span> <span m='1480280'>must</span> <span
  m='1480570'>be</span> <span m='1480710'>equal</span> <span
  m='1481370'>from</span> <span m='1481570'>this</span> <span
  m='1481790'>equation,</span> <span m='1482570'>since</span> <span
  m='1482800'>the</span> <span m='1482910'>sum</span> <span
  m='1483200'>of</span> <span m='1483270'>the</span> <span
  m='1483500'>alpha-plus</span> <span m='1483730'>equals</span> <span
  m='1483960'>the</span> <span m='1484040'>sum</span> <span
  m='1484250'>of</span> <span m='1484340'>alpha-minus.</span> <span
  m='1486010'>And</span> <span m='1486360'>so</span> <span
  m='1486500'>therefore,</span> <span m='1489210'>w</span> <span
  m='1489580'>equals</span> <span m='1489920'>the</span> <span
  m='1490010'>sum</span> <span m='1490310'>of</span> <span
  m='1490460'>w--</span> <span m='1492643'>sorry,</span> <span
  m='1494030'>this</span> <span m='1494090'>should</span> <span
  m='1494250'>be</span> <span m='1494450'>an x.</span> <span
  m='1496520'>Of</span> <span m='1496590'>course,</span> <span
  m='1496810'>there's</span> <span m='1497060'>not</span> <span
  m='1497310'>a</span> <span m='1497380'>million</span> <span
  m='1497720'>w's</span> <span m='1498190'>in this</span> <span
  m='1498260'>equation.</span> <span m='1498980'>The</span> <span
  m='1499130'>sum</span> <span m='1499420'>of</span> <span
  m='1501110'>the</span> <span m='1501240'>positive</span> <span
  m='1501650'>data</span> <span m='1501880'>points</span> <span
  m='1502150'>times</span> <span m='1502500'>their</span> <span
  m='1502775'>alpha is</span> <span m='1503050'>minus</span> <span
  m='1503400'>the</span> <span m='1503480'>negative</span> <span
  m='1503750'>data</span> <span m='1504020'>points</span> <span
  m='1504220'>times</span> <span m='1504510'>their</span> <span
  m='1504600'>alphas.</span> </p><p><span m='1505490'>So</span> <span
  m='1505590'>we're</span> <span m='1505710'>looking</span> <span
  m='1506050'>at</span> <span m='1506350'>here</span> <span
  m='1509290'>-1/4,</span> <span m='1510200'>1/4</span> <span
  m='1512120'>equals--</span> <span m='1514460'>what do</span> <span
  m='1514640'>we</span> <span m='1514750'>got</span> <span
  m='1514950'>here?</span> <span m='1515180'>Positive</span> <span
  m='1515480'>point</span> <span m='1515550'>negative</span> <span
  m='1515830'>1,</span> <span m='1516090'>2?</span> <span m='1517110'>So</span>
  <span m='1517540'>we've</span> <span m='1517700'>got</span> <span
  m='1518920'>alpha,</span> <span m='1521720'>alpha</span> <span
  m='1521900'>of</span> <span m='1522250'>that</span> <span
  m='1522490'>point</span> <span m='1523030'>negative</span> <span
  m='1523490'>1,</span> <span m='1523850'>2</span> <span
  m='1525870'>minus</span> <span m='1527020'>alpha</span> <span
  m='1527370'>of</span> <span m='1527870'>that</span> <span
  m='1528080'>minus</span> <span m='1528410'>point.</span> <span
  m='1528750'>And</span> <span m='1529090'>what</span> <span
  m='1529260'>is</span> <span m='1529490'>that?</span> <span
  m='1529890'>It's</span> <span m='1530200'>3,</span> <span
  m='1530420'>-2.</span> <span m='1533420'>3,</span> <span
  m='1534020'>-2.</span> <span m='1535690'>So</span> <span m='1536140'>if</span>
  <span m='1536400'>both</span> <span m='1536620'>of</span> <span
  m='1536710'>the</span> <span m='1536830'>alphas</span> <span
  m='1537160'>which</span> <span m='1537290'>are</span> <span m='1537430'>equal
  were</span> <span m='1537910'>1,</span> <span m='1538370'>we'd</span> <span
  m='1538520'>have</span> <span m='1540780'>-4,</span> <span
  m='1541570'>4.</span> <span m='1542440'>But</span> <span m='1542620'>we</span>
  <span m='1542720'>want</span> <span m='1542960'>-1/4,</span> <span
  m='1543590'>1/4.</span> <span m='1544220'>So</span> <span
  m='1544660'>actually</span> <span m='1545080'>both</span> <span
  m='1545280'>of</span> <span m='1545350'>the</span> <span
  m='1545450'>alphas</span> <span m='1545840'>are</span> <span
  m='1551390'>1/16.</span> <span m='1553070'>And</span> <span
  m='1553240'>that's</span> <span m='1553440'>the</span> <span
  m='1553530'>answer.</span> </p><p><span m='1555340'>We'll</span> <span
  m='1555500'>do</span> <span m='1555620'>that</span> <span
  m='1555920'>more</span> <span m='1556140'>in</span> <span
  m='1556210'>depth</span> <span m='1556560'>if</span> <span
  m='1556710'>we</span> <span m='1556780'>have</span> <span
  m='1556900'>time.</span> <span m='1557370'>But</span> <span
  m='1557540'>we</span> <span m='1557640'>won't.</span> <span
  m='1558300'>So</span> <span m='1558680'>let's</span> <span
  m='1558870'>do</span> <span m='1558990'>number</span> <span
  m='1559250'>two.</span> <span m='1560530'>So</span> <span
  m='1560960'>let's</span> <span m='1561210'>go</span> <span
  m='1561380'>into</span> <span m='1561730'>faster</span> <span
  m='1562180'>mode.</span> <span m='1562550'>Number</span> <span
  m='1562790'>two,</span> <span m='1563760'>very</span> <span
  m='1563970'>similar</span> <span m='1564320'>to</span> <span
  m='1564440'>number</span> <span m='1564710'>one</span> <span
  m='1566040'>in</span> <span m='1566170'>many</span> <span
  m='1566410'>ways.</span> <span m='1566780'>But</span> <span
  m='1567020'>as</span> <span m='1567170'>you</span> <span
  m='1567250'>can</span> <span m='1567360'>see,</span> <span
  m='1568120'>one</span> <span m='1568270'>of</span> <span
  m='1568320'>the</span> <span m='1568390'>main</span> <span
  m='1568710'>things</span> <span m='1568890'>that</span> <span
  m='1569010'>they</span> <span m='1569200'>added</span> <span
  m='1569680'>an</span> <span m='1569810'>extra</span> <span
  m='1570150'>minus</span> <span m='1570530'>sign</span> <span
  m='1570830'>at</span> <span m='1570980'>2,</span> <span m='1571410'>-1.</span>
  <span m='1571800'>So</span> <span m='1573070'>I</span> <span
  m='1573220'>think</span> <span m='1573360'>we</span> <span
  m='1573480'>can</span> <span m='1573620'>all</span> <span
  m='1573890'>agree</span> <span m='1575070'>that</span> <span
  m='1575260'>this</span> <span m='1575460'>will</span> <span
  m='1575610'>still</span> <span m='1575890'>be</span> <span
  m='1577006'>our</span> <span m='1577360'>plus--</span> <span
  m='1577680'>Actually,</span> <span m='1577790'>they</span> <span
  m='1577990'>added</span> <span m='1578160'>another</span> <span
  m='1578470'>plus</span> <span m='1578790'>sign</span> <span
  m='1579290'>there,</span> <span m='1579560'>too.</span> <span
  m='1580470'>So</span> <span m='1580780'>maybe</span> <span
  m='1581570'>this</span> <span m='1581820'>plus</span> <span m='1582080'>sign
  is</span> <span m='1582540'>a support</span> <span m='1582750'>vector.</span>
  <span m='1584060'>But</span> <span m='1584170'>it's</span> <span
  m='1584320'>not.</span> <span m='1584870'>This</span> <span
  m='1585100'>plus</span> <span m='1585330'>sign</span> <span m='1585460'>is
  a</span> <span m='1585780'>support</span> <span m='1586040'>vector.</span>
  <span m='1586780'>What</span> <span m='1587040'>do</span> <span
  m='1587110'>you</span> <span m='1587180'>guys</span> <span
  m='1587410'>think</span> <span m='1587550'>about</span> <span
  m='1587700'>the</span> <span m='1587780'>new</span> <span
  m='1588000'>negative</span> <span m='1588370'>sign?</span> <span
  m='1588620'>Will it</span> <span m='1588850'>become</span> <span
  m='1589230'>a</span> <span m='1589320'>support</span> <span
  m='1589640'>vector</span> <span m='1589980'>since</span> <span m='1590240'>it
  is</span> <span m='1590710'>strictly</span> <span m='1591100'>closer</span>
  <span m='1591470'>to</span> <span m='1591560'>the</span> <span
  m='1591630'>pluses?</span> <span m='1593370'>Yep,</span> <span
  m='1593780'>you're</span> <span m='1593940'>right.</span> </p><p><span
  m='1595460'>OK,</span> <span m='1596660'>so</span> <span
  m='1598520'>this</span> <span m='1598930'>is</span> <span m='1599090'>a</span>
  <span m='1599130'>very</span> <span m='1599420'>beautiful</span> <span
  m='1600430'>division</span> <span m='1601080'>because</span> <span
  m='1601700'>if</span> <span m='1601890'>I</span> <span m='1601970'>do</span>
  <span m='1602130'>this</span> <span m='1602330'>correctly,</span> <span
  m='1603120'>which</span> <span m='1603400'>I</span> <span
  m='1603460'>didn't,</span> <span m='1604250'>but</span> <span
  m='1604370'>if</span> <span m='1604460'>we</span> <span
  m='1604580'>pretend</span> <span m='1604990'>that</span> <span
  m='1605100'>I</span> <span m='1605160'>did.</span> <span
  m='1605980'>Then</span> <span m='1606660'>the</span> <span
  m='1606860'>dotted</span> <span m='1607180'>line</span> <span
  m='1607520'>is--</span> </p><p><span m='1608445'>AUDIENCE:</span> <span
  m='1608910'>[INAUDIBLE].</span> </p><p><span m='1609840'>PROFESSOR: y</span>
  <span m='1609980'>equals</span> <span m='1610520'>x.</span> <span
  m='1617660'>OK,</span> <span m='1618400'>so</span> <span m='1618660'>with
  the</span> <span m='1618810'>dotted</span> <span m='1619120'>line</span> <span
  m='1619250'>at</span> <span m='1619340'>y</span> <span
  m='1619510'>equals</span> <span m='1619770'>x,</span> <span
  m='1621000'>then</span> <span m='1622780'>just</span> <span
  m='1622980'>like</span> <span m='1623110'>we</span> <span
  m='1623200'>did</span> <span m='1623350'>up</span> <span
  m='1623600'>here,</span> <span m='1624770'>we</span> <span
  m='1624990'>know</span> <span m='1625780'>that</span> <span
  m='1626950'>if</span> <span m='1628780'>y</span> <span
  m='1629290'>equals</span> <span m='1629830'>x</span> <span
  m='1630170'>plus</span> <span m='1630420'>0,</span> <span
  m='1631800'>we</span> <span m='1631940'>know</span> <span
  m='1632060'>that</span> <span m='1632180'>first</span> <span
  m='1632490'>of</span> <span m='1632560'>all,</span> <span m='1633495'>b</span>
  <span m='1633750'>equals</span> <span m='1634250'>0.</span> <span
  m='1635700'>Second</span> <span m='1636130'>of</span> <span
  m='1636230'>all,</span> <span m='1637310'>we</span> <span
  m='1637510'>know</span> <span m='1638240'>that</span> <span
  m='1640715'>if</span> <span m='1640980'>y</span> <span
  m='1641210'>equals</span> <span m='1641480'>x,</span> <span
  m='1642430'>then</span> <span m='1642550'>we</span> <span
  m='1642640'>know</span> <span m='1642910'>that</span> <span
  m='1643830'>-w1</span> <span m='1644860'>over</span> <span
  m='1645120'>w2</span> <span m='1647110'>equals</span> <span
  m='1647610'>1.</span> <span m='1653460'>The</span> <span
  m='1653560'>pluses</span> <span m='1653890'>are</span> <span
  m='1653950'>still</span> <span m='1654240'>on</span> <span
  m='1654440'>the</span> <span m='1654510'>left</span> <span
  m='1654890'>and</span> <span m='1655130'>up,</span> <span
  m='1655910'>so</span> <span m='1656120'>we</span> <span
  m='1656230'>know</span> <span m='1656450'>that</span> <span
  m='1656610'>w1</span> <span m='1658030'>is</span> <span
  m='1658170'>some</span> <span m='1658410'>negative</span> <span
  m='1658740'>number,</span> <span m='1659170'>-k,</span> <span
  m='1660364'>and</span> <span m='1660756'>w2</span> <span m='1661150'>is</span>
  <span m='1661480'>some</span> <span m='1661790'>positive</span> <span
  m='1662160'>number</span> <span m='1662550'>k.</span> <span
  m='1663580'>Great.</span> </p><p><span m='1664390'>How</span> <span
  m='1664600'>are we</span> <span m='1664690'>going to</span> <span
  m='1664890'>figure it</span> <span m='1665240'>out?</span> <span
  m='1666480'>Well,</span> <span m='1667800'>let's</span> <span
  m='1668010'>call</span> <span m='1668480'>this</span> <span
  m='1668810'>d</span> <span m='1669255'>for</span> <span
  m='1669700'>distance,</span> <span m='1671020'>or</span> <span
  m='1671180'>whatever</span> <span m='1671480'>you</span> <span
  m='1671590'>want</span> <span m='1671670'>to</span> <span
  m='1671740'>call</span> <span m='1672010'>it.</span> <span
  m='1672710'>So</span> <span m='1674360'>1</span> <span m='1674590'>over</span>
  <span m='1674790'>w</span> <span m='1675200'>equals</span> <span
  m='1675620'>d.</span> <span m='1677300'>d</span> <span m='1677720'>In</span>
  <span m='1677850'>this</span> <span m='1678060'>case</span> <span
  m='1678290'>is</span> <span m='1678470'>not</span> <span m='1679480'>2
  over</span> <span m='1679820'>2.</span> <span m='1680860'>Can</span> <span
  m='1681310'>everyone</span> <span m='1681780'>tell</span> <span
  m='1681970'>what</span> <span m='1682110'>d</span> <span m='1682290'>is</span>
  <span m='1682480'>here?</span> </p><p><span m='1685270'>AUDIENCE:</span> <span
  m='1685748'>[INAUDIBLE]</span> </p><p><span m='1691490'>PROFESSOR: It's</span>
  <span m='1691760'>actually--</span> <span m='1694050'>so</span> <span
  m='1694320'>it</span> <span m='1694470'>goes</span> <span
  m='1694830'>over</span> <span m='1695490'>2</span> <span
  m='1695850'>and</span> <span m='1696040'>1.</span> <span m='1696700'>So</span>
  <span m='1697410'>it</span> <span m='1697830'>should</span> <span
  m='1698310'>be</span> <span m='1700270'>1</span> <span m='1700550'>1/2</span>
  <span m='1700830'>root</span> <span m='1701280'>2</span> <span
  m='1701990'>since</span> <span m='1702600'>this</span> <span
  m='1703280'>width</span> <span m='1703520'>distance,</span> <span
  m='1703820'>which</span> <span m='1703970'>is</span> <span
  m='1704080'>twice</span> <span m='1704430'>as</span> <span
  m='1704540'>much,</span> <span m='1705150'>goes</span> <span
  m='1705380'>over</span> <span m='1706180'>3</span> <span
  m='1706810'>and</span> <span m='1707280'>3,</span> <span
  m='1708420'>which</span> <span m='1708600'>is</span> <span
  m='1708730'>3</span> <span m='1708890'>root</span> <span m='1709120'>2.</span>
  <span m='1709650'>So</span> <span m='1709800'>it's</span> <span m='1709980'>1
  1/2</span> <span m='1710710'>root</span> <span m='1710970'>2.</span> <span
  m='1711780'>I</span> <span m='1711950'>don't</span> <span
  m='1712120'>like</span> <span m='1713915'>putting</span> <span
  m='1714180'>in</span> <span m='1714320'>decimals</span> <span
  m='1714510'>and</span> <span m='1714680'>stuff</span> <span
  m='1714990'>there.</span> <span m='1715170'>So</span> <span
  m='1715410'>we'll</span> <span m='1715600'>say</span> <span
  m='1715750'>that</span> <span m='1717300'>2</span> <span
  m='1717900'>over</span> <span m='1718360'>magnitude</span> <span
  m='1718730'>of</span> <span m='1718820'>w</span> <span
  m='1719820'>equals</span> <span m='1720250'>2d</span> <span
  m='1721410'>equals</span> <span m='1723720'>3</span> <span
  m='1723920'>root</span> <span m='1724150'>2.</span> <span
  m='1725630'>So</span> <span m='1725870'>therefore,</span> <span
  m='1728080'>right,</span> <span m='1728335'>Pythagorean,</span> <span
  m='1729040'>one, two, three,</span> <span m='1729510'>one, two, three,</span>
  <span m='1729980'>3</span> <span m='1730450'>root</span> <span
  m='1730660'>2.</span> <span m='1731310'>So</span> <span
  m='1731610'>therefore,</span> <span m='1732310'>magnitude</span> <span
  m='1732790'>of</span> <span m='1732890'>w</span> <span
  m='1735510'>equals--</span> <span m='1738280'>let's</span> <span
  m='1738800'>see.</span> <span m='1739300'>Switch</span> <span
  m='1739550'>them</span> <span m='1739670'>over.</span> <span
  m='1740040'>We</span> <span m='1740160'>should</span> <span
  m='1740390'>get</span> <span m='1740560'>root</span> <span
  m='1740760'>2</span> <span m='1740870'>over</span> <span m='1741050'>3.</span>
  </p><p><span m='1745026'>And</span> <span m='1745520'>if</span> <span
  m='1745690'>magnitude</span> <span m='1746090'>of</span> <span
  m='1746200'>w</span> <span m='1746515'>is root 2</span> <span
  m='1746830'>over</span> <span m='1746990'>3,</span> <span
  m='1747230'>we</span> <span m='1747360'>can</span> <span m='1747460'>do</span>
  <span m='1747560'>our</span> <span m='1747680'>same</span> <span
  m='1748090'>trick</span> <span m='1748340'>from</span> <span
  m='1748580'>before,</span> <span m='1750420'>square</span> <span
  m='1750880'>root</span> <span m='1751170'>of</span> <span m='1752520'>2</span>
  <span m='1752775'>w2</span> <span m='1753240'>squared</span> <span
  m='1755230'>equals</span> <span m='1755710'>root</span> <span
  m='1755930'>2</span> <span m='1756060'>over</span> <span m='1756240'>3.</span>
  <span m='1759950'>And</span> <span m='1760520'>this</span> <span
  m='1760970'>is</span> <span m='1761310'>just</span> <span
  m='1761580'>root</span> <span m='1761880'>2</span> <span
  m='1762450'>times</span> <span m='1762770'>w2</span> <span
  m='1764230'>equals</span> <span m='1764520'>root</span> <span
  m='1764730'>2</span> <span m='1764840'>over</span> <span m='1765040'>3.</span>
  <span m='1766250'>So</span> <span m='1766450'>therefore,</span> <span
  m='1766820'>w2</span> <span m='1767390'>is?</span> <span
  m='1768650'>1/3.</span> <span m='1769240'>And</span> <span
  m='1769740'>w1</span> <span m='1770350'>is?</span> <span
  m='1771430'>-1/3.</span> <span m='1772250'>Bingo.</span> <span
  m='1773370'>We've</span> <span m='1773610'>got</span> <span
  m='1774090'>w1.</span> <span m='1774730'>We've</span> <span
  m='1774900'>got</span> <span m='1775240'>w2.</span> <span
  m='1776980'>We</span> <span m='1777100'>know</span> <span m='1777330'>that b
  was</span> <span m='1777770'>zero</span> <span m='1778180'>because</span>
  <span m='1778900'>obviously</span> <span m='1779185'>it's</span> <span
  m='1779470'>0.</span> <span m='1779960'>It's y</span> <span
  m='1780190'>equals</span> <span m='1780410'>x.</span> <span
  m='1781300'>And</span> <span m='1781590'>we're</span> <span
  m='1781670'>done.</span> <span m='1782940'>That</span> <span
  m='1783220'>was</span> <span m='1783510'>fast.</span> <span
  m='1784040'>The</span> <span m='1784150'>alphas</span> <span
  m='1784560'>might</span> <span m='1784790'>taken</span> <span
  m='1785070'>longer.</span> </p><p><span m='1785340'>Actually,</span> <span
  m='1785780'>the alphas</span> <span m='1786100'>on</span> <span
  m='1786210'>this</span> <span m='1786440'>one</span> <span
  m='1786640'>are</span> <span m='1786740'>more</span> <span
  m='1786930'>of</span> <span m='1786990'>a</span> <span m='1787060'>pain</span>
  <span m='1787270'>in</span> <span m='1787330'>the</span> <span
  m='1787420'>ass</span> <span m='1787775'>than anywhere</span> <span
  m='1788130'>else</span> <span m='1788870'>because</span> <span
  m='1789740'>let's</span> <span m='1789960'>take</span> <span
  m='1790100'>a</span> <span m='1790180'>look</span> <span m='1790440'>at</span>
  <span m='1790540'>this</span> <span m='1790710'>one</span> <span
  m='1791030'>if</span> <span m='1791130'>you</span> <span
  m='1791140'>can</span> <span m='1791320'>see</span> <span
  m='1791570'>it.</span> <span m='1792770'>We've</span> <span
  m='1792990'>added</span> <span m='1793390'>in</span> <span
  m='1793710'>yet</span> <span m='1793950'>some</span> <span
  m='1794190'>new</span> <span m='1794390'>points.</span> <span
  m='1794850'>We've</span> <span m='1795040'>got</span> <span
  m='1795380'>this</span> <span m='1795630'>point</span> <span
  m='1795900'>up</span> <span m='1796050'>here</span> <span m='1796270'>and
  this</span> <span m='1796470'>point</span> <span m='1796690'>down</span> <span
  m='1796960'>there.</span> <span m='1798100'>So</span> <span
  m='1798750'>I</span> <span m='1798860'>think</span> <span
  m='1799070'>pretty</span> <span m='1799280'>clearly</span> <span
  m='1799740'>this</span> <span m='1800010'>plus</span> <span
  m='1800280'>and</span> <span m='1800320'>minus</span> <span m='1800640'>are
  the</span> <span m='1800800'>closest</span> <span m='1801240'>to</span> <span
  m='1801320'>each</span> <span m='1801500'>other.</span> <span
  m='1802160'>But</span> <span m='1802220'>what</span> <span
  m='1802390'>happens</span> <span m='1802700'>if</span> <span
  m='1802780'>we</span> <span m='1802900'>take</span> <span
  m='1803070'>the</span> <span m='1803170'>perpendicular</span> <span
  m='1803780'>bisector</span> <span m='1804950'>between</span> <span
  m='1805290'>these</span> <span m='1805560'>two</span> <span m='1805770'>and
  do</span> <span m='1806120'>like</span> <span m='1806410'>this?</span> <span
  m='1809200'>This</span> <span m='1809525'>plus</span> <span m='1809850'>is
  in</span> <span m='1809990'>the</span> <span m='1810060'>middle.</span> <span
  m='1812400'>So</span> <span m='1812530'>therefore,</span> <span
  m='1812910'>this</span> <span m='1813140'>plus</span> <span
  m='1813460'>is</span> <span m='1813590'>going</span> <span
  m='1813710'>to</span> <span m='1813750'>have</span> <span
  m='1813860'>to</span> <span m='1813980'>also</span> <span m='1814270'>be
  a</span> <span m='1814420'>support</span> <span m='1814780'>vector.</span>
  </p><p><span m='1815540'>So</span> <span m='1817320'>we</span> <span
  m='1817470'>can't</span> <span m='1817870'>just</span> <span
  m='1818120'>draw</span> <span m='1818310'>this</span> <span
  m='1818630'>line.</span> <span m='1820090'>We</span> <span
  m='1820220'>have</span> <span m='1820480'>to</span> <span
  m='1820560'>include</span> <span m='1820920'>this.</span> <span
  m='1821810'>What's</span> <span m='1822060'>our</span> <span
  m='1822200'>best</span> <span m='1822540'>division?</span> <span
  m='1825660'>Vertical</span> <span m='1826180'>lines,</span> <span
  m='1826620'>that's</span> <span m='1826870'>right.</span> <span
  m='1827800'>Vertical</span> <span m='1828270'>lines</span> <span
  m='1832430'>just</span> <span m='1832660'>so.</span> <span
  m='1834252'>And</span> <span m='1834720'>that</span> <span
  m='1834860'>means</span> <span m='1835140'>that</span> <span
  m='1837750'>the</span> <span m='1837850'>equation</span> <span
  m='1838180'>of</span> <span m='1838290'>our</span> <span
  m='1838570'>boundary,</span> <span m='1839100'>the</span> <span
  m='1839190'>dotted</span> <span m='1839450'>line</span> <span
  m='1839680'>here,</span> <span m='1841670'>y-axis.</span> <span
  m='1846180'>So</span> <span m='1846630'>the</span> <span
  m='1846700'>equation</span> <span m='1847020'>of</span> <span
  m='1847090'>the</span> <span m='1847140'>boundary</span> <span
  m='1847350'>with</span> <span m='1847520'>the</span> <span
  m='1847610'>y-axis,</span> <span m='1849030'>then</span> <span m='1849450'>b
  equals</span> <span m='1849940'>0.</span> <span m='1850770'>And</span> <span
  m='1850930'>hell,</span> <span m='1851320'>w2</span> <span
  m='1851840'>equals</span> <span m='1852200'>0.</span> <span
  m='1853490'>So</span> <span m='1853660'>the</span> <span
  m='1853790'>only</span> <span m='1854080'>thing</span> <span
  m='1854630'>that</span> <span m='1854980'>is</span> <span
  m='1855050'>not--</span> </p><p><span m='1855860'>AUDIENCE:  Wait,</span>
  <span m='1856345'>w1</span> <span m='1856830'>[INAUDIBLE].</span> </p><p><span
  m='1858770'>PROFESSOR: w2</span> <span m='1859290'>equals</span> <span
  m='1859590'>0.</span> <span m='1864460'>So</span> <span m='1865190'>w2</span>
  <span m='1865700'>equals</span> <span m='1865930'>0.</span> <span
  m='1866560'>b</span> <span m='1866800'>equals</span> <span
  m='1867040'>0.</span> <span m='1867490'>But</span> <span m='1867640'>w1</span>
  <span m='1868200'>is</span> <span m='1868370'>not</span> <span
  m='1868540'>equal</span> <span m='1868750'>to</span> <span
  m='1868800'>zero</span> <span m='1869670'>because</span> <span
  m='1872070'>it's</span> <span m='1872320'>just the</span> <span
  m='1872520'>equation</span> <span m='1872880'>of the</span> <span
  m='1872970'>y-axis.</span> <span m='1875070'>So</span> <span
  m='1876150'>we</span> <span m='1876320'>therefore</span> <span
  m='1876760'>know</span> <span m='1877150'>that</span> <span
  m='1877690'>the</span> <span m='1877770'>equation</span> <span
  m='1878220'>is</span> <span m='1878450'>just</span> <span
  m='1881270'>w1</span> <span m='1881840'>times</span> <span
  m='1882270'>x</span> <span m='1885480'>equals</span> <span
  m='1885730'>0.</span> <span m='1892420'>So</span> <span
  m='1892960'>it's</span> <span m='1893100'>w1</span> <span
  m='1893580'>times</span> <span m='1893880'>x</span> <span
  m='1894160'>equals</span> <span m='1894400'>0.</span> <span
  m='1895400'>And</span> <span m='1895510'>we</span> <span
  m='1895590'>know</span> <span m='1896660'>that</span> <span
  m='1896990'>that</span> <span m='1897320'>just</span> <span
  m='1897510'>means</span> <span m='1897850'>essentially</span> <span
  m='1898470'>that</span> <span m='1898640'>x</span> <span m='1898860'>is</span>
  <span m='1898940'>going</span> <span m='1899050'>to</span> <span
  m='1899090'>be</span> <span m='1899190'>some</span> <span
  m='1899460'>k.</span> <span m='1899980'>It's</span> <span
  m='1900090'>also</span> <span m='1900280'>going</span> <span
  m='1900380'>to</span> <span m='1900420'>be</span> <span
  m='1900480'>negative</span> <span m='1901100'>because</span> <span
  m='1901470'>of</span> <span m='1901610'>the</span> <span
  m='1901680'>fact</span> <span m='1901860'>that the</span> <span
  m='1902240'>pluses</span> <span m='1902450'>are</span> <span
  m='1902590'>still</span> <span m='1902870'>on</span> <span
  m='1903040'>the</span> <span m='1903130'>left.</span> </p><p><span
  m='1904400'>Then</span> <span m='1905940'>we're</span> <span
  m='1906090'>going</span> <span m='1906270'>to have to</span> <span
  m='1906450'>figure</span> <span m='1906620'>out</span> <span
  m='1906690'>what</span> <span m='1906820'>that</span> <span
  m='1906980'>k</span> <span m='1907210'>is.</span> <span
  m='1907610'>We'll</span> <span m='1907760'>use</span> <span
  m='1907960'>our</span> <span m='1908070'>old</span> <span
  m='1908340'>trick--</span> <span m='1909490'>by</span> <span
  m='1909600'>this</span> <span m='1909860'>point</span> <span
  m='1910110'>old,</span> <span m='1910420'>hopefully.</span> <span
  m='1911500'>One</span> <span m='1911730'>over</span> <span
  m='1911920'>magnitude</span> <span m='1912280'>of</span> <span
  m='1912340'>w</span> <span m='1912600'>equals</span> <span
  m='1912970'>d.</span> <span m='1914060'>This</span> <span
  m='1914270'>time</span> <span m='1914560'>d is just</span> <span
  m='1914960'>1.</span> <span m='1918650'>So</span> <span
  m='1918980'>therefore,</span> <span m='1919360'>magnitude</span> <span
  m='1919810'>of</span> <span m='1919850'>w</span> <span
  m='1920200'>equals</span> <span m='1920510'>1.</span> <span
  m='1922050'>There's</span> <span m='1922280'>only</span> <span
  m='1922480'>one</span> <span m='1922720'>component</span> <span
  m='1923250'>in</span> <span m='1923400'>w.</span> <span m='1924450'>So</span>
  <span m='1924910'>therefore</span> <span m='1925960'>w1</span> <span
  m='1926530'>is</span> </p><p><span m='1927000'>AUDIENCE:</span> <span
  m='1927453'>-1.</span> </p><p><span m='1928360'>PROFESSOR: -1</span> <span
  m='1929300'>because</span> <span m='1929590'>the</span> <span
  m='1929670'>plus</span> <span m='1929950'>is</span> <span m='1930080'>on
  the</span> <span m='1930160'>left.</span> <span m='1932330'>Do</span> <span
  m='1932770'>people</span> <span m='1933090'>see</span> <span
  m='1933260'>that?</span> <span m='1933900'>Not</span> <span
  m='1934030'>too</span> <span m='1934210'>bad.</span> <span
  m='1934810'>This</span> <span m='1934980'>one's</span> <span
  m='1935260'>easy</span> <span m='1935540'>to</span> <span
  m='1935620'>calculate</span> <span m='1936010'>the</span> <span
  m='1936110'>w.</span> <span m='1936563'>But</span> <span
  m='1937900'>it's</span> <span m='1938170'>not</span> <span
  m='1938510'>as</span> <span m='1938720'>easy</span> <span
  m='1938970'>to</span> <span m='1939030'>get</span> <span
  m='1939240'>all</span> <span m='1939470'>the</span> <span
  m='1939620'>alphas.</span> <span m='1940460'>But</span> <span
  m='1940860'>let's</span> <span m='1941090'>move</span> <span
  m='1941290'>on</span> <span m='1941520'>to</span> <span m='1942390'>a</span>
  <span m='1942490'>new</span> <span m='1943040'>and</span> <span
  m='1943220'>even</span> <span m='1943450'>more</span> <span
  m='1943740'>fun--</span> <span m='1945240'>maybe</span> <span
  m='1945460'>not--</span> <span m='1947110'>question,</span> <span
  m='1948480'>which</span> <span m='1948800'>is</span> <span
  m='1949570'>this</span> <span m='1949810'>guy.</span> <span m='1950920'>As
  you</span> <span m='1951320'>can</span> <span m='1951440'>see--</span> <span
  m='1953140'>well</span> <span m='1953380'>maybe</span> <span
  m='1953620'>not.</span> <span m='1954100'>This</span> <span m='1954280'>is
  a</span> <span m='1954390'>one</span> <span m='1954670'>dimensional</span>
  <span m='1955250'>vector.</span> <span m='1956960'>These</span> <span
  m='1957220'>vectors</span> <span m='1957610'>only</span> <span
  m='1957800'>have</span> <span m='1957920'>a</span> <span
  m='1957980'>single</span> <span m='1958380'>dimension.</span> <span
  m='1958970'>So</span> <span m='1959020'>it just</span> <span
  m='1959210'>looks</span> <span m='1959350'>like</span> <span
  m='1959440'>a</span> <span m='1959520'>number</span> <span
  m='1959860'>line</span> <span m='1960150'>here.</span> <span
  m='1961380'>That</span> <span m='1961650'>dimension</span> <span
  m='1962130'>varies</span> <span m='1962530'>from</span> <span
  m='1962970'>it</span> <span m='1963090'>looks</span> <span
  m='1963310'>like</span> <span m='1963480'>-9</span> <span
  m='1964230'>to</span> <span m='1964340'>positive</span> <span
  m='1964750'>9.</span> <span m='1966610'>It</span> <span
  m='1966850'>just</span> <span m='1967010'>has</span> <span
  m='1967140'>one</span> <span m='1967410'>component.</span> <span
  m='1968500'>You</span> <span m='1968570'>don't</span> <span
  m='1968910'>have</span> <span m='1969000'>to</span> <span
  m='1969090'>worry</span> <span m='1969250'>about</span> <span
  m='1969420'>any</span> <span m='1969620'>of</span> <span
  m='1969710'>these</span> <span m='1969990'>crazy</span> <span
  m='1970310'>magnitudes</span> <span m='1970705'>with</span> <span
  m='1971100'>two</span> <span m='1971250'>components,</span> <span
  m='1972510'>just</span> <span m='1972840'>everything</span> <span
  m='1973530'>as</span> <span m='1973700'>a</span> <span
  m='1973740'>single</span> <span m='1974000'>component.</span> </p><p><span
  m='1975100'>However,</span> <span m='1975840'>it's</span> <span
  m='1976020'>obvious</span> <span m='1976520'>that</span> <span
  m='1976700'>a</span> <span m='1976790'>linear</span> <span
  m='1978230'>basis</span> <span m='1979300'>line</span> <span
  m='1979760'>is</span> <span m='1979940'>going</span> <span
  m='1980130'>to</span> <span m='1980370'>completely</span> <span
  m='1981100'>screw us</span> <span m='1981490'>up</span> <span
  m='1981670'>here,</span> <span m='1981890'>since</span> <span
  m='1982810'>lines</span> <span m='1983560'>at</span> <span
  m='1983730'>this</span> <span m='1983870'>point</span> <span m='1984150'>are
  just</span> <span m='1984260'>like,</span> <span m='1984720'>grunk,</span>
  <span m='1985090'>all</span> <span m='1985450'>these</span> <span
  m='1985610'>are</span> <span m='1985690'>pluses.</span> <span
  m='1986130'>All</span> <span m='1986310'>these</span> <span
  m='1986470'>are</span> <span m='1986530'>minuses.</span> <span
  m='1986940'>Well,</span> <span m='1987250'>great,</span> <span
  m='1987570'>that</span> <span m='1987700'>doesn't</span> <span
  m='1987910'>get</span> <span m='1988070'>them</span> <span
  m='1988210'>all.</span> <span m='1988860'>So</span> <span
  m='1989010'>how</span> <span m='1989240'>are we going to</span> <span
  m='1989470'>do</span> <span m='1989690'>it?</span> <span
  m='1990570'>Well,</span> <span m='1991010'>we're</span> <span
  m='1991130'>going</span> <span m='1991290'>to</span> <span
  m='1991330'>use</span> <span m='1991610'>what</span> <span
  m='1991800'>is</span> <span m='1991950'>usually</span> <span
  m='1992340'>perhaps</span> <span m='1992680'>the</span> <span
  m='1992770'>hardest</span> <span m='1993180'>thing</span> <span
  m='1993440'>in</span> <span m='1993610'>SVMs,</span> <span
  m='1994060'>but</span> <span m='1994330'>in</span> <span
  m='1994410'>this</span> <span m='1994570'>case</span> <span
  m='1994840'>is</span> <span m='1994950'>not</span> <span
  m='1995180'>going</span> <span m='1995330'>to</span> <span
  m='1995520'>be</span> <span m='1995660'>too</span> <span
  m='1995800'>bad</span> <span m='1996140'>for</span> <span
  m='1996260'>us.</span> <span m='1997010'>We're</span> <span
  m='1997120'>going</span> <span m='1997290'>to</span> <span
  m='1997330'>use</span> <span m='1997940'>a</span> <span
  m='1998070'>kernel.</span> </p><p><span m='1999520'>Now,</span> <span
  m='2000830'>based</span> <span m='2001200'>on</span> <span
  m='2001550'>how</span> <span m='2001760'>little</span> <span
  m='2002060'>I</span> <span m='2002180'>understood</span> <span
  m='2002780'>kernels</span> <span m='2003160'>the</span> <span
  m='2003230'>first</span> <span m='2003540'>time</span> <span
  m='2004980'>I</span> <span m='2005130'>took</span> <span
  m='2005290'>this</span> <span m='2005470'>class,</span> <span
  m='2006320'>I'm</span> <span m='2006440'>guessing</span> <span
  m='2006870'>that</span> <span m='2006990'>you</span> <span
  m='2007100'>guys</span> <span m='2007610'>would</span> <span
  m='2007760'>like</span> <span m='2007970'>to have</span> <span
  m='2008160'>some</span> <span m='2008240'>explanation</span> <span
  m='2008890'>on</span> <span m='2009210'>these</span> <span
  m='2009520'>kernels.</span> <span m='2010750'>You</span> <span
  m='2010920'>probably</span> <span m='2011300'>saw them.</span> <span
  m='2011630'>You</span> <span m='2011870'>remember</span> <span
  m='2012230'>the</span> <span m='2012350'>kernels</span> <span
  m='2012950'>from</span> <span m='2013660'>Patrick's</span> <span
  m='2014030'>lecture</span> <span m='2014440'>vaguely?</span> <span
  m='2015070'>There's</span> <span m='2015490'>this</span> <span
  m='2015670'>phi.</span> <span m='2016120'>And</span> <span
  m='2016270'>then</span> <span m='2016390'>there's</span> <span
  m='2016560'>this</span> <span m='2016730'>k.</span> <span
  m='2017160'>And</span> <span m='2017450'>then</span> <span
  m='2017680'>they</span> <span m='2017980'>get</span> <span
  m='2018190'>really</span> <span m='2018410'>complicated.</span> </p><p><span
  m='2019730'>OK,</span> <span m='2020450'>so</span> <span
  m='2021330'>here's</span> <span m='2021850'>how</span> <span
  m='2022130'>the</span> <span m='2022410'>kernel</span> <span
  m='2022590'>works.</span> <span m='2023420'>The</span> <span
  m='2023520'>basic</span> <span m='2023930'>idea</span> <span
  m='2024300'>is</span> <span m='2024510'>this.</span> <span
  m='2025660'>And</span> <span m='2025810'>I'll</span> <span
  m='2026190'>write</span> <span m='2026440'>it</span> <span
  m='2029750'>over</span> <span m='2030010'>here.</span> <span
  m='2031420'>Oh,</span> <span m='2031710'>wow,</span> <span
  m='2031990'>there's</span> <span m='2032270'>more</span> <span
  m='2032480'>stuff.</span> <span m='2033030'>OK.</span> <span
  m='2033750'>I'll</span> <span m='2033920'>write</span> <span
  m='2034060'>it</span> <span m='2034150'>right</span> <span
  m='2034360'>here.</span> <span m='2034780'>The</span> <span
  m='2034860'>basic</span> <span m='2035280'>idea</span> <span
  m='2035770'>is</span> <span m='2036040'>this.</span> <span
  m='2036730'>We're</span> <span m='2036920'>taking</span> <span
  m='2038180'>the</span> <span m='2038490'>normal</span> <span
  m='2038890'>space,</span> <span m='2040240'>which</span> <span
  m='2040510'>is</span> <span m='2041055'>this</span> <span
  m='2041310'>number</span> <span m='2041580'>line</span> <span m='2041910'>or
  it</span> <span m='2042070'>could</span> <span m='2042250'>be</span> <span
  m='2042390'>any</span> <span m='2042610'>kind of</span> <span
  m='2042860'>normal</span> <span m='2043130'>space,</span> <span
  m='2044100'>and</span> <span m='2044230'>we're</span> <span
  m='2044340'>going</span> <span m='2044570'>to</span> <span
  m='2044710'>take</span> <span m='2044960'>a</span> <span
  m='2045010'>vector,</span> <span m='2046100'>we're</span> <span
  m='2046370'>going</span> <span m='2046460'>to</span> <span
  m='2046520'>put</span> <span m='2046840'>into</span> <span
  m='2047080'>it</span> <span m='2048179'>a</span> <span
  m='2048949'>function</span> <span m='2049330'>called</span> <span
  m='2049820'>phi.</span> <span m='2051230'>And</span> <span
  m='2051440'>phi</span> <span m='2051949'>of</span> <span
  m='2052370'>vector</span> <span m='2052739'>x</span> <span
  m='2053134'>brings</span> <span m='2053530'>x</span> <span
  m='2053870'>into</span> <span m='2054080'>some</span> <span
  m='2054389'>new</span> <span m='2054540'>dimension.</span> </p><p><span
  m='2056120'>Phi,</span> <span m='2056659'>or</span> <span
  m='2056810'>"phee"</span> <span m='2057090'>if</span> <span
  m='2057219'>you</span> <span m='2057350'>like</span> <span
  m='2057550'>it</span> <span m='2057659'>better,</span> <span
  m='2058659'>is</span> <span m='2058790'>usually</span> <span
  m='2059159'>a</span> <span m='2059210'>nasty</span> <span
  m='2059780'>piece</span> <span m='2060000'>of</span> <span
  m='2060120'>work</span> <span m='2060760'>and</span> <span
  m='2061060'>something</span> <span m='2061400'>you</span> <span
  m='2061520'>never,</span> <span m='2062000'>ever</span> <span
  m='2062239'>want</span> <span m='2062420'>to</span> <span
  m='2062460'>look</span> <span m='2062699'>at.</span> <span
  m='2062929'>Sometimes</span> <span m='2063229'>it's</span> <span
  m='2063530'>not</span> <span m='2063710'>too</span> <span
  m='2063830'>bad.</span> <span m='2064820'>Phi</span> <span
  m='2065130'>is</span> <span m='2065340'>the</span> <span
  m='2065440'>function</span> <span m='2065880'>that</span> <span
  m='2065949'>brings</span> <span m='2066239'>it</span> <span
  m='2066320'>into</span> <span m='2066540'>the</span> <span
  m='2066620'>new</span> <span m='2066770'>dimension.</span> <span
  m='2067679'>OK?</span> <span m='2069224'>And</span> <span
  m='2069679'>when</span> <span m='2069870'>you</span> <span
  m='2069940'>brought</span> <span m='2070300'>the</span> <span
  m='2070370'>data</span> <span m='2070600'>into</span> <span
  m='2070810'>a</span> <span m='2070860'>new</span> <span
  m='2071060'>dimension,</span> <span m='2071730'>sometimes</span> <span
  m='2072190'>you</span> <span m='2072290'>can</span> <span
  m='2072400'>just</span> <span m='2072590'>cut</span> <span
  m='2072860'>a</span> <span m='2072920'>straight</span> <span
  m='2073210'>line</span> <span m='2073530'>in</span> <span
  m='2073600'>that</span> <span m='2073800'>dimension</span> <span
  m='2074070'>and</span> <span m='2074340'>you'll</span> <span m='2074610'>just
  be</span> <span m='2074949'>happy.</span> </p><p><span
  m='2076699'>However,</span> <span m='2079219'>something</span> <span
  m='2079630'>that</span> <span m='2079719'>was</span> <span
  m='2079870'>noted</span> <span m='2082159'>by</span> <span
  m='2084510'>the</span> <span m='2084659'>very,</span> <span
  m='2085120'>very</span> <span m='2085270'>smart</span> <span
  m='2085690'>inventor</span> <span m='2085954'>of</span> <span
  m='2086219'>support</span> <span m='2086370'>vector</span> <span
  m='2086739'>machines</span> <span m='2088449'>is</span> <span
  m='2088730'>that</span> <span m='2089030'>you</span> <span
  m='2089199'>don't</span> <span m='2089730'>actually</span> <span
  m='2090190'>need</span> <span m='2092179'>to</span> <span
  m='2092270'>work</span> <span m='2092810'>with</span> <span
  m='2093280'>function</span> <span m='2093679'>phi,</span> <span
  m='2094710'>even</span> <span m='2094929'>if</span> <span
  m='2095050'>phi</span> <span m='2095270'>is</span> <span m='2095429'>an</span>
  <span m='2095590'>absolutely</span> <span m='2096530'>horrible</span> <span
  m='2096909'>monstrosity,</span> <span m='2098270'>because</span> <span
  m='2098740'>of</span> <span m='2098840'>the</span> <span
  m='2098940'>fact</span> <span m='2099140'>that</span> <span
  m='2099940'>you</span> <span m='2100080'>never</span> <span
  m='2100460'>need</span> <span m='2100900'>to</span> <span
  m='2101030'>know</span> <span m='2103960'>what</span> <span
  m='2104180'>all</span> <span m='2104370'>these</span> <span
  m='2104540'>vectors</span> <span m='2104850'>x</span> <span
  m='2105660'>actually</span> <span m='2106320'>are</span> <span
  m='2107330'>in</span> <span m='2107480'>the</span> <span
  m='2107570'>new</span> <span m='2107770'>space,</span> <span
  m='2108850'>at</span> <span m='2108950'>least</span> <span
  m='2109220'>not</span> <span m='2109440'>directly.</span> <span
  m='2110400'>In</span> <span m='2110680'>none</span> <span
  m='2110900'>of</span> <span m='2111000'>these</span> <span
  m='2111150'>equations</span> <span m='2111620'>up</span> <span
  m='2111780'>here</span> <span m='2111930'>do</span> <span
  m='2112010'>we</span> <span m='2112100'>ever</span> <span
  m='2112340'>use</span> <span m='2112630'>x</span> <span m='2112990'>by</span>
  <span m='2113180'>itself.</span> <span m='2114720'>However,</span> <span
  m='2115040'>we</span> <span m='2115190'>do</span> <span m='2115510'>use</span>
  <span m='2116410'>x</span> <span m='2116745'>being</span> <span
  m='2117080'>dot</span> <span m='2117410'>product</span> <span
  m='2117780'>with</span> <span m='2117900'>something</span> <span
  m='2118230'>else.</span> <span m='2119440'>So</span> <span
  m='2119480'>he</span> <span m='2119700'>figured</span> <span
  m='2120000'>out</span> <span m='2120710'>a</span> <span
  m='2120790'>very</span> <span m='2121070'>sneaky</span> <span
  m='2121750'>and</span> <span m='2122290'>excellent</span> <span
  m='2123390'>shortcut.</span> </p><p><span m='2126580'>OK,</span> <span
  m='2127120'>so--</span> <span m='2128330'>oh,</span> <span m='2128620'>I
  shouldn't</span> <span m='2129010'>use x1</span> <span m='2129160'>and</span>
  <span m='2129370'>x2.</span> <span m='2129510'>I'll</span> <span
  m='2129860'>use</span> <span m='2131020'>x</span> <span m='2131780'>and</span>
  <span m='2133940'>z.</span> <span m='2135530'>So if</span> <span
  m='2135770'>you</span> <span m='2135840'>have</span> <span
  m='2136030'>two</span> <span m='2136200'>vectors,</span> <span
  m='2136650'>x</span> <span m='2136860'>and</span> <span m='2137050'>z,</span>
  <span m='2137690'>which</span> <span m='2137910'>are in</span> <span
  m='2138150'>a</span> <span m='2138455'>regular</span> <span
  m='2138760'>space,</span> <span m='2139660'>you</span> <span
  m='2139770'>put</span> <span m='2139940'>them</span> <span
  m='2140140'>into</span> <span m='2140340'>this</span> <span
  m='2140490'>function</span> <span m='2140620'>called</span> <span
  m='2140810'>the</span> <span m='2140950'>kernel.</span> <span
  m='2142650'>Then</span> <span m='2144260'>it</span> <span
  m='2144440'>will</span> <span m='2144710'>tell</span> <span
  m='2144980'>you</span> <span m='2147270'>phi</span> <span m='2147480'>x</span>
  <span m='2151560'>dotted</span> <span m='2152030'>with</span> <span
  m='2152180'>phi</span> <span m='2152555'>z.</span> <span m='2155120'>And
  if</span> <span m='2155310'>you</span> <span m='2155440'>have</span> <span
  m='2155660'>that,</span> <span m='2156750'>you</span> <span
  m='2156900'>don't</span> <span m='2157090'>need</span> <span
  m='2157270'>phi.</span> <span m='2159920'>Does</span> <span
  m='2160090'>everyone</span> <span m='2160200'>see</span> <span
  m='2160330'>that?</span> <span m='2161020'>Does</span> <span
  m='2161160'>everyone</span> <span m='2161410'>see</span> <span
  m='2161580'>why</span> <span m='2161690'>we</span> <span
  m='2161830'>don't</span> <span m='2162040'>need</span> <span
  m='2162240'>phi?</span> <span m='2162600'>Look</span> <span
  m='2162800'>at</span> <span m='2162840'>all</span> <span
  m='2162990'>these</span> <span m='2163140'>equations</span> <span
  m='2163510'>up</span> <span m='2163670'>here.</span> <span
  m='2163880'>We</span> <span m='2164000'>have</span> <span
  m='2164120'>never</span> <span m='2164390'>looked</span> <span
  m='2164600'>at</span> <span m='2164680'>x</span> <span m='2165040'>by</span>
  <span m='2165170'>itself</span> <span m='2167770'>in</span> <span
  m='2168020'>these</span> <span m='2168660'>vector</span> <span
  m='2169310'>equations</span> <span m='2170010'>at least.</span> </p><p><span
  m='2172390'>Now,</span> <span m='2172900'>calculating</span> <span
  m='2173390'>alphas,</span> <span m='2173940'>yeah,</span> <span
  m='2174470'>that</span> <span m='2174650'>gets</span> <span
  m='2174840'>a</span> <span m='2174890'>little bit</span> <span
  m='2175180'>fuzzy.</span> <span m='2178650'>Also,</span> <span
  m='2179320'>you</span> <span m='2179410'>may</span> <span
  m='2179530'>ask,</span> <span m='2180340'>why</span> <span
  m='2180600'>would</span> <span m='2180750'>you</span> <span
  m='2180820'>do</span> <span m='2180960'>this?</span> <span
  m='2181240'>You</span> <span m='2181390'>can't</span> <span
  m='2181600'>calculate</span> <span m='2181960'>the</span> <span
  m='2182180'>alphas.</span> <span m='2182720'>It</span> <span
  m='2182860'>turns</span> <span m='2183130'>out</span> <span
  m='2184440'>that</span> <span m='2186320'>actually,</span> <span
  m='2188320'>other</span> <span m='2188550'>than</span> <span
  m='2188740'>for</span> <span m='2188860'>these</span> <span
  m='2189020'>very</span> <span m='2189200'>simple</span> <span
  m='2189510'>linear</span> <span m='2189770'>problems,</span> <span
  m='2190160'>human</span> <span m='2190430'>minds</span> <span
  m='2190890'>cannot</span> <span m='2191340'>calculate</span> <span
  m='2191800'>the</span> <span m='2191870'>alphas.</span> <span
  m='2192740'>In</span> <span m='2192860'>fact,</span> <span
  m='2193260'>you</span> <span m='2194450'>run</span> <span m='2194750'>a</span>
  <span m='2194830'>very</span> <span m='2195160'>complicated</span> <span
  m='2195830'>quadratic</span> <span m='2196320'>optimization.</span> <span
  m='2196785'>In</span> <span m='2197250'>fact,</span> <span
  m='2197490'>finding</span> <span m='2197760'>out</span> <span
  m='2197910'>the</span> <span m='2197980'>best</span> <span
  m='2198260'>alphas</span> <span m='2199090'>is</span> <span
  m='2200140'>the</span> <span m='2200370'>thing</span> <span
  m='2200990'>that</span> <span m='2201140'>you</span> <span
  m='2201270'>hill</span> <span m='2201450'>climb</span> <span
  m='2201760'>on</span> <span m='2202470'>when</span> <span
  m='2202640'>you're</span> <span m='2202720'>doing</span> <span
  m='2203070'>SVMs</span> <span m='2203710'>in</span> <span
  m='2203830'>the</span> <span m='2203940'>real</span> <span
  m='2204130'>world.</span> <span m='2204440'>You</span> <span
  m='2204540'>say,</span> <span m='2205250'>all</span> <span
  m='2205380'>right,</span> <span m='2205560'>I'll</span> <span
  m='2205590'>run</span> <span m='2205860'>my</span> <span
  m='2206790'>algorithm</span> <span m='2207075'>when</span> <span
  m='2207360'>I</span> <span m='2207420'>know</span> <span
  m='2207600'>there's</span> <span m='2207730'>only</span> <span
  m='2207910'>one</span> <span m='2208220'>peak,</span> <span
  m='2208570'>which</span> <span m='2208770'>is</span> <span
  m='2208860'>very,</span> <span m='2209220'>very</span> <span
  m='2209370'>good</span> <span m='2209730'>because it's</span> <span
  m='2209930'>quadratic</span> <span m='2210430'>optimization.</span> <span
  m='2211430'>Let</span> <span m='2211620'>me</span> <span
  m='2211700'>figure</span> <span m='2211970'>out</span> <span
  m='2212140'>the</span> <span m='2212220'>alphas.</span> </p><p><span
  m='2213080'>So</span> <span m='2213790'>in</span> <span
  m='2213910'>fact,</span> <span m='2214130'>it</span> <span
  m='2214210'>doesn't</span> <span m='2214460'>matter</span> <span
  m='2214740'>that</span> <span m='2214890'>you</span> <span
  m='2215010'>can't</span> <span m='2215650'>use</span> <span
  m='2215850'>these</span> <span m='2216010'>alpha</span> <span
  m='2216370'>equations</span> <span m='2216750'>to</span> <span
  m='2216840'>figure</span> <span m='2217100'>out</span> <span
  m='2217290'>the</span> <span m='2217460'>alphas</span> <span
  m='2220740'>if</span> <span m='2220810'>you</span> <span
  m='2220930'>only</span> <span m='2221110'>know</span> <span
  m='2221210'>the</span> <span m='2221320'>kernel</span> <span
  m='2221560'>function</span> <span m='2221830'>and not</span> <span
  m='2221900'>the</span> <span m='2221970'>phi</span> <span
  m='2222070'>function</span> <span m='2222480'>because</span> <span
  m='2223920'>normally,</span> <span m='2224750'>the</span> <span
  m='2224830'>computer</span> <span m='2225280'>figures</span> <span
  m='2225630'>out</span> <span m='2225740'>the alphas</span> <span
  m='2226520'>for</span> <span m='2226770'>you</span> <span
  m='2227690'>with</span> <span m='2227930'>quadratic</span> <span
  m='2228250'>optimization.</span> <span m='2229280'>Just</span> <span
  m='2229480'>in</span> <span m='2229550'>these</span> <span
  m='2229720'>simple</span> <span m='2230040'>problems,</span> <span
  m='2230440'>we</span> <span m='2230540'>know</span> <span
  m='2230650'>you</span> <span m='2230800'>can</span> <span
  m='2230980'>calculate</span> <span m='2231190'>the</span> <span
  m='2231350'>alphas.</span> </p><p><span m='2232400'>So</span> <span
  m='2233570'>we</span> <span m='2233710'>have</span> <span
  m='2233890'>the</span> <span m='2234000'>kernel,</span> <span
  m='2234770'>which</span> <span m='2236000'>basically</span> <span
  m='2236780'>gives</span> <span m='2237010'>us</span> <span
  m='2237120'>the</span> <span m='2237220'>dot</span> <span
  m='2237500'>product</span> <span m='2237840'>of</span> <span
  m='2238000'>the</span> <span m='2238090'>things</span> <span
  m='2238390'>in</span> <span m='2238550'>the new</span> <span
  m='2238700'>space.</span> <span m='2239500'>So</span> <span
  m='2240120'>being</span> <span m='2240310'>that</span> <span
  m='2240470'>as</span> <span m='2240560'>it</span> <span
  m='2240660'>may,</span> <span m='2241010'>I'll</span> <span
  m='2241230'>give</span> <span m='2241400'>you</span> <span
  m='2241490'>the</span> <span m='2241600'>kernel</span> <span
  m='2241960'>here.</span> <span m='2242200'>I'd</span> <span
  m='2242310'>like</span> <span m='2242510'>you</span> <span
  m='2242670'>give</span> <span m='2242810'>me</span> <span
  m='2243020'>phi.</span> <span m='2246670'>Someone</span> <span
  m='2247250'>got</span> <span m='2247440'>an</span> <span
  m='2247510'>idea,</span> <span m='2248280'>whose</span> <span
  m='2248490'>name</span> <span m='2248640'>was</span> <span
  m='2248760'>Susan</span> <span m='2249130'>Q.</span> <span
  m='2249380'>Random</span> <span m='2249670'>Student,</span> <span
  m='2250180'>apparently.</span> <span m='2251360'>She</span> <span
  m='2251550'>got</span> <span m='2251750'>an</span> <span
  m='2251820'>idea</span> <span m='2252210'>that</span> <span
  m='2252840'>if</span> <span m='2252970'>we</span> <span m='2253110'>had
  a</span> <span m='2253380'>kernel</span> <span m='2254730'>for</span> <span
  m='2256650'>x</span> <span m='2257130'>and</span> <span m='2257320'>z--</span>
  <span m='2257570'>actually,</span> <span m='2257980'>they're</span> <span
  m='2258160'>not</span> <span m='2258400'>vectors,</span> <span
  m='2258840'>I</span> <span m='2258940'>guess.</span> <span
  m='2259210'>There</span> <span m='2259360'>just</span> <span
  m='2260120'>single</span> <span m='2261020'>components.</span> <span
  m='2263430'>And</span> <span m='2263570'>the</span> <span
  m='2263650'>kernel</span> <span m='2264010'>equals</span> <span
  m='2265530'>cosine</span> <span m='2266240'>Pi</span> <span
  m='2266610'>over</span> <span m='2267010'>4x</span> <span
  m='2270100'>times</span> <span m='2272330'>cosine</span> <span
  m='2273120'>Pi</span> <span m='2273280'>over</span> <span m='2273500'>4</span>
  <span m='2275500'>z</span> <span m='2276250'>plus</span> <span
  m='2279520'>sine</span> <span m='2281530'>Pi</span> <span
  m='2281710'>over</span> <span m='2282100'>4x</span> <span
  m='2284260'>plus</span> <span m='2284900'>sine</span> <span
  m='2286470'>Pi</span> <span m='2286660'>over</span> <span
  m='2286880'>4z.</span> </p><p><span m='2290630'>So</span> <span
  m='2290830'>that</span> <span m='2291930'>is</span> <span
  m='2292970'>the</span> <span m='2293070'>new dot</span> <span
  m='2293290'>product.</span> <span m='2296180'>Oh,</span> <span
  m='2296450'>wait,</span> <span m='2296820'>sorry.</span> <span
  m='2297090'>I</span> <span m='2297160'>put</span> <span m='2297720'>one</span>
  <span m='2297900'>of</span> <span m='2297990'>the</span> <span
  m='2299210'>z's</span> <span m='2299570'>not</span> <span
  m='2299850'>inside</span> <span m='2300210'>the</span> <span
  m='2300630'>parentheses.</span> <span m='2301030'>That was</span> <span
  m='2301395'>silly of me.</span> <span m='2302340'>So</span> <span
  m='2304130'>cosine</span> <span m='2304740'>of</span> <span
  m='2304950'>the</span> <span m='2305030'>quantity</span> <span
  m='2305520'>pi</span> <span m='2305650'>Over</span> <span
  m='2305830'>4x</span> <span m='2307340'>times</span> <span
  m='2308220'>cosine</span> <span m='2308490'>of</span> <span
  m='2308560'>the</span> <span m='2308640'>quantity</span> <span
  m='2309040'>Pi</span> <span m='2309170'>over</span> <span
  m='2309320'>4z</span> <span m='2310070'>plus</span> <span
  m='2310500'>sine</span> <span m='2310720'>of</span> <span
  m='2310860'>quantity</span> <span m='2311180'>Pi</span> <span
  m='2311300'>over</span> <span m='2311450'>4x</span> <span
  m='2311920'>plus</span> <span m='2312160'>sine</span> <span
  m='2312360'>of</span> <span m='2312710'>quantity</span> <span
  m='2313140'>Pi</span> <span m='2313250'>over</span> <span
  m='2313490'>4z</span> <span m='2314960'>is the</span> <span
  m='2315260'>new</span> <span m='2315420'>product.</span> <span m='2316480'>So
  that</span> <span m='2316660'>begs</span> <span m='2316910'>the</span> <span
  m='2317000'>question.</span> <span m='2317910'>This</span> <span
  m='2318170'>is</span> <span m='2318310'>an</span> <span
  m='2318450'>easy</span> <span m='2318770'>one</span> <span
  m='2319400'>so</span> <span m='2319550'>we</span> <span m='2319660'>can</span>
  <span m='2320120'>calculate</span> <span m='2320540'>the</span> <span
  m='2320630'>phi.</span> <span m='2322150'>What</span> <span
  m='2322460'>is</span> <span m='2323770'>phi</span> <span m='2324560'>of</span>
  <span m='2324955'>x?</span> </p><p><span m='2327620'>We're</span> <span
  m='2327800'>actually</span> <span m='2329950'>taking</span> <span
  m='2330200'>it</span> <span m='2330330'>from</span> <span
  m='2330520'>one</span> <span m='2330700'>dimension</span> <span
  m='2331025'>and we</span> <span m='2331350'>may be</span> <span
  m='2331670'>playing</span> <span m='2332000'>around</span> <span
  m='2332290'>with</span> <span m='2332450'>it</span> <span m='2332550'>a</span>
  <span m='2332620'>lot</span> <span m='2333260'>to</span> <span
  m='2333410'>get</span> <span m='2333670'>this.</span> <span
  m='2333890'>And</span> <span m='2334080'>this</span> <span
  m='2334290'>thing</span> <span m='2334620'>has</span> <span m='2334710'>become
  a</span> <span m='2335050'>new</span> <span m='2335220'>dot</span> <span
  m='2335490'>product.</span> <span m='2336910'>It</span> <span
  m='2337020'>replaces</span> <span m='2337550'>dot</span> <span
  m='2337800'>product.</span> <span m='2338710'>And</span> <span
  m='2338790'>remember,</span> <span m='2339110'>the</span> <span
  m='2339260'>dot product</span> <span m='2339700'>for</span> <span
  m='2339840'>scalars</span> <span m='2340240'>would</span> <span
  m='2340430'>have just</span> <span m='2340590'>been</span> <span
  m='2340670'>multiplying</span> <span m='2341320'>two</span> <span
  m='2341440'>numbers</span> <span m='2341790'>together.</span> <span
  m='2342750'>So</span> <span m='2342820'>it</span> <span
  m='2342970'>actually</span> <span m='2343180'>makes</span> <span
  m='2343380'>it</span> <span m='2343480'>a</span> <span
  m='2343580'>little</span> <span m='2343650'>bit</span> <span
  m='2343800'>more</span> <span m='2344090'>complicated.</span> <span
  m='2344660'>Does</span> <span m='2344740'>anyone</span> <span
  m='2345060'>think</span> <span m='2345220'>they</span> <span
  m='2345320'>know</span> <span m='2345520'>the</span> <span
  m='2345650'>phi?</span> <span m='2347650'>Oh,</span> <span m='2348090'>we
  got</span> <span m='2348280'>one.</span> <span m='2348930'>What do</span>
  <span m='2349030'>you think?</span> </p><p><span m='2349896'>AUDIENCE:</span>
  <span m='2350392'>[INAUDIBLE]</span> </p><p><span m='2353870'>PROFESSOR: You
  mean</span> <span m='2354200'>two</span> <span m='2354530'>common</span> <span
  m='2354920'>vectors,</span> <span m='2355356'>two</span> <span
  m='2355574'>dimensional?</span> </p><p><span m='2356228'>AUDIENCE:  The</span>
  <span m='2356664'>two points.</span> </p><p><span m='2357540'>PROFESSOR:
  Absolutely.</span> <span m='2359040'>That's</span> <span
  m='2359410'>exactly</span> <span m='2359900'>correct.</span> <span
  m='2362550'>How</span> <span m='2362810'>would</span> <span m='2362970'>you
  have</span> <span m='2363290'>solved</span> <span m='2363620'>this</span>
  <span m='2363800'>on</span> <span m='2363930'>the</span> <span
  m='2364010'>actual</span> <span m='2364560'>quiz</span> <span
  m='2365310'>if</span> <span m='2365480'>you're</span> <span
  m='2365620'>not</span> <span m='2367186'>our</span> <span
  m='2367570'>brave</span> <span m='2367860'>volunteer?</span> </p><p><span
  m='2368900'>Well,</span> <span m='2369910'>that</span> <span
  m='2370660'>k,</span> <span m='2370940'>if you</span> <span
  m='2371220'>squint</span> <span m='2371470'>at</span> <span
  m='2371640'>it--</span> <span m='2372320'>not</span> <span
  m='2372610'>very</span> <span m='2372810'>much</span> <span
  m='2373070'>actually--</span> <span m='2374330'>is</span> <span
  m='2374530'>pretty</span> <span m='2374720'>much</span> <span
  m='2374910'>a</span> <span m='2375000'>dot</span> <span
  m='2375330'>product</span> <span m='2375800'>between</span> <span
  m='2378520'>cosine</span> <span m='2379220'>of</span> <span
  m='2379290'>Pi</span> <span m='2379450'>over</span> <span m='2379600'>4</span>
  <span m='2380200'>and</span> <span m='2380560'>sine</span> <span
  m='2380870'>Pi</span> <span m='2381010'>over</span> <span
  m='2381160'>4.</span> <span m='2381570'>I mean,</span> <span m='2381770'>look
  at</span> <span m='2382030'>it.</span> <span m='2383070'>Remember,</span>
  <span m='2384080'>if</span> <span m='2384270'>the</span> <span
  m='2384380'>dot</span> <span m='2384600'>product</span> <span
  m='2384880'>of</span> <span m='2385030'>x</span> <span m='2385290'>and</span>
  <span m='2385450'>z</span> <span m='2385840'>vectors</span> <span
  m='2388310'>is</span> <span m='2388510'>x1,</span> <span m='2388980'>z1</span>
  <span m='2389290'>plus</span> <span m='2389860'>x2,</span> <span
  m='2390160'>z2--</span> <span m='2391200'>so</span> <span
  m='2391440'>that</span> <span m='2391720'>basically</span> <span
  m='2392130'>is</span> <span m='2392400'>x1,</span> <span m='2392920'>z1</span>
  <span m='2393520'>plus</span> <span m='2393770'>x2</span> <span
  m='2394080'>z2.</span> <span m='2396550'>Oh,</span> <span
  m='2396660'>this</span> <span m='2396830'>should</span> <span
  m='2396960'>have</span> <span m='2397030'>been</span> <span
  m='2397250'>a</span> <span m='2397400'>times.</span> <span m='2399490'>Yeah,
  this should</span> <span m='2399650'>have been a</span> <span
  m='2400050'>times.</span> <span m='2401190'>Sorry.</span> <span
  m='2401770'>There's</span> <span m='2401930'>a</span> <span
  m='2401980'>plus</span> <span m='2402250'>there.</span> <span
  m='2403090'>Anyone</span> <span m='2403470'>who</span> <span
  m='2403620'>missed</span> <span m='2403960'>it</span> <span
  m='2404100'>because</span> <span m='2404310'>of</span> <span
  m='2404410'>that,</span> <span m='2404990'>my</span> <span
  m='2405180'>bad.</span> <span m='2406060'>That's</span> <span
  m='2406290'>should have been a</span> <span m='2406610'>times.</span> <span
  m='2407140'>That should</span> <span m='2407380'>have been</span> <span
  m='2407420'>a</span> <span m='2407570'>times</span> <span
  m='2407800'>up</span> <span m='2407940'>there.</span> <span
  m='2409080'>It's</span> <span m='2409380'>cosine</span> <span
  m='2409830'>Pi</span> <span m='2409910'>over</span> <span
  m='2410050'>4x</span> <span m='2410390'>cosine</span> <span
  m='2410700'>Pi</span> <span m='2410870'>over</span> <span
  m='2411080'>4z</span> <span m='2411500'>plus</span> <span
  m='2412190'>sine</span> <span m='2412430'>Pi</span> <span
  m='2412580'>over</span> <span m='2412770'>4x</span> <span
  m='2413240'>times</span> <span m='2413510'>sine</span> <span
  m='2413900'>Pi</span> <span m='2414220'>over</span> <span
  m='2414320'>4z.</span> <span m='2415260'>So</span> <span m='2415730'>yeah,
  it's</span> <span m='2415890'>basically</span> <span m='2416380'>the</span>
  <span m='2416540'>dot</span> <span m='2416810'>product</span> <span
  m='2417040'>between</span> <span m='2417410'>cosine</span> <span
  m='2417690'>Pi over</span> <span m='2417970'>4x</span> <span
  m='2418230'>and</span> <span m='2418490'>sine</span> <span m='2418750'>Pi
  over</span> <span m='2419070'>4x.</span> <span m='2419420'>Bingo.</span>
  </p><p><span m='2420930'>All</span> <span m='2421090'>right,</span> <span
  m='2421510'>last</span> <span m='2422230'>thing.</span> <span
  m='2424250'>Well,</span> <span m='2424575'>we're</span> <span
  m='2424900'>not</span> <span m='2425160'>done</span> <span m='2425480'>yet
  because</span> <span m='2425800'>we're</span> <span m='2425890'>going</span>
  <span m='2426010'>to</span> <span m='2426430'>maybe</span> <span
  m='2426610'>ask</span> <span m='2426780'>some</span> <span
  m='2426900'>questions.</span> <span m='2427540'>And</span> <span
  m='2427850'>then</span> <span m='2427970'>we're</span> <span
  m='2428090'>going</span> <span m='2428190'>to</span> <span
  m='2428260'>see</span> <span m='2428370'>if</span> <span m='2428450'>we</span>
  <span m='2428590'>can calculate</span> <span m='2428860'>those</span> <span
  m='2429070'>alphas.</span> <span m='2429940'>But</span> <span
  m='2430110'>last</span> <span m='2430490'>thing,</span> <span
  m='2431200'>let's</span> <span m='2431490'>graph</span> <span
  m='2432260'>in</span> <span m='2432400'>this</span> <span
  m='2432600'>new</span> <span m='2433160'>dimension</span> <span
  m='2433850'>all</span> <span m='2434280'>the</span> <span
  m='2434640'>points.</span> <span m='2435610'>So</span> <span
  m='2436850'>obviously,</span> <span m='2437350'>cosines</span> <span
  m='2438270'>and</span> <span m='2438700'>sines,</span> <span
  m='2439920'>so</span> <span m='2440210'>we're</span> <span
  m='2440330'>going</span> <span m='2440470'>to</span> <span
  m='2440510'>get</span> <span m='2440860'>results</span> <span
  m='2441280'>between</span> <span m='2441800'>1</span> <span
  m='2442310'>and</span> <span m='2442640'>-1.</span> <span
  m='2444080'>Let's</span> <span m='2444390'>see.</span> <span
  m='2444550'>Maybe</span> <span m='2444800'>I</span> <span
  m='2444880'>can</span> <span m='2445080'>graph</span> <span
  m='2445460'>it--</span> <span m='2450920'>did</span> <span
  m='2451100'>I</span> <span m='2451130'>write</span> <span
  m='2451380'>on</span> <span m='2451590'>all</span> <span
  m='2452020'>these?</span> <span m='2455160'>Wait,</span> <span
  m='2456540'>maybe</span> <span m='2457520'>this</span> <span
  m='2457800'>one.</span> <span m='2459060'>No,</span> <span
  m='2459450'>people</span> <span m='2459780'>drew</span> <span
  m='2460160'>weird</span> <span m='2460410'>stick</span> <span
  m='2460550'>figures</span> <span m='2460950'>there.</span> <span
  m='2462050'>OK.</span> <span m='2465400'>Oh, yeah,</span> <span
  m='2465580'>this</span> <span m='2465730'>one's</span> <span m='2465880'>kind
  of</span> <span m='2466250'>messy.</span> <span m='2466550'>But</span> <span
  m='2466730'>we'll</span> <span m='2466880'>do</span> <span m='2467050'>it
  on</span> <span m='2467320'>this.</span> </p><p><span m='2468980'>OK,</span>
  <span m='2476410'>so</span> <span m='2476880'>this</span> <span
  m='2477110'>is</span> <span m='2477210'>1,</span> <span m='2477980'>-1,</span>
  <span m='2481050'>1/2,</span> <span m='2481360'>-1/2,</span> <span
  m='2483010'>1,</span> <span m='2483820'>-1,</span> <span
  m='2484520'>-1/2,</span> <span m='2485520'>1/2.</span> <span
  m='2486400'>OK?</span> <span m='2487460'>So</span> <span
  m='2489550'>given</span> <span m='2489820'>that,</span> <span
  m='2490410'>let's</span> <span m='2490610'>try</span> <span
  m='2490710'>to</span> <span m='2490770'>graph</span> <span
  m='2491140'>all</span> <span m='2491460'>these</span> <span
  m='2491680'>points</span> <span m='2492030'>on</span> <span
  m='2492110'>this</span> <span m='2492250'>number</span> <span
  m='2492500'>line</span> <span m='2493110'>into</span> <span
  m='2493380'>this</span> <span m='2495490'>brave</span> <span
  m='2495920'>new</span> <span m='2496560'>dimension</span> <span
  m='2497360'>by</span> <span m='2497630'>using</span> <span
  m='2497940'>their</span> <span m='2498080'>cosine</span> <span
  m='2498530'>times</span> <span m='2498740'>Pi</span> <span
  m='2498940'>over</span> <span m='2499070'>4.</span> <span
  m='2499830'>So</span> <span m='2501240'>all</span> <span
  m='2501350'>right,</span> <span m='2501840'>great.</span> <span
  m='2502660'>So</span> <span m='2503060'>let's</span> <span
  m='2503310'>do</span> <span m='2503430'>the</span> <span
  m='2503580'>pluses</span> <span m='2504010'>first.</span> <span
  m='2506920'>The</span> <span m='2507200'>plus</span> <span
  m='2507480'>at</span> <span m='2507670'>0</span> <span m='2508240'>is</span>
  <span m='2508760'>cosine</span> <span m='2509540'>0,</span> <span
  m='2510330'>sine</span> <span m='2510690'>0.</span> <span
  m='2511110'>So</span> <span m='2511360'>what</span> <span
  m='2511510'>is</span> <span m='2511620'>that?</span> </p><p><span
  m='2512170'>AUDIENCE: 1,</span> <span m='2512560'>0.</span> </p><p><span
  m='2513340'>PROFESSOR: That's</span> <span m='2513500'>1,</span> <span
  m='2513780'>0.</span> <span m='2514160'>That's</span> <span
  m='2514410'>right.</span> <span m='2517890'>In</span> <span
  m='2518050'>fact,</span> <span m='2520920'>the</span> <span
  m='2521150'>8</span> <span m='2521460'>and</span> <span m='2521560'>the</span>
  <span m='2521620'>-8</span> <span m='2522060'>are</span> <span
  m='2522140'>also</span> <span m='2522540'>that</span> <span
  m='2526965'>times</span> <span m='2527400'>3.</span> <span
  m='2528140'>The</span> <span m='2528290'>8</span> <span m='2528560'>and
  the</span> <span m='2528800'>-8</span> <span m='2528910'>are</span> <span
  m='2529000'>also</span> <span m='2529290'>that</span> <span
  m='2529540'>because</span> <span m='2530020'>then</span> <span
  m='2530190'>it's</span> <span m='2530340'>just</span> <span
  m='2530570'>2</span> <span m='2530710'>Pi</span> <span
  m='2531240'>minus</span> <span m='2531580'>2</span> <span
  m='2531740'>Pi,</span> <span m='2532030'>which</span> <span
  m='2532730'>both</span> <span m='2533000'>cosine</span> <span m='2533305'>and
  sine</span> <span m='2533610'>are</span> <span m='2533920'>periodic.</span>
  <span m='2535300'>OK,</span> <span m='2535830'>great.</span> </p><p><span
  m='2536740'>What</span> <span m='2536900'>about</span> <span
  m='2537660'>the</span> <span m='2537750'>1?</span> <span
  m='2538600'>Well,</span> <span m='2538750'>that's</span> <span
  m='2539020'>cosine</span> <span m='2539430'>Pi</span> <span
  m='2539610'>over</span> <span m='2539770'>4,</span> <span
  m='2540130'>sine</span> <span m='2540270'>Pi</span> <span
  m='2540510'>over</span> <span m='2540840'>4.</span> <span
  m='2541130'>And</span> <span m='2541420'>what's</span> <span
  m='2541650'>that?</span> </p><p><span m='2544780'>AUDIENCE:</span> <span
  m='2545260'>[SEVERAL ANSWERS]</span> </p><p><span m='2546700'>PROFESSOR:
  Yeah,</span> <span m='2547060'>it's</span> <span m='2547140'>root</span> <span
  m='2547320'>2</span> <span m='2547440'>over</span> <span m='2547630'>2,</span>
  <span m='2547890'>root</span> <span m='2548060'>2</span> <span
  m='2548210'>over</span> <span m='2548390'>2.</span> <span
  m='2549080'>So</span> <span m='2549220'>that's</span> <span
  m='2549410'>something</span> <span m='2549690'>like</span> <span
  m='2550620'>here,</span> <span m='2551100'>we'll</span> <span
  m='2551420'>say.</span> <span m='2553950'>And</span> <span
  m='2554350'>in</span> <span m='2554500'>fact,</span> <span
  m='2556730'>and</span> <span m='2559000'>the</span> <span m='2559120'>9</span>
  <span m='2559470'>and</span> <span m='2559580'>the</span> <span
  m='2559660'>-7</span> <span m='2560480'>are</span> <span
  m='2560880'>also</span> <span m='2561320'>that.</span> <span
  m='2562340'>So</span> <span m='2562580'>there's</span> <span
  m='2562850'>three</span> <span m='2563125'>of these</span> <span
  m='2563400'>two.</span> <span m='2567150'>What</span> <span
  m='2567350'>about</span> <span m='2567940'>the</span> <span
  m='2568110'>-1?</span> <span m='2568640'>That's</span> <span
  m='2569170'>cosine</span> <span m='2569660'>negative pi</span> <span
  m='2570210'>over</span> <span m='2570410'>4,</span> <span
  m='2570700'>sine</span> <span m='2571120'>Pi</span> <span
  m='2571598'>over</span> <span m='2572076'>4.</span> </p><p><span
  m='2575422'>AUDIENCE:</span> <span m='2575900'>[SEVERAL ANSWERS]</span>
  </p><p><span m='2577340'>PROFESSOR: That's</span> <span
  m='2577570'>right.</span> <span m='2578040'>The</span> <span
  m='2578170'>x</span> <span m='2578680'>value</span> <span
  m='2579280'>is</span> <span m='2580530'>positive</span> <span
  m='2581640'>root</span> <span m='2581920'>2</span> <span
  m='2582100'>over</span> <span m='2582260'>2.</span> <span
  m='2582780'>And</span> <span m='2583140'>the</span> <span m='2583270'>y</span>
  <span m='2583490'>value</span> <span m='2583740'>is</span> <span
  m='2583890'>negative.</span> <span m='2585660'>And</span> <span
  m='2585900'>again,</span> <span m='2586210'>there's</span> <span
  m='2586450'>three</span> <span m='2586630'>of</span> <span
  m='2586790'>them.</span> <span m='2589070'>All</span> <span
  m='2589180'>right,</span> <span m='2589530'>great.</span> <span
  m='2590520'>Now</span> <span m='2590720'>let's</span> <span
  m='2590980'>do</span> <span m='2591060'>the</span> <span
  m='2591140'>minuses.</span> <span m='2591910'>There's the</span> <span
  m='2592130'>minus</span> <span m='2592550'>at</span> <span
  m='2592780'>3,</span> <span m='2594280'>which</span> <span
  m='2594440'>is</span> <span m='2594550'>also</span> <span
  m='2594840'>the</span> <span m='2594990'>same</span> <span m='2595140'>as
  the</span> <span m='2595190'>minus</span> <span m='2595420'>at</span> <span
  m='2595530'>-7.</span> <span m='2596110'>The</span> <span
  m='2596380'>minus</span> <span m='2596570'>at 3</span> <span
  m='2597050'>is</span> <span m='2597590'>cosine</span> <span
  m='2598050'>3</span> <span m='2598270'>Pi</span> <span m='2598420'>over</span>
  <span m='2598570'>4,</span> <span m='2598810'>sine</span> <span
  m='2599200'>3</span> <span m='2599280'>Pi</span> <span m='2599410'>over</span>
  <span m='2599610'>4.</span> <span m='2600260'>Which</span> <span
  m='2600460'>one</span> <span m='2600600'>is</span> <span
  m='2600730'>that?</span> </p><p><span m='2603740'>AUDIENCE:</span> <span
  m='2604220'>[INAUDIBLE].</span> </p><p><span m='2610540'>PROFESSOR:
  Yeah,</span> <span m='2611015'>that's going to be in</span> <span
  m='2611490'>the</span> <span m='2611570'>second</span> <span
  m='2611880'>quadrant.</span> <span m='2613670'>The</span> <span
  m='2614100'>cosine</span> <span m='2615090'>is</span> <span
  m='2615550'>going</span> <span m='2615900'>to</span> <span
  m='2616050'>be</span> <span m='2616350'>negative.</span> <span
  m='2617010'>But</span> <span m='2617430'>the</span> <span
  m='2617550'>sine</span> <span m='2617930'>is</span> <span
  m='2618070'>going</span> <span m='2618320'>to</span> <span
  m='2618420'>be</span> <span m='2619300'>positive.</span> <span
  m='2620870'>And</span> <span m='2621240'>so</span> <span m='2621660'>we</span>
  <span m='2621800'>get</span> <span m='2622460'>3</span> <span
  m='2622920'>points here.</span> <span m='2624260'>And</span> <span
  m='2624460'>as</span> <span m='2624620'>you</span> <span m='2624740'>may
  have</span> <span m='2624850'>predicted,</span> <span m='2626160'>the</span>
  <span m='2626300'>other</span> <span m='2626520'>one,</span> <span
  m='2627350'>the</span> <span m='2627410'>5</span> <span m='2627900'>Pi</span>
  <span m='2628060'>over</span> <span m='2628320'>4,</span> <span
  m='2628730'>is</span> <span m='2628970'>in</span> <span m='2629070'>the</span>
  <span m='2629160'>third</span> <span m='2629400'>quadrant.</span> <span
  m='2630980'>We</span> <span m='2631110'>get</span> <span m='2631330'>3</span>
  <span m='2631460'>points</span> <span m='2631800'>here,</span> <span
  m='2634700'>Where</span> <span m='2634970'>are the</span> <span
  m='2635240'>support</span> <span m='2635560'>vectors?</span> </p><p><span
  m='2641852'>AUDIENCE:</span> <span m='2642336'>Question.</span> </p><p><span
  m='2643304'>PROFESSOR: Question?</span> </p><p><span m='2644756'>AUDIENCE:
  I</span> <span m='2645240'>understand</span> <span m='2646208'>where</span>
  <span m='2646692'>you're getting</span> <span m='2647176'>at the</span> <span
  m='2647660'>three</span> <span m='2648160'>quantities</span> <span
  m='2648470'>of</span> <span m='2648944'>pluses</span> <span m='2649418'>in the
  first</span> <span m='2649892'>of the</span> <span
  m='2650366'>quadrants.</span> <span m='2651314'>But according</span> <span
  m='2651788'>to the</span> <span m='2652262'>[INAUDIBLE]</span> <span
  m='2652736'>line</span> <span m='2653210'>there,</span> <span m='2653684'>you
  want that</span> <span m='2654158'>the total</span> <span
  m='2654632'>of</span> <span m='2655106'>four--</span> <span
  m='2655580'>maybe</span> <span m='2655817'>the</span> <span
  m='2656054'>values.</span> </p><p><span m='2656530'>PROFESSOR: Oh,
  you're</span> <span m='2656880'>right. There's</span> <span m='2657370'>only
  two.</span> <span m='2658795'>Good</span> <span m='2659270'>call.</span> <span
  m='2660250'>There's</span> <span m='2660720'>two</span> <span
  m='2661010'>negatives</span> <span m='2661470'>here.</span> <span
  m='2662030'>And</span> <span m='2662140'>there's</span> <span
  m='2662280'>two</span> <span m='2662655'>negatives here.</span> <span
  m='2663030'>Good</span> <span m='2663190'>call.</span> <span
  m='2663700'>It</span> <span m='2663930'>doesn't</span> <span
  m='2664170'>change</span> <span m='2664360'>the</span> <span
  m='2664440'>problem.</span> <span m='2666190'>In</span> <span
  m='2666250'>fact,</span> <span m='2666710'>if we</span> <span
  m='2666730'>just</span> <span m='2666890'>graph</span> <span
  m='2667180'>more</span> <span m='2667290'>points,</span> <span
  m='2667560'>there</span> <span m='2667660'>might have</span> <span
  m='2667850'>been</span> <span m='2668050'>more.</span> <span
  m='2668460'>But</span> <span m='2668960'>that's</span> <span
  m='2669170'>a</span> <span m='2669220'>very</span> <span
  m='2669525'>subtle</span> <span m='2669830'>and</span> <span
  m='2670160'>important</span> <span m='2670640'>distinction.</span> <span
  m='2670940'>There</span> <span m='2671240'>are</span> <span
  m='2671510'>two</span> <span m='2671800'>negatives.</span> <span
  m='2673860'>But</span> <span m='2674610'>otherwise,</span> <span
  m='2675040'>yeah,</span> <span m='2675260'>these</span> <span
  m='2675500'>are</span> <span m='2675570'>graphed</span> <span
  m='2675860'>correctly.</span> <span m='2676780'>Does</span> <span
  m='2676920'>anyone</span> <span m='2677200'>see</span> <span
  m='2677380'>where</span> <span m='2677470'>the</span> <span
  m='2677560'>support</span> <span m='2677820'>vectors</span> <span
  m='2678090'>are?</span> </p><p><span m='2679714'>AUDIENCE: The</span> <span
  m='2680211'>first two.</span> </p><p><span m='2682199'>AUDIENCE:  Maybe</span>
  <span m='2682696'>the top</span> <span m='2683193'>two.</span> </p><p><span
  m='2684187'>PROFESSOR:So</span> <span m='2684684'>the</span> <span
  m='2685181'>top two,</span> <span m='2685690'>the minus and</span> <span
  m='2686100'>plus.</span> <span m='2686580'>We'll</span> <span
  m='2686720'>try</span> <span m='2686950'>to</span> <span m='2687060'>do</span>
  <span m='2687170'>the</span> <span m='2687260'>perpendicular</span> <span
  m='2687740'>bisector.</span> <span m='2688240'>Let's</span> <span
  m='2688740'>see</span> <span m='2688990'>it.</span> <span
  m='2695160'>That</span> <span m='2695380'>works.</span> <span
  m='2696100'>But</span> <span m='2696280'>guess</span> <span
  m='2696490'>what?</span> <span m='2696880'>These</span> <span
  m='2697080'>guys</span> <span m='2697280'>are</span> <span
  m='2697340'>on</span> <span m='2697450'>the</span> <span
  m='2697510'>same</span> <span m='2697760'>line.</span> <span
  m='2698700'>So</span> <span m='2698710'>we'd</span> <span
  m='2698820'>better</span> <span m='2699100'>circle</span> <span
  m='2699440'>them.</span> <span m='2701350'>So</span> <span
  m='2701680'>actually,</span> <span m='2702700'>the</span> <span
  m='2702800'>question</span> <span m='2703150'>is what</span> <span
  m='2703370'>isn't</span> <span m='2703660'>a</span> <span
  m='2703740'>support</span> <span m='2704040'>vector?</span> <span
  m='2704410'>Only</span> <span m='2704700'>this.</span> <span
  m='2705170'>Only</span> <span m='2705660'>those</span> <span
  m='2705840'>three.</span> <span m='2706050'>Question?</span> </p><p><span
  m='2707041'>AUDIENCE: Couldn't you</span> <span m='2707532'>have just</span>
  <span m='2708023'>done</span> <span m='2708514'>this</span> <span
  m='2709005'>in one dimension?</span> <span m='2709496'>I</span> <span
  m='2709987'>mean,</span> <span m='2710478'>you just</span> <span
  m='2711951'>showed</span> <span m='2712442'>that those</span> <span
  m='2712933'>ran on</span> <span m='2713424'>the same</span> <span
  m='2713915'>lines.</span> <span m='2714406'>So you really</span> <span
  m='2714897'>didn't need</span> <span m='2715879'>the cosine term</span> <span
  m='2716370'>and a sine term.</span> <span m='2716861'>You could</span> <span
  m='2717352'>have proved</span> <span m='2717843'>all this with</span> <span
  m='2718334'>just</span> <span m='2718825'>the cosine.</span> </p><p><span
  m='2719810'>PROFESSOR: All</span> <span m='2720270'>right, the question</span>
  <span m='2720730'>is</span> <span m='2721410'>couldn't</span> <span
  m='2721550'>we have</span> <span m='2721960'>done this</span> <span
  m='2722100'>in</span> <span m='2722200'>one</span> <span
  m='2722420'>dimension.</span> <span m='2722840'>All</span> <span
  m='2723260'>we</span> <span m='2723410'>do</span> <span m='2723810'>is</span>
  <span m='2724260'>only</span> <span m='2724530'>the</span> <span
  m='2724650'>cosine.</span> <span m='2725800'>So</span> <span
  m='2726055'>if</span> <span m='2726310'>we</span> <span m='2726470'>did</span>
  <span m='2726630'>only</span> <span m='2726910'>the</span> <span
  m='2727010'>cosine,</span> <span m='2729060'>then</span> <span
  m='2729700'>they</span> <span m='2729910'>would've</span> <span
  m='2730140'>still</span> <span m='2730650'>been</span> <span
  m='2731310'>easily</span> <span m='2731640'>divisible.</span> <span
  m='2732470'>The</span> <span m='2732790'>answer</span> <span
  m='2733170'>is,</span> <span m='2733950'>absolutely,</span> <span
  m='2735450'>we</span> <span m='2735590'>could</span> <span
  m='2735830'>have.</span> <span m='2736650'>However,</span> <span
  m='2737450'>the</span> <span m='2737540'>question</span> <span
  m='2737950'>did</span> <span m='2738090'>not</span> <span
  m='2738520'>because</span> <span m='2739030'>Susan</span> <span
  m='2739370'>Q.</span> <span m='2739540'>Random</span> <span
  m='2739910'>Student</span> <span m='2740170'>decided</span> <span
  m='2740590'>to</span> <span m='2740710'>do</span> <span
  m='2740840'>cosine</span> <span m='2741110'>and</span> <span
  m='2741380'>sine.</span> </p><p><span m='2742950'>But</span> <span
  m='2743110'>yes,</span> <span m='2743980'>if</span> <span m='2744210'>we
  had</span> <span m='2744480'>said</span> <span m='2744940'>you,</span> <span
  m='2745760'>[INAUDIBLE]</span> <span m='2746400'>student,</span> <span
  m='2746740'>find</span> <span m='2747200'>a</span> <span
  m='2747280'>phi</span> <span m='2747690'>that</span> <span
  m='2747810'>will</span> <span m='2747930'>work</span> <span
  m='2748210'>for</span> <span m='2748330'>this,</span> <span
  m='2749940'>you</span> <span m='2750100'>could</span> <span
  m='2750330'>have</span> <span m='2750460'>found</span> <span m='2750780'>a
  phi</span> <span m='2750940'>that was</span> <span m='2751140'>just</span>
  <span m='2751540'>cosine.</span> <span m='2752230'>That</span> <span
  m='2752300'>would</span> <span m='2752460'>have been</span> <span
  m='2752620'>easier.</span> <span m='2753860'>However,</span> <span
  m='2754750'>it's</span> <span m='2754870'>important</span> <span
  m='2755220'>to</span> <span m='2755270'>be</span> <span m='2755330'>a</span>
  <span m='2755390'>little</span> <span m='2755520'>work</span> <span
  m='2755820'>with</span> <span m='2756020'>what</span> <span
  m='2756980'>somebody</span> <span m='2757170'>else</span> <span
  m='2757480'>gives</span> <span m='2757720'>you.</span> <span
  m='2757930'>In</span> <span m='2758040'>this</span> <span
  m='2758220'>case,</span> <span m='2758550'>they</span> <span
  m='2758660'>gave</span> <span m='2758900'>you</span> <span
  m='2760090'>that</span> <span m='2760290'>transformation,</span> <span
  m='2761020'>which</span> <span m='2761380'>yeah,</span> <span
  m='2761690'>was</span> <span m='2761940'>wasteful</span> <span
  m='2762380'>with</span> <span m='2762550'>an</span> <span
  m='2762650'>extra</span> <span m='2762910'>dimension.</span> <span
  m='2763175'>You</span> <span m='2763440'>didn't</span> <span
  m='2763510'>need</span> <span m='2763770'>the</span> <span
  m='2763880'>sine</span> <span m='2764830'>because</span> <span
  m='2765350'>you</span> <span m='2765420'>didn't</span> <span
  m='2765630'>need</span> <span m='2765820'>the</span> <span
  m='2765910'>y-axis</span> <span m='2766770'>really</span> <span
  m='2767080'>here.</span> <span m='2769240'>You</span> <span
  m='2769420'>just</span> <span m='2769660'>needed</span> <span
  m='2769870'>the</span> <span m='2769970'>x.</span> </p><p><span
  m='2772800'>Does</span> <span m='2772970'>everyone</span> <span
  m='2773320'>see</span> <span m='2773490'>this,</span> <span
  m='2774270'>how</span> <span m='2774660'>this</span> <span
  m='2774810'>works?</span> <span m='2776030'>You can</span> <span
  m='2776200'>maybe</span> <span m='2776480'>transform</span> <span
  m='2776910'>dimensions?</span> <span m='2777970'>The</span> <span
  m='2778070'>main</span> <span m='2778520'>hardest</span> <span
  m='2778970'>part</span> <span m='2779180'>is</span> <span
  m='2779290'>they'll</span> <span m='2779460'>usually</span> <span
  m='2779880'>give</span> <span m='2780070'>you</span> <span m='2780310'>a k
  and</span> <span m='2780660'>ask</span> <span m='2780870'>for a</span> <span
  m='2781000'>phi</span> <span m='2781460'>or give you</span> <span
  m='2781680'>a phi</span> <span m='2781965'>and ask</span> <span
  m='2782250'>for a</span> <span m='2782410'>k.</span> <span
  m='2782850'>But</span> <span m='2783280'>it's</span> <span
  m='2783480'>not</span> <span m='2783780'>too</span> <span
  m='2783920'>bad.</span> <span m='2784700'>Just</span> <span
  m='2784910'>remember,</span> <span m='2785200'>if they</span> <span
  m='2785360'>give</span> <span m='2785510'>you</span> <span
  m='2785610'>a</span> <span m='2785660'>phi,</span> <span m='2786520'>do</span>
  <span m='2786700'>a</span> <span m='2786760'>dot</span> <span
  m='2787030'>product</span> <span m='2787320'>with</span> <span
  m='2787530'>it.</span> <span m='2788190'>And</span> <span
  m='2788660'>if</span> <span m='2788740'>they</span> <span
  m='2788840'>give</span> <span m='2788970'>you a phi</span> <span
  m='2789380'>that's</span> <span m='2789650'>just</span> <span
  m='2789890'>one</span> <span m='2790240'>component,</span> <span
  m='2791670'>dot</span> <span m='2791900'>product</span> <span
  m='2792200'>of</span> <span m='2792280'>one</span> <span
  m='2792440'>component,</span> <span m='2792820'>just</span> <span
  m='2792940'>multiply</span> <span m='2793255'>them</span> <span
  m='2793570'>together.</span> <span m='2794290'>Easy</span> <span
  m='2794570'>enough.</span> </p><p><span m='2794930'>If</span> <span
  m='2795240'>they</span> <span m='2795600'>give you</span> <span m='2795770'>a
  k,</span> <span m='2797080'>treat it</span> <span m='2797210'>as</span> <span
  m='2797440'>a</span> <span m='2797530'>dot</span> <span
  m='2797790'>product</span> <span m='2798080'>and</span> <span
  m='2798190'>try</span> <span m='2798310'>to</span> <span
  m='2798390'>reverse</span> <span m='2798710'>engineer.</span> <span
  m='2799160'>It's</span> <span m='2799240'>usually</span> <span
  m='2799630'>something</span> <span m='2799870'>like</span> <span
  m='2800040'>this</span> <span m='2800410'>that's</span> <span
  m='2800490'>easy</span> <span m='2800720'>to</span> <span
  m='2800800'>reverse</span> <span m='2801140'>engineer.</span> <span
  m='2802200'>I</span> <span m='2802350'>really</span> <span
  m='2802630'>haven't</span> <span m='2802890'>seen</span> <span
  m='2803060'>it</span> <span m='2803130'>where</span> <span
  m='2803260'>it's</span> <span m='2803390'>not.</span> <span
  m='2804240'>So</span> <span m='2806240'>it</span> <span
  m='2806620'>often</span> <span m='2806990'>looks</span> <span
  m='2807210'>like</span> <span m='2807470'>the</span> <span
  m='2807570'>scariest</span> <span m='2808000'>problem.</span> <span
  m='2808370'>But it's</span> <span m='2808560'>usually</span> <span
  m='2808970'>not</span> <span m='2809380'>too</span> <span
  m='2809530'>bad</span> <span m='2809830'>to</span> <span m='2809910'>go</span>
  <span m='2810050'>between</span> <span m='2810370'>phis</span> <span
  m='2810790'>and k's.</span> <span m='2811690'>Does anyone</span> <span
  m='2812080'>have</span> <span m='2812240'>any</span> <span
  m='2812380'>questions</span> <span m='2812970'>on</span> <span
  m='2813250'>anything</span> <span m='2813660'>that</span> <span
  m='2813760'>we</span> <span m='2813890'>did</span> <span m='2815410'>on</span>
  <span m='2815750'>support</span> <span m='2816237'>vector</span> <span
  m='2816724'>machines?</span> <span m='2819646'>Question.</span> </p><p><span
  m='2821594'>AUDIENCE: So</span> <span m='2822081'>what's the intuition</span>
  <span m='2822568'>behind the</span> <span m='2823055'>w?</span> <span
  m='2824029'>We</span> <span m='2824516'>solved it</span> <span m='2825003'>and
  figured out</span> <span m='2825490'>numbers</span> <span m='2825977'>and
  integrations</span> <span m='2826464'>with it.</span> <span m='2826951'>But
  what is it</span> <span m='2827438'>in relation to--</span> </p><p><span
  m='2828900'>PROFESSOR: Question is,</span> <span m='2829580'>what is</span>
  <span m='2829870'>intuition?</span> <span m='2830420'>What</span> <span
  m='2830740'>is</span> <span m='2831530'>w?</span> <span m='2832976'>W</span>
  <span m='2833460'>Is</span> <span m='2834030'>the</span> <span
  m='2834150'>dividing</span> <span m='2834640'>line.</span> <span
  m='2834980'>It is</span> <span m='2835180'>the</span> <span
  m='2835280'>drop</span> <span m='2835830'>dead</span> <span
  m='2836280'>dividing</span> <span m='2836740'>line.</span> <span
  m='2837320'>When</span> <span m='2837440'>I</span> <span
  m='2837490'>say</span> <span m='2837670'>the</span> <span
  m='2837780'>drop</span> <span m='2838020'>dead</span> <span
  m='2838130'>dividing</span> <span m='2838430'>line,</span> <span
  m='2838620'>you</span> <span m='2838750'>like</span> <span
  m='2839060'>those</span> <span m='2839350'>big,</span> <span
  m='2840270'>bold</span> <span m='2840670'>solid</span> <span
  m='2841160'>lines</span> <span m='2841430'>over</span> <span
  m='2841630'>there.</span> <span m='2841960'>Those</span> <span
  m='2842260'>are</span> <span m='2842340'>your</span> <span
  m='2842570'>pretty</span> <span m='2842800'>certain</span> <span
  m='2843210'>lines.</span> <span m='2843680'>Everything</span> <span
  m='2844060'>past</span> <span m='2844410'>that</span> <span
  m='2844590'>was</span> <span m='2844700'>a</span> <span
  m='2844740'>minus.</span> <span m='2845580'>In</span> <span
  m='2845720'>your</span> <span m='2845830'>training,</span> <span
  m='2846090'>it's</span> <span m='2846210'>that</span> <span
  m='2846340'>everything</span> <span m='2846640'>past</span> <span
  m='2847870'>the</span> <span m='2847960'>big</span> <span
  m='2848270'>bold</span> <span m='2848600'>line</span> <span
  m='2848830'>there</span> <span m='2849100'>was</span> <span
  m='2849210'>a</span> <span m='2849280'>plus</span> <span m='2849560'>in</span>
  <span m='2849740'>your training</span> <span m='2849980'>stuff.</span> <span
  m='2850150'>But the</span> <span m='2850550'>dotted</span> <span
  m='2850990'>line</span> <span m='2851270'>is</span> <span
  m='2851430'>the</span> <span m='2851510'>one</span> <span
  m='2851720'>you're</span> <span m='2851910'>really</span> <span
  m='2852290'>going to</span> <span m='2852420'>use</span> <span
  m='2852840'>in</span> <span m='2852940'>the</span> <span
  m='2853040'>test</span> <span m='2853350'>data.</span> </p><p><span
  m='2854350'>In</span> <span m='2854460'>the</span> <span
  m='2854570'>test</span> <span m='2854890'>data,</span> <span
  m='2855760'>when</span> <span m='2855930'>push</span> <span
  m='2856180'>comes</span> <span m='2856380'>to</span> <span
  m='2856470'>shove,</span> <span m='2856770'>you</span> <span
  m='2856870'>might</span> <span m='2857170'>get</span> <span
  m='2857490'>something</span> <span m='2857990'>if it's</span> <span
  m='2858230'>inside</span> <span m='2858525'>of</span> <span
  m='2858820'>that</span> <span m='2859070'>gutter.</span> <span
  m='2859910'>And</span> <span m='2860070'>if</span> <span
  m='2860180'>it's</span> <span m='2860370'>on</span> <span
  m='2860700'>the,</span> <span m='2861370'>say,</span> <span
  m='2861790'>of</span> <span m='2861910'>that</span> <span
  m='2862100'>one</span> <span m='2862200'>up</span> <span
  m='2862310'>there,</span> <span m='2862580'>if it's on</span> <span
  m='2862800'>the</span> <span m='2862920'>upper</span> <span
  m='2863160'>left</span> <span m='2863470'>side</span> <span m='2863760'>of
  that</span> <span m='2863940'>dotted</span> <span m='2864190'>line,</span>
  <span m='2864420'>you're</span> <span m='2864570'>going</span> <span
  m='2864820'>to</span> <span m='2864900'>call</span> <span
  m='2865220'>it</span> <span m='2865270'>a</span> <span
  m='2865330'>plus.</span> <span m='2867040'>So</span> <span
  m='2867080'>that</span> <span m='2867220'>dotted</span> <span
  m='2867540'>line</span> <span m='2867810'>is</span> <span
  m='2868020'>your</span> <span m='2868160'>decision</span> <span
  m='2868650'>boundary.</span> <span m='2869870'>And</span> <span
  m='2870210'>that</span> <span m='2872950'>is</span> <span
  m='2873060'>basically</span> <span m='2873450'>the</span> <span
  m='2873520'>idea.</span> </p><p><span m='2874010'>And</span> <span
  m='2874110'>in</span> <span m='2874200'>fact,</span> <span
  m='2875170'>the</span> <span m='2875260'>way</span> <span
  m='2875480'>that</span> <span m='2875840'>the</span> <span
  m='2876200'>algorithm</span> <span m='2876630'>would</span> <span
  m='2876780'>do</span> <span m='2876910'>it</span> <span m='2876970'>on</span>
  <span m='2877060'>the</span> <span m='2877130'>computer</span> <span
  m='2877630'>is</span> <span m='2877970'>it</span> <span
  m='2878060'>would</span> <span m='2878290'>quadratically</span> <span
  m='2878660'>optimize</span> <span m='2879130'>the</span> <span
  m='2879250'>alphas,</span> <span m='2879820'>which</span> <span
  m='2880640'>messes</span> <span m='2881010'>around</span> <span
  m='2881430'>with the</span> <span m='2881520'>dotted</span> <span
  m='2881860'>line.</span> <span m='2882610'>And</span> <span
  m='2883280'>by</span> <span m='2883390'>quadratically</span> <span
  m='2884310'>maximizing</span> <span m='2885130'>the</span> <span
  m='2885390'>alphas--</span> <span m='2885940'>you</span> <span
  m='2886130'>see</span> <span m='2886230'>how</span> <span m='2886520'>the
  alphas</span> <span m='2886690'>add</span> <span m='2886880'>up</span> <span
  m='2887050'>to a</span> <span m='2887200'>w.</span> <span
  m='2887980'>It</span> <span m='2888130'>just</span> <span
  m='2888400'>checks</span> <span m='2888640'>it around.</span> <span
  m='2888925'>And</span> <span m='2889210'>eventually,</span> <span
  m='2889475'>it</span> <span m='2889740'>finds,</span> <span
  m='2889960'>oh,</span> <span m='2890200'>making the</span> <span
  m='2890510'>alpha</span> <span m='2890800'>of</span> <span
  m='2890940'>this</span> <span m='2891130'>one</span> <span
  m='2891310'>0</span> <span m='2892530'>makes</span> <span m='2892790'>it
  a</span> <span m='2892950'>better</span> <span
  m='2893190'>optimization.</span> <span m='2893810'>You're</span> <span
  m='2893920'>trying</span> <span m='2894190'>to</span> <span
  m='2894230'>get</span> <span m='2894360'>the</span> <span
  m='2894430'>widest</span> <span m='2894850'>possible</span> <span
  m='2895270'>road.</span> <span m='2895980'>It</span> <span
  m='2896070'>would</span> <span m='2896160'>eventually</span> <span
  m='2896530'>come</span> <span m='2896690'>out</span> <span
  m='2896840'>to</span> <span m='2896950'>this.</span> </p><p><span
  m='2897850'>This is</span> <span m='2898050'>trivial</span> <span
  m='2898330'>for a</span> <span m='2898510'>human</span> <span
  m='2898800'>to</span> <span m='2898910'>eyeball.</span> <span
  m='2899340'>But</span> <span m='2899520'>some</span> <span
  m='2899750'>real</span> <span m='2899990'>problems</span> <span
  m='2900310'>with</span> <span m='2900820'>200</span> <span
  m='2901260'>data</span> <span m='2901500'>points</span> <span
  m='2901770'>that</span> <span m='2901880'>have</span> <span
  m='2902060'>to</span> <span m='2902130'>get</span> <span
  m='2902370'>one</span> <span m='2902550'>or</span> <span
  m='2902630'>two</span> <span m='2902790'>of</span> <span
  m='2902880'>them</span> <span m='2903080'>wrong,</span> <span
  m='2903810'>classified,</span> <span m='2904720'>and</span> <span
  m='2905660'>you</span> <span m='2905850'>may</span> <span
  m='2906000'>be</span> <span m='2906100'>using</span> <span
  m='2906380'>a</span> <span m='2906480'>quadratic</span> <span
  m='2907160'>kernel</span> <span m='2907510'>or</span> <span
  m='2907620'>something</span> <span m='2907960'>that,</span> <span
  m='2908310'>you</span> <span m='2908490'>can't</span> <span
  m='2908830'>do</span> <span m='2908950'>that.</span> <span
  m='2909500'>You</span> <span m='2909550'>just</span> <span
  m='2909800'>can't.</span> <span m='2910510'>Well,</span> <span
  m='2910680'>maybe</span> <span m='2911080'>can,</span> <span
  m='2911420'>in</span> <span m='2911580'>which</span> <span
  m='2911760'>case</span> <span m='2912740'>you</span> <span
  m='2912930'>should</span> <span m='2913130'>be</span> <span
  m='2913220'>getting a</span> <span m='2913510'>MacArthur</span> <span
  m='2914460'>Fellowship</span> <span m='2915030'>or</span> <span
  m='2915110'>something</span> <span m='2915310'>like</span> <span
  m='2915480'>that.</span> <span m='2915740'>But</span> <span
  m='2917030'>the</span> <span m='2917150'>computer</span> <span
  m='2917560'>can.</span> <span m='2918310'>And</span> <span
  m='2918690'>the</span> <span m='2918790'>basic</span> <span
  m='2919050'>idea</span> <span m='2919340'>is</span> <span
  m='2919540'>when</span> <span m='2919700'>it</span> <span
  m='2919790'>comes</span> <span m='2920130'>down</span> <span
  m='2920370'>to</span> <span m='2920490'>it,</span> <span m='2920680'>it</span>
  <span m='2920890'>figures</span> <span m='2921230'>out</span> <span
  m='2921350'>the</span> <span m='2921440'>alphas,</span> <span
  m='2922920'>that</span> <span m='2923280'>the</span> <span
  m='2923360'>best</span> <span m='2923680'>w</span> <span
  m='2923960'>for</span> <span m='2924160'>the widest</span> <span
  m='2924500'>road.</span> <span m='2924860'>And the</span> <span
  m='2924940'>w</span> <span m='2925365'>s your</span> <span
  m='2925790'>decision</span> <span m='2926220'>boundary.</span> <span
  m='2927410'>Good</span> <span m='2927600'>question.</span> <span
  m='2928620'>Any</span> <span m='2928690'>other</span> <span
  m='2928860'>questions</span> <span m='2929330'>about</span> <span
  m='2930570'>our</span> <span m='2930700'>old</span> <span
  m='2930900'>friend,</span> <span m='2931160'>SVM?</span> </p><p><span
  m='2932270'>I</span> <span m='2932430'>have</span> <span m='2932560'>a</span>
  <span m='2932610'>question</span> <span m='2932880'>for</span> <span
  m='2933010'>you.</span> <span m='2934250'>After</span> <span
  m='2934580'>seeing</span> <span m='2934870'>this--</span> <span
  m='2935390'>and</span> <span m='2935870'>let's</span> <span
  m='2936220'>pretend</span> <span m='2936630'>that</span> <span
  m='2936790'>they</span> <span m='2936910'>only</span> <span
  m='2937090'>asked</span> <span m='2937320'>to</span> <span
  m='2937470'>solve</span> <span m='2938050'>for</span> <span
  m='2938430'>w's,</span> <span m='2938830'>b's,</span> <span m='2939730'>these
  kind of</span> <span m='2940000'>kernels</span> <span m='2940375'>and</span>
  <span m='2940750'>phi,</span> <span m='2941065'>which are</span> <span
  m='2941380'>the</span> <span m='2941700'>typical</span> <span
  m='2942070'>things--</span> <span m='2942940'>how</span> <span
  m='2943100'>many</span> <span m='2943250'>people</span> <span
  m='2943420'>now</span> <span m='2943810'>think</span> <span
  m='2944620'>that</span> <span m='2944990'>you</span> <span
  m='2945380'>can</span> <span m='2945680'>go</span> <span
  m='2945860'>through</span> <span m='2946230'>and</span> <span
  m='2946530'>work</span> <span m='2946710'>an</span> <span
  m='2946820'>SVM</span> <span m='2947220'>problem?</span> <span
  m='2950030'>All</span> <span m='2950150'>right,</span> <span m='2951140'>we've
  got</span> <span m='2951440'>a</span> <span m='2951460'>few.</span> <span
  m='2952270'>We've</span> <span m='2952330'>got a</span> <span
  m='2952610'>happy</span> <span m='2952960'>few.</span> <span
  m='2954250'>Band</span> <span m='2954480'>of</span> <span
  m='2954560'>brothers.</span> <span m='2955150'>Maybe</span> <span
  m='2955800'>eight</span> <span m='2956030'>people</span> <span
  m='2956320'>raised</span> <span m='2956530'>their</span> <span
  m='2956640'>hand</span> <span m='2956910'>there.</span> <span
  m='2956980'>That's</span> <span m='2957220'>good.</span> </p><p><span
  m='2958010'>How</span> <span m='2958180'>many</span> <span
  m='2958360'>people</span> <span m='2958480'>know what a</span> <span
  m='2958870'>support</span> <span m='2959200'>vector</span> <span
  m='2959490'>is</span> <span m='2959690'>now?</span> <span
  m='2961630'>That's</span> <span m='2961910'>really</span> <span
  m='2962300'>good.</span> <span m='2965360'>Because</span> <span
  m='2967480'>if</span> <span m='2967850'>that's</span> <span
  m='2968100'>all</span> <span m='2968320'>you</span> <span
  m='2968420'>learned</span> <span m='2968780'>from</span> <span
  m='2969070'>today's</span> <span m='2969410'>recitation,</span> <span
  m='2969765'>it's</span> <span m='2970120'>still</span> <span
  m='2970670'>good.</span> <span m='2972300'>It</span> <span
  m='2972500'>really</span> <span m='2972840'>is.</span> <span
  m='2973130'>I'm</span> <span m='2973370'>telling</span> <span
  m='2973660'>you.</span> <span m='2973800'>I had</span> <span m='2974030'>to
  take</span> <span m='2974340'>two</span> <span m='2974490'>classes</span>
  <span m='2975050'>on</span> <span m='2975320'>this</span> <span
  m='2975520'>and</span> <span m='2975820'>then</span> <span
  m='2976450'>TA</span> <span m='2976650'>it</span> <span m='2976930'>before
  I</span> <span m='2977360'>really,</span> <span m='2977780'>really</span>
  <span m='2978150'>understood</span> <span m='2978520'>it.</span> <span
  m='2979800'>So</span> <span m='2981050'>you</span> <span
  m='2981180'>guys</span> <span m='2981480'>are</span> <span
  m='2981640'>ahead</span> <span m='2982120'>of</span> <span
  m='2982270'>me.</span> </p><p><span m='2984660'>All</span> <span
  m='2984790'>right,</span> <span m='2985320'>take</span> <span
  m='2985500'>care.</span> <span m='2985790'>Have</span> <span
  m='2985950'>a</span> <span m='2986000'>great</span> <span
  m='2986290'>weekend.</span> <span m='2987340'>And</span> <span
  m='2987390'>we'll</span> <span m='2987490'>see</span> <span
  m='2987700'>you</span> <span m='2987810'>for</span> <span
  m='2987980'>boosting</span> <span m='2988540'>and</span> <span
  m='2988730'>vampires</span> <span m='2989450'>next</span> <span
  m='2989840'>week.</span> </p>
uid: 9ee21cee870951df49203ea2ca822c05
type: course
layout: video
---
