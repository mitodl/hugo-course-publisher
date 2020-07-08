---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: En0xvjBnmfU
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: Video-YouTube-Stream
    type: Video
    uid: 0f922c1533282f13f6dd5f4722e9fbdf
  - id: 3Play-3Play YouTube id-Stream
    media_location: En0xvjBnmfU
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 711d48fbc165a20d6feda9d68038f6df
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/En0xvjBnmfU/default.jpg'
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3175052a86484baf118747f1cdc8a8bc
  - id: En0xvjBnmfU.srt
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-3-bar-charts-in-r/video-3-bar-charts-in-r-0/En0xvjBnmfU.srt
    title: 3play caption file
    type: null
    uid: 450744d9ac8bcf3ddad781f81ae19add
  - id: En0xvjBnmfU.pdf
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-3-bar-charts-in-r/video-3-bar-charts-in-r-0/En0xvjBnmfU.pdf
    title: 3play pdf file
    type: null
    uid: 96aaaf2f91c85603dda693c99cea0e62
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8bde741640add41ab443d5bdfb1d2a04
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 91f2d749bd8a8e1cf84cf23b5eb6472e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_7.4.04_300k.mp4
    parent_uid: 598eb710c9675a9df54b9369f24d426f
    title: Video-Internet Archive-MP4
    type: Video
    uid: b1c74a802556d6c0da1047353afb8b8a
