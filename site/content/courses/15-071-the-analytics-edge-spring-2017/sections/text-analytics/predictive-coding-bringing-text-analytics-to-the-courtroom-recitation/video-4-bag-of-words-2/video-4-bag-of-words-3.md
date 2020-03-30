---
title: 'Video 4: Bag of Words'
uid: 73969d4c90251c4460878d4aaaa03de3
parent_uid: 8a96d7cd01b950c8be68959be293ab00
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2/video-4-bag-of-words-3
short_url: video-4-bag-of-words-3
inline_embed_id: 45696203video4bagofwords45299313
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4490'>Now</span> <span m='4848'>let's</span> <span
  m='5206'>build</span> <span m='5565'>the</span> <span
  m='5923'>document-term</span> <span m='6281'>matrix</span> <span
  m='6640'>for</span> <span m='7006'>our</span> <span m='7373'>corpus.</span>
  </p><p><span m='7740'>So</span> <span m='7970'>we'll</span> <span
  m='8200'>create</span> <span m='8430'>a</span> <span m='8660'>variable</span>
  <span m='8890'>called</span> <span m='9120'>dtm</span> <span
  m='9550'>that</span> <span m='9980'>contains</span> <span m='10410'>the</span>
  <span m='10840'>DocumentTermMatrix(corpus).</span> </p><p><span
  m='15510'>The</span> <span m='15849'>corpus</span> <span m='16188'>has</span>
  <span m='16527'>already</span> <span m='16866'>had</span> <span
  m='17205'>all</span> <span m='17544'>the</span> <span
  m='17883'>pre-processing</span> <span m='18222'>run</span> <span
  m='18561'>on</span> <span m='18900'>it.</span> </p><p><span
  m='19240'>So</span> <span m='19603'>to</span> <span m='19966'>get</span> <span
  m='20329'>the</span> <span m='20692'>summary</span> <span
  m='21055'>statistics</span> <span m='21418'>about</span> <span
  m='21781'>the</span> <span m='22144'>document-term</span> <span
  m='22507'>matrix,</span> <span m='22870'>we'll</span> <span
  m='23167'>just</span> <span m='23464'>type</span> <span m='23761'>in</span>
  <span m='24058'>the</span> <span m='24355'>name</span> <span
  m='24652'>of</span> <span m='24949'>our</span> <span
  m='25246'>variable,</span> <span m='25543'>dtm.</span> </p><p><span
  m='25840'>And</span> <span m='26083'>what</span> <span m='26326'>we</span>
  <span m='26569'>can</span> <span m='26812'>see</span> <span
  m='27055'>is</span> <span m='27298'>that</span> <span m='27541'>even</span>
  <span m='27784'>though</span> <span m='28027'>we</span> <span
  m='28270'>have</span> <span m='28782'>only</span> <span m='29295'>855</span>
  <span m='29808'>emails</span> <span m='30321'>in</span> <span
  m='30834'>the</span> <span m='31347'>corpus,</span> <span m='31860'>we</span>
  <span m='32226'>have</span> <span m='32592'>over</span> <span
  m='32959'>22,000</span> <span m='33325'>terms</span> <span
  m='33691'>that</span> <span m='34058'>showed</span> <span m='34424'>up</span>
  <span m='34790'>at</span> <span m='35157'>least</span> <span
  m='35523'>once,</span> <span m='35890'>which</span> <span m='36290'>is</span>
  <span m='36690'>clearly</span> <span m='37090'>too</span> <span
  m='37490'>many</span> <span m='37890'>variables</span> <span
  m='38290'>for</span> <span m='38612'>the</span> <span m='38935'>number</span>
  <span m='39258'>of</span> <span m='39581'>observations</span> <span
  m='39904'>we</span> <span m='40227'>have.</span> </p><p><span
  m='40550'>So</span> <span m='40766'>we</span> <span m='40982'>want</span>
  <span m='41198'>to</span> <span m='41415'>remove</span> <span
  m='41631'>the</span> <span m='41847'>terms</span> <span m='42063'>that</span>
  <span m='42280'>don't</span> <span m='42623'>appear</span> <span
  m='42967'>too</span> <span m='43311'>often</span> <span m='43655'>in</span>
  <span m='43998'>our</span> <span m='44342'>data</span> <span
  m='44686'>set,</span> <span m='45030'>and</span> <span m='45586'>we'll</span>
  <span m='46142'>do</span> <span m='46698'>that</span> <span
  m='47254'>using</span> <span m='47810'>the</span> <span
  m='48366'>remove</span> <span m='48922'>sparse</span> <span
  m='49478'>terms</span> <span m='50034'>function.</span> </p><p><span
  m='50590'>And</span> <span m='50822'>we're</span> <span m='51054'>going</span>
  <span m='51286'>to</span> <span m='51518'>have</span> <span
  m='51751'>to</span> <span m='51983'>determine</span> <span
  m='52215'>the</span> <span m='52447'>sparsity,</span> <span
  m='52680'>so</span> <span m='52974'>we'll</span> <span m='53269'>say</span>
  <span m='53563'>that</span> <span m='53858'>we'll</span> <span
  m='54152'>remove</span> <span m='54447'>any</span> <span m='54741'>term</span>
  <span m='55036'>that</span> <span m='55330'>doesn't</span> <span
  m='55625'>appear</span> <span m='55920'>in</span> <span m='56262'>at</span>
  <span m='56605'>least</span> <span m='56948'>3%</span> <span
  m='57291'>of</span> <span m='57634'>the</span> <span
  m='57977'>documents.</span> </p><p><span m='58320'>To</span> <span
  m='58960'>do</span> <span m='59600'>that,</span> <span m='60240'>we'll</span>
  <span m='60880'>pass</span> <span m='61520'>0.97</span> <span
  m='62160'>to</span> <span m='62800'>remove</span> <span
  m='63440'>sparse</span> <span m='64080'>terms.</span> </p><p><span
  m='64720'>Now</span> <span m='64967'>we</span> <span m='65214'>can</span>
  <span m='65461'>take</span> <span m='65708'>a</span> <span
  m='65955'>look</span> <span m='66202'>at</span> <span m='66449'>the</span>
  <span m='66696'>summary</span> <span m='66943'>statistics</span> <span
  m='67190'>for</span> <span m='67536'>the</span> <span
  m='67883'>document-term</span> <span m='68230'>matrix,</span> <span
  m='68576'>and</span> <span m='68923'>we</span> <span m='69270'>can</span>
  <span m='69492'>see</span> <span m='69714'>that</span> <span
  m='69936'>we've</span> <span m='70158'>decreased</span> <span
  m='70381'>the</span> <span m='70603'>number</span> <span m='70825'>of</span>
  <span m='71047'>terms</span> <span m='71270'>to</span> <span
  m='71726'>788,</span> <span m='72183'>which</span> <span m='72640'>is</span>
  <span m='73096'>a</span> <span m='73553'>much</span> <span
  m='74010'>more</span> <span m='74466'>reasonable</span> <span
  m='74923'>number.</span> </p><p><span m='75380'>So</span> <span
  m='75778'>let's</span> <span m='76177'>build</span> <span m='76576'>a</span>
  <span m='76975'>data</span> <span m='77374'>frame</span> <span
  m='77773'>called</span> <span m='78172'>labeledTerms</span> <span
  m='78571'>out</span> <span m='78970'>of</span> <span m='79442'>this</span>
  <span m='79915'>document-term</span> <span m='80387'>matrix.</span>
  </p><p><span m='80860'>So</span> <span m='81354'>to</span> <span
  m='81848'>do</span> <span m='82342'>this,</span> <span m='82837'>we'll</span>
  <span m='83331'>use</span> <span m='83825'>as.data.fram</span> <span
  m='84320'>of</span> <span m='85040'>as.matrix</span> <span
  m='85760'>applied</span> <span m='86480'>to</span> <span m='87200'>dtm,</span>
  <span m='87920'>the</span> <span m='88640'>document-term</span> <span
  m='89360'>matrix.</span> </p><p><span m='90080'>So</span> <span
  m='90441'>this</span> <span m='90802'>data</span> <span m='91163'>frame</span>
  <span m='91524'>is</span> <span m='91885'>only</span> <span
  m='92246'>including</span> <span m='92607'>right</span> <span
  m='92968'>now</span> <span m='93330'>the</span> <span
  m='93607'>frequencies</span> <span m='93884'>of</span> <span
  m='94161'>the</span> <span m='94439'>words</span> <span m='94716'>that</span>
  <span m='94993'>appeared</span> <span m='95270'>in</span> <span
  m='95548'>at</span> <span m='95825'>least</span> <span m='96102'>3%</span>
  <span m='96380'>of</span> <span m='96713'>the</span> <span
  m='97047'>documents,</span> <span m='97380'>but</span> <span
  m='97714'>in</span> <span m='98048'>order</span> <span m='98381'>to</span>
  <span m='98715'>run</span> <span m='99049'>our</span> <span
  m='99382'>text</span> <span m='99716'>analytics</span> <span
  m='100050'>models,</span> <span m='100412'>we're</span> <span
  m='100774'>also</span> <span m='101136'>going</span> <span
  m='101498'>to</span> <span m='101860'>have</span> <span m='102222'>the</span>
  <span m='102584'>outcome</span> <span m='102946'>variable,</span> <span
  m='103308'>which</span> <span m='103670'>is</span> <span
  m='104042'>whether</span> <span m='104415'>or</span> <span
  m='104787'>not</span> <span m='105160'>each</span> <span
  m='105532'>email</span> <span m='105905'>was</span> <span
  m='106277'>responsive.</span> </p><p><span m='106650'>So</span> <span
  m='106942'>we</span> <span m='107234'>need</span> <span m='107526'>to</span>
  <span m='107818'>add</span> <span m='108111'>in</span> <span
  m='108403'>this</span> <span m='108695'>outcome</span> <span
  m='108987'>variable.</span> </p><p><span m='109280'>So</span> <span
  m='110395'>we'll</span> <span m='111510'>create</span> <span
  m='112625'>labeledTerms$responsive,</span> <span m='113740'>and</span> <span
  m='114076'>we'll</span> <span m='114413'>simply</span> <span
  m='114750'>copy</span> <span m='115086'>over</span> <span
  m='115423'>the</span> <span m='115760'>responsive</span> <span
  m='116096'>variable</span> <span m='116433'>from</span> <span
  m='116770'>the</span> <span m='117078'>original</span> <span
  m='117387'>emails</span> <span m='117696'>data</span> <span
  m='118005'>frame</span> <span m='118313'>so</span> <span
  m='118622'>it's</span> <span m='118931'>equal</span> <span
  m='119240'>to</span> <span m='119805'>emails$responsive.</span> </p><p><span
  m='124480'>So</span> <span m='124745'>finally</span> <span
  m='125010'>let's</span> <span m='125276'>take</span> <span m='125541'>a</span>
  <span m='125807'>look</span> <span m='126072'>at</span> <span
  m='126338'>our</span> <span m='126603'>newly</span> <span
  m='126869'>constructed</span> <span m='127134'>data</span> <span
  m='127400'>frame</span> <span m='127821'>with</span> <span
  m='128243'>the</span> <span m='128665'>str</span> <span
  m='129087'>function.</span> </p><p><span m='132580'>So</span> <span
  m='133062'>as</span> <span m='133544'>we</span> <span
  m='134026'>expect,</span> <span m='134509'>turn</span> <span
  m='134991'>off</span> <span m='135473'>a</span> <span m='135956'>lot</span>
  <span m='136438'>of</span> <span m='136920'>variables,</span> <span
  m='137403'>789</span> <span m='137885'>in</span> <span
  m='138367'>total.</span> </p><p><span m='138850'>788</span> <span
  m='139247'>of</span> <span m='139644'>those</span> <span
  m='140041'>variables</span> <span m='140438'>are</span> <span
  m='140835'>the</span> <span m='141232'>frequencies</span> <span
  m='141630'>of</span> <span m='141982'>various</span> <span
  m='142335'>words</span> <span m='142687'>in</span> <span m='143040'>the</span>
  <span m='143392'>emails,</span> <span m='143745'>and</span> <span
  m='144097'>the</span> <span m='144450'>last</span> <span m='144802'>one</span>
  <span m='145155'>is</span> <span m='145507'>responsive,</span> <span
  m='145860'>the</span> <span m='146563'>outcome</span> <span
  m='147266'>variable.</span> </p>
embedded_media:
  - uid: e2fc635eef32bd9a90e42d575cf96796
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: EQYlOQjzYOA
  - uid: d9d8bec91fd28788e6bd0d63bb5545de
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: EQYlOQjzYOA
  - uid: 64be175eb8392ce392769a438f4d69b3
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/EQYlOQjzYOA/default.jpg'
  - uid: 9b42728bd9b1c5ff377d7b502883f031
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: EQYlOQjzYOA.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2/video-4-bag-of-words-3/EQYlOQjzYOA.srt
  - uid: d6ceb18425ac21a25651e3c2a95c4709
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: EQYlOQjzYOA.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-4-bag-of-words-2/video-4-bag-of-words-3/EQYlOQjzYOA.pdf
  - uid: ae4bd9362339ba55c7525023676656fa
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 736a6dbc2cd97932588e6b5495695a5c
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: ad5e61193b9b74341bef71e106223e9e
    parent_uid: 73969d4c90251c4460878d4aaaa03de3
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.05_300k.mp4
type: courses
layout: video
---
