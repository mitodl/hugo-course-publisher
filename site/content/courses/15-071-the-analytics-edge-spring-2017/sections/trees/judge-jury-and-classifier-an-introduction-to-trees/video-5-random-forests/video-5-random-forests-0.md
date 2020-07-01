---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ykiTs5MipJU
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: Video-YouTube-Stream
    type: Video
    uid: 125760400a0cc2488252bc38075585a4
  - id: 3Play-3Play YouTube id-Stream
    media_location: ykiTs5MipJU
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 09f1d12bfdf532b9cb4b90e56716d247
  - id: ykiTs5MipJU.srt
    parent_uid: 192445d3c87575029cd760d454ff78e8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests/video-5-random-forests-0/ykiTs5MipJU.srt
    title: 3play caption file
    type: null
    uid: 213b137d9cf0d186fbebd229e819f4e3
  - id: ykiTs5MipJU.pdf
    parent_uid: 192445d3c87575029cd760d454ff78e8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests/video-5-random-forests-0/ykiTs5MipJU.pdf
    title: 3play pdf file
    type: null
    uid: 3972443d98c5361adb9e032f7c5a884b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 35ed6cb61d9eb755db7d89b4963f3091
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1f54f111e0370cd8bff3e3c214b7f75d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ykiTs5MipJU/default.jpg'
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 44ad307fe40c292c55558cc2223e5804
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.2.09_300k.mp4
    parent_uid: 192445d3c87575029cd760d454ff78e8
    title: Video-Internet Archive-MP4
    type: Video
    uid: db61458c758264a699b5353c548aeacb
