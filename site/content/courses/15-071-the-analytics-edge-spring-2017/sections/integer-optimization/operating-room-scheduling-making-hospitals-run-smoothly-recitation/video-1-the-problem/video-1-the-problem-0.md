---
title: 'Video 1: The Problem'
uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
parent_uid: 5e9398f5808e614ec06fe6634bc50d7e
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/operating-room-scheduling-making-hospitals-run-smoothly-recitation/video-1-the-problem/video-1-the-problem-0
short_url: video-1-the-problem-0
inline_embed_id: 23175250video1theproblem72729334
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9490'>In</span> <span m='9851'>this</span> <span
  m='10212'>recitation,</span> <span m='10574'>we'll</span> <span
  m='10935'>discuss</span> <span m='11297'>operating</span> <span
  m='11658'>room</span> <span m='12020'>scheduling.</span> </p><p><span
  m='13420'>That</span> <span m='13829'>is,</span> <span m='14238'>how</span>
  <span m='14647'>hospitals</span> <span m='15056'>can</span> <span
  m='15465'>be</span> <span m='15874'>made</span> <span m='16283'>to</span>
  <span m='16692'>run</span> <span m='17101'>smoothly.</span> </p><p><span
  m='17510'>In</span> <span m='17862'>particular,</span> <span
  m='18214'>we'll</span> <span m='18566'>discuss</span> <span
  m='18918'>how</span> <span m='19270'>an</span> <span
  m='19622'>operating</span> <span m='19974'>room</span> <span
  m='20326'>manager</span> <span m='20678'>can</span> <span m='21030'>use</span>
  <span m='21343'>integer</span> <span m='21656'>optimization</span> <span
  m='21970'>to</span> <span m='22283'>make</span> <span m='22596'>sure</span>
  <span m='22910'>the</span> <span m='23223'>hospital</span> <span
  m='23536'>runs</span> <span m='23850'>smoothly.</span> </p><p><span
  m='25790'>So</span> <span m='26116'>hospitals</span> <span
  m='26443'>have</span> <span m='26770'>a</span> <span m='27096'>limited</span>
  <span m='27423'>number</span> <span m='27750'>of</span> <span
  m='28076'>operating</span> <span m='28403'>rooms,</span> <span
  m='28730'>or</span> <span m='29510'>ORs.</span> </p><p><span
  m='30290'>And</span> <span m='30627'>operating</span> <span
  m='30965'>room</span> <span m='31303'>managers</span> <span
  m='31641'>must</span> <span m='31978'>determine</span> <span
  m='32316'>a</span> <span m='32654'>weekly</span> <span
  m='32992'>schedule</span> <span m='33330'>assigning</span> <span
  m='33793'>ORs</span> <span m='34257'>to</span> <span
  m='34721'>different</span> <span m='35185'>departments</span> <span
  m='35648'>in</span> <span m='36112'>the</span> <span
  m='36576'>hospital.</span> </p><p><span m='37040'>If</span> <span
  m='37227'>you</span> <span m='37415'>look</span> <span m='37602'>on</span>
  <span m='37790'>the</span> <span m='37977'>right,</span> <span
  m='38165'>you'll</span> <span m='38352'>see</span> <span m='38540'>a</span>
  <span m='38928'>picture</span> <span m='39316'>of</span> <span
  m='39705'>an</span> <span m='40093'>operating</span> <span
  m='40481'>room.</span> </p><p><span m='40870'>You</span> <span
  m='41219'>can</span> <span m='41568'>see</span> <span
  m='41917'>immediately</span> <span m='42266'>how</span> <span
  m='42615'>much</span> <span m='42964'>specialized</span> <span
  m='43313'>and</span> <span m='43662'>fancy</span> <span
  m='44011'>equipment</span> <span m='44360'>there</span> <span
  m='44975'>is.</span> </p><p><span m='45590'>And</span> <span
  m='45939'>you</span> <span m='46288'>have</span> <span m='46637'>to</span>
  <span m='46986'>remember</span> <span m='47335'>that</span> <span
  m='47684'>for</span> <span m='48033'>any</span> <span
  m='48382'>surgery,</span> <span m='48731'>staffing</span> <span
  m='49080'>the</span> <span m='49418'>OR</span> <span m='49757'>doesn't</span>
  <span m='50096'>just</span> <span m='50435'>involve</span> <span
  m='50773'>the</span> <span m='51112'>surgeon</span> <span
  m='51451'>performing</span> <span m='51790'>the</span> <span
  m='52350'>surgery,</span> <span m='52910'>but</span> <span
  m='53470'>also</span> <span m='54030'>other</span> <span
  m='54590'>doctors,</span> <span m='55150'>nurses,</span> <span
  m='55710'>residents,</span> <span m='56270'>and</span> <span
  m='56625'>fellows.</span> </p><p><span m='56980'>There's</span> <span
  m='57565'>usually</span> <span m='58150'>an</span> <span
  m='58735'>entire</span> <span m='59320'>surgery</span> <span
  m='59905'>team.</span> </p><p><span m='60490'>So</span> <span
  m='60828'>due</span> <span m='61167'>to</span> <span m='61506'>the</span>
  <span m='61845'>specialized</span> <span m='62184'>equipment</span> <span
  m='62523'>in</span> <span m='62862'>an</span> <span m='63201'>OR,</span> <span
  m='63540'>as</span> <span m='63920'>well</span> <span m='64300'>as</span>
  <span m='64680'>the</span> <span m='65060'>specialized</span> <span
  m='65440'>staff</span> <span m='65820'>members,</span> <span
  m='66200'>it's</span> <span m='66538'>been</span> <span
  m='66877'>estimated</span> <span m='67216'>that</span> <span
  m='67555'>staffing</span> <span m='67893'>an</span> <span
  m='68232'>operating</span> <span m='68571'>room</span> <span
  m='68910'>costs</span> <span m='69556'>over</span> <span m='70202'>$100</span>
  <span m='70848'>a</span> <span m='71494'>minute.</span> </p><p><span
  m='72140'>Therefore,</span> <span m='72413'>for</span> <span
  m='72686'>a</span> <span m='72960'>hospital</span> <span m='73233'>to</span>
  <span m='73506'>run</span> <span m='73780'>on</span> <span m='74053'>a</span>
  <span m='74326'>budget,</span> <span m='74600'>it's</span> <span
  m='74906'>very</span> <span m='75212'>critical</span> <span
  m='75518'>for</span> <span m='75825'>the</span> <span
  m='76131'>operating</span> <span m='76437'>room</span> <span
  m='76743'>manager</span> <span m='77050'>to</span> <span
  m='77708'>create</span> <span m='78366'>a</span> <span m='79024'>good</span>
  <span m='79682'>schedule.</span> </p><p><span m='80340'>However,</span> <span
  m='80836'>this</span> <span m='81332'>isn't</span> <span
  m='81828'>without</span> <span m='82324'>difficulties.</span> </p><p><span
  m='82820'>Creating</span> <span m='83157'>an</span> <span
  m='83495'>acceptable</span> <span m='83833'>schedule</span> <span
  m='84171'>is</span> <span m='84508'>a</span> <span m='84846'>highly</span>
  <span m='85184'>political</span> <span m='85522'>process</span> <span
  m='85860'>within</span> <span m='86536'>the</span> <span
  m='87213'>hospital.</span> </p><p><span m='87890'>Surgeons</span> <span
  m='88260'>are</span> <span m='88630'>frequently</span> <span
  m='89000'>paid</span> <span m='89370'>on</span> <span m='89740'>a</span> <span
  m='90110'>fee-for-service</span> <span m='90480'>basis,</span> <span
  m='90850'>which</span> <span m='91220'>means</span> <span
  m='91571'>they</span> <span m='91922'>get</span> <span m='92273'>paid</span>
  <span m='92624'>for</span> <span m='92975'>every</span> <span
  m='93326'>surgery</span> <span m='93677'>they</span> <span
  m='94028'>perform.</span> </p><p><span m='94380'>That</span> <span
  m='94638'>means</span> <span m='94897'>that</span> <span m='95156'>when</span>
  <span m='95415'>you</span> <span m='95673'>change</span> <span
  m='95932'>their</span> <span m='96191'>allocated</span> <span
  m='96450'>number</span> <span m='96844'>of</span> <span
  m='97238'>operating</span> <span m='97632'>room</span> <span
  m='98027'>hours,</span> <span m='98421'>it</span> <span
  m='98815'>directly</span> <span m='99210'>affects</span> <span
  m='99906'>their</span> <span m='100603'>income.</span> </p><p><span
  m='101300'>Therefore,</span> <span m='101720'>the</span> <span
  m='102140'>operating</span> <span m='102560'>room</span> <span
  m='102980'>managers'</span> <span m='103400'>proposed</span> <span
  m='103820'>schedule</span> <span m='104240'>must</span> <span
  m='104597'>strike</span> <span m='104954'>a</span> <span
  m='105311'>delicate</span> <span m='105668'>balance</span> <span
  m='106025'>between</span> <span m='106382'>all</span> <span
  m='106740'>the</span> <span m='107245'>surgical</span> <span
  m='107750'>departments</span> <span m='108255'>in</span> <span
  m='108760'>the</span> <span m='109265'>hospital.</span> </p><p><span
  m='109770'>However,</span> <span m='110098'>there</span> <span
  m='110426'>are</span> <span m='110755'>many</span> <span
  m='111083'>logistical</span> <span m='111411'>issues</span> <span
  m='111740'>for</span> <span m='112018'>the</span> <span
  m='112297'>operating</span> <span m='112575'>room</span> <span
  m='112854'>manager</span> <span m='113132'>to</span> <span
  m='113411'>consider</span> <span m='113690'>when</span> <span
  m='114355'>designing</span> <span m='115020'>the</span> <span
  m='115685'>schedule.</span> </p><p><span m='116350'>Operating</span> <span
  m='116823'>rooms</span> <span m='117297'>are</span> <span
  m='117771'>staffed</span> <span m='118245'>in</span> <span
  m='118718'>eight</span> <span m='119192'>hour</span> <span
  m='119666'>blocks.</span> </p><p><span m='120140'>Each</span> <span
  m='120460'>department</span> <span m='120780'>sets</span> <span
  m='121100'>their</span> <span m='121420'>own</span> <span
  m='121740'>target</span> <span m='122060'>number</span> <span
  m='122380'>of</span> <span m='122933'>allocation</span> <span
  m='123487'>hours,</span> <span m='124041'>which</span> <span
  m='124595'>may</span> <span m='125148'>not</span> <span m='125702'>be</span>
  <span m='126256'>integer.</span> </p><p><span m='126810'>In</span> <span
  m='127116'>addition,</span> <span m='127422'>departments</span> <span
  m='127728'>may</span> <span m='128034'>have</span> <span
  m='128340'>daily</span> <span m='128912'>and</span> <span
  m='129485'>weekly</span> <span m='130057'>requirements.</span> </p><p><span
  m='130630'>For</span> <span m='131051'>example,</span> <span
  m='131473'>gynecology</span> <span m='131895'>might</span> <span
  m='132317'>need</span> <span m='132739'>at</span> <span
  m='133160'>least</span> <span m='133582'>one</span> <span m='134004'>OR</span>
  <span m='134426'>per</span> <span m='134848'>day.</span> </p><p><span
  m='137970'>Ophthalmology</span> <span m='138581'>might</span> <span
  m='139192'>need</span> <span m='139803'>at</span> <span
  m='140414'>least</span> <span m='141025'>two</span> <span
  m='141636'>ORs</span> <span m='142247'>per</span> <span
  m='142858'>week.</span> </p><p><span m='143470'>And</span> <span
  m='143763'>for</span> <span m='144056'>example,</span> <span
  m='144350'>the</span> <span m='144643'>oral</span> <span
  m='144936'>surgeon</span> <span m='145230'>might</span> <span
  m='145848'>only</span> <span m='146467'>be</span> <span
  m='147086'>present</span> <span m='147705'>on</span> <span
  m='148323'>Tuesdays</span> <span m='148942'>and</span> <span
  m='149561'>Thursdays.</span> </p><p><span m='150180'>The</span> <span
  m='150478'>operating</span> <span m='150777'>room</span> <span
  m='151076'>manager</span> <span m='151375'>needs</span> <span
  m='151674'>to</span> <span m='151973'>take</span> <span m='152272'>into</span>
  <span m='152571'>account</span> <span m='152870'>all</span> <span
  m='153150'>of</span> <span m='153430'>these</span> <span
  m='153710'>logistical</span> <span m='153990'>issues</span> <span
  m='154270'>when</span> <span m='154550'>designing</span> <span
  m='154880'>a</span> <span m='155210'>feasible</span> <span
  m='155540'>schedule.</span> </p><p><span m='158990'>In</span> <span
  m='159335'>this</span> <span m='159680'>recitation,</span> <span
  m='160025'>we'll</span> <span m='160370'>consider</span> <span
  m='160715'>a</span> <span m='161060'>case</span> <span m='161405'>study</span>
  <span m='161750'>of</span> <span m='162386'>Mount</span> <span
  m='163023'>Sinai</span> <span m='163660'>Hospital</span> <span
  m='164296'>in</span> <span m='164933'>Toronto.</span> </p><p><span
  m='165570'>There</span> <span m='165966'>are</span> <span m='166363'>10</span>
  <span m='166760'>operating</span> <span m='167156'>rooms</span> <span
  m='167553'>at</span> <span m='167950'>Mount</span> <span
  m='168346'>Sinai,</span> <span m='168743'>which</span> <span
  m='169140'>are</span> <span m='169643'>staffed</span> <span
  m='170146'>from</span> <span m='170650'>Monday</span> <span
  m='171153'>through</span> <span m='171656'>Friday.</span> </p><p><span
  m='172160'>So</span> <span m='172592'>10</span> <span m='173025'>ORs</span>
  <span m='173458'>times</span> <span m='173890'>5</span> <span
  m='174323'>days</span> <span m='174756'>times</span> <span m='175189'>8</span>
  <span m='175621'>hours</span> <span m='176054'>per</span> <span
  m='176487'>day,</span> <span m='176920'>means</span> <span
  m='177291'>that</span> <span m='177662'>they</span> <span
  m='178033'>have</span> <span m='178404'>400</span> <span
  m='178775'>hours</span> <span m='179146'>to</span> <span
  m='179517'>assign</span> <span m='179888'>between</span> <span
  m='180259'>five</span> <span m='180630'>different</span> <span
  m='181536'>surgical</span> <span m='182443'>departments.</span> </p><p><span
  m='183350'>The</span> <span m='183712'>departments</span> <span
  m='184074'>they</span> <span m='184436'>are</span> <span
  m='184798'>assigning</span> <span m='185160'>are</span> <span
  m='186276'>ophthalmology,</span> <span m='187393'>gynecology,</span> <span
  m='188510'>oral</span> <span m='189626'>surgery,</span> <span
  m='190743'>otolaryngology,</span> <span m='191860'>and</span> <span
  m='192673'>general</span> <span m='193486'>surgery.</span> </p><p><span
  m='194300'>Each</span> <span m='194557'>of</span> <span
  m='194814'>these</span> <span m='195071'>departments</span> <span
  m='195328'>has</span> <span m='195585'>come</span> <span m='195842'>up</span>
  <span m='196100'>with</span> <span m='196555'>a</span> <span
  m='197010'>weekly</span> <span m='197465'>number</span> <span
  m='197920'>of</span> <span m='198375'>target</span> <span
  m='198830'>allocation</span> <span m='199285'>hours.</span> </p><p><span
  m='199740'>For</span> <span m='200383'>example,</span> <span
  m='201026'>ophthalmology</span> <span m='201670'>requests</span> <span
  m='202313'>39.4</span> <span m='202956'>hours</span> <span
  m='203600'>of</span> <span m='204254'>operating</span> <span
  m='204908'>room</span> <span m='205562'>time,</span> <span
  m='206217'>and</span> <span m='206871'>otolaryngology</span> <span
  m='207525'>requests</span> <span m='208180'>26.3</span> <span
  m='209125'>hours</span> <span m='210070'>of</span> <span
  m='211015'>operating</span> <span m='211960'>room</span> <span
  m='212905'>time.</span> </p><p><span m='213850'>Now,</span> <span
  m='214199'>it's</span> <span m='214548'>very</span> <span
  m='214897'>clear</span> <span m='215246'>that</span> <span
  m='215595'>just</span> <span m='215944'>by</span> <span
  m='216293'>looking</span> <span m='216642'>at</span> <span
  m='216991'>these</span> <span m='217340'>numbers</span> <span
  m='217690'>they</span> <span m='217941'>are</span> <span m='218192'>not</span>
  <span m='218443'>integer,</span> <span m='218694'>and</span> <span
  m='218945'>they</span> <span m='219196'>are</span> <span
  m='219447'>certainly</span> <span m='219698'>not</span> <span
  m='219950'>multiples</span> <span m='220562'>of</span> <span
  m='221175'>eight</span> <span m='221787'>hours.</span> </p><p><span
  m='222400'>This</span> <span m='222769'>means</span> <span
  m='223138'>that</span> <span m='223507'>it's</span> <span
  m='223876'>impossible</span> <span m='224245'>for</span> <span
  m='224614'>the</span> <span m='224983'>operating</span> <span
  m='225352'>room</span> <span m='225721'>manager</span> <span
  m='226090'>to</span> <span m='226497'>give</span> <span m='226904'>any</span>
  <span m='227311'>department</span> <span m='227718'>exactly</span> <span
  m='228125'>their</span> <span m='228532'>weekly</span> <span
  m='228939'>number</span> <span m='229346'>of</span> <span
  m='229753'>target</span> <span m='230160'>allocation</span> <span
  m='231195'>hours.</span> </p><p><span m='232230'>However,</span> <span
  m='232652'>the</span> <span m='233074'>operating</span> <span
  m='233496'>room</span> <span m='233918'>manager</span> <span
  m='234340'>would</span> <span m='234720'>like</span> <span
  m='235100'>to</span> <span m='235480'>try</span> <span m='235860'>to</span>
  <span m='236240'>give</span> <span m='236620'>as</span> <span
  m='237000'>many</span> <span m='237380'>hours</span> <span
  m='237760'>to</span> <span m='238140'>each</span> <span
  m='238520'>department</span> <span m='238900'>as</span> <span
  m='239447'>possible</span> <span m='239995'>up</span> <span
  m='240542'>to</span> <span m='241090'>their</span> <span
  m='241637'>target</span> <span m='242185'>allocation</span> <span
  m='242732'>number.</span> </p><p><span m='243280'>We'll</span> <span
  m='243782'>see</span> <span m='244284'>how</span> <span m='244786'>to</span>
  <span m='245288'>solve</span> <span m='245791'>this</span> <span
  m='246293'>with</span> <span m='246795'>integer</span> <span
  m='247297'>optimization.</span> </p><p><span m='247800'>Let's</span> <span
  m='248091'>consider</span> <span m='248382'>the</span> <span
  m='248673'>rest</span> <span m='248965'>of</span> <span m='249256'>the</span>
  <span m='249547'>problem</span> <span m='249838'>data.</span> </p><p><span
  m='250130'>For</span> <span m='250423'>example,</span> <span
  m='250717'>we</span> <span m='251010'>need</span> <span m='251304'>to</span>
  <span m='251598'>consider</span> <span m='251891'>the</span> <span
  m='252185'>number</span> <span m='252479'>of</span> <span
  m='252772'>surgery</span> <span m='253066'>teams</span> <span
  m='253360'>from</span> <span m='253735'>each</span> <span
  m='254110'>department</span> <span m='254485'>that</span> <span
  m='254860'>is</span> <span m='255235'>available</span> <span
  m='255610'>each</span> <span m='255985'>day.</span> </p><p><span
  m='256360'>We</span> <span m='256618'>also</span> <span m='256876'>need</span>
  <span m='257134'>to</span> <span m='257392'>consider</span> <span
  m='257650'>the</span> <span m='257908'>maximum</span> <span
  m='258166'>number</span> <span m='258424'>of</span> <span
  m='258682'>operating</span> <span m='258940'>rooms</span> <span
  m='259407'>required</span> <span m='259874'>by</span> <span
  m='260341'>each</span> <span m='260808'>department</span> <span
  m='261275'>each</span> <span m='261742'>day.</span> </p><p><span
  m='262210'>Frequently,</span> <span m='262631'>these</span> <span
  m='263053'>numbers</span> <span m='263475'>are</span> <span
  m='263896'>the</span> <span m='264318'>same.</span> </p><p><span
  m='264740'>For</span> <span m='265400'>example,</span> <span
  m='266060'>ophthalmology</span> <span m='266720'>requires</span> <span
  m='267380'>at</span> <span m='268040'>most</span> <span m='268700'>two</span>
  <span m='269360'>operating</span> <span m='270020'>rooms</span> <span
  m='271070'>every</span> <span m='272120'>day.</span> </p><p><span
  m='273170'>And</span> <span m='273402'>we</span> <span m='273635'>see</span>
  <span m='273867'>that</span> <span m='274100'>they</span> <span
  m='274332'>have</span> <span m='274565'>two</span> <span
  m='274797'>surgery</span> <span m='275030'>teams</span> <span
  m='275930'>available</span> <span m='276830'>every</span> <span
  m='277730'>day.</span> </p><p><span m='278630'>However,</span> <span
  m='279015'>let's</span> <span m='279401'>look</span> <span
  m='279786'>at</span> <span m='280172'>the</span> <span m='280557'>case</span>
  <span m='280943'>of</span> <span m='281328'>oral</span> <span
  m='281714'>surgery.</span> </p><p><span m='282100'>They</span> <span
  m='282517'>require</span> <span m='282935'>at</span> <span
  m='283353'>most</span> <span m='283771'>one</span> <span
  m='284188'>operating</span> <span m='284606'>room</span> <span
  m='285024'>every</span> <span m='285442'>day.</span> </p><p><span
  m='285860'>However,</span> <span m='286188'>the</span> <span
  m='286516'>oral</span> <span m='286845'>surgeon</span> <span
  m='287173'>is</span> <span m='287501'>only</span> <span
  m='287830'>present</span> <span m='288314'>on</span> <span
  m='288798'>Tuesdays</span> <span m='289282'>and</span> <span
  m='289766'>Thursdays.</span> </p><p><span m='294640'>Additionally,</span>
  <span m='295108'>each</span> <span m='295576'>department</span> <span
  m='296045'>has</span> <span m='296513'>weekly</span> <span
  m='296981'>requirements</span> <span m='297450'>on</span> <span
  m='297788'>the</span> <span m='298127'>number</span> <span
  m='298466'>of</span> <span m='298805'>operating</span> <span
  m='299143'>rooms</span> <span m='299482'>they</span> <span
  m='299821'>need.</span> </p><p><span m='300160'>For</span> <span
  m='300613'>example,</span> <span m='301066'>gynecology</span> <span
  m='301519'>needs</span> <span m='301972'>to</span> <span
  m='302425'>have</span> <span m='302878'>at</span> <span
  m='303331'>least</span> <span m='303784'>12</span> <span
  m='304237'>operating</span> <span m='304690'>rooms</span> <span
  m='304998'>in</span> <span m='305307'>a</span> <span m='305616'>given</span>
  <span m='305925'>week</span> <span m='306234'>and</span> <span
  m='306543'>at</span> <span m='306852'>most</span> <span m='307161'>18.</span>
  </p><p><span m='313540'>The</span> <span m='313836'>traditional</span> <span
  m='314133'>way</span> <span m='314430'>of</span> <span m='314726'>doing</span>
  <span m='315023'>this</span> <span m='315320'>was</span> <span
  m='315863'>not</span> <span m='316406'>by</span> <span m='316950'>using</span>
  <span m='317493'>integer</span> <span m='318036'>optimization.</span>
  </p><p><span m='318580'>Before</span> <span m='319000'>integer</span> <span
  m='319420'>optimization</span> <span m='319840'>was</span> <span
  m='320260'>implemented</span> <span m='320680'>at</span> <span
  m='321101'>Mount</span> <span m='321522'>Sinai</span> <span
  m='321943'>in</span> <span m='322364'>1999,</span> <span m='322785'>the</span>
  <span m='323206'>operating</span> <span m='323627'>room</span> <span
  m='324048'>manager</span> <span m='324470'>used</span> <span
  m='324794'>graph</span> <span m='325118'>paper</span> <span
  m='325442'>and</span> <span m='325767'>a</span> <span m='326091'>large</span>
  <span m='326415'>eraser</span> <span m='326740'>to</span> <span
  m='327138'>try</span> <span m='327537'>to</span> <span
  m='327936'>assign</span> <span m='328335'>the</span> <span
  m='328733'>operating</span> <span m='329132'>room</span> <span
  m='329531'>blocks.</span> </p><p><span m='329930'>Any</span> <span
  m='330236'>changes</span> <span m='330543'>that</span> <span
  m='330850'>were</span> <span m='331156'>necessary</span> <span
  m='331463'>were</span> <span m='331770'>incorporated</span> <span
  m='332426'>by</span> <span m='333082'>trial</span> <span m='333738'>and</span>
  <span m='334394'>error.</span> </p><p><span m='335050'>The</span> <span
  m='335352'>operating</span> <span m='335655'>room</span> <span
  m='335958'>manager</span> <span m='336261'>made</span> <span
  m='336564'>a</span> <span m='336867'>draft,</span> <span m='337170'>and</span>
  <span m='337546'>this</span> <span m='337922'>schedule</span> <span
  m='338299'>was</span> <span m='338675'>circulated</span> <span
  m='339051'>to</span> <span m='339428'>all</span> <span m='339804'>of</span>
  <span m='340180'>the</span> <span m='340557'>surgical</span> <span
  m='340933'>groups.</span> </p><p><span m='341310'>However,</span> <span
  m='341826'>incorporating</span> <span m='342343'>feedback</span> <span
  m='342859'>from</span> <span m='343376'>one</span> <span
  m='343892'>department</span> <span m='344409'>usually</span> <span
  m='344812'>meant</span> <span m='345215'>altering</span> <span
  m='345618'>another</span> <span m='346021'>group's</span> <span
  m='346424'>schedule</span> <span m='346827'>leading</span> <span
  m='347230'>to</span> <span m='347495'>many</span> <span
  m='347760'>iterations</span> <span m='348025'>of</span> <span
  m='348290'>this</span> <span m='348555'>process.</span> </p><p><span
  m='353600'>In</span> <span m='354022'>the</span> <span m='354444'>next</span>
  <span m='354866'>video,</span> <span m='355288'>we'll</span> <span
  m='355711'>design</span> <span m='356133'>an</span> <span
  m='356555'>integer</span> <span m='356977'>optimization</span> <span
  m='357400'>formulation</span> <span m='358037'>for</span> <span
  m='358675'>this</span> <span m='359312'>problem.</span> </p>
embedded_media:
  - uid: 5f131ef09d15319372adab95bb6e6869
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: SSzcvj2biAQ
  - uid: 1663175ed7ae8a329800a606979cf1d3
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: SSzcvj2biAQ
  - uid: 661d4f9e08628f7215f57cdcef4ad000
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/SSzcvj2biAQ/default.jpg'
  - uid: 48b2a1523a9d7e39267fa9aa1c0a68d1
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_9.4.02_300k.mp4
  - uid: 34fc434fa0d946815455762e297e9893
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: SSzcvj2biAQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/operating-room-scheduling-making-hospitals-run-smoothly-recitation/video-1-the-problem/video-1-the-problem-0/SSzcvj2biAQ.srt
  - uid: 9eb26ea62fea842bdf2b0e9108434f3c
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: SSzcvj2biAQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/integer-optimization/operating-room-scheduling-making-hospitals-run-smoothly-recitation/video-1-the-problem/video-1-the-problem-0/SSzcvj2biAQ.pdf
  - uid: c98fc86fd0c26cfe511f1919a49224ba
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 981bee4e2f0587724a43eb4a95321a02
    parent_uid: cb1ec5c5dfc10fdb760d4d93a5d37daa
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
