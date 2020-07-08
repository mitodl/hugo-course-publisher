---
about_this_resource_text: >-
  <p><strong>Descriptions: </strong>A problem is said to be stiff if the
  solution being sought varies slowly, but there are nearby solutions that vary
  rapidly, so the numerical method must take small steps to obtain satisfactory
  results. The flame model demonstrates stiffness. ODE solvers with names ending
  in &quot;s&quot;, such as ODE23s and ODE15s, employ implicit methods and are
  intended for stiff problems. These methods require more work per step, but
  take many fewer steps.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: gwmIksA7aXM
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Video-YouTube-Stream
    type: Video
    uid: ce0a73304d88cdcc5bcd7082e0c621f9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/gwmIksA7aXM/default.jpg'
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4be01eeb00670a8a4ef28bc71eaf1db1
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: gwmIksA7aXM
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c3665d3f1a8a62d5b0df4f5c9d28a028
  - id: gwmIksA7aXM.srt
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/stiffness-ode23s-ode15s/gwmIksA7aXM.srt
    title: 3play caption file
    type: null
    uid: 6b9aabc13556d92475662e10dedd62ee
  - id: gwmIksA7aXM.pdf
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/stiffness-ode23s-ode15s/gwmIksA7aXM.pdf
    title: 3play pdf file
    type: null
    uid: db866c5c7ee2e01b37e2f1fcd4aacd3a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f2a1ee0dd82865c79535e0f6de48d5b8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: db23efe59fa0be108686989c3b9048b3
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Video-iTunes U-MP4
    type: Video
    uid: 26561ca3699d25a0ad4145e5e93ab7d5
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_07_300k.mp4
    parent_uid: fddcde3d30032fc932c7316f7535dbe0
    title: Video-Internet Archive-MP4
    type: Video
    uid: e0541448740efa46f11b7c861fabc55b
