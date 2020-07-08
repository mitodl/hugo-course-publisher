---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2rnsbodsJVc
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: Video-YouTube-Stream
    type: Video
    uid: f73e31e863ad7f58f06e8b4c8385af7e
  - id: 3Play-3Play YouTube id-Stream
    media_location: 2rnsbodsJVc
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9665bb61f3d394d25cf21db802717132
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2rnsbodsJVc/default.jpg'
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7c264916cae2446f5494c7c3c1936cd3
  - id: 2rnsbodsJVc.srt
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-5-world-maps-in-r/video-5-world-maps-in-r-0/2rnsbodsJVc.srt
    title: 3play caption file
    type: null
    uid: ab1aa3660be1898bba56c69bd87cb311
  - id: 2rnsbodsJVc.pdf
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-5-world-maps-in-r/video-5-world-maps-in-r-0/2rnsbodsJVc.pdf
    title: 3play pdf file
    type: null
    uid: 81b9e8f033d1e989be43b21b3957e188
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bcb7a78237dbe39f5153cfe27625535d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 14ba93356ff88d70d5ab7d4e6e5257f9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_7.4.06_300k.mp4
    parent_uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8e0d633df65dbc1075b88d502b5f1433
inline_embed_id: 85414628video5worldmapsinr69789641
order_index: 1747
parent_uid: 3ba39db4a883d8dbc319e06abeaa21a5
related_resources_text: ''
short_url: video-5-world-maps-in-r-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-5-world-maps-in-r/video-5-world-maps-in-r-0
title: 'Video 5: World Maps in R'
transcript: >-
  <p><span m='4500'>So</span> <span m='4698'>now</span> <span
  m='4897'>we're</span> <span m='5096'>going</span> <span m='5295'>to</span>
  <span m='5494'>try</span> <span m='5693'>plotting</span> <span
  m='5892'>a</span> <span m='6091'>world</span> <span m='6290'>map</span> <span
  m='6542'>with</span> <span m='6794'>a</span> <span m='7046'>new</span> <span
  m='7298'>data</span> <span m='7550'>set</span> <span m='7802'>that</span>
  <span m='8054'>has</span> <span m='8306'>the</span> <span
  m='8558'>number</span> <span m='8810'>of</span> <span
  m='9271'>international</span> <span m='9733'>students</span> <span
  m='10195'>from</span> <span m='10656'>each</span> <span
  m='11118'>country.</span> </p><p><span m='11580'>So</span> <span
  m='11767'>first</span> <span m='11955'>of</span> <span m='12142'>all,</span>
  <span m='12330'>we're</span> <span m='12517'>going</span> <span
  m='12705'>to</span> <span m='12892'>need</span> <span m='13080'>to</span>
  <span m='13397'>use</span> <span m='13714'>the</span> <span
  m='14031'>ggmap</span> <span m='14349'>package,</span> <span
  m='14666'>which</span> <span m='14983'>you</span> <span m='15300'>may</span>
  <span m='15618'>need</span> <span m='15935'>to</span> <span
  m='16252'>install.</span> </p><p><span m='19940'>And</span> <span
  m='20123'>we're</span> <span m='20307'>going</span> <span m='20491'>to</span>
  <span m='20675'>load</span> <span m='20858'>in</span> <span
  m='21042'>the</span> <span m='21226'>data</span> <span m='21410'>set,</span>
  <span m='21684'>which</span> <span m='21958'>is</span> <span
  m='22232'>called</span> <span m='22506'>intlall.csv.</span> </p><p><span
  m='26530'>So</span> <span m='27050'>read.csv(intlall.csv).</span> </p><p><span
  m='31410'>And</span> <span m='32270'>I'm</span> <span m='33130'>going</span>
  <span m='33990'>to</span> <span m='34850'>do</span> <span
  m='35710'>stringsAsFactors</span> <span m='36570'>=</span> <span
  m='37430'>FALSE.</span> </p><p><span m='38290'>OK?</span> </p><p><span
  m='38790'>Let's</span> <span m='39202'>look</span> <span m='39614'>at</span>
  <span m='40026'>the</span> <span m='40438'>first</span> <span
  m='40851'>few</span> <span m='41263'>rows</span> <span m='41675'>of</span>
  <span m='42087'>intlall.</span> </p><p><span m='45800'>So</span> <span
  m='46141'>you</span> <span m='46482'>see</span> <span m='46823'>that</span>
  <span m='47164'>each</span> <span m='47505'>row</span> <span
  m='47846'>corresponds</span> <span m='48187'>to</span> <span
  m='48528'>a</span> <span m='48869'>country.</span> </p><p><span
  m='49210'>There's</span> <span m='49638'>a</span> <span
  m='50066'>citizenship</span> <span m='50494'>column</span> <span
  m='50922'>that's</span> <span m='51350'>the</span> <span
  m='51797'>country</span> <span m='52244'>name,</span> <span
  m='52691'>number</span> <span m='53138'>of</span> <span
  m='53585'>undergraduates,</span> <span m='54032'>number</span> <span
  m='54480'>of</span> <span m='55101'>graduates,</span> <span
  m='55723'>special</span> <span m='56345'>undergraduates</span> <span
  m='56966'>and</span> <span m='57588'>graduates,</span> <span
  m='58210'>exchange</span> <span m='58698'>or</span> <span
  m='59187'>visiting,</span> <span m='59675'>and</span> <span m='60164'>a</span>
  <span m='60652'>total</span> <span m='61141'>column.</span> </p><p><span
  m='61630'>Now</span> <span m='61871'>there's</span> <span
  m='62113'>these</span> <span m='62355'>NAs</span> <span m='62597'>in</span>
  <span m='62839'>here,</span> <span m='63080'>but</span> <span
  m='63322'>they're</span> <span m='63564'>not</span> <span
  m='63806'>really</span> <span m='64048'>NAs.</span> </p><p><span
  m='64290'>They're</span> <span m='64703'>just</span> <span
  m='65116'>0's.</span> </p><p><span m='65530'>So</span> <span
  m='65837'>what</span> <span m='66145'>we're</span> <span
  m='66452'>going</span> <span m='66760'>to</span> <span m='67067'>do</span>
  <span m='67375'>is</span> <span m='67682'>say,</span> <span
  m='67990'>all</span> <span m='68414'>these</span> <span m='68839'>NAs</span>
  <span m='69264'>should</span> <span m='69689'>be</span> <span
  m='70114'>0's.</span> </p><p><span m='70539'>So</span> <span
  m='72050'>in</span> <span m='73561'>intlall,</span> <span m='75072'>all</span>
  <span m='76583'>entries</span> <span m='78094'>that</span> <span
  m='79605'>are</span> <span m='81116'>NA,</span> <span m='82627'>should</span>
  <span m='84138'>be</span> <span m='85649'>0.</span> </p><p><span
  m='87160'>And</span> <span m='87360'>let's</span> <span m='87560'>look</span>
  <span m='87760'>at</span> <span m='87960'>the</span> <span
  m='88160'>first</span> <span m='88360'>few</span> <span m='88560'>rows</span>
  <span m='88760'>again.</span> </p><p><span m='92820'>OK.</span> </p><p><span
  m='93320'>Much</span> <span m='94250'>better.</span> </p><p><span
  m='95180'>Right,</span> <span m='95514'>so</span> <span m='95848'>next</span>
  <span m='96182'>step</span> <span m='96516'>is</span> <span
  m='96850'>to</span> <span m='97184'>load</span> <span m='97518'>the</span>
  <span m='97852'>world</span> <span m='98186'>map.</span> </p><p><span
  m='98520'>So</span> <span m='99318'>let's</span> <span m='100117'>call</span>
  <span m='100915'>it</span> <span m='101714'>world_map</span> <span
  m='102512'>=</span> <span m='103311'>map_data("world").</span> </p><p><span
  m='110070'>We</span> <span m='110431'>did</span> <span
  m='110793'>something</span> <span m='111155'>similar</span> <span
  m='111517'>in</span> <span m='111879'>the</span> <span
  m='112240'>lecture</span> <span m='112602'>with</span> <span
  m='112964'>the</span> <span m='113326'>state</span> <span
  m='113688'>data.</span> </p><p><span m='114050'>So</span> <span
  m='114534'>let's</span> <span m='115018'>look</span> <span
  m='115503'>at</span> <span m='115987'>the</span> <span
  m='116472'>structure</span> <span m='116956'>of</span> <span
  m='117441'>the</span> <span m='117925'>world_map.</span> </p><p><span
  m='118410'>So</span> <span m='118843'>the</span> <span m='119276'>first</span>
  <span m='119709'>two</span> <span m='120142'>columns</span> <span
  m='120575'>are</span> <span m='121008'>the</span> <span
  m='121441'>longitude</span> <span m='121874'>and</span> <span
  m='122307'>latitude;</span> <span m='122740'>third</span> <span
  m='123187'>column</span> <span m='123634'>is</span> <span
  m='124081'>something</span> <span m='124528'>called</span> <span
  m='124975'>group</span> <span m='125422'>--</span> <span
  m='125870'>that's</span> <span m='126128'>actually</span> <span
  m='126387'>a</span> <span m='126645'>group</span> <span m='126904'>for</span>
  <span m='127162'>each</span> <span m='127421'>country,</span> <span
  m='127680'>using</span> <span m='128133'>a</span> <span
  m='128587'>different</span> <span m='129041'>number</span> <span
  m='129495'>for</span> <span m='129948'>each</span> <span
  m='130402'>country;</span> <span m='130856'>order,</span> <span
  m='131310'>we'll</span> <span m='131668'>get</span> <span m='132026'>to</span>
  <span m='132384'>that</span> <span m='132742'>later;</span> <span
  m='133100'>region</span> <span m='133459'>is</span> <span
  m='133817'>just</span> <span m='134175'>the</span> <span
  m='134533'>country</span> <span m='134891'>name,</span> <span
  m='135250'>and</span> <span m='135660'>subregion</span> <span
  m='136070'>is</span> <span m='136480'>sometimes</span> <span
  m='136890'>used</span> <span m='137300'>for</span> <span
  m='137710'>some</span> <span m='138120'>countries</span> <span
  m='138530'>to</span> <span m='138940'>describe</span> <span
  m='139350'>islands</span> <span m='140108'>and</span> <span
  m='140866'>other</span> <span m='141625'>things</span> <span
  m='142383'>like</span> <span m='143141'>that.</span> </p><p><span
  m='143900'>So</span> <span m='144431'>we</span> <span m='144962'>want</span>
  <span m='145493'>to</span> <span m='146025'>shove</span> <span
  m='146556'>the</span> <span m='147087'>world_map</span> <span
  m='147618'>data</span> <span m='148150'>frame</span> <span
  m='148475'>and</span> <span m='148800'>the</span> <span
  m='149125'>intlall</span> <span m='149450'>data</span> <span
  m='149775'>frame</span> <span m='150100'>into</span> <span
  m='150425'>one</span> <span m='150750'>data</span> <span
  m='151075'>frame,</span> <span m='151400'>so</span> <span m='151748'>we</span>
  <span m='152097'>can</span> <span m='152445'>use</span> <span
  m='152794'>it</span> <span m='153142'>for</span> <span
  m='153491'>ggplot.</span> </p><p><span m='153840'>So</span> <span
  m='154967'>let's</span> <span m='156094'>say</span> <span
  m='157221'>world_map</span> <span m='158349'>is</span> <span
  m='159476'>a</span> <span m='160603'>merge</span> <span m='161730'>of</span>
  <span m='162858'>world_map</span> <span m='163985'>and</span> <span
  m='165112'>intlall.</span> </p><p><span m='166240'>Now,</span> <span
  m='166536'>in</span> <span m='166833'>world_map,</span> <span
  m='167130'>the</span> <span m='167426'>country</span> <span
  m='167723'>name</span> <span m='168020'>is</span> <span m='168509'>just</span>
  <span m='168998'>called</span> <span m='169487'>region,</span> <span
  m='169976'>as</span> <span m='170465'>you</span> <span m='170954'>can</span>
  <span m='171443'>see</span> <span m='171932'>right</span> <span
  m='172421'>here.</span> </p><p><span m='172910'>And</span> <span
  m='173385'>in</span> <span m='173861'>the</span> <span
  m='174337'>intlall,</span> <span m='174812'>the</span> <span
  m='175288'>country</span> <span m='175764'>name</span> <span
  m='176240'>is</span> <span m='176797'>actually</span> <span
  m='177355'>called</span> <span m='177912'>Citizenship.</span> </p><p><span
  m='184510'>OK.</span> </p><p><span m='185430'>So</span> <span
  m='185663'>let's</span> <span m='185897'>look</span> <span
  m='186131'>at</span> <span m='186365'>the</span> <span
  m='186598'>structure</span> <span m='186832'>of</span> <span
  m='187066'>world_map</span> <span m='187300'>just</span> <span
  m='187802'>to</span> <span m='188305'>make</span> <span m='188808'>sure</span>
  <span m='189311'>it</span> <span m='189814'>makes</span> <span
  m='190317'>sense.</span> </p><p><span m='190820'>Looks</span> <span
  m='191560'>good.</span> </p><p><span m='192300'>OK.</span> </p><p><span
  m='193360'>So</span> <span m='193813'>to</span> <span m='194266'>plot</span>
  <span m='194719'>a</span> <span m='195172'>map,</span> <span
  m='195625'>we</span> <span m='196078'>use</span> <span m='196531'>the</span>
  <span m='196984'>geom_polygon</span> <span m='197437'>geometry.</span>
  </p><p><span m='197890'>So</span> <span m='198229'>start</span> <span
  m='198568'>off</span> <span m='198907'>ggplot(world_map,</span> <span
  m='199246'>aes(x</span> <span m='199585'>=</span> <span
  m='199924'>long,</span> <span m='200263'>y</span> <span m='200602'>=</span>
  <span m='200941'>lat,</span> <span m='201280'>group</span> <span
  m='201503'>=</span> <span m='201726'>group)).</span> </p><p><span
  m='218700'>We</span> <span m='219072'>want</span> <span m='219445'>to</span>
  <span m='219817'>use</span> <span m='220190'>geom_polygon</span> <span
  m='220562'>as</span> <span m='220935'>the</span> <span
  m='221307'>geometry.</span> </p><p><span m='227350'>Countries</span> <span
  m='227585'>will</span> <span m='227821'>be</span> <span
  m='228057'>filled</span> <span m='228292'>in</span> <span m='228528'>in</span>
  <span m='228764'>white,</span> <span m='229000'>and</span> <span
  m='229701'>their</span> <span m='230402'>borders</span> <span
  m='231104'>will</span> <span m='231805'>be</span> <span m='232507'>in</span>
  <span m='233208'>black.</span> </p><p><span m='237270'>And</span> <span
  m='237885'>we'll</span> <span m='238500'>use</span> <span m='239115'>a</span>
  <span m='239730'>Mercator</span> <span m='240345'>projection.</span>
  </p><p><span m='240960'>There's</span> <span m='241173'>a</span> <span
  m='241386'>few</span> <span m='241600'>other</span> <span
  m='241813'>options</span> <span m='242026'>in</span> <span
  m='242240'>there,</span> <span m='242453'>as</span> <span
  m='242666'>well.</span> </p><p><span m='247560'>OK.</span> </p><p><span
  m='248310'>So</span> <span m='248592'>that</span> <span
  m='248874'>looks</span> <span m='249156'>kind</span> <span
  m='249438'>of</span> <span m='249721'>like</span> <span m='250003'>a</span>
  <span m='250285'>world</span> <span m='250567'>map.</span> </p><p><span
  m='250850'>There's</span> <span m='251200'>a</span> <span
  m='251550'>few</span> <span m='251900'>things</span> <span
  m='252250'>going</span> <span m='252600'>on</span> <span
  m='252950'>here.</span> </p><p><span m='253300'>So</span> <span
  m='253502'>first</span> <span m='253705'>of</span> <span
  m='253908'>all,</span> <span m='254111'>all</span> <span m='254314'>the</span>
  <span m='254517'>countries</span> <span m='254720'>look</span> <span
  m='255304'>like</span> <span m='255888'>big</span> <span
  m='256472'>black</span> <span m='257056'>blobs.</span> </p><p><span
  m='257640'>What</span> <span m='258014'>on</span> <span
  m='258388'>earth</span> <span m='258763'>is</span> <span
  m='259137'>going</span> <span m='259512'>on,</span> <span
  m='259886'>you</span> <span m='260261'>might</span> <span
  m='260635'>say.</span> </p><p><span m='261010'>Well,</span> <span
  m='261550'>sometimes</span> <span m='262090'>the</span> <span
  m='262630'>merge</span> <span m='263170'>can</span> <span
  m='263710'>reorder</span> <span m='264250'>the</span> <span
  m='264790'>data.</span> </p><p><span m='265330'>And</span> <span
  m='265603'>it</span> <span m='265876'>turns</span> <span m='266150'>out</span>
  <span m='266423'>that</span> <span m='266696'>what</span> <span
  m='266970'>the</span> <span m='267243'>world_map</span> <span
  m='267516'>data</span> <span m='267790'>frame</span> <span
  m='268063'>really</span> <span m='268336'>is</span> <span m='268610'>is</span>
  <span m='268934'>actually</span> <span m='269258'>a</span> <span
  m='269583'>list</span> <span m='269907'>of</span> <span
  m='270232'>latitude</span> <span m='270556'>and</span> <span
  m='270881'>longitude</span> <span m='271205'>points</span> <span
  m='271530'>that</span> <span m='271952'>define</span> <span
  m='272375'>the</span> <span m='272798'>border</span> <span
  m='273221'>of</span> <span m='273644'>each</span> <span
  m='274067'>country.</span> </p><p><span m='274490'>So</span> <span
  m='274886'>if</span> <span m='275282'>we</span> <span
  m='275678'>accidentally</span> <span m='276074'>reorder</span> <span
  m='276470'>our</span> <span m='276866'>data</span> <span
  m='277262'>frame</span> <span m='277659'>they</span> <span
  m='277975'>no</span> <span m='278292'>longer</span> <span
  m='278609'>make</span> <span m='278926'>any</span> <span
  m='279243'>sense.</span> </p><p><span m='279560'>And</span> <span
  m='279746'>as</span> <span m='279932'>it</span> <span m='280118'>goes</span>
  <span m='280305'>from</span> <span m='280491'>point</span> <span
  m='280677'>to</span> <span m='280863'>point,</span> <span
  m='281050'>the</span> <span m='281246'>points</span> <span
  m='281442'>might</span> <span m='281639'>be</span> <span m='281835'>on</span>
  <span m='282031'>the</span> <span m='282228'>other</span> <span
  m='282424'>side</span> <span m='282620'>of</span> <span m='282817'>the</span>
  <span m='283013'>country</span> <span m='283210'>as</span> <span
  m='283548'>it</span> <span m='283886'>defines</span> <span
  m='284224'>the</span> <span m='284562'>polygon.</span> </p><p><span
  m='284900'>So,</span> <span m='285336'>we</span> <span m='285772'>have</span>
  <span m='286209'>to</span> <span m='286645'>reorder</span> <span
  m='287081'>the</span> <span m='287518'>data</span> <span m='287954'>in</span>
  <span m='288390'>the</span> <span m='288827'>correct</span> <span
  m='289263'>order.</span> </p><p><span m='289700'>So</span> <span
  m='290073'>this</span> <span m='290446'>command</span> <span
  m='290820'>is</span> <span m='291193'>a</span> <span m='291566'>little</span>
  <span m='291940'>bit</span> <span m='292313'>complicated</span> <span
  m='292686'>looking,</span> <span m='293060'>but</span> <span
  m='293342'>when</span> <span m='293624'>you</span> <span
  m='293906'>break</span> <span m='294188'>it</span> <span
  m='294470'>down,</span> <span m='294752'>it's</span> <span
  m='295034'>not</span> <span m='295316'>so</span> <span m='295598'>bad.</span>
  </p><p><span m='295880'>So,</span> <span m='296331'>we</span> <span
  m='296783'>take</span> <span m='297235'>the</span> <span
  m='297687'>world_map,</span> <span m='298139'>and</span> <span
  m='298590'>we're</span> <span m='299042'>going</span> <span
  m='299494'>to</span> <span m='299946'>reorder</span> <span
  m='300398'>it.</span> </p><p><span m='300850'>So</span> <span
  m='301327'>world_map,</span> <span m='301805'>we're</span> <span
  m='302282'>going</span> <span m='302760'>to</span> <span
  m='303237'>reorder</span> <span m='303715'>the</span> <span
  m='304192'>rows.</span> </p><p><span m='304670'>We're</span> <span
  m='304983'>going</span> <span m='305296'>to</span> <span
  m='305610'>order</span> <span m='305923'>the</span> <span
  m='306236'>rows</span> <span m='306550'>based</span> <span
  m='306863'>on,</span> <span m='307176'>first</span> <span m='307490'>of</span>
  <span m='307975'>all,</span> <span m='308460'>the</span> <span
  m='308945'>group,</span> <span m='309430'>which</span> <span
  m='309915'>is</span> <span m='310400'>pretty</span> <span
  m='310885'>much</span> <span m='311370'>equivalent</span> <span
  m='312002'>to</span> <span m='312634'>the</span> <span
  m='313266'>country,</span> <span m='313898'>and</span> <span
  m='314530'>then</span> <span m='315162'>the</span> <span
  m='315794'>order</span> <span m='316426'>variable,</span> <span
  m='317058'>which</span> <span m='317690'>is</span> <span
  m='318136'>just</span> <span m='318583'>the</span> <span
  m='319030'>correct</span> <span m='319476'>order</span> <span
  m='319923'>for</span> <span m='320370'>the</span> <span
  m='320816'>border</span> <span m='321263'>points.</span> </p><p><span
  m='321710'>And</span> <span m='322090'>we're</span> <span
  m='322470'>going</span> <span m='322850'>to</span> <span
  m='323230'>take</span> <span m='323610'>all</span> <span m='323990'>the</span>
  <span m='324370'>columns,</span> <span m='324750'>of</span> <span
  m='325130'>course.</span> </p><p><span m='325510'>Done.</span> </p><p><span
  m='326280'>So</span> <span m='326756'>if</span> <span m='327233'>we</span>
  <span m='327710'>go</span> <span m='328186'>and</span> <span
  m='328663'>try</span> <span m='329140'>plotting</span> <span
  m='329616'>it</span> <span m='330093'>again</span> <span m='330570'>--</span>
  <span m='331046'>so</span> <span m='331523'>ggplot--</span> <span
  m='332000'>I</span> <span m='332312'>guess</span> <span m='332625'>I</span>
  <span m='332938'>should</span> <span m='333251'>go</span> <span
  m='333564'>up,</span> <span m='333877'>up.</span> </p><p><span
  m='334190'>There</span> <span m='334790'>we</span> <span m='335390'>go,</span>
  <span m='335990'>much</span> <span m='336590'>easier.</span> </p><p><span
  m='337190'>Right,</span> <span m='337492'>so</span> <span
  m='337794'>now</span> <span m='338096'>we</span> <span m='338398'>have</span>
  <span m='338700'>the</span> <span m='339002'>map,</span> <span
  m='339304'>and</span> <span m='339606'>it</span> <span m='339909'>looks</span>
  <span m='340421'>far</span> <span m='340934'>more</span> <span
  m='341447'>reasonable.</span> </p><p><span m='341960'>OK,</span> <span
  m='342653'>next</span> <span m='343346'>problem.</span> </p><p><span
  m='344040'>Some</span> <span m='344433'>of</span> <span m='344826'>the</span>
  <span m='345220'>countries</span> <span m='345613'>are</span> <span
  m='346006'>missing.</span> </p><p><span m='346400'>Now</span> <span
  m='346792'>of</span> <span m='347185'>course,</span> <span
  m='347578'>the</span> <span m='347971'>USA</span> <span m='348364'>is</span>
  <span m='348757'>missing</span> <span m='349150'>because</span> <span
  m='349422'>MIT</span> <span m='349695'>is</span> <span m='349967'>in</span>
  <span m='350240'>the</span> <span m='350512'>USA,</span> <span
  m='350785'>so</span> <span m='351057'>that</span> <span
  m='351330'>wouldn't</span> <span m='352013'>be</span> <span
  m='352696'>an</span> <span m='353380'>international</span> <span
  m='354063'>student</span> <span m='354746'>coming</span> <span
  m='355430'>from</span> <span m='356113'>the</span> <span
  m='356796'>USA.</span> </p><p><span m='357480'>And</span> <span
  m='357852'>some</span> <span m='358225'>parts</span> <span
  m='358597'>of</span> <span m='358970'>Africa</span> <span
  m='359342'>are</span> <span m='359715'>missing,</span> <span
  m='360087'>presumably</span> <span m='360460'>because</span> <span
  m='360737'>there</span> <span m='361015'>are</span> <span m='361293'>no</span>
  <span m='361571'>students</span> <span m='361848'>at</span> <span
  m='362126'>MIT</span> <span m='362404'>right</span> <span
  m='362682'>now</span> <span m='362960'>who</span> <span m='363492'>are</span>
  <span m='364024'>from</span> <span m='364556'>those</span> <span
  m='365088'>countries.</span> </p><p><span m='365620'>But</span> <span
  m='365977'>you'll</span> <span m='366335'>also</span> <span
  m='366692'>notice</span> <span m='367050'>that</span> <span
  m='367407'>Russia</span> <span m='367765'>is</span> <span
  m='368122'>missing,</span> <span m='368480'>and</span> <span
  m='368922'>a</span> <span m='369365'>lot</span> <span m='369808'>of</span>
  <span m='370250'>countries</span> <span m='370693'>near</span> <span
  m='371136'>it,</span> <span m='371579'>as</span> <span m='372021'>well</span>
  <span m='372464'>as</span> <span m='372907'>China.</span> </p><p><span
  m='373350'>Which</span> <span m='373577'>is</span> <span
  m='373804'>definitely</span> <span m='374031'>not</span> <span
  m='374258'>true</span> <span m='374485'>because</span> <span
  m='374712'>I</span> <span m='374940'>have</span> <span m='375401'>many</span>
  <span m='375863'>friends</span> <span m='376325'>at</span> <span
  m='376787'>MIT</span> <span m='377249'>who</span> <span m='377710'>are</span>
  <span m='378172'>from</span> <span m='378634'>Russia</span> <span
  m='379096'>and</span> <span m='379558'>China.</span> </p><p><span
  m='380020'>So,</span> <span m='380590'>what</span> <span m='381160'>do</span>
  <span m='381730'>we</span> <span m='382300'>do</span> <span
  m='382870'>about</span> <span m='383440'>that?</span> </p><p><span
  m='384010'>The</span> <span m='384336'>reason</span> <span
  m='384662'>China</span> <span m='384988'>is</span> <span
  m='385315'>missing</span> <span m='385641'>is</span> <span
  m='385967'>that</span> <span m='386293'>it</span> <span m='386620'>has</span>
  <span m='386983'>a</span> <span m='387346'>different</span> <span
  m='387710'>name</span> <span m='388073'>in</span> <span m='388436'>the</span>
  <span m='388800'>MIT</span> <span m='389163'>data</span> <span
  m='389526'>frame</span> <span m='389890'>than</span> <span
  m='390195'>in</span> <span m='390500'>the</span> <span
  m='390805'>world_map</span> <span m='391110'>data</span> <span
  m='391415'>frame.</span> </p><p><span m='391720'>So</span> <span
  m='391990'>when</span> <span m='392260'>we</span> <span
  m='392530'>merged</span> <span m='392800'>them,</span> <span
  m='393070'>it</span> <span m='393340'>was</span> <span
  m='393610'>dropped</span> <span m='393880'>from</span> <span
  m='394250'>the</span> <span m='394620'>data</span> <span m='394990'>set</span>
  <span m='395360'>because</span> <span m='395730'>it</span> <span
  m='396100'>didn't</span> <span m='396470'>match</span> <span
  m='396840'>up.</span> </p><p><span m='397210'>So</span> <span
  m='397837'>to</span> <span m='398464'>see</span> <span m='399091'>what</span>
  <span m='399719'>it's</span> <span m='400346'>called</span> <span
  m='400973'>in</span> <span m='401600'>the</span> <span m='402228'>MIT</span>
  <span m='402855'>data</span> <span m='403482'>frame,</span> <span
  m='404110'>let's</span> <span m='404380'>just</span> <span
  m='404650'>do</span> <span m='404920'>a</span> <span m='405190'>table.</span>
  </p><p><span m='405460'>There's</span> <span m='405818'>a</span> <span
  m='406176'>few</span> <span m='406535'>ways</span> <span m='406893'>to</span>
  <span m='407251'>do</span> <span m='407610'>this,</span> <span
  m='407968'>but</span> <span m='408326'>this</span> <span m='408685'>is</span>
  <span m='409043'>pretty</span> <span m='409401'>easy.</span> </p><p><span
  m='409760'>OK,</span> <span m='409924'>so</span> <span m='410089'>we</span>
  <span m='410254'>get</span> <span m='410419'>a</span> <span
  m='410584'>list</span> <span m='410749'>of</span> <span m='410914'>all</span>
  <span m='411079'>the</span> <span m='411244'>names.</span> </p><p><span
  m='414270'>If</span> <span m='414548'>we</span> <span m='414827'>scroll</span>
  <span m='415106'>all</span> <span m='415385'>the</span> <span
  m='415663'>way</span> <span m='415942'>up,</span> <span
  m='416221'>we'll</span> <span m='416500'>see</span> <span m='417102'>it</span>
  <span m='417705'>says</span> <span m='418308'>"China</span> <span
  m='418911'>(People's</span> <span m='419514'>Republic</span> <span
  m='420117'>Of)".</span> </p><p><span m='420720'>Now,</span> <span
  m='421315'>in</span> <span m='421910'>the</span> <span
  m='422505'>world_map</span> <span m='423100'>data</span> <span
  m='423695'>frame,</span> <span m='424290'>it's</span> <span
  m='424617'>simply</span> <span m='424945'>called</span> <span
  m='425272'>"China".</span> </p><p><span m='428360'>So,</span> <span
  m='428847'>what</span> <span m='429334'>we</span> <span m='429821'>can</span>
  <span m='430309'>do</span> <span m='430796'>is</span> <span
  m='431283'>change</span> <span m='431770'>the</span> <span
  m='432258'>MIT</span> <span m='432745'>data</span> <span
  m='433232'>frame.</span> </p><p><span m='433720'>So</span> <span
  m='434819'>let's</span> <span m='435918'>say</span> <span
  m='437017'>the</span> <span m='438116'>citizenship</span> <span
  m='439215'>column,</span> <span m='440314'>the</span> <span
  m='441413'>one</span> <span m='442512'>row</span> <span
  m='443611'>where</span> <span m='444710'>it</span> <span
  m='445641'>equals</span> <span m='446573'>"China</span> <span
  m='447505'>(People's</span> <span m='448436'>Republic</span> <span
  m='449368'>Of)"</span> <span m='450300'>should</span> <span
  m='451770'>just</span> <span m='453240'>be</span> <span
  m='454710'>"China".</span> </p><p><span m='456180'>OK,</span> <span
  m='457016'>let's</span> <span m='457853'>check.</span> </p><p><span
  m='458690'>Do</span> <span m='459195'>the</span> <span m='459700'>table</span>
  <span m='460205'>again.</span> </p><p><span m='460710'>Scroll</span> <span
  m='461114'>all</span> <span m='461518'>the</span> <span m='461922'>way</span>
  <span m='462326'>up.</span> </p><p><span m='465950'>There</span> <span
  m='466455'>it</span> <span m='466960'>is,</span> <span
  m='467465'>China.</span> </p><p><span m='467970'>So</span> <span
  m='468215'>we've</span> <span m='468460'>fixed</span> <span
  m='468705'>that.</span> </p><p><span m='468950'>So</span> <span
  m='469520'>now</span> <span m='470091'>the</span> <span m='470662'>MIT</span>
  <span m='471233'>data</span> <span m='471804'>frame</span> <span
  m='472375'>is</span> <span m='472946'>consistent</span> <span
  m='473517'>with</span> <span m='474088'>the</span> <span
  m='474659'>world_map</span> <span m='475230'>data</span> <span
  m='476050'>frame.</span> </p><p><span m='476870'>So</span> <span
  m='477210'>now</span> <span m='477550'>we</span> <span m='477890'>have</span>
  <span m='478230'>to</span> <span m='478570'>go</span> <span
  m='478910'>through</span> <span m='479250'>the</span> <span
  m='479590'>merge</span> <span m='479930'>again.</span> </p><p><span
  m='480270'>So</span> <span m='481225'>let's</span> <span m='482181'>say</span>
  <span m='483137'>world_map</span> <span m='484092'>is</span> <span
  m='485048'>a</span> <span m='486004'>merge</span> <span m='486960'>of</span>
  <span m='487723'>a</span> <span m='488486'>fresh</span> <span
  m='489249'>copy</span> <span m='490012'>of</span> <span m='490775'>the</span>
  <span m='491538'>map_data,</span> <span m='492301'>the</span> <span
  m='493064'>intlall</span> <span m='493827'>data</span> <span
  m='494590'>frame</span> <span m='494910'>with</span> <span
  m='495230'>China</span> <span m='495550'>fixed.</span> </p><p><span
  m='498800'>It's</span> <span m='499587'>called</span> <span
  m='500374'>region</span> <span m='501161'>in</span> <span
  m='501948'>the</span> <span m='502735'>world_map</span> <span
  m='503522'>data,</span> <span m='504310'>and</span> <span
  m='505207'>it's</span> <span m='506105'>called</span> <span
  m='507002'>Citizenship</span> <span m='507900'>in</span> <span
  m='508797'>the</span> <span m='509695'>MIT</span> <span
  m='510592'>data.</span> </p><p><span m='511490'>Alright,</span> <span
  m='511985'>now</span> <span m='512481'>we</span> <span m='512976'>need</span>
  <span m='513472'>to</span> <span m='513967'>do</span> <span
  m='514463'>the</span> <span m='514958'>reordering</span> <span
  m='515454'>again.</span> </p><p><span m='515950'>So</span> <span
  m='516513'>press</span> <span m='517076'>up</span> <span m='517639'>a</span>
  <span m='518202'>few</span> <span m='518765'>times</span> <span
  m='519328'>until</span> <span m='519891'>we</span> <span
  m='520454'>find</span> <span m='521017'>it.</span> </p><p><span
  m='521580'>There</span> <span m='521763'>it</span> <span
  m='521946'>was.</span> </p><p><span m='522130'>So</span> <span
  m='522920'>there's</span> <span m='523710'>the</span> <span
  m='524500'>reordering</span> <span m='525290'>command.</span> </p><p><span
  m='526080'>OK.</span> </p><p><span m='526580'>And</span> <span
  m='526782'>we</span> <span m='526985'>should</span> <span m='527187'>be</span>
  <span m='527390'>good</span> <span m='527592'>to</span> <span
  m='527795'>go,</span> <span m='527997'>now.</span> </p><p><span
  m='528200'>So</span> <span m='528588'>let's</span> <span m='528976'>try</span>
  <span m='529364'>plotting</span> <span m='529752'>it.</span> </p><p><span
  m='530140'>So</span> <span m='531100'>ggplot,</span> <span
  m='532060'>the</span> <span m='533020'>world_map</span> <span
  m='533980'>data</span> <span m='534940'>frame.</span> </p><p><span
  m='535900'>The</span> <span m='536294'>aesthetic,</span> <span
  m='536688'>x</span> <span m='537082'>is</span> <span m='537476'>the</span>
  <span m='537870'>longitude,</span> <span m='538264'>y</span> <span
  m='538658'>is</span> <span m='539052'>the</span> <span
  m='539446'>latitude.</span> </p><p><span m='539840'>We</span> <span
  m='540268'>need</span> <span m='540696'>to</span> <span
  m='541125'>group</span> <span m='541553'>countries</span> <span
  m='541981'>together,</span> <span m='542410'>so</span> <span
  m='542945'>it</span> <span m='543480'>doesn't</span> <span
  m='544015'>all</span> <span m='544550'>crisscross</span> <span
  m='545085'>over</span> <span m='545620'>the</span> <span
  m='546155'>map.</span> </p><p><span m='546690'>We're</span> <span
  m='547310'>going</span> <span m='547930'>to</span> <span m='548550'>use</span>
  <span m='549170'>geom_polygon</span> <span m='549790'>again.</span>
  </p><p><span m='550410'>This</span> <span m='550672'>time</span> <span
  m='550935'>though,</span> <span m='551198'>let's</span> <span
  m='551461'>actually</span> <span m='551724'>fill</span> <span
  m='551987'>them</span> <span m='552250'>with</span> <span m='552490'>a</span>
  <span m='552730'>color</span> <span m='552970'>that's</span> <span
  m='553210'>proportional</span> <span m='553450'>to</span> <span
  m='553690'>the</span> <span m='553930'>total</span> <span
  m='554170'>number</span> <span m='554410'>of</span> <span
  m='555180'>students.</span> </p><p><span m='555950'>We'll</span> <span
  m='556237'>still</span> <span m='556524'>outline</span> <span
  m='556811'>them</span> <span m='557098'>in</span> <span
  m='557385'>black,</span> <span m='557672'>though.</span> </p><p><span
  m='561110'>And</span> <span m='561481'>we'll</span> <span
  m='561853'>use</span> <span m='562225'>the</span> <span
  m='562596'>Mercator</span> <span m='562968'>projection.</span> </p><p><span
  m='569430'>Much</span> <span m='570310'>better.</span> </p><p><span
  m='571190'>So</span> <span m='571432'>Russia</span> <span m='571675'>is</span>
  <span m='571918'>missing</span> <span m='572161'>for</span> <span
  m='572404'>similar</span> <span m='572647'>reasons,</span> <span
  m='572890'>but</span> <span m='573088'>we</span> <span m='573286'>won't</span>
  <span m='573485'>deal</span> <span m='573683'>with</span> <span
  m='573881'>that</span> <span m='574080'>now</span> <span
  m='574278'>because</span> <span m='574476'>it's</span> <span
  m='574675'>a</span> <span m='574873'>little</span> <span m='575071'>bit</span>
  <span m='575270'>annoying.</span> </p><p><span m='575910'>But</span> <span
  m='576520'>you</span> <span m='577130'>get</span> <span m='577740'>the</span>
  <span m='578350'>idea.</span> </p><p><span m='578960'>This</span> <span
  m='579340'>is</span> <span m='579720'>pretty</span> <span
  m='580100'>interesting</span> <span m='580480'>actually.</span> </p><p><span
  m='580860'>So</span> <span m='581477'>we</span> <span m='582094'>can</span>
  <span m='582711'>see</span> <span m='583329'>that</span> <span
  m='583946'>Canada,</span> <span m='584563'>and</span> <span
  m='585180'>China,</span> <span m='585798'>and</span> <span
  m='586415'>India</span> <span m='587032'>supply</span> <span
  m='587650'>a</span> <span m='588252'>large</span> <span
  m='588855'>number</span> <span m='589457'>of</span> <span
  m='590060'>international</span> <span m='590662'>students</span> <span
  m='591265'>to</span> <span m='591867'>MIT.</span> </p><p><span
  m='592470'>But</span> <span m='592732'>it</span> <span m='592994'>is</span>
  <span m='593256'>a</span> <span m='593518'>little</span> <span
  m='593781'>bit</span> <span m='594043'>confusing</span> <span
  m='594305'>doing</span> <span m='594567'>it</span> <span m='594830'>on</span>
  <span m='595213'>a</span> <span m='595597'>per</span> <span
  m='595981'>country</span> <span m='596365'>basis,</span> <span
  m='596748'>because</span> <span m='597132'>Europe,</span> <span
  m='597516'>presumably,</span> <span m='597900'>has</span> <span
  m='598284'>quite</span> <span m='598668'>a</span> <span m='599052'>few</span>
  <span m='599437'>students</span> <span m='599821'>at</span> <span
  m='600205'>MIT.</span> </p><p><span m='600590'>But</span> <span
  m='600846'>because</span> <span m='601102'>Europe</span> <span
  m='601358'>is</span> <span m='601614'>made</span> <span m='601870'>up</span>
  <span m='602126'>of</span> <span m='602382'>many</span> <span
  m='602638'>small</span> <span m='602894'>countries,</span> <span
  m='603150'>it</span> <span m='603602'>doesn't</span> <span
  m='604054'>look</span> <span m='604506'>very</span> <span
  m='604958'>impressive.</span> </p><p><span m='605410'>Maybe</span> <span
  m='605665'>if</span> <span m='605920'>all</span> <span m='606175'>the</span>
  <span m='606430'>European</span> <span m='606685'>countries</span> <span
  m='606940'>were</span> <span m='607188'>grouped</span> <span
  m='607436'>together,</span> <span m='607685'>it</span> <span
  m='607933'>would</span> <span m='608181'>look</span> <span
  m='608430'>about</span> <span m='608780'>the</span> <span
  m='609130'>same</span> <span m='609480'>color</span> <span
  m='609830'>as</span> <span m='610180'>Canada.</span> </p><p><span
  m='610530'>But</span> <span m='611172'>it's</span> <span
  m='611814'>hard</span> <span m='612456'>to</span> <span
  m='613098'>tell.</span> </p><p><span m='613740'>There</span> <span
  m='613968'>are</span> <span m='614197'>also</span> <span
  m='614426'>other</span> <span m='614655'>projections</span> <span
  m='614884'>we</span> <span m='615113'>can</span> <span m='615342'>look</span>
  <span m='615571'>at.</span> </p><p><span m='615800'>So</span> <span
  m='616173'>this</span> <span m='616546'>is</span> <span m='616920'>a</span>
  <span m='617293'>Mercator</span> <span m='617666'>projection.</span>
  </p><p><span m='618040'>What</span> <span m='618301'>I</span> <span
  m='618563'>want</span> <span m='618825'>to</span> <span m='619087'>show</span>
  <span m='619349'>you</span> <span m='619610'>is</span> <span
  m='619872'>an</span> <span m='620134'>orthographic</span> <span
  m='620396'>projection</span> <span m='620658'>that</span> <span
  m='620920'>allows</span> <span m='621165'>you</span> <span
  m='621410'>to</span> <span m='621656'>sort</span> <span m='621901'>of</span>
  <span m='622146'>view</span> <span m='622392'>the</span> <span
  m='622637'>map</span> <span m='622883'>in</span> <span m='623128'>3D,</span>
  <span m='623373'>like</span> <span m='623619'>a</span> <span
  m='623864'>globe.</span> </p><p><span m='624110'>So</span> <span
  m='624718'>let's</span> <span m='625326'>try</span> <span
  m='625934'>that</span> <span m='626542'>out.</span> </p><p><span
  m='627150'>ggplot,</span> <span m='628208'>world_map,</span> <span
  m='629266'>aesthetics</span> <span m='630325'>are</span> <span
  m='631383'>the</span> <span m='632441'>same.</span> </p><p><span
  m='639710'>Actually,</span> <span m='640023'>let</span> <span
  m='640337'>me</span> <span m='640651'>do</span> <span m='640965'>this</span>
  <span m='641278'>the</span> <span m='641592'>right</span> <span
  m='641906'>way.</span> </p><p><span m='642220'>I'll</span> <span
  m='642677'>just</span> <span m='643135'>press</span> <span
  m='643592'>up.</span> </p><p><span m='644050'>OK.</span> </p><p><span
  m='645080'>Let's</span> <span m='645800'>change</span> <span
  m='646520'>it</span> <span m='647240'>to</span> <span
  m='647960'>orthographic</span> <span m='648680'>projection.</span>
  </p><p><span m='649400'>And</span> <span m='649851'>I</span> <span
  m='650302'>want</span> <span m='650753'>to</span> <span
  m='651205'>find,</span> <span m='651656'>now,</span> <span
  m='652107'>an</span> <span m='652558'>orientation.</span> </p><p><span
  m='653010'>And</span> <span m='653268'>this</span> <span m='653526'>is</span>
  <span m='653784'>almost</span> <span m='654042'>like</span> <span
  m='654300'>thinking</span> <span m='654559'>about</span> <span
  m='654817'>where</span> <span m='655075'>in</span> <span m='655333'>the</span>
  <span m='655591'>world</span> <span m='655850'>you</span> <span
  m='656256'>want</span> <span m='656662'>to</span> <span
  m='657068'>focus</span> <span m='657474'>on.</span> </p><p><span
  m='657880'>So</span> <span m='658261'>this</span> <span m='658642'>is</span>
  <span m='659023'>a</span> <span m='659404'>latitude</span> <span
  m='659785'>and</span> <span m='660166'>longitude,</span> <span
  m='660547'>20</span> <span m='660928'>degrees</span> <span
  m='661310'>and</span> <span m='661896'>30</span> <span
  m='662483'>degrees.</span> </p><p><span m='663070'>If</span> <span
  m='663535'>we</span> <span m='664001'>run</span> <span m='664466'>this,</span>
  <span m='664932'>we</span> <span m='665397'>should</span> <span
  m='665863'>get</span> <span m='666328'>a</span> <span m='666794'>map</span>
  <span m='667260'>centered</span> <span m='668197'>above</span> <span
  m='669135'>North</span> <span m='670072'>Africa.</span> </p><p><span
  m='671010'>That's</span> <span m='671354'>quite</span> <span
  m='671698'>a</span> <span m='672042'>nice</span> <span
  m='672386'>visualization</span> <span m='672730'>because</span> <span
  m='673030'>if</span> <span m='673330'>you</span> <span m='673630'>want</span>
  <span m='673930'>to</span> <span m='674230'>look</span> <span
  m='674530'>just</span> <span m='674830'>at</span> <span
  m='675130'>Africa</span> <span m='675430'>and</span> <span
  m='675730'>Europe,</span> <span m='676030'>this</span> <span
  m='676306'>is</span> <span m='676583'>the</span> <span m='676860'>way</span>
  <span m='677136'>to</span> <span m='677413'>go.</span> </p><p><span
  m='677690'>We</span> <span m='677900'>can</span> <span m='678110'>still</span>
  <span m='678320'>see</span> <span m='678530'>China,</span> <span
  m='678740'>and</span> <span m='678950'>Canada,</span> <span
  m='679160'>and</span> <span m='679370'>South</span> <span
  m='679580'>America</span> <span m='680206'>in</span> <span
  m='680832'>there,</span> <span m='681458'>as</span> <span
  m='682084'>well.</span> </p><p><span m='682710'>Let's</span> <span
  m='682976'>do</span> <span m='683242'>something</span> <span
  m='683508'>a</span> <span m='683775'>little</span> <span m='684041'>bit</span>
  <span m='684307'>more</span> <span m='684573'>personal.</span> </p><p><span
  m='684840'>I</span> <span m='685182'>want</span> <span m='685525'>to</span>
  <span m='685868'>change</span> <span m='686211'>the</span> <span
  m='686554'>coordinates,</span> <span m='686897'>now,</span> <span
  m='687240'>to</span> <span m='689142'>-37</span> <span m='691045'>and</span>
  <span m='692947'>175.</span> </p><p><span m='694850'>Now</span> <span
  m='695249'>it's</span> <span m='695648'>centered</span> <span
  m='696047'>on</span> <span m='696446'>my</span> <span
  m='696845'>hometown</span> <span m='697244'>of</span> <span
  m='697643'>Auckland,</span> <span m='698042'>New</span> <span
  m='698441'>Zealand.</span> </p>
uid: 2d0cc6b8f9c36bd7f2c0eae1650a9349
type: courses
layout: video
---
