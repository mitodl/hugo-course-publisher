---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 6m39f8lDONs
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: Video-YouTube-Stream
    type: Video
    uid: 4436f1775a7e04c82cf0b35c30c7f84d
  - id: 3Play-3Play YouTube id-Stream
    media_location: 6m39f8lDONs
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b8acc5242e91adf5db9680756d7ae132
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/6m39f8lDONs/default.jpg'
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 11ceda78c4ebc7cbae87452d4008c5b0
  - id: 6m39f8lDONs.srt
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-6-evaluating-the-model/video-6-evaluating-the-model-0/6m39f8lDONs.srt
    title: 3play caption file
    type: null
    uid: 104b3ef4fda69948c75e6761ff0af44c
  - id: 6m39f8lDONs.pdf
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-6-evaluating-the-model/video-6-evaluating-the-model-0/6m39f8lDONs.pdf
    title: 3play pdf file
    type: null
    uid: f7fedcec36e465ae51acd17f0c120e7c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d22d3ca4eaf3ec943a473414d018a86b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ab7679c3e81708e842d1622a297d6780
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.4.07_300k.mp4
    parent_uid: a5a7534cfac2a1a44d37286c969fee55
    title: Video-Internet Archive-MP4
    type: Video
    uid: 170183230ab5e3e29e5acc17f2a8b69a
