---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: uo0EmonbUhU
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: Video-YouTube-Stream
    type: Video
    uid: 8fdace1c48a9e7c174f81898a8824cd0
  - id: 3Play-3Play YouTube id-Stream
    media_location: uo0EmonbUhU
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f4a66ec83f4e6763683f08c6bb3d3b68
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/uo0EmonbUhU/default.jpg'
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9dd71062a7b762523aa591dbce822bdb
  - id: uo0EmonbUhU.srt
    parent_uid: a006fb509ea46226329f9975623c0c25
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-4-logistic-regression-models/video-4-logistic-regression-models-0/uo0EmonbUhU.srt
    title: 3play caption file
    type: null
    uid: e11705e913c56917b9f7083e69d7072f
  - id: uo0EmonbUhU.pdf
    parent_uid: a006fb509ea46226329f9975623c0c25
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-4-logistic-regression-models/video-4-logistic-regression-models-0/uo0EmonbUhU.pdf
    title: 3play pdf file
    type: null
    uid: ef4048d59a0d18c5c882257e6cc2172a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: efb80bb5d6dc02a6b5e91c42d0c27e48
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fa1821d12eace6605e378c5509338672
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.4.05_300k.mp4
    parent_uid: a006fb509ea46226329f9975623c0c25
    title: Video-Internet Archive-MP4
    type: Video
    uid: c2ebe62ed82c3bd62b22cc3fc5bba389
