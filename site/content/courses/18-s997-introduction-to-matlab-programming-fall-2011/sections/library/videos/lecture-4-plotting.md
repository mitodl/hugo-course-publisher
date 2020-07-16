---
about_this_resource_text: >-
  <p><strong>Description:</strong> This video lecture demonstrates how to
  manipulate the style, axes, and position of plots in MATLAB and how to create
  multiple subplots.</p><p><strong> Instructor:</strong> Yossi Farjoun</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WpAXzSJJqW4
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Video-YouTube-Stream
    type: Video
    uid: cd1f218ca1063c1c3f5580646904bf76
  - id: Thumbnail--JPG
    media_location: 'https://img.youtube.com/vi/WpAXzSJJqW4/default.jpg'
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Thumbnail--JPG
    type: Thumbnail
    uid: 6c0a19590219563e07120d5e9cb0b130
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-4-plotting/id586359674?i=126268024
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Video-iTunes U-MP4
    type: Video
    uid: 7b4675ee50a78c88bb10290593c92e34
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT18.S997F11/MIT18_S997F11_lec04_300k.mp4'
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7f90db124e86ae0b2d56329d4f79a794
  - id: vid4-thumbnail.jpg
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-4-plotting/vid4-thumbnail.jpg
    title: vid4-thumbnail.jpg
    type: null
    uid: c4e7bc374d77df0371597e682e94c2a2
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WpAXzSJJqW4
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ffa3d428e8c9b48336ef9409ddb9849c
  - id: WpAXzSJJqW4.srt
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-4-plotting/WpAXzSJJqW4.srt
    title: 3play caption file
    type: null
    uid: f62d00da3a7d30ad3e4a00652c3f5621
  - id: WpAXzSJJqW4.pdf
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-4-plotting/WpAXzSJJqW4.pdf
    title: 3play pdf file
    type: null
    uid: e932aa909b4a47f20720410c3dfa5f5c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6f91e907f754c57faaf97146c2cdacae
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c7743755b8df49d5d6197d5e70a2bad0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e5a97b08cea922b8f0e980eb99fdd0c8
inline_embed_id: '54096314lecture4:plotting62091173'
order_index: 124
parent_uid: 09d33900a14c3db29266e662a30abca3
related_resources_text: ''
short_url: lecture-4-plotting
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s997-introduction-to-matlab-programming-fall-2011/library/videos/lecture-4-plotting
title: 'Lecture 4: Plotting'
transcript: >-
  <p><span m='6750'>[? YOSSI FARJOUN: ?]</span> <span m='6845'>This</span> <span
  m='6940'>is</span> <span m='7090'>[? Doctor ?]</span> <span
  m='7330'>MATLAB,</span> <span m='8300'>Lecture</span> <span m='8960'>4,</span>
  <span m='9580'>Plotting.</span> <span m='10680'>MATLAB</span> <span
  m='11060'>is</span> <span m='11450'>a</span> <span m='11510'>great</span>
  <span m='11720'>tool</span> <span m='11960'>for</span> <span
  m='12080'>making</span> <span m='12440'>plots.</span> <span
  m='13340'>You</span> <span m='13400'>can</span> <span m='13550'>plot</span>
  <span m='13720'>your</span> <span m='13820'>data.</span> <span
  m='14270'>You</span> <span m='14330'>can</span> <span m='14510'>plot</span>
  <span m='14690'>your</span> <span m='14960'>results.</span> <span
  m='15380'>You</span> <span m='15470'>can</span> <span m='15560'>make</span>
  <span m='15770'>very</span> <span m='15980'>elaborate</span> <span
  m='16430'>plots.</span> <span m='17330'>But</span> <span
  m='17450'>first,</span> <span m='17690'>we</span> <span m='17780'>need</span>
  <span m='17960'>to</span> <span m='18050'>learn</span> <span
  m='18260'>how</span> <span m='18380'>to</span> <span m='18440'>make</span>
  <span m='18650'>simple plots.</span> </p><p><span m='19490'>So</span> <span
  m='19830'>let's</span> <span m='20000'>start with a</span> <span
  m='20460'>simple</span> <span m='20810'>plot.</span> <span
  m='22640'>Let's</span> <span m='22840'>plot</span> <span m='23100'>sine</span>
  <span m='23840'>on</span> <span m='24080'>several</span> <span
  m='24410'>points</span> <span m='24800'>between</span> <span
  m='25160'>0</span> <span m='27200'>and</span> <span m='27650'>2 pi.</span>
  <span m='35720'>So</span> <span m='35900'>here</span> <span
  m='36110'>we</span> <span m='36190'>go,</span> <span m='36560'>I've</span>
  <span m='36660'>made</span> <span m='36850'>the</span> <span
  m='36940'>points.</span> <span m='37910'>I</span> <span m='38290'>put</span>
  <span m='38890'>x</span> <span m='39210'>versus</span> <span
  m='39760'>sine</span> <span m='40140'>of</span> <span m='40410'>x.</span>
  <span m='43950'>I'm going to</span> <span m='44450'>dock this</span> <span
  m='44950'>figure.</span> </p><p><span m='47380'>Great,</span> <span
  m='47680'>so</span> <span m='47890'>here</span> <span m='48140'>is</span>
  <span m='48470'>x versus</span> <span m='48805'>sine</span> <span
  m='49140'>x.</span> <span m='49690'>I</span> <span m='49780'>can</span> <span
  m='49960'>do</span> <span m='50110'>x versus</span> <span
  m='52500'>cosine</span> <span m='52795'>x.</span> <span m='55210'>I</span>
  <span m='55270'>can</span> <span m='55420'>always</span> <span
  m='55710'>also</span> <span m='56050'>plot</span> <span m='57300'>sine</span>
  <span m='57560'>x</span> <span m='59510'>versus</span> <span
  m='59780'>cosine</span> <span m='60050'>x.</span> <span m='60680'>So</span>
  <span m='60790'>the</span> <span m='60970'>x</span> <span m='61390'>is</span>
  <span m='61570'>the</span> <span m='61690'>sine,</span> <span
  m='62140'>and</span> <span m='62260'>the</span> <span m='62350'>y</span> <span
  m='62560'>is</span> <span m='62710'>the</span> <span m='62830'>cosine.</span>
  <span m='65269'>And</span> <span m='65450'>there it</span> <span
  m='65590'>is.</span> </p><p><span m='65800'>It's supposed to</span> <span
  m='66250'>be</span> <span m='66370'>a circle.</span> <span m='66760'>It</span>
  <span m='66830'>looks</span> <span m='67060'>like</span> <span
  m='67240'>an</span> <span m='67390'>ellipse,</span> <span m='67750'>but</span>
  <span m='67870'>notice</span> <span m='68230'>it</span> <span
  m='68320'>goes</span> <span m='68530'>from</span> <span m='68620'>minus</span>
  <span m='68920'>1</span> <span m='69070'>to</span> <span m='69190'>1,</span>
  <span m='70020'>and from</span> <span m='70150'>minus 1 to</span> <span
  m='70630'>1. So</span> <span m='70840'>if</span> <span m='70930'>you</span>
  <span m='71020'>want</span> <span m='71140'>to</span> <span
  m='71200'>make</span> <span m='71680'>it</span> <span m='71830'>look</span>
  <span m='72040'>like</span> <span m='72220'>a</span> <span
  m='72280'>circle,</span> <span m='72830'>you</span> <span m='72850'>can</span>
  <span m='74050'>issue</span> <span m='74260'>the</span> <span
  m='74410'>command</span> <span m='75150'>axis</span> <span
  m='75660'>square.</span> <span m='77560'>That</span> <span
  m='77740'>looks</span> <span m='78010'>like</span> <span m='78170'>a
  circle.</span> </p><p><span m='80140'>But</span> <span m='80370'>what
  if</span> <span m='80510'>you</span> <span m='80620'>wan it</span> <span
  m='80830'>to</span> <span m='80950'>be</span> <span m='81140'>red
  circle?</span> <span m='82390'>Then</span> <span m='82510'>you</span> <span
  m='82630'>can add</span> <span m='83770'>the</span> <span
  m='83860'>line</span> <span m='84310'>style,</span> <span m='84670'>r.</span>
  <span m='85896'>You still have to</span> <span m='86330'>tell it</span> <span
  m='86590'>it</span> <span m='86750'>to be</span> <span
  m='86930'>square.</span> </p><p><span m='92870'>You</span> <span
  m='92960'>can</span> <span m='93080'>put</span> <span m='93560'>more</span>
  <span m='93890'>than</span> <span m='94070'>one</span> <span
  m='94730'>command,</span> <span m='95560'>more</span> <span
  m='95720'>than</span> <span m='95830'>one</span> <span m='97160'>plot</span>
  <span m='97520'>on</span> <span m='97640'>one</span> <span
  m='97850'>figure.</span> <span m='98360'>So</span> <span m='98570'>you</span>
  <span m='98720'>can</span> <span m='98900'>do</span> <span m='99230'>the
  following,</span> <span m='102300'>hold,</span> <span m='105430'>so</span>
  <span m='105690'>now it's</span> <span m='105960'>going</span> <span
  m='106020'>to</span> <span m='106150'>be</span> <span m='106390'>held.</span>
  <span m='106750'>Hold</span> <span m='107080'>toggles</span> <span
  m='107290'>it.</span> <span m='108240'>If you</span> <span
  m='108490'>hold</span> <span m='108730'>again,</span> <span
  m='109140'>it</span> <span m='109270'>will be</span> <span
  m='109450'>off.</span> <span m='109870'>So</span> <span m='110335'>I'm going
  to</span> <span m='110800'>hold,</span> <span m='111210'>or</span> <span
  m='111370'>you can</span> <span m='111490'>say</span> <span
  m='111640'>hold</span> <span m='111940'>on,</span> <span m='112375'>and</span>
  <span m='112810'>that</span> <span m='112950'>will</span> <span
  m='113110'>definitely</span> <span m='113410'>be</span> <span
  m='113560'>on.</span> </p><p><span m='114075'>And</span> <span m='114350'>now,
  I</span> <span m='114800'>want to</span> <span m='115100'>plot,</span> <span
  m='115870'>not</span> <span m='116240'>x,</span> <span m='116530'>but</span>
  <span m='116710'>I</span> <span m='116810'>want</span> <span
  m='117340'>3</span> <span m='117400'>times</span> <span m='117650'>x,</span>
  <span m='118000'>and</span> <span m='118350'>not</span> <span
  m='118640'>x</span> <span m='119050'>here,</span> <span m='119290'>but</span>
  <span m='119730'>5 times</span> <span m='120170'>x.</span> <span
  m='121490'>And</span> <span m='121770'>I</span> <span m='121910'>want
  it</span> <span m='122040'>to</span> <span m='122180'>be</span> <span
  m='123240'>black.</span> <span m='124860'>So</span> <span
  m='125320'>here's</span> <span m='125590'>my</span> <span
  m='126150'>[INAUDIBLE]</span> <span m='126790'>figure</span> <span
  m='127360'>on</span> <span m='127540'>top</span> <span m='127900'>of</span>
  <span m='128080'>the circle.</span> </p><p><span m='132290'>I've
  already</span> <span m='132400'>shown</span> <span m='132620'>you</span> <span
  m='132850'>how</span> <span m='133000'>to</span> <span
  m='133090'>change</span> <span m='133390'>color.</span> <span
  m='133860'>There's</span> <span m='134050'>a</span> <span
  m='134110'>few</span> <span m='134290'>things</span> <span
  m='134530'>you</span> <span m='134620'>can</span> <span
  m='134830'>change.</span> <span m='135410'>If</span> <span
  m='135510'>you</span> <span m='135610'>look</span> <span m='135700'>at</span>
  <span m='135910'>the</span> <span m='136110'>plot</span> <span
  m='136480'>help</span> <span m='136720'>file,</span> <span
  m='141650'>you</span> <span m='141740'>will</span> <span m='141890'>see</span>
  <span m='142520'>there is a</span> <span m='142810'>lot</span> <span
  m='142970'>of</span> <span m='143090'>information.</span> <span
  m='143880'>But</span> <span m='143990'>here's</span> <span
  m='144230'>the</span> <span m='144290'>information</span> <span
  m='144860'>that</span> <span m='145130'>I</span> <span m='145220'>need
  for</span> <span m='145460'>this.</span> <span m='145580'>These</span> <span
  m='146030'>are</span> <span m='146120'>the</span> <span
  m='146450'>letters</span> <span m='146900'>for</span> <span
  m='147050'>the</span> <span m='147140'>colors.</span> <span
  m='148770'>These</span> <span m='148820'>are</span> <span
  m='148940'>the</span> <span m='148970'>letters</span> <span
  m='149390'>for</span> <span m='149570'>the</span> <span
  m='149690'>markers</span> <span m='149955'>I'll</span> <span
  m='150220'>show</span> <span m='150370'>you</span> <span m='150560'>in
  a</span> <span m='150780'>sec.</span> <span m='151470'>And</span> <span
  m='151980'>these</span> <span m='152300'>are</span> <span
  m='152420'>the</span> <span m='153320'>symbols</span> <span
  m='154010'>for</span> <span m='154220'>the</span> <span m='154390'>line</span>
  <span m='154790'>style.</span> </p><p><span m='155400'>So</span> <span
  m='155510'>let's</span> <span m='155650'>see</span> <span
  m='155800'>how</span> <span m='155910'>that</span> <span
  m='156110'>makes</span> <span m='156380'>a</span> <span
  m='156440'>difference.</span> <span m='158441'>First</span> <span
  m='158920'>I'll</span> <span m='159030'>turn</span> <span
  m='159300'>off</span> <span m='159540'>the</span> <span
  m='159670'>hold.</span> <span m='164890'>So here,</span> <span
  m='165380'>I've</span> <span m='165880'>turned</span> <span
  m='166140'>off</span> <span m='166260'>the hold.</span> <span m='167150'>And
  now</span> <span m='167280'>I'm</span> <span m='167400'>going</span> <span
  m='167580'>to</span> <span m='167700'>plot</span> <span m='168730'>this</span>
  <span m='169160'>with</span> <span m='170900'>this type</span> <span
  m='171240'>line</span> <span m='171540'>style.</span> <span
  m='171770'>So</span> <span m='172130'>that's</span> <span
  m='172340'>the</span> <span m='172470'>dotted</span> <span
  m='172860'>line</span> <span m='173200'>style.</span> <span
  m='174930'>And</span> <span m='175380'>the</span> <span
  m='175500'>markers</span> <span m='175820'>going to</span> <span
  m='176140'>be</span> <span m='176660'>this</span> <span
  m='178840'>right-pointing</span> <span m='179340'>triangle.</span>
  </p><p><span m='184300'>I</span> <span m='184350'>can</span> <span
  m='184630'>also</span> <span m='185090'>change</span> <span
  m='185780'>the</span> <span m='185960'>line</span> <span
  m='186790'>width.</span> <span m='191820'>There's a</span> <span
  m='192300'>typo.</span> <span m='193672'>There we go.</span> <span
  m='195130'>That</span> <span m='195460'>makes</span> <span
  m='195700'>it</span> <span m='195790'>a</span> <span m='196270'>little</span>
  <span m='196510'>bit</span> <span m='196630'>difficult</span> <span
  m='197060'>to see,</span> <span m='197290'>so let's</span> <span
  m='197530'>make a</span> <span m='197810'>smaller</span> <span m='198040'>line
  width.</span> <span m='199008'>There we</span> <span m='199492'>go.</span>
  <span m='200460'>That's a</span> <span m='200730'>nice,</span> <span
  m='201000'>thick</span> <span m='201370'>line,</span> <span
  m='202330'>if</span> <span m='202450'>we</span> <span m='202540'>need</span>
  <span m='202760'>such.</span> <span m='204956'>You can</span> <span
  m='205390'>also</span> <span m='205660'>just</span> <span
  m='205900'>change</span> <span m='206200'>the</span> <span
  m='206320'>marker</span> <span m='206710'>size,</span> <span m='214680'>if we
  need,</span> <span m='215080'>without</span> <span m='215410'>changing</span>
  <span m='215770'>the line</span> <span m='216045'>width.</span> </p><p><span
  m='217680'>You can</span> <span m='217940'>have a</span> <span
  m='218100'>title.</span> <span m='225380'>We can</span> <span
  m='225490'>add</span> <span m='225710'>an</span> <span m='225930'>x</span>
  <span m='226130'>label</span> <span m='232550'>and</span> <span m='233020'>a
  y</span> <span m='233230'>label.</span> <span m='243450'>And</span> <span
  m='243580'>we</span> <span m='243640'>can</span> <span
  m='243790'>change</span> <span m='244030'>the</span> <span
  m='244150'>axis.</span> <span m='244750'>We</span> <span m='244840'>can</span>
  <span m='244960'>change</span> <span m='245200'>the</span> <span
  m='245260'>axis</span> <span m='245590'>by</span> <span
  m='245900'>using</span> <span m='246190'>the</span> <span
  m='246890'>magnifying</span> <span m='247530'>glass.</span> <span
  m='250660'>That</span> <span m='250780'>was a</span> <span
  m='250980'>double</span> <span m='251350'>click</span> <span
  m='251570'>to</span> <span m='251690'>go</span> <span m='251840'>back</span>
  <span m='252020'>to</span> <span m='252110'>the</span> <span
  m='252200'>original</span> <span m='252500'>view.</span> <span
  m='257310'>Or</span> <span m='258000'>I</span> <span m='258060'>could</span>
  <span m='258200'>change</span> <span m='258490'>it</span> <span
  m='258690'>directly</span> <span m='259170'>from</span> <span
  m='259320'>the</span> <span m='259470'>command line</span> <span
  m='261390'>by</span> <span m='261480'>setting</span> <span
  m='262000'>what</span> <span m='262150'>I</span> <span m='262240'>want</span>
  <span m='262440'>the</span> <span m='262520'>axis</span> <span
  m='262860'>to</span> <span m='262980'>be.</span> <span m='263200'>So</span>
  <span m='263250'>let's</span> <span m='263700'>zoom</span> <span
  m='264060'>into</span> <span m='264270'>the</span> <span
  m='264390'>first</span> <span m='264720'>quadrant,</span> <span
  m='265830'>x,</span> <span m='267350'>x,</span> <span m='268300'>y,</span>
  <span m='268775'>y.</span> <span m='271150'>There's</span> <span
  m='271350'>the first</span> <span m='271570'>quadrant,</span> <span
  m='272340'>see?</span> <span m='273130'>From</span> <span m='273310'>0</span>
  <span m='273650'>to</span> <span m='273910'>1,</span> <span
  m='275192'>from</span> <span m='275680'>0 to--</span> <span
  m='277280'>this</span> <span m='277510'>is the</span> <span
  m='277790'>first</span> <span m='278010'>quadrant.</span> </p><p><span
  m='284470'>I</span> <span m='284850'>can</span> <span m='284980'>work</span>
  <span m='285120'>with</span> <span m='285270'>multiple</span> <span
  m='285750'>figures</span> <span m='286320'>if</span> <span m='286470'>I</span>
  <span m='286690'>undock</span> <span m='290340'>and</span> <span
  m='290430'>close</span> <span m='290820'>this</span> <span
  m='291350'>windows.</span> <span m='293060'>And</span> <span
  m='293670'>what</span> <span m='293790'>I'll</span> <span
  m='293940'>do,</span> <span m='294060'>is</span> <span m='294240'>I'll</span>
  <span m='294930'>make</span> <span m='295190'>my</span> <span
  m='295550'>MATLAB</span> <span m='296010'>window</span> <span
  m='296380'>small,</span> <span m='296740'>so</span> <span
  m='296970'>you</span> <span m='297060'>can</span> <span m='297270'>see</span>
  <span m='297630'>where the</span> <span m='297890'>figures</span> <span
  m='298170'>are.</span> <span m='301502'>Here we go.</span> <span m='302460'>So
  here</span> <span m='302530'>is the</span> <span m='302820'>undocked</span>
  <span m='303160'>figure.</span> </p><p><span m='307560'>I</span> <span
  m='307670'>can</span> <span m='308010'>work</span> <span
  m='308210'>with</span> <span m='308330'>multiple</span> <span
  m='308780'>figures.</span> <span m='309345'>I can open</span> <span
  m='309680'>another</span> <span m='310080'>figure,</span> <span
  m='310570'>so</span> <span m='310800'>here</span> <span m='310980'>is</span>
  <span m='311220'>another</span> <span m='311500'>figure. So I have</span>
  <span m='311920'>Figure</span> <span m='312280'>1</span> <span m='312610'>and
  Figure</span> <span m='312940'>2.</span> <span m='318060'>And</span> <span
  m='318280'>I</span> <span m='318380'>can</span> <span m='318560'>access</span>
  <span m='318980'>them</span> <span m='319310'>by</span> <span
  m='320720'>either</span> <span m='320990'>clicking</span> <span
  m='321380'>on</span> <span m='321560'>them</span> <span
  m='322190'>before</span> <span m='322550'>I</span> <span m='323050'>issue
  my</span> <span m='323390'>plot</span> <span m='323730'>command,</span> <span
  m='324080'>or</span> <span m='324860'>from the</span> <span
  m='325220'>command</span> <span m='325520'>line,</span> <span
  m='326450'>figure</span> <span m='327710'>2</span> <span
  m='328150'>will</span> <span m='328280'>pop</span> <span m='328550'>up</span>
  <span m='328730'>Figure</span> <span m='329010'>2.</span> <span m='329430'>And
  now,</span> <span m='329720'>if</span> <span m='329900'>I</span> <span
  m='330050'>plot</span> <span m='330350'>something,</span> <span
  m='331750'>plot</span> <span m='332210'>sine</span> <span m='332620'>x</span>
  <span m='333640'>cosine</span> <span m='334275'>x</span> <span
  m='336200'>in</span> <span m='336510'>green,</span> <span
  m='338046'>then</span> <span m='338183'>it</span> <span m='338320'>will</span>
  <span m='338458'>plot it to</span> <span m='338870'>this one.</span>
  </p><p><span m='341810'>I</span> <span m='341930'>can</span> <span
  m='342350'>change</span> <span m='342650'>the</span> <span
  m='342770'>location</span> <span m='343430'>of</span> <span
  m='343520'>these</span> <span m='343850'>plots</span> <span
  m='344180'>by</span> <span m='344390'>looking</span> <span m='344810'>at
  the</span> <span m='345170'>following.</span> <span m='349736'>So</span> <span
  m='350220'>this</span> <span m='350460'>tells</span> <span
  m='350670'>me</span> <span m='350910'>where</span> <span
  m='351330'>this</span> <span m='351510'>plot</span> <span
  m='352070'>is.</span> <span m='352900'>This</span> <span m='353190'>is
  the</span> <span m='353430'>starting</span> <span m='353685'>x,</span> <span
  m='353940'>starting</span> <span m='354455'>y,</span> <span
  m='354730'>width,</span> <span m='355130'>and</span> <span
  m='355590'>height.</span> <span m='356395'>And</span> <span
  m='356840'>I</span> <span m='356940'>can</span> <span m='357150'>change</span>
  <span m='357405'>all</span> <span m='357660'>of</span> <span
  m='357870'>these</span> <span m='361140'>by</span> <span
  m='361320'>setting</span> <span m='361920'>the</span> <span
  m='362020'>position.</span> <span m='364510'>So instead</span> <span
  m='364820'>of</span> <span m='366240'>what</span> <span m='366390'>it</span>
  <span m='366540'>is,</span> <span m='366750'>let's</span> <span m='366990'>set
  it to</span> <span m='367290'>something else.</span> <span
  m='376980'>So</span> <span m='377120'>now it</span> <span
  m='377940'>became</span> <span m='378350'>this</span> <span m='378550'>small
  thing.</span> <span m='378840'>Let's</span> <span m='379130'>bring</span>
  <span m='379320'>it</span> <span m='379510'>up</span> <span
  m='379690'>a</span> <span m='379850'>bit,</span> <span m='380200'>so</span>
  <span m='380380'>that</span> <span m='380500'>you</span> <span
  m='380620'>can</span> <span m='380800'>see it</span> <span
  m='381140'>too.</span> <span m='382580'>There we</span> <span
  m='382970'>go.</span> </p><p><span m='386650'>I</span> <span m='387110'>can
  add</span> <span m='387710'>text</span> <span m='390160'>to my</span> <span
  m='390480'>figure.</span> <span m='392775'>I have</span> <span
  m='393080'>to</span> <span m='393360'>say</span> <span m='393600'>what</span>
  <span m='393810'>the</span> <span m='393960'>x</span> <span
  m='394260'>is,</span> <span m='395126'>0,</span> <span m='395572'>what</span>
  <span m='396020'>the</span> <span m='396140'>y is,</span> <span
  m='396840'>0,</span> <span m='398550'>and</span> <span m='398700'>then</span>
  <span m='398940'>what</span> <span m='399120'>the</span> <span
  m='399190'>text</span> <span m='399610'>is.</span> <span m='401830'>So</span>
  <span m='401970'>that</span> <span m='402390'>puts</span> <span
  m='402960'>it</span> <span m='403850'>at</span> <span m='404130'>this</span>
  <span m='404430'>point.</span> <span m='404770'>0,</span> <span
  m='405110'>0</span> <span m='405450'>is</span> <span m='405600'>the</span>
  <span m='405690'>beginning</span> <span m='406110'>of</span> <span
  m='406230'>the</span> <span m='406350'>text.</span> </p><p><span
  m='411920'>I</span> <span m='411980'>can</span> <span m='412130'>clear
  the</span> <span m='412450'>figure,</span> <span m='412850'>without</span>
  <span m='413120'>closing</span> <span m='413510'>it.</span> <span
  m='415490'>I</span> <span m='415530'>can</span> <span
  m='416010'>separate</span> <span m='416275'>it</span> <span
  m='416540'>into</span> <span m='416820'>subplots.</span> <span
  m='419880'>Let's</span> <span m='420030'>say,</span> <span
  m='420690'>one</span> <span m='420960'>row</span> <span m='421170'>of</span>
  <span m='421460'>plots,</span> <span m='421810'>two</span> <span
  m='422020'>columns</span> <span m='422340'>of plots.</span> <span
  m='422820'>Here's</span> <span m='423090'>the</span> <span
  m='423210'>first</span> <span m='423600'>plot.</span> <span m='425340'>And
  in</span> <span m='425570'>this</span> <span m='425760'>first</span> <span
  m='426000'>plot,</span> <span m='426300'>I'm going</span> <span
  m='426390'>to</span> <span m='426810'>plot</span> <span m='429220'>this</span>
  <span m='429420'>one.</span> <span m='430860'>And</span> <span
  m='430980'>then</span> <span m='431190'>the</span> <span
  m='431250'>second</span> <span m='431650'>plot,</span> <span
  m='432330'>I</span> <span m='432670'>will</span> <span m='432950'>plot</span>
  <span m='435102'>this</span> <span m='435570'>one.</span> </p><p><span
  m='436038'>Oh,</span> <span m='436510'>that's</span> <span m='436650'>a</span>
  <span m='436710'>bit</span> <span m='436860'>messy.</span> <span
  m='437220'>Let</span> <span m='437430'>me</span> <span m='437580'>make</span>
  <span m='437900'>this</span> <span m='438120'>bigger,</span> <span
  m='438390'>so you</span> <span m='438660'>can see</span> <span
  m='438960'>what's going</span> <span m='439200'>on.</span> <span
  m='442220'>There you</span> <span m='442460'>go,</span> <span
  m='443510'>so</span> <span m='443960'>here</span> <span m='444080'>is</span>
  <span m='444140'>a</span> <span m='444450'>subplot.</span> <span
  m='444680'>This</span> <span m='444860'>is</span> <span m='444980'>the</span>
  <span m='445070'>first</span> <span m='445330'>subplot.</span> <span
  m='445790'>This is</span> <span m='445910'>the</span> <span
  m='446050'>second</span> <span m='446310'>subplot.</span> <span
  m='448390'>So,</span> <span m='448630'>I</span> <span
  m='448690'>encourage</span> <span m='449080'>you</span> <span
  m='449170'>to</span> <span m='449290'>read</span> <span m='449470'>the</span>
  <span m='449590'>help</span> <span m='449830'>files</span> <span
  m='450400'>on</span> <span m='450550'>all of</span> <span
  m='450760'>the</span> <span m='450850'>commands</span> <span
  m='451210'>that</span> <span m='451300'>you</span> <span m='451390'>saw</span>
  <span m='451720'>here</span> <span m='451930'>today,</span> <span
  m='453350'>as</span> <span m='453550'>a</span> <span m='453640'>way</span>
  <span m='453820'>to</span> <span m='453970'>learn</span> <span
  m='454300'>how</span> <span m='454450'>to</span> <span m='455140'>deal</span>
  <span m='455350'>with</span> <span m='455560'>plotting</span> <span
  m='455860'>in</span> <span m='456160'>MATLAB.</span> </p>
uid: c7743755b8df49d5d6197d5e70a2bad0
type: courses
layout: video
---