inline_embed_id: 24361654video6evaluatingthemodel57767841
order_index: 1258
parent_uid: 54a5cfa02012d0816815948514b434c1
related_resources_text: ''
short_url: video-6-evaluating-the-model-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/predictive-coding-bringing-text-analytics-to-the-courtroom-recitation/video-6-evaluating-the-model/video-6-evaluating-the-model-0
title: 'Video 6: Evaluating the Model'
transcript: >-
  <p><span m='4530'>Now</span> <span m='4752'>that</span> <span
  m='4975'>we've</span> <span m='5198'>trained</span> <span m='5421'>a</span>
  <span m='5644'>model,</span> <span m='5867'>we</span> <span
  m='6090'>need</span> <span m='6472'>to</span> <span m='6855'>evaluate</span>
  <span m='7237'>it</span> <span m='7620'>on</span> <span m='8002'>the</span>
  <span m='8385'>test</span> <span m='8767'>set.</span> </p><p><span
  m='9150'>So</span> <span m='9697'>let's</span> <span m='10244'>build</span>
  <span m='10791'>an</span> <span m='11338'>object</span> <span
  m='11885'>called</span> <span m='12432'>pred</span> <span
  m='12980'>that</span> <span m='13442'>has</span> <span m='13904'>the</span>
  <span m='14366'>predicted</span> <span m='14828'>probabilities</span> <span
  m='15290'>for</span> <span m='15591'>each</span> <span m='15892'>class</span>
  <span m='16194'>from</span> <span m='16495'>our</span> <span
  m='16797'>cart</span> <span m='17098'>model.</span> </p><p><span
  m='17400'>So</span> <span m='17918'>we'll</span> <span m='18437'>use</span>
  <span m='18956'>predict</span> <span m='19475'>of</span> <span
  m='19994'>emailCART,</span> <span m='20513'>our</span> <span
  m='21032'>cart</span> <span m='21551'>model,</span> <span
  m='22070'>passing</span> <span m='22472'>it</span> <span
  m='22875'>newdata=test,</span> <span m='23277'>to</span> <span
  m='23680'>get</span> <span m='24082'>test</span> <span m='24485'>set</span>
  <span m='24887'>predicted</span> <span m='25290'>probabilities.</span>
  </p><p><span m='27380'>So</span> <span m='27734'>to</span> <span
  m='28088'>recall</span> <span m='28442'>the</span> <span
  m='28797'>structure</span> <span m='29151'>of</span> <span
  m='29505'>pred,</span> <span m='29860'>we</span> <span m='30328'>can</span>
  <span m='30796'>look</span> <span m='31264'>at</span> <span
  m='31732'>the</span> <span m='32200'>first</span> <span m='32668'>10</span>
  <span m='33136'>rows</span> <span m='33604'>with</span> <span
  m='34072'>predpred[1:10,].</span> </p><p><span m='34540'>So</span> <span
  m='34734'>this</span> <span m='34928'>is</span> <span m='35122'>the</span>
  <span m='35317'>rows</span> <span m='35511'>we</span> <span
  m='35705'>want.</span> </p><p><span m='35900'>We</span> <span
  m='36164'>want</span> <span m='36428'>all</span> <span m='36692'>the</span>
  <span m='36956'>columns.</span> </p><p><span m='37220'>So</span> <span
  m='37658'>we'll</span> <span m='38096'>just</span> <span
  m='38534'>leave</span> <span m='38972'>a</span> <span m='39410'>comma</span>
  <span m='39848'>and</span> <span m='40286'>nothing</span> <span
  m='40724'>else</span> <span m='41162'>afterward.</span> </p><p><span
  m='41600'>So</span> <span m='42096'>the</span> <span m='42593'>left</span>
  <span m='43090'>column</span> <span m='43586'>here</span> <span
  m='44083'>is</span> <span m='44580'>the</span> <span
  m='45076'>predictive</span> <span m='45573'>probability</span> <span
  m='46070'>of</span> <span m='46580'>the</span> <span m='47090'>document</span>
  <span m='47600'>being</span> <span m='48110'>non-responsive.</span>
  </p><p><span m='48620'>And</span> <span m='48912'>the</span> <span
  m='49205'>right</span> <span m='49497'>column</span> <span m='49790'>is</span>
  <span m='50082'>the</span> <span m='50375'>predictive</span> <span
  m='50667'>probability</span> <span m='50960'>of</span> <span
  m='51300'>the</span> <span m='51640'>document</span> <span
  m='51980'>being</span> <span m='52320'>responsive.</span> </p><p><span
  m='52660'>They</span> <span m='53090'>sum</span> <span m='53520'>to</span>
  <span m='53950'>1.</span> </p><p><span m='54380'>So</span> <span
  m='54701'>in</span> <span m='55022'>our</span> <span m='55343'>case,</span>
  <span m='55665'>we</span> <span m='55986'>want</span> <span
  m='56307'>to</span> <span m='56628'>extract</span> <span m='56950'>the</span>
  <span m='57338'>predictive</span> <span m='57727'>probability</span> <span
  m='58116'>of</span> <span m='58505'>the</span> <span m='58893'>document</span>
  <span m='59282'>being</span> <span m='59671'>responsive.</span> </p><p><span
  m='60060'>So</span> <span m='60371'>we're</span> <span
  m='60682'>looking</span> <span m='60994'>for</span> <span m='61305'>the</span>
  <span m='61617'>rightmost</span> <span m='61928'>column.</span> </p><p><span
  m='62240'>So</span> <span m='62781'>we'll</span> <span m='63322'>create</span>
  <span m='63864'>an</span> <span m='64405'>object</span> <span
  m='64947'>called</span> <span m='65488'>pred.prob.</span> </p><p><span
  m='66030'>And</span> <span m='66714'>we'll</span> <span
  m='67398'>select</span> <span m='68083'>the</span> <span
  m='68767'>right</span> <span m='69452'>most</span> <span m='70136'>or</span>
  <span m='70821'>second</span> <span m='71505'>column.</span> </p><p><span
  m='72190'>All</span> <span m='72440'>right.</span> </p><p><span
  m='72690'>So</span> <span m='73015'>pred.prob</span> <span
  m='73341'>now</span> <span m='73667'>contains</span> <span
  m='73992'>our</span> <span m='74318'>test</span> <span m='74644'>set</span>
  <span m='74970'>predicted</span> <span m='75535'>probabilities.</span>
  </p><p><span m='76100'>And</span> <span m='76431'>we're</span> <span
  m='76763'>interested</span> <span m='77095'>in</span> <span
  m='77426'>the</span> <span m='77758'>accuracy</span> <span m='78090'>of</span>
  <span m='78378'>our</span> <span m='78667'>model</span> <span
  m='78955'>on</span> <span m='79244'>the</span> <span m='79532'>test</span>
  <span m='79821'>set.</span> </p><p><span m='80110'>So</span> <span
  m='80588'>for</span> <span m='81066'>this</span> <span
  m='81544'>computation,</span> <span m='82022'>we'll</span> <span
  m='82500'>use</span> <span m='82978'>a</span> <span m='83456'>cutoff</span>
  <span m='83934'>of</span> <span m='84412'>0.5.</span> </p><p><span
  m='84890'>And</span> <span m='85298'>so</span> <span m='85707'>we</span> <span
  m='86116'>can</span> <span m='86525'>just</span> <span m='86934'>table</span>
  <span m='87343'>the</span> <span m='87752'>true</span> <span
  m='88161'>outcome,</span> <span m='88570'>which</span> <span
  m='89287'>is</span> <span m='90004'>test$responsive</span> <span
  m='90721'>against</span> <span m='91438'>the</span> <span
  m='92155'>predicted</span> <span m='92872'>outcome,</span> <span
  m='93590'>which</span> <span m='94896'>is</span> <span
  m='96202'>pred.prob</span> <span m='97508'>&gt;=</span> <span
  m='98814'>0.5.</span> </p><p><span m='100120'>What</span> <span
  m='100639'>we</span> <span m='101158'>can</span> <span m='101677'>see</span>
  <span m='102196'>here</span> <span m='102715'>is</span> <span
  m='103234'>that</span> <span m='103753'>in</span> <span m='104272'>195</span>
  <span m='104791'>cases,</span> <span m='105310'>we</span> <span
  m='105711'>predict</span> <span m='106113'>false</span> <span
  m='106515'>when</span> <span m='106916'>the</span> <span
  m='107318'>left</span> <span m='107720'>column</span> <span
  m='108122'>and</span> <span m='108523'>the</span> <span m='108925'>true</span>
  <span m='109327'>outcome</span> <span m='109729'>was</span> <span
  m='110239'>zero,</span> <span m='110749'>non-responsive.</span> </p><p><span
  m='111259'>So</span> <span m='111579'>we</span> <span m='111899'>were</span>
  <span m='112219'>correct.</span> </p><p><span m='112539'>And</span> <span
  m='112914'>in</span> <span m='113290'>another</span> <span
  m='113666'>25,</span> <span m='114041'>we</span> <span
  m='114417'>correctly</span> <span m='114793'>identified</span> <span
  m='115168'>a</span> <span m='115544'>responsive</span> <span
  m='115920'>document.</span> </p><p><span m='117530'>In</span> <span
  m='117915'>20</span> <span m='118301'>cases,</span> <span m='118686'>we</span>
  <span m='119072'>identified</span> <span m='119457'>a</span> <span
  m='119843'>document</span> <span m='120228'>as</span> <span
  m='120614'>responsive,</span> <span m='121000'>but</span> <span
  m='121440'>it</span> <span m='121880'>was</span> <span
  m='122320'>actually</span> <span m='122760'>non-responsive.</span>
  </p><p><span m='123200'>And</span> <span m='123598'>in</span> <span
  m='123996'>17,</span> <span m='124395'>the</span> <span
  m='124793'>opposite</span> <span m='125191'>happened.</span> </p><p><span
  m='125590'>We</span> <span m='125973'>identified</span> <span
  m='126356'>a</span> <span m='126740'>document</span> <span
  m='127123'>as</span> <span m='127506'>non-responsive,</span> <span
  m='127890'>but</span> <span m='128328'>it</span> <span
  m='128766'>actually</span> <span m='129204'>was</span> <span
  m='129642'>responsive.</span> </p><p><span m='130080'>So</span> <span
  m='130790'>our</span> <span m='131500'>accuracy</span> <span
  m='132210'>is</span> <span m='132920'>195</span> <span m='133630'>+</span>
  <span m='134340'>25,</span> <span m='135050'>our</span> <span
  m='135760'>correct</span> <span m='136470'>results,</span> <span
  m='137180'>divided</span> <span m='137535'>by</span> <span
  m='137891'>the</span> <span m='138247'>total</span> <span
  m='138602'>number</span> <span m='138958'>of</span> <span
  m='139314'>elements</span> <span m='139670'>in</span> <span
  m='140437'>the</span> <span m='141204'>testing</span> <span
  m='141971'>set,</span> <span m='142739'>195</span> <span m='143506'>+</span>
  <span m='144273'>25</span> <span m='145040'>+</span> <span
  m='145808'>17</span> <span m='146575'>+</span> <span m='147342'>20.</span>
  </p><p><span m='148110'>So</span> <span m='148627'>we</span> <span
  m='149144'>have</span> <span m='149661'>an</span> <span
  m='150179'>accuracy</span> <span m='150696'>in</span> <span
  m='151213'>the</span> <span m='151730'>test</span> <span m='152248'>set</span>
  <span m='152765'>of</span> <span m='153282'>85.6%.</span> </p><p><span
  m='153800'>And</span> <span m='154024'>now</span> <span m='154248'>we</span>
  <span m='154472'>want</span> <span m='154697'>to</span> <span
  m='154921'>compare</span> <span m='155145'>ourselves</span> <span
  m='155370'>to</span> <span m='155658'>the</span> <span
  m='155947'>accuracy</span> <span m='156235'>of</span> <span
  m='156524'>the</span> <span m='156812'>baseline</span> <span
  m='157101'>model.</span> </p><p><span m='157390'>As</span> <span
  m='157720'>we've</span> <span m='158050'>already</span> <span
  m='158380'>established,</span> <span m='158710'>the</span> <span
  m='159040'>baseline</span> <span m='159370'>model</span> <span
  m='159700'>is</span> <span m='160134'>always</span> <span
  m='160568'>going</span> <span m='161003'>to</span> <span
  m='161437'>predict</span> <span m='161872'>the</span> <span
  m='162306'>document</span> <span m='162741'>is</span> <span
  m='163175'>non-responsive.</span> </p><p><span m='163610'>So</span> <span
  m='164086'>if</span> <span m='164563'>we</span> <span m='165039'>table</span>
  <span m='165516'>test$responsive,</span> <span m='165992'>we</span> <span
  m='166469'>see</span> <span m='166946'>that</span> <span
  m='167422'>it's</span> <span m='167899'>going</span> <span
  m='168375'>to</span> <span m='168852'>be</span> <span
  m='169329'>correct</span> <span m='169862'>in</span> <span
  m='170396'>215</span> <span m='170929'>of</span> <span m='171463'>the</span>
  <span m='171996'>cases.</span> </p><p><span m='172530'>So</span> <span
  m='173022'>then</span> <span m='173515'>the</span> <span
  m='174008'>accuracy</span> <span m='174501'>is</span> <span
  m='174994'>215</span> <span m='175487'>divided</span> <span
  m='175980'>by</span> <span m='176510'>the</span> <span m='177040'>total</span>
  <span m='177570'>number</span> <span m='178100'>of</span> <span
  m='178630'>test</span> <span m='179160'>set</span> <span
  m='179690'>observations.</span> </p><p><span m='180220'>So</span> <span
  m='181230'>that's</span> <span m='182240'>83.7%</span> <span
  m='183250'>accuracy.</span> </p><p><span m='184260'>So</span> <span
  m='184535'>we</span> <span m='184811'>see</span> <span m='185087'>just</span>
  <span m='185362'>a</span> <span m='185638'>small</span> <span
  m='185914'>improvement</span> <span m='186190'>in</span> <span
  m='186513'>accuracy</span> <span m='186836'>using</span> <span
  m='187159'>the</span> <span m='187482'>cart</span> <span
  m='187805'>model,</span> <span m='188128'>which,</span> <span
  m='188451'>as</span> <span m='188774'>we</span> <span m='189097'>know,</span>
  <span m='189420'>is</span> <span m='189873'>a</span> <span
  m='190327'>common</span> <span m='190781'>case</span> <span
  m='191235'>in</span> <span m='191688'>unbalanced</span> <span
  m='192142'>data</span> <span m='192596'>sets.</span> </p><p><span
  m='193050'>However,</span> <span m='193588'>as</span> <span
  m='194127'>in</span> <span m='194665'>most</span> <span
  m='195204'>document</span> <span m='195742'>retrieval</span> <span
  m='196281'>applications,</span> <span m='196820'>there</span> <span
  m='197170'>are</span> <span m='197521'>uneven</span> <span
  m='197872'>costs</span> <span m='198223'>for</span> <span
  m='198574'>different</span> <span m='198925'>types</span> <span
  m='199276'>of</span> <span m='199627'>errors</span> <span
  m='199978'>here.</span> </p><p><span m='200329'>Typically,</span> <span
  m='200702'>a</span> <span m='201075'>human</span> <span m='201449'>will</span>
  <span m='201822'>still</span> <span m='202196'>have</span> <span
  m='202569'>to</span> <span m='202943'>manually</span> <span
  m='203316'>review</span> <span m='203690'>all</span> <span
  m='204060'>of</span> <span m='204430'>the</span> <span
  m='204800'>predicted</span> <span m='205170'>responsive</span> <span
  m='205540'>documents</span> <span m='205910'>to</span> <span
  m='206325'>make</span> <span m='206741'>sure</span> <span
  m='207157'>they</span> <span m='207572'>are</span> <span
  m='207988'>actually</span> <span m='208404'>responsive.</span> </p><p><span
  m='208820'>Therefore,</span> <span m='209168'>if</span> <span
  m='209517'>we</span> <span m='209865'>have</span> <span m='210214'>a</span>
  <span m='210562'>false</span> <span m='210911'>positive,</span> <span
  m='211260'>in</span> <span m='211625'>which</span> <span m='211991'>a</span>
  <span m='212357'>non-responsive</span> <span m='212722'>document</span> <span
  m='213088'>is</span> <span m='213454'>labeled</span> <span
  m='213820'>as</span> <span m='214334'>responsive,</span> <span
  m='214848'>the</span> <span m='215362'>mistake</span> <span
  m='215876'>translates</span> <span m='216390'>to</span> <span
  m='216618'>a</span> <span m='216846'>bit</span> <span m='217074'>of</span>
  <span m='217302'>additional</span> <span m='217530'>work</span> <span
  m='217758'>in</span> <span m='217986'>the</span> <span
  m='218214'>manual</span> <span m='218442'>review</span> <span
  m='218670'>process</span> <span m='219117'>but</span> <span
  m='219564'>no</span> <span m='220011'>further</span> <span
  m='220458'>harm,</span> <span m='220905'>since</span> <span
  m='221352'>the</span> <span m='221799'>manual</span> <span
  m='222246'>review</span> <span m='222693'>process</span> <span
  m='223140'>will</span> <span m='223666'>remove</span> <span
  m='224192'>this</span> <span m='224718'>erroneous</span> <span
  m='225244'>result.</span> </p><p><span m='225770'>But</span> <span
  m='226028'>on</span> <span m='226286'>the</span> <span m='226544'>other</span>
  <span m='226802'>hand,</span> <span m='227060'>if</span> <span
  m='227319'>we</span> <span m='227577'>have</span> <span m='227835'>a</span>
  <span m='228093'>false</span> <span m='228351'>negative,</span> <span
  m='228610'>in</span> <span m='229036'>which</span> <span m='229463'>a</span>
  <span m='229890'>responsive</span> <span m='230316'>document</span> <span
  m='230743'>is</span> <span m='231170'>labeled</span> <span
  m='231596'>as</span> <span m='232023'>non-responsive</span> <span
  m='232450'>by</span> <span m='232805'>our</span> <span
  m='233161'>model,</span> <span m='233516'>we</span> <span
  m='233872'>will</span> <span m='234227'>miss</span> <span
  m='234583'>the</span> <span m='234938'>document</span> <span
  m='235294'>entirely</span> <span m='235650'>in</span> <span
  m='236216'>our</span> <span m='236782'>predictive</span> <span
  m='237348'>coding</span> <span m='237914'>process.</span> </p><p><span
  m='238480'>Therefore,</span> <span m='238770'>we're</span> <span
  m='239060'>going</span> <span m='239350'>to</span> <span
  m='239640'>sign</span> <span m='239930'>a</span> <span
  m='240220'>higher</span> <span m='240510'>cost</span> <span
  m='240800'>to</span> <span m='241090'>false</span> <span
  m='241380'>negatives</span> <span m='241670'>than</span> <span
  m='241955'>to</span> <span m='242240'>false</span> <span
  m='242525'>positives,</span> <span m='242810'>which</span> <span
  m='243095'>makes</span> <span m='243380'>this</span> <span m='243665'>a</span>
  <span m='243950'>good</span> <span m='244235'>time</span> <span
  m='244520'>to</span> <span m='244805'>look</span> <span m='245090'>at</span>
  <span m='245631'>other</span> <span m='246172'>cut-offs</span> <span
  m='246714'>on</span> <span m='247255'>our</span> <span m='247797'>ROC</span>
  <span m='248338'>curve.</span> </p>
uid: a5a7534cfac2a1a44d37286c969fee55
type: courses
layout: video
---
