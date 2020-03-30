---
title: 'Video 3: Predicting Heart Attacks using Clustering'
uid: 58197ebb100f5b918181cb8202497dfb
parent_uid: d7f89a0bf4f5ad76faeb94bf9b442e5b
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/predictive-diagnosis-discovering-patterns-for-disease-detection/video-3-predicting-heart-attacks-using-clustering/video-3-predicting-heart-attacks-using-clustering-0
short_url: video-3-predicting-heart-attacks-using-clustering-0
inline_embed_id: 55748943video3predictingheartattacksusingclustering23019763
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>Let</span> <span m='4776'>us</span> <span
  m='5053'>discuss</span> <span m='5330'>the</span> <span
  m='5606'>performance</span> <span m='5883'>of</span> <span m='6160'>a</span>
  <span m='6436'>benchmark</span> <span m='6713'>algorithm.</span> </p><p><span
  m='6990'>The</span> <span m='7366'>Random</span> <span m='7743'>Forest</span>
  <span m='8120'>algorithm</span> <span m='8496'>is</span> <span
  m='8873'>known</span> <span m='9250'>for</span> <span m='9680'>its</span>
  <span m='10110'>attractive</span> <span m='10540'>property</span> <span
  m='10970'>of</span> <span m='11400'>detecting</span> <span
  m='11830'>variable</span> <span m='12260'>interactions</span> <span
  m='12690'>and</span> <span m='13135'>excellent</span> <span
  m='13581'>performance</span> <span m='14027'>as</span> <span
  m='14472'>a</span> <span m='14918'>learning</span> <span
  m='15364'>algorithm.</span> </p><p><span m='15810'>For</span> <span
  m='16076'>the</span> <span m='16342'>decision,</span> <span
  m='16608'>we're</span> <span m='16875'>selecting</span> <span
  m='17141'>the</span> <span m='17407'>Random</span> <span
  m='17673'>Forest</span> <span m='17940'>algorithm</span> <span
  m='18350'>as</span> <span m='18760'>a</span> <span
  m='19170'>benchmark--</span> <span m='19580'>initially,</span> <span
  m='19990'>we</span> <span m='20306'>randomly</span> <span
  m='20623'>partitioned</span> <span m='20940'>the</span> <span
  m='21256'>full</span> <span m='21573'>data</span> <span m='21890'>set</span>
  <span m='22291'>into</span> <span m='22692'>two</span> <span
  m='23093'>separate</span> <span m='23494'>parts,</span> <span
  m='23895'>where</span> <span m='24296'>the</span> <span m='24697'>split</span>
  <span m='25098'>was</span> <span m='25499'>50-50,</span> <span
  m='25900'>and</span> <span m='26285'>the</span> <span
  m='26670'>partitioning</span> <span m='27055'>was</span> <span
  m='27440'>done</span> <span m='27825'>evenly</span> <span
  m='28210'>within</span> <span m='28595'>each</span> <span
  m='28980'>cost</span> <span m='29365'>bin.</span> </p><p><span
  m='29750'>The</span> <span m='30021'>first</span> <span m='30293'>part,</span>
  <span m='30565'>the</span> <span m='30836'>training</span> <span
  m='31108'>set,</span> <span m='31380'>was</span> <span m='31788'>used</span>
  <span m='32196'>to</span> <span m='32605'>develop</span> <span
  m='33013'>the</span> <span m='33421'>method.</span> </p><p><span
  m='33830'>The</span> <span m='34197'>second</span> <span
  m='34564'>part,</span> <span m='34931'>the</span> <span m='35298'>test</span>
  <span m='35665'>set,</span> <span m='36032'>was</span> <span
  m='36400'>used</span> <span m='36836'>to</span> <span
  m='37273'>evaluate</span> <span m='37710'>the</span> <span
  m='38146'>model's</span> <span m='38583'>performance.</span> </p><p><span
  m='39020'>The</span> <span m='39553'>table</span> <span m='40087'>in</span>
  <span m='40621'>this</span> <span m='41155'>slide</span> <span
  m='41688'>reports</span> <span m='42222'>the</span> <span
  m='42756'>accuracy</span> <span m='43290'>of</span> <span m='43839'>the</span>
  <span m='44388'>Random</span> <span m='44937'>Forest</span> <span
  m='45486'>algorithm</span> <span m='46035'>on</span> <span
  m='46584'>each</span> <span m='47133'>of</span> <span m='47682'>the</span>
  <span m='48231'>three</span> <span m='48780'>buckets.</span> </p><p><span
  m='49330'>Let</span> <span m='49685'>us</span> <span m='50040'>now</span>
  <span m='50395'>introduce</span> <span m='50750'>the</span> <span
  m='51105'>idea</span> <span m='51460'>of</span> <span
  m='51815'>clustering.</span> </p><p><span m='52170'>Patients</span> <span
  m='52616'>in</span> <span m='53062'>each</span> <span m='53508'>bucket</span>
  <span m='53955'>may</span> <span m='54401'>have</span> <span
  m='54847'>different</span> <span m='55293'>characteristics.</span>
  </p><p><span m='55740'>For</span> <span m='56185'>this</span> <span
  m='56630'>reason,</span> <span m='57075'>we</span> <span
  m='57520'>create</span> <span m='57965'>clusters</span> <span
  m='58410'>for</span> <span m='58855'>each</span> <span m='59300'>cost</span>
  <span m='59745'>bucket</span> <span m='60190'>and</span> <span
  m='60557'>make</span> <span m='60924'>predictions</span> <span
  m='61291'>for</span> <span m='61658'>each</span> <span
  m='62025'>cluster</span> <span m='62392'>using</span> <span
  m='62759'>the</span> <span m='63126'>Random</span> <span
  m='63493'>Forest</span> <span m='63860'>algorithm.</span> </p><p><span
  m='66990'>Clustering</span> <span m='67357'>is</span> <span
  m='67724'>mostly</span> <span m='68091'>used</span> <span m='68459'>in</span>
  <span m='68826'>the</span> <span m='69193'>absence</span> <span
  m='69560'>of</span> <span m='69928'>a</span> <span m='70295'>target</span>
  <span m='70662'>variable</span> <span m='71030'>to</span> <span
  m='71450'>search</span> <span m='71870'>for</span> <span
  m='72290'>relationships</span> <span m='72710'>among</span> <span
  m='73130'>input</span> <span m='73550'>variables</span> <span
  m='73970'>or</span> <span m='74414'>to</span> <span m='74858'>organize</span>
  <span m='75302'>data</span> <span m='75747'>into</span> <span
  m='76191'>meaningful</span> <span m='76635'>groups.</span> </p><p><span
  m='77080'>In</span> <span m='77418'>this</span> <span m='77757'>study,</span>
  <span m='78095'>although</span> <span m='78434'>the</span> <span
  m='78772'>target</span> <span m='79111'>variable</span> <span
  m='79450'>is</span> <span m='79727'>well-defined</span> <span
  m='80004'>as</span> <span m='80281'>a</span> <span m='80559'>heart</span>
  <span m='80836'>attack</span> <span m='81113'>or</span> <span
  m='81390'>not</span> <span m='81668'>a</span> <span m='81945'>heart</span>
  <span m='82222'>attack,</span> <span m='82500'>there</span> <span
  m='83032'>are</span> <span m='83564'>many</span> <span
  m='84096'>different</span> <span m='84628'>trajectories</span> <span
  m='85160'>that</span> <span m='85596'>are</span> <span
  m='86033'>associated</span> <span m='86470'>with</span> <span
  m='86906'>the</span> <span m='87343'>target.</span> </p><p><span
  m='87780'>There's</span> <span m='88397'>not</span> <span m='89014'>one</span>
  <span m='89631'>set</span> <span m='90248'>pattern</span> <span
  m='90865'>of</span> <span m='91482'>health</span> <span m='92100'>or</span>
  <span m='92443'>diagnostic</span> <span m='92786'>combination</span> <span
  m='93129'>that</span> <span m='93472'>leads</span> <span m='93815'>a</span>
  <span m='94158'>person</span> <span m='94501'>to</span> <span
  m='94844'>heart</span> <span m='95187'>attack.</span> </p><p><span
  m='95530'>Instead,</span> <span m='95890'>we'll</span> <span
  m='96250'>show</span> <span m='96610'>that</span> <span m='96970'>there</span>
  <span m='97330'>are</span> <span m='97690'>many</span> <span
  m='98148'>different</span> <span m='98607'>dynamic</span> <span
  m='99066'>health</span> <span m='99525'>patterns</span> <span
  m='99983'>and</span> <span m='100442'>time</span> <span
  m='100901'>series</span> <span m='101360'>diagnostic</span> <span
  m='101850'>relations</span> <span m='102340'>preceding</span> <span
  m='102830'>a</span> <span m='103320'>heart</span> <span
  m='103810'>attack.</span> </p><p><span m='107440'>The</span> <span
  m='107808'>clustering</span> <span m='108176'>methods</span> <span
  m='108545'>were</span> <span m='108913'>used</span> <span
  m='109281'>were</span> <span m='109650'>spectral</span> <span
  m='110268'>clustering</span> <span m='110886'>and</span> <span
  m='111504'>k-means</span> <span m='112122'>clustering.</span> </p><p><span
  m='112740'>We</span> <span m='113274'>focus,</span> <span m='113808'>in</span>
  <span m='114343'>the</span> <span m='114877'>lecture,</span> <span
  m='115412'>on</span> <span m='115946'>the</span> <span
  m='116481'>k-means</span> <span m='117015'>clustering.</span> </p><p><span
  m='117550'>The</span> <span m='118108'>broad</span> <span
  m='118667'>description</span> <span m='119226'>of</span> <span
  m='119785'>the</span> <span m='120344'>algorithm</span> <span
  m='120903'>is</span> <span m='121462'>as</span> <span
  m='122021'>follows.</span> </p><p><span m='122580'>We</span> <span
  m='123320'>first</span> <span m='124060'>specify</span> <span
  m='124800'>the</span> <span m='125540'>number</span> <span
  m='126280'>of</span> <span m='127020'>clusters</span> <span
  m='127760'>k.</span> </p><p><span m='128500'>Then</span> <span
  m='129128'>we</span> <span m='129756'>randomly</span> <span
  m='130384'>assign</span> <span m='131012'>each</span> <span
  m='131640'>data</span> <span m='132268'>point</span> <span
  m='132896'>to</span> <span m='133524'>a</span> <span
  m='134152'>cluster.</span> </p><p><span m='134780'>We</span> <span
  m='135303'>then</span> <span m='135826'>compute</span> <span
  m='136350'>the</span> <span m='136873'>cluster</span> <span
  m='137396'>centroids.</span> </p><p><span m='137920'>We</span> <span
  m='138440'>re-assign</span> <span m='138960'>each</span> <span
  m='139480'>point</span> <span m='140000'>to</span> <span m='140520'>the</span>
  <span m='141040'>closest</span> <span m='141560'>cluster</span> <span
  m='142080'>centroid.</span> </p><p><span m='142600'>We</span> <span
  m='143030'>then</span> <span m='143460'>re-compute</span> <span
  m='143890'>the</span> <span m='144320'>cluster</span> <span
  m='144750'>centroids,</span> <span m='145180'>and</span> <span
  m='145547'>we</span> <span m='145915'>repeat</span> <span
  m='146282'>steps</span> <span m='146650'>4</span> <span m='147017'>and</span>
  <span m='147385'>5</span> <span m='147752'>until</span> <span
  m='148120'>no</span> <span m='148487'>improvement</span> <span
  m='148855'>is</span> <span m='149222'>made.</span> </p><p><span
  m='152560'>Let</span> <span m='153243'>us</span> <span
  m='153927'>illustrate</span> <span m='154611'>the</span> <span
  m='155295'>k-means</span> <span m='155978'>algorithm</span> <span
  m='156662'>in</span> <span m='157346'>action.</span> </p><p><span
  m='158030'>We</span> <span m='158596'>specify</span> <span
  m='159162'>the</span> <span m='159728'>desired</span> <span
  m='160295'>number</span> <span m='160861'>of</span> <span
  m='161427'>clusters</span> <span m='161993'>k.</span> </p><p><span
  m='162560'>In</span> <span m='162906'>this</span> <span
  m='163253'>case,</span> <span m='163600'>we</span> <span m='163946'>use</span>
  <span m='164293'>k=2.</span> </p><p><span m='168840'>We</span> <span
  m='169336'>then</span> <span m='169832'>randomly</span> <span
  m='170328'>assign</span> <span m='170824'>each</span> <span
  m='171320'>data</span> <span m='171816'>point</span> <span
  m='172312'>to</span> <span m='172808'>a</span> <span
  m='173304'>cluster.</span> </p><p><span m='177100'>In</span> <span
  m='177484'>this</span> <span m='177868'>case,</span> <span
  m='178252'>we</span> <span m='178636'>have</span> <span m='179020'>the</span>
  <span m='179404'>three</span> <span m='179788'>points</span> <span
  m='180172'>in</span> <span m='180556'>red,</span> <span m='180940'>and</span>
  <span m='181513'>the</span> <span m='182086'>two</span> <span
  m='182660'>points</span> <span m='183233'>in</span> <span
  m='183806'>black.</span> </p><p><span m='184380'>We</span> <span
  m='185050'>then</span> <span m='185720'>compute</span> <span
  m='186390'>the</span> <span m='187060'>cluster</span> <span
  m='187730'>centroids,</span> <span m='188400'>indicated</span> <span
  m='188897'>by</span> <span m='189395'>the</span> <span m='189893'>red</span>
  <span m='190391'>x</span> <span m='190888'>and</span> <span
  m='191386'>the</span> <span m='191884'>grey</span> <span m='192382'>x.</span>
  </p><p><span m='192880'>We</span> <span m='193573'>re-assign</span> <span
  m='194266'>each</span> <span m='194960'>point</span> <span
  m='195653'>to</span> <span m='196346'>the</span> <span
  m='197040'>closest</span> <span m='197733'>cluster</span> <span
  m='198426'>centroid,</span> <span m='199120'>and</span> <span
  m='199612'>now</span> <span m='200105'>you</span> <span
  m='200598'>observe</span> <span m='201090'>that</span> <span
  m='201583'>this</span> <span m='202076'>point</span> <span
  m='202569'>changes</span> <span m='203061'>from</span> <span
  m='203554'>a</span> <span m='204047'>red</span> <span m='204540'>to</span>
  <span m='205326'>a</span> <span m='206113'>grey.</span> </p><p><span
  m='206900'>We</span> <span m='208346'>re-compute</span> <span
  m='209792'>the</span> <span m='211238'>cluster</span> <span
  m='212684'>centroids,</span> <span m='214130'>and</span> <span
  m='214792'>we</span> <span m='215454'>repeat</span> <span
  m='216116'>the</span> <span m='216778'>previous</span> <span
  m='217441'>steps,</span> <span m='218103'>4</span> <span m='218765'>and</span>
  <span m='219427'>5</span> <span m='220090'>until</span> <span
  m='220442'>no</span> <span m='220794'>improvement</span> <span
  m='221146'>is</span> <span m='221498'>made.</span> </p><p><span
  m='221850'>We</span> <span m='222279'>observe</span> <span
  m='222709'>that,</span> <span m='223139'>in</span> <span
  m='223569'>this</span> <span m='223999'>case,</span> <span
  m='224429'>the</span> <span m='224859'>k-means</span> <span
  m='225289'>clustering</span> <span m='225719'>is</span> <span
  m='226149'>done,</span> <span m='226579'>and</span> <span
  m='226850'>this</span> <span m='227122'>is</span> <span m='227394'>our</span>
  <span m='227666'>final</span> <span m='227938'>clustering.</span> </p><p><span
  m='233920'>Let</span> <span m='234381'>us</span> <span
  m='234843'>discuss</span> <span m='235305'>some</span> <span
  m='235766'>practical</span> <span m='236228'>considerations.</span>
  </p><p><span m='236690'>The</span> <span m='236952'>number</span> <span
  m='237215'>of</span> <span m='237477'>clusters</span> <span
  m='237740'>k</span> <span m='238002'>can</span> <span m='238265'>be</span>
  <span m='238527'>selected</span> <span m='238790'>from</span> <span
  m='239258'>previous</span> <span m='239727'>knowledge</span> <span
  m='240195'>or</span> <span m='240664'>by</span> <span m='241132'>simply</span>
  <span m='241601'>experimenting.</span> </p><p><span m='242070'>We</span> <span
  m='242507'>can</span> <span m='242945'>strategically</span> <span
  m='243382'>select</span> <span m='243820'>initial</span> <span
  m='244257'>partition</span> <span m='244695'>of</span> <span
  m='245132'>points</span> <span m='245570'>into</span> <span
  m='246004'>clusters</span> <span m='246438'>if</span> <span
  m='246872'>we</span> <span m='247306'>have</span> <span m='247740'>some</span>
  <span m='248174'>knowledge</span> <span m='248608'>of</span> <span
  m='249042'>the</span> <span m='249476'>data.</span> </p><p><span
  m='249910'>We</span> <span m='250253'>can</span> <span m='250597'>also</span>
  <span m='250941'>run</span> <span m='251285'>the</span> <span
  m='251628'>algorithm</span> <span m='251972'>several</span> <span
  m='252316'>times</span> <span m='252660'>with</span> <span
  m='253128'>different</span> <span m='253596'>random</span> <span
  m='254064'>starting</span> <span m='254532'>points.</span> </p><p><span
  m='255000'>In</span> <span m='255426'>the</span> <span
  m='255853'>recitations,</span> <span m='256280'>we'll</span> <span
  m='256706'>learn</span> <span m='257133'>how</span> <span m='257560'>to</span>
  <span m='258497'>run</span> <span m='259434'>the</span> <span
  m='260371'>k-means</span> <span m='261308'>algorithm</span> <span
  m='262245'>in</span> <span m='263182'>R.</span> </p><p><span
  m='264120'>So</span> <span m='264596'>how</span> <span m='265073'>do</span>
  <span m='265550'>we</span> <span m='266026'>measure</span> <span
  m='266503'>performance?</span> </p><p><span m='266980'>After</span> <span
  m='267296'>we</span> <span m='267613'>construct</span> <span
  m='267930'>the</span> <span m='268246'>clusters</span> <span
  m='268563'>in</span> <span m='268880'>the</span> <span
  m='269196'>training</span> <span m='269513'>set,</span> <span
  m='269830'>we</span> <span m='270275'>assign</span> <span
  m='270720'>new</span> <span m='271165'>observations</span> <span
  m='271610'>to</span> <span m='272055'>clusters</span> <span
  m='272500'>by</span> <span m='272945'>proximity</span> <span
  m='273390'>to</span> <span m='273690'>the</span> <span
  m='273990'>centroid</span> <span m='274290'>of</span> <span
  m='274590'>each</span> <span m='274890'>cluster.</span> </p><p><span
  m='277860'>We</span> <span m='278434'>measure</span> <span
  m='279008'>performance</span> <span m='279582'>by</span> <span
  m='280156'>recording</span> <span m='280730'>the</span> <span
  m='281088'>average</span> <span m='281447'>performance</span> <span
  m='281805'>rate</span> <span m='282164'>in</span> <span m='282522'>each</span>
  <span m='282881'>cluster.</span> </p><p><span m='287120'>Let</span> <span
  m='287361'>us</span> <span m='287602'>now</span> <span
  m='287843'>discuss</span> <span m='288084'>the</span> <span
  m='288325'>performance</span> <span m='288566'>of</span> <span
  m='288807'>the</span> <span m='289048'>clustering</span> <span
  m='289290'>methods.</span> </p><p><span m='293070'>We</span> <span
  m='293634'>perform</span> <span m='294198'>clustering</span> <span
  m='294763'>on</span> <span m='295327'>each</span> <span
  m='295892'>bucket</span> <span m='296456'>using</span> <span
  m='297021'>k=10</span> <span m='297585'>clusters.</span> </p><p><span
  m='298150'>In</span> <span m='298837'>the</span> <span m='299525'>table</span>
  <span m='300212'>we</span> <span m='300900'>record</span> <span
  m='301587'>the</span> <span m='302275'>average</span> <span
  m='302962'>prediction</span> <span m='303650'>rate</span> <span
  m='304260'>of</span> <span m='304870'>each</span> <span m='305480'>cost</span>
  <span m='306090'>bucket.</span> </p><p><span m='306700'>We</span> <span
  m='307341'>observe</span> <span m='307983'>a</span> <span
  m='308625'>very</span> <span m='309266'>visible</span> <span
  m='309908'>improvement</span> <span m='310550'>when</span> <span
  m='311154'>we</span> <span m='311758'>use</span> <span
  m='312362'>clustering--</span> <span m='312966'>from</span> <span
  m='313570'>49%</span> <span m='314175'>to</span> <span m='314779'>64%,</span>
  <span m='315383'>from</span> <span m='315987'>56%</span> <span
  m='316591'>to</span> <span m='317195'>73%,</span> <span m='317800'>from</span>
  <span m='318572'>58%</span> <span m='319345'>to</span> <span
  m='320117'>78%.</span> </p>
embedded_media:
  - uid: 01a40997d627db3dad93a187a92b0b79
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: fsF79kN9G28
  - uid: b26f52d688076f88e32ba4f48c071822
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: fsF79kN9G28
  - uid: 01bc69aaf122cba40d0182902c60f9cc
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/fsF79kN9G28/default.jpg'
  - uid: 21316828016a2d7fbddaad8fe956d707
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: fsF79kN9G28.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/predictive-diagnosis-discovering-patterns-for-disease-detection/video-3-predicting-heart-attacks-using-clustering/video-3-predicting-heart-attacks-using-clustering-0/fsF79kN9G28.srt
  - uid: f1d0151c67564b4505e08432a8645778
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: fsF79kN9G28.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/predictive-diagnosis-discovering-patterns-for-disease-detection/video-3-predicting-heart-attacks-using-clustering/video-3-predicting-heart-attacks-using-clustering-0/fsF79kN9G28.pdf
  - uid: 349b26b06a0f1f04a456d0717fa2c4dc
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: baebbe81ea614f8b39a0538b1c9267fa
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 25ac5e8c0621267f45925a231d8f514a
    parent_uid: 58197ebb100f5b918181cb8202497dfb
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.3.05_300k.mp4
type: courses
layout: video
---
