---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: hSRcHTafkjE
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Video-YouTube-Stream
    type: Video
    uid: 791ec06baa0b55bdc80ce3d26462935f
  - id: 3Play-3PlayYouTubeid-SRT
    media_location: hSRcHTafkjE
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6fe364359d9dbe1e0745bb63250df94b
  - id: Video-iTunesU-MP4
    media_location: 'http://itunes.apple.com/us/itunes-u/pseudoinverses/id488155309?i=108454307'
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Video-iTunes U-MP4
    type: Video
    uid: 29a56375329ea858243ccc407dfdf84d
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110714_D1_300k.mp4
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Video-Internet Archive-MP4
    type: Video
    uid: e75f7155a23842d420d0df278771c5b5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hSRcHTafkjE/default.jpg'
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a8374412e194b5c576f80607d649b1fd
  - id: hSRcHTafkjE.srt
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-pseudoinverses/hSRcHTafkjE.srt
    title: 3play caption file
    type: null
    uid: 5a1bb1b337989ef31e3c11f632f5a2a4
  - id: hSRcHTafkjE.pdf
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-pseudoinverses/hSRcHTafkjE.pdf
    title: 3play pdf file
    type: null
    uid: f73f557e9c2d8095d837ad3649a4b561
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0d88c106cb265ec2fe3fd1c4f8e78fc2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 067a5749da32b40dea0e7407dca864b0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 780e59b6bdd2c98a3c7365c4bf09c69a
inline_embed_id: 18829104problemsolvingpseudoinverses96762745
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
related_resources_text: ''
short_url: problem-solving-pseudoinverses
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-pseudoinverses
title: 'Problem Solving: Pseudoinverses'
transcript: >-
  <p><span m='7290'>DAVID SHIROKOFF: Hi</span> <span m='7780'>everyone.</span>
  <span m='8430'>Welcome</span> <span m='8740'>back.</span> </p><p><span
  m='9950'>So</span> <span m='10180'>today</span> <span m='10690'>I'd</span>
  <span m='10800'>like</span> <span m='10940'>to</span> <span m='11020'>tackle
  a</span> <span m='11430'>problem</span> <span m='12130'>on</span> <span
  m='12410'>pseudoinverses.</span> <span m='14370'>So</span> <span
  m='14560'>given</span> <span m='14820'>a</span> <span m='14860'>matrix</span>
  <span m='15390'>A,</span> <span m='16320'>which</span> <span
  m='16550'>is</span> <span m='16640'>not</span> <span m='16880'>square,</span>
  <span m='17300'>so</span> <span m='17490'>it's</span> <span
  m='17610'>just</span> <span m='17810'>1</span> <span m='18010'>and 2.</span>
  <span m='19560'>First,</span> <span m='20030'>what</span> <span
  m='20240'>is</span> <span m='20390'>its</span> <span
  m='20500'>pseudoinverse?</span> <span m='21640'>So</span> <span
  m='21920'>A</span> <span m='22100'>plus</span> <span m='22750'>I'm</span>
  <span m='23120'>using</span> <span m='23380'>to</span> <span
  m='23500'>denote</span> <span m='23830'>the</span> <span
  m='23910'>pseudoinverse.</span> <span m='25300'>Then</span> <span
  m='25470'>secondly,</span> <span m='25950'>compute</span> <span
  m='27040'>A</span> <span m='27190'>plus</span> <span m='27570'>A</span> <span
  m='28080'>and</span> <span m='28320'>A A</span> <span m='28770'>plus.</span>
  <span m='30460'>And</span> <span m='30600'>then</span> <span
  m='30830'>thirdly,</span> <span m='31650'>if</span> <span m='31870'>x</span>
  <span m='32220'>is</span> <span m='32350'>in</span> <span m='32439'>the</span>
  <span m='32530'>null</span> <span m='32729'>space</span> <span
  m='33050'>of</span> <span m='33150'>A,</span> <span m='33980'>what</span>
  <span m='34200'>is</span> <span m='34370'>A</span> <span m='34530'>plus</span>
  <span m='34880'>A</span> <span m='35100'>acting</span> <span
  m='35460'>on</span> <span m='35600'>x?</span> <span m='37070'>And</span> <span
  m='37670'>lastly,</span> <span m='38980'>if</span> <span m='39150'>x</span>
  <span m='39410'>is</span> <span m='39540'>in</span> <span m='39640'>the</span>
  <span m='39720'>column</span> <span m='40070'>space</span> <span
  m='40420'>of</span> <span m='40570'>A</span> <span m='40750'>transpose,</span>
  <span m='42540'>what</span> <span m='42740'>is</span> <span m='42960'>A</span>
  <span m='43110'>plus</span> <span m='43500'>A*x?</span> </p><p><span
  m='45280'>So I'll let</span> <span m='45620'>you</span> <span
  m='45760'>think</span> <span m='45930'>about</span> <span
  m='46100'>this</span> <span m='46250'>problem</span> <span
  m='46480'>for</span> <span m='46640'>a bit,</span> <span m='47060'>and</span>
  <span m='47310'>I'll</span> <span m='47400'>be</span> <span
  m='47490'>back</span> <span m='47730'>in</span> <span m='47800'>a</span> <span
  m='47850'>second.</span> </p><p><span m='59942'>Hi</span> <span
  m='60430'>everyone.</span> <span m='61040'>Welcome</span> <span
  m='61310'>back.</span> <span m='62540'>OK,</span> <span m='63000'>so</span>
  <span m='63200'>let's</span> <span m='63350'>take</span> <span
  m='63500'>a</span> <span m='63550'>look</span> <span m='63690'>at</span> <span
  m='63750'>this</span> <span m='63910'>problem.</span> <span
  m='65209'>Now</span> <span m='65370'>first</span> <span m='65690'>off,</span>
  <span m='65970'>what</span> <span m='66230'>is</span> <span m='66320'>a</span>
  <span m='66400'>pseudoinverse?</span> <span m='68030'>Well,</span> <span
  m='69760'>we</span> <span m='69860'>define</span> <span m='70180'>the</span>
  <span m='70260'>pseudoinverse</span> <span m='71850'>using</span> <span
  m='72200'>the</span> <span m='72340'>SVD.</span> <span m='77940'>So</span>
  <span m='78360'>in</span> <span m='78470'>actuality,</span> <span
  m='79230'>this</span> <span m='79400'>is</span> <span m='79510'>nothing</span>
  <span m='79840'>new.</span> <span m='85220'>Now,</span> <span
  m='85430'>we</span> <span m='85570'>note</span> <span m='85820'>that</span>
  <span m='86030'>because</span> <span m='86430'>A is</span> <span
  m='86780'>not</span> <span m='87060'>square,</span> <span m='88410'>the</span>
  <span m='88540'>regular</span> <span m='88910'>inverse</span> <span
  m='89290'>of</span> <span m='89380'>A</span> <span m='89490'>doesn't</span>
  <span m='89800'>necessarily</span> <span m='90380'>exist.</span> <span
  m='91390'>However,</span> <span m='91980'>we</span> <span m='92180'>do</span>
  <span m='92350'>know</span> <span m='92500'>that</span> <span
  m='92650'>the</span> <span m='92780'>SVD</span> <span m='93390'>exists</span>
  <span m='93990'>for</span> <span m='94170'>every</span> <span
  m='94730'>matrix</span> <span m='95240'>A</span> <span
  m='95400'>whether</span> <span m='95730'>it's</span> <span m='98100'>square
  or</span> <span m='98510'>not.</span> </p><p><span m='99980'>So</span> <span
  m='100420'>how</span> <span m='100590'>do</span> <span m='100670'>we</span>
  <span m='100790'>compute</span> <span m='101170'>the</span> <span
  m='101280'>SVD</span> <span m='101770'>of</span> <span m='101840'>a</span>
  <span m='101920'>matrix?</span> <span m='103170'>Well</span> <span
  m='103330'>let's</span> <span m='103500'>just</span> <span
  m='103730'>recall</span> <span m='104040'>that</span> <span
  m='104570'>the</span> <span m='104920'>SVD of a</span> <span
  m='105290'>matrix</span> <span m='105760'>has</span> <span
  m='105960'>the</span> <span m='106040'>form</span> <span m='106390'>of</span>
  <span m='108380'>U</span> <span m='108770'>sigma</span> <span
  m='109916'>V</span> <span m='112100'>transpose,</span> <span
  m='113450'>where</span> <span m='113770'>U</span> <span m='114000'>and</span>
  <span m='114160'>V</span> <span m='114430'>are</span> <span
  m='114780'>orthogonal</span> <span m='115250'>matrices</span> <span
  m='116510'>and</span> <span m='116820'>sigma</span> <span m='117240'>is</span>
  <span m='118670'>a</span> <span m='118760'>matrix</span> <span
  m='119480'>with</span> <span m='120430'>positive</span> <span
  m='121220'>values</span> <span m='122140'>along</span> <span
  m='122440'>the</span> <span m='122510'>diagonal</span> <span
  m='123090'>or</span> <span m='123270'>0's</span> <span m='123660'>along</span>
  <span m='123890'>the</span> <span m='123990'>diagonal.</span> <span
  m='125810'>And</span> <span m='126280'>let's</span> <span
  m='126640'>just</span> <span m='126880'>take</span> <span m='127050'>a</span>
  <span m='127100'>look</span> <span m='127240'>at</span> <span
  m='127310'>the</span> <span m='127360'>dimensions</span> <span
  m='127850'>of</span> <span m='127900'>these</span> <span
  m='128070'>matrices</span> <span m='128560'>for</span> <span
  m='128669'>a</span> <span m='128720'>second.</span> <span m='130020'>So</span>
  <span m='130190'>we</span> <span m='130280'>know</span> <span m='130449'>that
  A</span> <span m='130590'>is</span> <span m='130910'>a</span> <span
  m='130970'>1</span> <span m='131170'>by</span> <span m='131320'>2</span> <span
  m='131540'>matrix.</span> </p><p><span m='133860'>And</span> <span
  m='134430'>the</span> <span m='134900'>way</span> <span m='135150'>to</span>
  <span m='135350'>figure</span> <span m='135590'>out what</span> <span
  m='135780'>the</span> <span m='135860'>dimensions</span> <span
  m='136320'>of</span> <span m='136400'>these</span> <span
  m='136570'>matrices</span> <span m='137080'>are</span> <span
  m='137890'>I</span> <span m='138230'>usually</span> <span
  m='138620'>always</span> <span m='138740'>start</span> <span
  m='138970'>with</span> <span m='139040'>the</span> <span
  m='139110'>center</span> <span m='139380'>matrix,</span> <span
  m='139830'>sigma,</span> <span m='141270'>and</span> <span
  m='141440'>sigma</span> <span m='141900'>is</span> <span
  m='142020'>always</span> <span m='142220'>going</span> <span
  m='142310'>to</span> <span m='142350'>have</span> <span m='142490'>the</span>
  <span m='142540'>same</span> <span m='142740'>dimensions</span> <span
  m='143200'>as</span> <span m='143320'>A,</span> <span m='143590'>so</span>
  <span m='143740'>it's</span> <span m='143880'>going</span> <span
  m='144020'>to</span> <span m='144070'>be</span> <span m='144160'>a</span>
  <span m='144220'>1</span> <span m='144380'>by</span> <span m='144500'>2</span>
  <span m='144670'>matrix.</span> <span m='146230'>U</span> <span
  m='146430'>and</span> <span m='146570'>V</span> <span m='146770'>are</span>
  <span m='147010'>always</span> <span m='147110'>square</span> <span
  m='147480'>matrices.</span> <span m='150140'>So</span> <span
  m='150410'>to</span> <span m='150540'>make</span> <span m='150730'>this</span>
  <span m='150890'>multiplication</span> <span m='151570'>work</span> <span
  m='151800'>out,</span> <span m='152480'>we</span> <span m='152610'>need</span>
  <span m='152960'>V</span> <span m='153300'>to</span> <span
  m='153470'>have</span> <span m='153650'>2,</span> <span m='154190'>and</span>
  <span m='154310'>because</span> <span m='154570'>it's</span> <span
  m='154660'>square it</span> <span m='154960'>has</span> <span
  m='155120'>to</span> <span m='155190'>be</span> <span m='155290'>2</span>
  <span m='155450'>by</span> <span m='155580'>2.</span> <span
  m='157220'>And</span> <span m='157370'>likewise,</span> <span
  m='157800'>U</span> <span m='158180'>has</span> <span m='158370'>to</span>
  <span m='158440'>be</span> <span m='158530'>1</span> <span
  m='158750'>by</span> <span m='158880'>1.</span> </p><p><span
  m='161250'>So</span> <span m='161830'>we</span> <span m='161940'>now</span>
  <span m='162100'>have</span> <span m='162500'>the</span> <span
  m='162660'>dimensions</span> <span m='163240'>of</span> <span
  m='164290'>U,</span> <span m='164560'>sigma,</span> <span
  m='164860'>and</span> <span m='165010'>V.</span> <span m='165500'>And</span>
  <span m='165640'>note,</span> <span m='165930'>because</span> <span
  m='167190'>U</span> <span m='167340'>is</span> <span m='167420'>a</span> <span
  m='167480'>1</span> <span m='167650'>by</span> <span m='167760'>1</span> <span
  m='167940'>matrix,</span> <span m='169300'>the</span> <span
  m='169580'>only</span> <span m='169970'>orthogonal</span> <span
  m='170540'>1</span> <span m='170690'>by</span> <span m='170790'>1</span> <span
  m='170990'>matrix</span> <span m='171450'>is</span> <span
  m='171610'>just</span> <span m='171800'>1.</span> <span m='172790'>So</span>
  <span m='172980'>u</span> <span m='175640'>we</span> <span
  m='175780'>already</span> <span m='176020'>know</span> <span
  m='176620'>is</span> <span m='176840'>just</span> <span
  m='177030'>going</span> <span m='177130'>to</span> <span m='177230'>be</span>
  <span m='177330'>the</span> <span m='177430'>matrix,</span> <span
  m='179230'>the</span> <span m='179360'>identity</span> <span
  m='179740'>matrix,</span> <span m='180130'>which</span> <span
  m='180280'>is</span> <span m='180370'>a</span> <span m='180430'>1</span> <span
  m='180590'>by</span> <span m='180680'>1</span> <span m='180890'>matrix.</span>
  </p><p><span m='182870'>OK, now</span> <span m='183000'>how</span> <span
  m='183150'>do</span> <span m='183240'>we</span> <span
  m='183310'>compute</span> <span m='183750'>V and</span> <span
  m='184090'>sigma?</span> <span m='185750'>Well,</span> <span
  m='189250'>we</span> <span m='189410'>can</span> <span m='189570'>take</span>
  <span m='189900'>A</span> <span m='190670'>transpose</span> <span
  m='191080'>and</span> <span m='191490'>A,</span> <span m='193130'>and</span>
  <span m='193460'>if</span> <span m='193610'>we</span> <span
  m='193690'>do</span> <span m='193830'>that,</span> <span m='194470'>we</span>
  <span m='194670'>end</span> <span m='194780'>up</span> <span
  m='194870'>getting</span> <span m='195120'>the</span> <span
  m='195200'>matrix</span> <span m='195640'>V</span> <span
  m='197610'>sigma</span> <span m='201070'>transpose</span> <span
  m='202020'>sigma</span> <span m='205064'>V</span> <span
  m='205500'>transpose.</span> <span m='207220'>And</span> <span
  m='207410'>this</span> <span m='207560'>matrix</span> <span
  m='207920'>is</span> <span m='208060'>going</span> <span m='208260'>to</span>
  <span m='208320'>be</span> <span m='208560'>a</span> <span
  m='208810'>square</span> <span m='209090'>matrix</span> <span
  m='210080'>where</span> <span m='210670'>the</span> <span
  m='210810'>diagonal</span> <span m='211310'>elements</span> <span
  m='211790'>are</span> <span m='212080'>squares</span> <span
  m='212600'>of</span> <span m='212700'>the</span> <span
  m='212760'>singular</span> <span m='213110'>values.</span> <span
  m='214300'>So</span> <span m='214500'>computing</span> <span
  m='214960'>V</span> <span m='215370'>and</span> <span m='216040'>the</span>
  <span m='216240'>values</span> <span m='217620'>along</span> <span
  m='217920'>sigma</span> <span m='218790'>just</span> <span
  m='218980'>boil</span> <span m='219260'>down</span> <span m='219530'>to</span>
  <span m='219650'>diagonalizing</span> <span m='220430'>A</span> <span
  m='220550'>transpose</span> <span m='221080'>A.</span> </p><p><span
  m='223520'>So</span> <span m='223740'>what</span> <span m='223910'>is</span>
  <span m='224020'>A</span> <span m='224120'>transpose</span> <span
  m='224640'>A?</span> <span m='224960'>Well,</span> <span m='225790'>in</span>
  <span m='225930'>our</span> <span m='226050'>case</span> <span
  m='226380'>is</span> <span m='226510'>[1;</span> <span m='226800'>2]</span>
  <span m='228600'>times</span> <span m='229740'>[1,</span> <span
  m='229990'>2],</span> <span m='233080'>which</span> <span
  m='233590'>gives</span> <span m='233810'>us</span> <span m='234290'>[1,</span>
  <span m='234830'>2;</span> <span m='236270'>2,</span> <span
  m='236780'>4].</span> <span m='239340'>And</span> <span m='239490'>note</span>
  <span m='239730'>that</span> <span m='240520'>the</span> <span
  m='240900'>second</span> <span m='241210'>row</span> <span
  m='242160'>is</span> <span m='242330'>just</span> <span m='242510'>a</span>
  <span m='242550'>constant</span> <span m='242910'>multiple</span> <span
  m='243940'>times</span> <span m='244170'>the</span> <span
  m='244360'>first</span> <span m='244560'>row.</span> </p><p><span
  m='245770'>Now</span> <span m='245940'>what</span> <span
  m='246120'>this</span> <span m='246270'>means</span> <span
  m='246530'>is</span> <span m='246980'>we</span> <span m='247320'>have</span>
  <span m='247410'>a</span> <span m='247510'>zero</span> <span
  m='247880'>eigenvalue.</span> <span m='250360'>So</span> <span
  m='250520'>we</span> <span m='250660'>already</span> <span
  m='250880'>know</span> <span m='251140'>that</span> <span
  m='251310'>lambda_1</span> <span m='252770'>is</span> <span
  m='252960'>going</span> <span m='253060'>to</span> <span m='253170'>be</span>
  <span m='253280'>0.</span> <span m='254470'>So</span> <span
  m='254620'>one</span> <span m='254790'>of</span> <span m='254840'>the</span>
  <span m='255180'>eigenvalues</span> <span m='255490'>of</span> <span
  m='255550'>this</span> <span m='255740'>matrix</span> <span
  m='256089'>is</span> <span m='256220'>0.</span> <span m='257540'>And</span>
  <span m='257790'>of</span> <span m='257910'>course,</span> <span
  m='258170'>when</span> <span m='258300'>we</span> <span
  m='258410'>square</span> <span m='258779'>root</span> <span
  m='258959'>it,</span> <span m='259959'>this</span> <span m='260190'>is</span>
  <span m='260310'>going</span> <span m='260500'>to</span> <span
  m='260560'>give</span> <span m='260730'>us</span> <span m='260870'>a</span>
  <span m='260920'>singular</span> <span m='261329'>value</span> <span
  m='262070'>sigma,</span> <span m='262730'>which</span> <span
  m='262880'>is</span> <span m='262970'>also</span> <span m='263200'>0.</span>
  <span m='265350'>And</span> <span m='265880'>this</span> <span
  m='266040'>is</span> <span m='266150'>generally</span> <span
  m='266600'>a</span> <span m='266640'>case</span> <span m='268100'>when</span>
  <span m='268280'>we</span> <span m='268380'>have</span> <span
  m='270070'>a</span> <span m='270190'>sigma</span> <span
  m='270520'>which</span> <span m='270720'>is</span> <span m='270820'>not</span>
  <span m='271250'>square.</span> <span m='272940'>We</span> <span
  m='273060'>typically</span> <span m='273480'>always</span> <span
  m='273710'>have</span> <span m='273860'>zero</span> <span
  m='274520'>singular</span> <span m='274830'>values.</span> </p><p><span
  m='276320'>Now</span> <span m='276470'>to</span> <span
  m='276610'>compute</span> <span m='276930'>the</span> <span
  m='277230'>second</span> <span m='277540'>eigenvalue,</span> <span
  m='278680'>well</span> <span m='279010'>we</span> <span
  m='279150'>already</span> <span m='279340'>know</span> <span
  m='279470'>how</span> <span m='279570'>to</span> <span
  m='279650'>compute</span> <span m='279960'>the</span> <span
  m='280060'>eigenvalues</span> <span m='280570'>of</span> <span
  m='280680'>a</span> <span m='280720'>matrix,</span> <span m='281170'>so</span>
  <span m='281250'>I'm</span> <span m='281350'>just</span> <span
  m='281500'>going</span> <span m='281660'>to</span> <span
  m='282020'>tell</span> <span m='282220'>you</span> <span
  m='282310'>what</span> <span m='282420'>it</span> <span m='282510'>is.</span>
  <span m='283770'>The</span> <span m='283870'>second</span> <span
  m='284150'>one</span> <span m='284300'>is</span> <span
  m='284420'>lambda</span> <span m='284680'>is</span> <span m='284860'>5.</span>
  <span m='287430'>And</span> <span m='288010'>if</span> <span
  m='288140'>we</span> <span m='288230'>just</span> <span m='288400'>take</span>
  <span m='288570'>a</span> <span m='288600'>quick</span> <span
  m='288850'>look</span> <span m='290420'>what</span> <span
  m='290600'>the</span> <span m='290680'>corresponding</span> <span
  m='291570'>eigenvector</span> <span m='291840'>is</span> <span
  m='291960'>going</span> <span m='292070'>to</span> <span m='292190'>be</span>
  <span m='295410'>to</span> <span m='295570'>lambda</span> <span m='295970'>is
  5,</span> <span m='297210'>it's</span> <span m='297420'>going</span> <span
  m='297650'>to</span> <span m='299130'>satisfy</span> <span
  m='299670'>this</span> <span m='299860'>equation.</span> <span
  m='302900'>So</span> <span m='303050'>we</span> <span m='303160'>can</span>
  <span m='303300'>take</span> <span m='303490'>the</span> <span
  m='303600'>eigenvector</span> <span m='304160'>u</span> <span
  m='305060'>to</span> <span m='305180'>be</span> <span m='305500'>1</span>
  <span m='305870'>and 2.</span> </p><p><span m='308170'>However,</span> <span
  m='309150'>remember</span> <span m='309500'>that</span> <span
  m='309630'>when</span> <span m='309760'>we</span> <span
  m='309850'>compute</span> <span m='310280'>the</span> <span
  m='310400'>eigenvector</span> <span m='311470'>for</span> <span
  m='311620'>this</span> <span m='311810'>orthogonal</span> <span
  m='312540'>matrix</span> <span m='312980'>V,</span> <span
  m='313630'>they</span> <span m='313750'>always</span> <span
  m='313950'>have</span> <span m='314120'>to</span> <span m='314240'>have</span>
  <span m='314370'>a</span> <span m='314420'>unit</span> <span
  m='314800'>length.</span> <span m='316880'>And</span> <span
  m='317270'>this</span> <span m='317490'>vector</span> <span
  m='317760'>right</span> <span m='317930'>now</span> <span
  m='318090'>doesn't</span> <span m='318340'>have</span> <span
  m='318460'>a</span> <span m='318500'>unit</span> <span
  m='318780'>length.</span> <span m='319050'>We</span> <span
  m='319140'>have</span> <span m='319260'>to</span> <span
  m='319380'>divide</span> <span m='320240'>by</span> <span
  m='320360'>the</span> <span m='320470'>length</span> <span
  m='320710'>of</span> <span m='320780'>this</span> <span
  m='320960'>vector,</span> <span m='322010'>which</span> <span
  m='322200'>in</span> <span m='322300'>our</span> <span m='322410'>case</span>
  <span m='323400'>is</span> <span m='323720'>1</span> <span
  m='323960'>over</span> <span m='324140'>root</span> <span m='324340'>5.</span>
  <span m='326750'>And</span> <span m='326980'>if</span> <span
  m='327100'>I</span> <span m='327140'>go</span> <span m='327260'>back</span>
  <span m='327460'>to</span> <span m='327560'>the</span> <span
  m='327680'>lambda</span> <span m='327920'>equals</span> <span
  m='328200'>0</span> <span m='328480'>case,</span> <span m='330970'>we</span>
  <span m='331300'>also</span> <span m='331570'>have</span> <span
  m='331960'>another</span> <span m='332340'>eigenvector,</span> <span
  m='334200'>which</span> <span m='334520'>I'll</span> <span
  m='334660'>just</span> <span m='334880'>state.</span> <span
  m='337440'>You</span> <span m='337570'>can</span> <span
  m='337690'>actually</span> <span m='338010'>compute</span> <span
  m='338370'>it</span> <span m='338890'>quite</span> <span
  m='339110'>quickly</span> <span m='339820'>just</span> <span
  m='339990'>by</span> <span m='340100'>noting</span> <span
  m='340420'>that</span> <span m='340540'>it</span> <span m='340610'>has</span>
  <span m='340790'>to</span> <span m='340870'>be</span> <span
  m='340990'>orthogonal</span> <span m='341480'>to</span> <span
  m='341580'>this</span> <span m='341680'>eigenvector,</span> <span
  m='344540'>2</span> <span m='344760'>and</span> <span m='344850'>1.</span>
  </p><p><span m='347870'>So</span> <span m='348020'>what</span> <span
  m='348130'>this</span> <span m='348310'>means</span> <span
  m='348590'>is</span> <span m='349400'>A</span> <span m='349630'>has a</span>
  <span m='349680'>singular</span> <span m='350060'>value</span> <span
  m='350380'>decomposition,</span> <span m='352730'>which</span> <span
  m='353120'>looks</span> <span m='353410'>like:</span> <span
  m='353840'>1,</span> <span m='354620'>so</span> <span m='354800'>this</span>
  <span m='354950'>is</span> <span m='355050'>u,</span> <span
  m='358060'>times</span> <span m='358440'>sigma,</span> <span
  m='361510'>which</span> <span m='361730'>is</span> <span
  m='361830'>going</span> <span m='361940'>to</span> <span m='362050'>be</span>
  <span m='362190'>root</span> <span m='362440'>5,</span> <span
  m='364420'>0.</span> <span m='365250'>Remember</span> <span
  m='365640'>that</span> <span m='366840'>the</span> <span
  m='367150'>first</span> <span m='367420'>sigma</span> <span
  m='367540'>is</span> <span m='367730'>actually</span> <span
  m='368060'>the</span> <span m='368170'>square</span> <span
  m='368630'>root</span> <span m='369440'>of</span> <span m='369600'>the
  eigenvalue.</span> <span m='372740'>Times</span> <span m='374010'>a</span>
  <span m='374070'>matrix</span> <span m='374530'>which</span> <span
  m='374730'>looks</span> <span m='374980'>like,</span> <span
  m='376420'>now</span> <span m='376570'>we</span> <span m='376660'>have</span>
  <span m='376830'>to</span> <span m='376960'>order</span> <span
  m='377710'>the</span> <span m='378110'>eigenvalues</span> <span
  m='378460'>up</span> <span m='378940'>in</span> <span m='379060'>the</span>
  <span m='379140'>correct</span> <span m='379440'>order.</span> <span
  m='380460'>Because</span> <span m='380910'>5</span> <span
  m='381220'>appears</span> <span m='381540'>in</span> <span
  m='381590'>the</span> <span m='381670'>first</span> <span
  m='381920'>column,</span> <span m='382170'>we</span> <span
  m='382250'>have</span> <span m='382370'>to</span> <span m='382470'>take</span>
  <span m='383100'>this</span> <span m='383830'>vector</span> <span
  m='384300'>to</span> <span m='384410'>be</span> <span m='384500'>in</span>
  <span m='384580'>the</span> <span m='384660'>first</span> <span
  m='384870'>column</span> <span m='385130'>as</span> <span
  m='385240'>well.</span> <span m='386430'>So</span> <span
  m='386580'>this</span> <span m='386730'>is</span> <span m='386800'>1</span>
  <span m='386980'>over</span> <span m='387130'>root</span> <span
  m='387300'>5,</span> <span m='388750'>this</span> <span m='388900'>is</span>
  <span m='389020'>2</span> <span m='389210'>over</span> <span
  m='389360'>root</span> <span m='389610'>5,</span> <span
  m='393350'>negative</span> <span m='393760'>2</span> <span
  m='394170'>over</span> <span m='394400'>root</span> <span m='394640'>5,</span>
  <span m='396720'>and</span> <span m='396890'>1</span> <span
  m='397050'>over</span> <span m='397320'>root</span> <span m='397350'>5.</span>
  <span m='400050'>And</span> <span m='400220'>now</span> <span
  m='400520'>this</span> <span m='400760'>is</span> <span m='400930'>V,</span>
  <span m='404530'>but</span> <span m='404770'>the</span> <span
  m='404840'>singular</span> <span m='406660'>value</span> <span
  m='407110'>decomposition</span> <span m='408670'>is</span> <span
  m='408820'>defined</span> <span m='409190'>by</span> <span m='409380'>V</span>
  <span m='409590'>transpose.</span> </p><p><span m='415120'>So</span> <span
  m='415260'>this</span> <span m='415450'>gives</span> <span
  m='415630'>us</span> <span m='415770'>a</span> <span
  m='415820'>representation</span> <span m='416520'>for</span> <span
  m='416670'>A.</span> <span m='417590'>And</span> <span m='417710'>now</span>
  <span m='417840'>once</span> <span m='418030'>we</span> <span
  m='418130'>have</span> <span m='418330'>the SVD</span> <span
  m='418600'>of</span> <span m='418930'>A,</span> <span m='419530'>how</span>
  <span m='419660'>do</span> <span m='419750'>we</span> <span
  m='419850'>actually</span> <span m='420140'>compute</span> <span
  m='420580'>A</span> <span m='420990'>plus,</span> <span m='421720'>or</span>
  <span m='422150'>the</span> <span m='422360'>pseudoinverse</span> <span
  m='422950'>of</span> <span m='423040'>A?</span> <span m='424110'>Well</span>
  <span m='428760'>just</span> <span m='429050'>note</span> <span m='431910'>if
  A</span> <span m='432270'>was</span> <span m='432560'>invertible,</span> <span
  m='434700'>then</span> <span m='435270'>the</span> <span
  m='435410'>inverse</span> <span m='435810'>of A</span> <span
  m='438880'>in</span> <span m='439060'>terms</span> <span m='439330'>of</span>
  <span m='439400'>the</span> <span m='439530'>SVD</span> <span
  m='440670'>would</span> <span m='440830'>be</span> <span m='442450'>V</span>
  <span m='442850'>transpose</span> <span m='445020'>times</span> <span
  m='445330'>the</span> <span m='445440'>inverse</span> <span
  m='445880'>of</span> <span m='445980'>sigma.</span> <span
  m='450800'>Sorry,</span> <span m='451140'>this</span> <span
  m='451310'>is</span> <span m='451430'>not</span> <span m='451620'>V</span>
  <span m='451720'>transpose,</span> <span m='452110'>this</span> <span
  m='452500'>is</span> <span m='452610'>just</span> <span m='452780'>V.</span>
  <span m='453860'>So</span> <span m='454020'>it'd</span> <span
  m='454060'>be</span> <span m='454210'>V</span> <span m='454670'>sigma</span>
  <span m='455030'>inverse</span> <span m='455365'>U</span> <span
  m='455700'>transpose.</span> <span m='459120'>And</span> <span
  m='461250'>when</span> <span m='461430'>A</span> <span m='461570'>is</span>
  <span m='461710'>invertible,</span> <span m='462980'>sigma</span> <span
  m='463360'>inverse</span> <span m='463780'>exists.</span> </p><p><span
  m='465400'>So</span> <span m='466230'>in</span> <span m='466390'>our</span>
  <span m='466520'>case,</span> <span m='467500'>sigma</span> <span
  m='467860'>inverse</span> <span m='469070'>doesn't</span> <span
  m='469350'>necessarily</span> <span m='469900'>exist</span> <span
  m='470200'>because</span> <span m='470480'>sigma--</span> <span
  m='471822'>note,</span> <span m='472240'>this</span> <span
  m='472420'>is</span> <span m='472510'>sigma--</span> <span
  m='475170'>sigma</span> <span m='475570'>is</span> <span
  m='475700'>root</span> <span m='475980'>5 and</span> <span
  m='476410'>0.</span> <span m='477290'>So</span> <span m='477470'>we</span>
  <span m='477560'>have</span> <span m='477740'>to</span> <span
  m='478190'>construct</span> <span m='480160'>a</span> <span
  m='480470'>pseudoinverse</span> <span m='481400'>for</span> <span
  m='481530'>sigma.</span> <span m='483970'>So</span> <span
  m='484450'>the</span> <span m='484580'>way</span> <span m='484760'>that</span>
  <span m='484860'>we</span> <span m='484980'>do</span> <span
  m='485160'>that</span> <span m='486030'>is</span> <span m='486610'>we</span>
  <span m='486780'>take</span> <span m='487380'>1</span> <span
  m='487640'>over</span> <span m='488630'>each</span> <span
  m='488820'>singular</span> <span m='489210'>value,</span> <span
  m='490230'>and</span> <span m='490380'>we</span> <span m='490480'>take</span>
  <span m='490680'>the</span> <span m='490760'>transpose</span> <span
  m='491270'>of</span> <span m='491360'>sigma.</span> <span m='494850'>So</span>
  <span m='495060'>when A</span> <span m='495250'>is</span> <span
  m='495560'>not</span> <span m='495780'>invertible,</span> <span
  m='497150'>we</span> <span m='497340'>can</span> <span m='497480'>still</span>
  <span m='497720'>construct</span> <span m='498230'>a</span> <span
  m='498280'>pseudoinverse</span> <span m='500040'>by</span> <span
  m='500150'>taking</span> <span m='500560'>V,</span> <span m='504510'>an</span>
  <span m='504670'>approximation</span> <span m='505350'>for</span> <span
  m='505550'>sigma</span> <span m='505780'>inverse,</span> <span
  m='508580'>which</span> <span m='508780'>in</span> <span m='508870'>our</span>
  <span m='509000'>case</span> <span m='509230'>is</span> <span
  m='509350'>going</span> <span m='509450'>to</span> <span m='509560'>be</span>
  <span m='509670'>1</span> <span m='509950'>over</span> <span
  m='510240'>the</span> <span m='510330'>singular</span> <span
  m='510690'>value</span> <span m='511480'>and</span> <span m='511640'>0.</span>
  <span m='513480'>So</span> <span m='513659'>note</span> <span
  m='516309'>where</span> <span m='516659'>sigma</span> <span
  m='517059'>is</span> <span m='517250'>invertible,</span> <span
  m='517870'>we</span> <span m='517990'>take</span> <span m='518190'>the</span>
  <span m='518289'>inverse,</span> <span m='519070'>and</span> <span
  m='519250'>then</span> <span m='519380'>we</span> <span m='519510'>fill</span>
  <span m='519799'>in</span> <span m='519890'>0's</span> <span
  m='520280'>in</span> <span m='520340'>the</span> <span m='520490'>other</span>
  <span m='520700'>areas.</span> <span m='522480'>Times</span> <span
  m='522780'>U</span> <span m='522909'>transpose.</span> </p><p><span
  m='526500'>And</span> <span m='526620'>we</span> <span m='526730'>can</span>
  <span m='526870'>work</span> <span m='527070'>this</span> <span
  m='527280'>out.</span> <span m='527920'>We</span> <span m='528070'>get</span>
  <span m='528250'>1</span> <span m='528400'>over root</span> <span
  m='528760'>5,</span> <span m='532450'>1,</span> <span m='533080'>minus</span>
  <span m='533460'>2;</span> <span m='534500'>2,</span> <span
  m='534770'>1,</span> <span m='538140'>1</span> <span m='538350'>over</span>
  <span m='538730'>root</span> <span m='538840'>5,</span> <span
  m='541460'>0.</span> <span m='547760'>And</span> <span m='548080'>if</span>
  <span m='548220'>I</span> <span m='548320'>multiply</span> <span
  m='548860'>things</span> <span m='549190'>out,</span> <span
  m='550080'>I</span> <span m='550190'>get</span> <span m='550390'>1/5,</span>
  <span m='553220'>[1;</span> <span m='555680'>2].</span> <span
  m='558380'>So</span> <span m='558570'>this</span> <span m='558760'>is</span>
  <span m='558850'>an</span> <span m='558920'>approximation</span> <span
  m='559650'>for A</span> <span m='559880'>inverse,</span> <span
  m='562640'>which</span> <span m='562790'>is</span> <span m='562880'>the</span>
  <span m='562970'>pseudoinverse.</span> </p><p><span m='565270'>So</span> <span
  m='565420'>this</span> <span m='565610'>finishes</span> <span
  m='565980'>up</span> <span m='566100'>part</span> <span m='566340'>one.</span>
  <span m='567290'>And</span> <span m='567620'>I'll</span> <span
  m='567780'>started</span> <span m='568040'>on</span> <span
  m='568140'>part</span> <span m='568360'>two</span> <span m='568470'>in</span>
  <span m='568550'>a</span> <span m='568590'>second.</span> </p><p><span
  m='575780'>So</span> <span m='575970'>now that</span> <span
  m='576210'>we've</span> <span m='576440'>just</span> <span
  m='576670'>computed</span> <span m='577330'>A plus,</span> <span
  m='578220'>the</span> <span m='578570'>pseudoinverse</span> <span
  m='579130'>of</span> <span m='579230'>A.</span> <span m='580050'>We're</span>
  <span m='580240'>going</span> <span m='580360'>to</span> <span
  m='580680'>investigate</span> <span m='581340'>some</span> <span
  m='581480'>properties</span> <span m='582530'>of</span> <span
  m='582660'>the</span> <span m='583050'>pseudoinverse.</span> <span
  m='584620'>So</span> <span m='584910'>for</span> <span m='585070'>part</span>
  <span m='585330'>two</span> <span m='585820'>we</span> <span
  m='585940'>need</span> <span m='586090'>to</span> <span
  m='586150'>compute</span> <span m='587130'>A</span> <span
  m='587750'>times</span> <span m='588070'>A</span> <span m='588210'>plus</span>
  <span m='589060'>and</span> <span m='589410'>A</span> <span
  m='589530'>plus</span> <span m='589780'>times</span> <span
  m='590060'>A.</span> <span m='592630'>So</span> <span m='593500'>we</span>
  <span m='593690'>can</span> <span m='593790'>just</span> <span
  m='593980'>go</span> <span m='594110'>ahead</span> <span m='594300'>and</span>
  <span m='594400'>do</span> <span m='594510'>this.</span> <span
  m='596150'>So</span> <span m='596660'>A</span> <span m='597600'>A</span> <span
  m='597760'>plus</span> <span m='599950'>you</span> <span m='600210'>can</span>
  <span m='600360'>do</span> <span m='602670'>fairly</span> <span
  m='602940'>quickly.</span> <span m='604590'>1/5,</span> <span
  m='605316'>[1;</span> <span m='605680'>2].</span> <span m='608000'>And</span>
  <span m='608230'>when</span> <span m='608360'>we</span> <span
  m='608460'>multiply</span> <span m='608740'>it out</span> <span
  m='609020'>we</span> <span m='609220'>get</span> <span m='609770'>1</span>
  <span m='610250'>plus</span> <span m='610570'>4</span> <span
  m='611120'>divided</span> <span m='611380'>by</span> <span m='611480'>5</span>
  <span m='613460'>is</span> <span m='613750'>1.</span> <span
  m='614720'>So</span> <span m='614870'>we</span> <span m='614950'>just</span>
  <span m='615160'>get</span> <span m='616780'>the</span> <span
  m='616870'>one</span> <span m='617060'>by</span> <span m='617170'>one</span>
  <span m='617370'>matrix,</span> <span m='617800'>which</span> <span
  m='617960'>is</span> <span m='618190'>1,</span> <span m='618620'>the</span>
  <span m='618750'>identity</span> <span m='619100'>matrix.</span> </p><p><span
  m='620860'>And</span> <span m='621710'>secondly,</span> <span m='622470'>if
  we</span> <span m='622740'>take</span> <span m='624000'>A</span> <span
  m='624130'>plus</span> <span m='624450'>times</span> <span m='624790'>A</span>
  <span m='627280'>we're</span> <span m='627370'>going</span> <span
  m='627600'>to</span> <span m='627640'>get</span> <span m='629860'>1/5,</span>
  <span m='631060'>[1;</span> <span m='631870'>2]</span> <span
  m='634060'>times</span> <span m='634830'>[1,</span> <span
  m='635130'>2].</span> <span m='637930'>And</span> <span m='638130'>we</span>
  <span m='638230'>can</span> <span m='638350'>just</span> <span
  m='638810'>fill</span> <span m='639120'>in</span> <span m='639200'>this</span>
  <span m='639360'>matrix.</span> <span m='640640'>This is</span> <span
  m='640720'>1/5,</span> <span m='642600'>[1,</span> <span m='643120'>2;</span>
  <span m='645390'>2,</span> <span m='646080'>1].</span> <span
  m='652070'>And</span> <span m='652470'>this</span> <span
  m='652660'>concludes</span> <span m='653050'>part</span> <span
  m='653260'>two.</span> </p><p><span m='654330'>So</span> <span
  m='654490'>now</span> <span m='654890'>let's</span> <span
  m='655320'>take</span> <span m='655460'>a</span> <span m='655510'>look</span>
  <span m='655720'>at</span> <span m='656120'>what</span> <span
  m='656460'>happens</span> <span m='656890'>when</span> <span
  m='657520'>a</span> <span m='657620'>vector</span> <span m='657940'>x</span>
  <span m='658200'>is</span> <span m='658300'>in</span> <span
  m='658390'>the</span> <span m='658480'>null</span> <span
  m='658640'>space</span> <span m='658950'>of</span> <span m='659040'>A,</span>
  <span m='659420'>and</span> <span m='659550'>then</span> <span
  m='659680'>secondly,</span> <span m='660380'>what</span> <span
  m='660600'>happens</span> <span m='661080'>when</span> <span
  m='661310'>x</span> <span m='661540'>is</span> <span m='661640'>in</span>
  <span m='661760'>the</span> <span m='661860'>column</span> <span
  m='662430'>space</span> <span m='662710'>of</span> <span m='662810'>A</span>
  <span m='662910'>transpose.</span> </p><p><span m='665280'>So</span> <span
  m='665590'>for</span> <span m='665760'>part</span> <span
  m='666040'>three,</span> <span m='669250'>let's</span> <span
  m='669430'>assume</span> <span m='669730'>x</span> <span m='669970'>is</span>
  <span m='670030'>in</span> <span m='670150'>the</span> <span
  m='670280'>null</span> <span m='670450'>space</span> <span
  m='670790'>of</span> <span m='670870'>A.</span> <span m='671540'>Well</span>
  <span m='672110'>what's</span> <span m='672260'>the</span> <span
  m='672410'>null</span> <span m='672580'>space</span> <span
  m='672860'>of</span> <span m='672960'>A?</span> <span m='673590'>We</span>
  <span m='673720'>can</span> <span m='673870'>quickly</span> <span
  m='674210'>check</span> <span m='674530'>that</span> <span
  m='675180'>the</span> <span m='675280'>null</span> <span
  m='675450'>space</span> <span m='675760'>of</span> <span m='675880'>A</span>
  <span m='679070'>is</span> <span m='679490'>a</span> <span
  m='679620'>constant</span> <span m='680310'>times</span> <span
  m='680650'>any</span> <span m='680870'>vector</span> <span
  m='682450'>minus</span> <span m='682930'>2,</span> <span m='683520'>1.</span>
  </p><p><span m='685730'>So</span> <span m='685910'>that's</span> <span
  m='686120'>the</span> <span m='686190'>null</span> <span
  m='686370'>space.</span> <span m='688270'>So</span> <span m='688520'>if</span>
  <span m='688670'>x</span> <span m='689200'>is,</span> <span
  m='689660'>for</span> <span m='689780'>example,</span> <span
  m='691250'>i.e.</span> <span m='692980'>if</span> <span m='693120'>we</span>
  <span m='693210'>take</span> <span m='693470'>x</span> <span
  m='693730'>is</span> <span m='693860'>equal</span> <span m='694090'>to</span>
  <span m='694190'>minus</span> <span m='694600'>2,</span> <span
  m='694840'>1,</span> <span m='698710'>and</span> <span m='699040'>we</span>
  <span m='699180'>were</span> <span m='699290'>to,</span> <span
  m='699370'>say,</span> <span m='699530'>multiply</span> <span
  m='700100'>it</span> <span m='700840'>by</span> <span m='702160'>A</span>
  <span m='702280'>plus</span> <span m='702640'>A,</span> <span
  m='707170'>acting</span> <span m='707500'>on</span> <span m='707670'>x,</span>
  <span m='708700'>we</span> <span m='708880'>see</span> <span
  m='709000'>that</span> <span m='709120'>we</span> <span m='709220'>get</span>
  <span m='709380'>0.</span> <span m='711840'>And</span> <span
  m='711990'>this</span> <span m='712140'>isn't</span> <span
  m='712360'>very</span> <span m='712560'>surprising</span> <span
  m='713240'>because,</span> <span m='714110'>well,</span> <span
  m='714480'>if</span> <span m='714610'>x</span> <span m='714820'>is</span>
  <span m='714920'>in</span> <span m='715040'>the</span> <span
  m='715110'>null</span> <span m='715280'>space</span> <span
  m='715580'>of</span> <span m='715680'>A,</span> <span m='716680'>we</span>
  <span m='716910'>know</span> <span m='717070'>that</span> <span
  m='717260'>A</span> <span m='717420'>acting</span> <span m='717820'>on</span>
  <span m='717970'>x</span> <span m='718180'>is</span> <span
  m='718300'>going</span> <span m='718420'>to</span> <span m='718540'>be</span>
  <span m='718670'>0.</span> <span m='722920'>So</span> <span
  m='723130'>that</span> <span m='723310'>no</span> <span
  m='723380'>matter</span> <span m='723760'>what</span> <span
  m='724150'>matrix</span> <span m='725640'>A</span> <span
  m='725780'>plus</span> <span m='726190'>is,</span> <span
  m='727500'>when</span> <span m='727640'>we</span> <span
  m='727740'>multiply</span> <span m='728220'>by</span> <span
  m='728390'>0,</span> <span m='729130'>we'll</span> <span
  m='729330'>always</span> <span m='729560'>end</span> <span
  m='729690'>up</span> <span m='729790'>with</span> <span m='729920'>0.</span>
  </p><p><span m='733740'>And</span> <span m='733880'>then</span> <span
  m='734240'>lastly,</span> <span m='736410'>let's</span> <span
  m='736730'>take</span> <span m='736900'>a</span> <span m='736950'>look</span>
  <span m='737160'>at</span> <span m='737860'>the</span> <span
  m='737970'>column</span> <span m='738300'>space</span> <span
  m='738610'>of</span> <span m='738690'>A</span> <span
  m='738780'>transpose.</span> <span m='742640'>Well,</span> <span
  m='742860'>A</span> <span m='742990'>transpose</span> <span
  m='743550'>is</span> <span m='743740'>[1,</span> <span m='744040'>2],</span>
  <span m='745510'>so</span> <span m='745740'>it's</span> <span
  m='745900'>any</span> <span m='746120'>constant</span> <span
  m='747050'>times</span> <span m='747340'>the</span> <span
  m='747410'>vector</span> <span m='747720'>[1;</span> <span
  m='748030'>2].</span> <span m='751880'>And</span> <span
  m='752340'>specifically,</span> <span m='753440'>if</span> <span
  m='753600'>we</span> <span m='753660'>were</span> <span m='753750'>to</span>
  <span m='753850'>take,</span> <span m='754540'>say,</span> <span
  m='754790'>x</span> <span m='755060'>is</span> <span m='755170'>equal</span>
  <span m='755390'>to</span> <span m='755450'>[1;</span> <span
  m='755720'>2],</span> <span m='759510'>we</span> <span m='759740'>can</span>
  <span m='759880'>work</span> <span m='760130'>at</span> <span
  m='760360'>A</span> <span m='760530'>plus</span> <span m='760960'>A</span>
  <span m='761370'>acting</span> <span m='761700'>on</span> <span
  m='761820'>the</span> <span m='762060'>vector</span> <span m='762440'>[1;
  2].</span> <span m='769070'>So</span> <span m='769220'>we</span> <span
  m='769300'>have</span> <span m='769530'>1/5</span> <span m='772100'>[1,</span>
  <span m='773424'>2;</span> <span m='774240'>2,</span> <span
  m='774460'>1].</span> <span m='776000'>So recall</span> <span
  m='776460'>this</span> <span m='776640'>is</span> <span m='778830'>A</span>
  <span m='778940'>plus</span> <span m='779300'>A.</span> <span
  m='781870'>And</span> <span m='781990'>if</span> <span m='782100'>we</span>
  <span m='782410'>multiply</span> <span m='782715'>it</span> <span
  m='783020'>on</span> <span m='783430'>the</span> <span
  m='783490'>vector</span> <span m='783820'>[1;</span> <span
  m='784130'>2],</span> <span m='785800'>we</span> <span m='785980'>get</span>
  <span m='786220'>1</span> <span m='786700'>plus</span> <span
  m='787130'>4</span> <span m='787480'>is</span> <span m='787620'>5,</span>
  <span m='788690'>divided</span> <span m='788980'>by</span> <span
  m='789100'>5,</span> <span m='789650'>so</span> <span m='789810'>we</span>
  <span m='789880'>get</span> <span m='790030'>1.</span> <span
  m='791980'>2</span> <span m='792460'>plus</span> <span m='793480'>2</span>
  <span m='793990'>is</span> <span m='794220'>4--</span> <span
  m='799310'>sorry,</span> <span m='800210'>I</span> <span
  m='800340'>copied</span> <span m='800550'>the</span> <span
  m='800700'>matrix</span> <span m='801070'>down.</span> <span
  m='801610'>So</span> <span m='801790'>it's</span> <span m='802240'>2</span>
  <span m='802470'>plus</span> <span m='803640'>8,</span> <span
  m='804090'>which</span> <span m='804270'>is</span> <span m='804380'>10,</span>
  <span m='804600'>divided</span> <span m='804840'>by</span> <span
  m='804950'>5</span> <span m='806730'>is</span> <span m='807090'>2.</span>
  <span m='810920'>And</span> <span m='811330'>we</span> <span
  m='811460'>see</span> <span m='811650'>that</span> <span m='811960'>at</span>
  <span m='812090'>the</span> <span m='812240'>end</span> <span
  m='812400'>we</span> <span m='812550'>recover</span> <span
  m='813040'>the</span> <span m='813200'>vector</span> <span
  m='813570'>x.</span> </p><p><span m='817170'>So</span> <span
  m='817580'>in</span> <span m='817760'>general,</span> <span
  m='818800'>if</span> <span m='818910'>we</span> <span m='819010'>take</span>
  <span m='820150'>A</span> <span m='820300'>plus</span> <span
  m='820730'>A</span> <span m='821190'>acting</span> <span m='821500'>on</span>
  <span m='821680'>x,</span> <span m='822700'>where</span> <span
  m='822980'>x</span> <span m='823260'>is</span> <span m='823410'>in</span>
  <span m='824060'>the</span> <span m='824600'>column</span> <span
  m='824930'>space</span> <span m='825210'>of</span> <span m='825280'>A</span>
  <span m='825370'>transpose,</span> <span m='827320'>we</span> <span
  m='827470'>always</span> <span m='827700'>recover</span> <span
  m='828070'>x</span> <span m='828840'>at</span> <span m='828950'>the</span>
  <span m='829030'>end</span> <span m='829110'>of</span> <span
  m='829200'>the</span> <span m='829270'>day.</span> <span m='830940'>So</span>
  <span m='831390'>intuitively,</span> <span m='832110'>what</span> <span
  m='832360'>does</span> <span m='832490'>this</span> <span
  m='832660'>matrix</span> <span m='833080'>A</span> <span
  m='833210'>plus</span> <span m='833570'>A</span> <span m='833720'>do?</span>
  <span m='834520'>Well,</span> <span m='836020'>if</span> <span
  m='836300'>x</span> <span m='836560'>is</span> <span m='836700'>in</span>
  <span m='836810'>the</span> <span m='836900'>null</span> <span
  m='837140'>space</span> <span m='837910'>of</span> <span m='838080'>A,</span>
  <span m='839990'>it</span> <span m='840200'>just</span> <span
  m='841530'>kills</span> <span m='841900'>it.</span> <span m='842410'>We</span>
  <span m='842560'>just</span> <span m='842750'>get</span> <span
  m='842900'>0.</span> <span m='844770'>If</span> <span m='844960'>x</span>
  <span m='845230'>is</span> <span m='845360'>not in</span> <span
  m='845610'>the</span> <span m='845700'>null</span> <span
  m='845900'>space</span> <span m='846200'>of</span> <span m='846300'>A,</span>
  <span m='847810'>then</span> <span m='848290'>we</span> <span
  m='848500'>just</span> <span m='848680'>get</span> <span m='848850'>x</span>
  <span m='849110'>back.</span> <span m='849710'>So</span> <span
  m='849980'>it's</span> <span m='850180'>essentially</span> <span
  m='850800'>the</span> <span m='850970'>identity</span> <span
  m='851490'>matrix</span> <span m='851910'>acting</span> <span
  m='852240'>on</span> <span m='852370'>x</span> <span
  m='852740'>whenever</span> <span m='853140'>x</span> <span
  m='853420'>is</span> <span m='854670'>in</span> <span m='854850'>the</span>
  <span m='854960'>column</span> <span m='855260'>space</span> <span
  m='855550'>of</span> <span m='855620'>A</span> <span
  m='855730'>transpose.</span> </p><p><span m='857520'>Now</span> <span
  m='857670'>specifically,</span> <span m='858480'>if</span> <span
  m='858720'>A</span> <span m='859090'>is</span> <span
  m='859230'>invertible,</span> <span m='860480'>then</span> <span
  m='860710'>A</span> <span m='860910'>doesn't</span> <span
  m='861180'>have</span> <span m='861340'>a</span> <span m='861400'>null</span>
  <span m='861610'>space.</span> <span m='862490'>So</span> <span
  m='862690'>what</span> <span m='862850'>that</span> <span
  m='863020'>means</span> <span m='863280'>is:</span> <span
  m='863810'>when</span> <span m='864010'>A</span> <span m='864150'>is</span>
  <span m='864280'>invertible,</span> <span m='865660'>A</span> <span
  m='865820'>plus</span> <span m='866590'>A</span> <span
  m='867590'>recovers</span> <span m='868400'>the</span> <span
  m='868570'>identity</span> <span m='869010'>because</span> <span
  m='869420'>when</span> <span m='869550'>we</span> <span
  m='869650'>multiply</span> <span m='869990'>it on</span> <span
  m='870330'>any</span> <span m='870540'>vector,</span> <span
  m='871110'>we</span> <span m='871380'>get</span> <span m='871530'>that</span>
  <span m='871690'>vector</span> <span m='871970'>back.</span> </p><p><span
  m='874540'>So I'd</span> <span m='874790'>like</span> <span
  m='874910'>to</span> <span m='875030'>conclude</span> <span
  m='875450'>here,</span> <span m='876120'>and</span> <span
  m='876750'>I'll</span> <span m='877010'>see</span> <span m='877170'>you</span>
  <span m='877260'>next</span> <span m='877490'>time.</span> </p>
uid: 067a5749da32b40dea0e7407dca864b0
type: courses
layout: video
---
