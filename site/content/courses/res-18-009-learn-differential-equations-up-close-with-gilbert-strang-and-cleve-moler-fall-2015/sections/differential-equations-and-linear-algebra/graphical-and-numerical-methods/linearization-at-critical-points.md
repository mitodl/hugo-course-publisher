---
about_this_resource_text: >-
  <p><strong>Description:</strong> A critical point is a constant solution to
  the differential equation. The slope of the right hand side decides stability
  or instability.</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 3.3</p>
  <p><strong>Instructor:</strong>  Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 0hx59wYpFyY
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Video-YouTube-Stream
    type: Video
    uid: 217f4553b7ad3e2b2d5a9e0d84899d56
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/0hx59wYpFyY/default.jpg'
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bd900afa45499592b571d4ccd9ce3720
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 0hx59wYpFyY
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 69a1c30f1cae9ae1f1e714f3376216e9
  - id: 0hx59wYpFyY.srt
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/graphical-and-numerical-methods/linearization-at-critical-points/0hx59wYpFyY.srt
    title: 3play caption file
    type: null
    uid: 277109614884ccf125a8e8793a54df03
  - id: 0hx59wYpFyY.pdf
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/graphical-and-numerical-methods/linearization-at-critical-points/0hx59wYpFyY.pdf
    title: 3play pdf file
    type: null
    uid: 3fedd7dc16171bbba1f72315e222ab6d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a2742fd98b1ac58e5c2e3182b743d127
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 077d376ba7e456b60f142b66fd37667a
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Video-iTunes U-MP4
    type: Video
    uid: 8bbbeb291adaa3ac6fe95226b1a1392f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_3_3_LinearizationCriticalPoints_300k.mp4
    parent_uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
    title: Video-Internet Archive-MP4
    type: Video
    uid: 663543a2f705c06a6d0efa363953c057
