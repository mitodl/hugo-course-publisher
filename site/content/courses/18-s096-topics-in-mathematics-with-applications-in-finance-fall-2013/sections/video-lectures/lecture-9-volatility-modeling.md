---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture introduces the topic of
  volatility modeling, including historical volatility, geometric Brownian
  motion, and Poisson jump diffusions.</p> <p><strong>Instructor:</strong> Dr.
  Peter Kempthorne</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: cDlbEQz1PQk
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Video-YouTube-Stream
    type: Video
    uid: b1324c4801e00326b4e16dd7ef39bb3d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/cDlbEQz1PQk/default.jpg'
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9743fe9e8db2fada705ef8bd25ba825b
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Video-iTunes U-MP4
    type: Video
    uid: 6a7343837c567b435c4fc6545d4f762f
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec09_300k.mp4'
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 96f1f13b99ef419bac84b7015fc53a03
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: cDlbEQz1PQk
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 778f895ee2ee52a387f9143ea707416b
  - id: cDlbEQz1PQk.srt
    parent_uid: b89428de15f893c4d601f2df898c176a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-9-volatility-modeling/cDlbEQz1PQk.srt
    title: 3play caption file
    type: null
    uid: 55e0ceb42ca927ed32db1e155d76680e
  - id: cDlbEQz1PQk.pdf
    parent_uid: b89428de15f893c4d601f2df898c176a
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-9-volatility-modeling/cDlbEQz1PQk.pdf
    title: 3play pdf file
    type: null
    uid: 5e4e8c06897e499619395add54b3062f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5df4a919107c577100236b2a213e5054
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b89428de15f893c4d601f2df898c176a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: dac6ef1d838d4321817a836f9156cc9b
inline_embed_id: '40884087lecture9:volatilitymodeling73813952'
order_index: 126
parent_uid: d23a85587c0c7524ea054e655c999532
related_resources_text: ''
short_url: lecture-9-volatility-modeling
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-9-volatility-modeling
title: 'Lecture 9: Volatility Modeling'
transcript: >-
  <p><span m='60'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10830'>make</span> <span m='10940'>a</span> <span
  m='10980'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12800'>materials</span> <span m='13330'>from</span> <span
  m='13490'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14460'>courses,</span> <span m='15570'>visit</span> <span
  m='15780'>MIT</span> <span m='16210'>OpenCourseWare</span> <span
  m='17260'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='22370'>PROFESSOR: All</span> <span m='22500'>right.</span> <span
  m='23500'>Let's</span> <span m='23610'>see.</span> <span
  m='23720'>We're</span> <span m='23840'>going</span> <span m='23920'>to</span>
  <span m='23970'>start</span> <span m='24210'>today</span> <span
  m='24660'>with</span> <span m='25220'>a</span> <span m='25340'>wrap</span>
  <span m='25650'>up</span> <span m='25930'>of</span> <span m='27230'>our</span>
  <span m='27380'>discussion</span> <span m='27860'>of</span> <span
  m='27960'>univariate</span> <span m='28550'>time</span> <span
  m='28800'>series</span> <span m='29130'>analysis.</span> <span
  m='29990'>And</span> <span m='30180'>last</span> <span m='30480'>time</span>
  <span m='31350'>we</span> <span m='31900'>went</span> <span
  m='32159'>through</span> <span m='33300'>the</span> <span
  m='33950'>world</span> <span m='34350'>representation</span> <span
  m='35140'>theorem,</span> <span m='36000'>which</span> <span
  m='36550'>applies</span> <span m='37160'>to</span> <span
  m='37380'>covarient</span> <span m='37830'>stationary</span> <span
  m='38480'>processes,</span> <span m='38925'>a</span> <span
  m='39370'>very</span> <span m='39570'>powerful</span> <span
  m='40000'>theorem.</span> <span m='41090'>And</span> <span
  m='42420'>implementations</span> <span m='43400'>of</span> <span
  m='43810'>the</span> <span m='44130'>covariant</span> <span
  m='44460'>stationary</span> <span m='44880'>processor</span> <span
  m='45400'>with</span> <span m='45800'>ARMA</span> <span
  m='46160'>models.</span> <span m='47700'>And</span> <span m='47860'>we</span>
  <span m='47960'>discussed</span> <span m='49180'>estimation</span> <span
  m='49750'>of</span> <span m='49840'>those</span> <span m='50060'>models</span>
  <span m='50430'>with</span> <span m='53800'>maximum</span> <span
  m='54350'>likelihood.</span> </p><p><span m='54840'>And</span> <span
  m='54980'>here</span> <span m='55290'>in</span> <span m='55370'>this</span>
  <span m='55580'>slide</span> <span m='56480'>i just</span> <span
  m='56700'>wanted</span> <span m='57010'>to</span> <span
  m='57680'>highlight</span> <span m='58460'>how</span> <span
  m='59420'>when</span> <span m='59630'>we</span> <span
  m='60100'>estimate</span> <span m='60680'>models</span> <span
  m='61070'>with</span> <span m='61230'>maximum</span> <span
  m='61740'>likelihood</span> <span m='62780'>we</span> <span
  m='62960'>need</span> <span m='63090'>to</span> <span m='63150'>have</span>
  <span m='63340'>an</span> <span m='63410'>assumption</span> <span
  m='63780'>of</span> <span m='63860'>a</span> <span
  m='63930'>probability</span> <span m='64510'>distribution</span> <span
  m='65260'>for</span> <span m='66370'>what's</span> <span
  m='66650'>random,</span> <span m='67280'>and</span> <span m='68110'>in</span>
  <span m='68220'>the</span> <span m='68340'>ARMA</span> <span
  m='68630'>structure</span> <span m='69600'>we</span> <span
  m='69950'>consider</span> <span m='70270'>the</span> <span
  m='70580'>simple</span> <span m='70920'>case</span> <span
  m='71270'>where</span> <span m='72270'>the</span> <span
  m='72530'>innovations,</span> <span m='73150'>the</span> <span m='73300'>eta
  t,</span> <span m='74120'>are</span> <span m='75870'>normally</span> <span
  m='76520'>distributed</span> <span m='77050'>white</span> <span
  m='77320'>noise.</span> <span m='77690'>So</span> <span
  m='77900'>they're</span> <span m='78060'>independent</span> <span
  m='78330'>and</span> <span m='78600'>identically</span> <span
  m='79050'>distributed</span> <span m='79520'>normal</span> <span
  m='79840'>random</span> <span m='80100'>variables.</span> </p><p><span
  m='81500'>And</span> <span m='82120'>the</span> <span
  m='82260'>likelihood</span> <span m='82710'>function</span> <span
  m='83710'>can</span> <span m='83870'>be</span> <span
  m='84000'>maximized</span> <span m='85760'>at</span> <span
  m='86080'>the</span> <span m='86180'>maximum</span> <span
  m='86590'>likelihood</span> <span m='87210'>parameters.</span> <span
  m='88240'>And</span> <span m='89570'>it's</span> <span m='91600'>simple</span>
  <span m='92250'>to</span> <span m='92490'>implement</span> <span
  m='93040'>the</span> <span m='93140'>limited</span> <span
  m='93470'>information</span> <span m='94010'>maximum</span> <span
  m='94450'>likelihood</span> <span m='95520'>where</span> <span
  m='95870'>one</span> <span m='96090'>conditions</span> <span
  m='96670'>on</span> <span m='96820'>the</span> <span m='96900'>first</span>
  <span m='97260'>few</span> <span m='97400'>observations</span> <span
  m='98200'>in</span> <span m='98320'>the</span> <span m='98400'>time</span>
  <span m='98680'>series.</span> <span m='100590'>If</span> <span
  m='100740'>you</span> <span m='100840'>look</span> <span m='101040'>at</span>
  <span m='101180'>the</span> <span m='101390'>likelihood</span> <span
  m='101810'>structure</span> <span m='103520'>for</span> <span
  m='103900'>ARMA</span> <span m='104080'>models,</span> <span
  m='106870'>the</span> <span m='107440'>density</span> <span
  m='108030'>of</span> <span m='108910'>an</span> <span
  m='109090'>outcome</span> <span m='109520'>at</span> <span m='109570'>a</span>
  <span m='109600'>given</span> <span m='109900'>time</span> <span
  m='110210'>point</span> <span m='110520'>depends</span> <span
  m='110980'>on</span> <span m='111130'>lags</span> <span m='112250'>of</span>
  <span m='112600'>that</span> <span m='112910'>dependent</span> <span
  m='113300'>variable.</span> </p><p><span m='113700'>So</span> <span
  m='113810'>if those</span> <span m='114070'>are</span> <span
  m='114130'>unavailable,</span> <span m='115540'>then</span> <span
  m='115830'>that</span> <span m='116340'>can</span> <span m='116490'>be</span>
  <span m='116620'>a</span> <span m='116690'>problem.</span> <span
  m='118000'>One</span> <span m='118210'>can</span> <span
  m='119350'>implement</span> <span m='120150'>limited</span> <span
  m='120510'>information</span> <span m='121020'>maximum</span> <span
  m='121360'>likelihood</span> <span m='121930'>where</span> <span
  m='122120'>you're</span> <span m='122250'>just</span> <span
  m='122430'>conditioning</span> <span m='122900'>on</span> <span
  m='123060'>those</span> <span m='123550'>initial</span> <span
  m='123890'>values,</span> <span m='124680'>or</span> <span
  m='125340'>there</span> <span m='125610'>are</span> <span
  m='125710'>full</span> <span m='126020'>information</span> <span
  m='126540'>maximum</span> <span m='126960'>likelihood</span> <span
  m='127190'>methods</span> <span m='127740'>that</span> <span
  m='128039'>you</span> <span m='128199'>can</span> <span
  m='128350'>apply</span> <span m='128669'>as</span> <span
  m='128780'>well.</span> <span m='129750'>Generally</span> <span
  m='130180'>though</span> <span m='130400'>the</span> <span
  m='130990'>limited</span> <span m='131220'>information</span> <span
  m='132390'>case</span> <span m='133170'>is</span> <span
  m='133600'>what's</span> <span m='133820'>applied.</span> </p><p><span
  m='136300'>Then</span> <span m='136670'>the</span> <span
  m='136810'>issue</span> <span m='137160'>is</span> <span
  m='137790'>model</span> <span m='138130'>selection.</span> <span
  m='138800'>And</span> <span m='140160'>with</span> <span
  m='140760'>model</span> <span m='141030'>selection</span> <span
  m='141600'>the</span> <span m='141730'>issues</span> <span
  m='142020'>that</span> <span m='142170'>arise</span> <span
  m='142450'>with</span> <span m='142580'>time</span> <span
  m='142920'>series</span> <span m='143270'>are</span> <span
  m='143530'>issues</span> <span m='143870'>that</span> <span
  m='143960'>arise</span> <span m='144370'>in</span> <span
  m='144480'>fitting</span> <span m='144910'>any</span> <span
  m='145140'>kind</span> <span m='145450'>of</span> <span
  m='145570'>statistical</span> <span m='146180'>model.</span> <span
  m='147480'>Ordinarily</span> <span m='148100'>one will</span> <span
  m='148390'>have</span> <span m='148820'>multiple</span> <span
  m='149340'>candidates</span> <span m='150040'>for</span> <span
  m='150150'>the</span> <span m='150240'>model</span> <span
  m='150560'>you</span> <span m='150640'>want</span> <span m='150810'>to</span>
  <span m='150860'>fit</span> <span m='151110'>to</span> <span
  m='151180'>data.</span> <span m='152270'>And</span> <span
  m='152590'>the</span> <span m='152650'>issue</span> <span m='152890'>is</span>
  <span m='152970'>how</span> <span m='153150'>do</span> <span
  m='153220'>you</span> <span m='153340'>judge</span> <span
  m='153980'>which</span> <span m='154240'>ones</span> <span
  m='154780'>are</span> <span m='154930'>better</span> <span
  m='155420'>than</span> <span m='155560'>others.</span> <span
  m='156390'>Why</span> <span m='156490'>would</span> <span
  m='156660'>you</span> <span m='156830'>prefer</span> <span
  m='157270'>one</span> <span m='157510'>over</span> <span m='157660'>the</span>
  <span m='157820'>other?</span> </p><p><span m='158700'>And</span> <span
  m='160330'>if</span> <span m='160510'>we're</span> <span
  m='160620'>considering</span> <span m='161510'>a</span> <span
  m='161710'>collection</span> <span m='162330'>of</span> <span
  m='162490'>different</span> <span m='162850'>ARMA</span> <span
  m='163230'>models</span> <span m='164310'>then</span> <span
  m='164740'>we</span> <span m='164910'>could</span> <span
  m='165190'>say,</span> <span m='165560'>fit</span> <span m='166480'>all</span>
  <span m='167050'>ARMA</span> <span m='167240'>models</span> <span
  m='168410'>of</span> <span m='168620'>order</span> <span m='169050'>pq</span>
  <span m='169670'>with</span> <span m='169900'>p</span> <span
  m='170150'>and</span> <span m='170280'>q</span> <span
  m='170560'>varying</span> <span m='171340'>over</span> <span
  m='171680'>some</span> <span m='171990'>range.</span> <span
  m='173100'>P</span> <span m='173460'>from</span> <span m='173760'>0</span>
  <span m='174180'>up to</span> <span m='174300'>p</span> <span
  m='174500'>max,</span> <span m='174910'>q</span> <span m='175140'>from</span>
  <span m='175330'>q</span> <span m='175560'>up</span> <span m='175790'>to
  q</span> <span m='175960'>max.</span> <span m='177130'>And</span> <span
  m='177890'>evaluate</span> <span m='178590'>those</span> <span
  m='179490'>pq</span> <span m='179900'>different</span> <span
  m='180170'>models.</span> </p><p><span m='182270'>And</span> <span
  m='183040'>if</span> <span m='183320'>we</span> <span
  m='183510'>consider</span> <span m='184110'>sigma</span> <span
  m='184700'>tilda</span> <span m='185040'>squared</span> <span
  m='185310'>of</span> <span m='185400'>pq</span> <span m='185740'>being</span>
  <span m='185940'>the</span> <span m='186110'>mle</span> <span
  m='186730'>of</span> <span m='187080'>the</span> <span m='187450'>error</span>
  <span m='187740'>variance.</span> <span m='189270'>Then</span> <span
  m='190020'>there</span> <span m='190380'>are</span> <span
  m='190670'>these</span> <span m='191230'>model</span> <span
  m='191530'>selection</span> <span m='191930'>criteria</span> <span
  m='192490'>that</span> <span m='192780'>are</span> <span
  m='192900'>very</span> <span m='193160'>popular.</span> <span
  m='194150'>Akaike</span> <span m='194460'>information</span> <span
  m='195020'>criterion,</span> <span m='195310'>and</span> <span
  m='195600'>Bayes</span> <span m='195940'>information</span> <span
  m='196450'>criterion,</span> <span m='196910'>and</span> <span
  m='197220'>Hannan-Quinn.</span> <span m='198060'>Now</span> <span
  m='198210'>these</span> <span m='198470'>criteria</span> <span
  m='199740'>all</span> <span m='201400'>have</span> <span m='201710'>the</span>
  <span m='201800'>same</span> <span m='202320'>term,</span> <span
  m='202850'>log</span> <span m='203550'>of</span> <span m='203830'>the</span>
  <span m='203970'>mle</span> <span m='204590'>of</span> <span
  m='204720'>the</span> <span m='204790'>error</span> <span
  m='205030'>variance.</span> <span m='207120'>So</span> <span
  m='207330'>these</span> <span m='207550'>criteria</span> <span
  m='208270'>don't</span> <span m='208570'>vary</span> <span
  m='209410'>at</span> <span m='209540'>all</span> <span m='209760'>with</span>
  <span m='209880'>that.</span> <span m='210520'>They</span> <span
  m='210670'>just</span> <span m='210900'>vary</span> <span
  m='211470'>with</span> <span m='211630'>this</span> <span
  m='211820'>second</span> <span m='212110'>term,</span> <span
  m='212260'>but</span> <span m='212380'>let's</span> <span
  m='212610'>focus</span> <span m='212930'>first</span> <span
  m='213190'>on</span> <span m='213290'>the</span> <span m='213570'>AIC</span>
  <span m='213900'>criterion.</span> </p><p><span m='215780'>A</span> <span
  m='215890'>given</span> <span m='216170'>model</span> <span
  m='216540'>is</span> <span m='216640'>going</span> <span m='216740'>to</span>
  <span m='216780'>be</span> <span m='216940'>better</span> <span
  m='217970'>if</span> <span m='218860'>the</span> <span m='220340'>log</span>
  <span m='220810'>of</span> <span m='220990'>the</span> <span
  m='221430'>mle</span> <span m='222190'>for</span> <span m='222320'>the</span>
  <span m='222540'>error</span> <span m='222800'>variance</span> <span
  m='223270'>is</span> <span m='223340'>smaller.</span> <span
  m='224760'>Now</span> <span m='224910'>is</span> <span m='225010'>that</span>
  <span m='225190'>a</span> <span m='225250'>good</span> <span
  m='225470'>thing?</span> <span m='228130'>Meaning,</span> <span
  m='228870'>what</span> <span m='229370'>is</span> <span m='229550'>the</span>
  <span m='229670'>interpretation</span> <span m='230520'>of</span> <span
  m='230600'>that</span> <span m='230920'>practically</span> <span
  m='231460'>when</span> <span m='231590'>you're</span> <span
  m='231690'>fitting</span> <span m='231990'>different</span> <span
  m='232270'>models?</span> <span m='235720'>Well,</span> <span
  m='236850'>the</span> <span m='236960'>practical</span> <span
  m='237380'>interpretation</span> <span m='238060'>is</span> <span
  m='238620'>the</span> <span m='239300'>variability</span> <span
  m='240490'>of</span> <span m='240760'>the</span> <span m='240880'>model</span>
  <span m='242270'>about</span> <span m='242590'>where</span> <span
  m='242800'>you're</span> <span m='242980'>predicting</span> <span
  m='243360'>things,</span> <span m='243630'>our</span> <span
  m='243850'>estimate</span> <span m='244350'>of the</span> <span
  m='244540'>error</span> <span m='244790'>variance</span> <span
  m='245380'>is</span> <span m='245580'>smaller.</span> <span
  m='246120'>So</span> <span m='246310'>we</span> <span m='246420'>have</span>
  <span m='246970'>essentially</span> <span m='247700'>a</span> <span
  m='247800'>model</span> <span m='248700'>with</span> <span m='248910'>a</span>
  <span m='248970'>smaller</span> <span m='249620'>error</span> <span
  m='249940'>variance</span> <span m='251160'>is</span> <span
  m='251330'>better.</span> </p><p><span m='252300'>So</span> <span
  m='252690'>we're</span> <span m='252800'>trying</span> <span
  m='253020'>to</span> <span m='253070'>minimize</span> <span
  m='253460'>the</span> <span m='253560'>log</span> <span m='253950'>of</span>
  <span m='254080'>that</span> <span m='254750'>variance.</span> <span
  m='255720'>Minimizing</span> <span m='256279'>that</span> <span
  m='256420'>is</span> <span m='256519'>a</span> <span m='256570'>good</span>
  <span m='256790'>thing.</span> <span m='258040'>Now</span> <span
  m='258140'>what</span> <span m='258300'>happens</span> <span
  m='259950'>when</span> <span m='260899'>you</span> <span
  m='261170'>have</span> <span m='262470'>many</span> <span m='262950'>sort
  of</span> <span m='263240'>independent</span> <span
  m='263830'>variables</span> <span m='264300'>to</span> <span
  m='264460'>include in</span> <span m='264900'>a</span> <span
  m='264990'>model?</span> <span m='266120'>Well,</span> <span
  m='266630'>if</span> <span m='266820'>you</span> <span m='266950'>were</span>
  <span m='267030'>doing</span> <span m='267320'>a</span> <span
  m='267400'>Taylor</span> <span m='267770'>series</span> <span
  m='268110'>approximation</span> <span m='268930'>of</span> <span
  m='269020'>a</span> <span m='269070'>continuous</span> <span
  m='269520'>function,</span> <span m='270090'>eventually</span> <span
  m='270820'>you'd</span> <span m='270990'>sort</span> <span
  m='271370'>of</span> <span m='271820'>get</span> <span m='272190'>to</span>
  <span m='273020'>probably</span> <span m='273350'>the</span> <span
  m='273490'>smooth</span> <span m='273780'>function</span> <span
  m='274150'>with</span> <span m='274290'>enough</span> <span
  m='274520'>terms,</span> <span m='275860'>but</span> <span
  m='277180'>suppose</span> <span m='277710'>that</span> <span
  m='278410'>the</span> <span m='278550'>actual</span> <span
  m='278870'>model,</span> <span m='279290'>it</span> <span
  m='279480'>does</span> <span m='279800'>have</span> <span m='280130'>a</span>
  <span m='280190'>finite</span> <span m='280640'>number</span> <span
  m='281900'>of</span> <span m='282000'>parameters.</span> <span
  m='283230'>And</span> <span m='283430'>you're</span> <span
  m='283630'>considering</span> <span m='284260'>new</span> <span
  m='284480'>factors,</span> <span m='284990'>new</span> <span
  m='285110'>lags</span> <span m='285490'>of</span> <span
  m='285570'>independent</span> <span m='286020'>variables</span> <span
  m='286990'>in</span> <span m='287080'>the</span> <span
  m='287350'>auto-regressions.</span> </p><p><span m='289200'>As</span> <span
  m='289430'>you</span> <span m='289560'>add</span> <span m='289960'>more</span>
  <span m='290220'>and</span> <span m='290290'>more</span> <span
  m='290510'>variables,</span> <span m='291190'>well,</span> <span
  m='293630'>there</span> <span m='293760'>really</span> <span
  m='294000'>should</span> <span m='294250'>be</span> <span m='294430'>a</span>
  <span m='294520'>penalty</span> <span m='295480'>for</span> <span
  m='296440'>adding</span> <span m='297490'>extra</span> <span
  m='297840'>variables</span> <span m='298320'>that</span> <span
  m='298430'>aren't</span> <span m='299170'>adding</span> <span
  m='300140'>real</span> <span m='300410'>value</span> <span
  m='300820'>to</span> <span m='300950'>the</span> <span m='301020'>model</span>
  <span m='301470'>in</span> <span m='301600'>terms</span> <span
  m='301840'>of</span> <span m='301940'>reducing</span> <span
  m='302340'>the</span> <span m='302460'>error</span> <span
  m='302660'>variance.</span> <span m='303620'>So</span> <span
  m='303970'>the</span> <span m='304150'>Akaike</span> <span
  m='304460'>information</span> <span m='305000'>criterion</span> <span
  m='306190'>is</span> <span m='307060'>penalizing</span> <span
  m='307890'>different</span> <span m='308210'>models</span> <span
  m='308910'>by</span> <span m='309770'>a</span> <span m='309870'>factor</span>
  <span m='310810'>that</span> <span m='311020'>depends</span> <span
  m='311480'>on</span> <span m='311640'>the</span> <span m='311750'>size</span>
  <span m='312280'>of</span> <span m='312350'>the</span> <span
  m='312420'>model</span> <span m='312730'>in</span> <span
  m='312820'>terms</span> <span m='313100'>of</span> <span m='313200'>the</span>
  <span m='313210'>dimensionality</span> <span m='314490'>of</span> <span
  m='314650'>the</span> <span m='316220'>model</span> <span
  m='316520'>parameters.</span> <span m='317380'>So</span> <span
  m='317580'>p</span> <span m='317770'>plus</span> <span m='318010'>q</span>
  <span m='318320'>is</span> <span m='318470'>the</span> <span
  m='318570'>dimensionality</span> <span m='319340'>of</span> <span
  m='319460'>the</span> <span m='319970'>auto</span> <span
  m='320180'>regression</span> <span m='321250'>model.</span> </p><p><span
  m='324020'>So</span> <span m='328800'>let's</span> <span
  m='329060'>see.</span> <span m='329770'>With</span> <span
  m='329960'>the</span> <span m='330040'>BIC</span> <span
  m='330620'>criterion</span> <span m='332290'>the</span> <span
  m='332560'>difference</span> <span m='333510'>between</span> <span
  m='333980'>that</span> <span m='334270'>and</span> <span m='334520'>the</span>
  <span m='334690'>AIC</span> <span m='335160'>criterion</span> <span
  m='336290'>is</span> <span m='336950'>that</span> <span m='337500'>this</span>
  <span m='337900'>factor</span> <span m='338410'>too</span> <span
  m='338900'>is</span> <span m='339030'>replaced</span> <span
  m='339690'>by</span> <span m='341340'>log n.</span> <span m='343090'>So</span>
  <span m='344190'>rather</span> <span m='344580'>than</span> <span
  m='344860'>having</span> <span m='345630'>a</span> <span
  m='345980'>sort</span> <span m='346170'>of</span> <span m='346500'>unit</span>
  <span m='347110'>increment</span> <span m='348170'>of</span> <span
  m='348510'>penalty</span> <span m='349120'>for</span> <span
  m='350030'>adding</span> <span m='350330'>an</span> <span
  m='350390'>extra</span> <span m='350640'>parameter,</span> <span
  m='352400'>the</span> <span m='352610'>Bayes</span> <span
  m='353120'>information</span> <span m='353880'>criterion</span> <span
  m='354460'>is</span> <span m='354580'>adding</span> <span m='354920'>a</span>
  <span m='355110'>log</span> <span m='355535'>in</span> <span
  m='356580'>penalty</span> <span m='357260'>times</span> <span
  m='357970'>the</span> <span m='358090'>number</span> <span
  m='358320'>of</span> <span m='358500'>parameters.</span> </p><p><span
  m='359730'>And</span> <span m='359980'>so</span> <span m='360720'>as</span>
  <span m='361080'>the</span> <span m='361200'>sample</span> <span
  m='361570'>size</span> <span m='361890'>gets</span> <span
  m='362120'>larger</span> <span m='362560'>and</span> <span
  m='362640'>larger,</span> <span m='363700'>that</span> <span
  m='363980'>penalty</span> <span m='365080'>gets</span> <span
  m='365440'>higher</span> <span m='365780'>and</span> <span
  m='365850'>higher.</span> <span m='367030'>Now</span> <span
  m='367440'>the</span> <span m='368430'>practical</span> <span
  m='369230'>interpretation</span> <span m='370530'>of</span> <span
  m='370740'>the</span> <span m='371160'>Akaike</span> <span
  m='372080'>information</span> <span m='372610'>criterion</span> <span
  m='373130'>is</span> <span m='373240'>that</span> <span m='373950'>it</span>
  <span m='374100'>is</span> <span m='374280'>very</span> <span
  m='374570'>similar</span> <span m='375220'>to</span> <span
  m='376350'>applying</span> <span m='378140'>a</span> <span
  m='378310'>rule</span> <span m='378650'>which</span> <span
  m='378830'>says,</span> <span m='379970'>we're</span> <span
  m='380180'>going</span> <span m='380440'>to</span> <span
  m='380530'>include</span> <span m='381000'>variables</span> <span
  m='381520'>in</span> <span m='381600'>our</span> <span m='381750'>model</span>
  <span m='383330'>if</span> <span m='384470'>the</span> <span
  m='384610'>square</span> <span m='385260'>of</span> <span
  m='385400'>the</span> <span m='385500'>t</span> <span
  m='385740'>statistic</span> <span m='386960'>for</span> <span
  m='387790'>estimating</span> <span m='388740'>the</span> <span
  m='388910'>additional</span> <span m='389390'>parameter</span> <span
  m='389990'>in</span> <span m='390040'>the</span> <span m='390110'>model</span>
  <span m='391220'>is</span> <span m='392100'>greater</span> <span
  m='392410'>than</span> <span m='392620'>2</span> <span m='392880'>or</span>
  <span m='392930'>not.</span> <span m='394850'>So</span> <span
  m='395820'>in</span> <span m='396050'>terms</span> <span m='396460'>of</span>
  <span m='397390'>when</span> <span m='397920'>does</span> <span
  m='398120'>the</span> <span m='398270'>Akaike</span> <span
  m='398580'>information</span> <span m='399250'>criterion</span> <span
  m='401710'>become</span> <span m='402130'>lower</span> <span
  m='402920'>from</span> <span m='403120'>adding</span> <span
  m='403400'>additional</span> <span m='403760'>terms</span> <span m='404090'>to
  a</span> <span m='404250'>model?</span> </p><p><span m='405670'>If</span>
  <span m='405760'>you're</span> <span m='405850'>considering</span> <span
  m='406280'>two</span> <span m='406460'>models that</span> <span
  m='406840'>differ</span> <span m='407070'>by</span> <span
  m='407240'>just</span> <span m='407460'>one</span> <span
  m='408130'>factor,</span> <span m='409150'>it's</span> <span
  m='409330'>basically</span> <span m='409670'>if</span> <span
  m='409840'>the</span> <span m='410240'>t</span> <span
  m='410480'>statistic</span> <span m='411010'>for</span> <span
  m='411120'>the</span> <span m='412190'>model</span> <span
  m='412530'>coefficient</span> <span m='412795'>on</span> <span
  m='413060'>that</span> <span m='413220'>factor</span> <span
  m='414840'>is</span> <span m='415030'>a</span> <span m='415090'>squared</span>
  <span m='415510'>value</span> <span m='416280'>greater</span> <span
  m='416490'>than</span> <span m='416680'>two</span> <span m='416890'>or</span>
  <span m='416990'>not.</span> <span m='417830'>Now</span> <span
  m='418720'>many</span> <span m='418980'>of</span> <span m='419090'>you</span>
  <span m='420680'>who</span> <span m='420910'>have</span> <span
  m='421160'>seen</span> <span m='421740'>regression</span> <span
  m='422260'>models</span> <span m='422680'>before</span> <span
  m='423310'>and</span> <span m='423430'>applied</span> <span
  m='423820'>them,</span> <span m='424440'>in</span> <span
  m='424550'>particular</span> <span m='424890'>applications</span> <span
  m='425560'>would</span> <span m='426140'>probably</span> <span
  m='426730'>say,</span> <span m='427510'>I</span> <span
  m='427830'>really</span> <span m='428050'>don't</span> <span
  m='428270'>believe</span> <span m='429120'>in</span> <span
  m='429740'>the</span> <span m='429880'>value</span> <span m='430440'>of</span>
  <span m='430600'>an</span> <span m='430690'>additional</span> <span
  m='431130'>factor</span> <span m='431590'>unless</span> <span
  m='431870'>the</span> <span m='431980'>t</span> <span
  m='432190'>statistic</span> <span m='432840'>is</span> <span
  m='433540'>greater</span> <span m='433790'>than</span> <span
  m='434530'>1.96,</span> <span m='435590'>or</span> <span m='435720'>two</span>
  <span m='436020'>or</span> <span m='436190'>something.</span> <span
  m='438410'>But</span> <span m='439050'>the</span> <span
  m='439110'>Akaike</span> <span m='439310'>information</span> <span
  m='439880'>criterion</span> <span m='440320'>says</span> <span
  m='441190'>the</span> <span m='441310'>t</span> <span
  m='441500'>statistic</span> <span m='442020'>should</span> <span
  m='442120'>be</span> <span m='442220'>greater</span> <span
  m='442410'>than</span> <span m='442880'>the</span> <span
  m='443010'>square</span> <span m='443350'>root</span> <span
  m='443470'>of</span> <span m='443590'>2.</span> </p><p><span
  m='444450'>So</span> <span m='444720'>it's</span> <span m='445050'>sort</span>
  <span m='445180'>of</span> <span m='445290'>a</span> <span
  m='445440'>weaker</span> <span m='445940'>constraint</span> <span
  m='446410'>for</span> <span m='446580'>adding</span> <span
  m='446880'>variables</span> <span m='447290'>into</span> <span
  m='447450'>the</span> <span m='447520'>model.</span> <span
  m='448510'>And</span> <span m='449750'>now</span> <span m='449900'>why</span>
  <span m='450080'>is</span> <span m='450190'>it</span> <span m='450250'>called
  an</span> <span m='450510'>information</span> <span
  m='451050'>criterion?</span> <span m='451680'>I</span> <span
  m='451770'>won't</span> <span m='451960'>go</span> <span
  m='452100'>into</span> <span m='452290'>this in the</span> <span
  m='452690'>lecture.</span> <span m='453050'>I am</span> <span
  m='453170'>happy</span> <span m='453420'>to</span> <span m='453490'>go</span>
  <span m='453630'>into</span> <span m='453820'>it</span> <span
  m='454030'>during</span> <span m='454260'>office</span> <span
  m='454610'>hours,</span> <span m='454940'>but</span> <span
  m='456010'>there's</span> <span m='456750'>notions</span> <span
  m='457160'>of</span> <span m='457270'>information</span> <span
  m='457860'>theory and</span> <span m='458310'>[INAUDIBLE]</span> <span
  m='459570'>information</span> <span m='460310'>of</span> <span
  m='460790'>the</span> <span m='461040'>model</span> <span
  m='461480'>versus</span> <span m='461820'>the</span> <span
  m='461910'>true</span> <span m='462160'>model,</span> <span
  m='462690'>and</span> <span m='463120'>trying</span> <span
  m='463500'>to</span> <span m='464140'>basically</span> <span
  m='465020'>maximize</span> <span m='465830'>the</span> <span
  m='466100'>closeness</span> <span m='466710'>of</span> <span
  m='466900'>our</span> <span m='467170'>fitted</span> <span
  m='467490'>model</span> <span m='467730'>to</span> <span
  m='467850'>that.</span> </p><p><span m='468960'>Now</span> <span
  m='469150'>the</span> <span m='469230'>Hannan-Quinn</span> <span
  m='469810'>criterion,</span> <span m='470570'>let's</span> <span
  m='470770'>just</span> <span m='471190'>look</span> <span m='471400'>at</span>
  <span m='471450'>how</span> <span m='471630'>that</span> <span
  m='471870'>differs.</span> <span m='472270'>Well,</span> <span
  m='472280'>that</span> <span m='473870'>basically</span> <span
  m='474200'>has</span> <span m='474400'>a</span> <span
  m='474470'>penalty</span> <span m='474870'>midway</span> <span
  m='475380'>between</span> <span m='477020'>the</span> <span
  m='477150'>log</span> <span m='477480'>n</span> <span m='477810'>and</span>
  <span m='478090'>two.</span> <span m='478460'>It's</span> <span
  m='478700'>two,</span> <span m='479050'>log,</span> <span
  m='479470'>log</span> <span m='479810'>in.</span> <span m='481320'>So</span>
  <span m='481490'>this</span> <span m='481870'>has</span> <span
  m='482120'>a</span> <span m='482200'>penalty</span> <span
  m='482620'>that's</span> <span m='482800'>increasing</span> <span
  m='483290'>with</span> <span m='483420'>size</span> <span m='483750'>n,</span>
  <span m='483890'>but</span> <span m='484030'>not</span> <span
  m='484230'>as</span> <span m='484360'>fast</span> <span m='484680'>as</span>
  <span m='484820'>log</span> <span m='485120'>n.</span> <span
  m='487680'>This</span> <span m='488110'>becomes</span> <span
  m='488860'>relevant</span> <span m='489810'>when</span> <span
  m='490710'>we</span> <span m='490960'>have</span> <span
  m='491480'>models</span> <span m='492040'>that</span> <span
  m='492150'>get</span> <span m='492490'>to</span> <span m='492560'>be</span>
  <span m='493240'>very</span> <span m='493580'>large</span> <span
  m='494240'>because</span> <span m='494620'>we</span> <span
  m='494730'>have</span> <span m='495100'>a</span> <span m='495190'>lot</span>
  <span m='495400'>of</span> <span m='495520'>data.</span> <span
  m='496240'>Basically</span> <span m='496500'>the</span> <span
  m='496600'>more</span> <span m='496910'>data</span> <span
  m='497170'>you</span> <span m='497330'>have,</span> <span
  m='497780'>the</span> <span m='497880'>more</span> <span
  m='497940'>parameters</span> <span m='499250'>you</span> <span
  m='499360'>should</span> <span m='499620'>be</span> <span
  m='499860'>able</span> <span m='500150'>to</span> <span
  m='500350'>incorporate</span> <span m='500850'>in</span> <span
  m='500900'>the</span> <span m='500980'>model</span> <span m='501410'>if</span>
  <span m='501600'>they're</span> <span m='502220'>sort of</span> <span
  m='502310'>statistically</span> <span m='503240'>valid</span> <span
  m='503810'>factors,</span> <span m='504870'>important</span> <span
  m='505360'>factors.</span> </p><p><span m='507360'>And</span> <span
  m='507630'>the</span> <span m='507920'>Hannan-Quinn</span> <span
  m='508170'>criterion</span> <span m='509040'>basically</span> <span
  m='509960'>allows</span> <span m='510450'>for</span> <span
  m='511580'>modeling</span> <span m='512429'>processes</span> <span
  m='513179'>where</span> <span m='513970'>really</span> <span
  m='514470'>an</span> <span m='514640'>infinite</span> <span
  m='515650'>number</span> <span m='516179'>of</span> <span
  m='516880'>variables</span> <span m='517390'>might</span> <span
  m='517640'>be</span> <span m='517760'>appropriate,</span> <span
  m='518870'>but</span> <span m='519059'>you</span> <span m='519140'>need</span>
  <span m='519350'>larger</span> <span m='519679'>and</span> <span
  m='519750'>larger</span> <span m='520080'>sample</span> <span
  m='520409'>sizes</span> <span m='520860'>to</span> <span
  m='521049'>effectively</span> <span m='522120'>estimate</span> <span
  m='522690'>those.</span> <span m='524640'>So</span> <span
  m='525370'>those</span> <span m='525620'>are</span> <span
  m='525640'>the</span> <span m='526300'>criteria</span> <span
  m='527410'>that</span> <span m='527490'>can</span> <span m='527610'>be</span>
  <span m='527710'>applied</span> <span m='528150'>with</span> <span
  m='530970'>time</span> <span m='531260'>series</span> <span
  m='531530'>models.</span> </p><p><span m='532330'>And</span> <span
  m='532550'>I</span> <span m='532600'>should</span> <span
  m='532760'>point</span> <span m='533010'>out</span> <span
  m='533260'>that,</span> <span m='534860'>let's</span> <span
  m='535030'>see,</span> <span m='535210'>if</span> <span m='535310'>you</span>
  <span m='535490'>took</span> <span m='536970'>sort of</span> <span
  m='537190'>this</span> <span m='537520'>factor</span> <span m='538160'>2
  over</span> <span m='538496'>n</span> <span m='539720'>and</span> <span
  m='539950'>inverted</span> <span m='540250'>it</span> <span
  m='540460'>to</span> <span m='540540'>n</span> <span m='540880'>over</span>
  <span m='541210'>two</span> <span m='541710'>log</span> <span
  m='542050'>sigma</span> <span m='542330'>squared,</span> <span
  m='543530'>that</span> <span m='543890'>term</span> <span m='544430'>is</span>
  <span m='545260'>basically</span> <span m='545630'>one</span> <span
  m='545860'>of</span> <span m='545970'>the</span> <span m='546080'>terms</span>
  <span m='546670'>in</span> <span m='546920'>the</span> <span
  m='547050'>likelihood</span> <span m='547560'>function</span> <span
  m='548110'>of the</span> <span m='548290'>[INAUDIBLE]</span> <span
  m='548740'>model.</span> <span m='549190'>So</span> <span
  m='549330'>you</span> <span m='549420'>can</span> <span m='549540'>see</span>
  <span m='549710'>how</span> <span m='549870'>this</span> <span
  m='550130'>criterion</span> <span m='550750'>is</span> <span
  m='550860'>basically</span> <span m='551320'>manipulating</span> <span
  m='552320'>the</span> <span m='552850'>maximum</span> <span
  m='553660'>likelihood</span> <span m='556280'>value</span> <span
  m='558040'>by</span> <span m='558230'>adjusting</span> <span
  m='558650'>it</span> <span m='558730'>for</span> <span m='559700'>a</span>
  <span m='560230'>penalty</span> <span m='560660'>for</span> <span
  m='561160'>extra</span> <span m='561490'>parameters.</span> </p><p><span
  m='568080'>Let's</span> <span m='568280'>see.</span> <span
  m='568590'>OK.</span> <span m='569360'>Next</span> <span
  m='569770'>topic</span> <span m='570280'>is</span> <span
  m='570570'>just</span> <span m='570810'>test</span> <span
  m='571120'>for</span> <span m='571270'>stationarity</span> <span
  m='572060'>and</span> <span m='572180'>non-stationarity.</span> <span
  m='575540'>There's</span> <span m='576430'>a</span> <span
  m='577740'>famous</span> <span m='578120'>test</span> <span
  m='578400'>called</span> <span m='578600'>the</span> <span
  m='578670'>Dickey-Fuller</span> <span m='579230'>test,</span> <span
  m='580620'>which</span> <span m='580870'>is</span> <span
  m='581600'>essentially</span> <span m='582180'>to</span> <span
  m='583380'>evaluate</span> <span m='585080'>the</span> <span
  m='585240'>time</span> <span m='585590'>series</span> <span
  m='586800'>to</span> <span m='586960'>see</span> <span m='587280'>if</span>
  <span m='587400'>it's</span> <span m='587550'>consistent</span> <span
  m='588040'>with</span> <span m='588210'>a</span> <span
  m='588280'>random</span> <span m='588700'>walk.</span> <span
  m='589010'>We</span> <span m='589130'>know</span> <span m='589360'>that</span>
  <span m='589810'>we've</span> <span m='590040'>been</span> <span
  m='590180'>discussing</span> <span m='590970'>sort</span> <span
  m='591100'>of</span> <span m='591200'>lecture</span> <span
  m='591490'>after</span> <span m='591700'>lecture</span> <span
  m='592010'>how</span> <span m='592180'>simple</span> <span
  m='592530'>random</span> <span m='592880'>walks</span> <span
  m='593980'>are</span> <span m='594850'>non-stationary.</span> </p><p><span
  m='596880'>And</span> <span m='598120'>the</span> <span
  m='598230'>simple</span> <span m='598560'>random</span> <span
  m='598910'>walk</span> <span m='599640'>is</span> <span
  m='601260'>given</span> <span m='601580'>by</span> <span m='601810'>the</span>
  <span m='601950'>model</span> <span m='602460'>up</span> <span
  m='602680'>here,</span> <span m='602960'>x to</span> <span
  m='603190'>equals</span> <span m='603570'>pihi</span> <span
  m='603760'>xt</span> <span m='604110'>minus</span> <span m='604380'>1</span>
  <span m='604500'>plus</span> <span m='604970'>eta</span> <span
  m='605250'>t,</span> <span m='605920'>if</span> <span m='606230'>phi</span>
  <span m='606420'>is</span> <span m='606540'>equal</span> <span
  m='606780'>to</span> <span m='606850'>1.</span> <span m='608698'>Right?</span>
  <span m='609160'>That is</span> <span m='610050'>a</span> <span
  m='610140'>non-stationary</span> <span m='610860'>process.</span> <span
  m='611740'>Well,</span> <span m='613120'>in</span> <span m='613320'>the</span>
  <span m='613410'>Dickey-Fuller</span> <span m='613910'>test</span> <span
  m='614150'>we</span> <span m='614190'>want</span> <span m='614320'>to</span>
  <span m='614380'>test</span> <span m='614730'>whether</span> <span
  m='614930'>phi</span> <span m='615100'>equals</span> <span m='615390'>1</span>
  <span m='616070'>or</span> <span m='616410'>not.</span> <span
  m='617640'>And</span> <span m='618690'>so</span> <span m='618830'>we</span>
  <span m='618940'>can</span> <span m='619070'>fit</span> <span
  m='619380'>the</span> <span m='619570'>AR</span> <span m='619960'>1</span>
  <span m='620220'>model</span> <span m='621160'>by</span> <span
  m='621510'>least</span> <span m='621710'>squares</span> <span
  m='623090'>and</span> <span m='623290'>define</span> <span
  m='623690'>the</span> <span m='623790'>test</span> <span
  m='624050'>statistic</span> <span m='625420'>to</span> <span
  m='625610'>be</span> <span m='627060'>the</span> <span
  m='627290'>estimate</span> <span m='627740'>of</span> <span
  m='627910'>phi</span> <span m='628140'>minus</span> <span m='628540'>1</span>
  <span m='629110'>over</span> <span m='629400'>its</span> <span
  m='629530'>standard</span> <span m='629980'>error</span> <span
  m='631950'>where</span> <span m='632500'>phi</span> <span m='633140'>is</span>
  <span m='633420'>the</span> <span m='633530'>least</span> <span
  m='633700'>squares</span> <span m='634000'>estimate</span> <span
  m='634350'>and</span> <span m='634450'>the</span> <span
  m='634530'>standard</span> <span m='634930'>error</span> <span m='635220'>is
  the</span> <span m='635510'>least</span> <span m='635690'>squares</span> <span
  m='635940'>estimate,</span> <span m='636250'>the</span> <span
  m='636320'>standard</span> <span m='636910'>error</span> <span
  m='637350'>of</span> <span m='637570'>that.</span> </p><p><span
  m='639630'>If</span> <span m='641230'>our</span> <span
  m='642090'>coefficient</span> <span m='642820'>phi</span> <span
  m='643450'>is</span> <span m='643710'>less</span> <span m='644030'>than</span>
  <span m='644190'>1</span> <span m='644430'>in</span> <span
  m='644520'>modulus,</span> <span m='644970'>so</span> <span
  m='645190'>this</span> <span m='645390'>really</span> <span
  m='645620'>is</span> <span m='645740'>a</span> <span
  m='645800'>stationary</span> <span m='646350'>series,</span> <span
  m='647430'>then</span> <span m='648500'>the</span> <span
  m='651460'>estimate</span> <span m='652920'>phi</span> <span
  m='653760'>converges</span> <span m='654270'>in</span> <span
  m='654330'>distribution</span> <span m='654890'>to</span> <span
  m='655160'>a</span> <span m='655270'>normal</span> <span
  m='655730'>zero</span> <span m='656080'>1</span> <span m='656400'>minus</span>
  <span m='656790'>phi</span> <span m='656940'>squared.</span> <span
  m='658950'>And</span> <span m='662860'>let's</span> <span
  m='663070'>see.</span> <span m='664920'>But</span> <span m='665170'>if</span>
  <span m='665300'>phi</span> <span m='665510'>is</span> <span
  m='665630'>equal</span> <span m='665900'>to</span> <span
  m='666010'>one,</span> <span m='669240'>OK,</span> <span m='669580'>so</span>
  <span m='669760'>just</span> <span m='669990'>to</span> <span
  m='670090'>recap</span> <span m='670470'>that</span> <span
  m='670670'>second</span> <span m='671450'>to</span> <span
  m='671520'>last</span> <span m='671750'>bullet</span> <span
  m='672040'>point</span> <span m='672450'>is</span> <span
  m='673710'>basically</span> <span m='674250'>the</span> <span
  m='674360'>property</span> <span m='674880'>that</span> <span
  m='675150'>when</span> <span m='675790'>norm</span> <span
  m='676060'>phi</span> <span m='676240'>is</span> <span m='676360'>less</span>
  <span m='676600'>than</span> <span m='676770'>1,</span> <span
  m='677580'>then</span> <span m='677740'>our</span> <span
  m='677830'>least</span> <span m='678020'>squares</span> <span
  m='678340'>estimates</span> <span m='679330'>are</span> <span
  m='681440'>asymptotically</span> <span m='682510'>normally</span> <span
  m='682960'>distributed</span> <span m='684590'>with</span> <span
  m='684780'>mean</span> <span m='685000'>0</span> <span m='686070'>if</span>
  <span m='686290'>we</span> <span m='686420'>normalize</span> <span
  m='686870'>by</span> <span m='687000'>the</span> <span m='687110'>true</span>
  <span m='687300'>value,</span> <span m='687830'>and</span> <span
  m='688350'>1</span> <span m='688510'>minus</span> <span m='688790'>phi</span>
  <span m='688940'>squared.</span> </p><p><span m='689740'>If</span> <span
  m='690590'>phi</span> <span m='690850'>is</span> <span m='690950'>equal</span>
  <span m='691130'>to</span> <span m='691220'>1,</span> <span
  m='692908'>then</span> <span m='693690'>it</span> <span
  m='693810'>turns</span> <span m='694070'>out</span> <span
  m='694220'>that</span> <span m='694460'>phi</span> <span m='694660'>hat</span>
  <span m='695570'>is</span> <span m='695890'>super</span> <span
  m='696260'>consistent</span> <span m='696870'>with</span> <span
  m='697060'>rate</span> <span m='697360'>1</span> <span m='697690'>over
  t.</span> <span m='698470'>Now</span> <span m='700080'>this</span> <span
  m='700280'>super</span> <span m='700670'>consistency</span> <span
  m='703880'>is</span> <span m='704060'>related</span> <span
  m='704520'>to</span> <span m='706360'>statistics</span> <span
  m='707140'>converging</span> <span m='708010'>to</span> <span
  m='709080'>some</span> <span m='709470'>value.</span> <span
  m='710900'>And</span> <span m='711650'>what</span> <span m='711910'>is</span>
  <span m='712050'>the</span> <span m='712200'>rate</span> <span
  m='712450'>of</span> <span m='712560'>convergence</span> <span
  m='713810'>of</span> <span m='714390'>those</span> <span
  m='714970'>statistics</span> <span m='715590'>to</span> <span
  m='715680'>different</span> <span m='715960'>values.</span> <span
  m='716490'>So</span> <span m='717900'>in</span> <span m='719650'>normal</span>
  <span m='720340'>samples</span> <span m='721900'>we</span> <span
  m='722290'>can</span> <span m='722570'>estimate</span> <span m='723360'>sort
  of</span> <span m='723550'>the</span> <span m='723760'>mean</span> <span
  m='724840'>by</span> <span m='725100'>the</span> <span
  m='725230'>sample</span> <span m='725640'>mean.</span> <span
  m='726440'>And</span> <span m='726610'>that</span> <span
  m='726760'>will</span> <span m='726910'>converge</span> <span
  m='727980'>to</span> <span m='728280'>the</span> <span m='728440'>true</span>
  <span m='728770'>mean</span> <span m='730100'>at</span> <span
  m='730320'>rate</span> <span m='733660'>of</span> <span m='733760'>1</span>
  <span m='733960'>over</span> <span m='734310'>root n.</span> </p><p><span
  m='737660'>When</span> <span m='737950'>we</span> <span m='738080'>have</span>
  <span m='739730'>a</span> <span m='740180'>non-stationary</span> <span
  m='741760'>random</span> <span m='742170'>walk,</span> <span
  m='743070'>the</span> <span m='743200'>independent</span> <span
  m='743740'>variables</span> <span m='744230'>matrix</span> <span
  m='747870'>is</span> <span m='748510'>such</span> <span m='748890'>that</span>
  <span m='749140'>x</span> <span m='749390'>transpose</span> <span
  m='750090'>x,</span> <span m='752570'>over</span> <span m='752930'>n</span>
  <span m='753610'>grows</span> <span m='754060'>without</span> <span
  m='754390'>bound.</span> <span m='755250'>So</span> <span m='756370'>if</span>
  <span m='756560'>we</span> <span m='756690'>have</span> <span
  m='758270'>y</span> <span m='758920'>is</span> <span m='759010'>equal</span>
  <span m='759220'>to</span> <span m='759290'>x</span> <span
  m='760550'>beta</span> <span m='760850'>plus</span> <span
  m='761190'>epsilon,</span> <span m='762270'>and</span> <span
  m='762520'>beta</span> <span m='762790'>hat</span> <span m='763310'>is</span>
  <span m='763490'>equal</span> <span m='763670'>to</span> <span
  m='763730'>x</span> <span m='763970'>transpose</span> <span
  m='764590'>x</span> <span m='764880'>inverse,</span> <span m='766500'>x</span>
  <span m='766750'>transpose</span> <span m='767380'>y</span> <span
  m='771350'>the</span> <span m='774110'>problem</span> <span
  m='774870'>iss--</span> <span m='775330'>well</span> <span
  m='775940'>and</span> <span m='776360'>beta</span> <span m='776600'>hat</span>
  <span m='777110'>is</span> <span m='777330'>distributed</span> <span
  m='778090'>as</span> <span m='779120'>ultimately</span> <span
  m='781080'>normal</span> <span m='781500'>with</span> <span
  m='781570'>mean</span> <span m='781820'>beta</span> <span
  m='782400'>and</span> <span m='782740'>variance</span> <span
  m='783220'>sigma</span> <span m='783500'>squared,</span> <span
  m='784580'>x</span> <span m='785030'>transpose</span> <span
  m='785360'>x</span> <span m='785790'>inverse.</span> </p><p><span
  m='787430'>This</span> <span m='787620'>x</span> <span
  m='787800'>transpose</span> <span m='788360'>x</span> <span
  m='788650'>inverse</span> <span m='789260'>matrix,</span> <span
  m='790160'>when</span> <span m='790550'>the</span> <span
  m='790720'>process</span> <span m='791430'>is</span> <span
  m='792690'>non-stationary,</span> <span m='792980'>a</span> <span
  m='793480'>random</span> <span m='793810'>walk,</span> <span
  m='794750'>it</span> <span m='794900'>grows</span> <span
  m='795280'>infinitely.</span> <span m='799320'>x</span> <span
  m='799540'>transpose</span> <span m='800160'>x</span> <span
  m='801080'>over</span> <span m='801410'>n</span> <span
  m='802190'>actually</span> <span m='803310'>grows</span> <span
  m='803980'>to</span> <span m='805110'>infinity</span> <span
  m='808130'>in</span> <span m='808300'>magnitude</span> <span
  m='808990'>just</span> <span m='809170'>because</span> <span
  m='809490'>it</span> <span m='809640'>becomes</span> <span
  m='810040'>unbounded.</span> <span m='811280'>Whereas</span> <span
  m='811610'>x</span> <span m='811780'>transpose</span> <span
  m='812240'>x</span> <span m='812430'>over</span> <span m='812750'>n,</span>
  <span m='812980'>when</span> <span m='813340'>it's</span> <span
  m='813690'>stationary</span> <span m='814560'>is</span> <span
  m='814760'>bounded.</span> <span m='816130'>So</span> <span
  m='816270'>anyway,</span> <span m='816380'>so</span> <span
  m='816480'>that</span> <span m='816710'>leads</span> <span
  m='817000'>to</span> <span m='817120'>the</span> <span m='817680'>super</span>
  <span m='818000'>consistency,</span> <span m='819210'>meaning</span> <span
  m='819570'>that</span> <span m='819810'>it</span> <span
  m='819960'>converges</span> <span m='820580'>to</span> <span
  m='820750'>the</span> <span m='820860'>value</span> <span
  m='821230'>much</span> <span m='821440'>faster</span> <span
  m='821930'>and</span> <span m='822130'>so</span> <span m='822230'>this</span>
  <span m='822430'>normal</span> <span m='822720'>distribution</span> <span
  m='823200'>isn't</span> <span m='823320'>appropriate.</span> <span
  m='824590'>And</span> <span m='825060'>it</span> <span m='825200'>turns</span>
  <span m='825460'>out</span> <span m='825670'>there's</span> <span
  m='826030'>Dickey-Fuller</span> <span m='827020'>distribution</span> <span
  m='827730'>for</span> <span m='827880'>this</span> <span
  m='828170'>test</span> <span m='828400'>statistic,</span> <span
  m='829570'>which</span> <span m='829690'>is</span> <span
  m='829810'>based</span> <span m='830180'>on</span> <span
  m='830540'>integrals</span> <span m='830910'>of</span> <span
  m='831280'>diffusions</span> <span m='832330'>and</span> <span
  m='833400'>one</span> <span m='833640'>can</span> <span m='834110'>read</span>
  <span m='834410'>about</span> <span m='834700'>that</span> <span
  m='835150'>in</span> <span m='835800'>the</span> <span
  m='835920'>literature</span> <span m='836490'>on</span> <span
  m='836790'>unit</span> <span m='837030'>roots</span> <span
  m='837600'>and</span> <span m='839250'>test</span> <span m='839870'>for</span>
  <span m='840870'>non-stationarity.</span> </p><p><span m='841990'>So</span>
  <span m='842630'>there's</span> <span m='842810'>a</span> <span
  m='842850'>very</span> <span m='843090'>rich</span> <span
  m='843560'>literature</span> <span m='844330'>on</span> <span
  m='844880'>this</span> <span m='845170'>problem.</span> <span
  m='845760'>If</span> <span m='845980'>you're</span> <span
  m='847780'>into</span> <span m='847980'>two</span> <span
  m='848160'>econometrics,</span> <span m='850520'>basically</span> <span
  m='851600'>a</span> <span m='851890'>lot</span> <span m='852040'>of</span>
  <span m='852110'>time's</span> <span m='852470'>been</span> <span
  m='852650'>spent</span> <span m='852960'>in</span> <span
  m='853030'>that</span> <span m='853290'>field</span> <span
  m='853720'>on</span> <span m='854060'>this</span> <span
  m='854240'>topic.</span> <span m='855870'>And</span> <span
  m='857300'>the</span> <span m='857750'>mathematics</span> <span
  m='858500'>gets</span> <span m='858870'>very,</span> <span
  m='859330'>very</span> <span m='860530'>involved,</span> <span
  m='862370'>but</span> <span m='863640'>good</span> <span
  m='863850'>results</span> <span m='864250'>are</span> <span
  m='864310'>available.</span> </p><p><span m='866190'>So</span> <span
  m='867020'>let's</span> <span m='868120'>see</span> <span m='868440'>an</span>
  <span m='868530'>application</span> <span m='869310'>on</span> <span
  m='869410'>some</span> <span m='869590'>of</span> <span
  m='869660'>these</span> <span m='869830'>time</span> <span
  m='870120'>series</span> <span m='870440'>methods.</span> <span m='877550'>Let
  me</span> <span m='877740'>go</span> <span m='877850'>to</span> <span
  m='877910'>the</span> <span m='878060'>desktop</span> <span
  m='878630'>here</span> <span m='878920'>if</span> <span m='879210'>I</span>
  <span m='879310'>can.</span> <span m='880740'>In</span> <span
  m='880870'>this</span> <span m='884830'>supplemental</span> <span
  m='885400'>material</span> <span m='885960'>that'll</span> <span m='886090'>be
  on</span> <span m='886160'>the</span> <span m='886230'>website,</span> <span
  m='886690'>I</span> <span m='886770'>just</span> <span
  m='886980'>wanted</span> <span m='887170'>you</span> <span
  m='887300'>to</span> <span m='888350'>be</span> <span m='888600'>able</span>
  <span m='888790'>to</span> <span m='889220'>work</span> <span
  m='889540'>with</span> <span m='889670'>time</span> <span
  m='889940'>series,</span> <span m='890180'>real</span> <span
  m='890390'>time</span> <span m='890670'>series</span> <span
  m='891150'>and</span> <span m='891300'>implement</span> <span
  m='891720'>these</span> <span m='892580'>autoregressive</span> <span
  m='892980'>moving</span> <span m='893250'>average</span> <span
  m='893720'>fits</span> <span m='894530'>and</span> <span
  m='894790'>understand</span> <span m='896430'>basically</span> <span
  m='896840'>how</span> <span m='897110'>things</span> <span
  m='897380'>work.</span> <span m='898220'>So</span> <span m='899000'>in</span>
  <span m='899180'>this</span> <span m='900450'>it</span> <span
  m='901170'>introduces</span> <span m='902260'>loading</span> <span
  m='902690'>the</span> <span m='902800'>R</span> <span
  m='902980'>libraries</span> <span m='903440'>and</span> <span
  m='903550'>Federal</span> <span m='903760'>Reserve</span> <span
  m='904160'>data</span> <span m='904410'>into</span> <span m='904670'>R,</span>
  <span m='905580'>basically</span> <span m='905920'>collecting it</span> <span
  m='906190'>off</span> <span m='906380'>the</span> <span m='906470'>web.</span>
  </p><p><span m='907370'>Creating</span> <span m='907640'>weekly</span> <span
  m='908020'>and</span> <span m='908130'>monthly</span> <span
  m='908550'>time</span> <span m='908860'>series</span> <span
  m='909210'>from</span> <span m='909430'>a</span> <span m='909500'>daily</span>
  <span m='909830'>series,</span> <span m='911300'>and</span> <span
  m='911730'>it's</span> <span m='911920'>a</span> <span
  m='911990'>trivial</span> <span m='912370'>thing</span> <span
  m='912560'>to</span> <span m='912670'>do,</span> <span m='913030'>but</span>
  <span m='913180'>when</span> <span m='913310'>you</span> <span
  m='913420'>sit</span> <span m='913720'>down and</span> <span
  m='913970'>try</span> <span m='914160'>to</span> <span m='914270'>do</span>
  <span m='914460'>it</span> <span m='915890'>gets</span> <span
  m='916110'>involved.</span> <span m='916460'>So</span> <span
  m='916560'>there's</span> <span m='916760'>some</span> <span
  m='917010'>nice</span> <span m='917250'>tools</span> <span
  m='917570'>that</span> <span m='917660'>are</span> <span
  m='917720'>available.</span> <span m='920210'>There's</span> <span
  m='920470'>the</span> <span m='920650'>ACF</span> <span m='921150'>and</span>
  <span m='921210'>the</span> <span m='921310'>PACF,</span> <span
  m='921930'>which</span> <span m='922080'>is</span> <span m='922210'>the</span>
  <span m='922350'>auto-correlation</span> <span m='923250'>function</span>
  <span m='924850'>and</span> <span m='925170'>the</span> <span
  m='925280'>partial</span> <span m='925710'>auto-correlation</span> <span
  m='926420'>function,</span> <span m='926930'>which</span> <span
  m='927220'>are</span> <span m='929030'>used</span> <span m='929260'>for</span>
  <span m='929360'>interpreting</span> <span m='929760'>series.</span> <span
  m='930690'>Then</span> <span m='931300'>we</span> <span
  m='931910'>conduct</span> <span m='932320'>Dickey-Fuller</span> <span
  m='932910'>test</span> <span m='933220'>for</span> <span
  m='933300'>unit</span> <span m='933570'>roots</span> <span
  m='935350'>and</span> <span m='936180'>determine,</span> <span
  m='937510'>evaluate</span> <span m='938390'>stationarity,</span> <span
  m='939030'>non-stationarity</span> <span m='939920'>of</span> <span
  m='940310'>the</span> <span m='940870'>10-year</span> <span
  m='941140'>yield.</span> </p><p><span m='942170'>And</span> <span
  m='942420'>then</span> <span m='944240'>we</span> <span
  m='944920'>evaluate</span> <span m='945700'>stationarity</span> <span
  m='946450'>and</span> <span m='947200'>cyclicality</span> <span
  m='948010'>in</span> <span m='948110'>the</span> <span
  m='948190'>fitted</span> <span m='949580'>auto</span> <span
  m='949830'>regressive</span> <span m='950240'>model</span> <span
  m='950480'>of</span> <span m='950590'>order</span> <span m='950830'>2</span>
  <span m='951240'>to</span> <span m='951330'>monthly</span> <span
  m='951700'>data.</span> <span m='953350'>And</span> <span
  m='953550'>actually</span> <span m='953790'>1.7</span> <span
  m='954750'>there,</span> <span m='955000'>that</span> <span
  m='955780'>cyclicality</span> <span m='956620'>issue</span> <span
  m='956940'>relates</span> <span m='957330'>to</span> <span
  m='957620'>one</span> <span m='957790'>of</span> <span m='957840'>the</span>
  <span m='957920'>problems</span> <span m='958310'>on</span> <span
  m='958430'>the</span> <span m='958900'>problem</span> <span
  m='959320'>set</span> <span m='959980'>for</span> <span m='960160'>time</span>
  <span m='960460'>series,</span> <span m='961290'>which</span> <span
  m='961510'>is</span> <span m='962320'>looking</span> <span
  m='962650'>at</span> <span m='962850'>with</span> <span
  m='963530'>second</span> <span m='963860'>order</span> <span
  m='964100'>auto</span> <span m='964290'>regressive</span> <span
  m='964740'>models.</span> <span m='966030'>Is</span> <span
  m='966330'>there</span> <span m='966730'>cyclicality</span> <span
  m='967670'>in</span> <span m='969500'>the</span> <span
  m='969580'>process?</span> </p><p><span m='970510'>And</span> <span
  m='970620'>then</span> <span m='970750'>finally</span> <span
  m='971270'>looking</span> <span m='971590'>at</span> <span
  m='972360'>identifying</span> <span m='972890'>the</span> <span
  m='972980'>best</span> <span m='973330'>auto</span> <span
  m='973510'>regressive</span> <span m='973930'>model</span> <span
  m='974170'>using</span> <span m='974420'>the</span> <span
  m='974680'>AIC</span> <span m='975020'>criterion.</span> <span
  m='976960'>So</span> <span m='977110'>let</span> <span m='977240'>me</span>
  <span m='978470'>just</span> <span m='978710'>page</span> <span
  m='979010'>through</span> <span m='979250'>and</span> <span
  m='979340'>show</span> <span m='979640'>you</span> <span m='980110'>a</span>
  <span m='980280'>couple</span> <span m='980620'>of</span> <span
  m='981090'>plots</span> <span m='981500'>here.</span> <span
  m='982720'>OK.</span> <span m='982970'>Well,</span> <span
  m='983130'>there's</span> <span m='983360'>the</span> <span
  m='983530'>original</span> <span m='985500'>10</span> <span
  m='985750'>year</span> <span m='985990'>yield</span> <span
  m='986640'>collected</span> <span m='987000'>directly</span> <span
  m='987330'>from</span> <span m='987510'>the</span> <span
  m='987600'>Federal</span> <span m='987830'>Reserve</span> <span
  m='988170'>website</span> <span m='989750'>over</span> <span
  m='990040'>a</span> <span m='990140'>10</span> <span m='990340'>year</span>
  <span m='990550'>period.</span> <span m='992360'>And,</span> <span
  m='992820'>oh,</span> <span m='993726'>here</span> <span m='994162'>we
  go.</span> <span m='994600'>This</span> <span m='994820'>is</span> <span
  m='994950'>nice.</span> <span m='995660'>OK.</span> <span
  m='1002580'>OK.</span> </p><p><span m='1003730'>Let's</span> <span
  m='1003920'>see</span> <span m='1004020'>this</span> <span
  m='1005420'>section</span> <span m='1005770'>1.4</span> <span
  m='1006470'>conducts</span> <span m='1006870'>the</span> <span
  m='1006980'>Dickey-Fuller</span> <span m='1008500'>test.</span> <span
  m='1009930'>And</span> <span m='1010590'>it</span> <span
  m='1010850'>basically</span> <span m='1011880'>determines</span> <span
  m='1012550'>that</span> <span m='1018180'>the</span> <span
  m='1018300'>p</span> <span m='1018620'>value</span> <span
  m='1023080'>for</span> <span m='1023250'>non-stationarity</span> <span
  m='1024359'>is</span> <span m='1025010'>not</span> <span
  m='1025250'>rejected.</span> <span m='1026420'>And</span> <span
  m='1026650'>so,</span> <span m='1029119'>with</span> <span
  m='1030750'>the</span> <span m='1030890'>augmented</span> <span
  m='1031280'>Dickey-Fuller</span> <span m='1031790'>test,</span> <span
  m='1032819'>the</span> <span m='1032839'>test</span> <span
  m='1033060'>statistic</span> <span m='1033560'>is</span> <span
  m='1033819'>computed.</span> <span m='1035089'>Its</span> <span
  m='1035369'>significance</span> <span m='1036000'>is</span> <span
  m='1036130'>evaluated</span> <span m='1037829'>by</span> <span
  m='1038920'>the</span> <span m='1039280'>distribution</span> <span
  m='1039849'>for</span> <span m='1040060'>that</span> <span
  m='1040400'>this</span> <span m='1040609'>statistic.</span> <span
  m='1041760'>And</span> <span m='1041800'>the</span> <span m='1041890'>p</span>
  <span m='1042130'>value</span> <span m='1042540'>tells</span> <span
  m='1042859'>you</span> <span m='1042970'>how</span> <span
  m='1043300'>extreme</span> <span m='1044079'>the</span> <span
  m='1044180'>value</span> <span m='1044790'>of</span> <span
  m='1044900'>the</span> <span m='1045300'>statistic</span> <span
  m='1046040'>is,</span> <span m='1046910'>meaning</span> <span
  m='1047140'>how</span> <span m='1047390'>unusual</span> <span
  m='1048079'>is</span> <span m='1048250'>it.</span> <span
  m='1048910'>The</span> <span m='1049030'>smaller</span> <span
  m='1049530'>the</span> <span m='1049690'>p</span> <span
  m='1049920'>value,</span> <span m='1050860'>the</span> <span
  m='1050870'>more</span> <span m='1051460'>unlikely</span> <span
  m='1052650'>the</span> <span m='1052810'>value</span> <span
  m='1053290'>is.</span> </p><p><span m='1053950'>The</span> <span
  m='1054060'>p</span> <span m='1054250'>value</span> <span
  m='1054660'>is</span> <span m='1054790'>what's</span> <span
  m='1055020'>the</span> <span m='1055110'>likelihood</span> <span
  m='1055510'>of</span> <span m='1055620'>getting</span> <span
  m='1055910'>as</span> <span m='1056210'>extreme</span> <span
  m='1056720'>or</span> <span m='1056810'>more</span> <span
  m='1057060'>extreme</span> <span m='1057480'>a</span> <span
  m='1057540'>value</span> <span m='1057870'>of</span> <span
  m='1057930'>the</span> <span m='1058030'>test</span> <span
  m='1058280'>statistic,</span> <span m='1059690'>and</span> <span
  m='1059790'>the</span> <span m='1059860'>test</span> <span
  m='1060160'>statistic</span> <span m='1060610'>is</span> <span
  m='1060750'>evidence</span> <span m='1061150'>against</span> <span
  m='1061550'>the</span> <span m='1061640'>null</span> <span
  m='1061860'>hypothesis.</span> <span m='1063075'>So</span> <span
  m='1063520'>in</span> <span m='1063640'>this</span> <span
  m='1063820'>case</span> <span m='1064840'>the</span> <span
  m='1065060'>p</span> <span m='1065270'>values</span> <span
  m='1066180'>range</span> <span m='1067230'>basically</span> <span
  m='1067620'>0.2726</span> <span m='1068850'>for</span> <span
  m='1069520'>the</span> <span m='1069640'>monthly</span> <span
  m='1070080'>data,</span> <span m='1071260'>which</span> <span
  m='1071840'>says</span> <span m='1072230'>that</span> <span
  m='1073850'>basically</span> <span m='1080500'>there</span> <span
  m='1080760'>is</span> <span m='1081000'>evidence</span> <span
  m='1081380'>of</span> <span m='1081640'>a</span> <span m='1081810'>unit</span>
  <span m='1082110'>root</span> <span m='1082750'>in</span> <span
  m='1082920'>the</span> <span m='1083010'>process.</span> </p><p><span
  m='1086530'>Let's</span> <span m='1086800'>see.</span> <span
  m='1089260'>OK.</span> <span m='1089480'>There's</span> <span
  m='1089670'>a</span> <span m='1089750'>section</span> <span
  m='1090110'>on</span> <span m='1090240'>understanding</span> <span
  m='1090830'>partial</span> <span m='1091570'>auto-correlation</span> <span
  m='1092380'>coefficients.</span> <span m='1096740'>And</span> <span
  m='1098010'>let</span> <span m='1098160'>me</span> <span
  m='1098400'>just</span> <span m='1098570'>state</span> <span
  m='1098990'>what</span> <span m='1099190'>the</span> <span
  m='1099280'>partial</span> <span m='1099640'>correlation</span> <span
  m='1100180'>coefficients</span> <span m='1100740'>are.</span> <span
  m='1101010'>You</span> <span m='1101150'>have</span> <span
  m='1101280'>the</span> <span m='1101390'>auto-correlation</span> <span
  m='1102120'>functions,</span> <span m='1102510'>which</span> <span
  m='1102720'>are</span> <span m='1102810'>simply</span> <span
  m='1103440'>the</span> <span m='1103790'>correlations</span> <span
  m='1104560'>of</span> <span m='1105390'>the</span> <span
  m='1105540'>time</span> <span m='1105850'>series</span> <span
  m='1106180'>with</span> <span m='1106530'>lags</span> <span
  m='1106930'>of</span> <span m='1107030'>its</span> <span
  m='1107210'>values.</span> <span m='1108190'>The</span> <span
  m='1108310'>partial</span> <span m='1108780'>auto-correlation</span> <span
  m='1109400'>coefficient</span> <span m='1110020'>is</span> <span
  m='1110960'>the</span> <span m='1111120'>correlation</span> <span
  m='1112690'>that's</span> <span m='1114030'>between</span> <span
  m='1115440'>the</span> <span m='1115940'>time</span> <span
  m='1116230'>series</span> <span m='1116640'>and</span> <span
  m='1116850'>say,</span> <span m='1117000'>it's a</span> <span
  m='1117200'>p'th</span> <span m='1117570'>lag</span> <span
  m='1118370'>that</span> <span m='1119090'>is</span> <span
  m='1119300'>not</span> <span m='1119540'>explained</span> <span
  m='1120160'>by</span> <span m='1121180'>all</span> <span
  m='1121450'>lags</span> <span m='1121870'>lower</span> <span
  m='1122180'>than</span> <span m='1122350'>p.</span> <span
  m='1122720'>So</span> <span m='1122990'>it's</span> <span
  m='1123140'>basically</span> <span m='1123420'>the</span> <span
  m='1123620'>incremental</span> <span m='1124230'>correlation</span> <span
  m='1125690'>of</span> <span m='1126150'>the</span> <span
  m='1126990'>time</span> <span m='1127300'>series</span> <span
  m='1127640'>variable</span> <span m='1128440'>with</span> <span
  m='1128810'>the</span> <span m='1128900'>p'th</span> <span
  m='1129250'>lag</span> <span m='1129600'>after</span> <span
  m='1129950'>controlling</span> <span m='1130460'>for</span> <span
  m='1130980'>the</span> <span m='1131140'>others.</span> </p><p><span
  m='1135650'>And</span> <span m='1135870'>then</span> <span
  m='1137010'>let's</span> <span m='1137230'>see.</span> <span
  m='1137420'>With</span> <span m='1137640'>this,</span> <span
  m='1138250'>in</span> <span m='1138570'>section</span> <span
  m='1138950'>eight</span> <span m='1139160'>here</span> <span
  m='1141180'>there's</span> <span m='1141480'>a</span> <span
  m='1141830'>function</span> <span m='1142310'>in</span> <span
  m='1142710'>r</span> <span m='1143490'>called</span> <span
  m='1143830'>ar,</span> <span m='1144650'>for</span> <span m='1144990'>auto
  regressive,</span> <span m='1145710'>which</span> <span
  m='1146830'>basically</span> <span m='1147220'>will</span> <span
  m='1147440'>fit</span> <span m='1148140'>all</span> <span
  m='1148460'>auto</span> <span m='1148650'>regressive</span> <span
  m='1149050'>models</span> <span m='1149380'>up</span> <span
  m='1149520'>to</span> <span m='1149640'>a</span> <span
  m='1149700'>given</span> <span m='1149960'>order</span> <span
  m='1151170'>and</span> <span m='1151750'>provide</span> <span
  m='1152310'>diagnostic</span> <span m='1152950'>statistics</span> <span
  m='1153430'>for</span> <span m='1153580'>that.</span> <span
  m='1154230'>And</span> <span m='1154310'>here</span> <span
  m='1154680'>is</span> <span m='1154910'>a</span> <span m='1154990'>plot</span>
  <span m='1155420'>of</span> <span m='1155590'>the</span> <span
  m='1156120'>relative</span> <span m='1156520'>AIC</span> <span
  m='1156943'>statistic</span> <span m='1158110'>for</span> <span
  m='1158450'>models</span> <span m='1158860'>of</span> <span
  m='1159010'>the</span> <span m='1159090'>monthly</span> <span
  m='1159540'>data.</span> <span m='1160640'>And</span> <span
  m='1160900'>you</span> <span m='1160990'>can</span> <span
  m='1161140'>see</span> <span m='1161720'>that</span> <span
  m='1162230'>basically</span> <span m='1162980'>it</span> <span
  m='1163140'>takes</span> <span m='1163360'>all</span> <span
  m='1163500'>the</span> <span m='1163660'>AIC</span> <span
  m='1164050'>statistics</span> <span m='1165100'>and</span> <span
  m='1165490'>subtracts</span> <span m='1166130'>the</span> <span
  m='1166420'>smallest</span> <span m='1166970'>one</span> <span
  m='1167260'>from</span> <span m='1168250'>all</span> <span
  m='1168430'>the</span> <span m='1168580'>others.</span> <span
  m='1168950'>So</span> <span m='1169130'>one</span> <span m='1169310'>can
  see</span> <span m='1169880'>that</span> <span m='1171770'>according</span>
  <span m='1172230'>to the</span> <span m='1172350'>AIC</span> <span
  m='1172550'>statistic</span> <span m='1173495'>a</span> <span
  m='1173760'>model</span> <span m='1174040'>of</span> <span
  m='1174320'>order</span> <span m='1174650'>seven</span> <span
  m='1175300'>is</span> <span m='1175980'>suggested</span> <span
  m='1176660'>for</span> <span m='1177760'>this</span> <span
  m='1179720'>treasure</span> <span m='1180110'>yield</span> <span
  m='1180430'>data.</span> <span m='1183670'>OK.</span> </p><p><span
  m='1186140'>Then</span> <span m='1186350'>finally</span> <span
  m='1186840'>because</span> <span m='1188360'>these</span> <span
  m='1188580'>auto</span> <span m='1188820'>regressive</span> <span
  m='1189130'>models</span> <span m='1189500'>are</span> <span
  m='1190110'>implemented</span> <span m='1190680'>with</span> <span
  m='1191340'>regression</span> <span m='1191880'>models,</span> <span
  m='1192920'>one</span> <span m='1193250'>can</span> <span
  m='1193650'>apply</span> <span m='1194760'>Regression</span> <span
  m='1195540'>Diagnostics</span> <span m='1196780'>that</span> <span
  m='1196980'>we</span> <span m='1197440'>had</span> <span
  m='1198190'>introduced</span> <span m='1198630'>earlier</span> <span
  m='1199070'>to</span> <span m='1199365'>look</span> <span m='1199660'>at
  those</span> <span m='1199820'>data</span> <span m='1200060'>as</span> <span
  m='1200260'>well.</span> <span m='1202180'>All right.</span> <span
  m='1204140'>So</span> <span m='1204320'>let's</span> <span
  m='1206790'>go</span> <span m='1206890'>down</span> <span
  m='1207180'>now.</span> <span m='1214978'>[INAUDIBLE].</span> <span
  m='1216340'>OK.</span> <span m='1225770'>[INAUDIBLE].</span> <span
  m='1227970'>Full</span> <span m='1228160'>screen.</span> <span
  m='1228660'>Here</span> <span m='1229108'>we go.</span> <span
  m='1231350'>All</span> <span m='1231450'>right.</span> </p><p><span
  m='1236700'>So</span> <span m='1236830'>let's</span> <span
  m='1236990'>move</span> <span m='1237240'>on</span> <span
  m='1237570'>to</span> <span m='1239330'>the</span> <span
  m='1239440'>topic</span> <span m='1239830'>of</span> <span
  m='1239980'>volatility</span> <span m='1240740'>model.</span> <span
  m='1244350'>The</span> <span m='1245980'>discussion</span> <span
  m='1247160'>in this</span> <span m='1249010'>section</span> <span
  m='1250110'>is</span> <span m='1250290'>going</span> <span
  m='1250560'>to</span> <span m='1250630'>begin</span> <span
  m='1251220'>with</span> <span m='1251430'>just</span> <span
  m='1251630'>defining</span> <span m='1252060'>volatility.</span> <span
  m='1253640'>So</span> <span m='1253780'>we</span> <span
  m='1253900'>know</span> <span m='1254120'>what</span> <span
  m='1254230'>we're</span> <span m='1254390'>talking</span> <span
  m='1254700'>about.</span> <span m='1256450'>And</span> <span
  m='1256860'>then</span> <span m='1258510'>measuring</span> <span
  m='1259130'>volatility</span> <span m='1260280'>with</span> <span
  m='1260510'>historical</span> <span m='1261140'>data</span> <span
  m='1261740'>where</span> <span m='1262120'>we</span> <span
  m='1262230'>don't</span> <span m='1262400'>really</span> <span
  m='1262630'>apply</span> <span m='1263090'>sort of</span> <span
  m='1263210'>statistical</span> <span m='1263780'>models</span> <span
  m='1264030'>so</span> <span m='1264180'>much,</span> <span
  m='1265190'>but</span> <span m='1265710'>we're</span> <span
  m='1265820'>concerned</span> <span m='1266280'>with</span> <span
  m='1266410'>just</span> <span m='1266920'>historical</span> <span
  m='1267460'>measures</span> <span m='1267810'>of</span> <span
  m='1267870'>volatility</span> <span m='1268440'>and</span> <span
  m='1268670'>their</span> <span m='1269190'>prediction.</span> </p><p><span
  m='1270180'>Then</span> <span m='1270360'>there</span> <span
  m='1270500'>are</span> <span m='1270550'>formal</span> <span
  m='1270970'>models.</span> <span m='1271450'>We'll</span> <span
  m='1271750'>introduce</span> <span m='1272220'>geometric</span> <span
  m='1272760'>Brownian</span> <span m='1273050'>motion,</span> <span
  m='1273560'>of</span> <span m='1273700'>course.</span> <span
  m='1274230'>That's</span> <span m='1274700'>one of</span> <span
  m='1274900'>the</span> <span m='1274970'>standard</span> <span
  m='1275340'>models</span> <span m='1275770'>in</span> <span
  m='1276240'>finance.</span> <span m='1277080'>But</span> <span
  m='1277210'>also</span> <span m='1277460'>Poisson</span> <span
  m='1278000'>jump-diffusion,</span> <span m='1278710'>which</span> <span
  m='1278930'>as</span> <span m='1279040'>an</span> <span
  m='1279110'>extension</span> <span m='1279940'>of</span> <span
  m='1280940'>geometric</span> <span m='1281450'>Brownian</span> <span
  m='1281810'>motion</span> <span m='1282240'>to</span> <span
  m='1282360'>allow</span> <span m='1282560'>for</span> <span
  m='1282790'>discontinuities.</span> <span m='1284300'>And</span> <span
  m='1284560'>then</span> <span m='1286070'>there's</span> <span
  m='1286240'>a</span> <span m='1286310'>property</span> <span
  m='1286900'>of</span> <span m='1287280'>these</span> <span
  m='1287540'>Brownian</span> <span m='1287980'>motion</span> <span
  m='1288410'>and</span> <span m='1288660'>jump-diffusion</span> <span
  m='1288900'>diffusion</span> <span m='1289310'>models</span> <span
  m='1289600'>which</span> <span m='1289820'>is</span> <span
  m='1290490'>models</span> <span m='1290860'>with</span> <span
  m='1291110'>independent</span> <span m='1292330'>increments.</span> <span
  m='1293400'>Basically</span> <span m='1295070'>you</span> <span
  m='1295220'>have</span> <span m='1301620'>disjoint</span> <span
  m='1302090'>increments</span> <span m='1302500'>of</span> <span
  m='1302560'>the</span> <span m='1302660'>process,</span> <span
  m='1303620'>basically</span> <span m='1304110'>are</span> <span
  m='1304310'>independent</span> <span m='1304900'>of</span> <span
  m='1304990'>each</span> <span m='1305190'>other,</span> <span
  m='1305670'>which</span> <span m='1305750'>is</span> <span
  m='1305830'>a</span> <span m='1305900'>key</span> <span
  m='1306140'>property</span> <span m='1308620'>when</span> <span
  m='1308810'>there's</span> <span m='1309020'>time</span> <span
  m='1309410'>dependence</span> <span m='1310250'>in</span> <span
  m='1310400'>the</span> <span m='1310470'>models.</span> </p><p><span
  m='1311270'>There</span> <span m='1311490'>can be</span> <span
  m='1311620'>time</span> <span m='1311940'>dependence</span> <span
  m='1312370'>actually</span> <span m='1312700'>in</span> <span
  m='1312850'>the</span> <span m='1312920'>volatility.</span> <span
  m='1314040'>And</span> <span m='1314280'>arch</span> <span
  m='1314590'>models</span> <span m='1314970'>were</span> <span
  m='1315110'>introduced</span> <span m='1315550'>initially</span> <span
  m='1315980'>to</span> <span m='1316190'>try</span> <span
  m='1316390'>and</span> <span m='1316470'>capture</span> <span
  m='1316840'>that.</span> <span m='1317090'>And</span> <span
  m='1317220'>were</span> <span m='1317320'>extended</span> <span
  m='1317750'>to</span> <span m='1317930'>GARCH</span> <span
  m='1318170'>models,</span> <span m='1318500'>and</span> <span
  m='1318590'>these</span> <span m='1318720'>are</span> <span
  m='1318830'>the</span> <span m='1319580'>sort of</span> <span
  m='1319760'>simplest</span> <span m='1320210'>cases</span> <span
  m='1320910'>of</span> <span m='1321710'>time</span> <span
  m='1322030'>dependent</span> <span m='1322520'>volatility</span> <span
  m='1323100'>models</span> <span m='1323530'>that</span> <span
  m='1324060'>we</span> <span m='1324210'>can</span> <span
  m='1324360'>work</span> <span m='1324600'>with</span> <span
  m='1324770'>and</span> <span m='1324850'>introduce.</span> <span
  m='1326680'>And</span> <span m='1327090'>in</span> <span
  m='1327500'>all</span> <span m='1327770'>of</span> <span
  m='1328200'>these</span> <span m='1328630'>the</span> <span m='1329920'>sort
  of</span> <span m='1330350'>mathematical</span> <span
  m='1331030'>framework</span> <span m='1331630'>for</span> <span
  m='1331800'>defining</span> <span m='1332280'>these</span> <span
  m='1332480'>models</span> <span m='1333100'>and</span> <span
  m='1333450'>the</span> <span m='1333600'>statistical</span> <span
  m='1334340'>framework</span> <span m='1334820'>for</span> <span
  m='1334970'>estimating</span> <span m='1335320'>their</span> <span
  m='1335490'>parameters</span> <span m='1336670'>is</span> <span
  m='1337100'>going</span> <span m='1337210'>to</span> <span
  m='1337270'>be</span> <span m='1337380'>highlighted.</span> <span
  m='1338050'>And</span> <span m='1339690'>while</span> <span
  m='1339980'>it's</span> <span m='1340500'>a</span> <span
  m='1340860'>very</span> <span m='1341160'>simple</span> <span
  m='1341540'>setting</span> <span m='1342100'>in</span> <span
  m='1342220'>terms</span> <span m='1342490'>of</span> <span
  m='1342590'>what</span> <span m='1342790'>these</span> <span
  m='1342950'>models</span> <span m='1343360'>are,</span> <span
  m='1344710'>these</span> <span m='1345520'>issues</span> <span
  m='1346340'>that</span> <span m='1346480'>we'll</span> <span
  m='1346670'>be</span> <span m='1346940'>covering</span> <span
  m='1348090'>relate</span> <span m='1348500'>to</span> <span
  m='1349780'>virtually</span> <span m='1350160'>all</span> <span
  m='1350800'>statistical</span> <span m='1351270'>modeling</span> <span
  m='1351640'>as</span> <span m='1351740'>well.</span> </p><p><span
  m='1353200'>So</span> <span m='1353260'>let's</span> <span
  m='1353500'>define</span> <span m='1353950'>volatility.</span> <span
  m='1356410'>OK.</span> <span m='1356620'>In</span> <span
  m='1356750'>finance</span> <span m='1358180'>it's</span> <span
  m='1358370'>defined</span> <span m='1358820'>as</span> <span
  m='1358980'>the</span> <span m='1359130'>annualized</span> <span
  m='1359680'>standard</span> <span m='1360010'>deviation</span> <span
  m='1360480'>of</span> <span m='1360530'>the</span> <span
  m='1360630'>change</span> <span m='1360950'>in</span> <span
  m='1361050'>price</span> <span m='1361380'>or</span> <span
  m='1361470'>value</span> <span m='1361860'>of</span> <span
  m='1361950'>a</span> <span m='1362010'>financial</span> <span
  m='1362470'>security,</span> <span m='1363380'>or</span> <span
  m='1364070'>an</span> <span m='1364210'>index.</span> <span
  m='1365280'>So</span> <span m='1365900'>we're</span> <span
  m='1366470'>interested</span> <span m='1366950'>in</span> <span
  m='1367390'>the</span> <span m='1368370'>variability</span> <span
  m='1369630'>of</span> <span m='1370540'>this</span> <span
  m='1372070'>process,</span> <span m='1372660'>a</span> <span
  m='1372730'>price</span> <span m='1373060'>process</span> <span m='1373380'>or
  a</span> <span m='1373700'>value</span> <span m='1374020'>process.</span>
  <span m='1375220'>And</span> <span m='1376090'>we</span> <span
  m='1376280'>consider</span> <span m='1376740'>it</span> <span
  m='1376870'>on</span> <span m='1377020'>an</span> <span
  m='1377120'>annualized</span> <span m='1377850'>time</span> <span
  m='1378110'>scale.</span> <span m='1379240'>Now</span> <span
  m='1379790'>because</span> <span m='1380120'>of</span> <span
  m='1380490'>that,</span> <span m='1382070'>when</span> <span
  m='1382550'>you</span> <span m='1382640'>talk</span> <span
  m='1382870'>about</span> <span m='1383110'>volatility</span> <span
  m='1383910'>it</span> <span m='1384010'>really</span> <span
  m='1384280'>is</span> <span m='1384450'>meaningful</span> <span
  m='1386104'>to</span> <span m='1387060'>communicate,</span> <span
  m='1387930'>levels</span> <span m='1388220'>of</span> <span
  m='1388340'>10%.</span> <span m='1390550'>If</span> <span
  m='1390710'>you</span> <span m='1390790'>think</span> <span
  m='1391010'>of,</span> <span m='1392606'>at</span> <span
  m='1393040'>what</span> <span m='1393270'>level</span> <span
  m='1393790'>do</span> <span m='1395570'>sort</span> <span
  m='1395810'>of</span> <span m='1396220'>absolute</span> <span
  m='1396810'>bond</span> <span m='1397180'>yields</span> <span
  m='1397500'>vary</span> <span m='1398690'>over</span> <span
  m='1398970'>a</span> <span m='1399040'>year?</span> <span
  m='1402440'>It's</span> <span m='1402760'>probably</span> <span
  m='1403220'>less</span> <span m='1403550'>than</span> <span
  m='1403730'>5%.</span> <span m='1405120'>Bond</span> <span m='1405590'>yields
  don't.</span> </p><p><span m='1406370'>When</span> <span
  m='1406570'>you</span> <span m='1406640'>think</span> <span
  m='1406820'>of</span> <span m='1406940'>currencies,</span> <span
  m='1407570'>how</span> <span m='1407680'>much</span> <span
  m='1407860'>do</span> <span m='1407950'>those</span> <span
  m='1408210'>vary</span> <span m='1408600'>over</span> <span m='1408860'>a
  year.</span> <span m='1410860'>Maybe</span> <span m='1411260'>10%.</span>
  <span m='1412790'>With</span> <span m='1413220'>equity</span> <span
  m='1413600'>markets,</span> <span m='1414770'>how do</span> <span
  m='1415000'>those</span> <span m='1415250'>vary?</span> <span
  m='1415480'>Well,</span> <span m='1415810'>maybe</span> <span
  m='1416100'>30%,</span> <span m='1416450'>40%</span> <span
  m='1417360'>or</span> <span m='1417580'>more.</span> <span
  m='1419700'>With</span> <span m='1420700'>the</span> <span
  m='1421560'>estimation</span> <span m='1422090'>and</span> <span
  m='1422190'>prediction</span> <span m='1422580'>approaches,</span> <span
  m='1423170'>OK,</span> <span m='1423430'>these</span> <span
  m='1423760'>are</span> <span m='1424380'>what</span> <span
  m='1424620'>we'll</span> <span m='1424720'>be</span> <span
  m='1424830'>discussing.</span> <span m='1426030'>There's</span> <span
  m='1426500'>different</span> <span m='1426750'>cases.</span> <span
  m='1427930'>So</span> <span m='1428380'>let's</span> <span
  m='1428670'>go</span> <span m='1428830'>onto</span> <span
  m='1429400'>historical</span> <span m='1430200'>volatility.</span> <span
  m='1432830'>In</span> <span m='1432990'>terms</span> <span
  m='1433260'>of</span> <span m='1433350'>computing</span> <span
  m='1434230'>the</span> <span m='1434340'>historical</span> <span
  m='1434930'>volatility</span> <span m='1436270'>we'll</span> <span
  m='1436980'>be</span> <span m='1437840'>considering</span> <span
  m='1438300'>basically</span> <span m='1438840'>a</span> <span
  m='1438970'>price</span> <span m='1439350'>series</span> <span
  m='1440020'>of</span> <span m='1440290'>t</span> <span m='1440490'>plus</span>
  <span m='1440710'>1</span> <span m='1440890'>points.</span> <span
  m='1442080'>And</span> <span m='1442330'>then</span> <span
  m='1442800'>we</span> <span m='1442950'>can</span> <span
  m='1443140'>get</span> <span m='1443750'>t</span> <span
  m='1444650'>period</span> <span m='1445050'>returns</span> <span
  m='1445700'>for</span> <span m='1447010'>corresponding</span> <span
  m='1447250'>to</span> <span m='1447400'>those</span> <span
  m='1447690'>prices,</span> <span m='1448140'>which</span> <span
  m='1448310'>is</span> <span m='1450310'>the</span> <span
  m='1450410'>difference</span> <span m='1450730'>in</span> <span
  m='1450810'>the</span> <span m='1450900'>logs</span> <span m='1451280'>of
  the</span> <span m='1451610'>prices,</span> <span m='1452450'>or the</span>
  <span m='1452570'>log</span> <span m='1452970'>of</span> <span
  m='1453040'>the</span> <span m='1453120'>price</span> <span
  m='1453470'>relatives.</span> </p><p><span m='1454300'>So</span> <span
  m='1454560'>rt</span> <span m='1455270'>is</span> <span
  m='1455660'>going</span> <span m='1455790'>to</span> <span
  m='1455840'>be</span> <span m='1456040'>the</span> <span
  m='1456170'>return</span> <span m='1456600'>for</span> <span
  m='1456710'>the</span> <span m='1456870'>asset.</span> <span
  m='1458370'>And</span> <span m='1459980'>one</span> <span
  m='1460280'>could</span> <span m='1460660'>use</span> <span
  m='1461930'>other</span> <span m='1462170'>definitions,</span> <span
  m='1462710'>like</span> <span m='1462930'>sort</span> <span
  m='1463060'>of</span> <span m='1463180'>the</span> <span
  m='1463510'>absolute</span> <span m='1463950'>return,</span> <span
  m='1464280'>not</span> <span m='1464520'>take</span> <span
  m='1464780'>logs.</span> <span m='1466340'>It's</span> <span
  m='1466640'>convenient</span> <span m='1467430'>in</span> <span
  m='1467720'>much</span> <span m='1468540'>empirical</span> <span
  m='1469500'>analysis,</span> <span m='1470160'>I</span> <span
  m='1470210'>guess,</span> <span m='1470370'>to</span> <span
  m='1470480'>work</span> <span m='1470720'>with</span> <span
  m='1470850'>the</span> <span m='1470940'>logs</span> <span
  m='1472410'>because</span> <span m='1473650'>if</span> <span
  m='1473780'>you</span> <span m='1473880'>sum</span> <span
  m='1474250'>logs</span> <span m='1475420'>you</span> <span
  m='1475570'>get</span> <span m='1476560'>sort</span> <span
  m='1476700'>of</span> <span m='1476790'>log</span> <span m='1477090'>of</span>
  <span m='1477170'>the</span> <span m='1477240'>product.</span> <span
  m='1477990'>And</span> <span m='1478520'>so</span> <span
  m='1478870'>total</span> <span m='1479330'>cumulative</span> <span
  m='1479760'>returns</span> <span m='1480780'>can</span> <span
  m='1480900'>be</span> <span m='1481110'>computed</span> <span
  m='1481520'>easily</span> <span m='1481830'>with</span> <span
  m='1481990'>sums</span> <span m='1482290'>of</span> <span
  m='1482410'>logs.</span> <span m='1483670'>But</span> <span
  m='1484070'>anyway,</span> <span m='1484140'>we'll</span> <span
  m='1484340'>work</span> <span m='1484540'>with</span> <span
  m='1484640'>that</span> <span m='1484830'>scale</span> <span
  m='1485100'>for</span> <span m='1485260'>now.</span> </p><p><span
  m='1487290'>OK.</span> <span m='1487640'>Now</span> <span
  m='1487840'>the</span> <span m='1487970'>process</span> <span
  m='1488650'>rt,</span> <span m='1489730'>the</span> <span
  m='1489930'>return</span> <span m='1490570'>series</span> <span
  m='1491200'>process</span> <span m='1492080'>is</span> <span
  m='1492240'>going</span> <span m='1492450'>to</span> <span
  m='1492510'>be</span> <span m='1492630'>assumed</span> <span
  m='1493030'>to</span> <span m='1493090'>be</span> <span
  m='1493250'>covariant</span> <span m='1493800'>stationary,</span> <span
  m='1495400'>meaning</span> <span m='1495880'>that</span> <span
  m='1496210'>it</span> <span m='1496470'>does</span> <span
  m='1496730'>have</span> <span m='1497020'>a</span> <span
  m='1497230'>finite</span> <span m='1498040'>variance.</span> <span
  m='1499820'>And</span> <span m='1501470'>the</span> <span
  m='1502390'>sample</span> <span m='1502950'>estimate</span> <span
  m='1503400'>of</span> <span m='1503490'>that</span> <span
  m='1503970'>is</span> <span m='1504670'>just</span> <span
  m='1504900'>given</span> <span m='1505200'>by</span> <span
  m='1506990'>the</span> <span m='1507160'>square</span> <span
  m='1507490'>root</span> <span m='1507580'>of</span> <span
  m='1507640'>the</span> <span m='1507710'>sample</span> <span
  m='1508150'>variance.</span> <span m='1510730'>And</span> <span
  m='1511010'>we're</span> <span m='1511200'>also</span> <span
  m='1511440'>considering</span> <span m='1511840'>an</span> <span
  m='1511930'>unbiased</span> <span m='1512560'>estimate</span> <span
  m='1512940'>of</span> <span m='1513140'>that.</span> <span
  m='1516360'>And</span> <span m='1516890'>if</span> <span m='1517120'>we</span>
  <span m='1517230'>want</span> <span m='1517560'>to</span> <span
  m='1519920'>basically</span> <span m='1520210'>convert</span> <span
  m='1520570'>these</span> <span m='1520770'>to</span> <span
  m='1520910'>annualized</span> <span m='1521500'>values</span> <span
  m='1521970'>so</span> <span m='1522200'>that</span> <span
  m='1522380'>we're</span> <span m='1522570'>dealing</span> <span
  m='1522940'>with</span> <span m='1523110'>a</span> <span
  m='1523210'>volatility,</span> <span m='1524030'>then</span> <span
  m='1524210'>if</span> <span m='1524310'>we</span> <span
  m='1524410'>have</span> <span m='1524580'>daily</span> <span
  m='1525550'>prices</span> <span m='1526630'>of</span> <span
  m='1526790'>which</span> <span m='1527740'>in</span> <span
  m='1528180'>financial</span> <span m='1528540'>markets</span> <span
  m='1528870'>they're</span> <span m='1528920'>usually--</span> <span
  m='1529360'>in the</span> <span m='1529580'>US</span> <span
  m='1529970'>they're</span> <span m='1530130'>open</span> <span
  m='1530540'>roughly</span> <span m='1530860'>252</span> <span
  m='1531940'>days</span> <span m='1532200'>a</span> <span
  m='1532240'>year</span> <span m='1532500'>on</span> <span
  m='1532590'>average.</span> </p><p><span m='1533550'>We</span> <span
  m='1533690'>multiply</span> <span m='1534280'>that</span> <span
  m='1534610'>sigma</span> <span m='1534950'>hat</span> <span
  m='1535280'>by</span> <span m='1535450'>252</span> <span
  m='1536710'>root.</span> <span m='1537580'>And</span> <span
  m='1537780'>for</span> <span m='1537900'>weekly,</span> <span
  m='1538310'>root</span> <span m='1538540'>52,</span> <span
  m='1539150'>and</span> <span m='1539330'>root</span> <span
  m='1539650'>12</span> <span m='1540410'>for</span> <span
  m='1540970'>monthly</span> <span m='1541360'>data.</span> <span
  m='1544110'>So</span> <span m='1544510'>regardless</span> <span
  m='1545090'>of</span> <span m='1546590'>the</span> <span
  m='1546990'>periodicity</span> <span m='1547720'>of</span> <span
  m='1547810'>our</span> <span m='1548060'>original</span> <span
  m='1548400'>data</span> <span m='1548870'>we</span> <span
  m='1549050'>can</span> <span m='1549360'>get</span> <span
  m='1549570'>them</span> <span m='1549710'>onto</span> <span
  m='1549990'>that</span> <span m='1550620'>volatility</span> <span
  m='1551250'>scale.</span> </p><p><span m='1556410'>Now</span> <span
  m='1559110'>in</span> <span m='1559260'>terms</span> <span
  m='1559530'>of</span> <span m='1559650'>prediction</span> <span
  m='1560260'>methods</span> <span m='1560960'>that</span> <span
  m='1562620'>one</span> <span m='1562890'>can</span> <span
  m='1563640'>make</span> <span m='1564050'>with</span> <span
  m='1564420'>historical</span> <span m='1564920'>volatility,</span> <span
  m='1565980'>and</span> <span m='1566180'>there's</span> <span
  m='1566350'>a</span> <span m='1566430'>lot</span> <span m='1566810'>of</span>
  <span m='1568800'>work</span> <span m='1570240'>done</span> <span
  m='1570730'>in</span> <span m='1570980'>finance</span> <span
  m='1571630'>by</span> <span m='1571830'>people</span> <span
  m='1572230'>who</span> <span m='1572450'>aren't</span> <span m='1573540'>sort
  of</span> <span m='1573750'>trained</span> <span m='1574160'>as</span> <span
  m='1574260'>a</span> <span m='1574330'>economotricians</span> <span
  m='1575060'>or</span> <span m='1575150'>statisticians,</span> <span
  m='1576490'>they</span> <span m='1576850'>basically</span> <span
  m='1577170'>just</span> <span m='1577370'>work</span> <span
  m='1577640'>with</span> <span m='1577790'>the</span> <span
  m='1577870'>data.</span> <span m='1578570'>And</span> <span
  m='1579600'>there's</span> <span m='1581050'>a</span> <span
  m='1581200'>standard</span> <span m='1581860'>for</span> <span
  m='1582140'>risk</span> <span m='1582360'>analysis</span> <span
  m='1583060'>called</span> <span m='1583330'>the</span> <span
  m='1583550'>risk</span> <span m='1583840'>metrics</span> <span
  m='1584810'>approach,</span> <span m='1585860'>where</span> <span
  m='1587960'>the</span> <span m='1588130'>approach</span> <span
  m='1588990'>defines</span> <span m='1590020'>volatility</span> <span
  m='1590780'>and</span> <span m='1590850'>volatility</span> <span
  m='1591400'>estimates</span> <span m='1591820'>historical</span> <span
  m='1592330'>estimates</span> <span m='1593220'>just</span> <span
  m='1593470'>using</span> <span m='1593950'>simple</span> <span
  m='1595030'>methodologies.</span> </p><p><span m='1595750'>And</span> <span
  m='1595830'>so</span> <span m='1596660'>that's</span> <span
  m='1596890'>just</span> <span m='1597060'>go</span> <span
  m='1597200'>through</span> <span m='1597460'>what</span> <span
  m='1597710'>those</span> <span m='1597940'>are</span> <span
  m='1598110'>here.</span> <span m='1599870'>One</span> <span
  m='1600180'>can</span> <span m='1602530'>basically</span> <span
  m='1606010'>for</span> <span m='1606200'>any</span> <span
  m='1606400'>period</span> <span m='1606790'>t</span> <span
  m='1606940'>1</span> <span m='1607080'>can</span> <span
  m='1607230'>define</span> <span m='1607610'>the</span> <span
  m='1607680'>sample</span> <span m='1608130'>volatility,</span> <span
  m='1609710'>just</span> <span m='1610000'>to</span> <span
  m='1610090'>be</span> <span m='1611550'>the</span> <span
  m='1611710'>sample</span> <span m='1612000'>standard</span> <span
  m='1612210'>deviation</span> <span m='1612750'>of</span> <span
  m='1612930'>the</span> <span m='1613030'>period</span> <span
  m='1613450'>t</span> <span m='1613670'>returns.</span> <span
  m='1615100'>And</span> <span m='1615240'>so</span> <span
  m='1616120'>with</span> <span m='1616780'>daily</span> <span
  m='1617220'>data</span> <span m='1617910'>that</span> <span
  m='1618060'>might</span> <span m='1618250'>just</span> <span
  m='1618430'>be</span> <span m='1618540'>the</span> <span
  m='1618630'>square</span> <span m='1619030'>of</span> <span
  m='1619080'>that</span> <span m='1619320'>daily</span> <span
  m='1619850'>return.</span> <span m='1620800'>With</span> <span
  m='1621000'>monthly</span> <span m='1621400'>data</span> <span
  m='1622460'>it</span> <span m='1622610'>could</span> <span
  m='1622760'>be</span> <span m='1623010'>the</span> <span
  m='1623720'>sample</span> <span m='1624150'>standard</span> <span
  m='1624390'>deviation</span> <span m='1625150'>of</span> <span
  m='1625360'>the</span> <span m='1625440'>returns</span> <span
  m='1625870'>over</span> <span m='1626050'>the</span> <span
  m='1626160'>month</span> <span m='1627720'>and</span> <span
  m='1628030'>it</span> <span m='1628240'>would</span> <span
  m='1628380'>be</span> <span m='1628960'>the</span> <span
  m='1629100'>sample</span> <span m='1629750'>over</span> <span m='1629970'>the
  year.</span> </p><p><span m='1630860'>Also</span> <span
  m='1631660'>with</span> <span m='1632640'>intraday</span> <span
  m='1633160'>data,</span> <span m='1633630'>it</span> <span
  m='1633770'>could</span> <span m='1633940'>be</span> <span
  m='1634150'>the</span> <span m='1634570'>sample</span> <span
  m='1634880'>standard</span> <span m='1635150'>deviation</span> <span
  m='1635700'>over</span> <span m='1636670'>intraday</span> <span
  m='1637680'>periods</span> <span m='1638130'>of</span> <span
  m='1638460'>say,</span> <span m='1639750'>half</span> <span
  m='1640040'>hours</span> <span m='1640490'>or</span> <span
  m='1640680'>hours.</span> <span m='1642900'>And</span> <span
  m='1644200'>the</span> <span m='1644280'>historical</span> <span
  m='1644860'>average</span> <span m='1646010'>is</span> <span
  m='1646240'>simply</span> <span m='1646810'>the</span> <span
  m='1646990'>mean</span> <span m='1647370'>of</span> <span
  m='1647480'>those</span> <span m='1648090'>estimates,</span> <span
  m='1650040'>which</span> <span m='1650320'>uses</span> <span
  m='1650810'>all</span> <span m='1651050'>the</span> <span
  m='1651170'>available</span> <span m='1651640'>data.</span> <span
  m='1652490'>One</span> <span m='1652660'>can</span> <span
  m='1652760'>consider</span> <span m='1653110'>the</span> <span
  m='1653240'>simple</span> <span m='1653610'>moving</span> <span
  m='1653950'>average</span> <span m='1654830'>of</span> <span
  m='1655260'>these</span> <span m='1656190'>realized</span> <span
  m='1656660'>volatilities.</span> <span m='1658280'>And</span> <span
  m='1658530'>so</span> <span m='1660040'>that</span> <span
  m='1660400'>basically</span> <span m='1660870'>is</span> <span
  m='1661290'>using</span> <span m='1661690'>the</span> <span
  m='1661820'>last</span> <span m='1662490'>m</span> <span
  m='1662990'>for</span> <span m='1663190'>some</span> <span
  m='1663410'>finite</span> <span m='1663830'>m</span> <span
  m='1664330'>values</span> <span m='1664890'>to</span> <span
  m='1665150'>average.</span> </p><p><span m='1666260'>And</span> <span
  m='1668520'>one</span> <span m='1668770'>could</span> <span
  m='1668920'>also</span> <span m='1669940'>consider</span> <span
  m='1670520'>an</span> <span m='1670690'>exponential</span> <span
  m='1671390'>moving</span> <span m='1671750'>average</span> <span
  m='1673296'>of</span> <span m='1673770'>these</span> <span
  m='1675010'>sample</span> <span m='1675370'>volatilities</span> <span
  m='1676120'>where</span> <span m='1677170'>we</span> <span
  m='1677420'>have</span> <span m='1677840'>our</span> <span
  m='1678030'>estimate</span> <span m='1678350'>of</span> <span
  m='1678820'>the</span> <span m='1679050'>volatility</span> <span
  m='1679850'>is</span> <span m='1680660'>1</span> <span
  m='1680940'>minus</span> <span m='1681390'>beta</span> <span
  m='1682060'>times</span> <span m='1683680'>the</span> <span
  m='1684100'>current</span> <span m='1684510'>period</span> <span
  m='1684960'>volatility</span> <span m='1685600'>plus</span> <span
  m='1685890'>beta</span> <span m='1686280'>times</span> <span
  m='1686620'>the</span> <span m='1686720'>previous</span> <span
  m='1687230'>estimate.</span> <span m='1688550'>And</span> <span
  m='1689020'>these</span> <span m='1689250'>exponential</span> <span
  m='1689910'>moving</span> <span m='1690250'>averages</span> <span
  m='1690780'>are</span> <span m='1690840'>really</span> <span
  m='1691100'>very</span> <span m='1691340'>nice</span> <span
  m='1692640'>ways</span> <span m='1694450'>to</span> <span
  m='1694730'>estimate</span> <span m='1695990'>processes</span> <span
  m='1696990'>that</span> <span m='1697640'>change</span> <span
  m='1698580'>over</span> <span m='1698830'>time.</span> <span
  m='1699740'>And</span> <span m='1700410'>they're</span> <span
  m='1700600'>able</span> <span m='1700850'>to</span> <span
  m='1700990'>track</span> <span m='1702010'>the</span> <span
  m='1702210'>changes</span> <span m='1702700'>quite</span> <span
  m='1702990'>well</span> <span m='1703440'>and</span> <span
  m='1703900'>they</span> <span m='1704340'>will</span> <span
  m='1704490'>tend</span> <span m='1704780'>to</span> <span
  m='1704850'>come</span> <span m='1705070'>up</span> <span
  m='1705230'>again</span> <span m='1705410'>and</span> <span
  m='1705710'>again.</span> </p><p><span m='1707350'>This</span> <span
  m='1707530'>exponential</span> <span m='1707990'>moving</span> <span
  m='1708270'>average</span> <span m='1708620'>actually</span> <span
  m='1708880'>uses</span> <span m='1709190'>all</span> <span
  m='1709360'>available</span> <span m='1709760'>data.</span> <span
  m='1711990'>And</span> <span m='1712990'>there</span> <span
  m='1713230'>can</span> <span m='1713370'>be</span> <span
  m='1713520'>discrete</span> <span m='1714020'>versions</span> <span
  m='1714360'>of</span> <span m='1714440'>those</span> <span
  m='1714630'>where</span> <span m='1714770'>you</span> <span
  m='1714860'>say,</span> <span m='1715160'>well</span> <span
  m='1715190'>let's</span> <span m='1715410'>use</span> <span
  m='1716400'>not</span> <span m='1716610'>an</span> <span
  m='1716710'>equal</span> <span m='1717070'>weighted</span> <span
  m='1717390'>average</span> <span m='1717800'>like</span> <span
  m='1718020'>the</span> <span m='1718110'>simple</span> <span
  m='1718420'>moving</span> <span m='1718720'>average,</span> <span
  m='1719130'>but</span> <span m='1719230'>let's</span> <span
  m='1719310'>use</span> <span m='1719490'>a</span> <span
  m='1720360'>geometric</span> <span m='1720990'>average</span> <span
  m='1721330'>of</span> <span m='1721410'>the</span> <span
  m='1721490'>last</span> <span m='1722180'>m</span> <span
  m='1722440'>values</span> <span m='1723420'>in an</span> <span
  m='1723630'>exponential</span> <span m='1723925'>way.</span> <span
  m='1724220'>And</span> <span m='1724380'>that's</span> <span
  m='1724580'>the</span> <span m='1724680'>exponential</span> <span
  m='1725390'>weighted</span> <span m='1725790'>moving</span> <span
  m='1726100'>average</span> <span m='1726790'>that</span> <span
  m='1726970'>uses</span> <span m='1727150'>the</span> <span
  m='1727230'>last</span> <span m='1727520'>m.</span> <span
  m='1734290'>OK.</span> <span m='1734690'>There</span> <span
  m='1734840'>we</span> <span m='1734920'>go.</span> <span
  m='1743112'>OK.</span> </p><p><span m='1746610'>Well,</span> <span
  m='1746850'>with</span> <span m='1746900'>these</span> <span
  m='1747180'>different</span> <span m='1748190'>measures</span> <span
  m='1748750'>of</span> <span m='1749660'>sample</span> <span
  m='1750720'>volatility,</span> <span m='1751870'>one</span> <span
  m='1752100'>can</span> <span m='1752230'>basically</span> <span
  m='1753820'>build</span> <span m='1754490'>models</span> <span
  m='1755200'>to</span> <span m='1755410'>estimate</span> <span
  m='1755990'>them</span> <span m='1757610'>with</span> <span
  m='1758050'>regression</span> <span m='1758550'>models</span> <span
  m='1759550'>and</span> <span m='1762850'>evaluate.</span> <span
  m='1763990'>And</span> <span m='1764060'>in</span> <span
  m='1764270'>terms</span> <span m='1764500'>of</span> <span
  m='1764570'>the</span> <span m='1764670'>risk</span> <span
  m='1764920'>metrics</span> <span m='1765480'>benchmark,</span> <span
  m='1766650'>they</span> <span m='1766830'>consider</span> <span
  m='1767270'>a</span> <span m='1767360'>variety</span> <span
  m='1768120'>of</span> <span m='1768240'>different</span> <span
  m='1769430'>methodologies</span> <span m='1770140'>for</span> <span
  m='1770250'>estimating</span> <span m='1770650'>volatility.</span> <span
  m='1772080'>And</span> <span m='1772475'>sort of</span> <span
  m='1772870'>determine</span> <span m='1773560'>what</span> <span
  m='1773920'>methods</span> <span m='1774450'>are</span> <span
  m='1774650'>best</span> <span m='1775000'>for</span> <span
  m='1775110'>different</span> <span m='1775430'>kinds</span> <span
  m='1775840'>of</span> <span m='1776120'>financial</span> <span
  m='1776580'>instruments.</span> <span m='1778320'>And</span> <span
  m='1779270'>different</span> <span m='1779580'>financial</span> <span
  m='1779980'>indexes.</span> </p><p><span m='1782030'>And</span> <span
  m='1782340'>there</span> <span m='1782510'>are</span> <span
  m='1782790'>different</span> <span m='1783140'>performance</span> <span
  m='1783740'>measures</span> <span m='1784140'>one</span> <span
  m='1784350'>can</span> <span m='1784480'>apply.</span> <span m='1785000'>Sort
  of</span> <span m='1785250'>mean</span> <span m='1785500'>squared</span> <span
  m='1785910'>error</span> <span m='1786690'>of</span> <span
  m='1786840'>prediction,</span> <span m='1787740'>mean</span> <span
  m='1788040'>absolute</span> <span m='1788540'>error</span> <span
  m='1788710'>of</span> <span m='1788790'>prediction.</span> <span
  m='1791020'>Mean</span> <span m='1791330'>absolute</span> <span
  m='1791730'>prediction</span> <span m='1792110'>error,</span> <span
  m='1792250'>and</span> <span m='1792360'>so</span> <span
  m='1792540'>forth</span> <span m='1793360'>to</span> <span
  m='1794270'>evaluate</span> <span m='1794730'>different</span> <span
  m='1794950'>methodologies.</span> <span m='1795680'>And</span> <span
  m='1797790'>on</span> <span m='1797960'>the</span> <span
  m='1798080'>web</span> <span m='1798490'>you</span> <span
  m='1798530'>can</span> <span m='1798660'>actually</span> <span
  m='1798970'>look</span> <span m='1799200'>at</span> <span
  m='1799560'>the</span> <span m='1799800'>technical</span> <span
  m='1800200'>documents</span> <span m='1800640'>for risk</span> <span
  m='1800930'>metrics</span> <span m='1801370'>and</span> <span
  m='1801430'>they</span> <span m='1801530'>go</span> <span
  m='1801700'>through</span> <span m='1802380'>these</span> <span
  m='1802720'>analyses</span> <span m='1803530'>and</span> <span
  m='1803800'>if</span> <span m='1803930'>your</span> <span
  m='1804190'>interest</span> <span m='1804730'>is</span> <span
  m='1804860'>in</span> <span m='1804990'>a</span> <span
  m='1805050'>particular</span> <span m='1805580'>area</span> <span
  m='1805920'>of</span> <span m='1806040'>finance,</span> <span
  m='1806700'>whether it's</span> <span m='1807000'>fixed</span> <span
  m='1807290'>income</span> <span m='1807690'>or</span> <span
  m='1807800'>equities,</span> <span m='1808840'>commodities,</span> <span
  m='1809810'>or</span> <span m='1810300'>currencies,</span> <span
  m='1811660'>reviewing</span> <span m='1812710'>their</span> <span
  m='1812930'>work</span> <span m='1813220'>there</span> <span
  m='1813560'>is</span> <span m='1813750'>very</span> <span
  m='1814030'>interesting</span> <span m='1814540'>because</span> <span
  m='1814950'>it</span> <span m='1815160'>does</span> <span
  m='1816290'>highlight</span> <span m='1817220'>different</span> <span
  m='1817970'>aspects</span> <span m='1818510'>of</span> <span
  m='1818610'>those</span> <span m='1818830'>markets.</span> </p><p><span
  m='1820740'>And</span> <span m='1821820'>it</span> <span
  m='1821980'>turns</span> <span m='1822280'>out</span> <span
  m='1822520'>that</span> <span m='1823440'>basically</span> <span
  m='1823700'>the</span> <span m='1823800'>exponential</span> <span
  m='1824440'>moving</span> <span m='1824760'>average</span> <span
  m='1825690'>is</span> <span m='1826390'>generally</span> <span
  m='1826830'>a</span> <span m='1826880'>very</span> <span
  m='1827200'>good</span> <span m='1828120'>method</span> <span
  m='1828510'>for</span> <span m='1828820'>many</span> <span
  m='1829070'>instruments.</span> <span m='1830040'>And</span> <span
  m='1831660'>the</span> <span m='1833270'>sort</span> <span
  m='1833400'>of</span> <span m='1833490'>discounting</span> <span
  m='1834735'>of</span> <span m='1835100'>the</span> <span
  m='1836900'>values</span> <span m='1837450'>over</span> <span
  m='1837660'>time</span> <span m='1838050'>corresponds</span> <span
  m='1838760'>to</span> <span m='1838840'>having</span> <span
  m='1839210'>roughly</span> <span m='1839610'>between,</span> <span
  m='1839950'>I</span> <span m='1840010'>guess,</span> <span
  m='1840540'>a</span> <span m='1840640'>45</span> <span m='1841340'>and</span>
  <span m='1841430'>a</span> <span m='1841510'>90</span> <span
  m='1841930'>day</span> <span m='1842180'>period</span> <span
  m='1843110'>in</span> <span m='1843490'>estimating</span> <span
  m='1844000'>your</span> <span m='1844140'>volatility.</span> <span
  m='1845910'>And</span> <span m='1846410'>in</span> <span
  m='1846630'>these</span> <span m='1846910'>approaches</span> <span
  m='1847490'>which</span> <span m='1847730'>are,</span> <span
  m='1848690'>I</span> <span m='1849110'>guess,</span> <span
  m='1850690'>they're</span> <span m='1851180'>a</span> <span m='1851400'>bit
  ad</span> <span m='1851600'>hoc.</span> <span m='1852930'>There's</span> <span
  m='1853220'>the</span> <span m='1853530'>formalism.</span> <span
  m='1854250'>And</span> <span m='1854610'>defining</span> <span
  m='1855040'>them</span> <span m='1855200'>is</span> <span
  m='1856100'>basically</span> <span m='1856470'>just</span> <span
  m='1856990'>empirically</span> <span m='1857530'>what</span> <span
  m='1857940'>has</span> <span m='1858060'>worked</span> <span
  m='1858330'>in</span> <span m='1858390'>the</span> <span
  m='1858490'>past.</span> <span m='1863880'>Let's see.</span> </p><p><span
  m='1868610'>While</span> <span m='1868990'>these</span> <span
  m='1869220'>things</span> <span m='1869450'>are</span> <span
  m='1870020'>ad</span> <span m='1870200'>hoc,</span> <span
  m='1870670'>they</span> <span m='1870930'>actually</span> <span
  m='1872170'>have</span> <span m='1872370'>been</span> <span
  m='1872730'>very,</span> <span m='1873050'>very</span> <span
  m='1873150'>effective.</span> <span m='1873840'>So</span> <span
  m='1879480'>let's</span> <span m='1879650'>move</span> <span
  m='1879910'>on</span> <span m='1880160'>to</span> <span
  m='1880700'>formal</span> <span m='1882560'>statistical</span> <span
  m='1882860'>models</span> <span m='1883970'>of</span> <span
  m='1884880'>volatility.</span> <span m='1885940'>And</span> <span
  m='1886280'>the</span> <span m='1886440'>first</span> <span
  m='1887410'>class's</span> <span m='1889100'>model</span> <span m='1889530'>is
  the</span> <span m='1889980'>Geometric</span> <span
  m='1890550'>Brownian</span> <span m='1890870'>Motion.</span> <span
  m='1891240'>So</span> <span m='1893050'>here</span> <span
  m='1893630'>we</span> <span m='1893770'>have</span> <span
  m='1895980'>basically</span> <span m='1896580'>a</span> <span
  m='1896720'>stochastic</span> <span m='1897230'>differential</span> <span
  m='1897700'>equation</span> <span m='1898430'>defining</span> <span
  m='1899190'>the</span> <span m='1899280'>model</span> <span
  m='1899890'>for</span> <span m='1900080'>Geometric</span> <span
  m='1900580'>Brownian</span> <span m='1900940'>Motion.</span> <span
  m='1901960'>And</span> <span m='1902820'>[INAUDIBLE]</span> <span
  m='1903220'>will</span> <span m='1903420'>be</span> <span
  m='1903540'>going</span> <span m='1903880'>in</span> <span
  m='1904290'>some</span> <span m='1904500'>detail</span> <span
  m='1904950'>about</span> <span m='1906000'>stochastic</span> <span
  m='1906590'>differential</span> <span m='1908650'>equations.</span> <span
  m='1909360'>And</span> <span m='1910760'>stochastic</span> <span
  m='1911090'>calculus</span> <span m='1911490'>for</span> <span
  m='1911620'>representing</span> <span m='1912300'>different</span> <span
  m='1912650'>processes,</span> <span m='1913280'>continuous</span> <span
  m='1913770'>processes.</span> </p><p><span m='1915590'>And</span> <span
  m='1916820'>the</span> <span m='1916930'>formulation</span> <span
  m='1917750'>is</span> <span m='1919770'>basically</span> <span
  m='1920570'>looking</span> <span m='1920910'>at</span> <span
  m='1921060'>increments</span> <span m='1921660'>of</span> <span
  m='1922050'>the</span> <span m='1922210'>price</span> <span
  m='1922620'>process</span> <span m='1923190'>s</span> <span
  m='1924320'>is</span> <span m='1924670'>equal</span> <span
  m='1925020'>to</span> <span m='1927970'>basically</span> <span
  m='1928470'>a</span> <span m='1928590'>mu</span> <span m='1928940'>s</span>
  <span m='1929140'>of</span> <span m='1929270'>t.</span> <span m='1929800'>Sort
  of</span> <span m='1929980'>a</span> <span m='1930180'>drift</span> <span
  m='1931270'>term,</span> <span m='1932660'>plus</span> <span
  m='1933840'>a</span> <span m='1933970'>sigma</span> <span m='1934320'>s of
  t,</span> <span m='1934910'>a</span> <span m='1934950'>multiple</span> <span
  m='1935400'>of</span> <span m='1935610'>dw</span> <span m='1936170'>of</span>
  <span m='1936300'>t,</span> <span m='1937250'>where</span> <span
  m='1938490'>sigma</span> <span m='1938930'>is</span> <span
  m='1939240'>the</span> <span m='1939350'>volatility</span> <span
  m='1940020'>of the</span> <span m='1940120'>security</span> <span
  m='1940640'>price.</span> <span m='1941130'>mu</span> <span
  m='1941360'>is</span> <span m='1941500'>the</span> <span
  m='1941590'>mean</span> <span m='1941870'>return</span> <span
  m='1942290'>per</span> <span m='1942420'>unit</span> <span
  m='1942770'>time.</span> <span m='1944400'>dw</span> <span
  m='1944940'>of</span> <span m='1945070'>t</span> <span m='1945810'>is</span>
  <span m='1946040'>the</span> <span m='1946160'>increment</span> <span
  m='1946610'>of</span> <span m='1946730'>a</span> <span
  m='1946800'>standard</span> <span m='1947310'>Brownian</span> <span
  m='1947750'>motion</span> <span m='1949130'>processor,</span> <span
  m='1949830'>Wiener</span> <span m='1950170'>process.</span> <span
  m='1951350'>And</span> <span m='1951660'>this</span> <span
  m='1954140'>w</span> <span m='1954490'>process</span> <span
  m='1955560'>is</span> <span m='1955740'>such</span> <span
  m='1956090'>that</span> <span m='1956340'>it's</span> <span
  m='1956600'>increments,</span> <span m='1958210'>basically</span> <span
  m='1958670'>the</span> <span m='1959190'>change</span> <span
  m='1959580'>in</span> <span m='1959690'>value</span> <span m='1960040'>of
  the</span> <span m='1960170'>process</span> <span m='1960680'>over</span>
  <span m='1961230'>between</span> <span m='1961600'>two</span> <span
  m='1961820'>time</span> <span m='1962160'>points</span> <span
  m='1963100'>is</span> <span m='1963320'>normally</span> <span
  m='1963790'>distributed,</span> <span m='1965540'>with</span> <span
  m='1965750'>mean</span> <span m='1966000'>0</span> <span
  m='1966410'>and</span> <span m='1969180'>variance</span> <span
  m='1969750'>equal</span> <span m='1970080'>to</span> <span
  m='1970600'>the</span> <span m='1970780'>length</span> <span
  m='1971060'>of</span> <span m='1971180'>the</span> <span
  m='1971310'>interval.</span> <span m='1974360'>And</span> <span
  m='1974550'>increments</span> <span m='1975020'>on</span> <span
  m='1975140'>disjoint</span> <span m='1975600'>time</span> <span
  m='1975880'>intervals</span> <span m='1976200'>are</span> <span
  m='1976430'>independent.</span> </p><p><span m='1981690'>And</span> <span
  m='1988760'>well,</span> <span m='1988950'>if</span> <span
  m='1989100'>you</span> <span m='1989190'>divide</span> <span
  m='1990090'>both</span> <span m='1990390'>sides</span> <span
  m='1990810'>of</span> <span m='1990900'>that</span> <span
  m='1991080'>equation</span> <span m='1991710'>by</span> <span
  m='1992200'>s</span> <span m='1992440'>of</span> <span m='1992600'>t</span>
  <span m='1994190'>then</span> <span m='1994520'>you</span> <span
  m='1994670'>have</span> <span m='1994890'>ds of t</span> <span
  m='1995610'>over</span> <span m='1995870'>s</span> <span m='1996100'>of</span>
  <span m='1996230'>t</span> <span m='1996535'>is</span> <span
  m='1996840'>equal</span> <span m='1997030'>to</span> <span
  m='1997150'>mu</span> <span m='1997360'>dt</span> <span
  m='1997810'>plus</span> <span m='1998440'>sigma</span> <span
  m='1998860'>dw</span> <span m='1999140'>of t.</span> <span
  m='2000120'>And</span> <span m='2000360'>so</span> <span
  m='2001200'>the</span> <span m='2001780'>increments</span> <span
  m='2003100'>ds</span> <span m='2003550'>of</span> <span m='2003690'>t</span>
  <span m='2003940'>normalized</span> <span m='2004520'>by</span> <span
  m='2004660'>s</span> <span m='2004910'>of</span> <span m='2005020'>t</span>
  <span m='2005495'>are</span> <span m='2005970'>a</span> <span
  m='2006120'>standard</span> <span m='2006670'>Brownian</span> <span
  m='2007060'>Motion</span> <span m='2007420'>with</span> <span
  m='2007640'>drift</span> <span m='2007970'>mu</span> <span
  m='2008530'>and</span> <span m='2009010'>volatility</span> <span
  m='2009660'>sigma.</span> </p><p><span m='2016200'>Now</span> <span
  m='2017620'>with</span> <span m='2019720'>sample</span> <span
  m='2020150'>data</span> <span m='2021230'>from</span> <span
  m='2021790'>this</span> <span m='2022130'>process,</span> <span
  m='2024570'>now</span> <span m='2024620'>suppose</span> <span
  m='2024970'>we</span> <span m='2025080'>have</span> <span
  m='2025750'>prices</span> <span m='2026300'>observed</span> <span
  m='2026890'>at</span> <span m='2027700'>times</span> <span
  m='2028440'>t0</span> <span m='2028950'>up</span> <span m='2029060'>to</span>
  <span m='2029180'>tn.</span> <span m='2030820'>And for</span> <span
  m='2031030'>now</span> <span m='2032120'>we're</span> <span
  m='2032300'>not</span> <span m='2032510'>going</span> <span
  m='2032690'>to</span> <span m='2032740'>make</span> <span
  m='2032980'>any</span> <span m='2033360'>assumptions</span> <span
  m='2033960'>about</span> <span m='2034400'>what</span> <span
  m='2034930'>those</span> <span m='2035250'>time</span> <span
  m='2036200'>increments</span> <span m='2036760'>are,</span> <span
  m='2037070'>what</span> <span m='2037380'>those</span> <span
  m='2037540'>times</span> <span m='2037830'>are.</span> <span
  m='2037950'>They</span> <span m='2038820'>could</span> <span
  m='2038990'>be</span> <span m='2039120'>equally</span> <span
  m='2039440'>spaced.</span> <span m='2039870'>They</span> <span
  m='2039960'>could</span> <span m='2040120'>be</span> <span
  m='2040270'>unequally</span> <span m='2040720'>spaced.</span> <span
  m='2043550'>The</span> <span m='2043670'>returns,</span> <span
  m='2045440'>the</span> <span m='2046140'>log</span> <span
  m='2046600'>of</span> <span m='2046730'>the</span> <span
  m='2046880'>price</span> <span m='2047540'>relative</span> <span
  m='2048210'>price</span> <span m='2048820'>change</span> <span
  m='2049330'>from</span> <span m='2050060'>time</span> <span
  m='2050420'>tj</span> <span m='2050840'>minus</span> <span
  m='2051130'>1</span> <span m='2051280'>to</span> <span m='2051360'>tj</span>
  <span m='2053690'>are</span> <span m='2053989'>independent</span> <span
  m='2054570'>random</span> <span m='2054870'>variables.</span> <span
  m='2055880'>And</span> <span m='2057170'>they</span> <span
  m='2057440'>are</span> <span m='2058130'>independent.</span> <span
  m='2059610'>Their</span> <span m='2059830'>distribution</span> <span
  m='2060440'>is</span> <span m='2060610'>normally</span> <span
  m='2061110'>distributed</span> <span m='2061800'>with</span> <span
  m='2062070'>mean</span> <span m='2062449'>given</span> <span
  m='2062719'>by</span> <span m='2062920'>mu</span> <span
  m='2063770'>times</span> <span m='2064830'>the</span> <span
  m='2065340'>length</span> <span m='2065780'>of the</span> <span
  m='2066020'>time</span> <span m='2066300'>increment.</span> <span
  m='2067330'>And</span> <span m='2067699'>variance</span> <span
  m='2068250'>sigma</span> <span m='2068550'>squared</span> <span
  m='2069080'>times</span> <span m='2069730'>the</span> <span
  m='2069850'>length</span> <span m='2070130'>of</span> <span
  m='2070219'>the</span> <span m='2070320'>increment.</span> </p><p><span
  m='2071580'>And</span> <span m='2072270'>these</span> <span
  m='2073010'>properties</span> <span m='2073590'>will</span> <span
  m='2073719'>be</span> <span m='2073860'>covered</span> <span
  m='2074280'>by</span> <span m='2074460'>[INAUDIBLE]</span> <span
  m='2075909'>in</span> <span m='2076159'>some</span> <span
  m='2076350'>later</span> <span m='2076610'>lectures.</span> <span
  m='2078139'>So</span> <span m='2078370'>for</span> <span
  m='2078510'>now</span> <span m='2078770'>what</span> <span
  m='2078909'>we</span> <span m='2079060'>can</span> <span
  m='2079179'>just</span> <span m='2080530'>know</span> <span
  m='2080800'>that</span> <span m='2080969'>this</span> <span
  m='2081179'>is</span> <span m='2081320'>true</span> <span
  m='2081750'>and</span> <span m='2081870'>apply</span> <span
  m='2082380'>this</span> <span m='2082600'>result.</span> <span
  m='2083880'>If</span> <span m='2084570'>we</span> <span m='2084710'>fix</span>
  <span m='2085260'>various</span> <span m='2086090'>time</span> <span
  m='2086420'>points</span> <span m='2086679'>for</span> <span
  m='2086770'>the</span> <span m='2086870'>observation</span> <span
  m='2087145'>and</span> <span m='2087420'>compute</span> <span
  m='2087739'>returns</span> <span m='2088190'>this</span> <span
  m='2088360'>way.</span> <span m='2089130'>If</span> <span
  m='2089290'>it's</span> <span m='2089400'>a</span> <span
  m='2089719'>Geometric</span> <span m='2090550'>Brownian</span> <span
  m='2090790'>Motion</span> <span m='2091260'>we</span> <span
  m='2091360'>know</span> <span m='2091580'>that</span> <span
  m='2091739'>this</span> <span m='2091920'>is</span> <span
  m='2092040'>the</span> <span m='2092130'>distribution</span> <span
  m='2093400'>of the</span> <span m='2093650'>returns.</span> </p><p><span
  m='2095610'>Now</span> <span m='2096500'>knowing</span> <span
  m='2096880'>that</span> <span m='2097050'>distribution</span> <span
  m='2097620'>we</span> <span m='2097730'>can</span> <span
  m='2097850'>now</span> <span m='2098190'>engage</span> <span
  m='2098600'>in</span> <span m='2098680'>maximum</span> <span
  m='2099130'>likelihood</span> <span m='2099480'>estimation.</span> <span
  m='2101900'>OK.</span> <span m='2102120'>If</span> <span
  m='2103310'>the</span> <span m='2103510'>increments</span> <span
  m='2104110'>are</span> <span m='2104330'>all</span> <span
  m='2104880'>just</span> <span m='2105110'>equal</span> <span
  m='2105340'>to</span> <span m='2105410'>1,</span> <span m='2106030'>so</span>
  <span m='2106240'>we're</span> <span m='2106370'>thinking</span> <span
  m='2106560'>of</span> <span m='2106840'>daily</span> <span
  m='2107170'>data,</span> <span m='2107520'>say.</span> <span
  m='2109140'>Then</span> <span m='2110160'>the</span> <span
  m='2110330'>maximum</span> <span m='2110660'>likelihood</span> <span
  m='2110960'>estimates</span> <span m='2111420'>are</span> <span
  m='2112740'>simple.</span> <span m='2113600'>It's</span> <span
  m='2113840'>basically</span> <span m='2113910'>the</span> <span
  m='2113990'>sample</span> <span m='2114340'>mean</span> <span
  m='2114620'>and</span> <span m='2114700'>the</span> <span
  m='2114770'>sample</span> <span m='2115120'>variance</span> <span
  m='2117190'>with</span> <span m='2117390'>1</span> <span
  m='2117570'>over</span> <span m='2117770'>n</span> <span
  m='2117880'>instead</span> <span m='2118100'>of</span> <span
  m='2118170'>1</span> <span m='2118310'>over</span> <span m='2118450'>n</span>
  <span m='2118560'>minus</span> <span m='2118750'>1</span> <span
  m='2118900'>to</span> <span m='2119000'>the</span> <span m='2119090'>[? mle's.
  ?]</span> <span m='2120340'>If</span> <span m='2120560'>delta</span> <span
  m='2120960'>j</span> <span m='2121250'>varies</span> <span
  m='2123150'>then,</span> <span m='2124920'>well,</span> <span
  m='2126090'>that's</span> <span m='2126520'>actually</span> <span
  m='2126830'>a</span> <span m='2126910'>case</span> <span
  m='2127240'>for</span> <span m='2129230'>in</span> <span
  m='2129530'>the</span> <span m='2129630'>exercises.</span> </p><p><span
  m='2130810'>Now</span> <span m='2133860'>does</span> <span
  m='2134070'>anyone,</span> <span m='2135040'>in</span> <span
  m='2135220'>terms</span> <span m='2135560'>of,</span> <span
  m='2137300'>well,</span> <span m='2139100'>in</span> <span
  m='2139930'>the</span> <span m='2140110'>class</span> <span
  m='2140590'>exercise</span> <span m='2143310'>the</span> <span
  m='2145130'>issue</span> <span m='2145550'>that</span> <span
  m='2145860'>is</span> <span m='2146050'>important</span> <span
  m='2146450'>to</span> <span m='2146520'>think</span> <span
  m='2146730'>about</span> <span m='2146980'>is</span> <span
  m='2147640'>if</span> <span m='2147820'>you</span> <span
  m='2148070'>consider</span> <span m='2151030'>a</span> <span
  m='2151150'>given</span> <span m='2152110'>interval</span> <span
  m='2152490'>of</span> <span m='2152600'>time</span> <span
  m='2153230'>over</span> <span m='2153450'>which</span> <span
  m='2153640'>we're</span> <span m='2153850'>observing</span> <span
  m='2154810'>this</span> <span m='2155300'>Geometric</span> <span
  m='2155750'>Brownian</span> <span m='2156050'>Motion</span> <span
  m='2156370'>process,</span> <span m='2157660'>if</span> <span
  m='2157860'>we</span> <span m='2158030'>increase</span> <span
  m='2158630'>the</span> <span m='2160320'>sampling</span> <span
  m='2160920'>rate</span> <span m='2161220'>of</span> <span
  m='2161510'>prices</span> <span m='2162080'>over</span> <span
  m='2162410'>a</span> <span m='2162470'>given</span> <span
  m='2163440'>interval,</span> <span m='2164740'>how</span> <span
  m='2164920'>does</span> <span m='2165060'>that</span> <span
  m='2165280'>change</span> <span m='2166290'>the</span> <span
  m='2166410'>properties</span> <span m='2166990'>of</span> <span
  m='2167100'>our</span> <span m='2168610'>estimates?</span> <span
  m='2169400'>Basically,</span> <span m='2169700'>do</span> <span
  m='2169810'>we</span> <span m='2169990'>obtain</span> <span
  m='2170380'>more</span> <span m='2170660'>accurate</span> <span
  m='2171070'>estimates</span> <span m='2171840'>of</span> <span
  m='2172270'>the</span> <span m='2172640'>underlying</span> <span
  m='2173150'>parameters?</span> </p><p><span m='2174450'>And</span> <span
  m='2175550'>as</span> <span m='2175740'>you</span> <span
  m='2175870'>increase</span> <span m='2176350'>the</span> <span
  m='2176430'>sampling</span> <span m='2176900'>frequency,</span> <span
  m='2179420'>it</span> <span m='2179550'>turns</span> <span
  m='2179820'>out</span> <span m='2180000'>that</span> <span
  m='2180200'>some</span> <span m='2180480'>parameters</span> <span
  m='2180990'>are</span> <span m='2181120'>estimated</span> <span
  m='2181610'>much,</span> <span m='2181830'>much</span> <span
  m='2182060'>better</span> <span m='2182370'>and</span> <span
  m='2182520'>you</span> <span m='2182630'>get</span> <span
  m='2183830'>basically</span> <span m='2185070'>much</span> <span
  m='2186190'>lower</span> <span m='2186570'>standard</span> <span
  m='2187000'>errors</span> <span m='2187430'>on</span> <span
  m='2188010'>those</span> <span m='2188260'>estimates.</span> <span
  m='2188730'>With</span> <span m='2189000'>other</span> <span
  m='2189500'>parameters</span> <span m='2191010'>you</span> <span
  m='2191140'>don't</span> <span m='2191300'>necessarily.</span> <span
  m='2191900'>And</span> <span m='2192390'>the</span> <span
  m='2192470'>exercise</span> <span m='2193130'>is</span> <span
  m='2193550'>to</span> <span m='2193790'>evaluate</span> <span
  m='2194270'>that.</span> </p><p><span m='2195140'>Now</span> <span
  m='2195620'>another</span> <span m='2196040'>issue</span> <span
  m='2196450'>that's</span> <span m='2196710'>important</span> <span
  m='2197350'>is</span> <span m='2197920'>the</span> <span
  m='2198050'>issue</span> <span m='2198350'>of</span> <span m='2198960'>sort
  of</span> <span m='2199130'>what</span> <span m='2199440'>is</span> <span
  m='2199710'>the</span> <span m='2199850'>appropriate</span> <span
  m='2201040'>time</span> <span m='2201970'>scale</span> <span
  m='2202550'>for</span> <span m='2205270'>Geometric</span> <span
  m='2205840'>Brownian</span> <span m='2206180'>Motion.</span> <span
  m='2206910'>Right</span> <span m='2207090'>now</span> <span
  m='2207400'>we're</span> <span m='2207550'>thinking</span> <span
  m='2207880'>of,</span> <span m='2208240'>you</span> <span
  m='2208430'>collect</span> <span m='2208750'>data,</span> <span
  m='2210450'>whatever</span> <span m='2210850'>the</span> <span
  m='2210980'>periodicity</span> <span m='2211580'>is</span> <span
  m='2211710'>of</span> <span m='2211770'>the</span> <span
  m='2211850'>data</span> <span m='2212090'>is</span> <span
  m='2212160'>you</span> <span m='2212270'>think</span> <span
  m='2212480'>that's</span> <span m='2212740'>your</span> <span
  m='2212930'>period</span> <span m='2213360'>for</span> <span
  m='2213520'>your</span> <span m='2213650'>Brownian</span> <span
  m='2214010'>Motion.</span> <span m='2214430'>Let's</span> <span
  m='2214620'>evaluate</span> <span m='2215120'>that.</span> <span
  m='2216630'>Let</span> <span m='2216880'>me</span> <span m='2218600'>go</span>
  <span m='2218830'>to</span> <span m='2219360'>another</span> <span
  m='2221190'>example.</span> <span m='2228200'>Let's</span> <span
  m='2228510'>see</span> <span m='2228790'>here.</span> <span
  m='2233515'>Yep.</span> <span m='2235375'>OK.</span> <span
  m='2235850'>Let's</span> <span m='2235910'>go</span> <span
  m='2236190'>Control</span> <span m='2236590'>minus</span> <span
  m='2237080'>here.</span> <span m='2244830'>OK.</span> <span m='2245490'>All
  right.</span> </p><p><span m='2251026'>Let's</span> <span
  m='2251450'>see.</span> <span m='2252060'>With</span> <span
  m='2252270'>this</span> <span m='2252490'>second</span> <span
  m='2252840'>case</span> <span m='2253170'>study</span> <span
  m='2253470'>there</span> <span m='2253640'>was</span> <span
  m='2254910'>data</span> <span m='2255310'>on</span> <span
  m='2255900'>exchange</span> <span m='2256490'>rates</span> <span
  m='2258230'>looking</span> <span m='2259890'>for</span> <span
  m='2260360'>regime</span> <span m='2260720'>changes</span> <span
  m='2261200'>in</span> <span m='2261490'>exchange</span> <span
  m='2262010'>rate</span> <span m='2262510'>relationships.</span> <span
  m='2263920'>And</span> <span m='2264010'>so</span> <span m='2264210'>we</span>
  <span m='2264330'>have</span> <span m='2264570'>data</span> <span
  m='2264870'>from</span> <span m='2265130'>that</span> <span
  m='2265590'>case</span> <span m='2265840'>study</span> <span
  m='2266560'>on</span> <span m='2267210'>different</span> <span
  m='2268100'>foreign</span> <span m='2268450'>exchange</span> <span
  m='2268920'>rates.</span> <span m='2269880'>And</span> <span
  m='2270340'>here</span> <span m='2271850'>in</span> <span
  m='2271910'>the</span> <span m='2272020'>top</span> <span
  m='2272290'>panel</span> <span m='2272680'>I've</span> <span
  m='2272860'>graphed</span> <span m='2273620'>the</span> <span
  m='2275260'>euro</span> <span m='2276330'>dollar</span> <span
  m='2277390'>exchange</span> <span m='2278000'>rate</span> <span
  m='2279500'>From</span> <span m='2279960'>the</span> <span
  m='2280050'>beginning</span> <span m='2280370'>of</span> <span
  m='2280440'>1999</span> <span m='2281460'>through</span> <span
  m='2283150'>just</span> <span m='2283410'>a</span> <span
  m='2283780'>few</span> <span m='2284060'>months</span> <span
  m='2284380'>ago.</span> </p><p><span m='2285370'>And</span> <span
  m='2286800'>the</span> <span m='2286950'>second</span> <span
  m='2287390'>panel</span> <span m='2288060'>is</span> <span
  m='2288240'>a</span> <span m='2288320'>plot</span> <span m='2289510'>of</span>
  <span m='2290030'>the</span> <span m='2291600'>daily</span> <span
  m='2291920'>returns</span> <span m='2292830'>for</span> <span
  m='2292950'>that</span> <span m='2293170'>series.</span> <span
  m='2294730'>And</span> <span m='2295840'>here</span> <span
  m='2296480'>is</span> <span m='2296950'>a</span> <span
  m='2298700'>histogram</span> <span m='2299470'>of</span> <span
  m='2299700'>those</span> <span m='2300330'>daily</span> <span
  m='2300690'>returns.</span> <span m='2301860'>And</span> <span
  m='2302360'>a</span> <span m='2302510'>fit</span> <span m='2303440'>of</span>
  <span m='2304520'>the</span> <span m='2305280'>Gaussian</span> <span
  m='2305870'>distribution</span> <span m='2307140'>for</span> <span
  m='2308630'>the</span> <span m='2308740'>daily</span> <span
  m='2308990'>returns</span> <span m='2310040'>if</span> <span
  m='2310920'>our</span> <span m='2311680'>sort of</span> <span
  m='2311890'>time</span> <span m='2312260'>scale</span> <span
  m='2312660'>is</span> <span m='2312830'>correct.</span> <span
  m='2313270'>Basically</span> <span m='2313560'>daily</span> <span
  m='2313850'>returns</span> <span m='2314450'>are</span> <span
  m='2314880'>normally</span> <span m='2315270'>distributed.</span> <span
  m='2317350'>Days</span> <span m='2317690'>are</span> <span
  m='2318120'>disjoint</span> <span m='2318890'>in</span> <span
  m='2319020'>terms</span> <span m='2319280'>of</span> <span
  m='2319740'>the</span> <span m='2319820'>price</span> <span
  m='2320090'>change.</span> <span m='2321630'>And</span> <span
  m='2322880'>so</span> <span m='2323010'>they're</span> <span
  m='2323160'>independent</span> <span m='2323515'>and</span> <span
  m='2323870'>identically</span> <span m='2324340'>distributed</span> <span
  m='2325160'>under</span> <span m='2325340'>the</span> <span
  m='2325450'>model.</span> <span m='2326960'>And</span> <span
  m='2327160'>they</span> <span m='2327280'>all</span> <span
  m='2327460'>have</span> <span m='2327660'>the</span> <span
  m='2327740'>same</span> <span m='2328050'>normal</span> <span
  m='2328370'>distribution</span> <span m='2329480'>with</span> <span
  m='2329660'>mean</span> <span m='2330090'>mu</span> <span
  m='2330730'>and</span> <span m='2331230'>variance</span> <span
  m='2331610'>sigma</span> <span m='2331860'>squared.</span> <span
  m='2335220'>OK.</span> </p><p><span m='2335870'>This</span> <span
  m='2336180'>analysis</span> <span m='2338810'>assumes</span> <span
  m='2339360'>basically</span> <span m='2339650'>that</span> <span
  m='2339850'>we're</span> <span m='2340000'>dealing</span> <span
  m='2340260'>with</span> <span m='2340400'>trading</span> <span
  m='2340860'>days</span> <span m='2341230'>for</span> <span
  m='2342280'>the</span> <span m='2342430'>appropriate</span> <span
  m='2342850'>time</span> <span m='2343090'>scale,</span> <span m='2343340'>the
  Geometric</span> <span m='2343780'>Brownian</span> <span
  m='2344205'>Motion.</span> <span m='2349640'>Let's</span> <span
  m='2349910'>see.</span> <span m='2350440'>One</span> <span
  m='2350650'>can</span> <span m='2350850'>ask,</span> <span
  m='2351400'>well,</span> <span m='2351780'>what</span> <span
  m='2352130'>if</span> <span m='2354620'>trading</span> <span
  m='2354950'>dates</span> <span m='2355140'>really</span> <span
  m='2355300'>isn't</span> <span m='2355470'>the</span> <span
  m='2355520'>right</span> <span m='2355690'>time</span> <span
  m='2355930'>scale,</span> <span m='2356270'>but</span> <span
  m='2356380'>it's</span> <span m='2356520'>more</span> <span
  m='2356720'>calendar</span> <span m='2357290'>time.</span> <span
  m='2359240'>The</span> <span m='2359670'>change</span> <span
  m='2360020'>in</span> <span m='2360130'>value</span> <span
  m='2360550'>over</span> <span m='2360770'>the</span> <span
  m='2360900'>weekends</span> <span m='2362060'>maybe</span> <span
  m='2363520'>correspond</span> <span m='2364080'>to</span> <span
  m='2364150'>price</span> <span m='2364430'>changes,</span> <span
  m='2365160'>or</span> <span m='2365280'>value</span> <span
  m='2365600'>changes</span> <span m='2366050'>over</span> <span
  m='2366290'>a</span> <span m='2366340'>longer</span> <span
  m='2366750'>period</span> <span m='2367070'>of</span> <span
  m='2367170'>time.</span> <span m='2368150'>And</span> <span
  m='2369780'>so</span> <span m='2369930'>this</span> <span
  m='2370060'>model</span> <span m='2370390'>really</span> <span
  m='2370600'>needs</span> <span m='2370800'>to</span> <span
  m='2370890'>be</span> <span m='2370980'>adjusted</span> <span
  m='2371400'>for</span> <span m='2372010'>that</span> <span
  m='2372520'>time</span> <span m='2372830'>scale.</span> </p><p><span
  m='2375270'>The</span> <span m='2376280'>exercise</span> <span
  m='2380050'>that</span> <span m='2380340'>allows</span> <span
  m='2380630'>you</span> <span m='2380710'>to</span> <span
  m='2380760'>consider</span> <span m='2381190'>different</span> <span
  m='2381780'>delta</span> <span m='2382120'>t's</span> <span
  m='2384060'>shows</span> <span m='2384390'>you</span> <span
  m='2384520'>what</span> <span m='2384770'>the</span> <span
  m='2384840'>maximum</span> <span m='2385300'>likelihood</span> <span
  m='2385660'>estimates.</span> <span m='2386490'>You'll</span> <span
  m='2386670'>be</span> <span m='2386820'>driving</span> <span
  m='2387210'>maximum</span> <span m='2387520'>likely</span> <span
  m='2387790'>estimates</span> <span m='2388230'>if</span> <span
  m='2388350'>we</span> <span m='2388420'>have</span> <span
  m='2388610'>different</span> <span m='2388990'>definitions</span> <span
  m='2389470'>of</span> <span m='2389580'>timescale</span> <span
  m='2390180'>there.</span> <span m='2392180'>But</span> <span
  m='2392890'>if</span> <span m='2393100'>you</span> <span
  m='2393790'>apply</span> <span m='2397630'>the</span> <span
  m='2397770'>calendar</span> <span m='2398270'>time</span> <span
  m='2398620'>scale</span> <span m='2399990'>to</span> <span
  m='2400330'>this</span> <span m='2401620'>euro,</span> <span
  m='2403140'>let</span> <span m='2403260'>me</span> <span
  m='2403350'>just</span> <span m='2403500'>show</span> <span
  m='2403680'>you</span> <span m='2403810'>what</span> <span
  m='2404010'>the</span> <span m='2404090'>different</span> <span
  m='2404350'>estimates</span> <span m='2404830'>are</span> <span m='2405200'>of
  the</span> <span m='2406550'>annualized</span> <span m='2407090'>mean</span>
  <span m='2407280'>return</span> <span m='2407660'>and the</span> <span
  m='2407790'>annualized</span> <span m='2408350'>volatility.</span>
  </p><p><span m='2409590'>So</span> <span m='2409800'>if</span> <span
  m='2409870'>we</span> <span m='2409950'>consider</span> <span
  m='2410280'>trading</span> <span m='2410680'>days</span> <span
  m='2411390'>for</span> <span m='2411500'>euro</span> <span
  m='2411830'>it's</span> <span m='2412200'>10.25%</span> <span
  m='2413580'>or</span> <span m='2414270'>0.1025.</span> <span
  m='2416030'>If</span> <span m='2416150'>you</span> <span
  m='2416220'>consider</span> <span m='2417180'>clock</span> <span
  m='2417550'>time,</span> <span m='2418680'>it</span> <span
  m='2418900'>actually</span> <span m='2419770'>turns out</span> <span
  m='2419870'>to</span> <span m='2420130'>be</span> <span
  m='2420290'>12.2%.</span> <span m='2422390'>So</span> <span
  m='2422920'>depending</span> <span m='2423500'>on</span> <span
  m='2423980'>how</span> <span m='2424130'>you</span> <span
  m='2424240'>specify</span> <span m='2424660'>the</span> <span
  m='2424760'>model</span> <span m='2425070'>you</span> <span
  m='2425410'>get</span> <span m='2425620'>a</span> <span
  m='2425710'>different</span> <span m='2426060'>definition</span> <span
  m='2426650'>of</span> <span m='2426760'>volatility</span> <span
  m='2427400'>here.</span> <span m='2428640'>And</span> <span
  m='2430280'>it's</span> <span m='2431800'>important</span> <span
  m='2432570'>to</span> <span m='2434580'>basically</span> <span
  m='2435330'>understand</span> <span m='2436170'>sort</span> <span
  m='2436340'>of</span> <span m='2436430'>what</span> <span
  m='2436700'>the</span> <span m='2439150'>assumptions</span> <span
  m='2439750'>are</span> <span m='2439940'>of</span> <span
  m='2440000'>your</span> <span m='2440100'>model</span> <span
  m='2440650'>and</span> <span m='2440900'>whether</span> <span
  m='2442320'>perhaps</span> <span m='2443710'>things</span> <span
  m='2444000'>ought</span> <span m='2444430'>to</span> <span
  m='2444560'>be</span> <span m='2444880'>different.</span> </p><p><span
  m='2447480'>In</span> <span m='2449300'>stochastic</span> <span
  m='2450040'>modeling,</span> <span m='2451040'>there's</span> <span
  m='2451370'>an</span> <span m='2451560'>area</span> <span
  m='2453700'>called</span> <span m='2454060'>subordinated</span> <span
  m='2454960'>stochastic</span> <span m='2455600'>processes.</span> <span
  m='2457030'>And</span> <span m='2458970'>basically</span> <span
  m='2459320'>the</span> <span m='2459470'>idea</span> <span
  m='2459860'>is</span> <span m='2461400'>if</span> <span m='2461580'>you</span>
  <span m='2462130'>have</span> <span m='2462570'>a</span> <span
  m='2462760'>stochastic</span> <span m='2463250'>process</span> <span
  m='2464220'>like</span> <span m='2464430'>Geometric</span> <span
  m='2465610'>Brownian</span> <span m='2465930'>Motion</span> <span
  m='2466190'>of</span> <span m='2466290'>simple</span> <span
  m='2466560'>Brownian</span> <span m='2466950'>motion,</span> <span
  m='2468770'>maybe</span> <span m='2469260'>you're</span> <span
  m='2469480'>observing</span> <span m='2469940'>that</span> <span
  m='2470240'>on</span> <span m='2472170'>the</span> <span
  m='2472310'>wrong</span> <span m='2472600'>time</span> <span
  m='2472900'>scale.</span> <span m='2474080'>You</span> <span
  m='2474260'>may</span> <span m='2474410'>fit</span> <span m='2474720'>the
  Geometric</span> <span m='2475210'>Brownian</span> <span
  m='2475515'>Motion</span> <span m='2475820'>model and it</span> <span
  m='2476250'>doesn't</span> <span m='2476500'>look</span> <span
  m='2476690'>right.</span> <span m='2477560'>But</span> <span
  m='2477870'>it</span> <span m='2478020'>could</span> <span
  m='2478180'>be</span> <span m='2478350'>that</span> <span
  m='2478970'>there's</span> <span m='2479150'>a</span> <span
  m='2479210'>different</span> <span m='2479490'>time</span> <span
  m='2479740'>scale</span> <span m='2480080'>that's</span> <span
  m='2480250'>appropriate.</span> <span m='2481180'>And</span> <span
  m='2481330'>it's</span> <span m='2481450'>really</span> <span
  m='2482330'>Brownian</span> <span m='2482630'>Motion</span> <span
  m='2482970'>on</span> <span m='2483350'>that</span> <span
  m='2483980'>time</span> <span m='2484180'>scale.</span> </p><p><span
  m='2484990'>And</span> <span m='2485240'>so</span> <span
  m='2487440'>formally</span> <span m='2488050'>it's</span> <span
  m='2488220'>called</span> <span m='2488450'>a</span> <span
  m='2488530'>subordinated</span> <span m='2489290'>stochastic</span> <span
  m='2489900'>process.</span> <span m='2490330'>You</span> <span
  m='2490430'>have</span> <span m='2490580'>a</span> <span
  m='2490640'>different</span> <span m='2490980'>time</span> <span
  m='2491310'>function</span> <span m='2492160'>for</span> <span
  m='2492840'>how</span> <span m='2493150'>to</span> <span
  m='2493600'>model</span> <span m='2494220'>the</span> <span
  m='2494750'>stochastic</span> <span m='2495420'>process.</span> <span
  m='2495970'>And</span> <span m='2498790'>the</span> <span
  m='2498970'>evaluation</span> <span m='2499245'>of</span> <span
  m='2499520'>subordinating</span> <span m='2499860'>a</span> <span
  m='2500100'>stochastic</span> <span m='2500460'>a</span> <span
  m='2500530'>process</span> <span m='2501130'>leads</span> <span
  m='2501500'>to</span> <span m='2501690'>consideration</span> <span
  m='2502310'>of</span> <span m='2502360'>different</span> <span
  m='2502700'>time</span> <span m='2502970'>scales.</span> <span
  m='2503750'>With,</span> <span m='2504690'>say,</span> <span
  m='2504950'>equity</span> <span m='2505330'>markets,</span> <span
  m='2507100'>in</span> <span m='2507290'>futures</span> <span
  m='2507710'>markets</span> <span m='2508320'>sort of</span> <span
  m='2508490'>the</span> <span m='2508610'>volume</span> <span
  m='2509040'>of</span> <span m='2509140'>trading,</span> <span
  m='2510360'>sort</span> <span m='2510510'>of</span> <span
  m='2510660'>cumulative</span> <span m='2510760'>volume</span> <span
  m='2511180'>of</span> <span m='2511280'>training</span> <span
  m='2511550'>might</span> <span m='2511770'>be a</span> <span
  m='2511900'>really</span> <span m='2512120'>inappropriate</span> <span
  m='2512730'>measure</span> <span m='2513070'>of</span> <span
  m='2513250'>the</span> <span m='2513360'>real</span> <span
  m='2513630'>time</span> <span m='2513910'>scale.</span> <span
  m='2514880'>Because that's a</span> <span m='2514960'>measure</span> <span
  m='2515310'>of,</span> <span m='2515620'>in a sense,</span> <span
  m='2516820'>information</span> <span m='2517440'>flow</span> <span
  m='2517670'>coming</span> <span m='2518040'>into</span> <span
  m='2518280'>the</span> <span m='2518350'>market</span> <span
  m='2519000'>through</span> <span m='2519500'>the</span> <span
  m='2519620'>level</span> <span m='2519870'>of</span> <span
  m='2519950'>activity.</span> </p><p><span m='2521870'>So</span> <span
  m='2522030'>anyway</span> <span m='2522800'>I</span> <span
  m='2522890'>wanted</span> <span m='2523100'>to</span> <span
  m='2523140'>highlight</span> <span m='2523600'>how</span> <span
  m='2524670'>with</span> <span m='2525020'>different</span> <span
  m='2526020'>time</span> <span m='2526320'>scales</span> <span
  m='2526720'>you</span> <span m='2526840'>can</span> <span
  m='2526930'>get</span> <span m='2527140'>different</span> <span
  m='2527420'>results.</span> <span m='2528320'>And</span> <span
  m='2529530'>so</span> <span m='2529670'>that's</span> <span
  m='2529960'>something</span> <span m='2530380'>to</span> <span
  m='2530440'>be</span> <span m='2530580'>evaluated.</span> <span
  m='2531660'>In</span> <span m='2531820'>looking</span> <span
  m='2532130'>at</span> <span m='2532490'>these</span> <span
  m='2532910'>different</span> <span m='2533180'>models,</span> <span
  m='2533620'>OK,</span> <span m='2533840'>these</span> <span
  m='2534200'>first</span> <span m='2534520'>few</span> <span
  m='2534670'>graphs</span> <span m='2535020'>here</span> <span
  m='2535190'>show</span> <span m='2535420'>the</span> <span
  m='2535530'>fit</span> <span m='2535770'>of</span> <span
  m='2535880'>the</span> <span m='2535950'>normal</span> <span
  m='2536260'>model</span> <span m='2536530'>with</span> <span
  m='2536700'>the</span> <span m='2536800'>trading</span> <span
  m='2538030'>day</span> <span m='2538310'>time</span> <span
  m='2538620'>scale.</span> <span m='2542400'>Let's</span> <span
  m='2542560'>see.</span> <span m='2543140'>Those</span> <span m='2543330'>of
  you</span> <span m='2543610'>who've ever</span> <span m='2543840'>taken</span>
  <span m='2544040'>a statistics</span> <span m='2544460'>class</span> <span
  m='2544770'>before,</span> <span m='2545340'>or an</span> <span
  m='2545660'>applied</span> <span m='2545990'>statistics,</span> <span
  m='2546420'>may</span> <span m='2546590'>know</span> <span
  m='2546750'>about</span> <span m='2547040'>normal</span> <span
  m='2547600'>q-q</span> <span m='2548050'>plots.</span> </p><p><span
  m='2549780'>Basically</span> <span m='2553050'>if</span> <span
  m='2553170'>you</span> <span m='2553210'>want</span> <span
  m='2553340'>to</span> <span m='2553380'>evaluate</span> <span
  m='2553830'>the</span> <span m='2553910'>consistency</span> <span
  m='2555270'>of</span> <span m='2555840'>the</span> <span
  m='2557090'>returns</span> <span m='2557740'>here</span> <span
  m='2557960'>with</span> <span m='2558600'>a</span> <span
  m='2559030'>Gaussian</span> <span m='2559510'>distribution,</span> <span
  m='2560800'>what</span> <span m='2560980'>we</span> <span
  m='2561090'>can</span> <span m='2561290'>do</span> <span m='2561620'>is</span>
  <span m='2563260'>plot</span> <span m='2564330'>the</span> <span
  m='2564920'>observed</span> <span m='2566540'>ordered</span> <span
  m='2567230'>sorted</span> <span m='2568240'>returns</span> <span
  m='2569410'>against</span> <span m='2569870'>what</span> <span
  m='2570010'>we</span> <span m='2570130'>would</span> <span
  m='2570260'>expect</span> <span m='2571480'>the</span> <span
  m='2571840'>sorted</span> <span m='2572290'>returns</span> <span
  m='2572790'>to</span> <span m='2572900'>be</span> <span m='2573160'>if</span>
  <span m='2573290'>it</span> <span m='2573350'>were</span> <span
  m='2573530'>from</span> <span m='2573790'>a</span> <span
  m='2573870'>Gaussian</span> <span m='2574860'>sample.</span> <span
  m='2576200'>So</span> <span m='2576810'>under</span> <span
  m='2577030'>the</span> <span m='2577120'>Geometric</span> <span
  m='2577560'>Brownian</span> <span m='2577830'>Motion</span> <span
  m='2578160'>model</span> <span m='2578940'>the</span> <span
  m='2579040'>daily</span> <span m='2579310'>returns</span> <span
  m='2580710'>are</span> <span m='2582610'>a</span> <span
  m='2582710'>sample</span> <span m='2583350'>independent</span> <span
  m='2583970'>and</span> <span m='2584250'>identically</span> <span
  m='2584530'>distributed</span> <span m='2584920'>random</span> <span
  m='2585330'>variable</span> <span m='2585570'>sample</span> <span
  m='2585960'>from</span> <span m='2586280'>a</span> <span
  m='2586340'>Gaussian</span> <span m='2586740'>distribution.</span>
  </p><p><span m='2587750'>So</span> <span m='2588660'>the</span> <span
  m='2588760'>smallest</span> <span m='2589310'>return</span> <span
  m='2589670'>should</span> <span m='2589870'>be</span> <span
  m='2589980'>consistent</span> <span m='2590540'>with</span> <span
  m='2590860'>the</span> <span m='2590960'>smallest</span> <span
  m='2591510'>of</span> <span m='2591560'>the</span> <span
  m='2591650'>sample</span> <span m='2592080'>size</span> <span
  m='2592460'>n.</span> <span m='2594080'>And</span> <span
  m='2594810'>what's</span> <span m='2595260'>being</span> <span
  m='2595520'>plotted</span> <span m='2596310'>here</span> <span
  m='2596660'>is</span> <span m='2596980'>the</span> <span
  m='2597100'>theoretical</span> <span m='2598300'>quantiles</span> <span
  m='2598870'>or</span> <span m='2599310'>percentiles</span> <span
  m='2599920'>versus</span> <span m='2600340'>the</span> <span
  m='2600840'>actual</span> <span m='2601290'>ones.</span> <span
  m='2601980'>And</span> <span m='2602160'>one</span> <span
  m='2602270'>would</span> <span m='2602390'>expect</span> <span
  m='2602830'>that</span> <span m='2603110'>to</span> <span
  m='2603250'>lie</span> <span m='2603430'>along</span> <span
  m='2603720'>a</span> <span m='2603780'>straight</span> <span
  m='2604110'>line</span> <span m='2604930'>if</span> <span
  m='2605570'>the</span> <span m='2605690'>theoretical</span> <span
  m='2606220'>quantiles</span> <span m='2607250'>were</span> <span
  m='2609040'>well-predicting</span> <span m='2610100'>the</span> <span
  m='2610330'>actual</span> <span m='2611380'>extreme</span> <span
  m='2611720'>values.</span> </p><p><span m='2612670'>What</span> <span
  m='2613120'>we</span> <span m='2613310'>see</span> <span
  m='2613530'>here</span> <span m='2613780'>is</span> <span
  m='2613890'>that</span> <span m='2614420'>as</span> <span
  m='2614680'>you</span> <span m='2614760'>the</span> <span
  m='2614910'>theoretical</span> <span m='2615360'>quantiles</span> <span
  m='2615880'>get</span> <span m='2616880'>high</span> <span
  m='2617760'>and</span> <span m='2617980'>it's</span> <span
  m='2618140'>in</span> <span m='2618290'>units</span> <span
  m='2618640'>of</span> <span m='2618730'>standard</span> <span
  m='2619130'>deviation</span> <span m='2619640'>units,</span> <span
  m='2620990'>the</span> <span m='2621210'>realized</span> <span
  m='2622430'>sample</span> <span m='2623750'>returns</span> <span
  m='2624550'>are</span> <span m='2624710'>in</span> <span
  m='2624800'>fact</span> <span m='2625080'>much</span> <span
  m='2625310'>higher</span> <span m='2625940'>than</span> <span
  m='2626100'>would</span> <span m='2626250'>be</span> <span
  m='2626400'>predicted</span> <span m='2626840'>by</span> <span m='2626990'>the
  Gaussian</span> <span m='2627540'>distribution.</span> <span
  m='2629210'>And</span> <span m='2629430'>similarly,</span> <span
  m='2630000'>on</span> <span m='2630160'>the</span> <span
  m='2630240'>low</span> <span m='2630590'>end side.</span> <span
  m='2632400'>So</span> <span m='2632810'>there's</span> <span
  m='2633070'>a</span> <span m='2633340'>normal</span> <span
  m='2633690'>q-q</span> <span m='2634070'>plot</span> <span
  m='2634360'>that's</span> <span m='2634550'>used</span> <span
  m='2634900'>often</span> <span m='2635260'>in the</span> <span
  m='2635350'>diagnostics</span> <span m='2636090'>of</span> <span
  m='2636210'>these</span> <span m='2636910'>models.</span> </p><p><span
  m='2637800'>Then</span> <span m='2638300'>down</span> <span
  m='2638580'>here</span> <span m='2639440'>I've</span> <span
  m='2639790'>actually</span> <span m='2641210'>plotted</span> <span
  m='2641830'>a</span> <span m='2642950'>fitted</span> <span
  m='2643690'>percentile</span> <span m='2644910'>distribution.</span> <span
  m='2646160'>Now</span> <span m='2647260'>what's</span> <span
  m='2647540'>been</span> <span m='2647710'>done</span> <span
  m='2647920'>here</span> <span m='2648490'>is</span> <span
  m='2650260'>if</span> <span m='2650460'>we</span> <span
  m='2651160'>modeled</span> <span m='2651790'>the</span> <span
  m='2651990'>series</span> <span m='2652470'>as</span> <span
  m='2653620'>a</span> <span m='2653700'>series</span> <span
  m='2654090'>of</span> <span m='2654810'>Gaussian</span> <span
  m='2655270'>random</span> <span m='2655610'>variables</span> <span
  m='2656790'>then</span> <span m='2661770'>we</span> <span
  m='2661940'>can</span> <span m='2662070'>evaluate</span> <span
  m='2663250'>the</span> <span m='2663380'>percentile</span> <span
  m='2664960'>of</span> <span m='2665270'>the</span> <span
  m='2665580'>fitted</span> <span m='2665980'>Gaussian</span> <span
  m='2666440'>distribution</span> <span m='2667000'>that</span> <span
  m='2667130'>was</span> <span m='2667290'>realized</span> <span
  m='2667850'>by</span> <span m='2667980'>every</span> <span
  m='2668290'>point.</span> <span m='2669430'>So</span> <span
  m='2670220'>if</span> <span m='2670510'>we</span> <span
  m='2670620'>have</span> <span m='2670810'>a</span> <span
  m='2670920'>return</span> <span m='2671610'>of</span> <span
  m='2672810'>say</span> <span m='2673930'>negative</span> <span
  m='2674530'>2%,</span> <span m='2677540'>what</span> <span
  m='2678010'>percentile</span> <span m='2678780'>is</span> <span
  m='2679020'>the</span> <span m='2679270'>normal</span> <span
  m='2679680'>fit</span> <span m='2679850'>of</span> <span
  m='2680170'>that?</span> <span m='2685720'>And</span> <span
  m='2685990'>you</span> <span m='2686070'>can</span> <span
  m='2686190'>evaluate</span> <span m='2687130'>the</span> <span
  m='2689500'>cumulative</span> <span m='2689840'>distribution</span> <span
  m='2690410'>function</span> <span m='2690780'>of</span> <span
  m='2691060'>the</span> <span m='2691340'>fitted</span> <span
  m='2691690'>model</span> <span m='2692140'>at</span> <span
  m='2692350'>that</span> <span m='2692610'>value</span> <span
  m='2692920'>to</span> <span m='2693030'>get</span> <span
  m='2693220'>that</span> <span m='2693780'>point.</span> </p><p><span
  m='2694750'>And</span> <span m='2696390'>what</span> <span
  m='2696640'>should</span> <span m='2697180'>the</span> <span
  m='2697680'>distribution</span> <span m='2698270'>of</span> <span
  m='2698370'>percentiles</span> <span m='2699100'>be</span> <span
  m='2699800'>for</span> <span m='2700200'>fitted</span> <span
  m='2700600'>percentiles</span> <span m='2701070'>if</span> <span
  m='2701200'>we</span> <span m='2701280'>have</span> <span m='2701460'>a</span>
  <span m='2701540'>really</span> <span m='2701750'>good</span> <span
  m='2701990'>model?</span> <span m='2704410'>OK.</span> <span
  m='2707370'>Well,</span> <span m='2707950'>OK.</span> <span
  m='2708180'>Let's</span> <span m='2708560'>think.</span> <span
  m='2709860'>If</span> <span m='2710000'>you</span> <span
  m='2710110'>consider</span> <span m='2710440'>the</span> <span
  m='2710560'>50th</span> <span m='2711040'>percentile</span> <span
  m='2713840'>you</span> <span m='2714010'>would</span> <span
  m='2714120'>expect,</span> <span m='2714890'>I</span> <span
  m='2715030'>guess,</span> <span m='2716620'>50%</span> <span m='2717190'>of
  the</span> <span m='2717310'>data to</span> <span m='2717590'>lie</span> <span
  m='2717830'>above</span> <span m='2718090'>the</span> <span
  m='2718160'>50th</span> <span m='2718550'>percentile and</span> <span
  m='2719050'>50%</span> <span m='2719550'>to lie</span> <span
  m='2719720'>below</span> <span m='2720040'>the</span> <span
  m='2720110'>50th</span> <span m='2720500'>percentile,</span> <span
  m='2721060'>right?</span> <span m='2721930'>OK.</span> <span
  m='2722530'>Let's</span> <span m='2722740'>consider,</span> <span
  m='2723490'>here</span> <span m='2723670'>I</span> <span
  m='2723710'>divided</span> <span m='2724140'>up into</span> <span
  m='2724180'>100</span> <span m='2726270'>bins</span> <span
  m='2727040'>between</span> <span m='2727350'>zero</span> <span
  m='2727550'>and</span> <span m='2727640'>one</span> <span
  m='2727840'>so</span> <span m='2728750'>this</span> <span
  m='2728990'>bin</span> <span m='2729290'>is</span> <span
  m='2729540'>the</span> <span m='2729710'>99th</span> <span
  m='2731550'>percentile.</span> <span m='2738630'>How</span> <span
  m='2738920'>many</span> <span m='2739190'>observations</span> <span
  m='2739810'>would</span> <span m='2739940'>you</span> <span
  m='2740030'>expect</span> <span m='2740460'>to</span> <span
  m='2740550'>find</span> <span m='2741130'>in</span> <span
  m='2743800'>between</span> <span m='2744090'>the</span> <span
  m='2744160'>99th</span> <span m='2744410'>and</span> <span
  m='2744680'>100</span> <span m='2745170'>percentile?</span> <span
  m='2749800'>This</span> <span m='2749980'>is</span> <span
  m='2750140'>an</span> <span m='2750460'>easy</span> <span
  m='2750710'>question.</span> </p><p><span m='2751170'>AUDIENCE: 1%.</span>
  </p><p><span m='2752150'>PROFESSOR: 1%.</span> <span m='2753070'>Right.</span>
  <span m='2753790'>And</span> <span m='2753950'>so</span> <span
  m='2754050'>in</span> <span m='2754170'>any</span> <span m='2754360'>of</span>
  <span m='2754400'>these</span> <span m='2754550'>bins</span> <span
  m='2754780'>we</span> <span m='2754920'>would</span> <span
  m='2755010'>expect</span> <span m='2755420'>to</span> <span
  m='2755500'>see</span> <span m='2755700'>1%</span> <span m='2758810'>if</span>
  <span m='2759090'>the</span> <span m='2759190'>Gaussian</span> <span
  m='2760110'>model</span> <span m='2760390'>were</span> <span
  m='2760670'>fitting.</span> <span m='2761450'>And</span> <span
  m='2762400'>what</span> <span m='2762620'>we</span> <span
  m='2762770'>see</span> <span m='2763280'>is</span> <span
  m='2763470'>that,</span> <span m='2764170'>well,</span> <span
  m='2764390'>at</span> <span m='2764580'>the</span> <span
  m='2764700'>extremes</span> <span m='2766690'>they're</span> <span
  m='2766880'>more</span> <span m='2767110'>extreme</span> <span
  m='2767470'>values.</span> <span m='2768600'>And</span> <span
  m='2768830'>actually</span> <span m='2769270'>inside</span> <span
  m='2770190'>there</span> <span m='2770450'>are</span> <span
  m='2770510'>some</span> <span m='2772600'>fewer</span> <span
  m='2772930'>values.</span> <span m='2773720'>And</span> <span
  m='2773880'>actually</span> <span m='2774060'>this</span> <span
  m='2774270'>is</span> <span m='2774740'>exhibiting</span> <span
  m='2775440'>a</span> <span m='2775570'>Leptokurtic</span> <span
  m='2776390'>distribution</span> <span m='2777660'>for</span> <span
  m='2778200'>the</span> <span m='2778570'>actually</span> <span
  m='2779380'>realized</span> <span m='2779610'>samples,</span> <span
  m='2780070'>basically</span> <span m='2780990'>the</span> <span
  m='2781090'>middle</span> <span m='2781330'>of</span> <span
  m='2781420'>the</span> <span m='2781510'>distribution</span> <span
  m='2782080'>is</span> <span m='2782190'>a</span> <span
  m='2782250'>little</span> <span m='2782460'>thinner</span> <span
  m='2782920'>and</span> <span m='2783160'>it's</span> <span
  m='2783830'>compensated</span> <span m='2784280'>for</span> <span
  m='2784450'>by</span> <span m='2784840'>fatter</span> <span
  m='2785200'>tails.</span> </p><p><span m='2786660'>But</span> <span
  m='2788370'>with</span> <span m='2788530'>this</span> <span
  m='2788680'>particular</span> <span m='2789060'>model</span> <span
  m='2789310'>we</span> <span m='2789440'>can</span> <span
  m='2789870'>basically</span> <span m='2790590'>expect</span> <span
  m='2791120'>to</span> <span m='2791200'>see</span> <span m='2792560'>a</span>
  <span m='2792660'>uniform</span> <span m='2793170'>distribution</span> <span
  m='2793900'>of</span> <span m='2794070'>percentiles</span> <span
  m='2796054'>in</span> <span m='2796516'>this</span> <span
  m='2796980'>graph.</span> <span m='2799690'>If</span> <span
  m='2799890'>we</span> <span m='2800500'>compare</span> <span
  m='2800970'>this</span> <span m='2801260'>with</span> <span
  m='2801480'>a</span> <span m='2801540'>fit</span> <span m='2802864'>of</span>
  <span m='2805040'>the</span> <span m='2805610'>clock</span> <span
  m='2805990'>time</span> <span m='2806990'>we</span> <span
  m='2807150'>actually</span> <span m='2810190'>see</span> <span
  m='2810470'>that</span> <span m='2810720'>clock</span> <span
  m='2811150'>time</span> <span m='2811510'>does</span> <span
  m='2811770'>a</span> <span m='2811830'>bit</span> <span m='2812170'>of</span>
  <span m='2812360'>a</span> <span m='2812450'>better</span> <span
  m='2812830'>job</span> <span m='2814000'>at</span> <span
  m='2814380'>getting</span> <span m='2814810'>the</span> <span
  m='2815640'>extreme</span> <span m='2818380'>values</span> <span
  m='2819030'>closer</span> <span m='2819490'>to</span> <span
  m='2819600'>what</span> <span m='2819780'>we would</span> <span
  m='2819980'>expect</span> <span m='2820480'>them</span> <span
  m='2820640'>to</span> <span m='2820760'>be.</span> <span m='2821110'>So</span>
  <span m='2821780'>in</span> <span m='2821930'>terms</span> <span
  m='2822220'>of</span> <span m='2822370'>being</span> <span
  m='2822670'>a</span> <span m='2822730'>better</span> <span
  m='2823010'>model</span> <span m='2823460'>for</span> <span
  m='2825020'>the</span> <span m='2826350'>returns</span> <span
  m='2826970'>process,</span> <span m='2827550'>if</span> <span
  m='2827690'>we're</span> <span m='2827800'>concerned</span> <span
  m='2828230'>with</span> <span m='2828430'>these</span> <span
  m='2828610'>extreme</span> <span m='2829000'>values,</span> <span
  m='2829380'>we're</span> <span m='2829490'>actually</span> <span
  m='2829700'>getting</span> <span m='2829900'>a</span> <span
  m='2829960'>slightly</span> <span m='2830290'>better</span> <span
  m='2830560'>value</span> <span m='2832320'>with</span> <span
  m='2832590'>those.</span> </p><p><span m='2833720'>So</span> <span
  m='2835370'>all</span> <span m='2835480'>right.</span> <span
  m='2836590'>Let's</span> <span m='2836840'>move</span> <span
  m='2837090'>on</span> <span m='2838560'>back</span> <span
  m='2838830'>to</span> <span m='2838940'>the</span> <span
  m='2839080'>notes.</span> <span m='2840890'>And</span> <span
  m='2841200'>talk</span> <span m='2841490'>about</span> <span
  m='2846890'>the</span> <span m='2847000'>Garman-Klass</span> <span
  m='2847850'>Estimator.</span> <span m='2848410'>So</span> <span
  m='2848800'>let me</span> <span m='2850126'>do</span> <span
  m='2850570'>this.</span> <span m='2854625'>All right.</span> <span
  m='2856080'>View</span> <span m='2856280'>full</span> <span
  m='2856630'>screen.</span> <span m='2863040'>OK.</span> <span m='2865334'>All
  right.</span> <span m='2866120'>So,</span> <span m='2867910'>OK.</span>
  </p><p><span m='2868090'>The</span> <span m='2868200'>Garman-Klass</span>
  <span m='2869120'>Estimator</span> <span m='2870510'>is</span> <span
  m='2870680'>one</span> <span m='2870990'>where</span> <span
  m='2872230'>we</span> <span m='2872800'>consider</span> <span
  m='2874360'>the</span> <span m='2874490'>situation</span> <span
  m='2874970'>where</span> <span m='2875090'>we</span> <span
  m='2875200'>actually</span> <span m='2875410'>have</span> <span
  m='2875620'>much</span> <span m='2876350'>more</span> <span
  m='2876660'>information</span> <span m='2877850'>than</span> <span
  m='2878210'>simply</span> <span m='2878810'>sort of</span> <span
  m='2879000'>closing</span> <span m='2879410'>prices</span> <span
  m='2879830'>at</span> <span m='2879920'>different</span> <span
  m='2880180'>intervals.</span> <span m='2881980'>Basically</span> <span
  m='2884310'>all</span> <span m='2884540'>transaction</span> <span
  m='2885140'>data's</span> <span m='2885410'>collected</span> <span
  m='2885830'>in a financial market.</span> <span m='2886290'>So</span> <span
  m='2886520'>really</span> <span m='2886840'>we</span> <span
  m='2886980'>have</span> <span m='2887300'>virtually</span> <span
  m='2887630'>all</span> <span m='2887810'>of the</span> <span
  m='2887880'>data</span> <span m='2888150'>available</span> <span
  m='2888425'>if</span> <span m='2888700'>we</span> <span m='2888820'>want
  it,</span> <span m='2889290'>or</span> <span m='2889780'>can</span> <span
  m='2889860'>pay</span> <span m='2890060'>for</span> <span
  m='2890310'>it.</span> <span m='2891280'>But</span> <span
  m='2892720'>let's</span> <span m='2892940'>consider</span> <span
  m='2893480'>a</span> <span m='2893570'>case</span> <span
  m='2893890'>where</span> <span m='2894140'>we</span> <span
  m='2894270'>expand</span> <span m='2894740'>upon</span> <span
  m='2894970'>just</span> <span m='2895220'>having</span> <span
  m='2895450'>closing</span> <span m='2895940'>prices</span> <span
  m='2897050'>to</span> <span m='2897150'>having</span> <span
  m='2898300'>additional</span> <span m='2898740'>information</span> <span
  m='2899800'>over</span> <span m='2900560'>increments</span> <span
  m='2901050'>of</span> <span m='2901160'>time</span> <span
  m='2902060'>that</span> <span m='2902190'>include</span> <span
  m='2903270'>the</span> <span m='2904610'>open,</span> <span
  m='2905480'>high,</span> <span m='2905990'>and</span> <span
  m='2906180'>low</span> <span m='2906840'>price</span> <span
  m='2907410'>over</span> <span m='2907690'>the</span> <span
  m='2907810'>different</span> <span m='2908090'>periods.</span> </p><p><span
  m='2913500'>So</span> <span m='2914380'>those</span> <span
  m='2914630'>of</span> <span m='2914700'>you</span> <span
  m='2914790'>who</span> <span m='2914890'>are</span> <span
  m='2914990'>familiar</span> <span m='2915120'>with</span> <span
  m='2915230'>bar</span> <span m='2915570'>data</span> <span
  m='2915940'>graphs</span> <span m='2916480'>that</span> <span
  m='2916600'>you</span> <span m='2916720'>see</span> <span
  m='2916990'>whenever</span> <span m='2917100'>you</span> <span
  m='2917310'>plot</span> <span m='2919200'>stock</span> <span
  m='2919550'>prices</span> <span m='2920000'>over</span> <span
  m='2920600'>periods</span> <span m='2921000'>of</span> <span
  m='2922360'>weeks</span> <span m='2923710'>or</span> <span
  m='2923870'>months</span> <span m='2924940'>you'll</span> <span
  m='2925060'>be</span> <span m='2925180'>familiar</span> <span
  m='2925550'>with</span> <span m='2926560'>having</span> <span
  m='2926870'>seen</span> <span m='2927210'>those.</span> <span m='2928610'>Now
  the</span> <span m='2928800'>Garman-Klass</span> <span
  m='2930720'>paper</span> <span m='2931590'>addressed</span> <span
  m='2932550'>how</span> <span m='2933020'>can we</span> <span
  m='2933110'>exploit</span> <span m='2933560'>this</span> <span
  m='2933730'>additional</span> <span m='2934100'>information</span> <span
  m='2934730'>to</span> <span m='2936090'>improve</span> <span
  m='2936420'>upon</span> <span m='2936730'>our</span> <span
  m='2936890'>estimates</span> <span m='2938372'>of</span> <span
  m='2938820'>the</span> <span m='2938990'>close</span> <span
  m='2939310'>to</span> <span m='2939400'>close.</span> <span
  m='2940290'>And</span> <span m='2940480'>so</span> <span
  m='2941880'>we'll</span> <span m='2942060'>just</span> <span
  m='2942320'>use</span> <span m='2942520'>this</span> <span
  m='2942750'>notation.</span> <span m='2943600'>Well,</span> <span
  m='2943910'>let's</span> <span m='2944130'>make</span> <span
  m='2944330'>some</span> <span m='2944440'>assumptions</span> <span
  m='2945110'>and</span> <span m='2945300'>notation.</span> </p><p><span
  m='2946200'>So</span> <span m='2946380'>we'll</span> <span
  m='2946510'>assume</span> <span m='2946870'>that</span> <span
  m='2947050'>mu</span> <span m='2947250'>is</span> <span
  m='2947380'>equal</span> <span m='2947580'>to</span> <span
  m='2947640'>0</span> <span m='2948210'>in</span> <span m='2948300'>our</span>
  <span m='2948650'>Geometric</span> <span m='2949130'>Brownian</span> <span
  m='2949470'>Motion</span> <span m='2950060'>model.</span> <span
  m='2950750'>So</span> <span m='2951180'>we</span> <span m='2951270'>don't
  have</span> <span m='2951400'>to</span> <span m='2951490'>worry</span> <span
  m='2951600'>about</span> <span m='2951820'>the</span> <span
  m='2951900'>mean.</span> <span m='2952190'>We're</span> <span
  m='2952310'>just</span> <span m='2952490'>concerned</span> <span
  m='2952840'>with</span> <span m='2952930'>volatility.</span> <span
  m='2954260'>We'll</span> <span m='2954430'>assume</span> <span
  m='2954740'>that</span> <span m='2955040'>the</span> <span
  m='2955870'>increments</span> <span m='2956430'>are</span> <span
  m='2957020'>one</span> <span m='2957820'>for</span> <span
  m='2958010'>daily,</span> <span m='2958530'>corresponding</span> <span
  m='2958970'>to</span> <span m='2959090'>daily.</span> <span
  m='2960760'>And</span> <span m='2960920'>we'll</span> <span
  m='2961060'>let</span> <span m='2961280'>little</span> <span
  m='2961590'>f</span> <span m='2962270'>between</span> <span
  m='2962740'>zero</span> <span m='2963130'>and</span> <span
  m='2963240'>one</span> <span m='2963640'>correspond</span> <span
  m='2964440'>to</span> <span m='2965720'>the</span> <span
  m='2971040'>time</span> <span m='2971360'>of</span> <span
  m='2971480'>day</span> <span m='2971770'>at which</span> <span
  m='2973250'>the</span> <span m='2973400'>market</span> <span
  m='2973730'>opens.</span> </p><p><span m='2975130'>So</span> <span
  m='2975440'>over</span> <span m='2975840'>a</span> <span
  m='2976030'>day,</span> <span m='2977390'>from</span> <span
  m='2977600'>day</span> <span m='2977840'>zero,</span> <span
  m='2978290'>day</span> <span m='2978480'>one</span> <span
  m='2979860'>at</span> <span m='2980130'>f</span> <span m='2980640'>we</span>
  <span m='2980800'>assume</span> <span m='2981180'>that</span> <span
  m='2981420'>the</span> <span m='2983210'>market</span> <span
  m='2983570'>opens</span> <span m='2985420'>and</span> <span
  m='2987460'>basically</span> <span m='2987960'>the</span> <span
  m='2988400'>Geometric</span> <span m='2988890'>Brownian</span> <span
  m='2989180'>Motion</span> <span m='2989510'>process</span> <span
  m='2990780'>might</span> <span m='2990970'>have</span> <span
  m='2991100'>closed</span> <span m='2991610'>on</span> <span
  m='2991820'>day</span> <span m='2992020'>zero</span> <span
  m='2992530'>here.</span> <span m='2993020'>So</span> <span
  m='2993160'>this</span> <span m='2993350'>would</span> <span
  m='2993490'>be</span> <span m='2993690'>c</span> <span m='2994220'>0</span>
  <span m='2995660'>and</span> <span m='2996450'>it</span> <span
  m='2997240'>may</span> <span m='2997540'>have</span> <span
  m='2997810'>opened</span> <span m='2998280'>on</span> <span
  m='2998710'>day</span> <span m='2999420'>one</span> <span
  m='3000790'>at</span> <span m='3001030'>this</span> <span
  m='3001270'>value.</span> <span m='3001880'>So</span> <span
  m='3001970'>this</span> <span m='3002190'>would</span> <span
  m='3002380'>be</span> <span m='3003710'>O</span> <span m='3004340'>1.</span>
  <span m='3005990'>Might</span> <span m='3006170'>have</span> <span
  m='3006290'>gone</span> <span m='3006520'>up</span> <span
  m='3007150'>and</span> <span m='3007350'>down</span> <span
  m='3008470'>and</span> <span m='3008670'>then</span> <span
  m='3009000'>closed</span> <span m='3010720'>here</span> <span
  m='3012380'>with</span> <span m='3012630'>the</span> <span
  m='3012970'>Brownian</span> <span m='3013450'>Motion</span> <span
  m='3013830'>process.</span> <span m='3015030'>OK.</span> <span
  m='3015300'>This</span> <span m='3015590'>value</span> <span
  m='3015960'>here</span> <span m='3017170'>would</span> <span
  m='3017360'>correspond</span> <span m='3018100'>to</span> <span
  m='3019120'>the</span> <span m='3019210'>high</span> <span
  m='3019520'>value.</span> </p><p><span m='3022240'>This</span> <span
  m='3022460'>value</span> <span m='3022770'>here</span> <span
  m='3023000'>would</span> <span m='3023110'>correspond</span> <span
  m='3023600'>to</span> <span m='3023680'>the</span> <span
  m='3023800'>low</span> <span m='3024030'>value</span> <span
  m='3024370'>on</span> <span m='3024500'>day</span> <span
  m='3024690'>one.</span> <span m='3025710'>And</span> <span
  m='3025890'>then</span> <span m='3026130'>the</span> <span
  m='3026240'>closing</span> <span m='3026640'>value</span> <span
  m='3027030'>here</span> <span m='3027360'>would</span> <span
  m='3027620'>be</span> <span m='3029510'>c 1.</span> <span
  m='3030840'>So</span> <span m='3032660'>the</span> <span
  m='3032980'>model</span> <span m='3033500'>is</span> <span
  m='3033690'>we</span> <span m='3033830'>have</span> <span
  m='3034070'>this</span> <span m='3034290'>underlying</span> <span
  m='3034690'>Brownian</span> <span m='3034980'>Motion</span> <span
  m='3035310'>process</span> <span m='3036630'>is</span> <span
  m='3036790'>actually</span> <span m='3038430'>working</span> <span
  m='3038940'>over</span> <span m='3039860'>continuous</span> <span
  m='3040370'>time,</span> <span m='3041220'>but</span> <span
  m='3041350'>we</span> <span m='3041460'>just</span> <span
  m='3041640'>observe</span> <span m='3042060'>it</span> <span
  m='3042800'>over</span> <span m='3044090'>the</span> <span
  m='3044310'>time</span> <span m='3044550'>when</span> <span
  m='3044660'>the</span> <span m='3044730'>markets</span> <span
  m='3045130'>open.</span> <span m='3045950'>And</span> <span
  m='3046210'>so</span> <span m='3046390'>it</span> <span m='3046470'>can</span>
  <span m='3046620'>move</span> <span m='3047060'>between</span> <span
  m='3047450'>when</span> <span m='3047560'>the</span> <span
  m='3047620'>market</span> <span m='3047950'>closes</span> <span
  m='3048380'>and</span> <span m='3048470'>opens</span> <span
  m='3048840'>on</span> <span m='3048950'>any</span> <span
  m='3049110'>given</span> <span m='3049400'>day</span> <span
  m='3050270'>and</span> <span m='3051410'>we</span> <span
  m='3051550'>have</span> <span m='3051670'>the</span> <span
  m='3051790'>additional</span> <span m='3052130'>information.</span> <span
  m='3052640'>Instead of</span> <span m='3052890'>just</span> <span
  m='3053110'>the</span> <span m='3053210'>close,</span> <span
  m='3054130'>we</span> <span m='3054300'>also</span> <span m='3054560'>have
  the</span> <span m='3054780'>high and low.</span> </p><p><span
  m='3056380'>So</span> <span m='3056530'>let's</span> <span
  m='3057080'>look</span> <span m='3057280'>at</span> <span
  m='3057350'>how</span> <span m='3057590'>we</span> <span
  m='3057760'>might</span> <span m='3059190'>exploit</span> <span
  m='3059670'>that</span> <span m='3059840'>information</span> <span
  m='3060450'>to</span> <span m='3060510'>estimate</span> <span
  m='3060920'>volatility.</span> <span m='3063350'>OK.</span> <span
  m='3063570'>Using</span> <span m='3064290'>data</span> <span
  m='3065330'>from</span> <span m='3065490'>the</span> <span
  m='3065560'>first</span> <span m='3065840'>period</span> <span
  m='3066140'>as</span> <span m='3066260'>we've</span> <span
  m='3066380'>graphed</span> <span m='3066800'>here,</span> <span
  m='3067750'>let's</span> <span m='3067920'>first</span> <span
  m='3068350'>just</span> <span m='3068570'>highlight</span> <span
  m='3069010'>what</span> <span m='3069280'>the</span> <span
  m='3071340'>close</span> <span m='3072130'>to</span> <span
  m='3072320'>close</span> <span m='3073520'>return</span> <span
  m='3075500'>is.</span> <span m='3076370'>And</span> <span
  m='3076580'>that</span> <span m='3076820'>basically</span> <span
  m='3077150'>is</span> <span m='3077320'>an</span> <span
  m='3077440'>estimate</span> <span m='3077900'>of</span> <span
  m='3078100'>the</span> <span m='3078200'>one</span> <span
  m='3078550'>period</span> <span m='3079640'>variance.</span> <span
  m='3080950'>And</span> <span m='3081150'>so</span> <span
  m='3081740'>sigma</span> <span m='3081910'>hat</span> <span
  m='3082040'>0</span> <span m='3082290'>squared</span> <span
  m='3082950'>is</span> <span m='3084170'>a</span> <span
  m='3084290'>single</span> <span m='3084630'>period</span> <span
  m='3085010'>squared</span> <span m='3085450'>return.</span> <span
  m='3088300'>c 1</span> <span m='3088770'>minus</span> <span
  m='3089110'>c0</span> <span m='3090640'>as</span> <span m='3090820'>a</span>
  <span m='3090880'>distribution</span> <span m='3091510'>which</span> <span
  m='3091680'>is</span> <span m='3091800'>normal</span> <span
  m='3092050'>with</span> <span m='3092180'>mean</span> <span
  m='3092460'>0,</span> <span m='3093130'>and</span> <span
  m='3093310'>variance</span> <span m='3094340'>sigma</span> <span
  m='3094680'>squared.</span> </p><p><span m='3096930'>And</span> <span
  m='3098060'>if</span> <span m='3098300'>we</span> <span
  m='3098850'>consider</span> <span m='3101950'>squaring</span> <span
  m='3102550'>that,</span> <span m='3105260'>what's</span> <span
  m='3105490'>the</span> <span m='3105610'>distribution</span> <span
  m='3105915'>of</span> <span m='3106220'>that?</span> <span
  m='3106470'>That's</span> <span m='3106720'>the</span> <span
  m='3106810'>square</span> <span m='3107320'>of</span> <span
  m='3107410'>a</span> <span m='3107450'>normal</span> <span
  m='3107820'>random</span> <span m='3108150'>variable,</span> <span
  m='3110450'>which</span> <span m='3110520'>is</span> <span
  m='3110630'>chi</span> <span m='3110860'>squared,</span> <span
  m='3111320'>but</span> <span m='3111420'>it's</span> <span
  m='3111520'>a</span> <span m='3111570'>multiple</span> <span
  m='3111980'>of</span> <span m='3112060'>a</span> <span m='3112160'>chi</span>
  <span m='3112370'>squared.</span> <span m='3112690'>It's</span> <span
  m='3112810'>sigma</span> <span m='3113060'>squared</span> <span
  m='3113360'>times</span> <span m='3113690'>chi</span> <span
  m='3113930'>squared</span> <span m='3114360'>one</span> <span
  m='3114630'>random</span> <span m='3114950'>variable.</span> <span
  m='3117250'>And</span> <span m='3117370'>with</span> <span
  m='3117490'>a</span> <span m='3117580'>chi</span> <span
  m='3117850'>squared</span> <span m='3118280'>random</span> <span
  m='3118630'>variable</span> <span m='3120160'>the</span> <span
  m='3120260'>expected</span> <span m='3120890'>value</span> <span
  m='3121620'>is</span> <span m='3121830'>1.</span> <span m='3123150'>The</span>
  <span m='3123280'>variance</span> <span m='3123750'>of</span> <span
  m='3123840'>a chi</span> <span m='3123910'>squared</span> <span
  m='3125390'>random</span> <span m='3125720'>variable</span> <span
  m='3127580'>is</span> <span m='3127790'>equal</span> <span
  m='3128010'>to</span> <span m='3128130'>2.</span> <span m='3129140'>So</span>
  <span m='3129310'>just</span> <span m='3129950'>knowing</span> <span
  m='3130290'>those</span> <span m='3130560'>facts</span> <span
  m='3130930'>gives</span> <span m='3131190'>us</span> <span
  m='3131430'>the</span> <span m='3132840'>fact</span> <span
  m='3133360'>we</span> <span m='3133480'>have</span> <span
  m='3133590'>an</span> <span m='3133680'>unbiased</span> <span
  m='3134250'>estimate</span> <span m='3134970'>of</span> <span
  m='3135170'>the</span> <span m='3135760'>volatility</span> <span
  m='3137120'>parameter</span> <span m='3137490'>sigma</span> <span
  m='3138410'>and</span> <span m='3139830'>the</span> <span m='3139980'>variance
  is</span> <span m='3141910'>2</span> <span m='3142130'>sigma</span> <span
  m='3142440'>to</span> <span m='3142500'>the</span> <span
  m='3142590'>fourth.</span> </p><p><span m='3145420'>So</span> <span
  m='3146860'>that's</span> <span m='3147500'>basically</span> <span
  m='3147930'>the</span> <span m='3148550'>precision</span> <span
  m='3149716'>of</span> <span m='3150550'>close</span> <span
  m='3150840'>to</span> <span m='3150930'>close</span> <span
  m='3151220'>returns.</span> <span m='3154140'>Let's</span> <span
  m='3155290'>look</span> <span m='3155440'>at</span> <span
  m='3155560'>two</span> <span m='3155760'>other</span> <span
  m='3155980'>estimates.</span> <span m='3160170'>Basically</span> <span
  m='3160660'>the</span> <span m='3161015'>open to</span> <span
  m='3161370'>close</span> <span m='3161750'>return,</span> <span
  m='3162940'>sigma</span> <span m='3163330'>1</span> <span
  m='3163560'>squared</span> <span m='3165550'>normalized</span> <span
  m='3166230'>by</span> <span m='3166430'>f,</span> <span m='3166950'>the</span>
  <span m='3167060'>length</span> <span m='3167380'>of</span> <span
  m='3167470'>the</span> <span m='3167620'>interval</span> <span
  m='3167790'>f.</span> <span m='3168410'>So</span> <span m='3169320'>we</span>
  <span m='3169490'>have</span> <span m='3172410'>sigma</span> <span
  m='3172850'>1</span> <span m='3176150'>is</span> <span
  m='3176400'>equal</span> <span m='3176630'>to</span> <span
  m='3176830'>O</span> <span m='3176990'>1</span> <span m='3177560'>minus</span>
  <span m='3177970'>c0</span> <span m='3180620'>squared.</span> <span
  m='3183050'>OK.</span> </p><p><span m='3186500'>Actually</span> <span
  m='3186750'>why</span> <span m='3186960'>don't I</span> <span
  m='3187020'>just</span> <span m='3187210'>do</span> <span
  m='3187310'>this?</span> <span m='3188000'>I'll</span> <span
  m='3188130'>just</span> <span m='3188230'>write</span> <span
  m='3188450'>down</span> <span m='3188610'>a</span> <span
  m='3188650'>few</span> <span m='3188820'>facts</span> <span
  m='3189190'>and</span> <span m='3189260'>then</span> <span
  m='3189370'>you</span> <span m='3189510'>can</span> <span
  m='3189660'>see</span> <span m='3189900'>that</span> <span
  m='3190050'>the</span> <span m='3190130'>results</span> <span
  m='3190520'>are</span> <span m='3190620'>clear.</span> <span
  m='3191270'>Basically</span> <span m='3192860'>O</span> <span
  m='3193100'>1</span> <span m='3193370'>minus</span> <span m='3193635'>c</span>
  <span m='3193900'>0</span> <span m='3194890'>is</span> <span
  m='3195080'>distributed</span> <span m='3195650'>normal</span> <span
  m='3196110'>with</span> <span m='3196230'>mean</span> <span
  m='3196490'>0</span> <span m='3197400'>and</span> <span
  m='3197600'>variance</span> <span m='3197890'>f</span> <span
  m='3198180'>sigma</span> <span m='3198580'>squared.</span> <span
  m='3199860'>And</span> <span m='3200810'>c 1</span> <span
  m='3201930'>minus</span> <span m='3202250'>O</span> <span m='3202570'>1</span>
  <span m='3203380'>is</span> <span m='3203560'>distributed</span> <span
  m='3204060'>normal</span> <span m='3204500'>with mean</span> <span
  m='3204780'>0</span> <span m='3205100'>in</span> <span
  m='3205355'>variance</span> <span m='3205610'>1</span> <span
  m='3205850'>minus</span> <span m='3206340'>f</span> <span
  m='3207798'>sigma</span> <span m='3208284'>squared.</span> <span
  m='3208770'>OK.</span> </p><p><span m='3208990'>This</span> <span
  m='3209190'>is</span> <span m='3209380'>simply</span> <span
  m='3209810'>using</span> <span m='3210090'>the</span> <span
  m='3210190'>properties</span> <span m='3210720'>of</span> <span
  m='3210880'>the</span> <span m='3210950'>diffusion</span> <span
  m='3211410'>process</span> <span m='3212090'>over</span> <span
  m='3212330'>difference periods of</span> <span m='3212730'>time.</span> <span
  m='3213840'>So</span> <span m='3214600'>if</span> <span m='3214780'>we</span>
  <span m='3214930'>normalize</span> <span m='3216150'>the</span> <span
  m='3216270'>squared</span> <span m='3216670'>values</span> <span
  m='3217070'>by</span> <span m='3217220'>the</span> <span
  m='3217330'>length</span> <span m='3217550'>of</span> <span
  m='3217630'>the</span> <span m='3217740'>interval</span> <span
  m='3217980'>we</span> <span m='3218090'>get</span> <span
  m='3219140'>estimates</span> <span m='3220210'>of</span> <span
  m='3220770'>the</span> <span m='3220850'>volatility.</span> <span
  m='3222150'>And</span> <span m='3223720'>what's</span> <span
  m='3224320'>particularly</span> <span m='3226140'>significant</span> <span
  m='3226670'>about</span> <span m='3226930'>these</span> <span
  m='3227620'>estimates</span> <span m='3228380'>one</span> <span
  m='3228670'>and two</span> <span m='3229250'>is</span> <span
  m='3229410'>that</span> <span m='3229570'>they're</span> <span
  m='3229720'>independent.</span> <span m='3232360'>So</span> <span
  m='3232490'>we</span> <span m='3232620'>actually</span> <span
  m='3232790'>have</span> <span m='3232940'>two</span> <span
  m='3233270'>estimates</span> <span m='3234660'>of</span> <span
  m='3235300'>the</span> <span m='3235410'>same</span> <span
  m='3235740'>underlying</span> <span m='3236790'>parameter,</span> <span
  m='3238130'>which</span> <span m='3238370'>are</span> <span
  m='3238860'>independent.</span> <span m='3241090'>And</span> <span
  m='3241250'>actually</span> <span m='3242900'>they</span> <span
  m='3243710'>both</span> <span m='3244370'>have</span> <span
  m='3244580'>the</span> <span m='3244670'>same</span> <span
  m='3245030'>mean</span> <span m='3245305'>and</span> <span
  m='3245580'>they</span> <span m='3245740'>both</span> <span
  m='3246000'>have</span> <span m='3246170'>the</span> <span
  m='3246240'>same</span> <span m='3246520'>variance.</span> </p><p><span
  m='3248360'>So</span> <span m='3248670'>if</span> <span m='3248810'>we</span>
  <span m='3248930'>consider</span> <span m='3250800'>a</span> <span
  m='3250960'>new</span> <span m='3251150'>estimate,</span> <span
  m='3251650'>which</span> <span m='3251780'>is</span> <span
  m='3252910'>basically</span> <span m='3253210'>averaging</span> <span
  m='3253740'>those</span> <span m='3254040'>two.</span> <span
  m='3255790'>Then</span> <span m='3256310'>this</span> <span
  m='3256620'>new</span> <span m='3256850'>estimate</span> <span
  m='3258640'>has</span> <span m='3258890'>the</span> <span
  m='3258990'>same,</span> <span m='3259340'>is</span> <span
  m='3259640'>unbiased</span> <span m='3260230'>as</span> <span
  m='3260330'>well,</span> <span m='3261050'>but</span> <span
  m='3261190'>it's</span> <span m='3261360'>variance</span> <span
  m='3262880'>is</span> <span m='3264080'>basically</span> <span
  m='3264760'>the</span> <span m='3264900'>variance</span> <span
  m='3265420'>of</span> <span m='3265570'>this</span> <span
  m='3265940'>sum.</span> <span m='3266340'>So</span> <span
  m='3266490'>it's</span> <span m='3266600'>a</span> <span
  m='3266640'>1/2</span> <span m='3266950'>squared</span> <span
  m='3267470'>times</span> <span m='3267760'>this</span> <span
  m='3268040'>variance</span> <span m='3268400'>plus</span> <span
  m='3268610'>a</span> <span m='3268660'>1/2</span> <span
  m='3268950'>squared</span> <span m='3269330'>times</span> <span
  m='3269540'>this</span> <span m='3269750'>variance,</span> <span
  m='3270130'>which</span> <span m='3270320'>is</span> <span
  m='3270550'>a</span> <span m='3270940'>1/2</span> <span m='3272640'>the</span>
  <span m='3272740'>variance</span> <span m='3273330'>of</span> <span
  m='3273420'>each</span> <span m='3273640'>of them.</span> <span
  m='3274350'>So</span> <span m='3274830'>this</span> <span
  m='3275710'>estimate</span> <span m='3276470'>has</span> <span
  m='3276820'>lower</span> <span m='3277200'>variance</span> <span
  m='3278000'>than</span> <span m='3278150'>our</span> <span
  m='3278290'>close</span> <span m='3278640'>to</span> <span
  m='3278730'>close.</span> <span m='3280200'>And</span> <span
  m='3281590'>we</span> <span m='3281790'>can</span> <span
  m='3282520'>define</span> <span m='3283220'>the</span> <span
  m='3283530'>efficiency</span> <span m='3285110'>of</span> <span
  m='3285340'>this</span> <span m='3285720'>particular</span> <span
  m='3286120'>estimate</span> <span m='3286560'>relative</span> <span
  m='3287030'>to</span> <span m='3288310'>the</span> <span
  m='3288430'>close</span> <span m='3288770'>to</span> <span
  m='3288880'>close</span> <span m='3289250'>estimate</span> <span
  m='3290240'>as</span> <span m='3290520'>2.</span> </p><p><span
  m='3290870'>Basically</span> <span m='3292930'>we</span> <span
  m='3293360'>get</span> <span m='3293600'>double the</span> <span
  m='3293850'>precision.</span> <span m='3298510'>Suppose</span> <span
  m='3298820'>you</span> <span m='3298910'>had</span> <span
  m='3299120'>the</span> <span m='3299240'>open</span> <span
  m='3299450'>high</span> <span m='3299610'>close</span> <span
  m='3300000'>for</span> <span m='3300140'>one</span> <span
  m='3300450'>day.</span> <span m='3301940'>How</span> <span
  m='3301990'>many</span> <span m='3302240'>days</span> <span
  m='3302870'>of</span> <span m='3303210'>close</span> <span
  m='3303550'>to</span> <span m='3303640'>close</span> <span
  m='3303980'>data</span> <span m='3304220'>would</span> <span
  m='3304420'>you</span> <span m='3304530'>need</span> <span
  m='3305090'>to</span> <span m='3305380'>have</span> <span
  m='3305690'>the</span> <span m='3305780'>same</span> <span
  m='3306800'>variance</span> <span m='3307150'>as</span> <span
  m='3307500'>this</span> <span m='3307880'>estimate?</span> <span
  m='3313860'>No.</span> </p><p><span m='3315170'>AUDIENCE: [INAUDIBLE].</span>
  <span m='3315645'>Because</span> <span m='3316120'>of the three</span> <span
  m='3316595'>data points</span> <span m='3317070'>[INAUDIBLE].</span>
  </p><p><span m='3317550'>PROFESSOR: No.</span> <span m='3318360'>No.</span>
  <span m='3320590'>Anyone</span> <span m='3320860'>else?</span> <span
  m='3322565'>One more.</span> <span m='3323760'>Four.</span> <span
  m='3325150'>OK.</span> <span m='3325760'>Basically</span> <span
  m='3326290'>is</span> <span m='3326420'>if</span> <span m='3326610'>the</span>
  <span m='3326700'>variance</span> <span m='3327760'>is</span> <span
  m='3328850'>a</span> <span m='3328890'>1/2</span> <span
  m='3330070'>basically</span> <span m='3332570'>to</span> <span
  m='3332690'>get</span> <span m='3332840'>the</span> <span
  m='3332910'>standard</span> <span m='3333190'>deviation,</span> <span
  m='3334280'>or</span> <span m='3335410'>the</span> <span
  m='3335520'>variance</span> <span m='3336040'>to</span> <span
  m='3337300'>be--</span> <span m='3338260'>I'm</span> <span
  m='3338530'>sorry.</span> <span m='3339205'>The</span> <span
  m='3339620'>ratio</span> <span m='3339900'>of</span> <span
  m='3339960'>the</span> <span m='3340040'>variance</span> <span
  m='3340450'>is</span> <span m='3340560'>two.</span> <span
  m='3340770'>So</span> <span m='3341060'>no.</span> <span m='3341430'>So</span>
  <span m='3341550'>it</span> <span m='3341680'>actually</span> <span
  m='3342030'>is</span> <span m='3342420'>close</span> <span
  m='3342690'>to</span> <span m='3342810'>two.</span> </p><p><span
  m='3346670'>Let's</span> <span m='3346840'>see.</span> <span m='3347070'>Our
  1/n</span> <span m='3348640'>is--</span> <span m='3348900'>so</span> <span
  m='3349040'>it</span> <span m='3349120'>actually</span> <span
  m='3349430'>is</span> <span m='3349620'>two.</span> <span
  m='3349890'>OK.</span> <span m='3350140'>I</span> <span m='3350300'>was
  thinking</span> <span m='3350570'>standard</span> <span
  m='3350810'>deviation</span> <span m='3351220'>units</span> <span
  m='3351420'>instead</span> <span m='3351720'>of</span> <span
  m='3351800'>squared</span> <span m='3352200'>units.</span> <span
  m='3352540'>So</span> <span m='3354230'>I  was</span> <span
  m='3354550'>trying</span> <span m='3354970'>to be</span> <span
  m='3355120'>clever</span> <span m='3355390'>there.</span> <span
  m='3355900'>So</span> <span m='3356290'>it</span> <span
  m='3356400'>actually</span> <span m='3356780'>is</span> <span
  m='3357870'>basically</span> <span m='3358290'>two</span> <span
  m='3358480'>days.</span> <span m='3359270'>So</span> <span
  m='3360340'>sampling</span> <span m='3360960'>this</span> <span
  m='3362240'>with</span> <span m='3362420'>this</span> <span
  m='3362590'>information</span> <span m='3363150'>gives</span> <span
  m='3363500'>you</span> <span m='3363670'>as much as</span> <span
  m='3363870'>two</span> <span m='3363980'>days</span> <span
  m='3364220'>worth</span> <span m='3364390'>of</span> <span
  m='3364480'>information.</span> <span m='3365850'>So</span> <span
  m='3366020'>what</span> <span m='3366110'>does</span> <span
  m='3366190'>that</span> <span m='3366390'>mean?</span> <span
  m='3366800'>Well,</span> <span m='3367060'>if</span> <span
  m='3367180'>you</span> <span m='3367270'>want</span> <span
  m='3367500'>something</span> <span m='3367740'>that's</span> <span
  m='3367930'>as</span> <span m='3368050'>efficient</span> <span
  m='3368930'>as</span> <span m='3369150'>daily</span> <span
  m='3369450'>estimates</span> <span m='3369700'>you'll</span> <span
  m='3369970'>need to</span> <span m='3370140'>look</span> <span
  m='3370360'>back</span> <span m='3371460'>one</span> <span
  m='3371710'>day</span> <span m='3371850'>instead</span> <span
  m='3371960'>of</span> <span m='3372550'>two</span> <span
  m='3372740'>days</span> <span m='3374390'>to</span> <span
  m='3374490'>get</span> <span m='3374630'>the</span> <span
  m='3374700'>same</span> <span m='3375010'>efficiency</span> <span
  m='3375460'>with the</span> <span m='3375550'>estimate.</span> </p><p><span
  m='3376740'>All right.</span> <span m='3379870'>The</span> <span
  m='3379970'>motivation</span> <span m='3380580'>for</span> <span
  m='3380720'>the</span> <span m='3380820'>Garman-Klass</span> <span
  m='3381460'>paper</span> <span m='3381760'>was</span> <span
  m='3381900'>actually</span> <span m='3384388'>a</span> <span
  m='3384880'>paper</span> <span m='3385240'>written</span> <span
  m='3385520'>by</span> <span m='3385760'>Parkinson</span> <span
  m='3386035'>in</span> <span m='3386310'>1976,</span> <span
  m='3387850'>which</span> <span m='3388170'>dealt</span> <span
  m='3388450'>with</span> <span m='3388870'>using</span> <span
  m='3389650'>the</span> <span m='3389810'>extremes</span> <span m='3390590'>of
  a</span> <span m='3390770'>Brownian</span> <span m='3391210'>Motion</span>
  <span m='3392350'>to</span> <span m='3392780'>estimate</span> <span
  m='3393280'>the</span> <span m='3393400'>underlying</span> <span
  m='3393770'>parameters.</span> <span m='3394730'>And</span> <span
  m='3396170'>when</span> <span m='3396760'>[INAUDIBLE]</span> <span
  m='3397430'>talks</span> <span m='3397720'>about</span> <span
  m='3398020'>Brownian</span> <span m='3398390'>Motion</span> <span
  m='3398780'>a</span> <span m='3398830'>bit</span> <span
  m='3399080'>later</span> <span m='3399590'>I</span> <span
  m='3399800'>don't</span> <span m='3399950'>know</span> <span
  m='3400040'>if</span> <span m='3400130'>you'll</span> <span
  m='3400890'>derive</span> <span m='3401400'>this</span> <span
  m='3401590'>result,</span> <span m='3402080'>but in</span> <span
  m='3402240'>courses</span> <span m='3402630'>on</span> <span
  m='3402780'>stochastic</span> <span m='3403230'>processes</span> <span
  m='3403810'>one</span> <span m='3404010'>does</span> <span
  m='3404280'>derive</span> <span m='3404820'>properties</span> <span
  m='3405390'>of</span> <span m='3405950'>the</span> <span
  m='3406060'>maximum</span> <span m='3406760'>of a</span> <span
  m='3406920'>Brownian</span> <span m='3407340'>Motion</span> <span
  m='3407710'>over a</span> <span m='3407970'>given</span> <span
  m='3408230'>interval</span> <span m='3409000'>and</span> <span
  m='3409140'>the</span> <span m='3409210'>minimum.</span> <span
  m='3410200'>And</span> <span m='3411220'>it</span> <span
  m='3411420'>turns</span> <span m='3411750'>out</span> <span
  m='3412000'>that</span> <span m='3412780'>if</span> <span
  m='3412980'>you</span> <span m='3413140'>look</span> <span
  m='3413350'>at</span> <span m='3413510'>the</span> <span
  m='3413680'>difference</span> <span m='3414000'>between</span> <span
  m='3414330'>the</span> <span m='3414400'>high</span> <span
  m='3414910'>and</span> <span m='3415080'>low</span> <span
  m='3416240'>squared</span> <span m='3416790'>divided</span> <span
  m='3417070'>by</span> <span m='3417200'>4,</span> <span m='3417460'>log</span>
  <span m='3417680'>2,</span> <span m='3419170'>this</span> <span
  m='3419670'>is</span> <span m='3420670'>an</span> <span
  m='3420800'>estimate</span> <span m='3421300'>of the</span> <span
  m='3421510'>volatility</span> <span m='3422140'>of</span> <span
  m='3422220'>the</span> <span m='3422300'>process.</span> </p><p><span
  m='3423460'>And</span> <span m='3423650'>the</span> <span
  m='3423770'>efficiency</span> <span m='3424380'>of</span> <span
  m='3424480'>this</span> <span m='3424700'>estimate</span> <span
  m='3426300'>turns</span> <span m='3426520'>out</span> <span
  m='3426620'>to</span> <span m='3426680'>be</span> <span
  m='3426810'>5.2,</span> <span m='3429170'>which</span> <span
  m='3429630'>is</span> <span m='3431150'>better</span> <span
  m='3431470'>yet.</span> <span m='3432610'>Well,</span> <span
  m='3433060'>Garman and</span> <span m='3433390'>Klass were</span> <span
  m='3433500'>excited</span> <span m='3433910'>by</span> <span
  m='3434060'>that</span> <span m='3434380'>and</span> <span
  m='3435100'>wanted</span> <span m='3435380'>to</span> <span
  m='3435450'>find</span> <span m='3436030'>even</span> <span
  m='3436290'>better</span> <span m='3436510'>ones.</span> <span
  m='3436710'>So</span> <span m='3437710'>they</span> <span
  m='3437900'>wrote</span> <span m='3438070'>a</span> <span
  m='3438140'>paper</span> <span m='3438700'>that</span> <span
  m='3440980'>evaluated</span> <span m='3441600'>all</span> <span
  m='3441810'>different</span> <span m='3442080'>kinds</span> <span
  m='3442350'>of</span> <span m='3442430'>estimates.</span> <span
  m='3443000'>And</span> <span m='3443250'>I</span> <span
  m='3443330'>encourage</span> <span m='3443820'>you</span> <span
  m='3443970'>to</span> <span m='3444990'>Google</span> <span
  m='3445290'>that</span> <span m='3445500'>paper</span> <span m='3445810'>and
  read it</span> <span m='3446240'>because</span> <span m='3446500'>it's</span>
  <span m='3446640'>very</span> <span m='3446830'>accessible.</span> <span
  m='3447480'>And</span> <span m='3447610'>it</span> <span m='3447710'>sort
  of</span> <span m='3447910'>highlights</span> <span m='3448430'>the</span>
  <span m='3449960'>statistical</span> <span m='3450235'>and</span> <span
  m='3450510'>probability</span> <span m='3451060'>issues</span> <span
  m='3451310'>associated</span> <span m='3451750'>with</span> <span
  m='3451880'>these</span> <span m='3452270'>problems.</span> <span
  m='3453150'>But</span> <span m='3453720'>what</span> <span
  m='3453950'>they</span> <span m='3454080'>did</span> <span
  m='3454230'>was</span> <span m='3454340'>they</span> <span
  m='3454480'>derived</span> <span m='3454800'>the</span> <span
  m='3454880'>best</span> <span m='3455360'>analytics</span> <span
  m='3455900'>scale</span> <span m='3456250'>invariant</span> <span
  m='3456780'>estimator,</span> <span m='3458130'>which</span> <span
  m='3458410'>has</span> <span m='3458650'>this</span> <span
  m='3460570'>sort</span> <span m='3460730'>of</span> <span
  m='3461530'>bizarre</span> <span m='3462470'>combination</span> <span
  m='3463430'>of</span> <span m='3465330'>different</span> <span
  m='3465660'>terms,</span> <span m='3466130'>but</span> <span
  m='3466270'>basically</span> <span m='3466860'>we're</span> <span
  m='3467160'>using</span> <span m='3467470'>normalized</span> <span
  m='3468340'>values</span> <span m='3468840'>of</span> <span
  m='3469510'>the</span> <span m='3469590'>high low</span> <span
  m='3470110'>close</span> <span m='3470530'>normalized</span> <span
  m='3471100'>by</span> <span m='3471240'>the</span> <span
  m='3471390'>open.</span> </p><p><span m='3472270'>And</span> <span
  m='3472540'>they're</span> <span m='3472720'>able</span> <span
  m='3472880'>to</span> <span m='3472930'>get</span> <span m='3473090'>an</span>
  <span m='3473170'>efficiency</span> <span m='3473690'>of</span> <span
  m='3473760'>7.4</span> <span m='3475840'>with</span> <span
  m='3476030'>this</span> <span m='3478360'>combination.</span> <span
  m='3479390'>Now</span> <span m='3479540'>scale</span> <span m='3480020'>[?
  invariant ?]</span> <span m='3480450'>estimates</span> <span
  m='3485320'>in</span> <span m='3485720'>statistical</span> <span
  m='3486190'>theory,</span> <span m='3486700'>they're</span> <span
  m='3487180'>different</span> <span m='3487490'>principles</span> <span
  m='3487940'>that</span> <span m='3488130'>guide</span> <span
  m='3488590'>the</span> <span m='3489900'>development</span> <span
  m='3490360'>of</span> <span m='3490490'>different</span> <span
  m='3490880'>methodologies.</span> <span m='3491610'>And</span> <span
  m='3491700'>one</span> <span m='3492300'>kind</span> <span
  m='3492630'>of</span> <span m='3492890'>principle</span> <span
  m='3493380'>is</span> <span m='3493580'>issues</span> <span
  m='3493920'>of</span> <span m='3494030'>scale</span> <span
  m='3494510'>invariance.</span> <span m='3496420'>If</span> <span
  m='3496560'>you're</span> <span m='3496760'>estimating</span> <span
  m='3497490'>a</span> <span m='3497720'>scale</span> <span
  m='3498300'>parameter,</span> <span m='3499570'>and</span> <span
  m='3499870'>in</span> <span m='3499990'>this</span> <span
  m='3500180'>case</span> <span m='3500600'>volatility</span> <span
  m='3501280'>is</span> <span m='3501440'>telling</span> <span
  m='3501710'>you</span> <span m='3501820'>essentially</span> <span
  m='3502210'>how</span> <span m='3503040'>large</span> <span
  m='3503440'>is</span> <span m='3503600'>the</span> <span
  m='3503690'>variability</span> <span m='3504330'>of</span> <span
  m='3504450'>this</span> <span m='3504610'>process,</span> <span
  m='3505680'>if</span> <span m='3505850'>you</span> <span
  m='3505980'>were</span> <span m='3506150'>to</span> <span
  m='3506330'>say</span> <span m='3506570'>multiply</span> <span
  m='3507320'>your</span> <span m='3507940'>original</span> <span
  m='3508380'>data</span> <span m='3508800'>all</span> <span m='3509050'>by
  a</span> <span m='3509270'>given</span> <span m='3509750'>constant,</span>
  <span m='3511570'>then</span> <span m='3512560'>a</span> <span
  m='3512690'>scale</span> <span m='3513020'>invariant</span> <span
  m='3513390'>estimator</span> <span m='3513950'>should</span> <span
  m='3514170'>be</span> <span m='3514340'>such</span> <span
  m='3514690'>that</span> <span m='3515360'>your</span> <span
  m='3515620'>estimator</span> <span m='3516130'>changes</span> <span
  m='3516830'>in</span> <span m='3516920'>that</span> <span
  m='3517140'>case,</span> <span m='3517560'>only</span> <span
  m='3517660'>by</span> <span m='3518020'>that</span> <span
  m='3518270'>same</span> <span m='3518510'>scale</span> <span
  m='3518840'>factor.</span> <span m='3519710'>So</span> <span
  m='3520020'>sort</span> <span m='3520140'>of</span> <span
  m='3520350'>the</span> <span m='3520930'>estimator</span> <span
  m='3521980'>doesn't</span> <span m='3522310'>depend</span> <span
  m='3522710'>on</span> <span m='3523260'>how</span> <span
  m='3523560'>you</span> <span m='3523760'>scale the</span> <span
  m='3524200'>data.</span> <span m='3525700'>So</span> <span
  m='3526940'>that's</span> <span m='3527160'>the</span> <span
  m='3527240'>notion</span> <span m='3527500'>of</span> <span
  m='3527560'>scale</span> <span m='3527825'>invariance.</span> </p><p><span
  m='3530230'>The</span> <span m='3531390'>Garman and Klass</span> <span
  m='3532010'>paper</span> <span m='3532320'>actually</span> <span
  m='3533860'>goes</span> <span m='3534590'>to</span> <span
  m='3534670'>the</span> <span m='3534790'>nth</span> <span m='3535010'>degree
  and</span> <span m='3535260'>actually</span> <span m='3535590'>finds a</span>
  <span m='3536040'>particular</span> <span m='3536370'>estimator</span> <span
  m='3536800'>that</span> <span m='3537170'>has an</span> <span m='3537320'>[?
  efficiency ?]</span> <span m='3537760'>of</span> <span m='3537890'>8.4,</span>
  <span m='3539880'>which</span> <span m='3540120'>is</span> <span
  m='3540550'>really</span> <span m='3541600'>highly</span> <span
  m='3541960'>significant.</span> <span m='3542470'>So</span> <span
  m='3542930'>if</span> <span m='3543290'>you</span> <span
  m='3543520'>are</span> <span m='3543670'>working</span> <span
  m='3544070'>with</span> <span m='3547030'>a</span> <span
  m='3547420'>modeling</span> <span m='3547840'>process</span> <span
  m='3548350'>where</span> <span m='3548520'>you</span> <span
  m='3548670'>believe</span> <span m='3549100'>that</span> <span
  m='3549410'>the</span> <span m='3550300'>underlying</span> <span
  m='3550780'>parameters</span> <span m='3551420'>may</span> <span
  m='3551680'>be</span> <span m='3554120'>reasonably</span> <span
  m='3554700'>assumed</span> <span m='3555070'>to</span> <span
  m='3555140'>be</span> <span m='3555330'>constant</span> <span
  m='3556080'>over</span> <span m='3556770'>short</span> <span
  m='3557130'>periods</span> <span m='3557480'>of</span> <span
  m='3557600'>time,</span> <span m='3558770'>well,</span> <span m='3559590'>over
  those</span> <span m='3559900'>short</span> <span m='3560180'>periods</span>
  <span m='3560450'>of</span> <span m='3560570'>time</span> <span
  m='3560910'>if</span> <span m='3561030'>you</span> <span
  m='3561160'>use</span> <span m='3561870'>these</span> <span
  m='3562170'>extended</span> <span m='3562710'>estimators</span> <span
  m='3563350'>like</span> <span m='3563570'>this,</span> <span
  m='3564360'>you'll</span> <span m='3564540'>get</span> <span
  m='3564710'>much</span> <span m='3564920'>more</span> <span
  m='3565080'>precise</span> <span m='3565810'>measures</span> <span
  m='3566320'>of</span> <span m='3566480'>the</span> <span
  m='3566570'>underlying</span> <span m='3566960'>parameters</span> <span
  m='3567950'>than</span> <span m='3568210'>from</span> <span
  m='3568400'>just</span> <span m='3568640'>using</span> <span
  m='3568970'>simple</span> <span m='3569310'>close</span> <span m='3569690'>to
  close</span> <span m='3570185'>data.</span> <span m='3573160'>All
  right.</span> </p><p><span m='3573730'>Let's</span> <span
  m='3575020'>introduce</span> <span m='3575760'>Poisson</span> <span
  m='3576270'>Jump</span> <span m='3576490'>Diffusions.</span> <span
  m='3578790'>With</span> <span m='3580980'>Poisson</span> <span
  m='3581250'>Jump</span> <span m='3581340'>Diffusions</span> <span
  m='3583420'>we</span> <span m='3583710'>have</span> <span
  m='3584480'>basically</span> <span m='3584880'>a</span> <span
  m='3585300'>stochastic</span> <span m='3587780'>differential</span> <span
  m='3590060'>equation</span> <span m='3590560'>for</span> <span
  m='3591450'>representing</span> <span m='3591950'>this</span> <span
  m='3592160'>model.</span> <span m='3592560'>And</span> <span
  m='3592710'>it's</span> <span m='3592900'>just</span> <span
  m='3593210'>like</span> <span m='3593510'>the</span> <span
  m='3593690'>Geometric</span> <span m='3594280'>Brownian</span> <span
  m='3594660'>Motion</span> <span m='3595010'>model,</span> <span
  m='3595750'>except</span> <span m='3596110'>we</span> <span
  m='3596220'>have</span> <span m='3596460'>this</span> <span
  m='3596620'>additional</span> <span m='3597130'>term,</span> <span
  m='3598490'>Gamma</span> <span m='3598860'>sigma</span> <span
  m='3599240'>zd</span> <span m='3599670'>pi ft.</span> </p><p><span
  m='3600930'>Now</span> <span m='3601380'>that's</span> <span
  m='3601660'>a</span> <span m='3601730'>lot</span> <span m='3601970'>of</span>
  <span m='3602340'>different</span> <span m='3603100'>variables,</span> <span
  m='3604390'>but</span> <span m='3605750'>essentially</span> <span
  m='3606300'>what</span> <span m='3606490'>we're</span> <span
  m='3606690'>thinking</span> <span m='3607070'>about</span> <span
  m='3607370'>is</span> <span m='3609280'>over</span> <span
  m='3609640'>time</span> <span m='3614980'>a</span> <span
  m='3615070'>Brownian</span> <span m='3615500'>Motion</span> <span
  m='3615930'>process</span> <span m='3617440'>is</span> <span
  m='3617930'>fully</span> <span m='3618330'>continuous.</span> <span
  m='3620300'>There</span> <span m='3620470'>are</span> <span
  m='3620520'>basically</span> <span m='3620820'>no</span> <span
  m='3621040'>jumps</span> <span m='3621430'>in</span> <span
  m='3621600'>this</span> <span m='3622200'>Brownian</span> <span
  m='3622460'>Motion</span> <span m='3622890'>process.</span> <span
  m='3624390'>In</span> <span m='3624570'>order</span> <span
  m='3624780'>to</span> <span m='3625110'>allow</span> <span
  m='3625430'>for</span> <span m='3625690'>jumps,</span> <span
  m='3626990'>we</span> <span m='3627160'>assume</span> <span
  m='3627610'>that</span> <span m='3628980'>there's</span> <span
  m='3629240'>some</span> <span m='3629520'>process</span> <span
  m='3630380'>pi</span> <span m='3630620'>of</span> <span m='3630780'>t,</span>
  <span m='3631700'>which</span> <span m='3631940'>is</span> <span
  m='3632160'>a</span> <span m='3632840'>Poisson</span> <span
  m='3633190'>process.</span> <span m='3633960'>It's</span> <span
  m='3634130'>counting</span> <span m='3634610'>process</span> <span
  m='3634990'>that counts</span> <span m='3635870'>when</span> <span
  m='3637650'>jumps</span> <span m='3638090'>occur,</span> <span
  m='3638480'>how</span> <span m='3638640'>many</span> <span
  m='3638810'>jumps</span> <span m='3639110'>have</span> <span
  m='3639210'>occurred.</span> <span m='3640160'>So</span> <span
  m='3640620'>that</span> <span m='3640940'>might</span> <span
  m='3641170'>start</span> <span m='3641540'>at</span> <span
  m='3641690'>0</span> <span m='3642160'>at the</span> <span
  m='3642660'>value</span> <span m='3642960'>0.</span> </p><p><span
  m='3644020'>Then</span> <span m='3644760'>if</span> <span
  m='3644950'>there's</span> <span m='3645880'>a</span> <span
  m='3646030'>jump</span> <span m='3646400'>here</span> <span
  m='3646960'>it</span> <span m='3647230'>goes</span> <span
  m='3647500'>up</span> <span m='3647700'>by</span> <span
  m='3647900'>one.</span> <span m='3650680'>And then</span> <span m='3650860'>if
  there's</span> <span m='3650940'>another</span> <span m='3651100'>jump</span>
  <span m='3651380'>here,</span> <span m='3651890'>it</span> <span
  m='3652120'>goes</span> <span m='3652380'>up</span> <span
  m='3653030'>by</span> <span m='3653190'>one,</span> <span
  m='3654280'>and</span> <span m='3654440'>so</span> <span
  m='3654640'>forth.</span> <span m='3655890'>And</span> <span
  m='3656150'>so</span> <span m='3656870'>the</span> <span
  m='3657990'>Poisson</span> <span m='3658500'>Jump</span> <span
  m='3658850'>Diffusion</span> <span m='3659240'>model</span> <span
  m='3659450'>says,</span> <span m='3662000'>this</span> <span
  m='3662860'>diffusion</span> <span m='3663250'>process</span> <span
  m='3663750'>is</span> <span m='3664160'>actually</span> <span
  m='3664450'>going</span> <span m='3664570'>to</span> <span
  m='3664630'>experience</span> <span m='3665210'>some</span> <span
  m='3665330'>shocks</span> <span m='3665780'>to</span> <span
  m='3665970'>it.</span> <span m='3666630'>Those</span> <span
  m='3666780'>shocks</span> <span m='3667620'>are</span> <span
  m='3667790'>going</span> <span m='3667950'>to</span> <span
  m='3668000'>be</span> <span m='3668160'>arriving</span> <span
  m='3668940'>according</span> <span m='3669250'>to</span> <span m='3669360'>a
  Poisson</span> <span m='3669960'>process.</span> <span m='3671010'>If</span>
  <span m='3671160'>you've</span> <span m='3671470'>taken</span> <span
  m='3671860'>stochastic</span> <span m='3672450'>modeling</span> <span
  m='3672740'>you</span> <span m='3672830'>know</span> <span m='3673090'>that
  that's</span> <span m='3674870'>a</span> <span m='3675060'>sort of a</span>
  <span m='3675330'>purely</span> <span m='3675810'>random</span> <span
  m='3676220'>process.</span> </p><p><span m='3677925'>Basically</span> <span
  m='3678380'>exponential</span> <span m='3679270'>arrival</span> <span
  m='3679760'>rate</span> <span m='3680040'>of</span> <span
  m='3681100'>shocks</span> <span m='3681410'>occur.</span> <span
  m='3681630'>You</span> <span m='3681780'>can't</span> <span
  m='3682040'>predict</span> <span m='3682430'>them.</span> <span
  m='3683740'>And</span> <span m='3684860'>when</span> <span
  m='3685160'>those</span> <span m='3685650'>occur,</span> <span
  m='3687360'>d</span> <span m='3687640'>pi</span> <span m='3687970'>of</span>
  <span m='3688120'>t</span> <span m='3688430'>is</span> <span
  m='3688630'>going</span> <span m='3688770'>to</span> <span
  m='3689090'>change</span> <span m='3689400'>from</span> <span
  m='3689660'>0</span> <span m='3690070'>up</span> <span m='3690480'>to</span>
  <span m='3690640'>the</span> <span m='3690890'>unit</span> <span
  m='3691210'>increments.</span> <span m='3691690'>So</span> <span
  m='3691850'>d</span> <span m='3692020'>pi of</span> <span m='3692320'>t</span>
  <span m='3692540'>is</span> <span m='3692690'>1.</span> <span
  m='3693740'>And</span> <span m='3693980'>then</span> <span
  m='3694170'>we'll</span> <span m='3694400'>realize</span> <span
  m='3694900'>gamma</span> <span m='3695550'>sigma</span> <span
  m='3695960'>z</span> <span m='3696220'>of</span> <span m='3696320'>t.</span>
  <span m='3696540'>So</span> <span m='3697730'>at</span> <span
  m='3698110'>this</span> <span m='3698490'>point</span> <span
  m='3699780'>we're</span> <span m='3699940'>going</span> <span
  m='3700050'>to</span> <span m='3700120'>have</span> <span
  m='3700600'>shocks.</span> <span m='3703580'>Here</span> <span
  m='3704670'>this</span> <span m='3704910'>is</span> <span
  m='3705040'>going</span> <span m='3705170'>to</span> <span
  m='3705250'>be</span> <span m='3706430'>gamma</span> <span
  m='3707270'>sigma</span> <span m='3708230'>z 1.</span> <span
  m='3709790'>And</span> <span m='3710070'>at this</span> <span
  m='3710270'>point,</span> <span m='3710900'>maybe</span> <span
  m='3711030'>it's</span> <span m='3711180'>a</span> <span
  m='3711240'>negative</span> <span m='3711600'>shock,</span> <span
  m='3712700'>gamma</span> <span m='3714770'>sigma</span> <span m='3715810'>z
  2</span> <span m='3717520'>of</span> <span m='3717960'>this</span> <span
  m='3718260'>is</span> <span m='3718400'>0.</span> </p><p><span
  m='3719440'>And</span> <span m='3719680'>so</span> <span
  m='3721100'>with</span> <span m='3721340'>this</span> <span
  m='3721670'>overall</span> <span m='3722110'>process</span> <span
  m='3722960'>we</span> <span m='3723120'>basically</span> <span
  m='3723400'>have</span> <span m='3723510'>a</span> <span
  m='3723570'>shift</span> <span m='3723990'>in</span> <span
  m='3724130'>the</span> <span m='3724330'>diffusion,</span> <span
  m='3724840'>up</span> <span m='3725110'>or</span> <span
  m='3725280'>down</span> <span m='3725720'>according</span> <span
  m='3726030'>to</span> <span m='3727090'>these</span> <span
  m='3727590'>values.</span> <span m='3728070'>And</span> <span
  m='3728260'>so</span> <span m='3728440'>this</span> <span
  m='3728720'>model</span> <span m='3729090'>allows</span> <span
  m='3729540'>for</span> <span m='3730320'>the</span> <span
  m='3730510'>arrival</span> <span m='3731050'>of</span> <span
  m='3731130'>these</span> <span m='3731290'>processes</span> <span
  m='3731750'>to</span> <span m='3731840'>be</span> <span
  m='3731980'>random</span> <span m='3732290'>according to the</span> <span
  m='3732640'>Poisson</span> <span m='3733000'>distribution,</span> <span
  m='3733870'>and</span> <span m='3734070'>for</span> <span
  m='3734160'>the</span> <span m='3734260'>magnitude</span> <span
  m='3734800'>of</span> <span m='3734870'>the</span> <span
  m='3734940'>shocks</span> <span m='3735510'>to</span> <span
  m='3735750'>be</span> <span m='3736780'>random</span> <span
  m='3737085'>as</span> <span m='3737390'>well.</span> </p><p><span
  m='3741350'>Now</span> <span m='3741510'>like</span> <span
  m='3741960'>the</span> <span m='3743570'>Geometric</span> <span
  m='3744020'>Brownian</span> <span m='3744310'>Motion</span> <span
  m='3744600'>model</span> <span m='3744740'>this</span> <span
  m='3744900'>process</span> <span m='3745865'>sort of</span> <span
  m='3746120'>has</span> <span m='3747500'>independent</span> <span
  m='3748250'>increments,</span> <span m='3750200'>which</span> <span
  m='3751350'>helps</span> <span m='3751660'>with</span> <span
  m='3752455'>this</span> <span m='3752870'>estimation.</span> <span
  m='3755630'>One</span> <span m='3755840'>could</span> <span
  m='3755970'>estimate</span> <span m='3756410'>this</span> <span
  m='3756560'>model</span> <span m='3756810'>by</span> <span
  m='3756960'>maximum</span> <span m='3757600'>likelihood,</span> <span
  m='3759550'>but</span> <span m='3759660'>it</span> <span
  m='3759760'>does</span> <span m='3759990'>get</span> <span
  m='3760200'>tricky</span> <span m='3760780'>in</span> <span
  m='3760930'>that</span> <span m='3762230'>basically</span> <span
  m='3763020'>over</span> <span m='3763350'>different</span> <span
  m='3763690'>increments</span> <span m='3764200'>of</span> <span
  m='3764320'>time</span> <span m='3765510'>the</span> <span
  m='3765620'>change</span> <span m='3765970'>in</span> <span
  m='3766050'>the</span> <span m='3766140'>process</span> <span
  m='3766760'>corresponds</span> <span m='3767430'>to</span> <span
  m='3768140'>the</span> <span m='3768260'>diffusion</span> <span
  m='3768850'>increment,</span> <span m='3770200'>plus</span> <span
  m='3771490'>the</span> <span m='3771610'>sum</span> <span
  m='3771960'>of</span> <span m='3772080'>the</span> <span
  m='3772550'>jumps</span> <span m='3772835'>that</span> <span
  m='3773120'>have</span> <span m='3773220'>occurred</span> <span
  m='3773550'>over</span> <span m='3773740'>that</span> <span
  m='3774410'>same</span> <span m='3774700'>increment.</span> </p><p><span
  m='3775820'>And</span> <span m='3776080'>so</span> <span
  m='3777310'>the</span> <span m='3777500'>model</span> <span
  m='3777890'>ultimately</span> <span m='3778430'>is</span> <span
  m='3778780'>a</span> <span m='3778920'>Poisson</span> <span
  m='3779580'>mixture</span> <span m='3781170'>of</span> <span
  m='3782220'>Gaussian</span> <span m='3782690'>distributions.</span> <span
  m='3785410'>And</span> <span m='3786470'>in</span> <span
  m='3786690'>order</span> <span m='3786930'>to</span> <span
  m='3787780'>evaluate</span> <span m='3788220'>this</span> <span
  m='3788380'>model,</span> <span m='3789790'>model's</span> <span
  m='3790130'>properties</span> <span m='3791040'>moment</span> <span
  m='3791360'>generating</span> <span m='3791780'>functions</span> <span
  m='3792240'>can</span> <span m='3792420'>be</span> <span
  m='3792860'>computed</span> <span m='3793640'>rather</span> <span
  m='3793920'>directly</span> <span m='3794370'>with</span> <span
  m='3794510'>that.</span> <span m='3795380'>And</span> <span
  m='3797200'>so</span> <span m='3797380'>we're</span> <span
  m='3797460'>one</span> <span m='3797590'>can</span> <span
  m='3797630'>understand</span> <span m='3798160'>how</span> <span
  m='3798380'>the</span> <span m='3798480'>moments</span> <span
  m='3798980'>of</span> <span m='3799080'>the</span> <span
  m='3799160'>process</span> <span m='3799650'>vary</span> <span
  m='3800000'>with</span> <span m='3800180'>these</span> <span
  m='3800380'>different</span> <span m='3800760'>model</span> <span
  m='3801040'>parameters.</span> <span m='3802410'>The</span> <span
  m='3802540'>likelihood</span> <span m='3802990'>function</span> <span
  m='3803890'>is</span> <span m='3804930'>a</span> <span
  m='3805030'>product</span> <span m='3805800'>of</span> <span
  m='3806420'>Poisson</span> <span m='3807360'>sums.</span> <span
  m='3808410'>And</span> <span m='3808730'>there's</span> <span
  m='3809040'>a</span> <span m='3809180'>closed</span> <span
  m='3809580'>form</span> <span m='3809860'>for</span> <span
  m='3810000'>the</span> <span m='3810190'>EM</span> <span
  m='3810630'>algorithm,</span> <span m='3811340'>which</span> <span
  m='3812270'>can</span> <span m='3812440'>be</span> <span
  m='3812520'>used</span> <span m='3812700'>to</span> <span
  m='3812740'>implement</span> <span m='3813330'>the</span> <span
  m='3813770'>estimation</span> <span m='3814280'>of</span> <span
  m='3814350'>the</span> <span m='3814460'>unknown</span> <span
  m='3814730'>parameters.</span> </p><p><span m='3817280'>And</span> <span
  m='3818580'>if</span> <span m='3818750'>you</span> <span
  m='3818880'>think</span> <span m='3819140'>about</span> <span
  m='3820680'>observing</span> <span m='3823090'>a</span> <span
  m='3823290'>Poisson</span> <span m='3823800'>Jump</span> <span
  m='3823940'>Diffusion</span> <span m='3824430'>process,</span> <span
  m='3825230'>if</span> <span m='3825450'>you</span> <span
  m='3825700'>knew</span> <span m='3830230'>where</span> <span
  m='3830580'>the</span> <span m='3830730'>jumps</span> <span
  m='3831090'>occurred,</span> <span m='3832070'>so</span> <span
  m='3832190'>you</span> <span m='3832290'>knew</span> <span
  m='3832700'>where</span> <span m='3832960'>the</span> <span
  m='3833050'>jumps</span> <span m='3833300'>occurred</span> <span
  m='3833740'>and</span> <span m='3833900'>how</span> <span
  m='3834070'>many</span> <span m='3834370'>there</span> <span
  m='3834500'>were</span> <span m='3834780'>per</span> <span
  m='3835390'>increment</span> <span m='3835700'>in</span> <span
  m='3836010'>your</span> <span m='3836130'>data,</span> <span
  m='3837080'>then</span> <span m='3839100'>the</span> <span
  m='3839360'>maximum</span> <span m='3839750'>likelihood</span> <span
  m='3840030'>estimation</span> <span m='3840490'>would</span> <span
  m='3840570'>all</span> <span m='3840710'>be</span> <span
  m='3840850'>very,</span> <span m='3841140'>very</span> <span
  m='3841240'>simple.</span> <span m='3843230'>And</span> <span
  m='3844070'>because</span> <span m='3844320'>this</span> <span
  m='3844570'>sort of</span> <span m='3844870'>is a</span> <span
  m='3844970'>separation</span> <span m='3845660'>of</span> <span
  m='3845910'>the</span> <span m='3846010'>estimation</span> <span
  m='3846500'>of</span> <span m='3846570'>the</span> <span
  m='3846690'>Gaussian</span> <span m='3847190'>parameters</span> <span
  m='3847840'>from</span> <span m='3848560'>the</span> <span
  m='3848650'>Poisson</span> <span m='3849090'>parameters.</span> </p><p><span
  m='3850940'>When</span> <span m='3851380'>you</span> <span
  m='3852180'>haven't</span> <span m='3852470'>observed</span> <span
  m='3852850'>those</span> <span m='3853050'>values</span> <span
  m='3853400'>then</span> <span m='3854100'>you</span> <span m='3854310'>need
  to</span> <span m='3854580'>deal</span> <span m='3854800'>with</span> <span
  m='3856600'>methods</span> <span m='3857410'>appropriate</span> <span
  m='3857970'>for</span> <span m='3858080'>missing</span> <span
  m='3858520'>data.</span> <span m='3858880'>And</span> <span
  m='3859010'>the</span> <span m='3859250'>EM</span> <span
  m='3859640'>algorithm</span> <span m='3860610'>is</span> <span
  m='3860770'>a</span> <span m='3860830'>very</span> <span
  m='3861130'>famous</span> <span m='3861610'>algorithm</span> <span
  m='3862480'>developed</span> <span m='3862910'>by</span> <span
  m='3863240'>the</span> <span m='3863450'>people</span> <span m='3863900'>up
  at</span> <span m='3864040'>Harvard,</span> <span m='3866190'>Rubin,</span>
  <span m='3866830'>Laird, and</span> <span m='3867140'>Dempster,</span> <span
  m='3868730'>which</span> <span m='3869960'>deals</span> <span
  m='3870380'>with</span> <span m='3872430'>basically</span> <span
  m='3873970'>if</span> <span m='3874460'>the</span> <span
  m='3874510'>problem</span> <span m='3874790'>is</span> <span
  m='3874870'>much</span> <span m='3875090'>simpler,</span> <span
  m='3875720'>if</span> <span m='3876370'>you</span> <span
  m='3876630'>could</span> <span m='3877820'>posit</span> <span
  m='3878670'>there</span> <span m='3878850'>being</span> <span
  m='3880380'>unobserved</span> <span m='3880890'>variables</span> <span
  m='3881240'>that you</span> <span m='3881370'>would</span> <span
  m='3881520'>observe,</span> <span m='3882090'>then</span> <span
  m='3882620'>you</span> <span m='3884360'>sort of</span> <span
  m='3884600'>expand</span> <span m='3885120'>the</span> <span
  m='3885210'>problem</span> <span m='3885840'>to</span> <span
  m='3886010'>include</span> <span m='3886410'>your</span> <span
  m='3886550'>observed</span> <span m='3886960'>data,</span> <span
  m='3887610'>plus</span> <span m='3888290'>the</span> <span
  m='3888370'>missing</span> <span m='3888770'>data,</span> <span
  m='3889470'>in</span> <span m='3889540'>this</span> <span
  m='3889700'>case</span> <span m='3890510'>where</span> <span
  m='3890700'>the</span> <span m='3890810'>jumps</span> <span
  m='3891120'>have</span> <span m='3891220'>occurred.</span> </p><p><span
  m='3892310'>And</span> <span m='3893090'>you</span> <span
  m='3893250'>then</span> <span m='3893870'>do</span> <span
  m='3894740'>conditional</span> <span m='3895380'>expectations</span> <span
  m='3897190'>of</span> <span m='3898250'>estimating</span> <span
  m='3898800'>those</span> <span m='3899080'>jumps.</span> <span
  m='3899850'>And</span> <span m='3900080'>then</span> <span
  m='3900710'>assuming</span> <span m='3901200'>that</span> <span
  m='3901360'>those</span> <span m='3901610'>jumps</span> <span
  m='3902490'>had</span> <span m='3902770'>those</span> <span
  m='3903560'>occurring</span> <span m='3904340'>with</span> <span
  m='3904450'>those</span> <span m='3904680'>frequencies,</span> <span
  m='3906070'>estimating</span> <span m='3906440'>the</span> <span
  m='3906700'>underlying</span> <span m='3906960'>parameters.</span> <span
  m='3907580'>So</span> <span m='3907940'>the</span> <span m='3908400'>EM</span>
  <span m='3908640'>algorithm</span> <span m='3908980'>is</span> <span
  m='3909100'>very</span> <span m='3909310'>powerful</span> <span
  m='3909800'>and</span> <span m='3909870'>has</span> <span
  m='3910690'>extensive</span> <span m='3913170'>applications</span> <span
  m='3913900'>in</span> <span m='3914210'>all</span> <span
  m='3914310'>kinds</span> <span m='3914550'>of</span> <span
  m='3914600'>different</span> <span m='3914840'>models.</span> </p><p><span
  m='3915840'>I'll</span> <span m='3916100'>put</span> <span
  m='3916270'>up</span> <span m='3916430'>on</span> <span m='3916500'>the</span>
  <span m='3916580'>website</span> <span m='3917100'>a</span> <span
  m='3917170'>paper</span> <span m='3917740'>that</span> <span
  m='3919010'>I</span> <span m='3919180'>wrote</span> <span
  m='3921100'>with</span> <span m='3921650'>David</span> <span m='3921990'>[?
  Packard ?]</span> <span m='3922550'>and</span> <span m='3923140'>his</span>
  <span m='3923310'>student,</span> <span m='3923620'>[INAUDIBLE],</span> <span
  m='3925850'>which</span> <span m='3927420'>goes</span> <span
  m='3927720'>through</span> <span m='3928270'>the</span> <span
  m='3929640'>Maximum</span> <span m='3930010'>Likelihood</span> <span
  m='3930470'>methodology</span> <span m='3931030'>for</span> <span
  m='3931150'>this.</span> <span m='3931600'>But</span> <span
  m='3932200'>looking</span> <span m='3932480'>at</span> <span
  m='3932560'>that,</span> <span m='3932890'>you</span> <span
  m='3932990'>can</span> <span m='3933020'>see</span> <span
  m='3933350'>how</span> <span m='3934980'>with</span> <span
  m='3935110'>an</span> <span m='3935210'>extended</span> <span
  m='3936040'>model,</span> <span m='3937350'>how</span> <span
  m='3938170'>Maximum</span> <span m='3938550'>Likelihood</span> <span
  m='3938880'>gets</span> <span m='3939110'>implemented</span> <span
  m='3939800'>and</span> <span m='3942390'>I</span> <span
  m='3942460'>think</span> <span m='3942620'>that's</span> <span
  m='3943110'>useful</span> <span m='3943420'>to</span> <span
  m='3943490'>see.</span> <span m='3944410'>All</span> <span
  m='3944500'>right.</span> </p><p><span m='3944890'>So</span> <span
  m='3944900'>let's</span> <span m='3945840'>turn</span> <span
  m='3947140'>next</span> <span m='3948043'>to</span> <span
  m='3950160'>ARCH</span> <span m='3950470'>models.</span> <span
  m='3951060'>And</span> <span m='3953250'>OK.</span> <span
  m='3954430'>Just</span> <span m='3954660'>as</span> <span m='3954780'>a</span>
  <span m='3954840'>bit</span> <span m='3954990'>of</span> <span
  m='3955100'>motivation</span> <span m='3961355'>the</span> <span
  m='3961840'>Geometric</span> <span m='3962330'>Brownian</span> <span
  m='3962650'>Motion</span> <span m='3962950'>model</span> <span
  m='3963250'>and</span> <span m='3963640'>also</span> <span
  m='3963920'>the</span> <span m='3964040'>Poisson</span> <span
  m='3964490'>Jump</span> <span m='3964690'>Diffusion</span> <span
  m='3965140'>model</span> <span m='3965640'>are</span> <span
  m='3965790'>models</span> <span m='3966280'>which</span> <span
  m='3966670'>assume</span> <span m='3967870'>that</span> <span
  m='3968840'>volatility</span> <span m='3969520'>over</span> <span
  m='3969730'>time</span> <span m='3970750'>is</span> <span
  m='3970950'>essentially</span> <span m='3972690'>stationary.</span> <span
  m='3974340'>And</span> <span m='3977480'>with</span> <span
  m='3977820'>the</span> <span m='3977870'>sort</span> <span
  m='3978030'>of</span> <span m='3978130'>independent</span> <span
  m='3978810'>increments</span> <span m='3979270'>of</span> <span
  m='3979340'>those</span> <span m='3979530'>processes,</span> <span
  m='3980470'>the</span> <span m='3980580'>volatility</span> <span
  m='3981230'>over</span> <span m='3981430'>different</span> <span
  m='3981690'>increments</span> <span m='3982160'>is</span> <span
  m='3982350'>essentially</span> <span m='3982810'>the</span> <span
  m='3982950'>same.</span> <span m='3983830'>So</span> <span
  m='3985490'>the</span> <span m='3986210'>ARCH</span> <span
  m='3986520'>models</span> <span m='3986940'>were</span> <span
  m='3987080'>introduced</span> <span m='3987650'>to</span> <span
  m='3988170'>accommodate</span> <span m='3989130'>the</span> <span
  m='3989330'>possibility</span> <span m='3990140'>that</span> <span
  m='3990480'>there's</span> <span m='3991440'>time</span> <span
  m='3991930'>dependence</span> <span m='3992520'>in</span> <span
  m='3992640'>volatility.</span> </p><p><span m='3997790'>And</span> <span
  m='3998000'>so</span> <span m='3999610'>let's</span> <span
  m='3999860'>see.</span> <span m='4007205'>Let's see.</span> <span
  m='4007540'>Let</span> <span m='4007650'>me</span> <span
  m='4007750'>go.</span> <span m='4010550'>OK.</span> <span
  m='4012020'>At</span> <span m='4012170'>the</span> <span
  m='4012230'>very</span> <span m='4012490'>end,</span> <span
  m='4012800'>I'll</span> <span m='4013300'>go</span> <span
  m='4013430'>through</span> <span m='4013620'>an</span> <span
  m='4013720'>example</span> <span m='4014250'>should</span> <span
  m='4014500'>showing</span> <span m='4014780'>that</span> <span
  m='4014970'>time</span> <span m='4015190'>dependence</span> <span
  m='4020460'>with</span> <span m='4020720'>our</span> <span
  m='4020880'>euro</span> <span m='4021490'>dollar</span> <span
  m='4021980'>exchange</span> <span m='4022500'>rates.</span> <span
  m='4024910'>So</span> <span m='4025090'>the</span> <span
  m='4025220'>set</span> <span m='4025410'>up</span> <span
  m='4025540'>for</span> <span m='4025620'>this</span> <span
  m='4025840'>model</span> <span m='4026590'>is</span> <span
  m='4028490'>basically</span> <span m='4029230'>we</span> <span
  m='4029370'>look</span> <span m='4029510'>at</span> <span
  m='4029570'>the</span> <span m='4029680'>log</span> <span
  m='4030100'>of</span> <span m='4030240'>the</span> <span
  m='4031050'>price</span> <span m='4031360'>relatives</span> <span
  m='4031980'>y t</span> <span m='4033370'>and</span> <span
  m='4035530'>we</span> <span m='4035690'>model</span> <span
  m='4036190'>the</span> <span m='4037560'>residuals</span> <span
  m='4039090'>to</span> <span m='4039320'>not</span> <span m='4039610'>be</span>
  <span m='4042530'>of</span> <span m='4042730'>constant</span> <span
  m='4043230'>volatility,</span> <span m='4044400'>but</span> <span
  m='4045230'>to</span> <span m='4045780'>be</span> <span
  m='4046190'>multiples</span> <span m='4046870'>of</span> <span
  m='4047200'>sort</span> <span m='4047400'>of</span> <span
  m='4048250'>white</span> <span m='4048610'>noise</span> <span
  m='4048970'>with</span> <span m='4049130'>mean</span> <span
  m='4049350'>0</span> <span m='4049580'>and</span> <span
  m='4049680'>variance</span> <span m='4050040'>1,</span> <span
  m='4051190'>where</span> <span m='4051720'>sigma</span> <span
  m='4052140'>t</span> <span m='4052900'>is</span> <span
  m='4053090'>given</span> <span m='4053410'>by</span> <span
  m='4054460'>this</span> <span m='4056460'>essentially</span> <span
  m='4056890'>ARCH</span> <span m='4057350'>function,</span> <span
  m='4057740'>which</span> <span m='4058920'>says</span> <span
  m='4059250'>that</span> <span m='4059390'>the</span> <span
  m='4059470'>volatility</span> <span m='4060280'>at</span> <span
  m='4060610'>a</span> <span m='4060710'>given</span> <span
  m='4060980'>period</span> <span m='4061360'>t</span> <span
  m='4062200'>is</span> <span m='4062510'>a</span> <span
  m='4062600'>weighted</span> <span m='4063020'>average</span> <span
  m='4063960'>of</span> <span m='4064890'>the</span> <span
  m='4065010'>squared</span> <span m='4066770'>residuals</span> <span
  m='4068020'>over</span> <span m='4068170'>the</span> <span
  m='4068680'>last</span> <span m='4069210'>p</span> <span
  m='4069430'>lags.</span> </p><p><span m='4070870'>And</span> <span
  m='4071070'>so</span> <span m='4071820'>if</span> <span
  m='4072320'>there's</span> <span m='4072680'>a</span> <span
  m='4072800'>large</span> <span m='4073770'>residual</span> <span
  m='4075940'>then</span> <span m='4076400'>that</span> <span
  m='4076800'>could</span> <span m='4077030'>persist</span> <span
  m='4079060'>and</span> <span m='4079520'>make</span> <span
  m='4079880'>the</span> <span m='4079970'>next</span> <span
  m='4082150'>observation</span> <span m='4082810'>have</span> <span
  m='4083010'>a</span> <span m='4083070'>large</span> <span
  m='4083520'>variance.</span> <span m='4084660'>And</span> <span
  m='4084890'>so</span> <span m='4085850'>this</span> <span
  m='4086510'>accommodates</span> <span m='4087070'>some</span> <span
  m='4089390'>time</span> <span m='4089770'>dependence.</span> <span
  m='4090310'>Now</span> <span m='4094470'>this</span> <span
  m='4094780'>model</span> <span m='4095190'>actually</span> <span
  m='4095810'>has</span> <span m='4096229'>parameter</span> <span
  m='4096890'>constraints,</span> <span m='4098229'>which</span> <span
  m='4098470'>are</span> <span m='4099750'>never</span> <span
  m='4100620'>a</span> <span m='4100740'>nice</span> <span
  m='4101060'>thing</span> <span m='4101220'>to</span> <span
  m='4101270'>have</span> <span m='4101790'>when</span> <span
  m='4101979'>you're</span> <span m='4102270'>fitting</span> <span
  m='4102630'>models.</span> </p><p><span m='4104410'>In</span> <span
  m='4104920'>this</span> <span m='4105130'>case</span> <span
  m='4105420'>the</span> <span m='4106439'>parameters</span> <span
  m='4107060'>alpha</span> <span m='4107430'>one</span> <span
  m='4107670'>through</span> <span m='4108080'>alpha p</span> <span
  m='4108290'>all</span> <span m='4108490'>have</span> <span
  m='4108700'>to</span> <span m='4108800'>be</span> <span
  m='4108960'>positive.</span> <span m='4110279'>And</span> <span
  m='4112310'>why</span> <span m='4112600'>do they</span> <span
  m='4112779'>have</span> <span m='4112939'>to be positive?</span> </p><p><span
  m='4116166'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='4117550'>PROFESSOR:
  Right.</span> <span m='4117970'>Variance</span> <span m='4118255'>is</span>
  <span m='4118540'>positive.</span> <span m='4119460'>So</span> <span
  m='4120069'>if</span> <span m='4120229'>any</span> <span m='4120399'>of</span>
  <span m='4120439'>these</span> <span m='4120630'>alphas</span> <span
  m='4121050'>were</span> <span m='4121210'>negative,</span> <span
  m='4122420'>then</span> <span m='4122609'>there</span> <span m='4122830'>would
  be</span> <span m='4122970'>a</span> <span m='4123020'>possibility</span>
  <span m='4123425'>that</span> <span m='4123830'>under</span> <span
  m='4124000'>this</span> <span m='4124130'>model</span> <span
  m='4124500'>that</span> <span m='4124620'>you</span> <span
  m='4124700'>could</span> <span m='4124790'>have</span> <span
  m='4124930'>negative</span> <span m='4125620'>volatility,</span> <span
  m='4126250'>which</span> <span m='4126550'>you</span> <span
  m='4126700'>can't.</span> <span m='4127020'>So</span> <span
  m='4133470'>if</span> <span m='4133609'>we</span> <span
  m='4133740'>estimate</span> <span m='4134109'>this</span> <span
  m='4134200'>model</span> <span m='4134510'>to</span> <span
  m='4134600'>estimate</span> <span m='4135000'>them</span> <span
  m='4135109'>with</span> <span m='4135240'>the</span> <span
  m='4135310'>constraint</span> <span m='4135750'>that</span> <span
  m='4135850'>all</span> <span m='4136270'>these</span> <span
  m='4136490'>parameter</span> <span m='4136779'>values</span> <span
  m='4137729'>are</span> <span m='4138310'>non-negative.</span> <span
  m='4140979'>So</span> <span m='4141140'>that</span> <span
  m='4141300'>does</span> <span m='4141529'>complicate</span> <span
  m='4142100'>the</span> <span m='4144260'>estimation</span> <span m='4144990'>a
  bit.</span> </p><p><span m='4146529'>In</span> <span m='4146710'>terms</span>
  <span m='4147010'>of</span> <span m='4147130'>understanding</span> <span
  m='4148149'>how</span> <span m='4148410'>this</span> <span
  m='4148620'>process</span> <span m='4149109'>works</span> <span
  m='4152580'>one</span> <span m='4152830'>can</span> <span
  m='4152970'>actually</span> <span m='4153670'>see</span> <span
  m='4154260'>how</span> <span m='4155370'>the</span> <span
  m='4155640'>ARCH</span> <span m='4155970'>model</span> <span
  m='4156410'>implies</span> <span m='4157880'>an</span> <span
  m='4158040'>autoregressive</span> <span m='4158790'>model</span> <span
  m='4159689'>for</span> <span m='4159990'>the</span> <span
  m='4160160'>squared</span> <span m='4160590'>residuals,</span> <span
  m='4161479'>which</span> <span m='4163500'>turns</span> <span
  m='4163870'>out</span> <span m='4164020'>to</span> <span m='4164080'>be</span>
  <span m='4164160'>useful.</span> <span m='4164450'>So</span> <span
  m='4165290'>the</span> <span m='4165450'>top</span> <span
  m='4165750'>line</span> <span m='4166020'>there</span> <span
  m='4166250'>is</span> <span m='4166590'>the</span> <span
  m='4166790'>ARCH</span> <span m='4167080'>model</span> <span
  m='4168380'>saying</span> <span m='4168660'>that</span> <span
  m='4168810'>the</span> <span m='4168890'>variance</span> <span
  m='4169450'>of</span> <span m='4169569'>the</span> <span m='4169660'>t</span>
  <span m='4169899'>period</span> <span m='4170229'>return</span> <span
  m='4171149'>is</span> <span m='4171510'>this</span> <span
  m='4171710'>weighted</span> <span m='4172080'>average</span> <span
  m='4172340'>of</span> <span m='4172430'>the</span> <span
  m='4172540'>past</span> <span m='4172930'>residuals.</span> <span
  m='4175000'>And</span> <span m='4175160'>then</span> <span
  m='4175380'>if</span> <span m='4175649'>we</span> <span
  m='4176090'>simply</span> <span m='4176640'>add</span> <span
  m='4178580'>a</span> <span m='4178720'>new</span> <span
  m='4178939'>variable</span> <span m='4179470'>u t,</span> <span
  m='4180870'>which</span> <span m='4181229'>is</span> <span
  m='4182899'>our</span> <span m='4183470'>squared</span> <span
  m='4183850'>residual</span> <span m='4184330'>minus</span> <span
  m='4184830'>its</span> <span m='4185080'>variance,</span> <span
  m='4187850'>to</span> <span m='4187990'>both</span> <span
  m='4188250'>sides</span> <span m='4191399'>we</span> <span
  m='4191560'>get</span> <span m='4191770'>the</span> <span
  m='4191850'>next</span> <span m='4192630'>line,</span> <span
  m='4193720'>which</span> <span m='4193990'>says</span> <span
  m='4194450'>that</span> <span m='4194890'>epsilon</span> <span
  m='4195360'>t</span> <span m='4195540'>squared</span> <span
  m='4195970'>is</span> <span m='4198750'>follows</span> <span
  m='4199020'>an</span> <span m='4199370'>auto-regression</span> <span
  m='4199720'>on</span> <span m='4199840'>itself</span> <span
  m='4200970'>with</span> <span m='4202140'>the</span> <span m='4202780'>u
  t</span> <span m='4204340'>value</span> <span m='4205550'>being</span> <span
  m='4207230'>the</span> <span m='4208560'>disturbance</span> <span
  m='4209250'>in</span> <span m='4209380'>that</span> <span
  m='4209570'>auto-regression.</span> </p><p><span m='4210800'>Now</span> <span
  m='4210990'>u t,</span> <span m='4212130'>which</span> <span
  m='4212350'>is</span> <span m='4212750'>epsilon</span> <span
  m='4213280'>t</span> <span m='4213470'>squared</span> <span
  m='4213800'>minus</span> <span m='4214100'>sigma</span> <span
  m='4214340'>squared</span> <span m='4214710'>t,</span> <span
  m='4217230'>what</span> <span m='4217470'>is</span> <span
  m='4217660'>the</span> <span m='4217760'>mean</span> <span
  m='4218070'>of</span> <span m='4218170'>that?</span> <span
  m='4221150'>The</span> <span m='4221250'>mean</span> <span
  m='4221490'>is</span> <span m='4221620'>0.</span> <span m='4223220'>So</span>
  <span m='4223770'>it's</span> <span m='4223950'>almost</span> <span
  m='4224270'>white</span> <span m='4224520'>noise.</span> <span
  m='4225030'>But</span> <span m='4225590'>its</span> <span
  m='4225810'>variance</span> <span m='4227120'>is</span> <span
  m='4227710'>maybe</span> <span m='4228020'>going</span> <span
  m='4228130'>to</span> <span m='4228220'>change</span> <span
  m='4228560'>over</span> <span m='4228660'>time.</span> <span
  m='4228920'>So</span> <span m='4228940'>it's</span> <span
  m='4229080'>not</span> <span m='4229420'>sort of</span> <span
  m='4229660'>standard</span> <span m='4230360'>white</span> <span
  m='4230630'>noise,</span> <span m='4231130'>but</span> <span
  m='4231190'>it</span> <span m='4233550'>basically</span> <span
  m='4233880'>has</span> <span m='4234090'>expectation 0.</span> <span
  m='4234950'>It's</span> <span m='4235260'>also</span> <span
  m='4236800'>the</span> <span m='4237090'>conditional</span> <span
  m='4237500'>independence,</span> <span m='4238040'>but</span> <span
  m='4238230'>there's</span> <span m='4238400'>some</span> <span
  m='4239290'>possible</span> <span m='4239630'>variability</span> <span
  m='4240220'>there.</span> </p><p><span m='4240850'>But</span> <span
  m='4241120'>what</span> <span m='4241380'>this</span> <span
  m='4241770'>implies</span> <span m='4242280'>is</span> <span
  m='4242360'>that</span> <span m='4242490'>there</span> <span
  m='4242630'>basically</span> <span m='4242930'>is</span> <span
  m='4243300'>an</span> <span m='4243470'>autoregressive</span> <span
  m='4244250'>model</span> <span m='4245170'>where</span> <span
  m='4245410'>we</span> <span m='4245530'>just</span> <span
  m='4245770'>have</span> <span m='4245980'>time</span> <span
  m='4246340'>varying</span> <span m='4247690'>variances</span> <span
  m='4248480'>in</span> <span m='4248790'>the</span> <span
  m='4248920'>underlying</span> <span m='4249180'>process.</span> <span
  m='4250190'>Now</span> <span m='4250360'>because</span> <span
  m='4250750'>of</span> <span m='4250890'>that</span> <span
  m='4252250'>one</span> <span m='4252640'>can</span> <span
  m='4253050'>sort</span> <span m='4253180'>of</span> <span
  m='4253280'>quickly</span> <span m='4253820'>evaluate</span> <span
  m='4254410'>whether</span> <span m='4254710'>there's</span> <span
  m='4255190'>ARCH</span> <span m='4255530'>structure</span> <span
  m='4256150'>in</span> <span m='4256460'>data</span> <span
  m='4257120'>by</span> <span m='4257340'>simply</span> <span
  m='4257690'>fitting</span> <span m='4257990'>an</span> <span
  m='4258330'>autoregressive</span> <span m='4258670'>model</span> <span
  m='4258960'>to</span> <span m='4259080'>the</span> <span
  m='4259200'>squared</span> <span m='4259620'>residuals.</span> <span
  m='4260970'>And</span> <span m='4261620'>testing</span> <span
  m='4262020'>whether</span> <span m='4262280'>that</span> <span
  m='4262510'>regression is</span> <span m='4262990'>significant</span> <span
  m='4263255'>or not.</span> <span m='4264660'>And</span> <span
  m='4265750'>that</span> <span m='4266050'>formally</span> <span
  m='4266800'>is</span> <span m='4267490'>a</span> <span
  m='4267620'>Lagrange</span> <span m='4268080'>multiplier</span> <span
  m='4268620'>test.</span> <span m='4268940'>Some</span> <span
  m='4269080'>of</span> <span m='4269130'>the</span> <span
  m='4269240'>original</span> <span m='4269570'>papers</span> <span
  m='4269960'>by</span> <span m='4270290'>[? Engle ?]</span> <span
  m='4270850'>go</span> <span m='4271010'>through</span> <span
  m='4271280'>that</span> <span m='4271650'>analysis.</span> <span
  m='4273490'>And</span> <span m='4275120'>the</span> <span
  m='4276250'>test</span> <span m='4276510'>statistic</span> <span
  m='4277060'>turns</span> <span m='4277340'>out</span> <span
  m='4277510'>to</span> <span m='4277600'>just</span> <span
  m='4277880'>be</span> <span m='4278710'>the</span> <span
  m='4279720'>multiple</span> <span m='4280430'>of</span> <span m='4280570'>the
  r</span> <span m='4280690'>squared</span> <span m='4281270'>for</span> <span
  m='4283080'>that</span> <span m='4283270'>regression</span> <span
  m='4283740'>fit.</span> </p><p><span m='4284620'>And</span> <span
  m='4286040'>basically</span> <span m='4291820'>under,</span> <span
  m='4292550'>say,</span> <span m='4292740'>a</span> <span
  m='4292820'>null</span> <span m='4293120'>hypothesis,</span> <span
  m='4293690'>that</span> <span m='4293860'>there</span> <span
  m='4294010'>isn't</span> <span m='4294270'>any</span> <span
  m='4294460'>ARCH</span> <span m='4294750'>structure,</span> <span
  m='4295820'>then</span> <span m='4295980'>this</span> <span
  m='4296170'>regression</span> <span m='4296630'>model</span> <span
  m='4296890'>should</span> <span m='4297040'>have</span> <span
  m='4297960'>no</span> <span m='4298170'>predictability.</span> <span
  m='4300290'>This</span> <span m='4300470'>ARCH</span> <span
  m='4300770'>model</span> <span m='4301070'>in</span> <span
  m='4301160'>the</span> <span m='4301240'>residuals,</span> <span
  m='4301820'>basically</span> <span m='4302140'>if</span> <span
  m='4302220'>there's</span> <span m='4302390'>no</span> <span
  m='4302590'>time</span> <span m='4302870'>dependence</span> <span
  m='4303400'>in</span> <span m='4303520'>those</span> <span
  m='4304370'>residuals,</span> <span m='4305920'>that's</span> <span
  m='4306210'>evidence</span> <span m='4307310'>of</span> <span
  m='4310370'>there</span> <span m='4310590'>being</span> <span
  m='4310800'>an</span> <span m='4310890'>absence</span> <span
  m='4311310'>of</span> <span m='4311400'>ARCH</span> <span
  m='4311610'>structure.</span> <span m='4312620'>And</span> <span
  m='4313120'>so</span> <span m='4313410'>under</span> <span
  m='4313840'>the</span> <span m='4314040'>null</span> <span
  m='4314260'>hypothesis</span> <span m='4314850'>of</span> <span
  m='4314970'>no</span> <span m='4315160'>ARCH</span> <span
  m='4315410'>structure</span> <span m='4316640'>that</span> <span
  m='4316950'>r</span> <span m='4317150'>squared</span> <span
  m='4318270'>statistic</span> <span m='4318860'>should</span> <span
  m='4319070'>be</span> <span m='4319290'>small.</span> <span
  m='4319580'>It</span> <span m='4319870'>turns</span> <span
  m='4320150'>out</span> <span m='4320730'>that</span> <span m='4321820'>sort
  of</span> <span m='4322070'>n</span> <span m='4322350'>times</span> <span
  m='4322640'>the r</span> <span m='4322930'>squared</span> <span
  m='4323540'>statistic</span> <span m='4324260'>with</span> <span
  m='4324520'>p</span> <span m='4324710'>variables</span> <span
  m='4325820'>is</span> <span m='4327580'>asymptotically</span> <span
  m='4328230'>a chi-square</span> <span m='4328700'>distribution</span> <span
  m='4329220'>with</span> <span m='4329580'>p</span> <span
  m='4329730'>degrees</span> <span m='4330060'>of</span> <span
  m='4330150'>freedom.</span> <span m='4331370'>So</span> <span
  m='4331510'>that's</span> <span m='4334200'>where</span> <span
  m='4334450'>that</span> <span m='4334870'>test</span> <span
  m='4335090'>statistic</span> <span m='4335500'>comes</span> <span
  m='4335720'>into</span> <span m='4335930'>play.</span> </p><p><span
  m='4337760'>And</span> <span m='4339520'>in</span> <span
  m='4340170'>implementing</span> <span m='4340660'>this</span> <span
  m='4340870'>the</span> <span m='4340950'>fact</span> <span
  m='4341330'>that</span> <span m='4342040'>we</span> <span
  m='4342310'>were</span> <span m='4342780'>applying</span> <span
  m='4343180'>essentially</span> <span m='4343590'>least</span> <span
  m='4343810'>squares</span> <span m='4344260'>with</span> <span
  m='4344350'>the</span> <span m='4344460'>outer-regression</span> <span
  m='4345630'>to</span> <span m='4345740'>implement</span> <span
  m='4346130'>this</span> <span m='4347510'>Lagrange</span> <span
  m='4347840'>multiplier</span> <span m='4348320'>test,</span> <span
  m='4350190'>but</span> <span m='4350470'>we</span> <span
  m='4350620'>were</span> <span m='4350900'>assuming,</span> <span
  m='4352300'>well,</span> <span m='4352720'>we're</span> <span
  m='4352970'>not</span> <span m='4353140'>assuming,</span> <span
  m='4353530'>we're</span> <span m='4353660'>implicitly</span> <span
  m='4354220'>assuming</span> <span m='4354670'>the</span> <span
  m='4354810'>assumptions</span> <span m='4355290'>of</span> <span
  m='4355420'>Gauss-Markov</span> <span m='4355980'>in</span> <span
  m='4356270'>fitting</span> <span m='4356530'>that.</span> <span
  m='4357730'>This</span> <span m='4357960'>corresponds</span> <span
  m='4358770'>to</span> <span m='4360140'>the</span> <span
  m='4360300'>notion</span> <span m='4360640'>of</span> <span
  m='4360790'>quasi-Maximum</span> <span m='4362490'>Likelihood</span> <span
  m='4362920'>estimates</span> <span m='4365650'>for</span> <span
  m='4365810'>unknown</span> <span m='4366140'>parameters.</span> <span
  m='4367040'>And</span> <span m='4367250'>quasi-Maximum</span> <span
  m='4369170'>Likelihood</span> <span m='4369540'>estimates</span> <span
  m='4371870'>[? ru's ?]</span> <span m='4372220'>are</span> <span
  m='4372630'>extensively</span> <span m='4373470'>in</span> <span
  m='4374110'>some</span> <span m='4374260'>stochastic</span> <span
  m='4375010'>volatility</span> <span m='4375610'>models.</span> </p><p><span
  m='4376570'>And</span> <span m='4376710'>so</span> <span
  m='4376830'>essentially</span> <span m='4377360'>situations</span> <span
  m='4377950'>where</span> <span m='4378180'>you</span> <span
  m='4378630'>sort</span> <span m='4378850'>of use</span> <span
  m='4379140'>the</span> <span m='4379230'>normal</span> <span
  m='4379550'>approximation,</span> <span m='4381580'>or</span> <span
  m='4381650'>the</span> <span m='4381770'>second</span> <span
  m='4382040'>order</span> <span m='4382220'>approximation</span> <span
  m='4384180'>to</span> <span m='4384280'>get</span> <span
  m='4384390'>your</span> <span m='4384510'>estimates,</span> <span
  m='4384960'>and</span> <span m='4385170'>they</span> <span
  m='4385300'>turn</span> <span m='4385520'>out</span> <span
  m='4385870'>to</span> <span m='4386120'>be</span> <span
  m='4389460'>consistent</span> <span m='4390030'>and</span> <span
  m='4391780'>decent.</span> </p><p><span m='4396570'>All right.</span> <span
  m='4398590'>Let's</span> <span m='4399000'>go</span> <span
  m='4399120'>to</span> <span m='4399210'>Maximum</span> <span
  m='4399780'>Likelihood</span> <span m='4400210'>Estimation.</span> <span
  m='4400700'>OK</span> <span m='4400890'>Maximum</span> <span
  m='4401420'>Likelihood</span> <span m='4401760'>Estimation</span> <span
  m='4403370'>basically</span> <span m='4403800'>involves--</span> <span
  m='4406540'>the</span> <span m='4406630'>hard</span> <span
  m='4406930'>part</span> <span m='4407140'>is</span> <span
  m='4407270'>defining</span> <span m='4407760'>the</span> <span
  m='4407870'>likelihood</span> <span m='4408350'>function,</span> <span
  m='4409510'>which</span> <span m='4410000'>is</span> <span
  m='4410480'>the</span> <span m='4412250'>density</span> <span
  m='4412820'>of</span> <span m='4413030'>the</span> <span
  m='4413110'>data</span> <span m='4413460'>given</span> <span
  m='4413700'>the</span> <span m='4413820'>unknown</span> <span
  m='4414140'>parameters.</span> <span m='4415290'>In</span> <span
  m='4415430'>this</span> <span m='4415640'>case,</span> <span
  m='4416460'>the</span> <span m='4416580'>data</span> <span
  m='4416950'>are</span> <span m='4417880'>conditionally</span> <span
  m='4420390'>independent.</span> </p><p><span m='4430630'>The</span> <span
  m='4430810'>joint</span> <span m='4431110'>density</span> <span
  m='4431590'>is</span> <span m='4431710'>the</span> <span
  m='4431810'>product</span> <span m='4432300'>of</span> <span
  m='4433010'>the</span> <span m='4433470'>density</span> <span
  m='4434020'>of</span> <span m='4434110'>yt</span> <span
  m='4434790'>given</span> <span m='4435080'>the</span> <span
  m='4435370'>information</span> <span m='4435645'>at</span> <span
  m='4435920'>t</span> <span m='4436080'>minus</span> <span
  m='4436400'>1.</span> <span m='4436570'>So</span> <span
  m='4438180'>basically</span> <span m='4438490'>the</span> <span
  m='4438610'>joint</span> <span m='4439010'>probability</span> <span
  m='4439600'>density</span> <span m='4440520'>is</span> <span
  m='4440700'>the</span> <span m='4440810'>density</span> <span
  m='4441180'>at</span> <span m='4441240'>each</span> <span
  m='4441550'>time</span> <span m='4441900'>point</span> <span
  m='4442280'>conditional</span> <span m='4442700'>on</span> <span
  m='4442820'>the</span> <span m='4442910'>past,</span> <span
  m='4443660'>and</span> <span m='4443820'>then the</span> <span
  m='4444210'>density</span> <span m='4444740'>times</span> <span
  m='4445050'>the</span> <span m='4445140'>density</span> <span m='4445300'>of
  the</span> <span m='4445390'>next</span> <span m='4445590'>time</span> <span
  m='4445760'>point</span> <span m='4446020'>conditional</span> <span
  m='4446310'>on</span> <span m='4446360'>the</span> <span
  m='4446440'>past.</span> <span m='4447130'>And</span> <span
  m='4447310'>those</span> <span m='4447500'>are</span> <span
  m='4447580'>all</span> <span m='4448020'>normal</span> <span
  m='4448610'>random</span> <span m='4449350'>variables.</span> <span
  m='4449730'>So</span> <span m='4449850'>these</span> <span
  m='4450080'>are</span> <span m='4450120'>the</span> <span
  m='4450230'>normal</span> <span m='4451530'>PDFs</span> <span
  m='4452040'>coming</span> <span m='4452340'>into</span> <span
  m='4452530'>play</span> <span m='4452840'>here.</span> </p><p><span
  m='4453760'>And</span> <span m='4453870'>so</span> <span
  m='4454260'>what</span> <span m='4454510'>we</span> <span
  m='4454600'>want</span> <span m='4454770'>to</span> <span
  m='4454840'>do</span> <span m='4455090'>is</span> <span
  m='4455860'>basically</span> <span m='4456170'>maximize</span> <span
  m='4456980'>this</span> <span m='4457250'>likelihood</span> <span
  m='4457790'>function</span> <span m='4458150'>subject</span> <span
  m='4458600'>to</span> <span m='4458690'>these</span> <span
  m='4459020'>constraints.</span> <span m='4462040'>And</span> <span
  m='4462530'>we</span> <span m='4462750'>already</span> <span
  m='4463030'>went</span> <span m='4463240'>through</span> <span
  m='4463450'>the</span> <span m='4463540'>fact</span> <span
  m='4463820'>that</span> <span m='4463950'>the</span> <span m='4464030'>[?
  alphis ?]</span> <span m='4464300'>have</span> <span m='4464450'>to</span>
  <span m='4464530'>be</span> <span m='4464620'>greater</span> <span
  m='4464830'>than</span> <span m='4465010'>zero,</span> <span
  m='4465890'>And</span> <span m='4467155'>it</span> <span
  m='4467560'>turns</span> <span m='4467800'>out</span> <span
  m='4468030'>you</span> <span m='4468150'>also</span> <span
  m='4468350'>have</span> <span m='4468630'>to</span> <span
  m='4468750'>have</span> <span m='4469080'>that</span> <span
  m='4469260'>the</span> <span m='4469370'>sum</span> <span
  m='4469670'>of</span> <span m='4469720'>the</span> <span
  m='4469880'>alphas</span> <span m='4470270'>is</span> <span
  m='4470460'>less</span> <span m='4470710'>than</span> <span
  m='4470870'>one.</span> <span m='4473250'>Now</span> <span
  m='4473370'>what</span> <span m='4473520'>would</span> <span
  m='4473620'>happen</span> <span m='4473920'>if</span> <span
  m='4474030'>the</span> <span m='4474120'>sum</span> <span
  m='4474340'>of</span> <span m='4474390'>the</span> <span
  m='4474500'>alphas</span> <span m='4475040'>was not</span> <span
  m='4475470'>less</span> <span m='4475590'>than</span> <span
  m='4476084'>one?</span> </p><p><span m='4480036'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='4482020'>PROFESSOR: Right.</span> <span m='4482560'>And</span>
  <span m='4482610'>you</span> <span m='4482760'>basically</span> <span
  m='4483220'>could have</span> <span m='4483500'>the</span> <span
  m='4483600'>process</span> <span m='4484130'>start</span> <span
  m='4484550'>diverging.</span> <span m='4485680'>Basically</span> <span
  m='4486510'>these</span> <span m='4487590'>auto-regressions</span> <span
  m='4489730'>can</span> <span m='4489880'>explode.</span> <span
  m='4490570'>So</span> <span m='4491350'>let's</span> <span
  m='4491600'>go</span> <span m='4491730'>through</span> <span
  m='4491990'>and</span> <span m='4492120'>see.</span> <span
  m='4497640'>Let's</span> <span m='4497760'>see.</span> <span
  m='4500828'>Actually,</span> <span m='4501290'>we're</span> <span
  m='4501570'>going</span> <span m='4501850'>to</span> <span
  m='4503190'>go</span> <span m='4503390'>to</span> <span
  m='4505510'>GARCH</span> <span m='4505835'>models</span> <span
  m='4506160'>next.</span> <span m='4506570'>OK.</span> <span
  m='4508820'>Let's</span> <span m='4509020'>see.</span> <span m='4517710'>Let
  me just</span> <span m='4518000'>go back</span> <span m='4518290'>here</span>
  <span m='4518585'>a second.</span> <span m='4518880'>OK.</span> <span
  m='4519270'>Very good.</span> </p><p><span m='4520200'>OK.</span> <span
  m='4521160'>In</span> <span m='4521250'>the</span> <span
  m='4521740'>remaining</span> <span m='4522200'>few</span> <span
  m='4522360'>minutes</span> <span m='4522610'>let</span> <span
  m='4522700'>me</span> <span m='4522970'>just</span> <span
  m='4523180'>introduce</span> <span m='4523620'>you</span> <span
  m='4523780'>to</span> <span m='4524910'>the</span> <span
  m='4527640'>GARCH</span> <span m='4528050'>models.</span> <span
  m='4536560'>The</span> <span m='4536770'>GARCH</span> <span m='4537090'>model 
  is</span> <span m='4542990'>basically</span> <span m='4543320'>a</span> <span
  m='4543400'>series</span> <span m='4543960'>of</span> <span
  m='4544220'>past</span> <span m='4544620'>values</span> <span
  m='4544980'>of</span> <span m='4545060'>the</span> <span
  m='4545170'>squared</span> <span m='4545490'>volatilities,</span> <span
  m='4546610'>basically</span> <span m='4547830'>the</span> <span
  m='4547970'>q</span> <span m='4548520'>sum</span> <span m='4549260'>of</span>
  <span m='4550870'>past</span> <span m='4551290'>squared</span> <span
  m='4552190'>volatilities</span> <span m='4555860'>for the</span> <span
  m='4556980'>equation</span> <span m='4557470'>for</span> <span
  m='4558380'>the</span> <span m='4558510'>volatility</span> <span
  m='4559100'>sigma</span> <span m='4559410'>t</span> <span
  m='4559610'>squared.</span> </p><p><span m='4560620'>And</span> <span
  m='4561210'>so</span> <span m='4564340'>it</span> <span m='4564440'>may</span>
  <span m='4564540'>be</span> <span m='4564790'>that</span> <span
  m='4565330'>very</span> <span m='4565590'>high</span> <span
  m='4565880'>order</span> <span m='4566300'>ARCH</span> <span
  m='4566640'>models</span> <span m='4567110'>are</span> <span
  m='4567230'>actually</span> <span m='4567710'>important.</span> <span
  m='4569760'>Or</span> <span m='4573530'>very</span> <span
  m='4573790'>high</span> <span m='4574000'>order</span> <span
  m='4574580'>ARCH</span> <span m='4574940'>terms</span> <span
  m='4575630'>are</span> <span m='4576280'>found</span> <span
  m='4576670'>to</span> <span m='4576750'>be</span> <span
  m='4576890'>significant</span> <span m='4577410'>when</span> <span
  m='4577550'>you</span> <span m='4577640'>fit</span> <span
  m='4578040'>ARCH</span> <span m='4578370'>models.</span> <span
  m='4580680'>It</span> <span m='4580860'>could</span> <span
  m='4581120'>be</span> <span m='4581510'>that</span> <span
  m='4583480'>much</span> <span m='4583770'>of</span> <span
  m='4583870'>that</span> <span m='4585060'>need</span> <span
  m='4585610'>is</span> <span m='4585910'>explained</span> <span
  m='4586750'>by</span> <span m='4587130'>adding</span> <span
  m='4587530'>these</span> <span m='4588700'>GARCH</span> <span
  m='4589070'>terms.</span> <span m='4589540'>And</span> <span
  m='4589730'>so</span> <span m='4590570'>let's</span> <span
  m='4590870'>just</span> <span m='4591060'>consider</span> <span
  m='4591520'>a</span> <span m='4591600'>simple</span> <span
  m='4592140'>GARCH</span> <span m='4592520'>model</span> <span
  m='4593400'>where</span> <span m='4593660'>we</span> <span
  m='4593770'>have</span> <span m='4594790'>only</span> <span
  m='4595090'>a</span> <span m='4595150'>first</span> <span
  m='4595470'>order</span> <span m='4595760'>ARCH</span> <span
  m='4596180'>term</span> <span m='4597040'>and</span> <span
  m='4597830'>a</span> <span m='4598860'>first</span> <span
  m='4599190'>order</span> <span m='4599610'>GARCH</span> <span
  m='4600020'>term.</span> </p><p><span m='4600830'>So</span> <span
  m='4601880'>we're</span> <span m='4602080'>basically</span> <span
  m='4602550'>saying</span> <span m='4602880'>that</span> <span
  m='4603030'>this</span> <span m='4603230'>is</span> <span m='4603880'>a</span>
  <span m='4604010'>weighted</span> <span m='4604470'>average</span> <span
  m='4605800'>of</span> <span m='4606750'>the</span> <span
  m='4606870'>previous</span> <span m='4607300'>volatility,</span> <span
  m='4608470'>the</span> <span m='4608650'>new</span> <span
  m='4609470'>squared</span> <span m='4609860'>residual.</span> <span
  m='4611210'>And</span> <span m='4611420'>this</span> <span
  m='4613260'>is</span> <span m='4613970'>a</span> <span m='4614070'>very</span>
  <span m='4614340'>parsimonious</span> <span m='4616950'>representation</span>
  <span m='4618060'>that</span> <span m='4618200'>actually</span> <span
  m='4618580'>ends</span> <span m='4618800'>up</span> <span
  m='4618920'>fitting</span> <span m='4619250'>data</span> <span
  m='4620060'>quite,</span> <span m='4620350'>quite</span> <span
  m='4620640'>well.</span> <span m='4621630'>And</span> <span
  m='4624970'>there</span> <span m='4625220'>are</span> <span
  m='4625250'>various</span> <span m='4625620'>properties</span> <span
  m='4626210'>of</span> <span m='4626470'>this</span> <span
  m='4626870'>GARCH</span> <span m='4627240'>model</span> <span
  m='4627710'>which</span> <span m='4630950'>we'll</span> <span
  m='4631230'>go</span> <span m='4631450'>through</span> <span
  m='4631720'>next</span> <span m='4632060'>time,</span> <span
  m='4632270'>but</span> <span m='4632400'>I</span> <span
  m='4632580'>want</span> <span m='4632770'>to</span> <span
  m='4632850'>just</span> <span m='4633215'>close</span> <span
  m='4633580'>this</span> <span m='4633810'>lecture</span> <span
  m='4634260'>by</span> <span m='4634410'>showing</span> <span
  m='4634860'>you</span> <span m='4635530'>fits</span> <span
  m='4637090'>so</span> <span m='4637270'>the</span> <span
  m='4637820'>ARCH</span> <span m='4638180'>models</span> <span
  m='4639020'>and</span> <span m='4639710'>of this</span> <span
  m='4640010'>GARCH</span> <span m='4640290'>model</span> <span
  m='4640750'>to</span> <span m='4641180'>the</span> <span
  m='4642360'>euro</span> <span m='4642710'>dollar</span> <span
  m='4643510'>exchange</span> <span m='4643970'>rate</span> <span
  m='4644380'>process.</span> <span m='4645500'>So</span> <span
  m='4645720'>let's</span> <span m='4645920'>just</span> <span m='4646260'>look
  at</span> <span m='4646741'>that</span> <span m='4650590'>here.</span> <span
  m='4654528'>OK.</span> <span m='4660950'>OK.</span> </p><p><span
  m='4661200'>With</span> <span m='4661410'>the</span> <span
  m='4661510'>euro</span> <span m='4661770'>dollar</span> <span
  m='4662510'>exchange</span> <span m='4663070'>rate,</span> <span
  m='4664160'>actually</span> <span m='4665400'>there's</span> <span
  m='4665580'>the</span> <span m='4665660'>graph</span> <span
  m='4666250'>here</span> <span m='4666910'>which</span> <span
  m='4667110'>shows</span> <span m='4668380'>the</span> <span
  m='4669910'>auto-correlation</span> <span m='4670820'>function</span> <span
  m='4671380'>and</span> <span m='4671640'>the</span> <span
  m='4671740'>partial</span> <span m='4672150'>auto-correlation</span> <span
  m='4673000'>function</span> <span m='4674070'>of</span> <span
  m='4674220'>the</span> <span m='4674350'>squared</span> <span
  m='4675110'>returns.</span> <span m='4677290'>So</span> <span
  m='4677430'>is</span> <span m='4677590'>there</span> <span
  m='4677730'>dependence</span> <span m='4678310'>in</span> <span
  m='4679480'>these</span> <span m='4679690'>daily</span> <span
  m='4681100'>volatilities?</span> <span m='4682600'>And</span> <span
  m='4683120'>basically</span> <span m='4685630'>these</span> <span
  m='4685860'>blue</span> <span m='4686130'>lines</span> <span
  m='4686590'>are</span> <span m='4686820'>plus</span> <span
  m='4687060'>or</span> <span m='4687110'>minus</span> <span
  m='4687470'>two</span> <span m='4687640'>standard</span> <span
  m='4687870'>deviations</span> <span m='4688320'>of</span> <span
  m='4688450'>the</span> <span m='4691030'>correlation</span> <span
  m='4691810'>coefficient.</span> <span m='4692580'>Basically</span> <span
  m='4692820'>we</span> <span m='4692930'>have</span> <span
  m='4693530'>highly</span> <span m='4693880'>significant</span> <span
  m='4696190'>auto-correlations</span> <span m='4696950'>and</span> <span
  m='4697180'>very</span> <span m='4697570'>highly</span> <span
  m='4697870'>significant</span> <span m='4699010'>partial</span> <span
  m='4699460'>auto-correlations,</span> <span m='4700900'>which</span> <span
  m='4701490'>suggests</span> <span m='4702590'>if</span> <span
  m='4702750'>you're</span> <span m='4702900'>familiar</span> <span
  m='4703320'>with</span> <span m='4703470'>ARMA</span> <span
  m='4703810'>process</span> <span m='4704290'>that</span> <span
  m='4704530'>you</span> <span m='4704640'>would</span> <span
  m='4704810'>need</span> <span m='4705080'>a</span> <span
  m='4705120'>very</span> <span m='4705370'>high</span> <span
  m='4705580'>order</span> <span m='4705860'>ARMA</span> <span
  m='4706180'>process</span> <span m='4707820'>to</span> <span
  m='4708740'>fit</span> <span m='4710810'>this</span> <span
  m='4710970'>squared</span> <span m='4711400'>residuals.</span> </p><p><span
  m='4714360'>But</span> <span m='4714510'>this</span> <span
  m='4715040'>highlights</span> <span m='4716000'>how</span> <span
  m='4716230'>with</span> <span m='4716340'>the</span> <span
  m='4716400'>statistical</span> <span m='4717310'>tools</span> <span
  m='4718730'>you</span> <span m='4718820'>can</span> <span
  m='4718930'>actually</span> <span m='4721440'>identify</span> <span
  m='4722460'>this</span> <span m='4723160'>time</span> <span
  m='4723510'>dependence</span> <span m='4724170'>quite</span> <span
  m='4724510'>quickly.</span> <span m='4725610'>And</span> <span
  m='4727500'>here's</span> <span m='4727990'>a</span> <span
  m='4728100'>plot</span> <span m='4730300'>of the</span> <span
  m='4730500'>ARCH</span> <span m='4730810'>order</span> <span
  m='4731270'>one</span> <span m='4731610'>model</span> <span
  m='4732060'>and</span> <span m='4732140'>the</span> <span
  m='4732260'>ARCH</span> <span m='4732530'>order</span> <span
  m='4732770'>two</span> <span m='4732970'>model.</span> <span
  m='4734200'>And</span> <span m='4734490'>on</span> <span
  m='4734610'>each</span> <span m='4734810'>of</span> <span
  m='4734900'>these</span> <span m='4735340'>I've</span> <span
  m='4735470'>actually</span> <span m='4736570'>drawn</span> <span
  m='4737510'>a</span> <span m='4737600'>solid</span> <span
  m='4738020'>line</span> <span m='4738430'>where</span> <span
  m='4739420'>the</span> <span m='4739510'>sort of</span> <span
  m='4739680'>constant</span> <span m='4740230'>variance</span> <span
  m='4740680'>model</span> <span m='4741020'>would</span> <span
  m='4741180'>be.</span> <span m='4741440'>So</span> <span
  m='4741740'>ARCH</span> <span m='4742115'>is</span> <span
  m='4742490'>saying</span> <span m='4742940'>that we</span> <span
  m='4743050'>have</span> <span m='4743190'>a</span> <span
  m='4743220'>lot</span> <span m='4743370'>of</span> <span
  m='4743430'>variability</span> <span m='4745300'>about</span> <span
  m='4745640'>that</span> <span m='4745820'>constant</span> <span
  m='4746290'>mean.</span> </p><p><span m='4749270'>And</span> <span
  m='4749640'>a</span> <span m='4749770'>property,</span> <span
  m='4751280'>I</span> <span m='4751370'>guess,</span> <span
  m='4751660'>of</span> <span m='4751900'>these</span> <span
  m='4753190'>ARCH</span> <span m='4753530'>models</span> <span
  m='4754070'>is</span> <span m='4754240'>that</span> <span
  m='4755230'>they</span> <span m='4755560'>all</span> <span
  m='4755840'>have</span> <span m='4756080'>sort</span> <span
  m='4756240'>of</span> <span m='4756990'>a</span> <span
  m='4757080'>minimum</span> <span m='4757600'>value</span> <span
  m='4758340'>for</span> <span m='4758530'>the</span> <span
  m='4758640'>volatility</span> <span m='4759310'>that</span> <span
  m='4759480'>they're</span> <span m='4759640'>estimating.</span> <span
  m='4761330'>If</span> <span m='4761780'>you</span> <span
  m='4761860'>look</span> <span m='4762000'>at</span> <span
  m='4762040'>the</span> <span m='4762150'>ARCH</span> <span
  m='4762450'>function,</span> <span m='4763020'>that</span> <span
  m='4763300'>alpha</span> <span m='4763640'>0</span> <span
  m='4765420'>now</span> <span m='4765710'>is</span> <span
  m='4766020'>the</span> <span m='4766130'>constant</span> <span
  m='4766580'>term</span> <span m='4766770'>is</span> <span
  m='4766860'>basically</span> <span m='4767500'>the</span> <span
  m='4767610'>minimum</span> <span m='4768000'>value,</span> <span
  m='4769950'>which</span> <span m='4770160'>that can be.</span> <span
  m='4771460'>So</span> <span m='4771610'>there's</span> <span
  m='4771800'>a</span> <span m='4771870'>constraint</span> <span
  m='4772400'>sort</span> <span m='4772530'>of</span> <span
  m='4772620'>on</span> <span m='4772790'>the</span> <span
  m='4772900'>lower</span> <span m='4773240'>value.</span> </p><p><span
  m='4775790'>Then</span> <span m='4776050'>here's</span> <span
  m='4776370'>an</span> <span m='4776500'>ARCH</span> <span
  m='4776930'>10</span> <span m='4777390'>fit</span> <span
  m='4778130'>which,</span> <span m='4788080'>it</span> <span
  m='4788220'>doesn't</span> <span m='4788530'>look</span> <span
  m='4788750'>like</span> <span m='4788910'>it sort</span> <span
  m='4789010'>of</span> <span m='4789160'>has</span> <span
  m='4789450'>quite</span> <span m='4789870'>as</span> <span
  m='4790050'>much</span> <span m='4790280'>of</span> <span m='4790410'>a</span>
  <span m='4790720'>uniform</span> <span m='4791190'>lower</span> <span
  m='4791460'>bound,</span> <span m='4792530'>but</span> <span
  m='4792570'>one</span> <span m='4792740'>could</span> <span
  m='4792880'>go</span> <span m='4793040'>on</span> <span m='4793250'>and</span>
  <span m='4793330'>on</span> <span m='4793560'>with</span> <span
  m='4794010'>higher</span> <span m='4794530'>order</span> <span
  m='4794940'>ARCH</span> <span m='4795250'>terms,</span> <span
  m='4795580'>but</span> <span m='4796540'>rather</span> <span
  m='4796750'>than</span> <span m='4796910'>doing</span> <span
  m='4797160'>that</span> <span m='4797580'>one</span> <span
  m='4797760'>can</span> <span m='4797890'>also</span> <span
  m='4798210'>fit</span> <span m='4798970'>just</span> <span
  m='4799200'>a</span> <span m='4799550'>GARCH</span> <span m='4799840'>(1,
  1)</span> <span m='4800410'>model.</span> <span m='4801030'>And</span> <span
  m='4801230'>this</span> <span m='4801420'>is</span> <span
  m='4801560'>what</span> <span m='4802170'>it</span> <span
  m='4802250'>looks</span> <span m='4802500'>like.</span> </p><p><span
  m='4804250'>So</span> <span m='4806020'>basically</span> <span
  m='4806480'>the</span> <span m='4806930'>time</span> <span
  m='4807590'>varying</span> <span m='4807980'>volatility</span> <span
  m='4808660'>in</span> <span m='4808740'>this</span> <span
  m='4808930'>process</span> <span m='4810170'>is</span> <span
  m='4810370'>captured</span> <span m='4810830'>really,</span> <span
  m='4811250'>really</span> <span m='4811380'>well</span> <span
  m='4812040'>with</span> <span m='4812150'>just</span> <span
  m='4812310'>this</span> <span m='4812470'>two</span> <span
  m='4812660'>parameter</span> <span m='4813170'>GARCH</span> <span
  m='4813410'>model</span> <span m='4814050'>as</span> <span
  m='4814250'>compared</span> <span m='4814610'>with</span> <span
  m='4814740'>a</span> <span m='4814770'>high</span> <span
  m='4815060'>order</span> <span m='4816040'>autoregressive</span> <span
  m='4816690'>model.</span> <span m='4817990'>And</span> <span
  m='4819170'>it</span> <span m='4819460'>sort</span> <span
  m='4819640'>of</span> <span m='4819680'>highlights</span> <span
  m='4820110'>the</span> <span m='4820230'>issues</span> <span
  m='4820760'>with</span> <span m='4820980'>the</span> <span
  m='4822040'>Wold</span> <span m='4822350'>decomposition</span> <span
  m='4823220'>where</span> <span m='4824130'>a</span> <span
  m='4824260'>potentially</span> <span m='4824710'>infinite</span> <span
  m='4825090'>order</span> <span m='4825680'>autoregressive</span> <span
  m='4826970'>model</span> <span m='4827970'>will</span> <span
  m='4828420'>effectively</span> <span m='4829010'>fit</span> <span
  m='4829250'>most</span> <span m='4829550'>time</span> <span
  m='4829790'>series.</span> <span m='4830770'>Well,</span> <span
  m='4830880'>that's</span> <span m='4831170'>nice</span> <span
  m='4831440'>to</span> <span m='4831530'>know,</span> <span
  m='4831770'>but</span> <span m='4832120'>it's</span> <span
  m='4832510'>nice</span> <span m='4832680'>to</span> <span
  m='4832740'>have</span> <span m='4832850'>a</span> <span
  m='4832930'>parsimonious</span> <span m='4833600'>way</span> <span
  m='4833750'>of</span> <span m='4833820'>defining</span> <span
  m='4834360'>that</span> <span m='4834900'>infinite</span> <span
  m='4835330'>collection</span> <span m='4835700'>of</span> <span
  m='4835810'>parameters</span> <span m='4836390'>and</span> <span
  m='4836950'>with</span> <span m='4837070'>the</span> <span
  m='4837170'>GARCH</span> <span m='4837490'>model</span> <span
  m='4837850'>a</span> <span m='4838150'>couple</span> <span
  m='4838410'>of</span> <span m='4838500'>parameters</span> <span
  m='4839130'>do</span> <span m='4839260'>a</span> <span m='4839440'>good</span>
  <span m='4839670'>job.</span> </p><p><span m='4840580'>And</span> <span
  m='4840650'>then</span> <span m='4840770'>finally</span> <span
  m='4841230'>here's</span> <span m='4841530'>just</span> <span
  m='4841780'>a</span> <span m='4841830'>simultaneous</span> <span
  m='4842500'>plot</span> <span m='4842820'>of</span> <span
  m='4842920'>all</span> <span m='4843060'>those</span> <span
  m='4844430'>volatility</span> <span m='4845020'>estimates</span> <span
  m='4845420'>on</span> <span m='4845540'>the</span> <span
  m='4845620'>same</span> <span m='4845920'>graph.</span> <span
  m='4847270'>And</span> <span m='4847450'>so</span> <span
  m='4847880'>one</span> <span m='4848090'>can</span> <span
  m='4848250'>see</span> <span m='4848890'>the</span> <span
  m='4850840'>increased</span> <span m='4851340'>flexibility</span> <span
  m='4852250'>ability</span> <span m='4852920'>basically</span> <span
  m='4853010'>of the</span> <span m='4853090'>GARCH</span> <span
  m='4853400'>models</span> <span m='4853710'>compared</span> <span
  m='4854050'>to</span> <span m='4854100'>the</span> <span
  m='4854250'>ARCH</span> <span m='4854720'>models</span> <span
  m='4855000'>for</span> <span m='4855140'>capturing</span> <span
  m='4856490'>time</span> <span m='4856800'>varying</span> <span
  m='4857090'>volatility.</span> <span m='4859280'>So</span> <span
  m='4860110'>all right.</span> <span m='4860840'>I'll</span> <span
  m='4861320'>stop</span> <span m='4861600'>there</span> <span m='4861740'>for
  today.</span> <span m='4862970'>And</span> <span m='4863740'>let's</span>
  <span m='4863990'>see.</span> <span m='4865080'>Next</span> <span
  m='4865300'>Tuesday</span> <span m='4865720'>is</span> <span
  m='4866010'>a</span> <span m='4867100'>presentation</span> <span
  m='4867790'>from</span> <span m='4867880'>Morgan</span> <span
  m='4868160'>Stanley</span> <span m='4868580'>so.</span> <span
  m='4870290'>And</span> <span m='4870480'>today's</span> <span
  m='4870830'>the</span> <span m='4870930'>last</span> <span
  m='4871240'>day</span> <span m='4871380'>to</span> <span
  m='4871480'>sign</span> <span m='4871760'>up</span> <span
  m='4871920'>for</span> <span m='4873720'>a</span> <span m='4874020'>field
  trip.</span> </p>
uid: b89428de15f893c4d601f2df898c176a
type: course
layout: video
---
