---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 12KzzzmaYrw
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: Video-YouTube-Stream
    type: Video
    uid: 7363d8729b7a9a6b99c575979f5132af
  - id: 3Play-3Play YouTube id-Stream
    media_location: 12KzzzmaYrw
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 14df1677247745e7ecdf09694a86b93c
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/12KzzzmaYrw/default.jpg'
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fb04a1fd1351bc6e7a7a2b1c9beb9fb2
  - id: 12KzzzmaYrw.srt
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix/video-7-baseline-method-and-penalty-matrix-0/12KzzzmaYrw.srt
    title: 3play caption file
    type: null
    uid: 100e7142a15cff54166580e7f648b184
  - id: 12KzzzmaYrw.pdf
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix/video-7-baseline-method-and-penalty-matrix-0/12KzzzmaYrw.pdf
    title: 3play pdf file
    type: null
    uid: e560e063ae65fe49fbaa40831722e8ea
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b2da65c5d3a1a9748034cdea8032ea89
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 743e1b16893d3d2b5a50767430611688
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.3.13_300k.mp4
    parent_uid: 708d44411f55cd4c23a7889b54bd7cd8
    title: Video-Internet Archive-MP4
    type: Video
    uid: f708b6da3ec0159a1dc15880c0fbe633
inline_embed_id: 52001563video7baselinemethodandpenaltymatrix92071204
order_index: 912
parent_uid: 9f0c19816b4e786a4cb964211da05bf8
related_resources_text: ''
short_url: video-7-baseline-method-and-penalty-matrix-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/keeping-an-eye-on-healthcare-costs-the-d2hawkeye-story/video-7-baseline-method-and-penalty-matrix/video-7-baseline-method-and-penalty-matrix-0
title: 'Video 7: Baseline Method and Penalty Matrix'
transcript: >-
  <p><span m='4500'>Let's</span> <span m='4881'>now</span> <span
  m='5262'>see</span> <span m='5643'>how</span> <span m='6024'>the</span> <span
  m='6405'>baseline</span> <span m='6786'>method</span> <span
  m='7167'>used</span> <span m='7548'>by</span> <span m='7929'>D2Hawkeye</span>
  <span m='8310'>would</span> <span m='8800'>perform</span> <span
  m='9290'>on</span> <span m='9780'>this</span> <span m='10270'>data</span>
  <span m='10760'>set.</span> </p><p><span m='11250'>The</span> <span
  m='11628'>baseline</span> <span m='12006'>method</span> <span
  m='12384'>would</span> <span m='12762'>predict</span> <span
  m='13140'>that</span> <span m='13493'>the</span> <span m='13846'>cost</span>
  <span m='14200'>bucket</span> <span m='14553'>for</span> <span
  m='14906'>a</span> <span m='15260'>patient</span> <span m='15613'>in</span>
  <span m='15966'>2009</span> <span m='16320'>will</span> <span
  m='16713'>be</span> <span m='17106'>the</span> <span m='17500'>same</span>
  <span m='17893'>as</span> <span m='18286'>it</span> <span m='18680'>was</span>
  <span m='19073'>in</span> <span m='19466'>2008.</span> </p><p><span
  m='19860'>So</span> <span m='20242'>let's</span> <span m='20624'>create</span>
  <span m='21006'>a</span> <span m='21388'>classification</span> <span
  m='21770'>matrix</span> <span m='22152'>to</span> <span
  m='22534'>compute</span> <span m='22916'>the</span> <span
  m='23298'>accuracy</span> <span m='23680'>for</span> <span
  m='24073'>the</span> <span m='24467'>baseline</span> <span
  m='24861'>method</span> <span m='25255'>on</span> <span m='25648'>the</span>
  <span m='26042'>test</span> <span m='26436'>set.</span> </p><p><span
  m='26830'>So</span> <span m='27281'>we'll</span> <span m='27733'>use</span>
  <span m='28185'>the</span> <span m='28637'>table</span> <span
  m='29089'>function,</span> <span m='29540'>where</span> <span
  m='29992'>the</span> <span m='30444'>actual</span> <span
  m='30896'>outcomes</span> <span m='31348'>are</span> <span
  m='31800'>ClaimsTest$bucket2009,</span> <span m='33862'>and</span> <span
  m='35924'>our</span> <span m='37986'>predictions</span> <span
  m='40048'>are</span> <span m='42110'>ClaimsTest$bucket2008.</span>
  </p><p><span m='53530'>The</span> <span m='53897'>accuracy</span> <span
  m='54264'>is</span> <span m='54631'>the</span> <span m='54999'>sum</span>
  <span m='55366'>of</span> <span m='55733'>the</span> <span
  m='56100'>diagonal,</span> <span m='56468'>the</span> <span
  m='56835'>observations</span> <span m='57202'>that</span> <span
  m='57570'>were</span> <span m='58185'>classified</span> <span
  m='58800'>correctly,</span> <span m='59415'>divided</span> <span
  m='60030'>by</span> <span m='60412'>the</span> <span m='60794'>total</span>
  <span m='61176'>number</span> <span m='61558'>of</span> <span
  m='61940'>observations</span> <span m='62322'>in</span> <span
  m='62704'>our</span> <span m='63086'>test</span> <span m='63468'>set.</span>
  </p><p><span m='63850'>So</span> <span m='65378'>we</span> <span
  m='66907'>want</span> <span m='68436'>to</span> <span m='69964'>add</span>
  <span m='71493'>up</span> <span m='73022'>110138</span> <span
  m='74550'>+</span> <span m='76079'>10721</span> <span m='77608'>+</span> <span
  m='79136'>2774</span> <span m='80665'>+</span> <span m='82194'>1539</span>
  <span m='83722'>+</span> <span m='85251'>104.</span> </p><p><span
  m='86780'>And</span> <span m='87031'>we</span> <span m='87282'>want</span>
  <span m='87533'>to</span> <span m='87784'>divide</span> <span
  m='88035'>by</span> <span m='88286'>the</span> <span m='88537'>total</span>
  <span m='88788'>number</span> <span m='89039'>of</span> <span
  m='89431'>observations</span> <span m='89823'>in</span> <span
  m='90215'>this</span> <span m='90607'>table,</span> <span m='90999'>or</span>
  <span m='91391'>the</span> <span m='91783'>number</span> <span
  m='92175'>of</span> <span m='92567'>rows</span> <span m='92960'>in</span>
  <span m='93300'>ClaimsTest.</span> </p><p><span m='99380'>So</span> <span
  m='99935'>the</span> <span m='100491'>accuracy</span> <span
  m='101046'>of</span> <span m='101602'>the</span> <span
  m='102157'>baseline</span> <span m='102713'>method</span> <span
  m='103268'>is</span> <span m='103824'>0.68.</span> </p><p><span
  m='104380'>Now</span> <span m='104811'>how</span> <span
  m='105243'>about</span> <span m='105675'>the</span> <span
  m='106106'>penalty</span> <span m='106538'>error?</span> </p><p><span
  m='106970'>To</span> <span m='107311'>compute</span> <span
  m='107653'>this,</span> <span m='107995'>we</span> <span
  m='108336'>need</span> <span m='108678'>to</span> <span
  m='109020'>first</span> <span m='109362'>create</span> <span
  m='109703'>a</span> <span m='110045'>penalty</span> <span
  m='110387'>matrix</span> <span m='110729'>in</span> <span m='111070'>R.</span>
  <span m='111411'>Keep</span> <span m='111753'>in</span> <span
  m='112094'>mind</span> <span m='112435'>that</span> <span
  m='112777'>we'll</span> <span m='113118'>put</span> <span
  m='113460'>the</span> <span m='113870'>actual</span> <span
  m='114280'>outcomes</span> <span m='114690'>on</span> <span
  m='115100'>the</span> <span m='115510'>left,</span> <span
  m='115920'>and</span> <span m='116330'>the</span> <span
  m='116740'>predicted</span> <span m='117150'>outcomes</span> <span
  m='117560'>on</span> <span m='118110'>the</span> <span m='118660'>top.</span>
  </p><p><span m='119210'>So</span> <span m='120251'>we'll</span> <span
  m='121293'>call</span> <span m='122335'>it</span> <span
  m='123376'>PenaltyMatrix,</span> <span m='124418'>which</span> <span
  m='125460'>will</span> <span m='125996'>be</span> <span
  m='126533'>equal</span> <span m='127069'>to</span> <span m='127606'>a</span>
  <span m='128142'>matrix</span> <span m='128679'>object</span> <span
  m='129215'>in</span> <span m='129752'>R.</span> </p><p><span
  m='130289'>And</span> <span m='130505'>then</span> <span m='130721'>we</span>
  <span m='130938'>need</span> <span m='131154'>to</span> <span
  m='131370'>give</span> <span m='131587'>the</span> <span
  m='131803'>numbers</span> <span m='132020'>that</span> <span
  m='132622'>should</span> <span m='133225'>fill</span> <span
  m='133828'>up</span> <span m='134430'>the</span> <span
  m='135033'>matrix:</span> <span m='135636'>0,</span> <span
  m='136239'>1,</span> <span m='136841'>2,</span> <span m='137444'>3,</span>
  <span m='138047'>4.</span> </p><p><span m='138650'>That'll</span> <span
  m='139268'>be</span> <span m='139886'>the</span> <span m='140504'>first</span>
  <span m='141122'>row.</span> </p><p><span m='141740'>And</span> <span
  m='142432'>then</span> <span m='143125'>2,</span> <span m='143818'>0,</span>
  <span m='144511'>1,</span> <span m='145204'>2,</span> <span
  m='145897'>3.</span> </p><p><span m='146590'>That'll</span> <span
  m='147032'>be</span> <span m='147474'>the</span> <span
  m='147916'>second</span> <span m='148358'>row.</span> </p><p><span
  m='148800'>4,</span> <span m='149396'>2,</span> <span m='149993'>0,</span>
  <span m='150590'>1,</span> <span m='151186'>2</span> <span
  m='151783'>for</span> <span m='152380'>the</span> <span
  m='152976'>third</span> <span m='153573'>row.</span> </p><p><span
  m='154170'>6,</span> <span m='154718'>4,</span> <span m='155267'>2,</span>
  <span m='155816'>0,</span> <span m='156365'>1</span> <span
  m='156914'>for</span> <span m='157463'>the</span> <span
  m='158012'>fourth</span> <span m='158561'>row.</span> </p><p><span
  m='159110'>And</span> <span m='159710'>finally,</span> <span
  m='160311'>8,</span> <span m='160912'>6,</span> <span m='161513'>4,</span>
  <span m='162114'>2,</span> <span m='162715'>0</span> <span
  m='163316'>for</span> <span m='163917'>the</span> <span
  m='164518'>fifth</span> <span m='165119'>row.</span> </p><p><span
  m='165720'>And</span> <span m='166146'>then</span> <span
  m='166572'>after</span> <span m='166998'>the</span> <span
  m='167425'>parentheses,</span> <span m='167851'>type</span> <span
  m='168277'>a</span> <span m='168703'>comma,</span> <span m='169130'>and</span>
  <span m='170156'>then</span> <span m='171182'>byrow</span> <span
  m='172209'>=</span> <span m='173235'>TRUE,</span> <span m='174261'>and</span>
  <span m='175288'>then</span> <span m='176314'>add</span> <span
  m='177340'>nrow</span> <span m='178367'>=</span> <span m='179393'>5.</span>
  </p><p><span m='180420'>Close</span> <span m='180910'>the</span> <span
  m='181400'>parentheses,</span> <span m='181890'>and</span> <span
  m='182380'>hit</span> <span m='182870'>Enter.</span> </p><p><span
  m='183360'>So</span> <span m='183700'>what</span> <span m='184040'>did</span>
  <span m='184380'>we</span> <span m='184720'>just</span> <span
  m='185060'>create?</span> </p><p><span m='185400'>Type</span> <span
  m='186142'>PenaltyMatrix</span> <span m='186884'>and</span> <span
  m='187626'>hit</span> <span m='188368'>Enter.</span> </p><p><span
  m='192260'>So</span> <span m='192572'>with</span> <span m='192885'>the</span>
  <span m='193198'>previous</span> <span m='193510'>command,</span> <span
  m='193823'>we</span> <span m='194136'>filled</span> <span m='194449'>up</span>
  <span m='194761'>our</span> <span m='195074'>matrix</span> <span
  m='195387'>row</span> <span m='195700'>by</span> <span m='196660'>row.</span>
  </p><p><span m='197620'>The</span> <span m='197982'>actual</span> <span
  m='198345'>outcomes</span> <span m='198708'>are</span> <span
  m='199071'>on</span> <span m='199434'>the</span> <span m='199797'>left,</span>
  <span m='200160'>and</span> <span m='200508'>the</span> <span
  m='200857'>predicted</span> <span m='201206'>outcomes</span> <span
  m='201555'>are</span> <span m='201903'>on</span> <span m='202252'>the</span>
  <span m='202601'>top.</span> </p><p><span m='202950'>So</span> <span
  m='203236'>as</span> <span m='203522'>we</span> <span m='203808'>saw</span>
  <span m='204094'>in</span> <span m='204380'>the</span> <span
  m='204666'>slides,</span> <span m='204952'>the</span> <span
  m='205238'>worst</span> <span m='205524'>outcomes</span> <span
  m='205810'>are</span> <span m='206228'>when</span> <span m='206647'>we</span>
  <span m='207066'>predict</span> <span m='207485'>a</span> <span
  m='207903'>low</span> <span m='208322'>cost</span> <span
  m='208741'>bucket,</span> <span m='209160'>but</span> <span
  m='209598'>the</span> <span m='210037'>actual</span> <span
  m='210476'>outcome</span> <span m='210915'>is</span> <span m='211354'>a</span>
  <span m='211793'>high</span> <span m='212232'>cost</span> <span
  m='212671'>bucket.</span> </p><p><span m='213110'>We</span> <span
  m='213408'>still</span> <span m='213706'>give</span> <span
  m='214005'>ourselves</span> <span m='214303'>a</span> <span
  m='214601'>penalty</span> <span m='214900'>when</span> <span
  m='215295'>we</span> <span m='215691'>predict</span> <span m='216087'>a</span>
  <span m='216482'>high</span> <span m='216878'>cost</span> <span
  m='217274'>bucket</span> <span m='217670'>and</span> <span
  m='218121'>it's</span> <span m='218573'>actually</span> <span
  m='219025'>a</span> <span m='219476'>low</span> <span m='219928'>cost</span>
  <span m='220380'>bucket,</span> <span m='220831'>but</span> <span
  m='221283'>it's</span> <span m='221735'>not</span> <span m='222186'>as</span>
  <span m='222638'>bad.</span> </p><p><span m='223090'>So</span> <span
  m='223429'>now</span> <span m='223768'>to</span> <span
  m='224107'>compute</span> <span m='224446'>the</span> <span
  m='224785'>penalty</span> <span m='225124'>error</span> <span
  m='225463'>of</span> <span m='225802'>the</span> <span
  m='226141'>baseline</span> <span m='226480'>method,</span> <span
  m='226820'>we</span> <span m='227278'>can</span> <span
  m='227736'>multiply</span> <span m='228195'>our</span> <span
  m='228653'>classification</span> <span m='229111'>matrix</span> <span
  m='229570'>by</span> <span m='230102'>the</span> <span
  m='230635'>penalty</span> <span m='231167'>matrix.</span> </p><p><span
  m='231700'>So</span> <span m='231957'>go</span> <span m='232214'>ahead</span>
  <span m='232471'>and</span> <span m='232729'>hit</span> <span
  m='232986'>the</span> <span m='233243'>Up</span> <span m='233500'>arrow</span>
  <span m='233758'>to</span> <span m='234015'>get</span> <span
  m='234272'>back</span> <span m='234530'>to</span> <span
  m='234840'>where</span> <span m='235150'>you</span> <span
  m='235460'>created</span> <span m='235770'>the</span> <span
  m='236080'>classification</span> <span m='236390'>matrix</span> <span
  m='236954'>with</span> <span m='237518'>the</span> <span
  m='238082'>table</span> <span m='238646'>function.</span> </p><p><span
  m='239210'>And</span> <span m='239625'>we're</span> <span
  m='240041'>going</span> <span m='240456'>to</span> <span
  m='240872'>surround</span> <span m='241287'>the</span> <span
  m='241703'>entire</span> <span m='242118'>table</span> <span
  m='242534'>function</span> <span m='242950'>by</span> <span
  m='243600'>as.matrix</span> <span m='244250'>to</span> <span
  m='244900'>convert</span> <span m='245550'>it</span> <span
  m='246200'>to</span> <span m='246850'>a</span> <span m='247500'>matrix</span>
  <span m='248150'>so</span> <span m='248496'>that</span> <span
  m='248842'>we</span> <span m='249188'>can</span> <span
  m='249534'>multiply</span> <span m='249880'>it</span> <span
  m='250226'>by</span> <span m='250572'>our</span> <span
  m='250918'>penalty</span> <span m='251264'>matrix.</span> </p><p><span
  m='251610'>So</span> <span m='252000'>now</span> <span m='252390'>at</span>
  <span m='252780'>the</span> <span m='253170'>end,</span> <span
  m='253560'>close</span> <span m='253950'>the</span> <span
  m='254340'>parentheses</span> <span m='254730'>and</span> <span
  m='255541'>then</span> <span m='256352'>multiply</span> <span
  m='257163'>by</span> <span m='257975'>PenaltyMatrix</span> <span
  m='258786'>and</span> <span m='259597'>hit</span> <span
  m='260408'>Enter.</span> </p><p><span m='261220'>So</span> <span
  m='261540'>what</span> <span m='261860'>this</span> <span
  m='262180'>does</span> <span m='262500'>is</span> <span m='262820'>it</span>
  <span m='263140'>takes</span> <span m='263460'>each</span> <span
  m='263780'>number</span> <span m='264100'>in</span> <span
  m='264537'>the</span> <span m='264974'>classification</span> <span
  m='265411'>matrix</span> <span m='265848'>and</span> <span
  m='266285'>multiplies</span> <span m='266722'>it</span> <span
  m='267160'>by</span> <span m='267661'>the</span> <span
  m='268162'>corresponding</span> <span m='268663'>number</span> <span
  m='269165'>in</span> <span m='269666'>the</span> <span
  m='270167'>penalty</span> <span m='270668'>matrix.</span> </p><p><span
  m='271170'>So</span> <span m='271482'>now</span> <span m='271795'>to</span>
  <span m='272108'>compute</span> <span m='272421'>the</span> <span
  m='272734'>penalty</span> <span m='273047'>error,</span> <span
  m='273360'>we</span> <span m='273625'>just</span> <span m='273891'>need</span>
  <span m='274156'>to</span> <span m='274422'>sum</span> <span
  m='274687'>it</span> <span m='274953'>up</span> <span m='275218'>and</span>
  <span m='275484'>divide</span> <span m='275750'>by</span> <span
  m='276103'>the</span> <span m='276456'>number</span> <span
  m='276810'>of</span> <span m='277163'>observations</span> <span
  m='277516'>in</span> <span m='277870'>our</span> <span m='278223'>test</span>
  <span m='278576'>set.</span> </p><p><span m='278930'>So</span> <span
  m='279331'>scroll</span> <span m='279732'>up</span> <span
  m='280134'>once,</span> <span m='280535'>and</span> <span
  m='280937'>then</span> <span m='281338'>we'll</span> <span
  m='281740'>just</span> <span m='282243'>surround</span> <span
  m='282746'>our</span> <span m='283250'>entire</span> <span
  m='283753'>previous</span> <span m='284256'>command</span> <span
  m='284760'>by</span> <span m='285005'>the</span> <span m='285250'>sum</span>
  <span m='285495'>function.</span> </p><p><span m='291960'>And</span> <span
  m='292804'>we'll</span> <span m='293648'>divide</span> <span
  m='294492'>by</span> <span m='295336'>the</span> <span
  m='296180'>number</span> <span m='297024'>of</span> <span
  m='297868'>rows</span> <span m='298712'>in</span> <span
  m='299556'>ClaimsTest</span> <span m='300400'>and</span> <span
  m='300983'>hit</span> <span m='301566'>Enter.</span> </p><p><span
  m='302150'>So</span> <span m='302620'>the</span> <span
  m='303090'>penalty</span> <span m='303560'>error</span> <span
  m='304030'>for</span> <span m='304500'>the</span> <span
  m='304970'>baseline</span> <span m='305440'>method</span> <span
  m='305910'>is</span> <span m='306380'>0.74.</span> </p><p><span
  m='306850'>In</span> <span m='307141'>the</span> <span m='307432'>next</span>
  <span m='307723'>video,</span> <span m='308015'>our</span> <span
  m='308306'>goal</span> <span m='308597'>will</span> <span m='308888'>be</span>
  <span m='309180'>to</span> <span m='309647'>create</span> <span
  m='310115'>a</span> <span m='310582'>CART</span> <span m='311050'>model</span>
  <span m='311517'>that</span> <span m='311985'>has</span> <span
  m='312452'>an</span> <span m='312920'>accuracy</span> <span
  m='313387'>higher</span> <span m='313855'>than</span> <span
  m='314322'>68%</span> <span m='314790'>and</span> <span m='315290'>a</span>
  <span m='315790'>penalty</span> <span m='316290'>error</span> <span
  m='316790'>lower</span> <span m='317290'>than</span> <span
  m='317790'>0.74.</span> </p>
uid: 708d44411f55cd4c23a7889b54bd7cd8
type: course
layout: video
---
