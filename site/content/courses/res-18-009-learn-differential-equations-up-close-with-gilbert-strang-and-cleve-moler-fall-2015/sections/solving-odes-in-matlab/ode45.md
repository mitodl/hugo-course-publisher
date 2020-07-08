---
about_this_resource_text: >-
  <p><strong>Description: </strong>ODE45 is usually the function of choice among
  the ODE solvers. It compares methods of orders four and five to estimate error
  and determine step size. ODE45 is so accurate that its default behavior is to
  use its interpolant to provide results at intermediate points.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: DkOgvZywshI
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Video-YouTube-Stream
    type: Video
    uid: cb0fc3f74d2e1580bd0af3a6dfbd20ce
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/DkOgvZywshI/default.jpg'
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1b36c55258f27066dc26684f25a0c054
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: DkOgvZywshI
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 484d5a1a4883fe1cee535488a0a9df24
  - id: DkOgvZywshI.srt
    parent_uid: d00834c2129566d7159f85f74a58c729
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/ode45/DkOgvZywshI.srt
    title: 3play caption file
    type: null
    uid: 2ed7cd1705c089393b3c1915483e8a3f
  - id: DkOgvZywshI.pdf
    parent_uid: d00834c2129566d7159f85f74a58c729
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/ode45/DkOgvZywshI.pdf
    title: 3play pdf file
    type: null
    uid: 335a2374521a9bcee64d8d6c8f27abc6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bcf82c8852e39fa9959151b02085786c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7daea509b3df1f227bb6f74a3e7a42eb
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Video-iTunes U-MP4
    type: Video
    uid: 6ae1f0ed0248365ae5b4e1f04ea4ae10
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_06_300k.mp4
    parent_uid: d00834c2129566d7159f85f74a58c729
    title: Video-Internet Archive-MP4
    type: Video
    uid: 541e454f885f519313b261d648acf591