inline_embed_id: '42829600stiffness,ode23s,ode15s6555339'
order_index: 634
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: stiffness-ode23s-ode15s
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/stiffness-ode23s-ode15s
title: 'Stiffness, ODE23s, ODE15s'
transcript: >-
  <p><span m='3304'>INSTRUCTOR:</span> <span m='3780'>I</span> <span
  m='3800'>want</span> <span m='4070'>to</span> <span m='4390'>illustrate</span>
  <span m='5090'>the</span> <span m='6180'>important</span> <span
  m='6570'>notion</span> <span m='6910'>of</span> <span
  m='7010'>stiffness</span> <span m='7780'>by</span> <span
  m='8029'>running</span> <span m='9170'>ode45,</span> <span
  m='10830'>the</span> <span m='11750'>primary</span> <span
  m='12360'>MATLAB</span> <span m='12950'>ODE</span> <span
  m='13430'>solver,</span> <span m='14600'>on</span> <span m='15160'>our</span>
  <span m='16239'>flame</span> <span m='16640'>example.</span> <span
  m='18400'>The</span> <span m='18780'>differential</span> <span
  m='19350'>equation</span> <span m='19990'>is</span> <span m='20290'>y</span>
  <span m='20620'>prime</span> <span m='21120'>is</span> <span
  m='21260'>y</span> <span m='21580'>squared</span> <span m='22230'>minus</span>
  <span m='22580'>y</span> <span m='22880'>cubed,</span> <span
  m='24320'>and</span> <span m='24510'>I'm</span> <span m='24610'>going</span>
  <span m='25070'>to</span> <span m='25810'>choose</span> <span
  m='26460'>a</span> <span m='27300'>fairly--</span> <span m='28530'>an</span>
  <span m='28690'>extremely</span> <span m='29300'>small</span> <span
  m='29770'>initial</span> <span m='30200'>condition,</span> <span
  m='31240'>10</span> <span m='31460'>to</span> <span m='31510'>the</span> <span
  m='31620'>minus</span> <span m='32110'>sixth.</span> <span
  m='33620'>The</span> <span m='33760'>final</span> <span m='34210'>value</span>
  <span m='34630'>of</span> <span m='34830'>t</span> <span m='35180'>is</span>
  <span m='35460'>2</span> <span m='35720'>over</span> <span m='36000'>y</span>
  <span m='36310'>naught,</span> <span m='37500'>and</span> <span
  m='37820'>I'm</span> <span m='37980'>going</span> <span m='38390'>to</span>
  <span m='39590'>impose</span> <span m='40110'>a</span> <span
  m='40940'>modest</span> <span m='43440'>accuracy</span> <span
  m='44130'>requirement,</span> <span m='44930'>10</span> <span
  m='45170'>to</span> <span m='45270'>the</span> <span m='45370'>minus</span>
  <span m='45710'>fifth.</span> </p><p><span m='46970'>Now</span> <span
  m='47415'>let's</span> <span m='48620'>run</span> <span m='49170'>ode45</span>
  <span m='50910'>with</span> <span m='51260'>its</span> <span
  m='52980'>default</span> <span m='53540'>output.</span> <span
  m='55440'>Now,</span> <span m='55800'>see</span> <span m='56090'>it's</span>
  <span m='56300'>taking--</span> <span m='57210'>it's</span> <span
  m='57870'>moving</span> <span m='58280'>very</span> <span
  m='58580'>slowly</span> <span m='59160'>here.</span> <span
  m='59420'>It's</span> <span m='59620'>taking</span> <span
  m='59980'>lots</span> <span m='60390'>of</span> <span m='60510'>steps.</span>
  <span m='61950'>So</span> <span m='62020'>I'm</span> <span
  m='62230'>take-</span> <span m='62590'>pressing</span> <span
  m='63040'>the</span> <span m='63150'>stop</span> <span m='63690'>button</span>
  <span m='64019'>here.</span> <span m='65019'>It's</span> <span
  m='65190'>working</span> <span m='65540'>very</span> <span
  m='65850'>hard.</span> <span m='66830'>Let's</span> <span
  m='67160'>zoom</span> <span m='67690'>in</span> <span m='68540'>and</span>
  <span m='69250'>see</span> <span m='69650'>why</span> <span
  m='70100'>it's</span> <span m='70320'>taking</span> <span m='70750'>so</span>
  <span m='70960'>many</span> <span m='71270'>steps,</span> <span
  m='77200'>very</span> <span m='77550'>densely</span> <span
  m='78270'>packed</span> <span m='79430'>steps</span> <span
  m='80120'>here.</span> </p><p><span m='87690'>This</span> <span
  m='87930'>is</span> <span m='88050'>stiffness.</span> <span
  m='90960'>It's</span> <span m='92880'>satisfying</span> <span
  m='93275'>the</span> <span m='93670'>accuracy</span> <span
  m='94320'>requirements</span> <span m='95090'>we</span> <span
  m='95590'>imposed.</span> <span m='96870'>All</span> <span
  m='97150'>these</span> <span m='97370'>steps</span> <span m='98280'>are</span>
  <span m='98500'>within</span> <span m='99030'>10</span> <span
  m='99270'>to</span> <span m='99330'>the</span> <span m='99470'>minus</span>
  <span m='100500'>sixth</span> <span m='100865'>of</span> <span
  m='101230'>one,</span> <span m='102310'>but</span> <span
  m='102420'>it's</span> <span m='102610'>taken</span> <span
  m='102960'>very</span> <span m='103390'>small</span> <span
  m='103870'>steps</span> <span m='104430'>to</span> <span m='104580'>do
  it.</span> <span m='105080'>These</span> <span m='105310'>steps</span> <span
  m='105700'>are</span> <span m='105800'>so</span> <span m='106060'>small</span>
  <span m='107250'>that</span> <span m='107580'>the</span> <span
  m='108280'>graphics</span> <span m='109000'>can't</span> <span
  m='109300'>even</span> <span m='111690'>discern</span> <span
  m='112050'>the</span> <span m='112210'>step</span> <span
  m='112580'>size.</span> </p><p><span m='114210'>This</span> <span
  m='114920'>is</span> <span m='115030'>stiffness.</span> <span
  m='116400'>It's</span> <span m='116650'>an</span> <span
  m='116760'>efficiency</span> <span m='117480'>issue.</span> <span
  m='118460'>It's</span> <span m='118970'>doing</span> <span
  m='119250'>what</span> <span m='119490'>we</span> <span
  m='120010'>asked</span> <span m='120450'>for.</span> <span
  m='120950'>It's</span> <span m='121920'>meeting</span> <span
  m='122410'>the</span> <span m='122530'>accuracy</span> <span
  m='123150'>requirements,</span> <span m='124480'>but</span> <span
  m='125320'>it's</span> <span m='125550'>having</span> <span
  m='125920'>to</span> <span m='126070'>take</span> <span m='126830'>very</span>
  <span m='127150'>small</span> <span m='127560'>steps</span> <span
  m='128020'>to</span> <span m='128130'>do</span> <span m='128400'>it.</span>
  </p><p><span m='131420'>Let's</span> <span m='131650'>try</span> <span
  m='131890'>another</span> <span m='132290'>ODE</span> <span
  m='132700'>solver--</span> <span m='133300'>ode23.</span> <span
  m='137180'>Just</span> <span m='137440'>change</span> <span
  m='137790'>this</span> <span m='138010'>to</span> <span m='138140'>23</span>
  <span m='140000'>and</span> <span m='140110'>see</span> <span
  m='140300'>what</span> <span m='140450'>it</span> <span
  m='140680'>does.</span> <span m='142380'>It's</span> <span
  m='142510'>also</span> <span m='142930'>taking</span> <span
  m='143360'>very</span> <span m='143740'>small</span> <span
  m='144110'>steps</span> <span m='146050'>for</span> <span
  m='146180'>the</span> <span m='146330'>same</span> <span
  m='146680'>reason.</span> <span m='148300'>If</span> <span
  m='148510'>we</span> <span m='148630'>zoom</span> <span m='148960'>in</span>
  <span m='149150'>on</span> <span m='149350'>here,</span> <span
  m='154260'>we'll</span> <span m='154460'>see</span> <span
  m='154700'>the</span> <span m='154820'>same</span> <span
  m='155190'>kind</span> <span m='155530'>of</span> <span
  m='155960'>behavior.</span> <span m='159260'>But it's</span> <span
  m='159490'>taking</span> <span m='159780'>very</span> <span
  m='160090'>small</span> <span m='160440'>steps</span> <span
  m='160980'>in</span> <span m='161080'>order</span> <span m='161400'>to</span>
  <span m='161570'>achieve</span> <span m='162130'>the</span> <span
  m='163410'>desired</span> <span m='163900'>accuracy.</span> </p><p><span
  m='165900'>Now</span> <span m='166040'>let</span> <span m='166290'>me</span>
  <span m='166410'>introduce</span> <span m='167000'>a</span> <span
  m='167140'>new</span> <span m='167450'>solver,</span> <span
  m='168090'>ode23s.</span> <span m='170460'>The</span> <span
  m='170660'>s</span> <span m='171060'>for</span> <span
  m='171230'>stiffness.</span> <span m='173240'>This</span> <span
  m='173460'>was</span> <span m='173630'>designed</span> <span
  m='174800'>to</span> <span m='174950'>solve</span> <span
  m='175400'>stiff</span> <span m='175810'>problems.</span> <span
  m='176700'>And</span> <span m='176950'>boom,</span> <span m='177940'>it</span>
  <span m='178140'>goes</span> <span m='178460'>up,</span> <span
  m='179170'>turns</span> <span m='179510'>the</span> <span
  m='179640'>corner,</span> <span m='180570'>and</span> <span
  m='181770'>it</span> <span m='181820'>takes</span> <span
  m='182140'>just</span> <span m='182460'>a</span> <span m='182510'>few</span>
  <span m='182810'>steps</span> <span m='183720'>to</span> <span m='184175'>get
  to</span> <span m='184630'>the</span> <span m='186080'>final</span> <span
  m='186510'>result.</span> <span m='188750'>There</span> <span
  m='189020'>it</span> <span m='189140'>turns</span> <span m='189460'>the</span>
  <span m='189580'>corner</span> <span m='189850'>very</span> <span
  m='190230'>quickly.</span> </p><p><span m='194890'>We'll</span> <span
  m='195070'>see</span> <span m='195280'>how</span> <span
  m='195600'>ode23s</span> <span m='196890'>works</span> <span
  m='197340'>in</span> <span m='197450'>a</span> <span m='197480'>minute,</span>
  <span m='198140'>but</span> <span m='198620'>first</span> <span
  m='199090'>let's</span> <span m='199250'>try</span> <span m='199510'>to</span>
  <span m='199640'>define</span> <span m='200140'>stiffness.</span> <span
  m='202050'>It's</span> <span m='202360'>a</span> <span
  m='202580'>qualitative</span> <span m='203430'>notion</span> <span
  m='203870'>that</span> <span m='204050'>doesn't</span> <span
  m='204360'>have</span> <span m='204560'>a</span> <span
  m='204630'>precise</span> <span m='205260'>mathematical</span> <span
  m='206020'>definition.</span> <span m='208040'>It</span> <span
  m='208250'>depends</span> <span m='208690'>upon</span> <span
  m='209040'>the</span> <span m='209150'>problem,</span> <span
  m='209930'>but</span> <span m='210090'>also</span> <span m='210540'>on</span>
  <span m='211450'>the</span> <span m='211560'>solver</span> <span
  m='212280'>and</span> <span m='212390'>the</span> <span
  m='212540'>accuracy</span> <span m='213250'>requirements.</span> </p><p><span
  m='216020'>But</span> <span m='216190'>it's</span> <span m='216330'>an</span>
  <span m='216430'>important</span> <span m='216900'>notion.</span> <span
  m='219410'>We</span> <span m='219560'>say</span> <span m='219820'>that</span>
  <span m='220000'>a</span> <span m='220110'>problem</span> <span
  m='220600'>is</span> <span m='220700'>stiff</span> <span m='222050'>if</span>
  <span m='222270'>the</span> <span m='222400'>solution</span> <span
  m='223000'>being</span> <span m='223310'>sought</span> <span
  m='223860'>very</span> <span m='224200'>slowly,</span> <span
  m='225680'>but</span> <span m='225910'>there</span> <span
  m='226080'>are</span> <span m='226210'>nearby</span> <span
  m='226880'>solutions</span> <span m='227810'>that</span> <span
  m='228230'>very</span> <span m='228600'>rapidly.</span> <span
  m='229910'>So</span> <span m='230100'>the</span> <span
  m='230250'>numerical</span> <span m='230880'>method</span> <span
  m='231810'>must</span> <span m='232200'>take</span> <span
  m='232530'>small</span> <span m='232970'>steps</span> <span
  m='234250'>to</span> <span m='234490'>obtain</span> <span
  m='235270'>satisfactory</span> <span m='236180'>results.</span> </p><p><span
  m='242960'>Stiff</span> <span m='243390'>methods</span> <span
  m='243940'>for</span> <span m='244180'>ordinary</span> <span
  m='244570'>differential</span> <span m='245100'>equations</span> <span
  m='245710'>must</span> <span m='245980'>be</span> <span
  m='246150'>implicit.</span> <span m='248020'>They</span> <span
  m='248170'>must</span> <span m='248470'>involve</span> <span
  m='249010'>formulas</span> <span m='249780'>that</span> <span
  m='249940'>involve</span> <span m='250430'>looking</span> <span
  m='251610'>backward</span> <span m='252260'>from</span> <span
  m='252470'>the</span> <span m='252570'>forward</span> <span
  m='253190'>timestep.</span> <span m='254960'>The</span> <span
  m='255090'>prototype</span> <span m='255480'>of</span> <span
  m='255870'>these</span> <span m='256160'>methods</span> <span
  m='256709'>is</span> <span m='256950'>the</span> <span
  m='257410'>backward</span> <span m='257980'>Euler</span> <span
  m='258300'>method,</span> <span m='258779'>or</span> <span
  m='258880'>the</span> <span m='259050'>implicit</span> <span
  m='259910'>Euler</span> <span m='260290'>method.</span> </p><p><span
  m='261930'>This</span> <span m='262210'>formula,</span> <span m='263420'>it
  involves--</span> <span m='264560'>defines</span> <span m='265350'>y</span>
  <span m='265660'>n</span> <span m='265970'>plus</span> <span
  m='266300'>1,</span> <span m='267390'>but</span> <span
  m='267730'>doesn't</span> <span m='268420'>tell</span> <span
  m='268670'>us</span> <span m='269090'>how</span> <span m='269290'>to</span>
  <span m='269450'>compute</span> <span m='269960'>it.</span> <span
  m='270760'>We</span> <span m='270900'>have</span> <span m='271070'>to</span>
  <span m='271200'>solve</span> <span m='271770'>this</span> <span
  m='271990'>equation</span> <span m='272700'>for</span> <span
  m='272860'>y</span> <span m='273180'>n</span> <span m='273430'>plus</span>
  <span m='273720'>1.</span> <span m='274946'>And</span> <span
  m='275320'>I'm</span> <span m='275630'>not</span> <span
  m='275850'>going</span> <span m='275970'>to</span> <span m='276040'>go</span>
  <span m='276270'>into</span> <span m='276470'>detail</span> <span
  m='276990'>about</span> <span m='277260'>how</span> <span m='277470'>we</span>
  <span m='277640'>actually</span> <span m='278040'>do</span> <span
  m='278390'>it.</span> <span m='278480'>It involves</span> <span
  m='279030'>something</span> <span m='280360'>like</span> <span
  m='280640'>a</span> <span m='280690'>Newton</span> <span
  m='281090'>method</span> <span m='281435'>that</span> <span
  m='281780'>would--</span> <span m='282400'>requires</span> <span
  m='283100'>knowing</span> <span m='283460'>the</span> <span
  m='283640'>derivative,</span> <span m='284790'>or</span> <span
  m='284900'>an</span> <span m='284970'>approximation</span> <span
  m='285930'>to</span> <span m='286020'>the</span> <span
  m='286170'>derivative</span> <span m='286810'>of</span> <span
  m='286940'>f.</span> <span m='290130'>But</span> <span m='290290'>this</span>
  <span m='290550'>gives</span> <span m='290770'>you</span> <span
  m='290990'>an</span> <span m='291120'>idea</span> <span m='291480'>of</span>
  <span m='291580'>what</span> <span m='291680'>you</span> <span
  m='291840'>can</span> <span m='292020'>expect</span> <span
  m='292720'>in</span> <span m='293330'>stiff</span> <span
  m='293740'>methods.</span> </p><p><span m='297270'>I</span> <span
  m='297420'>like</span> <span m='297660'>to</span> <span m='297770'>make</span>
  <span m='298010'>an</span> <span m='298150'>analogy</span> <span
  m='298800'>with</span> <span m='299440'>taking</span> <span
  m='299830'>a</span> <span m='299900'>hike</span> <span m='300260'>in</span>
  <span m='300380'>one</span> <span m='300550'>of</span> <span
  m='300630'>the</span> <span m='300730'>slot</span> <span
  m='301180'>canyons</span> <span m='301700'>we</span> <span
  m='301840'>have</span> <span m='302080'>here</span> <span m='302280'>in</span>
  <span m='302370'>the</span> <span m='302480'>Southwest.</span> <span
  m='304040'>Explicit</span> <span m='304780'>methods</span> <span
  m='305210'>like</span> <span m='305390'>ode23</span> <span
  m='306730'>and</span> <span m='306880'>45</span> <span m='308330'>take</span>
  <span m='308590'>steps</span> <span m='309440'>on</span> <span
  m='309650'>the</span> <span m='309750'>walls</span> <span m='310470'>of</span>
  <span m='310560'>the</span> <span m='310680'>canyon</span> <span
  m='311100'>and</span> <span m='311970'>go</span> <span m='312120'>back</span>
  <span m='312460'>and</span> <span m='312610'>forth</span> <span
  m='314700'>across</span> <span m='315050'>the</span> <span
  m='315170'>sides</span> <span m='315600'>of</span> <span m='315670'>the</span>
  <span m='315790'>canyon,</span> <span m='316300'>make</span> <span
  m='316530'>very</span> <span m='316780'>slow</span> <span
  m='317200'>progress</span> <span m='317860'>down</span> <span
  m='318100'>the</span> <span m='318260'>canyon.</span> <span
  m='319330'>Whereas</span> <span m='319760'>implicit</span> <span
  m='320500'>methods,</span> <span m='321560'>like</span> <span
  m='321860'>ode15s,</span> <span m='325080'>look</span> <span
  m='325520'>ahead</span> <span m='325960'>down</span> <span
  m='326270'>the</span> <span m='326410'>canyon</span> <span
  m='327500'>and</span> <span m='329382'>look</span> <span
  m='329760'>ahead</span> <span m='330060'>to</span> <span
  m='330140'>where</span> <span m='330320'>you</span> <span
  m='330470'>want</span> <span m='330700'>to</span> <span m='330760'>go</span>
  <span m='331310'>and</span> <span m='331580'>make</span> <span
  m='332290'>rapid</span> <span m='332850'>progress</span> <span
  m='333730'>of</span> <span m='333810'>the</span> <span
  m='333920'>canyon.</span> </p><p><span m='339560'>The</span> <span
  m='340480'>stiff</span> <span m='340900'>solver,</span> <span
  m='341630'>ode23s,</span> <span m='344980'>uses</span> <span
  m='345810'>an</span> <span m='346640'>implicit</span> <span
  m='347450'>second-order</span> <span m='348090'>formula</span> <span
  m='349830'>and</span> <span m='350200'>an</span> <span
  m='350350'>associated</span> <span m='351550'>third-order</span> <span
  m='352880'>error</span> <span m='353300'>estimator.</span> <span
  m='355220'>It</span> <span m='355370'>evaluates</span> <span
  m='356090'>the</span> <span m='356200'>partial</span> <span
  m='356650'>derivatives</span> <span m='357280'>of</span> <span
  m='357430'>f</span> <span m='357760'>with</span> <span
  m='358000'>respect</span> <span m='358460'>to</span> <span
  m='358520'>both</span> <span m='358920'>t and</span> <span m='359280'>f</span>
  <span m='359640'>at</span> <span m='359760'>each</span> <span
  m='360020'>step,</span> <span m='360570'>so</span> <span
  m='360790'>that's</span> <span m='361410'>expensive.</span> <span
  m='363470'>It's</span> <span m='363700'>efficient</span> <span
  m='364390'>at</span> <span m='365160'>crude</span> <span
  m='366400'>error</span> <span m='366780'>tolerances,</span> <span
  m='367610'>like</span> <span m='368260'>graphic</span> <span
  m='369850'>accuracy.</span> <span m='371540'>And</span> <span
  m='371940'>it</span> <span m='372070'>has</span> <span
  m='374260'>relatively</span> <span m='375020'>low</span> <span
  m='375550'>overhead.</span> </p><p><span m='379990'>By</span> <span
  m='380090'>way of</span> <span m='380420'>comparison,</span> <span
  m='381280'>the</span> <span m='383340'>stiff</span> <span
  m='383670'>solver</span> <span m='384060'>ode15s,</span> <span
  m='386220'>can</span> <span m='386330'>be</span> <span
  m='386470'>configured</span> <span m='387140'>to</span> <span
  m='387210'>use</span> <span m='387580'>either</span> <span
  m='387880'>the</span> <span m='388890'>variable</span> <span
  m='389480'>order</span> <span m='390070'>numerical</span> <span
  m='390720'>differentiation</span> <span m='391790'>formula,</span> <span
  m='392870'>NDF,</span> <span m='393580'>or</span> <span m='394830'>the</span>
  <span m='394940'>related</span> <span m='395610'>to</span> <span
  m='396750'>backward</span> <span m='397230'>differentiation</span> <span
  m='398140'>formula</span> <span m='399860'>BDF.</span> <span
  m='401820'>Neither</span> <span m='402140'>case</span> <span
  m='402540'>it</span> <span m='402700'>saves</span> <span
  m='404080'>several</span> <span m='404580'>values</span> <span
  m='405280'>of</span> <span m='405650'>the</span> <span
  m='405940'>function</span> <span m='406760'>over</span> <span
  m='407100'>previous</span> <span m='407670'>steps.</span> <span
  m='409020'>The</span> <span m='409330'>order</span> <span
  m='409820'>varies</span> <span m='410480'>automatically</span> <span
  m='411340'>between</span> <span m='411830'>one</span> <span
  m='412060'>and</span> <span m='412210'>five,</span> <span m='414030'>it</span>
  <span m='414900'>evaluates</span> <span m='415870'>the</span> <span
  m='416140'>partial</span> <span m='416590'>derivatives</span> <span
  m='417320'>less</span> <span m='417710'>frequently,</span> <span
  m='419530'>and</span> <span m='419840'>did</span> <span m='420090'>see</span>
  <span m='420360'>efficient</span> <span m='420990'>at</span> <span
  m='421320'>higher</span> <span m='421850'>tolerances</span> <span
  m='423520'>then</span> <span m='424570'>23s.</span> </p>
uid: fddcde3d30032fc932c7316f7535dbe0
type: courses
layout: video
---
