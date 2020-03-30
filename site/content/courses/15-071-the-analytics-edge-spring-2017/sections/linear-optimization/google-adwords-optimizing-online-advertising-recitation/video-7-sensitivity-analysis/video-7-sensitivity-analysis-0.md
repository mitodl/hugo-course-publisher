---
title: 'Video 7: Sensitivity Analysis'
uid: eed36e7269d25f8457449025261fe117
parent_uid: 2d0a67f494dc2dadf7504c69427d6a55
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-7-sensitivity-analysis/video-7-sensitivity-analysis-0
short_url: video-7-sensitivity-analysis-0
inline_embed_id: 85750963video7sensitivityanalysis79943347
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>In</span> <span m='4774'>this</span> <span
  m='5048'>video,</span> <span m='5322'>we're</span> <span m='5596'>going</span>
  <span m='5870'>to</span> <span m='6144'>explore</span> <span
  m='6418'>our</span> <span m='6692'>linear</span> <span
  m='6966'>optimization</span> <span m='7240'>model</span> <span
  m='7975'>further.</span> </p><p><span m='8710'>We're</span> <span
  m='8922'>going</span> <span m='9135'>to</span> <span m='9348'>use</span> <span
  m='9560'>it</span> <span m='9773'>to</span> <span m='9986'>answer</span> <span
  m='10199'>some</span> <span m='10411'>"what</span> <span m='10624'>if"</span>
  <span m='10837'>questions</span> <span m='11050'>and</span> <span
  m='11530'>to</span> <span m='12010'>conduct</span> <span m='12490'>some</span>
  <span m='12970'>sensitivity</span> <span m='13450'>analysis.</span>
  </p><p><span m='13930'>So</span> <span m='14181'>here,</span> <span
  m='14432'>we</span> <span m='14684'>have</span> <span m='14935'>a</span> <span
  m='15187'>spreadsheet</span> <span m='15438'>that</span> <span
  m='15690'>is</span> <span m='16004'>formatted</span> <span
  m='16318'>very</span> <span m='16632'>similarly</span> <span
  m='16947'>to</span> <span m='17261'>the</span> <span
  m='17575'>spreadsheets</span> <span m='17890'>that</span> <span
  m='18175'>we've</span> <span m='18461'>used</span> <span m='18746'>in</span>
  <span m='19032'>Video</span> <span m='19317'>5</span> <span
  m='19603'>and</span> <span m='19888'>Video</span> <span m='20174'>6.</span>
  </p><p><span m='20460'>So</span> <span m='20676'>we</span> <span
  m='20892'>have</span> <span m='21109'>the</span> <span m='21325'>data</span>
  <span m='21541'>up</span> <span m='21758'>here,</span> <span
  m='21974'>we</span> <span m='22190'>have</span> <span m='22407'>the</span>
  <span m='22623'>price-per-click,</span> <span m='22840'>the</span> <span
  m='23171'>click-through-rate,</span> <span m='23502'>the</span> <span
  m='23834'>average</span> <span m='24165'>price</span> <span
  m='24497'>per</span> <span m='24828'>display,</span> <span
  m='25160'>the</span> <span m='25656'>budgets,</span> <span
  m='26152'>the</span> <span m='26648'>query</span> <span
  m='27144'>estimates.</span> </p><p><span m='27640'>Below</span> <span
  m='27918'>those,</span> <span m='28196'>we</span> <span m='28475'>have</span>
  <span m='28753'>the</span> <span m='29031'>variables.</span> </p><p><span
  m='29310'>So</span> <span m='29546'>we</span> <span m='29783'>have</span>
  <span m='30020'>the</span> <span m='30256'>cells</span> <span
  m='30493'>corresponding</span> <span m='30730'>to</span> <span
  m='31075'>the</span> <span m='31420'>decision</span> <span
  m='31765'>variables.</span> </p><p><span m='32110'>We</span> <span
  m='32397'>have</span> <span m='32685'>the</span> <span m='32972'>cell</span>
  <span m='33260'>corresponding</span> <span m='33547'>to</span> <span
  m='33835'>the</span> <span m='34122'>objective.</span> </p><p><span
  m='34410'>And</span> <span m='34625'>to</span> <span m='34840'>the</span>
  <span m='35055'>right</span> <span m='35270'>of</span> <span
  m='35485'>these,</span> <span m='35700'>we</span> <span m='35915'>have</span>
  <span m='36130'>cells</span> <span m='36523'>that</span> <span
  m='36916'>contain</span> <span m='37310'>the</span> <span
  m='37703'>values</span> <span m='38096'>of</span> <span m='38490'>the</span>
  <span m='38883'>decision</span> <span m='39276'>variables</span> <span
  m='39670'>and</span> <span m='39984'>a</span> <span m='40298'>cell</span>
  <span m='40612'>that</span> <span m='40926'>contains</span> <span
  m='41240'>the</span> <span m='41554'>value</span> <span m='41868'>of</span>
  <span m='42182'>the</span> <span m='42496'>revenue</span> <span
  m='42810'>from</span> <span m='43254'>our</span> <span
  m='43698'>original</span> <span m='44142'>solution</span> <span
  m='44587'>from</span> <span m='45031'>Video</span> <span m='45475'>5.</span>
  </p><p><span m='45920'>So</span> <span m='46116'>what</span> <span
  m='46312'>we're</span> <span m='46508'>going</span> <span m='46704'>to</span>
  <span m='46900'>do</span> <span m='47096'>is,</span> <span
  m='47293'>we're</span> <span m='47489'>going</span> <span m='47685'>to</span>
  <span m='47881'>change</span> <span m='48077'>our</span> <span
  m='48273'>data,</span> <span m='48470'>and</span> <span m='48694'>we're</span>
  <span m='48918'>going</span> <span m='49143'>to</span> <span
  m='49367'>see</span> <span m='49592'>how</span> <span m='49816'>the</span>
  <span m='50041'>solution</span> <span m='50265'>changes</span> <span
  m='50490'>and</span> <span m='50787'>how</span> <span m='51085'>the</span>
  <span m='51383'>objective</span> <span m='51681'>value</span> <span
  m='51978'>changes</span> <span m='52276'>and</span> <span
  m='52574'>compare</span> <span m='52872'>it</span> <span m='53170'>to</span>
  <span m='53660'>our</span> <span m='54150'>original</span> <span
  m='54640'>solution.</span> </p><p><span m='55130'>So</span> <span
  m='55404'>as</span> <span m='55679'>one</span> <span m='55953'>of</span> <span
  m='56228'>the</span> <span m='56502'>questions</span> <span
  m='56777'>that</span> <span m='57051'>we</span> <span m='57326'>might</span>
  <span m='57600'>consider,</span> <span m='57875'>let's</span> <span
  m='58150'>consider</span> <span m='58632'>the</span> <span
  m='59115'>following</span> <span m='59597'>question.</span> </p><p><span
  m='60080'>What</span> <span m='60447'>would</span> <span
  m='60815'>happen</span> <span m='61183'>if</span> <span m='61551'>the</span>
  <span m='61918'>click-through-rate</span> <span m='62286'>of</span> <span
  m='62654'>AT&amp;T</span> <span m='63022'>with</span> <span
  m='63390'>query</span> <span m='64062'>one</span> <span
  m='64735'>increased</span> <span m='65408'>from</span> <span
  m='66081'>0.10</span> <span m='66754'>to</span> <span m='67427'>0.5?</span>
  </p><p><span m='68100'>So</span> <span m='68318'>to</span> <span
  m='68537'>answer</span> <span m='68756'>this</span> <span
  m='68975'>question,</span> <span m='69193'>let's</span> <span
  m='69412'>crawl</span> <span m='69631'>up</span> <span m='69850'>in</span>
  <span m='70333'>the</span> <span m='70817'>spreadsheet</span> <span
  m='71301'>until</span> <span m='71785'>we</span> <span m='72268'>hit</span>
  <span m='72752'>the</span> <span m='73236'>click-through-rate.</span>
  </p><p><span m='73720'>And</span> <span m='74046'>let's</span> <span
  m='74372'>change</span> <span m='74698'>the</span> <span
  m='75024'>click-through-rate</span> <span m='75350'>from</span> <span
  m='76002'>0.1</span> <span m='76655'>to</span> <span m='77307'>0.5.</span>
  </p><p><span m='77960'>Now,</span> <span m='78172'>if</span> <span
  m='78384'>we</span> <span m='78596'>do</span> <span m='78808'>this,</span>
  <span m='79021'>you</span> <span m='79233'>may</span> <span
  m='79445'>have</span> <span m='79657'>noticed</span> <span
  m='79870'>that</span> <span m='80154'>the</span> <span
  m='80439'>average</span> <span m='80723'>price</span> <span
  m='81008'>per</span> <span m='81292'>display</span> <span m='81577'>for</span>
  <span m='81861'>AT&amp;T</span> <span m='82146'>in</span> <span
  m='82430'>query</span> <span m='82715'>one</span> <span m='83000'>also</span>
  <span m='83500'>changed.</span> </p><p><span m='84000'>So</span> <span
  m='84247'>of</span> <span m='84494'>course,</span> <span m='84741'>this</span>
  <span m='84988'>makes</span> <span m='85235'>sense,</span> <span
  m='85482'>because</span> <span m='85729'>the</span> <span
  m='85976'>average</span> <span m='86223'>price</span> <span
  m='86470'>per</span> <span m='86797'>display</span> <span m='87124'>is</span>
  <span m='87451'>just</span> <span m='87778'>the</span> <span
  m='88105'>click-through-rate</span> <span m='88432'>multiplied</span> <span
  m='88760'>by</span> <span m='89243'>the</span> <span
  m='89726'>price-per-click.</span> </p><p><span m='90210'>And</span> <span
  m='90517'>here,</span> <span m='90825'>the</span> <span m='91133'>way</span>
  <span m='91440'>we've</span> <span m='91748'>set</span> <span
  m='92056'>up</span> <span m='92363'>the</span> <span
  m='92671'>spreadsheet</span> <span m='92979'>is</span> <span
  m='93326'>so</span> <span m='93673'>that</span> <span m='94020'>these</span>
  <span m='94368'>cells</span> <span m='94715'>are</span> <span
  m='95062'>exactly</span> <span m='95410'>the</span> <span
  m='95923'>product</span> <span m='96436'>of</span> <span m='96950'>the</span>
  <span m='97463'>corresponding</span> <span m='97976'>cells.</span>
  </p><p><span m='98490'>So</span> <span m='98793'>the</span> <span
  m='99097'>cells</span> <span m='99401'>that</span> <span
  m='99705'>correspond</span> <span m='100008'>to</span> <span
  m='100312'>the</span> <span m='100616'>click-through-rate</span> <span
  m='100920'>and</span> <span m='101388'>the</span> <span
  m='101857'>price-per-click</span> <span m='102326'>for</span> <span
  m='102795'>that</span> <span m='103264'>respective</span> <span
  m='103733'>query</span> <span m='104202'>and</span> <span
  m='104671'>advertiser</span> <span m='105140'>combination.</span> </p><p><span
  m='106759'>So</span> <span m='107174'>our</span> <span
  m='107590'>average</span> <span m='108006'>price</span> <span
  m='108421'>per</span> <span m='108837'>display</span> <span
  m='109253'>has</span> <span m='109668'>changed</span> <span
  m='110084'>appropriately.</span> </p><p><span m='110500'>And</span> <span
  m='110788'>so</span> <span m='111076'>now,</span> <span m='111365'>we</span>
  <span m='111653'>just</span> <span m='111941'>scroll</span> <span
  m='112230'>down</span> <span m='112518'>until</span> <span
  m='112806'>we</span> <span m='113095'>see</span> <span m='113383'>our</span>
  <span m='113671'>variables</span> <span m='113960'>and</span> <span
  m='114332'>we</span> <span m='114704'>see</span> <span m='115076'>our</span>
  <span m='115448'>objective.</span> </p><p><span m='115820'>And</span> <span
  m='116312'>let's</span> <span m='116804'>click</span> <span
  m='117296'>on</span> <span m='117788'>Tools.</span> </p><p><span
  m='118280'>Let's</span> <span m='118698'>open</span> <span
  m='119116'>up</span> <span m='119534'>the</span> <span
  m='119952'>Solver.</span> </p><p><span m='120370'>And</span> <span
  m='120723'>we</span> <span m='121076'>have</span> <span m='121429'>the</span>
  <span m='121782'>Solver</span> <span m='122135'>configured</span> <span
  m='122488'>the</span> <span m='122841'>exact</span> <span
  m='123194'>same</span> <span m='123547'>way</span> <span
  m='123900'>from</span> <span m='124110'>last</span> <span
  m='124320'>time.</span> </p><p><span m='124530'>So</span> <span
  m='124780'>we</span> <span m='125030'>don't</span> <span
  m='125280'>need</span> <span m='125530'>to</span> <span m='125780'>do</span>
  <span m='126030'>anything</span> <span m='126280'>here.</span> </p><p><span
  m='126530'>And</span> <span m='126702'>so</span> <span m='126874'>now,</span>
  <span m='127046'>all</span> <span m='127218'>we</span> <span
  m='127390'>have</span> <span m='127562'>to</span> <span m='127734'>do</span>
  <span m='127906'>is</span> <span m='128078'>just</span> <span
  m='128250'>hit</span> <span m='128794'>Solve</span> <span
  m='129338'>and</span> <span m='129883'>click</span> <span m='130427'>on</span>
  <span m='130972'>Keep</span> <span m='131516'>Result,</span> <span
  m='132061'>and</span> <span m='132605'>voila.</span> </p><p><span
  m='133150'>We</span> <span m='133578'>have</span> <span m='134006'>a</span>
  <span m='134434'>new</span> <span m='134862'>solution.</span> </p><p><span
  m='135290'>So</span> <span m='135540'>now,</span> <span
  m='135790'>several</span> <span m='136040'>things</span> <span
  m='136290'>have</span> <span m='136540'>changed</span> <span
  m='136790'>with</span> <span m='137040'>the</span> <span
  m='137290'>solution,</span> <span m='137540'>if</span> <span
  m='138002'>you</span> <span m='138465'>can</span> <span m='138927'>see.</span>
  </p><p><span m='139390'>So</span> <span m='139749'>the</span> <span
  m='140108'>first</span> <span m='140467'>thing</span> <span
  m='140826'>is</span> <span m='141185'>that</span> <span m='141544'>the</span>
  <span m='141903'>allocations</span> <span m='142262'>have</span> <span
  m='142621'>changed.</span> </p><p><span m='142980'>So</span> <span
  m='143433'>for</span> <span m='143887'>instance,</span> <span
  m='144340'>we</span> <span m='144794'>allocate</span> <span
  m='145248'>query</span> <span m='145701'>one</span> <span
  m='146155'>and</span> <span m='146609'>AT&amp;T</span> <span
  m='147062'>68</span> <span m='147516'>times.</span> </p><p><span
  m='147970'>So</span> <span m='148301'>we</span> <span m='148633'>decide</span>
  <span m='148965'>to</span> <span m='149296'>show</span> <span
  m='149628'>AT&amp;T's</span> <span m='149960'>ad</span> <span
  m='150291'>with</span> <span m='150623'>query</span> <span
  m='150955'>one</span> <span m='151286'>68</span> <span
  m='151618'>times,</span> <span m='151950'>as</span> <span
  m='152200'>opposed</span> <span m='152450'>to</span> <span
  m='152700'>the</span> <span m='152950'>original</span> <span
  m='153200'>solution,</span> <span m='153450'>where</span> <span
  m='153700'>we</span> <span m='154086'>did</span> <span m='154472'>it</span>
  <span m='154858'>40</span> <span m='155244'>times.</span> </p><p><span
  m='155630'>And</span> <span m='155953'>we</span> <span m='156276'>can</span>
  <span m='156599'>also</span> <span m='156922'>see</span> <span
  m='157245'>that</span> <span m='157568'>AT&amp;T</span> <span
  m='157891'>is</span> <span m='158214'>never</span> <span
  m='158537'>shown</span> <span m='158860'>in</span> <span
  m='159183'>query</span> <span m='159506'>two</span> <span m='159829'>or</span>
  <span m='160144'>query</span> <span m='160460'>three</span> <span
  m='160776'>in</span> <span m='161092'>our</span> <span m='161408'>new</span>
  <span m='161724'>solution,</span> <span m='162040'>whereas</span> <span
  m='162289'>before,</span> <span m='162538'>it</span> <span
  m='162787'>was</span> <span m='163036'>shown</span> <span m='163285'>40</span>
  <span m='163535'>times</span> <span m='163784'>for</span> <span
  m='164033'>query</span> <span m='164282'>two</span> <span
  m='164531'>and</span> <span m='164780'>80</span> <span m='165030'>times</span>
  <span m='165660'>for</span> <span m='166290'>query</span> <span
  m='166920'>three.</span> </p><p><span m='167550'>Similarly,</span> <span
  m='167931'>we</span> <span m='168312'>show</span> <span
  m='168693'>T-Mobile</span> <span m='169074'>72</span> <span
  m='169455'>times</span> <span m='169836'>with</span> <span
  m='170217'>query</span> <span m='170598'>one,</span> <span
  m='170980'>whereas</span> <span m='171322'>before,</span> <span
  m='171665'>we</span> <span m='172007'>only</span> <span
  m='172350'>showed</span> <span m='172692'>it</span> <span
  m='173035'>100</span> <span m='173377'>times.</span> </p><p><span
  m='173720'>And</span> <span m='174017'>we</span> <span m='174315'>also</span>
  <span m='174612'>showed</span> <span m='174910'>T-Mobile</span> <span
  m='175207'>with</span> <span m='175505'>query</span> <span
  m='175802'>three</span> <span m='176100'>14</span> <span
  m='176537'>times,</span> <span m='176975'>whereas</span> <span
  m='177412'>before,</span> <span m='177850'>we</span> <span
  m='178287'>didn't</span> <span m='178725'>show</span> <span
  m='179162'>it</span> <span m='179600'>at</span> <span m='179940'>all</span>
  <span m='180280'>with</span> <span m='180620'>query</span> <span
  m='180960'>three.</span> </p><p><span m='181300'>And</span> <span
  m='181731'>Verizon's</span> <span m='182162'>allocations</span> <span
  m='182593'>say</span> <span m='183025'>the</span> <span m='183456'>same</span>
  <span m='183887'>as</span> <span m='184318'>before.</span> </p><p><span
  m='184750'>In</span> <span m='185042'>terms</span> <span m='185335'>of</span>
  <span m='185628'>the</span> <span m='185921'>revenue,</span> <span
  m='186214'>our</span> <span m='186507'>revenue</span> <span
  m='186800'>has</span> <span m='187195'>gone</span> <span m='187590'>up</span>
  <span m='187985'>slightly</span> <span m='188380'>from</span> <span
  m='188775'>$428</span> <span m='189170'>in</span> <span m='189565'>the</span>
  <span m='189960'>original</span> <span m='190355'>solution</span> <span
  m='190750'>to</span> <span m='191273'>$430</span> <span m='191796'>in</span>
  <span m='192320'>the</span> <span m='192843'>new</span> <span
  m='193366'>solution.</span> </p><p><span m='193890'>Now,</span> <span
  m='194181'>this</span> <span m='194472'>may</span> <span
  m='194763'>seem</span> <span m='195055'>like</span> <span m='195346'>a</span>
  <span m='195637'>small</span> <span m='195928'>amount.</span> </p><p><span
  m='196220'>But</span> <span m='196506'>actually,</span> <span
  m='196793'>this</span> <span m='197080'>is</span> <span m='197366'>the</span>
  <span m='197653'>most</span> <span m='197940'>that</span> <span
  m='198226'>we</span> <span m='198513'>can</span> <span m='198800'>hope</span>
  <span m='199086'>to</span> <span m='199373'>achieve.</span> </p><p><span
  m='199660'>And</span> <span m='199871'>the</span> <span
  m='200082'>reason</span> <span m='200293'>for</span> <span
  m='200504'>this</span> <span m='200715'>is,</span> <span m='200926'>if</span>
  <span m='201137'>we</span> <span m='201348'>scroll</span> <span
  m='201559'>down,</span> <span m='201770'>if</span> <span m='202050'>we</span>
  <span m='202331'>look</span> <span m='202612'>at</span> <span
  m='202893'>our</span> <span m='203174'>budgets,</span> <span
  m='203455'>so</span> <span m='203736'>the</span> <span
  m='204017'>budget</span> <span m='204298'>for</span> <span
  m='204579'>AT&amp;T</span> <span m='204860'>is</span> <span
  m='205402'>170,</span> <span m='205944'>for</span> <span
  m='206486'>T-Mobile,</span> <span m='207028'>100,</span> <span
  m='207570'>and</span> <span m='208112'>for</span> <span
  m='208654'>Verizon,</span> <span m='209196'>it's</span> <span
  m='209738'>160.</span> </p><p><span m='210280'>If</span> <span
  m='210537'>we</span> <span m='210795'>add</span> <span m='211052'>up</span>
  <span m='211310'>these</span> <span m='211567'>values,</span> <span
  m='211825'>you</span> <span m='212082'>can</span> <span m='212340'>see</span>
  <span m='212649'>that</span> <span m='212958'>actually</span> <span
  m='213267'>the</span> <span m='213576'>sum</span> <span m='213885'>of</span>
  <span m='214194'>these</span> <span m='214503'>values</span> <span
  m='214812'>is</span> <span m='215121'>430.</span> </p><p><span
  m='215430'>Now,</span> <span m='215788'>this</span> <span
  m='216146'>isn't</span> <span m='216504'>a</span> <span
  m='216862'>coincidence.</span> </p><p><span m='217220'>In</span> <span
  m='217472'>fact,</span> <span m='217725'>if</span> <span m='217977'>you</span>
  <span m='218230'>think</span> <span m='218482'>about</span> <span
  m='218735'>it,</span> <span m='218987'>this</span> <span
  m='219240'>makes</span> <span m='219730'>sense,</span> <span
  m='220220'>because</span> <span m='220710'>what</span> <span
  m='221200'>Google</span> <span m='221690'>earns</span> <span
  m='222180'>from</span> <span m='222670'>each</span> <span
  m='223160'>advertiser</span> <span m='223650'>is</span> <span
  m='224048'>exactly</span> <span m='224447'>how</span> <span
  m='224845'>much</span> <span m='225244'>that</span> <span
  m='225642'>advertiser</span> <span m='226041'>spends.</span> </p><p><span
  m='226440'>And</span> <span m='226741'>if</span> <span m='227042'>the</span>
  <span m='227343'>most</span> <span m='227645'>that</span> <span
  m='227946'>each</span> <span m='228247'>advertiser</span> <span
  m='228548'>spends</span> <span m='228850'>is</span> <span
  m='229258'>that</span> <span m='229667'>advertiser's</span> <span
  m='230075'>budget,</span> <span m='230484'>then</span> <span
  m='230892'>the</span> <span m='231301'>most</span> <span
  m='231710'>that</span> <span m='231964'>Google</span> <span
  m='232218'>could</span> <span m='232473'>hope</span> <span
  m='232727'>to</span> <span m='232982'>earn</span> <span m='233236'>is</span>
  <span m='233491'>in</span> <span m='233745'>fact</span> <span
  m='234000'>the</span> <span m='234320'>sum</span> <span m='234640'>of</span>
  <span m='234960'>these</span> <span m='235280'>budgets.</span> </p><p><span
  m='235600'>So</span> <span m='235925'>in</span> <span m='236250'>fact,</span>
  <span m='236575'>we</span> <span m='236900'>are</span> <span
  m='237225'>attaining</span> <span m='237550'>the</span> <span
  m='237875'>highest</span> <span m='238200'>possible</span> <span
  m='238525'>revenue</span> <span m='238850'>that</span> <span
  m='239260'>we</span> <span m='239670'>can</span> <span m='240080'>hope</span>
  <span m='240490'>to</span> <span m='240900'>attain</span> <span
  m='241310'>in</span> <span m='241720'>this</span> <span
  m='242130'>case.</span> </p><p><span m='242540'>So</span> <span
  m='242928'>that</span> <span m='243316'>was</span> <span
  m='243704'>rather</span> <span m='244092'>interesting.</span> </p><p><span
  m='244480'>And</span> <span m='244887'>now,</span> <span
  m='245294'>let's</span> <span m='245701'>change</span> <span
  m='246108'>back</span> <span m='246515'>the</span> <span
  m='246922'>click-through-rate</span> <span m='247330'>from</span> <span
  m='247722'>0.5</span> <span m='248114'>back</span> <span m='248506'>to</span>
  <span m='248898'>the</span> <span m='249291'>original</span> <span
  m='249683'>value</span> <span m='250075'>of</span> <span
  m='250467'>0.1.</span> </p><p><span m='250860'>And</span> <span
  m='251260'>let's</span> <span m='251660'>answer</span> <span
  m='252060'>another</span> <span m='252460'>question.</span> </p><p><span
  m='252860'>So</span> <span m='253166'>the</span> <span
  m='253473'>question</span> <span m='253780'>that</span> <span
  m='254086'>we'd</span> <span m='254393'>now</span> <span
  m='254700'>like</span> <span m='255006'>to</span> <span
  m='255313'>answer</span> <span m='255620'>is,</span> <span
  m='256031'>what</span> <span m='256442'>would</span> <span
  m='256853'>happen</span> <span m='257265'>if</span> <span
  m='257676'>AT&amp;T's</span> <span m='258087'>budget</span> <span
  m='258498'>increased</span> <span m='258910'>from</span> <span
  m='259255'>170</span> <span m='259600'>to</span> <span m='259945'>200?</span>
  </p><p><span m='260290'>So</span> <span m='260584'>for</span> <span
  m='260878'>example,</span> <span m='261172'>AT&amp;T</span> <span
  m='261466'>calls</span> <span m='261760'>us</span> <span m='262055'>and</span>
  <span m='262349'>tells</span> <span m='262643'>us</span> <span
  m='262937'>that</span> <span m='263231'>actually</span> <span
  m='263525'>they</span> <span m='263820'>can</span> <span
  m='264375'>afford</span> <span m='264930'>more</span> <span
  m='265485'>advertisements.</span> </p><p><span m='266040'>So</span> <span
  m='266338'>how</span> <span m='266637'>would</span> <span
  m='266935'>that</span> <span m='267234'>change</span> <span
  m='267532'>our</span> <span m='267831'>solution?</span> </p><p><span
  m='268130'>Well,</span> <span m='268591'>in</span> <span
  m='269052'>this</span> <span m='269513'>case,</span> <span
  m='269974'>let's</span> <span m='270435'>just</span> <span
  m='270896'>find</span> <span m='271357'>AT&amp;T's</span> <span
  m='271818'>budget</span> <span m='272279'>data.</span> </p><p><span
  m='272740'>So</span> <span m='273020'>in</span> <span m='273300'>this</span>
  <span m='273580'>case,</span> <span m='273860'>it</span> <span
  m='274140'>is</span> <span m='274420'>the</span> <span m='274700'>cell</span>
  <span m='274980'>here.</span> </p><p><span m='275260'>And</span> <span
  m='275763'>let's</span> <span m='276267'>change</span> <span
  m='276771'>it</span> <span m='277275'>from</span> <span m='277778'>170</span>
  <span m='278282'>to</span> <span m='278786'>200.</span> </p><p><span
  m='279290'>Now,</span> <span m='279706'>let's</span> <span
  m='280122'>scroll</span> <span m='280538'>down</span> <span
  m='280954'>to</span> <span m='281370'>our</span> <span
  m='281786'>variables</span> <span m='282202'>and</span> <span
  m='282618'>our</span> <span m='283034'>objective.</span> </p><p><span
  m='283450'>And</span> <span m='283706'>let's</span> <span
  m='283962'>just</span> <span m='284218'>set</span> <span
  m='284475'>them</span> <span m='284731'>back</span> <span m='284987'>to</span>
  <span m='285243'>zero.</span> </p><p><span m='288200'>And</span> <span
  m='288450'>now,</span> <span m='288700'>let's</span> <span
  m='288950'>go</span> <span m='289200'>to</span> <span m='289450'>Tools</span>
  <span m='289700'>again,</span> <span m='289950'>let's</span> <span
  m='290200'>open</span> <span m='290450'>up</span> <span m='290700'>the</span>
  <span m='291660'>Solver,</span> <span m='292620'>and</span> <span
  m='293580'>let's</span> <span m='294540'>hit</span> <span
  m='295500'>Solve.</span> </p><p><span m='296460'>We</span> <span
  m='296772'>get</span> <span m='297084'>428,</span> <span
  m='297396'>which</span> <span m='297708'>is</span> <span
  m='298021'>actually</span> <span m='298333'>the</span> <span
  m='298645'>same</span> <span m='298957'>objective</span> <span
  m='299270'>that</span> <span m='299578'>we</span> <span m='299886'>got</span>
  <span m='300194'>from</span> <span m='300502'>before.</span> </p><p><span
  m='300810'>And</span> <span m='301052'>let's</span> <span
  m='301295'>just</span> <span m='301538'>click</span> <span
  m='301781'>on</span> <span m='302024'>Keep</span> <span
  m='302267'>Result</span> <span m='302510'>and</span> <span
  m='302978'>take</span> <span m='303447'>a</span> <span m='303915'>look</span>
  <span m='304384'>at</span> <span m='304852'>the</span> <span
  m='305321'>solution.</span> </p><p><span m='305790'>Now,</span> <span
  m='306466'>interestingly,</span> <span m='307142'>this</span> <span
  m='307818'>new</span> <span m='308494'>solution</span> <span
  m='309170'>is</span> <span m='309550'>actually</span> <span
  m='309930'>exactly</span> <span m='310310'>the</span> <span
  m='310690'>same</span> <span m='311070'>as</span> <span m='311450'>the</span>
  <span m='311830'>old</span> <span m='312210'>solution.</span> </p><p><span
  m='312590'>So</span> <span m='313390'>what</span> <span
  m='314190'>happened</span> <span m='314990'>here?</span> </p><p><span
  m='315790'>Why</span> <span m='316360'>didn't</span> <span
  m='316930'>this</span> <span m='317500'>change</span> <span
  m='318070'>anything?</span> </p><p><span m='318640'>Well,</span> <span
  m='319005'>actually,</span> <span m='319371'>if</span> <span
  m='319736'>you</span> <span m='320102'>recall</span> <span
  m='320467'>from</span> <span m='320833'>the</span> <span
  m='321198'>previous</span> <span m='321564'>solution,</span> <span
  m='321930'>in</span> <span m='322208'>the</span> <span
  m='322486'>previous</span> <span m='322765'>solution,</span> <span
  m='323043'>we</span> <span m='323321'>actually</span> <span
  m='323600'>only</span> <span m='324201'>used</span> <span
  m='324803'>$168</span> <span m='325405'>of</span> <span
  m='326006'>AT&amp;T's</span> <span m='326608'>budget.</span> </p><p><span
  m='327210'>And</span> <span m='327722'>in</span> <span m='328234'>the</span>
  <span m='328746'>previous</span> <span m='329258'>solution,</span> <span
  m='329771'>AT&amp;T's</span> <span m='330283'>budget</span> <span
  m='330795'>was</span> <span m='331307'>$170.</span> </p><p><span
  m='331820'>So</span> <span m='332107'>in</span> <span m='332395'>the</span>
  <span m='332682'>previous</span> <span m='332970'>solution,</span> <span
  m='333257'>we</span> <span m='333545'>didn't</span> <span
  m='333832'>actually</span> <span m='334120'>use</span> <span
  m='334556'>up</span> <span m='334993'>all</span> <span m='335430'>of</span>
  <span m='335866'>AT&amp;T's</span> <span m='336303'>budget.</span>
  </p><p><span m='336740'>And</span> <span m='337060'>since</span> <span
  m='337380'>this</span> <span m='337700'>constraint</span> <span
  m='338020'>was</span> <span m='338340'>not</span> <span
  m='338660'>binding,</span> <span m='338980'>then</span> <span
  m='339586'>increasing</span> <span m='340193'>this</span> <span
  m='340800'>constraint</span> <span m='341406'>beyond</span> <span
  m='342013'>170--</span> <span m='342620'>so</span> <span
  m='343055'>increasing</span> <span m='343490'>the</span> <span
  m='343925'>budget</span> <span m='344360'>from</span> <span
  m='344795'>170</span> <span m='345230'>to</span> <span m='345665'>200--</span>
  <span m='346100'>won't</span> <span m='346498'>actually</span> <span
  m='346897'>have</span> <span m='347296'>an</span> <span
  m='347695'>effect</span> <span m='348093'>on</span> <span
  m='348492'>the</span> <span m='348891'>solution.</span> </p><p><span
  m='349290'>So</span> <span m='349525'>this</span> <span m='349760'>is</span>
  <span m='349995'>why</span> <span m='350230'>the</span> <span
  m='350465'>solution</span> <span m='350700'>didn't</span> <span
  m='350935'>change.</span> </p><p><span m='351170'>And</span> <span
  m='351370'>in</span> <span m='351570'>fact,</span> <span m='351770'>in</span>
  <span m='351970'>this</span> <span m='352170'>case,</span> <span
  m='352370'>we</span> <span m='352570'>didn't</span> <span
  m='352770'>really</span> <span m='352970'>need</span> <span
  m='353300'>to</span> <span m='353631'>change</span> <span
  m='353962'>the</span> <span m='354293'>data</span> <span m='354624'>and</span>
  <span m='354955'>to</span> <span m='355286'>solve</span> <span
  m='355617'>the</span> <span m='355948'>problem</span> <span
  m='356279'>again,</span> <span m='356610'>we</span> <span
  m='356906'>could've</span> <span m='357203'>deduced</span> <span
  m='357500'>this</span> <span m='357796'>from</span> <span
  m='358093'>actually</span> <span m='358390'>looking</span> <span
  m='358934'>at</span> <span m='359478'>the</span> <span
  m='360022'>budget</span> <span m='360566'>values.</span> </p><p><span
  m='361110'>So</span> <span m='361417'>these</span> <span m='361724'>are</span>
  <span m='362031'>examples</span> <span m='362338'>of</span> <span
  m='362645'>two</span> <span m='362952'>questions</span> <span
  m='363260'>that</span> <span m='363651'>we</span> <span
  m='364042'>might</span> <span m='364434'>consider</span> <span
  m='364825'>in</span> <span m='365217'>this</span> <span
  m='365608'>setting.</span> </p><p><span m='366000'>And</span> <span
  m='366258'>so</span> <span m='366516'>this</span> <span
  m='366775'>concludes</span> <span m='367033'>our</span> <span
  m='367291'>exploration</span> <span m='367550'>of</span> <span
  m='368078'>this</span> <span m='368606'>problem</span> <span
  m='369134'>in</span> <span m='369662'>LibreOffice.</span> </p><p><span
  m='370190'>In</span> <span m='370502'>the</span> <span m='370814'>next</span>
  <span m='371126'>video,</span> <span m='371438'>we'll</span> <span
  m='371751'>return</span> <span m='372063'>to</span> <span
  m='372375'>the</span> <span m='372687'>slides,</span> <span
  m='373000'>and</span> <span m='373208'>we'll</span> <span
  m='373417'>discuss</span> <span m='373625'>some</span> <span
  m='373834'>ways</span> <span m='374042'>that</span> <span m='374251'>we</span>
  <span m='374460'>can</span> <span m='374867'>extend</span> <span
  m='375274'>the</span> <span m='375681'>problem</span> <span
  m='376088'>beyond</span> <span m='376495'>the</span> <span
  m='376902'>formulation</span> <span m='377310'>that</span> <span
  m='377628'>we've</span> <span m='377946'>been</span> <span
  m='378265'>thinking</span> <span m='378583'>about</span> <span
  m='378901'>here.</span> </p><p><span m='379220'>And</span> <span
  m='379537'>we'll</span> <span m='379855'>also</span> <span
  m='380173'>summarize</span> <span m='380491'>what</span> <span
  m='380808'>we've</span> <span m='381126'>discussed</span> <span
  m='381444'>so</span> <span m='381762'>far.</span> </p><p><span
  m='382080'>So</span> <span m='382596'>see</span> <span m='383112'>you</span>
  <span m='383628'>in</span> <span m='384144'>PowerPoint.</span> </p>
