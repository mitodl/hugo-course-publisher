---
title: Optimal Stable Matching
uid: c6491840986db5f3fb5ef698a0ee2c78
parent_uid: 88e03c4e4209b708b104844551a8a091
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/optimal-stable-matching-video/optimal-stable-matching
short_url: optimal-stable-matching
inline_embed_id: 38332912optimalstablematching37295300
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1090'>PROFESSOR: So</span> <span m='1260'>stability</span> <span
  m='1860'>has</span> <span m='2090'>some</span> <span m='2300'>value,</span>
  <span m='3640'>but</span> <span m='3830'>it</span> <span
  m='3910'>doesn't</span> <span m='4140'>mean</span> <span m='4260'>that</span>
  <span m='4370'>everybody's</span> <span m='4730'>happy.</span> <span
  m='5360'>In</span> <span m='5500'>fact,</span> <span m='5820'>it</span> <span
  m='5880'>just</span> <span m='6110'>means</span> <span m='6390'>that</span>
  <span m='7970'>nobody</span> <span m='8620'>can</span> <span
  m='8790'>find</span> <span m='9120'>anybody</span> <span m='9500'>else</span>
  <span m='9790'>who's</span> <span m='10010'>equally</span> <span
  m='10390'>unhappy</span> <span m='10850'>that</span> <span
  m='11050'>they</span> <span m='11200'>would</span> <span m='11350'>want</span>
  <span m='11540'>to</span> <span m='11650'>run</span> <span
  m='11820'>off</span> <span m='12110'>with.</span> <span m='13240'>So</span>
  <span m='13500'>let's</span> <span m='13760'>examine</span> <span
  m='14220'>the</span> <span m='14310'>question</span> <span m='14800'>of</span>
  <span m='15400'>how</span> <span m='15720'>well</span> <span
  m='16040'>people</span> <span m='16400'>do</span> <span m='17020'>using</span>
  <span m='17390'>the</span> <span m='17460'>mating</span> <span
  m='17770'>ritual,</span> <span m='18320'>or</span> <span m='18650'>in</span>
  <span m='18810'>other</span> <span m='19070'>possible</span> <span
  m='19920'>ways</span> <span m='20290'>of</span> <span m='20420'>finding</span>
  <span m='20790'>stable</span> <span m='21170'>marriages.</span> </p><p><span
  m='23570'>So</span> <span m='25230'>basically,</span> <span
  m='25650'>we</span> <span m='25720'>want</span> <span m='25920'>to</span>
  <span m='25960'>begin</span> <span m='26230'>with</span> <span
  m='26350'>the</span> <span m='26430'>question</span> <span m='26590'>of</span>
  <span m='26750'>who</span> <span m='26890'>does</span> <span
  m='27120'>better,</span> <span m='27350'>the</span> <span
  m='27440'>boys</span> <span m='27780'>or</span> <span m='27860'>the</span>
  <span m='27940'>girls?</span> <span m='29870'>Maybe</span> <span
  m='30950'>it's</span> <span m='31110'>a</span> <span m='31150'>mixture.</span>
  <span m='31630'>Maybe</span> <span m='31930'>the</span> <span
  m='32030'>boys</span> <span m='32310'>do</span> <span m='32420'>better,</span>
  <span m='32780'>the</span> <span m='32995'>girls</span> <span
  m='33210'>do</span> <span m='33310'>better,</span> <span m='33540'>or</span>
  <span m='33770'>maybe</span> <span m='34000'>some</span> <span
  m='34210'>boys</span> <span m='34470'>do</span> <span m='34560'>better</span>
  <span m='34820'>than</span> <span m='35070'>others,</span> <span
  m='35420'>and</span> <span m='35590'>some</span> <span m='35770'>girls</span>
  <span m='36070'>do</span> <span m='36160'>better</span> <span
  m='36410'>than</span> <span m='36570'>others.</span> <span
  m='38900'>One</span> <span m='38980'>thing</span> <span m='39150'>to</span>
  <span m='39240'>notice</span> <span m='39560'>is</span> <span
  m='39710'>we</span> <span m='39840'>know</span> <span m='40030'>that</span>
  <span m='40220'>the</span> <span m='40300'>girl's</span> <span
  m='40720'>suitors</span> <span m='41200'>are</span> <span
  m='41260'>getting</span> <span m='41600'>better</span> <span
  m='41940'>day</span> <span m='42160'>by</span> <span m='42360'>day,</span>
  <span m='42940'>and</span> <span m='43120'>that</span> <span
  m='43320'>sounds</span> <span m='43630'>like</span> <span m='44230'>the</span>
  <span m='45100'>mating</span> <span m='45410'>ritual</span> <span
  m='45650'>might</span> <span m='45840'>be</span> <span
  m='45930'>slanted</span> <span m='46380'>towards</span> <span
  m='46640'>them.</span> </p><p><span m='46800'>Likewise</span> <span
  m='47390'>the</span> <span m='47480'>boy's</span> <span
  m='48020'>sweethearts,</span> <span m='48450'>the</span> <span
  m='48560'>ones</span> <span m='48820'>that</span> <span
  m='48980'>they're</span> <span m='49110'>serenading,</span> <span
  m='50070'>are</span> <span m='50280'>getting</span> <span
  m='50560'>worse</span> <span m='50950'>day</span> <span m='51100'>by</span>
  <span m='51390'>day,</span> <span m='52060'>and</span> <span
  m='52310'>that</span> <span m='52570'>sounds</span> <span
  m='52900'>like</span> <span m='53090'>it</span> <span m='53220'>might</span>
  <span m='53570'>be</span> <span m='53710'>an</span> <span
  m='53810'>argument</span> <span m='54470'>for</span> <span
  m='54580'>the</span> <span m='54680'>girls</span> <span m='54960'>to</span>
  <span m='55060'>do</span> <span m='55190'>better,</span> <span
  m='56000'>but</span> <span m='56200'>that's</span> <span m='56440'>not</span>
  <span m='56710'>true.</span> <span m='57840'>And</span> <span
  m='57940'>the</span> <span m='58010'>reason</span> <span m='58330'>it's</span>
  <span m='58510'>not</span> <span m='58870'>is</span> <span
  m='59250'>that,</span> <span m='59740'>if</span> <span m='59920'>you</span>
  <span m='59990'>think</span> <span m='60220'>about</span> <span
  m='60550'>it,</span> <span m='61060'>the</span> <span m='61180'>boys</span>
  <span m='61710'>are</span> <span m='61850'>starting</span> <span
  m='62330'>off</span> <span m='62870'>with</span> <span m='63070'>their</span>
  <span m='63170'>first</span> <span m='63500'>choice.</span> <span
  m='64190'>They</span> <span m='64769'>begin</span> <span m='65220'>by</span>
  <span m='65390'>serenading</span> <span m='66350'>the</span> <span
  m='66460'>girl</span> <span m='66790'>at</span> <span m='66860'>the</span>
  <span m='66990'>top</span> <span m='67300'>of</span> <span
  m='67350'>their</span> <span m='67530'>list,</span> <span m='68260'>and</span>
  <span m='68430'>it's</span> <span m='68600'>true</span> <span
  m='68820'>that</span> <span m='68960'>day</span> <span m='69180'>by</span>
  <span m='69370'>day</span> <span m='69840'>they</span> <span
  m='70040'>keep</span> <span m='70410'>going</span> <span
  m='70850'>down,</span> <span m='71280'>or</span> <span
  m='71400'>staying</span> <span m='71700'>the</span> <span
  m='71780'>same</span> <span m='72020'>or</span> <span m='72150'>going</span>
  <span m='72460'>down,</span> <span m='73190'>but</span> <span
  m='73560'>they're</span> <span m='74130'>only</span> <span
  m='74490'>sinking</span> <span m='75250'>to,</span> <span m='75410'>in</span>
  <span m='75500'>fact,</span> <span m='76760'>the</span> <span
  m='76960'>best</span> <span m='77330'>possible</span> <span
  m='77880'>woman</span> <span m='78060'>that</span> <span m='78310'>they</span>
  <span m='78440'>could</span> <span m='78620'>be</span> <span
  m='78730'>married</span> <span m='79170'>to.</span> <span
  m='81370'>Let's</span> <span m='81580'>examine</span> <span
  m='82040'>that.</span> </p><p><span m='83000'>So</span> <span
  m='83700'>I</span> <span m='83820'>need</span> <span m='83960'>a</span> <span
  m='84030'>definition,</span> <span m='84720'>which</span> <span
  m='85080'>is</span> <span m='85310'>that</span> <span m='85580'>we'll</span>
  <span m='85790'>say</span> <span m='86130'>that</span> <span
  m='86560'>a</span> <span m='86680'>woman,</span> <span
  m='87210'>Nicole,</span> <span m='87800'>is</span> <span
  m='88050'>called</span> <span m='88430'>optimal</span> <span
  m='89040'>for</span> <span m='89200'>Keith</span> <span m='90540'>when</span>
  <span m='90870'>she</span> <span m='91280'>is</span> <span
  m='91480'>the</span> <span m='91570'>highest</span> <span
  m='92100'>ranked</span> <span m='92390'>girl</span> <span m='92660'>he</span>
  <span m='92790'>can</span> <span m='92940'>stably</span> <span
  m='93410'>marry.</span> <span m='93970'>So</span> <span m='94120'>let's</span>
  <span m='94300'>think</span> <span m='94450'>about</span> <span
  m='94660'>that</span> <span m='94840'>for</span> <span m='94936'>a</span>
  <span m='95033'>minute.</span> <span m='95130'>So</span> <span
  m='95340'>Keith</span> <span m='96240'>has</span> <span m='96620'>his</span>
  <span m='96830'>preference</span> <span m='97380'>for</span> <span
  m='97900'>different</span> <span m='99360'>girls</span> <span
  m='99670'>that</span> <span m='99730'>he</span> <span m='99810'>likes,</span>
  <span m='100200'>to</span> <span m='100360'>different</span> <span
  m='100670'>degrees,</span> <span m='102150'>and</span> <span
  m='103180'>there</span> <span m='103330'>may</span> <span m='103570'>be</span>
  <span m='103760'>some</span> <span m='104100'>that</span> <span
  m='104210'>he</span> <span m='104350'>likes.</span> </p><p><span
  m='104720'>Like</span> <span m='105000'>Keith</span> <span
  m='106160'>thinks</span> <span m='106690'>that</span> <span
  m='107070'>Angelina</span> <span m='107400'>is</span> <span
  m='107730'>terrific,</span> <span m='108650'>but</span> <span
  m='109210'>there's</span> <span m='109460'>just</span> <span
  m='109860'>no</span> <span m='110130'>way</span> <span m='110830'>that</span>
  <span m='111130'>she's</span> <span m='111380'>going</span> <span
  m='111490'>to</span> <span m='111570'>wind</span> <span m='111880'>up</span>
  <span m='112040'>with</span> <span m='112180'>him,</span> <span
  m='112340'>because</span> <span m='112570'>she</span> <span
  m='112690'>just</span> <span m='113190'>ranks</span> <span
  m='113520'>him</span> <span m='113660'>very</span> <span
  m='113800'>lowly,</span> <span m='114190'>so</span> <span
  m='114360'>there's</span> <span m='114560'>no</span> <span
  m='115140'>stable</span> <span m='115880'>set</span> <span
  m='115950'>of</span> <span m='116050'>marriages</span> <span
  m='117060'>in</span> <span m='117280'>which</span> <span
  m='117860'>Keith</span> <span m='118190'>can</span> <span
  m='118370'>wind</span> <span m='118720'>up</span> <span m='119020'>with</span>
  <span m='119310'>this</span> <span m='119750'>very</span> <span
  m='120020'>desirable</span> <span m='120620'>woman,</span> <span
  m='120980'>Angelina.</span> <span m='122290'>But</span> <span
  m='123720'>if</span> <span m='123910'>you</span> <span m='124010'>look</span>
  <span m='124240'>at</span> <span m='124440'>all</span> <span
  m='124690'>of</span> <span m='124780'>the</span> <span m='124870'>sets</span>
  <span m='125140'>of</span> <span m='125240'>marriages</span> <span
  m='125810'>that</span> <span m='126210'>are</span> <span
  m='126450'>stable,</span> <span m='126930'>that</span> <span
  m='127060'>Keith</span> <span m='127310'>can</span> <span m='127470'>be</span>
  <span m='127610'>involved</span> <span m='128139'>in,</span> <span
  m='128389'>among</span> <span m='128810'>them</span> <span
  m='129550'>Nicole</span> <span m='130199'>is</span> <span
  m='130650'>the</span> <span m='130780'>woman</span> <span
  m='131220'>that</span> <span m='131280'>he</span> <span m='131340'>most</span>
  <span m='131720'>likes,</span> <span m='132540'>so</span> <span
  m='132750'>that's</span> <span m='133000'>what</span> <span
  m='133190'>we</span> <span m='133310'>mean</span> <span m='133550'>by</span>
  <span m='133710'>Nicole</span> <span m='134140'>is</span> <span
  m='134280'>optimal</span> <span m='134780'>for</span> <span
  m='134960'>Keith.</span> <span m='135260'>She's</span> <span
  m='135530'>optimal</span> <span m='136040'>among</span> <span
  m='136260'>the</span> <span m='136380'>feasible</span> <span
  m='137080'>women</span> <span m='137310'>that</span> <span
  m='137540'>he</span> <span m='137670'>could</span> <span
  m='137840'>stably</span> <span m='138270'>be</span> <span
  m='138440'>married</span> <span m='138810'>to.</span> </p><p><span
  m='141180'>The</span> <span m='141320'>claim</span> <span
  m='141660'>that</span> <span m='141770'>we're</span> <span
  m='141910'>making</span> <span m='142420'>is</span> <span
  m='142800'>that</span> <span m='142980'>the</span> <span
  m='143050'>mating</span> <span m='143460'>ritual</span> <span
  m='144190'>yields</span> <span m='144670'>a</span> <span m='144740'>set</span>
  <span m='144970'>of</span> <span m='145060'>stable</span> <span
  m='145450'>marriages,</span> <span m='146470'>which</span> <span
  m='146780'>is</span> <span m='146880'>simultaneously</span> <span
  m='148050'>optimal</span> <span m='148990'>for</span> <span
  m='149240'>Keith</span> <span m='149670'>and</span> <span
  m='149890'>all</span> <span m='150180'>the</span> <span
  m='150320'>other</span> <span m='150520'>boys</span> <span
  m='150830'>at</span> <span m='150920'>once.</span> <span
  m='151780'>Now,</span> <span m='151940'>that's</span> <span
  m='152160'>a</span> <span m='152210'>kind</span> <span m='152410'>of</span>
  <span m='152480'>unusual</span> <span m='153020'>thing.</span> <span
  m='153250'>Usually</span> <span m='154050'>when</span> <span
  m='154210'>you're</span> <span m='154390'>optimizing,</span> <span
  m='155320'>you</span> <span m='155440'>figure</span> <span
  m='155650'>you're</span> <span m='155860'>optimized</span> <span
  m='156380'>for</span> <span m='156480'>one</span> <span m='157810'>boy,</span>
  <span m='158400'>and</span> <span m='158600'>it</span> <span
  m='158790'>sacrifices</span> <span m='159560'>the</span> <span
  m='159710'>optimality</span> <span m='160340'>for</span> <span
  m='160440'>the</span> <span m='160560'>other</span> <span
  m='160720'>boys,</span> <span m='160960'>but</span> <span
  m='161090'>that's</span> <span m='161300'>not</span> <span
  m='161540'>what</span> <span m='161660'>happens</span> <span
  m='162090'>in</span> <span m='162150'>the</span> <span
  m='162220'>mating</span> <span m='162540'>ritual.</span> <span
  m='163050'>All</span> <span m='163290'>of</span> <span m='163410'>the</span>
  <span m='163490'>boys</span> <span m='164240'>get</span> <span
  m='164480'>their</span> <span m='164680'>absolutely</span> <span
  m='165330'>optimal</span> <span m='165780'>spouse</span> <span
  m='166025'>in</span> <span m='166270'>the</span> <span
  m='166330'>mating</span> <span m='166650'>ritual,</span> <span
  m='167180'>and</span> <span m='167410'>dually</span> <span
  m='168490'>it</span> <span m='168700'>turns</span> <span m='169030'>out</span>
  <span m='169270'>that</span> <span m='169510'>all</span> <span
  m='169720'>of</span> <span m='169850'>the</span> <span m='169940'>girls</span>
  <span m='170590'>get</span> <span m='171000'>the</span> <span
  m='171140'>worst</span> <span m='171520'>possible</span> <span
  m='172330'>spouse</span> <span m='172695'>that</span> <span
  m='173060'>they</span> <span m='173210'>can</span> <span
  m='173410'>get,</span> <span m='173940'>a</span> <span
  m='174060'>pessimal</span> <span m='174600'>spouse,</span> <span
  m='175290'>among</span> <span m='175790'>all</span> <span
  m='176080'>possible</span> <span m='176620'>stable</span> <span
  m='177030'>marriages.</span> </p><p><span m='179300'>Well,</span> <span
  m='179920'>with</span> <span m='180130'>that</span> <span
  m='180350'>claim</span> <span m='180650'>understood,</span> <span
  m='181290'>let's</span> <span m='181620'>go</span> <span
  m='181750'>about</span> <span m='182140'>proving</span> <span
  m='182570'>it,</span> <span m='183090'>and</span> <span
  m='183920'>we're</span> <span m='184040'>going</span> <span
  m='184190'>to</span> <span m='184260'>prove</span> <span
  m='184790'>that</span> <span m='185730'>the</span> <span
  m='186370'>mating</span> <span m='186750'>ritual</span> <span
  m='187330'>leads</span> <span m='187870'>to</span> <span
  m='188340'>boy-optimal</span> <span m='189930'>marriages</span> <span
  m='190780'>by</span> <span m='191180'>contradiction.</span> <span
  m='193260'>So</span> <span m='193430'>let's</span> <span
  m='193670'>suppose</span> <span m='194340'>that</span> <span
  m='195040'>Nicole</span> <span m='195500'>is</span> <span
  m='195630'>optimal</span> <span m='195980'>for</span> <span
  m='196330'>Keith</span> <span m='198160'>among</span> <span
  m='198530'>all</span> <span m='198830'>the</span> <span
  m='199890'>women</span> <span m='200240'>that</span> <span
  m='200460'>Keith</span> <span m='200680'>could</span> <span
  m='200820'>possibly</span> <span m='201240'>be</span> <span
  m='201340'>married</span> <span m='201730'>to</span> <span
  m='201880'>in</span> <span m='201925'>a</span> <span m='201970'>stable</span>
  <span m='202440'>way.</span> <span m='202690'>Nicole</span> <span
  m='203150'>is</span> <span m='203280'>the</span> <span m='203360'>best.</span>
  <span m='204160'>Suppose</span> <span m='204650'>that</span> <span
  m='204800'>Keith</span> <span m='205150'>does</span> <span
  m='205340'>not</span> <span m='205820'>wind</span> <span m='206240'>up</span>
  <span m='206770'>marrying</span> <span m='207350'>Nicole</span> <span
  m='208850'>in</span> <span m='209140'>the</span> <span
  m='209220'>mating</span> <span m='209510'>ritual.</span> <span
  m='211480'>So</span> <span m='211660'>he</span> <span
  m='211790'>doesn't</span> <span m='212150'>marry</span> <span
  m='212470'>Nicole</span> <span m='212970'>in</span> <span
  m='213040'>the</span> <span m='213120'>mating</span> <span
  m='213440'>ritual.</span> <span m='214650'>That</span> <span
  m='214890'>means</span> <span m='215360'>that</span> <span
  m='216970'>since</span> <span m='217400'>the</span> <span
  m='217570'>Nicole</span> <span m='218000'>is</span> <span
  m='219240'>optimal</span> <span m='219750'>for</span> <span
  m='219900'>Keith,</span> <span m='221070'>he</span> <span
  m='221200'>must</span> <span m='221520'>be</span> <span
  m='221630'>married</span> <span m='222060'>to</span> <span
  m='222130'>somebody</span> <span m='222620'>that's</span> <span
  m='222830'>less</span> <span m='223140'>desirable</span> <span
  m='223850'>to</span> <span m='223950'>him</span> <span m='224330'>than</span>
  <span m='224550'>Nicole,</span> <span m='224640'>so</span> <span
  m='224870'>he</span> <span m='225060'>must</span> <span m='225185'>have</span>
  <span m='225310'>crossed</span> <span m='225680'>Nicole</span> <span
  m='226220'>off</span> <span m='226500'>on</span> <span m='226680'>some</span>
  <span m='226920'>day.</span> <span m='227160'>Let's</span> <span
  m='227370'>call</span> <span m='227560'>that</span> <span
  m='227700'>his</span> <span m='227930'>bad</span> <span m='228240'>day.</span>
  <span m='229240'>So</span> <span m='229520'>on</span> <span
  m='229680'>his</span> <span m='229930'>bad</span> <span m='230270'>day,</span>
  <span m='231810'>Keith</span> <span m='233310'>is</span> <span
  m='233500'>rejected</span> <span m='234380'>by</span> <span
  m='235060'>his</span> <span m='235590'>optimal</span> <span
  m='236170'>spouse.</span> <span m='237860'>OK</span> </p><p><span
  m='240500'>If</span> <span m='240710'>this</span> <span m='240880'>ever</span>
  <span m='241050'>happens,</span> <span m='241700'>there's</span> <span
  m='241920'>going</span> <span m='242070'>to</span> <span m='242130'>be</span>
  <span m='242330'>some</span> <span m='243050'>boy</span> <span
  m='244630'>who</span> <span m='244840'>has</span> <span m='244905'>the</span>
  <span m='244970'>earliest</span> <span m='245420'>bad</span> <span
  m='245690'>day--</span> <span m='245850'>we</span> <span m='245990'>may</span>
  <span m='246110'>as</span> <span m='246210'>well</span> <span
  m='246350'>assume</span> <span m='246580'>that</span> <span
  m='246730'>it's</span> <span m='246880'>Keith.</span> <span
  m='247190'>So</span> <span m='247320'>let's</span> <span
  m='247540'>assume</span> <span m='247830'>that</span> <span
  m='247950'>Keith</span> <span m='248970'>was</span> <span
  m='249310'>the</span> <span m='249450'>earliest</span> <span
  m='249960'>among</span> <span m='250200'>the</span> <span
  m='250290'>boys</span> <span m='250590'>to</span> <span m='250740'>have</span>
  <span m='250890'>a</span> <span m='250940'>bad</span> <span
  m='251290'>day,</span> <span m='251470'>that</span> <span
  m='251650'>is,</span> <span m='251800'>a</span> <span m='251880'>day</span>
  <span m='252150'>on</span> <span m='252250'>which</span> <span
  m='252490'>he</span> <span m='252590'>crosses</span> <span
  m='253120'>off</span> <span m='253850'>his</span> <span
  m='254110'>optimal</span> <span m='254630'>spouse,</span> <span
  m='255120'>because</span> <span m='255410'>he</span> <span
  m='255470'>was</span> <span m='255680'>rejected</span> <span
  m='256180'>by</span> <span m='256339'>her.</span> <span
  m='257570'>Well,</span> <span m='258190'>on</span> <span
  m='258300'>this</span> <span m='258410'>bad</span> <span m='258720'>day</span>
  <span m='259649'>when</span> <span m='259970'>Keith</span> <span
  m='260250'>crosses</span> <span m='260670'>off</span> <span
  m='260820'>Nicole,</span> <span m='261230'>it's</span> <span
  m='261490'>because</span> <span m='261890'>Nicole</span> <span
  m='262570'>rejected</span> <span m='262910'>him,</span> <span
  m='263250'>which</span> <span m='263480'>meant</span> <span
  m='264130'>that</span> <span m='264380'>Nicole</span> <span
  m='265640'>had</span> <span m='265880'>a</span> <span m='265940'>suitor</span>
  <span m='266500'>that</span> <span m='266620'>she</span> <span
  m='266830'>liked</span> <span m='267230'>better</span> <span
  m='268020'>than</span> <span m='269130'>Keith.</span> <span
  m='269810'>Let's</span> <span m='270040'>call</span> <span
  m='270300'>that</span> <span m='270500'>suitor</span> <span
  m='270900'>Tom.</span> </p><p><span m='272290'>So</span> <span
  m='272470'>what</span> <span m='272650'>we</span> <span m='272760'>know</span>
  <span m='273040'>is</span> <span m='273360'>that</span> <span
  m='274080'>Nicole</span> <span m='274620'>prefers</span> <span
  m='275160'>this</span> <span m='275400'>guy</span> <span m='275590'>Tom</span>
  <span m='276100'>to</span> <span m='276240'>Keith</span> <span
  m='276760'>on</span> <span m='276970'>the</span> <span m='277050'>day</span>
  <span m='278530'>that</span> <span m='278760'>she</span> <span
  m='279380'>rejected</span> <span m='279860'>Keith,</span> <span
  m='280130'>and</span> <span m='280190'>he</span> <span
  m='280300'>crossed</span> <span m='280650'>her</span> <span
  m='280810'>off,</span> <span m='282370'>and</span> <span m='283250'>we</span>
  <span m='283500'>also</span> <span m='283850'>know</span> <span
  m='284090'>since</span> <span m='284410'>this</span> <span
  m='284610'>is</span> <span m='284750'>the</span> <span
  m='284970'>earliest</span> <span m='285540'>bad</span> <span
  m='285820'>day</span> <span m='285990'>that</span> <span
  m='286170'>anybody</span> <span m='286660'>has,</span> <span
  m='288620'>Tom</span> <span m='289060'>has</span> <span m='289310'>not</span>
  <span m='289680'>yet</span> <span m='289960'>crossed</span> <span
  m='290350'>off</span> <span m='290550'>his</span> <span
  m='290750'>optimal</span> <span m='291200'>girl.</span> <span
  m='293110'>So</span> <span m='293590'>what</span> <span m='293810'>that</span>
  <span m='294080'>means</span> <span m='294530'>is</span> <span
  m='294880'>that</span> <span m='295020'>since</span> <span
  m='295280'>he's</span> <span m='295450'>serenading</span> <span
  m='296040'>Nicole,</span> <span m='296710'>and</span> <span
  m='296810'>she's</span> <span m='297060'>going</span> <span
  m='297205'>to</span> <span m='297350'>wind</span> <span m='297630'>up</span>
  <span m='298080'>rejecting</span> <span m='298630'>Keith</span> <span
  m='298940'>in</span> <span m='299040'>favor</span> <span m='299440'>of</span>
  <span m='299570'>Tom,</span> <span m='300300'>it</span> <span
  m='300490'>must</span> <span m='300790'>be</span> <span m='300930'>the</span>
  <span m='301050'>case</span> <span m='301850'>that</span> <span
  m='302520'>Nicole</span> <span m='303740'>is</span> <span m='303920'>at</span>
  <span m='304000'>least</span> <span m='304440'>as</span> <span
  m='304600'>desirable</span> <span m='305340'>to</span> <span
  m='305460'>Tom</span> <span m='305860'>as</span> <span m='306070'>his</span>
  <span m='306250'>optimal</span> <span m='306690'>spouse,</span> <span
  m='307090'>because</span> <span m='307400'>he</span> <span
  m='307510'>hasn't</span> <span m='308190'>gotten</span> <span
  m='308570'>to</span> <span m='308690'>his</span> <span
  m='308880'>optimal</span> <span m='309300'>spouse</span> <span
  m='309690'>yet.</span> <span m='309940'>He's</span> <span
  m='310150'>working</span> <span m='310490'>his</span> <span
  m='310660'>way</span> <span m='310830'>down</span> <span m='311100'>the</span>
  <span m='311170'>list,</span> <span m='312770'>and</span> <span
  m='313030'>he</span> <span m='313200'>hasn't</span> <span
  m='313530'>had</span> <span m='313720'>a</span> <span m='313770'>bad</span>
  <span m='314080'>day</span> <span m='314280'>yet.</span> </p><p><span
  m='315460'>So</span> <span m='315700'>let's</span> <span m='315940'>put</span>
  <span m='316130'>these</span> <span m='316360'>two</span> <span
  m='316540'>pieces</span> <span m='316930'>together.</span> <span
  m='317810'>Nicole</span> <span m='318570'>is</span> <span m='318890'>at</span>
  <span m='319080'>least</span> <span m='319520'>as</span> <span
  m='319680'>desirable</span> <span m='320800'>to</span> <span
  m='320960'>Tom</span> <span m='321700'>as</span> <span m='321960'>Tom's</span>
  <span m='322400'>optimal</span> <span m='322920'>spouse,</span> <span
  m='324400'>and</span> <span m='324950'>Nicole</span> <span
  m='325560'>prefers</span> <span m='326030'>Tom</span> <span
  m='326910'>to</span> <span m='327050'>Keith,</span> <span
  m='328322'>but</span> <span m='328680'>what</span> <span
  m='328920'>that</span> <span m='329180'>tells</span> <span
  m='329540'>us</span> <span m='329810'>is</span> <span m='330300'>that</span>
  <span m='330970'>if</span> <span m='331200'>I</span> <span
  m='331310'>had</span> <span m='331670'>a</span> <span m='331780'>set</span>
  <span m='332070'>of</span> <span m='332160'>stable</span> <span
  m='332640'>marriages,</span> <span m='333270'>with</span> <span
  m='333470'>Nicole</span> <span m='333990'>married</span> <span
  m='334440'>to</span> <span m='334550'>Keith,</span> <span
  m='335230'>then</span> <span m='335390'>in</span> <span m='335500'>the</span>
  <span m='335580'>stable</span> <span m='335950'>set</span> <span
  m='336150'>of</span> <span m='336270'>marriages,</span> <span
  m='336810'>of</span> <span m='336910'>course,</span> <span
  m='337680'>Tom</span> <span m='338070'>is</span> <span m='338290'>going</span>
  <span m='338430'>to</span> <span m='338490'>be</span> <span
  m='338640'>married</span> <span m='339110'>to</span> <span
  m='339190'>somebody</span> <span m='340280'>that's,</span> <span
  m='340810'>at</span> <span m='341100'>best,</span> <span
  m='341430'>optimal</span> <span m='341920'>for</span> <span
  m='342070'>him,</span> <span m='342410'>so</span> <span m='342710'>he's</span>
  <span m='343040'>married</span> <span m='343440'>to</span> <span
  m='343540'>somebody</span> <span m='344390'>that</span> <span
  m='344760'>he</span> <span m='345010'>likes</span> <span
  m='346400'>less</span> <span m='346800'>than</span> <span
  m='346970'>Nicole.</span> </p><p><span m='348280'>And</span> <span
  m='348880'>Nicole</span> <span m='349590'>is</span> <span
  m='349710'>married</span> <span m='350090'>to</span> <span
  m='350170'>Keith,</span> <span m='350520'>and</span> <span
  m='350610'>she</span> <span m='350820'>likes</span> <span
  m='351210'>Tom</span> <span m='352140'>better</span> <span
  m='352430'>than</span> <span m='352610'>who</span> <span
  m='352750'>she's</span> <span m='353010'>married</span> <span
  m='353460'>to.</span> <span m='354230'>What</span> <span
  m='354430'>that</span> <span m='354680'>tells</span> <span
  m='355010'>us</span> <span m='355250'>is</span> <span m='355560'>that</span>
  <span m='355850'>Nicole</span> <span m='356065'>and</span> <span
  m='356280'>Tom</span> <span m='356980'>are</span> <span m='357100'>a</span>
  <span m='357280'>rogue</span> <span m='357760'>couple</span> <span
  m='358630'>in</span> <span m='358900'>any</span> <span
  m='359270'>stable</span> <span m='359800'>set</span> <span
  m='360050'>of</span> <span m='360190'>marriages</span> <span
  m='361230'>where</span> <span m='361390'>Nicole</span> <span
  m='361820'>was</span> <span m='361980'>married</span> <span
  m='362350'>to</span> <span m='362440'>Keith,</span> <span
  m='363100'>but</span> <span m='363370'>that</span> <span
  m='363550'>contradicts</span> <span m='364150'>the</span> <span
  m='364240'>fact</span> <span m='364515'>that</span> <span
  m='364790'>Nicole</span> <span m='365020'>is</span> <span
  m='365250'>supposed</span> <span m='365600'>to</span> <span
  m='365660'>be</span> <span m='365780'>optimal</span> <span
  m='366230'>for</span> <span m='366370'>Keith.</span> <span
  m='366690'>There's</span> <span m='366820'>supposed</span> <span
  m='367230'>to</span> <span m='367300'>be</span> <span m='367830'>a</span>
  <span m='367940'>stable</span> <span m='368410'>set</span> <span
  m='368630'>of</span> <span m='368750'>marriages</span> <span
  m='369480'>where</span> <span m='369730'>Nicole</span> <span
  m='370380'>is</span> <span m='370560'>married</span> <span
  m='370940'>to</span> <span m='371040'>Keith.</span> <span m='374230'>So</span>
  <span m='374460'>a</span> <span m='374510'>similar</span> <span
  m='374980'>argument--</span> <span m='375770'>it's</span> <span
  m='375830'>actually</span> <span m='376060'>slightly</span> <span
  m='376440'>easier--</span> <span m='377560'>is</span> <span
  m='378140'>that</span> <span m='379110'>the</span> <span
  m='379350'>mating</span> <span m='379730'>ritual</span> <span
  m='380380'>yields</span> <span m='380740'>a</span> <span m='380800'>set</span>
  <span m='381010'>of</span> <span m='381090'>stable</span> <span
  m='381470'>marriages</span> <span m='382110'>in</span> <span
  m='382220'>which</span> <span m='383100'>all</span> <span m='383350'>of</span>
  <span m='383440'>the</span> <span m='383540'>girls</span> <span
  m='383910'>get</span> <span m='384190'>the</span> <span
  m='384290'>worst</span> <span m='384700'>possible</span> <span
  m='385200'>spouse</span> <span m='385620'>that</span> <span
  m='385760'>they</span> <span m='385880'>can</span> <span
  m='386070'>have</span> <span m='386490'>in</span> <span m='386600'>any</span>
  <span m='386710'>set</span> <span m='386940'>of</span> <span
  m='387020'>stable</span> <span m='387430'>marriages.</span> </p><p><span
  m='390130'>So</span> <span m='390490'>this</span> <span
  m='390790'>leads</span> <span m='391120'>to</span> <span m='391230'>a</span>
  <span m='391290'>whole</span> <span m='391510'>bunch</span> <span
  m='391730'>of</span> <span m='391780'>questions,</span> <span
  m='392430'>and</span> <span m='392600'>it</span> <span m='392690'>turns</span>
  <span m='392980'>out</span> <span m='393190'>that</span> <span
  m='393450'>there's</span> <span m='393560'>a</span> <span
  m='393600'>very</span> <span m='393950'>rich</span> <span
  m='394250'>theory</span> <span m='395150'>of</span> <span
  m='395720'>stable</span> <span m='396130'>marriages,</span> <span
  m='396640'>as</span> <span m='396780'>I</span> <span
  m='396840'>mentioned.</span> <span m='399440'>First</span> <span
  m='399700'>question</span> <span m='400010'>to</span> <span
  m='400110'>ask</span> <span m='400430'>is,</span> <span
  m='400550'>well,</span> <span m='400850'>are</span> <span
  m='401080'>there</span> <span m='401130'>other</span> <span
  m='401370'>possible</span> <span m='401950'>stable</span> <span
  m='402370'>marriages?</span> <span m='403190'>Well,</span> <span
  m='403500'>one</span> <span m='403720'>thing</span> <span
  m='403940'>that</span> <span m='404005'>you</span> <span m='404070'>can</span>
  <span m='404210'>obviously</span> <span m='404790'>do</span> <span
  m='405260'>is</span> <span m='405780'>you</span> <span m='405910'>could</span>
  <span m='406090'>switch</span> <span m='406470'>the</span> <span
  m='406570'>roles</span> <span m='406850'>of</span> <span m='406920'>the</span>
  <span m='406990'>boys</span> <span m='407280'>and</span> <span
  m='407430'>the</span> <span m='407655'>girls.</span> <span
  m='408630'>So</span> <span m='408900'>if</span> <span m='408990'>you</span>
  <span m='409080'>switch</span> <span m='409410'>the</span> <span
  m='409510'>roles</span> <span m='409760'>of</span> <span m='409840'>the</span>
  <span m='409900'>boys</span> <span m='410190'>and</span> <span
  m='410285'>the</span> <span m='410380'>girls,</span> <span
  m='410720'>you'll</span> <span m='410920'>get</span> <span m='411630'>a</span>
  <span m='413700'>set</span> <span m='414000'>of</span> <span
  m='414110'>stable</span> <span m='414490'>marriages</span> <span
  m='415110'>that</span> <span m='415240'>are</span> <span
  m='415450'>optimal</span> <span m='416580'>for</span> <span
  m='416700'>the</span> <span m='416790'>girls</span> <span
  m='417250'>and</span> <span m='417370'>pessimal</span> <span
  m='417880'>for</span> <span m='418010'>the</span> <span
  m='418110'>boys.</span> <span m='418460'>Maybe</span> <span
  m='418710'>that's</span> <span m='419110'>fair</span> <span
  m='419635'>or</span> <span m='419762'>you</span> <span
  m='419890'>rather</span> <span m='420180'>do</span> <span
  m='420370'>that.</span> </p><p><span m='421060'>So</span> <span
  m='421250'>that's</span> <span m='421530'>at</span> <span
  m='421650'>least</span> <span m='422070'>a</span> <span
  m='422180'>possibility</span> <span m='422890'>of</span> <span
  m='422960'>using</span> <span m='423210'>the</span> <span
  m='423280'>mating</span> <span m='423580'>ritual</span> <span
  m='423960'>to</span> <span m='424050'>get</span> <span m='424260'>two</span>
  <span m='424440'>different</span> <span m='425700'>stable</span> <span
  m='426250'>sets</span> <span m='426520'>of</span> <span
  m='426630'>marriages,</span> <span m='428100'>unless</span> <span
  m='428470'>the</span> <span m='428580'>two</span> <span
  m='428790'>happen</span> <span m='429090'>to</span> <span m='429150'>be</span>
  <span m='429290'>the</span> <span m='429380'>same.</span> <span
  m='430850'>And</span> <span m='431810'>the</span> <span
  m='431910'>question</span> <span m='432300'>arises,</span> <span
  m='432630'>are</span> <span m='433210'>there</span> <span
  m='433510'>others</span> <span m='434000'>that</span> <span
  m='434710'>could</span> <span m='435040'>exist</span> <span
  m='435560'>that</span> <span m='435830'>the</span> <span
  m='436110'>mating</span> <span m='436400'>ritual</span> <span
  m='436720'>doesn't</span> <span m='437050'>find,</span> <span
  m='437560'>either</span> <span m='437890'>by</span> <span
  m='438480'>choosing</span> <span m='438860'>the</span> <span
  m='438950'>boys</span> <span m='439500'>to</span> <span m='439850'>act</span>
  <span m='440040'>as</span> <span m='440230'>boys</span> <span
  m='440520'>or</span> <span m='440570'>the</span> <span m='440680'>boys</span>
  <span m='440940'>to</span> <span m='441050'>act</span> <span
  m='441340'>as</span> <span m='441470'>girls,</span> <span
  m='441760'>and</span> <span m='441850'>the</span> <span
  m='442010'>answer</span> <span m='442310'>is</span> <span
  m='442440'>that,</span> <span m='442540'>in</span> <span
  m='442630'>general,</span> <span m='443080'>there</span> <span
  m='443220'>can</span> <span m='443370'>be</span> <span m='443520'>many.</span>
  <span m='444130'>As</span> <span m='444360'>a</span> <span
  m='444410'>matter</span> <span m='444730'>of</span> <span
  m='444800'>fact,</span> <span m='445460'>if</span> <span
  m='445600'>there</span> <span m='445670'>are</span> <span m='445790'>N</span>
  <span m='446070'>boys</span> <span m='446370'>and</span> <span
  m='446480'>girls,</span> <span m='446940'>it's</span> <span
  m='447110'>possible</span> <span m='447770'>that</span> <span
  m='447940'>there</span> <span m='448100'>could</span> <span
  m='448290'>be</span> <span m='448500'>an</span> <span
  m='448680'>exponential</span> <span m='449440'>number</span> <span
  m='450170'>of</span> <span m='450340'>stable</span> <span
  m='450700'>marriages</span> <span m='451290'>in</span> <span
  m='451410'>N,</span> <span m='452210'>and</span> <span m='452430'>that</span>
  <span m='452660'>leads</span> <span m='452950'>to</span> <span
  m='453080'>the</span> <span m='453200'>question</span> <span
  m='453700'>of,</span> <span m='453950'>well,</span> <span
  m='454150'>which</span> <span m='454540'>is</span> <span m='454780'>one</span>
  <span m='455200'>that</span> <span m='455530'>might</span> <span
  m='455830'>be</span> <span m='456160'>a</span> <span m='456210'>better</span>
  <span m='456520'>one</span> <span m='456730'>to</span> <span
  m='456820'>choose</span> <span m='457240'>compared</span> <span
  m='457650'>to</span> <span m='457740'>the</span> <span m='457860'>one</span>
  <span m='458060'>that</span> <span m='458470'>completely</span> <span
  m='459020'>favors</span> <span m='459410'>the</span> <span
  m='459490'>boys</span> <span m='459860'>or</span> <span
  m='459990'>completely</span> <span m='460490'>favors</span> <span
  m='461010'>girls.</span> </p><p><span m='463490'>Another</span> <span
  m='463860'>interesting</span> <span m='464280'>question</span> <span
  m='464770'>that</span> <span m='464910'>comes</span> <span
  m='465050'>up</span> <span m='466080'>that's</span> <span m='467410'>an</span>
  <span m='467550'>issue</span> <span m='467760'>that</span> <span
  m='467870'>comes</span> <span m='468050'>up</span> <span
  m='468180'>with</span> <span m='468290'>general</span> <span
  m='468750'>protocols</span> <span m='469400'>of</span> <span
  m='469520'>negotiation</span> <span m='470300'>and</span> <span
  m='470410'>optimization</span> <span m='471420'>among</span> <span
  m='471690'>multiple</span> <span m='472140'>parties</span> <span
  m='472660'>is,</span> <span m='473410'>does</span> <span m='473680'>it</span>
  <span m='473840'>serve</span> <span m='474230'>anybody</span> <span
  m='475060'>to</span> <span m='475220'>lie?</span> <span m='475960'>That</span>
  <span m='476230'>is,</span> <span m='476770'>instead</span> <span
  m='477240'>of</span> <span m='477370'>following</span> <span
  m='477930'>the</span> <span m='478040'>protocol</span> <span
  m='479550'>and</span> <span m='480170'>always</span> <span
  m='480510'>going</span> <span m='480940'>to</span> <span
  m='481120'>the--</span> <span m='481972'>and</span> <span
  m='482400'>the</span> <span m='482480'>boys</span> <span
  m='482760'>always</span> <span m='483010'>serenading</span> <span
  m='484070'>the</span> <span m='484470'>girls</span> <span
  m='484760'>that</span> <span m='484890'>they</span> <span
  m='485020'>like</span> <span m='485290'>best,</span> <span
  m='485800'>and</span> <span m='486130'>the</span> <span
  m='488000'>girls</span> <span m='488470'>always</span> <span
  m='488820'>rejecting</span> <span m='490150'>anybody</span> <span
  m='490630'>that's</span> <span m='490850'>less</span> <span
  m='491090'>desirable</span> <span m='491760'>than</span> <span
  m='491950'>their</span> <span m='492110'>favorite</span> <span
  m='492620'>suitor,</span> <span m='493910'>suppose</span> <span
  m='494360'>they</span> <span m='494870'>violate</span> <span
  m='495420'>the</span> <span m='495530'>convention</span> <span
  m='496070'>and</span> <span m='496170'>lie.</span> <span m='497420'>Can</span>
  <span m='497640'>they</span> <span m='497770'>do</span> <span
  m='497930'>better?</span> </p><p><span m='499550'>Well,</span> <span
  m='499720'>it</span> <span m='499830'>turns</span> <span m='500150'>out</span>
  <span m='500380'>that,</span> <span m='500490'>of</span> <span
  m='500550'>course,</span> <span m='500800'>the</span> <span
  m='500870'>boys</span> <span m='501540'>in</span> <span m='501700'>the</span>
  <span m='501980'>mating</span> <span m='502240'>ritual</span> <span
  m='502630'>aren't</span> <span m='502790'>doing</span> <span
  m='503010'>optimal,</span> <span m='503440'>so</span> <span
  m='503580'>they</span> <span m='503720'>don't</span> <span
  m='503890'>gain</span> <span m='504080'>anything</span> <span
  m='504460'>by</span> <span m='504610'>trying</span> <span m='504830'>to</span>
  <span m='504900'>lie,</span> <span m='505560'>but</span> <span
  m='505840'>the</span> <span m='505940'>girls</span> <span m='506330'>it</span>
  <span m='506460'>turns</span> <span m='506820'>out--</span> <span
  m='508165'>it's</span> <span m='508510'>almost</span> <span
  m='508790'>the</span> <span m='508870'>case--</span> <span
  m='509220'>that</span> <span m='509710'>girls</span> <span
  m='510070'>can</span> <span m='510340'>do</span> <span
  m='510450'>better</span> <span m='510790'>by</span> <span
  m='510970'>lying.</span> <span m='511470'>If</span> <span
  m='511620'>they</span> <span m='512280'>conspire</span> <span
  m='512890'>together</span> <span m='513340'>to</span> <span
  m='513470'>lie,</span> <span m='514179'>they</span> <span
  m='514320'>can</span> <span m='514520'>actually</span> <span
  m='515840'>force</span> <span m='516549'>the</span> <span
  m='517250'>mating</span> <span m='517600'>ritual</span> <span
  m='518150'>to</span> <span m='518280'>wind</span> <span m='518650'>up</span>
  <span m='518820'>turning</span> <span m='519250'>into</span> <span
  m='519590'>a</span> <span m='519659'>stable</span> <span m='520140'>set</span>
  <span m='520350'>of</span> <span m='520440'>marriages</span> <span
  m='520929'>that's</span> <span m='521140'>girl</span> <span
  m='521440'>optimal.</span> </p><p><span m='522559'>So</span> <span
  m='522809'>that</span> <span m='523090'>raises</span> <span
  m='523530'>another</span> <span m='523900'>issue</span> <span
  m='524179'>about,</span> <span m='524560'>are</span> <span
  m='524715'>there</span> <span m='524870'>protocols</span> <span
  m='525470'>which</span> <span m='525680'>are</span> <span
  m='525760'>resistant</span> <span m='526350'>to</span> <span
  m='526440'>lying?</span> <span m='528050'>We're</span> <span
  m='528170'>not</span> <span m='528310'>going</span> <span m='528400'>to</span>
  <span m='528440'>go</span> <span m='528590'>into</span> <span
  m='528780'>these</span> <span m='528980'>questions.</span> <span
  m='529560'>We</span> <span m='529750'>mainly</span> <span
  m='530080'>wanted</span> <span m='530440'>to</span> <span
  m='530720'>understand</span> <span m='531330'>the</span> <span
  m='531410'>stable</span> <span m='531810'>marriage</span> <span
  m='532350'>problem</span> <span m='532980'>and</span> <span
  m='533170'>its</span> <span m='533310'>applications</span> <span
  m='534890'>and</span> <span m='535030'>how</span> <span m='535240'>to</span>
  <span m='535340'>find</span> <span m='535760'>them.</span> <span
  m='536620'>Again,</span> <span m='537000'>if</span> <span
  m='537110'>you</span> <span m='537230'>want</span> <span m='537400'>to</span>
  <span m='537470'>learn</span> <span m='537720'>more</span> <span
  m='537940'>about</span> <span m='538220'>this,</span> <span
  m='538670'>you</span> <span m='538680'>can</span> <span m='538840'>look</span>
  <span m='539050'>at</span> <span m='539150'>the</span> <span
  m='539250'>book</span> <span m='539630'>by</span> <span
  m='539820'>Gusfield</span> <span m='540370'>and</span> <span
  m='540480'>Irving</span> <span m='541580'>that</span> <span
  m='541740'>I</span> <span m='541810'>mentioned</span> <span
  m='542270'>in</span> <span m='542475'>a</span> <span
  m='542680'>previous</span> <span m='542980'>video.</span> </p>
embedded_media:
  - uid: c899badb11e578ceec6457702198e3f1
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: a24df10b292562b5216e578293dab99a
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 282e38af7d15402f108a08e8930577e5
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: n4KKgKpp--0
  - uid: ead4468b6fc94ac0f02bcd227005ce0c
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/n4KKgKpp--0/default.jpg'
  - uid: 7d3857cc5c5587561638129345744ad3
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: n4KKgKpp--0
  - uid: 5a9e5d778c531e4f7fb483933caa7c1e
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: n4KKgKpp--0.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/optimal-stable-matching-video/optimal-stable-matching/n4KKgKpp--0.srt
  - uid: ece77a932faa919b76e7c2fe31e813af
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: n4KKgKpp--0.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/optimal-stable-matching-video/optimal-stable-matching/n4KKgKpp--0.pdf
  - uid: 1f7a468eb092f66df6b6c7ac1bc5d300
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 77badba5d91d00079b120110f0044684
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 350f8a8b1caa8e8d06475e0f7e140066
    parent_uid: c6491840986db5f3fb5ef698a0ee2c78
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_stableoptimal_ipod.mp4
type: courses
layout: video
---
