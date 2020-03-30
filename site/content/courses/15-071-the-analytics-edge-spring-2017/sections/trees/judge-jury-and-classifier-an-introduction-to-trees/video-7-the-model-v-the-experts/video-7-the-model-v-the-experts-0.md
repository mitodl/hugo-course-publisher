---
title: 'Video 7: The Model v. The Experts'
uid: a2d5bd5426fb55c61abd2e90d90d7c3c
parent_uid: 2ca2e4f174a66019fbe68e97bba87376
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-7-the-model-v-the-experts/video-7-the-model-v-the-experts-0
short_url: video-7-the-model-v-the-experts-0
inline_embed_id: 39110133video7themodelv.theexperts4846079
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>So</span> <span m='4870'>can</span> <span m='5240'>a</span>
  <span m='5610'>CART</span> <span m='5980'>model</span> <span
  m='6350'>actually</span> <span m='6720'>predict</span> <span
  m='7090'>Supreme</span> <span m='7460'>Court</span> <span m='7830'>case</span>
  <span m='8200'>outcomes</span> <span m='8631'>better</span> <span
  m='9062'>than</span> <span m='9494'>a</span> <span m='9925'>group</span> <span
  m='10357'>of</span> <span m='10788'>experts?</span> </p><p><span
  m='11220'>Martin</span> <span m='11701'>and</span> <span m='12182'>his</span>
  <span m='12663'>colleagues</span> <span m='13144'>used</span> <span
  m='13625'>628</span> <span m='14106'>previous</span> <span
  m='14587'>Supreme</span> <span m='15068'>Court</span> <span
  m='15550'>cases</span> <span m='16132'>between</span> <span
  m='16714'>1994</span> <span m='17296'>and</span> <span m='17878'>2001</span>
  <span m='18461'>to</span> <span m='19043'>build</span> <span
  m='19625'>their</span> <span m='20207'>model.</span> </p><p><span
  m='20790'>They</span> <span m='21172'>made</span> <span
  m='21555'>predictions</span> <span m='21938'>for</span> <span
  m='22321'>the</span> <span m='22704'>68</span> <span m='23087'>cases</span>
  <span m='23470'>that</span> <span m='23951'>would</span> <span
  m='24432'>be</span> <span m='24914'>decided</span> <span m='25395'>in</span>
  <span m='25877'>October,</span> <span m='26358'>2002,</span> <span
  m='26840'>before</span> <span m='27457'>the</span> <span m='28075'>term</span>
  <span m='28692'>started.</span> </p><p><span m='29310'>Their</span> <span
  m='29688'>model</span> <span m='30067'>had</span> <span m='30446'>two</span>
  <span m='30825'>stages</span> <span m='31203'>of</span> <span
  m='31582'>CART</span> <span m='31961'>trees.</span> </p><p><span
  m='32340'>The</span> <span m='32810'>first</span> <span m='33280'>stage</span>
  <span m='33750'>involved</span> <span m='34220'>making</span> <span
  m='34690'>predictions</span> <span m='35160'>using</span> <span
  m='35595'>two</span> <span m='36030'>CART</span> <span m='36465'>trees.</span>
  </p><p><span m='36900'>One</span> <span m='37291'>to</span> <span
  m='37682'>predict</span> <span m='38073'>a</span> <span
  m='38464'>unanimous</span> <span m='38855'>liberal</span> <span
  m='39246'>decision</span> <span m='39637'>and</span> <span
  m='40028'>one</span> <span m='40420'>to</span> <span m='40966'>predict</span>
  <span m='41513'>a</span> <span m='42060'>unanimous</span> <span
  m='42606'>conservative</span> <span m='43153'>decision.</span> </p><p><span
  m='43700'>If</span> <span m='44136'>the</span> <span m='44572'>trees</span>
  <span m='45008'>gave</span> <span m='45444'>conflicting</span> <span
  m='45880'>responses</span> <span m='46316'>or</span> <span
  m='46752'>both</span> <span m='47188'>predicted</span> <span
  m='47624'>no,</span> <span m='48060'>then</span> <span m='48377'>they</span>
  <span m='48695'>moved</span> <span m='49012'>on</span> <span
  m='49330'>to</span> <span m='49647'>the</span> <span m='49965'>next</span>
  <span m='50282'>stage.</span> </p><p><span m='50600'>It</span> <span
  m='50962'>turns</span> <span m='51324'>out</span> <span m='51686'>that</span>
  <span m='52048'>about</span> <span m='52410'>50%</span> <span
  m='52772'>of</span> <span m='53134'>Supreme</span> <span
  m='53496'>Court</span> <span m='53858'>cases</span> <span
  m='54220'>result</span> <span m='54686'>in</span> <span m='55152'>a</span>
  <span m='55618'>unanimous</span> <span m='56084'>decision.</span> </p><p><span
  m='56550'>So</span> <span m='56918'>this</span> <span m='57286'>was</span>
  <span m='57655'>a</span> <span m='58023'>nice</span> <span
  m='58391'>first</span> <span m='58760'>step</span> <span m='59128'>to</span>
  <span m='59496'>detect</span> <span m='59865'>the</span> <span
  m='60233'>easier</span> <span m='60601'>cases.</span> </p><p><span
  m='60970'>The</span> <span m='61408'>second</span> <span
  m='61846'>stage</span> <span m='62285'>consisted</span> <span
  m='62723'>of</span> <span m='63161'>predicting</span> <span
  m='63600'>the</span> <span m='64126'>decision</span> <span m='64653'>of</span>
  <span m='65180'>each</span> <span m='65706'>individual</span> <span
  m='66233'>justice.</span> </p><p><span m='66760'>And</span> <span
  m='67118'>then</span> <span m='67476'>using</span> <span m='67834'>the</span>
  <span m='68192'>majority</span> <span m='68550'>decision</span> <span
  m='68908'>of</span> <span m='69266'>all</span> <span m='69624'>nine</span>
  <span m='69982'>justices</span> <span m='70340'>as</span> <span
  m='70888'>a</span> <span m='71437'>final</span> <span
  m='71985'>prediction</span> <span m='72534'>for</span> <span
  m='73082'>the</span> <span m='73631'>case.</span> </p><p><span
  m='74180'>In</span> <span m='74483'>this</span> <span
  m='74787'>lecture,</span> <span m='75091'>we</span> <span
  m='75395'>constructed</span> <span m='75698'>the</span> <span
  m='76002'>CART</span> <span m='76306'>tree</span> <span m='76610'>for</span>
  <span m='77253'>Justice</span> <span m='77896'>Stevens.</span> </p><p><span
  m='78539'>Here's</span> <span m='78959'>a</span> <span
  m='79379'>different</span> <span m='79799'>tree,</span> <span
  m='80219'>this</span> <span m='80639'>one</span> <span m='81059'>for</span>
  <span m='81479'>Justice</span> <span m='81899'>O'Connor.</span> </p><p><span
  m='82320'>The</span> <span m='82584'>first</span> <span m='82848'>split</span>
  <span m='83112'>is</span> <span m='83377'>whether</span> <span
  m='83641'>or</span> <span m='83905'>not</span> <span m='84170'>the</span>
  <span m='84540'>lower</span> <span m='84910'>court</span> <span
  m='85280'>decision</span> <span m='85650'>is</span> <span
  m='86020'>liberal.</span> </p><p><span m='86390'>If</span> <span
  m='86740'>yes,</span> <span m='87091'>then</span> <span m='87442'>we</span>
  <span m='87793'>predict</span> <span m='88144'>that</span> <span
  m='88495'>she</span> <span m='88846'>will</span> <span
  m='89197'>reverse</span> <span m='89548'>the</span> <span
  m='89899'>case.</span> </p><p><span m='90250'>This</span> <span
  m='90638'>makes</span> <span m='91027'>sense</span> <span
  m='91416'>because</span> <span m='91805'>Justice</span> <span
  m='92193'>O'Connor</span> <span m='92582'>is</span> <span
  m='92971'>generally</span> <span m='93360'>viewed</span> <span
  m='93922'>as</span> <span m='94484'>a</span> <span
  m='95046'>conservative</span> <span m='95608'>judge.</span> </p><p><span
  m='96170'>On</span> <span m='96507'>the</span> <span m='96844'>other</span>
  <span m='97181'>hand,</span> <span m='97519'>if</span> <span
  m='97856'>the</span> <span m='98193'>lower</span> <span m='98530'>court</span>
  <span m='98868'>decision</span> <span m='99205'>is</span> <span
  m='99542'>conservative,</span> <span m='99880'>we</span> <span
  m='100271'>check</span> <span m='100662'>for</span> <span
  m='101053'>the</span> <span m='101444'>circuit</span> <span
  m='101835'>court</span> <span m='102226'>of</span> <span
  m='102617'>origin.</span> </p><p><span m='103009'>If</span> <span
  m='103390'>it's</span> <span m='103771'>the</span> <span
  m='104152'>second,</span> <span m='104533'>third,</span> <span
  m='104915'>DC,</span> <span m='105296'>or</span> <span
  m='105677'>federal</span> <span m='106058'>court,</span> <span
  m='106440'>we</span> <span m='106842'>predict</span> <span
  m='107245'>that</span> <span m='107647'>she</span> <span
  m='108050'>will</span> <span m='108452'>affirm</span> <span
  m='108855'>the</span> <span m='109257'>case.</span> </p><p><span
  m='109660'>If</span> <span m='109950'>it's</span> <span m='110241'>not</span>
  <span m='110531'>one</span> <span m='110822'>of</span> <span
  m='111113'>these</span> <span m='111403'>courts,</span> <span
  m='111694'>we</span> <span m='111985'>move</span> <span m='112275'>on</span>
  <span m='112566'>to</span> <span m='112857'>the</span> <span
  m='113147'>next</span> <span m='113438'>split.</span> </p><p><span
  m='113729'>The</span> <span m='114034'>remaining</span> <span
  m='114339'>two</span> <span m='114644'>splits</span> <span
  m='114949'>are</span> <span m='115254'>for</span> <span m='115559'>the</span>
  <span m='115864'>respondent</span> <span m='116170'>and</span> <span
  m='117007'>the</span> <span m='117845'>primary</span> <span
  m='118682'>issue.</span> </p><p><span m='119520'>Here's</span> <span
  m='119967'>another</span> <span m='120415'>tree,</span> <span
  m='120862'>this</span> <span m='121310'>one</span> <span m='121757'>for</span>
  <span m='122205'>Justice</span> <span m='122652'>Souter.</span> </p><p><span
  m='123100'>This</span> <span m='123403'>shows</span> <span
  m='123706'>an</span> <span m='124010'>unusual</span> <span
  m='124313'>property</span> <span m='124616'>of</span> <span
  m='124920'>the</span> <span m='125223'>CART</span> <span
  m='125526'>trees</span> <span m='125830'>that</span> <span
  m='126276'>Martin</span> <span m='126723'>and</span> <span
  m='127169'>his</span> <span m='127616'>colleagues</span> <span
  m='128062'>developed.</span> </p><p><span m='128509'>They</span> <span
  m='128919'>use</span> <span m='129329'>predictions</span> <span
  m='129739'>for</span> <span m='130149'>some</span> <span
  m='130559'>trees</span> <span m='130970'>as</span> <span
  m='131538'>independent</span> <span m='132106'>variables</span> <span
  m='132675'>for</span> <span m='133243'>other</span> <span
  m='133811'>trees.</span> </p><p><span m='134380'>In</span> <span
  m='134654'>this</span> <span m='134928'>tree,</span> <span
  m='135202'>the</span> <span m='135476'>first</span> <span
  m='135750'>split</span> <span m='136024'>is</span> <span
  m='136298'>whether</span> <span m='136572'>or</span> <span
  m='136846'>not</span> <span m='137120'>Justice</span> <span
  m='137743'>Ginsburg</span> <span m='138366'>predicted</span> <span
  m='138990'>decision</span> <span m='139613'>is</span> <span
  m='140236'>liberal.</span> </p><p><span m='140860'>So</span> <span
  m='141293'>we</span> <span m='141726'>have</span> <span m='142159'>to</span>
  <span m='142592'>run</span> <span m='143025'>Justice</span> <span
  m='143458'>Ginsburg's</span> <span m='143891'>CART</span> <span
  m='144324'>tree</span> <span m='144757'>first.</span> </p><p><span
  m='145190'>See</span> <span m='145567'>what</span> <span m='145945'>the</span>
  <span m='146323'>prediction</span> <span m='146701'>is.</span> </p><p><span
  m='147079'>And</span> <span m='147464'>then</span> <span m='147849'>use</span>
  <span m='148234'>that</span> <span m='148619'>as</span> <span
  m='149004'>input</span> <span m='149389'>for</span> <span
  m='149774'>Justice</span> <span m='150159'>Souter's</span> <span
  m='150544'>tree.</span> </p><p><span m='150930'>If</span> <span
  m='151467'>Justice</span> <span m='152004'>Ginsburg</span> <span
  m='152541'>predicted</span> <span m='153078'>decision</span> <span
  m='153615'>is</span> <span m='154152'>liberal</span> <span
  m='154690'>and</span> <span m='155067'>the</span> <span
  m='155444'>lower</span> <span m='155821'>court</span> <span
  m='156198'>decision</span> <span m='156575'>is</span> <span
  m='156952'>liberal,</span> <span m='157329'>then</span> <span
  m='157757'>we</span> <span m='158185'>predict</span> <span
  m='158613'>that</span> <span m='159041'>Justice</span> <span
  m='159469'>Souter</span> <span m='159897'>will</span> <span
  m='160325'>affirm</span> <span m='160753'>the</span> <span
  m='161181'>case.</span> </p><p><span m='161610'>But</span> <span
  m='161985'>if</span> <span m='162360'>the</span> <span m='162735'>lower</span>
  <span m='163110'>court</span> <span m='163485'>decision</span> <span
  m='163860'>is</span> <span m='164235'>conservative,</span> <span
  m='164610'>then</span> <span m='164992'>we</span> <span
  m='165374'>predict</span> <span m='165756'>that</span> <span
  m='166138'>Justice</span> <span m='166520'>Souter</span> <span
  m='166902'>will</span> <span m='167284'>reverse</span> <span
  m='167666'>the</span> <span m='168048'>case.</span> </p><p><span
  m='168430'>On</span> <span m='168740'>the</span> <span m='169050'>other</span>
  <span m='169360'>side</span> <span m='169670'>of</span> <span
  m='169980'>the</span> <span m='170290'>tree,</span> <span m='170600'>if</span>
  <span m='170910'>Justice</span> <span m='171220'>Ginsburg</span> <span
  m='171530'>predicted</span> <span m='172152'>decision</span> <span
  m='172775'>is</span> <span m='173397'>conservative,</span> <span
  m='174020'>but</span> <span m='174397'>the</span> <span
  m='174774'>lower</span> <span m='175151'>court</span> <span
  m='175528'>decision</span> <span m='175905'>is</span> <span
  m='176282'>liberal,</span> <span m='176660'>then</span> <span
  m='177033'>we</span> <span m='177406'>predict</span> <span
  m='177779'>that</span> <span m='178152'>Justice</span> <span
  m='178525'>Souter</span> <span m='178898'>will</span> <span
  m='179271'>reverse</span> <span m='179644'>the</span> <span
  m='180017'>case.</span> </p><p><span m='180390'>But</span> <span
  m='180687'>if</span> <span m='180985'>the</span> <span m='181282'>lower</span>
  <span m='181580'>court</span> <span m='181877'>decision</span> <span
  m='182175'>is</span> <span m='182472'>conservative,</span> <span
  m='182770'>then</span> <span m='183145'>we</span> <span
  m='183520'>predict</span> <span m='183895'>that</span> <span
  m='184270'>Justice</span> <span m='184645'>Souter</span> <span
  m='185020'>will</span> <span m='185395'>affirm</span> <span
  m='185770'>the</span> <span m='186145'>case.</span> </p><p><span
  m='186520'>In</span> <span m='186867'>summary,</span> <span
  m='187215'>if</span> <span m='187563'>we</span> <span
  m='187911'>predict</span> <span m='188258'>that</span> <span
  m='188606'>Justice</span> <span m='188954'>Ginsburg</span> <span
  m='189302'>will</span> <span m='189650'>make</span> <span m='190194'>a</span>
  <span m='190738'>liberal</span> <span m='191282'>decision,</span> <span
  m='191827'>then</span> <span m='192371'>Justice</span> <span
  m='192915'>Souter</span> <span m='193460'>will</span> <span
  m='193911'>probably</span> <span m='194362'>make</span> <span
  m='194814'>a</span> <span m='195265'>liberal</span> <span
  m='195717'>decision</span> <span m='196168'>too.</span> </p><p><span
  m='196620'>But</span> <span m='196908'>if</span> <span m='197197'>we</span>
  <span m='197486'>predict</span> <span m='197775'>that</span> <span
  m='198063'>Justice</span> <span m='198352'>Ginsburg</span> <span
  m='198641'>will</span> <span m='198930'>make</span> <span m='199328'>a</span>
  <span m='199726'>conservative</span> <span m='200125'>decision,</span> <span
  m='200523'>then</span> <span m='200921'>we</span> <span
  m='201320'>predict</span> <span m='201645'>that</span> <span
  m='201970'>Justice</span> <span m='202295'>Souter</span> <span
  m='202620'>will</span> <span m='202945'>probably</span> <span
  m='203270'>make</span> <span m='203681'>a</span> <span
  m='204093'>conservative</span> <span m='204505'>decision</span> <span
  m='204917'>too.</span> </p><p><span m='208720'>Martin</span> <span
  m='209253'>and</span> <span m='209786'>his</span> <span
  m='210320'>colleagues</span> <span m='210853'>also</span> <span
  m='211386'>recruited</span> <span m='211920'>83</span> <span
  m='212453'>legal</span> <span m='212986'>experts,</span> <span
  m='213520'>71</span> <span m='214258'>academics,</span> <span
  m='214996'>and</span> <span m='215734'>12</span> <span
  m='216472'>attorneys.</span> </p><p><span m='217210'>38</span> <span
  m='217678'>had</span> <span m='218147'>previously</span> <span
  m='218616'>clerked</span> <span m='219085'>for</span> <span
  m='219554'>a</span> <span m='220023'>Supreme</span> <span
  m='220492'>Court</span> <span m='220961'>Justice,</span> <span
  m='221430'>33</span> <span m='221968'>were</span> <span
  m='222506'>chaired</span> <span m='223045'>professors,</span> <span
  m='223583'>and</span> <span m='224121'>five</span> <span
  m='224660'>were</span> <span m='225042'>current</span> <span
  m='225425'>or</span> <span m='225808'>former</span> <span
  m='226191'>law</span> <span m='226574'>school</span> <span
  m='226957'>deans.</span> </p><p><span m='227340'>So</span> <span
  m='227728'>this</span> <span m='228117'>was</span> <span
  m='228506'>really</span> <span m='228895'>a</span> <span
  m='229284'>dream</span> <span m='229673'>team</span> <span
  m='230062'>of</span> <span m='230451'>experts.</span> </p><p><span
  m='230840'>Additionally,</span> <span m='231254'>the</span> <span
  m='231668'>experts</span> <span m='232082'>were</span> <span
  m='232496'>only</span> <span m='232910'>asked</span> <span
  m='233363'>to</span> <span m='233817'>predict</span> <span
  m='234271'>within</span> <span m='234725'>their</span> <span
  m='235178'>area</span> <span m='235632'>of</span> <span
  m='236086'>expertise.</span> </p><p><span m='236540'>So</span> <span
  m='236958'>not</span> <span m='237377'>all</span> <span
  m='237795'>experts</span> <span m='238214'>predicted</span> <span
  m='238632'>all</span> <span m='239051'>cases.</span> </p><p><span
  m='239470'>But</span> <span m='239752'>there</span> <span
  m='240034'>was</span> <span m='240316'>more</span> <span
  m='240598'>than</span> <span m='240881'>one</span> <span
  m='241163'>expert</span> <span m='241445'>making</span> <span
  m='241727'>predictions</span> <span m='242010'>for</span> <span
  m='242746'>each</span> <span m='243483'>case.</span> </p><p><span
  m='244220'>When</span> <span m='244593'>making</span> <span
  m='244966'>their</span> <span m='245340'>predictions,</span> <span
  m='245713'>the</span> <span m='246086'>experts</span> <span
  m='246460'>were</span> <span m='246855'>allowed</span> <span
  m='247250'>to</span> <span m='247645'>consider</span> <span
  m='248040'>any</span> <span m='248435'>source</span> <span
  m='248830'>of</span> <span m='249225'>information.</span> </p><p><span
  m='249620'>But</span> <span m='249878'>they</span> <span
  m='250137'>were</span> <span m='250395'>not</span> <span
  m='250654'>allowed</span> <span m='250912'>to</span> <span
  m='251171'>communicate</span> <span m='251430'>with</span> <span
  m='252048'>each</span> <span m='252666'>other</span> <span
  m='253285'>regarding</span> <span m='253903'>the</span> <span
  m='254521'>predictions.</span> </p><p><span m='255140'>For</span> <span
  m='255631'>the</span> <span m='256122'>68</span> <span m='256613'>cases</span>
  <span m='257105'>in</span> <span m='257596'>October,</span> <span
  m='258087'>2002,</span> <span m='258579'>the</span> <span
  m='258789'>predictions</span> <span m='258999'>were</span> <span
  m='259209'>made,</span> <span m='259419'>and</span> <span m='259629'>at</span>
  <span m='259839'>the</span> <span m='260049'>end</span> <span
  m='260259'>of</span> <span m='260469'>the</span> <span m='260679'>month</span>
  <span m='260890'>the</span> <span m='261420'>results</span> <span
  m='261950'>were</span> <span m='262480'>computed.</span> </p><p><span
  m='263010'>For</span> <span m='263323'>predicting</span> <span
  m='263636'>the</span> <span m='263950'>overall</span> <span
  m='264263'>decision</span> <span m='264576'>that</span> <span
  m='264890'>was</span> <span m='265207'>made</span> <span m='265525'>by</span>
  <span m='265842'>the</span> <span m='266160'>Supreme</span> <span
  m='266477'>Court,</span> <span m='266795'>the</span> <span
  m='267112'>models</span> <span m='267430'>had</span> <span
  m='267853'>an</span> <span m='268276'>accuracy</span> <span
  m='268700'>of</span> <span m='269123'>75%,</span> <span
  m='269546'>while</span> <span m='269970'>the</span> <span
  m='270393'>experts</span> <span m='270816'>only</span> <span
  m='271240'>had</span> <span m='271788'>an</span> <span
  m='272336'>accuracy</span> <span m='272884'>of</span> <span
  m='273432'>59%.</span> </p><p><span m='273980'>So</span> <span
  m='274294'>the</span> <span m='274608'>models</span> <span
  m='274922'>had</span> <span m='275236'>a</span> <span
  m='275550'>significant</span> <span m='275864'>edge</span> <span
  m='276178'>over</span> <span m='276492'>the</span> <span
  m='276806'>experts</span> <span m='277120'>in</span> <span
  m='277675'>predicting</span> <span m='278230'>the</span> <span
  m='278785'>overall</span> <span m='279340'>case</span> <span
  m='279895'>outcomes.</span> </p><p><span m='280450'>However,</span> <span
  m='280744'>when</span> <span m='281038'>the</span> <span
  m='281332'>predictions</span> <span m='281626'>were</span> <span
  m='281920'>run</span> <span m='282353'>for</span> <span
  m='282786'>individual</span> <span m='283220'>justices,</span> <span
  m='283653'>the</span> <span m='284086'>model</span> <span
  m='284520'>and</span> <span m='284953'>the</span> <span
  m='285386'>experts</span> <span m='285820'>performed</span> <span
  m='286530'>very</span> <span m='287240'>similarly.</span> </p><p><span
  m='287950'>For</span> <span m='288342'>some</span> <span
  m='288735'>justices,</span> <span m='289128'>the</span> <span
  m='289521'>model</span> <span m='289914'>performed</span> <span
  m='290307'>better.</span> </p><p><span m='290700'>And</span> <span
  m='291371'>for</span> <span m='292042'>some</span> <span
  m='292713'>justices,</span> <span m='293385'>the</span> <span
  m='294056'>experts</span> <span m='294727'>performed</span> <span
  m='295398'>better.</span> </p><p><span m='296070'>Being</span> <span
  m='296439'>able</span> <span m='296809'>to</span> <span
  m='297179'>predict</span> <span m='297549'>Supreme</span> <span
  m='297919'>Court</span> <span m='298289'>decisions</span> <span
  m='298659'>is</span> <span m='299189'>very</span> <span
  m='299719'>valuable</span> <span m='300249'>to</span> <span
  m='300779'>firms,</span> <span m='301309'>politicians,</span> <span
  m='301840'>and</span> <span m='302836'>nongovernmental</span> <span
  m='303833'>organizations.</span> </p><p><span m='304830'>We</span> <span
  m='305091'>saw</span> <span m='305352'>in</span> <span m='305613'>this</span>
  <span m='305874'>lecture</span> <span m='306135'>that</span> <span
  m='306396'>a</span> <span m='306657'>model</span> <span m='306918'>that</span>
  <span m='307180'>predicts</span> <span m='307622'>overall</span> <span
  m='308065'>Supreme</span> <span m='308507'>Court</span> <span
  m='308950'>decisions</span> <span m='309392'>is</span> <span
  m='309835'>both</span> <span m='310277'>more</span> <span
  m='310720'>accurate</span> <span m='311077'>than</span> <span
  m='311434'>experts</span> <span m='311791'>and</span> <span
  m='312149'>can</span> <span m='312506'>be</span> <span m='312863'>run</span>
  <span m='313220'>much</span> <span m='313578'>faster</span> <span
  m='313935'>than</span> <span m='314292'>experts</span> <span
  m='314650'>can</span> <span m='315190'>make</span> <span
  m='315730'>their</span> <span m='316270'>predictions.</span> </p><p><span
  m='316810'>The</span> <span m='317040'>CART</span> <span
  m='317270'>models</span> <span m='317500'>that</span> <span
  m='317730'>we</span> <span m='317960'>built</span> <span
  m='318190'>were</span> <span m='318420'>based</span> <span
  m='318824'>on</span> <span m='319228'>very</span> <span m='319633'>high</span>
  <span m='320037'>level</span> <span m='320442'>components</span> <span
  m='320846'>of</span> <span m='321251'>the</span> <span
  m='321655'>cases,</span> <span m='322060'>compared</span> <span
  m='322320'>to</span> <span m='322580'>the</span> <span
  m='322840'>experts</span> <span m='323100'>who</span> <span
  m='323360'>can</span> <span m='323620'>process</span> <span
  m='323880'>much</span> <span m='324486'>more</span> <span
  m='325093'>detailed</span> <span m='325700'>and</span> <span
  m='326306'>complex</span> <span m='326913'>information.</span> </p><p><span
  m='327520'>This</span> <span m='327876'>example</span> <span
  m='328233'>really</span> <span m='328590'>shows</span> <span
  m='328946'>the</span> <span m='329303'>edge</span> <span
  m='329660'>that</span> <span m='330161'>analytics</span> <span
  m='330662'>can</span> <span m='331164'>provide</span> <span
  m='331665'>in</span> <span m='332167'>traditionally</span> <span
  m='332668'>qualitative</span> <span m='333170'>applications.</span> </p>
embedded_media:
  - uid: b41d300b6f39c684b54bdf58fc352874
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: YaEufT_7EbU
  - uid: 3a25dc62c2401b1a93cf52fa3c007285
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: YaEufT_7EbU
  - uid: bb97be2cb10a60df5010ca045ea62955
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/YaEufT_7EbU/default.jpg'
  - uid: de71f70d6f8bcc877465c61f69dec5e0
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: YaEufT_7EbU.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-7-the-model-v-the-experts/video-7-the-model-v-the-experts-0/YaEufT_7EbU.srt
  - uid: 5e888b60062c060117a6146c01767bca
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: YaEufT_7EbU.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-7-the-model-v-the-experts/video-7-the-model-v-the-experts-0/YaEufT_7EbU.pdf
  - uid: e2015279d8142d95350f47d28c62497f
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 0f1edf19204fc23f01ce104c665a2765
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 1858709eadd73e23250ae380ed9e8551
    parent_uid: a2d5bd5426fb55c61abd2e90d90d7c3c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.2.13_300k.mp4
type: courses
layout: video
---