inline_embed_id: 50448734video4logisticregressionmodels99889863
parent_uid: 20d828736498be17a983f7473b292a08
related_resources_text: ''
short_url: video-4-logistic-regression-models-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/election-forecasting-predicting-the-winner-before-any-votes-are-cast-recitation/video-4-logistic-regression-models/video-4-logistic-regression-models-0
title: 'Video 4: Logistic Regression Models'
transcript: >-
  <p><span m='4600'>Now,</span> <span m='4961'>as</span> <span
  m='5322'>we</span> <span m='5683'>start</span> <span m='6044'>to</span> <span
  m='6405'>think</span> <span m='6766'>about</span> <span
  m='7127'>building</span> <span m='7488'>regression</span> <span
  m='7849'>models</span> <span m='8210'>with</span> <span m='8497'>this</span>
  <span m='8784'>data</span> <span m='9071'>set,</span> <span m='9358'>we</span>
  <span m='9645'>need</span> <span m='9932'>to</span> <span
  m='10219'>consider</span> <span m='10506'>the</span> <span
  m='10793'>possibility</span> <span m='11080'>that</span> <span
  m='11640'>there</span> <span m='12200'>is</span> <span
  m='12760'>multicollinearity</span> <span m='13320'>within</span> <span
  m='13880'>the</span> <span m='14280'>independent</span> <span
  m='14680'>variables.</span> </p><p><span m='15080'>And</span> <span
  m='15294'>there's</span> <span m='15508'>a</span> <span m='15722'>good</span>
  <span m='15937'>reason</span> <span m='16151'>to</span> <span
  m='16365'>suspect</span> <span m='16580'>that</span> <span
  m='16993'>there</span> <span m='17406'>would</span> <span m='17820'>be</span>
  <span m='18233'>multicollinearity</span> <span m='18646'>amongst</span> <span
  m='19060'>the</span> <span m='19348'>variables,</span> <span
  m='19636'>because</span> <span m='19925'>in</span> <span m='20213'>some</span>
  <span m='20501'>sense,</span> <span m='20790'>they're</span> <span
  m='21110'>all</span> <span m='21430'>measuring</span> <span
  m='21750'>the</span> <span m='22070'>same</span> <span m='22390'>thing,</span>
  <span m='22710'>which</span> <span m='23030'>is</span> <span
  m='23478'>how</span> <span m='23927'>strong</span> <span m='24376'>the</span>
  <span m='24825'>Republican</span> <span m='25273'>candidate</span> <span
  m='25722'>is</span> <span m='26171'>performing</span> <span
  m='26620'>in</span> <span m='27120'>the</span> <span
  m='27620'>particular</span> <span m='28120'>state.</span> </p><p><span
  m='28620'>So</span> <span m='28996'>while</span> <span
  m='29373'>normally,</span> <span m='29749'>we</span> <span
  m='30126'>would</span> <span m='30502'>run</span> <span m='30879'>the</span>
  <span m='31255'>correlation</span> <span m='31632'>function</span> <span
  m='32009'>on</span> <span m='32346'>the</span> <span m='32683'>training</span>
  <span m='33020'>set,</span> <span m='33357'>in</span> <span
  m='33694'>this</span> <span m='34031'>case,</span> <span m='34368'>it</span>
  <span m='34705'>doesn't</span> <span m='35042'>work.</span> </p><p><span
  m='35380'>It</span> <span m='35826'>says,</span> <span m='36273'>x</span>
  <span m='36720'>must</span> <span m='37166'>be</span> <span
  m='37613'>numeric.</span> </p><p><span m='38060'>And</span> <span
  m='38343'>if</span> <span m='38627'>we</span> <span m='38911'>go</span> <span
  m='39195'>back</span> <span m='39479'>and</span> <span m='39763'>look</span>
  <span m='40046'>at</span> <span m='40330'>the</span> <span
  m='40614'>structure</span> <span m='40898'>of</span> <span
  m='41182'>the</span> <span m='41466'>training</span> <span
  m='41750'>set,</span> <span m='42094'>it</span> <span m='42438'>jumps</span>
  <span m='42783'>out</span> <span m='43127'>why</span> <span
  m='43472'>we're</span> <span m='43816'>getting</span> <span
  m='44161'>this</span> <span m='44505'>issue.</span> </p><p><span
  m='44850'>It's</span> <span m='45080'>because</span> <span
  m='45310'>we're</span> <span m='45540'>trying</span> <span m='45770'>to</span>
  <span m='46000'>take</span> <span m='46230'>the</span> <span
  m='46504'>correlations</span> <span m='46778'>of</span> <span
  m='47052'>the</span> <span m='47327'>names</span> <span m='47601'>of</span>
  <span m='47875'>states,</span> <span m='48150'>which</span> <span
  m='48528'>doesn't</span> <span m='48906'>make</span> <span
  m='49284'>any</span> <span m='49662'>sense.</span> </p><p><span
  m='50040'>So</span> <span m='50358'>to</span> <span m='50676'>compute</span>
  <span m='50995'>the</span> <span m='51313'>correlation,</span> <span
  m='51631'>we're</span> <span m='51950'>going</span> <span m='52242'>to</span>
  <span m='52534'>want</span> <span m='52826'>to</span> <span
  m='53118'>take</span> <span m='53411'>the</span> <span
  m='53703'>correlation</span> <span m='53995'>amongst</span> <span
  m='54287'>just</span> <span m='54580'>the</span> <span
  m='54880'>independent</span> <span m='55180'>variables</span> <span
  m='55480'>that</span> <span m='55780'>we're</span> <span
  m='56080'>going</span> <span m='56354'>to</span> <span m='56628'>be</span>
  <span m='56902'>using</span> <span m='57176'>to</span> <span
  m='57450'>predict,</span> <span m='57724'>and</span> <span m='57998'>we</span>
  <span m='58272'>can</span> <span m='58546'>also</span> <span
  m='58820'>add</span> <span m='59217'>in</span> <span m='59615'>the</span>
  <span m='60013'>dependent</span> <span m='60411'>variable</span> <span
  m='60808'>to</span> <span m='61206'>this</span> <span
  m='61604'>correlation</span> <span m='62002'>matrix.</span> </p><p><span
  m='62400'>So</span> <span m='62793'>I'll</span> <span m='63187'>take</span>
  <span m='63581'>cor</span> <span m='63975'>of</span> <span
  m='64368'>the</span> <span m='64762'>training</span> <span
  m='65156'>set</span> <span m='65550'>but</span> <span m='66085'>just</span>
  <span m='66620'>limit</span> <span m='67155'>it</span> <span
  m='67690'>to</span> <span m='68225'>the</span> <span
  m='68760'>independent</span> <span m='69295'>variables--</span> <span
  m='69830'>Rasmussen,</span> <span m='71392'>SurveyUSA,</span> <span
  m='72954'>PropR,</span> <span m='74516'>and</span> <span
  m='76078'>DiffCount.</span> </p><p><span m='77640'>And</span> <span
  m='77970'>then</span> <span m='78300'>also,</span> <span
  m='78630'>we'll</span> <span m='78960'>add</span> <span m='79290'>in</span>
  <span m='79620'>the</span> <span m='79950'>dependent</span> <span
  m='80280'>variable,</span> <span m='80610'>Republican.</span> </p><p><span
  m='86450'>So</span> <span m='86667'>there</span> <span m='86885'>we</span>
  <span m='87102'>go.</span> </p><p><span m='87320'>We're</span> <span
  m='87687'>seeing</span> <span m='88055'>a</span> <span m='88422'>lot</span>
  <span m='88790'>of</span> <span m='89157'>big</span> <span
  m='89525'>values</span> <span m='89892'>here.</span> </p><p><span
  m='90260'>For</span> <span m='90944'>instance,</span> <span
  m='91628'>SurveyUSA</span> <span m='92312'>and</span> <span
  m='92996'>Rasmussen</span> <span m='93680'>are</span> <span
  m='94100'>independent</span> <span m='94520'>variables</span> <span
  m='94940'>that</span> <span m='95360'>have</span> <span m='95780'>a</span>
  <span m='96200'>correlation</span> <span m='96620'>of</span> <span
  m='97040'>0.94,</span> <span m='97460'>which</span> <span m='97762'>is</span>
  <span m='98065'>very,</span> <span m='98368'>very</span> <span
  m='98671'>large</span> <span m='98974'>and</span> <span
  m='99277'>something</span> <span m='99580'>that</span> <span
  m='99902'>would</span> <span m='100225'>be</span> <span
  m='100547'>concerning.</span> </p><p><span m='100870'>It</span> <span
  m='101131'>means</span> <span m='101393'>that</span> <span
  m='101655'>probably</span> <span m='101916'>combining</span> <span
  m='102178'>them</span> <span m='102440'>together</span> <span
  m='102745'>isn't</span> <span m='103050'>going</span> <span
  m='103356'>to</span> <span m='103661'>do</span> <span m='103967'>much</span>
  <span m='104272'>to</span> <span m='104578'>produce</span> <span
  m='104883'>a</span> <span m='105189'>working</span> <span
  m='105494'>regression</span> <span m='105800'>model.</span> </p><p><span
  m='107670'>So</span> <span m='108060'>let's</span> <span
  m='108450'>first</span> <span m='108840'>consider</span> <span
  m='109230'>the</span> <span m='109620'>case</span> <span
  m='110010'>where</span> <span m='110400'>we</span> <span
  m='110742'>want</span> <span m='111085'>to</span> <span
  m='111428'>build</span> <span m='111770'>a</span> <span
  m='112113'>logistic</span> <span m='112456'>regression</span> <span
  m='112799'>model</span> <span m='113141'>with</span> <span
  m='113484'>just</span> <span m='113827'>one</span> <span
  m='114170'>variable.</span> </p><p><span m='115250'>So</span> <span
  m='115541'>in</span> <span m='115832'>this</span> <span
  m='116123'>case,</span> <span m='116415'>it</span> <span
  m='116706'>stands</span> <span m='116997'>to</span> <span
  m='117288'>reason</span> <span m='117580'>that</span> <span
  m='117830'>the</span> <span m='118080'>variable</span> <span
  m='118330'>we'd</span> <span m='118580'>want</span> <span m='118830'>to</span>
  <span m='119080'>add</span> <span m='119330'>would</span> <span
  m='119517'>be</span> <span m='119705'>the</span> <span m='119892'>one</span>
  <span m='120080'>that</span> <span m='120267'>is</span> <span
  m='120455'>most</span> <span m='120642'>highly</span> <span
  m='120830'>correlated</span> <span m='121546'>with</span> <span
  m='122262'>the</span> <span m='122978'>outcome,</span> <span
  m='123694'>Republican.</span> </p><p><span m='124410'>So</span> <span
  m='124642'>if</span> <span m='124875'>we</span> <span m='125107'>read</span>
  <span m='125340'>the</span> <span m='125572'>bottom</span> <span
  m='125805'>row,</span> <span m='126037'>which</span> <span
  m='126270'>is</span> <span m='126590'>the</span> <span
  m='126910'>correlation</span> <span m='127230'>of</span> <span
  m='127550'>each</span> <span m='127870'>variable</span> <span
  m='128190'>to</span> <span m='128510'>Republican,</span> <span
  m='128830'>we</span> <span m='129206'>see</span> <span m='129583'>that</span>
  <span m='129960'>PropR</span> <span m='130336'>is</span> <span
  m='130713'>probably</span> <span m='131090'>the</span> <span
  m='131466'>best</span> <span m='131843'>candidate</span> <span
  m='132220'>to</span> <span m='132620'>include</span> <span
  m='133020'>in</span> <span m='133420'>our</span> <span
  m='133820'>single-variable</span> <span m='134220'>model,</span> <span
  m='134620'>because</span> <span m='134994'>it's</span> <span
  m='135368'>so</span> <span m='135742'>highly</span> <span
  m='136116'>correlated,</span> <span m='136490'>meaning</span> <span
  m='136725'>it's</span> <span m='136960'>going</span> <span
  m='137195'>to</span> <span m='137430'>do</span> <span m='137665'>a</span>
  <span m='137900'>good</span> <span m='138135'>job</span> <span
  m='138370'>of</span> <span m='138605'>predicting</span> <span
  m='138840'>the</span> <span m='139726'>Republican</span> <span
  m='140613'>status.</span> </p><p><span m='141500'>So</span> <span
  m='141936'>let's</span> <span m='142372'>build</span> <span
  m='142808'>a</span> <span m='143244'>model.</span> </p><p><span
  m='143680'>We</span> <span m='144202'>can</span> <span m='144724'>call</span>
  <span m='145246'>it</span> <span m='145768'>mod1.</span> </p><p><span
  m='146290'>So</span> <span m='146902'>we'll</span> <span
  m='147515'>call</span> <span m='148127'>the</span> <span m='148740'>glm</span>
  <span m='149352'>function,</span> <span m='149965'>predicting</span> <span
  m='150577'>Republican,</span> <span m='151190'>using</span> <span
  m='152420'>PropR</span> <span m='153650'>alone.</span> </p><p><span
  m='154880'>As</span> <span m='155174'>always,</span> <span
  m='155468'>we'll</span> <span m='155762'>pass</span> <span
  m='156057'>along</span> <span m='156351'>the</span> <span
  m='156645'>data</span> <span m='156940'>to</span> <span
  m='157277'>train</span> <span m='157614'>with</span> <span
  m='157951'>as</span> <span m='158288'>our</span> <span
  m='158625'>training</span> <span m='158962'>set.</span> </p><p><span
  m='159300'>And</span> <span m='159703'>because</span> <span
  m='160106'>we</span> <span m='160510'>have</span> <span
  m='160913'>logistic</span> <span m='161316'>regression,</span> <span
  m='161720'>we</span> <span m='162012'>need</span> <span
  m='162304'>family</span> <span m='162596'>=</span> <span
  m='162888'>"binomial".</span> </p><p><span m='166670'>And</span> <span
  m='167045'>we</span> <span m='167420'>can</span> <span m='167795'>take</span>
  <span m='168170'>a</span> <span m='168545'>look</span> <span
  m='168920'>at</span> <span m='169295'>this</span> <span
  m='169670'>model</span> <span m='170045'>using</span> <span
  m='170420'>the</span> <span m='170795'>summary</span> <span
  m='171170'>function.</span> </p><p><span m='172490'>And</span> <span
  m='172781'>we</span> <span m='173072'>can</span> <span m='173363'>see</span>
  <span m='173655'>that</span> <span m='173946'>it</span> <span
  m='174237'>looks</span> <span m='174528'>pretty</span> <span
  m='174820'>nice</span> <span m='175168'>in</span> <span
  m='175516'>terms</span> <span m='175865'>of</span> <span m='176213'>its</span>
  <span m='176561'>significance</span> <span m='176910'>and</span> <span
  m='177411'>the</span> <span m='177913'>sign</span> <span m='178415'>of</span>
  <span m='178916'>the</span> <span m='179418'>coefficients.</span> </p><p><span
  m='179920'>We</span> <span m='180242'>have</span> <span m='180565'>a</span>
  <span m='180887'>lot</span> <span m='181210'>of</span> <span
  m='181532'>stars</span> <span m='181855'>over</span> <span
  m='182177'>here.</span> </p><p><span m='182500'>PropR</span> <span
  m='182911'>is</span> <span m='183322'>the</span> <span
  m='183734'>proportion</span> <span m='184145'>of</span> <span
  m='184557'>the</span> <span m='184968'>polls</span> <span
  m='185380'>that</span> <span m='185644'>said</span> <span
  m='185908'>the</span> <span m='186172'>Republican</span> <span
  m='186436'>won.</span> </p><p><span m='186700'>We</span> <span
  m='187033'>see</span> <span m='187367'>that</span> <span
  m='187700'>that</span> <span m='188034'>has</span> <span m='188368'>a</span>
  <span m='188701'>very</span> <span m='189035'>high</span> <span
  m='189369'>coefficient</span> <span m='189702'>in</span> <span
  m='190036'>terms</span> <span m='190370'>of</span> <span
  m='190620'>predicting</span> <span m='190870'>that</span> <span
  m='191120'>the</span> <span m='191370'>Republican</span> <span
  m='191620'>will</span> <span m='191870'>win</span> <span m='192120'>in</span>
  <span m='192423'>the</span> <span m='192726'>state,</span> <span
  m='193030'>which</span> <span m='193333'>makes</span> <span
  m='193636'>a</span> <span m='193940'>lot</span> <span m='194243'>of</span>
  <span m='194546'>sense.</span> </p><p><span m='194850'>And</span> <span
  m='195110'>we'll</span> <span m='195370'>note</span> <span
  m='195630'>down</span> <span m='195890'>that</span> <span
  m='196150'>the</span> <span m='196410'>AIC</span> <span
  m='196670'>measuring</span> <span m='196930'>the</span> <span
  m='197401'>strength</span> <span m='197872'>of</span> <span
  m='198344'>the</span> <span m='198815'>model</span> <span m='199287'>is</span>
  <span m='199758'>19.8.</span> </p><p><span m='200230'>So</span> <span
  m='200471'>this</span> <span m='200712'>seems</span> <span
  m='200953'>like</span> <span m='201195'>a</span> <span m='201436'>very</span>
  <span m='201677'>reasonable</span> <span m='201918'>model.</span> </p><p><span
  m='202160'>Let's</span> <span m='202447'>see</span> <span
  m='202734'>how</span> <span m='203021'>it</span> <span m='203308'>does</span>
  <span m='203595'>in</span> <span m='203882'>terms</span> <span
  m='204169'>of</span> <span m='204456'>actually</span> <span
  m='204743'>predicting</span> <span m='205030'>the</span> <span
  m='205517'>Republican</span> <span m='206004'>outcome</span> <span
  m='206491'>on</span> <span m='206978'>the</span> <span
  m='207465'>training</span> <span m='207952'>set.</span> </p><p><span
  m='208440'>So</span> <span m='208746'>first,</span> <span m='209052'>we</span>
  <span m='209358'>want</span> <span m='209665'>to</span> <span
  m='209971'>compute</span> <span m='210277'>the</span> <span
  m='210583'>predictions,</span> <span m='210890'>the</span> <span
  m='211263'>predicted</span> <span m='211636'>probabilities</span> <span
  m='212010'>that</span> <span m='212383'>the</span> <span
  m='212756'>Republican</span> <span m='213130'>is</span> <span
  m='213411'>going</span> <span m='213692'>to</span> <span m='213973'>win</span>
  <span m='214255'>on</span> <span m='214536'>the</span> <span
  m='214817'>training</span> <span m='215098'>set.</span> </p><p><span
  m='215380'>So</span> <span m='216027'>we'll</span> <span
  m='216675'>create</span> <span m='217323'>a</span> <span
  m='217971'>vector</span> <span m='218618'>called</span> <span
  m='219266'>pred1,</span> <span m='219914'>prediction</span> <span
  m='220562'>one,</span> <span m='221210'>then</span> <span
  m='221613'>we'll</span> <span m='222016'>call</span> <span
  m='222420'>the</span> <span m='222823'>predict</span> <span
  m='223226'>function.</span> </p><p><span m='223630'>We'll</span> <span
  m='224075'>pass</span> <span m='224520'>it</span> <span m='224965'>our</span>
  <span m='225410'>model</span> <span m='225855'>one.</span> </p><p><span
  m='226300'>And</span> <span m='226620'>we're</span> <span
  m='226940'>not</span> <span m='227260'>going</span> <span m='227580'>to</span>
  <span m='227900'>pass</span> <span m='228220'>it</span> <span
  m='228540'>newdata,</span> <span m='228860'>because</span> <span
  m='229170'>we're</span> <span m='229480'>just</span> <span
  m='229790'>making</span> <span m='230100'>predictions</span> <span
  m='230410'>on</span> <span m='230635'>the</span> <span
  m='230860'>training</span> <span m='231085'>set</span> <span
  m='231310'>right</span> <span m='231535'>now.</span> </p><p><span
  m='231760'>We're</span> <span m='232052'>not</span> <span
  m='232345'>looking</span> <span m='232638'>at</span> <span
  m='232931'>test</span> <span m='233224'>set</span> <span
  m='233517'>predictions.</span> </p><p><span m='233810'>But</span> <span
  m='234232'>we</span> <span m='234654'>do</span> <span m='235076'>need</span>
  <span m='235499'>to</span> <span m='235921'>pass</span> <span
  m='236343'>it</span> <span m='236766'>type</span> <span m='237188'>=</span>
  <span m='237610'>"response"</span> <span m='238033'>to</span> <span
  m='238455'>get</span> <span m='238877'>probabilities</span> <span
  m='239300'>out</span> <span m='239842'>as</span> <span m='240385'>the</span>
  <span m='240927'>predictions.</span> </p><p><span m='241470'>And</span> <span
  m='241654'>now,</span> <span m='241838'>we</span> <span m='242022'>want</span>
  <span m='242206'>to</span> <span m='242390'>see</span> <span
  m='242574'>how</span> <span m='242758'>well</span> <span
  m='242942'>it's</span> <span m='243126'>doing.</span> </p><p><span
  m='243310'>So</span> <span m='243602'>if</span> <span m='243895'>we</span>
  <span m='244187'>used</span> <span m='244480'>a</span> <span
  m='244772'>threshold</span> <span m='245065'>of</span> <span
  m='245357'>0.5,</span> <span m='245650'>where</span> <span
  m='245883'>we</span> <span m='246116'>said</span> <span m='246349'>if</span>
  <span m='246582'>the</span> <span m='246815'>probability</span> <span
  m='247048'>is</span> <span m='247281'>at</span> <span m='247514'>least</span>
  <span m='247747'>1/2,</span> <span m='247980'>we're</span> <span
  m='248342'>going</span> <span m='248704'>to</span> <span
  m='249066'>predict</span> <span m='249428'>Republican,</span> <span
  m='249790'>otherwise,</span> <span m='250307'>we'll</span> <span
  m='250825'>predict</span> <span m='251342'>Democrat.</span> </p><p><span
  m='251860'>Let's</span> <span m='252134'>see</span> <span
  m='252408'>how</span> <span m='252682'>that</span> <span
  m='252956'>would</span> <span m='253230'>do</span> <span m='253504'>on</span>
  <span m='253778'>the</span> <span m='254052'>training</span> <span
  m='254326'>set.</span> </p><p><span m='254600'>So</span> <span
  m='254933'>we'll</span> <span m='255267'>want</span> <span
  m='255600'>to</span> <span m='255934'>use</span> <span m='256268'>the</span>
  <span m='256601'>table</span> <span m='256935'>function</span> <span
  m='257269'>and</span> <span m='257736'>look</span> <span m='258204'>at</span>
  <span m='258671'>the</span> <span m='259139'>training</span> <span
  m='259607'>set</span> <span m='260074'>Republican</span> <span
  m='260542'>value</span> <span m='261010'>against</span> <span
  m='261695'>the</span> <span m='262380'>logical</span> <span
  m='263065'>of</span> <span m='263750'>whether</span> <span
  m='264435'>pred1</span> <span m='265120'>is</span> <span
  m='265681'>greater</span> <span m='266242'>than</span> <span
  m='266804'>or</span> <span m='267365'>equal</span> <span m='267927'>to</span>
  <span m='268488'>0.5.</span> </p><p><span m='269050'>So</span> <span
  m='269373'>here,</span> <span m='269697'>the</span> <span
  m='270021'>rows,</span> <span m='270345'>as</span> <span
  m='270669'>usual,</span> <span m='270993'>are</span> <span
  m='271316'>the</span> <span m='271640'>outcome</span> <span
  m='271964'>--</span> <span m='272288'>1</span> <span m='272612'>is</span>
  <span m='272936'>Republican,</span> <span m='273260'>0</span> <span
  m='273823'>is</span> <span m='274386'>Democrat.</span> </p><p><span
  m='274950'>And</span> <span m='275297'>the</span> <span
  m='275645'>columns--</span> <span m='275992'>TRUE</span> <span
  m='276340'>means</span> <span m='276687'>that</span> <span
  m='277035'>we</span> <span m='277382'>predicted</span> <span
  m='277730'>Republican,</span> <span m='278205'>FALSE</span> <span
  m='278680'>means</span> <span m='279155'>we</span> <span
  m='279630'>predicted</span> <span m='280105'>Democrat.</span> </p><p><span
  m='280580'>So</span> <span m='280866'>we</span> <span m='281152'>see</span>
  <span m='281438'>that</span> <span m='281725'>on</span> <span
  m='282011'>the</span> <span m='282297'>training</span> <span
  m='282583'>set,</span> <span m='282870'>this</span> <span
  m='283176'>model</span> <span m='283482'>with</span> <span
  m='283788'>one</span> <span m='284095'>variable</span> <span
  m='284401'>as</span> <span m='284707'>a</span> <span
  m='285013'>prediction</span> <span m='285320'>makes</span> <span
  m='285858'>four</span> <span m='286396'>mistakes,</span> <span
  m='286935'>which</span> <span m='287473'>is</span> <span
  m='288011'>just</span> <span m='288550'>about</span> <span
  m='289016'>the</span> <span m='289482'>same</span> <span m='289948'>as</span>
  <span m='290415'>our</span> <span m='290881'>smart</span> <span
  m='291347'>baseline</span> <span m='291813'>model.</span> </p><p><span
  m='292280'>So</span> <span m='292567'>now,</span> <span
  m='292854'>let's</span> <span m='293141'>see</span> <span m='293429'>if</span>
  <span m='293716'>we</span> <span m='294003'>can</span> <span
  m='294290'>improve</span> <span m='294578'>on</span> <span
  m='294865'>this</span> <span m='295152'>performance</span> <span
  m='295440'>by</span> <span m='295904'>adding</span> <span m='296368'>in</span>
  <span m='296832'>another</span> <span m='297296'>variable.</span> </p><p><span
  m='297760'>So</span> <span m='298173'>if</span> <span m='298586'>we</span>
  <span m='298999'>go</span> <span m='299412'>back</span> <span
  m='299825'>up</span> <span m='300238'>to</span> <span m='300651'>our</span>
  <span m='301064'>correlations</span> <span m='301477'>here,</span> <span
  m='301890'>we're</span> <span m='302140'>going</span> <span
  m='302390'>to</span> <span m='302640'>be</span> <span
  m='302890'>searching,</span> <span m='303140'>since</span> <span
  m='303390'>there's</span> <span m='303640'>so</span> <span
  m='304012'>much</span> <span m='304385'>multicollinearity,</span> <span
  m='304758'>we</span> <span m='305131'>might</span> <span m='305504'>be</span>
  <span m='305877'>searching</span> <span m='306250'>for</span> <span
  m='306592'>a</span> <span m='306935'>pair</span> <span m='307278'>of</span>
  <span m='307620'>variables</span> <span m='307963'>that</span> <span
  m='308306'>has</span> <span m='308649'>a</span> <span
  m='308991'>relatively</span> <span m='309334'>lower</span> <span
  m='309677'>correlation</span> <span m='310020'>with</span> <span
  m='310408'>each</span> <span m='310796'>other,</span> <span
  m='311184'>because</span> <span m='311572'>they</span> <span
  m='311960'>might</span> <span m='312348'>kind</span> <span
  m='312736'>of</span> <span m='313124'>work</span> <span
  m='313512'>together</span> <span m='313900'>to</span> <span
  m='314314'>improve</span> <span m='314728'>the</span> <span
  m='315142'>prediction</span> <span m='315556'>overall</span> <span
  m='315970'>of</span> <span m='316290'>the</span> <span
  m='316610'>Republican</span> <span m='316930'>outcome.</span> </p><p><span
  m='317250'>If</span> <span m='317645'>two</span> <span
  m='318041'>variables</span> <span m='318437'>are</span> <span
  m='318832'>highly,</span> <span m='319228'>highly</span> <span
  m='319624'>correlated,</span> <span m='320020'>they're</span> <span
  m='320548'>less</span> <span m='321077'>likely</span> <span
  m='321605'>to</span> <span m='322134'>improve</span> <span
  m='322662'>predictions</span> <span m='323191'>together,</span> <span
  m='323720'>since</span> <span m='324285'>they're</span> <span
  m='324850'>so</span> <span m='325415'>similar</span> <span
  m='325980'>in</span> <span m='326545'>their</span> <span
  m='327110'>correlation</span> <span m='327675'>structure.</span> </p><p><span
  m='328240'>So</span> <span m='328510'>it</span> <span m='328781'>looks</span>
  <span m='329052'>like,</span> <span m='329323'>just</span> <span
  m='329593'>looking</span> <span m='329864'>at</span> <span
  m='330135'>this</span> <span m='330406'>top</span> <span
  m='330676'>left</span> <span m='330947'>four</span> <span m='331218'>by</span>
  <span m='331489'>four</span> <span m='331760'>matrix,</span> <span
  m='332211'>which</span> <span m='332662'>is</span> <span m='333114'>the</span>
  <span m='333565'>correlations</span> <span m='334017'>between</span> <span
  m='334468'>all</span> <span m='334920'>the</span> <span
  m='335397'>independent</span> <span m='335874'>variables,</span> <span
  m='336351'>basically</span> <span m='336828'>the</span> <span
  m='337305'>least</span> <span m='337782'>correlated</span> <span
  m='338260'>pairs</span> <span m='338793'>of</span> <span
  m='339327'>variables</span> <span m='339861'>are</span> <span
  m='340395'>either</span> <span m='340928'>Rasmussen</span> <span
  m='341462'>and</span> <span m='341996'>DiffCount,</span> <span
  m='342530'>or</span> <span m='343267'>SurveyUSA</span> <span
  m='344005'>and</span> <span m='344742'>DiffCount.</span> </p><p><span
  m='345480'>So</span> <span m='345737'>the</span> <span m='345995'>idea</span>
  <span m='346253'>would</span> <span m='346511'>be</span> <span
  m='346768'>to</span> <span m='347026'>try</span> <span m='347284'>out</span>
  <span m='347542'>one</span> <span m='347800'>of</span> <span
  m='348174'>these</span> <span m='348548'>pairs</span> <span
  m='348922'>in</span> <span m='349297'>our</span> <span
  m='349671'>two-variable</span> <span m='350045'>model.</span> </p><p><span
  m='350420'>So</span> <span m='350847'>we'll</span> <span m='351274'>go</span>
  <span m='351701'>ahead</span> <span m='352128'>and</span> <span
  m='352555'>try</span> <span m='352982'>out</span> <span
  m='353409'>SurveyUSA</span> <span m='353836'>and</span> <span
  m='354263'>DiffCount</span> <span m='354690'>together</span> <span
  m='355256'>in</span> <span m='355822'>our</span> <span
  m='356388'>second</span> <span m='356954'>model.</span> </p><p><span
  m='357520'>So</span> <span m='358045'>to</span> <span m='358570'>save</span>
  <span m='359095'>ourselves</span> <span m='359620'>some</span> <span
  m='360145'>typing,</span> <span m='360670'>we</span> <span
  m='360910'>can</span> <span m='361150'>hit</span> <span m='361390'>up</span>
  <span m='361630'>a</span> <span m='361870'>few</span> <span
  m='362110'>times</span> <span m='362350'>until</span> <span
  m='362590'>we</span> <span m='362830'>get</span> <span m='363193'>to</span>
  <span m='363557'>the</span> <span m='363921'>model</span> <span
  m='364285'>definition</span> <span m='364648'>for</span> <span
  m='365012'>model</span> <span m='365376'>one.</span> </p><p><span
  m='365740'>And</span> <span m='366141'>then</span> <span m='366542'>we</span>
  <span m='366943'>can</span> <span m='367345'>just</span> <span
  m='367746'>change</span> <span m='368147'>the</span> <span
  m='368548'>variables.</span> </p><p><span m='368950'>In</span> <span
  m='369668'>this</span> <span m='370387'>case,</span> <span
  m='371106'>we're</span> <span m='371825'>now</span> <span
  m='372544'>using</span> <span m='373263'>SurveyUSA</span> <span
  m='373982'>plus</span> <span m='374701'>DiffCount.</span> </p><p><span
  m='375420'>We'll</span> <span m='375652'>also</span> <span
  m='375885'>need</span> <span m='376117'>to</span> <span
  m='376350'>remember</span> <span m='376582'>to</span> <span
  m='376815'>change</span> <span m='377047'>the</span> <span
  m='377280'>name</span> <span m='377512'>of</span> <span m='377745'>our</span>
  <span m='377977'>model</span> <span m='378210'>from</span> <span
  m='378547'>mod1</span> <span m='378885'>to</span> <span
  m='379222'>mod2.</span> </p><p><span m='382430'>And</span> <span
  m='382677'>now,</span> <span m='382924'>just</span> <span
  m='383171'>like</span> <span m='383418'>before,</span> <span
  m='383665'>we're</span> <span m='383912'>going</span> <span
  m='384160'>to</span> <span m='384592'>want</span> <span m='385025'>to</span>
  <span m='385458'>compute</span> <span m='385891'>out</span> <span
  m='386324'>our</span> <span m='386757'>predictions.</span> </p><p><span
  m='387190'>So</span> <span m='387638'>we'll</span> <span m='388086'>say</span>
  <span m='388535'>pred2</span> <span m='388983'>is</span> <span
  m='389432'>equal</span> <span m='389880'>to</span> <span m='390329'>the</span>
  <span m='390777'>predict</span> <span m='391226'>of</span> <span
  m='391674'>our</span> <span m='392123'>model</span> <span m='392571'>2,</span>
  <span m='393020'>again,</span> <span m='393291'>with</span> <span
  m='393562'>type</span> <span m='393834'>=</span> <span
  m='394105'>"response",</span> <span m='394377'>because</span> <span
  m='394648'>we</span> <span m='394920'>need</span> <span m='395188'>to</span>
  <span m='395456'>get</span> <span m='395724'>those</span> <span
  m='395992'>probabilities.</span> </p><p><span m='396260'>Again,</span> <span
  m='396588'>we're</span> <span m='396916'>not</span> <span
  m='397245'>passing</span> <span m='397573'>in</span> <span
  m='397901'>newdata.</span> </p><p><span m='398230'>This</span> <span
  m='398466'>is</span> <span m='398703'>a</span> <span
  m='398940'>training</span> <span m='399176'>set</span> <span
  m='399413'>prediction.</span> </p><p><span m='402180'>And</span> <span
  m='402728'>finally,</span> <span m='403277'>we</span> <span
  m='403826'>can</span> <span m='404375'>use</span> <span m='404923'>the</span>
  <span m='405472'>up</span> <span m='406021'>arrows</span> <span
  m='406570'>to</span> <span m='406903'>see</span> <span m='407236'>how</span>
  <span m='407570'>our</span> <span m='407903'>second</span> <span
  m='408236'>model's</span> <span m='408570'>predictions</span> <span
  m='408903'>are</span> <span m='409236'>doing</span> <span m='409570'>at</span>
  <span m='410050'>predicting</span> <span m='410530'>the</span> <span
  m='411010'>Republican</span> <span m='411490'>outcome</span> <span
  m='411970'>in</span> <span m='412450'>the</span> <span
  m='412930'>training</span> <span m='413410'>set.</span> </p><p><span
  m='413890'>And</span> <span m='414193'>we</span> <span m='414496'>can</span>
  <span m='414799'>see</span> <span m='415102'>that</span> <span
  m='415405'>we</span> <span m='415708'>made</span> <span m='416011'>one</span>
  <span m='416314'>less</span> <span m='416617'>mistake.</span> </p><p><span
  m='416920'>We</span> <span m='417212'>made</span> <span
  m='417504'>three</span> <span m='417796'>mistakes</span> <span
  m='418088'>instead</span> <span m='418380'>of</span> <span
  m='418672'>four</span> <span m='418964'>on</span> <span m='419256'>the</span>
  <span m='419548'>training</span> <span m='419840'>set--</span> <span
  m='420190'>so</span> <span m='420540'>a</span> <span m='420890'>little</span>
  <span m='421240'>better</span> <span m='421590'>than</span> <span
  m='421940'>the</span> <span m='422290'>smart</span> <span
  m='422640'>baseline</span> <span m='422990'>but</span> <span
  m='423360'>nothing</span> <span m='423730'>too</span> <span
  m='424100'>impressive.</span> </p><p><span m='424470'>And</span> <span
  m='424654'>the</span> <span m='424838'>last</span> <span
  m='425022'>thing</span> <span m='425206'>we're</span> <span
  m='425390'>going</span> <span m='425574'>to</span> <span
  m='425758'>want</span> <span m='425942'>to</span> <span m='426126'>do</span>
  <span m='426310'>is</span> <span m='426546'>to</span> <span
  m='426782'>actually</span> <span m='427018'>look</span> <span
  m='427254'>at</span> <span m='427490'>the</span> <span m='427726'>model</span>
  <span m='427963'>and</span> <span m='428199'>see</span> <span
  m='428435'>if</span> <span m='428671'>it</span> <span m='428907'>makes</span>
  <span m='429143'>sense.</span> </p><p><span m='429380'>So</span> <span
  m='429921'>we</span> <span m='430462'>can</span> <span m='431003'>run</span>
  <span m='431544'>summary</span> <span m='432085'>of</span> <span
  m='432626'>our</span> <span m='433167'>model</span> <span
  m='433708'>two.</span> </p><p><span m='434250'>And</span> <span
  m='434492'>we</span> <span m='434735'>can</span> <span m='434977'>see</span>
  <span m='435220'>that</span> <span m='435462'>there</span> <span
  m='435705'>are</span> <span m='435947'>some</span> <span
  m='436190'>things</span> <span m='436432'>that</span> <span
  m='436675'>are</span> <span m='436917'>pluses.</span> </p><p><span
  m='437160'>For</span> <span m='437485'>instance,</span> <span
  m='437810'>the</span> <span m='438135'>AIC</span> <span m='438460'>has</span>
  <span m='438785'>a</span> <span m='439110'>smaller</span> <span
  m='439435'>value,</span> <span m='439760'>which</span> <span
  m='440300'>suggests</span> <span m='440840'>a</span> <span
  m='441380'>stronger</span> <span m='441920'>model.</span> </p><p><span
  m='442460'>And</span> <span m='442830'>the</span> <span
  m='443200'>estimates</span> <span m='443570'>have,</span> <span
  m='443940'>again,</span> <span m='444310'>the</span> <span
  m='444680'>sign</span> <span m='445050'>we</span> <span
  m='445420'>would</span> <span m='445790'>expect.</span> </p><p><span
  m='446160'>So</span> <span m='446625'>SurveyUSA</span> <span
  m='447090'>and</span> <span m='447555'>DiffCount</span> <span
  m='448020'>both</span> <span m='448485'>have</span> <span
  m='448950'>positive</span> <span m='449415'>coefficients</span> <span
  m='449880'>in</span> <span m='450196'>predicting</span> <span
  m='450513'>if</span> <span m='450830'>the</span> <span
  m='451146'>Republican</span> <span m='451463'>wins</span> <span
  m='451780'>the</span> <span m='452178'>state,</span> <span
  m='452576'>which</span> <span m='452974'>makes</span> <span
  m='453372'>sense.</span> </p><p><span m='453770'>But</span> <span
  m='454129'>a</span> <span m='454488'>weakness</span> <span
  m='454847'>of</span> <span m='455206'>this</span> <span
  m='455565'>model</span> <span m='455925'>is</span> <span
  m='456284'>that</span> <span m='456643'>neither</span> <span
  m='457002'>of</span> <span m='457361'>these</span> <span
  m='457720'>variables</span> <span m='458080'>has</span> <span
  m='458543'>a</span> <span m='459007'>significance</span> <span
  m='459471'>of</span> <span m='459935'>a</span> <span m='460398'>star</span>
  <span m='460862'>or</span> <span m='461326'>better,</span> <span
  m='461790'>which</span> <span m='462366'>means</span> <span
  m='462942'>that</span> <span m='463518'>they</span> <span
  m='464095'>are</span> <span m='464671'>less</span> <span
  m='465247'>significant</span> <span m='465823'>statistically.</span>
  </p><p><span m='466400'>So</span> <span m='466700'>there</span> <span
  m='467000'>are</span> <span m='467300'>definitely</span> <span
  m='467600'>some</span> <span m='467900'>strengths</span> <span
  m='468200'>and</span> <span m='468500'>weaknesses</span> <span
  m='468800'>between</span> <span m='469235'>the</span> <span
  m='469671'>two-variable</span> <span m='470107'>and</span> <span
  m='470542'>the</span> <span m='470978'>one-variable</span> <span
  m='471414'>model.</span> </p><p><span m='471850'>We'll</span> <span
  m='472195'>go</span> <span m='472540'>ahead</span> <span m='472885'>and</span>
  <span m='473230'>use</span> <span m='473575'>the</span> <span
  m='473920'>two-variable</span> <span m='474265'>model</span> <span
  m='474610'>when</span> <span m='474974'>we</span> <span m='475338'>make</span>
  <span m='475703'>our</span> <span m='476067'>predictions</span> <span
  m='476432'>on</span> <span m='476796'>the</span> <span
  m='477161'>testing</span> <span m='477525'>set.</span> </p>
uid: a006fb509ea46226329f9975623c0c25
type: courses
layout: video
---
