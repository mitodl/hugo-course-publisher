---
title: 'Video 4: A Better Visualization'
uid: 88204b6621542992d8f19497dcaa4867
parent_uid: 8d22eb4326962ab5580b311ad9e3c4a8
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-4-a-better-visualization/video-4-a-better-visualization-0
short_url: video-4-a-better-visualization-0
inline_embed_id: 99376428video4abettervisualization39837716
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>So</span> <span m='4972'>we</span> <span
  m='5445'>just</span> <span m='5917'>made</span> <span m='6390'>this</span>
  <span m='6862'>plot</span> <span m='7335'>in</span> <span
  m='7807'>ggplot2.</span> </p><p><span m='8280'>When</span> <span
  m='8478'>we</span> <span m='8677'>compare</span> <span m='8876'>it</span>
  <span m='9075'>back</span> <span m='9274'>to</span> <span m='9473'>the</span>
  <span m='9672'>pie</span> <span m='9871'>graph,</span> <span
  m='10070'>the</span> <span m='10376'>first</span> <span m='10682'>thing</span>
  <span m='10988'>I</span> <span m='11294'>notice</span> <span
  m='11600'>is</span> <span m='11906'>that</span> <span m='12213'>now</span>
  <span m='12519'>all</span> <span m='12825'>the</span> <span
  m='13131'>data</span> <span m='13437'>is</span> <span
  m='13743'>visible.</span> </p><p><span m='14050'>We</span> <span
  m='14348'>haven't</span> <span m='14646'>lost</span> <span
  m='14945'>the</span> <span m='15243'>small</span> <span
  m='15541'>regions</span> <span m='15840'>and</span> <span m='16062'>we</span>
  <span m='16284'>can</span> <span m='16506'>read</span> <span
  m='16728'>out</span> <span m='16951'>the</span> <span m='17173'>exact</span>
  <span m='17395'>share</span> <span m='17617'>that</span> <span
  m='17840'>comes</span> <span m='18184'>from</span> <span
  m='18528'>Africa,</span> <span m='18873'>Oceania,</span> <span
  m='19217'>and</span> <span m='19562'>the</span> <span m='19906'>unknown</span>
  <span m='20251'>or</span> <span m='20595'>stateless</span> <span
  m='20940'>column.</span> </p><p><span m='23400'>I</span> <span
  m='23696'>believe</span> <span m='23992'>it</span> <span m='24289'>is</span>
  <span m='24585'>also</span> <span m='24881'>easier</span> <span
  m='25178'>to</span> <span m='25474'>compare</span> <span m='25770'>the</span>
  <span m='26067'>relative</span> <span m='26363'>sizes</span> <span
  m='26660'>of</span> <span m='27138'>each</span> <span m='27616'>region</span>
  <span m='28095'>because</span> <span m='28573'>they're</span> <span
  m='29051'>all</span> <span m='29530'>put</span> <span m='29778'>side</span>
  <span m='30027'>by</span> <span m='30276'>side</span> <span
  m='30525'>on</span> <span m='30773'>a</span> <span m='31022'>similar</span>
  <span m='31271'>scale.</span> </p><p><span m='31520'>There's</span> <span
  m='31791'>no</span> <span m='32063'>tricks,</span> <span m='32335'>or</span>
  <span m='32606'>three</span> <span m='32878'>dimensions,</span> <span
  m='33150'>or</span> <span m='33750'>colors</span> <span m='34350'>to</span>
  <span m='34950'>create</span> <span m='35550'>a</span> <span
  m='36150'>perception</span> <span m='36750'>issue.</span> </p><p><span
  m='37350'>But,</span> <span m='37621'>I</span> <span m='37892'>will</span>
  <span m='38163'>say</span> <span m='38435'>that</span> <span
  m='38706'>something</span> <span m='38977'>to</span> <span
  m='39248'>consider</span> <span m='39520'>is,</span> <span
  m='40020'>for</span> <span m='40520'>some</span> <span m='41020'>people</span>
  <span m='41520'>and</span> <span m='42020'>some</span> <span
  m='42520'>applications,</span> <span m='43020'>being</span> <span
  m='43416'>not</span> <span m='43812'>as</span> <span m='44208'>visually</span>
  <span m='44605'>exciting</span> <span m='45001'>is</span> <span
  m='45397'>a</span> <span m='45793'>negative.</span> </p><p><span
  m='46190'>This</span> <span m='46680'>plot,</span> <span
  m='47170'>while</span> <span m='47660'>very</span> <span
  m='48150'>readable</span> <span m='48640'>and</span> <span
  m='49130'>correct,</span> <span m='49620'>is</span> <span
  m='49953'>certainly</span> <span m='50286'>a</span> <span
  m='50620'>little</span> <span m='50953'>bit</span> <span
  m='51286'>dull.</span> </p><p><span m='51620'>In</span> <span
  m='51917'>some</span> <span m='52215'>applications,</span> <span
  m='52512'>this</span> <span m='52810'>is</span> <span m='53107'>an</span>
  <span m='53405'>important</span> <span m='53702'>consideration.</span>
  </p><p><span m='56790'>Now,</span> <span m='57137'>wouldn't</span> <span
  m='57484'>it</span> <span m='57831'>be</span> <span
  m='58178'>interesting</span> <span m='58525'>if</span> <span
  m='58872'>we</span> <span m='59220'>could</span> <span m='59583'>plot</span>
  <span m='59947'>this</span> <span m='60311'>data</span> <span
  m='60675'>on</span> <span m='61038'>a</span> <span m='61402'>world</span>
  <span m='61766'>map?</span> </p><p><span m='62130'>It</span> <span
  m='62363'>would</span> <span m='62597'>be</span> <span
  m='62831'>possible,</span> <span m='63065'>but</span> <span m='63298'>a</span>
  <span m='63532'>bit</span> <span m='63766'>tedious</span> <span
  m='64000'>to</span> <span m='64278'>create</span> <span
  m='64557'>because</span> <span m='64835'>we</span> <span m='65114'>need</span>
  <span m='65392'>to</span> <span m='65671'>determine</span> <span
  m='65950'>which</span> <span m='66458'>country</span> <span
  m='66966'>lies</span> <span m='67475'>in</span> <span m='67983'>which</span>
  <span m='68491'>region.</span> </p><p><span m='69000'>Shading</span> <span
  m='69253'>all</span> <span m='69506'>countries</span> <span
  m='69759'>in</span> <span m='70012'>a</span> <span m='70265'>region</span>
  <span m='70518'>of</span> <span m='70771'>the</span> <span
  m='71024'>same</span> <span m='71277'>color</span> <span
  m='71530'>might</span> <span m='72037'>be</span> <span
  m='72545'>misleading</span> <span m='73052'>though.</span> </p><p><span
  m='73560'>For</span> <span m='73973'>example,</span> <span
  m='74386'>countries</span> <span m='74799'>in</span> <span
  m='75212'>Latin</span> <span m='75625'>America</span> <span
  m='76039'>will</span> <span m='76524'>send</span> <span
  m='77010'>students</span> <span m='77496'>at</span> <span
  m='77982'>different</span> <span m='78468'>rates,</span> <span
  m='78954'>naturally.</span> </p><p><span m='79440'>But,</span> <span
  m='79643'>if</span> <span m='79846'>we</span> <span m='80050'>color</span>
  <span m='80253'>them</span> <span m='80456'>all</span> <span
  m='80660'>the</span> <span m='80863'>same</span> <span m='81066'>color,</span>
  <span m='81270'>it</span> <span m='81775'>kind</span> <span
  m='82281'>of</span> <span m='82787'>gives</span> <span m='83292'>a</span>
  <span m='83798'>false</span> <span m='84304'>impression.</span> </p><p><span
  m='84810'>As</span> <span m='85033'>it</span> <span m='85257'>turns</span>
  <span m='85481'>out,</span> <span m='85705'>we</span> <span
  m='85928'>actually</span> <span m='86152'>have</span> <span
  m='86376'>access</span> <span m='86600'>to</span> <span m='87145'>per</span>
  <span m='87690'>country</span> <span m='88235'>data.</span> </p><p><span
  m='88780'>So</span> <span m='88977'>we</span> <span m='89175'>will</span>
  <span m='89373'>plot</span> <span m='89571'>that</span> <span
  m='89768'>on</span> <span m='89966'>a</span> <span m='90164'>world</span>
  <span m='90362'>map</span> <span m='90560'>instead</span> <span
  m='90809'>and</span> <span m='91058'>see</span> <span m='91307'>if</span>
  <span m='91556'>it</span> <span m='91805'>is</span> <span m='92054'>an</span>
  <span m='92303'>effective</span> <span m='92552'>way</span> <span
  m='92801'>of</span> <span m='93050'>communicating</span> <span
  m='93300'>where</span> <span m='93766'>students</span> <span
  m='94233'>come</span> <span m='94700'>from</span> <span m='95166'>to</span>
  <span m='95633'>MIT.</span> </p>
embedded_media:
  - uid: aa2b6be09aab68ed3d84ed9ccc3a412b
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 4bsc1II5KK0
  - uid: e3cec965f234b6d13db6b16e3a86e8ae
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 4bsc1II5KK0
  - uid: 018a5e4ff10002d4a3f294aec0c7140c
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/4bsc1II5KK0/default.jpg'
  - uid: ac5f84efcaaa77ae592281c67679000c
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: 4bsc1II5KK0.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-4-a-better-visualization/video-4-a-better-visualization-0/4bsc1II5KK0.srt
  - uid: 2c3c0aecb11beb9301b6b9c0e0fa802f
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: 4bsc1II5KK0.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/visualization/the-good-the-bad-and-the-ugly-visualization-recitation-recitation/video-4-a-better-visualization/video-4-a-better-visualization-0/4bsc1II5KK0.pdf
  - uid: 577ba66c01e56419029e3e98bb088e4c
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 878a960e179b25a19de3caec06a04a60
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: d709df951aabe85bd2ef4df49431da3b
    parent_uid: 88204b6621542992d8f19497dcaa4867
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_7.4.05_300k.mp4
type: courses
layout: video
---
