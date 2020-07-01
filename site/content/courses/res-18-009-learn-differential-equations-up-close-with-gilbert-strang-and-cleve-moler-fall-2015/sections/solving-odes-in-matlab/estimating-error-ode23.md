---
about_this_resource_text: >-
  <p><strong>Description: </strong>ODE23 compares methods of order two and three
  to automatically choose the step size and maintain a specified accuracy. It is
  the simplest MATLAB<sup>&reg;</sup> solver that has modern features such as
  automatic error estimate and continuous interpolant. ODE23 is suitable for
  coarse accuracy requirements such as computer graphics.</p><p><a
  href="http://www.mathworks.com/matlabcentral/fileexchange/54611">Related
  MATLAB code files can be downloaded from MATLAB Central</a></p>
  <p><strong>Instructor:</strong> Cleve Moler</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ScZMBOB_qYQ
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Video-YouTube-Stream
    type: Video
    uid: 36d9969723c772ea94b80a53b48cce58
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ScZMBOB_qYQ/default.jpg'
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d4274c1e76660c44bcee970f639e9fea
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ScZMBOB_qYQ
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2ae4cc77e2835cbbcb847f5af3a34617
  - id: ScZMBOB_qYQ.srt
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/estimating-error-ode23/ScZMBOB_qYQ.srt
    title: 3play caption file
    type: null
    uid: 048948cba3afca81a2709883d8a1c0bb
  - id: ScZMBOB_qYQ.pdf
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/estimating-error-ode23/ScZMBOB_qYQ.pdf
    title: 3play pdf file
    type: null
    uid: fa523517ea139cf33cbf1f138bfc235e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 12c4bdf919c5c88c652709ce4d1fa899
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 93ca2cf775bf1ebdc5945944567cc6c9
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Video-iTunes U-MP4
    type: Video
    uid: 550c3406cfb82f990d946e7799eca0a7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_odes_05_300k.mp4
    parent_uid: 1bac5d45b4229cc3b16dcd3e25279c20
    title: Video-Internet Archive-MP4
    type: Video
    uid: ffc5b6dc77629be3542dddd51db1b84b
