---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture starts with dictionaries in
  Python, considers the problems with using a direct-access table, and
  introduces hashing. The lecture discusses hashing with chaining, which is one
  way of dealing with collisions.</p> <p><strong>Instructor:</strong> Erik
  Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 0M_kIqhwbFo
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Video-YouTube-Stream
    type: Video
    uid: 47ba535c062888dcb1b67fa3cb9d46f1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/0M_kIqhwbFo/default.jpg'
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 343b98be4b7fb0b82bafd40d9982542c
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-8-hashing-chaining/id585700718?i=126127729
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Video-iTunes U-MP4
    type: Video
    uid: 2fd0d35984da2e6f33d5b0c3ea2bdd4f
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec08_300k.mp4'
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Video-Internet Archive-MP4
    type: Video
    uid: b4bfe97e66346549fea741e67dc8ce0c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 0M_kIqhwbFo
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 21cb064dfe7ad06e8b9eb2fb2c53754c
  - id: 0M_kIqhwbFo.srt
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-8-hashing-with-chaining/0M_kIqhwbFo.srt
    title: 3play caption file
    type: null
    uid: 224d95e69d1b99366a683f6fd222d0f3
  - id: 0M_kIqhwbFo.pdf
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-8-hashing-with-chaining/0M_kIqhwbFo.pdf
    title: 3play pdf file
    type: null
    uid: d70981f6772f565f0919bb1a31b57142
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 14806ae8e0a11dd888c7deb0ade909d7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7eee5a3e15d709b9e817dd1773352056
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 774bfdf04635f9101182cdc07be27001
inline_embed_id: '49460327lecture8:hashingwithchaining50456703'
order_index: 126
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-8-hashing-with-chaining
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-8-hashing-with-chaining
title: 'Lecture 8: Hashing with Chaining'
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
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22265'>PROFESSOR: All right.</span> <span m='22710'>Let's</span> <span
  m='22900'>get</span> <span m='23070'>started.</span> <span
  m='24980'>Today</span> <span m='25450'>we</span> <span m='25610'>start</span>
  <span m='25940'>a</span> <span m='25990'>brand</span> <span
  m='26360'>new</span> <span m='26530'>section</span> <span m='26810'>of</span>
  <span m='27090'>006,</span> <span m='27730'>which</span> <span
  m='27940'>is</span> <span m='28120'>hashing.</span> <span
  m='29620'>Hashing</span> <span m='29960'>is</span> <span
  m='30110'>cool.</span> <span m='30430'>It</span> <span m='30480'>is</span>
  <span m='30610'>probably</span> <span m='31620'>the</span> <span
  m='31940'>most</span> <span m='32390'>used</span> <span m='32850'>and</span>
  <span m='33000'>common</span> <span m='33440'>and</span> <span
  m='33560'>important</span> <span m='34230'>data</span> <span
  m='34440'>structure</span> <span m='34830'>and</span> <span
  m='34920'>all</span> <span m='35080'>of</span> <span m='35200'>computer</span>
  <span m='35550'>science.</span> <span m='36495'>It's</span> <span
  m='36760'>in,</span> <span m='36880'>basically,</span> <span
  m='37370'>every</span> <span m='38320'>system</span> <span
  m='38670'>you've</span> <span m='38840'>ever</span> <span
  m='39120'>used,</span> <span m='40340'>I</span> <span m='40420'>think.</span>
  <span m='41860'>And</span> <span m='42340'>in</span> <span
  m='42780'>particular,</span> <span m='43530'>it's</span> <span
  m='43640'>in</span> <span m='43770'>Python</span> <span m='44220'>as</span>
  <span m='44370'>part</span> <span m='44600'>of</span> <span
  m='44670'>what</span> <span m='44840'>makes</span> <span
  m='45170'>Python</span> <span m='45590'>fun to</span> <span
  m='45800'>program</span> <span m='46230'>in.</span> <span m='46326'>And</span>
  <span m='46520'>basically,</span> <span m='46850'>every</span> <span
  m='47130'>modern</span> <span m='47670'>programming</span> <span
  m='48170'>language</span> <span m='48510'>has</span> <span
  m='48760'>it.</span> </p><p><span m='49740'>So</span> <span
  m='49990'>today</span> <span m='50320'>is</span> <span m='50430'>about</span>
  <span m='50650'>how</span> <span m='50910'>to</span> <span
  m='50980'>make</span> <span m='51220'>it</span> <span
  m='51660'>actually</span> <span m='52150'>happen.</span> <span
  m='53610'>So</span> <span m='53850'>what</span> <span m='54010'>is</span>
  <span m='54190'>it?</span> <span m='57230'>It is</span> <span
  m='57440'>usually</span> <span m='57870'>called</span> <span
  m='58130'>a</span> <span m='58230'>dictionary.</span> <span
  m='61960'>So</span> <span m='62100'>this</span> <span m='62340'>is</span>
  <span m='62600'>an</span> <span m='62840'>abstract</span> <span
  m='63350'>data</span> <span m='63610'>if</span> <span m='64200'>you</span>
  <span m='64280'>remember</span> <span m='64590'>that</span> <span
  m='65610'>term</span> <span m='65930'>from</span> <span m='66160'>a</span>
  <span m='66200'>couple</span> <span m='66480'>lectures</span> <span
  m='66900'>ago.</span> <span m='73080'>It's kind of</span> <span
  m='73300'>an</span> <span m='73370'>old</span> <span m='73610'>term,</span>
  <span m='73880'>not</span> <span m='74080'>so</span> <span
  m='74260'>common</span> <span m='74920'>anymore,</span> <span
  m='75450'>but</span> <span m='75640'>it's</span> <span m='76040'>useful</span>
  <span m='76750'>to</span> <span m='76790'>think</span> <span
  m='77050'>about.</span> </p><p><span m='78340'>So</span> <span
  m='78520'>a</span> <span m='78600'>dictionary</span> <span m='79690'>is</span>
  <span m='81210'>a</span> <span m='81280'>data</span> <span
  m='81530'>structure,</span> <span m='82900'>or</span> <span
  m='83090'>it's</span> <span m='83210'>a</span> <span m='83970'>thing,</span>
  <span m='84790'>that</span> <span m='84920'>can</span> <span
  m='85210'>store</span> <span m='85690'>items,</span> <span m='86900'>and
  it</span> <span m='87130'>can</span> <span m='87240'>insert</span> <span
  m='87610'>items,</span> <span m='87930'>delete</span> <span
  m='88270'>items</span> <span m='88600'>and</span> <span
  m='88710'>search</span> <span m='88960'>for</span> <span
  m='89110'>items.</span> <span m='95180'>So</span> <span m='95580'>in</span>
  <span m='95680'>general,</span> <span m='96070'>it's</span> <span
  m='96210'>going</span> <span m='96310'>to</span> <span m='96370'>be</span>
  <span m='96490'>a</span> <span m='96540'>set</span> <span m='96760'>of</span>
  <span m='96850'>items,</span> <span m='100230'>each</span> <span
  m='100490'>item</span> <span m='100820'>has</span> <span m='101030'>a</span>
  <span m='101100'>key.</span> <span m='107720'>And</span> <span
  m='108180'>you</span> <span m='108310'>can</span> <span
  m='108590'>insert</span> <span m='111860'>an</span> <span
  m='112090'>item,</span> <span m='113850'>you</span> <span
  m='114070'>can</span> <span m='114310'>delete</span> <span
  m='114660'>an</span> <span m='114790'>item</span> <span m='116080'>from</span>
  <span m='116260'>the</span> <span m='116350'>set,</span> <span
  m='119820'>and</span> <span m='120010'>you</span> <span m='120120'>can</span>
  <span m='120270'>search</span> <span m='121820'>for</span> <span
  m='122110'>a</span> <span m='122570'>key,</span> <span m='123950'>not</span>
  <span m='124410'>an</span> <span m='124650'>item.</span> </p><p><span
  m='126720'>And the</span> <span m='127020'>interesting</span> <span
  m='127400'>part</span> <span m='127710'>is</span> <span m='128110'>the</span>
  <span m='128210'>search.</span> <span m='129470'>I</span> <span
  m='129550'>think</span> <span m='129699'>you know</span> <span
  m='130080'>what</span> <span m='130374'>insert</span> <span
  m='130472'>and</span> <span m='130570'>delete</span> <span
  m='130669'>do.</span> <span m='140360'>So</span> <span m='140550'>there</span>
  <span m='140660'>are</span> <span m='140710'>two</span> <span
  m='140890'>outcomes</span> <span m='141460'>to</span> <span
  m='141660'>this</span> <span m='141870'>kind</span> <span m='142060'>of</span>
  <span m='142140'>search.</span> <span m='143015'>This</span> <span
  m='143290'>is</span> <span m='143430'>what</span> <span m='143610'>I</span>
  <span m='143670'>call an</span> <span m='143990'>exact</span> <span
  m='144510'>search.</span> <span m='145270'>Either</span> <span
  m='145470'>you</span> <span m='145790'>find</span> <span m='146070'>an</span>
  <span m='146180'>item</span> <span m='146490'>with</span> <span
  m='146620'>a</span> <span m='146720'>given</span> <span m='147020'>key,</span>
  <span m='148050'>or</span> <span m='148290'>there</span> <span
  m='148460'>isn't</span> <span m='148650'>one,</span> <span
  m='149440'>and</span> <span m='149600'>then</span> <span m='149760'>you</span>
  <span m='149860'>just</span> <span m='150070'>say</span> <span
  m='151310'>key</span> <span m='151880'>error</span> <span m='152150'>in</span>
  <span m='152270'>Python.</span> </p><p><span m='162320'>OK.</span> <span
  m='162450'>This</span> <span m='162650'>is</span> <span m='162770'>a</span>
  <span m='162830'>little</span> <span m='163130'>different</span> <span
  m='163630'>from</span> <span m='164090'>what</span> <span m='164230'>we</span>
  <span m='164360'>could</span> <span m='164530'>do</span> <span
  m='164670'>with</span> <span m='164790'>binary</span> <span
  m='165150'>search</span> <span m='165460'>trees.</span> <span
  m='165690'>Binary</span> <span m='165990'>search trees,</span> <span
  m='166430'>if</span> <span m='166540'>we</span> <span m='166650'>didn't</span>
  <span m='166990'>find</span> <span m='167260'>a</span> <span
  m='167370'>key,</span> <span m='167690'>we</span> <span
  m='167860'>could</span> <span m='168030'>find</span> <span
  m='168270'>the</span> <span m='168340'>next</span> <span
  m='168630'>larger</span> <span m='169080'>and</span> <span m='169340'>the
  next</span> <span m='169520'>smaller</span> <span m='170900'>successor</span>
  <span m='171190'>and</span> <span m='171480'>predecessor.</span> <span
  m='172790'>With</span> <span m='172950'>dictionaries</span> <span
  m='173520'>you're</span> <span m='173650'>not</span> <span
  m='173820'>allowed</span> <span m='174100'>to</span> <span
  m='174170'>do</span> <span m='174360'>that,</span> <span m='174660'>or</span>
  <span m='174790'>you're</span> <span m='174900'>not</span> <span
  m='175120'>able</span> <span m='175420'>to</span> <span m='175540'>do</span>
  <span m='175670'>that.</span> </p><p><span m='176220'>And</span> <span
  m='176350'>you're</span> <span m='176460'>just</span> <span
  m='176830'>interested</span> <span m='177270'>in</span> <span
  m='177340'>the</span> <span m='177440'>question</span> <span
  m='177900'>does</span> <span m='178160'>the</span> <span m='178270'>key</span>
  <span m='178460'>exist?</span> <span m='178930'>And</span> <span
  m='179080'>if</span> <span m='179260'>so,</span> <span m='179690'>give</span>
  <span m='179870'>me</span> <span m='180040'>the</span> <span
  m='180150'>item</span> <span m='180450'>with</span> <span
  m='180590'>that</span> <span m='180860'>key.</span> <span m='182090'>So</span>
  <span m='182240'>we're</span> <span m='182320'>assuming</span> <span
  m='182720'>here</span> <span m='182980'>that</span> <span
  m='183390'>the</span> <span m='183560'>items</span> <span
  m='183950'>have</span> <span m='184180'>unique</span> <span
  m='184690'>keys,</span> <span m='184990'>no</span> <span m='185290'>two</span>
  <span m='185450'>items</span> <span m='185720'>have</span> <span
  m='185830'>the</span> <span m='185910'>same</span> <span
  m='186190'>key.</span> </p><p><span m='187450'>And</span> <span
  m='187680'>one</span> <span m='187860'>way</span> <span m='188000'>to</span>
  <span m='188060'>enforce</span> <span m='188450'>that</span> <span
  m='188610'>is</span> <span m='188700'>when</span> <span m='188820'>you</span>
  <span m='188940'>insert</span> <span m='189300'>an</span> <span
  m='189410'>item</span> <span m='190370'>with</span> <span m='190580'>an</span>
  <span m='190670'>existing</span> <span m='191140'>key,</span> <span
  m='191430'>it</span> <span m='191590'>overwrites</span> <span
  m='192200'>whatever</span> <span m='192530'>key</span> <span
  m='192730'>was</span> <span m='192920'>there.</span> <span
  m='193140'>That's</span> <span m='193390'>the</span> <span
  m='193500'>Python</span> <span m='193890'>behavior.</span> <span
  m='195070'>So</span> <span m='195250'>we'll</span> <span
  m='195400'>assume</span> <span m='195690'>that.</span> <span
  m='198550'>Overwrite</span> <span m='204200'>any</span> <span
  m='204480'>existing</span> <span m='205295'>key.</span> <span
  m='211730'>And</span> <span m='212020'>so,</span> <span m='212940'>it's</span>
  <span m='213070'>well</span> <span m='213280'>defined</span> <span
  m='213650'>what</span> <span m='213810'>search</span> <span
  m='214080'>does.</span> <span m='214480'>Either</span> <span
  m='214700'>there's</span> <span m='214890'>one</span> <span
  m='215140'>item</span> <span m='215380'>with</span> <span m='215540'>that
  key,</span> <span m='216230'>or</span> <span m='216330'>there's</span> <span
  m='216500'>no</span> <span m='216670'>item</span> <span m='216900'>with</span>
  <span m='217010'>that</span> <span m='217200'>key,</span> <span
  m='217490'>and</span> <span m='217740'>it</span> <span m='217850'>tells</span>
  <span m='218110'>you</span> <span m='218850'>what</span> <span
  m='218990'>the</span> <span m='219080'>situation</span> <span
  m='219690'>is.</span> <span m='221500'>OK.</span> </p><p><span
  m='221760'>So</span> <span m='225820'>one</span> <span m='226130'>way</span>
  <span m='226280'>to</span> <span m='226390'>solve</span> <span
  m='226700'>dictionaries</span> <span m='227540'>is</span> <span
  m='227710'>to</span> <span m='227860'>use</span> <span m='228340'>a</span>
  <span m='228420'>balanced</span> <span m='228810'>binary</span> <span
  m='229070'>search</span> <span m='229340'>tree</span> <span
  m='229500'>like</span> <span m='229710'>AVL</span> <span
  m='230130'>trees.</span> <span m='231150'>And</span> <span
  m='231250'>so</span> <span m='231330'>you</span> <span m='231500'>can</span>
  <span m='231640'>do</span> <span m='231820'>all</span> <span
  m='232000'>of</span> <span m='232080'>these</span> <span
  m='232260'>operations</span> <span m='233480'>on</span> <span
  m='233730'>log</span> <span m='234120'>n</span> <span m='234290'>time.</span>
  <span m='241720'>I</span> <span m='241780'>mean,</span> <span
  m='242020'>you</span> <span m='242050'>can</span> <span
  m='242190'>ignore</span> <span m='242520'>the</span> <span
  m='242630'>fact</span> <span m='243050'>that</span> <span
  m='243330'>AVL</span> <span m='243720'>trees</span> <span
  m='243940'>give</span> <span m='244120'>you</span> <span
  m='244220'>more</span> <span m='244450'>information</span> <span
  m='244990'>when</span> <span m='245100'>you</span> <span m='245200'>do</span>
  <span m='245320'>a</span> <span m='245380'>search,</span> <span
  m='246200'>and</span> <span m='246350'>still</span> <span
  m='246580'>does</span> <span m='246800'>exact</span> <span
  m='247170'>search.</span> </p><p><span m='248540'>So</span> <span
  m='248700'>that's</span> <span m='248920'>one</span> <span
  m='249150'>solution,</span> <span m='250450'>but</span> <span
  m='250560'>it</span> <span m='250660'>turns</span> <span m='250910'>out</span>
  <span m='251090'>you</span> <span m='251200'>can</span> <span
  m='251320'>do</span> <span m='251440'>better.</span> <span
  m='252690'>And</span> <span m='252890'>while</span> <span
  m='253090'>last</span> <span m='253400'>class</span> <span
  m='253850'>was</span> <span m='254030'>about,</span> <span
  m='254840'>well,</span> <span m='254935'>in</span> <span m='255030'>the</span>
  <span m='255120'>comparison</span> <span m='255720'>model</span> <span
  m='256110'>the</span> <span m='256190'>best</span> <span m='256529'>way</span>
  <span m='256670'>to</span> <span m='256779'>sort</span> <span
  m='257430'>is</span> <span m='257670'>n</span> <span m='257829'>log</span>
  <span m='258110'>n</span> <span m='258709'>and</span> <span
  m='259019'>the</span> <span m='259079'>best</span> <span m='259360'>way</span>
  <span m='259490'>to</span> <span m='259610'>search</span> <span
  m='260120'>is</span> <span m='260279'>log</span> <span m='260649'>n.</span>
  <span m='261570'>Then</span> <span m='261740'>we</span> <span
  m='261860'>saw</span> <span m='262320'>in</span> <span m='262770'>the</span>
  <span m='262980'>RAM</span> <span m='263300'>model,</span> <span
  m='263700'>where</span> <span m='263870'>if</span> <span m='264210'>you</span>
  <span m='264340'>assume</span> <span m='264560'>your</span> <span
  m='264880'>items</span> <span m='265240'>are</span> <span
  m='265350'>integers</span> <span m='266350'>we</span> <span
  m='266500'>can</span> <span m='266640'>sort</span> <span
  m='267060'>faster,</span> <span m='267600'>sometimes</span> <span
  m='267990'>we</span> <span m='268080'>can</span> <span m='268190'>sort
  in</span> <span m='268560'>linear</span> <span m='268770'>time.</span>
  </p><p><span m='269440'>Today's</span> <span m='269690'>lecture</span> <span
  m='270000'>is</span> <span m='270110'>about</span> <span m='270350'>how</span>
  <span m='270550'>to</span> <span m='270650'>search</span> <span
  m='271710'>faster</span> <span m='272190'>than</span> <span m='272410'>log
  n</span> <span m='272860'>time.</span> <span m='273710'>And</span> <span
  m='273860'>we're</span> <span m='274000'>going</span> <span
  m='274110'>to</span> <span m='274170'>get</span> <span m='274410'>down</span>
  <span m='274740'>to</span> <span m='275540'>constant</span> <span
  m='276040'>time.</span> <span m='277680'>No--</span> <span
  m='278040'>basically,</span> <span m='278430'>no</span> <span
  m='278630'>assumptions</span> <span m='280620'>except,</span> <span
  m='280750'>maybe,</span> <span m='281020'>that</span> <span
  m='281170'>your</span> <span m='281310'>keys</span> <span
  m='281580'>are</span> <span m='281690'>integers.</span> <span
  m='283110'>We'll</span> <span m='283220'>be</span> <span
  m='283350'>able</span> <span m='283510'>to</span> <span m='283560'>get</span>
  <span m='283730'>down</span> <span m='283900'>to</span> <span
  m='283990'>constant</span> <span m='284410'>time</span> <span
  m='285480'>with</span> <span m='285720'>high</span> <span
  m='285900'>probability.</span> </p><p><span m='288890'>It's</span> <span
  m='289010'>going</span> <span m='289130'>to</span> <span m='289210'>be</span>
  <span m='289380'>a</span> <span m='289470'>randomized</span> <span
  m='290400'>data</span> <span m='290610'>structure.</span> <span
  m='291030'>It's one of</span> <span m='291160'>the</span> <span
  m='291250'>few</span> <span m='291550'>instances</span> <span
  m='291970'>of</span> <span m='292090'>randomization</span> <span
  m='292465'>in</span> <span m='292840'>006,</span> <span m='293490'>but</span>
  <span m='293600'>it'll</span> <span m='293690'>be</span> <span
  m='293870'>pretty</span> <span m='294200'>simple</span> <span
  m='294580'>to</span> <span m='294670'>analyze,</span> <span
  m='295160'>so</span> <span m='295920'>don't</span> <span
  m='296060'>worry.</span> <span m='296260'>But we're</span> <span
  m='296480'>going</span> <span m='296590'>to use</span> <span
  m='296700'>some</span> <span m='296870'>probability</span> <span
  m='297470'>today.</span> <span m='299770'>Make</span> <span m='299940'>it
  a</span> <span m='299990'>little</span> <span m='300160'>exciting.</span>
  </p><p><span m='303290'>I</span> <span m='303360'>think</span> <span
  m='303580'>you know</span> <span m='303870'>how</span> <span
  m='304160'>dictionaries</span> <span m='304650'>work</span> <span
  m='304830'>in</span> <span m='304920'>Python.</span> <span
  m='305470'>In</span> <span m='305560'>Python</span> <span
  m='308840'>it's</span> <span m='309515'>the</span> <span
  m='309960'>dict</span> <span m='310750'>data</span> <span
  m='311010'>type.</span> <span m='311810'>We've</span> <span
  m='312020'>used</span> <span m='312230'>it</span> <span m='312310'>all</span>
  <span m='312500'>over</span> <span m='312600'>the</span> <span
  m='312710'>place.</span> <span m='314600'>The</span> <span m='314900'>key
  things</span> <span m='315050'>you</span> <span m='315510'>can</span> <span
  m='315660'>do</span> <span m='315920'>are</span> <span
  m='316130'>lookup</span> <span m='316490'>a</span> <span m='316580'>key</span>
  <span m='317760'>and--</span> <span m='318940'>so</span> <span
  m='319090'>this</span> <span m='319350'>is</span> <span m='321310'>the</span>
  <span m='321410'>analog</span> <span m='321800'>of</span> <span
  m='321880'>search--</span> <span m='324100'>you</span> <span
  m='324330'>can</span> <span m='324740'>set</span> <span m='327030'>a</span>
  <span m='327110'>key</span> <span m='327340'>to a</span> <span
  m='327530'>value.</span> <span m='327970'>This</span> <span
  m='328190'>is</span> <span m='328270'>the</span> <span
  m='328410'>analog</span> <span m='328710'>of an</span> <span
  m='329010'>insert.</span> <span m='330960'>It</span> <span
  m='331110'>overwrites</span> <span m='331610'>whatever</span> <span
  m='331880'>was</span> <span m='332050'>there.</span> <span
  m='333170'>And</span> <span m='333490'>what</span> <span
  m='333600'>else?</span> <span m='333810'>Delete.</span> <span
  m='334610'>So</span> <span m='334890'>you</span> <span m='335020'>can</span>
  <span m='335840'>delete</span> <span m='337230'>a</span> <span
  m='337300'>particular</span> <span m='337790'>key.</span> <span
  m='342114'>OK.</span> </p><p><span m='342760'>We'll</span> <span
  m='342890'>usually</span> <span m='343200'>use</span> <span
  m='343380'>this</span> <span m='343560'>notation</span> <span
  m='344060'>because</span> <span m='344280'>it's</span> <span
  m='344430'>more</span> <span m='344600'>familiar</span> <span
  m='345160'>and</span> <span m='345250'>intuitive.</span> <span
  m='346340'>But</span> <span m='346850'>the</span> <span m='346980'>big</span>
  <span m='347430'>topic</span> <span m='347790'>today</span> <span
  m='347990'>is</span> <span m='348090'>how do</span> <span
  m='348240'>you</span> <span m='348390'>actually</span> <span
  m='348690'>implement</span> <span m='349120'>these</span> <span
  m='349300'>operations</span> <span m='349920'>for a</span> <span
  m='350190'>dictionary,</span> <span m='351340'>D?</span> <span
  m='353070'>The</span> <span m='353190'>one</span> <span
  m='354310'>specific</span> <span m='354900'>thing</span> <span
  m='355080'>about</span> <span m='355320'>Python</span> <span
  m='355700'>dictionaries</span> <span m='356360'>is</span> <span
  m='356610'>that</span> <span m='356830'>an</span> <span m='357020'>item</span>
  <span m='359340'>is</span> <span m='359550'>basically</span> <span
  m='360120'>a</span> <span m='360210'>pair</span> <span m='361465'>of</span>
  <span m='361810'>two</span> <span m='362010'>things,</span> <span
  m='362350'>a</span> <span m='362450'>key</span> <span m='362880'>and</span>
  <span m='363000'>a</span> <span m='363060'>value.</span> <span
  m='365380'>And</span> <span m='365570'>so,</span> <span m='365710'>in</span>
  <span m='365790'>particular,</span> <span m='366180'>when</span> <span
  m='366300'>you</span> <span m='366390'>call</span> <span
  m='366660'>d.items</span> <span m='367410'>you</span> <span
  m='367520'>get</span> <span m='367670'>a</span> <span m='367720'>whole</span>
  <span m='367890'>bunch</span> <span m='368130'>of</span> <span
  m='368260'>ordered</span> <span m='368550'>pairs,</span> <span
  m='369040'>a</span> <span m='369400'>key</span> <span m='369800'>and a</span>
  <span m='370100'>value.</span> </p><p><span m='371280'>And</span> <span
  m='371350'>so</span> <span m='371460'>the</span> <span m='371570'>key</span>
  <span m='371820'>is</span> <span m='371950'>always--</span> <span
  m='372370'>the</span> <span m='372530'>key of an</span> <span
  m='372890'>item</span> <span m='373220'>is</span> <span
  m='373350'>always</span> <span m='373550'>this</span> <span
  m='373740'>first</span> <span m='373990'>part.</span> <span
  m='375152'>So</span> <span m='375630'>it's</span> <span m='375720'>well</span>
  <span m='375880'>defined.</span> <span m='380240'>OK.</span> <span
  m='383070'>So</span> <span m='383300'>that's</span> <span
  m='383540'>Python</span> <span m='385650'>dictionaries.</span> </p><p><span
  m='388120'>So</span> <span m='388300'>one</span> <span
  m='388490'>obvious</span> <span m='388800'>motivation</span> <span
  m='389420'>for</span> <span m='391380'>building</span> <span
  m='391680'>dictionaries</span> <span m='392530'>is</span> <span
  m='393570'>you</span> <span m='393670'>need</span> <span
  m='393810'>them</span> <span m='393920'>in</span> <span
  m='394000'>Python.</span> <span m='394980'>And</span> <span
  m='395980'>in</span> <span m='396130'>fact,</span> <span
  m='396370'>people</span> <span m='396640'>use</span> <span
  m='396790'>them</span> <span m='396930'>all</span> <span m='397040'>the</span>
  <span m='397110'>time.</span> <span m='397380'>We</span> <span
  m='397530'>used</span> <span m='397780'>them</span> <span m='398060'>in</span>
  <span m='398370'>docdist.</span> <span m='399830'>All</span> <span
  m='400040'>of</span> <span m='400130'>the</span> <span
  m='400310'>fastest</span> <span m='400820'>versions</span> <span
  m='401220'>of</span> <span m='401470'>the</span> <span
  m='401580'>document</span> <span m='401990'>distance</span> <span
  m='402350'>problem</span> <span m='403890'>used</span> <span
  m='404680'>dictionaries</span> <span m='405310'>for</span> <span
  m='405780'>counting</span> <span m='406340'>words,</span> <span
  m='406860'>how</span> <span m='407020'>many</span> <span
  m='407420'>times</span> <span m='407740'>each</span> <span
  m='407880'>word</span> <span m='408080'>occurs</span> <span
  m='408470'>in</span> <span m='408550'>a</span> <span
  m='408610'>document,</span> <span m='409510'>and</span> <span
  m='409800'>for</span> <span m='410130'>computing</span> <span
  m='410560'>inner</span> <span m='411030'>products,</span> <span
  m='411470'>for</span> <span m='411590'>finding</span> <span
  m='412000'>common</span> <span m='412480'>words</span> <span
  m='412790'>between</span> <span m='413170'>two</span> <span
  m='413300'>documents.</span> <span m='414640'>And</span> <span
  m='414790'>it's</span> <span m='414910'>just</span> <span
  m='415240'>it's</span> <span m='415430'>the</span> <span
  m='415520'>best</span> <span m='415790'>way</span> <span m='415910'>to</span>
  <span m='415990'>do</span> <span m='416130'>things,</span> <span
  m='417035'>it's</span> <span m='417400'>the</span> <span
  m='417480'>easiest</span> <span m='417790'>way</span> <span
  m='417900'>to</span> <span m='417990'>do</span> <span m='418110'>things</span>
  <span m='418500'>,</span> <span m='418780'>and</span> <span
  m='418970'>the</span> <span m='419030'>fastest.</span> </p><p><span
  m='420530'>As</span> <span m='420700'>a</span> <span m='420750'>result,</span>
  <span m='421080'>dictionaries</span> <span m='421520'>are</span> <span
  m='421600'>built</span> <span m='421860'>into</span> <span
  m='422080'>basically</span> <span m='422460'>every</span> <span
  m='422800'>modern</span> <span m='423120'>programming</span> <span
  m='423520'>language,</span> <span m='424420'>Python,</span> <span
  m='424800'>Perl,</span> <span m='425170'>Ruby,</span> <span
  m='426780'>JavaScript,</span> <span m='426980'>Java,</span> <span
  m='427180'>C++,</span> <span m='427290'>C#.</span> <span m='428110'>In</span>
  <span m='428230'>modern</span> <span m='428540'>versions,</span> <span
  m='428890'>all</span> <span m='429200'>have</span> <span
  m='429440'>some</span> <span m='429680'>version</span> <span
  m='430040'>of</span> <span m='430510'>dictionaries.</span> <span
  m='430970'>And</span> <span m='431430'>they</span> <span m='431560'>all</span>
  <span m='431790'>run</span> <span m='432040'>in,</span> <span
  m='432120'>basically,</span> <span m='432530'>constant</span> <span
  m='432970'>time</span> <span m='433790'>using</span> <span
  m='434970'>the</span> <span m='435070'>stuff</span> <span
  m='435380'>that's</span> <span m='435600'>in</span> <span
  m='435820'>this</span> <span m='436030'>lecture</span> <span
  m='436330'>and</span> <span m='436400'>the</span> <span m='436480'>next</span>
  <span m='436720'>two</span> <span m='436850'>lectures.</span> </p><p><span
  m='440130'>Let's</span> <span m='440330'>see.</span> <span
  m='441300'>It's</span> <span m='441650'>also,</span> <span
  m='442840'>in,</span> <span m='443080'>basically,</span> <span
  m='443470'>every</span> <span m='443710'>database.</span> <span
  m='447160'>There</span> <span m='447260'>are</span> <span
  m='447280'>essentially</span> <span m='447790'>two</span> <span
  m='447970'>kinds</span> <span m='448230'>of</span> <span
  m='448290'>databases</span> <span m='448870'>in</span> <span
  m='448920'>the</span> <span m='449000'>world,</span> <span m='449310'>there
  are</span> <span m='449420'>those</span> <span m='449690'>that</span> <span
  m='449800'>use</span> <span m='449950'>hashing,</span> <span
  m='450360'>and</span> <span m='450430'>there</span> <span
  m='450520'>are</span> <span m='450560'>those</span> <span
  m='450860'>that</span> <span m='451000'>use</span> <span
  m='451640'>search</span> <span m='451980'>trees.</span> <span
  m='452800'>Sometimes</span> <span m='453310'>you</span> <span
  m='453370'>need</span> <span m='453550'>one.</span> <span
  m='453760'>Sometimes</span> <span m='454180'>you</span> <span
  m='454250'>need</span> <span m='454410'>the</span> <span
  m='454540'>other.</span> <span m='455240'>There</span> <span
  m='455340'>are</span> <span m='455440'>a</span> <span m='455540'>lot</span>
  <span m='455560'>of</span> <span m='455620'>situations</span> <span
  m='456220'>in</span> <span m='456310'>databases</span> <span
  m='456860'>where</span> <span m='457000'>you</span> <span
  m='457110'>just</span> <span m='457470'>need</span> <span
  m='458090'>hashing.</span> </p><p><span m='459180'>So</span> <span
  m='459300'>if</span> <span m='459350'>you've</span> <span
  m='459470'>ever</span> <span m='459650'>used</span> <span
  m='459790'>Berkeley</span> <span m='460150'>DB,</span> <span
  m='460540'>there's</span> <span m='461610'>a</span> <span
  m='462000'>hash</span> <span m='462360'>type</span> <span m='462690'>of</span>
  <span m='462950'>a</span> <span m='463490'>database.</span> <span
  m='464450'>So if</span> <span m='464640'>things</span> <span
  m='464950'>like,</span> <span m='466640'>when</span> <span
  m='466760'>you</span> <span m='466850'>go</span> <span m='466960'>to</span>
  <span m='467050'>Merriam-Webster,</span> <span m='468460'>and</span> <span
  m='468940'>you</span> <span m='469110'>look</span> <span m='469300'>up</span>
  <span m='469440'>a</span> <span m='469510'>word,</span> <span
  m='470730'>how</span> <span m='470980'>do</span> <span m='471040'>you</span>
  <span m='471200'>find</span> <span m='471700'>the</span> <span
  m='472500'>definition</span> <span m='473000'>of</span> <span
  m='473060'>that</span> <span m='473270'>word?</span> <span
  m='473860'>You</span> <span m='473930'>use</span> <span m='474240'>a</span>
  <span m='474300'>hash</span> <span m='474540'>table,</span> <span
  m='475110'>you</span> <span m='475320'>use</span> <span m='475620'>a</span>
  <span m='475670'>dictionary,</span> <span m='476500'>I</span> <span
  m='476770'>should</span> <span m='476990'>say.</span> </p><p><span
  m='478090'>How</span> <span m='478440'>do</span> <span m='478500'>you--</span>
  <span m='479770'>when</span> <span m='480030'>you</span> <span
  m='480140'>spell</span> <span m='480470'>check</span> <span
  m='480700'>your</span> <span m='480800'>document,</span> <span
  m='482100'>how</span> <span m='482310'>do</span> <span m='482370'>you</span>
  <span m='482490'>tell</span> <span m='482700'>whether</span> <span
  m='482960'>a word</span> <span m='483170'>is</span> <span
  m='483320'>correctly</span> <span m='483700'>spelled?</span> <span
  m='484360'>You</span> <span m='484480'>look</span> <span m='484640'>it</span>
  <span m='484720'>up</span> <span m='484850'>in</span> <span
  m='484940'>a</span> <span m='485010'>dictionary.</span> <span
  m='486110'>If</span> <span m='486210'>it's</span> <span m='486360'>not</span>
  <span m='486540'>correctly</span> <span m='486840'>spelled,</span> <span
  m='487100'>how</span> <span m='487210'>do</span> <span m='487280'>you</span>
  <span m='487390'>find</span> <span m='487690'>the</span> <span
  m='487790'>closest</span> <span m='489110'>related,</span> <span
  m='490330'>correct</span> <span m='490710'>spelling?</span> <span
  m='491520'>You</span> <span m='491650'>try</span> <span
  m='492070'>tweaking</span> <span m='492550'>one</span> <span
  m='492680'>the</span> <span m='492770'>letters,</span> <span
  m='493140'>and</span> <span m='493210'>look</span> <span m='493420'>it</span>
  <span m='493490'>up</span> <span m='493630'>in a</span> <span
  m='493770'>dictionary</span> <span m='494150'>and see</span> <span
  m='494300'>if</span> <span m='494380'>it's</span> <span
  m='494480'>there.</span> <span m='494750'>You</span> <span
  m='494870'>do</span> <span m='495000'>that</span> <span m='495210'>for</span>
  <span m='495330'>all</span> <span m='495560'>possible</span> <span
  m='495950'>letters,</span> <span m='496310'>or</span> <span
  m='496370'>maybe</span> <span m='496620'>two</span> <span
  m='496800'>letters.</span> </p><p><span m='497600'>That</span> <span
  m='497810'>is</span> <span m='497950'>a</span> <span m='498030'>state</span>
  <span m='498270'>of</span> <span m='498340'>the</span> <span
  m='498480'>art</span> <span m='498650'>way</span> <span m='498880'>to</span>
  <span m='500830'>do</span> <span m='500990'>spelling</span> <span
  m='501340'>correction.</span> <span m='502050'>Just</span> <span
  m='502310'>keep</span> <span m='502550'>looking</span> <span
  m='502880'>up</span> <span m='503000'>in a</span> <span
  m='503150'>dictionary.</span> <span m='503440'>Because</span> <span
  m='503820'>dictionaries</span> <span m='504220'>are</span> <span
  m='504310'>so</span> <span m='504530'>fast</span> <span m='505410'>you</span>
  <span m='505530'>can</span> <span m='505630'>afford</span> <span
  m='505940'>to</span> <span m='506020'>do</span> <span m='506140'>things</span>
  <span m='506420'>like</span> <span m='506580'>trial</span> <span
  m='506970'>perturbations</span> <span m='507315'>of</span> <span
  m='507660'>letters.</span> </p><p><span m='510820'>What</span> <span
  m='511020'>else.</span> <span m='512039'>In</span> <span m='512179'>the</span>
  <span m='512330'>old</span> <span m='512610'>days,</span> <span
  m='512940'>which</span> <span m='513110'>means</span> <span
  m='513320'>pre-Google,</span> <span m='514770'>every</span> <span
  m='515840'>search</span> <span m='516220'>engine</span> <span
  m='516780'>on</span> <span m='516919'>the</span> <span m='517000'>web</span>
  <span m='517880'>would</span> <span m='518030'>have</span> <span
  m='518260'>a</span> <span m='518340'>dictionary</span> <span
  m='518860'>that</span> <span m='519030'>says,</span> <span
  m='519470'>for</span> <span m='519830'>given</span> <span
  m='520190'>word,</span> <span m='521260'>give</span> <span
  m='521500'>me</span> <span m='521690'>all</span> <span m='521980'>of</span>
  <span m='522080'>the</span> <span m='522169'>documents</span> <span
  m='522659'>containing</span> <span m='523070'>that</span> <span
  m='523280'>word.</span> <span m='524120'>Google</span> <span
  m='524440'>doesn't</span> <span m='524730'>do</span> <span
  m='524840'>it</span> <span m='524940'>that</span> <span m='525140'>way,</span>
  <span m='525840'>but</span> <span m='526120'>that's</span> <span
  m='526340'>another</span> <span m='526580'>story.</span> <span
  m='528760'>It's</span> <span m='529420'>less</span> <span
  m='529690'>fancy,</span> <span m='530100'>actually.</span> </p><p><span
  m='530870'>Or</span> <span m='531170'>when</span> <span m='531360'>you</span>
  <span m='531560'>log</span> <span m='531850'>into</span> <span
  m='532100'>a</span> <span m='532160'>system,</span> <span
  m='532860'>you</span> <span m='532960'>type</span> <span
  m='533190'>your</span> <span m='533300'>username</span> <span
  m='533810'>and</span> <span m='533900'>password.</span> <span
  m='534940'>You</span> <span m='535100'>look</span> <span m='535290'>in</span>
  <span m='535380'>a</span> <span m='535440'>dictionary</span> <span
  m='536040'>that</span> <span m='536150'>stores a</span> <span
  m='536440'>username</span> <span m='537800'>and,</span> <span
  m='538150'>associated</span> <span m='538260'>with</span> <span
  m='538650'>that</span> <span m='538810'>username,</span> <span
  m='539220'>all</span> <span m='539320'>the</span> <span
  m='539410'>information</span> <span m='539880'>of</span> <span
  m='539990'>that</span> <span m='540280'>user.</span> <span
  m='541230'>Every</span> <span m='541460'>time</span> <span
  m='541650'>you</span> <span m='541730'>log</span> <span m='541930'>into
  a</span> <span m='542160'>web</span> <span m='542320'>system, or</span> <span
  m='542640'>whatever,</span> <span m='543040'>it</span> <span
  m='543160'>is</span> <span m='543530'>going</span> <span m='543870'>through
  a</span> <span m='544100'>dictionary.</span> </p><p><span m='545440'>So</span>
  <span m='545590'>they're</span> <span m='545750'>all</span> <span
  m='545940'>over</span> <span m='546070'>the</span> <span
  m='546180'>place.</span> <span m='547520'>One</span> <span m='547780'>of
  the</span> <span m='547900'>original</span> <span
  m='548300'>applications</span> <span m='549140'>is</span> <span
  m='549330'>in</span> <span m='549440'>writing</span> <span
  m='549760'>programming</span> <span m='550240'>languages.</span> <span
  m='551380'>Some</span> <span m='551560'>of</span> <span m='551610'>the</span>
  <span m='551680'>first</span> <span m='551910'>computer</span> <span
  m='552270'>programs</span> <span m='552670'>were</span> <span
  m='552770'>programming</span> <span m='553210'>languages,</span> <span
  m='553610'>so</span> <span m='554010'>you</span> <span m='554170'>could</span>
  <span m='554310'>actually</span> <span m='555180'>program</span> <span
  m='555500'>them</span> <span m='555670'>in</span> <span m='555760'>a</span>
  <span m='555810'>reasonable</span> <span m='556230'>way.</span> </p><p><span
  m='561860'>Whenever</span> <span m='562200'>you</span> <span
  m='562350'>type</span> <span m='562920'>a</span> <span
  m='563000'>variable</span> <span m='563470'>name</span> <span
  m='564950'>the</span> <span m='565060'>computer</span> <span
  m='565430'>doesn't</span> <span m='565650'>really</span> <span
  m='565880'>think</span> <span m='566080'>about</span> <span
  m='566310'>that</span> <span m='566470'>variable</span> <span
  m='566850'>name,</span> <span m='567080'>it</span> <span
  m='567180'>wants</span> <span m='567370'>to</span> <span
  m='567470'>think</span> <span m='567670'>about</span> <span
  m='568100'>an</span> <span m='568210'>address</span> <span
  m='568580'>in</span> <span m='568660'>memory.</span> <span
  m='569500'>And</span> <span m='569670'>so</span> <span
  m='569760'>you've</span> <span m='569870'>got</span> <span
  m='570020'>to</span> <span m='570110'>translate</span> <span
  m='570750'>that</span> <span m='571110'>variable</span> <span
  m='571480'>name</span> <span m='571820'>into</span> <span m='572530'>a</span>
  <span m='572780'>real,</span> <span m='573040'>physical</span> <span
  m='573660'>address</span> <span m='574050'>in</span> <span
  m='574130'>the</span> <span m='574180'>machine,</span> <span
  m='575430'>or</span> <span m='575750'>a</span> <span
  m='575810'>position</span> <span m='576340'>on</span> <span
  m='576440'>the</span> <span m='576510'>stack,</span> <span
  m='577160'>or</span> <span m='577270'>whatever</span> <span
  m='577660'>it</span> <span m='577710'>is</span> <span m='577870'>in</span>
  <span m='577940'>real</span> <span m='578180'>life.</span> <span
  m='579950'>In</span> <span m='580130'>the</span> <span m='580220'>old</span>
  <span m='580520'>days</span> <span m='580860'>of</span> <span
  m='580950'>Python,</span> <span m='581630'>I</span> <span
  m='581700'>guess</span> <span m='581950'>this</span> <span
  m='582130'>is</span> <span m='583100'>pre-Python</span> <span
  m='583940'>2</span> <span m='584300'>or</span> <span m='584420'>so,</span>
  <span m='585040'>2.1,</span> <span m='585160'>I</span> <span
  m='585550'>don't</span> <span m='585640'>remember</span> <span
  m='585905'>the</span> <span m='586170'>exact</span> <span
  m='586490'>transition</span> <span m='587720'>it</span> <span
  m='588040'>was.</span> <span m='588390'>In</span> <span m='588550'>the</span>
  <span m='588660'>interpreter,</span> <span m='589630'>there</span> <span
  m='589740'>was</span> <span m='590160'>the</span> <span
  m='590290'>dictionary</span> <span m='590970'>of</span> <span
  m='591080'>all</span> <span m='591290'>your</span> <span
  m='591390'>global</span> <span m='591680'>variables,</span> <span
  m='592230'>there's</span> <span m='592300'>a</span> <span
  m='592360'>dictionary</span> <span m='592780'>of</span> <span
  m='592870'>all</span> <span m='592990'>your</span> <span
  m='593110'>local</span> <span m='593440'>variables.</span> </p><p><span
  m='594420'>And</span> <span m='594600'>that</span> <span
  m='594810'>was--</span> <span m='597870'>it</span> <span m='597980'>was</span>
  <span m='598110'>right</span> <span m='598330'>there.</span> <span
  m='598790'>I</span> <span m='598860'>mean</span> <span m='599010'>you</span>
  <span m='599110'>could</span> <span m='599290'>modify</span> <span
  m='599770'>the</span> <span m='599860'>dictionary,</span> <span
  m='600310'>you</span> <span m='600370'>could do</span> <span
  m='600490'>crazy</span> <span m='600850'>things.</span> <span
  m='601140'>And</span> <span m='601360'>all</span> <span m='601680'>the</span>
  <span m='601750'>variables</span> <span m='602880'>were</span> <span
  m='603070'>there.</span> <span m='603520'>And so</span> <span
  m='603670'>they'd</span> <span m='603790'>match</span> <span
  m='604150'>the</span> <span m='604270'>key</span> <span m='604540'>to</span>
  <span m='604680'>the</span> <span m='605420'>actual</span> <span
  m='605700'>value</span> <span m='606050'>stored</span> <span
  m='606340'>in</span> <span m='606420'>the</span> <span
  m='606480'>variable.</span> </p><p><span m='607520'>They</span> <span
  m='607620'>don't</span> <span m='607760'>do</span> <span
  m='607860'>that</span> <span m='608020'>anymore</span> <span
  m='608330'>because</span> <span m='608520'>it's</span> <span
  m='609060'>a</span> <span m='609130'>little</span> <span
  m='609310'>slow,</span> <span m='609920'>but--</span> <span
  m='610230'>and</span> <span m='610370'>you</span> <span
  m='610490'>could</span> <span m='610610'>do</span> <span
  m='610700'>better</span> <span m='611580'>in</span> <span
  m='611670'>practice.</span> <span m='612090'>But</span> <span
  m='612240'>at</span> <span m='612370'>the</span> <span m='612450'>very</span>
  <span m='612660'>least,</span> <span m='612880'>when</span> <span
  m='612970'>you're</span> <span m='613090'>compiling</span> <span
  m='613660'>the</span> <span m='613770'>thing,</span> <span
  m='614310'>you</span> <span m='614460'>need</span> <span m='614640'>a</span>
  <span m='614680'>dictionary.</span> <span m='616070'>And</span> <span
  m='616260'>then,</span> <span m='616480'>later</span> <span
  m='616750'>on,</span> <span m='616880'>you</span> <span m='617000'>can</span>
  <span m='617150'>do</span> <span m='617340'>more</span> <span
  m='617540'>efficient</span> <span m='618460'>lookups.</span> <span
  m='620120'>Let's</span> <span m='620340'>see.</span> </p><p><span
  m='623580'>On</span> <span m='623840'>the</span> <span
  m='623950'>internet</span> <span m='624740'>there are</span> <span
  m='625140'>hash</span> <span m='625320'>tables</span> <span
  m='625640'>all</span> <span m='625800'>over,</span> <span
  m='626490'>like</span> <span m='626830'>in</span> <span m='627060'>your</span>
  <span m='627210'>router.</span> <span m='629070'>Router</span> <span
  m='629360'>needs</span> <span m='629590'>to</span> <span
  m='629660'>know</span> <span m='629790'>all</span> <span m='629930'>the</span>
  <span m='630000'>machines</span> <span m='630380'>that</span> <span
  m='630480'>are</span> <span m='630560'>connected</span> <span
  m='630940'>to</span> <span m='631080'>it.</span> <span m='631160'>Each</span>
  <span m='631330'>machine</span> <span m='631640'>has</span> <span
  m='631790'>an</span> <span m='631870'>IP</span> <span
  m='632180'>address,</span> <span m='633070'>so</span> <span
  m='633120'>when</span> <span m='633200'>you</span> <span m='633250'>get</span>
  <span m='633350'>a</span> <span m='633410'>packet</span> <span
  m='633770'>in,</span> <span m='633875'>and</span> <span m='633980'>it
  says,</span> <span m='634210'>deliver</span> <span m='634530'>to</span> <span
  m='634630'>this</span> <span m='634810'>IP</span> <span
  m='635110'>address,</span> <span m='635390'>you</span> <span
  m='635470'>see,</span> <span m='636040'>oh,</span> <span m='636410'>is
  it</span> <span m='636500'>in</span> <span m='636600'>my</span> <span
  m='636740'>dictionary</span> <span m='637250'>of</span> <span
  m='637310'>all</span> <span m='637510'>the</span> <span
  m='637720'>machines</span> <span m='638060'>that</span> <span
  m='638150'>are</span> <span m='638240'>directly</span> <span
  m='638630'>connected</span> <span m='638990'>to</span> <span
  m='639090'>me?</span> <span m='639220'>If</span> <span m='639340'>so,</span>
  <span m='639550'>send</span> <span m='639830'>it</span> <span
  m='639940'>there.</span> </p><p><span m='641220'>If it's</span> <span
  m='641380'>not</span> <span m='641710'>then</span> <span m='641840'>it</span>
  <span m='641900'>has</span> <span m='642090'>to</span> <span
  m='642180'>find</span> <span m='642360'>the</span> <span
  m='642420'>right</span> <span m='642600'>subnet.</span> <span
  m='642990'>That's</span> <span m='643200'>not</span> <span m='643360'>quite
  a</span> <span m='643640'>dictionary</span> <span m='643970'>problem,</span>
  <span m='644350'>a</span> <span m='644370'>little</span> <span
  m='644560'>more</span> <span m='644740'>complicated.</span> <span
  m='645820'>But</span> <span m='646070'>for</span> <span
  m='646190'>looking</span> <span m='646460'>up</span> <span
  m='646590'>local</span> <span m='646860'>machines,</span> <span
  m='647920'>it's</span> <span m='648180'>a</span> <span
  m='648230'>dictionary.</span> <span m='649310'>Routers</span> <span
  m='649630'>use</span> <span m='649800'>dictionaries</span> <span
  m='650390'>because</span> <span m='650570'>they</span> <span
  m='650710'>need</span> <span m='650880'>to</span> <span m='650990'>go</span>
  <span m='651170'>really</span> <span m='651430'>fast.</span> <span
  m='651930'>They're</span> <span m='652140'>getting</span> <span
  m='652440'>a</span> <span m='653070'>billion</span> <span
  m='653410'>packets</span> <span m='653810'>every</span> <span
  m='654000'>second.</span> </p><p><span m='655450'>Also,</span> <span
  m='656370'>in</span> <span m='656590'>the</span> <span
  m='656680'>network</span> <span m='657100'>stack</span> <span
  m='657540'>of</span> <span m='657670'>a</span> <span
  m='657720'>machine,</span> <span m='659190'>when</span> <span
  m='659460'>you</span> <span m='659870'>come</span> <span m='660160'>in</span>
  <span m='660330'>you</span> <span m='660430'>get</span> <span
  m='660460'>it</span> <span m='660860'>packet</span> <span
  m='661320'>delivered</span> <span m='661940'>to</span> <span
  m='662340'>a</span> <span m='662410'>particular</span> <span
  m='662850'>port,</span> <span m='663320'>you</span> <span
  m='663410'>need</span> <span m='663560'>to</span> <span m='663640'>say,</span>
  <span m='663880'>oh,</span> <span m='664060'>which</span> <span
  m='664380'>application,</span> <span m='664980'>or</span> <span
  m='665040'>which</span> <span m='665270'>socket</span> <span
  m='665690'>is</span> <span m='665820'>connected</span> <span m='666170'>to
  this</span> <span m='666330'>port?</span> <span m='666880'>All of</span> <span
  m='667180'>these</span> <span m='667380'>things</span> <span
  m='667590'>are</span> <span m='667640'>dictionaries.</span> <span
  m='668630'>The</span> <span m='668740'>point</span> <span m='668930'>is</span>
  <span m='669090'>they're</span> <span m='669270'>in,</span> <span
  m='669320'>basically,</span> <span m='669760'>everything</span> <span
  m='670710'>you've</span> <span m='670860'>ever</span> <span
  m='671110'>used,</span> <span m='671650'>virtual</span> <span
  m='672020'>memory,</span> <span m='672690'>I</span> <span
  m='672730'>mean,</span> <span m='673080'>they're</span> <span
  m='673310'>all</span> <span m='673430'>over</span> <span m='673530'>the</span>
  <span m='673630'>place.</span> </p><p><span m='675060'>There</span> <span
  m='675190'>are</span> <span m='675210'>also</span> <span
  m='675420'>some</span> <span m='675640'>more</span> <span
  m='675990'>subtle</span> <span m='676540'>applications,</span> <span
  m='677120'>where</span> <span m='677220'>it is</span> <span
  m='677320'>not</span> <span m='677500'>obvious</span> <span
  m='677880'>that's</span> <span m='678160'>it a</span> <span
  m='678210'>dictionary,</span> <span m='678680'>but</span> <span
  m='678850'>still,</span> <span m='679220'>we</span> <span
  m='679360'>use</span> <span m='679660'>this</span> <span
  m='679840'>idea</span> <span m='680080'>of</span> <span
  m='680150'>hashing</span> <span m='680650'>we're</span> <span
  m='680720'>going</span> <span m='680830'>to</span> <span
  m='680910'>talk</span> <span m='681120'>about</span> <span
  m='681360'>today.</span> <span m='682230'>Like</span> <span
  m='684510'>searching</span> <span m='685060'>in</span> <span
  m='685160'>a</span> <span m='685220'>string.</span> <span m='690350'>So</span>
  <span m='690670'>when</span> <span m='690930'>you</span> <span
  m='691440'>hit--</span> <span m='692130'>I</span> <span
  m='692540'>don't</span> <span m='692710'>know--</span> <span
  m='693490'>in</span> <span m='693610'>your</span> <span
  m='693700'>favorite</span> <span m='694450'>editor,</span> <span
  m='694810'>you do</span> <span m='695060'>Control-F,</span> <span
  m='695630'>or</span> <span m='695720'>Control-S,</span> <span m='696380'>or
  slash,</span> <span m='696850'>or</span> <span m='696900'>whatever</span>
  <span m='697290'>your</span> <span m='697810'>way</span> <span
  m='697970'>of</span> <span m='698060'>searching</span> <span
  m='698440'>for</span> <span m='698600'>something</span> <span
  m='699000'>is,</span> <span m='699440'>and you</span> <span
  m='699570'>type</span> <span m='699810'>start</span> <span
  m='700070'>typing.</span> <span m='701530'>If</span> <span
  m='701810'>your</span> <span m='702540'>editor is</span> <span
  m='702970'>clever,</span> <span m='703660'>it</span> <span
  m='703780'>will</span> <span m='703930'>use</span> <span
  m='704120'>hashing</span> <span m='704670'>in</span> <span
  m='704810'>order</span> <span m='705040'>to</span> <span
  m='705380'>search</span> <span m='705660'>for</span> <span
  m='705740'>that</span> <span m='705940'>string.</span> <span m='706260'>It's
  a</span> <span m='706580'>faster</span> <span m='706950'>way</span> <span
  m='707070'>to</span> <span m='707170'>do</span> <span m='707320'>it.</span>
  </p><p><span m='709770'>If</span> <span m='709890'>you</span> <span
  m='709980'>use</span> <span m='710150'>grep,</span> <span
  m='710500'>for</span> <span m='710670'>example,</span> <span
  m='711040'>in</span> <span m='711110'>Unix</span> <span m='712280'>it</span>
  <span m='712470'>does</span> <span m='712670'>it</span> <span
  m='712820'>in</span> <span m='712970'>a</span> <span m='713410'>fancy</span>
  <span m='713740'>way.</span> <span m='714410'>Every</span> <span
  m='714660'>time</span> <span m='714880'>you</span> <span m='714940'>do</span>
  <span m='715110'>a</span> <span m='715160'>Google</span> <span
  m='715430'>search</span> <span m='716240'>it's</span> <span
  m='716390'>essentially</span> <span m='716790'>using</span> <span
  m='717090'>this.</span> <span m='718150'>It's</span> <span
  m='718290'>solving</span> <span m='718600'>this</span> <span
  m='718760'>problem.</span> <span m='719310'>I</span> <span
  m='719410'>don't</span> <span m='719420'>know</span> <span
  m='719530'>what</span> <span m='719660'>algorithm,</span> <span
  m='720095'>but</span> <span m='720530'>we</span> <span m='720630'>could</span>
  <span m='720780'>guess.</span> <span m='721330'>Using</span> <span
  m='721670'>the</span> <span m='721760'>algorithms</span> <span
  m='722150'>we'll</span> <span m='722250'>cover</span> <span
  m='722550'>in</span> <span m='722670'>next</span> <span
  m='722940'>lecture.</span> <span m='724090'>It</span> <span
  m='724450'>wouldn't</span> <span m='724710'>surprise</span> <span
  m='725080'>me.</span> </p><p><span m='726650'>Also,</span> <span
  m='727160'>if</span> <span m='727430'>you</span> <span m='727610'>have</span>
  <span m='727880'>a</span> <span m='727980'>couple</span> <span
  m='728290'>strings</span> <span m='728660'>and</span> <span
  m='728730'>you</span> <span m='728830'>want</span> <span m='728990'>to</span>
  <span m='729040'>know</span> <span m='729250'>what</span> <span
  m='729410'>they</span> <span m='729500'>have</span> <span m='729700'>in</span>
  <span m='729800'>common,</span> <span m='733950'>how</span> <span
  m='734140'>similar</span> <span m='734540'>they</span> <span
  m='734700'>are?</span> <span m='735440'>Example,</span> <span
  m='735730'>you</span> <span m='735900'>have two</span> <span
  m='736050'>DNA</span> <span m='736450'>strings.</span> <span
  m='736800'>You</span> <span m='736910'>want</span> <span m='737040'>to</span>
  <span m='737090'>see</span> <span m='737240'>how</span> <span
  m='737370'>similar</span> <span m='737780'>they</span> <span
  m='737950'>are,</span> <span m='738860'>you</span> <span m='739100'>use</span>
  <span m='739720'>hashing.</span> <span m='740480'>And</span> <span
  m='740720'>you're</span> <span m='740820'>going</span> <span
  m='740930'>to</span> <span m='740990'>do</span> <span m='741100'>that</span>
  <span m='741370'>in</span> <span m='741580'>the</span> <span
  m='741660'>next</span> <span m='742010'>problem</span> <span
  m='742270'>set,</span> <span m='742610'>PS4,</span> <span
  m='743830'>which</span> <span m='744010'>goes</span> <span
  m='744190'>out</span> <span m='744290'>on</span> <span
  m='744410'>Thursday.</span> </p><p><span m='747000'>Also,</span> <span
  m='747400'>for</span> <span m='747570'>things</span> <span
  m='747920'>like</span> <span m='749440'>file</span> <span
  m='750770'>and</span> <span m='751170'>directory</span> <span
  m='751640'>synchronization.</span> <span m='758870'>So</span> <span
  m='759070'>on</span> <span m='759950'>Unix,</span> <span m='760280'>if</span>
  <span m='760380'>you</span> <span m='760610'>rsync</span> <span
  m='761150'>or</span> <span m='761290'>unison,</span> <span
  m='762050'>or,</span> <span m='762440'>I</span> <span m='762500'>guess,</span>
  <span m='762770'>modern</span> <span m='763120'>day--</span> <span
  m='763690'>these</span> <span m='763910'>days,</span> <span
  m='764470'>Dropbox,</span> <span m='766010'>MIT</span> <span
  m='766740'>startup--</span> <span m='767610'>Whenever</span> <span
  m='768040'>you're</span> <span m='768220'>synchronizing</span> <span
  m='768780'>files</span> <span m='769100'>between</span> <span
  m='769410'>two</span> <span m='769580'>locations,</span> <span
  m='769850'>you</span> <span m='770120'>use</span> <span
  m='770480'>hashing</span> <span m='770920'>to</span> <span
  m='771030'>tell</span> <span m='771250'>whether a</span> <span m='771480'>file
  has</span> <span m='771910'>changed,</span> <span m='772320'>or</span> <span
  m='772480'>whether a</span> <span m='772710'>directory</span> <span
  m='772985'>has</span> <span m='773260'>changed.</span> <span
  m='773920'>That's</span> <span m='774040'>a</span> <span m='774080'>big</span>
  <span m='774280'>idea.</span> <span m='776940'>Fairly</span> <span
  m='777580'>modern</span> <span m='777920'>idea.</span> </p><p><span
  m='779940'>And</span> <span m='780150'>also in</span> <span
  m='780530'>cryptography--</span> <span m='781940'>this</span> <span
  m='782060'>will be a</span> <span m='782510'>topic</span> <span
  m='782940'>of</span> <span m='783180'>next</span> <span
  m='783550'>Tuesday's</span> <span m='784780'>lecture.</span> <span
  m='787480'>If</span> <span m='787650'>you're</span> <span
  m='787880'>transferring</span> <span m='788410'>a</span> <span
  m='788470'>file</span> <span m='789230'>and</span> <span m='789400'>you</span>
  <span m='789520'>want</span> <span m='789700'>to</span> <span
  m='790060'>check</span> <span m='790390'>that you</span> <span
  m='790530'>actually</span> <span m='791020'>transferred</span> <span
  m='791440'>that</span> <span m='791760'>file,</span> <span
  m='792070'>and</span> <span m='792160'>there</span> <span
  m='792250'>wasn't</span> <span m='792580'>some</span> <span
  m='792810'>person</span> <span m='793150'>in</span> <span
  m='793260'>the</span> <span m='793330'>middle</span> <span
  m='794360'>corrupting</span> <span m='794870'>your</span> <span
  m='795010'>file</span> <span m='795770'>and</span> <span
  m='795900'>making</span> <span m='796150'>it</span> <span
  m='796220'>look</span> <span m='796470'>like</span> <span m='796670'>it</span>
  <span m='796760'>was</span> <span m='796910'>what</span> <span
  m='797070'>you</span> <span m='797180'>wanted</span> <span
  m='797520'>it</span> <span m='797630'>to</span> <span m='797730'>be,</span>
  <span m='798005'>you</span> <span m='798280'>use</span> <span
  m='799570'>something</span> <span m='799840'>called</span> <span
  m='800050'>cryptographic</span> <span m='800720'>hash</span> <span
  m='800940'>functions,</span> <span m='801420'>which</span> <span
  m='801690'>[INAUDIBLE]</span> <span m='801930'>will talk</span> <span
  m='802130'>about</span> <span m='802450'>on</span> <span
  m='802930'>Tuesday.</span> </p><p><span m='804420'>So</span> <span
  m='805800'>tons</span> <span m='806110'>of</span> <span
  m='806180'>motivation</span> <span m='806660'>for</span> <span
  m='806750'>dictionaries.</span> <span m='807230'>Let's</span> <span
  m='807430'>actually</span> <span m='807750'>do</span> <span
  m='807920'>it,</span> <span m='811890'>see</span> <span m='812090'>how</span>
  <span m='812300'>they are</span> <span m='812530'>done.</span> <span
  m='815630'>We're</span> <span m='815760'>going</span> <span
  m='815850'>to</span> <span m='815920'>start</span> <span
  m='816260'>with</span> <span m='816580'>sort of a</span> <span
  m='816940'>very</span> <span m='817220'>simple</span> <span
  m='818410'>straw</span> <span m='818750'>man,</span> <span
  m='820990'>and</span> <span m='821150'>then</span> <span
  m='821290'>we're</span> <span m='821410'>going</span> <span
  m='821570'>to</span> <span m='822190'>improve</span> <span
  m='822590'>it</span> <span m='823190'>until,</span> <span m='823340'>by</span>
  <span m='823530'>the</span> <span m='823660'>end</span> <span
  m='823800'>of</span> <span m='823880'>today,</span> <span m='824320'>we</span>
  <span m='824350'>have</span> <span m='824630'>a</span> <span
  m='824720'>really</span> <span m='824920'>good</span> <span
  m='825100'>way</span> <span m='825290'>to</span> <span m='825390'>solve</span>
  <span m='825660'>the</span> <span m='825740'>dictionary</span> <span
  m='826130'>problem</span> <span m='826870'>in</span> <span
  m='827020'>constant</span> <span m='827400'>time</span> <span
  m='828050'>for</span> <span m='828270'>operation.</span> </p><p><span
  m='834190'>So</span> <span m='834380'>the</span> <span
  m='834490'>really</span> <span m='834710'>simple</span> <span
  m='835000'>approach</span> <span m='835340'>is</span> <span
  m='835440'>called</span> <span m='835650'>a</span> <span
  m='835710'>direct</span> <span m='836090'>access</span> <span
  m='836500'>table.</span> <span m='840230'>So</span> <span
  m='840370'>it's</span> <span m='840450'>just</span> <span m='840630'>a</span>
  <span m='840680'>big</span> <span m='840910'>table,</span> <span
  m='842920'>an</span> <span m='843210'>array.</span> <span
  m='845450'>You</span> <span m='845640'>have--</span> <span
  m='849720'>the</span> <span m='849880'>index</span> <span
  m='850330'>into</span> <span m='850540'>the</span> <span
  m='850700'>array</span> <span m='851400'>is</span> <span m='851640'>the</span>
  <span m='851770'>key.</span> <span m='854340'>So,</span> <span
  m='860360'>store</span> <span m='860760'>items</span> <span
  m='861120'>in</span> <span m='861360'>an</span> <span m='861620'>array,</span>
  <span m='864930'>indexed</span> <span m='866890'>by</span> <span
  m='867220'>key.</span> </p><p><span m='871990'>And</span> <span
  m='872140'>in</span> <span m='872200'>fact,</span> <span
  m='872440'>Python</span> <span m='872850'>kind</span> <span
  m='873030'>makes</span> <span m='873320'>you</span> <span
  m='873410'>think</span> <span m='873630'>about</span> <span
  m='873940'>this</span> <span m='874200'>because</span> <span
  m='874510'>the</span> <span m='874610'>Python</span> <span
  m='874970'>notation</span> <span m='875450'>for</span> <span
  m='875550'>accessing</span> <span m='875990'>dictionaries</span> <span
  m='876520'>is</span> <span m='876660'>identical</span> <span
  m='877530'>to</span> <span m='877750'>the</span> <span
  m='877850'>notation</span> <span m='878360'>for</span> <span
  m='878490'>accessing</span> <span m='878950'>arrays.</span> <span
  m='880120'>But</span> <span m='880230'>with</span> <span
  m='880360'>arrays,</span> <span m='880840'>the</span> <span
  m='880950'>keys</span> <span m='881260'>are</span> <span
  m='881330'>restricted</span> <span m='881810'>to</span> <span
  m='881920'>be</span> <span m='882290'>non-negative</span> <span
  m='882850'>integers,</span> <span m='883210'>0</span> <span
  m='883560'>through</span> <span m='883910'>n</span> <span
  m='884010'>minus</span> <span m='884290'>1.</span> <span m='885170'>So</span>
  <span m='885350'>why</span> <span m='885540'>not</span> <span
  m='885600'>just</span> <span m='885820'>implement</span> <span m='886270'>it
  that</span> <span m='886460'>way?</span> </p><p><span m='886740'>If</span>
  <span m='886950'>your</span> <span m='887100'>keys</span> <span
  m='887460'>happen</span> <span m='887820'>to</span> <span m='887890'>be</span>
  <span m='888060'>integers</span> <span m='889140'>I</span> <span
  m='889270'>could</span> <span m='889460'>just</span> <span
  m='889620'>store</span> <span m='890080'>all</span> <span m='890170'>my</span>
  <span m='890360'>items</span> <span m='890660'>in</span> <span
  m='890750'>a</span> <span m='890820'>giant</span> <span
  m='891210'>array.</span> <span m='892410'>So</span> <span m='892690'>if</span>
  <span m='892890'>I</span> <span m='893060'>just</span> <span
  m='893300'>want</span> <span m='893470'>to</span> <span
  m='893540'>store</span> <span m='893980'>an</span> <span
  m='894070'>item</span> <span m='894330'>here</span> <span
  m='895630'>with</span> <span m='895820'>key</span> <span m='896070'>2,</span>
  <span m='896385'>call</span> <span m='896700'>that,</span> <span
  m='897330'>maybe,</span> <span m='897580'>item</span> <span
  m='897870'>2,</span> <span m='898620'>I</span> <span m='898710'>just</span>
  <span m='898880'>put</span> <span m='899020'>that</span> <span
  m='899250'>there.</span> <span m='900130'>If</span> <span m='900210'>I</span>
  <span m='900260'>want</span> <span m='900420'>to</span> <span
  m='900480'>store</span> <span m='900700'>something</span> <span
  m='901150'>with</span> <span m='901950'>key</span> <span m='902310'>4</span>
  <span m='903010'>I'll</span> <span m='903200'>just</span> <span
  m='903370'>put</span> <span m='903550'>it</span> <span
  m='903650'>there.</span> </p><p><span m='904560'>Everything</span> <span
  m='905060'>else</span> <span m='905300'>is</span> <span
  m='905440'>going</span> <span m='905590'>to</span> <span m='905660'>be</span>
  <span m='905810'>null,</span> <span m='906230'>or</span> <span
  m='906300'>none,</span> <span m='906640'>or</span> <span
  m='906690'>whatever.</span> <span m='907950'>So</span> <span
  m='908190'>lots</span> <span m='908460'>of</span> <span
  m='908550'>blank</span> <span m='909010'>entries.</span> <span
  m='909290'>Whatever</span> <span m='909620'>keys</span> <span
  m='909870'>I</span> <span m='909940'>don't</span> <span m='910220'>use</span>
  <span m='911130'>I'll</span> <span m='911290'>just</span> <span
  m='911490'>put</span> <span m='912100'>a</span> <span m='912170'>null</span>
  <span m='912430'>value</span> <span m='912800'>there.</span> <span
  m='913380'>Every</span> <span m='913650'>key</span> <span
  m='913840'>that</span> <span m='913980'>I</span> <span m='914610'>want</span>
  <span m='914910'>to</span> <span m='915010'>put</span> <span
  m='915230'>into</span> <span m='915410'>the</span> <span
  m='915520'>dictionary</span> <span m='916000'>I'll</span> <span
  m='916150'>just</span> <span m='916230'>store it</span> <span
  m='916600'>at</span> <span m='916830'>the</span> <span
  m='916960'>corresponding</span> <span m='917490'>position.</span> <span
  m='919620'>What's</span> <span m='919870'>bad</span> <span
  m='920080'>about</span> <span m='920340'>this?</span> <span
  m='925076'>Yeah.</span> </p><p><span m='925560'>AUDIENCE:</span> <span
  m='926044'>It's</span> <span m='926528'>hard</span> <span m='927012'>to</span>
  <span m='927496'>associate</span> <span m='927657'>something</span> <span
  m='927818'>with</span> <span m='927980'>just an</span> <span
  m='928464'>integer.</span> </p><p><span m='928960'>PROFESSOR: Hard to</span>
  <span m='929230'>associate</span> <span m='929820'>something</span> <span
  m='930070'>with an</span> <span m='930300'>integer.</span> <span
  m='930670'>Good.</span> <span m='931110'>That's</span> <span
  m='931440'>one</span> <span m='931670'>problem.</span> <span
  m='933360'>There's</span> <span m='934090'>actually</span> <span
  m='934460'>two</span> <span m='934700'>big</span> <span
  m='934940'>problems</span> <span m='935420'>with</span> <span
  m='935520'>this</span> <span m='935630'>structure.</span> <span
  m='936100'>I</span> <span m='936140'>want</span> <span m='936400'>both</span>
  <span m='936630'>of</span> <span m='936710'>them.</span> <span
  m='937580'>So</span> <span m='939970'>bad--</span> <span
  m='942140'>badness</span> <span m='944730'>number</span> <span
  m='945050'>one</span> <span m='945870'>is</span> <span m='946890'>keys</span>
  <span m='947300'>may</span> <span m='947420'>not</span> <span
  m='947610'>be</span> <span m='947750'>integers.</span> <span
  m='960240'>Good.</span> <span m='963070'>Another</span> <span
  m='963300'>problem.</span> <span m='964756'>Yeah.</span> </p><p><span
  m='965254'>AUDIENCE: Possibility</span> <span m='965752'>of collision.</span>
  </p><p><span m='966750'>PROFESSOR: Possibility of</span> <span
  m='967250'>collision.</span> <span m='967820'>So</span> <span
  m='968050'>here</span> <span m='968320'>there's</span> <span
  m='968530'>no</span> <span m='968720'>collisions.</span> <span
  m='969840'>We'll</span> <span m='969970'>get to</span> <span
  m='970190'>collisions</span> <span m='970540'>in</span> <span
  m='970650'>a</span> <span m='970690'>moment,</span> <span m='971040'>but
  a</span> <span m='971130'>collision</span> <span m='971510'>is</span> <span
  m='971610'>when</span> <span m='971810'>two</span> <span
  m='972010'>items</span> <span m='973020'>go</span> <span m='973170'>to</span>
  <span m='973240'>the</span> <span m='973380'>same</span> <span
  m='973820'>slot</span> <span m='974190'>in</span> <span m='974260'>this</span>
  <span m='974430'>table.</span> </p><p><span m='976330'>And</span> <span
  m='977020'>we</span> <span m='977210'>defined</span> <span
  m='977760'>the</span> <span m='977870'>problem</span> <span
  m='978290'>so</span> <span m='978420'>there</span> <span
  m='978570'>weren't</span> <span m='978760'>collisions.</span> <span
  m='979180'>We</span> <span m='979260'>said</span> <span
  m='979420'>whenever</span> <span m='979740'>we</span> <span
  m='979880'>insert</span> <span m='980240'>item</span> <span
  m='980490'>with</span> <span m='980630'>the</span> <span
  m='980720'>same</span> <span m='981010'>key</span> <span m='981120'>you</span>
  <span m='981390'>overwrite</span> <span m='981870'>whatever</span> <span
  m='982250'>is</span> <span m='982340'>there.</span> <span m='982710'>So</span>
  <span m='982960'>collisions</span> <span m='983320'>are</span> <span
  m='983420'>OK.</span> <span m='983630'>They</span> <span
  m='983780'>will</span> <span m='983910'>be</span> <span m='984030'>a</span>
  <span m='984090'>problem</span> <span m='984420'>in</span> <span
  m='984540'>a</span> <span m='984580'>moment,</span> <span m='985010'>so</span>
  <span m='985250'>save</span> <span m='985520'>your</span> <span
  m='985670'>answer.</span> <span m='986130'>Yeah?</span> </p><p><span
  m='986540'>AUDIENCE: [INAUDIBLE]</span> </p><p><span m='989840'>PROFESSOR:
  Running</span> <span m='990150'>time?</span> </p><p><span m='990510'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='992070'>PROFESSOR: For</span> <span
  m='992210'>deletion?</span> <span m='993200'>Actually,</span> <span
  m='993510'>running</span> <span m='993770'>time</span> <span
  m='993980'>is</span> <span m='994080'>going</span> <span m='994200'>to</span>
  <span m='994270'>be</span> <span m='994370'>great.</span> <span
  m='994700'>If</span> <span m='994850'>I</span> <span m='994910'>want</span>
  <span m='995090'>to</span> <span m='995160'>insert--</span> <span
  m='996070'>I</span> <span m='996150'>mean,</span> <span m='996730'>I</span>
  <span m='996830'>do</span> <span m='997030'>these</span> <span
  m='997250'>operations</span> <span m='997860'>but</span> <span
  m='998010'>on</span> <span m='998290'>array</span> <span
  m='998620'>instead</span> <span m='998940'>of</span> <span m='999030'>a</span>
  <span m='999080'>dictionary.</span> <span m='999900'>So</span> <span
  m='1000260'>if</span> <span m='1000570'>I</span> <span m='1000630'>want</span>
  <span m='1000790'>insert</span> <span m='1001160'>I</span> <span
  m='1001230'>just</span> <span m='1001640'>put</span> <span
  m='1001800'>something</span> <span m='1002120'>there.</span> <span
  m='1002430'>If</span> <span m='1002680'>I</span> <span m='1002720'>want</span>
  <span m='1002860'>to</span> <span m='1002920'>delete</span> <span
  m='1003270'>I</span> <span m='1003320'>just set</span> <span m='1003760'>it
  to</span> <span m='1003860'>null.</span> <span m='1004480'>If I</span> <span
  m='1004540'>want</span> <span m='1004690'>to</span> <span
  m='1004750'>search</span> <span m='1005100'>I</span> <span
  m='1005140'>just</span> <span m='1005310'>go</span> <span
  m='1005460'>there</span> <span m='1005600'>and</span> <span
  m='1005730'>see</span> <span m='1005970'>is</span> <span m='1006110'>it</span>
  <span m='1006250'>null?</span> <span m='1006950'>Yeah?</span> </p><p><span
  m='1007645'>AUDIENCE: It's a</span> <span m='1008130'>gigantic</span> <span
  m='1008615'>memory hog</span> </p><p><span m='1009100'>PROFESSOR: It's</span>
  <span m='1009390'>gigantic</span> <span m='1009970'>memory</span> <span
  m='1010350'>hog.</span> <span m='1010480'>I</span> <span
  m='1011170'>like</span> <span m='1011330'>that</span> <span
  m='1011540'>phrasing.</span> <span m='1017750'>Not</span> <span
  m='1018030'>always</span> <span m='1018430'>of</span> <span
  m='1018540'>course.</span> <span m='1018920'>If</span> <span
  m='1019050'>it</span> <span m='1019130'>happens</span> <span m='1019510'>that
  your</span> <span m='1019790'>keys</span> <span m='1020790'>are--</span> <span
  m='1021650'>the</span> <span m='1022240'>set</span> <span
  m='1022410'>of</span> <span m='1022490'>possible</span> <span
  m='1022860'>keys</span> <span m='1023100'>is</span> <span
  m='1023210'>not</span> <span m='1023450'>too</span> <span
  m='1023580'>giant</span> <span m='1024619'>then</span> <span
  m='1025390'>life</span> <span m='1025619'>is</span> <span
  m='1025740'>good.</span> </p><p><span m='1026470'>Let's see</span> <span
  m='1026730'>If</span> <span m='1026900'>I</span> <span
  m='1026980'>cannot</span> <span m='1027310'>kill</span> <span
  m='1027470'>somebody</span> <span m='1027859'>today.</span> <span
  m='1028593'>Oh</span> <span m='1028956'>yes.</span> <span
  m='1029859'>Very</span> <span m='1030030'>good.</span> </p><p><span
  m='1031650'>But</span> <span m='1031940'>if</span> <span
  m='1032119'>you</span> <span m='1032250'>have</span> <span
  m='1032390'>a</span> <span m='1032440'>lot</span> <span m='1032650'>of</span>
  <span m='1032890'>keys,</span> <span m='1033290'>you</span> <span
  m='1033490'>need</span> <span m='1033829'>one</span> <span
  m='1034650'>slot</span> <span m='1035119'>in</span> <span
  m='1035290'>your</span> <span m='1035750'>array</span> <span
  m='1036819'>per</span> <span m='1037162'>key.</span> <span
  m='1037849'>That</span> <span m='1038020'>could</span> <span
  m='1038140'>be</span> <span m='1038260'>a</span> <span m='1038319'>lot.</span>
  <span m='1039290'>Maybe</span> <span m='1039650'>your</span> <span
  m='1039740'>keys</span> <span m='1040190'>are</span> <span
  m='1042050'>64-bit</span> <span m='1042700'>integers.</span> <span
  m='1043920'>Then</span> <span m='1044060'>you</span> <span
  m='1044150'>need</span> <span m='1044339'>264</span> <span
  m='1045200'>slots</span> <span m='1045750'>just</span> <span
  m='1046069'>to</span> <span m='1046240'>store</span> <span
  m='1046470'>one</span> <span m='1046819'>measly</span> <span
  m='1047160'>dictionary.</span> <span m='1048089'>That's</span> <span
  m='1048329'>huge.</span> <span m='1050210'>I</span> <span
  m='1050310'>guess</span> <span m='1050510'>there's</span> <span
  m='1050640'>also</span> <span m='1050870'>the</span> <span
  m='1051100'>running</span> <span m='1051370'>time of</span> <span
  m='1051650'>initialize</span> <span m='1052290'>that.</span> </p><p><span
  m='1053000'>But</span> <span m='1053120'>at</span> <span
  m='1053230'>the</span> <span m='1053300'>very</span> <span
  m='1053530'>least,</span> <span m='1053980'>you</span> <span
  m='1053990'>have</span> <span m='1054170'>huge</span> <span
  m='1054530'>space</span> <span m='1054860'>hog.</span> <span
  m='1055530'>This</span> <span m='1055690'>is</span> <span
  m='1055800'>bad.</span> <span m='1057410'>So</span> <span
  m='1057510'>we're</span> <span m='1057620'>going</span> <span
  m='1057710'>to</span> <span m='1057760'>fix</span> <span
  m='1058020'>both</span> <span m='1058230'>of</span> <span
  m='1058290'>these</span> <span m='1058420'>problems</span> <span
  m='1058900'>one</span> <span m='1058990'>at</span> <span m='1059080'>a</span>
  <span m='1059180'>time.</span> </p><p><span m='1060820'>First</span> <span
  m='1061100'>problem</span> <span m='1061350'>we're</span> <span
  m='1061460'>going</span> <span m='1061560'>to</span> <span
  m='1061630'>talk</span> <span m='1061850'>about</span> <span
  m='1063560'>is</span> <span m='1063860'>what</span> <span
  m='1064060'>if</span> <span m='1064160'>your</span> <span
  m='1064350'>keys</span> <span m='1064580'>aren't</span> <span
  m='1064670'>integers?</span> <span m='1066210'>Because</span> <span
  m='1066370'>if</span> <span m='1066460'>your</span> <span
  m='1066570'>keys</span> <span m='1066810'>aren't</span> <span
  m='1067060'>integers</span> <span m='1067490'>you</span> <span
  m='1067590'>can't</span> <span m='1067790'>use</span> <span
  m='1068030'>this</span> <span m='1068160'>at all.</span> <span
  m='1068430'>So</span> <span m='1068700'>lets</span> <span
  m='1068920'>at</span> <span m='1068970'>least</span> <span
  m='1069210'>get</span> <span m='1069440'>something</span> <span
  m='1069730'>that</span> <span m='1069860'>works.</span> </p><p><span
  m='1078620'>And</span> <span m='1079020'>this</span> <span
  m='1079230'>is</span> <span m='1079400'>a</span> <span
  m='1079460'>notion</span> <span m='1079840'>called</span> <span
  m='1080130'>prehashing.</span> <span m='1083670'>I guess</span> <span
  m='1083860'>different</span> <span m='1084120'>people</span> <span
  m='1084380'>call</span> <span m='1084580'>it</span> <span
  m='1084650'>different</span> <span m='1084940'>things.</span> <span
  m='1085240'>Unfortunately</span> <span m='1086140'>Python</span> <span
  m='1086480'>calls</span> <span m='1086700'>it</span> <span
  m='1086790'>hash.</span> <span m='1087800'>It's</span> <span
  m='1087970'>not</span> <span m='1088190'>hashing,</span> <span
  m='1088870'>it's</span> <span m='1089070'>prehashing.</span> <span
  m='1091710'>Emphasized</span> <span m='1092165'>the</span> <span
  m='1092620'>"pre"</span> <span m='1092940'>here.</span> </p><p><span
  m='1093960'>So</span> <span m='1094610'>prehash</span> <span
  m='1095060'>function</span> <span m='1096080'>maps</span> <span
  m='1098450'>whatever</span> <span m='1098870'>keys</span> <span
  m='1099250'>you</span> <span m='1099360'>have</span> <span
  m='1101290'>to</span> <span m='1101910'>non-negative</span> <span
  m='1102760'>integers.</span> <span m='1108410'>At</span> <span
  m='1108580'>this</span> <span m='1108740'>point</span> <span
  m='1108930'>we're</span> <span m='1109020'>not</span> <span
  m='1109280'>worrying</span> <span m='1109560'>about</span> <span
  m='1109770'>how</span> <span m='1110000'>big</span> <span
  m='1110230'>those</span> <span m='1110410'>integers</span> <span
  m='1110800'>are.</span> <span m='1110950'>They</span> <span
  m='1111080'>could</span> <span m='1111210'>be</span> <span
  m='1111330'>giant.</span> <span m='1112270'>We're</span> <span
  m='1112400'>not</span> <span m='1112590'>going</span> <span
  m='1112680'>to</span> <span m='1113060'>fix</span> <span
  m='1113450'>the</span> <span m='1113530'>second</span> <span
  m='1113860'>problem</span> <span m='1114130'>til</span> <span
  m='1114290'>later.</span> </p><p><span m='1114920'>First</span> <span
  m='1115290'>problem</span> <span m='1115580'>is</span> <span
  m='1115700'>if</span> <span m='1115830'>I</span> <span m='1115890'>have</span>
  <span m='1116090'>some</span> <span m='1116320'>key,</span> <span
  m='1116640'>maybe</span> <span m='1116870'>it's</span> <span
  m='1117010'>a</span> <span m='1117070'>string,</span> <span
  m='1117810'>it's</span> <span m='1118010'>whatever,</span> <span
  m='1119100'>it's</span> <span m='1119160'>an</span> <span
  m='1119260'>object,</span> <span m='1120830'>how</span> <span
  m='1121150'>do</span> <span m='1121300'>I</span> <span m='1121410'>map</span>
  <span m='1121740'>it</span> <span m='1122040'>to</span> <span
  m='1122130'>some</span> <span m='1122350'>integer</span> <span
  m='1122740'>so</span> <span m='1122880'>I</span> <span
  m='1122960'>could,</span> <span m='1123140'>at</span> <span
  m='1123210'>least</span> <span m='1123470'>in</span> <span
  m='1123570'>principle,</span> <span m='1124100'>put</span> <span
  m='1124270'>it</span> <span m='1124390'>in</span> <span m='1124540'>a</span>
  <span m='1124610'>direct</span> <span m='1124950'>access</span> <span
  m='1125720'>table.</span> <span m='1128080'>There's</span> <span
  m='1128360'>a</span> <span m='1128430'>theoretical</span> <span
  m='1128990'>answer</span> <span m='1129200'>to</span> <span
  m='1129270'>how</span> <span m='1129420'>to</span> <span m='1129530'>do</span>
  <span m='1129640'>this,</span> <span m='1130010'>and</span> <span
  m='1130210'>then</span> <span m='1130400'>there's</span> <span
  m='1130610'>the</span> <span m='1131160'>practical</span> <span
  m='1131670'>answer.</span> <span m='1132040'>how</span> <span
  m='1132060'>to</span> <span m='1132170'>do</span> <span
  m='1132280'>this.</span> <span m='1132560'>I'll</span> <span
  m='1132660'>start</span> <span m='1132920'>with</span> <span
  m='1133360'>the</span> <span m='1134170'>mathematical.</span> </p><p><span
  m='1135710'>In</span> <span m='1135890'>theory,</span> <span m='1139650'>I
  like</span> <span m='1139960'>this,</span> <span m='1140290'>keys</span> <span
  m='1141620'>are</span> <span m='1143810'>finite</span> <span
  m='1144105'>and</span> <span m='1144400'>discrete.</span> <span
  m='1148350'>OK.</span> <span m='1148510'>We</span> <span
  m='1148720'>know</span> <span m='1149390'>that</span> <span
  m='1149550'>anything</span> <span m='1149980'>on</span> <span
  m='1150080'>the</span> <span m='1150160'>computer</span> <span
  m='1150580'>could,</span> <span m='1150700'>ultimately,</span> <span
  m='1151210'>be</span> <span m='1151360'>written</span> <span
  m='1151590'>down</span> <span m='1151820'>as</span> <span m='1151950'>a</span>
  <span m='1152040'>string</span> <span m='1152310'>of</span> <span
  m='1152380'>bits.</span> <span m='1153590'>So</span> <span
  m='1154100'>a</span> <span m='1154160'>string</span> <span
  m='1154430'>of</span> <span m='1154490'>bits</span> <span
  m='1154840'>represents</span> <span m='1155400'>an</span> <span
  m='1155490'>integer.</span> <span m='1156405'>So</span> <span
  m='1156840'>we're</span> <span m='1157110'>done.</span> </p><p><span
  m='1164160'>So</span> <span m='1164290'>in</span> <span
  m='1164400'>theory,</span> <span m='1164640'>this</span> <span
  m='1164830'>is</span> <span m='1164950'>easy.</span> <span
  m='1167840'>And</span> <span m='1168050'>we're</span> <span
  m='1168210'>going</span> <span m='1168460'>to</span> <span
  m='1168570'>assume</span> <span m='1169630'>in</span> <span
  m='1169770'>this</span> <span m='1169940'>class,</span> <span
  m='1170440'>because</span> <span m='1170590'>it's</span> <span
  m='1170670'>sort</span> <span m='1170970'>of a</span> <span
  m='1171040'>theory</span> <span m='1171270'>class,</span> <span
  m='1171710'>that</span> <span m='1172350'>this</span> <span
  m='1172560'>is</span> <span m='1172680'>what's</span> <span
  m='1172890'>happening.</span> <span m='1173400'>At</span> <span
  m='1173480'>least</span> <span m='1173640'>for</span> <span
  m='1173750'>analysis,</span> <span m='1174350'>we're</span> <span
  m='1174490'>always</span> <span m='1174660'>going</span> <span
  m='1174770'>to</span> <span m='1174840'>analyze</span> <span
  m='1175220'>things</span> <span m='1175430'>as</span> <span
  m='1175580'>if</span> <span m='1175750'>this</span> <span
  m='1175920'>is</span> <span m='1176030'>what's</span> <span
  m='1176230'>happening.</span> </p><p><span m='1177040'>Now</span> <span
  m='1177200'>in</span> <span m='1177270'>reality,</span> <span
  m='1177780'>people</span> <span m='1178070'>don't</span> <span
  m='1178240'>always</span> <span m='1178480'>do</span> <span
  m='1178600'>this.</span> <span m='1179070'>In</span> <span
  m='1179200'>particular--</span> <span m='1182280'>I'll go</span> <span
  m='1182760'>somewhere</span> <span m='1183120'>else.</span> <span
  m='1184060'>In</span> <span m='1184220'>Python</span> <span
  m='1185535'>it's</span> <span m='1185810'>not</span> <span
  m='1185980'>quite</span> <span m='1186270'>so</span> <span
  m='1186410'>simple,</span> <span m='1205970'>but</span> <span
  m='1206220'>at</span> <span m='1206290'>least</span> <span
  m='1206510'>you</span> <span m='1206590'>get</span> <span
  m='1206740'>to</span> <span m='1206850'>see</span> <span
  m='1206990'>what's</span> <span m='1207230'>going</span> <span
  m='1207500'>on.</span> </p><p><span m='1207650'>There's</span> <span
  m='1207820'>a</span> <span m='1207890'>function</span> <span
  m='1208330'>called</span> <span m='1208580'>hash,</span> <span
  m='1208940'>which</span> <span m='1209100'>should</span> <span
  m='1209300'>be</span> <span m='1209420'>called</span> <span
  m='1209710'>prehash,</span> <span m='1210940'>and</span> <span
  m='1211340'>it,</span> <span m='1211720'>given</span> <span
  m='1212120'>an</span> <span m='1212230'>object,</span> <span
  m='1213140'>it</span> <span m='1213340'>produces</span> <span
  m='1213990'>a</span> <span m='1214290'>non--</span> <span
  m='1214780'>I'm</span> <span m='1215190'>not</span> <span
  m='1215340'>sure,</span> <span m='1215530'>actually,</span> <span
  m='1215860'>if</span> <span m='1215990'>it's</span> <span
  m='1216120'>non-negative.</span> <span m='1216580'>It's</span> <span
  m='1216700'>not</span> <span m='1216850'>a</span> <span m='1216900'>big</span>
  <span m='1217050'>deal</span> <span m='1217320'>if it</span> <span
  m='1217400'>has</span> <span m='1217580'>a</span> <span
  m='1217710'>minus</span> <span m='1218190'>sign</span> <span
  m='1219270'>because</span> <span m='1219440'>then</span> <span
  m='1219600'>you</span> <span m='1219720'>could</span> <span
  m='1219830'>just</span> <span m='1220000'>use</span> <span
  m='1220160'>this</span> <span m='1220650'>and get</span> <span m='1220870'>rid
  of</span> <span m='1220930'>the</span> <span m='1221070'>sign.</span>
  </p><p><span m='1221770'>But</span> <span m='1221950'>it</span> <span
  m='1222040'>maps</span> <span m='1222420'>every</span> <span
  m='1222710'>object</span> <span m='1223110'>to</span> <span
  m='1223390'>an</span> <span m='1223520'>integer,</span> <span
  m='1224590'>or</span> <span m='1224710'>every</span> <span
  m='1224970'>hashable</span> <span m='1225410'>object,</span> <span
  m='1225850'>technically.</span> <span m='1227240'>But</span> <span
  m='1227500'>pretty</span> <span m='1227710'>much</span> <span
  m='1227900'>anything</span> <span m='1228320'>can</span> <span
  m='1228450'>be</span> <span m='1228560'>mapped</span> <span
  m='1228800'>to</span> <span m='1228880'>an</span> <span
  m='1228980'>integer,</span> <span m='1229630'>one</span> <span
  m='1229850'>way</span> <span m='1229950'>or</span> <span
  m='1230060'>another.</span> <span m='1231350'>And</span> <span
  m='1231480'>so</span> <span m='1231610'>for</span> <span
  m='1231730'>example,</span> <span m='1232070'>if</span> <span
  m='1232350'>you</span> <span m='1232510'>given</span> <span m='1232790'>it
  an</span> <span m='1232910'>integer</span> <span m='1233350'>it just</span>
  <span m='1233560'>returns</span> <span m='1233860'>the</span> <span
  m='1233970'>integer.</span> <span m='1235040'>So</span> <span
  m='1235100'>that's</span> <span m='1235330'>pretty</span> <span
  m='1235540'>easy.</span> </p><p><span m='1236220'>If you</span> <span
  m='1236310'>give</span> <span m='1236500'>it</span> <span m='1236570'>a</span>
  <span m='1236630'>string</span> <span m='1237460'>it</span> <span
  m='1237610'>does</span> <span m='1238240'>something.</span> <span
  m='1239300'>I</span> <span m='1239450'>don't</span> <span
  m='1239590'>know</span> <span m='1239660'>exactly</span> <span
  m='1240070'>what</span> <span m='1240200'>it</span> <span
  m='1240320'>does,</span> <span m='1240730'>but</span> <span
  m='1240880'>there</span> <span m='1241000'>are</span> <span
  m='1241050'>some</span> <span m='1241240'>issues.</span> <span
  m='1241580'>For</span> <span m='1241740'>example,</span> <span
  m='1245450'>hash</span> <span m='1246000'>of</span> <span
  m='1247550'>this</span> <span m='1247790'>string,</span> <span
  m='1248370'>backslash</span> <span m='1248850'>0B</span> <span
  m='1251668'>is</span> <span m='1252130'>equal</span> <span
  m='1252510'>to</span> <span m='1253690'>the</span> <span
  m='1253800'>hash</span> <span m='1254380'>of</span> <span
  m='1255740'>backslash</span> <span m='1256210'>0</span> <span
  m='1256760'>backslash</span> <span m='1257230'>0C</span> <span
  m='1260930'>64.</span> <span m='1262880'>It's</span> <span
  m='1263050'>a</span> <span m='1263100'>little</span> <span
  m='1263300'>tricky</span> <span m='1263560'>to</span> <span
  m='1263640'>find</span> <span m='1263860'>these</span> <span
  m='1264010'>examples,</span> <span m='1264450'>but</span> <span
  m='1264620'>they're</span> <span m='1264780'>out</span> <span
  m='1264970'>there.</span> <span m='1266140'>And</span> <span
  m='1266350'>I</span> <span m='1266410'>guess,</span> <span m='1266660'>this
  is</span> <span m='1266850'>probably</span> <span m='1267130'>the</span> <span
  m='1267710'>lowest</span> <span m='1268160'>one</span> <span
  m='1268390'>in</span> <span m='1268790'>a</span> <span
  m='1268850'>certain</span> <span m='1269130'>measure.</span> </p><p><span
  m='1270640'>So</span> <span m='1270870'>it's</span> <span m='1271550'>a</span>
  <span m='1271620'>concern.</span> <span m='1272810'>In</span> <span
  m='1272970'>practice</span> <span m='1273390'>you have</span> <span
  m='1273540'>to</span> <span m='1273600'>be</span> <span
  m='1273700'>careful</span> <span m='1274020'>about</span> <span
  m='1274270'>these</span> <span m='1274440'>things</span> <span
  m='1274670'>because</span> <span m='1274860'>what</span> <span
  m='1275020'>you'd</span> <span m='1275160'>like--</span> <span
  m='1276110'>in</span> <span m='1276460'>an</span> <span
  m='1276690'>ideal</span> <span m='1277070'>world,</span> <span
  m='1277540'>and</span> <span m='1277660'>in</span> <span
  m='1277780'>the</span> <span m='1277870'>theoretical</span> <span
  m='1278380'>world--</span> <span m='1282000'>this</span> <span
  m='1282370'>prehash</span> <span m='1282890'>function</span> <span
  m='1283850'>of</span> <span m='1284010'>x,</span> <span m='1285980'>if</span>
  <span m='1286170'>it</span> <span m='1286290'>equals</span> <span
  m='1286710'>the</span> <span m='1286770'>prehash</span> <span
  m='1287090'>function</span> <span m='1287410'>of</span> <span
  m='1287490'>y,</span> <span m='1287820'>this</span> <span
  m='1288020'>should</span> <span m='1288300'>only</span> <span
  m='1288670'>happen</span> <span m='1289840'>when</span> <span
  m='1290270'>x=y,</span> <span m='1291380'>when</span> <span
  m='1291530'>they're</span> <span m='1291690'>the</span> <span
  m='1291810'>same</span> <span m='1292280'>thing.</span> <span
  m='1295450'>And</span> <span m='1295790'>equals</span> <span
  m='1296140'>equal</span> <span m='1296490'>sense,</span> <span
  m='1296830'>I</span> <span m='1296890'>guess,</span> <span
  m='1297170'>would</span> <span m='1297260'>be</span> <span
  m='1297370'>the</span> <span m='1297490'>technical</span> <span
  m='1298980'>version.</span> </p><p><span m='1300100'>Sadly,</span> <span
  m='1300500'>in</span> <span m='1301160'>Python</span> <span
  m='1301500'>this</span> <span m='1301650'>is</span> <span
  m='1301780'>not</span> <span m='1302060'>quite</span> <span
  m='1302320'>true.</span> <span m='1302830'>But</span> <span
  m='1303410'>mostly</span> <span m='1303760'>true.</span> <span
  m='1308030'>Let's</span> <span m='1308320'>see.</span> <span
  m='1310420'>If</span> <span m='1310580'>you</span> <span
  m='1310700'>define</span> <span m='1311040'>a</span> <span
  m='1311120'>custom</span> <span m='1311490'>object,</span> <span
  m='1312360'>you</span> <span m='1312490'>may</span> <span
  m='1312600'>know</span> <span m='1312780'>this,</span> <span m='1313460'>there
  is</span> <span m='1313730'>an</span> <span m='1313850'>__hash__</span> <span
  m='1316956'>method</span> <span m='1317360'>you</span> <span
  m='1317470'>can</span> <span m='1317600'>implement,</span> <span
  m='1318020'>which</span> <span m='1319170'>tells</span> <span
  m='1319750'>Python</span> <span m='1320050'>what</span> <span
  m='1320230'>to</span> <span m='1320330'>do</span> <span
  m='1321060'>when</span> <span m='1321180'>you</span> <span
  m='1321260'>call</span> <span m='1321470'>hash</span> <span
  m='1321740'>of</span> <span m='1321830'>your</span> <span
  m='1321960'>object.</span> </p><p><span m='1322480'>If</span> <span
  m='1322510'>you</span> <span m='1322620'>don't,</span> <span
  m='1323610'>it</span> <span m='1323780'>uses</span> <span
  m='1324780'>the</span> <span m='1324900'>default</span> <span
  m='1325380'>of</span> <span m='1325580'>id,</span> <span
  m='1326440'>which</span> <span m='1326680'>is</span> <span
  m='1326960'>the</span> <span m='1327100'>physical</span> <span
  m='1327570'>location</span> <span m='1328060'>of</span> <span
  m='1328150'>your</span> <span m='1328330'>object</span> <span
  m='1328690'>in</span> <span m='1328770'>memory.</span> <span
  m='1329230'>So</span> <span m='1329660'>as</span> <span
  m='1329740'>long</span> <span m='1329920'>as</span> <span
  m='1329980'>your</span> <span m='1330110'>object</span> <span
  m='1330380'>isn't</span> <span m='1330470'>moving</span> <span
  m='1330790'>around</span> <span m='1331070'>in</span> <span
  m='1331110'>memory</span> <span m='1331450'>this</span> <span
  m='1331640'>is</span> <span m='1331760'>a</span> <span
  m='1331820'>pretty</span> <span m='1332050'>good</span> <span
  m='1332570'>hash</span> <span m='1332830'>function</span> <span
  m='1333130'>because</span> <span m='1333800'>no</span> <span
  m='1333920'>two</span> <span m='1334100'>items</span> <span
  m='1334370'>occupy</span> <span m='1334730'>the</span> <span
  m='1334830'>same</span> <span m='1335070'>space</span> <span
  m='1335430'>in</span> <span m='1335510'>memory.</span> <span
  m='1337850'>So</span> <span m='1338390'>that's</span> <span
  m='1338610'>just</span> <span m='1339190'>implementation</span> <span
  m='1339860'>side</span> <span m='1340090'>of</span> <span
  m='1340180'>things.</span> </p><p><span m='1341430'>Other</span> <span
  m='1341690'>implementation</span> <span m='1342290'>side</span> <span
  m='1342520'>of</span> <span m='1342610'>things</span> <span
  m='1342890'>is</span> <span m='1345070'>in</span> <span
  m='1345450'>Python,</span> <span m='1348010'>well,</span> <span
  m='1348140'>there's</span> <span m='1348320'>this</span> <span
  m='1348510'>distinction</span> <span m='1349000'>between</span> <span
  m='1349780'>objects</span> <span m='1350290'>and</span> <span
  m='1350480'>keys,</span> <span m='1351070'>I</span> <span
  m='1351140'>guess</span> <span m='1351350'>you</span> <span
  m='1351430'>would</span> <span m='1351560'>say.</span> <span
  m='1352020'>You</span> <span m='1352180'>really</span> <span
  m='1352460'>don't</span> <span m='1352680'>want</span> <span
  m='1352930'>this</span> <span m='1353140'>prehash</span> <span
  m='1353620'>function</span> <span m='1353980'>to</span> <span
  m='1354100'>change</span> <span m='1354540'>value.</span> <span
  m='1356370'>In,</span> <span m='1356670'>say,</span> <span
  m='1356970'>a</span> <span m='1357030'>direct</span> <span
  m='1357340'>access</span> <span m='1357690'>table,</span> <span
  m='1357960'>if</span> <span m='1358040'>you</span> <span
  m='1358150'>store--</span> <span m='1358710'>you</span> <span
  m='1358840'>take</span> <span m='1359070'>an</span> <span
  m='1359170'>item,</span> <span m='1359830'>you</span> <span
  m='1359970'>compute</span> <span m='1360340'>the</span> <span
  m='1360420'>prehash</span> <span m='1360870'>function</span> <span
  m='1361260'>of</span> <span m='1362100'>the</span> <span
  m='1362210'>key</span> <span m='1362510'>in</span> <span
  m='1362630'>there,</span> <span m='1363730'>and</span> <span
  m='1363970'>you</span> <span m='1364070'>throw</span> <span
  m='1364320'>it</span> <span m='1364420'>in,</span> <span m='1364970'>and
  it</span> <span m='1365220'>says,</span> <span m='1365390'>oh,</span> <span
  m='1365630'>prehash</span> <span m='1366030'>value</span> <span m='1366430'>is
  four.</span> <span m='1367750'>Then</span> <span m='1367870'>you</span> <span
  m='1367970'>put</span> <span m='1368130'>it</span> <span m='1368230'>in</span>
  <span m='1368320'>position</span> <span m='1368710'>four.</span> <span
  m='1368990'>If</span> <span m='1369130'>that</span> <span
  m='1369440'>value</span> <span m='1369830'>change,</span> <span
  m='1370370'>then</span> <span m='1370550'>when you</span> <span
  m='1370770'>go</span> <span m='1370860'>to</span> <span
  m='1370950'>search</span> <span m='1371300'>for</span> <span
  m='1371400'>that</span> <span m='1371650'>key,</span> <span
  m='1372460'>and</span> <span m='1372610'>you</span> <span
  m='1372730'>call</span> <span m='1372990'>prehash</span> <span
  m='1373140'>of</span> <span m='1373530'>that</span> <span
  m='1373700'>thing,</span> <span m='1373880'>and if it give</span> <span
  m='1374180'>you</span> <span m='1374300'>five,</span> <span
  m='1374780'>you</span> <span m='1374870'>look</span> <span
  m='1375030'>in</span> <span m='1375090'>position</span> <span
  m='1375440'>five,</span> <span m='1375740'>and you say,</span> <span
  m='1376070'>oh, it's</span> <span m='1376200'>not</span> <span
  m='1376360'>there.</span> <span m='1377570'>So</span> <span
  m='1378220'>prehash</span> <span m='1378670'>really</span> <span
  m='1378900'>should</span> <span m='1379090'>not</span> <span
  m='1379280'>change.</span> </p><p><span m='1380070'>If</span> <span
  m='1380230'>you</span> <span m='1380310'>ever</span> <span
  m='1380500'>implement</span> <span m='1380850'>this</span> <span
  m='1381030'>function</span> <span m='1381940'>don't</span> <span
  m='1382350'>mess</span> <span m='1382770'>with</span> <span
  m='1382930'>it.</span> <span m='1383140'>I</span> <span
  m='1383250'>mean,</span> <span m='1383950'>make</span> <span
  m='1384130'>sure</span> <span m='1384390'>it's</span> <span
  m='1384550'>defined</span> <span m='1384900'>in such</span> <span
  m='1384970'>a way</span> <span m='1385260'>that it</span> <span
  m='1385550'>doesn't</span> <span m='1385820'>change</span> <span
  m='1386110'>over</span> <span m='1386290'>time.</span> <span
  m='1386970'>Otherwise,</span> <span m='1387330'>you</span> <span
  m='1387430'>won't</span> <span m='1387590'>be</span> <span
  m='1387660'>able</span> <span m='1387800'>to</span> <span
  m='1387870'>find</span> <span m='1388130'>your</span> <span
  m='1388240'>items</span> <span m='1389190'>in</span> <span
  m='1389420'>the</span> <span m='1390160'>table.</span> <span
  m='1390680'>Python</span> <span m='1391020'>can't</span> <span
  m='1391240'>protect</span> <span m='1391590'>you</span> <span
  m='1391690'>from</span> <span m='1391840'>that.</span> </p><p><span
  m='1395320'>This</span> <span m='1395520'>is</span> <span
  m='1395630'>why,</span> <span m='1395940'>for</span> <span
  m='1395980'>example,</span> <span m='1396460'>if</span> <span m='1396560'>you
  have</span> <span m='1396660'>a</span> <span m='1396730'>list,</span> <span
  m='1397800'>which</span> <span m='1397960'>is a</span> <span
  m='1398060'>mutable</span> <span m='1398510'>object,</span> <span
  m='1398970'>you</span> <span m='1399070'>cannot</span> <span
  m='1399490'>put</span> <span m='1399640'>it into</span> <span
  m='1399950'>a</span> <span m='1399990'>hash</span> <span
  m='1400220'>table</span> <span m='1400530'>as</span> <span
  m='1400610'>a</span> <span m='1400680'>key</span> <span
  m='1400950'>value</span> <span m='1401870'>because</span> <span
  m='1402990'>it</span> <span m='1404140'>would</span> <span
  m='1404310'>change</span> <span m='1404930'>over</span> <span
  m='1405130'>time.</span> <span m='1405370'>Potentially,</span> <span
  m='1406300'>you'd</span> <span m='1406440'>append</span> <span m='1406520'>to
  the</span> <span m='1406960'>list,</span> <span m='1407290'>or</span> <span
  m='1407340'>whatever.</span> <span m='1409740'>All</span> <span
  m='1409900'>right.</span> </p><p><span m='1411680'>So</span> <span
  m='1411920'>hopefully</span> <span m='1412360'>you're</span> <span
  m='1412480'>reasonably</span> <span m='1412890'>happy</span> <span
  m='1413190'>with</span> <span m='1413310'>this.</span> <span
  m='1413920'>You</span> <span m='1414040'>could</span> <span
  m='1414180'>also</span> <span m='1414410'>think</span> <span m='1414600'>of
  it</span> <span m='1414690'>is</span> <span m='1414850'>we're</span> <span
  m='1414990'>going</span> <span m='1415100'>to</span> <span
  m='1415150'>assume</span> <span m='1415540'>keys</span> <span
  m='1415830'>are</span> <span m='1415910'>non-negative</span> <span
  m='1416370'>integers.</span> <span m='1416880'>But</span> <span
  m='1416910'>in</span> <span m='1417000'>practice,</span> <span
  m='1417890'>anything</span> <span m='1418210'>you</span> <span
  m='1418310'>have</span> <span m='1418640'>you can</span> <span m='1418870'>map
  to</span> <span m='1419150'>an</span> <span m='1419260'>integer,</span> <span
  m='1420600'>one</span> <span m='1420840'>way</span> <span
  m='1420950'>or</span> <span m='1421070'>another.</span> </p><p><span
  m='1422770'>The</span> <span m='1422890'>bigger</span> <span
  m='1423230'>problem</span> <span m='1423690'>in</span> <span
  m='1423760'>a</span> <span m='1423830'>certain</span> <span
  m='1424110'>sense,</span> <span m='1424380'>or</span> <span
  m='1424450'>the</span> <span m='1424530'>more</span> <span
  m='1424770'>interesting</span> <span m='1425200'>problem</span> <span
  m='1425750'>is</span> <span m='1426810'>reducing</span> <span
  m='1427300'>space.</span> <span m='1428780'>So</span> <span
  m='1428850'>how</span> <span m='1429040'>do</span> <span m='1429130'>we</span>
  <span m='1429250'>do</span> <span m='1429390'>that?</span> <span
  m='1438420'>This</span> <span m='1438620'>would</span> <span
  m='1438730'>be</span> <span m='1439410'>hashing.</span> <span
  m='1443880'>This</span> <span m='1444090'>is</span> <span
  m='1444190'>sort</span> <span m='1444310'>of</span> <span
  m='1444370'>the</span> <span m='1444470'>magic</span> <span
  m='1444860'>part</span> <span m='1445090'>of</span> <span
  m='1445210'>today's</span> <span m='1445530'>lecture.</span> </p><p><span
  m='1446840'>In</span> <span m='1446990'>case</span> <span
  m='1447230'>you're</span> <span m='1447340'>wondering,</span> <span
  m='1448740'>hashing</span> <span m='1449200'>has</span> <span
  m='1449370'>nothing</span> <span m='1449660'>to</span> <span
  m='1449760'>do</span> <span m='1449860'>with</span> <span
  m='1449990'>hashish.</span> <span m='1452010'>Hashish</span> <span
  m='1453270'>is</span> <span m='1453530'>a</span> <span
  m='1454300'>Arabic</span> <span m='1454750'>root</span> <span
  m='1455070'>word</span> <span m='1456030'>unrelated</span> <span
  m='1456660'>to</span> <span m='1456760'>the</span> <span
  m='1456900'>Germanic,</span> <span m='1457610'>which</span> <span
  m='1457850'>is</span> <span m='1458100'>hachet,</span> <span
  m='1458720'>I</span> <span m='1458840'>believe.</span> <span
  m='1460220'>Yeah.</span> <span m='1460900'>Or</span> <span
  m='1461760'>hacheh--</span> <span m='1462170'>I</span> <span
  m='1462310'>guess,</span> <span m='1462700'>something</span> <span
  m='1463000'>like that.</span> <span m='1463340'>I'm not</span> <span
  m='1463520'>very</span> <span m='1463690'>good at</span> <span
  m='1463880'>German.</span> <span m='1464530'>Which</span> <span
  m='1464690'>means</span> <span m='1464880'>hatchet.</span> <span
  m='1466190'>OK</span> </p><p><span m='1466410'>It's</span> <span
  m='1466600'>like</span> <span m='1466800'>you</span> <span
  m='1466920'>take</span> <span m='1467190'>your</span> <span
  m='1467310'>key,</span> <span m='1467575'>and</span> <span
  m='1467840'>you</span> <span m='1468010'>cut</span> <span m='1468290'>it
  up</span> <span m='1468400'>into</span> <span m='1468610'>little</span> <span
  m='1468810'>pieces,</span> <span m='1469360'>and</span> <span
  m='1469460'>you</span> <span m='1469610'>mix</span> <span
  m='1469840'>them</span> <span m='1469940'>around</span> <span
  m='1470280'>and</span> <span m='1470370'>cut and</span> <span
  m='1470730'>dice,</span> <span m='1471060'>and</span> <span
  m='1471440'>it's</span> <span m='1471610'>like</span> <span
  m='1471760'>cooking.</span> <span m='1472570'>OK.</span> <span
  m='1473610'>What?</span> </p><p><span m='1474010'>AUDIENCE: Hash</span> <span
  m='1474455'>browns.</span> </p><p><span m='1474900'>PROFESSOR: Hash</span>
  <span m='1475190'>browns,</span> <span m='1475790'>for</span> <span
  m='1475890'>example.</span> <span m='1476350'>Yeah,</span> <span
  m='1476660'>same</span> <span m='1477670'>root.</span> <span
  m='1478440'>OK.</span> <span m='1478780'>It's</span> <span
  m='1478970'>like</span> <span m='1479120'>the</span> <span
  m='1479250'>only</span> <span m='1479490'>two</span> <span
  m='1479640'>English</span> <span m='1479910'>words</span> <span
  m='1480220'>with</span> <span m='1480490'>that</span> <span
  m='1480760'>kind</span> <span m='1480920'>of</span> <span
  m='1481000'>hash.</span> <span m='1481950'>OK.</span> </p><p><span
  m='1482110'>In</span> <span m='1482210'>our</span> <span
  m='1482300'>case,</span> <span m='1482570'>it's</span> <span
  m='1482710'>a</span> <span m='1482760'>verb,</span> <span
  m='1484400'>to</span> <span m='1484510'>hash.</span> <span
  m='1485130'>It</span> <span m='1485350'>means</span> <span
  m='1485540'>to</span> <span m='1485910'>cut</span> <span
  m='1486080'>into</span> <span m='1486300'>pieces</span> <span
  m='1486700'>and</span> <span m='1486810'>mix</span> <span
  m='1487040'>around.</span> <span m='1488150'>OK.</span> <span
  m='1488460'>That</span> <span m='1488750'>won't</span> <span
  m='1488950'>really</span> <span m='1489220'>be</span> <span
  m='1489380'>clear</span> <span m='1489720'>until</span> <span
  m='1490270'>towards</span> <span m='1490510'>the</span> <span
  m='1490620'>end</span> <span m='1490750'>of</span> <span
  m='1490820'>today's</span> <span m='1491130'>lecture,</span> <span
  m='1491510'>but</span> <span m='1491700'>we</span> <span
  m='1491820'>will</span> <span m='1491990'>eventually</span> <span
  m='1492400'>get</span> <span m='1492600'>to</span> <span
  m='1492690'>the</span> <span m='1492810'>etymology</span> <span
  m='1493360'>of</span> <span m='1493410'>hashing.</span> <span
  m='1495140'>Or,</span> <span m='1495530'>we've</span> <span
  m='1495670'>got</span> <span m='1495810'>the</span> <span
  m='1495920'>etymology,</span> <span m='1496440'>but</span> <span
  m='1496610'>why</span> <span m='1496880'>it's,</span> <span
  m='1497100'>actually,</span> <span m='1498060'>why</span> <span
  m='1498280'>we</span> <span m='1498420'>use</span> <span
  m='1498550'>that</span> <span m='1498740'>term.</span> <span
  m='1499820'>All</span> <span m='1500150'>right.</span> </p><p><span
  m='1500370'>So</span> <span m='1501110'>the</span> <span
  m='1501200'>big</span> <span m='1501410'>idea</span> <span
  m='1502270'>is</span> <span m='1502590'>we</span> <span
  m='1502820'>take</span> <span m='1509560'>all</span> <span
  m='1509830'>possible</span> <span m='1510330'>keys</span> <span
  m='1510860'>and</span> <span m='1510990'>we</span> <span
  m='1511090'>want</span> <span m='1511260'>to</span> <span
  m='1511340'>reduce</span> <span m='1511760'>them</span> <span
  m='1511930'>down</span> <span m='1512150'>to</span> <span
  m='1512230'>some</span> <span m='1512450'>small,</span> <span
  m='1513390'>small</span> <span m='1513830'>set</span> <span
  m='1514060'>of</span> <span m='1514150'>integers.</span> <span
  m='1543700'>Let</span> <span m='1543820'>me</span> <span
  m='1543930'>draw</span> <span m='1544110'>a</span> <span
  m='1544170'>picture</span> <span m='1545370'>of</span> <span
  m='1545460'>that.</span> <span m='1555640'>So</span> <span
  m='1556070'>we</span> <span m='1556260'>have</span> <span
  m='1556640'>this</span> <span m='1557020'>giant</span> <span
  m='1557700'>space</span> <span m='1558130'>of</span> <span
  m='1558250'>all</span> <span m='1558480'>possible</span> <span
  m='1558980'>keys.</span> <span m='1561765'>We'll call</span> <span
  m='1562190'>this</span> <span m='1562410'>key</span> <span
  m='1562730'>space.</span> <span m='1566080'>It's</span> <span
  m='1566460'>like</span> <span m='1566630'>outer</span> <span
  m='1566920'>space,</span> <span m='1567820'>basically.</span> <span
  m='1568230'>It's</span> <span m='1568350'>giant.</span> </p><p><span
  m='1570790'>And</span> <span m='1570990'>if</span> <span m='1571110'>we</span>
  <span m='1571260'>stored a</span> <span m='1571600'>direct</span> <span
  m='1571960'>access</span> <span m='1572290'>table,</span> <span
  m='1572670'>this</span> <span m='1572830'>would</span> <span
  m='1572950'>also</span> <span m='1573220'>be</span> <span
  m='1573350'>giant.</span> <span m='1573730'>And we</span> <span
  m='1573840'>don't</span> <span m='1574000'>want</span> <span
  m='1574180'>to</span> <span m='1574240'>do</span> <span
  m='1574400'>that.</span> <span m='1576530'>We'd</span> <span
  m='1576750'>like</span> <span m='1576960'>to</span> <span
  m='1577070'>somehow</span> <span m='1577450'>map</span> <span
  m='1578620'>using</span> <span m='1578940'>a</span> <span
  m='1578970'>hash</span> <span m='1579290'>function</span> <span
  m='1579790'>h</span> <span m='1581270'>down</span> <span m='1581500'>to</span>
  <span m='1581580'>some</span> <span m='1581830'>smaller</span> <span
  m='1582310'>set.</span> <span m='1582800'>How do I</span> <span
  m='1582860'>want</span> <span m='1583060'>to</span> <span
  m='1583110'>draw</span> <span m='1583310'>this?</span> <span
  m='1585310'>Like</span> <span m='1585780'>an</span> <span
  m='1585890'>array.</span> </p><p><span m='1590820'>So</span> <span
  m='1590980'>we're</span> <span m='1591120'>going</span> <span
  m='1591220'>to</span> <span m='1591280'>have</span> <span
  m='1592630'>possible</span> <span m='1593110'>values</span> <span
  m='1593650'>0</span> <span m='1594450'>up</span> <span m='1594850'>to</span>
  <span m='1595080'>m</span> <span m='1595790'>minus</span> <span
  m='1596160'>1.</span> <span m='1596960'>m</span> <span m='1597220'>is</span>
  <span m='1597370'>a</span> <span m='1597450'>new</span> <span
  m='1597650'>thing.</span> <span m='1598340'>It's</span> <span
  m='1598450'>going</span> <span m='1598570'>to</span> <span
  m='1598640'>be</span> <span m='1598750'>the</span> <span
  m='1598860'>size</span> <span m='1599310'>of</span> <span
  m='1599440'>our</span> <span m='1599690'>hash</span> <span
  m='1600010'>table.</span> <span m='1600400'>Let's</span> <span
  m='1600710'>call</span> <span m='1600950'>the</span> <span
  m='1600980'>hash</span> <span m='1601310'>table.</span> <span m='1605107'>I
  think we'll call it</span> <span m='1605558'>t</span> <span
  m='1606350'>also.</span> <span m='1608200'>And</span> <span
  m='1608510'>we'd</span> <span m='1608670'>somehow</span> <span
  m='1609020'>like</span> <span m='1609240'>to</span> <span
  m='1609340'>map--</span> </p><p><span m='1611470'>All</span> <span
  m='1611550'>right.</span> <span m='1611730'>So</span> <span
  m='1611810'>there's</span> <span m='1612040'>a</span> <span
  m='1612140'>giant</span> <span m='1612590'>space</span> <span
  m='1612860'>of</span> <span m='1613010'>all</span> <span
  m='1613300'>possible</span> <span m='1613870'>keys,</span> <span
  m='1614800'>but</span> <span m='1614940'>then</span> <span
  m='1615090'>there's</span> <span m='1615260'>a</span> <span
  m='1615330'>subset</span> <span m='1616440'>of</span> <span
  m='1616580'>keys</span> <span m='1616900'>that</span> <span
  m='1617030'>are</span> <span m='1617180'>actually</span> <span
  m='1617900'>stored</span> <span m='1618990'>in</span> <span
  m='1619180'>this</span> <span m='1619450'>set,</span> <span
  m='1621010'>in</span> <span m='1621310'>this</span> <span
  m='1621760'>dictionary.</span> <span m='1623310'>At</span> <span
  m='1623380'>any</span> <span m='1623600'>moment</span> <span
  m='1623890'>in</span> <span m='1624010'>time</span> <span
  m='1624550'>there's</span> <span m='1624730'>some</span> <span
  m='1624920'>set</span> <span m='1625160'>of</span> <span
  m='1625260'>keys</span> <span m='1625600'>that</span> <span
  m='1626100'>are</span> <span m='1626490'>present.</span> </p><p><span
  m='1627730'>That</span> <span m='1628020'>set</span> <span
  m='1628200'>changes,</span> <span m='1629480'>but</span> <span
  m='1629630'>at</span> <span m='1629720'>any</span> <span
  m='1629870'>moment</span> <span m='1630290'>there's</span> <span
  m='1630570'>some</span> <span m='1630920'>keys</span> <span
  m='1631510'>that</span> <span m='1631650'>are</span> <span
  m='1631770'>actually</span> <span m='1632170'>there.</span> <span
  m='1632780'>k1,</span> <span m='1633950'>k2,</span> <span
  m='1634660'>k3,</span> <span m='1636050'>k4.</span> <span
  m='1637180'>I'd</span> <span m='1637380'>like</span> <span
  m='1637570'>to</span> <span m='1637680'>map</span> <span
  m='1638090'>them</span> <span m='1639010'>to</span> <span
  m='1639190'>positions</span> <span m='1639930'>in</span> <span
  m='1640100'>this</span> <span m='1640280'>table.</span> <span
  m='1640890'>So</span> <span m='1640970'>maybe</span> <span
  m='1641230'>I</span> <span m='1641300'>store</span> <span
  m='1642420'>k2--</span> <span m='1642725'>or</span> <span
  m='1643030'>actually,</span> <span m='1643390'>item</span> <span
  m='1643740'>2</span> <span m='1644000'>would</span> <span
  m='1644160'>go</span> <span m='1644310'>here.</span> </p><p><span
  m='1646590'>In</span> <span m='1646730'>particular,</span> <span
  m='1648510'>this</span> <span m='1648800'>is</span> <span
  m='1648950'>when</span> <span m='1649990'>h</span> <span m='1650480'>of</span>
  <span m='1650870'>k2,</span> <span m='1652265'>if it</span> <span
  m='1652710'>equals</span> <span m='1653080'>zero,</span> <span
  m='1654000'>then</span> <span m='1654090'>you'd</span> <span
  m='1654220'>put</span> <span m='1654430'>item</span> <span
  m='1654730'>2</span> <span m='1654950'>there.</span> <span
  m='1656000'>Item</span> <span m='1656280'>3,</span> <span
  m='1657150'>let's</span> <span m='1657450'>say,</span> <span
  m='1657770'>it's</span> <span m='1657970'>at</span> <span
  m='1658250'>position--</span> <span m='1659330'>wow,</span> <span
  m='1659780'>3</span> <span m='1660170'>would</span> <span
  m='1660260'>be</span> <span m='1660380'>a</span> <span m='1660420'>bit</span>
  <span m='1660570'>of</span> <span m='1660670'>a</span> <span
  m='1660730'>coincidence,</span> <span m='1661000'>but</span> <span
  m='1661270'>what</span> <span m='1661500'>the</span> <span
  m='1661580'>hell.</span> <span m='1662240'>Maybe</span> <span
  m='1663130'>h</span> <span m='1663620'>or</span> <span m='1664110'>k3</span>
  <span m='1665270'>equals</span> <span m='1665940'>3.</span> <span
  m='1666630'>Then</span> <span m='1666780'>you'd</span> <span
  m='1666910'>put</span> <span m='1667150'>item</span> <span
  m='1667420'>3</span> <span m='1667690'>here.</span> <span
  m='1670840'>OK.</span> <span m='1671040'>You</span> <span
  m='1671090'>get</span> <span m='1671230'>the</span> <span
  m='1671340'>idea.</span> </p><p><span m='1671750'>So</span> <span
  m='1671840'>these</span> <span m='1672060'>four</span> <span
  m='1672270'>items</span> <span m='1672980'>each</span> <span
  m='1673170'>have</span> <span m='1673330'>a</span> <span
  m='1673390'>special</span> <span m='1673780'>position</span> <span
  m='1674180'>in</span> <span m='1674280'>their</span> <span
  m='1674410'>table.</span> <span m='1675530'>And</span> <span
  m='1675790'>the</span> <span m='1675900'>idea</span> <span
  m='1677840'>is</span> <span m='1678050'>we</span> <span
  m='1678190'>would</span> <span m='1678420'>like</span> <span
  m='1678690'>to</span> <span m='1678830'>be,</span> <span m='1679690'>m</span>
  <span m='1680740'>to</span> <span m='1680900'>be</span> <span
  m='1681650'>around</span> <span m='1682420'>n.</span> <span
  m='1687550'>n</span> <span m='1688060'>is</span> <span m='1688410'>the</span>
  <span m='1688630'>number</span> <span m='1689000'>of</span> <span
  m='1689080'>keys</span> <span m='1692690'>In</span> <span
  m='1692880'>the</span> <span m='1692940'>dictionary</span> <span
  m='1697890'>right</span> <span m='1698150'>now.</span> </p><p><span
  m='1699280'>So</span> <span m='1699430'>if</span> <span m='1699510'>we</span>
  <span m='1699620'>could</span> <span m='1699750'>achieve</span> <span
  m='1700150'>that,</span> <span m='1700750'>the</span> <span
  m='1700830'>size</span> <span m='1701170'>of</span> <span
  m='1701230'>the</span> <span m='1701330'>table</span> <span
  m='1701810'>was</span> <span m='1701990'>proportional</span> <span
  m='1702580'>to</span> <span m='1702680'>the</span> <span
  m='1702780'>number</span> <span m='1703000'>of</span> <span
  m='1703070'>keys</span> <span m='1703340'>being</span> <span
  m='1703530'>stored</span> <span m='1703760'>in</span> <span
  m='1703820'>the</span> <span m='1703920'>dictionary,</span> <span
  m='1704690'>that</span> <span m='1704860'>would</span> <span
  m='1704970'>be</span> <span m='1705080'>good</span> <span
  m='1705310'>news</span> <span m='1706520'>because</span> <span
  m='1706840'>then</span> <span m='1706970'>the</span> <span
  m='1707130'>space</span> <span m='1707390'>is</span> <span
  m='1707520'>not</span> <span m='1708420'>gigantic</span> <span
  m='1708990'>and</span> <span m='1709080'>hoggish.</span> <span
  m='1710110'>It</span> <span m='1710260'>would</span> <span
  m='1710360'>just</span> <span m='1710570'>be</span> <span
  m='1711060'>linear,</span> <span m='1711680'>which</span> <span
  m='1711850'>is</span> <span m='1711960'>optimal.</span> <span
  m='1714070'>So</span> <span m='1714230'>if we</span> <span
  m='1714310'>want</span> <span m='1714460'>to</span> <span
  m='1714510'>store</span> <span m='1714750'>m</span> <span
  m='1714900'>things,</span> <span m='1715140'>maybe</span> <span
  m='1715360'>we'll</span> <span m='1715490'>use</span> <span
  m='1715720'>2m</span> <span m='1715970'>space,</span> <span
  m='1716570'>a</span> <span m='1716640'>3m</span> <span
  m='1717020'>space,</span> <span m='1717780'>but</span> <span
  m='1717950'>not</span> <span m='1718110'>much</span> <span
  m='1718300'>more.</span> </p><p><span m='1721740'>How</span> <span
  m='1722080'>the</span> <span m='1722250'>heck</span> <span
  m='1722550'>are</span> <span m='1722640'>we</span> <span
  m='1722790'>going</span> <span m='1722940'>to</span> <span
  m='1723030'>define</span> <span m='1723500'>such a</span> <span
  m='1723980'>function</span> <span m='1724420'>h?</span> <span
  m='1725140'>Well,</span> <span m='1725280'>that's</span> <span
  m='1726090'>the</span> <span m='1726180'>rest</span> <span m='1726380'>of
  the</span> <span m='1726460'>lecture.</span> <span m='1727560'>But</span>
  <span m='1727700'>even</span> <span m='1727990'>before</span> <span
  m='1728350'>we</span> <span m='1728460'>define</span> <span
  m='1728790'>a</span> <span m='1728850'>function</span> <span
  m='1729160'>h,</span> <span m='1729360'>do you</span> <span
  m='1729460'>see</span> <span m='1729610'>any</span> <span
  m='1729770'>problems</span> <span m='1730120'>with</span> <span
  m='1730240'>this?</span> <span m='1735580'>Yeah.</span> </p><p><span
  m='1736568'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1743010'>PROFESSOR:
  Yeah.</span> <span m='1743430'>This</span> <span m='1743630'>space</span>
  <span m='1743980'>over</span> <span m='1744190'>here,</span> <span
  m='1744340'>this is</span> <span m='1744530'>pigeonhole</span> <span
  m='1744940'>principle.</span> <span m='1745560'>The</span> <span
  m='1745660'>number</span> <span m='1745790'>of</span> <span
  m='1745850'>slots</span> <span m='1746240'>for</span> <span
  m='1746330'>your</span> <span m='1746470'>pigeons</span> <span
  m='1746850'>over</span> <span m='1747060'>here</span> <span
  m='1747570'>is</span> <span m='1747740'>way</span> <span
  m='1747950'>smaller</span> <span m='1748360'>than</span> <span
  m='1748500'>the</span> <span m='1748590'>number</span> <span
  m='1748860'>of</span> <span m='1748930'>possible</span> <span
  m='1749390'>pigeons.</span> <span m='1750240'>So</span> <span
  m='1750430'>there</span> <span m='1750630'>are</span> <span
  m='1750710'>going</span> <span m='1751000'>to</span> <span
  m='1751120'>be</span> <span m='1751380'>two</span> <span
  m='1751620'>keys</span> <span m='1752930'>that</span> <span
  m='1753110'>map</span> <span m='1753440'>to</span> <span
  m='1753530'>the</span> <span m='1753650'>same</span> <span
  m='1754890'>slot</span> <span m='1755330'>in</span> <span
  m='1755440'>the</span> <span m='1755490'>hash</span> <span
  m='1755760'>table.</span> <span m='1756990'>This</span> <span
  m='1757170'>is</span> <span m='1757260'>what</span> <span
  m='1757420'>we</span> <span m='1757520'>call</span> <span m='1757860'>a</span>
  <span m='1757950'>collision.</span> </p><p><span m='1761190'>Let's</span>
  <span m='1761410'>call</span> <span m='1761640'>this,</span> <span
  m='1763155'>I don't know,</span> <span m='1763670'>ki,</span> <span
  m='1764070'>kj.</span> <span m='1768047'>h</span> <span m='1768510'>of</span>
  <span m='1768600'>ki</span> <span m='1769430'>equals</span> <span
  m='1770830'>h</span> <span m='1771060'>of</span> <span m='1771140'>kj,</span>
  <span m='1773540'>but</span> <span m='1773740'>the</span> <span
  m='1773830'>keys</span> <span m='1774150'>are</span> <span
  m='1774220'>different.</span> <span m='1775500'>So</span> <span
  m='1775870'>ki</span> <span m='1776970'>does</span> <span
  m='1777080'>not</span> <span m='1777310'>equal</span> <span
  m='1777800'>kj,</span> <span m='1779970'>yet</span> <span
  m='1780120'>their</span> <span m='1780230'>hash</span> <span
  m='1780550'>functions</span> <span m='1780920'>are</span> <span
  m='1780980'>the</span> <span m='1781090'>same,</span> <span
  m='1781920'>hash</span> <span m='1782130'>values</span> <span
  m='1782450'>are</span> <span m='1782480'>the</span> <span
  m='1782600'>same.</span> <span m='1782840'>We</span> <span
  m='1782930'>call</span> <span m='1783130'>that</span> <span
  m='1783260'>a</span> <span m='1783350'>collision.</span> <span
  m='1784660'>And</span> <span m='1784810'>that's</span> <span
  m='1785040'>guaranteed</span> <span m='1785520'>to</span> <span
  m='1785590'>happen</span> <span m='1786190'>a</span> <span
  m='1786270'>lot,</span> <span m='1788050'>yet</span> <span
  m='1788590'>somehow,</span> <span m='1788990'>we</span> <span
  m='1789100'>can</span> <span m='1789220'>still</span> <span
  m='1789420'>make</span> <span m='1789610'>this</span> <span
  m='1789780'>work.</span> <span m='1791170'>That's</span> <span
  m='1791430'>the</span> <span m='1791510'>magic.</span> </p><p><span
  m='1797640'>And</span> <span m='1798040'>that</span> <span
  m='1798270'>is</span> <span m='1798510'>going</span> <span
  m='1798660'>to</span> <span m='1798720'>be</span> <span
  m='1798870'>chaining.</span> <span m='1799350'>We've</span> <span
  m='1799540'>done</span> <span m='1800570'>these</span> <span
  m='1800710'>guys.</span> <span m='1802080'>Next</span> <span
  m='1802340'>up</span> <span m='1802500'>is</span> <span m='1802660'>a</span>
  <span m='1802750'>technique</span> <span m='1803270'>for</span> <span
  m='1803510'>dealing</span> <span m='1804020'>with</span> <span
  m='1804640'>collisions.</span> <span m='1805700'>There</span> <span
  m='1805820'>are</span> <span m='1805900'>two</span> <span
  m='1806140'>techniques</span> <span m='1806580'>for</span> <span
  m='1806670'>dealing</span> <span m='1806930'>with</span> <span
  m='1807050'>collisions</span> <span m='1807430'>we're</span> <span
  m='1807510'>going</span> <span m='1807620'>to</span> <span
  m='1807700'>talk</span> <span m='1807970'>about</span> <span
  m='1808200'>in</span> <span m='1809040'>006.</span> <span
  m='1809880'>One</span> <span m='1810030'>is</span> <span
  m='1810140'>called</span> <span m='1810320'>chaining,</span> <span
  m='1810760'>and</span> <span m='1810860'>next</span> <span
  m='1811160'>Tuesday,</span> <span m='1811590'>we'll</span> <span
  m='1811720'>see</span> <span m='1811900'>another</span> <span
  m='1812120'>method</span> <span m='1812440'>called</span> <span
  m='1812690'>open</span> <span m='1812950'>addressing.</span> </p><p><span
  m='1815450'>But</span> <span m='1815630'>let's</span> <span
  m='1815870'>start</span> <span m='1816200'>with</span> <span
  m='1816760'>chaining.</span> <span m='1821220'>The</span> <span
  m='1821320'>idea</span> <span m='1821590'>with</span> <span
  m='1821710'>chaining</span> <span m='1822100'>a</span> <span
  m='1822160'>simple.</span> <span m='1824730'>If</span> <span
  m='1824820'>you</span> <span m='1824920'>have</span> <span
  m='1825140'>multiple</span> <span m='1825650'>items</span> <span
  m='1826060'>here</span> <span m='1827380'>all with</span> <span
  m='1827650'>the</span> <span m='1827760'>same--</span> <span
  m='1828260'>that</span> <span m='1828400'>hash</span> <span m='1828690'>to
  the</span> <span m='1828800'>same</span> <span m='1829020'>position,</span>
  <span m='1830010'>just</span> <span m='1830740'>store</span> <span
  m='1831040'>them</span> <span m='1831230'>as</span> <span m='1831340'>a</span>
  <span m='1831400'>list.</span> <span m='1832860'>I'm</span> <span
  m='1832970'>going</span> <span m='1833080'>to</span> <span
  m='1833530'>draw</span> <span m='1833750'>it</span> <span
  m='1833870'>as</span> <span m='1834190'>a</span> <span
  m='1834280'>linked</span> <span m='1834560'>list.</span> <span m='1862850'>I
  think</span> <span m='1863140'>I</span> <span m='1863300'>need</span> <span
  m='1863730'>a</span> <span m='1865680'>big</span> <span
  m='1865850'>picture</span> <span m='1866200'>here.</span> </p><p><span
  m='1887710'>So</span> <span m='1889330'>we</span> <span
  m='1889510'>have</span> <span m='1891400'>our</span> <span
  m='1891500'>nice</span> <span m='1891740'>universe,</span> <span
  m='1893590'>various</span> <span m='1894010'>keys</span> <span
  m='1894560'>that</span> <span m='1894730'>we</span> <span
  m='1894960'>actually</span> <span m='1895270'>have</span> <span
  m='1895580'>present.</span> <span m='1897700'>So</span> <span
  m='1897880'>these</span> <span m='1898110'>are</span> <span
  m='1898170'>the</span> <span m='1898300'>keys</span> <span
  m='1900040'>in</span> <span m='1900230'>the</span> <span
  m='1900310'>dictionary,</span> <span m='1902740'>and</span> <span
  m='1902940'>this</span> <span m='1903100'>is</span> <span
  m='1903200'>all</span> <span m='1903480'>of</span> <span
  m='1903580'>key</span> <span m='1903790'>space.</span> <span
  m='1913170'>These</span> <span m='1913410'>guys</span> <span
  m='1913700'>map</span> <span m='1914290'>to</span> <span
  m='1915330'>slots</span> <span m='1915650'>in</span> <span
  m='1915710'>the</span> <span m='1915800'>table.</span> <span
  m='1916170'>Some</span> <span m='1916450'>of</span> <span
  m='1916520'>them</span> <span m='1916670'>might</span> <span
  m='1916880'>map</span> <span m='1917130'>to</span> <span
  m='1917230'>the</span> <span m='1917340'>same</span> <span
  m='1918160'>value.</span> </p><p><span m='1918490'>So</span> <span
  m='1918640'>let's</span> <span m='1918860'>say</span> <span
  m='1921320'>k1</span> <span m='1922405'>and</span> <span
  m='1922760'>k2,</span> <span m='1923450'>suppose</span> <span
  m='1923850'>they</span> <span m='1923990'>collide.</span> <span
  m='1924975'>So</span> <span m='1925420'>they</span> <span
  m='1925650'>both</span> <span m='1925940'>go</span> <span
  m='1926140'>this</span> <span m='1926380'>slot.</span> <span
  m='1926620'>What</span> <span m='1926940'>we're</span> <span
  m='1927180'>going</span> <span m='1927270'>to</span> <span
  m='1927330'>store</span> <span m='1927660'>here</span> <span
  m='1928430'>is</span> <span m='1929480'>a</span> <span
  m='1929560'>linked</span> <span m='1929800'>list</span> <span
  m='1931230'>that</span> <span m='1931380'>stores</span> <span
  m='1933160'>item</span> <span m='1933440'>1,</span> <span
  m='1935420'>and</span> <span m='1935710'>stores</span> <span
  m='1936060'>a</span> <span m='1936120'>pointer</span> <span
  m='1936750'>to</span> <span m='1937150'>the</span> <span
  m='1937200'>next</span> <span m='1937440'>item,</span> <span
  m='1938860'>which</span> <span m='1938940'>is</span> <span
  m='1939090'>item</span> <span m='1939380'>2.</span> <span
  m='1941450'>And</span> <span m='1941750'>that's</span> <span m='1941980'>the
  end of</span> <span m='1942150'>the</span> <span m='1942290'>list.</span>
  <span m='1943380'>Or</span> <span m='1943560'>you</span> <span
  m='1943670'>could--</span> <span m='1944050'>however</span> <span
  m='1944290'>you</span> <span m='1944360'>want</span> <span
  m='1944480'>to</span> <span m='1944520'>draw</span> <span m='1944760'>a</span>
  <span m='1945050'>null.</span> </p><p><span m='1947160'>So</span> <span
  m='1948910'>however</span> <span m='1949230'>many</span> <span
  m='1949470'>items</span> <span m='1949790'>there are,</span> <span
  m='1950190'>we're</span> <span m='1950320'>going</span> <span
  m='1950430'>to</span> <span m='1950480'>have</span> <span m='1950660'>a</span>
  <span m='1950710'>linked</span> <span m='1950960'>list</span> <span
  m='1951240'>of</span> <span m='1951320'>that</span> <span
  m='1951540'>length</span> <span m='1952520'>in</span> <span
  m='1952710'>that</span> <span m='1952960'>slot.</span> <span
  m='1953700'>So</span> <span m='1953830'>in</span> <span
  m='1953890'>particular,</span> <span m='1954380'>if</span> <span
  m='1954480'>there's</span> <span m='1954510'>just</span> <span
  m='1954690'>one</span> <span m='1954940'>item,</span> <span
  m='1955790'>like</span> <span m='1956060'>say,</span> <span
  m='1957440'>this</span> <span m='1958390'>k3</span> <span
  m='1959000'>here,</span> <span m='1959830'>maybe</span> <span
  m='1960130'>it</span> <span m='1960240'>just</span> <span
  m='1960440'>maps</span> <span m='1960810'>to</span> <span
  m='1960900'>this</span> <span m='1961180'>slot.</span> <span
  m='1962430'>And</span> <span m='1962860'>maybe</span> <span
  m='1963070'>that's</span> <span m='1963280'>all</span> <span
  m='1963460'>that</span> <span m='1963540'>maps to</span> <span
  m='1963800'>that</span> <span m='1964080'>slot.</span> </p><p><span
  m='1964350'>In</span> <span m='1964440'>that</span> <span
  m='1964590'>case,</span> <span m='1964840'>we</span> <span
  m='1964990'>just</span> <span m='1965200'>say,</span> <span
  m='1965890'>follow</span> <span m='1966140'>this</span> <span
  m='1966320'>item</span> <span m='1966560'>3,</span> <span
  m='1968330'>and</span> <span m='1968600'>there's</span> <span
  m='1968780'>no</span> <span m='1968980'>other</span> <span
  m='1969200'>items.</span> <span m='1970370'>Some</span> <span
  m='1970570'>slots</span> <span m='1970890'>are</span> <span
  m='1970930'>going</span> <span m='1971040'>to</span> <span
  m='1971090'>be</span> <span m='1971220'>completely</span> <span
  m='1971640'>empty.</span> <span m='1972680'>There</span> <span
  m='1972740'>nothing</span> <span m='1973120'>there</span> <span m='1973490'>so
  you just</span> <span m='1973580'>store</span> <span m='1973930'>a</span>
  <span m='1973970'>null</span> <span m='1974210'>pointer.</span> </p><p><span
  m='1976440'>That</span> <span m='1976650'>is</span> <span
  m='1977020'>hashing</span> <span m='1977410'>with</span> <span
  m='1977500'>chaining.</span> <span m='1978150'>It's</span> <span
  m='1978440'>pretty</span> <span m='1978650'>simple,</span> <span
  m='1980230'>very</span> <span m='1980420'>simple</span> <span
  m='1980770'>really.</span> <span m='1982350'>The</span> <span
  m='1982540'>only</span> <span m='1982750'>question</span> <span
  m='1983130'>is</span> <span m='1983370'>why</span> <span
  m='1983560'>would</span> <span m='1983710'>you</span> <span
  m='1983790'>expect</span> <span m='1984130'>it</span> <span
  m='1984200'>to</span> <span m='1984290'>be</span> <span m='1984550'>any</span>
  <span m='1984720'>good?</span> </p><p><span m='1985550'>Because,</span> <span
  m='1985910'>in</span> <span m='1986000'>the</span> <span
  m='1986090'>worst</span> <span m='1986340'>case,</span> <span
  m='1987670'>if</span> <span m='1987830'>you</span> <span
  m='1987950'>fix</span> <span m='1988210'>your</span> <span
  m='1988340'>hash</span> <span m='1988610'>function</span> <span
  m='1988960'>here,</span> <span m='1989180'>h,</span> <span
  m='1990210'>there's</span> <span m='1990410'>going</span> <span
  m='1990560'>to</span> <span m='1990630'>be</span> <span m='1990800'>a</span>
  <span m='1990860'>whole</span> <span m='1991120'>bunch</span> <span
  m='1991410'>of</span> <span m='1991520'>keys</span> <span
  m='1991920'>that</span> <span m='1992040'>all</span> <span
  m='1992210'>map</span> <span m='1992480'>to</span> <span
  m='1992600'>the</span> <span m='1992720'>same</span> <span
  m='1992970'>slot.</span> <span m='1993370'>And</span> <span
  m='1993490'>so</span> <span m='1993580'>in</span> <span m='1993660'>the</span>
  <span m='1993730'>worst</span> <span m='1993960'>case,</span> <span
  m='1994200'>those</span> <span m='1994490'>are</span> <span
  m='1994530'>the</span> <span m='1994640'>keys</span> <span m='1994920'>that
  you</span> <span m='1995260'>insert,</span> <span m='1996330'>and</span> <span
  m='1996480'>they</span> <span m='1996620'>all</span> <span
  m='1996930'>go</span> <span m='1997100'>here.</span> <span
  m='1997850'>And</span> <span m='1998000'>then</span> <span
  m='1998170'>you</span> <span m='1998300'>have</span> <span
  m='1998460'>this</span> <span m='1998630'>fancy</span> <span
  m='1998960'>data</span> <span m='1999170'>structure.</span> <span
  m='1999580'>And in</span> <span m='1999720'>the</span> <span
  m='1999840'>end,</span> <span m='2000040'>all</span> <span
  m='2000200'>you</span> <span m='2000310'>have</span> <span
  m='2000490'>is</span> <span m='2000590'>a</span> <span
  m='2000640'>linked</span> <span m='2000880'>list</span> <span
  m='2001120'>of</span> <span m='2001230'>all</span> <span m='2001510'>n</span>
  <span m='2001700'>items.</span> </p><p><span m='2003100'>So</span> <span
  m='2003280'>the</span> <span m='2003390'>worst</span> <span
  m='2003670'>case</span> <span m='2008140'>is</span> <span
  m='2009000'>theta</span> <span m='2009220'>n.</span> <span m='2010950'>And
  this is</span> <span m='2011660'>going</span> <span m='2011770'>to</span>
  <span m='2011810'>be</span> <span m='2011970'>true</span> <span
  m='2012100'>for</span> <span m='2012250'>any</span> <span
  m='2012450'>hashing</span> <span m='2012850'>scheme,</span> <span
  m='2013260'>actually.</span> <span m='2014520'>In</span> <span
  m='2014650'>the</span> <span m='2014740'>worst</span> <span
  m='2014970'>case,</span> <span m='2015260'>hashing</span> <span
  m='2015700'>sucks.</span> </p><p><span m='2016710'>Yet</span> <span
  m='2017000'>in</span> <span m='2017140'>practice,</span> <span
  m='2017590'>it</span> <span m='2017670'>works</span> <span
  m='2017910'>really,</span> <span m='2018280'>really</span> <span
  m='2018440'>well.</span> <span m='2019400'>And</span> <span
  m='2019790'>the</span> <span m='2019960'>reason</span> <span
  m='2020350'>is</span> <span m='2020650'>randomization,</span> <span
  m='2021480'>essentially,</span> <span m='2021960'>that</span> <span
  m='2022190'>this</span> <span m='2022420'>hash</span> <span
  m='2022760'>function,</span> <span m='2024100'>unless</span> <span
  m='2024350'>you're</span> <span m='2024500'>really</span> <span
  m='2024760'>unlucky,</span> <span m='2025620'>the</span> <span
  m='2025700'>hash</span> <span m='2025970'>function</span> <span
  m='2026340'>will</span> <span m='2026530'>nicely</span> <span
  m='2026910'>distribute</span> <span m='2027190'>your</span> <span
  m='2027470'>items,</span> <span m='2028270'>and</span> <span
  m='2028460'>most</span> <span m='2028750'>of</span> <span
  m='2028820'>these</span> <span m='2028980'>lists</span> <span
  m='2029220'>will</span> <span m='2029320'>have</span> <span
  m='2029510'>constant</span> <span m='2030310'>length.</span> </p><p><span
  m='2032700'>We're</span> <span m='2032940'>going</span> <span
  m='2033070'>to</span> <span m='2033140'>prove</span> <span
  m='2033430'>that</span> <span m='2037940'>under</span> <span
  m='2038240'>an</span> <span m='2038310'>assumption.</span> <span
  m='2040720'>Well</span> <span m='2041020'>have</span> <span
  m='2041160'>to</span> <span m='2041290'>warm</span> <span
  m='2041550'>up</span> <span m='2041730'>a</span> <span
  m='2041800'>little</span> <span m='2042070'>bit.</span> <span
  m='2047000'>But</span> <span m='2047230'>I'm</span> <span
  m='2047390'>also</span> <span m='2047590'>going</span> <span
  m='2047700'>to</span> <span m='2047780'>cop</span> <span
  m='2048060'>out</span> <span m='2048199'>a</span> <span
  m='2048260'>little</span> <span m='2048460'>m</span> <span
  m='2048955'>as</span> <span m='2049260'>you'll</span> <span
  m='2049389'>see.</span> </p><p><span m='2062960'>So</span> <span
  m='2063860'>in</span> <span m='2064360'>006</span> <span
  m='2064639'>we're</span> <span m='2064780'>going</span> <span
  m='2065000'>to</span> <span m='2065070'>make</span> <span
  m='2065260'>an</span> <span m='2065330'>assumption</span> <span
  m='2065850'>called</span> <span m='2066830'>Simple</span> <span
  m='2067250'>Uniform</span> <span m='2067760'>Hashing.</span> <span
  m='2069080'>OK.</span> <span m='2071255'>And</span> <span
  m='2071679'>this</span> <span m='2071909'>is</span> <span
  m='2072040'>an</span> <span m='2072130'>assumption,</span> <span
  m='2073110'>it's</span> <span m='2073250'>an</span> <span
  m='2073350'>unrealistic</span> <span m='2074020'>assumption.</span> <span
  m='2075850'>I</span> <span m='2076000'>would</span> <span
  m='2076920'>go</span> <span m='2077050'>so</span> <span m='2077230'>far</span>
  <span m='2077420'>as</span> <span m='2077500'>to</span> <span
  m='2077590'>say</span> <span m='2077870'>it's</span> <span
  m='2078070'>false,</span> <span m='2078455'>a</span> <span
  m='2078840'>false</span> <span m='2079110'>assumption.</span> <span
  m='2080330'>But</span> <span m='2080590'>it's</span> <span
  m='2080770'>really</span> <span m='2081080'>convenient</span> <span
  m='2081500'>for</span> <span m='2081620'>analysis,</span> <span
  m='2082250'>and</span> <span m='2082449'>it's</span> <span
  m='2082540'>going</span> <span m='2082650'>to</span> <span
  m='2082699'>make</span> <span m='2082900'>it</span> <span
  m='2083080'>obvious</span> <span m='2083610'>why</span> <span
  m='2083929'>chaining</span> <span m='2084370'>is</span> <span
  m='2084489'>a</span> <span m='2084560'>good</span> <span
  m='2084760'>idea.</span> </p><p><span m='2085580'>Sadly,</span> <span
  m='2086150'>the</span> <span m='2086260'>assumption</span> <span
  m='2086610'>isn't</span> <span m='2086790'>quite</span> <span
  m='2087070'>true,</span> <span m='2088139'>but</span> <span
  m='2088300'>it</span> <span m='2088480'>gives</span> <span
  m='2088639'>you</span> <span m='2088760'>a</span> <span
  m='2088800'>flavor.</span> <span m='2089969'>If</span> <span
  m='2090120'>you</span> <span m='2090250'>want</span> <span
  m='2090380'>to</span> <span m='2090429'>see</span> <span
  m='2090610'>why</span> <span m='2090770'>hashing</span> <span
  m='2091230'>is</span> <span m='2091389'>actually</span> <span
  m='2091900'>good,</span> <span m='2092080'>I'm</span> <span
  m='2092179'>going</span> <span m='2092300'>to</span> <span
  m='2092350'>hint</span> <span m='2092620'>at</span> <span m='2092750'>it
  at</span> <span m='2092920'>the</span> <span m='2093020'>end</span> <span
  m='2093150'>of</span> <span m='2093219'>lecture</span> <span
  m='2093540'>but</span> <span m='2093699'>really</span> <span
  m='2093969'>should</span> <span m='2094230'>take</span> <span
  m='2094420'>6.046</span> <span m='2095420'>Yeah.</span> </p><p><span
  m='2095914'>AUDIENCE: [INAUDIBLE]</span> <span m='2096408'>question.</span>
  <span m='2096902'>Is the</span> <span m='2097396'>hashing</span> <span
  m='2098384'>function</span> <span m='2098878'>[INAUDIBLE]?</span> <span
  m='2099372'>Like, how do we know the array</span> <span m='2099866'>is
  still</span> <span m='2100360'>[INAUDIBLE]?</span> </p><p><span
  m='2101348'>PROFESSOR: OK.</span> <span m='2101850'>The</span> <span
  m='2102170'>hashing</span> <span m='2102490'>function--</span> <span
  m='2102970'>I</span> <span m='2103290'>guess</span> <span m='2103480'>I</span>
  <span m='2103520'>didn't</span> <span m='2103810'>specify</span> <span
  m='2106770'>up</span> <span m='2106990'>here.</span> <span
  m='2107620'>The</span> <span m='2107710'>hashing</span> <span
  m='2108130'>function</span> <span m='2109190'>maps</span> <span
  m='2109680'>your</span> <span m='2109830'>universe</span> <span
  m='2111200'>to</span> <span m='2112430'>0,</span> <span m='2113200'>1,</span>
  <span m='2114160'>up</span> <span m='2114520'>to</span> <span
  m='2114880'>m</span> <span m='2115060'>minus</span> <span
  m='2115440'>1,</span> <span m='2116150'>That's</span> <span
  m='2116350'>the</span> <span m='2116430'>definition.</span> <span
  m='2117520'>So</span> <span m='2117690'>it's</span> <span
  m='2117840'>guaranteed</span> <span m='2118510'>to</span> <span
  m='2118690'>reduce</span> <span m='2119270'>the</span> <span
  m='2119390'>space</span> <span m='2119730'>of</span> <span
  m='2119840'>keys</span> <span m='2120240'>to</span> <span
  m='2121490'>just</span> <span m='2121730'>m</span> <span
  m='2121950'>slots.</span> </p><p><span m='2123090'>So</span> <span
  m='2123270'>your</span> <span m='2123600'>hashing</span> <span
  m='2123880'>function</span> <span m='2124190'>needs</span> <span
  m='2124380'>to</span> <span m='2124470'>know</span> <span
  m='2124680'>what</span> <span m='2124860'>m</span> <span
  m='2125165'>is.</span> <span m='2125470'>In</span> <span
  m='2125770'>reality</span> <span m='2126300'>there's</span> <span
  m='2126470'>not</span> <span m='2126660'>going</span> <span
  m='2126750'>to</span> <span m='2126790'>be</span> <span m='2126910'>one</span>
  <span m='2127100'>hashing</span> <span m='2127410'>function,</span> <span
  m='2127800'>there's</span> <span m='2127900'>going</span> <span
  m='2128020'>to</span> <span m='2128060'>be</span> <span m='2128160'>1</span>
  <span m='2128390'>for</span> <span m='2128540'>each</span> <span
  m='2128730'>m,</span> <span m='2129120'>or</span> <span m='2129230'>at</span>
  <span m='2129270'>least</span> <span m='2129500'>one</span> <span
  m='2129690'>for</span> <span m='2130190'>each</span> <span
  m='2130485'>m.</span> <span m='2130780'>And</span> <span
  m='2131030'>so,</span> <span m='2131130'>depending</span> <span
  m='2131540'>on</span> <span m='2131610'>how</span> <span
  m='2131720'>big</span> <span m='2131900'>your</span> <span
  m='2131990'>table</span> <span m='2132330'>is,</span> <span m='2132460'>you
  use</span> <span m='2132690'>the</span> <span m='2132790'>corresponding</span>
  <span m='2133360'>hash</span> <span m='2133713'>function.</span> <span
  m='2134420'>Yeah,</span> <span m='2134680'>good</span> <span
  m='2134740'>question.</span> </p><p><span m='2135170'>So</span> <span
  m='2135320'>the</span> <span m='2135420'>hash</span> <span
  m='2135640'>function</span> <span m='2136000'>is what</span> <span
  m='2136170'>does</span> <span m='2136390'>the</span> <span
  m='2136480'>work</span> <span m='2137340'>of</span> <span
  m='2137470'>reducing</span> <span m='2138020'>your</span> <span
  m='2138250'>key</span> <span m='2138460'>space</span> <span
  m='2138910'>down</span> <span m='2139110'>to</span> <span
  m='2139210'>small</span> <span m='2140065'>set of</span> <span
  m='2140380'>slots.</span> <span m='2140730'>So</span> <span
  m='2140810'>that's</span> <span m='2141010'>what's</span> <span
  m='2141140'>going</span> <span m='2141250'>to</span> <span
  m='2141290'>give</span> <span m='2141460'>us</span> <span
  m='2141600'>low</span> <span m='2141750'>space.</span> <span
  m='2144180'>OK.</span> <span m='2144850'>But</span> <span
  m='2144920'>now,</span> <span m='2145130'>how</span> <span
  m='2145280'>do</span> <span m='2145360'>we</span> <span m='2145480'>get</span>
  <span m='2145660'>low</span> <span m='2145840'>time?</span> <span
  m='2147030'>Let</span> <span m='2147150'>me</span> <span
  m='2147250'>just</span> <span m='2147390'>state</span> <span
  m='2147610'>this</span> <span m='2147740'>assumption</span> <span
  m='2148025'>and</span> <span m='2148310'>get</span> <span
  m='2148840'>to</span> <span m='2148910'>business.</span> </p><p><span
  m='2193300'>Simply,</span> <span m='2193670'>uniform</span> <span
  m='2194050'>hashing</span> <span m='2194810'>is,</span> <span
  m='2195030'>essentially,</span> <span m='2195510'>two</span> <span
  m='2195970'>probabilistic</span> <span m='2196690'>assumptions.</span> <span
  m='2198050'>The</span> <span m='2198070'>first</span> <span
  m='2198400'>one</span> <span m='2199220'>is</span> <span
  m='2199490'>uniformity.</span> <span m='2201360'>If</span> <span
  m='2202190'>you</span> <span m='2202300'>take</span> <span
  m='2202600'>some</span> <span m='2202850'>key</span> <span
  m='2203140'>in</span> <span m='2203260'>your</span> <span
  m='2203390'>space</span> <span m='2204070'>that</span> <span
  m='2204180'>you</span> <span m='2204290'>want</span> <span
  m='2204470'>to</span> <span m='2204520'>store</span> <span
  m='2205480'>the</span> <span m='2205570'>hash</span> <span
  m='2205850'>function</span> <span m='2206170'>maps</span> <span
  m='2206580'>it</span> <span m='2207020'>to a</span> <span
  m='2207150'>uniform</span> <span m='2207790'>random</span> <span
  m='2208140'>choice.</span> <span m='2209230'>This is,</span> <span
  m='2209420'>of</span> <span m='2209540'>course,</span> <span m='2209760'>is
  what</span> <span m='2209910'>you</span> <span m='2210010'>want</span> <span
  m='2210280'>to</span> <span m='2210460'>happen.</span> <span
  m='2211540'>Each</span> <span m='2211790'>of</span> <span
  m='2211900'>these</span> <span m='2212100'>slots</span> <span
  m='2214030'>here</span> <span m='2214560'>is</span> <span
  m='2214770'>equally</span> <span m='2215250'>likely</span> <span
  m='2215950'>to</span> <span m='2216080'>be</span> <span
  m='2216220'>hashed</span> <span m='2216660'>to.</span> </p><p><span
  m='2218610'>OK.</span> <span m='2218770'>That's</span> <span
  m='2219080'>a</span> <span m='2219120'>good</span> <span
  m='2219330'>start.</span> <span m='2220020'>But</span> <span
  m='2220500'>to</span> <span m='2220680'>do</span> <span
  m='2221070'>proper</span> <span m='2221440'>analysis,</span> <span
  m='2221970'>not</span> <span m='2222160'>only</span> <span
  m='2222330'>do</span> <span m='2222440'>we</span> <span
  m='2222610'>uniformity,</span> <span m='2223550'>we</span> <span
  m='2223740'>also</span> <span m='2224030'>need</span> <span
  m='2224250'>independence.</span> <span m='2225900'>So</span> <span
  m='2226030'>not only</span> <span m='2226210'>is this</span> <span
  m='2226370'>true</span> <span m='2226740'>for</span> <span
  m='2226950'>each</span> <span m='2227170'>key</span> <span
  m='2227350'>individually,</span> <span m='2227870'>but</span> <span
  m='2228010'>it's</span> <span m='2228110'>true</span> <span
  m='2228260'>for</span> <span m='2228440'>all</span> <span
  m='2228680'>the</span> <span m='2228760'>keys</span> <span
  m='2229080'>together.</span> <span m='2230210'>So</span> <span
  m='2230460'>if</span> <span m='2230570'>key</span> <span
  m='2230790'>one</span> <span m='2231690'>maps to a</span> <span
  m='2232050'>uniform</span> <span m='2232510'>random</span> <span
  m='2232790'>place,</span> <span m='2233500'>no</span> <span
  m='2233600'>matter</span> <span m='2233930'>where</span> <span
  m='2234220'>it</span> <span m='2234300'>goes,</span> <span
  m='2235930'>key</span> <span m='2236130'>two</span> <span
  m='2236430'>also</span> <span m='2236840'>matches to a</span> <span
  m='2237230'>uniform</span> <span m='2237560'>random</span> <span
  m='2237780'>place.</span> <span m='2238270'>And</span> <span
  m='2238370'>no</span> <span m='2238470'>matter</span> <span
  m='2238560'>where</span> <span m='2238700'>those</span> <span
  m='2238950'>two</span> <span m='2239090'>go,</span> <span
  m='2239320'>key</span> <span m='2239550'>three</span> <span
  m='2239850'>maps</span> <span m='2240120'>to a</span> <span
  m='2240200'>uniform</span> <span m='2240600'>random</span> <span
  m='2240870'>place.</span> </p><p><span m='2242040'>This</span> <span
  m='2242260'>really</span> <span m='2242560'>can't</span> <span
  m='2242830'>be</span> <span m='2242960'>true.</span> <span
  m='2243640'>But</span> <span m='2244190'>if</span> <span
  m='2244380'>it's</span> <span m='2244550'>true,</span> <span
  m='2245150'>we</span> <span m='2245330'>can</span> <span
  m='2245480'>prove</span> <span m='2245775'>that</span> <span
  m='2246070'>this</span> <span m='2246260'>takes</span> <span
  m='2246510'>constant</span> <span m='2246910'>time.</span> <span
  m='2247830'>So</span> <span m='2247970'>let</span> <span m='2248130'>me</span>
  <span m='2249100'>do</span> <span m='2249230'>that.</span> <span
  m='2261180'>So</span> <span m='2261380'>under</span> <span
  m='2261660'>this</span> <span m='2261840'>assumption,</span> <span
  m='2263110'>we</span> <span m='2263190'>can</span> <span
  m='2263440'>analyze</span> <span m='2265660'>hashing--</span> <span
  m='2267070'>hashing</span> <span m='2267460'>with</span> <span
  m='2267600'>chaining</span> <span m='2268180'>is</span> <span
  m='2268340'>what</span> <span m='2268980'>this</span> <span
  m='2269150'>method</span> <span m='2269510'>is</span> <span
  m='2269650'>called.</span> <span m='2271400'>So</span> <span
  m='2272900'>let's</span> <span m='2276000'>do</span> <span
  m='2276160'>it</span> </p><p><span m='2276400'>I</span> <span
  m='2276510'>want</span> <span m='2276730'>to</span> <span
  m='2276800'>know--</span> <span m='2278740'>I</span> <span m='2278860'>got
  to</span> <span m='2279070'>cheat,</span> <span m='2279400'>sorry.</span>
  <span m='2279600'>I got to</span> <span m='2279900'>remember the</span> <span
  m='2280300'>notation.</span> <span m='2283690'>I don't</span> <span
  m='2283970'>have</span> <span m='2284110'>any</span> <span
  m='2284190'>good</span> <span m='2284410'>notation</span> <span
  m='2284780'>here.</span> <span m='2285460'>All</span> <span
  m='2285520'>right.</span> </p><p><span m='2288100'>What</span> <span
  m='2288300'>I'd</span> <span m='2288420'>like</span> <span
  m='2288590'>to</span> <span m='2288700'>know</span> <span
  m='2289690'>is</span> <span m='2290000'>the</span> <span
  m='2290210'>expected</span> <span m='2292230'>length</span> <span
  m='2292520'>of</span> <span m='2292610'>a</span> <span
  m='2292700'>chain.</span> <span m='2298770'>OK.</span> <span
  m='2298960'>Now</span> <span m='2299130'>this</span> <span
  m='2299340'>is</span> <span m='2299640'>if</span> <span m='2299960'>I</span>
  <span m='2300080'>have</span> <span m='2301185'>n</span> <span
  m='2301610'>keys</span> <span m='2302540'>that</span> <span
  m='2302660'>are</span> <span m='2302770'>stored</span> <span
  m='2303090'>in</span> <span m='2303170'>the</span> <span
  m='2303280'>table,</span> <span m='2305160'>and</span> <span
  m='2305400'>m</span> <span m='2305740'>slots</span> <span
  m='2306370'>in</span> <span m='2306500'>the</span> <span
  m='2306610'>table,</span> <span m='2308760'>then</span> <span
  m='2309000'>what</span> <span m='2309220'>is</span> <span
  m='2309370'>the</span> <span m='2309500'>expected</span> <span
  m='2310690'>length</span> <span m='2311020'>of</span> <span
  m='2311150'>a</span> <span m='2311220'>chain?</span> <span
  m='2312030'>Any</span> <span m='2312260'>suggestions.</span> <span
  m='2313290'>Yeah.</span> </p><p><span m='2313630'>AUDIENCE: 1</span> <span
  m='2314078'>over</span> <span m='2314526'>m</span> <span m='2314974'>to
  the</span> <span m='2315422'>n.</span> </p><p><span m='2315870'>PROFESSOR:
  1</span> <span m='2316160'>over</span> <span m='2316380'>m</span> <span
  m='2316590'>to</span> <span m='2316690'>the</span> <span m='2316870'>n?</span>
  <span m='2317480'>That's</span> <span m='2317690'>going</span> <span
  m='2317810'>to</span> <span m='2317870'>be</span> <span m='2317990'>a</span>
  <span m='2318070'>probability</span> <span m='2319190'>of</span> <span
  m='2319740'>something.</span> <span m='2321710'>Not</span> <span
  m='2321890'>quite.</span> </p><p><span m='2322200'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2323370'>PROFESSOR: That's</span> <span
  m='2323580'>between</span> <span m='2323900'>0</span> <span
  m='2324140'>and</span> <span m='2324210'>1.</span> <span
  m='2324490'>It's</span> <span m='2324970'>probably</span> <span
  m='2325360'>at</span> <span m='2325410'>least</span> <span
  m='2325680'>one,</span> <span m='2326380'>or</span> <span
  m='2326810'>something.</span> <span m='2327100'>Yeah.</span> </p><p><span
  m='2327855'>AUDIENCE: m</span> <span m='2328300'>over</span> <span
  m='2328745'>n.</span> </p><p><span m='2329190'>PROFESSOR: n</span> <span
  m='2329360'>over</span> <span m='2329600'>m,</span> <span
  m='2330638'>yeah.</span> <span m='2334630'>It's</span> <span
  m='2334830'>really</span> <span m='2335140'>easy.</span> <span
  m='2336070'>The</span> <span m='2336180'>chance</span> <span
  m='2336560'>of</span> <span m='2336680'>a</span> <span m='2336740'>key</span>
  <span m='2337110'>going</span> <span m='2337380'>to a</span> <span
  m='2337490'>particular</span> <span m='2337920'>slot</span> <span
  m='2338300'>is</span> <span m='2338450'>1</span> <span m='2338680'>over</span>
  <span m='2338880'>m.</span> <span m='2340010'>They're</span> <span
  m='2340220'>all</span> <span m='2340460'>independent,</span> <span
  m='2341500'>so</span> <span m='2341610'>it's</span> <span m='2341700'>1</span>
  <span m='2341880'>over</span> <span m='2342100'>m,</span> <span
  m='2342270'>plus</span> <span m='2342460'>1</span> <span
  m='2342610'>over</span> <span m='2342830'>m,</span> <span
  m='2343020'>plus</span> <span m='2343190'>1</span> <span
  m='2343310'>over</span> <span m='2343490'>m,</span> <span m='2343840'>n</span>
  <span m='2344160'>times.</span> <span m='2345160'>So it's</span> <span
  m='2345500'>n</span> <span m='2345640'>over</span> <span m='2345870'>m.</span>
  </p><p><span m='2347100'>This</span> <span m='2347320'>is</span> <span
  m='2347490'>really</span> <span m='2347900'>easy</span> <span
  m='2348940'>when</span> <span m='2349100'>you</span> <span
  m='2349180'>have</span> <span m='2349440'>independence.</span> <span
  m='2350730'>Sadly,</span> <span m='2351320'>in</span> <span
  m='2351590'>the</span> <span m='2351690'>real</span> <span
  m='2351890'>world,</span> <span m='2352250'>you</span> <span
  m='2352350'>don't</span> <span m='2352410'>have</span> <span
  m='2352560'>independence.</span> <span m='2353210'>We're</span> <span
  m='2353370'>going</span> <span m='2353460'>to</span> <span
  m='2353530'>call</span> <span m='2353750'>this</span> <span
  m='2353900'>thing</span> <span m='2354120'>alpha,</span> <span
  m='2355806'>and</span> <span m='2356260'>it's</span> <span
  m='2356450'>also</span> <span m='2356710'>known</span> <span
  m='2356920'>as</span> <span m='2357060'>the</span> <span
  m='2357200'>load</span> <span m='2357560'>factor</span> <span
  m='2358986'>of</span> <span m='2359390'>the</span> <span
  m='2359500'>table.</span> <span m='2361560'>So</span> <span
  m='2361690'>if</span> <span m='2361770'>it's</span> <span
  m='2361900'>one,</span> <span m='2363130'>n</span> <span
  m='2363310'>equals</span> <span m='2363620'>m.</span> <span
  m='2364960'>And</span> <span m='2365190'>so</span> <span
  m='2365350'>the</span> <span m='2365610'>length</span> <span
  m='2365900'>of</span> <span m='2365970'>a</span> <span
  m='2366020'>chain</span> <span m='2366250'>is</span> <span
  m='2366340'>one.</span> </p><p><span m='2367650'>If</span> <span
  m='2367900'>it's</span> <span m='2368300'>10,</span> <span
  m='2369540'>then</span> <span m='2369810'>you</span> <span
  m='2369920'>have</span> <span m='2370140'>10</span> <span
  m='2370420'>times</span> <span m='2370670'>as</span> <span
  m='2370760'>many</span> <span m='2370990'>elements</span> <span
  m='2371350'>as</span> <span m='2371460'>you</span> <span
  m='2371550'>have</span> <span m='2371660'>slots.</span> <span
  m='2372130'>But</span> <span m='2372280'>still, the</span> <span
  m='2372710'>expected</span> <span m='2373250'>length</span> <span
  m='2373460'>of</span> <span m='2373530'>a</span> <span
  m='2373590'>chain</span> <span m='2373850'>is</span> <span
  m='2373970'>10.</span> <span m='2374560'>That's</span> <span
  m='2374760'>a</span> <span m='2374820'>constant.</span> <span
  m='2375660'>It's</span> <span m='2375760'>OK.</span> </p><p><span
  m='2376470'>If</span> <span m='2376650'>it's</span> <span m='2377190'>a</span>
  <span m='2377300'>12,</span> <span m='2377840'>that's</span> <span
  m='2378090'>OK.</span> <span m='2378740'>It means</span> <span
  m='2378810'>that</span> <span m='2378885'>you</span> <span
  m='2378960'>have</span> <span m='2379035'>a</span> <span
  m='2379110'>bigger</span> <span m='2379480'>table</span> <span
  m='2379810'>than</span> <span m='2379910'>you</span> <span
  m='2380000'>have</span> <span m='2380190'>items.</span> <span
  m='2381080'>As</span> <span m='2381120'>long</span> <span
  m='2381340'>as</span> <span m='2381440'>it's</span> <span m='2381570'>a</span>
  <span m='2381640'>constant,</span> <span m='2382200'>as</span> <span
  m='2382340'>long</span> <span m='2382610'>as</span> <span
  m='2382710'>we</span> <span m='2382880'>have--</span> <span
  m='2384930'>I</span> <span m='2385210'>erased</span> <span
  m='2385540'>it</span> <span m='2385620'>by</span> <span
  m='2385740'>now--</span> <span m='2385980'>as</span> <span
  m='2386120'>long</span> <span m='2386360'>as</span> <span m='2386580'>m</span>
  <span m='2388380'>is</span> <span m='2388740'>theta</span> <span
  m='2389130'>n,</span> <span m='2390030'>this</span> <span
  m='2390220'>is</span> <span m='2390280'>going</span> <span
  m='2390450'>to</span> <span m='2390510'>be</span> <span
  m='2390630'>constant.</span> </p><p><span m='2395730'>And</span> <span
  m='2395850'>so</span> <span m='2396410'>we</span> <span
  m='2396570'>need</span> <span m='2396720'>to</span> <span
  m='2396800'>maintain</span> <span m='2397180'>this</span> <span
  m='2397320'>property.</span> <span m='2397710'>But</span> <span
  m='2397800'>as</span> <span m='2398200'>long as</span> <span
  m='2398280'>you</span> <span m='2398380'>set</span> <span
  m='2398570'>your</span> <span m='2398700'>table</span> <span
  m='2398980'>size</span> <span m='2399380'>to</span> <span
  m='2399520'>the</span> <span m='2399630'>right</span> <span
  m='2399840'>value,</span> <span m='2400290'>to</span> <span
  m='2400420'>be</span> <span m='2400570'>roughly</span> <span
  m='2400960'>n,</span> <span m='2402510'>this</span> <span
  m='2402650'>will</span> <span m='2402740'>be</span> <span
  m='2402880'>constant.</span> <span m='2404730'>And</span> <span
  m='2404980'>so</span> <span m='2406510'>the</span> <span
  m='2407820'>running</span> <span m='2408180'>time</span> <span
  m='2409080'>of</span> <span m='2409220'>an</span> <span
  m='2409300'>operation,</span> <span m='2411960'>insert,</span> <span
  m='2412480'>delete,</span> <span m='2412900'>and</span> <span
  m='2413040'>search--</span> <span m='2416290'>Well,</span> <span
  m='2416840'>search</span> <span m='2417170'>is</span> <span
  m='2417270'>really</span> <span m='2417480'>the</span> <span
  m='2417560'>hardest</span> <span m='2418560'>because</span> <span
  m='2418740'>when</span> <span m='2418870'>you</span> <span
  m='2419010'>want</span> <span m='2419160'>to</span> <span
  m='2419220'>search</span> <span m='2419560'>for a</span> <span
  m='2419730'>key,</span> <span m='2420430'>you</span> <span
  m='2420580'>map</span> <span m='2420870'>it</span> <span
  m='2420980'>into</span> <span m='2422000'>your</span> <span
  m='2422140'>table,</span> <span m='2422920'>then</span> <span
  m='2423070'>you</span> <span m='2423200'>walk</span> <span
  m='2423610'>the</span> <span m='2423710'>linked</span> <span
  m='2423970'>list</span> <span m='2424700'>and</span> <span
  m='2424840'>look</span> <span m='2425060'>for</span> <span
  m='2425170'>the</span> <span m='2425290'>key that</span> <span
  m='2425700'>you're</span> <span m='2426160'>searching</span> <span
  m='2426580'>for.</span> </p><p><span m='2426880'>Now</span> <span
  m='2427340'>is</span> <span m='2427470'>this the</span> <span
  m='2427640'>key</span> <span m='2427850'>you're</span> <span
  m='2427920'>searching</span> <span m='2428200'>for?</span> <span
  m='2428400'>No,</span> <span m='2428840'>it's</span> <span m='2428970'>not the
  key</span> <span m='2429140'>you're</span> <span m='2429360'>searching</span>
  <span m='2429680'>for.</span> <span m='2430350'>Is</span> <span
  m='2430690'>this the key</span> <span m='2431030'>you're</span> <span
  m='2431210'>searching</span> <span m='2431520'>for?</span> <span
  m='2432140'>Those are</span> <span m='2432280'>not</span> <span
  m='2432490'>the</span> <span m='2432570'>keys</span> <span
  m='2432840'>you're</span> <span m='2432920'>searching</span> <span
  m='2433250'>for.</span> <span m='2433790'>You</span> <span
  m='2433910'>keep</span> <span m='2434100'>going.</span> <span
  m='2434510'>Either</span> <span m='2434820'>you</span> <span
  m='2434980'>find</span> <span m='2435280'>your</span> <span
  m='2435400'>key</span> <span m='2435620'>or</span> <span
  m='2435710'>you</span> <span m='2435820'>don't.</span> <span m='2436650'>But
  in</span> <span m='2436790'>the</span> <span m='2436890'>worst</span> <span
  m='2437080'>case,</span> <span m='2437250'>you</span> <span
  m='2437350'>have</span> <span m='2437520'>to</span> <span
  m='2437620'>walk</span> <span m='2437970'>the</span> <span
  m='2438090'>entire</span> <span m='2438620'>list.</span> </p><p><span
  m='2440540'>Sorry</span> <span m='2440870'>for</span> <span m='2440980'>the
  bad</span> <span m='2441570'><i>Star Trek</i></span> <span
  m='2442070'>reference--</span> <span m='2442130'><i>Star Wars</i>.</span>
  <span m='2442350'>God.</span> <span m='2445110'>I'm not</span> <span
  m='2445250'>awake.</span> <span m='2445930'>All</span> <span
  m='2446190'>right.</span> </p><p><span m='2448370'>In</span> <span
  m='2448520'>general,</span> <span m='2448960'>the</span> <span
  m='2449060'>running</span> <span m='2449300'>time,</span> <span
  m='2450010'>in</span> <span m='2450140'>the</span> <span
  m='2450220'>worst</span> <span m='2450480'>case,</span> <span
  m='2450820'>is</span> <span m='2450960'>1</span> <span m='2451290'>plus</span>
  <span m='2452110'>the</span> <span m='2452200'>length</span> <span
  m='2453230'>of</span> <span m='2453410'>your</span> <span
  m='2453530'>chain.</span> <span m='2456650'>OK.</span> <span
  m='2456830'>So</span> <span m='2457040'>it's</span> <span
  m='2457150'>going</span> <span m='2457290'>to</span> <span
  m='2457360'>be</span> <span m='2458260'>1</span> <span m='2458510'>plus</span>
  <span m='2458850'>alpha.</span> <span m='2459340'>Why</span> <span
  m='2459700'>do I</span> <span m='2459900'>write</span> <span
  m='2460230'>one?</span> </p><p><span m='2460970'>Well,</span> <span
  m='2462590'>because</span> <span m='2462800'>alpha</span> <span
  m='2463060'>can</span> <span m='2463170'>be</span> <span
  m='2463280'>much</span> <span m='2463450'>smaller</span> <span
  m='2463790'>than</span> <span m='2463920'>1,</span> <span
  m='2464120'>in</span> <span m='2464200'>general.</span> <span
  m='2464930'>And</span> <span m='2465070'>you</span> <span
  m='2465220'>always</span> <span m='2465550'>have</span> <span
  m='2465700'>to</span> <span m='2465800'>pay</span> <span
  m='2465990'>the</span> <span m='2466090'>cost</span> <span
  m='2466420'>of</span> <span m='2466530'>computing</span> <span
  m='2467050'>the</span> <span m='2467120'>hash</span> <span
  m='2467430'>function.</span> <span m='2467810'>We're</span> <span
  m='2467920'>going</span> <span m='2468030'>to</span> <span
  m='2468070'>assume</span> <span m='2468310'>that</span> <span
  m='2468490'>takes</span> <span m='2468720'>constant</span> <span
  m='2469110'>time.</span> <span m='2470770'>And</span> <span
  m='2470960'>then</span> <span m='2471170'>you</span> <span
  m='2471280'>have</span> <span m='2471530'>to</span> <span
  m='2472020'>follow</span> <span m='2472390'>the</span> <span
  m='2472490'>first</span> <span m='2472760'>pointer.</span> </p><p><span
  m='2473200'>So</span> <span m='2473430'>you always</span> <span
  m='2473570'>pay</span> <span m='2473770'>constant</span> <span
  m='2474140'>time,</span> <span m='2475180'>but</span> <span
  m='2475320'>then</span> <span m='2475450'>you</span> <span
  m='2475570'>also</span> <span m='2475840'>pay</span> <span
  m='2476010'>alpha.</span> <span m='2477590'>That's</span> <span
  m='2477790'>your</span> <span m='2477900'>expected</span> <span
  m='2478310'>life.</span> <span m='2480760'>OK.</span> <span m='2480970'>That's
  the</span> <span m='2481250'>analysis.</span> <span m='2481930'>It's</span>
  <span m='2482040'>super</span> <span m='2482490'>simple.</span> </p><p><span
  m='2483080'>If</span> <span m='2483130'>you</span> <span
  m='2483260'>assume</span> <span m='2483610'>Simple</span> <span
  m='2483930'>Uniform</span> <span m='2484330'>Hashing,</span> <span
  m='2485860'>it's</span> <span m='2486050'>clear,</span> <span
  m='2486520'>as</span> <span m='2486640'>long</span> <span
  m='2486920'>as</span> <span m='2487030'>your</span> <span
  m='2487210'>load</span> <span m='2487430'>factor is</span> <span
  m='2487850'>constant,</span> <span m='2488860'>m</span> <span
  m='2489170'>theta</span> <span m='2489450'>n,</span> <span
  m='2490550'>you</span> <span m='2490710'>get</span> <span
  m='2490980'>constant</span> <span m='2491480'>running</span> <span
  m='2491730'>time</span> <span m='2491970'>for</span> <span
  m='2492090'>all</span> <span m='2492210'>your</span> <span
  m='2492340'>operations.</span> <span m='2493490'>Life</span> <span
  m='2493750'>is</span> <span m='2493910'>good.</span> <span
  m='2494530'>This</span> <span m='2494740'>is</span> <span
  m='2495530'>the</span> <span m='2495630'>intuition</span> <span
  m='2496140'>of</span> <span m='2496210'>why</span> <span
  m='2496390'>hashing</span> <span m='2496740'>works.</span> </p><p><span
  m='2497010'>It's</span> <span m='2497130'>not</span> <span
  m='2497320'>really</span> <span m='2497620'>why</span> <span
  m='2497760'>hashing</span> <span m='2498100'>works.</span> <span
  m='2499140'>But</span> <span m='2499170'>it's</span> <span
  m='2500180'>about</span> <span m='2500740'>as</span> <span
  m='2500870'>far</span> <span m='2501120'>as</span> <span
  m='2501190'>we're</span> <span m='2501300'>going</span> <span
  m='2501410'>to</span> <span m='2501470'>get</span> <span m='2502470'>in</span>
  <span m='2502570'>006.</span> <span m='2503210'>I'm</span> <span
  m='2503330'>going</span> <span m='2503410'>to</span> <span
  m='2503880'>tell</span> <span m='2504090'>you</span> <span
  m='2504220'>a</span> <span m='2504250'>little</span> <span
  m='2504430'>bit</span> <span m='2504600'>more</span> <span
  m='2504800'>about</span> <span m='2506000'>why</span> <span
  m='2506140'>hashing</span> <span m='2506500'>is</span> <span
  m='2506590'>actually</span> <span m='2506960'>good</span> <span
  m='2507100'>to</span> <span m='2507170'>practice</span> <span
  m='2508580'>and</span> <span m='2508810'>in</span> <span
  m='2508910'>theory.</span> <span m='2526820'>What</span> <span
  m='2527140'>are</span> <span m='2527310'>we</span> <span m='2527510'>up</span>
  <span m='2527928'>to?</span> </p><p><span m='2530020'>Last</span> <span
  m='2530260'>topic</span> <span m='2530620'>is</span> <span
  m='2531330'>hash</span> <span m='2531650'>functions.</span> <span
  m='2532740'>The</span> <span m='2532830'>one</span> <span
  m='2533060'>remaining</span> <span m='2533490'>thing</span> <span
  m='2533740'>is</span> <span m='2534860'>how</span> <span m='2535100'>do</span>
  <span m='2535200'>I</span> <span m='2535270'>construct</span> <span
  m='2535810'>h?</span> <span m='2536380'>How</span> <span m='2536560'>do</span>
  <span m='2536690'>I</span> <span m='2536760'>actually</span> <span
  m='2537150'>map</span> <span m='2537700'>from</span> <span
  m='2537850'>this</span> <span m='2538010'>giant</span> <span
  m='2538370'>universe</span> <span m='2538800'>of</span> <span
  m='2538920'>keys</span> <span m='2539800'>to</span> <span
  m='2539960'>this</span> <span m='2540090'>small</span> <span
  m='2540810'>set</span> <span m='2541070'>of</span> <span
  m='2541210'>slots</span> <span m='2541610'>in</span> <span
  m='2541690'>the</span> <span m='2541790'>table,</span> <span
  m='2543270'>there's</span> <span m='2543530'>m</span> <span
  m='2544007'>of</span> <span m='2544484'>them?</span> </p><p><span
  m='2549260'>I'm</span> <span m='2549410'>going</span> <span
  m='2549620'>to</span> <span m='2549680'>give</span> <span
  m='2549870'>you</span> <span m='2549970'>three</span> <span
  m='2550270'>hash</span> <span m='2550530'>functions,</span> <span
  m='2552380'>two</span> <span m='2552570'>of</span> <span
  m='2552700'>which</span> <span m='2553150'>are,</span> <span
  m='2554140'>let's</span> <span m='2554420'>say,</span> <span
  m='2554540'>common</span> <span m='2554950'>practice,</span> <span
  m='2556040'>and</span> <span m='2556170'>the</span> <span
  m='2556230'>third</span> <span m='2556450'>of</span> <span
  m='2556520'>which</span> <span m='2556720'>is</span> <span
  m='2556830'>actually</span> <span m='2557210'>theoretically</span> <span
  m='2557760'>good.</span> <span m='2558710'>So</span> <span
  m='2559050'>the</span> <span m='2559110'>first</span> <span
  m='2559420'>two</span> <span m='2559530'>are</span> <span
  m='2559630'>not</span> <span m='2559890'>good</span> <span
  m='2560070'>theoretically.</span> <span m='2560930'>You</span> <span
  m='2561060'>can</span> <span m='2561180'>prove</span> <span
  m='2561390'>that</span> <span m='2561520'>they're</span> <span
  m='2561630'>bad,</span> <span m='2562540'>but</span> <span
  m='2562710'>at</span> <span m='2562770'>least</span> <span
  m='2562990'>they</span> <span m='2563060'>give</span> <span
  m='2563270'>you</span> <span m='2563370'>some</span> <span
  m='2563610'>flavor,</span> <span m='2564740'>and</span> <span
  m='2564960'>they're</span> <span m='2565190'>still</span> <span
  m='2565450'>common</span> <span m='2565740'>in</span> <span
  m='2565830'>practice</span> <span m='2567800'>because</span> <span
  m='2568040'>a</span> <span m='2568140'>lot</span> <span m='2568340'>of</span>
  <span m='2568410'>the</span> <span m='2568520'>time</span> <span
  m='2569450'>they're</span> <span m='2569680'>OK,</span> <span
  m='2572010'>but</span> <span m='2572300'>you</span> <span
  m='2572440'>can't</span> <span m='2572640'>really</span> <span
  m='2572840'>prove</span> <span m='2573060'>much</span> <span
  m='2573280'>about</span> <span m='2573560'>them.</span> <span
  m='2576630'>OK.</span> </p><p><span m='2576990'>So</span> <span
  m='2577690'>first</span> <span m='2578020'>method,</span> <span
  m='2579080'>sort of</span> <span m='2579290'>the</span> <span
  m='2579470'>obvious</span> <span m='2579820'>one,</span> <span
  m='2583000'>called</span> <span m='2583180'>the</span> <span
  m='2583260'>division</span> <span m='2583660'>method.</span> <span
  m='2584940'>And</span> <span m='2585120'>if</span> <span
  m='2585190'>you</span> <span m='2585290'>have</span> <span
  m='2585672'>a</span> <span m='2586054'>key,</span> <span m='2586436'>this
  could</span> <span m='2586820'>be</span> <span m='2586960'>a</span> <span
  m='2587020'>giant</span> <span m='2587480'>key,</span> <span
  m='2587800'>huge</span> <span m='2588070'>universe</span> <span
  m='2588750'>of</span> <span m='2589090'>keys,</span> <span
  m='2589950'>you</span> <span m='2590040'>just</span> <span
  m='2590280'>take</span> <span m='2590500'>that</span> <span
  m='2590720'>key,</span> <span m='2591650'>modulo</span> <span
  m='2593310'>m,</span> <span m='2594240'>that</span> <span
  m='2594440'>gives</span> <span m='2594600'>you</span> <span
  m='2594690'>a</span> <span m='2594740'>number</span> <span
  m='2594980'>between</span> <span m='2595250'>zero</span> <span
  m='2595440'>and</span> <span m='2595520'>m</span> <span
  m='2595630'>minus</span> <span m='2595890'>1.</span> <span
  m='2596190'>Done.</span> <span m='2597110'>It's so</span> <span
  m='2597400'>easy.</span> </p><p><span m='2599880'>I'm</span> <span
  m='2600020'>not</span> <span m='2600170'>going</span> <span
  m='2600260'>to</span> <span m='2600330'>tell</span> <span
  m='2600480'>you</span> <span m='2600580'>in</span> <span
  m='2600670'>detail</span> <span m='2601000'>why</span> <span
  m='2601160'>this</span> <span m='2601350'>is</span> <span m='2601450'>a</span>
  <span m='2601500'>bad</span> <span m='2602110'>method.</span> <span
  m='2602660'>Maybe</span> <span m='2602880'>you</span> <span
  m='2602980'>can</span> <span m='2603120'>think</span> <span
  m='2603300'>about</span> <span m='2603590'>it.</span> <span
  m='2604060'>It's</span> <span m='2604280'>especially</span> <span
  m='2604840'>bad</span> <span m='2605140'>if</span> <span m='2605260'>m</span>
  <span m='2607940'>has</span> <span m='2608140'>some</span> <span
  m='2608350'>common</span> <span m='2608700'>factors</span> <span
  m='2609190'>with</span> <span m='2609350'>k.</span> </p><p><span
  m='2609890'>Like,</span> <span m='2611070'>let's</span> <span
  m='2611150'>say</span> <span m='2611440'>k</span> <span m='2611740'>is</span>
  <span m='2611930'>even</span> <span m='2612420'>always,</span> <span
  m='2612980'>and</span> <span m='2613140'>m</span> <span m='2613370'>is</span>
  <span m='2613660'>even</span> <span m='2613970'>also</span> <span
  m='2614800'>because</span> <span m='2614980'>you</span> <span
  m='2615070'>say,</span> <span m='2615240'>oh,</span> <span m='2615440'>I'd
  like</span> <span m='2615650'>a</span> <span m='2615710'>table the</span>
  <span m='2616080'>size</span> <span m='2616300'>of</span> <span
  m='2616350'>power</span> <span m='2616600'>of</span> <span
  m='2616690'>two.</span> <span m='2616890'>That</span> <span
  m='2617050'>seems</span> <span m='2617270'>natural.</span> <span
  m='2618330'>Then</span> <span m='2618520'>that</span> <span
  m='2618700'>will</span> <span m='2618780'>be</span> <span
  m='2618930'>really</span> <span m='2619130'>bad because</span> <span
  m='2619450'>you'll</span> <span m='2619760'>use</span> <span
  m='2620010'>only</span> <span m='2620210'>half</span> <span
  m='2620440'>the</span> <span m='2620520'>table.</span> <span
  m='2621650'>There</span> <span m='2621730'>are</span> <span
  m='2621750'>lots</span> <span m='2622030'>of</span> <span
  m='2622100'>situations</span> <span m='2622670'>where</span> <span
  m='2622770'>this</span> <span m='2622940'>is</span> <span
  m='2623040'>bad.</span> </p><p><span m='2624060'>In</span> <span
  m='2624180'>practice,</span> <span m='2625220'>it's</span> <span
  m='2625390'>pretty</span> <span m='2625650'>good.</span> <span
  m='2626640'>If</span> <span m='2626820'>m</span> <span m='2627040'>is</span>
  <span m='2627180'>prime,</span> <span m='2628110'>you always</span> <span
  m='2628240'>choose</span> <span m='2628330'>a</span> <span
  m='2628390'>prime</span> <span m='2628790'>table</span> <span
  m='2629070'>size,</span> <span m='2629440'>so</span> <span
  m='2629540'>you</span> <span m='2629620'>don't</span> <span
  m='2629750'>have</span> <span m='2629870'>those</span> <span
  m='2630030'>common</span> <span m='2630280'>factors.</span> <span
  m='2631060'>And</span> <span m='2631420'>it's</span> <span
  m='2631560'>not</span> <span m='2631770'>very</span> <span
  m='2631940'>close</span> <span m='2632200'>to</span> <span
  m='2632280'>a</span> <span m='2632340'>power</span> <span
  m='2632610'>of</span> <span m='2632710'>2</span> <span m='2632980'>or</span>
  <span m='2633150'>power</span> <span m='2633420'>of</span> <span
  m='2633540'>10</span> <span m='2634610'>because</span> <span
  m='2635060'>real</span> <span m='2635340'>world</span> <span
  m='2635720'>powers</span> <span m='2636000'>of</span> <span
  m='2636080'>2's</span> <span m='2636530'>and 10's</span> <span
  m='2636820'>are</span> <span m='2636920'>common.</span> <span
  m='2637920'>But</span> <span m='2638080'>it's</span> <span
  m='2638330'>very</span> <span m='2638870'>hackish,</span> <span
  m='2639460'>OK?</span> <span m='2639740'>It works</span> <span
  m='2640060'>a</span> <span m='2640130'>lot</span> <span m='2640340'>of</span>
  <span m='2640400'>the</span> <span m='2640470'>time</span> <span
  m='2640770'>but</span> <span m='2641380'>not</span> <span
  m='2641560'>always.</span> </p><p><span m='2642990'>A</span> <span
  m='2643130'>cooler</span> <span m='2643500'>method--</span> <span
  m='2644430'>I</span> <span m='2644580'>think</span> <span
  m='2644700'>it's</span> <span m='2644840'>cooler--</span> <span
  m='2646970'>still,</span> <span m='2647570'>you</span> <span
  m='2647700'>can't</span> <span m='2647980'>prove</span> <span
  m='2648110'>much</span> <span m='2648340'>about</span> <span
  m='2648610'>it--</span> <span m='2653710'>Division</span> <span
  m='2654140'>didn't</span> <span m='2654290'>seem</span> <span
  m='2654480'>to</span> <span m='2654530'>work</span> <span
  m='2654730'>so</span> <span m='2654880'>great,</span> <span
  m='2655130'>so</span> <span m='2655240'>how</span> <span
  m='2655390'>about</span> <span m='2655480'>multiplication?</span> <span
  m='2657290'>What does</span> <span m='2657480'>that</span> <span
  m='2657700'>mean?</span> <span m='2658140'>Multiply</span> <span
  m='2658620'>by</span> <span m='2658780'>m,</span> <span
  m='2659130'>that</span> <span m='2659290'>wouldn't</span> <span
  m='2659440'>be</span> <span m='2659590'>very</span> <span
  m='2659800'>good.</span> <span m='2660420'>Now,</span> <span
  m='2661520'>it's</span> <span m='2662876'>a bit</span> <span
  m='2663330'>different.</span> </p><p><span m='2664790'>We're</span> <span
  m='2664910'>going</span> <span m='2665010'>to</span> <span
  m='2665090'>take</span> <span m='2666180'>the</span> <span
  m='2666290'>key,</span> <span m='2666540'>multiply</span> <span
  m='2667190'>it</span> <span m='2667320'>by</span> <span m='2667520'>an</span>
  <span m='2667600'>integer,</span> <span m='2668150'>a,</span> <span
  m='2670780'>and</span> <span m='2670920'>then we're</span> <span
  m='2671310'>going</span> <span m='2671460'>to</span> <span
  m='2671530'>do</span> <span m='2671640'>this</span> <span
  m='2671860'>crazy,</span> <span m='2673320'>crazy</span> <span
  m='2673740'>stuff.</span> <span m='2675000'>Take</span> <span
  m='2675070'>it</span> <span m='2675250'>mod</span> <span m='2675760'>2</span>
  <span m='2675940'>to</span> <span m='2676010'>the</span> <span
  m='2676110'>w</span> <span m='2676610'>and</span> <span
  m='2677110'>then</span> <span m='2677270'>shift</span> <span
  m='2677650'>it</span> <span m='2677770'>right,</span> <span
  m='2678870'>w</span> <span m='2679400'>minus</span> <span
  m='2679960'>r.</span> <span m='2681920'>OK.</span> <span
  m='2682450'>What</span> <span m='2682790'>is</span> <span
  m='2683030'>w?</span> </p><p><span m='2683890'>We're</span> <span
  m='2684000'>assuming</span> <span m='2685040'>that</span> <span
  m='2685190'>we're</span> <span m='2685390'>in</span> <span
  m='2685610'>a</span> <span m='2685670'>w-bit</span> <span
  m='2687620'>machine.</span> <span m='2688380'>Remember</span> <span
  m='2688990'>way</span> <span m='2689150'>back</span> <span
  m='2689500'>in</span> <span m='2689720'>models</span> <span
  m='2690050'>of</span> <span m='2690120'>computation?</span> <span
  m='2691780'>Your</span> <span m='2691950'>machine</span> <span
  m='2692270'>has</span> <span m='2692450'>a</span> <span
  m='2692520'>word</span> <span m='2692790'>size,</span> <span
  m='2693330'>it's</span> <span m='2693480'>w</span> <span
  m='2693810'>bits.</span> <span m='2694720'>So</span> <span
  m='2694840'>let's</span> <span m='2695020'>suppose</span> <span
  m='2695330'>it's</span> <span m='2695440'>w</span> <span
  m='2695780'>bits.</span> <span m='2696450'>So</span> <span
  m='2696600'>we</span> <span m='2696700'>have</span> <span
  m='2696930'>our</span> <span m='2697050'>key,</span> <span
  m='2697260'>k.</span> <span m='2699530'>Here</span> <span m='2699740'>it
  is.</span> <span m='2700050'>It's</span> <span m='2700240'>w</span> <span
  m='2700600'>bits</span> <span m='2700830'>long.</span> </p><p><span
  m='2703930'>We</span> <span m='2704080'>take</span> <span
  m='2704320'>some</span> <span m='2704540'>number,</span> <span
  m='2704900'>a--</span> <span m='2706270'>think</span> <span m='2706770'>of
  a</span> <span m='2706870'>as</span> <span m='2707150'>being</span> <span
  m='2707340'>a</span> <span m='2707470'>random</span> <span
  m='2707910'>integer</span> <span m='2709090'>among</span> <span
  m='2709340'>all</span> <span m='2709600'>possible</span> <span
  m='2710130'>w</span> <span m='2710480'>bit</span> <span
  m='2710700'>integers.</span> <span m='2712070'>So</span> <span
  m='2712300'>it's</span> <span m='2712420'>got</span> <span
  m='2712630'>some</span> <span m='2712770'>zeros,</span> <span
  m='2713820'>it's</span> <span m='2713960'>got some</span> <span
  m='2714140'>ones.</span> <span m='2717140'>And</span> <span
  m='2717500'>I</span> <span m='2717570'>multiply</span> <span
  m='2718230'>these.</span> <span m='2718950'>What does</span> <span
  m='2719250'>multiplication</span> <span m='2719950'>mean</span> <span
  m='2720160'>in</span> <span m='2720240'>binary?</span> <span
  m='2720630'>Well,</span> <span m='2721170'>I</span> <span
  m='2721310'>take</span> <span m='2721900'>one</span> <span
  m='2722180'>of</span> <span m='2722260'>these</span> <span
  m='2722480'>copies</span> <span m='2723280'>of</span> <span
  m='2723420'>k</span> <span m='2723870'>for</span> <span
  m='2724040'>each</span> <span m='2724220'>one</span> <span
  m='2724680'>that's</span> <span m='2724770'>here.</span> </p><p><span
  m='2725560'>So</span> <span m='2725680'>I'm</span> <span
  m='2725730'>going</span> <span m='2725820'>to</span> <span
  m='2725870'>take</span> <span m='2726050'>one</span> <span
  m='2726260'>copy</span> <span m='2726590'>here</span> <span
  m='2727560'>because</span> <span m='2728290'>there's</span> <span
  m='2728470'>a</span> <span m='2728530'>one</span> <span
  m='2728760'>there.</span> <span m='2729320'>I'm</span> <span m='2729520'>going
  to</span> <span m='2729560'>take</span> <span m='2729790'>one</span> <span
  m='2729970'>copy</span> <span m='2730300'>here</span> <span
  m='2731320'>because</span> <span m='2731570'>there's</span> <span
  m='2731720'>a</span> <span m='2731790'>one</span> <span
  m='2732000'>there.</span> <span m='2732560'>And</span> <span m='2732920'>I'm
  going to</span> <span m='2732960'>take</span> <span m='2733200'>one</span>
  <span m='2733370'>copy</span> <span m='2733700'>here</span> <span
  m='2735510'>because</span> <span m='2735760'>there's</span> <span
  m='2735950'>a</span> <span m='2736020'>one</span> <span
  m='2736270'>there.</span> <span m='2737860'>And</span> <span
  m='2738540'>on</span> <span m='2738760'>average,</span> <span
  m='2739330'>half</span> <span m='2739650'>of</span> <span
  m='2739750'>them</span> <span m='2739910'>will</span> <span
  m='2740010'>be</span> <span m='2740110'>ones.</span> </p><p><span
  m='2740990'>So</span> <span m='2741100'>I</span> <span m='2741200'>have</span>
  <span m='2742060'>various</span> <span m='2742530'>copies</span> <span
  m='2742990'>of</span> <span m='2743210'>k,</span> <span m='2743950'>and</span>
  <span m='2744100'>then</span> <span m='2744230'>I</span> <span
  m='2744290'>just</span> <span m='2744480'>add</span> <span
  m='2744720'>them</span> <span m='2744870'>up.</span> <span
  m='2746150'>And</span> <span m='2746310'>you know,</span> <span
  m='2746480'>stuff</span> <span m='2746750'>happens.</span> <span
  m='2747420'>I</span> <span m='2747500'>get</span> <span
  m='2747740'>some</span> <span m='2748270'>gobbledygook</span> <span
  m='2749140'>here.</span> <span m='2750380'>OK.</span> </p><p><span
  m='2750580'>How</span> <span m='2750740'>big</span> <span
  m='2750970'>is</span> <span m='2751090'>it?</span> <span m='2751270'>In</span>
  <span m='2751410'>general,</span> <span m='2752180'>it's</span> <span
  m='2752410'>two</span> <span m='2752650'>words</span> <span
  m='2752940'>long.</span> <span m='2753710'>When</span> <span
  m='2753850'>I</span> <span m='2753870'>multiply</span> <span
  m='2754390'>two</span> <span m='2754600'>words</span> <span
  m='2754870'>I</span> <span m='2754930'>get</span> <span m='2755570'>two</span>
  <span m='2755720'>words.</span> <span m='2757090'>It</span> <span
  m='2757300'>could</span> <span m='2757440'>be</span> <span
  m='2757560'>twice</span> <span m='2757880'>as</span> <span
  m='2757980'>long,</span> <span m='2758240'>in</span> <span
  m='2758300'>general.</span> <span m='2759190'>And</span> <span
  m='2759400'>what</span> <span m='2759590'>this</span> <span
  m='2759810'>business</span> <span m='2760170'>is</span> <span
  m='2760300'>doing</span> <span m='2760620'>is</span> <span
  m='2760720'>saying</span> <span m='2761290'>take</span> <span
  m='2761540'>the</span> <span m='2761670'>right</span> <span
  m='2761940'>word,</span> <span m='2763480'>this</span> <span
  m='2763680'>right</span> <span m='2763900'>half</span> <span
  m='2764240'>here--</span> <span m='2766240'>let</span> <span
  m='2766440'>the</span> <span m='2766520'>right</span> <span
  m='2766720'>word</span> <span m='2766940'>in,</span> <span
  m='2767270'>I</span> <span m='2767350'>guess,</span> <span m='2768590'>if
  you</span> <span m='2768770'>see</span> <span m='2769405'>vampire</span> <span
  m='2769830'>movies--</span> <span m='2770990'>and</span> <span
  m='2771300'>then</span> <span m='2771710'>shift</span> <span
  m='2772520'>right--</span> <span m='2773140'>this</span> <span
  m='2773290'>is</span> <span m='2773410'>a</span> <span
  m='2773470'>shift</span> <span m='2773760'>right</span> <span
  m='2773970'>operation--</span> <span m='2774450'>by</span> <span
  m='2774610'>w</span> <span m='2775270'>minus</span> <span
  m='2775800'>r.</span> <span m='2776730'>I didn't</span> <span
  m='2776920'>even</span> <span m='2777070'>say</span> <span
  m='2777250'>what</span> <span m='2777400'>r</span> <span
  m='2777670'>is.</span> </p><p><span m='2777870'>But</span> <span
  m='2778040'>basically,</span> <span m='2778480'>what</span> <span
  m='2778520'>I</span> <span m='2778580'>want</span> <span m='2778820'>is</span>
  <span m='2779320'>these</span> <span m='2779640'>bits.</span> <span
  m='2781130'>I</span> <span m='2781180'>want</span> <span m='2781500'>r</span>
  <span m='2781800'>bits</span> <span m='2783040'>here--</span> <span
  m='2783210'>this</span> <span m='2783390'>is</span> <span m='2783510'>w</span>
  <span m='2783870'>bits.</span> <span m='2784780'>I</span> <span
  m='2784860'>want</span> <span m='2785120'>the</span> <span
  m='2785230'>leftmost</span> <span m='2785760'>r</span> <span
  m='2785950'>bits</span> <span m='2786310'>of</span> <span
  m='2786450'>the</span> <span m='2786550'>rightmost</span> <span
  m='2787080'>w</span> <span m='2787410'>bits</span> <span m='2789258'>because
  I</span> <span m='2789720'>shift</span> <span m='2790020'>right</span> <span
  m='2790190'>here</span> <span m='2790420'>and</span> <span
  m='2790510'>get</span> <span m='2790650'>rid</span> <span
  m='2790790'>of</span> <span m='2790890'>all</span> <span
  m='2791030'>these</span> <span m='2791250'>guys.</span> <span
  m='2792510'>r--</span> <span m='2794270'>I should</span> <span
  m='2794430'>say,</span> <span m='2794970'>m,</span> <span
  m='2795890'>is</span> <span m='2796080'>two</span> <span m='2796300'>to
  the</span> <span m='2796480'>r.</span> <span m='2796970'>So</span> <span
  m='2797130'>I'm</span> <span m='2797210'>going</span> <span
  m='2797310'>to</span> <span m='2797350'>assume</span> <span
  m='2797670'>here</span> <span m='2797880'>I</span> <span
  m='2797920'>have</span> <span m='2798060'>a</span> <span
  m='2798120'>table</span> <span m='2798440'>of</span> <span
  m='2798540'>size</span> <span m='2798920'>a</span> <span
  m='2798980'>power</span> <span m='2799280'>of</span> <span
  m='2799380'>2,</span> <span m='2800430'>and</span> <span
  m='2800630'>then</span> <span m='2801040'>this</span> <span
  m='2801360'>number</span> <span m='2802160'>will</span> <span
  m='2802370'>be</span> <span m='2802590'>a</span> <span
  m='2802630'>number</span> <span m='2802870'>between</span> <span
  m='2803180'>0</span> <span m='2803770'>and</span> <span m='2804930'>m</span>
  <span m='2805130'>minus</span> <span m='2805440'>1.</span> <span
  m='2807440'>OK.</span> </p><p><span m='2807940'>Why</span> <span
  m='2808160'>does</span> <span m='2808270'>this</span> <span
  m='2808400'>work?</span> <span m='2810260'>It's</span> <span
  m='2810370'>intuitive.</span> <span m='2812360'>In</span> <span
  m='2812540'>practice</span> <span m='2812950'>it</span> <span
  m='2813060'>works</span> <span m='2813350'>quite</span> <span
  m='2813550'>well</span> <span m='2813780'>because</span> <span
  m='2814140'>what</span> <span m='2814270'>you're</span> <span
  m='2814390'>doing</span> <span m='2814630'>is</span> <span
  m='2814740'>taking</span> <span m='2815140'>a</span> <span
  m='2815330'>whole</span> <span m='2815580'>bunch</span> <span
  m='2815830'>of</span> <span m='2815900'>sort</span> <span
  m='2816100'>of</span> <span m='2816530'>randomly</span> <span
  m='2817090'>shifted</span> <span m='2817560'>copies</span> <span
  m='2817970'>of</span> <span m='2818080'>k,</span> <span
  m='2818770'>adding</span> <span m='2819090'>them</span> <span
  m='2819250'>up--</span> <span m='2819420'>you get</span> <span
  m='2819670'>carries,</span> <span m='2820200'>things</span> <span
  m='2820410'>get</span> <span m='2820560'>mixed</span> <span
  m='2820800'>up--</span> <span m='2821140'>This</span> <span
  m='2821520'>is</span> <span m='2821700'>hashing.</span> <span
  m='2822690'>This</span> <span m='2822890'>is--</span> <span
  m='2823020'>you're</span> <span m='2823200'>taking</span> <span
  m='2823570'>k,</span> <span m='2823990'>sort of</span> <span
  m='2824190'>cutting</span> <span m='2824550'>it</span> <span
  m='2824630'>up</span> <span m='2824830'>while</span> <span
  m='2825000'>you're</span> <span m='2825330'>shifting</span> <span
  m='2825730'>it</span> <span m='2825790'>around,</span> <span
  m='2826440'>adding</span> <span m='2826790'>things</span> <span
  m='2827190'>and</span> <span m='2827300'>they</span> <span
  m='2827380'>collide,</span> <span m='2828040'>and</span> <span
  m='2828380'>weird</span> <span m='2828650'>stuff</span> <span
  m='2828900'>happens.</span> </p><p><span m='2829660'>You</span> <span
  m='2829760'>sort</span> <span m='2830010'>of</span> <span
  m='2830110'>randomize</span> <span m='2830660'>stuff.</span> <span
  m='2831670'>Out</span> <span m='2831870'>here,</span> <span
  m='2832150'>you</span> <span m='2832260'>don't</span> <span
  m='2832440'>get</span> <span m='2832570'>much</span> <span
  m='2832760'>randomization</span> <span m='2833440'>because</span> <span
  m='2833710'>most--</span> <span m='2834270'>like</span> <span
  m='2834390'>the</span> <span m='2834480'>last</span> <span
  m='2834840'>bit</span> <span m='2835070'>could</span> <span
  m='2835190'>just</span> <span m='2835420'>be</span> <span
  m='2835600'>this</span> <span m='2835750'>one</span> <span
  m='2835980'>bit</span> <span m='2836120'>of</span> <span m='2836210'>k.</span>
  <span m='2836920'>But</span> <span m='2837040'>in</span> <span
  m='2837160'>the</span> <span m='2837230'>middle,</span> <span
  m='2837660'>everybody's</span> <span m='2838210'>kind</span> <span
  m='2838390'>of</span> <span m='2838450'>colliding</span> <span
  m='2838870'>together.</span> <span m='2839730'>And</span> <span
  m='2839890'>so</span> <span m='2840110'>intuitively,</span> <span
  m='2840680'>you're</span> <span m='2840780'>mixing</span> <span
  m='2841190'>lots</span> <span m='2841430'>of</span> <span
  m='2841530'>things</span> <span m='2841760'>in</span> <span
  m='2841880'>the</span> <span m='2841960'>center.</span> <span
  m='2842650'>You</span> <span m='2842760'>take</span> <span
  m='2843040'>those</span> <span m='2843510'>r</span> <span
  m='2843720'>bits,</span> <span m='2844000'>roughly,</span> <span
  m='2844340'>in</span> <span m='2844410'>the</span> <span
  m='2844500'>center.</span> <span m='2845310'>That</span> <span
  m='2845520'>will</span> <span m='2845650'>be</span> <span
  m='2845870'>nicely</span> <span m='2846490'>mixed</span> <span
  m='2846810'>up.</span> </p><p><span m='2847550'>And</span> <span
  m='2847700'>most</span> <span m='2847950'>of</span> <span
  m='2848050'>the</span> <span m='2848070'>time</span> <span
  m='2848350'>this</span> <span m='2848520'>works</span> <span
  m='2848770'>well.</span> <span m='2849280'>In</span> <span
  m='2849370'>practice</span> <span m='2849900'>it</span> <span
  m='2849990'>works</span> <span m='2850230'>well--</span> <span m='2852130'>I
  have</span> <span m='2852510'>some</span> <span m='2852680'>things</span>
  <span m='2852910'>written</span> <span m='2853100'>here.</span> <span
  m='2853950'>a</span> <span m='2854130'>better</span> <span
  m='2854410'>be</span> <span m='2854630'>odd,</span> <span
  m='2855270'>otherwise</span> <span m='2855720'>you're</span> <span
  m='2856150'>throwing</span> <span m='2856440'>away</span> <span
  m='2856960'>stuff.</span> <span m='2857380'>And it</span> <span
  m='2857600'>should</span> <span m='2857780'>not</span> <span
  m='2857970'>be</span> <span m='2858090'>very</span> <span
  m='2858290'>close</span> <span m='2858570'>to</span> <span
  m='2858660'>a</span> <span m='2858710'>power</span> <span
  m='2858980'>of</span> <span m='2859080'>2.</span> <span m='2859980'>But</span>
  <span m='2860100'>it</span> <span m='2860170'>should</span> <span
  m='2860340'>be</span> <span m='2861340'>in</span> <span
  m='2861480'>between</span> <span m='2861870'>2 to the</span> <span
  m='2862170'>r</span> <span m='2862290'>minus</span> <span m='2862540'>1</span>
  <span m='2862790'>and 2 to</span> <span m='2862930'>the</span> <span
  m='2863120'>r.</span> <span m='2864840'>Cool.</span> </p><p><span
  m='2867110'>One</span> <span m='2867310'>more.</span> <span
  m='2872750'>Again,</span> <span m='2873190'>theoretically,</span> <span
  m='2874290'>this</span> <span m='2874470'>can</span> <span
  m='2874690'>be</span> <span m='2874820'>bad.</span> <span
  m='2875230'>And</span> <span m='2875470'>I</span> <span
  m='2875490'>leave</span> <span m='2875730'>it</span> <span
  m='2875800'>as</span> <span m='2875930'>an</span> <span
  m='2875990'>exercise</span> <span m='2876470'>to</span> <span
  m='2876550'>find</span> <span m='2876950'>situations,</span> <span
  m='2877650'>find</span> <span m='2877930'>key</span> <span
  m='2878100'>values</span> <span m='2879020'>where</span> <span
  m='2879140'>this</span> <span m='2879330'>does</span> <span
  m='2879460'>not</span> <span m='2879710'>do</span> <span m='2879830'>a</span>
  <span m='2879880'>good</span> <span m='2880070'>job.</span> </p><p><span
  m='2883790'>The</span> <span m='2883900'>cool</span> <span
  m='2884190'>method</span> <span m='2885940'>is</span> <span
  m='2886130'>called</span> <span m='2886380'>universal</span> <span
  m='2887040'>hashing.</span> <span m='2891120'>This</span> <span
  m='2891220'>is</span> <span m='2891310'>something</span> <span
  m='2892750'>that's</span> <span m='2892980'>a</span> <span
  m='2893030'>bit</span> <span m='2893240'>beyond</span> <span
  m='2893580'>the</span> <span m='2893650'>scope</span> <span
  m='2893940'>of</span> <span m='2894020'>006.</span> <span
  m='2894495'>If</span> <span m='2894613'>you</span> <span
  m='2894732'>want</span> <span m='2894851'>to</span> <span
  m='2894970'>understand</span> <span m='2895360'>it</span> <span
  m='2895430'>better</span> <span m='2895640'>you</span> <span
  m='2895720'>should</span> <span m='2895890'>take</span> <span
  m='2896360'>046.</span> <span m='2897440'>But</span> <span
  m='2897620'>I'll</span> <span m='2897720'>give</span> <span
  m='2897860'>you</span> <span m='2898340'>the</span> <span
  m='2898450'>flavor</span> <span m='2899410'>and</span> <span
  m='2899670'>the</span> <span m='2899820'>method,</span> <span
  m='2900730'>one</span> <span m='2900940'>of</span> <span
  m='2900990'>the</span> <span m='2901070'>methods.</span> <span
  m='2901470'>There's</span> <span m='2901650'>actually</span> <span
  m='2901910'>many</span> <span m='2902130'>ways</span> <span
  m='2902370'>to</span> <span m='2902480'>do</span> <span
  m='2902610'>this.</span> </p><p><span m='2913690'>We</span> <span
  m='2913850'>see</span> <span m='2913990'>a</span> <span m='2914040'>mod</span>
  <span m='2914300'>m</span> <span m='2914510'>on</span> <span
  m='2914630'>the</span> <span m='2914780'>outside.</span> <span
  m='2915160'>That's</span> <span m='2915380'>just</span> <span
  m='2915570'>division</span> <span m='2915920'>method</span> <span
  m='2916280'>just</span> <span m='2916450'>to</span> <span
  m='2916520'>make</span> <span m='2916720'>the</span> <span
  m='2916760'>number</span> <span m='2917000'>between</span> <span
  m='2917270'>0</span> <span m='2917540'>and</span> <span m='2917610'>a</span>
  <span m='2917680'>minus</span> <span m='2917980'>1.</span> <span
  m='2919760'>Here's</span> <span m='2920120'>our</span> <span
  m='2920240'>key.</span> <span m='2921490'>And</span> <span
  m='2921590'>then</span> <span m='2921700'>there's</span> <span
  m='2921850'>these</span> <span m='2922000'>numbers</span> <span
  m='2922370'>a</span> <span m='2922500'>and</span> <span m='2922650'>b.</span>
  <span m='2922870'>These</span> <span m='2923100'>are</span> <span
  m='2923170'>going</span> <span m='2923380'>to</span> <span
  m='2923480'>be</span> <span m='2923640'>random</span> <span
  m='2925680'>numbers</span> <span m='2927060'>between</span> <span
  m='2928220'>0</span> <span m='2929220'>and</span> <span m='2929630'>p</span>
  <span m='2929890'>minus</span> <span m='2930220'>1.</span> </p><p><span
  m='2931350'>What's</span> <span m='2931560'>p?</span> <span
  m='2932490'>Prime</span> <span m='2932740'>number</span> <span
  m='2936810'>bigger</span> <span m='2937080'>than</span> <span
  m='2937330'>the</span> <span m='2937410'>size</span> <span
  m='2937730'>of</span> <span m='2937770'>the</span> <span
  m='2937850'>universe.</span> <span m='2938660'>So</span> <span
  m='2938860'>it's</span> <span m='2939000'>a</span> <span
  m='2939050'>big</span> <span m='2939340'>prime</span> <span
  m='2939650'>number.</span> <span m='2940430'>I think</span> <span
  m='2940730'>we</span> <span m='2940830'>know</span> <span
  m='2940940'>how</span> <span m='2941060'>to</span> <span
  m='2941140'>find</span> <span m='2941370'>prime</span> <span
  m='2941570'>numbers.</span> <span m='2943870'>We</span> <span
  m='2943980'>don't</span> <span m='2944110'>know</span> <span
  m='2944250'>in</span> <span m='2944330'>this</span> <span
  m='2944470'>class,</span> <span m='2945090'>but</span> <span
  m='2945440'>people</span> <span m='2945770'>know</span> <span
  m='2945940'>how</span> <span m='2946040'>to</span> <span
  m='2946140'>find</span> <span m='2946420'>the</span> <span
  m='2946590'>prime</span> <span m='2946820'>numbers.</span> </p><p><span
  m='2947740'>So</span> <span m='2947820'>there's</span> <span
  m='2948020'>a</span> <span m='2948146'>subroutine</span> <span
  m='2948400'>here,</span> <span m='2948600'>find</span> <span
  m='2948870'>a</span> <span m='2948910'>big</span> <span
  m='2949090'>prime</span> <span m='2949330'>number</span> <span
  m='2950050'>bigger</span> <span m='2950270'>than</span> <span
  m='2950430'>your</span> <span m='2950540'>universe.</span> <span
  m='2951060'>It's</span> <span m='2951230'>not</span> <span
  m='2951430'>too</span> <span m='2951550'>hard</span> <span
  m='2951740'>to</span> <span m='2951800'>do</span> <span
  m='2951930'>that.</span> <span m='2952170'>We</span> <span
  m='2952300'>can</span> <span m='2952450'>do</span> <span m='2952600'>it</span>
  <span m='2953110'>in</span> <span m='2953310'>polynomial</span> <span
  m='2953820'>time.</span> <span m='2955420'>That's</span> <span
  m='2955690'>just</span> <span m='2955840'>set</span> <span
  m='2956020'>up.</span> </p><p><span m='2956160'>You</span> <span
  m='2956240'>do</span> <span m='2956330'>that</span> <span
  m='2956550'>once</span> <span m='2957590'>for a</span> <span
  m='2957760'>given</span> <span m='2958030'>size</span> <span
  m='2958330'>table.</span> <span m='2959220'>And</span> <span
  m='2959420'>then</span> <span m='2960030'>you</span> <span
  m='2960220'>choose</span> <span m='2960600'>two</span> <span
  m='2960900'>random</span> <span m='2961210'>numbers,</span> <span
  m='2961570'>a</span> <span m='2961710'>and</span> <span m='2961850'>b.</span>
  <span m='2963920'>And</span> <span m='2964090'>then</span> <span
  m='2964240'>this</span> <span m='2964440'>is</span> <span
  m='2964560'>the</span> <span m='2964630'>hash</span> <span
  m='2964860'>function,</span> <span m='2965180'>a</span> <span
  m='2965340'>times</span> <span m='2965600'>k</span> <span
  m='2965790'>plus</span> <span m='2966090'>b,</span> <span
  m='2966350'>mod</span> <span m='2966830'>p</span> <span m='2967120'>mod</span>
  <span m='2967534'>m.</span> <span m='2969190'>OK.</span> </p><p><span
  m='2969480'>What</span> <span m='2970160'>does</span> <span
  m='2970330'>this</span> <span m='2970530'>do?</span> <span m='2972590'>It
  turns</span> <span m='2972880'>out--</span> <span m='2974270'>here's</span>
  <span m='2974530'>the</span> <span m='2974600'>interesting</span> <span
  m='2975010'>part.</span> <span m='2975810'>For</span> <span
  m='2976020'>worst</span> <span m='2976470'>case</span> <span
  m='2977760'>keys,</span> <span m='2980640'>k1</span> <span
  m='2981840'>and</span> <span m='2982050'>k2,</span> <span
  m='2982920'>that</span> <span m='2983060'>are</span> <span
  m='2983140'>distinct,</span> <span m='2985260'>the</span> <span
  m='2985360'>probability</span> <span m='2987990'>of</span> <span
  m='2988530'>h</span> <span m='2988820'>of</span> <span m='2988910'>k1</span>
  <span m='2989960'>equaling</span> <span m='2990950'>h</span> <span
  m='2991160'>of</span> <span m='2991270'>k2</span> <span m='2994570'>is</span>
  <span m='2994740'>1</span> <span m='2994970'>over</span> <span
  m='2995180'>n.</span> <span m='2996650'>So</span> <span
  m='2996810'>probability</span> <span m='2997440'>of</span> <span
  m='2997560'>two</span> <span m='2997760'>keys</span> <span
  m='2998140'>that</span> <span m='2998240'>are</span> <span
  m='2998300'>different</span> <span m='2998710'>colliding</span> <span
  m='2999820'>is</span> <span m='2999990'>1</span> <span m='3000210'>over</span>
  <span m='3000420'>m,</span> <span m='3000660'>for</span> <span
  m='3000820'>the</span> <span m='3000970'>worst</span> <span
  m='3001410'>case</span> <span m='3001730'>keys.</span> <span
  m='3003310'>What</span> <span m='3003450'>the</span> <span
  m='3003550'>heck</span> <span m='3003740'>does</span> <span
  m='3003860'>that</span> <span m='3004050'>mean?</span> <span
  m='3004280'>What's</span> <span m='3004330'>the</span> <span
  m='3004440'>probability</span> <span m='3005100'>over?</span> <span
  m='3005770'>Any</span> <span m='3005990'>suggestions?</span> <span
  m='3008390'>What's</span> <span m='3008590'>random</span> <span
  m='3008970'>here?</span> </p><p><span m='3011730'>AUDIENCE: a and b.</span>
  </p><p><span m='3012200'>PROFESSOR: a and</span> <span m='3012540'>b.</span>
  <span m='3013090'>This is</span> <span m='3013250'>the</span> <span
  m='3013340'>probability</span> <span m='3013920'>over</span> <span
  m='3014110'>a</span> <span m='3014480'>and</span> <span m='3014750'>b.</span>
  <span m='3015250'>This</span> <span m='3015410'>is</span> <span
  m='3015480'>the</span> <span m='3015550'>probability</span> <span
  m='3016070'>over</span> <span m='3016230'>the</span> <span
  m='3016380'>choice</span> <span m='3016900'>of</span> <span
  m='3017010'>your</span> <span m='3017110'>hash</span> <span
  m='3017450'>function.</span> <span m='3018350'>So</span> <span
  m='3018520'>it's</span> <span m='3018650'>the</span> <span
  m='3018760'>worst</span> <span m='3019290'>case</span> <span
  m='3019700'>inputs,</span> <span m='3020370'>worst</span> <span
  m='3020680'>case</span> <span m='3020930'>insertions,</span> <span
  m='3022030'>but</span> <span m='3022780'>random</span> <span
  m='3023530'>hash</span> <span m='3023840'>function.</span> <span
  m='3025010'>As</span> <span m='3025060'>long</span> <span
  m='3025370'>as</span> <span m='3025440'>you</span> <span
  m='3025540'>choose</span> <span m='3025760'>your</span> <span
  m='3025890'>random</span> <span m='3026160'>hash</span> <span
  m='3026380'>function,</span> <span m='3026730'>the</span> <span
  m='3026830'>probability</span> <span m='3027490'>of</span> <span
  m='3027570'>collision</span> <span m='3027930'>is</span> <span
  m='3028030'>1</span> <span m='3028220'>over</span> <span m='3028390'>m.</span>
  <span m='3028550'>This</span> <span m='3028740'>is</span> <span
  m='3028840'>the</span> <span m='3028990'>ideal</span> <span
  m='3029320'>situation</span> </p><p><span m='3031130'>And</span> <span
  m='3031330'>so</span> <span m='3031430'>you</span> <span
  m='3031630'>can</span> <span m='3031780'>prove,</span> <span
  m='3032160'>just</span> <span m='3032490'>like</span> <span
  m='3032700'>we</span> <span m='3032840'>analyzed</span> <span
  m='3033300'>here--</span> <span m='3034270'>It's</span> <span
  m='3034410'>a</span> <span m='3034460'>little</span> <span
  m='3034690'>more</span> <span m='3034890'>work.</span> <span
  m='3035140'>It's</span> <span m='3035280'>in</span> <span
  m='3035390'>the</span> <span m='3035480'>notes.</span> <span m='3035910'>You
  use</span> <span m='3036190'>linearity</span> <span m='3036680'>of</span>
  <span m='3036760'>expectation.</span> <span m='3037560'>And</span> <span
  m='3037860'>you</span> <span m='3037990'>can</span> <span
  m='3038130'>prove,</span> <span m='3038380'>still,</span> <span
  m='3038730'>that</span> <span m='3038880'>the</span> <span
  m='3038960'>expected</span> <span m='3039470'>length</span> <span
  m='3039700'>of</span> <span m='3039800'>a</span> <span
  m='3039870'>chain--</span> <span m='3040570'>the</span> <span
  m='3040740'>expected</span> <span m='3041180'>number</span> <span
  m='3041360'>of</span> <span m='3041460'>collisions</span> <span
  m='3041990'>that</span> <span m='3042110'>a</span> <span
  m='3042230'>key</span> <span m='3042380'>has</span> <span
  m='3042620'>with</span> <span m='3042760'>another</span> <span
  m='3043050'>key</span> <span m='3044010'>is</span> <span
  m='3044220'>the</span> <span m='3044300'>load</span> <span
  m='3044560'>factor,</span> <span m='3046230'>in</span> <span
  m='3046400'>the</span> <span m='3046500'>worst</span> <span
  m='3046970'>case,</span> <span m='3048720'>but</span> <span
  m='3048910'>in</span> <span m='3049060'>expectation</span> <span
  m='3049500'>for a</span> <span m='3049940'>given</span> <span
  m='3050370'>hash</span> <span m='3050610'>function.</span> <span
  m='3051640'>So</span> <span m='3051840'>still,</span> <span m='3052200'>the
  expected</span> <span m='3052610'>length</span> <span m='3052630'>of</span>
  <span m='3052830'>a</span> <span m='3052950'>chain,</span> <span
  m='3053210'>and</span> <span m='3053290'>therefore,</span> <span
  m='3053520'>the</span> <span m='3053600'>expected</span> <span
  m='3054080'>running</span> <span m='3054380'>time</span> <span
  m='3055400'>of</span> <span m='3056100'>hashing</span> <span
  m='3056440'>with</span> <span m='3056570'>chaining,</span> <span
  m='3057340'>using</span> <span m='3057650'>this</span> <span
  m='3057900'>hash</span> <span m='3058200'>function,</span> <span
  m='3058500'>or</span> <span m='3058550'>this</span> <span
  m='3058750'>collection</span> <span m='3059180'>of</span> <span
  m='3059240'>hash</span> <span m='3059470'>functions,</span> <span
  m='3059850'>or a</span> <span m='3059970'>randomly</span> <span
  m='3060420'>chosen</span> <span m='3060750'>one,</span> <span
  m='3061170'>is</span> <span m='3061360'>constant</span> <span
  m='3061970'>for</span> <span m='3062110'>constant</span> <span
  m='3062380'>load</span> <span m='3062650'>factor.</span> </p><p><span
  m='3063450'>And</span> <span m='3063600'>that's</span> <span
  m='3063800'>why</span> <span m='3063930'>hashing</span> <span
  m='3064270'>really</span> <span m='3064550'>works</span> <span
  m='3065190'>in</span> <span m='3065330'>theory.</span> <span
  m='3066080'>We're</span> <span m='3066200'>not</span> <span
  m='3066380'>going</span> <span m='3066480'>to</span> <span
  m='3066530'>go</span> <span m='3066670'>into</span> <span
  m='3066820'>details</span> <span m='3067240'>of</span> <span
  m='3067290'>this</span> <span m='3067450'>again.</span> <span
  m='3067730'>Take</span> <span m='3067910'>6.046</span> <span
  m='3068590'>if</span> <span m='3068710'>you</span> <span
  m='3068830'>want</span> <span m='3068980'>to</span> <span
  m='3069030'>know.</span> <span m='3069660'>But</span> <span
  m='3069860'>this</span> <span m='3069950'>should</span> <span
  m='3070320'>make</span> <span m='3070540'>you</span> <span
  m='3070630'>feel</span> <span m='3070840'>more</span> <span
  m='3070980'>comfortable.</span> <span m='3072470'>And</span> <span
  m='3072630'>we'll</span> <span m='3072710'>see</span> <span
  m='3072870'>other</span> <span m='3073000'>ways</span> <span
  m='3073200'>do</span> <span m='3073310'>hashing</span> <span
  m='3073710'>next</span> <span m='3073940'>class.</span> </p>
uid: 7eee5a3e15d709b9e817dd1773352056
type: course
layout: video
---
