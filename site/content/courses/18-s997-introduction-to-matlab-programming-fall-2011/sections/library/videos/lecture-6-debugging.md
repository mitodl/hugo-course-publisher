---
about_this_resource_text: >-
  <p><strong>Description:</strong> This video demonstrates how to use MATLAB's
  built-in debugger to track variables, values, and function
  returns.</p><p><strong>Instructor:</strong> Yossi Farjoun</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8wiIV-NfYwc
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Video-YouTube-Stream
    type: Video
    uid: 6049e9615f0268204e7ea3c10778cbfa
  - id: Thumbnail--JPG
    media_location: 'https://img.youtube.com/vi/8wiIV-NfYwc/default.jpg'
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Thumbnail--JPG
    type: Thumbnail
    uid: 40bb5dcba9ae664e54d0825c91e804e2
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-6-debugging/id586359674?i=126268023
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Video-iTunes U-MP4
    type: Video
    uid: 9a387d2483ef55d92caddc0544953aff
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT18.S997F11/MIT18_S997F11_lec06_300k.mp4'
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Video-Internet Archive-MP4
    type: Video
    uid: f5373c1fa191da3436bb73a23ed3927a
  - id: vid6-thumbnail.jpg
    parent_uid: 67220f396760eeb42a09af32a393ec79
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-6-debugging/vid6-thumbnail.jpg
    title: vid6-thumbnail.jpg
    type: null
    uid: 74a4a23929607c93d62fa7f73661bb03
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8wiIV-NfYwc
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 281ef1544401a304ef24c2e21902b247
  - id: 8wiIV-NfYwc.srt
    parent_uid: 67220f396760eeb42a09af32a393ec79
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-6-debugging/8wiIV-NfYwc.srt
    title: 3play caption file
    type: null
    uid: fc5190350cd4956e0e1208c83f7553db
  - id: 8wiIV-NfYwc.pdf
    parent_uid: 67220f396760eeb42a09af32a393ec79
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-6-debugging/8wiIV-NfYwc.pdf
    title: 3play pdf file
    type: null
    uid: a353230f0442b63710103c5add3d32e5
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4e7de09b1655505e9d7d15109b6b5b7b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 67220f396760eeb42a09af32a393ec79
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 80b724316c4e5fe4760ef8b3a05c9249
inline_embed_id: '83015089lecture6:debugging75084192'
order_index: 146
parent_uid: 09d33900a14c3db29266e662a30abca3
related_resources_text: ''
short_url: lecture-6-debugging
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-6-debugging
title: 'Lecture 6: Debugging'
transcript: >-
  <p><span m='7390'>PROFESSOR:</span> <span m='7455'>This</span> <span
  m='7520'>is</span> <span m='7780'>[? Doctor ?]</span> <span
  m='8035'>MATLAB,</span> <span m='8640'>Lecture</span> <span m='8820'>6,</span>
  <span m='9610'>debugging.</span> <span m='12060'>We</span> <span
  m='12150'>will</span> <span m='12270'>use</span> <span m='12450'>the</span>
  <span m='12540'>function</span> <span m='12910'>Fibbo2</span> <span
  m='13230'>to</span> <span m='13710'>demonstrate</span> <span
  m='15090'>some</span> <span m='15390'>basic</span> <span
  m='15810'>debugging.</span> <span m='17350'>The</span> <span
  m='17460'>first</span> <span m='17670'>thing</span> <span m='17820'>you</span>
  <span m='17920'>want</span> <span m='18020'>to</span> <span
  m='18180'>do</span> <span m='18930'>when</span> <span m='19080'>you</span>
  <span m='19200'>debug</span> <span m='19830'>is</span> <span
  m='19920'>set</span> <span m='20160'>a</span> <span
  m='20190'>breakpoint</span> <span m='21660'>at</span> <span
  m='21780'>an</span> <span m='21870'>interesting</span> <span
  m='22380'>line.</span> <span m='22910'>We'll</span> <span m='23040'>set</span>
  <span m='23310'>it</span> <span m='23380'>at</span> <span m='23490'>the</span>
  <span m='23610'>very</span> <span m='23790'>first</span> <span
  m='24450'>interesting</span> <span m='24900'>line</span> <span
  m='26400'>of</span> <span m='26550'>the</span> <span
  m='26640'>function.</span> </p><p><span m='28450'>Since</span> <span
  m='29040'>Fibbo2</span> <span m='29880'>is</span> <span m='30060'>not</span>
  <span m='30390'>in</span> <span m='30510'>the</span> <span
  m='30600'>current</span> <span m='30910'>folder</span> <span m='31190'>nor
  in</span> <span m='31520'>the</span> <span m='31650'>path,</span> <span
  m='32369'>MATLAB</span> <span m='32940'>pops</span> <span m='33210'>up</span>
  <span m='33390'>this</span> <span m='33540'>download</span> <span
  m='33930'>box</span> <span m='34530'>and</span> <span m='34680'>asks</span>
  <span m='34920'>us</span> <span m='35110'>whether</span> <span
  m='35340'>we</span> <span m='35460'>should</span> <span m='35850'>add</span>
  <span m='36030'>it</span> <span m='36150'>to</span> <span m='36270'>the</span>
  <span m='36390'>path</span> <span m='36930'>or</span> <span
  m='37050'>simply</span> <span m='37380'>change</span> <span
  m='37710'>folder.</span> <span m='38476'>We're going</span> <span
  m='38860'>to</span> <span m='39140'>change</span> <span
  m='39450'>folder.</span> <span m='41110'>So</span> <span m='41220'>now</span>
  <span m='41610'>that</span> <span m='41760'>we've</span> <span
  m='41910'>changed</span> <span m='42310'>folder,</span> <span
  m='44031'>MATLAB</span> <span m='44460'>was</span> <span
  m='44670'>willing</span> <span m='44880'>to</span> <span m='45000'>put</span>
  <span m='45120'>a</span> <span m='45180'>breakpoint.</span> <span
  m='45820'>And</span> <span m='45960'>now</span> <span m='46200'>if</span>
  <span m='46350'>we</span> <span m='46520'>run</span> <span
  m='47560'>Fibbo2</span> <span m='48570'>with</span> <span m='50380'>3,</span>
  <span m='51352'>we</span> <span m='51840'>will</span> <span
  m='52020'>get</span> <span m='52320'>stopped</span> <span
  m='52740'>right</span> <span m='53010'>here</span> <span m='53550'>with</span>
  <span m='53680'>the</span> <span m='53750'>green</span> <span
  m='54000'>arrow</span> <span m='54530'>on</span> <span m='54790'>the</span>
  <span m='54910'>breakpoint.</span> </p><p><span m='56530'>Notice</span> <span
  m='56760'>that</span> <span m='57150'>at</span> <span m='57270'>this</span>
  <span m='57540'>point,</span> <span m='58200'>n</span> <span
  m='58410'>is</span> <span m='58530'>defined</span> <span m='58950'>to</span>
  <span m='59070'>be</span> <span m='59190'>3</span> <span
  m='59580'>because</span> <span m='59880'>that</span> <span
  m='60000'>was</span> <span m='60150'>the</span> <span m='60240'>input</span>
  <span m='60570'>we</span> <span m='60690'>get</span> <span
  m='60870'>gave</span> <span m='61140'>Fibbo.</span> <span m='63410'>F</span>
  <span m='63710'>is</span> <span m='63970'>still</span> <span
  m='64140'>not</span> <span m='64440'>defined,</span> <span
  m='66950'>and</span> <span m='67100'>v</span> <span m='67820'>is</span> <span
  m='67970'>not</span> <span m='68120'>defined</span> <span
  m='68520'>either.</span> <span m='71040'>After</span> <span
  m='71340'>we</span> <span m='71460'>do</span> <span m='71640'>this</span>
  <span m='71850'>one</span> <span m='72090'>line,</span> <span
  m='73280'>F</span> <span m='73680'>will</span> <span m='73830'>be</span> <span
  m='73950'>defined.</span> <span m='74940'>How</span> <span m='75090'>do</span>
  <span m='75180'>we</span> <span m='75270'>do</span> <span
  m='75420'>this</span> <span m='75600'>one</span> <span m='75810'>line?</span>
  </p><p><span m='76820'>We</span> <span m='76920'>have</span> <span
  m='77160'>to</span> <span m='78240'>either</span> <span m='79170'>click</span>
  <span m='79410'>on</span> <span m='79590'>Step,</span> <span
  m='80220'>or</span> <span m='80370'>Step</span> <span m='80730'>In,</span>
  <span m='81465'>or</span> <span m='81870'>Step</span> <span
  m='82260'>Out,</span> <span m='82620'>or</span> <span
  m='82710'>Continue.</span> <span m='83160'>All</span> <span
  m='83280'>these</span> <span m='83460'>things</span> <span
  m='83640'>are</span> <span m='83700'>slightly</span> <span
  m='84060'>different.</span> <span m='84700'>I'm</span> <span
  m='84800'>going</span> <span m='84930'>to</span> <span m='85060'>use</span>
  <span m='85270'>Step,</span> <span m='85690'>in</span> <span
  m='85770'>this</span> <span m='85950'>case.</span> <span m='86680'>So</span>
  <span m='86850'>Step</span> <span m='87240'>means</span> <span
  m='87990'>to</span> <span m='88860'>do</span> <span m='89070'>this</span>
  <span m='89280'>line</span> <span m='89640'>and</span> <span
  m='89760'>step</span> <span m='90060'>to</span> <span m='90180'>the</span>
  <span m='90300'>next</span> <span m='90570'>line.</span> </p><p><span
  m='93820'>So</span> <span m='94030'>now</span> <span m='94250'>it did</span>
  <span m='94540'>that</span> <span m='94930'>and</span> <span
  m='95400'>F</span> <span m='96490'>has</span> <span m='96730'>been</span>
  <span m='96910'>initialized.</span> <span m='97630'>Let's</span> <span
  m='97840'>see--</span> <span m='99870'>yes,</span> <span m='100300'>F
  is</span> <span m='100530'>1</span> <span m='100730'>1.</span> <span
  m='102820'>Here is</span> <span m='103060'>the</span> <span
  m='103170'>helper.</span> <span m='106282'>The helper</span> <span
  m='109120'>is</span> <span m='109270'>the</span> <span
  m='109360'>function</span> <span m='109660'>that</span> <span
  m='109810'>actually</span> <span m='110260'>does</span> <span
  m='110620'>most</span> <span m='110850'>of</span> <span m='110920'>the</span>
  <span m='111270'>calculation.</span> <span m='113240'>If</span> <span
  m='113390'>we</span> <span m='113510'>step</span> <span m='113870'>over</span>
  <span m='114150'>this</span> <span m='114380'>one,</span> <span
  m='114560'>as</span> <span m='114710'>well,</span> <span
  m='117450'>we're</span> <span m='117570'>almost</span> <span
  m='117930'>done.</span> </p><p><span m='118770'>Now</span> <span
  m='119130'>F</span> <span m='119760'>is</span> <span m='119910'>already</span>
  <span m='121270'>the</span> <span m='121370'>full</span> <span
  m='122100'>3</span> <span m='122340'>vector,</span> <span
  m='123840'>and</span> <span m='124350'>we</span> <span m='124470'>will</span>
  <span m='124650'>accept</span> <span m='125310'>the</span> <span
  m='125400'>last</span> <span m='126340'>term,</span> <span
  m='126660'>Fn,</span> <span m='127530'>and</span> <span m='127710'>put</span>
  <span m='127920'>it</span> <span m='128080'>into</span> <span
  m='128389'>v.</span> <span m='130300'>Let's</span> <span
  m='130789'>Step,</span> <span m='133280'>and</span> <span
  m='133440'>now</span> <span m='133860'>we're</span> <span
  m='134010'>about</span> <span m='134400'>to end.</span> <span
  m='135060'>Before</span> <span m='135360'>we</span> <span
  m='135510'>end,</span> <span m='135750'>we</span> <span m='135840'>can</span>
  <span m='136020'>check</span> <span m='136900'>that</span> <span
  m='137020'>v</span> <span m='137280'>is</span> <span m='137460'>2.</span>
  <span m='137760'>So</span> <span m='137970'>2</span> <span
  m='138210'>is</span> <span m='138330'>the</span> <span m='138420'>value</span>
  <span m='138720'>that's</span> <span m='138900'>going</span> <span
  m='139050'>to</span> <span m='139170'>be</span> <span
  m='139290'>returned</span> <span m='140210'>in</span> <span
  m='140370'>the</span> <span m='140460'>next</span> <span
  m='140700'>step.</span> </p><p><span m='142320'>We</span> <span
  m='142410'>can</span> <span m='142590'>Step</span> <span
  m='142860'>again,</span> <span m='143880'>and</span> <span
  m='144610'>now</span> <span m='144990'>this</span> <span
  m='145230'>arrow</span> <span m='145620'>out</span> <span
  m='145890'>means</span> <span m='146190'>that</span> <span
  m='146370'>we're</span> <span m='146580'>about</span> <span
  m='146850'>to</span> <span m='147030'>leave</span> <span m='147300'>the</span>
  <span m='147390'>function</span> <span m='148060'>when</span> <span
  m='148590'>doing</span> <span m='148920'>nothing</span> <span
  m='149220'>else.</span> <span m='149750'>And</span> <span m='149820'>if</span>
  <span m='149940'>we</span> <span m='150000'>take</span> <span
  m='150240'>one</span> <span m='150480'>more</span> <span
  m='150630'>Step,</span> <span m='151020'>we're out.</span> <span
  m='152160'>The</span> <span m='152250'>answer is</span> <span
  m='152700'>2,</span> <span m='153180'>and</span> <span m='153300'>we're</span>
  <span m='153420'>not</span> <span m='153660'>in the</span> <span
  m='153890'>debugging</span> <span m='154090'>mode</span> <span
  m='154573'>anymore.</span> </p><p><span m='158440'>We</span> <span
  m='158560'>never</span> <span m='158800'>seem</span> <span m='158980'>to
  have</span> <span m='159290'>entered</span> <span m='160250'>helper.</span>
  <span m='161380'>And</span> <span m='161470'>the</span> <span
  m='161560'>reason</span> <span m='161860'>for</span> <span
  m='162010'>that</span> <span m='162400'>was</span> <span
  m='162610'>that</span> <span m='162910'>we</span> <span
  m='163030'>stepped</span> <span m='163660'>over</span> <span
  m='164440'>this</span> <span m='164650'>line</span> <span
  m='165010'>rather</span> <span m='165290'>than</span> <span
  m='165460'>stepping</span> <span m='166060'>into</span> <span
  m='166420'>it.</span> <span m='167410'>Let's</span> <span m='167590'>do</span>
  <span m='167710'>that</span> <span m='167890'>again.</span> <span
  m='169350'>I'll move</span> <span m='169570'>the</span> <span
  m='169690'>breakpoint</span> <span m='171540'>and</span> <span
  m='171970'>put</span> <span m='172120'>it</span> <span m='172250'>here.</span>
  <span m='172855'>And</span> <span m='173210'>now I'll run</span> <span
  m='173640'>it.</span> </p><p><span m='173920'>I can't</span> <span
  m='174220'>run</span> <span m='174430'>the</span> <span
  m='174520'>function</span> <span m='175560'>by</span> <span
  m='175690'>pressing</span> <span m='176050'>this</span> <span
  m='176230'>green</span> <span m='176500'>arrow</span> <span
  m='176860'>because</span> <span m='177160'>I'm</span> <span
  m='177280'>not</span> <span m='177460'>giving</span> <span
  m='177830'>it</span> <span m='177980'>any</span> <span m='178480'>input</span>
  <span m='179200'>when</span> <span m='179350'>I</span> <span
  m='179420'>just</span> <span m='179620'>run</span> <span m='179950'>it.</span>
  <span m='180830'>If</span> <span m='180990'>I</span> <span
  m='181080'>run</span> <span m='181300'>it,</span> <span m='181410'>I'll</span>
  <span m='181480'>get</span> <span m='181690'>an</span> <span
  m='181810'>error.</span> <span m='184360'>Now</span> <span m='184600'>n</span>
  <span m='184780'>is</span> <span m='184930'>not</span> <span
  m='185080'>defined.</span> <span m='188050'>And</span> <span
  m='188220'>if</span> <span m='188400'>I</span> <span m='188490'>step</span>
  <span m='188850'>over</span> <span m='189240'>right</span> <span
  m='189510'>now,</span> <span m='191150'>here's</span> <span
  m='191360'>my</span> <span m='191510'>error--</span> <span
  m='191970'>not</span> <span m='192180'>enough</span> <span
  m='192420'>input</span> <span m='192700'>arguments</span> <span
  m='193160'>because</span> <span m='193570'>n</span> <span
  m='193630'>was</span> <span m='193740'>not</span> <span
  m='193890'>defined.</span> </p><p><span m='195210'>OK,</span> <span
  m='195390'>so</span> <span m='195600'>let's</span> <span m='195780'>not</span>
  <span m='195990'>run it</span> <span m='196180'>this way.</span> <span
  m='196740'>Let's</span> <span m='196950'>run</span> <span m='197160'>it</span>
  <span m='197610'>this</span> <span m='197790'>way,</span> <span
  m='198030'>but</span> <span m='198210'>this</span> <span
  m='198390'>time</span> <span m='198630'>I'll</span> <span
  m='198720'>give</span> <span m='198960'>it</span> <span m='199110'>5</span>
  <span m='199530'>as an</span> <span m='199957'>input.</span> <span
  m='201240'>OK,</span> <span m='201510'>so</span> <span m='201720'>I</span>
  <span m='201990'>put</span> <span m='202170'>my</span> <span
  m='202290'>breakpoint</span> <span m='202740'>here.</span> <span
  m='203240'>I'm stopped</span> <span m='203640'>right</span> <span
  m='203820'>here.</span> <span m='204840'>And</span> <span
  m='204960'>now</span> <span m='205260'>I'm going</span> <span
  m='205420'>to</span> <span m='205650'>not</span> <span m='205920'>step</span>
  <span m='206970'>over--</span> <span m='207600'>Step</span> <span
  m='207980'>means</span> <span m='208070'>step</span> <span
  m='208410'>over.</span> <span m='209240'>I'll</span> <span
  m='209515'>Step</span> <span m='209790'>Into.</span> <span
  m='211894'>So</span> <span m='212330'>Step</span> <span m='212800'>Into</span>
  <span m='213110'>means</span> <span m='213470'>to</span> <span
  m='213590'>step</span> <span m='213920'>into</span> <span
  m='214130'>this</span> <span m='214310'>function</span> <span
  m='214670'>call.</span> </p><p><span m='217420'>So</span> <span
  m='217460'>now</span> <span m='217640'>we're</span> <span
  m='217940'>inside</span> <span m='218520'>the</span> <span
  m='218600'>function</span> <span m='218960'>helper.</span> <span
  m='219930'>Notice</span> <span m='220250'>that</span> <span
  m='220670'>this</span> <span m='220910'>green</span> <span
  m='221150'>arrow</span> <span m='221510'>tells</span> <span
  m='221750'>us</span> <span m='221900'>where</span> <span m='222110'>we</span>
  <span m='222230'>came</span> <span m='222530'>from--</span> <span
  m='223330'>sorry,</span> <span m='223560'>this</span> <span
  m='223730'>non-green</span> <span m='224045'>arrow</span> <span
  m='224360'>tells us</span> <span m='224690'>where</span> <span
  m='224840'>we</span> <span m='224930'>came</span> <span
  m='225140'>from.</span> <span m='225310'>And</span> <span
  m='225390'>this</span> <span m='225480'>green</span> <span
  m='225830'>arrow</span> <span m='226040'>tells</span> <span
  m='226580'>us</span> <span m='226820'>where</span> <span m='227000'>we</span>
  <span m='227390'>currently</span> <span m='227900'>are.</span> </p><p><span
  m='229410'>We</span> <span m='229520'>can</span> <span m='229700'>see</span>
  <span m='229940'>all</span> <span m='230090'>of</span> <span
  m='230180'>these</span> <span m='230480'>in</span> <span m='230570'>the</span>
  <span m='230660'>stack.</span> <span m='231840'>Here's</span> <span
  m='231980'>the</span> <span m='232100'>base.</span> <span
  m='232940'>This</span> <span m='233120'>is</span> <span
  m='233240'>where</span> <span m='233690'>we</span> <span
  m='233810'>called</span> <span m='234180'>Fibbo2</span> <span
  m='236120'>here.</span> <span m='238430'>Here's</span> <span
  m='239050'>Fibbo2--</span> <span m='240030'>that's</span> <span
  m='240270'>what</span> <span m='240450'>this</span> <span
  m='241020'>non-green</span> <span m='241740'>arrow</span> <span
  m='242070'>is.</span> <span m='242980'>And</span> <span
  m='243030'>here's</span> <span m='243450'>Fibbo2/helper,</span> <span
  m='244720'>that's</span> <span m='245170'>this</span> <span
  m='245490'>location</span> <span m='245790'>right</span> <span
  m='246030'>here.</span> </p><p><span m='246990'>We</span> <span
  m='247100'>can</span> <span m='247290'>switch</span> <span
  m='247830'>to</span> <span m='248010'>whatever</span> <span
  m='248340'>we</span> <span m='248490'>want.</span> <span m='248860'>So</span>
  <span m='248880'>we</span> <span m='249000'>can</span> <span
  m='249120'>switch</span> <span m='249390'>to the</span> <span
  m='249570'>base.</span> <span m='250620'>Now</span> <span
  m='250770'>we're</span> <span m='250920'>not</span> <span m='251190'>here
  and</span> <span m='251400'>not</span> <span m='251550'>here.</span> <span
  m='251760'>We're</span> <span m='251880'>actually</span> <span
  m='252590'>on</span> <span m='252720'>the</span> <span m='252810'>base.</span>
  <span m='253970'>And</span> <span m='254070'>we</span> <span
  m='254140'>can</span> <span m='254290'>see</span> <span m='254510'>who</span>
  <span m='254640'>the</span> <span m='254730'>variables</span> <span
  m='255170'>are</span> <span m='255240'>here.</span> <span
  m='255450'>There</span> <span m='255570'>are not</span> <span
  m='255600'>that</span> <span m='255930'>many</span> <span
  m='256140'>variables.</span> <span m='256980'>Specifically,</span> <span
  m='257640'>n</span> <span m='257820'>is</span> <span m='257940'>not</span>
  <span m='258089'>a variable,</span> <span m='258570'>and</span> <span
  m='258709'>v is</span> <span m='258930'>not</span> <span m='259120'>a
  variable,</span> <span m='259940'>and</span> <span m='260070'>F</span> <span
  m='260370'>is</span> <span m='260459'>not</span> <span m='260610'>a
  variable</span> <span m='261110'>when we're</span> <span m='261360'>out
  here.</span> <span m='262920'>Let's</span> <span m='263070'>go</span> <span
  m='263220'>back</span> <span m='263590'>to</span> <span
  m='264130'>Fibbo2/helper.</span> </p><p><span m='266370'>So</span> <span
  m='267060'>this</span> <span m='267240'>F,</span> <span m='267480'>of</span>
  <span m='267600'>course,</span> <span m='267870'>is</span> <span
  m='268050'>not</span> <span m='268350'>going</span> <span m='268620'>to</span>
  <span m='268770'>be</span> <span m='269010'>true.</span> <span
  m='269930'>Step</span> <span m='272090'>Over</span> <span
  m='272980'>this</span> <span m='276250'>and now</span> <span m='276460'>it's
  going to</span> <span m='276930'>kill helper</span> <span
  m='277530'>again.</span> <span m='278620'>Let's</span> <span
  m='278790'>go</span> <span m='279090'>once</span> <span m='279570'>in,</span>
  <span m='279810'>just</span> <span m='280020'>to</span> <span
  m='280110'>see</span> <span m='280320'>how</span> <span m='280470'>this</span>
  <span m='280680'>looks.</span> <span m='281010'>So if</span> <span
  m='281190'>we</span> <span m='281280'>go</span> <span m='281760'>in,</span>
  <span m='283560'>now</span> <span m='284310'>the</span> <span
  m='284400'>stack</span> <span m='284820'>is</span> <span
  m='284940'>becoming</span> <span m='285330'>more</span> <span
  m='285510'>and</span> <span m='285610'>more</span> <span
  m='285720'>complicated.</span> </p><p><span m='287010'>There</span> <span
  m='287480'>are</span> <span m='288090'>two</span> <span
  m='288330'>entries</span> <span m='288840'>of</span> <span
  m='289220'>Fibbo2/helper</span> <span m='290370'>because</span> <span
  m='290790'>helper</span> <span m='291240'>called</span> <span
  m='291600'>helper</span> <span m='292140'>again.</span> <span
  m='294770'>n</span> <span m='294880'>at</span> <span m='294970'>this</span>
  <span m='295210'>point</span> <span m='296530'>is</span> <span
  m='296740'>4.</span> <span m='297940'>So</span> <span m='298120'>in</span>
  <span m='298180'>fact,</span> <span m='298540'>it's</span> <span
  m='298690'>probably</span> <span m='298960'>going</span> <span
  m='299080'>to</span> <span m='299230'>call</span> <span m='299530'>it</span>
  <span m='300370'>one</span> <span m='300670'>more</span> <span
  m='300910'>time</span> <span m='301360'>because</span> <span
  m='301630'>the</span> <span m='301750'>number</span> <span
  m='301990'>of</span> <span m='302080'>elements</span> <span
  m='302470'>in</span> <span m='302590'>F</span> <span m='302770'>is</span>
  <span m='302860'>still</span> <span m='303220'>2.</span> <span
  m='304930'>We</span> <span m='305020'>have</span> <span m='305110'>to</span>
  <span m='305260'>wait</span> <span m='305530'>until</span> <span
  m='306250'>we</span> <span m='306400'>reach</span> <span
  m='306650'>down</span> <span m='306850'>to</span> <span m='307000'>2.</span>
  </p><p><span m='307450'>So</span> <span m='308140'>even</span> <span
  m='308410'>if</span> <span m='308560'>we</span> <span m='310390'>Step</span>
  <span m='310750'>In</span> <span m='310870'>again</span> <span
  m='313360'>here,</span> <span m='314400'>now</span> <span
  m='314760'>we're</span> <span m='314950'>in</span> <span
  m='315100'>helper</span> <span m='315490'>three</span> <span
  m='315760'>times.</span> <span m='316390'>Take</span> <span
  m='316630'>a</span> <span m='316660'>look--</span> <span
  m='316960'>where's</span> <span m='317401'>my</span> <span
  m='317842'>stack?</span> <span m='320050'>At</span> <span
  m='320110'>this</span> <span m='320320'>point,</span> <span
  m='320730'>n</span> <span m='320950'>is</span> <span m='321670'>still</span>
  <span m='322000'>3.</span> <span m='322930'>It</span> <span
  m='323050'>will</span> <span m='323200'>happen</span> <span
  m='323500'>once</span> <span m='323920'>more.</span> </p><p><span
  m='328465'>And</span> <span m='328930'>now</span> <span m='329090'>it's
  going</span> <span m='329210'>to</span> <span m='329450'>all</span> <span
  m='329600'>start</span> <span m='329880'>collapsing</span> <span
  m='330350'>back.</span> <span m='332240'>So</span> <span m='332450'>now</span>
  <span m='332850'>I've</span> <span m='333020'>called</span> <span
  m='335720'>n</span> <span m='336010'>with</span> <span m='336260'>3.</span>
  <span m='336780'>Now</span> <span m='336960'>I'm</span> <span
  m='337180'>starting</span> <span m='337570'>to</span> <span
  m='337720'>come</span> <span m='337960'>back</span> <span
  m='338290'>out</span> <span m='338500'>of</span> <span m='338590'>it.</span>
  <span m='339310'>So</span> <span m='340210'>F</span> <span
  m='340480'>is</span> <span m='341200'>going</span> <span m='341410'>to</span>
  <span m='341530'>start</span> <span m='341830'>growing.</span> </p><p><span
  m='342130'>So</span> <span m='342370'>helper</span> <span
  m='342730'>has</span> <span m='342850'>been</span> <span
  m='343030'>called,</span> <span m='344140'>n</span> <span m='344400'>is</span>
  <span m='344640'>3.</span> <span m='344975'>So now</span> <span m='345310'>I'm
  going</span> <span m='345520'>to</span> <span m='345670'>put</span> <span
  m='346030'>F3</span> <span m='346540'>equals</span> <span m='347300'>F2</span>
  <span m='348040'>plus</span> <span m='348700'>F1.</span> <span
  m='352186'>Now</span> <span m='352640'>this</span> <span m='352890'>is</span>
  <span m='353060'>a</span> <span m='353100'>little</span> <span
  m='353310'>bit</span> <span m='353460'>boring.</span> <span
  m='353860'>So</span> <span m='353880'>I</span> <span m='354000'>can</span>
  <span m='354180'>use</span> <span m='354300'>Step</span> <span
  m='355020'>Out</span> <span m='355395'>to</span> <span m='355770'>step</span>
  <span m='356160'>out</span> <span m='356400'>of</span> <span
  m='356490'>a</span> <span m='356550'>function call.</span> <span
  m='357310'>So</span> <span m='357390'>this</span> <span
  m='358020'>basically</span> <span m='358380'>runs</span> <span
  m='358650'>until</span> <span m='359520'>the</span> <span
  m='359670'>current</span> <span m='361790'>element</span> <span
  m='362060'>of</span> <span m='362330'>stack</span> <span
  m='363350'>goes</span> <span m='363620'>out.</span> <span m='363870'>It
  will</span> <span m='363970'>return.</span> </p><p><span m='364520'>So</span>
  <span m='365060'>if</span> <span m='365210'>I</span> <span
  m='366020'>Step</span> <span m='366590'>Out</span> <span
  m='366890'>once,</span> <span m='367310'>I'll</span> <span
  m='367460'>have</span> <span m='367850'>two</span> <span
  m='368120'>functions--</span> <span m='369030'>well,</span> <span
  m='369260'>four</span> <span m='369530'>functions</span> <span
  m='369950'>left--</span> <span m='370400'>twice</span> <span
  m='370970'>helper</span> <span m='371600'>and</span> <span
  m='371750'>then</span> <span m='371970'>Fibbo2</span> <span
  m='372190'>and</span> <span m='372490'>base.</span> <span m='373840'>So</span>
  <span m='374150'>Step</span> <span m='374810'>Out--</span> <span
  m='376300'>let's look</span> <span m='376700'>at the</span> <span
  m='376950'>stack</span> <span m='377260'>again.</span> <span
  m='378450'>Let's</span> <span m='378890'>Step</span> <span
  m='379190'>Out</span> <span m='379430'>again.</span> <span m='381960'>Let's
  look</span> <span m='382270'>at the</span> <span m='382490'>stack</span> <span
  m='382930'>again--</span> <span m='383660'>good.</span> </p><p><span
  m='384590'>At</span> <span m='384770'>this</span> <span
  m='384980'>point,</span> <span m='385320'>F</span> <span m='385550'>is</span>
  <span m='385700'>growing</span> <span m='388200'>and</span> <span
  m='388350'>n</span> <span m='388800'>is</span> <span
  m='388960'>increasing.</span> <span m='389970'>And</span> <span
  m='390240'>each</span> <span m='390480'>time,</span> <span
  m='390840'>I'm</span> <span m='390980'>filling</span> <span
  m='391350'>up</span> <span m='391640'>the</span> <span
  m='391820'>relevant</span> <span m='392220'>F.</span> <span
  m='393600'>So</span> <span m='393770'>now I'm</span> <span
  m='393920'>going</span> <span m='394070'>to</span> <span
  m='394200'>fill</span> <span m='394440'>up</span> <span m='394620'>F5--</span>
  <span m='396700'>Step,</span> <span m='400580'>return.</span> <span
  m='401550'>Now</span> <span m='402150'>I'm</span> <span m='402410'>done</span>
  <span m='402650'>with</span> <span m='402770'>this</span> <span
  m='402950'>function.</span> <span m='406680'>And I'm</span> <span
  m='407160'>exiting</span> <span m='407640'>the</span> <span
  m='407730'>function,</span> <span m='409990'>so</span> <span m='410170'>now
  I'm</span> <span m='410430'>done</span> <span m='410660'>here.</span>
  </p><p><span m='412440'>Now</span> <span m='413640'>all</span> <span
  m='413850'>the</span> <span m='413940'>data</span> <span m='414240'>is</span>
  <span m='414360'>done.</span> <span m='416210'>I</span> <span
  m='416300'>can</span> <span m='416560'>Step.</span> <span
  m='417950'>And</span> <span m='418170'>if</span> <span
  m='418350'>you're</span> <span m='418920'>bored</span> <span
  m='419190'>with</span> <span m='419310'>this,</span> <span
  m='419540'>you</span> <span m='419730'>just</span> <span
  m='419910'>want</span> <span m='420090'>to</span> <span
  m='420390'>finish</span> <span m='420840'>the</span> <span
  m='420930'>function,</span> <span m='421350'>you</span> <span
  m='421470'>can</span> <span m='421620'>just call</span> <span
  m='421980'>Continue.</span> <span m='423300'>And</span> <span
  m='423390'>it</span> <span m='423480'>will</span> <span m='423660'>run</span>
  <span m='423930'>through</span> <span m='424140'>the</span> <span
  m='424230'>rest</span> <span m='424410'>of</span> <span m='424470'>the</span>
  <span m='424580'>lines</span> <span m='425490'>unless</span> <span
  m='425790'>it</span> <span m='425880'>hits</span> <span m='426060'>a</span>
  <span m='426150'>breakpoint.</span> </p><p><span m='432670'>Now</span> <span
  m='433140'>let's</span> <span m='433350'>do</span> <span
  m='433470'>this</span> <span m='433650'>again.</span> <span
  m='433980'>While</span> <span m='434340'>I'm</span> <span
  m='434520'>here--</span> <span m='435712'>now I'm</span> <span
  m='436070'>here</span> <span m='436320'>again.</span> <span
  m='437190'>I'm</span> <span m='437310'>in</span> <span m='437400'>the</span>
  <span m='437490'>command</span> <span m='437850'>line.</span> <span
  m='438240'>I'm inside</span> <span m='438690'>this</span> <span
  m='438840'>function.</span> <span m='439290'>I</span> <span
  m='439410'>can</span> <span m='439590'>evaluate</span> <span
  m='440040'>all</span> <span m='440190'>kinds</span> <span m='440400'>of</span>
  <span m='440460'>stuff.</span> <span m='440850'>I</span> <span
  m='440910'>can</span> <span m='441030'>look</span> <span m='441210'>at</span>
  <span m='441270'>F.</span> <span m='441810'>I</span> <span
  m='441870'>can</span> <span m='442020'>look</span> <span m='442140'>at</span>
  <span m='442530'>F1</span> <span m='442890'>plus</span> <span
  m='443760'>F2.</span> <span m='445170'>I</span> <span m='445230'>can</span>
  <span m='445650'>evaluate</span> <span m='446160'>all</span> <span
  m='446310'>kinds</span> <span m='446580'>of</span> <span
  m='446670'>things</span> <span m='446970'>and</span> <span
  m='447375'>even</span> <span m='447780'>change</span> <span
  m='448200'>things.</span> <span m='448470'>I</span> <span
  m='448560'>can</span> <span m='448770'>do</span> <span m='449580'>silly</span>
  <span m='449940'>stuff</span> <span m='450270'>like</span> <span
  m='450740'>F1</span> <span m='451020'>equals</span> <span m='451470'>3.</span>
  <span m='452360'>And</span> <span m='452490'>now</span> <span
  m='452830'>F</span> <span m='453090'>will</span> <span m='453240'>be</span>
  <span m='453630'>starting</span> <span m='454080'>with</span> <span
  m='454230'>3</span> <span m='454450'>and</span> <span m='454580'>1.</span>
  </p><p><span m='455130'>In</span> <span m='455400'>the</span> <span
  m='455730'>Fibonacci</span> <span m='455890'>sequence,</span> <span
  m='456100'>the</span> <span m='456210'>results</span> <span
  m='456630'>will</span> <span m='456780'>be</span> <span m='456930'>a</span>
  <span m='456960'>very</span> <span m='457320'>odd</span> <span
  m='457560'>one,</span> <span m='457800'>indeed.</span> <span
  m='459032'>Let's</span> <span m='459410'>see how</span> <span m='459710'>this
  works.</span> <span m='459860'>I'm going to</span> <span m='460135'>put
  a</span> <span m='460410'>breakpoint</span> <span m='460980'>here,</span>
  <span m='463780'>press continue--</span> <span m='472420'>oh,</span> <span
  m='472910'>because I</span> <span m='473400'>ran it.</span> <span
  m='473900'>Let</span> <span m='474020'>me</span> <span m='474560'>call</span>
  <span m='476640'>Fibbo5,</span> <span m='478340'>now</span> <span
  m='478730'>change</span> <span m='479220'>this</span> <span
  m='479740'>to</span> <span m='479930'>3,</span> <span m='480530'>and
  now</span> <span m='480845'>press</span> <span m='481160'>Continue.</span>
  </p><p><span m='482990'>OK,</span> <span m='483590'>so</span> <span
  m='483800'>now</span> <span m='484190'>what</span> <span m='484340'>is</span>
  <span m='484490'>F?</span> <span m='485780'>F</span> <span
  m='486200'>is</span> <span m='486380'>a</span> <span
  m='486620'>Fibonacci</span> <span m='487280'>sequence</span> <span
  m='487610'>but it's</span> <span m='487810'>not the</span> <span
  m='487970'>Fibonacci</span> <span m='488600'>sequence</span> <span
  m='489430'>because</span> <span m='489670'>it</span> <span
  m='489730'>starts</span> <span m='490010'>with</span> <span
  m='490200'>3</span> <span m='490400'>1.</span> <span m='491120'>And</span>
  <span m='491210'>then</span> <span m='491400'>there</span> <span
  m='491540'>a</span> <span m='491960'>4,</span> <span m='492130'>which
  is</span> <span m='492230'>the sum</span> <span m='492490'>of</span> <span
  m='492620'>3</span> <span m='492860'>and</span> <span m='493050'>1;</span>
  <span m='493350'>and then</span> <span m='493660'>a 5,</span> <span
  m='494090'>which is</span> <span m='494430'>4 and</span> <span
  m='494876'>1;</span> <span m='495322'>and then</span> <span m='495768'>a
  9,</span> <span m='496214'>which is</span> <span m='496660'>4 and</span> <span
  m='497110'>5,</span> <span m='497550'>et cetera.</span> <span
  m='499310'>I</span> <span m='499470'>changed</span> <span m='500120'>my</span>
  <span m='500280'>Fibonacci</span> <span m='500510'>sequence</span> <span
  m='500900'>while</span> <span m='501200'>it</span> <span m='501260'>was</span>
  <span m='501480'>running.</span> <span m='503600'>And</span> <span
  m='503720'>then</span> <span m='503870'>that</span> <span
  m='504020'>changed,</span> <span m='504350'>of</span> <span
  m='504470'>course,</span> <span m='504800'>the</span> <span
  m='504890'>rest</span> <span m='505160'>of</span> <span m='505250'>the</span>
  <span m='505370'>operation.</span> </p><p><span m='508850'>There's</span>
  <span m='508970'>another type of</span> <span m='509410'>breakpoint</span>
  <span m='509930'>that</span> <span m='510050'>you</span> <span
  m='510170'>can</span> <span m='510320'>do</span> <span
  m='510440'>that's</span> <span m='510650'>called</span> <span
  m='510840'>a</span> <span m='510920'>conditional</span> <span
  m='511185'>breakpoint.</span> <span m='511960'>So</span> <span
  m='512120'>let's</span> <span m='512390'>do</span> <span
  m='512539'>this</span> <span m='512720'>one.</span> <span
  m='513020'>You</span> <span m='513200'>notice</span> <span
  m='513440'>that</span> <span m='513559'>we</span> <span m='513710'>had</span>
  <span m='513890'>to</span> <span m='514039'>wait</span> <span
  m='514909'>until</span> <span m='515179'>we</span> <span
  m='515330'>knew</span> <span m='515510'>that</span> <span m='515669'>n</span>
  <span m='515900'>was</span> <span m='516140'>2.</span> <span
  m='516440'>We</span> <span m='516559'>had</span> <span m='516740'>to</span>
  <span m='518590'>go</span> <span m='518820'>Step</span> <span
  m='519179'>In,</span> <span m='519390'>Step</span> <span m='519690'>In</span>
  <span m='519870'>again and</span> <span m='520220'>again.</span> <span
  m='521250'>This</span> <span m='521400'>can</span> <span m='521549'>get</span>
  <span m='521730'>boring.</span> </p><p><span m='522150'>So</span> <span
  m='522360'>what</span> <span m='522539'>we</span> <span m='522720'>can</span>
  <span m='523020'>do,</span> <span m='524059'>if</span> <span
  m='524190'>you</span> <span m='524430'>right</span> <span
  m='524700'>click,</span> <span m='525280'>you</span> <span
  m='525300'>can</span> <span m='525480'>set</span> <span m='526350'>a</span>
  <span m='526440'>conditional</span> <span m='527160'>breakpoint.</span> <span
  m='528480'>So</span> <span m='528660'>I</span> <span m='528810'>want</span>
  <span m='528990'>to</span> <span m='529080'>stop</span> <span
  m='529440'>it</span> <span m='529590'>on</span> <span m='529760'>this</span>
  <span m='530070'>line</span> <span m='530690'>only</span> <span
  m='531230'>if,</span> <span m='532980'>let's</span> <span
  m='533160'>say</span> <span m='533460'>n</span> <span m='533670'>equals</span>
  <span m='534120'>3.</span> <span m='537790'>So</span> <span
  m='538030'>now</span> <span m='539460'>let</span> <span m='539875'>me</span>
  <span m='540290'>exit</span> <span m='540640'>debug</span> <span
  m='541000'>mode.</span> <span m='542260'>I'm going</span> <span
  m='542680'>to</span> <span m='542920'>call</span> <span
  m='543190'>Fibbo</span> <span m='543475'>with</span> <span
  m='544400'>15,</span> <span m='545120'>for</span> <span
  m='545618'>example.</span> </p><p><span m='550100'>First it</span> <span
  m='550480'>stops</span> <span m='550880'>here.</span> <span
  m='551660'>I'll</span> <span m='551780'>tell</span> <span m='552020'>it</span>
  <span m='552110'>to</span> <span m='552260'>Continue.</span> <span
  m='553980'>And now</span> <span m='554110'>it stops</span> <span
  m='554800'>here.</span> <span m='555050'>Now</span> <span
  m='555315'>notice</span> <span m='555580'>this</span> <span m='555770'>is
  when</span> <span m='555860'>n</span> <span m='556130'>equals</span> <span
  m='556480'>3.</span> <span m='557830'>We</span> <span
  m='557960'>started</span> <span m='558380'>with n</span> <span
  m='558740'>equals</span> <span m='559280'>15.</span> <span
  m='560250'>So</span> <span m='560360'>that</span> <span
  m='560510'>means</span> <span m='560720'>that</span> <span
  m='560840'>our</span> <span m='561170'>stack</span> <span m='561540'>should
  be</span> <span m='561650'>huge.</span> <span m='562250'>Indeed,</span> <span
  m='562650'>our</span> <span m='562750'>stack</span> <span m='563180'>is</span>
  <span m='563360'>huge.</span> </p><p><span m='565950'>We</span> <span
  m='565970'>have</span> <span m='566650'>Fibbo2</span> <span
  m='566900'>calling</span> <span m='567200'>the</span> <span
  m='567290'>helper,</span> <span m='567620'>which</span> <span
  m='567790'>calls</span> <span m='568030'>the</span> <span m='568180'>helper,
  and</span> <span m='568650'>the helper, and the</span> <span
  m='568980'>helper--</span> <span m='569270'>all</span> <span
  m='569450'>these</span> <span m='569660'>call the</span> <span
  m='569900'>helper</span> <span m='570290'>again, and again,</span> <span
  m='570590'>and</span> <span m='570710'>again</span> <span
  m='570950'>until</span> <span m='571250'>n</span> <span m='571430'>goes</span>
  <span m='571670'>down</span> <span m='571940'>to</span> <span
  m='572080'>3.</span> <span m='573360'>Now</span> <span m='573590'>it's</span>
  <span m='573680'>going</span> <span m='573800'>to</span> <span
  m='573860'>start</span> <span m='574040'>popping</span> <span
  m='574400'>back</span> <span m='574610'>up</span> <span
  m='574730'>again.</span> <span m='575420'>All</span> <span
  m='575570'>this</span> <span m='575720'>time</span> <span m='575970'>F</span>
  <span m='577070'>hasn't</span> <span m='577370'>been</span> <span
  m='577490'>changed</span> <span m='578450'>because</span> <span
  m='578780'>this</span> <span m='578990'>line</span> <span
  m='581160'>has</span> <span m='581310'>never</span> <span
  m='581580'>been</span> <span m='581760'>reached.</span> <span
  m='582840'>But</span> <span m='582960'>now</span> <span m='583230'>it</span>
  <span m='583410'>has</span> <span m='583620'>reached</span> <span
  m='584980'>for</span> <span m='585180'>the</span> <span
  m='585300'>first</span> <span m='585570'>time.</span> </p><p><span
  m='586190'>And</span> <span m='586500'>if</span> <span m='586560'>I</span>
  <span m='586650'>click</span> <span m='586830'>Continue,</span> <span
  m='588070'>it</span> <span m='588180'>won't</span> <span
  m='588450'>stop</span> <span m='588870'>at</span> <span m='588930'>this</span>
  <span m='589110'>breakpoint</span> <span m='589610'>again.</span> <span
  m='589950'>It</span> <span m='590070'>only</span> <span
  m='590280'>stops</span> <span m='590580'>there</span> <span
  m='590730'>once</span> <span m='591090'>when</span> <span m='591290'>n
  is</span> <span m='591520'>3.</span> <span m='594220'>And</span> <span
  m='594340'>now</span> <span m='594510'>it</span> <span m='594710'>ends.</span>
  <span m='595100'>Now</span> <span m='595400'>it</span> <span
  m='595600'>knows</span> <span m='595950'>we're ready,</span> <span
  m='596420'>that</span> <span m='596600'>v</span> <span m='596990'>is</span>
  <span m='597740'>whatever</span> <span m='598070'>it</span> <span
  m='598160'>is--</span> <span m='598510'>610.</span> </p><p><span
  m='600170'>And it's</span> <span m='600400'>done.</span> <span m='601100'>One
  more</span> <span m='601300'>Step--</span> <span m='605450'>it's</span> <span
  m='605720'>almost</span> <span m='605950'>done.</span> <span
  m='606340'>One</span> <span m='606730'>more</span> <span
  m='607090'>Step,</span> <span m='607720'>Continue--</span> <span
  m='608215'>and it's</span> <span m='608470'>done.</span> <span
  m='608970'>610</span> <span m='609450'>is</span> <span m='609660'>the</span>
  <span m='609850'>answer.</span> <span m='611860'>And</span> <span
  m='611950'>this</span> <span m='612190'>is</span> <span m='612370'>how</span>
  <span m='612520'>you</span> <span m='612790'>can</span> <span
  m='613000'>use</span> <span m='613210'>the</span> <span
  m='613440'>debugger.</span> </p>
uid: 67220f396760eeb42a09af32a393ec79
type: course
layout: video
---
