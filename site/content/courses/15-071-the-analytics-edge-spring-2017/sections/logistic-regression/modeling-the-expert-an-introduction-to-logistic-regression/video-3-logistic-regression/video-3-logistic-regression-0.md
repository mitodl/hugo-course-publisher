---
title: 'Video 3: Logistic Regression'
uid: 019a3b6f56929edf2c200fe0ac8db446
parent_uid: 8099bebbd4e81ce09baa3ede1f3ec357
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression/video-3-logistic-regression-0
short_url: video-3-logistic-regression-0
inline_embed_id: 1633403video3logisticregression80838909
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4740'>Logistic</span> <span m='5195'>regression</span> <span
  m='5650'>predicts</span> <span m='6105'>the</span> <span
  m='6560'>probability</span> <span m='7015'>of</span> <span m='7470'>the</span>
  <span m='7925'>outcome</span> <span m='8380'>variable</span> <span
  m='9060'>being</span> <span m='9740'>true.</span> </p><p><span
  m='10420'>In</span> <span m='10867'>this</span> <span
  m='11314'>example,</span> <span m='11761'>a</span> <span
  m='12208'>logistic</span> <span m='12655'>regression</span> <span
  m='13102'>model</span> <span m='13550'>would</span> <span
  m='13932'>predict</span> <span m='14315'>the</span> <span
  m='14698'>probability</span> <span m='15081'>that</span> <span
  m='15464'>the</span> <span m='15847'>patient</span> <span m='16230'>is</span>
  <span m='16727'>receiving</span> <span m='17225'>poor</span> <span
  m='17722'>care.</span> </p><p><span m='18220'>Or</span> <span
  m='18562'>if</span> <span m='18905'>we</span> <span m='19248'>denote</span>
  <span m='19591'>the</span> <span m='19934'>PoorCare</span> <span
  m='20277'>variable</span> <span m='20620'>by</span> <span m='21142'>y,</span>
  <span m='21665'>the</span> <span m='22187'>probability</span> <span
  m='22710'>that</span> <span m='23232'>y</span> <span m='23755'>=</span> <span
  m='24277'>1.</span> </p><p><span m='24800'>For</span> <span
  m='25145'>the</span> <span m='25490'>remainder</span> <span
  m='25835'>of</span> <span m='26180'>this</span> <span
  m='26525'>lecture,</span> <span m='26870'>we</span> <span
  m='27667'>will</span> <span m='28465'>denote</span> <span
  m='29262'>poor</span> <span m='30060'>care</span> <span m='30857'>by</span>
  <span m='31655'>1,</span> <span m='32452'>and</span> <span
  m='33250'>good</span> <span m='34047'>care</span> <span m='34845'>by</span>
  <span m='35642'>zero.</span> </p><p><span m='39110'>So,</span> <span
  m='39526'>since</span> <span m='39943'>the</span> <span
  m='40360'>outcome</span> <span m='40776'>is</span> <span
  m='41193'>either</span> <span m='41610'>0</span> <span m='42026'>or</span>
  <span m='42443'>1,</span> <span m='42860'>this</span> <span
  m='43217'>means</span> <span m='43574'>that</span> <span m='43931'>the</span>
  <span m='44289'>probability</span> <span m='44646'>that</span> <span
  m='45003'>the</span> <span m='45360'>outcome</span> <span
  m='45718'>variable</span> <span m='46075'>is</span> <span m='46432'>0</span>
  <span m='46790'>is</span> <span m='47189'>just</span> <span m='47588'>1</span>
  <span m='47987'>minus</span> <span m='48386'>the</span> <span
  m='48785'>probability</span> <span m='49185'>that</span> <span
  m='49584'>the</span> <span m='49983'>outcome</span> <span
  m='50382'>variable</span> <span m='50781'>is</span> <span m='51180'>1.</span>
  </p><p><span m='51580'>So</span> <span m='51952'>by</span> <span
  m='52324'>predicting</span> <span m='52696'>the</span> <span
  m='53068'>probability</span> <span m='53441'>that</span> <span
  m='53813'>y</span> <span m='54185'>=</span> <span m='54557'>1,</span> <span
  m='54930'>we</span> <span m='55426'>also</span> <span m='55923'>get</span>
  <span m='56420'>the</span> <span m='56916'>probability</span> <span
  m='57413'>that</span> <span m='57910'>y</span> <span m='58406'>=</span> <span
  m='58903'>0.</span> </p><p><span m='59400'>Just</span> <span
  m='59738'>like</span> <span m='60076'>in</span> <span m='60415'>linear</span>
  <span m='60753'>regression,</span> <span m='61091'>we</span> <span
  m='61430'>have</span> <span m='61912'>a</span> <span m='62394'>set</span>
  <span m='62876'>of</span> <span m='63358'>independent</span> <span
  m='63841'>variables,</span> <span m='64323'>x1</span> <span
  m='64805'>through</span> <span m='65287'>xk,</span> <span
  m='65770'>where</span> <span m='66226'>k</span> <span m='66682'>is</span>
  <span m='67138'>the</span> <span m='67595'>total</span> <span
  m='68051'>number</span> <span m='68507'>of</span> <span
  m='68963'>independent</span> <span m='69420'>variables</span> <span
  m='69876'>we</span> <span m='70332'>have.</span> </p><p><span
  m='70789'>Then</span> <span m='71152'>to</span> <span m='71515'>predict</span>
  <span m='71879'>the</span> <span m='72242'>probability</span> <span
  m='72606'>that</span> <span m='72969'>y</span> <span m='73333'>=</span> <span
  m='73696'>1,</span> <span m='74060'>we</span> <span m='74628'>use</span> <span
  m='75197'>what's</span> <span m='75766'>called</span> <span
  m='76335'>the</span> <span m='76903'>Logistic</span> <span
  m='77472'>Response</span> <span m='78041'>Function.</span> </p><p><span
  m='78610'>This</span> <span m='79072'>seems</span> <span m='79535'>like</span>
  <span m='79998'>a</span> <span m='80461'>complicated,</span> <span
  m='80924'>nonlinear</span> <span m='81387'>equation,</span> <span
  m='81850'>but</span> <span m='82241'>you</span> <span m='82632'>can</span>
  <span m='83023'>see</span> <span m='83415'>the</span> <span
  m='83806'>familiar</span> <span m='84197'>linear</span> <span
  m='84588'>regression</span> <span m='84980'>equation</span> <span
  m='85828'>in</span> <span m='86676'>this</span> <span
  m='87525'>Logistic</span> <span m='88373'>Response</span> <span
  m='89221'>Function.</span> </p><p><span m='90070'>The</span> <span
  m='90463'>Logistic</span> <span m='90857'>Response</span> <span
  m='91251'>Function</span> <span m='91645'>is</span> <span
  m='92039'>used</span> <span m='92419'>to</span> <span m='92799'>produce</span>
  <span m='93179'>a</span> <span m='93559'>number</span> <span
  m='93939'>between</span> <span m='94319'>0</span> <span m='94699'>and</span>
  <span m='95079'>1.</span> </p><p><span m='95460'>Let's</span> <span
  m='95812'>understand</span> <span m='96165'>this</span> <span
  m='96518'>function</span> <span m='96871'>a</span> <span
  m='97224'>little</span> <span m='97577'>better.</span> </p><p><span
  m='100509'>This</span> <span m='100923'>plot</span> <span
  m='101337'>shows</span> <span m='101752'>the</span> <span
  m='102166'>logistic</span> <span m='102581'>response</span> <span
  m='102995'>function</span> <span m='103410'>for</span> <span
  m='103868'>different</span> <span m='104327'>values</span> <span
  m='104786'>of</span> <span m='105245'>the</span> <span
  m='105703'>linear</span> <span m='106162'>regression</span> <span
  m='106621'>piece.</span> </p><p><span m='107080'>The</span> <span
  m='107512'>logistic</span> <span m='107944'>response</span> <span
  m='108376'>function</span> <span m='108808'>always</span> <span
  m='109240'>takes</span> <span m='109691'>values</span> <span
  m='110142'>between</span> <span m='110593'>0</span> <span
  m='111044'>and</span> <span m='111495'>1,</span> <span m='111946'>which</span>
  <span m='112397'>makes</span> <span m='112848'>sense,</span> <span
  m='113300'>since</span> <span m='113870'>it</span> <span
  m='114440'>equals</span> <span m='115010'>a</span> <span
  m='115580'>probability.</span> </p><p><span m='116150'>A</span> <span
  m='116624'>positive</span> <span m='117098'>coefficient</span> <span
  m='117572'>value</span> <span m='118047'>for</span> <span m='118521'>a</span>
  <span m='118995'>variable</span> <span m='119470'>increases</span> <span
  m='120050'>the</span> <span m='120630'>linear</span> <span
  m='121210'>regression</span> <span m='121790'>piece,</span> <span
  m='122370'>which</span> <span m='122816'>increases</span> <span
  m='123262'>the</span> <span m='123708'>probability</span> <span
  m='124155'>that</span> <span m='124601'>y</span> <span m='125047'>=</span>
  <span m='125493'>1,</span> <span m='125940'>or</span> <span
  m='126344'>increases</span> <span m='126748'>the</span> <span
  m='127152'>probability</span> <span m='127557'>of</span> <span
  m='127961'>poor</span> <span m='128365'>care.</span> </p><p><span
  m='132530'>On</span> <span m='132971'>the</span> <span m='133412'>other</span>
  <span m='133853'>hand,</span> <span m='134295'>a</span> <span
  m='134736'>negative</span> <span m='135177'>coefficient</span> <span
  m='135618'>value</span> <span m='136060'>for</span> <span m='136672'>a</span>
  <span m='137285'>variable</span> <span m='137897'>decreases</span> <span
  m='138510'>the</span> <span m='139122'>linear</span> <span
  m='139735'>regression</span> <span m='140347'>piece,</span> <span
  m='140960'>which</span> <span m='141420'>in</span> <span
  m='141880'>turn</span> <span m='142340'>decreases</span> <span
  m='142800'>the</span> <span m='143260'>probability</span> <span
  m='143720'>that</span> <span m='144180'>y</span> <span m='144640'>=</span>
  <span m='145100'>1,</span> <span m='145560'>or</span> <span
  m='146222'>increases</span> <span m='146885'>the</span> <span
  m='147548'>probability</span> <span m='148211'>of</span> <span
  m='148874'>good</span> <span m='149537'>care.</span> </p><p><span
  m='150200'>The</span> <span m='150736'>coefficients,</span> <span
  m='151273'>or</span> <span m='151810'>betas,</span> <span
  m='152346'>are</span> <span m='152883'>selected</span> <span
  m='153420'>to</span> <span m='153790'>predict</span> <span m='154161'>a</span>
  <span m='154532'>high</span> <span m='154903'>probability</span> <span
  m='155274'>for</span> <span m='155645'>the</span> <span
  m='156016'>actual</span> <span m='156387'>poor</span> <span
  m='156758'>care</span> <span m='157129'>cases,</span> <span
  m='157500'>and</span> <span m='157940'>to</span> <span
  m='158380'>predict</span> <span m='158820'>a</span> <span
  m='159260'>low</span> <span m='159700'>probability</span> <span
  m='160140'>for</span> <span m='160580'>the</span> <span
  m='161020'>actual</span> <span m='161460'>good</span> <span
  m='161900'>care</span> <span m='162340'>cases.</span> </p><p><span
  m='162780'>Another</span> <span m='163142'>useful</span> <span
  m='163504'>way</span> <span m='163866'>to</span> <span m='164228'>think</span>
  <span m='164591'>about</span> <span m='164953'>the</span> <span
  m='165315'>logistic</span> <span m='165677'>response</span> <span
  m='166040'>function</span> <span m='166493'>is</span> <span
  m='166946'>in</span> <span m='167400'>terms</span> <span m='167853'>of</span>
  <span m='168306'>Odds,</span> <span m='168760'>like</span> <span
  m='169213'>in</span> <span m='169666'>gambling.</span> </p><p><span
  m='170120'>The</span> <span m='170567'>Odds</span> <span m='171014'>are</span>
  <span m='171461'>the</span> <span m='171908'>probability</span> <span
  m='172355'>of</span> <span m='172802'>1</span> <span m='173250'>divided</span>
  <span m='173871'>by</span> <span m='174493'>the</span> <span
  m='175115'>probability</span> <span m='175736'>of</span> <span
  m='176358'>0.</span> </p><p><span m='176980'>The</span> <span
  m='177312'>Odds</span> <span m='177644'>are</span> <span
  m='177976'>greater</span> <span m='178308'>than</span> <span
  m='178640'>1</span> <span m='178972'>if</span> <span m='179304'>1</span> <span
  m='179636'>is</span> <span m='179968'>more</span> <span
  m='180300'>likely,</span> <span m='180632'>and</span> <span
  m='180964'>less</span> <span m='181296'>than</span> <span m='181628'>1</span>
  <span m='181960'>if</span> <span m='182322'>0</span> <span
  m='182684'>is</span> <span m='183046'>more</span> <span
  m='183408'>likely.</span> </p><p><span m='183770'>The</span> <span
  m='184180'>Odds</span> <span m='184590'>are</span> <span
  m='185000'>equal</span> <span m='185410'>to</span> <span m='185820'>1</span>
  <span m='186230'>if</span> <span m='186640'>the</span> <span
  m='187050'>outcomes</span> <span m='187460'>are</span> <span
  m='187870'>equally</span> <span m='188280'>likely.</span> </p><p><span
  m='188690'>If</span> <span m='189117'>you</span> <span
  m='189544'>substitute</span> <span m='189971'>the</span> <span
  m='190398'>Logistic</span> <span m='190825'>Response</span> <span
  m='191252'>Function</span> <span m='191680'>for</span> <span
  m='191978'>the</span> <span m='192276'>probabilities</span> <span
  m='192575'>in</span> <span m='192873'>the</span> <span m='193171'>Odds</span>
  <span m='193470'>equation</span> <span m='193900'>on</span> <span
  m='194330'>the</span> <span m='194760'>previous</span> <span
  m='195190'>slide,</span> <span m='195620'>you</span> <span
  m='196050'>can</span> <span m='196404'>see</span> <span m='196758'>that</span>
  <span m='197112'>the</span> <span m='197466'>Odds</span> <span
  m='197820'>are</span> <span m='198174'>equal</span> <span m='198528'>to</span>
  <span m='198882'>"e"</span> <span m='199236'>raised</span> <span
  m='199590'>to</span> <span m='200030'>the</span> <span m='200470'>power</span>
  <span m='200910'>of</span> <span m='201350'>the</span> <span
  m='201790'>linear</span> <span m='202230'>regression</span> <span
  m='202670'>equation.</span> </p><p><span m='203110'>By</span> <span
  m='203576'>taking</span> <span m='204043'>the</span> <span
  m='204510'>log</span> <span m='204976'>of</span> <span m='205443'>both</span>
  <span m='205910'>sides,</span> <span m='206376'>the</span> <span
  m='206843'>log(Odds),</span> <span m='207310'>or</span> <span
  m='207723'>what</span> <span m='208137'>we</span> <span m='208551'>call</span>
  <span m='208965'>the</span> <span m='209378'>Logit,</span> <span
  m='209792'>looks</span> <span m='210206'>exactly</span> <span
  m='210620'>like</span> <span m='211210'>the</span> <span
  m='211800'>linear</span> <span m='212390'>regression</span> <span
  m='212980'>equation.</span> </p><p><span m='213570'>This</span> <span
  m='213991'>helps</span> <span m='214412'>us</span> <span
  m='214833'>understand</span> <span m='215254'>how</span> <span
  m='215675'>the</span> <span m='216096'>coefficients,</span> <span
  m='216517'>or</span> <span m='216938'>betas,</span> <span
  m='217359'>affect</span> <span m='217780'>our</span> <span
  m='218370'>prediction</span> <span m='218960'>of</span> <span
  m='219550'>the</span> <span m='220140'>probability.</span> </p><p><span
  m='220730'>A</span> <span m='221271'>positive</span> <span
  m='221812'>beta</span> <span m='222354'>value</span> <span
  m='222895'>increases</span> <span m='223437'>the</span> <span
  m='223978'>Logit,</span> <span m='224520'>which</span> <span
  m='224955'>in</span> <span m='225390'>turn</span> <span
  m='225825'>increases</span> <span m='226260'>the</span> <span
  m='226695'>Odds</span> <span m='227130'>of</span> <span m='227565'>1.</span>
  </p><p><span m='228000'>A</span> <span m='228507'>negative</span> <span
  m='229014'>beta</span> <span m='229521'>value</span> <span
  m='230028'>decreases</span> <span m='230535'>the</span> <span
  m='231042'>Logit,</span> <span m='231550'>which</span> <span
  m='232035'>in</span> <span m='232520'>turn,</span> <span
  m='233005'>decreases</span> <span m='233490'>the</span> <span
  m='233975'>Odds</span> <span m='234460'>of</span> <span m='234945'>one.</span>
  </p><p><span m='235430'>In</span> <span m='235789'>the</span> <span
  m='236148'>next</span> <span m='236507'>video,</span> <span
  m='236866'>we'll</span> <span m='237225'>build</span> <span
  m='237585'>a</span> <span m='237944'>logistic</span> <span
  m='238303'>regression</span> <span m='238662'>model</span> <span
  m='239021'>in</span> <span m='239380'>R,</span> <span m='239740'>and</span>
  <span m='240218'>predict</span> <span m='240696'>the</span> <span
  m='241175'>quality</span> <span m='241653'>of</span> <span
  m='242131'>care.</span> </p>
embedded_media:
  - uid: 47b4ea41310465454760de23e86a67bb
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: U57wvHVpe-8
  - uid: ce7e13fc587d60f8254b77de34f386b9
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: U57wvHVpe-8
  - uid: 0a2293f02579a6e6de0d456b6ce99bdb
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/U57wvHVpe-8/default.jpg'
  - uid: 48239f4a43633ec709ecce3df15ad71c
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: U57wvHVpe-8.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression/video-3-logistic-regression-0/U57wvHVpe-8.srt
  - uid: e53c2e5db622c7f538ca05346be62ac9
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: U57wvHVpe-8.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-3-logistic-regression/video-3-logistic-regression-0/U57wvHVpe-8.pdf
  - uid: 5434a04b5c3c8e7269b8892d1add27a0
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 4b109d84056f4421b6ed0c889c7710c2
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d2a9701ee9c597edfdb88b9257f62d70
    parent_uid: 019a3b6f56929edf2c200fe0ac8db446
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.2.04_300k.mp4
type: courses
layout: video
---