inline_embed_id: 6184241video5randomforests81389673
order_index: 811
parent_uid: d818f0620c7e3cee943507c440503537
related_resources_text: ''
short_url: video-5-random-forests-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-5-random-forests/video-5-random-forests-0
title: 'Video 5: Random Forests'
transcript: >-
  <p><span m='4500'>In</span> <span m='4834'>this</span> <span
  m='5168'>video,</span> <span m='5502'>we'll</span> <span
  m='5837'>introduce</span> <span m='6171'>a</span> <span m='6505'>method</span>
  <span m='6840'>that</span> <span m='7328'>is</span> <span
  m='7817'>similar</span> <span m='8306'>to</span> <span m='8795'>CART</span>
  <span m='9283'>called</span> <span m='9772'>Random</span> <span
  m='10261'>Forests.</span> </p><p><span m='10750'>This</span> <span
  m='11125'>method</span> <span m='11501'>was</span> <span
  m='11876'>designed</span> <span m='12252'>to</span> <span
  m='12627'>improve</span> <span m='13003'>the</span> <span
  m='13378'>prediction</span> <span m='13754'>accuracy</span> <span
  m='14130'>of</span> <span m='14545'>CART</span> <span m='14960'>and</span>
  <span m='15375'>works</span> <span m='15790'>by</span> <span
  m='16205'>building</span> <span m='16620'>a</span> <span
  m='17035'>large</span> <span m='17450'>number</span> <span m='17865'>of</span>
  <span m='18280'>CART</span> <span m='18695'>trees.</span> </p><p><span
  m='19110'>Unfortunately,</span> <span m='19526'>this</span> <span
  m='19942'>makes</span> <span m='20358'>the</span> <span
  m='20774'>method</span> <span m='21190'>less</span> <span
  m='21610'>interpretable</span> <span m='22030'>than</span> <span
  m='22450'>CART,</span> <span m='22870'>so</span> <span m='23290'>often</span>
  <span m='23710'>you</span> <span m='24130'>need</span> <span
  m='24502'>to</span> <span m='24875'>decide</span> <span m='25247'>if</span>
  <span m='25620'>you</span> <span m='25992'>value</span> <span
  m='26365'>the</span> <span m='26737'>interpretability</span> <span
  m='27110'>or</span> <span m='27661'>the</span> <span m='28213'>increase</span>
  <span m='28765'>in</span> <span m='29316'>accuracy</span> <span
  m='29868'>more.</span> </p><p><span m='30420'>To</span> <span
  m='30773'>make</span> <span m='31126'>a</span> <span
  m='31479'>prediction</span> <span m='31832'>for</span> <span
  m='32185'>a</span> <span m='32538'>new</span> <span
  m='32891'>observation,</span> <span m='33244'>each</span> <span
  m='33597'>tree</span> <span m='33950'>in</span> <span m='34340'>the</span>
  <span m='34730'>forest</span> <span m='35120'>votes</span> <span
  m='35510'>on</span> <span m='35900'>the</span> <span m='36290'>outcome</span>
  <span m='36680'>and</span> <span m='36928'>we</span> <span
  m='37177'>pick</span> <span m='37425'>the</span> <span
  m='37674'>outcome</span> <span m='37922'>that</span> <span
  m='38171'>receives</span> <span m='38420'>the</span> <span
  m='39064'>majority</span> <span m='39708'>of</span> <span m='40352'>the</span>
  <span m='40996'>votes.</span> </p><p><span m='41640'>So</span> <span
  m='42066'>how</span> <span m='42493'>does</span> <span m='42920'>Random</span>
  <span m='43346'>Forests</span> <span m='43773'>build</span> <span
  m='44200'>many</span> <span m='44626'>CART</span> <span
  m='45053'>trees?</span> </p><p><span m='45480'>We</span> <span
  m='45857'>can't</span> <span m='46234'>just</span> <span m='46611'>run</span>
  <span m='46988'>CART</span> <span m='47365'>multiple</span> <span
  m='47742'>times</span> <span m='48120'>because</span> <span
  m='48511'>it</span> <span m='48902'>would</span> <span m='49293'>create</span>
  <span m='49684'>the</span> <span m='50075'>same</span> <span
  m='50466'>tree</span> <span m='50857'>every</span> <span
  m='51248'>time.</span> </p><p><span m='51640'>To</span> <span
  m='52088'>prevent</span> <span m='52536'>this,</span> <span
  m='52985'>Random</span> <span m='53433'>Forests</span> <span
  m='53881'>only</span> <span m='54330'>allows</span> <span
  m='54743'>each</span> <span m='55156'>tree</span> <span m='55570'>to</span>
  <span m='55983'>split</span> <span m='56396'>on</span> <span
  m='56810'>a</span> <span m='57223'>random</span> <span m='57636'>subset</span>
  <span m='58050'>of</span> <span m='58598'>the</span> <span
  m='59146'>available</span> <span m='59694'>independent</span> <span
  m='60242'>variables.</span> </p><p><span m='60790'>And</span> <span
  m='61058'>each</span> <span m='61327'>tree</span> <span m='61596'>is</span>
  <span m='61865'>built</span> <span m='62133'>from</span> <span
  m='62402'>what</span> <span m='62671'>we</span> <span m='62940'>call</span>
  <span m='63420'>a</span> <span m='63900'>bagged</span> <span
  m='64380'>or</span> <span m='64860'>bootstrapped</span> <span
  m='65340'>sample</span> <span m='65820'>of</span> <span m='66300'>the</span>
  <span m='66780'>data.</span> </p><p><span m='67260'>This</span> <span
  m='67524'>just</span> <span m='67788'>means</span> <span m='68052'>that</span>
  <span m='68317'>the</span> <span m='68581'>data</span> <span
  m='68845'>used</span> <span m='69110'>as</span> <span m='69417'>the</span>
  <span m='69724'>training</span> <span m='70031'>data</span> <span
  m='70338'>for</span> <span m='70645'>each</span> <span m='70952'>tree</span>
  <span m='71260'>is</span> <span m='71888'>selected</span> <span
  m='72516'>randomly</span> <span m='73144'>with</span> <span
  m='73772'>replacement.</span> </p><p><span m='74400'>Let's</span> <span
  m='74808'>look</span> <span m='75216'>at</span> <span m='75624'>an</span>
  <span m='76032'>example.</span> </p><p><span m='76440'>Suppose</span> <span
  m='76708'>we</span> <span m='76976'>have</span> <span m='77244'>five</span>
  <span m='77512'>data</span> <span m='77780'>points</span> <span
  m='78048'>in</span> <span m='78316'>our</span> <span m='78584'>training</span>
  <span m='78852'>set.</span> </p><p><span m='79120'>We'll</span> <span
  m='79538'>call</span> <span m='79957'>them</span> <span m='80376'>1,</span>
  <span m='80795'>2,</span> <span m='81214'>3,</span> <span m='81633'>4,</span>
  <span m='82052'>and</span> <span m='82471'>5.</span> </p><p><span
  m='82890'>For</span> <span m='83278'>the</span> <span m='83666'>first</span>
  <span m='84055'>tree,</span> <span m='84443'>we'll</span> <span
  m='84831'>randomly</span> <span m='85220'>pick</span> <span
  m='85808'>five</span> <span m='86397'>data</span> <span
  m='86986'>points</span> <span m='87575'>randomly</span> <span
  m='88163'>sampled</span> <span m='88752'>with</span> <span
  m='89341'>replacement.</span> </p><p><span m='89930'>So</span> <span
  m='90540'>the</span> <span m='91151'>data</span> <span m='91762'>could</span>
  <span m='92373'>be</span> <span m='92984'>2,</span> <span m='93595'>4,</span>
  <span m='94206'>5,</span> <span m='94817'>2,</span> <span m='95428'>and</span>
  <span m='96039'>1.</span> </p><p><span m='96650'>Each</span> <span
  m='96898'>time</span> <span m='97147'>we</span> <span m='97396'>pick</span>
  <span m='97645'>one</span> <span m='97894'>of</span> <span
  m='98143'>the</span> <span m='98392'>five</span> <span m='98641'>data</span>
  <span m='98890'>points</span> <span m='99334'>regardless</span> <span
  m='99778'>of</span> <span m='100222'>whether</span> <span m='100666'>or</span>
  <span m='101110'>not</span> <span m='101554'>it's</span> <span
  m='101998'>been</span> <span m='102442'>selected</span> <span
  m='102886'>already.</span> </p><p><span m='103330'>These</span> <span
  m='103614'>would</span> <span m='103898'>be</span> <span m='104182'>the</span>
  <span m='104467'>five</span> <span m='104751'>data</span> <span
  m='105035'>points</span> <span m='105320'>we</span> <span
  m='105787'>use</span> <span m='106255'>when</span> <span
  m='106722'>constructing</span> <span m='107190'>the</span> <span
  m='107657'>first</span> <span m='108125'>CART</span> <span
  m='108592'>tree.</span> </p><p><span m='109060'>Then</span> <span
  m='109431'>we</span> <span m='109802'>repeat</span> <span
  m='110173'>this</span> <span m='110544'>process</span> <span
  m='110915'>for</span> <span m='111286'>the</span> <span
  m='111657'>second</span> <span m='112028'>tree.</span> </p><p><span
  m='112400'>This</span> <span m='112826'>time</span> <span
  m='113253'>the</span> <span m='113680'>data</span> <span m='114107'>set</span>
  <span m='114534'>might</span> <span m='114961'>be</span> <span
  m='115388'>3,</span> <span m='115815'>5,</span> <span m='116242'>1,</span>
  <span m='116669'>5,</span> <span m='117096'>and</span> <span
  m='117523'>2.</span> </p><p><span m='117950'>And</span> <span
  m='118325'>we</span> <span m='118701'>would</span> <span m='119077'>use</span>
  <span m='119453'>this</span> <span m='119829'>data</span> <span
  m='120205'>when</span> <span m='120580'>building</span> <span
  m='120956'>the</span> <span m='121332'>second</span> <span
  m='121708'>CART</span> <span m='122084'>tree.</span> </p><p><span
  m='122460'>Then</span> <span m='122751'>we</span> <span
  m='123043'>would</span> <span m='123335'>repeat</span> <span
  m='123626'>this</span> <span m='123918'>process</span> <span
  m='124210'>for</span> <span m='124663'>each</span> <span
  m='125117'>additional</span> <span m='125571'>tree</span> <span
  m='126025'>we</span> <span m='126478'>want</span> <span m='126932'>to</span>
  <span m='127386'>create.</span> </p><p><span m='127840'>So</span> <span
  m='128170'>since</span> <span m='128500'>each</span> <span
  m='128830'>tree</span> <span m='129160'>sees</span> <span m='129490'>a</span>
  <span m='129820'>different</span> <span m='130150'>set</span> <span
  m='130480'>of</span> <span m='130810'>variables</span> <span
  m='131140'>and</span> <span m='131468'>a</span> <span
  m='131797'>different</span> <span m='132126'>set</span> <span
  m='132455'>of</span> <span m='132783'>data,</span> <span m='133112'>we</span>
  <span m='133441'>get</span> <span m='133770'>what's</span> <span
  m='134387'>called</span> <span m='135005'>a</span> <span
  m='135622'>forest</span> <span m='136240'>of</span> <span
  m='136857'>many</span> <span m='137475'>different</span> <span
  m='138092'>trees.</span> </p><p><span m='138710'>Just</span> <span
  m='139103'>like</span> <span m='139496'>CART,</span> <span
  m='139890'>Random</span> <span m='140283'>Forests</span> <span
  m='140676'>has</span> <span m='141070'>some</span> <span
  m='141463'>parameter</span> <span m='141856'>values</span> <span
  m='142250'>that</span> <span m='142634'>need</span> <span m='143018'>to</span>
  <span m='143402'>be</span> <span m='143786'>selected.</span> </p><p><span
  m='144170'>The</span> <span m='144524'>first</span> <span m='144879'>is</span>
  <span m='145233'>the</span> <span m='145588'>minimum</span> <span
  m='145942'>number</span> <span m='146297'>of</span> <span
  m='146651'>observations</span> <span m='147006'>in</span> <span
  m='147360'>a</span> <span m='147715'>subset,</span> <span m='148070'>or</span>
  <span m='148538'>the</span> <span m='149006'>minbucket</span> <span
  m='149475'>parameter</span> <span m='149943'>from</span> <span
  m='150411'>CART.</span> </p><p><span m='150880'>When</span> <span
  m='151193'>we</span> <span m='151507'>create</span> <span m='151821'>a</span>
  <span m='152135'>random</span> <span m='152448'>forest</span> <span
  m='152762'>in</span> <span m='153076'>R,</span> <span m='153390'>this</span>
  <span m='154048'>will</span> <span m='154706'>be</span> <span
  m='155364'>called</span> <span m='156022'>nodesize.</span> </p><p><span
  m='156680'>A</span> <span m='157067'>smaller</span> <span
  m='157454'>value</span> <span m='157841'>of</span> <span
  m='158228'>nodesize,</span> <span m='158615'>which</span> <span
  m='159002'>leads</span> <span m='159389'>to</span> <span
  m='159776'>bigger</span> <span m='160163'>trees,</span> <span
  m='160550'>may</span> <span m='160990'>take</span> <span
  m='161430'>longer</span> <span m='161870'>in</span> <span m='162310'>R.</span>
  <span m='162750'>Random</span> <span m='163190'>Forests</span> <span
  m='163630'>is</span> <span m='164278'>much</span> <span m='164927'>more</span>
  <span m='165575'>computationally</span> <span m='166224'>intensive</span>
  <span m='166872'>than</span> <span m='167521'>CART.</span> </p><p><span
  m='168170'>The</span> <span m='168494'>second</span> <span
  m='168818'>parameter</span> <span m='169142'>is</span> <span
  m='169466'>the</span> <span m='169790'>number</span> <span
  m='170114'>of</span> <span m='170438'>trees</span> <span m='170762'>to</span>
  <span m='171086'>build,</span> <span m='171410'>which</span> <span
  m='171824'>is</span> <span m='172238'>called</span> <span
  m='172653'>intree</span> <span m='173067'>in</span> <span m='173482'>R.</span>
  <span m='173896'>This</span> <span m='174311'>should</span> <span
  m='174725'>not</span> <span m='175140'>be</span> <span m='175430'>set</span>
  <span m='175721'>too</span> <span m='176012'>small,</span> <span
  m='176302'>but</span> <span m='176593'>the</span> <span
  m='176884'>larger</span> <span m='177175'>it</span> <span m='177465'>is</span>
  <span m='177756'>the</span> <span m='178047'>longer</span> <span
  m='178337'>it</span> <span m='178628'>will</span> <span
  m='178919'>take.</span> </p><p><span m='179210'>A</span> <span
  m='179755'>couple</span> <span m='180301'>hundred</span> <span
  m='180847'>trees</span> <span m='181392'>is</span> <span
  m='181938'>typically</span> <span m='182484'>plenty.</span> </p><p><span
  m='183030'>A</span> <span m='183363'>nice</span> <span m='183696'>thing</span>
  <span m='184030'>about</span> <span m='184363'>Random</span> <span
  m='184696'>Forests</span> <span m='185030'>is</span> <span
  m='185306'>that</span> <span m='185582'>it's</span> <span
  m='185858'>not</span> <span m='186134'>as</span> <span
  m='186410'>sensitive</span> <span m='186686'>to</span> <span
  m='186962'>the</span> <span m='187238'>parameter</span> <span
  m='187514'>values</span> <span m='187790'>as</span> <span
  m='188323'>CART</span> <span m='188856'>is.</span> </p><p><span
  m='189390'>In</span> <span m='189643'>the</span> <span m='189896'>next</span>
  <span m='190149'>video,</span> <span m='190402'>we'll</span> <span
  m='190655'>talk</span> <span m='190908'>about</span> <span m='191161'>a</span>
  <span m='191414'>nice</span> <span m='191667'>way</span> <span
  m='191920'>to</span> <span m='192314'>pick</span> <span m='192708'>the</span>
  <span m='193102'>CART</span> <span m='193496'>parameter.</span> </p><p><span
  m='193890'>For</span> <span m='194194'>Random</span> <span
  m='194499'>Forests,</span> <span m='194803'>as</span> <span
  m='195108'>long</span> <span m='195412'>as</span> <span m='195717'>this</span>
  <span m='196021'>selection</span> <span m='196326'>is</span> <span
  m='196630'>a</span> <span m='196935'>reasonable</span> <span
  m='197240'>it's</span> <span m='198120'>OK.</span> </p><p><span
  m='199000'>Let's</span> <span m='199288'>switch</span> <span
  m='199576'>to</span> <span m='199864'>R</span> <span m='200152'>and</span>
  <span m='200440'>create</span> <span m='200728'>a</span> <span
  m='201016'>Random</span> <span m='201304'>Forest</span> <span
  m='201592'>model</span> <span m='201880'>to</span> <span
  m='202202'>predict</span> <span m='202525'>the</span> <span
  m='202848'>decisions</span> <span m='203171'>of</span> <span
  m='203494'>Justice</span> <span m='203817'>Stevens.</span> </p><p><span
  m='207170'>In</span> <span m='207580'>our</span> <span m='207990'>R</span>
  <span m='208400'>console,</span> <span m='208810'>let's</span> <span
  m='209220'>start</span> <span m='209630'>by</span> <span
  m='210040'>installing</span> <span m='210450'>and</span> <span
  m='210860'>loading</span> <span m='211270'>the</span> <span
  m='212150'>package</span> <span m='213030'>"randomForest."</span> <span
  m='213910'>We</span> <span m='214288'>first</span> <span
  m='214667'>need</span> <span m='215045'>to</span> <span
  m='215424'>install</span> <span m='215802'>the</span> <span
  m='216181'>package</span> <span m='216560'>using</span> <span
  m='217150'>the</span> <span m='217740'>install.packages</span> <span
  m='218330'>function</span> <span m='218920'>for</span> <span
  m='219510'>the</span> <span m='220100'>package</span> <span
  m='220690'>"randomForest."</span> <span m='223980'>You</span> <span
  m='224279'>should</span> <span m='224578'>see</span> <span m='224877'>a</span>
  <span m='225176'>few</span> <span m='225475'>lines</span> <span
  m='225774'>run</span> <span m='226073'>in</span> <span m='226372'>your</span>
  <span m='226671'>R</span> <span m='226970'>console</span> <span
  m='227270'>and</span> <span m='227542'>then</span> <span
  m='227814'>when</span> <span m='228086'>you're</span> <span
  m='228358'>back</span> <span m='228631'>to</span> <span m='228903'>the</span>
  <span m='229175'>blinking</span> <span m='229447'>cursor,</span> <span
  m='229720'>load</span> <span m='230018'>the</span> <span
  m='230317'>package</span> <span m='230615'>with</span> <span
  m='230914'>the</span> <span m='231212'>library</span> <span
  m='231511'>command.</span> </p><p><span m='236240'>Now</span> <span
  m='236604'>we're</span> <span m='236968'>ready</span> <span
  m='237333'>to</span> <span m='237697'>build</span> <span m='238062'>our</span>
  <span m='238426'>Random</span> <span m='238791'>Forests</span> <span
  m='239155'>model.</span> </p><p><span m='239520'>We'll</span> <span
  m='240170'>call</span> <span m='240820'>it</span> <span
  m='241470'>StevensForest</span> <span m='242120'>and</span> <span
  m='242770'>use</span> <span m='243420'>the</span> <span
  m='244070'>randomForest</span> <span m='244720'>function,</span> <span
  m='245370'>first</span> <span m='245830'>giving</span> <span
  m='246290'>our</span> <span m='246750'>dependent</span> <span
  m='247210'>variable,</span> <span m='247670'>Reverse,</span> <span
  m='248168'>followed</span> <span m='248666'>by</span> <span
  m='249165'>a</span> <span m='249663'>tilde</span> <span
  m='250161'>sign,</span> <span m='250660'>and</span> <span
  m='250976'>then</span> <span m='251292'>our</span> <span
  m='251608'>independent</span> <span m='251924'>variable</span> <span
  m='252240'>separated</span> <span m='252780'>by</span> <span
  m='253320'>plus</span> <span m='253860'>signs.</span> </p><p><span
  m='254400'>Circuit.</span> </p><p><span m='255120'>Issue.</span> </p><p><span
  m='256060'>Petitioner.</span> </p><p><span m='257579'>Respondent.</span>
  </p><p><span m='261200'>LowerCourt.</span> </p><p><span m='264550'>And</span>
  <span m='265670'>Unconst.</span> </p><p><span m='266790'>We'll</span> <span
  m='267140'>use</span> <span m='267490'>the</span> <span m='267840'>data</span>
  <span m='268190'>set</span> <span m='268540'>Train.</span> </p><p><span
  m='271440'>For</span> <span m='271802'>Random</span> <span
  m='272164'>Forests</span> <span m='272526'>we</span> <span
  m='272888'>need</span> <span m='273250'>to</span> <span m='273612'>give</span>
  <span m='273974'>two</span> <span m='274336'>additional</span> <span
  m='274698'>arguments.</span> </p><p><span m='275060'>These</span> <span
  m='275595'>are</span> <span m='276131'>nodesize,</span> <span
  m='276666'>also</span> <span m='277202'>known</span> <span
  m='277737'>as</span> <span m='278273'>minbucket</span> <span
  m='278808'>for</span> <span m='279344'>CART,</span> <span
  m='279880'>and</span> <span m='280133'>we'll</span> <span
  m='280387'>set</span> <span m='280640'>this</span> <span
  m='280894'>equal</span> <span m='281148'>to</span> <span m='281401'>25,</span>
  <span m='281655'>the</span> <span m='281909'>same</span> <span
  m='282162'>value</span> <span m='282416'>we</span> <span
  m='282670'>used</span> <span m='283040'>for</span> <span m='283410'>our</span>
  <span m='283780'>CART</span> <span m='284150'>model.</span> </p><p><span
  m='284520'>And</span> <span m='284832'>then</span> <span m='285144'>we</span>
  <span m='285456'>need</span> <span m='285768'>to</span> <span
  m='286081'>set</span> <span m='286393'>the</span> <span
  m='286705'>parameter</span> <span m='287017'>ntree.</span> </p><p><span
  m='287330'>This</span> <span m='287600'>is</span> <span m='287870'>the</span>
  <span m='288140'>number</span> <span m='288410'>of</span> <span
  m='288680'>trees</span> <span m='288950'>to</span> <span
  m='289220'>build.</span> </p><p><span m='289490'>And</span> <span
  m='289955'>we'll</span> <span m='290420'>build</span> <span
  m='290885'>200</span> <span m='291350'>trees</span> <span
  m='291815'>here.</span> </p><p><span m='292280'>Then</span> <span
  m='293003'>hit</span> <span m='293726'>Enter.</span> </p><p><span
  m='294450'>You</span> <span m='294838'>should</span> <span
  m='295227'>see</span> <span m='295616'>an</span> <span
  m='296005'>interesting</span> <span m='296393'>warning</span> <span
  m='296782'>message</span> <span m='297171'>here.</span> </p><p><span
  m='297560'>In</span> <span m='298097'>CART,</span> <span m='298634'>we</span>
  <span m='299171'>added</span> <span m='299708'>the</span> <span
  m='300245'>argument</span> <span m='300782'>method="class",</span> <span
  m='301320'>so</span> <span m='301657'>that</span> <span m='301994'>it</span>
  <span m='302331'>was</span> <span m='302669'>clear</span> <span
  m='303006'>that</span> <span m='303343'>we're</span> <span
  m='303680'>doing</span> <span m='304018'>a</span> <span
  m='304355'>classification</span> <span m='304692'>problem.</span> </p><p><span
  m='305030'>As</span> <span m='305365'>I</span> <span
  m='305701'>mentioned</span> <span m='306037'>earlier,</span> <span
  m='306372'>trees</span> <span m='306708'>can</span> <span
  m='307044'>also</span> <span m='307380'>be</span> <span m='307723'>used</span>
  <span m='308066'>for</span> <span m='308410'>regression</span> <span
  m='308753'>problems,</span> <span m='309096'>which</span> <span
  m='309440'>you'll</span> <span m='309846'>see</span> <span
  m='310252'>in</span> <span m='310658'>the</span> <span
  m='311064'>recitation.</span> </p><p><span m='311470'>The</span> <span
  m='311852'>Random</span> <span m='312234'>Forest</span> <span
  m='312616'>function</span> <span m='312998'>does</span> <span
  m='313380'>not</span> <span m='313762'>have</span> <span m='314144'>a</span>
  <span m='314526'>method</span> <span m='314908'>argument.</span> </p><p><span
  m='315290'>So</span> <span m='315604'>when</span> <span m='315918'>we</span>
  <span m='316233'>want</span> <span m='316547'>to</span> <span
  m='316862'>do</span> <span m='317176'>a</span> <span
  m='317491'>classification</span> <span m='317805'>problem,</span> <span
  m='318120'>we</span> <span m='318467'>need</span> <span m='318815'>to</span>
  <span m='319163'>make</span> <span m='319511'>sure</span> <span
  m='319858'>outcome</span> <span m='320206'>is</span> <span m='320554'>a</span>
  <span m='320902'>factor.</span> </p><p><span m='321250'>Let's</span> <span
  m='321662'>convert</span> <span m='322074'>the</span> <span
  m='322486'>variable</span> <span m='322898'>Reverse</span> <span
  m='323311'>to</span> <span m='323723'>a</span> <span m='324135'>factor</span>
  <span m='324547'>variable</span> <span m='324960'>in</span> <span
  m='325362'>both</span> <span m='325765'>our</span> <span
  m='326167'>training</span> <span m='326570'>and</span> <span
  m='326972'>our</span> <span m='327375'>testing</span> <span
  m='327777'>sets.</span> </p><p><span m='328180'>We</span> <span
  m='328449'>do</span> <span m='328718'>this</span> <span m='328987'>by</span>
  <span m='329256'>typing</span> <span m='329525'>the</span> <span
  m='329795'>name</span> <span m='330064'>of</span> <span m='330333'>the</span>
  <span m='330602'>variable</span> <span m='330871'>we</span> <span
  m='331140'>want</span> <span m='331410'>to</span> <span
  m='332001'>convert--</span> <span m='332593'>in</span> <span
  m='333185'>our</span> <span m='333776'>case</span> <span
  m='334368'>Train$Reverse--</span> <span m='334960'>and</span> <span
  m='335524'>then</span> <span m='336088'>type</span> <span
  m='336652'>as.factor</span> <span m='337216'>and</span> <span
  m='337780'>then</span> <span m='338344'>in</span> <span
  m='338908'>parentheses</span> <span m='339472'>the</span> <span
  m='340036'>variable</span> <span m='340600'>name,</span> <span
  m='342090'>Train$Reverse.</span> </p><p><span m='343580'>And</span> <span
  m='343877'>just</span> <span m='344174'>repeat</span> <span
  m='344471'>this</span> <span m='344768'>for</span> <span m='345065'>the</span>
  <span m='345362'>test</span> <span m='345659'>set</span> <span
  m='345956'>as</span> <span m='346253'>well.</span> </p><p><span
  m='346550'>Test$Reverse=as.factor(Test$Reverse)</span> <span
  m='355200'>Now</span> <span m='355588'>let's</span> <span
  m='355977'>try</span> <span m='356366'>creating</span> <span
  m='356755'>our</span> <span m='357143'>Random</span> <span
  m='357532'>Forest</span> <span m='357921'>again.</span> </p><p><span
  m='358310'>Just</span> <span m='358551'>use</span> <span m='358793'>the</span>
  <span m='359034'>up</span> <span m='359276'>arrow</span> <span
  m='359517'>to</span> <span m='359759'>get</span> <span m='360000'>back</span>
  <span m='360242'>to</span> <span m='360483'>the</span> <span
  m='360725'>Random</span> <span m='360966'>Forest</span> <span
  m='361208'>line</span> <span m='361450'>and</span> <span m='361920'>hit</span>
  <span m='362390'>Enter.</span> </p><p><span m='362860'>We</span> <span
  m='363140'>didn't</span> <span m='363420'>get</span> <span m='363700'>a</span>
  <span m='363980'>warning</span> <span m='364260'>message</span> <span
  m='364540'>this</span> <span m='364820'>time</span> <span m='365100'>so</span>
  <span m='365508'>our</span> <span m='365917'>model</span> <span
  m='366326'>is</span> <span m='366735'>ready</span> <span m='367143'>to</span>
  <span m='367552'>make</span> <span m='367961'>predictions.</span> </p><p><span
  m='368370'>Let's</span> <span m='368787'>compute</span> <span
  m='369204'>predictions</span> <span m='369621'>on</span> <span
  m='370038'>our</span> <span m='370455'>test</span> <span
  m='370872'>set.</span> </p><p><span m='371290'>We'll</span> <span
  m='372008'>call</span> <span m='372727'>our</span> <span
  m='373445'>predictions</span> <span m='374164'>PredictForest</span> <span
  m='374882'>and</span> <span m='375601'>use</span> <span m='376320'>the</span>
  <span m='376730'>predict</span> <span m='377140'>function</span> <span
  m='377550'>to</span> <span m='377960'>make</span> <span
  m='378370'>predictions</span> <span m='378780'>using</span> <span
  m='379190'>our</span> <span m='379600'>model,</span> <span
  m='380010'>StevensForest,</span> <span m='380752'>and</span> <span
  m='381495'>the</span> <span m='382238'>new</span> <span m='382981'>data</span>
  <span m='383724'>set</span> <span m='384467'>Test.</span> </p><p><span
  m='388260'>Let's</span> <span m='388652'>look</span> <span
  m='389044'>at</span> <span m='389436'>the</span> <span
  m='389828'>confusion</span> <span m='390220'>matrix</span> <span
  m='390612'>to</span> <span m='391004'>compute</span> <span
  m='391396'>our</span> <span m='391788'>accuracy.</span> </p><p><span
  m='392180'>We'll</span> <span m='392577'>use</span> <span
  m='392974'>the</span> <span m='393371'>table</span> <span
  m='393769'>function</span> <span m='394166'>and</span> <span
  m='394563'>first</span> <span m='394960'>give</span> <span
  m='395358'>the</span> <span m='395755'>true</span> <span
  m='396152'>outcome,</span> <span m='396550'>Test$Reverse,</span> <span
  m='397081'>and</span> <span m='397613'>then</span> <span m='398145'>our</span>
  <span m='398676'>predictions,</span> <span m='399208'>PredictForest.</span>
  </p><p><span m='403290'>Our</span> <span m='403774'>accuracy</span> <span
  m='404258'>here</span> <span m='404742'>is</span> <span
  m='405226'>(40+74)/(40+37+19+74).</span> </p><p><span m='416330'>So</span>
  <span m='416813'>the</span> <span m='417297'>accuracy</span> <span
  m='417780'>of</span> <span m='418264'>our</span> <span
  m='418748'>Random</span> <span m='419231'>Forest</span> <span
  m='419715'>model</span> <span m='420199'>is</span> <span
  m='420682'>about</span> <span m='421166'>67%.</span> </p><p><span
  m='421650'>Recall</span> <span m='422012'>that</span> <span
  m='422374'>our</span> <span m='422736'>logistic</span> <span
  m='423098'>regression</span> <span m='423460'>model</span> <span
  m='423937'>had</span> <span m='424414'>an</span> <span
  m='424891'>accuracy</span> <span m='425368'>of</span> <span
  m='425845'>66.5%</span> <span m='426322'>and</span> <span
  m='426799'>our</span> <span m='427276'>CART</span> <span
  m='427753'>model</span> <span m='428230'>had</span> <span m='428908'>an</span>
  <span m='429586'>accuracy</span> <span m='430264'>of</span> <span
  m='430942'>65.9%.</span> </p><p><span m='431620'>So</span> <span
  m='431975'>our</span> <span m='432330'>Random</span> <span
  m='432685'>Forest</span> <span m='433040'>model</span> <span
  m='433395'>improved</span> <span m='433750'>our</span> <span
  m='434105'>accuracy</span> <span m='434460'>a</span> <span
  m='434862'>little</span> <span m='435264'>bit</span> <span
  m='435666'>over</span> <span m='436068'>CART.</span> </p><p><span
  m='436470'>Sometimes</span> <span m='436892'>you'll</span> <span
  m='437315'>see</span> <span m='437737'>a</span> <span
  m='438160'>smaller</span> <span m='438582'>improvement</span> <span
  m='439005'>in</span> <span m='439427'>accuracy</span> <span
  m='439850'>and</span> <span m='440141'>sometimes</span> <span
  m='440432'>you'll</span> <span m='440723'>see</span> <span
  m='441015'>that</span> <span m='441306'>Random</span> <span
  m='441597'>Forests</span> <span m='441888'>can</span> <span
  m='442180'>significantly</span> <span m='442698'>improve</span> <span
  m='443216'>in</span> <span m='443735'>accuracy</span> <span
  m='444253'>over</span> <span m='444771'>CART.</span> </p><p><span
  m='445290'>We'll</span> <span m='445550'>see</span> <span
  m='445810'>this</span> <span m='446070'>a</span> <span m='446330'>lot</span>
  <span m='446590'>in</span> <span m='446850'>the</span> <span
  m='447110'>recitation</span> <span m='447370'>in</span> <span
  m='447630'>the</span> <span m='447890'>homework</span> <span
  m='448150'>assignments.</span> </p><p><span m='450010'>Keep</span> <span
  m='450403'>in</span> <span m='450796'>mind</span> <span m='451189'>that</span>
  <span m='451582'>Random</span> <span m='451975'>Forests</span> <span
  m='452368'>has</span> <span m='452761'>a</span> <span m='453154'>random</span>
  <span m='453547'>component.</span> </p><p><span m='453940'>You</span> <span
  m='454253'>may</span> <span m='454566'>have</span> <span
  m='454879'>gotten</span> <span m='455192'>a</span> <span
  m='455505'>different</span> <span m='455818'>confusion</span> <span
  m='456131'>matrix</span> <span m='456444'>than</span> <span
  m='456757'>me</span> <span m='457070'>because</span> <span
  m='457491'>there's</span> <span m='457912'>a</span> <span
  m='458333'>random</span> <span m='458755'>component</span> <span
  m='459176'>to</span> <span m='459597'>this</span> <span
  m='460018'>method.</span> </p>
uid: 192445d3c87575029cd760d454ff78e8
type: courses
layout: video
---
