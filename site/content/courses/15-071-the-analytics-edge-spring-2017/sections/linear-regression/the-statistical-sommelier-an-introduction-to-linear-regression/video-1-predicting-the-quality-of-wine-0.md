---
title: 'Video 1: Predicting the Quality of Wine'
uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
parent_uid: 4495fb4839343c3323b22ef2104af559
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-1-predicting-the-quality-of-wine-0
short_url: video-1-predicting-the-quality-of-wine-0
inline_embed_id: 35918736video1predictingthequalityofwine63033818
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9500'>In</span> <span m='9875'>this</span> <span
  m='10251'>lecture,</span> <span m='10627'>we</span> <span
  m='11002'>introduce</span> <span m='11378'>linear</span> <span
  m='11754'>regression</span> <span m='12130'>a</span> <span
  m='12612'>simple</span> <span m='13094'>but</span> <span m='13576'>very</span>
  <span m='14058'>powerful</span> <span m='14541'>method</span> <span
  m='15023'>to</span> <span m='15505'>analyze</span> <span m='15987'>data</span>
  <span m='16470'>and</span> <span m='16865'>make</span> <span
  m='17260'>predictions</span> <span m='17655'>and</span> <span
  m='18050'>apply</span> <span m='18445'>it</span> <span m='18840'>in</span>
  <span m='19426'>a</span> <span m='20013'>very</span> <span
  m='20600'>unexpected</span> <span m='21186'>context--</span> <span
  m='21773'>predicting</span> <span m='22360'>the</span> <span
  m='22687'>quality</span> <span m='23015'>of</span> <span
  m='23342'>wines.</span> </p><p><span m='29250'>Bordeaux</span> <span
  m='29742'>is</span> <span m='30234'>a</span> <span m='30726'>region</span>
  <span m='31218'>in</span> <span m='31710'>France</span> <span
  m='32202'>popular</span> <span m='32694'>for</span> <span
  m='33186'>producing</span> <span m='33678'>wine.</span> </p><p><span
  m='34170'>While</span> <span m='34470'>this</span> <span m='34770'>wine</span>
  <span m='35070'>has</span> <span m='35370'>been</span> <span
  m='35670'>produced</span> <span m='35970'>in</span> <span
  m='36270'>much</span> <span m='36570'>the</span> <span m='36870'>same</span>
  <span m='37170'>way</span> <span m='37470'>for</span> <span
  m='37770'>hundreds</span> <span m='38070'>of</span> <span
  m='38370'>years,</span> <span m='38670'>there</span> <span
  m='38952'>are</span> <span m='39235'>differences</span> <span
  m='39518'>in</span> <span m='39801'>price</span> <span m='40084'>and</span>
  <span m='40367'>quality</span> <span m='40650'>from</span> <span
  m='41066'>year</span> <span m='41483'>to</span> <span m='41900'>year</span>
  <span m='42316'>that</span> <span m='42733'>are</span> <span
  m='43150'>sometimes</span> <span m='43566'>very</span> <span
  m='43983'>significant.</span> </p><p><span m='44400'>Bordeaux</span> <span
  m='44770'>wines</span> <span m='45140'>are</span> <span
  m='45510'>widely</span> <span m='45880'>believed</span> <span
  m='46250'>to</span> <span m='46591'>taste</span> <span m='46932'>better</span>
  <span m='47274'>when</span> <span m='47615'>they</span> <span
  m='47957'>are</span> <span m='48298'>order,</span> <span m='48640'>so</span>
  <span m='48966'>there's</span> <span m='49292'>an</span> <span
  m='49618'>incentive</span> <span m='49945'>to</span> <span
  m='50271'>store</span> <span m='50597'>young</span> <span
  m='50923'>wines</span> <span m='51250'>until</span> <span
  m='51762'>they</span> <span m='52275'>are</span> <span
  m='52787'>mature.</span> </p><p><span m='53300'>The</span> <span
  m='53598'>main</span> <span m='53896'>problem</span> <span m='54194'>is</span>
  <span m='54492'>that</span> <span m='54790'>it</span> <span
  m='55088'>is</span> <span m='55386'>hard</span> <span m='55684'>to</span>
  <span m='55982'>determine</span> <span m='56280'>the</span> <span
  m='56560'>quality</span> <span m='56840'>of</span> <span m='57120'>the</span>
  <span m='57400'>wine</span> <span m='57680'>when</span> <span
  m='57960'>it</span> <span m='58240'>is</span> <span m='58520'>so</span> <span
  m='58800'>young</span> <span m='59080'>just</span> <span m='59360'>by</span>
  <span m='59640'>tasting</span> <span m='59920'>it,</span> <span
  m='60200'>since</span> <span m='60544'>the</span> <span m='60889'>taste</span>
  <span m='61233'>will</span> <span m='61578'>change</span> <span
  m='61922'>so</span> <span m='62267'>significantly</span> <span
  m='62611'>by</span> <span m='62956'>the</span> <span m='63300'>time</span>
  <span m='63645'>it</span> <span m='63990'>will</span> <span
  m='64582'>actually</span> <span m='65175'>be</span> <span
  m='65767'>consumed.</span> </p><p><span m='66360'>This</span> <span
  m='66765'>is</span> <span m='67171'>why</span> <span m='67576'>wine</span>
  <span m='67982'>tasters</span> <span m='68387'>and</span> <span
  m='68793'>experts</span> <span m='69198'>are</span> <span
  m='69604'>helpful.</span> </p><p><span m='70010'>They</span> <span
  m='70470'>taste</span> <span m='70930'>the</span> <span m='71390'>wines</span>
  <span m='71850'>and</span> <span m='72310'>then</span> <span
  m='72770'>predict</span> <span m='73230'>which</span> <span
  m='73662'>ones</span> <span m='74095'>will</span> <span m='74527'>be</span>
  <span m='74960'>the</span> <span m='75392'>best</span> <span
  m='75825'>wines</span> <span m='76257'>later.</span> </p><p><span
  m='76690'>The</span> <span m='77068'>question</span> <span
  m='77447'>we'll</span> <span m='77825'>address</span> <span
  m='78204'>in</span> <span m='78582'>this</span> <span
  m='78961'>lecture--</span> <span m='79340'>can</span> <span
  m='80160'>analytics</span> <span m='80980'>model</span> <span
  m='81800'>this</span> <span m='82620'>process</span> <span
  m='83440'>better</span> <span m='84260'>and</span> <span m='84572'>make</span>
  <span m='84885'>stronger</span> <span m='85197'>predictions?</span>
  </p><p><span m='88840'>On</span> <span m='89233'>March</span> <span
  m='89627'>4,</span> <span m='90021'>1990,</span> <span m='90415'>the</span>
  <span m='90808'>New</span> <span m='91202'>York</span> <span
  m='91596'>Times</span> <span m='91990'>announced</span> <span
  m='92571'>that</span> <span m='93153'>Princeton</span> <span
  m='93734'>economics</span> <span m='94316'>professor</span> <span
  m='94897'>Orley</span> <span m='95479'>Ashenfelter</span> <span
  m='95889'>can</span> <span m='96299'>predict</span> <span m='96709'>the</span>
  <span m='97119'>quality</span> <span m='97529'>of</span> <span
  m='97939'>Bordeaux</span> <span m='98349'>wine</span> <span
  m='98759'>without</span> <span m='99281'>tasting</span> <span
  m='99803'>a</span> <span m='100325'>single</span> <span
  m='100847'>drop.</span> </p><p><span m='101370'>Ashenfelter's</span> <span
  m='101852'>predictions</span> <span m='102335'>have</span> <span
  m='102817'>nothing</span> <span m='103300'>to</span> <span
  m='103650'>do</span> <span m='104000'>with</span> <span
  m='104350'>assessing</span> <span m='104700'>the</span> <span
  m='105050'>aroma</span> <span m='105400'>of</span> <span m='105750'>the</span>
  <span m='106100'>wine,</span> <span m='106450'>looking</span> <span
  m='106892'>at</span> <span m='107334'>the</span> <span m='107776'>legs,</span>
  <span m='108218'>or</span> <span m='108660'>declaring</span> <span
  m='109102'>that</span> <span m='109544'>the</span> <span
  m='109986'>wine</span> <span m='110428'>tastes</span> <span
  m='110870'>citrusy,</span> <span m='111587'>oaky,</span> <span
  m='112305'>or</span> <span m='113022'>nutty.</span> </p><p><span
  m='113740'>They</span> <span m='114008'>are</span> <span m='114277'>the</span>
  <span m='114546'>results</span> <span m='114815'>of</span> <span
  m='115083'>a</span> <span m='115352'>mathematical</span> <span
  m='115621'>model.</span> </p><p><span m='118430'>Ashenfelter</span> <span
  m='118918'>used</span> <span m='119407'>a</span> <span
  m='119895'>method</span> <span m='120384'>called</span> <span
  m='120872'>linear</span> <span m='121361'>regression.</span> </p><p><span
  m='121850'>The</span> <span m='122418'>methods</span> <span
  m='122987'>predicts</span> <span m='123556'>an</span> <span
  m='124125'>outcome</span> <span m='124694'>variable</span> <span
  m='125263'>or</span> <span m='125832'>dependent</span> <span
  m='126401'>variable.</span> </p><p><span m='126970'>And</span> <span
  m='127279'>in</span> <span m='127588'>doing</span> <span m='127897'>so,</span>
  <span m='128206'>it</span> <span m='128515'>uses</span> <span
  m='128824'>a</span> <span m='129133'>set</span> <span m='129442'>of</span>
  <span m='129751'>what</span> <span m='130060'>is</span> <span
  m='130400'>called</span> <span m='130740'>independent</span> <span
  m='131080'>variables.</span> </p><p><span m='135260'>For</span> <span
  m='135586'>the</span> <span m='135912'>dependent</span> <span
  m='136238'>variable,</span> <span m='136564'>Ashenfelter</span> <span
  m='136890'>chose</span> <span m='137817'>a</span> <span
  m='138745'>typical</span> <span m='139673'>price</span> <span
  m='140601'>in</span> <span m='141528'>1990-1991</span> <span
  m='142456'>for</span> <span m='143384'>Bordeaux</span> <span
  m='144312'>wine</span> <span m='145240'>in</span> <span m='145606'>an</span>
  <span m='145973'>auction.</span> </p><p><span m='146340'>This</span> <span
  m='147106'>approximates</span> <span m='147873'>quality.</span> </p><p><span
  m='148640'>As</span> <span m='149208'>independent</span> <span
  m='149776'>variables,</span> <span m='150344'>he</span> <span
  m='150912'>used</span> <span m='151480'>age</span> <span m='151856'>of</span>
  <span m='152232'>the</span> <span m='152609'>wine--</span> <span
  m='152985'>so</span> <span m='153361'>the</span> <span m='153738'>older</span>
  <span m='154114'>wines</span> <span m='154490'>are</span> <span
  m='154867'>more</span> <span m='155243'>expensive--</span> <span
  m='155620'>and</span> <span m='156495'>weather-related</span> <span
  m='157370'>information,</span> <span m='158245'>specifically</span> <span
  m='159120'>the</span> <span m='159560'>average</span> <span
  m='160000'>growing</span> <span m='160440'>season</span> <span
  m='160880'>temperature,</span> <span m='161320'>the</span> <span
  m='161760'>harvest</span> <span m='162200'>rain,</span> <span
  m='162575'>and</span> <span m='162950'>winter</span> <span
  m='163325'>rain.</span> </p><p><span m='166570'>In</span> <span
  m='167034'>these</span> <span m='167498'>figures,</span> <span
  m='167962'>we</span> <span m='168427'>depict</span> <span
  m='168891'>the</span> <span m='169355'>data</span> <span
  m='169820'>during</span> <span m='170322'>the</span> <span
  m='170825'>period</span> <span m='171328'>from</span> <span
  m='171831'>1952</span> <span m='172334'>to</span> <span
  m='172837'>1978.</span> </p><p><span m='173340'>There</span> <span
  m='173970'>are</span> <span m='174600'>four</span> <span
  m='175230'>independent</span> <span m='175860'>variables--</span> <span
  m='176490'>the</span> <span m='177049'>age</span> <span m='177608'>of</span>
  <span m='178167'>the</span> <span m='178726'>wine,</span> <span
  m='179285'>the</span> <span m='179844'>average</span> <span
  m='180403'>growing</span> <span m='180962'>season</span> <span
  m='181521'>temperature,</span> <span m='182080'>the</span> <span
  m='182475'>harvest</span> <span m='182870'>rain,</span> <span
  m='183265'>and</span> <span m='183660'>winter</span> <span
  m='184055'>rain.</span> </p><p><span m='187650'>And</span> <span
  m='188223'>on</span> <span m='188796'>the</span> <span
  m='189370'>vertical</span> <span m='189943'>axis,</span> <span
  m='190516'>you</span> <span m='191090'>observe</span> <span
  m='191663'>the</span> <span m='192236'>logarithm</span> <span
  m='192810'>of</span> <span m='193475'>the</span> <span
  m='194140'>price,</span> <span m='194805'>the</span> <span
  m='195470'>realization</span> <span m='196135'>in</span> <span
  m='196800'>an</span> <span m='197465'>auction.</span> </p><p><span
  m='198130'>So</span> <span m='198454'>these</span> <span m='198778'>are</span>
  <span m='199103'>the</span> <span m='199427'>primitive</span> <span
  m='199752'>data</span> <span m='200076'>that</span> <span
  m='200401'>Ashenfelter</span> <span m='200725'>used.</span> </p><p><span
  m='204360'>So</span> <span m='205073'>Ashenfelter</span> <span
  m='205786'>believed</span> <span m='206500'>that</span> <span
  m='207213'>his</span> <span m='207926'>predictions</span> <span
  m='208640'>are</span> <span m='208952'>more</span> <span
  m='209265'>accurate</span> <span m='209577'>than</span> <span
  m='209890'>those</span> <span m='210202'>of</span> <span m='210515'>the</span>
  <span m='210827'>world's</span> <span m='211140'>most</span> <span
  m='211817'>influential</span> <span m='212495'>wine</span> <span
  m='213172'>critic.</span> </p><p><span m='213850'>His</span> <span
  m='214592'>name</span> <span m='215334'>is</span> <span
  m='216076'>Robert</span> <span m='216818'>Parker.</span> </p><p><span
  m='217560'>In</span> <span m='218344'>response,</span> <span
  m='219128'>Parker</span> <span m='219912'>called</span> <span
  m='220696'>Ashenfelter</span> <span m='221480'>to</span> <span
  m='221923'>be</span> <span m='222366'>"an</span> <span
  m='222809'>absolute</span> <span m='223252'>total</span> <span
  m='223695'>sham,"</span> <span m='224138'>and</span> <span
  m='224581'>he</span> <span m='225024'>adds</span> <span
  m='225467'>that,</span> <span m='225910'>"rather</span> <span
  m='226336'>like</span> <span m='226763'>a</span> <span m='227190'>movie</span>
  <span m='227616'>critic</span> <span m='228043'>who</span> <span
  m='228470'>never</span> <span m='228896'>goes</span> <span
  m='229323'>to</span> <span m='229750'>see</span> <span m='230176'>the</span>
  <span m='230603'>movie</span> <span m='231030'>but</span> <span
  m='231295'>tells</span> <span m='231560'>you</span> <span
  m='231825'>how</span> <span m='232090'>good</span> <span m='232355'>it</span>
  <span m='232620'>is</span> <span m='232885'>based</span> <span
  m='233150'>on</span> <span m='233540'>the</span> <span
  m='233930'>actors</span> <span m='234320'>and</span> <span
  m='234710'>the</span> <span m='235100'>director."</span> </p>
embedded_media:
  - uid: 80fc12cd6815bd15cde6b85cc20f6b7b
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: f-EN4QySwAs
  - uid: 20b5f658bb0050a5d72a90e75fcb1e1a
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: f-EN4QySwAs
  - uid: 71e6f22c56a53c7e11f1f8c0b6460fdb
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: f-EN4QySwAs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-1-predicting-the-quality-of-wine-0/f-EN4QySwAs.srt
  - uid: a9302569c8e24a6c7f6af3650f4eac75
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: f-EN4QySwAs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-1-predicting-the-quality-of-wine-0/f-EN4QySwAs.pdf
  - uid: 23dc423e34562248befe8874122edbd6
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: b616394785463c15dd2d002e9abb65aa
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a62a412b915eb6950585b90507f5294b
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/f-EN4QySwAs/default.jpg'
  - uid: 9072e5f1bb6ece068ed565587bde5324
    parent_uid: 9ada3bb8c53b2df2c2a32ee4dbef04b0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_2.2.01_300k.mp4
type: courses
layout: video
---
