---
title: 'Video 3: Movie Data and Clustering'
uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
parent_uid: 68624ffad0f7a8c01f23c4a6a20422bb
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering/video-3-movie-data-and-clustering-0
short_url: video-3-movie-data-and-clustering-0
inline_embed_id: 19087978video3moviedataandclustering71895431
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9570'>In</span> <span m='9967'>this</span> <span
  m='10365'>lecture,</span> <span m='10763'>we'll</span> <span
  m='11161'>be</span> <span m='11558'>using</span> <span m='11956'>data</span>
  <span m='12354'>from</span> <span m='12752'>MovieLens</span> <span
  m='13150'>to</span> <span m='13802'>explain</span> <span
  m='14455'>clustering</span> <span m='15108'>and</span> <span
  m='15761'>perform</span> <span m='16414'>content</span> <span
  m='17067'>filtering.</span> </p><p><span m='17720'>movielens.org</span> <span
  m='18383'>is</span> <span m='19046'>a</span> <span m='19710'>movie</span>
  <span m='20373'>recommendation</span> <span m='21036'>website</span> <span
  m='21700'>run</span> <span m='22068'>by</span> <span m='22436'>the</span>
  <span m='22805'>GroupLens</span> <span m='23173'>research</span> <span
  m='23541'>lab</span> <span m='23910'>at</span> <span m='24454'>the</span>
  <span m='24998'>University</span> <span m='25542'>of</span> <span
  m='26086'>Minnesota.</span> </p><p><span m='26630'>They</span> <span
  m='27148'>collect</span> <span m='27666'>user</span> <span
  m='28185'>preferences</span> <span m='28703'>about</span> <span
  m='29221'>movies</span> <span m='29740'>and</span> <span m='30171'>do</span>
  <span m='30602'>collaborative</span> <span m='31033'>filtering</span> <span
  m='31465'>to</span> <span m='31896'>make</span> <span
  m='32327'>recommendations</span> <span m='32759'>to</span> <span
  m='33314'>users,</span> <span m='33869'>based</span> <span m='34424'>on</span>
  <span m='34979'>the</span> <span m='35534'>similarities</span> <span
  m='36089'>between</span> <span m='36644'>users.</span> </p><p><span
  m='37200'>We'll</span> <span m='37637'>use</span> <span m='38075'>their</span>
  <span m='38513'>movie</span> <span m='38951'>database</span> <span
  m='39388'>to</span> <span m='39826'>do</span> <span m='40264'>content</span>
  <span m='40702'>filtering</span> <span m='41140'>using</span> <span
  m='41880'>a</span> <span m='42620'>technique</span> <span
  m='43360'>called</span> <span m='44100'>clustering.</span> </p><p><span
  m='44840'>First,</span> <span m='45320'>let's</span> <span
  m='45800'>discuss</span> <span m='46280'>what</span> <span
  m='46760'>data</span> <span m='47240'>we</span> <span m='47720'>have.</span>
  </p><p><span m='48200'>Movies</span> <span m='48601'>in</span> <span
  m='49002'>the</span> <span m='49403'>MovieLens</span> <span
  m='49805'>data</span> <span m='50206'>set</span> <span m='50607'>are</span>
  <span m='51008'>categorized</span> <span m='51410'>as</span> <span
  m='51922'>belonging</span> <span m='52434'>to</span> <span
  m='52946'>different</span> <span m='53458'>genres.</span> </p><p><span
  m='53970'>There</span> <span m='54426'>are</span> <span m='54882'>18</span>
  <span m='55339'>different</span> <span m='55795'>genres</span> <span
  m='56251'>as</span> <span m='56708'>well</span> <span m='57164'>as</span>
  <span m='57620'>an</span> <span m='58077'>unknown</span> <span
  m='58533'>category.</span> </p><p><span m='58990'>The</span> <span
  m='59700'>genres</span> <span m='60410'>include</span> <span
  m='61120'>crime,</span> <span m='61830'>musical,</span> <span
  m='62540'>mystery,</span> <span m='63250'>and</span> <span
  m='64159'>children's.</span> </p><p><span m='65069'>Each</span> <span
  m='65496'>movie</span> <span m='65924'>may</span> <span
  m='66351'>belong</span> <span m='66779'>to</span> <span m='67207'>many</span>
  <span m='67634'>different</span> <span m='68062'>genres.</span> </p><p><span
  m='68490'>So</span> <span m='68896'>a</span> <span m='69303'>movie</span>
  <span m='69710'>could</span> <span m='70116'>be</span> <span
  m='70523'>classified</span> <span m='70930'>as</span> <span
  m='71336'>drama,</span> <span m='71743'>adventure,</span> <span
  m='72150'>and</span> <span m='73155'>sci-fi.</span> </p><p><span
  m='74160'>The</span> <span m='74611'>question</span> <span m='75062'>we</span>
  <span m='75513'>want</span> <span m='75964'>to</span> <span
  m='76415'>answer</span> <span m='76866'>is,</span> <span m='77317'>can</span>
  <span m='77768'>we</span> <span m='78219'>systematically</span> <span
  m='78670'>find</span> <span m='79174'>groups</span> <span m='79678'>of</span>
  <span m='80183'>movies</span> <span m='80687'>with</span> <span
  m='81192'>similar</span> <span m='81696'>sets</span> <span m='82201'>of</span>
  <span m='82705'>genres?</span> </p><p><span m='83210'>To</span> <span
  m='83657'>answer</span> <span m='84104'>this</span> <span
  m='84551'>question,</span> <span m='84998'>we'll</span> <span
  m='85445'>use</span> <span m='85892'>a</span> <span m='86339'>method</span>
  <span m='86786'>called</span> <span m='87233'>clustering.</span> </p><p><span
  m='87680'>Clustering</span> <span m='88066'>is</span> <span
  m='88452'>different</span> <span m='88838'>from</span> <span
  m='89225'>the</span> <span m='89611'>other</span> <span
  m='89997'>analytics</span> <span m='90383'>methods</span> <span
  m='90770'>we've</span> <span m='91240'>covered</span> <span
  m='91710'>so</span> <span m='92180'>far.</span> </p><p><span
  m='92650'>It's</span> <span m='93370'>called</span> <span m='94090'>an</span>
  <span m='94810'>unsupervised</span> <span m='95530'>learning</span> <span
  m='96250'>method.</span> </p><p><span m='96970'>This</span> <span
  m='97251'>means</span> <span m='97533'>that</span> <span
  m='97815'>we're</span> <span m='98096'>just</span> <span
  m='98378'>trying</span> <span m='98660'>to</span> <span
  m='99050'>segment</span> <span m='99440'>the</span> <span
  m='99830'>data</span> <span m='100220'>into</span> <span
  m='100610'>similar</span> <span m='101000'>groups,</span> <span
  m='101390'>instead</span> <span m='101824'>of</span> <span
  m='102258'>trying</span> <span m='102692'>to</span> <span
  m='103127'>predict</span> <span m='103561'>an</span> <span
  m='103995'>outcome.</span> </p><p><span m='104430'>In</span> <span
  m='104760'>this</span> <span m='105090'>image</span> <span
  m='105420'>on</span> <span m='105750'>the</span> <span
  m='106080'>slide,</span> <span m='106410'>based</span> <span
  m='106740'>on</span> <span m='107120'>the</span> <span
  m='107500'>locations</span> <span m='107880'>of</span> <span
  m='108260'>points,</span> <span m='108640'>we've</span> <span
  m='109020'>divided</span> <span m='109581'>them</span> <span
  m='110142'>into</span> <span m='110703'>three</span> <span
  m='111264'>clusters--</span> <span m='111825'>a</span> <span
  m='112386'>blue</span> <span m='112947'>cluster,</span> <span
  m='113509'>a</span> <span m='114120'>red</span> <span
  m='114731'>cluster,</span> <span m='115343'>and</span> <span
  m='115954'>a</span> <span m='116566'>yellow</span> <span
  m='117177'>cluster.</span> </p><p><span m='117789'>This</span> <span
  m='118098'>is</span> <span m='118407'>the</span> <span m='118716'>goal</span>
  <span m='119025'>of</span> <span m='119334'>clustering--</span> <span
  m='119643'>to</span> <span m='119952'>put</span> <span m='120261'>each</span>
  <span m='120570'>data</span> <span m='120880'>point</span> <span
  m='121376'>into</span> <span m='121872'>a</span> <span m='122368'>group</span>
  <span m='122864'>with</span> <span m='123360'>similar</span> <span
  m='123856'>values</span> <span m='124352'>in</span> <span
  m='124848'>the</span> <span m='125344'>data.</span> </p><p><span
  m='125840'>A</span> <span m='126427'>clustering</span> <span
  m='127014'>algorithm</span> <span m='127601'>does</span> <span
  m='128188'>not</span> <span m='128775'>predict</span> <span
  m='129362'>anything.</span> </p><p><span m='129949'>However,</span> <span
  m='130572'>clustering</span> <span m='131195'>can</span> <span
  m='131819'>be</span> <span m='132442'>used</span> <span m='133066'>to</span>
  <span m='133689'>improve</span> <span m='134313'>predictive</span> <span
  m='134936'>methods.</span> </p><p><span m='135560'>You</span> <span
  m='135972'>can</span> <span m='136385'>cluster</span> <span
  m='136797'>the</span> <span m='137210'>data</span> <span
  m='137622'>into</span> <span m='138035'>similar</span> <span
  m='138447'>groups</span> <span m='138860'>and</span> <span
  m='139254'>then</span> <span m='139648'>build</span> <span m='140043'>a</span>
  <span m='140437'>predictive</span> <span m='140832'>model</span> <span
  m='141226'>for</span> <span m='141621'>each</span> <span
  m='142015'>group.</span> </p><p><span m='142410'>This</span> <span
  m='142898'>can</span> <span m='143387'>often</span> <span
  m='143876'>improve</span> <span m='144365'>the</span> <span
  m='144854'>accuracy</span> <span m='145343'>of</span> <span
  m='145832'>predictive</span> <span m='146321'>methods.</span> </p><p><span
  m='146810'>But</span> <span m='147147'>as</span> <span m='147484'>a</span>
  <span m='147821'>warning,</span> <span m='148159'>be</span> <span
  m='148496'>careful</span> <span m='148833'>not</span> <span
  m='149170'>to</span> <span m='149508'>over-fit</span> <span
  m='149845'>your</span> <span m='150182'>model</span> <span
  m='150520'>to</span> <span m='150937'>the</span> <span
  m='151355'>training</span> <span m='151772'>set.</span> </p><p><span
  m='152190'>This</span> <span m='152721'>works</span> <span
  m='153252'>best</span> <span m='153784'>for</span> <span
  m='154315'>large</span> <span m='154847'>data</span> <span
  m='155378'>sets.</span> </p><p><span m='155910'>There</span> <span
  m='156365'>are</span> <span m='156821'>many</span> <span
  m='157277'>different</span> <span m='157732'>algorithms</span> <span
  m='158188'>for</span> <span m='158644'>clustering.</span> </p><p><span
  m='159100'>They</span> <span m='159432'>differ</span> <span
  m='159765'>in</span> <span m='160098'>what</span> <span
  m='160431'>makes</span> <span m='160764'>a</span> <span
  m='161097'>cluster</span> <span m='161430'>and</span> <span
  m='161833'>how</span> <span m='162236'>the</span> <span
  m='162640'>clusters</span> <span m='163043'>are</span> <span
  m='163446'>found.</span> </p><p><span m='163850'>In</span> <span
  m='164398'>this</span> <span m='164947'>class,</span> <span
  m='165495'>we'll</span> <span m='166044'>cover</span> <span
  m='166592'>hierarchical</span> <span m='167141'>clustering</span> <span
  m='167690'>and</span> <span m='168380'>K-means</span> <span
  m='169070'>clustering.</span> </p><p><span m='169760'>In</span> <span
  m='170368'>this</span> <span m='170977'>lecture,</span> <span
  m='171585'>we'll</span> <span m='172194'>discuss</span> <span
  m='172802'>hierarchical</span> <span m='173411'>clustering.</span>
  </p><p><span m='174020'>And</span> <span m='174516'>in</span> <span
  m='175013'>the</span> <span m='175510'>next</span> <span
  m='176006'>lecture,</span> <span m='176503'>we'll</span> <span
  m='177000'>discuss</span> <span m='177496'>K-means</span> <span
  m='177993'>clustering.</span> </p><p><span m='178490'>You'll</span> <span
  m='178826'>learn</span> <span m='179163'>how</span> <span m='179500'>to</span>
  <span m='179836'>create</span> <span m='180173'>clusters</span> <span
  m='180510'>using</span> <span m='180846'>either</span> <span
  m='181183'>method</span> <span m='181520'>in</span> <span m='182003'>R.</span>
  <span m='182487'>There</span> <span m='182971'>are</span> <span
  m='183455'>other</span> <span m='183938'>clustering</span> <span
  m='184422'>methods</span> <span m='184906'>also,</span> <span
  m='185390'>but</span> <span m='185826'>hierarchical</span> <span
  m='186263'>and</span> <span m='186700'>K-means</span> <span
  m='187136'>are</span> <span m='187573'>two</span> <span m='188010'>of</span>
  <span m='188568'>the</span> <span m='189126'>most</span> <span
  m='189684'>popular</span> <span m='190242'>methods.</span> </p><p><span
  m='190800'>To</span> <span m='191132'>cluster</span> <span
  m='191465'>data</span> <span m='191797'>points,</span> <span
  m='192130'>we</span> <span m='192462'>need</span> <span m='192795'>to</span>
  <span m='193127'>compute</span> <span m='193460'>how</span> <span
  m='193968'>similar</span> <span m='194476'>the</span> <span
  m='194984'>points</span> <span m='195492'>are.</span> </p><p><span
  m='196000'>This</span> <span m='196340'>is</span> <span m='196680'>done</span>
  <span m='197020'>by</span> <span m='197360'>computing</span> <span
  m='197700'>the</span> <span m='198040'>distance</span> <span
  m='198380'>between</span> <span m='198720'>points,</span> <span
  m='199060'>which</span> <span m='199400'>we'll</span> <span
  m='199921'>discuss</span> <span m='200443'>in</span> <span
  m='200965'>the</span> <span m='201486'>next</span> <span
  m='202008'>video.</span> </p>
embedded_media:
  - uid: e3b7eb9214404d1a8492d3f2e6935bb6
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: xEjZjz7oxbI
  - uid: e5e5dc2dc5717959b817afdd0ab8bdae
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: xEjZjz7oxbI
  - uid: b18f5aebad647b34df2d9d4ed1d98d00
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/xEjZjz7oxbI/default.jpg'
  - uid: 5d8402d18715a0afc6e0fdb757d21a9c
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: xEjZjz7oxbI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering/video-3-movie-data-and-clustering-0/xEjZjz7oxbI.srt
  - uid: 0989260066a81c5bb650319d529b1d91
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: xEjZjz7oxbI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-3-movie-data-and-clustering/video-3-movie-data-and-clustering-0/xEjZjz7oxbI.pdf
  - uid: 9ca3e37e5fa5774d55ca2c984e07151e
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 7adcd9a4145bce274856113c97a8136d
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8f98ef17b5178cd45e656a6dffce7d15
    parent_uid: 08dfa3e4f5a98af0f1ebeb3cea5ff492
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.2.05_300k.mp4
type: courses
layout: video
---