embedded_media:
  - uid: 5bb956578dc44879509ca89bea6df84d
    parent_uid: eed36e7269d25f8457449025261fe117
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 1i5TDkri78Y
  - uid: 2c699296c46c38faa36a1f04ec762bb2
    parent_uid: eed36e7269d25f8457449025261fe117
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 1i5TDkri78Y
  - uid: eb4c94ce471cd810dd1432344c7f777a
    parent_uid: eed36e7269d25f8457449025261fe117
    id: 1i5TDkri78Y.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-7-sensitivity-analysis/video-7-sensitivity-analysis-0/1i5TDkri78Y.srt
  - uid: b605e25465ec42dff73c1c4138ea694a
    parent_uid: eed36e7269d25f8457449025261fe117
    id: 1i5TDkri78Y.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-7-sensitivity-analysis/video-7-sensitivity-analysis-0/1i5TDkri78Y.pdf
  - uid: 3213dc93bc44926bc48023a499670cf9
    parent_uid: eed36e7269d25f8457449025261fe117
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 05abf18f5f939ab2fd97243a35a80289
    parent_uid: eed36e7269d25f8457449025261fe117
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d6f4cf87bdb394f5db01becec4247e02
    parent_uid: eed36e7269d25f8457449025261fe117
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/1i5TDkri78Y/default.jpg'
  - uid: c0954e9ac1cfbf699572cd2e9fb2dd0b
    parent_uid: eed36e7269d25f8457449025261fe117
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_8.4.08_300k.mp4
type: courses
layout: video
---
