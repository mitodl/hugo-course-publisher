---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WIKsL9tPoAE
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: Video-YouTube-Stream
    type: Video
    uid: 6e43d0518dc8198a6893acdc0d71763e
  - id: 3Play-3Play YouTube id-Stream
    media_location: WIKsL9tPoAE
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1628228af0cef86c88f19fae594ee1c8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WIKsL9tPoAE/default.jpg'
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3f73d73649b2acb6162d4c18cefa5ab2
  - id: WIKsL9tPoAE.srt
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-5-k-means-clustering/video-5-k-means-clustering-0/WIKsL9tPoAE.srt
    title: 3play caption file
    type: null
    uid: c6a933ecb1aced990583b89afb1f2a00
  - id: WIKsL9tPoAE.pdf
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-5-k-means-clustering/video-5-k-means-clustering-0/WIKsL9tPoAE.pdf
    title: 3play pdf file
    type: null
    uid: cc21b30fcf1ddf379a5f59fa6a2a3a56
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 800121af239e954def8c11a41719ceb7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3458f6430e2c6a42bfb94f3c396f3306
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.4.07_300k.mp4
    parent_uid: c68a133ea0ede0465f27c34e81c180f2
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8b836addc67a0fe657f492ae7955a2db
inline_embed_id: 86641707video5kmeansclustering4804050
order_index: 1507
parent_uid: 463ba1ca1b89e0017fa87ebc26673bd4
related_resources_text: ''
short_url: video-5-k-means-clustering-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-5-k-means-clustering/video-5-k-means-clustering-0
title: 'Video 5: K-Means Clustering'
transcript: >-
  <p><span m='5050'>Recall</span> <span m='5354'>from</span> <span
  m='5659'>our</span> <span m='5963'>last</span> <span m='6268'>video</span>
  <span m='6572'>that</span> <span m='6877'>it</span> <span m='7181'>was</span>
  <span m='7486'>impossible</span> <span m='7790'>for</span> <span
  m='8095'>us</span> <span m='8400'>to</span> <span m='8874'>use</span> <span
  m='9348'>hierarchical</span> <span m='9822'>clustering</span> <span
  m='10296'>because</span> <span m='10770'>of</span> <span m='11142'>the</span>
  <span m='11515'>high</span> <span m='11888'>resolution</span> <span
  m='12261'>of</span> <span m='12634'>our</span> <span m='13007'>image.</span>
  </p><p><span m='13380'>So</span> <span m='13633'>in</span> <span
  m='13886'>this</span> <span m='14140'>video,</span> <span m='14393'>we</span>
  <span m='14646'>will</span> <span m='14900'>try</span> <span
  m='15153'>to</span> <span m='15406'>segment</span> <span m='15660'>the</span>
  <span m='16233'>MRI</span> <span m='16807'>image</span> <span
  m='17381'>using</span> <span m='17955'>the</span> <span
  m='18528'>k-means</span> <span m='19102'>clustering</span> <span
  m='19676'>algorithm.</span> </p><p><span m='20250'>The</span> <span
  m='20576'>first</span> <span m='20903'>step</span> <span m='21230'>in</span>
  <span m='21556'>k-means</span> <span m='21883'>clustering</span> <span
  m='22210'>involves</span> <span m='22644'>specifying</span> <span
  m='23078'>the</span> <span m='23512'>number</span> <span m='23947'>of</span>
  <span m='24381'>clusters,</span> <span m='24815'>k.</span> </p><p><span
  m='25250'>But</span> <span m='25650'>how</span> <span m='26050'>do</span>
  <span m='26450'>we</span> <span m='26850'>select</span> <span
  m='27250'>k?</span> </p><p><span m='27650'>Well,</span> <span
  m='27988'>our</span> <span m='28326'>clusters</span> <span
  m='28664'>would</span> <span m='29002'>ideally</span> <span
  m='29340'>assign</span> <span m='29679'>each</span> <span
  m='30017'>point</span> <span m='30355'>in</span> <span m='30693'>the</span>
  <span m='31031'>image</span> <span m='31370'>to</span> <span
  m='31625'>a</span> <span m='31880'>tissue</span> <span m='32135'>class.</span>
  </p><p><span m='32390'>Or</span> <span m='32881'>a</span> <span
  m='33373'>particular</span> <span m='33865'>substance,</span> <span
  m='34356'>for</span> <span m='34848'>instance,</span> <span
  m='35340'>grey</span> <span m='35730'>matter</span> <span m='36120'>or</span>
  <span m='36510'>white</span> <span m='36900'>matter,</span> <span
  m='37290'>and</span> <span m='37680'>so</span> <span m='38070'>on.</span>
  </p><p><span m='38460'>And</span> <span m='38814'>these</span> <span
  m='39168'>substances</span> <span m='39523'>are</span> <span
  m='39877'>known</span> <span m='40232'>to</span> <span m='40586'>the</span>
  <span m='40941'>medical</span> <span m='41295'>community.</span> </p><p><span
  m='41650'>So</span> <span m='42061'>setting</span> <span m='42473'>the</span>
  <span m='42885'>number</span> <span m='43296'>of</span> <span
  m='43708'>clusters</span> <span m='44120'>depends</span> <span
  m='44445'>on</span> <span m='44770'>exactly</span> <span m='45095'>what</span>
  <span m='45420'>you're</span> <span m='45745'>trying</span> <span
  m='46070'>to</span> <span m='46518'>extract</span> <span m='46966'>from</span>
  <span m='47414'>the</span> <span m='47862'>image.</span> </p><p><span
  m='48310'>For</span> <span m='48556'>the</span> <span m='48802'>sake</span>
  <span m='49048'>of</span> <span m='49294'>our</span> <span
  m='49540'>example,</span> <span m='49786'>let's</span> <span
  m='50032'>set</span> <span m='50278'>the</span> <span m='50524'>number</span>
  <span m='50770'>of</span> <span m='51431'>clusters</span> <span
  m='52093'>here,</span> <span m='52755'>k,</span> <span m='53416'>to</span>
  <span m='54078'>five.</span> </p><p><span m='54740'>And</span> <span
  m='55116'>since</span> <span m='55493'>the</span> <span
  m='55870'>k-means</span> <span m='56246'>clustering</span> <span
  m='56623'>algorithm</span> <span m='57000'>starts</span> <span
  m='57442'>by</span> <span m='57885'>randomly</span> <span
  m='58328'>assigning</span> <span m='58771'>points</span> <span
  m='59214'>to</span> <span m='59657'>clusters,</span> <span m='60100'>we</span>
  <span m='60321'>should</span> <span m='60542'>set</span> <span
  m='60763'>the</span> <span m='60984'>seed,</span> <span m='61205'>so</span>
  <span m='61426'>that</span> <span m='61647'>we</span> <span
  m='61868'>all</span> <span m='62090'>obtain</span> <span m='62497'>the</span>
  <span m='62905'>same</span> <span m='63312'>clusters.</span> </p><p><span
  m='63720'>So</span> <span m='64169'>let's</span> <span m='64618'>type</span>
  <span m='65067'>set.seed,</span> <span m='65516'>and</span> <span
  m='65965'>give</span> <span m='66414'>it</span> <span m='66863'>a</span> <span
  m='67312'>value</span> <span m='67761'>of</span> <span m='68210'>1.</span>
  </p><p><span m='68660'>To</span> <span m='69129'>run</span> <span
  m='69598'>the</span> <span m='70067'>k-means</span> <span
  m='70536'>clustering</span> <span m='71005'>algorithm,</span> <span
  m='71474'>or</span> <span m='71943'>KMC</span> <span m='72412'>in</span> <span
  m='72881'>short,</span> <span m='73350'>we</span> <span m='73660'>need</span>
  <span m='73970'>to</span> <span m='74280'>use</span> <span
  m='74590'>the</span> <span m='74900'>k-means</span> <span
  m='75210'>function</span> <span m='75520'>in</span> <span m='75830'>R.</span>
  </p><p><span m='76140'>And</span> <span m='76444'>the</span> <span
  m='76749'>first</span> <span m='77053'>input</span> <span m='77358'>is</span>
  <span m='77662'>whatever</span> <span m='77967'>we</span> <span
  m='78271'>are</span> <span m='78576'>trying</span> <span m='78880'>to</span>
  <span m='79185'>cluster.</span> </p><p><span m='79490'>In</span> <span
  m='79982'>this</span> <span m='80475'>case</span> <span m='80967'>it</span>
  <span m='81460'>is</span> <span m='81952'>the</span> <span
  m='82445'>healthy</span> <span m='82937'>vector.</span> </p><p><span
  m='83430'>The</span> <span m='83835'>second</span> <span
  m='84240'>argument</span> <span m='84645'>is</span> <span m='85050'>the</span>
  <span m='85455'>number</span> <span m='85860'>of</span> <span
  m='86265'>clusters,</span> <span m='86670'>and</span> <span
  m='87133'>we</span> <span m='87596'>can</span> <span m='88060'>specify</span>
  <span m='88523'>it</span> <span m='88986'>using</span> <span
  m='89450'>the</span> <span m='89913'>argument</span> <span
  m='90376'>centers,</span> <span m='90840'>and</span> <span
  m='91157'>that</span> <span m='91474'>would</span> <span m='91791'>be</span>
  <span m='92108'>equal</span> <span m='92425'>to</span> <span
  m='92742'>k.</span> </p><p><span m='93060'>And</span> <span
  m='93373'>then</span> <span m='93686'>finally,</span> <span
  m='93999'>since</span> <span m='94312'>the</span> <span
  m='94625'>k-means</span> <span m='94938'>is</span> <span m='95251'>an</span>
  <span m='95564'>iterative</span> <span m='95877'>method</span> <span
  m='96190'>that</span> <span m='96574'>could</span> <span m='96958'>take</span>
  <span m='97342'>very</span> <span m='97727'>long</span> <span
  m='98111'>to</span> <span m='98495'>converge,</span> <span m='98880'>we</span>
  <span m='99178'>need</span> <span m='99477'>to</span> <span
  m='99776'>set</span> <span m='100075'>a</span> <span m='100374'>maximum</span>
  <span m='100673'>number</span> <span m='100972'>of</span> <span
  m='101271'>iterations.</span> </p><p><span m='101570'>And</span> <span
  m='102023'>we</span> <span m='102477'>can</span> <span m='102931'>do</span>
  <span m='103385'>this</span> <span m='103838'>by</span> <span
  m='104292'>typing</span> <span m='104746'>iter.max,</span> <span
  m='105200'>and</span> <span m='105617'>give</span> <span m='106034'>it,</span>
  <span m='106452'>for</span> <span m='106869'>instance,</span> <span
  m='107286'>the</span> <span m='107704'>value</span> <span
  m='108121'>1,000.</span> </p><p><span m='108539'>And</span> <span
  m='108979'>now</span> <span m='109419'>let's</span> <span
  m='109859'>run</span> <span m='110299'>the</span> <span
  m='110739'>k-means</span> <span m='111179'>algorithm.</span> </p><p><span
  m='111620'>The</span> <span m='112001'>k-means</span> <span
  m='112382'>algorithm</span> <span m='112763'>is</span> <span
  m='113145'>actually</span> <span m='113526'>quite</span> <span
  m='113907'>fast,</span> <span m='114289'>even</span> <span
  m='114712'>though</span> <span m='115136'>we</span> <span
  m='115560'>have</span> <span m='115984'>a</span> <span m='116408'>high</span>
  <span m='116832'>resolution</span> <span m='117256'>image.</span> </p><p><span
  m='117680'>Now</span> <span m='118010'>to</span> <span m='118340'>see</span>
  <span m='118670'>the</span> <span m='119000'>result</span> <span
  m='119330'>of</span> <span m='119660'>the</span> <span
  m='119990'>k-means</span> <span m='120320'>clustering</span> <span
  m='120650'>algorithm,</span> <span m='120980'>we</span> <span
  m='121444'>can</span> <span m='121908'>output</span> <span
  m='122373'>the</span> <span m='122837'>structure</span> <span
  m='123302'>of</span> <span m='123766'>the</span> <span m='124231'>KMC</span>
  <span m='124695'>variable.</span> </p><p><span m='125160'>The</span> <span
  m='125470'>first,</span> <span m='125780'>and</span> <span
  m='126090'>most</span> <span m='126400'>important,</span> <span
  m='126710'>piece</span> <span m='127020'>of</span> <span
  m='127330'>information</span> <span m='127640'>that</span> <span
  m='127961'>we</span> <span m='128282'>get,</span> <span m='128603'>is</span>
  <span m='128925'>the</span> <span m='129246'>cluster</span> <span
  m='129567'>vector.</span> </p><p><span m='129889'>Which</span> <span
  m='130236'>assigns</span> <span m='130584'>each</span> <span
  m='130932'>intensity</span> <span m='131280'>value</span> <span
  m='131628'>in</span> <span m='131976'>the</span> <span
  m='132324'>healthy</span> <span m='132672'>vector</span> <span
  m='133020'>to</span> <span m='133430'>a</span> <span
  m='133840'>cluster.</span> </p><p><span m='134250'>In</span> <span
  m='134494'>this</span> <span m='134738'>case,</span> <span
  m='134982'>it</span> <span m='135226'>will</span> <span m='135470'>be</span>
  <span m='135714'>giving</span> <span m='135958'>them</span> <span
  m='136202'>values</span> <span m='136446'>1</span> <span
  m='136690'>through</span> <span m='137155'>5,</span> <span
  m='137621'>since</span> <span m='138087'>we</span> <span
  m='138552'>have</span> <span m='139018'>5</span> <span
  m='139484'>clusters.</span> </p><p><span m='139950'>Now</span> <span
  m='140247'>recall</span> <span m='140544'>that</span> <span
  m='140842'>to</span> <span m='141139'>output</span> <span
  m='141436'>the</span> <span m='141734'>segmented</span> <span
  m='142031'>image,</span> <span m='142329'>we</span> <span
  m='142680'>need</span> <span m='143032'>to</span> <span
  m='143384'>extract</span> <span m='143736'>this</span> <span
  m='144088'>vector.</span> </p><p><span m='144440'>The</span> <span
  m='144715'>way</span> <span m='144990'>to</span> <span m='145266'>do</span>
  <span m='145541'>this</span> <span m='145817'>is</span> <span
  m='146092'>by</span> <span m='146368'>using</span> <span m='146643'>the</span>
  <span m='146919'>dollar</span> <span m='147194'>notation.</span> </p><p><span
  m='147470'>For</span> <span m='148208'>instance,</span> <span
  m='148946'>let</span> <span m='149685'>us</span> <span
  m='150423'>define</span> <span m='151161'>healthyClusters,</span> <span
  m='151900'>and</span> <span m='152180'>then</span> <span m='152460'>set</span>
  <span m='152740'>it</span> <span m='153020'>equal</span> <span
  m='153300'>to</span> <span m='153580'>KMC$cluster.</span> </p><p><span
  m='157380'>And</span> <span m='157658'>what</span> <span
  m='157936'>we're</span> <span m='158215'>basically</span> <span
  m='158493'>doing</span> <span m='158771'>here</span> <span
  m='159050'>is</span> <span m='159387'>that</span> <span m='159724'>we</span>
  <span m='160061'>are</span> <span m='160398'>taking</span> <span
  m='160735'>the</span> <span m='161072'>information,</span> <span
  m='161410'>extracting</span> <span m='161828'>the</span> <span
  m='162247'>information</span> <span m='162665'>of</span> <span
  m='163084'>the</span> <span m='163502'>cluster</span> <span
  m='163921'>vector,</span> <span m='164340'>and</span> <span
  m='164626'>putting</span> <span m='164912'>it</span> <span
  m='165198'>in</span> <span m='165485'>the</span> <span m='165771'>new</span>
  <span m='166057'>variable</span> <span m='166343'>that</span> <span
  m='166630'>is</span> <span m='167486'>called</span> <span
  m='168343'>healthyClusters.</span> </p><p><span m='169200'>Now</span> <span
  m='169545'>how</span> <span m='169891'>can</span> <span m='170236'>we</span>
  <span m='170582'>obtain</span> <span m='170927'>the</span> <span
  m='171273'>mean</span> <span m='171618'>intensity</span> <span
  m='171964'>value</span> <span m='172310'>within</span> <span
  m='172733'>each</span> <span m='173156'>of</span> <span m='173580'>our</span>
  <span m='174003'>5</span> <span m='174426'>clusters?</span> </p><p><span
  m='174850'>In</span> <span m='175213'>hierarchical</span> <span
  m='175576'>clustering,</span> <span m='175939'>we</span> <span
  m='176302'>needed</span> <span m='176665'>to</span> <span m='177028'>do</span>
  <span m='177391'>some</span> <span m='177754'>manual</span> <span
  m='178117'>work,</span> <span m='178480'>and</span> <span
  m='178910'>use</span> <span m='179340'>the</span> <span
  m='179770'>t-apply</span> <span m='180200'>function</span> <span
  m='180630'>to</span> <span m='181060'>extract</span> <span
  m='181490'>this</span> <span m='181920'>information.</span> </p><p><span
  m='182350'>In</span> <span m='182685'>this</span> <span
  m='183020'>case,</span> <span m='183355'>we</span> <span
  m='183690'>have</span> <span m='184025'>the</span> <span
  m='184360'>answers</span> <span m='184695'>ready,</span> <span
  m='185030'>under</span> <span m='185612'>the</span> <span
  m='186195'>vector</span> <span m='186777'>centers.</span> </p><p><span
  m='187360'>In</span> <span m='187751'>fact,</span> <span m='188142'>for</span>
  <span m='188533'>instance,</span> <span m='188925'>the</span> <span
  m='189316'>mean</span> <span m='189707'>intensity</span> <span
  m='190098'>value</span> <span m='190490'>of</span> <span m='190850'>the</span>
  <span m='191211'>first</span> <span m='191572'>cluster</span> <span
  m='191933'>is</span> <span m='192294'>0.48,</span> <span m='192655'>and</span>
  <span m='193016'>the</span> <span m='193377'>mean</span> <span
  m='193738'>intensity</span> <span m='194099'>value</span> <span
  m='194460'>of</span> <span m='194968'>the</span> <span m='195476'>last</span>
  <span m='195985'>cluster</span> <span m='196493'>is</span> <span
  m='197001'>0.18.</span> </p><p><span m='197510'>We</span> <span
  m='197812'>can</span> <span m='198114'>also</span> <span
  m='198416'>extract</span> <span m='198718'>this</span> <span
  m='199021'>information</span> <span m='199323'>using</span> <span
  m='199625'>the</span> <span m='199927'>dollar</span> <span
  m='200230'>sign.</span> </p><p><span m='200730'>For</span> <span
  m='201206'>instance,</span> <span m='201683'>KMC$centers[2].</span>
  </p><p><span m='207010'>This</span> <span m='207326'>should</span> <span
  m='207642'>give</span> <span m='207958'>us</span> <span m='208275'>the</span>
  <span m='208591'>mean</span> <span m='208907'>intensity</span> <span
  m='209223'>value</span> <span m='209540'>of</span> <span m='209947'>the</span>
  <span m='210354'>second</span> <span m='210761'>cluster,</span> <span
  m='211168'>which</span> <span m='211575'>is</span> <span
  m='211982'>0.1.</span> </p><p><span m='212390'>And</span> <span
  m='212811'>indeed,</span> <span m='213232'>this</span> <span
  m='213654'>is</span> <span m='214075'>what</span> <span m='214497'>we</span>
  <span m='214918'>obtain.</span> </p><p><span m='215340'>Before</span> <span
  m='215607'>we</span> <span m='215874'>move</span> <span m='216141'>on,</span>
  <span m='216409'>I</span> <span m='216676'>would</span> <span
  m='216943'>like</span> <span m='217210'>to</span> <span
  m='217478'>point</span> <span m='217745'>your</span> <span
  m='218012'>attention</span> <span m='218280'>to</span> <span
  m='218671'>one</span> <span m='219062'>last</span> <span
  m='219454'>interesting</span> <span m='219845'>piece</span> <span
  m='220237'>of</span> <span m='220628'>information</span> <span
  m='221020'>that</span> <span m='221292'>we</span> <span m='221564'>can</span>
  <span m='221836'>get</span> <span m='222108'>here.</span> </p><p><span
  m='222380'>And</span> <span m='222715'>that</span> <span m='223050'>is</span>
  <span m='223385'>the</span> <span m='223720'>size</span> <span
  m='224055'>of</span> <span m='224390'>the</span> <span
  m='224725'>cluster.</span> </p><p><span m='225060'>For</span> <span
  m='225411'>instance,</span> <span m='225762'>the</span> <span
  m='226113'>largest</span> <span m='226465'>cluster</span> <span
  m='226816'>that</span> <span m='227167'>we</span> <span m='227518'>have</span>
  <span m='227870'>is</span> <span m='228389'>the</span> <span
  m='228908'>third</span> <span m='229427'>one,</span> <span
  m='229946'>which</span> <span m='230465'>combines</span> <span
  m='230984'>133,000</span> <span m='231503'>values</span> <span
  m='232022'>in</span> <span m='232541'>it.</span> </p><p><span
  m='233060'>And</span> <span m='233438'>interestingly,</span> <span
  m='233816'>it's</span> <span m='234194'>the</span> <span m='234572'>one</span>
  <span m='234950'>that</span> <span m='235329'>has</span> <span
  m='235787'>the</span> <span m='236246'>smallest</span> <span
  m='236705'>mean</span> <span m='237163'>intensity</span> <span
  m='237622'>value,</span> <span m='238081'>which</span> <span
  m='238540'>means</span> <span m='238888'>that</span> <span
  m='239236'>it</span> <span m='239584'>corresponds</span> <span
  m='239932'>to</span> <span m='240280'>the</span> <span
  m='240629'>darkest</span> <span m='240977'>shade</span> <span
  m='241325'>in</span> <span m='241673'>our</span> <span
  m='242021'>image.</span> </p><p><span m='242370'>Actually,</span> <span
  m='242672'>if</span> <span m='242974'>we</span> <span m='243276'>look</span>
  <span m='243578'>at</span> <span m='243880'>all</span> <span
  m='244182'>the</span> <span m='244484'>mean</span> <span
  m='244786'>intensity</span> <span m='245088'>values,</span> <span
  m='245390'>we</span> <span m='245690'>can</span> <span m='245990'>see</span>
  <span m='246290'>that</span> <span m='246590'>they</span> <span
  m='246890'>are</span> <span m='247190'>all</span> <span m='247490'>less</span>
  <span m='247790'>than</span> <span m='248090'>0.5.</span> </p><p><span
  m='248390'>So</span> <span m='248714'>they're</span> <span
  m='249038'>all</span> <span m='249362'>pretty</span> <span
  m='249687'>close</span> <span m='250011'>to</span> <span m='250335'>0.</span>
  </p><p><span m='250660'>And</span> <span m='250956'>this</span> <span
  m='251253'>means</span> <span m='251550'>that</span> <span
  m='251846'>our</span> <span m='252143'>images</span> <span
  m='252440'>is</span> <span m='252736'>pretty</span> <span
  m='253033'>dark.</span> </p><p><span m='253330'>If</span> <span
  m='253639'>we</span> <span m='253948'>look</span> <span m='254257'>at</span>
  <span m='254566'>our</span> <span m='254875'>image</span> <span
  m='255184'>again,</span> <span m='255493'>it's</span> <span
  m='255802'>indeed</span> <span m='256111'>very</span> <span
  m='256420'>dark.</span> </p><p><span m='256730'>And</span> <span
  m='257130'>we</span> <span m='257530'>have</span> <span m='257930'>very</span>
  <span m='258330'>few</span> <span m='258730'>points</span> <span
  m='259130'>that</span> <span m='259530'>are</span> <span
  m='259930'>actually</span> <span m='260330'>white.</span> </p><p><span
  m='260730'>Now</span> <span m='261237'>the</span> <span
  m='261745'>exciting</span> <span m='262252'>part.</span> </p><p><span
  m='262760'>Let</span> <span m='263080'>us</span> <span
  m='263401'>output</span> <span m='263722'>the</span> <span
  m='264043'>segmented</span> <span m='264364'>image</span> <span
  m='264685'>and</span> <span m='265006'>see</span> <span m='265327'>what</span>
  <span m='265648'>we</span> <span m='265969'>get.</span> </p><p><span
  m='266290'>Recall</span> <span m='266541'>that</span> <span
  m='266792'>we</span> <span m='267044'>first</span> <span
  m='267295'>need</span> <span m='267547'>to</span> <span
  m='267798'>convert</span> <span m='268050'>the</span> <span
  m='268431'>vector</span> <span m='268812'>healthy</span> <span
  m='269194'>clusters</span> <span m='269575'>to</span> <span
  m='269957'>a</span> <span m='270338'>matrix.</span> </p><p><span
  m='270720'>To</span> <span m='271043'>do</span> <span m='271366'>this,</span>
  <span m='271690'>we</span> <span m='272013'>will</span> <span
  m='272336'>use</span> <span m='272660'>the</span> <span
  m='272983'>dimension</span> <span m='273306'>function,</span> <span
  m='273630'>that</span> <span m='274020'>takes</span> <span
  m='274410'>as</span> <span m='274800'>an</span> <span m='275190'>input</span>
  <span m='275580'>the</span> <span m='275970'>healthy</span> <span
  m='276360'>clusters</span> <span m='276750'>vector.</span> </p><p><span
  m='277140'>And</span> <span m='277475'>now</span> <span
  m='277810'>we're</span> <span m='278145'>going</span> <span
  m='278480'>to</span> <span m='278815'>turn</span> <span m='279150'>it</span>
  <span m='279485'>into</span> <span m='279820'>a</span> <span
  m='280155'>matrix.</span> </p><p><span m='280490'>So</span> <span
  m='280855'>we</span> <span m='281220'>have</span> <span m='281586'>to</span>
  <span m='281951'>specify</span> <span m='282317'>using</span> <span
  m='282682'>the</span> <span m='283048'>combined</span> <span
  m='283413'>function,</span> <span m='283779'>the</span> <span
  m='284144'>number</span> <span m='284510'>of</span> <span
  m='284869'>rows,</span> <span m='285228'>and</span> <span
  m='285587'>the</span> <span m='285946'>number</span> <span
  m='286305'>of</span> <span m='286664'>columns</span> <span
  m='287023'>that</span> <span m='287382'>we</span> <span
  m='287741'>want.</span> </p><p><span m='288100'>We</span> <span
  m='288345'>should</span> <span m='288591'>make</span> <span
  m='288837'>sure</span> <span m='289082'>that</span> <span m='289328'>it</span>
  <span m='289574'>corresponds</span> <span m='289820'>to</span> <span
  m='290145'>the</span> <span m='290470'>same</span> <span
  m='290795'>size</span> <span m='291120'>as</span> <span m='291445'>the</span>
  <span m='291770'>healthy</span> <span m='292095'>matrix.</span> </p><p><span
  m='292420'>And</span> <span m='292658'>since</span> <span
  m='292896'>we've</span> <span m='293134'>forgot</span> <span
  m='293372'>the</span> <span m='293610'>number</span> <span
  m='293849'>of</span> <span m='294087'>rows</span> <span m='294325'>and</span>
  <span m='294563'>the</span> <span m='294801'>number</span> <span
  m='295040'>columns</span> <span m='295360'>in</span> <span
  m='295680'>the</span> <span m='296000'>healthy</span> <span
  m='296320'>matrix,</span> <span m='296640'>we</span> <span
  m='296960'>can</span> <span m='297360'>simply</span> <span
  m='297760'>use</span> <span m='298160'>the</span> <span m='298560'>nrow</span>
  <span m='298960'>and</span> <span m='299360'>ncol</span> <span
  m='299760'>function</span> <span m='300160'>to</span> <span
  m='300560'>get</span> <span m='300960'>them.</span> </p><p><span
  m='301360'>So</span> <span m='301682'>the</span> <span m='302005'>first</span>
  <span m='302328'>input</span> <span m='302651'>right</span> <span
  m='302974'>now</span> <span m='303297'>would</span> <span m='303620'>be</span>
  <span m='304510'>nrow</span> <span m='305400'>of</span> <span
  m='306290'>healthy</span> <span m='307180'>matrix.</span> </p><p><span
  m='308070'>And</span> <span m='308336'>then</span> <span m='308603'>the</span>
  <span m='308870'>second</span> <span m='309136'>input</span> <span
  m='309403'>would</span> <span m='309670'>be</span> <span m='309936'>the</span>
  <span m='310203'>number</span> <span m='310470'>of</span> <span
  m='311115'>columns</span> <span m='311760'>of</span> <span
  m='312405'>the</span> <span m='313050'>healthy</span> <span
  m='313695'>matrix.</span> </p><p><span m='314340'>And</span> <span
  m='314642'>now</span> <span m='314945'>we</span> <span m='315248'>are</span>
  <span m='315550'>assigning</span> <span m='315853'>these</span> <span
  m='316156'>numbers</span> <span m='316459'>of</span> <span
  m='316761'>rows</span> <span m='317064'>and</span> <span
  m='317367'>columns</span> <span m='317670'>to</span> <span
  m='318336'>our</span> <span m='319003'>new</span> <span
  m='319670'>matrix,</span> <span m='320336'>healthy</span> <span
  m='321003'>clusters.</span> </p><p><span m='321670'>And</span> <span
  m='321990'>now</span> <span m='322310'>we</span> <span m='322630'>can</span>
  <span m='322950'>visualize</span> <span m='323270'>our</span> <span
  m='323590'>clusters</span> <span m='323910'>by</span> <span
  m='324298'>using</span> <span m='324686'>the</span> <span
  m='325074'>function</span> <span m='325462'>image,</span> <span
  m='325850'>which</span> <span m='326238'>takes</span> <span
  m='326626'>as</span> <span m='327014'>an</span> <span m='327402'>input</span>
  <span m='327790'>the</span> <span m='328447'>healthy</span> <span
  m='329105'>cluster's</span> <span m='329762'>matrix.</span> </p><p><span
  m='330420'>And</span> <span m='330828'>let's</span> <span
  m='331236'>turn</span> <span m='331645'>off</span> <span m='332053'>the</span>
  <span m='332461'>axes.</span> </p><p><span m='332870'>And</span> <span
  m='333195'>then</span> <span m='333520'>let's</span> <span
  m='333846'>be</span> <span m='334171'>creative</span> <span
  m='334497'>and</span> <span m='334822'>use</span> <span m='335148'>a</span>
  <span m='335473'>fancy</span> <span m='335799'>color</span> <span
  m='336124'>scheme.</span> </p><p><span m='336450'>We're</span> <span
  m='336835'>going</span> <span m='337220'>to</span> <span
  m='337605'>invoke</span> <span m='337990'>for</span> <span
  m='338375'>color</span> <span m='338760'>here,</span> <span
  m='339145'>the</span> <span m='339530'>rainbow</span> <span
  m='339915'>palette</span> <span m='340300'>in</span> <span
  m='340685'>R.</span> </p><p><span m='341070'>And</span> <span
  m='341520'>the</span> <span m='341970'>rainbow</span> <span
  m='342420'>palette,</span> <span m='342870'>or</span> <span
  m='343320'>the</span> <span m='343770'>function</span> <span
  m='344220'>rainbow,</span> <span m='344670'>takes</span> <span
  m='344961'>as</span> <span m='345253'>an</span> <span m='345545'>input</span>
  <span m='345837'>the</span> <span m='346129'>number</span> <span
  m='346420'>of</span> <span m='346712'>colors</span> <span
  m='347004'>that</span> <span m='347296'>we</span> <span
  m='347588'>want.</span> </p><p><span m='347880'>In</span> <span
  m='348144'>this</span> <span m='348408'>case,</span> <span
  m='348672'>the</span> <span m='348937'>number</span> <span
  m='349201'>of</span> <span m='349465'>colors</span> <span
  m='349730'>would</span> <span m='350095'>correspond</span> <span
  m='350461'>to</span> <span m='350827'>the</span> <span
  m='351192'>number</span> <span m='351558'>of</span> <span
  m='351924'>clusters.</span> </p><p><span m='352290'>So</span> <span
  m='352875'>the</span> <span m='353460'>input</span> <span
  m='354045'>would</span> <span m='354630'>be</span> <span m='355215'>k.</span>
  </p><p><span m='355800'>And</span> <span m='356265'>now</span> <span
  m='356731'>let's</span> <span m='357197'>output</span> <span
  m='357662'>the</span> <span m='358128'>segmented</span> <span
  m='358594'>image.</span> </p><p><span m='359060'>Going</span> <span
  m='359363'>back</span> <span m='359666'>to</span> <span m='359970'>the</span>
  <span m='360273'>graphics</span> <span m='360576'>window,</span> <span
  m='360880'>we</span> <span m='361261'>see</span> <span m='361643'>that</span>
  <span m='362025'>k-means</span> <span m='362406'>algorithm</span> <span
  m='362788'>was</span> <span m='363170'>able</span> <span m='363565'>to</span>
  <span m='363961'>segment</span> <span m='364356'>the</span> <span
  m='364752'>image</span> <span m='365147'>in</span> <span m='365543'>5</span>
  <span m='365938'>different</span> <span m='366334'>clusters.</span>
  </p><p><span m='366730'>More</span> <span m='367042'>refinement</span> <span
  m='367354'>maybe</span> <span m='367666'>needs</span> <span
  m='367978'>to</span> <span m='368290'>be</span> <span m='368602'>made</span>
  <span m='368914'>to</span> <span m='369226'>our</span> <span
  m='369538'>clustering</span> <span m='369850'>algorithm</span> <span
  m='370477'>to</span> <span m='371105'>appropriately</span> <span
  m='371732'>capture</span> <span m='372360'>all</span> <span
  m='372925'>the</span> <span m='373490'>anatomical</span> <span
  m='374055'>structures.</span> </p><p><span m='374620'>But</span> <span
  m='374965'>this</span> <span m='375310'>seems</span> <span
  m='375655'>like</span> <span m='376000'>a</span> <span m='376345'>good</span>
  <span m='376690'>starting</span> <span m='377035'>point.</span> </p><p><span
  m='377380'>The</span> <span m='377745'>question</span> <span
  m='378110'>now</span> <span m='378475'>is,</span> <span m='378840'>can</span>
  <span m='379205'>we</span> <span m='379570'>use</span> <span
  m='379935'>the</span> <span m='380300'>clusters,</span> <span
  m='380665'>or</span> <span m='381030'>the</span> <span
  m='381395'>classes,</span> <span m='381760'>found</span> <span
  m='382167'>by</span> <span m='382574'>our</span> <span
  m='382981'>k-means</span> <span m='383388'>algorithm</span> <span
  m='383795'>on</span> <span m='384202'>the</span> <span
  m='384609'>healthy</span> <span m='385016'>MRI</span> <span
  m='385423'>image</span> <span m='385830'>to</span> <span
  m='386306'>identify</span> <span m='386782'>tumors</span> <span
  m='387259'>in</span> <span m='387735'>another</span> <span
  m='388211'>MRI</span> <span m='388688'>image</span> <span m='389164'>of</span>
  <span m='389640'>a</span> <span m='390117'>sick</span> <span
  m='390593'>patient?</span> </p><p><span m='391070'>We</span> <span
  m='391464'>will</span> <span m='391858'>see</span> <span m='392253'>if</span>
  <span m='392647'>this</span> <span m='393042'>is</span> <span
  m='393436'>possible</span> <span m='393831'>in</span> <span
  m='394225'>the</span> <span m='394620'>next</span> <span
  m='395014'>video.</span> </p>
uid: c68a133ea0ede0465f27c34e81c180f2
type: course
layout: video
---
