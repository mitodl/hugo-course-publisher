---
title: Connectivity
uid: f805a13566b9c2888c6e6eee83e44b68
parent_uid: 8d160b87cb8ba14435decca9ffc6016e
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/vertical-857c6f8a582c/connectivity
short_url: connectivity
inline_embed_id: 19977051connectivity1897679
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1300'>PROFESSOR: The</span> <span m='1420'>point</span> <span
  m='1700'>of</span> <span m='1990'>switching</span> <span m='2510'>from</span>
  <span m='2750'>relational</span> <span m='3330'>language</span> <span
  m='3800'>to</span> <span m='3930'>graph</span> <span
  m='4240'>theoretical</span> <span m='5070'>language</span> <span
  m='5450'>is</span> <span m='5560'>really</span> <span m='5860'>so that</span>
  <span m='6120'>we</span> <span m='6240'>can</span> <span m='6380'>talk</span>
  <span m='6620'>about</span> <span m='6900'>paths</span> <span
  m='7310'>and</span> <span m='7440'>connections.</span> <span
  m='8710'>So</span> <span m='8830'>let's</span> <span m='9090'>look</span>
  <span m='9270'>at</span> <span m='9360'>the</span> <span m='9450'>topic</span>
  <span m='9850'>of</span> <span m='10040'>graph</span> <span
  m='10330'>connectivity</span> <span m='11360'>in</span> <span
  m='11500'>general.</span> <span m='13710'>Two</span> <span
  m='13880'>vertices</span> <span m='15200'>in</span> <span m='15440'>a</span>
  <span m='15510'>simple</span> <span m='15830'>graph,</span> <span
  m='16110'>or</span> <span m='16230'>for</span> <span m='16340'>that</span>
  <span m='16540'>matter,</span> <span m='16750'>a</span> <span
  m='16800'>directed</span> <span m='17160'>graph,</span> <span
  m='17400'>are</span> <span m='17460'>said</span> <span m='17700'>to</span>
  <span m='17780'>be</span> <span m='17980'>connected</span> <span
  m='18690'>if</span> <span m='18880'>and</span> <span m='18970'>only</span>
  <span m='19220'>if</span> <span m='19380'>there's</span> <span
  m='19590'>a</span> <span m='19650'>path</span> <span m='20010'>between</span>
  <span m='20450'>them.</span> <span m='20910'>In</span> <span
  m='21020'>a</span> <span m='21080'>directed</span> <span
  m='21490'>graph,</span> <span m='22190'>the</span> <span m='22340'>path</span>
  <span m='22630'>would</span> <span m='22760'>have</span> <span
  m='22930'>a</span> <span m='22980'>direction.</span> </p><p><span
  m='23750'>In</span> <span m='23940'>a</span> <span m='23990'>simple</span>
  <span m='24300'>graph,</span> <span m='25220'>paths</span> <span
  m='25650'>don't</span> <span m='25820'>have</span> <span
  m='26020'>direction.</span> <span m='26500'>So</span> <span m='26950'>a
  is</span> <span m='27220'>connected</span> <span m='27620'>to</span> <span
  m='27670'>b</span> <span m='27890'>if</span> <span m='28020'>and</span> <span
  m='28110'>only</span> <span m='28350'>if</span> <span m='28520'>b</span> <span
  m='28680'>is</span> <span m='28810'>connected</span> <span m='29330'>to</span>
  <span m='29510'>a.</span> <span m='29780'>It's a</span> <span
  m='30580'>symmetric</span> <span m='31100'>relation.</span> <span
  m='32040'>So</span> <span m='32259'>two</span> <span m='32430'>vertices</span>
  <span m='32970'>are</span> <span m='33060'>connected</span> <span
  m='33580'>if</span> <span m='33740'>and</span> <span m='33840'>only</span>
  <span m='34140'>if</span> <span m='34270'>there's</span> <span
  m='34470'>a</span> <span m='34540'>path</span> <span m='34890'>between</span>
  <span m='35280'>them.</span> <span m='35640'>That's</span> <span
  m='35850'>equivalent,</span> <span m='36310'>of</span> <span
  m='36380'>course,</span> <span m='36610'>to</span> <span
  m='36700'>saying</span> <span m='36980'>if</span> <span m='37100'>and</span>
  <span m='37180'>only</span> <span m='37470'>if</span> <span
  m='37590'>there's</span> <span m='37770'>a</span> <span m='37840'>walk</span>
  <span m='38160'>between</span> <span m='38550'>them.</span> </p><p><span
  m='39150'>We</span> <span m='39440'>include</span> <span
  m='40020'>length</span> <span m='40340'>0</span> <span m='40690'>paths</span>
  <span m='41060'>and</span> <span m='41110'>length</span> <span
  m='41360'>0</span> <span m='41670'>walks,</span> <span m='42000'>so</span>
  <span m='42180'>every</span> <span m='42440'>vertex</span> <span
  m='42920'>is</span> <span m='43070'>considered</span> <span
  m='43580'>to</span> <span m='43690'>be</span> <span m='44110'>connected</span>
  <span m='44610'>to</span> <span m='44750'>itself.</span> <span
  m='45930'>A</span> <span m='46010'>whole</span> <span m='46270'>graph</span>
  <span m='46650'>is</span> <span m='46770'>said</span> <span
  m='46980'>to</span> <span m='47070'>be</span> <span m='47190'>connected</span>
  <span m='47860'>if</span> <span m='48200'>all</span> <span m='48440'>of</span>
  <span m='48560'>its</span> <span m='48720'>vertex</span> <span
  m='49250'>are</span> <span m='49370'>connected</span> <span
  m='49870'>to</span> <span m='50020'>each</span> <span m='50180'>other.</span>
  <span m='52810'>So</span> <span m='53090'>every</span> <span
  m='53450'>graph</span> <span m='53840'>you</span> <span m='53950'>can</span>
  <span m='54110'>think</span> <span m='54390'>of</span> <span
  m='54620'>as</span> <span m='55070'>broken</span> <span m='55600'>up</span>
  <span m='55990'>into</span> <span m='56710'>the</span> <span
  m='56890'>mutually</span> <span m='57430'>connected</span> <span
  m='57910'>pieces,</span> <span m='58780'>or</span> <span
  m='58980'>subgraphs,</span> <span m='60000'>which</span> <span
  m='60180'>are</span> <span m='60260'>called</span> <span m='60590'>its</span>
  <span m='60740'>connected</span> <span m='61310'>components.</span>
  </p><p><span m='62440'>So</span> <span m='62530'>let's</span> <span
  m='62780'>look</span> <span m='62960'>at</span> <span m='63020'>a</span> <span
  m='63090'>simple</span> <span m='63440'>example.</span> <span
  m='64660'>Let's</span> <span m='65099'>look</span> <span m='65269'>at</span>
  <span m='65370'>the</span> <span m='65480'>connections</span> <span
  m='66010'>between</span> <span m='66400'>MIT</span> <span
  m='66850'>buildings,</span> <span m='67520'>where</span> <span
  m='67760'>we</span> <span m='67910'>draw</span> <span m='68150'>an</span>
  <span m='68290'>edge</span> <span m='68580'>between</span> <span
  m='69030'>building</span> <span m='69460'>10</span> <span m='69720'>and</span>
  <span m='69820'>building</span> <span m='70150'>13</span> <span
  m='70640'>if</span> <span m='70760'>there's</span> <span m='70950'>a</span>
  <span m='71010'>door</span> <span m='71290'>between</span> <span
  m='71710'>them</span> <span m='71850'>or</span> <span m='71990'>a</span> <span
  m='72030'>corridor</span> <span m='72390'>or</span> <span
  m='72450'>between</span> <span m='72870'>them.</span> <span
  m='73570'>So</span> <span m='73660'>there's</span> <span m='73870'>a</span>
  <span m='73940'>corridor</span> <span m='74300'>between</span> <span
  m='74660'>building</span> <span m='74990'>10 and</span> <span
  m='75250'>building</span> <span m='75580'>4,</span> <span m='75950'>but</span>
  <span m='76160'>not</span> <span m='76410'>between</span> <span
  m='76800'>building</span> <span m='77670'>10</span> <span m='77920'>and</span>
  <span m='78010'>building</span> <span m='78350'>12.</span> <span
  m='78710'>To</span> <span m='78810'>get</span> <span m='79010'>to</span> <span
  m='79120'>12,</span> <span m='79410'>you</span> <span m='79470'>have</span>
  <span m='79690'>to</span> <span m='79790'>go</span> <span
  m='79980'>through</span> <span m='80190'>4.</span> </p><p><span
  m='82200'>That's</span> <span m='82510'>the</span> <span m='83060'>main</span>
  <span m='83550'>building</span> <span m='83910'>numbers</span> <span
  m='84270'>off</span> <span m='84520'>the</span> <span m='84770'>MIT</span>
  <span m='85160'>Infinite</span> <span m='85490'>Corridor.</span> <span
  m='86160'>East</span> <span m='86360'>campus,</span> <span m='86645'>of</span>
  <span m='86930'>course,</span> <span m='87220'>isn't</span> <span
  m='87520'>connected</span> <span m='87960'>to</span> <span
  m='88030'>anything,</span> <span m='88490'>so</span> <span
  m='88710'>it's</span> <span m='88850'>a</span> <span m='88900'>single,</span>
  <span m='89300'>isolated</span> <span m='89820'>vertex.</span> <span
  m='90790'>And</span> <span m='91070'>then</span> <span
  m='91460'>there's</span> <span m='91650'>the</span> <span
  m='91720'>medical</span> <span m='92090'>center</span> <span
  m='92540'>in</span> <span m='92600'>E17</span> <span m='93222'>and</span>
  <span m='93684'>E25,</span> <span m='94850'>which</span> <span
  m='95290'>are</span> <span m='96070'>a</span> <span m='96430'>sequence</span>
  <span m='96880'>of</span> <span m='96990'>four</span> <span
  m='97440'>buildings</span> <span m='97940'>that</span> <span
  m='98060'>are</span> <span m='98250'>connected</span> <span
  m='98750'>as</span> <span m='98910'>indicated,</span> <span
  m='99860'>but</span> <span m='100120'>not</span> <span
  m='100340'>connected</span> <span m='100760'>at</span> <span
  m='100830'>all</span> <span m='101220'>to</span> <span m='101300'>east</span>
  <span m='101550'>campus</span> <span m='102040'>or</span> <span
  m='102170'>the</span> <span m='102300'>Infinite</span> <span
  m='102700'>Corridor,</span> <span m='103120'>that is,</span> <span
  m='103310'>you</span> <span m='103380'>have</span> <span m='103510'>to</span>
  <span m='103600'>go</span> <span m='103750'>outside</span> <span
  m='104430'>to</span> <span m='104520'>get</span> <span m='105090'>from</span>
  <span m='105430'>east</span> <span m='105680'>campus</span> <span
  m='106240'>to</span> <span m='106380'>the</span> <span
  m='106570'>Infinite</span> <span m='106940'>Corridor</span> <span
  m='107195'>or</span> <span m='107450'>from</span> <span m='107600'>the</span>
  <span m='107730'>Infinite</span> <span m='108080'>Corridor</span> <span
  m='108530'>to</span> <span m='108630'>the</span> <span
  m='108720'>medical</span> <span m='109130'>center.</span> <span
  m='109810'>Unless</span> <span m='110040'>you</span> <span
  m='110230'>sneak</span> <span m='110780'>through</span> <span
  m='110910'>the</span> <span m='111020'>basement</span> <span
  m='112210'>and</span> <span m='112590'>another</span> <span
  m='112990'>restricted</span> <span m='113500'>areas.</span> </p><p><span
  m='114600'>So</span> <span m='115290'>this</span> <span m='115570'>is</span>
  <span m='115720'>one</span> <span m='116180'>graph.</span> <span
  m='116610'>It's</span> <span m='116780'>not</span> <span
  m='116990'>three</span> <span m='117260'>graphs.</span> <span
  m='117700'>This</span> <span m='117900'>is</span> <span m='118040'>one</span>
  <span m='118370'>graph</span> <span m='118780'>which</span> <span
  m='118990'>has</span> <span m='119330'>three</span> <span
  m='119630'>parts,</span> <span m='121090'>and</span> <span
  m='121350'>so</span> <span m='121560'>it</span> <span m='121630'>has</span>
  <span m='121910'>three</span> <span m='122190'>connected</span> <span
  m='122670'>components.</span> <span m='124780'>In</span> <span
  m='124910'>general,</span> <span m='125530'>the</span> <span
  m='125590'>more</span> <span m='126000'>connected</span> <span
  m='126450'>components</span> <span m='127140'>a</span> <span
  m='127230'>graph</span> <span m='127530'>has,</span> <span
  m='127720'>the</span> <span m='127790'>more</span> <span
  m='127950'>broken</span> <span m='128350'>up</span> <span m='128520'>it
  is,</span> <span m='129179'>and</span> <span m='129440'>that's</span> <span
  m='129680'>a way to</span> <span m='129979'>remember</span> <span
  m='130234'>it.</span> </p><p><span m='131110'>The</span> <span
  m='131280'>formal</span> <span m='131640'>definition</span> <span
  m='132130'>of</span> <span m='132330'>the</span> <span
  m='132550'>connected</span> <span m='133010'>component</span> <span
  m='133530'>of</span> <span m='133710'>a</span> <span m='133750'>vertex,</span>
  <span m='134310'>v,</span> <span m='134930'>is</span> <span
  m='135130'>simply</span> <span m='136090'>all</span> <span
  m='136500'>of</span> <span m='136760'>the</span> <span
  m='136840'>vertices,</span> <span m='137340'>w,</span> <span
  m='137780'>that</span> <span m='137950'>are</span> <span
  m='138050'>connected</span> <span m='138610'>to</span> <span
  m='138740'>v.</span> <span m='139820'>And</span> <span m='140220'>if</span>
  <span m='140460'>you</span> <span m='141630'>look</span> <span
  m='141890'>at</span> <span m='142000'>these</span> <span
  m='142240'>connected</span> <span m='142640'>components,</span> <span
  m='143170'>they've</span> <span m='143320'>defined an</span> <span
  m='143790'>equivalence</span> <span m='144390'>relation</span> <span
  m='145240'>on</span> <span m='145460'>the</span> <span
  m='145520'>vertices,</span> <span m='146080'>of</span> <span
  m='146200'>course,</span> <span m='146980'>because</span> <span
  m='148280'>a</span> <span m='148420'>connected</span> <span
  m='148810'>component</span> <span m='149310'>is</span> <span
  m='149440'>a</span> <span m='149490'>block</span> <span m='149910'>of
  the</span> <span m='150040'>equivalence</span> <span
  m='150690'>relation.</span> <span m='152360'>It's</span> <span
  m='152500'>a</span> <span m='152550'>block</span> <span m='152830'>of</span>
  <span m='152910'>the</span> <span m='153000'>partition</span> <span
  m='153810'>associated</span> <span m='154400'>with</span> <span
  m='154530'>the</span> <span m='154620'>equivalence</span> <span
  m='155130'>relation.</span> </p><p><span m='157230'>Another</span> <span
  m='157580'>way</span> <span m='158410'>to</span> <span
  m='158570'>define</span> <span m='159040'>this,</span> <span m='159380'>the
  set</span> <span m='159750'>of</span> <span m='159980'>w</span> <span
  m='160450'>that</span> <span m='160650'>are</span> <span
  m='160760'>connected</span> <span m='161320'>to</span> <span
  m='161420'>v,</span> <span m='161690'>is</span> <span m='161960'>simply</span>
  <span m='162730'>it's</span> <span m='163070'>taking</span> <span
  m='163730'>the</span> <span m='163950'>image</span> <span m='164400'>of</span>
  <span m='164550'>v</span> <span m='165300'>under</span> <span
  m='165810'>the</span> <span m='167800'>greater</span> <span
  m='168150'>than</span> <span m='168270'>or</span> <span
  m='168380'>equal</span> <span m='168600'>to</span> <span m='168700'>0</span>
  <span m='169030'>walk</span> <span m='169360'>relation.</span> <span
  m='170210'>E</span> <span m='170370'>star</span> <span m='171300'>is</span>
  <span m='171490'>our</span> <span m='171610'>notation</span> <span
  m='172210'>for</span> <span m='172750'>the</span> <span m='172860'>walk</span>
  <span m='173250'>relation</span> <span m='173820'>in</span> <span
  m='173990'>the</span> <span m='174070'>graph</span> <span
  m='174500'>whose</span> <span m='174720'>edges</span> <span
  m='175110'>are</span> <span m='175280'>E,</span> <span
  m='176120'>including</span> <span m='176900'>walks</span> <span
  m='177270'>of</span> <span m='177410'>length</span> <span m='177650'>0.</span>
  <span m='180620'>So</span> <span m='181360'>a</span> <span
  m='181480'>graph</span> <span m='181810'>is</span> <span
  m='181960'>connected</span> <span m='182590'>then</span> <span
  m='183220'>means</span> <span m='183540'>it</span> <span
  m='183660'>really</span> <span m='183930'>has</span> <span
  m='184170'>only</span> <span m='184470'>one</span> <span
  m='185070'>connected</span> <span m='185630'>component.</span> </p>
embedded_media:
  - uid: ad0197ebaebbe218022e47393ee210e6
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 6b92a3c27ad29dcb6cbb33e332c457cb
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: df368f5b910c77ab7db7135078cdea7c
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: TIQ3xN38jgM
  - uid: cd041c163d3454ee73cb549f24480368
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/TIQ3xN38jgM/default.jpg'
  - uid: 45662d67b994a818a6562b709632b7fb
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: TIQ3xN38jgM
  - uid: 8ad05de032d73eaf25020fabd32408ac
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: TIQ3xN38jgM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/vertical-857c6f8a582c/connectivity/TIQ3xN38jgM.srt
  - uid: a1481577ce526bedf7fa08fa1ef3157a
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: TIQ3xN38jgM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/tp7-3/vertical-857c6f8a582c/connectivity/TIQ3xN38jgM.pdf
  - uid: 577fa77985d4d11402db93f1293e1b3e
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: fc4df4ee02cccbfa06670d4dae855735
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a7924556f34bcce837f19de9f697260e
    parent_uid: f805a13566b9c2888c6e6eee83e44b68
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_simpleconnect_video_ipod.mp4
type: courses
layout: video
---
