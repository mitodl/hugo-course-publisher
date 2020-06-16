---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture starts with how to define useful
  subproblems for strings or sequences, and then looks at parenthesization, edit
  distance, and the knapsack problem. The lecture ends with a brief discussion
  of pseudopolynomial time.</p> <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ocZMDMZwhCY
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Video-YouTube-Stream
    type: Video
    uid: e65741ee59e7a6f96d8c0175f426f504
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ocZMDMZwhCY/default.jpg'
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4caa190662cea6d52c4678cd75f116ef
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-21-dp-iii-parenthesization/id585700718?i=126127728
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Video-iTunes U-MP4
    type: Video
    uid: d6068b710e43c9970c2d8ce97d2f5335
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec21_300k.mp4'
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Video-Internet Archive-MP4
    type: Video
    uid: fc6a9d79877c1e36f6263f979e0360c3
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ocZMDMZwhCY
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2a238918aa6c78820c7f40aea069f421
  - id: ocZMDMZwhCY.srt
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-21-dp-iii-parenthesization-edit-distance-knapsack/ocZMDMZwhCY.srt
    title: 3play caption file
    type: null
    uid: 3ad195929479286d69adb5a305c8cb85
  - id: ocZMDMZwhCY.pdf
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-21-dp-iii-parenthesization-edit-distance-knapsack/ocZMDMZwhCY.pdf
    title: 3play pdf file
    type: null
    uid: 76f04a14b5c609e5157e7423ab083821
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 025ffe00ccbc244974d612545ee17c85
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a394c84bb84c79e401a7614c549dc8e2
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: df64efb5f7fe47917654230ab905fda2
inline_embed_id: >-
  94375562lecture21:dynamicprogrammingiii:parenthesization,editdistance,knapsack31839991
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-21-dp-iii-parenthesization-edit-distance-knapsack
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-21-dp-iii-parenthesization-edit-distance-knapsack
title: 'Lecture 21: Dynamic Programming III: Parenthesization, Edit Distance, Knapsack'
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
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='21880'>PROFESSOR: Today</span> <span m='22580'>we're</span> <span
  m='22980'>going</span> <span m='23120'>to</span> <span m='23210'>solve</span>
  <span m='23960'>three</span> <span m='24170'>problems,</span> <span
  m='25650'>a</span> <span m='25810'>problem</span> <span
  m='25970'>called</span> <span m='26150'>Parenthesization,</span> <span
  m='27896'>a</span> <span m='28123'>problem</span> <span
  m='28350'>called</span> <span m='28630'>Edit</span> <span
  m='28890'>Distance,</span> <span m='30080'>which</span> <span
  m='30330'>is</span> <span m='30430'>used</span> <span m='30860'>in</span>
  <span m='30950'>practice</span> <span m='31440'>a</span> <span
  m='31540'>lot,</span> <span m='31860'>for</span> <span m='32130'>things</span>
  <span m='32400'>like</span> <span m='32659'>comparing</span> <span
  m='33140'>two</span> <span m='33290'>strings</span> <span m='33760'>of</span>
  <span m='33830'>DNA,</span> <span m='34790'>and</span> <span
  m='35020'>a</span> <span m='35080'>problem</span> <span
  m='35310'>called</span> <span m='35490'>Knapsack,</span> <span
  m='37360'>just</span> <span m='37910'>about</span> <span m='38190'>how</span>
  <span m='38330'>to</span> <span m='38400'>pack</span> <span
  m='38630'>your</span> <span m='38740'>bags.</span> <span m='39670'>And</span>
  <span m='39860'>we're</span> <span m='39960'>going</span> <span
  m='40080'>to</span> <span m='40630'>get</span> <span m='40770'>a</span> <span
  m='40900'>couple</span> <span m='41230'>of</span> <span
  m='42520'>general</span> <span m='42870'>ideas,</span> <span
  m='43300'>one</span> <span m='43490'>is</span> <span m='43590'>about</span>
  <span m='43820'>how</span> <span m='43980'>to</span> <span
  m='44090'>deal</span> <span m='44280'>with</span> <span
  m='44400'>string</span> <span m='44820'>problems</span> <span
  m='45260'>in</span> <span m='45370'>general</span> <span m='45830'>with</span>
  <span m='45920'>dynamic</span> <span m='46280'>programming.</span> <span
  m='47490'>The</span> <span m='47660'>first</span> <span m='48040'>two</span>
  <span m='48570'>and</span> <span m='48840'>our</span> <span
  m='48900'>previous</span> <span m='49290'>lecture</span> <span
  m='49630'>are</span> <span m='49760'>all</span> <span m='50150'>about</span>
  <span m='50460'>strings,</span> <span m='51250'>certain</span> <span
  m='51510'>sense</span> <span m='51735'>or</span> <span
  m='51960'>sequences,</span> <span m='53190'>and</span> <span
  m='53340'>we're</span> <span m='53480'>going</span> <span m='53630'>to</span>
  <span m='53710'>introduce</span> <span m='54090'>a</span> <span
  m='54150'>new</span> <span m='54790'>concept,</span> <span
  m='55400'>kind</span> <span m='55560'>of</span> <span m='55720'>like</span>
  <span m='55920'>polynomial</span> <span m='56460'>time,</span> <span
  m='56790'>but</span> <span m='56920'>only</span> <span m='57240'>kind</span>
  <span m='57400'>of,</span> <span m='57560'>sort</span> <span
  m='57760'>of--</span> <span m='58510'>pseudo</span> <span
  m='58880'>polynomial</span> <span m='59410'>time.</span> </p><p><span
  m='60190'>Remember,</span> <span m='60780'>dynamic</span> <span
  m='61190'>programming</span> <span m='61710'>in</span> <span
  m='61800'>five</span> <span m='62120'>easy</span> <span
  m='62390'>steps.</span> <span m='63200'>You</span> <span
  m='63420'>define</span> <span m='64160'>what</span> <span
  m='64390'>your</span> <span m='64480'>sub</span> <span
  m='64680'>problems</span> <span m='65060'>are</span> <span
  m='65260'>and</span> <span m='65370'>count</span> <span m='65610'>how</span>
  <span m='65700'>many</span> <span m='65950'>there</span> <span
  m='66180'>are,</span> <span m='68600'>to</span> <span m='68760'>solve</span>
  <span m='69140'>a</span> <span m='69210'>sub</span> <span
  m='69470'>problem,</span> <span m='70150'>you</span> <span
  m='70330'>guess</span> <span m='70610'>some</span> <span m='70980'>part</span>
  <span m='71350'>of</span> <span m='71510'>the</span> <span
  m='71630'>solution,</span> <span m='73100'>where</span> <span
  m='73360'>there's</span> <span m='73540'>not</span> <span m='73780'>too</span>
  <span m='73960'>many</span> <span m='74210'>different</span> <span
  m='74500'>possibilities</span> <span m='75140'>for</span> <span
  m='75230'>that</span> <span m='75470'>guess.</span> <span m='75790'>You</span>
  <span m='75920'>count</span> <span m='76220'>them,</span> <span
  m='76840'>better</span> <span m='77110'>be</span> <span
  m='77260'>polynomial.</span> <span m='78790'>Then</span> <span
  m='79200'>you,</span> <span m='80030'>using</span> <span m='80530'>that</span>
  <span m='80950'>guess--</span> <span m='81960'>this</span> <span
  m='82140'>is</span> <span m='82220'>sort</span> <span m='82420'>of</span>
  <span m='82510'>optional,</span> <span m='83180'>but</span> <span
  m='83750'>I</span> <span m='83850'>think</span> <span m='84030'>it's</span>
  <span m='84085'>a</span> <span m='84140'>useful</span> <span
  m='84460'>way</span> <span m='84560'>to</span> <span m='84640'>think</span>
  <span m='84810'>about</span> <span m='85060'>things.</span> <span
  m='85370'>You</span> <span m='85530'>write</span> <span m='85740'>a</span>
  <span m='85790'>recurrence</span> <span m='86860'>relating</span> <span
  m='87270'>the</span> <span m='87360'>solution</span> <span m='87810'>to</span>
  <span m='87990'>the</span> <span m='88100'>subproblem</span> <span
  m='88530'>you</span> <span m='88670'>want</span> <span m='88860'>to</span>
  <span m='88920'>solve,</span> <span m='89350'>in</span> <span
  m='89480'>terms</span> <span m='89790'>of</span> <span
  m='90280'>smaller</span> <span m='90820'>subproblem,</span> <span
  m='91470'>something</span> <span m='91950'>that</span> <span
  m='92040'>you</span> <span m='92130'>already</span> <span
  m='92510'>know</span> <span m='92710'>how</span> <span m='92840'>to</span>
  <span m='92920'>solve,</span> <span m='93860'>but</span> <span
  m='93960'>it's</span> <span m='94090'>got</span> <span m='94220'>to</span>
  <span m='94280'>be</span> <span m='94420'>within</span> <span
  m='94710'>this</span> <span m='94880'>list.</span> <span m='96350'>And</span>
  <span m='96590'>when</span> <span m='96710'>you</span> <span
  m='96860'>do</span> <span m='97010'>that,</span> <span m='97460'>you're</span>
  <span m='97540'>going</span> <span m='97680'>to</span> <span
  m='97730'>get</span> <span m='97890'>a</span> <span m='97910'>min</span> <span
  m='97930'>or</span> <span m='98230'>a</span> <span m='98405'>max</span> <span
  m='98580'>of</span> <span m='98630'>a</span> <span m='98700'>bunch</span>
  <span m='98970'>of</span> <span m='99060'>options,</span> <span
  m='99640'>those</span> <span m='99740'>correspond</span> <span
  m='100170'>to</span> <span m='100220'>your</span> <span
  m='100350'>guesses.</span> <span m='101310'>And</span> <span
  m='101690'>you</span> <span m='101800'>get</span> <span m='101990'>some</span>
  <span m='102190'>running</span> <span m='102440'>time,</span> <span
  m='102910'>in</span> <span m='103050'>order</span> <span m='103210'>to</span>
  <span m='103330'>compute</span> <span m='103700'>that</span> <span
  m='103880'>recurrence,</span> <span m='104700'>ignoring</span> <span
  m='105280'>the</span> <span m='105380'>recursion,</span> <span
  m='106570'>that's</span> <span m='106810'>time</span> <span
  m='107060'>for</span> <span m='107200'>subproblem.</span> <span
  m='108390'>Then,</span> <span m='109310'>to</span> <span
  m='109460'>make</span> <span m='109660'>a</span> <span
  m='109760'>dynamic</span> <span m='110090'>program,</span> <span
  m='110420'>you</span> <span m='110570'>either</span> <span
  m='111320'>just</span> <span m='111780'>make</span> <span
  m='112020'>that</span> <span m='112180'>a</span> <span
  m='112220'>recursive</span> <span m='112660'>algorithm</span> <span
  m='113150'>and</span> <span m='113260'>memoize</span> <span
  m='113730'>everything,</span> <span m='114930'>or</span> <span
  m='115350'>you</span> <span m='115520'>write</span> <span
  m='115720'>the</span> <span m='115810'>bottom</span> <span
  m='116150'>up</span> <span m='117420'>version</span> <span
  m='117710'>of</span> <span m='117810'>the</span> <span m='117890'>DP.</span>
  <span m='118155'>They</span> <span m='118420'>do</span> <span
  m='118630'>exactly</span> <span m='119100'>the</span> <span
  m='119170'>same</span> <span m='119380'>computations,</span> <span
  m='120660'>more</span> <span m='120850'>or</span> <span
  m='120870'>less,</span> <span m='122370'>and</span> <span
  m='123950'>you</span> <span m='124250'>need</span> <span m='124440'>to</span>
  <span m='124550'>check</span> <span m='124810'>that</span> <span
  m='125070'>this</span> <span m='125460'>recurrence</span> <span
  m='125830'>is</span> <span m='126200'>acyclic,</span> <span
  m='126900'>that</span> <span m='127010'>you</span> <span
  m='127130'>never</span> <span m='127690'>end</span> <span m='127910'>up</span>
  <span m='128030'>depending</span> <span m='128470'>on</span> <span
  m='128580'>yourself,</span> <span m='129070'>otherwise</span> <span
  m='129620'>these</span> <span m='129830'>will</span> <span
  m='129930'>be</span> <span m='130120'>infinite</span> <span
  m='130509'>algorithms</span> <span m='131020'>or</span> <span
  m='131250'>incorrect</span> <span m='131700'>algorithms.</span> <span
  m='132670'>Either</span> <span m='132880'>way</span> <span
  m='133020'>is</span> <span m='133130'>bad.</span> <span m='133990'>From</span>
  <span m='134130'>the</span> <span m='134230'>bottom</span> <span
  m='134560'>up,</span> <span m='134740'>you</span> <span
  m='134880'>really</span> <span m='135120'>like</span> <span
  m='135310'>to</span> <span m='135400'>explicitly</span> <span
  m='135960'>know</span> <span m='136150'>a</span> <span
  m='136210'>topological</span> <span m='136960'>order</span> <span
  m='137290'>on</span> <span m='137400'>the</span> <span
  m='137510'>subproblems,</span> <span m='138790'>and</span> <span
  m='138960'>that's</span> <span m='139550'>usually</span> <span
  m='139900'>pretty</span> <span m='140120'>easy,</span> <span
  m='140880'>but</span> <span m='141050'>you've</span> <span
  m='141160'>got</span> <span m='141590'>make</span> <span
  m='141860'>sure</span> <span m='142040'>that</span> <span
  m='142170'>it's</span> <span m='142300'>acyclic.</span> <span
  m='144410'>And</span> <span m='144780'>then,</span> <span m='145150'>to</span>
  <span m='145220'>compute</span> <span m='145490'>the</span> <span
  m='145580'>running</span> <span m='145820'>time</span> <span
  m='146020'>of</span> <span m='146060'>the</span> <span
  m='146110'>algorithm,</span> <span m='146620'>you</span> <span
  m='146730'>just</span> <span m='146930'>take</span> <span
  m='147120'>the</span> <span m='147220'>number</span> <span
  m='147530'>of</span> <span m='147580'>subproblems</span> <span
  m='148210'>from</span> <span m='148340'>part</span> <span m='148600'>1</span>
  <span m='148990'>and</span> <span m='149270'>you</span> <span
  m='149400'>multiply</span> <span m='149900'>it</span> <span
  m='150000'>by</span> <span m='150120'>the</span> <span m='150240'>time</span>
  <span m='150620'>it</span> <span m='150720'>takes</span> <span
  m='150980'>per</span> <span m='151150'>subproblem,</span> <span
  m='151690'>ignoring</span> <span m='152160'>recursion,</span> <span
  m='153640'>in</span> <span m='153800'>part</span> <span m='154060'>3.</span>
  <span m='154690'>That</span> <span m='154910'>gives</span> <span
  m='155040'>you</span> <span m='155130'>your</span> <span
  m='155220'>running</span> <span m='155460'>time.</span> <span
  m='155730'>I've</span> <span m='156200'>written</span> <span
  m='156450'>this</span> <span m='156610'>formula</span> <span
  m='157040'>by</span> <span m='157230'>now</span> <span m='157480'>three</span>
  <span m='157720'>times</span> <span m='158310'>are</span> <span
  m='158400'>more,</span> <span m='159230'>remember</span> <span
  m='159710'>it.</span> <span m='159980'>We</span> <span m='160250'>use</span>
  <span m='160480'>it</span> <span m='160550'>all</span> <span
  m='160690'>the</span> <span m='160780'>time.</span> <span
  m='161380'>And</span> <span m='161580'>then</span> <span m='161790'>you</span>
  <span m='161870'>need</span> <span m='162030'>to</span> <span
  m='162120'>double</span> <span m='162400'>check</span> <span
  m='162680'>that</span> <span m='162800'>you</span> <span m='162910'>can</span>
  <span m='163030'>actually</span> <span m='163260'>solve</span> <span
  m='163560'>the</span> <span m='163660'>original</span> <span
  m='163990'>problem</span> <span m='164240'>you</span> <span
  m='164370'>cared</span> <span m='164620'>about,</span> <span
  m='165090'>either</span> <span m='165380'>it</span> <span
  m='165450'>was</span> <span m='165520'>one</span> <span m='165700'>of</span>
  <span m='165780'>your</span> <span m='165870'>subproblems</span> <span
  m='166480'>or</span> <span m='166560'>a</span> <span
  m='166640'>combination</span> <span m='167240'>of</span> <span
  m='167390'>them.</span> <span m='168510'>So</span> <span
  m='168770'>that's</span> <span m='169000'>what</span> <span
  m='169055'>we're</span> <span m='169110'>going</span> <span
  m='169220'>to</span> <span m='169320'>do</span> <span m='169910'>three</span>
  <span m='170140'>times</span> <span m='170510'>today.</span> </p><p><span
  m='172560'>One</span> <span m='172860'>of</span> <span m='173000'>the</span>
  <span m='173140'>hardest</span> <span m='173570'>parts</span> <span
  m='173840'>in</span> <span m='173940'>dynamic</span> <span
  m='174340'>programming</span> <span m='174880'>is</span> <span
  m='175060'>step</span> <span m='175390'>1,</span> <span
  m='176130'>defining</span> <span m='176530'>your</span> <span
  m='176670'>subproblems.</span> <span m='177270'>Usually</span> <span
  m='177820'>if</span> <span m='177930'>you</span> <span m='178040'>do</span>
  <span m='178180'>that</span> <span m='178430'>right,</span> <span
  m='179330'>it</span> <span m='179520'>becomes--</span> <span
  m='180540'>with</span> <span m='180700'>some</span> <span
  m='180870'>practice,</span> <span m='181330'>step</span> <span
  m='181570'>2</span> <span m='181730'>is</span> <span m='181840'>pretty</span>
  <span m='182220'>easy.</span> <span m='183442'>Step</span> <span
  m='183910'>1</span> <span m='184260'>is</span> <span m='184490'>really</span>
  <span m='184780'>where</span> <span m='185120'>most</span> <span
  m='185480'>of</span> <span m='185640'>the</span> <span
  m='185855'>insight</span> <span m='186070'>comes</span> <span
  m='186340'>in,</span> <span m='186500'>and</span> <span m='186665'>step</span>
  <span m='186830'>3</span> <span m='187070'>is</span> <span
  m='187170'>usually</span> <span m='187500'>trivial,</span> <span
  m='187970'>once</span> <span m='188190'>you</span> <span
  m='188400'>know</span> <span m='188780'>1</span> <span m='188880'>and</span>
  <span m='188980'>2.</span> <span m='189330'>Once</span> <span
  m='189490'>you</span> <span m='189570'>realize</span> <span
  m='189870'>1</span> <span m='190040'>and</span> <span m='190330'>2</span>
  <span m='190365'>will</span> <span m='190400'>work,</span> <span
  m='190730'>the</span> <span m='191200'>recurrence</span> <span
  m='191500'>is</span> <span m='191800'>clear.</span> <span m='193420'>So</span>
  <span m='193590'>I</span> <span m='193630'>want</span> <span
  m='193830'>to</span> <span m='193880'>give</span> <span m='194050'>you</span>
  <span m='194140'>some</span> <span m='194810'>general</span> <span
  m='195270'>tips</span> <span m='195740'>for</span> <span
  m='197740'>step</span> <span m='198090'>1,</span> <span m='199430'>how</span>
  <span m='199590'>to</span> <span m='199680'>choose</span> <span
  m='199910'>subproblems,</span> <span m='201640'>and</span> <span
  m='210660'>we're</span> <span m='210780'>going</span> <span
  m='210890'>to</span> <span m='210950'>start</span> <span
  m='211310'>with</span> <span m='212180'>problems</span> <span
  m='212630'>that</span> <span m='212740'>involve</span> <span
  m='213100'>strings</span> <span m='214110'>or</span> <span
  m='214230'>sequences</span> <span m='217320'>as</span> <span
  m='217600'>input,</span> <span m='218220'>where</span> <span
  m='218340'>the</span> <span m='218450'>problem,</span> <span
  m='218980'>the</span> <span m='219110'>input</span> <span m='219410'>to</span>
  <span m='219480'>the</span> <span m='219590'>problem</span> <span
  m='219980'>is</span> <span m='220070'>string</span> <span m='220480'>or</span>
  <span m='220590'>sequence.</span> <span m='221020'>Last</span> <span
  m='221510'>class</span> <span m='222450'>we</span> <span m='222620'>saw</span>
  <span m='223450'>text</span> <span m='223780'>justification,</span> <span
  m='224500'>where</span> <span m='224600'>the</span> <span
  m='224740'>input</span> <span m='225050'>was</span> <span m='225430'>a</span>
  <span m='225670'>sequence</span> <span m='226070'>of</span> <span
  m='226180'>words,</span> <span m='227350'>and</span> <span
  m='227690'>we</span> <span m='227800'>saw</span> <span
  m='228070'>Blackjack,</span> <span m='228770'>where</span> <span
  m='228900'>the</span> <span m='229030'>input</span> <span
  m='229290'>was</span> <span m='229470'>a</span> <span
  m='229520'>sequence</span> <span m='229890'>of</span> <span
  m='230000'>cards.</span> <span m='231010'>Both</span> <span
  m='231250'>of</span> <span m='231330'>these</span> <span m='231580'>are</span>
  <span m='231650'>examples,</span> <span m='232510'>and</span> <span
  m='233020'>if</span> <span m='233260'>you</span> <span m='233420'>look</span>
  <span m='233630'>at</span> <span m='233810'>them,</span> <span
  m='234060'>in</span> <span m='234220'>both</span> <span
  m='234480'>cases</span> <span m='235350'>we</span> <span
  m='235500'>used</span> <span m='236240'>suffixes,</span> <span
  m='240698'>what</span> <span m='240788'>do</span> <span m='240878'>I</span>
  <span m='240969'>call</span> <span m='241059'>it,</span> <span
  m='241150'>x,</span> <span m='244320'>as</span> <span m='244520'>our</span>
  <span m='244600'>subproblems.</span> <span m='245750'>If</span> <span
  m='245920'>x</span> <span m='246200'>was</span> <span m='246350'>our</span>
  <span m='246450'>sequence,</span> <span m='247430'>we</span> <span
  m='247570'>did</span> <span m='247750'>all</span> <span m='248680'>the</span>
  <span m='248760'>suffixes,</span> <span m='250020'>I</span> <span
  m='250220'>equals</span> <span m='250430'>zero</span> <span
  m='250670'>up</span> <span m='250910'>to</span> <span m='251130'>the</span>
  <span m='251270'>length</span> <span m='251530'>of</span> <span
  m='251630'>the</span> <span m='252350'>thing.</span> <span
  m='255150'>So</span> <span m='255320'>they're</span> <span
  m='255450'>about</span> <span m='255770'>n,</span> <span m='256110'>n</span>
  <span m='256260'>plus</span> <span m='256500'>1,</span> <span
  m='256880'>such</span> <span m='257149'>subproblems.</span> <span
  m='258060'>This</span> <span m='258250'>is</span> <span
  m='258380'>good.</span> <span m='258970'>Not</span> <span
  m='259050'>very</span> <span m='259190'>many</span> <span m='259459'>of</span>
  <span m='259550'>them,</span> <span m='260170'>and</span> <span
  m='260320'>usually</span> <span m='260769'>if</span> <span
  m='260890'>you're</span> <span m='261300'>plucking</span> <span
  m='261730'>things</span> <span m='261970'>off</span> <span
  m='262240'>the</span> <span m='262340'>beginning</span> <span
  m='262800'>of</span> <span m='263020'>the</span> <span
  m='263120'>string</span> <span m='263920'>or</span> <span m='264090'>of</span>
  <span m='264140'>the</span> <span m='264220'>sequence,</span> <span
  m='265200'>then</span> <span m='265360'>you'll</span> <span
  m='265470'>be</span> <span m='265600'>left</span> <span m='265820'>with</span>
  <span m='265940'>the</span> <span m='265990'>suffix.</span> <span
  m='266560'>If</span> <span m='266620'>you</span> <span
  m='266680'>always</span> <span m='266970'>are</span> <span
  m='267050'>plucking</span> <span m='267390'>from</span> <span
  m='267520'>the</span> <span m='267610'>beginning,</span> <span
  m='268340'>you</span> <span m='268430'>always</span> <span
  m='268610'>have</span> <span m='269100'>suffixes,</span> <span
  m='269630'>you'll</span> <span m='269760'>stay</span> <span
  m='269980'>in</span> <span m='270070'>this</span> <span
  m='270230'>class,</span> <span m='270740'>and</span> <span
  m='270840'>that's</span> <span m='270940'>good,</span> <span
  m='271150'>because</span> <span m='271320'>you</span> <span
  m='271470'>always</span> <span m='271660'>want</span> <span
  m='271940'>a</span> <span m='272030'>recurrence</span> <span
  m='273070'>that</span> <span m='273170'>relates,</span> <span
  m='273510'>in</span> <span m='273580'>terms</span> <span m='273810'>of</span>
  <span m='273900'>the</span> <span m='273980'>same</span> <span
  m='274370'>subproblems</span> <span m='275030'>that</span> <span
  m='275180'>you</span> <span m='275425'>know.</span> <span
  m='277630'>Sometimes</span> <span m='277875'>it</span> <span
  m='278120'>doesn't</span> <span m='278340'>work.</span> <span
  m='278840'>Sometimes</span> <span m='279330'>prefixes</span> <span
  m='279840'>are</span> <span m='280190'>more</span> <span
  m='280370'>convenient.</span> <span m='281220'>These</span> <span
  m='281570'>are</span> <span m='281650'>usually</span> <span
  m='282220'>pretty</span> <span m='282460'>much</span> <span
  m='282720'>identical,</span> <span m='283410'>but</span> <span
  m='283470'>if</span> <span m='283580'>you're</span> <span
  m='283720'>plucking</span> <span m='284180'>off</span> <span
  m='284580'>from</span> <span m='284760'>the</span> <span m='284900'>end</span>
  <span m='285240'>instead</span> <span m='285620'>of</span> <span
  m='286550'>the</span> <span m='286640'>beginning,</span> <span
  m='287600'>you'll</span> <span m='287770'>end</span> <span
  m='287880'>up</span> <span m='287980'>with</span> <span
  m='288110'>prefixes,</span> <span m='288720'>not</span> <span
  m='289110'>suffixes.</span> <span m='290480'>Both</span> <span
  m='290710'>of</span> <span m='290800'>these</span> <span
  m='291010'>have</span> <span m='291180'>linear</span> <span
  m='291500'>size,</span> <span m='292380'>so</span> <span
  m='292540'>they're</span> <span m='292720'>good</span> <span
  m='292880'>news,</span> <span m='294700'>quite</span> <span
  m='294890'>efficient.</span> <span m='296100'>Another</span> <span
  m='296380'>possibility</span> <span m='296970'>when</span> <span
  m='297130'>that</span> <span m='297590'>doesn't</span> <span
  m='297890'>work,</span> <span m='299430'>we're</span> <span
  m='299610'>going</span> <span m='299710'>to</span> <span m='299750'>see</span>
  <span m='300000'>an</span> <span m='300540'>example</span> <span
  m='300890'>of</span> <span m='300930'>that</span> <span
  m='301150'>today,</span> <span m='302410'>is</span> <span
  m='302570'>you</span> <span m='302680'>do</span> <span m='302890'>all</span>
  <span m='303200'>substrings.</span> <span m='306170'>So</span> <span
  m='306370'>I</span> <span m='306930'>don't</span> <span m='307080'>mean</span>
  <span m='307220'>subsequences,</span> <span m='308430'>they</span> <span
  m='308520'>have</span> <span m='308700'>to</span> <span m='308830'>be</span>
  <span m='309020'>consecutive</span> <span m='310170'>substrains,</span> <span
  m='310670'>i</span> <span m='310880'>through</span> <span m='311010'>j.</span>
  <span m='312130'>And</span> <span m='312230'>now</span> <span
  m='312410'>for</span> <span m='312610'>all</span> <span m='312840'>i</span>
  <span m='313030'>and</span> <span m='313330'>j.</span> <span
  m='319320'>How</span> <span m='319450'>many</span> <span m='319680'>of</span>
  <span m='319730'>these</span> <span m='319950'>are</span> <span
  m='320080'>there?</span> <span m='324010'>For</span> <span m='324150'>a</span>
  <span m='324210'>string</span> <span m='324520'>of</span> <span
  m='324600'>length</span> <span m='324820'>n?</span> <span m='327130'>N</span>
  <span m='327340'>squared.</span> <span m='328890'>So</span> <span
  m='329030'>this</span> <span m='329250'>one</span> <span m='329355'>is</span>
  <span m='329460'>n</span> <span m='329600'>squared,</span> <span
  m='330880'>the</span> <span m='331000'>others</span> <span
  m='331460'>are</span> <span m='331690'>linear.</span> <span
  m='334270'>Out</span> <span m='334900'>of</span> <span m='335020'>room</span>
  <span m='335250'>here.</span> <span m='336140'>Theta</span> <span
  m='337750'>n.</span> <span m='340840'>So</span> <span m='340980'>you</span>
  <span m='341130'>obviously</span> <span m='341460'>you</span> <span
  m='341550'>prefer</span> <span m='342010'>to</span> <span
  m='342060'>use</span> <span m='342290'>these</span> <span
  m='342550'>subproblems</span> <span m='342970'>because</span> <span
  m='343140'>there's</span> <span m='343300'>fewer</span> <span
  m='343740'>of</span> <span m='343850'>them,</span> <span m='344570'>but</span>
  <span m='344715'>if</span> <span m='344860'>sometimes</span> <span
  m='345290'>they</span> <span m='345360'>don't</span> <span
  m='345510'>work,</span> <span m='345930'>then</span> <span
  m='346070'>use</span> <span m='346310'>this</span> <span
  m='346480'>one,</span> <span m='346660'>still</span> <span
  m='346890'>polynomial,</span> <span m='347500'>still</span> <span
  m='347730'>pretty</span> <span m='347940'>good.</span> <span
  m='349570'>This</span> <span m='351330'>will</span> <span
  m='351420'>get</span> <span m='351690'>you</span> <span
  m='351750'>through</span> <span m='351810'>most</span> <span
  m='352170'>DP's.</span> <span m='353340'>It's</span> <span
  m='353540'>pretty</span> <span m='353740'>simple,</span> <span
  m='354640'>but</span> <span m='354990'>very</span> <span
  m='355190'>useful.</span> </p><p><span m='357150'>Let</span> <span
  m='357210'>me</span> <span m='357330'>define</span> <span
  m='357830'>the</span> <span m='357990'>next</span> <span
  m='358250'>problem</span> <span m='358790'>we</span> <span
  m='359120'>consider.</span> <span m='365240'>For</span> <span
  m='365350'>each</span> <span m='365490'>of</span> <span m='365550'>them</span>
  <span m='365800'>we're</span> <span m='365820'>going</span> <span
  m='365930'>to</span> <span m='365980'>go</span> <span
  m='366140'>through</span> <span m='366400'>the</span> <span
  m='366520'>five</span> <span m='366740'>steps.</span> <span
  m='369700'>So</span> <span m='369790'>the</span> <span m='369850'>first</span>
  <span m='370100'>problem</span> <span m='370340'>for</span> <span
  m='370490'>today</span> <span m='370675'>is</span> <span
  m='370860'>parenthesization.</span> <span m='373120'>You're</span> <span
  m='373320'>given</span> <span m='375450'>an</span> <span
  m='375610'>associative</span> <span m='376390'>expression,</span> <span
  m='378540'>and</span> <span m='378680'>you</span> <span m='378800'>want</span>
  <span m='378960'>to</span> <span m='379040'>evaluate</span> <span
  m='379660'>it</span> <span m='380400'>in</span> <span m='380660'>some</span>
  <span m='381190'>order.</span> <span m='393070'>So</span> <span
  m='393530'>I'm</span> <span m='393730'>going</span> <span
  m='393830'>to--</span> <span m='394320'>for</span> <span
  m='394630'>associative</span> <span m='394990'>expression,</span> <span
  m='395490'>I'm</span> <span m='395560'>going</span> <span m='395730'>to</span>
  <span m='395800'>think</span> <span m='396290'>of</span> <span
  m='396630'>matrix</span> <span m='397100'>multiplication,</span> <span
  m='399170'>and</span> <span m='399465'>I</span> <span
  m='399760'>probably</span> <span m='400030'>want</span> <span
  m='400210'>to</span> <span m='400270'>start</span> <span m='400560'>at</span>
  <span m='401440'>zero.</span> <span m='408060'>So</span> <span
  m='408250'>let's</span> <span m='408440'>say</span> <span
  m='408540'>you</span> <span m='408630'>have</span> <span m='408880'>n</span>
  <span m='409100'>matrices,</span> <span m='409610'>you</span> <span
  m='409720'>want</span> <span m='409860'>to</span> <span
  m='409930'>compute</span> <span m='410290'>their</span> <span
  m='410420'>product.</span> <span m='411630'>So</span> <span
  m='411810'>you</span> <span m='412080'>remember</span> <span
  m='412360'>matrix</span> <span m='412720'>multiplication</span> <span
  m='413210'>is</span> <span m='413270'>not</span> <span
  m='413480'>commutative,</span> <span m='413940'>I</span> <span
  m='414010'>can't</span> <span m='414270'>reorder</span> <span
  m='414660'>these</span> <span m='414880'>things.</span> <span
  m='415480'>All</span> <span m='415710'>I</span> <span m='415770'>can</span>
  <span m='415960'>do</span> <span m='416810'>is,</span> <span
  m='417300'>if</span> <span m='417460'>I</span> <span m='417500'>want</span>
  <span m='417710'>to</span> <span m='417800'>do</span> <span
  m='417990'>it</span> <span m='418380'>by</span> <span
  m='418560'>sequence</span> <span m='418990'>of</span> <span
  m='419240'>pairwise</span> <span m='419900'>multiplications,</span> <span
  m='420840'>is</span> <span m='421220'>I</span> <span m='421370'>get</span>
  <span m='421540'>to</span> <span m='421650'>choose</span> <span
  m='422080'>where</span> <span m='422260'>the</span> <span
  m='422380'>parentheses</span> <span m='423030'>are,</span> <span
  m='423930'>and</span> <span m='424050'>do</span> <span
  m='424150'>whatever</span> <span m='424490'>I</span> <span
  m='424540'>want</span> <span m='424880'>for</span> <span m='424970'>the</span>
  <span m='425070'>parentheses,</span> <span m='426800'>because</span> <span
  m='426990'>it's</span> <span m='427140'>associative.</span> <span
  m='428300'>It</span> <span m='428700'>doesn't</span> <span
  m='428900'>matter</span> <span m='429130'>where</span> <span
  m='429240'>they</span> <span m='429370'>go.</span> <span m='429960'>Now</span>
  <span m='430030'>it</span> <span m='430100'>turns</span> <span
  m='430430'>out</span> <span m='431020'>if</span> <span m='431180'>you</span>
  <span m='431260'>use</span> <span m='431610'>straightforward</span> <span
  m='432420'>matrix</span> <span m='432780'>multiplication,</span> <span
  m='433840'>really</span> <span m='434110'>any</span> <span
  m='434340'>algorithm</span> <span m='435100'>for</span> <span
  m='435190'>matrix</span> <span m='435530'>multiplication,</span> <span
  m='438120'>it</span> <span m='438260'>matters</span> <span
  m='438790'>how</span> <span m='438920'>you</span> <span
  m='439040'>parenthesize.</span> <span m='439680'>Some</span> <span
  m='439890'>will</span> <span m='440000'>be</span> <span
  m='440140'>cheaper</span> <span m='440510'>than</span> <span
  m='440670'>others,</span> <span m='441160'>and</span> <span
  m='441330'>we</span> <span m='441450'>can</span> <span m='441580'>use</span>
  <span m='441760'>dynamic</span> <span m='442140'>programming</span> <span
  m='442580'>to</span> <span m='442640'>find</span> <span m='442930'>out</span>
  <span m='443400'>which</span> <span m='443660'>is</span> <span
  m='443810'>best.</span> <span m='444930'>So</span> <span m='445030'>let</span>
  <span m='445270'>me</span> <span m='445700'>draw</span> <span
  m='446070'>a</span> <span m='446210'>simple</span> <span
  m='446570'>example.</span> </p><p><span m='448780'>Suppose</span> <span
  m='449040'>I</span> <span m='449130'>have</span> <span m='450760'>a</span>
  <span m='450870'>column</span> <span m='451340'>vector</span> <span
  m='452520'>times</span> <span m='453140'>a</span> <span m='453260'>row</span>
  <span m='453470'>vector</span> <span m='454550'>times</span> <span
  m='455450'>a</span> <span m='455540'>column</span> <span
  m='455870'>vector.</span> <span m='457450'>And</span> <span
  m='457630'>there</span> <span m='457770'>are</span> <span
  m='457840'>two</span> <span m='458080'>ways</span> <span m='459550'>to</span>
  <span m='459700'>compute</span> <span m='460020'>this</span> <span
  m='460190'>product.</span> <span m='460630'>One</span> <span
  m='461040'>is</span> <span m='461430'>like</span> <span
  m='461690'>this,</span> <span m='463490'>and</span> <span
  m='463640'>the</span> <span m='463790'>other</span> <span m='469920'>is</span>
  <span m='470280'>like</span> <span m='470560'>this.</span> <span
  m='473630'>If</span> <span m='473730'>I</span> <span m='473770'>compute</span>
  <span m='474090'>the</span> <span m='474170'>product</span> <span
  m='474480'>this</span> <span m='474690'>way,</span> <span
  m='475020'>it's</span> <span m='475165'>every</span> <span
  m='475310'>row</span> <span m='475900'>times</span> <span
  m='476160'>every</span> <span m='476400'>column,</span> <span
  m='477030'>and</span> <span m='477130'>then</span> <span
  m='477270'>every</span> <span m='477490'>row</span> <span
  m='477690'>times</span> <span m='477980'>every</span> <span
  m='478190'>column,</span> <span m='478690'>and</span> <span
  m='478770'>every</span> <span m='478990'>row</span> <span
  m='479210'>times</span> <span m='479400'>every</span> <span
  m='479580'>column.</span> <span m='480250'>This</span> <span
  m='481970'>subresult</span> <span m='483830'>is</span> <span
  m='484030'>a</span> <span m='484080'>square</span> <span
  m='484390'>matrix,</span> <span m='485380'>so</span> <span
  m='485530'>if</span> <span m='485610'>these</span> <span
  m='485810'>are--</span> <span m='486160'>say</span> <span
  m='486320'>everything</span> <span m='486680'>here</span> <span
  m='486830'>is</span> <span m='486950'>n,</span> <span m='488090'>and</span>
  <span m='488260'>this</span> <span m='488410'>will</span> <span
  m='488490'>be</span> <span m='488600'>an</span> <span m='488650'>n</span>
  <span m='488700'>by</span> <span m='489030'>n</span> <span
  m='489160'>matrix.</span> </p><p><span m='490050'>Then</span> <span
  m='490260'>we</span> <span m='490370'>multiply</span> <span
  m='490890'>it</span> <span m='491000'>by</span> <span m='491105'>a</span>
  <span m='491210'>vector</span> <span m='493400'>and</span> <span
  m='494140'>this</span> <span m='494880'>computation</span> <span
  m='495600'>has</span> <span m='495910'>to</span> <span m='496010'>take,</span>
  <span m='498890'>if</span> <span m='499020'>you</span> <span
  m='499080'>do</span> <span m='499220'>it</span> <span m='499700'>well,</span>
  <span m='500290'>it</span> <span m='500360'>will</span> <span
  m='500500'>take</span> <span m='500690'>theta</span> <span m='500890'>n</span>
  <span m='501090'>squared</span> <span m='501390'>time,</span> <span
  m='501590'>because</span> <span m='501810'>I</span> <span
  m='501860'>need</span> <span m='502030'>to</span> <span
  m='502100'>compute</span> <span m='502450'>n</span> <span
  m='502600'>squared</span> <span m='502840'>values</span> <span
  m='503220'>here,</span> <span m='504110'>and</span> <span
  m='504310'>then</span> <span m='504570'>it's</span> <span m='505310'>n</span>
  <span m='506370'>squared</span> <span m='506890'>to</span> <span
  m='507010'>do</span> <span m='507140'>this</span> <span
  m='507310'>final</span> <span m='507550'>multiplication.</span> <span
  m='510620'>Versus</span> <span m='512850'>if</span> <span m='512990'>I</span>
  <span m='513059'>do</span> <span m='513200'>it</span> <span
  m='513299'>this</span> <span m='513510'>way,</span> <span m='513909'>I</span>
  <span m='514010'>take</span> <span m='514320'>all</span> <span
  m='514500'>the</span> <span m='514600'>rows</span> <span
  m='514940'>here,</span> <span m='515140'>multiply</span> <span
  m='515520'>them</span> <span m='515613'>on</span> <span m='515706'>all</span>
  <span m='515799'>the</span> <span m='515880'>columns</span> <span
  m='516230'>here,</span> <span m='516380'>it's</span> <span m='516500'>a</span>
  <span m='516570'>single</span> <span m='516960'>number,</span> <span
  m='518460'>and</span> <span m='518650'>then</span> <span m='518780'>I</span>
  <span m='518820'>multiply</span> <span m='519929'>by</span> <span
  m='520080'>this</span> <span m='520270'>column.</span> <span
  m='521480'>This</span> <span m='521559'>will</span> <span
  m='521679'>take</span> <span m='522929'>linear</span> <span
  m='523240'>time.</span> <span m='525520'>So</span> <span
  m='525720'>this</span> <span m='525930'>is</span> <span
  m='526050'>better</span> <span m='526430'>parenthesization</span> <span
  m='526780'>than</span> <span m='527430'>this</span> <span
  m='527600'>one.</span> <span m='529220'>Now,</span> <span m='530020'>I</span>
  <span m='530140'>don't</span> <span m='530300'>even</span> <span
  m='530570'>need</span> <span m='530810'>to</span> <span
  m='530930'>define</span> <span m='533140'>in</span> <span
  m='533300'>general</span> <span m='533790'>for</span> <span
  m='534480'>an</span> <span m='534710'>x</span> <span m='534960'>by</span>
  <span m='535150'>y</span> <span m='536030'>matrix,</span> <span
  m='536970'>times</span> <span m='537490'>a</span> <span m='537610'>y</span>
  <span m='537820'>by</span> <span m='538000'>z</span> <span
  m='538230'>matrix,</span> <span m='539340'>you</span> <span
  m='539780'>can</span> <span m='539960'>think</span> <span
  m='540160'>about</span> <span m='540400'>the</span> <span
  m='540490'>running</span> <span m='540720'>time</span> <span
  m='540970'>of</span> <span m='541080'>that</span> <span
  m='541810'>multiplication.</span> <span m='543000'>Whatever</span> <span
  m='543430'>the</span> <span m='543550'>running</span> <span
  m='543780'>time</span> <span m='544030'>is,</span> <span
  m='544870'>dynamic</span> <span m='545420'>programming</span> <span
  m='545670'>can</span> <span m='545830'>solve</span> <span
  m='546250'>this</span> <span m='546410'>problem,</span> <span
  m='547690'>as</span> <span m='547870'>long</span> <span m='548040'>as</span>
  <span m='548150'>it</span> <span m='548220'>only</span> <span
  m='548440'>depends</span> <span m='548820'>on</span> <span
  m='548920'>the</span> <span m='549010'>dimensions</span> <span
  m='549550'>of</span> <span m='549620'>the</span> <span
  m='549710'>matrices</span> <span m='550080'>that</span> <span
  m='550450'>you're</span> <span m='551170'>multiplying.</span> </p><p><span
  m='552920'>So</span> <span m='555360'>for</span> <span m='555480'>this</span>
  <span m='555720'>problem,</span> <span m='556750'>there's</span> <span
  m='557210'>going</span> <span m='557340'>to</span> <span m='557390'>be</span>
  <span m='557490'>the</span> <span m='557600'>issue</span> <span
  m='557720'>of</span> <span m='557840'>which</span> <span
  m='558030'>subproblems</span> <span m='558540'>we</span> <span
  m='558690'>use.</span> <span m='559070'>Now</span> <span m='559260'>we</span>
  <span m='559370'>have</span> <span m='560060'>a</span> <span
  m='560150'>sequence</span> <span m='561650'>of</span> <span
  m='561800'>matrices</span> <span m='562380'>here,</span> <span
  m='563040'>so</span> <span m='563330'>we</span> <span
  m='563460'>naturally</span> <span m='563920'>think</span> <span
  m='564150'>of</span> <span m='564330'>these</span> <span m='565070'>as</span>
  <span m='565110'>subproblems,</span> <span m='565530'>but</span> <span
  m='565680'>before</span> <span m='565940'>we</span> <span
  m='566050'>get</span> <span m='566190'>to</span> <span m='566270'>the</span>
  <span m='566340'>subproblems,</span> <span m='567460'>let</span> <span
  m='567680'>me</span> <span m='567800'>ask</span> <span m='568130'>you,</span>
  <span m='568270'>what</span> <span m='568580'>you</span> <span
  m='568770'>think</span> <span m='569060'>you</span> <span
  m='569170'>should</span> <span m='569490'>guess?</span> <span
  m='572310'>Let's</span> <span m='572500'>just</span> <span
  m='572630'>say</span> <span m='572810'>from</span> <span m='573110'>the</span>
  <span m='573280'>outset,</span> <span m='574380'>if</span> <span
  m='574490'>I</span> <span m='574550'>give</span> <span m='574760'>you</span>
  <span m='574860'>this</span> <span m='575100'>entire</span> <span
  m='575550'>sequence,</span> <span m='577290'>what</span> <span
  m='577660'>feature</span> <span m='578110'>of</span> <span
  m='578220'>the</span> <span m='578310'>solution</span> <span
  m='578850'>of</span> <span m='579000'>the</span> <span
  m='579100'>optimal</span> <span m='579410'>solution</span> <span
  m='579740'>would</span> <span m='579880'>you</span> <span
  m='579990'>like</span> <span m='580170'>to</span> <span
  m='580270'>guess?</span> <span m='580900'>Can't</span> <span
  m='581150'>know</span> <span m='581270'>the</span> <span
  m='581350'>whole</span> <span m='581540'>solution,</span> <span
  m='581980'>because</span> <span m='582180'>there's</span> <span
  m='582410'>exponentially</span> <span m='583000'>many</span> <span
  m='583210'>ways</span> <span m='583480'>to</span> <span
  m='583570'>parenthesize.</span> <span m='585350'>What's</span> <span
  m='585570'>one</span> <span m='585790'>piece</span> <span m='586080'>of</span>
  <span m='586200'>it</span> <span m='586350'>that</span> <span
  m='586460'>you'd</span> <span m='586610'>like</span> <span
  m='586800'>to</span> <span m='586880'>guess</span> <span
  m='587350'>that</span> <span m='587805'>will</span> <span
  m='588260'>make</span> <span m='588440'>progress?</span> <span
  m='590590'>Any</span> <span m='590810'>idea?</span> <span
  m='594280'>It's</span> <span m='594420'>not</span> <span m='594610'>so</span>
  <span m='594800'>easy.</span> </p><p><span m='602140'>AUDIENCE:</span> <span
  m='602630'>Well, wouldn't you need the last operation?</span> </p><p><span
  m='604100'>PROFESSOR: What's</span> <span m='604490'>the</span> <span
  m='604600'>last</span> <span m='605120'>operation</span> <span
  m='605720'>we're</span> <span m='605830'>going</span> <span
  m='605950'>to</span> <span m='606040'>do,</span> <span
  m='606250'>exactly.</span> <span m='610420'>You</span> <span
  m='610550'>might</span> <span m='610760'>call</span> <span
  m='611010'>it</span> <span m='611150'>the</span> <span
  m='611340'>outermost</span> <span m='611970'>multiplication</span> <span
  m='612385'>or</span> <span m='613120'>the</span> <span m='613270'>last</span>
  <span m='614670'>multiplication.</span> <span m='622610'>So</span> <span
  m='623120'>that's</span> <span m='623400'>going</span> <span
  m='623520'>to</span> <span m='623600'>look</span> <span m='623830'>like</span>
  <span m='624850'>we</span> <span m='625200'>somehow</span> <span
  m='625640'>multiply</span> <span m='626350'>a</span> <span m='626650'>0</span>
  <span m='627070'>through</span> <span m='627490'>ak</span> <span
  m='627960'>minus</span> <span m='628320'>1,</span> <span m='629520'>and</span>
  <span m='630120'>then</span> <span m='630460'>we</span> <span
  m='632300'>somehow</span> <span m='632610'>multiply</span> <span
  m='633110'>aK</span> <span m='633760'>through</span> <span
  m='634750'>an</span> <span m='635160'>minus</span> <span m='635480'>1,</span>
  <span m='636190'>and</span> <span m='636490'>this</span> <span
  m='636650'>is</span> <span m='636780'>the</span> <span m='636870'>last</span>
  <span m='637210'>one.</span> <span m='639890'>So</span> <span
  m='639990'>now</span> <span m='640240'>we</span> <span m='640350'>have</span>
  <span m='640570'>two</span> <span m='640740'>subproblems.</span> <span
  m='641320'>Somehow</span> <span m='641700'>we</span> <span
  m='641790'>want</span> <span m='641970'>to</span> <span
  m='642010'>multiply</span> <span m='642390'>this,</span> <span
  m='642640'>somehow--</span> <span m='643040'>I</span> <span
  m='643090'>mean,</span> <span m='643230'>there's</span> <span
  m='643370'>got</span> <span m='643570'>to</span> <span m='643620'>be</span>
  <span m='643750'>some</span> <span m='644000'>last</span> <span
  m='644360'>thing</span> <span m='644500'>you</span> <span
  m='644620'>do.</span> <span m='645670'>I</span> <span m='645810'>don't</span>
  <span m='645960'>know</span> <span m='646090'>what</span> <span
  m='646220'>it</span> <span m='646320'>is,</span> <span m='646660'>so</span>
  <span m='647010'>just</span> <span m='647310'>guess</span> <span
  m='647570'>it.</span> <span m='647900'>Try</span> <span m='648180'>all</span>
  <span m='648460'>possibilities</span> <span m='649130'>for</span> <span
  m='649250'>k,</span> <span m='650210'>it's</span> <span m='650330'>got</span>
  <span m='650480'>to</span> <span m='650530'>be</span> <span
  m='650640'>one</span> <span m='650840'>of</span> <span m='650920'>them,</span>
  <span m='651310'>take</span> <span m='651640'>the</span> <span
  m='651710'>best.</span> <span m='652890'>If</span> <span
  m='653090'>somehow</span> <span m='653480'>we</span> <span
  m='653590'>know</span> <span m='653700'>the</span> <span
  m='653830'>optimal</span> <span m='654230'>way</span> <span
  m='654370'>to</span> <span m='654470'>do</span> <span m='655080'>a0</span>
  <span m='655410'>to</span> <span m='655490'>k</span> <span
  m='655630'>minus</span> <span m='655930'>1</span> <span m='656190'>and</span>
  <span m='656460'>the</span> <span m='656530'>optimal</span> <span
  m='656910'>way</span> <span m='657450'>to</span> <span m='657640'>ak</span>
  <span m='657770'>to</span> <span m='657920'>an</span> <span
  m='658470'>minus</span> <span m='658780'>1,</span> <span
  m='659630'>then</span> <span m='659790'>we're</span> <span
  m='659900'>golden.</span> <span m='660530'>Now,</span> <span
  m='661090'>this</span> <span m='661300'>looks</span> <span
  m='661490'>like</span> <span m='661970'>a</span> <span
  m='662430'>prefix,</span> <span m='663810'>this</span> <span
  m='664080'>looks</span> <span m='664270'>like</span> <span m='664710'>a</span>
  <span m='664780'>suffix.</span> <span m='666290'>So</span> <span
  m='666560'>do</span> <span m='666645'>you</span> <span m='666730'>think</span>
  <span m='666920'>we</span> <span m='667040'>can</span> <span
  m='667190'>just</span> <span m='667940'>combine</span> <span
  m='668880'>subproblems,</span> <span m='669560'>suffixes</span> <span
  m='670120'>and</span> <span m='670210'>prefixes?</span> <span
  m='672970'>How</span> <span m='673030'>many</span> <span
  m='673160'>people</span> <span m='673410'>think</span> <span
  m='673570'>yes?</span> <span m='675120'>A</span> <span m='675265'>few?</span>
  <span m='675700'>How</span> <span m='675900'>many</span> <span
  m='676025'>people</span> <span m='676150'>think</span> <span
  m='676350'>no,</span> <span m='677530'>OK,</span> <span m='677690'>why?</span>
  </p><p><span m='680405'>AUDIENCE: So,</span> <span m='680650'>for</span> <span
  m='680896'>example</span> <span m='681387'>if</span> <span
  m='681632'>you</span> <span m='681878'>split,</span> <span
  m='682369'>if</span> <span m='682614'>you</span> <span m='682860'>were</span>
  <span m='683105'>to</span> <span m='683351'>split,</span> <span
  m='683596'>like</span> <span m='683842'>[INAUDIBLE]?</span> </p><p><span
  m='686800'>PROFESSOR: Yeah.</span> <span m='687930'>The</span> <span
  m='688020'>very</span> <span m='688290'>next</span> <span
  m='688560'>thing</span> <span m='688710'>we're</span> <span
  m='688830'>going</span> <span m='688950'>to</span> <span m='689040'>do</span>
  <span m='689380'>is</span> <span m='690260'>recurse</span> <span
  m='690660'>on</span> <span m='690770'>this</span> <span
  m='690880'>subproblem,</span> <span m='691420'>recurse</span> <span
  m='691770'>on</span> <span m='691840'>this</span> <span
  m='692120'>subproblem.</span> <span m='692480'>When</span> <span
  m='692530'>we</span> <span m='692580'>recurse</span> <span
  m='693130'>here,</span> <span m='693980'>we're</span> <span
  m='694130'>going</span> <span m='694240'>to</span> <span
  m='694310'>split</span> <span m='694610'>it</span> <span
  m='695160'>into</span> <span m='695520'>a0</span> <span m='696230'>to</span>
  <span m='696940'>ak</span> <span m='697580'>prime</span> <span
  m='698150'>minus</span> <span m='698450'>1,</span> <span m='699150'>and</span>
  <span m='699640'>ak</span> <span m='700310'>prime</span> <span
  m='700740'>minus</span> <span m='701080'>1,</span> <span m='702160'>or</span>
  <span m='702620'>ak</span> <span m='702830'>prime</span> <span
  m='704480'>to</span> <span m='705080'>ak</span> <span m='706370'>minus</span>
  <span m='706710'>1.</span> <span m='710530'>We're</span> <span
  m='710690'>going</span> <span m='710780'>to</span> <span
  m='710840'>consider</span> <span m='711240'>all</span> <span
  m='711410'>possible</span> <span m='711790'>partitions,</span> <span
  m='712580'>and</span> <span m='712940'>this</span> <span
  m='713190'>thing,</span> <span m='713995'>from</span> <span
  m='714400'>ak</span> <span m='714750'>prime</span> <span m='715310'>to</span>
  <span m='715450'>ak</span> <span m='715750'>minus</span> <span
  m='716080'>1,</span> <span m='717320'>is</span> <span m='717570'>not</span>
  <span m='718020'>a</span> <span m='718100'>prefix</span> <span
  m='718510'>or</span> <span m='718575'>a</span> <span m='718640'>suffix.</span>
  <span m='719320'>What</span> <span m='719480'>is</span> <span
  m='719610'>it?</span> <span m='721610'>A</span> <span
  m='721762'>substring.</span> <span m='722220'>There's</span> <span
  m='722440'>only</span> <span m='722660'>one</span> <span
  m='722890'>thing</span> <span m='723070'>left.</span> <span
  m='723830'>I</span> <span m='723910'>claim</span> <span
  m='724180'>these</span> <span m='724390'>are</span> <span
  m='724960'>usually</span> <span m='725440'>enough,</span> <span
  m='726060'>and</span> <span m='726280'>in</span> <span m='726350'>this</span>
  <span m='726510'>case</span> <span m='726760'>substrings</span> <span
  m='727240'>will</span> <span m='727400'>be</span> <span
  m='727520'>enough.</span> </p><p><span m='728590'>But</span> <span
  m='728750'>this</span> <span m='728930'>is</span> <span m='729050'>how</span>
  <span m='729210'>you</span> <span m='729285'>can</span> <span
  m='729360'>figure</span> <span m='729870'>out</span> <span
  m='730100'>that,</span> <span m='730636'>ah,</span> <span
  m='731390'>I'm</span> <span m='731620'>not</span> <span
  m='732070'>staying</span> <span m='732430'>within</span> <span
  m='732660'>the</span> <span m='732730'>family</span> <span
  m='733090'>prefixes,</span> <span m='733680'>I'm</span> <span
  m='733830'>not</span> <span m='734060'>staying</span> <span
  m='734320'>within</span> <span m='734540'>the</span> <span
  m='734620'>family</span> <span m='734940'>suffixes.</span> <span
  m='735450'>In</span> <span m='735600'>general,</span> <span
  m='736270'>you</span> <span m='736410'>never</span> <span
  m='736780'>use</span> <span m='737020'>both</span> <span m='737310'>of</span>
  <span m='737420'>these</span> <span m='737680'>together.</span> <span
  m='738520'>If</span> <span m='738650'>you're</span> <span
  m='738750'>going</span> <span m='738910'>to</span> <span
  m='738970'>need</span> <span m='739140'>both,</span> <span
  m='739450'>you</span> <span m='739550'>probably</span> <span
  m='740160'>need</span> <span m='740460'>substrings.</span> <span
  m='741550'>So</span> <span m='741800'>if</span> <span m='741900'>just</span>
  <span m='742000'>suffixes</span> <span m='742450'>work,</span> <span
  m='742660'>fine.</span> <span m='742915'>If</span> <span
  m='743170'>just</span> <span m='743430'>prefixes</span> <span
  m='743930'>work,</span> <span m='744140'>fine,</span> <span
  m='745290'>but</span> <span m='745390'>otherwise</span> <span
  m='745770'>you're</span> <span m='745880'>probably</span> <span
  m='746180'>going</span> <span m='746310'>to</span> <span
  m='746370'>need</span> <span m='746550'>substrings.</span> <span
  m='747880'>That's</span> <span m='748080'>just</span> <span
  m='748260'>a</span> <span m='748320'>rule</span> <span m='748510'>of</span>
  <span m='748590'>thumb,</span> <span m='748765'>of</span> <span
  m='748940'>course.</span> <span m='751480'>Cool.</span> <span
  m='752480'>So,</span> <span m='753260'>part</span> <span m='753450'>1</span>
  <span m='754960'>subproblem</span> <span m='758860'>is</span> <span
  m='759230'>going</span> <span m='759390'>to</span> <span m='759480'>be</span>
  <span m='760870'>the</span> <span m='761460'>optimal</span> <span
  m='764290'>evaluation</span> <span m='766580'>parenthesization</span> <span
  m='770490'>of</span> <span m='771470'>ai</span> <span m='773490'>to</span>
  <span m='774120'>aj</span> <span m='775770'>minus</span> <span
  m='776150'>1.</span> </p><p><span m='778070'>So</span> <span
  m='778190'>that's</span> <span m='779150'>part</span> <span
  m='779430'>of</span> <span m='779530'>the</span> <span
  m='779620'>problem</span> <span m='780230'>here.</span> <span
  m='781840'>We</span> <span m='781950'>want</span> <span m='782140'>to</span>
  <span m='782210'>do</span> <span m='782340'>a0</span> <span
  m='782710'>to</span> <span m='782820'>n</span> <span m='783120'>minus</span>
  <span m='783430'>1.</span> <span m='784080'>So</span> <span
  m='784250'>in</span> <span m='784350'>general,</span> <span
  m='784690'>let's</span> <span m='784860'>just</span> <span
  m='785020'>take</span> <span m='785240'>some</span> <span
  m='785460'>substring</span> <span m='785990'>in</span> <span
  m='786060'>here</span> <span m='786230'>and</span> <span
  m='786330'>say,</span> <span m='786570'>well</span> <span
  m='786620'>what's</span> <span m='786840'>the</span> <span
  m='786920'>best</span> <span m='787140'>way</span> <span m='787230'>to</span>
  <span m='787300'>multiply</span> <span m='787710'>that,</span> <span
  m='788390'>and</span> <span m='788530'>that's</span> <span
  m='788740'>the</span> <span m='788820'>sorts</span> <span m='789140'>of</span>
  <span m='789230'>subproblems</span> <span m='789520'>we're</span> <span
  m='789640'>getting</span> <span m='790580'>if</span> <span
  m='790800'>we</span> <span m='790910'>use</span> <span m='791090'>this</span>
  <span m='791260'>guess.</span> <span m='792080'>And</span> <span
  m='792630'>if</span> <span m='792820'>you</span> <span m='792940'>start</span>
  <span m='793190'>with</span> <span m='793320'>a</span> <span
  m='793360'>substring</span> <span m='794320'>and</span> <span
  m='794460'>you</span> <span m='794560'>do</span> <span m='794700'>this,</span>
  <span m='795120'>you</span> <span m='795160'>will</span> <span
  m='795250'>still</span> <span m='795510'>remain</span> <span
  m='795970'>within</span> <span m='796220'>a</span> <span
  m='796470'>substring,</span> <span m='797620'>so</span> <span
  m='798190'>actually</span> <span m='798480'>I</span> <span
  m='798510'>have</span> <span m='798660'>to</span> <span
  m='799380'>revise</span> <span m='799750'>this</span> <span
  m='799850'>slightly.</span> </p><p><span m='800560'>Now</span> <span
  m='800810'>we're</span> <span m='800920'>going</span> <span
  m='801260'>from</span> <span m='801590'>ai--</span> <span m='803640'>to</span>
  <span m='803810'>solve</span> <span m='804140'>this</span> <span
  m='804320'>subproblem,</span> <span m='805040'>which</span> <span
  m='805100'>is</span> <span m='805190'>what</span> <span m='805330'>we</span>
  <span m='805420'>need</span> <span m='805580'>to</span> <span
  m='805660'>do</span> <span m='805800'>in</span> <span m='805900'>the</span>
  <span m='805980'>guessing</span> <span m='806500'>step,</span> <span
  m='807340'>we</span> <span m='807450'>start</span> <span
  m='807740'>from</span> <span m='807900'>ai,</span> <span m='808460'>we</span>
  <span m='808600'>go</span> <span m='808730'>to</span> <span
  m='808830'>some</span> <span m='809140'>guest</span> <span
  m='809500'>place,</span> <span m='809870'>ak</span> <span
  m='810210'>minus</span> <span m='810540'>1,</span> <span
  m='811240'>then</span> <span m='811690'>from</span> <span m='811980'>ak</span>
  <span m='812940'>up</span> <span m='813120'>to</span> <span
  m='814440'>aj</span> <span m='815020'>minus</span> <span m='815370'>1.</span>
  <span m='817380'>This</span> <span m='817550'>is</span> <span
  m='817730'>the</span> <span m='819540'>i</span> <span m='819600'>colon</span>
  <span m='820710'>j</span> <span m='821120'>subproblem.</span> <span
  m='823490'>So</span> <span m='823700'>we</span> <span m='823830'>guess</span>
  <span m='824120'>some</span> <span m='824400'>point</span> <span
  m='824610'>in</span> <span m='824700'>the</span> <span
  m='824770'>middle,</span> <span m='825720'>some</span> <span
  m='826190'>choice</span> <span m='826490'>for</span> <span
  m='826630'>k.</span> <span m='827490'>The</span> <span
  m='827600'>number</span> <span m='827930'>of</span> <span
  m='828020'>choices</span> <span m='828610'>for</span> <span
  m='828760'>k</span> <span m='830480'>is--</span> <span
  m='835670'>number</span> <span m='836020'>of</span> <span
  m='836110'>possible</span> <span m='836480'>choices</span> <span
  m='836870'>for</span> <span m='836980'>this</span> <span
  m='837210'>guess,</span> <span m='837560'>so</span> <span m='837630'>we</span>
  <span m='837700'>have</span> <span m='837810'>to</span> <span
  m='837900'>try</span> <span m='838130'>all</span> <span m='838350'>of</span>
  <span m='838450'>them,</span> <span m='839340'>is</span> <span
  m='840640'>like</span> <span m='840850'>order</span> <span m='841580'>j</span>
  <span m='842020'>minus</span> <span m='842440'>i</span> <span
  m='843710'>plus</span> <span m='844190'>1.</span> <span m='845490'>I</span>
  <span m='845560'>put</span> <span m='845630'>order</span> <span
  m='846030'>in</span> <span m='846170'>case</span> <span m='846310'>I'm</span>
  <span m='846430'>off</span> <span m='846630'>by</span> <span
  m='846760'>1</span> <span m='847050'>or</span> <span
  m='847160'>something.</span> <span m='848720'>But</span> <span
  m='848860'>in</span> <span m='848930'>particular</span> <span
  m='849350'>this</span> <span m='849530'>is</span> <span
  m='849690'>[INAUDIBLE].</span> <span m='851710'>And</span> <span
  m='851790'>that's</span> <span m='851970'>all</span> <span
  m='852130'>we'll</span> <span m='852270'>need.</span> <span
  m='855130'>So</span> <span m='855180'>that's</span> <span
  m='855460'>the</span> <span m='855550'>guess.</span> </p><p><span
  m='856680'>Now</span> <span m='857190'>we</span> <span m='857300'>go</span>
  <span m='857430'>to</span> <span m='857500'>step</span> <span
  m='857770'>3,</span> <span m='858720'>which</span> <span m='858860'>is</span>
  <span m='859050'>the</span> <span m='859130'>recurrence.</span> <span
  m='866820'>And</span> <span m='867220'>this--</span> <span
  m='867590'>we're</span> <span m='868110'>going</span> <span
  m='868210'>to</span> <span m='868280'>do</span> <span m='868400'>this</span>
  <span m='868580'>over</span> <span m='868870'>and</span> <span
  m='868940'>over</span> <span m='869150'>again.</span> <span
  m='869340'>Hopefully</span> <span m='869650'>by</span> <span
  m='869800'>the</span> <span m='869920'>end,</span> <span
  m='870150'>it's</span> <span m='870330'>really</span> <span
  m='870690'>obvious</span> <span m='871140'>how</span> <span
  m='871320'>to</span> <span m='871430'>do</span> <span m='872010'>this</span>
  <span m='872160'>recurrence.</span> <span m='873230'>Let</span> <span
  m='873350'>me</span> <span m='873460'>just</span> <span m='874030'>fix</span>
  <span m='874300'>my</span> <span m='874430'>notation,</span> <span
  m='874900'>we're</span> <span m='875020'>going</span> <span
  m='875120'>to</span> <span m='875160'>use</span> <span m='875430'>dp,</span>
  <span m='875725'>I</span> <span m='876020'>believe.</span> <span
  m='877130'>For</span> <span m='877220'>whatever</span> <span
  m='877580'>reason,</span> <span m='877870'>in</span> <span
  m='877940'>my</span> <span m='878080'>notes</span> <span m='878430'>I</span>
  <span m='878520'>often</span> <span m='880590'>write</span> <span
  m='881760'>dp</span> <span m='882370'>of</span> <span m='882710'>ij.</span>
  <span m='885290'>This</span> <span m='885560'>is</span> <span
  m='885670'>supposed</span> <span m='885960'>to</span> <span
  m='886040'>be</span> <span m='886230'>the</span> <span
  m='886320'>solution</span> <span m='886830'>to</span> <span
  m='886940'>the</span> <span m='887030'>subproblem</span> <span
  m='887660'>i</span> <span m='887760'>colon</span> <span m='888040'>j.</span>
  </p><p><span m='889490'>I</span> <span m='889560'>want</span> <span
  m='889750'>to</span> <span m='889820'>write</span> <span m='890000'>it</span>
  <span m='890070'>recursively,</span> <span m='890660'>in</span> <span
  m='890760'>terms</span> <span m='890990'>of</span> <span
  m='891070'>smaller</span> <span m='891460'>subproblems,</span> <span
  m='892670'>and</span> <span m='893010'>I</span> <span m='893090'>want</span>
  <span m='893480'>to</span> <span m='893870'>minimize</span> <span
  m='894530'>the</span> <span m='894620'>cost,</span> <span m='895050'>so</span>
  <span m='895100'>I'm</span> <span m='895150'>going</span> <span
  m='895310'>to</span> <span m='895370'>write</span> <span m='895530'>a</span>
  <span m='895615'>min</span> <span m='895990'>overall.</span> <span
  m='897880'>And</span> <span m='899090'>for</span> <span m='899330'>each</span>
  <span m='899780'>choice</span> <span m='900240'>of</span> <span
  m='900520'>k,</span> <span m='901110'>so</span> <span
  m='901235'>there's</span> <span m='901360'>going</span> <span
  m='901470'>to</span> <span m='901520'>be</span> <span m='901630'>a</span>
  <span m='901690'>for</span> <span m='901980'>loop,</span> <span
  m='902690'>I'm</span> <span m='902780'>going</span> <span m='902835'>to</span>
  <span m='902890'>use</span> <span m='903050'>Python</span> <span
  m='903400'>notation</span> <span m='903860'>here</span> <span
  m='904070'>with</span> <span m='904250'>iterators.</span> <span
  m='905680'>So</span> <span m='905950'>k</span> <span m='906530'>is</span>
  <span m='906770'>going</span> <span m='906920'>to</span> <span
  m='906990'>be</span> <span m='907890'>in</span> <span m='908280'>the</span>
  <span m='908510'>range,</span> <span m='912940'>I</span> <span
  m='913030'>think</span> <span m='913240'>range</span> <span
  m='913570'>ij</span> <span m='914200'>is</span> <span
  m='914410'>correct.</span> <span m='914990'>I'm</span> <span
  m='915093'>going</span> <span m='915196'>to</span> <span
  m='915300'>double</span> <span m='915560'>check</span> <span
  m='915860'>there's</span> <span m='916050'>no</span> <span
  m='916210'>off</span> <span m='916410'>by</span> <span m='916610'>1's</span>
  <span m='917700'>here.</span> <span m='919790'>Says</span> <span
  m='920040'>i</span> <span m='920190'>plus</span> <span m='920470'>1j.</span>
  <span m='922020'>I</span> <span m='922215'>think</span> <span
  m='922410'>that's</span> <span m='922650'>probably</span> <span
  m='923130'>right.</span> </p><p><span m='931110'>Once</span> <span
  m='931420'>I</span> <span m='931510'>choose</span> <span
  m='931830'>where</span> <span m='932050'>k</span> <span m='932360'>is,</span>
  <span m='932730'>where</span> <span m='933000'>I'm</span> <span
  m='933060'>going</span> <span m='933170'>to</span> <span
  m='933240'>split</span> <span m='934550'>my</span> <span
  m='934740'>multiplication,</span> <span m='937290'>I</span> <span
  m='937740'>do</span> <span m='939770'>the</span> <span m='939900'>cost</span>
  <span m='941690'>for</span> <span m='941905'>i</span> <span
  m='942120'>up</span> <span m='942350'>to</span> <span m='942470'>k,</span>
  <span m='943380'>that's</span> <span m='943670'>the</span> <span
  m='943760'>left</span> <span m='944040'>multiplication,</span> <span
  m='945510'>plus</span> <span m='946670'>the</span> <span
  m='946760'>cost</span> <span m='947970'>for</span> <span m='949450'>k</span>
  <span m='949542'>up</span> <span m='949635'>to</span> <span
  m='949727'>j,</span> <span m='951640'>plus--</span> <span m='953260'>so</span>
  <span m='953370'>those</span> <span m='953590'>are</span> <span
  m='953630'>the</span> <span m='953760'>two</span> <span
  m='953930'>recursive</span> <span m='955030'>multiplications.</span> <span
  m='955650'>So</span> <span m='955770'>then</span> <span m='955940'>I</span>
  <span m='956040'>also</span> <span m='956300'>have</span> <span
  m='956480'>to</span> <span m='956590'>do</span> <span m='956770'>this</span>
  <span m='957030'>outermost</span> <span m='957630'>one.</span> <span
  m='958690'>So</span> <span m='958820'>how</span> <span m='958920'>much</span>
  <span m='959120'>does</span> <span m='959190'>that</span> <span
  m='959400'>cost?</span> <span m='959910'>Well,</span> <span
  m='960200'>it's</span> <span m='960360'>something,</span> <span
  m='961350'>so</span> <span m='962310'>cost</span> <span m='964310'>of</span>
  <span m='967240'>the</span> <span m='967380'>product</span> <span
  m='968830'>ai</span> <span m='969910'>colon</span> <span m='971460'>k</span>
  <span m='975020'>times</span> <span m='977020'>the</span> <span
  m='977120'>product</span> <span m='977800'>ak</span> <span
  m='978490'>colon</span> <span m='979520'>j.</span> <span m='980630'>So</span>
  <span m='980650'>I'm</span> <span m='980730'>assuming</span> <span
  m='981190'>I</span> <span m='981310'>can</span> <span
  m='981480'>compute</span> <span m='981900'>this</span> <span
  m='982100'>cost,</span> <span m='983150'>not</span> <span
  m='983350'>even</span> <span m='983510'>going</span> <span
  m='983600'>to</span> <span m='983690'>try</span> <span m='983880'>to</span>
  <span m='984020'>write</span> <span m='984240'>down</span> <span
  m='984530'>a</span> <span m='984590'>general</span> <span
  m='984870'>formula,</span> <span m='985230'>you</span> <span
  m='985370'>could</span> <span m='985520'>do</span> <span m='985650'>it,</span>
  <span m='985740'>it's</span> <span m='985890'>not</span> <span
  m='986050'>hard,</span> <span m='986360'>it's</span> <span
  m='986430'>like</span> <span m='986500'>xyz.</span> </p><p><span
  m='989440'>For</span> <span m='989640'>a</span> <span
  m='989710'>standard</span> <span m='990110'>matrix</span> <span
  m='990430'>multiplication</span> <span m='990715'>algorithm.</span> <span
  m='991230'>But</span> <span m='991380'>whatever</span> <span
  m='991760'>algorithm</span> <span m='992110'>you're</span> <span
  m='992220'>using,</span> <span m='993010'>assuming</span> <span
  m='993530'>you</span> <span m='993690'>could</span> <span
  m='993840'>figure</span> <span m='994090'>out</span> <span
  m='994220'>the</span> <span m='994340'>dimensions</span> <span
  m='994910'>of</span> <span m='995000'>this</span> <span
  m='995150'>matrix,</span> <span m='995560'>it</span> <span
  m='995620'>doesn't</span> <span m='995860'>matter</span> <span
  m='996110'>how</span> <span m='996370'>it's</span> <span
  m='996510'>computed,</span> <span m='996900'>the</span> <span
  m='996970'>dimensions</span> <span m='997420'>will</span> <span
  m='997530'>always</span> <span m='997790'>be</span> <span
  m='997900'>the</span> <span m='998000'>same.</span> <span
  m='998330'>You</span> <span m='998450'>compute</span> <span
  m='998720'>the</span> <span m='998820'>dimensions</span> <span
  m='999300'>of</span> <span m='999390'>this</span> <span
  m='999550'>matrix</span> <span m='1000480'>that</span> <span
  m='1000620'>will</span> <span m='1000820'>result</span> <span
  m='1001150'>from</span> <span m='1001270'>that</span> <span
  m='1001460'>product,</span> <span m='1002430'>it's</span> <span
  m='1002540'>always</span> <span m='1002750'>going</span> <span
  m='1002880'>to</span> <span m='1002940'>be</span> <span m='1003600'>the</span>
  <span m='1003690'>first</span> <span m='1004440'>dimension</span> <span
  m='1004820'>here,</span> <span m='1005060'>with</span> <span
  m='1005200'>the</span> <span m='1005280'>last</span> <span
  m='1005560'>dimension</span> <span m='1005990'>there.</span> <span
  m='1007332'>And</span> <span m='1007800'>it's</span> <span
  m='1007950'>constant</span> <span m='1008290'>time,</span> <span
  m='1008510'>you</span> <span m='1008590'>know</span> <span
  m='1008760'>that.</span> </p><p><span m='1009670'>And</span> <span
  m='1009870'>then</span> <span m='1010410'>if</span> <span
  m='1010720'>you</span> <span m='1010880'>can</span> <span
  m='1011090'>figure</span> <span m='1011390'>out</span> <span
  m='1011540'>the</span> <span m='1011630'>cost</span> <span
  m='1012070'>of</span> <span m='1012140'>a</span> <span
  m='1012220'>multiplication</span> <span m='1012840'>in</span> <span
  m='1012900'>constant</span> <span m='1013260'>time,</span> <span
  m='1013490'>just</span> <span m='1013750'>knowing</span> <span
  m='1013990'>the</span> <span m='1014090'>dimensions</span> <span
  m='1014500'>of</span> <span m='1014570'>these</span> <span
  m='1014720'>matrices,</span> <span m='1015300'>then</span> <span
  m='1015460'>you</span> <span m='1015550'>could</span> <span
  m='1015690'>plug</span> <span m='1015930'>this</span> <span
  m='1016120'>in</span> <span m='1016430'>to</span> <span
  m='1016860'>this</span> <span m='1017060'>dynamic</span> <span
  m='1017430'>program,</span> <span m='1018240'>and</span> <span
  m='1018380'>you</span> <span m='1018490'>will</span> <span
  m='1018600'>get</span> <span m='1018910'>the</span> <span
  m='1019050'>optimal</span> <span m='1019460'>solution.</span> <span
  m='1020680'>This</span> <span m='1020780'>is</span> <span
  m='1020940'>magically</span> <span m='1021630'>considering</span> <span
  m='1022280'>all</span> <span m='1022620'>possible</span> <span
  m='1023090'>parenthesizations</span> <span m='1024876'>of</span> <span
  m='1025240'>these</span> <span m='1025310'>matrices,</span> <span
  m='1026609'>but</span> <span m='1026920'>magically</span> <span
  m='1027410'>it</span> <span m='1027500'>does</span> <span
  m='1027720'>it</span> <span m='1028210'>in</span> <span
  m='1028420'>polynomial</span> <span m='1028970'>time.</span> <span
  m='1029900'>Because</span> <span m='1031329'>the</span> <span
  m='1031760'>time</span> <span m='1032010'>for</span> <span
  m='1032140'>subproblem</span> <span m='1032599'>here--</span> </p><p><span
  m='1037589'>We're</span> <span m='1037780'>spending</span> <span
  m='1038150'>constant</span> <span m='1038700'>time</span> <span
  m='1039150'>for</span> <span m='1039300'>each</span> <span
  m='1039460'>iteration</span> <span m='1039880'>of</span> <span
  m='1039940'>this</span> <span m='1040099'>for</span> <span
  m='1040300'>loop,</span> <span m='1041089'>because</span> <span
  m='1041220'>this</span> <span m='1041410'>is</span> <span m='1041530'>a</span>
  <span m='1041589'>constant</span> <span m='1042000'>time</span> <span
  m='1042339'>just</span> <span m='1043210'>computing</span> <span
  m='1043579'>the</span> <span m='1043670'>cost.</span> <span
  m='1044520'>These</span> <span m='1044780'>are</span> <span
  m='1044990'>free</span> <span m='1045300'>recursive</span> <span
  m='1045740'>calls,</span> <span m='1046650'>so</span> <span
  m='1046980'>it's</span> <span m='1047240'>dominated</span> <span
  m='1047670'>by</span> <span m='1047839'>the</span> <span
  m='1048089'>length</span> <span m='1048369'>of</span> <span
  m='1048450'>the</span> <span m='1048530'>for</span> <span
  m='1048750'>loop,</span> <span m='1048960'>which</span> <span
  m='1049110'>we</span> <span m='1049240'>already</span> <span
  m='1049460'>said</span> <span m='1049690'>was</span> <span
  m='1049820'>order</span> <span m='1050080'>n,</span> <span
  m='1051710'>so</span> <span m='1051820'>it's</span> <span
  m='1051960'>order</span> <span m='1052250'>n</span> <span
  m='1052470'>time</span> <span m='1052780'>for</span> <span
  m='1052910'>subproblem,</span> <span m='1053480'>ignoring</span> <span
  m='1053830'>recursions.</span> <span m='1054990'>And</span> <span
  m='1055230'>so</span> <span m='1055390'>when</span> <span
  m='1055530'>we</span> <span m='1055660'>put</span> <span
  m='1055830'>this</span> <span m='1055980'>together,</span> <span
  m='1056730'>the</span> <span m='1056840'>total</span> <span
  m='1057110'>time</span> <span m='1058730'>is</span> <span
  m='1058800'>going</span> <span m='1058940'>to</span> <span
  m='1059000'>be</span> <span m='1059210'>the</span> <span
  m='1059290'>number</span> <span m='1059590'>of</span> <span
  m='1059640'>some</span> <span m='1059840'>problems,</span> <span
  m='1061250'>which</span> <span m='1061850'>I</span> <span
  m='1061980'>did</span> <span m='1062180'>not</span> <span
  m='1062390'>write.</span> </p><p><span m='1062690'>The</span> <span
  m='1063940'>number</span> <span m='1064270'>of</span> <span
  m='1064550'>problems</span> <span m='1066260'>in</span> <span
  m='1066340'>step</span> <span m='1066640'>1</span> <span m='1068950'>is</span>
  <span m='1069320'>n</span> <span m='1069500'>squared,</span> <span
  m='1071320'>that's</span> <span m='1071455'>what</span> <span
  m='1071590'>we</span> <span m='1071780'>said</span> <span
  m='1072200'>over</span> <span m='1072560'>here,</span> <span
  m='1073520'>for</span> <span m='1073650'>substrings.</span> <span
  m='1076530'>So</span> <span m='1076890'>running</span> <span
  m='1077120'>time</span> <span m='1077360'>is</span> <span
  m='1077480'>number</span> <span m='1077750'>of</span> <span
  m='1077825'>subproblems,</span> <span m='1078280'>which</span> <span
  m='1078390'>is</span> <span m='1078510'>n</span> <span
  m='1078700'>squared,</span> <span m='1079270'>times</span> <span
  m='1079660'>linear</span> <span m='1079970'>for</span> <span
  m='1080140'>each,</span> <span m='1081040'>and</span> <span
  m='1081520'>so</span> <span m='1081730'>it's</span> <span
  m='1082360'>order</span> <span m='1082670'>n</span> <span
  m='1082920'>cubed,</span> <span m='1083340'>it's</span> <span
  m='1083500'>actually</span> <span m='1083870'>theta</span> <span
  m='1084150'>n</span> <span m='1084370'>cubed.</span> <span
  m='1087880'>So</span> <span m='1088170'>polynomial</span> <span
  m='1088700'>time,</span> <span m='1089020'>much</span> <span
  m='1089290'>better</span> <span m='1089590'>than</span> <span
  m='1089930'>trying</span> <span m='1090230'>all</span> <span
  m='1090530'>possible</span> <span m='1090900'>parenthesizations,</span> <span
  m='1091660'>they're</span> <span m='1091790'>about</span> <span
  m='1092160'>4</span> <span m='1092420'>to</span> <span m='1092592'>the</span>
  <span m='1092765'>n</span> <span m='1093830'>parenthesizations,</span> <span
  m='1094880'>that's</span> <span m='1095100'>a</span> <span
  m='1095150'>lot.</span> <span m='1098740'>Topological</span> <span
  m='1099440'>order</span> <span m='1099730'>here</span> <span
  m='1100120'>is</span> <span m='1100260'>a</span> <span
  m='1100310'>little</span> <span m='1100500'>more</span> <span
  m='1100700'>interesting,</span> <span m='1101310'>if</span> <span
  m='1101690'>you</span> <span m='1101980'>think</span> <span
  m='1102130'>about</span> <span m='1102390'>that.</span> </p><p><span
  m='1111770'>I</span> <span m='1111860'>can</span> <span
  m='1112020'>tell</span> <span m='1112220'>you,</span> <span
  m='1112420'>for</span> <span m='1112770'>suffixes,</span> <span
  m='1113430'>topological</span> <span m='1114030'>order</span> <span
  m='1114310'>is</span> <span m='1114420'>almost</span> <span
  m='1114760'>always</span> <span m='1115470'>right</span> <span
  m='1115710'>to</span> <span m='1115810'>left.</span> <span
  m='1116510'>And</span> <span m='1116900'>for</span> <span
  m='1117140'>prefixes,</span> <span m='1117760'>it's</span> <span
  m='1117920'>almost</span> <span m='1118210'>always</span> <span
  m='1118410'>left</span> <span m='1118640'>to</span> <span
  m='1118740'>right,</span> <span m='1120450'>for</span> <span
  m='1120810'>increasing</span> <span m='1121350'>i,</span> <span
  m='1122020'>decreasing</span> <span m='1122490'>i.</span> <span
  m='1123350'>For</span> <span m='1123490'>substrings,</span> <span
  m='1124130'>what</span> <span m='1124250'>do</span> <span
  m='1124325'>you</span> <span m='1124400'>think</span> <span
  m='1124610'>it</span> <span m='1124690'>is?</span> <span m='1125380'>Or</span>
  <span m='1125490'>for</span> <span m='1125670'>this</span> <span
  m='1125800'>situation</span> <span m='1126410'>in</span> <span
  m='1126500'>particular?</span> <span m='1127690'>In</span> <span
  m='1127730'>what</span> <span m='1127930'>order</span> <span
  m='1128260'>should</span> <span m='1128460'>I</span> <span
  m='1128540'>evaluate</span> <span m='1129190'>these</span> <span
  m='1129790'>subproblems?</span> </p><p><span m='1143025'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='1151010'>PROFESSOR: This</span> <span
  m='1151310'>is</span> <span m='1151440'>the</span> <span
  m='1151550'>running</span> <span m='1151840'>time</span> <span
  m='1152130'>to</span> <span m='1152270'>determine</span> <span
  m='1153540'>the</span> <span m='1153660'>best</span> <span
  m='1154000'>way</span> <span m='1154110'>to</span> <span
  m='1154190'>multiply--</span> <span m='1154890'>that's</span> <span
  m='1155100'>right.</span> <span m='1155720'>So</span> <span
  m='1156690'>yeah,</span> <span m='1157050'>it's</span> <span
  m='1157180'>worth</span> <span m='1157630'>checking,</span> <span
  m='1158120'>because</span> <span m='1158360'>we</span> <span
  m='1158480'>also</span> <span m='1158660'>have</span> <span
  m='1158750'>to</span> <span m='1158860'>do</span> <span m='1159050'>the</span>
  <span m='1159160'>multiplication.</span> <span m='1160720'>But</span> <span
  m='1160840'>if</span> <span m='1160940'>you</span> <span
  m='1161050'>imagine</span> <span m='1161410'>this</span> <span
  m='1161710'>n,</span> <span m='1162680'>the</span> <span
  m='1162850'>number</span> <span m='1163240'>of</span> <span
  m='1163455'>matrices</span> <span m='1163670'>you're</span> <span
  m='1163780'>multiplying</span> <span m='1164300'>is</span> <span
  m='1164400'>probably</span> <span m='1164690'>much</span> <span
  m='1164920'>smaller</span> <span m='1165290'>than</span> <span
  m='1165470'>their</span> <span m='1165610'>sizes.</span> <span
  m='1166700'>In</span> <span m='1166850'>that</span> <span
  m='1167030'>situation,</span> <span m='1167560'>this</span> <span
  m='1167760'>will</span> <span m='1167940'>be</span> <span
  m='1168170'>tiny,</span> <span m='1169180'>whereas</span> <span
  m='1169590'>the</span> <span m='1169730'>time</span> <span
  m='1170130'>to</span> <span m='1170210'>actually</span> <span
  m='1171810'>do</span> <span m='1172000'>the</span> <span
  m='1172110'>multiplication,</span> <span m='1172770'>that's</span> <span
  m='1172970'>what's</span> <span m='1173190'>being</span> <span
  m='1173390'>computed</span> <span m='1173960'>by</span> <span
  m='1174090'>the</span> <span m='1174310'>DP,</span> <span
  m='1174530'>hopefully</span> <span m='1174970'>that's</span> <span
  m='1175180'>much</span> <span m='1175390'>larger,</span> <span
  m='1175780'>otherwise</span> <span m='1176690'>you're</span> <span
  m='1176820'>kind</span> <span m='1176980'>of</span> <span
  m='1177030'>wasting</span> <span m='1177340'>your</span> <span
  m='1177460'>time</span> <span m='1177740'>doing</span> <span
  m='1177950'>the</span> <span m='1178020'>DP.</span> </p><p><span
  m='1178360'>But</span> <span m='1178700'>hey,</span> <span
  m='1179760'>at</span> <span m='1179920'>least</span> <span
  m='1180125'>you</span> <span m='1180330'>could</span> <span
  m='1180500'>tell</span> <span m='1181300'>somebody</span> <span
  m='1181800'>that</span> <span m='1182660'>you</span> <span
  m='1182780'>did</span> <span m='1182910'>it</span> <span
  m='1183040'>optimally.</span> <span m='1186510'>But</span> <span
  m='1186625'>it</span> <span m='1186740'>gets</span> <span
  m='1186990'>into</span> <span m='1187050'>a</span> <span
  m='1187110'>fun</span> <span m='1187310'>issue</span> <span
  m='1187540'>of</span> <span m='1187650'>cost</span> <span
  m='1187940'>of</span> <span m='1188020'>planning</span> <span
  m='1188430'>verses</span> <span m='1188720'>execution,</span> <span
  m='1189570'>but</span> <span m='1189720'>we're</span> <span
  m='1189850'>not</span> <span m='1190020'>really</span> <span
  m='1190260'>going</span> <span m='1190380'>to</span> <span
  m='1190840'>worry</span> <span m='1191020'>about</span> <span
  m='1191260'>that</span> <span m='1191420'>here.</span> <span
  m='1193580'>So,</span> <span m='1194820'>in</span> <span
  m='1194960'>what</span> <span m='1195200'>order</span> <span
  m='1195500'>should</span> <span m='1195690'>I</span> <span
  m='1195960'>evaluate</span> <span m='1196580'>this</span> <span
  m='1196740'>recurrence,</span> <span m='1197310'>in</span> <span
  m='1197540'>order</span> <span m='1197780'>to--</span> <span
  m='1198300'>I</span> <span m='1198610'>want,</span> <span
  m='1199700'>when</span> <span m='1199870'>I'm</span> <span
  m='1199940'>evaluating</span> <span m='1200500'>DP</span> <span
  m='1200800'>of</span> <span m='1200890'>ij,</span> <span
  m='1201370'>I've</span> <span m='1201510'>already</span> <span
  m='1201900'>done</span> <span m='1202180'>DP</span> <span
  m='1202530'>of</span> <span m='1202610'>ik</span> <span m='1203100'>and</span>
  <span m='1203280'>DP</span> <span m='1203570'>of</span> <span
  m='1203660'>kj,</span> <span m='1204180'>and</span> <span
  m='1204245'>this</span> <span m='1204310'>is</span> <span
  m='1204370'>what</span> <span m='1204540'>you</span> <span
  m='1204630'>need</span> <span m='1204820'>for</span> <span
  m='1204980'>bottom</span> <span m='1205300'>up</span> <span
  m='1205700'>execution.</span> <span m='1206350'>Yeah.</span> </p><p><span
  m='1207070'>AUDIENCE: Small</span> <span m='1207226'>to</span> <span
  m='1207383'>large.</span> </p><p><span m='1207820'>PROFESSOR: Small</span>
  <span m='1208110'>to</span> <span m='1208170'>large,</span> <span
  m='1208540'>exactly.</span> <span m='1209580'>We</span> <span
  m='1209700'>want</span> <span m='1209900'>to</span> <span
  m='1209990'>do</span> <span m='1210650'>increasing</span> <span
  m='1213270'>substring</span> <span m='1213870'>size.</span> <span
  m='1216100'>That's</span> <span m='1216300'>actually</span> <span
  m='1216570'>what</span> <span m='1216720'>we're</span> <span
  m='1216890'>always</span> <span m='1217210'>doing</span> <span
  m='1217670'>for</span> <span m='1217910'>all</span> <span
  m='1218120'>of</span> <span m='1218210'>those</span> <span
  m='1218410'>subproblems</span> <span m='1218940'>over</span> <span
  m='1219090'>there.</span> <span m='1222570'>When</span> <span
  m='1222820'>I</span> <span m='1222920'>say</span> <span m='1223175'>all</span>
  <span m='1223430'>suffixes,</span> <span m='1223920'>you</span> <span
  m='1224010'>go</span> <span m='1224190'>right</span> <span
  m='1224410'>to</span> <span m='1224500'>left.</span> <span
  m='1224800'>Well,</span> <span m='1224880'>that's</span> <span
  m='1225080'>because</span> <span m='1225340'>the</span> <span
  m='1226050'>rightmost</span> <span m='1226460'>suffix</span> <span
  m='1226720'>is</span> <span m='1226980'>nothing,</span> <span
  m='1227820'>and</span> <span m='1227950'>then</span> <span
  m='1228040'>you</span> <span m='1228120'>build</span> <span
  m='1228430'>up</span> <span m='1228560'>a</span> <span
  m='1228620'>larger</span> <span m='1228960'>and</span> <span
  m='1229020'>larger</span> <span m='1229300'>strings,</span> <span
  m='1229670'>same</span> <span m='1229960'>thing</span> <span
  m='1230160'>here.</span> <span m='1231600'>Exercise,</span> <span
  m='1232560'>try</span> <span m='1232830'>to</span> <span
  m='1232940'>draw</span> <span m='1233140'>the</span> <span
  m='1233280'>DAG</span> <span m='1233880'>for</span> <span
  m='1234140'>this</span> <span m='1234330'>picture.</span> <span
  m='1235100'>It's</span> <span m='1235270'>a</span> <span
  m='1235330'>little</span> <span m='1235550'>harder,</span> <span
  m='1236350'>but</span> <span m='1236410'>if</span> <span
  m='1236560'>you--</span> <span m='1237600'>I</span> <span
  m='1237705'>mean</span> <span m='1237810'>you</span> <span
  m='1237950'>could</span> <span m='1238090'>basically</span> <span
  m='1238460'>imagine--</span> <span m='1239520'>I'll</span> <span
  m='1239600'>do</span> <span m='1239680'>it</span> <span m='1239760'>for</span>
  <span m='1239990'>you.</span> </p><p><span m='1241930'>Here</span> <span
  m='1242280'>is,</span> <span m='1242490'>let's</span> <span
  m='1242730'>say--</span> <span m='1243470'>well,</span> <span
  m='1243870'>at</span> <span m='1244010'>the</span> <span
  m='1244100'>top</span> <span m='1244960'>there's</span> <span
  m='1245210'>everything,</span> <span m='1246210'>the</span> <span
  m='1246980'>longest</span> <span m='1248140'>substring,</span> <span
  m='1250460'>that</span> <span m='1250610'>would</span> <span
  m='1250700'>be</span> <span m='1250850'>from</span> <span
  m='1251040'>zero</span> <span m='1252008'>to</span> <span
  m='1252250'>n,</span> <span m='1252492'>that's</span> <span
  m='1252976'>everything.</span> <span m='1254430'>Then</span> <span
  m='1254740'>you're</span> <span m='1254860'>going</span> <span
  m='1254980'>to</span> <span m='1255050'>have</span> <span m='1255470'>n</span>
  <span m='1255680'>different</span> <span m='1255960'>ways</span> <span
  m='1256390'>to</span> <span m='1256540'>have</span> <span
  m='1256720'>substrings</span> <span m='1257450'>of,</span> <span
  m='1257930'>or</span> <span m='1258410'>actually</span> <span
  m='1258640'>just</span> <span m='1258830'>two</span> <span
  m='1259530'>different</span> <span m='1259790'>ways,</span> <span
  m='1260370'>to</span> <span m='1261000'>have</span> <span m='1261280'>a</span>
  <span m='1261370'>slightly</span> <span m='1261800'>smaller</span> <span
  m='1262140'>substring.</span> <span m='1262570'>At</span> <span
  m='1262690'>the</span> <span m='1262770'>bottom</span> <span
  m='1264090'>you</span> <span m='1264270'>have</span> <span
  m='1264620'>a</span> <span m='1264680'>bunch</span> <span
  m='1264980'>of</span> <span m='1265070'>substrings,</span> <span
  m='1265680'>which</span> <span m='1265920'>are</span> <span
  m='1266050'>the</span> <span m='1266920'>length</span> <span
  m='1267170'>zero</span> <span m='1267560'>ones,</span> <span
  m='1270100'>and</span> <span m='1270340'>in</span> <span
  m='1270410'>between,</span> <span m='1271290'>like</span> <span
  m='1271450'>in</span> <span m='1271550'>the</span> <span
  m='1271630'>middle</span> <span m='1271870'>here,</span> <span
  m='1272060'>you're</span> <span m='1272180'>going</span> <span
  m='1272270'>to</span> <span m='1272320'>have</span> <span m='1273010'>a</span>
  <span m='1273150'>much</span> <span m='1273390'>larger</span> <span
  m='1273700'>number.</span> </p><p><span m='1277780'>And</span> <span
  m='1277920'>all</span> <span m='1278040'>these</span> <span
  m='1278200'>edges</span> <span m='1278490'>are</span> <span
  m='1278590'>pointed</span> <span m='1279010'>up,</span> <span
  m='1280350'>so</span> <span m='1280520'>you</span> <span
  m='1280700'>can</span> <span m='1280850'>compute</span> <span
  m='1281150'>all</span> <span m='1281320'>the</span> <span
  m='1281370'>length</span> <span m='1281600'>zero</span> <span
  m='1281910'>ones</span> <span m='1282160'>without</span> <span
  m='1282430'>any</span> <span m='1282610'>dependencies</span> <span
  m='1283740'>and</span> <span m='1283970'>then</span> <span
  m='1284110'>just</span> <span m='1284350'>increasing</span> <span
  m='1284910'>in</span> <span m='1284990'>length.</span> <span
  m='1285700'>It's</span> <span m='1285790'>a</span> <span
  m='1285880'>little</span> <span m='1286070'>hard</span> <span
  m='1286250'>to</span> <span m='1286340'>see,</span> <span
  m='1287200'>but</span> <span m='1288510'>in</span> <span
  m='1288780'>each</span> <span m='1289020'>case--</span> <span
  m='1291190'>Yeah,</span> <span m='1292216'>ah,</span> <span
  m='1292630'>interesting.</span> <span m='1294150'>This</span> <span
  m='1294340'>is</span> <span m='1294370'>a</span> <span
  m='1294400'>little</span> <span m='1294610'>harder</span> <span
  m='1294880'>to</span> <span m='1294950'>formulate</span> <span
  m='1295360'>as</span> <span m='1295510'>a</span> <span
  m='1295600'>regular</span> <span m='1296020'>shortest</span> <span
  m='1296380'>paths</span> <span m='1296690'>problem,</span> <span
  m='1297840'>because</span> <span m='1299370'>if</span> <span
  m='1299500'>you</span> <span m='1299620'>look</span> <span
  m='1299800'>at</span> <span m='1299870'>one</span> <span m='1300010'>of</span>
  <span m='1300080'>these</span> <span m='1300260'>nodes,</span> <span
  m='1300560'>it</span> <span m='1300660'>depends</span> <span
  m='1301200'>on</span> <span m='1301460'>two</span> <span
  m='1301700'>different</span> <span m='1302980'>values,</span> <span
  m='1304050'>and</span> <span m='1304170'>you</span> <span
  m='1304240'>have</span> <span m='1304370'>to</span> <span
  m='1304480'>take</span> <span m='1304690'>the</span> <span
  m='1304770'>sum</span> <span m='1305110'>of</span> <span
  m='1305190'>both</span> <span m='1305440'>of</span> <span
  m='1305520'>them.</span> </p><p><span m='1307660'>And</span> <span
  m='1307790'>then</span> <span m='1307900'>you</span> <span
  m='1308020'>also</span> <span m='1308360'>add</span> <span
  m='1308610'>the</span> <span m='1308710'>cost</span> <span
  m='1309110'>of</span> <span m='1309200'>that</span> <span
  m='1309620'>split.</span> <span m='1311170'>Cool.</span> <span
  m='1311610'>So</span> <span m='1311780'>this</span> <span
  m='1312950'>is</span> <span m='1313050'>the</span> <span
  m='1313140'>subproblem</span> <span m='1313350'>DAG,</span> <span
  m='1317280'>you</span> <span m='1317410'>could</span> <span
  m='1317590'>draw</span> <span m='1317920'>it,</span> <span
  m='1319210'>but</span> <span m='1319440'>this</span> <span
  m='1319650'>DP</span> <span m='1321270'>is</span> <span m='1321510'>not</span>
  <span m='1322140'>shortest</span> <span m='1322510'>paths</span> <span
  m='1322820'>in</span> <span m='1322890'>that</span> <span
  m='1323080'>DAG.</span> <span m='1331410'>So</span> <span
  m='1331580'>perhaps</span> <span m='1331940'>dynamic</span> <span
  m='1332290'>programming</span> <span m='1332720'>is</span> <span
  m='1332850'>not</span> <span m='1333170'>just</span> <span
  m='1333340'>shortest</span> <span m='1333680'>paths</span> <span
  m='1333890'>in</span> <span m='1333930'>a</span> <span m='1333970'>DAG,</span>
  <span m='1334420'>that's</span> <span m='1334760'>a</span> <span
  m='1335130'>new</span> <span m='1335280'>realization</span> <span
  m='1335850'>for</span> <span m='1335990'>me</span> <span m='1336440'>as</span>
  <span m='1336700'>of</span> <span m='1336830'>right</span> <span
  m='1337060'>now.</span> </p><p><span m='1338340'>OK.</span> <span
  m='1339105'>Some</span> <span m='1339530'>other</span> <span
  m='1339750'>things</span> <span m='1340100'>I</span> <span
  m='1340170'>forgot</span> <span m='1340480'>to</span> <span
  m='1340570'>do--</span> <span m='1340670'>I</span> <span
  m='1340740'>didn't</span> <span m='1340970'>specify</span> <span
  m='1341340'>the</span> <span m='1341440'>base</span> <span
  m='1341720'>case.</span> <span m='1342460'>The</span> <span
  m='1342560'>base</span> <span m='1342810'>case</span> <span
  m='1343050'>for</span> <span m='1343130'>that</span> <span
  m='1343290'>recurrence</span> <span m='1343645'>is</span> <span
  m='1344000'>when</span> <span m='1344180'>your</span> <span
  m='1344820'>string</span> <span m='1345100'>is</span> <span
  m='1345220'>of</span> <span m='1345330'>length</span> <span
  m='1345560'>0</span> <span m='1346810'>or</span> <span m='1346980'>even</span>
  <span m='1347160'>of</span> <span m='1347260'>length</span> <span
  m='1347510'>1,</span> <span m='1349130'>because</span> <span
  m='1349850'>when</span> <span m='1350000'>it's</span> <span
  m='1350130'>length</span> <span m='1350370'>1,</span> <span
  m='1350550'>there's</span> <span m='1350680'>only</span> <span
  m='1350850'>one</span> <span m='1351120'>matrix,</span> <span
  m='1351520'>there's</span> <span m='1351640'>no</span> <span
  m='1351760'>multiplication</span> <span m='1352480'>to</span> <span
  m='1352600'>do,</span> <span m='1353220'>and</span> <span
  m='1353400'>so</span> <span m='1354330'>the</span> <span
  m='1354460'>cost</span> <span m='1354800'>is</span> <span
  m='1354890'>zero.</span> <span m='1355870'>So</span> <span
  m='1356050'>you</span> <span m='1356140'>have</span> <span
  m='1356360'>something</span> <span m='1356650'>like</span> <span
  m='1357320'>dp</span> <span m='1357800'>of</span> <span m='1358260'>i,</span>
  <span m='1359250'>i</span> <span m='1359390'>plus</span> <span
  m='1359660'>1</span> <span m='1360140'>equals</span> <span
  m='1360530'>zero.</span> <span m='1360970'>That's</span> <span
  m='1361170'>the</span> <span m='1361250'>base</span> <span
  m='1361510'>case.</span> <span m='1362460'>And</span> <span
  m='1362680'>then</span> <span m='1363200'>step</span> <span
  m='1363520'>5,</span> <span m='1365370'>step</span> <span m='1365730'>5</span>
  <span m='1366100'>is</span> <span m='1366430'>what's</span> <span
  m='1366730'>the</span> <span m='1366920'>overall</span> <span
  m='1367340'>problem</span> <span m='1367630'>I</span> <span
  m='1367660'>want</span> <span m='1367830'>to</span> <span
  m='1367890'>solve,</span> <span m='1368230'>and</span> <span
  m='1368310'>that's</span> <span m='1368490'>just</span> <span
  m='1368630'>dp</span> <span m='1369000'>from</span> <span m='1369150'>0</span>
  <span m='1369350'>to</span> <span m='1369420'>n,</span> <span
  m='1369650'>that's</span> <span m='1369900'>the</span> <span
  m='1369980'>whole</span> <span m='1370820'>string.</span> </p><p><span
  m='1373530'>Any</span> <span m='1373750'>questions</span> <span
  m='1374150'>about</span> <span m='1374450'>that</span> <span
  m='1374650'>DP?</span> <span m='1376930'>I</span> <span
  m='1377030'>didn't</span> <span m='1377380'>write</span> <span
  m='1377650'>down,</span> <span m='1382020'>I</span> <span
  m='1382080'>didn't</span> <span m='1382290'>write</span> <span
  m='1382470'>down</span> <span m='1382790'>a</span> <span
  m='1383550'>memoized</span> <span m='1384320'>recursive</span> <span
  m='1384720'>algorithm,</span> <span m='1385160'>you</span> <span
  m='1385300'>all</span> <span m='1385390'>know</span> <span
  m='1385510'>how</span> <span m='1385640'>to</span> <span m='1385740'>do</span>
  <span m='1385870'>that.</span> <span m='1386870'>Just</span> <span
  m='1386930'>do</span> <span m='1387070'>this</span> <span
  m='1387270'>for</span> <span m='1387470'>loop</span> <span
  m='1388140'>and</span> <span m='1388300'>put</span> <span
  m='1388460'>this</span> <span m='1388640'>inside,</span> <span
  m='1389110'>that</span> <span m='1389240'>would</span> <span
  m='1389330'>be</span> <span m='1389420'>the</span> <span
  m='1389520'>bottom</span> <span m='1389800'>up</span> <span
  m='1389950'>one,</span> <span m='1390490'>or</span> <span
  m='1390640'>just</span> <span m='1390790'>write</span> <span
  m='1391030'>this</span> <span m='1391200'>with</span> <span
  m='1391310'>memoization,</span> <span m='1392000'>that</span> <span
  m='1392160'>would</span> <span m='1392240'>be</span> <span
  m='1392340'>the</span> <span m='1392440'>recursive</span> <span
  m='1392830'>algorithm.</span> <span m='1393770'>It's</span> <span
  m='1393920'>totally</span> <span m='1394290'>easy</span> <span
  m='1395590'>once</span> <span m='1395820'>you</span> <span
  m='1395910'>have</span> <span m='1396770'>this</span> <span
  m='1396940'>recurrence.</span> <span m='1400940'>All</span> <span
  m='1401020'>right,</span> <span m='1401900'>good.</span> </p><p><span
  m='1408220'>How</span> <span m='1408300'>many</span> <span
  m='1408470'>people</span> <span m='1408750'>is</span> <span
  m='1408880'>this</span> <span m='1410760'>completely</span> <span
  m='1411170'>clear</span> <span m='1411400'>to?</span> <span
  m='1413480'>OK.</span> <span m='1413920'>How</span> <span
  m='1414070'>many</span> <span m='1414280'>people</span> <span
  m='1414590'>does</span> <span m='1414710'>it</span> <span
  m='1414790'>kind</span> <span m='1415400'>of</span> <span
  m='1415650'>make</span> <span m='1415880'>sense?</span> <span
  m='1417590'>And</span> <span m='1417790'>how</span> <span
  m='1417910'>many</span> <span m='1418070'>people</span> <span
  m='1418420'>it</span> <span m='1418480'>doesn't</span> <span
  m='1418660'>make</span> <span m='1418880'>sense</span> <span
  m='1419230'>at</span> <span m='1419290'>all?</span> <span
  m='1420610'>OK,</span> <span m='1421000'>good.</span> <span
  m='1421350'>Hopefully</span> <span m='1422400'>we're</span> <span
  m='1422510'>going</span> <span m='1422590'>to</span> <span
  m='1422640'>shift</span> <span m='1422990'>more</span> <span
  m='1423270'>towards</span> <span m='1423560'>the</span> <span
  m='1423650'>first</span> <span m='1423940'>category.</span> <span
  m='1424730'>It's</span> <span m='1424900'>a</span> <span
  m='1424970'>little</span> <span m='1425220'>magical,</span> <span
  m='1425920'>how</span> <span m='1426130'>this</span> <span
  m='1426320'>guessing</span> <span m='1426640'>works</span> <span
  m='1426900'>out,</span> <span m='1427080'>but</span> <span
  m='1427700'>I</span> <span m='1427750'>think</span> <span
  m='1427950'>the</span> <span m='1428060'>only</span> <span
  m='1428240'>way</span> <span m='1428360'>to</span> <span
  m='1428480'>really</span> <span m='1428740'>get</span> <span
  m='1428940'>it</span> <span m='1429510'>is</span> <span m='1429880'>to</span>
  <span m='1430120'>see</span> <span m='1430310'>more</span> <span
  m='1430470'>examples</span> <span m='1431590'>and</span> <span
  m='1431830'>write</span> <span m='1432060'>code</span> <span
  m='1432360'>to</span> <span m='1432460'>do</span> <span m='1432630'>it,</span>
  <span m='1433080'>that's--</span> <span m='1433590'>the</span> <span
  m='1433680'>ladder</span> <span m='1434040'>is</span> <span
  m='1434095'>your</span> <span m='1434150'>problem</span> <span
  m='1434430'>set,</span> <span m='1435150'>examples</span> <span
  m='1435700'>is</span> <span m='1435750'>what</span> <span
  m='1435910'>we'll</span> <span m='1435990'>do</span> <span
  m='1436120'>here.</span> </p><p><span m='1437780'>So</span> <span
  m='1438080'>next</span> <span m='1438320'>problem</span> <span
  m='1439240'>we're</span> <span m='1439380'>going</span> <span
  m='1439490'>to</span> <span m='1439550'>solve.</span> <span
  m='1447440'>Dynamic</span> <span m='1447810'>programming</span> <span
  m='1448190'>is</span> <span m='1448270'>one</span> <span m='1448400'>of</span>
  <span m='1448440'>these</span> <span m='1448600'>things</span> <span
  m='1448790'>that's</span> <span m='1448900'>really</span> <span
  m='1449260'>easy</span> <span m='1452220'>once</span> <span
  m='1452490'>you</span> <span m='1452570'>get</span> <span
  m='1452760'>it,</span> <span m='1454380'>but</span> <span
  m='1454500'>it</span> <span m='1454580'>takes</span> <span
  m='1454800'>a</span> <span m='1454830'>little</span> <span
  m='1455000'>while</span> <span m='1455250'>to</span> <span
  m='1455370'>get</span> <span m='1455570'>there.</span> <span
  m='1457520'>So</span> <span m='1457720'>edit</span> <span
  m='1457940'>distance,</span> <span m='1463330'>we're</span> <span
  m='1463430'>going</span> <span m='1463550'>to</span> <span
  m='1463630'>make</span> <span m='1463850'>things</span> <span
  m='1464050'>a</span> <span m='1464070'>little</span> <span
  m='1464270'>harder.</span> <span m='1464870'>Now</span> <span
  m='1465070'>we're</span> <span m='1465180'>going</span> <span
  m='1465310'>to</span> <span m='1465370'>be</span> <span
  m='1465480'>given</span> <span m='1465830'>two</span> <span
  m='1466120'>strings</span> <span m='1466620'>instead</span> <span
  m='1466900'>of</span> <span m='1466990'>just</span> <span
  m='1467220'>one.</span> <span m='1468930'>And</span> <span
  m='1469000'>I</span> <span m='1469040'>want</span> <span m='1469270'>to</span>
  <span m='1469330'>know</span> <span m='1472090'>the</span> <span
  m='1472180'>cheapest</span> <span m='1472690'>way</span> <span
  m='1473050'>to</span> <span m='1473250'>convert</span> <span
  m='1473790'>x</span> <span m='1474190'>into</span> <span m='1474470'>y.</span>
  </p><p><span m='1486410'>I'm</span> <span m='1486500'>going</span> <span
  m='1486580'>to</span> <span m='1486650'>define</span> <span
  m='1487100'>what</span> <span m='1487530'>transform</span> <span
  m='1488090'>means.</span> <span m='1488490'>We're</span> <span
  m='1488620'>going</span> <span m='1488740'>to</span> <span
  m='1488860'>allow</span> <span m='1490030'>character</span> <span
  m='1490700'>edits.</span> <span m='1501849'>We</span> <span
  m='1502360'>want</span> <span m='1502590'>to</span> <span
  m='1502650'>transform</span> <span m='1503230'>this</span> <span
  m='1503340'>string</span> <span m='1503680'>x</span> <span
  m='1504430'>into</span> <span m='1504770'>string</span> <span
  m='1505080'>y,</span> <span m='1505500'>so</span> <span
  m='1505740'>what</span> <span m='1505960'>character</span> <span
  m='1506320'>edits</span> <span m='1506620'>are</span> <span
  m='1506700'>we</span> <span m='1506830'>allowed?</span> <span
  m='1508310'>Very</span> <span m='1508460'>simple,</span> <span
  m='1509210'>we're</span> <span m='1509450'>allowed</span> <span
  m='1510040'>to</span> <span m='1510320'>insert</span> <span
  m='1510660'>a</span> <span m='1510710'>character</span> <span
  m='1511760'>anywhere</span> <span m='1512120'>in</span> <span
  m='1512190'>the</span> <span m='1512260'>strength,</span> <span
  m='1512980'>we're</span> <span m='1513110'>allowed</span> <span
  m='1513330'>to</span> <span m='1513470'>delete</span> <span
  m='1513900'>a</span> <span m='1514000'>character</span> <span
  m='1514510'>anywhere</span> <span m='1514950'>in</span> <span
  m='1515030'>the</span> <span m='1515100'>string,</span> <span
  m='1516570'>and</span> <span m='1516840'>we're</span> <span
  m='1517010'>allowed</span> <span m='1517370'>to</span> <span
  m='1518600'>replace</span> <span m='1519300'>a</span> <span
  m='1519370'>character</span> <span m='1521340'>anywhere</span> <span
  m='1521510'>in</span> <span m='1521580'>the</span> <span
  m='1521650'>string,</span> <span m='1522690'>replace</span> <span
  m='1523090'>c</span> <span m='1523780'>with</span> <span m='1524010'>c</span>
  <span m='1524165'>prime.</span> </p><p><span m='1526270'>Now,</span> <span
  m='1526350'>you</span> <span m='1526500'>could</span> <span
  m='1526700'>do</span> <span m='1526755'>a</span> <span
  m='1526810'>replacement</span> <span m='1527470'>by</span> <span
  m='1527760'>deleting</span> <span m='1528190'>c</span> <span
  m='1528850'>and</span> <span m='1529010'>inserting</span> <span
  m='1529430'>c</span> <span m='1529890'>that's,</span> <span
  m='1530080'>one</span> <span m='1530280'>way</span> <span
  m='1530430'>to</span> <span m='1530530'>do</span> <span m='1530730'>it,</span>
  <span m='1531890'>but</span> <span m='1532000'>I'm</span> <span
  m='1532130'>going</span> <span m='1532350'>to</span> <span
  m='1532460'>imagine</span> <span m='1533030'>that</span> <span
  m='1533230'>in</span> <span m='1533370'>general</span> <span
  m='1533720'>someone</span> <span m='1534090'>tells</span> <span
  m='1534400'>me</span> <span m='1534880'>how</span> <span
  m='1535570'>much</span> <span m='1535900'>each</span> <span
  m='1536060'>of</span> <span m='1536110'>these</span> <span
  m='1536290'>operations</span> <span m='1536820'>costs,</span> <span
  m='1537910'>and</span> <span m='1538190'>that</span> <span
  m='1538410'>cost</span> <span m='1538800'>may</span> <span
  m='1538950'>depend</span> <span m='1539350'>on</span> <span
  m='1539420'>the</span> <span m='1539510'>character</span> <span
  m='1539765'>you're</span> <span m='1540020'>inserting.</span> <span
  m='1541030'>So</span> <span m='1541290'>deleting</span> <span
  m='1541720'>a</span> <span m='1541790'>character</span> <span
  m='1542210'>and</span> <span m='1542270'>then</span> <span
  m='1542400'>inserting</span> <span m='1542790'>a</span> <span
  m='1542850'>different</span> <span m='1543130'>character</span> <span
  m='1543570'>will</span> <span m='1543920'>cost</span> <span
  m='1544350'>one</span> <span m='1544640'>thing.</span> <span
  m='1544900'>It</span> <span m='1544960'>will</span> <span
  m='1545050'>cost</span> <span m='1545650'>the</span> <span
  m='1545760'>sum</span> <span m='1546060'>of</span> <span
  m='1546170'>those</span> <span m='1546410'>two</span> <span
  m='1547060'>cost</span> <span m='1547370'>values.</span> <span
  m='1548170'>Replacing</span> <span m='1549130'>a</span> <span
  m='1549200'>character</span> <span m='1549540'>with</span> <span
  m='1549660'>another</span> <span m='1549890'>character</span> <span
  m='1550170'>might</span> <span m='1550360'>be</span> <span
  m='1550460'>cheaper.</span> <span m='1551770'>It</span> <span
  m='1551895'>depends.</span> <span m='1552020'>Someone</span> <span
  m='1552480'>gives</span> <span m='1552720'>me</span> <span
  m='1553310'>a</span> <span m='1553410'>little</span> <span
  m='1553610'>table,</span> <span m='1554040'>saying</span> <span
  m='1554580'>for</span> <span m='1554700'>this</span> <span
  m='1554960'>character,</span> <span m='1555340'>for</span> <span
  m='1555460'>letter</span> <span m='1555720'>a,</span> <span
  m='1555990'>it</span> <span m='1556190'>costs</span> <span
  m='1556390'>this</span> <span m='1556510'>much</span> <span
  m='1556630'>to</span> <span m='1556760'>insert,</span> <span
  m='1557050'>for</span> <span m='1557150'>letter</span> <span
  m='1557250'>b</span> <span m='1557410'>it</span> <span
  m='1557450'>costs</span> <span m='1557820'>this</span> <span
  m='1557945'>much</span> <span m='1558070'>to</span> <span
  m='1558280'>insert,</span> <span m='1558700'>this</span> <span
  m='1558870'>much</span> <span m='1559080'>to</span> <span
  m='1559170'>delete,</span> <span m='1559850'>and</span> <span
  m='1559980'>there's</span> <span m='1560120'>a</span> <span
  m='1560160'>little</span> <span m='1560340'>matrix</span> <span
  m='1560860'>for,</span> <span m='1561120'>if</span> <span m='1561290'>I</span>
  <span m='1561340'>want</span> <span m='1561500'>to</span> <span
  m='1561640'>convert</span> <span m='1562070'>an</span> <span
  m='1562110'>a</span> <span m='1562150'>into</span> <span m='1562190'>a</span>
  <span m='1562230'>b</span> <span m='1562460'>it</span> <span
  m='1562500'>costs</span> <span m='1562830'>this</span> <span
  m='1563020'>much</span> <span m='1563270'>to</span> <span
  m='1563350'>replace.</span> </p><p><span m='1564250'>Imagine,</span> <span
  m='1564680'>if</span> <span m='1564810'>you</span> <span
  m='1564920'>will,</span> <span m='1566220'>you're</span> <span
  m='1566380'>trying</span> <span m='1566640'>to</span> <span
  m='1566690'>do</span> <span m='1566750'>a</span> <span
  m='1566810'>spelling</span> <span m='1567260'>correction,</span> <span
  m='1569270'>someone's</span> <span m='1569660'>typing</span> <span
  m='1570050'>on</span> <span m='1570120'>a</span> <span
  m='1570180'>keyboard,</span> <span m='1570880'>and</span> <span
  m='1571060'>you</span> <span m='1571130'>have</span> <span
  m='1571330'>some</span> <span m='1571520'>model</span> <span
  m='1571850'>of,</span> <span m='1572040'>oh,</span> <span
  m='1572400'>well</span> <span m='1572580'>if</span> <span m='1572740'>I</span>
  <span m='1572820'>hit</span> <span m='1573470'>a,</span> <span
  m='1573853'>I</span> <span m='1574620'>might</span> <span
  m='1574880'>have</span> <span m='1575020'>meant</span> <span
  m='1575260'>to</span> <span m='1575340'>hit</span> <span m='1575510'>an</span>
  <span m='1575630'>s,</span> <span m='1575860'>because</span> <span
  m='1576090'>s</span> <span m='1576330'>is</span> <span
  m='1576430'>right</span> <span m='1576600'>next</span> <span
  m='1576820'>to</span> <span m='1576950'>an</span> <span m='1577120'>a,</span>
  <span m='1577970'>and</span> <span m='1578120'>that's</span> <span
  m='1578270'>an</span> <span m='1578340'>easy</span> <span
  m='1578720'>mistake</span> <span m='1579120'>to</span> <span
  m='1579220'>make</span> <span m='1579430'>if</span> <span
  m='1579530'>you're</span> <span m='1579630'>not</span> <span
  m='1579840'>touch</span> <span m='1580060'>typing,</span> <span
  m='1582410'>because</span> <span m='1582710'>it's</span> <span
  m='1582990'>on</span> <span m='1583220'>the</span> <span
  m='1583300'>same</span> <span m='1583570'>finger,</span> <span
  m='1584220'>or</span> <span m='1584245'>maybe</span> <span
  m='1584257'>you're</span> <span m='1584270'>shifted</span> <span
  m='1584640'>over</span> <span m='1584870'>by</span> <span
  m='1585010'>one.</span> <span m='1585600'>So</span> <span
  m='1585730'>you</span> <span m='1585840'>can</span> <span
  m='1586080'>come</span> <span m='1586280'>up</span> <span
  m='1586410'>with</span> <span m='1586530'>some</span> <span
  m='1586710'>cost</span> <span m='1587070'>models,</span> <span
  m='1587290'>someone</span> <span m='1587560'>could</span> <span
  m='1587680'>do</span> <span m='1587780'>a</span> <span m='1587830'>lot</span>
  <span m='1588020'>of</span> <span m='1588110'>work</span> <span
  m='1588380'>and</span> <span m='1588460'>research</span> <span
  m='1588900'>and</span> <span m='1588970'>whatnot</span> <span
  m='1589290'>and</span> <span m='1589380'>see</span> <span
  m='1589510'>what</span> <span m='1589730'>are</span> <span
  m='1589810'>typical</span> <span m='1590210'>typos,</span> <span
  m='1591450'>replacing</span> <span m='1592070'>one</span> <span
  m='1592210'>letter</span> <span m='1592440'>for</span> <span
  m='1592590'>another,</span> <span m='1593280'>and</span> <span
  m='1593460'>then</span> <span m='1594060'>associate</span> <span
  m='1594640'>some</span> <span m='1594810'>cost</span> <span
  m='1595280'>for</span> <span m='1595390'>each</span> <span
  m='1595620'>character,</span> <span m='1596330'>for</span> <span
  m='1596430'>each</span> <span m='1596540'>pair</span> <span
  m='1596800'>characters,</span> <span m='1597680'>what's</span> <span
  m='1597800'>the</span> <span m='1597880'>likelihood</span> <span
  m='1598185'>that</span> <span m='1598490'>that</span> <span
  m='1598650'>was</span> <span m='1599130'>the</span> <span
  m='1599230'>mistake?</span> </p><p><span m='1601680'>I</span> <span
  m='1601710'>call</span> <span m='1602000'>that</span> <span
  m='1602220'>the</span> <span m='1602390'>cost,</span> <span
  m='1603140'>that's</span> <span m='1603520'>the</span> <span
  m='1603720'>unlikeliness.</span> <span m='1604260'>And</span> <span
  m='1604910'>then</span> <span m='1605010'>you</span> <span
  m='1605110'>want</span> <span m='1605240'>to</span> <span
  m='1605290'>minimize</span> <span m='1605800'>the</span> <span
  m='1605890'>sum</span> <span m='1606110'>of</span> <span
  m='1606200'>costs,</span> <span m='1607170'>and</span> <span
  m='1607360'>so</span> <span m='1607530'>you</span> <span
  m='1607700'>want</span> <span m='1607870'>to</span> <span
  m='1607930'>find</span> <span m='1608940'>what</span> <span
  m='1609280'>was</span> <span m='1609550'>the</span> <span
  m='1610500'>least</span> <span m='1610920'>set</span> <span
  m='1611260'>of</span> <span m='1611420'>errors</span> <span
  m='1612490'>that</span> <span m='1612650'>would</span> <span
  m='1613480'>end</span> <span m='1613680'>up</span> <span
  m='1613780'>with</span> <span m='1613910'>this</span> <span
  m='1614090'>word</span> <span m='1614320'>instead</span> <span
  m='1614570'>of</span> <span m='1614640'>this</span> <span
  m='1614800'>word.</span> <span m='1614950'>You</span> <span
  m='1615050'>do</span> <span m='1615170'>that</span> <span
  m='1615340'>on</span> <span m='1615450'>all</span> <span
  m='1615670'>words</span> <span m='1615900'>of</span> <span
  m='1615990'>your</span> <span m='1616070'>dictionary</span> <span
  m='1617050'>and</span> <span m='1617190'>then</span> <span
  m='1617290'>you'll</span> <span m='1617400'>find</span> <span
  m='1617680'>the</span> <span m='1617770'>one</span> <span
  m='1617960'>that</span> <span m='1618050'>was</span> <span
  m='1618190'>most</span> <span m='1618510'>likely</span> <span
  m='1619070'>what</span> <span m='1619210'>you</span> <span
  m='1619310'>meant</span> <span m='1619510'>to</span> <span
  m='1619600'>type.</span> <span m='1620890'>And</span> <span
  m='1621320'>insertions</span> <span m='1621790'>and</span> <span
  m='1621890'>deletions</span> <span m='1622360'>are,</span> <span
  m='1622600'>I</span> <span m='1623600'>didn't</span> <span
  m='1623850'>hit</span> <span m='1624030'>the</span> <span
  m='1624120'>key</span> <span m='1624330'>hard</span> <span
  m='1624570'>enough,</span> <span m='1625580'>or</span> <span
  m='1625810'>I</span> <span m='1625880'>hit</span> <span m='1626050'>it</span>
  <span m='1626170'>twice,</span> <span m='1626860'>or</span> <span
  m='1627080'>accidentally</span> <span m='1627690'>hit</span> <span
  m='1627810'>a</span> <span m='1627860'>key</span> <span
  m='1628510'>because</span> <span m='1628700'>it</span> <span
  m='1628760'>was</span> <span m='1628900'>right</span> <span
  m='1629050'>next</span> <span m='1629260'>to</span> <span
  m='1629330'>another</span> <span m='1629590'>one,</span> <span
  m='1629840'>or</span> <span m='1629940'>whatever.</span> </p><p><span
  m='1631980'>OK,</span> <span m='1632150'>so</span> <span
  m='1632330'>this</span> <span m='1632560'>is</span> <span
  m='1632660'>used</span> <span m='1632830'>for</span> <span
  m='1632930'>spelling</span> <span m='1633250'>correction.</span> <span
  m='1633720'>It's</span> <span m='1633890'>used</span> <span
  m='1634150'>for</span> <span m='1634310'>comparing</span> <span
  m='1634730'>DNA</span> <span m='1635100'>sequences,</span> <span
  m='1635630'>and</span> <span m='1635720'>DNA</span> <span
  m='1636060'>sequences,</span> <span m='1638150'>if</span> <span
  m='1638280'>you</span> <span m='1638370'>have</span> <span
  m='1638520'>one</span> <span m='1638780'>strand</span> <span
  m='1639030'>of</span> <span m='1639120'>DNA,</span> <span
  m='1639790'>there's</span> <span m='1639910'>a</span> <span
  m='1639970'>lot</span> <span m='1640140'>of</span> <span
  m='1640190'>mutation--</span> <span m='1640730'>some</span> <span
  m='1640960'>mutations</span> <span m='1641510'>are</span> <span
  m='1641580'>more</span> <span m='1641760'>likely</span> <span
  m='1642050'>than</span> <span m='1642220'>others.</span> <span
  m='1642870'>For</span> <span m='1642970'>example,</span> <span
  m='1643240'>c</span> <span m='1643323'>to</span> <span m='1643407'>a</span>
  <span m='1643491'>g</span> <span m='1643910'>mutation</span> <span
  m='1644850'>is</span> <span m='1645030'>more</span> <span
  m='1645280'>common</span> <span m='1645730'>than</span> <span
  m='1645960'>c</span> <span m='1646420'>to</span> <span m='1646560'>an</span>
  <span m='1646650'>a</span> <span m='1647530'>mutation,</span> <span
  m='1648240'>and</span> <span m='1648370'>so</span> <span
  m='1648520'>you</span> <span m='1648800'>give</span> <span
  m='1649040'>this</span> <span m='1649740'>replacement</span> <span
  m='1650450'>a</span> <span m='1650520'>high</span> <span
  m='1650750'>cost,</span> <span m='1651650'>you</span> <span
  m='1651760'>give</span> <span m='1651940'>this</span> <span
  m='1652130'>one</span> <span m='1652420'>a</span> <span m='1652500'>low</span>
  <span m='1652700'>cost,</span> <span m='1653080'>to</span> <span
  m='1653460'>represent</span> <span m='1653940'>this</span> <span
  m='1654080'>is</span> <span m='1654200'>more</span> <span
  m='1654390'>likely</span> <span m='1654710'>than</span> <span
  m='1654880'>this.</span> </p><p><span m='1655500'>And</span> <span
  m='1655690'>then</span> <span m='1655840'>at</span> <span m='1655950'>a</span>
  <span m='1656010'>distance</span> <span m='1656360'>will</span> <span
  m='1656470'>give</span> <span m='1656620'>your</span> <span
  m='1656740'>measure</span> <span m='1657110'>of</span> <span
  m='1657180'>how</span> <span m='1657470'>similar</span> <span
  m='1659260'>two</span> <span m='1659380'>DNA</span> <span
  m='1659730'>strings</span> <span m='1660050'>are</span> <span
  m='1660190'>evolutionarily.</span> <span m='1661190'>And</span> <span
  m='1661620'>you</span> <span m='1661800'>also</span> <span
  m='1662070'>get</span> <span m='1662470'>extra</span> <span
  m='1662810'>characters</span> <span m='1663730'>randomly</span> <span
  m='1664230'>inserted</span> <span m='1664620'>and</span> <span
  m='1664740'>deleted</span> <span m='1665630'>in</span> <span
  m='1665810'>mutation.</span> <span m='1666560'>So,</span> <span
  m='1668160'>it's</span> <span m='1668370'>a</span> <span
  m='1668420'>simplified</span> <span m='1668940'>model</span> <span
  m='1669250'>of</span> <span m='1669330'>what</span> <span
  m='1669410'>happens</span> <span m='1669870'>in</span> <span
  m='1670420'>mutation,</span> <span m='1670900'>but</span> <span
  m='1672240'>still</span> <span m='1672530'>it's</span> <span
  m='1672580'>used</span> <span m='1672740'>a</span> <span
  m='1672810'>lot.</span> <span m='1673760'>So</span> <span
  m='1673950'>all</span> <span m='1674130'>these</span> <span
  m='1674350'>are</span> <span m='1674440'>encompassed</span> <span
  m='1675010'>by</span> <span m='1675320'>edit</span> <span
  m='1675480'>distance.</span> </p><p><span m='1676530'>Another</span> <span
  m='1676880'>problem</span> <span m='1678340'>encompassed</span> <span
  m='1678960'>by</span> <span m='1679320'>edit</span> <span
  m='1679570'>distance</span> <span m='1680020'>is</span> <span
  m='1680300'>the</span> <span m='1681440'>longest</span> <span
  m='1682290'>common</span> <span m='1682750'>subsequence</span> <span
  m='1683390'>problem.</span> <span m='1695280'>And</span> <span
  m='1695470'>I</span> <span m='1695530'>have</span> <span m='1695850'>a</span>
  <span m='1696140'>fun</span> <span m='1696260'>example,</span> <span
  m='1697560'>which</span> <span m='1698000'>I</span> <span
  m='1698040'>spent</span> <span m='1699910'>some</span> <span
  m='1700220'>hours,</span> <span m='1700950'>way</span> <span
  m='1701190'>back</span> <span m='1701430'>when,</span> <span
  m='1701800'>coming</span> <span m='1702090'>up</span> <span
  m='1702220'>with.</span> <span m='1703570'>I</span> <span
  m='1703660'>can't</span> <span m='1703920'>spell</span> <span
  m='1704210'>it,</span> <span m='1704592'>though.</span> <span
  m='1705740'>It's</span> <span m='1705825'>such</span> <span
  m='1705910'>a</span> <span m='1706130'>weird</span> <span
  m='1706370'>word.</span> <span m='1707060'>Hieroglyphology</span> <span
  m='1709010'>is</span> <span m='1709130'>an</span> <span
  m='1709230'>English</span> <span m='1709500'>word</span> <span
  m='1712640'>and</span> <span m='1713150'>Michelangelo</span> <span
  m='1713595'>is</span> <span m='1714040'>another</span> <span
  m='1714390'>English</span> <span m='1714690'>word,</span> <span
  m='1714950'>if</span> <span m='1715070'>you</span> <span
  m='1715240'>allow</span> <span m='1715430'>proper</span> <span
  m='1715780'>nouns,</span> <span m='1716740'>unlike</span> <span
  m='1717090'>Scrabble.</span> </p><p><span m='1721180'>So,</span> <span
  m='1721530'>think</span> <span m='1721730'>of</span> <span
  m='1721800'>these</span> <span m='1722010'>as</span> <span
  m='1722100'>strings.</span> <span m='1723160'>This</span> <span
  m='1724020'>is</span> <span m='1724110'>x,</span> <span
  m='1724370'>this</span> <span m='1724530'>is</span> <span
  m='1724630'>y.</span> <span m='1724960'>What</span> <span
  m='1725260'>is</span> <span m='1725360'>the</span> <span
  m='1725490'>longest</span> <span m='1726170'>common</span> <span
  m='1726720'>subsequence?</span> <span m='1727950'>So</span> <span
  m='1728100'>not</span> <span m='1728350'>substring,</span> <span
  m='1729300'>I</span> <span m='1729400'>get</span> <span m='1729660'>to</span>
  <span m='1729780'>choose--</span> <span m='1730310'>I</span> <span
  m='1730390'>can</span> <span m='1730560'>drop</span> <span
  m='1730930'>any</span> <span m='1731130'>set</span> <span
  m='1731310'>of</span> <span m='1731380'>letters</span> <span
  m='1731700'>from</span> <span m='1731960'>x,</span> <span
  m='1732630'>drop</span> <span m='1732930'>any</span> <span
  m='1733080'>set</span> <span m='1733260'>of</span> <span
  m='1733330'>letters</span> <span m='1733610'>from</span> <span
  m='1733810'>y,</span> <span m='1734740'>and</span> <span m='1735450'>I</span>
  <span m='1735550'>want</span> <span m='1735800'>them</span> <span
  m='1735980'>to,</span> <span m='1736160'>in</span> <span
  m='1736340'>the</span> <span m='1736450'>end,</span> <span
  m='1736640'>be</span> <span m='1736750'>equal.</span> <span
  m='1739000'>It's</span> <span m='1739055'>a</span> <span
  m='1739110'>puzzle</span> <span m='1739430'>for</span> <span
  m='1739660'>you.</span> <span m='1740620'>While</span> <span
  m='1740820'>you're</span> <span m='1740940'>thinking</span> <span
  m='1741260'>about</span> <span m='1741540'>it,</span> <span
  m='1742610'>you</span> <span m='1742810'>can</span> <span
  m='1742950'>model</span> <span m='1743280'>this</span> <span
  m='1743620'>as</span> <span m='1743830'>an</span> <span
  m='1743910'>edit</span> <span m='1744120'>distance</span> <span
  m='1744480'>problem,</span> <span m='1745250'>you</span> <span
  m='1745390'>just</span> <span m='1745600'>define</span> <span
  m='1746550'>the</span> <span m='1747010'>cost</span> <span
  m='1748020'>of</span> <span m='1748610'>an</span> <span
  m='1748690'>insert</span> <span m='1751090'>or</span> <span
  m='1751330'>a</span> <span m='1751360'>delete</span> <span
  m='1753730'>to</span> <span m='1754200'>be</span> <span m='1754390'>1,</span>
  <span m='1755820'>and</span> <span m='1756150'>the</span> <span
  m='1756250'>cost</span> <span m='1756680'>of</span> <span m='1756860'>a</span>
  <span m='1756910'>replace</span> <span m='1760080'>to</span> <span
  m='1760190'>be</span> <span m='1763260'>0.</span> <span m='1764180'>So</span>
  <span m='1764350'>this</span> <span m='1764560'>is</span> <span
  m='1764680'>a</span> <span m='1764760'>c</span> <span m='1764955'>to</span>
  <span m='1765260'>c</span> <span m='1765370'>prime</span> <span
  m='1765750'>replacement.</span> </p><p><span m='1766690'>It's</span> <span
  m='1766820'>going</span> <span m='1766930'>to</span> <span
  m='1766980'>be</span> <span m='1767080'>0</span> <span m='1767940'>if</span>
  <span m='1768110'>c</span> <span m='1768410'>equals</span> <span
  m='1768690'>c</span> <span m='1768920'>prime,</span> <span
  m='1770210'>and</span> <span m='1770620'>I</span> <span
  m='1770690'>guess</span> <span m='1771460'>infinity</span> <span
  m='1771980'>otherwise.</span> <span m='1772970'>You</span> <span
  m='1773830'>just</span> <span m='1774010'>don't</span> <span
  m='1774250'>consider</span> <span m='1774810'>it</span> <span
  m='1775240'>in</span> <span m='1775670'>that</span> <span
  m='1775810'>situation.</span> <span m='1778200'>Can</span> <span
  m='1778275'>anyone</span> <span m='1778350'>find</span> <span
  m='1778590'>the</span> <span m='1778710'>longest</span> <span
  m='1778960'>common</span> <span m='1779260'>subsequence</span> <span
  m='1779740'>here?</span> <span m='1781470'>It's</span> <span
  m='1781570'>in</span> <span m='1781640'>English</span> <span
  m='1781890'>word,</span> <span m='1782600'>that's</span> <span
  m='1782735'>a</span> <span m='1782870'>hint.</span> <span
  m='1786050'>So</span> <span m='1786220'>if</span> <span m='1786320'>you</span>
  <span m='1786430'>do</span> <span m='1786600'>this</span> <span
  m='1786950'>you're,</span> <span m='1787070'>basically</span> <span
  m='1787540'>trying</span> <span m='1787750'>to</span> <span
  m='1787810'>minimize</span> <span m='1788300'>number</span> <span
  m='1788500'>of</span> <span m='1788580'>insertions</span> <span
  m='1789070'>and</span> <span m='1789190'>deletions.</span> <span
  m='1790200'>Insertions</span> <span m='1790800'>in</span> <span
  m='1790910'>x</span> <span m='1791970'>correspond</span> <span
  m='1792450'>to</span> <span m='1792570'>deletions</span> <span
  m='1793060'>in</span> <span m='1793180'>y,</span> <span m='1795140'>and</span>
  <span m='1795310'>deletions</span> <span m='1795730'>in</span> <span
  m='1795820'>x</span> <span m='1796020'>correspond</span> <span
  m='1796240'>to</span> <span m='1796460'>deletions</span> <span
  m='1796870'>in</span> <span m='1796960'>x.</span> <span m='1797440'>So</span>
  <span m='1797780'>this</span> <span m='1797970'>is</span> <span
  m='1798060'>the</span> <span m='1798160'>minimum</span> <span
  m='1798480'>number</span> <span m='1798690'>of</span> <span
  m='1798750'>deletions</span> <span m='1799740'>in</span> <span
  m='1800610'>both</span> <span m='1800820'>strings,</span> <span
  m='1801700'>so</span> <span m='1801880'>you</span> <span
  m='1802090'>end</span> <span m='1802290'>up</span> <span
  m='1802500'>with</span> <span m='1802690'>a</span> <span
  m='1802780'>common</span> <span m='1803160'>substring.</span> </p><p><span
  m='1803960'>Because</span> <span m='1804140'>replacement</span> <span
  m='1804710'>says,</span> <span m='1805540'>I</span> <span
  m='1805690'>don't</span> <span m='1805830'>pay</span> <span
  m='1806020'>anything</span> <span m='1806450'>if</span> <span
  m='1806570'>the</span> <span m='1806930'>characters</span> <span
  m='1807270'>match</span> <span m='1807490'>exactly,</span> <span
  m='1808080'>otherwise</span> <span m='1808520'>I</span> <span
  m='1808590'>pay</span> <span m='1808870'>everything.</span> <span
  m='1809710'>I'd</span> <span m='1809930'>never</span> <span
  m='1810250'>want</span> <span m='1810430'>to</span> <span
  m='1810500'>do</span> <span m='1810650'>this,</span> <span
  m='1811040'>so</span> <span m='1811420'>if</span> <span
  m='1811590'>there's</span> <span m='1811740'>a</span> <span
  m='1811790'>mismatch</span> <span m='1812260'>I</span> <span
  m='1812300'>have</span> <span m='1812530'>to</span> <span
  m='1812640'>delete</span> <span m='1812970'>it.</span> <span
  m='1813900'>And</span> <span m='1814150'>so</span> <span
  m='1814270'>this</span> <span m='1814630'>model</span> <span
  m='1814830'>is</span> <span m='1815030'>the</span> <span
  m='1815110'>same</span> <span m='1815390'>thing</span> <span
  m='1815620'>as</span> <span m='1815730'>long</span> <span
  m='1815940'>as</span> <span m='1816060'>common</span> <span
  m='1816335'>subsequence.</span> <span m='1817210'>I</span> <span
  m='1817300'>want</span> <span m='1817470'>to</span> <span
  m='1817530'>solve</span> <span m='1817760'>this</span> <span
  m='1817900'>more</span> <span m='1818060'>general</span> <span
  m='1818390'>problem,</span> <span m='1819210'>it's</span> <span
  m='1819320'>actually</span> <span m='1819610'>easier</span> <span
  m='1819870'>to</span> <span m='1819940'>solve</span> <span
  m='1820200'>the</span> <span m='1820240'>more</span> <span
  m='1820410'>general</span> <span m='1820720'>problem,</span> <span
  m='1820990'>but</span> <span m='1821170'>in</span> <span
  m='1821270'>particular,</span> <span m='1821870'>you</span> <span
  m='1821920'>can</span> <span m='1822010'>use</span> <span
  m='1822220'>it</span> <span m='1822620'>to</span> <span
  m='1822710'>solve</span> <span m='1822990'>this</span> <span
  m='1823150'>tricky</span> <span m='1823440'>problem.</span> <span
  m='1823850'>Any</span> <span m='1824035'>answers?</span> <span
  m='1826060'>Yeah.</span> <span m='1826550'>Hello.</span> <span
  m='1827000'>Very</span> <span m='1827165'>good.</span> <span
  m='1828098'>Hello</span> <span m='1829970'>is</span> <span
  m='1830200'>the</span> <span m='1830350'>longest</span> <span
  m='1830820'>common</span> <span m='1831235'>subsequence.</span> <span
  m='1834700'>You</span> <span m='1834840'>can</span> <span
  m='1834950'>imagine</span> <span m='1835320'>how</span> <span
  m='1835420'>I</span> <span m='1835520'>found</span> <span
  m='1835890'>that.</span> <span m='1837760'>Searching</span> <span
  m='1838200'>for</span> <span m='1838360'>all</span> <span
  m='1838870'>English</span> <span m='1839170'>words</span> <span
  m='1839430'>that</span> <span m='1839530'>have</span> <span
  m='1839690'>"hello"</span> <span m='1840150'>as</span> <span
  m='1840195'>the</span> <span m='1840240'>subsequence.</span> <span
  m='1841990'>That</span> <span m='1842690'>can</span> <span
  m='1842900'>also</span> <span m='1843170'>be</span> <span
  m='1843280'>done</span> <span m='1843460'>in</span> <span
  m='1843530'>polynomial</span> <span m='1844030'>time.</span> </p><p><span
  m='1849390'>So</span> <span m='1853330'>how</span> <span
  m='1853600'>are</span> <span m='1853670'>we</span> <span
  m='1853740'>going</span> <span m='1853880'>to</span> <span
  m='1853960'>do</span> <span m='1854120'>this?</span> <span
  m='1854860'>Well,</span> <span m='1854970'>I'd</span> <span
  m='1855070'>like</span> <span m='1855280'>to</span> <span
  m='1855380'>somehow</span> <span m='1855720'>use</span> <span
  m='1855990'>subproblems</span> <span m='1856600'>for</span> <span
  m='1856750'>strings,</span> <span m='1857680'>suffixes,</span> <span
  m='1858210'>prefixes,</span> <span m='1858890'>or</span> <span
  m='1859200'>substrings.</span> <span m='1860860'>But</span> <span
  m='1860990'>now</span> <span m='1861160'>I</span> <span
  m='1861260'>have</span> <span m='1861440'>two</span> <span
  m='1861640'>strings,</span> <span m='1862760'>that's</span> <span
  m='1862830'>kind</span> <span m='1863000'>of</span> <span
  m='1863080'>annoying.</span> <span m='1864550'>But</span> <span
  m='1864990'>don't</span> <span m='1865160'>worry,</span> <span
  m='1865790'>we</span> <span m='1866060'>can</span> <span m='1866280'>do</span>
  <span m='1866990'>sort</span> <span m='1867110'>of</span> <span
  m='1867230'>dynamic</span> <span m='1867670'>programming</span> <span
  m='1868120'>simultaneously</span> <span m='1869000'>over</span> <span
  m='1869230'>x</span> <span m='1869480'>and</span> <span m='1869780'>y.</span>
  <span m='1871060'>What</span> <span m='1871300'>we're</span> <span
  m='1871450'>going</span> <span m='1871570'>to</span> <span
  m='1871680'>do</span> <span m='1871900'>is</span> <span
  m='1872170'>look</span> <span m='1872450'>at</span> <span
  m='1873000'>suffixes</span> <span m='1873580'>of</span> <span
  m='1873700'>x</span> <span m='1874140'>and</span> <span
  m='1874400'>suffixes</span> <span m='1874910'>of</span> <span
  m='1875010'>y,</span> <span m='1876490'>and</span> <span m='1876790'>to</span>
  <span m='1876900'>make</span> <span m='1877100'>our</span> <span
  m='1877200'>subproblems</span> <span m='1878140'>we</span> <span
  m='1878350'>need</span> <span m='1878580'>to</span> <span
  m='1879500'>combine</span> <span m='1880160'>all</span> <span
  m='1880390'>of</span> <span m='1880480'>those</span> <span
  m='1880660'>subproblems</span> <span m='1885660'>by</span> <span
  m='1885790'>multiplication.</span> </p><p><span m='1887260'>We</span> <span
  m='1887340'>need</span> <span m='1887510'>to</span> <span
  m='1887580'>think</span> <span m='1887770'>about</span> <span
  m='1888290'>both</span> <span m='1888560'>of</span> <span
  m='1888620'>them</span> <span m='1888740'>simultaneously.</span> <span
  m='1890670'>So</span> <span m='1890840'>subproblem</span> <span
  m='1891460'>is</span> <span m='1891680'>going</span> <span
  m='1891920'>to</span> <span m='1892060'>be</span> <span
  m='1894950'>solve</span> <span m='1895430'>edit</span> <span
  m='1895680'>distance,</span> <span m='1897650'>edit</span> <span
  m='1898020'>distance</span> <span m='1898160'>problem</span> <span
  m='1898600'>on</span> <span m='1898860'>two</span> <span
  m='1899070'>different</span> <span m='1899430'>strings,</span> <span
  m='1902840'>a</span> <span m='1903000'>suffix</span> <span
  m='1903540'>of</span> <span m='1903700'>x</span> <span m='1905920'>and</span>
  <span m='1906190'>a</span> <span m='1906270'>possibly</span> <span
  m='1906710'>different</span> <span m='1907110'>suffix</span> <span
  m='1907520'>of</span> <span m='1907620'>y.</span> <span
  m='1909910'>Because</span> <span m='1910050'>this</span> <span
  m='1910190'>is</span> <span m='1910330'>for</span> <span
  m='1910470'>all</span> <span m='1911080'>possible</span> <span
  m='1911750'>i</span> <span m='1911850'>and</span> <span m='1912110'>j</span>
  <span m='1912370'>choices.</span> <span m='1913490'>And</span> <span
  m='1913710'>so</span> <span m='1913860'>the</span> <span
  m='1913970'>number</span> <span m='1914240'>of</span> <span
  m='1914300'>subproblems</span> <span m='1919210'>is?</span> </p><p><span
  m='1932205'>AUDIENCE: N</span> <span m='1932453'>squared.</span> </p><p><span
  m='1933210'>PROFESSOR: N</span> <span m='1933450'>squared,</span> <span
  m='1933745'>yes.</span> <span m='1934710'>If</span> <span m='1934920'>x</span>
  <span m='1935160'>is</span> <span m='1935270'>of</span> <span
  m='1935350'>length</span> <span m='1935620'>n</span> <span
  m='1935750'>and</span> <span m='1935850'>y</span> <span m='1936050'>is</span>
  <span m='1936160'>of</span> <span m='1936250'>length</span> <span
  m='1936440'>n,</span> <span m='1937020'>there's</span> <span
  m='1937240'>n</span> <span m='1937490'>choices</span> <span
  m='1937740'>for</span> <span m='1937810'>this,</span> <span
  m='1938030'>n</span> <span m='1938190'>choices</span> <span
  m='1938530'>for</span> <span m='1938610'>that,</span> <span
  m='1938870'>and</span> <span m='1938910'>we</span> <span
  m='1938950'>have</span> <span m='1939040'>to</span> <span
  m='1939130'>do</span> <span m='1939310'>all</span> <span m='1939570'>of</span>
  <span m='1939650'>them</span> <span m='1939870'>as</span> <span
  m='1940010'>pairs,</span> <span m='1940680'>if</span> <span
  m='1940920'>there's</span> <span m='1941070'>n</span> <span
  m='1941250'>squared</span> <span m='1941580'>pairs.</span> <span
  m='1942370'>In</span> <span m='1942540'>general,</span> <span
  m='1942970'>if</span> <span m='1943070'>they</span> <span
  m='1943170'>have</span> <span m='1943310'>different</span> <span
  m='1943580'>lengths,</span> <span m='1943940'>it's</span> <span
  m='1944150'>going</span> <span m='1944270'>to</span> <span
  m='1944330'>be</span> <span m='1944600'>the</span> <span
  m='1944680'>length</span> <span m='1944900'>of</span> <span
  m='1944990'>x</span> <span m='1945210'>times</span> <span
  m='1945440'>length</span> <span m='1945610'>of</span> <span
  m='1945710'>y.</span> <span m='1946350'>It's</span> <span
  m='1946560'>quadratic.</span> <span m='1949520'>Good.</span> <span
  m='1950290'>So,</span> <span m='1951930'>next</span> <span
  m='1952130'>we</span> <span m='1952170'>need</span> <span
  m='1952310'>to</span> <span m='1952370'>guess</span> <span
  m='1952600'>something,</span> <span m='1953200'>step</span> <span
  m='1953540'>2.</span> <span m='1958810'>This</span> <span
  m='1959040'>is</span> <span m='1961010'>maybe</span> <span
  m='1961310'>not</span> <span m='1961530'>so</span> <span
  m='1961770'>obvious,</span> <span m='1962040'>let's</span> <span
  m='1962200'>see.</span> <span m='1962310'>You</span> <span
  m='1962440'>have</span> <span m='1964570'>here's</span> <span
  m='1965530'>x,</span> <span m='1966930'>starting</span> <span
  m='1967320'>at</span> <span m='1967400'>position</span> <span
  m='1967800'>i.</span> <span m='1968760'>You</span> <span
  m='1968920'>have</span> <span m='1970250'>y</span> <span
  m='1970850'>starting</span> <span m='1971250'>at</span> <span
  m='1971380'>position</span> <span m='1971730'>j.</span> </p><p><span
  m='1974040'>Somehow</span> <span m='1974270'>I</span> <span
  m='1974400'>need</span> <span m='1974560'>to</span> <span
  m='1974640'>convert</span> <span m='1975050'>x</span> <span
  m='1975370'>into</span> <span m='1975700'>y,</span> <span m='1976000'>I</span>
  <span m='1976090'>think</span> <span m='1976290'>it's</span> <span
  m='1976460'>probably</span> <span m='1976720'>better</span> <span
  m='1976975'>if</span> <span m='1977230'>I</span> <span m='1977313'>line</span>
  <span m='1977396'>these</span> <span m='1977480'>up,</span> <span
  m='1979310'>even</span> <span m='1979450'>though</span> <span
  m='1980205'>in</span> <span m='1980490'>some</span> <span
  m='1980670'>sense</span> <span m='1980910'>they're</span> <span
  m='1980970'>not</span> <span m='1981160'>lined</span> <span
  m='1981410'>up,</span> <span m='1981870'>that's</span> <span
  m='1981990'>OK.</span> <span m='1983450'>I</span> <span
  m='1983510'>want</span> <span m='1983700'>to</span> <span
  m='1983750'>convert</span> <span m='1984080'>x</span> <span
  m='1984310'>into</span> <span m='1984530'>y.</span> <span
  m='1987020'>What</span> <span m='1987190'>should</span> <span
  m='1987460'>I</span> <span m='1987520'>look</span> <span m='1987780'>at</span>
  <span m='1987900'>here?</span> <span m='1988100'>Well,</span> <span
  m='1988170'>I</span> <span m='1988240'>should</span> <span
  m='1988420'>look</span> <span m='1988630'>at</span> <span
  m='1988890'>the</span> <span m='1988980'>very</span> <span
  m='1989230'>first</span> <span m='1989590'>characters,</span> <span
  m='1990210'>because</span> <span m='1990480'>we're</span> <span
  m='1990580'>looking</span> <span m='1990800'>at</span> <span
  m='1990910'>suffixes.</span> <span m='1991470'>We</span> <span
  m='1991560'>want</span> <span m='1991750'>to</span> <span
  m='1992120'>cut</span> <span m='1992320'>off</span> <span
  m='1992520'>first</span> <span m='1992760'>characters</span> <span
  m='1993130'>somehow.</span> <span m='1996770'>How</span> <span
  m='1997090'>could</span> <span m='1997250'>it--</span> <span
  m='1997550'>what</span> <span m='1997750'>are</span> <span
  m='1997810'>the</span> <span m='1997960'>possible</span> <span
  m='1998370'>ways</span> <span m='1998590'>to</span> <span
  m='1998710'>convert,</span> <span m='2000470'>or</span> <span
  m='2000570'>to</span> <span m='2000670'>deal</span> <span
  m='2000920'>with</span> <span m='2001070'>the</span> <span
  m='2001140'>first</span> <span m='2001450'>character</span> <span
  m='2001850'>of</span> <span m='2001920'>x?</span> <span
  m='2002730'>What</span> <span m='2002790'>are</span> <span
  m='2002850'>the</span> <span m='2002990'>possible</span> <span
  m='2003430'>things</span> <span m='2003700'>I</span> <span
  m='2003770'>could</span> <span m='2003960'>do?</span> <span
  m='2007220'>Given</span> <span m='2007450'>that,</span> <span
  m='2007560'>ultimately,</span> <span m='2008110'>I</span> <span
  m='2008180'>want</span> <span m='2008450'>the</span> <span
  m='2008520'>first</span> <span m='2008760'>character</span> <span
  m='2009060'>of</span> <span m='2009140'>x</span> <span m='2009330'>to</span>
  <span m='2009450'>become</span> <span m='2009860'>the</span> <span
  m='2009940'>first</span> <span m='2010170'>character</span> <span
  m='2010570'>of</span> <span m='2010720'>y.</span> </p><p><span
  m='2016822'>AUDIENCE: Delete</span> <span m='2017318'>[INAUDIBLE].</span>
  </p><p><span m='2018810'>PROFESSOR: You</span> <span m='2018930'>could</span>
  <span m='2019070'>delete</span> <span m='2019360'>this</span> <span
  m='2019530'>character</span> <span m='2019950'>and</span> <span
  m='2020020'>then</span> <span m='2020150'>insert</span> <span
  m='2020510'>this</span> <span m='2020680'>one,</span> <span
  m='2021230'>yes.</span> <span m='2023430'>Other</span> <span
  m='2023560'>things?</span> <span m='2034500'>There's</span> <span
  m='2034630'>a</span> <span m='2034690'>few</span> <span
  m='2034860'>possibilities.</span> <span m='2039410'>If</span> <span
  m='2039500'>you</span> <span m='2039610'>look</span> <span
  m='2039790'>at</span> <span m='2039890'>it</span> <span
  m='2039950'>right,</span> <span m='2040150'>there</span> <span
  m='2040270'>are</span> <span m='2040320'>three</span> <span
  m='2040570'>possibilities.</span> <span m='2044940'>And</span> <span
  m='2045060'>three</span> <span m='2045250'>possibilities</span> <span
  m='2045930'>are</span> <span m='2046260'>insert,</span> <span
  m='2046660'>delete,</span> <span m='2046960'>or</span> <span
  m='2047030'>replace.</span> <span m='2049020'>So</span> <span
  m='2049219'>let's</span> <span m='2049610'>figure</span> <span
  m='2049830'>out</span> <span m='2049949'>how</span> <span
  m='2050139'>that's</span> <span m='2050469'>the</span> <span
  m='2050560'>case.</span> <span m='2052400'>I</span> <span
  m='2052530'>could</span> <span m='2052860'>replace</span> <span
  m='2053500'>this</span> <span m='2053690'>character</span> <span
  m='2054040'>with</span> <span m='2054159'>that</span> <span
  m='2054350'>character,</span> <span m='2055300'>so</span> <span
  m='2055440'>that's</span> <span m='2055650'>one</span> <span
  m='2055840'>choice.</span> <span m='2057400'>That</span> <span
  m='2057880'>will</span> <span m='2057980'>make</span> <span
  m='2058179'>progress.</span> <span m='2058690'>Once</span> <span
  m='2058900'>I</span> <span m='2058960'>do</span> <span
  m='2059120'>that,</span> <span m='2059659'>I</span> <span
  m='2059780'>can</span> <span m='2059980'>cross</span> <span
  m='2060340'>off</span> <span m='2060520'>those</span> <span
  m='2060710'>first</span> <span m='2060929'>characters</span> <span
  m='2061370'>and</span> <span m='2061500'>deal</span> <span
  m='2061670'>with</span> <span m='2061800'>the</span> <span
  m='2061870'>rest</span> <span m='2062150'>of</span> <span
  m='2062190'>the</span> <span m='2062250'>substrings.</span> </p><p><span
  m='2065110'>Let's</span> <span m='2065270'>think</span> <span
  m='2065420'>about</span> <span m='2065610'>insert</span> <span
  m='2065909'>and</span> <span m='2065989'>delete.</span> <span
  m='2067409'>If</span> <span m='2067570'>I</span> <span
  m='2067620'>wanted</span> <span m='2067840'>to</span> <span
  m='2067920'>insert,</span> <span m='2068590'>presumably,</span> <span
  m='2070320'>I</span> <span m='2070590'>need</span> <span
  m='2070820'>this</span> <span m='2070980'>character</span> <span
  m='2071300'>at</span> <span m='2071380'>some</span> <span
  m='2071550'>point.</span> <span m='2072199'>So</span> <span
  m='2072310'>in</span> <span m='2072380'>order</span> <span
  m='2072540'>to</span> <span m='2072639'>make</span> <span
  m='2072810'>this</span> <span m='2072960'>character,</span> <span
  m='2073370'>if</span> <span m='2073469'>it's</span> <span
  m='2073650'>not</span> <span m='2073840'>going</span> <span
  m='2073940'>to</span> <span m='2074010'>come</span> <span
  m='2074190'>from</span> <span m='2074300'>replacing</span> <span
  m='2074790'>this</span> <span m='2074960'>one,</span> <span
  m='2075550'>it's</span> <span m='2075730'>got</span> <span
  m='2075889'>to</span> <span m='2075949'>be</span> <span
  m='2076110'>from</span> <span m='2076270'>inserting</span> <span
  m='2077270'>that</span> <span m='2077550'>character</span> <span
  m='2078060'>right</span> <span m='2078310'>there.</span> <span
  m='2079790'>Once</span> <span m='2080060'>I</span> <span m='2080120'>do</span>
  <span m='2080300'>that,</span> <span m='2080590'>I</span> <span
  m='2080690'>can</span> <span m='2080710'>cross</span> <span
  m='2081050'>out</span> <span m='2081170'>that</span> <span
  m='2081429'>newly</span> <span m='2081760'>inserted</span> <span
  m='2082040'>character</span> <span m='2082340'>in</span> <span
  m='2082440'>this</span> <span m='2082620'>one,</span> <span
  m='2082969'>and</span> <span m='2083250'>then</span> <span
  m='2083409'>I</span> <span m='2083460'>have</span> <span
  m='2083860'>all</span> <span m='2084085'>of</span> <span
  m='2084310'>the</span> <span m='2084429'>string</span> <span
  m='2084699'>x</span> <span m='2085020'>from</span> <span m='2085190'>i</span>
  <span m='2085570'>onward</span> <span m='2085780'>still,</span> <span
  m='2086510'>but</span> <span m='2086630'>then</span> <span
  m='2086790'>I've</span> <span m='2087080'>removed</span> <span
  m='2087440'>one</span> <span m='2087650'>character</span> <span
  m='2088010'>from</span> <span m='2088159'>y,</span> <span
  m='2088469'>so</span> <span m='2088650'>that's</span> <span
  m='2088880'>progress.</span> </p><p><span m='2090760'>The</span> <span
  m='2090940'>other</span> <span m='2091120'>possibility</span> <span
  m='2091860'>is</span> <span m='2092250'>deletion,</span> <span
  m='2093739'>so</span> <span m='2093929'>maybe</span> <span
  m='2094239'>I</span> <span m='2094320'>delete</span> <span
  m='2094659'>this</span> <span m='2094830'>character,</span> <span
  m='2096530'>and</span> <span m='2096690'>then</span> <span
  m='2097460'>maybe</span> <span m='2097690'>I</span> <span
  m='2097920'>insert</span> <span m='2098190'>it</span> <span
  m='2098260'>in</span> <span m='2098330'>the</span> <span
  m='2098410'>next</span> <span m='2098640'>step,</span> <span
  m='2098920'>but</span> <span m='2099270'>it</span> <span
  m='2099420'>could</span> <span m='2099590'>be</span> <span
  m='2099740'>this</span> <span m='2099980'>character</span> <span
  m='2100360'>matches</span> <span m='2100710'>that</span> <span
  m='2100890'>one,</span> <span m='2101060'>or</span> <span
  m='2101120'>maybe</span> <span m='2101230'>I</span> <span
  m='2101340'>have</span> <span m='2101460'>to</span> <span
  m='2101560'>delete</span> <span m='2101890'>several</span> <span
  m='2102220'>characters</span> <span m='2102750'>before</span> <span
  m='2103080'>I</span> <span m='2103110'>get</span> <span m='2103320'>to</span>
  <span m='2103420'>one</span> <span m='2103550'>that</span> <span
  m='2103660'>matches,</span> <span m='2105780'>something.</span> <span
  m='2106160'>But</span> <span m='2106350'>I</span> <span
  m='2106500'>don't</span> <span m='2106630'>know</span> <span
  m='2106780'>that,</span> <span m='2107070'>so</span> <span
  m='2107520'>that's</span> <span m='2107740'>hard</span> <span
  m='2107940'>to</span> <span m='2107990'>guess,</span> <span
  m='2108410'>because</span> <span m='2109000'>that</span> <span
  m='2109180'>would</span> <span m='2109280'>be</span> <span
  m='2109510'>more</span> <span m='2109720'>time</span> <span
  m='2109980'>to</span> <span m='2110050'>guess.</span> <span
  m='2111310'>But</span> <span m='2111420'>I</span> <span
  m='2111480'>could</span> <span m='2111720'>say,</span> <span
  m='2111950'>well,</span> <span m='2112680'>this</span> <span
  m='2112880'>character</span> <span m='2113180'>might</span> <span
  m='2113350'>get</span> <span m='2113490'>deleted.</span> <span
  m='2114060'>If</span> <span m='2114210'>it</span> <span
  m='2114310'>gets</span> <span m='2114480'>deleted,</span> <span
  m='2117230'>that's</span> <span m='2117400'>it,</span> <span
  m='2118060'>it</span> <span m='2118220'>gets</span> <span
  m='2118400'>deleted.</span> <span m='2119430'>And</span> <span
  m='2119590'>then</span> <span m='2119800'>somehow</span> <span
  m='2120270'>the</span> <span m='2120400'>rest</span> <span
  m='2120680'>of</span> <span m='2120780'>the</span> <span m='2120850'>x,</span>
  <span m='2121320'>from</span> <span m='2121460'>i</span> <span
  m='2121650'>plus</span> <span m='2121890'>1</span> <span
  m='2122077'>on,</span> <span m='2122640'>has</span> <span
  m='2122860'>to</span> <span m='2122950'>match</span> <span
  m='2123240'>with</span> <span m='2123430'>all</span> <span
  m='2123710'>of</span> <span m='2123780'>y,</span> <span
  m='2124120'>from</span> <span m='2124280'>j</span> <span
  m='2124500'>on.</span> </p><p><span m='2126440'>But</span> <span
  m='2126600'>those</span> <span m='2126860'>are</span> <span
  m='2128780'>the</span> <span m='2128890'>three</span> <span
  m='2129090'>possibilities,</span> <span m='2131070'>and</span> <span
  m='2131330'>in</span> <span m='2131490'>some</span> <span
  m='2131700'>sense</span> <span m='2132060'>capture</span> <span
  m='2132500'>all</span> <span m='2133090'>possibilities.</span> <span
  m='2137890'>So</span> <span m='2138240'>it</span> <span
  m='2138390'>could</span> <span m='2138610'>be</span> <span
  m='2139500'>we</span> <span m='2139850'>replace</span> <span
  m='2142500'>xi</span> <span m='2144720'>with</span> <span
  m='2145160'>yj,</span> <span m='2146632'>and</span> <span
  m='2147040'>so</span> <span m='2147200'>that</span> <span
  m='2147360'>has</span> <span m='2147520'>some</span> <span
  m='2147700'>cost,</span> <span m='2148130'>which</span> <span
  m='2148490'>we're</span> <span m='2148640'>given.</span> <span
  m='2149600'>It</span> <span m='2149680'>could</span> <span
  m='2149870'>be</span> <span m='2150000'>that</span> <span
  m='2150150'>we</span> <span m='2150310'>insert</span> <span
  m='2152350'>yj</span> <span m='2152970'>at</span> <span m='2153140'>the</span>
  <span m='2153230'>beginning,</span> <span m='2154450'>or</span> <span
  m='2154670'>it</span> <span m='2154770'>could</span> <span
  m='2154880'>be</span> <span m='2155010'>that</span> <span
  m='2155140'>we</span> <span m='2155260'>delete</span> <span
  m='2155600'>xi.</span> </p><p><span m='2159730'>You</span> <span
  m='2159870'>can</span> <span m='2160010'>see</span> <span
  m='2160310'>that's</span> <span m='2160550'>definitely</span> <span
  m='2160830'>spanning</span> <span m='2161280'>all</span> <span
  m='2161420'>the</span> <span m='2161560'>possible</span> <span
  m='2161900'>operations</span> <span m='2162480'>we</span> <span
  m='2162600'>can</span> <span m='2162720'>do,</span> <span
  m='2162840'>and</span> <span m='2162980'>if</span> <span
  m='2163060'>you</span> <span m='2163180'>think</span> <span
  m='2163300'>about</span> <span m='2163600'>it</span> <span
  m='2164100'>long</span> <span m='2164260'>enough,</span> <span
  m='2164510'>you</span> <span m='2164680'>will</span> <span
  m='2164870'>be</span> <span m='2165040'>convinced</span> <span
  m='2165500'>this</span> <span m='2165780'>really</span> <span
  m='2166090'>covers</span> <span m='2166530'>every</span> <span
  m='2166830'>possible</span> <span m='2167250'>thing</span> <span
  m='2167410'>you</span> <span m='2167520'>can</span> <span
  m='2167670'>do.</span> <span m='2168140'>If</span> <span
  m='2168190'>you</span> <span m='2168240'>think</span> <span
  m='2168420'>about</span> <span m='2168630'>the</span> <span
  m='2168730'>optimal</span> <span m='2169120'>solution,</span> <span
  m='2171050'>it's</span> <span m='2171210'>got</span> <span
  m='2171370'>to</span> <span m='2171440'>do</span> <span
  m='2171560'>something</span> <span m='2172040'>to</span> <span
  m='2172140'>make</span> <span m='2172330'>this</span> <span
  m='2172490'>first</span> <span m='2172740'>character.</span> <span
  m='2173120'>Either</span> <span m='2173390'>it</span> <span
  m='2173485'>does</span> <span m='2173580'>it</span> <span
  m='2173630'>by</span> <span m='2173780'>replacement</span> <span
  m='2174860'>or</span> <span m='2175040'>it</span> <span
  m='2175135'>does</span> <span m='2175230'>it</span> <span
  m='2175333'>by</span> <span m='2175436'>an</span> <span
  m='2175540'>insertion.</span> <span m='2177980'>But</span> <span
  m='2178200'>if</span> <span m='2178440'>it</span> <span
  m='2178530'>inserts</span> <span m='2178900'>it</span> <span
  m='2179000'>later</span> <span m='2179310'>on,</span> <span
  m='2179670'>it's</span> <span m='2179750'>got</span> <span
  m='2179930'>to</span> <span m='2179980'>get</span> <span
  m='2180160'>this</span> <span m='2180340'>out</span> <span
  m='2180500'>of</span> <span m='2180560'>the</span> <span
  m='2180640'>way</span> <span m='2180950'>somehow,</span> <span
  m='2181510'>and</span> <span m='2181730'>that's</span> <span
  m='2181950'>the</span> <span m='2182040'>deletion</span> <span
  m='2182440'>case.</span> <span m='2183440'>If</span> <span
  m='2183525'>it</span> <span m='2183610'>inserts</span> <span
  m='2183695'>it</span> <span m='2183780'>at</span> <span m='2183890'>the</span>
  <span m='2183960'>beginning,</span> <span m='2184340'>that's</span> <span
  m='2184450'>the</span> <span m='2184560'>insertion</span> <span
  m='2184990'>case,</span> <span m='2185390'>if</span> <span
  m='2185540'>it</span> <span m='2185630'>just</span> <span
  m='2185830'>does</span> <span m='2185940'>a</span> <span
  m='2185990'>replacement,</span> <span m='2186560'>that's</span> <span
  m='2186770'>the</span> <span m='2186850'>replace</span> <span
  m='2187200'>case.</span> <span m='2188000'>Those</span> <span
  m='2188210'>are</span> <span m='2188300'>all</span> <span
  m='2188500'>possibilities</span> <span m='2189120'>for</span> <span
  m='2189380'>the</span> <span m='2189510'>optimal</span> <span
  m='2189900'>solution.</span> </p><p><span m='2191990'>Then</span> <span
  m='2192410'>you</span> <span m='2192540'>can</span> <span
  m='2192700'>write</span> <span m='2192880'>a</span> <span
  m='2192920'>recurrence,</span> <span m='2194440'>which</span> <span
  m='2194650'>is</span> <span m='2194760'>just</span> <span m='2194960'>a</span>
  <span m='2195010'>max</span> <span m='2195430'>of</span> <span
  m='2195530'>those</span> <span m='2195770'>things,</span> <span
  m='2196470'>those</span> <span m='2196700'>three</span> <span
  m='2196970'>options.</span> <span m='2199360'>So</span> <span
  m='2200020'>I'm</span> <span m='2200055'>going</span> <span
  m='2200090'>to</span> <span m='2200330'>write,</span> <span
  m='2200760'>I</span> <span m='2200900'>guess,</span> <span
  m='2201190'>dp</span> <span m='2201750'>of</span> <span m='2202470'>ij,</span>
  <span m='2204293'>yes,</span> <span m='2204676'>of</span> <span
  m='2205060'>i,j,</span> <span m='2205540'>but</span> <span
  m='2205850'>now</span> <span m='2206050'>i,j</span> <span
  m='2206580'>is</span> <span m='2206690'>not</span> <span m='2206840'>a</span>
  <span m='2206890'>substring.</span> <span m='2207830'>It's</span> <span
  m='2207990'>a</span> <span m='2208040'>suffix</span> <span
  m='2208430'>of</span> <span m='2208530'>x</span> <span m='2208840'>and</span>
  <span m='2208990'>a</span> <span m='2209050'>suffix</span> <span
  m='2209440'>of</span> <span m='2209550'>y,</span> <span m='2209830'>so</span>
  <span m='2210040'>it</span> <span m='2210250'>corresponds</span> <span
  m='2210710'>to</span> <span m='2210780'>this</span> <span
  m='2210920'>subproblem.</span> <span m='2211420'>If</span> <span
  m='2211540'>I</span> <span m='2211580'>want</span> <span m='2211710'>to</span>
  <span m='2211760'>solve</span> <span m='2212150'>that</span> <span
  m='2212310'>subproblem,</span> <span m='2213290'>it's</span> <span
  m='2213500'>going</span> <span m='2213640'>to</span> <span
  m='2213710'>be</span> <span m='2214370'>the</span> <span
  m='2214480'>min</span> <span m='2216290'>of</span> <span
  m='2216780'>three</span> <span m='2217090'>options.</span> </p><p><span
  m='2218730'>We've</span> <span m='2219020'>got</span> <span
  m='2219990'>the</span> <span m='2220190'>replace</span> <span
  m='2220500'>case,</span> <span m='2221010'>so</span> <span
  m='2221510'>it's</span> <span m='2221640'>going</span> <span
  m='2221790'>to</span> <span m='2221840'>be</span> <span
  m='2221950'>some</span> <span m='2222220'>cost</span> <span
  m='2222840'>of</span> <span m='2224250'>the</span> <span
  m='2224480'>replace,</span> <span m='2226860'>from</span> <span
  m='2228680'>xi</span> <span m='2230630'>to</span> <span m='2230790'>yj.</span>
  <span m='2232660'>So</span> <span m='2232800'>that's</span> <span
  m='2233060'>a</span> <span m='2233120'>quantity</span> <span
  m='2233630'>which</span> <span m='2233830'>we're</span> <span
  m='2233970'>given.</span> <span m='2236400'>Plus</span> <span
  m='2237560'>the</span> <span m='2238560'>cost</span> <span
  m='2238840'>of</span> <span m='2243100'>the</span> <span
  m='2243200'>rest.</span> <span m='2244780'>So</span> <span
  m='2244900'>after</span> <span m='2245200'>we</span> <span
  m='2245360'>do</span> <span m='2245510'>this</span> <span
  m='2245700'>replacement,</span> <span m='2246040'>we</span> <span
  m='2246260'>can</span> <span m='2246360'>cross</span> <span
  m='2246650'>off</span> <span m='2246810'>both</span> <span
  m='2247000'>those</span> <span m='2247190'>characters,</span> <span
  m='2247640'>and</span> <span m='2247730'>so</span> <span m='2247840'>we</span>
  <span m='2247950'>look</span> <span m='2248130'>at</span> <span
  m='2248250'>i</span> <span m='2248350'>plus</span> <span m='2248580'>1</span>
  <span m='2248940'>on</span> <span m='2248995'>for</span> <span
  m='2249050'>x,</span> <span m='2249390'>and</span> <span m='2249570'>j</span>
  <span m='2249710'>plus</span> <span m='2249950'>1</span> <span
  m='2250160'>onwards</span> <span m='2251050'>for</span> <span
  m='2251210'>y.</span> <span m='2252220'>So</span> <span
  m='2252330'>that's</span> <span m='2252580'>option</span> <span
  m='2252940'>1.</span> <span m='2254530'>Then</span> <span
  m='2254980'>comma</span> <span m='2255810'>for</span> <span
  m='2255950'>the</span> <span m='2256060'>min.</span> </p><p><span
  m='2257280'>Option</span> <span m='2257570'>2</span> <span
  m='2258410'>is</span> <span m='2258900'>we</span> <span
  m='2259030'>have</span> <span m='2259420'>the</span> <span
  m='2259510'>cost</span> <span m='2261184'>of</span> <span
  m='2262170'>insert</span> <span m='2265570'>yj.</span> <span
  m='2266680'>So</span> <span m='2266840'>that's</span> <span
  m='2267100'>also</span> <span m='2267370'>something</span> <span
  m='2267730'>we're</span> <span m='2267870'>given.</span> <span
  m='2270220'>Then</span> <span m='2270490'>we</span> <span
  m='2270680'>add</span> <span m='2270960'>on</span> <span
  m='2273040'>what</span> <span m='2273320'>we</span> <span
  m='2273450'>have</span> <span m='2273620'>to</span> <span
  m='2273720'>do</span> <span m='2273840'>afterwards,</span> <span
  m='2274390'>which</span> <span m='2274590'>is</span> <span
  m='2274710'>we've</span> <span m='2274860'>just</span> <span
  m='2275160'>gotten</span> <span m='2275370'>rid</span> <span
  m='2275650'>of</span> <span m='2275840'>yj,</span> <span m='2276610'>so</span>
  <span m='2276890'>x</span> <span m='2277250'>still</span> <span
  m='2277470'>has</span> <span m='2277620'>the</span> <span
  m='2277700'>entire</span> <span m='2278080'>string</span> <span
  m='2278370'>from</span> <span m='2278570'>i</span> <span
  m='2278810'>on,</span> <span m='2280100'>and</span> <span m='2280330'>y</span>
  <span m='2280600'>has</span> <span m='2280890'>a</span> <span
  m='2280930'>smaller</span> <span m='2281320'>string.</span> <span
  m='2283700'>Comma.</span> <span m='2286420'>Last</span> <span
  m='2286730'>option</span> <span m='2287310'>is</span> <span
  m='2287630'>basically</span> <span m='2287940'>the</span> <span
  m='2288050'>same,</span> <span m='2288990'>cost</span> <span
  m='2289390'>of</span> <span m='2289560'>the</span> <span
  m='2289650'>delete,</span> <span m='2292590'>deleting</span> <span
  m='2293110'>xi,</span> <span m='2296480'>and</span> <span
  m='2296700'>then</span> <span m='2296880'>we</span> <span
  m='2296990'>have</span> <span m='2297220'>to</span> <span
  m='2297340'>add</span> <span m='2297620'>on</span> <span m='2298050'>DP</span>
  <span m='2299000'>of</span> <span m='2299290'>i</span> <span
  m='2299450'>plus</span> <span m='2299710'>1j.</span> </p><p><span
  m='2301360'>Because</span> <span m='2301490'>here</span> <span
  m='2301630'>we</span> <span m='2301720'>did</span> <span
  m='2301850'>not</span> <span m='2302060'>advance</span> <span
  m='2302350'>y</span> <span m='2302600'>but</span> <span m='2302730'>we</span>
  <span m='2302850'>advanced</span> <span m='2303220'>x.</span> <span
  m='2304390'>It's</span> <span m='2304650'>crucial</span> <span
  m='2304850'>that</span> <span m='2305000'>we</span> <span
  m='2305190'>always</span> <span m='2305420'>advance</span> <span
  m='2305770'>at</span> <span m='2305850'>least</span> <span
  m='2306130'>one</span> <span m='2306340'>of</span> <span
  m='2306420'>the</span> <span m='2306510'>strings,</span> <span
  m='2307570'>because</span> <span m='2307810'>that</span> <span
  m='2308020'>means</span> <span m='2308350'>we're</span> <span
  m='2308580'>making</span> <span m='2308880'>progress,</span> <span
  m='2310450'>and</span> <span m='2310930'>indeed,</span> <span
  m='2311390'>if</span> <span m='2311530'>you</span> <span
  m='2311670'>want</span> <span m='2311920'>to</span> <span
  m='2311990'>jump</span> <span m='2312330'>to</span> <span
  m='2312580'>step</span> <span m='2312930'>4,</span> <span
  m='2313300'>which</span> <span m='2313490'>is</span> <span
  m='2313660'>topological</span> <span m='2314300'>ordering--</span> <span
  m='2315920'>sorry,</span> <span m='2316020'>I</span> <span
  m='2316360'>reused</span> <span m='2316890'>my</span> <span
  m='2317120'>symbols</span> <span m='2317740'>here,</span> <span
  m='2318580'>some</span> <span m='2318780'>different</span> <span
  m='2319080'>symbols.</span> <span m='2320040'>Head</span> <span
  m='2320310'>back</span> <span m='2320465'>to</span> <span
  m='2320620'>step</span> <span m='2320840'>4</span> <span m='2321110'>of</span>
  <span m='2321315'>DP,</span> <span m='2321930'>topological</span> <span
  m='2322660'>order.</span> </p><p><span m='2324710'>Well,</span> <span
  m='2324870'>these</span> <span m='2325040'>are</span> <span
  m='2325120'>suffixes,</span> <span m='2326490'>and</span> <span
  m='2326700'>so</span> <span m='2326890'>I</span> <span m='2327010'>know</span>
  <span m='2327200'>with</span> <span m='2327250'>suffixes</span> <span
  m='2327820'>I</span> <span m='2327920'>like</span> <span m='2328090'>to</span>
  <span m='2328200'>go</span> <span m='2328390'>from</span> <span
  m='2328570'>the</span> <span m='2328640'>smaller</span> <span
  m='2329010'>suffixes,</span> <span m='2329620'>which</span> <span
  m='2329690'>is</span> <span m='2329790'>the</span> <span
  m='2329930'>end,</span> <span m='2330380'>to</span> <span
  m='2330830'>the</span> <span m='2330910'>beginning.</span> <span
  m='2332110'>And,</span> <span m='2332860'>indeed,</span> <span
  m='2333320'>because</span> <span m='2333600'>we're</span> <span
  m='2333780'>always</span> <span m='2334570'>increasing,</span> <span
  m='2335450'>we're</span> <span m='2335560'>always</span> <span
  m='2335740'>looking</span> <span m='2336070'>at</span> <span
  m='2336710'>later</span> <span m='2337090'>substrings,</span> <span
  m='2338070'>later</span> <span m='2338360'>suffixes,</span> <span
  m='2338880'>for</span> <span m='2339020'>one</span> <span
  m='2339240'>or</span> <span m='2339420'>the</span> <span
  m='2339590'>other.</span> <span m='2340500'>It's</span> <span
  m='2340680'>enough</span> <span m='2340940'>to</span> <span
  m='2341130'>just</span> <span m='2341480'>do--</span> <span
  m='2342912'>come</span> <span m='2343393'>over</span> <span
  m='2343874'>here.</span> <span m='2348690'>To</span> <span
  m='2349070'>just</span> <span m='2349290'>do</span> <span
  m='2349450'>that</span> <span m='2349910'>for</span> <span
  m='2350550'>both</span> <span m='2351140'>of</span> <span
  m='2351310'>the</span> <span m='2351380'>strings,</span> <span
  m='2351750'>it</span> <span m='2351810'>doesn't</span> <span
  m='2352190'>really</span> <span m='2352420'>matter</span> <span
  m='2352810'>the</span> <span m='2353010'>order.</span> <span
  m='2355360'>So</span> <span m='2355590'>you</span> <span
  m='2355790'>can</span> <span m='2355990'>do</span> <span
  m='2356960'>for</span> <span m='2358100'>i</span> <span
  m='2358300'>equals</span> <span m='2360230'>x</span> <span
  m='2361360'>down</span> <span m='2361720'>to</span> <span
  m='2361830'>zero,</span> <span m='2364040'>for</span> <span
  m='2364295'>j</span> <span m='2364550'>equals</span> <span
  m='2365010'>y</span> <span m='2365390'>down</span> <span m='2365660'>to</span>
  <span m='2365750'>zero,</span> <span m='2369860'>and</span> <span
  m='2370020'>that</span> <span m='2370220'>will</span> <span
  m='2370410'>work.</span> </p><p><span m='2372100'>Now</span> <span
  m='2372230'>this</span> <span m='2372440'>is</span> <span
  m='2372570'>another</span> <span m='2372880'>dynamic</span> <span
  m='2373270'>programming</span> <span m='2373740'>you</span> <span
  m='2373890'>can</span> <span m='2374030'>think</span> <span
  m='2374260'>of</span> <span m='2374410'>as</span> <span
  m='2374550'>just</span> <span m='2374710'>shortest</span> <span
  m='2375050'>paths</span> <span m='2375310'>in</span> <span
  m='2375370'>the</span> <span m='2375460'>DAG.</span> <span
  m='2376180'>The</span> <span m='2376540'>DAG</span> <span
  m='2377600'>is</span> <span m='2377790'>most</span> <span
  m='2378090'>easily</span> <span m='2378370'>seen</span> <span
  m='2378580'>as</span> <span m='2378710'>a</span> <span
  m='2379030'>two-dimensional</span> <span m='2379610'>matrix,</span> <span
  m='2381180'>where</span> <span m='2381490'>the</span> <span
  m='2381855'>i</span> <span m='2382220'>index</span> <span
  m='2383680'>is</span> <span m='2383860'>between</span> <span
  m='2384340'>zero</span> <span m='2384850'>and</span> <span
  m='2385140'>length</span> <span m='2385370'>of</span> <span
  m='2385480'>x,</span> <span m='2388100'>and</span> <span
  m='2388420'>the</span> <span m='2388510'>j</span> <span
  m='2388742'>index</span> <span m='2389880'>is</span> <span
  m='2390320'>between</span> <span m='2390630'>zero</span> <span
  m='2391170'>and</span> <span m='2391570'>length</span> <span
  m='2391830'>of</span> <span m='2391920'>y,</span> <span m='2392700'>and</span>
  <span m='2392890'>each</span> <span m='2393090'>of</span> <span
  m='2393160'>the</span> <span m='2393260'>cells</span> <span
  m='2393720'>in</span> <span m='2393820'>this</span> <span
  m='2393990'>matrix</span> <span m='2395040'>is</span> <span
  m='2395220'>a</span> <span m='2395310'>node</span> <span m='2395620'>in</span>
  <span m='2395730'>the</span> <span m='2395830'>DAG.</span> <span
  m='2396600'>That's</span> <span m='2396820'>one</span> <span
  m='2396940'>of</span> <span m='2397040'>our</span> <span
  m='2397120'>subproblems,</span> <span m='2397750'>dp</span> <span
  m='2398000'>of</span> <span m='2398350'>ij.</span> <span
  m='2400480'>And</span> <span m='2400670'>it</span> <span
  m='2400760'>depends</span> <span m='2401220'>on</span> <span
  m='2402530'>these</span> <span m='2403160'>three</span> <span
  m='2404710'>adjacent</span> <span m='2405200'>cells.</span> </p><p><span
  m='2408890'>The</span> <span m='2409010'>edges</span> <span
  m='2409460'>are</span> <span m='2409560'>like</span> <span
  m='2409770'>this.</span> <span m='2410660'>If</span> <span
  m='2410910'>you</span> <span m='2411050'>look</span> <span
  m='2411240'>at</span> <span m='2411420'>it,</span> <span m='2411970'>we</span>
  <span m='2412030'>have</span> <span m='2412180'>to</span> <span
  m='2412290'>check</span> <span m='2413080'>i</span> <span
  m='2413200'>plus</span> <span m='2413410'>1,</span> <span m='2413560'>j</span>
  <span m='2413720'>plus</span> <span m='2413920'>1,</span> <span
  m='2414260'>that's</span> <span m='2414355'>this</span> <span
  m='2414450'>guy.</span> <span m='2415005'>We</span> <span
  m='2415152'>have</span> <span m='2415300'>to</span> <span
  m='2415400'>check</span> <span m='2415790'>ij</span> <span
  m='2416270'>plus</span> <span m='2416510'>1,</span> <span
  m='2416780'>that's</span> <span m='2418010'>this</span> <span
  m='2418260'>guy.</span> <span m='2418590'>We</span> <span
  m='2418790'>have</span> <span m='2418990'>to</span> <span
  m='2419120'>check</span> <span m='2419420'>i</span> <span
  m='2419530'>plus</span> <span m='2419750'>1j,</span> <span
  m='2420070'>that's</span> <span m='2420290'>this</span> <span
  m='2420540'>guy.</span> <span m='2421410'>And</span> <span
  m='2421570'>so,</span> <span m='2421950'>as</span> <span
  m='2422050'>long</span> <span m='2422250'>as</span> <span
  m='2422340'>we</span> <span m='2422420'>compute</span> <span
  m='2422760'>the</span> <span m='2422850'>matrix</span> <span
  m='2423260'>this</span> <span m='2423450'>way,</span> <span
  m='2424500'>what</span> <span m='2424740'>I've</span> <span
  m='2424870'>done</span> <span m='2425070'>here</span> <span
  m='2425410'>is</span> <span m='2427760'>row</span> <span m='2428030'>by</span>
  <span m='2428230'>row,</span> <span m='2429350'>bottom</span> <span
  m='2429640'>up.</span> <span m='2430160'>You</span> <span
  m='2430290'>could</span> <span m='2430420'>do</span> <span
  m='2430550'>it</span> <span m='2430680'>anti-diagonals,</span> <span
  m='2431445'>you</span> <span m='2431710'>could</span> <span
  m='2431860'>do</span> <span m='2432010'>it</span> <span
  m='2432280'>column</span> <span m='2433230'>by</span> <span
  m='2433350'>column</span> <span m='2433710'>backwards,</span> <span
  m='2434090'>all</span> <span m='2434260'>of</span> <span
  m='2434310'>those</span> <span m='2434490'>will</span> <span
  m='2434600'>work</span> <span m='2434890'>because</span> <span
  m='2435010'>we're</span> <span m='2435590'>making</span> <span
  m='2435960'>progress</span> <span m='2436350'>towards</span> <span
  m='2436720'>the</span> <span m='2437360'>origin.</span> </p><p><span
  m='2438780'>And</span> <span m='2438970'>so</span> <span m='2439050'>if</span>
  <span m='2439140'>you</span> <span m='2439220'>ever--</span> <span
  m='2439440'>if</span> <span m='2439580'>you</span> <span
  m='2439700'>look</span> <span m='2439870'>up</span> <span
  m='2440000'>at</span> <span m='2440120'>a</span> <span
  m='2440180'>distance,</span> <span m='2440720'>most</span> <span
  m='2440990'>descriptions</span> <span m='2441570'>think</span> <span
  m='2441740'>about</span> <span m='2441980'>it</span> <span
  m='2442060'>in</span> <span m='2442150'>the</span> <span
  m='2442210'>matrix</span> <span m='2442950'>form,</span> <span
  m='2443790'>but</span> <span m='2443930'>I</span> <span
  m='2444010'>think</span> <span m='2444210'>it's</span> <span
  m='2444330'>easier</span> <span m='2444590'>to</span> <span
  m='2444640'>think</span> <span m='2444850'>of</span> <span
  m='2445000'>it</span> <span m='2445065'>in</span> <span
  m='2445130'>this</span> <span m='2445320'>recursive</span> <span
  m='2445730'>form,</span> <span m='2445960'>whatever</span> <span
  m='2446450'>your</span> <span m='2447140'>poison.</span> <span
  m='2449160'>But</span> <span m='2449250'>this</span> <span
  m='2449420'>is,</span> <span m='2449540'>again,</span> <span
  m='2449840'>shortest</span> <span m='2450120'>paths</span> <span
  m='2450470'>in</span> <span m='2450505'>a</span> <span m='2450540'>DAG.</span>
  <span m='2451860'>The</span> <span m='2451970'>original</span> <span
  m='2452670'>problem</span> <span m='2453010'>we</span> <span
  m='2453130'>care</span> <span m='2453370'>about</span> <span
  m='2454250'>is</span> <span m='2456030'>dp</span> <span m='2456260'>of</span>
  <span m='2456490'>zero</span> <span m='2456810'>zero,</span> <span
  m='2457190'>the</span> <span m='2457300'>upper</span> <span
  m='2457510'>left</span> <span m='2457730'>corner.</span> </p><p><span
  m='2463350'>So</span> <span m='2463480'>to</span> <span m='2463600'>be</span>
  <span m='2463730'>clear</span> <span m='2463960'>in</span> <span
  m='2464070'>the</span> <span m='2464160'>DAG,</span> <span
  m='2465020'>what</span> <span m='2465190'>you</span> <span
  m='2465310'>write</span> <span m='2465550'>here</span> <span
  m='2465950'>is</span> <span m='2466180'>like</span> <span
  m='2466400'>the</span> <span m='2466500'>cost</span> <span
  m='2468300'>of,</span> <span m='2468480'>the</span> <span
  m='2468880'>weight</span> <span m='2469090'>of</span> <span
  m='2469160'>that</span> <span m='2469340'>edge</span> <span
  m='2469780'>is</span> <span m='2469980'>the</span> <span
  m='2470070'>cost</span> <span m='2470440'>of,</span> <span
  m='2470550'>I</span> <span m='2470775'>believe,</span> <span
  m='2471000'>a</span> <span m='2471340'>deletion.</span> <span
  m='2472640'>Deletion,</span> <span m='2473140'>oh</span> <span
  m='2473640'>sorry,</span> <span m='2473773'>it's</span> <span
  m='2473906'>an</span> <span m='2474040'>insertion.</span> <span
  m='2476850'>Inserting</span> <span m='2477130'>that</span> <span
  m='2477270'>character,</span> <span m='2477730'>this</span> <span
  m='2477950'>one's</span> <span m='2478110'>a</span> <span
  m='2478160'>cost</span> <span m='2478325'>of</span> <span
  m='2478490'>deletion,</span> <span m='2478910'>this</span> <span
  m='2479080'>is</span> <span m='2479180'>a</span> <span m='2479240'>cost</span>
  <span m='2479500'>to</span> <span m='2479570'>replace,</span> <span
  m='2480020'>so</span> <span m='2480080'>you</span> <span
  m='2480140'>just</span> <span m='2480300'>put</span> <span
  m='2480430'>those</span> <span m='2480600'>edge</span> <span
  m='2480760'>weights</span> <span m='2480970'>in,</span> <span
  m='2481730'>and</span> <span m='2481920'>then</span> <span
  m='2482060'>just</span> <span m='2482240'>do</span> <span m='2482320'>a</span>
  <span m='2482400'>shortest</span> <span m='2482820'>paths</span> <span
  m='2483980'>in</span> <span m='2484430'>the</span> <span
  m='2484520'>DAG,</span> <span m='2484960'>I</span> <span
  m='2485030'>think,</span> <span m='2485290'>from</span> <span
  m='2485700'>this</span> <span m='2485940'>corner</span> <span
  m='2486700'>to</span> <span m='2486840'>this</span> <span
  m='2487030'>corner.</span> <span m='2488930'>And</span> <span
  m='2489340'>that</span> <span m='2489480'>will</span> <span
  m='2489590'>give</span> <span m='2489780'>you</span> <span
  m='2490300'>this,</span> <span m='2490750'>or</span> <span
  m='2490920'>you</span> <span m='2491000'>could</span> <span
  m='2491100'>just</span> <span m='2491240'>do</span> <span
  m='2491330'>this</span> <span m='2491500'>for</span> <span
  m='2491670'>loop</span> <span m='2492380'>and</span> <span
  m='2492580'>do</span> <span m='2492680'>that</span> <span
  m='2492910'>in</span> <span m='2493000'>the</span> <span
  m='2493080'>for</span> <span m='2493260'>loop,</span> <span
  m='2493490'>same</span> <span m='2493740'>thing.</span> </p><p><span
  m='2495790'>OK.</span> <span m='2495980'>What's</span> <span
  m='2496200'>the</span> <span m='2496300'>running</span> <span
  m='2496560'>time?</span> <span m='2498600'>Well,</span> <span
  m='2499280'>the</span> <span m='2499370'>number</span> <span
  m='2499760'>of</span> <span m='2499830'>subproblems</span> <span
  m='2503360'>here</span> <span m='2503750'>is</span> <span m='2504130'>x</span>
  <span m='2504390'>times</span> <span m='2504670'>y,</span> <span
  m='2505720'>the</span> <span m='2505820'>running</span> <span
  m='2506090'>time</span> <span m='2506310'>for</span> <span
  m='2506420'>subproblem</span> <span m='2507060'>is?</span> <span
  m='2516690'>I'm</span> <span m='2516860'>assuming</span> <span
  m='2517360'>that</span> <span m='2517510'>I</span> <span
  m='2517720'>know</span> <span m='2517950'>these</span> <span
  m='2518190'>costs</span> <span m='2518710'>in</span> <span
  m='2518910'>constant</span> <span m='2519300'>time,</span> <span
  m='2520930'>so</span> <span m='2521150'>what's</span> <span
  m='2521330'>the</span> <span m='2521400'>overall</span> <span
  m='2521730'>running</span> <span m='2521980'>time</span> <span
  m='2522290'>of</span> <span m='2522475'>that,</span> <span
  m='2522660'>evaluating</span> <span m='2523260'>that?</span> <span
  m='2524420'>Constant.</span> </p><p><span m='2532340'>And</span> <span
  m='2532460'>so</span> <span m='2532620'>the</span> <span
  m='2532710'>overall</span> <span m='2533010'>running</span> <span
  m='2533270'>time</span> <span m='2534980'>is</span> <span
  m='2535740'>the</span> <span m='2535840'>number</span> <span
  m='2536090'>of</span> <span m='2536150'>subproblems</span> <span
  m='2538270'>times</span> <span m='2538650'>a</span> <span
  m='2538700'>constant</span> <span m='2539700'>equals</span> <span
  m='2539830'>x</span> <span m='2540050'>times</span> <span
  m='2540290'>y.</span> <span m='2541130'>This</span> <span
  m='2541290'>is</span> <span m='2541380'>the</span> <span
  m='2541470'>best</span> <span m='2541750'>known</span> <span
  m='2541940'>algorithm</span> <span m='2542310'>for</span> <span
  m='2542450'>edit</span> <span m='2542590'>distance,</span> <span
  m='2543020'>no</span> <span m='2543150'>one</span> <span
  m='2543240'>knows</span> <span m='2543440'>how</span> <span
  m='2543530'>to</span> <span m='2543610'>do</span> <span m='2543730'>any</span>
  <span m='2543860'>better.</span> <span m='2544150'>It's</span> <span
  m='2544310'>a</span> <span m='2544400'>big</span> <span
  m='2544490'>open</span> <span m='2544710'>problem</span> <span
  m='2545010'>whether</span> <span m='2545160'>you</span> <span
  m='2545330'>can.</span> <span m='2546030'>You</span> <span
  m='2546310'>can</span> <span m='2546550'>improve</span> <span
  m='2546790'>the</span> <span m='2546870'>space</span> <span
  m='2547250'>a</span> <span m='2547300'>little</span> <span
  m='2547500'>bit,</span> <span m='2547720'>because</span> <span
  m='2547990'>we</span> <span m='2548050'>really</span> <span
  m='2548360'>only</span> <span m='2548550'>need</span> <span
  m='2548720'>to</span> <span m='2548790'>store</span> <span
  m='2549110'>the</span> <span m='2549230'>last</span> <span
  m='2549640'>row</span> <span m='2550160'>or</span> <span
  m='2550370'>the</span> <span m='2550480'>last</span> <span
  m='2550790'>column,</span> <span m='2551710'>depending</span> <span
  m='2551920'>on</span> <span m='2552000'>the</span> <span
  m='2552090'>order</span> <span m='2552390'>you're</span> <span
  m='2552530'>evaluating</span> <span m='2553060'>things.</span> <span
  m='2553330'>To</span> <span m='2553480'>even</span> <span
  m='2553575'>get</span> <span m='2553670'>down</span> <span
  m='2553830'>to</span> <span m='2553910'>linear</span> <span
  m='2554170'>space,</span> <span m='2555200'>as</span> <span
  m='2555350'>far</span> <span m='2555550'>as</span> <span m='2555620'>we</span>
  <span m='2555730'>know,</span> <span m='2555960'>we</span> <span
  m='2556050'>need</span> <span m='2556230'>quadratic</span> <span
  m='2556700'>time.</span> </p><p><span m='2561260'>One</span> <span
  m='2561440'>more</span> <span m='2561600'>problem,</span> <span
  m='2562020'>are</span> <span m='2562110'>you</span> <span
  m='2562220'>ready?</span> <span m='2564050'>This</span> <span
  m='2564180'>one's</span> <span m='2564340'>going</span> <span
  m='2564440'>to</span> <span m='2564490'>blow</span> <span
  m='2564780'>your</span> <span m='2564920'>minds</span> <span
  m='2565650'>hopefully.</span> <span m='2570570'>Because</span> <span
  m='2570750'>we're</span> <span m='2570860'>going</span> <span
  m='2570980'>to</span> <span m='2571070'>diverge</span> <span
  m='2571660'>from</span> <span m='2572290'>strings</span> <span
  m='2572980'>and</span> <span m='2573090'>sequences,</span> <span
  m='2575090'>kind</span> <span m='2575410'>of.</span> <span
  m='2577080'>So</span> <span m='2577290'>far</span> <span
  m='2577460'>everything</span> <span m='2577930'>we've</span> <span
  m='2578080'>looked</span> <span m='2578330'>at</span> <span
  m='2578970'>involves</span> <span m='2580100'>one</span> <span
  m='2580490'>or</span> <span m='2580660'>two</span> <span
  m='2581500'>strings</span> <span m='2581940'>or</span> <span
  m='2582020'>sequences,</span> <span m='2582540'>except</span> <span
  m='2582900'>for</span> <span m='2583040'>[INAUDIBLE].</span> <span
  m='2583550'>That</span> <span m='2583740'>involved</span> <span
  m='2584080'>a</span> <span m='2584130'>graph,</span> <span
  m='2584510'>that</span> <span m='2584640'>was</span> <span
  m='2584760'>a</span> <span m='2584800'>little</span> <span
  m='2584970'>more</span> <span m='2585140'>exciting.</span> <span
  m='2586270'>But</span> <span m='2586430'>we'd</span> <span
  m='2586600'>already</span> <span m='2586780'>seen</span> <span
  m='2586990'>that,</span> <span m='2587210'>so</span> <span
  m='2587270'>it</span> <span m='2587330'>wasn't</span> <span
  m='2587500'>that</span> <span m='2587660'>exciting.</span> </p><p><span
  m='2593780'>OK,</span> <span m='2594620'>our</span> <span
  m='2594640'>last</span> <span m='2594980'>problem</span> <span
  m='2595850'>for</span> <span m='2596030'>today</span> <span
  m='2596740'>is</span> <span m='2597130'>knapsack.</span> <span
  m='2600450'>It's</span> <span m='2600570'>a</span> <span
  m='2600630'>practical</span> <span m='2601040'>problem.</span> <span
  m='2601460'>You're</span> <span m='2601610'>going</span> <span
  m='2601850'>camping.</span> <span m='2603550'>You're</span> <span
  m='2603750'>going</span> <span m='2603950'>backpacking,</span> <span
  m='2604590'>I</span> <span m='2604630'>should</span> <span
  m='2604810'>say,</span> <span m='2605400'>and</span> <span
  m='2605720'>you</span> <span m='2606050'>can</span> <span
  m='2606240'>only</span> <span m='2606880'>afford</span> <span
  m='2607220'>to</span> <span m='2607270'>take</span> <span
  m='2607780'>whatever</span> <span m='2608040'>you</span> <span
  m='2608130'>can</span> <span m='2608260'>fit</span> <span
  m='2608410'>on</span> <span m='2608540'>your</span> <span
  m='2608660'>back.</span> <span m='2608970'>You</span> <span
  m='2609070'>have</span> <span m='2609190'>some</span> <span
  m='2609400'>limit</span> <span m='2609660'>to</span> <span
  m='2609920'>capacity,</span> <span m='2610840'>let's</span> <span
  m='2611030'>say</span> <span m='2611200'>one</span> <span
  m='2611630'>giant</span> <span m='2611940'>backpack</span> <span
  m='2612400'>is</span> <span m='2612540'>all</span> <span
  m='2612740'>you</span> <span m='2612870'>can</span> <span
  m='2613010'>carry.</span> </p><p><span m='2613870'>Let's</span> <span
  m='2614140'>imagine</span> <span m='2615200'>it's</span> <span
  m='2615410'>the</span> <span m='2615500'>size</span> <span
  m='2615940'>of</span> <span m='2616010'>the</span> <span
  m='2616090'>backpack</span> <span m='2616570'>that</span> <span
  m='2616680'>matters,</span> <span m='2617100'>not</span> <span
  m='2617200'>the</span> <span m='2617290'>weight,</span> <span
  m='2617730'>but</span> <span m='2617850'>you</span> <span
  m='2617980'>could</span> <span m='2618090'>reformulate</span> <span
  m='2618600'>this</span> <span m='2618770'>in</span> <span
  m='2618830'>terms</span> <span m='2619040'>of</span> <span
  m='2619130'>weight.</span> <span m='2620370'>And</span> <span
  m='2620540'>you've</span> <span m='2620660'>got</span> <span
  m='2620810'>a</span> <span m='2620860'>lot</span> <span m='2621160'>of</span>
  <span m='2621220'>stuff</span> <span m='2621500'>you</span> <span
  m='2621620'>want</span> <span m='2621780'>to</span> <span
  m='2621830'>bring.</span> <span m='2622070'>Ideally</span> <span
  m='2622480'>you</span> <span m='2622570'>bring</span> <span
  m='2622840'>everything</span> <span m='2623250'>you</span> <span
  m='2623410'>own,</span> <span m='2624170'>that</span> <span
  m='2624550'>would</span> <span m='2624760'>be</span> <span
  m='2624780'>kind</span> <span m='2624800'>of</span> <span
  m='2624820'>nice,</span> <span m='2625180'>convenient,</span> <span
  m='2626140'>but</span> <span m='2626360'>it'd</span> <span
  m='2626480'>be</span> <span m='2626580'>kind</span> <span
  m='2626740'>of</span> <span m='2626780'>heavy.</span> <span
  m='2627330'>So</span> <span m='2628280'>you're</span> <span
  m='2628770'>limited,</span> <span m='2629170'>you're</span> <span
  m='2629260'>not</span> <span m='2629440'>able</span> <span
  m='2629660'>to</span> <span m='2629770'>do</span> <span
  m='2629890'>that.</span> </p><p><span m='2631020'>So</span> <span
  m='2631090'>you</span> <span m='2631190'>have</span> <span
  m='2631975'>a</span> <span m='2633420'>list</span> <span m='2633780'>of</span>
  <span m='2633900'>items</span> <span m='2638040'>and</span> <span
  m='2638440'>each</span> <span m='2638710'>of</span> <span
  m='2638780'>them</span> <span m='2644130'>has</span> <span
  m='2644430'>a</span> <span m='2644490'>size,</span> <span
  m='2646980'>si,</span> <span m='2648450'>and</span> <span
  m='2648920'>has</span> <span m='2649580'>a</span> <span
  m='2650920'>desire,</span> <span m='2651620'>a</span> <span
  m='2651670'>value</span> <span m='2651975'>to</span> <span
  m='2652280'>you,</span> <span m='2652730'>how</span> <span
  m='2652880'>much</span> <span m='2653090'>you</span> <span
  m='2653180'>care</span> <span m='2653450'>about</span> <span
  m='2653680'>it,</span> <span m='2654110'>how</span> <span
  m='2654210'>much</span> <span m='2654390'>you</span> <span
  m='2654470'>need</span> <span m='2654680'>it</span> <span
  m='2654770'>on</span> <span m='2654910'>this</span> <span
  m='2655060'>trip.</span> <span m='2656410'>OK,</span> <span
  m='2656560'>each</span> <span m='2656800'>item</span> <span
  m='2657020'>has</span> <span m='2657270'>two</span> <span
  m='2657510'>things,</span> <span m='2658800'>and</span> <span
  m='2660120'>the</span> <span m='2660220'>sizes</span> <span
  m='2661350'>are</span> <span m='2661500'>integers.</span> <span
  m='2662130'>This</span> <span m='2662300'>is</span> <span
  m='2662420'>going</span> <span m='2662530'>to</span> <span
  m='2662600'>be</span> <span m='2662720'>important.</span> <span
  m='2666350'>It</span> <span m='2666450'>won't</span> <span
  m='2666470'>work</span> <span m='2666690'>without</span> <span
  m='2666970'>that</span> <span m='2667270'>assumption.</span> <span
  m='2668260'>And</span> <span m='2668640'>we</span> <span
  m='2668740'>have</span> <span m='2668950'>a</span> <span
  m='2669000'>knapsack,</span> <span m='2671610'>backpack,</span> <span
  m='2672270'>whatever,</span> <span m='2672570'>I</span> <span
  m='2672640'>guess</span> <span m='2672840'>it's</span> <span
  m='2673010'>the</span> <span m='2673110'>British,</span> <span
  m='2673970'>but</span> <span m='2674460'>I</span> <span
  m='2674576'>don't</span> <span m='2674693'>know,</span> <span
  m='2674810'>I</span> <span m='2674870'>get</span> <span
  m='2675060'>confused.</span> <span m='2675930'>Growing</span> <span
  m='2676240'>up</span> <span m='2676340'>in</span> <span
  m='2676410'>Canada,</span> <span m='2676940'>I</span> <span
  m='2677010'>use</span> <span m='2677200'>both,</span> <span
  m='2677470'>so</span> <span m='2677790'>it's</span> <span
  m='2677970'>very</span> <span m='2678120'>confusing.</span> <span
  m='2679850'>Knapsack</span> <span m='2680400'>of</span> <span
  m='2680710'>total</span> <span m='2680950'>size,</span> <span
  m='2682480'>S.</span> </p><p><span m='2685130'>And</span> <span
  m='2685430'>what</span> <span m='2685580'>you'd</span> <span
  m='2685700'>like</span> <span m='2685870'>to</span> <span
  m='2685970'>do</span> <span m='2686360'>is</span> <span
  m='2686640'>choose</span> <span m='2686960'>a</span> <span
  m='2687030'>subset</span> <span m='2687560'>of</span> <span
  m='2687640'>the</span> <span m='2687790'>items.</span> <span
  m='2688050'>If</span> <span m='2688160'>you're</span> <span
  m='2688260'>lucky,</span> <span m='2688690'>the</span> <span
  m='2688810'>sum</span> <span m='2689050'>of</span> <span
  m='2689110'>the</span> <span m='2689190'>si's</span> <span
  m='2689660'>fit</span> <span m='2689900'>within</span> <span
  m='2690210'>s,</span> <span m='2690352'>then</span> <span
  m='2690780'>you</span> <span m='2690860'>bring</span> <span
  m='2691030'>everything.</span> <span m='2691460'>But</span> <span
  m='2691950'>if</span> <span m='2692070'>you're</span> <span
  m='2692160'>not</span> <span m='2692370'>lucky,</span> <span
  m='2692630'>that's</span> <span m='2692850'>not</span> <span
  m='2692980'>possible,</span> <span m='2693410'>you</span> <span
  m='2693520'>want</span> <span m='2693640'>to</span> <span
  m='2693710'>choose</span> <span m='2693900'>a</span> <span
  m='2693960'>subset</span> <span m='2694390'>of</span> <span
  m='2694450'>the</span> <span m='2694570'>items</span> <span
  m='2695080'>whose</span> <span m='2695340'>total</span> <span
  m='2695700'>size</span> <span m='2696020'>is</span> <span
  m='2696140'>less</span> <span m='2696390'>than</span> <span
  m='2696490'>or</span> <span m='2696560'>equal</span> <span
  m='2696810'>to</span> <span m='2696910'>s,</span> <span m='2697640'>in</span>
  <span m='2697790'>order</span> <span m='2697950'>to</span> <span
  m='2698230'>maximize</span> <span m='2698830'>the</span> <span
  m='2699120'>sum</span> <span m='2699400'>of</span> <span
  m='2699460'>the</span> <span m='2699520'>values.</span> <span
  m='2701431'>So</span> <span m='2701820'>you</span> <span
  m='2701960'>want</span> <span m='2702080'>to</span> <span
  m='2702120'>maximize</span> <span m='2705380'>the</span> <span
  m='2705420'>sum</span> <span m='2705730'>of</span> <span
  m='2705840'>values</span> <span m='2710410'>for</span> <span
  m='2711050'>a</span> <span m='2711160'>subset</span> <span
  m='2712870'>of</span> <span m='2713030'>items,</span> <span
  m='2718161'>of</span> <span m='2718660'>total</span> <span
  m='2718970'>size</span> <span m='2720560'>less</span> <span
  m='2720760'>than</span> <span m='2720960'>or</span> <span
  m='2721020'>equal</span> <span m='2721320'>to</span> <span
  m='2721420'>S.</span> </p><p><span m='2728120'>You</span> <span
  m='2728270'>can</span> <span m='2728380'>imagine</span> <span
  m='2728730'>size</span> <span m='2728970'>as</span> <span
  m='2729210'>weights</span> <span m='2729590'>instead</span> <span
  m='2729930'>of</span> <span m='2730020'>size,</span> <span
  m='2731360'>not</span> <span m='2731530'>a</span> <span m='2731570'>big</span>
  <span m='2731740'>deal,</span> <span m='2731950'>or</span> <span
  m='2732070'>you</span> <span m='2732130'>could</span> <span
  m='2732230'>have</span> <span m='2732340'>sizes</span> <span
  m='2732700'>and</span> <span m='2732860'>weights.</span> <span
  m='2733290'>All</span> <span m='2733545'>of</span> <span
  m='2733800'>these</span> <span m='2733980'>things</span> <span
  m='2734160'>generalize.</span> <span m='2736870'>But</span> <span
  m='2737060'>we're</span> <span m='2737180'>going</span> <span
  m='2737310'>to</span> <span m='2737380'>need</span> <span
  m='2737880'>that</span> <span m='2738080'>the</span> <span
  m='2738170'>sizes/weights</span> <span m='2739400'>are</span> <span
  m='2739610'>integers.</span> <span m='2742290'>And</span> <span
  m='2742790'>so</span> <span m='2743980'>the</span> <span
  m='2744120'>items</span> <span m='2744320'>have</span> <span
  m='2744540'>to</span> <span m='2744630'>fit,</span> <span
  m='2745050'>because</span> <span m='2745220'>you</span> <span
  m='2745730'>can't</span> <span m='2746370'>cheat,</span> <span
  m='2746680'>you</span> <span m='2746790'>can't</span> <span
  m='2747020'>have</span> <span m='2747200'>more</span> <span
  m='2747420'>things</span> <span m='2747840'>than</span> <span
  m='2747950'>what</span> <span m='2748140'>fit,</span> <span
  m='2749090'>but</span> <span m='2749610'>then</span> <span
  m='2749750'>you</span> <span m='2749840'>want</span> <span
  m='2749950'>to</span> <span m='2749990'>maximize</span> <span
  m='2750560'>the</span> <span m='2751300'>value.</span> </p><p><span
  m='2753140'>How</span> <span m='2753400'>do</span> <span m='2753490'>we</span>
  <span m='2753590'>do</span> <span m='2753700'>this</span> <span
  m='2753910'>with</span> <span m='2754020'>dynamic</span> <span
  m='2754400'>programming?</span> <span m='2757980'>With</span> <span
  m='2758500'>difficulty.</span> <span m='2761440'>I</span> <span
  m='2761530'>don't</span> <span m='2761620'>have</span> <span
  m='2761750'>a</span> <span m='2761820'>ton</span> <span m='2762020'>of</span>
  <span m='2762160'>time,</span> <span m='2762660'>so</span> <span
  m='2763140'>I</span> <span m='2763250'>think</span> <span
  m='2763480'>I'm</span> <span m='2763550'>going</span> <span
  m='2763680'>to</span> <span m='2763800'>tell</span> <span
  m='2764050'>you--</span> <span m='2766080'>well,</span> <span
  m='2766140'>let's</span> <span m='2766240'>see.</span> <span
  m='2768850'>Start</span> <span m='2769005'>with</span> <span
  m='2769160'>guessing.</span> <span m='2770340'>This</span> <span
  m='2770450'>is</span> <span m='2770510'>the</span> <span
  m='2770610'>easy</span> <span m='2770810'>part</span> <span
  m='2771500'>to</span> <span m='2771560'>this</span> <span
  m='2771700'>problem.</span> <span m='2774830'>We</span> <span
  m='2774920'>should</span> <span m='2775100'>also</span> <span
  m='2775320'>be</span> <span m='2775440'>thinking</span> <span
  m='2775670'>about</span> <span m='2775890'>subproblems</span> <span
  m='2776510'>at</span> <span m='2776640'>the</span> <span
  m='2776730'>same</span> <span m='2776970'>time.</span> <span
  m='2783210'>Even</span> <span m='2783430'>though</span> <span
  m='2783500'>I</span> <span m='2783580'>said</span> <span
  m='2783810'>we're</span> <span m='2784030'>leaving</span> <span
  m='2785120'>sequences,</span> <span m='2786200'>in</span> <span
  m='2786320'>fact,</span> <span m='2786600'>we</span> <span
  m='2786690'>have</span> <span m='2786830'>a</span> <span
  m='2786880'>sequence</span> <span m='2787310'>here,</span> <span
  m='2787450'>we</span> <span m='2787530'>have</span> <span m='2787670'>a</span>
  <span m='2787740'>sequence</span> <span m='2788220'>of</span> <span
  m='2788320'>items.</span> </p><p><span m='2789200'>We</span> <span
  m='2789330'>don't</span> <span m='2789530'>actually</span> <span
  m='2789830'>care</span> <span m='2790040'>about</span> <span
  m='2790230'>the</span> <span m='2790340'>order</span> <span
  m='2790590'>of</span> <span m='2790650'>the</span> <span
  m='2790780'>items,</span> <span m='2791120'>but</span> <span
  m='2791260'>hey,</span> <span m='2791740'>they're</span> <span
  m='2791900'>in</span> <span m='2791980'>an</span> <span
  m='2792080'>order.</span> <span m='2792950'>If</span> <span
  m='2793340'>they</span> <span m='2793460'>weren't,</span> <span
  m='2793750'>we</span> <span m='2793920'>could</span> <span
  m='2794060'>put</span> <span m='2794230'>them</span> <span
  m='2794360'>in</span> <span m='2794420'>an</span> <span
  m='2794540'>order,</span> <span m='2795050'>in</span> <span
  m='2795145'>an</span> <span m='2795240'>arbitrary</span> <span
  m='2795770'>order.</span> <span m='2796490'>We're</span> <span
  m='2796620'>going</span> <span m='2796700'>to</span> <span
  m='2796740'>use</span> <span m='2796920'>that</span> <span
  m='2797110'>order,</span> <span m='2797500'>and</span> <span
  m='2797630'>we're</span> <span m='2797750'>going</span> <span
  m='2797840'>to</span> <span m='2797920'>look</span> <span
  m='2798210'>at</span> <span m='2798690'>suffixes</span> <span
  m='2799380'>of</span> <span m='2799570'>items.</span> <span
  m='2805970'>i</span> <span m='2806390'>colon</span> <span
  m='2807656'>of</span> <span m='2808000'>items.</span> <span
  m='2812960'>That's</span> <span m='2813340'>helpful,</span> <span
  m='2814060'>because</span> <span m='2814260'>now</span> <span
  m='2814520'>it</span> <span m='2814640'>says,</span> <span
  m='2815000'>oh,</span> <span m='2815350'>well,</span> <span
  m='2815410'>we</span> <span m='2815470'>should</span> <span
  m='2815640'>be</span> <span m='2815770'>plucking</span> <span
  m='2816150'>off</span> <span m='2816300'>items</span> <span
  m='2816580'>from</span> <span m='2816700'>the</span> <span
  m='2816780'>beginning.</span> <span m='2817850'>Starting</span> <span
  m='2818210'>with</span> <span m='2818360'>the</span> <span
  m='2818490'>i-th</span> <span m='2818760'>item,</span> <span
  m='2820130'>what</span> <span m='2820310'>should</span> <span
  m='2820460'>I</span> <span m='2820520'>decide</span> <span
  m='2820920'>about</span> <span m='2821140'>the</span> <span
  m='2821250'>i-th</span> <span m='2821440'>item,</span> <span
  m='2823430'>relative</span> <span m='2823840'>to</span> <span
  m='2823950'>the</span> <span m='2824090'>optimal</span> <span
  m='2824430'>solution?</span> <span m='2826030'>What</span> <span
  m='2826080'>should</span> <span m='2826130'>I</span> <span
  m='2826260'>guess?</span> </p><p><span m='2836420'>AUDIENCE: Is</span> <span
  m='2836582'>i</span> <span m='2836744'>included</span> <span
  m='2836906'>or</span> <span m='2837158'>not?</span> </p><p><span
  m='2837410'>PROFESSOR: Is</span> <span m='2837610'>i</span> <span
  m='2837780'>included</span> <span m='2838220'>or</span> <span
  m='2838300'>not,</span> <span m='2839170'>exactly.</span> <span
  m='2843120'>Is</span> <span m='2843530'>item</span> <span m='2843850'>i</span>
  <span m='2846510'>in</span> <span m='2846680'>the</span> <span
  m='2846740'>subset</span> <span m='2850650'>or</span> <span
  m='2851120'>not.</span> <span m='2853010'>Two</span> <span
  m='2853180'>choices,</span> <span m='2854540'>easy.</span> <span
  m='2856370'>Of</span> <span m='2856495'>course,</span> <span
  m='2856830'>those</span> <span m='2857060'>are</span> <span
  m='2857200'>the</span> <span m='2857330'>choices.</span> <span
  m='2858040'>If</span> <span m='2858160'>I</span> <span m='2858230'>do</span>
  <span m='2858380'>that</span> <span m='2858590'>for</span> <span
  m='2858690'>everybody,</span> <span m='2859120'>then</span> <span
  m='2859280'>I</span> <span m='2859340'>know</span> <span
  m='2859530'>the</span> <span m='2859620'>entire</span> <span
  m='2859930'>subset.</span> <span m='2861550'>Somehow</span> <span
  m='2862570'>I</span> <span m='2862680'>need</span> <span m='2862930'>to</span>
  <span m='2863100'>be</span> <span m='2863240'>able</span> <span
  m='2863440'>to</span> <span m='2863640'>write</span> <span
  m='2864160'>and</span> <span m='2864340'>this</span> <span
  m='2864510'>is</span> <span m='2864610'>what's</span> <span
  m='2864890'>actually</span> <span m='2865190'>impossible</span> <span
  m='2865850'>if</span> <span m='2865970'>I</span> <span
  m='2866050'>choose</span> <span m='2866300'>this</span> <span
  m='2866480'>as</span> <span m='2866570'>my</span> <span
  m='2866670'>subproblem.</span> </p><p><span m='2867640'>I</span> <span
  m='2867760'>want</span> <span m='2868000'>to</span> <span
  m='2868100'>write</span> <span m='2868460'>DP</span> <span
  m='2868780'>of</span> <span m='2869100'>i,</span> <span
  m='2869720'>somehow,</span> <span m='2870740'>in</span> <span
  m='2870920'>terms</span> <span m='2871250'>of,</span> <span
  m='2871440'>I</span> <span m='2871500'>guess,</span> <span
  m='2871750'>DP</span> <span m='2872090'>of</span> <span m='2872180'>i</span>
  <span m='2872280'>plus</span> <span m='2872530'>1.</span> <span
  m='2874390'>And</span> <span m='2874490'>we'd</span> <span
  m='2874590'>like</span> <span m='2874740'>to</span> <span
  m='2874840'>do</span> <span m='2874980'>max,</span> <span
  m='2876680'>and</span> <span m='2876990'>either</span> <span
  m='2877670'>we</span> <span m='2877790'>don't</span> <span
  m='2878060'>put</span> <span m='2878230'>it</span> <span
  m='2878330'>in,</span> <span m='2878590'>in</span> <span
  m='2878850'>which</span> <span m='2879050'>case</span> <span
  m='2879300'>that's</span> <span m='2879550'>our</span> <span
  m='2879620'>value,</span> <span m='2880390'>or</span> <span
  m='2880550'>we</span> <span m='2880680'>put</span> <span m='2880850'>it</span>
  <span m='2880940'>in,</span> <span m='2881760'>in</span> <span
  m='2882170'>which</span> <span m='2882350'>case</span> <span
  m='2882720'>we</span> <span m='2882770'>get</span> <span m='2882940'>an</span>
  <span m='2883060'>additional</span> <span m='2883590'>v</span> <span
  m='2883820'>i</span> <span m='2884050'>in</span> <span
  m='2884260'>value.</span> <span m='2885910'>OK,</span> <span
  m='2886040'>but</span> <span m='2886220'>we</span> <span
  m='2886360'>consume</span> <span m='2888350'>in</span> <span
  m='2888530'>size,</span> <span m='2889170'>and</span> <span
  m='2889270'>there's</span> <span m='2889440'>no</span> <span
  m='2889700'>way</span> <span m='2890230'>to</span> <span
  m='2890630'>remember</span> <span m='2891200'>that</span> <span
  m='2891370'>we've</span> <span m='2891530'>consumed</span> <span
  m='2892030'>the</span> <span m='2892120'>size</span> <span
  m='2892510'>here.</span> </p><p><span m='2893310'>We</span> <span
  m='2893410'>just</span> <span m='2893670'>called</span> <span
  m='2893900'>DP</span> <span m='2894065'>of</span> <span m='2894230'>i</span>
  <span m='2894320'>plus</span> <span m='2894550'>1.</span> <span
  m='2895150'>In</span> <span m='2895300'>this</span> <span
  m='2895480'>case,</span> <span m='2895720'>it</span> <span
  m='2895790'>has</span> <span m='2896020'>everything,</span> <span
  m='2897070'>all</span> <span m='2897300'>this.</span> <span
  m='2898030'>In</span> <span m='2898150'>this</span> <span
  m='2898330'>case,</span> <span m='2898880'>we</span> <span
  m='2899090'>lose</span> <span m='2900010'>si</span> <span
  m='2901120'>of</span> <span m='2901290'>S,</span> <span m='2901910'>but</span>
  <span m='2902020'>we</span> <span m='2902130'>can't</span> <span
  m='2902370'>represent</span> <span m='2902840'>that</span> <span
  m='2903050'>here.</span> <span m='2904490'>That's</span> <span
  m='2904630'>bad,</span> <span m='2905490'>this</span> <span
  m='2905560'>would</span> <span m='2905625'>be</span> <span
  m='2905690'>an</span> <span m='2905770'>incorrect</span> <span
  m='2906250'>algorithm.</span> <span m='2908410'>I</span> <span
  m='2908550'>would</span> <span m='2908710'>always</span> <span
  m='2908930'>choose</span> <span m='2909110'>to</span> <span
  m='2909190'>put</span> <span m='2909330'>everything</span> <span
  m='2909730'>in,</span> <span m='2909970'>because</span> <span
  m='2910170'>it's</span> <span m='2910310'>not</span> <span
  m='2910470'>keeping</span> <span m='2910740'>track</span> <span
  m='2910980'>of</span> <span m='2911060'>the</span> <span
  m='2911140'>size</span> <span m='2911310'>bound.</span> <span
  m='2911480'>There's</span> <span m='2911740'>no</span> <span
  m='2911890'>capital</span> <span m='2912300'>S</span> <span
  m='2912480'>in</span> <span m='2912570'>this</span> <span
  m='2912710'>formula,</span> <span m='2913640'>that's</span> <span
  m='2913800'>wrong.</span> <span m='2915290'>So,</span> <span
  m='2917060'>to</span> <span m='2917190'>fix</span> <span
  m='2917470'>that,</span> <span m='2918840'>I'm</span> <span
  m='2918870'>going</span> <span m='2918900'>to</span> <span
  m='2918930'>write</span> <span m='2919130'>that</span> <span
  m='2919280'>again,</span> <span m='2920156'>but</span> <span
  m='2921110'>a</span> <span m='2921190'>subproblem</span> <span
  m='2921750'>is</span> <span m='2921840'>going</span> <span
  m='2921960'>to</span> <span m='2922000'>have</span> <span
  m='2922170'>more</span> <span m='2922480'>information,</span> <span
  m='2923230'>it's</span> <span m='2923420'>going</span> <span
  m='2923540'>to</span> <span m='2923590'>have</span> <span
  m='2923890'>an</span> <span m='2923980'>index</span> <span
  m='2924360'>i,</span> <span m='2925850'>and</span> <span
  m='2926360'>it's</span> <span m='2926540'>going</span> <span
  m='2926660'>to</span> <span m='2926710'>have</span> <span
  m='2927470'>remaining</span> <span m='2928000'>capacity.</span> </p><p><span
  m='2933700'>I'm</span> <span m='2933800'>going</span> <span
  m='2933910'>to</span> <span m='2933990'>call</span> <span
  m='2934310'>it</span> <span m='2934860'>capital</span> <span
  m='2935240'>X,</span> <span m='2936640'>at</span> <span
  m='2936760'>some</span> <span m='2937500'>integer</span> <span
  m='2938070'>at</span> <span m='2938240'>most</span> <span
  m='2938550'>S.</span> <span m='2938860'>We're</span> <span
  m='2938980'>assuming</span> <span m='2939340'>that</span> <span
  m='2939480'>the</span> <span m='2939580'>sizes</span> <span
  m='2940000'>are</span> <span m='2940100'>all</span> <span
  m='2940210'>integers,</span> <span m='2941390'>so</span> <span
  m='2941600'>this</span> <span m='2941850'>is</span> <span
  m='2942150'>valid.</span> <span m='2942900'>The</span> <span
  m='2943020'>number</span> <span m='2943360'>of</span> <span
  m='2943410'>subproblems</span> <span m='2945140'>is</span> <span
  m='2945400'>equal</span> <span m='2945750'>to</span> <span
  m='2948870'>n,</span> <span m='2949230'>the</span> <span
  m='2949310'>number</span> <span m='2949550'>of</span> <span
  m='2949630'>items,</span> <span m='2950200'>did</span> <span
  m='2950270'>I</span> <span m='2950340'>say</span> <span
  m='2950470'>there</span> <span m='2950590'>are</span> <span
  m='2950660'>n</span> <span m='2950870'>items?</span> <span
  m='2952340'>Now</span> <span m='2952410'>there</span> <span
  m='2952550'>are</span> <span m='2952690'>n</span> <span
  m='2952890'>items,</span> <span m='2953950'>times</span> <span
  m='2954620'>capital</span> <span m='2954970'>S,</span> <span
  m='2955460'>really</span> <span m='2955720'>S</span> <span
  m='2955900'>plus</span> <span m='2956130'>1,</span> <span
  m='2956690'>because</span> <span m='2956763'>I</span> <span
  m='2956836'>have</span> <span m='2956910'>to</span> <span
  m='2956960'>go</span> <span m='2957070'>down</span> <span
  m='2957250'>to</span> <span m='2957290'>zero.</span> <span
  m='2958620'>But</span> <span m='2958790'>n</span> <span
  m='2958940'>times</span> <span m='2959200'>S,</span> <span
  m='2959900'>different</span> <span m='2960250'>subproblems.</span> <span
  m='2961800'>Now</span> <span m='2961990'>for</span> <span
  m='2962120'>each</span> <span m='2962320'>of</span> <span
  m='2962400'>them</span> <span m='2962840'>I</span> <span
  m='2963000'>can</span> <span m='2963250'>write</span> <span
  m='2963500'>a</span> <span m='2963550'>recurrence,</span> <span
  m='2964600'>and</span> <span m='2964770'>that</span> <span
  m='2964980'>is</span> <span m='2965890'>DP</span> <span m='2966802'>of</span>
  <span m='2967714'>i</span> <span m='2968170'>comma</span> <span
  m='2968520'>s,</span> <span m='2970030'>is</span> <span
  m='2970230'>going</span> <span m='2970380'>to</span> <span
  m='2970450'>be</span> <span m='2970990'>the</span> <span
  m='2971050'>max</span> <span m='2972512'>of</span> <span m='2972920'>DP</span>
  <span m='2973626'>of</span> <span m='2973803'>i</span> <span
  m='2973980'>plus</span> <span m='2974250'>1s.</span> </p><p><span
  m='2974730'>This</span> <span m='2974920'>is</span> <span
  m='2975020'>the</span> <span m='2975110'>case</span> <span
  m='2975360'>where</span> <span m='2975520'>we</span> <span
  m='2975640'>don't</span> <span m='2975950'>include</span> <span
  m='2976260'>the</span> <span m='2976400'>items,</span> <span
  m='2976870'>so</span> <span m='2976990'>S</span> <span
  m='2977110'>stays</span> <span m='2977230'>the</span> <span
  m='2977310'>same.</span> <span m='2978690'>Actually</span> <span
  m='2978725'>I</span> <span m='2978760'>should</span> <span
  m='2978870'>write</span> <span m='2979110'>x</span> <span
  m='2979400'>here,</span> <span m='2979770'>because</span> <span
  m='2980080'>it's</span> <span m='2980250'>not</span> <span
  m='2980470'>actually</span> <span m='2980880'>our</span> <span
  m='2981050'>original</span> <span m='2981330'>value</span> <span
  m='2981750'>of</span> <span m='2981958'>s.</span> <span m='2982582'>x</span>
  <span m='2983000'>is</span> <span m='2983130'>the</span> <span
  m='2983220'>general</span> <span m='2983500'>situation.</span> <span
  m='2984490'>The</span> <span m='2984590'>other</span> <span
  m='2984730'>possibility</span> <span m='2985000'>is</span> <span
  m='2985270'>we</span> <span m='2985390'>include</span> <span
  m='2985850'>item</span> <span m='2985995'>i,</span> <span
  m='2986970'>and</span> <span m='2987080'>then</span> <span
  m='2987190'>we</span> <span m='2987310'>give</span> <span
  m='2987510'>DP</span> <span m='2988510'>of</span> <span m='2988690'>i</span>
  <span m='2988800'>plus</span> <span m='2989050'>1.</span> <span
  m='2989240'>We</span> <span m='2989320'>still</span> <span
  m='2989530'>consume</span> <span m='2990000'>item</span> <span
  m='2990142'>i.</span> <span m='2991070'>We</span> <span m='2991210'>now</span>
  <span m='2991420'>have</span> <span m='2991730'>x</span> <span
  m='2992100'>minus</span> <span m='2992780'>si</span> <span
  m='2993790'>as</span> <span m='2993970'>our</span> <span
  m='2994080'>new</span> <span m='2994330'>capacity,</span> <span
  m='2995220'>what</span> <span m='2995420'>remains</span> <span
  m='2995980'>after</span> <span m='2996320'>we</span> <span
  m='2996480'>add</span> <span m='2996670'>in</span> <span
  m='2996770'>this</span> <span m='2996920'>item.</span> <span
  m='2997530'>And</span> <span m='2997680'>then</span> <span
  m='2997770'>we</span> <span m='2997920'>add</span> <span m='2998097'>on</span>
  <span m='2998630'>vi,</span> <span m='2999120'>because</span> <span
  m='2999440'>that's</span> <span m='2999640'>the</span> <span
  m='2999720'>value</span> <span m='3000170'>we</span> <span
  m='3000310'>gain</span> <span m='3000630'>from</span> <span
  m='3000850'>putting</span> <span m='3001030'>that</span> <span
  m='3001230'>item</span> <span m='3001520'>in.</span> <span
  m='3003560'>That's</span> <span m='3003960'>it,</span> <span
  m='3004360'>that's</span> <span m='3004450'>the</span> <span
  m='3004616'>DP,</span> <span m='3004783'>pretty</span> <span
  m='3005450'>simple.</span> </p><p><span m='3007410'>Let</span> <span
  m='3007570'>me</span> <span m='3007690'>say</span> <span m='3008130'>a</span>
  <span m='3008200'>little</span> <span m='3008430'>bit</span> <span
  m='3008590'>about</span> <span m='3008890'>the</span> <span
  m='3009000'>running</span> <span m='3009300'>time</span> <span
  m='3009570'>of</span> <span m='3009690'>this</span> <span
  m='3009900'>thing.</span> <span m='3011830'>Again,</span> <span
  m='3012140'>you</span> <span m='3012650'>check</span> <span
  m='3012890'>there's</span> <span m='3013050'>a</span> <span
  m='3013120'>topological</span> <span m='3013700'>order</span> <span
  m='3014040'>and</span> <span m='3014100'>all</span> <span
  m='3014240'>that,</span> <span m='3014470'>it's</span> <span
  m='3014640'>in</span> <span m='3014750'>the</span> <span
  m='3014820'>notes.</span> <span m='3016050'>The</span> <span
  m='3016460'>total</span> <span m='3016730'>running</span> <span
  m='3016990'>time,</span> <span m='3018220'>we</span> <span
  m='3018350'>spend</span> <span m='3018680'>constant</span> <span
  m='3019180'>time</span> <span m='3019450'>to</span> <span
  m='3019490'>evaluate</span> <span m='3019970'>this</span> <span
  m='3020130'>formula,</span> <span m='3020970'>so</span> <span
  m='3021030'>it's</span> <span m='3021090'>super</span> <span
  m='3021470'>easy.</span> <span m='3023410'>The</span> <span
  m='3023510'>number</span> <span m='3023660'>of</span> <span
  m='3023810'>subproblems</span> <span m='3024370'>is</span> <span
  m='3024480'>the</span> <span m='3024570'>bottleneck.</span> <span
  m='3026390'>So</span> <span m='3026420'>it's</span> <span m='3026590'>n</span>
  <span m='3027240'>times</span> <span m='3027570'>s.</span> </p><p><span
  m='3028680'>Is</span> <span m='3028930'>this</span> <span
  m='3029170'>polynomial</span> <span m='3029780'>time?</span> <span
  m='3031090'>You</span> <span m='3031220'>might</span> <span
  m='3031410'>guess</span> <span m='3031650'>from</span> <span
  m='3031910'>the</span> <span m='3032090'>outline</span> <span
  m='3032580'>of</span> <span m='3032680'>today</span> <span
  m='3033180'>that</span> <span m='3033235'>the</span> <span
  m='3033290'>answer</span> <span m='3033540'>is</span> <span
  m='3033640'>no.</span> <span m='3034590'>This</span> <span
  m='3034740'>is</span> <span m='3034880'>not</span> <span
  m='3035990'>polynomial</span> <span m='3036640'>time.</span> <span
  m='3038930'>What</span> <span m='3039070'>this</span> <span
  m='3039210'>polynomial</span> <span m='3039720'>time</span> <span
  m='3039980'>mean?</span> <span m='3041760'>It's</span> <span
  m='3041950'>polynomial</span> <span m='3042530'>and</span> <span
  m='3042630'>n,</span> <span m='3043600'>where</span> <span
  m='3043820'>n</span> <span m='3044760'>is</span> <span m='3045020'>the</span>
  <span m='3045120'>size</span> <span m='3045540'>of</span> <span
  m='3045640'>the</span> <span m='3045760'>input.</span> <span
  m='3046360'>What's</span> <span m='3046550'>the</span> <span
  m='3046640'>size</span> <span m='3046920'>of</span> <span
  m='3046960'>the</span> <span m='3047050'>input</span> <span
  m='3047330'>here?</span> <span m='3047880'>Well,</span> <span
  m='3048020'>we're</span> <span m='3048140'>given</span> <span
  m='3048410'>n</span> <span m='3048630'>items,</span> <span
  m='3049250'>each</span> <span m='3049470'>with</span> <span
  m='3049590'>a</span> <span m='3049640'>size,</span> <span
  m='3050050'>each</span> <span m='3050200'>with</span> <span
  m='3050330'>a</span> <span m='3050370'>value.</span> <span
  m='3050870'>If</span> <span m='3051170'>you</span> <span
  m='3051260'>think</span> <span m='3051440'>of</span> <span
  m='3051520'>the</span> <span m='3051600'>sizes</span> <span
  m='3052000'>and</span> <span m='3052100'>values</span> <span
  m='3052460'>as</span> <span m='3052570'>being</span> <span
  m='3052750'>single</span> <span m='3053180'>word</span> <span
  m='3053550'>items,</span> <span m='3054640'>then</span> <span
  m='3054690'>the</span> <span m='3054760'>size</span> <span
  m='3055110'>is</span> <span m='3055440'>n.</span> </p><p><span
  m='3056660'>If</span> <span m='3056830'>you</span> <span
  m='3056920'>think</span> <span m='3057110'>of</span> <span
  m='3057180'>them</span> <span m='3057300'>as</span> <span
  m='3057410'>being</span> <span m='3058710'>ginormous</span> <span
  m='3059290'>values,</span> <span m='3059820'>at</span> <span
  m='3060010'>most,</span> <span m='3060930'>the</span> <span
  m='3061020'>size</span> <span m='3061340'>of</span> <span
  m='3061440'>this</span> <span m='3061600'>input</span> <span
  m='3062570'>is</span> <span m='3062720'>going</span> <span
  m='3062850'>to</span> <span m='3062900'>be</span> <span
  m='3063000'>something</span> <span m='3063310'>like</span> <span
  m='3063570'>n</span> <span m='3063880'>times</span> <span
  m='3064220'>log</span> <span m='3064850'>s,</span> <span
  m='3066210'>because</span> <span m='3066380'>if</span> <span
  m='3066480'>you</span> <span m='3066590'>write</span> <span
  m='3066760'>it</span> <span m='3066850'>out</span> <span m='3066940'>in</span>
  <span m='3067030'>binary</span> <span m='3067440'>you</span> <span
  m='3067530'>would</span> <span m='3067640'>need</span> <span
  m='3067840'>log</span> <span m='3068230'>s,</span> <span
  m='3069180'>bits</span> <span m='3069700'>to</span> <span
  m='3069830'>write</span> <span m='3070010'>down</span> <span
  m='3070200'>those</span> <span m='3070350'>numbers.</span> <span
  m='3071110'>But</span> <span m='3071210'>it</span> <span m='3071285'>is</span>
  <span m='3071360'>not</span> <span m='3071910'>n</span> <span
  m='3072100'>times</span> <span m='3072390'>s.</span> <span
  m='3074090'>This</span> <span m='3074270'>would</span> <span
  m='3074560'>be</span> <span m='3074720'>the</span> <span
  m='3074820'>binary</span> <span m='3075480'>encoding</span> <span
  m='3076010'>of</span> <span m='3076100'>the</span> <span
  m='3076220'>input,</span> <span m='3077650'>but</span> <span
  m='3077680'>the</span> <span m='3077790'>running</span> <span
  m='3078050'>time</span> <span m='3078350'>is</span> <span
  m='3078480'>this.</span> <span m='3079060'>Now</span> <span
  m='3079310'>s</span> <span m='3079690'>is</span> <span
  m='3079890'>exponential</span> <span m='3081040'>in</span> <span
  m='3081200'>log</span> <span m='3081570'>s,</span> <span
  m='3081810'>this</span> <span m='3082380'>is,</span> <span
  m='3082570'>at</span> <span m='3082700'>best,</span> <span
  m='3082960'>an</span> <span m='3083080'>exponential</span> <span
  m='3083640'>time</span> <span m='3083890'>algorithm.</span> <span
  m='3084670'>But</span> <span m='3084790'>it's</span> <span
  m='3084930'>really</span> <span m='3085170'>not</span> <span
  m='3085410'>that</span> <span m='3085900'>bad</span> <span
  m='3085950'>if</span> <span m='3086000'>s</span> <span m='3086230'>is</span>
  <span m='3086350'>small,</span> <span m='3087190'>and</span> <span
  m='3087390'>so</span> <span m='3087550'>we</span> <span
  m='3087710'>call</span> <span m='3088030'>it</span> <span
  m='3088340'>pseudopolynomial</span> <span m='3089150'>time.</span>
  </p><p><span m='3090810'>What</span> <span m='3090980'>does</span> <span
  m='3091050'>pseudopolynomial</span> <span m='3091890'>mean?</span> <span
  m='3094180'>It</span> <span m='3094330'>just</span> <span
  m='3094560'>means</span> <span m='3094980'>that</span> <span
  m='3095110'>your</span> <span m='3095240'>polynomial</span> <span
  m='3096270'>in</span> <span m='3096530'>n,</span> <span m='3097580'>the</span>
  <span m='3097680'>input</span> <span m='3097990'>size,</span> <span
  m='3098530'>which</span> <span m='3098665'>might</span> <span
  m='3098800'>be</span> <span m='3099070'>this,</span> <span
  m='3099920'>and</span> <span m='3100980'>in</span> <span
  m='3101300'>the</span> <span m='3101420'>numbers</span> <span
  m='3102080'>that</span> <span m='3102210'>are</span> <span
  m='3102330'>in</span> <span m='3102530'>your</span> <span
  m='3102670'>input.</span> <span m='3103800'>Numbers</span> <span
  m='3104170'>here</span> <span m='3104350'>means</span> <span
  m='3104670'>integers,</span> <span m='3105480'>basically,</span> <span
  m='3105550'>otherwise</span> <span m='3105870'>it's</span> <span
  m='3106070'>not</span> <span m='3106230'>really</span> <span
  m='3106390'>well</span> <span m='3106570'>defined.</span> <span
  m='3107510'>So</span> <span m='3107660'>in</span> <span
  m='3107830'>this</span> <span m='3108000'>case</span> <span
  m='3108300'>we</span> <span m='3108450'>have</span> <span m='3108630'>a</span>
  <span m='3108680'>bunch</span> <span m='3109000'>of</span> <span
  m='3109770'>integers,</span> <span m='3110500'>but</span> <span
  m='3110540'>in</span> <span m='3110630'>particular</span> <span
  m='3111030'>we</span> <span m='3111150'>have</span> <span
  m='3111380'>s.</span> <span m='3112900'>And</span> <span m='3113560'>so</span>
  <span m='3113650'>there's</span> <span m='3113930'>S</span> <span
  m='3114055'>and</span> <span m='3114180'>the</span> <span
  m='3114680'>si's.</span> <span m='3115670'>This</span> <span
  m='3115890'>is</span> <span m='3115970'>definitely</span> <span
  m='3116320'>polynomial</span> <span m='3117040'>in</span> <span
  m='3117250'>n</span> <span m='3117500'>and</span> <span m='3117690'>s.</span>
  <span m='3117950'>It</span> <span m='3118210'>is</span> <span
  m='3118330'>the</span> <span m='3118420'>product</span> <span
  m='3118820'>of</span> <span m='3118910'>n</span> <span m='3118996'>and</span>
  <span m='3119083'>S.</span> <span m='3119170'>So</span> <span
  m='3119430'>you</span> <span m='3119550'>think</span> <span
  m='3119800'>of</span> <span m='3119880'>this</span> <span
  m='3120080'>as</span> <span m='3120750'>pseudoquadratic</span> <span
  m='3121700'>time,</span> <span m='3122130'>I</span> <span
  m='3122250'>guess?</span> <span m='3122950'>Because</span> <span
  m='3123120'>it's</span> <span m='3123300'>quadratic,</span> <span
  m='3123810'>but</span> <span m='3123930'>one</span> <span
  m='3124130'>of</span> <span m='3124210'>the</span> <span
  m='3124340'>things</span> <span m='3124710'>is</span> <span
  m='3125570'>pseudo,</span> <span m='3125980'>meaning</span> <span
  m='3126310'>it</span> <span m='3126440'>is</span> <span m='3126690'>one</span>
  <span m='3126880'>of</span> <span m='3127020'>the</span> <span
  m='3127090'>numbers</span> <span m='3127660'>in</span> <span
  m='3127740'>the</span> <span m='3127860'>input.</span> </p><p><span
  m='3129390'>So</span> <span m='3129480'>if</span> <span m='3129560'>the</span>
  <span m='3129650'>number</span> <span m='3130170'>is</span> <span
  m='3130350'>big</span> <span m='3131140'>in</span> <span m='3131600'>k</span>
  <span m='3131830'>bits,</span> <span m='3132160'>so</span> <span
  m='3132185'>I</span> <span m='3132210'>can</span> <span
  m='3132360'>write</span> <span m='3132580'>down</span> <span
  m='3132810'>a</span> <span m='3132860'>number</span> <span
  m='3133140'>that's</span> <span m='3133340'>of</span> <span
  m='3133420'>size</span> <span m='3133880'>2</span> <span m='3134050'>to</span>
  <span m='3134130'>the</span> <span m='3134240'>k.</span> <span
  m='3135620'>So</span> <span m='3135940'>it's</span> <span
  m='3136160'>kind</span> <span m='3136590'>of</span> <span
  m='3136850'>in</span> <span m='3137060'>between</span> <span
  m='3137500'>polynomial</span> <span m='3137820'>and</span> <span
  m='3138140'>exponential,</span> <span m='3138820'>you</span> <span
  m='3139170'>might</span> <span m='3139410'>say.</span> <span
  m='3139880'>Polynomial</span> <span m='3140380'>good,</span> <span
  m='3140940'>exponential</span> <span m='3141410'>bad,</span> <span
  m='3142070'>pseudopolynomial,</span> <span m='3143480'>it's</span> <span
  m='3143690'>all</span> <span m='3143770'>right.</span> <span
  m='3145860'>That's</span> <span m='3146100'>the</span> <span
  m='3146200'>lesson.</span> <span m='3147590'>And</span> <span
  m='3147810'>for</span> <span m='3148370'>knapsack,</span> <span
  m='3148940'>this</span> <span m='3149590'>is</span> <span
  m='3149680'>the</span> <span m='3149760'>best</span> <span
  m='3150050'>we</span> <span m='3150150'>can</span> <span
  m='3150310'>do,</span> <span m='3151940'>as</span> <span
  m='3152300'>we'll</span> <span m='3152450'>talk</span> <span
  m='3152660'>about</span> <span m='3152860'>later.</span> <span
  m='3153120'>Pseudopolynomial</span> <span m='3153880'>is</span> <span
  m='3154010'>really</span> <span m='3154330'>the</span> <span
  m='3154570'>best</span> <span m='3154810'>you</span> <span
  m='3154900'>could</span> <span m='3155010'>hope</span> <span
  m='3155200'>for.</span> <span m='3156400'>So,</span> <span
  m='3156680'>sometimes</span> <span m='3157310'>that's</span> <span
  m='3157600'>as</span> <span m='3157700'>good</span> <span
  m='3157840'>as</span> <span m='3157910'>you</span> <span
  m='3158010'>can</span> <span m='3158110'>do</span> <span
  m='3158270'>and</span> <span m='3158380'>dynamic</span> <span
  m='3158720'>programming</span> <span m='3159130'>lets</span> <span
  m='3159320'>you</span> <span m='3159400'>do</span> <span
  m='3159570'>it.</span> </p>
uid: a394c84bb84c79e401a7614c549dc8e2
type: courses
layout: video
---
