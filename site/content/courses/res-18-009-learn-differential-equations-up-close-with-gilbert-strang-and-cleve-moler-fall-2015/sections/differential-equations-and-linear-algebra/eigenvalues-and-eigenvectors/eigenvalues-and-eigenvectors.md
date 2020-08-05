---
about_this_resource_text: >-
  <p><strong>Description:</strong> The eigenvectors remain in the same direction
  when multiplied by the matrix. Subtracting an eigenvalue from the diagonal
  leaves a singular matrix: determinant zero. An <em>n</em> by <em>n</em> matrix
  has <em>n</em> eigenvalues.</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 6.1</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: DzqE7tj7eIM
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Video-YouTube-Stream
    type: Video
    uid: e41cb4c0722ebd00a576534b799988e1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/DzqE7tj7eIM/default.jpg'
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3da05d8e84e1a08a9c4479685d08506a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: DzqE7tj7eIM
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 84bdf7d77fb0dbbfbd7a797c530b672c
  - id: DzqE7tj7eIM.srt
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/eigenvalues-and-eigenvectors/DzqE7tj7eIM.srt
    title: 3play caption file
    type: null
    uid: 51bf5f360f227895fc6e75d90dd58a18
  - id: DzqE7tj7eIM.pdf
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/eigenvalues-and-eigenvectors/DzqE7tj7eIM.pdf
    title: 3play pdf file
    type: null
    uid: 8fcdda1802586cd5919dfbee323dc2fb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bf4bfaea077db9758087ddafe1c86883
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b36279fe93269561526db3bf8edeb745
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Video-iTunes U-MP4
    type: Video
    uid: 43c9ed5f367b2c950385cfdbe67966bf
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_6_1_EigenvaluesEigenvectors_300k.mp4
    parent_uid: 357fe5cdcf361a95588f19fb2677c64d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3b17b4eb9b51c28a9b675514164ddaf1
