---
title: 'Video 1: Introduction to Netflix'
uid: da5550ffe197c76e29367d90b0747760
parent_uid: b091b1bec85a85e060a83b7905c9dcce
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-1-introduction-to-netflix-0
short_url: video-1-introduction-to-netflix-0
inline_embed_id: 3394041video1introductiontonetflix89159569
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9500'>In</span> <span m='9891'>this</span> <span
  m='10282'>lecture,</span> <span m='10673'>we'll</span> <span
  m='11064'>be</span> <span m='11455'>discussing</span> <span
  m='11846'>the</span> <span m='12237'>story</span> <span m='12628'>of</span>
  <span m='13019'>Netflix</span> <span m='13410'>and</span> <span
  m='13780'>how</span> <span m='14150'>their</span> <span
  m='14520'>recommendation</span> <span m='14890'>system</span> <span
  m='15260'>is</span> <span m='15630'>worth</span> <span m='16102'>a</span>
  <span m='16575'>million</span> <span m='17047'>dollars.</span> </p><p><span
  m='17520'>Through</span> <span m='17990'>this</span> <span
  m='18460'>example,</span> <span m='18930'>we'll</span> <span
  m='19400'>introduce</span> <span m='19870'>the</span> <span
  m='20642'>method</span> <span m='21415'>of</span> <span
  m='22187'>clustering.</span> </p><p><span m='22960'>Netflix</span> <span
  m='23462'>is</span> <span m='23964'>an</span> <span m='24466'>online</span>
  <span m='24968'>DVD</span> <span m='25470'>rental</span> <span
  m='25972'>and</span> <span m='26474'>streaming</span> <span
  m='26976'>video</span> <span m='27478'>service.</span> </p><p><span
  m='27980'>Customers</span> <span m='28498'>can</span> <span
  m='29017'>receive</span> <span m='29535'>movie</span> <span
  m='30054'>rentals</span> <span m='30572'>by</span> <span
  m='31091'>mail,</span> <span m='31610'>and</span> <span m='32091'>they</span>
  <span m='32573'>can</span> <span m='33055'>also</span> <span
  m='33537'>watch</span> <span m='34019'>selected</span> <span
  m='34500'>movies</span> <span m='34982'>and</span> <span m='35464'>TV</span>
  <span m='35946'>shows</span> <span m='36428'>online.</span> </p><p><span
  m='36910'>Netflix</span> <span m='37446'>has</span> <span
  m='37982'>more</span> <span m='38518'>than</span> <span m='39055'>40</span>
  <span m='39591'>million</span> <span m='40127'>subscribers</span> <span
  m='40663'>worldwide</span> <span m='41200'>and</span> <span
  m='41756'>has</span> <span m='42312'>an</span> <span m='42868'>annual</span>
  <span m='43425'>revenue</span> <span m='43981'>of</span> <span
  m='44537'>$3.6</span> <span m='45093'>billion.</span> </p><p><span
  m='45650'>A</span> <span m='45986'>key</span> <span m='46322'>aspect</span>
  <span m='46658'>of</span> <span m='46995'>the</span> <span
  m='47331'>company</span> <span m='47667'>is</span> <span
  m='48003'>being</span> <span m='48340'>able</span> <span m='48870'>to</span>
  <span m='49400'>offer</span> <span m='49930'>customers</span> <span
  m='50460'>accurate</span> <span m='50990'>movie</span> <span
  m='51520'>recommendations</span> <span m='52050'>based</span> <span
  m='52580'>on</span> <span m='53130'>a</span> <span m='53680'>customer's</span>
  <span m='54230'>own</span> <span m='54780'>preferences</span> <span
  m='55330'>and</span> <span m='55880'>viewing</span> <span
  m='56430'>history.</span> </p><p><span m='56980'>From</span> <span
  m='57480'>2006</span> <span m='57981'>through</span> <span
  m='58482'>2009,</span> <span m='58983'>Netflix</span> <span
  m='59484'>ran</span> <span m='59985'>a</span> <span m='60486'>contest</span>
  <span m='60987'>asking</span> <span m='61488'>the</span> <span
  m='61989'>public</span> <span m='62490'>to</span> <span
  m='63013'>submit</span> <span m='63536'>algorithms</span> <span
  m='64060'>to</span> <span m='64583'>predict</span> <span m='65106'>user</span>
  <span m='65630'>ratings</span> <span m='66153'>for</span> <span
  m='66676'>movies.</span> </p><p><span m='67200'>This</span> <span
  m='67565'>algorithm</span> <span m='67931'>would</span> <span
  m='68297'>be</span> <span m='68662'>useful</span> <span m='69028'>for</span>
  <span m='69394'>Netflix</span> <span m='69760'>when</span> <span
  m='70430'>making</span> <span m='71100'>recommendations</span> <span
  m='71770'>to</span> <span m='72440'>users.</span> </p><p><span
  m='73110'>Netflix</span> <span m='73563'>provided</span> <span
  m='74017'>a</span> <span m='74470'>training</span> <span m='74924'>data</span>
  <span m='75378'>set</span> <span m='75831'>of</span> <span
  m='76285'>about</span> <span m='76739'>100</span> <span
  m='77192'>million</span> <span m='77646'>user</span> <span
  m='78100'>ratings</span> <span m='78513'>and</span> <span m='78927'>a</span>
  <span m='79340'>test</span> <span m='79754'>data</span> <span
  m='80168'>set</span> <span m='80581'>of</span> <span m='80995'>about</span>
  <span m='81409'>three</span> <span m='81822'>million</span> <span
  m='82236'>user</span> <span m='82650'>ratings.</span> </p><p><span
  m='84020'>They</span> <span m='84468'>offered</span> <span m='84917'>a</span>
  <span m='85366'>grand</span> <span m='85815'>prize</span> <span
  m='86263'>of</span> <span m='86712'>$1</span> <span m='87161'>million</span>
  <span m='87610'>to</span> <span m='88012'>the</span> <span
  m='88414'>team</span> <span m='88816'>who</span> <span m='89218'>could</span>
  <span m='89621'>beat</span> <span m='90023'>Netflix's</span> <span
  m='90425'>current</span> <span m='90827'>algorithm,</span> <span
  m='91230'>called</span> <span m='91825'>Cinematch,</span> <span
  m='92420'>by</span> <span m='93015'>more</span> <span m='93610'>than</span>
  <span m='94205'>10%</span> <span m='94800'>measured</span> <span
  m='95211'>in</span> <span m='95622'>terms</span> <span m='96033'>of</span>
  <span m='96445'>root</span> <span m='96856'>mean</span> <span
  m='97267'>squared</span> <span m='97678'>error.</span> </p><p><span
  m='98090'>Netflix</span> <span m='98560'>believed</span> <span
  m='99030'>that</span> <span m='99500'>their</span> <span
  m='99970'>recommendation</span> <span m='100440'>system</span> <span
  m='100910'>was</span> <span m='101214'>so</span> <span
  m='101518'>valuable</span> <span m='101822'>that</span> <span
  m='102126'>it</span> <span m='102430'>was</span> <span m='102734'>worth</span>
  <span m='103038'>a</span> <span m='103342'>million</span> <span
  m='103646'>dollars</span> <span m='103950'>to</span> <span
  m='105150'>improve.</span> </p><p><span m='106350'>The</span> <span
  m='106704'>contest</span> <span m='107059'>had</span> <span
  m='107414'>a</span> <span m='107769'>few</span> <span m='108124'>rules.</span>
  </p><p><span m='108479'>One</span> <span m='108814'>with</span> <span
  m='109150'>that</span> <span m='109485'>if</span> <span m='109821'>the</span>
  <span m='110156'>grand</span> <span m='110492'>prize</span> <span
  m='110827'>was</span> <span m='111163'>not</span> <span m='111498'>yet</span>
  <span m='111834'>reached,</span> <span m='112170'>progress</span> <span
  m='112731'>prizes</span> <span m='113293'>of</span> <span
  m='113854'>$50,000</span> <span m='114416'>per</span> <span
  m='114977'>year</span> <span m='115539'>would</span> <span
  m='115826'>be</span> <span m='116113'>awarded</span> <span
  m='116400'>for</span> <span m='116688'>the</span> <span m='116975'>best</span>
  <span m='117262'>results</span> <span m='117550'>so</span> <span
  m='117885'>far,</span> <span m='118220'>as</span> <span m='118555'>long</span>
  <span m='118890'>as</span> <span m='119225'>it</span> <span
  m='119560'>was</span> <span m='119895'>at</span> <span m='120230'>least</span>
  <span m='120565'>a</span> <span m='120900'>1%</span> <span
  m='121235'>improvement</span> <span m='121570'>over</span> <span
  m='122112'>the</span> <span m='122655'>previous</span> <span
  m='123197'>year.</span> </p><p><span m='123740'>Another</span> <span
  m='124070'>rule</span> <span m='124400'>was</span> <span
  m='124730'>that</span> <span m='125060'>teams</span> <span
  m='125390'>must</span> <span m='125720'>submit</span> <span
  m='126050'>their</span> <span m='126390'>code</span> <span
  m='126730'>and</span> <span m='127070'>a</span> <span
  m='127410'>description</span> <span m='127750'>of</span> <span
  m='128090'>the</span> <span m='128430'>algorithm</span> <span
  m='128770'>to</span> <span m='129280'>be</span> <span
  m='129790'>awarded</span> <span m='130300'>any</span> <span
  m='130810'>prizes.</span> </p><p><span m='131320'>And</span> <span
  m='131750'>lastly,</span> <span m='132180'>if</span> <span m='132610'>a</span>
  <span m='133040'>team</span> <span m='133470'>met</span> <span
  m='133900'>the</span> <span m='134330'>10%</span> <span
  m='134760'>improvement</span> <span m='135190'>goal,</span> <span
  m='135620'>a</span> <span m='136010'>last</span> <span m='136400'>call</span>
  <span m='136790'>would</span> <span m='137180'>be</span> <span
  m='137570'>issued,</span> <span m='137960'>and</span> <span
  m='138350'>30</span> <span m='138740'>days</span> <span
  m='139130'>would</span> <span m='139555'>remain</span> <span
  m='139980'>for</span> <span m='140405'>all</span> <span
  m='140830'>teams</span> <span m='141255'>to</span> <span
  m='141680'>submit</span> <span m='142105'>their</span> <span
  m='142530'>best</span> <span m='142955'>algorithm.</span> </p><p><span
  m='143380'>So</span> <span m='143993'>what</span> <span
  m='144606'>happened?</span> </p><p><span m='145220'>The</span> <span
  m='145788'>contest</span> <span m='146357'>went</span> <span
  m='146926'>live</span> <span m='147495'>on</span> <span
  m='148063'>October</span> <span m='148632'>2,</span> <span
  m='149201'>2006.</span> </p><p><span m='149770'>By</span> <span
  m='150202'>October</span> <span m='150634'>8,</span> <span
  m='151066'>only</span> <span m='151498'>six</span> <span
  m='151931'>days</span> <span m='152363'>later,</span> <span
  m='152795'>a</span> <span m='153227'>team</span> <span
  m='153660'>submitted</span> <span m='154191'>an</span> <span
  m='154723'>algorithm</span> <span m='155255'>that</span> <span
  m='155786'>beat</span> <span m='156318'>Cinematch.</span> </p><p><span
  m='156850'>A</span> <span m='157255'>week</span> <span
  m='157661'>later,</span> <span m='158067'>on</span> <span
  m='158472'>October</span> <span m='158878'>15,</span> <span
  m='159284'>there</span> <span m='159690'>were</span> <span
  m='160142'>three</span> <span m='160594'>teams</span> <span
  m='161046'>already</span> <span m='161498'>submitting</span> <span
  m='161950'>algorithms</span> <span m='162683'>beating</span> <span
  m='163416'>Cinematch.</span> </p><p><span m='164150'>One</span> <span
  m='164567'>of</span> <span m='164984'>these</span> <span
  m='165401'>solutions</span> <span m='165818'>beat</span> <span
  m='166235'>Cinematch</span> <span m='166652'>by</span> <span
  m='167069'>more</span> <span m='167486'>than</span> <span
  m='167903'>1%,</span> <span m='168320'>already</span> <span
  m='168890'>qualifying</span> <span m='169460'>for</span> <span
  m='170030'>a</span> <span m='170600'>progress</span> <span
  m='171170'>prize.</span> </p><p><span m='171740'>The</span> <span
  m='172144'>contest</span> <span m='172548'>was</span> <span
  m='172953'>hugely</span> <span m='173357'>popular</span> <span
  m='173762'>all</span> <span m='174166'>over</span> <span m='174571'>the</span>
  <span m='174975'>world.</span> </p><p><span m='175380'>By</span> <span
  m='175900'>June,</span> <span m='176420'>2007,</span> <span
  m='176940'>over</span> <span m='177460'>20,000</span> <span
  m='177980'>teams</span> <span m='178500'>had</span> <span
  m='179020'>registered</span> <span m='179680'>from</span> <span
  m='180340'>over</span> <span m='181000'>150</span> <span
  m='181660'>countries.</span> </p><p><span m='182320'>The</span> <span
  m='182742'>2007</span> <span m='183164'>progress</span> <span
  m='183586'>prize</span> <span m='184008'>went</span> <span
  m='184430'>to</span> <span m='184852'>a</span> <span m='185274'>team</span>
  <span m='185696'>called</span> <span m='186118'>BellKor,</span> <span
  m='186540'>with</span> <span m='187371'>an</span> <span
  m='188203'>8.43%</span> <span m='189035'>improvement</span> <span
  m='189866'>over</span> <span m='190698'>Cinematch.</span> </p><p><span
  m='191530'>The</span> <span m='191913'>following</span> <span
  m='192296'>year,</span> <span m='192680'>several</span> <span
  m='193063'>teams</span> <span m='193446'>from</span> <span
  m='193830'>across</span> <span m='194213'>the</span> <span
  m='194596'>world</span> <span m='194980'>joined</span> <span
  m='195533'>forces</span> <span m='196087'>to</span> <span
  m='196641'>improve</span> <span m='197195'>the</span> <span
  m='197748'>accuracy</span> <span m='198302'>even</span> <span
  m='198856'>further.</span> </p><p><span m='199410'>In</span> <span
  m='199826'>2008,</span> <span m='200243'>the</span> <span
  m='200660'>progress</span> <span m='201077'>prize</span> <span
  m='201494'>again</span> <span m='201911'>went</span> <span
  m='202328'>to</span> <span m='202745'>team</span> <span
  m='203162'>BellKor.</span> </p><p><span m='203579'>But</span> <span
  m='203936'>this</span> <span m='204293'>time,</span> <span
  m='204650'>the</span> <span m='205007'>team</span> <span
  m='205364'>included</span> <span m='205721'>members</span> <span
  m='206079'>from</span> <span m='206499'>the</span> <span
  m='206919'>team</span> <span m='207339'>BigChaos</span> <span
  m='207759'>in</span> <span m='208179'>addition</span> <span
  m='208600'>to</span> <span m='209083'>the</span> <span
  m='209566'>original</span> <span m='210050'>members</span> <span
  m='210533'>of</span> <span m='211016'>BellKor.</span> </p><p><span
  m='211500'>This</span> <span m='211912'>was</span> <span m='212324'>the</span>
  <span m='212736'>last</span> <span m='213148'>progress</span> <span
  m='213560'>prize</span> <span m='213972'>because</span> <span
  m='214384'>another</span> <span m='214796'>1%</span> <span
  m='215208'>improvement</span> <span m='215620'>would</span> <span
  m='216176'>reach</span> <span m='216732'>the</span> <span
  m='217288'>grand</span> <span m='217845'>prize</span> <span
  m='218401'>goal</span> <span m='218957'>of</span> <span m='219513'>10%.</span>
  </p><p><span m='220070'>On</span> <span m='220711'>June</span> <span
  m='221352'>26,</span> <span m='221993'>2009,</span> <span
  m='222634'>the</span> <span m='223275'>team</span> <span
  m='223916'>BellKor's</span> <span m='224557'>Pragmatic</span> <span
  m='225198'>Chaos,</span> <span m='225840'>composed</span> <span
  m='226255'>of</span> <span m='226670'>members</span> <span
  m='227085'>from</span> <span m='227500'>three</span> <span
  m='227915'>different</span> <span m='228330'>original</span> <span
  m='228745'>teams,</span> <span m='229160'>submitted</span> <span
  m='229890'>a</span> <span m='230620'>10.05%</span> <span
  m='231350'>improvement</span> <span m='232080'>over</span> <span
  m='232810'>Cinematch,</span> <span m='233540'>signaling</span> <span
  m='234022'>the</span> <span m='234505'>last</span> <span
  m='234988'>call</span> <span m='235471'>for</span> <span m='235954'>the</span>
  <span m='236437'>contest.</span> </p><p><span m='236920'>Other</span> <span
  m='237338'>teams</span> <span m='237757'>had</span> <span m='238176'>30</span>
  <span m='238595'>days</span> <span m='239013'>to</span> <span
  m='239432'>submit</span> <span m='239851'>algorithms</span> <span
  m='240270'>before</span> <span m='240830'>the</span> <span
  m='241390'>contest</span> <span m='241950'>closed.</span> </p><p><span
  m='242510'>These</span> <span m='242861'>30</span> <span
  m='243212'>days</span> <span m='243563'>were</span> <span
  m='243914'>filled</span> <span m='244265'>with</span> <span
  m='244616'>intense</span> <span m='244967'>competition</span> <span
  m='245318'>and</span> <span m='245669'>even</span> <span
  m='246020'>more</span> <span m='246745'>progress.</span> </p><p><span
  m='247470'>But</span> <span m='247950'>before</span> <span
  m='248430'>revealing</span> <span m='248910'>what</span> <span
  m='249390'>happened,</span> <span m='249870'>let's</span> <span
  m='250250'>investigate</span> <span m='250630'>how</span> <span
  m='251010'>we</span> <span m='251390'>could</span> <span m='251770'>try</span>
  <span m='252150'>to</span> <span m='252530'>predict</span> <span
  m='252910'>user</span> <span m='253290'>ratings.</span> </p><p><span
  m='253670'>In</span> <span m='254101'>the</span> <span m='254532'>next</span>
  <span m='254963'>video,</span> <span m='255394'>we'll</span> <span
  m='255825'>discuss</span> <span m='256256'>how</span> <span
  m='256687'>recommendation</span> <span m='257118'>systems</span> <span
  m='257550'>generally</span> <span m='258560'>work.</span> </p>
embedded_media:
  - uid: e4a4dd23640d318e8a0bc296e77ab2b1
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: WTuwV-rWxUc
  - uid: b36827d8d6d47a081b638e1225392ac8
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: WTuwV-rWxUc
  - uid: 50a4674d98481a52b1167a8930429a8d
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/WTuwV-rWxUc/default.jpg'
  - uid: 738bc630d8dbfff51aea798fbd92d931
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: WTuwV-rWxUc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-1-introduction-to-netflix-0/WTuwV-rWxUc.srt
  - uid: 1d53e0ed6fd229fc52592b00641d32af
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: WTuwV-rWxUc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-1-introduction-to-netflix-0/WTuwV-rWxUc.pdf
  - uid: 36a9b3edc6c4aca5d2bfb9beaa58b763
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: fe5523c5dfb0f2703ae9228abdc34210
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: caffce421f9702ac8f916640e560d885
    parent_uid: da5550ffe197c76e29367d90b0747760
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.2.01_300k.mp4
type: courses
layout: video
---
