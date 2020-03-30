---
title: 'Video 5: Solving the Problem'
uid: e95d8df22c804b1231396b13b4ac2dcf
parent_uid: ec76b4ff67804c693ea4a3a2695b4d2d
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-5-solving-the-problem/video-5-solving-the-problem-0
short_url: video-5-solving-the-problem-0
inline_embed_id: 72797730video5solvingtheproblem19351808
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4880'>Here,</span> <span m='5188'>we</span> <span
  m='5497'>have</span> <span m='5805'>a</span> <span m='6114'>spreadsheet</span>
  <span m='6422'>in</span> <span m='6731'>LibreOffice</span> <span
  m='7040'>that</span> <span m='7396'>contains</span> <span m='7753'>all</span>
  <span m='8110'>of</span> <span m='8466'>our</span> <span m='8823'>data.</span>
  </p><p><span m='9180'>Up</span> <span m='9391'>here,</span> <span
  m='9602'>we</span> <span m='9813'>have</span> <span m='10025'>the</span> <span
  m='10236'>basic</span> <span m='10447'>data,</span> <span
  m='10658'>which</span> <span m='10870'>are</span> <span m='11566'>the</span>
  <span m='12262'>price-per-click</span> <span m='12958'>and</span> <span
  m='13654'>click-through-rate.</span> </p><p><span m='14350'>Below,</span>
  <span m='14741'>we</span> <span m='15132'>have</span> <span
  m='15523'>the</span> <span m='15915'>average</span> <span
  m='16306'>price</span> <span m='16697'>per</span> <span
  m='17088'>display,</span> <span m='17480'>which</span> <span
  m='17703'>we</span> <span m='17926'>will</span> <span
  m='18150'>actually</span> <span m='18373'>be</span> <span
  m='18596'>using.</span> </p><p><span m='18820'>Below</span> <span
  m='19097'>it,</span> <span m='19375'>we</span> <span m='19652'>have</span>
  <span m='19930'>the</span> <span m='20207'>budgets,</span> <span
  m='20485'>and</span> <span m='20762'>below</span> <span m='21040'>that</span>
  <span m='21406'>we</span> <span m='21773'>have</span> <span
  m='22140'>the</span> <span m='22506'>query</span> <span
  m='22873'>estimates.</span> </p><p><span m='23240'>After</span> <span
  m='23573'>the</span> <span m='23907'>data,</span> <span m='24241'>we</span>
  <span m='24575'>then</span> <span m='24908'>have</span> <span
  m='25242'>the</span> <span m='25576'>variables.</span> </p><p><span
  m='25910'>So</span> <span m='26316'>these</span> <span m='26722'>are</span>
  <span m='27129'>the</span> <span m='27535'>x_A1s</span> <span
  m='27941'>through</span> <span m='28348'>x_A3s,</span> <span
  m='28754'>the</span> <span m='29160'>x_T1s</span> <span
  m='29567'>through</span> <span m='29973'>x_T3s</span> <span
  m='30380'>and</span> <span m='30910'>the</span> <span m='31440'>x_V1s</span>
  <span m='31970'>through</span> <span m='32500'>x_V3s</span> <span
  m='33030'>that</span> <span m='33560'>we</span> <span m='34090'>saw</span>
  <span m='34620'>in</span> <span m='35150'>the</span> <span
  m='35680'>previous</span> <span m='36210'>video.</span> </p><p><span
  m='36740'>And</span> <span m='37224'>below</span> <span
  m='37708'>those,</span> <span m='38193'>we</span> <span m='38677'>have</span>
  <span m='39162'>the</span> <span m='39646'>objective,</span> <span
  m='40131'>the</span> <span m='40615'>constraints,</span> <span
  m='41100'>so</span> <span m='41362'>that</span> <span m='41625'>the</span>
  <span m='41888'>budgets</span> <span m='42151'>are</span> <span
  m='42414'>not</span> <span m='42677'>exceeded</span> <span
  m='42940'>and</span> <span m='43363'>that</span> <span m='43787'>the</span>
  <span m='44211'>query</span> <span m='44635'>estimates</span> <span
  m='45058'>are</span> <span m='45482'>not</span> <span
  m='45906'>exceeded.</span> </p><p><span m='46330'>So</span> <span
  m='46613'>we'll</span> <span m='46897'>have</span> <span m='47180'>to</span>
  <span m='47464'>fill</span> <span m='47748'>in</span> <span
  m='48031'>all</span> <span m='48315'>of</span> <span m='48599'>these</span>
  <span m='48882'>expressions,</span> <span m='49166'>which</span> <span
  m='49450'>reflect,</span> <span m='49849'>for</span> <span
  m='50248'>example,</span> <span m='50647'>how</span> <span
  m='51046'>many</span> <span m='51445'>times</span> <span
  m='51844'>query</span> <span m='52243'>one</span> <span m='52642'>is</span>
  <span m='53041'>used</span> <span m='53440'>in</span> <span
  m='53831'>our</span> <span m='54222'>advertising</span> <span
  m='54613'>strategy,</span> <span m='55004'>how</span> <span
  m='55395'>much</span> <span m='55786'>of,</span> <span m='56177'>for</span>
  <span m='56568'>instance,</span> <span m='56960'>T-Mobile's</span> <span
  m='57336'>budget</span> <span m='57712'>we</span> <span m='58088'>use</span>
  <span m='58465'>in</span> <span m='58841'>your</span> <span
  m='59217'>advertising</span> <span m='59593'>strategy,</span> <span
  m='59970'>as</span> <span m='60368'>well</span> <span m='60766'>as</span>
  <span m='61164'>the</span> <span m='61562'>objective,</span> <span
  m='61960'>which</span> <span m='62358'>is</span> <span m='62756'>the</span>
  <span m='63154'>total</span> <span m='63552'>average</span> <span
  m='63950'>revenue</span> <span m='64349'>from</span> <span
  m='64876'>our</span> <span m='65404'>advertising</span> <span
  m='65932'>strategy.</span> </p><p><span m='66460'>Let's</span> <span
  m='66953'>start</span> <span m='67446'>by</span> <span
  m='67940'>defining</span> <span m='68433'>the</span> <span
  m='68926'>objective</span> <span m='69420'>of</span> <span
  m='69913'>our</span> <span m='70406'>problem.</span> </p><p><span
  m='70900'>To</span> <span m='71140'>form</span> <span m='71381'>the</span>
  <span m='71622'>objective,</span> <span m='71863'>we</span> <span
  m='72103'>go</span> <span m='72344'>to</span> <span m='72585'>the</span> <span
  m='72826'>cell</span> <span m='73066'>next</span> <span m='73307'>to</span>
  <span m='73548'>revenue,</span> <span m='73789'>and</span> <span
  m='74102'>we</span> <span m='74416'>start</span> <span m='74729'>by</span>
  <span m='75043'>writing,</span> <span m='75356'>=SUMPRODUCT.</span>
  </p><p><span m='79500'>The</span> <span m='79871'>SUMPRODUCT</span> <span
  m='80242'>function</span> <span m='80613'>takes</span> <span
  m='80985'>two</span> <span m='81356'>collections</span> <span
  m='81727'>of</span> <span m='82098'>cells,</span> <span
  m='82470'>multiplies</span> <span m='82903'>corresponding</span> <span
  m='83337'>cells</span> <span m='83771'>together,</span> <span
  m='84205'>and</span> <span m='84638'>adds</span> <span m='85072'>them</span>
  <span m='85506'>up.</span> </p><p><span m='85940'>Here</span> <span
  m='86216'>we</span> <span m='86492'>want</span> <span m='86769'>to</span>
  <span m='87045'>use</span> <span m='87321'>SUMPRODUCT</span> <span
  m='87598'>to</span> <span m='87874'>multiply</span> <span m='88150'>the</span>
  <span m='88427'>average</span> <span m='88703'>prices</span> <span
  m='88980'>per</span> <span m='89261'>display</span> <span
  m='89542'>with</span> <span m='89824'>the</span> <span m='90105'>number</span>
  <span m='90387'>of</span> <span m='90668'>times</span> <span
  m='90950'>we</span> <span m='91367'>display</span> <span m='91784'>each</span>
  <span m='92201'>ad</span> <span m='92618'>with</span> <span
  m='93035'>each</span> <span m='93452'>query.</span> </p><p><span
  m='93870'>Our</span> <span m='94339'>variables</span> <span
  m='94808'>are</span> <span m='95277'>all</span> <span m='95746'>the</span>
  <span m='96215'>cells</span> <span m='96684'>between</span> <span
  m='97153'>B35</span> <span m='97622'>and</span> <span m='98091'>D37.</span>
  </p><p><span m='98560'>And</span> <span m='98871'>the</span> <span
  m='99183'>average</span> <span m='99495'>price</span> <span
  m='99806'>per</span> <span m='100118'>display</span> <span
  m='100430'>is</span> <span m='100830'>contained</span> <span
  m='101230'>in</span> <span m='101630'>all</span> <span m='102030'>the</span>
  <span m='102430'>cells</span> <span m='102830'>between</span> <span
  m='103230'>B17</span> <span m='103630'>and</span> <span m='104030'>D19.</span>
  </p><p><span m='104430'>So</span> <span m='104714'>we</span> <span
  m='104998'>need</span> <span m='105283'>to</span> <span
  m='105567'>input</span> <span m='105852'>these</span> <span
  m='106136'>into</span> <span m='106421'>the</span> <span
  m='106705'>function.</span> </p><p><span m='106990'>So</span> <span
  m='108018'>we</span> <span m='109046'>write</span> <span
  m='110074'>B35:D37</span> <span m='111102'>comma,</span> <span
  m='112130'>so</span> <span m='113158'>the</span> <span m='114186'>comma</span>
  <span m='115214'>indicates</span> <span m='116242'>that</span> <span
  m='117270'>we're</span> <span m='117615'>moving</span> <span
  m='117961'>on</span> <span m='118306'>to</span> <span m='118652'>a</span>
  <span m='118997'>new</span> <span m='119343'>collection</span> <span
  m='119688'>of</span> <span m='120034'>cells.</span> </p><p><span
  m='120380'>Then</span> <span m='122255'>we</span> <span
  m='124130'>include</span> <span m='126005'>B17:D19.</span> </p><p><span
  m='127880'>We</span> <span m='128243'>press</span> <span
  m='128606'>Enter,</span> <span m='128969'>and</span> <span
  m='129332'>so</span> <span m='129695'>now</span> <span m='130058'>we</span>
  <span m='130421'>have</span> <span m='130784'>our</span> <span
  m='131147'>expression,</span> <span m='131510'>which</span> <span
  m='131887'>reflects</span> <span m='132265'>the</span> <span
  m='132642'>objective</span> <span m='133020'>value</span> <span
  m='133397'>for</span> <span m='133775'>our</span> <span
  m='134152'>advertising</span> <span m='134530'>strategy.</span> </p><p><span
  m='136160'>Now</span> <span m='136448'>to</span> <span
  m='136737'>compute</span> <span m='137026'>how</span> <span
  m='137315'>much</span> <span m='137604'>of</span> <span m='137893'>each</span>
  <span m='138182'>advertiser's</span> <span m='138471'>budget</span> <span
  m='138760'>we're</span> <span m='139031'>using,</span> <span
  m='139303'>we're</span> <span m='139575'>going</span> <span
  m='139847'>to</span> <span m='140119'>use</span> <span m='140390'>the</span>
  <span m='140662'>average</span> <span m='140934'>price</span> <span
  m='141206'>per</span> <span m='141478'>display</span> <span
  m='141750'>and</span> <span m='142183'>the</span> <span
  m='142617'>decision</span> <span m='143051'>variables</span> <span
  m='143485'>of</span> <span m='143918'>each</span> <span
  m='144352'>individual</span> <span m='144786'>advertiser.</span> </p><p><span
  m='145220'>So</span> <span m='145668'>to</span> <span m='146117'>get,</span>
  <span m='146566'>for</span> <span m='147015'>example,</span> <span
  m='147463'>AT&amp;T's</span> <span m='147912'>budget</span> <span
  m='148361'>usage,</span> <span m='148810'>we</span> <span
  m='149040'>would</span> <span m='149270'>use</span> <span
  m='149500'>SUMPRODUCT</span> <span m='149730'>again</span> <span
  m='149960'>in</span> <span m='150190'>the</span> <span m='150420'>same</span>
  <span m='150650'>way</span> <span m='150880'>that</span> <span
  m='151120'>we</span> <span m='151360'>used</span> <span m='151600'>it</span>
  <span m='151840'>for</span> <span m='152080'>the</span> <span
  m='152320'>objective,</span> <span m='152560'>but</span> <span
  m='152802'>this</span> <span m='153045'>time</span> <span m='153287'>we</span>
  <span m='153530'>would</span> <span m='153772'>use</span> <span
  m='154015'>it</span> <span m='154257'>just</span> <span m='154500'>for</span>
  <span m='154932'>AT&amp;T's</span> <span m='155365'>decision</span> <span
  m='155797'>variables</span> <span m='156230'>and</span> <span
  m='156662'>AT&amp;T's</span> <span m='157095'>average</span> <span
  m='157527'>prices</span> <span m='157960'>per</span> <span
  m='158740'>display.</span> </p><p><span m='159520'>So</span> <span
  m='159745'>we</span> <span m='159970'>use</span> <span
  m='160195'>SUMPRODUCT</span> <span m='160420'>again,</span> <span
  m='160645'>as</span> <span m='160870'>I</span> <span
  m='161095'>mentioned.</span> </p><p><span m='161320'>So</span> <span
  m='161857'>we</span> <span m='162394'>write</span> <span
  m='162931'>=SUMPRODUCT,</span> <span m='163469'>but</span> <span
  m='164006'>this</span> <span m='164543'>time</span> <span m='165080'>we</span>
  <span m='165618'>select</span> <span m='166155'>the</span> <span
  m='166692'>cells</span> <span m='167230'>between</span> <span
  m='167897'>B35</span> <span m='168565'>and</span> <span m='169232'>D35.</span>
  </p><p><span m='169900'>So</span> <span m='170807'>we</span> <span
  m='171715'>write</span> <span m='172622'>B35:D35.</span> </p><p><span
  m='173530'>These</span> <span m='173853'>are</span> <span
  m='174176'>the</span> <span m='174500'>cells</span> <span
  m='174823'>that</span> <span m='175146'>correspond</span> <span
  m='175470'>to</span> <span m='175793'>AT&amp;T's</span> <span
  m='176116'>decision</span> <span m='176440'>variables.</span> </p><p><span
  m='177870'>For</span> <span m='178163'>the</span> <span
  m='178456'>second</span> <span m='178750'>collection</span> <span
  m='179043'>of</span> <span m='179336'>cells,</span> <span m='179630'>we</span>
  <span m='180408'>select</span> <span m='181187'>the</span> <span
  m='181966'>cells</span> <span m='182745'>between</span> <span
  m='183523'>B17</span> <span m='184302'>and</span> <span m='185081'>D17.</span>
  </p><p><span m='185860'>These</span> <span m='186103'>are</span> <span
  m='186346'>the</span> <span m='186590'>cells</span> <span
  m='186833'>that</span> <span m='187076'>correspond</span> <span
  m='187320'>to</span> <span m='187901'>AT&amp;T's</span> <span
  m='188483'>average</span> <span m='189065'>prices</span> <span
  m='189646'>per</span> <span m='190228'>display.</span> </p><p><span
  m='190810'>We</span> <span m='191027'>can</span> <span m='191244'>do</span>
  <span m='191461'>the</span> <span m='191678'>same</span> <span
  m='191895'>thing</span> <span m='192112'>for</span> <span
  m='192329'>T-Mobile</span> <span m='192546'>and</span> <span
  m='192763'>Verizon.</span> </p><p><span m='192980'>In</span> <span
  m='193294'>this</span> <span m='193609'>case,</span> <span
  m='193923'>we</span> <span m='194238'>don't</span> <span
  m='194552'>need</span> <span m='194867'>to</span> <span
  m='195181'>enter</span> <span m='195496'>the</span> <span
  m='195810'>expressions</span> <span m='196125'>again.</span> </p><p><span
  m='196440'>We</span> <span m='196878'>can</span> <span m='197317'>just</span>
  <span m='197755'>simply</span> <span m='198194'>drag</span> <span
  m='198632'>these</span> <span m='199071'>expressions,</span> <span
  m='199510'>and</span> <span m='200290'>LibreOffice</span> <span
  m='201070'>will</span> <span m='201850'>conveniently</span> <span
  m='202630'>fill</span> <span m='203173'>the</span> <span
  m='203716'>expressions</span> <span m='204260'>in</span> <span
  m='204803'>for</span> <span m='205346'>us.</span> </p><p><span
  m='205890'>And</span> <span m='206107'>now</span> <span m='206324'>we</span>
  <span m='206541'>need</span> <span m='206758'>to</span> <span
  m='206975'>do</span> <span m='207192'>a</span> <span m='207410'>similar</span>
  <span m='207627'>thing</span> <span m='207844'>for</span> <span
  m='208061'>the</span> <span m='208278'>number</span> <span
  m='208495'>of</span> <span m='208712'>times</span> <span
  m='208930'>that</span> <span m='209209'>we</span> <span m='209489'>use</span>
  <span m='209769'>each</span> <span m='210049'>query.</span> </p><p><span
  m='210329'>So,</span> <span m='210530'>for</span> <span
  m='210731'>example,</span> <span m='210932'>to</span> <span
  m='211133'>get</span> <span m='211334'>the</span> <span
  m='211535'>number</span> <span m='211736'>of</span> <span
  m='211937'>times</span> <span m='212138'>query</span> <span
  m='212339'>one</span> <span m='212540'>is</span> <span m='212747'>used,</span>
  <span m='212955'>we</span> <span m='213162'>need</span> <span
  m='213370'>to</span> <span m='213577'>add</span> <span m='213785'>the</span>
  <span m='213992'>cells</span> <span m='214200'>corresponding</span> <span
  m='214770'>to</span> <span m='215340'>query</span> <span
  m='215910'>one.</span> </p><p><span m='216480'>In</span> <span
  m='216756'>the</span> <span m='217032'>spreadsheet,</span> <span
  m='217308'>these</span> <span m='217585'>are</span> <span
  m='217861'>the</span> <span m='218137'>cells</span> <span
  m='218413'>corresponding</span> <span m='218690'>to</span> <span
  m='219315'>B35</span> <span m='219940'>and</span> <span m='220565'>B37.</span>
  </p><p><span m='221190'>And</span> <span m='221425'>in</span> <span
  m='221660'>this</span> <span m='221895'>case,</span> <span
  m='222130'>we</span> <span m='222365'>simply</span> <span
  m='222600'>need</span> <span m='222835'>to</span> <span m='223070'>add</span>
  <span m='223305'>the</span> <span m='223540'>decision</span> <span
  m='223775'>variable</span> <span m='224010'>cells</span> <span
  m='224214'>--</span> <span m='224419'>we</span> <span m='224623'>don't</span>
  <span m='224828'>need</span> <span m='225032'>to</span> <span
  m='225237'>multiply</span> <span m='225441'>them</span> <span
  m='225646'>with</span> <span m='225850'>any</span> <span
  m='226055'>other</span> <span m='226260'>cells.</span> </p><p><span
  m='227050'>So</span> <span m='227251'>we</span> <span m='227452'>just</span>
  <span m='227653'>need</span> <span m='227854'>to</span> <span
  m='228055'>use</span> <span m='228256'>the</span> <span m='228457'>sum</span>
  <span m='228658'>function.</span> </p><p><span m='228860'>So</span> <span
  m='229993'>we</span> <span m='231127'>write</span> <span
  m='232260'>=SUM,</span> <span m='233394'>and</span> <span
  m='234528'>again,</span> <span m='235661'>we're</span> <span
  m='236795'>using</span> <span m='237929'>the</span> <span
  m='239062'>cell's</span> <span m='240196'>B35:B37.</span> </p><p><span
  m='241330'>For</span> <span m='241618'>query</span> <span
  m='241907'>two,</span> <span m='242196'>we</span> <span m='242485'>have</span>
  <span m='242774'>to</span> <span m='243063'>use</span> <span
  m='243352'>SUM</span> <span m='243641'>again.</span> </p><p><span
  m='243930'>And</span> <span m='244142'>we</span> <span m='244355'>need</span>
  <span m='244568'>to</span> <span m='244780'>SUM</span> <span
  m='244993'>the</span> <span m='245206'>cells</span> <span
  m='245419'>corresponding</span> <span m='245631'>to</span> <span
  m='245844'>query</span> <span m='246057'>two,</span> <span
  m='246270'>so</span> <span m='248420'>we</span> <span m='250570'>write</span>
  <span m='252720'>=SUM(C35:C37).</span> </p><p><span m='254870'>And</span>
  <span m='255085'>for</span> <span m='255301'>query</span> <span
  m='255517'>three,</span> <span m='255733'>we</span> <span
  m='255949'>need</span> <span m='256165'>to</span> <span m='256381'>use</span>
  <span m='256597'>SUM</span> <span m='256813'>again,</span> <span
  m='257029'>but</span> <span m='257369'>this</span> <span
  m='257709'>time</span> <span m='258049'>we</span> <span m='258389'>need</span>
  <span m='258729'>to</span> <span m='259069'>use</span> <span
  m='259409'>cells</span> <span m='259749'>D35</span> <span
  m='260089'>through</span> <span m='260429'>D37.</span> </p><p><span
  m='260769'>So</span> <span m='262194'>we</span> <span m='263619'>write</span>
  <span m='265044'>D35:D37.</span> </p><p><span m='266470'>So</span> <span
  m='266718'>we've</span> <span m='266967'>now</span> <span
  m='267216'>defined</span> <span m='267465'>all</span> <span
  m='267713'>of</span> <span m='267962'>the</span> <span
  m='268211'>expressions</span> <span m='268460'>that</span> <span
  m='268790'>we'll</span> <span m='269120'>need</span> <span
  m='269450'>for</span> <span m='269780'>our</span> <span
  m='270110'>model.</span> </p><p><span m='270440'>Now</span> <span
  m='270705'>we</span> <span m='270970'>need</span> <span m='271235'>to</span>
  <span m='271500'>input</span> <span m='271765'>the</span> <span
  m='272030'>decision</span> <span m='272295'>variables,</span> <span
  m='272560'>the</span> <span m='272986'>objective,</span> <span
  m='273412'>and</span> <span m='273838'>the</span> <span
  m='274264'>constraints</span> <span m='274690'>into</span> <span
  m='275225'>the</span> <span m='275760'>LibreOffice</span> <span
  m='276295'>Solver.</span> </p><p><span m='276830'>So</span> <span
  m='277066'>we</span> <span m='277302'>need</span> <span m='277538'>to</span>
  <span m='277774'>first</span> <span m='278010'>open</span> <span
  m='278246'>up</span> <span m='278482'>the</span> <span
  m='278718'>LibreOffice</span> <span m='278954'>Solver.</span> </p><p><span
  m='279190'>So</span> <span m='279656'>we</span> <span m='280122'>go</span>
  <span m='280588'>to</span> <span m='281054'>Tools.</span> </p><p><span
  m='281520'>We</span> <span m='281817'>open</span> <span m='282115'>up</span>
  <span m='282413'>Tools,</span> <span m='282711'>and</span> <span
  m='283008'>we</span> <span m='283306'>click</span> <span m='283604'>on</span>
  <span m='283902'>Solver.</span> </p><p><span m='288490'>So,</span> <span
  m='288776'>to</span> <span m='289062'>do</span> <span m='289348'>this</span>
  <span m='289634'>now,</span> <span m='289920'>we</span> <span
  m='290206'>need</span> <span m='290492'>to</span> <span
  m='290778'>specify,</span> <span m='291064'>again</span> <span
  m='291350'>as</span> <span m='291610'>I</span> <span
  m='291870'>mentioned,</span> <span m='292130'>all</span> <span
  m='292390'>the</span> <span m='292650'>pieces</span> <span
  m='292910'>of</span> <span m='293170'>the</span> <span
  m='293430'>problem.</span> </p><p><span m='293690'>So</span> <span
  m='293944'>for</span> <span m='294199'>"Target</span> <span
  m='294453'>cell"</span> <span m='294708'>--</span> <span m='294962'>so</span>
  <span m='295217'>the</span> <span m='295471'>target</span> <span
  m='295726'>cell</span> <span m='295980'>here</span> <span m='296235'>is</span>
  <span m='296490'>the</span> <span m='296766'>objective</span> <span
  m='297043'>cell.</span> </p><p><span m='297320'>So</span> <span
  m='297687'>we</span> <span m='298054'>need</span> <span m='298421'>to</span>
  <span m='298788'>specify</span> <span m='299155'>our</span> <span
  m='299522'>objective.</span> </p><p><span m='299890'>So</span> <span
  m='300508'>this</span> <span m='301126'>cell</span> <span
  m='301745'>was</span> <span m='302363'>just</span> <span
  m='302981'>B40.</span> </p><p><span m='303600'>And</span> <span
  m='303984'>we</span> <span m='304368'>want</span> <span m='304752'>to</span>
  <span m='305136'>maximize</span> <span m='305520'>this</span> <span
  m='305904'>as</span> <span m='306288'>we're</span> <span
  m='306672'>maximizing</span> <span m='307056'>revenue.</span> </p><p><span
  m='307440'>The</span> <span m='307810'>"changing</span> <span
  m='308180'>cells"</span> <span m='308550'>here</span> <span
  m='308920'>are</span> <span m='309290'>the</span> <span
  m='309660'>decision</span> <span m='310030'>variables.</span> </p><p><span
  m='310400'>So</span> <span m='310709'>this</span> <span m='311018'>is</span>
  <span m='311327'>just</span> <span m='311636'>a</span> <span
  m='311945'>collection</span> <span m='312254'>of</span> <span
  m='312563'>cells,</span> <span m='312872'>B35</span> <span
  m='313181'>through</span> <span m='313490'>D37.</span> </p><p><span
  m='313800'>So</span> <span m='315505'>we</span> <span m='317210'>write,</span>
  <span m='318915'>B35:D37.</span> </p><p><span m='320620'>Now,</span> <span
  m='321170'>underneath,</span> <span m='321720'>these</span> <span
  m='322270'>rows</span> <span m='322820'>corresponding</span> <span
  m='323370'>to</span> <span m='323772'>the</span> <span
  m='324174'>"Limiting</span> <span m='324576'>conditions",</span> <span
  m='324978'>these</span> <span m='325380'>are</span> <span
  m='325714'>just</span> <span m='326048'>the</span> <span
  m='326382'>constraints</span> <span m='326717'>of</span> <span
  m='327051'>the</span> <span m='327385'>problem.</span> </p><p><span
  m='327720'>In</span> <span m='328049'>the</span> <span m='328378'>first</span>
  <span m='328707'>row</span> <span m='329036'>here,</span> <span
  m='329365'>we'll</span> <span m='329694'>handle</span> <span
  m='330023'>the</span> <span m='330352'>budget</span> <span
  m='330681'>constraints.</span> </p><p><span m='331010'>So</span> <span
  m='331406'>under</span> <span m='331803'>"Cell</span> <span
  m='332200'>reference"</span> <span m='332596'>we'll</span> <span
  m='332993'>input</span> <span m='333390'>the</span> <span
  m='333786'>budget</span> <span m='334183'>expression,</span> <span
  m='334580'>and</span> <span m='335060'>these</span> <span
  m='335540'>are</span> <span m='336020'>contained</span> <span
  m='336500'>in</span> <span m='336980'>cells</span> <span m='337460'>B45</span>
  <span m='337940'>through</span> <span m='338420'>B47.</span> </p><p><span
  m='338900'>So</span> <span m='339285'>we</span> <span m='339671'>can</span>
  <span m='340057'>enter</span> <span m='340442'>these</span> <span
  m='340828'>or</span> <span m='341214'>we</span> <span m='341600'>can</span>
  <span m='341985'>just</span> <span m='342371'>click</span> <span
  m='342757'>on</span> <span m='343142'>the</span> <span m='343528'>input</span>
  <span m='343914'>button</span> <span m='344300'>and</span> <span
  m='344658'>just</span> <span m='345017'>select</span> <span
  m='345375'>them</span> <span m='345734'>in</span> <span m='346092'>this</span>
  <span m='346451'>way.</span> </p><p><span m='346810'>And</span> <span
  m='347030'>then</span> <span m='347250'>we</span> <span
  m='347470'>click</span> <span m='347690'>on</span> <span m='347910'>the</span>
  <span m='348130'>shrink</span> <span m='348350'>button</span> <span
  m='348570'>here.</span> </p><p><span m='351950'>Under</span> <span
  m='352196'>"Operator",</span> <span m='352442'>we</span> <span
  m='352688'>want</span> <span m='352935'>to</span> <span
  m='353181'>select</span> <span m='353427'>less</span> <span
  m='353673'>than</span> <span m='353920'>or</span> <span
  m='354115'>equal</span> <span m='354310'>to</span> <span
  m='354506'>because</span> <span m='354701'>we</span> <span
  m='354896'>want</span> <span m='355092'>to</span> <span
  m='355287'>ensure</span> <span m='355483'>that</span> <span
  m='355678'>the</span> <span m='355873'>amount</span> <span
  m='356069'>that</span> <span m='356264'>we</span> <span m='356460'>use</span>
  <span m='356678'>of</span> <span m='356896'>each</span> <span
  m='357114'>budget</span> <span m='357332'>is</span> <span
  m='357550'>less</span> <span m='357768'>than</span> <span
  m='357986'>the</span> <span m='358204'>total</span> <span
  m='358422'>budget</span> <span m='358640'>of</span> <span
  m='359416'>the</span> <span m='360193'>advertiser.</span> </p><p><span
  m='360970'>And</span> <span m='361355'>here</span> <span
  m='361740'>under</span> <span m='362125'>"Value",</span> <span
  m='362510'>we're</span> <span m='362895'>going</span> <span
  m='363280'>to</span> <span m='363654'>select</span> <span
  m='364028'>the</span> <span m='364402'>actual</span> <span
  m='364777'>budget</span> <span m='365151'>amounts,</span> <span
  m='365525'>which</span> <span m='365900'>are</span> <span m='366115'>on</span>
  <span m='366330'>the</span> <span m='366545'>right</span> <span
  m='366760'>hand</span> <span m='366975'>side</span> <span m='367190'>of</span>
  <span m='367405'>these</span> <span m='367620'>less</span> <span
  m='367835'>than</span> <span m='368050'>or</span> <span
  m='368385'>equal</span> <span m='368720'>to</span> <span
  m='369055'>signs.</span> </p><p><span m='369390'>So</span> <span
  m='369930'>we</span> <span m='370470'>select</span> <span
  m='371010'>them,</span> <span m='371550'>and</span> <span m='372090'>we</span>
  <span m='372630'>put</span> <span m='373170'>them</span> <span
  m='373710'>in.</span> </p><p><span m='374250'>So</span> <span
  m='374695'>that</span> <span m='375140'>handles</span> <span
  m='375585'>the</span> <span m='376030'>budget</span> <span
  m='376475'>constraints.</span> </p><p><span m='376920'>And</span> <span
  m='377164'>in</span> <span m='377408'>the</span> <span
  m='377652'>second</span> <span m='377897'>row</span> <span
  m='378141'>here,</span> <span m='378385'>we're</span> <span
  m='378630'>going</span> <span m='379000'>to</span> <span
  m='379370'>handle</span> <span m='379740'>the</span> <span
  m='380110'>query</span> <span m='380480'>estimate</span> <span
  m='380850'>constraints.</span> </p><p><span m='381220'>So</span> <span
  m='381713'>here</span> <span m='382206'>again,</span> <span
  m='382700'>under</span> <span m='383193'>cell</span> <span
  m='383686'>reference,</span> <span m='384180'>we're</span> <span
  m='384520'>going</span> <span m='384860'>to</span> <span
  m='385200'>specify</span> <span m='385540'>the</span> <span
  m='385880'>expressions</span> <span m='386220'>that</span> <span
  m='386560'>correspond</span> <span m='386900'>to</span> <span
  m='387210'>how</span> <span m='387521'>much</span> <span m='387832'>we</span>
  <span m='388143'>use</span> <span m='388454'>each</span> <span
  m='388765'>query</span> <span m='389076'>in</span> <span m='389387'>our</span>
  <span m='389698'>advertising</span> <span m='390009'>strategy.</span>
  </p><p><span m='390320'>And</span> <span m='390716'>so</span> <span
  m='391112'>these</span> <span m='391508'>are</span> <span
  m='391904'>just</span> <span m='392300'>the</span> <span
  m='392696'>cells,</span> <span m='393092'>B50</span> <span
  m='393488'>through</span> <span m='393884'>B52,</span> <span
  m='394280'>which</span> <span m='394725'>we</span> <span
  m='395170'>select,</span> <span m='395615'>and</span> <span
  m='396060'>we</span> <span m='396505'>input</span> <span
  m='396950'>them</span> <span m='397395'>into</span> <span
  m='397840'>the</span> <span m='398285'>solver.</span> </p><p><span
  m='398730'>Under</span> <span m='398941'>operator,</span> <span
  m='399152'>we</span> <span m='399363'>want</span> <span m='399574'>to</span>
  <span m='399785'>keep</span> <span m='399996'>it</span> <span
  m='400207'>as</span> <span m='400418'>less</span> <span m='400629'>than</span>
  <span m='400840'>or</span> <span m='401056'>equal</span> <span
  m='401272'>to,</span> <span m='401488'>because</span> <span
  m='401704'>we</span> <span m='401920'>want</span> <span m='402136'>to</span>
  <span m='402353'>ensure</span> <span m='402569'>that</span> <span
  m='402785'>the</span> <span m='403001'>amount</span> <span
  m='403217'>that</span> <span m='403433'>we</span> <span m='403650'>use</span>
  <span m='403925'>each</span> <span m='404200'>query</span> <span
  m='404475'>is</span> <span m='404750'>less</span> <span m='405025'>than</span>
  <span m='405300'>or</span> <span m='405575'>equal</span> <span
  m='405850'>to</span> <span m='406125'>the</span> <span
  m='406400'>expected</span> <span m='406675'>number</span> <span
  m='406950'>of</span> <span m='407471'>times</span> <span
  m='407992'>that</span> <span m='408513'>we</span> <span
  m='409035'>estimate</span> <span m='409556'>for</span> <span
  m='410077'>that</span> <span m='410598'>query.</span> </p><p><span
  m='411120'>And</span> <span m='411450'>under</span> <span
  m='411780'>value,</span> <span m='412110'>we</span> <span
  m='412440'>want</span> <span m='412770'>to</span> <span
  m='413100'>input</span> <span m='413430'>the</span> <span
  m='413760'>query</span> <span m='414090'>estimates,</span> <span
  m='414420'>which</span> <span m='414808'>are</span> <span
  m='415197'>just</span> <span m='415586'>the</span> <span
  m='415975'>cells,</span> <span m='416363'>D50</span> <span
  m='416752'>through</span> <span m='417141'>D52.</span> </p><p><span
  m='417530'>So,</span> <span m='417903'>we</span> <span m='418276'>can</span>
  <span m='418650'>just</span> <span m='419023'>select</span> <span
  m='419396'>them</span> <span m='419770'>in</span> <span m='420143'>this</span>
  <span m='420516'>way,</span> <span m='420890'>and</span> <span
  m='421263'>input</span> <span m='421636'>them.</span> </p><p><span
  m='422010'>So,</span> <span m='422256'>at</span> <span m='422502'>this</span>
  <span m='422748'>point,</span> <span m='422994'>it</span> <span
  m='423240'>might</span> <span m='423486'>be</span> <span
  m='423732'>tempting</span> <span m='423978'>to</span> <span
  m='424224'>think</span> <span m='424470'>that</span> <span
  m='424701'>we</span> <span m='424932'>are</span> <span m='425164'>done,</span>
  <span m='425395'>but</span> <span m='425627'>we</span> <span
  m='425858'>have</span> <span m='426090'>two</span> <span
  m='426321'>more</span> <span m='426552'>things</span> <span
  m='426784'>we</span> <span m='427015'>need</span> <span m='427247'>to</span>
  <span m='427478'>do.</span> </p><p><span m='427710'>First,</span> <span
  m='428000'>we</span> <span m='428290'>need</span> <span m='428580'>to</span>
  <span m='428870'>tell</span> <span m='429160'>the</span> <span
  m='429450'>solver</span> <span m='429740'>to</span> <span
  m='430117'>explicitly</span> <span m='430495'>treat</span> <span
  m='430873'>this</span> <span m='431251'>as</span> <span m='431628'>a</span>
  <span m='432006'>linear</span> <span m='432384'>optimization</span> <span
  m='432762'>problem.</span> </p><p><span m='433140'>Second,</span> <span
  m='433498'>we</span> <span m='433857'>need</span> <span m='434216'>to</span>
  <span m='434575'>include</span> <span m='434934'>another</span> <span
  m='435293'>set</span> <span m='435652'>of</span> <span
  m='436011'>constraints.</span> </p><p><span m='436370'>This</span> <span
  m='436697'>set</span> <span m='437025'>of</span> <span
  m='437352'>constraints</span> <span m='437680'>requires</span> <span
  m='438007'>each</span> <span m='438335'>decision</span> <span
  m='438662'>variable</span> <span m='438990'>to</span> <span
  m='439183'>be</span> <span m='439377'>greater</span> <span
  m='439571'>than</span> <span m='439765'>or</span> <span
  m='439958'>equal</span> <span m='440152'>to</span> <span
  m='440346'>zero,</span> <span m='440540'>since</span> <span
  m='440743'>it</span> <span m='440947'>does</span> <span m='441151'>not</span>
  <span m='441355'>make</span> <span m='441558'>sense</span> <span
  m='441762'>to</span> <span m='441966'>display</span> <span
  m='442170'>an</span> <span m='442551'>advertiser</span> <span
  m='442932'>with</span> <span m='443313'>a</span> <span
  m='443694'>certain</span> <span m='444075'>query</span> <span
  m='444456'>some</span> <span m='444837'>negative</span> <span
  m='445218'>number</span> <span m='445600'>of</span> <span
  m='446250'>times.</span> </p><p><span m='446900'>Now,</span> <span
  m='447186'>while</span> <span m='447472'>we</span> <span
  m='447758'>could</span> <span m='448045'>include</span> <span
  m='448331'>these</span> <span m='448617'>constraints</span> <span
  m='448903'>here,</span> <span m='449190'>these</span> <span
  m='449484'>types</span> <span m='449778'>of</span> <span
  m='450072'>constraints</span> <span m='450366'>are</span> <span
  m='450660'>very</span> <span m='450954'>common</span> <span
  m='451248'>and</span> <span m='451542'>very</span> <span
  m='451836'>typical</span> <span m='452130'>in</span> <span
  m='452497'>linear</span> <span m='452865'>optimization</span> <span
  m='453232'>models.</span> </p><p><span m='453600'>They</span> <span
  m='453835'>come</span> <span m='454070'>up</span> <span m='454305'>all</span>
  <span m='454540'>the</span> <span m='454775'>time.</span> </p><p><span
  m='455010'>And,</span> <span m='455197'>in</span> <span
  m='455385'>fact,</span> <span m='455572'>they</span> <span
  m='455760'>come</span> <span m='455947'>up</span> <span m='456135'>so</span>
  <span m='456322'>often,</span> <span m='456510'>that</span> <span
  m='456778'>solvers</span> <span m='457046'>often</span> <span
  m='457314'>have</span> <span m='457582'>an</span> <span
  m='457850'>option</span> <span m='458118'>that</span> <span
  m='458386'>you</span> <span m='458654'>can</span> <span
  m='458922'>toggle,</span> <span m='459190'>that</span> <span
  m='459718'>incorporates</span> <span m='460246'>these</span> <span
  m='460774'>constraints</span> <span m='461302'>automatically.</span>
  </p><p><span m='461830'>So</span> <span m='462201'>to</span> <span
  m='462572'>handle</span> <span m='462944'>both</span> <span
  m='463315'>of</span> <span m='463687'>these</span> <span
  m='464058'>considerations.</span> </p><p><span m='464430'>Let's</span> <span
  m='464966'>just</span> <span m='465502'>click</span> <span
  m='466038'>on</span> <span m='466574'>Options.</span> </p><p><span
  m='467110'>And</span> <span m='467410'>under</span> <span
  m='467710'>options,</span> <span m='468010'>where</span> <span
  m='468310'>we</span> <span m='468610'>have</span> <span m='468910'>the</span>
  <span m='469210'>drop</span> <span m='469510'>down</span> <span
  m='469810'>menu</span> <span m='470202'>for</span> <span
  m='470595'>"Solver</span> <span m='470987'>engine",</span> <span
  m='471380'>we'll</span> <span m='471772'>click</span> <span
  m='472165'>on</span> <span m='472557'>there,</span> <span
  m='472950'>and</span> <span m='473380'>then</span> <span
  m='473810'>we'll</span> <span m='474240'>select</span> <span
  m='474670'>LibreOffice</span> <span m='475100'>Linear</span> <span
  m='475530'>Solver.</span> </p><p><span m='475960'>This</span> <span
  m='476278'>indicates</span> <span m='476597'>to</span> <span
  m='476916'>LibreOffice</span> <span m='477235'>to</span> <span
  m='477554'>use</span> <span m='477873'>the</span> <span
  m='478192'>linear</span> <span m='478511'>optimization</span> <span
  m='478830'>solver</span> <span m='479455'>for</span> <span
  m='480080'>this</span> <span m='480705'>problem.</span> </p><p><span
  m='481330'>And</span> <span m='481590'>under</span> <span
  m='481850'>the</span> <span m='482110'>settings</span> <span
  m='482370'>here,</span> <span m='482630'>one</span> <span m='482890'>of</span>
  <span m='483150'>the</span> <span m='483410'>settings,</span> <span
  m='483670'>is</span> <span m='484165'>to</span> <span m='484660'>assume</span>
  <span m='485155'>that</span> <span m='485650'>the</span> <span
  m='486145'>variables</span> <span m='486640'>are</span> <span
  m='487135'>non-negative.</span> </p><p><span m='487630'>We'll</span> <span
  m='488017'>just</span> <span m='488405'>activate</span> <span
  m='488792'>that</span> <span m='489180'>option</span> <span
  m='489567'>and</span> <span m='489955'>hit</span> <span m='490342'>OK.</span>
  </p><p><span m='490730'>And</span> <span m='490987'>now</span> <span
  m='491245'>we're</span> <span m='491502'>ready</span> <span
  m='491760'>to</span> <span m='492017'>solve</span> <span m='492275'>the</span>
  <span m='492532'>problem.</span> </p><p><span m='492790'>So</span> <span
  m='493208'>if</span> <span m='493626'>we</span> <span m='494044'>hit</span>
  <span m='494462'>solve,</span> <span m='494880'>we</span> <span
  m='495298'>get</span> <span m='495716'>this</span> <span
  m='496134'>dialogue</span> <span m='496552'>that</span> <span
  m='496970'>says</span> <span m='497390'>that</span> <span
  m='497810'>solving</span> <span m='498230'>successfully</span> <span
  m='498650'>finished,</span> <span m='499070'>and</span> <span
  m='499321'>that</span> <span m='499572'>our</span> <span
  m='499824'>result,</span> <span m='500075'>in</span> <span
  m='500327'>this</span> <span m='500578'>case,</span> <span
  m='500830'>this</span> <span m='501275'>is</span> <span m='501721'>the</span>
  <span m='502167'>objective</span> <span m='502612'>function,</span> <span
  m='503058'>was</span> <span m='503504'>428.</span> </p><p><span
  m='503950'>So</span> <span m='504365'>we</span> <span m='504780'>have</span>
  <span m='505195'>an</span> <span m='505610'>advertising</span> <span
  m='506025'>strategy</span> <span m='506440'>that</span> <span
  m='507042'>achieves</span> <span m='507645'>an</span> <span
  m='508248'>average</span> <span m='508851'>revenue</span> <span
  m='509454'>of</span> <span m='510057'>$428.</span> </p><p><span
  m='510660'>Let's</span> <span m='511027'>just</span> <span
  m='511394'>hit</span> <span m='511761'>here,</span> <span
  m='512129'>Keep</span> <span m='512496'>Result,</span> <span
  m='512863'>and</span> <span m='513230'>just</span> <span
  m='513598'>take</span> <span m='513965'>a</span> <span m='514332'>look.</span>
  </p><p><span m='517730'>The</span> <span m='518013'>cells</span> <span
  m='518296'>that</span> <span m='518580'>we</span> <span
  m='518863'>specified</span> <span m='519146'>as</span> <span
  m='519430'>the</span> <span m='519713'>decision</span> <span
  m='519996'>variables</span> <span m='520280'>have</span> <span
  m='520790'>been</span> <span m='521300'>populated</span> <span
  m='521810'>with</span> <span m='522320'>their</span> <span
  m='522830'>optimal</span> <span m='523340'>values.</span> </p><p><span
  m='523850'>So</span> <span m='524230'>our</span> <span
  m='524610'>optimal</span> <span m='524990'>strategy,</span> <span
  m='525370'>based</span> <span m='525750'>on</span> <span
  m='526130'>this</span> <span m='526510'>linear</span> <span
  m='526890'>optimization</span> <span m='527270'>solution</span> <span
  m='527583'>is</span> <span m='527896'>the</span> <span
  m='528210'>following:</span> <span m='528523'>so</span> <span
  m='528836'>we're</span> <span m='529150'>going</span> <span
  m='529652'>to</span> <span m='530154'>show</span> <span
  m='530656'>AT&amp;T</span> <span m='531158'>with</span> <span
  m='531661'>query</span> <span m='532163'>one</span> <span m='532665'>40</span>
  <span m='533167'>times;</span> <span m='533670'>we're</span> <span
  m='534041'>going</span> <span m='534413'>to</span> <span
  m='534785'>show</span> <span m='535157'>AT&amp;T</span> <span
  m='535529'>with</span> <span m='535900'>query</span> <span
  m='536272'>two</span> <span m='536644'>also</span> <span m='537016'>40</span>
  <span m='537388'>times;</span> <span m='537760'>we're</span> <span
  m='538106'>going</span> <span m='538452'>to</span> <span
  m='538798'>show</span> <span m='539144'>AT&amp;T</span> <span
  m='539490'>with</span> <span m='539836'>query</span> <span
  m='540182'>three</span> <span m='540528'>80</span> <span
  m='540874'>times;</span> <span m='541220'>for</span> <span
  m='541523'>T-Mobile,</span> <span m='541826'>we'll</span> <span
  m='542130'>show</span> <span m='542433'>T-Mobile's</span> <span
  m='542736'>ad</span> <span m='543040'>with</span> <span
  m='543343'>query</span> <span m='543646'>one</span> <span
  m='543950'>100</span> <span m='544344'>times;</span> <span
  m='544738'>and</span> <span m='545133'>we're</span> <span
  m='545527'>only</span> <span m='545922'>going</span> <span
  m='546316'>to</span> <span m='546711'>show</span> <span
  m='547105'>Verizon's</span> <span m='547500'>ad</span> <span
  m='547762'>with</span> <span m='548025'>query</span> <span
  m='548287'>two,</span> <span m='548550'>and</span> <span
  m='548812'>we're</span> <span m='549075'>going</span> <span
  m='549337'>to</span> <span m='549600'>show</span> <span m='549862'>it</span>
  <span m='550125'>40</span> <span m='550387'>times.</span> </p><p><span
  m='550650'>So</span> <span m='551124'>this</span> <span
  m='551598'>specifies,</span> <span m='552072'>completely,</span> <span
  m='552547'>the</span> <span m='553021'>advertising</span> <span
  m='553495'>strategy</span> <span m='553970'>that</span> <span
  m='554290'>Google</span> <span m='554610'>should</span> <span
  m='554930'>use.</span> </p><p><span m='555250'>And</span> <span
  m='555527'>this</span> <span m='555804'>strategy,</span> <span
  m='556081'>as</span> <span m='556358'>we</span> <span m='556635'>just</span>
  <span m='556912'>saw,</span> <span m='557190'>achieves</span> <span
  m='557961'>an</span> <span m='558733'>average</span> <span
  m='559505'>revenue</span> <span m='560276'>of</span> <span
  m='561048'>$428.</span> </p><p><span m='561820'>Let's</span> <span
  m='562070'>double</span> <span m='562320'>check</span> <span
  m='562570'>that</span> <span m='562820'>the</span> <span
  m='563070'>solution</span> <span m='563320'>is</span> <span
  m='563549'>feasible</span> <span m='563778'>by</span> <span
  m='564007'>looking</span> <span m='564236'>at</span> <span
  m='564465'>the</span> <span m='564694'>budgets</span> <span
  m='564923'>and</span> <span m='565152'>the</span> <span
  m='565381'>query</span> <span m='565610'>estimates.</span> </p><p><span
  m='566620'>So</span> <span m='566887'>if</span> <span m='567155'>we</span>
  <span m='567422'>scroll</span> <span m='567690'>down</span> <span
  m='567957'>here,</span> <span m='568225'>we</span> <span m='568492'>see</span>
  <span m='568760'>that</span> <span m='569413'>AT&amp;T's</span> <span
  m='570066'>budget</span> <span m='570720'>that</span> <span
  m='571373'>we</span> <span m='572026'>use</span> <span m='572680'>here</span>
  <span m='573333'>is</span> <span m='573986'>$168.</span> </p><p><span
  m='574640'>AT&amp;T's</span> <span m='575696'>actual</span> <span
  m='576752'>budget</span> <span m='577808'>is</span> <span
  m='578864'>$170.</span> </p><p><span m='579920'>We</span> <span
  m='580173'>can</span> <span m='580426'>see</span> <span m='580680'>that</span>
  <span m='580933'>for</span> <span m='581186'>the</span> <span
  m='581440'>other</span> <span m='581693'>two</span> <span
  m='581946'>advertisers,</span> <span m='582200'>that</span> <span
  m='582475'>we</span> <span m='582750'>are</span> <span m='583025'>in</span>
  <span m='583300'>the</span> <span m='583575'>clear</span> <span
  m='583850'>for</span> <span m='584125'>both</span> <span m='584400'>of</span>
  <span m='584675'>them.</span> </p><p><span m='584950'>Similarly,</span> <span
  m='585252'>with</span> <span m='585554'>the</span> <span
  m='585856'>query</span> <span m='586158'>estimates</span> <span
  m='586460'>we</span> <span m='586800'>can</span> <span m='587140'>see</span>
  <span m='587480'>that</span> <span m='587820'>for</span> <span
  m='588160'>all</span> <span m='588500'>the</span> <span
  m='588840'>queries</span> <span m='589180'>that</span> <span
  m='589450'>we</span> <span m='589720'>are</span> <span
  m='589990'>considering</span> <span m='590260'>here,</span> <span
  m='590530'>we</span> <span m='590800'>do</span> <span m='591070'>not</span>
  <span m='591340'>use</span> <span m='591671'>any</span> <span
  m='592002'>query</span> <span m='592334'>more</span> <span
  m='592665'>than</span> <span m='592997'>the</span> <span
  m='593328'>estimate</span> <span m='593660'>for</span> <span
  m='593885'>the</span> <span m='594111'>number</span> <span
  m='594337'>of</span> <span m='594563'>times</span> <span
  m='594789'>that</span> <span m='595015'>we</span> <span
  m='595240'>expect</span> <span m='595466'>to</span> <span
  m='595692'>see</span> <span m='595918'>that</span> <span
  m='596144'>query.</span> </p><p><span m='596370'>And</span> <span
  m='596811'>finally,</span> <span m='597252'>as</span> <span
  m='597693'>one</span> <span m='598134'>last</span> <span
  m='598575'>check,</span> <span m='599016'>all</span> <span
  m='599457'>the</span> <span m='599898'>decision</span> <span
  m='600339'>variable</span> <span m='600780'>values</span> <span
  m='601056'>that</span> <span m='601333'>we</span> <span m='601610'>see</span>
  <span m='601887'>here</span> <span m='602164'>are</span> <span
  m='602441'>all</span> <span m='602718'>greater</span> <span
  m='602995'>than</span> <span m='603272'>or</span> <span
  m='603549'>equal</span> <span m='603826'>to</span> <span
  m='604103'>zero.</span> </p><p><span m='604380'>So</span> <span
  m='604820'>we're</span> <span m='605260'>not</span> <span
  m='605700'>using</span> <span m='606140'>any</span> <span
  m='606580'>advertiser</span> <span m='607020'>with</span> <span
  m='607273'>any</span> <span m='607527'>query</span> <span m='607781'>a</span>
  <span m='608035'>negative</span> <span m='608288'>number</span> <span
  m='608542'>times,</span> <span m='608796'>which</span> <span
  m='609050'>obviously</span> <span m='609452'>would</span> <span
  m='609854'>not</span> <span m='610256'>make</span> <span
  m='610658'>sense.</span> </p><p><span m='611060'>So,</span> <span
  m='611499'>the</span> <span m='611938'>solution</span> <span
  m='612377'>as</span> <span m='612816'>a</span> <span m='613255'>whole</span>
  <span m='613694'>is</span> <span m='614133'>a</span> <span
  m='614572'>feasible</span> <span m='615011'>solution.</span> </p><p><span
  m='615450'>In</span> <span m='615711'>the</span> <span m='615972'>next</span>
  <span m='616234'>video,</span> <span m='616495'>we'll</span> <span
  m='616757'>show</span> <span m='617018'>how</span> <span m='617280'>to</span>
  <span m='617551'>solve</span> <span m='617822'>the</span> <span
  m='618093'>problem</span> <span m='618364'>using</span> <span
  m='618635'>a</span> <span m='618906'>greedy</span> <span
  m='619177'>common</span> <span m='619448'>sense</span> <span
  m='619720'>approach,</span> <span m='620060'>where</span> <span
  m='620400'>we</span> <span m='620740'>will</span> <span
  m='621080'>allocate</span> <span m='621420'>ads</span> <span
  m='621760'>to</span> <span m='622100'>queries</span> <span
  m='622440'>by</span> <span m='622780'>prioritizing</span> <span
  m='623120'>them</span> <span m='623544'>by</span> <span
  m='623968'>their</span> <span m='624392'>average</span> <span
  m='624817'>price</span> <span m='625241'>per</span> <span
  m='625665'>display.</span> </p>
embedded_media:
  - uid: 9613c7d73196dc491796e1f7a650c431
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: akNw8CEHC_c
  - uid: 0c2b3d670f8e963aefb8f10f7f21a219
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: akNw8CEHC_c
  - uid: 859f32fce17e6da0b0c3cd8afeaccf5d
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/akNw8CEHC_c/default.jpg'
  - uid: 1507a46d0c2f6e8fe31ecb0148c33795
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: akNw8CEHC_c.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-5-solving-the-problem/video-5-solving-the-problem-0/akNw8CEHC_c.srt
  - uid: a130f11a52c5735ad18b253f9ef959d1
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: akNw8CEHC_c.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-optimization/google-adwords-optimizing-online-advertising-recitation/video-5-solving-the-problem/video-5-solving-the-problem-0/akNw8CEHC_c.pdf
  - uid: 08bad73f56c4096b0f1c5de985296308
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 7e5b501a9c174f5cf149795fbf120f32
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 9c993b1e71d8e291c9fbc5eb15f107b9
    parent_uid: e95d8df22c804b1231396b13b4ac2dcf
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_8.4.06_300k.mp4
type: courses
layout: video
---