inline_embed_id: 16866118linearizationatcriticalpoints94038099
order_index: 309
parent_uid: 84dd94ec46fe8e5999805e44f82c636f
related_resources_text: ''
short_url: linearization-at-critical-points
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/graphical-and-numerical-methods/linearization-at-critical-points
title: Linearization at Critical Points
transcript: >-
  <p><span m='1380'>GILBERT STRANG: OK.</span> <span m='1800'>I'm</span> <span
  m='2090'>concentrating</span> <span m='2960'>now</span> <span
  m='3240'>on</span> <span m='3450'>the</span> <span m='3640'>key</span> <span
  m='4130'>question</span> <span m='4700'>of</span> <span
  m='4920'>stability.</span> <span m='6540'>Do</span> <span m='7410'>the</span>
  <span m='7650'>solutions</span> <span m='8970'>approach</span> <span
  m='10080'>0</span> <span m='11380'>in</span> <span m='11910'>the</span> <span
  m='12320'>case</span> <span m='12690'>of</span> <span m='12850'>linear</span>
  <span m='13270'>equations?</span> <span m='14320'>Do</span> <span
  m='14470'>they</span> <span m='14690'>approach</span> <span
  m='15480'>some</span> <span m='16180'>constant,</span> <span
  m='16850'>some</span> <span m='17110'>steady</span> <span
  m='17590'>state</span> <span m='18900'>in</span> <span m='19070'>the</span>
  <span m='19190'>case</span> <span m='19570'>of</span> <span
  m='20090'>non-linear</span> <span m='20870'>equations?</span> </p><p><span
  m='22120'>So</span> <span m='22210'>today</span> <span m='22690'>is</span>
  <span m='22960'>the</span> <span m='23050'>beginning</span> <span
  m='23510'>of</span> <span m='23620'>non-linear.</span> <span
  m='25550'>I'll</span> <span m='25730'>start</span> <span m='26100'>with</span>
  <span m='26270'>one</span> <span m='26550'>equation.</span> <span
  m='28360'>dy</span> <span m='28460'>dt</span> <span m='29280'>is</span> <span
  m='29450'>some</span> <span m='29770'>function</span> <span
  m='30340'>of</span> <span m='30480'>y,</span> <span m='31940'>not</span> <span
  m='32290'>a</span> <span m='32390'>linear</span> <span
  m='32860'>function</span> <span m='33390'>probably.</span> <span
  m='34810'>And</span> <span m='35120'>first</span> <span
  m='35500'>question,</span> <span m='36500'>what</span> <span
  m='36830'>is</span> <span m='37240'>a</span> <span m='37770'>steady</span>
  <span m='38065'>state</span> <span m='39050'>or</span> <span
  m='39520'>critical</span> <span m='40050'>point?</span> <span
  m='41300'>Easy</span> <span m='41690'>question.</span> <span
  m='43430'>I'm</span> <span m='43610'>looking</span> <span m='44100'>at</span>
  <span m='44440'>special</span> <span m='45030'>points</span> <span
  m='46490'>capital</span> <span m='47020'>Y,</span> <span
  m='48400'>where</span> <span m='49410'>the</span> <span
  m='49630'>right-hand</span> <span m='50210'>side</span> <span
  m='50560'>is</span> <span m='50730'>0,</span> <span m='52270'>special</span>
  <span m='52750'>points</span> <span m='53240'>where</span> <span
  m='54380'>the</span> <span m='54540'>function</span> <span m='55070'>is</span>
  <span m='55240'>0.</span> <span m='57340'>And</span> <span
  m='59600'>I'll</span> <span m='59860'>call</span> <span m='60100'>those</span>
  <span m='60620'>critical</span> <span m='61230'>points</span> <span
  m='62020'>or</span> <span m='62390'>steady</span> <span
  m='62870'>states.</span> </p><p><span m='64000'>What's</span> <span
  m='64340'>the</span> <span m='64500'>point?</span> <span m='64930'>At</span>
  <span m='65180'>a</span> <span m='65250'>critical</span> <span
  m='65750'>point,</span> <span m='68260'>here is</span> <span
  m='68620'>the</span> <span m='68790'>solution.</span> <span
  m='70020'>It's</span> <span m='70240'>a</span> <span
  m='70340'>constant.</span> <span m='70950'>It's</span> <span
  m='71160'>steady.</span> <span m='75520'>I'm</span> <span
  m='75880'>just</span> <span m='76290'>checking</span> <span
  m='76700'>here</span> <span m='76950'>that</span> <span m='77220'>the</span>
  <span m='77420'>equation</span> <span m='78040'>is</span> <span
  m='78200'>satisfied.</span> <span m='79430'>The</span> <span
  m='80110'>derivative</span> <span m='81070'>is</span> <span m='81310'>0</span>
  <span m='82340'>because</span> <span m='82600'>it's</span> <span
  m='82810'>constant,</span> <span m='83950'>and</span> <span m='84300'>f</span>
  <span m='84630'>is</span> <span m='84860'>0</span> <span
  m='85440'>because</span> <span m='85990'>it's</span> <span m='86260'>a</span>
  <span m='86660'>critical</span> <span m='87150'>point.</span> <span
  m='87930'>So</span> <span m='88180'>I</span> <span m='88350'>have</span> <span
  m='88500'>0</span> <span m='88920'>equals</span> <span m='89280'>0.</span>
  <span m='89640'>The</span> <span m='90140'>differential</span> <span
  m='90720'>equation</span> <span m='91700'>is</span> <span
  m='91900'>perfectly</span> <span m='92480'>good.</span> <span
  m='93170'>So</span> <span m='93810'>if</span> <span m='94220'>I</span> <span
  m='94440'>start</span> <span m='95120'>at</span> <span m='96057'>a</span>
  <span m='97310'>critical</span> <span m='97840'>point,</span> <span
  m='98130'>I</span> <span m='98280'>stay</span> <span m='98620'>there.</span>
  </p><p><span m='99970'>That's</span> <span m='100310'>not</span> <span
  m='100700'>our</span> <span m='101200'>central</span> <span
  m='101700'>question.</span> <span m='102770'>Our</span> <span
  m='102990'>key</span> <span m='103260'>question</span> <span
  m='103800'>is,</span> <span m='104060'>if</span> <span m='104280'>I</span>
  <span m='104420'>start</span> <span m='104940'>at</span> <span
  m='105090'>other</span> <span m='105410'>points,</span> <span
  m='106950'>do</span> <span m='107170'>I</span> <span
  m='107340'>approach</span> <span m='108600'>a</span> <span
  m='108780'>critical</span> <span m='109260'>point,</span> <span
  m='109840'>or</span> <span m='110080'>do</span> <span m='110300'>I</span>
  <span m='111200'>go</span> <span m='111370'>away</span> <span m='111710'>from
  it?</span> <span m='112685'>Is</span> <span m='112960'>the</span> <span
  m='113140'>critical</span> <span m='113600'>point</span> <span
  m='114030'>stable</span> <span m='114290'>and</span> <span
  m='114550'>attractive,</span> <span m='116320'>or</span> <span
  m='116710'>is</span> <span m='116900'>it</span> <span
  m='117160'>unstable</span> <span m='118140'>and</span> <span
  m='118550'>repulsive?</span> </p><p><span m='120840'>So</span> <span
  m='121640'>the</span> <span m='121780'>way</span> <span m='121980'>to</span>
  <span m='122090'>answer</span> <span m='122440'>that</span> <span
  m='122710'>question</span> <span m='124280'>is</span> <span
  m='124850'>to</span> <span m='125010'>look</span> <span m='125310'>at</span>
  <span m='125420'>the</span> <span m='125570'>equation</span> <span
  m='127030'>when</span> <span m='127290'>you're</span> <span
  m='127530'>very</span> <span m='127910'>near</span> <span
  m='128270'>the</span> <span m='128440'>critical</span> <span
  m='128880'>point.</span> <span m='130199'>Very</span> <span
  m='130509'>near</span> <span m='130729'>the</span> <span
  m='130889'>critical</span> <span m='131340'>point,</span> <span
  m='131670'>we</span> <span m='131910'>could</span> <span
  m='132520'>make</span> <span m='133000'>the</span> <span
  m='133160'>equation</span> <span m='133900'>linear.</span> <span
  m='134350'>We</span> <span m='134540'>can</span> <span
  m='134850'>linearize</span> <span m='135910'>the</span> <span
  m='136090'>equation,</span> <span m='137050'>and</span> <span
  m='137250'>that's</span> <span m='137580'>the</span> <span
  m='137720'>whole</span> <span m='138000'>trick.</span> <span
  m='138680'>And</span> <span m='138910'>I've</span> <span
  m='139110'>spoken</span> <span m='139670'>before,</span> <span
  m='140220'>and</span> <span m='140430'>I'll</span> <span m='140630'>do</span>
  <span m='140800'>it</span> <span m='140920'>again</span> <span
  m='141300'>now</span> <span m='141870'>for</span> <span m='142090'>one</span>
  <span m='142370'>equation.</span> <span m='143530'>But</span> <span
  m='143730'>the</span> <span m='143880'>real</span> <span
  m='144730'>message,</span> <span m='145860'>the</span> <span
  m='146000'>real</span> <span m='146520'>content</span> <span
  m='147240'>comes</span> <span m='147700'>with</span> <span
  m='148700'>two</span> <span m='149210'>or</span> <span m='149430'>three</span>
  <span m='149810'>equations.</span> <span m='152010'>That's</span> <span
  m='152360'>what</span> <span m='152540'>we</span> <span m='152670'>see</span>
  <span m='152900'>in</span> <span m='153040'>nature</span> <span
  m='153870'>very</span> <span m='154170'>often,</span> <span
  m='154780'>and</span> <span m='155240'>we</span> <span m='155430'>want</span>
  <span m='155710'>to</span> <span m='155780'>know,</span> <span
  m='158875'>is</span> <span m='159360'>the</span> <span
  m='159510'>problem</span> <span m='159950'>stable?</span> </p><p><span
  m='161020'>OK.</span> <span m='161490'>So</span> <span m='161720'>what</span>
  <span m='161930'>does</span> <span m='162100'>linearize</span> <span
  m='162900'>mean?</span> <span m='165250'>Every</span> <span
  m='165590'>function</span> <span m='166100'>is</span> <span
  m='166300'>linear</span> <span m='166820'>if</span> <span
  m='166920'>you</span> <span m='167110'>look</span> <span m='167370'>at</span>
  <span m='167540'>it</span> <span m='167740'>through</span> <span
  m='168030'>a</span> <span m='169140'>microscope.</span> <span
  m='174570'>Maybe</span> <span m='174890'>I</span> <span
  m='174970'>should</span> <span m='175240'>say</span> <span
  m='175490'>if</span> <span m='175660'>you</span> <span m='175830'>blow</span>
  <span m='176280'>it</span> <span m='176380'>up</span> <span
  m='177000'>near</span> <span m='177580'>y</span> <span m='177960'>equal</span>
  <span m='178250'>Y,</span> <span m='178980'>every</span> <span
  m='179370'>function</span> <span m='179840'>is</span> <span
  m='180000'>linear.</span> <span m='180885'>Here  is</span> <span
  m='181370'>f</span> <span m='181620'>of</span> <span m='181760'>y.</span>
  <span m='186040'>Here</span> <span m='186300'>it's</span> <span
  m='186480'>coming</span> <span m='186990'>through--</span> <span
  m='187680'>it's</span> <span m='187800'>a</span> <span m='187880'>graph</span>
  <span m='188320'>of</span> <span m='188480'>f</span> <span
  m='188650'>of</span> <span m='188780'>y,</span> <span
  m='189130'>whatever</span> <span m='189600'>it</span> <span
  m='189670'>is.</span> <span m='190622'>If</span> <span m='191100'>this</span>
  <span m='191660'>we</span> <span m='191830'>recognize</span> <span
  m='192580'>as</span> <span m='192780'>the</span> <span m='192900'>point</span>
  <span m='193680'>capital</span> <span m='194210'>Y,</span> <span
  m='194640'>right,</span> <span m='195480'>that's</span> <span
  m='195740'>where</span> <span m='195900'>the</span> <span
  m='196030'>function</span> <span m='196500'>is</span> <span
  m='196650'>0.</span> </p><p><span m='197410'>And</span> <span
  m='197610'>near</span> <span m='197890'>that</span> <span
  m='198250'>point,</span> <span m='200250'>my</span> <span
  m='200800'>function</span> <span m='201470'>is</span> <span
  m='201670'>almost</span> <span m='202430'>a</span> <span
  m='202520'>straight</span> <span m='202920'>line.</span> <span
  m='204900'>And</span> <span m='205390'>the</span> <span
  m='205530'>slope</span> <span m='206450'>of</span> <span
  m='206640'>that</span> <span m='207200'>tangent</span> <span
  m='207940'>is</span> <span m='208370'>the</span> <span
  m='208980'>coefficient,</span> <span m='210500'>and</span> <span
  m='212140'>everything</span> <span m='212610'>depends</span> <span
  m='213050'>on</span> <span m='213200'>that.</span> <span
  m='213630'>Everything</span> <span m='214130'>depends</span> <span
  m='214580'>on</span> <span m='214790'>whether</span> <span
  m='215170'>the</span> <span m='215390'>slope</span> <span m='216340'>is</span>
  <span m='216600'>going</span> <span m='216910'>up</span> <span
  m='217170'>like</span> <span m='217440'>that--</span> <span
  m='218640'>probably</span> <span m='219190'>that's</span> <span
  m='219850'>going</span> <span m='220070'>to</span> <span m='220140'>be</span>
  <span m='220320'>unstable--</span> <span m='221410'>or</span> <span
  m='221910'>coming</span> <span m='222290'>down.</span> <span
  m='223650'>If</span> <span m='223790'>it were</span> <span
  m='223980'>coming</span> <span m='224350'>down,</span> <span
  m='225380'>then</span> <span m='225810'>the</span> <span
  m='225930'>slope</span> <span m='226330'>would</span> <span
  m='226460'>be</span> <span m='226630'>negative</span> <span
  m='227260'>at</span> <span m='227420'>the</span> <span
  m='227530'>critical</span> <span m='228000'>point,</span> <span
  m='229240'>and</span> <span m='229420'>probably</span> <span
  m='229810'>that</span> <span m='230030'>will</span> <span m='230180'>be</span>
  <span m='230360'>stable.</span> <span m='231360'>OK.</span> </p><p><span
  m='232040'>So</span> <span m='232220'>I</span> <span m='232330'>just</span>
  <span m='232570'>have</span> <span m='232740'>to</span> <span
  m='232880'>do</span> <span m='233220'>a</span> <span m='233290'>little</span>
  <span m='233610'>calculus.</span> <span m='235410'>The</span> <span
  m='235590'>whole</span> <span m='235830'>idea</span> <span
  m='236300'>of</span> <span m='236430'>linearizing</span> <span
  m='237510'>is</span> <span m='238010'>the</span> <span
  m='238140'>central</span> <span m='238760'>idea</span> <span
  m='239140'>of</span> <span m='239240'>calculus.</span> <span
  m='240260'>That</span> <span m='240480'>we</span> <span m='240660'>have</span>
  <span m='240950'>curves,</span> <span m='242670'>but</span> <span
  m='243010'>near</span> <span m='243340'>a</span> <span
  m='243410'>point,</span> <span m='244750'>we</span> <span
  m='244940'>can</span> <span m='245130'>pretend--</span> <span
  m='246490'>they</span> <span m='246730'>are</span> <span
  m='248680'>essentially</span> <span m='249300'>straight</span> <span
  m='249900'>if</span> <span m='250110'>we</span> <span m='250690'>focus</span>
  <span m='251160'>in,</span> <span m='251450'>if</span> <span
  m='251610'>we</span> <span m='251750'>zoom</span> <span m='252130'>in.</span>
  <span m='252710'>So</span> <span m='252920'>this</span> <span
  m='253150'>is</span> <span m='253310'>a</span> <span
  m='253410'>zooming-in</span> <span m='254260'>problem,</span> <span
  m='254970'>linearization.</span> <span m='256390'>OK.</span> <span
  m='256980'>So</span> <span m='257170'>if</span> <span m='257279'>I</span>
  <span m='257430'>zoom</span> <span m='257829'>in</span> <span
  m='259540'>the</span> <span m='259709'>function</span> <span
  m='261680'>at</span> <span m='261940'>some</span> <span m='264160'>y.</span>
  <span m='265850'>I'm</span> <span m='266070'>zooming</span> <span
  m='266560'>in</span> <span m='266870'>around</span> <span
  m='267390'>the</span> <span m='267520'>point</span> <span
  m='268060'>capital</span> <span m='268590'>Y.</span> <span
  m='270850'>But</span> <span m='271330'>you</span> <span
  m='271520'>remember</span> <span m='272340'>the</span> <span
  m='272830'>tangent</span> <span m='273340'>line</span> <span
  m='273710'>stuff</span> <span m='276320'>is</span> <span m='276590'>the</span>
  <span m='276680'>function</span> <span m='277240'>at</span> <span
  m='277440'>Y.</span> <span m='279100'>So</span> <span m='279940'>little</span>
  <span m='280340'>y</span> <span m='280710'>is</span> <span
  m='280910'>some</span> <span m='281210'>point</span> <span
  m='281670'>close</span> <span m='282060'>by.</span> <span
  m='283180'>Capital</span> <span m='283710'>Y</span> <span m='284170'>is</span>
  <span m='284520'>the</span> <span m='285290'>crossing</span> <span
  m='285840'>point.</span> </p><p><span m='286610'>And</span> <span
  m='287300'>this</span> <span m='287580'>is</span> <span m='287860'>the</span>
  <span m='289310'>y</span> <span m='290380'>minus</span> <span
  m='291100'>Y</span> <span m='292510'>times</span> <span m='293100'>the</span>
  <span m='293580'>slope--</span> <span m='294940'>that's</span> <span
  m='295270'>the</span> <span m='295410'>slope--</span> <span
  m='296870'>the</span> <span m='296940'>slope</span> <span m='300400'>at</span>
  <span m='300800'>the</span> <span m='302920'>critical</span> <span
  m='303370'>point</span> <span m='303750'>there</span> <span
  m='304620'>is</span> <span m='305300'>all</span> <span
  m='305530'>that's--</span> <span m='306210'>you</span> <span
  m='306380'>see</span> <span m='306720'>that the</span> <span
  m='307130'>right-hand</span> <span m='307640'>side</span> <span
  m='308130'>is</span> <span m='308380'>linear.</span> <span
  m='309860'>And</span> <span m='310060'>actually,</span> <span
  m='310530'>f</span> <span m='310740'>of</span> <span m='310870'>Y</span> <span
  m='311250'>is</span> <span m='311440'>0.</span> <span m='312110'>That's</span>
  <span m='312540'>the</span> <span m='314260'>point.</span> <span
  m='315100'>So</span> <span m='315410'>that</span> <span m='316120'>I</span>
  <span m='316300'>have</span> <span m='316660'>just</span> <span
  m='316960'>a</span> <span m='317050'>linear</span> <span
  m='317410'>approximation</span> <span m='318810'>with</span> <span
  m='318980'>that</span> <span m='319240'>slope</span> <span
  m='320220'>and</span> <span m='320700'>a</span> <span m='320830'>simple</span>
  <span m='321250'>function.</span> <span m='322180'>OK.</span> </p><p><span
  m='323490'>So</span> <span m='324830'>I'll</span> <span m='325010'>use</span>
  <span m='325920'>this</span> <span m='326200'>approximation.</span> <span
  m='327590'>I'll</span> <span m='327860'>put</span> <span
  m='328120'>that</span> <span m='328620'>into</span> <span
  m='329050'>the</span> <span m='329270'>equation,</span> <span
  m='330950'>and</span> <span m='331090'>then</span> <span
  m='331250'>I'll</span> <span m='331370'>have</span> <span m='331530'>a</span>
  <span m='331590'>linear</span> <span m='332030'>equation,</span> <span
  m='333030'>which</span> <span m='333230'>I</span> <span m='333350'>can</span>
  <span m='333570'>easily</span> <span m='334010'>solve.</span> <span
  m='334620'>Can</span> <span m='334840'>I</span> <span m='334910'>do</span>
  <span m='335110'>that?</span> <span m='335760'>So</span> <span
  m='335930'>my</span> <span m='336210'>plan</span> <span m='336680'>is,</span>
  <span m='338210'>take</span> <span m='338430'>my</span> <span
  m='338590'>differential</span> <span m='339210'>equation,</span> <span
  m='341090'>look,</span> <span m='341540'>focus</span> <span
  m='342180'>near</span> <span m='342710'>the</span> <span
  m='342910'>steady</span> <span m='343310'>state,</span> <span
  m='343690'>near</span> <span m='343890'>the</span> <span
  m='344040'>critical</span> <span m='344470'>point</span> <span
  m='344810'>capital</span> <span m='345280'>Y.</span> <span
  m='346110'>Near</span> <span m='346350'>that</span> <span
  m='346670'>point,</span> <span m='348060'>this</span> <span
  m='348480'>is</span> <span m='351550'>my</span> <span m='352620'>good</span>
  <span m='352850'>approximation</span> <span m='353880'>to</span> <span
  m='354110'>f,</span> <span m='354480'>and</span> <span m='354690'>I'll</span>
  <span m='354830'>just</span> <span m='355050'>use</span> <span
  m='355360'>it.</span> <span m='355570'>So</span> <span m='356040'>I</span>
  <span m='356120'>plan</span> <span m='356460'>to</span> <span
  m='356750'>use</span> <span m='357030'>that</span> <span
  m='357240'>right</span> <span m='357480'>away.</span> </p><p><span
  m='358130'>So</span> <span m='358330'>now</span> <span
  m='358650'>here's</span> <span m='359020'>the</span> <span
  m='359160'>linearized.</span> <span m='365820'>So</span> <span
  m='366040'>d</span> <span m='366340'>by</span> <span m='366520'>dt</span>
  <span m='367090'>of</span> <span m='367230'>y</span> <span
  m='370380'>equals</span> <span m='372460'>f</span> <span m='372690'>of</span>
  <span m='372860'>y.</span> <span m='373790'>But</span> <span
  m='374210'>I'm</span> <span m='374450'>going</span> <span m='374570'>to</span>
  <span m='374650'>do</span> <span m='374880'>approximately</span> <span
  m='375980'>equals</span> <span m='377800'>this</span> <span
  m='379840'>y</span> <span m='380630'>minus</span> <span
  m='381210'>capital</span> <span m='381790'>Y</span> <span
  m='382710'>times</span> <span m='384260'>the</span> <span
  m='384960'>slope.</span> <span m='386530'>So</span> <span
  m='386730'>the</span> <span m='386900'>slope</span> <span m='387540'>is</span>
  <span m='388360'>my</span> <span m='389200'>coefficient</span> <span
  m='390340'>little</span> <span m='390760'>a</span> <span m='391220'>in</span>
  <span m='391680'>my</span> <span m='392080'>first-order</span> <span
  m='392810'>linear</span> <span m='393740'>equation.</span> <span
  m='394045'>So</span> <span m='396300'>I'm</span> <span m='396570'>going</span>
  <span m='396810'>back</span> <span m='397120'>to</span> <span
  m='397270'>chapter</span> <span m='397690'>1</span> <span
  m='398170'>for</span> <span m='398660'>this</span> <span
  m='399800'>linearization</span> <span m='400610'>for</span> <span
  m='401020'>one</span> <span m='401260'>equation.</span> <span
  m='402530'>But</span> <span m='402750'>then</span> <span m='403790'>the</span>
  <span m='404000'>next</span> <span m='405600'>video</span> <span
  m='406040'>is</span> <span m='406250'>the</span> <span m='406380'>real</span>
  <span m='407590'>thing</span> <span m='408770'>by</span> <span
  m='409160'>allowing</span> <span m='409730'>two</span> <span
  m='410030'>equations</span> <span m='410700'>or</span> <span
  m='410860'>even</span> <span m='411130'>three</span> <span
  m='411480'>equations.</span> <span m='412640'>So</span> <span
  m='412860'>we'll</span> <span m='413000'>make</span> <span m='413250'>a</span>
  <span m='413340'>small</span> <span m='413670'>start</span> <span
  m='414000'>on</span> <span m='414140'>that,</span> <span m='414570'>but</span>
  <span m='414720'>it's</span> <span m='414960'>really</span> <span
  m='415300'>the</span> <span m='415430'>next</span> <span
  m='415790'>video.</span> </p><p><span m='416530'>OK.</span> <span
  m='417260'>So</span> <span m='417820'>that's</span> <span
  m='418180'>the</span> <span m='418340'>equation.</span> <span
  m='418860'>Now,</span> <span m='419510'>notice</span> <span
  m='419930'>that</span> <span m='420120'>I</span> <span m='420250'>could</span>
  <span m='420670'>put</span> <span m='421690'>dy</span> <span
  m='421870'>dt</span> <span m='422620'>as--</span> <span m='424000'>the</span>
  <span m='424160'>derivative</span> <span m='424710'>of</span> <span
  m='424830'>that</span> <span m='425120'>constant</span> <span
  m='425710'>is</span> <span m='425880'>0,</span> <span m='426260'>so</span>
  <span m='426450'>I</span> <span m='426550'>could</span> <span
  m='426790'>safely</span> <span m='427270'>put</span> <span
  m='427480'>it</span> <span m='427620'>there.</span> <span m='428150'>So</span>
  <span m='428350'>what</span> <span m='428560'>does</span> <span
  m='428740'>this</span> <span m='428990'>tell</span> <span
  m='429190'>me?</span> <span m='430085'>Let</span> <span m='430470'>me</span>
  <span m='430610'>call</span> <span m='430910'>that</span> <span
  m='431150'>number</span> <span m='431800'>a.</span> <span m='434980'>So</span>
  <span m='435720'>I</span> <span m='435840'>can</span> <span
  m='436030'>solve</span> <span m='436400'>that</span> <span
  m='436600'>equation,</span> <span m='438630'>and</span> <span
  m='439590'>the</span> <span m='439730'>solution</span> <span
  m='440300'>will</span> <span m='440540'>be</span> <span m='440860'>y</span>
  <span m='441530'>minus</span> <span m='442080'>capital</span> <span
  m='442530'>Y.</span> <span m='443360'>It's</span> <span m='443640'>just</span>
  <span m='444040'>linear.</span> <span m='444740'>The</span> <span
  m='444970'>derivative</span> <span m='445890'>is</span> <span
  m='446060'>the</span> <span m='446220'>thing</span> <span
  m='446490'>itself</span> <span m='447000'>times</span> <span
  m='447470'>a.</span> </p><p><span m='448070'>It's</span> <span
  m='448840'>the</span> <span m='449090'>pure</span> <span
  m='449690'>model</span> <span m='450250'>of</span> <span
  m='451110'>steady</span> <span m='451590'>growth</span> <span
  m='452270'>or</span> <span m='452380'>steady</span> <span
  m='452750'>decay.</span> <span m='454850'>y</span> <span
  m='455180'>minus</span> <span m='455810'>Y</span> <span m='458700'>is,</span>
  <span m='459130'>let's</span> <span m='459380'>say,</span> <span
  m='460190'>some</span> <span m='461320'>e</span> <span m='462080'>to</span>
  <span m='462190'>the</span> <span m='462390'>at.</span> <span
  m='463810'>Right?</span> <span m='465200'>When</span> <span
  m='465390'>I</span> <span m='465480'>have</span> <span m='465770'>a</span>
  <span m='465960'>coefficient</span> <span m='466720'>in</span> <span
  m='466910'>the</span> <span m='467040'>linear</span> <span
  m='467420'>equation</span> <span m='468050'>ay,</span> <span
  m='470610'>I</span> <span m='471050'>see</span> <span m='471300'>it</span>
  <span m='471410'>in</span> <span m='471560'>the</span> <span
  m='471700'>exponential.</span> <span m='472870'>So</span> <span
  m='473810'>a</span> <span m='475970'>less</span> <span m='476320'>than</span>
  <span m='476550'>0</span> <span m='477210'>is</span> <span
  m='477450'>stable.</span> <span m='483840'>Because</span> <span
  m='485210'>a</span> <span m='485540'>less</span> <span m='485830'>than</span>
  <span m='485970'>0,</span> <span m='487080'>that's</span> <span
  m='487420'>negative,</span> <span m='488840'>and</span> <span
  m='489860'>the</span> <span m='489950'>exponential</span> <span
  m='491030'>drops</span> <span m='491360'>to</span> <span m='491480'>0.</span>
  <span m='492210'>And</span> <span m='492430'>that</span> <span
  m='492650'>tells</span> <span m='492980'>me</span> <span
  m='493210'>that</span> <span m='493440'>y</span> <span
  m='494160'>approaches</span> <span m='494890'>capital</span> <span
  m='495430'>Y.</span> <span m='495930'>It goes</span> <span
  m='496825'>to</span> <span m='497310'>the</span> <span
  m='497500'>critical</span> <span m='497930'>point,</span> <span
  m='498610'>to</span> <span m='498850'>the</span> <span
  m='499010'>steady</span> <span m='499390'>state,</span> <span
  m='500200'>and</span> <span m='500350'>not</span> <span
  m='500580'>away.</span> </p><p><span m='501110'>Example,</span> <span
  m='501860'>example.</span> <span m='502520'>Let</span> <span
  m='502670'>me</span> <span m='502810'>just</span> <span m='503120'>take</span>
  <span m='503370'>an</span> <span m='503490'>example</span> <span
  m='504420'>that</span> <span m='504620'>you've</span> <span
  m='504880'>seen</span> <span m='505230'>before,</span> <span
  m='509550'>the</span> <span m='509730'>logistic</span> <span
  m='510440'>equation,</span> <span m='512309'>where</span> <span
  m='512620'>the</span> <span m='512809'>right</span> <span
  m='513150'>side</span> <span m='513640'>is,</span> <span
  m='513860'>say,</span> <span m='514370'>3y</span> <span
  m='515370'>minus</span> <span m='515870'>y</span> <span
  m='516169'>squared.</span> <span m='518030'>OK.</span> <span
  m='518520'>Not</span> <span m='518840'>linear.</span> <span
  m='520659'>So</span> <span m='520840'>I</span> <span m='520929'>plan</span>
  <span m='521220'>to</span> <span m='521320'>linearize</span> <span
  m='522080'>after</span> <span m='522600'>I</span> <span m='522730'>find</span>
  <span m='523169'>the</span> <span m='523280'>critical</span> <span
  m='523720'>points.</span> <span m='524470'>Critical</span> <span
  m='524910'>points,</span> <span m='525790'>this</span> <span
  m='526060'>is</span> <span m='526250'>0.</span> <span m='527450'>That</span>
  <span m='527790'>equals</span> <span m='528240'>0</span> <span
  m='528980'>at--</span> <span m='529370'>I</span> <span m='529500'>guess</span>
  <span m='529780'>there will</span> <span m='529960'>be</span> <span
  m='530620'>two</span> <span m='531100'>critical</span> <span
  m='531550'>points</span> <span m='534090'>because</span> <span
  m='534710'>I</span> <span m='534860'>have</span> <span m='535090'>a</span>
  <span m='535200'>second-degree</span> <span m='535960'>equation.</span> <span
  m='536930'>When</span> <span m='537160'>that</span> <span m='537410'>is</span>
  <span m='537590'>0,</span> <span m='537890'>it</span> <span
  m='538050'>could</span> <span m='538240'>be</span> <span m='538420'>0</span>
  <span m='538900'>at</span> <span m='539130'>y</span> <span
  m='539570'>equals</span> <span m='540020'>0</span> <span m='542190'>or</span>
  <span m='542740'>at</span> <span m='543040'>y</span> <span
  m='543670'>equals</span> <span m='544260'>3.</span> <span m='545900'>So</span>
  <span m='546100'>two</span> <span m='546380'>critical</span> <span
  m='546850'>points,</span> <span m='547990'>and</span> <span
  m='548150'>each</span> <span m='548400'>critical</span> <span
  m='548840'>point</span> <span m='549340'>has</span> <span
  m='549700'>its</span> <span m='549890'>own</span> <span
  m='550960'>linearization,</span> <span m='552610'>its</span> <span
  m='552720'>slope</span> <span m='553390'>at</span> <span
  m='553640'>that</span> <span m='553910'>critical</span> <span
  m='554370'>point.</span> </p><p><span m='555040'>So</span> <span
  m='555230'>you</span> <span m='555680'>see,</span> <span m='556730'>if</span>
  <span m='556940'>I</span> <span m='557050'>graph</span> <span
  m='557500'>f</span> <span m='557720'>of</span> <span m='557850'>y</span> <span
  m='558380'>here,</span> <span m='560670'>this</span> <span
  m='561030'>3y</span> <span m='561720'>minus</span> <span m='562210'>y</span>
  <span m='562530'>squared</span> <span m='563660'>has--</span> <span
  m='565730'>there</span> <span m='566030'>is</span> <span m='566430'>3y</span>
  <span m='567900'>minus</span> <span m='568360'>y</span> <span
  m='568820'>squared.</span> <span m='569700'>There</span> <span
  m='569920'>is</span> <span m='570020'>one</span> <span
  m='570390'>critical</span> <span m='570860'>point,</span> <span
  m='571270'>0.</span> <span m='572090'>There</span> <span m='572260'>is</span>
  <span m='572360'>the</span> <span m='572520'>other</span> <span
  m='572770'>critical</span> <span m='573200'>point</span> <span
  m='573500'>at</span> <span m='573670'>3.</span> <span m='574550'>Here</span>
  <span m='574730'>the</span> <span m='574890'>slope</span> <span
  m='575290'>is</span> <span m='575470'>positive--</span> <span
  m='577110'>unstable.</span> <span m='578240'>Here</span> <span
  m='578490'>the</span> <span m='578650'>slope</span> <span m='579040'>is</span>
  <span m='579220'>negative--</span> <span m='580280'>stable.</span> <span
  m='581030'>So</span> <span m='581240'>this</span> <span m='581460'>is</span>
  <span m='581800'>stable,</span> <span m='583200'>unstable.</span> </p><p><span
  m='585060'>And</span> <span m='585580'>let</span> <span m='585690'>me</span>
  <span m='585820'>just</span> <span m='587100'>push</span> <span
  m='587460'>through</span> <span m='587740'>the</span> <span
  m='588870'>numbers</span> <span m='589420'>here.</span> <span
  m='592260'>So</span> <span m='592600'>the</span> <span m='593590'>df</span>
  <span m='593915'>dy,</span> <span m='596250'>that's</span> <span
  m='596540'>the</span> <span m='596680'>slope.</span> <span
  m='597790'>So</span> <span m='597820'>I</span> <span m='597920'>have</span>
  <span m='598050'>to</span> <span m='598160'>take</span> <span
  m='598430'>the</span> <span m='598600'>derivative</span> <span
  m='599160'>of</span> <span m='599290'>that.</span> <span
  m='600440'>Notice</span> <span m='600830'>this</span> <span
  m='601010'>is</span> <span m='601190'>not</span> <span m='601440'>my</span>
  <span m='601620'>differential</span> <span m='602310'>equation.</span> <span
  m='602830'>There</span> <span m='603210'>is</span> <span m='603310'>my</span>
  <span m='603500'>differential</span> <span m='604070'>equation.</span> <span
  m='604880'>Here</span> <span m='605330'>is</span> <span m='605740'>my</span>
  <span m='606500'>linearization</span> <span m='607336'>step,</span> <span
  m='608050'>my</span> <span m='608560'>computation</span> <span
  m='609530'>of</span> <span m='609760'>the</span> <span
  m='610310'>derivative,</span> <span m='611130'>the</span> <span
  m='611150'>slope.</span> </p><p><span m='612390'>So</span> <span
  m='612890'>the</span> <span m='613030'>derivative</span> <span
  m='613540'>of</span> <span m='613690'>that</span> <span m='613990'>is</span>
  <span m='614190'>3</span> <span m='614560'>minus</span> <span
  m='615090'>2y,</span> <span m='617570'>and</span> <span m='618840'>I've</span>
  <span m='618980'>got</span> <span m='619320'>two</span> <span
  m='619860'>critical</span> <span m='620280'>points.</span> <span
  m='620690'>At</span> <span m='620850'>capital</span> <span m='621360'>Y</span>
  <span m='621710'>equal</span> <span m='621960'>0,</span> <span
  m='622380'>that's</span> <span m='622760'>3.</span> <span m='624180'>And
  at</span> <span m='624650'>capital</span> <span m='625140'>Y</span> <span
  m='625500'>equals</span> <span m='625810'>3,</span> <span m='626275'>it's
  3</span> <span m='626740'>minus</span> <span m='627220'>6,</span> <span
  m='627590'>it's</span> <span m='627870'>minus</span> <span
  m='628450'>3.</span> <span m='629580'>Those</span> <span m='629830'>are</span>
  <span m='629900'>the</span> <span m='630040'>slopes</span> <span
  m='630490'>we</span> <span m='630710'>saw</span> <span m='630990'>on</span>
  <span m='631140'>the</span> <span m='631250'>picture.</span> <span
  m='632340'>Slope</span> <span m='632710'>up,</span> <span
  m='633730'>the</span> <span m='633850'>parabola</span> <span
  m='634360'>is</span> <span m='634470'>going</span> <span m='634750'>up.</span>
  <span m='635500'>Slope</span> <span m='635860'>down.</span> <span
  m='636700'>So</span> <span m='636900'>this</span> <span m='637190'>will</span>
  <span m='637420'>correspond</span> <span m='638190'>to</span> <span
  m='638730'>unstable.</span> </p><p><span m='643165'>So</span> <span
  m='643600'>what</span> <span m='643770'>does</span> <span m='643900'>it</span>
  <span m='644010'>mean</span> <span m='644330'>for</span> <span
  m='644490'>this</span> <span m='644720'>to</span> <span m='644840'>be</span>
  <span m='645040'>unstable?</span> <span m='646450'>It</span> <span
  m='646680'>means</span> <span m='647160'>that</span> <span
  m='647410'>the</span> <span m='647560'>solution</span> <span
  m='648110'>Y</span> <span m='648460'>equals</span> <span m='648760'>0,</span>
  <span m='650190'>constant</span> <span m='650740'>0,</span> <span
  m='652000'>solves</span> <span m='652510'>the</span> <span
  m='652710'>equation,</span> <span m='653550'>no</span> <span
  m='653800'>problem.</span> <span m='655020'>If</span> <span
  m='655210'>Y</span> <span m='655740'>stays</span> <span m='656220'>at</span>
  <span m='656360'>0,</span> <span m='657480'>it's</span> <span
  m='657740'>a</span> <span m='657840'>perfectly</span> <span
  m='658470'>OK</span> <span m='658940'>solution.</span> <span
  m='659590'>The</span> <span m='659720'>derivative</span> <span
  m='660250'>is</span> <span m='660390'>0.</span> <span
  m='660710'>Everything's</span> <span m='661230'>0.</span> </p><p><span
  m='662670'>But</span> <span m='662810'>if</span> <span m='662950'>I</span>
  <span m='663050'>move</span> <span m='663380'>a</span> <span
  m='663490'>little</span> <span m='663830'>away</span> <span
  m='664180'>from</span> <span m='664440'>0,</span> <span m='664990'>if</span>
  <span m='665200'>I</span> <span m='665290'>move</span> <span
  m='665610'>a</span> <span m='665680'>little</span> <span m='666070'>way</span>
  <span m='666280'>from</span> <span m='666500'>0,</span> <span
  m='667470'>then</span> <span m='668090'>the</span> <span m='668340'>3y</span>
  <span m='669300'>minus</span> <span m='669770'>y</span> <span
  m='670080'>squared,</span> <span m='670670'>what</span> <span
  m='670840'>does</span> <span m='671010'>it</span> <span m='671120'>look</span>
  <span m='671370'>like?</span> <span m='672700'>If</span> <span
  m='672960'>I'm</span> <span m='673050'>moving</span> <span
  m='673530'>just</span> <span m='673820'>a</span> <span
  m='673890'>little</span> <span m='674220'>away</span> <span
  m='674550'>from</span> <span m='675000'>Y</span> <span
  m='675320'>equals</span> <span m='675590'>0,</span> <span
  m='676020'>away</span> <span m='676410'>from</span> <span
  m='676650'>this</span> <span m='677210'>unstable</span> <span
  m='677880'>point,</span> <span m='678900'>y</span> <span
  m='679280'>squared</span> <span m='679870'>will</span> <span
  m='680030'>be</span> <span m='680220'>extremely</span> <span
  m='680810'>small.</span> <span m='682420'>So</span> <span
  m='682660'>it's</span> <span m='682800'>really</span> <span
  m='683210'>3y.</span> <span m='686860'>The</span> <span m='686990'>y</span>
  <span m='687250'>squared</span> <span m='687630'>will</span> <span
  m='687760'>be</span> <span m='687940'>small</span> <span
  m='688530'>near</span> <span m='688850'>Y</span> <span
  m='689200'>equals</span> <span m='689460'>0.</span> <span
  m='689920'>Forget</span> <span m='690240'>that.</span> <span
  m='691040'>We</span> <span m='691240'>have</span> <span
  m='691670'>exponential</span> <span m='692410'>growth,</span> <span
  m='692790'>e</span> <span m='692950'>to</span> <span m='693050'>the</span>
  <span m='693240'>3t.</span> <span m='698930'>We</span> <span
  m='699140'>leave</span> <span m='699540'>the</span> <span m='699640'>0</span>
  <span m='700220'>steady</span> <span m='700690'>state,</span> <span
  m='701950'>and</span> <span m='702140'>we</span> <span m='702250'>move</span>
  <span m='702550'>on.</span> </p><p><span m='703640'>Now,</span> <span
  m='704470'>eventually</span> <span m='705090'>we'll</span> <span
  m='705380'>move</span> <span m='706040'>somewhere</span> <span
  m='706530'>near</span> <span m='707410'>the</span> <span
  m='707540'>other</span> <span m='707800'>steady</span> <span
  m='708260'>state.</span> <span m='710485'>At</span> <span
  m='710890'>capital</span> <span m='711300'>Y</span> <span
  m='711570'>equals</span> <span m='711890'>3,</span> <span
  m='714420'>the</span> <span m='714700'>slope</span> <span m='715250'>of</span>
  <span m='715380'>this</span> <span m='715650'>thing</span> <span
  m='715910'>is</span> <span m='716070'>minus</span> <span m='716660'>3,</span>
  <span m='717510'>and</span> <span m='718010'>the</span> <span
  m='718320'>negative</span> <span m='719270'>one</span> <span
  m='719565'>will</span> <span m='719860'>be</span> <span m='720080'>the</span>
  <span m='720130'>stable</span> <span m='721260'>point.</span> <span
  m='722090'>So</span> <span m='722830'>where</span> <span m='723170'>y</span>
  <span m='723990'>minus</span> <span m='724680'>3,</span> <span
  m='727120'>the</span> <span m='727310'>distance</span> <span
  m='729375'>to</span> <span m='729850'>the</span> <span
  m='732370'>steady</span> <span m='732840'>state,</span> <span
  m='734000'>the</span> <span m='734270'>critical</span> <span
  m='734760'>point</span> <span m='735640'>will</span> <span
  m='736030'>grow</span> <span m='736920'>like</span> <span m='738040'>e</span>
  <span m='738500'>to</span> <span m='738640'>the</span> <span
  m='738770'>mi--</span> <span m='739250'>well,</span> <span
  m='739620'>will</span> <span m='739860'>decay,</span> <span
  m='740295'>sorry,</span> <span m='740810'>I</span> <span
  m='740950'>said</span> <span m='741230'>grow,</span> <span m='741500'>I</span>
  <span m='741600'>meant</span> <span m='741900'>decay--</span> <span
  m='742730'>will</span> <span m='742960'>decay</span> <span
  m='743380'>like</span> <span m='743650'>e</span> <span m='743820'>to</span>
  <span m='743880'>the</span> <span m='744000'>minus</span> <span
  m='744490'>3t</span> <span m='746020'>because</span> <span
  m='746590'>the</span> <span m='746740'>minus</span> <span m='747240'>3</span>
  <span m='747610'>in</span> <span m='747740'>the</span> <span
  m='747860'>slope</span> <span m='749040'>is</span> <span m='749500'>the</span>
  <span m='749590'>minus</span> <span m='750130'>3</span> <span
  m='750590'>in</span> <span m='750790'>the</span> <span
  m='750920'>exponent.</span> </p><p><span m='754070'>OK.</span> <span
  m='754710'>That's</span> <span m='755020'>not</span> <span
  m='756460'>rocket</span> <span m='756890'>science,</span> <span
  m='757740'>although</span> <span m='758120'>it's</span> <span
  m='758270'>pretty</span> <span m='758640'>important</span> <span
  m='759120'>for</span> <span m='759260'>rockets.</span> <span
  m='761440'>Let</span> <span m='761600'>me</span> <span m='761700'>just</span>
  <span m='761920'>say</span> <span m='762300'>what's</span> <span
  m='762590'>coming</span> <span m='762940'>next</span> <span
  m='763570'>and</span> <span m='763980'>then</span> <span m='764450'>do</span>
  <span m='764660'>it</span> <span m='764890'>in</span> <span
  m='765180'>the</span> <span m='765960'>follow-up</span> <span
  m='766530'>video.</span> <span m='767590'>So</span> <span
  m='767790'>what's</span> <span m='768020'>coming</span> <span
  m='768370'>next</span> <span m='769850'>will</span> <span m='770100'>be</span>
  <span m='770980'>two</span> <span m='771240'>equations,</span> <span
  m='775510'>dy</span> <span m='776050'>dt</span> <span m='778820'>and</span>
  <span m='779240'>dz</span> <span m='779600'>dt.</span> <span m='783120'>I
  have</span> <span m='783300'>two</span> <span m='783550'>things.</span> <span
  m='784910'>y</span> <span m='785180'>and</span> <span m='785340'>z,</span>
  <span m='785590'>they</span> <span m='785750'>depend</span> <span
  m='786180'>on</span> <span m='786370'>each</span> <span
  m='786590'>other.</span> <span m='786990'>So</span> <span
  m='788460'>the</span> <span m='789300'>growth</span> <span
  m='789890'>or</span> <span m='790330'>decay</span> <span m='792070'>of</span>
  <span m='792590'>y</span> <span m='793610'>is</span> <span
  m='794030'>given</span> <span m='794350'>by</span> <span
  m='794560'>some</span> <span m='794860'>function</span> <span
  m='795360'>f,</span> <span m='796440'>and</span> <span m='796660'>this</span>
  <span m='796860'>is</span> <span m='797020'>given</span> <span
  m='797340'>by</span> <span m='797570'>some</span> <span
  m='798620'>different</span> <span m='801240'>function</span> <span
  m='802290'>g,</span> <span m='804060'>so</span> <span m='804330'>f</span>
  <span m='804610'>and</span> <span m='804780'>g.</span> </p><p><span
  m='805050'>Now,</span> <span m='805330'>when</span> <span m='805650'>do</span>
  <span m='805790'>I</span> <span m='805970'>have</span> <span
  m='807460'>steady</span> <span m='807880'>state?</span> <span
  m='809180'>When</span> <span m='809540'>this</span> <span m='809810'>is</span>
  <span m='809960'>0.</span> <span m='810480'>When</span> <span
  m='810700'>they're</span> <span m='810850'>both</span> <span
  m='811230'>0.</span> <span m='811520'>They</span> <span m='811680'>both</span>
  <span m='811990'>have</span> <span m='812220'>to</span> <span
  m='812340'>be</span> <span m='812500'>0.</span> <span m='813180'>And</span>
  <span m='813350'>then</span> <span m='813880'>dy</span> <span
  m='814240'>dt</span> <span m='814600'>is</span> <span m='814770'>0,</span>
  <span m='815150'>so</span> <span m='815640'>y is</span> <span
  m='816040'>steady.</span> <span m='816860'>dz</span> <span
  m='817260'>dt</span> <span m='817660'>is</span> <span m='817810'>0,</span>
  <span m='818120'>so</span> <span m='818320'>z</span> <span
  m='818590'>is</span> <span m='818760'>steady.</span> <span
  m='819540'>So</span> <span m='819660'>I'm</span> <span
  m='819830'>looking</span> <span m='820260'>for--</span> <span
  m='820740'>I've</span> <span m='820810'>got</span> <span m='822010'>two</span>
  <span m='822450'>numbers</span> <span m='823130'>to</span> <span
  m='823300'>look</span> <span m='823530'>for.</span> <span
  m='824290'>And</span> <span m='824490'>I've</span> <span m='824610'>got</span>
  <span m='824890'>two</span> <span m='825190'>equations,</span> <span
  m='826280'>f</span> <span m='826630'>of</span> <span m='826830'>y--</span>
  <span m='827740'>oh,</span> <span m='828150'>let</span> <span
  m='828300'>me</span> <span m='828470'>call</span> <span m='828690'>that</span>
  <span m='829160'>capital</span> <span m='829780'>Y,</span> <span
  m='830520'>capital</span> <span m='831130'>Z--</span> <span
  m='831900'>so</span> <span m='832070'>those</span> <span m='832370'>are</span>
  <span m='832450'>numbers</span> <span m='833040'>now--</span> <span
  m='834030'>equals</span> <span m='834500'>0.</span> <span m='834740'>So</span>
  <span m='834910'>I</span> <span m='835020'>want</span> <span
  m='835240'>to</span> <span m='835310'>solve--</span> <span
  m='838090'>equals</span> <span m='838560'>0,</span> <span
  m='839340'>and</span> <span m='839760'>g</span> <span m='841180'>of</span>
  <span m='841390'>capital</span> <span m='841890'>Y,</span> <span
  m='842290'>capital</span> <span m='842780'>Z</span> <span
  m='843200'>equals</span> <span m='843640'>0.</span> <span
  m='845630'>Yeah,</span> <span m='846210'>yeah.</span> <span
  m='847170'>So</span> <span m='851920'>both</span> <span
  m='852360'>right-hand</span> <span m='852870'>sides</span> <span
  m='853220'>should</span> <span m='853420'>be</span> <span m='853550'>0,</span>
  <span m='854000'>and</span> <span m='854860'>then</span> <span
  m='855080'>I'm</span> <span m='855310'>in</span> <span m='855460'>a</span>
  <span m='855550'>steady</span> <span m='855940'>state.</span> </p><p><span
  m='857080'>But</span> <span m='857880'>this</span> <span m='858090'>is</span>
  <span m='858220'>going</span> <span m='858390'>to</span> <span
  m='858450'>be</span> <span m='858620'>like</span> <span m='858830'>more</span>
  <span m='859150'>interesting</span> <span m='859750'>to</span> <span
  m='859900'>linearize.</span> <span m='861360'>That's</span> <span
  m='861680'>really</span> <span m='862030'>the</span> <span
  m='862180'>next</span> <span m='862650'>video,</span> <span
  m='863450'>is</span> <span m='863900'>how</span> <span m='864130'>do</span>
  <span m='864230'>you</span> <span m='864410'>linearize?</span> <span
  m='865210'>What</span> <span m='865460'>does</span> <span
  m='865590'>the</span> <span m='865840'>linearized</span> <span
  m='867060'>thing</span> <span m='867290'>look</span> <span
  m='867560'>like</span> <span m='867840'>when</span> <span
  m='868040'>you</span> <span m='868190'>have</span> <span m='868470'>two</span>
  <span m='868740'>functions</span> <span m='870230'>depending</span> <span
  m='870830'>on</span> <span m='871170'>two</span> <span
  m='871430'>variables</span> <span m='872090'>Y</span> <span
  m='872400'>and</span> <span m='872590'>Z?</span> <span
  m='873490'>You're</span> <span m='873700'>going</span> <span
  m='873860'>to</span> <span m='873920'>have,</span> <span
  m='874490'>we'll</span> <span m='874830'>see,</span> <span m='876030'>[? for
  ?]</span> <span m='876400'>slopes--</span> <span m='878780'>well,</span> <span
  m='879080'>you'll</span> <span m='879310'>see</span> <span
  m='879500'>it.</span> <span m='880300'>So</span> <span m='881010'>this</span>
  <span m='881470'>is</span> <span m='881620'>what's</span> <span
  m='881880'>coming.</span> <span m='883340'>And</span> <span
  m='883820'>we</span> <span m='884180'>end</span> <span m='884440'>up</span>
  <span m='884680'>with</span> <span m='884990'>a</span> <span
  m='885130'>two-by-two</span> <span m='886260'>matrix</span> <span
  m='886970'>because</span> <span m='887190'>we</span> <span
  m='887330'>have</span> <span m='887560'>two</span> <span
  m='887800'>equations,</span> <span m='888660'>two</span> <span
  m='888860'>unknowns,</span> <span m='889960'>and</span> <span
  m='892110'>a</span> <span m='892260'>little</span> <span
  m='892510'>more</span> <span m='892990'>excitement</span> <span
  m='894380'>than</span> <span m='895230'>the</span> <span
  m='896820'>classical</span> <span m='897480'>single</span> <span
  m='897960'>equation,</span> <span m='898960'>like a</span> <span
  m='899240'>logistic</span> <span m='899930'>equation.</span> </p><p><span
  m='900920'>OK.</span> <span m='901420'>Onward</span> <span
  m='901950'>to</span> <span m='902100'>two.</span> </p>
uid: 4ae8b4bb823ff4e4fc8afaf7576b0a73
type: courses
layout: video
---
