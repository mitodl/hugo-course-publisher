---
about_this_resource_text: >-
  <p><strong>Description:</strong> The impulse response is the solution when the
  force is an impulse (a delta function). This also solves a null equation (no
  force) with a nonzero initial condition.</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 2.3c</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: PoHO4PZtW78
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Video-YouTube-Stream
    type: Video
    uid: 2a3a7c9317d511868d0c7dd22ef77f91
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/PoHO4PZtW78/default.jpg'
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 604e5666a975c1d5dca67e9da05ad842
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: PoHO4PZtW78
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6a7f7526e9558f70115aa03cb73fd6b8
  - id: PoHO4PZtW78.srt
    parent_uid: bee19b4ff95b0042639fd74606655061
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/impulse-response-and-step-response/PoHO4PZtW78.srt
    title: 3play caption file
    type: null
    uid: 966e8f3abc4a7fab8c5f8371f0e08e41
  - id: PoHO4PZtW78.pdf
    parent_uid: bee19b4ff95b0042639fd74606655061
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/impulse-response-and-step-response/PoHO4PZtW78.pdf
    title: 3play pdf file
    type: null
    uid: fd6832d128410b2d409deef7461c4e3b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5966a44ecdbc96a4bc9d5520981c5576
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5e40986bf4a7b05ccba9be41c6a58a95
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Video-iTunes U-MP4
    type: Video
    uid: f5142ca7bc7197b75e2a3364297ea7d6
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_2_3c_ImpulseStepResponse_300k.mp4
    parent_uid: bee19b4ff95b0042639fd74606655061
    title: Video-Internet Archive-MP4
    type: Video
    uid: d2417539dbdd9e65ce04998bfa407345
