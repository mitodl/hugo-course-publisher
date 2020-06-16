---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers depth-first search,
  including edge classification, and how DFS is used for cycle detection and
  topological sort.</p> <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: AfSk24UTFS8
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Video-YouTube-Stream
    type: Video
    uid: 6f0ee1bb981f0408ce9cef55c197f3d5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/AfSk24UTFS8/default.jpg'
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fbcdd84f31fd02fb31f891250cd96b51
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-14-depth-first-search/id585700718?i=126127767
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Video-iTunes U-MP4
    type: Video
    uid: 1768c557114ae82e2d4f32cc9370570b
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec14_300k.mp4'
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Video-Internet Archive-MP4
    type: Video
    uid: cf171f1a339ad58712f6ff8b6683fcee
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: AfSk24UTFS8
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8f254e5271aed02880c764c65573f809
  - id: AfSk24UTFS8.srt
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-14-depth-first-search-dfs-topological-sort/AfSk24UTFS8.srt
    title: 3play caption file
    type: null
    uid: 74577ef77bff3a5a74b0ac988a932c84
  - id: AfSk24UTFS8.pdf
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-14-depth-first-search-dfs-topological-sort/AfSk24UTFS8.pdf
    title: 3play pdf file
    type: null
    uid: 77c402d2da9deac0d2ad937823b750ed
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7565f2d59f365d7a93859c864c892d4b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 75894ca06489f3b79b2da067cd1acdc7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 069371b08a87cc88b7bf4a57e1a696e7
inline_embed_id: '23350279lecture14:depth-firstsearch(dfs),topologicalsort28769727'
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-14-depth-first-search-dfs-topological-sort
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-14-depth-first-search-dfs-topological-sort
title: 'Lecture 14: Depth-First Search (DFS), Topological Sort'
transcript: >-
  <p><span m='90'>The</span> <span m='210'>following</span> <span
  m='640'>content</span> <span m='1240'>is</span> <span m='1350'>provided</span>
  <span m='1800'>under</span> <span m='2080'>a</span> <span
  m='2120'>Creative</span> <span m='2520'>Commons</span> <span
  m='2920'>license.</span> <span m='4040'>Your</span> <span
  m='4220'>support</span> <span m='4730'>will</span> <span m='4890'>help</span>
  <span m='5130'>MIT</span> <span m='5590'>OpenCourseWare</span> <span
  m='6370'>continue</span> <span m='6880'>to</span> <span m='6970'>offer</span>
  <span m='7380'>high</span> <span m='7620'>quality</span> <span
  m='8140'>educational</span> <span m='8760'>resources</span> <span
  m='9390'>for</span> <span m='9540'>free.</span> <span m='10740'>To</span>
  <span m='10750'>make</span> <span m='10950'>a</span> <span
  m='11000'>donation</span> <span m='11690'>or</span> <span
  m='11950'>view</span> <span m='12390'>additional</span> <span
  m='12820'>materials</span> <span m='13350'>from</span> <span
  m='13510'>hundreds</span> <span m='13940'>of</span> <span m='14050'>MIT</span>
  <span m='14480'>courses,</span> <span m='15590'>visit</span> <span
  m='15800'>MIT</span> <span m='16230'>OpenCourseWare</span> <span
  m='17270'>at</span> <span m='17440'>ocw.mit.edu</span> </p><p><span
  m='21994'>PROFESSOR: All</span> <span m='22232'>right,</span> <span
  m='22470'>let's</span> <span m='22690'>get</span> <span
  m='22870'>started.</span> <span m='24850'>We</span> <span
  m='25190'>return</span> <span m='25630'>today</span> <span m='26020'>to</span>
  <span m='26480'>graph</span> <span m='26900'>search.</span> <span
  m='27810'>Last</span> <span m='28090'>time</span> <span m='28340'>we</span>
  <span m='28450'>saw</span> <span m='28660'>breadth-first</span> <span
  m='29210'>search,</span> <span m='29520'>today</span> <span
  m='29810'>we're</span> <span m='29950'>going</span> <span m='30060'>to</span>
  <span m='30160'>do</span> <span m='30310'>depth-first</span> <span
  m='30820'>search.</span> <span m='31790'>It's</span> <span m='31880'>a</span>
  <span m='31920'>simple</span> <span m='32270'>algorithm,</span> <span
  m='32800'>but</span> <span m='32990'>you</span> <span m='33130'>can</span>
  <span m='33240'>do</span> <span m='33360'>lots</span> <span
  m='33600'>of</span> <span m='33670'>cool</span> <span m='33870'>things</span>
  <span m='34130'>with</span> <span m='34290'>it.</span> <span
  m='34570'>And</span> <span m='34640'>that's</span> <span m='34870'>what</span>
  <span m='35020'>I'll</span> <span m='35130'>spend</span> <span
  m='35450'>most</span> <span m='35700'>of</span> <span m='35790'>today</span>
  <span m='36070'>on,</span> <span m='36710'>in</span> <span
  m='36820'>particular,</span> <span m='37590'>telling</span> <span
  m='37910'>whether</span> <span m='38080'>your</span> <span
  m='38220'>graph</span> <span m='38490'>has</span> <span m='38700'>a</span>
  <span m='38760'>cycle,</span> <span m='39680'>and</span> <span
  m='40000'>something</span> <span m='40300'>called</span> <span
  m='40540'>topological</span> <span m='41230'>sort.</span> </p><p><span
  m='42680'>As</span> <span m='42980'>usual,</span> <span
  m='44070'>basically</span> <span m='44260'>in</span> <span
  m='44470'>all</span> <span m='45210'>graph</span> <span
  m='45490'>algorithms</span> <span m='45970'>in</span> <span
  m='46020'>this</span> <span m='46200'>class,</span> <span m='46990'>the</span>
  <span m='47120'>input,</span> <span m='47810'>the</span> <span
  m='47910'>way</span> <span m='48040'>the</span> <span m='48140'>graph</span>
  <span m='48410'>is</span> <span m='48510'>specified</span> <span
  m='48790'>is</span> <span m='49070'>as</span> <span m='49380'>an</span> <span
  m='49480'>adjacency</span> <span m='50040'>list,</span> <span
  m='50790'>or</span> <span m='51070'>I</span> <span m='51160'>guess</span>
  <span m='51360'>adjacency</span> <span m='51820'>list</span> <span
  m='52210'>plural.</span> <span m='52840'>So</span> <span m='53020'>you</span>
  <span m='53200'>have</span> <span m='53310'>a</span> <span
  m='53360'>bunch</span> <span m='53630'>of</span> <span m='53730'>lists,</span>
  <span m='54130'>each</span> <span m='54430'>one</span> <span
  m='55190'>says</span> <span m='55480'>for</span> <span m='55630'>each</span>
  <span m='55810'>vertex,</span> <span m='56460'>what</span> <span
  m='56570'>are</span> <span m='56630'>the</span> <span
  m='56740'>vertices</span> <span m='57260'>I'm</span> <span
  m='57430'>connected</span> <span m='57920'>to?</span> <span
  m='58550'>What</span> <span m='58700'>are</span> <span m='58720'>the</span>
  <span m='58810'>vertices</span> <span m='59240'>I</span> <span
  m='59300'>can</span> <span m='59445'>get</span> <span m='59590'>to</span>
  <span m='59800'>in</span> <span m='59960'>one</span> <span
  m='60210'>step</span> <span m='60610'>via</span> <span m='60800'>an</span>
  <span m='61220'>edge?</span> <span m='62900'>So</span> <span
  m='63020'>that's</span> <span m='63230'>our</span> <span
  m='63290'>input</span> <span m='64290'>and</span> <span m='64610'>our</span>
  <span m='64730'>goal,</span> <span m='65040'>in</span> <span
  m='65140'>general,</span> <span m='65510'>with</span> <span
  m='65550'>graph</span> <span m='65830'>search</span> <span m='66150'>is</span>
  <span m='66280'>to</span> <span m='66510'>explore</span> <span
  m='67040'>the</span> <span m='67170'>graph.</span> <span m='68630'>In</span>
  <span m='68820'>particular,</span> <span m='69440'>the</span> <span
  m='69570'>kind</span> <span m='69770'>of</span> <span
  m='69870'>exploration</span> <span m='70390'>we're</span> <span
  m='70490'>going</span> <span m='70590'>to</span> <span m='70650'>be</span>
  <span m='70770'>doing</span> <span m='71000'>today</span> <span
  m='71330'>is</span> <span m='71480'>to</span> <span m='71570'>visit</span>
  <span m='71960'>all</span> <span m='72170'>the</span> <span
  m='72240'>vertices,</span> <span m='73430'>in</span> <span
  m='73580'>some</span> <span m='73860'>order,</span> <span m='74800'>and</span>
  <span m='74990'>visit</span> <span m='75270'>each</span> <span
  m='75450'>vertex</span> <span m='75810'>only</span> <span
  m='76100'>once.</span> </p><p><span m='77470'>So</span> <span
  m='77600'>the</span> <span m='77740'>way</span> <span m='77900'>we</span>
  <span m='78030'>did</span> <span m='78200'>breadth-first</span> <span
  m='78650'>search,</span> <span m='79040'>breadth-first</span> <span
  m='79430'>search</span> <span m='79670'>was</span> <span
  m='79790'>really</span> <span m='80060'>good.</span> <span m='80500'>It</span>
  <span m='80750'>explored</span> <span m='81300'>things</span> <span
  m='81520'>layer</span> <span m='81780'>by</span> <span m='81960'>layer,</span>
  <span m='82830'>and</span> <span m='83020'>that</span> <span
  m='83160'>was</span> <span m='83340'>nice</span> <span
  m='83690'>because</span> <span m='84080'>it</span> <span m='84160'>gave</span>
  <span m='84350'>us</span> <span m='84440'>shortest</span> <span
  m='84890'>paths,</span> <span m='85340'>it</span> <span m='85600'>gave</span>
  <span m='85800'>us</span> <span m='85920'>the</span> <span
  m='86010'>fastest</span> <span m='86620'>way</span> <span m='86850'>to</span>
  <span m='86930'>get</span> <span m='87150'>to</span> <span
  m='87240'>everywhere,</span> <span m='88830'>from</span> <span
  m='89110'>a</span> <span m='89180'>particular</span> <span
  m='89730'>source,</span> <span m='90090'>vertex</span> <span
  m='90530'>s.</span> <span m='91490'>But</span> <span m='91680'>if</span> <span
  m='91880'>you</span> <span m='92070'>can't</span> <span m='92540'>get</span>
  <span m='92820'>from</span> <span m='93030'>s</span> <span m='93300'>to</span>
  <span m='93410'>your</span> <span m='93560'>vertex,</span> <span
  m='94210'>than</span> <span m='95390'>the</span> <span
  m='95500'>shortest</span> <span m='95860'>way</span> <span m='95950'>to</span>
  <span m='96010'>get</span> <span m='96210'>there</span> <span
  m='96400'>is</span> <span m='96490'>infinity,</span> <span
  m='97410'>there's</span> <span m='97580'>no</span> <span m='98410'>way</span>
  <span m='98520'>to</span> <span m='98580'>get</span> <span
  m='98810'>there.</span> </p><p><span m='99440'>And</span> <span
  m='99720'>BFS</span> <span m='100010'>is</span> <span m='100120'>good</span>
  <span m='100320'>for</span> <span m='100500'>detecting</span> <span
  m='100990'>that,</span> <span m='101180'>it</span> <span m='101210'>can</span>
  <span m='101400'>tell</span> <span m='101630'>you</span> <span
  m='101790'>which</span> <span m='102100'>vertices</span> <span
  m='103780'>are</span> <span m='104050'>unreachable</span> <span
  m='104730'>from</span> <span m='104860'>s.</span> <span m='106490'>DFS</span>
  <span m='106990'>can</span> <span m='107140'>do</span> <span
  m='107250'>that</span> <span m='107460'>as</span> <span
  m='107580'>well,</span> <span m='108300'>but</span> <span
  m='109490'>it's</span> <span m='109770'>often</span> <span
  m='110130'>used</span> <span m='110430'>to</span> <span
  m='110540'>explore</span> <span m='110920'>the</span> <span
  m='111020'>whole</span> <span m='111400'>graph,</span> <span
  m='111790'>not</span> <span m='112150'>just</span> <span m='112390'>the</span>
  <span m='112480'>part</span> <span m='112730'>reachable</span> <span
  m='113110'>from</span> <span m='113310'>s,</span> <span m='113980'>and</span>
  <span m='114140'>so</span> <span m='114210'>we're</span> <span
  m='114330'>going</span> <span m='114420'>to</span> <span m='114490'>see</span>
  <span m='114670'>how</span> <span m='114820'>to</span> <span
  m='114910'>do</span> <span m='115020'>that</span> <span
  m='115230'>today.</span> <span m='115800'>This</span> <span
  m='116030'>trick</span> <span m='116300'>could</span> <span
  m='116480'>be</span> <span m='116590'>used</span> <span m='116820'>for</span>
  <span m='117010'>be</span> <span m='117140'>BFS</span> <span
  m='117510'>or</span> <span m='117730'>for</span> <span m='117900'>DFS,</span>
  <span m='118580'>but</span> <span m='118910'>we're</span> <span
  m='119140'>going</span> <span m='119240'>to</span> <span m='119310'>do</span>
  <span m='119450'>it</span> <span m='119510'>here</span> <span
  m='119710'>for</span> <span m='119890'>DFS,</span> <span
  m='120440'>because</span> <span m='120790'>that's</span> <span
  m='121590'>more</span> <span m='122010'>common,</span> <span
  m='122530'>let's</span> <span m='122685'>say.</span> </p><p><span
  m='127080'>So</span> <span m='128740'>DFS.</span> <span m='141110'>So</span>
  <span m='141200'>depth-first</span> <span m='141660'>search</span> <span
  m='142500'>is</span> <span m='142820'>kind</span> <span m='143080'>of</span>
  <span m='143150'>like</span> <span m='143350'>how</span> <span
  m='143510'>you</span> <span m='143650'>solve</span> <span m='143970'>a</span>
  <span m='144020'>maze.</span> <span m='144930'>Like,</span> <span
  m='145460'>the</span> <span m='145610'>other</span> <span
  m='145760'>weekend</span> <span m='146110'>I</span> <span
  m='146170'>was</span> <span m='146390'>at</span> <span m='146510'>the</span>
  <span m='146830'>big</span> <span m='147010'>corn</span> <span
  m='147350'>maze</span> <span m='148160'>in</span> <span
  m='148750'>central</span> <span m='149150'>Massachusetts,</span> <span
  m='150410'>and</span> <span m='151470'>it's</span> <span
  m='152050'>easy</span> <span m='152300'>to</span> <span m='152340'>get</span>
  <span m='152510'>lost</span> <span m='152880'>in</span> <span
  m='152960'>there,</span> <span m='154050'>in</span> <span
  m='154160'>particular,</span> <span m='154620'>because</span> <span
  m='154810'>I</span> <span m='154860'>didn't</span> <span
  m='155080'>bring</span> <span m='155270'>any</span> <span
  m='155410'>bread</span> <span m='155710'>crumbs.</span> <span
  m='156250'>The</span> <span m='156350'>proper</span> <span
  m='156800'>way</span> <span m='157000'>to</span> <span m='157100'>solve</span>
  <span m='157410'>a</span> <span m='157560'>maze,</span> <span
  m='158010'>if</span> <span m='158180'>you're</span> <span m='158690'>in</span>
  <span m='158870'>there</span> <span m='159160'>and</span> <span
  m='159290'>all</span> <span m='159420'>you</span> <span m='159530'>can</span>
  <span m='159660'>do</span> <span m='159780'>is</span> <span
  m='159880'>see</span> <span m='160050'>which</span> <span
  m='160260'>way</span> <span m='160420'>to</span> <span m='160500'>go</span>
  <span m='161070'>next</span> <span m='161450'>and</span> <span
  m='161560'>then</span> <span m='161680'>walk</span> <span m='161950'>a</span>
  <span m='162000'>little</span> <span m='162200'>bit</span> <span
  m='162920'>to</span> <span m='163070'>the</span> <span m='163190'>next</span>
  <span m='163450'>junction,</span> <span m='163730'>and</span> <span
  m='164010'>then</span> <span m='164160'>you</span> <span
  m='164250'>have</span> <span m='164350'>to</span> <span m='164410'>keep</span>
  <span m='164580'>making</span> <span m='164840'>decisions.</span> </p><p><span
  m='165970'>Unless</span> <span m='166330'>you</span> <span
  m='166410'>have</span> <span m='166600'>a</span> <span
  m='166680'>really</span> <span m='166920'>good</span> <span
  m='167070'>memory,</span> <span m='167510'>which</span> <span
  m='167610'>I</span> <span m='167690'>do</span> <span m='167860'>not,</span>
  <span m='169490'>teaching</span> <span m='169770'>staff</span> <span
  m='170050'>can</span> <span m='170180'>attest</span> <span
  m='170500'>to</span> <span m='170580'>that,</span> <span
  m='172140'>then</span> <span m='172920'>an</span> <span m='173060'>easy</span>
  <span m='173340'>way</span> <span m='173460'>to</span> <span
  m='173570'>do</span> <span m='173710'>it</span> <span m='173780'>is</span>
  <span m='173850'>to</span> <span m='173960'>leave</span> <span
  m='174200'>bread</span> <span m='174440'>crumbs</span> <span
  m='174740'>behind,</span> <span m='175250'>say,</span> <span
  m='175720'>this</span> <span m='175910'>is</span> <span m='176040'>the</span>
  <span m='176140'>last</span> <span m='176560'>way</span> <span
  m='176800'>I</span> <span m='176870'>went</span> <span m='177280'>from</span>
  <span m='177540'>this</span> <span m='177770'>node,</span> <span
  m='178710'>so</span> <span m='179110'>that</span> <span m='179340'>when</span>
  <span m='179530'>I</span> <span m='179640'>reach</span> <span
  m='179990'>a</span> <span m='180050'>deadend,</span> <span m='180900'>I</span>
  <span m='181030'>have</span> <span m='181200'>to</span> <span
  m='181290'>turn</span> <span m='181490'>around</span> <span
  m='181710'>and</span> <span m='181770'>backtrack.</span> <span
  m='182390'>I</span> <span m='182570'>reach</span> <span m='182890'>a</span>
  <span m='182950'>breadcrumb</span> <span m='183380'>that</span> <span
  m='183520'>say,</span> <span m='183660'>oh,</span> <span
  m='183890'>last</span> <span m='184160'>time</span> <span
  m='184350'>you</span> <span m='184450'>went</span> <span
  m='184620'>this</span> <span m='184800'>way,</span> <span
  m='185260'>next</span> <span m='185500'>time</span> <span
  m='185680'>you</span> <span m='185770'>should</span> <span
  m='185920'>go</span> <span m='186040'>this</span> <span m='186270'>way,</span>
  <span m='187160'>and</span> <span m='187450'>in</span> <span
  m='187580'>particular,</span> <span m='188070'>keep</span> <span
  m='188280'>track</span> <span m='188600'>at</span> <span
  m='188760'>each</span> <span m='189000'>node,</span> <span
  m='189790'>which</span> <span m='190080'>of</span> <span m='190160'>the</span>
  <span m='190300'>edges</span> <span m='190570'>have</span> <span
  m='190740'>I</span> <span m='190800'>visited,</span> <span
  m='191710'>which</span> <span m='191950'>ones</span> <span
  m='192180'>are</span> <span m='192250'>still</span> <span
  m='192480'>left</span> <span m='192700'>to</span> <span
  m='192800'>visit.</span> <span m='194890'>And</span> <span
  m='195080'>this</span> <span m='195250'>can</span> <span m='195350'>be</span>
  <span m='195490'>done</span> <span m='195760'>very</span> <span
  m='196010'>easily</span> <span m='197050'>on</span> <span m='197200'>a</span>
  <span m='197250'>computer</span> <span m='198040'>using</span> <span
  m='198430'>recursion.</span> </p><p><span m='210520'>So</span> <span
  m='210770'>high-level</span> <span m='211160'>description</span> <span
  m='211860'>is</span> <span m='212030'>we're</span> <span
  m='212140'>going</span> <span m='212260'>to</span> <span
  m='212330'>just</span> <span m='212560'>recursively</span> <span
  m='215050'>explore</span> <span m='216110'>the</span> <span
  m='216210'>graph,</span> <span m='217400'>backtracking</span> <span
  m='219150'>as</span> <span m='219450'>necessary,</span> <span
  m='220360'>kind</span> <span m='220670'>of</span> <span m='220730'>like</span>
  <span m='220950'>how</span> <span m='221070'>you</span> <span
  m='221200'>solve</span> <span m='221770'>a</span> <span
  m='222160'>maze.</span> <span m='234980'>In</span> <span
  m='235110'>fact,</span> <span m='235410'>when</span> <span m='235570'>I</span>
  <span m='235690'>was</span> <span m='238040'>seven</span> <span
  m='238330'>years</span> <span m='238640'>old,</span> <span
  m='239210'>one</span> <span m='239380'>of</span> <span m='239440'>the</span>
  <span m='239520'>first</span> <span m='239780'>computer</span> <span
  m='240150'>programs</span> <span m='240570'>I</span> <span
  m='240620'>wrote</span> <span m='240960'>was</span> <span
  m='241025'>for</span> <span m='241090'>solving</span> <span
  m='241470'>a</span> <span m='241520'>maze.</span> <span m='241790'>I</span>
  <span m='241870'>didn't</span> <span m='242040'>know</span> <span
  m='242380'>it</span> <span m='242486'>was</span> <span
  m='242593'>depth-first</span> <span m='242700'>search</span> <span
  m='242990'>at</span> <span m='243050'>the</span> <span m='243160'>time,</span>
  <span m='244140'>but</span> <span m='244180'>now</span> <span
  m='244360'>I</span> <span m='244460'>know.</span> <span m='251050'>It</span>
  <span m='251185'>was</span> <span m='251320'>so</span> <span
  m='251480'>much</span> <span m='251690'>harder</span> <span
  m='251990'>doing</span> <span m='252250'>algorithms</span> <span
  m='252690'>when</span> <span m='252750'>I</span> <span
  m='252810'>didn't</span> <span m='252990'>know</span> <span
  m='253180'>what</span> <span m='253300'>they</span> <span
  m='253400'>were.</span> </p><p><span m='255540'>Anyway,</span> <span
  m='258646'>I'm</span> <span m='259089'>going</span> <span m='259180'>to</span>
  <span m='259230'>write</span> <span m='259380'>some</span> <span
  m='259510'>code</span> <span m='259899'>for</span> <span
  m='260100'>depth-first</span> <span m='260490'>search,</span> <span
  m='260779'>it</span> <span m='260919'>is</span> <span m='261060'>super</span>
  <span m='261490'>simple</span> <span m='261820'>code,</span> <span
  m='265430'>the</span> <span m='265620'>simplest</span> <span
  m='266120'>graph</span> <span m='266410'>algorithm.</span> <span
  m='289175'>It's</span> <span m='289690'>four</span> <span
  m='289940'>lines.</span> </p><p><span m='305620'>That's</span> <span
  m='305880'>it.</span> <span m='306090'>I'm</span> <span
  m='306220'>going</span> <span m='306330'>to</span> <span
  m='306390'>write</span> <span m='306540'>a</span> <span
  m='306580'>little</span> <span m='306750'>bit</span> <span
  m='307060'>of</span> <span m='307250'>code</span> <span
  m='307520'>after</span> <span m='307830'>this,</span> <span
  m='308280'>but</span> <span m='309490'>this</span> <span m='309670'>is</span>
  <span m='309790'>basic</span> <span m='310530'>depth-first</span> <span
  m='311000'>search.</span> <span m='311500'>This</span> <span
  m='311680'>will</span> <span m='311820'>visit</span> <span
  m='312190'>all</span> <span m='312410'>the</span> <span
  m='312470'>vertices</span> <span m='313000'>reachable</span> <span
  m='313580'>from</span> <span m='313890'>a</span> <span m='313930'>given</span>
  <span m='314280'>source,</span> <span m='314690'>vertex</span> <span
  m='315170'>s.</span> <span m='316480'>So</span> <span m='316650'>we're</span>
  <span m='316780'>given</span> <span m='317160'>the</span> <span
  m='318070'>adjacency</span> <span m='318600'>list.</span> <span
  m='319780'>I</span> <span m='319830'>don't</span> <span m='319980'>know</span>
  <span m='320110'>why</span> <span m='320290'>I</span> <span
  m='320395'>put</span> <span m='320500'>v</span> <span m='320700'>here,</span>
  <span m='320890'>you</span> <span m='321020'>could</span> <span
  m='321140'>erase</span> <span m='321460'>it,</span> <span
  m='322130'>it's</span> <span m='322260'>not</span> <span
  m='322390'>necessary.</span> <span m='324380'>And</span> <span
  m='325040'>all</span> <span m='325250'>we</span> <span m='325360'>do</span>
  <span m='325800'>is,</span> <span m='326090'>we</span> <span
  m='326190'>have</span> <span m='326350'>our</span> <span
  m='326420'>vertex</span> <span m='326880'>b,</span> <span
  m='328880'>sorry,</span> <span m='329030'>we</span> <span
  m='329126'>have</span> <span m='329223'>our</span> <span
  m='329320'>vertex</span> <span m='329720'>s.</span> <span m='331300'>We</span>
  <span m='331510'>look</span> <span m='331750'>at</span> <span
  m='331880'>all</span> <span m='332160'>of</span> <span m='332260'>the</span>
  <span m='332430'>outgoing</span> <span m='332910'>edges</span> <span
  m='333240'>from</span> <span m='333460'>s.</span> <span m='335930'>For</span>
  <span m='336180'>each</span> <span m='336400'>one,</span> <span
  m='336820'>we'll</span> <span m='337250'>call</span> <span
  m='337411'>it</span> <span m='337573'>v,</span> <span m='339410'>we</span>
  <span m='340420'>check,</span> <span m='340950'>have</span> <span
  m='341230'>I</span> <span m='341290'>visited</span> <span
  m='341710'>this</span> <span m='341880'>vertex</span> <span
  m='342300'>already?</span> <span m='345460'>A place</span> <span
  m='345850'>where</span> <span m='345960'>we</span> <span
  m='346050'>need</span> <span m='346190'>to</span> <span m='346250'>be</span>
  <span m='346360'>careful</span> <span m='346880'>is</span> <span
  m='347300'>to</span> <span m='347400'>not</span> <span
  m='347650'>repeat</span> <span m='347980'>vertices.</span> <span
  m='349160'>We</span> <span m='349270'>need</span> <span m='349350'>to</span>
  <span m='349430'>do</span> <span m='349540'>this</span> <span
  m='349760'>in</span> <span m='349860'>BFS</span> <span m='350430'>as</span>
  <span m='350540'>well.</span> </p><p><span m='356110'>So,</span> <span
  m='357360'>the</span> <span m='357540'>way</span> <span
  m='357710'>we're</span> <span m='357840'>going</span> <span
  m='357950'>to</span> <span m='358020'>do</span> <span m='358150'>that</span>
  <span m='358430'>is</span> <span m='358590'>by</span> <span
  m='358740'>setting</span> <span m='359150'>the</span> <span
  m='359290'>parent</span> <span m='359870'>of</span> <span m='360050'>a</span>
  <span m='360110'>node,</span> <span m='360450'>we'll</span> <span
  m='360590'>see</span> <span m='360880'>what</span> <span
  m='361030'>that</span> <span m='361300'>actually</span> <span
  m='361630'>means</span> <span m='361910'>later.</span> <span
  m='363210'>But</span> <span m='363450'>for</span> <span m='363560'>now,</span>
  <span m='363780'>it's</span> <span m='363890'>just,</span> <span
  m='364330'>are</span> <span m='364510'>you</span> <span m='364650'>in</span>
  <span m='364750'>the</span> <span m='364850'>parent</span> <span
  m='365120'>structure</span> <span m='365500'>or</span> <span
  m='365580'>not?</span> <span m='365940'>This</span> <span m='366160'>is</span>
  <span m='366360'>initially,</span> <span m='367860'>we've</span> <span
  m='368110'>seen</span> <span m='368440'>s,</span> <span m='369060'>so</span>
  <span m='369280'>we</span> <span m='369370'>give</span> <span
  m='369540'>it</span> <span m='369600'>a</span> <span m='369660'>parent</span>
  <span m='370060'>of</span> <span m='370140'>nothing,</span> <span
  m='371260'>but</span> <span m='371440'>it</span> <span
  m='371700'>exists</span> <span m='372090'>in</span> <span
  m='372210'>this</span> <span m='372570'>dictionary.</span> <span
  m='374250'>If</span> <span m='375400'>the</span> <span
  m='375560'>vertex</span> <span m='375950'>b</span> <span
  m='376085'>that</span> <span m='376220'>we're</span> <span
  m='376360'>looking</span> <span m='376680'>at</span> <span
  m='376830'>is</span> <span m='376950'>not</span> <span m='377150'>in</span>
  <span m='377260'>our</span> <span m='377340'>dictionary,</span> <span
  m='377750'>we</span> <span m='377880'>haven't</span> <span
  m='378190'>seen</span> <span m='378370'>it</span> <span m='378470'>yet,</span>
  <span m='379300'>we</span> <span m='379500'>mark</span> <span
  m='379675'>it</span> <span m='379850'>as</span> <span m='379990'>seen</span>
  <span m='380410'>by</span> <span m='380540'>setting</span> <span
  m='380870'>its</span> <span m='381010'>parent</span> <span
  m='381965'>to</span> <span m='382340'>s,</span> <span m='383190'>and</span>
  <span m='383370'>then</span> <span m='383470'>we</span> <span
  m='383590'>recursively</span> <span m='384160'>visit</span> <span
  m='384440'>it.</span> </p><p><span m='385060'>That's</span> <span
  m='385290'>it.</span> <span m='386310'>Super</span> <span
  m='386730'>simple,</span> <span m='387660'>just</span> <span
  m='387880'>recurse.</span> <span m='389120'>Sort</span> <span
  m='389570'>of</span> <span m='389650'>the</span> <span
  m='389740'>magical</span> <span m='390220'>part</span> <span
  m='390450'>is</span> <span m='390630'>the</span> <span
  m='391280'>preventing</span> <span m='391740'>yourself</span> <span
  m='392130'>from</span> <span m='392400'>repeating.</span> <span
  m='394070'>As</span> <span m='394290'>you</span> <span
  m='394390'>explore</span> <span m='394770'>the</span> <span
  m='395040'>graph,</span> <span m='396380'>if</span> <span
  m='396540'>you</span> <span m='396690'>reach</span> <span
  m='396930'>something</span> <span m='397250'>you've</span> <span
  m='397450'>already</span> <span m='397660'>seen</span> <span
  m='397880'>before</span> <span m='398570'>you</span> <span
  m='398690'>just</span> <span m='398920'>skip</span> <span m='399100'>it</span>
  <span m='399200'>again.</span> <span m='399950'>So</span> <span
  m='399980'>you</span> <span m='400140'>only</span> <span
  m='400630'>visit</span> <span m='400980'>every</span> <span
  m='401270'>vertex</span> <span m='402410'>once,</span> <span
  m='403740'>at</span> <span m='403900'>most</span> <span
  m='404180'>once.</span> <span m='405010'>This</span> <span
  m='405770'>will</span> <span m='405910'>not</span> <span
  m='406160'>visit</span> <span m='406400'>the</span> <span
  m='406510'>entire</span> <span m='406830'>graph,</span> <span
  m='407260'>it</span> <span m='407346'>will</span> <span m='407433'>only</span>
  <span m='407520'>visit</span> <span m='407870'>the</span> <span
  m='407930'>vertices</span> <span m='408430'>reachable</span> <span
  m='408870'>from</span> <span m='409090'>s.</span> </p><p><span
  m='410840'>The</span> <span m='410950'>next</span> <span
  m='411270'>part</span> <span m='411460'>of</span> <span m='411510'>the</span>
  <span m='411630'>code</span> <span m='411870'>I'd</span> <span
  m='412000'>like</span> <span m='412190'>to</span> <span m='412280'>give</span>
  <span m='412470'>you</span> <span m='412940'>is</span> <span
  m='413680'>for</span> <span m='413870'>visiting</span> <span
  m='414280'>all</span> <span m='414500'>the</span> <span
  m='414560'>vertices,</span> <span m='416160'>and</span> <span
  m='416320'>in</span> <span m='416410'>the</span> <span
  m='416490'>textbook</span> <span m='416920'>this</span> <span
  m='417120'>is</span> <span m='417240'>called</span> <span
  m='417480'>the</span> <span m='417590'>DFS,</span> <span
  m='418050'>whereas</span> <span m='418340'>this</span> <span
  m='418540'>is</span> <span m='418650'>just</span> <span
  m='418820'>called</span> <span m='419010'>DFS</span> <span
  m='419460'>visit,</span> <span m='420470'>that's</span> <span
  m='420580'>sort</span> <span m='420750'>of</span> <span m='420840'>the</span>
  <span m='420880'>recursive</span> <span m='421340'>part,</span> <span
  m='422180'>and</span> <span m='422390'>this</span> <span m='422570'>is</span>
  <span m='422670'>sort</span> <span m='422840'>of</span> <span
  m='422960'>a</span> <span m='423090'>top</span> <span m='423430'>level</span>
  <span m='426030'>algorithm.</span> <span m='428330'>Here</span> <span
  m='428530'>we</span> <span m='428670'>are</span> <span m='428840'>going</span>
  <span m='429060'>to</span> <span m='429140'>use</span> <span
  m='429300'>the</span> <span m='429400'>set</span> <span m='429620'>of</span>
  <span m='429690'>vertices,</span> <span m='430250'>b,</span> <span
  m='439840'>and</span> <span m='439960'>here</span> <span
  m='440100'>we're</span> <span m='440200'>just</span> <span
  m='440390'>going</span> <span m='440510'>to</span> <span
  m='440550'>iterate</span> <span m='441120'>over</span> <span
  m='441420'>the</span> <span m='441620'>s's.</span> <span m='467960'>So</span>
  <span m='468110'>it</span> <span m='468150'>looks</span> <span
  m='468320'>almost</span> <span m='468710'>the</span> <span
  m='468790'>same,</span> <span m='469820'>but</span> <span
  m='470070'>what</span> <span m='470215'>we're</span> <span
  m='470360'>iterating</span> <span m='470820'>over</span> <span
  m='471150'>is</span> <span m='471290'>different.</span> <span
  m='472200'>Here</span> <span m='472440'>we're</span> <span
  m='472790'>iterating</span> <span m='473270'>over</span> <span
  m='473500'>the</span> <span m='473870'>outgoing</span> <span
  m='474260'>edges</span> <span m='474550'>from</span> <span
  m='474840'>s,</span> <span m='475720'>here</span> <span m='475910'>were</span>
  <span m='476110'>iterating</span> <span m='476630'>over</span> <span
  m='476850'>the</span> <span m='476990'>choices</span> <span
  m='477430'>of</span> <span m='477580'>s.</span> </p><p><span
  m='483190'>So</span> <span m='483350'>the</span> <span m='483490'>idea</span>
  <span m='483780'>here</span> <span m='484130'>is</span> <span
  m='484570'>we</span> <span m='484770'>don't</span> <span
  m='484990'>really</span> <span m='485340'>know</span> <span
  m='485560'>where</span> <span m='485700'>to</span> <span
  m='485800'>start</span> <span m='486060'>our</span> <span
  m='486160'>search.</span> <span m='486530'>If</span> <span
  m='486650'>it's</span> <span m='486780'>a</span> <span
  m='486840'>disconnected</span> <span m='487420'>graph</span> <span
  m='487790'>or</span> <span m='487850'>not</span> <span m='488030'>a</span>
  <span m='488080'>strongly</span> <span m='488480'>connected</span> <span
  m='488840'>graph,</span> <span m='489130'>we</span> <span
  m='489210'>might</span> <span m='489360'>have</span> <span
  m='489530'>to</span> <span m='489620'>start</span> <span m='489850'>our</span>
  <span m='489920'>search</span> <span m='490180'>multiple</span> <span
  m='490680'>times.</span> <span m='492330'>This</span> <span
  m='492580'>DFS</span> <span m='493100'>algorithm</span> <span
  m='493660'>is</span> <span m='493890'>finding</span> <span
  m='494240'>all</span> <span m='494450'>the</span> <span
  m='494550'>possible</span> <span m='495100'>places</span> <span
  m='495520'>you</span> <span m='495650'>might</span> <span
  m='496210'>start</span> <span m='496520'>the</span> <span
  m='496600'>search</span> <span m='497580'>and</span> <span
  m='497750'>trying</span> <span m='498060'>them</span> <span
  m='498210'>all.</span> <span m='499290'>So</span> <span m='499310'>it's</span>
  <span m='499400'>like,</span> <span m='499660'>OK,</span> <span
  m='500000'>let's</span> <span m='500190'>try</span> <span
  m='500340'>the</span> <span m='500430'>first</span> <span
  m='500690'>vertex.</span> <span m='501320'>If</span> <span
  m='501430'>that</span> <span m='501620'>hasn't</span> <span
  m='501860'>been</span> <span m='501990'>visited,</span> <span
  m='502360'>which</span> <span m='502530'>initially</span> <span
  m='502830'>nothing's</span> <span m='503210'>been</span> <span
  m='503350'>visited,</span> <span m='504230'>then</span> <span
  m='505490'>visit</span> <span m='505810'>it,</span> <span
  m='506360'>recursively,</span> <span m='506930'>everything</span> <span
  m='507380'>reachable</span> <span m='507770'>from</span> <span
  m='507950'>s.</span> <span m='509010'>Then</span> <span m='509220'>you</span>
  <span m='509310'>go</span> <span m='509410'>on</span> <span
  m='509540'>to</span> <span m='509630'>the</span> <span
  m='509750'>second</span> <span m='510050'>vertex.</span> </p><p><span
  m='510630'>Now,</span> <span m='510730'>you</span> <span m='510740'>may</span>
  <span m='510880'>have</span> <span m='510990'>already</span> <span
  m='511190'>visited</span> <span m='511455'>it,</span> <span
  m='511720'>then</span> <span m='511850'>you</span> <span
  m='511940'>skip</span> <span m='512220'>it.</span> <span
  m='512480'>Third</span> <span m='512659'>vertex,</span> <span
  m='513049'>maybe</span> <span m='513309'>you</span> <span
  m='513529'>visited</span> <span m='513750'>it</span> <span
  m='513920'>already.</span> <span m='514090'>Third,</span> <span
  m='514799'>fourth</span> <span m='514950'>vertex,</span> <span
  m='515520'>keep</span> <span m='515690'>going,</span> <span
  m='516250'>until</span> <span m='516360'>you</span> <span
  m='516480'>find</span> <span m='516720'>some</span> <span
  m='516870'>vertex</span> <span m='517210'>you</span> <span
  m='517289'>haven't</span> <span m='517450'>visited</span> <span
  m='517909'>at</span> <span m='517980'>all.</span> <span m='519049'>And</span>
  <span m='519090'>then</span> <span m='519190'>you</span> <span
  m='519289'>recursively</span> <span m='519799'>visit</span> <span
  m='520130'>everything</span> <span m='520570'>reachable</span> <span
  m='520980'>from</span> <span m='521220'>it,</span> <span m='522990'>and</span>
  <span m='523190'>you</span> <span m='523299'>repeat.</span> <span
  m='525400'>This</span> <span m='525610'>will</span> <span
  m='525880'>find</span> <span m='527070'>all</span> <span m='527370'>the</span>
  <span m='527470'>different</span> <span m='527840'>clusters,</span> <span
  m='528400'>all</span> <span m='528560'>the</span> <span
  m='528630'>different</span> <span m='529290'>strongly</span> <span
  m='529670'>connected</span> <span m='530040'>components</span> <span
  m='530480'>of</span> <span m='530580'>your</span> <span
  m='530700'>graph.</span> <span m='531630'>Most</span> <span
  m='531960'>of</span> <span m='532010'>the</span> <span m='532100'>work</span>
  <span m='532330'>is</span> <span m='532440'>being</span> <span
  m='532630'>done</span> <span m='532800'>by</span> <span m='532930'>this</span>
  <span m='533110'>recursion,</span> <span m='534190'>but</span> <span
  m='534320'>then</span> <span m='534460'>there's</span> <span
  m='534630'>this</span> <span m='534770'>top</span> <span
  m='535070'>level,</span> <span m='535800'>just</span> <span
  m='535970'>to</span> <span m='536030'>make</span> <span m='536190'>sure</span>
  <span m='536330'>that</span> <span m='536470'>all</span> <span
  m='536680'>the</span> <span m='536720'>vertices</span> <span
  m='537200'>get</span> <span m='537370'>visited.</span> </p><p><span
  m='539090'>Let's</span> <span m='539310'>do</span> <span m='539450'>a</span>
  <span m='539490'>little</span> <span m='539720'>example,</span> <span
  m='542350'>so</span> <span m='542450'>this</span> <span m='542640'>is</span>
  <span m='542730'>super</span> <span m='543020'>clear,</span> <span
  m='543380'>and</span> <span m='543510'>then</span> <span m='543630'>it</span>
  <span m='543700'>will</span> <span m='543830'>also</span> <span
  m='544240'>let</span> <span m='544470'>me</span> <span m='547010'>do</span>
  <span m='547130'>something</span> <span m='547410'>called</span> <span
  m='547630'>edge</span> <span m='547870'>classification.</span> <span
  m='549480'>Once</span> <span m='549710'>we</span> <span m='549810'>see</span>
  <span m='551340'>every</span> <span m='551700'>edge</span> <span
  m='552500'>in</span> <span m='552640'>the</span> <span m='552730'>graph</span>
  <span m='553340'>gets</span> <span m='553560'>visited</span> <span
  m='553960'>by</span> <span m='554090'>DFS</span> <span m='554700'>in</span>
  <span m='554870'>one</span> <span m='555100'>way</span> <span
  m='555240'>or</span> <span m='555380'>another,</span> <span
  m='555870'>and</span> <span m='555890'>it's</span> <span
  m='556050'>really</span> <span m='556250'>helpful</span> <span
  m='557390'>to</span> <span m='557550'>think</span> <span
  m='557770'>about</span> <span m='558050'>the</span> <span
  m='558130'>different</span> <span m='558450'>ways</span> <span
  m='558820'>they</span> <span m='558830'>can</span> <span m='558980'>be</span>
  <span m='559090'>visited.</span> <span m='560910'>So</span> <span
  m='563700'>here's</span> <span m='564210'>a</span> <span
  m='564300'>graph.</span> <span m='565810'>I</span> <span
  m='566270'>think</span> <span m='566460'>its</span> <span m='567170'>a</span>
  <span m='567550'>similar</span> <span m='568010'>to</span> <span
  m='568090'>one</span> <span m='568170'>from</span> <span
  m='568340'>last</span> <span m='568670'>class.</span> </p><p><span
  m='586160'>It's</span> <span m='586480'>not</span> <span
  m='586970'>strongly</span> <span m='587440'>connected,</span> <span
  m='588580'>I</span> <span m='588660'>don't</span> <span
  m='589150'>think,</span> <span m='590220'>so</span> <span
  m='590390'>you</span> <span m='590470'>can't</span> <span
  m='590730'>get</span> <span m='590990'>from</span> <span
  m='591310'>these</span> <span m='591530'>vertices</span> <span
  m='592060'>to</span> <span m='592170'>c.</span> <span m='593960'>You</span>
  <span m='594080'>can</span> <span m='594370'>get</span> <span
  m='594550'>from</span> <span m='594690'>c</span> <span m='594860'>to</span>
  <span m='595030'>everywhere,</span> <span m='595510'>it</span> <span
  m='595580'>looks</span> <span m='595800'>like,</span> <span
  m='597040'>but</span> <span m='597720'>not</span> <span
  m='597900'>strongly</span> <span m='598300'>connected.</span> <span
  m='600110'>And</span> <span m='600360'>we're</span> <span
  m='600470'>going</span> <span m='600590'>to</span> <span m='600680'>run</span>
  <span m='600870'>DFS,</span> <span m='601600'>and</span> <span
  m='601900'>I</span> <span m='601970'>think,</span> <span
  m='602410'>basically</span> <span m='602820'>in</span> <span
  m='602900'>alphabetical</span> <span m='603520'>order</span> <span
  m='605300'>is</span> <span m='605640'>how</span> <span m='605830'>we're</span>
  <span m='605960'>imagining--</span> <span m='606500'>these</span> <span
  m='606670'>vertices</span> <span m='607030'>have</span> <span
  m='607170'>to</span> <span m='607240'>be</span> <span
  m='607350'>ordered</span> <span m='607580'>somehow,</span> <span
  m='608230'>we</span> <span m='608360'>don't</span> <span
  m='608480'>really</span> <span m='608670'>care</span> <span
  m='608920'>how,</span> <span m='609690'>but</span> <span m='609900'>for</span>
  <span m='610070'>sake</span> <span m='610300'>of</span> <span
  m='610390'>example</span> <span m='610890'>I</span> <span
  m='610980'>care.</span> </p><p><span m='612680'>So</span> <span
  m='612820'>we're</span> <span m='612930'>going</span> <span
  m='613020'>to</span> <span m='613090'>start</span> <span
  m='613510'>with</span> <span m='613990'>a,</span> <span
  m='615320'>that's</span> <span m='615610'>the</span> <span
  m='615770'>first</span> <span m='616010'>vertex</span> <span
  m='616400'>in</span> <span m='616480'>here.</span> <span
  m='617050'>We're</span> <span m='617210'>going</span> <span
  m='617310'>to</span> <span m='617370'>recursively</span> <span
  m='617860'>visit</span> <span m='618190'>everything</span> <span
  m='618740'>reachable</span> <span m='619130'>from</span> <span
  m='619320'>a,</span> <span m='619570'>so</span> <span m='619780'>we</span>
  <span m='619890'>enter</span> <span m='620240'>here</span> <span
  m='621000'>with</span> <span m='621290'>s</span> <span
  m='621630'>equals</span> <span m='622090'>a.</span> <span m='622750'>So</span>
  <span m='622870'>I'll</span> <span m='622990'>mark</span> <span
  m='623300'>this</span> <span m='624630'>s1,</span> <span m='625520'>to</span>
  <span m='625610'>be</span> <span m='626410'>the</span> <span
  m='626500'>first</span> <span m='626800'>value</span> <span
  m='627733'>of</span> <span m='628420'>s</span> <span m='629400'>at</span>
  <span m='629800'>this</span> <span m='630010'>level.</span> <span
  m='633070'>So</span> <span m='633800'>we</span> <span
  m='634000'>consider--</span> <span m='634670'>I'm</span> <span
  m='634870'>going</span> <span m='634970'>to</span> <span
  m='635080'>check</span> <span m='635440'>the</span> <span
  m='635640'>order</span> <span m='635980'>here--</span> <span
  m='637180'>first</span> <span m='637480'>edge</span> <span
  m='637670'>we</span> <span m='637810'>look</span> <span m='638050'>at,</span>
  <span m='638480'>there's</span> <span m='638650'>two</span> <span
  m='638810'>outgoing</span> <span m='639200'>edges,</span> <span
  m='639500'>let's</span> <span m='639680'>say</span> <span m='639810'>we</span>
  <span m='639910'>look</span> <span m='640090'>at</span> <span
  m='640170'>this</span> <span m='640340'>one</span> <span
  m='640510'>first.</span> <span m='646230'>We</span> <span
  m='646400'>look</span> <span m='646580'>at</span> <span m='646690'>b,</span>
  <span m='647045'>b</span> <span m='647400'>has</span> <span
  m='647570'>not</span> <span m='647780'>been</span> <span
  m='647930'>visited</span> <span m='648280'>yet,</span> <span
  m='648950'>has</span> <span m='649140'>no</span> <span
  m='649280'>parent</span> <span m='649670'>pointer.</span> <span
  m='650570'>This</span> <span m='650720'>one</span> <span m='650830'>has</span>
  <span m='650980'>a</span> <span m='651040'>parent</span> <span
  m='651300'>pointer</span> <span m='651945'>of</span> <span
  m='652210'>0.</span> <span m='654040'>B</span> <span m='654260'>we're</span>
  <span m='654390'>going</span> <span m='654500'>to</span> <span
  m='654550'>give</span> <span m='654700'>a</span> <span
  m='654750'>parent</span> <span m='655030'>pointer</span> <span
  m='655810'>of</span> <span m='655965'>a,</span> <span m='656730'>that's</span>
  <span m='658200'>here.</span> <span m='659560'>Then</span> <span
  m='659695'>we</span> <span m='659830'>recursively</span> <span
  m='660350'>visit</span> <span m='660600'>everything</span> <span
  m='661000'>for</span> <span m='661120'>b.</span> </p><p><span
  m='661970'>So</span> <span m='662100'>we</span> <span m='662160'>look</span>
  <span m='662310'>at</span> <span m='662370'>all</span> <span
  m='662520'>the</span> <span m='662630'>outgoing</span> <span
  m='662950'>edges</span> <span m='663190'>from</span> <span
  m='663260'>b,</span> <span m='663330'>there's</span> <span
  m='663650'>only</span> <span m='663880'>one.</span> <span m='664670'>So</span>
  <span m='664765'>we</span> <span m='664860'>visit</span> <span
  m='665080'>this</span> <span m='665280'>edge.</span> <span
  m='669230'>for</span> <span m='669310'>b</span> <span m='669780'>to</span>
  <span m='670015'>e.</span> <span m='670250'>e</span> <span
  m='670340'>has</span> <span m='670430'>not</span> <span m='670620'>been</span>
  <span m='670750'>visited,</span> <span m='671160'>so</span> <span
  m='671290'>we</span> <span m='671440'>set</span> <span m='671670'>as</span>
  <span m='671780'>parent</span> <span m='672060'>pointer</span> <span
  m='672360'>to</span> <span m='672440'>b,</span> <span m='674140'>an</span>
  <span m='674300'>now</span> <span m='674445'>we</span> <span
  m='674590'>recursively</span> <span m='674940'>visit</span> <span
  m='675200'>e.</span> <span m='676451'>e</span> <span m='676870'>has</span>
  <span m='677330'>only</span> <span m='677540'>one</span> <span
  m='677780'>outgoing</span> <span m='678180'>edge,</span> <span
  m='678360'>so</span> <span m='678690'>we</span> <span m='678840'>look</span>
  <span m='679040'>at</span> <span m='679210'>it,</span> <span
  m='681220'>over</span> <span m='681450'>here</span> <span m='681770'>to</span>
  <span m='682150'>d.</span> <span m='685230'>d</span> <span
  m='685670'>has</span> <span m='685790'>not</span> <span m='685980'>been</span>
  <span m='686120'>visited,</span> <span m='686610'>so</span> <span
  m='687120'>we</span> <span m='687320'>set</span> <span m='687700'>a</span>
  <span m='688070'>parent</span> <span m='688290'>pointer</span> <span
  m='688580'>to</span> <span m='688670'>e,</span> <span m='689370'>and</span>
  <span m='689490'>we</span> <span m='689570'>look</span> <span
  m='689740'>at</span> <span m='689790'>all</span> <span m='689900'>the</span>
  <span m='690010'>outgoing</span> <span m='690430'>edges</span> <span
  m='690580'>from</span> <span m='690720'>d.</span> <span m='691160'>d</span>
  <span m='691260'>has</span> <span m='691360'>one</span> <span
  m='691620'>outgoing</span> <span m='692060'>edge,</span> <span
  m='692860'>which</span> <span m='693050'>is</span> <span m='693170'>to</span>
  <span m='693280'>b.</span> <span m='693760'>b</span> <span
  m='693940'>has</span> <span m='694120'>already</span> <span
  m='694410'>been</span> <span m='694580'>visited,</span> <span
  m='695760'>so</span> <span m='695940'>we</span> <span m='696040'>skip</span>
  <span m='696290'>that</span> <span m='696480'>one,</span> <span
  m='697170'>nothing</span> <span m='697330'>to</span> <span
  m='697450'>do.</span> <span m='698530'>That's</span> <span
  m='698830'>the</span> <span m='699720'>else</span> <span
  m='700050'>case</span> <span m='700750'>of</span> <span m='700930'>this</span>
  <span m='701410'>if,</span> <span m='702430'>so</span> <span
  m='702590'>we</span> <span m='702720'>do</span> <span
  m='702840'>nothing</span> <span m='703190'>in</span> <span
  m='703250'>the</span> <span m='703340'>else</span> <span
  m='703540'>case,</span> <span m='703910'>we</span> <span
  m='704250'>just</span> <span m='704340'>go</span> <span m='704800'>to</span>
  <span m='705100'>the</span> <span m='705210'>next</span> <span
  m='705470'>edge.</span> <span m='705730'>But</span> <span
  m='705860'>there's</span> <span m='706030'>no</span> <span
  m='706240'>next</span> <span m='706430'>edge</span> <span
  m='706620'>for</span> <span m='706710'>d,</span> <span m='707220'>so</span>
  <span m='707360'>we're</span> <span m='707460'>done.</span> </p><p><span
  m='708450'>So</span> <span m='708740'>this</span> <span
  m='709060'>algorithm</span> <span m='709960'>returns</span> <span
  m='710640'>to</span> <span m='710780'>the</span> <span m='710900'>next</span>
  <span m='711230'>level</span> <span m='711490'>up.</span> <span
  m='712440'>Next</span> <span m='712630'>level</span> <span
  m='712830'>up</span> <span m='713000'>was</span> <span m='713210'>e,</span>
  <span m='713460'>we</span> <span m='713620'>were</span> <span
  m='713780'>iterating</span> <span m='714220'>over</span> <span
  m='714430'>the</span> <span m='714600'>outgoing</span> <span
  m='715050'>edges</span> <span m='715210'>from</span> <span
  m='715370'>e.</span> <span m='715690'>But</span> <span m='715730'>there</span>
  <span m='715830'>was</span> <span m='715960'>only</span> <span
  m='716190'>one,</span> <span m='716470'>so</span> <span
  m='716610'>we're</span> <span m='716710'>done,</span> <span
  m='717500'>so</span> <span m='717680'>e</span> <span
  m='717880'>finishes.</span> <span m='719870'>Then</span> <span
  m='720070'>we</span> <span m='720930'>backtrack</span> <span
  m='721470'>to</span> <span m='721570'>b,</span> <span m='724200'>which</span>
  <span m='724275'>is</span> <span m='724350'>always</span> <span
  m='724820'>going</span> <span m='725080'>back</span> <span
  m='725340'>along</span> <span m='725510'>the</span> <span
  m='725600'>parent</span> <span m='725910'>pointer,</span> <span
  m='726250'>but</span> <span m='726670'>it's</span> <span
  m='726840'>also</span> <span m='727080'>just</span> <span m='727420'>in</span>
  <span m='727570'>the</span> <span m='727660'>recursion.</span> <span
  m='728500'>We</span> <span m='728630'>know</span> <span
  m='728790'>where</span> <span m='728910'>to</span> <span m='728980'>go</span>
  <span m='729120'>back</span> <span m='729390'>to.</span> <span
  m='731060'>We</span> <span m='731095'>were</span> <span
  m='731130'>going</span> <span m='731370'>over</span> <span
  m='731560'>the</span> <span m='731720'>outgoing</span> <span
  m='732030'>edges</span> <span m='732190'>from</span> <span
  m='732350'>b,</span> <span m='732540'>there's</span> <span
  m='732760'>only</span> <span m='732970'>one,</span> <span
  m='733540'>we're</span> <span m='733630'>done.</span> <span
  m='735610'>So</span> <span m='735760'>we</span> <span m='735850'>go</span>
  <span m='735950'>back</span> <span m='736140'>to</span> <span
  m='736240'>a.</span> <span m='736960'>We</span> <span m='737150'>only</span>
  <span m='737380'>looked</span> <span m='737610'>at</span> <span
  m='737680'>one</span> <span m='737920'>outgoing</span> <span
  m='738290'>edge</span> <span m='738410'>from</span> <span m='738530'>a.</span>
  <span m='738910'>There's</span> <span m='739070'>another</span> <span
  m='739370'>outgoing</span> <span m='739740'>edge,</span> <span
  m='739910'>which</span> <span m='740060'>is</span> <span
  m='740150'>this</span> <span m='740330'>one,</span> <span
  m='742130'>but</span> <span m='742550'>we've</span> <span
  m='742750'>already</span> <span m='743040'>visited</span> <span
  m='743440'>d,</span> <span m='743850'>so</span> <span m='744040'>we</span>
  <span m='744130'>skip</span> <span m='744390'>over</span> <span
  m='744550'>that</span> <span m='744720'>one,</span> <span
  m='744880'>too,</span> <span m='745670'>so</span> <span
  m='745800'>we're</span> <span m='745900'>done</span> <span
  m='746220'>recursively</span> <span m='746740'>visiting</span> <span
  m='747240'>everything</span> <span m='747670'>reachable</span> <span
  m='748090'>from</span> <span m='748350'>a.</span> </p><p><span
  m='750970'>Now</span> <span m='751190'>we</span> <span m='751280'>go</span>
  <span m='751430'>back</span> <span m='751720'>to</span> <span
  m='751810'>this</span> <span m='752020'>loop,</span> <span
  m='752650'>the</span> <span m='752790'>outer</span> <span
  m='753030'>loop.</span> <span m='754190'>So</span> <span m='754400'>we</span>
  <span m='754520'>did</span> <span m='754740'>a,</span> <span
  m='755350'>next</span> <span m='755640'>we</span> <span m='755750'>look</span>
  <span m='756030'>at</span> <span m='756160'>b,</span> <span
  m='757020'>we</span> <span m='757235'>say,</span> <span m='757600'>oh</span>
  <span m='757655'>b</span> <span m='757682'>has</span> <span
  m='757710'>been</span> <span m='757870'>visited,</span> <span
  m='758310'>we</span> <span m='758420'>don't</span> <span
  m='758610'>need</span> <span m='758750'>to</span> <span m='758840'>do</span>
  <span m='758950'>anything</span> <span m='759340'>from</span> <span
  m='759420'>there.</span> <span m='760000'>Then</span> <span
  m='760130'>we</span> <span m='760230'>go</span> <span m='760340'>to</span>
  <span m='760440'>c,</span> <span m='760895'>c</span> <span
  m='761350'>hasn't</span> <span m='761670'>been</span> <span
  m='761820'>visited</span> <span m='762430'>so</span> <span
  m='762566'>we're</span> <span m='762703'>going</span> <span
  m='762840'>to</span> <span m='764050'>loop</span> <span m='764400'>from</span>
  <span m='764805'>c,</span> <span m='765590'>and</span> <span
  m='765890'>so</span> <span m='765990'>this</span> <span m='766210'>is</span>
  <span m='766360'>our</span> <span m='766500'>second</span> <span
  m='766870'>choice</span> <span m='767160'>of</span> <span m='767340'>s</span>
  <span m='767780'>in</span> <span m='768170'>this</span> <span
  m='769150'>recursion,</span> <span m='770390'>or</span> <span
  m='770550'>in</span> <span m='770710'>this</span> <span
  m='771100'>outer</span> <span m='771440'>loop.</span> <span
  m='773460'>And</span> <span m='773565'>so</span> <span m='773670'>we</span>
  <span m='773810'>look</span> <span m='773970'>at</span> <span
  m='774030'>the</span> <span m='774150'>outgoing</span> <span
  m='774490'>edges</span> <span m='774780'>from</span> <span
  m='775810'>s2,</span> <span m='776200'>let</span> <span m='776400'>me</span>
  <span m='776900'>match</span> <span m='777180'>the</span> <span
  m='777330'>order</span> <span m='777600'>in</span> <span m='777670'>the</span>
  <span m='777750'>notes.</span> <span m='779210'>Let's</span> <span
  m='779470'>say</span> <span m='779660'>first</span> <span m='780120'>we</span>
  <span m='780260'>go</span> <span m='780450'>to</span> <span
  m='780570'>f.</span> <span m='783516'>f</span> <span m='784010'>has</span>
  <span m='784140'>not</span> <span m='784360'>been</span> <span
  m='784490'>visited,</span> <span m='784970'>so</span> <span
  m='785060'>we</span> <span m='785160'>set</span> <span m='785370'>its</span>
  <span m='785490'>parent</span> <span m='785830'>pointer</span> <span
  m='786260'>to</span> <span m='786410'>c.</span> </p><p><span
  m='788150'>Then</span> <span m='788190'>we</span> <span m='788280'>look</span>
  <span m='788440'>at</span> <span m='788480'>all</span> <span
  m='788600'>the</span> <span m='788740'>outgoing</span> <span
  m='789150'>edges</span> <span m='789360'>from</span> <span
  m='789530'>f.</span> <span m='790130'>There's</span> <span
  m='790270'>one</span> <span m='790530'>outgoing</span> <span
  m='790960'>edge</span> <span m='791090'>from</span> <span m='791210'>f,</span>
  <span m='791840'>it</span> <span m='791970'>goes</span> <span
  m='792230'>to</span> <span m='792580'>f.</span> <span m='793710'>I</span>
  <span m='794260'>guess</span> <span m='794400'>I</span> <span
  m='794540'>shouldn't</span> <span m='794780'>really</span> <span
  m='794950'>bold</span> <span m='795260'>this,</span> <span
  m='796544'>sorry.</span> <span m='798860'>I'll</span> <span
  m='798970'>say</span> <span m='799130'>what</span> <span m='799290'>the</span>
  <span m='799370'>bold</span> <span m='799980'>edges</span> <span
  m='800300'>mean</span> <span m='800490'>in</span> <span m='800680'>a</span>
  <span m='800860'>moment.</span> <span m='803570'>This</span> <span
  m='803720'>is</span> <span m='803860'>just</span> <span m='804120'>a</span>
  <span m='804160'>regular</span> <span m='804530'>edge.</span> <span
  m='805300'>We</span> <span m='805430'>follow</span> <span
  m='805800'>the</span> <span m='805960'>edge</span> <span
  m='806550'>from</span> <span m='806770'>f</span> <span m='806930'>to</span>
  <span m='807040'>f.</span> <span m='807570'>We</span> <span
  m='807670'>see,</span> <span m='807990'>oh,</span> <span m='808380'>f</span>
  <span m='808580'>has</span> <span m='808730'>already</span> <span
  m='808940'>been</span> <span m='809100'>visited,</span> <span
  m='809385'>it</span> <span m='809670'>already</span> <span
  m='809880'>has</span> <span m='810100'>a</span> <span m='810150'>parent</span>
  <span m='810430'>pointer,</span> <span m='811130'>so</span> <span
  m='811250'>there's</span> <span m='811400'>no</span> <span
  m='811530'>point</span> <span m='811880'>going</span> <span
  m='812020'>down</span> <span m='812230'>there.</span> <span
  m='813590'>We're</span> <span m='813710'>done</span> <span
  m='813880'>with</span> <span m='814000'>f,</span> <span
  m='814220'>that's</span> <span m='814420'>the</span> <span
  m='814540'>only</span> <span m='814780'>outgoing</span> <span
  m='815160'>edge.</span> <span m='815430'>We</span> <span m='815495'>go</span>
  <span m='815560'>back</span> <span m='815770'>to</span> <span
  m='815860'>c,</span> <span m='816060'>there's</span> <span
  m='816200'>one</span> <span m='816400'>other</span> <span
  m='816600'>outgoing</span> <span m='816990'>edge,</span> <span
  m='817650'>but</span> <span m='817760'>it</span> <span m='817880'>leads</span>
  <span m='818130'>to</span> <span m='818340'>a</span> <span
  m='818400'>vertex</span> <span m='818790'>we've</span> <span
  m='818920'>already</span> <span m='819140'>visited,</span> <span
  m='819550'>namely</span> <span m='819950'>e,</span> <span
  m='820900'>and</span> <span m='821150'>so</span> <span m='821320'>we're</span>
  <span m='821460'>done</span> <span m='821860'>with</span> <span
  m='822170'>visiting</span> <span m='822530'>everything</span> <span
  m='822890'>reachable</span> <span m='823270'>from</span> <span
  m='823440'>c.</span> <span m='824950'>We</span> <span m='825060'>didn't</span>
  <span m='825170'>visit</span> <span m='825430'>everything</span> <span
  m='825790'>reachable</span> <span m='826100'>from</span> <span
  m='826280'>c,</span> <span m='826410'>because</span> <span
  m='826630'>some</span> <span m='826870'>of</span> <span m='827000'>it</span>
  <span m='827080'>was</span> <span m='827220'>already</span> <span
  m='827460'>visited</span> <span m='827800'>from</span> <span
  m='827960'>a.</span> </p><p><span m='829250'>Then</span> <span
  m='829320'>we</span> <span m='829400'>go</span> <span m='829540'>back</span>
  <span m='829750'>to</span> <span m='829830'>the</span> <span
  m='829970'>outer</span> <span m='830110'>loop,</span> <span
  m='830510'>say,</span> <span m='830740'>OK,</span> <span
  m='831060'>what</span> <span m='831210'>about</span> <span
  m='831470'>d?</span> <span m='831725'>D</span> <span m='831810'>has</span>
  <span m='831895'>been</span> <span m='831980'>visited,</span> <span
  m='832390'>what</span> <span m='832520'>about</span> <span
  m='832720'>e?</span> <span m='833060'>E's</span> <span m='833290'>been</span>
  <span m='833330'>visited,</span> <span m='833670'>what</span> <span
  m='833810'>about</span> <span m='834030'>f?</span> <span m='834290'>F's</span>
  <span m='834700'>been</span> <span m='834880'>visited.</span> <span
  m='835590'>So</span> <span m='835675'>we're</span> <span
  m='835760'>visiting</span> <span m='836090'>these</span> <span
  m='836260'>vertices</span> <span m='836640'>again,</span> <span
  m='837790'>but</span> <span m='839040'>should</span> <span
  m='839220'>only</span> <span m='839420'>be</span> <span
  m='839580'>twice</span> <span m='840110'>in</span> <span
  m='840200'>total,</span> <span m='842960'>and</span> <span
  m='843280'>in</span> <span m='843350'>the</span> <span m='843460'>end</span>
  <span m='843640'>we</span> <span m='843740'>visit</span> <span
  m='844020'>all</span> <span m='844170'>the</span> <span
  m='844230'>vertices,</span> <span m='845330'>and,</span> <span
  m='845560'>in</span> <span m='845610'>a</span> <span m='845660'>certain</span>
  <span m='845920'>sense,</span> <span m='846230'>all</span> <span
  m='846380'>the</span> <span m='846520'>edges</span> <span m='846830'>as</span>
  <span m='846930'>well.</span> </p><p><span m='852440'>Let's</span> <span
  m='853090'>talk</span> <span m='853510'>about</span> <span
  m='857420'>running</span> <span m='857700'>time.</span> <span
  m='867730'>What</span> <span m='868020'>do</span> <span m='868070'>you</span>
  <span m='868150'>think</span> <span m='868320'>the</span> <span
  m='868430'>running</span> <span m='868680'>time</span> <span
  m='868890'>of</span> <span m='868940'>this</span> <span
  m='869110'>algorithm</span> <span m='869450'>is?</span> <span
  m='878120'>Anyone?</span> <span m='879590'>Time</span> <span
  m='879835'>to</span> <span m='880080'>wake</span> <span m='880310'>up.</span>
  </p><p><span m='882935'>AUDIENCE: Upper</span> <span m='883416'>bound?</span>
  </p><p><span m='883897'>PROFESSOR: Upper</span> <span m='884137'>bound,</span>
  <span m='884378'>sure.</span> </p><p><span m='885830'>AUDIENCE: V?</span>
  </p><p><span m='886310'>PROFESSOR: V?</span> </p><p><span m='886790'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='888690'>PROFESSOR: V</span> <span
  m='889910'>is</span> <span m='890170'>a</span> <span m='890230'>little</span>
  <span m='890570'>bit</span> <span m='890720'>optimistic,</span> <span
  m='894460'>plus</span> <span m='894750'>e,</span> <span
  m='895210'>good,</span> <span m='895690'>collaborative</span> <span
  m='896240'>effort.</span> <span m='897720'>It's</span> <span
  m='898300'>linear</span> <span m='898610'>time,</span> <span
  m='898990'>just</span> <span m='899280'>like</span> <span
  m='899830'>BFS.</span> <span m='900070'>This</span> <span m='900175'>is</span>
  <span m='900280'>what</span> <span m='900410'>we</span> <span
  m='900500'>call</span> <span m='900700'>linear</span> <span
  m='901030'>time,</span> <span m='902520'>because</span> <span
  m='904908'>this</span> <span m='905340'>is</span> <span m='905480'>the</span>
  <span m='905570'>size</span> <span m='905930'>of</span> <span
  m='906010'>the</span> <span m='906160'>input.</span> <span
  m='907550'>It's</span> <span m='908010'>theta</span> <span m='908290'>V</span>
  <span m='908650'>plus</span> <span m='908830'>E</span> <span
  m='909010'>for</span> <span m='909270'>the</span> <span
  m='909390'>whole</span> <span m='909570'>thing.</span> <span
  m='911380'>The</span> <span m='911440'>size</span> <span m='911710'>of</span>
  <span m='911750'>the</span> <span m='911850'>input</span> <span
  m='912110'>was</span> <span m='912280'>v</span> <span m='912365'>plus</span>
  <span m='912407'>e.</span> <span m='912800'>We</span> <span
  m='912930'>needed</span> <span m='913240'>v</span> <span
  m='913380'>slots</span> <span m='913790'>in</span> <span m='913890'>an</span>
  <span m='913960'>array,</span> <span m='914790'>plus</span> <span
  m='915190'>we</span> <span m='915300'>needed</span> <span m='915740'>e</span>
  <span m='916420'>items</span> <span m='916900'>in</span> <span
  m='917020'>these</span> <span m='917200'>linked</span> <span
  m='917440'>lists,</span> <span m='918960'>one</span> <span
  m='919160'>for</span> <span m='919290'>each</span> <span
  m='919450'>edge.</span> <span m='920400'>We</span> <span
  m='920540'>have</span> <span m='920700'>to</span> <span
  m='920800'>traverse</span> <span m='921200'>that</span> <span
  m='921330'>whole</span> <span m='921510'>structure.</span> </p><p><span
  m='922560'>The</span> <span m='922700'>reason</span> <span
  m='923010'>it's</span> <span m='923150'>order</span> <span m='923350'>v</span>
  <span m='923510'>plus</span> <span m='923730'>e</span> <span
  m='924810'>is--</span> <span m='925920'>first,</span> <span
  m='926310'>as</span> <span m='926500'>you</span> <span m='926580'>were</span>
  <span m='926660'>saying,</span> <span m='927030'>you're</span> <span
  m='927150'>visiting</span> <span m='927540'>every</span> <span
  m='927740'>vertex</span> <span m='928180'>once</span> <span
  m='928520'>in</span> <span m='928630'>this</span> <span
  m='928790'>outer</span> <span m='929080'>loop,</span> <span
  m='930320'>so</span> <span m='935110'>not</span> <span
  m='935390'>worrying</span> <span m='935630'>about</span> <span
  m='935850'>the</span> <span m='936150'>recursion</span> <span
  m='942740'>in</span> <span m='943150'>DFS</span> <span
  m='943670'>alone,</span> <span m='946160'>so</span> <span
  m='946620'>that's</span> <span m='946870'>order</span> <span
  m='947100'>b.</span> <span m='948480'>Then</span> <span m='949120'>have</span>
  <span m='949560'>to</span> <span m='949630'>worry</span> <span
  m='949770'>about</span> <span m='950010'>this</span> <span
  m='950180'>recursion,</span> <span m='951040'>but</span> <span
  m='951210'>we</span> <span m='951350'>know</span> <span m='951670'>that</span>
  <span m='951830'>whenever</span> <span m='952350'>we</span> <span
  m='952500'>call</span> <span m='952790'>DFS</span> <span
  m='953370'>visit</span> <span m='954270'>on</span> <span m='954910'>a</span>
  <span m='954950'>vertex,</span> <span m='956160'>that</span> <span
  m='956280'>it</span> <span m='956430'>did</span> <span m='956590'>not</span>
  <span m='956870'>have</span> <span m='957090'>a</span> <span
  m='957160'>parent</span> <span m='957620'>before.</span> </p><p><span
  m='958961'>Right</span> <span m='959410'>before</span> <span
  m='959710'>we</span> <span m='959820'>called</span> <span
  m='960030'>DFS</span> <span m='960530'>visit,</span> <span
  m='960830'>we</span> <span m='960950'>set</span> <span m='961180'>its</span>
  <span m='961320'>parent</span> <span m='961680'>for</span> <span
  m='961770'>the</span> <span m='961890'>first</span> <span
  m='962260'>time.</span> <span m='963170'>Right</span> <span
  m='963540'>before</span> <span m='963810'>we</span> <span
  m='963910'>called</span> <span m='964100'>DFS</span> <span
  m='964540'>visit</span> <span m='964880'>on</span> <span m='965080'>v</span>
  <span m='965207'>here,</span> <span m='965590'>we</span> <span
  m='965690'>set</span> <span m='965900'>as</span> <span
  m='966050'>parent</span> <span m='966460'>for</span> <span
  m='966640'>the</span> <span m='966760'>first</span> <span
  m='967090'>time,</span> <span m='967580'>because</span> <span
  m='967720'>it</span> <span m='967790'>wasn't</span> <span
  m='968090'>set</span> <span m='968300'>before.</span> <span
  m='969930'>So</span> <span m='971380'>DFS</span> <span
  m='971930'>visit,</span> <span m='974990'>and</span> <span
  m='975120'>I'm</span> <span m='975166'>going</span> <span m='975213'>to</span>
  <span m='975260'>just</span> <span m='975470'>write</span> <span
  m='975950'>of</span> <span m='976450'>v,</span> <span
  m='977880'>meaning</span> <span m='978120'>the</span> <span
  m='978920'>last</span> <span m='979200'>argument</span> <span
  m='979560'>here.</span> <span m='985520'>It's</span> <span
  m='985630'>called</span> <span m='988550'>once,</span> <span
  m='990020'>at</span> <span m='990130'>most</span> <span
  m='990440'>once,</span> <span m='991740'>per</span> <span
  m='991910'>vertex</span> <span m='992380'>b.</span> <span
  m='995800'>But</span> <span m='995960'>it</span> <span m='996140'>does</span>
  <span m='996300'>not</span> <span m='996690'>take</span> <span
  m='996920'>constant</span> <span m='997300'>time.</span> <span
  m='997580'>This</span> <span m='997810'>takes</span> <span
  m='998050'>constant</span> <span m='998430'>time</span> <span
  m='998670'>per</span> <span m='998820'>vertex,</span> <span
  m='999320'>plus</span> <span m='999580'>a</span> <span
  m='999620'>recursive</span> <span m='1000090'>call.</span> <span
  m='1001310'>This</span> <span m='1001560'>thing,</span> <span
  m='1002690'>this</span> <span m='1003140'>takes</span> <span
  m='1003340'>constant</span> <span m='1003640'>time,</span> <span
  m='1003790'>but</span> <span m='1003890'>there's</span> <span
  m='1004060'>a</span> <span m='1004120'>for</span> <span
  m='1004380'>loop</span> <span m='1004620'>here.</span> <span
  m='1004820'>We</span> <span m='1004930'>have</span> <span
  m='1005040'>to</span> <span m='1005140'>pay</span> <span
  m='1005510'>for</span> <span m='1005910'>however</span> <span
  m='1006250'>many</span> <span m='1006460'>outgoing</span> <span
  m='1006870'>edges</span> <span m='1007140'>there</span> <span
  m='1007280'>are</span> <span m='1007400'>from</span> <span
  m='1007580'>b,</span> <span m='1007980'>that's</span> <span
  m='1008250'>the</span> <span m='1008545'>part</span> <span
  m='1008840'>you're</span> <span m='1008920'>missing.</span> </p><p><span
  m='1012880'>And</span> <span m='1013040'>we</span> <span
  m='1013180'>pay</span> <span m='1014870'>length</span> <span
  m='1015320'>of</span> <span m='1015710'>adjacency</span> <span
  m='1017105'>of</span> <span m='1017580'>v</span> <span m='1018750'>for</span>
  <span m='1018870'>that</span> <span m='1019090'>vertex.</span> <span
  m='1020560'>So</span> <span m='1020630'>the</span> <span
  m='1020760'>total</span> <span m='1021630'>in</span> <span
  m='1021770'>addition</span> <span m='1022060'>to</span> <span
  m='1022150'>this</span> <span m='1022340'>v</span> <span m='1023046'>is</span>
  <span m='1023400'>going</span> <span m='1023560'>to</span> <span
  m='1023630'>be</span> <span m='1024779'>the</span> <span
  m='1025119'>order,</span> <span m='1025619'>sum</span> <span
  m='1026050'>overall</span> <span m='1026400'>vertices,</span> <span
  m='1027230'>v</span> <span m='1027530'>in</span> <span
  m='1027880'>capital</span> <span m='1028300'>V,</span> <span
  m='1029079'>of</span> <span m='1029540'>length</span> <span
  m='1029849'>of</span> <span m='1029930'>the</span> <span
  m='1030060'>adjacency,</span> <span m='1031170'>list</span> <span
  m='1031660'>for</span> <span m='1031960'>v,</span> <span
  m='1033400'>which</span> <span m='1033650'>is</span> <span
  m='1039319'>E.</span> <span m='1041190'>This</span> <span
  m='1041290'>is</span> <span m='1041390'>the</span> <span
  m='1041500'>handshaking</span> <span m='1042150'>lemma</span> <span
  m='1042530'>from</span> <span m='1043319'>last</span> <span
  m='1043630'>time.</span> <span m='1044592'>It's</span> <span
  m='1044940'>twice</span> <span m='1045470'>e</span> <span
  m='1045750'>for</span> <span m='1046240'>undirected</span> <span
  m='1046690'>graphs,</span> <span m='1047010'>it's</span> <span
  m='1047380'>e</span> <span m='1047670'>for</span> <span
  m='1047829'>directed</span> <span m='1048170'>graphs.</span> <span
  m='1049550'>I've</span> <span m='1049710'>drawn</span> <span
  m='1049920'>directed</span> <span m='1050260'>graphs</span> <span
  m='1050540'>here,</span> <span m='1050980'>it's</span> <span
  m='1051010'>a</span> <span m='1051085'>little</span> <span
  m='1051160'>more</span> <span m='1051460'>interesting.</span> </p><p><span
  m='1053970'>OK,</span> <span m='1054220'>so</span> <span
  m='1054400'>it's</span> <span m='1054500'>linear</span> <span
  m='1054790'>time,</span> <span m='1055320'>just</span> <span
  m='1055580'>like</span> <span m='1055770'>the</span> <span
  m='1055900'>BFS,</span> <span m='1056890'>so</span> <span
  m='1057050'>you</span> <span m='1057130'>could</span> <span
  m='1057290'>say,</span> <span m='1057560'>who</span> <span
  m='1057590'>cares,</span> <span m='1058590'>but</span> <span
  m='1058860'>DFS</span> <span m='1059630'>offers</span> <span
  m='1060100'>a</span> <span m='1060180'>lot</span> <span m='1060420'>of</span>
  <span m='1061180'>different</span> <span m='1061620'>properties</span> <span
  m='1062240'>than</span> <span m='1062380'>BFS.</span> <span
  m='1062870'>They</span> <span m='1062950'>each</span> <span
  m='1063190'>have</span> <span m='1063490'>their</span> <span
  m='1063700'>niche.</span> <span m='1064660'>BFS</span> <span
  m='1065130'>is</span> <span m='1065260'>great</span> <span
  m='1065500'>for</span> <span m='1065570'>shortest</span> <span
  m='1065920'>paths.</span> <span m='1066250'>You</span> <span
  m='1066350'>want</span> <span m='1066480'>to</span> <span
  m='1066520'>know</span> <span m='1066640'>the</span> <span
  m='1066740'>fastest</span> <span m='1067280'>way</span> <span
  m='1067410'>to</span> <span m='1067490'>solve</span> <span
  m='1067730'>the</span> <span m='1067980'>Rubik's</span> <span
  m='1068430'>cube,</span> <span m='1069080'>BFS</span> <span
  m='1069360'>will</span> <span m='1069490'>find</span> <span
  m='1069860'>it.</span> <span m='1070560'>You</span> <span
  m='1070700'>want</span> <span m='1070890'>to</span> <span
  m='1071250'>find</span> <span m='1071510'>the</span> <span
  m='1071580'>fastest</span> <span m='1071960'>way</span> <span
  m='1072050'>to</span> <span m='1072130'>solve</span> <span
  m='1072320'>the</span> <span m='1072390'>Rubik's</span> <span
  m='1072860'>cube,</span> <span m='1073330'>DFS</span> <span
  m='1073425'>will</span> <span m='1073520'>not</span> <span
  m='1074000'>find</span> <span m='1074310'>it.</span> <span
  m='1075150'>It's</span> <span m='1075370'>not</span> <span
  m='1075620'>following</span> <span m='1075880'>shortest</span> <span
  m='1076300'>paths</span> <span m='1076640'>here.</span> <span
  m='1077090'>Going</span> <span m='1077210'>from</span> <span
  m='1077400'>a</span> <span m='1077580'>to</span> <span m='1077700'>d,</span>
  <span m='1078372'>we</span> <span m='1078710'>use</span> <span
  m='1078900'>the</span> <span m='1078980'>path</span> <span
  m='1079300'>of</span> <span m='1079410'>length</span> <span
  m='1079640'>3,</span> <span m='1079980'>that's</span> <span
  m='1080280'>the</span> <span m='1080320'>bold</span> <span
  m='1080650'>edges.</span> <span m='1081450'>We</span> <span
  m='1081560'>could</span> <span m='1081720'>have</span> <span
  m='1081830'>gone</span> <span m='1082030'>directly</span> <span
  m='1082430'>from</span> <span m='1082610'>a</span> <span m='1082740'>to</span>
  <span m='1082850'>d,</span> <span m='1083075'>so</span> <span
  m='1083300'>it's</span> <span m='1083410'>a</span> <span
  m='1083460'>different</span> <span m='1083850'>kind</span> <span
  m='1084080'>of</span> <span m='1084150'>search,</span> <span
  m='1085170'>but</span> <span m='1085370'>sort</span> <span
  m='1085580'>of</span> <span m='1085660'>the</span> <span
  m='1085790'>inverse.</span> <span m='1087340'>But</span> <span
  m='1087490'>it's</span> <span m='1087650'>extremely</span> <span
  m='1088060'>useful,</span> <span m='1089490'>in</span> <span
  m='1089650'>particular,</span> <span m='1090360'>in</span> <span
  m='1090460'>the</span> <span m='1090510'>way</span> <span
  m='1090560'>that</span> <span m='1090690'>it</span> <span
  m='1090780'>classifies</span> <span m='1091400'>edges.</span> </p><p><span
  m='1093290'>So</span> <span m='1093380'>let</span> <span m='1093530'>me</span>
  <span m='1093630'>talk</span> <span m='1093900'>about</span> <span
  m='1094190'>edge</span> <span m='1094450'>classification.</span> <span
  m='1107630'>You</span> <span m='1107780'>can</span> <span
  m='1108020'>check</span> <span m='1108260'>every</span> <span
  m='1108760'>edge</span> <span m='1110240'>in</span> <span
  m='1110370'>this</span> <span m='1110550'>graph</span> <span
  m='1110860'>gets</span> <span m='1111080'>visited.</span> <span
  m='1111540'>In</span> <span m='1111580'>a</span> <span
  m='1111620'>directed</span> <span m='1112000'>graph</span> <span
  m='1112240'>every</span> <span m='1112490'>edge</span> <span
  m='1112665'>gets</span> <span m='1112840'>visited</span> <span
  m='1113200'>once,</span> <span m='1114060'>in</span> <span
  m='1114230'>an</span> <span m='1114320'>undirected</span> <span
  m='1114790'>graph,</span> <span m='1115060'>every</span> <span
  m='1115380'>edge</span> <span m='1115740'>gets</span> <span
  m='1115940'>visited</span> <span m='1116140'>twice,</span> <span
  m='1116640'>once</span> <span m='1116940'>from</span> <span
  m='1117120'>each</span> <span m='1117320'>side.</span> <span
  m='1120200'>And</span> <span m='1120970'>when</span> <span
  m='1121220'>you</span> <span m='1121330'>visit</span> <span
  m='1121630'>that</span> <span m='1121820'>edge,</span> <span
  m='1122130'>there's</span> <span m='1122240'>sort</span> <span
  m='1122320'>of</span> <span m='1122400'>different</span> <span
  m='1122760'>categories</span> <span m='1123390'>of</span> <span
  m='1123540'>what</span> <span m='1123820'>could</span> <span
  m='1123970'>happen</span> <span m='1124390'>to</span> <span
  m='1124560'>it.</span> <span m='1125710'>Maybe</span> <span
  m='1126210'>the</span> <span m='1126420'>edge</span> <span
  m='1127460'>led</span> <span m='1127750'>to</span> <span
  m='1127850'>something</span> <span m='1128230'>unvisited,</span> <span
  m='1129120'>when</span> <span m='1129270'>you</span> <span
  m='1129380'>went</span> <span m='1129620'>there.</span> <span
  m='1130920'>We</span> <span m='1131030'>call</span> <span
  m='1131250'>those</span> <span m='1131630'>tree</span> <span
  m='1131900'>edges.</span> <span m='1150360'>That's</span> <span
  m='1150720'>what</span> <span m='1150850'>the</span> <span
  m='1150940'>parent</span> <span m='1151270'>pointers</span> <span
  m='1151910'>are</span> <span m='1152160'>specifying</span> <span
  m='1152920'>and</span> <span m='1153010'>all</span> <span
  m='1153190'>the</span> <span m='1153270'>bold</span> <span
  m='1153690'>edges</span> <span m='1154030'>here</span> <span
  m='1154850'>are</span> <span m='1155070'>called</span> <span
  m='1155290'>three</span> <span m='1155560'>edges.</span> <span
  m='1156420'>This</span> <span m='1156620'>is</span> <span
  m='1156760'>when</span> <span m='1157620'>we</span> <span
  m='1158710'>visit</span> <span m='1158910'>a</span> <span
  m='1159070'>new</span> <span m='1159250'>vertex</span> <span
  m='1166340'>via</span> <span m='1166730'>that</span> <span
  m='1166920'>edge.</span> </p><p><span m='1170100'>So</span> <span
  m='1170240'>we</span> <span m='1170440'>look</span> <span
  m='1170650'>at</span> <span m='1170720'>the</span> <span
  m='1170820'>other</span> <span m='1170950'>side</span> <span
  m='1171140'>of</span> <span m='1171180'>the</span> <span
  m='1171300'>edge,</span> <span m='1171540'>we</span> <span
  m='1171620'>discover</span> <span m='1172040'>a</span> <span
  m='1172100'>new</span> <span m='1172160'>vertex.</span> <span
  m='1173120'>Those</span> <span m='1173340'>are</span> <span
  m='1173395'>what</span> <span m='1173450'>we</span> <span
  m='1173570'>call</span> <span m='1173800'>tree</span> <span
  m='1174070'>edges,</span> <span m='1174440'>it</span> <span
  m='1174530'>turns</span> <span m='1174780'>out</span> <span
  m='1175030'>they</span> <span m='1175160'>form</span> <span
  m='1175350'>a</span> <span m='1175540'>tree,</span> <span m='1176235'>a</span>
  <span m='1176530'>directed</span> <span m='1177000'>tree.</span> <span
  m='1177830'>That's</span> <span m='1178080'>a</span> <span
  m='1178230'>lemma</span> <span m='1178580'>you</span> <span
  m='1178750'>can</span> <span m='1178890'>prove.</span> <span
  m='1179930'>You</span> <span m='1180060'>can</span> <span
  m='1180170'>see</span> <span m='1180320'>it</span> <span
  m='1180470'>here.</span> <span m='1180810'>We</span> <span
  m='1180950'>just</span> <span m='1181210'>have</span> <span
  m='1181500'>a</span> <span m='1181600'>path,</span> <span
  m='1182200'>actually</span> <span m='1182460'>a</span> <span
  m='1182720'>forest</span> <span m='1183320'>would</span> <span
  m='1183440'>be</span> <span m='1183610'>more</span> <span
  m='1183770'>accurate.</span> <span m='1184650'>We</span> <span
  m='1184770'>have</span> <span m='1184980'>a</span> <span
  m='1185050'>path</span> <span m='1185490'>abed,</span> <span
  m='1187110'>and</span> <span m='1187300'>we</span> <span
  m='1187400'>have</span> <span m='1187580'>an</span> <span
  m='1187690'>edge</span> <span m='1187990'>cf,</span> <span
  m='1188916'>but,</span> <span m='1189380'>in</span> <span
  m='1189480'>general,</span> <span m='1190620'>it's</span> <span
  m='1190770'>a</span> <span m='1190830'>forest.</span> <span
  m='1191460'>So</span> <span m='1191680'>for</span> <span
  m='1191830'>example,</span> <span m='1192140'>if</span> <span
  m='1192210'>there</span> <span m='1192360'>was</span> <span
  m='1192450'>another</span> <span m='1192750'>thing</span> <span
  m='1192960'>coming</span> <span m='1193250'>from</span> <span
  m='1193460'>e</span> <span m='1193670'>here,</span> <span
  m='1194400'>let's</span> <span m='1194880'>modify</span> <span
  m='1195420'>my</span> <span m='1195600'>graph,</span> <span
  m='1196560'>we</span> <span m='1196790'>would,</span> <span
  m='1197010'>at</span> <span m='1197130'>some</span> <span
  m='1197270'>point,</span> <span m='1197540'>visit</span> <span
  m='1197760'>that</span> <span m='1197930'>edge</span> <span
  m='1198130'>and</span> <span m='1198220'>say,</span> <span
  m='1198500'>oh,</span> <span m='1198600'>here's</span> <span
  m='1198730'>a</span> <span m='1198780'>new</span> <span m='1198950'>way</span>
  <span m='1199080'>to</span> <span m='1199160'>go,</span> <span
  m='1199720'>and</span> <span m='1199890'>now</span> <span
  m='1200080'>that</span> <span m='1200310'>bold</span> <span
  m='1200550'>structure</span> <span m='1201040'>forms</span> <span
  m='1202010'>an</span> <span m='1202080'>actual</span> <span
  m='1202500'>tree.</span> <span m='1204250'>These</span> <span
  m='1204420'>are</span> <span m='1204490'>called</span> <span
  m='1204790'>tree</span> <span m='1204960'>edges,</span> <span
  m='1205730'>you</span> <span m='1205850'>can</span> <span
  m='1205950'>call</span> <span m='1206050'>them</span> <span
  m='1206150'>forest</span> <span m='1206450'>edges</span> <span
  m='1206850'>if</span> <span m='1206970'>you</span> <span
  m='1207080'>feel</span> <span m='1207290'>like</span> <span
  m='1207580'>it.</span> </p><p><span m='1210080'>There</span> <span
  m='1210240'>are</span> <span m='1210320'>other</span> <span
  m='1210530'>edges</span> <span m='1210810'>in</span> <span
  m='1210910'>there,</span> <span m='1211160'>the</span> <span
  m='1211260'>nonbold</span> <span m='1211860'>edges,</span> <span
  m='1213120'>and</span> <span m='1213400'>the</span> <span
  m='1213480'>textbook</span> <span m='1213970'>distinguishes</span> <span
  m='1215610'>three</span> <span m='1215880'>types,</span> <span
  m='1216580'>three</span> <span m='1216760'>types?</span> <span
  m='1217260'>Three</span> <span m='1217440'>types,</span> <span
  m='1219010'>so</span> <span m='1219180'>many</span> <span
  m='1219450'>types.</span> <span m='1222500'>They</span> <span
  m='1222750'>are</span> <span m='1223730'>forward</span> <span
  m='1224230'>edges,</span> <span m='1229980'>backward</span> <span
  m='1230420'>edges,</span> <span m='1238390'>and</span> <span
  m='1239850'>cross</span> <span m='1240280'>edges.</span> <span
  m='1244720'>Some</span> <span m='1244910'>of</span> <span
  m='1244970'>these</span> <span m='1245210'>are</span> <span
  m='1245440'>more</span> <span m='1245660'>useful</span> <span
  m='1246340'>to</span> <span m='1246660'>distinguish</span> <span
  m='1247150'>than</span> <span m='1247297'>others,</span> <span
  m='1247740'>but</span> <span m='1248250'>it</span> <span
  m='1249160'>doesn't</span> <span m='1249360'>hurt</span> <span
  m='1249630'>to</span> <span m='1249690'>have</span> <span
  m='1249910'>them</span> <span m='1250060'>all.</span> <span
  m='1251490'>So,</span> <span m='1252500'>for</span> <span
  m='1252680'>example,</span> <span m='1253950'>this</span> <span
  m='1254210'>edge</span> <span m='1255050'>I'm</span> <span
  m='1255230'>going</span> <span m='1255360'>to</span> <span
  m='1255450'>call</span> <span m='1256040'>a</span> <span
  m='1256290'>forward</span> <span m='1256890'>edge,</span> <span
  m='1257590'>just</span> <span m='1257820'>write</span> <span
  m='1258250'>f,</span> <span m='1258700'>that's</span> <span
  m='1259120'>unambiguous,</span> <span m='1261260'>because</span> <span
  m='1261570'>it</span> <span m='1261690'>goes,</span> <span
  m='1262200'>in</span> <span m='1262290'>some</span> <span
  m='1262450'>sense,</span> <span m='1262690'>forward</span> <span
  m='1263130'>along</span> <span m='1263440'>the</span> <span
  m='1263540'>tree.</span> <span m='1264430'>It</span> <span
  m='1264650'>goes</span> <span m='1264950'>from</span> <span
  m='1266580'>the</span> <span m='1266810'>root</span> <span
  m='1267000'>of</span> <span m='1267160'>this</span> <span
  m='1267400'>tree</span> <span m='1268240'>to</span> <span m='1268560'>a</span>
  <span m='1268670'>descendant.</span> <span m='1269730'>There</span> <span
  m='1269910'>is</span> <span m='1270050'>a</span> <span m='1270500'>path</span>
  <span m='1270970'>in</span> <span m='1271090'>the</span> <span
  m='1271200'>tree</span> <span m='1271820'>from</span> <span
  m='1271980'>a</span> <span m='1272130'>to</span> <span m='1272240'>d,</span>
  <span m='1272675'>so</span> <span m='1273110'>we</span> <span
  m='1273190'>call</span> <span m='1273315'>it</span> <span m='1273440'>a</span>
  <span m='1273650'>forward</span> <span m='1273860'>edge.</span> </p><p><span
  m='1274720'>By</span> <span m='1274870'>contrast,</span> <span
  m='1275920'>this</span> <span m='1276520'>edge</span> <span
  m='1277340'>I'm</span> <span m='1277470'>going</span> <span
  m='1277580'>to</span> <span m='1277660'>call</span> <span m='1278020'>a</span>
  <span m='1278110'>backward</span> <span m='1278590'>edge,</span> <span
  m='1280770'>because</span> <span m='1281640'>it</span> <span
  m='1281840'>goes</span> <span m='1282250'>from</span> <span
  m='1283170'>a</span> <span m='1283700'>node</span> <span m='1284080'>in</span>
  <span m='1284180'>the</span> <span m='1284280'>tree</span> <span
  m='1284570'>to</span> <span m='1284710'>an</span> <span
  m='1284830'>ancestor</span> <span m='1285930'>in</span> <span
  m='1286050'>the</span> <span m='1286140'>trees.</span> <span
  m='1286390'>If</span> <span m='1286440'>you</span> <span
  m='1286490'>think</span> <span m='1286680'>of</span> <span
  m='1286840'>parents,</span> <span m='1287500'>I</span> <span
  m='1287620'>can</span> <span m='1287740'>go</span> <span
  m='1287850'>from</span> <span m='1288020'>d</span> <span m='1288175'>to</span>
  <span m='1288640'>its</span> <span m='1288770'>parent</span> <span
  m='1289040'>to</span> <span m='1289175'>its</span> <span
  m='1289310'>parent,</span> <span m='1289830'>and</span> <span
  m='1289940'>that's</span> <span m='1290160'>where</span> <span
  m='1290260'>the</span> <span m='1290410'>edge</span> <span
  m='1290600'>goes,</span> <span m='1290830'>so</span> <span
  m='1291020'>that's</span> <span m='1291240'>a</span> <span
  m='1291290'>backward</span> <span m='1291720'>edge--</span> <span
  m='1292960'>double</span> <span m='1293170'>check</span> <span
  m='1293410'>I</span> <span m='1293460'>got</span> <span
  m='1293830'>these</span> <span m='1294010'>not</span> <span
  m='1294590'>reversed,</span> <span m='1295180'>yeah,</span> <span
  m='1295660'>that's</span> <span m='1295750'>right.</span> <span
  m='1296870'>Forward</span> <span m='1297260'>edge</span> <span
  m='1298270'>because</span> <span m='1298470'>I</span> <span
  m='1298530'>could</span> <span m='1298670'>go</span> <span
  m='1298770'>from</span> <span m='1298930'>d</span> <span m='1299070'>to</span>
  <span m='1299210'>its</span> <span m='1299330'>parent</span> <span
  m='1299620'>to</span> <span m='1299700'>its</span> <span
  m='1299780'>parent</span> <span m='1300190'>to</span> <span
  m='1300356'>its</span> <span m='1300523'>parent</span> <span
  m='1300690'>and</span> <span m='1300810'>the</span> <span
  m='1300905'>edge</span> <span m='1301000'>went</span> <span
  m='1301065'>the</span> <span m='1301130'>other</span> <span
  m='1301340'>way,</span> <span m='1301560'>that's</span> <span
  m='1301750'>a</span> <span m='1301940'>forward</span> <span
  m='1302285'>edge.</span> <span m='1304220'>So</span> <span
  m='1305190'>forward</span> <span m='1305540'>edge</span> <span
  m='1305750'>goes</span> <span m='1306000'>from</span> <span
  m='1306180'>a</span> <span m='1306220'>node</span> <span m='1307460'>to</span>
  <span m='1307710'>a</span> <span m='1307890'>descendant</span> <span
  m='1308510'>in</span> <span m='1308610'>the</span> <span
  m='1308710'>tree.</span> <span m='1312540'>Backward</span> <span
  m='1312950'>edge</span> <span m='1313270'>goes</span> <span
  m='1313570'>from</span> <span m='1313810'>a</span> <span
  m='1313860'>node</span> <span m='1314950'>to</span> <span
  m='1315370'>an</span> <span m='1315510'>ancestor</span> <span
  m='1316120'>in</span> <span m='1316200'>the</span> <span
  m='1316290'>tree.</span> <span m='1322670'>And</span> <span
  m='1322970'>when</span> <span m='1323090'>I</span> <span
  m='1323140'>say,</span> <span m='1323350'>tree,</span> <span
  m='1323650'>I</span> <span m='1323700'>mean</span> <span
  m='1323910'>forest.</span> <span m='1327080'>And</span> <span
  m='1327590'>then</span> <span m='1328090'>all</span> <span
  m='1328300'>the</span> <span m='1328420'>other</span> <span
  m='1328640'>edges</span> <span m='1328930'>are</span> <span
  m='1329410'>cross</span> <span m='1329720'>edges.</span> </p><p><span
  m='1332940'>So</span> <span m='1333030'>I</span> <span
  m='1333120'>guess,</span> <span m='1333480'>here,</span> <span
  m='1334420'>this</span> <span m='1334630'>is</span> <span m='1334780'>a</span>
  <span m='1334860'>cross</span> <span m='1335320'>edge.</span> <span
  m='1337670'>In</span> <span m='1337790'>this</span> <span
  m='1337970'>case,</span> <span m='1338180'>it</span> <span
  m='1338260'>goes</span> <span m='1338440'>from</span> <span
  m='1338600'>one</span> <span m='1338790'>tree</span> <span
  m='1339040'>to</span> <span m='1339200'>another,</span> <span
  m='1340600'>doesn't</span> <span m='1340840'>have</span> <span
  m='1341020'>to</span> <span m='1341110'>go</span> <span
  m='1341300'>between</span> <span m='1341810'>different</span> <span
  m='1342100'>trees.</span> <span m='1342540'>For</span> <span
  m='1342900'>example,</span> <span m='1345540'>let's</span> <span
  m='1345900'>say</span> <span m='1346590'>I'm</span> <span
  m='1346790'>visiting</span> <span m='1347240'>d,</span> <span
  m='1348420'>then</span> <span m='1348540'>I</span> <span m='1348580'>go</span>
  <span m='1348720'>back</span> <span m='1348960'>to</span> <span
  m='1349150'>e,</span> <span m='1349340'>I</span> <span
  m='1349460'>visit</span> <span m='1349830'>g,</span> <span
  m='1351140'>or</span> <span m='1351215'>there</span> <span
  m='1351290'>could</span> <span m='1351430'>be</span> <span
  m='1351550'>this</span> <span m='1351770'>edge.</span> <span
  m='1352942'>If</span> <span m='1353320'>this</span> <span
  m='1353490'>edge</span> <span m='1353690'>existed,</span> <span
  m='1355200'>it</span> <span m='1355360'>would</span> <span
  m='1355550'>be</span> <span m='1355890'>a</span> <span
  m='1355970'>cross</span> <span m='1356450'>edge,</span> <span
  m='1357720'>because</span> <span m='1358360'>g</span> <span
  m='1358800'>and</span> <span m='1358970'>d</span> <span m='1359610'>are</span>
  <span m='1359770'>not</span> <span m='1360000'>ancestor</span> <span
  m='1360430'>related,</span> <span m='1360970'>neither</span> <span
  m='1361260'>one</span> <span m='1361430'>is</span> <span m='1361540'>an</span>
  <span m='1361630'>ancestor</span> <span m='1362140'>of</span> <span
  m='1362210'>the</span> <span m='1362350'>other,</span> <span
  m='1362980'>they</span> <span m='1363190'>are</span> <span
  m='1363570'>siblings</span> <span m='1364180'>actually.</span> <span
  m='1366550'>So</span> <span m='1366680'>there's,</span> <span
  m='1367170'>in</span> <span m='1367310'>general,</span> <span
  m='1367650'>there's</span> <span m='1367760'>going</span> <span
  m='1367870'>to</span> <span m='1367920'>be</span> <span
  m='1368010'>some</span> <span m='1368295'>subtree</span> <span
  m='1368880'>over</span> <span m='1369060'>here,</span> <span
  m='1369820'>some</span> <span m='1370080'>subtree</span> <span
  m='1370510'>over</span> <span m='1370680'>here,</span> <span
  m='1371210'>and</span> <span m='1371370'>this</span> <span
  m='1371510'>is</span> <span m='1371610'>a</span> <span
  m='1371850'>cross</span> <span m='1372090'>edge</span> <span
  m='1372330'>between</span> <span m='1372740'>two</span> <span
  m='1372950'>different</span> <span m='1373280'>subtrees.</span> <span
  m='1375760'>This</span> <span m='1375992'>cross</span> <span
  m='1376225'>edge</span> <span m='1376690'>is</span> <span
  m='1376830'>between</span> <span m='1380090'>two,</span> <span
  m='1383550'>sort</span> <span m='1383665'>of,</span> <span
  m='1386400'>non</span> <span m='1386750'>ancestor</span> <span
  m='1387380'>related,</span> <span m='1387960'>I</span> <span
  m='1387990'>think</span> <span m='1388300'>is the</span> <span
  m='1388670'>shortest</span> <span m='1388820'>way</span> <span
  m='1388970'>to</span> <span m='1389180'>write</span> <span
  m='1389390'>this,</span> <span m='1395690'>subtrees</span> <span
  m='1396470'>or</span> <span m='1396590'>nodes.</span> </p><p><span
  m='1406520'>A</span> <span m='1406580'>little</span> <span
  m='1406860'>puzzle</span> <span m='1407250'>for</span> <span
  m='1407530'>you,</span> <span m='1408550'>well,</span> <span
  m='1408950'>I</span> <span m='1408980'>guess</span> <span
  m='1409065'>the</span> <span m='1409150'>first</span> <span
  m='1409360'>question</span> <span m='1409620'>is,</span> <span
  m='1409690'>how</span> <span m='1409800'>do</span> <span
  m='1409870'>you</span> <span m='1409970'>compute</span> <span
  m='1410370'>this</span> <span m='1410480'>structure?</span> <span
  m='1411620'>How</span> <span m='1411780'>do</span> <span
  m='1411850'>you</span> <span m='1411960'>compute</span> <span
  m='1412370'>which</span> <span m='1412480'>edges</span> <span
  m='1412780'>are</span> <span m='1412900'>which?</span> <span
  m='1414410'>This</span> <span m='1414630'>is</span> <span
  m='1414770'>not</span> <span m='1415010'>hard,</span> <span
  m='1415400'>although</span> <span m='1415475'>I</span> <span
  m='1415550'>haven't</span> <span m='1415830'>written</span> <span
  m='1416040'>it</span> <span m='1416170'>in</span> <span m='1416290'>the</span>
  <span m='1416380'>code</span> <span m='1416670'>here.</span> <span
  m='1417200'>You</span> <span m='1417320'>can</span> <span
  m='1417460'>check</span> <span m='1417690'>the</span> <span
  m='1417790'>textbook</span> <span m='1418860'>for</span> <span
  m='1419250'>one</span> <span m='1419490'>way</span> <span
  m='1419640'>to</span> <span m='1419770'>do</span> <span m='1419940'>it.</span>
  <span m='1422290'>The</span> <span m='1422460'>parent</span> <span
  m='1423030'>structure</span> <span m='1423550'>tells</span> <span
  m='1423850'>you</span> <span m='1424010'>which</span> <span
  m='1424320'>edges</span> <span m='1424700'>are</span> <span
  m='1424820'>tree</span> <span m='1425150'>edges.</span> <span
  m='1425800'>So</span> <span m='1425880'>that</span> <span
  m='1426100'>part</span> <span m='1426280'>we</span> <span
  m='1426390'>have</span> <span m='1426660'>done.</span> </p><p><span
  m='1427980'>Every</span> <span m='1430050'>parent</span> <span
  m='1430410'>pointer</span> <span m='1430730'>corresponds</span> <span
  m='1431240'>to</span> <span m='1431340'>the</span> <span
  m='1431460'>reverse</span> <span m='1431960'>of</span> <span
  m='1432070'>a</span> <span m='1432120'>tree</span> <span
  m='1432460'>edge,</span> <span m='1432670'>so</span> <span
  m='1433050'>at</span> <span m='1433210'>the</span> <span
  m='1433290'>same</span> <span m='1433510'>time</span> <span
  m='1433720'>you</span> <span m='1433810'>could</span> <span
  m='1433970'>mark</span> <span m='1434190'>that</span> <span
  m='1434350'>edge</span> <span m='1434570'>a</span> <span
  m='1434620'>tree</span> <span m='1434910'>edge,</span> <span
  m='1435250'>and</span> <span m='1435320'>you'd</span> <span
  m='1435420'>know</span> <span m='1435640'>which</span> <span
  m='1435820'>edges</span> <span m='1436050'>are</span> <span
  m='1436130'>tree</span> <span m='1436360'>edges</span> <span
  m='1436660'>and</span> <span m='1436760'>which</span> <span
  m='1436960'>edges</span> <span m='1437220'>are</span> <span
  m='1437300'>nontree</span> <span m='1437840'>edges.</span> <span
  m='1438990'>If</span> <span m='1439150'>you</span> <span
  m='1439270'>want</span> <span m='1439470'>to</span> <span
  m='1439530'>know</span> <span m='1439710'>which</span> <span
  m='1439920'>are</span> <span m='1440010'>forward,</span> <span
  m='1440460'>which</span> <span m='1440660'>are</span> <span
  m='1440740'>backward,</span> <span m='1441290'>which</span> <span
  m='1441410'>are</span> <span m='1441510'>cross</span> <span
  m='1441920'>edges,</span> <span m='1443060'>the</span> <span
  m='1443190'>key</span> <span m='1443410'>thing</span> <span
  m='1443600'>you</span> <span m='1443700'>need</span> <span
  m='1443920'>to</span> <span m='1444060'>know</span> <span
  m='1446130'>is,</span> <span m='1448780'>well,</span> <span
  m='1449250'>in</span> <span m='1449350'>particular,</span> <span
  m='1449860'>for</span> <span m='1450940'>backward</span> <span
  m='1451420'>edges,</span> <span m='1453530'>one</span> <span
  m='1453940'>way</span> <span m='1454140'>to</span> <span
  m='1454280'>compute</span> <span m='1454640'>them</span> <span
  m='1455400'>is</span> <span m='1455570'>to</span> <span
  m='1455710'>mark</span> <span m='1456190'>which</span> <span
  m='1456560'>nodes</span> <span m='1456850'>you</span> <span
  m='1456990'>are</span> <span m='1457100'>currently</span> <span
  m='1457710'>exploring.</span> </p><p><span m='1459880'>So</span> <span
  m='1460100'>when</span> <span m='1460230'>we</span> <span
  m='1460350'>do</span> <span m='1460520'>a</span> <span m='1460657'>DFS</span>
  <span m='1461070'>visit</span> <span m='1461430'>on</span> <span
  m='1461620'>a</span> <span m='1461660'>node,</span> <span
  m='1462660'>we</span> <span m='1462970'>could</span> <span
  m='1463220'>say</span> <span m='1463750'>at</span> <span
  m='1463940'>the</span> <span m='1464020'>beginning</span> <span
  m='1464410'>here,</span> <span m='1465160'>basically,</span> <span
  m='1467100'>we're</span> <span m='1467310'>starting</span> <span
  m='1467890'>to</span> <span m='1467990'>visit</span> <span
  m='1468710'>s,</span> <span m='1469880'>say,</span> <span
  m='1470090'>start</span> <span m='1470480'>s,</span> <span
  m='1471230'>and</span> <span m='1471360'>then</span> <span
  m='1471480'>at</span> <span m='1471580'>the</span> <span
  m='1471730'>end</span> <span m='1472020'>of</span> <span
  m='1472100'>this</span> <span m='1472280'>for</span> <span
  m='1472480'>loop,</span> <span m='1473060'>we</span> <span
  m='1473190'>write,</span> <span m='1473580'>we're</span> <span
  m='1473710'>finished</span> <span m='1474100'>with</span> <span
  m='1474190'>s.</span> <span m='1478190'>And</span> <span
  m='1478400'>you</span> <span m='1478520'>could</span> <span
  m='1478660'>mark</span> <span m='1478940'>that</span> <span
  m='1479210'>in</span> <span m='1479440'>the</span> <span m='1479540'>s</span>
  <span m='1479750'>structure.</span> <span m='1480130'>You</span> <span
  m='1480210'>could</span> <span m='1480350'>say</span> <span
  m='1480710'>s</span> <span m='1480980'>dot</span> <span m='1481460'>in</span>
  <span m='1481940'>process</span> <span m='1482470'>is</span> <span
  m='1482630'>true</span> <span m='1483090'>up</span> <span
  m='1483290'>here,</span> <span m='1483720'>s</span> <span
  m='1483950'>dot</span> <span m='1484210'>in</span> <span
  m='1484310'>process</span> <span m='1484950'>equals</span> <span
  m='1485290'>false</span> <span m='1485670'>down</span> <span
  m='1485870'>here.</span> <span m='1486730'>Keep</span> <span
  m='1486890'>track</span> <span m='1487130'>of</span> <span
  m='1487250'>which</span> <span m='1487500'>nodes</span> <span
  m='1487850'>are</span> <span m='1488170'>currently</span> <span
  m='1488630'>in</span> <span m='1488850'>the</span> <span
  m='1488940'>recursion</span> <span m='1489470'>stack,</span> <span
  m='1490960'>just</span> <span m='1491110'>by</span> <span
  m='1491220'>marking</span> <span m='1491550'>them</span> <span
  m='1491950'>and</span> <span m='1492110'>unmarking</span> <span
  m='1492610'>them</span> <span m='1493120'>at</span> <span
  m='1493260'>the</span> <span m='1493340'>beginning</span> <span
  m='1493900'>and</span> <span m='1494000'>the</span> <span
  m='1494140'>end.</span> <span m='1495430'>Then</span> <span
  m='1495680'>we'll</span> <span m='1495850'>know,</span> <span
  m='1496300'>if</span> <span m='1496420'>we</span> <span
  m='1496530'>follow</span> <span m='1496990'>an</span> <span
  m='1497080'>edge</span> <span m='1497410'>and</span> <span
  m='1497540'>it's</span> <span m='1497680'>an</span> <span
  m='1497810'>edge</span> <span m='1498210'>to</span> <span
  m='1498490'>somebody</span> <span m='1498950'>who's</span> <span
  m='1499200'>already</span> <span m='1499710'>in</span> <span
  m='1499860'>the</span> <span m='1499950'>stack,</span> <span
  m='1501220'>then</span> <span m='1503460'>it's</span> <span
  m='1503650'>a</span> <span m='1503700'>backward</span> <span
  m='1504070'>edge,</span> <span m='1505100'>because</span> <span
  m='1505240'>that's--</span> <span m='1505620'>everyone</span> <span
  m='1506020'>in</span> <span m='1506100'>the</span> <span
  m='1506180'>stack</span> <span m='1506520'>is</span> <span
  m='1506630'>an</span> <span m='1506770'>ancestor</span> <span
  m='1507420'>from</span> <span m='1507710'>our</span> <span
  m='1507850'>current</span> <span m='1508180'>node.</span> </p><p><span
  m='1510690'>Detecting</span> <span m='1511170'>forward</span> <span
  m='1511640'>edges,</span> <span m='1514800'>it's</span> <span
  m='1514890'>a</span> <span m='1514940'>little</span> <span
  m='1515170'>trickier.</span> <span m='1518940'>Forward</span> <span
  m='1519710'>edges</span> <span m='1519850'>versus</span> <span
  m='1520240'>cross</span> <span m='1520610'>edges,</span> <span
  m='1523330'>any</span> <span m='1523510'>suggestions</span> <span
  m='1524050'>on</span> <span m='1524135'>an</span> <span
  m='1524220'>easy</span> <span m='1524480'>way</span> <span
  m='1524610'>to</span> <span m='1524680'>do</span> <span
  m='1524790'>that?</span> <span m='1528480'>I</span> <span
  m='1528493'>don't</span> <span m='1528506'>think</span> <span
  m='1528520'>I</span> <span m='1528570'>know</span> <span m='1528725'>an</span>
  <span m='1528880'>easy</span> <span m='1529070'>way</span> <span
  m='1529190'>to</span> <span m='1529280'>do</span> <span
  m='1529390'>that.</span> <span m='1531840'>It</span> <span
  m='1531905'>can</span> <span m='1531970'>be</span> <span
  m='1532080'>done.</span> <span m='1533560'>The</span> <span
  m='1533760'>way</span> <span m='1533890'>the</span> <span
  m='1534020'>textbook</span> <span m='1534460'>does</span> <span
  m='1534680'>it</span> <span m='1534820'>is</span> <span m='1535050'>a</span>
  <span m='1535110'>little</span> <span m='1535410'>bit</span> <span
  m='1535570'>more</span> <span m='1535750'>sophisticated,</span> <span
  m='1537640'>in</span> <span m='1537770'>that</span> <span
  m='1537900'>when</span> <span m='1538120'>they</span> <span
  m='1539190'>start</span> <span m='1539480'>visiting</span> <span
  m='1539860'>a</span> <span m='1539900'>vertex,</span> <span
  m='1541030'>they</span> <span m='1541340'>record</span> <span
  m='1541850'>the</span> <span m='1542030'>time</span> <span
  m='1543420'>that</span> <span m='1543600'>it</span> <span
  m='1543990'>got</span> <span m='1544180'>visited.</span> <span
  m='1544890'>What's</span> <span m='1545150'>time?</span> <span
  m='1546620'>You</span> <span m='1546790'>could</span> <span
  m='1546930'>think</span> <span m='1547090'>of</span> <span
  m='1547160'>it</span> <span m='1547240'>as</span> <span m='1547350'>the</span>
  <span m='1547440'>clock</span> <span m='1547840'>on</span> <span
  m='1547920'>your</span> <span m='1548070'>computer,</span> <span
  m='1549220'>another</span> <span m='1549890'>way</span> <span
  m='1550000'>to</span> <span m='1550100'>do</span> <span m='1550250'>it</span>
  <span m='1550340'>is,</span> <span m='1550530'>every</span> <span
  m='1550830'>time</span> <span m='1551140'>you</span> <span
  m='1551240'>do</span> <span m='1551400'>a</span> <span m='1551460'>step</span>
  <span m='1551790'>in</span> <span m='1551890'>this</span> <span
  m='1552060'>algorithm,</span> <span m='1552600'>you</span> <span
  m='1552890'>increment</span> <span m='1553300'>a</span> <span
  m='1553350'>counter.</span> </p><p><span m='1555000'>So</span> <span
  m='1555190'>every</span> <span m='1555480'>time</span> <span
  m='1556410'>anything</span> <span m='1556770'>happens,</span> <span
  m='1557130'>you</span> <span m='1557230'>increment</span> <span
  m='1557425'>a</span> <span m='1557620'>counter,</span> <span
  m='1558490'>and</span> <span m='1558650'>then</span> <span
  m='1558780'>you</span> <span m='1558890'>store</span> <span
  m='1559260'>the</span> <span m='1559350'>value</span> <span
  m='1559650'>of</span> <span m='1559750'>that</span> <span
  m='1559850'>counter</span> <span m='1560170'>here</span> <span
  m='1560450'>for</span> <span m='1560640'>s,</span> <span
  m='1561030'>that</span> <span m='1561210'>would</span> <span
  m='1561310'>be</span> <span m='1561400'>the</span> <span
  m='1561490'>start</span> <span m='1561840'>time</span> <span
  m='1562100'>for</span> <span m='1562230'>s,</span> <span
  m='1562910'>you</span> <span m='1563010'>store</span> <span
  m='1563270'>the</span> <span m='1563370'>finish</span> <span
  m='1563710'>time</span> <span m='1563990'>for</span> <span
  m='1564110'>s</span> <span m='1564370'>down</span> <span
  m='1564580'>here,</span> <span m='1566100'>and</span> <span
  m='1566280'>then</span> <span m='1566710'>this</span> <span
  m='1566960'>gives</span> <span m='1567190'>you,</span> <span
  m='1567470'>this</span> <span m='1567640'>tells</span> <span
  m='1567900'>you</span> <span m='1568040'>when</span> <span
  m='1568460'>a</span> <span m='1568520'>node</span> <span
  m='1568760'>was</span> <span m='1568940'>visited,</span> <span
  m='1569550'>and</span> <span m='1569700'>you</span> <span
  m='1569830'>can</span> <span m='1569970'>use</span> <span
  m='1570210'>that</span> <span m='1570450'>to</span> <span
  m='1570530'>compute</span> <span m='1571270'>when</span> <span
  m='1571360'>an</span> <span m='1571450'>edge</span> <span
  m='1571680'>is</span> <span m='1571790'>a</span> <span
  m='1571850'>forward</span> <span m='1572170'>edge</span> <span
  m='1572520'>and</span> <span m='1573180'>otherwise</span> <span
  m='1573690'>it's</span> <span m='1573820'>a</span> <span
  m='1574000'>cross</span> <span m='1574180'>edge.</span> <span
  m='1575420'>It's</span> <span m='1575550'>not</span> <span
  m='1575700'>terribly</span> <span m='1575990'>exciting,</span> <span
  m='1576390'>though,</span> <span m='1576530'>so</span> <span
  m='1576600'>I'm</span> <span m='1576680'>not</span> <span
  m='1576840'>going</span> <span m='1576960'>to</span> <span
  m='1577460'>detail</span> <span m='1577860'>that.</span> <span
  m='1578810'>You</span> <span m='1578880'>can</span> <span
  m='1579030'>look</span> <span m='1579190'>at</span> <span
  m='1579240'>the</span> <span m='1579330'>textbook</span> <span
  m='1580860'>if</span> <span m='1581150'>you're</span> <span
  m='1581310'>interested.</span> </p><p><span m='1582450'>But</span> <span
  m='1582560'>here's</span> <span m='1582760'>a</span> <span
  m='1582830'>fun</span> <span m='1583060'>puzzle.</span> <span
  m='1584140'>In</span> <span m='1584330'>an</span> <span
  m='1584770'>undirected</span> <span m='1585750'>graph,</span> <span
  m='1587160'>which</span> <span m='1587490'>of</span> <span
  m='1587630'>these</span> <span m='1589190'>edges</span> <span
  m='1590177'>can</span> <span m='1590634'>exist?</span> <span
  m='1592920'>We</span> <span m='1593000'>can</span> <span
  m='1593300'>have</span> <span m='1593386'>a</span> <span
  m='1593473'>vote,</span> <span m='1595120'>do</span> <span
  m='1595280'>some</span> <span m='1596970'>democratic</span> <span
  m='1597560'>mathematics.</span> <span m='1598790'>How</span> <span
  m='1598960'>many</span> <span m='1599190'>people</span> <span
  m='1599470'>think</span> <span m='1599800'>tree</span> <span
  m='1600050'>edges</span> <span m='1600320'>exist</span> <span
  m='1600700'>in</span> <span m='1600890'>undirected</span> <span
  m='1601430'>graphs?</span> <span m='1604510'>You,</span> <span
  m='1605980'>OK.</span> <span m='1606350'>Sarini</span> <span
  m='1606510'>does.</span> <span m='1606670'>That's</span> <span
  m='1606870'>a</span> <span m='1606920'>good</span> <span
  m='1607100'>sign.</span> </p><p><span m='1607740'>How</span> <span
  m='1607910'>many</span> <span m='1608100'>people</span> <span
  m='1608390'>think</span> <span m='1608600'>forward</span> <span
  m='1609040'>edges</span> <span m='1609340'>exist</span> <span
  m='1609645'>in</span> <span m='1609797'>an</span> <span
  m='1609950'>undirected</span> <span m='1610630'>graph?</span> <span
  m='1614310'>A</span> <span m='1614455'>couple.</span> <span
  m='1614890'>How</span> <span m='1614990'>many</span> <span
  m='1615170'>people</span> <span m='1615420'>think</span> <span
  m='1615630'>backward</span> <span m='1616060'>edges</span> <span
  m='1616370'>exist</span> <span m='1616730'>in</span> <span
  m='1616850'>an</span> <span m='1617040'>undirected</span> <span
  m='1617620'>graph?</span> <span m='1619740'>Couple.</span> <span
  m='1620000'>How</span> <span m='1620440'>many</span> <span
  m='1620640'>people</span> <span m='1620930'>think</span> <span
  m='1621200'>cross</span> <span m='1621362'>edges</span> <span
  m='1621850'>exist</span> <span m='1622580'>in</span> <span
  m='1622750'>undirected</span> <span m='1623080'>graph?</span> <span
  m='1623980'>More</span> <span m='1624290'>people,</span> <span
  m='1624830'>OK.</span> <span m='1625250'>I</span> <span
  m='1625380'>think</span> <span m='1626100'>voting</span> <span
  m='1626530'>worked.</span> </p><p><span m='1627870'>They</span> <span
  m='1627990'>all</span> <span m='1628200'>exist,</span> <span
  m='1628600'>no,</span> <span m='1628840'>that's</span> <span
  m='1629337'>not</span> <span m='1629585'>true.</span> <span
  m='1630830'>This</span> <span m='1631070'>one</span> <span
  m='1631270'>can</span> <span m='1631400'>exist</span> <span
  m='1632390'>and</span> <span m='1632550'>this</span> <span
  m='1632720'>one</span> <span m='1632920'>can</span> <span
  m='1633060'>exist.</span> <span m='1633470'>I</span> <span
  m='1633620'>actually</span> <span m='1633770'>wrote</span> <span
  m='1633930'>the</span> <span m='1634030'>wrong</span> <span
  m='1634250'>ones</span> <span m='1634480'>in</span> <span
  m='1634560'>my</span> <span m='1634690'>notes,</span> <span
  m='1635050'>so</span> <span m='1635210'>it's</span> <span
  m='1635380'>good</span> <span m='1636140'>to</span> <span
  m='1636330'>trick</span> <span m='1636620'>you,</span> <span
  m='1636920'>no,</span> <span m='1637120'>it's</span> <span
  m='1637320'>I</span> <span m='1637530'>made</span> <span m='1637730'>a</span>
  <span m='1637770'>mistake.</span> <span m='1639020'>It's</span> <span
  m='1639360'>very</span> <span m='1639540'>easy</span> <span
  m='1639720'>to</span> <span m='1639780'>get</span> <span
  m='1639970'>these</span> <span m='1640160'>mixed</span> <span
  m='1640480'>up</span> <span m='1640870'>and</span> <span
  m='1641540'>you</span> <span m='1641720'>can</span> <span
  m='1641870'>think</span> <span m='1642070'>about</span> <span
  m='1643220'>why</span> <span m='1643660'>this</span> <span
  m='1643860'>is</span> <span m='1644030'>true,</span> <span
  m='1644360'>maybe</span> <span m='1644630'>I'll</span> <span
  m='1644740'>draw</span> <span m='1644930'>some</span> <span
  m='1645130'>pictures</span> <span m='1645660'>to</span> <span
  m='1645910'>clarify.</span> </p><p><span m='1650080'>This</span> <span
  m='1650260'>is</span> <span m='1650370'>something,</span> <span
  m='1651220'>you</span> <span m='1651440'>remember</span> <span
  m='1651800'>the--</span> <span m='1654340'>there</span> <span
  m='1654510'>was</span> <span m='1654800'>BFS</span> <span
  m='1655140'>diagram,</span> <span m='1655570'>I</span> <span
  m='1655650'>talked</span> <span m='1655970'>a</span> <span
  m='1656030'>little</span> <span m='1656260'>bit</span> <span
  m='1656390'>about</span> <span m='1656680'>this</span> <span
  m='1657000'>last</span> <span m='1657270'>class.</span> <span
  m='1658460'>Tree</span> <span m='1658740'>edges</span> <span
  m='1659380'>better</span> <span m='1659610'>exist,</span> <span
  m='1660250'>those</span> <span m='1660280'>are</span> <span
  m='1660310'>the</span> <span m='1660410'>things</span> <span
  m='1660650'>you</span> <span m='1660720'>use</span> <span
  m='1660940'>to</span> <span m='1661010'>visit</span> <span
  m='1661370'>new</span> <span m='1661800'>vertices.</span> <span
  m='1662370'>So</span> <span m='1662680'>that</span> <span
  m='1662960'>always</span> <span m='1663180'>happens,</span> <span
  m='1663740'>undirected</span> <span m='1664270'>or</span> <span
  m='1664430'>otherwise.</span> <span m='1665640'>Forward</span> <span
  m='1666150'>edges,</span> <span m='1666510'>though,</span> <span
  m='1666920'>forward</span> <span m='1667300'>edge</span> <span
  m='1667570'>of</span> <span m='1667640'>would</span> <span
  m='1667847'>be,</span> <span m='1668055'>OK,</span> <span m='1668470'>I</span>
  <span m='1668490'>visited</span> <span m='1669040'>this,</span> <span
  m='1670000'>then</span> <span m='1670160'>I</span> <span
  m='1670240'>visited</span> <span m='1670740'>this.</span> <span
  m='1671590'>Those</span> <span m='1671860'>were</span> <span
  m='1672000'>tree</span> <span m='1672280'>edges.</span> <span
  m='1675370'>Then</span> <span m='1675510'>I</span> <span
  m='1675560'>backtrack</span> <span m='1676520'>and</span> <span
  m='1676740'>I</span> <span m='1677255'>follow</span> <span
  m='1677600'>an</span> <span m='1677910'>edge</span> <span
  m='1678070'>like</span> <span m='1678520'>this.</span> <span
  m='1678640'>This</span> <span m='1678690'>would</span> <span
  m='1678740'>be</span> <span m='1678880'>a</span> <span
  m='1678970'>forward</span> <span m='1679300'>edge.</span> <span
  m='1679760'>And</span> <span m='1679910'>in</span> <span m='1680010'>a</span>
  <span m='1680110'>directed</span> <span m='1680460'>graph</span> <span
  m='1680706'>that</span> <span m='1680952'>can</span> <span
  m='1681444'>happen.</span> <span m='1683470'>In</span> <span
  m='1683640'>an</span> <span m='1683730'>undirected</span> <span
  m='1684420'>graph,</span> <span m='1687120'>it</span> <span
  m='1687190'>can</span> <span m='1687340'>also</span> <span
  m='1687570'>happen,</span> <span m='1690850'>right?</span> <span
  m='1691320'>Oh,</span> <span m='1691560'>no,</span> <span
  m='1691730'>it</span> <span m='1691750'>can't,</span> <span
  m='1692050'>it</span> <span m='1692080'>can't.</span> <span
  m='1692540'>OK.</span> <span m='1694530'>So</span> <span
  m='1694990'>confusing.</span> <span m='1695720'>undirected</span> <span
  m='1696250'>graph,</span> <span m='1697180'>if</span> <span
  m='1697310'>you</span> <span m='1697420'>look</span> <span
  m='1697570'>like</span> <span m='1697760'>this,</span> <span
  m='1697970'>you</span> <span m='1698110'>start--</span> <span
  m='1698810'>let's</span> <span m='1698980'>say</span> <span
  m='1699070'>this</span> <span m='1699260'>is</span> <span
  m='1699410'>s.</span> <span m='1700300'>You</span> <span
  m='1700380'>start</span> <span m='1700650'>here,</span> <span
  m='1701990'>and</span> <span m='1702170'>suppose</span> <span
  m='1702510'>we</span> <span m='1702630'>follow</span> <span
  m='1702940'>this</span> <span m='1703140'>edge.</span> <span
  m='1704000'>We</span> <span m='1704120'>get</span> <span m='1704290'>to</span>
  <span m='1704360'>here,</span> <span m='1704920'>then</span> <span
  m='1705040'>we</span> <span m='1705170'>follow</span> <span
  m='1705480'>this</span> <span m='1705700'>edge,</span> <span
  m='1706220'>we</span> <span m='1706276'>get</span> <span m='1706530'>to</span>
  <span m='1706610'>here.</span> <span m='1707180'>Then</span> <span
  m='1707400'>we</span> <span m='1707530'>will</span> <span
  m='1707690'>follow</span> <span m='1708030'>this</span> <span
  m='1708140'>edge</span> <span m='1708420'>in</span> <span
  m='1708570'>the</span> <span m='1708720'>other</span> <span
  m='1708910'>direction,</span> <span m='1711390'>and</span> <span
  m='1711580'>that's</span> <span m='1711840'>guaranteed</span> <span
  m='1712340'>to</span> <span m='1712400'>finish</span> <span
  m='1712830'>before</span> <span m='1713250'>we</span> <span
  m='1713380'>get</span> <span m='1713570'>back</span> <span
  m='1713830'>to</span> <span m='1713930'>s.</span> </p><p><span
  m='1715240'>So,</span> <span m='1715880'>in</span> <span
  m='1716090'>order</span> <span m='1716220'>to</span> <span
  m='1716270'>be</span> <span m='1716410'>a</span> <span
  m='1716460'>forward</span> <span m='1716760'>edge,</span> <span
  m='1716970'>this</span> <span m='1717130'>one</span> <span
  m='1717260'>has</span> <span m='1717430'>to</span> <span m='1717490'>be</span>
  <span m='1717570'>visited</span> <span m='1717980'>after</span> <span
  m='1718330'>this</span> <span m='1718540'>one,</span> <span
  m='1719110'>from</span> <span m='1719420'>s,</span> <span
  m='1720780'>but</span> <span m='1720920'>in</span> <span
  m='1721020'>this</span> <span m='1721210'>scenario,</span> <span
  m='1721720'>if</span> <span m='1721820'>you</span> <span
  m='1721910'>follow</span> <span m='1722200'>this</span> <span
  m='1722350'>one</span> <span m='1722500'>first,</span> <span
  m='1723270'>you'll</span> <span m='1723420'>eventually</span> <span
  m='1723760'>get</span> <span m='1723910'>to</span> <span
  m='1723970'>this</span> <span m='1724150'>vertex</span> <span
  m='1724530'>and</span> <span m='1724700'>then</span> <span
  m='1724860'>you</span> <span m='1724980'>will</span> <span
  m='1725100'>come</span> <span m='1725340'>back,</span> <span
  m='1726070'>and</span> <span m='1726280'>then</span> <span
  m='1726450'>that</span> <span m='1726640'>will</span> <span
  m='1726750'>be</span> <span m='1726930'>classified</span> <span
  m='1727440'>as</span> <span m='1727560'>a</span> <span
  m='1727620'>backward</span> <span m='1728150'>edge</span> <span
  m='1728670'>in</span> <span m='1728810'>an</span> <span
  m='1728900'>undirected</span> <span m='1729360'>graph.</span> <span
  m='1729670'>So</span> <span m='1729970'>you</span> <span
  m='1730090'>can</span> <span m='1730240'>never</span> <span
  m='1730520'>have</span> <span m='1730750'>forward</span> <span
  m='1731120'>edges</span> <span m='1732110'>in</span> <span
  m='1732290'>an</span> <span m='1732430'>undirected</span> <span
  m='1732990'>graph.</span> <span m='1740900'>But</span> <span
  m='1741060'>I</span> <span m='1741130'>have</span> <span m='1741310'>a</span>
  <span m='1741370'>backward</span> <span m='1741860'>edge</span> <span
  m='1742080'>here,</span> <span m='1743280'>that</span> <span
  m='1743450'>would</span> <span m='1743600'>suggest</span> <span
  m='1744490'>I</span> <span m='1744590'>can</span> <span
  m='1744720'>have</span> <span m='1744870'>backward</span> <span
  m='1745205'>edges</span> <span m='1745540'>here,</span> <span
  m='1747000'>and</span> <span m='1747480'>no</span> <span
  m='1747685'>cross</span> <span m='1747890'>edges.</span> <span
  m='1748190'>Well,</span> <span m='1748350'>democracy</span> <span
  m='1748950'>did</span> <span m='1749110'>not</span> <span
  m='1749320'>work,</span> <span m='1749680'>I</span> <span
  m='1749780'>was</span> <span m='1749790'>swayed</span> <span
  m='1750420'>by</span> <span m='1751045'>the</span> <span
  m='1751420'>popular</span> <span m='1752710'>vote.</span> <span
  m='1754410'>So</span> <span m='1754830'>I</span> <span
  m='1754930'>claim,</span> <span m='1755540'>apparently,</span> <span
  m='1756140'>cross</span> <span m='1756550'>edges</span> <span
  m='1756960'>do</span> <span m='1757080'>not</span> <span
  m='1757290'>exist.</span> </p><p><span m='1757700'>Let's</span> <span
  m='1757930'>try</span> <span m='1758140'>to</span> <span
  m='1758250'>draw</span> <span m='1758470'>this.</span> <span
  m='1758660'>So</span> <span m='1759330'>a</span> <span
  m='1759460'>cross</span> <span m='1759940'>edge</span> <span
  m='1762360'>typical</span> <span m='1762800'>scenario</span> <span
  m='1763370'>would</span> <span m='1763630'>be</span> <span
  m='1764110'>either</span> <span m='1764420'>here,</span> <span
  m='1766240'>you</span> <span m='1766420'>follow</span> <span
  m='1766850'>this</span> <span m='1767005'>edge,</span> <span
  m='1768620'>you</span> <span m='1768730'>backtrack,</span> <span
  m='1769900'>you</span> <span m='1770000'>follow</span> <span
  m='1770490'>another</span> <span m='1770870'>edge,</span> <span
  m='1771680'>and</span> <span m='1771840'>then</span> <span
  m='1771950'>you</span> <span m='1772050'>discover</span> <span
  m='1772450'>there's</span> <span m='1772660'>was</span> <span
  m='1772715'>an</span> <span m='1772770'>edge</span> <span
  m='1773000'>back</span> <span m='1773430'>to</span> <span
  m='1773820'>some</span> <span m='1774050'>other</span> <span
  m='1774280'>subtree</span> <span m='1774670'>that</span> <span
  m='1774760'>you've</span> <span m='1774850'>already</span> <span
  m='1775150'>visited.</span> <span m='1776020'>That</span> <span
  m='1776250'>can</span> <span m='1776480'>happen</span> <span
  m='1776850'>in</span> <span m='1776950'>an</span> <span
  m='1777080'>undirected</span> <span m='1777560'>graph.</span> <span
  m='1778365'>For</span> <span m='1778690'>the</span> <span
  m='1778760'>same</span> <span m='1778990'>reason,</span> <span
  m='1779270'>if</span> <span m='1779380'>I</span> <span
  m='1779640'>follow</span> <span m='1779930'>this</span> <span
  m='1780130'>one</span> <span m='1780310'>first,</span> <span
  m='1781930'>and</span> <span m='1782150'>this</span> <span
  m='1782320'>edge</span> <span m='1782510'>exists</span> <span
  m='1783060'>undirected,</span> <span m='1783940'>then</span> <span
  m='1784110'>I</span> <span m='1784230'>will</span> <span m='1784400'>go</span>
  <span m='1784620'>down</span> <span m='1784900'>that</span> <span
  m='1785090'>way.</span> <span m='1786240'>So</span> <span
  m='1786460'>it</span> <span m='1786610'>will</span> <span
  m='1786780'>be</span> <span m='1787070'>actually</span> <span
  m='1787410'>tree</span> <span m='1787710'>edge,</span> <span
  m='1788090'>not</span> <span m='1788240'>a</span> <span
  m='1788390'>cross</span> <span m='1788850'>edge.</span> <span
  m='1790260'>OK,</span> <span m='1790730'>phew.</span> <span
  m='1791670'>That</span> <span m='1791910'>means</span> <span
  m='1793280'>my</span> <span m='1793490'>notes</span> <span
  m='1793930'>were</span> <span m='1794160'>correct.</span> <span
  m='1796800'>I</span> <span m='1796860'>was</span> <span
  m='1796920'>surprised,</span> <span m='1797410'>because</span> <span
  m='1797580'>they</span> <span m='1797690'>were</span> <span
  m='1797910'>copied</span> <span m='1798045'>from</span> <span
  m='1798180'>the</span> <span m='1798450'>textbook,</span> <span
  m='1802420'>uncorrect</span> <span m='1802710'>my</span> <span
  m='1802800'>correction.</span> <span m='1804570'>Good.</span> </p><p><span
  m='1810080'>So</span> <span m='1810690'>what?</span> <span
  m='1813140'>Why</span> <span m='1813490'>do</span> <span m='1813610'>I</span>
  <span m='1813680'>care</span> <span m='1813950'>about</span> <span
  m='1814170'>these</span> <span m='1814340'>edge</span> <span
  m='1814520'>classifications?</span> <span m='1815930'>I</span> <span
  m='1816060'>claim</span> <span m='1816400'>they're</span> <span
  m='1816570'>super</span> <span m='1816890'>handy</span> <span
  m='1817790'>for</span> <span m='1818030'>two</span> <span
  m='1818200'>problems,</span> <span m='1820000'>cycle</span> <span
  m='1820410'>detection,</span> <span m='1821970'>which</span> <span
  m='1822540'>is</span> <span m='1822640'>pretty</span> <span
  m='1822890'>intuitive</span> <span m='1823290'>problem.</span> <span
  m='1824140'>Does</span> <span m='1824360'>my</span> <span
  m='1824510'>graph</span> <span m='1824870'>have</span> <span
  m='1825130'>any</span> <span m='1825410'>cycles?</span> <span
  m='1826760'>In</span> <span m='1826880'>the</span> <span
  m='1826980'>directed</span> <span m='1827400'>case,</span> <span
  m='1827655'>this</span> <span m='1827782'>is</span> <span
  m='1827910'>particularly</span> <span m='1829480'>interesting.</span> <span
  m='1829890'>I</span> <span m='1829920'>want</span> <span m='1830090'>to</span>
  <span m='1830150'>know,</span> <span m='1830260'>does</span> <span
  m='1830520'>a</span> <span m='1830580'>graph</span> <span
  m='1830810'>have</span> <span m='1831040'>any</span> <span
  m='1831330'>directed</span> <span m='1831930'>cycles?</span> <span
  m='1833390'>And</span> <span m='1833550'>another</span> <span
  m='1833840'>problem</span> <span m='1834160'>called</span> <span
  m='1834360'>topological</span> <span m='1835000'>sort,</span> <span
  m='1835360'>which</span> <span m='1835590'>we</span> <span
  m='1835730'>will</span> <span m='1835900'>get</span> <span
  m='1836130'>to.</span> <span m='1841500'>So</span> <span
  m='1841710'>let's</span> <span m='1841930'>start</span> <span
  m='1842250'>with</span> <span m='1843120'>cycle</span> <span
  m='1843490'>detection.</span> <span m='1845360'>This</span> <span
  m='1845380'>is</span> <span m='1845510'>actually</span> <span
  m='1845800'>a</span> <span m='1845880'>warmup</span> <span
  m='1847040'>for</span> <span m='1847700'>topological</span> <span
  m='1848480'>sort.</span> <span m='1852760'>So</span> <span
  m='1852880'>does</span> <span m='1853260'>my</span> <span
  m='1853420'>graph</span> <span m='1853750'>have</span> <span
  m='1854020'>any</span> <span m='1854220'>cycles?</span> <span
  m='1855680'>G</span> <span m='1857070'>has</span> <span m='1857630'>a</span>
  <span m='1857930'>cycle,</span> <span m='1859490'>I</span> <span
  m='1859750'>claim.</span> <span m='1860600'>This</span> <span
  m='1860770'>happens,</span> <span m='1861250'>if</span> <span
  m='1861440'>and</span> <span m='1861540'>only</span> <span
  m='1861830'>if,</span> <span m='1862860'>G</span> <span m='1863310'>has</span>
  <span m='1864240'>a</span> <span m='1864440'>back</span> <span
  m='1864860'>edge,</span> <span m='1868790'>or</span> <span
  m='1869000'>let's</span> <span m='1869220'>say,</span> <span
  m='1870660'>a</span> <span m='1870780'>depth-first</span> <span
  m='1871310'>search</span> <span m='1871640'>of</span> <span
  m='1871740'>that</span> <span m='1872090'>graph</span> <span
  m='1873240'>has</span> <span m='1873540'>a</span> <span
  m='1873610'>back</span> <span m='1873775'>edge.</span> <span
  m='1877250'>So</span> <span m='1877380'>it</span> <span
  m='1877440'>doesn't</span> <span m='1877720'>matter</span> <span
  m='1878580'>where</span> <span m='1878910'>I</span> <span
  m='1878990'>start</span> <span m='1879380'>from</span> <span
  m='1879840'>or</span> <span m='1880120'>how</span> <span
  m='1880550'>this</span> <span m='1880750'>algorithm--</span> <span
  m='1881190'>I</span> <span m='1881300'>run</span> <span
  m='1881590'>this</span> <span m='1881840'>top</span> <span
  m='1882130'>level</span> <span m='1882350'>DFS</span> <span
  m='1882790'>algorithm,</span> <span m='1883160'>explore</span> <span
  m='1883510'>the</span> <span m='1883590'>whole</span> <span
  m='1883820'>graph,</span> <span m='1884140'>because</span> <span
  m='1884330'>I</span> <span m='1884360'>want</span> <span m='1884530'>to</span>
  <span m='1884570'>know</span> <span m='1884850'>in</span> <span
  m='1885110'>the</span> <span m='1885250'>whole</span> <span
  m='1885470'>graph</span> <span m='1885730'>is</span> <span
  m='1885930'>there</span> <span m='1886040'>a</span> <span
  m='1886100'>cycle?</span> <span m='1886970'>I</span> <span
  m='1887090'>claim,</span> <span m='1887490'>if</span> <span
  m='1887660'>there's</span> <span m='1887820'>a</span> <span
  m='1887860'>back</span> <span m='1888150'>edge,</span> <span
  m='1888770'>then</span> <span m='1888920'>there's</span> <span
  m='1889070'>a</span> <span m='1889130'>cycle.</span> </p><p><span
  m='1893030'>So</span> <span m='1893260'>it</span> <span m='1893310'>all</span>
  <span m='1893590'>comes</span> <span m='1893960'>down</span> <span
  m='1894270'>to</span> <span m='1895140'>back</span> <span
  m='1895430'>edges.</span> <span m='1895880'>This</span> <span
  m='1896040'>will</span> <span m='1896150'>work</span> <span
  m='1896340'>for</span> <span m='1896440'>both</span> <span
  m='1896640'>directed</span> <span m='1896860'>and</span> <span
  m='1897080'>undirected</span> <span m='1897590'>graphs.</span> <span
  m='1898020'>Detecting</span> <span m='1898460'>cycles</span> <span
  m='1898890'>is</span> <span m='1899040'>pretty</span> <span
  m='1899190'>easy</span> <span m='1899560'>in</span> <span
  m='1899690'>undirected</span> <span m='1900190'>graphs.</span> <span
  m='1901070'>It's</span> <span m='1901200'>a</span> <span
  m='1901260'>little</span> <span m='1901480'>more</span> <span
  m='1901650'>subtle</span> <span m='1902030'>with</span> <span
  m='1902480'>directed</span> <span m='1902870'>graphs,</span> <span
  m='1903370'>because</span> <span m='1903560'>you</span> <span
  m='1903650'>have</span> <span m='1903760'>to</span> <span
  m='1903850'>worry</span> <span m='1903990'>about</span> <span
  m='1904230'>the</span> <span m='1904300'>edge</span> <span
  m='1904540'>directions.</span> <span m='1906750'>So</span> <span
  m='1906920'>let's</span> <span m='1907160'>prove</span> <span
  m='1907400'>this.</span> <span m='1909610'>We</span> <span
  m='1909700'>haven't</span> <span m='1909890'>done</span> <span
  m='1910603'>a</span> <span m='1911530'>serious</span> <span
  m='1911970'>proof</span> <span m='1912210'>in</span> <span
  m='1912280'>a</span> <span m='1912440'>while,</span> <span
  m='1912770'>so</span> <span m='1913580'>this</span> <span
  m='1913740'>is</span> <span m='1913970'>still</span> <span
  m='1914090'>a</span> <span m='1914210'>pretty</span> <span
  m='1914430'>easy</span> <span m='1914650'>one,</span> <span
  m='1915280'>let's</span> <span m='1916010'>think</span> <span
  m='1916170'>about</span> <span m='1916430'>it.</span> <span
  m='1917110'>What</span> <span m='1917280'>do</span> <span
  m='1917350'>you</span> <span m='1917420'>think</span> <span
  m='1917590'>is</span> <span m='1917700'>the</span> <span
  m='1917840'>easier</span> <span m='1918300'>direction</span> <span
  m='1918880'>to</span> <span m='1919310'>prove</span> <span
  m='1919600'>here,</span> <span m='1920440'>left</span> <span
  m='1920730'>or</span> <span m='1920840'>right?</span> <span
  m='1922780'>To</span> <span m='1922835'>more</span> <span
  m='1922890'>democracy.</span> <span m='1923720'>How</span> <span
  m='1923900'>many</span> <span m='1924080'>people</span> <span
  m='1924360'>think</span> <span m='1924550'>left</span> <span
  m='1924900'>is</span> <span m='1925010'>easy?</span> <span
  m='1927292'>A</span> <span m='1927770'>couple.</span> <span
  m='1928360'>How</span> <span m='1928460'>many</span> <span
  m='1928610'>people</span> <span m='1928830'>think</span> <span
  m='1929000'>right</span> <span m='1929210'>is</span> <span
  m='1929340'>easy?</span> <span m='1930240'>A</span> <span
  m='1930740'>whole</span> <span m='1930940'>bunch</span> <span
  m='1931210'>more.</span> <span m='1932410'>I</span> <span
  m='1932500'>disagree</span> <span m='1932930'>with</span> <span
  m='1933070'>you.</span> <span m='1934890'>I</span> <span
  m='1935045'>guess</span> <span m='1935200'>it</span> <span
  m='1935380'>depends</span> <span m='1935680'>what</span> <span
  m='1935780'>you</span> <span m='1935870'>consider</span> <span
  m='1936250'>easy.</span> </p><p><span m='1938320'>Let</span> <span
  m='1938450'>me</span> <span m='1938530'>show</span> <span
  m='1938700'>you</span> <span m='1938800'>how</span> <span
  m='1938980'>easy</span> <span m='1939270'>left</span> <span
  m='1939620'>is.</span> <span m='1941210'>Left</span> <span
  m='1941480'>is,</span> <span m='1941930'>I</span> <span
  m='1942070'>have</span> <span m='1942320'>a</span> <span
  m='1942410'>back</span> <span m='1942750'>edge,</span> <span
  m='1943710'>I</span> <span m='1943800'>want</span> <span m='1944000'>to</span>
  <span m='1944060'>claim</span> <span m='1944320'>there's</span> <span
  m='1944490'>a</span> <span m='1944560'>cycle.</span> <span
  m='1945780'>What</span> <span m='1945950'>is</span> <span
  m='1946040'>the</span> <span m='1946120'>back</span> <span
  m='1946420'>edge</span> <span m='1946590'>look</span> <span
  m='1946830'>like?</span> <span m='1947610'>Well,</span> <span
  m='1948260'>it's</span> <span m='1948450'>an</span> <span
  m='1948550'>edge</span> <span m='1951450'>to</span> <span
  m='1951780'>an</span> <span m='1951980'>ancestor</span> <span
  m='1952680'>in</span> <span m='1952760'>the</span> <span
  m='1952860'>tree.</span> <span m='1954050'>If</span> <span
  m='1954190'>this</span> <span m='1954420'>node</span> <span
  m='1954680'>is</span> <span m='1954810'>a</span> <span
  m='1954880'>descendant</span> <span m='1955450'>of</span> <span
  m='1955540'>this</span> <span m='1955650'>node</span> <span
  m='1955796'>and</span> <span m='1955943'>this</span> <span
  m='1956090'>node</span> <span m='1956330'>is</span> <span
  m='1956415'>an</span> <span m='1956500'>ancestor</span> <span
  m='1957210'>of</span> <span m='1957300'>this</span> <span
  m='1957590'>node,</span> <span m='1959560'>that's</span> <span
  m='1959920'>saying</span> <span m='1960310'>there</span> <span
  m='1960560'>are</span> <span m='1960640'>tree</span> <span
  m='1960930'>edges,</span> <span m='1962730'>there's</span> <span
  m='1962860'>a</span> <span m='1962930'>path,</span> <span m='1963480'>a</span>
  <span m='1963580'>tree</span> <span m='1963830'>path,</span> <span
  m='1964210'>that</span> <span m='1964590'>connects</span> <span
  m='1964920'>one</span> <span m='1965110'>to</span> <span
  m='1965210'>the</span> <span m='1965350'>other.</span> <span
  m='1969340'>So</span> <span m='1970670'>these</span> <span
  m='1970815'>are</span> <span m='1970960'>tree</span> <span
  m='1971240'>edges,</span> <span m='1973530'>because</span> <span
  m='1973880'>this</span> <span m='1974160'>is</span> <span
  m='1974410'>supposed</span> <span m='1974680'>to</span> <span
  m='1974730'>be</span> <span m='1974870'>an</span> <span
  m='1975010'>ancestor,</span> <span m='1977910'>and</span> <span
  m='1978150'>this</span> <span m='1978300'>is</span> <span
  m='1978390'>supposed</span> <span m='1978670'>to</span> <span
  m='1978730'>be</span> <span m='1978860'>a</span> <span
  m='1979110'>descendant.</span> <span m='1983670'>And</span> <span
  m='1984630'>that's</span> <span m='1984880'>the</span> <span
  m='1984970'>definition</span> <span m='1985560'>of</span> <span
  m='1985610'>a</span> <span m='1985720'>back</span> <span
  m='1986220'>edge.</span> <span m='1988770'>Do</span> <span
  m='1989280'>you</span> <span m='1989400'>see</span> <span m='1989570'>a</span>
  <span m='1989630'>cycle?</span> <span m='1991540'>I</span> <span
  m='1991630'>see</span> <span m='1991820'>a</span> <span
  m='1991890'>cycle.</span> <span m='1992820'>This</span> <span
  m='1992940'>is</span> <span m='1993100'>a</span> <span
  m='1993170'>cycle,</span> <span m='1995750'>directed</span> <span
  m='1996180'>cycle.</span> <span m='1997550'>So</span> <span
  m='1997740'>if</span> <span m='1997960'>there's</span> <span
  m='1998150'>a</span> <span m='1998200'>back</span> <span
  m='1998510'>edge,</span> <span m='1998790'>by</span> <span
  m='1999000'>definition,</span> <span m='2000000'>it</span> <span
  m='2000160'>makes</span> <span m='2000430'>a</span> <span
  m='2000490'>cycle.</span> <span m='2001970'>Now,</span> <span
  m='2002180'>it's</span> <span m='2002290'>harder</span> <span
  m='2002500'>to</span> <span m='2002600'>say</span> <span m='2003150'>if</span>
  <span m='2003260'>I</span> <span m='2003320'>have</span> <span
  m='2003500'>10</span> <span m='2003750'>back</span> <span
  m='2004010'>edges,</span> <span m='2004290'>how</span> <span
  m='2004470'>many</span> <span m='2004670'>cycles</span> <span
  m='2005040'>are</span> <span m='2005220'>there?</span> <span
  m='2005400'>Could</span> <span m='2005550'>be</span> <span
  m='2005670'>many.</span> <span m='2006560'>But</span> <span
  m='2007880'>if</span> <span m='2008060'>there's</span> <span
  m='2008220'>a</span> <span m='2008270'>back</span> <span
  m='2008530'>edge,</span> <span m='2008710'>there's</span> <span
  m='2008880'>definitely</span> <span m='2009410'>at</span> <span
  m='2009470'>least</span> <span m='2009770'>one</span> <span
  m='2009970'>cycle.</span> </p><p><span m='2014340'>The</span> <span
  m='2014620'>other</span> <span m='2014775'>direction</span> <span
  m='2014930'>is</span> <span m='2015030'>also</span> <span
  m='2015260'>not</span> <span m='2015460'>too</span> <span
  m='2015550'>hard,</span> <span m='2015790'>but</span> <span
  m='2015910'>I</span> <span m='2016010'>would</span> <span
  m='2016360'>hesitate</span> <span m='2016850'>to</span> <span
  m='2016910'>call</span> <span m='2017110'>it</span> <span
  m='2017290'>easy.</span> <span m='2018600'>Any</span> <span
  m='2018800'>suggestions</span> <span m='2019510'>if,</span> <span
  m='2019750'>I</span> <span m='2019860'>know</span> <span
  m='2020160'>there</span> <span m='2020350'>is</span> <span
  m='2020560'>a</span> <span m='2020620'>cycle,</span> <span
  m='2022690'>how</span> <span m='2022930'>do</span> <span m='2023030'>I</span>
  <span m='2023120'>prove</span> <span m='2023430'>that</span> <span
  m='2023540'>there's</span> <span m='2023720'>a</span> <span
  m='2023760'>back</span> <span m='2023985'>edge</span> <span
  m='2024210'>somewhere?</span> <span m='2026910'>Think</span> <span
  m='2027070'>about</span> <span m='2027320'>that,</span> <span
  m='2028150'>let</span> <span m='2028290'>me</span> <span
  m='2028390'>draw</span> <span m='2028575'>a</span> <span
  m='2028760'>cycle.</span> <span m='2051480'>There's</span> <span
  m='2051610'>a</span> <span m='2051679'>length</span> <span
  m='2051949'>k</span> <span m='2052170'>cycle.</span> <span
  m='2056230'>Where</span> <span m='2056389'>do</span> <span
  m='2056449'>you</span> <span m='2056570'>think,</span> <span
  m='2057210'>which</span> <span m='2057360'>of</span> <span
  m='2057420'>these</span> <span m='2057590'>edges</span> <span
  m='2057880'>do</span> <span m='2057945'>you</span> <span
  m='2058010'>think</span> <span m='2058199'>is</span> <span
  m='2058320'>going</span> <span m='2058440'>to</span> <span
  m='2058510'>be</span> <span m='2058620'>a</span> <span m='2058670'>back</span>
  <span m='2058817'>edge?</span> <span m='2059260'>Let's</span> <span
  m='2059429'>hope</span> <span m='2059780'>it's</span> <span
  m='2060130'>one</span> <span m='2060310'>of</span> <span
  m='2060380'>these</span> <span m='2060580'>edges.</span> <span
  m='2063350'>Sorry?</span> </p><p><span m='2064190'>AUDIENCE: Vk</span> <span
  m='2064292'>to</span> <span m='2064395'>v</span> <span
  m='2064497'>zero.</span> </p><p><span m='2065420'>PROFESSOR: Vk</span> <span
  m='2065719'>to</span> <span m='2065800'>v</span> <span
  m='2065920'>zero.</span> <span m='2066560'>That's</span> <span
  m='2066739'>a</span> <span m='2066780'>good</span> <span
  m='2067010'>idea,</span> <span m='2068949'>maybe</span> <span
  m='2069199'>this</span> <span m='2069370'>is</span> <span m='2069489'>a</span>
  <span m='2069550'>back</span> <span m='2069840'>edge.</span> <span
  m='2071000'>Of</span> <span m='2071170'>course,</span> <span
  m='2071500'>this</span> <span m='2071670'>is</span> <span
  m='2071880'>symmetric,</span> <span m='2072659'>why</span> <span
  m='2072850'>that</span> <span m='2073110'>edge?</span> <span
  m='2074670'>I</span> <span m='2074780'>labeled</span> <span
  m='2075199'>it</span> <span m='2075290'>in</span> <span m='2075335'>a</span>
  <span m='2075380'>suggestive</span> <span m='2076050'>way,</span> <span
  m='2076780'>but</span> <span m='2077219'>I</span> <span
  m='2077320'>need</span> <span m='2077510'>to</span> <span
  m='2077580'>say</span> <span m='2077770'>something</span> <span
  m='2078190'>before</span> <span m='2078469'>I</span> <span
  m='2078500'>know</span> <span m='2078800'>actually</span> <span
  m='2079130'>which</span> <span m='2079389'>edge</span> <span
  m='2079564'>is</span> <span m='2079739'>going</span> <span
  m='2079880'>to</span> <span m='2079940'>be</span> <span m='2080980'>the</span>
  <span m='2081070'>back</span> <span m='2081380'>edge.</span> </p><p><span
  m='2082606'>AUDIENCE: You have to say you</span> <span
  m='2083034'>start</span> <span m='2083141'>to</span> <span
  m='2083248'>v</span> <span m='2083355'>zero?</span> </p><p><span
  m='2084320'>PROFESSOR: Start</span> <span m='2084644'>at</span> <span
  m='2084969'>v</span> <span m='2085120'>zero.</span> <span
  m='2085850'>If</span> <span m='2085989'>I</span> <span
  m='2086060'>started</span> <span m='2086540'>a</span> <span
  m='2086600'>search</span> <span m='2086980'>of</span> <span
  m='2087070'>v</span> <span m='2087219'>zero,</span> <span
  m='2088260'>that</span> <span m='2088460'>looks</span> <span
  m='2088699'>good,</span> <span m='2088920'>because</span> <span
  m='2089300'>the</span> <span m='2089389'>search</span> <span
  m='2089750'>is</span> <span m='2089839'>kind</span> <span
  m='2089929'>of</span> <span m='2090010'>going</span> <span
  m='2090139'>to</span> <span m='2090199'>go</span> <span m='2090420'>in</span>
  <span m='2090510'>this</span> <span m='2090670'>direction.</span> <span
  m='2091719'>vk</span> <span m='2092100'>will</span> <span
  m='2092239'>maybe</span> <span m='2092570'>be</span> <span
  m='2092699'>the</span> <span m='2092810'>last</span> <span
  m='2093179'>thing</span> <span m='2093350'>to</span> <span
  m='2093429'>be</span> <span m='2093570'>visited,</span> <span
  m='2093949'>that's</span> <span m='2094139'>not</span> <span
  m='2094300'>actually</span> <span m='2094620'>true.</span> <span
  m='2095480'>Could</span> <span m='2095650'>be</span> <span
  m='2095770'>there's</span> <span m='2095940'>an</span> <span
  m='2096095'>edge</span> <span m='2096250'>directly</span> <span
  m='2096730'>from</span> <span m='2096929'>v</span> <span
  m='2097029'>zero</span> <span m='2097129'>to</span> <span
  m='2097230'>vk,</span> <span m='2097710'>but</span> <span
  m='2097880'>intuitively</span> <span m='2098420'>vk</span> <span
  m='2098770'>will</span> <span m='2098880'>kind</span> <span
  m='2099025'>of</span> <span m='2099240'>later,</span> <span
  m='2100700'>and</span> <span m='2100880'>then</span> <span
  m='2101120'>when</span> <span m='2101260'>this</span> <span
  m='2101430'>edge</span> <span m='2101670'>gets</span> <span
  m='2101790'>visited,</span> <span m='2102470'>this</span> <span
  m='2102552'>will</span> <span m='2102635'>be</span> <span
  m='2102717'>an</span> <span m='2102800'>ancestor</span> <span
  m='2103160'>and</span> <span m='2103280'>it</span> <span
  m='2103400'>will</span> <span m='2103520'>be</span> <span m='2103640'>a</span>
  <span m='2103700'>back</span> <span m='2103860'>edge.</span> <span
  m='2105350'>Of</span> <span m='2105440'>course,</span> <span
  m='2106570'>we</span> <span m='2106840'>may</span> <span
  m='2106980'>not</span> <span m='2107220'>start</span> <span
  m='2107570'>a</span> <span m='2107630'>search</span> <span
  m='2108150'>here,</span> <span m='2110270'>so</span> <span
  m='2110610'>calling</span> <span m='2110950'>it</span> <span
  m='2111190'>the</span> <span m='2111280'>start</span> <span
  m='2111780'>of</span> <span m='2111830'>the</span> <span
  m='2111910'>search</span> <span m='2112240'>is</span> <span
  m='2112375'>not</span> <span m='2112510'>quite</span> <span
  m='2112770'>right,</span> <span m='2112960'>a</span> <span
  m='2113960'>little</span> <span m='2114180'>different.</span> </p><p><span
  m='2116079'>AUDIENCE: First</span> <span m='2116305'>vertex</span> <span
  m='2116532'>that</span> <span m='2116683'>gets</span> <span
  m='2116834'>hit</span> <span m='2116985'>[INAUDIBLE].</span> </p><p><span
  m='2118800'>PROFESSOR: First</span> <span m='2119170'>vertex</span> <span
  m='2119580'>that</span> <span m='2119660'>gets</span> <span
  m='2119860'>hit,</span> <span m='2120100'>good.</span> <span
  m='2121550'>I'm</span> <span m='2121720'>going</span> <span
  m='2121910'>to</span> <span m='2122060'>start</span> <span
  m='2122370'>the</span> <span m='2122460'>numbering ,</span> <span
  m='2123310'>v</span> <span m='2123430'>zero,</span> <span
  m='2124820'>let's</span> <span m='2124952'>assume</span> <span
  m='2127420'>v</span> <span m='2127570'>0</span> <span m='2128550'>is</span>
  <span m='2128830'>the</span> <span m='2129090'>first</span> <span
  m='2129730'>vertex</span> <span m='2130240'>in</span> <span
  m='2130380'>the</span> <span m='2130450'>cycle,</span> <span
  m='2138460'>visited</span> <span m='2138940'>by</span> <span
  m='2139110'>the</span> <span m='2139200'>depth-first</span> <span
  m='2139610'>search.</span> <span m='2147100'>Together,</span> <span
  m='2148442'>if</span> <span m='2148561'>you</span> <span
  m='2148680'>want</span> <span m='2148800'>some</span> <span
  m='2149890'>pillows</span> <span m='2150030'>if</span> <span
  m='2150170'>you</span> <span m='2150450'>like</span> <span
  m='2150680'>them,</span> <span m='2154060'>especially</span> <span
  m='2154460'>convenient</span> <span m='2154930'>that</span> <span
  m='2155005'>they're</span> <span m='2155080'>in</span> <span
  m='2155170'>front.</span> <span m='2156640'>So</span> <span
  m='2157980'>right,</span> <span m='2158150'>if</span> <span
  m='2158280'>it's</span> <span m='2158470'>not</span> <span
  m='2158650'>v</span> <span m='2158740'>zero,</span> <span
  m='2158960'>say</span> <span m='2159130'>v3</span> <span
  m='2159590'>was</span> <span m='2159720'>the</span> <span
  m='2159820'>first</span> <span m='2160000'>one</span> <span
  m='2160180'>visited.</span> <span m='2160470'>We</span> <span
  m='2160520'>will</span> <span m='2160640'>just</span> <span
  m='2160860'>change</span> <span m='2161110'>the</span> <span
  m='2161200'>labeling,</span> <span m='2161700'>so</span> <span
  m='2162040'>that's</span> <span m='2162310'>v</span> <span
  m='2162440'>zero,</span> <span m='2162740'>that's</span> <span
  m='2162950'>v1,</span> <span m='2163120'>that's</span> <span
  m='2163520'>v,</span> <span m='2164120'>and</span> <span m='2164260'>so</span>
  <span m='2164380'>on.</span> <span m='2166260'>So</span> <span
  m='2166870'>set</span> <span m='2167130'>this</span> <span
  m='2167290'>labeling,</span> <span m='2167810'>so</span> <span
  m='2167970'>that</span> <span m='2168220'>v0</span> <span
  m='2168520'>first</span> <span m='2168960'>one,</span> <span
  m='2169340'>first</span> <span m='2169600'>vertex</span> <span
  m='2170010'>that</span> <span m='2170090'>gets</span> <span
  m='2170310'>visited.</span> <span m='2172430'>Then,</span> <span
  m='2173590'>I</span> <span m='2173750'>claim</span> <span
  m='2175630'>that--</span> <span m='2177050'>let</span> <span
  m='2177160'>me</span> <span m='2177270'>just</span> <span
  m='2177390'>write</span> <span m='2177510'>the</span> <span
  m='2177570'>claim</span> <span m='2177880'>first.</span> <span
  m='2180230'>This</span> <span m='2180460'>edge</span> <span
  m='2180970'>vkv0</span> <span m='2182400'>will</span> <span
  m='2182630'>be</span> <span m='2182780'>a</span> <span m='2182840'>back</span>
  <span m='2183160'>edge.</span> <span m='2186350'>We'll</span> <span
  m='2186415'>just</span> <span m='2186480'>say,</span> <span
  m='2186850'>is</span> <span m='2187788'>back</span> <span
  m='2188276'>edge.</span> <span m='2189252'>And</span> <span
  m='2189740'>I</span> <span m='2189810'>would</span> <span
  m='2189950'>say</span> <span m='2190070'>this</span> <span
  m='2190270'>is</span> <span m='2190330'>not</span> <span
  m='2190540'>obvious,</span> <span m='2191615'>be</span> <span
  m='2192080'>a</span> <span m='2192100'>little</span> <span
  m='2192340'>careful.</span> </p><p><span m='2210420'>We</span> <span
  m='2210430'>have</span> <span m='2210580'>to</span> <span
  m='2210680'>somehow</span> <span m='2210920'>exploit</span> <span
  m='2211820'>the</span> <span m='2211960'>depth-first</span> <span
  m='2212680'>nature</span> <span m='2213160'>of</span> <span
  m='2213660'>DFS,</span> <span m='2214460'>the</span> <span
  m='2214920'>fact</span> <span m='2215190'>that</span> <span
  m='2215245'>it</span> <span m='2215300'>goes</span> <span
  m='2216070'>deep--</span> <span m='2216730'>it</span> <span
  m='2216910'>goes</span> <span m='2217090'>as</span> <span
  m='2217250'>deep</span> <span m='2217470'>as</span> <span
  m='2217570'>it</span> <span m='2217660'>can</span> <span
  m='2218300'>before</span> <span m='2218820'>backtracking.</span> <span
  m='2220396'>If</span> <span m='2220790'>you</span> <span
  m='2220960'>think</span> <span m='2221140'>about</span> <span
  m='2221360'>it,</span> <span m='2221420'>we're</span> <span
  m='2221520'>starting,</span> <span m='2222820'>at</span> <span
  m='2222990'>this</span> <span m='2223160'>point</span> <span
  m='2223350'>we</span> <span m='2223460'>are</span> <span
  m='2223540'>starting</span> <span m='2223940'>a</span> <span
  m='2224020'>search</span> <span m='2224580'>relative</span> <span
  m='2224875'>to</span> <span m='2225170'>this</span> <span
  m='2225330'>cycle.</span> <span m='2225690'>No</span> <span
  m='2225940'>one</span> <span m='2226090'>has</span> <span
  m='2226250'>been</span> <span m='2226410'>visited,</span> <span
  m='2227520'>except</span> <span m='2227860'>v</span> <span
  m='2227940'>zero</span> <span m='2228310'>just</span> <span
  m='2228550'>got</span> <span m='2228710'>visited,</span> <span
  m='2229120'>has</span> <span m='2229300'>a</span> <span
  m='2229390'>parent</span> <span m='2229690'>pointer</span> <span
  m='2229920'>off</span> <span m='2230150'>somewhere</span> <span
  m='2230510'>else.</span> </p><p><span m='2235990'>What</span> <span
  m='2236190'>do</span> <span m='2236280'>we</span> <span m='2236410'>do</span>
  <span m='2236580'>next?</span> <span m='2236880'>Well,</span> <span
  m='2236970'>we</span> <span m='2237280'>visit</span> <span
  m='2237560'>all</span> <span m='2237770'>the</span> <span
  m='2237920'>outgoing</span> <span m='2238340'>edges</span> <span
  m='2238610'>from</span> <span m='2238740'>v</span> <span
  m='2239030'>zero,</span> <span m='2239320'>there</span> <span
  m='2239440'>might</span> <span m='2239650'>be</span> <span
  m='2239770'>many</span> <span m='2240030'>of</span> <span
  m='2240090'>them.</span> <span m='2240420'>it</span> <span
  m='2240700'>could</span> <span m='2240850'>be</span> <span
  m='2240970'>edge</span> <span m='2241145'>from</span> <span
  m='2241320'>v</span> <span m='2241730'>zero</span> <span m='2241875'>to</span>
  <span m='2242020'>v1,</span> <span m='2242280'>it</span> <span
  m='2242540'>could</span> <span m='2242650'>an</span> <span
  m='2242780'>edge</span> <span m='2242970'>from</span> <span
  m='2243160'>v</span> <span m='2243320'>zero</span> <span m='2243480'>to</span>
  <span m='2243540'>v3,</span> <span m='2243720'>it</span> <span
  m='2244050'>could</span> <span m='2244170'>be</span> <span
  m='2244370'>an</span> <span m='2244440'>edge</span> <span
  m='2244740'>from</span> <span m='2244870'>v</span> <span
  m='2245010'>zero</span> <span m='2245430'>to</span> <span
  m='2245830'>something</span> <span m='2246230'>else.</span> <span
  m='2248750'>We</span> <span m='2248920'>don't</span> <span
  m='2249100'>know</span> <span m='2249270'>which</span> <span
  m='2249450'>one's</span> <span m='2249630'>going</span> <span
  m='2249730'>to</span> <span m='2249780'>happen</span> <span
  m='2250130'>first.</span> <span m='2251980'>But</span> <span
  m='2252170'>the</span> <span m='2252290'>one</span> <span
  m='2252490'>thing</span> <span m='2252740'>I</span> <span
  m='2252820'>can</span> <span m='2253030'>claim</span> <span
  m='2255590'>is</span> <span m='2255830'>that</span> <span
  m='2258180'>v1</span> <span m='2259760'>will</span> <span
  m='2260010'>be</span> <span m='2260160'>visited</span> <span
  m='2263120'>before</span> <span m='2264920'>we</span> <span
  m='2265070'>finish</span> <span m='2265600'>visiting</span> <span
  m='2266060'>v</span> <span m='2266230'>zero.</span> <span
  m='2272180'>From</span> <span m='2272400'>v</span> <span
  m='2272570'>zero,</span> <span m='2272810'>we</span> <span
  m='2272910'>might</span> <span m='2273090'>go</span> <span
  m='2273180'>somewhere</span> <span m='2273520'>else,</span> <span
  m='2273790'>we</span> <span m='2273883'>might</span> <span
  m='2273976'>go</span> <span m='2274070'>somewhere</span> <span
  m='2274330'>else</span> <span m='2274550'>that</span> <span
  m='2274640'>might</span> <span m='2274810'>eventually</span> <span
  m='2275240'>lead</span> <span m='2275420'>to</span> <span
  m='2275480'>v1</span> <span m='2275910'>by</span> <span
  m='2276030'>some</span> <span m='2276270'>other</span> <span
  m='2276480'>route,</span> <span m='2277070'>but</span> <span
  m='2277280'>in</span> <span m='2277410'>particular,</span> <span
  m='2277990'>we</span> <span m='2278130'>look</span> <span
  m='2278410'>at</span> <span m='2278510'>that</span> <span
  m='2278700'>edge</span> <span m='2278910'>from</span> <span
  m='2278965'>v</span> <span m='2279020'>zero</span> <span m='2279500'>to</span>
  <span m='2279580'>v1.</span> <span m='2281440'>And</span> <span
  m='2281630'>so,</span> <span m='2281720'>at</span> <span
  m='2281870'>some</span> <span m='2282160'>point,</span> <span
  m='2283060'>we're</span> <span m='2283220'>searching,</span> <span
  m='2283730'>we're</span> <span m='2283880'>visiting</span> <span
  m='2284250'>all</span> <span m='2284610'>the</span> <span
  m='2284730'>things</span> <span m='2284960'>reachable</span> <span
  m='2285330'>from</span> <span m='2285400'>v</span> <span
  m='2285470'>zero,</span> <span m='2286390'>that</span> <span
  m='2286580'>includes</span> <span m='2287010'>v1,</span> <span
  m='2288730'>and</span> <span m='2288890'>that</span> <span
  m='2289110'>will</span> <span m='2289250'>happen,</span> <span
  m='2289830'>we</span> <span m='2290010'>will</span> <span
  m='2290160'>touch</span> <span m='2290440'>v1</span> <span
  m='2291320'>for</span> <span m='2291420'>the</span> <span
  m='2291530'>first</span> <span m='2291790'>time,</span> <span
  m='2291950'>because</span> <span m='2292100'>it</span> <span
  m='2292160'>hasn't</span> <span m='2292390'>been</span> <span
  m='2292520'>touched</span> <span m='2292820'>yet.</span> <span
  m='2293800'>We</span> <span m='2293930'>will</span> <span
  m='2294110'>visit</span> <span m='2294390'>it</span> <span
  m='2294980'>before</span> <span m='2295380'>we</span> <span
  m='2295520'>finish</span> <span m='2296020'>visiting</span> <span
  m='2296500'>v</span> <span m='2296670'>zero.</span> </p><p><span
  m='2297932'>The</span> <span m='2298340'>same</span> <span
  m='2298690'>goes</span> <span m='2298990'>actually</span> <span
  m='2299350'>for</span> <span m='2299580'>all</span> <span
  m='2299920'>of</span> <span m='2300000'>v</span> <span m='2300190'>i's,</span>
  <span m='2301020'>because</span> <span m='2301250'>they're</span> <span
  m='2301380'>all</span> <span m='2301660'>reachable</span> <span
  m='2302070'>from</span> <span m='2302165'>v</span> <span
  m='2302260'>zero.</span> <span m='2303510'>You</span> <span
  m='2303593'>can</span> <span m='2303676'>prove</span> <span
  m='2303910'>this</span> <span m='2304090'>by</span> <span
  m='2304230'>induction.</span> <span m='2305760'>You'll</span> <span
  m='2305860'>have</span> <span m='2306090'>to</span> <span
  m='2306190'>visit</span> <span m='2306470'>v1</span> <span
  m='2307240'>before</span> <span m='2307550'>you</span> <span
  m='2307620'>finish</span> <span m='2307900'>visiting</span> <span
  m='2308230'>v</span> <span m='2308370'>zero.</span> <span
  m='2309860'>You'll</span> <span m='2310010'>have</span> <span
  m='2310230'>to</span> <span m='2310330'>visit</span> <span
  m='2310780'>v2</span> <span m='2311470'>before</span> <span
  m='2311750'>you</span> <span m='2311820'>finish</span> <span
  m='2312120'>visiting</span> <span m='2312480'>v1,</span> <span
  m='2312910'>although</span> <span m='2313040'>you</span> <span
  m='2313080'>might</span> <span m='2313380'>actually</span> <span
  m='2313610'>visit</span> <span m='2313840'>v2</span> <span
  m='2314200'>before</span> <span m='2314600'>v1.</span> <span
  m='2315750'>You</span> <span m='2315815'>would</span> <span
  m='2315880'>definitely</span> <span m='2316290'>finish,</span> <span
  m='2316900'>you'll</span> <span m='2317050'>finished</span> <span
  m='2317450'>v2</span> <span m='2317820'>before</span> <span
  m='2318280'>you</span> <span m='2318380'>finish</span> <span
  m='2318740'>v1,</span> <span m='2320110'>and</span> <span
  m='2320270'>so</span> <span m='2320410'>on.</span> <span m='2321880'>So</span>
  <span m='2322320'>vi</span> <span m='2324300'>will</span> <span
  m='2324600'>be</span> <span m='2324800'>visited</span> <span
  m='2325220'>before</span> <span m='2325590'>you</span> <span
  m='2325700'>finish</span> <span m='2326210'>vi</span> <span
  m='2326570'>minus</span> <span m='2326900'>1,</span> <span
  m='2327660'>but</span> <span m='2327790'>in</span> <span
  m='2327890'>particular,</span> <span m='2328470'>what</span> <span
  m='2328570'>we</span> <span m='2328670'>care</span> <span
  m='2328750'>about</span> <span m='2328960'>is</span> <span
  m='2329090'>that</span> <span m='2329150'>vk</span> <span
  m='2330520'>is</span> <span m='2330840'>visited</span> <span
  m='2332570'>before</span> <span m='2335140'>we</span> <span
  m='2335240'>finish</span> <span m='2337920'>v</span> <span
  m='2338300'>zero.</span> <span m='2342040'>And</span> <span
  m='2342310'>it</span> <span m='2342360'>will</span> <span
  m='2342500'>be</span> <span m='2342670'>entirely</span> <span
  m='2343290'>visited.</span> <span m='2343670'>We</span> <span
  m='2343770'>will</span> <span m='2343900'>finish</span> <span
  m='2344360'>visiting</span> <span m='2344740'>vk</span> <span
  m='2345130'>before</span> <span m='2345770'>we</span> <span
  m='2345930'>finish</span> <span m='2346730'>visiting</span> <span
  m='2347120'>v</span> <span m='2347250'>zero.</span> <span
  m='2347570'>We</span> <span m='2347650'>will</span> <span
  m='2347800'>start</span> <span m='2348190'>decay</span> <span
  m='2348460'>vk</span> <span m='2348730'>after</span> <span
  m='2349200'>we</span> <span m='2349350'>start</span> <span
  m='2349740'>to</span> <span m='2349780'>v</span> <span
  m='2349930'>zero,</span> <span m='2350280'>because</span> <span
  m='2350580'>v</span> <span m='2350780'>zero</span> <span m='2350880'>is</span>
  <span m='2351010'>first.</span> <span m='2352330'>So</span> <span
  m='2352910'>the</span> <span m='2353150'>order</span> <span
  m='2353410'>is</span> <span m='2353510'>going</span> <span
  m='2353630'>to</span> <span m='2353720'>look</span> <span
  m='2353910'>like,</span> <span m='2354600'>start</span> <span
  m='2354990'>v</span> <span m='2355170'>zero,</span> <span
  m='2356580'>at</span> <span m='2356700'>some</span> <span
  m='2356880'>point</span> <span m='2357480'>we</span> <span
  m='2357600'>will</span> <span m='2357760'>start</span> <span
  m='2359180'>vk.</span> <span m='2360940'>Then</span> <span
  m='2361210'>we'll</span> <span m='2361370'>finish</span> <span
  m='2361740'>vk,</span> <span m='2365630'>then</span> <span
  m='2365750'>we'll</span> <span m='2365880'>finish</span> <span
  m='2366240'>v</span> <span m='2366420'>zero.</span> </p><p><span
  m='2367950'>This</span> <span m='2368130'>is</span> <span
  m='2368230'>something</span> <span m='2368560'>the</span> <span
  m='2368660'>textbook</span> <span m='2369070'>likes</span> <span
  m='2369250'>to</span> <span m='2369340'>call,</span> <span
  m='2370340'>and</span> <span m='2370500'>I</span> <span
  m='2370550'>like</span> <span m='2370730'>to</span> <span
  m='2370820'>call,</span> <span m='2371350'>balanced</span> <span
  m='2371700'>parentheses.</span> <span m='2373200'>You</span> <span
  m='2373320'>can</span> <span m='2373470'>think</span> <span
  m='2373640'>of</span> <span m='2373730'>it</span> <span m='2373790'>as,</span>
  <span m='2373930'>we</span> <span m='2374050'>start</span> <span
  m='2374870'>v</span> <span m='2374990'>zero,</span> <span
  m='2376680'>then</span> <span m='2376870'>we</span> <span
  m='2376980'>start</span> <span m='2377215'>vk,</span> <span
  m='2378690'>then</span> <span m='2378890'>we</span> <span
  m='2379030'>finish</span> <span m='2379520'>vk,</span> <span
  m='2380270'>then</span> <span m='2380430'>we</span> <span
  m='2380690'>finish</span> <span m='2381660'>v</span> <span
  m='2381800'>zero.</span> <span m='2382390'>And</span> <span
  m='2382530'>these</span> <span m='2382900'>match</span> <span
  m='2383230'>up</span> <span m='2383580'>and</span> <span
  m='2383780'>their</span> <span m='2383880'>balanced.</span> <span
  m='2387230'>Depth-first</span> <span m='2387560'>search</span> <span
  m='2388000'>always</span> <span m='2388110'>looks</span> <span
  m='2388330'>like</span> <span m='2388500'>that,</span> <span
  m='2388720'>because</span> <span m='2389010'>once</span> <span
  m='2389190'>you</span> <span m='2389270'>start</span> <span
  m='2389510'>a</span> <span m='2389550'>vertex,</span> <span
  m='2390510'>you</span> <span m='2390630'>keep</span> <span
  m='2390860'>chugging</span> <span m='2391640'>until</span> <span
  m='2391750'>you</span> <span m='2391840'>visited</span> <span
  m='2392190'>all</span> <span m='2392320'>the</span> <span
  m='2392450'>things</span> <span m='2392680'>reachable</span> <span
  m='2393060'>from</span> <span m='2393300'>it.</span> <span
  m='2394460'>Then</span> <span m='2394580'>you</span> <span
  m='2394680'>finish</span> <span m='2395020'>it.</span> <span
  m='2395500'>You</span> <span m='2395650'>won't</span> <span
  m='2395900'>finish</span> <span m='2396170'>v</span> <span
  m='2396410'>zero</span> <span m='2396580'>before</span> <span
  m='2396860'>you</span> <span m='2396920'>finish</span> <span
  m='2397200'>vk,</span> <span m='2397560'>because</span> <span
  m='2397750'>it's</span> <span m='2397870'>part</span> <span
  m='2398110'>of</span> <span m='2398170'>the</span> <span
  m='2398260'>recursion.</span> <span m='2400220'>You</span> <span
  m='2400300'>can't</span> <span m='2400510'>return</span> <span
  m='2400850'>at</span> <span m='2400910'>a</span> <span
  m='2400970'>higher</span> <span m='2401220'>level</span> <span
  m='2401530'>before</span> <span m='2401690'>you</span> <span
  m='2401840'>return</span> <span m='2402130'>at</span> <span
  m='2402190'>the</span> <span m='2402340'>lower</span> <span
  m='2402590'>levels.</span> </p><p><span m='2405010'>So</span> <span
  m='2405400'>we've</span> <span m='2405530'>just</span> <span
  m='2405710'>argued</span> <span m='2406010'>that</span> <span
  m='2406120'>the</span> <span m='2406250'>order</span> <span
  m='2406400'>is</span> <span m='2406550'>like</span> <span
  m='2406700'>this,</span> <span m='2406870'>because</span> <span
  m='2407020'>v</span> <span m='2407230'>zero</span> <span
  m='2407340'>was</span> <span m='2407500'>first,</span> <span
  m='2407890'>so</span> <span m='2408140'>vk</span> <span
  m='2408680'>starts</span> <span m='2409050'>after</span> <span
  m='2409330'>v</span> <span m='2409440'>zero,</span> <span
  m='2410050'>and</span> <span m='2410220'>also</span> <span
  m='2410500'>we're</span> <span m='2410600'>going</span> <span
  m='2410700'>to</span> <span m='2410750'>finish</span> <span
  m='2411090'>vk</span> <span m='2411600'>before</span> <span
  m='2411930'>we</span> <span m='2412060'>finish</span> <span
  m='2412340'>v</span> <span m='2412480'>zero,</span> <span
  m='2412740'>because</span> <span m='2412950'>it's</span> <span
  m='2413100'>reachable,</span> <span m='2414100'>and</span> <span
  m='2414280'>hasn't</span> <span m='2414550'>been</span> <span
  m='2414700'>visited</span> <span m='2415020'>before.</span> <span
  m='2417000'>So,</span> <span m='2418510'>in</span> <span
  m='2418670'>here,</span> <span m='2419980'>we</span> <span
  m='2420200'>consider</span> <span m='2424230'>vkv</span> <span
  m='2424715'>zero.</span> <span m='2428000'>When</span> <span
  m='2428150'>we</span> <span m='2428250'>consider</span> <span
  m='2428670'>that</span> <span m='2428890'>edge,</span> <span
  m='2430290'>it</span> <span m='2430450'>will</span> <span
  m='2430600'>be</span> <span m='2431140'>a</span> <span m='2431500'>back</span>
  <span m='2431920'>edge.</span> <span m='2434750'>Why?</span> <span
  m='2435710'>Because</span> <span m='2436730'>v</span> <span
  m='2436910'>zero</span> <span m='2437090'>is</span> <span
  m='2437380'>currently</span> <span m='2437760'>on</span> <span
  m='2437850'>the</span> <span m='2437920'>recursion</span> <span
  m='2438330'>stack,</span> <span m='2439640'>and</span> <span
  m='2439810'>so</span> <span m='2440060'>you</span> <span
  m='2440240'>will</span> <span m='2440410'>have</span> <span
  m='2440580'>marked</span> <span m='2440930'>v</span> <span
  m='2441110'>zero</span> <span m='2441310'>as</span> <span
  m='2441510'>currently</span> <span m='2441900'>in</span> <span
  m='2442010'>process.</span> <span m='2442760'>So</span> <span
  m='2442970'>when</span> <span m='2443060'>you</span> <span
  m='2443200'>look</span> <span m='2443360'>at</span> <span
  m='2443430'>that</span> <span m='2443590'>edge,</span> <span
  m='2443810'>you</span> <span m='2443910'>see</span> <span
  m='2444090'>it's</span> <span m='2444220'>a</span> <span
  m='2444260'>back</span> <span m='2444670'>edge,</span> <span
  m='2444760'>it's</span> <span m='2444850'>an</span> <span
  m='2444940'>edge</span> <span m='2445150'>to</span> <span
  m='2445270'>your</span> <span m='2445410'>ancestor.</span> <span
  m='2447660'>That's</span> <span m='2447890'>the</span> <span
  m='2447970'>proof.</span> <span m='2451700'>Any</span> <span
  m='2451800'>questions</span> <span m='2452170'>about</span> <span
  m='2452380'>that?</span> <span m='2455490'>It's</span> <span
  m='2455580'>pretty</span> <span m='2455800'>easy</span> <span
  m='2456020'>once</span> <span m='2456270'>you</span> <span
  m='2456370'>set</span> <span m='2456580'>up</span> <span
  m='2458620'>the</span> <span m='2458740'>starting</span> <span
  m='2459060'>point,</span> <span m='2459280'>which</span> <span
  m='2459460'>is</span> <span m='2459550'>look</span> <span
  m='2459730'>at</span> <span m='2459810'>the</span> <span
  m='2459890'>first</span> <span m='2460280'>time</span> <span
  m='2460600'>you</span> <span m='2460720'>visit</span> <span
  m='2460970'>the</span> <span m='2461050'>cycle,</span> <span
  m='2461470'>than</span> <span m='2461650'>just</span> <span
  m='2461840'>think</span> <span m='2462000'>about</span> <span
  m='2462150'>how</span> <span m='2462250'>you</span> <span
  m='2462360'>walk</span> <span m='2462590'>around</span> <span
  m='2462830'>the</span> <span m='2462960'>cycle.</span> </p><p><span
  m='2463775'>There's</span> <span m='2464200'>lots</span> <span
  m='2464450'>of</span> <span m='2464500'>ways</span> <span
  m='2464690'>you</span> <span m='2464780'>might</span> <span
  m='2465090'>walk</span> <span m='2465320'>around</span> <span
  m='2465570'>the</span> <span m='2465755'>cycle,</span> <span
  m='2465940'>but</span> <span m='2466255'>it's</span> <span
  m='2466570'>guaranteed</span> <span m='2466860'>you'll</span> <span
  m='2467150'>visit</span> <span m='2467460'>vk</span> <span
  m='2467780'>at</span> <span m='2467980'>some</span> <span
  m='2468170'>point,</span> <span m='2468760'>then</span> <span
  m='2468910'>you'll</span> <span m='2469020'>look</span> <span
  m='2469190'>at</span> <span m='2469250'>the</span> <span
  m='2469390'>edge.</span> <span m='2469630'>v0</span> <span
  m='2470020'>is</span> <span m='2470110'>still</span> <span
  m='2470200'>in</span> <span m='2470290'>the</span> <span
  m='2470400'>stack,</span> <span m='2470870'>so</span> <span
  m='2470930'>it's</span> <span m='2471060'>a</span> <span
  m='2471120'>back</span> <span m='2471272'>edge.</span> <span
  m='2472730'>And</span> <span m='2472960'>so</span> <span
  m='2473070'>this</span> <span m='2473300'>proves</span> <span
  m='2473590'>that</span> <span m='2474010'>having</span> <span
  m='2474310'>a</span> <span m='2474370'>cycle</span> <span
  m='2474575'>is</span> <span m='2474780'>equivalent</span> <span
  m='2475400'>to</span> <span m='2475470'>having</span> <span
  m='2475760'>a</span> <span m='2475820'>back</span> <span
  m='2476100'>edge.</span> <span m='2476260'>This</span> <span
  m='2476450'>gives</span> <span m='2476620'>you</span> <span
  m='2476710'>an</span> <span m='2476780'>easy</span> <span
  m='2477110'>linear</span> <span m='2477400'>time</span> <span
  m='2477670'>algorithm</span> <span m='2478100'>to</span> <span
  m='2478220'>tell,</span> <span m='2478980'>does</span> <span
  m='2479170'>my</span> <span m='2479290'>graph</span> <span
  m='2479550'>have</span> <span m='2479710'>a</span> <span
  m='2479750'>cycle?</span> <span m='2480970'>And</span> <span
  m='2481160'>if</span> <span m='2481260'>it</span> <span
  m='2481360'>does,</span> <span m='2481630'>it's</span> <span
  m='2481760'>actually</span> <span m='2482040'>easy</span> <span
  m='2482210'>to</span> <span m='2482290'>find</span> <span
  m='2482620'>one,</span> <span m='2482860'>because</span> <span
  m='2483120'>we</span> <span m='2483220'>find</span> <span m='2483460'>a</span>
  <span m='2483520'>back</span> <span m='2483820'>edge,</span> <span
  m='2484160'>just</span> <span m='2484430'>follow</span> <span
  m='2484760'>the</span> <span m='2484870'>tree</span> <span
  m='2485120'>edges,</span> <span m='2486280'>and</span> <span
  m='2486360'>you</span> <span m='2486430'>get</span> <span
  m='2486570'>your</span> <span m='2486680'>cycle.</span> <span
  m='2489930'>So</span> <span m='2490150'>if</span> <span
  m='2490200'>someone</span> <span m='2490470'>gives</span> <span
  m='2490610'>you</span> <span m='2490710'>a</span> <span
  m='2490730'>graph</span> <span m='2490970'>and</span> <span
  m='2491070'>say,</span> <span m='2491230'>hey,</span> <span
  m='2491480'>I</span> <span m='2491590'>think</span> <span
  m='2491770'>this</span> <span m='2491930'>is</span> <span
  m='2492050'>acyclic,</span> <span m='2493350'>you</span> <span
  m='2493470'>can</span> <span m='2493590'>very</span> <span
  m='2493840'>quickly</span> <span m='2494150'>say,</span> <span
  m='2494350'>no,</span> <span m='2494720'>it's</span> <span
  m='2494870'>not,</span> <span m='2495380'>here's</span> <span
  m='2495550'>a</span> <span m='2495600'>cycle,</span> <span
  m='2496130'>or</span> <span m='2496400'>say,</span> <span
  m='2496590'>yeah,</span> <span m='2496850'>I</span> <span
  m='2496970'>agree,</span> <span m='2497660'>no</span> <span
  m='2497770'>back</span> <span m='2498060'>edges,</span> <span
  m='2498350'>I</span> <span m='2498410'>only</span> <span
  m='2498690'>have</span> <span m='2499490'>tree,</span> <span
  m='2499910'>forward,</span> <span m='2500490'>and</span> <span
  m='2500710'>cross</span> <span m='2501140'>edges.</span> </p><p><span
  m='2509150'>OK,</span> <span m='2509370'>that</span> <span
  m='2509410'>was</span> <span m='2509610'>application</span> <span
  m='2510180'>1.</span> <span m='2516610'>Application</span> <span
  m='2517210'>2</span> <span m='2517450'>is</span> <span
  m='2517640'>topological</span> <span m='2518360'>sort,</span> <span
  m='2518990'>which</span> <span m='2520330'>we're</span> <span
  m='2520390'>going</span> <span m='2520510'>to</span> <span
  m='2520590'>think</span> <span m='2520820'>about</span> <span
  m='2521420'>in</span> <span m='2521905'>the</span> <span
  m='2522390'>setting</span> <span m='2522790'>of</span> <span
  m='2522960'>a</span> <span m='2523080'>problem</span> <span
  m='2523200'>called</span> <span m='2523630'>job</span> <span
  m='2523910'>scheduling.</span> <span m='2527700'>So</span> <span
  m='2528150'>job</span> <span m='2528370'>scheduling,</span> <span
  m='2529360'>we</span> <span m='2529430'>are</span> <span
  m='2529510'>given</span> <span m='2530570'>a</span> <span
  m='2530940'>directed</span> <span m='2533950'>acyclic</span> <span
  m='2534620'>graph.</span> <span m='2541770'>I</span> <span
  m='2541910'>want</span> <span m='2542170'>to</span> <span
  m='2542270'>order</span> <span m='2542670'>the</span> <span
  m='2542760'>vertices</span> <span m='2548650'>so</span> <span
  m='2548900'>that</span> <span m='2555340'>all</span> <span
  m='2555650'>edges</span> <span m='2557140'>point</span> <span
  m='2559090'>from</span> <span m='2564070'>lower</span> <span
  m='2564690'>order</span> <span m='2565080'>to</span> <span
  m='2565440'>high</span> <span m='2565780'>order.</span> </p><p><span
  m='2572520'>Directed</span> <span m='2572860'>acyclic</span> <span
  m='2573250'>graph</span> <span m='2573520'>is</span> <span
  m='2573650'>called</span> <span m='2573900'>a</span> <span
  m='2573940'>DAG,</span> <span m='2574405'>you</span> <span
  m='2574870'>should</span> <span m='2575065'>know</span> <span
  m='2575260'>that</span> <span m='2575580'>from</span> <span
  m='2575830'>042.</span> <span m='2579830'>And</span> <span
  m='2580220'>maybe</span> <span m='2580520'>I'll</span> <span
  m='2580640'>draw</span> <span m='2580830'>one</span> <span m='2582340'>for
  kicks.</span> </p><p><span m='2612030'>Now,</span> <span
  m='2612720'>I've</span> <span m='2612860'>drawn</span> <span
  m='2613080'>the</span> <span m='2613160'>graph</span> <span
  m='2613310'>so</span> <span m='2613460'>all</span> <span
  m='2613610'>the</span> <span m='2613750'>edges</span> <span
  m='2614000'>go</span> <span m='2614130'>left</span> <span
  m='2614350'>to</span> <span m='2614450'>right,</span> <span
  m='2614760'>so</span> <span m='2614860'>you</span> <span
  m='2614960'>can</span> <span m='2615060'>see</span> <span
  m='2615180'>that</span> <span m='2615330'>there's</span> <span
  m='2615500'>no</span> <span m='2615690'>cycles</span> <span
  m='2616760'>here,</span> <span m='2617110'>but</span> <span
  m='2617410'>generally</span> <span m='2617850'>you'd</span> <span
  m='2617955'>run</span> <span m='2618060'>DFS</span> <span
  m='2618320'>and</span> <span m='2618580'>you'd</span> <span
  m='2618740'>detect</span> <span m='2618892'>there's</span> <span
  m='2619350'>no</span> <span m='2619500'>cycles.</span> <span
  m='2621090'>And</span> <span m='2621240'>now,</span> <span
  m='2621560'>imagine</span> <span m='2621950'>these</span> <span
  m='2622120'>vertices</span> <span m='2622530'>represent</span> <span
  m='2623170'>things</span> <span m='2623430'>you</span> <span
  m='2623550'>need</span> <span m='2623770'>to</span> <span
  m='2623890'>do.</span> <span m='2625746'>The</span> <span
  m='2626220'>textbook</span> <span m='2626620'>has</span> <span
  m='2626830'>a</span> <span m='2626880'>funny</span> <span
  m='2627120'>example</span> <span m='2627560'>where</span> <span
  m='2627680'>you're</span> <span m='2627910'>getting</span> <span
  m='2628170'>dressed,</span> <span m='2629080'>so</span> <span
  m='2629370'>you</span> <span m='2629490'>have</span> <span
  m='2629660'>these</span> <span m='2629840'>constraints</span> <span
  m='2630450'>that</span> <span m='2630530'>say,</span> <span
  m='2630820'>well,</span> <span m='2631030'>I've</span> <span
  m='2631190'>got</span> <span m='2631290'>to</span> <span
  m='2631360'>put</span> <span m='2631540'>my</span> <span
  m='2631660'>socks</span> <span m='2632070'>on</span> <span
  m='2632220'>before</span> <span m='2632590'>put</span> <span
  m='2632770'>my</span> <span m='2632900'>shoes</span> <span
  m='2633200'>on.</span> <span m='2633850'>And</span> <span
  m='2634040'>then</span> <span m='2634190'>I've</span> <span
  m='2634330'>got</span> <span m='2634460'>to</span> <span
  m='2634530'>put</span> <span m='2634670'>my</span> <span
  m='2634820'>underwear</span> <span m='2635200'>on</span> <span
  m='2635390'>before</span> <span m='2635580'>I</span> <span
  m='2635620'>put</span> <span m='2635770'>my</span> <span
  m='2635910'>pants</span> <span m='2636260'>on,</span> <span
  m='2636500'>and</span> <span m='2636660'>all</span> <span
  m='2636735'>these</span> <span m='2636810'>kinds</span> <span
  m='2637000'>of</span> <span m='2637090'>things.</span> </p><p><span
  m='2639350'>You</span> <span m='2639525'>would</span> <span
  m='2639700'>code</span> <span m='2640020'>that</span> <span
  m='2640290'>as</span> <span m='2640420'>a</span> <span
  m='2640490'>directed</span> <span m='2640890'>acyclic</span> <span
  m='2641240'>graph.</span> <span m='2641460'>You</span> <span
  m='2641600'>hope</span> <span m='2641810'>there's</span> <span
  m='2641970'>no</span> <span m='2642090'>cycles,</span> <span
  m='2642540'>because</span> <span m='2642840'>then</span> <span
  m='2642980'>you</span> <span m='2643090'>can't</span> <span
  m='2643320'>get</span> <span m='2643450'>dressed.</span> <span
  m='2645100'>And</span> <span m='2645740'>there's</span> <span
  m='2645980'>some</span> <span m='2646170'>things,</span> <span
  m='2646420'>like,</span> <span m='2646650'>well,</span> <span
  m='2646760'>I</span> <span m='2646830'>could</span> <span
  m='2646950'>put</span> <span m='2647070'>my</span> <span
  m='2647180'>glasses</span> <span m='2647550'>on</span> <span
  m='2647840'>whenever,</span> <span m='2648300'>although</span> <span
  m='2648480'>actually</span> <span m='2648765'>I</span> <span
  m='2649050'>should</span> <span m='2649380'>put</span> <span
  m='2649570'>my</span> <span m='2649650'>glasses</span> <span
  m='2649970'>on</span> <span m='2650060'>before</span> <span
  m='2650350'>I</span> <span m='2650380'>do</span> <span
  m='2650510'>anything</span> <span m='2650830'>else,</span> <span
  m='2651070'>otherwise</span> <span m='2651430'>there's</span> <span
  m='2651540'>problems.</span> <span m='2653330'>I</span> <span
  m='2653380'>don't</span> <span m='2653430'>know,</span> <span
  m='2653500'>you</span> <span m='2653640'>could</span> <span
  m='2653705'>put</span> <span m='2653770'>your</span> <span
  m='2653890'>watch</span> <span m='2654220'>on</span> <span
  m='2654410'>at</span> <span m='2654490'>any</span> <span
  m='2654690'>time,</span> <span m='2654980'>unless</span> <span
  m='2655420'>you</span> <span m='2655720'>need</span> <span
  m='2655890'>to</span> <span m='2656000'>know</span> <span
  m='2656090'>what</span> <span m='2656190'>time</span> <span
  m='2656380'>is.</span> <span m='2657110'>So</span> <span
  m='2657830'>there's</span> <span m='2658230'>some</span> <span
  m='2658630'>disconnected</span> <span m='2659190'>parts,</span> <span
  m='2659630'>whatever.</span> <span m='2660480'>There's</span> <span
  m='2660630'>some</span> <span m='2660830'>unrelated</span> <span
  m='2661400'>things,</span> <span m='2661650'>like,</span> <span
  m='2661810'>I</span> <span m='2661870'>don't</span> <span
  m='2662050'>care</span> <span m='2662320'>the</span> <span
  m='2662480'>order</span> <span m='2662900'>between</span> <span
  m='2663480'>my</span> <span m='2663640'>shirt</span> <span
  m='2664090'>and</span> <span m='2664370'>my</span> <span
  m='2664730'>pants</span> <span m='2664955'>or</span> <span
  m='2665180'>whatever,</span> <span m='2666650'>some</span> <span
  m='2666870'>things</span> <span m='2667090'>aren't</span> <span
  m='2667270'>constrained.</span> </p><p><span m='2668780'>What</span> <span
  m='2668910'>you'd</span> <span m='2669040'>like</span> <span
  m='2669230'>to</span> <span m='2669330'>do</span> <span m='2669480'>is</span>
  <span m='2669610'>choose</span> <span m='2669850'>an</span> <span
  m='2669960'>actual</span> <span m='2670490'>order</span> <span
  m='2670720'>to</span> <span m='2670840'>do</span> <span
  m='2671000'>things.</span> <span m='2671760'>Say</span> <span
  m='2671930'>you're</span> <span m='2672140'>a</span> <span
  m='2672200'>sequential</span> <span m='2672790'>being,</span> <span
  m='2673180'>you</span> <span m='2673275'>can</span> <span
  m='2673370'>only</span> <span m='2673570'>do</span> <span
  m='2673690'>one</span> <span m='2673900'>thing</span> <span
  m='2674050'>at</span> <span m='2674120'>a</span> <span
  m='2674210'>time,</span> <span m='2675390'>so</span> <span
  m='2675560'>I</span> <span m='2675630'>want</span> <span m='2675850'>to</span>
  <span m='2676000'>compute</span> <span m='2676370'>a</span> <span
  m='2676450'>total</span> <span m='2676820'>order.</span> <span
  m='2677050'>First</span> <span m='2677430'>I'll</span> <span
  m='2677530'>do</span> <span m='2677670'>g,</span> <span
  m='2678410'>then</span> <span m='2678530'>I'll</span> <span
  m='2678620'>do</span> <span m='2678740'>a,</span> <span
  m='2679340'>then</span> <span m='2679510'>I</span> <span
  m='2679570'>can</span> <span m='2679700'>do</span> <span m='2679840'>h,</span>
  <span m='2680180'>because</span> <span m='2680370'>I've</span> <span
  m='2680470'>done</span> <span m='2680670'>both</span> <span
  m='2680930'>of</span> <span m='2681040'>the</span> <span
  m='2681670'>predecessors.</span> <span m='2682900'>Then</span> <span
  m='2683340'>I</span> <span m='2683400'>can't</span> <span
  m='2683630'>do</span> <span m='2683750'>be,</span> <span
  m='2684120'>because</span> <span m='2684380'>I</span> <span
  m='2684430'>haven't</span> <span m='2684720'>done</span> <span
  m='2684940'>d,</span> <span m='2685160'>so</span> <span
  m='2685290'>maybe</span> <span m='2685500'>I'll</span> <span
  m='2685580'>do</span> <span m='2685690'>d</span> <span
  m='2685867'>first,</span> <span m='2686400'>and</span> <span
  m='2686490'>then</span> <span m='2686670'>b,</span> <span
  m='2687560'>and</span> <span m='2688050'>than</span> <span
  m='2688280'>e,</span> <span m='2688740'>then</span> <span
  m='2688890'>c,</span> <span m='2689040'>then</span> <span
  m='2689235'>f,</span> <span m='2689430'>then</span> <span
  m='2689610'>i.</span> <span m='2690090'>That</span> <span
  m='2690240'>would</span> <span m='2690350'>be</span> <span
  m='2690480'>a</span> <span m='2690520'>valid</span> <span
  m='2690850'>order,</span> <span m='2691810'>because</span> <span
  m='2692170'>all</span> <span m='2692470'>edges</span> <span
  m='2692800'>point</span> <span m='2693180'>from</span> <span
  m='2693500'>an</span> <span m='2693600'>earlier</span> <span
  m='2693990'>number</span> <span m='2694340'>to</span> <span
  m='2694530'>a</span> <span m='2694645'>later</span> <span
  m='2694760'>number.</span> <span m='2695580'>So</span> <span
  m='2695670'>that's</span> <span m='2695900'>the</span> <span
  m='2695980'>goal.</span> <span m='2696930'>And</span> <span
  m='2697490'>these</span> <span m='2697730'>are</span> <span
  m='2697830'>real</span> <span m='2698170'>job</span> <span
  m='2698400'>scheduling</span> <span m='2698850'>problems</span> <span
  m='2699300'>that</span> <span m='2700090'>come</span> <span
  m='2700280'>up,</span> <span m='2700430'>you'll</span> <span
  m='2700530'>see</span> <span m='2700790'>more</span> <span
  m='2701050'>applications</span> <span m='2701670'>in</span> <span
  m='2701860'>your</span> <span m='2701960'>problem</span> <span
  m='2702240'>set.</span> </p><p><span m='2704710'>How</span> <span
  m='2704940'>do</span> <span m='2705020'>we</span> <span m='2705140'>do</span>
  <span m='2705270'>this?</span> <span m='2707210'>Well,</span> <span
  m='2707470'>at</span> <span m='2707610'>this</span> <span
  m='2707770'>point</span> <span m='2707990'>we</span> <span
  m='2708080'>have</span> <span m='2708240'>two</span> <span
  m='2708410'>algorithms,</span> <span m='2708990'>and</span> <span
  m='2709120'>I</span> <span m='2709170'>pretty</span> <span
  m='2709400'>much</span> <span m='2709600'>revealed</span> <span
  m='2709960'>it</span> <span m='2710060'>is</span> <span
  m='2710230'>DFS.</span> <span m='2710880'>DFS</span> <span
  m='2711290'>will</span> <span m='2711400'>do</span> <span
  m='2711520'>this.</span> <span m='2713100'>It's</span> <span
  m='2713290'>a</span> <span m='2713340'>topological</span> <span
  m='2713740'>sort,</span> <span m='2714990'>is</span> <span
  m='2715820'>what</span> <span m='2715980'>this</span> <span
  m='2716330'>algorithm</span> <span m='2716680'>is</span> <span
  m='2716740'>usually</span> <span m='2716800'>called.</span> <span
  m='2720010'>Topological</span> <span m='2720950'>sort</span> <span
  m='2721290'>because</span> <span m='2721690'>you're</span> <span
  m='2721850'>given</span> <span m='2722540'>a</span> <span
  m='2722650'>graph,</span> <span m='2723130'>which</span> <span
  m='2723280'>you</span> <span m='2723350'>could</span> <span
  m='2723490'>think</span> <span m='2723650'>of</span> <span
  m='2723770'>as</span> <span m='2723870'>a</span> <span
  m='2723990'>topology.</span> <span m='2725070'>You</span> <span
  m='2725200'>want</span> <span m='2725330'>to</span> <span
  m='2725400'>sort</span> <span m='2725740'>it,</span> <span
  m='2726370'>in</span> <span m='2726460'>a</span> <span
  m='2726510'>certain</span> <span m='2726750'>sense.</span> <span
  m='2727000'>It's</span> <span m='2727140'>not</span> <span
  m='2727370'>like</span> <span m='2727530'>sorting</span> <span
  m='2727810'>numbers,</span> <span m='2728220'>it's</span> <span
  m='2728370'>sorting</span> <span m='2728730'>vertices</span> <span
  m='2729250'>in</span> <span m='2729330'>a</span> <span
  m='2729380'>graph,</span> <span m='2730160'>so,</span> <span
  m='2730300'>hence,</span> <span m='2730580'>topological</span> <span
  m='2731190'>sort.</span> </p><p><span m='2732370'>That's</span> <span
  m='2732610'>the</span> <span m='2732720'>name</span> <span
  m='2732910'>of</span> <span m='2732980'>the</span> <span
  m='2733110'>algorithm.</span> <span m='2734150'>And</span> <span
  m='2734470'>it's</span> <span m='2735580'>run</span> <span
  m='2736960'>DFS,</span> <span m='2738840'>and</span> <span
  m='2739340'>output</span> <span m='2743020'>the</span> <span
  m='2743110'>reverse</span> <span m='2746250'>of</span> <span
  m='2746360'>the</span> <span m='2746560'>finishing</span> <span
  m='2746760'>times</span> <span m='2752994'>of</span> <span
  m='2753470'>vertices.</span> <span m='2755540'>so</span> <span
  m='2755600'>this</span> <span m='2755740'>is</span> <span
  m='2755870'>another</span> <span m='2756190'>application</span> <span
  m='2756670'>where</span> <span m='2756760'>you</span> <span
  m='2756880'>really</span> <span m='2757150'>want</span> <span
  m='2757310'>to</span> <span m='2757350'>visit</span> <span
  m='2757640'>all</span> <span m='2757910'>the</span> <span
  m='2757980'>vertices</span> <span m='2758420'>in</span> <span
  m='2758480'>the</span> <span m='2758570'>graph,</span> <span
  m='2758970'>so</span> <span m='2760530'>we</span> <span m='2760720'>use</span>
  <span m='2760940'>this</span> <span m='2761160'>top</span> <span
  m='2761470'>level</span> <span m='2761720'>DFS,</span> <span
  m='2762600'>so</span> <span m='2762740'>everybody</span> <span
  m='2763220'>gets</span> <span m='2763430'>visited.</span> <span
  m='2765100'>And</span> <span m='2765660'>there</span> <span
  m='2765850'>are</span> <span m='2765890'>these</span> <span
  m='2766110'>finishing</span> <span m='2766540'>times,</span> <span
  m='2767350'>so</span> <span m='2767670'>every</span> <span
  m='2767930'>time</span> <span m='2768170'>I</span> <span
  m='2768240'>finish</span> <span m='2768580'>a</span> <span
  m='2768630'>vertex,</span> <span m='2769640'>I</span> <span
  m='2769740'>could</span> <span m='2769930'>add</span> <span
  m='2770170'>it</span> <span m='2770290'>to</span> <span m='2770430'>a</span>
  <span m='2770490'>list.</span> <span m='2771470'>Say</span> <span
  m='2771580'>OK,</span> <span m='2772290'>that</span> <span
  m='2772490'>one</span> <span m='2772630'>was</span> <span
  m='2772770'>finished</span> <span m='2773040'>next,</span> <span
  m='2773430'>than</span> <span m='2773590'>this</span> <span
  m='2773760'>one</span> <span m='2773870'>is</span> <span
  m='2773960'>finished,</span> <span m='2774310'>than</span> <span
  m='2774460'>this</span> <span m='2774650'>one's</span> <span
  m='2774840'>finished.</span> <span m='2775460'>I</span> <span
  m='2775600'>take</span> <span m='2775850'>that</span> <span
  m='2776050'>order</span> <span m='2776710'>and</span> <span
  m='2776830'>I</span> <span m='2776870'>reverse</span> <span
  m='2777330'>it.</span> <span m='2778320'>That</span> <span
  m='2778600'>will</span> <span m='2778700'>be</span> <span m='2779240'>a</span>
  <span m='2779290'>topological</span> <span m='2779950'>order.</span> <span
  m='2781588'>Why?</span> <span m='2782900'>Who</span> <span
  m='2783100'>knows.</span> <span m='2784190'>Let's</span> <span
  m='2784390'>prove</span> <span m='2784630'>it.</span> </p><p><span
  m='2794440'>We've</span> <span m='2794650'>actually</span> <span
  m='2794940'>done</span> <span m='2795270'>pretty</span> <span
  m='2795460'>much</span> <span m='2795700'>the</span> <span
  m='2795800'>hard</span> <span m='2796060'>work,</span> <span
  m='2798440'>which</span> <span m='2798610'>is</span> <span
  m='2798790'>to</span> <span m='2798920'>say--</span> <span
  m='2800040'>we're</span> <span m='2800200'>assuming</span> <span
  m='2800600'>our</span> <span m='2800680'>graph</span> <span
  m='2800920'>has</span> <span m='2801130'>no</span> <span
  m='2801270'>cycles,</span> <span m='2802560'>so</span> <span
  m='2802640'>that</span> <span m='2802930'>tells</span> <span
  m='2803250'>us</span> <span m='2804420'>by</span> <span
  m='2804650'>this</span> <span m='2805030'>cycle</span> <span
  m='2805340'>detection</span> <span m='2806150'>that</span> <span
  m='2806280'>there</span> <span m='2806440'>are</span> <span
  m='2806470'>no</span> <span m='2806670'>back</span> <span
  m='2807020'>edges.</span> <span m='2807410'>Back</span> <span
  m='2807680'>edges</span> <span m='2807980'>are</span> <span
  m='2808080'>kind</span> <span m='2808280'>of</span> <span
  m='2808400'>the</span> <span m='2808530'>annoying</span> <span
  m='2808880'>part.</span> <span m='2809780'>Now</span> <span
  m='2809960'>they</span> <span m='2810060'>don't</span> <span
  m='2810250'>exist</span> <span m='2810810'>here.</span> <span
  m='2811500'>So</span> <span m='2811660'>all</span> <span
  m='2811890'>the</span> <span m='2812020'>edges</span> <span
  m='2812370'>are</span> <span m='2812500'>tree</span> <span
  m='2812760'>edges,</span> <span m='2813450'>forward</span> <span
  m='2813730'>edges,</span> <span m='2814120'>and</span> <span
  m='2814340'>cross</span> <span m='2814560'>edges,</span> <span
  m='2816970'>and</span> <span m='2820660'>we</span> <span
  m='2820770'>use</span> <span m='2820880'>that</span> <span
  m='2821170'>to</span> <span m='2821266'>prove</span> <span
  m='2821363'>the</span> <span m='2821460'>theorem.</span> <span
  m='2825020'>So</span> <span m='2826240'>we</span> <span
  m='2826380'>want</span> <span m='2826560'>to</span> <span
  m='2826620'>prove</span> <span m='2828040'>that</span> <span
  m='2828160'>all</span> <span m='2828340'>the</span> <span
  m='2828460'>edges</span> <span m='2829350'>point</span> <span
  m='2829910'>from</span> <span m='2830070'>an</span> <span
  m='2830150'>earlier</span> <span m='2830570'>number</span> <span
  m='2831420'>to</span> <span m='2831530'>a</span> <span
  m='2831580'>later</span> <span m='2831840'>number.</span> </p><p><span
  m='2835320'>So</span> <span m='2835530'>what</span> <span
  m='2835670'>that</span> <span m='2835830'>means</span> <span
  m='2836110'>is</span> <span m='2836230'>for</span> <span m='2836390'>an</span>
  <span m='2836550'>edge,</span> <span m='2837080'>uv,</span> <span
  m='2839040'>we</span> <span m='2839170'>want</span> <span
  m='2839400'>to</span> <span m='2839460'>show</span> <span
  m='2839720'>that</span> <span m='2840110'>v</span> <span
  m='2840450'>finishes</span> <span m='2841180'>before</span> <span
  m='2842370'>u.</span> <span m='2852010'>That's</span> <span
  m='2852230'>the</span> <span m='2852310'>reverse,</span> <span
  m='2852870'>because</span> <span m='2854090'>what</span> <span
  m='2854240'>we're</span> <span m='2854380'>taking</span> <span
  m='2854750'>is</span> <span m='2854880'>the</span> <span
  m='2854980'>reverse</span> <span m='2855630'>of</span> <span
  m='2855870'>the</span> <span m='2855950'>finishing</span> <span
  m='2856490'>order.</span> <span m='2858610'>So</span> <span
  m='2859190'>edge</span> <span m='2859440'>uv,</span> <span
  m='2860050'>I</span> <span m='2860205'>want</span> <span m='2860360'>to</span>
  <span m='2860495'>make</span> <span m='2860630'>sure</span> <span
  m='2860780'>v</span> <span m='2860940'>finishes</span> <span
  m='2861390'>first,</span> <span m='2861790'>so</span> <span
  m='2861920'>that</span> <span m='2862340'>u</span> <span
  m='2862600'>will</span> <span m='2862730'>be</span> <span
  m='2862890'>ordered</span> <span m='2863270'>first.</span> <span
  m='2866140'>Well,</span> <span m='2866370'>there</span> <span
  m='2866480'>are</span> <span m='2866530'>two</span> <span
  m='2866690'>cases.</span> <span m='2871290'>Case</span> <span
  m='2871550'>1</span> <span m='2873490'>is</span> <span m='2873730'>that</span>
  <span m='2874200'>u</span> <span m='2874550'>starts</span> <span
  m='2875010'>before</span> <span m='2875460'>v.</span> <span
  m='2878350'>Case</span> <span m='2878610'>2</span> <span m='2879010'>is</span>
  <span m='2879250'>that</span> <span m='2879440'>he</span> <span
  m='2879650'>v</span> <span m='2879970'>before</span> <span
  m='2881210'>u.</span> <span m='2886690'>At</span> <span
  m='2886800'>some</span> <span m='2886950'>point</span> <span
  m='2887160'>they</span> <span m='2887290'>start,</span> <span
  m='2887690'>because</span> <span m='2887960'>we</span> <span
  m='2888220'>visit</span> <span m='2888320'>the</span> <span
  m='2888400'>whole</span> <span m='2888590'>graph.</span> <span
  m='2893160'>This</span> <span m='2893970'>top</span> <span
  m='2894250'>loop</span> <span m='2894630'>guarantees</span> <span
  m='2895130'>that.</span> <span m='2896400'>So</span> <span
  m='2896870'>consider</span> <span m='2897310'>what</span> <span
  m='2897500'>order</span> <span m='2897880'>we</span> <span
  m='2898000'>visit</span> <span m='2898320'>them</span> <span
  m='2898510'>first,</span> <span m='2899400'>at</span> <span
  m='2899565'>the</span> <span m='2899730'>beginning,</span> <span
  m='2901440'>and</span> <span m='2901590'>then</span> <span
  m='2901710'>we'll</span> <span m='2901830'>think</span> <span
  m='2902020'>about</span> <span m='2902230'>how</span> <span
  m='2902420'>they</span> <span m='2902540'>finish.</span> </p><p><span
  m='2903960'>Well,</span> <span m='2904880'>this</span> <span
  m='2905130'>case</span> <span m='2905370'>is</span> <span
  m='2905460'>kind</span> <span m='2905660'>of</span> <span
  m='2905850'>something</span> <span m='2906160'>we've</span> <span
  m='2906270'>seen</span> <span m='2906530'>before.</span> <span
  m='2907400'>We</span> <span m='2907510'>visit</span> <span
  m='2907980'>u,</span> <span m='2908810'>we</span> <span
  m='2908910'>have</span> <span m='2909080'>not</span> <span
  m='2909400'>yet</span> <span m='2909610'>visited</span> <span
  m='2910130'>v,</span> <span m='2911480'>but</span> <span m='2911710'>v</span>
  <span m='2911890'>is</span> <span m='2912050'>reachable</span> <span
  m='2912570'>from</span> <span m='2912770'>u,</span> <span
  m='2914050'>so</span> <span m='2914220'>maybe</span> <span
  m='2914590'>via</span> <span m='2914840'>this</span> <span
  m='2915080'>edge,</span> <span m='2915440'>or</span> <span
  m='2915590'>maybe</span> <span m='2915890'>via</span> <span
  m='2916090'>some</span> <span m='2916320'>other</span> <span
  m='2916550'>path,</span> <span m='2917200'>we</span> <span
  m='2917540'>will</span> <span m='2917770'>eventually</span> <span
  m='2918320'>visit</span> <span m='2918760'>v</span> <span
  m='2919620'>in</span> <span m='2919830'>the</span> <span
  m='2919920'>recursion</span> <span m='2920390'>for</span> <span
  m='2920530'>u.</span> <span m='2921190'>So</span> <span
  m='2921340'>before</span> <span m='2921810'>u</span> <span
  m='2922020'>finishes,</span> <span m='2922940'>we</span> <span
  m='2923040'>will</span> <span m='2923190'>visit</span> <span
  m='2923550'>v,</span> <span m='2927520'>visit</span> <span
  m='2927720'>v</span> <span m='2928950'>before</span> <span
  m='2930160'>u</span> <span m='2931290'>finishes.</span> <span
  m='2933070'>That</span> <span m='2933330'>sentence</span> <span
  m='2934440'>is</span> <span m='2934980'>just</span> <span
  m='2935590'>like</span> <span m='2936900'>this</span> <span
  m='2937090'>sentence,</span> <span m='2938560'>so</span> <span
  m='2938700'>same</span> <span m='2938960'>kind</span> <span
  m='2939120'>of</span> <span m='2939210'>argument.</span> <span
  m='2940000'>We</span> <span m='2940225'>won't</span> <span
  m='2940450'>go</span> <span m='2940580'>into</span> <span
  m='2940730'>detail,</span> <span m='2941100'>because</span> <span
  m='2941290'>we</span> <span m='2941460'>already</span> <span
  m='2941640'>did</span> <span m='2941830'>that</span> <span
  m='2942050'>several</span> <span m='2942320'>times.</span> <span
  m='2944470'>So</span> <span m='2944640'>that</span> <span
  m='2944840'>means</span> <span m='2945820'>we'll</span> <span
  m='2945890'>visit</span> <span m='2945960'>v,</span> <span
  m='2946080'>we</span> <span m='2946230'>will</span> <span
  m='2946500'>completely</span> <span m='2947120'>visit</span> <span
  m='2947520'>v,</span> <span m='2947710'>we</span> <span
  m='2947825'>will</span> <span m='2947940'>finish</span> <span
  m='2948380'>v</span> <span m='2948960'>before</span> <span
  m='2949270'>we</span> <span m='2949360'>finish</span> <span
  m='2949680'>u</span> <span m='2950040'>and</span> <span
  m='2950400'>that's</span> <span m='2950535'>what</span> <span
  m='2950670'>we</span> <span m='2950780'>wanted</span> <span
  m='2951080'>to</span> <span m='2951250'>prove.</span> <span
  m='2952100'>So</span> <span m='2952240'>in</span> <span
  m='2952570'>that</span> <span m='2952750'>case</span> <span
  m='2952975'>is</span> <span m='2953200'>good.</span> </p><p><span
  m='2954580'>The</span> <span m='2954660'>other</span> <span
  m='2954790'>cases</span> <span m='2955180'>is</span> <span
  m='2955216'>that</span> <span m='2955253'>v</span> <span
  m='2955290'>starts</span> <span m='2956450'>before</span> <span
  m='2956880'>u.</span> <span m='2958820'>Here,</span> <span
  m='2959020'>you</span> <span m='2959110'>might</span> <span
  m='2959280'>get</span> <span m='2959450'>slightly</span> <span
  m='2959790'>worried.</span> <span m='2961764'>So</span> <span
  m='2962180'>we</span> <span m='2962290'>have</span> <span
  m='2962500'>an</span> <span m='2962570'>edge,</span> <span
  m='2962820'>uv,</span> <span m='2963070'>still,</span> <span
  m='2963520'>same</span> <span m='2963770'>direction.</span> <span
  m='2964810'>But</span> <span m='2964930'>now</span> <span
  m='2965150'>we</span> <span m='2965280'>start</span> <span
  m='2966090'>at</span> <span m='2966300'>v,</span> <span m='2967250'>u</span>
  <span m='2967530'>has</span> <span m='2967720'>not</span> <span
  m='2967950'>yet</span> <span m='2968170'>been</span> <span
  m='2968320'>visited.</span> <span m='2969930'>Well,</span> <span
  m='2970080'>now</span> <span m='2970390'>we</span> <span
  m='2970530'>worry</span> <span m='2973910'>that</span> <span
  m='2974120'>we</span> <span m='2974260'>visit</span> <span
  m='2974580'>u.</span> <span m='2975646'>If</span> <span m='2976010'>we</span>
  <span m='2976310'>visit</span> <span m='2976470'>u,</span> <span
  m='2976730'>we're</span> <span m='2976750'>going</span> <span
  m='2976870'>to</span> <span m='2976930'>finish</span> <span
  m='2977320'>u</span> <span m='2977450'>before</span> <span
  m='2977960'>we</span> <span m='2978060'>finish</span> <span
  m='2978320'>v,</span> <span m='2978510'>but</span> <span m='2978650'>we</span>
  <span m='2978760'>want</span> <span m='2979060'>it</span> <span
  m='2979100'>to</span> <span m='2979140'>be</span> <span m='2979230'>the</span>
  <span m='2979350'>other</span> <span m='2979490'>way</span> <span
  m='2979600'>around.</span> <span m='2980640'>Why</span> <span
  m='2980780'>can't</span> <span m='2981030'>that</span> <span
  m='2981360'>happen?</span> </p><p><span m='2983096'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='2984400'>PROFESSOR: Because</span> <span
  m='2984780'>there's</span> <span m='2984980'>a</span> <span
  m='2985030'>back</span> <span m='2985490'>edge</span> <span
  m='2985625'>somewhere</span> <span m='2985760'>here.</span> <span
  m='2986130'>In</span> <span m='2986230'>particular,</span> <span
  m='2986700'>the</span> <span m='2986860'>graph</span> <span
  m='2987310'>would</span> <span m='2987540'>have</span> <span
  m='2987720'>to</span> <span m='2987810'>be</span> <span
  m='2987970'>cyclic.</span> <span m='2988610'>This</span> <span
  m='2988780'>is</span> <span m='2988910'>a</span> <span
  m='2989000'>cycle,</span> <span m='2990380'>so</span> <span
  m='2990470'>this</span> <span m='2990630'>can't</span> <span
  m='2990840'>happen,</span> <span m='2992481'>a</span> <span
  m='2992870'>contradiction.</span> <span m='2994830'>So</span> <span
  m='2995980'>v</span> <span m='2996250'>will</span> <span
  m='2996380'>finish</span> <span m='2998840'>before</span> <span
  m='2999260'>we</span> <span m='2999420'>visit</span> <span
  m='2999740'>u</span> <span m='2999930'>at</span> <span m='3000000'>all.</span>
  <span m='3004690'>So</span> <span m='3004780'>v</span> <span
  m='3004930'>will</span> <span m='3005080'>still</span> <span
  m='3005340'>finish</span> <span m='3005670'>first,</span> <span
  m='3006150'>because</span> <span m='3006400'>we</span> <span
  m='3006480'>don't</span> <span m='3006625'>even</span> <span
  m='3006860'>touch</span> <span m='3007160'>u,</span> <span
  m='3007830'>because</span> <span m='3008060'>there's</span> <span
  m='3008210'>no</span> <span m='3008340'>cycles.</span> <span
  m='3010080'>So</span> <span m='3010150'>that's</span> <span
  m='3010410'>actually</span> <span m='3010660'>the</span> <span
  m='3011086'>proof</span> <span m='3011512'>that</span> <span
  m='3011940'>topological</span> <span m='3012580'>sort</span> <span
  m='3012910'>gives</span> <span m='3013100'>you</span> <span
  m='3013280'>a</span> <span m='3013370'>valid</span> <span
  m='3013990'>job</span> <span m='3014280'>schedule,</span> <span
  m='3016280'>and</span> <span m='3017260'>it's</span> <span
  m='3017373'>kind</span> <span m='3017486'>of--</span> <span
  m='3017940'>there</span> <span m='3018195'>are</span> <span
  m='3018450'>even</span> <span m='3018650'>more</span> <span
  m='3018860'>things</span> <span m='3019080'>you</span> <span
  m='3019190'>can</span> <span m='3019350'>do</span> <span
  m='3019490'>with</span> <span m='3019720'>DFS.</span> <span
  m='3021200'>We'll</span> <span m='3021400'>see</span> <span
  m='3021600'>some</span> <span m='3021920'>in</span> <span
  m='3022320'>recitations,</span> <span m='3023100'>more</span> <span
  m='3023205'>in</span> <span m='3023310'>the</span> <span
  m='3023430'>textbook.</span> <span m='3024520'>But</span> <span
  m='3024900'>simple</span> <span m='3025280'>algorithm,</span> <span
  m='3026380'>can</span> <span m='3026490'>do</span> <span m='3026600'>a</span>
  <span m='3026650'>lot</span> <span m='3026870'>of</span> <span
  m='3026920'>nifty</span> <span m='3027240'>things</span> <span
  m='3027470'>with</span> <span m='3027610'>it,</span> <span
  m='3028280'>very</span> <span m='3028480'>fast,</span> <span
  m='3029080'>linear</span> <span m='3029380'>time.</span> </p>
uid: 75894ca06489f3b79b2da067cd1acdc7
type: courses
layout: video
---
