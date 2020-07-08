---
about_this_resource_text: >-
  <p><strong>Descriptions: </strong>The classic Lotka-Volterra model of
  predator-prey competition, which describes interactions between foxes and
  rabbits, or big fish and little fish, is the foundation of mathematical
  ecology. It has also been applied to many other fields, including economics.
  The model is a nonlinear system of two equations, where one species grows
  exponentially and the other decays exponentially in the absence of the other.
  The one nonzero critical point is stable. All solutions are periodic. The
  program &quot;predprey&quot; provides an app for studying the model.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-MP4
    media_location: zrFJKy5l_PY
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Video-YouTube-MP4
    type: Video
    uid: b10df40d3a3926fe4ff189e45cdbc0a1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/zrFJKy5l_PY/default.jpg'
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8f335fcc3dddd125934bc44dd4de201e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: zrFJKy5l_PY
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 08bba8effb2c70a67e4448369f21a8eb
  - id: zrFJKy5l_PY.srt
    parent_uid: 30db591ce77bedf825186928b9b320f0
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/predator-prey-equations/zrFJKy5l_PY.srt
    title: 3play caption file
    type: null
    uid: a0ff263d59fe66647c2a725264f52587
  - id: zrFJKy5l_PY.pdf
    parent_uid: 30db591ce77bedf825186928b9b320f0
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/predator-prey-equations/zrFJKy5l_PY.pdf
    title: 3play pdf file
    type: null
    uid: 45894e43bf911cb78a425116802740c0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9ef2a695db856a9a9619f4947d771955
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0971b3daa194514f74a0f912b6e29fc9
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Video-iTunes U-MP4
    type: Video
    uid: 436c31d87d1be786930c6ff0533955e0
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_11_300k.mp4
    parent_uid: 30db591ce77bedf825186928b9b320f0
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5550161055fbb73345db3b5497537568
inline_embed_id: 25365833predator-preyequations50238855
order_index: 674
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: predator-prey-equations
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/predator-prey-equations
title: Predator-Prey Equations
transcript: >-
  <p><span m='4550'>CLIVE MOLER: The</span> <span m='5010'>Lotka-Volterra</span>
  <span m='5820'>Altera</span> <span m='6450'>predator</span> <span
  m='6900'>prey</span> <span m='7270'>equations</span> <span m='8930'>are</span>
  <span m='9060'>the</span> <span m='9360'>granddaddy</span> <span
  m='10490'>of</span> <span m='10650'>all</span> <span m='12160'>models</span>
  <span m='12820'>involvement</span> <span m='13390'>competition</span> <span
  m='14270'>between</span> <span m='14750'>species.</span> <span
  m='16950'>They</span> <span m='17220'>are</span> <span m='17270'>the</span>
  <span m='17840'>foundation</span> <span m='18710'>of</span> <span
  m='18900'>fields</span> <span m='19480'>like</span> <span
  m='19840'>mathematical</span> <span m='20790'>ecology.</span> <span
  m='22860'>Think</span> <span m='23210'>of</span> <span m='23460'>the</span>
  <span m='24930'>two</span> <span m='25450'>species</span> <span
  m='26340'>as</span> <span m='26590'>rabbits</span> <span m='27300'>and</span>
  <span m='27490'>foxes</span> <span m='29440'>or</span> <span
  m='30430'>moose</span> <span m='31070'>and</span> <span
  m='31310'>wolves</span> <span m='32990'>or</span> <span
  m='34430'>little</span> <span m='34780'>fish</span> <span m='35180'>in</span>
  <span m='35260'>big</span> <span m='35620'>fish.</span> </p><p><span
  m='36850'>Y1</span> <span m='37520'>represents</span> <span
  m='38300'>the</span> <span m='38410'>prey,</span> <span m='40010'>who</span>
  <span m='40250'>would</span> <span m='40480'>live</span> <span
  m='41650'>peacefully</span> <span m='42290'>by</span> <span
  m='42550'>themselves</span> <span m='43900'>if</span> <span
  m='44080'>there</span> <span m='44210'>were</span> <span m='44340'>no</span>
  <span m='44600'>predators.</span> <span m='46020'>I've</span> <span
  m='46230'>chosen</span> <span m='46760'>the</span> <span
  m='46890'>units</span> <span m='47330'>of</span> <span m='47530'>time</span>
  <span m='47965'>and</span> <span m='48400'>population</span> <span
  m='49920'>so</span> <span m='50310'>that the</span> <span
  m='50450'>coefficients</span> <span m='51370'>in</span> <span
  m='51530'>front</span> <span m='51840'>of</span> <span m='52000'>the</span>
  <span m='52610'>leading</span> <span m='53700'>linear</span> <span
  m='54250'>terms</span> <span m='55330'>are</span> <span m='55730'>one.</span>
  <span m='57130'>So</span> <span m='57950'>y1</span> <span
  m='58660'>prime</span> <span m='59060'>equals</span> <span m='59420'>y1</span>
  <span m='60670'>represents</span> <span m='62290'>exponential</span> <span
  m='63250'>growth</span> <span m='64370'>of</span> <span m='64629'>the</span>
  <span m='64760'>prey</span> <span m='65820'>in</span> <span
  m='65950'>the</span> <span m='66120'>absence</span> <span m='66690'>of</span>
  <span m='66830'>any</span> <span m='67130'>predators.</span> </p><p><span
  m='70610'>The</span> <span m='70780'>predators</span> <span
  m='72130'>need</span> <span m='72720'>the prey,</span> <span
  m='73550'>live</span> <span m='73860'>on</span> <span m='74080'>the</span>
  <span m='74190'>prey.</span> <span m='75460'>So</span> <span
  m='76300'>in</span> <span m='76460'>the</span> <span m='76620'>absence</span>
  <span m='77170'>of</span> <span m='77310'>any</span> <span
  m='77630'>prey,</span> <span m='78240'>this</span> <span
  m='78580'>minus</span> <span m='79130'>sign</span> <span m='79500'>is</span>
  <span m='79660'>all</span> <span m='79900'>important.</span> <span
  m='81090'>So</span> <span m='81360'>y2</span> <span m='82070'>prime</span>
  <span m='82550'>equals</span> <span m='82920'>minus</span> <span
  m='83450'>y2</span> <span m='84790'>represents</span> <span
  m='85540'>exponential</span> <span m='86550'>decay.</span> <span
  m='87930'>And</span> <span m='88180'>the</span> <span
  m='88680'>predators</span> <span m='89480'>die</span> <span
  m='89780'>off</span> <span m='90240'>exponentially</span> <span
  m='91900'>in</span> <span m='92130'>the</span> <span m='92300'>absence</span>
  <span m='92920'>of</span> <span m='93080'>any</span> <span
  m='95100'>prey.</span> </p><p><span m='96970'>But</span> <span
  m='97220'>then</span> <span m='97390'>here</span> <span m='97650'>are</span>
  <span m='97710'>the</span> <span m='97860'>non-linear</span> <span
  m='98600'>terms.</span> <span m='99680'>These</span> <span
  m='99970'>are</span> <span m='100570'>like</span> <span
  m='101110'>logistics</span> <span m='101790'>terms,</span> <span
  m='102780'>except</span> <span m='103870'>with</span> <span
  m='104250'>the</span> <span m='104520'>interaction</span> <span
  m='105300'>between</span> <span m='105780'>the</span> <span
  m='105940'>two</span> <span m='106160'>species.</span> <span
  m='107580'>The</span> <span m='107690'>growth</span> <span
  m='108160'>of</span> <span m='108300'>Y1</span> <span m='109660'>is</span>
  <span m='109870'>limited</span> <span m='110370'>by</span> <span
  m='110530'>the</span> <span m='110670'>presence</span> <span
  m='111210'>of</span> <span m='111380'>y2.</span> <span m='112880'>So</span>
  <span m='113770'>y1</span> <span m='114560'>will</span> <span
  m='114810'>grow</span> <span m='116580'>until</span> <span
  m='117790'>this</span> <span m='119970'>term</span> <span
  m='120320'>becomes</span> <span m='120850'>0</span> <span
  m='122300'>one</span> <span m='122660'>y2</span> <span m='123430'>read</span>
  <span m='123790'>reaches</span> <span m='124390'>mu2.</span> </p><p><span
  m='126440'>On</span> <span m='126560'>the</span> <span m='126690'>other</span>
  <span m='126950'>hand,</span> <span m='127870'>the</span> <span
  m='127930'>decay</span> <span m='129070'>of</span> <span m='129289'>y2</span>
  <span m='133510'>becomes</span> <span m='134450'>0</span> <span
  m='135610'>when</span> <span m='136330'>y1</span> <span
  m='137180'>reaches</span> <span m='137750'>mu1.</span> <span
  m='141430'>To</span> <span m='141570'>complete</span> <span
  m='141980'>this</span> <span m='142100'>specification,</span> <span
  m='143010'>we</span> <span m='143130'>need</span> <span m='143460'>the</span>
  <span m='143570'>initial</span> <span m='144000'>conditions.</span> <span
  m='145940'>So</span> <span m='146350'>we</span> <span m='146530'>have</span>
  <span m='147090'>two</span> <span m='147280'>values</span> <span
  m='147890'>eta</span> <span m='148170'>1</span> <span m='148480'>and</span>
  <span m='148790'>eta</span> <span m='149000'>2,</span> <span
  m='150220'>which</span> <span m='150560'>are</span> <span
  m='150730'>the</span> <span m='151300'>initial</span> <span
  m='151790'>values</span> <span m='152360'>of</span> <span m='152690'>y1</span>
  <span m='153100'>and</span> <span m='153920'>y2.</span> </p><p><span
  m='155150'>So</span> <span m='155380'>these</span> <span
  m='155670'>four</span> <span m='156010'>parameters,</span> <span
  m='157510'>two mus</span> <span m='158410'>and two</span> <span
  m='158730'>etas,</span> <span m='160760'>are</span> <span
  m='160960'>the</span> <span m='161520'>four</span> <span
  m='161860'>parameters</span> <span m='162600'>we</span> <span
  m='162800'>have</span> <span m='163230'>in</span> <span m='163340'>our</span>
  <span m='163780'>predator</span> <span m='164260'>prey</span> <span
  m='165600'>model.</span> <span m='169340'>Don't</span> <span
  m='169590'>worry</span> <span m='169860'>about</span> <span
  m='170170'>the</span> <span m='170260'>fact</span> <span
  m='170570'>that</span> <span m='170720'>these</span> <span
  m='171010'>are</span> <span m='171200'>continuous</span> <span
  m='172050'>variables</span> <span m='172820'>and</span> <span
  m='172990'>that</span> <span m='173130'>we</span> <span m='173310'>can</span>
  <span m='173470'>have</span> <span m='174390'>non-integer</span> <span
  m='175400'>numbers</span> <span m='175960'>of</span> <span
  m='176100'>individuals.</span> </p><p><span m='177110'>We</span> <span
  m='177340'>can</span> <span m='177540'>have</span> <span
  m='178400'>half</span> <span m='178830'>of</span> <span m='178980'>a</span>
  <span m='179080'>rabbit</span> <span m='179660'>or</span> <span
  m='179880'>a</span> <span m='180220'>tenth</span> <span m='180590'>of</span>
  <span m='180710'>a</span> <span m='180800'>moose.</span> <span
  m='182580'>These</span> <span m='182920'>are,</span> <span
  m='183080'>after</span> <span m='183560'>all,</span> <span
  m='184080'>models</span> <span m='184990'>that</span> <span
  m='185200'>are</span> <span m='186210'>idealized</span> <span
  m='187230'>versions</span> <span m='187740'>of</span> <span
  m='187880'>what's</span> <span m='188130'>happening</span> <span
  m='188720'>in</span> <span m='188960'>nature.</span> <span
  m='194160'>The</span> <span m='194370'>critical</span> <span
  m='194900'>points</span> <span m='195490'>are</span> <span
  m='195750'>when</span> <span m='196040'>the</span> <span
  m='196400'>derivatives</span> <span m='197240'>become</span> <span
  m='197640'>0.</span> <span m='199740'>There's</span> <span m='200020'>a</span>
  <span m='200110'>critical</span> <span m='200560'>point</span> <span
  m='200820'>at</span> <span m='200920'>the</span> <span
  m='201050'>origin.</span> </p><p><span m='201920'>But</span> <span
  m='202040'>the</span> <span m='202170'>interesting</span> <span
  m='202760'>one</span> <span m='203120'>is</span> <span m='203280'>when</span>
  <span m='204430'>these</span> <span m='204850'>terms</span> <span
  m='205320'>become</span> <span m='205820'>0.</span> <span m='209920'>So</span>
  <span m='210160'>that's</span> <span m='210490'>the</span> <span
  m='210590'>point</span> <span m='210980'>where</span> <span
  m='211250'>y1</span> <span m='211970'>and</span> <span m='212100'>y2</span>
  <span m='212800'>are</span> <span m='212930'>equal</span> <span
  m='213280'>to</span> <span m='213330'>the</span> <span m='214120'>mu1</span>
  <span m='214380'>and</span> <span m='214930'>mu2.</span> <span
  m='218510'>We</span> <span m='218660'>have</span> <span m='218870'>to</span>
  <span m='219010'>look</span> <span m='219210'>at</span> <span
  m='219310'>the</span> <span m='219420'>Jacobian.</span> <span
  m='221380'>And</span> <span m='221780'>here's</span> <span
  m='222130'>the</span> <span m='222260'>Jacobian</span> <span
  m='223000'>in</span> <span m='223140'>general.</span> <span
  m='224420'>And</span> <span m='224600'>at</span> <span m='224700'>the</span>
  <span m='224820'>critical</span> <span m='225350'>point,</span> <span
  m='225990'>the</span> <span m='226110'>Jacobian--</span> <span
  m='226920'>here's</span> <span m='227260'>the</span> <span
  m='227370'>Jacobian.</span> </p><p><span m='229650'>The</span> <span
  m='230150'>eigenvalues</span> <span m='231040'>of</span> <span
  m='231130'>the</span> <span m='231230'>Jacobian</span> <span
  m='232740'>are</span> <span m='233540'>plus</span> <span m='233940'>or</span>
  <span m='234030'>minus</span> <span m='234510'>I.</span> <span
  m='235810'>And</span> <span m='236080'>so</span> <span m='238330'>this</span>
  <span m='238710'>critical</span> <span m='239260'>point</span> <span
  m='240090'>is</span> <span m='240340'>a</span> <span m='240440'>stable</span>
  <span m='241360'>center</span> <span m='242730'>with</span> <span
  m='243280'>a</span> <span m='244030'>period</span> <span
  m='244640'>2pi.</span> <span m='251440'>So</span> <span
  m='251650'>these</span> <span m='251890'>are</span> <span
  m='251950'>non-linear</span> <span m='252660'>equations.</span> <span
  m='253790'>We</span> <span m='254160'>can't</span> <span
  m='254530'>express</span> <span m='255170'>the</span> <span
  m='255290'>solution</span> <span m='255870'>in</span> <span
  m='256019'>terms</span> <span m='256360'>of</span> <span
  m='257060'>simple</span> <span m='257610'>analytic</span> <span
  m='258170'>functions.</span> </p><p><span m='259640'>We</span> <span
  m='260140'>have</span> <span m='260450'>to</span> <span
  m='260709'>compute</span> <span m='261160'>them</span> <span
  m='261370'>numerically.</span> <span m='262990'>But</span> <span
  m='263240'>we</span> <span m='263490'>do</span> <span m='263680'>know</span>
  <span m='263830'>this</span> <span m='264080'>about</span> <span
  m='264440'>their</span> <span m='264540'>behavior.</span> <span
  m='266370'>If</span> <span m='266660'>the</span> <span
  m='267070'>initial</span> <span m='267490'>conditions</span> <span
  m='268200'>are</span> <span m='268340'>close</span> <span m='268700'>to</span>
  <span m='268790'>the</span> <span m='268950'>critical</span> <span
  m='269440'>point,</span> <span m='270820'>the</span> <span
  m='270970'>solution</span> <span m='271520'>is</span> <span
  m='271680'>periodic.</span> <span m='273410'>The</span> <span
  m='273550'>period</span> <span m='274010'>is</span> <span
  m='274240'>close</span> <span m='274670'>to</span> <span
  m='274840'>2pi.</span> <span m='276740'>And</span> <span m='277020'>the</span>
  <span m='277150'>orbit</span> <span m='277680'>is</span> <span
  m='278260'>close</span> <span m='278680'>to</span> <span m='278830'>an</span>
  <span m='278930'>ellipse.</span> </p><p><span m='281310'>On</span> <span
  m='281440'>the</span> <span m='281570'>other</span> <span
  m='281800'>hand,</span> <span m='282370'>if</span> <span m='282460'>the</span>
  <span m='283520'>initial</span> <span m='283930'>conditions</span> <span
  m='284600'>are</span> <span m='284710'>far</span> <span m='285220'>from</span>
  <span m='285470'>the</span> <span m='285590'>critical</span> <span
  m='286120'>point,</span> <span m='287250'>then</span> <span
  m='287440'>it</span> <span m='287570'>turns</span> <span m='287860'>out</span>
  <span m='288060'>the</span> <span m='288170'>solution</span> <span
  m='288700'>is</span> <span m='288830'>still</span> <span
  m='289230'>periodic.</span> <span m='291210'>But</span> <span
  m='291430'>the</span> <span m='291590'>period</span> <span
  m='292280'>is</span> <span m='293080'>greater</span> <span
  m='293470'>than</span> <span m='293710'>2pi</span> <span m='295150'>and</span>
  <span m='295610'>the</span> <span m='295900'>orbit</span> <span
  m='296660'>is</span> <span m='298130'>far</span> <span m='298560'>from</span>
  <span m='299550'>an</span> <span m='299630'>ellipse.</span> <span
  m='304680'>OK,</span> <span m='305150'>let's</span> <span
  m='305450'>bring</span> <span m='305730'>up</span> <span
  m='305880'>MATLAB</span> <span m='306160'>and</span> <span m='306710'>compute
  a</span> <span m='307220'>solution.</span> </p><p><span m='308990'>We</span>
  <span m='309120'>need</span> <span m='309380'>the</span> <span
  m='309460'>parameters.</span> <span m='310450'>Here's</span> <span
  m='310780'>a</span> <span m='310860'>mu</span> <span m='312570'>and an</span>
  <span m='312990'>eta.</span> <span m='315410'>And I'll set</span> <span
  m='315840'>the</span> <span m='315940'>differential</span> <span
  m='316600'>equation.</span> <span m='318830'>And</span> <span
  m='319980'>then</span> <span m='320180'>choose</span> <span
  m='320550'>ODE</span> <span m='321340'>45</span> <span m='323000'>and</span>
  <span m='323290'>we'll</span> <span m='323540'>integrate</span> <span
  m='324240'>from</span> <span m='324420'>0</span> <span m='324820'>to</span>
  <span m='324960'>25.</span> <span m='326410'>And</span> <span
  m='326550'>here's</span> <span m='326890'>the</span> <span
  m='327020'>solution.</span> <span m='328340'>It's</span> <span
  m='328660'>periodic.</span> <span m='330080'>A</span> <span
  m='330200'>predator</span> <span m='330860'>and a</span> <span
  m='331070'>prey.</span> <span m='332390'>And</span> <span m='333400'>it</span>
  <span m='333610'>looks</span> <span m='333880'>like</span> <span
  m='334230'>the</span> <span m='335270'>period,</span> <span
  m='336070'>it's</span> <span m='336550'>returning</span> <span
  m='337200'>back</span> <span m='337570'>to</span> <span m='337730'>the</span>
  <span m='337950'>initial</span> <span m='338380'>condition</span> <span
  m='338980'>is</span> <span m='339120'>100 and 400.</span> </p><p><span
  m='341120'>And</span> <span m='341300'>it's</span> <span
  m='341450'>returning</span> <span m='342150'>back</span> <span
  m='342490'>to</span> <span m='342600'>that</span> <span
  m='343410'>along</span> <span m='343840'>about</span> <span
  m='344200'>here.</span> <span m='345420'>And</span> <span
  m='345710'>we've</span> <span m='346000'>integrated</span> <span
  m='346660'>over</span> <span m='347010'>something</span> <span
  m='347420'>more</span> <span m='347710'>than</span> <span
  m='347930'>three</span> <span m='348300'>periods.</span> <span
  m='349960'>I</span> <span m='350150'>happen</span> <span m='350590'>to</span>
  <span m='350700'>know</span> <span m='351850'>that</span> <span
  m='352100'>the</span> <span m='352240'>period</span> <span
  m='353410'>is</span> <span m='354540'>6.5.</span> <span m='356900'>And</span>
  <span m='357150'>so</span> <span m='358030'>I</span> <span
  m='358210'>can--</span> <span m='358820'>I'm</span> <span
  m='359110'>going</span> <span m='359360'>to</span> <span
  m='359490'>set--</span> <span m='362680'>I want to</span> <span
  m='362950'>compute</span> <span m='363850'>to</span> <span
  m='364040'>higher</span> <span m='364580'>accuracy.</span> <span
  m='365570'>10</span> <span m='365800'>to</span> <span m='365850'>the</span>
  <span m='365960'>minus</span> <span m='367210'>6.</span> </p><p><span
  m='368940'>And</span> <span m='369860'>let's</span> <span
  m='370250'>capture</span> <span m='370890'>the</span> <span
  m='371060'>solution</span> <span m='372550'>and</span> <span
  m='372980'>integrate</span> <span m='373650'>over</span> <span
  m='374020'>three</span> <span m='374460'>periods.</span> <span
  m='383810'>It</span> <span m='384810'>generated</span> <span
  m='385530'>337</span> <span m='386920'>points.</span> <span
  m='389460'>Let's</span> <span m='389840'>plot</span> <span
  m='390260'>it</span> <span m='394220'>with</span> <span m='394580'>the</span>
  <span m='394870'>finer</span> <span m='395340'>dots.</span> <span
  m='397730'>And</span> <span m='397980'>we</span> <span m='398150'>can</span>
  <span m='398320'>see</span> <span m='398680'>here,</span> <span
  m='399030'>we've</span> <span m='400410'>gone</span> <span
  m='400610'>over</span> <span m='400840'>three</span> <span
  m='401240'>periods</span> <span m='402610'>and</span> <span
  m='402910'>return</span> <span m='403440'>back</span> <span
  m='403790'>to</span> <span m='403920'>our</span> <span
  m='404040'>initial</span> <span m='404460'>values</span> <span
  m='405800'>of</span> <span m='406000'>100</span> <span m='406490'>and</span>
  <span m='406980'>300.</span> </p><p><span m='409310'>And</span> <span
  m='409610'>now</span> <span m='410130'>I'm</span> <span
  m='410340'>going</span> <span m='410590'>to</span> <span m='410640'>use</span>
  <span m='415770'>something</span> <span m='416260'>that'll</span> <span
  m='416520'>show</span> <span m='416890'>off</span> <span m='417350'>the</span>
  <span m='418070'>periodicity</span> <span m='419280'>of</span> <span
  m='419780'>function</span> <span m='420290'>in</span> <span
  m='420430'>MATLAB</span> <span m='421120'>called</span> <span
  m='421590'>Comet.</span> <span m='435370'>One</span> <span
  m='435660'>orbit.</span> <span m='438760'>Two</span> <span
  m='438980'>orbits.</span> <span m='441520'>Three</span> <span
  m='441900'>orbits.</span> <span m='449210'>Determining</span> <span
  m='449950'>the</span> <span m='450330'>period</span> <span
  m='450820'>of</span> <span m='450940'>a</span> <span
  m='451000'>periodic</span> <span m='451580'>solution</span> <span
  m='452150'>is</span> <span m='452340'>often</span> <span m='452850'>the</span>
  <span m='453860'>important</span> <span m='454380'>part</span> <span
  m='454630'>of</span> <span m='454740'>a</span> <span
  m='454820'>calculation.</span> </p><p><span m='456530'>In</span> <span
  m='456810'>the</span> <span m='456900'>MATLAB</span> <span
  m='457250'>ODE</span> <span m='458070'>suite,</span> <span
  m='458590'>this</span> <span m='458810'>is</span> <span m='459020'>done</span>
  <span m='459350'>with</span> <span m='460310'>an</span> <span
  m='460490'>event</span> <span m='460980'>handler.</span> <span
  m='462190'>So</span> <span m='462530'>I'm</span> <span m='462780'>going</span>
  <span m='463110'>to</span> <span m='463150'>use</span> <span
  m='465020'>ODE's</span> <span m='466200'>set</span> <span m='466820'>to</span>
  <span m='467530'>provide</span> <span m='468090'>an</span> <span
  m='468220'>event</span> <span m='468640'>handler</span> <span
  m='469940'>called</span> <span m='471790'>Pit</span> <span
  m='472040'>Stop.</span> <span m='473260'>And</span> <span
  m='474230'>here's</span> <span m='474550'>the</span> <span
  m='474700'>code</span> <span m='475740'>in</span> <span m='476450'>Pit</span>
  <span m='476730'>Stop.</span> <span m='477960'>This</span> <span
  m='478370'>code</span> <span m='478840'>is</span> <span
  m='479070'>called</span> <span m='482740'>every</span> <span
  m='483130'>time</span> <span m='483500'>step</span> <span m='483950'>in</span>
  <span m='484130'>the</span> <span m='484350'>integration.</span> </p><p><span
  m='486630'>And</span> <span m='487530'>I'm</span> <span m='488060'>not</span>
  <span m='488240'>going</span> <span m='488360'>to</span> <span
  m='488420'>go</span> <span m='488620'>into</span> <span
  m='488800'>detail</span> <span m='489430'>here,</span> <span
  m='490310'>but</span> <span m='490460'>it</span> <span
  m='490730'>computes</span> <span m='491380'>a</span> <span
  m='492010'>function</span> <span m='492720'>g</span> <span
  m='493930'>that</span> <span m='494990'>we're</span> <span
  m='495160'>looking</span> <span m='495510'>to</span> <span
  m='495610'>see</span> <span m='495890'>when</span> <span
  m='496110'>this</span> <span m='496350'>is</span> <span m='496570'>0.</span>
  <span m='497530'>And</span> <span m='497710'>when g</span> <span
  m='497840'>returns</span> <span m='498790'>to</span> <span
  m='498910'>0,</span> <span m='500030'>the</span> <span
  m='500430'>integration</span> <span m='501200'>is</span> <span
  m='501320'>stopped.</span> <span m='502660'>I'm</span> <span
  m='502930'>going</span> <span m='503330'>to--</span> <span m='504110'>I</span>
  <span m='504390'>have a</span> <span m='505700'>display</span> <span
  m='506520'>function</span> <span m='507160'>in</span> <span
  m='507510'>here.</span> </p><p><span m='508380'>Ordinarily,</span> <span
  m='508980'>this</span> <span m='509200'>wouldn't</span> <span
  m='509500'>be</span> <span m='509700'>here.</span> <span m='509990'>But</span>
  <span m='510470'>I</span> <span m='510550'>want</span> <span
  m='510750'>to</span> <span m='510820'>look</span> <span m='511010'>at</span>
  <span m='511130'>this</span> <span m='511370'>to</span> <span
  m='511490'>see</span> <span m='511760'>how</span> <span m='516990'>the</span>
  <span m='517090'>calculation</span> <span m='517850'>is</span> <span
  m='518030'>done.</span> <span m='519030'>It</span> <span
  m='519169'>says,</span> <span m='519460'>terminate</span> <span
  m='520130'>when</span> <span m='520340'>y</span> <span
  m='520679'>returns</span> <span m='521190'>to</span> <span
  m='521280'>the</span> <span m='521400'>point</span> <span
  m='521760'>where</span> <span m='521950'>its</span> <span
  m='522150'>angle</span> <span m='522740'>mu</span> <span m='523620'>is</span>
  <span m='523850'>the</span> <span m='523980'>same</span> <span
  m='524360'>as</span> <span m='524520'>the</span> <span m='524660'>angle</span>
  <span m='525040'>between</span> <span m='525500'>eta</span> <span
  m='525770'>and</span> <span m='526030'>mu.</span> <span m='526990'>This</span>
  <span m='527170'>is</span> <span m='527320'>more</span> <span
  m='527610'>reliable</span> <span m='528410'>than</span> <span
  m='528600'>just</span> <span m='531610'>finding</span> <span
  m='532440'>when</span> <span m='534140'>the</span> <span
  m='534260'>solution</span> <span m='534880'>returns</span> <span
  m='535550'>back</span> <span m='535970'>to</span> <span m='536720'>its</span>
  <span m='536970'>initial</span> <span m='537470'>condition.</span>
  </p><p><span m='539500'>So</span> <span m='539580'>let's</span> <span
  m='539850'>run</span> <span m='540120'>ODE</span> <span m='540650'>45</span>
  <span m='542240'>and</span> <span m='542540'>tell it to</span> <span
  m='542960'>integrate</span> <span m='543490'>over</span> <span
  m='543820'>an</span> <span m='543940'>infinite</span> <span
  m='544490'>time</span> <span m='544800'>step,</span> <span
  m='545690'>over</span> <span m='545910'>an</span> <span
  m='545990'>infinite</span> <span m='546300'>interval.</span> <span
  m='547170'>That's</span> <span m='547440'>not</span> <span
  m='547640'>going</span> <span m='547740'>to</span> <span
  m='547800'>happen,</span> <span m='548320'>because</span> <span
  m='548480'>we're</span> <span m='548630'>going</span> <span
  m='548770'>to</span> <span m='548840'>stop</span> <span m='549290'>as</span>
  <span m='549420'>soon</span> <span m='549720'>as</span> <span
  m='549950'>g</span> <span m='550190'>is</span> <span m='550360'>0</span> <span
  m='551890'>but</span> <span m='552140'>with</span> <span m='552360'>the</span>
  <span m='552510'>option</span> <span m='552920'>vector</span> <span
  m='553330'>set</span> <span m='553710'>with</span> <span
  m='553910'>this</span> <span m='554130'>event</span> <span
  m='554460'>handler.</span> <span m='556260'>So</span> <span
  m='556620'>here</span> <span m='556870'>it</span> <span m='556940'>is.</span>
  </p><p><span m='557830'>And</span> <span m='558000'>here's</span> <span
  m='560120'>the</span> <span m='560600'>output</span> <span
  m='561300'>produced</span> <span m='561810'>by</span> <span
  m='562030'>Pit</span> <span m='562340'>Stop</span> <span m='563350'>as</span>
  <span m='563610'>we</span> <span m='564600'>integrate</span> <span
  m='565070'>along.</span> <span m='565630'>Here's</span> <span
  m='565980'>the</span> <span m='566060'>values</span> <span
  m='566560'>that</span> <span m='566730'>it's</span> <span
  m='569000'>found.</span> <span m='570130'>And</span> <span
  m='570760'>here's</span> <span m='571240'>where</span> <span
  m='572390'>g</span> <span m='572780'>returns</span> <span m='573360'>to</span>
  <span m='573500'>0.</span> <span m='576090'>I've</span> <span
  m='576250'>produced</span> <span m='577350'>a</span> <span m='577810'>t</span>
  <span m='578090'>vector</span> <span m='579100'>with</span> <span
  m='579330'>117</span> <span m='580510'>values</span> <span
  m='581120'>in</span> <span m='581290'>it.</span> <span m='581940'>And</span>
  <span m='582960'>the</span> <span m='583120'>final</span> <span
  m='583590'>value</span> <span m='584110'>of</span> <span m='584270'>t</span>
  <span m='585470'>is</span> <span m='587530'>this</span> <span
  m='588000'>value</span> <span m='589310'>that</span> <span m='589920'>I</span>
  <span m='590470'>said</span> <span m='592180'>was</span> <span
  m='592540'>the</span> <span m='592660'>period</span> <span
  m='593190'>of</span> <span m='593280'>this</span> <span
  m='593530'>solution.</span> </p><p><span m='594530'>So</span> <span
  m='595230'>that's</span> <span m='595500'>how</span> <span
  m='595720'>the</span> <span m='595810'>period</span> <span
  m='596290'>was</span> <span m='596510'>determined</span> <span
  m='597720'>by</span> <span m='597960'>this</span> <span
  m='598820'>event</span> <span m='599250'>handling</span> <span
  m='599740'>feature</span> <span m='601540'>in</span> <span
  m='601730'>the</span> <span m='601880'>ODE</span> <span
  m='602400'>solvers.</span> <span m='606110'>Great.</span> <span
  m='608410'>I</span> <span m='608520'>have</span> <span m='608720'>a</span>
  <span m='608870'>program</span> <span m='609490'>called</span> <span
  m='610010'>Predator</span> <span m='610470'>Prey</span> <span
  m='612010'>that's</span> <span m='612260'>in</span> <span
  m='612440'>the</span> <span m='612640'>collection</span> <span
  m='613350'>of</span> <span m='613820'>programs</span> <span
  m='614570'>that</span> <span m='614760'>comes</span> <span
  m='615150'>with</span> <span m='616130'>NCM,</span> <span
  m='618070'>Numerical</span> <span m='618820'>Computing</span> <span
  m='619320'>with</span> <span m='619480'>MATLAB.</span> <span
  m='621160'>My</span> <span m='621440'>book</span> <span
  m='622050'>that's</span> <span m='622320'>available</span> <span
  m='622980'>on</span> <span m='623190'>the</span> <span
  m='624270'>MathWorks</span> <span m='624910'>website.</span> </p><p><span
  m='629610'>Predator</span> <span m='629920'>prey</span> <span
  m='631670'>offers</span> <span m='632240'>this</span> <span
  m='637250'>graphic</span> <span m='637720'>user</span> <span
  m='638130'>interface</span> <span m='638830'>to</span> <span
  m='639020'>demonstrate</span> <span m='639830'>what</span> <span
  m='639990'>we've</span> <span m='640130'>been</span> <span
  m='640300'>talking</span> <span m='640620'>about</span> <span
  m='640970'>the</span> <span m='641050'>predator</span> <span
  m='641500'>prey</span> <span m='641810'>equations.</span> <span
  m='644660'>The</span> <span m='644810'>top</span> <span
  m='645120'>display</span> <span m='645840'>shows</span> <span
  m='646280'>the</span> <span m='646460'>phase</span> <span
  m='646880'>plane</span> <span m='647210'>plot,</span> <span
  m='647720'>the</span> <span m='648520'>plot</span> <span m='648950'>of</span>
  <span m='650420'>prey</span> <span m='650920'>versus</span> <span
  m='651500'>predator.</span> <span m='652690'>And</span> <span
  m='653140'>the</span> <span m='653410'>bottom</span> <span
  m='653910'>display</span> <span m='654650'>shows</span> <span
  m='655280'>the</span> <span m='656170'>time</span> <span
  m='656520'>series</span> <span m='657050'>plot,</span> <span
  m='657660'>the</span> <span m='658500'>plot</span> <span m='658840'>of</span>
  <span m='658960'>the</span> <span m='659090'>two</span> <span
  m='659300'>populations.</span> </p><p><span m='660870'>And</span> <span
  m='661010'>initially,</span> <span m='661580'>it's</span> <span
  m='661740'>set</span> <span m='662000'>at</span> <span m='662260'>the</span>
  <span m='662380'>conditions</span> <span m='662920'>we've</span> <span
  m='663150'>been</span> <span m='663330'>talking</span> <span
  m='663730'>about.</span> <span m='664880'>Here's</span> <span
  m='665920'>400</span> <span m='666650'>rabbits</span> <span
  m='667880'>and</span> <span m='668200'>100</span> <span
  m='668620'>foxes</span> <span m='670570'>around</span> <span
  m='671000'>the</span> <span m='671130'>critical</span> <span
  m='671700'>point</span> <span m='672540'>of</span> <span m='673370'>300</span>
  <span m='674070'>rabbits</span> <span m='675210'>and</span> <span
  m='675470'>200</span> <span m='675940'>foxes.</span> <span
  m='677370'>And</span> <span m='677790'>here's</span> <span
  m='678170'>the</span> <span m='678330'>period</span> <span
  m='679470'>of</span> <span m='679880'>6.5</span> <span m='681140'>some</span>
  <span m='681430'>odd</span> <span m='682110'>that</span> <span
  m='682450'>we've</span> <span m='682700'>been</span> <span
  m='682870'>working</span> <span m='683300'>with.</span> </p><p><span
  m='684250'>Now,</span> <span m='684620'>it</span> <span m='685560'>says</span>
  <span m='685860'>drag</span> <span m='686290'>either</span> <span
  m='686520'>dot.</span> <span m='687510'>And</span> <span m='687750'>you</span>
  <span m='687900'>can</span> <span m='688110'>change</span> <span
  m='689980'>the</span> <span m='691730'>initial</span> <span
  m='692290'>conditions</span> <span m='694530'>or</span> <span
  m='695130'>the</span> <span m='695810'>critical</span> <span
  m='696370'>point.</span> <span m='697380'>If</span> <span m='697490'>I</span>
  <span m='697580'>bring</span> <span m='697920'>the</span> <span
  m='698070'>initial</span> <span m='698560'>conditions</span> <span
  m='699780'>close</span> <span m='700280'>to</span> <span m='700490'>the</span>
  <span m='701660'>critical</span> <span m='702210'>point,</span> <span
  m='703300'>then</span> <span m='704360'>the</span> <span
  m='704940'>phase</span> <span m='705420'>plane</span> <span
  m='705750'>plot</span> <span m='706200'>becomes</span> <span
  m='706690'>close</span> <span m='707100'>to</span> <span
  m='707310'>ellipse.</span> <span m='708480'>And</span> <span
  m='709760'>the</span> <span m='710730'>period</span> <span
  m='711280'>becomes</span> <span m='711860'>close</span> <span
  m='712390'>to</span> <span m='713150'>2pi.</span> </p><p><span
  m='713760'>This</span> <span m='714050'>is</span> <span
  m='714610'>6.28,</span> <span m='716320'>which</span> <span
  m='716610'>is</span> <span m='716830'>twice</span> <span
  m='717430'>3.14.</span> <span m='720590'>But</span> <span m='721540'>if</span>
  <span m='721820'>I</span> <span m='722850'>change</span> <span
  m='723300'>it</span> <span m='723470'>so</span> <span m='723780'>that</span>
  <span m='724100'>the</span> <span m='727430'>two</span> <span
  m='727680'>are</span> <span m='727760'>far</span> <span m='728110'>away</span>
  <span m='728390'>from</span> <span m='728650'>each</span> <span
  m='728880'>other,</span> <span m='729820'>then</span> <span
  m='730830'>the</span> <span m='730960'>phase</span> <span
  m='731410'>plane</span> <span m='731750'>plot</span> <span
  m='733310'>becomes</span> <span m='735990'>quite</span> <span
  m='736510'>different</span> <span m='737020'>from</span> <span
  m='739920'>an</span> <span m='740100'>ellipse.</span> <span
  m='741250'>It's</span> <span m='741410'>always</span> <span
  m='741750'>periodic.</span> <span m='742550'>That's an</span> <span
  m='742840'>amazing</span> <span m='743390'>thing</span> <span
  m='743660'>about</span> <span m='744070'>these</span> <span
  m='747040'>nonlinear</span> <span m='747710'>equations.</span> </p><p><span
  m='748400'>They</span> <span m='748500'>always</span> <span
  m='748820'>have</span> <span m='749000'>a</span> <span
  m='750420'>periodic</span> <span m='750950'>solution.</span> <span
  m='752090'>But</span> <span m='752260'>now</span> <span m='752580'>as</span>
  <span m='752690'>you</span> <span m='752880'>can</span> <span
  m='753030'>see,</span> <span m='753550'>the</span> <span
  m='755570'>period</span> <span m='756030'>is</span> <span
  m='756290'>greater</span> <span m='756700'>than</span> <span
  m='756940'>2pi.</span> <span m='758490'>And</span> <span m='759260'>the</span>
  <span m='759390'>solutions</span> <span m='760260'>are</span> <span
  m='761590'>very</span> <span m='762140'>far</span> <span
  m='762700'>from</span> <span m='765540'>sinusoids.</span> <span
  m='767340'>So</span> <span m='767890'>that's</span> <span
  m='768320'>the</span> <span m='769040'>pred</span> <span
  m='769700'>prey</span> <span m='770370'>app</span> <span
  m='771570'>that's</span> <span m='771860'>available</span> <span
  m='772700'>with</span> <span m='773610'>the</span> <span
  m='773770'>programs</span> <span m='774680'>in</span> <span
  m='776330'>from</span> <span m='776660'>the</span> <span
  m='777600'>mathworks</span> <span m='778200'>website</span> <span
  m='779520'>under</span> <span m='779840'>NCM</span> <span
  m='781960'>for</span> <span m='782930'>Numerical</span> <span
  m='783640'>Computing</span> <span m='784160'>with</span> <span
  m='784330'>MATLAB.</span> </p><p><span m='790910'>Whoops,</span> <span
  m='791580'>I</span> <span m='791790'>stand</span> <span
  m='792200'>corrected.</span> <span m='793780'>If</span> <span
  m='793970'>you</span> <span m='794160'>Google</span> <span
  m='795030'>Moler</span> <span m='795850'>predprey,</span> <span
  m='797740'>it</span> <span m='797890'>tries</span> <span m='798260'>to</span>
  <span m='798420'>talk</span> <span m='798730'>me</span> <span
  m='798870'>out</span> <span m='799120'>of</span> <span m='799270'>it,</span>
  <span m='800250'>but</span> <span m='800440'>then</span> <span
  m='800630'>it</span> <span m='800740'>shows</span> <span
  m='801190'>it's</span> <span m='801400'>in</span> <span m='801720'>my</span>
  <span m='801900'>second</span> <span m='802390'>book,</span> <span
  m='802790'>Experiments</span> <span m='803570'>with</span> <span
  m='803750'>MATLAB.</span> <span m='804500'>There</span> <span
  m='804690'>are</span> <span m='804790'>two</span> <span
  m='804970'>books.</span> <span m='806000'>Numerical</span> <span
  m='806590'>Computing</span> <span m='807040'>with</span> <span
  m='807190'>MATLAB</span> <span m='807610'>and</span> <span
  m='808030'>Experiments</span> <span m='808800'>with</span> <span
  m='808990'>MATLAB.</span> </p><p><span m='810410'>And</span> <span
  m='810890'>pred</span> <span m='811230'>prey</span> <span m='811710'>is</span>
  <span m='812070'>in</span> <span m='812200'>the</span> <span
  m='812320'>second</span> <span m='812790'>one,</span> <span
  m='813060'>Experiments</span> <span m='813770'>with</span> <span
  m='813940'>MATLAB.</span> <span m='815190'>You</span> <span
  m='815320'>can</span> <span m='815530'>go</span> <span m='815740'>to</span>
  <span m='815940'>website</span> <span m='817090'>and</span> <span
  m='817260'>you</span> <span m='817400'>can</span> <span
  m='817640'>download</span> <span m='818520'>all</span> <span
  m='818910'>of</span> <span m='818990'>the</span> <span
  m='819090'>programs</span> <span m='820620'>from</span> <span
  m='821360'>EXM</span> <span m='822890'>or</span> <span m='823230'>you</span>
  <span m='823420'>can</span> <span m='823640'>go</span> <span
  m='823800'>down</span> <span m='824210'>here</span> <span
  m='825320'>and</span> <span m='828140'>here's</span> <span m='828510'>pred
  prey.</span> <span m='830830'>So</span> <span m='831200'>it's</span> <span
  m='831430'>in</span> <span m='833740'>Experiments</span> <span
  m='834670'>with</span> <span m='834850'>MATLAB</span> <span
  m='836350'>on</span> <span m='836730'>the</span> <span
  m='838390'>MathWorks</span> <span m='839050'>website.</span> <span
  m='845390'>Just</span> <span m='845650'>Google</span> <span
  m='846430'>Moler</span> <span m='847270'>predator</span> <span
  m='847600'>prey</span> <span m='848670'>and</span> <span
  m='848860'>you'll</span> <span m='849020'>find</span> <span
  m='849430'>it.</span> </p>
uid: 30db591ce77bedf825186928b9b320f0
type: courses
layout: video
---
