---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-MP4
    media_location: JtIa7ofeXIY
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: Video-YouTube-MP4
    type: Video
    uid: 6d1ae2eb5575d61854d87f332de8b78e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/JtIa7ofeXIY/default.jpg'
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: db7644211ead918c78326c2a244f4289
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: JtIa7ofeXIY
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 518788adf311204178c8e19f7f90a77c
  - id: JtIa7ofeXIY.srt
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-7-using-line-charts-instead/video-7-using-line-charts-instead-0/JtIa7ofeXIY.srt
    title: 3play caption file
    type: null
    uid: 55f192b87379f316220603de62e587b9
  - id: JtIa7ofeXIY.pdf
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-7-using-line-charts-instead/video-7-using-line-charts-instead-0/JtIa7ofeXIY.pdf
    title: 3play pdf file
    type: null
    uid: 3399ebbd565e8367afa2ef71c9bf9185
  - id: Caption-3Play YouTube id-SRT
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b4bec1137970fedab16ce96cb5f6d2ca
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 917dac3894cda122409684e930444fb4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_7.4.08_300k.mp4
    parent_uid: caa81b71b1ff585dd1b0d5d9b652f0b0
    title: Video-Internet Archive-MP4
    type: Video
    uid: 53f0ad875a753e9648b3b41a471b8e02
