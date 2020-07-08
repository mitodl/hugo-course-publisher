---
about_this_resource_text: >-
  <p><strong>Descriptions: </strong>The Lorenz chaotic attractor was discovered
  by Edward Lorenz in 1963 when he was investigating a simplified model of
  atmospheric convection. It is a nonlinear system of three differential
  equations. With the most commonly used values of three parameters, there are
  two unstable critical points. The solutions remain bounded, but orbit
  chaotically around these two points. The program &quot;lorenzgui&quot;
  provides an app for investigating the Lorenz attractor. The resulting 3-D plot
  looks like a butterfly.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Q_f1vRLAENA
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Video-YouTube-Stream
    type: Video
    uid: 0a746e6d3eb57e1cf58331a97ac39cc1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Q_f1vRLAENA/default.jpg'
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 56aee83e4312bb2ec1f65ad4c468a03a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Q_f1vRLAENA
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 0b43713ab137d4d53895dc6d0a565549
  - id: Q_f1vRLAENA.srt
    parent_uid: 66517c9c49c59520a021a87282230f24
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/lorenz-attractor-and-chaos/Q_f1vRLAENA.srt
    title: 3play caption file
    type: null
    uid: c5aa53d0a30f354dcf63e32ad6a165f6
  - id: Q_f1vRLAENA.pdf
    parent_uid: 66517c9c49c59520a021a87282230f24
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/lorenz-attractor-and-chaos/Q_f1vRLAENA.pdf
    title: 3play pdf file
    type: null
    uid: 229a43b80a3915228049830b107c4b8f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ed611432e8a4d1f6b50bf251fdbfa7ba
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 36494deb961a05af1e968b2a1fa7ee0b
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Video-iTunes U-MP4
    type: Video
    uid: 775c17b3c17ecce92aa844780628c38b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_12_300k.mp4
    parent_uid: 66517c9c49c59520a021a87282230f24
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7d0372c0ab8145845d1f380bdc599e52
inline_embed_id: 99644762lorenzattractorandchaos50343480
order_index: 684
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: lorenz-attractor-and-chaos
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/lorenz-attractor-and-chaos
title: Lorenz Attractor and Chaos
transcript: >-
  <p><span m='4180'>CLEVE MOLER: The</span> <span m='4530'>Lorenz</span> <span
  m='5470'>strange</span> <span m='5990'>attractor,</span> <span
  m='6740'>perhaps</span> <span m='7160'>the</span> <span
  m='7270'>world's</span> <span m='7630'>most</span> <span
  m='8780'>famous</span> <span m='9380'>and</span> <span
  m='9720'>extensively</span> <span m='10450'>studied</span> <span
  m='11770'>ordinary</span> <span m='12270'>differential</span> <span
  m='12790'>equations.</span> <span m='14510'>They</span> <span
  m='14650'>were</span> <span m='14820'>discovered</span> <span
  m='15410'>in</span> <span m='15500'>1963</span> <span m='16790'>by</span>
  <span m='17050'>an</span> <span m='17210'>MIT</span> <span
  m='19270'>mathematician</span> <span m='20270'>and</span> <span
  m='20460'>meteorologist,</span> <span m='21460'>Edward</span> <span
  m='22130'>Lorenz.</span> <span m='23820'>They</span> <span
  m='24130'>started</span> <span m='24630'>the</span> <span
  m='24730'>field</span> <span m='25150'>of</span> <span m='25420'>chaos.</span>
  </p><p><span m='27780'>They're</span> <span m='28000'>famous</span> <span
  m='28560'>because</span> <span m='29110'>they</span> <span
  m='30400'>are</span> <span m='30540'>sensitive</span> <span
  m='31400'>to</span> <span m='32270'>their</span> <span
  m='32680'>initial</span> <span m='33240'>conditions.</span> <span
  m='34380'>Small</span> <span m='34810'>changes</span> <span
  m='35340'>in</span> <span m='35470'>the</span> <span m='35560'>initial</span>
  <span m='36040'>conditions</span> <span m='36790'>have</span> <span
  m='38130'>a</span> <span m='38230'>big</span> <span m='38480'>effect</span>
  <span m='38990'>on</span> <span m='39200'>the</span> <span
  m='39330'>solution.</span> <span m='41070'>Lorenz is</span> <span
  m='41780'>famous</span> <span m='42200'>for</span> <span
  m='42350'>talking</span> <span m='42750'>about</span> <span
  m='43020'>the</span> <span m='43110'>butterfly</span> <span
  m='43720'>effect.</span> <span m='44780'>How</span> <span
  m='45480'>flapping</span> <span m='46130'>of</span> <span
  m='46250'>butterflies'</span> <span m='47230'>wings</span> <span
  m='48750'>can</span> <span m='49710'>affect</span> <span m='50210'>the</span>
  <span m='50300'>weather.</span> </p><p><span m='51820'>A</span> <span
  m='53500'>butterfly</span> <span m='54200'>flying</span> <span
  m='54700'>in</span> <span m='54830'>Brazil</span> <span m='55560'>can</span>
  <span m='56610'>cause</span> <span m='57000'>a</span> <span
  m='57250'>tornado</span> <span m='58000'>and</span> <span
  m='58200'>Texas</span> <span m='59840'>is</span> <span m='60080'>a</span>
  <span m='61830'>flamboyant</span> <span m='62660'>version</span> <span
  m='63200'>of</span> <span m='64290'>a</span> <span m='64440'>talk he</span>
  <span m='64940'>gave.</span> <span m='68410'>The</span> <span
  m='69880'>equations</span> <span m='70510'>are</span> <span
  m='70640'>almost</span> <span m='71070'>linear.</span> <span
  m='72280'>There's</span> <span m='72540'>two</span> <span
  m='72840'>quadratic</span> <span m='73720'>terms</span> <span
  m='74320'>here.</span> <span m='76320'>The</span> <span
  m='76610'>equations</span> <span m='77290'>come</span> <span
  m='77540'>out</span> <span m='77720'>of</span> <span m='77850'>a</span> <span
  m='77920'>model</span> <span m='78380'>of</span> <span m='80390'>fluid</span>
  <span m='80880'>flow.</span> <span m='83450'>The Earth's</span> <span
  m='83860'>atmosphere</span> <span m='85210'>is</span> <span m='85380'>a</span>
  <span m='85450'>fluid.</span> </p><p><span m='86710'>But</span> <span
  m='87030'>this</span> <span m='87300'>range</span> <span m='87840'>of</span>
  <span m='88040'>parameters,</span> <span m='89240'>the</span> <span
  m='89410'>three</span> <span m='89710'>parameters,</span> <span
  m='90850'>sigma,</span> <span m='91370'>rho,</span> <span m='91600'>and</span>
  <span m='91790'>beta,</span> <span m='92910'>these</span> <span
  m='93270'>are</span> <span m='93450'>outside</span> <span m='94090'>the</span>
  <span m='94870'>range</span> <span m='95420'>that</span> <span
  m='95810'>actually</span> <span m='97310'>represents</span> <span
  m='98180'>the</span> <span m='99170'>Earth's</span> <span
  m='99500'>atmosphere.</span> <span m='101830'>We're</span> <span
  m='102080'>going</span> <span m='102230'>to</span> <span
  m='102310'>take</span> <span m='102540'>a</span> <span m='102600'>look</span>
  <span m='102810'>at</span> <span m='102940'>these</span> <span
  m='103240'>parameters.</span> <span m='103840'>These</span> <span
  m='104090'>are</span> <span m='104130'>the</span> <span m='104220'>most</span>
  <span m='104540'>commonly</span> <span m='105050'>used</span> <span
  m='105990'>parameters.</span> </p><p><span m='107230'>But</span> <span
  m='107430'>we're</span> <span m='107660'>going</span> <span
  m='107790'>to</span> <span m='107860'>be</span> <span
  m='108010'>interested</span> <span m='108640'>in</span> <span
  m='108970'>other</span> <span m='109260'>values</span> <span
  m='109880'>of</span> <span m='113790'>rho</span> <span m='114310'>as</span>
  <span m='114450'>well.</span> <span m='121510'>But</span> <span
  m='121690'>I'm</span> <span m='121870'>a</span> <span m='121900'>matrix</span>
  <span m='122530'>guy,</span> <span m='123020'>so</span> <span
  m='123290'>I</span> <span m='123470'>like</span> <span m='123680'>to</span>
  <span m='123830'>write</span> <span m='124110'>the</span> <span
  m='124200'>equations</span> <span m='124830'>in</span> <span
  m='124940'>this</span> <span m='125220'>form.</span> <span m='126090'>Y</span>
  <span m='126320'>dot</span> <span m='126600'>equals</span> <span
  m='126930'>Ay.</span> <span m='128400'>It</span> <span m='128530'>looks</span>
  <span m='128800'>linear</span> <span m='129720'>except</span> <span
  m='130330'>A</span> <span m='130580'>depends</span> <span
  m='131080'>upon</span> <span m='131410'>y.</span> <span m='132716'>And</span>
  <span m='133090'>so</span> <span m='133530'>there's</span> <span
  m='133840'>y2,</span> <span m='134810'>the</span> <span
  m='134910'>second</span> <span m='135310'>component</span> <span
  m='135820'>of</span> <span m='135940'>y,</span> <span
  m='136900'>appears</span> <span m='137560'>in</span> <span
  m='137830'>the</span> <span m='137900'>matrix</span> <span
  m='138490'>A.</span> </p><p><span m='140500'>This</span> <span
  m='140790'>helps</span> <span m='142100'>me</span> <span
  m='142740'>study</span> <span m='143180'>the</span> <span
  m='143310'>differential</span> <span m='143920'>equations</span> <span
  m='146100'>in</span> <span m='146290'>this</span> <span
  m='146530'>form.</span> <span m='149210'>This</span> <span
  m='149410'>matrix</span> <span m='149960'>form</span> <span
  m='151790'>is</span> <span m='151980'>convenient</span> <span
  m='152580'>for</span> <span m='152690'>finding</span> <span
  m='153110'>the</span> <span m='153230'>critical</span> <span
  m='153690'>points.</span> <span m='154920'>Put</span> <span
  m='155080'>a</span> <span m='155140'>parameter</span> <span
  m='155770'>eta</span> <span m='156030'>in</span> <span m='156350'>place</span>
  <span m='156660'>of</span> <span m='156800'>y2.</span> <span
  m='158760'>Try</span> <span m='159000'>to</span> <span m='159090'>make</span>
  <span m='159350'>the</span> <span m='159420'>matrix</span> <span
  m='160010'>singular.</span> <span m='161430'>That</span> <span
  m='161640'>happens</span> <span m='162170'>when</span> <span
  m='162400'>eta</span> <span m='162680'>is</span> <span m='163110'>beta</span>
  <span m='163540'>times</span> <span m='163870'>the</span> <span
  m='163970'>square</span> <span m='164310'>root</span> <span
  m='164450'>of</span> <span m='164720'>rho</span> <span m='164780'>minus</span>
  <span m='165230'>1.</span> </p><p><span m='166300'>And</span> <span
  m='166450'>then</span> <span m='166620'>the</span> <span
  m='166710'>null</span> <span m='167060'>vector</span> <span
  m='168130'>is</span> <span m='168580'>the</span> <span
  m='171200'>critical</span> <span m='171700'>point.</span> <span
  m='173020'>If</span> <span m='173180'>we</span> <span m='174190'>take</span>
  <span m='174640'>this</span> <span m='174950'>vector</span> <span
  m='176090'>as</span> <span m='176590'>the</span> <span
  m='177100'>starting</span> <span m='177780'>value</span> <span
  m='178210'>of</span> <span m='178310'>the</span> <span
  m='178410'>solution,</span> <span m='179690'>then</span> <span
  m='180540'>the</span> <span m='180680'>solution</span> <span
  m='181180'>stays</span> <span m='181700'>there.</span> <span
  m='182430'>Y</span> <span m='182760'>prime</span> <span m='184450'>is</span>
  <span m='184700'>0.</span> <span m='186250'>This</span> <span
  m='186600'>is</span> <span m='186790'>an</span> <span
  m='186980'>unstable</span> <span m='189340'>critical</span> <span
  m='189840'>point.</span> <span m='191090'>And</span> <span
  m='192880'>values</span> <span m='194820'>near</span> <span
  m='195190'>this</span> <span m='195550'>solution</span> <span
  m='198530'>deviate</span> <span m='199240'>the</span> <span
  m='199360'>solution.</span> <span m='202090'>Won't</span> <span
  m='202380'>stay</span> <span m='202790'>near</span> <span
  m='202970'>the</span> <span m='203140'>solution.</span> </p><p><span
  m='207210'>In</span> <span m='207430'>May</span> <span m='208110'>of</span>
  <span m='208800'>2014,</span> <span m='209920'>I</span> <span
  m='210090'>wrote</span> <span m='210440'>a</span> <span
  m='210880'>series</span> <span m='211570'>and</span> <span
  m='212720'>blog</span> <span m='213240'>post</span> <span m='213720'>in</span>
  <span m='214360'>Cleve's</span> <span m='214790'>Corner</span> <span
  m='215950'>about</span> <span m='217210'>the</span> <span
  m='217360'>MATLAB</span> <span m='217940'>ordinary</span> <span
  m='218440'>differential</span> <span m='219010'>equations</span> <span
  m='220010'>suite.</span> <span m='221240'>And</span> <span m='222270'>I</span>
  <span m='224490'>used</span> <span m='225030'>the</span> <span
  m='225770'>Lorenz</span> <span m='226270'>attractor</span> <span
  m='227660'>as</span> <span m='228860'>an</span> <span
  m='229390'>example.</span> <span m='230660'>And</span> <span
  m='230880'>I</span> <span m='231040'>included</span> <span m='231690'>a</span>
  <span m='231760'>program</span> <span m='232580'>called</span> <span
  m='233460'>Lorenz</span> <span m='234080'>plot</span> <span
  m='235080'>that</span> <span m='235280'>I'd</span> <span
  m='235510'>like</span> <span m='235780'>to</span> <span m='235850'>use</span>
  <span m='236230'>here.</span> </p><p><span m='242940'>Here's</span> <span
  m='243230'>Lorenz</span> <span m='243770'>plot.</span> <span
  m='246650'>Set</span> <span m='247020'>the</span> <span
  m='247120'>parameters.</span> <span m='249150'>Set</span> <span
  m='249530'>the</span> <span m='249760'>initial</span> <span
  m='250260'>value</span> <span m='250690'>of</span> <span m='250770'>the</span>
  <span m='250850'>matrix</span> <span m='251460'>A.</span> <span
  m='253110'>Here</span> <span m='253280'>is</span> <span m='253400'>the</span>
  <span m='253560'>critical</span> <span m='255270'>point.</span> <span
  m='256720'>Here</span> <span m='257070'>is</span> <span m='257190'>an</span>
  <span m='257250'>initial</span> <span m='257760'>value</span> <span
  m='258200'>near</span> <span m='258480'>the</span> <span
  m='258640'>critical</span> <span m='259180'>point.</span> <span
  m='260950'>Integrate</span> <span m='261649'>from</span> <span
  m='262320'>0</span> <span m='262780'>to</span> <span m='262930'>30.</span>
  <span m='264210'>Use</span> <span m='264590'>ODE</span> <span
  m='265320'>23.</span> <span m='268860'>Give it</span> <span
  m='269230'>a</span> <span m='269310'>function</span> <span
  m='269940'>called</span> <span m='270280'>the</span> <span
  m='270360'>Lorenz</span> <span m='270850'>equation.</span> </p><p><span
  m='272410'>Capture</span> <span m='272960'>the</span> <span
  m='273080'>values</span> <span m='273710'>t</span> <span m='273960'>and</span>
  <span m='274080'>y</span> <span m='275510'>and</span> <span
  m='275740'>then</span> <span m='276370'>plot</span> <span
  m='276770'>the</span> <span m='276870'>solution.</span> <span
  m='278520'>I'm</span> <span m='278710'>going</span> <span m='278870'>to</span>
  <span m='278970'>do</span> <span m='279180'>a</span> <span
  m='279300'>plot</span> <span m='279750'>with</span> <span
  m='280000'>the</span> <span m='280860'>three</span> <span
  m='283150'>components</span> <span m='283840'>offset</span> <span
  m='284440'>from</span> <span m='284650'>each</span> <span
  m='284900'>other.</span> <span m='286100'>And</span> <span
  m='286870'>here's</span> <span m='287260'>an</span> <span
  m='287390'>internal</span> <span m='287980'>function</span> <span
  m='289030'>Lorenz</span> <span m='289510'>equation</span> <span
  m='290960'>that</span> <span m='291180'>is</span> <span
  m='291480'>called</span> <span m='292560'>by</span> <span
  m='292730'>ODE</span> <span m='293370'>23.</span> <span m='294800'>And</span>
  <span m='295040'>it</span> <span m='295430'>continuously,</span> <span
  m='296470'>every</span> <span m='296720'>time</span> <span
  m='297040'>it</span> <span m='297190'>called,</span> <span
  m='298130'>it</span> <span m='298430'>modifies</span> <span
  m='299290'>the</span> <span m='299360'>matrix</span> <span m='299960'>A</span>
  <span m='301180'>updates</span> <span m='301820'>it</span> <span
  m='302020'>with</span> <span m='302290'>the</span> <span m='303060'>new</span>
  <span m='303260'>values</span> <span m='303840'>of</span> <span
  m='303950'>y2.</span> </p><p><span m='305470'>So</span> <span
  m='308250'>let's</span> <span m='308600'>run</span> <span
  m='308880'>that</span> <span m='309180'>function.</span> <span
  m='316800'>And</span> <span m='317590'>here's</span> <span
  m='317920'>the</span> <span m='318080'>output.</span> <span
  m='318820'>Here</span> <span m='319090'>is</span> <span m='319290'>the</span>
  <span m='319860'>three</span> <span m='320270'>components</span> <span
  m='321020'>of</span> <span m='321110'>the</span> <span
  m='321190'>Lorenz</span> <span m='321670'>attractor.</span> <span
  m='322460'>Time</span> <span m='322820'>series</span> <span
  m='323330'>is</span> <span m='323520'>functions</span> <span
  m='324050'>of</span> <span m='324180'>t.</span> <span m='325350'>It's</span>
  <span m='325580'>pretty</span> <span m='325820'>hard</span> <span
  m='326070'>to</span> <span m='326180'>see</span> <span
  m='326380'>what's</span> <span m='326660'>going</span> <span
  m='326940'>on</span> <span m='327200'>here</span> <span
  m='327500'>except</span> <span m='327940'>to</span> <span
  m='328060'>say</span> <span m='328970'>they</span> <span
  m='329150'>start</span> <span m='329630'>out</span> <span
  m='329910'>with</span> <span m='330100'>their</span> <span
  m='330340'>initial</span> <span m='330760'>values,</span> <span
  m='331990'>oscillate</span> <span m='332660'>around</span> <span
  m='333140'>them,</span> <span m='333950'>close</span> <span
  m='334320'>them</span> <span m='334680'>through for</span> <span
  m='334900'>a</span> <span m='334970'>little</span> <span
  m='335210'>while,</span> <span m='336090'>and</span> <span
  m='336280'>then</span> <span m='336510'>begin</span> <span
  m='336930'>to</span> <span m='337040'>deviate.</span> </p><p><span
  m='338920'>And</span> <span m='339260'>it's</span> <span
  m='340340'>hard</span> <span m='340670'>to</span> <span m='340760'>see</span>
  <span m='341060'>what</span> <span m='341320'>they're</span> <span
  m='341530'>doing.</span> <span m='342000'>They're</span> <span
  m='342160'>just</span> <span m='342530'>oscillating</span> <span
  m='343970'>in</span> <span m='344790'>an</span> <span
  m='344940'>unpredictable</span> <span m='346960'>fashion.</span> <span
  m='348330'>We</span> <span m='348490'>need</span> <span
  m='348690'>another</span> <span m='349080'>graphic</span> <span
  m='349750'>to</span> <span m='349880'>see</span> <span
  m='350140'>what's</span> <span m='350380'>really</span> <span
  m='350680'>going</span> <span m='350990'>on</span> <span
  m='351270'>here.</span> <span m='355970'>I</span> <span m='356060'>want</span>
  <span m='356300'>to</span> <span m='356380'>write</span> <span
  m='356550'>a</span> <span m='356650'>program</span> <span
  m='357170'>called</span> <span m='357480'>Lorenz</span> <span
  m='358050'>GUI.</span> <span m='359180'>Lorenz</span> <span
  m='359800'>Graphic</span> <span m='360310'>User</span> <span
  m='360700'>Interface.</span> <span m='362340'>That's</span> <span
  m='362630'>out</span> <span m='362810'>of</span> <span m='362880'>my</span>
  <span m='364930'>old</span> <span m='365370'>book</span> <span
  m='365850'>calle</span> <span m='367260'>this</span> <span
  m='367450'>one</span> <span m='367650'>is</span> <span
  m='367820'>really</span> <span m='368190'>out</span> <span
  m='368400'>of</span> <span m='368550'>Numerical</span> <span
  m='369190'>Computing</span> <span m='369640'>with</span> <span
  m='370790'>MATLAB,</span> <span m='371520'>NCM.</span> </p><p><span
  m='375190'>OK, I hit</span> <span m='375880'>the</span> <span
  m='375970'>Start</span> <span m='376420'>button.</span> <span m='378670'>Here
  are</span> <span m='378890'>the</span> <span m='379090'>two</span> <span
  m='379320'>critical</span> <span m='379880'>points</span> <span
  m='380280'>in</span> <span m='380440'>green.</span> <span m='381440'>We</span>
  <span m='381600'>started</span> <span m='382080'>near the</span> <span
  m='382380'>critical</span> <span m='382920'>point.</span> <span
  m='384680'>We</span> <span m='384850'>oscillate</span> <span
  m='385630'>around</span> <span m='385760'>the</span> <span
  m='385860'>critical</span> <span m='386390'>point.</span> <span
  m='387480'>And</span> <span m='389180'>here</span> <span m='389730'>is</span>
  <span m='389940'>the</span> <span m='394120'>orbit.</span> <span
  m='396290'>This</span> <span m='396580'>is</span> <span m='396750'>just</span>
  <span m='397030'>going</span> <span m='397430'>back</span> <span
  m='397790'>and</span> <span m='397930'>forth.</span> <span
  m='398860'>It</span> <span m='399030'>oscillates</span> <span
  m='399740'>around</span> <span m='400110'>one</span> <span
  m='400350'>critical</span> <span m='400880'>point</span> <span
  m='401410'>then</span> <span m='401570'>decides</span> <span
  m='402090'>to</span> <span m='402200'>go</span> <span m='402430'>over</span>
  <span m='402710'>and</span> <span m='402810'>oscillate</span> <span
  m='403085'>around</span> <span m='403630'>the</span> <span
  m='403760'>other</span> <span m='404020'>for</span> <span m='404220'>a</span>
  <span m='404290'>while.</span> </p><p><span m='405390'>It</span> <span
  m='405570'>continues</span> <span m='406120'>around</span> <span
  m='406960'>like</span> <span m='407240'>this</span> <span
  m='407480'>forever.</span> <span m='409030'>This</span> <span
  m='409180'>is</span> <span m='409330'>not</span> <span
  m='409620'>periodic.</span> <span m='410870'>It</span> <span
  m='411090'>never</span> <span m='411430'>repeats.</span> <span
  m='413620'>Now,</span> <span m='413930'>the</span> <span
  m='414060'>butterfly</span> <span m='415480'>is</span> <span
  m='415660'>associated</span> <span m='416340'>with</span> <span
  m='416470'>Lorenz</span> <span m='417010'>in</span> <span
  m='417200'>two</span> <span m='417450'>ways.</span> <span
  m='418620'>One</span> <span m='418840'>is</span> <span m='419780'>the</span>
  <span m='419920'>butterfly</span> <span m='420520'>effect</span> <span
  m='421150'>on</span> <span m='421800'>the</span> <span
  m='421880'>weather.</span> <span m='423120'>Also,</span> <span
  m='424110'>this</span> <span m='424420'>plot</span> <span
  m='425150'>looks</span> <span m='425460'>like</span> <span m='425670'>a</span>
  <span m='425730'>butterfly.</span> <span m='427190'>I</span> <span
  m='427420'>can</span> <span m='427840'>grab</span> <span
  m='428310'>this</span> <span m='428650'>with</span> <span m='428830'>my</span>
  <span m='429050'>mouse</span> <span m='430360'>and</span> <span
  m='430590'>rotate</span> <span m='431180'>it</span> <span m='431700'>in</span>
  <span m='431970'>three</span> <span m='432250'>dimensions.</span> </p><p><span
  m='433560'>So</span> <span m='433790'>I</span> <span m='433900'>can</span>
  <span m='434160'>get</span> <span m='434640'>different</span> <span
  m='435010'>views</span> <span m='435470'>of</span> <span m='435560'>the</span>
  <span m='435710'>orbit.</span> <span m='436880'>It's</span> <span
  m='437060'>still</span> <span m='437360'>being</span> <span
  m='437660'>computed.</span> <span m='439180'>We're</span> <span
  m='439420'>adding</span> <span m='439720'>more</span> <span
  m='440050'>and</span> <span m='440130'>more</span> <span m='440550'>to</span>
  <span m='440690'>the</span> <span m='441520'>plot.</span> <span
  m='442640'>And</span> <span m='442840'>I</span> <span m='442920'>can</span>
  <span m='443130'>look</span> <span m='443440'>at</span> <span
  m='443630'>it</span> <span m='444290'>from</span> <span
  m='444500'>different</span> <span m='445550'>points</span> <span
  m='445880'>of</span> <span m='445970'>view</span> <span m='447270'>to</span>
  <span m='447870'>get</span> <span m='448760'>some</span> <span
  m='449060'>notion</span> <span m='449385'>of</span> <span
  m='449710'>how</span> <span m='449960'>this</span> <span m='450270'>is</span>
  <span m='452900'>proceeding</span> <span m='453490'>in</span> <span
  m='453620'>three</span> <span m='453840'>dimensions.</span> <span
  m='455590'>It</span> <span m='455720'>almost</span> <span
  m='456180'>lives</span> <span m='456470'>in</span> <span m='456650'>two</span>
  <span m='456810'>dimensions,</span> <span m='457510'>but</span> <span
  m='457690'>not</span> <span m='457970'>quite.</span> </p><p><span
  m='465010'>Earlier,</span> <span m='465520'>we've</span> <span
  m='465720'>seen</span> <span m='466020'>solutions,</span> <span
  m='467290'>differential</span> <span m='467810'>equations</span> <span
  m='468370'>with</span> <span m='468530'>periodic</span> <span
  m='469220'>solutions.</span> <span m='470810'>Here,</span> <span
  m='471050'>this</span> <span m='471310'>isn't</span> <span
  m='471630'>periodic.</span> <span m='474470'>Just</span> <span
  m='474710'>going</span> <span m='474940'>like</span> <span
  m='475180'>this</span> <span m='475400'>[? forever. ?]</span> <span
  m='479140'>Now,</span> <span m='479360'>this</span> <span m='479590'>is</span>
  <span m='479810'>perfectly--</span> <span m='482630'>this</span> <span
  m='482810'>isn't</span> <span m='483020'>random.</span> <span
  m='484350'>This</span> <span m='484540'>is</span> <span
  m='484710'>completely</span> <span m='485380'>determined</span> <span
  m='486170'>by</span> <span m='486370'>the</span> <span
  m='486510'>initial</span> <span m='486950'>conditions.</span> </p><p><span
  m='488300'>If</span> <span m='488500'>I</span> <span m='488600'>were</span>
  <span m='488730'>to</span> <span m='488810'>start</span> <span
  m='489065'>it</span> <span m='489320'>over</span> <span
  m='489630'>again</span> <span m='489920'>with</span> <span
  m='490090'>those</span> <span m='490360'>exact</span> <span
  m='490820'>conditions,</span> <span m='492580'>with</span> <span
  m='492790'>those</span> <span m='493020'>exact</span> <span
  m='493480'>initial</span> <span m='493880'>conditions,</span> <span
  m='494970'>I'd</span> <span m='495100'>get</span> <span
  m='495350'>exactly</span> <span m='495980'>this</span> <span
  m='496270'>behavior.</span> <span m='498610'>But</span> <span
  m='498780'>it's</span> <span m='499880'>unpredictable.</span> <span
  m='500820'>It's</span> <span m='501140'>hard</span> <span m='501650'>to</span>
  <span m='501780'>say</span> <span m='502160'>where</span> <span
  m='502430'>this</span> <span m='502710'>is</span> <span
  m='502890'>going.</span> <span m='504700'>I</span> <span m='504800'>can</span>
  <span m='505010'>clear</span> <span m='505310'>this</span> <span
  m='505620'>out</span> <span m='506390'>and</span> <span m='507990'>see</span>
  <span m='508640'>the</span> <span m='508930'>orbit</span> <span
  m='509860'>continue</span> <span m='510320'>to</span> <span
  m='510410'>develop.</span> <span m='515419'>Press</span> <span
  m='515840'>Stop.</span> </p><p></p><p><span m='526360'>Now</span> <span
  m='526560'>I</span> <span m='526700'>have</span> <span m='526890'>a</span>
  <span m='526980'>choice.</span> <span m='527750'>This</span> <span
  m='530580'>pull</span> <span m='530790'>down</span> <span
  m='531030'>menu</span> <span m='531380'>here</span> <span
  m='532140'>allows</span> <span m='532630'>me</span> <span m='532860'>to</span>
  <span m='533010'>choose</span> <span m='533930'>other</span> <span
  m='534220'>values</span> <span m='534720'>of</span> <span
  m='534910'>rho.</span> <span m='535720'>28</span> <span m='536580'>is</span>
  <span m='536780'>the</span> <span m='536880'>value</span> <span
  m='537340'>of</span> <span m='537520'>rho</span> <span m='537960'>that</span>
  <span m='538120'>is</span> <span m='539650'>almost</span> <span
  m='540130'>always</span> <span m='540460'>studied,</span> <span
  m='541710'>but</span> <span m='543200'>there's</span> <span
  m='543540'>a</span> <span m='543610'>book</span> <span m='543910'>by</span>
  <span m='544210'>a</span> <span m='544430'>Colin</span> <span
  m='544890'>Sparrow</span> <span m='545620'>that</span> <span
  m='545890'>I've</span> <span m='546450'>referenced</span> <span
  m='547200'>in</span> <span m='547340'>my</span> <span m='549210'>in</span>
  <span m='549400'>my</span> <span m='549620'>blog</span> <span
  m='550680'>about</span> <span m='551120'>periodic</span> <span
  m='551820'>solutions</span> <span m='552460'>to</span> <span
  m='552600'>Lorenz</span> <span m='553100'>equations.</span> </p><p><span
  m='554410'>And</span> <span m='554500'>let's</span> <span
  m='554810'>take</span> <span m='555040'>another</span> <span
  m='555400'>value.</span> <span m='555880'>Let</span> <span
  m='555990'>me</span> <span m='556120'>choose</span> <span
  m='556410'>rho</span> <span m='556850'>equal</span> <span m='557115'>to</span>
  <span m='557380'>160</span> <span m='559680'>and</span> <span
  m='559930'>clear</span> <span m='560650'>and</span> <span
  m='561000'>restart.</span> <span m='564890'>Now,</span> <span
  m='567920'>after</span> <span m='568950'>an</span> <span
  m='569020'>initial</span> <span m='569620'>transient,</span> <span
  m='574760'>this</span> <span m='575000'>is</span> <span m='575150'>now</span>
  <span m='575320'>periodic.</span> <span m='577770'>So</span> <span
  m='581170'>this</span> <span m='581400'>is</span> <span m='581570'>not</span>
  <span m='581910'>chaos.</span> <span m='582630'>This</span> <span
  m='583790'>is</span> <span m='584510'>a</span> <span
  m='584580'>periodic</span> <span m='585280'>solution.</span> </p><p><span
  m='589630'>And</span> <span m='589880'>these</span> <span
  m='590110'>other</span> <span m='590340'>values</span> <span
  m='590870'>of</span> <span m='591040'>rho,</span> <span m='592710'>not</span>
  <span m='593090'>rho</span> <span m='593370'>equals</span> <span
  m='593700'>28,</span> <span m='594350'>that's</span> <span
  m='594660'>chaotic,</span> <span m='595850'>but</span> <span
  m='596000'>these</span> <span m='596220'>other</span> <span
  m='596470'>values</span> <span m='596940'>of</span> <span
  m='597100'>rho</span> <span m='598030'>give</span> <span
  m='598300'>periodic</span> <span m='599020'>solutions</span> <span
  m='599700'>with</span> <span m='599940'>different</span> <span
  m='600320'>character.</span> <span m='601660'>That's</span> <span m='601930'>a
  long,</span> <span m='602400'>interesting</span> <span m='602920'>story</span>
  <span m='604036'>that</span> <span m='604830'>I</span> <span
  m='605000'>talk</span> <span m='605320'>about</span> <span m='605650'>in
  my</span> <span m='605800'>blog</span> <span m='607440'>following</span> <span
  m='607950'>the</span> <span m='608050'>work</span> <span m='608370'>of</span>
  <span m='608480'>Sparrow.</span> </p>
uid: 66517c9c49c59520a021a87282230f24
type: courses
layout: video
---