inline_embed_id: 83368339video3barchartsinr54688860
order_index: 1726
parent_uid: b69a45f6aacc80e937f4661dbb5bb822
related_resources_text: ''
short_url: video-3-bar-charts-in-r-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-3-bar-charts-in-r/video-3-bar-charts-in-r-0
title: 'Video 3: Bar Charts in R'
transcript: >-
  <p><span m='5880'>Okay,</span> <span m='6110'>so</span> <span
  m='6341'>now</span> <span m='6572'>we're</span> <span m='6803'>going</span>
  <span m='7034'>to</span> <span m='7265'>start</span> <span
  m='7496'>with</span> <span m='7727'>a</span> <span m='7958'>simple</span>
  <span m='8189'>bar</span> <span m='8420'>plot</span> <span m='8821'>of</span>
  <span m='9222'>the</span> <span m='9624'>MIT</span> <span
  m='10025'>international</span> <span m='10427'>student</span> <span
  m='10828'>data.</span> </p><p><span m='11230'>So</span> <span
  m='12098'>first,</span> <span m='12967'>let's</span> <span
  m='13836'>load</span> <span m='14705'>the</span> <span m='15573'>ggplot</span>
  <span m='16442'>library,</span> <span m='17311'>ggplot2,</span> <span
  m='18180'>and</span> <span m='18590'>load</span> <span m='19000'>the</span>
  <span m='19410'>data</span> <span m='19820'>frame.</span> </p><p><span
  m='20230'>So</span> <span m='20677'>intl</span> <span m='21125'>=</span> <span
  m='21572'>read.csv("intl.csv").</span> </p><p><span m='28490'>Now,</span>
  <span m='28757'>the</span> <span m='29024'>structure</span> <span
  m='29291'>of</span> <span m='29558'>this</span> <span m='29825'>date</span>
  <span m='30092'>frame</span> <span m='30359'>is</span> <span
  m='30626'>very</span> <span m='30893'>simple.</span> </p><p><span
  m='31160'>There</span> <span m='31580'>are</span> <span m='32000'>two</span>
  <span m='32420'>columns,</span> <span m='32840'>two</span> <span
  m='33260'>variables.</span> </p><p><span m='33680'>The</span> <span
  m='34012'>first</span> <span m='34344'>one,</span> <span m='34676'>the</span>
  <span m='35008'>region,</span> <span m='35341'>and</span> <span
  m='35673'>the</span> <span m='36005'>second</span> <span m='36337'>one</span>
  <span m='36670'>is</span> <span m='37011'>the</span> <span
  m='37353'>percentage</span> <span m='37695'>of</span> <span
  m='38036'>international</span> <span m='38378'>students</span> <span
  m='38720'>who</span> <span m='39266'>came</span> <span m='39812'>from</span>
  <span m='40358'>that</span> <span m='40904'>region.</span> </p><p><span
  m='41450'>So</span> <span m='41860'>making</span> <span m='42271'>a</span>
  <span m='42682'>bar</span> <span m='43093'>plot</span> <span
  m='43504'>from</span> <span m='43915'>this</span> <span m='44326'>data</span>
  <span m='44737'>isn't</span> <span m='45148'>too</span> <span
  m='45559'>hard.</span> </p><p><span m='45970'>We</span> <span
  m='46251'>start</span> <span m='46532'>off</span> <span m='46814'>with</span>
  <span m='47095'>a</span> <span m='47377'>ggplot</span> <span
  m='47658'>command,</span> <span m='47940'>of</span> <span
  m='48387'>course,</span> <span m='48835'>the</span> <span
  m='49283'>first</span> <span m='49731'>argument</span> <span
  m='50178'>being</span> <span m='50626'>the</span> <span m='51074'>data</span>
  <span m='51522'>frame.</span> </p><p><span m='51970'>The</span> <span
  m='52367'>aesthetic</span> <span m='52765'>in</span> <span
  m='53162'>this</span> <span m='53560'>case</span> <span m='53957'>is</span>
  <span m='54355'>to</span> <span m='54752'>have</span> <span
  m='55150'>Region</span> <span m='55547'>on</span> <span m='55945'>the</span>
  <span m='56342'>x-axis,</span> <span m='56740'>and</span> <span
  m='57156'>on</span> <span m='57572'>the</span> <span m='57988'>y-axis,</span>
  <span m='58405'>to</span> <span m='58821'>have</span> <span
  m='59237'>the</span> <span m='59653'>percentage</span> <span
  m='60070'>of</span> <span m='61143'>international</span> <span
  m='62216'>students.</span> </p><p><span m='63290'>Now,</span> <span
  m='63541'>the</span> <span m='63792'>geometry</span> <span
  m='64044'>we're</span> <span m='64295'>going</span> <span m='64547'>to</span>
  <span m='64798'>use</span> <span m='65050'>is,</span> <span
  m='65681'>as</span> <span m='66312'>you</span> <span m='66944'>might</span>
  <span m='67575'>guess,</span> <span m='68207'>bar,</span> <span
  m='68838'>geom_bar.</span> </p><p><span m='69470'>We</span> <span
  m='69845'>have</span> <span m='70221'>to</span> <span m='70596'>pass</span>
  <span m='70972'>one</span> <span m='71347'>argument</span> <span
  m='71723'>to</span> <span m='72098'>this</span> <span
  m='72474'>geom_bar,</span> <span m='72850'>and</span> <span
  m='73215'>it's</span> <span m='73581'>called</span> <span
  m='73947'>stat</span> <span m='74312'>=</span> <span
  m='74678'>"identity"</span> <span m='75044'>.</span> </p><p><span
  m='75410'>I'm</span> <span m='75761'>going</span> <span m='76112'>to</span>
  <span m='76463'>come</span> <span m='76814'>back</span> <span
  m='77165'>and</span> <span m='77516'>explain</span> <span
  m='77867'>what</span> <span m='78218'>that</span> <span
  m='78569'>means.</span> </p><p><span m='78920'>I</span> <span
  m='79228'>also</span> <span m='79536'>want</span> <span m='79844'>to</span>
  <span m='80152'>label</span> <span m='80460'>my</span> <span
  m='80768'>bars</span> <span m='81076'>with</span> <span m='81384'>the</span>
  <span m='81692'>value,</span> <span m='82000'>so</span> <span
  m='82401'>it's</span> <span m='82802'>easy</span> <span m='83203'>to</span>
  <span m='83605'>read</span> <span m='84006'>in</span> <span
  m='84407'>closer</span> <span m='84808'>detail.</span> </p><p><span
  m='85210'>So</span> <span m='85693'>I'm</span> <span m='86176'>going</span>
  <span m='86660'>to</span> <span m='87143'>use</span> <span
  m='87626'>geom_text</span> <span m='88110'>to</span> <span m='88593'>do</span>
  <span m='89076'>that.</span> </p><p><span m='89560'>And</span> <span
  m='89885'>the</span> <span m='90210'>aesthetic</span> <span
  m='90535'>of</span> <span m='90860'>our</span> <span m='91185'>text</span>
  <span m='91510'>is</span> <span m='91835'>simply</span> <span
  m='92160'>to</span> <span m='92490'>have</span> <span m='92821'>the</span>
  <span m='93152'>value</span> <span m='93483'>of</span> <span
  m='93814'>a</span> <span m='94145'>label,</span> <span m='94475'>the</span>
  <span m='94806'>text</span> <span m='95137'>of</span> <span m='95468'>a</span>
  <span m='95799'>label,</span> <span m='96130'>to</span> <span
  m='96555'>be</span> <span m='96981'>the</span> <span m='97407'>value</span>
  <span m='97832'>of</span> <span m='98258'>our</span> <span
  m='98684'>percentages.</span> </p><p><span m='102850'>Let's</span> <span
  m='103455'>look</span> <span m='104060'>at</span> <span
  m='104665'>that.</span> </p><p><span m='105270'>So</span> <span
  m='105870'>yes,</span> <span m='106470'>we</span> <span m='107070'>have</span>
  <span m='107670'>a</span> <span m='108270'>bar</span> <span
  m='108870'>for</span> <span m='109470'>each</span> <span
  m='110070'>region.</span> </p><p><span m='110670'>The</span> <span
  m='110884'>values</span> <span m='111098'>are</span> <span
  m='111312'>between</span> <span m='111527'>zero</span> <span
  m='111741'>and</span> <span m='111955'>one,</span> <span
  m='112170'>which</span> <span m='112642'>looks</span> <span
  m='113114'>kind</span> <span m='113586'>of</span> <span
  m='114058'>strange.</span> </p><p><span m='114530'>The</span> <span
  m='115041'>labels</span> <span m='115553'>are</span> <span
  m='116065'>actually</span> <span m='116576'>lying</span> <span
  m='117088'>over</span> <span m='117600'>the</span> <span m='117981'>top</span>
  <span m='118362'>of</span> <span m='118743'>the</span> <span
  m='119124'>columns,</span> <span m='119505'>which</span> <span
  m='119886'>isn't</span> <span m='120267'>very</span> <span
  m='120648'>nice,</span> <span m='121030'>and</span> <span
  m='121365'>the</span> <span m='121700'>regions</span> <span
  m='122035'>aren't</span> <span m='122370'>really</span> <span
  m='122705'>ordered</span> <span m='123040'>in</span> <span
  m='123330'>any</span> <span m='123620'>way</span> <span
  m='123910'>that's</span> <span m='124200'>useful.</span> </p><p><span
  m='124490'>They're</span> <span m='124820'>actually</span> <span
  m='125150'>ordered</span> <span m='125480'>in</span> <span
  m='125810'>alphabetical</span> <span m='126140'>order,</span> <span
  m='126470'>but</span> <span m='126670'>I</span> <span m='126871'>think</span>
  <span m='127072'>it</span> <span m='127273'>would</span> <span
  m='127474'>be</span> <span m='127675'>much</span> <span m='127875'>more</span>
  <span m='128076'>interesting</span> <span m='128277'>to</span> <span
  m='128478'>have</span> <span m='128679'>them</span> <span m='128880'>in</span>
  <span m='129686'>descending</span> <span m='130493'>order.</span> </p><p><span
  m='131300'>So</span> <span m='131707'>we're</span> <span
  m='132114'>going</span> <span m='132521'>to</span> <span
  m='132928'>work</span> <span m='133335'>on</span> <span
  m='133742'>this.</span> </p><p><span m='134150'>First</span> <span
  m='134399'>of</span> <span m='134648'>all,</span> <span
  m='134897'>though,</span> <span m='135146'>what</span> <span
  m='135395'>is</span> <span m='135644'>this</span> <span m='135893'>stat</span>
  <span m='136142'>=</span> <span m='136391'>"identity"?</span> </p><p><span
  m='136640'>Well,</span> <span m='137047'>it's</span> <span
  m='137455'>pretty</span> <span m='137862'>simple.</span> </p><p><span
  m='138270'>Geometry</span> <span m='138860'>bar</span> <span
  m='139450'>has</span> <span m='140040'>multiple</span> <span
  m='140630'>modes</span> <span m='141220'>of</span> <span
  m='141810'>operation.</span> </p><p><span m='142400'>And</span> <span
  m='142737'>stat</span> <span m='143075'>=</span> <span
  m='143412'>"identity"</span> <span m='143750'>says,</span> <span
  m='144087'>use</span> <span m='144425'>the</span> <span
  m='144762'>value</span> <span m='145100'>of</span> <span m='145437'>the</span>
  <span m='145775'>y</span> <span m='146112'>variable</span> <span
  m='146450'>as</span> <span m='146728'>is,</span> <span m='147007'>which</span>
  <span m='147285'>is</span> <span m='147564'>what</span> <span
  m='147842'>we</span> <span m='148121'>want.</span> </p><p><span
  m='148400'>The</span> <span m='148679'>height</span> <span
  m='148958'>of</span> <span m='149237'>the</span> <span m='149516'>bar</span>
  <span m='149795'>is</span> <span m='150075'>the</span> <span
  m='150354'>value</span> <span m='150633'>of</span> <span m='150912'>the</span>
  <span m='151191'>y</span> <span m='151470'>variable.</span> </p><p><span
  m='151750'>Now,</span> <span m='152008'>there</span> <span
  m='152266'>are</span> <span m='152525'>other</span> <span
  m='152783'>modes,</span> <span m='153041'>including</span> <span
  m='153300'>one</span> <span m='153604'>that</span> <span
  m='153908'>counts</span> <span m='154212'>the</span> <span
  m='154517'>number</span> <span m='154821'>of</span> <span
  m='155125'>rows</span> <span m='155430'>for</span> <span
  m='155922'>each</span> <span m='156414'>value</span> <span
  m='156906'>of</span> <span m='157398'>x,</span> <span m='157891'>and</span>
  <span m='158383'>plots</span> <span m='158875'>that</span> <span
  m='159367'>instead.</span> </p><p><span m='159860'>So</span> <span
  m='160148'>you</span> <span m='160437'>can</span> <span m='160726'>look</span>
  <span m='161015'>at</span> <span m='161304'>the</span> <span
  m='161593'>documentation</span> <span m='161882'>for</span> <span
  m='162171'>ggplot</span> <span m='162460'>to</span> <span
  m='162732'>see</span> <span m='163004'>the</span> <span
  m='163276'>different</span> <span m='163548'>options</span> <span
  m='163821'>and</span> <span m='164093'>how</span> <span m='164365'>they</span>
  <span m='164637'>work.</span> </p><p><span m='164910'>But</span> <span
  m='165307'>stat</span> <span m='165704'>=</span> <span
  m='166101'>"identity"</span> <span m='166498'>is</span> <span
  m='166895'>what</span> <span m='167292'>we</span> <span m='167689'>want</span>
  <span m='168086'>right</span> <span m='168483'>now.</span> </p><p><span
  m='168880'>Now,</span> <span m='169215'>the</span> <span
  m='169551'>x-axis</span> <span m='169887'>is</span> <span
  m='170222'>out</span> <span m='170558'>of</span> <span
  m='170894'>order.</span> </p><p><span m='171230'>And</span> <span
  m='171498'>the</span> <span m='171767'>reason</span> <span
  m='172036'>for</span> <span m='172305'>this</span> <span m='172574'>is</span>
  <span m='172843'>that</span> <span m='173112'>ggplot</span> <span
  m='173381'>defaults</span> <span m='173650'>to</span> <span
  m='174123'>alphabetical</span> <span m='174596'>order</span> <span
  m='175070'>for</span> <span m='175543'>the</span> <span
  m='176016'>x-axis.</span> </p><p><span m='176490'>What</span> <span
  m='176770'>we</span> <span m='177050'>need</span> <span m='177330'>to</span>
  <span m='177610'>do</span> <span m='177890'>is</span> <span
  m='178170'>make</span> <span m='178450'>Region</span> <span
  m='178730'>an</span> <span m='179010'>ordered</span> <span
  m='179290'>factor</span> <span m='179570'>instead</span> <span
  m='180100'>of</span> <span m='180630'>an</span> <span
  m='181160'>unordered</span> <span m='181690'>factor.</span> </p><p><span
  m='182220'>We</span> <span m='182455'>can</span> <span m='182690'>do</span>
  <span m='182925'>this</span> <span m='183160'>with</span> <span
  m='183395'>the</span> <span m='183630'>reorder</span> <span
  m='183865'>command</span> <span m='184100'>and</span> <span
  m='184647'>the</span> <span m='185195'>transform</span> <span
  m='185742'>command.</span> </p><p><span m='186290'>So</span> <span
  m='186666'>let's</span> <span m='187042'>write</span> <span
  m='187418'>this</span> <span m='187794'>out.</span> </p><p><span
  m='188170'>So</span> <span m='188898'>we're</span> <span
  m='189627'>going</span> <span m='190356'>to</span> <span
  m='191085'>transform</span> <span m='191814'>the</span> <span
  m='192543'>international</span> <span m='193272'>data</span> <span
  m='194001'>frame.</span> </p><p><span m='194730'>And</span> <span
  m='195135'>what</span> <span m='195540'>we're</span> <span
  m='195945'>going</span> <span m='196350'>to</span> <span m='196755'>do</span>
  <span m='197160'>is</span> <span m='197565'>say,</span> <span
  m='197970'>Region,</span> <span m='198375'>it's</span> <span
  m='198780'>going</span> <span m='199357'>to</span> <span m='199934'>be</span>
  <span m='200511'>a</span> <span m='201088'>reordering</span> <span
  m='201665'>of</span> <span m='202242'>itself,</span> <span
  m='202820'>based</span> <span m='203298'>on</span> <span
  m='203776'>decreasing</span> <span m='204255'>order</span> <span
  m='204733'>of</span> <span m='205211'>PercentOfIntl.</span> </p><p><span
  m='212910'>So</span> <span m='213260'>if</span> <span m='213610'>we</span>
  <span m='213960'>look</span> <span m='214310'>at</span> <span
  m='214660'>the</span> <span m='215010'>structure</span> <span
  m='215360'>of</span> <span m='215710'>the</span> <span m='216060'>data</span>
  <span m='216410'>frame</span> <span m='216760'>now,</span> <span
  m='217110'>we</span> <span m='217461'>see</span> <span
  m='217813'>there's</span> <span m='218165'>something</span> <span
  m='218517'>going</span> <span m='218869'>on</span> <span m='219220'>in</span>
  <span m='219572'>the</span> <span m='219924'>Region</span> <span
  m='220276'>column</span> <span m='220628'>that</span> <span
  m='220980'>wasn't</span> <span m='221303'>going</span> <span
  m='221626'>before.</span> </p><p><span m='221950'>And</span> <span
  m='222520'>that's</span> <span m='223090'>that</span> <span
  m='223660'>ordering.</span> </p><p><span m='224230'>So</span> <span
  m='224507'>you</span> <span m='224785'>might</span> <span
  m='225062'>have</span> <span m='225340'>also</span> <span
  m='225617'>noticed</span> <span m='225895'>that</span> <span
  m='226172'>I</span> <span m='226450'>put</span> <span m='226727'>a</span>
  <span m='227005'>negative</span> <span m='227282'>sign</span> <span
  m='227560'>in</span> <span m='228272'>front</span> <span m='228985'>of</span>
  <span m='229697'>PercentOfIntl.</span> </p><p><span m='230410'>So</span> <span
  m='230804'>that</span> <span m='231198'>negative</span> <span
  m='231592'>sign</span> <span m='231987'>means</span> <span
  m='232381'>decreasing</span> <span m='232775'>order.</span> </p><p><span
  m='233170'>If</span> <span m='233366'>we</span> <span m='233562'>had</span>
  <span m='233758'>left</span> <span m='233954'>that</span> <span
  m='234150'>out,</span> <span m='234346'>it</span> <span
  m='234542'>would</span> <span m='234738'>have</span> <span
  m='234934'>actually</span> <span m='235130'>ordered</span> <span
  m='235550'>them</span> <span m='235970'>in</span> <span
  m='236390'>increasing</span> <span m='236810'>order.</span> </p><p><span
  m='237230'>So</span> <span m='237523'>unknown</span> <span
  m='237817'>or</span> <span m='238110'>stateless</span> <span
  m='238404'>would</span> <span m='238698'>have</span> <span
  m='238991'>been</span> <span m='239285'>first,</span> <span
  m='239579'>and</span> <span m='240095'>Oceania</span> <span
  m='240612'>would</span> <span m='241129'>have</span> <span
  m='241646'>been</span> <span m='242162'>second,</span> <span
  m='242679'>and</span> <span m='243196'>so</span> <span m='243713'>on.</span>
  </p><p><span m='244230'>So</span> <span m='244822'>that's</span> <span
  m='245414'>one</span> <span m='246006'>thing</span> <span
  m='246598'>fixed.</span> </p><p><span m='247190'>Another</span> <span
  m='247417'>thing</span> <span m='247645'>we</span> <span
  m='247873'>didn't</span> <span m='248101'>like</span> <span
  m='248328'>was</span> <span m='248556'>that</span> <span m='248784'>the</span>
  <span m='249012'>numbers</span> <span m='249240'>were</span> <span
  m='249691'>between</span> <span m='250143'>zero</span> <span
  m='250595'>and</span> <span m='251047'>one,</span> <span
  m='251499'>which</span> <span m='251950'>looks</span> <span
  m='252402'>a</span> <span m='252854'>little</span> <span m='253306'>bit</span>
  <span m='253758'>messy.</span> </p><p><span m='254210'>So</span> <span
  m='254533'>let's</span> <span m='254856'>just</span> <span
  m='255179'>simply</span> <span m='255502'>multiply</span> <span
  m='255825'>all</span> <span m='256148'>the</span> <span
  m='256471'>values</span> <span m='256794'>by</span> <span
  m='257117'>100.</span> </p><p><span m='257440'>So</span> <span
  m='260720'>intl$PercentOfIntl</span> <span m='264000'>=</span> <span
  m='267280'>intl$PercentOfIntl*100.</span> </p><p><span m='270560'>And</span>
  <span m='270745'>now</span> <span m='270931'>the</span> <span
  m='271116'>other</span> <span m='271302'>things</span> <span
  m='271487'>we</span> <span m='271673'>have</span> <span m='271858'>to</span>
  <span m='272044'>fix,</span> <span m='272230'>like</span> <span
  m='272600'>the</span> <span m='272971'>text</span> <span
  m='273342'>overlying</span> <span m='273713'>and</span> <span
  m='274084'>the</span> <span m='274455'>x-axis</span> <span
  m='274826'>being</span> <span m='275197'>all</span> <span
  m='275568'>bunched</span> <span m='275939'>up</span> <span
  m='276310'>like</span> <span m='276596'>that,</span> <span
  m='276883'>we're</span> <span m='277170'>going</span> <span
  m='277456'>to</span> <span m='277743'>do</span> <span m='278030'>that</span>
  <span m='278316'>in</span> <span m='278603'>a</span> <span
  m='278890'>new</span> <span m='279176'>ggplot</span> <span
  m='279463'>command.</span> </p><p><span m='279750'>So</span> <span
  m='280018'>I'm</span> <span m='280287'>going</span> <span m='280556'>to</span>
  <span m='280825'>break</span> <span m='281094'>it</span> <span
  m='281363'>across</span> <span m='281632'>multiple</span> <span
  m='281901'>lines.</span> </p><p><span m='282170'>So</span> <span
  m='282591'>we</span> <span m='283013'>start</span> <span m='283435'>up</span>
  <span m='283856'>with</span> <span m='284278'>the</span> <span
  m='284700'>ggplot</span> <span m='285121'>command,</span> <span
  m='285543'>as</span> <span m='285965'>we</span> <span m='286386'>did</span>
  <span m='286808'>before,</span> <span m='287230'>actually</span> <span
  m='287602'>identical</span> <span m='287975'>to</span> <span
  m='288348'>what</span> <span m='288721'>we</span> <span m='289094'>had</span>
  <span m='289467'>before.</span> </p><p><span m='289840'>So</span> <span
  m='290411'>the</span> <span m='290982'>aesthetic</span> <span
  m='291553'>is</span> <span m='292124'>x-axis</span> <span m='292695'>is</span>
  <span m='293266'>the</span> <span m='293837'>region,</span> <span
  m='294409'>and</span> <span m='295073'>the</span> <span
  m='295738'>y-axis</span> <span m='296402'>is</span> <span
  m='297067'>the</span> <span m='297731'>percentage</span> <span
  m='298396'>of</span> <span m='299060'>international</span> <span
  m='299725'>students.</span> </p><p><span m='300390'>We</span> <span
  m='300729'>break</span> <span m='301068'>it</span> <span
  m='301407'>into</span> <span m='301746'>multiple</span> <span
  m='302086'>lines,</span> <span m='302425'>so</span> <span
  m='302764'>put</span> <span m='303103'>the</span> <span m='303443'>plus</span>
  <span m='303782'>at</span> <span m='304121'>the</span> <span
  m='304460'>end</span> <span m='304800'>there,</span> <span
  m='305268'>and</span> <span m='305736'>press</span> <span
  m='306204'>Shift</span> <span m='306672'>Enter.</span> </p><p><span
  m='307140'>We're</span> <span m='307395'>going</span> <span
  m='307651'>to</span> <span m='307907'>do</span> <span m='308162'>a</span>
  <span m='308418'>bar</span> <span m='308674'>plot.</span> </p><p><span
  m='315400'>The</span> <span m='316286'>stat</span> <span m='317173'>=</span>
  <span m='318060'>"identity",</span> <span m='318946'>as</span> <span
  m='319833'>before.</span> </p><p><span m='320720'>And</span> <span
  m='320948'>this</span> <span m='321176'>time</span> <span
  m='321405'>though,</span> <span m='321633'>we're</span> <span
  m='321861'>going</span> <span m='322090'>to</span> <span
  m='322660'>manually</span> <span m='323230'>specify</span> <span
  m='323800'>a</span> <span m='324370'>fill.</span> </p><p><span
  m='324940'>I'm</span> <span m='325223'>going</span> <span m='325506'>to</span>
  <span m='325790'>say</span> <span m='326073'>"dark</span> <span
  m='326356'>blue".</span> </p><p><span m='326640'>I</span> <span
  m='327228'>quite</span> <span m='327816'>like</span> <span
  m='328405'>how</span> <span m='328993'>that</span> <span
  m='329581'>looks.</span> </p><p><span m='330170'>Now,</span> <span
  m='330500'>we</span> <span m='330830'>need</span> <span m='331160'>the</span>
  <span m='331490'>text,</span> <span m='331820'>and</span> <span
  m='332150'>the</span> <span m='332480'>aesthetic</span> <span
  m='332810'>of</span> <span m='333140'>that</span> <span m='333470'>is</span>
  <span m='333731'>to</span> <span m='333993'>have</span> <span
  m='334255'>the</span> <span m='334517'>label</span> <span
  m='334779'>equal</span> <span m='335040'>the</span> <span
  m='335302'>value</span> <span m='335564'>of</span> <span m='335826'>the</span>
  <span m='336088'>column.</span> </p><p><span m='339680'>I'm</span> <span
  m='339885'>going</span> <span m='340091'>to</span> <span m='340296'>add</span>
  <span m='340502'>one</span> <span m='340707'>more</span> <span
  m='340913'>thing</span> <span m='341118'>to</span> <span
  m='341324'>this.</span> </p><p><span m='341530'>I'm</span> <span
  m='342175'>going</span> <span m='342821'>to</span> <span m='343467'>say</span>
  <span m='344112'>vjust</span> <span m='344758'>=</span> <span
  m='345404'>-0.4.</span> </p><p><span m='346050'>And</span> <span
  m='346282'>what</span> <span m='346514'>this</span> <span
  m='346746'>does</span> <span m='346979'>is,</span> <span m='347211'>it</span>
  <span m='347443'>moves</span> <span m='347676'>the</span> <span
  m='347908'>labels</span> <span m='348140'>up</span> <span m='348373'>a</span>
  <span m='348605'>little</span> <span m='348837'>bit</span> <span
  m='349070'>and</span> <span m='349295'>off</span> <span m='349521'>the</span>
  <span m='349747'>top</span> <span m='349972'>of</span> <span
  m='350198'>the</span> <span m='350424'>bars.</span> </p><p><span
  m='350650'>You</span> <span m='350842'>can</span> <span m='351034'>play</span>
  <span m='351226'>with</span> <span m='351418'>that.</span> </p><p><span
  m='351610'>So</span> <span m='351846'>a</span> <span
  m='352082'>positive</span> <span m='352318'>value</span> <span
  m='352555'>will</span> <span m='352791'>move</span> <span m='353027'>it</span>
  <span m='353263'>down,</span> <span m='353500'>and</span> <span
  m='353693'>a</span> <span m='353887'>negative</span> <span
  m='354081'>value</span> <span m='354275'>will</span> <span
  m='354468'>move</span> <span m='354662'>it</span> <span m='354856'>up.</span>
  </p><p><span m='358270'>Next,</span> <span m='358683'>I'm</span> <span
  m='359097'>going</span> <span m='359511'>to</span> <span m='359925'>set</span>
  <span m='360338'>the</span> <span m='360752'>y-axis</span> <span
  m='361166'>label</span> <span m='361580'>to</span> <span m='361938'>be</span>
  <span m='362297'>something</span> <span m='362655'>a</span> <span
  m='363014'>bit</span> <span m='363372'>more</span> <span
  m='363731'>sensible--</span> <span m='364090'>so</span> <span
  m='365370'>"Percent</span> <span m='366650'>of</span> <span
  m='367930'>International</span> <span m='369210'>Students".</span>
  </p><p><span m='373290'>And</span> <span m='373561'>finally,</span> <span
  m='373832'>I'd</span> <span m='374103'>like</span> <span m='374374'>to</span>
  <span m='374645'>fix</span> <span m='374916'>up</span> <span
  m='375187'>that</span> <span m='375458'>x-axis.</span> </p><p><span
  m='375730'>So</span> <span m='375940'>I</span> <span m='376151'>want</span>
  <span m='376362'>to</span> <span m='376573'>get</span> <span
  m='376784'>rid</span> <span m='376995'>of</span> <span m='377205'>the</span>
  <span m='377416'>word</span> <span m='377627'>"Region,"</span> <span
  m='377838'>because</span> <span m='378049'>it's</span> <span
  m='378260'>pretty</span> <span m='378720'>obvious</span> <span
  m='379180'>these</span> <span m='379640'>are</span> <span
  m='380100'>regions.</span> </p><p><span m='380560'>And</span> <span
  m='380798'>I</span> <span m='381037'>also</span> <span m='381275'>want</span>
  <span m='381514'>to</span> <span m='381752'>rotate</span> <span
  m='381991'>the</span> <span m='382230'>text</span> <span m='382468'>at</span>
  <span m='382707'>a</span> <span m='382945'>bit</span> <span
  m='383184'>of</span> <span m='383422'>an</span> <span m='383661'>angle,</span>
  <span m='383900'>so</span> <span m='384312'>you</span> <span
  m='384725'>can</span> <span m='385138'>read</span> <span m='385550'>it</span>
  <span m='385963'>all</span> <span m='386376'>on</span> <span
  m='386789'>a</span> <span m='387201'>plot</span> <span m='387614'>like</span>
  <span m='388027'>this.</span> </p><p><span m='388440'>That's</span> <span
  m='388683'>done</span> <span m='388926'>with</span> <span
  m='389170'>the</span> <span m='389413'>theme</span> <span
  m='389656'>command.</span> </p><p><span m='389900'>So</span> <span
  m='390248'>the</span> <span m='390597'>theming</span> <span
  m='390946'>we're</span> <span m='391295'>going</span> <span
  m='391643'>to</span> <span m='391992'>do</span> <span m='392341'>is</span>
  <span m='392690'>we're</span> <span m='393248'>going</span> <span
  m='393807'>to</span> <span m='394366'>say</span> <span m='394925'>the</span>
  <span m='395484'>axis</span> <span m='396043'>title,</span> <span
  m='396602'>the</span> <span m='397161'>x-axis,</span> <span
  m='397720'>should</span> <span m='397980'>be</span> <span
  m='398240'>blank.</span> </p><p><span m='403190'>And</span> <span
  m='403923'>the</span> <span m='404656'>axis</span> <span
  m='405389'>text</span> <span m='406122'>on</span> <span m='406855'>the</span>
  <span m='407588'>x-axis</span> <span m='408321'>should</span> <span
  m='409054'>be</span> <span m='409787'>rotated,</span> <span
  m='410520'>so</span> <span m='411112'>it's</span> <span m='411704'>a</span>
  <span m='412296'>text</span> <span m='412888'>element</span> <span
  m='413481'>that's</span> <span m='414073'>angle</span> <span
  m='414665'>is</span> <span m='415257'>45.</span> </p><p><span
  m='415850'>And</span> <span m='416097'>I'll</span> <span
  m='416345'>move</span> <span m='416592'>it</span> <span
  m='416840'>sideways</span> <span m='417087'>just</span> <span
  m='417335'>a</span> <span m='417582'>little</span> <span
  m='417830'>bit--</span> <span m='418077'>hjust</span> <span
  m='418325'>=</span> <span m='418572'>1.</span> </p><p><span
  m='422280'>And</span> <span m='422585'>there</span> <span m='422890'>we</span>
  <span m='423195'>go.</span> </p><p><span m='423500'>So</span> <span
  m='423988'>we've</span> <span m='424477'>got</span> <span
  m='424966'>our</span> <span m='425455'>labels</span> <span
  m='425944'>vjust-ed</span> <span m='426433'>above</span> <span
  m='426922'>the</span> <span m='427411'>columns.</span> </p><p><span
  m='427900'>The</span> <span m='428340'>bars</span> <span
  m='428780'>themselves</span> <span m='429220'>are</span> <span
  m='429660'>dark</span> <span m='430100'>blue.</span> </p><p><span
  m='430540'>The</span> <span m='430765'>numbers</span> <span
  m='430990'>are</span> <span m='431215'>now</span> <span
  m='431440'>between</span> <span m='431665'>0</span> <span
  m='431890'>and</span> <span m='432115'>100,</span> <span
  m='432340'>instead</span> <span m='432760'>of</span> <span
  m='433180'>zero</span> <span m='433600'>and</span> <span
  m='434020'>one.</span> </p><p><span m='434440'>We</span> <span
  m='434825'>can</span> <span m='435211'>read</span> <span m='435597'>all</span>
  <span m='435982'>the</span> <span m='436368'>text</span> <span
  m='436754'>labels.</span> </p><p><span m='437140'>And</span> <span
  m='437397'>it's</span> <span m='437654'>generally</span> <span
  m='437911'>a</span> <span m='438168'>lot</span> <span m='438425'>more</span>
  <span m='438682'>readable</span> <span m='438940'>than</span> <span
  m='439578'>the</span> <span m='440216'>pie</span> <span m='440854'>plot</span>
  <span m='441492'>or</span> <span m='442130'>our</span> <span
  m='442768'>original</span> <span m='443406'>ggplot,</span> <span
  m='444044'>at</span> <span m='444682'>that.</span> </p><p><span
  m='445320'>Let's</span> <span m='445540'>go</span> <span
  m='445760'>back</span> <span m='445980'>to</span> <span m='446200'>the</span>
  <span m='446420'>slides</span> <span m='446640'>now</span> <span
  m='446860'>and</span> <span m='447080'>talk</span> <span
  m='447300'>about</span> <span m='447844'>what</span> <span
  m='448388'>we've</span> <span m='448932'>just</span> <span
  m='449476'>done.</span> </p>
uid: 598eb710c9675a9df54b9369f24d426f
type: courses
layout: video
---