inline_embed_id: 8158971video7usinglinechartsinstead35942445
order_index: 1767
parent_uid: 5d57bafe1422b8d9a742d6339058ab65
related_resources_text: ''
short_url: video-7-using-line-charts-instead-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-7-using-line-charts-instead/video-7-using-line-charts-instead-0
title: 'Video 7: Using Line Charts Instead'
transcript: >-
  <p><span m='4500'>First,</span> <span m='4990'>let's</span> <span
  m='5480'>make</span> <span m='5970'>sure</span> <span m='6460'>we</span> <span
  m='6950'>have</span> <span m='7440'>ggplot2</span> <span
  m='7930'>loaded.</span> </p><p><span m='8420'>So</span> <span
  m='9265'>library(ggplot2).</span> </p><p><span m='16420'>Now</span> <span
  m='16824'>let's</span> <span m='17228'>load</span> <span m='17632'>our</span>
  <span m='18036'>data</span> <span m='18440'>frame,</span> <span
  m='18844'>which</span> <span m='19248'>is</span> <span m='19652'>in</span>
  <span m='20056'>households.csv.</span> </p><p><span m='20460'>So</span> <span
  m='21670'>read.csv(households.csv).</span> </p><p><span m='31190'>If</span>
  <span m='31813'>we</span> <span m='32437'>look</span> <span
  m='33061'>at</span> <span m='33685'>the</span> <span
  m='34308'>structure</span> <span m='34932'>of</span> <span
  m='35556'>households,</span> <span m='36180'>we</span> <span
  m='36464'>see</span> <span m='36748'>that</span> <span m='37032'>there</span>
  <span m='37316'>is</span> <span m='37600'>a</span> <span m='37884'>year</span>
  <span m='38168'>column</span> <span m='38452'>and</span> <span
  m='38736'>then</span> <span m='39020'>six</span> <span m='39540'>other</span>
  <span m='40060'>columns</span> <span m='40580'>for</span> <span
  m='41100'>each</span> <span m='41620'>of</span> <span m='42140'>the</span>
  <span m='42660'>different</span> <span m='43180'>household</span> <span
  m='43700'>types.</span> </p><p><span m='44220'>So</span> <span
  m='44535'>this</span> <span m='44850'>is</span> <span
  m='45165'>actually</span> <span m='45480'>a</span> <span
  m='45795'>problem</span> <span m='46110'>for</span> <span m='46425'>us.</span>
  </p><p><span m='46740'>Given</span> <span m='47090'>this</span> <span
  m='47440'>structure</span> <span m='47790'>of</span> <span m='48140'>a</span>
  <span m='48490'>data</span> <span m='48840'>frame,</span> <span
  m='49190'>what</span> <span m='49425'>would</span> <span m='49661'>we</span>
  <span m='49897'>put</span> <span m='50132'>in</span> <span
  m='50368'>the</span> <span m='50604'>aesthetic</span> <span
  m='50840'>for</span> <span m='51722'>our</span> <span m='52605'>ggplot</span>
  <span m='53487'>command?</span> </p><p><span m='54370'>It's</span> <span
  m='54704'>not</span> <span m='55038'>obvious,</span> <span m='55372'>to</span>
  <span m='55707'>me</span> <span m='56041'>at</span> <span
  m='56375'>least,</span> <span m='56710'>and</span> <span m='57072'>in</span>
  <span m='57434'>fact,</span> <span m='57796'>I</span> <span
  m='58158'>don't</span> <span m='58521'>think</span> <span
  m='58883'>it's</span> <span m='59245'>really</span> <span
  m='59607'>possible.</span> </p><p><span m='59970'>The</span> <span
  m='60265'>reason</span> <span m='60561'>is</span> <span m='60857'>that</span>
  <span m='61152'>ggplot</span> <span m='61448'>needs</span> <span
  m='61744'>it</span> <span m='62040'>in</span> <span m='62878'>the</span> <span
  m='63717'>form</span> <span m='64556'>of:</span> <span m='65395'>year,</span>
  <span m='66233'>group,</span> <span m='67072'>and</span> <span
  m='67911'>fraction.</span> </p><p><span m='71330'>The</span> <span
  m='71682'>solution</span> <span m='72035'>is</span> <span m='72387'>to</span>
  <span m='72740'>use</span> <span m='73092'>the</span> <span
  m='73445'>melt</span> <span m='73797'>function</span> <span
  m='74150'>from</span> <span m='74792'>the</span> <span
  m='75435'>reshape</span> <span m='76077'>package.</span> </p><p><span
  m='76720'>Melt</span> <span m='77075'>will</span> <span m='77431'>take</span>
  <span m='77786'>a</span> <span m='78142'>2-dimensional</span> <span
  m='78497'>data</span> <span m='78853'>frame</span> <span m='79208'>like</span>
  <span m='79564'>ours,</span> <span m='79920'>and</span> <span
  m='80305'>convert</span> <span m='80691'>it</span> <span m='81077'>into</span>
  <span m='81463'>exactly</span> <span m='81849'>the</span> <span
  m='82235'>right</span> <span m='82620'>form</span> <span m='83006'>we</span>
  <span m='83392'>need</span> <span m='83778'>for</span> <span
  m='84164'>ggplot2.</span> </p><p><span m='84550'>So</span> <span
  m='85112'>first,</span> <span m='85675'>let's</span> <span
  m='86238'>load</span> <span m='86801'>reshape2</span> <span
  m='87364'>--</span> <span m='87927'>library(reshape2).</span> </p><p><span
  m='91820'>Now,</span> <span m='92104'>let's</span> <span m='92388'>look</span>
  <span m='92672'>at</span> <span m='92956'>the</span> <span
  m='93240'>first</span> <span m='93524'>two</span> <span
  m='93808'>columns</span> <span m='94092'>of</span> <span m='94376'>our</span>
  <span m='94660'>households</span> <span m='94944'>data</span> <span
  m='95229'>frame</span> <span m='96112'>--</span> <span
  m='96996'>households[,1:2].</span> </p><p><span m='105750'>So</span> <span
  m='106136'>there's</span> <span m='106522'>a</span> <span
  m='106908'>Year</span> <span m='107294'>and</span> <span m='107680'>a</span>
  <span m='108066'>MarriedWChild</span> <span m='108452'>for</span> <span
  m='108838'>each</span> <span m='109224'>year.</span> </p><p><span
  m='109610'>Now,</span> <span m='109925'>let's</span> <span
  m='110240'>look</span> <span m='110555'>at</span> <span m='110870'>the</span>
  <span m='111185'>first</span> <span m='111500'>few</span> <span
  m='111815'>rows</span> <span m='112130'>of</span> <span m='112445'>our</span>
  <span m='112760'>melted</span> <span m='113075'>households</span> <span
  m='113390'>data</span> <span m='113855'>frame.</span> </p><p><span
  m='114320'>So</span> <span m='114833'>head(melt(households,</span> <span
  m='115346'>id="Year")).</span> </p><p><span m='129990'>And</span> <span
  m='130178'>there</span> <span m='130366'>you</span> <span
  m='130554'>have</span> <span m='130742'>it.</span> </p><p><span
  m='130930'>So,</span> <span m='131344'>basically,</span> <span
  m='131758'>what's</span> <span m='132172'>happened</span> <span
  m='132586'>is</span> <span m='133000'>that</span> <span m='133621'>each</span>
  <span m='134243'>value</span> <span m='134865'>of</span> <span
  m='135486'>MarriedWChild</span> <span m='136108'>has</span> <span
  m='136730'>turned</span> <span m='137044'>into</span> <span
  m='137358'>its</span> <span m='137672'>own</span> <span m='137986'>row</span>
  <span m='138300'>in</span> <span m='138614'>the</span> <span
  m='138928'>new</span> <span m='139242'>data</span> <span
  m='139556'>frame.</span> </p><p><span m='142810'>To</span> <span
  m='143035'>make</span> <span m='143260'>it</span> <span m='143485'>more</span>
  <span m='143710'>clear,</span> <span m='143935'>perhaps,</span> <span
  m='144160'>let's</span> <span m='144385'>look</span> <span
  m='144610'>at</span> <span m='144895'>the</span> <span m='145181'>first</span>
  <span m='145467'>three</span> <span m='145752'>columns</span> <span
  m='146038'>of</span> <span m='146324'>households.</span> </p><p><span
  m='152890'>Now</span> <span m='153480'>we</span> <span m='154070'>have</span>
  <span m='154660'>MarriedWOChild.</span> </p><p><span m='155250'>Now</span>
  <span m='155675'>let's</span> <span m='156100'>look</span> <span
  m='156525'>at,</span> <span m='156950'>instead</span> <span
  m='157375'>of</span> <span m='157800'>just</span> <span m='158225'>the</span>
  <span m='158650'>first</span> <span m='159075'>rows</span> <span
  m='159500'>of</span> <span m='159815'>our</span> <span
  m='160131'>melted</span> <span m='160447'>data</span> <span
  m='160763'>frame,</span> <span m='161079'>let's</span> <span
  m='161395'>look</span> <span m='161710'>at</span> <span m='162026'>the</span>
  <span m='162342'>first</span> <span m='162658'>10</span> <span
  m='162974'>rows.</span> </p><p><span m='163290'>So</span> <span
  m='163687'>rows</span> <span m='164084'>1</span> <span m='164481'>to</span>
  <span m='164878'>10,</span> <span m='165275'>all</span> <span
  m='165672'>columns.</span> </p><p><span m='173420'>There</span> <span
  m='174196'>we</span> <span m='174973'>go.</span> </p><p><span
  m='175750'>So</span> <span m='176286'>there</span> <span m='176822'>you</span>
  <span m='177358'>can</span> <span m='177894'>see</span> <span
  m='178430'>the</span> <span m='178966'>eight</span> <span
  m='179502'>values</span> <span m='180038'>of</span> <span
  m='180574'>MarriedWChild,</span> <span m='181110'>and</span> <span
  m='181495'>the</span> <span m='181881'>first</span> <span
  m='182267'>two</span> <span m='182652'>values</span> <span
  m='183038'>of</span> <span m='183424'>MarriedWOChild.</span> </p><p><span
  m='183810'>So</span> <span m='184283'>there's</span> <span
  m='184757'>that</span> <span m='185230'>30.3</span> <span m='185704'>up</span>
  <span m='186178'>there,</span> <span m='186651'>gone</span> <span
  m='187125'>down</span> <span m='187599'>to</span> <span m='188072'>30.3</span>
  <span m='188546'>here,</span> <span m='189020'>29.9</span> <span
  m='189524'>gone</span> <span m='190028'>to</span> <span m='190532'>down</span>
  <span m='191036'>here.</span> </p><p><span m='191540'>So</span> <span
  m='191757'>every</span> <span m='191975'>value</span> <span
  m='192192'>in</span> <span m='192410'>our</span> <span m='192627'>data</span>
  <span m='192845'>frame</span> <span m='193062'>now</span> <span
  m='193280'>corresponds</span> <span m='193699'>to</span> <span
  m='194118'>a</span> <span m='194537'>new</span> <span m='194956'>row</span>
  <span m='195375'>in</span> <span m='195794'>our</span> <span
  m='196213'>melted</span> <span m='196632'>data</span> <span
  m='197051'>frame,</span> <span m='197470'>which</span> <span
  m='197795'>is</span> <span m='198120'>exactly</span> <span
  m='198445'>what</span> <span m='198770'>we</span> <span m='199095'>need</span>
  <span m='199420'>for</span> <span m='199745'>ggplot.</span> </p><p><span
  m='200070'>So</span> <span m='200669'>let's</span> <span m='201268'>try</span>
  <span m='201867'>plotting</span> <span m='202466'>this</span> <span
  m='203065'>melted</span> <span m='203664'>data</span> <span
  m='204263'>frame</span> <span m='204862'>--</span> <span
  m='205461'>ggplot,</span> <span m='206060'>melt,</span> <span
  m='206797'>households,</span> <span m='207534'>using</span> <span
  m='208271'>the</span> <span m='209008'>Year</span> <span
  m='209745'>column</span> <span m='210482'>as</span> <span m='211219'>an</span>
  <span m='211956'>id</span> <span m='212693'>column,</span> <span
  m='213430'>the</span> <span m='214176'>key</span> <span
  m='214923'>column.</span> </p><p><span m='215670'>Our</span> <span
  m='216150'>aesthetic</span> <span m='216630'>is</span> <span
  m='217110'>going</span> <span m='217590'>to</span> <span m='218070'>be</span>
  <span m='218550'>now</span> <span m='219030'>to</span> <span
  m='219510'>use</span> <span m='219990'>Year</span> <span m='220470'>on</span>
  <span m='220950'>the</span> <span m='221430'>x-axis.</span> </p><p><span
  m='221910'>Our</span> <span m='222214'>y-axis</span> <span
  m='222519'>will</span> <span m='222823'>be</span> <span m='223128'>the</span>
  <span m='223432'>value</span> <span m='223737'>column</span> <span
  m='224041'>of</span> <span m='224346'>our</span> <span
  m='224650'>melted</span> <span m='224955'>data</span> <span
  m='225260'>frame.</span> </p><p><span m='227970'>And</span> <span
  m='228296'>the</span> <span m='228622'>color</span> <span m='228948'>of</span>
  <span m='229274'>the</span> <span m='229600'>line</span> <span
  m='229926'>will</span> <span m='230252'>depend</span> <span
  m='230579'>on</span> <span m='230876'>the</span> <span
  m='231173'>group,</span> <span m='231471'>which</span> <span
  m='231768'>is</span> <span m='232065'>called</span> <span
  m='232363'>variable</span> <span m='232660'>in</span> <span
  m='232957'>the</span> <span m='233255'>melted</span> <span
  m='233552'>data</span> <span m='233850'>frame.</span> </p><p><span
  m='240080'>So</span> <span m='240417'>that's</span> <span
  m='240755'>our</span> <span m='241092'>aesthetic.</span> </p><p><span
  m='241430'>Our</span> <span m='241971'>geometry</span> <span
  m='242512'>is</span> <span m='243054'>going</span> <span m='243595'>to</span>
  <span m='244137'>be</span> <span m='244678'>lines.</span> </p><p><span
  m='245220'>And</span> <span m='245437'>I</span> <span m='245654'>want</span>
  <span m='245871'>to</span> <span m='246089'>make</span> <span
  m='246306'>the</span> <span m='246523'>lines</span> <span m='246740'>a</span>
  <span m='246958'>little</span> <span m='247175'>bit</span> <span
  m='247392'>thicker.</span> </p><p><span m='247610'>So</span> <span
  m='248291'>let's</span> <span m='248972'>say</span> <span
  m='249654'>line</span> <span m='250335'>size</span> <span m='251017'>is</span>
  <span m='251698'>2.</span> </p><p><span m='252380'>And</span> <span
  m='252748'>I</span> <span m='253116'>also</span> <span m='253484'>want</span>
  <span m='253852'>to</span> <span m='254220'>have</span> <span
  m='254588'>points</span> <span m='254956'>for</span> <span
  m='255324'>each</span> <span m='255692'>year</span> <span m='256060'>in</span>
  <span m='256260'>the</span> <span m='256461'>data</span> <span
  m='256662'>frame,</span> <span m='256863'>so</span> <span
  m='257064'>I'm</span> <span m='257265'>going</span> <span m='257465'>to</span>
  <span m='257666'>have</span> <span m='257867'>lines</span> <span
  m='258068'>and</span> <span m='258269'>points.</span> </p><p><span
  m='258470'>So</span> <span m='259645'>geom_point.</span> </p><p><span
  m='260820'>And</span> <span m='261008'>I'm</span> <span
  m='261196'>going</span> <span m='261385'>to</span> <span
  m='261573'>make</span> <span m='261762'>the</span> <span
  m='261950'>size</span> <span m='262139'>of</span> <span
  m='262327'>these</span> <span m='262516'>a</span> <span
  m='262704'>little</span> <span m='262893'>bit</span> <span
  m='263081'>bigger</span> <span m='263270'>than</span> <span
  m='263726'>normal</span> <span m='264183'>too,</span> <span
  m='264640'>size</span> <span m='265096'>=</span> <span m='265553'>5.</span>
  </p><p><span m='266010'>And</span> <span m='266314'>we</span> <span
  m='266618'>should</span> <span m='266922'>put</span> <span m='267227'>a</span>
  <span m='267531'>y-axis</span> <span m='267835'>label.</span> </p><p><span
  m='268140'>So</span> <span m='268515'>ylab("Percentage</span> <span
  m='268890'>of</span> <span m='269265'>Households").</span> </p><p><span
  m='277710'>And</span> <span m='278275'>there</span> <span
  m='278840'>you</span> <span m='279405'>go.</span> </p><p><span
  m='279970'>Now,</span> <span m='280366'>this</span> <span m='280763'>is</span>
  <span m='281160'>actually</span> <span m='281556'>quite</span> <span
  m='281953'>interesting</span> <span m='282350'>when</span> <span
  m='282605'>we</span> <span m='282860'>compare</span> <span
  m='283116'>it</span> <span m='283371'>back</span> <span m='283626'>to</span>
  <span m='283882'>the</span> <span m='284137'>chart</span> <span
  m='284393'>we</span> <span m='284648'>had</span> <span m='284903'>in</span>
  <span m='285159'>the</span> <span m='285414'>slides.</span> </p><p><span
  m='285670'>Now</span> <span m='285981'>you</span> <span m='286292'>can</span>
  <span m='286603'>see</span> <span m='286914'>just</span> <span
  m='287225'>how</span> <span m='287536'>quickly</span> <span
  m='287847'>MarriedWChild</span> <span m='288159'>is</span> <span
  m='288425'>decreasing</span> <span m='288692'>as</span> <span
  m='288959'>a</span> <span m='289226'>relative</span> <span
  m='289493'>share.</span> </p><p><span m='289760'>You</span> <span
  m='290285'>can</span> <span m='290810'>also</span> <span
  m='291335'>more</span> <span m='291860'>clearly</span> <span
  m='292385'>see</span> <span m='292910'>that</span> <span
  m='293435'>MarriedWOChild</span> <span m='293960'>is</span> <span
  m='294280'>pretty</span> <span m='294601'>much</span> <span
  m='294922'>flat,</span> <span m='295243'>and</span> <span
  m='295564'>that</span> <span m='295885'>the</span> <span
  m='296206'>differences</span> <span m='296527'>being</span> <span
  m='296848'>made</span> <span m='297169'>up</span> <span m='297490'>by</span>
  <span m='297818'>the</span> <span m='298147'>other</span> <span
  m='298475'>four</span> <span m='298804'>types</span> <span
  m='299132'>of</span> <span m='299461'>households</span> <span
  m='299790'>is</span> <span m='300063'>steadily</span> <span
  m='300336'>increasing</span> <span m='300610'>over</span> <span
  m='300883'>the</span> <span m='301156'>years.</span> </p><p><span
  m='303990'>So</span> <span m='304218'>there</span> <span m='304447'>you</span>
  <span m='304676'>have</span> <span m='304905'>it,</span> <span
  m='305133'>the</span> <span m='305362'>same</span> <span
  m='305591'>data,</span> <span m='305820'>plotted</span> <span
  m='306212'>in</span> <span m='306604'>two</span> <span
  m='306996'>different</span> <span m='307388'>ways.</span> </p><p><span
  m='307780'>Now,</span> <span m='308059'>I'm</span> <span m='308338'>not</span>
  <span m='308617'>saying</span> <span m='308896'>one</span> <span
  m='309176'>of</span> <span m='309455'>these</span> <span m='309734'>is</span>
  <span m='310013'>better</span> <span m='310293'>than</span> <span
  m='310572'>the</span> <span m='310851'>other</span> <span
  m='311130'>one.</span> </p><p><span m='311410'>For</span> <span
  m='311640'>example,</span> <span m='311870'>if</span> <span
  m='312100'>I</span> <span m='312330'>want</span> <span m='312560'>to</span>
  <span m='312790'>compare</span> <span m='313020'>inside</span> <span
  m='313250'>a</span> <span m='313480'>given</span> <span
  m='313710'>year,</span> <span m='313940'>say</span> <span
  m='314339'>1970,</span> <span m='314738'>it's</span> <span
  m='315137'>not</span> <span m='315536'>the</span> <span m='315935'>most</span>
  <span m='316334'>easy</span> <span m='316733'>thing,</span> <span
  m='317132'>at</span> <span m='317531'>a</span> <span m='317930'>glance,</span>
  <span m='318330'>to</span> <span m='318734'>see</span> <span
  m='319138'>just</span> <span m='319542'>how</span> <span
  m='319946'>much</span> <span m='320350'>of</span> <span m='320754'>a</span>
  <span m='321158'>total</span> <span m='321562'>hundred</span> <span
  m='321966'>percent</span> <span m='322370'>is</span> <span
  m='322752'>taken</span> <span m='323134'>up</span> <span m='323516'>by</span>
  <span m='323898'>each.</span> </p><p><span m='324280'>But</span> <span
  m='324525'>if</span> <span m='324770'>I</span> <span m='325016'>want</span>
  <span m='325261'>to</span> <span m='325507'>see</span> <span
  m='325752'>across</span> <span m='325998'>years,</span> <span
  m='326243'>it's</span> <span m='326489'>far</span> <span
  m='326734'>superior.</span> </p><p><span m='326980'>And</span> <span
  m='327210'>I</span> <span m='327441'>can</span> <span
  m='327672'>clearly</span> <span m='327903'>see</span> <span
  m='328133'>that</span> <span m='328364'>the</span> <span
  m='328595'>last</span> <span m='328826'>data</span> <span
  m='329056'>point</span> <span m='329287'>is</span> <span
  m='329518'>pretty</span> <span m='329749'>much</span> <span
  m='329980'>right</span> <span m='330198'>next</span> <span
  m='330417'>to</span> <span m='330636'>the</span> <span
  m='330855'>second</span> <span m='331073'>to</span> <span
  m='331292'>last</span> <span m='331511'>data</span> <span
  m='331730'>point,</span> <span m='331966'>which</span> <span
  m='332203'>is</span> <span m='332440'>something</span> <span
  m='332676'>that</span> <span m='332913'>was</span> <span
  m='333150'>hard</span> <span m='333655'>to</span> <span m='334161'>tell</span>
  <span m='334667'>with</span> <span m='335172'>the</span> <span
  m='335678'>other</span> <span m='336184'>visualization.</span> </p><p><span
  m='336690'>So</span> <span m='336880'>I</span> <span m='337070'>hope</span>
  <span m='337260'>this</span> <span m='337450'>has</span> <span
  m='337640'>made</span> <span m='337830'>you</span> <span
  m='338020'>think</span> <span m='338210'>a</span> <span
  m='338400'>little</span> <span m='338590'>bit</span> <span
  m='338780'>more</span> <span m='338970'>about</span> <span
  m='339229'>the</span> <span m='339488'>different</span> <span
  m='339747'>ways</span> <span m='340006'>you</span> <span m='340265'>can</span>
  <span m='340524'>plot</span> <span m='340783'>the</span> <span
  m='341042'>same</span> <span m='341301'>data.</span> </p><p><span
  m='341560'>And</span> <span m='341915'>hopefully</span> <span
  m='342270'>improved</span> <span m='342625'>your</span> <span
  m='342980'>ggplot2</span> <span m='343335'>skills</span> <span
  m='343690'>a</span> <span m='344085'>little</span> <span m='344480'>bit</span>
  <span m='344875'>more.</span> </p><p><span m='345270'>Thanks</span> <span
  m='345893'>for</span> <span m='346516'>watching.</span> </p>
uid: caa81b71b1ff585dd1b0d5d9b652f0b0
type: courses
layout: video
---