inline_embed_id: '10514981estimatingerror,ode2344856493'
order_index: 614
parent_uid: 8ee92c27f02bfd86d2629f4ce23755ef
related_resources_text: ''
short_url: estimating-error-ode23
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/solving-odes-in-matlab/estimating-error-ode23
title: 'Estimating Error, ODE23'
transcript: >-
  <p><span m='4080'>PROFESSOR: Software</span> <span m='4770'>that</span> <span
  m='5230'>implements</span> <span m='6280'>modern</span> <span
  m='6800'>numerical</span> <span m='7260'>methods</span> <span
  m='8189'>has</span> <span m='8810'>two</span> <span m='9020'>features</span>
  <span m='9730'>that</span> <span m='9920'>aren't</span> <span
  m='10310'>present</span> <span m='10850'>in</span> <span
  m='11610'>codes</span> <span m='11970'>like</span> <span m='12250'>ODE4</span>
  <span m='13530'>and</span> <span m='14550'>classical</span> <span
  m='15560'>Runge-Kutta.</span> <span m='15940'>The</span> <span
  m='17230'>methods</span> <span m='17900'>in</span> <span m='18060'>the</span>
  <span m='18160'>software</span> <span m='18980'>can</span> <span
  m='19840'>estimate</span> <span m='20610'>error</span> <span
  m='21250'>and</span> <span m='21490'>provide</span> <span
  m='21860'>automatic</span> <span m='22410'>step</span> <span
  m='22650'>size</span> <span m='23030'>control.</span> <span
  m='24930'>You</span> <span m='25150'>don't</span> <span
  m='25400'>specify</span> <span m='26400'>the</span> <span
  m='26530'>step</span> <span m='26820'>size</span> <span m='27130'>h.</span>
  <span m='28230'>You</span> <span m='28410'>specify</span> <span
  m='29440'>an</span> <span m='30230'>accuracy</span> <span m='30660'>you</span>
  <span m='31090'>want.</span> <span m='32530'>And</span> <span
  m='33150'>the</span> <span m='34150'>methods</span> <span
  m='35390'>estimate</span> <span m='36010'>the</span> <span
  m='36160'>errors</span> <span m='36600'>as</span> <span m='36720'>they</span>
  <span m='36860'>go</span> <span m='37060'>along</span> <span
  m='38030'>and</span> <span m='38210'>adjust</span> <span m='38650'>the</span>
  <span m='38760'>step</span> <span m='39050'>size</span> <span
  m='39370'>accordingly.</span> <span m='41460'>And</span> <span
  m='41680'>they</span> <span m='41790'>provide</span> <span m='42260'>a</span>
  <span m='42330'>fully</span> <span m='42770'>accurate</span> <span
  m='43400'>continuous</span> <span m='44110'>interpolant.</span> <span
  m='45210'>They</span> <span m='45350'>don't</span> <span m='45620'>just</span>
  <span m='46160'>provide</span> <span m='46860'>the</span> <span
  m='47380'>solution</span> <span m='48150'>at</span> <span m='48350'>the</span>
  <span m='48470'>discrete</span> <span m='49000'>set</span> <span
  m='49190'>of</span> <span m='49310'>points.</span> <span m='51160'>They</span>
  <span m='51320'>provide</span> <span m='51940'>a</span> <span
  m='52880'>function</span> <span m='53640'>that</span> <span
  m='54200'>defines</span> <span m='54950'>the</span> <span
  m='55710'>solution</span> <span m='56320'>everywhere</span> <span
  m='56950'>in</span> <span m='57060'>the</span> <span
  m='57190'>interval.</span> <span m='58740'>And</span> <span
  m='58960'>so</span> <span m='59200'>you</span> <span m='59410'>can</span>
  <span m='59770'>plot</span> <span m='60200'>it,</span> <span
  m='60750'>find</span> <span m='61130'>zeroes</span> <span m='61650'>of</span>
  <span m='61730'>the</span> <span m='61840'>function,</span> <span
  m='64890'>provide</span> <span m='65260'>a</span> <span
  m='65319'>facility</span> <span m='65870'>called</span> <span
  m='66340'>event</span> <span m='66690'>handling,</span> <span
  m='67370'>and</span> <span m='67420'>so</span> <span m='67720'>on.</span>
  </p><p><span m='69300'>Larry</span> <span m='69580'>Shampine</span> <span
  m='70370'>is</span> <span m='70600'>an</span> <span m='70740'>authority</span>
  <span m='71350'>on</span> <span m='71490'>the</span> <span
  m='71590'>numerical</span> <span m='72100'>solution</span> <span
  m='72680'>of</span> <span m='72800'>ordinary</span> <span
  m='73210'>differential</span> <span m='73700'>equations.</span> <span
  m='74840'>He</span> <span m='75210'>is</span> <span m='75520'>the</span> <span
  m='76300'>principal</span> <span m='76830'>author</span> <span
  m='77370'>of</span> <span m='77500'>this</span> <span
  m='77820'>textbook</span> <span m='79250'>about</span> <span
  m='79660'>solving</span> <span m='80240'>ODEs</span> <span
  m='80710'>with</span> <span m='80890'>MATLAB.</span> <span
  m='82490'>He's</span> <span m='82980'>a,</span> <span m='83660'>now,</span>
  <span m='84430'>emeritus</span> <span m='85160'>professor</span> <span
  m='85930'>at</span> <span m='86220'>the</span> <span m='86630'>Southern</span>
  <span m='87470'>Methodist</span> <span m='88180'>University</span> <span
  m='89120'>in</span> <span m='89250'>Dallas.</span> <span m='89940'>And</span>
  <span m='90440'>he's</span> <span m='90700'>been</span> <span
  m='90860'>a</span> <span m='90950'>long</span> <span m='91300'>time</span>
  <span m='91600'>consultant</span> <span m='92140'>to</span> <span
  m='92200'>the</span> <span m='92290'>MathWorks</span> <span
  m='93550'>about</span> <span m='93880'>the</span> <span
  m='93990'>development</span> <span m='94600'>of</span> <span
  m='94750'>our</span> <span m='95390'>ODE</span> <span m='96060'>Suite.</span>
  <span m='98550'>Shampine</span> <span m='98750'>and</span> <span
  m='99260'>his</span> <span m='99500'>student,</span> <span
  m='100060'>Przemyslaw</span> <span m='101400'>Bogacki,</span> <span
  m='102330'>published</span> <span m='102770'>this</span> <span
  m='103090'>method</span> <span m='103590'>in</span> <span
  m='103820'>1989.</span> <span m='105890'>And</span> <span
  m='106080'>it's</span> <span m='106320'>the</span> <span
  m='106430'>basis</span> <span m='106960'>for</span> <span
  m='107460'>ODE23,</span> <span m='109910'>the</span> <span
  m='110040'>first</span> <span m='111110'>of</span> <span m='111290'>the</span>
  <span m='111360'>methods</span> <span m='111870'>we</span> <span
  m='112040'>will</span> <span m='112830'>use out of</span> <span
  m='113610'>the</span> <span m='114710'>MATLAB</span> <span
  m='115320'>ODE</span> <span m='115890'>Suite.</span> </p><p><span
  m='117100'>The</span> <span m='117200'>basic</span> <span
  m='117600'>method</span> <span m='117970'>is</span> <span
  m='118120'>order</span> <span m='118490'>three.</span> <span
  m='119970'>And</span> <span m='120110'>the</span> <span
  m='120450'>error</span> <span m='120820'>estimate</span> <span
  m='121380'>is</span> <span m='121590'>based</span> <span m='122000'>on</span>
  <span m='122180'>the</span> <span m='122270'>difference</span> <span
  m='122780'>between</span> <span m='123270'>the</span> <span
  m='123500'>order</span> <span m='123850'>three</span> <span
  m='124170'>method</span> <span m='125250'>and</span> <span
  m='125520'>then</span> <span m='125740'>the</span> <span
  m='126000'>underlying</span> <span m='126390'>order</span> <span
  m='126710'>two</span> <span m='126910'>method.</span> <span
  m='128060'>There</span> <span m='128370'>are</span> <span
  m='128990'>four</span> <span m='129580'>slopes</span> <span
  m='130310'>involved.</span> </p><p><span m='132170'>The</span> <span
  m='132280'>first</span> <span m='132700'>one</span> <span m='133110'>is</span>
  <span m='133410'>the</span> <span m='133480'>value</span> <span
  m='133930'>of</span> <span m='134030'>the</span> <span
  m='134120'>function</span> <span m='134620'>at</span> <span
  m='134730'>the</span> <span m='134840'>start</span> <span m='135200'>of</span>
  <span m='135290'>the</span> <span m='135390'>interval.</span> <span
  m='136890'>But</span> <span m='137040'>that's</span> <span
  m='137350'>based</span> <span m='137710'>on</span> <span
  m='137870'>something</span> <span m='138320'>called</span> <span
  m='138700'>FSAL,</span> <span m='139940'>first</span> <span
  m='140360'>same</span> <span m='140680'>as</span> <span
  m='140840'>last,</span> <span m='141970'>where</span> <span
  m='142110'>that</span> <span m='142420'>slope</span> <span
  m='142950'>is</span> <span m='144100'>most</span> <span
  m='144410'>likely</span> <span m='144930'>left</span> <span
  m='145280'>over</span> <span m='145590'>from the</span> <span
  m='145900'>previous</span> <span m='146500'>step.</span> <span
  m='147750'>If</span> <span m='147920'>the</span> <span
  m='148030'>previous</span> <span m='148490'>step</span> <span
  m='148850'>was</span> <span m='149010'>successful,</span> <span
  m='150510'>this</span> <span m='150760'>function</span> <span
  m='151260'>value</span> <span m='152240'>is</span> <span m='152840'>the</span>
  <span m='152970'>same</span> <span m='153370'>as</span> <span
  m='153550'>the</span> <span m='154190'>last</span> <span
  m='155140'>function</span> <span m='155590'>value</span> <span
  m='155960'>from</span> <span m='156180'>the</span> <span
  m='156280'>previous</span> <span m='156870'>step.</span> </p><p><span
  m='158530'>That</span> <span m='158800'>slope</span> <span
  m='159200'>is</span> <span m='159330'>used</span> <span m='159790'>to</span>
  <span m='159950'>step</span> <span m='160380'>into</span> <span
  m='160680'>the</span> <span m='161000'>middle</span> <span
  m='161380'>of</span> <span m='161470'>the</span> <span
  m='161600'>interval,</span> <span m='162640'>function</span> <span
  m='163110'>is</span> <span m='163220'>evaluated</span> <span
  m='163940'>there.</span> <span m='165330'>That</span> <span
  m='165610'>slope</span> <span m='166010'>is</span> <span
  m='166140'>used</span> <span m='166600'>to</span> <span m='166710'>step</span>
  <span m='167140'>3/4</span> <span m='167950'>of</span> <span
  m='168040'>the</span> <span m='168140'>way</span> <span
  m='168480'>across</span> <span m='168970'>the</span> <span
  m='169070'>interval</span> <span m='170150'>and</span> <span
  m='170440'>a</span> <span m='171030'>third</span> <span
  m='171430'>slope</span> <span m='171850'>obtained</span> <span
  m='172420'>there.</span> <span m='173730'>Then</span> <span
  m='174020'>these</span> <span m='174230'>three</span> <span
  m='174660'>values</span> <span m='175680'>are</span> <span
  m='175870'>used</span> <span m='176260'>to</span> <span m='176390'>take</span>
  <span m='176690'>the</span> <span m='176780'>step.</span> <span
  m='178420'>yn</span> <span m='179090'>plus</span> <span m='179400'>1</span>
  <span m='180250'>is</span> <span m='180430'>a</span> <span
  m='180510'>linear</span> <span m='180910'>combination</span> <span
  m='181960'>of</span> <span m='182150'>these</span> <span
  m='182590'>three</span> <span m='182900'>function</span> <span
  m='183440'>values.</span> <span m='184980'>Then</span> <span
  m='186200'>the</span> <span m='186320'>function</span> <span
  m='186820'>is</span> <span m='187040'>evaluated</span> <span
  m='187495'>to</span> <span m='187950'>get</span> <span m='188220'>a</span>
  <span m='188580'>fourth</span> <span m='188960'>slope</span> <span
  m='189850'>at</span> <span m='190060'>the</span> <span m='190250'>end</span>
  <span m='190490'>of</span> <span m='190590'>the</span> <span
  m='190730'>interval.</span> <span m='191820'>And</span> <span
  m='191950'>then,</span> <span m='192690'>these</span> <span
  m='193390'>four</span> <span m='193950'>slopes</span> <span
  m='194970'>are</span> <span m='195180'>used</span> <span m='195710'>to</span>
  <span m='196020'>estimate</span> <span m='196680'>the</span> <span
  m='196820'>error.</span> </p><p><span m='197750'>The</span> <span
  m='198030'>error</span> <span m='198465'>estimate</span> <span
  m='198900'>here</span> <span m='199770'>is</span> <span m='200000'>the</span>
  <span m='200090'>difference</span> <span m='201400'>between</span> <span
  m='202950'>yn</span> <span m='203220'>plus</span> <span m='203560'>1</span>
  <span m='204550'>and</span> <span m='205860'>another</span> <span
  m='207090'>estimate</span> <span m='207850'>of</span> <span
  m='208070'>the</span> <span m='208190'>solution</span> <span
  m='209400'>that's</span> <span m='209960'>obtained</span> <span
  m='210640'>from</span> <span m='210840'>a</span> <span
  m='210900'>second</span> <span m='211330'>order</span> <span
  m='211620'>method</span> <span m='212680'>that</span> <span
  m='212860'>we</span> <span m='213140'>don't</span> <span
  m='213430'>actually</span> <span m='214280'>evaluate.</span> <span
  m='216000'>We</span> <span m='216310'>just</span> <span m='216570'>need</span>
  <span m='216850'>the</span> <span m='216920'>difference</span> <span
  m='217440'>between</span> <span m='217870'>that</span> <span
  m='218160'>method</span> <span m='218890'>and</span> <span
  m='219140'>yn</span> <span m='219730'>plus</span> <span m='220030'>1</span>
  <span m='220530'>to</span> <span m='220890'>estimate</span> <span
  m='221540'>the</span> <span m='221710'>error.</span> </p><p><span
  m='222560'>This</span> <span m='222750'>estimated</span> <span
  m='223330'>error</span> <span m='224040'>is</span> <span
  m='224280'>compared</span> <span m='225090'>with</span> <span
  m='225750'>a</span> <span m='226500'>user-supplied</span> <span
  m='227450'>tolerance.</span> <span m='229070'>If</span> <span
  m='230540'>the</span> <span m='230690'>estimated</span> <span
  m='231290'>error</span> <span m='231740'>is</span> <span
  m='231930'>less</span> <span m='232250'>than</span> <span m='232400'>a</span>
  <span m='232490'>tolerance,</span> <span m='233170'>then</span> <span
  m='233300'>the</span> <span m='233400'>step</span> <span m='233740'>is</span>
  <span m='233820'>successful.</span> <span m='235370'>And</span> <span
  m='236140'>this</span> <span m='237060'>fourth</span> <span
  m='237520'>slope,</span> <span m='238760'>s4,</span> <span
  m='239530'>becomes</span> <span m='240000'>the</span> <span
  m='240335'>s1</span> <span m='240670'>of</span> <span m='240760'>the</span>
  <span m='240830'>next</span> <span m='241140'>step.</span> </p><p><span
  m='243010'>If</span> <span m='243300'>the</span> <span
  m='243510'>answer</span> <span m='243950'>is</span> <span
  m='244150'>bigger</span> <span m='244420'>than</span> <span
  m='244630'>the</span> <span m='244770'>tolerance,</span> <span
  m='246120'>then</span> <span m='246710'>the</span> <span
  m='247000'>error</span> <span m='247290'>could</span> <span
  m='247520'>be</span> <span m='247660'>the</span> <span m='248000'>basis</span>
  <span m='248600'>for</span> <span m='248780'>adjusting</span> <span
  m='249540'>the</span> <span m='249670'>step</span> <span
  m='249990'>size.</span> <span m='250800'>In</span> <span
  m='250940'>either</span> <span m='251200'>case,</span> <span m='252090'>the
  error</span> <span m='252420'>estimate</span> <span m='253330'>is</span> <span
  m='253630'>the</span> <span m='253720'>basis</span> <span
  m='254250'>for</span> <span m='254380'>adjusting</span> <span
  m='254940'>the</span> <span m='255070'>step</span> <span
  m='255370'>size</span> <span m='256300'>for</span> <span m='256459'>the</span>
  <span m='256579'>next</span> <span m='256920'>step.</span> <span
  m='258410'>This</span> <span m='258670'>is</span> <span m='258880'>the</span>
  <span m='258990'>Bogacki-Shampine</span> <span m='259290'>Order</span> <span
  m='259620'>3(2)</span> <span m='262210'>Method</span> <span
  m='263830'>that's</span> <span m='264160'>the</span> <span
  m='264250'>basis</span> <span m='264780'>for</span> <span
  m='267360'>ODE</span> <span m='267780'>23.</span> </p><p><span
  m='274060'>Let's</span> <span m='274360'>look</span> <span
  m='274600'>at</span> <span m='274730'>some</span> <span m='275180'>very</span>
  <span m='275600'>simple</span> <span m='276400'>uses</span> <span
  m='277080'>of</span> <span m='279030'>ODE23</span> <span
  m='280510'>just</span> <span m='280730'>to</span> <span m='280820'>get</span>
  <span m='281030'>started.</span> <span m='282240'>I'm</span> <span
  m='282400'>going</span> <span m='282560'>to</span> <span
  m='282660'>take</span> <span m='282910'>the</span> <span
  m='283020'>differential</span> <span m='283660'>equation</span> <span
  m='284690'>y</span> <span m='285020'>prime</span> <span m='285430'>is</span>
  <span m='285540'>equal</span> <span m='285840'>to</span> <span
  m='285930'>y.</span> <span m='286950'>So</span> <span m='287160'>I'm</span>
  <span m='287330'>going</span> <span m='287510'>to</span> <span
  m='287630'>compute</span> <span m='289310'>e</span> <span m='289490'>to</span>
  <span m='289580'>the</span> <span m='289790'>t.</span> <span
  m='291500'>And</span> <span m='292760'>just</span> <span
  m='293110'>call</span> <span m='293470'>ODE23</span> <span
  m='295980'>on</span> <span m='296230'>the</span> <span
  m='296440'>interval</span> <span m='296950'>from</span> <span
  m='297170'>0</span> <span m='297550'>to</span> <span m='297670'>1,</span>
  <span m='298720'>with</span> <span m='299010'>initial</span> <span
  m='299500'>value</span> <span m='299930'>1.</span> <span m='301320'>No</span>
  <span m='301660'>output</span> <span m='302120'>arguments.</span> <span
  m='303180'>If</span> <span m='303370'>I</span> <span m='303460'>call</span>
  <span m='303920'>it</span> <span m='303960'>ODE23,</span> <span
  m='305770'>it</span> <span m='305930'>just</span> <span
  m='306260'>plots</span> <span m='306700'>the</span> <span
  m='306820'>solution.</span> <span m='308210'>Here</span> <span
  m='308580'>it</span> <span m='308870'>is.</span> <span m='309000'>It
  just</span> <span m='309250'>produces</span> <span m='309810'>a</span> <span
  m='309910'>plot.</span> <span m='310850'>It</span> <span m='311120'>picks
  a</span> <span m='312350'>step</span> <span m='312730'>size,</span> <span
  m='313720'>goes</span> <span m='314020'>from</span> <span m='314180'>0</span>
  <span m='314540'>to</span> <span m='314670'>1,</span> <span
  m='315620'>and</span> <span m='315810'>here</span> <span m='316500'>it</span>
  <span m='316740'>gets</span> <span m='318030'>the</span> <span
  m='318150'>final</span> <span m='318560'>value</span> <span
  m='319020'>of</span> <span m='319170'>e--</span> <span m='320230'>2.7</span>
  <span m='321680'>something.</span> </p><p><span m='324440'>If</span> <span
  m='324710'>I</span> <span m='324820'>do</span> <span m='325110'>supply</span>
  <span m='325630'>output</span> <span m='326110'>arguments.</span> <span
  m='328330'>I</span> <span m='328520'>say</span> <span m='328830'>t</span>
  <span m='329240'>comma</span> <span m='329630'>y</span> <span
  m='330640'>equals</span> <span m='331110'>ODE23,</span> <span
  m='333430'>it</span> <span m='333660'>comes</span> <span
  m='333980'>back</span> <span m='334880'>with</span> <span
  m='335140'>values</span> <span m='335690'>of</span> <span m='335870'>t</span>
  <span m='336440'>and</span> <span m='336590'>y.</span> <span
  m='337780'>ODE23</span> <span m='339020'>picks</span> <span
  m='339350'>the</span> <span m='339440'>values</span> <span
  m='339990'>of</span> <span m='340150'>t</span> <span m='340670'>it</span>
  <span m='340770'>wants.</span> <span m='341810'>This</span> <span
  m='342010'>is</span> <span m='342210'>a</span> <span m='342330'>trivial</span>
  <span m='342870'>problem.</span> <span m='343810'>It</span> <span
  m='343970'>ends</span> <span m='344270'>up</span> <span
  m='344660'>picking</span> <span m='345070'>a</span> <span
  m='345140'>step</span> <span m='345450'>size</span> <span m='345880'>of</span>
  <span m='346040'>0.1.</span> <span m='347900'>After</span> <span
  m='348230'>it</span> <span m='348340'>gets</span> <span
  m='348590'>started,</span> <span m='349120'>it</span> <span
  m='349220'>chooses</span> <span m='349670'>an initial</span> <span
  m='350150'>step</span> <span m='350430'>size</span> <span m='350700'>of</span>
  <span m='351090'>.08</span> <span m='351880'>for</span> <span
  m='352120'>whatever</span> <span m='355800'>error</span> <span
  m='356200'>tolerances.</span> <span m='357580'>And</span> <span
  m='358410'>the</span> <span m='358540'>final</span> <span
  m='358940'>value</span> <span m='359400'>of</span> <span m='359590'>y</span>
  <span m='360400'>is</span> <span m='360740'>2.718,</span> <span
  m='362800'>which</span> <span m='363750'>is</span> <span m='363990'>the</span>
  <span m='364060'>value</span> <span m='364480'>of</span> <span
  m='364570'>e.</span> </p><p><span m='365470'>So</span> <span
  m='366350'>these</span> <span m='366700'>are</span> <span
  m='366740'>the</span> <span m='366970'>two</span> <span
  m='367240'>simple</span> <span m='367780'>uses</span> <span
  m='368220'>of</span> <span m='368310'>ODE23.</span> <span m='370190'>If</span>
  <span m='370380'>you</span> <span m='370730'>don't</span> <span
  m='371510'>supply</span> <span m='371950'>any</span> <span
  m='372170'>output</span> <span m='372550'>arguments,</span> <span
  m='373200'>it</span> <span m='373580'>draws</span> <span m='373940'>a</span>
  <span m='374020'>graph.</span> <span m='375130'>If</span> <span
  m='375320'>you</span> <span m='375450'>do</span> <span
  m='375680'>supply</span> <span m='376150'>output</span> <span
  m='376610'>arguments,</span> <span m='377260'>t</span> <span
  m='377360'>and</span> <span m='377580'>y,</span> <span m='378460'>it</span>
  <span m='378670'>comes</span> <span m='378990'>back</span> <span
  m='379380'>with</span> <span m='379550'>the</span> <span
  m='379620'>values</span> <span m='380160'>of</span> <span m='380310'>t</span>
  <span m='380540'>and</span> <span m='380660'>y</span> <span
  m='382610'>choosing</span> <span m='383090'>the</span> <span
  m='383170'>values</span> <span m='383660'>of</span> <span m='383820'>t</span>
  <span m='384170'>to</span> <span m='385850'>meet</span> <span
  m='386230'>the</span> <span m='386380'>error.</span> <span
  m='387160'>The</span> <span m='387320'>default</span> <span
  m='388010'>error</span> <span m='388350'>tolerances</span> <span
  m='389110'>is</span> <span m='389270'>10</span> <span m='389520'>to</span>
  <span m='389590'>the</span> <span m='389660'>minus</span> <span
  m='390160'>3.</span> <span m='391090'>So</span> <span m='391960'>this</span>
  <span m='392310'>value</span> <span m='392860'>is</span> <span
  m='393420'>going</span> <span m='393660'>to</span> <span m='393720'>be</span>
  <span m='393890'>accurate</span> <span m='394530'>to</span> <span
  m='394630'>three</span> <span m='394940'>digits.</span> <span
  m='395880'>And</span> <span m='396340'>sure</span> <span
  m='396630'>enough</span> <span m='396960'>that's</span> <span
  m='397250'>what</span> <span m='397410'>we</span> <span m='397560'>got.</span>
  </p><p><span m='402430'>Now</span> <span m='402480'>let's</span> <span
  m='402790'>try</span> <span m='403020'>something</span> <span
  m='403450'>a</span> <span m='403480'>little</span> <span
  m='403690'>more</span> <span m='403920'>challenging</span> <span
  m='404680'>to</span> <span m='404750'>see</span> <span m='405140'>the</span>
  <span m='406270'>automatic</span> <span m='407240'>error-controlled</span>
  <span m='408370'>step</span> <span m='408640'>size</span> <span
  m='409050'>choice</span> <span m='409500'>in</span> <span
  m='409660'>action.</span> <span m='411690'>Set</span> <span
  m='412090'>a</span> <span m='412370'>equal</span> <span m='412740'>to</span>
  <span m='412850'>a</span> <span m='412960'>quarter.</span> <span
  m='414870'>And</span> <span m='415080'>then</span> <span m='415330'>set</span>
  <span m='415690'>y0</span> <span m='417080'>equal</span> <span
  m='417660'>to</span> <span m='418440'>15.9.</span> <span m='420940'>If</span>
  <span m='421150'>I</span> <span m='421260'>would</span> <span
  m='421510'>set</span> <span m='421740'>it</span> <span m='421880'>to</span>
  <span m='421990'>16,</span> <span m='423010'>which</span> <span
  m='423240'>is</span> <span m='423440'>1</span> <span m='423710'>over</span>
  <span m='424080'>a</span> <span m='424210'>squared,</span> <span
  m='425440'>I'd</span> <span m='425670'>run</span> <span m='425880'>into</span>
  <span m='426210'>a</span> <span m='426280'>singularity.</span> <span
  m='428190'>Now</span> <span m='428370'>the</span> <span
  m='428510'>differential</span> <span m='429080'>equation</span> <span
  m='430430'>is</span> <span m='430890'>y</span> <span m='431240'>prime</span>
  <span m='432240'>is</span> <span m='432470'>equal</span> <span
  m='432870'>to</span> <span m='433100'>2</span> <span m='434026'>(a</span>
  <span m='434490'>minus</span> <span m='435030'>t)</span> <span
  m='435810'>times</span> <span m='436310'>y</span> <span
  m='436650'>squared.</span> <span m='438580'>I'm</span> <span
  m='438800'>going</span> <span m='439180'>to</span> <span
  m='439600'>integrate</span> <span m='440280'>this</span> <span
  m='441500'>with</span> <span m='441730'>the</span> <span
  m='442035'>ODE23</span> <span m='444260'>on</span> <span m='444540'>the</span>
  <span m='444670'>interval</span> <span m='445140'>from</span> <span
  m='445380'>0</span> <span m='445740'>to</span> <span m='445860'>1</span> <span
  m='446660'>starting</span> <span m='447200'>at</span> <span
  m='447310'>y0,</span> <span m='448560'>and</span> <span
  m='449410'>saving</span> <span m='450060'>the</span> <span
  m='450160'>results</span> <span m='451270'>in</span> <span m='451530'>t</span>
  <span m='451800'>and</span> <span m='451890'>y,</span> <span
  m='453010'>and</span> <span m='453290'>then</span> <span
  m='453970'>plotting</span> <span m='454500'>them.</span> <span
  m='456530'>So</span> <span m='456780'>here's</span> <span m='457010'>my</span>
  <span m='457220'>plot</span> <span m='457680'>command,</span> <span
  m='459710'>and</span> <span m='460910'>there</span> <span m='461180'>is</span>
  <span m='461310'>the</span> <span m='461430'>solution.</span> </p><p><span
  m='462810'>So</span> <span m='463690'>there</span> <span m='463930'>is</span>
  <span m='464090'>a</span> <span m='464750'>near</span> <span
  m='465220'>singularity</span> <span m='465580'>at</span> <span
  m='465940'>a.</span> <span m='467770'>It</span> <span m='467960'>nearly</span>
  <span m='468350'>blows</span> <span m='468800'>up.</span> <span
  m='469490'>And</span> <span m='469690'>then</span> <span m='469830'>it</span>
  <span m='469990'>settles</span> <span m='470450'>back</span> <span
  m='470770'>down.</span> <span m='471730'>So</span> <span m='472540'>the</span>
  <span m='473510'>points</span> <span m='474170'>are</span> <span
  m='474690'>bunched</span> <span m='475210'>together</span> <span
  m='476270'>as</span> <span m='476450'>you</span> <span m='476610'>go</span>
  <span m='476900'>up</span> <span m='477120'>to</span> <span
  m='477220'>the</span> <span m='477370'>singularity</span> <span
  m='478060'>and</span> <span m='478220'>come</span> <span
  m='478460'>back</span> <span m='478760'>down,</span> <span
  m='479800'>but</span> <span m='479890'>then</span> <span m='480150'>get</span>
  <span m='480440'>farther</span> <span m='480880'>apart</span> <span
  m='482090'>as</span> <span m='482250'>the</span> <span
  m='482360'>solution</span> <span m='482950'>settles</span> <span
  m='483430'>down.</span> <span m='484340'>And</span> <span
  m='485030'>the</span> <span m='485540'>ODE</span> <span
  m='486020'>solver</span> <span m='486920'>is</span> <span
  m='487150'>able</span> <span m='487630'>to</span> <span m='487930'>take</span>
  <span m='488360'>bigger</span> <span m='488810'>steps.</span> </p><p><span
  m='491050'>To</span> <span m='491320'>see</span> <span m='491570'>what</span>
  <span m='491780'>steps</span> <span m='492150'>were</span> <span
  m='492290'>actually</span> <span m='492980'>taken,</span> <span
  m='494060'>let's</span> <span m='494380'>compute</span> <span
  m='494960'>the</span> <span m='495150'>difference</span> <span
  m='495770'>of</span> <span m='495940'>t,</span> <span m='497660'>and</span>
  <span m='498510'>then</span> <span m='499300'>plot</span> <span
  m='499700'>that.</span> <span m='505620'>So</span> <span
  m='506400'>here</span> <span m='506960'>are</span> <span m='507280'>the</span>
  <span m='507760'>step</span> <span m='508230'>sizes</span> <span
  m='508700'>that</span> <span m='508840'>were</span> <span
  m='509230'>taken.</span> <span m='510100'>And</span> <span
  m='510420'>we</span> <span m='510570'>see</span> <span m='510840'>that</span>
  <span m='511830'>a</span> <span m='513090'>small</span> <span
  m='513760'>step</span> <span m='514100'>size</span> <span
  m='514580'>was</span> <span m='514799'>taken</span> <span
  m='515630'>near</span> <span m='515960'>the</span> <span
  m='517460'>almost</span> <span m='517940'>singularity</span> <span
  m='518710'>at</span> <span m='519200'>that</span> <span
  m='519450'>0.25.</span> <span m='520980'>And</span> <span
  m='521220'>then</span> <span m='521840'>as</span> <span m='522030'>we</span>
  <span m='522190'>get</span> <span m='522440'>towards</span> <span
  m='522760'>the</span> <span m='522919'>end</span> <span m='523140'>of</span>
  <span m='523190'>the</span> <span m='523370'>interval,</span> <span
  m='524380'>a</span> <span m='524520'>larger</span> <span
  m='524990'>step</span> <span m='525300'>size</span> <span m='525565'>is</span>
  <span m='525830'>taken.</span> <span m='526810'>And</span> <span
  m='527010'>then,</span> <span m='527240'>finally,</span> <span
  m='528740'>the</span> <span m='528840'>step</span> <span
  m='529160'>size</span> <span m='529560'>just</span> <span m='529820'>to</span>
  <span m='529950'>reach</span> <span m='530250'>the</span> <span
  m='530430'>end</span> <span m='531490'>of</span> <span m='531560'>the</span>
  <span m='531670'>interval</span> <span m='532920'>is</span> <span
  m='533200'>taken</span> <span m='534240'>as</span> <span m='534450'>the</span>
  <span m='534570'>last</span> <span m='534890'>step.</span> <span
  m='535920'>So</span> <span m='536110'>that's</span> <span
  m='536440'>the</span> <span m='536590'>automatic</span> <span
  m='537180'>step</span> <span m='537470'>size</span> <span
  m='537910'>choice</span> <span m='539534'>of</span> <span
  m='540480'>ODE23.</span> </p><p><span m='546230'>BS23</span> <span
  m='547380'>has</span> <span m='547840'>a</span> <span m='548950'>nice</span>
  <span m='549480'>natural</span> <span m='550990'>interpolant</span> <span
  m='551860'>that</span> <span m='551960'>goes</span> <span
  m='552260'>along</span> <span m='552590'>with</span> <span
  m='552790'>it</span> <span m='554120'>that's</span> <span
  m='554210'>actually</span> <span m='554590'>been</span> <span
  m='554800'>known</span> <span m='555190'>for</span> <span
  m='555460'>over</span> <span m='555740'>100</span> <span
  m='556090'>years.</span> <span m='556700'>It's</span> <span
  m='556830'>called</span> <span m='558040'>Hermite</span> <span
  m='559080'>Cubic</span> <span m='559610'>Interpolation.</span> <span
  m='561510'>We</span> <span m='561660'>know</span> <span m='561930'>that</span>
  <span m='562600'>two</span> <span m='562850'>points</span> <span
  m='563390'>determine</span> <span m='563900'>a</span> <span
  m='563960'>straight</span> <span m='564380'>line.</span> <span
  m='565850'>Well,</span> <span m='566220'>two</span> <span
  m='566430'>points</span> <span m='566990'>and</span> <span
  m='567180'>two</span> <span m='567420'>slopes</span> <span
  m='568330'>determine</span> <span m='568800'>a</span> <span
  m='568900'>cubic.</span> </p><p><span m='570520'>On</span> <span
  m='570650'>each</span> <span m='570780'>interval</span> <span
  m='571320'>we</span> <span m='571450'>have</span> <span m='571750'>the</span>
  <span m='571830'>values</span> <span m='572340'>of</span> <span
  m='572470'>y</span> <span m='573010'>and</span> <span m='573220'>yn</span>
  <span m='573860'>plus</span> <span m='574210'>1.</span> <span
  m='575960'>We</span> <span m='576150'>also</span> <span m='576510'>have</span>
  <span m='576730'>two</span> <span m='576950'>slopes,</span> <span
  m='577650'>namely</span> <span m='578020'>this.</span> <span
  m='578710'>We</span> <span m='578890'>have</span> <span m='579080'>the</span>
  <span m='579180'>derivatives</span> <span m='579880'>at</span> <span
  m='580040'>the</span> <span m='580230'>end</span> <span
  m='580470'>points,</span> <span m='581880'>yn</span> <span
  m='582600'>prime</span> <span m='583240'>and</span> <span m='583390'>yn</span>
  <span m='584050'>plus</span> <span m='584330'>1</span> <span
  m='584630'>prime,</span> <span m='585380'>that's</span> <span
  m='585870'>the</span> <span m='585980'>values</span> <span
  m='586490'>of</span> <span m='587580'>the</span> <span
  m='588930'>differential</span> <span m='589450'>equation</span> <span
  m='590060'>at</span> <span m='590200'>those</span> <span
  m='590480'>points.</span> <span m='591490'>So</span> <span
  m='591700'>those</span> <span m='592040'>four</span> <span
  m='592270'>values</span> <span m='593500'>determine</span> <span
  m='593940'>a</span> <span m='594050'>cubic</span> <span m='595000'>that</span>
  <span m='595170'>goes</span> <span m='595500'>through</span> <span
  m='595620'>those</span> <span m='596350'>two</span> <span
  m='596570'>points</span> <span m='597120'>and</span> <span
  m='597260'>has</span> <span m='597590'>those</span> <span
  m='597890'>two</span> <span m='598090'>slopes.</span> </p><p><span
  m='599830'>This</span> <span m='600140'>cubic</span> <span
  m='600670'>allows</span> <span m='602190'>the</span> <span
  m='602310'>software</span> <span m='603330'>to</span> <span
  m='603900'>evaluate</span> <span m='604730'>the</span> <span
  m='604840'>solution</span> <span m='606100'>at</span> <span
  m='606290'>any</span> <span m='606630'>point</span> <span m='606980'>in</span>
  <span m='607080'>the</span> <span m='607220'>interval</span> <span
  m='608140'>without</span> <span m='608640'>additional</span> <span
  m='609380'>cost</span> <span m='610390'>as</span> <span
  m='610740'>defined</span> <span m='611280'>by</span> <span
  m='611990'>addition</span> <span m='612530'>evaluations</span> <span
  m='613460'>of</span> <span m='613550'>the</span> <span
  m='613650'>function</span> <span m='614090'>f.</span> <span
  m='615380'>This</span> <span m='615980'>can</span> <span m='616120'>be</span>
  <span m='616240'>used</span> <span m='616770'>to</span> <span
  m='617280'>draw</span> <span m='617500'>graphs</span> <span
  m='618100'>of</span> <span m='618180'>the</span> <span
  m='618310'>solution,</span> <span m='619230'>nice</span> <span
  m='619540'>smooth</span> <span m='619930'>graphs</span> <span
  m='620290'>of</span> <span m='620470'>the</span> <span
  m='620640'>solution,</span> <span m='622020'>find</span> <span
  m='622350'>zeroes</span> <span m='622860'>of</span> <span
  m='622950'>the</span> <span m='623070'>solution,</span> <span
  m='624450'>do</span> <span m='624680'>event</span> <span
  m='625070'>handling,</span> <span m='626840'>and</span> <span
  m='626980'>so</span> <span m='627280'>on.</span> <span
  m='627830'>Another</span> <span m='628110'>feature</span> <span
  m='628520'>provided</span> <span m='629070'>by</span> <span
  m='629850'>ODE23.</span> </p>
uid: 1bac5d45b4229cc3b16dcd3e25279c20
type: courses
layout: video
---
