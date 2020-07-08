---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: FqiB9tmtdSc
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: Video-YouTube-Stream
    type: Video
    uid: 7aefb061054e3342a4d1e99b77cd4ead
  - id: 3Play-3Play YouTube id-Stream
    media_location: FqiB9tmtdSc
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 093bff397c3d2d0c4f0036659ecb30e9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/FqiB9tmtdSc/default.jpg'
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ff163fad53cb624607f5faf34a17d1ab
  - id: FqiB9tmtdSc.srt
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-5-pre-processing-in-r/video-5-pre-processing-in-r-0/FqiB9tmtdSc.srt
    title: 3play caption file
    type: null
    uid: d6e279a2009694ca30f6945b5d5fa725
  - id: FqiB9tmtdSc.pdf
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-5-pre-processing-in-r/video-5-pre-processing-in-r-0/FqiB9tmtdSc.pdf
    title: 3play pdf file
    type: null
    uid: 867a7c7a9a67a95b44d2b690e3268d35
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d6f9ec29fa4b10d0a2443883c71859a5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ed4047453d7b66c5537b3e9b13821b92
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.2.08_300k.mp4
    parent_uid: 27420fff8abacd00e9e0b59405fc71cc
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1f4f937f0275917a8a0329fde03978ad
inline_embed_id: 33473008video5preprocessinginr23283771
order_index: 1086
parent_uid: 6cb54a0c457feabde1b7dd4d95399d8c
related_resources_text: ''
short_url: video-5-pre-processing-in-r-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-5-pre-processing-in-r/video-5-pre-processing-in-r-0
title: 'Video 5: Pre-Processing in R'
transcript: >-
  <p><span m='4500'>Pre-processing</span> <span m='4938'>the</span> <span
  m='5376'>data</span> <span m='5815'>can</span> <span m='6253'>be</span> <span
  m='6691'>difficult,</span> <span m='7130'>but,</span> <span
  m='7722'>luckily,</span> <span m='8315'>R's</span> <span
  m='8908'>packages</span> <span m='9501'>provide</span> <span
  m='10094'>easy-to-use</span> <span m='10687'>functions</span> <span
  m='11280'>for</span> <span m='11704'>the</span> <span m='12128'>most</span>
  <span m='12552'>common</span> <span m='12976'>tasks.</span> </p><p><span
  m='13400'>In</span> <span m='13747'>this</span> <span m='14095'>video,</span>
  <span m='14443'>we'll</span> <span m='14791'>load</span> <span
  m='15138'>and</span> <span m='15486'>process</span> <span m='15834'>our</span>
  <span m='16182'>data</span> <span m='16530'>in</span> <span
  m='17001'>R.</span> <span m='17472'>In</span> <span m='17943'>your</span>
  <span m='18415'>R</span> <span m='18886'>console,</span> <span
  m='19357'>let's</span> <span m='19828'>load</span> <span m='20300'>the</span>
  <span m='20957'>data</span> <span m='21615'>set</span> <span
  m='22272'>tweets.csv</span> <span m='22930'>with</span> <span
  m='23587'>the</span> <span m='24245'>read.csv</span> <span
  m='24902'>function.</span> </p><p><span m='25560'>But</span> <span
  m='25868'>since</span> <span m='26177'>we're</span> <span
  m='26486'>working</span> <span m='26795'>with</span> <span
  m='27103'>text</span> <span m='27412'>data</span> <span m='27721'>here,</span>
  <span m='28030'>we</span> <span m='28274'>need</span> <span
  m='28518'>one</span> <span m='28762'>extra</span> <span
  m='29007'>argument,</span> <span m='29251'>which</span> <span
  m='29495'>is</span> <span m='29740'>stringsAsFactors=FALSE.</span>
  </p><p><span m='33390'>So</span> <span m='33778'>we'll</span> <span
  m='34167'>call</span> <span m='34555'>our</span> <span m='34944'>data</span>
  <span m='35332'>set</span> <span m='35721'>tweets.</span> </p><p><span
  m='36110'>And</span> <span m='36412'>we'll</span> <span m='36715'>use</span>
  <span m='37018'>the</span> <span m='37320'>read.csv</span> <span
  m='37623'>function</span> <span m='37926'>to</span> <span
  m='38229'>read</span> <span m='38531'>in</span> <span m='38834'>the</span>
  <span m='39137'>data</span> <span m='39440'>file</span> <span
  m='39948'>tweets.csv,</span> <span m='40457'>but</span> <span
  m='40966'>then</span> <span m='41475'>we'll</span> <span m='41984'>add</span>
  <span m='42493'>the</span> <span m='43002'>extra</span> <span
  m='43511'>argument</span> <span m='44020'>stringsAsFactors=FALSE.</span>
  </p><p><span m='51530'>You'll</span> <span m='51821'>always</span> <span
  m='52112'>need</span> <span m='52403'>to</span> <span m='52694'>add</span>
  <span m='52985'>this</span> <span m='53276'>extra</span> <span
  m='53567'>argument</span> <span m='53858'>when</span> <span
  m='54150'>working</span> <span m='54568'>on</span> <span m='54986'>a</span>
  <span m='55405'>text</span> <span m='55823'>analytics</span> <span
  m='56241'>problem</span> <span m='56660'>so</span> <span m='57082'>that</span>
  <span m='57505'>the</span> <span m='57927'>text</span> <span
  m='58350'>is</span> <span m='58772'>read</span> <span m='59195'>in</span>
  <span m='59617'>properly.</span> </p><p><span m='60040'>Now</span> <span
  m='60243'>let's</span> <span m='60447'>take</span> <span m='60651'>a</span>
  <span m='60855'>look</span> <span m='61058'>at</span> <span
  m='61262'>the</span> <span m='61466'>structure</span> <span
  m='61670'>of</span> <span m='61948'>our</span> <span m='62227'>data</span>
  <span m='62505'>with</span> <span m='62784'>the</span> <span
  m='63062'>str</span> <span m='63341'>function.</span> </p><p><span
  m='66450'>We</span> <span m='66977'>can</span> <span m='67504'>see</span>
  <span m='68031'>that</span> <span m='68559'>we</span> <span
  m='69086'>have</span> <span m='69613'>1,181</span> <span
  m='70140'>observations</span> <span m='70668'>of</span> <span
  m='71195'>two</span> <span m='71722'>variables,</span> <span
  m='72250'>the</span> <span m='72637'>text</span> <span m='73024'>of</span>
  <span m='73411'>the</span> <span m='73798'>tweet,</span> <span
  m='74185'>called</span> <span m='74572'>Tweet,</span> <span
  m='74960'>and</span> <span m='75464'>the</span> <span m='75968'>average</span>
  <span m='76473'>sentiment</span> <span m='76977'>score,</span> <span
  m='77482'>called</span> <span m='77986'>Avg</span> <span m='78491'>for</span>
  <span m='78995'>average.</span> </p><p><span m='79500'>The</span> <span
  m='79763'>tweet</span> <span m='80027'>texts</span> <span m='80291'>are</span>
  <span m='80555'>real</span> <span m='80818'>tweets</span> <span
  m='81082'>that</span> <span m='81346'>we</span> <span m='81610'>found</span>
  <span m='81892'>on</span> <span m='82175'>the</span> <span
  m='82457'>internet</span> <span m='82740'>directed</span> <span
  m='83022'>to</span> <span m='83305'>Apple</span> <span m='83587'>with</span>
  <span m='83870'>a</span> <span m='84152'>few</span> <span
  m='84435'>cleaned</span> <span m='84717'>up</span> <span
  m='85000'>words.</span> </p><p><span m='86390'>We're</span> <span
  m='86747'>more</span> <span m='87105'>interested</span> <span
  m='87462'>in</span> <span m='87820'>being</span> <span m='88177'>able</span>
  <span m='88535'>to</span> <span m='88892'>detect</span> <span
  m='89250'>the</span> <span m='89745'>tweets</span> <span m='90240'>with</span>
  <span m='90735'>clear</span> <span m='91230'>negative</span> <span
  m='91725'>sentiment,</span> <span m='92220'>so</span> <span
  m='92518'>let's</span> <span m='92817'>define</span> <span m='93116'>a</span>
  <span m='93415'>new</span> <span m='93714'>variable</span> <span
  m='94013'>in</span> <span m='94312'>our</span> <span m='94611'>data</span>
  <span m='94910'>set</span> <span m='95809'>tweets</span> <span
  m='96709'>called</span> <span m='97609'>Negative.</span> </p><p><span
  m='98509'>And</span> <span m='98764'>we'll</span> <span m='99020'>set</span>
  <span m='99276'>this</span> <span m='99531'>equal</span> <span
  m='99787'>to</span> <span m='100043'>as.factor(tweets$Avg</span> <span
  m='100298'>=</span> <span m='100554'>-1).</span> </p><p><span
  m='111000'>This</span> <span m='111418'>will</span> <span
  m='111836'>set</span> <span m='112254'>tweets$Negative</span> <span
  m='112672'>equal</span> <span m='113090'>to</span> <span
  m='113508'>true</span> <span m='113926'>if</span> <span m='114344'>the</span>
  <span m='114762'>average</span> <span m='115180'>sentiment</span> <span
  m='115461'>score</span> <span m='115743'>is</span> <span
  m='116025'>less</span> <span m='116306'>than</span> <span m='116588'>or</span>
  <span m='116870'>equal</span> <span m='117151'>to</span> <span
  m='117433'>negative</span> <span m='117715'>1</span> <span
  m='117996'>and</span> <span m='118278'>will</span> <span m='118560'>set</span>
  <span m='118993'>tweets$Negative</span> <span m='119426'>equal</span> <span
  m='119860'>to</span> <span m='120293'>false</span> <span m='120726'>if</span>
  <span m='121160'>the</span> <span m='121593'>average</span> <span
  m='122026'>sentiment</span> <span m='122460'>score</span> <span
  m='122891'>is</span> <span m='123323'>greater</span> <span
  m='123755'>than</span> <span m='124186'>negative</span> <span
  m='124618'>1.</span> </p><p><span m='125050'>Let's</span> <span
  m='125306'>look</span> <span m='125562'>at</span> <span m='125818'>a</span>
  <span m='126074'>table</span> <span m='126330'>of</span> <span
  m='126586'>this</span> <span m='126842'>new</span> <span
  m='127098'>variable,</span> <span m='127354'>Negative.</span> </p><p><span
  m='132360'>We</span> <span m='132940'>can</span> <span m='133520'>see</span>
  <span m='134100'>that</span> <span m='134680'>182</span> <span
  m='135260'>of</span> <span m='135840'>the</span> <span m='136420'>1,181</span>
  <span m='137000'>tweets,</span> <span m='137580'>or</span> <span
  m='138160'>about</span> <span m='138740'>15%,</span> <span
  m='139320'>are</span> <span m='139595'>negative.</span> </p><p><span
  m='142630'>Now</span> <span m='142944'>to</span> <span
  m='143258'>pre-process</span> <span m='143572'>our</span> <span
  m='143886'>text</span> <span m='144200'>data</span> <span m='144514'>so</span>
  <span m='144829'>that</span> <span m='145098'>we</span> <span
  m='145367'>can</span> <span m='145636'>use</span> <span m='145905'>the</span>
  <span m='146174'>bag</span> <span m='146443'>of</span> <span
  m='146712'>words</span> <span m='146981'>approach,</span> <span
  m='147250'>we'll</span> <span m='147700'>be</span> <span
  m='148150'>using</span> <span m='148600'>the</span> <span m='149050'>tm</span>
  <span m='149500'>text</span> <span m='149950'>mining</span> <span
  m='150400'>package.</span> </p><p><span m='150850'>We'll</span> <span
  m='151250'>need</span> <span m='151650'>to</span> <span
  m='152050'>install</span> <span m='152450'>and</span> <span
  m='152850'>load</span> <span m='153250'>two</span> <span
  m='153650'>packages</span> <span m='154050'>to</span> <span
  m='154450'>do</span> <span m='154850'>this.</span> </p><p><span
  m='155250'>First,</span> <span m='155954'>let's</span> <span
  m='156658'>install</span> <span m='157363'>the</span> <span
  m='158067'>package</span> <span m='158772'>tm,</span> <span
  m='159476'>and</span> <span m='160181'>go</span> <span m='160885'>ahead</span>
  <span m='161590'>and</span> <span m='161880'>select</span> <span
  m='162170'>a</span> <span m='162460'>CRAN</span> <span
  m='162750'>mirror</span> <span m='163040'>near</span> <span
  m='163330'>you.</span> </p><p><span m='167380'>As</span> <span
  m='167696'>soon</span> <span m='168012'>as</span> <span m='168328'>that</span>
  <span m='168645'>package</span> <span m='168961'>is</span> <span
  m='169277'>done</span> <span m='169593'>installing</span> <span
  m='169910'>and</span> <span m='170207'>you're</span> <span
  m='170504'>back</span> <span m='170801'>at</span> <span m='171098'>the</span>
  <span m='171395'>blinking</span> <span m='171692'>cursor,</span> <span
  m='171990'>go</span> <span m='172455'>ahead</span> <span m='172920'>and</span>
  <span m='173385'>load</span> <span m='173850'>that</span> <span
  m='174315'>package</span> <span m='174780'>with</span> <span
  m='175245'>the</span> <span m='175710'>library</span> <span
  m='176175'>command.</span> </p><p><span m='176640'>Then</span> <span
  m='177123'>we</span> <span m='177606'>also</span> <span m='178090'>need</span>
  <span m='178573'>to</span> <span m='179056'>install</span> <span
  m='179540'>the</span> <span m='180023'>package</span> <span
  m='180506'>snowballC.</span> </p><p><span m='184230'>This</span> <span
  m='184642'>package</span> <span m='185055'>helps</span> <span
  m='185467'>us</span> <span m='185880'>use</span> <span m='186292'>the</span>
  <span m='186705'>tm</span> <span m='187117'>package.</span> </p><p><span
  m='187530'>And</span> <span m='187810'>go</span> <span m='188090'>ahead</span>
  <span m='188370'>and</span> <span m='188650'>load</span> <span
  m='188930'>the</span> <span m='189210'>snowball</span> <span
  m='189490'>package</span> <span m='189770'>as</span> <span
  m='190050'>well.</span> </p><p><span m='193280'>One</span> <span
  m='193650'>of</span> <span m='194020'>the</span> <span
  m='194390'>concepts</span> <span m='194760'>introduced</span> <span
  m='195130'>by</span> <span m='195500'>the</span> <span m='195870'>tm</span>
  <span m='196240'>package</span> <span m='196610'>is</span> <span
  m='197020'>that</span> <span m='197430'>of</span> <span m='197840'>a</span>
  <span m='198250'>corpus.</span> </p><p><span m='198660'>A</span> <span
  m='199041'>corpus</span> <span m='199422'>is</span> <span m='199803'>a</span>
  <span m='200185'>collection</span> <span m='200566'>of</span> <span
  m='200947'>documents.</span> </p><p><span m='201329'>We'll</span> <span
  m='201762'>need</span> <span m='202196'>to</span> <span
  m='202630'>convert</span> <span m='203063'>our</span> <span
  m='203497'>tweets</span> <span m='203931'>to</span> <span m='204365'>a</span>
  <span m='204798'>corpus</span> <span m='205232'>for</span> <span
  m='205666'>pre-processing.</span> </p><p><span m='206100'>tm</span> <span
  m='206440'>can</span> <span m='206780'>create</span> <span m='207120'>a</span>
  <span m='207460'>corpus</span> <span m='207800'>in</span> <span
  m='208140'>many</span> <span m='208480'>different</span> <span
  m='208820'>ways,</span> <span m='209160'>but</span> <span
  m='209431'>we'll</span> <span m='209703'>create</span> <span
  m='209975'>it</span> <span m='210246'>from</span> <span m='210518'>the</span>
  <span m='210790'>tweet</span> <span m='211061'>column</span> <span
  m='211333'>of</span> <span m='211605'>our</span> <span m='211876'>data</span>
  <span m='212148'>frame</span> <span m='212420'>using</span> <span
  m='212991'>two</span> <span m='213562'>functions,</span> <span
  m='214134'>corpus</span> <span m='214705'>and</span> <span
  m='215277'>vector</span> <span m='215848'>source.</span> </p><p><span
  m='216420'>We'll</span> <span m='216832'>call</span> <span
  m='217245'>our</span> <span m='217658'>corpus</span> <span
  m='218071'>"corpus"</span> <span m='218484'>and</span> <span
  m='218897'>then</span> <span m='219310'>use</span> <span m='219900'>the</span>
  <span m='220490'>corpus</span> <span m='221080'>and</span> <span
  m='221670'>the</span> <span m='222260'>vector</span> <span
  m='222850'>source</span> <span m='223440'>functions</span> <span
  m='224030'>called</span> <span m='224511'>on</span> <span
  m='224992'>our</span> <span m='225473'>tweets</span> <span
  m='225954'>variable</span> <span m='226435'>of</span> <span
  m='226916'>our</span> <span m='227397'>tweets</span> <span
  m='227878'>data</span> <span m='228359'>set.</span> </p><p><span
  m='228840'>So</span> <span m='229160'>that's</span> <span
  m='229480'>tweets$Tweet.</span> </p><p><span m='234140'>We</span> <span
  m='234364'>can</span> <span m='234588'>check</span> <span
  m='234812'>that</span> <span m='235037'>this</span> <span
  m='235261'>has</span> <span m='235485'>worked</span> <span
  m='235710'>by</span> <span m='236210'>typing</span> <span
  m='236710'>corpus</span> <span m='237210'>and</span> <span
  m='237710'>seeing</span> <span m='238210'>that</span> <span
  m='238710'>our</span> <span m='239210'>corpus</span> <span
  m='239710'>has</span> <span m='240210'>1,181</span> <span
  m='240710'>text</span> <span m='241210'>documents.</span> </p><p><span
  m='243040'>And</span> <span m='243343'>we</span> <span m='243646'>can</span>
  <span m='243949'>check</span> <span m='244252'>that</span> <span
  m='244555'>the</span> <span m='244858'>documents</span> <span
  m='245161'>match</span> <span m='245464'>our</span> <span
  m='245767'>tweets</span> <span m='246070'>by</span> <span
  m='246410'>using</span> <span m='246750'>double</span> <span
  m='247090'>brackets.</span> </p><p><span m='247430'>So</span> <span
  m='247710'>type</span> <span m='247990'>corpus[[1]].</span> </p><p><span
  m='253860'>This</span> <span m='254334'>shows</span> <span
  m='254808'>us</span> <span m='255283'>the</span> <span m='255757'>first</span>
  <span m='256232'>tweet</span> <span m='256706'>in</span> <span
  m='257181'>our</span> <span m='257655'>corpus.</span> </p><p><span
  m='258130'>Now</span> <span m='258571'>we're</span> <span
  m='259012'>ready</span> <span m='259453'>to</span> <span
  m='259895'>start</span> <span m='260336'>pre-processing</span> <span
  m='260777'>our</span> <span m='261218'>data.</span> </p><p><span
  m='261660'>Pre-processing</span> <span m='262222'>is</span> <span
  m='262784'>easy</span> <span m='263346'>in</span> <span m='263908'>tm.</span>
  </p><p><span m='264470'>Each</span> <span m='264912'>operation,</span> <span
  m='265355'>like</span> <span m='265797'>stemming</span> <span
  m='266240'>or</span> <span m='266682'>removing</span> <span
  m='267125'>stop</span> <span m='267567'>words,</span> <span
  m='268010'>can</span> <span m='268251'>be</span> <span m='268492'>done</span>
  <span m='268733'>with</span> <span m='268974'>one</span> <span
  m='269215'>line</span> <span m='269456'>in</span> <span m='269697'>R,</span>
  <span m='269938'>where</span> <span m='270180'>we</span> <span
  m='270746'>use</span> <span m='271312'>the</span> <span
  m='271878'>tm_map</span> <span m='272444'>function.</span> </p><p><span
  m='273010'>Let's</span> <span m='273254'>try</span> <span m='273499'>it</span>
  <span m='273743'>out</span> <span m='273988'>by</span> <span
  m='274233'>changing</span> <span m='274477'>all</span> <span
  m='274722'>of</span> <span m='274966'>the</span> <span m='275211'>text</span>
  <span m='275456'>in</span> <span m='275700'>our</span> <span
  m='275945'>tweets</span> <span m='276190'>to</span> <span
  m='277015'>lowercase.</span> </p><p><span m='277840'>To</span> <span
  m='278225'>do</span> <span m='278611'>that,</span> <span
  m='278997'>we'll</span> <span m='279382'>replace</span> <span
  m='279768'>our</span> <span m='280154'>corpus</span> <span
  m='280540'>with</span> <span m='281133'>the</span> <span
  m='281727'>output</span> <span m='282321'>of</span> <span
  m='282915'>the</span> <span m='283508'>tm_map</span> <span
  m='284102'>function,</span> <span m='284696'>where</span> <span
  m='285290'>the</span> <span m='285638'>first</span> <span
  m='285987'>argument</span> <span m='286336'>is</span> <span
  m='286685'>the</span> <span m='287034'>name</span> <span m='287383'>of</span>
  <span m='287732'>our</span> <span m='288081'>corpus</span> <span
  m='288430'>and</span> <span m='288665'>the</span> <span
  m='288900'>second</span> <span m='289135'>argument</span> <span
  m='289370'>is</span> <span m='289605'>what</span> <span m='289840'>we</span>
  <span m='290075'>want</span> <span m='290310'>to</span> <span
  m='290545'>do.</span> </p><p><span m='290780'>In</span> <span
  m='291695'>this</span> <span m='292610'>case,</span> <span
  m='293525'>tolower.</span> </p><p><span m='294440'>tolower</span> <span
  m='294851'>is</span> <span m='295262'>a</span> <span
  m='295674'>standard</span> <span m='296085'>function</span> <span
  m='296497'>in</span> <span m='296908'>R,</span> <span m='297320'>and</span>
  <span m='297614'>this</span> <span m='297908'>is</span> <span
  m='298202'>like</span> <span m='298496'>when</span> <span m='298790'>we</span>
  <span m='299085'>pass</span> <span m='299379'>mean</span> <span
  m='299673'>to</span> <span m='299967'>the</span> <span
  m='300261'>tapply</span> <span m='300555'>function.</span> </p><p><span
  m='300850'>We're</span> <span m='301436'>passing</span> <span
  m='302022'>the</span> <span m='302608'>tm_map</span> <span
  m='303194'>function</span> <span m='303780'>a</span> <span
  m='304328'>function</span> <span m='304877'>to</span> <span
  m='305425'>use</span> <span m='305974'>on</span> <span m='306522'>our</span>
  <span m='307071'>corpus.</span> </p><p><span m='307620'>Let's</span> <span
  m='307852'>see</span> <span m='308085'>what</span> <span
  m='308318'>that</span> <span m='308550'>did</span> <span m='308783'>by</span>
  <span m='309016'>looking</span> <span m='309249'>at</span> <span
  m='309481'>our</span> <span m='309714'>first</span> <span
  m='309947'>tweet</span> <span m='310180'>again.</span> </p><p><span
  m='310870'>Go</span> <span m='311076'>ahead</span> <span m='311282'>and</span>
  <span m='311489'>hit</span> <span m='311695'>the</span> <span
  m='311901'>up</span> <span m='312108'>arrow</span> <span
  m='312314'>twice</span> <span m='312520'>to</span> <span m='312727'>get</span>
  <span m='312933'>back</span> <span m='313140'>to</span> <span
  m='313468'>corpuscorpus{[1]</span> <span m='313796'>and</span> <span
  m='314125'>now</span> <span m='314453'>we</span> <span m='314782'>can</span>
  <span m='315110'>see</span> <span m='315439'>that</span> <span
  m='315767'>all</span> <span m='316096'>of</span> <span m='316424'>our</span>
  <span m='316753'>letters</span> <span m='317081'>are</span> <span
  m='317410'>lowercase.</span> </p><p><span m='320980'>Now</span> <span
  m='321574'>let's</span> <span m='322168'>remove</span> <span
  m='322762'>all</span> <span m='323356'>punctuation.</span> </p><p><span
  m='323950'>This</span> <span m='324215'>is</span> <span m='324480'>done</span>
  <span m='324745'>in</span> <span m='325010'>a</span> <span
  m='325275'>very</span> <span m='325540'>similar</span> <span
  m='325805'>way,</span> <span m='326070'>except</span> <span
  m='326398'>this</span> <span m='326727'>time</span> <span m='327055'>we</span>
  <span m='327384'>give</span> <span m='327712'>the</span> <span
  m='328041'>argument</span> <span m='328370'>removePunctuation</span> <span
  m='329187'>instead</span> <span m='330005'>of</span> <span
  m='330822'>tolower.</span> </p><p><span m='331640'>Hit</span> <span
  m='331988'>the</span> <span m='332336'>up</span> <span m='332684'>arrow</span>
  <span m='333032'>twice,</span> <span m='333380'>and</span> <span
  m='333728'>in</span> <span m='334076'>the</span> <span
  m='334424'>tm_map</span> <span m='334772'>function,</span> <span
  m='335120'>delete</span> <span m='335694'>tolower,</span> <span
  m='336268'>and</span> <span m='336842'>type</span> <span
  m='337416'>removePunctuation.</span> </p><p><span m='341210'>Let's</span>
  <span m='341499'>see</span> <span m='341788'>what</span> <span
  m='342077'>this</span> <span m='342366'>did</span> <span m='342655'>to</span>
  <span m='342944'>our</span> <span m='343233'>first</span> <span
  m='343522'>tweet</span> <span m='343811'>again.</span> </p><p><span
  m='344100'>Now</span> <span m='344482'>the</span> <span
  m='344864'>comma</span> <span m='345246'>after</span> <span
  m='345628'>"say",</span> <span m='346011'>the</span> <span
  m='346393'>exclamation</span> <span m='346775'>point</span> <span
  m='347157'>after</span> <span m='347540'>"received",</span> <span
  m='348085'>and</span> <span m='348630'>the</span> <span m='349175'>@</span>
  <span m='349720'>symbols</span> <span m='350265'>before</span> <span
  m='350810'>"Apple"</span> <span m='351355'>are</span> <span
  m='351900'>all</span> <span m='352445'>gone.</span> </p><p><span
  m='352990'>Now</span> <span m='353341'>we</span> <span m='353693'>want</span>
  <span m='354045'>to</span> <span m='354397'>remove</span> <span
  m='354749'>the</span> <span m='355100'>stop</span> <span
  m='355452'>words</span> <span m='355804'>in</span> <span m='356156'>our</span>
  <span m='356508'>tweets.</span> </p><p><span m='356860'>tm</span> <span
  m='357151'>provides</span> <span m='357443'>a</span> <span
  m='357735'>list</span> <span m='358027'>of</span> <span m='358319'>stop</span>
  <span m='358610'>words</span> <span m='358902'>for</span> <span
  m='359194'>the</span> <span m='359486'>English</span> <span
  m='359778'>language.</span> </p><p><span m='360070'>We</span> <span
  m='360338'>can</span> <span m='360607'>check</span> <span m='360876'>it</span>
  <span m='361145'>out</span> <span m='361414'>by</span> <span
  m='361683'>typing</span> <span m='361952'>stopwords("english")</span> <span
  m='362221'>[1:10].</span> </p><p><span m='372300'>We</span> <span
  m='372566'>see</span> <span m='372832'>that</span> <span
  m='373098'>these</span> <span m='373365'>are</span> <span
  m='373631'>words</span> <span m='373897'>like</span> <span
  m='374163'>"I,"</span> <span m='374430'>"me,"</span> <span
  m='375242'>"my,"</span> <span m='376054'>"myself,"</span> <span
  m='376866'>et</span> <span m='377678'>cetera.</span> </p><p><span
  m='378490'>Removing</span> <span m='378836'>words</span> <span
  m='379183'>can</span> <span m='379530'>be</span> <span m='379876'>done</span>
  <span m='380223'>with</span> <span m='380570'>the</span> <span
  m='380916'>removeWords</span> <span m='381263'>argument</span> <span
  m='381610'>to</span> <span m='381923'>the</span> <span
  m='382236'>tm_map</span> <span m='382549'>function,</span> <span
  m='382862'>but</span> <span m='383175'>we</span> <span m='383488'>need</span>
  <span m='383801'>one</span> <span m='384114'>extra</span> <span
  m='384427'>argument</span> <span m='384740'>this</span> <span
  m='385080'>time--</span> <span m='385421'>what</span> <span
  m='385762'>the</span> <span m='386103'>stop</span> <span
  m='386444'>words</span> <span m='386785'>are</span> <span
  m='387125'>that</span> <span m='387466'>we</span> <span m='387807'>want</span>
  <span m='388148'>to</span> <span m='388489'>remove.</span> </p><p><span
  m='388830'>We'll</span> <span m='389147'>remove</span> <span
  m='389465'>all</span> <span m='389782'>of</span> <span m='390100'>these</span>
  <span m='390417'>English</span> <span m='390735'>stop</span> <span
  m='391052'>words,</span> <span m='391370'>but</span> <span
  m='391710'>we'll</span> <span m='392050'>also</span> <span
  m='392390'>remove</span> <span m='392730'>the</span> <span
  m='393070'>word</span> <span m='393410'>"apple"</span> <span
  m='393750'>since</span> <span m='394034'>all</span> <span m='394318'>of</span>
  <span m='394603'>these</span> <span m='394887'>tweets</span> <span
  m='395172'>have</span> <span m='395456'>the</span> <span
  m='395741'>word</span> <span m='396025'>"apple"</span> <span
  m='396310'>and</span> <span m='396583'>it</span> <span
  m='396856'>probably</span> <span m='397129'>won't</span> <span
  m='397402'>be</span> <span m='397675'>very</span> <span
  m='397948'>useful</span> <span m='398221'>in</span> <span
  m='398494'>our</span> <span m='398767'>prediction</span> <span
  m='399040'>problem.</span> </p><p><span m='400600'>So</span> <span
  m='400787'>go</span> <span m='400974'>ahead</span> <span m='401161'>and</span>
  <span m='401348'>hit</span> <span m='401535'>the</span> <span
  m='401723'>up</span> <span m='401910'>arrow</span> <span m='402097'>to</span>
  <span m='402284'>get</span> <span m='402471'>back</span> <span
  m='402659'>to</span> <span m='403292'>the</span> <span
  m='403926'>tm_map</span> <span m='404560'>function,</span> <span
  m='405194'>delete</span> <span m='405828'>removePunctuation</span> <span
  m='406462'>and,</span> <span m='407096'>instead,</span> <span
  m='407730'>type</span> <span m='408085'>removeWords.</span> </p><p><span
  m='412210'>Then</span> <span m='412493'>we</span> <span m='412776'>need</span>
  <span m='413060'>to</span> <span m='413343'>add</span> <span
  m='413626'>one</span> <span m='413910'>extra</span> <span
  m='414193'>argument,</span> <span m='414476'>c("apple").</span> </p><p><span
  m='419230'>This</span> <span m='419587'>is</span> <span m='419944'>us</span>
  <span m='420301'>removing</span> <span m='420658'>the</span> <span
  m='421015'>word</span> <span m='421372'>"apple."</span> <span
  m='421730'>And</span> <span m='422146'>then</span> <span
  m='422563'>stopwords("english").</span> </p><p><span m='428020'>So</span>
  <span m='428340'>this</span> <span m='428660'>will</span> <span
  m='428980'>remove</span> <span m='429300'>the</span> <span
  m='429620'>word</span> <span m='429940'>"apple"</span> <span
  m='430260'>and</span> <span m='430802'>all</span> <span m='431345'>of</span>
  <span m='431888'>the</span> <span m='432431'>English</span> <span
  m='432974'>stop</span> <span m='433517'>words.</span> </p><p><span
  m='434060'>Let's</span> <span m='434247'>take</span> <span m='434435'>a</span>
  <span m='434622'>look</span> <span m='434810'>at</span> <span
  m='434997'>our</span> <span m='435185'>first</span> <span
  m='435372'>tweet</span> <span m='435560'>again</span> <span
  m='435784'>to</span> <span m='436008'>see</span> <span m='436232'>what</span>
  <span m='436456'>happened.</span> </p><p><span m='440470'>Now</span> <span
  m='440753'>we</span> <span m='441037'>can</span> <span m='441320'>see</span>
  <span m='441604'>that</span> <span m='441888'>we</span> <span
  m='442171'>have</span> <span m='442455'>significantly</span> <span
  m='442739'>fewer</span> <span m='443022'>words,</span> <span
  m='443306'>only</span> <span m='443590'>the</span> <span
  m='444038'>words</span> <span m='444487'>that</span> <span
  m='444935'>are</span> <span m='445384'>not</span> <span m='445832'>stop</span>
  <span m='446281'>words.</span> </p><p><span m='446730'>Lastly,</span> <span
  m='447048'>we</span> <span m='447366'>want</span> <span m='447684'>to</span>
  <span m='448002'>stem</span> <span m='448320'>our</span> <span
  m='448639'>document</span> <span m='448957'>with</span> <span
  m='449275'>the</span> <span m='449593'>stem</span> <span
  m='449911'>document</span> <span m='450230'>argument.</span> </p><p><span
  m='451220'>Go</span> <span m='451623'>ahead</span> <span m='452026'>and</span>
  <span m='452430'>scroll</span> <span m='452833'>back</span> <span
  m='453236'>up</span> <span m='453640'>to</span> <span m='454043'>the</span>
  <span m='454446'>removePunctuation,</span> <span m='454850'>delete</span>
  <span m='455898'>removePunctuation,</span> <span m='456946'>and</span> <span
  m='457994'>type</span> <span m='459042'>stemDocument.</span> </p><p><span
  m='460090'>If</span> <span m='460401'>you</span> <span m='460713'>hit</span>
  <span m='461025'>Enter</span> <span m='461336'>and</span> <span
  m='461648'>then</span> <span m='461960'>look</span> <span m='462271'>at</span>
  <span m='462583'>the</span> <span m='462895'>first</span> <span
  m='463206'>tweet</span> <span m='463518'>again,</span> <span
  m='463830'>we</span> <span m='464258'>can</span> <span m='464686'>see</span>
  <span m='465114'>that</span> <span m='465542'>this</span> <span
  m='465970'>took</span> <span m='466399'>off</span> <span m='466827'>the</span>
  <span m='467255'>ending</span> <span m='467683'>of</span> <span
  m='468111'>"customer,"</span> <span m='468540'>"service,"</span> <span
  m='469470'>"received,"</span> <span m='470400'>and</span> <span
  m='471330'>"appstore."</span> <span m='472260'>In</span> <span
  m='472647'>the</span> <span m='473035'>next</span> <span
  m='473422'>video,</span> <span m='473810'>we'll</span> <span
  m='474197'>investigate</span> <span m='474585'>our</span> <span
  m='474972'>corpus</span> <span m='475360'>and</span> <span
  m='475810'>prepare</span> <span m='476260'>it</span> <span
  m='476710'>for</span> <span m='477160'>our</span> <span
  m='477610'>prediction</span> <span m='478060'>problem.</span> </p>
uid: 27420fff8abacd00e9e0b59405fc71cc
type: courses
layout: video
---