inline_embed_id: 56814124ode4533703403
order_index: 624
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: ode45
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/ode45
title: ODE45
transcript: >-
  <p><span m='4470'>PROFESSOR: The most</span> <span m='4760'>frequently</span>
  <span m='5300'>used</span> <span m='5640'>ODE</span> <span
  m='6060'>solver</span> <span m='6570'>in</span> <span m='6640'>MATLAB</span>
  <span m='7110'>and</span> <span m='7250'>Simulink</span> <span
  m='7860'>is</span> <span m='8119'>ODE45.</span> <span m='9865'>It</span> <span
  m='10180'>is</span> <span m='10420'>based</span> <span m='10810'>on</span>
  <span m='11000'>method</span> <span m='11480'>published</span> <span
  m='11930'>by</span> <span m='12110'>British</span> <span
  m='12620'>mathematicians</span> <span m='14190'>JR</span> <span
  m='14700'>Dormand</span> <span m='14940'>and</span> <span m='15860'>PJ</span>
  <span m='16340'>Prince</span> <span m='16665'>in</span> <span
  m='16990'>1980.</span> <span m='19230'>The</span> <span m='19320'>basic</span>
  <span m='19800'>method</span> <span m='20220'>is</span> <span
  m='20360'>order</span> <span m='20830'>five.</span> <span m='22760'>The</span>
  <span m='23490'>error</span> <span m='23930'>correction</span> <span
  m='25320'>uses</span> <span m='25880'>a</span> <span
  m='26360'>companion</span> <span m='26960'>order</span> <span
  m='27330'>four</span> <span m='27720'>method.</span> </p><p><span
  m='29350'>The</span> <span m='29430'>slope</span> <span m='29900'>of</span>
  <span m='30060'>tn</span> <span m='30810'>is,</span> <span
  m='31590'>first</span> <span m='31970'>same</span> <span m='32270'>as</span>
  <span m='32420'>last</span> <span m='33000'>left</span> <span
  m='33290'>over</span> <span m='33610'>from</span> <span m='33990'>the</span>
  <span m='34340'>previous</span> <span m='34920'>successful</span> <span
  m='35580'>step.</span> <span m='37020'>Then</span> <span
  m='37320'>there</span> <span m='37700'>are</span> <span m='38650'>five</span>
  <span m='39120'>more</span> <span m='39450'>slopes</span> <span
  m='40680'>from</span> <span m='41410'>function</span> <span
  m='41910'>values</span> <span m='42510'>at</span> <span m='43240'>1/5</span>
  <span m='43670'>h,</span> <span m='44070'>3/10h,</span> <span
  m='45280'>4/5h,</span> <span m='47240'>8/9h</span> <span m='49040'>and</span>
  <span m='49310'>then</span> <span m='49600'>at</span> <span
  m='49930'>tn</span> <span m='50290'>plus</span> <span m='50680'>1.</span>
  <span m='52240'>These</span> <span m='52560'>six</span> <span
  m='53100'>slopes,</span> <span m='53900'>linear</span> <span
  m='54340'>combinations</span> <span m='55250'>of</span> <span
  m='55450'>them,</span> <span m='55710'>are</span> <span m='55790'>used</span>
  <span m='56220'>to</span> <span m='56320'>produce</span> <span
  m='56830'>yn</span> <span m='57490'>plus</span> <span m='57810'>1.</span>
  </p><p><span m='59540'>The</span> <span m='59650'>function</span> <span
  m='61150'>is</span> <span m='61640'>evaluated</span> <span m='62580'>at</span>
  <span m='63630'>tn</span> <span m='64040'>plus</span> <span m='64390'>1</span>
  <span m='64819'>and</span> <span m='65040'>yn</span> <span
  m='65239'>plus</span> <span m='65570'>1</span> <span m='65900'>to</span> <span
  m='66030'>get</span> <span m='66250'>a</span> <span m='66310'>seventh</span>
  <span m='66780'>slope.</span> <span m='67950'>And</span> <span
  m='68200'>then</span> <span m='68450'>linear</span> <span
  m='68870'>combinations</span> <span m='69850'>of</span> <span
  m='70020'>these</span> <span m='70940'>are</span> <span m='71280'>used</span>
  <span m='71670'>to</span> <span m='71780'>produce</span> <span
  m='72240'>the</span> <span m='72420'>error</span> <span
  m='72800'>estimate.</span> </p><p><span m='74760'>Again,</span> <span
  m='75240'>if</span> <span m='75390'>the</span> <span m='75570'>error</span>
  <span m='76020'>estimate</span> <span m='76630'>is</span> <span
  m='77180'>less</span> <span m='77630'>than</span> <span m='77860'>the</span>
  <span m='78740'>specified</span> <span m='80830'>accuracy</span> <span
  m='81500'>requirements</span> <span m='82610'>the</span> <span
  m='82930'>step</span> <span m='83340'>is</span> <span
  m='83440'>successful.</span> <span m='84800'>And</span> <span
  m='85040'>then</span> <span m='85280'>that</span> <span m='86280'>error</span>
  <span m='86610'>estimate</span> <span m='87030'>is</span> <span
  m='87150'>used</span> <span m='87610'>to</span> <span m='88180'>get</span>
  <span m='88440'>the</span> <span m='89810'>next</span> <span
  m='90140'>step</span> <span m='90380'>size.</span> <span m='91750'>If</span>
  <span m='91990'>the</span> <span m='92380'>error</span> <span m='92530'>is
  too</span> <span m='92720'>big,</span> <span m='94280'>the</span> <span
  m='94410'>step</span> <span m='94770'>is</span> <span
  m='94970'>unsuccessful</span> <span m='96460'>and</span> <span
  m='96800'>that</span> <span m='97200'>error</span> <span
  m='97560'>estimate</span> <span m='97950'>is</span> <span
  m='98110'>used</span> <span m='98510'>to</span> <span m='98610'>get</span>
  <span m='102000'>the</span> <span m='102090'>step</span> <span
  m='102390'>size</span> <span m='102760'>to</span> <span m='102880'>do</span>
  <span m='103020'>the</span> <span m='103160'>step</span> <span
  m='103480'>over</span> <span m='103850'>again.</span> </p><p><span
  m='104800'>If</span> <span m='105230'>we</span> <span m='105300'>want</span>
  <span m='105470'>to</span> <span m='105540'>see</span> <span
  m='105720'>the</span> <span m='105820'>actual</span> <span
  m='106230'>coefficients</span> <span m='106615'>that</span> <span
  m='107000'>are</span> <span m='107260'>used,</span> <span
  m='107890'>you</span> <span m='107940'>can</span> <span m='108120'>go</span>
  <span m='108350'>into</span> <span m='108570'>the</span> <span
  m='108760'>code</span> <span m='109230'>for</span> <span
  m='110020'>ODE45.</span> <span m='111550'>There's</span> <span
  m='111740'>a</span> <span m='111820'>table</span> <span m='112200'>with</span>
  <span m='112360'>the</span> <span m='112480'>coefficients.</span> <span
  m='113850'>Or</span> <span m='114320'>you</span> <span m='114480'>go</span>
  <span m='114830'>to</span> <span m='114950'>the</span> <span
  m='115400'>Wikipedia</span> <span m='116200'>page</span> <span
  m='116700'>for</span> <span m='117020'>the</span> <span
  m='117180'>Dormand-Prince</span> <span m='117950'>Method</span> <span
  m='119190'>and</span> <span m='119910'>there</span> <span m='120100'>is</span>
  <span m='120230'>the</span> <span m='120330'>same</span> <span
  m='120710'>coefficients.</span> </p><p><span m='124590'>As</span> <span
  m='124820'>an</span> <span m='124970'>aside,</span> <span
  m='125720'>here</span> <span m='125980'>is</span> <span m='126100'>an</span>
  <span m='126340'>interesting</span> <span m='126940'>fact</span> <span
  m='127350'>about</span> <span m='127860'>higher</span> <span
  m='128150'>order</span> <span m='128460'>Runge-Kutta</span> <span
  m='129130'>methods.</span> <span m='130780'>Classical</span> <span
  m='131390'>Runge-Kutta</span> <span m='132210'>required</span> <span
  m='132910'>four</span> <span m='133290'>function</span> <span
  m='133770'>evaluations</span> <span m='135010'>per</span> <span
  m='135180'>step</span> <span m='135770'>to</span> <span m='136090'>get</span>
  <span m='136760'>order</span> <span m='137120'>four.</span> <span
  m='138800'>Dormand-Prince</span> <span m='141200'>requires</span> <span
  m='142040'>six</span> <span m='142530'>function</span> <span
  m='142960'>evaluations</span> <span m='143850'>per</span> <span
  m='144030'>step</span> <span m='144490'>to</span> <span m='144600'>get</span>
  <span m='144820'>order</span> <span m='145110'>five.</span> <span
  m='147060'>You</span> <span m='147230'>can't</span> <span
  m='147620'>get</span> <span m='147750'>order</span> <span
  m='148020'>five</span> <span m='148570'>with</span> <span
  m='150000'>just</span> <span m='150290'>five</span> <span
  m='150690'>function</span> <span m='151070'>evaluations.</span> <span
  m='152760'>And</span> <span m='152970'>then,</span> <span m='153910'>if</span>
  <span m='154010'>we</span> <span m='154130'>were</span> <span
  m='154300'>to</span> <span m='154440'>try</span> <span m='154720'>and</span>
  <span m='154850'>achieve</span> <span m='155230'>higher</span> <span
  m='155730'>order,</span> <span m='156560'>it</span> <span
  m='156660'>would</span> <span m='156880'>take</span> <span
  m='157150'>even</span> <span m='157400'>more</span> <span
  m='157760'>function</span> <span m='158260'>evaluations</span> <span
  m='159220'>per</span> <span m='159390'>step.</span> </p><p><span
  m='161690'>Let's</span> <span m='162050'>use</span> <span
  m='162390'>ODE45</span> <span m='163690'>to</span> <span
  m='164340'>compute</span> <span m='165020'>e</span> <span m='165240'>to</span>
  <span m='165330'>the</span> <span m='165480'>t.</span> <span
  m='167136'>y</span> <span m='167550'>prime</span> <span m='167990'>is</span>
  <span m='168100'>equal</span> <span m='168390'>to</span> <span
  m='168440'>y.</span> <span m='170910'>We</span> <span m='171150'>can</span>
  <span m='171410'>ask</span> <span m='171890'>for</span> <span
  m='172340'>output</span> <span m='174030'>by</span> <span
  m='174240'>supplying</span> <span m='174660'>an</span> <span
  m='175080'>argument</span> <span m='175560'>called</span> <span
  m='176070'>tspan.</span> <span m='178700'>Zero</span> <span
  m='178975'>and</span> <span m='179250'>steps</span> <span m='179620'>of</span>
  <span m='180070'>0.1</span> <span m='180460'>to</span> <span
  m='180540'>1.</span> <span m='182710'>If</span> <span m='182910'>we</span>
  <span m='183040'>supply</span> <span m='183530'>that</span> <span
  m='183810'>as</span> <span m='183990'>the</span> <span m='184180'>input</span>
  <span m='184620'>argument</span> <span m='185750'>to</span> <span
  m='185840'>solve</span> <span m='186210'>this</span> <span
  m='186420'>differential</span> <span m='187020'>equation</span> <span
  m='187700'>and</span> <span m='187850'>get</span> <span m='188000'>the</span>
  <span m='188130'>output</span> <span m='188540'>at</span> <span
  m='188680'>those</span> <span m='189310'>points,</span> <span
  m='191700'>we</span> <span m='191850'>get</span> <span m='192070'>that</span>
  <span m='192320'>back</span> <span m='192580'>as</span> <span
  m='192800'>the</span> <span m='192920'>output.</span> <span
  m='194220'>And</span> <span m='194370'>now</span> <span
  m='194670'>here's</span> <span m='195160'>the</span> <span
  m='196130'>approximations</span> <span m='197160'>to</span> <span
  m='197250'>the</span> <span m='197400'>solution</span> <span
  m='197860'>to</span> <span m='197920'>that</span> <span
  m='198290'>differential</span> <span m='198880'>equation</span> <span
  m='199410'>at</span> <span m='199880'>those</span> <span
  m='200160'>points.</span> </p><p><span m='201370'>If</span> <span
  m='201630'>we</span> <span m='201890'>plot</span> <span m='202240'>it,</span>
  <span m='205980'>here's</span> <span m='206370'>the</span> <span
  m='206640'>solution</span> <span m='207280'>at</span> <span
  m='207410'>those</span> <span m='207710'>points.</span> <span
  m='210500'>And</span> <span m='210730'>to</span> <span m='210870'>see</span>
  <span m='211110'>how</span> <span m='211320'>accurate</span> <span
  m='211680'>it</span> <span m='212040'>is,</span> <span m='213520'>we</span>
  <span m='213700'>see</span> <span m='213940'>that</span> <span
  m='214070'>we're</span> <span m='214270'>actually</span> <span
  m='214740'>getting</span> <span m='215130'>this</span> <span
  m='217190'>result</span> <span m='217900'>to</span> <span
  m='219680'>nine</span> <span m='220220'>digits.</span> <span
  m='222140'>ODE45</span> <span m='223490'>is</span> <span
  m='224520'>very</span> <span m='224940'>accurate.</span> </p><p><span
  m='229740'>Let's</span> <span m='229950'>look</span> <span
  m='230160'>at</span> <span m='230290'>step</span> <span m='230580'>size</span>
  <span m='231030'>choice</span> <span m='231610'>on</span> <span
  m='231810'>our</span> <span m='232070'>problem</span> <span
  m='232520'>with</span> <span m='232710'>near</span> <span
  m='233100'>singularity,</span> <span m='234850'>is</span> <span
  m='235250'>a</span> <span m='235370'>quarter.</span> <span
  m='237300'>y0</span> <span m='237990'>is</span> <span m='238570'>close</span>
  <span m='238970'>to</span> <span m='239110'>16.</span> <span
  m='241270'>The</span> <span m='241380'>differential</span> <span
  m='242000'>equation</span> <span m='242700'>is</span> <span
  m='242850'>y</span> <span m='243160'>prime</span> <span m='243750'>is</span>
  <span m='244410'>2(a-t)</span> <span m='245540'>y</span> <span
  m='246260'>squared.</span> <span m='248390'>We</span> <span
  m='248600'>let</span> <span m='250400'>ODE45</span> <span
  m='252240'>choose</span> <span m='252600'>its</span> <span
  m='252780'>own</span> <span m='253040'>step</span> <span
  m='253400'>size</span> <span m='253930'>by</span> <span
  m='254140'>indicating</span> <span m='254820'>we</span> <span
  m='254940'>just</span> <span m='255230'>want</span> <span m='255410'>to</span>
  <span m='256810'>integrate</span> <span m='257440'>from</span> <span
  m='257640'>0</span> <span m='257740'>to</span> <span m='258060'>1.</span>
  <span m='259970'>We</span> <span m='260140'>capture</span> <span
  m='260649'>the</span> <span m='260870'>output</span> <span
  m='261690'>in</span> <span m='262720'>t</span> <span m='263000'>and</span>
  <span m='263130'>y</span> <span m='264360'>and</span> <span
  m='265260'>plot</span> <span m='265690'>it.</span> </p><p><span
  m='269870'>Now,</span> <span m='270740'>here,</span> <span
  m='271640'>there's</span> <span m='272370'>a</span> <span
  m='272500'>lot</span> <span m='272730'>of</span> <span
  m='272830'>points</span> <span m='273270'>here,</span> <span
  m='274360'>but</span> <span m='274530'>this</span> <span m='274740'>is</span>
  <span m='274890'>misleading</span> <span m='276450'>because</span> <span
  m='277720'>ODE45,</span> <span m='280080'>by</span> <span
  m='280660'>default,</span> <span m='281310'>is</span> <span
  m='281430'>using</span> <span m='281860'>the</span> <span
  m='281960'>refine</span> <span m='282650'>option.</span> <span
  m='284150'>It's</span> <span m='284350'>only</span> <span
  m='285560'>actually</span> <span m='286010'>evaluating</span> <span
  m='286930'>the</span> <span m='287030'>function</span> <span
  m='287530'>at</span> <span m='287630'>every</span> <span
  m='287990'>fourth</span> <span m='288465'>one</span> <span
  m='288940'>of</span> <span m='289010'>these</span> <span
  m='289300'>points</span> <span m='290440'>and</span> <span
  m='290660'>then</span> <span m='290850'>using</span> <span
  m='291380'>the</span> <span m='291520'>interpolant</span> <span
  m='293040'>to</span> <span m='294890'>fill in</span> <span
  m='295450'>in</span> <span m='295610'>between.</span> <span
  m='296880'>So</span> <span m='297630'>we</span> <span
  m='297830'>actually</span> <span m='298340'>need</span> <span
  m='299720'>a</span> <span m='301760'>little</span> <span
  m='302070'>different</span> <span m='302480'>plot</span> <span
  m='302920'>here.</span> </p><p><span m='306380'>This</span> <span
  m='306650'>plot</span> <span m='306950'>shows</span> <span m='307200'>a</span>
  <span m='307250'>little</span> <span m='307480'>better</span> <span
  m='307720'>what's</span> <span m='307990'>going</span> <span
  m='308310'>on.</span> <span m='309240'>The</span> <span m='309360'>big</span>
  <span m='309680'>dots</span> <span m='310210'>are</span> <span
  m='310400'>the</span> <span m='310560'>points</span> <span
  m='311130'>that</span> <span m='312590'>ODE45</span> <span
  m='313820'>chose</span> <span m='314260'>to</span> <span
  m='314420'>evaluate</span> <span m='316000'>the</span> <span
  m='316390'>differential</span> <span m='316950'>equation.</span> <span
  m='318180'>And</span> <span m='318450'>the</span> <span
  m='318560'>little</span> <span m='318900'>dots</span> <span
  m='319510'>are</span> <span m='321040'>filled</span> <span
  m='321430'>in</span> <span m='321720'>with the</span> <span
  m='322010'>interpolant.</span> <span m='323050'>So</span> <span
  m='323340'>the</span> <span m='323490'>big</span> <span m='323800'>dots</span>
  <span m='324250'>are</span> <span m='324480'>every</span> <span
  m='324850'>fourth</span> <span m='325460'>point.</span> <span
  m='326570'>And</span> <span m='326850'>the</span> <span
  m='326940'>refine</span> <span m='327550'>option</span> <span
  m='328130'>says</span> <span m='329700'>that</span> <span
  m='330190'>the</span> <span m='331970'>big dots are</span> <span
  m='332090'>too</span> <span m='332320'>far</span> <span
  m='332590'>apart</span> <span m='333740'>and</span> <span m='334120'>we</span>
  <span m='334260'>need</span> <span m='334490'>to</span> <span
  m='334570'>fill</span> <span m='334890'>it</span> <span m='334990'>in</span>
  <span m='335150'>with</span> <span m='335360'>the</span> <span
  m='335460'>interpolant.</span> <span m='336100'>And</span> <span
  m='336320'>so</span> <span m='336500'>this</span> <span m='336800'>is</span>
  <span m='336990'>the</span> <span m='337230'>continuous</span> <span
  m='337890'>interpolant</span> <span m='338310'>in</span> <span
  m='338730'>action.</span> </p><p><span m='341060'>The</span> <span
  m='341200'>big</span> <span m='341460'>dots</span> <span m='342060'>are</span>
  <span m='344380'>more</span> <span m='344610'>closely</span> <span
  m='345140'>concentrated</span> <span m='346600'>as</span> <span
  m='346830'>we</span> <span m='346950'>have</span> <span m='347120'>to</span>
  <span m='347240'>go</span> <span m='347440'>around</span> <span
  m='347810'>the</span> <span m='347940'>curve.</span> <span
  m='349010'>And</span> <span m='349400'>then,</span> <span m='351820'>as</span>
  <span m='352080'>we</span> <span m='352290'>get</span> <span
  m='352650'>farther</span> <span m='353040'>away</span> <span
  m='353320'>from</span> <span m='353560'>the</span> <span
  m='353670'>singularity</span> <span m='355430'>the</span> <span
  m='355650'>step</span> <span m='355990'>size</span> <span
  m='356380'>increases.</span> <span m='357970'>So</span> <span
  m='359080'>this</span> <span m='359290'>shows</span> <span
  m='359920'>the</span> <span m='360950'>high</span> <span
  m='361250'>accuracy</span> <span m='362140'>of</span> <span
  m='362260'>ODE45</span> <span m='364280'>and</span> <span
  m='365220'>the</span> <span m='365450'>automatic</span> <span
  m='366210'>step</span> <span m='366520'>size</span> <span
  m='366900'>choice</span> <span m='367320'>in</span> <span
  m='367450'>action.</span> </p><p><span m='371750'>Here's</span> <span
  m='371850'>an</span> <span m='371950'>exercise.</span> <span
  m='373870'>Compare</span> <span m='374820'>ODE23</span> <span
  m='375280'>and</span> <span m='376040'>ODE45</span> <span m='378120'>by</span>
  <span m='378240'>using</span> <span m='378700'>each</span> <span
  m='378830'>of</span> <span m='378960'>them</span> <span m='379300'>to</span>
  <span m='379630'>compute</span> <span m='379790'>pi.</span> <span
  m='381700'>The</span> <span m='381910'>integral</span> <span
  m='384000'>4</span> <span m='384430'>over</span> <span m='384630'>1</span>
  <span m='384950'>plus</span> <span m='385250'>t</span> <span
  m='385450'>squared</span> <span m='385960'>from</span> <span
  m='386170'>0</span> <span m='386270'>to</span> <span m='386610'>1</span> <span
  m='386960'>is</span> <span m='387140'>pi.</span> <span m='388530'>You</span>
  <span m='388640'>can</span> <span m='388760'>express</span> <span
  m='389330'>that</span> <span m='389540'>as</span> <span m='389680'>a</span>
  <span m='389780'>differential</span> <span m='390380'>equation,</span> <span
  m='392700'>use</span> <span m='393090'>each</span> <span m='393340'>of</span>
  <span m='393430'>the</span> <span m='393530'>routines</span> <span
  m='394240'>to</span> <span m='394640'>integrate</span> <span
  m='395240'>that</span> <span m='395520'>differential</span> <span
  m='396040'>equation</span> <span m='397200'>and</span> <span
  m='397370'>see</span> <span m='397610'>how</span> <span
  m='397850'>close</span> <span m='398250'>they</span> <span
  m='398390'>get</span> <span m='398700'>to</span> <span
  m='398820'>computing</span> <span m='399350'>pi.</span> </p><p></p>
uid: d00834c2129566d7159f85f74a58c729
type: courses
layout: video
---