inline_embed_id: 89111512impulseresponseandstepresponse11853303
order_index: 168
parent_uid: 6038bc5002ab0da0b5f15d8b8de5fc0a
related_resources_text: ''
short_url: impulse-response-and-step-response
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/impulse-response-and-step-response
title: Impulse Response and Step Response
transcript: >-
  <p><span m='320'>GILBERT STRANG: OK.</span> <span m='1420'>So</span> <span
  m='2090'>this</span> <span m='2320'>is</span> <span m='2520'>a</span> <span
  m='3630'>video</span> <span m='4080'>in</span> <span m='4240'>which</span>
  <span m='4590'>we</span> <span m='4840'>go</span> <span m='5370'>for</span>
  <span m='5610'>second-order</span> <span m='6320'>equations,</span> <span
  m='7010'>constant</span> <span m='7520'>coefficients.</span> <span
  m='8680'>We</span> <span m='9000'>look</span> <span m='9350'>for</span> <span
  m='9810'>the</span> <span m='10360'>impulse</span> <span
  m='11000'>response,</span> <span m='12030'>the</span> <span
  m='12150'>key</span> <span m='12530'>function</span> <span m='13080'>in</span>
  <span m='13200'>this</span> <span m='13400'>whole</span> <span
  m='13650'>business,</span> <span m='14860'>and</span> <span
  m='15420'>the</span> <span m='15690'>step</span> <span
  m='16040'>response,</span> <span m='16810'>too.</span> </p><p><span
  m='17650'>So</span> <span m='18260'>those</span> <span m='18600'>are</span>
  <span m='18700'>the</span> <span m='18850'>responses.</span> <span
  m='19850'>So</span> <span m='19950'>I'm</span> <span m='20160'>going</span>
  <span m='20290'>to</span> <span m='20380'>call</span> <span
  m='20720'>g--</span> <span m='22600'>that</span> <span m='22780'>will</span>
  <span m='22910'>be</span> <span m='23060'>the</span> <span
  m='23250'>impulse</span> <span m='23780'>response,</span> <span
  m='24530'>where</span> <span m='24750'>the</span> <span
  m='24950'>right-hand</span> <span m='25520'>side</span> <span
  m='25850'>is</span> <span m='26000'>a</span> <span m='26120'>delta</span>
  <span m='26560'>function,</span> <span m='27140'>an</span> <span
  m='27320'>impulse,</span> <span m='28540'>a</span> <span
  m='28670'>sudden</span> <span m='29700'>force</span> <span m='31160'>at</span>
  <span m='31350'>the</span> <span m='31460'>moment</span> <span
  m='32049'>t</span> <span m='32259'>equals</span> <span m='32600'>0.</span>
  <span m='33360'>So</span> <span m='33580'>that's</span> <span
  m='33930'>the</span> <span m='34080'>equation.</span> <span
  m='35200'>That's</span> <span m='35550'>the</span> <span
  m='35700'>impulse.</span> <span m='36680'>And</span> <span m='37000'>g</span>
  <span m='37330'>is</span> <span m='37530'>the</span> <span
  m='37650'>response,</span> <span m='38450'>and</span> <span
  m='38650'>we</span> <span m='38780'>want</span> <span m='39040'>a</span> <span
  m='39100'>formula</span> <span m='39580'>for</span> <span m='39880'>it.</span>
  </p><p><span m='40700'>Then</span> <span m='41870'>the</span> <span
  m='42050'>other</span> <span m='42450'>possibility,</span> <span
  m='42770'>very</span> <span m='44280'>interesting</span> <span
  m='44940'>possibility,</span> <span m='45790'>is</span> <span
  m='46070'>when</span> <span m='46360'>the</span> <span
  m='46480'>right-hand</span> <span m='46990'>side</span> <span
  m='47310'>is</span> <span m='47470'>a</span> <span m='47580'>step</span> <span
  m='47930'>function.</span> <span m='49550'>And</span> <span
  m='49840'>then</span> <span m='50220'>we</span> <span m='50360'>want</span>
  <span m='50630'>the</span> <span m='50740'>response</span> <span
  m='51380'>to</span> <span m='51500'>that</span> <span
  m='51800'>function.</span> <span m='52920'>I</span> <span
  m='53030'>click</span> <span m='53340'>a</span> <span m='53550'>switch.</span>
  <span m='56520'>The</span> <span m='57250'>machine</span> <span
  m='57740'>starts</span> <span m='58100'>working,</span> <span
  m='58710'>and</span> <span m='59410'>it</span> <span
  m='59800'>approaches</span> <span m='60540'>a</span> <span
  m='61030'>steady</span> <span m='61670'>response.</span> <span
  m='63430'>The</span> <span m='63570'>solution</span> <span
  m='64180'>rises</span> <span m='64790'>from</span> <span m='65069'>0.</span>
  </p><p><span m='66040'>So</span> <span m='66260'>it</span> <span
  m='66380'>starts</span> <span m='66880'>at</span> <span m='67130'>r</span>
  <span m='67670'>of</span> <span m='68040'>0</span> <span
  m='69020'>equals</span> <span m='69670'>r</span> <span m='69970'>prime</span>
  <span m='70720'>of</span> <span m='70950'>0</span> <span
  m='71560'>equals</span> <span m='72180'>0.</span> <span m='73950'>The</span>
  <span m='74160'>step</span> <span m='74550'>response</span> <span
  m='75110'>starts</span> <span m='75460'>from</span> <span
  m='75720'>rest.</span> <span m='76630'>The</span> <span
  m='76810'>action</span> <span m='77240'>happens</span> <span
  m='77820'>when</span> <span m='78050'>I</span> <span m='78140'>click</span>
  <span m='78490'>a</span> <span m='78600'>switch</span> <span
  m='79040'>at</span> <span m='79190'>t</span> <span m='79400'>equals</span>
  <span m='79740'>0,</span> <span m='80430'>and</span> <span
  m='80640'>then</span> <span m='80900'>r</span> <span m='81140'>of</span> <span
  m='81220'>t</span> <span m='81500'>will</span> <span m='81780'>rise</span>
  <span m='82230'>to</span> <span m='82380'>a</span> <span
  m='82460'>constant.</span> <span m='84130'>Very,</span> <span
  m='84470'>very</span> <span m='84910'>important</span> <span
  m='85450'>solutions.</span> <span m='86700'>But</span> <span
  m='87140'>we'll</span> <span m='87350'>focus</span> <span
  m='88440'>especially</span> <span m='89200'>on</span> <span
  m='89400'>this</span> <span m='89630'>one.</span> </p><p><span
  m='91710'>OK.</span> <span m='92530'>So</span> <span m='92730'>that's</span>
  <span m='93010'>our</span> <span m='93230'>equation</span> <span
  m='94500'>with</span> <span m='94650'>the</span> <span
  m='94760'>right-hand</span> <span m='95260'>side</span> <span
  m='95540'>delta.</span> <span m='96400'>And</span> <span m='96820'>of</span>
  <span m='96950'>course,</span> <span m='97770'>that</span> <span
  m='98030'>right-hand</span> <span m='98470'>side</span> <span
  m='98760'>is</span> <span m='98930'>not</span> <span m='99500'>totally</span>
  <span m='100000'>familiar,</span> <span m='100640'>not</span> <span
  m='100890'>as</span> <span m='101100'>nice</span> <span m='101550'>as</span>
  <span m='101730'>e</span> <span m='101950'>to</span> <span
  m='102040'>the</span> <span m='102220'>st.</span> <span m='103460'>But</span>
  <span m='103990'>there</span> <span m='104270'>is</span> <span
  m='104360'>something</span> <span m='105360'>that--</span> <span
  m='105870'>there is</span> <span m='106140'>another</span> <span
  m='106550'>way</span> <span m='106770'>to</span> <span
  m='106850'>approach</span> <span m='107310'>it--</span> <span
  m='108800'>that's</span> <span m='109130'>a</span> <span m='109390'>key</span>
  <span m='109710'>idea</span> <span m='110180'>here--</span> <span
  m='111150'>that</span> <span m='111560'>gives</span> <span
  m='111970'>us</span> <span m='112220'>this</span> <span
  m='112530'>all-important</span> <span m='113300'>function</span> <span
  m='114240'>from</span> <span m='114540'>solving</span> <span
  m='115210'>a</span> <span m='115320'>null</span> <span
  m='115670'>equation.</span> <span m='116350'>How's</span> <span
  m='116620'>that?</span> </p><p><span m='118700'>I</span> <span
  m='118830'>start</span> <span m='119140'>with a</span> <span
  m='119300'>null</span> <span m='119660'>equation,</span> <span
  m='120620'>but</span> <span m='120760'>now</span> <span m='121290'>this</span>
  <span m='121570'>had</span> <span m='121880'>no</span> <span
  m='123050'>initial</span> <span m='123570'>condition.</span> <span
  m='123885'>So</span> <span m='124200'>this</span> <span m='124420'>one</span>
  <span m='124620'>started</span> <span m='125120'>from</span> <span
  m='125340'>g</span> <span m='125640'>of</span> <span m='125710'>0</span> <span
  m='126160'>and</span> <span m='126300'>g</span> <span m='126480'>prime</span>
  <span m='126800'>of</span> <span m='126890'>0</span> <span
  m='127150'>both</span> <span m='127470'>0.</span> <span m='128229'>And</span>
  <span m='128440'>everything</span> <span m='128850'>happened,</span> <span
  m='129280'>boom,</span> <span m='130120'>from</span> <span
  m='130350'>the</span> <span m='130470'>delta</span> <span
  m='130860'>function.</span> <span m='131860'>This</span> <span
  m='132110'>is</span> <span m='132330'>the</span> <span m='132460'>same</span>
  <span m='132990'>function.</span> <span m='134320'>Except</span> <span
  m='135160'>when</span> <span m='135400'>I</span> <span m='135480'>look</span>
  <span m='135750'>to</span> <span m='135870'>see</span> <span
  m='136630'>what</span> <span m='136890'>happens</span> <span
  m='137450'>at</span> <span m='137600'>t</span> <span m='137810'>equals</span>
  <span m='138130'>0,</span> <span m='138890'>what</span> <span
  m='139140'>happens</span> <span m='139640'>is</span> <span m='140270'>g</span>
  <span m='140560'>prime</span> <span m='142130'>immediately</span> <span
  m='142770'>jumps</span> <span m='143140'>to</span> <span m='143250'>1.</span>
  </p><p><span m='144800'>So</span> <span m='145300'>another</span> <span
  m='145780'>way</span> <span m='146000'>I</span> <span m='146110'>can</span>
  <span m='146310'>approach</span> <span m='147190'>g,</span> <span
  m='148080'>the</span> <span m='148240'>computation</span> <span
  m='148950'>of</span> <span m='149050'>g,</span> <span m='149650'>is</span>
  <span m='149860'>to</span> <span m='150020'>think</span> <span
  m='150280'>of</span> <span m='150380'>it--</span> <span m='150550'>I'm</span>
  <span m='150700'>just</span> <span m='150960'>looking</span> <span
  m='151290'>for a</span> <span m='151550'>null</span> <span
  m='151810'>solution.</span> <span m='153080'>I'm</span> <span
  m='153160'>looking</span> <span m='153490'>for</span> <span
  m='153590'>the</span> <span m='154070'>null</span> <span
  m='154360'>solution</span> <span m='155430'>that</span> <span
  m='155740'>starts</span> <span m='156200'>from</span> <span
  m='156440'>0.</span> <span m='158190'>But</span> <span m='158430'>it</span>
  <span m='158600'>starts</span> <span m='160660'>with</span> <span
  m='160850'>an</span> <span m='161040'>initial</span> <span
  m='162530'>derivative,</span> <span m='163260'>slope</span> <span
  m='163770'>equal</span> <span m='164040'>1.</span> <span m='166020'>So</span>
  <span m='170210'>I</span> <span m='170330'>know</span> <span
  m='170640'>that</span> <span m='170910'>g</span> <span m='171180'>is</span>
  <span m='171330'>a</span> <span m='171450'>combination.</span> <span
  m='172240'>So</span> <span m='172860'>I</span> <span m='173010'>know</span>
  <span m='173240'>how</span> <span m='173370'>to</span> <span
  m='173480'>solve</span> <span m='173880'>equations</span> <span
  m='174410'>like</span> <span m='174640'>that,</span> <span
  m='175250'>null</span> <span m='175490'>equation.</span> <span
  m='177475'>You</span> <span m='177880'>remember</span> <span
  m='178340'>s1</span> <span m='178860'>and</span> <span m='179020'>s2?</span>
  <span m='181140'>I</span> <span m='181300'>look</span> <span
  m='181610'>at</span> <span m='181970'>s</span> <span
  m='182290'>squared--</span> <span m='182970'>I've</span> <span
  m='183080'>made</span> <span m='183330'>this</span> <span
  m='183640'>coefficient</span> <span m='184720'>1--</span> <span
  m='185740'>so</span> <span m='185930'>s</span> <span m='186190'>squared</span>
  <span m='186770'>plus</span> <span m='187090'>Bs</span> <span
  m='188220'>plus</span> <span m='189070'>C</span> <span
  m='189600'>equals</span> <span m='190120'>0.</span> <span
  m='191010'>That</span> <span m='191750'>gives</span> <span
  m='192200'>us</span> <span m='194260'>s1</span> <span m='195210'>and</span>
  <span m='195400'>s2.</span> </p><p><span m='199100'>And</span> <span
  m='199290'>now</span> <span m='199540'>I'll</span> <span
  m='199730'>tell</span> <span m='199970'>you</span> <span
  m='200120'>what</span> <span m='200430'>the</span> <span m='200530'>g</span>
  <span m='200850'>is.</span> <span m='201710'>So</span> <span
  m='201820'>that</span> <span m='202040'>gives</span> <span
  m='202320'>us</span> <span m='202510'>the</span> <span m='202650'>s1</span>
  <span m='203130'>and</span> <span m='203250'>the</span> <span
  m='203380'>s2</span> <span m='203840'>in</span> <span m='203940'>the</span>
  <span m='204040'>null</span> <span m='204330'>solution,</span> <span
  m='205620'>and</span> <span m='205810'>we're</span> <span
  m='205950'>looking</span> <span m='206310'>for a</span> <span
  m='206540'>null</span> <span m='206820'>solution.</span> <span
  m='208000'>So</span> <span m='208090'>our</span> <span m='208290'>g</span>
  <span m='208550'>of</span> <span m='208660'>t</span> <span
  m='210690'>is</span> <span m='210900'>some</span> <span
  m='211260'>combination</span> <span m='212400'>of</span> <span
  m='212600'>e</span> <span m='213000'>to</span> <span m='213140'>the</span>
  <span m='213320'>s1t</span> <span m='215040'>and</span> <span
  m='215470'>e</span> <span m='215873'>to the</span> <span
  m='216276'>s2t.</span> <span m='220040'>OK?</span> <span
  m='221910'>It's</span> <span m='222110'>some</span> <span
  m='222350'>combination</span> <span m='223080'>of</span> <span
  m='223180'>those.</span> <span m='224157'>And</span> <span
  m='225620'>we</span> <span m='225820'>want</span> <span m='226240'>it</span>
  <span m='226400'>to</span> <span m='226500'>be</span> <span
  m='226690'>0.</span> <span m='227120'>So</span> <span m='227490'>no</span>
  <span m='227740'>surprise,</span> <span m='228440'>if</span> <span
  m='228620'>I</span> <span m='228790'>subtract</span> <span
  m='229460'>those--</span> <span m='232700'>I'm</span> <span
  m='232840'>starting</span> <span m='233260'>at</span> <span
  m='233820'>t</span> <span m='234080'>equals</span> <span m='234300'>0.</span>
  <span m='234490'>I'm</span> <span m='234680'>starting--</span> <span
  m='235470'>this</span> <span m='235740'>is</span> <span m='236200'>1</span>
  <span m='236500'>minus</span> <span m='236870'>1.</span> <span
  m='237200'>It's</span> <span m='237350'>0.</span> </p><p><span
  m='238340'>And</span> <span m='238540'>now</span> <span m='238760'>I</span>
  <span m='238900'>just</span> <span m='239190'>have</span> <span
  m='239370'>to</span> <span m='239510'>fix</span> <span m='240390'>the</span>
  <span m='240800'>initial</span> <span m='243430'>slope,</span> <span
  m='244820'>the</span> <span m='245280'>first</span> <span
  m='245530'>derivative,</span> <span m='246180'>to</span> <span
  m='246580'>be</span> <span m='246770'>1.</span> <span m='247610'>Well,</span>
  <span m='247940'>what's</span> <span m='248210'>the</span> <span
  m='248340'>derivative</span> <span m='248870'>of</span> <span
  m='248990'>this?</span> <span m='249290'>This</span> <span
  m='249590'>brings</span> <span m='249950'>down</span> <span
  m='250210'>an</span> <span m='250330'>s1.</span> <span m='251310'>This</span>
  <span m='251550'>brings</span> <span m='251880'>down</span> <span
  m='252190'>an</span> <span m='252320'>s2.</span> <span m='254090'>At</span>
  <span m='254300'>t</span> <span m='254500'>equals</span> <span
  m='254820'>0,</span> <span m='255140'>I'm</span> <span
  m='255280'>getting</span> <span m='255690'>an</span> <span
  m='255810'>s1</span> <span m='256339'>minus</span> <span m='256730'>s2.</span>
  <span m='256959'>So</span> <span m='257260'>I'll</span> <span
  m='257480'>just</span> <span m='257720'>divide</span> <span
  m='258140'>by</span> <span m='258329'>that,</span> <span m='258930'>s1</span>
  <span m='259970'>minus</span> <span m='260670'>s2.</span> <span
  m='262600'>There you</span> <span m='262870'>go.</span> <span
  m='264340'>That's</span> <span m='264840'>the</span> <span
  m='265990'>impulse</span> <span m='266620'>response--</span> <span
  m='267725'>a</span> <span m='268070'>null</span> <span
  m='268510'>solution</span> <span m='269760'>that</span> <span
  m='269980'>satisfies</span> <span m='270990'>these</span> <span
  m='273020'>special</span> <span m='273880'>initial</span> <span
  m='274360'>conditions.</span> </p><p><span m='275760'>So</span> <span
  m='275830'>that's</span> <span m='276210'>the</span> <span
  m='276370'>function</span> <span m='277820'>in</span> <span
  m='278110'>mathematics</span> <span m='278830'>that's</span> <span
  m='278960'>sometimes</span> <span m='279430'>called</span> <span
  m='279650'>the</span> <span m='279760'>fundamental</span> <span
  m='280520'>solution.</span> <span m='281640'>It's</span> <span
  m='281930'>a</span> <span m='282030'>solution</span> <span
  m='283040'>from</span> <span m='283560'>which</span> <span
  m='283880'>you</span> <span m='284120'>can</span> <span
  m='284440'>create</span> <span m='285040'>all</span> <span
  m='285420'>solutions.</span> <span m='286990'>It's</span> <span
  m='287200'>really</span> <span m='287550'>the</span> <span
  m='287970'>mother</span> <span m='288340'>of</span> <span
  m='288650'>solutions</span> <span m='289440'>to</span> <span
  m='289580'>this</span> <span m='291100'>second-order</span> <span
  m='291890'>differential</span> <span m='292540'>equation.</span> <span
  m='293430'>Because</span> <span m='293860'>if</span> <span m='294030'>I</span>
  <span m='294140'>have</span> <span m='294320'>another</span> <span
  m='294700'>forcing</span> <span m='295220'>function,</span> <span
  m='295990'>this</span> <span m='296240'>tells</span> <span
  m='296520'>me</span> <span m='296680'>that</span> <span
  m='296970'>growth</span> <span m='297380'>rate.</span> </p><p><span
  m='298140'>It's</span> <span m='298400'>just</span> <span
  m='298690'>like</span> <span m='299090'>e</span> <span m='299590'>to</span>
  <span m='299700'>the</span> <span m='300690'>at</span> <span
  m='301821'>for</span> <span m='302200'>a</span> <span
  m='302240'>first-order</span> <span m='302970'>equation.</span> <span
  m='303950'>Remember</span> <span m='304280'>the</span> <span
  m='304430'>growth</span> <span m='304750'>rate</span> <span m='305030'>e
  to</span> <span m='305240'>the</span> <span m='305490'>at</span> <span
  m='305990'>for</span> <span m='306120'>the</span> <span
  m='306270'>simple</span> <span m='306680'>first-order</span> <span
  m='307360'>equation</span> <span m='307890'>with</span> <span
  m='308380'>interest</span> <span m='308880'>rate</span> <span
  m='309380'>coefficient</span> <span m='310050'>a?</span> <span
  m='311480'>Now</span> <span m='311630'>we</span> <span m='311780'>have</span>
  <span m='312050'>two.</span> <span m='313310'>Instead</span> <span
  m='313750'>of</span> <span m='313970'>a,</span> <span m='314310'>we</span>
  <span m='314470'>have</span> <span m='314640'>an</span> <span
  m='314770'>s1</span> <span m='315260'>and an</span> <span
  m='315650'>s2,</span> <span m='316800'>and</span> <span
  m='318350'>that's</span> <span m='318760'>the</span> <span
  m='318870'>special</span> <span m='319290'>function.</span> </p><p><span
  m='320300'>OK.</span> <span m='321580'>We</span> <span m='321710'>need</span>
  <span m='321950'>to</span> <span m='322050'>get</span> <span
  m='322280'>more</span> <span m='322550'>insight</span> <span
  m='322990'>on</span> <span m='323150'>that</span> <span m='323520'>for</span>
  <span m='324390'>particular</span> <span m='325070'>cases.</span> <span
  m='325710'>So</span> <span m='325880'>let</span> <span m='326130'>me</span>
  <span m='326980'>show</span> <span m='327340'>you</span> <span
  m='327580'>the</span> <span m='327810'>same</span> <span
  m='328290'>function</span> <span m='329290'>when</span> <span
  m='332140'>I</span> <span m='332380'>have</span> <span m='333700'>no</span>
  <span m='333880'>damping.</span> <span m='335230'>Start</span> <span
  m='335530'>with</span> <span m='335650'>that</span> <span
  m='335880'>case,</span> <span m='336715'>always</span> <span
  m='337220'>the</span> <span m='337350'>easiest</span> <span
  m='337910'>case.</span> <span m='338870'>When</span> <span m='339090'>B</span>
  <span m='339410'>is</span> <span m='339500'>0--</span> <span
  m='340350'>B</span> <span m='340630'>was</span> <span m='340840'>the</span>
  <span m='340980'>damping</span> <span m='341520'>coefficient,</span> <span
  m='342270'>the</span> <span m='342380'>first</span> <span
  m='342720'>derivative</span> <span m='343300'>in</span> <span
  m='343450'>our</span> <span m='343600'>differential</span> <span
  m='344190'>equation.</span> <span m='346370'>Can</span> <span
  m='346530'>I</span> <span m='346660'>just</span> <span m='346970'>bring</span>
  <span m='347220'>down</span> <span m='347530'>the</span> <span
  m='347640'>differential</span> <span m='348210'>equation?</span> </p><p><span
  m='348720'>When</span> <span m='349120'>B is</span> <span m='349520'>0</span>
  <span m='349920'>here,</span> <span m='351370'>that's</span> <span
  m='351620'>no</span> <span m='351830'>damping.</span> <span
  m='352720'>I</span> <span m='352860'>just</span> <span m='353170'>have</span>
  <span m='353380'>the</span> <span m='353490'>second</span> <span
  m='353720'>derivative</span> <span m='354520'>and</span> <span
  m='354680'>the</span> <span m='354780'>function.</span> <span
  m='355680'>That's</span> <span m='355960'>when</span> <span
  m='356190'>things</span> <span m='356580'>oscillate</span> <span
  m='357220'>forever.</span> <span m='358470'>So</span> <span
  m='358570'>that's</span> <span m='358870'>what</span> <span
  m='359100'>will</span> <span m='359260'>happen.</span> <span
  m='360020'>With</span> <span m='360330'>B</span> <span
  m='360510'>equals</span> <span m='360980'>0,</span> <span m='363500'>I</span>
  <span m='363680'>have</span> <span m='363860'>pure</span> <span
  m='364490'>oscillation.</span> <span m='365690'>The</span> <span
  m='366630'>s1</span> <span m='366910'>and</span> <span m='367190'>s2</span>
  <span m='370080'>are</span> <span m='370360'>cosines</span> <span
  m='371050'>and</span> <span m='371260'>sines</span> <span
  m='372090'>that</span> <span m='372310'>oscillate.</span> <span
  m='373070'>Or</span> <span m='374300'>it's</span> <span
  m='374520'>neater</span> <span m='375050'>to</span> <span
  m='375180'>stay</span> <span m='375580'>with</span> <span
  m='375970'>exponentials,</span> <span m='377190'>the</span> <span
  m='377520'>i</span> <span m='378150'>omega</span> <span m='378730'>and</span>
  <span m='378950'>minus</span> <span m='379440'>i</span> <span
  m='379590'>omega,</span> <span m='380270'>where</span> <span
  m='380500'>that's</span> <span m='380810'>omega</span> <span
  m='381290'>n,</span> <span m='381750'>the</span> <span
  m='381860'>natural</span> <span m='382390'>frequency.</span> </p><p><span
  m='383530'>Now,</span> <span m='383940'>if</span> <span m='384110'>I</span>
  <span m='384210'>just</span> <span m='384480'>plug</span> <span
  m='384785'>in</span> <span m='386120'>that</span> <span m='386360'>s1</span>
  <span m='386635'>and</span> <span m='386910'>s2--</span> <span
  m='388170'>the</span> <span m='388310'>plus</span> <span m='388730'>is</span>
  <span m='388890'>s1</span> <span m='389470'>and</span> <span
  m='389540'>the</span> <span m='389610'>minus</span> <span m='390030'>is</span>
  <span m='390160'>s2--</span> <span m='390810'>I</span> <span m='391155'>plug
  it</span> <span m='391500'>in</span> <span m='391760'>there,</span> <span
  m='392020'>I</span> <span m='392130'>get</span> <span m='392320'>a</span>
  <span m='392440'>nice</span> <span m='393320'>formula</span> <span
  m='393830'>for</span> <span m='394020'>g</span> <span m='394280'>of</span>
  <span m='394400'>t.</span> <span m='395580'>So</span> <span
  m='395760'>that's</span> <span m='395950'>what</span> <span m='396030'>g
  of</span> <span m='396370'>t</span> <span m='396710'>looks</span> <span
  m='397000'>like</span> <span m='398050'>for</span> <span m='399250'>no</span>
  <span m='399440'>damping.</span> <span m='400600'>It</span> <span
  m='400780'>just</span> <span m='401030'>oscillates.</span> </p><p><span
  m='403880'>OK.</span> <span m='404830'>The</span> <span m='404990'>next</span>
  <span m='405330'>case</span> <span m='405860'>is</span> <span
  m='406070'>underdamping.</span> <span m='408190'>It's</span> <span
  m='408370'>good</span> <span m='408590'>to</span> <span m='408710'>see</span>
  <span m='409130'>all</span> <span m='409330'>these</span> <span
  m='409630'>cases</span> <span m='410130'>each</span> <span
  m='410420'>time.</span> <span m='411260'>So</span> <span
  m='411350'>that's</span> <span m='411690'>a</span> <span
  m='411810'>small</span> <span m='412480'>value</span> <span
  m='412900'>of</span> <span m='413020'>B.</span> <span
  m='413310'>Underdamping</span> <span m='414200'>means</span> <span
  m='414560'>there</span> <span m='414780'>is</span> <span
  m='414870'>some</span> <span m='415080'>damping,</span> <span
  m='416250'>but</span> <span m='422290'>it's</span> <span
  m='422770'>small</span> <span m='423240'>enough</span> <span
  m='423610'>so</span> <span m='424590'>there's</span> <span
  m='424900'>now</span> <span m='426220'>a</span> <span m='426510'>real</span>
  <span m='426810'>part,</span> <span m='427380'>but</span> <span
  m='427560'>there's</span> <span m='427780'>still</span> <span
  m='428100'>an</span> <span m='428250'>imaginary</span> <span
  m='428970'>part.</span> </p><p><span m='430400'>So</span> <span
  m='430630'>this</span> <span m='430900'>is,</span> <span m='431210'>in
  a</span> <span m='431290'>way,</span> <span m='431980'>the</span> <span
  m='432240'>trick</span> <span m='432730'>is</span> <span m='433610'>the</span>
  <span m='433860'>case</span> <span m='434260'>when</span> <span
  m='435170'>s</span> <span m='435480'>is</span> <span
  m='435680'>complex.</span> <span m='436610'>If</span> <span
  m='436760'>I</span> <span m='436870'>go</span> <span m='437110'>higher</span>
  <span m='437550'>with</span> <span m='437750'>the</span> <span
  m='437860'>dampening,</span> <span m='438650'>increase</span> <span
  m='439230'>B</span> <span m='439520'>further,</span> <span
  m='440470'>then</span> <span m='440790'>I'll</span> <span
  m='440960'>hit</span> <span m='441190'>a</span> <span m='441270'>point</span>
  <span m='441640'>where</span> <span m='441880'>there are</span> <span
  m='442490'>two</span> <span m='442840'>real</span> <span
  m='443180'>solutions</span> <span m='443770'>equal.</span> <span
  m='444950'>And if</span> <span m='445120'>I push</span> <span
  m='445560'>B</span> <span m='446000'>beyond</span> <span
  m='446370'>that,</span> <span m='446710'>I've</span> <span
  m='446880'>got</span> <span m='447140'>overdamping,</span> <span
  m='448220'>and</span> <span m='448420'>those</span> <span
  m='448690'>two</span> <span m='448960'>real</span> <span
  m='449230'>solutions</span> <span m='450350'>separate.</span> <span
  m='451230'>They're</span> <span m='451390'>different,</span> <span
  m='452490'>but</span> <span m='452560'>they're</span> <span
  m='452760'>real.</span> <span m='454020'>And</span> <span
  m='454230'>then</span> <span m='454750'>my</span> <span
  m='454980'>formula,</span> <span m='455830'>in</span> <span
  m='456020'>that</span> <span m='456260'>case,</span> <span
  m='456700'>overdamping,</span> <span m='457800'>that</span> <span
  m='458020'>would</span> <span m='458170'>be</span> <span m='458320'>the</span>
  <span m='458420'>best</span> <span m='458700'>formula.</span> </p><p><span
  m='459480'>But</span> <span m='459740'>with</span> <span
  m='459980'>underdamping,</span> <span m='461320'>I</span> <span
  m='461570'>can</span> <span m='461860'>see</span> <span m='462590'>the</span>
  <span m='462660'>oscillation.</span> <span m='463510'>If</span> <span
  m='463660'>I</span> <span m='463770'>just</span> <span m='464130'>plug</span>
  <span m='464385'>in</span> <span m='464640'>those</span> <span
  m='464980'>two</span> <span m='465200'>solutions</span> <span
  m='466240'>for</span> <span m='466420'>s1</span> <span m='466900'>and</span>
  <span m='467020'>s2,</span> <span m='467920'>you'll</span> <span
  m='468160'>see</span> <span m='468460'>that</span> <span m='468630'>I</span>
  <span m='468750'>have</span> <span m='468980'>the</span> <span m='469350'>e
  to</span> <span m='469720'>the</span> <span m='469810'>minus</span> <span
  m='470190'>B</span> <span m='470430'>over</span> <span m='470660'>2t</span>
  <span m='472800'>appears</span> <span m='473490'>throughout.</span> <span
  m='474390'>But</span> <span m='474550'>then</span> <span m='474780'>I</span>
  <span m='474870'>have</span> <span m='475070'>the</span> <span
  m='475400'>sine</span> <span m='475800'>of</span> <span
  m='475910'>omega</span> <span m='476390'>over</span> <span
  m='476770'>omega,</span> <span m='477870'>same</span> <span
  m='478160'>as</span> <span m='478280'>I</span> <span m='478380'>had</span>
  <span m='478650'>before,</span> <span m='479160'>except</span> <span
  m='479470'>now</span> <span m='480350'>the</span> <span
  m='481280'>damping</span> <span m='481900'>frequency</span> <span
  m='482570'>is</span> <span m='482680'>a</span> <span m='482740'>bit</span>
  <span m='482940'>slower</span> <span m='484110'>than</span> <span
  m='484490'>the</span> <span m='484900'>natural</span> <span
  m='485470'>frequency.</span> <span m='486370'>Damping</span> <span
  m='486880'>slows</span> <span m='487350'>that</span> <span
  m='487580'>frequency</span> <span m='488140'>down.</span> <span m='488460'>And
  in a</span> <span m='489680'>different</span> <span m='490070'>video,</span>
  <span m='490570'>we</span> <span m='490710'>had</span> <span
  m='490960'>a</span> <span m='491020'>formula</span> <span
  m='491540'>for</span> <span m='492100'>omega</span> <span
  m='492660'>damping,</span> <span m='493500'>omega</span> <span
  m='493950'>damping.</span> </p><p><span m='494740'>And</span> <span
  m='495010'>then</span> <span m='497700'>increase</span> <span
  m='498260'>the</span> <span m='498370'>damping</span> <span
  m='498830'>some</span> <span m='499010'>more,</span> <span
  m='500280'>then</span> <span m='502628'>this</span> <span
  m='503030'>part--</span> <span m='504100'>this</span> <span
  m='504520'>omega</span> <span m='504950'>damping</span> <span
  m='505430'>goes</span> <span m='505740'>to</span> <span m='505840'>0.</span>
  <span m='507580'>We</span> <span m='507720'>don't</span> <span
  m='507960'>see</span> <span m='508240'>any</span> <span
  m='508710'>imaginary</span> <span m='509510'>part</span> <span
  m='509790'>in</span> <span m='509890'>the</span> <span
  m='510010'>solution.</span> <span m='510560'>We</span> <span
  m='510700'>see</span> <span m='510990'>two</span> <span
  m='511700'>equal</span> <span m='512710'>real</span> <span
  m='513039'>values.</span> <span m='513344'>They're</span> <span
  m='513860'>simple.</span> <span m='514299'>They</span> <span
  m='514440'>have</span> <span m='514669'>to</span> <span m='514770'>be</span>
  <span m='514960'>just</span> <span m='515559'>minus</span> <span
  m='515980'>B/2.</span> </p><p><span m='517169'>So</span> <span
  m='517390'>that's</span> <span m='517710'>a</span> <span
  m='517820'>case</span> <span m='518500'>of</span> <span m='519530'>two</span>
  <span m='520809'>s's</span> <span m='521460'>coming</span> <span
  m='521780'>together.</span> <span m='522950'>And</span> <span
  m='523090'>when</span> <span m='523270'>two</span> <span
  m='523480'>things</span> <span m='523780'>come</span> <span
  m='524000'>together,</span> <span m='525140'>we're</span> <span
  m='525460'>used</span> <span m='525770'>to</span> <span
  m='525890'>seeing</span> <span m='526280'>a</span> <span
  m='526390'>factor</span> <span m='526870'>t</span> <span
  m='527180'>appear.</span> <span m='527980'>So</span> <span m='528390'>I</span>
  <span m='528520'>have</span> <span m='528850'>that</span> <span
  m='529220'>they</span> <span m='529350'>came</span> <span
  m='529670'>together</span> <span m='530120'>at</span> <span
  m='530200'>minus</span> <span m='530590'>B/2.</span> <span
  m='531360'>So</span> <span m='531500'>I</span> <span m='531630'>have</span>
  <span m='531770'>the</span> <span m='531930'>exponential</span> <span
  m='532710'>of</span> <span m='532820'>that.</span> <span m='533500'>But</span>
  <span m='533640'>I</span> <span m='533720'>have a</span> <span
  m='534200'>factor</span> <span m='534690'>t</span> <span
  m='535876'>from</span> <span m='536260'>the</span> <span
  m='536500'>merge</span> <span m='537230'>of</span> <span m='537370'>the</span>
  <span m='537540'>two.</span> <span m='538180'>And</span> <span
  m='538400'>then</span> <span m='539240'>if</span> <span m='539970'>B</span>
  <span m='540240'>increases</span> <span m='540810'>beyond</span> <span
  m='541240'>that,</span> <span m='542760'>that's</span> <span
  m='543000'>my</span> <span m='543180'>formula.</span> <span
  m='544350'>The</span> <span m='544800'>two</span> <span m='545030'>s's</span>
  <span m='545430'>are</span> <span m='545630'>real.</span> </p><p><span
  m='549310'>I</span> <span m='549470'>don't</span> <span
  m='549710'>think</span> <span m='549920'>one</span> <span
  m='550240'>memorizes</span> <span m='551060'>all</span> <span
  m='551260'>this.</span> <span m='551890'>I</span> <span m='551940'>had</span>
  <span m='552160'>to</span> <span m='552330'>look</span> <span
  m='552630'>them</span> <span m='552850'>up</span> <span m='553450'>and</span>
  <span m='553600'>write</span> <span m='553890'>them</span> <span
  m='554060'>on</span> <span m='554200'>the</span> <span m='554290'>board</span>
  <span m='554600'>before</span> <span m='554920'>starting</span> <span
  m='555400'>this</span> <span m='555630'>video.</span> <span
  m='556910'>But</span> <span m='558960'>I</span> <span m='559120'>hope</span>
  <span m='559320'>you</span> <span m='559390'>see</span> <span
  m='559850'>that</span> <span m='560070'>they're</span> <span
  m='560520'>extremely</span> <span m='561390'>nice.</span> <span
  m='562320'>The</span> <span m='562700'>no-damping</span> <span
  m='563630'>case</span> <span m='565130'>with</span> <span m='565320'>[? pure
  ?]</span> <span m='565670'>frequencies</span> <span m='566060'>and</span>
  <span m='566450'>the</span> <span m='566620'>underdamping</span> <span
  m='567490'>case</span> <span m='569610'>with</span> <span m='570010'>a</span>
  <span m='570110'>real--</span> <span m='572170'>a</span> <span
  m='572290'>decay.</span> <span m='573350'>The</span> <span
  m='573520'>critical</span> <span m='574070'>damping</span> <span
  m='575050'>when</span> <span m='575230'>you</span> <span
  m='575390'>increase</span> <span m='576460'>B</span> <span
  m='576870'>further,</span> <span m='577770'>you</span> <span
  m='578580'>just</span> <span m='578910'>have</span> <span
  m='579090'>that</span> <span m='579650'>and</span> <span m='579760'>no</span>
  <span m='580500'>oscillation.</span> <span m='581570'>And</span> <span
  m='581840'>then</span> <span m='582900'>beyond</span> <span
  m='583290'>that</span> <span m='583480'>is</span> <span
  m='583640'>overdamping.</span> <span m='585200'>OK.</span> <span
  m='585820'>So</span> <span m='586080'>we're</span> <span
  m='586250'>good</span> <span m='587970'>for</span> <span m='588240'>the</span>
  <span m='588900'>impulse</span> <span m='589390'>response.</span> </p><p><span
  m='591060'>And now</span> <span m='591530'>I</span> <span
  m='591600'>just</span> <span m='591880'>have</span> <span m='592070'>to</span>
  <span m='592220'>say,</span> <span m='592510'>what's</span> <span
  m='592950'>the</span> <span m='593070'>step</span> <span
  m='593470'>response?</span> <span m='594520'>So</span> <span
  m='594760'>can</span> <span m='594980'>I</span> <span m='597230'>end</span>
  <span m='597480'>this</span> <span m='597700'>video</span> <span
  m='598140'>by</span> <span m='599560'>going</span> <span
  m='599850'>back</span> <span m='600290'>to</span> <span m='601220'>my</span>
  <span m='601450'>equation?</span> <span m='602030'>I</span> <span
  m='602110'>have</span> <span m='602300'>to</span> <span
  m='602410'>bring</span> <span m='602660'>the</span> <span
  m='602810'>board</span> <span m='603020'>down</span> <span
  m='603350'>to</span> <span m='603440'>show</span> <span m='603690'>it</span>
  <span m='603820'>to</span> <span m='603950'>you.</span> <span
  m='604700'>So</span> <span m='604890'>now</span> <span m='605190'>I'm</span>
  <span m='605580'>going</span> <span m='605740'>to</span> <span
  m='605850'>deal</span> <span m='606070'>with</span> <span
  m='606210'>the</span> <span m='606310'>step</span> <span
  m='606630'>response.</span> <span m='608740'>So</span> <span
  m='608990'>the</span> <span m='609490'>equation</span> <span
  m='609805'>is</span> <span m='610120'>the</span> <span m='610250'>same.</span>
  <span m='611290'>I'm</span> <span m='611470'>calling</span> <span
  m='611920'>the</span> <span m='612060'>solution</span> <span
  m='612650'>r</span> <span m='613100'>for</span> <span
  m='613350'>response.</span> <span m='614460'>And</span> <span
  m='614760'>the</span> <span m='614880'>point</span> <span
  m='615190'>is,</span> <span m='615430'>the</span> <span
  m='615550'>right-hand</span> <span m='616050'>side</span> <span
  m='616390'>is</span> <span m='616540'>now</span> <span m='616800'>a</span>
  <span m='616860'>step</span> <span m='617240'>instead</span> <span
  m='618000'>of</span> <span m='618100'>a</span> <span m='618190'>delta.</span>
  </p><p><span m='619480'>So</span> <span m='619620'>we'd</span> <span
  m='619880'>like</span> <span m='620130'>to</span> <span
  m='620280'>solve</span> <span m='620590'>that</span> <span
  m='620830'>equation</span> <span m='621730'>starting</span> <span
  m='622290'>from</span> <span m='622480'>rest.</span> <span
  m='622980'>So</span> <span m='623160'>a</span> <span m='623220'>switch</span>
  <span m='623660'>went</span> <span m='623920'>on,</span> <span
  m='624880'>and</span> <span m='625940'>I</span> <span m='626270'>want</span>
  <span m='626500'>a</span> <span m='626560'>formula</span> <span
  m='627030'>for</span> <span m='627250'>r</span> <span m='627540'>of</span>
  <span m='627670'>t.</span> <span m='628800'>That's</span> <span
  m='629340'>all</span> <span m='629590'>that</span> <span
  m='629710'>remains.</span> <span m='630440'>And</span> <span
  m='630650'>actually,</span> <span m='631430'>that's</span> <span
  m='632320'>just--</span> <span m='634110'>well,</span> <span
  m='635100'>you</span> <span m='635330'>can</span> <span m='635520'>see</span>
  <span m='635940'>what</span> <span m='636290'>the</span> <span
  m='638040'>particular</span> <span m='638770'>solution</span> <span
  m='639160'>is.</span> <span m='640140'>We</span> <span m='640270'>look</span>
  <span m='640530'>at</span> <span m='640600'>a</span> <span
  m='640660'>particular</span> <span m='641300'>solution.</span> <span
  m='642080'>Well,</span> <span m='642380'>this</span> <span
  m='642560'>right-hand</span> <span m='643090'>side</span> <span
  m='643800'>is</span> <span m='644050'>1.</span> <span m='645720'>This</span>
  <span m='645880'>right-hand</span> <span m='646330'>side</span> <span
  m='646580'>is</span> <span m='646700'>1</span> <span m='647390'>beyond</span>
  <span m='647900'>t</span> <span m='648090'>equals</span> <span
  m='648390'>0.</span> <span m='649380'>So</span> <span m='650040'>I'm</span>
  <span m='650280'>looking</span> <span m='650620'>for</span> <span
  m='650850'>a</span> <span m='650880'>way</span> <span m='651230'>to</span>
  <span m='651290'>get</span> <span m='651560'>1</span> <span
  m='651990'>out</span> <span m='652180'>of</span> <span m='652280'>that.</span>
  <span m='653380'>Well,</span> <span m='654090'>or</span> <span
  m='654290'>it</span> <span m='654340'>can</span> <span m='654520'>be</span>
  <span m='654680'>just</span> <span m='654930'>a</span> <span
  m='655000'>constant.</span> </p><p><span m='655560'>The</span> <span
  m='656000'>particular</span> <span m='656700'>solution</span> <span
  m='657300'>is</span> <span m='657510'>the</span> <span
  m='657880'>steady</span> <span m='658380'>state</span> <span
  m='658740'>that</span> <span m='658920'>we're</span> <span
  m='659110'>approaching.</span> <span m='659915'>And</span> <span
  m='660190'>there's</span> <span m='660440'>one</span> <span
  m='661080'>little</span> <span m='661340'>cool</span> <span
  m='661690'>thing</span> <span m='661990'>to</span> <span m='662100'>do.</span>
  <span m='663090'>Sometimes</span> <span m='664950'>people</span> <span
  m='665270'>who</span> <span m='665640'>have</span> <span m='666030'>the</span>
  <span m='666690'>dimensions</span> <span m='667470'>and</span> <span
  m='667610'>units</span> <span m='668140'>of</span> <span
  m='668290'>things</span> <span m='668660'>clearly</span> <span
  m='669130'>in</span> <span m='669270'>their</span> <span
  m='669430'>mind</span> <span m='669820'>will</span> <span
  m='670090'>put</span> <span m='670330'>a</span> <span m='670810'>C</span>
  <span m='671200'>in</span> <span m='671370'>there.</span> <span
  m='676630'>This</span> <span m='676860'>is</span> <span
  m='677000'>really</span> <span m='677300'>the</span> <span
  m='677430'>good</span> <span m='677790'>thing</span> <span
  m='678100'>to</span> <span m='678200'>do</span> <span m='678910'>is</span>
  <span m='679140'>to</span> <span m='679610'>have</span> <span
  m='679860'>that</span> <span m='680090'>C</span> <span m='680420'>in</span>
  <span m='680560'>there</span> <span m='680790'>because</span> <span
  m='681120'>now</span> <span m='681850'>the</span> <span
  m='682050'>units</span> <span m='682580'>for</span> <span m='682820'>r</span>
  <span m='683175'>are</span> <span m='683530'>the</span> <span
  m='683710'>same</span> <span m='684170'>as--</span> <span m='684920'>r</span>
  <span m='685195'>is</span> <span m='685470'>going to</span> <span
  m='685820'>go</span> <span m='685860'>to the</span> <span m='686310'>1.</span>
  </p><p><span m='686880'>The</span> <span m='687020'>steady</span> <span
  m='687380'>state</span> <span m='687740'>will</span> <span
  m='687900'>be</span> <span m='688160'>1</span> <span m='688640'>now</span>
  <span m='690630'>because</span> <span m='691000'>I have</span> <span
  m='691170'>Cr</span> <span m='691790'>equals</span> <span m='692110'>C</span>
  <span m='692400'>times</span> <span m='692740'>1.</span> <span
  m='693810'>And</span> <span m='694080'>out in</span> <span
  m='694480'>infinity,</span> <span m='696292'>the</span> <span
  m='696790'>simple</span> <span m='697320'>solution</span> <span
  m='697900'>is</span> <span m='698130'>r</span> <span m='698410'>equal</span>
  <span m='698710'>1.</span> <span m='699440'>If</span> <span
  m='699600'>when</span> <span m='699790'>r</span> <span m='699940'>is</span>
  <span m='700130'>1,</span> <span m='700520'>its</span> <span
  m='700700'>derivative</span> <span m='701090'>is</span> <span
  m='701160'>0.</span> <span m='701700'>Second</span> <span
  m='702050'>derivative's</span> <span m='702500'>0.</span> <span
  m='703070'>r</span> <span m='703310'>equal</span> <span m='703510'>1</span>
  <span m='703810'>is</span> <span m='703970'>a</span> <span
  m='704070'>solution.</span> <span m='705190'>It's</span> <span
  m='705480'>a</span> <span m='705640'>particular</span> <span
  m='706390'>solution.</span> <span m='707370'>It's</span> <span
  m='707840'>the</span> <span m='708090'>steady-state</span> <span
  m='708750'>solution.</span> <span m='709981'>Good.</span> </p><p><span
  m='711304'>But</span> <span m='712190'>that</span> <span m='712800'>r</span>
  <span m='713090'>of</span> <span m='713220'>t</span> <span
  m='713590'>equal</span> <span m='713960'>1</span> <span m='715000'>does</span>
  <span m='715240'>not</span> <span m='715790'>start</span> <span
  m='716300'>correctly.</span> <span m='717270'>We</span> <span
  m='717460'>want</span> <span m='717680'>to</span> <span
  m='717780'>start</span> <span m='718290'>at</span> <span m='718510'>0,</span>
  <span m='720120'>with</span> <span m='720320'>a</span> <span
  m='720380'>slope</span> <span m='720730'>of</span> <span m='720840'>0.</span>
  <span m='721230'>So</span> <span m='721450'>I</span> <span
  m='721580'>have</span> <span m='721780'>to</span> <span
  m='721950'>subtract</span> <span m='722630'>off</span> <span
  m='725290'>one</span> <span m='725470'>of</span> <span m='725530'>these</span>
  <span m='725760'>particular</span> <span m='726440'>solutions</span> <span
  m='727550'>with</span> <span m='728110'>e</span> <span m='728320'>to</span>
  <span m='728420'>the</span> <span m='728610'>s1.</span> <span
  m='729250'>And</span> <span m='729530'>now</span> <span m='729730'>I</span>
  <span m='730040'>have</span> <span m='730180'>to</span> <span
  m='730300'>get</span> <span m='730610'>it</span> <span m='731220'>so</span>
  <span m='731540'>that</span> <span m='731805'>I</span> <span
  m='732070'>have</span> <span m='732200'>to</span> <span
  m='732330'>subtract</span> <span m='732910'>it</span> <span
  m='733030'>off</span> <span m='734100'>so that</span> <span
  m='734290'>this</span> <span m='734720'>thing</span> <span
  m='734950'>starts</span> <span m='735310'>from</span> <span
  m='735560'>0.</span> </p><p><span m='735960'>Let</span> <span
  m='736110'>me</span> <span m='736250'>see</span> <span m='736460'>if</span>
  <span m='736580'>I</span> <span m='736700'>can</span> <span
  m='736910'>do</span> <span m='737080'>it.</span> <span m='737500'>I</span>
  <span m='737670'>think</span> <span m='737960'>maybe</span> <span
  m='738310'>if</span> <span m='738530'>I</span> <span m='738650'>do</span>
  <span m='738920'>an</span> <span m='739070'>s2</span> <span
  m='740880'>e</span> <span m='741700'>to</span> <span m='741920'>the</span>
  <span m='742080'>s1t</span> <span m='744520'>and</span> <span
  m='747070'>subtract</span> <span m='747740'>off an</span> <span
  m='748130'>s1</span> <span m='749402'>e</span> <span m='749890'>to</span>
  <span m='749990'>the</span> <span m='750200'>s2t.</span> <span m='755610'>Do
  you</span> <span m='756020'>see</span> <span m='756240'>what</span> <span
  m='756460'>that</span> <span m='756660'>one</span> <span m='756850'>has</span>
  <span m='757160'>achieved?</span> <span m='758610'>At</span> <span
  m='758890'>t</span> <span m='759190'>equals</span> <span m='759520'>0,</span>
  <span m='760350'>I</span> <span m='760540'>have--</span> <span
  m='762230'>well,</span> <span m='764340'>at</span> <span
  m='764410'>least</span> <span m='764710'>at</span> <span m='764910'>t</span>
  <span m='765090'>equals</span> <span m='765320'>0,</span> <span
  m='765520'>I've</span> <span m='765730'>made</span> <span
  m='766040'>the</span> <span m='766170'>derivative</span> <span
  m='766840'>0</span> <span m='767730'>because</span> <span
  m='768090'>the</span> <span m='768230'>derivative</span> <span
  m='768700'>will</span> <span m='768870'>bring</span> <span
  m='769140'>down</span> <span m='769360'>an</span> <span m='769720'>s1</span>
  <span m='770060'>there.</span> <span m='770720'>That</span> <span
  m='771000'>derivative</span> <span m='771470'>will</span> <span
  m='771590'>bring</span> <span m='771840'>down</span> <span
  m='772120'>an</span> <span m='772230'>s2.</span> <span m='773190'>And
  when</span> <span m='773420'>I</span> <span m='773520'>put</span> <span
  m='773790'>t</span> <span m='774030'>equals</span> <span m='774330'>0,</span>
  <span m='775030'>I</span> <span m='775170'>get</span> <span
  m='775410'>s1,</span> <span m='775630'>s2</span> <span m='776370'>minus</span>
  <span m='776700'>s1,</span> <span m='776920'>s2.</span> <span
  m='777610'>Good,</span> <span m='778090'>good,</span> <span
  m='778570'>good.</span> <span m='779320'>OK.</span> </p><p><span
  m='780110'>Now</span> <span m='780430'>I</span> <span m='780650'>think</span>
  <span m='781210'>that</span> <span m='782170'>together</span> <span
  m='782620'>they're</span> <span m='782790'>all</span> <span
  m='783120'>correct.</span> <span m='785930'>I</span> <span
  m='786090'>need</span> <span m='786370'>to</span> <span
  m='786500'>divide</span> <span m='787010'>by</span> <span m='787340'>s1</span>
  <span m='787850'>minus</span> <span m='788270'>s2.</span> <span
  m='790940'>Let</span> <span m='791030'>me</span> <span m='791150'>just</span>
  <span m='791360'>say,</span> <span m='791920'>I</span> <span
  m='791990'>think</span> <span m='792230'>that's</span> <span
  m='792510'>it.</span> <span m='793310'>I</span> <span m='793370'>think</span>
  <span m='793600'>that's</span> <span m='793860'>it.</span> <span
  m='794640'>It  wouldn't</span> <span m='795090'>be a</span> <span
  m='795170'>bad</span> <span m='795490'>idea</span> <span m='795780'>if</span>
  <span m='795910'>I</span> <span m='796000'>just</span> <span
  m='796350'>checked.</span> <span m='797740'>And</span> <span
  m='798470'>having</span> <span m='798840'>checked,</span> <span
  m='799320'>I've</span> <span m='799570'>learned</span> <span
  m='799970'>that</span> <span m='800150'>that's</span> <span
  m='800440'>a</span> <span m='800510'>plus</span> <span m='800970'>sign.</span>
  <span m='803480'>OK.</span> </p><p><span m='804840'>So</span> <span
  m='805370'>the</span> <span m='805860'>graph</span> <span m='806280'>of</span>
  <span m='806430'>r.</span> <span m='807980'>This</span> <span
  m='808140'>is</span> <span m='808250'>a</span> <span m='808320'>graph</span>
  <span m='808670'>of</span> <span m='808860'>r</span> <span m='809160'>of
  t.</span> <span m='810030'>It</span> <span m='810310'>starts</span> <span
  m='810540'>from</span> <span m='810740'>0,</span> <span m='812040'>and</span>
  <span m='812250'>it</span> <span m='812380'>rises</span> <span
  m='814160'>to</span> <span m='814500'>1.</span> <span
  m='815830'>Asymptotically</span> <span m='817770'>it's</span> <span
  m='818410'>1.</span> <span m='818700'>This</span> <span m='818900'>is</span>
  <span m='819040'>a</span> <span m='819130'>graph</span> <span
  m='819540'>of</span> <span m='819970'>r</span> <span m='820180'>of</span>
  <span m='820380'>t.</span> <span m='822520'>And</span> <span
  m='823020'>in</span> <span m='823240'>practice,</span> <span
  m='823790'>that's</span> <span m='823990'>a</span> <span
  m='824050'>very</span> <span m='824430'>important</span> <span
  m='824920'>number.</span> <span m='825480'>What</span> <span
  m='825740'>is</span> <span m='825940'>the</span> <span m='826100'>rise</span>
  <span m='826590'>time?</span> <span m='827350'>How</span> <span
  m='827560'>far</span> <span m='827880'>do</span> <span m='827950'>you</span>
  <span m='828020'>have</span> <span m='828220'>to</span> <span
  m='828340'>go</span> <span m='828580'>in</span> <span m='828720'>time</span>
  <span m='829110'>before</span> <span m='829480'>it</span> <span
  m='829560'>rises</span> <span m='830060'>up</span> <span m='830320'>to,</span>
  <span m='830440'>let's</span> <span m='830710'>say,</span> <span
  m='831240'>95%</span> <span m='832510'>of</span> <span m='832610'>1?</span>
  <span m='833800'>All</span> <span m='834240'>these</span> <span
  m='834500'>questions</span> <span m='834950'>are</span> <span
  m='835130'>extremely</span> <span m='835790'>practical</span> <span
  m='836440'>questions</span> <span m='836930'>for</span> <span
  m='837090'>an</span> <span m='837190'>engineer.</span> <span
  m='839076'>What's</span> <span m='839430'>the</span> <span
  m='839570'>rise</span> <span m='839940'>time?</span> <span
  m='841110'>And</span> <span m='841370'>you're</span> <span
  m='841580'>playing</span> <span m='842090'>with</span> <span
  m='842240'>this</span> <span m='842490'>formula.</span> </p><p><span
  m='843290'>So</span> <span m='843470'>let</span> <span m='843650'>me</span>
  <span m='843810'>just</span> <span m='844290'>make</span> <span
  m='845600'>another</span> <span m='846080'>comment</span> <span
  m='847610'>on</span> <span m='848100'>this</span> <span m='848830'>r</span>
  <span m='849100'>of</span> <span m='849190'>t</span> <span
  m='849470'>step</span> <span m='849880'>response.</span> <span
  m='851740'>My</span> <span m='851880'>other</span> <span
  m='852120'>comment</span> <span m='852580'>is</span> <span
  m='853260'>I've</span> <span m='853490'>emphasized</span> <span m='854340'>g
  of</span> <span m='854750'>t,</span> <span m='855160'>the</span> <span
  m='855330'>impulse</span> <span m='855810'>response</span> <span
  m='856830'>is</span> <span m='857070'>like</span> <span
  m='857340'>responsible</span> <span m='858110'>for</span> <span
  m='858280'>everything.</span> <span m='859240'>It's</span> <span
  m='859540'>always</span> <span m='860000'>with</span> <span
  m='860210'>us.</span> <span m='861170'>And</span> <span m='862640'>how
  are</span> <span m='862900'>those</span> <span m='863180'>connected?</span>
  <span m='864690'>That's</span> <span m='864920'>my</span> <span
  m='865080'>final</span> <span m='865500'>question</span> <span
  m='866170'>in</span> <span m='866370'>this</span> <span
  m='866700'>video.</span> <span m='867450'>How</span> <span
  m='867900'>is</span> <span m='868410'>r</span> <span m='868650'>of</span>
  <span m='868870'>t</span> <span m='869790'>connected</span> <span
  m='870380'>to</span> <span m='870500'>g</span> <span m='870770'>of</span>
  <span m='870910'>t?</span> </p><p><span m='872270'>Well,</span> <span
  m='873090'>let</span> <span m='873280'>me</span> <span m='873430'>ask</span>
  <span m='873690'>about</span> <span m='873940'>the</span> <span
  m='874040'>right-hand</span> <span m='874470'>sides.</span> <span
  m='875420'>How</span> <span m='875800'>is</span> <span m='876060'>the</span>
  <span m='876190'>step</span> <span m='876590'>function</span> <span
  m='877790'>connected</span> <span m='878370'>to</span> <span
  m='878470'>the</span> <span m='878640'>delta</span> <span
  m='879020'>function?</span> <span m='880720'>Answer,</span> <span
  m='881750'>the</span> <span m='881920'>step</span> <span
  m='882310'>function</span> <span m='883250'>is</span> <span
  m='883450'>the</span> <span m='883620'>integral</span> <span
  m='884150'>of</span> <span m='884320'>the</span> <span m='884420'>delta</span>
  <span m='884800'>function.</span> <span m='886220'>The</span> <span
  m='886460'>integral</span> <span m='886800'>of</span> <span
  m='886910'>the</span> <span m='887050'>delta</span> <span
  m='887330'>function</span> <span m='887780'>is</span> <span
  m='888020'>0</span> <span m='888530'>as</span> <span m='888660'>long</span>
  <span m='888900'>as</span> <span m='888960'>you're</span> <span
  m='889150'>integrating</span> <span m='889760'>off</span> <span
  m='890230'>where</span> <span m='890500'>the</span> <span
  m='890650'>delta</span> <span m='890970'>function</span> <span
  m='891400'>is</span> <span m='891500'>0.</span> <span m='891850'>But</span>
  <span m='892000'>as</span> <span m='892110'>soon</span> <span
  m='892460'>as</span> <span m='892530'>you</span> <span m='892690'>pass</span>
  <span m='894020'>the</span> <span m='894540'>big</span> <span
  m='894760'>spike,</span> <span m='895910'>then</span> <span
  m='896710'>the</span> <span m='896860'>integral</span> <span m='897240'>jumps
  to</span> <span m='897700'>1,</span> <span m='898880'>and</span> <span
  m='899050'>you</span> <span m='899140'>have</span> <span m='899310'>a</span>
  <span m='899380'>step</span> <span m='899670'>function.</span> </p><p><span
  m='900900'>So</span> <span m='901220'>the</span> <span m='901530'>step</span>
  <span m='902000'>function</span> <span m='902550'>is</span> <span
  m='902740'>the</span> <span m='902900'>integral</span> <span
  m='903290'>of</span> <span m='903400'>the</span> <span m='903510'>delta</span>
  <span m='903890'>function.</span> <span m='904850'>So</span> <span
  m='905280'>the</span> <span m='905470'>step</span> <span
  m='906070'>response</span> <span m='907170'>is</span> <span
  m='907420'>the</span> <span m='907590'>integral</span> <span
  m='908550'>of</span> <span m='908770'>the</span> <span m='908910'>delta</span>
  <span m='909370'>response.</span> <span m='910650'>It's</span> <span
  m='910830'>the</span> <span m='910980'>integral</span> <span
  m='911460'>of</span> <span m='911590'>the</span> <span
  m='911730'>impulse</span> <span m='912250'>response.</span> <span
  m='913390'>r</span> <span m='913990'>is</span> <span m='914170'>the</span>
  <span m='914300'>integral</span> <span m='914900'>of</span> <span
  m='915130'>g.</span> <span m='915910'>r</span> <span m='916280'>is</span>
  <span m='916490'>the</span> <span m='916610'>integral</span> <span
  m='917010'>of</span> <span m='917150'>g</span> <span m='919360'>with</span>
  <span m='919520'>the</span> <span m='919660'>correct</span> <span
  m='920340'>initial</span> <span m='920800'>conditions</span> <span
  m='921850'>that</span> <span m='922120'>gave</span> <span m='922400'>us</span>
  <span m='923010'>this</span> <span m='924350'>and</span> <span
  m='924870'>eventually</span> <span m='925390'>[INAUDIBLE]</span> <span
  m='925620'>approach</span> <span m='926040'>1.</span> </p><p><span
  m='926980'>So</span> <span m='928470'>that</span> <span m='929190'>is</span>
  <span m='929600'>the</span> <span m='929960'>two</span> <span
  m='930600'>key</span> <span m='930880'>solutions,</span> <span
  m='931570'>you</span> <span m='931750'>could</span> <span
  m='931950'>say.</span> <span m='934490'>The</span> <span
  m='934720'>impulse</span> <span m='935140'>response</span> <span
  m='935720'>important</span> <span m='937250'>in</span> <span
  m='937720'>theory</span> <span m='938250'>and</span> <span
  m='938520'>in</span> <span m='938660'>practice.</span> <span
  m='939780'>The</span> <span m='939950'>step</span> <span
  m='940370'>response</span> <span m='941010'>extremely</span> <span
  m='941760'>important</span> <span m='942190'>in</span> <span
  m='942330'>practice</span> <span m='942820'>because</span> <span
  m='943620'>turning</span> <span m='943960'>on</span> <span m='944120'>a</span>
  <span m='944230'>switch</span> <span m='944495'>is</span> <span
  m='944760'>so</span> <span m='946630'>basic</span> <span m='947725'>an</span>
  <span m='948080'>operation</span> <span m='951330'>in</span> <span
  m='952660'>engineering.</span> <span m='953930'>Good.</span> <span
  m='955220'>Thank</span> <span m='955570'>you.</span> </p>
uid: bee19b4ff95b0042639fd74606655061
type: courses
layout: video
---