inline_embed_id: 61099259eigenvaluesandeigenvectors14355914
order_index: 401
parent_uid: eea80322d845c02f5a6079ba180150bd
related_resources_text: ''
short_url: eigenvalues-and-eigenvectors
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/eigenvalues-and-eigenvectors
title: Eigenvalues and Eigenvectors
transcript: >-
  <p><span m='2940'>GILBERT STRANG: So</span> <span m='3170'>today</span> <span
  m='3600'>begins</span> <span m='5540'>eigenvalues</span> <span
  m='6400'>and</span> <span m='6570'>eigenvectors.</span> <span
  m='8330'>And</span> <span m='8960'>the</span> <span m='9050'>reason</span>
  <span m='9420'>we</span> <span m='10180'>want</span> <span
  m='10530'>those,</span> <span m='10960'>need</span> <span
  m='11320'>those</span> <span m='11870'>is</span> <span m='12690'>to</span>
  <span m='12910'>solve</span> <span m='13730'>systems</span> <span
  m='15030'>of</span> <span m='15770'>linear</span> <span
  m='16350'>equations.</span> <span m='17540'>Systems</span> <span
  m='18120'>meaning</span> <span m='18960'>more</span> <span
  m='19220'>than</span> <span m='19460'>one</span> <span
  m='19700'>equation,</span> <span m='21260'>n</span> <span
  m='21660'>equations.</span> <span m='22680'>n</span> <span
  m='22910'>equal</span> <span m='23310'>2</span> <span m='23940'>in</span>
  <span m='24170'>the</span> <span m='24620'>examples</span> <span
  m='25340'>here.</span> </p><p><span m='27090'>So</span> <span
  m='27420'>eigenvalue</span> <span m='28740'>is</span> <span m='28920'>a</span>
  <span m='29010'>number,</span> <span m='30150'>eigenvector</span> <span
  m='31120'>is</span> <span m='31350'>a</span> <span m='31410'>vector.</span>
  <span m='32000'>They're</span> <span m='32200'>both</span> <span
  m='32880'>hiding</span> <span m='33460'>in</span> <span m='33580'>the</span>
  <span m='33670'>matrix.</span> <span m='35600'>Once</span> <span
  m='35800'>we</span> <span m='36030'>find</span> <span m='36400'>them,</span>
  <span m='37060'>we</span> <span m='37280'>can</span> <span
  m='37460'>use</span> <span m='37830'>them.</span> <span m='38640'>Let</span>
  <span m='38800'>me</span> <span m='38950'>show</span> <span
  m='39250'>you</span> <span m='39890'>the</span> <span m='40800'>reason</span>
  <span m='41460'>eigenvalues</span> <span m='42290'>were</span> <span
  m='42530'>created,</span> <span m='43600'>invented,</span> <span
  m='44290'>discovered</span> <span m='46380'>was</span> <span
  m='46690'>solving</span> <span m='48350'>differential</span> <span
  m='49000'>equations,</span> <span m='49970'>which</span> <span
  m='50150'>is</span> <span m='50320'>our</span> <span m='51140'>purpose.</span>
  </p><p><span m='52330'>So</span> <span m='53300'>why</span> <span
  m='53810'>is</span> <span m='54040'>now</span> <span m='54350'>a</span> <span
  m='54400'>vector--</span> <span m='55760'>so</span> <span
  m='55910'>this</span> <span m='56180'>is</span> <span m='56340'>a</span> <span
  m='56480'>system</span> <span m='57160'>of</span> <span
  m='57300'>equations.</span> <span m='59110'>I'll</span> <span
  m='59190'>do</span> <span m='59380'>an</span> <span m='59500'>example</span>
  <span m='60180'>in</span> <span m='60280'>a</span> <span
  m='60330'>minute.</span> <span m='61590'>A</span> <span m='61955'>is</span>
  <span m='62320'>a</span> <span m='62390'>matrix.</span> <span
  m='64760'>So</span> <span m='64930'>we</span> <span m='65090'>have</span>
  <span m='65470'>n</span> <span m='65800'>equations,</span> <span
  m='67150'>n</span> <span m='67540'>components</span> <span m='68230'>of</span>
  <span m='68360'>y.</span> <span m='69460'>And</span> <span m='70020'>A</span>
  <span m='71030'>is</span> <span m='71290'>an</span> <span m='71450'>n</span>
  <span m='71790'>by</span> <span m='72020'>n</span> <span
  m='72320'>matrix,</span> <span m='72950'>n</span> <span m='73330'>rows,</span>
  <span m='73860'>n</span> <span m='74170'>columns.</span> <span
  m='75550'>Good.</span> </p><p><span m='76660'>And</span> <span
  m='77050'>now</span> <span m='77540'>I</span> <span m='77670'>can</span> <span
  m='77890'>tell</span> <span m='78090'>you</span> <span m='78260'>right</span>
  <span m='78510'>away</span> <span m='79150'>where</span> <span
  m='79670'>eigenvalues</span> <span m='80600'>and</span> <span
  m='80820'>eigenvectors</span> <span m='81800'>pay</span> <span
  m='82160'>off.</span> <span m='83670'>They</span> <span m='83920'>come</span>
  <span m='84320'>into</span> <span m='84750'>the</span> <span
  m='84930'>solution.</span> <span m='86160'>We</span> <span
  m='86420'>look</span> <span m='86740'>for</span> <span
  m='86990'>solutions</span> <span m='88100'>of</span> <span
  m='88240'>that</span> <span m='88540'>kind.</span> <span m='89800'>When</span>
  <span m='90040'>we</span> <span m='90160'>had</span> <span
  m='90370'>one</span> <span m='90650'>equation,</span> <span
  m='91360'>we</span> <span m='91550'>looked</span> <span m='91860'>for</span>
  <span m='92050'>solutions</span> <span m='92790'>just</span> <span
  m='93260'>e</span> <span m='93630'>to</span> <span m='93780'>the</span> <span
  m='94210'>st,</span> <span m='95680'>and</span> <span m='95870'>we</span>
  <span m='96040'>found</span> <span m='96360'>that</span> <span
  m='96550'>number</span> <span m='96930'>s.</span> <span m='97890'>Now</span>
  <span m='98220'>we</span> <span m='98380'>have</span> <span m='98720'>e</span>
  <span m='99000'>to</span> <span m='99150'>the</span> <span
  m='99290'>lambda</span> <span m='99780'>t--</span> <span m='100160'>we</span>
  <span m='100370'>changed</span> <span m='101190'>s</span> <span
  m='101540'>to</span> <span m='101670'>lambda,</span> <span
  m='102170'>no</span> <span m='102370'>problem--</span> <span
  m='103990'>but</span> <span m='104270'>multiplied</span> <span
  m='105090'>by</span> <span m='105520'>a</span> <span m='105620'>vector</span>
  <span m='106120'>because</span> <span m='106580'>our</span> <span
  m='107880'>unknown</span> <span m='108430'>is</span> <span m='108570'>a</span>
  <span m='108630'>vector.</span> <span m='109610'>This</span> <span
  m='109760'>is</span> <span m='109920'>a</span> <span m='110000'>vector,</span>
  <span m='110670'>but</span> <span m='110900'>that</span> <span
  m='111150'>does</span> <span m='111420'>not</span> <span
  m='111740'>depend</span> <span m='112170'>on</span> <span
  m='112360'>time.</span> <span m='112830'>That's</span> <span
  m='113140'>the</span> <span m='113260'>beauty</span> <span
  m='113720'>of</span> <span m='113860'>it.</span> <span m='114510'>All</span>
  <span m='114820'>the</span> <span m='114980'>time</span> <span
  m='115350'>dependence</span> <span m='116090'>is</span> <span
  m='116360'>in</span> <span m='116590'>the</span> <span
  m='116760'>exponential,</span> <span m='118130'>as</span> <span
  m='118430'>always.</span> <span m='119330'>And</span> <span
  m='119870'>x</span> <span m='120360'>is</span> <span m='120630'>just</span>
  <span m='121600'>multiples</span> <span m='122350'>of</span> <span
  m='122470'>that</span> <span m='122700'>exponential,</span> <span
  m='123490'>as</span> <span m='123620'>you'll</span> <span
  m='123850'>see.</span> </p><p><span m='125870'>So</span> <span
  m='126130'>I</span> <span m='126260'>look</span> <span m='126580'>for</span>
  <span m='126750'>solutions</span> <span m='127430'>like</span> <span
  m='127720'>that.</span> <span m='128550'>I</span> <span m='128710'>plug</span>
  <span m='129110'>that</span> <span m='130449'>into</span> <span
  m='130880'>the</span> <span m='131420'>differential</span> <span
  m='132060'>equation</span> <span m='132970'>and</span> <span
  m='133120'>what</span> <span m='133320'>happens?</span> <span
  m='134510'>So</span> <span m='134640'>here's</span> <span m='134900'>my</span>
  <span m='135150'>equation.</span> <span m='136140'>I'm</span> <span
  m='136350'>plugging</span> <span m='136900'>in</span> <span
  m='137560'>what</span> <span m='138250'>e</span> <span m='138730'>to</span>
  <span m='138850'>the</span> <span m='139000'>lambda</span> <span
  m='139480'>tx,</span> <span m='140060'>that's</span> <span
  m='140320'>y.</span> <span m='141110'>That's</span> <span m='141500'>A</span>
  <span m='141810'>times</span> <span m='142240'>y</span> <span
  m='142690'>there.</span> <span m='143520'>Now,</span> <span
  m='144240'>the</span> <span m='144450'>derivative</span> <span
  m='145060'>of</span> <span m='145230'>y,</span> <span m='145830'>the</span>
  <span m='146000'>time</span> <span m='146370'>derivative,</span> <span
  m='147480'>brings</span> <span m='147900'>down</span> <span
  m='148310'>a</span> <span m='148420'>lambda.</span> <span m='150750'>To</span>
  <span m='150930'>get</span> <span m='151160'>the</span> <span
  m='151280'>derivative</span> <span m='151830'>I</span> <span
  m='151950'>include</span> <span m='152430'>the</span> <span
  m='152580'>lambda.</span> </p><p><span m='153520'>So</span> <span
  m='153700'>do you</span> <span m='153930'>see</span> <span
  m='154320'>that</span> <span m='155510'>substituting</span> <span
  m='156370'>into</span> <span m='156620'>the</span> <span
  m='156800'>equation</span> <span m='157850'>with</span> <span
  m='158040'>this</span> <span m='158300'>nice</span> <span
  m='159050'>notation</span> <span m='160390'>is</span> <span
  m='160610'>just</span> <span m='161300'>this</span> <span
  m='161850'>has</span> <span m='162200'>to</span> <span m='162300'>be</span>
  <span m='162480'>true.</span> <span m='163360'>My</span> <span
  m='163580'>equation</span> <span m='164590'>changed</span> <span
  m='165410'>to</span> <span m='165580'>that</span> <span
  m='166370'>form.</span> <span m='167050'>OK</span> <span m='167970'>Now</span>
  <span m='168670'>I</span> <span m='168820'>cancel</span> <span
  m='169510'>either</span> <span m='169790'>the</span> <span
  m='169940'>lambda</span> <span m='170410'>t,</span> <span
  m='170850'>just</span> <span m='171100'>the</span> <span m='171190'>way</span>
  <span m='171430'>I</span> <span m='171560'>was</span> <span
  m='171820'>always</span> <span m='172220'>canceling</span> <span
  m='173330'>e</span> <span m='173560'>to</span> <span m='173630'>the</span>
  <span m='173830'>st.</span> <span m='174980'>So</span> <span
  m='175110'>I</span> <span m='175220'>cancel</span> <span m='175650'>e</span>
  <span m='176130'>to the</span> <span m='176280'>lambda</span> <span
  m='176740'>t</span> <span m='176960'>because</span> <span
  m='177260'>it's</span> <span m='177440'>never</span> <span
  m='177770'>zero.</span> <span m='178700'>And</span> <span m='178900'>I</span>
  <span m='179070'>have</span> <span m='179510'>the</span> <span
  m='179610'>big</span> <span m='179890'>equation,</span> <span
  m='180870'>Ax,</span> <span m='183260'>the</span> <span
  m='183380'>matrix</span> <span m='184080'>times</span> <span
  m='184440'>my</span> <span m='184700'>eigenvector,</span> <span
  m='186180'>is</span> <span m='186350'>equal</span> <span m='186760'>to</span>
  <span m='187330'>lambda</span> <span m='187920'>x--</span> <span
  m='189250'>the</span> <span m='189490'>number,</span> <span
  m='190260'>the</span> <span m='190460'>eigenvalue,</span> <span
  m='191640'>times</span> <span m='192040'>the</span> <span
  m='192200'>eigenvector.</span> <span m='193680'>Not</span> <span
  m='193980'>linear,</span> <span m='194420'>notice.</span> <span
  m='196140'>Two</span> <span m='196380'>unknowns</span> <span
  m='196940'>here</span> <span m='197170'>that</span> <span
  m='197370'>are</span> <span m='197470'>multiplied.</span> <span
  m='198210'>A</span> <span m='198310'>number,</span> <span
  m='199120'>lambda,</span> <span m='199880'>times</span> <span
  m='200270'>a</span> <span m='200330'>vector,</span> <span m='200780'>x.</span>
  </p><p><span m='201820'>So</span> <span m='202260'>what</span> <span
  m='202470'>am</span> <span m='202600'>I</span> <span m='202700'>looking</span>
  <span m='203110'>for?</span> <span m='203960'>I'm</span> <span
  m='204040'>looking</span> <span m='204500'>for</span> <span
  m='204730'>vectors</span> <span m='205360'>x,</span> <span
  m='207270'>the</span> <span m='207480'>eigenvectors,</span> <span
  m='208880'>so</span> <span m='209130'>that</span> <span
  m='209440'>multiplying</span> <span m='210420'>by</span> <span
  m='210780'>A--</span> <span m='212090'>multiplying</span> <span
  m='212770'>A</span> <span m='213030'>times</span> <span m='213510'>x</span>
  <span m='214490'>gives</span> <span m='215190'>a</span> <span
  m='215310'>number</span> <span m='215880'>times</span> <span
  m='216320'>x.</span> <span m='216700'>It's</span> <span m='216880'>in</span>
  <span m='217040'>the</span> <span m='217180'>same</span> <span
  m='217560'>direction</span> <span m='218150'>as</span> <span
  m='218310'>x</span> <span m='219430'>just</span> <span m='220080'>the</span>
  <span m='220230'>length</span> <span m='220620'>is</span> <span
  m='220870'>changed.</span> <span m='221870'>Well,</span> <span
  m='222120'>if</span> <span m='222270'>lambda</span> <span
  m='223210'>was</span> <span m='223640'>1,</span> <span m='224550'>I</span>
  <span m='224730'>would</span> <span m='224940'>have</span> <span
  m='225190'>Ax</span> <span m='225760'>equal</span> <span m='226210'>x.</span>
  <span m='226590'>That's</span> <span m='227000'>allowed.</span> </p><p><span
  m='227850'>If</span> <span m='228070'>lambda</span> <span m='228480'>is</span>
  <span m='228720'>0,</span> <span m='229430'>I</span> <span
  m='229620'>would</span> <span m='229790'>have</span> <span
  m='230050'>Ax</span> <span m='230560'>equals</span> <span m='230940'>0.</span>
  <span m='231400'>That's</span> <span m='231760'>all</span> <span
  m='231940'>right.</span> <span m='232810'>I</span> <span
  m='232920'>don't</span> <span m='233250'>want</span> <span m='233650'>x</span>
  <span m='234000'>to</span> <span m='234110'>be</span> <span
  m='234270'>0.</span> <span m='234640'>That's</span> <span
  m='234980'>useless.</span> <span m='237085'>That's</span> <span
  m='237470'>no</span> <span m='237740'>help</span> <span m='238080'>to</span>
  <span m='238250'>know</span> <span m='238540'>that</span> <span
  m='238800'>0</span> <span m='239270'>is</span> <span m='239410'>a</span> <span
  m='239500'>solution.</span> <span m='241780'>So</span> <span
  m='242270'>x</span> <span m='242570'>should</span> <span m='242840'>be</span>
  <span m='242990'>not</span> <span m='243330'>0.</span> <span
  m='244070'>Lambda</span> <span m='244570'>can</span> <span
  m='244770'>be</span> <span m='245190'>any</span> <span
  m='245500'>number.</span> <span m='246990'>It</span> <span
  m='247080'>can</span> <span m='247280'>be</span> <span m='247470'>real,</span>
  <span m='248200'>it</span> <span m='248400'>could</span> <span
  m='248580'>be</span> <span m='248760'>complex</span> <span
  m='249460'>number,</span> <span m='249880'>as</span> <span
  m='250020'>you</span> <span m='250230'>will</span> <span
  m='250460'>see.</span> <span m='251120'>Even</span> <span m='251500'>if</span>
  <span m='251640'>the</span> <span m='251750'>matrix</span> <span
  m='252310'>is</span> <span m='252560'>real,</span> <span
  m='253250'>lambda</span> <span m='253720'>could</span> <span
  m='253900'>be</span> <span m='254120'>complex.</span> <span
  m='254860'>Anyway,</span> <span m='255660'>Ax</span> <span
  m='256149'>equal</span> <span m='256420'>lambda</span> <span
  m='256760'>x.</span> <span m='257190'>That's</span> <span
  m='257550'>the</span> <span m='257649'>big</span> <span
  m='257890'>equation.</span> <span m='259029'>It</span> <span
  m='259190'>got</span> <span m='259420'>a</span> <span m='259470'>box</span>
  <span m='259920'>around</span> <span m='260360'>it.</span> </p><p><span
  m='261690'>So</span> <span m='261910'>now</span> <span m='262610'>I'm</span>
  <span m='262790'>ready</span> <span m='263790'>to</span> <span
  m='264330'>do</span> <span m='264550'>an</span> <span
  m='264640'>example.</span> <span m='266820'>And</span> <span
  m='266940'>in</span> <span m='267110'>this</span> <span
  m='267340'>example,</span> <span m='268670'>first</span> <span
  m='268910'>of</span> <span m='269010'>all,</span> <span m='269460'>I'm</span>
  <span m='269580'>going</span> <span m='269800'>to</span> <span
  m='271170'>spot</span> <span m='271750'>the</span> <span
  m='271940'>eigenvalues</span> <span m='272710'>and</span> <span
  m='272870'>eigenvectors</span> <span m='273670'>without</span> <span
  m='274220'>a</span> <span m='274280'>system,</span> <span
  m='275090'>just</span> <span m='275820'>go</span> <span m='276040'>for</span>
  <span m='276350'>it</span> <span m='276750'>in</span> <span
  m='276920'>the</span> <span m='277060'>2</span> <span m='277240'>by</span>
  <span m='277450'>2</span> <span m='277760'>case.</span> <span
  m='279090'>So</span> <span m='279260'>I'll</span> <span m='279460'>give</span>
  <span m='279660'>a</span> <span m='279770'>2</span> <span m='279950'>by</span>
  <span m='280140'>2</span> <span m='280360'>matrix</span> <span
  m='280900'>A.</span> <span m='281760'>We'll</span> <span
  m='282190'>find</span> <span m='282580'>the</span> <span
  m='282670'>lambdas</span> <span m='283360'>and</span> <span
  m='283510'>the</span> <span m='283650'>x's,</span> <span m='284690'>and</span>
  <span m='284900'>then</span> <span m='285080'>we'll</span> <span
  m='285280'>have</span> <span m='286020'>the</span> <span
  m='286180'>solution</span> <span m='287230'>to</span> <span
  m='287810'>the</span> <span m='287970'>system</span> <span
  m='288690'>of</span> <span m='288900'>differential</span> <span
  m='289480'>equations.</span> <span m='290180'>Good.</span> </p><p><span
  m='293050'>There's</span> <span m='293400'>the</span> <span
  m='293550'>system.</span> <span m='295420'>There's</span> <span
  m='295710'>the</span> <span m='295840'>first</span> <span
  m='296200'>equation</span> <span m='296840'>for</span> <span
  m='297080'>y1--</span> <span m='298310'>prime</span> <span
  m='298840'>meaning</span> <span m='299260'>derivative,</span> <span
  m='300620'>d</span> <span m='300820'>by</span> <span m='301020'>dt,</span>
  <span m='301770'>time</span> <span m='302120'>derivative--</span> <span
  m='303030'>is</span> <span m='304100'>linear,</span> <span m='304465'>a</span>
  <span m='304830'>constant</span> <span m='305370'>coefficient.</span> <span
  m='306220'>Second</span> <span m='306740'>one,</span> <span
  m='307140'>linear,</span> <span m='307780'>constant</span> <span
  m='308350'>coefficient,</span> <span m='309110'>3</span> <span
  m='309390'>and</span> <span m='309540'>3.</span> <span m='310280'>Those</span>
  <span m='310670'>numbers,</span> <span m='311280'>5,</span> <span
  m='311930'>1,</span> <span m='312510'>3,</span> <span m='312965'>3,</span>
  <span m='313420'>go</span> <span m='313680'>into</span> <span
  m='313880'>the</span> <span m='314020'>matrix.</span> <span
  m='315540'>Then</span> <span m='315850'>that</span> <span
  m='316300'>problem</span> <span m='316870'>is</span> <span
  m='317050'>exactly</span> <span m='318290'>y</span> <span
  m='318770'>prime,</span> <span m='319750'>the</span> <span
  m='319860'>vector,</span> <span m='321410'>derivative</span> <span
  m='321970'>of</span> <span m='322090'>the</span> <span
  m='322190'>vector,</span> <span m='322690'>equal</span> <span
  m='323240'>A</span> <span m='323510'>times</span> <span m='323960'>y.</span>
  <span m='325890'>That's</span> <span m='326210'>my</span> <span
  m='326370'>problem.</span> </p><p><span m='327380'>Now</span> <span
  m='328160'>eigenvalues</span> <span m='329200'>and</span> <span
  m='329400'>eigenvectors</span> <span m='330370'>will</span> <span
  m='330610'>solve</span> <span m='330990'>it.</span> <span m='332800'>So</span>
  <span m='333980'>I</span> <span m='334120'>just</span> <span
  m='334430'>look</span> <span m='334730'>at</span> <span m='334820'>that</span>
  <span m='335050'>matrix.</span> <span m='336340'>Matrix</span> <span
  m='336990'>question.</span> <span m='337870'>What</span> <span
  m='338290'>are</span> <span m='338520'>the</span> <span
  m='338760'>eigenvalues,</span> <span m='339730'>what</span> <span
  m='340020'>are</span> <span m='340220'>the</span> <span
  m='340450'>eigenvectors</span> <span m='341360'>of</span> <span
  m='341480'>that</span> <span m='341770'>matrix?</span> <span
  m='343270'>And</span> <span m='343440'>remember,</span> <span
  m='345420'>I</span> <span m='345540'>want</span> <span m='347940'>Ax</span>
  <span m='349380'>equals</span> <span m='349970'>lambda</span> <span
  m='350640'>x.</span> </p><p><span m='352182'>I've</span> <span
  m='353640'>spotted</span> <span m='354290'>the</span> <span
  m='354400'>first</span> <span m='354790'>eigenvector.</span> <span
  m='355680'>1,</span> <span m='356100'>1.</span> <span m='358370'>We</span>
  <span m='358510'>could</span> <span m='358650'>just</span> <span
  m='358920'>check</span> <span m='359260'>does</span> <span
  m='359490'>it</span> <span m='359650'>work.</span> <span m='360750'>If</span>
  <span m='360960'>I</span> <span m='361080'>multiply</span> <span
  m='362540'>A</span> <span m='363045'>by</span> <span m='363320'>that</span>
  <span m='363970'>eigenvector,</span> <span m='364340'>1,</span> <span
  m='364700'>1,</span> <span m='365250'>do</span> <span m='365520'>you</span>
  <span m='365700'>see</span> <span m='365910'>what</span> <span
  m='366120'>happens</span> <span m='366650'>when</span> <span
  m='366870'>I</span> <span m='366910'>multiply</span> <span
  m='367390'>by</span> <span m='367560'>1?</span> <span m='368350'>That</span>
  <span m='368630'>gives</span> <span m='368860'>me</span> <span
  m='369020'>a</span> <span m='369100'>6.</span> <span m='370380'>That</span>
  <span m='370690'>gives</span> <span m='370950'>me</span> <span
  m='371130'>a</span> <span m='371210'>6.</span> <span m='372700'>So</span>
  <span m='373010'>A</span> <span m='373820'>times</span> <span
  m='374280'>that</span> <span m='374620'>vector</span> <span
  m='375160'>is</span> <span m='375500'>6,</span> <span m='375930'>6.</span>
  <span m='377210'>And</span> <span m='377420'>that</span> <span
  m='377660'>is</span> <span m='377960'>6</span> <span m='378500'>times</span>
  <span m='379610'>1,</span> <span m='379910'>1.</span> <span
  m='380870'>So</span> <span m='381100'>there</span> <span m='381370'>you</span>
  <span m='381490'>go.</span> <span m='382310'>Found</span> <span
  m='382690'>the</span> <span m='382810'>first</span> <span
  m='383190'>eigenvalue.</span> <span m='384610'>If</span> <span
  m='384820'>I</span> <span m='384920'>multiply</span> <span m='385500'>A</span>
  <span m='385910'>by</span> <span m='386180'>x,</span> <span
  m='386710'>I</span> <span m='386880'>get</span> <span m='387200'>6</span>
  <span m='387920'>by</span> <span m='388180'>x.</span> <span
  m='389050'>I</span> <span m='389170'>get</span> <span m='389420'>the</span>
  <span m='389510'>vector</span> <span m='390000'>6,</span> <span
  m='390350'>6.</span> </p><p><span m='391420'>Now,</span> <span
  m='392210'>the</span> <span m='392320'>second</span> <span
  m='392700'>one.</span> <span m='393440'>Again,</span> <span
  m='394960'>I've</span> <span m='395170'>worked</span> <span
  m='395700'>in</span> <span m='395880'>advance,</span> <span
  m='396930'>produced</span> <span m='397460'>this</span> <span
  m='397720'>eigenvector,</span> <span m='399170'>and</span> <span
  m='399520'>I</span> <span m='399610'>think</span> <span m='399880'>it's</span>
  <span m='400060'>1</span> <span m='400620'>minus</span> <span
  m='401110'>3.</span> <span m='402220'>So</span> <span m='402410'>let's</span>
  <span m='402840'>multiply</span> <span m='403500'>by</span> <span
  m='403800'>A.</span> <span m='404580'>Try</span> <span m='404940'>the</span>
  <span m='405210'>second</span> <span m='405670'>eigenvector.</span> <span
  m='406430'>I</span> <span m='406550'>should</span> <span
  m='406850'>call</span> <span m='407140'>this</span> <span
  m='407770'>first</span> <span m='408160'>one</span> <span
  m='408340'>maybe</span> <span m='408690'>x1</span> <span m='409440'>and</span>
  <span m='409590'>lambda</span> <span m='410020'>1.</span> <span m='411010'>And
  I</span> <span m='411110'>should</span> <span m='411360'>call</span> <span
  m='411670'>this</span> <span m='411930'>one</span> <span m='412130'>x2</span>
  <span m='412730'>and</span> <span m='412820'>lambda</span> <span
  m='413210'>2.</span> <span m='414070'>And</span> <span m='414290'>we</span>
  <span m='414450'>can</span> <span m='414640'>find</span> <span
  m='414990'>out</span> <span m='415130'>what</span> <span
  m='415290'>lambda</span> <span m='415680'>2</span> <span m='415960'>is,</span>
  <span m='417640'>once</span> <span m='417970'>I</span> <span
  m='418070'>find</span> <span m='418400'>the</span> <span
  m='418530'>eigenvectors</span> <span m='419290'>of</span> <span
  m='419420'>course.</span> <span m='420160'>I</span> <span
  m='420280'>just</span> <span m='420620'>do</span> <span m='421250'>A</span>
  <span m='421520'>times</span> <span m='421950'>x</span> <span
  m='422310'>to</span> <span m='422850'>recognize</span> <span
  m='423640'>the</span> <span m='424150'>lambda,</span> <span
  m='424700'>the</span> <span m='424880'>eigenvalue.</span> </p><p><span
  m='426060'>So</span> <span m='426300'>5,</span> <span m='426860'>1</span>
  <span m='427500'>times</span> <span m='427910'>this</span> <span
  m='428240'>is</span> <span m='428480'>5</span> <span m='429260'>minus</span>
  <span m='429780'>3</span> <span m='430120'>is</span> <span m='430260'>a</span>
  <span m='430410'>2.</span> <span m='431580'>It's</span> <span
  m='431780'>a</span> <span m='431890'>2.</span> <span m='434250'>So</span>
  <span m='434710'>here</span> <span m='434990'>I</span> <span
  m='435050'>got</span> <span m='436120'>a</span> <span m='436270'>2.</span>
  <span m='437680'>And</span> <span m='438170'>from</span> <span
  m='438400'>3,</span> <span m='438810'>3</span> <span m='439220'>it's</span>
  <span m='439730'>3</span> <span m='440730'>minus</span> <span
  m='441430'>9</span> <span m='442360'>is</span> <span m='442980'>minus</span>
  <span m='443580'>6.</span> <span m='445020'>That's</span> <span
  m='445240'>what</span> <span m='445440'>I</span> <span m='445520'>got</span>
  <span m='445800'>for</span> <span m='445980'>Ax.</span> <span
  m='448410'>There</span> <span m='448710'>was</span> <span
  m='448880'>the</span> <span m='449040'>x.</span> <span m='451020'>When</span>
  <span m='451200'>I</span> <span m='451280'>did</span> <span
  m='451510'>the</span> <span m='451600'>multiplication,</span> <span
  m='452015'>Ax</span> <span m='453020'>came</span> <span m='453310'>out</span>
  <span m='453500'>to</span> <span m='453570'>be</span> <span
  m='453780'>2</span> <span m='454070'>minus</span> <span m='454460'>6.</span>
  <span m='454920'>Good.</span> </p><p><span m='456360'>That</span> <span
  m='457630'>output</span> <span m='458950'>is</span> <span
  m='459280'>two</span> <span m='459580'>times</span> <span
  m='460290'>the</span> <span m='460430'>input.</span> <span
  m='461380'>The</span> <span m='461520'>eigenvalue</span> <span
  m='462350'>is</span> <span m='462570'>2.</span> <span m='464050'>Right?</span>
  <span m='465370'>I'm</span> <span m='465560'>looking</span> <span
  m='465940'>for</span> <span m='466120'>inputs,</span> <span
  m='468230'>the</span> <span m='468430'>eigenvector,</span> <span
  m='469560'>so</span> <span m='469780'>that</span> <span m='469980'>the</span>
  <span m='470150'>output</span> <span m='471300'>is</span> <span
  m='472120'>a</span> <span m='472230'>number</span> <span
  m='472720'>times</span> <span m='473080'>that</span> <span
  m='473290'>eigenvector,</span> <span m='474420'>and</span> <span
  m='474640'>that</span> <span m='474860'>number</span> <span
  m='475250'>is</span> <span m='476040'>lambda,</span> <span
  m='476500'>the</span> <span m='476690'>eigenvalue.</span> <span
  m='477730'>So</span> <span m='477920'>I've</span> <span m='478200'>now</span>
  <span m='478470'>found</span> <span m='479870'>the</span> <span
  m='480090'>two.</span> <span m='481510'>And</span> <span m='481740'>I</span>
  <span m='481830'>expect</span> <span m='482340'>two</span> <span
  m='482850'>for</span> <span m='483050'>a</span> <span m='483150'>2</span>
  <span m='483320'>by</span> <span m='483550'>2</span> <span
  m='483800'>matrix.</span> <span m='484730'>You</span> <span
  m='484910'>will</span> <span m='485310'>soon</span> <span
  m='485760'>see</span> <span m='486020'>why</span> <span m='486450'>I</span>
  <span m='486640'>expect</span> <span m='487230'>two</span> <span
  m='487480'>eigenvalues,</span> <span m='488820'>and</span> <span
  m='489020'>each</span> <span m='489320'>eigenvalue</span> <span
  m='490080'>should</span> <span m='490310'>have</span> <span
  m='490560'>an</span> <span m='490700'>eigenvector.</span> </p><p><span
  m='492380'>So</span> <span m='494680'>here</span> <span m='494930'>they</span>
  <span m='495130'>are</span> <span m='495390'>for</span> <span
  m='495570'>this</span> <span m='495840'>matrix.</span> <span
  m='497050'>So</span> <span m='497630'>I've</span> <span m='498020'>got</span>
  <span m='498220'>the</span> <span m='498360'>answers</span> <span
  m='498930'>now.</span> <span m='499730'>y</span> <span m='500050'>of</span>
  <span m='500240'>t,</span> <span m='504440'>which</span> <span
  m='504610'>stands</span> <span m='505150'>for</span> <span
  m='506060'>y1</span> <span m='506980'>and</span> <span m='507200'>y2</span>
  <span m='507870'>of</span> <span m='508070'>t.</span> <span
  m='510960'>Those</span> <span m='511640'>are--</span> <span
  m='513350'>it's</span> <span m='513690'>e</span> <span m='514080'>to
  the</span> <span m='514380'>lambda</span> <span m='514860'>tx.</span> <span
  m='516280'>Remember,</span> <span m='516750'>that's</span> <span
  m='517159'>the</span> <span m='517630'>picture</span> <span
  m='518080'>that</span> <span m='518230'>we're</span> <span
  m='518380'>looking</span> <span m='518760'>for.</span> </p><p><span
  m='519470'>So</span> <span m='519549'>the</span> <span m='519679'>first</span>
  <span m='520070'>one</span> <span m='520270'>is</span> <span
  m='520530'>e</span> <span m='521679'>to</span> <span m='522090'>the</span>
  <span m='522270'>6t</span> <span m='524000'>times</span> <span
  m='524460'>x,</span> <span m='525010'>which</span> <span m='525140'>is</span>
  <span m='525270'>1,</span> <span m='525680'>1.</span> <span
  m='527770'>If</span> <span m='527980'>I</span> <span m='528100'>put</span>
  <span m='528400'>that</span> <span m='528760'>into</span> <span
  m='529500'>the</span> <span m='529670'>equation,</span> <span
  m='530270'>it</span> <span m='530400'>will</span> <span
  m='530580'>solve</span> <span m='530940'>the</span> <span
  m='531060'>equation.</span> <span m='532490'>Also,</span> <span
  m='533990'>I</span> <span m='534030'>have</span> <span
  m='534170'>another</span> <span m='534510'>one.</span> <span
  m='535502'>e</span> <span m='536000'>to</span> <span m='536200'>the</span>
  <span m='537210'>lambda</span> <span m='537660'>2</span> <span
  m='538110'>was</span> <span m='538300'>2t.</span> <span m='540330'>e to</span>
  <span m='540450'>the</span> <span m='540580'>lambda</span> <span
  m='541060'>t</span> <span m='541430'>times</span> <span m='541860'>its</span>
  <span m='542150'>eigenvector,</span> <span m='543790'>1</span> <span
  m='544310'>minus</span> <span m='544820'>3.</span> <span
  m='546330'>That's</span> <span m='546590'>a</span> <span
  m='546700'>solution</span> <span m='547270'>also.</span> <span
  m='548520'>One</span> <span m='548790'>solution,</span> <span
  m='549400'>another</span> <span m='549840'>solution.</span> </p><p><span
  m='550490'>And</span> <span m='550670'>what</span> <span m='550860'>do</span>
  <span m='551010'>I</span> <span m='551130'>do</span> <span
  m='551520'>with</span> <span m='551750'>linear</span> <span
  m='552190'>equations?</span> <span m='553350'>I</span> <span
  m='553460'>take</span> <span m='553800'>combinations.</span> <span
  m='556040'>Any</span> <span m='556340'>number</span> <span
  m='557090'>c1</span> <span m='557680'>of</span> <span m='557780'>that,</span>
  <span m='558710'>plus</span> <span m='558860'>any</span> <span
  m='559120'>number</span> <span m='559630'>c2</span> <span m='560160'>of</span>
  <span m='560260'>that</span> <span m='561090'>is</span> <span
  m='561290'>still</span> <span m='561660'>a</span> <span
  m='561720'>solution.</span> <span m='563370'>That's</span> <span
  m='563650'>superposition,</span> <span m='564900'>adding</span> <span
  m='565490'>solutions</span> <span m='566280'>to</span> <span
  m='566400'>linear</span> <span m='566790'>equations.</span> <span
  m='568890'>These</span> <span m='569160'>are</span> <span
  m='569320'>null</span> <span m='569670'>equations.</span> <span
  m='571500'>There's</span> <span m='571850'>no</span> <span
  m='572530'>force</span> <span m='572960'>term</span> <span
  m='573330'>in</span> <span m='573470'>these</span> <span
  m='573730'>equations.</span> <span m='575130'>I'm</span> <span
  m='575240'>not</span> <span m='575480'>dealing</span> <span
  m='575820'>with</span> <span m='575990'>a</span> <span m='576050'>force</span>
  <span m='576440'>term.</span> <span m='576740'>I'm</span> <span
  m='576970'>looking</span> <span m='577370'>for</span> <span
  m='577570'>the</span> <span m='578010'>null</span> <span
  m='578460'>solutions,</span> <span m='579200'>the</span> <span
  m='579670'>solutions</span> <span m='580800'>of</span> <span
  m='581120'>the</span> <span m='581670'>equations</span> <span
  m='582360'>themselves.</span> </p><p><span m='583320'>And</span> <span
  m='584320'>there</span> <span m='584510'>I</span> <span m='584670'>have</span>
  <span m='586900'>two</span> <span m='587170'>solutions,</span> <span
  m='588520'>two</span> <span m='588810'>coefficients</span> <span
  m='589670'>to</span> <span m='589830'>choose.</span> <span
  m='590510'>How</span> <span m='590710'>do</span> <span m='590900'>I</span>
  <span m='591050'>choose</span> <span m='591480'>them?</span> <span
  m='592290'>Of</span> <span m='592480'>course,</span> <span m='593440'>I</span>
  <span m='593560'>match</span> <span m='594000'>the</span> <span
  m='594140'>initial</span> <span m='594580'>condition,</span> <span
  m='595770'>so</span> <span m='595900'>at</span> <span m='596120'>t</span>
  <span m='596370'>equals</span> <span m='596700'>0.</span> <span
  m='599990'>At</span> <span m='600200'>t</span> <span m='600450'>equals</span>
  <span m='600790'>0.</span> <span m='601700'>At</span> <span
  m='603370'>t</span> <span m='603570'>equals</span> <span m='603940'>0,</span>
  <span m='605150'>I</span> <span m='605350'>would</span> <span
  m='605580'>have</span> <span m='605870'>y</span> <span m='606230'>of</span>
  <span m='606340'>0.</span> <span m='610160'>That's</span> <span
  m='610490'>my</span> <span m='611290'>given</span> <span
  m='611880'>initial</span> <span m='612390'>condition,</span> <span
  m='613040'>my</span> <span m='613450'>y1</span> <span m='614110'>and</span>
  <span m='614300'>y2.</span> </p><p><span m='616350'>So</span> <span
  m='616510'>I'm</span> <span m='616680'>setting</span> <span
  m='617110'>t</span> <span m='617400'>equals</span> <span m='617740'>0,</span>
  <span m='618420'>so</span> <span m='618780'>that's</span> <span
  m='619470'>one</span> <span m='619940'>of</span> <span
  m='620070'>course.</span> <span m='620480'>When</span> <span
  m='620700'>t</span> <span m='620950'>is</span> <span m='621110'>0,</span>
  <span m='621470'>that's</span> <span m='621750'>one.</span> <span
  m='622530'>So</span> <span m='622700'>I</span> <span m='622830'>just</span>
  <span m='623150'>have</span> <span m='623420'>c1</span> <span
  m='624920'>times</span> <span m='625570'>1,</span> <span m='625920'>1.</span>
  <span m='627240'>And</span> <span m='627710'>c2--</span> <span
  m='631620'>that's</span> <span m='632030'>one</span> <span
  m='632480'>again</span> <span m='633270'>at</span> <span m='633480'>t</span>
  <span m='633660'>equals</span> <span m='634000'>o--</span> <span
  m='634746'>times</span> <span m='635120'>1</span> <span
  m='636440'>minus</span> <span m='637000'>3.</span> <span
  m='638980'>That's</span> <span m='639370'>what</span> <span
  m='639660'>determines</span> <span m='641310'>c1</span> <span
  m='642300'>and</span> <span m='642640'>c2.</span> <span m='644230'>c1</span>
  <span m='644500'>and</span> <span m='644660'>c2</span> <span
  m='645700'>come</span> <span m='646020'>from</span> <span
  m='646240'>the</span> <span m='646350'>initial</span> <span
  m='646740'>conditions</span> <span m='647800'>just</span> <span
  m='648150'>the</span> <span m='648280'>way</span> <span m='648650'>they</span>
  <span m='648880'>always</span> <span m='649280'>did.</span> </p><p><span
  m='651280'>So</span> <span m='651480'>I'm</span> <span
  m='651730'>solving</span> <span m='652330'>two</span> <span
  m='653210'>first</span> <span m='653650'>order</span> <span
  m='654430'>linear</span> <span m='655400'>constant</span> <span
  m='655930'>coefficient</span> <span m='656600'>equations,</span> <span
  m='657720'>homogeneous,</span> <span m='658830'>meaning</span> <span
  m='660370'>no</span> <span m='660770'>force</span> <span
  m='661260'>term.</span> <span m='665360'>So</span> <span m='665440'>I</span>
  <span m='665530'>get</span> <span m='665740'>a</span> <span
  m='665860'>null</span> <span m='666170'>solution</span> <span
  m='666800'>with</span> <span m='667070'>constants</span> <span
  m='667750'>to</span> <span m='667930'>choose</span> <span
  m='668850'>and,</span> <span m='670080'>as</span> <span
  m='670350'>always,</span> <span m='671220'>those</span> <span
  m='671510'>constants</span> <span m='672220'>come</span> <span
  m='672540'>from</span> <span m='672850'>matching</span> <span
  m='673370'>the</span> <span m='673520'>initial</span> <span
  m='674180'>conditions.</span> <span m='675690'>So</span> <span
  m='677020'>the</span> <span m='677250'>initial</span> <span
  m='677750'>condition</span> <span m='678300'>here</span> <span
  m='678560'>is</span> <span m='678670'>a</span> <span m='678740'>vector.</span>
  <span m='681780'>So</span> <span m='682000'>if,</span> <span
  m='682190'>for</span> <span m='682420'>example,</span> <span
  m='683050'>y</span> <span m='683380'>of</span> <span m='683490'>0</span> <span
  m='683970'>was</span> <span m='684930'>2</span> <span m='685780'>minus</span>
  <span m='686290'>2,</span> <span m='687240'>then</span> <span
  m='687580'>I</span> <span m='687690'>would</span> <span m='687960'>want</span>
  <span m='688270'>one</span> <span m='688690'>of</span> <span
  m='688840'>those</span> <span m='689600'>and</span> <span
  m='689680'>one</span> <span m='689950'>of</span> <span
  m='690040'>those.</span> <span m='692500'>OK.</span> </p><p><span
  m='694740'>I've</span> <span m='694990'>used</span> <span
  m='695660'>eigenvalues</span> <span m='696560'>and</span> <span
  m='696730'>eigenvectors</span> <span m='697650'>to</span> <span
  m='697800'>solve</span> <span m='698830'>a</span> <span
  m='698960'>linear</span> <span m='699370'>system,</span> <span
  m='700770'>their</span> <span m='701230'>first</span> <span
  m='701710'>and</span> <span m='701910'>primary</span> <span
  m='702570'>purpose.</span> <span m='703530'>OK.</span> <span
  m='704610'>But</span> <span m='705940'>how</span> <span m='706120'>do</span>
  <span m='706290'>I</span> <span m='706400'>find</span> <span
  m='706750'>those</span> <span m='707010'>eigenvalues</span> <span
  m='707740'>and</span> <span m='707920'>eigenvectors?</span> <span
  m='709240'>What</span> <span m='709470'>about</span> <span
  m='709790'>other</span> <span m='710200'>properties?</span> <span
  m='711250'>What's</span> <span m='711740'>going</span> <span
  m='712040'>on</span> <span m='712340'>with</span> <span
  m='712510'>eigenvalues</span> <span m='713240'>and</span> <span
  m='713410'>eigenvectors?</span> <span m='714220'>May</span> <span
  m='714430'>I</span> <span m='714570'>begin</span> <span m='715230'>on</span>
  <span m='715430'>this</span> <span m='716610'>just</span> <span
  m='717010'>a</span> <span m='717410'>couple</span> <span
  m='717730'>more</span> <span m='717930'>minutes</span> <span
  m='718340'>about</span> <span m='718650'>eigenvalues</span> <span
  m='719530'>and</span> <span m='719730'>eigenvectors?</span> <span
  m='720970'>Basic</span> <span m='721450'>facts</span> <span
  m='722400'>and</span> <span m='722580'>then</span> <span
  m='723610'>I'll</span> <span m='723820'>come</span> <span
  m='724950'>next</span> <span m='725340'>video</span> <span
  m='725810'>of</span> <span m='726210'>how</span> <span m='726410'>to</span>
  <span m='726520'>find</span> <span m='726890'>them.</span> <span
  m='727390'>OK,</span> <span m='727830'>basic</span> <span
  m='728310'>facts.</span> </p><p><span m='730000'>Basic</span> <span
  m='730470'>facts.</span> <span m='730910'>So</span> <span
  m='731390'>start</span> <span m='734070'>from</span> <span
  m='736730'>Ax</span> <span m='738340'>equals</span> <span
  m='738990'>lambda</span> <span m='739630'>x.</span> <span
  m='741570'>Let's</span> <span m='741840'>suppose</span> <span
  m='742320'>we</span> <span m='742490'>found</span> <span
  m='742840'>those.</span> <span m='745350'>Could</span> <span
  m='745570'>you</span> <span m='745710'>tell</span> <span m='745900'>me</span>
  <span m='746100'>the</span> <span m='746440'>eigenvalues</span> <span
  m='747450'>and</span> <span m='747680'>eigenvectors</span> <span
  m='748620'>of</span> <span m='748880'>A</span> <span
  m='749120'>squared?</span> <span m='755120'>I</span> <span
  m='755260'>would</span> <span m='755470'>like</span> <span
  m='755970'>to</span> <span m='756120'>know</span> <span m='756510'>what</span>
  <span m='756860'>the</span> <span m='757070'>eigenvalues</span> <span
  m='757770'>and</span> <span m='757960'>eigenvectors</span> <span
  m='758690'>of</span> <span m='758900'>A</span> <span m='759090'>squared</span>
  <span m='759610'>are.</span> <span m='759860'>Are</span> <span
  m='760080'>they</span> <span m='760280'>connected</span> <span
  m='760960'>with</span> <span m='761140'>these?</span> <span
  m='762190'>So</span> <span m='763130'>suppose</span> <span m='763640'>I</span>
  <span m='763750'>know</span> <span m='763990'>the</span> <span
  m='764170'>x</span> <span m='764500'>and</span> <span m='764640'>I</span>
  <span m='764730'>know</span> <span m='764940'>the</span> <span
  m='765070'>lambda</span> <span m='766930'>for</span> <span
  m='767100'>A.</span> <span m='768060'>What</span> <span
  m='768240'>about</span> <span m='768590'>for</span> <span m='768770'>A</span>
  <span m='768990'>squared?</span> </p><p><span m='770200'>Well,</span> <span
  m='770940'>the</span> <span m='771080'>good</span> <span
  m='771340'>thing</span> <span m='771610'>is</span> <span
  m='772570'>that</span> <span m='772780'>the</span> <span
  m='772940'>eigenvectors</span> <span m='773800'>are</span> <span
  m='773930'>the</span> <span m='774080'>same</span> <span m='774580'>for</span>
  <span m='774870'>A</span> <span m='775060'>squared.</span> <span
  m='776210'>So</span> <span m='776400'>let</span> <span m='776570'>me</span>
  <span m='776710'>show</span> <span m='776980'>you.</span> <span
  m='778570'>I</span> <span m='778870'>say</span> <span m='779170'>that</span>
  <span m='779430'>same</span> <span m='779870'>x,</span> <span
  m='780470'>so</span> <span m='781280'>this</span> <span m='781510'>is</span>
  <span m='781730'>the</span> <span m='782300'>same</span> <span
  m='784930'>x,</span> <span m='785590'>same</span> <span
  m='786030'>vector,</span> <span m='786650'>same</span> <span
  m='787040'>eigenvector.</span> <span m='787980'>The</span> <span
  m='788130'>eigenvalue</span> <span m='788840'>would</span> <span
  m='789080'>be</span> <span m='789330'>different,</span> <span
  m='789750'>of</span> <span m='789870'>course,</span> <span
  m='790220'>for</span> <span m='790420'>A</span> <span
  m='790570'>squared,</span> <span m='791350'>but</span> <span
  m='791620'>the</span> <span m='791780'>eigenvector</span> <span
  m='793430'>is</span> <span m='793790'>the</span> <span m='793980'>same.</span>
  <span m='795390'>And</span> <span m='795640'>let's</span> <span
  m='795880'>see</span> <span m='796120'>what</span> <span
  m='796340'>happens</span> <span m='796810'>for</span> <span
  m='797070'>A</span> <span m='797270'>squared.</span> </p><p><span
  m='798050'>So</span> <span m='798210'>that's</span> <span m='799648'>A</span>
  <span m='800980'>times</span> <span m='801730'>Ax,</span> <span
  m='802410'>right?</span> <span m='803010'>One</span> <span
  m='803490'>A,</span> <span m='804920'>another</span> <span
  m='805430'>Ax.</span> <span m='806090'>But</span> <span m='806330'>Ax</span>
  <span m='807020'>is</span> <span m='807270'>lambda</span> <span
  m='807680'>x.</span> <span m='810140'>Are you</span> <span
  m='810300'>good</span> <span m='810530'>with</span> <span
  m='810680'>that?</span> <span m='811090'>That's</span> <span
  m='811320'>just</span> <span m='811600'>A</span> <span m='811950'>times</span>
  <span m='812370'>Ax.</span> <span m='812990'>So</span> <span
  m='813150'>that's</span> <span m='813750'>OK.</span> <span
  m='814970'>Now</span> <span m='815250'>lambda</span> <span
  m='815810'>is</span> <span m='815930'>a</span> <span m='816030'>number.</span>
  <span m='817250'>I</span> <span m='817420'>like</span> <span
  m='817680'>to</span> <span m='817800'>bring</span> <span m='818080'>it</span>
  <span m='818190'>out</span> <span m='818460'>front</span> <span
  m='818840'>where</span> <span m='819090'>I</span> <span m='819160'>can</span>
  <span m='819390'>see</span> <span m='819670'>it.</span> <span
  m='822070'>So</span> <span m='822840'>I</span> <span m='823010'>didn't</span>
  <span m='823540'>do</span> <span m='823690'>anything</span> <span
  m='824120'>there.</span> <span m='824440'>This</span> <span
  m='824840'>number</span> <span m='825320'>lambda</span> <span
  m='825760'>was</span> <span m='826000'>multiplying</span> <span
  m='826600'>everything</span> <span m='827080'>so</span> <span m='827260'>I
  put</span> <span m='827500'>it</span> <span m='827640'>in</span> <span
  m='827810'>front.</span> </p><p><span m='828770'>Now</span> <span
  m='829130'>Ax.</span> <span m='829740'>I</span> <span m='829850'>have,</span>
  <span m='830160'>again,</span> <span m='830530'>the</span> <span
  m='830600'>Ax.</span> <span m='832020'>That's,</span> <span
  m='832290'>again,</span> <span m='832980'>the</span> <span
  m='833180'>lambda</span> <span m='833640'>x</span> <span
  m='834320'>because</span> <span m='834570'>I'm</span> <span
  m='834830'>looking</span> <span m='835120'>at</span> <span
  m='835200'>the</span> <span m='835350'>same</span> <span m='835890'>x.</span>
  <span m='836480'>Same</span> <span m='836900'>x,</span> <span
  m='837830'>so</span> <span m='837960'>I</span> <span m='838050'>get</span>
  <span m='838260'>the</span> <span m='838400'>same</span> <span
  m='838720'>lambda.</span> <span m='839220'>So</span> <span
  m='839370'>that's</span> <span m='839650'>a</span> <span
  m='839730'>lambda</span> <span m='840240'>x,</span> <span
  m='841180'>another</span> <span m='841610'>lambda.</span> <span
  m='842120'>I</span> <span m='842270'>have</span> <span
  m='842500'>lambda</span> <span m='843050'>squared</span> <span
  m='843670'>x.</span> <span m='845150'>That's</span> <span
  m='845490'>what</span> <span m='845720'>I</span> <span
  m='845820'>wanted.</span> <span m='846910'>A</span> <span
  m='847150'>squared</span> <span m='847620'>x</span> <span m='848690'>is</span>
  <span m='848980'>lambda</span> <span m='849500'>squared</span> <span
  m='849910'>x.</span> </p><p><span m='851040'>Conclusion.</span> <span
  m='852370'>The</span> <span m='852550'>eigenvectors</span> <span
  m='853710'>stay</span> <span m='854020'>the</span> <span
  m='854180'>same,</span> <span m='855960'>lambda</span> <span
  m='857640'>goes</span> <span m='858030'>to</span> <span
  m='858490'>lambda</span> <span m='859210'>squared.</span> <span
  m='862030'>The</span> <span m='862250'>eigenvalues</span> <span
  m='863080'>are</span> <span m='863220'>squared.</span> </p><p><span
  m='864450'>So</span> <span m='864810'>if</span> <span m='865070'>I</span>
  <span m='865240'>had</span> <span m='866170'>my</span> <span
  m='866670'>example</span> <span m='867350'>again--</span> <span
  m='868830'>oh,</span> <span m='869370'>let</span> <span m='869470'>me</span>
  <span m='870270'>find</span> <span m='870600'>that</span> <span
  m='870810'>matrix.</span> <span m='876860'>Suppose</span> <span
  m='877300'>I</span> <span m='877420'>had</span> <span m='877660'>that</span>
  <span m='877920'>same</span> <span m='878180'>matrix</span> <span
  m='880220'>and</span> <span m='880520'>I</span> <span m='880590'>was</span>
  <span m='880860'>interested</span> <span m='881450'>in</span> <span
  m='881760'>A</span> <span m='881960'>squared,</span> <span
  m='883520'>then</span> <span m='883740'>the</span> <span
  m='883920'>eigenvalues</span> <span m='884940'>would</span> <span
  m='885200'>be</span> <span m='885490'>36</span> <span m='887270'>and</span>
  <span m='887500'>4,</span> <span m='888360'>the</span> <span
  m='888500'>squares.</span> <span m='890480'>I</span> <span
  m='890520'>suppose</span> <span m='890980'>I'm</span> <span
  m='891170'>looking</span> <span m='891560'>at</span> <span
  m='891670'>the</span> <span m='891820'>n-th</span> <span
  m='892180'>power</span> <span m='892570'>of</span> <span m='892670'>a</span>
  <span m='892750'>matrix.</span> <span m='893300'>You</span> <span
  m='893430'>may</span> <span m='893630'>say</span> <span m='893900'>why</span>
  <span m='894710'>look</span> <span m='894960'>at</span> <span
  m='895060'>the</span> <span m='895190'>n-th</span> <span
  m='895450'>power?</span> <span m='895780'>But</span> <span
  m='895940'>there</span> <span m='896080'>are</span> <span
  m='896110'>many</span> <span m='896500'>examples</span> <span
  m='897170'>to</span> <span m='897290'>look</span> <span m='897580'>at</span>
  <span m='897690'>the</span> <span m='897820'>n-th</span> <span
  m='898240'>power</span> <span m='898640'>of</span> <span m='898730'>a</span>
  <span m='898810'>matrix,</span> <span m='899610'>the</span> <span
  m='899750'>thousandth</span> <span m='900500'>power.</span> </p><p><span
  m='901340'>So</span> <span m='901920'>let's</span> <span
  m='902220'>just</span> <span m='902490'>write</span> <span
  m='902820'>down</span> <span m='903150'>the</span> <span
  m='903650'>conclusion.</span> <span m='904670'>Same</span> <span
  m='907870'>reasoning,</span> <span m='908970'>A</span> <span
  m='909230'>to</span> <span m='909350'>the</span> <span m='909550'>n-th</span>
  <span m='909920'>x</span> <span m='910660'>is</span> <span
  m='913020'>lambda.</span> <span m='913710'>It's</span> <span
  m='914020'>the</span> <span m='914170'>same</span> <span m='914570'>x.</span>
  <span m='915930'>And</span> <span m='916300'>every</span> <span
  m='916630'>time</span> <span m='916930'>I</span> <span
  m='917040'>multiply</span> <span m='917590'>by</span> <span
  m='917900'>A,</span> <span m='918852'>I</span> <span
  m='919330'>multiply</span> <span m='919870'>by</span> <span
  m='920090'>a</span> <span m='920190'>lambda.</span> <span m='921130'>So</span>
  <span m='921340'>I</span> <span m='921460'>get</span> <span
  m='921740'>lambda</span> <span m='922340'>n</span> <span
  m='922610'>times.</span> <span m='926220'>So</span> <span
  m='926320'>there</span> <span m='926680'>is</span> <span m='926870'>the</span>
  <span m='927650'>handy</span> <span m='928160'>rule.</span> </p><p><span
  m='930940'>And</span> <span m='931070'>that</span> <span
  m='931260'>really</span> <span m='931620'>tells</span> <span
  m='932000'>us</span> <span m='932150'>something</span> <span
  m='932490'>about</span> <span m='932730'>what</span> <span
  m='933340'>eigenvalues</span> <span m='934030'>are</span> <span
  m='934170'>good</span> <span m='934410'>for.</span> <span
  m='935070'>Eigenvalues</span> <span m='935760'>are</span> <span
  m='935910'>good</span> <span m='936190'>for</span> <span
  m='936390'>things</span> <span m='936880'>that</span> <span
  m='937040'>move</span> <span m='937610'>in</span> <span
  m='937850'>time.</span> <span m='939880'>Differential</span> <span
  m='940510'>equations,</span> <span m='943300'>that</span> <span
  m='943590'>is</span> <span m='943760'>really</span> <span
  m='944120'>moving</span> <span m='944680'>in</span> <span
  m='944860'>time.</span> <span m='945450'>n</span> <span
  m='945660'>equal</span> <span m='946070'>1</span> <span m='946480'>is</span>
  <span m='946670'>this</span> <span m='947776'>first</span> <span
  m='948230'>time,</span> <span m='948720'>or</span> <span m='948910'>n</span>
  <span m='949100'>equals</span> <span m='949420'>0</span> <span
  m='949850'>is</span> <span m='949990'>the</span> <span
  m='950120'>start.</span> <span m='951100'>Take</span> <span
  m='951360'>one</span> <span m='951680'>step</span> <span m='952110'>to</span>
  <span m='952210'>n</span> <span m='952450'>equal</span> <span
  m='952790'>1,</span> <span m='953230'>take</span> <span
  m='953460'>another</span> <span m='953880'>step</span> <span m='954180'>to
  n</span> <span m='954520'>equal</span> <span m='954850'>2.</span> <span
  m='955470'>Keep</span> <span m='955760'>going.</span> <span
  m='956480'>Every</span> <span m='957100'>time</span> <span
  m='957500'>step</span> <span m='958410'>brings</span> <span
  m='959060'>a</span> <span m='959180'>multiplication</span> <span
  m='960060'>by</span> <span m='960260'>lambda.</span> </p><p><span
  m='961780'>So</span> <span m='961990'>that</span> <span m='962750'>is</span>
  <span m='964300'>a</span> <span m='964890'>very</span> <span
  m='965600'>useful</span> <span m='966180'>rule.</span> <span
  m='966840'>Another</span> <span m='967510'>handy</span> <span
  m='968560'>rule</span> <span m='969000'>is</span> <span m='969710'>what</span>
  <span m='969920'>about</span> <span m='970300'>A</span> <span
  m='971110'>plus</span> <span m='971760'>the</span> <span
  m='971920'>identity?</span> <span m='975290'>Suppose</span> <span
  m='975810'>I</span> <span m='975960'>add</span> <span m='976240'>the</span>
  <span m='976390'>identity</span> <span m='976990'>matrix</span> <span
  m='981370'>to</span> <span m='981540'>my</span> <span
  m='981990'>original</span> <span m='982520'>matrix.</span> <span
  m='983870'>What</span> <span m='983990'>happens</span> <span
  m='984460'>to</span> <span m='984590'>the</span> <span
  m='984770'>eigenvalues?</span> <span m='985620'>What</span> <span
  m='985810'>happens</span> <span m='986210'>to</span> <span
  m='986320'>the</span> <span m='986470'>eigenvectors?</span> <span
  m='987290'>Basic</span> <span m='987780'>question.</span> <span
  m='988740'>Or</span> <span m='989040'>I</span> <span m='989130'>could</span>
  <span m='989380'>multiply</span> <span m='990320'>a</span> <span
  m='990440'>constant</span> <span m='991110'>times</span> <span
  m='991450'>the</span> <span m='991600'>identity,</span> <span
  m='992420'>2</span> <span m='992660'>times</span> <span m='993030'>the</span>
  <span m='993180'>identity,</span> <span m='994030'>7</span> <span
  m='994460'>times</span> <span m='994830'>the</span> <span
  m='994980'>identity.</span> </p><p><span m='995820'>And</span> <span
  m='996060'>I</span> <span m='996140'>want</span> <span m='996400'>to</span>
  <span m='996500'>know</span> <span m='997230'>what</span> <span
  m='997570'>about</span> <span m='998020'>its</span> <span
  m='998520'>eigenvectors.</span> <span m='999890'>And</span> <span
  m='1000090'>the</span> <span m='1000210'>answer</span> <span
  m='1000680'>is</span> <span m='1001970'>same,</span> <span
  m='1003116'>same</span> <span m='1003500'>x's.</span> <span
  m='1005260'>Same</span> <span m='1005610'>x.</span> <span m='1007950'>I</span>
  <span m='1008670'>show</span> <span m='1008990'>that</span> <span
  m='1009390'>by</span> <span m='1010860'>figuring</span> <span
  m='1011390'>out</span> <span m='1011560'>what</span> <span
  m='1011770'>I</span> <span m='1011860'>have</span> <span
  m='1012140'>here.</span> <span m='1013010'>This</span> <span
  m='1013290'>is</span> <span m='1014680'>Ax,</span> <span
  m='1015560'>which</span> <span m='1015870'>is</span> <span
  m='1016030'>lambda</span> <span m='1016450'>x.</span> <span
  m='1017630'>And</span> <span m='1017910'>this</span> <span
  m='1018120'>is</span> <span m='1018260'>c</span> <span
  m='1018720'>times</span> <span m='1019110'>the</span> <span
  m='1019270'>identity</span> <span m='1020040'>times</span> <span
  m='1020430'>x.</span> <span m='1020850'>The</span> <span
  m='1020880'>identity</span> <span m='1022020'>doesn't</span> <span
  m='1022430'>do</span> <span m='1022600'>anything</span> <span
  m='1023090'>so</span> <span m='1023270'>that's</span> <span
  m='1023670'>just</span> <span m='1024000'>cx.</span> </p><p><span
  m='1025760'>So</span> <span m='1025930'>what</span> <span
  m='1026089'>do</span> <span m='1026210'>I</span> <span m='1026329'>have</span>
  <span m='1026550'>now?</span> <span m='1028430'>I've</span> <span
  m='1028690'>seen</span> <span m='1029349'>that</span> <span
  m='1029740'>the</span> <span m='1030119'>eigenvalue</span> <span
  m='1032220'>is</span> <span m='1032480'>lambda</span> <span
  m='1033089'>plus</span> <span m='1033450'>c.</span> <span
  m='1036319'>So</span> <span m='1036520'>there</span> <span
  m='1036950'>is</span> <span m='1037810'>the</span> <span
  m='1039099'>eigenvalues.</span> <span m='1044685'>I</span> <span
  m='1044980'>think</span> <span m='1045280'>about</span> <span
  m='1045609'>this</span> <span m='1045890'>as</span> <span
  m='1046030'>shifting</span> <span m='1046839'>A</span> <span
  m='1047950'>by</span> <span m='1048400'>a</span> <span
  m='1048520'>multiple</span> <span m='1049170'>of</span> <span
  m='1049290'>the</span> <span m='1049450'>identity.</span> <span
  m='1050100'>Shifting</span> <span m='1050680'>A,</span> <span
  m='1051120'>adding</span> <span m='1052780'>5</span> <span
  m='1053160'>times</span> <span m='1053520'>the</span> <span
  m='1053670'>identity</span> <span m='1054250'>to</span> <span
  m='1054490'>it.</span> <span m='1054830'>If</span> <span m='1054980'>I</span>
  <span m='1055100'>add</span> <span m='1055880'>5</span> <span
  m='1056180'>times</span> <span m='1056490'>the</span> <span
  m='1056590'>identity</span> <span m='1057300'>to</span> <span
  m='1057460'>any</span> <span m='1057680'>matrix,</span> <span
  m='1058780'>the</span> <span m='1058990'>eigenvalues</span> <span
  m='1059890'>of</span> <span m='1060000'>that</span> <span
  m='1060250'>matrix</span> <span m='1060790'>go</span> <span
  m='1060970'>up</span> <span m='1061180'>by</span> <span m='1061360'>5.</span>
  <span m='1063710'>And</span> <span m='1063950'>the</span> <span
  m='1064070'>eigenvectors</span> <span m='1064810'>stay</span> <span
  m='1065080'>the</span> <span m='1065210'>same.</span> </p><p><span
  m='1066800'>So</span> <span m='1067480'>as</span> <span
  m='1067680'>long</span> <span m='1068000'>as</span> <span m='1068120'>I</span>
  <span m='1068220'>keep</span> <span m='1068530'>working</span> <span
  m='1069040'>with</span> <span m='1069190'>that</span> <span
  m='1069360'>one</span> <span m='1070020'>matrix</span> <span
  m='1070590'>A.</span> <span m='1071650'>Taking</span> <span
  m='1072160'>powers,</span> <span m='1074642'>adding</span> <span
  m='1075070'>multiples</span> <span m='1075750'>of</span> <span
  m='1075860'>the</span> <span m='1076020'>identity,</span> <span
  m='1077650'>later</span> <span m='1078110'>taking</span> <span
  m='1078550'>exponentials,</span> <span m='1079620'>whatever</span> <span
  m='1080080'>I</span> <span m='1080190'>do</span> <span m='1081610'>I</span>
  <span m='1081720'>keep</span> <span m='1082050'>the</span> <span
  m='1082200'>same</span> <span m='1082520'>eigenvectors</span> <span
  m='1084160'>and</span> <span m='1084590'>everything</span> <span
  m='1085120'>is</span> <span m='1085270'>easy.</span> </p><p><span
  m='1090910'>If</span> <span m='1091140'>I</span> <span m='1091230'>had</span>
  <span m='1091980'>two</span> <span m='1092170'>matrices,</span> <span
  m='1093220'>A and</span> <span m='1093600'>B,</span> <span
  m='1094930'>with</span> <span m='1095160'>different</span> <span
  m='1095650'>eigenvectors,</span> <span m='1097390'>then</span> <span
  m='1097810'>I</span> <span m='1097930'>don't</span> <span
  m='1098320'>know</span> <span m='1098600'>what</span> <span
  m='1099140'>the</span> <span m='1099340'>eigenvectors</span> <span
  m='1100230'>of</span> <span m='1100440'>A</span> <span m='1100640'>plus</span>
  <span m='1101010'>B</span> <span m='1101280'>would</span> <span
  m='1101480'>be.</span> <span m='1102330'>I</span> <span
  m='1102450'>don't</span> <span m='1102730'>know</span> <span
  m='1102980'>those.</span> <span m='1104430'>I</span> <span
  m='1104540'>can't</span> <span m='1104910'>tell</span> <span
  m='1105200'>the</span> <span m='1105350'>eigenvectors</span> <span
  m='1106160'>of</span> <span m='1106310'>A</span> <span
  m='1106630'>times</span> <span m='1107160'>B</span> <span
  m='1108040'>because</span> <span m='1108400'>A</span> <span
  m='1108685'>has</span> <span m='1108970'>its</span> <span
  m='1109150'>own</span> <span m='1109480'>little</span> <span
  m='1109820'>eigenvectors</span> <span m='1110610'>and</span> <span
  m='1110780'>B</span> <span m='1111050'>has</span> <span m='1111310'>its</span>
  <span m='1111610'>eigenvectors.</span> <span m='1112420'>Unless</span> <span
  m='1113050'>they're</span> <span m='1113240'>the</span> <span
  m='1113390'>same,</span> <span m='1114750'>I</span> <span
  m='1114860'>can't</span> <span m='1115450'>easily</span> <span
  m='1116680'>combine</span> <span m='1116965'>A</span> <span
  m='1117250'>and</span> <span m='1117570'>B.</span> <span
  m='1118310'>But</span> <span m='1121250'>as</span> <span
  m='1121420'>always</span> <span m='1121680'>I'm</span> <span
  m='1121840'>staying</span> <span m='1122250'>with</span> <span
  m='1122430'>one</span> <span m='1123000'>A</span> <span m='1124240'>and</span>
  <span m='1124460'>its</span> <span m='1124660'>powers</span> <span
  m='1125590'>and</span> <span m='1127270'>steps</span> <span
  m='1127770'>like</span> <span m='1127970'>that,</span> <span
  m='1128680'>no</span> <span m='1128910'>problem.</span> </p><p><span
  m='1130090'>OK.</span> <span m='1130720'>I'll</span> <span
  m='1130910'>stop</span> <span m='1131230'>there</span> <span
  m='1131530'>for</span> <span m='1132360'>a</span> <span
  m='1132460'>first</span> <span m='1132870'>look</span> <span
  m='1133130'>at</span> <span m='1133290'>eigenvalues</span> <span
  m='1134240'>and</span> <span m='1134440'>eigenvectors.</span> </p>
uid: 357fe5cdcf361a95588f19fb2677c64d
type: course
layout: video
---
